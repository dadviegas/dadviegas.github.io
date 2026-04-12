"use strict";(self.webpackChunk_atlantis_citypulse=self.webpackChunk_atlantis_citypulse||[]).push([[188],{188(e,i,t){var a=t(7359),r=t(8997),n=t(3233),o=t(4079),l=t(756),d=t(8447),s=t(5876),c=t(3550),p=t(4841),h=t(8253),u=t(3010),x=t(5723);const g=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"overview",name:"City Overview",icon:"map-pin"},{id:"weather",name:"Weather Timeline",icon:"thermometer"},{id:"air-quality",name:"Air Quality",icon:"wind"},{id:"compare",name:"Compare Cities",icon:"bar-chart-2"}]}],m=n.default.div`
  padding: ${o.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,w=n.default.section`
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
`;function b({topBarRight:e}){const[i,t]=(0,a.useState)(null),[r,n]=(0,a.useState)(l.Mq[0]),{snapshot:b,weather:j,airQuality:v,loading:C,error:$,retry:k}=(0,d.n)(r),R=(0,a.useCallback)(e=>{t(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),A=(0,x.jsx)(o.CD,{entries:g,activeId:i,onSelect:R});return(0,x.jsx)(o.PE,{title:"CityPulse",sidebar:A,activeId:i,topBarRight:e,children:(0,x.jsxs)(m,{children:[(0,x.jsxs)(w,{id:"overview",children:[(0,x.jsxs)(f,{children:["City Overview",(0,x.jsx)(s.A,{value:r.id,onChange:n})]}),$?(0,x.jsxs)("div",{style:{padding:"24px",color:"#8b949e",fontSize:14,display:"flex",flexDirection:"column",alignItems:"flex-start",gap:12},children:["Weather data unavailable — the API may be temporarily down.",(0,x.jsx)("button",{onClick:k,style:{padding:"6px 16px",cursor:"pointer",background:"none",border:"1px solid #30363d",borderRadius:6,color:"#e6edf3",fontFamily:"inherit",fontSize:13},children:"Retry"})]}):(0,x.jsx)(c.A,{snapshot:b,loading:C})]}),(0,x.jsx)(w,{id:"weather",children:(0,x.jsx)(y,{children:(0,x.jsx)(p.A,{weather:j,loading:C})})}),(0,x.jsx)(w,{id:"air-quality",children:(0,x.jsx)(y,{children:(0,x.jsx)(h.A,{airQuality:v,loading:C})})}),(0,x.jsx)(w,{id:"compare",children:(0,x.jsx)(y,{children:(0,x.jsx)(u.A,{})})})]})})}const j=document.getElementById("root");if(!j)throw new Error("Root element #root not found");(0,r.H)(j).render((0,x.jsx)(b,{}))},8997(e,i,t){var a=t(8991);i.H=a.createRoot,a.hydrateRoot}}]);
//# sourceMappingURL=188.e5ec243d4befbdedc30c.js.map