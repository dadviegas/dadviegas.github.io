"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([["531"],{9855(e,o,a){a.d(o,{A:()=>I});var n=a(5723),i=a(7991),t=a(6859),r=a.n(t),l=a(2799),s=a(3775),c=a(4368),d=a(9121),m=a(5357),g=a(9522);let p=(0,l.keyframes)`0%,100%{opacity:1}50%{opacity:.4}`,u=r().div`
  display: flex;
  flex-direction: column;
  gap: ${m.w4.spacing.lg};
`,f=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${m.w4.spacing.sm};
`,h=r().h2`
  font-size: ${m.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${m.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${m.w4.spacing.sm};
`,x=r().div`
  display: flex;
  align-items: center;
  gap: ${m.w4.spacing.sm};
`,y=r().button`
  padding: 4px 12px;
  border-radius: ${m.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?"#58a6ff":m.w4.colors.border};
  background: ${({active:e})=>e?"rgba(88,166,255,0.1)":"transparent"};
  color: ${({active:e})=>e?"#58a6ff":m.w4.colors.mainTextMuted};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #58a6ff;
    color: #58a6ff;
  }
`,b=r().select`
  padding: 4px 8px;
  background: ${m.w4.colors.mainBg};
  border: 1px solid ${m.w4.colors.border};
  border-radius: ${m.w4.borderRadius.sm};
  color: ${m.w4.colors.mainText};
  font-size: 12px;
  outline: none;
  cursor: pointer;

  &:focus { border-color: #58a6ff; }
`,w=r().div`
  display: flex;
  gap: ${m.w4.spacing.xl};
  align-items: flex-start;

  @media (max-width: ${m.w4.breakpoints.lg}) {
    flex-direction: column;
  }
`,z=r().div`
  flex: 1;
  min-width: 0;
`,A=r().div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 4px;
`,$=r().div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 6px;
`,v=r().div`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: ${m.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 0;
`,j=r().div`
  background: ${({bg:e,empty:o})=>o?"transparent":e};
  border-radius: ${m.w4.borderRadius.sm};
  padding: 8px 6px;
  min-height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({empty:e})=>e?"default":"pointer"};
  border: 1px solid ${({empty:e})=>e?"transparent":"rgba(255,255,255,0.05)"};
  transition: filter 0.12s;
  position: relative;

  &:hover {
    filter: ${({empty:e})=>e?"none":"brightness(1.2)"};
  }
`,k=r().div`
  font-size: 10px;
  color: rgba(255,255,255,0.55);
  font-family: ${m.w4.typography.fontFamilyMono};
`,S=r().div`
  font-size: 13px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  font-family: ${m.w4.typography.fontFamilyMono};
`,M=r().div`
  background: ${m.w4.colors.border};
  border-radius: ${m.w4.borderRadius.sm};
  min-height: 58px;
  animation: ${p} 1.5s ease-in-out infinite;
`,T=r().div`
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${m.w4.spacing.sm};
`,P=r().div`
  background: ${m.w4.colors.mainBg};
  border: 1px solid ${m.w4.colors.border};
  border-radius: ${m.w4.borderRadius.md};
  padding: ${m.w4.spacing.sm} ${m.w4.spacing.md};
`,B=r().div`
  font-size: 10px;
  font-weight: 600;
  color: ${m.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 4px;
`,E=r().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${({positive:e})=>void 0===e?m.w4.colors.mainText:e?"#3fb950":"#f85149"};
`,L=r().div`
  font-size: 11px;
  color: ${m.w4.colors.mainTextMuted};
  margin-top: 2px;
`,C=r().div`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #1c2128;
  border: 1px solid ${m.w4.colors.border};
  border-radius: ${m.w4.borderRadius.md};
  padding: 8px 10px;
  font-size: 11px;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${m.w4.colors.mainText};
  pointer-events: none;
  z-index: 100;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #1c2128;
  }
`,R=r().div`
  display: flex;
  align-items: center;
  gap: ${m.w4.spacing.sm};
  font-size: 11px;
  color: ${m.w4.colors.mainTextMuted};
