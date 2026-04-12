"use strict";(self.webpackChunk_atlantis_devhub=self.webpackChunk_atlantis_devhub||[]).push([[36],{6036(e,i,d){d.r(i),d.d(i,{default:()=>m});var a=d(7359),s=d(3233),l=d(4079),t=d(5910),r=d(9151),c=d(1202),n=d(5119),o=d(5723);const h=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"package-radar",name:"Package Radar",icon:"package"},{id:"community-feed",name:"Community Feed",icon:"users"},{id:"dev-pulse",name:"Dev Pulse",icon:"activity"},{id:"tech-articles",name:"Tech Articles",icon:"book-open"}]}],u=s.default.div`
  padding: ${l.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,g=s.default.section`
  scroll-margin-top: ${l.w4.spacing.lg};
`,p=s.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.xl};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,x=s.default.div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
`;function m({topBarRight:e}){const[i,d]=(0,a.useState)(null),s=(0,a.useCallback)(e=>{d(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),m=(0,o.jsx)(l.CD,{entries:h,activeId:i,onSelect:s});return(0,o.jsx)(l.PE,{title:"DevHub",sidebar:m,activeId:i,topBarRight:e,children:(0,o.jsxs)(u,{children:[(0,o.jsx)(g,{id:"package-radar",children:(0,o.jsx)(x,{children:(0,o.jsx)(t.A,{})})}),(0,o.jsxs)(p,{children:[(0,o.jsx)(g,{id:"community-feed",children:(0,o.jsx)(x,{style:{height:"100%"},children:(0,o.jsx)(r.A,{})})}),(0,o.jsx)(g,{id:"dev-pulse",children:(0,o.jsx)(x,{style:{height:"100%"},children:(0,o.jsx)(c.A,{})})})]}),(0,o.jsx)(g,{id:"tech-articles",children:(0,o.jsx)(x,{children:(0,o.jsx)(n.A,{})})})]})})}}}]);
//# sourceMappingURL=36.aa1aed8d362b052bc0a6.js.map