"use strict";(self.webpackChunk_atlantis_citypulse=self.webpackChunk_atlantis_citypulse||[]).push([["362"],{3935(e,i,a){a.r(i),a.d(i,{default:()=>g});var n=a(5723),t=a(7991),r=a(6859),l=a.n(r),s=a(6063),o=a(997),d=a(3819),c=a(9522),h=a(1951),p=a(6305),x=a(7912),u=a(5332),m=a(4439);let y=[{id:"dashboard",name:"Dashboard",icon:"layout-grid",children:[{id:"overview",name:"City Overview",icon:"map-pin"},{id:"weather",name:"Weather Timeline",icon:"thermometer"},{id:"air-quality",name:"Air Quality",icon:"wind"},{id:"compare",name:"Compare Cities",icon:"bar-chart-2"}]}],w=l().h2`
  font-size: ${s.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  margin-bottom: ${s.w4.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.sm};
`;function g({topBarRight:e}){let[i,a]=(0,t.useState)(d.Mq["0"]),{snapshot:r,weather:l,airQuality:s,loading:j,error:f,retry:b}=(0,c.n)(i);return(0,n.jsx)(o.NI,{title:"CityPulse",sections:y,topBarRight:e,children:(0,n.jsxs)(o.wi,{children:[(0,n.jsxs)(o.KW,{id:"overview",children:[(0,n.jsxs)(w,{children:["City Overview",(0,n.jsx)(h.A,{value:i.id,onChange:a})]}),f?(0,n.jsxs)("div",{style:{padding:"24px",color:"#8b949e",fontSize:14,display:"flex",flexDirection:"column",alignItems:"flex-start",gap:12},children:["Weather data unavailable — the API may be temporarily down.",(0,n.jsx)("button",{onClick:b,style:{padding:"6px 16px",cursor:"pointer",background:"none",border:"1px solid #30363d",borderRadius:6,color:"#e6edf3",fontFamily:"inherit",fontSize:13},children:"Retry"})]}):(0,n.jsx)(p.A,{snapshot:r,loading:j})]}),(0,n.jsx)(o.KW,{id:"weather",children:(0,n.jsx)(o.PH,{children:(0,n.jsx)(x.A,{weather:l,loading:j})})}),(0,n.jsx)(o.KW,{id:"air-quality",children:(0,n.jsx)(o.PH,{children:(0,n.jsx)(u.A,{airQuality:s,loading:j})})}),(0,n.jsx)(o.KW,{id:"compare",children:(0,n.jsx)(o.PH,{children:(0,n.jsx)(m.A,{})})})]})})}}}]);