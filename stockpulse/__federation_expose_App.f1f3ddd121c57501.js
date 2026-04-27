"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([["362"],{3935(e,i,n){n.r(i),n.d(i,{default:()=>$});var r=n(5723),o=n(7991),s=n(6859),a=n.n(s),d=n(6063),l=n(132),c=n(9522),t=n(6104),x=n(5855),u=n(5323),h=n(9855);let g=[{id:"markets",name:"Markets",icon:"activity",children:[{id:"overview",name:"Overview",icon:"layout-grid"},{id:"americas",name:"Americas",icon:"globe"},{id:"europe",name:"Europe",icon:"globe"},{id:"asia",name:"Asia Pacific",icon:"globe"}]},{id:"analysis",name:"Analysis",icon:"bar-chart-2",children:[{id:"sectors",name:"Sectors",icon:"layers"},{id:"calendar",name:"Good/Bad Days",icon:"calendar"}]}],p=a().div`
  padding: ${d.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,b=a().section`
  scroll-margin-top: ${d.w4.spacing.lg};
`,w=a().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
`,m=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.md};
  padding: ${d.w4.spacing.lg};
  background: rgba(88, 166, 255, 0.06);
  border: 1px solid rgba(88, 166, 255, 0.2);
  border-radius: ${d.w4.borderRadius.lg};
  color: ${d.w4.colors.mainText};
  font-size: 14px;
`,f=a().div`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(88, 166, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.accent};
`,j=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,k=a().div`
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,v=a().div`
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
`,y=a().a`
  color: ${d.w4.colors.accent};
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`;function $({topBarRight:e}){let[i,n]=(0,o.useState)(null),s=[...new Set([...c.rb,...c.zR])],{quotes:a,loading:d,error:A,hasKey:S}=(0,c.Rq)(s,3e5),q=(0,o.useCallback)(e=>{n(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),I=(0,r.jsx)(l.CD,{entries:g,activeId:i,onSelect:q}),z=!1===S;return(0,r.jsx)(l.PE,{title:"StockPulse",sidebar:I,activeId:i,topBarRight:e,children:(0,r.jsxs)(p,{children:[z&&(0,r.jsxs)(m,{children:[(0,r.jsx)(f,{children:(0,r.jsx)(l.In,{name:"key",size:18})}),(0,r.jsxs)(j,{children:[(0,r.jsx)(k,{children:"Finnhub API key required"}),(0,r.jsx)(v,{children:"StockPulse uses Finnhub for real-time quotes. Add your free key in Settings."}),(0,r.jsx)(y,{href:"https://finnhub.io/dashboard",target:"_blank",rel:"noopener noreferrer",children:"Get a free key at finnhub.io →"}),(0,r.jsx)(y,{onClick:()=>{window.location.hash="#/settings"},children:"Open Settings →"})]})]}),(0,r.jsx)(b,{id:"overview",children:(0,r.jsx)(w,{children:(0,r.jsx)(t.A,{quotes:a,loading:d,error:z?"no-key":A})})}),c.ij.map(e=>(0,r.jsx)(b,{id:e.id,children:(0,r.jsx)(w,{children:(0,r.jsx)(x.A,{region:e,quotes:a,loading:d})})},e.id)),(0,r.jsx)(b,{id:"sectors",children:(0,r.jsx)(w,{children:(0,r.jsx)(u.A,{quotes:a,loading:d})})}),(0,r.jsx)(b,{id:"calendar",children:(0,r.jsx)(w,{children:(0,r.jsx)(h.A,{})})})]})})}}}]);