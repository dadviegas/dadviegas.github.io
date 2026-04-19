"use strict";(self.webpackChunk_atlantis_promptlab=self.webpackChunk_atlantis_promptlab||[]).push([["362"],{3935(e,r,o){o.r(r),o.d(r,{default:()=>K});var t=o(5723),i=o(7991),n=o(6859),s=o.n(n),a=o(2799),l=o(4174),d=o(1825),c=o(8479),p=o(6480),u=o(5368),x=o(4525),m=o(2743),g=o(8035),f=o(7871),h=o(3758),w=o(7613),b=o(6088),y=o(6220);let $=(0,a.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,j=s().div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${l.w4.spacing.md};
  height: 100%;
  padding: ${l.w4.spacing.md};
  min-height: 0;
  animation: ${$} 0.25s ease;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`,v=s().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,k=s().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  min-height: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,S=s().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`,C=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,z=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 10px;
  background: ${({active:e})=>e?`${l.w4.colors.accent}20`:"transparent"};
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }
`,P=s().select`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  padding: 6px 10px;
  outline: none;
  cursor: pointer;
  &:focus { border-color: ${l.w4.colors.accent}; }
`,R=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding-bottom: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,M=s().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`,A=s().div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 380px;
  max-width: 100%;
  background: ${l.w4.colors.surface};
  border-left: 1px solid ${l.w4.colors.border};
  z-index: 10;
  display: flex;
  flex-direction: column;
  animation: ${$} 0.2s ease;
`,L=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,T=s().h3`
  font-size: 16px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,I=s().div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,_=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,B=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,J=s().label`
  font-size: 12px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,N=s().a`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover { text-decoration: underline; }
`,O=s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color 0.15s;
  &:focus { border-color: ${l.w4.colors.accent}; }
`,D=s().button`
  padding: 10px;
  background: ${l.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: ${l.w4.colors.accentHover}; }
`,E=s().button`
  background: none;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  display: flex;
  &:hover { color: ${l.w4.colors.mainText}; }
`,H=(e,r)=>({modelId:e,provider:r,status:"idle",output:""});function K({topBarRight:e}){let[r,o]=(0,i.useState)(()=>(0,f.Vc)()),[n,s]=(0,i.useState)(!1),[a,$]=(0,i.useState)(r),[U,F]=(0,i.useState)(""),[Y,Z]=(0,i.useState)(""),[q,G]=(0,i.useState)(!1),[V,W]=(0,i.useState)(g.L["0"].id),[Q,X]=(0,i.useState)(g.L["3"].id),[ee,er]=(0,i.useState)([]),[eo,et]=(0,i.useState)(!1),ei=(0,i.useRef)(null),[en,es]=(0,i.useState)(!1),[ea,el]=(0,i.useState)(null),ed=e=>g.L.find(r=>r.id===e)?.provider??"groq",ec=(0,i.useMemo)(()=>g.L.filter(e=>r[e.provider]),[r]),ep=!!Y.trim()&&ec.length>0,eu=(0,i.useCallback)(async()=>{if(!ep||eo)return;ei.current?.abort();let e=new AbortController;ei.current=e;let o=q?[V,Q]:[V];er(o.map(e=>H(e,ed(e)))),et(!0),await Promise.allSettled(o.map(async(o,t)=>{let i=ed(o),n=r[i];if(!n)return void er(e=>e.map((e,r)=>r===t?{...e,status:"error",error:`No ${i} API key configured`}:e));er(e=>e.map((e,r)=>r===t?{...e,status:"streaming"}:e));let s=Date.now();try{await (0,h.L4)(i,n,o,U,Y,e=>{er(r=>r.map((r,o)=>o===t?{...r,output:r.output+e}:r))},e.signal);let r=Date.now()-s;er(e=>e.map((e,o)=>o===t?{...e,status:"done",durationMs:r}:e))}catch(o){if(e.signal.aborted)return;let r=o instanceof Error?o.message:String(o);er(e=>e.map((e,o)=>o===t?{...e,status:"error",error:r}:e))}})),et(!1)},[ep,eo,q,V,Q,r,U,Y]),ex=async e=>{es(!1);let r=JSON.stringify({systemPrompt:U,userPrompt:Y,model1:V,model2:Q,compare:q});ea?(await (0,l.mZ)(ea.id,e,r),el({id:ea.id,name:e})):el({id:await (0,l.KL)("promptlab",e,r),name:e})};if(!(0,f.yr)(r))return(0,t.jsx)(l.PE,{title:"Prompt Lab",sidebar:null,topBarRight:e,children:(0,t.jsx)(w.H,{onSave:e=>{o(e),(0,f.cR)(e)}})});let em=(0,t.jsxs)(C,{children:[(0,t.jsxs)(z,{active:q,onClick:()=>G(e=>!e),children:[q?(0,t.jsx)(d.A,{size:13}):(0,t.jsx)(c.A,{size:13}),q?"Compare":"Single"]}),(0,t.jsx)(l.UO,{appId:"promptlab",onLoad:(e,r,o)=>{try{let t=JSON.parse(e);null!=t.systemPrompt&&F(t.systemPrompt),null!=t.userPrompt&&Z(t.userPrompt),t.model1&&W(t.model1),t.model2&&X(t.model2),null!=t.compare&&G(t.compare),el(r&&o?{id:r,name:o}:null)}catch{}}}),(0,t.jsxs)(z,{onClick:()=>es(!0),children:[(0,t.jsx)(p.A,{size:13})," Save"]}),(0,t.jsx)(z,{onClick:()=>{$(r),s(!0)},children:(0,t.jsx)(u.A,{size:13})}),e]}),eg=ee.length>0?ee:q?[H(V,ed(V)),H(Q,ed(Q))]:[H(V,ed(V))];return(0,t.jsxs)(l.PE,{title:"Prompt Lab",sidebar:null,topBarRight:em,children:[(0,t.jsxs)(j,{children:[(0,t.jsxs)(v,{children:[(0,t.jsxs)(R,{children:[(0,t.jsxs)(M,{children:["Model",q?" 1":""]}),(0,t.jsx)(P,{value:V,onChange:e=>W(e.target.value),children:ec.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),q&&(0,t.jsxs)(R,{children:[(0,t.jsx)(M,{children:"Model 2"}),(0,t.jsx)(P,{value:Q,onChange:e=>X(e.target.value),children:ec.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),(0,t.jsx)(b.W,{systemPrompt:U,userPrompt:Y,onSystemChange:F,onUserChange:Z,onRun:eu,running:eo,canRun:ep})]}),(0,t.jsx)(k,{children:eg.map((e,r)=>(0,t.jsx)(S,{children:(0,t.jsx)(y.c,{run:e})},`${e.modelId}-${r}`))})]}),n&&(0,t.jsxs)(A,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(T,{children:"API Keys"}),(0,t.jsx)(E,{onClick:()=>s(!1),children:(0,t.jsx)(x.A,{size:18})})]}),(0,t.jsxs)(I,{children:[g.x.map(e=>(0,t.jsxs)(_,{children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(J,{children:e.label}),(0,t.jsxs)(N,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["Get key ",(0,t.jsx)(m.A,{size:10})]})]}),(0,t.jsx)(O,{type:"password",placeholder:`Paste your ${e.label} API key`,value:a[e.id],onChange:r=>$(o=>({...o,[e.id]:r.target.value}))})]},e.id)),(0,t.jsx)(D,{onClick:()=>{o(a),(0,f.cR)(a),s(!1)},children:"Save Keys"})]})]}),en&&(0,t.jsx)(l.MJ,{existingDoc:ea??void 0,onSave:ex,onUpdate:ea?async()=>{es(!1);let e=JSON.stringify({systemPrompt:U,userPrompt:Y,model1:V,model2:Q,compare:q});await (0,l.mZ)(ea.id,ea.name,e)}:void 0,onCancel:()=>es(!1)})]})}}}]);