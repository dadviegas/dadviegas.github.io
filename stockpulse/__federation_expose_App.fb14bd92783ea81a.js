"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([["362"],{3935(e,i,a){a.r(i),a.d(i,{default:()=>b});var s=a(5723),r=a(7991),d=a(6859),n=a.n(d),l=a(2719),c=a(9522),o=a(6104),t=a(5855),u=a(5323),g=a(9855);let x=[{id:"markets",name:"Markets",icon:"activity",children:[{id:"overview",name:"Overview",icon:"layout-grid"},{id:"americas",name:"Americas",icon:"globe"},{id:"europe",name:"Europe",icon:"globe"},{id:"asia",name:"Asia Pacific",icon:"globe"}]},{id:"analysis",name:"Analysis",icon:"bar-chart-2",children:[{id:"sectors",name:"Sectors",icon:"layers"},{id:"calendar",name:"Good/Bad Days",icon:"calendar"}]}],h=n().div`
  padding: ${l.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,p=n().section`
  scroll-margin-top: ${l.w4.spacing.lg};
`,m=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
`;function b({topBarRight:e}){let[i,a]=(0,r.useState)(null),d=[...c.rb,...c.zR],{quotes:n,loading:j,error:w}=(0,c.Rq)(d,144e5),v=(0,r.useCallback)(e=>{a(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),k=(0,s.jsx)(l.CD,{entries:x,activeId:i,onSelect:v});return(0,s.jsx)(l.PE,{title:"StockPulse",sidebar:k,activeId:i,topBarRight:e,children:(0,s.jsxs)(h,{children:[(0,s.jsx)(p,{id:"overview",children:(0,s.jsx)(m,{children:(0,s.jsx)(o.A,{quotes:n,loading:j,error:w})})}),c.ij.map(e=>(0,s.jsx)(p,{id:e.id,children:(0,s.jsx)(m,{children:(0,s.jsx)(t.A,{region:e,quotes:n,loading:j})})},e.id)),(0,s.jsx)(p,{id:"sectors",children:(0,s.jsx)(m,{children:(0,s.jsx)(u.A,{quotes:n,loading:j})})}),(0,s.jsx)(p,{id:"calendar",children:(0,s.jsx)(m,{children:(0,s.jsx)(g.A,{})})})]})})}}}]);