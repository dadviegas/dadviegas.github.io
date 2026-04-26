"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["767"],{7637(e,t,n){n.d(t,{u:()=>$});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(4764),l=n(5030),c=n(7711);let d=i().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.md};
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
`,p=i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,f=i().span`
  font-size: 13px;
  font-weight: 500;
  color: ${s.w4.colors.mainText};
  flex: 1;
`,m=i().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${s.w4.spacing.sm};
`,g=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,u=i().span`
  font-size: 18px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({positive:e})=>e?"#7fb77e":s.w4.colors.danger};
`,h=i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,x=i().label`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${s.w4.colors.mainTextMuted};
  white-space: nowrap;
`,b=i().input`
  flex: 1;
  min-width: 0;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 4px 8px;
  height: 30px;
  &:focus {
    outline: none;
    border-color: ${s.w4.colors.accent};
  }
`;function y({member:e,memberIndex:t,data:n,memberColor:r,t:i,onSave:s}){let w=(0,c.allowanceBalance)(e,n.expenses,n.income),[$,v]=(0,a.useState)(null!=e.weeklyAllowance?String(e.weeklyAllowance):""),k={...e,color:r};return(0,o.jsxs)(d,{children:[(0,o.jsxs)(p,{children:[(0,o.jsx)(l.eu,{member:k,size:20}),(0,o.jsx)(f,{children:e.name})]}),(0,o.jsxs)(m,{children:[(0,o.jsx)(g,{children:i("finance.allowance.balance")}),(0,o.jsxs)(u,{positive:w>=0,children:[w>=0?"+":"","€",Math.abs(w).toFixed(2)]})]}),(0,o.jsxs)(h,{children:[(0,o.jsx)(x,{htmlFor:`allowance-${e.id}`,children:i("finance.allowance.weeklyLabel")}),(0,o.jsx)(b,{id:`allowance-${e.id}`,type:"number",min:"0",step:"0.01",placeholder:"0.00",value:$,onChange:e=>v(e.target.value)}),(0,o.jsx)(l.$n,{variant:"accent",style:{height:30,flexShrink:0},onClick:()=>{let t=parseFloat($);s(e.id,isNaN(t)||t<=0?void 0:t)},children:i("finance.allowance.save")})]})]})}let w=i().p`
  font-size: 13px;
  color: ${s.w4.colors.mainTextMuted};
  padding: ${s.w4.spacing.sm} 0;
`;function $({data:e,getMemberColor:t,t:n,onSaveMember:a}){let r=e.familyMembers.filter(e=>"child"===e.role);return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:s.w4.spacing.sm},children:[(0,o.jsx)(l.YZ,{children:n("finance.allowance.sectionTitle")}),0===r.length?(0,o.jsx)(w,{children:n("finance.allowance.noChildren")}):r.map(r=>{let i=e.familyMembers.indexOf(r);return(0,o.jsx)(y,{member:r,memberIndex:i,data:e,memberColor:t(r,i),t:n,onSave:a},r.id)})]})}},8501(e,t,n){n.d(t,{J:()=>H});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(8170),d=n(5030),p=n(9454),f=n(7711),m=n(948);let g="#fb923c",u="#f85149",h="#facc15",x=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${g};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  animation: ${x} 0.25s ease both;
  min-width: 0;
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${g};
  }
`,y=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,w=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({tone:e})=>"overdue"===e?u:"upcoming"===e?h:l.w4.colors.mainTextMuted};
  margin: ${l.w4.spacing.md} 0 ${l.w4.spacing.xs};

  &:first-of-type {
    margin-top: 0;
  }
`,$=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px 0;
  border-top: 1px solid ${l.w4.colors.border};
  position: relative;

  &:first-of-type {
    border-top: none;
  }

  &:hover .bill-delete {
    opacity: 1;
  }
`,v=i().div`
  flex: 1;
  min-width: 0;
`,k=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1px;
  flex-wrap: wrap;
`;i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
`;let j=i().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  flex-shrink: 0;
`,z=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,T=i().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${g};
  background: ${g}18;
  border: 1px solid ${g}44;
  border-radius: ${l.w4.borderRadius.sm};
  padding: 3px 8px;
  cursor: pointer;
  min-height: 28px;
  white-space: nowrap;
  transition: background 120ms ease, border-color 120ms ease;

  &:hover {
    background: ${g}30;
    border-color: ${g};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,S=i().button`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  transition: opacity 120ms ease, color 120ms ease;
  min-height: 28px;
  min-width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover { color: ${u}; }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,C=i().div`
  height: 1px;
  background: ${l.w4.colors.border};
  margin: ${l.w4.spacing.sm} 0;
`,F=i().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${l.w4.colors.mainTextMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${l.w4.spacing.xs} 0;
  margin-top: ${l.w4.spacing.xs};
  transition: color 120ms ease;
  min-height: 36px;

  &:hover { color: ${l.w4.colors.mainText}; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,R=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} 0 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.sm};
`,A=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,D=i().input`
  flex: 1;
  min-width: 120px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};
  font-variant-numeric: tabular-nums;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,E=i().select`
  flex: 1;
  min-width: 120px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};

  &:focus { border-color: ${l.w4.colors.accent}; }
`,I=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,B=i().button`
  flex: 1;
  min-height: 36px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({primary:e})=>e?g:l.w4.colors.border};
  background: ${({primary:e})=>e?`${g}22`:"transparent"};
  color: ${({primary:e})=>e?g:l.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: ${l.w4.typography.fontFamily};

  &:disabled { opacity: 0.4; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,L=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${l.w4.spacing.xs} 0;
  margin-top: ${l.w4.spacing.xs};
  transition: color 120ms ease;
  min-height: 36px;

  &:hover { color: ${l.w4.colors.accent}; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`;function N({data:e,onSave:t,onCancel:n,t:r,locale:i}){let[s,l]=(0,a.useState)(""),[c,d]=(0,a.useState)(""),[p,m]=(0,a.useState)(""),[g,u]=(0,a.useState)(""),[h,x]=(0,a.useState)(""),[b,y]=(0,a.useState)("");async function w(){let n=parseFloat(c);if(!s.trim()||isNaN(n)||n<=0||!p)return;let o=(0,f.addBill)(e,{payee:s.trim(),amount:n,dueDate:p,categoryId:g||void 0,memberId:h||void 0,notes:b.trim()||void 0});(0,f.pushUndo)({id:`bill-add-${Date.now()}`,snapshot:e,labelKey:"finance.undo.label.added",ts:Date.now()}),await t(o)}let $=s.trim().length>0&&parseFloat(c)>0&&p.length>0;return(0,o.jsxs)(R,{children:[(0,o.jsxs)(A,{children:[(0,o.jsx)(D,{type:"text",placeholder:r("finance.bills.payee"),value:s,onChange:e=>l(e.target.value),autoFocus:!0,"aria-label":r("finance.bills.payee")}),(0,o.jsx)(D,{type:"number",min:"0.01",step:"0.01",placeholder:r("finance.bills.amount"),value:c,onChange:e=>d(e.target.value),"aria-label":r("finance.bills.amount"),style:{maxWidth:120}})]}),(0,o.jsxs)(A,{children:[(0,o.jsx)(D,{type:"date",placeholder:r("finance.bills.dueDate"),value:p,onChange:e=>m(e.target.value),"aria-label":r("finance.bills.dueDate"),min:new Date().toISOString().slice(0,10)}),(0,o.jsxs)(E,{value:g,onChange:e=>u(e.target.value),"aria-label":r("finance.bills.category"),children:[(0,o.jsx)("option",{value:"",children:r("finance.bills.category")}),f.DEFAULT_CATEGORIES.map(e=>(0,o.jsx)("option",{value:e.id,children:(0,f.categoryLabel)(e,i)},e.id))]})]}),e.familyMembers.length>0&&(0,o.jsxs)(A,{children:[(0,o.jsxs)(E,{value:h,onChange:e=>x(e.target.value),"aria-label":r("finance.bills.member"),children:[(0,o.jsx)("option",{value:"",children:r("finance.bills.member")}),e.familyMembers.map(e=>(0,o.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,o.jsx)(D,{type:"text",placeholder:r("finance.bills.notes"),value:b,onChange:e=>y(e.target.value),"aria-label":r("finance.bills.notes")})]}),(0,o.jsxs)(I,{children:[(0,o.jsx)(B,{type:"button",onClick:n,children:r("finance.bills.cancel")}),(0,o.jsx)(B,{type:"button",primary:!0,disabled:!$,onClick:()=>{w()},children:r("finance.bills.save")})]})]})}function P({bill:e,data:t,onSave:n,t:a}){let r,i=(0,f.daysUntilDue)(e);async function s(){let o=(0,f.markBillPaid)(t,e.id);(0,f.pushUndo)({id:`bill-paid-${Date.now()}`,snapshot:t,labelKey:"finance.undo.label.edited",ts:Date.now()}),await n(o)}async function l(){let o=(0,f.deleteBill)(t,e.id);(0,f.pushUndo)({id:`bill-del-${Date.now()}`,snapshot:t,labelKey:"finance.undo.label.deleted",ts:Date.now()}),await n(o)}return(0,o.jsxs)($,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(k,{children:e.payee}),(0,o.jsxs)(M,{children:[(0,o.jsx)(d.Ex,{tone:"neutral",style:i<0?{color:u,borderColor:`${u}44`}:0===i?{color:h,borderColor:`${h}44`}:i<=3?{color:g,borderColor:`${g}44`}:{},children:(r=(0,f.daysUntilDue)(e))<0?a("finance.bills.overdueBy",{n:Math.abs(r)}):0===r?a("finance.bills.dueToday"):1===r?a("finance.bills.due1"):3===r?a("finance.bills.due3"):e.dueDate}),e.paid&&(0,o.jsx)(d.Ex,{tone:"accent",children:a("finance.bills.paid")})]})]}),(0,o.jsxs)(z,{children:[(0,o.jsxs)(j,{children:["€",e.amount.toFixed(2)]}),!e.paid&&(0,o.jsx)(T,{type:"button",onClick:()=>{s()},"aria-label":`${a("finance.bills.markPaid")} — ${e.payee}`,children:a("finance.bills.markPaid")}),(0,o.jsx)(S,{type:"button",className:"bill-delete",title:a("finance.bills.delete"),"aria-label":`${a("finance.bills.delete")} — ${e.payee}`,onClick:()=>{l()},children:(0,o.jsx)(d.In,{name:"trash",size:13})})]})]})}function H(){let[e]=(0,c.Ym)(),t=(0,a.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{data:n,loaded:r,save:i}=(0,f.useFinance)(),[s,l]=(0,a.useState)(!1),[g,h]=(0,a.useState)(!1);if(!r||null===n)return(0,o.jsxs)(b,{children:[(0,o.jsx)(d.YZ,{children:t("finance.bills.title")}),(0,o.jsx)(p.YG,{mode:"loading",label:t("loading")})]});let x=n.bills??[],$=new Date,v=(0,f.overdueBills)(x,$),k=(0,f.upcomingBills)(x,$),M=x.filter(e=>!e.paid).sort((e,t)=>e.dueDate.localeCompare(t.dueDate)),j=x.filter(e=>e.paid).sort((e,t)=>(t.paidAt??0)-(e.paidAt??0)),z=M.filter(e=>!v.find(t=>t.id===e.id)&&!k.find(t=>t.id===e.id));async function T(e){await i(e)}let S=x.length>0;return(0,o.jsxs)(b,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(d.YZ,{children:t("finance.bills.title")}),v.length>0&&(0,o.jsx)(d.Ex,{tone:"neutral",style:{color:u,borderColor:`${u}44`},children:v.length})]}),S||s?(0,o.jsxs)(o.Fragment,{children:[v.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{tone:"overdue",children:t("finance.bills.overdue")}),v.map(e=>(0,o.jsx)(P,{bill:e,data:n,onSave:T,t:t},e.id))]}),k.length>0&&(0,o.jsxs)(o.Fragment,{children:[v.length>0&&(0,o.jsx)(C,{}),(0,o.jsx)(w,{tone:"upcoming",children:t("finance.bills.upcoming")}),k.map(e=>(0,o.jsx)(P,{bill:e,data:n,onSave:T,t:t},e.id))]}),(z.length>0||j.length>0)&&(0,o.jsxs)(o.Fragment,{children:[(v.length>0||k.length>0)&&(0,o.jsx)(C,{}),(0,o.jsxs)(F,{type:"button",onClick:()=>h(e=>!e),"aria-expanded":g,children:[g?"▾":"▸"," ",t("finance.bills.all")," (",z.length+j.length,")"]}),g&&(0,o.jsxs)(o.Fragment,{children:[z.map(e=>(0,o.jsx)(P,{bill:e,data:n,onSave:T,t:t},e.id)),j.map(e=>(0,o.jsx)(P,{bill:e,data:n,onSave:T,t:t},e.id))]})]})]}):(0,o.jsx)(p.YG,{mode:"empty",label:t("finance.bills.empty")}),s?(0,o.jsx)(N,{data:n,onSave:async e=>{await T(e),l(!1)},onCancel:()=>l(!1),t:t,locale:e}):(0,o.jsxs)(L,{type:"button",onClick:()=>l(!0),children:[(0,o.jsx)(d.In,{name:"plus",size:14,"aria-hidden":!0}),t("finance.bills.add")]})]})}},2167(e,t,n){n.d(t,{X:()=>h});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764);let c=(0,s.keyframes)`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`,d=(0,s.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,p=i().div`
  position: fixed;
  top: var(--topbar-height, ${56}px);
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: ${l.w4.zIndex.modal??1e3};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${d} 0.18s ease both;

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
    padding: ${l.w4.spacing.lg};
  }
`,f=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} 0 0;
  border-left: 2px solid #7fb77e;
  width: 100%;
  max-width: ${({maxWidth:e})=>e}px;
  max-height: 80dvh;
  overflow-y: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  /* Respect iOS home indicator */
  padding-bottom: max(0px, env(safe-area-inset-bottom));
  animation: ${c} 0.22s ease both;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
    max-height: calc(100dvh - ${56}px - ${l.w4.spacing.xl});
  }
`,m=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${l.w4.spacing.sm} 0 0;
  flex-shrink: 0;
  touch-action: none; /* suppress native scroll on grabber area */
  cursor: grab;

  @media (min-width: ${l.w4.breakpoints.md}) {
    /* Keep grabber visible even on desktop — it doubles as a visual separator */
    cursor: default;
    pointer-events: none;
  }
`,g=i().div`
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: ${l.w4.colors.mainTextMuted};
  opacity: 0.4;
`,u=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function h({open:e,onClose:t,children:n,maxWidth:r=480,ariaLabel:i}){let s=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!e)return;let n=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e,t]),(0,a.useEffect)(()=>{if(!e||!s.current)return;let t=s.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t?.focus()},[e]);let l=(0,a.useRef)(null),c=(0,a.useCallback)(e=>{l.current={y:e.touches[0].clientY}},[]),d=(0,a.useCallback)(e=>{if(!l.current||!s.current)return;let n=e.changedTouches[0].clientY-l.current.y;l.current=null,n<=0||n/s.current.getBoundingClientRect().height>.3&&t()},[t]),x=(0,a.useRef)(null),b=(0,a.useCallback)(e=>{x.current={y:e.clientY}},[]),y=(0,a.useCallback)(e=>{if(!x.current||!s.current)return;let n=e.clientY-x.current.y;x.current=null,n<=0||n/s.current.getBoundingClientRect().height>.3&&t()},[t]);return e?(0,o.jsx)(p,{onClick:t,role:"dialog","aria-modal":"true","aria-label":i,children:(0,o.jsxs)(f,{ref:s,maxWidth:r,onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(m,{onTouchStart:c,onTouchEnd:d,onPointerDown:b,onPointerUp:y,"aria-hidden":"true",children:(0,o.jsx)(g,{})}),(0,o.jsx)(u,{children:n})]})}):null}},6376(e,t,n){n.d(t,{S:()=>S});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(5030),d=n(7711);let p=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=i().div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* Respects iOS home indicator and Android nav bar. */
  padding-bottom: env(safe-area-inset-bottom, 0px);
  z-index: 200;
  background: ${l.w4.colors.surface};
  border-top: 1px solid ${l.w4.colors.border};
  animation: ${p} 0.22s ease both;
  /* Shadow to visually separate from content. */
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.32);
`,m=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  /* safe area insets for iOS home indicator */
  padding-left: max(${l.w4.spacing.md}, env(safe-area-inset-left));
  padding-right: max(${l.w4.spacing.md}, env(safe-area-inset-right));

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.sm} ${l.w4.spacing.lg};
  }
`,g=i().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  flex-shrink: 0;
`,u=i().div`
  flex-shrink: 0;
  width: ${l.w4.spacing.sm};
`,h=i().div`
  position: relative;
`,x=i().div`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 4px 8px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
`,b=i().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 400;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
  }
`,y=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid #7fb77e;
  width: 100%;
  max-width: 420px;
  max-height: 80dvh;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  animation: ${p} 0.2s ease both;
`,w=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,$=i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${l.w4.spacing.xs};
`,v=i().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: ${({selected:e,catColor:t})=>e?`${t}20`:l.w4.colors.mainBg};
  border: 1px solid ${({selected:e,catColor:t})=>e?t:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  cursor: pointer;
  text-align: left;
  min-height: 44px;
  transition: border-color 120ms ease, background 120ms ease;

  &:hover {
    border-color: ${({catColor:e})=>e};
    background: ${({catColor:e})=>`${e}14`};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,k=i().span`
  font-size: 16px;
  flex-shrink: 0;
`,M=i().span`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,j=i().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.xs};
`,z=i()(y)`
  gap: ${l.w4.spacing.md};
`,T=i().div`
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.5;
`;function S({selectionCount:e,visibleIds:t,selectedIds:n,categories:r,locale:i,t:s,onCancel:p,onSelectAll:C,onCategorise:F,onDelete:R,onMarkReimbursed:A}){let[D,E]=(0,a.useState)(!1),[I,B]=(0,a.useState)(""),[L,N]=(0,a.useState)(!1),[P,H]=(0,a.useState)(!1),[O,W]=(0,a.useState)(!1),Y=(0,a.useRef)(null);(0,a.useEffect)(()=>{D||B("")},[D]),(0,a.useEffect)(()=>{let e=e=>{if("Escape"===e.key){if(D)return void E(!1);if(L)return void N(!1);P&&H(!1)}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[D,L,P]);let K=(0,a.useCallback)(()=>{I&&(F(I),E(!1))},[I,F]),V=(0,a.useCallback)(()=>{R(),N(!1)},[R]),G=(0,a.useCallback)(()=>{A(),H(!1)},[A]),U=t.length>0&&t.every(e=>n.has(e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{role:"toolbar","aria-label":s("finance.bulk.barLabel"),children:(0,o.jsxs)(m,{children:[(0,o.jsx)(g,{children:s("finance.bulk.selected",{n:e})}),(0,o.jsx)(c.$n,{variant:"ghost",style:{height:36,fontSize:12},onClick:U?p:C,children:s(U?"finance.bulk.deselectAll":"finance.bulk.selectAll")}),(0,o.jsx)(u,{}),(0,o.jsx)(c.$n,{variant:"ghost",style:{height:36,fontSize:12},disabled:0===e,onClick:()=>E(!0),children:s("finance.bulk.categorise")}),(0,o.jsx)(c.$n,{variant:"ghost",style:{height:36,fontSize:12},disabled:0===e,onClick:()=>H(!0),children:s("finance.bulk.reimburse")}),(0,o.jsxs)(h,{onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),onFocus:()=>W(!0),onBlur:()=>W(!1),children:[(0,o.jsx)("button",{ref:Y,type:"button",disabled:!0,style:{height:36,padding:"0 12px",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,color:l.w4.colors.mainTextMuted,fontSize:12,fontFamily:l.w4.typography.fontFamily,cursor:"not-allowed",opacity:.45},"aria-label":s("finance.bulk.tagComingSoon"),children:s("finance.bulk.tag")}),O&&(0,o.jsx)(x,{role:"tooltip",children:s("finance.bulk.tagComingSoon")})]}),(0,o.jsx)(c.$n,{variant:"danger",style:{height:36,fontSize:12},disabled:0===e,onClick:()=>N(!0),children:s("finance.bulk.delete")}),(0,o.jsx)(c.$n,{variant:"ghost",style:{height:36,fontSize:12},onClick:p,children:s("finance.bulk.cancel")})]})}),D&&(0,o.jsx)(b,{onClick:()=>E(!1),children:(0,o.jsxs)(y,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(w,{children:s("finance.bulk.categoriseTitle")}),(0,o.jsx)($,{children:r.map(e=>(0,o.jsxs)(v,{type:"button",selected:I===e.id,catColor:e.color,onClick:()=>B(e.id),children:[(0,o.jsx)(k,{"aria-hidden":!0,children:(0,c.n6)(e.icon)?(0,o.jsx)(c.In,{name:e.icon,size:16,"aria-hidden":!0}):e.icon}),(0,o.jsx)(M,{children:(0,d.categoryLabel)(e,i)})]},e.id))}),(0,o.jsxs)(j,{children:[(0,o.jsx)(c.$n,{variant:"ghost",onClick:()=>E(!1),style:{height:36},children:s("finance.member.cancel")}),(0,o.jsx)(c.$n,{variant:"primary",disabled:!I,onClick:K,style:{height:36},children:s("finance.bulk.applyCategory")})]})]})}),L&&(0,o.jsx)(b,{onClick:()=>N(!1),children:(0,o.jsxs)(z,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(w,{children:s("finance.bulk.deleteTitle")}),(0,o.jsx)(T,{children:s("finance.bulk.deleteConfirm",{n:e})}),(0,o.jsxs)(j,{children:[(0,o.jsx)(c.$n,{variant:"ghost",onClick:()=>N(!1),style:{height:36},children:s("finance.member.cancel")}),(0,o.jsx)(c.$n,{variant:"danger",onClick:V,style:{height:36},children:s("finance.bulk.deleteConfirmBtn")})]})]})}),P&&(0,o.jsx)(b,{onClick:()=>H(!1),children:(0,o.jsxs)(z,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(w,{children:s("finance.bulk.reimburseTitle")}),(0,o.jsx)(T,{children:s("finance.bulk.reimburseConfirm",{n:e})}),(0,o.jsxs)(j,{children:[(0,o.jsx)(c.$n,{variant:"ghost",onClick:()=>H(!1),style:{height:36},children:s("finance.member.cancel")}),(0,o.jsx)(c.$n,{variant:"primary",onClick:G,style:{height:36},children:s("finance.bulk.reimburseConfirmBtn")})]})]})})]})}},9419(e,t,n){n.d(t,{b:()=>h});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(4764);let l="#58a6ff",c="#facc15",d="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",p=i().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,f=i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.xs};
  padding: ${s.w4.spacing.xs} ${s.w4.spacing.sm};
  background: rgba(250, 204, 21, 0.08);
  border: 1px solid rgba(250, 204, 21, 0.24);
  border-radius: ${s.w4.borderRadius.md};
  font-size: 11px;
  font-family: ${d};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c};
`,m=i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.md};
  font-size: 11px;
  font-family: ${d};
  color: ${s.w4.colors.mainTextMuted};
