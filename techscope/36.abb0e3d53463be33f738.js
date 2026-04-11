"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[36],{6036(e,i,d){d.r(i),d.d(i,{default:()=>m});var a=d(7359),s=d(3233),l=d(906),n=d(69),t=d(3874),r=d(7018),c=d(7401),o=d(5723);const h=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"live-pulse",name:"Live Pulse",icon:"zap"},{id:"ai-radar",name:"AI Radar",icon:"bot"},{id:"today-in-tech",name:"Today in Tech",icon:"compass"},{id:"experiment-zone",name:"Experiment Zone",icon:"lightbulb"}]}],p=s.default.div`
  padding: ${l.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,x=s.default.section`
  scroll-margin-top: ${l.w4.spacing.lg};
`,u=s.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.xl};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,g=s.default.div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
`;function m({topBarRight:e}){const[i,d]=(0,a.useState)(null),s=(0,a.useCallback)(e=>{d(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),m=(0,o.jsx)(l.CD,{entries:h,activeId:i,onSelect:s});return(0,o.jsx)(l.PE,{title:"TechScope",sidebar:m,activeId:i,topBarRight:e,children:(0,o.jsxs)(p,{children:[(0,o.jsx)(x,{id:"live-pulse",children:(0,o.jsx)(g,{children:(0,o.jsx)(n.A,{})})}),(0,o.jsxs)(u,{children:[(0,o.jsx)(x,{id:"ai-radar",children:(0,o.jsx)(g,{style:{height:"100%"},children:(0,o.jsx)(t.A,{})})}),(0,o.jsx)(x,{id:"today-in-tech",children:(0,o.jsx)(g,{style:{height:"100%"},children:(0,o.jsx)(r.A,{})})})]}),(0,o.jsx)(x,{id:"experiment-zone",children:(0,o.jsx)(g,{children:(0,o.jsx)(c.A,{})})})]})})}}}]);
//# sourceMappingURL=36.abb0e3d53463be33f738.js.map