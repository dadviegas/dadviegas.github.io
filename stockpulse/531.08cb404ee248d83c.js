"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([["531"],{9855(e,o,r){r.d(o,{A:()=>D});var t=r(5723),a=r(7991),i=r(6859),n=r.n(i),l=r(2799),s=r(18),d=r(4764),c=r(9522);let p=(0,l.keyframes)`0%,100%{opacity:1}50%{opacity:.4}`,g=n().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,x=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,h=n().h2`
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,f=n().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,m=n().button`
  padding: 4px 12px;
  border-radius: ${d.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?"#58a6ff":d.w4.colors.border};
  background: ${({active:e})=>e?"rgba(88,166,255,0.1)":"transparent"};
  color: ${({active:e})=>e?"#58a6ff":d.w4.colors.mainTextMuted};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${d.w4.transitions.base};

  &:hover {
    border-color: #58a6ff;
    color: #58a6ff;
  }
`,b=n().select`
  padding: 4px 8px;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainText};
  font-size: 11px;
  outline: none;
  cursor: pointer;

  &:focus { border-color: #58a6ff; }
`,w=n().div`
  display: flex;
  gap: ${d.w4.spacing.xl};
  align-items: flex-start;

  @media (max-width: ${d.w4.breakpoints.lg}) {
    flex-direction: column;
  }
`,u=n().div`
  flex: 1;
  min-width: 0;
`,y=n().div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 4px;
`,$=n().div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 6px;
`,v=n().div`
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 0;
`,M=n().div`
  background: ${({bg:e,empty:o})=>o?"transparent":e};
  border-radius: ${d.w4.borderRadius.sm};
  padding: 8px 6px;
  min-height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({empty:e})=>e?"default":"pointer"};
  border: 1px solid ${({empty:e})=>e?"transparent":"rgba(255,255,255,0.05)"};
  transition: filter ${d.w4.transitions.fast};
  position: relative;

  &:hover {
    filter: ${({empty:e})=>e?"none":"brightness(1.2)"};
  }
`,k=n().div`
  font-size: 11px;
  color: rgba(255,255,255,0.55);
  font-family: ${d.w4.typography.fontFamilyMono};
`,z=n().div`
  font-size: 13px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  font-family: ${d.w4.typography.fontFamilyMono};
`,j=n().div`
  background: ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  min-height: 58px;
  animation: ${p} 1.5s ease-in-out infinite;
`,T=n().div`
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,S=n().div`
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
`,F=n().div`
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 4px;
`,A=n().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({positive:e})=>void 0===e?d.w4.colors.mainText:e?"#3fb950":"#f85149"};
`,R=n().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,H=n().div`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #1c2128;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 8px 10px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainText};
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
`,L=n().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
`,P=n().div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #7f1d1d, #dc2626, #21262d, #16a34a, #166534);
`,C=[{symbol:"AAPL",label:"Apple (AAPL)"},{symbol:"MSFT",label:"Microsoft (MSFT)"},{symbol:"NVDA",label:"NVIDIA (NVDA)"},{symbol:"GOOGL",label:"Alphabet (GOOGL)"},{symbol:"TSM",label:"TSMC (TSM)"},{symbol:"ASML",label:"ASML (ASML)"}];function B(e){return new Date(e+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"})}function V({bar:e}){let[o,r]=(0,a.useState)(!1);return(0,t.jsxs)(M,{bg:(0,c.yv)(e.changePct),onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[o&&(0,t.jsxs)(H,{children:[(0,t.jsx)("div",{style:{fontWeight:600,marginBottom:4},children:B(e.date)}),(0,t.jsxs)("div",{children:["Open  ",(0,c.Sc)(e.open,e.open>100?0:2)]}),(0,t.jsxs)("div",{children:["Close ",(0,c.Sc)(e.close,e.close>100?0:2)]}),(0,t.jsxs)("div",{children:["High  ",(0,c.Sc)(e.high,e.high>100?0:2)]}),(0,t.jsxs)("div",{children:["Low   ",(0,c.Sc)(e.low,e.low>100?0:2)]}),(0,t.jsx)("div",{style:{marginTop:4,color:e.changePct>=0?"#3fb950":"#f85149",fontWeight:600},children:(0,c.pT)(e.changePct)})]}),(0,t.jsx)(k,{children:B(e.date)}),(0,t.jsx)(z,{children:(0,c.pT)(e.changePct)})]})}function D(){let[e,o]=(0,a.useState)("1mo"),[r,i]=(0,a.useState)("AAPL"),{bars:n,loading:l}=(0,c.W6)(r,e),p=function(e){if(0===e.length)return[];let o=[],r=[],t=-1;return e.forEach(e=>{var a;let i,n,l=((i=new Date(Date.UTC((a=new Date(e.date+"T12:00:00Z")).getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))).setUTCDate(i.getUTCDate()+4-(i.getUTCDay()||7)),n=new Date(Date.UTC(i.getUTCFullYear(),0,1)),Math.ceil(((i.getTime()-n.getTime())/864e5+1)/7));l!==t&&r.length>0&&(o.push(r),r=[]),r.push(e),t=l}),r.length>0&&o.push(r),o.slice(-8)}(n),k=n.filter(e=>e.changePct>0),z=n.filter(e=>e.changePct<0),H=n.reduce((e,o)=>e.changePct>o.changePct?e:o,n[0]),D=n.reduce((e,o)=>e.changePct<o.changePct?e:o,n[0]),I=n.length>1?(n[n.length-1].close-n[0].close)/n[0].close*100:0;return(0,t.jsxs)(g,{children:[(0,t.jsxs)(x,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(s.In,{name:"calendar",size:18,color:"#e3b341"}),"Good & Bad Days"]}),(0,t.jsxs)(f,{children:[(0,t.jsx)(b,{value:r,onChange:e=>i(e.target.value),children:C.map(e=>(0,t.jsx)("option",{value:e.symbol,children:e.label},e.symbol))}),["5d","1mo","3mo"].map(r=>(0,t.jsx)(m,{active:e===r,onClick:()=>o(r),children:"5d"===r?"1W":"1mo"===r?"1M":"3M"},r))]})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)($,{children:["Mon","Tue","Wed","Thu","Fri"].map(e=>(0,t.jsx)(v,{children:e},e))}),l?Array.from({length:4}).map((e,o)=>(0,t.jsx)(y,{children:Array.from({length:5}).map((e,o)=>(0,t.jsx)(j,{},o))},o)):p.map((e,o)=>{let r=[null,null,null,null,null];return e.forEach(e=>{let o=new Date(e.date+"T12:00:00Z").getUTCDay()-1;o>=0&&o<5&&(r[o]=e)}),(0,t.jsx)(y,{children:r.map((e,o)=>e?(0,t.jsx)(V,{bar:e},o):(0,t.jsx)(M,{bg:"transparent",empty:!0},o))},o)}),(0,t.jsxs)(L,{style:{marginTop:d.w4.spacing.sm},children:[(0,t.jsx)("span",{children:"−4%"}),(0,t.jsx)(P,{}),(0,t.jsx)("span",{children:"+4%"})]})]}),(0,t.jsxs)(T,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{children:"Period Return"}),(0,t.jsx)(A,{positive:I>=0,children:(0,c.pT)(I)}),(0,t.jsxs)(R,{children:[n.length," trading days"]})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{children:"Up Days"}),(0,t.jsxs)(A,{positive:!0,children:[k.length,(0,t.jsxs)("span",{style:{fontSize:13,fontWeight:400,color:d.w4.colors.mainTextMuted},children:[" ","/ ",n.length]})]}),(0,t.jsxs)(R,{children:[n.length>0?Math.round(k.length/n.length*100):0,"% of trading days"]})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{children:"Down Days"}),(0,t.jsxs)(A,{positive:!1,children:[z.length,(0,t.jsxs)("span",{style:{fontSize:13,fontWeight:400,color:d.w4.colors.mainTextMuted},children:[" ","/ ",n.length]})]}),(0,t.jsxs)(R,{children:[n.length>0?Math.round(z.length/n.length*100):0,"% of trading days"]})]}),H&&(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{children:"Best Day"}),(0,t.jsxs)(A,{positive:!0,children:[(0,t.jsx)(s.In,{name:"trending-up",size:14,style:{marginRight:4}}),(0,c.pT)(H.changePct)]}),(0,t.jsx)(R,{children:B(H.date)})]}),D&&(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{children:"Worst Day"}),(0,t.jsxs)(A,{positive:!1,children:[(0,t.jsx)(s.In,{name:"trending-down",size:14,style:{marginRight:4}}),(0,c.pT)(D.changePct)]}),(0,t.jsx)(R,{children:B(D.date)})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{children:"How to read"}),(0,t.jsx)("div",{style:{fontSize:11,color:d.w4.colors.mainTextMuted,lineHeight:1.5},children:"Each cell is one trading day. Dark green = strong up day. Dark red = strong down day. Hover any cell for open, close, high, low, and % change."})]})]})]})]})}},6104(e,o,r){r.d(o,{A:()=>D});var t=r(5723);r(7991);var a=r(6859),i=r.n(a),n=r(2799),l=r(4764),s=r(18),d=r(9522);let c=(0,n.keyframes)`0%,100%{opacity:1}50%{opacity:.4}`,p=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,g=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,x=i().h2`
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,h=i().span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 999px;
  background: ${({state:e})=>"REGULAR"===e?"rgba(63,185,80,0.12)":"PRE"===e?"rgba(88,166,255,0.12)":"POST"===e?"rgba(227,179,65,0.12)":"rgba(139,148,158,0.1)"};
  color: ${({state:e})=>"REGULAR"===e?"#3fb950":"PRE"===e?"#58a6ff":"POST"===e?"#e3b341":l.w4.colors.mainTextMuted};
  border: 1px solid ${({state:e})=>"REGULAR"===e?"rgba(63,185,80,0.3)":"PRE"===e?"rgba(88,166,255,0.3)":"POST"===e?"rgba(227,179,65,0.3)":l.w4.colors.border};
`,f=i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: ${({state:e})=>"REGULAR"===e?c:"none"} 1.5s ease-in-out infinite;
`,m=i().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,b=i().div`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${({positive:e})=>null===e?l.w4.colors.border:e?"rgba(63,185,80,0.25)":"rgba(248,81,73,0.25)"};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color ${l.w4.transitions.slow};
`,w=i().div`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,u=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${l.w4.colors.mainText};
`,y=i().div`
  font-size: 26px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  line-height: 1.1;
`,$=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${({pct:e})=>(0,d.Nf)(e)};
`,v=i().div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  margin-top: 2px;
`,M=i().div`
  height: 14px;
  width: ${({w:e})=>e??"100%"};
  background: ${l.w4.colors.border};
  border-radius: 3px;
  animation: ${c} 1.5s ease-in-out infinite;
`,k=i().div`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,z=i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,j=i().div`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
`,T=i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: ${l.w4.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({color:e})=>e};
`,S=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid ${l.w4.colors.border};
  font-size: 11px;

  &:last-child { border-bottom: none; }
`,F=i().span`
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,A=i().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 600;
  color: ${({pct:e})=>(0,d.Nf)(e)};
`,R=i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,H=i().div`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 6px;
`,L=i().div`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,P=i().div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.6;
`,C=i().div`
  padding: ${l.w4.spacing.md};
  background: rgba(248,81,73,0.08);
  border: 1px solid rgba(248,81,73,0.25);
  border-radius: ${l.w4.borderRadius.md};
  color: #f85149;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,B=[{symbol:"AAPL",label:"Apple",region:"\uD83C\uDDFA\uD83C\uDDF8 Americas"},{symbol:"NVDA",label:"NVIDIA",region:"\uD83C\uDDFA\uD83C\uDDF8 Americas"},{symbol:"ASML",label:"ASML",region:"\uD83C\uDDF3\uD83C\uDDF1 Europe"},{symbol:"TSM",label:"TSMC",region:"\uD83C\uDDF9\uD83C\uDDFC Asia"}];function V({pct:e}){return e>0?(0,t.jsx)(s.In,{name:"trending-up",size:16}):e<0?(0,t.jsx)(s.In,{name:"trending-down",size:16}):(0,t.jsx)(s.In,{name:"minus",size:14})}function D({quotes:e,loading:o,error:r}){let a=e.values().next().value,i=a?.marketState??"CLOSED",n="REGULAR"===i?"Market Open":"PRE"===i?"Pre-Market":"POST"===i?"After Hours":"Market Closed";return(0,t.jsxs)(p,{children:[(0,t.jsxs)(g,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(s.In,{name:"trending-up",size:18,color:"#58a6ff"}),"Market Overview"]}),(0,t.jsxs)(h,{state:i,children:[(0,t.jsx)(f,{state:i}),n]})]}),r&&(0,t.jsxs)(C,{children:[(0,t.jsx)(s.In,{name:"refresh",size:13}),"Market data unavailable. Try again in a moment."]}),(0,t.jsx)(k,{children:"Key Indices"}),(0,t.jsx)(m,{children:B.map(({symbol:r,label:a,region:i})=>{let n=e.get(r),l=n?n.changePct>0||!(n.changePct<0)&&null:null;return(0,t.jsxs)(b,{positive:l,children:[(0,t.jsx)(w,{children:i}),(0,t.jsx)(u,{children:a}),o&&!n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(M,{w:"80px",style:{height:28}}),(0,t.jsx)(M,{w:"60px"})]}):n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{children:(0,d.Sc)(n.price,n.price>1e3?0:2)}),(0,t.jsxs)($,{pct:n.changePct,children:[(0,t.jsx)(V,{pct:n.changePct}),(0,d.pT)(n.changePct),(0,t.jsxs)("span",{style:{fontWeight:400,fontSize:12},children:["(",n.change>=0?"+":"",(0,d.Sc)(n.change,2),")"]})]}),(0,t.jsxs)(v,{children:["H ",(0,d.Sc)(n.high,n.high>1e3?0:2)," \xb7 L ",(0,d.Sc)(n.low,n.low>1e3?0:2)," \xb7 Prev ",(0,d.Sc)(n.prevClose,n.prevClose>1e3?0:2)]})]}):(0,t.jsx)(v,{children:"No data"})]},r)})}),(0,t.jsx)(k,{children:"By Region"}),(0,t.jsx)(z,{children:d.ij.map(r=>(0,t.jsxs)(j,{children:[(0,t.jsxs)(T,{color:r.color,children:[r.emoji," ",r.name]}),r.indices.slice(0,4).map(r=>{let a=e.get(r.symbol);return(0,t.jsxs)(S,{children:[(0,t.jsxs)(F,{children:[(0,t.jsx)("span",{children:r.flag}),r.name]}),o&&!a?(0,t.jsx)(M,{w:"50px"}):a?(0,t.jsx)(A,{pct:a.changePct,children:(0,d.pT)(a.changePct)}):(0,t.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontSize:11},children:"—"})]},r.symbol)})]},r.id))}),(0,t.jsx)(k,{children:"Understanding Markets"}),(0,t.jsxs)(R,{children:[(0,t.jsxs)(H,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(s.In,{name:"info",size:13,color:"#58a6ff"})," What is a stock index?"]}),(0,t.jsx)(P,{children:"An index tracks the combined performance of a group of stocks. The S&P 500, for example, follows 500 of the largest US companies and is widely used as a benchmark for the overall US stock market."})]}),(0,t.jsxs)(H,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(s.In,{name:"trending-up",size:13,color:"#3fb950"})," Green day vs Red day"]}),(0,t.jsx)(P,{children:"A green day means the index closed higher than it opened — investors are bullish. A red day means it closed lower — sentiment is bearish. The % change shows how much the index moved from the previous close."})]}),(0,t.jsxs)(H,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(s.In,{name:"info",size:13,color:"#e3b341"})," Market hours"]}),(0,t.jsx)(P,{children:"US markets (NYSE, NASDAQ) trade Mon–Fri 9:30 am–4 pm ET. European markets open at ~8 am CET, Asian markets at ~9 am local time. Pre-market and after-hours trading also occur with lower volume."})]})]})]})}},5855(e,o,r){r.d(o,{A:()=>F});var t=r(5723);r(7991);var a=r(6859),i=r.n(a),n=r(2799),l=r(18),s=r(4764),d=r(9522);let c=(0,n.keyframes)`0%,100%{opacity:1}50%{opacity:.4}`,p=i().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
`,g=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,x=i().h2`
  font-size: ${s.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,h=i().table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,f=i().thead`
  border-bottom: 1px solid ${s.w4.colors.border};
`,m=i().th`
  padding: 8px ${s.w4.spacing.sm};
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-align: ${({align:e})=>e??"left"};
`,b=i().tr`
  border-bottom: 1px solid ${s.w4.colors.border};
  transition: background ${s.w4.transitions.fast};

  &:last-child { border-bottom: none; }
  &:hover { background: ${s.w4.colors.mainBg}; }
`,w=i().td`
  padding: 10px ${s.w4.spacing.sm};
  color: ${s.w4.colors.mainText};
  text-align: ${({align:e})=>e??"left"};
`,u=i().div`
  font-weight: 500;
  color: ${s.w4.colors.mainText};
`,y=i().div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 2px;
`,$=i().span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-weight: 600;
  font-size: 11px;
  color: ${({pct:e})=>(0,d.Nf)(e)};
  background: ${({pct:e})=>e>0?"rgba(63,185,80,0.1)":e<0?"rgba(248,81,73,0.1)":"transparent"};
  padding: 2px 7px;
  border-radius: 999px;
`,v=i().div`
  position: relative;
  width: 90px;
  height: 4px;
  background: ${s.w4.colors.border};
  border-radius: 2px;
  overflow: visible;
`,M=i().div`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  height: 100%;
  background: ${s.w4.colors.border};
  border-radius: 2px;
`,k=i().div`
  position: absolute;
  top: 50%;
  left: ${({pos:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,z=i().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  margin-top: 2px;
`,j=i().div`
  height: 14px;
  width: ${({w:e})=>e??"60px"};
  background: ${s.w4.colors.border};
  border-radius: 3px;
  animation: ${c} 1.5s ease-in-out infinite;
  display: inline-block;
`,T=i().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 110px;
`;function S({q:e}){let o=e.week52High-e.week52Low;if(0===o)return null;let r=(e.low-e.week52Low)/o*100,a=(e.high-e.week52Low)/o*100,i=(e.price-e.week52Low)/o*100;return(0,t.jsxs)(T,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(M,{left:r,width:a-r}),(0,t.jsx)(k,{pos:i,color:(0,d.Nf)(e.changePct)})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)("span",{children:(0,d.Sc)(e.week52Low,e.week52Low>1e3?0:2)}),(0,t.jsx)("span",{children:"52w"}),(0,t.jsx)("span",{children:(0,d.Sc)(e.week52High,e.week52High>1e3?0:2)})]})]})}function F({region:e,quotes:o,loading:r}){return(0,t.jsxs)(p,{children:[(0,t.jsx)(g,{children:(0,t.jsxs)(x,{children:[(0,t.jsx)("span",{style:{fontSize:22},children:e.emoji}),e.name]})}),(0,t.jsxs)(h,{children:[(0,t.jsx)(f,{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(m,{children:"Index"}),(0,t.jsx)(m,{align:"right",children:"Price"}),(0,t.jsx)(m,{align:"right",children:"Day Change"}),(0,t.jsx)(m,{align:"right",children:"Open"}),(0,t.jsx)(m,{align:"right",children:"High / Low"}),(0,t.jsx)(m,{align:"center",children:"52-Week Range"})]})}),(0,t.jsx)("tbody",{children:e.indices.map(e=>{let a=o.get(e.symbol);return(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(u,{children:[e.flag," ",e.name]}),(0,t.jsx)(y,{children:e.description})]}),(0,t.jsx)(w,{align:"right",children:r&&!a?(0,t.jsx)(j,{}):a?(0,t.jsx)("span",{style:{fontFamily:s.w4.typography.fontFamilyMono,fontWeight:600},children:(0,d.Sc)(a.price,a.price>1e3?0:2)}):"—"}),(0,t.jsx)(w,{align:"right",children:r&&!a?(0,t.jsx)(j,{w:"50px"}):a?(0,t.jsxs)($,{pct:a.changePct,children:[a.changePct>0?(0,t.jsx)(l.In,{name:"trending-up",size:11}):a.changePct<0?(0,t.jsx)(l.In,{name:"trending-down",size:11}):(0,t.jsx)(l.In,{name:"minus",size:10}),(0,d.pT)(a.changePct)]}):"—"}),(0,t.jsx)(w,{align:"right",children:a?(0,t.jsx)("span",{style:{fontFamily:s.w4.typography.fontFamilyMono,fontSize:12,color:s.w4.colors.mainTextMuted},children:(0,d.Sc)(a.open,a.open>1e3?0:2)}):"—"}),(0,t.jsx)(w,{align:"right",children:a?(0,t.jsxs)("div",{style:{fontFamily:s.w4.typography.fontFamilyMono,fontSize:11},children:[(0,t.jsxs)("div",{style:{color:"#3fb950"},children:["H ",(0,d.Sc)(a.high,a.high>1e3?0:2)]}),(0,t.jsxs)("div",{style:{color:"#f85149"},children:["L ",(0,d.Sc)(a.low,a.low>1e3?0:2)]})]}):"—"}),(0,t.jsx)(w,{align:"center",children:a?(0,t.jsx)(S,{q:a}):"—"})]},e.symbol)})})]})]})}},5323(e,o,r){r.d(o,{A:()=>z});var t=r(5723);r(7991);var a=r(6859),i=r.n(a),n=r(2799),l=r(18),s=r(4764),d=r(9522);let c=(0,n.keyframes)`0%,100%{opacity:1}50%{opacity:.4}`,p=i().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
`,g=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.sm};
`,x=i().h2`
  font-size: ${s.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,h=i().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,f=i().div`
  background: ${({bg:e})=>e};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: default;
  transition: filter ${s.w4.transitions.base};
  min-height: 90px;

  &:hover {
    filter: brightness(1.15);
  }
`,m=i().div`
  font-size: 11px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
`,b=i().div`
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  line-height: 1.3;
  flex: 1;
`,w=i().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 18px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  display: flex;
  align-items: center;
  gap: 4px;
`,u=i().div`
  background: ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  min-height: 90px;
  animation: ${c} 1.5s ease-in-out infinite;
`,y=i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
`,$=i().div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #7f1d1d, #dc2626, #21262d, #16a34a, #166534);
`,v=i().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 2px;
`,M=i().div`
  display: flex;
  gap: ${s.w4.spacing.md};
  flex-wrap: wrap;
`,k=i().div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: ${({positive:e})=>e?"rgba(63,185,80,0.1)":"rgba(248,81,73,0.1)"};
  color: ${({positive:e})=>e?"#3fb950":"#f85149"};
  border: 1px solid ${({positive:e})=>e?"rgba(63,185,80,0.25)":"rgba(248,81,73,0.25)"};
`;function z({quotes:e,loading:o}){let r=d.kJ.map(o=>({...o,quote:e.get(o.symbol)})),a=r.filter(e=>e.quote),i=a.filter(e=>(e.quote?.changePct??0)>0).length,n=a.filter(e=>(e.quote?.changePct??0)<0).length,s=a.reduce((e,o)=>(e.quote?.changePct??-1/0)>(o.quote?.changePct??-1/0)?e:o,a[0]),c=a.reduce((e,o)=>(e.quote?.changePct??1/0)<(o.quote?.changePct??1/0)?e:o,a[0]);return(0,t.jsxs)(p,{children:[(0,t.jsxs)(g,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(l.In,{name:"layers",size:18,color:"#bc8cff"}),"S&P 500 Sectors"]}),a.length>0&&(0,t.jsxs)(M,{children:[(0,t.jsxs)(k,{positive:!0,children:[(0,t.jsx)(l.In,{name:"trending-up",size:12}),i," advancing"]}),(0,t.jsxs)(k,{positive:!1,children:[(0,t.jsx)(l.In,{name:"trending-down",size:12}),n," declining"]}),s?.quote&&(0,t.jsxs)(k,{positive:!0,children:["Best: ",s.name," ",(0,d.pT)(s.quote.changePct)]}),c?.quote&&(0,t.jsxs)(k,{positive:!1,children:["Worst: ",c.name," ",(0,d.pT)(c.quote.changePct)]})]})]}),(0,t.jsx)(h,{children:o&&0===e.size?d.kJ.map(e=>(0,t.jsx)(u,{},e.symbol)):r.map(({symbol:e,name:o,description:r,quote:a})=>{let i=a?.changePct??0;return(0,t.jsxs)(f,{bg:(0,d.yv)(i),children:[(0,t.jsx)(m,{children:o}),(0,t.jsx)(b,{children:r}),(0,t.jsxs)(w,{children:[i>0?(0,t.jsx)(l.In,{name:"trending-up",size:14}):i<0?(0,t.jsx)(l.In,{name:"trending-down",size:14}):null,a?(0,d.pT)(i):"—"]})]},e)})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)("span",{children:"−4%"}),(0,t.jsx)($,{}),(0,t.jsx)("span",{children:"+4%"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)("span",{children:"Bearish"}),(0,t.jsx)("span",{children:"Neutral"}),(0,t.jsx)("span",{children:"Bullish"})]})]})]})}},9522(e,o,r){r.d(o,{Nf:()=>g,Rq:()=>c,Sc:()=>h,W6:()=>p,ij:()=>n,kJ:()=>s,pT:()=>f,rb:()=>l,yv:()=>x,zR:()=>d});var t=r(7991),a=r(3409),i=r(9463);let n=[{id:"americas",name:"Americas",emoji:"\uD83C\uDF0E",color:"#58a6ff",indices:[{symbol:"AAPL",name:"Apple",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"Consumer electronics & software giant"},{symbol:"MSFT",name:"Microsoft",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"Cloud, enterprise software & AI leader"},{symbol:"AMZN",name:"Amazon",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"E-commerce and cloud computing (AWS)"},{symbol:"NVDA",name:"NVIDIA",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"GPU & AI chip market leader"},{symbol:"META",name:"Meta",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"Social media and metaverse platforms"},{symbol:"TSLA",name:"Tesla",flag:"\uD83C\uDDFA\uD83C\uDDF8",description:"Electric vehicles and clean energy"}]},{id:"europe",name:"Europe",emoji:"\uD83C\uDF0D",color:"#3fb950",indices:[{symbol:"ASML",name:"ASML",flag:"\uD83C\uDDF3\uD83C\uDDF1",description:"Dutch chipmaker — world monopoly on EUV lithography"},{symbol:"SAP",name:"SAP",flag:"\uD83C\uDDE9\uD83C\uDDEA",description:"German enterprise software leader"},{symbol:"NVO",name:"Novo Nordisk",flag:"\uD83C\uDDE9\uD83C\uDDF0",description:"Danish pharma — Ozempic/GLP-1 drugs"},{symbol:"SHEL",name:"Shell",flag:"\uD83C\uDDEC\uD83C\uDDE7",description:"UK-based global oil & gas major"},{symbol:"HSBC",name:"HSBC",flag:"\uD83C\uDDEC\uD83C\uDDE7",description:"One of the world's largest banks"},{symbol:"UL",name:"Unilever",flag:"\uD83C\uDDEC\uD83C\uDDE7",description:"Global consumer goods conglomerate"}]},{id:"asia",name:"Asia Pacific",emoji:"\uD83C\uDF0F",color:"#e3b341",indices:[{symbol:"TSM",name:"TSMC",flag:"\uD83C\uDDF9\uD83C\uDDFC",description:"World's largest semiconductor foundry"},{symbol:"BABA",name:"Alibaba",flag:"\uD83C\uDDE8\uD83C\uDDF3",description:"China's largest e-commerce platform"},{symbol:"TM",name:"Toyota",flag:"\uD83C\uDDEF\uD83C\uDDF5",description:"World's largest automaker"},{symbol:"SONY",name:"Sony",flag:"\uD83C\uDDEF\uD83C\uDDF5",description:"Electronics, gaming & entertainment"},{symbol:"SE",name:"Sea Limited",flag:"\uD83C\uDDF8\uD83C\uDDEC",description:"Southeast Asia's leading tech company"},{symbol:"BIDU",name:"Baidu",flag:"\uD83C\uDDE8\uD83C\uDDF3",description:"China's leading search & AI company"}]}],l=n.flatMap(e=>e.indices.map(e=>e.symbol)),s=[{symbol:"NVDA",name:"Technology",description:"NVIDIA — AI & GPU leader"},{symbol:"JPM",name:"Financials",description:"JPMorgan — largest US bank"},{symbol:"JNJ",name:"Healthcare",description:"Johnson & Johnson — pharma giant"},{symbol:"XOM",name:"Energy",description:"ExxonMobil — oil & gas major"},{symbol:"GOOGL",name:"Communication",description:"Alphabet — search & ads"},{symbol:"CAT",name:"Industrials",description:"Caterpillar — heavy machinery"},{symbol:"AMZN",name:"Consumer Disc.",description:"Amazon — retail & marketplace"},{symbol:"PG",name:"Consumer Staples",description:"Procter & Gamble — household goods"},{symbol:"NEE",name:"Utilities",description:"NextEra Energy — renewable power"},{symbol:"PLD",name:"Real Estate",description:"Prologis — industrial REITs"},{symbol:"LIN",name:"Materials",description:"Linde — industrial gases & chemicals"}],d=s.map(e=>e.symbol);function c(e,o=3e5){let r=(0,i.useApiKey)("finnhub"),[n,l]=(0,t.useState)(new Map),[s,d]=(0,t.useState)(!0),[p,g]=(0,t.useState)(null),x=e.map(e=>e.toUpperCase()).join(","),h=(0,t.useRef)(x);h.current=x;let f=(0,t.useRef)(r);f.current=r;let m=(0,t.useCallback)(async()=>{let e=f.current;if(!e)return void d(!1);let o=h.current.split(","),r=function(){let e=new Date,o=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",weekday:"short"}).format(e);if("Sat"===o||"Sun"===o)return"CLOSED";let r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e),t=60*Number(r.find(e=>"hour"===e.type)?.value??0)+Number(r.find(e=>"minute"===e.type)?.value??0);return t>=240&&t<570?"PRE":t>=570&&t<960?"REGULAR":t>=960&&t<1200?"POST":"CLOSED"}(),t=await Promise.all(o.map(o=>(0,a.fetchQuote)(o,{key:e}).catch(()=>null))),i=new Map;if(o.forEach((e,o)=>{let a=t[o];a&&a.c>0&&i.set(e,{symbol:e,price:a.c,change:a.d,changePct:a.dp,open:a.o,high:a.h,low:a.l,prevClose:a.pc,week52High:0,week52Low:0,marketState:r})}),0===i.size){g("No data"),d(!1);return}g(null),l(new Map(i)),d(!1);let n=await Promise.all(o.map(o=>(0,a.fetchStockMetrics)(o,{key:e}).catch(()=>null))),s=!1;o.forEach((e,o)=>{let r=n[o],t=i.get(e);r&&t&&(i.set(e,{...t,week52High:r["52WeekHigh"]??0,week52Low:r["52WeekLow"]??0}),s=!0)}),s&&l(new Map(i))},[]);return(0,t.useEffect)(()=>{if(m(),o<=0)return;let e=setInterval(()=>{m()},o);return()=>clearInterval(e)},[m,o]),(0,t.useEffect)(()=>{r&&m()},[r,m]),{quotes:n,loading:s,error:p,hasKey:!!r}}function p(e,o){let r=(0,i.useApiKey)("finnhub"),[n,l]=(0,t.useState)([]),[s,d]=(0,t.useState)(!0),[c,p]=(0,t.useState)(null),g=(0,t.useRef)(r);g.current=r;let x=(0,t.useCallback)(async()=>{let r=g.current;if(!r){d(!1),p("No API key");return}let t=Math.floor(Date.now()/1e3),i="5d"===o?7:"1mo"===o?35:95,n=await (0,a.fetchCandles)(e,{key:r,from:t-24*i*3600,to:t,resolution:"D"});if(!n||"no_data"===n.s||!n.t.length){p("No data"),l([]),d(!1);return}let s=n.t.map((e,o)=>{let r=new Date(1e3*e).toISOString().slice(0,10),t=o>0?n.c[o-1]:n.o[o],a=t>0?(n.c[o]-t)/t*100:0;return{date:r,open:n.o[o],high:n.h[o],low:n.l[o],close:n.c[o],changePct:a}});p(null),l(s),d(!1)},[e,o]);return(0,t.useEffect)(()=>{x()},[x]),{bars:n,loading:s,error:c}}function g(e){return e>0?"#3fb950":e<0?"#f85149":"#8b949e"}function x(e){let o=Math.max(-4,Math.min(4,e));if(0===o)return"#21262d";if(o>0){let e=o/4,r=Math.round(80+105*e),t=Math.round(20+10*e),a=Math.round(30+10*e);return`rgb(${t},${r},${a})`}let r=-o/4,t=Math.round(100+148*r),a=Math.round(20+10*r),i=Math.round(20+10*r);return`rgb(${t},${a},${i})`}function h(e,o=2){return e.toLocaleString("en-US",{minimumFractionDigits:o,maximumFractionDigits:o})}function f(e){return`${e>=0?"+":""}${e.toFixed(2)}%`}},18(e,o,r){r.d(o,{In:()=>u});var t=r(5723);r(7991);var a=r(6859),i=r.n(a),n=r(4764);let l={ghost:"transparent",accent:"transparent",primary:n.w4.colors.accent,success:"#238636",danger:"#da3633"},s={ghost:n.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:n.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},d={ghost:n.w4.colors.border,accent:n.w4.colors.accent,primary:n.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:n.w4.colors.mainTextMuted,accent:n.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},p={ghost:n.w4.colors.mainText,accent:n.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={sm:"28px",md:"30px"},x={sm:"0 10px",md:"0 12px"},h={sm:"12px",md:"12px"};i().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>g[e]};
  padding: ${({size:e})=>x[e]};
  background: ${({variant:e})=>l[e]};
  border: 1px solid ${({variant:e})=>d[e]};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${({variant:e})=>c[e]};
  font-size: ${({size:e})=>h[e]};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>s[e]};
    color: ${({variant:e})=>p[e]};
    border-color: ${({variant:e})=>"ghost"===e?n.w4.colors.accent:d[e]};
  }

  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;let f={default:n.w4.colors.accent,danger:"#f85149"},m={default:n.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};i().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${n.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":n.w4.borderRadius.sm};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};

  &:hover:not(:disabled) {
    color: ${({tone:e})=>f[e]};
    background: ${({tone:e})=>m[e]};
    border-color: ${({tone:e})=>f[e]};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,i().div`
  position: relative;
  display: inline-flex;
`,i().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: -2px;
  }
`,i().div`
  height: 1px;
  margin: 4px 0;
  background: ${n.w4.colors.sidebarBorder};
`,i().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,i().div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
`,i().span`
  width: 1px;
  height: 20px;
  background: ${n.w4.colors.border};
  flex-shrink: 0;
`,i().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,i()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:o})=>e||o?n.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:o})=>e||o?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${n.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${n.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${n.w4.focusRing} }
`,r(2727);var b=r(2799);let w={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'};function u({name:e,size:o=18,strokeWidth:r=1.5,...a}){let i=w[e];return(0,t.jsx)("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!a["aria-label"]||void 0,...a,dangerouslySetInnerHTML:{__html:i}})}Object.keys(w),i().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${n.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${n.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,i().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,i().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${n.w4.colors.accentMuted};
  border: 1px solid ${n.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 700;
  color: ${n.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;let y=(0,b.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;i().div`
  position: relative;
`,i().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${n.w4.transitions.fast}, background ${n.w4.transitions.fast};
  &:hover {
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${n.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,i().span`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,i().div`
  position: fixed;
  min-width: 240px;
  background: ${n.w4.colors.surfaceRaised};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${y} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${n.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,i().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${n.w4.colors.border};
`,i().div`
  margin-bottom: 10px;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  color: ${n.w4.colors.mainTextMuted};
  margin-top: 2px;
`,i().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${n.w4.colors.borderSubtle};
`,i().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,i().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.borderSubtle};
  border-radius: ${n.w4.borderRadius.md};
`,i().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainText};
    background: ${({active:e})=>e?n.w4.colors.accentMuted:n.w4.colors.sidebarHover};
  }
`,i().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":n.w4.colors.mainText};
  }
`,(0,n.PL)("shell:locale").then(e=>{if("en"===e||"pt"===e)try{localStorage.setItem("atlantis:locale",e)}catch{}}).catch(()=>{}),i().div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,i().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainText};
  }
`,i().div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};

  @media (max-width: ${n.w4.breakpoints.md}) {
    gap: ${n.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,i().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 999px;
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  min-width: 180px;
  padding: 0 6px 0 12px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.borderStrong};
  border-radius: 999px;
  color: ${n.w4.colors.mainText};
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, color ${n.w4.transitions.fast}, box-shadow ${n.w4.transitions.fast};
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  .label {
    flex: 1;
    text-align: left;
    color: ${n.w4.colors.mainTextMuted};
    font-weight: 500;
    letter-spacing: -0.1px;
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    min-width: 0;
    padding: 0 12px;
    .label { display: none; }
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${n.w4.colors.sidebarHover};
    border: 1px solid ${n.w4.colors.borderSubtle};
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${n.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, background ${n.w4.transitions.fast};
  }

  &:hover {
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.surfaceRaised};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
  &:hover .label { color: ${n.w4.colors.mainText}; }
  &:hover .kbd {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent}55;
    background: ${n.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`,i().div`
  position: relative;
  display: inline-flex;
`,i().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${n.w4.colors.mainBg};
  color: #fff;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${n.w4.colors.accent};
  border: 1px solid ${n.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.accentHover};
    border-color: ${n.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`,i().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,i().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,i().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${n.w4.transitions.fast};
`,i().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${n.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,i().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${n.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,i().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${n.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;let $=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;i()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${n.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${$} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${n.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${n.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,i().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${n.w4.colors.border};
  color: ${n.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${n.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${n.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${n.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${n.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${n.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${n.w4.colors.mainText}; }
    & .b { color: ${n.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${n.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${n.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${n.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${n.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${n.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${n.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${n.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${n.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${n.w4.colors.mainText};
      font-family: ${n.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${n.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${n.w4.colors.mainText};
    }
  }
`,i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${n.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${n.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,i().div`
  padding: 6px 14px 16px;
`,i().h3`
  margin: 0 0 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${n.w4.colors.mainText};

  .hash {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${n.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,i().p`
  margin: 0;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,i().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${n.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.4;
`,i().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?n.w4.colors.accent:n.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${n.w4.transitions.fast}, color ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
  }
`,i().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${n.w4.transitions.fast};
  z-index: 3;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?n.w4.colors.borderStrong:n.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?n.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?n.w4.colors.mainTextMuted:n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${n.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?n.w4.colors.mainTextFaint:n.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?n.w4.colors.mainText:n.w4.colors.accentHover};
  }

  &:focus-visible {
    ${n.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,i().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let v={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:n.w4.colors.accentMuted},M={neutral:n.w4.colors.mainTextMuted,live:n.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:n.w4.colors.accent};i().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?n.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>v[e]};
  color: ${({tone:e})=>M[e]};
`,i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`,i().kbd`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 3px;
  color: ${n.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,i().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,i().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${n.w4.transitions.fast};

  &:focus-within {
    border-color: ${n.w4.colors.accent};
  }
`,i().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${n.w4.colors.mainTextFaint};
  }
`,i().span`
  display: inline-flex;
  align-items: center;
  color: ${n.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,i().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px 20px 20px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.borderSubtle};
  border-radius: ${n.w4.borderRadius.lg};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  transition: border-color ${n.w4.transitions.fast},
    background ${n.w4.transitions.fast};

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,i().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,i().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  line-height: 1.45;
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.danger};
`,i().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${n.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.borderSubtle};
  border-radius: ${n.w4.borderRadius.lg};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${n.w4.colors.accent}`:"none"};
  transition: border-color ${n.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?n.w4.colors.accentHover:n.w4.colors.borderStrong};
  }
`,i().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,i().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,i().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,i().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${n.w4.colors.mainText};
  margin-bottom: 4px;
`,i().div`
  font-size: 11.5px;
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,i().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${n.w4.colors.accentMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
`,i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,i().button`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${n.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${n.w4.transitions.fast},
    background ${n.w4.transitions.fast};

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
    background: ${n.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${n.w4.focusRing}
  }
`,i().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,i().div`
  font-size: 11px;
  color: ${n.w4.colors.mainText};
`,i().div`
  margin-top: 14px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`,i().div`
  position: relative;
  display: inline-block;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?n.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?n.w4.colors.borderStrong:n.w4.colors.border};
  border-radius: 999px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast},
    border-color ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.mainText};
    border-color: ${n.w4.colors.borderStrong};
  }
  &:focus-visible { ${n.w4.focusRing} }
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${n.w4.colors.accentMuted};
  color: ${n.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let k=(0,b.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;i().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${n.w4.colors.surfaceRaised};
  border: 1px solid ${n.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${n.w4.elevation.lg};
  z-index: ${n.w4.zIndex.dropdown};
  animation: ${k} 0.18s ease both;

  @media (max-width: ${n.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,i()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?n.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${n.w4.transitions.fast};

  &:hover { background: ${n.w4.colors.surfaceHover}; }
  &:focus-visible { ${n.w4.focusRing} }
`,i()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,i().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,i().span`
  font-size: 13.5px;
  color: ${n.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${n.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,i()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,i().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${n.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.mainText};
    background: ${n.w4.colors.surfaceHover};
  }
  &:focus-visible { ${n.w4.focusRing} }
`,i().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,i().span`
  margin-left: auto;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${n.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;let z=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;i()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${z} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${n.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${n.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${n.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${n.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,i().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
  z-index: 2;
`,i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${n.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${n.w4.colors.codeBg};

  /* ── bombbrawl — explosive red, heavy condensed logotype ──
   * padding-top reserves room for the player-count + online badges so
   * "BOMB" never sits under them (TopLeft / TopRight are absolutely
   * positioned at top:10px). */
  &.hero--bombbrawl {
    background: linear-gradient(135deg, #2a0a0f, #0f0a12);
    justify-content: flex-start;
    padding: 44px 20px 16px;
  }
  &.hero--bombbrawl .hero-mark {
    font-family: ${n.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 48px;
    letter-spacing: -3px;
    line-height: 0.88;
    color: #ff4444;
    text-shadow: 0 0 40px rgba(255, 68, 68, 0.45), 0 0 80px rgba(255, 68, 68, 0.18);
    user-select: none;
  }
  &.hero--bombbrawl .hero-mark em {
    font-style: normal;
    color: #ffb347;
    display: block;
    font-size: 36px;
    letter-spacing: -2px;
    opacity: 0.9;
  }

  /* ── jumpparty — lime burst, bouncy stacked words ── */
  &.hero--jumpparty {
    background: linear-gradient(135deg, #0e2416, #0f1220);
    flex-direction: column;
    gap: 0;
    padding: 44px 16px 12px;
  }
  &.hero--jumpparty .hero-mark {
    font-family: ${n.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 54px;
    letter-spacing: -3px;
    line-height: 0.9;
    color: #3fb950;
    text-shadow: 0 0 36px rgba(63, 185, 80, 0.4);
    user-select: none;
  }
  &.hero--jumpparty .hero-mark em {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 4px;
    color: rgba(63, 185, 80, 0.55);
    display: block;
    text-transform: uppercase;
  }

  /* ── animalarena — trophy gold, serif italic clash ── */
  &.hero--animalarena {
    background: linear-gradient(135deg, #1c1a0e, #0f0f12);
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 20px 18px;
  }
  &.hero--animalarena .hero-mark {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 0.92;
    background: linear-gradient(120deg, #f59e0b, #ef4444 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    user-select: none;
  }
  &.hero--animalarena .hero-mark em {
    font-style: normal;
    display: block;
    font-size: 14px;
    letter-spacing: 3px;
    -webkit-text-fill-color: rgba(245, 158, 11, 0.45);
    text-transform: uppercase;
    margin-top: 6px;
  }
`,i().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
  z-index: 2;

  /* bombbrawl's "BOMB / BRAWL" logotype is left-aligned and reaches the
   * bottom of the hero zone — anchor the caption bottom-right instead so
   * it clears the typography. */
  .hero--bombbrawl & {
    left: auto;
    right: 14px;
    color: rgba(255, 179, 71, 0.55);
  }

  /* animalarena's "SUMO / ZOO" stack is also left-aligned and its "ZOO"
   * block reaches the bottom of the hero zone — same bottom-right
   * anchoring clears the overlap. */
  .hero--animalarena & {
    left: auto;
    right: 14px;
    color: rgba(245, 158, 11, 0.5);
  }
`,i().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,i().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,i().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,i().div`
  padding: 6px 14px 16px;
`,i().h3`
  margin: 0 0 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${n.w4.colors.mainText};

  .hash {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${n.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,i().p`
  margin: 0;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,r(5406),i().nav`padding: ${n.w4.spacing.sm} 0;`,i().div`
  border-bottom: 1px solid ${n.w4.colors.border}60;
  margin-bottom: 2px;
`,i().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${n.w4.colors.sidebarText}; }
`,i().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,i().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,i().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,i().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,i().div`overflow: hidden;`,i().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,i().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${n.w4.spacing.md};
  background: ${({active:e})=>e?n.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,i().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":n.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;let j="#7fb77e",T=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;i().div`
  position: relative;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 28px ${n.w4.spacing.lg} ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${T} 0.25s ease both;
  transition:
    border-color ${n.w4.transitions.base},
    transform ${n.w4.transitions.base},
    box-shadow ${n.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${j};
  }

  /* Uppercase mono eyebrow tag — reads "◉ DIAGRAM" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${j};
    opacity: 0.75;
    pointer-events: none;
  }

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${n.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,i().div`
  height: 36px;
  width: min(60%, 240px);
  margin: 0 auto;
  border-radius: ${n.w4.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${n.w4.colors.border} 0%,
    ${n.w4.colors.borderStrong} 50%,
    ${n.w4.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${(0,b.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,i().pre`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${n.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,i().div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  margin-bottom: ${n.w4.spacing.md};
  text-align: center;
`,i().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  margin-top: ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,i().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,i().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,i().pre`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${n.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,i().div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.md};
`,i().div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,i().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,i().div`
  display: flex;
  gap: ${n.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,i().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${n.w4.colors.accent};
    color: ${n.w4.colors.accent};
  }
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  text-align: center;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  text-align: center;
`;let S=(0,b.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;i().div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
`,i().div`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${n.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${n.w4.spacing.sm};

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,i().div`
  display: flex;
  flex-direction: column;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${n.w4.colors.accent}40;
    box-shadow: 0 0 8px ${n.w4.colors.accent}15;
  }
`;let F=i().button`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  padding: 14px ${n.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${n.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${S} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;i()(F)`
  border-bottom: 1px solid ${n.w4.colors.border}80;
`,i()(F)``,i().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,i().span`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.accent};
`,i().span`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
`;var A=r(1426);i().div`
  margin: ${n.w4.spacing.lg} 0;
  border-radius: ${n.w4.borderRadius.md};
  border: 1px solid ${n.w4.colors.codeBorder};
  overflow: hidden;
`,i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${n.w4.colors.codeBorder};
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":n.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${n.w4.colors.sidebarText}; border-color: ${n.w4.colors.sidebarText}; }
`,A.A,A.A['pre[class*="language-"]'],n.w4.colors.codeBg,A.A['code[class*="language-"]'],i().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.sm};
`,i().div`
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,i().nav`
  width: 220px;
  min-width: 220px;
  padding: ${n.w4.spacing.xxl} 0 ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,i().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.md};
`,i().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,i().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  border-radius: 0 ${n.w4.borderRadius.sm} ${n.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${n.w4.colors.mainText}; background: ${n.w4.colors.sidebarHover}; }
`,i().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${n.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,i().div`flex: 1; min-width: 0;`,i().article`
  padding: ${n.w4.spacing.xxl} 0;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  line-height: ${n.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${n.w4.spacing.xl} 0 ${n.w4.spacing.md};
    color: ${n.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${n.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${n.w4.typography.fontSizeXl}; border-bottom: 1px solid ${n.w4.colors.border}; padding-bottom: ${n.w4.spacing.sm}; }
  h2 { font-size: ${n.w4.typography.fontSizeLg}; border-bottom: 1px solid ${n.w4.colors.border}; padding-bottom: ${n.w4.spacing.xs}; }
  h3 { font-size: ${n.w4.typography.fontSizeMd}; }

  p { margin: ${n.w4.spacing.md} 0; }

  a { color: ${n.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${n.w4.colors.accentHover}; } }

  ul, ol { margin: ${n.w4.spacing.md} 0; padding-left: ${n.w4.spacing.xl}; }
  li { margin: ${n.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${n.w4.colors.border};
    margin: ${n.w4.spacing.lg} 0;
    padding: ${n.w4.spacing.sm} ${n.w4.spacing.lg};
    background: ${n.w4.colors.surface};
    color: ${n.w4.colors.mainTextMuted};
    border-radius: 0 ${n.w4.borderRadius.sm} ${n.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${n.w4.colors.codeBg};
    border: 1px solid ${n.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${n.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${n.w4.spacing.lg} 0; font-size: ${n.w4.typography.fontSizeBase}; }
  th, td { padding: ${n.w4.spacing.sm} ${n.w4.spacing.md}; border: 1px solid ${n.w4.colors.border}; text-align: left; }
  th { background: ${n.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${n.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${n.w4.colors.border}; margin: ${n.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${n.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${n.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${n.w4.spacing.lg} 0; }
`,i().div`
  display: flex;
  gap: ${n.w4.spacing.lg};
  padding: ${n.w4.spacing.xxl} 0;
  border-top: 1px solid ${n.w4.colors.border};
  margin-top: ${n.w4.spacing.xxl};
`,i().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${n.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,i().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${n.w4.colors.sidebarTextMuted}; font-family: ${n.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,i().div`
  font-size: ${n.w4.typography.fontSizeBase}; color: ${n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily}; font-weight: 500;
`,i().div`
  color: ${n.w4.colors.mainTextMuted};
  padding: ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  font-family: ${n.w4.typography.fontFamily};
`;let R=(0,b.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,H=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;i().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${R} 0.15s ease;
`,i().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${n.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${H} 0.2s ease;
`,i().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${n.w4.colors.border};
`,i().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${n.w4.colors.mainText}; background: ${n.w4.colors.border}; }
`,i().div`
  flex: 1;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,i().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,i().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?n.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,i().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${n.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${n.w4.colors.accent}20`:n.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,i().div`
  flex: 1;
  min-width: 0;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,i().span`
  font-weight: 400;
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,i().span`
  font-size: 11px;
  font-weight: 500;
  color: ${n.w4.colors.accent};
  background: ${n.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${n.w4.colors.accent}25;
    color: ${n.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,i().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?n.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,i().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${n.w4.colors.border};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
`,i().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.sidebarTextMuted};
`,i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`,i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${n.w4.typography.fontFamily};
  background: ${n.w4.colors.mainBg};
`,i().div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,i().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${n.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${n.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,i().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,i().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${n.w4.colors.mainText} 0%,
    ${n.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,i().p`
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,i().span`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${n.w4.colors.accent}60;
    color: ${n.w4.colors.mainText};
    background: ${n.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${n.w4.colors.surface};
    border: 1px solid ${n.w4.colors.border};
    border-radius: 3px;
    color: ${n.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,i().div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,i().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainText};
  }
`,i().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${n.w4.spacing.md}`};
  border-bottom: 1px solid ${n.w4.colors.border}60;
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${n.w4.colors.accent}10`:n.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${n.w4.colors.accent}40`:"transparent"};
  border-radius: ${n.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,i().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.sidebarText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,i().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  border-radius: ${n.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${n.w4.colors.mainText}; }
`,i().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,i().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${n.w4.spacing.md};
  background: ${({active:e})=>e?n.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${n.w4.colors.sidebarText};
`,i().span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  color: ${n.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${n.w4.colors.accent}30;
    color: ${n.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,i().div`
  padding: 12px ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,i().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,i().span`
  font-size: 11px;
  color: ${n.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,i().div`
  font-size: 14px;
  color: ${n.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${n.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-child { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${n.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${n.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${n.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${n.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${n.w4.colors.accent};
    background: ${n.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${n.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${n.w4.colors.codeBg};
    border: 1px solid ${n.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${n.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${n.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${n.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${n.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${n.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${n.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${n.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${n.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`,i().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${n.w4.spacing.sm} 0;
`,i().div`
  font-size: 10px;
  font-weight: 600;
  color: ${n.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${n.w4.spacing.xs} ${n.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,i().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,i().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;let L=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: auto;
  gap: ${n.w4.spacing.lg};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    gap: ${n.w4.spacing.md};
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,i().div`
  grid-column: ${({fullWidth:e,colSpan:o})=>e?"1 / -1":`span ${o}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${L} 0.25s ease both;

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,i().div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 0;
  height: 20px;
`,i().div`
  --panel-accent: ${({accent:e})=>e??n.w4.colors.accent};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({minH:e})=>e}px;
  height: 100%;
  padding: ${n.w4.spacing.lg};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  transition:
    border-color ${n.w4.transitions.base},
    box-shadow ${n.w4.transitions.base},
    transform ${n.w4.transitions.base};

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--panel-accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  /* Grip visual affordance left edge */
  &[data-grip='true']::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-left: 2px dotted ${n.w4.colors.borderSubtle};
    border-right: 2px dotted ${n.w4.colors.borderSubtle};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${n.w4.colors.shadow};
  }

  /* WidgetShell owns its chrome — zero ours to avoid double frame. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before,
  &:has(> [data-widget-shell])::after { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* Controls visible on hover (pointer devices); always slightly visible on touch. */
  &:hover .panel-controls { opacity: 1; }

  @media (hover: none) {
    .panel-controls {
      opacity: 0.4;
      transform: scale(0.87);
      transform-origin: top right;
    }
  }
`,i().div`
  position: absolute;
  top: -20px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${n.w4.transitions.fast};
  z-index: 2;
`;let P=i().button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition:
    color ${n.w4.transitions.fast},
    border-color ${n.w4.transitions.fast},
    background ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.mainText};
    border-color: ${n.w4.colors.mainTextMuted};
    background: ${n.w4.colors.surfaceRaised};
  }
`;i()(P)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;let C=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${C} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,i().span`
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
`,i().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,i().div`
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
`,i().div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,i().input`
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
`,i().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,i().button`
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
`,i().div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,i().div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`;let B=(0,b.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,V=(0,b.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;i().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${n.w4.spacing.md};
  animation: ${B} 0.15s ease both;
`,i().div`
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?n.w4.colors.danger+"55":n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${n.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${V} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,i().div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?n.w4.colors.danger:n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,i().div`
  font-size: ${n.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,i().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${n.w4.spacing.sm};
`,i().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast},
    border-color ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast},
    opacity ${n.w4.transitions.fast};

  background: ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?n.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:o})=>o||e?"#fff":n.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${n.w4.focusRing} }
`;let D=(0,b.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,I=(0,b.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,E=(0,b.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  animation: ${D} 0.4s ease 0.15s both;
`,i().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,i().div`
  position: absolute;
  inset: 0;
  animation: ${I} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,i().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${n.w4.colors.border};
  animation: ${E} 1.4s ease-in-out infinite;
`,i().span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,i().button`
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
`,i().div`
  position: relative;
`}}]);