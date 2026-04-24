"use strict";(self.webpackChunk_atlantis_promptlab=self.webpackChunk_atlantis_promptlab||[]).push([["512"],{8997(e,o,r){var t=r(2727);o.createRoot=t.createRoot,t.hydrateRoot},3611(e,o,r){var t=r(5723),n=r(8997),i=r(7991),s=r(6859),a=r.n(s),l=r(2799),d=r(3930),c=r(1825),p=r(8479),u=r(6480),m=r(5368),x=r(4525),g=r(2743),f=r(8035),h=r(7871),w=r(3758),b=r(7613),y=r(6088),$=r(6220);let j=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,v=a().div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${d.w4.spacing.md};
  height: 100%;
  padding: ${d.w4.spacing.md};
  min-height: 0;
  animation: ${j} 0.25s ease;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`,k=a().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,S=a().div`
  display: flex;
  gap: ${d.w4.spacing.md};
  min-height: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,R=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`,C=a().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,z=a().button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 10px;
  background: ${({active:e})=>e?`${d.w4.colors.accent}20`:"transparent"};
  border: 1px solid ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${d.w4.transitions.base};
  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.mainText};
  }
`,P=a().select`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  padding: 6px 10px;
  outline: none;
  cursor: pointer;
  &:focus { border-color: ${d.w4.colors.accent}; }
`,M=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding-bottom: ${d.w4.spacing.sm};
  flex-shrink: 0;
`,A=a().span`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`,L=a().div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 380px;
  max-width: 100%;
  background: ${d.w4.colors.surface};
  border-left: 1px solid ${d.w4.colors.border};
  z-index: 10;
  display: flex;
  flex-direction: column;
  animation: ${j} 0.2s ease;
`,T=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,I=a().h3`
  font-size: 16px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  margin: 0;
`,B=a().div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,E=a().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,_=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,J=a().label`
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,N=a().a`
  font-size: 11px;
  color: ${d.w4.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover { text-decoration: underline; }
`,O=a().input`
  width: 100%;
  padding: 8px 12px;
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color ${d.w4.transitions.base};
  &:focus { border-color: ${d.w4.colors.accent}; }
`,D=a().button`
  padding: 10px;
  background: ${d.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.base};
  &:hover { background: ${d.w4.colors.accentHover}; }
`,H=a().button`
  background: none;
  border: none;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${d.w4.borderRadius.sm};
  display: flex;
  &:hover { color: ${d.w4.colors.mainText}; }
`,K=(e,o)=>({modelId:e,provider:o,status:"idle",output:""}),U=document.getElementById("root");if(!U)throw Error("Root element #root not found");(0,n.createRoot)(U).render((0,t.jsx)(function({topBarRight:e}){let[o,r]=(0,i.useState)(()=>(0,h.Vc)()),[n,s]=(0,i.useState)(!1),[a,l]=(0,i.useState)(o),[j,U]=(0,i.useState)(""),[F,Y]=(0,i.useState)(""),[Z,q]=(0,i.useState)(!1),[G,V]=(0,i.useState)(f.L["0"].id),[W,Q]=(0,i.useState)(f.L["3"].id),[X,ee]=(0,i.useState)([]),[eo,er]=(0,i.useState)(!1),et=(0,i.useRef)(null),[en,ei]=(0,i.useState)(!1),[es,ea]=(0,i.useState)(null),el=e=>f.L.find(o=>o.id===e)?.provider??"groq",ed=(0,i.useMemo)(()=>f.L.filter(e=>o[e.provider]),[o]),ec=!!F.trim()&&ed.length>0,ep=(0,i.useCallback)(async()=>{if(!ec||eo)return;et.current?.abort();let e=new AbortController;et.current=e;let r=Z?[G,W]:[G];ee(r.map(e=>K(e,el(e)))),er(!0),await Promise.allSettled(r.map(async(r,t)=>{let n=el(r),i=o[n];if(!i)return void ee(e=>e.map((e,o)=>o===t?{...e,status:"error",error:`No ${n} API key configured`}:e));ee(e=>e.map((e,o)=>o===t?{...e,status:"streaming"}:e));let s=Date.now();try{await (0,w.L)(n,i,r,j,F,e=>{ee(o=>o.map((o,r)=>r===t?{...o,output:o.output+e}:o))},e.signal);let o=Date.now()-s;ee(e=>e.map((e,r)=>r===t?{...e,status:"done",durationMs:o}:e))}catch(r){if(e.signal.aborted)return;let o=r instanceof Error?r.message:String(r);ee(e=>e.map((e,r)=>r===t?{...e,status:"error",error:o}:e))}})),er(!1)},[ec,eo,Z,G,W,o,j,F]),eu=async e=>{ei(!1);let o=JSON.stringify({systemPrompt:j,userPrompt:F,model1:G,model2:W,compare:Z});es?(await (0,d.mZ)(es.id,e,o),ea({id:es.id,name:e})):ea({id:await (0,d.KL)("promptlab",e,o),name:e})};if(!(0,h.yr)(o))return(0,t.jsx)(d.PE,{title:"Prompt Lab",sidebar:null,topBarRight:e,children:(0,t.jsx)(b.H,{onSave:e=>{r(e),(0,h.cR)(e)}})});let em=(0,t.jsxs)(C,{children:[(0,t.jsxs)(z,{active:Z,onClick:()=>q(e=>!e),children:[Z?(0,t.jsx)(c.A,{size:13}):(0,t.jsx)(p.A,{size:13}),Z?"Compare":"Single"]}),(0,t.jsx)(d.UO,{appId:"promptlab",onLoad:(e,o,r)=>{try{let t=JSON.parse(e);null!=t.systemPrompt&&U(t.systemPrompt),null!=t.userPrompt&&Y(t.userPrompt),t.model1&&V(t.model1),t.model2&&Q(t.model2),null!=t.compare&&q(t.compare),ea(o&&r?{id:o,name:r}:null)}catch{}}}),(0,t.jsxs)(z,{onClick:()=>ei(!0),children:[(0,t.jsx)(u.A,{size:13})," Save"]}),(0,t.jsx)(z,{onClick:()=>{l(o),s(!0)},children:(0,t.jsx)(m.A,{size:13})}),e]}),ex=X.length>0?X:Z?[K(G,el(G)),K(W,el(W))]:[K(G,el(G))];return(0,t.jsxs)(d.PE,{title:"Prompt Lab",sidebar:null,topBarRight:em,children:[(0,t.jsxs)(v,{children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)(M,{children:[(0,t.jsxs)(A,{children:["Model",Z?" 1":""]}),(0,t.jsx)(P,{value:G,onChange:e=>V(e.target.value),children:ed.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),Z&&(0,t.jsxs)(M,{children:[(0,t.jsx)(A,{children:"Model 2"}),(0,t.jsx)(P,{value:W,onChange:e=>Q(e.target.value),children:ed.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),(0,t.jsx)(y.W,{systemPrompt:j,userPrompt:F,onSystemChange:U,onUserChange:Y,onRun:ep,running:eo,canRun:ec})]}),(0,t.jsx)(S,{children:ex.map((e,o)=>(0,t.jsx)(R,{children:(0,t.jsx)($.c,{run:e})},`${e.modelId}-${o}`))})]}),n&&(0,t.jsxs)(L,{children:[(0,t.jsxs)(T,{children:[(0,t.jsx)(I,{children:"API Keys"}),(0,t.jsx)(H,{onClick:()=>s(!1),children:(0,t.jsx)(x.A,{size:18})})]}),(0,t.jsxs)(B,{children:[f.x.map(e=>(0,t.jsxs)(E,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(J,{children:e.label}),(0,t.jsxs)(N,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["Get key ",(0,t.jsx)(g.A,{size:10})]})]}),(0,t.jsx)(O,{type:"password",placeholder:`Paste your ${e.label} API key`,value:a[e.id],onChange:o=>l(r=>({...r,[e.id]:o.target.value}))})]},e.id)),(0,t.jsx)(D,{onClick:()=>{r(a),(0,h.cR)(a),s(!1)},children:"Save Keys"})]})]}),en&&(0,t.jsx)(d.MJ,{existingDoc:es??void 0,onSave:eu,onUpdate:es?async()=>{ei(!1);let e=JSON.stringify({systemPrompt:j,userPrompt:F,model1:G,model2:W,compare:Z});await (0,d.mZ)(es.id,es.name,e)}:void 0,onCancel:()=>ei(!1)})]})},{}))}}]);