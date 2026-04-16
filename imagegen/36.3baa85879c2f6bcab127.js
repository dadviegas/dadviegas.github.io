"use strict";(self.webpackChunk_atlantis_imagegen=self.webpackChunk_atlantis_imagegen||[]).push([[36],{6036(t,e,a){a.r(e),a.d(e,{default:()=>p});var n=a(7359),o=a(3233),i=a(7207),r=a(5723),l=a(571),s=a(4698),h=a(2057),d=a(6345),g=a(3614),c=a(8104);const m=i.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=o.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  padding: ${r.w4.spacing.lg};
  height: 100%;
  overflow-y: auto;
  animation: ${m} 0.25s ease;
`;function p({topBarRight:t}){const[e,a]=(0,n.useState)(""),[o,i]=(0,n.useState)(()=>(0,s.M5)()),[m,p]=(0,n.useState)(null),[f,w]=(0,n.useState)("idle"),[y,S]=(0,n.useState)(()=>(0,s.$5)()),[x,k]=(0,n.useState)(!1),[C,M]=(0,n.useState)(0),j=(0,l.Vi)(),D=Boolean(j),b=(0,n.useCallback)((t,e)=>{const a=(0,l.i4)({prompt:t,width:o.width,height:o.height,seed:e,model:o.model});p(a),M(e),w("loading")},[o]);return(0,c.jsx)(r.PE,{title:"Image Gen",sidebar:null,topBarRight:t,children:(0,c.jsxs)(u,{children:[(0,c.jsx)(h.q,{prompt:e,onPromptChange:a,width:o.width,height:o.height,model:o.model,onSizeChange:(t,e)=>{const a={...o,width:t,height:e};i(a),(0,s.DZ)(a)},onModelChange:t=>{const e={...o,model:t};i(e),(0,s.DZ)(e)},onGenerate:()=>{if(!e.trim())return;const t=Math.floor(Math.random()*2**31);b(e,t)},onEnhance:async()=>{if(D&&e.trim()&&!x){k(!0);try{const t=await(0,l.fG)(j,e);a(t)}catch{}finally{k(!1)}}},generating:"loading"===f,enhancing:x,canEnhance:D}),(0,c.jsx)(d.e,{url:m,status:f,width:o.width,height:o.height,onLoad:()=>{if(w("loaded"),!m)return;const t={id:crypto.randomUUID(),prompt:e,url:m,seed:C,width:o.width,height:o.height,model:o.model,generatedAt:Date.now()};S((0,s.Qd)(t))},onError:()=>{w("error")},onReroll:()=>{if(!e.trim())return;const t=Math.floor(Math.random()*2**31);b(e,t)},onRetry:()=>{e.trim()&&b(e,C)}}),(0,c.jsx)(g.Z,{items:y,onSelect:t=>{a(t.prompt),p(t.url),M(t.seed),w("loaded")},onDelete:t=>{S((0,s.vI)(t))}})]})})}}}]);
//# sourceMappingURL=36.3baa85879c2f6bcab127.js.map