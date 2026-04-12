"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[188],{188(e,i,t){var d=t(7359),a=t(8997),n=t(3233),r=t(4079),o=t(69),s=t(3874),l=t(7018),c=t(7401),h=t(5723);const p=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"live-pulse",name:"Live Pulse",icon:"zap"},{id:"ai-radar",name:"AI Radar",icon:"bot"},{id:"today-in-tech",name:"Today in Tech",icon:"compass"},{id:"experiment-zone",name:"Experiment Zone",icon:"lightbulb"}]}],x=n.default.div`
  padding: ${r.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,u=n.default.section`
  scroll-margin-top: ${r.w4.spacing.lg};
`,g=n.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.xl};

  @media (max-width: ${r.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,m=n.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.lg};
`;function b({topBarRight:e}){const[i,t]=(0,d.useState)(null),a=(0,d.useCallback)(e=>{t(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),n=(0,h.jsx)(r.CD,{entries:p,activeId:i,onSelect:a});return(0,h.jsx)(r.PE,{title:"TechScope",sidebar:n,activeId:i,topBarRight:e,children:(0,h.jsxs)(x,{children:[(0,h.jsx)(u,{id:"live-pulse",children:(0,h.jsx)(m,{children:(0,h.jsx)(o.A,{})})}),(0,h.jsxs)(g,{children:[(0,h.jsx)(u,{id:"ai-radar",children:(0,h.jsx)(m,{style:{height:"100%"},children:(0,h.jsx)(s.A,{})})}),(0,h.jsx)(u,{id:"today-in-tech",children:(0,h.jsx)(m,{style:{height:"100%"},children:(0,h.jsx)(l.A,{})})})]}),(0,h.jsx)(u,{id:"experiment-zone",children:(0,h.jsx)(m,{children:(0,h.jsx)(c.A,{})})})]})})}const j=document.getElementById("root");if(!j)throw new Error("Root element #root not found");(0,a.H)(j).render((0,h.jsx)(b,{}))},8997(e,i,t){var d=t(8991);i.H=d.createRoot,d.hydrateRoot}}]);
//# sourceMappingURL=188.6cc5b647c2da9dec9a64.js.map