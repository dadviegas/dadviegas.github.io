"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([["362"],{3935(e,i,r){r.r(i),r.d(i,{default:()=>$});var n=r(5723),o=r(7991),s=r(6859),a=r.n(s),d=r(3930),l=r(9522),c=r(6104),t=r(5855),x=r(5323),u=r(9855),h=r(8006);let g=[{id:"markets",name:"Markets",icon:"activity",children:[{id:"overview",name:"Overview",icon:"layout-grid"},{id:"americas",name:"Americas",icon:"globe"},{id:"europe",name:"Europe",icon:"globe"},{id:"asia",name:"Asia Pacific",icon:"globe"}]},{id:"analysis",name:"Analysis",icon:"bar-chart-2",children:[{id:"sectors",name:"Sectors",icon:"layers"},{id:"calendar",name:"Good/Bad Days",icon:"calendar"}]}],p=a().div`
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
`;function $({topBarRight:e}){let[i,r]=(0,o.useState)(null),s=[...new Set([...l.rb,...l.zR])],{quotes:a,loading:A,error:S,hasKey:q}=(0,l.Rq)(s,3e5),z=(0,o.useCallback)(e=>{r(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),C=(0,n.jsx)(d.CD,{entries:g,activeId:i,onSelect:z}),I=!1===q;return(0,n.jsx)(d.PE,{title:"StockPulse",sidebar:C,activeId:i,topBarRight:e,children:(0,n.jsxs)(p,{children:[I&&(0,n.jsxs)(m,{children:[(0,n.jsx)(f,{children:(0,n.jsx)(h.A,{size:18})}),(0,n.jsxs)(j,{children:[(0,n.jsx)(k,{children:"Finnhub API key required"}),(0,n.jsx)(v,{children:"StockPulse uses Finnhub for real-time quotes. Add your free key in Settings."}),(0,n.jsx)(y,{href:"https://finnhub.io/dashboard",target:"_blank",rel:"noopener noreferrer",children:"Get a free key at finnhub.io →"}),(0,n.jsx)(y,{onClick:()=>{window.location.hash="#/settings"},children:"Open Settings →"})]})]}),(0,n.jsx)(b,{id:"overview",children:(0,n.jsx)(w,{children:(0,n.jsx)(c.A,{quotes:a,loading:A,error:I?"no-key":S})})}),l.ij.map(e=>(0,n.jsx)(b,{id:e.id,children:(0,n.jsx)(w,{children:(0,n.jsx)(t.A,{region:e,quotes:a,loading:A})})},e.id)),(0,n.jsx)(b,{id:"sectors",children:(0,n.jsx)(w,{children:(0,n.jsx)(x.A,{quotes:a,loading:A})})}),(0,n.jsx)(b,{id:"calendar",children:(0,n.jsx)(w,{children:(0,n.jsx)(u.A,{})})})]})})}}}]);