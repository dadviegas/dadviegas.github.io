"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[188],{188(e,i,d){var n=d(7359),t=d(8997),r=d(3233),a=d(4191),s=d(69),o=d(3874),l=d(7018),c=d(7401),h=d(3019),p=d(5723);const x=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"live-pulse",name:"Live Pulse",icon:"zap"},{id:"ai-radar",name:"AI Radar",icon:"bot"},{id:"today-in-tech",name:"Today in Tech",icon:"compass"},{id:"experiment-zone",name:"Experiment Zone",icon:"lightbulb"},{id:"npm-trends",name:"npm Pulse",icon:"package"}]}],m=r.default.div`
  padding: ${a.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${a.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,u=r.default.section`
  scroll-margin-top: ${a.w4.spacing.lg};
`,g=r.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${a.w4.spacing.xl};

  @media (max-width: ${a.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,b=r.default.div`
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.lg};
  padding: ${a.w4.spacing.lg};
`;function j({topBarRight:e}){const[i,d]=(0,n.useState)(null),t=(0,n.useCallback)(e=>{d(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),r=(0,p.jsx)(a.CD,{entries:x,activeId:i,onSelect:t});return(0,p.jsx)(a.PE,{title:"TechScope",sidebar:r,activeId:i,topBarRight:e,children:(0,p.jsxs)(m,{children:[(0,p.jsx)(u,{id:"live-pulse",children:(0,p.jsx)(b,{children:(0,p.jsx)(s.A,{})})}),(0,p.jsxs)(g,{children:[(0,p.jsx)(u,{id:"ai-radar",children:(0,p.jsx)(b,{style:{height:"100%"},children:(0,p.jsx)(o.A,{})})}),(0,p.jsx)(u,{id:"today-in-tech",children:(0,p.jsx)(b,{style:{height:"100%"},children:(0,p.jsx)(l.A,{})})})]}),(0,p.jsx)(u,{id:"experiment-zone",children:(0,p.jsx)(b,{children:(0,p.jsx)(c.A,{})})}),(0,p.jsx)(u,{id:"npm-trends",children:(0,p.jsx)(b,{children:(0,p.jsx)(h.A,{})})})]})})}const w=document.getElementById("root");if(!w)throw new Error("Root element #root not found");(0,t.H)(w).render((0,p.jsx)(j,{}))},8997(e,i,d){var n=d(8991);i.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.5ac93eec789a3a928552.js.map