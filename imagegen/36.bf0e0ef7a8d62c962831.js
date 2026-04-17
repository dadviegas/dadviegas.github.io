"use strict";(self.webpackChunk_atlantis_imagegen=self.webpackChunk_atlantis_imagegen||[]).push([[36],{6036(e,t,n){n.r(t),n.d(t,{default:()=>p});var a=n(7359),o=n(3233),i=n(7207),r=n(9178),l=n(571),s=n(4698),d=n(8230),h=n(2057),c=n(6345),g=n(3614),u=n(5723);const m=i.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=o.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  padding: ${r.w4.spacing.lg};
  height: 100%;
  overflow-y: auto;
  animation: ${m} 0.25s ease;
`;function p({topBarRight:e}){const[t,n]=(0,a.useState)(""),[o,i]=(0,a.useState)(()=>(0,s.M5)()),[m,p]=(0,a.useState)(null),[w,y]=(0,a.useState)("idle"),[S,x]=(0,a.useState)(()=>(0,s.$5)()),[C,k]=(0,a.useState)(!1),[M,b]=(0,a.useState)(0),j=(0,a.useRef)(!1),v=(0,l.Vi)(),D=Boolean(v),R=(0,a.useCallback)((e,t)=>{const n=(0,l.i4)({prompt:e,width:o.width,height:o.height,seed:t,model:o.model});p(n),b(t),y("loading")},[o]),E=(0,a.useCallback)(async e=>{j.current=!0,n(e.prompt),b(e.seed);const t=await(0,d.if)(e.id);p(t??e.url),y(t?"loaded":"loading")},[]);return(0,u.jsx)(r.PE,{title:"Image Gen",sidebar:null,topBarRight:e,children:(0,u.jsxs)(f,{children:[(0,u.jsx)(h.q,{prompt:t,onPromptChange:n,width:o.width,height:o.height,model:o.model,onSizeChange:(e,t)=>{const n={...o,width:e,height:t};i(n),(0,s.DZ)(n)},onModelChange:e=>{const t={...o,model:e};i(t),(0,s.DZ)(t)},onGenerate:()=>{if(!t.trim())return;const e=Math.floor(Math.random()*2**31);R(t,e)},onEnhance:async()=>{if(D&&t.trim()&&!C){k(!0);try{const e=await(0,l.fG)(v,t);n(e)}catch{}finally{k(!1)}}},generating:"loading"===w,enhancing:C,canEnhance:D}),(0,u.jsx)(c.e,{url:m,status:w,width:o.width,height:o.height,onLoad:e=>{if(y("loaded"),j.current)return void(j.current=!1);if(!m)return;const n={id:crypto.randomUUID(),prompt:t,url:m,seed:M,width:o.width,height:o.height,model:o.model,generatedAt:Date.now()};x((0,s.Qd)(n)),(0,d.CJ)(n.id,e)},onError:()=>{y("error")},onReroll:()=>{if(!t.trim())return;const e=Math.floor(Math.random()*2**31);R(t,e)},onRetry:()=>{t.trim()&&R(t,M)}}),(0,u.jsx)(g.Z,{items:S,onSelect:E,onDelete:e=>{x((0,s.vI)(e)),(0,d.XZ)(e)}})]})})}}}]);
//# sourceMappingURL=36.bf0e0ef7a8d62c962831.js.map