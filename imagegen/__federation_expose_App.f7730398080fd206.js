"use strict";(self.webpackChunk_atlantis_imagegen=self.webpackChunk_atlantis_imagegen||[]).push([["6362"],{3935(e,t,a){a.r(t),a.d(t,{default:()=>x});var n=a(5723),i=a(7991),l=a(6859),r=a.n(l),o=a(2799),h=a(9874),d=a(4041),s=a(3758),g=a(7871),u=a(6665),m=a(6396),c=a(9610),f=a(3487);let p=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=r().div`
  display: flex;
  flex-direction: column;
  gap: ${h.w4.spacing.lg};
  padding: ${h.w4.spacing.lg};
  height: 100%;
  overflow-y: auto;
  animation: ${p} 0.25s ease;
`;function x({topBarRight:e}){let[t,a]=(0,i.useState)(""),[l,r]=(0,i.useState)(()=>(0,g.M5)()),[o,p]=(0,i.useState)(null),[y,S]=(0,i.useState)("idle"),[C,k]=(0,i.useState)(()=>(0,g.$5)()),[M,b]=(0,i.useState)(!1),[j,v]=(0,i.useState)(0),D=(0,i.useRef)(!1),E=(0,s.Vi)(),R=!!E,Z=(0,i.useCallback)((e,t)=>{p((0,s.i4)({prompt:e,width:l.width,height:l.height,seed:t,model:l.model})),v(t),S("loading")},[l]),$=async()=>{if(R&&t.trim()&&!M){b(!0);try{let e=await (0,s.fG)(E,t);a(e)}catch{}finally{b(!1)}}},_=(0,i.useCallback)(async e=>{D.current=!0,a(e.prompt),v(e.seed);let t=await (0,u.if)(e.id);p(t??e.url),S(t?"loaded":"loading")},[]);return(0,n.jsx)(h.PE,{title:"Image Gen",sidebar:null,topBarRight:e,children:(0,n.jsxs)(w,{children:[(0,n.jsx)(m.q,{prompt:t,onPromptChange:a,width:l.width,height:l.height,model:l.model,onSizeChange:(e,t)=>{let a={...l,width:e,height:t};r(a),(0,g.DZ)(a)},onModelChange:e=>{let t={...l,model:e};r(t),(0,g.DZ)(t)},onGenerate:()=>{t.trim()&&Z(t,Math.floor(0x80000000*Math.random()))},onEnhance:$,generating:"loading"===y,enhancing:M,canEnhance:R}),(0,n.jsx)(c.e,{url:o,status:y,width:l.width,height:l.height,onLoad:e=>{if(S("loaded"),D.current){D.current=!1;return}if(!o)return;let a={id:(0,d.z)(),prompt:t,url:o,seed:j,width:l.width,height:l.height,model:l.model,generatedAt:Date.now()};k((0,g.Qd)(a)),(0,u.CJ)(a.id,e)},onError:()=>{S("error")},onReroll:()=>{t.trim()&&Z(t,Math.floor(0x80000000*Math.random()))},onRetry:()=>{t.trim()&&Z(t,j)}}),(0,n.jsx)(f.Z,{items:C,onSelect:_,onDelete:e=>{k((0,g.vI)(e)),(0,u.XZ)(e)}})]})})}}}]);