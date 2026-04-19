"use strict";(self.webpackChunk_atlantis_imagegen=self.webpackChunk_atlantis_imagegen||[]).push([["362"],{3935(e,t,a){a.r(t),a.d(t,{default:()=>w});var n=a(5723),i=a(7991),r=a(6859),l=a.n(r),o=a(2799),d=a(2719),h=a(3758),s=a(7871),g=a(6665),u=a(6396),m=a(9610),c=a(3487);let f=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=l().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  padding: ${d.w4.spacing.lg};
  height: 100%;
  overflow-y: auto;
  animation: ${f} 0.25s ease;
`;function w({topBarRight:e}){let[t,a]=(0,i.useState)(""),[r,l]=(0,i.useState)(()=>(0,s.M5)()),[o,f]=(0,i.useState)(null),[y,x]=(0,i.useState)("idle"),[S,C]=(0,i.useState)(()=>(0,s.$5)()),[k,M]=(0,i.useState)(!1),[b,j]=(0,i.useState)(0),D=(0,i.useRef)(!1),v=(0,h.Vi)(),E=!!v,R=(0,i.useCallback)((e,t)=>{f((0,h.i4)({prompt:e,width:r.width,height:r.height,seed:t,model:r.model})),j(t),x("loading")},[r]),Z=async()=>{if(E&&t.trim()&&!k){M(!0);try{let e=await (0,h.fG)(v,t);a(e)}catch{}finally{M(!1)}}},$=(0,i.useCallback)(async e=>{D.current=!0,a(e.prompt),j(e.seed);let t=await (0,g.if)(e.id);f(t??e.url),x(t?"loaded":"loading")},[]);return(0,n.jsx)(d.PE,{title:"Image Gen",sidebar:null,topBarRight:e,children:(0,n.jsxs)(p,{children:[(0,n.jsx)(u.q,{prompt:t,onPromptChange:a,width:r.width,height:r.height,model:r.model,onSizeChange:(e,t)=>{let a={...r,width:e,height:t};l(a),(0,s.DZ)(a)},onModelChange:e=>{let t={...r,model:e};l(t),(0,s.DZ)(t)},onGenerate:()=>{t.trim()&&R(t,Math.floor(0x80000000*Math.random()))},onEnhance:Z,generating:"loading"===y,enhancing:k,canEnhance:E}),(0,n.jsx)(m.e,{url:o,status:y,width:r.width,height:r.height,onLoad:e=>{if(x("loaded"),D.current){D.current=!1;return}if(!o)return;let a={id:crypto.randomUUID(),prompt:t,url:o,seed:b,width:r.width,height:r.height,model:r.model,generatedAt:Date.now()};C((0,s.Qd)(a)),(0,g.CJ)(a.id,e)},onError:()=>{x("error")},onReroll:()=>{t.trim()&&R(t,Math.floor(0x80000000*Math.random()))},onRetry:()=>{t.trim()&&R(t,b)}}),(0,n.jsx)(c.Z,{items:S,onSelect:$,onDelete:e=>{C((0,s.vI)(e)),(0,g.XZ)(e)}})]})})}}}]);