`,g=i().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({color:e})=>e};

  &::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 1.5px;
    background: ${({color:e})=>e};
    ${({dashed:e})=>e?"background: repeating-linear-gradient(90deg, currentColor 0 4px, transparent 4px 7px);":""}
  }
`;function u(e){let t=Math.abs(e);return(e<0?"-":"")+(t>=1e3?`€${(t/1e3).toFixed(1)}k`:`€${Math.round(t)}`)}function h({forecast:e,firstNegDate:t,t:n,locale:r,height:i=120}){let x=(0,a.useId)();if(0===e.length)return null;let b=344,y=i-12-28,w=e.map(e=>e.balance),$=Math.min(...w,0),v=Math.max(...w,0)-$||1;function k(e){return 12+y-(e-$)/v*y}let M=b/Math.max(e.length-1,1),j=e.filter(e=>!e.isProjected),z=e.filter(e=>e.isProjected),T=j.length-1,S=e.map((e,t)=>[8+t*M,k(e.balance)]),C=S.slice(0,j.length).map(e=>e.join(",")).join(" "),F=S.slice(Math.max(T,0)).map(e=>e.join(",")).join(" "),R=k(0),A=(0,a.useMemo)(()=>{let t=e.slice(Math.max(T,0));if(t.length<2)return null;let n=Math.max(T,0),o=t.map((e,t)=>[8+(n+t)*M,k(e.balance)]);if(!t.some(e=>e.balance<0))return null;let a=[],r=!1;for(let e=0;e<o.length;e++){let[n,i]=o[e],s=t[e]?.balance??0;if(s<0&&!r){let l=t[e-1]?.balance??0,c=o[e-1]?.[0]??n;if(l>=0&&e>0){let e=c+l/(l-s)*(n-c);a.push(`M${e},${R} L${n},${i}`)}else a.push(`M${n},${i}`);r=!0}else if(s<0&&r)a.push(`L${n},${i}`);else if(s>=0&&r){let i=t[e-1]?.balance??0,l=o[e-1]?.[0]??n;if(i<0){let e=l+Math.abs(i)/(Math.abs(i)+s)*(n-l);a.push(`L${e},${R}`)}r=!1}}if(r){let e=o[o.length-1];e&&a.push(`L${e[0]},${R}`)}return a.join(" ")},[e,T]),D=(0,a.useMemo)(()=>{let t=new Set,n=[];return(e.forEach((e,o)=>{let a=e.date.slice(0,7);!t.has(a)&&(t.add(a),n.push({x:8+o*M,label:function(e,t){let[n,o]=e.split("-").map(Number);return new Date(n,o-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"})}(e.date,r),key:a}))}),n.length>=9)?n.filter((e,t)=>t%2==0):n},[e,r]),E=T>=0?8+T*M:null,I=j[j.length-1]?.balance??0,B=z[z.length-1]?.balance??I;return(0,o.jsxs)(p,{children:[t&&(0,o.jsxs)(f,{role:"alert",children:["⚠ ",n("finance.forecast.projectedNegative")," ",function(e,t){let[n,o,a]=e.split("-").map(Number);return new Date(n,o-1,a).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"2-digit",month:"2-digit"})}(t,r)]}),(0,o.jsxs)("svg",{viewBox:`0 0 360 ${i}`,style:{width:"100%",height:i,display:"block"},preserveAspectRatio:"none","aria-hidden":"true",children:[(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:`${x}-clip`,children:(0,o.jsx)("rect",{x:0,y:0,width:360,height:i})})}),A&&(0,o.jsx)("path",{d:A,fill:c,opacity:.12,clipPath:`url(#${x}-clip)`}),null!==E&&(0,o.jsx)("rect",{x:E,y:12,width:360-E-8,height:y,fill:s.w4.colors.accent,opacity:.03}),$<0&&(0,o.jsx)("line",{x1:8,x2:8+b,y1:R,y2:R,stroke:c,strokeWidth:"0.75",strokeDasharray:"3 3",opacity:.5}),(0,o.jsx)("line",{x1:8,x2:8+b,y1:12+y,y2:12+y,stroke:s.w4.colors.border,strokeWidth:"1"}),C&&(0,o.jsx)("polyline",{points:C,stroke:l,strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",clipPath:`url(#${x}-clip)`}),F&&z.length>0&&(0,o.jsx)("polyline",{points:F,stroke:l,strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"4 3",opacity:.75,clipPath:`url(#${x}-clip)`}),null!==E&&(0,o.jsx)("line",{x1:E,x2:E,y1:12,y2:12+y,stroke:s.w4.colors.border,strokeWidth:"1",strokeDasharray:"2 3"}),(0,o.jsx)("g",{fontFamily:d,fontSize:"9",fill:"#8b949e",style:{fontVariantNumeric:"tabular-nums"},children:D.map(e=>(0,o.jsx)("text",{x:e.x,y:i-6,textAnchor:"middle",children:e.label},e.key))}),(0,o.jsx)("text",{fontFamily:d,fontSize:"9",fill:l,x:null!==E?E-3:8,y:20,textAnchor:"end",style:{fontVariantNumeric:"tabular-nums"},children:u(I)}),z.length>0&&(0,o.jsx)("text",{fontFamily:d,fontSize:"9",fill:B<0?c:l,x:8+b,y:Math.max(20,Math.min(12+y-2,k(B)-3)),textAnchor:"end",style:{fontVariantNumeric:"tabular-nums"},children:u(B)})]}),(0,o.jsxs)(m,{children:[(0,o.jsx)(g,{color:l,children:n("finance.forecast.historical")}),(0,o.jsx)(g,{color:l,dashed:!0,children:n("finance.forecast.projected")})]})]})}},341(e,t,n){n.d(t,{z:()=>Q});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(8170),d=n(5030),p=n(9454),f=n(7711),m=n(948);let g="#7fb77e",u="#facc15",h="#f85149",x=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${g};
  overflow: hidden;
  animation: ${x} 0.25s ease both;
`,y=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.md} ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,w=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
`,$=i().button`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 3px 8px;
  cursor: pointer;
  transition: border-color 120ms ease, color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
    color: ${l.w4.colors.mainText};
  }

  &.active {
    border-color: ${g};
    color: ${g};
  }
`,v=i().button`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${g};
  background: none;
  border: none;
  cursor: pointer;
  padding: 3px 0;
  opacity: 0.8;
  transition: opacity 120ms ease;

  &:hover { opacity: 1; }
`,k=i().div`
  padding: 0 ${l.w4.spacing.md} ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,M=i().div`
  border-radius: ${l.w4.borderRadius.sm};
  padding: 6px 8px;
  cursor: pointer;
  transition: background 120ms ease;
  border: 1px solid transparent;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    border-color: ${l.w4.colors.border};
  }

  ${({over:e})=>e?`border-left: 2px solid ${h}; padding-left: 6px;`:""}
`,j=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,z=i().span`
  font-size: 14px;
  line-height: 1;
  flex-shrink: 0;
`,T=i().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,S=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,C=i().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: ${({muted:e})=>e?l.w4.colors.mainTextMuted:l.w4.colors.mainText};
  white-space: nowrap;
`,F=i().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
`,R=i().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 2px 5px;
  border-radius: ${l.w4.borderRadius.sm};
  flex-shrink: 0;

  ${({status:e})=>"over"===e?`background: ${h}22; color: ${h};`:"warn"===e?`background: ${u}22; color: ${u};`:`background: ${g}18; color: ${g};`}
`,A=i().div`
  margin-top: 5px;
  height: 4px;
  border-radius: 2px;
  background: ${l.w4.colors.border};
  overflow: hidden;
`,D=i().div`
  height: 100%;
  width: ${({pct:e})=>Math.min(e,100)}%;
  border-radius: 2px;
  background: ${({status:e})=>"over"===e?h:"warn"===e?u:g};
  transition: width 200ms ease;
`,E=i().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 3px;
`,I=i().div`
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid ${l.w4.colors.border};
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
  align-items: center;
`,B=i().input`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  width: 90px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  padding: 4px 8px;
  outline: none;
  transition: border-color 120ms ease;

  &:focus { border-color: ${g}; }
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button { opacity: 0.5; }
`,L=i().label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  user-select: none;

  input[type="checkbox"] {
    accent-color: ${g};
    width: 14px;
    height: 14px;
  }
`,N=i().div`
  display: flex;
  gap: ${l.w4.spacing.xs};
  margin-left: auto;
`,P=i().button`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: ${l.w4.borderRadius.sm};
  border: 1px solid ${({danger:e})=>e?h:l.w4.colors.border};
  background: none;
  color: ${({danger:e})=>e?h:l.w4.colors.mainText};
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;

  &:hover {
    background: ${({danger:e})=>e?`${h}18`:l.w4.colors.sidebarHover};
    border-color: ${({danger:e})=>e?h:l.w4.colors.mainTextMuted};
  }
`,H=i().button`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: ${l.w4.borderRadius.sm};
  border: 1px solid ${g};
  background: none;
  color: ${g};
  cursor: pointer;
  transition: background 120ms ease;

  &:hover { background: ${g}18; }
`,O=i().div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`,W=i().table`
  width: 100%;
  min-width: 400px;
  border-collapse: collapse;
`,Y=i().thead`
  tr th {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${l.w4.colors.mainTextMuted};
    padding: 4px 8px;
    text-align: left;
    border-bottom: 1px solid ${l.w4.colors.border};

    &:last-child { text-align: right; }
  }
`,K=i().tbody`
  tr {
    border-bottom: 1px solid ${l.w4.colors.border};

    &:last-child { border-bottom: none; }

    td {
      padding: 6px 8px;
      font-size: 13px;
      color: ${l.w4.colors.mainText};
      vertical-align: middle;
    }
  }
`,V=i().div`
  display: flex;
  justify-content: flex-end;
  padding: ${l.w4.spacing.sm} 0 0;
`,G=i().div`
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-top: 1px solid ${l.w4.colors.border};
`,U=i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 6px;
  margin-top: 8px;
`,q=i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 6px 8px;
  cursor: pointer;
  text-align: left;
  transition: border-color 120ms ease, background 120ms ease;

  &:hover {
    border-color: ${g};
    background: ${g}0d;
  }
`;function _(e,t){let n=f.DEFAULT_CATEGORIES.find(t=>t.id===e);return n?(0,f.categoryLabel)(n,t):e}function Z(e){return f.DEFAULT_CATEGORIES.find(t=>t.id===e)?.icon??"coins"}function X({progress:e,locale:t,t:n,onSave:r,onRemove:i}){let{categoryId:s,spent:c,budget:p,carryover:f,percent:m,status:g}=e,[u,h]=(0,a.useState)(!1),[x,b]=(0,a.useState)(String(p-f)),[y,w]=(0,a.useState)(!1),[$,v]=(0,a.useState)(!1),k=(0,a.useCallback)(()=>{$||(b(String(p-f)),v(!0)),h(e=>!e)},[$,p,f]),O=(0,a.useCallback)(()=>{let e=parseFloat(x.replace(",","."));isNaN(e)||e<0||(r(s,{amount:e,rollover:y}),h(!1))},[x,y,s,r]),W=_(s,t),Y=Z(s);return(0,o.jsxs)(M,{over:"over"===g,onClick:u?void 0:k,children:[(0,o.jsxs)(j,{children:[(0,o.jsx)(z,{children:(0,d.n6)(Y)?(0,o.jsx)(d.In,{name:Y,size:16,"aria-hidden":!0}):(0,o.jsx)("span",{"aria-hidden":!0,children:Y})}),(0,o.jsx)(T,{children:W}),(0,o.jsxs)(S,{children:[(0,o.jsxs)(C,{children:["€",Math.round(c)]}),(0,o.jsx)(F,{children:"/"}),(0,o.jsxs)(C,{muted:!0,children:["€",Math.round(p)]}),(0,o.jsx)(R,{status:g,children:n("over"===g?"finance.categoryBudgets.statusOver":"warn"===g?"finance.categoryBudgets.statusWarn":"finance.categoryBudgets.statusGood")}),(0,o.jsx)("span",{style:{cursor:"pointer",color:l.w4.colors.mainTextMuted,fontSize:12},onClick:e=>{e.stopPropagation(),k()},"aria-label":n("finance.categoryBudgets.edit"),children:u?"▴":"▾"})]})]}),(0,o.jsx)(A,{children:(0,o.jsx)(D,{pct:m,status:g})}),f>0&&(0,o.jsxs)(E,{children:["+€",f.toFixed(2)," ",n("finance.categoryBudgets.carryoverNote")]}),u&&(0,o.jsxs)(I,{onClick:e=>e.stopPropagation(),children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,o.jsx)("span",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:"€"}),(0,o.jsx)(B,{type:"number",min:"0",step:"10",value:x,onChange:e=>b(e.target.value),"aria-label":n("finance.categoryBudgets.amount"),autoFocus:!0})]}),(0,o.jsxs)(L,{children:[(0,o.jsx)("input",{type:"checkbox",checked:y,onChange:e=>w(e.target.checked)}),n("finance.categoryBudgets.rollover")]}),(0,o.jsxs)(N,{children:[(0,o.jsx)(P,{type:"button",danger:!0,onClick:()=>{i(s),h(!1)},children:n("finance.categoryBudgets.remove")}),(0,o.jsx)(P,{type:"button",onClick:()=>h(!1),children:n("finance.categoryBudgets.cancel")}),(0,o.jsx)(H,{type:"button",onClick:O,children:n("finance.categoryBudgets.save")})]})]})]})}function J({catId:e,entry:t,locale:n,t:r,onChange:i,onRemove:s}){let l,[c,p]=(0,a.useState)(String(t.amount)),[f,m]=(0,a.useState)(t.rollover??!1),u=(0,a.useCallback)((t,n)=>{let o=parseFloat(t.replace(",","."));!isNaN(o)&&o>=0&&i(e,{amount:o,rollover:n})},[e,i]);return(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(l=Z(e),(0,d.n6)(l)?(0,o.jsx)(d.In,{name:l,size:14,"aria-hidden":!0,style:{marginRight:6,verticalAlign:"middle"}}):(0,o.jsx)("span",{style:{marginRight:6},"aria-hidden":!0,children:l})),_(e,n)]}),(0,o.jsx)("td",{children:(0,o.jsx)(B,{type:"number",min:"0",step:"10",value:c,onChange:e=>{p(e.target.value),u(e.target.value,f)},"aria-label":r("finance.categoryBudgets.amount"),style:{width:80}})}),(0,o.jsx)("td",{style:{textAlign:"center"},children:(0,o.jsx)("input",{type:"checkbox",checked:f,style:{accentColor:g},onChange:e=>{m(e.target.checked),u(c,e.target.checked)},"aria-label":r("finance.categoryBudgets.rollover")})}),(0,o.jsx)("td",{style:{textAlign:"right"},children:(0,o.jsx)(P,{type:"button",danger:!0,onClick:()=>s(e),children:"\xd7"})})]})}function Q(){let{data:e,loaded:t,save:n}=(0,f.useFinance)(),[r]=(0,c.Ym)(),i=(0,a.useMemo)(()=>(0,c.Nx)(r,m.A),[r]),s=(0,f.thisMonthKey)(),[g,u]=(0,a.useState)(!1),[h,x]=(0,a.useState)(!1),[M,j]=(0,a.useState)(null),z=(0,a.useMemo)(()=>e?(0,f.allCategoryProgress)(e,s):[],[e,s]),T=(0,a.useMemo)(()=>new Set(Object.keys(e?.budget.categoryBudgets??{})),[e]),S=(0,a.useMemo)(()=>f.DEFAULT_CATEGORIES.filter(e=>!T.has(e.id)),[T]),C=(0,a.useCallback)(async(t,o)=>{e&&((0,f.pushUndo)({id:`catbudget-${t}-${Date.now()}`,snapshot:e,labelKey:"finance.undo.label.edited",ts:Date.now()}),await n((0,f.setCategoryBudget)(e,t,o)))},[e,n]),F=(0,a.useCallback)(async t=>{e&&((0,f.pushUndo)({id:`catbudget-rm-${t}-${Date.now()}`,snapshot:e,labelKey:"finance.undo.label.deleted",ts:Date.now()}),await n((0,f.removeCategoryBudget)(e,t)))},[e,n]),R=(0,a.useCallback)(async t=>{e&&(await n((0,f.setCategoryBudget)(e,t,{amount:0,rollover:!1})),x(!1))},[e,n]),A=(0,a.useCallback)(()=>{if(!e)return;let t={};for(let[n,o]of Object.entries(e.budget.categoryBudgets))t[n]="number"==typeof o?{amount:o,rollover:!1}:o;j(t),u(!0)},[e]),D=(0,a.useCallback)((e,t)=>{j(n=>({...n??{},[e]:t}))},[]),E=(0,a.useCallback)(e=>{j(t=>{if(!t)return t;let n={...t};return delete n[e],n})},[]),I=(0,a.useCallback)(async()=>{if(!e||!M)return;(0,f.pushUndo)({id:`catbudget-bulk-${Date.now()}`,snapshot:e,labelKey:"finance.undo.label.edited",ts:Date.now()});let t={...e,budget:{...e.budget,categoryBudgets:M}};await n(t),u(!1),j(null)},[e,M,n]),B=(0,a.useCallback)(()=>{u(!1),j(null)},[]);if(!t)return(0,o.jsxs)(b,{children:[(0,o.jsx)(y,{children:(0,o.jsx)(d.YZ,{children:i("finance.categoryBudgets.title")})}),(0,o.jsx)(k,{children:(0,o.jsx)(p.YG,{mode:"loading",label:i("loading")})})]});let L=e?(0,f.formatMonthLabel)(s,r):"";return(0,o.jsxs)(b,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(d.YZ,{children:i("finance.categoryBudgets.title")}),(0,o.jsxs)(w,{children:[(0,o.jsx)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontSize:11,color:l.w4.colors.mainTextMuted,letterSpacing:"0.05em"},children:L}),(0,o.jsx)($,{type:"button",className:g?"active":"",onClick:g?B:A,children:g?i("finance.categoryBudgets.cancelEdit"):i("finance.categoryBudgets.editBudgets")})]})]}),(0,o.jsxs)(k,{children:[!g&&0===z.length&&(0,o.jsx)("div",{style:{textAlign:"center",padding:`${l.w4.spacing.md} 0`},children:(0,o.jsx)(p.YG,{mode:"empty",label:i("finance.categoryBudgets.empty")})}),!g&&z.map(e=>(0,o.jsx)(X,{progress:e,locale:r,t:i,onSave:C,onRemove:F},e.categoryId)),g&&M&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O,{children:(0,o.jsxs)(W,{children:[(0,o.jsx)(Y,{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:i("finance.categoryBudgets.category")}),(0,o.jsx)("th",{children:i("finance.categoryBudgets.amount")}),(0,o.jsx)("th",{style:{textAlign:"center"},children:i("finance.categoryBudgets.rollover")}),(0,o.jsx)("th",{})]})}),(0,o.jsx)(K,{children:Object.keys(M).map(e=>(0,o.jsx)(J,{catId:e,entry:M[e]??{amount:0,rollover:!1},locale:r,t:i,onChange:D,onRemove:E},e))})]})}),(0,o.jsxs)(V,{children:[(0,o.jsx)(P,{type:"button",onClick:B,children:i("finance.categoryBudgets.cancel")}),(0,o.jsx)(H,{type:"button",onClick:I,children:i("finance.categoryBudgets.saveAll")})]})]})]}),!g&&S.length>0&&(0,o.jsxs)(G,{children:[(0,o.jsxs)(v,{type:"button",onClick:()=>x(e=>!e),children:[h?"▴ ":"▾ ",i("finance.categoryBudgets.addBudget")]}),h&&(0,o.jsx)(U,{children:S.map(e=>(0,o.jsxs)(q,{type:"button",onClick:()=>R(e.id),children:[(0,d.n6)(e.icon)?(0,o.jsx)(d.In,{name:e.icon,size:14,"aria-hidden":!0}):(0,o.jsx)("span",{"aria-hidden":!0,children:e.icon}),(0,o.jsx)("span",{style:{fontSize:12,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(0,f.categoryLabel)(e,r)})]},e.id))})]})]})}},9378(e,t,n){n.d(t,{K:()=>Y});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(8170),d=n(5030),p=n(9454),f=n(7711),m=n(948),g=n(4041);let u="#7fb77e",h="#f85149",x=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${u};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  animation: ${x} 0.25s ease both;
  min-width: 0;
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${u};
  }
`,y=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
`,w=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px 0;
  border-top: 1px solid ${l.w4.colors.border};
  position: relative;

  &:first-of-type {
    border-top: none;
  }

  &:hover .rule-actions {
    opacity: 1;
  }
`,$=i().div`
  flex: 1;
  min-width: 0;
`,v=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  flex-wrap: wrap;
`,M=i().span`
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({accent:e})=>e?u:l.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${u}18`:l.w4.colors.mainBg};
  border: 1px solid ${({accent:e})=>e?`${u}44`:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 1px 5px;
`,j=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,z=i().div`
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity 120ms ease;

  @media (max-width: ${l.w4.breakpoints.md}) {
    opacity: 1;
  }
`,T=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  color: ${({danger:e})=>e?h:l.w4.colors.mainTextMuted};
  transition: background 120ms ease, color 120ms ease;

  &:hover {
    background: ${({danger:e})=>e?`${h}18`:l.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?h:l.w4.colors.mainText};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,S=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${l.w4.spacing.xs} 0;
  margin-top: ${l.w4.spacing.xs};
  transition: color 120ms ease;
  min-height: 36px;

  &:hover { color: ${l.w4.colors.accent}; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,C=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} 0 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.sm};
`,F=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: ${l.w4.spacing.xs};
`,R=i().label`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  display: block;
  margin-bottom: 4px;
`,A=i().div`
  display: flex;
  flex-direction: column;
`,D=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,E=i().input`
  flex: 1;
  min-width: 120px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${({invalid:e})=>e?h:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-variant-numeric: tabular-nums;

  &:focus { border-color: ${({invalid:e})=>e?h:l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,I=i().select`
  flex: 1;
  min-width: 100px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};

  &:focus { border-color: ${l.w4.colors.accent}; }
  option { background: ${l.w4.colors.surface}; }
`,B=i().div`
  display: flex;
  gap: 4px;
`,L=i().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({active:e})=>e?u:l.w4.colors.mainTextMuted};
  background: ${({active:e})=>e?`${u}18`:"transparent"};
  border: 1px solid ${({active:e})=>e?`${u}66`:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 3px 8px;
  cursor: pointer;
  min-height: 28px;
  transition: all 120ms ease;

  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,N=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${h};
  margin-top: 2px;
`,P=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,H=i().button`
  flex: 1;
  min-height: 36px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({primary:e})=>e?u:l.w4.colors.border};
  background: ${({primary:e})=>e?`${u}22`:"transparent"};
  color: ${({primary:e})=>e?u:l.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: ${l.w4.typography.fontFamily};

  &:disabled { opacity: 0.4; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,O=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: transparent;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  color: ${l.w4.colors.mainTextMuted};
  transition: background 120ms ease, color 120ms ease;
  flex-shrink: 0;

  &:disabled { opacity: 0.3; cursor: not-allowed; }
  &:hover:not(:disabled) {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`;function W(){return{match:"",matchKind:"substring",categoryId:"other",memberId:""}}function Y(){let[e]=(0,c.Ym)(),t=(0,a.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{data:n,loaded:r,save:i}=(0,f.useFinance)(),[s,u]=(0,a.useState)(!1),[h,x]=(0,a.useState)(null),[Y,K]=(0,a.useState)(W),V=(0,a.useMemo)(()=>n?.categoryRules??[],[n]),G=Y.match.trim().length>0&&!(0,f.isValidPattern)(Y.match,Y.matchKind),U=Y.match.trim().length>0&&!G,q=(0,a.useCallback)(()=>{x(null),K(W()),u(!0)},[]),_=(0,a.useCallback)(e=>{x(e.id),K({match:e.match,matchKind:e.matchKind,categoryId:e.categoryId,memberId:e.memberId??""}),u(!0)},[]),Z=(0,a.useCallback)(()=>{u(!1),x(null)},[]),X=(0,a.useCallback)(async()=>{if(!n||!U)return;let e=Date.now();if(h){let t=(n.categoryRules??[]).find(e=>e.id===h);if(!t)return;let o={...t,match:Y.match.trim(),matchKind:Y.matchKind,categoryId:Y.categoryId,memberId:Y.memberId||void 0};(0,f.pushUndo)({id:(0,g.z)(),snapshot:n,labelKey:"finance.undo.label.edited",ts:e}),await i({...n,categoryRules:(n.categoryRules??[]).map(e=>e.id===o.id?o:e)})}else{let t={id:(0,g.z)(),match:Y.match.trim(),matchKind:Y.matchKind,categoryId:Y.categoryId,memberId:Y.memberId||void 0,createdAt:e};(0,f.pushUndo)({id:(0,g.z)(),snapshot:n,labelKey:"finance.undo.label.added",ts:e}),await i({...n,categoryRules:[t,...n.categoryRules??[]]})}Z()},[n,Y,h,U,i,Z]),J=(0,a.useCallback)(async e=>{n&&((0,f.pushUndo)({id:(0,g.z)(),snapshot:n,labelKey:"finance.undo.label.deleted",ts:Date.now()}),await i({...n,categoryRules:(n.categoryRules??[]).filter(t=>t.id!==e)}))},[n,i]),Q=(0,a.useCallback)(async(e,t)=>{n&&await i(function(e,t,n){let o=[...e.categoryRules??[]],a=o.findIndex(e=>e.id===t);if(a<0)return e;let r="up"===n?a-1:a+1;return r<0||r>=o.length?e:([o[a],o[r]]=[o[r],o[a]],{...e,categoryRules:o})}(n,e,t))},[n,i]);return r?(0,o.jsxs)(b,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(d.YZ,{children:t("finance.categoryRules.title")}),(0,o.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:t("finance.categoryRules.orderNote")})]}),0===V.length&&!s&&(0,o.jsx)(p.YG,{mode:"empty",label:t("finance.categoryRules.empty")}),V.map((n,a)=>{let r=f.DEFAULT_CATEGORIES.find(e=>e.id===n.categoryId),i=r?(0,f.categoryLabel)(r,e):n.categoryId;return(0,o.jsxs)(w,{children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:1},children:[(0,o.jsx)(O,{type:"button",disabled:0===a,title:t("finance.categoryRules.moveUp"),"aria-label":t("finance.categoryRules.moveUp"),onClick:()=>{Q(n.id,"up")},children:(0,o.jsx)(d.In,{name:"chevron-up",size:12})}),(0,o.jsx)(O,{type:"button",disabled:a===V.length-1,title:t("finance.categoryRules.moveDown"),"aria-label":t("finance.categoryRules.moveDown"),onClick:()=>{Q(n.id,"down")},children:(0,o.jsx)(d.In,{name:"chevron-down",size:12})})]}),(0,o.jsxs)($,{children:[(0,o.jsx)(v,{children:n.match}),(0,o.jsxs)(k,{children:[(0,o.jsx)(M,{children:"regex"===n.matchKind?t("finance.categoryRules.kindRegex"):t("finance.categoryRules.kindSubstring")}),(0,o.jsx)(j,{children:"→"}),(0,o.jsxs)(M,{accent:!0,children:[r?.icon??""," ",i]}),n.memberId&&(0,o.jsxs)(j,{children:["@ ",n.memberId]})]})]}),(0,o.jsxs)(z,{className:"rule-actions",children:[(0,o.jsx)(T,{type:"button",title:t("finance.categoryRules.edit"),"aria-label":t("finance.categoryRules.edit"),onClick:()=>_(n),children:(0,o.jsx)(d.In,{name:"edit",size:14})}),(0,o.jsx)(T,{type:"button",danger:!0,title:t("finance.categoryRules.delete"),"aria-label":t("finance.categoryRules.delete"),onClick:()=>{J(n.id)},children:(0,o.jsx)(d.In,{name:"trash",size:14})})]})]},n.id)}),s&&(0,o.jsxs)(C,{children:[(0,o.jsx)(F,{children:h?t("finance.categoryRules.editTitle"):t("finance.categoryRules.addTitle")}),(0,o.jsxs)(D,{children:[(0,o.jsxs)(A,{style:{flex:2,minWidth:160},children:[(0,o.jsx)(R,{htmlFor:"cr-match",children:t("finance.categoryRules.match")}),(0,o.jsx)(E,{id:"cr-match",invalid:G,value:Y.match,onChange:e=>K(t=>({...t,match:e.target.value})),placeholder:"regex"===Y.matchKind?"^continente":"continente"}),G&&(0,o.jsx)(N,{children:t("finance.categoryRules.invalidRegex")})]}),(0,o.jsxs)(A,{children:[(0,o.jsx)(R,{children:t("finance.categoryRules.matchKind")}),(0,o.jsxs)(B,{children:[(0,o.jsx)(L,{type:"button",active:"substring"===Y.matchKind,onClick:()=>K(e=>({...e,matchKind:"substring"})),children:t("finance.categoryRules.kindSubstring")}),(0,o.jsx)(L,{type:"button",active:"regex"===Y.matchKind,onClick:()=>K(e=>({...e,matchKind:"regex"})),children:t("finance.categoryRules.kindRegex")})]})]})]}),(0,o.jsxs)(D,{children:[(0,o.jsxs)(A,{style:{flex:1,minWidth:120},children:[(0,o.jsx)(R,{htmlFor:"cr-category",children:t("finance.categoryRules.categorize")}),(0,o.jsx)(I,{id:"cr-category",value:Y.categoryId,onChange:e=>K(t=>({...t,categoryId:e.target.value})),children:f.DEFAULT_CATEGORIES.map(t=>(0,o.jsx)("option",{value:t.id,children:(0,f.categoryLabel)(t,e)},t.id))})]}),n&&n.familyMembers.length>0&&(0,o.jsxs)(A,{style:{flex:1,minWidth:120},children:[(0,o.jsx)(R,{htmlFor:"cr-member",children:t("finance.categoryRules.asMember")}),(0,o.jsxs)(I,{id:"cr-member",value:Y.memberId,onChange:e=>K(t=>({...t,memberId:e.target.value})),children:[(0,o.jsx)("option",{value:"",children:t("finance.categoryRules.noMember")}),n.familyMembers.map(e=>(0,o.jsx)("option",{value:e.id,children:e.name},e.id))]})]})]}),(0,o.jsxs)(P,{children:[(0,o.jsx)(H,{type:"button",onClick:Z,children:t("finance.categoryRules.cancel")}),(0,o.jsx)(H,{type:"button",primary:!0,disabled:!U,onClick:()=>{X()},children:t("finance.categoryRules.save")})]})]}),!s&&(0,o.jsxs)(S,{type:"button",onClick:q,children:[(0,o.jsx)(d.In,{name:"plus",size:14}),t("finance.categoryRules.addRule")]})]}):(0,o.jsxs)(b,{children:[(0,o.jsx)(d.YZ,{children:t("finance.categoryRules.title")}),(0,o.jsx)(p.YG,{mode:"loading",label:t("loading")})]})}},2405(e,t,n){n.d(t,{D:()=>C});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764);let c=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,d=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
  animation: ${c} 0.25s ease both;
  min-width: 0;
`,p=i().div`
  display: grid;
  grid-template-columns: 28px repeat(24, 1fr);
  gap: 2px;
  padding-left: 0;
`,f=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1;
  user-select: none;
  /* hide intermediate labels on narrow viewports */
  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: 9px;
  }
`,m=i().div``,g=i().div`
  display: grid;
  grid-template-columns: 28px repeat(24, 1fr);
  gap: 2px;
`,u=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  line-height: 1;
  user-select: none;
  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: 9px;
  }
`,h=i().div`
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  background: ${({bg:e})=>e};
  cursor: default;
  min-height: 8px;
  transition: filter 120ms ease;
  &:hover {
    filter: brightness(1.35);
  }
`,x=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  padding: ${l.w4.spacing.sm} 0;
`,b=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: 2px;
`,y=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,w=i().div`
  display: flex;
  gap: 2px;
  flex: 1;
`,$=i().div`
  height: 8px;
  flex: 1;
  border-radius: 1px;
  background: ${({bg:e})=>e};
`,v=new Set([0,4,8,12,16,20]);function k(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}let M=k("#1d2230"),j=k("#f59e0b");function z(e){let t=Math.round(M[0]+(j[0]-M[0])*e),n=Math.round(M[1]+(j[1]-M[1])*e),o=Math.round(M[2]+(j[2]-M[2])*e);return`rgb(${t},${n},${o})`}let T=function(e=5){return Array.from({length:e},(t,n)=>z(n/(e-1)))}(5),S=["finance.dayHourHeatmap.day.mon","finance.dayHourHeatmap.day.tue","finance.dayHourHeatmap.day.wed","finance.dayHourHeatmap.day.thu","finance.dayHourHeatmap.day.fri","finance.dayHourHeatmap.day.sat","finance.dayHourHeatmap.day.sun"];function C({matrix:e,t}){let n=(0,a.useMemo)(()=>{let t=0;for(let n of e)for(let e of n)e>t&&(t=e);return t},[e]);return 0===n?(0,o.jsx)(x,{children:t("finance.dayHourHeatmap.empty")}):(0,o.jsxs)(d,{children:[(0,o.jsxs)(p,{children:[(0,o.jsx)(m,{}),Array.from({length:24},(e,t)=>(0,o.jsx)(f,{children:v.has(t)?String(t).padStart(2,"0"):""},t))]}),e.map((e,a)=>(0,o.jsxs)(g,{children:[(0,o.jsx)(u,{children:t(S[a]??"finance.dayHourHeatmap.day.mon")}),e.map((e,r)=>{let i=z(n>0?e/n:0),s=e>0?`€${e.toFixed(2)}`:"—",l=`${String(r).padStart(2,"0")}:00`,c=t(S[a]??"finance.dayHourHeatmap.day.mon");return(0,o.jsx)(h,{bg:i,title:t("finance.dayHourHeatmap.tooltip",{day:c,hour:l,amount:s}),"aria-label":`${c} ${l} — ${s}`},r)})]},a)),(0,o.jsxs)(b,{children:[(0,o.jsx)(y,{children:"0"}),(0,o.jsx)(w,{children:T.map((e,t)=>(0,o.jsx)($,{bg:e},t))}),(0,o.jsxs)(y,{children:["€",n.toFixed(0)]})]})]})}},8635(e,t,n){n.d(t,{f:()=>W,z:()=>Y});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(8170),d=n(5030),p=n(9454),f=n(7711),m=n(948);let g="#7fb77e",u="#f85149",h=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,x=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${g};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  animation: ${h} 0.25s ease both;
  min-width: 0;
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${g};
  }
`,b=i().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,y=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px 0;
  border-top: 1px solid ${l.w4.colors.border};
  position: relative;

  &:first-of-type {
    border-top: none;
  }

  &:hover .goal-delete {
    opacity: 1;
  }
`,w=i().div`
  flex: 1;
  min-width: 0;
`,$=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,v=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1px;
  flex-wrap: wrap;
`,k=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
`,M=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
`,j=i().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${g};
  background: ${g}18;
  border: 1px solid ${g}44;
  border-radius: ${l.w4.borderRadius.sm};
  padding: 3px 8px;
  cursor: pointer;
  min-height: 28px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${g}30;
    border-color: ${g};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,z=i().button`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  transition: opacity 120ms ease, color 120ms ease;
  min-height: 28px;
  min-width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover { color: ${u}; }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,T=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} 0 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.sm};
`,S=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,C=i().input`
  flex: 1;
  min-width: 120px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};
  font-variant-numeric: tabular-nums;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,F=i().select`
  flex: 1;
  min-width: 120px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};

  &:focus { border-color: ${l.w4.colors.accent}; }
`,R=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,A=i().button`
  flex: 1;
  min-height: 36px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({primary:e})=>e?g:l.w4.colors.border};
  background: ${({primary:e})=>e?`${g}22`:"transparent"};
  color: ${({primary:e})=>e?g:l.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: ${l.w4.typography.fontFamily};

  &:disabled { opacity: 0.4; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,D=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${l.w4.spacing.xs} 0;
  margin-top: ${l.w4.spacing.xs};
  transition: color 120ms ease;
  min-height: 36px;

  &:hover { color: ${l.w4.colors.accent}; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,E=i().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 200;
  padding: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
  }
`,I=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} 0 0;
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 480px;
  animation: ${h} 0.2s ease both;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,B=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: ${l.w4.spacing.xs};
`;function L({percent:e,color:t,size:n=36}){let a=(n-3)/2,r=2*Math.PI*a,i=r*(1-Math.min(e,1));return(0,o.jsxs)("svg",{width:n,height:n,viewBox:`0 0 ${n} ${n}`,"aria-hidden":!0,style:{flexShrink:0,transform:"rotate(-90deg)"},children:[(0,o.jsx)("circle",{cx:n/2,cy:n/2,r:a,fill:"none",stroke:l.w4.colors.border,strokeWidth:3}),(0,o.jsx)("circle",{cx:n/2,cy:n/2,r:a,fill:"none",stroke:t,strokeWidth:3,strokeDasharray:r,strokeDashoffset:i,strokeLinecap:"round",style:{transition:"stroke-dashoffset 0.4s ease"}})]})}function N({status:e,t}){return"achieved"===e?(0,o.jsx)(d.Ex,{tone:"accent",children:t("finance.goals.achieved")}):"behind"===e?(0,o.jsx)(d.Ex,{tone:"neutral",style:{color:u,borderColor:`${u}44`},children:t("finance.goals.behind")}):(0,o.jsx)(d.Ex,{tone:"neutral",style:{color:g,borderColor:`${g}44`},children:t("finance.goals.onTrack")})}function P(){return new Date().toISOString().slice(0,10)}function H({data:e,onSave:t,onCancel:n,t:r}){let[i,s]=(0,a.useState)(""),[l,c]=(0,a.useState)(""),[d,p]=(0,a.useState)(""),[m,g]=(0,a.useState)("");async function u(){let n=parseFloat(l);if(!i.trim()||isNaN(n)||n<=0)return;let o=(0,f.addGoal)(e,{name:i.trim(),target:n,deadline:d||void 0,memberId:m||void 0});await t(o)}let h=i.trim().length>0&&parseFloat(l)>0;return(0,o.jsxs)(T,{children:[(0,o.jsxs)(S,{children:[(0,o.jsx)(C,{type:"text",placeholder:r("finance.goals.name"),value:i,onChange:e=>s(e.target.value),autoFocus:!0,"aria-label":r("finance.goals.name")}),(0,o.jsx)(C,{type:"number",min:"1",placeholder:r("finance.goals.target"),value:l,onChange:e=>c(e.target.value),"aria-label":r("finance.goals.target"),style:{maxWidth:130}})]}),(0,o.jsxs)(S,{children:[(0,o.jsx)(C,{type:"date",placeholder:r("finance.goals.deadline"),value:d,onChange:e=>p(e.target.value),"aria-label":r("finance.goals.deadline"),min:P()}),e.familyMembers.length>0&&(0,o.jsxs)(F,{value:m,onChange:e=>g(e.target.value),"aria-label":r("finance.goals.member"),children:[(0,o.jsx)("option",{value:"",children:r("finance.goals.member")}),e.familyMembers.map(e=>(0,o.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,o.jsxs)(R,{children:[(0,o.jsx)(A,{type:"button",onClick:n,children:r("finance.goals.cancel")}),(0,o.jsx)(A,{type:"button",primary:!0,disabled:!h,onClick:()=>{u()},children:r("finance.goals.save")})]})]})}function O({goal:e,data:t,onSave:n,onClose:r,t:i}){let[s,c]=(0,a.useState)("");async function d(){let o=parseFloat(s);if(isNaN(o)||o<=0)return;let a=(0,f.contributeToGoal)(t,e.id,o,P());await n(a),r()}let p=parseFloat(s)>0;return(0,o.jsx)(E,{onClick:r,children:(0,o.jsxs)(I,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(B,{children:i("finance.goals.contribute")}),(0,o.jsx)("div",{style:{fontSize:16,fontWeight:600,color:l.w4.colors.mainText},children:e.name}),(0,o.jsx)(C,{type:"number",min:"0.01",step:"0.01",placeholder:i("finance.goals.amount"),value:s,onChange:e=>c(e.target.value),autoFocus:!0,"aria-label":i("finance.goals.amount"),style:{width:"100%",maxWidth:"100%"}}),(0,o.jsxs)(R,{children:[(0,o.jsx)(A,{type:"button",onClick:r,children:i("finance.goals.cancel")}),(0,o.jsx)(A,{type:"button",primary:!0,disabled:!p,onClick:()=>{d()},children:i("finance.goals.contribute")})]})]})})}function W(){let[e]=(0,c.Ym)(),t=(0,a.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{data:n,loaded:r,save:i}=(0,f.useFinance)(),[s,l]=(0,a.useState)(!1),[h,T]=(0,a.useState)(null);if(!r||null===n)return(0,o.jsxs)(x,{children:[(0,o.jsx)(d.YZ,{children:t("finance.goals.title")}),(0,o.jsx)(p.YG,{mode:"loading",label:t("loading")})]});let S=(0,f.recomputeGoalCurrents)(n),C=S.goals;async function F(e){(0,f.pushUndo)({id:`goal-${Date.now()}`,snapshot:n,labelKey:"finance.undo.label.edited",ts:Date.now()}),await i(e)}async function R(e){let t=(0,f.deleteGoal)(S,e);(0,f.pushUndo)({id:`goal-del-${Date.now()}`,snapshot:S,labelKey:"finance.undo.label.deleted",ts:Date.now()}),await i(t)}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(x,{children:[(0,o.jsx)(b,{children:(0,o.jsx)(d.YZ,{children:t("finance.goals.title")})}),0!==C.length||s?C.map(e=>{let n=(0,f.goalProgress)(e),a=(0,f.goalStatus)(e),r=e.color??("achieved"===a?g:"behind"===a?u:g),i=Math.round(100*n.percent);return(0,o.jsxs)(y,{children:[(0,o.jsx)(L,{percent:n.percent,color:r}),(0,o.jsxs)(w,{children:[(0,o.jsx)($,{children:e.name}),(0,o.jsxs)(v,{children:[(0,o.jsxs)(k,{children:[i,"% ",t("finance.goals.progress",{pct:i,target:Math.round(e.target)}).replace(String(i)+"% ","")]}),(0,o.jsx)(N,{status:a,t:t}),void 0!==n.monthlyNeeded&&(0,o.jsx)(k,{children:t("finance.goals.monthlyNeeded",{n:n.monthlyNeeded})})]})]}),(0,o.jsxs)(M,{children:["achieved"!==a&&(0,o.jsx)(j,{type:"button",onClick:()=>T(e),"aria-label":`${t("finance.goals.contribute")} — ${e.name}`,children:t("finance.goals.contribute")}),(0,o.jsx)(z,{type:"button",className:"goal-delete",title:t("finance.goals.delete"),"aria-label":`${t("finance.goals.delete")} — ${e.name}`,onClick:()=>{R(e.id)},children:(0,o.jsx)(d.In,{name:"trash",size:13})})]})]},e.id)}):(0,o.jsx)(p.YG,{mode:"empty",label:t("finance.goals.empty")}),s?(0,o.jsx)(H,{data:n,onSave:async e=>{await F(e),l(!1)},onCancel:()=>l(!1),t:t}):(0,o.jsxs)(D,{type:"button",onClick:()=>l(!0),children:[(0,o.jsx)(d.In,{name:"plus",size:14,"aria-hidden":!0}),t("finance.goals.add")]})]}),null!==h&&(0,o.jsx)(O,{goal:h,data:n,onSave:F,onClose:()=>T(null),t:t})]})}function Y({percent:e,color:t,label:n}){let a=2*Math.PI*5,r=a*(1-Math.min(e,1));return(0,o.jsxs)("svg",{width:12,height:12,viewBox:"0 0 12 12","aria-label":n,style:{flexShrink:0,transform:"rotate(-90deg)"},children:[(0,o.jsx)("circle",{cx:6,cy:6,r:5,fill:"none",stroke:l.w4.colors.border,strokeWidth:2}),(0,o.jsx)("circle",{cx:6,cy:6,r:5,fill:"none",stroke:t,strokeWidth:2,strokeDasharray:a,strokeDashoffset:r,strokeLinecap:"round"})]})}},6891(e,t,n){n.d(t,{N:()=>S});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(5030),d=n(7711),p=n(9454);let f=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.lg};
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.md};
  animation: ${f} 0.25s ease;
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
`,g=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  text-align: center;
`,u=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,h=i().div`
  font-size: clamp(48px, 16vw, 76px);
  font-weight: 800;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  line-height: 1;
  color: ${({positive:e})=>e?"#7fb77e":l.w4.colors.danger};
  letter-spacing: -0.02em;
`,x=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${({positive:e})=>e?"#7fb77e":l.w4.colors.danger};
`,b=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  padding: 6px 12px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,y=i().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,w=i().div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
`,$=i().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`,v=i().div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
`,k=i().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  gap: ${l.w4.spacing.sm};
`,M=i().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,z=i().span`
  font-size: 13px;
  font-weight: 500;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.danger};
`,T=i().p`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${l.w4.spacing.sm} 0;
`;function S({member:e,data:t,t:n}){let r=(0,d.allowanceBalance)(e,t.expenses,t.income),i=e.weeklyAllowance??0,s=(0,a.useMemo)(()=>[...t.expenses].filter(t=>t.childId===e.id).sort((e,t)=>t.createdAt-e.createdAt).slice(0,8),[t.expenses,e.id]),l=(0,a.useMemo)(()=>{let n=new Date,o=n.getDay(),a=new Date(n);a.setDate(a.getDate()-(0===o?6:o-1)),a.setHours(0,0,0,0);let r=a.toISOString().slice(0,10);return t.expenses.filter(t=>t.childId===e.id&&t.date>=r).reduce((e,t)=>e+t.amount,0)},[t.expenses,e.id]),f=i>0?l/i:0,C=Math.min(f,1),F=i>0&&f>1?Math.round((f-1)*100):0;return(0,o.jsxs)(m,{children:[(0,o.jsxs)(g,{children:[(0,o.jsx)(u,{children:n("finance.kidMode.balance")}),(0,o.jsxs)(h,{positive:r>=0,children:[r>=0?"+":"-","€",Math.abs(r).toFixed(2)]}),(0,o.jsx)(x,{positive:r>=0,children:n(r>=0?"finance.kidMode.positive":"finance.kidMode.negative")})]}),i>0&&(0,o.jsxs)(b,{children:[(0,o.jsxs)("span",{children:[n("finance.kidMode.weeklyAllowance"),":"]}),(0,o.jsxs)(y,{children:["€",i.toFixed(2)]})]}),i>0&&(0,o.jsxs)(w,{children:[(0,o.jsxs)($,{children:[(0,o.jsxs)("span",{children:["€",l.toFixed(2)," ",n("finance.dashboard.spent")]}),(0,o.jsxs)("span",{children:["€",i.toFixed(2)," ",n("finance.allowance.weeklyLabel")]})]}),(0,o.jsx)(p.Xj,{pct:C,over:F,color:"#7fb77e"})]}),(0,o.jsxs)(v,{children:[(0,o.jsx)(c.YZ,{children:n("finance.kidMode.recentSpending")}),0===s.length?(0,o.jsx)(T,{children:n("finance.kidMode.noSpending")}):s.map(e=>(0,o.jsxs)(k,{children:[(0,o.jsx)(j,{children:e.date}),(0,o.jsx)(M,{children:e.description}),(0,o.jsxs)(z,{children:["-€",e.amount.toFixed(2)]})]},e.id))]})]})}},719(e,t,n){n.d(t,{TA:()=>E,a8:()=>m,jb:()=>I});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(4764),l=n(5030),c=n(9454),d=n(7711),p=n(8635);let f=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"];function m(e,t){return e.color??f[t%f.length]}let g="#7fb77e",u=i().nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: ${s.w4.spacing.md} 0;
  gap: 2px;
`,h=i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: transparent;
  border: none;
  border-left: 2px solid ${({active:e})=>e?g:"transparent"};
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
  text-align: left;
  width: 100%;
  min-height: 44px;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: -2px;
  }
`,x=i().div`
  flex: 1;
  min-width: 0;
`,b=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?g:s.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,y=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1px;
`,w=i().span`
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  font-weight: 600;
`,$=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({positive:e})=>e?"#f85149":"#7fb77e"};
`,v=i().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: transparent;
  border: none;
  border-left: 2px solid transparent;
  cursor: pointer;
  width: 100%;
  font-size: 13px;
  color: ${s.w4.colors.mainTextMuted};
  margin-top: ${s.w4.spacing.sm};
  min-height: 44px;
  transition: color 120ms ease, background 120ms ease;

  &:hover {
    color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: -2px;
  }
`,k=i().div`
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,M=i().input`
  width: 100%;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${s.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-family: ${s.w4.typography.fontFamily};

  &:focus { border-color: ${s.w4.colors.accent}; }
  &::placeholder { color: ${s.w4.colors.mainTextMuted}; }
`,j=i().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
`,z=i().button`
  flex: 1;
  min-height: 44px;
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?g:s.w4.colors.border};
  background: ${({active:e})=>e?`${g}22`:s.w4.colors.mainBg};
  color: ${({active:e})=>e?g:s.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
`,T=i().div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,S=i().button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: 2px solid ${({active:e})=>e?s.w4.colors.mainText:"transparent"};
  cursor: pointer;
  transition: border-color 120ms ease;
  padding: 0;
  /* Expand touch target without growing the visual dot */
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: -12px;
  }

  &:focus-visible { outline: 2px solid ${s.w4.colors.accent}; outline-offset: 2px; }
