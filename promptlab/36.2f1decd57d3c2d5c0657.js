"use strict";(self.webpackChunk_atlantis_promptlab=self.webpackChunk_atlantis_promptlab||[]).push([[36],{6036(e,o,t){t.r(o),t.d(o,{default:()=>H});var r=t(7359),a=t(3233),n=t(7207),s=t(5723),i=t(1825),l=t(2743),d=t(8479),c=t(6480),p=t(5368),u=t(4525),m=t(7782),x=t(4698),f=t(571),g=t(5056),h=t(891),w=t(1881),b=t(8104);const y=n.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,$=a.default.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${s.w4.spacing.md};
  height: 100%;
  padding: ${s.w4.spacing.md};
  min-height: 0;
  animation: ${y} 0.25s ease;

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`,j=a.default.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,v=a.default.div`
  display: flex;
  gap: ${s.w4.spacing.md};
  min-height: 0;

  @media (max-width: ${s.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,k=a.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`,S=a.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,P=a.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 10px;
  background: ${({active:e})=>e?`${s.w4.colors.accent}20`:"transparent"};
  border: 1px solid ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.mainText};
  }
`,C=a.default.select`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  padding: 6px 10px;
  outline: none;
  cursor: pointer;
  &:focus { border-color: ${s.w4.colors.accent}; }
`,z=a.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding-bottom: ${s.w4.spacing.sm};
  flex-shrink: 0;
`,R=a.default.span`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`,M=a.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 380px;
  max-width: 100%;
  background: ${s.w4.colors.surface};
  border-left: 1px solid ${s.w4.colors.border};
  z-index: 10;
  display: flex;
  flex-direction: column;
  animation: ${y} 0.2s ease;
`,A=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${s.w4.colors.border};
`,L=a.default.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  margin: 0;
`,T=a.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
`,B=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,I=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,_=a.default.label`
  font-size: 12px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,J=a.default.a`
  font-size: 11px;
  color: ${s.w4.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover { text-decoration: underline; }
`,N=a.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color 0.15s;
  &:focus { border-color: ${s.w4.colors.accent}; }
`,O=a.default.button`
  padding: 10px;
  background: ${s.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${s.w4.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: ${s.w4.colors.accentHover}; }
`,D=a.default.button`
  background: none;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${s.w4.borderRadius.sm};
  display: flex;
  &:hover { color: ${s.w4.colors.mainText}; }
`,E=(e,o)=>({modelId:e,provider:o,status:"idle",output:""});function H({topBarRight:e}){const[o,t]=(0,r.useState)(()=>(0,x.Vc)()),[a,n]=(0,r.useState)(!1),[y,H]=(0,r.useState)(o),[K,U]=(0,r.useState)(""),[F,Y]=(0,r.useState)(""),[Z,q]=(0,r.useState)(!1),[G,V]=(0,r.useState)(m.L[0].id),[W,Q]=(0,r.useState)(m.L[3].id),[X,ee]=(0,r.useState)([]),[oe,te]=(0,r.useState)(!1),re=(0,r.useRef)(null),[ae,ne]=(0,r.useState)(!1),[se,ie]=(0,r.useState)(null),le=e=>m.L.find(o=>o.id===e)?.provider??"groq",de=(0,r.useMemo)(()=>m.L.filter(e=>o[e.provider]),[o]),ce=Boolean(F.trim())&&de.length>0,pe=(0,r.useCallback)(async()=>{if(!ce||oe)return;re.current?.abort();const e=new AbortController;re.current=e;const t=Z?[G,W]:[G],r=t.map(e=>E(e,le(e)));ee(r),te(!0),await Promise.allSettled(t.map(async(t,r)=>{const a=le(t),n=o[a];if(!n)return void ee(e=>e.map((e,o)=>o===r?{...e,status:"error",error:`No ${a} API key configured`}:e));ee(e=>e.map((e,o)=>o===r?{...e,status:"streaming"}:e));const s=Date.now();try{await(0,f.L4)(a,n,t,K,F,e=>{ee(o=>o.map((o,t)=>t===r?{...o,output:o.output+e}:o))},e.signal);const o=Date.now()-s;ee(e=>e.map((e,t)=>t===r?{...e,status:"done",durationMs:o}:e))}catch(o){if(e.signal.aborted)return;const t=o instanceof Error?o.message:String(o);ee(e=>e.map((e,o)=>o===r?{...e,status:"error",error:t}:e))}})),te(!1)},[ce,oe,Z,G,W,o,K,F]);if(!(0,x.yr)(o))return(0,b.jsx)(s.PE,{title:"Prompt Lab",sidebar:null,topBarRight:e,children:(0,b.jsx)(g.H,{onSave:e=>{t(e),(0,x.cR)(e)}})});const ue=(0,b.jsxs)(S,{children:[(0,b.jsxs)(P,{active:Z,onClick:()=>q(e=>!e),children:[Z?(0,b.jsx)(i.A,{size:13}):(0,b.jsx)(d.A,{size:13}),Z?"Compare":"Single"]}),(0,b.jsx)(s.UO,{appId:"promptlab",onLoad:(e,o,t)=>{try{const r=JSON.parse(e);null!=r.systemPrompt&&U(r.systemPrompt),null!=r.userPrompt&&Y(r.userPrompt),r.model1&&V(r.model1),r.model2&&Q(r.model2),null!=r.compare&&q(r.compare),ie(o&&t?{id:o,name:t}:null)}catch{}}}),(0,b.jsxs)(P,{onClick:()=>ne(!0),children:[(0,b.jsx)(c.A,{size:13})," Save"]}),(0,b.jsx)(P,{onClick:()=>{H(o),n(!0)},children:(0,b.jsx)(p.A,{size:13})}),e]}),me=X.length>0?X:Z?[E(G,le(G)),E(W,le(W))]:[E(G,le(G))];return(0,b.jsxs)(s.PE,{title:"Prompt Lab",sidebar:null,topBarRight:ue,children:[(0,b.jsxs)($,{children:[(0,b.jsxs)(j,{children:[(0,b.jsxs)(z,{children:[(0,b.jsxs)(R,{children:["Model",Z?" 1":""]}),(0,b.jsx)(C,{value:G,onChange:e=>V(e.target.value),children:de.map(e=>(0,b.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),Z&&(0,b.jsxs)(z,{children:[(0,b.jsx)(R,{children:"Model 2"}),(0,b.jsx)(C,{value:W,onChange:e=>Q(e.target.value),children:de.map(e=>(0,b.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),(0,b.jsx)(h.W,{systemPrompt:K,userPrompt:F,onSystemChange:U,onUserChange:Y,onRun:pe,running:oe,canRun:ce})]}),(0,b.jsx)(v,{children:me.map((e,o)=>(0,b.jsx)(k,{children:(0,b.jsx)(w.c,{run:e})},`${e.modelId}-${o}`))})]}),a&&(0,b.jsxs)(M,{children:[(0,b.jsxs)(A,{children:[(0,b.jsx)(L,{children:"API Keys"}),(0,b.jsx)(D,{onClick:()=>n(!1),children:(0,b.jsx)(u.A,{size:18})})]}),(0,b.jsxs)(T,{children:[m.x.map(e=>(0,b.jsxs)(B,{children:[(0,b.jsxs)(I,{children:[(0,b.jsx)(_,{children:e.label}),(0,b.jsxs)(J,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["Get key ",(0,b.jsx)(l.A,{size:10})]})]}),(0,b.jsx)(N,{type:"password",placeholder:`Paste your ${e.label} API key`,value:y[e.id],onChange:o=>H(t=>({...t,[e.id]:o.target.value}))})]},e.id)),(0,b.jsx)(O,{onClick:()=>{t(y),(0,x.cR)(y),n(!1)},children:"Save Keys"})]})]}),ae&&(0,b.jsx)(s.MJ,{existingDoc:se??void 0,onSave:async e=>{ne(!1);const o=JSON.stringify({systemPrompt:K,userPrompt:F,model1:G,model2:W,compare:Z});if(se)await(0,s.mZ)(se.id,e,o),ie({id:se.id,name:e});else{const t=await(0,s.KL)("promptlab",e,o);ie({id:t,name:e})}},onUpdate:se?async()=>{ne(!1);const e=JSON.stringify({systemPrompt:K,userPrompt:F,model1:G,model2:W,compare:Z});await(0,s.mZ)(se.id,se.name,e)}:void 0,onCancel:()=>ne(!1)})]})}}}]);
//# sourceMappingURL=36.2f1decd57d3c2d5c0657.js.map