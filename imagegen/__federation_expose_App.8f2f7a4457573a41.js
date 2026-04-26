"use strict";(self.webpackChunk_atlantis_imagegen=self.webpackChunk_atlantis_imagegen||[]).push([["362"],{3935(e,t,a){a.r(t),a.d(t,{default:()=>y});var n=a(5723),i=a(7991),l=a(6859),r=a.n(l),o=a(2799),h=a(6063),d=a(997),s=a(4041),g=a(3758),u=a(7871),m=a(6665),c=a(6396),f=a(9610),p=a(3487);let w=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,x=r().div`
  display: flex;
  flex-direction: column;
  gap: ${h.w4.spacing.lg};
  padding: ${h.w4.spacing.lg};
  height: 100%;
  overflow-y: auto;
  animation: ${w} 0.25s ease;
`;function y({topBarRight:e}){let[t,a]=(0,i.useState)(""),[l,r]=(0,i.useState)(()=>(0,u.M5)()),[o,h]=(0,i.useState)(null),[w,S]=(0,i.useState)("idle"),[C,k]=(0,i.useState)(()=>(0,u.$5)()),[M,b]=(0,i.useState)(!1),[j,v]=(0,i.useState)(0),D=(0,i.useRef)(!1),E=(0,g.Vi)(),R=!!E,Z=(0,i.useCallback)((e,t)=>{h((0,g.i4)({prompt:e,width:l.width,height:l.height,seed:t,model:l.model})),v(t),S("loading")},[l]),$=async()=>{if(R&&t.trim()&&!M){b(!0);try{let e=await (0,g.fG)(E,t);a(e)}catch{}finally{b(!1)}}},_=(0,i.useCallback)(async e=>{D.current=!0,a(e.prompt),v(e.seed);let t=await (0,m.if)(e.id);h(t??e.url),S(t?"loaded":"loading")},[]);return(0,n.jsx)(d.PE,{title:"Image Gen",sidebar:null,topBarRight:e,children:(0,n.jsxs)(x,{children:[(0,n.jsx)(c.q,{prompt:t,onPromptChange:a,width:l.width,height:l.height,model:l.model,onSizeChange:(e,t)=>{let a={...l,width:e,height:t};r(a),(0,u.DZ)(a)},onModelChange:e=>{let t={...l,model:e};r(t),(0,u.DZ)(t)},onGenerate:()=>{t.trim()&&Z(t,Math.floor(0x80000000*Math.random()))},onEnhance:$,generating:"loading"===w,enhancing:M,canEnhance:R}),(0,n.jsx)(f.e,{url:o,status:w,width:l.width,height:l.height,onLoad:e=>{if(S("loaded"),D.current){D.current=!1;return}if(!o)return;let a={id:(0,s.z)(),prompt:t,url:o,seed:j,width:l.width,height:l.height,model:l.model,generatedAt:Date.now()};k((0,u.Qd)(a)),(0,m.CJ)(a.id,e)},onError:()=>{S("error")},onReroll:()=>{t.trim()&&Z(t,Math.floor(0x80000000*Math.random()))},onRetry:()=>{t.trim()&&Z(t,j)}}),(0,n.jsx)(p.Z,{items:C,onSelect:_,onDelete:e=>{k((0,u.vI)(e)),(0,m.XZ)(e)}})]})})}}}]);