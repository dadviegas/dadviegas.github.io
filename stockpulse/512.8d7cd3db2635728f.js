"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([["512"],{8997(e,i,o){var r=o(2727);i.createRoot=r.createRoot,r.hydrateRoot},3611(e,i,o){var r=o(5723),a=o(7991),s=o(8997),n=o(6859),d=o.n(n),t=o(246),c=o(9522),l=o(6104),u=o(5855),g=o(5323),h=o(9855);let x=[{id:"markets",name:"Markets",icon:"activity",children:[{id:"overview",name:"Overview",icon:"layout-grid"},{id:"americas",name:"Americas",icon:"globe"},{id:"europe",name:"Europe",icon:"globe"},{id:"asia",name:"Asia Pacific",icon:"globe"}]},{id:"analysis",name:"Analysis",icon:"bar-chart-2",children:[{id:"sectors",name:"Sectors",icon:"layers"},{id:"calendar",name:"Good/Bad Days",icon:"calendar"}]}],m=d().div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,p=d().section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,j=d().div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,b=document.getElementById("root");if(!b)throw Error("Root element #root not found");(0,s.createRoot)(b).render((0,r.jsx)(function({topBarRight:e}){let[i,o]=(0,a.useState)(null),s=[...c.rb,...c.zR],{quotes:n,loading:d,error:b}=(0,c.Rq)(s,144e5),w=(0,a.useCallback)(e=>{o(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),v=(0,r.jsx)(t.CD,{entries:x,activeId:i,onSelect:w});return(0,r.jsx)(t.PE,{title:"StockPulse",sidebar:v,activeId:i,topBarRight:e,children:(0,r.jsxs)(m,{children:[(0,r.jsx)(p,{id:"overview",children:(0,r.jsx)(j,{children:(0,r.jsx)(l.A,{quotes:n,loading:d,error:b})})}),c.ij.map(e=>(0,r.jsx)(p,{id:e.id,children:(0,r.jsx)(j,{children:(0,r.jsx)(u.A,{region:e,quotes:n,loading:d})})},e.id)),(0,r.jsx)(p,{id:"sectors",children:(0,r.jsx)(j,{children:(0,r.jsx)(g.A,{quotes:n,loading:d})})}),(0,r.jsx)(p,{id:"calendar",children:(0,r.jsx)(j,{children:(0,r.jsx)(h.A,{})})})]})})},{}))}}]);