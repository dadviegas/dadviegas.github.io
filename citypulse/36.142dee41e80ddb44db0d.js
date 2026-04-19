"use strict";(self.webpackChunk_atlantis_citypulse=self.webpackChunk_atlantis_citypulse||[]).push([[36],{6036(e,i,a){a.r(i),a.d(i,{default:()=>y});var t=a(7359),n=a(3233),r=a(4901),s=a(756),o=a(8447),l=a(5876),d=a(3550),c=a(4841),h=a(8253),p=a(3010),x=a(5723);const u=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"overview",name:"City Overview",icon:"map-pin"},{id:"weather",name:"Weather Timeline",icon:"thermometer"},{id:"air-quality",name:"Air Quality",icon:"wind"},{id:"compare",name:"Compare Cities",icon:"bar-chart-2"}]}],m=n.default.h2`
  font-size: ${r.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  margin-bottom: ${r.w4.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${r.w4.spacing.sm};
`;function y({topBarRight:e}){const[i,a]=(0,t.useState)(s.Mq[0]),{snapshot:n,weather:y,airQuality:g,loading:w,error:f,retry:j}=(0,o.n)(i);return(0,x.jsx)(r.NI,{title:"CityPulse",sections:u,topBarRight:e,children:(0,x.jsxs)(r.wi,{children:[(0,x.jsxs)(r.KW,{id:"overview",children:[(0,x.jsxs)(m,{children:["City Overview",(0,x.jsx)(l.A,{value:i.id,onChange:a})]}),f?(0,x.jsxs)("div",{style:{padding:"24px",color:"#8b949e",fontSize:14,display:"flex",flexDirection:"column",alignItems:"flex-start",gap:12},children:["Weather data unavailable — the API may be temporarily down.",(0,x.jsx)("button",{onClick:j,style:{padding:"6px 16px",cursor:"pointer",background:"none",border:"1px solid #30363d",borderRadius:6,color:"#e6edf3",fontFamily:"inherit",fontSize:13},children:"Retry"})]}):(0,x.jsx)(d.A,{snapshot:n,loading:w})]}),(0,x.jsx)(r.KW,{id:"weather",children:(0,x.jsx)(r.PH,{children:(0,x.jsx)(c.A,{weather:y,loading:w})})}),(0,x.jsx)(r.KW,{id:"air-quality",children:(0,x.jsx)(r.PH,{children:(0,x.jsx)(h.A,{airQuality:g,loading:w})})}),(0,x.jsx)(r.KW,{id:"compare",children:(0,x.jsx)(r.PH,{children:(0,x.jsx)(p.A,{})})})]})})}}}]);