`,C=i().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
`,F=i().button`
  flex: 1;
  min-height: 44px;
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${({primary:e})=>e?g:s.w4.colors.border};
  background: ${({primary:e})=>e?`${g}22`:"transparent"};
  color: ${({primary:e})=>e?g:s.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
`,R=i().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  overflow-x: auto;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  background: ${s.w4.colors.mainBg};
  border-bottom: 1px solid ${s.w4.colors.border};
  position: sticky;
  top: 0;
  z-index: 10;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (min-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,A=i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:t})=>e?t:s.w4.colors.border};
  background: ${({active:e,color:t})=>e?`${t}22`:s.w4.colors.surface};
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 120ms ease;
  flex-shrink: 0;
  min-height: 44px;

  &:focus-visible { outline: 2px solid ${s.w4.colors.accent}; outline-offset: 2px; }
`,D=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
`;function E({data:e,activeMemberId:t,onSelectMember:n,onSaveData:r,t:i,locale:g}){let[R,A]=(0,a.useState)(!1),[D,I]=(0,a.useState)(""),[B,L]=(0,a.useState)("adult"),[N,P]=(0,a.useState)(f[0]),H=(0,d.thisMonthKey)(),O=(()=>{let[e,t]=H.split("-").map(Number),n=new Date(e,t-2,1);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`})(),W=[{id:"all",name:i("finance.member.all"),role:"shared",color:void 0},{id:"shared",name:i("finance.member.shared"),role:"shared",color:void 0},...e.familyMembers.map((e,t)=>({...e,color:m(e,t)}))];return(0,o.jsxs)(u,{"aria-label":i("finance.nav.ariaLabel"),children:[W.map(a=>{var r;let i,f,m=a.id===t,u=a.color??s.w4.colors.mainTextMuted,v=(0,d.monthlyTotalByMember)(e,a.id,H),k=(r=a.id,i=(0,d.monthlyTotalByMember)(e,r,H),0===(f=(0,d.monthlyTotalByMember)(e,r,O))?0:Math.round((i-f)/f*100)),M=function(e,t){let n=new Date,o=[];for(let a=5;a>=0;a--){let r=new Date(n);r.setDate(n.getDate()-7*a-n.getDay()),r.setHours(0,0,0,0);let i=new Date(r);i.setDate(r.getDate()+7);let s=(0,d.expensesForMember)(e.expenses,t).filter(e=>{let t=new Date(e.date+"T00:00:00");return t>=r&&t<i}).reduce((e,t)=>e+t.amount,0);o.push(s)}return o}(e,a.id),j={id:a.id,name:a.name,role:a.role,color:a.color},z=(0,d.recomputeGoalCurrents)(e).goals.find(e=>e.memberId===a.id),T=z?(0,d.goalProgress)(z):null,S=z?(0,d.goalStatus)(z):null,C=z&&"behind"===S?"#f85149":"#7fb77e";return(0,o.jsxs)(h,{active:m,onClick:()=>n(a.id),type:"button","aria-pressed":m,children:[(0,o.jsxs)("div",{style:{position:"relative",flexShrink:0},children:[(0,o.jsx)(l.eu,{member:j,size:26}),null!==T&&(0,o.jsx)("div",{style:{position:"absolute",bottom:-2,right:-2},children:(0,o.jsx)(p.z,{percent:T.percent,color:C,label:z?.name??""})})]}),(0,o.jsxs)(x,{children:[(0,o.jsx)(b,{active:m,children:a.name}),(0,o.jsxs)(y,{children:[(0,o.jsx)(w,{children:`€${Math.round(v).toLocaleString("pt"===g?"pt-PT":"en-GB")}`}),0!==k&&(0,o.jsxs)($,{positive:k>0,children:[k>0?"↑":"↓",Math.abs(k),"%"]})]})]}),M.some(e=>e>0)&&(0,o.jsx)(c.OW,{points:M,accent:u,width:48,height:24})]},a.id)}),R?(0,o.jsxs)(k,{children:[(0,o.jsx)(M,{type:"text",placeholder:i("finance.member.name"),value:D,onChange:e=>I(e.target.value),autoFocus:!0,"aria-label":i("finance.member.name")}),(0,o.jsxs)(j,{children:[(0,o.jsx)(z,{type:"button",active:"adult"===B,onClick:()=>L("adult"),children:i("finance.member.role.adult")}),(0,o.jsx)(z,{type:"button",active:"child"===B,onClick:()=>L("child"),children:i("finance.member.role.child")})]}),(0,o.jsx)(T,{children:f.map(e=>(0,o.jsx)(S,{type:"button",bg:e,active:N===e,onClick:()=>P(e),"aria-label":e},e))}),(0,o.jsxs)(C,{children:[(0,o.jsx)(F,{type:"button",onClick:()=>A(!1),children:i("finance.member.cancel")}),(0,o.jsx)(F,{type:"button",primary:!0,onClick:function(){if(!D.trim())return;let t={id:`m_${Date.now()}`,name:D.trim(),role:B,color:N};r({...e,familyMembers:[...e.familyMembers,t]}),I(""),L("adult"),P(f[0]),A(!1)},disabled:!D.trim(),children:i("finance.member.save")})]})]}):(0,o.jsxs)(v,{type:"button",onClick:()=>A(!0),children:[(0,o.jsx)(l.In,{name:"user-plus",size:14,"aria-hidden":!0}),i("finance.member.add")]})]})}function I({data:e,activeMemberId:t,onSelectMember:n,t:a,locale:r}){let i=(0,d.thisMonthKey)(),c=[{id:"all",name:a("finance.member.all"),role:"shared",color:void 0},{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...e.familyMembers.map((e,t)=>({...e,color:m(e,t)}))];return(0,o.jsx)(R,{role:"tablist","aria-label":a("finance.nav.ariaLabel"),children:c.map(a=>{let c=a.id===t,p=a.color??s.w4.colors.mainTextMuted,f=(0,d.monthlyTotalByMember)(e,a.id,i),m={id:a.id,name:a.name,role:a.role,color:a.color};return(0,o.jsxs)(A,{active:c,color:p,onClick:()=>n(a.id),type:"button",role:"tab","aria-selected":c,children:[(0,o.jsx)(l.eu,{member:m,size:20}),(0,o.jsx)("span",{children:a.name}),(0,o.jsx)(D,{children:`€${Math.round(f).toLocaleString("pt"===r?"pt-PT":"en-GB")}`})]},a.id)})})}},1255(e,t,n){n.d(t,{R:()=>M});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(5030),d=n(9454),p=n(7711);let f=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${l.w4.spacing.sm};
  animation: ${f} 0.25s ease both;
`,g=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
  padding: ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${({accentColor:e})=>e};
  border-radius: ${l.w4.borderRadius.md};
  transition: border-color 130ms ease, transform 130ms ease, box-shadow 130ms ease;

  &:hover {
    border-color: ${l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
    border-left-color: ${({accentColor:e})=>e};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`,u=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
`,h=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${l.w4.colors.mainTextMuted};
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,x=i().div`
  font-size: 20px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  letter-spacing: -0.02em;
  line-height: 1.2;
`,b=i().div`
  display: flex;
  align-items: baseline;
  gap: ${l.w4.spacing.xs};
  justify-content: space-between;
`,y=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  flex-shrink: 0;
`,w=i().div`
  margin: 2px 0;
`,$=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${l.w4.colors.border};
  padding-top: ${l.w4.spacing.xs};
  margin-top: 2px;
`,v=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,k=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  padding: ${l.w4.spacing.xs} 0;
`;function M({expenses:e,familyMembers:t,getMemberColor:n,t:r,locale:i}){let s=(0,a.useMemo)(()=>(0,p.thisMonthKey)(),[]),f=(0,a.useMemo)(()=>{let o=[],a=(0,p.memberMonthlyTotals)(e,"shared",6);if(a.reduce((e,t)=>e+t.total,0)>0){let t=(0,p.memberMonthlyTotals)(e,"shared",1)[0]?.total??0;o.push({id:"shared",label:r("finance.income.member.shared"),color:l.w4.colors.mainTextMuted,idx:-1,sparkPoints:(0,p.memberSparkline)(e,"shared",8),currentMonthTotal:t,deltaVsLastMonth:(0,p.memberDeltaVsLastMonth)(e,"shared",s),monthlyTotals:a})}return t.forEach((t,a)=>{let r=(0,p.memberMonthlyTotals)(e,t.id,6);if(0===r.reduce((e,t)=>e+t.total,0))return;let i=(0,p.memberMonthlyTotals)(e,t.id,1)[0]?.total??0;o.push({id:t.id,label:t.name,color:n(t,a),role:t.role,memberId:t,idx:a,sparkPoints:(0,p.memberSparkline)(e,t.id,8),currentMonthTotal:i,deltaVsLastMonth:(0,p.memberDeltaVsLastMonth)(e,t.id,s),monthlyTotals:r})}),o},[e,t,n,s,r]);if(0===f.length)return(0,o.jsx)(k,{children:r("finance.smallMultiples.empty")});let j=function(e,t){let[n,o]=e.split("-").map(Number);return new Date(n,o-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"})}(s,i);return(0,o.jsx)(m,{children:f.map(e=>(0,o.jsxs)(g,{accentColor:e.color,children:[(0,o.jsxs)(u,{children:["shared"===e.id?(0,o.jsx)(c.In,{name:"users",size:14,color:e.color}):e.memberId?(0,o.jsx)(c.eu,{member:{id:e.memberId.id,name:e.memberId.name,role:e.memberId.role,color:e.color},size:16}):(0,o.jsx)(c.In,{name:"user",size:14,color:e.color}),(0,o.jsx)(h,{style:{color:e.color},children:e.label})]}),e.sparkPoints.some(e=>e>0)&&(0,o.jsx)(w,{children:(0,o.jsx)(d.OW,{points:e.sparkPoints,accent:e.color,width:160,height:28})}),(0,o.jsxs)(b,{children:[(0,o.jsxs)(x,{children:["€",Math.round(e.currentMonthTotal).toLocaleString("pt-PT")]}),(0,o.jsx)(y,{children:j})]}),(0,o.jsxs)($,{children:[(0,o.jsx)(v,{children:r("finance.smallMultiples.vsLastMonth")}),(0,o.jsx)(d.Ru,{value:e.deltaVsLastMonth,format:"abs",decimals:0})]})]},e.id))})}},8989(e,t,n){n.d(t,{f:()=>b});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(4764),l=n(7711);function c(e,t){let[n,o]=e.split("-"),a=new Date(parseInt(n),parseInt(o)-1,1),r=a.toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"}),i=r.charAt(0).toUpperCase()+r.slice(1).replace(".","");return 0===a.getMonth()?`${i} '${String(a.getFullYear()).slice(2)}`:i}let d=i().div`
  background: ${s.w4.colors.mainBg};
  border-bottom: 1px solid ${s.w4.colors.border};
  flex-shrink: 0;
  overflow: hidden;
`,p=i().div`
  display: flex;
  align-items: flex-end;
  gap: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 6px ${s.w4.spacing.md} 0;
  /* relative so the dashed budget line can be absolutely positioned */
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`,f=i().button`
  flex-shrink: 0;
  min-width: ${52}px;
  height: ${52}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding: 0 4px 6px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.06)":"transparent"};
  border: 1px solid ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
  position: relative;
  outline: none;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    border-color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,m=i().div`
  width: 20px;
  height: ${28}px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,g=i().div`
  width: 100%;
  height: ${({height:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px 2px 0 0;
  opacity: ${({active:e})=>e?1:.6};
  transition: height 200ms ease, opacity 120ms ease;
  position: relative;
  overflow: hidden;
`,u=i().div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({height:e})=>e}px;
  background: ${"#f85149"};
  border-radius: 2px 2px 0 0;
`,h=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  white-space: nowrap;
  user-select: none;
  transition: color 120ms ease;
`,x=i().div`
  position: absolute;
  left: ${s.w4.spacing.md};
  right: ${s.w4.spacing.md};
  bottom: ${({bottom:e})=>e}px;
  border-top: 1px dashed ${s.w4.colors.mainTextMuted};
  opacity: 0.4;
  pointer-events: none;
`;function b({data:e,selectedMonth:t,onSelectMonth:n,locale:r}){let i=(0,a.useRef)(null),y=(0,a.useRef)(null),w=(0,a.useMemo)(()=>(function(){let e=[],t=new Date;for(let n=11;n>=0;n--){let o=new Date(t.getFullYear(),t.getMonth()-n,1);e.push(`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`)}return e})(),[]),$=(0,a.useMemo)(()=>w.map(t=>(0,l.expensesForMonth)(e.expenses,t).reduce((e,t)=>e+t.amount,0)),[w,e.expenses]),v=e.budget.monthlyBudget,k=(0,a.useMemo)(()=>Math.max(...$,0),[$]),M=(0,a.useMemo)(()=>0===k||v<=0?-1:22+Math.round(28*Math.min(v/k,1)),[k,v]);return(0,a.useEffect)(()=>{let e=y.current,t=i.current;if(!e||!t)return;let n=e.offsetLeft,o=n+e.offsetWidth,a=t.scrollLeft,r=a+t.clientWidth;(n<a||o>r)&&t.scrollTo({left:n-t.clientWidth/2+e.offsetWidth/2,behavior:"smooth"})},[t]),(0,o.jsx)(d,{role:"navigation","aria-label":"Month picker",children:(0,o.jsxs)(p,{ref:i,children:[M>=0&&(0,o.jsx)(x,{bottom:M,role:"presentation","aria-hidden":!0}),w.map((e,a)=>{let i=$[a]??0,l=e===t,d=i>v&&v>0,p=k>0?Math.round(i/k*28):0,x=0;return d&&k>0&&v>0&&(x=Math.max(0,p-Math.round(v/k*28))),(0,o.jsxs)(f,{active:l,ref:l?y:void 0,onClick:()=>n(e),"aria-label":`${c(e,r)} — €${Math.round(i)}`,"aria-pressed":l,type:"button",children:[(0,o.jsx)(m,{"aria-hidden":!0,children:p>0?(0,o.jsx)(g,{height:p,color:"#7fb77e",active:l,children:x>0&&(0,o.jsx)(u,{height:x})}):(0,o.jsx)("div",{style:{width:"100%",height:2,background:s.w4.colors.border,borderRadius:2}})}),(0,o.jsx)(h,{active:l,children:c(e,r)})]},e)})]})})}},3451(e,t,n){n.d(t,{h:()=>T});var o=n(5723),a=n(7991),r=n(2799),i=n(4764),s=n(7711),l=n(9454);let c="#7fb77e",d="#f85149",p="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function f(e){return`€${Math.round(Math.abs(e)).toLocaleString("pt-PT")}`}function m(e){return`${e>0?"+":""}${Math.round(e)}%`}function g(e,t){return new Date(e+"T00:00:00").toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"2-digit",month:"short"})}function u({points:e,color:t}){if(e.length<2||e.every(e=>0===e))return null;let n=Math.max(...e,1),a=e.map((t,n)=>n/(e.length-1)*80),r=e.map(e=>24-e/n*20.4);return a.map((e,t)=>`${0===t?"M":"L"} ${e.toFixed(1)} ${r[t].toFixed(1)}`).join(" "),(0,o.jsxs)("svg",{width:80,height:24,style:{display:"block",overflow:"visible"},children:[(0,o.jsx)("polyline",{points:a.map((e,t)=>`${e.toFixed(1)},${r[t].toFixed(1)}`).join(" "),fill:"none",stroke:t,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("circle",{cx:a[a.length-1].toFixed(1),cy:r[r.length-1].toFixed(1),r:2.5,fill:t})]})}let h=(0,r.css)`
  @media print {
    @page {
      size: A4 portrait;
      margin: 0;
    }

    /* Hide everything except the print root */
    body > * {
      display: none !important;
    }
    body > .print-root {
      display: block !important;
    }

    body {
      background: #0d1117 !important;
      color: #e6edf3 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    /* Prevent page breaks inside table rows */
    tr {
      page-break-inside: avoid;
    }
  }

  /* Always hidden on screen — shown only by @media print above */
  .print-root {
    display: none;
  }
`,x={width:"210mm",minHeight:"297mm",padding:"16mm 18mm",background:"#0d1117",color:"#e6edf3",fontFamily:i.w4.typography.fontFamily,fontSize:13,boxSizing:"border-box"},b={fontFamily:p,fontSize:11,fontWeight:600,letterSpacing:"0.16em",textTransform:"uppercase",color:i.w4.colors.mainTextMuted,marginBottom:4},y={...b,borderTop:`1px solid ${i.w4.colors.border}`,paddingTop:12,marginTop:20,marginBottom:10},w={fontFamily:p,fontSize:36,fontWeight:700,fontVariantNumeric:"tabular-nums",letterSpacing:"-0.02em",color:i.w4.colors.mainText,lineHeight:1.1,marginBottom:4},$={width:"100%",borderCollapse:"collapse"},v={fontFamily:p,fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:i.w4.colors.mainTextMuted,padding:"6px 4px",borderBottom:`1px solid ${i.w4.colors.border}`,textAlign:"left"},k={...v,textAlign:"right"},M={fontFamily:i.w4.typography.fontFamily,fontSize:13,color:i.w4.colors.mainText,padding:"5px 4px",borderBottom:`1px solid ${i.w4.colors.border}`,verticalAlign:"middle"},j={...M,fontFamily:p,fontVariantNumeric:"tabular-nums",textAlign:"right"},z=e=>({display:"inline-block",width:8,height:8,borderRadius:"50%",background:e,marginRight:6,flexShrink:0});function T({data:e,month:t,locale:n,t:S,getMemberColor:C}){let F=(0,a.useMemo)(()=>(function(e){let[t,n]=e.split("-").map(Number),o=new Date(t,n-1,1);return o.setMonth(o.getMonth()-1),`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`})(t),[t]),R=(0,a.useMemo)(()=>(0,s.computeMonthlySummary)(e,t),[e,t]),A=(0,a.useMemo)(()=>(0,s.computeMonthlySummary)(e,F),[e,F]),D=(0,a.useMemo)(()=>(0,s.expensesForMonth)(e.expenses,t),[e.expenses,t]);(0,a.useMemo)(()=>(0,s.incomeForMonth)(e.income,t),[e.income,t]);let E=R.totalExpenses,I=R.totalIncome,B=I-E,L=A.totalExpenses,N=L>0?Math.round((E-L)/L*100):0,P=(0,a.useMemo)(()=>Object.entries((0,s.spendingByCategory)(D)).sort((e,t)=>t[1]-e[1]).slice(0,8).map(([t,n])=>{let o=s.DEFAULT_CATEGORIES.find(e=>e.id===t)??e.categories?.find(e=>e.id===t);return{id:t,value:n,color:o?.color??i.w4.colors.mainTextMuted}}),[D,e.categories]),H=P.reduce((e,t)=>e+t.value,0),O=(0,a.useMemo)(()=>Object.entries((0,s.spendingByCategory)(D)).sort((e,t)=>t[1]-e[1]).slice(0,8).map(([t,o])=>{let a=s.DEFAULT_CATEGORIES.find(e=>e.id===t)??e.categories?.find(e=>e.id===t);return{id:t,label:a?(0,s.categoryLabel)(a,n):t,value:o,color:a?.color??i.w4.colors.mainTextMuted,pct:H>0?Math.round(o/H*100):0}}),[D,e.categories,n,H]),W=(0,a.useMemo)(()=>{let n=[],o=(0,s.memberMonthlyTotals)(e.expenses,"shared",6),a=(0,s.memberMonthlyTotals)(e.expenses,"shared",1)[0]?.total??0;return o.reduce((e,t)=>e+t.total,0)>0&&n.push({id:"shared",label:S("finance.income.member.shared"),color:i.w4.colors.mainTextMuted,sparkPoints:(0,s.memberSparkline)(e.expenses,"shared",8),currentTotal:a,delta:(0,s.memberDeltaVsLastMonth)(e.expenses,"shared",t)}),e.familyMembers.forEach((o,a)=>{if(0===(0,s.memberMonthlyTotals)(e.expenses,o.id,6).reduce((e,t)=>e+t.total,0))return;let r=(0,s.memberMonthlyTotals)(e.expenses,o.id,1)[0]?.total??0;n.push({id:o.id,label:o.name,color:C(o,a),sparkPoints:(0,s.memberSparkline)(e.expenses,o.id,8),currentTotal:r,delta:(0,s.memberDeltaVsLastMonth)(e.expenses,o.id,t)})}),n},[e.expenses,e.familyMembers,C,t,S]),Y=(0,a.useMemo)(()=>[...D].sort((e,t)=>t.amount-e.amount).slice(0,10).map(t=>{let o=s.DEFAULT_CATEGORIES.find(e=>e.id===t.categoryId)??e.categories?.find(e=>e.id===t.categoryId),a=t.childId?e.familyMembers.find(e=>e.id===t.childId)?.name??"—":"—";return{...t,catLabel:o?(0,s.categoryLabel)(o,n):t.categoryId,catColor:o?.color??i.w4.colors.mainTextMuted,memberName:a}}),[D,e.categories,e.familyMembers,n]),K=(0,a.useMemo)(()=>(0,s.generateInsightsWithMembers)(e),[e]),V=(0,a.useMemo)(()=>(0,s.pendingByMember)(e.expenses).map(t=>{let n=e.familyMembers.find(e=>e.id===t.memberId),o=e.expenses.filter(e=>e.isReimbursable&&!e.reimbursed&&(e.childId===t.memberId||"shared"===t.memberId&&!e.childId));return{...t,memberName:n?.name??S("finance.income.member.shared"),memberExpenses:o}}),[e.expenses,e.familyMembers,S]),G=function(e,t){let[n,o]=e.split("-").map(Number);return new Date(n,o-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"long",year:"numeric"})}(t,n),U=function(e,t){let[n,o]=e.split("-").map(Number);return new Date(n,o-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"})}(t,n);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Global,{styles:h}),(0,o.jsx)("div",{className:"print-root","aria-hidden":!0,children:(0,o.jsxs)("div",{style:x,children:[(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{...b,marginBottom:2},children:"Atlantis Finance"}),(0,o.jsx)("div",{style:{fontSize:22,fontWeight:700,color:i.w4.colors.mainText},children:S("finance.report.title")}),(0,o.jsx)("div",{style:{fontFamily:p,fontSize:11,color:i.w4.colors.mainTextMuted,marginTop:2},children:G})]}),(0,o.jsxs)("div",{style:{textAlign:"right"},children:[(0,o.jsx)("div",{style:{...b,marginBottom:2},children:S("finance.report.generated")}),(0,o.jsx)("div",{style:{fontFamily:p,fontSize:11,color:i.w4.colors.mainTextMuted},children:new Date().toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"2-digit",month:"short",year:"numeric"})})]})]}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12,marginBottom:8},children:[{label:S("finance.report.hero.income"),value:I,color:c,delta:null},{label:S("finance.report.hero.expenses"),value:E,color:N>0?d:c,delta:N},{label:S("finance.report.hero.balance"),value:Math.abs(B),color:B<0?d:c,delta:null}].map(({label:e,value:t,color:n,delta:a})=>(0,o.jsxs)("div",{style:{background:i.w4.colors.surface,border:`1px solid ${i.w4.colors.border}`,borderLeft:`3px solid ${n}`,borderRadius:i.w4.borderRadius.md,padding:"10px 12px"},children:[(0,o.jsx)("div",{style:b,children:e}),(0,o.jsxs)("div",{style:{...w,fontSize:24,color:n},children:[B<0&&e===S("finance.report.hero.balance")?"−":"",f(t),null!==a&&(0,o.jsx)("span",{style:{fontFamily:p,fontSize:13,fontWeight:600,fontVariantNumeric:"tabular-nums",color:a<=0?c:d,marginLeft:8},children:m(a)})]}),e===S("finance.report.hero.expenses")&&L>0&&(0,o.jsxs)("div",{style:{fontFamily:p,fontSize:11,color:i.w4.colors.mainTextMuted,marginTop:2},children:[S("finance.hero.vsPrevious")," ",f(L)]})]},e))}),P.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:y,children:S("finance.report.section.categories")}),(0,o.jsxs)("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[(0,o.jsx)("div",{style:{flexShrink:0},children:(0,o.jsx)(l.RJ,{data:P,total:H,size:110,centerLabel:U,centerValue:f(H)})}),(0,o.jsx)("div",{style:{flex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px 16px"},children:O.map(e=>(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,o.jsx)("span",{style:z(e.color)}),(0,o.jsx)("span",{style:{flex:1,fontSize:13,color:i.w4.colors.mainText,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label}),(0,o.jsxs)("span",{style:{fontFamily:p,fontSize:13,fontVariantNumeric:"tabular-nums",color:i.w4.colors.mainTextMuted,marginLeft:4},children:[e.pct,"%"]}),(0,o.jsx)("span",{style:{fontFamily:p,fontSize:13,fontVariantNumeric:"tabular-nums",color:i.w4.colors.mainText,minWidth:64,textAlign:"right"},children:f(e.value)})]},e.id))})]})]}),W.length>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:y,children:S("finance.report.section.members")}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:8},children:W.map(e=>(0,o.jsxs)("div",{style:{background:i.w4.colors.surface,border:`1px solid ${i.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:i.w4.borderRadius.md,padding:"8px 10px"},children:[(0,o.jsx)("div",{style:{fontFamily:p,fontSize:11,textTransform:"uppercase",letterSpacing:"0.1em",color:e.color,marginBottom:4},children:e.label}),(0,o.jsx)(u,{points:e.sparkPoints,color:e.color}),(0,o.jsx)("div",{style:{fontFamily:p,fontSize:18,fontWeight:700,fontVariantNumeric:"tabular-nums",color:i.w4.colors.mainText,marginTop:4},children:f(e.currentTotal)}),(0,o.jsxs)("div",{style:{fontFamily:p,fontSize:11,color:e.delta>0?d:c,marginTop:2},children:[m(e.delta)," ",S("finance.smallMultiples.vsLastMonth")]})]},e.id))})]}),Y.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:y,children:S("finance.report.section.top10")}),(0,o.jsxs)("table",{style:$,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:v,children:S("finance.report.table.date")}),(0,o.jsx)("th",{style:v,children:S("finance.report.table.description")}),(0,o.jsx)("th",{style:v,children:S("finance.report.table.category")}),(0,o.jsx)("th",{style:{...v,textAlign:"center"},children:S("finance.report.table.member")}),(0,o.jsx)("th",{style:k,children:S("finance.report.table.amount")})]})}),(0,o.jsx)("tbody",{children:Y.map((e,t)=>(0,o.jsxs)("tr",{style:{background:t%2==0?"transparent":"rgba(255,255,255,0.02)"},children:[(0,o.jsx)("td",{style:{...j,textAlign:"left",color:i.w4.colors.mainTextMuted},children:g(e.date,n)}),(0,o.jsx)("td",{style:M,children:e.description}),(0,o.jsx)("td",{style:M,children:(0,o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[(0,o.jsx)("span",{style:z(e.catColor)}),e.catLabel]})}),(0,o.jsx)("td",{style:{...M,textAlign:"center",fontFamily:p,fontSize:11,color:i.w4.colors.mainTextMuted},children:e.memberName}),(0,o.jsx)("td",{style:j,children:f(e.amount)})]},e.id))})]})]}),K.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:y,children:S("finance.report.section.insights")}),(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:K.slice(0,6).map((e,t)=>(0,o.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"6px 10px",background:i.w4.colors.surface,border:`1px solid ${i.w4.colors.border}`,borderLeft:`2px solid ${c}`,borderRadius:i.w4.borderRadius.sm,fontSize:13,color:i.w4.colors.mainText},children:[(0,o.jsx)("span",{style:{fontFamily:p,fontSize:11,color:c,flexShrink:0,marginTop:1},children:String(t+1).padStart(2,"0")}),(0,o.jsx)("span",{children:S(e.messageKey,e.params)})]},t))})]}),V.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:y,children:S("finance.report.section.reimbursables")}),V.map(e=>(0,o.jsxs)("div",{style:{marginBottom:12},children:[(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[(0,o.jsx)("div",{style:{fontFamily:p,fontSize:11,textTransform:"uppercase",letterSpacing:"0.1em",color:i.w4.colors.mainTextMuted},children:e.memberName}),(0,o.jsxs)("div",{style:{fontFamily:p,fontSize:13,fontWeight:700,fontVariantNumeric:"tabular-nums",color:d},children:[f(e.total)," (",e.count,")"]})]}),(0,o.jsx)("table",{style:$,children:(0,o.jsx)("tbody",{children:e.memberExpenses.map(e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{style:{...j,textAlign:"left",color:i.w4.colors.mainTextMuted,width:64},children:g(e.date,n)}),(0,o.jsx)("td",{style:M,children:e.description}),(0,o.jsx)("td",{style:j,children:f(e.amount)})]},e.id))})})]},e.memberId))]}),(0,o.jsxs)("div",{style:{marginTop:24,borderTop:`1px solid ${i.w4.colors.border}`,paddingTop:10,display:"flex",justifyContent:"space-between",fontFamily:p,fontSize:11,color:i.w4.colors.mainTextMuted},children:[(0,o.jsxs)("span",{children:["Atlantis Finance \xb7 ",S("finance.report.footer.generated")," ",G]}),(0,o.jsxs)("span",{children:["// ",S("finance.report.footer.confidential")]})]})]})})]})}},216(e,t,n){n.d(t,{S:()=>eo});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(8170),d=n(5030),p=n(9454),f=n(7711),m=n(948);let g="#7fb77e",u="#f85149",h="#58a6ff",x=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${h};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  animation: ${x} 0.25s ease both;
  min-width: 0;
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${h};
  }
