"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["5569"],{20120(e,t,o){o.d(t,{BolsaWidget:()=>G});var n=o(65723),i=o(37991),l=o(36859),r=o.n(l),a=o(72799),s=o(23930),c=o(48294),d=o(28170),p=o(98975);let x=["bitcoin","ethereum","solana","binancecoin","cardano","dogecoin"],h=["AAPL","MSFT","GOOGL","NVDA","TSLA"],m={AAPL:"Apple",MSFT:"Microsoft",GOOGL:"Alphabet",NVDA:"NVIDIA",TSLA:"Tesla"},f=(0,a.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=r().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  animation: ${f} 0.3s ease both;
`,g=r().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${s.w4.spacing.sm};
  margin-bottom: 4px;
`,y=r().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,b=r().div`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,w=r().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,j=r().div`
  font-size: 9px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 0 4px;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  margin-bottom: 2px;
`,$=r().div`
  display: grid;
  grid-template-columns: 52px 1fr 80px minmax(84px, auto) 76px;
  gap: 10px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  animation: ${f} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;

  &:last-child { border-bottom: none; }

  /* Narrow cells: drop the Name column entirely and give the change
   * column enough room for "X.XX%" without truncation. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 44px 1fr minmax(72px, auto) 72px;
    gap: 8px;

    > :nth-of-type(2) { display: none; }
  }
`,v=r().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  letter-spacing: 0.04em;
`,M=r().div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k=r().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${s.w4.colors.mainText};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,F=r().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({up:e})=>e?"#7fb77e":s.w4.colors.danger};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,A=r().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12px;
`,T=r().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 10px 0 6px;
`,_=r().div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.5;
`,z=r().a`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.accent};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${s.w4.colors.accentHover};
    text-decoration: underline;
  }
`,L=r().svg`
  display: block;
`;function S({width:e=70,height:t=22}){return(0,n.jsx)(L,{width:e,height:t})}function D(e){return e>=1e3?e.toLocaleString("en-US",{maximumFractionDigits:0}):e>=1?e.toFixed(2):e.toFixed(4)}function N({data:e,color:t,width:o=70,height:i=22}){if(!e||e.length<2)return(0,n.jsx)(L,{width:o,height:i});let l=Math.min(...e),r=Math.max(...e)-l||1,a=e.map((t,n)=>{let a=n/(e.length-1)*o,s=i-(t-l)/r*(i-2)-1;return`${a.toFixed(1)},${s.toFixed(1)}`}).join(" ");return(0,n.jsx)(L,{width:o,height:i,children:(0,n.jsx)("polyline",{points:a,fill:"none",stroke:t,strokeWidth:"1.25",strokeLinejoin:"round",strokeLinecap:"round"})})}function C({symbol:e,quote:t,delay:o}){let i=t.dp>=0;return(0,n.jsxs)($,{delay:o,children:[(0,n.jsx)(v,{children:e}),(0,n.jsx)(M,{children:m[e]??e}),(0,n.jsx)(S,{}),(0,n.jsxs)(k,{children:["$",D(t.c)]}),(0,n.jsxs)(F,{up:i,children:[i?"↗":"↘"," ",Math.abs(t.dp).toFixed(2),"%"]})]})}function G({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>(0,d.Nx)(t,p.A),[t]),{rows:l,failed:r}=(0,c.useCoinsMarkets)({ids:x,includeSparkline:!0,priceChangePercentage:"24h",cacheKey:"bolsa-markets"}),{quotes:a,hasKey:m,loading:f}=(0,c.useFinnhubQuotes)({symbols:h}),[L,S]=(0,i.useState)(null);(0,i.useEffect)(()=>{l&&S(Date.now())},[l]);let O=(0,i.useMemo)(()=>{if(!L)return"";let e=Math.round((Date.now()-L)/6e4);return e<1?o("time.justNow"):o("time.mAgo",{n:e})},[L,o]);if(!l&&r)return(0,n.jsxs)(u,{children:[(0,n.jsx)(g,{children:(0,n.jsx)(y,{children:o("bolsa.title")})}),(0,n.jsx)(A,{children:o("bolsa.error")})]});if(!l)return(0,n.jsxs)(u,{children:[(0,n.jsx)(g,{children:(0,n.jsx)(y,{children:o("bolsa.title")})}),(0,n.jsx)(A,{children:o("bolsa.empty")})]});let P=h.map(e=>({sym:e,quote:a[e]??null})).filter(({quote:e})=>null!==e);return(0,n.jsxs)(u,{children:[(0,n.jsxs)(g,{children:[(0,n.jsx)(y,{children:o("bolsa.title")}),(0,n.jsx)(b,{children:O&&o("bolsa.updated",{age:O})})]}),(0,n.jsxs)(w,{children:[(0,n.jsx)(j,{children:o("bolsa.stocks.title")}),m||f?m&&0===P.length&&!f?null:P.map(({sym:e,quote:t},o)=>(0,n.jsx)(C,{symbol:e,quote:t,delay:o},e)):(0,n.jsxs)(T,{children:[(0,n.jsx)(_,{children:o("bolsa.stocks.noKey")}),(0,n.jsxs)(z,{href:"#/settings",onClick:e=>{e.preventDefault(),window.location.hash="#/settings"},children:[o("bolsa.stocks.settingsLink")," →"]})]}),(0,n.jsx)(j,{children:o("bolsa.crypto.title")}),l.map((e,t)=>{let o=e.price_change_percentage_24h>=0,i=o?"#7fb77e":s.w4.colors.danger,l=e.sparkline_in_7d?.price??[];return(0,n.jsxs)($,{delay:t,children:[(0,n.jsx)(v,{children:e.symbol.toUpperCase()}),(0,n.jsx)(M,{children:e.name}),(0,n.jsx)(N,{data:l,color:i}),(0,n.jsxs)(k,{children:["$",D(e.current_price)]}),(0,n.jsxs)(F,{up:o,children:[o?"↗":"↘"," ",Math.abs(e.price_change_percentage_24h).toFixed(2),"%"]})]},e.id)})]})]})}}}]);