"use strict";(self.webpackChunk_atlantis_promptlab=self.webpackChunk_atlantis_promptlab||[]).push([["512"],{8997(e,o,r){var t=r(2727);o.createRoot=t.createRoot,t.hydrateRoot},3611(e,o,r){var t=r(5723),n=r(8997),i=r(7991),a=r(6859),s=r.n(a),l=r(2799),d=r(4764),c=r(18),p=r(8035),m=r(7871),u=r(3758),x=r(7613),g=r(6088),f=r(6220);let h=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=s().div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${d.w4.spacing.md};
  height: 100%;
  padding: ${d.w4.spacing.md};
  min-height: 0;
  animation: ${h} 0.25s ease;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`,b=s().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,y=s().div`
  display: flex;
  gap: ${d.w4.spacing.md};
  min-height: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,$=s().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`,j=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,v=s().button`
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
`,k=s().select`
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
`,S=s().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding-bottom: ${d.w4.spacing.sm};
  flex-shrink: 0;
`,R=s().span`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`,C=s().div`
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
  animation: ${h} 0.2s ease;
`,z=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,P=s().h3`
  font-size: 16px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  margin: 0;
`,I=s().div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,M=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,L=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,T=s().label`
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,B=s().a`
  font-size: 11px;
  color: ${d.w4.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover { text-decoration: underline; }
`,E=s().input`
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
`,_=s().button`
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
`,A=s().button`
  background: none;
  border: none;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${d.w4.borderRadius.sm};
  display: flex;
  &:hover { color: ${d.w4.colors.mainText}; }
`,J=(e,o)=>({modelId:e,provider:o,status:"idle",output:""}),N=document.getElementById("root");if(!N)throw Error("Root element #root not found");(0,n.createRoot)(N).render((0,t.jsx)(function({topBarRight:e}){let[o,r]=(0,i.useState)(()=>(0,m.Vc)()),[n,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)(o),[h,N]=(0,i.useState)(""),[O,D]=(0,i.useState)(""),[H,K]=(0,i.useState)(!1),[U,F]=(0,i.useState)(p.L["0"].id),[Y,Z]=(0,i.useState)(p.L["3"].id),[q,G]=(0,i.useState)([]),[V,W]=(0,i.useState)(!1),Q=(0,i.useRef)(null),[X,ee]=(0,i.useState)(!1),[eo,er]=(0,i.useState)(null),et=e=>p.L.find(o=>o.id===e)?.provider??"groq",en=(0,i.useMemo)(()=>p.L.filter(e=>o[e.provider]),[o]),ei=!!O.trim()&&en.length>0,ea=(0,i.useCallback)(async()=>{if(!ei||V)return;Q.current?.abort();let e=new AbortController;Q.current=e;let r=H?[U,Y]:[U];G(r.map(e=>J(e,et(e)))),W(!0),await Promise.allSettled(r.map(async(r,t)=>{let n=et(r),i=o[n];if(!i)return void G(e=>e.map((e,o)=>o===t?{...e,status:"error",error:`No ${n} API key configured`}:e));G(e=>e.map((e,o)=>o===t?{...e,status:"streaming"}:e));let a=Date.now();try{await (0,u.L)(n,i,r,h,O,e=>{G(o=>o.map((o,r)=>r===t?{...o,output:o.output+e}:o))},e.signal);let o=Date.now()-a;G(e=>e.map((e,r)=>r===t?{...e,status:"done",durationMs:o}:e))}catch(r){if(e.signal.aborted)return;let o=r instanceof Error?r.message:String(r);G(e=>e.map((e,r)=>r===t?{...e,status:"error",error:o}:e))}})),W(!1)},[ei,V,H,U,Y,o,h,O]),es=async e=>{ee(!1);let o=JSON.stringify({systemPrompt:h,userPrompt:O,model1:U,model2:Y,compare:H});eo?(await (0,d.mZ)(eo.id,e,o),er({id:eo.id,name:e})):er({id:await (0,d.KL)("promptlab",e,o),name:e})};if(!(0,m.yr)(o))return(0,t.jsx)(d.PE,{title:"Prompt Lab",sidebar:null,topBarRight:e,children:(0,t.jsx)(x.H,{onSave:e=>{r(e),(0,m.cR)(e)}})});let el=(0,t.jsxs)(j,{children:[(0,t.jsxs)(v,{active:H,onClick:()=>K(e=>!e),children:[H?(0,t.jsx)(c.In,{name:"columns",size:13}):(0,t.jsx)(c.In,{name:"monitor",size:13}),H?"Compare":"Single"]}),(0,t.jsx)(d.UO,{appId:"promptlab",onLoad:(e,o,r)=>{try{let t=JSON.parse(e);null!=t.systemPrompt&&N(t.systemPrompt),null!=t.userPrompt&&D(t.userPrompt),t.model1&&F(t.model1),t.model2&&Z(t.model2),null!=t.compare&&K(t.compare),er(o&&r?{id:o,name:r}:null)}catch{}}}),(0,t.jsxs)(v,{onClick:()=>ee(!0),children:[(0,t.jsx)(c.In,{name:"save",size:13})," Save"]}),(0,t.jsx)(v,{onClick:()=>{l(o),a(!0)},children:(0,t.jsx)(c.In,{name:"settings",size:13})}),e]}),ed=q.length>0?q:H?[J(U,et(U)),J(Y,et(Y))]:[J(U,et(U))];return(0,t.jsxs)(d.PE,{title:"Prompt Lab",sidebar:null,topBarRight:el,children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(b,{children:[(0,t.jsxs)(S,{children:[(0,t.jsxs)(R,{children:["Model",H?" 1":""]}),(0,t.jsx)(k,{value:U,onChange:e=>F(e.target.value),children:en.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),H&&(0,t.jsxs)(S,{children:[(0,t.jsx)(R,{children:"Model 2"}),(0,t.jsx)(k,{value:Y,onChange:e=>Z(e.target.value),children:en.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),(0,t.jsx)(g.W,{systemPrompt:h,userPrompt:O,onSystemChange:N,onUserChange:D,onRun:ea,running:V,canRun:ei})]}),(0,t.jsx)(y,{children:ed.map((e,o)=>(0,t.jsx)($,{children:(0,t.jsx)(f.c,{run:e})},`${e.modelId}-${o}`))})]}),n&&(0,t.jsxs)(C,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(P,{children:"API Keys"}),(0,t.jsx)(A,{onClick:()=>a(!1),children:(0,t.jsx)(c.In,{name:"close",size:18})})]}),(0,t.jsxs)(I,{children:[p.x.map(e=>(0,t.jsxs)(M,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(T,{children:e.label}),(0,t.jsxs)(B,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["Get key ",(0,t.jsx)(c.In,{name:"external-link",size:10})]})]}),(0,t.jsx)(E,{type:"password",placeholder:`Paste your ${e.label} API key`,value:s[e.id],onChange:o=>l(r=>({...r,[e.id]:o.target.value}))})]},e.id)),(0,t.jsx)(_,{onClick:()=>{r(s),(0,m.cR)(s),a(!1)},children:"Save Keys"})]})]}),X&&(0,t.jsx)(c.MJ,{existingDoc:eo??void 0,onSave:es,onUpdate:eo?async()=>{ee(!1);let e=JSON.stringify({systemPrompt:h,userPrompt:O,model1:U,model2:Y,compare:H});await (0,d.mZ)(eo.id,eo.name,e)}:void 0,onCancel:()=>ee(!1)})]})},{}))}}]);