# WebSockets and Server-Sent Events

Real-time features — live feeds, collaborative editing, chat, live dashboards — require server-to-client push. Two standard mechanisms: WebSockets (bidirectional, full-duplex) and Server-Sent Events (server-to-client only, built on HTTP).

## WebSockets

A WebSocket connection starts as an HTTP/1.1 request and upgrades to a persistent TCP connection. Both sides can send messages at any time.

```ts
// Client
const ws = new WebSocket('wss://api.example.com/live');

ws.addEventListener('open', () => {
  ws.send(JSON.stringify({ type: 'subscribe', channel: 'prices' }));
});

ws.addEventListener('message', (event) => {
  const data = JSON.parse(event.data) as PriceUpdate;
  updateChart(data);
});

ws.addEventListener('close', (event) => {
  console.log(`Disconnected: ${event.code} ${event.reason}`);
  // Reconnect with exponential backoff
  scheduleReconnect();
});

ws.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});
```

## Reconnection with exponential backoff

```ts
function createReconnectingWebSocket(url: string) {
  let ws: WebSocket | null = null;
  let attempt = 0;
  let disposed = false;

  function connect() {
    ws = new WebSocket(url);
    ws.onopen = () => { attempt = 0; };
    ws.onclose = () => {
      if (disposed) return;
      const delay = Math.min(1000 * 2 ** attempt, 30_000);
      attempt++;
      setTimeout(connect, delay);
    };
  }

  connect();
  return {
    send: (data: string) => ws?.readyState === WebSocket.OPEN && ws.send(data),
    close: () => { disposed = true; ws?.close(); },
  };
}
```

## Server-Sent Events

SSE is simpler — the server streams events over a regular HTTP response. The browser reconnects automatically on disconnect.

```ts
// Server (Express / Next.js API route)
export function GET(req: Request) {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const send = (event: string, data: unknown) => {
        controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      };

      const interval = setInterval(() => {
        send('price', { symbol: 'BTCEUR', price: getBtcPrice() });
      }, 1000);

      // Cleanup when client disconnects
      req.signal.addEventListener('abort', () => clearInterval(interval));
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

// Client
const source = new EventSource('/api/prices');
source.addEventListener('price', (event) => {
  const data = JSON.parse(event.data);
  updatePrice(data.symbol, data.price);
});
source.onerror = () => {
  // EventSource reconnects automatically — no manual retry needed
};
```

## Choosing between WebSockets and SSE

| Concern | WebSockets | SSE |
|---------|-----------|-----|
| Direction | Bidirectional | Server → client only |
| Protocol | Custom framing over TCP | Plain HTTP |
| Reconnection | Manual | Automatic |
| HTTP/2 support | Separate connection | Multiplexed over existing |
| Firewall / proxy | Sometimes blocked | Works everywhere HTTP does |
| Binary data | Native binary frames | Base64 overhead |
| Browser support | Universal | Universal (no IE11) |

**Rule of thumb:** use SSE when you only need server-to-client data (live feeds, notifications, progress streams). Use WebSockets when clients also send frequent messages (chat, collaborative editing, games).

## React hook for SSE

```ts
function useLivePrices(symbol: string) {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const source = new EventSource(`/api/prices?symbol=${symbol}`);
    source.addEventListener('price', (e) => {
      setPrice(JSON.parse(e.data).price);
    });
    return () => source.close();
  }, [symbol]);

  return price;
}
```

## Related

- See also: [Foundations → HTTP Fundamentals](#/codex/foundations-http-fundamentals) for HTTP/2 and connection multiplexing.
- See also: [React → Hooks Rules and Mental Model](#/codex/react-hooks-rules-and-mental-model) for cleanup in useEffect.

## Sources

- [MDN — WebSockets API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [MDN — Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [web.dev — WebSockets](https://web.dev/articles/websocket)
- [HTML Living Standard — SSE](https://html.spec.whatwg.org/multipage/server-sent-events.html)
