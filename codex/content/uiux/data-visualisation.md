# Data Visualisation Principles

Good data visualisation makes patterns visible and decisions easier. Bad visualisation misleads or overwhelms. These principles apply whether you're building sparklines, dashboards, or full analytics surfaces.

## Choose the right chart type

| Question | Chart |
|----------|-------|
| How does X change over time? | Line / area chart |
| How do parts contribute to a whole? | Donut / stacked bar |
| How do items compare? | Bar chart (horizontal for many items) |
| What's the distribution? | Histogram / box plot |
| Are two variables correlated? | Scatter plot |
| What's the rate of change? | Sparkline + delta pill |
| How active was this period? | Heatmap |

Never use pie charts with more than 5 slices — the human eye can't reliably compare adjacent angles beyond that.

## Sparklines — dense time-series in tight spaces

```tsx
// Pure SVG sparkline — no library needed for simple lines
interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

function Sparkline({ data, width = 80, height = 24, color = '#58a6ff', strokeWidth = 1.5 }: SparklineProps) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

## Color for data — not decoration

```
✅ Status semantics (always these, never different):
- Positive / up / success → #7fb77e (green)
- Negative / down / error → red / danger color
- Warning → amber #facc15
- Neutral / comparison → muted gray

✅ Sequential scales (low → high intensity of one thing):
- One-hue gradient (light to saturated)
- Appropriate for: heatmaps, choropleth maps, single-metric ranges

✅ Diverging scales (below/above a midpoint):
- Two-hue: red ← 0 → green (or safer: red ← 0 → blue)
- Appropriate for: profit/loss, temperature anomaly

❌ Never:
- Rainbow color scales — they mislead about data order
- Red/green for categorical data — colorblind-unfriendly
- More than 7 distinct categories by color — no one can decode them
```

## Axes and labels — precision over decoration

```tsx
// ❌ Too much chrome — gridlines, axes, labels fight the data
<LineChart data={data} showGrid showXAxis showYAxis showTooltip showLegend />

// ✅ Minimum viable chrome — data is the hero
<LineChart
  data={data}
  showTooltip          // interaction, not decoration
  showYAxis={false}    // value is in the tooltip
  // Labels: only the first and last tick on X axis
  xAxisTicks={[data[0].date, data[data.length - 1].date]}
/>
```

## Responsive chart sizing

```tsx
// Avoid fixed dimensions — charts should fill their container
import { ResponsiveContainer, LineChart, Line } from 'recharts';

<ResponsiveContainer width="100%" height={160}>
  <LineChart data={data}>
    <Line type="monotone" dataKey="value" stroke="#58a6ff" dot={false} />
  </LineChart>
</ResponsiveContainer>
```

## Accessibility for charts

```tsx
// Every chart needs a text alternative for screen readers
<figure>
  <figcaption className="sr-only">
    Weekly spending: €120 Mon, €45 Tue, €89 Wed, €200 Thu, €34 Fri
  </figcaption>
  <SpendingChart data={weeklyData} aria-hidden="true" />
</figure>

// Screen-reader-only class (visually hidden but accessible)
const srOnly = css`
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
  white-space: nowrap; border: 0;
`;
```

## Related

- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals) for rendering performance of heavy charts.
- See also: [Accessibility → WCAG Essentials](#/codex/accessibility-wcag-essentials) for chart accessibility requirements.
- See also: [UI/UX → Design Tokens](#/codex/uiux-design-tokens) for semantic color tokens.

## Sources

- [Edward Tufte — The Visual Display of Quantitative Information](https://www.edwardtufte.com/tufte/books_vdqi)
- [Observable — Chart types guide](https://observablehq.com/plot/)
- [web.dev — Color and contrast accessibility](https://web.dev/articles/color-and-contrast-accessibility)
- [Recharts docs](https://recharts.org/en-US/api)