`,y=i().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,w=i().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$=i().div`
  font-size: 22px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({positive:e})=>e?g:u};
  letter-spacing: -0.01em;
`,v=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,k=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,M=i().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`,j=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${l.w4.colors.mainTextMuted};
`,z=i().div`
  font-size: 13px;
  font-weight: 500;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({kind:e})=>"asset"===e?g:u};
`,T=i().div`
  margin: ${l.w4.spacing.md} 0 ${l.w4.spacing.sm};
  position: relative;
`,S=i().div`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
`,C=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,F=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${l.w4.spacing.md} 0;
`,R=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin: ${l.w4.spacing.md} 0 ${l.w4.spacing.xs};
`,A=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 5px 0;
  border-top: 1px solid ${l.w4.colors.border};

  &:first-of-type {
    border-top: none;
  }

  &:hover .nw-delete {
    opacity: 1;
  }
`,D=i().div`
  flex: 1;
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,E=i().button`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  transition: opacity 120ms ease, color 120ms ease;
  min-height: 28px;
  min-width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover { color: ${u}; }
  &:focus-visible { opacity: 1; outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,I=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.xs};
  flex-wrap: wrap;
`,B=i().input`
  flex: 1;
  min-width: 0;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 34px;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,L=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 13px;
  color: ${({kind:e})=>"asset"===e?g:u};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${l.w4.spacing.xs} 0;
  margin-top: ${l.w4.spacing.xs};
  transition: opacity 120ms ease;
  min-height: 36px;

  &:hover { opacity: 0.75; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,N=i().div`
  height: 1px;
  background: ${l.w4.colors.border};
  margin: ${l.w4.spacing.md} 0;
`,P=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${h};
  background: ${h}18;
  border: 1px solid ${h}44;
  border-radius: ${l.w4.borderRadius.sm};
  padding: 6px 12px;
  cursor: pointer;
  min-height: 32px;
  transition: background 120ms ease, border-color 120ms ease;
  margin-top: ${l.w4.spacing.sm};

  &:hover { background: ${h}30; border-color: ${h}; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,H=i().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 200;

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
  }
`,O=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} 0 0;
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  overflow-y: auto;
  animation: ${x} 0.2s ease both;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,W=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,Y=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
`,K=i().label`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,V=i().input`
  width: 100%;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,G=i().textarea`
  width: 100%;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  padding: ${l.w4.spacing.sm};
  outline: none;
  resize: vertical;
  min-height: 60px;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,U=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
  padding-top: ${l.w4.spacing.sm};

  &:first-of-type { border-top: none; padding-top: 0; }
`,q=i().div`
  flex: 1;
  font-size: 13px;
  color: ${({kind:e})=>"asset"===e?g:u};
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_=i().input`
  width: 110px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 0 ${l.w4.spacing.sm};
  height: 34px;
  text-align: right;
  outline: none;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,Z=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,X=i().button`
  flex: 1;
  min-height: 36px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({primary:e})=>e?h:l.w4.colors.border};
  background: ${({primary:e})=>e?`${h}22`:"transparent"};
  color: ${({primary:e})=>e?h:l.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: ${l.w4.typography.fontFamily};

  &:disabled { opacity: 0.4; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`;function J(){return new Date().toISOString().slice(0,10)}function Q(e,t){let n=Math.abs(e);return`${e<0?"−":""}€${Math.round(n).toLocaleString("pt"===t?"pt-PT":"en-GB")}`}function ee({series:e,locale:t,t:n}){let a,r;if(!e.some(e=>!e.estimated||0!==e.net))return(0,o.jsx)(F,{children:n("finance.netWorth.noSnapshots")});let i=e.length,s=e.map(e=>e.net),c=e.map(e=>e.assets),d=e.map(e=>e.liabilities),p=[...s,...c,...d],f=Math.min(0,...p),m=Math.max(0,...p),x=m-f||1,b=e=>0+e/(i-1)*400,y=e=>6+(m-e)/x*70;function w(e){return e.map((e,t)=>`${b(t)},${y(e)}`).join(" ")}let $=y(0);return(0,o.jsxs)(T,{children:[(0,o.jsxs)("svg",{viewBox:"0 0 400 80",preserveAspectRatio:"none",style:{width:"100%",height:"80px",display:"block",overflow:"visible"},"aria-label":n("finance.netWorth.change12m"),children:[f<0&&m>0&&(0,o.jsx)("line",{x1:0,y1:$,x2:400,y2:$,stroke:l.w4.colors.border,strokeWidth:1,strokeDasharray:"3 3"}),(0,o.jsx)("polyline",{points:w(c),fill:"none",stroke:`${g}88`,strokeWidth:1.5,strokeLinejoin:"round",strokeLinecap:"round"}),(0,o.jsx)("polyline",{points:w(d),fill:"none",stroke:`${u}88`,strokeWidth:1.5,strokeLinejoin:"round",strokeLinecap:"round"}),(0,o.jsx)("polyline",{points:w(s),fill:"none",stroke:h,strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round"}),(r=s[a=i-1],(0,o.jsx)("circle",{cx:b(a),cy:y(r),r:3,fill:h,stroke:l.w4.colors.surface,strokeWidth:1}))]}),(0,o.jsx)(S,{children:e.filter((e,t)=>0===t||t===Math.floor(i/2)||t===i-1).map(e=>(0,o.jsx)(C,{children:function(e,t){let[n,o]=e.split("-"),a=new Date(parseInt(n),parseInt(o)-1,1),r=a.toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"}),i=r.charAt(0).toUpperCase()+r.slice(1).replace(".","");return 0===a.getMonth()?`${i}'${String(a.getFullYear()).slice(2)}`:i}(e.month,t)},e.month))})]})}function et({kind:e,data:t,onSave:n,onCancel:r,t:i}){let[s,l]=(0,a.useState)("");async function c(){if(!s.trim())return;let o=(0,f.addNetWorthItem)(t,{label:s.trim(),kind:e});await n(o),r()}return(0,o.jsxs)(I,{children:[(0,o.jsx)(B,{type:"text",autoFocus:!0,placeholder:i("finance.netWorth.itemName"),value:s,onChange:e=>l(e.target.value),onKeyDown:e=>{"Enter"===e.key&&c(),"Escape"===e.key&&r()},"aria-label":i("finance.netWorth.itemName")}),(0,o.jsx)(X,{type:"button",onClick:r,children:i("finance.netWorth.cancel")}),(0,o.jsx)(X,{type:"button",primary:!0,disabled:!s.trim(),onClick:()=>{c()},children:i("finance.netWorth.save")})]})}function en({data:e,onSave:t,onClose:n,t:r}){let[i,s]=(0,a.useState)(J),[l,c]=(0,a.useState)(""),d=(0,a.useMemo)(()=>e.netWorthSnapshots[e.netWorthSnapshots.length-1],[e.netWorthSnapshots]),[p,m]=(0,a.useState)(()=>{let t={};for(let n of e.netWorthItems)t[n.id]=d?String(d.values[n.id]??""):"";return t});function g(e,t){m(n=>({...n,[e]:t}))}async function u(){let o={};for(let t of e.netWorthItems){let e=parseFloat(p[t.id]??"");!isNaN(e)&&e>=0&&(o[t.id]=e)}let a={date:i,values:o,notes:l.trim()||void 0,createdAt:Date.now()},r=(0,f.addOrUpdateSnapshot)(e,a);await t(r),n()}let h=e.netWorthItems.filter(e=>"asset"===e.kind),x=e.netWorthItems.filter(e=>"liability"===e.kind),b=e.netWorthItems.length>0;return(0,o.jsx)(H,{onClick:n,children:(0,o.jsxs)(O,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(W,{children:r("finance.netWorth.updateSnapshot")}),(0,o.jsxs)(Y,{children:[(0,o.jsx)(K,{htmlFor:"nw-snap-date",children:r("finance.netWorth.snapshotDate")}),(0,o.jsx)(V,{id:"nw-snap-date",type:"date",value:i,onChange:e=>s(e.target.value),max:J()})]}),h.length>0&&(0,o.jsxs)(Y,{children:[(0,o.jsx)(K,{children:r("finance.netWorth.assets")}),h.map(e=>(0,o.jsxs)(U,{children:[(0,o.jsx)(q,{kind:"asset",children:e.label}),(0,o.jsx)(_,{type:"number",min:"0",step:"0.01",placeholder:"0",value:p[e.id]??"",onChange:t=>g(e.id,t.target.value),"aria-label":e.label})]},e.id))]}),x.length>0&&(0,o.jsxs)(Y,{children:[(0,o.jsx)(K,{children:r("finance.netWorth.liabilities")}),x.map(e=>(0,o.jsxs)(U,{children:[(0,o.jsx)(q,{kind:"liability",children:e.label}),(0,o.jsx)(_,{type:"number",min:"0",step:"0.01",placeholder:"0",value:p[e.id]??"",onChange:t=>g(e.id,t.target.value),"aria-label":e.label})]},e.id))]}),(0,o.jsxs)(Y,{children:[(0,o.jsx)(K,{htmlFor:"nw-snap-notes",children:r("finance.netWorth.notes")}),(0,o.jsx)(G,{id:"nw-snap-notes",placeholder:r("finance.netWorth.notes"),value:l,onChange:e=>c(e.target.value)})]}),(0,o.jsxs)(Z,{children:[(0,o.jsx)(X,{type:"button",onClick:n,children:r("finance.netWorth.cancel")}),(0,o.jsx)(X,{type:"button",primary:!0,disabled:!b||!i,onClick:()=>{u()},children:r("finance.netWorth.save")})]})]})})}function eo(){let[e]=(0,c.Ym)(),t=(0,a.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{data:n,loaded:r,save:i}=(0,f.useFinance)(),[s,l]=(0,a.useState)(null),[g,u]=(0,a.useState)(!1),h=(0,a.useCallback)(async e=>{n&&((0,f.pushUndo)({id:`nw-${Date.now()}`,snapshot:n,labelKey:"finance.undo.label.edited",ts:Date.now()}),await i(e))},[n,i]);if(!r||null===n)return(0,o.jsxs)(b,{children:[(0,o.jsx)(d.YZ,{children:t("finance.netWorth.title")}),(0,o.jsx)(p.YG,{mode:"loading",label:t("loading")})]});let x=n.netWorthItems,T=n.netWorthSnapshots,S=x.filter(e=>"asset"===e.kind),C=x.filter(e=>"liability"===e.kind),F=(0,f.netWorthSeries)(T,x),I=T[T.length-1],B=I?(0,f.currentNetWorth)(I,x):null,H=async e=>{let t=(0,f.removeNetWorthItem)(n,e);(0,f.pushUndo)({id:`nw-del-${Date.now()}`,snapshot:n,labelKey:"finance.undo.label.deleted",ts:Date.now()}),await i(t)},O=0===x.length;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(b,{children:[(0,o.jsxs)(y,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(d.YZ,{children:t("finance.netWorth.title")}),null!==B&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)($,{positive:B.net>=0,children:Q(B.net,e)}),(0,o.jsx)(v,{children:t("finance.netWorth.current")})]})]}),null!==B&&(0,o.jsxs)(k,{children:[(0,o.jsxs)(M,{children:[(0,o.jsx)(j,{children:t("finance.netWorth.assets")}),(0,o.jsx)(z,{kind:"asset",children:Q(B.assets,e)})]}),(0,o.jsxs)(M,{children:[(0,o.jsx)(j,{children:t("finance.netWorth.liabilities")}),(0,o.jsx)(z,{kind:"liability",children:Q(B.liabilities,e)})]})]})]}),!O&&(0,o.jsx)(ee,{series:F,locale:e,t:t}),O&&(0,o.jsx)(p.YG,{mode:"empty",label:t("finance.netWorth.empty")}),!O&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{}),(0,o.jsx)(R,{children:t("finance.netWorth.assets")}),S.map(e=>(0,o.jsxs)(A,{children:[(0,o.jsx)(D,{children:e.label}),(0,o.jsx)(E,{type:"button",className:"nw-delete",title:t("finance.netWorth.delete"),"aria-label":`${t("finance.netWorth.delete")} — ${e.label}`,onClick:()=>{H(e.id)},children:(0,o.jsx)(d.In,{name:"trash",size:13})})]},e.id))]}),"asset"===s?(0,o.jsx)(et,{kind:"asset",data:n,onSave:h,onCancel:()=>l(null),t:t}):(0,o.jsx)(L,{kind:"asset",type:"button",onClick:()=>l("asset"),children:t("finance.netWorth.addAsset")}),!O&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{}),(0,o.jsx)(R,{children:t("finance.netWorth.liabilities")}),C.map(e=>(0,o.jsxs)(A,{children:[(0,o.jsx)(D,{children:e.label}),(0,o.jsx)(E,{type:"button",className:"nw-delete",title:t("finance.netWorth.delete"),"aria-label":`${t("finance.netWorth.delete")} — ${e.label}`,onClick:()=>{H(e.id)},children:(0,o.jsx)(d.In,{name:"trash",size:13})})]},e.id))]}),"liability"===s?(0,o.jsx)(et,{kind:"liability",data:n,onSave:h,onCancel:()=>l(null),t:t}):(0,o.jsx)(L,{kind:"liability",type:"button",onClick:()=>l("liability"),children:t("finance.netWorth.addLiability")}),(0,o.jsxs)(P,{type:"button",onClick:()=>u(!0),children:[(0,o.jsx)(d.In,{name:"save",size:13,"aria-hidden":!0}),t("finance.netWorth.updateSnapshot")]})]}),g&&(0,o.jsx)(en,{data:n,onSave:h,onClose:()=>u(!1),t:t})]})}},6579(e,t,n){n.d(t,{J:()=>f,j:()=>d});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(4764),l=n(5030),c=n(7711);function d(e,t=6,n=60){let o,a=((o=new Date).setDate(o.getDate()-n),o.toISOString().slice(0,10)),r={};for(let t of e)t.date>=a&&(r[t.categoryId]=(r[t.categoryId]??0)+1);let i=[...Object.entries(r).sort(([,e],[,t])=>t-e).map(([e])=>e)];for(let e of c.DEFAULT_CATEGORIES){if(i.length>=t)break;i.includes(e.id)||i.push(e.id)}return i.slice(0,t)}let p=i().div`
  display: flex;
  gap: ${s.w4.spacing.xs};
  overflow-x: auto;
  /* hide scrollbar — still scrollable via touch/drag */
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  /* ensure chips keep their height and don't wrap */
  flex-wrap: nowrap;
  padding-bottom: 2px; /* prevent clipping of the Chip focus ring */
`;function f({expenses:e,storedOrder:t,lockedCategoryId:n,onToggle:r,locale:i,groupLabel:s}){let m=(0,a.useMemo)(()=>(t&&t.length>0?t:d(e)).map(e=>c.DEFAULT_CATEGORIES.find(t=>t.id===e)).filter(e=>void 0!==e),[t,e]);return 0===m.length?null:(0,o.jsx)(p,{role:"group","aria-label":s,children:m.map(e=>{let t=n===e.id,a=(0,c.categoryLabel)(e,i),s="pt"===i?" — selecionado":" — selected";return(0,o.jsxs)(l.vu,{variant:t?"selected":"default",dotColor:e.color,onClick:()=>r(e.id),"aria-pressed":t,"aria-label":`${a}${t?s:""}`,title:a,children:[(0,l.n6)(e.icon)?(0,o.jsx)(l.In,{name:e.icon,size:14,"aria-hidden":!0,style:{marginRight:4}}):(0,o.jsx)("span",{"aria-hidden":!0,style:{marginRight:2},children:e.icon}),a]},e.id)})})}},1789(e,t,n){n.d(t,{b:()=>Q});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(8170),d=n(5030),p=n(9454),f=n(7711),m=n(948),g=n(4041);let u="#7fb77e",h="#f85149",x=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${u};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  animation: ${x} 0.25s ease both;
  min-width: 0;
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${u};
  }
`,y=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,w=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
`,$=i().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${l.w4.colors.accent};
  background: ${l.w4.colors.accent}14;
  border: 1px solid ${l.w4.colors.accent}44;
  border-radius: ${l.w4.borderRadius.sm};
  padding: 3px 8px;
  cursor: pointer;
  min-height: 28px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.accent}28;
    border-color: ${l.w4.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,v=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px 0;
  border-top: 1px solid ${l.w4.colors.border};
  opacity: ${({paused:e})=>e?.55:1};
  position: relative;

  &:first-of-type {
    border-top: none;
  }

  &:hover .rule-actions {
    opacity: 1;
  }
`,k=i().div`
  flex: 1;
  min-width: 0;
`,M=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1px;
  flex-wrap: wrap;
`,z=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
`,T=i().div`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  white-space: nowrap;
  min-width: 72px;
`,S=i().div`
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity 120ms ease;

  @media (max-width: ${l.w4.breakpoints.md}) {
    opacity: 1;
  }
`,C=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  color: ${({danger:e})=>e?h:l.w4.colors.mainTextMuted};
  transition: background 120ms ease, color 120ms ease;

  &:hover {
    background: ${({danger:e})=>e?`${h}18`:l.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?h:l.w4.colors.mainText};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,F=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} 0 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.sm};
`,R=i().label`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  display: block;
  margin-bottom: 4px;
`,A=i().div`
  display: flex;
  flex-direction: column;
`,D=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,E=i().input`
  flex: 1;
  min-width: 120px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};
  font-variant-numeric: tabular-nums;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,I=i().select`
  flex: 1;
  min-width: 120px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};

  &:focus { border-color: ${l.w4.colors.accent}; }

  option { background: ${l.w4.colors.surface}; }
`,B=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,L=i().button`
  flex: 1;
  min-height: 36px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({primary:e})=>e?u:l.w4.colors.border};
  background: ${({primary:e})=>e?`${u}22`:"transparent"};
  color: ${({primary:e})=>e?u:l.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: ${l.w4.typography.fontFamily};

  &:disabled { opacity: 0.4; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,N=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${l.w4.spacing.xs} 0;
  margin-top: ${l.w4.spacing.xs};
  transition: color 120ms ease;
  min-height: 36px;

  &:hover { color: ${l.w4.colors.accent}; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,P=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: ${l.w4.spacing.sm};
`,H=i().div`
  margin-top: ${l.w4.spacing.md};
  border-top: 1px solid ${l.w4.colors.border};
  padding-top: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,O=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px 0;
  border-top: 1px solid ${l.w4.colors.border};

  &:first-of-type {
    border-top: none;
  }
`,W=i().input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: ${l.w4.colors.accent};
  flex-shrink: 0;
`,Y=i().div`
  flex: 1;
  min-width: 0;
`,K=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1px;
`,G=i().div`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  white-space: nowrap;
  min-width: 64px;
`,U=i().button`
  min-height: 36px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.accent};
  background: ${l.w4.colors.accent}22;
  color: ${l.w4.colors.accent};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: ${l.w4.typography.fontFamily};
  padding: 0 ${l.w4.spacing.md};

  &:disabled { opacity: 0.4; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`;function q(e){return e.toFixed(2)}function _(e){return new Date(e).toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"2-digit"})}function Z(e){let t=new Date(e),n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${n}-${o}-${a}`}function X(e){return new Date(e+"T00:00:00").getTime()}function J(e){return{description:"",amount:"",categoryId:"other",cadence:"monthly",nextDueAt:Z(e),endsAt:"",memberId:""}}function Q(){let[e]=(0,c.Ym)(),t=(0,a.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{data:n,loaded:r,save:i}=(0,f.useFinance)(),[s,u]=(0,a.useState)(!1),[h,x]=(0,a.useState)(null),[Q,ee]=(0,a.useState)(()=>J(Date.now())),[et,en]=(0,a.useState)(!1),[eo,ea]=(0,a.useState)(new Set),er=(0,a.useMemo)(()=>(n?.recurringRules??[]).slice().sort((e,t)=>t.createdAt-e.createdAt),[n]),ei=(0,a.useMemo)(()=>n?(0,f.proposeRecurringRules)(n):[],[n]),es=(0,a.useCallback)(()=>{x(null),ee(J(Date.now())),u(!0),en(!1)},[]),el=(0,a.useCallback)(e=>{x(e.id),ee({description:e.description,amount:q(e.amount),categoryId:e.categoryId,cadence:e.cadence,nextDueAt:Z(e.nextDueAt),endsAt:e.endsAt?Z(e.endsAt):"",memberId:e.memberId??""}),u(!0),en(!1)},[]),ec=(0,a.useCallback)(()=>{u(!1),x(null)},[]),ed=(0,a.useCallback)(async()=>{if(!n)return;let e=parseFloat(Q.amount);if(!Q.description.trim()||isNaN(e)||e<=0)return;let t=Date.now(),o=Q.nextDueAt?X(Q.nextDueAt):t,a=Q.endsAt?X(Q.endsAt):void 0;if(h){let r=(n.recurringRules??[]).find(e=>e.id===h);if(!r)return;let s={...r,description:Q.description.trim(),amount:e,categoryId:Q.categoryId,cadence:Q.cadence,nextDueAt:o,endsAt:a,memberId:Q.memberId||void 0};(0,f.pushUndo)({id:(0,g.z)(),snapshot:n,labelKey:"finance.undo.label.edited",ts:t}),await i({...n,recurringRules:(n.recurringRules??[]).map(e=>e.id===s.id?s:e)})}else{let r={id:(0,g.z)(),description:Q.description.trim(),amount:e,categoryId:Q.categoryId,cadence:Q.cadence,nextDueAt:o,endsAt:a,memberId:Q.memberId||void 0,createdAt:t};(0,f.pushUndo)({id:(0,g.z)(),snapshot:n,labelKey:"finance.undo.label.added",ts:t}),await i({...n,recurringRules:[r,...n.recurringRules??[]]})}ec()},[n,Q,h,i,ec]),ep=(0,a.useCallback)(async e=>{if(!n)return;let t=Date.now();(0,f.pushUndo)({id:(0,g.z)(),snapshot:n,labelKey:"finance.undo.label.deleted",ts:t}),await i({...n,recurringRules:(n.recurringRules??[]).filter(t=>t.id!==e)})},[n,i]),ef=(0,a.useCallback)(async e=>{n&&await i({...n,recurringRules:(n.recurringRules??[]).map(t=>t.id===e?{...t,paused:!t.paused}:t)})},[n,i]),em=(0,a.useCallback)(async()=>{let e;if(!n||0===eo.size)return;let t=ei.filter(e=>eo.has(e.id)),o=Date.now();(0,f.pushUndo)({id:(0,g.z)(),snapshot:n,labelKey:"finance.undo.label.added",ts:o}),await i((e=t.map(e=>({id:(0,g.z)(),description:e.merchant,amount:e.amount,categoryId:e.categoryId,cadence:e.cadence,nextDueAt:e.suggestedNextDueAt,memberId:e.memberId,createdAt:o})),{...n,recurringRules:[...e,...n.recurringRules??[]]})),ea(new Set),en(!1)},[n,ei,eo,i]),eg=(0,a.useCallback)(e=>{ea(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]);return r?(0,o.jsxs)(b,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(d.YZ,{children:t("finance.recurring.title")}),(0,o.jsx)(w,{children:ei.length>0&&(0,o.jsx)($,{type:"button",onClick:()=>{en(e=>!e),u(!1)},"aria-expanded":et,children:t("finance.recurring.proposeFromHistory")})})]}),0===er.length&&!s&&(0,o.jsx)(p.YG,{mode:"empty",label:t("finance.recurring.empty")}),er.map(e=>{var n;return(0,o.jsxs)(v,{paused:e.paused,children:[(0,o.jsxs)(k,{children:[(0,o.jsx)(M,{children:e.description}),(0,o.jsxs)(j,{children:[(0,o.jsx)(d.Ex,{tone:"neutral",children:t("weekly"===(n=e.cadence)?"finance.recurring.cadence.weekly":"yearly"===n?"finance.recurring.cadence.yearly":"finance.recurring.cadence.monthly")}),(0,o.jsxs)(z,{children:[t("finance.recurring.nextDue")," ",_(e.nextDueAt)]}),e.paused&&(0,o.jsx)(d.Ex,{tone:"neutral",style:{color:"#facc15"},children:t("finance.recurring.paused")})]})]}),(0,o.jsxs)(T,{children:["€",q(e.amount)]}),(0,o.jsxs)(S,{className:"rule-actions",children:[(0,o.jsx)(C,{type:"button",title:t("finance.recurring.edit"),"aria-label":t("finance.recurring.edit"),onClick:()=>el(e),children:(0,o.jsx)(d.In,{name:"edit",size:14})}),(0,o.jsx)(C,{type:"button",title:e.paused?t("finance.recurring.resume"):t("finance.recurring.pause"),"aria-label":e.paused?t("finance.recurring.resume"):t("finance.recurring.pause"),onClick:()=>{ef(e.id)},children:(0,o.jsx)(d.In,{name:e.paused?"play":"pause",size:14})}),(0,o.jsx)(C,{type:"button",danger:!0,title:t("finance.recurring.delete"),"aria-label":t("finance.recurring.delete"),onClick:()=>{ep(e.id)},children:(0,o.jsx)(d.In,{name:"trash",size:14})})]})]},e.id)}),s&&(0,o.jsxs)(F,{children:[(0,o.jsx)(P,{children:h?t("finance.recurring.editTitle"):t("finance.recurring.newTitle")}),(0,o.jsxs)(D,{children:[(0,o.jsxs)(A,{style:{flex:2,minWidth:160},children:[(0,o.jsx)(R,{htmlFor:"rec-desc",children:t("finance.recurring.description")}),(0,o.jsx)(E,{id:"rec-desc",value:Q.description,onChange:e=>ee(t=>({...t,description:e.target.value})),placeholder:"Continente, Netflix…"})]}),(0,o.jsxs)(A,{style:{flex:1,minWidth:100},children:[(0,o.jsx)(R,{htmlFor:"rec-amount",children:t("finance.recurring.amount")}),(0,o.jsx)(E,{id:"rec-amount",type:"number",min:"0.01",step:"0.01",value:Q.amount,onChange:e=>ee(t=>({...t,amount:e.target.value})),placeholder:"12.50",style:{fontFamily:l.w4.typography.fontFamilyMono}})]})]}),(0,o.jsxs)(D,{children:[(0,o.jsxs)(A,{style:{flex:1,minWidth:120},children:[(0,o.jsx)(R,{htmlFor:"rec-cadence",children:t("finance.recurring.frequency")}),(0,o.jsxs)(I,{id:"rec-cadence",value:Q.cadence,onChange:e=>ee(t=>({...t,cadence:e.target.value})),children:[(0,o.jsx)("option",{value:"weekly",children:t("finance.recurring.cadence.weekly")}),(0,o.jsx)("option",{value:"monthly",children:t("finance.recurring.cadence.monthly")}),(0,o.jsx)("option",{value:"yearly",children:t("finance.recurring.cadence.yearly")})]})]}),(0,o.jsxs)(A,{style:{flex:1,minWidth:120},children:[(0,o.jsx)(R,{htmlFor:"rec-category",children:t("finance.recurring.category")}),(0,o.jsx)(I,{id:"rec-category",value:Q.categoryId,onChange:e=>ee(t=>({...t,categoryId:e.target.value})),children:f.DEFAULT_CATEGORIES.map(t=>(0,o.jsx)("option",{value:t.id,children:(0,f.categoryLabel)(t,e)},t.id))})]})]}),(0,o.jsxs)(D,{children:[(0,o.jsxs)(A,{style:{flex:1,minWidth:120},children:[(0,o.jsx)(R,{htmlFor:"rec-nextdue",children:t("finance.recurring.nextDue")}),(0,o.jsx)(E,{id:"rec-nextdue",type:"date",value:Q.nextDueAt,onChange:e=>ee(t=>({...t,nextDueAt:e.target.value}))})]}),(0,o.jsxs)(A,{style:{flex:1,minWidth:120},children:[(0,o.jsx)(R,{htmlFor:"rec-endsat",children:t("finance.recurring.endsAt")}),(0,o.jsx)(E,{id:"rec-endsat",type:"date",value:Q.endsAt,onChange:e=>ee(t=>({...t,endsAt:e.target.value}))})]})]}),(0,o.jsxs)(B,{children:[(0,o.jsx)(L,{type:"button",onClick:ec,children:t("finance.recurring.cancel")}),(0,o.jsx)(L,{type:"button",primary:!0,onClick:()=>{ed()},disabled:!Q.description.trim()||!parseFloat(Q.amount),children:t("finance.recurring.save")})]})]}),!s&&(0,o.jsxs)(N,{type:"button",onClick:es,children:[(0,o.jsx)(d.In,{name:"plus",size:14}),t("finance.recurring.addRule")]}),et&&(0,o.jsxs)(H,{children:[(0,o.jsx)(P,{children:t("finance.recurring.proposeTitle")}),0===ei.length?(0,o.jsx)(p.YG,{mode:"empty",label:t("finance.recurring.proposeEmpty")}):(0,o.jsxs)(o.Fragment,{children:[ei.map(e=>(0,o.jsxs)(O,{children:[(0,o.jsx)(W,{type:"checkbox",id:`prop-${e.id}`,checked:eo.has(e.id),onChange:()=>eg(e.id)}),(0,o.jsxs)(Y,{children:[(0,o.jsx)(K,{children:e.merchant}),(0,o.jsxs)(V,{children:[(0,o.jsx)(z,{children:t("finance.recurring.occurrences",{n:e.occurrences})}),(0,o.jsx)(z,{children:t("finance.recurring.lastSeen",{date:_(e.lastSeen)})})]})]}),(0,o.jsxs)(G,{children:["€",q(e.amount)]})]},e.id)),(0,o.jsxs)(U,{type:"button",disabled:0===eo.size,onClick:()=>{em()},children:[t("finance.recurring.accept")," (",eo.size,")"]})]})]})]}):(0,o.jsxs)(b,{children:[(0,o.jsx)(d.YZ,{children:t("finance.recurring.title")}),(0,o.jsx)(p.YG,{mode:"loading",label:t("loading")})]})}},1423(e,t,n){n.d(t,{p:()=>M});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(5030),d=n(7711);let p=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
  animation: ${p} 0.25s ease both;
`,m=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 8px ${l.w4.spacing.sm};
  background: ${({expanded:e})=>e?l.w4.colors.surface:"transparent"};
  border: 1px solid ${({expanded:e})=>e?l.w4.colors.border:"transparent"};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background 130ms ease, border-color 130ms ease, transform 130ms ease, box-shadow 130ms ease;

  &:hover {
    background: ${l.w4.colors.surface};
    border-color: ${l.w4.colors.border};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,g=i().span`
  flex: 1;
  min-width: 0;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,u=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 10px;
  padding: 1px 7px;
  letter-spacing: 0.04em;
  flex-shrink: 0;
`,h=i().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: #facc15;
  flex-shrink: 0;
  min-width: 72px;
  text-align: right;
`,x=i().span`
  color: ${l.w4.colors.mainTextMuted};
  transition: transform 160ms ease;
  transform: ${({expanded:e})=>e?"rotate(90deg)":"rotate(0deg)"};
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,b=i().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px ${l.w4.spacing.sm} 6px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-top: none;
  border-radius: 0 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md};
  margin-top: -${l.w4.borderRadius.md};
  padding-top: calc(${l.w4.borderRadius.md} + 4px);
`,y=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  padding: 4px 0;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }
`,w=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
  min-width: 48px;
`,$=i().span`
  flex: 1;
  min-width: 0;
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=i().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: #facc15;
  flex-shrink: 0;
  min-width: 60px;
  text-align: right;
`,k=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  padding: ${l.w4.spacing.xs} 0;
`;function M({expenses:e,familyMembers:t,getMemberColor:n,t:r,locale:i}){let[s,p]=(0,a.useState)(null),j=(0,a.useMemo)(()=>(0,d.pendingByMember)(e),[e]),z=(0,a.useMemo)(()=>{let t={};for(let n of e){if(!n.isReimbursable||n.reimbursed)continue;let e=n.childId??"shared";t[e]||(t[e]=[]),t[e].push(n)}return t},[e]);return 0===j.length?(0,o.jsx)(k,{children:r("finance.reimbursables.empty")}):(0,o.jsx)(f,{children:j.map(({memberId:e,count:a,total:d})=>{let f="shared"===e,k=t.find(t=>t.id===e),M=t.findIndex(t=>t.id===e),j=k?n(k,M):l.w4.colors.mainTextMuted,T=k?.name??r("finance.income.member.shared"),S=s===e,C=z[e]??[];return(0,o.jsxs)("div",{children:[(0,o.jsxs)(m,{type:"button",expanded:S,onClick:()=>p(S?null:e),"aria-expanded":S,"aria-label":`${T} — ${a} — €${d.toFixed(2)}`,children:[f?(0,o.jsx)(c.In,{name:"users",size:16,color:j}):k?(0,o.jsx)(c.eu,{member:{id:k.id,name:k.name,role:k.role,color:j},size:18}):(0,o.jsx)(c.In,{name:"user",size:16,color:j}),(0,o.jsx)(g,{style:{color:j},children:T}),(0,o.jsx)(u,{children:a}),(0,o.jsxs)(h,{children:["€",d.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]}),(0,o.jsx)(x,{expanded:S,"aria-hidden":"true",children:(0,o.jsx)(c.In,{name:"chevron-right",size:14,color:l.w4.colors.mainTextMuted})})]}),S&&(0,o.jsx)(b,{children:C.slice().sort((e,t)=>t.date.localeCompare(e.date)).map(e=>(0,o.jsxs)(y,{children:[(0,o.jsx)(w,{children:function(e,t){let[n,o,a]=e.split("-").map(Number);return new Date(n,o-1,a).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"2-digit",month:"2-digit"})}(e.date,i)}),(0,o.jsx)($,{title:e.description,children:e.description}),(0,o.jsxs)(v,{children:["€",e.amount.toFixed(2)]})]},e.id))})]},e)})})}},1331(e,t,n){n.d(t,{P:()=>B,g:()=>L});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(5030),d=n(8170),p=n(4041),f=n(2167),m=n(948);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=i().div`
  background: ${l.w4.colors.surface};
  border-bottom: 1px solid ${l.w4.colors.border};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  animation: ${g} 0.2s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none; /* hidden on mobile — shown via BottomSheet instead */
  }