`,D=r().div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #7f1d1d, #dc2626, #21262d, #16a34a, #166534);
`,F=[{symbol:"AAPL",label:"Apple (AAPL)"},{symbol:"MSFT",label:"Microsoft (MSFT)"},{symbol:"NVDA",label:"NVIDIA (NVDA)"},{symbol:"GOOGL",label:"Alphabet (GOOGL)"},{symbol:"TSM",label:"TSMC (TSM)"},{symbol:"ASML",label:"ASML (ASML)"}];function N(e){return new Date(e+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"})}function G({bar:e}){let[o,a]=(0,i.useState)(!1);return(0,n.jsxs)(j,{bg:(0,g.yv)(e.changePct),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[o&&(0,n.jsxs)(C,{children:[(0,n.jsx)("div",{style:{fontWeight:600,marginBottom:4},children:N(e.date)}),(0,n.jsxs)("div",{children:["Open  ",(0,g.Sc)(e.open,e.open>100?0:2)]}),(0,n.jsxs)("div",{children:["Close ",(0,g.Sc)(e.close,e.close>100?0:2)]}),(0,n.jsxs)("div",{children:["High  ",(0,g.Sc)(e.high,e.high>100?0:2)]}),(0,n.jsxs)("div",{children:["Low   ",(0,g.Sc)(e.low,e.low>100?0:2)]}),(0,n.jsx)("div",{style:{marginTop:4,color:e.changePct>=0?"#3fb950":"#f85149",fontWeight:600},children:(0,g.pT)(e.changePct)})]}),(0,n.jsx)(k,{children:N(e.date)}),(0,n.jsx)(S,{children:(0,g.pT)(e.changePct)})]})}function I(){let[e,o]=(0,i.useState)("1mo"),[a,t]=(0,i.useState)("^GSPC"),{bars:r,loading:l}=(0,g.W6)(a,e),p=function(e){if(0===e.length)return[];let o=[],a=[],n=-1;return e.forEach(e=>{var i;let t,r,l=((t=new Date(Date.UTC((i=new Date(e.date+"T12:00:00Z")).getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()))).setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7)),r=new Date(Date.UTC(t.getUTCFullYear(),0,1)),Math.ceil(((t.getTime()-r.getTime())/864e5+1)/7));l!==n&&a.length>0&&(o.push(a),a=[]),a.push(e),n=l}),a.length>0&&o.push(a),o.slice(-8)}(r),k=r.filter(e=>e.changePct>0),S=r.filter(e=>e.changePct<0),C=r.reduce((e,o)=>e.changePct>o.changePct?e:o,r[0]),I=r.reduce((e,o)=>e.changePct<o.changePct?e:o,r[0]),H=r.length>1?(r[r.length-1].close-r[0].close)/r[0].close*100:0;return(0,n.jsxs)(u,{children:[(0,n.jsxs)(f,{children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(s.A,{size:18,color:"#e3b341"}),"Good & Bad Days"]}),(0,n.jsxs)(x,{children:[(0,n.jsx)(b,{value:a,onChange:e=>t(e.target.value),children:F.map(e=>(0,n.jsx)("option",{value:e.symbol,children:e.label},e.symbol))}),["5d","1mo","3mo"].map(a=>(0,n.jsx)(y,{active:e===a,onClick:()=>o(a),children:"5d"===a?"1W":"1mo"===a?"1M":"3M"},a))]})]}),(0,n.jsxs)(w,{children:[(0,n.jsxs)(z,{children:[(0,n.jsx)($,{children:["Mon","Tue","Wed","Thu","Fri"].map(e=>(0,n.jsx)(v,{children:e},e))}),l?Array.from({length:4}).map((e,o)=>(0,n.jsx)(A,{children:Array.from({length:5}).map((e,o)=>(0,n.jsx)(M,{},o))},o)):p.map((e,o)=>{let a=[null,null,null,null,null];return e.forEach(e=>{let o=new Date(e.date+"T12:00:00Z").getUTCDay()-1;o>=0&&o<5&&(a[o]=e)}),(0,n.jsx)(A,{children:a.map((e,o)=>e?(0,n.jsx)(G,{bar:e},o):(0,n.jsx)(j,{bg:"transparent",empty:!0},o))},o)}),(0,n.jsxs)(R,{style:{marginTop:m.w4.spacing.sm},children:[(0,n.jsx)("span",{children:"−4%"}),(0,n.jsx)(D,{}),(0,n.jsx)("span",{children:"+4%"})]})]}),(0,n.jsxs)(T,{children:[(0,n.jsxs)(P,{children:[(0,n.jsx)(B,{children:"Period Return"}),(0,n.jsx)(E,{positive:H>=0,children:(0,g.pT)(H)}),(0,n.jsxs)(L,{children:[r.length," trading days"]})]}),(0,n.jsxs)(P,{children:[(0,n.jsx)(B,{children:"Up Days"}),(0,n.jsxs)(E,{positive:!0,children:[k.length,(0,n.jsxs)("span",{style:{fontSize:13,fontWeight:400,color:m.w4.colors.mainTextMuted},children:[" ","/ ",r.length]})]}),(0,n.jsxs)(L,{children:[r.length>0?Math.round(k.length/r.length*100):0,"% of trading days"]})]}),(0,n.jsxs)(P,{children:[(0,n.jsx)(B,{children:"Down Days"}),(0,n.jsxs)(E,{positive:!1,children:[S.length,(0,n.jsxs)("span",{style:{fontSize:13,fontWeight:400,color:m.w4.colors.mainTextMuted},children:[" ","/ ",r.length]})]}),(0,n.jsxs)(L,{children:[r.length>0?Math.round(S.length/r.length*100):0,"% of trading days"]})]}),C&&(0,n.jsxs)(P,{children:[(0,n.jsx)(B,{children:"Best Day"}),(0,n.jsxs)(E,{positive:!0,children:[(0,n.jsx)(c.A,{size:14,style:{marginRight:4}}),(0,g.pT)(C.changePct)]}),(0,n.jsx)(L,{children:N(C.date)})]}),I&&(0,n.jsxs)(P,{children:[(0,n.jsx)(B,{children:"Worst Day"}),(0,n.jsxs)(E,{positive:!1,children:[(0,n.jsx)(d.A,{size:14,style:{marginRight:4}}),(0,g.pT)(I.changePct)]}),(0,n.jsx)(L,{children:N(I.date)})]}),(0,n.jsxs)(P,{children:[(0,n.jsx)(B,{children:"How to read"}),(0,n.jsx)("div",{style:{fontSize:11,color:m.w4.colors.mainTextMuted,lineHeight:1.5},children:"Each cell is one trading day. Dark green = strong up day. Dark red = strong down day. Hover any cell for open, close, high, low, and % change."})]})]})]})]})}},6104(e,o,a){a.d(o,{A:()=>U});var n=a(5723);a(7991);var i=a(6859),t=a.n(i),r=a(2799),l=a(4368),s=a(9121),c=a(4621),d=a(9421),m=a(5569),g=a(5357),p=a(9522);let u=(0,r.keyframes)`0%,100%{opacity:1}50%{opacity:.4}`,f=t().div`
  display: flex;
  flex-direction: column;
  gap: ${g.w4.spacing.lg};
`,h=t().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${g.w4.spacing.sm};
`,x=t().h2`
  font-size: ${g.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${g.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${g.w4.spacing.sm};
`,y=t().span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 999px;
  background: ${({state:e})=>"REGULAR"===e?"rgba(63,185,80,0.12)":"PRE"===e?"rgba(88,166,255,0.12)":"POST"===e?"rgba(227,179,65,0.12)":"rgba(139,148,158,0.1)"};
  color: ${({state:e})=>"REGULAR"===e?"#3fb950":"PRE"===e?"#58a6ff":"POST"===e?"#e3b341":g.w4.colors.mainTextMuted};
  border: 1px solid ${({state:e})=>"REGULAR"===e?"rgba(63,185,80,0.3)":"PRE"===e?"rgba(88,166,255,0.3)":"POST"===e?"rgba(227,179,65,0.3)":g.w4.colors.border};
`,b=t().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: ${({state:e})=>"REGULAR"===e?u:"none"} 1.5s ease-in-out infinite;
`,w=t().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${g.w4.spacing.md};

  @media (max-width: ${g.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${g.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,z=t().div`
  background: ${g.w4.colors.mainBg};
  border: 1px solid ${({positive:e})=>null===e?g.w4.colors.border:e?"rgba(63,185,80,0.25)":"rgba(248,81,73,0.25)"};
  border-radius: ${g.w4.borderRadius.lg};
  padding: ${g.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.3s;
`,A=t().div`
  font-size: 10px;
  font-weight: 600;
  color: ${g.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,$=t().div`
  font-size: 13px;
  font-weight: 500;
  color: ${g.w4.colors.mainText};
`,v=t().div`
  font-size: 26px;
  font-weight: 700;
  color: ${g.w4.colors.mainText};
  font-family: ${g.w4.typography.fontFamilyMono};
  line-height: 1.1;
`,j=t().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${g.w4.typography.fontFamilyMono};
  color: ${({pct:e})=>(0,p.Nf)(e)};
`,k=t().div`
  font-size: 11px;
  color: ${g.w4.colors.mainTextMuted};
  font-family: ${g.w4.typography.fontFamilyMono};
  margin-top: 2px;
`,S=t().div`
  height: 14px;
  width: ${({w:e})=>e??"100%"};
  background: ${g.w4.colors.border};
  border-radius: 3px;
  animation: ${u} 1.5s ease-in-out infinite;
`,M=t().div`
  font-size: 11px;
  font-weight: 600;
  color: ${g.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,T=t().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${g.w4.spacing.md};

  @media (max-width: ${g.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,P=t().div`
  background: ${g.w4.colors.mainBg};
  border: 1px solid ${g.w4.colors.border};
  border-radius: ${g.w4.borderRadius.md};
  padding: ${g.w4.spacing.md};
`,B=t().div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: ${g.w4.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({color:e})=>e};
`,E=t().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid ${g.w4.colors.border};
  font-size: 12px;

  &:last-child { border-bottom: none; }
`,L=t().span`
  color: ${g.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,C=t().span`
  font-family: ${g.w4.typography.fontFamilyMono};
  font-weight: 600;
  color: ${({pct:e})=>(0,p.Nf)(e)};
`,R=t().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${g.w4.spacing.md};

  @media (max-width: ${g.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,D=t().div`
  background: ${g.w4.colors.mainBg};
  border: 1px solid ${g.w4.colors.border};
  border-radius: ${g.w4.borderRadius.md};
  padding: ${g.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 6px;
`,F=t().div`
  font-size: 12px;
  font-weight: 600;
  color: ${g.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,N=t().div`
  font-size: 12px;
  color: ${g.w4.colors.mainTextMuted};
  line-height: 1.6;
`,G=t().div`
  padding: ${g.w4.spacing.md};
  background: rgba(248,81,73,0.08);
  border: 1px solid rgba(248,81,73,0.25);
  border-radius: ${g.w4.borderRadius.md};
  color: #f85149;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: ${g.w4.spacing.sm};
`,I=[{symbol:"AAPL",label:"Apple",region:"\uD83C\uDDFA\uD83C\uDDF8 Americas"},{symbol:"NVDA",label:"NVIDIA",region:"\uD83C\uDDFA\uD83C\uDDF8 Americas"},{symbol:"ASML",label:"ASML",region:"\uD83C\uDDF3\uD83C\uDDF1 Europe"},{symbol:"TSM",label:"TSMC",region:"\uD83C\uDDF9\uD83C\uDDFC Asia"}];function H({pct:e}){return e>0?(0,n.jsx)(l.A,{size:16}):e<0?(0,n.jsx)(s.A,{size:16}):(0,n.jsx)(c.A,{size:14})}function U({quotes:e,loading:o,error:a}){let i=e.values().next().value,t=i?.marketState??"CLOSED",r="REGULAR"===t?"Market Open":"PRE"===t?"Pre-Market":"POST"===t?"After Hours":"Market Closed";return(0,n.jsxs)(f,{children:[(0,n.jsxs)(h,{children:[(0,n.jsxs)(x,{children:[(0,n.jsx)(l.A,{size:18,color:"#58a6ff"}),"Market Overview"]}),(0,n.jsxs)(y,{state:t,children:[(0,n.jsx)(b,{state:t}),r]})]}),a&&(0,n.jsxs)(G,{children:[(0,n.jsx)(d.A,{size:13}),"Market data unavailable. Try again in a moment."]}),(0,n.jsx)(M,{children:"Key Indices"}),(0,n.jsx)(w,{children:I.map(({symbol:a,label:i,region:t})=>{let r=e.get(a),l=r?r.changePct>0||!(r.changePct<0)&&null:null;return(0,n.jsxs)(z,{positive:l,children:[(0,n.jsx)(A,{children:t}),(0,n.jsx)($,{children:i}),o&&!r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S,{w:"80px",style:{height:28}}),(0,n.jsx)(S,{w:"60px"})]}):r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{children:(0,p.Sc)(r.price,r.price>1e3?0:2)}),(0,n.jsxs)(j,{pct:r.changePct,children:[(0,n.jsx)(H,{pct:r.changePct}),(0,p.pT)(r.changePct),(0,n.jsxs)("span",{style:{fontWeight:400,fontSize:12},children:["(",r.change>=0?"+":"",(0,p.Sc)(r.change,2),")"]})]}),(0,n.jsxs)(k,{children:["H ",(0,p.Sc)(r.high,r.high>1e3?0:2)," \xb7 L ",(0,p.Sc)(r.low,r.low>1e3?0:2)," \xb7 Prev ",(0,p.Sc)(r.prevClose,r.prevClose>1e3?0:2)]})]}):(0,n.jsx)(k,{children:"No data"})]},a)})}),(0,n.jsx)(M,{children:"By Region"}),(0,n.jsx)(T,{children:p.ij.map(a=>(0,n.jsxs)(P,{children:[(0,n.jsxs)(B,{color:a.color,children:[a.emoji," ",a.name]}),a.indices.slice(0,4).map(a=>{let i=e.get(a.symbol);return(0,n.jsxs)(E,{children:[(0,n.jsxs)(L,{children:[(0,n.jsx)("span",{children:a.flag}),a.name]}),o&&!i?(0,n.jsx)(S,{w:"50px"}):i?(0,n.jsx)(C,{pct:i.changePct,children:(0,p.pT)(i.changePct)}):(0,n.jsx)("span",{style:{color:g.w4.colors.mainTextMuted,fontSize:11},children:"—"})]},a.symbol)})]},a.id))}),(0,n.jsx)(M,{children:"Understanding Markets"}),(0,n.jsxs)(R,{children:[(0,n.jsxs)(D,{children:[(0,n.jsxs)(F,{children:[(0,n.jsx)(m.A,{size:13,color:"#58a6ff"})," What is a stock index?"]}),(0,n.jsx)(N,{children:"An index tracks the combined performance of a group of stocks. The S&P 500, for example, follows 500 of the largest US companies and is widely used as a benchmark for the overall US stock market."})]}),(0,n.jsxs)(D,{children:[(0,n.jsxs)(F,{children:[(0,n.jsx)(l.A,{size:13,color:"#3fb950"})," Green day vs Red day"]}),(0,n.jsx)(N,{children:"A green day means the index closed higher than it opened — investors are bullish. A red day means it closed lower — sentiment is bearish. The % change shows how much the index moved from the previous close."})]}),(0,n.jsxs)(D,{children:[(0,n.jsxs)(F,{children:[(0,n.jsx)(m.A,{size:13,color:"#e3b341"})," Market hours"]}),(0,n.jsx)(N,{children:"US markets (NYSE, NASDAQ) trade Mon–Fri 9:30 am–4 pm ET. European markets open at ~8 am CET, Asian markets at ~9 am local time. Pre-market and after-hours trading also occur with lower volume."})]})]})]})}},5855(e,o,a){a.d(o,{A:()=>B});var n=a(5723);a(7991);var i=a(6859),t=a.n(i),r=a(2799),l=a(4368),s=a(9121),c=a(4621),d=a(5357),m=a(9522);let g=(0,r.keyframes)`0%,100%{opacity:1}50%{opacity:.4}`,p=t().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,u=t().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=t().h2`
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,h=t().table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,x=t().thead`
  border-bottom: 1px solid ${d.w4.colors.border};
`,y=t().th`
  padding: 8px ${d.w4.spacing.sm};
  font-size: 10px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-align: ${({align:e})=>e??"left"};
`,b=t().tr`
  border-bottom: 1px solid ${d.w4.colors.border};
  transition: background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover { background: ${d.w4.colors.mainBg}; }
`,w=t().td`
  padding: 10px ${d.w4.spacing.sm};
  color: ${d.w4.colors.mainText};
  text-align: ${({align:e})=>e??"left"};
`,z=t().div`
  font-weight: 500;
  color: ${d.w4.colors.mainText};
`,A=t().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,$=t().span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 600;
  font-size: 12px;
  color: ${({pct:e})=>(0,m.Nf)(e)};
  background: ${({pct:e})=>e>0?"rgba(63,185,80,0.1)":e<0?"rgba(248,81,73,0.1)":"transparent"};
  padding: 2px 7px;
  border-radius: 999px;
`,v=t().div`
  position: relative;
  width: 90px;
  height: 4px;
  background: ${d.w4.colors.border};
  border-radius: 2px;
  overflow: visible;
`,j=t().div`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  height: 100%;
  background: ${d.w4.colors.border};
  border-radius: 2px;
`,k=t().div`
  position: absolute;
  top: 50%;
  left: ${({pos:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,S=t().div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  margin-top: 2px;
`,M=t().div`
  height: 14px;
  width: ${({w:e})=>e??"60px"};
  background: ${d.w4.colors.border};
  border-radius: 3px;
  animation: ${g} 1.5s ease-in-out infinite;
  display: inline-block;
`,T=t().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 110px;
`;function P({q:e}){let o=e.week52High-e.week52Low;if(0===o)return null;let a=(e.low-e.week52Low)/o*100,i=(e.high-e.week52Low)/o*100,t=(e.price-e.week52Low)/o*100;return(0,n.jsxs)(T,{children:[(0,n.jsxs)(v,{children:[(0,n.jsx)(j,{left:a,width:i-a}),(0,n.jsx)(k,{pos:t,color:(0,m.Nf)(e.changePct)})]}),(0,n.jsxs)(S,{children:[(0,n.jsx)("span",{children:(0,m.Sc)(e.week52Low,e.week52Low>1e3?0:2)}),(0,n.jsx)("span",{children:"52w"}),(0,n.jsx)("span",{children:(0,m.Sc)(e.week52High,e.week52High>1e3?0:2)})]})]})}function B({region:e,quotes:o,loading:a}){return(0,n.jsxs)(p,{children:[(0,n.jsx)(u,{children:(0,n.jsxs)(f,{children:[(0,n.jsx)("span",{style:{fontSize:22},children:e.emoji}),e.name]})}),(0,n.jsxs)(h,{children:[(0,n.jsx)(x,{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)(y,{children:"Index"}),(0,n.jsx)(y,{align:"right",children:"Price"}),(0,n.jsx)(y,{align:"right",children:"Day Change"}),(0,n.jsx)(y,{align:"right",children:"Open"}),(0,n.jsx)(y,{align:"right",children:"High / Low"}),(0,n.jsx)(y,{align:"center",children:"52-Week Range"})]})}),(0,n.jsx)("tbody",{children:e.indices.map(e=>{let i=o.get(e.symbol);return(0,n.jsxs)(b,{children:[(0,n.jsxs)(w,{children:[(0,n.jsxs)(z,{children:[e.flag," ",e.name]}),(0,n.jsx)(A,{children:e.description})]}),(0,n.jsx)(w,{align:"right",children:a&&!i?(0,n.jsx)(M,{}):i?(0,n.jsx)("span",{style:{fontFamily:d.w4.typography.fontFamilyMono,fontWeight:600},children:(0,m.Sc)(i.price,i.price>1e3?0:2)}):"—"}),(0,n.jsx)(w,{align:"right",children:a&&!i?(0,n.jsx)(M,{w:"50px"}):i?(0,n.jsxs)($,{pct:i.changePct,children:[i.changePct>0?(0,n.jsx)(l.A,{size:11}):i.changePct<0?(0,n.jsx)(s.A,{size:11}):(0,n.jsx)(c.A,{size:10}),(0,m.pT)(i.changePct)]}):"—"}),(0,n.jsx)(w,{align:"right",children:i?(0,n.jsx)("span",{style:{fontFamily:d.w4.typography.fontFamilyMono,fontSize:12,color:d.w4.colors.mainTextMuted},children:(0,m.Sc)(i.open,i.open>1e3?0:2)}):"—"}),(0,n.jsx)(w,{align:"right",children:i?(0,n.jsxs)("div",{style:{fontFamily:d.w4.typography.fontFamilyMono,fontSize:11},children:[(0,n.jsxs)("div",{style:{color:"#3fb950"},children:["H ",(0,m.Sc)(i.high,i.high>1e3?0:2)]}),(0,n.jsxs)("div",{style:{color:"#f85149"},children:["L ",(0,m.Sc)(i.low,i.low>1e3?0:2)]})]}):"—"}),(0,n.jsx)(w,{align:"center",children:i?(0,n.jsx)(P,{q:i}):"—"})]},e.symbol)})})]})]})}},5323(e,o,a){a.d(o,{A:()=>S});var n=a(5723);a(7991);var i=a(6859),t=a.n(i),r=a(2799),l=a(8207),s=a(4368),c=a(9121),d=a(5357),m=a(9522);let g=(0,r.keyframes)`0%,100%{opacity:1}50%{opacity:.4}`,p=t().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,u=t().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,f=t().h2`
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,h=t().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,x=t().div`
  background: ${({bg:e})=>e};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: default;
  transition: filter 0.15s;
  min-height: 90px;

  &:hover {
    filter: brightness(1.15);
  }
`,y=t().div`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
`,b=t().div`
  font-size: 10px;
  color: rgba(255,255,255,0.5);
  line-height: 1.3;
  flex: 1;
`,w=t().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 18px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  display: flex;
  align-items: center;
  gap: 4px;
`,z=t().div`
  background: ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  min-height: 90px;
  animation: ${g} 1.5s ease-in-out infinite;
`,A=t().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
`,$=t().div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #7f1d1d, #dc2626, #21262d, #16a34a, #166534);
`,v=t().div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,j=t().div`
  display: flex;
  gap: ${d.w4.spacing.md};
  flex-wrap: wrap;
`,k=t().div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({positive:e})=>e?"rgba(63,185,80,0.1)":"rgba(248,81,73,0.1)"};
  color: ${({positive:e})=>e?"#3fb950":"#f85149"};
  border: 1px solid ${({positive:e})=>e?"rgba(63,185,80,0.25)":"rgba(248,81,73,0.25)"};
`;function S({quotes:e,loading:o}){let a=m.kJ.map(o=>({...o,quote:e.get(o.symbol)})),i=a.filter(e=>e.quote),t=i.filter(e=>(e.quote?.changePct??0)>0).length,r=i.filter(e=>(e.quote?.changePct??0)<0).length,d=i.reduce((e,o)=>(e.quote?.changePct??-1/0)>(o.quote?.changePct??-1/0)?e:o,i[0]),g=i.reduce((e,o)=>(e.quote?.changePct??1/0)<(o.quote?.changePct??1/0)?e:o,i[0]);return(0,n.jsxs)(p,{children:[(0,n.jsxs)(u,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(l.A,{size:18,color:"#bc8cff"}),"S&P 500 Sectors"]}),i.length>0&&(0,n.jsxs)(j,{children:[(0,n.jsxs)(k,{positive:!0,children:[(0,n.jsx)(s.A,{size:12}),t," advancing"]}),(0,n.jsxs)(k,{positive:!1,children:[(0,n.jsx)(c.A,{size:12}),r," declining"]}),d?.quote&&(0,n.jsxs)(k,{positive:!0,children:["Best: ",d.name," ",(0,m.pT)(d.quote.changePct)]}),g?.quote&&(0,n.jsxs)(k,{positive:!1,children:["Worst: ",g.name," ",(0,m.pT)(g.quote.changePct)]})]})]}),(0,n.jsx)(h,{children:o&&0===e.size?m.kJ.map(e=>(0,n.jsx)(z,{},e.symbol)):a.map(({symbol:e,name:o,description:a,quote:i})=>{let t=i?.changePct??0;return(0,n.jsxs)(x,{bg:(0,m.yv)(t),children:[(0,n.jsx)(y,{children:o}),(0,n.jsx)(b,{children:a}),(0,n.jsxs)(w,{children:[t>0?(0,n.jsx)(s.A,{size:14}):t<0?(0,n.jsx)(c.A,{size:14}):null,i?(0,m.pT)(t):"—"]})]},e)})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)(A,{children:[(0,n.jsx)("span",{children:"−4%"}),(0,n.jsx)($,{}),(0,n.jsx)("span",{children:"+4%"})]}),(0,n.jsxs)(v,{children:[(0,n.jsx)("span",{children:"Bearish"}),(0,n.jsx)("span",{children:"Neutral"}),(0,n.jsx)("span",{children:"Bullish"})]})]})]})}},9522(e,o,a){a.d(o,{Nf:()=>h,Rq:()=>u,Sc:()=>y,W6:()=>f,ij:()=>i,kJ:()=>r,pT:()=>b,rb:()=>t,yv:()=>x,zR:()=>l});var n=a(7991);let i=[{id:"americas",name:"Americas",emoji:"\uD83C\uDF0E",color:"#58a6ff",indices:[{symbol:"AAPL",name:"Apple",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"Consumer electronics & software giant"},{symbol:"MSFT",name:"Microsoft",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"Cloud, enterprise software & AI leader"},{symbol:"AMZN",name:"Amazon",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"E-commerce and cloud computing (AWS)"},{symbol:"NVDA",name:"NVIDIA",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"GPU & AI chip market leader"},{symbol:"META",name:"Meta",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"Social media and metaverse platforms"},{symbol:"TSLA",name:"Tesla",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"Electric vehicles and clean energy"}]},{id:"europe",name:"Europe",emoji:"\uD83C\uDF0D",color:"#3fb950",indices:[{symbol:"ASML",name:"ASML",flag:"\uD83C\uDDF3\uD83C\uDDF1",description:"Dutch chipmaker — world monopoly on EUV lithography"},{symbol:"SAP",name:"SAP",flag:"\uD83C\uDDE9\uD83C\uDDEA",description:"German enterprise software leader"},{symbol:"NVO",name:"Novo Nordisk",flag:"\uD83C\uDDE9\uD83C\uDDF0",description:"Danish pharma — Ozempic/GLP-1 drugs"},{symbol:"SHEL",name:"Shell",flag:"\uD83C\uDDEC\uD83C\uDDE7",description:"UK-based global oil & gas major"},{symbol:"HSBC",name:"HSBC",flag:"\uD83C\uDDEC\uD83C\uDDE7",description:"One of the world's largest banks"},{symbol:"UL",name:"Unilever",flag:"\uD83C\uDDEC\uD83C\uDDE7",description:"Global consumer goods conglomerate"}]},{id:"asia",name:"Asia Pacific",emoji:"\uD83C\uDF0F",color:"#e3b341",indices:[{symbol:"TSM",name:"TSMC",flag:"\uD83C\uDDF9\uD83C\uDDFC",description:"World's largest semiconductor foundry"},{symbol:"BABA",name:"Alibaba",flag:"\uD83C\uDDE8\uD83C\uDDF3",description:"China's largest e-commerce platform"},{symbol:"TM",name:"Toyota",flag:"\uD83C\uDDEF\uD83C\uDDF5",description:"World's largest automaker"},{symbol:"SONY",name:"Sony",flag:"\uD83C\uDDEF\uD83C\uDDF5",description:"Electronics, gaming & entertainment"},{symbol:"SE",name:"Sea Limited",flag:"\uD83C\uDDF8\uD83C\uDDEC",description:"Southeast Asia's leading tech company"},{symbol:"BIDU",name:"Baidu",flag:"\uD83C\uDDE8\uD83C\uDDF3",description:"China's leading search & AI company"}]}],t=i.flatMap(e=>e.indices.map(e=>e.symbol)),r=[{symbol:"NVDA",name:"Technology",description:"NVIDIA — AI & GPU leader"},{symbol:"JPM",name:"Financials",description:"JPMorgan — largest US bank"},{symbol:"JNJ",name:"Healthcare",description:"Johnson & Johnson — pharma giant"},{symbol:"XOM",name:"Energy",description:"ExxonMobil — oil & gas major"},{symbol:"GOOGL",name:"Communication",description:"Alphabet — search & ads"},{symbol:"CAT",name:"Industrials",description:"Caterpillar — heavy machinery"},{symbol:"AMZN",name:"Consumer Disc.",description:"Amazon — retail & marketplace"},{symbol:"PG",name:"Consumer Staples",description:"Procter & Gamble — household goods"},{symbol:"NEE",name:"Utilities",description:"NextEra Energy — renewable power"},{symbol:"PLD",name:"Real Estate",description:"Prologis — industrial REITs"},{symbol:"LIN",name:"Materials",description:"Linde — industrial gases & chemicals"}],l=r.map(e=>e.symbol),s="https://eqvzakschpdemcgexjyy.supabase.co",c="sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL",d=`${s}/functions/v1/stocks-quote`;async function m(e){if(!s||!c)return null;try{let o=await fetch(`${d}?${e}`,{headers:{apikey:c,authorization:`Bearer ${c}`}});if(!o.ok)return null;return await o.json()}catch{return null}}async function g(e){let o=new Map;if(!e.length)return o;let a=`symbols=${encodeURIComponent(e.join(","))}`,n=await m(a);for(let e of n?.quotes??[])o.set(e.symbol,e);return o}async function p(e,o){let a=`history=${encodeURIComponent(e)}&range=${o}`,n=await m(a);return n?.bars??[]}function u(e,o=9e5){let[a,i]=(0,n.useState)(new Map),[t,r]=(0,n.useState)(!0),[l,s]=(0,n.useState)(null),c=(0,n.useCallback)(async()=>{let o=await g(e);0===o.size?s("No data"):s(null),i(o),r(!1)},[e.join(",")]);return(0,n.useEffect)(()=>{c();let e=setInterval(c,o);return()=>clearInterval(e)},[c,o]),{quotes:a,loading:t,error:l}}function f(e,o){let[a,i]=(0,n.useState)([]),[t,r]=(0,n.useState)(!0),[l,s]=(0,n.useState)(null),c=(0,n.useCallback)(async()=>{let a=await p(e,o);0===a.length?s("No data"):s(null),i(a),r(!1)},[e,o]);return(0,n.useEffect)(()=>{c()},[c]),{bars:a,loading:t,error:l}}function h(e){return e>0?"#3fb950":e<0?"#f85149":"#8b949e"}function x(e){let o=Math.max(-4,Math.min(4,e));if(0===o)return"#21262d";if(o>0){let e=o/4,a=Math.round(80+105*e),n=Math.round(20+10*e),i=Math.round(30+10*e);return`rgb(${n},${a},${i})`}let a=-o/4,n=Math.round(100+148*a),i=Math.round(20+10*a),t=Math.round(20+10*a);return`rgb(${n},${i},${t})`}function y(e,o=2){return e.toLocaleString("en-US",{minimumFractionDigits:o,maximumFractionDigits:o})}function b(e){return`${e>=0?"+":""}${e.toFixed(2)}%`}},8859(e,o,a){a.d(o,{FlyoutPanel:()=>b});var n=a(5723),i=a(7991),t=a.n(i),r=a(6859),l=a.n(r),s=a(2799),c=a(255),d=a(1316),m=a(814),g=a(6140);let p=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=l().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.accentMuted};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${p} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${d.w4.colors.accent};
    opacity: 0.4;
  }
`,f=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.accent};
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  font-family: ${d.w4.typography.fontFamily};
`,h=l().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${d.w4.colors.accentMuted};
    color: ${d.w4.colors.mainText};
  }
`;function x({iconKey:e}){let o=e?g.t[e]??c.A:c.A;return(0,n.jsx)(o,{size:14,strokeWidth:1.75})}function y({entries:e,activeId:o,onSelect:a}){return(0,n.jsx)(n.Fragment,{children:e.map(e=>e.children?(0,n.jsx)(t().Fragment,{children:(0,n.jsx)(y,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,n.jsxs)(h,{active:o===e.id,onClick:()=>a(e),children:[(0,n.jsx)(x,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){let{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:i}=(0,m.c)();if(!o)return null;let t=o.entry.icon?g.t[o.entry.icon]??c.A:c.A;return(0,n.jsxs)(u,{anchorY:o.anchorY,onMouseEnter:i,onMouseLeave:a,children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(t,{size:13,strokeWidth:2}),o.entry.name]}),(0,n.jsx)(y,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},814(e,o,a){a.d(o,{I:()=>i,c:()=>t});var n=a(7991);let i=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,n.useContext)(i)},6140(e,o,a){a.d(o,{t:()=>ey});var n=a(6896),i=a(7902),t=a(3013),r=a(2887),l=a(9510),s=a(9848),c=a(7901),d=a(3045),m=a(3775),g=a(1783),p=a(3539),u=a(9416),f=a(1837),h=a(7167),x=a(4494),y=a(2314),b=a(255),w=a(5751),z=a(9633),A=a(2946),$=a(822),v=a(6720),j=a(7400),k=a(8456),S=a(3317),M=a(2709),T=a(8006),P=a(9301),B=a(7561),E=a(3517),L=a(8207),C=a(7032),R=a(6949),D=a(8218),F=a(6829),N=a(9591),G=a(5553),I=a(9923),H=a(2820),U=a(4621),K=a(8479),O=a(2534),V=a(6673),W=a(7490),_=a(9033),Y=a(9038),J=a(5775),Z=a(1365),q=a(2937),X=a(9821),Q=a(5912),ee=a(158),eo=a(8641),ea=a(8607),en=a(3249),ei=a(1821),et=a(5889),er=a(9655),el=a(7170),es=a(9161),ec=a(1849),ed=a(1604),em=a(3142),eg=a(1187),ep=a(7747),eu=a(2932),ef=a(4525),eh=a(7230),ex=a(2164);let ey={activity:n.A,"a-large-small":i.A,apple:t.A,"arrow-right":r.A,"bar-chart-2":l.A,book:s.A,"book-open":c.A,briefcase:d.A,calendar:m.A,clock:g.A,"circle-dot":p.A,cloud:u.A,compass:f.A,cpu:h.A,droplets:x.A,feather:y.A,file:b.A,"file-text":w.A,folder:z.A,"git-branch":A.A,github:$.A,globe:v.A,grid:j.A,hand:k.A,hash:S.A,heart:M.A,key:T.A,hexagon:P.A,home:B.A,landmark:E.A,layers:L.A,"layout-grid":C.A,leaf:R.A,lightbulb:D.A,list:F.A,map:N.A,"map-pin":G.A,"message-circle":I.A,"message-square":H.A,minus:U.A,monitor:K.A,mountain:O.A,package:V.A,palette:W.A,"pen-tool":_.A,"pie-chart":Y.A,plane:J.A,plus:Z.A,ruler:q.A,shirt:X.A,slash:Q.A,square:ee.A,star:eo.A,sun:ea.A,terminal:en.A,thermometer:ei.A,triangle:et.A,trophy:er.A,truck:el.A,type:es.A,users:ec.A,"volume-2":ed.A,watch:em.A,waves:eg.A,wind:ep.A,wrench:eu.A,x:ef.A,zap:eh.A,bot:ex.A}},5357(e,o,a){a.d(o,{PE:()=>P,CD:()=>V,w4:()=>n.w4});var n=a(1316),i=a(5723),t=a(7991),r=a.n(t),l=a(6859),s=a.n(l);s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${n.w4.spacing.sm};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;var c=a(2799),d=a(3661),m=a(814);let g="260px",p="56px",u=s().header`
  display: flex;
  align-items: center;
  height: calc(${"48px"} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,f=s().div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,h=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,x=(0,c.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,y=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${n.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,b=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${x} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,w=s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  padding-left: ${n.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;

  &::before {
    content: '/';
    margin-right: ${n.w4.spacing.sm};
    color: ${n.w4.colors.border};
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,z=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w4.spacing.md};
  padding: 0 ${n.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${n.w4.spacing.sm};
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    padding: 0 ${n.w4.spacing.sm};
    gap: ${n.w4.spacing.xs};

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,A=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,$=s().div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,v=s().aside`
  width: ${({collapsed:e})=>e?p:g};
  min-width: ${({collapsed:e})=>e?p:g};
  background: ${n.w4.colors.sidebarBg};
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,j=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,k=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,S=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function M(){return(0,i.jsx)(y,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:S.map((e,o)=>(0,i.jsx)(b,{index:o,accent:e.accent,children:e.char},o))})}let T="atlantis:sidebar-collapsed";function P({sidebar:e,children:o,topBarRight:n,title:l="Atlantis",activeId:s=null}){let[c,g]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(T)}catch{return!1}}),[p,x]=(0,t.useState)(null),y=(0,t.useRef)(),b=()=>g(e=>{let o=!e;try{localStorage.setItem(T,String(o))}catch{}return o}),S=r().useMemo(()=>r().lazy(()=>Promise.resolve().then(a.bind(a,8859)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,i.jsx)(m.I.Provider,{value:{collapsed:c,toggle:b,flyout:p,openFlyout:(e,o,a)=>{clearTimeout(y.current),x({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{y.current=setTimeout(()=>x(null),160)},cancelFlyoutClose:()=>clearTimeout(y.current)},children:(0,i.jsxs)($,{children:[(0,i.jsxs)(u,{children:[e&&(0,i.jsx)(f,{children:(0,i.jsx)(h,{onClick:b,title:c?"Expand sidebar":"Collapse sidebar",children:(0,i.jsx)(d.A,{size:17})})}),(0,i.jsx)(M,{}),l&&(0,i.jsx)(w,{children:l}),n&&(0,i.jsx)(z,{children:n})]}),(0,i.jsxs)(A,{children:[null!=e&&(0,i.jsx)(v,{collapsed:c,children:(0,i.jsx)(j,{children:e})}),(0,i.jsx)(k,{children:o})]}),p&&(0,i.jsx)(r().Suspense,{fallback:null,children:(0,i.jsx)(S,{activeId:s})})]})})}var B=a(255),E=a(9753),L=a(6140);let C=s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,R=s().div`
  overflow: hidden;
`,D=s().div`
  padding-left: ${n.w4.spacing.md};
`,F=s().div`
  display: flex;
  flex-direction: column;
`,N=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${n.w4.spacing.sm} ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":n.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${n.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${n.w4.colors.sidebarText};
    background: ${n.w4.colors.sidebarHover};
  }
`,G=s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,I=s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,H=s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,U=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }
`;function K({iconKey:e,size:o=16}){if(e&&!(e in L.t))return(0,i.jsx)("span",{style:{fontSize:o,lineHeight:1,display:"flex",alignItems:"center"},children:e});let a=e?L.t[e]??B.A:B.A;return(0,i.jsx)(a,{size:o,strokeWidth:1.75})}function O({entry:e,activeId:o,onSelect:a}){let[n,r]=(0,t.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:d}=(0,m.c)();return e.children&&e.children.length>0?(0,i.jsxs)(F,{children:[(0,i.jsxs)(N,{collapsed:l,onClick:()=>{l||r(e=>!e)},onMouseEnter:l?o=>{s(e,o.currentTarget.getBoundingClientRect().top,a)}:void 0,onMouseLeave:l?c:void 0,children:[(0,i.jsxs)(G,{collapsed:l,children:[(0,i.jsx)(K,{iconKey:e.icon,size:16}),(0,i.jsx)(I,{collapsed:l,children:e.name})]}),(0,i.jsx)(H,{open:n,collapsed:l,children:(0,i.jsx)(E.A,{size:13})})]}),(0,i.jsx)(C,{open:n&&!l,children:(0,i.jsx)(R,{children:(0,i.jsx)(D,{children:e.children.map(e=>(0,i.jsx)(O,{entry:e,activeId:o,onSelect:a},e.id))})})})]}):(0,i.jsxs)(U,{active:o===e.id,collapsed:l,onClick:()=>a(e),onMouseEnter:l?o=>{let n=o.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,a)}:void 0,onMouseLeave:l?c:void 0,children:[(0,i.jsx)(K,{iconKey:e.icon,size:15}),(0,i.jsx)(I,{collapsed:l,children:e.name})]})}function V({entries:e,activeId:o,onSelect:a}){return(0,i.jsx)("div",{children:e.map(e=>(0,i.jsx)(O,{entry:e,activeId:o,onSelect:a},e.id))})}let W=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${W} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${n.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${n.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${n.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${n.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${n.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${n.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,a(8859),s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places),s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${n.w4.colors.accent}; }
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${n.w4.borderRadius.md};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?n.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    border-color: ${n.w4.colors.accent};
  }
`,s().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,s().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,s().div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,s().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-top: 1px;
`,s().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${n.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,s().div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,s().section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,s().div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding-left: max(${n.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${n.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${n.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${n.w4.colors.accent}; }
`,s().span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`;let _=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Y=(0,c.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,J=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  animation: ${_} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${Y} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${n.w4.colors.border};
  animation: ${J} 1.4s ease-in-out infinite;
`,s().span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},1316(e,o,a){a.d(o,{w4:()=>t});let n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},i="--at-",t={colors:function(){let e={};for(let o of Object.keys(n))e[o]=`var(${i}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${i}suiteLab)`,vida:`var(${i}suiteVida)`,learn:`var(${i}suiteLearn)`,games:`var(${i}suiteGames)`,ent:`var(${i}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}}}]);