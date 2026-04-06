"use strict";(self.webpackChunk_atlantis_citypulse=self.webpackChunk_atlantis_citypulse||[]).push([[188],{188(e,i,t){var a=t(359),r=t(997),n=t(233),o=t(365),s=t(756),d=t(447),l=t(876),c=t(596),h=t(841),p=t(253),u=t(10),w=t(723);const g=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"overview",name:"City Overview",icon:"map-pin"},{id:"weather",name:"Weather Timeline",icon:"thermometer"},{id:"air-quality",name:"Air Quality",icon:"wind"},{id:"compare",name:"Compare Cities",icon:"bar-chart-2"}]}],m=n.default.div`
  padding: ${o.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,x=n.default.section`
  scroll-margin-top: ${o.w4.spacing.lg};
`,y=n.default.div`
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.lg};
  padding: ${o.w4.spacing.lg};
`,f=n.default.h2`
  font-size: ${o.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${o.w4.colors.mainText};
  margin-bottom: ${o.w4.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${o.w4.spacing.sm};
`;function j({topBarRight:e}){const[i,t]=(0,a.useState)(null),[r,n]=(0,a.useState)(s.Mq[0]),{snapshot:j,weather:b,airQuality:v,loading:$}=(0,d.n)(r),C=(0,a.useCallback)(e=>{t(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),k=(0,w.jsx)(o.CD,{entries:g,activeId:i,onSelect:C});return(0,w.jsx)(o.PE,{title:"CityPulse",sidebar:k,activeId:i,topBarRight:e,children:(0,w.jsxs)(m,{children:[(0,w.jsxs)(x,{id:"overview",children:[(0,w.jsxs)(f,{children:["City Overview",(0,w.jsx)(l.A,{value:r.id,onChange:n})]}),(0,w.jsx)(c.A,{snapshot:j,loading:$})]}),(0,w.jsx)(x,{id:"weather",children:(0,w.jsx)(y,{children:(0,w.jsx)(h.A,{weather:b,loading:$})})}),(0,w.jsx)(x,{id:"air-quality",children:(0,w.jsx)(y,{children:(0,w.jsx)(p.A,{airQuality:v,loading:$})})}),(0,w.jsx)(x,{id:"compare",children:(0,w.jsx)(y,{children:(0,w.jsx)(u.A,{})})})]})})}const b=document.getElementById("root");if(!b)throw new Error("Root element #root not found");(0,r.H)(b).render((0,w.jsx)(j,{}))},997(e,i,t){var a=t(991);i.H=a.createRoot,a.hydrateRoot}}]);
//# sourceMappingURL=188.70893ba3850bc4ff303e.js.map