`,h=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,x=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-wrap: wrap;
`,b=i().input`
  flex: 1;
  min-width: 180px;
  height: 36px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 0 ${l.w4.spacing.sm} 0 34px;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  outline: none;
  transition: border-color 120ms ease;
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &:focus { border-color: ${l.w4.colors.accent}; }
`,y=i().div`
  position: relative;
  flex: 1;
  min-width: 180px;
  display: flex;
  align-items: center;
`,w=i().div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${l.w4.colors.mainTextMuted};
  pointer-events: none;
  display: flex;
  align-items: center;
`,$=i().select`
  height: 36px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 0 ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;
  &:focus { border-color: ${l.w4.colors.accent}; }
`,v=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
`,k=i().input`
  width: 84px;
  height: 36px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 0 ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  outline: none;
  text-align: right;
  transition: border-color 120ms ease;
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &:focus { border-color: ${l.w4.colors.accent}; }
`,M=i().input`
  height: 36px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 0 ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;
  &:focus { border-color: ${l.w4.colors.accent}; }
  /* Prevent native date-picker chrome from overriding border */
  &::-webkit-calendar-picker-indicator { opacity: 0.6; cursor: pointer; }
`,j=i().label`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
`,z=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,T=i().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px 2px 10px;
  border-radius: 999px;
  border: 1px solid ${l.w4.colors.accent}40;
  background: ${l.w4.colors.accent}18;
  color: ${l.w4.colors.accent};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  min-height: 28px;
  transition: background 120ms ease, border-color 120ms ease;
  &:hover { background: ${l.w4.colors.accent}28; border-color: ${l.w4.colors.accent}60; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,S=i().input`
  height: 36px;
  flex: 1;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 0 ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  outline: none;
  transition: border-color 120ms ease;
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &:focus { border-color: ${l.w4.colors.accent}; }
`,C=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding-top: 2px;
`,F=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,R=i().div`
  height: 1px;
  background: ${l.w4.colors.border};
  margin: 2px 0;
`,A=i().div`
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,D=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,E=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`;function I(e){return!e.text&&!e.memberId&&!e.categoryId&&!e.dateFrom&&!e.dateTo&&void 0===e.amountMin&&void 0===e.amountMax&&(!e.tags||0===e.tags.length)}function B({open:e,query:t,onQueryChange:n,savedViews:r,onSaveView:i,onDeleteView:s,onClose:g,members:L,categories:N,locale:P,recentTags:H}){let O=(0,a.useMemo)(()=>(0,d.Nx)(P,m.A),[P]),[W,Y]=(0,a.useState)(!1),[K,V]=(0,a.useState)(""),G=(0,a.useRef)(null),U=(0,a.useCallback)(()=>{n({}),Y(!1),V("")},[n]),q=(0,a.useCallback)(e=>{n(e.query),Y(!1)},[n]),_=(0,a.useCallback)(()=>{let e=K.trim();e&&(i({id:(0,p.z)(),name:e,query:t,createdAt:Date.now()}),Y(!1),V(""))},[K,t,i]),Z=(0,a.useMemo)(()=>{let e;return e=0,t.text&&e++,t.memberId&&e++,t.categoryId&&e++,(t.dateFrom||t.dateTo)&&e++,(void 0!==t.amountMin||void 0!==t.amountMax)&&e++,t.tags&&t.tags.length>0&&e++,e},[t]),X=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(c.In,{name:"search",size:14})}),(0,o.jsx)(b,{ref:G,type:"search",value:t.text??"",onChange:e=>n({...t,text:e.target.value||void 0}),placeholder:O("finance.search.textPlaceholder"),"aria-label":O("finance.search.textPlaceholder")})]}),(0,o.jsxs)(x,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(j,{htmlFor:"search-member",children:O("finance.search.member")}),(0,o.jsxs)($,{id:"search-member",value:t.memberId??"",onChange:e=>n({...t,memberId:e.target.value||void 0}),"aria-label":O("finance.search.member"),children:[(0,o.jsx)("option",{value:"",children:O("finance.search.memberAll")}),L.map(e=>(0,o.jsx)("option",{value:e.id,children:e.name},e.id)),(0,o.jsx)("option",{value:"shared",children:O("finance.member.shared")})]})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(j,{htmlFor:"search-category",children:O("finance.search.category")}),(0,o.jsxs)($,{id:"search-category",value:t.categoryId??"",onChange:e=>n({...t,categoryId:e.target.value||void 0}),"aria-label":O("finance.search.category"),children:[(0,o.jsx)("option",{value:"",children:O("finance.search.categoryAll")}),N.map(e=>(0,o.jsx)("option",{value:e.id,children:e.labelEn??e.translationKey??e.id},e.id))]})]})]}),(0,o.jsxs)(x,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(j,{htmlFor:"search-date-from",children:O("finance.search.from")}),(0,o.jsx)(M,{id:"search-date-from",type:"date",value:t.dateFrom??"",onChange:e=>n({...t,dateFrom:e.target.value||void 0}),"aria-label":O("finance.search.from")})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(j,{htmlFor:"search-date-to",children:O("finance.search.to")}),(0,o.jsx)(M,{id:"search-date-to",type:"date",value:t.dateTo??"",onChange:e=>n({...t,dateTo:e.target.value||void 0}),"aria-label":O("finance.search.to")})]})]}),(0,o.jsx)(x,{children:(0,o.jsxs)(z,{children:[(0,o.jsx)(j,{children:O("finance.search.amountRange")}),(0,o.jsxs)(v,{children:[(0,o.jsx)(k,{type:"number",min:"0",step:"0.01",value:t.amountMin??"",onChange:e=>n({...t,amountMin:e.target.value?parseFloat(e.target.value):void 0}),placeholder:O("finance.search.minPlaceholder"),"aria-label":O("finance.search.amountMin")}),(0,o.jsx)(j,{children:"–"}),(0,o.jsx)(k,{type:"number",min:"0",step:"0.01",value:t.amountMax??"",onChange:e=>n({...t,amountMax:e.target.value?parseFloat(e.target.value):void 0}),placeholder:O("finance.search.maxPlaceholder"),"aria-label":O("finance.search.amountMax")})]})]})}),H.length>0&&(0,o.jsxs)(x,{children:[(0,o.jsx)(j,{children:O("finance.search.tags")}),(t.tags??[]).map(e=>(0,o.jsxs)(T,{type:"button",onClick:()=>{let o=(t.tags??[]).filter(t=>t!==e);n({...t,tags:o.length>0?o:void 0})},title:O("finance.search.removeTag"),children:[e,(0,o.jsx)(c.In,{name:"close",size:10})]},e)),(0,o.jsxs)($,{value:"",onChange:e=>{let o=e.target.value;if(!o)return;let a=t.tags??[];a.includes(o)||n({...t,tags:[...a,o]})},"aria-label":O("finance.search.addTag"),children:[(0,o.jsx)("option",{value:"",children:O("finance.search.addTag")}),H.filter(e=>!(t.tags??[]).includes(e)).map(e=>(0,o.jsx)("option",{value:e,children:e},e))]})]}),Z>0&&(0,o.jsx)(x,{children:(0,o.jsxs)(T,{type:"button",onClick:U,"aria-label":O("finance.search.reset"),children:[O("finance.search.reset"),(0,o.jsx)(c.In,{name:"close",size:10})]})})]}),J=!I(t)&&(W?(0,o.jsxs)(C,{children:[(0,o.jsx)(S,{type:"text",value:K,onChange:e=>V(e.target.value),placeholder:O("finance.search.viewNamePlaceholder"),onKeyDown:e=>{"Enter"===e.key&&_(),"Escape"===e.key&&Y(!1)},autoFocus:!0,"aria-label":O("finance.search.viewNamePlaceholder")}),(0,o.jsx)("button",{type:"button",style:{padding:"0 12px",height:36,borderRadius:l.w4.borderRadius.md,border:`1px solid ${l.w4.colors.accent}`,background:"transparent",color:l.w4.colors.accent,fontSize:13,fontFamily:l.w4.typography.fontFamily,cursor:"pointer",whiteSpace:"nowrap"},onClick:_,children:O("finance.search.saveView")}),(0,o.jsx)(c.K0,{onClick:()=>Y(!1),title:O("finance.search.cancel"),children:(0,o.jsx)(c.In,{name:"close",size:14})})]}):(0,o.jsx)("button",{type:"button",style:{alignSelf:"flex-start",padding:"0 10px",height:28,borderRadius:999,border:`1px solid ${l.w4.colors.border}`,background:"transparent",color:l.w4.colors.mainTextMuted,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,cursor:"pointer",transition:"border-color 120ms ease, color 120ms ease"},onClick:()=>Y(!0),children:O("finance.search.saveViewBtn")}));return e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u,{role:"search","aria-label":O("finance.search.panelLabel"),children:[(0,o.jsxs)(h,{children:[(0,o.jsx)(F,{children:O("finance.search.title")}),r.length>0&&(0,o.jsxs)(c.ms,{align:"left",trigger:(0,o.jsxs)("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:4,height:28,padding:"0 10px",border:`1px solid ${l.w4.colors.border}`,borderRadius:999,background:"transparent",color:l.w4.colors.mainTextMuted,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,cursor:"pointer",whiteSpace:"nowrap",transition:"border-color 120ms ease, color 120ms ease"},children:[(0,o.jsx)(c.In,{name:"save",size:12}),O("finance.search.savedViews")]}),children:[(0,o.jsx)(c.o_,{children:O("finance.search.savedViews")}),r.map(e=>(0,o.jsxs)(c.tJ,{onClick:()=>q(e),children:[(0,o.jsx)("span",{style:{flex:1},children:e.name}),(0,o.jsx)("button",{type:"button",style:{marginLeft:8,background:"none",border:"none",cursor:"pointer",color:l.w4.colors.mainTextMuted,padding:"2px 4px",borderRadius:4},onClick:t=>{t.stopPropagation(),s(e.id)},title:O("finance.search.deleteView"),children:(0,o.jsx)(c.In,{name:"trash",size:12})})]},e.id)),r.length>0&&(0,o.jsx)(c.rx,{}),(0,o.jsx)(c.tJ,{onClick:U,children:O("finance.search.reset")})]}),(0,o.jsx)("div",{style:{flex:1}}),(0,o.jsx)(c.K0,{onClick:g,title:O("finance.search.close"),children:(0,o.jsx)(c.In,{name:"close",size:14})})]}),X,J]}),(0,o.jsx)(f.X,{open:e,onClose:g,ariaLabel:O("finance.search.panelLabel"),maxWidth:560,children:(0,o.jsxs)(A,{children:[(0,o.jsx)(D,{children:(0,o.jsxs)(h,{children:[(0,o.jsx)(F,{children:O("finance.search.title")}),r.length>0&&(0,o.jsxs)(c.ms,{align:"left",trigger:(0,o.jsxs)("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:4,height:36,padding:"0 12px",border:`1px solid ${l.w4.colors.border}`,borderRadius:999,background:"transparent",color:l.w4.colors.mainTextMuted,fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,cursor:"pointer",whiteSpace:"nowrap"},children:[(0,o.jsx)(c.In,{name:"save",size:14}),O("finance.search.savedViews")]}),children:[(0,o.jsx)(c.o_,{children:O("finance.search.savedViews")}),r.map(e=>(0,o.jsxs)(c.tJ,{onClick:()=>{q(e),g()},children:[(0,o.jsx)("span",{style:{flex:1},children:e.name}),(0,o.jsx)("button",{type:"button",style:{marginLeft:8,background:"none",border:"none",cursor:"pointer",color:l.w4.colors.mainTextMuted,padding:"2px 4px",borderRadius:4},onClick:t=>{t.stopPropagation(),s(e.id)},title:O("finance.search.deleteView"),children:(0,o.jsx)(c.In,{name:"trash",size:12})})]},e.id)),r.length>0&&(0,o.jsx)(c.rx,{}),(0,o.jsx)(c.tJ,{onClick:U,children:O("finance.search.reset")})]})]})}),(0,o.jsxs)(D,{children:[(0,o.jsx)(E,{children:(0,o.jsxs)(y,{style:{flex:1},children:[(0,o.jsx)(w,{children:(0,o.jsx)(c.In,{name:"search",size:14})}),(0,o.jsx)(b,{type:"search",value:t.text??"",onChange:e=>n({...t,text:e.target.value||void 0}),placeholder:O("finance.search.textPlaceholder"),"aria-label":O("finance.search.textPlaceholder"),style:{width:"100%"}})]})}),(0,o.jsx)(E,{children:(0,o.jsxs)(z,{style:{flex:1},children:[(0,o.jsx)(j,{htmlFor:"m-search-member",children:O("finance.search.member")}),(0,o.jsxs)($,{id:"m-search-member",value:t.memberId??"",onChange:e=>n({...t,memberId:e.target.value||void 0}),style:{flex:1},children:[(0,o.jsx)("option",{value:"",children:O("finance.search.memberAll")}),L.map(e=>(0,o.jsx)("option",{value:e.id,children:e.name},e.id)),(0,o.jsx)("option",{value:"shared",children:O("finance.member.shared")})]})]})}),(0,o.jsx)(E,{children:(0,o.jsxs)(z,{style:{flex:1},children:[(0,o.jsx)(j,{htmlFor:"m-search-category",children:O("finance.search.category")}),(0,o.jsxs)($,{id:"m-search-category",value:t.categoryId??"",onChange:e=>n({...t,categoryId:e.target.value||void 0}),style:{flex:1},children:[(0,o.jsx)("option",{value:"",children:O("finance.search.categoryAll")}),N.map(e=>(0,o.jsx)("option",{value:e.id,children:e.labelEn??e.translationKey??e.id},e.id))]})]})}),(0,o.jsxs)(E,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(j,{htmlFor:"m-search-date-from",children:O("finance.search.from")}),(0,o.jsx)(M,{id:"m-search-date-from",type:"date",value:t.dateFrom??"",onChange:e=>n({...t,dateFrom:e.target.value||void 0})})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(j,{htmlFor:"m-search-date-to",children:O("finance.search.to")}),(0,o.jsx)(M,{id:"m-search-date-to",type:"date",value:t.dateTo??"",onChange:e=>n({...t,dateTo:e.target.value||void 0})})]})]}),(0,o.jsxs)(E,{children:[(0,o.jsx)(j,{children:O("finance.search.amountRange")}),(0,o.jsxs)(v,{children:[(0,o.jsx)(k,{type:"number",min:"0",step:"0.01",value:t.amountMin??"",onChange:e=>n({...t,amountMin:e.target.value?parseFloat(e.target.value):void 0}),placeholder:O("finance.search.minPlaceholder"),"aria-label":O("finance.search.amountMin")}),(0,o.jsx)(j,{children:"–"}),(0,o.jsx)(k,{type:"number",min:"0",step:"0.01",value:t.amountMax??"",onChange:e=>n({...t,amountMax:e.target.value?parseFloat(e.target.value):void 0}),placeholder:O("finance.search.maxPlaceholder"),"aria-label":O("finance.search.amountMax")})]})]}),H.length>0&&(0,o.jsxs)(E,{children:[(0,o.jsx)(j,{children:O("finance.search.tags")}),(t.tags??[]).map(e=>(0,o.jsxs)(T,{type:"button",onClick:()=>{let o=(t.tags??[]).filter(t=>t!==e);n({...t,tags:o.length>0?o:void 0})},children:[e,(0,o.jsx)(c.In,{name:"close",size:10})]},e)),(0,o.jsxs)($,{value:"",onChange:e=>{let o=e.target.value;if(!o)return;let a=t.tags??[];a.includes(o)||n({...t,tags:[...a,o]})},children:[(0,o.jsx)("option",{value:"",children:O("finance.search.addTag")}),H.filter(e=>!(t.tags??[]).includes(e)).map(e=>(0,o.jsx)("option",{value:e,children:e},e))]})]})]}),Z>0&&(0,o.jsxs)(D,{children:[(0,o.jsx)(R,{}),(0,o.jsx)(E,{children:(0,o.jsxs)(T,{type:"button",onClick:U,children:[O("finance.search.reset"),(0,o.jsx)(c.In,{name:"close",size:10})]})})]}),!I(t)&&(0,o.jsx)(D,{children:W?(0,o.jsxs)(C,{children:[(0,o.jsx)(S,{type:"text",value:K,onChange:e=>V(e.target.value),placeholder:O("finance.search.viewNamePlaceholder"),onKeyDown:e=>{"Enter"===e.key&&(_(),g()),"Escape"===e.key&&Y(!1)},autoFocus:!0}),(0,o.jsx)("button",{type:"button",style:{padding:"0 14px",height:44,borderRadius:l.w4.borderRadius.md,border:`1px solid ${l.w4.colors.accent}`,background:"transparent",color:l.w4.colors.accent,fontSize:13,fontFamily:l.w4.typography.fontFamily,cursor:"pointer",whiteSpace:"nowrap"},onClick:()=>{_(),g()},children:O("finance.search.saveView")})]}):(0,o.jsx)("button",{type:"button",style:{height:44,padding:"0 16px",borderRadius:l.w4.borderRadius.md,border:`1px solid ${l.w4.colors.border}`,background:"transparent",color:l.w4.colors.mainTextMuted,fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,cursor:"pointer",alignSelf:"flex-start"},onClick:()=>Y(!0),children:O("finance.search.saveViewBtn")})})]})})]}):null}function L({count:e,onClick:t,label:n}){return(0,o.jsxs)(T,{type:"button",onClick:t,"aria-label":n,style:{minHeight:32},children:[(0,o.jsx)(c.In,{name:"search",size:12}),e>0&&(0,o.jsx)("span",{style:{fontVariantNumeric:"tabular-nums"},children:e})]})}},5854(e,t,n){n.d(t,{m:()=>M});var o=n(5723),a=n(7991),r=n(2727),i=n.n(r),s=n(6859),l=n.n(s),c=n(2799),d=n(4764),p=n(5030);let f=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${d.w4.spacing.md};
  z-index: 2000;
  animation: ${f} 0.2s ease;
`,g=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${"#7fb77e"};
  border-radius: ${d.w4.borderRadius.lg};
  width: 100%;
  max-width: 420px;
  max-height: calc(100dvh - 80px);
  overflow-y: auto;
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};
  animation: ${f} 0.2s ease;
`,u=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,h=l().h2`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
  margin: 0;
`,x=l().button`
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainTextMuted};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  transition: border-color 120ms ease, color 120ms ease;
  flex-shrink: 0;

  &:hover {
    border-color: ${d.w4.colors.mainTextMuted};
    color: ${d.w4.colors.mainText};
  }

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,b=l().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding: 0;
`,y=l().li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
  padding: 8px ${d.w4.spacing.sm};
  border-radius: ${d.w4.borderRadius.md};
  transition: background 120ms ease;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
`,w=l().span`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  flex: 1;
`,$=l().div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`,v=l().div`
  border-top: 1px solid ${d.w4.colors.border};
`,k=[{key:"n",descKey:"finance.shortcuts.newExpense"},{key:"/",descKey:"finance.shortcuts.search"},{key:"m",descKey:"finance.shortcuts.changeMember"},{key:"g",descKey:"finance.shortcuts.goToMonth"},{key:"?",descKey:"finance.shortcuts.openOverlay"},{key:"Esc",descKey:"finance.shortcuts.close"}];function M({t:e,onClose:t}){let n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),t())};return document.addEventListener("keydown",e,!0),()=>document.removeEventListener("keydown",e,!0)},[t]),(0,a.useEffect)(()=>{n.current?.querySelector("[data-autofocus]")?.focus()},[]),i().createPortal((0,o.jsx)(m,{role:"dialog","aria-modal":"true","aria-label":e("finance.shortcuts.title"),onClick:e=>{e.target===e.currentTarget&&t()},children:(0,o.jsxs)(g,{ref:n,children:[(0,o.jsxs)(u,{children:[(0,o.jsx)(h,{children:e("finance.shortcuts.title")}),(0,o.jsx)(x,{onClick:t,"aria-label":e("finance.shortcuts.closeBtn"),"data-autofocus":"",children:"\xd7"})]}),(0,o.jsx)(v,{}),(0,o.jsx)(b,{children:k.map(({key:t,descKey:n})=>(0,o.jsxs)(y,{children:[(0,o.jsx)(w,{children:e(n)}),(0,o.jsx)($,{children:(0,o.jsx)(p.ue,{children:t})})]},t))}),(0,o.jsx)(v,{}),(0,o.jsx)("div",{style:{fontSize:11,fontFamily:d.w4.typography.fontFamilyMono,color:d.w4.colors.mainTextMuted,textTransform:"uppercase",letterSpacing:"0.12em"},children:e("finance.shortcuts.note")})]})}),document.body)}},7737(e,t,n){n.d(t,{n:()=>S});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764),c=n(8170),d=n(5030),p=n(9454),f=n(7711),m=n(948);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid #e89a5c;
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  animation: ${g} 0.25s ease both;
  min-width: 0;
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: #e89a5c;
  }
`,h=i().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,x=i().div`
  font-size: 20px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,b=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,y=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin: ${l.w4.spacing.md} 0 ${l.w4.spacing.xs};
`,w=i()(y)`
  color: #facc15;
`,$=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
`,v=i().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
`,k=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
`,M=i().div`
  height: 1px;
  background: ${l.w4.colors.border};
  margin: ${l.w4.spacing.md} 0 0;
