"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[36],{6036(e,i,d){d.r(i),d.d(i,{default:()=>b});var n=d(7359),a=d(3233),s=d(4079),l=d(69),r=d(3874),t=d(7018),c=d(7401),o=d(3019),h=d(5723);const p=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"live-pulse",name:"Live Pulse",icon:"zap"},{id:"ai-radar",name:"AI Radar",icon:"bot"},{id:"today-in-tech",name:"Today in Tech",icon:"compass"},{id:"experiment-zone",name:"Experiment Zone",icon:"lightbulb"},{id:"npm-trends",name:"npm Pulse",icon:"package"}]}],x=a.default.div`
  padding: ${s.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,u=a.default.section`
  scroll-margin-top: ${s.w4.spacing.lg};
`,g=a.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${s.w4.spacing.xl};

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,m=a.default.div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
`;function b({topBarRight:e}){const[i,d]=(0,n.useState)(null),a=(0,n.useCallback)(e=>{d(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),b=(0,h.jsx)(s.CD,{entries:p,activeId:i,onSelect:a});return(0,h.jsx)(s.PE,{title:"TechScope",sidebar:b,activeId:i,topBarRight:e,children:(0,h.jsxs)(x,{children:[(0,h.jsx)(u,{id:"live-pulse",children:(0,h.jsx)(m,{children:(0,h.jsx)(l.A,{})})}),(0,h.jsxs)(g,{children:[(0,h.jsx)(u,{id:"ai-radar",children:(0,h.jsx)(m,{style:{height:"100%"},children:(0,h.jsx)(r.A,{})})}),(0,h.jsx)(u,{id:"today-in-tech",children:(0,h.jsx)(m,{style:{height:"100%"},children:(0,h.jsx)(t.A,{})})})]}),(0,h.jsx)(u,{id:"experiment-zone",children:(0,h.jsx)(m,{children:(0,h.jsx)(c.A,{})})}),(0,h.jsx)(u,{id:"npm-trends",children:(0,h.jsx)(m,{children:(0,h.jsx)(o.A,{})})})]})})}}}]);
//# sourceMappingURL=36.128fbd5557791df53afc.js.map