"use strict";(self.webpackChunk_atlantis_promptlab=self.webpackChunk_atlantis_promptlab||[]).push([["362"],{3935(e,o,r){r.r(o),r.d(o,{default:()=>N});var t=r(5723),n=r(7991),i=r(6859),s=r.n(i),a=r(2799),l=r(4764),d=r(18),c=r(8035),p=r(7871),u=r(3758),m=r(7613),x=r(6088),g=r(6220);let f=(0,a.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=s().div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${l.w4.spacing.md};
  height: 100%;
  padding: ${l.w4.spacing.md};
  min-height: 0;
  animation: ${f} 0.25s ease;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`,w=s().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,b=s().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  min-height: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,y=s().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`,$=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,j=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 10px;
  background: ${({active:e})=>e?`${l.w4.colors.accent}20`:"transparent"};
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }
`,v=s().select`
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
`,k=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding-bottom: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,S=s().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
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
  background: ${l.w4.colors.surface};
  border-left: 1px solid ${l.w4.colors.border};
  z-index: 10;
  display: flex;
  flex-direction: column;
  animation: ${f} 0.2s ease;
`,z=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,P=s().h3`
  font-size: 16px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,R=s().div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,I=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,M=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,L=s().label`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,T=s().a`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover { text-decoration: underline; }
`,_=s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color ${l.w4.transitions.base};
  &:focus { border-color: ${l.w4.colors.accent}; }
`,A=s().button`
  padding: 10px;
  background: ${l.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.base};
  &:hover { background: ${l.w4.colors.accentHover}; }
`,B=s().button`
  background: none;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  display: flex;
  &:hover { color: ${l.w4.colors.mainText}; }
`,J=(e,o)=>({modelId:e,provider:o,status:"idle",output:""});function N({topBarRight:e}){let[o,r]=(0,n.useState)(()=>(0,p.Vc)()),[i,s]=(0,n.useState)(!1),[a,f]=(0,n.useState)(o),[O,D]=(0,n.useState)(""),[E,H]=(0,n.useState)(""),[K,U]=(0,n.useState)(!1),[F,Y]=(0,n.useState)(c.L["0"].id),[Z,q]=(0,n.useState)(c.L["3"].id),[G,V]=(0,n.useState)([]),[W,Q]=(0,n.useState)(!1),X=(0,n.useRef)(null),[ee,eo]=(0,n.useState)(!1),[er,et]=(0,n.useState)(null),en=e=>c.L.find(o=>o.id===e)?.provider??"groq",ei=(0,n.useMemo)(()=>c.L.filter(e=>o[e.provider]),[o]),es=!!E.trim()&&ei.length>0,ea=(0,n.useCallback)(async()=>{if(!es||W)return;X.current?.abort();let e=new AbortController;X.current=e;let r=K?[F,Z]:[F];V(r.map(e=>J(e,en(e)))),Q(!0),await Promise.allSettled(r.map(async(r,t)=>{let n=en(r),i=o[n];if(!i)return void V(e=>e.map((e,o)=>o===t?{...e,status:"error",error:`No ${n} API key configured`}:e));V(e=>e.map((e,o)=>o===t?{...e,status:"streaming"}:e));let s=Date.now();try{await (0,u.L)(n,i,r,O,E,e=>{V(o=>o.map((o,r)=>r===t?{...o,output:o.output+e}:o))},e.signal);let o=Date.now()-s;V(e=>e.map((e,r)=>r===t?{...e,status:"done",durationMs:o}:e))}catch(r){if(e.signal.aborted)return;let o=r instanceof Error?r.message:String(r);V(e=>e.map((e,r)=>r===t?{...e,status:"error",error:o}:e))}})),Q(!1)},[es,W,K,F,Z,o,O,E]),el=async e=>{eo(!1);let o=JSON.stringify({systemPrompt:O,userPrompt:E,model1:F,model2:Z,compare:K});er?(await (0,l.mZ)(er.id,e,o),et({id:er.id,name:e})):et({id:await (0,l.KL)("promptlab",e,o),name:e})};if(!(0,p.yr)(o))return(0,t.jsx)(l.PE,{title:"Prompt Lab",sidebar:null,topBarRight:e,children:(0,t.jsx)(m.H,{onSave:e=>{r(e),(0,p.cR)(e)}})});let ed=(0,t.jsxs)($,{children:[(0,t.jsxs)(j,{active:K,onClick:()=>U(e=>!e),children:[K?(0,t.jsx)(d.In,{name:"columns",size:13}):(0,t.jsx)(d.In,{name:"monitor",size:13}),K?"Compare":"Single"]}),(0,t.jsx)(l.UO,{appId:"promptlab",onLoad:(e,o,r)=>{try{let t=JSON.parse(e);null!=t.systemPrompt&&D(t.systemPrompt),null!=t.userPrompt&&H(t.userPrompt),t.model1&&Y(t.model1),t.model2&&q(t.model2),null!=t.compare&&U(t.compare),et(o&&r?{id:o,name:r}:null)}catch{}}}),(0,t.jsxs)(j,{onClick:()=>eo(!0),children:[(0,t.jsx)(d.In,{name:"save",size:13})," Save"]}),(0,t.jsx)(j,{onClick:()=>{f(o),s(!0)},children:(0,t.jsx)(d.In,{name:"settings",size:13})}),e]}),ec=G.length>0?G:K?[J(F,en(F)),J(Z,en(Z))]:[J(F,en(F))];return(0,t.jsxs)(l.PE,{title:"Prompt Lab",sidebar:null,topBarRight:ed,children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)(S,{children:["Model",K?" 1":""]}),(0,t.jsx)(v,{value:F,onChange:e=>Y(e.target.value),children:ei.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),K&&(0,t.jsxs)(k,{children:[(0,t.jsx)(S,{children:"Model 2"}),(0,t.jsx)(v,{value:Z,onChange:e=>q(e.target.value),children:ei.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.label," (",e.provider,")"]},e.id))})]}),(0,t.jsx)(x.W,{systemPrompt:O,userPrompt:E,onSystemChange:D,onUserChange:H,onRun:ea,running:W,canRun:es})]}),(0,t.jsx)(b,{children:ec.map((e,o)=>(0,t.jsx)(y,{children:(0,t.jsx)(g.c,{run:e})},`${e.modelId}-${o}`))})]}),i&&(0,t.jsxs)(C,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(P,{children:"API Keys"}),(0,t.jsx)(B,{onClick:()=>s(!1),children:(0,t.jsx)(d.In,{name:"close",size:18})})]}),(0,t.jsxs)(R,{children:[c.x.map(e=>(0,t.jsxs)(I,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(L,{children:e.label}),(0,t.jsxs)(T,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["Get key ",(0,t.jsx)(d.In,{name:"external-link",size:10})]})]}),(0,t.jsx)(_,{type:"password",placeholder:`Paste your ${e.label} API key`,value:a[e.id],onChange:o=>f(r=>({...r,[e.id]:o.target.value}))})]},e.id)),(0,t.jsx)(A,{onClick:()=>{r(a),(0,p.cR)(a),s(!1)},children:"Save Keys"})]})]}),ee&&(0,t.jsx)(d.MJ,{existingDoc:er??void 0,onSave:el,onUpdate:er?async()=>{eo(!1);let e=JSON.stringify({systemPrompt:O,userPrompt:E,model1:F,model2:Z,compare:K});await (0,l.mZ)(er.id,er.name,e)}:void 0,onCancel:()=>eo(!1)})]})}}}]);