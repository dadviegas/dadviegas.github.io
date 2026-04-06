"use strict";(self.webpackChunk_atlantis_citypulse=self.webpackChunk_atlantis_citypulse||[]).push([[36],{36(e,i,a){a.r(i),a.d(i,{default:()=>j});var t=a(359),n=a(233),r=a(365),s=a(756),l=a(447),d=a(876),o=a(596),c=a(841),h=a(253),p=a(10),u=a(723);const g=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"overview",name:"City Overview",icon:"map-pin"},{id:"weather",name:"Weather Timeline",icon:"thermometer"},{id:"air-quality",name:"Air Quality",icon:"wind"},{id:"compare",name:"Compare Cities",icon:"bar-chart-2"}]}],w=n.default.div`
  padding: ${r.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,x=n.default.section`
  scroll-margin-top: ${r.w4.spacing.lg};
`,m=n.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.lg};
`,f=n.default.h2`
  font-size: ${r.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  margin-bottom: ${r.w4.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${r.w4.spacing.sm};
`;function j({topBarRight:e}){const[i,a]=(0,t.useState)(null),[n,j]=(0,t.useState)(s.Mq[0]),{snapshot:y,weather:b,airQuality:v,loading:$}=(0,l.n)(n),C=(0,t.useCallback)(e=>{a(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),k=(0,u.jsx)(r.CD,{entries:g,activeId:i,onSelect:C});return(0,u.jsx)(r.PE,{title:"CityPulse",sidebar:k,activeId:i,topBarRight:e,children:(0,u.jsxs)(w,{children:[(0,u.jsxs)(x,{id:"overview",children:[(0,u.jsxs)(f,{children:["City Overview",(0,u.jsx)(d.A,{value:n.id,onChange:j})]}),(0,u.jsx)(o.A,{snapshot:y,loading:$})]}),(0,u.jsx)(x,{id:"weather",children:(0,u.jsx)(m,{children:(0,u.jsx)(c.A,{weather:b,loading:$})})}),(0,u.jsx)(x,{id:"air-quality",children:(0,u.jsx)(m,{children:(0,u.jsx)(h.A,{airQuality:v,loading:$})})}),(0,u.jsx)(x,{id:"compare",children:(0,u.jsx)(m,{children:(0,u.jsx)(p.A,{})})})]})})}}}]);
//# sourceMappingURL=36.469802be29bf0fcf1200.js.map