"use strict";(self.webpackChunk_atlantis_citypulse=self.webpackChunk_atlantis_citypulse||[]).push([[36],{6036(e,i,a){a.r(i),a.d(i,{default:()=>f});var t=a(7359),r=a(3233),n=a(4191),l=a(756),o=a(8447),d=a(5876),s=a(3550),c=a(4841),p=a(8253),h=a(3010),u=a(5723);const x=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"overview",name:"City Overview",icon:"map-pin"},{id:"weather",name:"Weather Timeline",icon:"thermometer"},{id:"air-quality",name:"Air Quality",icon:"wind"},{id:"compare",name:"Compare Cities",icon:"bar-chart-2"}]}],g=r.default.div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,w=r.default.section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,m=r.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,y=r.default.h2`
  font-size: ${n.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  margin-bottom: ${n.w4.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${n.w4.spacing.sm};
`;function f({topBarRight:e}){const[i,a]=(0,t.useState)(null),[r,f]=(0,t.useState)(l.Mq[0]),{snapshot:b,weather:j,airQuality:v,loading:C,error:$,retry:k}=(0,o.n)(r),A=(0,t.useCallback)(e=>{a(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),I=(0,u.jsx)(n.CD,{entries:x,activeId:i,onSelect:A});return(0,u.jsx)(n.PE,{title:"CityPulse",sidebar:I,activeId:i,topBarRight:e,children:(0,u.jsxs)(g,{children:[(0,u.jsxs)(w,{id:"overview",children:[(0,u.jsxs)(y,{children:["City Overview",(0,u.jsx)(d.A,{value:r.id,onChange:f})]}),$?(0,u.jsxs)("div",{style:{padding:"24px",color:"#8b949e",fontSize:14,display:"flex",flexDirection:"column",alignItems:"flex-start",gap:12},children:["Weather data unavailable — the API may be temporarily down.",(0,u.jsx)("button",{onClick:k,style:{padding:"6px 16px",cursor:"pointer",background:"none",border:"1px solid #30363d",borderRadius:6,color:"#e6edf3",fontFamily:"inherit",fontSize:13},children:"Retry"})]}):(0,u.jsx)(s.A,{snapshot:b,loading:C})]}),(0,u.jsx)(w,{id:"weather",children:(0,u.jsx)(m,{children:(0,u.jsx)(c.A,{weather:j,loading:C})})}),(0,u.jsx)(w,{id:"air-quality",children:(0,u.jsx)(m,{children:(0,u.jsx)(p.A,{airQuality:v,loading:C})})}),(0,u.jsx)(w,{id:"compare",children:(0,u.jsx)(m,{children:(0,u.jsx)(h.A,{})})})]})})}}}]);
//# sourceMappingURL=36.046f7d0cd880cd982bdd.js.map