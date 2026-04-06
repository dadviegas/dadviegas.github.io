"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([[188],{188(e,i,o){var r=o(359),a=o(997),s=o(233),n=o(365),d=o(447),t=o(11),c=o(74),l=o(143),u=o(985),g=o(723);const h=[{id:"markets",name:"Markets",icon:"activity",children:[{id:"overview",name:"Overview",icon:"layout-grid"},{id:"americas",name:"Americas",icon:"globe"},{id:"europe",name:"Europe",icon:"globe"},{id:"asia",name:"Asia Pacific",icon:"globe"}]},{id:"analysis",name:"Analysis",icon:"bar-chart-2",children:[{id:"sectors",name:"Sectors",icon:"layers"},{id:"calendar",name:"Good/Bad Days",icon:"calendar"}]}],x=s.default.div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,m=s.default.section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,p=s.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`;function j({topBarRight:e}){const[i,o]=(0,r.useState)(null),a=[...d.rb,...d.zR],{quotes:s,loading:j,error:w}=(0,d.Rq)(a,144e5),b=(0,r.useCallback)(e=>{o(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),v=(0,g.jsx)(n.CD,{entries:h,activeId:i,onSelect:b});return(0,g.jsx)(n.PE,{title:"StockPulse",sidebar:v,activeId:i,topBarRight:e,children:(0,g.jsxs)(x,{children:[(0,g.jsx)(m,{id:"overview",children:(0,g.jsx)(p,{children:(0,g.jsx)(t.A,{quotes:s,loading:j,error:w})})}),d.ij.map(e=>(0,g.jsx)(m,{id:e.id,children:(0,g.jsx)(p,{children:(0,g.jsx)(c.A,{region:e,quotes:s,loading:j})})},e.id)),(0,g.jsx)(m,{id:"sectors",children:(0,g.jsx)(p,{children:(0,g.jsx)(l.A,{quotes:s,loading:j})})}),(0,g.jsx)(m,{id:"calendar",children:(0,g.jsx)(p,{children:(0,g.jsx)(u.A,{})})})]})})}const w=document.getElementById("root");if(!w)throw new Error("Root element #root not found");(0,a.H)(w).render((0,g.jsx)(j,{}))},997(e,i,o){var r=o(991);i.H=r.createRoot,r.hydrateRoot}}]);
//# sourceMappingURL=188.5a100d678e3b95501137.js.map