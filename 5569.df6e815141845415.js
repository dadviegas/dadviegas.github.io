"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["5569"],{20120(e,t,o){o.d(t,{BolsaWidget:()=>D});var n=o(65723),i=o(37991),r=o(36859),l=o.n(r),a=o(72799),s=o(6063),c=o(63236),d=o(77752),p=o(28170),m=o(98975),h=o(8740);let x=["bitcoin","ethereum","solana","binancecoin","cardano","dogecoin"],u=["AAPL","MSFT","GOOGL","NVDA","TSLA"],f={AAPL:"Apple",MSFT:"Microsoft",GOOGL:"Alphabet",NVDA:"NVIDIA",TSLA:"Tesla"},g=(0,a.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=l().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,w=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,b=l().div`
  font-size: 11px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 0 4px;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  margin-bottom: 2px;
`,j=l().div`
  display: grid;
  /* Sym | Name | Sparkline | Price | Change. Sparkline gets the flex space and
   * may shrink to 0; the four data cells size to content with right caps so
   * a column ≈ 380px (the home dashboard's narrowest sm slot) doesn't truncate
   * the percentage tail. */
  grid-template-columns: 44px minmax(0, 0.8fr) minmax(0, 1fr) minmax(0, auto) minmax(0, auto);
  gap: 8px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  animation: ${g} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
  min-width: 0;

  &:last-child { border-bottom: none; }

  /* Narrow cells: drop the Name column entirely. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 40px minmax(0, 1fr) minmax(0, auto) minmax(0, auto);
    gap: 6px;

    > :nth-of-type(2) { display: none; }
  }
`,$=l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  letter-spacing: 0.04em;
`,k=l().div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,v=l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainText};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,M=l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({up:e})=>e?s.w4.colors.success:s.w4.colors.danger};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,F=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
`,S=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 10px 0 6px;
`,A=l().div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.5;
`,C=l().a`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.accent};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${s.w4.colors.accentHover};
    text-decoration: underline;
  }
`,_=l().svg`
  display: block;
`;function z({width:e=70,height:t=22}){return(0,n.jsx)(_,{width:e,height:t})}function T(e){return e>=1e3?e.toLocaleString("en-US",{maximumFractionDigits:0}):e>=1?e.toFixed(2):e.toFixed(4)}function L({data:e,color:t,width:o=70,height:i=22}){if(!e||e.length<2)return(0,n.jsx)(_,{width:o,height:i});let r=Math.min(...e),l=Math.max(...e)-r||1,a=e.map((t,n)=>{let a=n/(e.length-1)*o,s=i-(t-r)/l*(i-2)-1;return`${a.toFixed(1)},${s.toFixed(1)}`}).join(" ");return(0,n.jsx)(_,{width:o,height:i,children:(0,n.jsx)("polyline",{points:a,fill:"none",stroke:t,strokeWidth:"1.25",strokeLinejoin:"round",strokeLinecap:"round"})})}function N({symbol:e,quote:t,delay:o}){let i=t.dp>=0;return(0,n.jsxs)(j,{delay:o,children:[(0,n.jsx)($,{children:e}),(0,n.jsx)(k,{children:f[e]??e}),(0,n.jsx)(z,{}),(0,n.jsxs)(v,{children:["$",T(t.c)]}),(0,n.jsxs)(M,{up:i,children:[i?"↗":"↘"," ",Math.abs(t.dp).toFixed(2),"%"]})]})}function D({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>(0,p.Nx)(t,m.A),[t]),{rows:r,failed:l}=(0,d.useCoinsMarkets)({ids:x,includeSparkline:!0,priceChangePercentage:"24h",cacheKey:"bolsa-markets"}),{quotes:a,hasKey:f,loading:g}=(0,d.useFinnhubQuotes)({symbols:u}),[_,z]=(0,i.useState)(null);(0,i.useEffect)(()=>{r&&z(Date.now())},[r]);let G=(0,i.useMemo)(()=>{if(!_)return"";let e=Math.round((Date.now()-_)/6e4);return e<1?o("time.justNow"):o("time.mAgo",{n:e})},[_,o]);if(!r&&l)return(0,n.jsx)(c.rl,{title:o("bolsa.title"),accentColor:h.A.accentColor,errorLabel:o("widget.error.label"),error:o("bolsa.error"),children:null});if(!r)return(0,n.jsx)(c.rl,{title:o("bolsa.title"),accentColor:h.A.accentColor,children:(0,n.jsx)(F,{children:o("bolsa.empty")})});let O=u.map(e=>({sym:e,quote:a[e]??null})).filter(({quote:e})=>null!==e);return(0,n.jsx)(c.rl,{title:o("bolsa.title"),accessory:G?(0,n.jsx)(y,{children:o("bolsa.updated",{age:G})}):void 0,accentColor:h.A.accentColor,children:(0,n.jsxs)(w,{children:[(0,n.jsx)(b,{children:o("bolsa.stocks.title")}),f||g?f&&0===O.length&&!g?null:O.map(({sym:e,quote:t},o)=>(0,n.jsx)(N,{symbol:e,quote:t,delay:o},e)):(0,n.jsxs)(S,{children:[(0,n.jsx)(A,{children:o("bolsa.stocks.noKey")}),(0,n.jsxs)(C,{href:"#/settings",onClick:e=>{e.preventDefault(),window.location.hash="#/settings"},children:[o("bolsa.stocks.settingsLink")," →"]})]}),(0,n.jsx)(b,{children:o("bolsa.crypto.title")}),r.map((e,t)=>{let o=e.price_change_percentage_24h>=0,i=o?s.w4.colors.success:s.w4.colors.danger,r=e.sparkline_in_7d?.price??[];return(0,n.jsxs)(j,{delay:t,children:[(0,n.jsx)($,{children:e.symbol.toUpperCase()}),(0,n.jsx)(k,{children:e.name}),(0,n.jsx)(L,{data:r,color:i}),(0,n.jsxs)(v,{children:["$",T(e.current_price)]}),(0,n.jsxs)(M,{up:o,children:[o?"↗":"↘"," ",Math.abs(e.price_change_percentage_24h).toFixed(2),"%"]})]},e.id)})]})})}}}]);