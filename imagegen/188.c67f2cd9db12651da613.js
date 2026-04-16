"use strict";(self.webpackChunk_atlantis_imagegen=self.webpackChunk_atlantis_imagegen||[]).push([[188],{188(t,e,o){var n=o(8997),a=o(7359),r=o(3233),i=o(7207),l=o(894),s=o(571),h=o(4698),d=o(2057),c=o(6345),g=o(3614),m=o(5723);const u=i.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
  padding: ${l.w4.spacing.lg};
  height: 100%;
  overflow-y: auto;
  animation: ${u} 0.25s ease;
`;function f({topBarRight:t}){const[e,o]=(0,a.useState)(""),[n,r]=(0,a.useState)(()=>(0,h.M5)()),[i,u]=(0,a.useState)(null),[f,w]=(0,a.useState)("idle"),[y,x]=(0,a.useState)(()=>(0,h.$5)()),[S,R]=(0,a.useState)(!1),[j,k]=(0,a.useState)(0),C=(0,s.Vi)(),E=Boolean(C),M=(0,a.useCallback)((t,e)=>{const o=(0,s.i4)({prompt:t,width:n.width,height:n.height,seed:e,model:n.model});u(o),k(e),w("loading")},[n]);return(0,m.jsx)(l.PE,{title:"Image Gen",sidebar:null,topBarRight:t,children:(0,m.jsxs)(p,{children:[(0,m.jsx)(d.q,{prompt:e,onPromptChange:o,width:n.width,height:n.height,model:n.model,onSizeChange:(t,e)=>{const o={...n,width:t,height:e};r(o),(0,h.DZ)(o)},onModelChange:t=>{const e={...n,model:t};r(e),(0,h.DZ)(e)},onGenerate:()=>{if(!e.trim())return;const t=Math.floor(Math.random()*2**31);M(e,t)},onEnhance:async()=>{if(E&&e.trim()&&!S){R(!0);try{const t=await(0,s.fG)(C,e);o(t)}catch{}finally{R(!1)}}},generating:"loading"===f,enhancing:S,canEnhance:E}),(0,m.jsx)(c.e,{url:i,status:f,width:n.width,height:n.height,onLoad:()=>{if(w("loaded"),!i)return;const t={id:crypto.randomUUID(),prompt:e,url:i,seed:j,width:n.width,height:n.height,model:n.model,generatedAt:Date.now()};x((0,h.Qd)(t))},onError:()=>{w("error")},onReroll:()=>{if(!e.trim())return;const t=Math.floor(Math.random()*2**31);M(e,t)},onRetry:()=>{e.trim()&&M(e,j)}}),(0,m.jsx)(g.Z,{items:y,onSelect:t=>{o(t.prompt),u(t.url),k(t.seed),w("loaded")},onDelete:t=>{x((0,h.vI)(t))}})]})})}const w=document.getElementById("root");if(!w)throw new Error("Root element #root not found");(0,n.H)(w).render((0,m.jsx)(f,{}))},8997(t,e,o){var n=o(8991);e.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.c67f2cd9db12651da613.js.map