"use strict";(self.webpackChunk_atlantis_citypulse=self.webpackChunk_atlantis_citypulse||[]).push([[188],{188(e,i,t){var r=t(7359),n=t(8997),a=t(3233),o=t(6879),s=t(756),l=t(8447),d=t(5876),c=t(3550),h=t(4841),p=t(8253),x=t(3010),u=t(5723);const m=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"overview",name:"City Overview",icon:"map-pin"},{id:"weather",name:"Weather Timeline",icon:"thermometer"},{id:"air-quality",name:"Air Quality",icon:"wind"},{id:"compare",name:"Compare Cities",icon:"bar-chart-2"}]}],y=a.default.h2`
  font-size: ${o.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${o.w4.colors.mainText};
  margin-bottom: ${o.w4.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${o.w4.spacing.sm};
`;function w({topBarRight:e}){const[i,t]=(0,r.useState)(s.Mq[0]),{snapshot:n,weather:a,airQuality:w,loading:g,error:f,retry:j}=(0,l.n)(i);return(0,u.jsx)(o.NI,{title:"CityPulse",sections:m,topBarRight:e,children:(0,u.jsxs)(o.wi,{children:[(0,u.jsxs)(o.KW,{id:"overview",children:[(0,u.jsxs)(y,{children:["City Overview",(0,u.jsx)(d.A,{value:i.id,onChange:t})]}),f?(0,u.jsxs)("div",{style:{padding:"24px",color:"#8b949e",fontSize:14,display:"flex",flexDirection:"column",alignItems:"flex-start",gap:12},children:["Weather data unavailable — the API may be temporarily down.",(0,u.jsx)("button",{onClick:j,style:{padding:"6px 16px",cursor:"pointer",background:"none",border:"1px solid #30363d",borderRadius:6,color:"#e6edf3",fontFamily:"inherit",fontSize:13},children:"Retry"})]}):(0,u.jsx)(c.A,{snapshot:n,loading:g})]}),(0,u.jsx)(o.KW,{id:"weather",children:(0,u.jsx)(o.PH,{children:(0,u.jsx)(h.A,{weather:a,loading:g})})}),(0,u.jsx)(o.KW,{id:"air-quality",children:(0,u.jsx)(o.PH,{children:(0,u.jsx)(p.A,{airQuality:w,loading:g})})}),(0,u.jsx)(o.KW,{id:"compare",children:(0,u.jsx)(o.PH,{children:(0,u.jsx)(x.A,{})})})]})})}const g=document.getElementById("root");if(!g)throw new Error("Root element #root not found");(0,n.H)(g).render((0,u.jsx)(w,{}))},8997(e,i,t){var r=t(8991);i.H=r.createRoot,r.hydrateRoot}}]);
//# sourceMappingURL=188.5b06fbd91f6ed3ad95bb.js.map