"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([[36],{36(e,i,a){a.r(i),a.d(i,{default:()=>m});var s=a(359),r=a(233),d=a(365),n=a(447),o=a(11),l=a(74),c=a(143),t=a(985),u=a(723);const g=[{id:"markets",name:"Markets",icon:"activity",children:[{id:"overview",name:"Overview",icon:"layout-grid"},{id:"americas",name:"Americas",icon:"globe"},{id:"europe",name:"Europe",icon:"globe"},{id:"asia",name:"Asia Pacific",icon:"globe"}]},{id:"analysis",name:"Analysis",icon:"bar-chart-2",children:[{id:"sectors",name:"Sectors",icon:"layers"},{id:"calendar",name:"Good/Bad Days",icon:"calendar"}]}],h=r.default.div`
  padding: ${d.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,x=r.default.section`
  scroll-margin-top: ${d.w4.spacing.lg};
`,p=r.default.div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
`;function m({topBarRight:e}){const[i,a]=(0,s.useState)(null),r=[...n.rb,...n.zR],{quotes:m,loading:b,error:j}=(0,n.Rq)(r,144e5),w=(0,s.useCallback)(e=>{a(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),v=(0,u.jsx)(d.CD,{entries:g,activeId:i,onSelect:w});return(0,u.jsx)(d.PE,{title:"StockPulse",sidebar:v,activeId:i,topBarRight:e,children:(0,u.jsxs)(h,{children:[(0,u.jsx)(x,{id:"overview",children:(0,u.jsx)(p,{children:(0,u.jsx)(o.A,{quotes:m,loading:b,error:j})})}),n.ij.map(e=>(0,u.jsx)(x,{id:e.id,children:(0,u.jsx)(p,{children:(0,u.jsx)(l.A,{region:e,quotes:m,loading:b})})},e.id)),(0,u.jsx)(x,{id:"sectors",children:(0,u.jsx)(p,{children:(0,u.jsx)(c.A,{quotes:m,loading:b})})}),(0,u.jsx)(x,{id:"calendar",children:(0,u.jsx)(p,{children:(0,u.jsx)(t.A,{})})})]})})}}}]);
//# sourceMappingURL=36.1ce3ede74cadf537133f.js.map