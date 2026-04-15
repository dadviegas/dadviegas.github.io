"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[188],{188(e,i,n){var t=n(7359),d=n(8997),a=n(3233),r=n(4191),s=n(894),o=n(69),l=n(3874),c=n(7018),h=n(7401),p=n(3019),x=n(8887),m=n(5723);const u=a.default.div`
  padding: ${r.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,g=a.default.section`
  scroll-margin-top: ${r.w4.spacing.lg};
`,b=a.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.xl};

  @media (max-width: ${r.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,j=a.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.lg};
`;function w({topBarRight:e}){const[i,n]=(0,t.useState)(null),[d]=(0,s.Ym)(),a=(0,t.useMemo)(()=>(0,s.Nx)(d,x.A),[d]),w=(0,t.useMemo)(()=>[{id:"dashboard",name:a("nav.dashboard"),icon:"layout-grid",children:[{id:"live-pulse",name:a("nav.livePulse"),icon:"zap"},{id:"ai-radar",name:a("nav.aiRadar"),icon:"bot"},{id:"today-in-tech",name:a("nav.todayInTech"),icon:"compass"},{id:"experiment-zone",name:a("nav.experimentZone"),icon:"lightbulb"},{id:"npm-trends",name:a("nav.npmPulse"),icon:"package"}]}],[a]),v=(0,t.useCallback)(e=>{n(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),f=(0,m.jsx)(r.CD,{entries:w,activeId:i,onSelect:v});return(0,m.jsx)(r.PE,{title:"TechScope",sidebar:f,activeId:i,topBarRight:e,children:(0,m.jsxs)(u,{children:[(0,m.jsx)(g,{id:"live-pulse",children:(0,m.jsx)(j,{children:(0,m.jsx)(o.A,{t:a})})}),(0,m.jsxs)(b,{children:[(0,m.jsx)(g,{id:"ai-radar",children:(0,m.jsx)(j,{style:{height:"100%"},children:(0,m.jsx)(l.A,{t:a})})}),(0,m.jsx)(g,{id:"today-in-tech",children:(0,m.jsx)(j,{style:{height:"100%"},children:(0,m.jsx)(c.A,{t:a})})})]}),(0,m.jsx)(g,{id:"experiment-zone",children:(0,m.jsx)(j,{children:(0,m.jsx)(h.A,{t:a})})}),(0,m.jsx)(g,{id:"npm-trends",children:(0,m.jsx)(j,{children:(0,m.jsx)(p.A,{t:a})})})]})})}const v=document.getElementById("root");if(!v)throw new Error("Root element #root not found");(0,d.H)(v).render((0,m.jsx)(w,{}))},8997(e,i,n){var t=n(8991);i.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.93a6af92641f1e459b98.js.map