`;function j(e){return e.toFixed(2)}function z(e){return 7===e?"finance.subs.cadence.weekly":365===e?"finance.subs.cadence.yearly":"finance.subs.cadence.monthly"}function T(e){return e.amount*(30/e.cadenceDays)}function S(){let[e]=(0,c.Ym)(),t=(0,a.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{candidates:n,monthlyTotal:r,cancelCandidates:i,loaded:s}=(0,f.useSubscriptions)();if(!s)return(0,o.jsxs)(u,{children:[(0,o.jsx)(d.YZ,{children:t("finance.subs.title")}),(0,o.jsx)(p.YG,{mode:"loading",label:t("loading")})]});if(0===n.length)return(0,o.jsxs)(u,{children:[(0,o.jsx)(d.YZ,{children:t("finance.subs.title")}),(0,o.jsx)(p.YG,{mode:"empty",label:t("finance.subs.empty")})]});let g=n.filter(e=>e.staleDays<=60).sort((e,t)=>T(t)-T(e)).slice(0,5);return(0,o.jsxs)(u,{children:[(0,o.jsxs)(h,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(d.YZ,{children:t("finance.subs.title")}),(0,o.jsx)(b,{children:t("finance.subs.monthlyTotal")})]}),(0,o.jsxs)(x,{children:["€",j(r)]})]}),g.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{children:t("finance.subs.activeHeader")}),g.map(e=>(0,o.jsx)(p.$8,{label:e.description,sub:(0,o.jsx)(d.Ex,{tone:"neutral",children:t(z(e.cadenceDays))}),value:(0,o.jsxs)(v,{children:["€",j(T(e)),(0,o.jsx)("span",{style:{fontSize:10,color:l.w4.colors.mainTextMuted},children:"/mo"})]})},e.id))]}),i.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M,{}),(0,o.jsx)(w,{children:t("finance.subs.staleHeader")}),i.slice(0,5).map(e=>(0,o.jsx)(p.$8,{label:e.description,sub:(0,o.jsx)(d.Ex,{tone:"neutral",children:t(z(e.cadenceDays))}),value:(0,o.jsxs)($,{children:[(0,o.jsx)(k,{children:t("finance.subs.staleDays",{n:e.staleDays})}),(0,o.jsxs)(v,{children:["€",j(e.amount)]})]})},e.id))]})]})}},9546(e,t,n){n.d(t,{S:()=>u});var o=n(5723),a=n(7991),r=n(6859),i=n.n(r),s=n(2799),l=n(4764);let c=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,d=(0,s.keyframes)`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(12px); }
`,p=i().div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: ${300};
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid #7fb77e;
  border-radius: ${l.w4.borderRadius.md};
  padding: 10px ${l.w4.spacing.md};
  min-width: 260px;
  max-width: 360px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  animation: ${({leaving:e})=>e?d:c} 0.22s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    left: 16px;
    right: 16px;
    bottom: 16px;
    min-width: 0;
  }
`,f=i().span`
  flex: 1;
  min-width: 0;
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,m=i().button`
  /* 44px minimum touch target height */
  min-height: 44px;
  min-width: 44px;
  padding: 0 ${l.w4.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: #7fb77e;
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 140ms ease, background 140ms ease;

  &:hover {
    border-color: #7fb77e;
    background: rgba(127, 183, 126, 0.08);
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,g=i().button`
  min-height: 44px;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;

  background: transparent;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 16px;
  cursor: pointer;
  flex-shrink: 0;
  transition: color 140ms ease;

  &:hover { color: ${l.w4.colors.mainText}; }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;function u({labelKey:e,onUndo:t,onDismiss:n,t:r,dismissMs:i=5e3}){let s=(0,a.useRef)(null),l=(0,a.useRef)(!1);(0,a.useEffect)(()=>{e&&(l.current=!1)},[e]),(0,a.useEffect)(()=>{if(e)return s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{n()},i),()=>{s.current&&clearTimeout(s.current)}},[e,i,n]);let c=(0,a.useCallback)(n=>{e&&!window.matchMedia("(hover: none) and (pointer: coarse)").matches&&(n.metaKey||n.ctrlKey)&&"z"===n.key&&!n.shiftKey&&(n.preventDefault(),t())},[e,t]);if((0,a.useEffect)(()=>(window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)),[c]),!e)return null;let d=r(e),h=r("finance.undo.action");return(0,o.jsxs)(p,{leaving:l.current,children:[(0,o.jsx)(f,{title:d,children:d}),(0,o.jsx)(m,{type:"button",onClick:t,"aria-label":h,children:h}),(0,o.jsx)(g,{type:"button",onClick:n,"aria-label":r("finance.undo.dismiss"),children:"\xd7"})]})}},3759(e,t,n){n.d(t,{H:()=>s});var o=n(7991),a=n(4764);let r="finance:active-range",i=new Set(["week","month","3m","6m","1y","all"]);function s(e="month"){let[t,n]=(0,o.useState)(e),[l,c]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{(0,a.PL)(r).then(e=>{e&&i.has(e)&&n(e),c(!1)})},[]),{range:t,setRange:(0,o.useCallback)(e=>{n(e),(0,a.Is)(r,e)},[]),loading:l}}},9146(e,t,n){n.d(t,{E:()=>a});var o=n(7991);function a(){let[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)(new Set),r=(0,o.useRef)(null),i=(0,o.useRef)(null),s=(0,o.useRef)(null),l=(0,o.useCallback)(()=>{r.current&&(clearTimeout(r.current),r.current=null),i.current=null,s.current=null},[]);(0,o.useEffect)(()=>()=>{l()},[l]);let c=(0,o.useCallback)(e=>{t(!0),e&&a(new Set([e]))},[]),d=(0,o.useCallback)(()=>{t(!1),a(new Set)},[]),p=(0,o.useCallback)(e=>{a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),f=(0,o.useCallback)(e=>{a(new Set(e))},[]),m=(0,o.useCallback)(()=>{a(new Set)},[]);(0,o.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e&&d()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e,d]);let g=(0,o.useCallback)(e=>({onPointerDown:t=>{("touch"===t.pointerType||"pen"===t.pointerType)&&(i.current={x:t.clientX,y:t.clientY},s.current=e,r.current=setTimeout(()=>{s.current===e&&c(e),l()},450))},onPointerMove:e=>{if(!i.current)return;let t=Math.abs(e.clientX-i.current.x),n=Math.abs(e.clientY-i.current.y);(t>8||n>8)&&l()},onPointerUp:()=>{l()},onPointerCancel:()=>{l()}}),[c,l]);return{selectedIds:n,selectMode:e,enterSelectMode:c,exitSelectMode:d,toggleId:p,selectAll:f,clearSelection:m,longPressHandlers:g}}},3616(e,t,n){n.d(t,{K:()=>a});var o=n(7991);function a({quickAddInputRef:e,monthSelectRef:t,memberIds:n,activeMemberId:r,onSelectMember:i,onSetTab:s,expenseModalOpen:l,onOpenExpenseModal:c,shortcutsOpen:d,onToggleShortcuts:p,onOpenSearch:f}){(0,o.useEffect)(()=>{if(window.matchMedia("(hover: none)").matches)return;let e=e=>{if(!e.ctrlKey&&!e.altKey&&!e.metaKey){if("?"===e.key){e.preventDefault(),p();return}if(!function(){let e=document.activeElement;if(!e)return!1;let t=e.tagName.toLowerCase();return"input"===t||"textarea"===t||"select"===t||!!e.isContentEditable}()&&!l)switch(e.key){case"n":e.preventDefault(),c();break;case"/":e.preventDefault(),f&&(s("expenses"),f());break;case"m":{if(0===n.length)break;e.preventDefault();let t=(n.indexOf(r)+1)%n.length,o=n[t];void 0!==o&&i(o);break}case"g":e.preventDefault(),t.current?t.current.focus():(s("expenses"),requestAnimationFrame(()=>{t.current?.focus()}))}}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[e,t,n,r,i,s,l,c,d,p,f])}},545(e,t,n){n.d(t,{x:()=>r});var o=n(7991),a=n(8170);function r(){let[e]=(0,a.Ym)(),[t,n]=(0,o.useState)(!1),r=(0,o.useRef)(null),i=function(){if("u"<typeof window)return null;let e=window;return e.SpeechRecognition??e.webkitSpeechRecognition??null}(),s=null!==i,l=(0,o.useCallback)(t=>{if(!i)return;if(r.current){try{r.current.abort()}catch{}r.current=null}let o=new i;o.lang="pt"===e?"pt-PT":"en-US",o.continuous=!1,o.interimResults=!1,o.maxAlternatives=1,o.onresult=e=>{let n=e.results[0];n&&n[0]&&t(n[0].transcript.trim())},o.onerror=()=>{n(!1),r.current=null},o.onend=()=>{n(!1),r.current=null},r.current=o,n(!0);try{o.start()}catch{n(!1),r.current=null}},[i,e]);return{supported:s,listening:t,start:l,stop:(0,o.useCallback)(()=>{if(r.current)try{r.current.stop()}catch{}},[]),cancel:(0,o.useCallback)(()=>{if(r.current){try{r.current.abort()}catch{}r.current=null}n(!1)},[])}}},948(e,t,n){n.d(t,{A:()=>o});let o={"finance.appTitle":{en:"Finance",pt:"Finan\xe7as"},"finance.nav.ariaLabel":{en:"Main navigation",pt:"Navega\xe7\xe3o principal"},"finance.form.sourcePlaceholder":{en:"Salary, freelance…",pt:"Sal\xe1rio, freelance…"},"finance.tab.overview":{en:"Overview",pt:"Vis\xe3o geral"},"finance.tab.expenses":{en:"Expenses",pt:"Despesas"},"finance.tab.insights":{en:"Insights",pt:"Insights"},"finance.tab.settings":{en:"Settings",pt:"Defini\xe7\xf5es"},"finance.tab.dashboard":{en:"Dashboard",pt:"Painel"},"finance.tab.transactions":{en:"Transactions",pt:"Despesas"},"finance.dashboard.balance":{en:"Balance",pt:"Saldo"},"finance.dashboard.thisMonth":{en:"This Month",pt:"Este M\xeas"},"finance.dashboard.weeklyStatus":{en:"This Week",pt:"Esta Semana"},"finance.dashboard.recentTitle":{en:"◉ Recent",pt:"◉ Recentes"},"finance.dashboard.noRecent":{en:"No transactions yet.",pt:"Sem transa\xe7\xf5es ainda."},"finance.dashboard.viewAll":{en:"View all →",pt:"Ver tudo →"},"finance.dashboard.income":{en:"Income",pt:"Receita"},"finance.dashboard.expenses":{en:"Expenses",pt:"Despesas"},"finance.dashboard.remaining":{en:"remaining",pt:"restante"},"finance.dashboard.spent":{en:"spent",pt:"gasto"},"finance.dashboard.budget":{en:"budget",pt:"or\xe7amento"},"finance.dashboard.projection":{en:"Projected end of week",pt:"Proje\xe7\xe3o fim de semana"},"finance.hero.spentIn":{en:"SPENT IN",pt:"GASTO EM"},"finance.hero.family":{en:"Family",pt:"Fam\xedlia"},"finance.hero.vsPrevious":{en:"vs",pt:"vs"},"finance.budget.weekly":{en:"Weekly budget",pt:"Or\xe7amento semanal"},"finance.budget.monthly":{en:"Monthly budget",pt:"Or\xe7amento mensal"},"finance.budget.used":{en:"used",pt:"usado"},"finance.budget.remaining":{en:"remaining",pt:"restam"},"finance.budget.over":{en:"over budget",pt:"acima do or\xe7amento"},"finance.budget.projected":{en:"projected",pt:"proje\xe7\xe3o"},"finance.charts.sixMonths":{en:"◉ Last 6 months",pt:"◉ \xdaltimos 6 meses"},"finance.charts.byCategory":{en:"◉ By category",pt:"◉ Por categoria"},"finance.charts.cashflow":{en:"◉ Cash flow",pt:"◉ Fluxo de caixa"},"finance.charts.cashflowSub":{en:"income vs. expenses \xb7 90 days",pt:"entrada vs sa\xedda \xb7 90 dias"},"finance.charts.heatmap":{en:"◉ Daily activity",pt:"◉ Actividade di\xe1ria"},"finance.charts.thisWeek":{en:"◉ This week",pt:"◉ Esta semana"},"finance.charts.total6m":{en:"Total 6M",pt:"Total 6M"},"finance.charts.monthlyAvg":{en:"Monthly avg",pt:"M\xe9dia mensal"},"finance.charts.monthsOverBudget":{en:"Months over budget",pt:"Meses acima do or\xe7amento"},"finance.charts.trend":{en:"Trend",pt:"Tend\xeancia"},"finance.charts.activity":{en:"Activity",pt:"Actividade"},"finance.charts.in":{en:"in",pt:"entrada"},"finance.charts.out":{en:"out",pt:"sa\xedda"},"finance.charts.less":{en:"less",pt:"menos"},"finance.charts.more":{en:"more",pt:"mais"},"finance.charts.ideal":{en:"ideal",pt:"ideal"},"finance.charts.actual":{en:"actual",pt:"actual"},"finance.charts.noData":{en:"NO DATA YET",pt:"SEM DADOS AINDA"},"finance.charts.viewAll":{en:"View all",pt:"Ver tudo"},"finance.quickAdd.title":{en:"◉ Quick Add",pt:"◉ Adicionar"},"finance.quickAdd.placeholder":{en:"12.50 continente or @name 12.50 farm\xe1cia",pt:"12.50 continente ou @nome 12.50 farm\xe1cia"},"finance.quickAdd.hint":{en:"Amount + description",pt:"Valor + descri\xe7\xe3o"},"finance.quickAdd.add":{en:"Add",pt:"Adicionar"},"finance.quickAdd.category":{en:"Category",pt:"Categoria"},"finance.quickAdd.added":{en:"Added",pt:"Adicionado"},"finance.quickAdd.addIncome":{en:"Add income",pt:"Adicionar receita"},"finance.quickAdd.source":{en:"Source",pt:"Fonte"},"finance.quickAdd.incomeAdded":{en:"Income added",pt:"Receita adicionada"},"finance.quickAdd.member":{en:"Member",pt:"Membro"},"finance.quickAdd.newExpense":{en:"+ New expense",pt:"+ Nova despesa"},"finance.balance.button":{en:"Set balance",pt:"Definir saldo"},"finance.balance.modalTitle":{en:"◉ Set current balance",pt:"◉ Definir saldo actual"},"finance.balance.current":{en:"Current (computed)",pt:"Actual (calculado)"},"finance.balance.target":{en:"Actual balance",pt:"Saldo real"},"finance.balance.targetHint":{en:"How much you actually have right now.",pt:"Quanto tens mesmo agora."},"finance.balance.deltaUp":{en:"Adds €{n} to opening balance",pt:"Adiciona €{n} ao saldo inicial"},"finance.balance.deltaDown":{en:"Removes €{n} from opening balance",pt:"Remove €{n} do saldo inicial"},"finance.balance.noChange":{en:"Already matches — no change needed.",pt:"J\xe1 corresponde — sem altera\xe7\xf5es."},"finance.balance.opening":{en:"Opening balance",pt:"Saldo inicial"},"finance.balance.save":{en:"Save",pt:"Guardar"},"finance.balance.cancel":{en:"Cancel",pt:"Cancelar"},"finance.income.modalTitle":{en:"◉ Add income",pt:"◉ Adicionar receita"},"finance.income.amount":{en:"Amount (€)",pt:"Valor (€)"},"finance.income.date":{en:"Date",pt:"Data"},"finance.income.source":{en:"Source",pt:"Fonte"},"finance.income.goal":{en:"Contribute to goal",pt:"Contribuir para objectivo"},"finance.income.goalNone":{en:"No goal",pt:"Sem objectivo"},"finance.income.add":{en:"Add income",pt:"Adicionar receita"},"finance.income.cancel":{en:"Cancel",pt:"Cancelar"},"finance.income.member.label":{en:"Member",pt:"Membro"},"finance.income.member.shared":{en:"Shared",pt:"Partilhado"},"finance.byMember.title":{en:"Income & spend by person",pt:"Rendimento e gasto por pessoa"},"finance.byMember.income":{en:"Income",pt:"Rendimento"},"finance.byMember.spend":{en:"Spend",pt:"Gasto"},"finance.byMember.net":{en:"Net",pt:"Saldo"},"finance.incomeMix.title":{en:"Income mix",pt:"Origem do rendimento"},"finance.tx.title":{en:"◉ Transactions",pt:"◉ Transa\xe7\xf5es"},"finance.tx.empty":{en:"No transactions this month.",pt:"Sem transa\xe7\xf5es este m\xeas."},"finance.tx.filter.all":{en:"All",pt:"Tudo"},"finance.tx.filter.expenses":{en:"Expenses",pt:"Despesas"},"finance.tx.filter.income":{en:"Income",pt:"Receita"},"finance.tx.delete":{en:"Delete",pt:"Eliminar"},"finance.tx.clone":{en:"Repeat today",pt:"Repetir hoje"},"finance.tx.reimbursed":{en:"Reimbursed",pt:"Reembolsado"},"finance.tx.reimbursable":{en:"Reimburse",pt:"Reembolsar"},"finance.tx.recurring":{en:"recurring",pt:"recorrente"},"finance.tx.markReimbursed":{en:"Mark as reimbursed",pt:"Marcar como reembolsado"},"finance.recent.title":{en:"◉ Recent expenses",pt:"◉ Despesas recentes"},"finance.recent.viewAll":{en:"View all ({n})",pt:"Ver todas ({n})"},"finance.insights.title":{en:"◉ Insights",pt:"◉ An\xe1lise"},"finance.insights.byCategory":{en:"◇ By Category",pt:"◇ Por Categoria"},"finance.insights.monthlyTrend":{en:"◇ Monthly Trend",pt:"◇ Tend\xeancia Mensal"},"finance.insights.noData":{en:"Not enough data yet.",pt:"Dados insuficientes."},"finance.insights.month":{en:"Month",pt:"M\xeas"},"finance.insights.total":{en:"Total",pt:"Total"},"finance.insights.memberCategoryUp":{en:"{name}'s {category} spending up {pct}% (€{prev} → €{current})",pt:"Gastos de {name} em {category} subiram {pct}% (€{prev} → €{current})"},"finance.insight.weekGood":{en:"€{remaining} left this week — on track!",pt:"€{remaining} restantes esta semana — tudo bem!"},"finance.insight.weekLow":{en:"Only €{remaining} left this week — be careful.",pt:"S\xf3 €{remaining} restantes esta semana — cuidado."},"finance.insight.weekOver":{en:"Weekly budget exceeded!",pt:"Or\xe7amento semanal ultrapassado!"},"finance.insight.projection":{en:"On track to spend €{amount} this week.",pt:"A caminho de gastar €{amount} esta semana."},"finance.insight.catHigh":{en:"{category} spending is near the limit.",pt:"Gastos em {category} perto do limite."},"finance.insight.catOver":{en:"{category} budget exceeded!",pt:"Or\xe7amento de {category} ultrapassado!"},"finance.insight.anomaly.sigma.title":{en:"{category} +{sigma}σ above average (€{current} vs mean €{mean})",pt:"{category} +{sigma}σ acima da m\xe9dia (€{current} vs m\xe9dia €{mean})"},"finance.insight.anomaly.first.title":{en:"First spend in {category} this month",pt:"Primeira despesa em {category} este m\xeas"},"finance.insights.anomalies":{en:"◉ ANOMALIES",pt:"◉ ANOMALIAS"},"finance.insights.anomalies.dismiss":{en:"Dismiss for 30 days",pt:"Ignorar por 30 dias"},"finance.insights.anomalies.none":{en:"No anomalies detected.",pt:"Sem anomalias detetadas."},"finance.member.all":{en:"All",pt:"Tudo"},"finance.member.shared":{en:"Shared",pt:"Partilhado"},"finance.member.add":{en:"+ Add member",pt:"+ Adicionar membro"},"finance.member.role.adult":{en:"Adult",pt:"Adulto"},"finance.member.role.child":{en:"Child",pt:"Crian\xe7a"},"finance.member.empty":{en:"ADD FAMILY MEMBERS →",pt:"ADICIONAR MEMBROS →"},"finance.member.name":{en:"Name",pt:"Nome"},"finance.member.color":{en:"Color",pt:"Cor"},"finance.member.save":{en:"Save",pt:"Guardar"},"finance.member.cancel":{en:"Cancel",pt:"Cancelar"},"finance.settings.title":{en:"◉ Budget Settings",pt:"◉ Or\xe7amento"},"finance.settings.weeklyBudget":{en:"Weekly budget (€)",pt:"Or\xe7amento semanal (€)"},"finance.settings.monthlyBudget":{en:"Monthly budget (€)",pt:"Or\xe7amento mensal (€)"},"finance.settings.save":{en:"Save",pt:"Guardar"},"finance.settings.saved":{en:"Saved",pt:"Guardado"},"finance.settings.familyTitle":{en:"◇ Family Members",pt:"◇ Membros da Fam\xedlia"},"finance.settings.addMember":{en:"Add member",pt:"Adicionar membro"},"finance.settings.memberName":{en:"Name",pt:"Nome"},"finance.settings.memberRole":{en:"Role",pt:"Papel"},"finance.settings.adult":{en:"Adult",pt:"Adulto"},"finance.settings.child":{en:"Child",pt:"Crian\xe7a"},"finance.settings.deleteMember":{en:"Delete",pt:"Eliminar"},"finance.allowance.sectionTitle":{en:"◇ Children & Allowances",pt:"◇ Crian\xe7as e Mesadas"},"finance.allowance.weeklyLabel":{en:"Weekly allowance (€)",pt:"Mesada semanal (€)"},"finance.allowance.weeklyNone":{en:"No allowance",pt:"Sem mesada"},"finance.allowance.balance":{en:"Balance",pt:"Saldo"},"finance.allowance.save":{en:"Save",pt:"Guardar"},"finance.allowance.noChildren":{en:'No children yet. Add a member with role "Child" to set up allowances.',pt:'Sem crian\xe7as ainda. Adiciona um membro com papel "Crian\xe7a" para configurar mesadas.'},"finance.kidMode.title":{en:"My Money",pt:"O Meu Dinheiro"},"finance.kidMode.balance":{en:"Balance",pt:"Saldo"},"finance.kidMode.weeklyAllowance":{en:"Weekly allowance",pt:"Mesada semanal"},"finance.kidMode.recentSpending":{en:"◉ Recent spending",pt:"◉ Gastos recentes"},"finance.kidMode.noSpending":{en:"No spending yet.",pt:"Sem gastos ainda."},"finance.kidMode.positive":{en:"Great — you're in the green!",pt:"\xd3timo — est\xe1s no verde!"},"finance.kidMode.negative":{en:"Oops — you're in the red.",pt:"Ups — est\xe1s no vermelho."},"finance.status.good":{en:"On track",pt:"Dentro do plano"},"finance.status.warning":{en:"Be careful",pt:"Aten\xe7\xe3o"},"finance.status.danger":{en:"Over budget",pt:"Or\xe7amento excedido"},"finance.footer.updated":{en:"updated",pt:"actualizado"},"finance.footer.ago":{en:"ago",pt:"h\xe1"},"finance.range.week":{en:"This week",pt:"Esta semana"},"finance.range.month":{en:"This month",pt:"Este m\xeas"},"finance.range.3m":{en:"3 months",pt:"3 meses"},"finance.range.6m":{en:"6 months",pt:"6 meses"},"finance.range.1y":{en:"1 year",pt:"1 ano"},"finance.range.all":{en:"All time",pt:"Tudo"},"finance.range.label":{en:"Time range",pt:"Per\xedodo"},"finance.range.pill.7d":{en:"7D",pt:"7D"},"finance.range.pill.month":{en:"M\xcaS",pt:"M\xcaS"},"finance.range.pill.3m":{en:"3M",pt:"3M"},"finance.range.pill.6m":{en:"6M",pt:"6M"},"finance.range.pill.year":{en:"ANO",pt:"ANO"},"finance.actions.filters":{en:"Filters",pt:"Filtros"},"finance.actions.categories":{en:"Categories",pt:"Categorias"},"finance.actions.settings":{en:"Settings",pt:"Defini\xe7\xf5es"},"finance.heatmap.title":{en:"BY DAY & TIME",pt:"POR DIA & HORA"},"finance.density.comfortable":{en:"Comfortable view",pt:"Vista confort\xe1vel"},"finance.density.compact":{en:"Compact view",pt:"Vista compacta"},"finance.density.toggle":{en:"Toggle list density",pt:"Alternar densidade da lista"},"finance.shortcuts.title":{en:"◉ KEYBOARD SHORTCUTS",pt:"◉ ATALHOS DE TECLADO"},"finance.shortcuts.closeBtn":{en:"Close shortcuts overlay",pt:"Fechar atalhos"},"finance.shortcuts.newExpense":{en:"New expense",pt:"Nova despesa"},"finance.shortcuts.search":{en:"Focus month picker / search",pt:"Focar seletor de m\xeas / pesquisa"},"finance.shortcuts.changeMember":{en:"Cycle to next member",pt:"Pr\xf3ximo membro"},"finance.shortcuts.goToMonth":{en:"Go to month picker",pt:"Ir para seletor de m\xeas"},"finance.shortcuts.openOverlay":{en:"Toggle this overlay",pt:"Abrir/fechar este painel"},"finance.shortcuts.close":{en:"Close overlay / modal",pt:"Fechar painel / modal"},"finance.shortcuts.note":{en:"Shortcuts are disabled when an input has focus.",pt:"Atalhos desativados quando um campo est\xe1 focado."},"finance.bulk.barLabel":{en:"Bulk actions",pt:"A\xe7\xf5es em massa"},"finance.bulk.selected":{en:"{n} selected|selected",pt:"{n} selecionado|selecionados"},"finance.bulk.selectAll":{en:"Select all",pt:"Selecionar tudo"},"finance.bulk.deselectAll":{en:"Deselect all",pt:"Desselecionar tudo"},"finance.bulk.categorise":{en:"Categorise",pt:"Categorizar"},"finance.bulk.reimburse":{en:"Mark reimbursed",pt:"Marcar reembolso"},"finance.bulk.tag":{en:"Tag",pt:"Etiquetar"},"finance.bulk.tagComingSoon":{en:"Tags coming soon",pt:"Etiquetas em breve"},"finance.bulk.delete":{en:"Delete",pt:"Eliminar"},"finance.bulk.cancel":{en:"Cancel",pt:"Cancelar"},"finance.bulk.select":{en:"Select",pt:"Selecionar"},"finance.bulk.categoriseTitle":{en:"◉ CHOOSE CATEGORY",pt:"◉ ESCOLHER CATEGORIA"},"finance.bulk.applyCategory":{en:"Apply",pt:"Aplicar"},"finance.bulk.deleteTitle":{en:"◉ DELETE EXPENSES",pt:"◉ ELIMINAR DESPESAS"},"finance.bulk.deleteConfirm":{en:"Delete {n} expense|expenses? This cannot be undone immediately — use Undo.",pt:"Eliminar {n} despesa|despesas? Pode ser revertido com Anular."},"finance.bulk.deleteConfirmBtn":{en:"Delete",pt:"Eliminar"},"finance.bulk.reimburseTitle":{en:"◉ MARK REIMBURSED",pt:"◉ MARCAR REEMBOLSO"},"finance.bulk.reimburseConfirm":{en:"Mark {n} reimbursable expense|expenses as reimbursed?",pt:"Marcar {n} despesa|despesas reembols\xe1veis como reembolsadas?"},"finance.bulk.reimburseConfirmBtn":{en:"Mark reimbursed",pt:"Marcar reembolsadas"},"finance.voice.listening":{en:"Listening…",pt:"A ouvir…"},"finance.voice.notSupported":{en:"Voice input is not supported on this device",pt:"Entrada de voz n\xe3o suportada neste dispositivo"},"finance.quickAdd.frequentCategories":{en:"Frequent categories",pt:"Categorias frequentes"},"finance.quickAdd.descToggle.show":{en:"+ description",pt:"+ descri\xe7\xe3o"},"finance.quickAdd.descToggle.hide":{en:"\xd7 description",pt:"\xd7 descri\xe7\xe3o"},"finance.quickAdd.descPlaceholder":{en:"Optional note — what was this for?",pt:"Nota opcional — para que foi?"},"finance.quickAdd.amountOnlyPlaceholder":{en:"Amount",pt:"Valor"},"finance.tags.placeholder":{en:"Add tag (e.g. vacation)",pt:"Adicionar etiqueta (ex. f\xe9rias)"},"finance.tags.empty":{en:"No tags yet",pt:"Sem etiquetas"},"finance.tags.label":{en:"Tags",pt:"Etiquetas"},"finance.tags.removeLabel":{en:"Remove tag {tag}",pt:"Remover etiqueta {tag}"},"finance.dayHourHeatmap.title":{en:"◉ By day & time",pt:"◉ Por dia e hora"},"finance.dayHourHeatmap.empty":{en:"NO SPENDING DATA YET",pt:"SEM DADOS DE GASTOS"},"finance.dayHourHeatmap.tooltip":{en:"{day} {hour} — {amount}",pt:"{day} {hour} — {amount}"},"finance.dayHourHeatmap.day.mon":{en:"Mo",pt:"Se"},"finance.dayHourHeatmap.day.tue":{en:"Tu",pt:"Te"},"finance.dayHourHeatmap.day.wed":{en:"We",pt:"Qu"},"finance.dayHourHeatmap.day.thu":{en:"Th",pt:"Qu"},"finance.dayHourHeatmap.day.fri":{en:"Fr",pt:"Se"},"finance.dayHourHeatmap.day.sat":{en:"Sa",pt:"S\xe1"},"finance.dayHourHeatmap.day.sun":{en:"Su",pt:"Do"},"finance.modal.amount":{en:"Amount (€)",pt:"Valor (€)"},"finance.modal.date":{en:"Date",pt:"Data"},"finance.modal.description":{en:"Description",pt:"Descri\xe7\xe3o"},"finance.modal.descPlaceholder":{en:"e.g. Continente, pharmacy…",pt:"ex. Continente, farm\xe1cia…"},"finance.modal.assign":{en:"Assign to",pt:"Atribuir a"},"finance.modal.member":{en:"Member",pt:"Membro"},"finance.modal.split":{en:"Split",pt:"Dividir"},"finance.modal.splitEach":{en:"{n}\xd7 €{amount} each",pt:"{n}\xd7 €{amount} cada"},"finance.modal.monthlyLabel":{en:"mensal",pt:"mensal"},"finance.subs.title":{en:"◉ Subscriptions",pt:"◉ Subscri\xe7\xf5es"},"finance.subs.monthlyTotal":{en:"est. monthly cost",pt:"custo mensal estimado"},"finance.subs.activeHeader":{en:"ACTIVE",pt:"ACTIVAS"},"finance.subs.staleHeader":{en:"STALE — REVIEW",pt:"INACTIVAS — REVER"},"finance.subs.empty":{en:"No recurring charges detected yet.",pt:"Sem subscri\xe7\xf5es detectadas ainda."},"finance.subs.staleDays":{en:"{n}d ago",pt:"h\xe1 {n}d"},"finance.subs.cadence.weekly":{en:"weekly",pt:"semanal"},"finance.subs.cadence.monthly":{en:"monthly",pt:"mensal"},"finance.subs.cadence.yearly":{en:"yearly",pt:"anual"},"finance.merchant.recent":{en:"Recent merchants",pt:"Comerciantes recentes"},"finance.goals.title":{en:"◉ Goals",pt:"◉ Metas"},"finance.goals.add":{en:"+ New goal",pt:"+ Nova meta"},"finance.goals.name":{en:"Goal name",pt:"Nome da meta"},"finance.goals.target":{en:"Target (€)",pt:"Objetivo (€)"},"finance.goals.deadline":{en:"Deadline (optional)",pt:"Data limite (opcional)"},"finance.goals.contribute":{en:"Contribute",pt:"Contribuir"},"finance.goals.amount":{en:"Amount (€)",pt:"Valor (€)"},"finance.goals.cancel":{en:"Cancel",pt:"Cancelar"},"finance.goals.save":{en:"Save",pt:"Guardar"},"finance.goals.delete":{en:"Delete goal",pt:"Eliminar meta"},"finance.goals.onTrack":{en:"On track",pt:"No ritmo"},"finance.goals.behind":{en:"Behind",pt:"Atrasado"},"finance.goals.achieved":{en:"Achieved!",pt:"Conseguido!"},"finance.goals.monthlyNeeded":{en:"€{n}/mo needed",pt:"€{n}/m\xeas necess\xe1rio"},"finance.goals.empty":{en:"No goals yet. Add one to start saving!",pt:"Sem metas. Adiciona uma para come\xe7ar a poupar!"},"finance.goals.progress":{en:"{pct}% of €{target}",pt:"{pct}% de €{target}"},"finance.goals.hero":{en:"{on} of {total} goals on track",pt:"{on} de {total} metas no ritmo certo"},"finance.goals.heroNone":{en:"No goals set",pt:"Sem metas definidas"},"finance.goals.member":{en:"Assign to member (optional)",pt:"Atribuir a membro (opcional)"},"finance.currency.label":{en:"Currency",pt:"Moeda"},"finance.currency.fxFailed":{en:"Could not fetch exchange rate. Try again or enter amount in €.",pt:"N\xe3o foi poss\xedvel obter a taxa de c\xe2mbio. Tenta de novo ou introduz o valor em €."},"finance.currency.original":{en:"Original amount",pt:"Valor original"},"finance.currency.converting":{en:"Converting…",pt:"A converter…"},"finance.undo.action":{en:"Undo",pt:"Anular"},"finance.undo.dismiss":{en:"Dismiss",pt:"Dispensar"},"finance.undo.label.added":{en:"Expense added — Undo",pt:"Despesa adicionada — Anular"},"finance.undo.label.deleted":{en:"Expense deleted — Undo",pt:"Despesa eliminada — Anular"},"finance.undo.label.edited":{en:"Expense updated — Undo",pt:"Despesa actualizada — Anular"},"finance.undo.label.reimbursed":{en:"Marked as reimbursed — Undo",pt:"Marcado como reembolsado — Anular"},"finance.undo.label.reverted":{en:"Change reverted",pt:"Altera\xe7\xe3o anulada"},"finance.bills.title":{en:"◉ Bills",pt:"◉ Contas"},"finance.bills.add":{en:"+ Add bill",pt:"+ Adicionar conta"},"finance.bills.payee":{en:"Payee",pt:"Benefici\xe1rio"},"finance.bills.amount":{en:"Amount (€)",pt:"Valor (€)"},"finance.bills.dueDate":{en:"Due date",pt:"Data de vencimento"},"finance.bills.category":{en:"Category (optional)",pt:"Categoria (opcional)"},"finance.bills.member":{en:"Member (optional)",pt:"Membro (opcional)"},"finance.bills.markPaid":{en:"Mark paid",pt:"Marcar pago"},"finance.bills.paid":{en:"Paid",pt:"Pago"},"finance.bills.overdue":{en:"OVERDUE",pt:"EM ATRASO"},"finance.bills.upcoming":{en:"UPCOMING",pt:"PR\xd3XIMAS"},"finance.bills.all":{en:"ALL BILLS",pt:"TODAS AS CONTAS"},"finance.bills.due3":{en:"due in 3d",pt:"vence em 3d"},"finance.bills.due1":{en:"due in 1d",pt:"vence amanh\xe3"},"finance.bills.dueToday":{en:"due today",pt:"vence hoje"},"finance.bills.overdueBy":{en:"overdue by {n}d",pt:"em atraso h\xe1 {n}d"},"finance.bills.empty":{en:"No bills yet. Add one to track upcoming payments.",pt:"Sem contas. Adiciona uma para acompanhar pagamentos."},"finance.bills.save":{en:"Save",pt:"Guardar"},"finance.bills.cancel":{en:"Cancel",pt:"Cancelar"},"finance.bills.delete":{en:"Delete bill",pt:"Eliminar conta"},"finance.bills.notes":{en:"Notes (optional)",pt:"Notas (opcional)"},"finance.recurring.makeRecurring":{en:"Make recurring?",pt:"Tornar recorrente?"},"finance.recurring.frequency":{en:"Frequency",pt:"Periodicidade"},"finance.recurring.cadence.weekly":{en:"Weekly",pt:"Semanal"},"finance.recurring.cadence.monthly":{en:"Monthly",pt:"Mensal"},"finance.recurring.cadence.yearly":{en:"Yearly",pt:"Anual"},"finance.recurring.confirm":{en:"Set recurring",pt:"Definir como recorrente"},"finance.recurring.cancel":{en:"Cancel",pt:"Cancelar"},"finance.recurring.firstDue":{en:"First due date",pt:"Primeira data"},"finance.recurring.ruleAdded":{en:"Recurring rule set",pt:"Regra recorrente criada"},"finance.recurring.title":{en:"◉ Recurring",pt:"◉ Recorrentes"},"finance.recurring.empty":{en:"No recurring rules yet.",pt:"Sem regras recorrentes ainda."},"finance.recurring.emptyHint":{en:"Rules auto-generate expenses on a schedule. Add one below or propose from history.",pt:"As regras criam despesas automaticamente. Adiciona uma ou prop\xf5e a partir do hist\xf3rico."},"finance.recurring.ruleLabel":{en:"{cadence} \xb7 €{amount}",pt:"{cadence} \xb7 €{amount}"},"finance.recurring.addRule":{en:"+ Add rule",pt:"+ Adicionar regra"},"finance.recurring.edit":{en:"Edit rule",pt:"Editar regra"},"finance.recurring.pause":{en:"Pause",pt:"Pausar"},"finance.recurring.resume":{en:"Resume",pt:"Retomar"},"finance.recurring.delete":{en:"Delete rule",pt:"Eliminar regra"},"finance.recurring.proposeFromHistory":{en:"Propose from history",pt:"Propor do hist\xf3rico"},"finance.recurring.occurrences":{en:"{n} occurrence|occurrences",pt:"{n} ocorr\xeancia|ocorr\xeancias"},"finance.recurring.lastSeen":{en:"last seen {date}",pt:"visto em {date}"},"finance.recurring.accept":{en:"Accept selected",pt:"Aceitar selecionados"},"finance.recurring.paused":{en:"PAUSED",pt:"PAUSADA"},"finance.recurring.nextDue":{en:"Next due",pt:"Pr\xf3xima"},"finance.recurring.endsAt":{en:"Ends on (optional)",pt:"Termina em (opcional)"},"finance.recurring.description":{en:"Description",pt:"Descri\xe7\xe3o"},"finance.recurring.amount":{en:"Amount (€)",pt:"Valor (€)"},"finance.recurring.category":{en:"Category",pt:"Categoria"},"finance.recurring.member":{en:"Member (optional)",pt:"Membro (opcional)"},"finance.recurring.save":{en:"Save",pt:"Guardar"},"finance.recurring.proposeTitle":{en:"◉ PROPOSED RULES",pt:"◉ REGRAS PROPOSTAS"},"finance.recurring.proposeEmpty":{en:"No monthly patterns found in the last 6 months.",pt:"Sem padr\xf5es mensais encontrados nos \xfaltimos 6 meses."},"finance.recurring.editTitle":{en:"◉ EDIT RULE",pt:"◉ EDITAR REGRA"},"finance.recurring.newTitle":{en:"◉ NEW RULE",pt:"◉ NOVA REGRA"},"finance.recurring.none":{en:"None",pt:"Nenhum"},"notifications.source.financeRecurring":{en:"Recurring expenses",pt:"Despesas recorrentes"},"finance.cashflow.legend.goal":{en:"goal savings",pt:"poupan\xe7a meta"},"finance.cashflow.legend.regular":{en:"income",pt:"rendimento"},"finance.forecast.title":{en:"◉ Cash flow + forecast",pt:"◉ Fluxo de caixa + previs\xe3o"},"finance.forecast.sub":{en:"historical + {n}-month projection",pt:"hist\xf3rico + previs\xe3o {n} meses"},"finance.forecast.projectedNegative":{en:"Projected negative balance on",pt:"Saldo previsto negativo em"},"finance.forecast.historical":{en:"Historical",pt:"Hist\xf3rico"},"finance.forecast.projected":{en:"Forecast",pt:"Previs\xe3o"},"finance.forecast.insightNegative":{en:"Projected balance goes negative around {date}",pt:"Saldo previsto negativo por volta de {date}"},"finance.forecast.range.3m":{en:"3M",pt:"3M"},"finance.forecast.range.6m":{en:"6M",pt:"6M"},"finance.forecast.range.1y":{en:"1A",pt:"1A"},"finance.categoryBudgets.title":{en:"◉ Category Budgets",pt:"◉ Or\xe7amentos por Categoria"},"finance.categoryBudgets.editBudgets":{en:"Edit budgets",pt:"Editar or\xe7amentos"},"finance.categoryBudgets.cancelEdit":{en:"Done",pt:"Conclu\xeddo"},"finance.categoryBudgets.edit":{en:"Edit",pt:"Editar"},"finance.categoryBudgets.amount":{en:"Budget (€)",pt:"Or\xe7amento (€)"},"finance.categoryBudgets.rollover":{en:"Roll over unspent",pt:"Transportar sobra"},"finance.categoryBudgets.rolloverHint":{en:"Unspent amount carries to next month",pt:"O valor n\xe3o gasto transita para o pr\xf3ximo m\xeas"},"finance.categoryBudgets.carryoverNote":{en:"rolled over from last month",pt:"transportado do m\xeas anterior"},"finance.categoryBudgets.spent":{en:"Spent",pt:"Gasto"},"finance.categoryBudgets.budget":{en:"Budget",pt:"Or\xe7amento"},"finance.categoryBudgets.category":{en:"Category",pt:"Categoria"},"finance.categoryBudgets.statusGood":{en:"OK",pt:"OK"},"finance.categoryBudgets.statusWarn":{en:"High",pt:"Alto"},"finance.categoryBudgets.statusOver":{en:"Over",pt:"Excedido"},"finance.categoryBudgets.empty":{en:"No category budgets set yet.",pt:"Sem or\xe7amentos por categoria ainda."},"finance.categoryBudgets.addBudget":{en:"Add category budget",pt:"Adicionar or\xe7amento de categoria"},"finance.categoryBudgets.save":{en:"Save",pt:"Guardar"},"finance.categoryBudgets.saveAll":{en:"Save all",pt:"Guardar tudo"},"finance.categoryBudgets.cancel":{en:"Cancel",pt:"Cancelar"},"finance.categoryBudgets.remove":{en:"Remove",pt:"Remover"},"finance.categoryRules.title":{en:"◉ Category Rules",pt:"◉ Regras de Categoria"},"finance.categoryRules.empty":{en:"No rules yet. Rules override keyword hints — add one to always categorize a pattern.",pt:"Sem regras ainda. As regras substituem as sugest\xf5es — adiciona uma para categorizar sempre um padr\xe3o."},"finance.categoryRules.orderNote":{en:"top-down \xb7 first match wins",pt:"topo para baixo \xb7 primeiro a corresponder vence"},"finance.categoryRules.addRule":{en:"+ Add rule",pt:"+ Adicionar regra"},"finance.categoryRules.addTitle":{en:"◉ NEW RULE",pt:"◉ NOVA REGRA"},"finance.categoryRules.editTitle":{en:"◉ EDIT RULE",pt:"◉ EDITAR REGRA"},"finance.categoryRules.match":{en:"Pattern",pt:"Padr\xe3o"},"finance.categoryRules.matchKind":{en:"Type",pt:"Tipo"},"finance.categoryRules.kindSubstring":{en:"text",pt:"texto"},"finance.categoryRules.kindRegex":{en:"regex",pt:"regex"},"finance.categoryRules.categorize":{en:"Categorize as",pt:"Categorizar como"},"finance.categoryRules.asMember":{en:"Assign to member",pt:"Atribuir a membro"},"finance.categoryRules.noMember":{en:"No member",pt:"Sem membro"},"finance.categoryRules.edit":{en:"Edit rule",pt:"Editar regra"},"finance.categoryRules.delete":{en:"Delete rule",pt:"Eliminar regra"},"finance.categoryRules.moveUp":{en:"Move up",pt:"Mover acima"},"finance.categoryRules.moveDown":{en:"Move down",pt:"Mover abaixo"},"finance.categoryRules.save":{en:"Save",pt:"Guardar"},"finance.categoryRules.cancel":{en:"Cancel",pt:"Cancelar"},"finance.categoryRules.invalidRegex":{en:"Invalid regex pattern",pt:"Padr\xe3o regex inv\xe1lido"},"finance.categoryRules.alwaysCategorize":{en:"Always categorize '{match}' as",pt:"Sempre categorizar '{match}' como"},"finance.categoryRules.propose":{en:"Yes",pt:"Sim"},"finance.categoryRules.dismiss":{en:"Dismiss",pt:"Dispensar"},"finance.netWorth.title":{en:"◉ Net Worth",pt:"◉ Patrim\xf3nio L\xedquido"},"finance.netWorth.current":{en:"Current net worth",pt:"Patrim\xf3nio l\xedquido actual"},"finance.netWorth.assets":{en:"Assets",pt:"Activos"},"finance.netWorth.liabilities":{en:"Liabilities",pt:"Passivos"},"finance.netWorth.addAsset":{en:"+ Add asset",pt:"+ Adicionar activo"},"finance.netWorth.addLiability":{en:"+ Add liability",pt:"+ Adicionar passivo"},"finance.netWorth.updateSnapshot":{en:"Update snapshot",pt:"Actualizar snapshot"},"finance.netWorth.snapshotDate":{en:"Date",pt:"Data"},"finance.netWorth.notes":{en:"Notes (optional)",pt:"Notas (opcional)"},"finance.netWorth.save":{en:"Save",pt:"Guardar"},"finance.netWorth.cancel":{en:"Cancel",pt:"Cancelar"},"finance.netWorth.delete":{en:"Delete item",pt:"Eliminar item"},"finance.netWorth.empty":{en:"Add assets and liabilities, then record a snapshot to start tracking.",pt:"Adiciona activos e passivos e guarda um snapshot para come\xe7ar a acompanhar."},"finance.netWorth.change12m":{en:"12-month change",pt:"Varia\xe7\xe3o 12 meses"},"finance.netWorth.noSnapshots":{en:"No snapshots yet",pt:"Sem snapshots ainda"},"finance.netWorth.itemName":{en:"Label (e.g. Savings account)",pt:"R\xf3tulo (ex. Poupan\xe7as)"},"finance.netWorth.estimated":{en:"est.",pt:"est."},"finance.netWorth.net":{en:"Net",pt:"L\xedquido"},"finance.filters.member":{en:"Member",pt:"Membro"},"finance.filters.category":{en:"Category",pt:"Categoria"},"finance.filters.reimbursableOnly":{en:"Reimbursable only",pt:"Apenas reembols\xe1veis"},"finance.filters.allCategories":{en:"All categories",pt:"Todas as categorias"},"finance.filters.reset":{en:"Reset filters",pt:"Limpar filtros"},"finance.filters.activeCount":{en:"Filters \xb7 {n}",pt:"Filtros \xb7 {n}"},"finance.categories.title":{en:"◉ Categories",pt:"◉ Categorias"},"finance.categories.new":{en:"+ New category",pt:"+ Nova categoria"},"finance.categories.edit":{en:"Edit",pt:"Editar"},"finance.categories.delete":{en:"Delete",pt:"Eliminar"},"finance.categories.confirmDelete":{en:"Delete this category?",pt:"Eliminar esta categoria?"},"finance.categories.iconLabel":{en:"Icon",pt:"\xcdcone"},"finance.categories.colorLabel":{en:"Color",pt:"Cor"},"finance.categories.labelEn":{en:"Label (EN)",pt:"R\xf3tulo (EN)"},"finance.categories.labelPt":{en:"Label (PT)",pt:"R\xf3tulo (PT)"},"finance.categories.save":{en:"Save",pt:"Guardar"},"finance.categories.cancel":{en:"Cancel",pt:"Cancelar"},"finance.categories.builtIn":{en:"Built-in",pt:"Predefinida"},"finance.insights.empty":{en:"No expenses in this period.",pt:"Sem despesas neste per\xedodo."},"finance.kpi.biggestExpense":{en:"BIGGEST EXPENSE",pt:"MAIOR DESPESA"},"finance.kpi.topSpender":{en:"TOP SPENDER",pt:"MAIOR GASTADOR"},"finance.kpi.busiestDay":{en:"BUSIEST DAY",pt:"DIA MAIS CARO"},"finance.kpi.pendingReimbursable":{en:"PENDING REIMBURSE",pt:"REEMBOLSOS PENDENTES"},"finance.kpi.pendingReimbursableSub":{en:"pending reimbursement",pt:"pendente de reembolso"},"finance.weekday.sun":{en:"Sunday",pt:"Domingo"},"finance.weekday.mon":{en:"Monday",pt:"Segunda"},"finance.weekday.tue":{en:"Tuesday",pt:"Ter\xe7a"},"finance.weekday.wed":{en:"Wednesday",pt:"Quarta"},"finance.weekday.thu":{en:"Thursday",pt:"Quinta"},"finance.weekday.fri":{en:"Friday",pt:"Sexta"},"finance.weekday.sat":{en:"Saturday",pt:"S\xe1bado"},"finance.insights.panel.moveLeft":{en:"Move left",pt:"Mover para a esquerda"},"finance.insights.panel.moveRight":{en:"Move right",pt:"Mover para a direita"},"finance.insights.panel.cycleSize":{en:"Resize panel",pt:"Redimensionar painel"},"finance.overview.panel.moveLeft":{en:"Move left",pt:"Mover para a esquerda"},"finance.overview.panel.moveRight":{en:"Move right",pt:"Mover para a direita"},"finance.overview.panel.cycleSize":{en:"Cycle size",pt:"Mudar tamanho"},"finance.reimbursables.tracker.title":{en:"◉ Pending reimbursables",pt:"◉ Reembolsos pendentes"},"finance.reimbursables.empty":{en:"No pending reimbursables.",pt:"Sem reembolsos pendentes."},"finance.reimbursables.expandMember":{en:"Expand expenses for {name}",pt:"Expandir despesas de {name}"},"finance.smallMultiples.title":{en:"◉ Spend by member",pt:"◉ Gasto por membro"},"finance.smallMultiples.empty":{en:"No member spend data yet.",pt:"Sem dados de gasto por membro."},"finance.smallMultiples.vsLastMonth":{en:"vs last month",pt:"vs m\xeas anterior"},"finance.report.button":{en:"Print report",pt:"Imprimir relat\xf3rio"},"finance.report.title":{en:"Monthly Report",pt:"Relat\xf3rio Mensal"},"finance.report.generated":{en:"Generated",pt:"Gerado em"},"finance.report.hero.income":{en:"INCOME",pt:"RECEITA"},"finance.report.hero.expenses":{en:"EXPENSES",pt:"DESPESAS"},"finance.report.hero.balance":{en:"BALANCE",pt:"SALDO"},"finance.report.section.categories":{en:"◉ SPENDING BY CATEGORY",pt:"◉ GASTO POR CATEGORIA"},"finance.report.section.members":{en:"◉ SPEND BY MEMBER",pt:"◉ GASTO POR MEMBRO"},"finance.report.section.top10":{en:"◉ TOP 10 EXPENSES",pt:"◉ TOP 10 DESPESAS"},"finance.report.section.insights":{en:"◉ INSIGHTS",pt:"◉ AN\xc1LISE"},"finance.report.section.reimbursables":{en:"◉ PENDING REIMBURSABLES",pt:"◉ REEMBOLSOS PENDENTES"},"finance.report.table.date":{en:"DATE",pt:"DATA"},"finance.report.table.description":{en:"DESCRIPTION",pt:"DESCRI\xc7\xc3O"},"finance.report.table.category":{en:"CATEGORY",pt:"CATEGORIA"},"finance.report.table.member":{en:"MEMBER",pt:"MEMBRO"},"finance.report.table.amount":{en:"AMOUNT",pt:"VALOR"},"finance.report.footer.generated":{en:"report for",pt:"relat\xf3rio de"},"finance.report.footer.confidential":{en:"CONFIDENTIAL",pt:"CONFIDENCIAL"},"finance.search.title":{en:"◉ SEARCH & FILTER",pt:"◉ PESQUISA & FILTRO"},"finance.search.panelLabel":{en:"Search and filter expenses",pt:"Pesquisar e filtrar despesas"},"finance.search.textPlaceholder":{en:"Search description…",pt:"Pesquisar descri\xe7\xe3o…"},"finance.search.member":{en:"Member",pt:"Membro"},"finance.search.memberAll":{en:"All members",pt:"Todos os membros"},"finance.search.category":{en:"Category",pt:"Categoria"},"finance.search.categoryAll":{en:"All categories",pt:"Todas as categorias"},"finance.search.from":{en:"From",pt:"De"},"finance.search.to":{en:"To",pt:"At\xe9"},"finance.search.amountRange":{en:"€",pt:"€"},"finance.search.amountMin":{en:"Min amount",pt:"Valor m\xednimo"},"finance.search.amountMax":{en:"Max amount",pt:"Valor m\xe1ximo"},"finance.search.minPlaceholder":{en:"Min",pt:"M\xedn"},"finance.search.maxPlaceholder":{en:"Max",pt:"M\xe1x"},"finance.search.tags":{en:"Tags",pt:"Etiquetas"},"finance.search.addTag":{en:"+ tag",pt:"+ etiqueta"},"finance.search.removeTag":{en:"Remove tag",pt:"Remover etiqueta"},"finance.search.reset":{en:"Clear filters",pt:"Limpar filtros"},"finance.search.savedViews":{en:"Saved views",pt:"Vistas guardadas"},"finance.search.saveViewBtn":{en:"+ Save this view",pt:"+ Guardar esta vista"},"finance.search.saveView":{en:"Save view",pt:"Guardar vista"},"finance.search.viewNamePlaceholder":{en:"View name…",pt:"Nome da vista…"},"finance.search.deleteView":{en:"Delete view",pt:"Eliminar vista"},"finance.search.close":{en:"Close search",pt:"Fechar pesquisa"},"finance.search.cancel":{en:"Cancel",pt:"Cancelar"},"finance.search.openSearch":{en:"Search expenses",pt:"Pesquisar despesas"},"finance.search.activeFilters":{en:"Search \xb7 {n}",pt:"Pesquisa \xb7 {n}"},"finance.search.noResults":{en:"No expenses match your search.",pt:"Nenhuma despesa corresponde \xe0 pesquisa."}}},789(e,t,n){n.d(t,{K:()=>o});function o(e=10){if(!("u"<typeof window||"u"<typeof navigator)&&window.matchMedia("(hover: none) and (pointer: coarse)").matches&&"function"==typeof navigator.vibrate)try{navigator.vibrate(e)}catch{}}},8170(e,t,n){n.d(t,{Ym:()=>d,Nx:()=>p});var o=n(7991),a=n(4764);let r={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},i="atlantis:locale",s="shell:locale";function l(e){return"en"===e||"pt"===e}function c(){try{let e=localStorage.getItem(i);if(l(e))return e}catch{}return"en"}function d(){let[e,t]=(0,o.useState)(c),n=(0,o.useCallback)(e=>{t(e);try{localStorage.setItem(i,e)}catch{}(0,a.Is)(s,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,o.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,o.useEffect)(()=>{(0,a.PL)(s).then(n=>{if(l(n)&&n!==e){try{localStorage.setItem(i,n)}catch{}t(n)}}).catch(()=>{})},[]),[e,n]}function p(e,t){let n=t?{...r,...t}:r;return(t,o)=>{let a=function(e,t){if(!t||!e.includes("|"))return e;let n=null;for(let e of Object.values(t))if("number"==typeof e&&Number.isFinite(e)){n=e;break}if(null===n)return e;let o=e.indexOf("|"),a=e.slice(0,o),r=e.slice(o+1);return 1===n?a:r}(n[t]?.[e]??t,o);return o?Object.entries(o).reduce((e,[t,n])=>e.replace(RegExp(`\\{${t}\\}`,"g"),String(n)),a):a}}(0,a.PL)(s).then(e=>{if(l(e))try{localStorage.setItem(i,e)}catch{}}).catch(()=>{}),n(5723);var f=n(6859),m=n.n(f);m().div`
  display: flex;
  gap: 4px;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 2px;
`,m().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${a.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?a.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":a.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":a.w4.colors.mainText};
  }
`},5030(e,t,n){n.d(t,{o_:()=>S,YZ:()=>Q,n6:()=>A,rl:()=>ei,dO:()=>ez,ms:()=>j,vu:()=>K,Ex:()=>_,$n:()=>b,RN:()=>R,tJ:()=>z,In:()=>D,ue:()=>X,K0:()=>v,rx:()=>T,eu:()=>P});var o=n(5723),a=n(7991),r=n.n(a),i=n(6859),s=n.n(i),l=n(4764);let c={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},d={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},f={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},m={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={sm:"28px",md:"30px"},u={sm:"0 10px",md:"0 12px"},h={sm:"12px",md:"12px"},x=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>g[e]};
  padding: ${({size:e})=>u[e]};
  background: ${({variant:e})=>c[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>f[e]};
  font-size: ${({size:e})=>h[e]};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>d[e]};
    color: ${({variant:e})=>m[e]};
    border-color: ${({variant:e})=>"ghost"===e?l.w4.colors.accent:p[e]};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,b=r().forwardRef(function({variant:e="ghost",size:t="md",icon:n,iconRight:a,children:r,...i},s){return(0,o.jsxs)(x,{ref:s,variant:e,size:t,...i,children:[n,r,a]})}),y={default:l.w4.colors.accent,danger:"#f85149"},w={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},$=s().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${l.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover:not(:disabled) {
    color: ${({tone:e})=>y[e]};
    background: ${({tone:e})=>w[e]};
    border-color: ${({tone:e})=>y[e]};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,v=r().forwardRef(function({active:e=!1,shape:t="square",tone:n="default",children:a,...r},i){return(0,o.jsx)($,{ref:i,active:e,shape:t,tone:n,...r,children:a})}),k=s().div`
  position: relative;
  display: inline-flex;
`,M=s().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`;function j({trigger:e,children:t,align:n="right",open:i,onOpenChange:s}){let[l,c]=(0,a.useState)(!1),d=i??l,p=e=>{s&&s(e),void 0===i&&c(e)},f=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!d)return;let e=e=>{f.current&&!f.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d]);let m=r().cloneElement(e,{onClick:t=>{e.props.onClick?.(t),p(!d)},"aria-expanded":d,"aria-haspopup":"menu"});return(0,o.jsxs)(k,{ref:f,children:[m,d&&(0,o.jsx)(M,{align:n,role:"menu",children:t})]})}let z=s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: -2px;
  }
`,T=s().div`
  height: 1px;
  margin: 4px 0;
  background: ${l.w4.colors.sidebarBorder};
`,S=s().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`;s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,s().span`
  width: 1px;
  height: 20px;
  background: ${l.w4.colors.border};
  flex-shrink: 0;
`,s().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,s()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:t})=>e||t?l.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:t})=>e||t?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${l.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${l.w4.focusRing} }
`,n(2727);var C=n(2799);let F={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'},R=Object.keys(F);function A(e){return Object.prototype.hasOwnProperty.call(F,e)}function D({name:e,size:t=18,strokeWidth:n=1.5,...a}){let r=F[e];return(0,o.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!a["aria-label"]||void 0,...a,dangerouslySetInnerHTML:{__html:r}})}let E=s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${l.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,I=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${l.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,B=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"],L=0,N=new Map;function P({member:e,size:t=24}){var n,a;let r,i="shared"===e.id||"shared"===e.role,s=Math.floor(.55*t),c=t<=18?8:t<=22?9:t<=28?11:12;if(i)return(0,o.jsx)(E,{size:t,bg:l.w4.colors.surface,ring:!0,"aria-label":"Shared",title:"Shared",style:{color:l.w4.colors.mainTextMuted},children:(0,o.jsx)(D,{name:"home",size:s,"aria-hidden":!0})});let d=(n=e.id,(a=e.color)?a:(!N.has(n)&&(N.set(n,B[L%B.length]),L++),N.get(n))),p="adult"===e.role,f=(r=e.name.trim().split(/\s+/),((r[0]?.[0]??"")+(r[1]?.[0]??"")).toUpperCase().slice(0,2));return(0,o.jsx)(E,{size:t,bg:d,ring:p,title:e.name,children:(0,o.jsx)(I,{fontSize:c,children:f})})}s().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,s().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  border: 1px solid ${l.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 700;
  color: ${l.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;let H=(0,C.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  &:hover {
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,s().span`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,s().div`
  position: fixed;
  min-width: 240px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${H} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${l.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,s().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,s().div`
  margin-bottom: 10px;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,s().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,s().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.md};
`,s().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
    background: ${({active:e})=>e?l.w4.colors.accentMuted:l.w4.colors.sidebarHover};
  }
`,s().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":l.w4.colors.mainText};
  }
`,n(8170),s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    gap: ${l.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  min-width: 180px;
  padding: 0 6px 0 12px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderStrong};
  border-radius: 999px;
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast}, box-shadow ${l.w4.transitions.fast};
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  .label {
    flex: 1;
    text-align: left;
    color: ${l.w4.colors.mainTextMuted};
    font-weight: 500;
    letter-spacing: -0.1px;
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    min-width: 0;
    padding: 0 12px;
    .label { display: none; }
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${l.w4.colors.sidebarHover};
    border: 1px solid ${l.w4.colors.borderSubtle};
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${l.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  }

  &:hover {
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.surfaceRaised};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
  &:hover .label { color: ${l.w4.colors.mainText}; }
  &:hover .kbd {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent}55;
    background: ${l.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,s().div`
  position: relative;
  display: inline-flex;
`,s().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${l.w4.colors.mainBg};
  color: #fff;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${l.w4.colors.accent};
  border: 1px solid ${l.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.accentHover};
    border-color: ${l.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,s().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,s().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,s().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${l.w4.transitions.fast};
`,s().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${l.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,s().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${l.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,s().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${l.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;let O=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${O} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${l.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${l.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,s().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  color: ${l.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${l.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${l.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${l.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${l.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${l.w4.colors.mainText}; }
    & .b { color: ${l.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${l.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${l.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${l.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${l.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${l.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${l.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${l.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${l.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${l.w4.colors.mainText};
      font-family: ${l.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${l.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${l.w4.colors.mainText};
    }
  }
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${l.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${l.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,s().div`
  padding: 6px 14px 16px;
`,s().h3`
  margin: 0 0 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${l.w4.colors.mainText};

  .hash {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,s().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${l.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.4;
`,s().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${l.w4.transitions.fast}, color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
  }
`,s().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 3;
`;let W=s().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?l.w4.colors.borderStrong:l.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?l.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?l.w4.colors.mainTextMuted:l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?l.w4.colors.mainTextFaint:l.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?l.w4.colors.mainText:l.w4.colors.accentHover};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,Y=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`,K=r().forwardRef(function({variant:e="default",dotColor:t,children:n,onClick:a,...r},i){return(0,o.jsxs)(W,{ref:i,variant:e,clickable:!!a,onClick:a,type:r.type??"button",...r,children:[t&&(0,o.jsx)(Y,{color:t}),n]})}),V={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},G={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent},U=s().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?l.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>V[e]};
  color: ${({tone:e})=>G[e]};
`,q=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function _({tone:e="neutral",dot:t,children:n,...a}){return(0,o.jsxs)(U,{tone:e,...a,children:[(t??"live"===e)&&(0,o.jsx)(q,{}),n]})}let Z=s().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;function X({children:e,...t}){return(0,o.jsx)(Z,{...t,children:e})}let J=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function Q({children:e,...t}){return(0,o.jsx)(J,{...t,children:e})}s().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${l.w4.transitions.fast};

  &:focus-within {
    border-color: ${l.w4.colors.accent};
  }
`,s().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${l.w4.colors.mainTextFaint};
  }
`,s().span`
  display: inline-flex;
  align-items: center;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`;let ee=s().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px 20px 20px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  transition: border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,et=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,en=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,eo=s().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,ea=s().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  line-height: 1.45;
`,er=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`;function ei({title:e,accessory:t,accentColor:n,error:a,errorLabel:r,children:i}){return(0,o.jsxs)(ee,{accentColor:n,"data-widget-shell":!0,children:[(0,o.jsxs)(et,{children:[(0,o.jsx)(Q,{children:e}),t&&(0,o.jsx)(en,{children:t})]}),a?(0,o.jsxs)(ea,{role:"alert",children:[(0,o.jsx)(er,{children:r??"Error"}),(0,o.jsx)("div",{children:a})]}):(0,o.jsx)(eo,{children:i})]})}s().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${l.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${l.w4.colors.accent}`:"none"};
  transition: border-color ${l.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?l.w4.colors.accentHover:l.w4.colors.borderStrong};
  }
`,s().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,s().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,s().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,s().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${l.w4.colors.mainText};
  margin-bottom: 4px;
`,s().div`
  font-size: 11.5px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,s().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${l.w4.colors.accentMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,s().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,s().button`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${l.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    background: ${l.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }
`,s().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,s().div`
  font-size: 11px;
  color: ${l.w4.colors.mainText};
`,s().div`
  margin-top: 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`,s().div`
  position: relative;
  display: inline-block;
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?l.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?l.w4.colors.borderStrong:l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.borderStrong};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${l.w4.colors.accentMuted};
  color: ${l.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let es=(0,C.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;s().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${l.w4.elevation.lg};
  z-index: ${l.w4.zIndex.dropdown};
  animation: ${es} 0.18s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,s()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?l.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${l.w4.transitions.fast};

  &:hover { background: ${l.w4.colors.surfaceHover}; }
  &:focus-visible { ${l.w4.focusRing} }
`,s()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,s().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,s().span`
  font-size: 13.5px;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,s()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,s().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${l.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.surfaceHover};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,s().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,s().span`
  margin-left: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;let el=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${el} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${l.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${l.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${l.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,s().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  z-index: 2;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${l.w4.colors.codeBg};

  /* ── bombbrawl — explosive red, heavy condensed logotype ──
   * padding-top reserves room for the player-count + online badges so
   * "BOMB" never sits under them (TopLeft / TopRight are absolutely
   * positioned at top:10px). */
  &.hero--bombbrawl {
    background: linear-gradient(135deg, #2a0a0f, #0f0a12);
    justify-content: flex-start;
    padding: 44px 20px 16px;
  }
  &.hero--bombbrawl .hero-mark {
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 48px;
    letter-spacing: -3px;
    line-height: 0.88;
    color: #ff4444;
    text-shadow: 0 0 40px rgba(255, 68, 68, 0.45), 0 0 80px rgba(255, 68, 68, 0.18);
    user-select: none;
  }
  &.hero--bombbrawl .hero-mark em {
    font-style: normal;
    color: #ffb347;
    display: block;
    font-size: 36px;
    letter-spacing: -2px;
    opacity: 0.9;
  }

  /* ── jumpparty — lime burst, bouncy stacked words ── */
  &.hero--jumpparty {
    background: linear-gradient(135deg, #0e2416, #0f1220);
    flex-direction: column;
    gap: 0;
    padding: 44px 16px 12px;
  }
  &.hero--jumpparty .hero-mark {
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 54px;
    letter-spacing: -3px;
    line-height: 0.9;
    color: #3fb950;
    text-shadow: 0 0 36px rgba(63, 185, 80, 0.4);
    user-select: none;
  }
  &.hero--jumpparty .hero-mark em {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 4px;
    color: rgba(63, 185, 80, 0.55);
    display: block;
    text-transform: uppercase;
  }

  /* ── animalarena — trophy gold, serif italic clash ── */
  &.hero--animalarena {
    background: linear-gradient(135deg, #1c1a0e, #0f0f12);
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 20px 18px;
  }
  &.hero--animalarena .hero-mark {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 0.92;
    background: linear-gradient(120deg, #f59e0b, #ef4444 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    user-select: none;
  }
  &.hero--animalarena .hero-mark em {
    font-style: normal;
    display: block;
    font-size: 14px;
    letter-spacing: 3px;
    -webkit-text-fill-color: rgba(245, 158, 11, 0.45);
    text-transform: uppercase;
    margin-top: 6px;
  }
`,s().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  z-index: 2;

  /* bombbrawl's "BOMB / BRAWL" logotype is left-aligned and reaches the
   * bottom of the hero zone — anchor the caption bottom-right instead so
   * it clears the typography. */
  .hero--bombbrawl & {
    left: auto;
    right: 14px;
    color: rgba(255, 179, 71, 0.55);
  }

  /* animalarena's "SUMO / ZOO" stack is also left-aligned and its "ZOO"
   * block reaches the bottom of the hero zone — same bottom-right
   * anchoring clears the overlap. */
  .hero--animalarena & {
    left: auto;
    right: 14px;
    color: rgba(245, 158, 11, 0.5);
  }
`,s().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,s().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,s().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,s().div`
  padding: 6px 14px 16px;
`,s().h3`
  margin: 0 0 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${l.w4.colors.mainText};

  .hash {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,n(5406),s().nav`padding: ${l.w4.spacing.sm} 0;`,s().div`
  border-bottom: 1px solid ${l.w4.colors.border}60;
  margin-bottom: 2px;
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${l.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${l.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${l.w4.colors.sidebarText}; }
`,s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,s().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,s().div`overflow: hidden;`,s().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,s().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${l.w4.spacing.md};
  background: ${({active:e})=>e?l.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?l.w4.colors.sidebarActive:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":l.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;let ec="#7fb77e",ed=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;s().div`
  position: relative;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 28px ${l.w4.spacing.lg} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${ed} 0.25s ease both;
  transition:
    border-color ${l.w4.transitions.base},
    transform ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${ec};
  }

  /* Uppercase mono eyebrow tag — reads "◉ DIAGRAM" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${ec};
    opacity: 0.75;
    pointer-events: none;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${l.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,s().div`
  height: 36px;
  width: min(60%, 240px);
  margin: 0 auto;
  border-radius: ${l.w4.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${l.w4.colors.border} 0%,
    ${l.w4.colors.borderStrong} 50%,
    ${l.w4.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${(0,C.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,s().pre`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.md};
  text-align: center;
`,s().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,s().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,s().pre`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.md};
`,s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,s().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,s().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
  }
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  text-align: center;
`;let ep=(0,C.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
`,s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${l.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,s().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${l.w4.colors.accent}40;
    box-shadow: 0 0 8px ${l.w4.colors.accent}15;
  }
`;let ef=s().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 14px ${l.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${ep} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;s()(ef)`
  border-bottom: 1px solid ${l.w4.colors.border}80;
`,s()(ef)``,s().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,s().span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.accent};
`,s().span`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
`;var em=n(1426);s().div`
  margin: ${l.w4.spacing.lg} 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.codeBorder};
  overflow: hidden;
`,s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${l.w4.colors.codeBorder};
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,s().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":l.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${l.w4.colors.sidebarText}; border-color: ${l.w4.colors.sidebarText}; }
`,em.A,em.A['pre[class*="language-"]'],l.w4.colors.codeBg,em.A['code[class*="language-"]'],s().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.sm};
`,s().div`
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,s().nav`
  width: 220px;
  min-width: 220px;
  padding: ${l.w4.spacing.xxl} 0 ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,s().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.md};
`,s().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,s().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  border-radius: 0 ${l.w4.borderRadius.sm} ${l.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${l.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,s().div`flex: 1; min-width: 0;`,s().article`
  padding: ${l.w4.spacing.xxl} 0;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  line-height: ${l.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${l.w4.spacing.xl} 0 ${l.w4.spacing.md};
    color: ${l.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${l.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${l.w4.typography.fontSizeXl}; border-bottom: 1px solid ${l.w4.colors.border}; padding-bottom: ${l.w4.spacing.sm}; }
  h2 { font-size: ${l.w4.typography.fontSizeLg}; border-bottom: 1px solid ${l.w4.colors.border}; padding-bottom: ${l.w4.spacing.xs}; }
  h3 { font-size: ${l.w4.typography.fontSizeMd}; }

  p { margin: ${l.w4.spacing.md} 0; }

  a { color: ${l.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${l.w4.colors.accentHover}; } }

  ul, ol { margin: ${l.w4.spacing.md} 0; padding-left: ${l.w4.spacing.xl}; }
  li { margin: ${l.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${l.w4.colors.border};
    margin: ${l.w4.spacing.lg} 0;
    padding: ${l.w4.spacing.sm} ${l.w4.spacing.lg};
    background: ${l.w4.colors.surface};
    color: ${l.w4.colors.mainTextMuted};
    border-radius: 0 ${l.w4.borderRadius.sm} ${l.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${l.w4.colors.codeBg};
    border: 1px solid ${l.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${l.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${l.w4.spacing.lg} 0; font-size: ${l.w4.typography.fontSizeBase}; }
  th, td { padding: ${l.w4.spacing.sm} ${l.w4.spacing.md}; border: 1px solid ${l.w4.colors.border}; text-align: left; }
  th { background: ${l.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${l.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${l.w4.colors.border}; margin: ${l.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${l.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${l.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${l.w4.spacing.lg} 0; }
`,s().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  padding: ${l.w4.spacing.xxl} 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.xxl};
`,s().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,s().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase}; color: ${l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily}; font-weight: 500;
`,s().div`
  color: ${l.w4.colors.mainTextMuted};
  padding: ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  font-family: ${l.w4.typography.fontFamily};
`;let eg=(0,C.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eu=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;s().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${eg} 0.15s ease;
`,s().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${l.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${eu} 0.2s ease;
`,s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,s().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.border}; }
`,s().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.sm} 0;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,s().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${l.w4.colors.accent}20`:l.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,s().div`
  flex: 1;
  min-width: 0;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,s().span`
  font-weight: 400;
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().span`
  font-size: 11px;
  font-weight: 500;
  color: ${l.w4.colors.accent};
  background: ${l.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${l.w4.colors.accent}25;
    color: ${l.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,s().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?l.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,s().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${l.w4.colors.border};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
`,s().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  text-align: center;
`,s().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${l.w4.typography.fontFamily};
  background: ${l.w4.colors.mainBg};
`,s().div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,s().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${l.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${l.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,s().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,s().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${l.w4.colors.mainText} 0%,
    ${l.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,s().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,s().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${l.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${l.w4.colors.accent}60;
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${l.w4.colors.surface};
    border: 1px solid ${l.w4.colors.border};
    border-radius: 3px;
    color: ${l.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,s().div`
  display: flex;
  gap: 4px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
`,s().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":l.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":l.w4.colors.mainText};
  }
`,s().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${l.w4.spacing.md}`};
  border-bottom: 1px solid ${l.w4.colors.border}60;
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${l.w4.colors.accent}10`:l.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${l.w4.colors.accent}40`:"transparent"};
  border-radius: ${l.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,s().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.sidebarText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  border-radius: ${l.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${l.w4.colors.mainText}; }
`,s().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${l.w4.spacing.sm} 0;
`,s().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${l.w4.spacing.md};
  background: ${({active:e})=>e?l.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${l.w4.colors.sidebarText};
`,s().span`
  font-weight: 400;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${l.w4.colors.accent}30;
    color: ${l.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,s().div`
  padding: 12px ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,s().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,s().span`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,s().div`
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${l.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-child { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${l.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${l.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${l.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${l.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${l.w4.colors.accent};
    background: ${l.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${l.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${l.w4.colors.codeBg};
    border: 1px solid ${l.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${l.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${l.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${l.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${l.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${l.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${l.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${l.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${l.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`,s().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${l.w4.spacing.sm} 0;
`,s().div`
  font-size: 10px;
  font-weight: 600;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,s().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;let eh=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,ex=s().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: auto;
  gap: ${l.w4.spacing.lg};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    gap: ${l.w4.spacing.md};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eb=s().div`
  grid-column: ${({fullWidth:e,colSpan:t})=>e?"1 / -1":`span ${t}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${eh} 0.25s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,ey=s().div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 0;
  height: 20px;
`,ew=s().div`
  --panel-accent: ${({accent:e})=>e??l.w4.colors.accent};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({minH:e})=>e}px;
  height: 100%;
  padding: ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  transition:
    border-color ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base},
    transform ${l.w4.transitions.base};

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--panel-accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  /* Grip visual affordance left edge */
  &[data-grip='true']::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-left: 2px dotted ${l.w4.colors.borderSubtle};
    border-right: 2px dotted ${l.w4.colors.borderSubtle};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${l.w4.colors.shadow};
  }

  /* WidgetShell owns its chrome — zero ours to avoid double frame. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before,
  &:has(> [data-widget-shell])::after { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* Controls visible on hover (pointer devices); always slightly visible on touch. */
  &:hover .panel-controls { opacity: 1; }

  @media (hover: none) {
    .panel-controls {
      opacity: 0.4;
      transform: scale(0.87);
      transform-origin: top right;
    }
  }
`,e$=s().div`
  position: absolute;
  top: -20px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 2;
`,ev=s().button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition:
    color ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.mainTextMuted};
    background: ${l.w4.colors.surfaceRaised};
  }
`,ek=s()(ev)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;function eM({size:e}){return(0,o.jsxs)("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[(0,o.jsx)("rect",{x:1.5,y:4.5,width:11,height:5,rx:1,stroke:"currentColor",strokeWidth:1,opacity:.4}),(0,o.jsx)("rect",{x:2,y:5,width:"sm"===e?4:"md"===e?7:11,height:4,rx:.5,fill:"currentColor"})]})}let ej={sm:1,md:2,lg:"full"};function ez({items:e,onReorder:t,onCycleSize:n,onRemove:a,renderPanel:r,renderAccessory:i,showGrip:s=!0,labels:l,accentColor:c}){return(0,o.jsx)(ex,{children:e.map((d,p)=>{let f=ej[d.size],m="full"===f,g=d.minHeight??160,u=c?.(d),h=(d.availableSizes??["sm","md","lg"]).length>1,x=i?.(d);return(0,o.jsxs)(eb,{colSpan:m?1:f,fullWidth:m,children:[x&&(0,o.jsx)(ey,{children:x}),(0,o.jsxs)(ew,{minH:g,accent:u,"data-grip":s?"true":"false",children:[(0,o.jsxs)(e$,{className:"panel-controls",children:[p>0&&(0,o.jsx)(ev,{type:"button",title:l.moveLeft,onClick:()=>t(d.id,-1),children:(0,o.jsx)(D,{name:"chevron-left",size:14})}),p<e.length-1&&(0,o.jsx)(ev,{type:"button",title:l.moveRight,onClick:()=>t(d.id,1),children:(0,o.jsx)(D,{name:"chevron-right",size:14})}),h&&(0,o.jsx)(ev,{type:"button",title:`${l.cycleSize} \xb7 ${d.size.toUpperCase()}`,onClick:()=>n(d.id),children:(0,o.jsx)(eM,{size:d.size})}),a&&l.remove&&(0,o.jsx)(ek,{type:"button",title:l.remove,onClick:()=>a(d.id),children:(0,o.jsx)(D,{name:"close",size:14})})]}),r(d)]})]},d.id)})})}let eT=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${eT} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${l.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${l.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${l.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${l.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${l.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${l.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:t})=>t?"rgba(248,81,73,0.12)":e?l.w4.colors.accent:"none"};
  color: ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?"#fff":l.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:l.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${l.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`;let eS=(0,C.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eC=(0,C.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${l.w4.spacing.md};
  animation: ${eS} 0.15s ease both;
`,s().div`
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?l.w4.colors.danger+"55":l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${l.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${eC} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?l.w4.colors.danger:l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${l.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast},
    opacity ${l.w4.transitions.fast};

  background: ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:t})=>t||e?"#fff":l.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:l.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${l.w4.focusRing} }
`;let eF=(0,C.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eR=(0,C.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,eA=(0,C.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  animation: ${eF} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${eR} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${l.w4.colors.border};
  animation: ${eA} 1.4s ease-in-out infinite;
`,s().span`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`},9391(e,t,n){n.d(t,{O:()=>i});var o=n(5723);n(7991);var a=n(5030);let r={sm:20,md:24,lg:28};function i({member:e,size:t="md"}){let n="number"==typeof t?t:r[t];return(0,o.jsx)(a.eu,{member:e,size:n})}},5043(e,t,n){n.d(t,{Y:()=>p});var o=n(5723),a=n(6859),r=n.n(a),i=n(4764);let s=r().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 80px;
  gap: 6px;
  padding: ${i.w4.spacing.md};
`,l=r().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({mode:e})=>i.w4.colors.mainTextMuted};
  opacity: ${({mode:e})=>"loading"===e?.5:.7};
`,c=r().p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.6;
  text-align: center;
  max-width: 240px;
  margin: 0;
  line-height: 1.5;
`,d={loading:"◌ Loading",empty:"◎ Empty",error:"◎ Offline"};function p({mode:e,label:t,body:n}){return(0,o.jsxs)(s,{children:[(0,o.jsx)(l,{mode:e,children:t??d[e]}),n&&(0,o.jsx)(c,{children:n})]})}},6246(e,t,n){n.d(t,{uj:()=>T,$8:()=>b,OW:()=>s,Xj:()=>L,ik:()=>w,Ru:()=>p,kl:()=>D,RT:()=>R,RJ:()=>v,YG:()=>o.Y});var o=n(5043),a=n(5723),r=n(7991),i=n(4764);function s({points:e,accent:t=i.w4.colors.accent,width:n=60,height:o=28,strokeWidth:l=1.5}){let c=(0,r.useMemo)(()=>{if(e.length<2)return"";let t=Math.min(...e),a=Math.max(...e)-t||1,r=n-2*l,i=o-2*l;return e.map((n,o)=>{let s=l+o/(e.length-1)*r,c=l+i-(n-t)/a*i;return`${0===o?"M":"L"} ${s.toFixed(1)} ${c.toFixed(1)}`}).join(" ")},[e,n,o,l]),d=(0,r.useMemo)(()=>{if(e.length<1)return null;let t=e[e.length-1],a=Math.min(...e),r=n-2*l,i=o-2*l;return{x:l+r,y:l+i-(t-a)/(Math.max(...e)-a||1)*i}},[e,n,o,l]);return c?(0,a.jsxs)("svg",{width:n,height:o,viewBox:`0 0 ${n} ${o}`,"aria-hidden":"true",style:{display:"block",flexShrink:0},children:[(0,a.jsx)("path",{d:c,fill:"none",stroke:t,strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round",opacity:.7}),d&&(0,a.jsx)("circle",{cx:d.x,cy:d.y,r:l+1,fill:t})]}):null}var l=n(6859),c=n.n(l);let d=c().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  color: ${({sign:e})=>"pos"===e?i.w4.colors.success:"neg"===e?i.w4.colors.danger:i.w4.colors.mainTextMuted};
  white-space: nowrap;
`;function p({value:e,format:t="pct",decimals:n=2}){let o=e>0?"pos":e<0?"neg":"zero",r=Math.abs(e).toFixed(n);return(0,a.jsxs)(d,{sign:o,children:["pos"===o?"▲":"neg"===o?"▼":"—"," ",r,"pct"===t?"%":""]})}let f=c().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${i.w4.spacing.sm};
  padding: 4px 0;
  cursor: default;
  transition: background 0.12s;
  border-radius: 3px;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
  }
`,m=c().a`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${i.w4.spacing.sm};
  padding: 4px 0;
  text-decoration: none;
  color: inherit;
  border-radius: 3px;
  transition: background 0.12s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
  }
`,g=c().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,u=c().span`
  font-size: 13px;
  color: ${i.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`,h=c().span`
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.75;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,x=c().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: ${i.w4.colors.mainTextMuted};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`;function b({label:e,value:t,sub:n,href:o,onClick:r}){let i=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(g,{children:[(0,a.jsx)(u,{children:e}),n&&(0,a.jsx)(h,{children:n})]}),void 0!==t&&(0,a.jsx)(x,{children:t})]});return o?(0,a.jsx)(m,{href:o,target:"_blank",rel:"noopener noreferrer",children:i}):(0,a.jsx)(f,{onClick:r,children:i})}n(3090);let y="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function w({data:e,budget:t,height:n=200,animation:o="rise"}){let s=(0,r.useId)();if(!e.length)return null;let l=1.1*Math.max(...e.map(e=>e.segments.reduce((e,t)=>e+t.value,0)+(e.over??0)),t??0)||1,c=472,d=n-20-24,p=472/e.length*.58,f=c/e.length,m="rise"===o?{transformOrigin:"bottom",animation:`${s}_rise 0.45s ease-out both`}:{};return(0,a.jsxs)(a.Fragment,{children:["rise"===o&&(0,a.jsx)("style",{children:`
          @keyframes ${s}_rise {
            from { transform: scaleY(0); }
            to   { transform: scaleY(1); }
          }
        `}),(0,a.jsxs)("svg",{viewBox:`0 0 520 ${n}`,style:{width:"100%",height:n},preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",children:[null!=t?(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:40,x2:40+c,y1:20+d-t/l*d,y2:20+d-t/l*d,stroke:i.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,a.jsxs)("text",{x:36,y:20+d-t/l*d+3,textAnchor:"end",fontFamily:y,fontSize:"9",fill:i.w4.colors.mainTextMuted,children:["€",t]})]}):null,e.map((e,t)=>{let o,r=40+t*f+(f-p)/2,s=20+d;return(0,a.jsxs)("g",{style:m,children:[e.segments.map(e=>{let t=e.value/l*d;return s-=t,(0,a.jsx)("rect",{x:r,y:s,width:p,height:t,fill:e.color,opacity:.85},e.id)}),null!=e.over&&e.over>0?(o=e.over/l*d,s-=o,(0,a.jsx)("rect",{x:r,y:s,width:p,height:o,fill:"#f85149",opacity:.7},"over")):null,(0,a.jsx)("text",{x:r+p/2,y:n-6,textAnchor:"middle",fontFamily:y,fontSize:"10",fill:i.w4.colors.mainTextMuted,children:e.label})]},e.label)})]})]})}let $="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function v({data:e,total:t,size:n=110,thickness:o=14,centerLabel:s,centerValue:l}){let c=(0,r.useId)(),d=n/2-o/2-2,p=2*Math.PI*d,f=e.reduce((e,t)=>e+t.value,0)||1,m=0;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @keyframes ${c}_dash {
          from { stroke-dasharray: 0 ${p.toFixed(1)}; }
        }
      `}),(0,a.jsxs)("svg",{viewBox:`0 0 ${n} ${n}`,style:{width:n,height:n,flexShrink:0},"aria-hidden":"true",children:[(0,a.jsx)("circle",{cx:n/2,cy:n/2,r:d,fill:"none",stroke:i.w4.colors.border,strokeWidth:o}),e.map((e,t)=>{let r=e.value/f*p,i=60*t,s=(0,a.jsx)("circle",{cx:n/2,cy:n/2,r:d,fill:"none",stroke:e.color,strokeWidth:o,strokeDasharray:`${r.toFixed(1)} ${p.toFixed(1)}`,strokeDashoffset:(-m).toFixed(1),transform:`rotate(-90 ${n/2} ${n/2})`,style:{animation:`${c}_dash 0.45s ease-out ${i}ms both`}},t);return m+=r,s}),s?(0,a.jsx)("text",{x:n/2,y:n/2-4,textAnchor:"middle",fontFamily:$,fontSize:"9",fill:i.w4.colors.mainTextMuted,letterSpacing:"0.12em",textDecoration:"none",children:s.toUpperCase()}):null,l?(0,a.jsx)("text",{x:n/2,y:s?n/2+11:n/2+4,textAnchor:"middle",fontFamily:$,fontSize:"13",fontWeight:"700",fill:i.w4.colors.mainText,children:l}):null]})]})}let k="#7fb77e",M="#4a7a5a",j="#f85149";function z(e){let t=0;for(let n=1;n<e.length;n++){let o=e[n][0]-e[n-1][0],a=e[n][1]-e[n-1][1];t+=Math.sqrt(o*o+a*a)}return t}function T({data:e,height:t=170,legendIn:n,legendOut:o,legendGoal:s}){let l=(0,r.useId)();if(!e.length)return null;let c=288,d=t-10-32,p=e.some(e=>(e.incGoal??0)>0),f=1.1*Math.max(...e.map(e=>e.inc),...e.map(e=>e.exp))||1,m=c/Math.max(e.length-1,1),g=(0,r.useMemo)(()=>e.map((e,t)=>[6+t*m,10+d-e.inc/f*d]),[e,t]),u=(0,r.useMemo)(()=>e.map((e,t)=>[6+t*m,10+d-(e.incGoal??0)/f*d]),[e,t]),h=(0,r.useMemo)(()=>e.map((e,t)=>[6+t*m,10+d-e.exp/f*d]),[e,t]),x=g.map(e=>e.join(",")).join(" "),b=h.map(e=>e.join(",")).join(" "),y=[`M${g[0][0]},${10+d}`,...g.map(e=>`L${e[0]},${e[1]}`),`L${g[g.length-1][0]},${10+d}`,"Z"].join(" "),w=p?[`M${u[0][0]},${10+d}`,...u.map(e=>`L${e[0]},${e[1]}`),`L${u[u.length-1][0]},${10+d}`,"Z"].join(" "):null,$=z(g).toFixed(1),v=z(h).toFixed(1),S=e.reduce((e,t)=>e+t.inc,0),C=e.reduce((e,t)=>e+(t.incGoal??0),0),F=e.reduce((e,t)=>e+t.exp,0),R=e=>e>=1e3?`€${(e/1e3).toFixed(1)}k`:`€${Math.round(e)}`,A=p&&s?t-2:null;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @keyframes ${l}_inc { from { stroke-dashoffset: ${$}; } }
        @keyframes ${l}_exp { from { stroke-dashoffset: ${v}; } }
      `}),(0,a.jsxs)("svg",{viewBox:`0 0 300 ${t}`,style:{width:"100%",height:t},preserveAspectRatio:"none","aria-hidden":"true",children:[w&&(0,a.jsx)("path",{d:w,fill:M,opacity:.25}),(0,a.jsx)("path",{d:y,fill:k,opacity:.1}),(0,a.jsx)("polyline",{points:x,stroke:k,strokeWidth:"1.25",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:$,strokeDashoffset:"0",style:{animation:`${l}_inc 0.5s ease-out both`}}),(0,a.jsx)("polyline",{points:b,stroke:j,strokeWidth:"1.25",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:v,strokeDashoffset:"0",style:{animation:`${l}_exp 0.5s ease-out 0.1s both`}}),(0,a.jsx)("line",{x1:6,x2:6+c,y1:10+d,y2:10+d,stroke:i.w4.colors.border,strokeWidth:"1"}),(0,a.jsxs)("g",{fontFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSize:"10",style:{fontVariantNumeric:"tabular-nums"},children:[(0,a.jsxs)("text",{x:6,y:null!==A?t-26:t-14,fill:k,children:["● ",n??"in"," ",R(S)]}),(0,a.jsxs)("text",{x:6+c/2+4,y:null!==A?t-26:t-14,fill:j,children:["● ",o??"out"," ",R(F)]}),null!==A&&p&&(0,a.jsxs)("text",{x:6,y:A,fill:M,children:["◆ ",s," ",R(C)]}),(0,a.jsx)("text",{x:null!==A?6+c:6,y:null!==A?A:t-2,fill:i.w4.colors.mainTextMuted,textAnchor:null!==A?"end":"start",children:"90D"})]})]})]})}let S=["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"],C=["S","T","Q","Q","S","S","D"],F=["S","M","T","W","T","F","S"];function R({data:e,cellSize:t=10,gap:n=2,locale:o="pt",tooltip:s}){let l=(0,r.useId)();if(!e.length)return null;let c=24+Math.ceil(e.length/7)*(t+n),d=14+7*(t+n);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @keyframes ${l}_fade { from { opacity: 0; } to { opacity: 1; } }
      `}),(0,a.jsxs)("svg",{viewBox:`0 0 ${c} ${d}`,preserveAspectRatio:"xMidYMid meet",style:{width:"100%",height:"auto",maxHeight:220,display:"block"},"aria-hidden":"true",children:[(0,a.jsx)("g",{fontFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSize:"8",fill:i.w4.colors.mainTextMuted,children:("pt"===o?C:F).map((e,o)=>(0,a.jsx)("text",{x:"0",y:10+o*(t+n),children:e},o))}),e.map((e,o)=>{let r=18+Math.floor(o/7)*(t+n),i=2+o%7*(t+n),c=S[Math.max(0,Math.min(4,e))]??S[0],d=s?.(o,e);return(0,a.jsx)("rect",{x:r,y:i,width:t,height:t,fill:c,rx:"1",style:{animation:`${l}_fade 0.3s ease-out ${8*o}ms both`},children:d?(0,a.jsx)("title",{children:d}):null},o)})]})]})}function A(e){let t=0;for(let n=1;n<e.length;n++){let o=e[n][0]-e[n-1][0],a=e[n][1]-e[n-1][1];t+=Math.sqrt(o*o+a*a)}return t}function D({spent:e,budget:t,height:n=60}){let o=(0,r.useId)(),s=1.05*t||1,l=Array.from({length:8},(e,n)=>t-t/7*n),c=Math.min(e/(t||1),1),d=Array.from({length:8},(e,n)=>Math.max(0,t-n/7*t*c*1.1)),p=l.map((e,t)=>[320*t/7,n-e/s*(n-5)]),f=d.map((e,t)=>[320*t/7,n-e/s*(n-5)]),m=p.map(e=>e.join(",")).join(" "),g=f.map(e=>e.join(",")).join(" "),u=A(p).toFixed(1),h=A(f).toFixed(1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @keyframes ${o}_i { from { stroke-dashoffset: ${u}; } }
        @keyframes ${o}_a { from { stroke-dashoffset: ${h}; } }
      `}),(0,a.jsxs)("svg",{viewBox:`0 0 320 ${n}`,style:{width:"100%",height:n},preserveAspectRatio:"none","aria-hidden":"true",children:[(0,a.jsx)("line",{x1:"0",x2:320,y1:n-5,y2:n-5,stroke:i.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,a.jsx)("polyline",{points:m,stroke:i.w4.colors.mainTextMuted,strokeWidth:"1",strokeDasharray:`${u} ${u}`,strokeDashoffset:"0",fill:"none",style:{strokeDasharray:"2 3",animation:`${o}_i 0.45s ease-out both`}}),(0,a.jsx)("polyline",{points:g,stroke:"#7fb77e",strokeWidth:"1.5",strokeDasharray:`${h} ${h}`,strokeDashoffset:"0",fill:"none",strokeLinecap:"round",style:{animation:`${o}_a 0.45s ease-out 0.08s both`}})]})]})}let E=c().div`
  position: relative;
  height: 6px;
  background: ${i.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,I=c().div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 3px;
  width: ${({pct:e})=>Math.min(100,e)}%;
  background: ${({color:e})=>e};
  transition: width 400ms ease;
`,B=c().div`
  position: absolute;
  top: 0;
  height: 100%;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  background: ${"#f85149"};
  opacity: 0.7;
  transition: width 400ms ease;
`;function L({pct:e,over:t=0,color:n="#7fb77e"}){let o=Math.min(100,e),r=100-t;return(0,a.jsxs)(E,{children:[(0,a.jsx)(I,{pct:o,color:n}),t>0&&(0,a.jsx)(B,{left:Math.max(0,r),width:t})]})}n(9391),c().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 28px;
  min-height: 44px; /* touch target */
  border-radius: 999px;
  border: 1px solid ${({selected:e,color:t})=>e?t:i.w4.colors.border};
  background: ${({selected:e,color:t})=>e?`${t}22`:i.w4.colors.surface};
  color: ${i.w4.colors.mainText};
  font-size: 13px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    border-color: ${({color:e})=>e};
    background: ${({color:e})=>`${e}11`};
  }

  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,c().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: ${i.w4.colors.mainTextMuted};
`},3090(e,t,n){n.d(t,{B:()=>a});var o=n(7711);function a(e){let t=(0,o.cacheBackedProducer)({id:e.id,category:e.category,cacheKey:e.cacheKey,parse:e.parse});return{id:e.id,category:e.category,labelKey:e.labelKey,defaultEnabled:e.defaultEnabled,producer:t,start(){},stop(){}}}},7517(e,t,n){n.d(t,{A:()=>o});let o={id:"habits",load:()=>Promise.all([n.e("44"),n.e("45")]).then(n.bind(n,6780)).then(e=>({default:e.HabitsWidget})),labels:{en:"Habits Grid",pt:"Grelha de H\xe1bitos"},descriptions:{en:"Your last 7 days of missions",pt:"Os teus \xfaltimas 7 dias de miss\xf5es"},icon:"\uD83C\uDFAF",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress"}],notifications:[{id:"daily",category:"daily.overdue",labelKey:"notifications.source.daily",producer:(0,n(7711).dailyProducer)({category:"daily.overdue"}),start(){},stop(){}}],persistedKeys:["daily:progress"]}},2013(e,t,n){n.d(t,{A:()=>r});var o=n(6137),a=n(7711);let r={id:"hackernews-hot",load:()=>Promise.all([n.e("44"),n.e("390")]).then(n.bind(n,3565)).then(e=>({default:e.HackerNewsHotWidget})),labels:{en:"Hacker News Hot",pt:"Em Alta no HN"},descriptions:{en:"Top stories from Hacker News",pt:"Hist\xf3rias em destaque no Hacker News"},icon:"\uD83D\uDD25",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"hn-firebase",kind:"dal-client",cacheKey:"internet-hn-ids",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"hn-front-page",category:"hn.frontPage",labelKey:"notifications.source.hnFrontPage",producer:{id:"hn-front-page",category:"hn.frontPage",async poll(){if((0,a.isMutedNow)("hn.frontPage"))return[];let e=await (0,o.fetchHnFrontPage)(5);if(!e?.hits)return[];let t=[];for(let n of e.hits){let e=n.created_at_i??(n.created_at?Date.parse(n.created_at)/1e3:NaN);Number.isFinite(e)&&t.push({id:`hn-front:${n.objectID}`,category:"hn.frontPage",ts:1e3*e,title:n.title,link:n.url??`https://news.ycombinator.com/item?id=${n.objectID}`,meta:{points:n.points,comments:n.num_comments}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:internet-hn-ids"]}},9454(e,t,n){n.d(t,{uj:()=>o.uj,$8:()=>o.$8,OW:()=>o.OW,Xj:()=>o.Xj,ik:()=>o.ik,Ru:()=>o.Ru,kl:()=>o.kl,RT:()=>o.RT,RJ:()=>o.RJ,YG:()=>o.YG}),n(7711),n(7517),n(2013),n(9603),n(2026),n(5471),n(5417),n(4200),n(2306),n(9780);var o=n(6246);n(5723),n(7991);var a=n(6859),r=n.n(a),i=n(2799),s=n(4764);n(5030),n(8170);let l=(0,i.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;r().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  flex: 1;
  align-content: start;
  animation: ${l} 0.25s ease both;
`,r().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  background: ${({accentColor:e})=>`${e}08`};
  border: 1px solid ${({accentColor:e})=>`${e}20`};
  border-radius: ${s.w4.borderRadius.md};
  cursor: pointer;
  transition: background ${s.w4.transitions.base}, border-color ${s.w4.transitions.base}, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${({accentColor:e})=>`${e}18`};
    border-color: ${({accentColor:e})=>`${e}40`};
    transform: scale(1.05);
  }
  &:active { transform: scale(0.95); }
`,r().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({tint:e})=>e};
`,r().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,r().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.5;
  text-align: center;
  line-height: 1.5;
`},9603(e,t,n){n.d(t,{A:()=>i});var o=n(7711),a=n(3090);function r(e){return function(t){if(!t?.items)return[];let n=[];return t.items.forEach(t=>{let a=Date.parse(t.pubDate);if(Number.isNaN(a)||(0,o.classifyPtNewsItem)(t.title,t.description)!==e)return;let r=t.link||t.title;n.push({id:`news-pt-${e}:${r}`,ts:a,title:t.title,link:t.link})}),n}}let i={id:"news-pt",load:()=>Promise.all([n.e("44"),n.e("392")]).then(n.bind(n,1507)).then(e=>({default:e.NewsPortugalWidget})),labels:{en:"PT News",pt:"Not\xedcias PT"},descriptions:{en:"Latest news from RTP",pt:"\xdaltimas not\xedcias da RTP"},icon:"\uD83D\uDCF0",accentColor:"#2da44e",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"rtp-rss",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp",notifiable:!0}],notifications:[(0,a.B)({id:"news-pt-tech",category:"news.pt.tech",labelKey:"notifications.source.newsPtTech",badgeColor:"#a371f7",cacheKey:"news-portugal",parse:r("tech")}),(0,a.B)({id:"news-pt-sports",category:"news.pt.sports",labelKey:"notifications.source.newsPtSports",badgeColor:"#3fb950",cacheKey:"news-portugal",parse:r("sports")}),(0,a.B)({id:"news-pt-business",category:"news.pt.business",labelKey:"notifications.source.newsPtBusiness",badgeColor:"#d29922",cacheKey:"news-portugal",parse:r("business")}),(0,a.B)({id:"news-pt-general",category:"news.pt.general",labelKey:"notifications.source.newsPtGeneral",badgeColor:"#2da44e",cacheKey:"news-portugal",parse:r("general")})],persistedKeys:["widget-cache:news-portugal"]}},2026(e,t,n){n.d(t,{A:()=>o});let o={id:"news-world",load:()=>Promise.all([n.e("44"),n.e("566")]).then(n.bind(n,4925)).then(e=>({default:e.NewsWorldWidget})),labels:{en:"World News",pt:"Not\xedcias Mundo"},descriptions:{en:"Latest news from CNN",pt:"\xdaltimas not\xedcias da CNN"},icon:"\uD83C\uDF0D",accentColor:"#cc0000",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"cnn-rss",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn",notifiable:!0}],notifications:[(0,n(3090).B)({id:"news-world",category:"news.world",labelKey:"notifications.source.newsWorld",badgeColor:"#cc0000",cacheKey:"news-world",parse:function(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,n)=>{let o=Date.parse(e.pubDate);Number.isNaN(o)||t.push({id:`${o}-${n}`,ts:o,title:e.title,link:e.link})}),t}})],persistedKeys:["widget-cache:news-world"]}},5471(e,t,n){n.d(t,{A:()=>a});var o=n(3090);let a={id:"seismic",load:()=>Promise.all([n.e("44"),n.e("773")]).then(n.bind(n,8108)).then(e=>({default:e.SeismicWidget})),labels:{en:"PT Seismic",pt:"Sismicidade PT"},descriptions:{en:"Recent seismic activity in Portugal",pt:"Atividade s\xedsmica recente em Portugal"},icon:"\uD83C\uDF0B",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"ipma",kind:"dal-client",cacheKey:"seismic-pt",labelKey:"sources.ipma",notifiable:!0},{id:"usgs",kind:"dal-client",cacheKey:"seismic-world",labelKey:"sources.usgs",notifiable:!0}],notifications:[(0,o.B)({id:"seismic-pt",category:"seismic.pt",labelKey:"notifications.source.seismicPt",badgeColor:"#f97316",cacheKey:"seismic-pt",parse:function(e){if(!Array.isArray(e))return[];let t=[];return e.forEach((e,n)=>{let o=Date.parse(e.time);if(Number.isNaN(o))return;let a=e.local||e.obsRegion||"?";t.push({id:`pt-${o}-${n}`,ts:o,title:`M ${e.mag.toFixed(1)} — ${a}`})}),t}}),(0,o.B)({id:"seismic-world",category:"seismic.world",labelKey:"notifications.source.seismicWorld",badgeColor:"#ea580c",cacheKey:"seismic-world",parse:function(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}})],persistedKeys:["widget-cache:seismic-pt","widget-cache:seismic-world"]}},5417(e,t,n){n.d(t,{A:()=>r});var o=n(6137),a=n(7711);let r={id:"techscope",load:()=>Promise.all([n.e("44"),n.e("923")]).then(n.bind(n,4942)).then(e=>({default:e.TechScopeLiveWidget})),labels:{en:"TechScope Live",pt:"TechScope Ao Vivo"},descriptions:{en:"Trending GitHub repos and Hacker News stories",pt:"Reposit\xf3rios GitHub e hist\xf3rias do Hacker News em alta"},icon:"⚡",accentColor:"#a371f7",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!0,sources:[{id:"github-trending",kind:"cache-key",cacheKey:"techscope-gh",labelKey:"sources.github",notifiable:!0},{id:"hn-algolia",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"github-trending",category:"github.trending",labelKey:"notifications.source.githubTrending",producer:{id:"github-trending",category:"github.trending",async poll(){if((0,a.isMutedNow)("github.trending"))return[];let e=await (0,o.fetchTrendingRepos)({days:7,perPage:5});if(!e?.items)return[];let t=[];for(let n of e.items){let e=n.created_at?Date.parse(n.created_at):NaN;if(!Number.isFinite(e))continue;let o=n.stargazers_count,a=n.language?` \xb7 ${n.language}`:"";t.push({id:`gh-trending:${n.id}`,category:"github.trending",ts:e,title:`${n.full_name} — ${o.toLocaleString()}★${a}`,link:n.html_url,meta:{stars:o,language:n.language,description:n.description}})}return t}},start(){},stop(){}},{id:"devto-weekly",category:"devto.weekly",labelKey:"notifications.source.devto",producer:{id:"devto-weekly",category:"devto.weekly",async poll(){if((0,a.isMutedNow)("devto.weekly"))return[];let e=await (0,o.fetchDevToArticles)({top:7,perPage:5});if(!e)return[];let t=[];for(let n of e){let e=Date.parse(n.published_at);if(!Number.isFinite(e))continue;let o=n.public_reactions_count??0,a=n.user?.name||n.user?.username,r=a?` — ${a}`:"";t.push({id:`devto:${n.id}`,category:"devto.weekly",ts:e,title:`${n.title}${r}`,link:n.url,meta:{reactions:o,comments:n.comments_count??0,readingTime:n.reading_time_minutes??null,tags:n.tag_list??[]}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:techscope-gh","widget-cache:techscope-hn"]}},4200(e,t,n){n.d(t,{A:()=>o});let o={id:"trending-searches",load:()=>Promise.all([n.e("44"),n.e("346")]).then(n.bind(n,2065)).then(e=>({default:e.TrendingSearchesWidget})),labels:{en:"Trending Searches",pt:"Pesquisas em Alta"},descriptions:{en:"Top Google trending searches right now",pt:"As pesquisas mais populares no Google agora"},icon:"\uD83D\uDD0D",accentColor:"#e233ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"google-trends-rss",kind:"cache-key",cacheKey:"internet-trends",labelKey:"sources.googleTrends",notifiable:!0}],notifications:[(0,n(3090).B)({id:"trending-daily",category:"trending.daily",labelKey:"notifications.source.trending",badgeColor:"#e233ff",cacheKey:"internet-trends",parse:function(e){let t=e?.items?.[0];return t?[{id:new Date().toISOString().slice(0,10),ts:Date.now(),title:t.title,link:t.link}]:[]},defaultEnabled:!1})],persistedKeys:["widget-cache:internet-trends"]}},2306(e,t,n){n.d(t,{A:()=>i});var o=n(3090);let a={yellow:"\uD83D\uDFE1",orange:"\uD83D\uDFE0",red:"\uD83D\uDD34"},r={yellow:"Yellow",orange:"Orange",red:"Red"},i={id:"weather",load:()=>Promise.all([n.e("44"),n.e("693")]).then(n.bind(n,5940)).then(e=>({default:e.WeatherWidget})),labels:{en:"Weather",pt:"Meteorologia"},descriptions:{en:"Current weather for Lisbon",pt:"Meteorologia atual em Lisboa"},icon:"\uD83C\uDF24️",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"openMeteo",kind:"cache-key",cacheKey:"weather-lisbon",labelKey:"sources.openMeteo",notifiable:!0}],notifications:[(0,o.B)({id:"ipma-warnings",category:"weather.pt.warnings",labelKey:"notifications.source.weatherPt",badgeColor:"#facc15",cacheKey:"ipma-warnings",parse:function(e){if(!Array.isArray(e))return[];let t=Date.now(),n=[];return e.forEach((e,o)=>{if("green"===e.awarenessLevelID||"yellow"===e.awarenessLevelID)return;let i=Date.parse(e.endTime);if(Number.isNaN(i)||i<t)return;let s=Date.parse(e.startTime);if(Number.isNaN(s))return;let l=e.awarenessLevelID,c=a[l]??"⚠",d=r[l]??e.awarenessLevelID.toUpperCase(),p=e.idAreaAviso||"Portugal",f=e.awarenessTypeName?e.awarenessTypeName.toLowerCase():"weather";n.push({id:`ipma-warn:${p}-${s}-${o}`,ts:s,title:`${c} ${d} ${f} warning — ${p}`,link:"https://www.ipma.pt/en/otempo/prev-sam/"})}),n}})]}},9780(e,t,n){n.d(t,{A:()=>i});var o=n(3090);let a=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]);function r(){return new Date(Date.now()-864e5).toISOString().slice(0,10)}let i={id:"wiki-most-read",load:()=>Promise.all([n.e("44"),n.e("545")]).then(n.bind(n,5464)).then(e=>({default:e.WikiMostReadWidget})),labels:{en:"Wikipedia Top",pt:"Mais Lido na Wikip\xe9dia"},descriptions:{en:"Most read articles on Wikipedia today",pt:"Artigos mais lidos na Wikip\xe9dia hoje"},icon:"\uD83D\uDCD6",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-pageviews",kind:"cache-key",labelKey:"sources.wikipedia",notifiable:!0}],notifications:[(0,o.B)({id:"wiki-top-read",category:"wiki.topRead",labelKey:"notifications.source.wikiTopRead",badgeColor:"#58a6ff",cacheKey:()=>`internet-wiki-${r()}`,parse:function(e){let t=(e?.items?.[0]?.articles??[]).find(e=>!a.has(e.article));if(!t)return[];let n=r(),o=t.article.replace(/_/g," ");return[{id:n,ts:Date.now(),title:o,link:`https://en.wikipedia.org/wiki/${encodeURIComponent(t.article)}`}]},defaultEnabled:!1})]}}}]);