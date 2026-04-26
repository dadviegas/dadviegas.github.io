"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([["512"],{8997(e,i,r){var o=r(2727);i.createRoot=o.createRoot,o.hydrateRoot},3611(e,i,r){var o=r(5723),n=r(7991),s=r(8997),t=r(6859),a=r.n(t),d=r(6063),c=r(997),l=r(9522),x=r(6104),h=r(5855),u=r(5323),g=r(9855);let p=[{id:"markets",name:"Markets",icon:"activity",children:[{id:"overview",name:"Overview",icon:"layout-grid"},{id:"americas",name:"Americas",icon:"globe"},{id:"europe",name:"Europe",icon:"globe"},{id:"asia",name:"Asia Pacific",icon:"globe"}]},{id:"analysis",name:"Analysis",icon:"bar-chart-2",children:[{id:"sectors",name:"Sectors",icon:"layers"},{id:"calendar",name:"Good/Bad Days",icon:"calendar"}]}],b=a().div`
  padding: ${d.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,m=a().section`
  scroll-margin-top: ${d.w4.spacing.lg};
`,w=a().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
`,f=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.md};
  padding: ${d.w4.spacing.lg};
  background: rgba(88, 166, 255, 0.06);
  border: 1px solid rgba(88, 166, 255, 0.2);
  border-radius: ${d.w4.borderRadius.lg};
  color: ${d.w4.colors.mainText};
  font-size: 14px;
`,j=a().div`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(88, 166, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.accent};
`,k=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,v=a().div`
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,y=a().div`
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
`,$=a().a`
  color: ${d.w4.colors.accent};
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,R=document.getElementById("root");if(!R)throw Error("Root element #root not found");(0,s.createRoot)(R).render((0,o.jsx)(function({topBarRight:e}){let[i,r]=(0,n.useState)(null),s=[...new Set([...l.rb,...l.zR])],{quotes:t,loading:a,error:d,hasKey:R}=(0,l.Rq)(s,3e5),A=(0,n.useCallback)(e=>{r(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),S=(0,o.jsx)(c.CD,{entries:p,activeId:i,onSelect:A}),I=!1===R;return(0,o.jsx)(c.PE,{title:"StockPulse",sidebar:S,activeId:i,topBarRight:e,children:(0,o.jsxs)(b,{children:[I&&(0,o.jsxs)(f,{children:[(0,o.jsx)(j,{children:(0,o.jsx)(c.In,{name:"key",size:18})}),(0,o.jsxs)(k,{children:[(0,o.jsx)(v,{children:"Finnhub API key required"}),(0,o.jsx)(y,{children:"StockPulse uses Finnhub for real-time quotes. Add your free key in Settings."}),(0,o.jsx)($,{href:"https://finnhub.io/dashboard",target:"_blank",rel:"noopener noreferrer",children:"Get a free key at finnhub.io →"}),(0,o.jsx)($,{onClick:()=>{window.location.hash="#/settings"},children:"Open Settings →"})]})]}),(0,o.jsx)(m,{id:"overview",children:(0,o.jsx)(w,{children:(0,o.jsx)(x.A,{quotes:t,loading:a,error:I?"no-key":d})})}),l.ij.map(e=>(0,o.jsx)(m,{id:e.id,children:(0,o.jsx)(w,{children:(0,o.jsx)(h.A,{region:e,quotes:t,loading:a})})},e.id)),(0,o.jsx)(m,{id:"sectors",children:(0,o.jsx)(w,{children:(0,o.jsx)(u.A,{quotes:t,loading:a})})}),(0,o.jsx)(m,{id:"calendar",children:(0,o.jsx)(w,{children:(0,o.jsx)(g.A,{})})})]})})},{}))}}]);