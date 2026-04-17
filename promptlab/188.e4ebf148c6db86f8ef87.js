"use strict";(self.webpackChunk_atlantis_promptlab=self.webpackChunk_atlantis_promptlab||[]).push([[188],{188(e,o,t){var r=t(8997),n=t(7359),a=t(3233),s=t(7207),i=t(9178),l=t(1825),d=t(8479),c=t(6480),p=t(5368),u=t(4525),m=t(2743),x=t(7782),f=t(4698),g=t(571),h=t(5056),w=t(891),b=t(1881),y=t(5723);const $=s.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,j=a.default.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${i.w4.spacing.md};
  height: 100%;
  padding: ${i.w4.spacing.md};
  min-height: 0;
  animation: ${$} 0.25s ease;

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`,v=a.default.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,k=a.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  min-height: 0;

  @media (max-width: ${i.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,S=a.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`,P=a.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,C=a.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 10px;
  background: ${({active:e})=>e?`${i.w4.colors.accent}20`:"transparent"};
  border: 1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.mainText};
  }
`,R=a.default.select`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainText};
  font-size: 13px;
  font-family: ${i.w4.typography.fontFamilyMono};
  padding: 6px 10px;
  outline: none;
  cursor: pointer;
  &:focus { border-color: ${i.w4.colors.accent}; }
`,z=a.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding-bottom: ${i.w4.spacing.sm};
  flex-shrink: 0;
`,M=a.default.span`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`,A=a.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 380px;
  max-width: 100%;
  background: ${i.w4.colors.surface};
  border-left: 1px solid ${i.w4.colors.border};
  z-index: 10;
  display: flex;
  flex-direction: column;
  animation: ${$} 0.2s ease;
`,L=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${i.w4.colors.border};
`,T=a.default.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,B=a.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.lg};
`,I=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,E=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,H=a.default.label`
  font-size: 12px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,_=a.default.a`
  font-size: 11px;
  color: ${i.w4.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover { text-decoration: underline; }
`,J=a.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainText};
  font-size: 13px;
  font-family: ${i.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color 0.15s;
  &:focus { border-color: ${i.w4.colors.accent}; }
`,N=a.default.button`
  padding: 10px;
  background: ${i.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: ${i.w4.colors.accentHover}; }
`,O=a.default.button`
  background: none;
  border: none;
  color: ${i.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${i.w4.borderRadius.sm};
  display: flex;
  &:hover { color: ${i.w4.colors.mainText}; }
`,D=(e,o)=>({modelId:e,provider:o,status:"idle",output:""});function K({topBarRight:e}){const[o,t]=(0,n.useState)(()=>(0,f.Vc)()),[r,a]=(0,n.useState)(!1),[s,$]=(0,n.useState)(o),[K,U]=(0,n.useState)(""),[F,Y]=(0,n.useState)(""),[Z,q]=(0,n.useState)(!1),[G,V]=(0,n.useState)(x.L[0].id),[W,Q]=(0,n.useState)(x.L[3].id),[X,ee]=(0,n.useState)([]),[oe,te]=(0,n.useState)(!1),re=(0,n.useRef)(null),[ne,ae]=(0,n.useState)(!1),[se,ie]=(0,n.useState)(null),le=e=>x.L.find(o=>o.id===e)?.provider??"groq",de=(0,n.useMemo)(()=>x.L.filter(e=>o[e.provider]),[o]),ce=Boolean(F.trim())&&de.length>0,pe=(0,n.useCallback)(async()=>{if(!ce||oe)return;re.current?.abort();const e=new AbortController;re.current=e;const t=Z?[G,W]:[G],r=t.map(e=>D(e,le(e)));ee(r),te(!0),await Promise.allSettled(t.map(async(t,r)=>{const n=le(t),a=o[n];if(!a)return void ee(e=>e.map((e,o)=>o===r?{...e,status:"error",error:`No ${n} API key configured`}:e));ee(e=>e.map((e,o)=>o===r?{...e,status:"streaming"}:e));const s=Date.now();try{await(0,g.L4)(n,a,t,K,F,e=>{ee(o=>o.map((o,t)=>t===r?{...o,output:o.output+e}:o))},e.signal);const o=Date.now()-s;ee(e=>e.map((e,t)=>t===r?{...e,status:"done",durationMs:o}:e))}catch(o){if(e.signal.aborted)return;const t=o instanceof Error?o.message:String(o);ee(e=>e.map((e,o)=>o===r?{...e,status:"error",error:t}:e))}})),te(!1)},[ce,oe,Z,G,W,o,K,F]);if(!(0,f.yr)(o))return(0,y.jsx)(i.PE,{title:"Prompt Lab",sidebar:null,topBarRight:e,children:(0,y.jsx)(h.H,{onSave:e=>{t(e),(0,f.cR)(e)}})});const ue=(0,y.jsxs)(P,{children:[(0,y.jsxs)(C,{active:Z,onClick:()=>q(e=>!e),children:[Z?(0,y.jsx)(l.A,{size:13}):(0,y.jsx)(d.A,{size:13}),Z?"Compare":"Single"]}),(0,y.jsx)(i.UO,{appId:"promptlab",onLoad:(e,o,t)=>{try{const r=JSON.parse(e);null!=r.systemPrompt&&U(r.systemPrompt),null!=r.userPrompt&&Y(r.userPrompt),r.model1&&V(r.model1),r.model2&&Q(r.model2),null!=r.compare&&q(r.compare),ie(o&&t?{id:o,name:t}:null)}catch{}}}),(0,y.jsxs)(C,{onClick:()=>ae(!0),children:[(0,y.jsx)(c.A,{size:13})," Save"]}),(0,y.jsx)(C,{onClick:()=>{$(o),a(!0)},children:(0,y.jsx)(p.A,{size:13})}),e]}),me=X.length>0?X:Z?[D(G,le(G)),D(W,le(W))]:[D(G,le(G))];return(0,y.jsxs)(i.PE,{title:"Prompt Lab",sidebar:null,topBarRight:ue,children:[(0,y.jsxs)(j,{children:[(0,y.jsxs)(v,{children:[(0,y.jsxs)(z,{children:[(0,y.jsxs)(M,{children:["Model",Z?" 1":""]}),(0,y.jsx)(R,{value:G,onChange:e=>V(e.target.value),children:de.map(e=>(0,y.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),Z&&(0,y.jsxs)(z,{children:[(0,y.jsx)(M,{children:"Model 2"}),(0,y.jsx)(R,{value:W,onChange:e=>Q(e.target.value),children:de.map(e=>(0,y.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),(0,y.jsx)(w.W,{systemPrompt:K,userPrompt:F,onSystemChange:U,onUserChange:Y,onRun:pe,running:oe,canRun:ce})]}),(0,y.jsx)(k,{children:me.map((e,o)=>(0,y.jsx)(S,{children:(0,y.jsx)(b.c,{run:e})},`${e.modelId}-${o}`))})]}),r&&(0,y.jsxs)(A,{children:[(0,y.jsxs)(L,{children:[(0,y.jsx)(T,{children:"API Keys"}),(0,y.jsx)(O,{onClick:()=>a(!1),children:(0,y.jsx)(u.A,{size:18})})]}),(0,y.jsxs)(B,{children:[x.x.map(e=>(0,y.jsxs)(I,{children:[(0,y.jsxs)(E,{children:[(0,y.jsx)(H,{children:e.label}),(0,y.jsxs)(_,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["Get key ",(0,y.jsx)(m.A,{size:10})]})]}),(0,y.jsx)(J,{type:"password",placeholder:`Paste your ${e.label} API key`,value:s[e.id],onChange:o=>$(t=>({...t,[e.id]:o.target.value}))})]},e.id)),(0,y.jsx)(N,{onClick:()=>{t(s),(0,f.cR)(s),a(!1)},children:"Save Keys"})]})]}),ne&&(0,y.jsx)(i.MJ,{existingDoc:se??void 0,onSave:async e=>{ae(!1);const o=JSON.stringify({systemPrompt:K,userPrompt:F,model1:G,model2:W,compare:Z});if(se)await(0,i.mZ)(se.id,e,o),ie({id:se.id,name:e});else{const t=await(0,i.KL)("promptlab",e,o);ie({id:t,name:e})}},onUpdate:se?async()=>{ae(!1);const e=JSON.stringify({systemPrompt:K,userPrompt:F,model1:G,model2:W,compare:Z});await(0,i.mZ)(se.id,se.name,e)}:void 0,onCancel:()=>ae(!1)})]})}const U=document.getElementById("root");if(!U)throw new Error("Root element #root not found");(0,r.H)(U).render((0,y.jsx)(K,{}))},8997(e,o,t){var r=t(8991);o.H=r.createRoot,r.hydrateRoot}}]);
//# sourceMappingURL=188.e4ebf148c6db86f8ef87.js.map