"use strict";(self.webpackChunk_atlantis_devhub=self.webpackChunk_atlantis_devhub||[]).push([[188],{188(e,i,d){var a=d(7359),t=d(8997),r=d(3233),s=d(9391),n=d(5910),l=d(9151),c=d(1202),o=d(5119),h=d(5723);const u=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"package-radar",name:"Package Radar",icon:"package"},{id:"community-feed",name:"Community Feed",icon:"users"},{id:"dev-pulse",name:"Dev Pulse",icon:"activity"},{id:"tech-articles",name:"Tech Articles",icon:"book-open"}]}],g=r.default.div`
  padding: ${s.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,p=r.default.section`
  scroll-margin-top: ${s.w4.spacing.lg};
`,m=r.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${s.w4.spacing.xl};

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,x=r.default.div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
`;function b({topBarRight:e}){const[i,d]=(0,a.useState)(null),t=(0,a.useCallback)(e=>{d(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),r=(0,h.jsx)(s.CD,{entries:u,activeId:i,onSelect:t});return(0,h.jsx)(s.PE,{title:"DevHub",sidebar:r,activeId:i,topBarRight:e,children:(0,h.jsxs)(g,{children:[(0,h.jsx)(p,{id:"package-radar",children:(0,h.jsx)(x,{children:(0,h.jsx)(n.A,{})})}),(0,h.jsxs)(m,{children:[(0,h.jsx)(p,{id:"community-feed",children:(0,h.jsx)(x,{style:{height:"100%"},children:(0,h.jsx)(l.A,{})})}),(0,h.jsx)(p,{id:"dev-pulse",children:(0,h.jsx)(x,{style:{height:"100%"},children:(0,h.jsx)(c.A,{})})})]}),(0,h.jsx)(p,{id:"tech-articles",children:(0,h.jsx)(x,{children:(0,h.jsx)(o.A,{})})})]})})}const f=document.getElementById("root");if(!f)throw new Error("Root element #root not found");(0,t.H)(f).render((0,h.jsx)(b,{}))},8997(e,i,d){var a=d(8991);i.H=a.createRoot,a.hydrateRoot}}]);
//# sourceMappingURL=188.b9cd980154843444f71f.js.map