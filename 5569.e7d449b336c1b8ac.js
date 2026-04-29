"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["5569"],{20120(e,t,o){o.d(t,{BolsaWidget:()=>L});var n=o(65723),i=o(37991),a=o(36859),r=o.n(a),l=o(72799),s=o(6063),c=o(63236),d=o(78856),p=o(28170),m=o(98975),h=o(8740),x=o(64443);let f=["bitcoin","ethereum","solana","binancecoin","cardano","dogecoin"],u=["AAPL","MSFT","GOOGL","NVDA","TSLA"],g={AAPL:"Apple",MSFT:"Microsoft",GOOGL:"Alphabet",NVDA:"NVIDIA",TSLA:"Tesla"},y=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=r().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,b=r().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,j=r().div`
  font-size: 11px;
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
  /* Sym | Name | Sparkline | Price | Change. Sparkline gets the flex space and
   * may shrink to 0; the four data cells size to content with right caps so
   * a column ≈ 380px (the home dashboard's narrowest sm slot) doesn't truncate
   * the percentage tail. */
  grid-template-columns: 44px minmax(0, 0.8fr) minmax(0, 1fr) minmax(0, auto) minmax(0, auto);
  gap: 8px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  animation: ${y} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
  min-width: 0;

  &:last-child { border-bottom: none; }

  /* Narrow cells: drop the Name column entirely. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 40px minmax(0, 1fr) minmax(0, auto) minmax(0, auto);
    gap: 6px;

    > :nth-of-type(2) { display: none; }
  }
`,v=r().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  letter-spacing: 0.04em;
`,k=r().div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=r().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainText};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,S=r().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({up:e})=>e?s.w4.colors.success:s.w4.colors.danger};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,A=r().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
`,F=r().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 10px 0 6px;
`,C=r().div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.5;
`,_=r().a`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.accent};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${s.w4.colors.accentHover};
    text-decoration: underline;
  }
`;function z(e){return e>=1e3?e.toLocaleString("en-US",{maximumFractionDigits:0}):e>=1?e.toFixed(2):e.toFixed(4)}function T({symbol:e,quote:t,delay:o}){let i=t.dp>=0;return(0,n.jsxs)($,{delay:o,children:[(0,n.jsx)(v,{children:e}),(0,n.jsx)(k,{children:g[e]??e}),(0,n.jsx)(x.OW,{points:[],width:70,height:22}),(0,n.jsxs)(M,{children:["$",z(t.c)]}),(0,n.jsxs)(S,{up:i,children:[i?"↗":"↘"," ",Math.abs(t.dp).toFixed(2),"%"]})]})}function L({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>(0,p.Nx)(t,m.A),[t]),{rows:a,failed:r}=(0,d.useCoinsMarkets)({ids:f,includeSparkline:!0,priceChangePercentage:"24h",cacheKey:"bolsa-markets"}),{quotes:l,hasKey:g,loading:y}=(0,d.useFinnhubQuotes)({symbols:u}),[N,D]=(0,i.useState)(null);(0,i.useEffect)(()=>{a&&D(Date.now())},[a]);let O=(0,i.useMemo)(()=>{if(!N)return"";let e=Math.round((Date.now()-N)/6e4);return e<1?o("time.justNow"):o("time.mAgo",{n:e})},[N,o]);if(!a&&r)return(0,n.jsx)(c.rl,{title:o("bolsa.title"),accentColor:h.A.accentColor,errorLabel:o("widget.error.label"),error:o("bolsa.error"),children:null});if(!a)return(0,n.jsx)(c.rl,{title:o("bolsa.title"),accentColor:h.A.accentColor,children:(0,n.jsx)(A,{children:o("bolsa.empty")})});let G=u.map(e=>({sym:e,quote:l[e]??null})).filter(({quote:e})=>null!==e);return(0,n.jsx)(c.rl,{title:o("bolsa.title"),accessory:O?(0,n.jsx)(w,{children:o("bolsa.updated",{age:O})}):void 0,accentColor:h.A.accentColor,children:(0,n.jsxs)(b,{children:[(0,n.jsx)(j,{children:o("bolsa.stocks.title")}),g||y?g&&0===G.length&&!y?null:G.map(({sym:e,quote:t},o)=>(0,n.jsx)(T,{symbol:e,quote:t,delay:o},e)):(0,n.jsxs)(F,{children:[(0,n.jsx)(C,{children:o("bolsa.stocks.noKey")}),(0,n.jsxs)(_,{href:"#/settings",onClick:e=>{e.preventDefault(),window.location.hash="#/settings"},children:[o("bolsa.stocks.settingsLink")," →"]})]}),(0,n.jsx)(j,{children:o("bolsa.crypto.title")}),a.map((e,t)=>{let o=e.price_change_percentage_24h>=0,i=o?s.w4.colors.success:s.w4.colors.danger,a=e.sparkline_in_7d?.price??[];return(0,n.jsxs)($,{delay:t,children:[(0,n.jsx)(v,{children:e.symbol.toUpperCase()}),(0,n.jsx)(k,{children:e.name}),(0,n.jsx)(x.OW,{points:a,accent:i,width:70,height:22}),(0,n.jsxs)(M,{children:["$",z(e.current_price)]}),(0,n.jsxs)(S,{up:o,children:[o?"↗":"↘"," ",Math.abs(e.price_change_percentage_24h).toFixed(2),"%"]})]},e.id)})]})})}}}]);