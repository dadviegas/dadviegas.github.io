"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["6058"],{6376(e,t,o){o.d(t,{S:()=>j});var r=o(5723),a=o(7991),n=o(6859),i=o.n(n),s=o(2799),l=o(9874),d=o(8395);let c=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=i().div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* Respects iOS home indicator and Android nav bar. */
  padding-bottom: env(safe-area-inset-bottom, 0px);
  z-index: 200;
  background: ${l.w4.colors.surface};
  border-top: 1px solid ${l.w4.colors.border};
  animation: ${c} 0.22s ease both;
  /* Shadow to visually separate from content. */
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.32);
`,g=i().div`
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
`,f=i().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  flex-shrink: 0;
`,h=i().div`
  flex-shrink: 0;
  width: ${l.w4.spacing.sm};
`,x=i().div`
  position: relative;
`,u=i().div`
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
`,m=i().div`
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
`,b=i().div`
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
  animation: ${c} 0.2s ease both;
`,w=i().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,y=i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${l.w4.spacing.xs};
`,$=i().button`
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
`,v=i().span`
  font-size: 16px;
  flex-shrink: 0;
`,k=i().span`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,M=i().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.xs};
`,z=i()(b)`
  gap: ${l.w4.spacing.md};
`,T=i().div`
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.5;
`;function j({selectionCount:e,visibleIds:t,selectedIds:o,categories:n,locale:i,t:s,onCancel:c,onSelectAll:S,onCategorise:F,onDelete:C,onMarkReimbursed:A}){let[R,D]=(0,a.useState)(!1),[H,E]=(0,a.useState)(""),[L,B]=(0,a.useState)(!1),[P,N]=(0,a.useState)(!1),[O,K]=(0,a.useState)(!1),I=(0,a.useRef)(null);(0,a.useEffect)(()=>{R||E("")},[R]),(0,a.useEffect)(()=>{let e=e=>{if("Escape"===e.key){if(R)return void D(!1);if(L)return void B(!1);P&&N(!1)}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[R,L,P]);let W=(0,a.useCallback)(()=>{H&&(F(H),D(!1))},[H,F]),V=(0,a.useCallback)(()=>{C(),B(!1)},[C]),Y=(0,a.useCallback)(()=>{A(),N(!1)},[A]),_=t.length>0&&t.every(e=>o.has(e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{role:"toolbar","aria-label":s("finance.bulk.barLabel"),children:(0,r.jsxs)(g,{children:[(0,r.jsx)(f,{children:s("finance.bulk.selected",{n:e})}),(0,r.jsx)(d.$n,{variant:"ghost",style:{height:36,fontSize:12},onClick:_?c:S,children:s(_?"finance.bulk.deselectAll":"finance.bulk.selectAll")}),(0,r.jsx)(h,{}),(0,r.jsx)(d.$n,{variant:"ghost",style:{height:36,fontSize:12},disabled:0===e,onClick:()=>D(!0),children:s("finance.bulk.categorise")}),(0,r.jsx)(d.$n,{variant:"ghost",style:{height:36,fontSize:12},disabled:0===e,onClick:()=>N(!0),children:s("finance.bulk.reimburse")}),(0,r.jsxs)(x,{onMouseEnter:()=>K(!0),onMouseLeave:()=>K(!1),onFocus:()=>K(!0),onBlur:()=>K(!1),children:[(0,r.jsx)("button",{ref:I,type:"button",disabled:!0,style:{height:36,padding:"0 12px",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,color:l.w4.colors.mainTextMuted,fontSize:12,fontFamily:l.w4.typography.fontFamily,cursor:"not-allowed",opacity:.45},"aria-label":s("finance.bulk.tagComingSoon"),children:s("finance.bulk.tag")}),O&&(0,r.jsx)(u,{role:"tooltip",children:s("finance.bulk.tagComingSoon")})]}),(0,r.jsx)(d.$n,{variant:"danger",style:{height:36,fontSize:12},disabled:0===e,onClick:()=>B(!0),children:s("finance.bulk.delete")}),(0,r.jsx)(d.$n,{variant:"ghost",style:{height:36,fontSize:12},onClick:c,children:s("finance.bulk.cancel")})]})}),R&&(0,r.jsx)(m,{onClick:()=>D(!1),children:(0,r.jsxs)(b,{onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(w,{children:s("finance.bulk.categoriseTitle")}),(0,r.jsx)(y,{children:n.map(e=>(0,r.jsxs)($,{type:"button",selected:H===e.id,catColor:e.color,onClick:()=>E(e.id),children:[(0,r.jsx)(v,{"aria-hidden":!0,children:e.icon}),(0,r.jsx)(k,{children:"pt"===i?e.labelPt:e.labelEn})]},e.id))}),(0,r.jsxs)(M,{children:[(0,r.jsx)(d.$n,{variant:"ghost",onClick:()=>D(!1),style:{height:36},children:s("finance.member.cancel")}),(0,r.jsx)(d.$n,{variant:"primary",disabled:!H,onClick:W,style:{height:36},children:s("finance.bulk.applyCategory")})]})]})}),L&&(0,r.jsx)(m,{onClick:()=>B(!1),children:(0,r.jsxs)(z,{onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(w,{children:s("finance.bulk.deleteTitle")}),(0,r.jsx)(T,{children:s("finance.bulk.deleteConfirm",{n:e})}),(0,r.jsxs)(M,{children:[(0,r.jsx)(d.$n,{variant:"ghost",onClick:()=>B(!1),style:{height:36},children:s("finance.member.cancel")}),(0,r.jsx)(d.$n,{variant:"danger",onClick:V,style:{height:36},children:s("finance.bulk.deleteConfirmBtn")})]})]})}),P&&(0,r.jsx)(m,{onClick:()=>N(!1),children:(0,r.jsxs)(z,{onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(w,{children:s("finance.bulk.reimburseTitle")}),(0,r.jsx)(T,{children:s("finance.bulk.reimburseConfirm",{n:e})}),(0,r.jsxs)(M,{children:[(0,r.jsx)(d.$n,{variant:"ghost",onClick:()=>N(!1),style:{height:36},children:s("finance.member.cancel")}),(0,r.jsx)(d.$n,{variant:"primary",onClick:Y,style:{height:36},children:s("finance.bulk.reimburseConfirmBtn")})]})]})})]})}},719(e,t,o){o.d(t,{TA:()=>D,a8:()=>g,jb:()=>H});var r=o(5723),a=o(7991),n=o(6859),i=o.n(n),s=o(9874),l=o(8395),d=o(1496),c=o(8877);let p=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"];function g(e,t){return e.color??p[t%p.length]}let f="#7fb77e",h=i().nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: ${s.w4.spacing.md} 0;
  gap: 2px;
`,x=i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: transparent;
  border: none;
  border-left: 2px solid ${({active:e})=>e?f:"transparent"};
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
`,u=i().div`
  flex: 1;
  min-width: 0;
`,m=i().div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?f:s.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,b=i().div`
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
`,y=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({positive:e})=>e?"#f85149":"#7fb77e"};
`,$=i().button`
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
`,v=i().div`
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,k=i().input`
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
`,M=i().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
`,z=i().button`
  flex: 1;
  min-height: 44px;
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?f:s.w4.colors.border};
  background: ${({active:e})=>e?`${f}22`:s.w4.colors.mainBg};
  color: ${({active:e})=>e?f:s.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
`,T=i().div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,j=i().button`
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
`,S=i().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
`,F=i().button`
  flex: 1;
  min-height: 44px;
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${({primary:e})=>e?f:s.w4.colors.border};
  background: ${({primary:e})=>e?`${f}22`:"transparent"};
  color: ${({primary:e})=>e?f:s.w4.colors.mainTextMuted};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
`,C=i().div`
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
`,R=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
`;function D({data:e,activeMemberId:t,onSelectMember:o,onSaveData:n,t:i,locale:f}){let[C,A]=(0,a.useState)(!1),[R,H]=(0,a.useState)(""),[E,L]=(0,a.useState)("adult"),[B,P]=(0,a.useState)(p[0]),N=(0,c.thisMonthKey)(),O=(()=>{let[e,t]=N.split("-").map(Number),o=new Date(e,t-2,1);return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`})(),K=[{id:"all",name:i("finance.member.all"),role:"shared",color:void 0},{id:"shared",name:i("finance.member.shared"),role:"shared",color:void 0},...e.familyMembers.map((e,t)=>({...e,color:g(e,t)}))];return(0,r.jsxs)(h,{"aria-label":i("finance.nav.ariaLabel"),children:[K.map(a=>{var n;let i,p,g=a.id===t,h=a.color??s.w4.colors.mainTextMuted,$=(0,c.monthlyTotalByMember)(e,a.id,N),v=(n=a.id,i=(0,c.monthlyTotalByMember)(e,n,N),0===(p=(0,c.monthlyTotalByMember)(e,n,O))?0:Math.round((i-p)/p*100)),k=function(e,t){let o=new Date,r=[];for(let a=5;a>=0;a--){let n=new Date(o);n.setDate(o.getDate()-7*a-o.getDay()),n.setHours(0,0,0,0);let i=new Date(n);i.setDate(n.getDate()+7);let s=(0,c.expensesForMember)(e.expenses,t).filter(e=>{let t=new Date(e.date+"T00:00:00");return t>=n&&t<i}).reduce((e,t)=>e+t.amount,0);r.push(s)}return r}(e,a.id),M={id:a.id,name:a.name,role:a.role,color:a.color};return(0,r.jsxs)(x,{active:g,onClick:()=>o(a.id),type:"button","aria-pressed":g,children:[(0,r.jsx)(l.eu,{member:M,size:26}),(0,r.jsxs)(u,{children:[(0,r.jsx)(m,{active:g,children:a.name}),(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{children:`€${Math.round($).toLocaleString("pt"===f?"pt-PT":"en-GB")}`}),0!==v&&(0,r.jsxs)(y,{positive:v>0,children:[v>0?"↑":"↓",Math.abs(v),"%"]})]})]}),k.some(e=>e>0)&&(0,r.jsx)(d.OW,{points:k,accent:h,width:48,height:24})]},a.id)}),C?(0,r.jsxs)(v,{children:[(0,r.jsx)(k,{type:"text",placeholder:i("finance.member.name"),value:R,onChange:e=>H(e.target.value),autoFocus:!0,"aria-label":i("finance.member.name")}),(0,r.jsxs)(M,{children:[(0,r.jsx)(z,{type:"button",active:"adult"===E,onClick:()=>L("adult"),children:i("finance.member.role.adult")}),(0,r.jsx)(z,{type:"button",active:"child"===E,onClick:()=>L("child"),children:i("finance.member.role.child")})]}),(0,r.jsx)(T,{children:p.map(e=>(0,r.jsx)(j,{type:"button",bg:e,active:B===e,onClick:()=>P(e),"aria-label":e},e))}),(0,r.jsxs)(S,{children:[(0,r.jsx)(F,{type:"button",onClick:()=>A(!1),children:i("finance.member.cancel")}),(0,r.jsx)(F,{type:"button",primary:!0,onClick:function(){if(!R.trim())return;let t={id:`m_${Date.now()}`,name:R.trim(),role:E,color:B};n({...e,familyMembers:[...e.familyMembers,t]}),H(""),L("adult"),P(p[0]),A(!1)},disabled:!R.trim(),children:i("finance.member.save")})]})]}):(0,r.jsxs)($,{type:"button",onClick:()=>A(!0),children:[(0,r.jsx)(l.In,{name:"user-plus",size:14,"aria-hidden":!0}),i("finance.member.add")]})]})}function H({data:e,activeMemberId:t,onSelectMember:o,t:a,locale:n}){let i=(0,c.thisMonthKey)(),d=[{id:"all",name:a("finance.member.all"),role:"shared",color:void 0},{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...e.familyMembers.map((e,t)=>({...e,color:g(e,t)}))];return(0,r.jsx)(C,{role:"tablist","aria-label":a("finance.nav.ariaLabel"),children:d.map(a=>{let d=a.id===t,p=a.color??s.w4.colors.mainTextMuted,g=(0,c.monthlyTotalByMember)(e,a.id,i),f={id:a.id,name:a.name,role:a.role,color:a.color};return(0,r.jsxs)(A,{active:d,color:p,onClick:()=>o(a.id),type:"button",role:"tab","aria-selected":d,children:[(0,r.jsx)(l.eu,{member:f,size:20}),(0,r.jsx)("span",{children:a.name}),(0,r.jsx)(R,{children:`€${Math.round(g).toLocaleString("pt"===n?"pt-PT":"en-GB")}`})]},a.id)})})}},8989(e,t,o){o.d(t,{f:()=>b});var r=o(5723),a=o(7991),n=o(6859),i=o.n(n),s=o(9874),l=o(8877);function d(e,t){let[o,r]=e.split("-"),a=new Date(parseInt(o),parseInt(r)-1,1),n=a.toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"}),i=n.charAt(0).toUpperCase()+n.slice(1).replace(".","");return 0===a.getMonth()?`${i} '${String(a.getFullYear()).slice(2)}`:i}let c=i().div`
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
`,g=i().button`
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
`,f=i().div`
  width: 20px;
  height: ${28}px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,h=i().div`
  width: 100%;
  height: ${({height:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px 2px 0 0;
  opacity: ${({active:e})=>e?1:.6};
  transition: height 200ms ease, opacity 120ms ease;
  position: relative;
  overflow: hidden;
`,x=i().div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({height:e})=>e}px;
  background: ${"#f85149"};
  border-radius: 2px 2px 0 0;
`,u=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  white-space: nowrap;
  user-select: none;
  transition: color 120ms ease;
`,m=i().div`
  position: absolute;
  left: ${s.w4.spacing.md};
  right: ${s.w4.spacing.md};
  bottom: ${({bottom:e})=>e}px;
  border-top: 1px dashed ${s.w4.colors.mainTextMuted};
  opacity: 0.4;
  pointer-events: none;
`;function b({data:e,selectedMonth:t,onSelectMonth:o,locale:n}){let i=(0,a.useRef)(null),w=(0,a.useRef)(null),y=(0,a.useMemo)(()=>(function(){let e=[],t=new Date;for(let o=11;o>=0;o--){let r=new Date(t.getFullYear(),t.getMonth()-o,1);e.push(`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`)}return e})(),[]),$=(0,a.useMemo)(()=>y.map(t=>(0,l.expensesForMonth)(e.expenses,t).reduce((e,t)=>e+t.amount,0)),[y,e.expenses]),v=e.budget.monthlyBudget,k=(0,a.useMemo)(()=>Math.max(...$,0),[$]),M=(0,a.useMemo)(()=>0===k||v<=0?-1:22+Math.round(28*Math.min(v/k,1)),[k,v]);return(0,a.useEffect)(()=>{let e=w.current,t=i.current;if(!e||!t)return;let o=e.offsetLeft,r=o+e.offsetWidth,a=t.scrollLeft,n=a+t.clientWidth;(o<a||r>n)&&t.scrollTo({left:o-t.clientWidth/2+e.offsetWidth/2,behavior:"smooth"})},[t]),(0,r.jsx)(c,{role:"navigation","aria-label":"Month picker",children:(0,r.jsxs)(p,{ref:i,children:[M>=0&&(0,r.jsx)(m,{bottom:M,role:"presentation","aria-hidden":!0}),y.map((e,a)=>{let i=$[a]??0,l=e===t,c=i>v&&v>0,p=k>0?Math.round(i/k*28):0,m=0;return c&&k>0&&v>0&&(m=Math.max(0,p-Math.round(v/k*28))),(0,r.jsxs)(g,{active:l,ref:l?w:void 0,onClick:()=>o(e),"aria-label":`${d(e,n)} — €${Math.round(i)}`,"aria-pressed":l,type:"button",children:[(0,r.jsx)(f,{"aria-hidden":!0,children:p>0?(0,r.jsx)(h,{height:p,color:"#7fb77e",active:l,children:m>0&&(0,r.jsx)(x,{height:m})}):(0,r.jsx)("div",{style:{width:"100%",height:2,background:s.w4.colors.border,borderRadius:2}})}),(0,r.jsx)(u,{active:l,children:d(e,n)})]},e)})]})})}},6579(e,t,o){o.d(t,{J:()=>g,j:()=>c});var r=o(5723),a=o(7991),n=o(6859),i=o.n(n),s=o(9874),l=o(8395),d=o(8877);function c(e,t=6,o=60){let r,a=((r=new Date).setDate(r.getDate()-o),r.toISOString().slice(0,10)),n={};for(let t of e)t.date>=a&&(n[t.categoryId]=(n[t.categoryId]??0)+1);let i=[...Object.entries(n).sort(([,e],[,t])=>t-e).map(([e])=>e)];for(let e of d.DEFAULT_CATEGORIES){if(i.length>=t)break;i.includes(e.id)||i.push(e.id)}return i.slice(0,t)}let p=i().div`
  display: flex;
  gap: ${s.w4.spacing.xs};
  overflow-x: auto;
  /* hide scrollbar — still scrollable via touch/drag */
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  /* ensure chips keep their height and don't wrap */
  flex-wrap: nowrap;
  padding-bottom: 2px; /* prevent clipping of the Chip focus ring */
`;function g({expenses:e,storedOrder:t,lockedCategoryId:o,onToggle:n,locale:i,groupLabel:s}){let f=(0,a.useMemo)(()=>(t&&t.length>0?t:c(e)).map(e=>d.DEFAULT_CATEGORIES.find(t=>t.id===e)).filter(e=>void 0!==e),[t,e]);return 0===f.length?null:(0,r.jsx)(p,{role:"group","aria-label":s,children:f.map(e=>{let t=o===e.id,a="pt"===i?e.labelPt:e.labelEn;return(0,r.jsxs)(l.vu,{variant:t?"selected":"default",dotColor:e.color,onClick:()=>n(e.id),"aria-pressed":t,"aria-label":`${a}${t?"pt"===i?" — selecionado":" — selected":""}`,title:a,children:[e.icon," ",a]},e.id)})})}},5854(e,t,o){o.d(t,{m:()=>M});var r=o(5723),a=o(7991),n=o(2727),i=o.n(n),s=o(6859),l=o.n(s),d=o(2799),c=o(9874),p=o(8395);let g=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${c.w4.spacing.md};
  z-index: 2000;
  animation: ${g} 0.2s ease;
`,h=l().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-left: 2px solid ${"#7fb77e"};
  border-radius: ${c.w4.borderRadius.lg};
  width: 100%;
  max-width: 420px;
  max-height: calc(100dvh - 80px);
  overflow-y: auto;
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  animation: ${g} 0.2s ease;
`,x=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,u=l().h2`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
  margin: 0;
`,m=l().button`
  background: transparent;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainTextMuted};
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
    border-color: ${c.w4.colors.mainTextMuted};
    color: ${c.w4.colors.mainText};
  }

  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,b=l().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding: 0;
`,w=l().li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  padding: 8px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  transition: background 120ms ease;

  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,y=l().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
`,$=l().div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`,v=l().div`
  border-top: 1px solid ${c.w4.colors.border};
`,k=[{key:"n",descKey:"finance.shortcuts.newExpense"},{key:"/",descKey:"finance.shortcuts.search"},{key:"m",descKey:"finance.shortcuts.changeMember"},{key:"g",descKey:"finance.shortcuts.goToMonth"},{key:"?",descKey:"finance.shortcuts.openOverlay"},{key:"Esc",descKey:"finance.shortcuts.close"}];function M({t:e,onClose:t}){let o=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),t())};return document.addEventListener("keydown",e,!0),()=>document.removeEventListener("keydown",e,!0)},[t]),(0,a.useEffect)(()=>{o.current?.querySelector("[data-autofocus]")?.focus()},[]),i().createPortal((0,r.jsx)(f,{role:"dialog","aria-modal":"true","aria-label":e("finance.shortcuts.title"),onClick:e=>{e.target===e.currentTarget&&t()},children:(0,r.jsxs)(h,{ref:o,children:[(0,r.jsxs)(x,{children:[(0,r.jsx)(u,{children:e("finance.shortcuts.title")}),(0,r.jsx)(m,{onClick:t,"aria-label":e("finance.shortcuts.closeBtn"),"data-autofocus":"",children:"\xd7"})]}),(0,r.jsx)(v,{}),(0,r.jsx)(b,{children:k.map(({key:t,descKey:o})=>(0,r.jsxs)(w,{children:[(0,r.jsx)(y,{children:e(o)}),(0,r.jsx)($,{children:(0,r.jsx)(p.ue,{children:t})})]},t))}),(0,r.jsx)(v,{}),(0,r.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,textTransform:"uppercase",letterSpacing:"0.12em"},children:e("finance.shortcuts.note")})]})}),document.body)}},9546(e,t,o){o.d(t,{S:()=>x});var r=o(5723),a=o(7991),n=o(6859),i=o.n(n),s=o(2799),l=o(9874);let d=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,c=(0,s.keyframes)`
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
  animation: ${({leaving:e})=>e?c:d} 0.22s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    left: 16px;
    right: 16px;
    bottom: 16px;
    min-width: 0;
  }
`,g=i().span`
  flex: 1;
  min-width: 0;
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,f=i().button`
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
`,h=i().button`
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
`;function x({labelKey:e,onUndo:t,onDismiss:o,t:n,dismissMs:i=5e3}){let s=(0,a.useRef)(null),l=(0,a.useRef)(!1);(0,a.useEffect)(()=>{e&&(l.current=!1)},[e]),(0,a.useEffect)(()=>{if(e)return s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{o()},i),()=>{s.current&&clearTimeout(s.current)}},[e,i,o]);let d=(0,a.useCallback)(o=>{e&&!window.matchMedia("(hover: none) and (pointer: coarse)").matches&&(o.metaKey||o.ctrlKey)&&"z"===o.key&&!o.shiftKey&&(o.preventDefault(),t())},[e,t]);if((0,a.useEffect)(()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)),[d]),!e)return null;let c=n(e),u=n("finance.undo.action");return(0,r.jsxs)(p,{leaving:l.current,children:[(0,r.jsx)(g,{title:c,children:c}),(0,r.jsx)(f,{type:"button",onClick:t,"aria-label":u,children:u}),(0,r.jsx)(h,{type:"button",onClick:o,"aria-label":n("finance.undo.dismiss"),children:"\xd7"})]})}},3759(e,t,o){o.d(t,{H:()=>s});var r=o(7991),a=o(9874);let n="finance:active-range",i=new Set(["week","month","3m","6m","1y","all"]);function s(e="month"){let[t,o]=(0,r.useState)(e),[l,d]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(0,a.PL)(n).then(e=>{e&&i.has(e)&&o(e),d(!1)})},[]),{range:t,setRange:(0,r.useCallback)(e=>{o(e),(0,a.Is)(n,e)},[]),loading:l}}},9146(e,t,o){o.d(t,{E:()=>a});var r=o(7991);function a(){let[e,t]=(0,r.useState)(!1),[o,a]=(0,r.useState)(new Set),n=(0,r.useRef)(null),i=(0,r.useRef)(null),s=(0,r.useRef)(null),l=(0,r.useCallback)(()=>{n.current&&(clearTimeout(n.current),n.current=null),i.current=null,s.current=null},[]);(0,r.useEffect)(()=>()=>{l()},[l]);let d=(0,r.useCallback)(e=>{t(!0),e&&a(new Set([e]))},[]),c=(0,r.useCallback)(()=>{t(!1),a(new Set)},[]),p=(0,r.useCallback)(e=>{a(t=>{let o=new Set(t);return o.has(e)?o.delete(e):o.add(e),o})},[]),g=(0,r.useCallback)(e=>{a(new Set(e))},[]),f=(0,r.useCallback)(()=>{a(new Set)},[]);(0,r.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e&&c()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e,c]);let h=(0,r.useCallback)(e=>({onPointerDown:t=>{("touch"===t.pointerType||"pen"===t.pointerType)&&(i.current={x:t.clientX,y:t.clientY},s.current=e,n.current=setTimeout(()=>{s.current===e&&d(e),l()},450))},onPointerMove:e=>{if(!i.current)return;let t=Math.abs(e.clientX-i.current.x),o=Math.abs(e.clientY-i.current.y);(t>8||o>8)&&l()},onPointerUp:()=>{l()},onPointerCancel:()=>{l()}}),[d,l]);return{selectedIds:o,selectMode:e,enterSelectMode:d,exitSelectMode:c,toggleId:p,selectAll:g,clearSelection:f,longPressHandlers:h}}},3616(e,t,o){o.d(t,{K:()=>a});var r=o(7991);function a({quickAddInputRef:e,monthSelectRef:t,memberIds:o,activeMemberId:n,onSelectMember:i,onSetTab:s,expenseModalOpen:l,onOpenExpenseModal:d,shortcutsOpen:c,onToggleShortcuts:p}){(0,r.useEffect)(()=>{if(window.matchMedia("(hover: none)").matches)return;let e=e=>{if(!e.ctrlKey&&!e.altKey&&!e.metaKey){if("?"===e.key){e.preventDefault(),p();return}if(!function(){let e=document.activeElement;if(!e)return!1;let t=e.tagName.toLowerCase();return"input"===t||"textarea"===t||"select"===t||!!e.isContentEditable}()&&!l)switch(e.key){case"n":e.preventDefault(),d();break;case"/":case"g":e.preventDefault(),t.current?t.current.focus():(s("expenses"),requestAnimationFrame(()=>{t.current?.focus()}));break;case"m":{if(0===o.length)break;e.preventDefault();let t=(o.indexOf(n)+1)%o.length,r=o[t];void 0!==r&&i(r)}}}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[e,t,o,n,i,s,l,d,c,p])}},948(e,t,o){o.d(t,{A:()=>r});let r={"finance.appTitle":{en:"Finance",pt:"Finan\xe7as"},"finance.nav.ariaLabel":{en:"Main navigation",pt:"Navega\xe7\xe3o principal"},"finance.form.sourcePlaceholder":{en:"Salary, freelance…",pt:"Sal\xe1rio, freelance…"},"finance.tab.overview":{en:"Overview",pt:"Vis\xe3o geral"},"finance.tab.expenses":{en:"Expenses",pt:"Despesas"},"finance.tab.insights":{en:"Insights",pt:"Insights"},"finance.tab.settings":{en:"Settings",pt:"Defini\xe7\xf5es"},"finance.tab.dashboard":{en:"Dashboard",pt:"Painel"},"finance.tab.transactions":{en:"Transactions",pt:"Despesas"},"finance.dashboard.balance":{en:"Balance",pt:"Saldo"},"finance.dashboard.thisMonth":{en:"This Month",pt:"Este M\xeas"},"finance.dashboard.weeklyStatus":{en:"This Week",pt:"Esta Semana"},"finance.dashboard.recentTitle":{en:"◉ Recent",pt:"◉ Recentes"},"finance.dashboard.noRecent":{en:"No transactions yet.",pt:"Sem transa\xe7\xf5es ainda."},"finance.dashboard.viewAll":{en:"View all →",pt:"Ver tudo →"},"finance.dashboard.income":{en:"Income",pt:"Receita"},"finance.dashboard.expenses":{en:"Expenses",pt:"Despesas"},"finance.dashboard.remaining":{en:"remaining",pt:"restante"},"finance.dashboard.spent":{en:"spent",pt:"gasto"},"finance.dashboard.budget":{en:"budget",pt:"or\xe7amento"},"finance.dashboard.projection":{en:"Projected end of week",pt:"Proje\xe7\xe3o fim de semana"},"finance.hero.spentIn":{en:"SPENT IN",pt:"GASTO EM"},"finance.hero.family":{en:"Family",pt:"Fam\xedlia"},"finance.hero.vsPrevious":{en:"vs",pt:"vs"},"finance.budget.weekly":{en:"Weekly budget",pt:"Or\xe7amento semanal"},"finance.budget.monthly":{en:"Monthly budget",pt:"Or\xe7amento mensal"},"finance.budget.used":{en:"used",pt:"usado"},"finance.budget.remaining":{en:"remaining",pt:"restam"},"finance.budget.over":{en:"over budget",pt:"acima do or\xe7amento"},"finance.budget.projected":{en:"projected",pt:"proje\xe7\xe3o"},"finance.charts.sixMonths":{en:"◉ Last 6 months",pt:"◉ \xdaltimos 6 meses"},"finance.charts.byCategory":{en:"◉ By category",pt:"◉ Por categoria"},"finance.charts.cashflow":{en:"◉ Cash flow",pt:"◉ Fluxo de caixa"},"finance.charts.cashflowSub":{en:"income vs. expenses \xb7 90 days",pt:"entrada vs sa\xedda \xb7 90 dias"},"finance.charts.heatmap":{en:"◉ Daily activity",pt:"◉ Actividade di\xe1ria"},"finance.charts.thisWeek":{en:"◉ This week",pt:"◉ Esta semana"},"finance.charts.total6m":{en:"Total 6M",pt:"Total 6M"},"finance.charts.monthlyAvg":{en:"Monthly avg",pt:"M\xe9dia mensal"},"finance.charts.monthsOverBudget":{en:"Months over budget",pt:"Meses acima do or\xe7amento"},"finance.charts.trend":{en:"Trend",pt:"Tend\xeancia"},"finance.charts.activity":{en:"Activity",pt:"Actividade"},"finance.charts.in":{en:"in",pt:"entrada"},"finance.charts.out":{en:"out",pt:"sa\xedda"},"finance.charts.less":{en:"less",pt:"menos"},"finance.charts.more":{en:"more",pt:"mais"},"finance.charts.ideal":{en:"ideal",pt:"ideal"},"finance.charts.actual":{en:"actual",pt:"actual"},"finance.charts.noData":{en:"NO DATA YET",pt:"SEM DADOS AINDA"},"finance.charts.viewAll":{en:"View all",pt:"Ver tudo"},"finance.quickAdd.title":{en:"◉ Quick Add",pt:"◉ Adicionar"},"finance.quickAdd.placeholder":{en:"12.50 continente or @name 12.50 farm\xe1cia",pt:"12.50 continente ou @nome 12.50 farm\xe1cia"},"finance.quickAdd.hint":{en:"Amount + description",pt:"Valor + descri\xe7\xe3o"},"finance.quickAdd.add":{en:"Add",pt:"Adicionar"},"finance.quickAdd.category":{en:"Category",pt:"Categoria"},"finance.quickAdd.added":{en:"Added",pt:"Adicionado"},"finance.quickAdd.addIncome":{en:"Add income",pt:"Adicionar receita"},"finance.quickAdd.source":{en:"Source",pt:"Fonte"},"finance.quickAdd.incomeAdded":{en:"Income added",pt:"Receita adicionada"},"finance.quickAdd.member":{en:"Member",pt:"Membro"},"finance.quickAdd.newExpense":{en:"+ New expense",pt:"+ Nova despesa"},"finance.tx.title":{en:"◉ Transactions",pt:"◉ Transa\xe7\xf5es"},"finance.tx.empty":{en:"No transactions this month.",pt:"Sem transa\xe7\xf5es este m\xeas."},"finance.tx.filter.all":{en:"All",pt:"Tudo"},"finance.tx.filter.expenses":{en:"Expenses",pt:"Despesas"},"finance.tx.filter.income":{en:"Income",pt:"Receita"},"finance.tx.delete":{en:"Delete",pt:"Eliminar"},"finance.tx.reimbursed":{en:"Reimbursed",pt:"Reembolsado"},"finance.tx.reimbursable":{en:"Reimburse",pt:"Reembolsar"},"finance.tx.recurring":{en:"recurring",pt:"recorrente"},"finance.tx.markReimbursed":{en:"Mark as reimbursed",pt:"Marcar como reembolsado"},"finance.recent.title":{en:"◉ Recent expenses",pt:"◉ Despesas recentes"},"finance.recent.viewAll":{en:"View all ({n})",pt:"Ver todas ({n})"},"finance.insights.title":{en:"◉ Insights",pt:"◉ An\xe1lise"},"finance.insights.byCategory":{en:"◇ By Category",pt:"◇ Por Categoria"},"finance.insights.monthlyTrend":{en:"◇ Monthly Trend",pt:"◇ Tend\xeancia Mensal"},"finance.insights.noData":{en:"Not enough data yet.",pt:"Dados insuficientes."},"finance.insights.month":{en:"Month",pt:"M\xeas"},"finance.insights.total":{en:"Total",pt:"Total"},"finance.insights.memberCategoryUp":{en:"{name}'s {category} spending up {pct}% (€{prev} → €{current})",pt:"Gastos de {name} em {category} subiram {pct}% (€{prev} → €{current})"},"finance.insight.weekGood":{en:"€{remaining} left this week — on track!",pt:"€{remaining} restantes esta semana — tudo bem!"},"finance.insight.weekLow":{en:"Only €{remaining} left this week — be careful.",pt:"S\xf3 €{remaining} restantes esta semana — cuidado."},"finance.insight.weekOver":{en:"Weekly budget exceeded!",pt:"Or\xe7amento semanal ultrapassado!"},"finance.insight.projection":{en:"On track to spend €{amount} this week.",pt:"A caminho de gastar €{amount} esta semana."},"finance.insight.catHigh":{en:"{category} spending is near the limit.",pt:"Gastos em {category} perto do limite."},"finance.insight.catOver":{en:"{category} budget exceeded!",pt:"Or\xe7amento de {category} ultrapassado!"},"finance.member.all":{en:"All",pt:"Tudo"},"finance.member.shared":{en:"Shared",pt:"Partilhado"},"finance.member.add":{en:"+ Add member",pt:"+ Adicionar membro"},"finance.member.role.adult":{en:"Adult",pt:"Adulto"},"finance.member.role.child":{en:"Child",pt:"Crian\xe7a"},"finance.member.empty":{en:"ADD FAMILY MEMBERS →",pt:"ADICIONAR MEMBROS →"},"finance.member.name":{en:"Name",pt:"Nome"},"finance.member.color":{en:"Color",pt:"Cor"},"finance.member.save":{en:"Save",pt:"Guardar"},"finance.member.cancel":{en:"Cancel",pt:"Cancelar"},"finance.settings.title":{en:"◉ Budget Settings",pt:"◉ Or\xe7amento"},"finance.settings.weeklyBudget":{en:"Weekly budget (€)",pt:"Or\xe7amento semanal (€)"},"finance.settings.monthlyBudget":{en:"Monthly budget (€)",pt:"Or\xe7amento mensal (€)"},"finance.settings.save":{en:"Save",pt:"Guardar"},"finance.settings.saved":{en:"Saved",pt:"Guardado"},"finance.settings.familyTitle":{en:"◇ Family Members",pt:"◇ Membros da Fam\xedlia"},"finance.settings.addMember":{en:"Add member",pt:"Adicionar membro"},"finance.settings.memberName":{en:"Name",pt:"Nome"},"finance.settings.memberRole":{en:"Role",pt:"Papel"},"finance.settings.adult":{en:"Adult",pt:"Adulto"},"finance.settings.child":{en:"Child",pt:"Crian\xe7a"},"finance.settings.deleteMember":{en:"Delete",pt:"Eliminar"},"finance.status.good":{en:"On track",pt:"Dentro do plano"},"finance.status.warning":{en:"Be careful",pt:"Aten\xe7\xe3o"},"finance.status.danger":{en:"Over budget",pt:"Or\xe7amento excedido"},"finance.footer.updated":{en:"updated",pt:"actualizado"},"finance.footer.ago":{en:"ago",pt:"h\xe1"},"finance.range.week":{en:"This week",pt:"Esta semana"},"finance.range.month":{en:"This month",pt:"Este m\xeas"},"finance.range.3m":{en:"3 months",pt:"3 meses"},"finance.range.6m":{en:"6 months",pt:"6 meses"},"finance.range.1y":{en:"1 year",pt:"1 ano"},"finance.range.all":{en:"All time",pt:"Tudo"},"finance.range.label":{en:"Time range",pt:"Per\xedodo"},"finance.density.comfortable":{en:"Comfortable view",pt:"Vista confort\xe1vel"},"finance.density.compact":{en:"Compact view",pt:"Vista compacta"},"finance.density.toggle":{en:"Toggle list density",pt:"Alternar densidade da lista"},"finance.shortcuts.title":{en:"◉ KEYBOARD SHORTCUTS",pt:"◉ ATALHOS DE TECLADO"},"finance.shortcuts.closeBtn":{en:"Close shortcuts overlay",pt:"Fechar atalhos"},"finance.shortcuts.newExpense":{en:"New expense",pt:"Nova despesa"},"finance.shortcuts.search":{en:"Focus month picker / search",pt:"Focar seletor de m\xeas / pesquisa"},"finance.shortcuts.changeMember":{en:"Cycle to next member",pt:"Pr\xf3ximo membro"},"finance.shortcuts.goToMonth":{en:"Go to month picker",pt:"Ir para seletor de m\xeas"},"finance.shortcuts.openOverlay":{en:"Toggle this overlay",pt:"Abrir/fechar este painel"},"finance.shortcuts.close":{en:"Close overlay / modal",pt:"Fechar painel / modal"},"finance.shortcuts.note":{en:"Shortcuts are disabled when an input has focus.",pt:"Atalhos desativados quando um campo est\xe1 focado."},"finance.bulk.barLabel":{en:"Bulk actions",pt:"A\xe7\xf5es em massa"},"finance.bulk.selected":{en:"{n} selected|selected",pt:"{n} selecionado|selecionados"},"finance.bulk.selectAll":{en:"Select all",pt:"Selecionar tudo"},"finance.bulk.deselectAll":{en:"Deselect all",pt:"Desselecionar tudo"},"finance.bulk.categorise":{en:"Categorise",pt:"Categorizar"},"finance.bulk.reimburse":{en:"Mark reimbursed",pt:"Marcar reembolso"},"finance.bulk.tag":{en:"Tag",pt:"Etiquetar"},"finance.bulk.tagComingSoon":{en:"Tags coming soon",pt:"Etiquetas em breve"},"finance.bulk.delete":{en:"Delete",pt:"Eliminar"},"finance.bulk.cancel":{en:"Cancel",pt:"Cancelar"},"finance.bulk.select":{en:"Select",pt:"Selecionar"},"finance.bulk.categoriseTitle":{en:"◉ CHOOSE CATEGORY",pt:"◉ ESCOLHER CATEGORIA"},"finance.bulk.applyCategory":{en:"Apply",pt:"Aplicar"},"finance.bulk.deleteTitle":{en:"◉ DELETE EXPENSES",pt:"◉ ELIMINAR DESPESAS"},"finance.bulk.deleteConfirm":{en:"Delete {n} expense|expenses? This cannot be undone immediately — use Undo.",pt:"Eliminar {n} despesa|despesas? Pode ser revertido com Anular."},"finance.bulk.deleteConfirmBtn":{en:"Delete",pt:"Eliminar"},"finance.bulk.reimburseTitle":{en:"◉ MARK REIMBURSED",pt:"◉ MARCAR REEMBOLSO"},"finance.bulk.reimburseConfirm":{en:"Mark {n} reimbursable expense|expenses as reimbursed?",pt:"Marcar {n} despesa|despesas reembols\xe1veis como reembolsadas?"},"finance.bulk.reimburseConfirmBtn":{en:"Mark reimbursed",pt:"Marcar reembolsadas"},"finance.quickAdd.frequentCategories":{en:"Frequent categories",pt:"Categorias frequentes"},"finance.modal.amount":{en:"Amount (€)",pt:"Valor (€)"},"finance.modal.date":{en:"Date",pt:"Data"},"finance.modal.description":{en:"Description",pt:"Descri\xe7\xe3o"},"finance.modal.descPlaceholder":{en:"e.g. Continente, pharmacy…",pt:"ex. Continente, farm\xe1cia…"},"finance.modal.assign":{en:"Assign to",pt:"Atribuir a"},"finance.modal.member":{en:"Member",pt:"Membro"},"finance.modal.split":{en:"Split",pt:"Dividir"},"finance.modal.splitEach":{en:"{n}\xd7 €{amount} each",pt:"{n}\xd7 €{amount} cada"},"finance.modal.monthlyLabel":{en:"mensal",pt:"mensal"},"finance.undo.action":{en:"Undo",pt:"Anular"},"finance.undo.dismiss":{en:"Dismiss",pt:"Dispensar"},"finance.undo.label.added":{en:"Expense added — Undo",pt:"Despesa adicionada — Anular"},"finance.undo.label.deleted":{en:"Expense deleted — Undo",pt:"Despesa eliminada — Anular"},"finance.undo.label.edited":{en:"Expense updated — Undo",pt:"Despesa actualizada — Anular"},"finance.undo.label.reimbursed":{en:"Marked as reimbursed — Undo",pt:"Marcado como reembolsado — Anular"},"finance.undo.label.reverted":{en:"Change reverted",pt:"Altera\xe7\xe3o anulada"}}},789(e,t,o){o.d(t,{K:()=>r});function r(e=10){if(!("u"<typeof window||"u"<typeof navigator)&&window.matchMedia("(hover: none) and (pointer: coarse)").matches&&"function"==typeof navigator.vibrate)try{navigator.vibrate(e)}catch{}}},8170(e,t,o){o.d(t,{Ym:()=>c,Nx:()=>p});var r=o(7991),a=o(9874);let n={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},i="atlantis:locale",s="shell:locale";function l(e){return"en"===e||"pt"===e}function d(){try{let e=localStorage.getItem(i);if(l(e))return e}catch{}return"en"}function c(){let[e,t]=(0,r.useState)(d),o=(0,r.useCallback)(e=>{t(e);try{localStorage.setItem(i,e)}catch{}(0,a.Is)(s,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,r.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,r.useEffect)(()=>{(0,a.PL)(s).then(o=>{if(l(o)&&o!==e){try{localStorage.setItem(i,o)}catch{}t(o)}}).catch(()=>{})},[]),[e,o]}function p(e,t){let o=t?{...n,...t}:n;return(t,r)=>{let a=function(e,t){if(!t||!e.includes("|"))return e;let o=null;for(let e of Object.values(t))if("number"==typeof e&&Number.isFinite(e)){o=e;break}if(null===o)return e;let r=e.indexOf("|"),a=e.slice(0,r),n=e.slice(r+1);return 1===o?a:n}(o[t]?.[e]??t,r);return r?Object.entries(r).reduce((e,[t,o])=>e.replace(RegExp(`\\{${t}\\}`,"g"),String(o)),a):a}}(0,a.PL)(s).then(e=>{if(l(e))try{localStorage.setItem(i,e)}catch{}}).catch(()=>{}),o(5723);var g=o(6859),f=o.n(g);f().div`
  display: flex;
  gap: 4px;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 2px;
`,f().button`
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
`},8395(e,t,o){o.d(t,{ue:()=>G,vu:()=>K,Ex:()=>_,$n:()=>b,YZ:()=>X,n6:()=>S,In:()=>F,K0:()=>v,rl:()=>er,eu:()=>E,tU:()=>z});var r=o(5723),a=o(7991),n=o.n(a),i=o(6859),s=o.n(i),l=o(9874);let d={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},g={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},f={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},h={sm:"28px",md:"30px"},x={sm:"0 10px",md:"0 12px"},u={sm:"12px",md:"12px"},m=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>h[e]};
  padding: ${({size:e})=>x[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>g[e]};
  font-size: ${({size:e})=>u[e]};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>f[e]};
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
`,b=n().forwardRef(function({variant:e="ghost",size:t="md",icon:o,iconRight:a,children:n,...i},s){return(0,r.jsxs)(m,{ref:s,variant:e,size:t,...i,children:[o,n,a]})}),w={default:l.w4.colors.accent,danger:"#f85149"},y={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},$=s().button`
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
    color: ${({tone:e})=>w[e]};
    background: ${({tone:e})=>y[e]};
    border-color: ${({tone:e})=>w[e]};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,v=n().forwardRef(function({active:e=!1,shape:t="square",tone:o="default",children:a,...n},i){return(0,r.jsx)($,{ref:i,active:e,shape:t,tone:o,...n,children:a})});s().div`
  position: relative;
  display: inline-flex;
`,s().div`
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
`,s().button`
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
`,s().div`
  height: 1px;
  margin: 4px 0;
  background: ${l.w4.colors.sidebarBorder};
`,s().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,s().span`
  width: 1px;
  height: 20px;
  background: ${l.w4.colors.border};
  flex-shrink: 0;
`;let k=s().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,M=s()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
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
`;function z({tabs:e,value:t,onChange:o,className:a,"aria-label":n}){return(0,r.jsx)(k,{role:"tablist","aria-label":n,className:a,children:e.map(e=>{let a=e.value===t;return(0,r.jsx)(M,{type:"button",role:"tab","aria-selected":a,active:a,highlight:e.highlight,disabled:e.disabled,onClick:()=>o(e.value),children:e.label},e.value)})})}o(2727);var T=o(2799);let j={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>'};function S(e){return Object.prototype.hasOwnProperty.call(j,e)}function F({name:e,size:t=18,strokeWidth:o=1.5,...a}){let n=j[e];return(0,r.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!a["aria-label"]||void 0,...a,dangerouslySetInnerHTML:{__html:n}})}Object.keys(j);let C=s().span`
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
`,A=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${l.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,R=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"],D=0,H=new Map;function E({member:e,size:t=24}){var o,a;let n,i="shared"===e.id||"shared"===e.role,s=Math.floor(.55*t),d=t<=18?8:t<=22?9:t<=28?11:12;if(i)return(0,r.jsx)(C,{size:t,bg:l.w4.colors.surface,ring:!0,"aria-label":"Shared",title:"Shared",style:{color:l.w4.colors.mainTextMuted},children:(0,r.jsx)(F,{name:"home",size:s,"aria-hidden":!0})});let c=(o=e.id,(a=e.color)?a:(!H.has(o)&&(H.set(o,R[D%R.length]),D++),H.get(o))),p="adult"===e.role,g=(n=e.name.trim().split(/\s+/),((n[0]?.[0]??"")+(n[1]?.[0]??"")).toUpperCase().slice(0,2));return(0,r.jsx)(C,{size:t,bg:c,ring:p,title:e.name,children:(0,r.jsx)(A,{fontSize:d,children:g})})}s().img`
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
`;let L=(0,T.keyframes)`
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
  animation: ${L} 0.15s ease;
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
`,o(8170),s().div`
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
`;let B=(0,T.keyframes)`
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
  animation: ${B} 0.18s ease both;

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
`,s().div`
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
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;

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
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }
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
`;let P=(0,T.keyframes)`
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
  animation: ${P} 0.4s ease both;
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
`;let N=s().button`
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
`,O=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`,K=n().forwardRef(function({variant:e="default",dotColor:t,children:o,onClick:a,...n},i){return(0,r.jsxs)(N,{ref:i,variant:e,clickable:!!a,onClick:a,type:n.type??"button",...n,children:[t&&(0,r.jsx)(O,{color:t}),o]})}),I={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},W={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent},V=s().span`
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
  background: ${({tone:e})=>I[e]};
  color: ${({tone:e})=>W[e]};
`,Y=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function _({tone:e="neutral",dot:t,children:o,...a}){return(0,r.jsxs)(V,{tone:e,...a,children:[(t??"live"===e)&&(0,r.jsx)(Y,{}),o]})}let q=s().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;function G({children:e,...t}){return(0,r.jsx)(q,{...t,children:e})}let U=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function X({children:e,...t}){return(0,r.jsx)(U,{...t,children:e})}s().label`
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
`;let J=s().div`
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
`,Z=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,Q=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,ee=s().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,et=s().div`
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
`,eo=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`;function er({title:e,accessory:t,accentColor:o,error:a,errorLabel:n,children:i}){return(0,r.jsxs)(J,{accentColor:o,"data-widget-shell":!0,children:[(0,r.jsxs)(Z,{children:[(0,r.jsx)(X,{children:e}),t&&(0,r.jsx)(Q,{children:t})]}),a?(0,r.jsxs)(et,{role:"alert",children:[(0,r.jsx)(eo,{children:n??"Error"}),(0,r.jsx)("div",{children:a})]}):(0,r.jsx)(ee,{children:i})]})}s().div`
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
`;let ea=(0,T.keyframes)`
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
  animation: ${ea} 0.4s ease both;
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
`,o(5406),s().nav`padding: ${l.w4.spacing.sm} 0;`,s().div`
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
`;let en="#7fb77e",ei=(0,T.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;s().div`
  position: relative;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.lg} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  animation: ${ei} 0.25s ease both;
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
    background: ${en};
    box-shadow: 0 0 12px ${en}55;
  }

  /* Uppercase mono eyebrow tag — reads "DIAGRAM · mermaid" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${en};
    opacity: 0.7;
    pointer-events: none;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${l.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
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
`;let es=(0,T.keyframes)`
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
`;let el=s().button`
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
    animation: ${es} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;s()(el)`
  border-bottom: 1px solid ${l.w4.colors.border}80;
`,s()(el)``,s().span`
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
`;var ed=o(1426);s().div`
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
`,ed.A,ed.A['pre[class*="language-"]'],l.w4.colors.codeBg,ed.A['code[class*="language-"]'],s().div`
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
`;let ec=(0,T.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ep=(0,T.keyframes)`
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
  animation: ${ec} 0.15s ease;
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
  animation: ${ep} 0.2s ease;
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
`},8908(e,t,o){o.d(t,{uj:()=>k,OW:()=>f,ik:()=>m,Xj:()=>D,Ru:()=>x,kl:()=>F,RT:()=>j,RJ:()=>w,YG:()=>p});var r=o(5723),a=o(6859),n=o.n(a),i=o(9874);let s=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 80px;
  gap: 6px;
  padding: ${i.w4.spacing.md};
`,l=n().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({mode:e})=>i.w4.colors.mainTextMuted};
  opacity: ${({mode:e})=>"loading"===e?.5:.7};
`,d=n().p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.6;
  text-align: center;
  max-width: 240px;
  margin: 0;
  line-height: 1.5;
`,c={loading:"◌ Loading",empty:"◎ Empty",error:"◎ Offline"};function p({mode:e,label:t,body:o}){return(0,r.jsxs)(s,{children:[(0,r.jsx)(l,{mode:e,children:t??c[e]}),o&&(0,r.jsx)(d,{children:o})]})}var g=o(7991);function f({points:e,accent:t=i.w4.colors.accent,width:o=60,height:a=28,strokeWidth:n=1.5}){let s=(0,g.useMemo)(()=>{if(e.length<2)return"";let t=Math.min(...e),r=Math.max(...e)-t||1,i=o-2*n,s=a-2*n;return e.map((o,a)=>{let l=n+a/(e.length-1)*i,d=n+s-(o-t)/r*s;return`${0===a?"M":"L"} ${l.toFixed(1)} ${d.toFixed(1)}`}).join(" ")},[e,o,a,n]),l=(0,g.useMemo)(()=>{if(e.length<1)return null;let t=e[e.length-1],r=Math.min(...e),i=o-2*n,s=a-2*n;return{x:n+i,y:n+s-(t-r)/(Math.max(...e)-r||1)*s}},[e,o,a,n]);return s?(0,r.jsxs)("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",flexShrink:0},children:[(0,r.jsx)("path",{d:s,fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",opacity:.7}),l&&(0,r.jsx)("circle",{cx:l.x,cy:l.y,r:n+1,fill:t})]}):null}let h=n().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  color: ${({sign:e})=>"pos"===e?i.w4.colors.success:"neg"===e?i.w4.colors.danger:i.w4.colors.mainTextMuted};
  white-space: nowrap;
`;function x({value:e,format:t="pct",decimals:o=2}){let a=e>0?"pos":e<0?"neg":"zero",n=Math.abs(e).toFixed(o);return(0,r.jsxs)(h,{sign:a,children:["pos"===a?"▲":"neg"===a?"▼":"—"," ",n,"pct"===t?"%":""]})}n().div`
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
`,n().a`
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
`,n().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,n().span`
  font-size: 13px;
  color: ${i.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`,n().span`
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.75;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,n().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: ${i.w4.colors.mainTextMuted};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`,o(3090);let u="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function m({data:e,budget:t,height:o=200,animation:a="rise"}){let n=(0,g.useId)();if(!e.length)return null;let s=1.1*Math.max(...e.map(e=>e.segments.reduce((e,t)=>e+t.value,0)+(e.over??0)),t??0)||1,l=472,d=o-20-24,c=472/e.length*.58,p=l/e.length,f="rise"===a?{transformOrigin:"bottom",animation:`${n}_rise 0.45s ease-out both`}:{};return(0,r.jsxs)(r.Fragment,{children:["rise"===a&&(0,r.jsx)("style",{children:`
          @keyframes ${n}_rise {
            from { transform: scaleY(0); }
            to   { transform: scaleY(1); }
          }
        `}),(0,r.jsxs)("svg",{viewBox:`0 0 520 ${o}`,style:{width:"100%",height:o},preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",children:[null!=t?(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:40,x2:40+l,y1:20+d-t/s*d,y2:20+d-t/s*d,stroke:i.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,r.jsxs)("text",{x:36,y:20+d-t/s*d+3,textAnchor:"end",fontFamily:u,fontSize:"9",fill:i.w4.colors.mainTextMuted,children:["€",t]})]}):null,e.map((e,t)=>{let a,n=40+t*p+(p-c)/2,l=20+d;return(0,r.jsxs)("g",{style:f,children:[e.segments.map(e=>{let t=e.value/s*d;return l-=t,(0,r.jsx)("rect",{x:n,y:l,width:c,height:t,fill:e.color,opacity:.85},e.id)}),null!=e.over&&e.over>0?(a=e.over/s*d,l-=a,(0,r.jsx)("rect",{x:n,y:l,width:c,height:a,fill:"#f85149",opacity:.7},"over")):null,(0,r.jsx)("text",{x:n+c/2,y:o-6,textAnchor:"middle",fontFamily:u,fontSize:"10",fill:i.w4.colors.mainTextMuted,children:e.label})]},e.label)})]})]})}let b="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function w({data:e,total:t,size:o=110,thickness:a=14,centerLabel:n,centerValue:s}){let l=(0,g.useId)(),d=o/2-a/2-2,c=2*Math.PI*d,p=e.reduce((e,t)=>e+t.value,0)||1,f=0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${l}_dash {
          from { stroke-dasharray: 0 ${c.toFixed(1)}; }
        }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 ${o} ${o}`,style:{width:o,height:o,flexShrink:0},"aria-hidden":"true",children:[(0,r.jsx)("circle",{cx:o/2,cy:o/2,r:d,fill:"none",stroke:i.w4.colors.border,strokeWidth:a}),e.map((e,t)=>{let n=e.value/p*c,i=60*t,s=(0,r.jsx)("circle",{cx:o/2,cy:o/2,r:d,fill:"none",stroke:e.color,strokeWidth:a,strokeDasharray:`${n.toFixed(1)} ${c.toFixed(1)}`,strokeDashoffset:(-f).toFixed(1),transform:`rotate(-90 ${o/2} ${o/2})`,style:{animation:`${l}_dash 0.45s ease-out ${i}ms both`}},t);return f+=n,s}),n?(0,r.jsx)("text",{x:o/2,y:o/2-4,textAnchor:"middle",fontFamily:b,fontSize:"9",fill:i.w4.colors.mainTextMuted,letterSpacing:"0.12em",textDecoration:"none",children:n.toUpperCase()}):null,s?(0,r.jsx)("text",{x:o/2,y:n?o/2+11:o/2+4,textAnchor:"middle",fontFamily:b,fontSize:"13",fontWeight:"700",fill:i.w4.colors.mainText,children:s}):null]})]})}let y="#7fb77e",$="#f85149";function v(e){let t=0;for(let o=1;o<e.length;o++){let r=e[o][0]-e[o-1][0],a=e[o][1]-e[o-1][1];t+=Math.sqrt(r*r+a*a)}return t}function k({data:e,height:t=170,legendIn:o,legendOut:a}){let n=(0,g.useId)();if(!e.length)return null;let s=288,l=t-10-32,d=1.1*Math.max(...e.map(e=>e.inc),...e.map(e=>e.exp))||1,c=s/Math.max(e.length-1,1),p=(0,g.useMemo)(()=>e.map((e,t)=>[6+t*c,10+l-e.inc/d*l]),[e,t]),f=(0,g.useMemo)(()=>e.map((e,t)=>[6+t*c,10+l-e.exp/d*l]),[e,t]),h=p.map(e=>e.join(",")).join(" "),x=f.map(e=>e.join(",")).join(" "),u=[`M${p[0][0]},${10+l}`,...p.map(e=>`L${e[0]},${e[1]}`),`L${p[p.length-1][0]},${10+l}`,"Z"].join(" "),m=v(p).toFixed(1),b=v(f).toFixed(1),w=e.reduce((e,t)=>e+t.inc,0),M=e.reduce((e,t)=>e+t.exp,0),z=e=>e>=1e3?`€${(e/1e3).toFixed(1)}k`:`€${Math.round(e)}`;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${n}_inc { from { stroke-dashoffset: ${m}; } }
        @keyframes ${n}_exp { from { stroke-dashoffset: ${b}; } }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 300 ${t}`,style:{width:"100%",height:t},preserveAspectRatio:"none","aria-hidden":"true",children:[(0,r.jsx)("path",{d:u,fill:y,opacity:.1}),(0,r.jsx)("polyline",{points:h,stroke:y,strokeWidth:"1.25",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:m,strokeDashoffset:"0",style:{animation:`${n}_inc 0.5s ease-out both`}}),(0,r.jsx)("polyline",{points:x,stroke:$,strokeWidth:"1.25",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:b,strokeDashoffset:"0",style:{animation:`${n}_exp 0.5s ease-out 0.1s both`}}),(0,r.jsx)("line",{x1:6,x2:6+s,y1:10+l,y2:10+l,stroke:i.w4.colors.border,strokeWidth:"1"}),(0,r.jsxs)("g",{fontFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSize:"10",style:{fontVariantNumeric:"tabular-nums"},children:[(0,r.jsxs)("text",{x:6,y:t-14,fill:y,children:["● ",o??"in"," ",z(w)]}),(0,r.jsxs)("text",{x:6+s/2+4,y:t-14,fill:$,children:["● ",a??"out"," ",z(M)]}),(0,r.jsx)("text",{x:6,y:t-2,fill:i.w4.colors.mainTextMuted,children:"90D"})]})]})]})}let M=["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"],z=["S","T","Q","Q","S","S","D"],T=["S","M","T","W","T","F","S"];function j({data:e,cellSize:t=10,gap:o=2,locale:a="pt"}){let n=(0,g.useId)();if(!e.length)return null;let s=24+Math.ceil(e.length/7)*(t+o),l=14+7*(t+o);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${n}_fade { from { opacity: 0; } to { opacity: 1; } }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 ${s} ${l}`,style:{width:"100%",height:"auto",maxHeight:l+4},"aria-hidden":"true",children:[(0,r.jsx)("g",{fontFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSize:"8",fill:i.w4.colors.mainTextMuted,children:("pt"===a?z:T).map((e,a)=>(0,r.jsx)("text",{x:"0",y:10+a*(t+o),children:e},a))}),e.map((e,a)=>{let i=18+Math.floor(a/7)*(t+o),s=2+a%7*(t+o),l=M[Math.max(0,Math.min(4,e))]??M[0];return(0,r.jsx)("rect",{x:i,y:s,width:t,height:t,fill:l,rx:"1",style:{animation:`${n}_fade 0.3s ease-out ${8*a}ms both`}},a)})]})]})}function S(e){let t=0;for(let o=1;o<e.length;o++){let r=e[o][0]-e[o-1][0],a=e[o][1]-e[o-1][1];t+=Math.sqrt(r*r+a*a)}return t}function F({spent:e,budget:t,height:o=60}){let a=(0,g.useId)(),n=1.05*t||1,s=Array.from({length:8},(e,o)=>t-t/7*o),l=Math.min(e/(t||1),1),d=Array.from({length:8},(e,o)=>Math.max(0,t-o/7*t*l*1.1)),c=s.map((e,t)=>[320*t/7,o-e/n*(o-5)]),p=d.map((e,t)=>[320*t/7,o-e/n*(o-5)]),f=c.map(e=>e.join(",")).join(" "),h=p.map(e=>e.join(",")).join(" "),x=S(c).toFixed(1),u=S(p).toFixed(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${a}_i { from { stroke-dashoffset: ${x}; } }
        @keyframes ${a}_a { from { stroke-dashoffset: ${u}; } }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 320 ${o}`,style:{width:"100%",height:o},preserveAspectRatio:"none","aria-hidden":"true",children:[(0,r.jsx)("line",{x1:"0",x2:320,y1:o-5,y2:o-5,stroke:i.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,r.jsx)("polyline",{points:f,stroke:i.w4.colors.mainTextMuted,strokeWidth:"1",strokeDasharray:`${x} ${x}`,strokeDashoffset:"0",fill:"none",style:{strokeDasharray:"2 3",animation:`${a}_i 0.45s ease-out both`}}),(0,r.jsx)("polyline",{points:h,stroke:"#7fb77e",strokeWidth:"1.5",strokeDasharray:`${u} ${u}`,strokeDashoffset:"0",fill:"none",strokeLinecap:"round",style:{animation:`${a}_a 0.45s ease-out 0.08s both`}})]})]})}let C=n().div`
  position: relative;
  height: 6px;
  background: ${i.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,A=n().div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 3px;
  width: ${({pct:e})=>Math.min(100,e)}%;
  background: ${({color:e})=>e};
  transition: width 400ms ease;
`,R=n().div`
  position: absolute;
  top: 0;
  height: 100%;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  background: ${"#f85149"};
  opacity: 0.7;
  transition: width 400ms ease;
`;function D({pct:e,over:t=0,color:o="#7fb77e"}){let a=Math.min(100,e),n=100-t;return(0,r.jsxs)(C,{children:[(0,r.jsx)(A,{pct:a,color:o}),t>0&&(0,r.jsx)(R,{left:Math.max(0,n),width:t})]})}},3090(e,t,o){o.d(t,{B:()=>a});var r=o(8877);function a(e){let t=(0,r.cacheBackedProducer)({id:e.id,category:e.category,cacheKey:e.cacheKey,parse:e.parse});return{id:e.id,category:e.category,labelKey:e.labelKey,defaultEnabled:e.defaultEnabled,producer:t,start(){},stop(){}}}},7517(e,t,o){o.d(t,{A:()=>r});let r={id:"habits",load:()=>Promise.all([o.e("7044"),o.e("2045")]).then(o.bind(o,6780)).then(e=>({default:e.HabitsWidget})),labels:{en:"Habits Grid",pt:"Grelha de H\xe1bitos"},descriptions:{en:"Your last 7 days of missions",pt:"Os teus \xfaltimas 7 dias de miss\xf5es"},icon:"\uD83C\uDFAF",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress"}],notifications:[{id:"daily",category:"daily.overdue",labelKey:"notifications.source.daily",producer:(0,o(8877).dailyProducer)({category:"daily.overdue"}),start(){},stop(){}}],persistedKeys:["daily:progress"]}},2013(e,t,o){o.d(t,{A:()=>n});var r=o(907),a=o(8877);let n={id:"hackernews-hot",load:()=>Promise.all([o.e("7044"),o.e("9390")]).then(o.bind(o,3565)).then(e=>({default:e.HackerNewsHotWidget})),labels:{en:"Hacker News Hot",pt:"Em Alta no HN"},descriptions:{en:"Top stories from Hacker News",pt:"Hist\xf3rias em destaque no Hacker News"},icon:"\uD83D\uDD25",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"hn-firebase",kind:"dal-client",cacheKey:"internet-hn-ids",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"hn-front-page",category:"hn.frontPage",labelKey:"notifications.source.hnFrontPage",producer:{id:"hn-front-page",category:"hn.frontPage",async poll(){if((0,a.isMutedNow)("hn.frontPage"))return[];let e=await (0,r.fetchHnFrontPage)(5);if(!e?.hits)return[];let t=[];for(let o of e.hits){let e=o.created_at_i??(o.created_at?Date.parse(o.created_at)/1e3:NaN);Number.isFinite(e)&&t.push({id:`hn-front:${o.objectID}`,category:"hn.frontPage",ts:1e3*e,title:o.title,link:o.url??`https://news.ycombinator.com/item?id=${o.objectID}`,meta:{points:o.points,comments:o.num_comments}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:internet-hn-ids"]}},1496(e,t,o){o.d(t,{uj:()=>r.uj,OW:()=>r.OW,ik:()=>r.ik,Xj:()=>r.Xj,Ru:()=>r.Ru,kl:()=>r.kl,RT:()=>r.RT,RJ:()=>r.RJ}),o(7517),o(2013),o(9603),o(2026),o(5471),o(5417),o(4200),o(2306),o(9780);var r=o(8908);o(5723),o(7991);var a=o(6859),n=o.n(a),i=o(2799),s=o(9874);o(8395),o(8170);let l=(0,i.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  flex: 1;
  align-content: start;
  animation: ${l} 0.25s ease both;
`,n().button`
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
`,n().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({tint:e})=>e};
`,n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,n().div`
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
`},9603(e,t,o){o.d(t,{A:()=>r});let r={id:"news-pt",load:()=>Promise.all([o.e("7044"),o.e("9392")]).then(o.bind(o,1507)).then(e=>({default:e.NewsPortugalWidget})),labels:{en:"PT News",pt:"Not\xedcias PT"},descriptions:{en:"Latest news from RTP",pt:"\xdaltimas not\xedcias da RTP"},icon:"\uD83D\uDCF0",accentColor:"#2da44e",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"rtp-rss",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp",notifiable:!0}],notifications:[(0,o(3090).B)({id:"news-pt",category:"news.pt",labelKey:"notifications.source.newsPt",badgeColor:"#2da44e",cacheKey:"news-portugal",parse:function(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,o)=>{let r=Date.parse(e.pubDate);Number.isNaN(r)||t.push({id:`${r}-${o}`,ts:r,title:e.title,link:e.link})}),t}})],persistedKeys:["widget-cache:news-portugal"]}},2026(e,t,o){o.d(t,{A:()=>r});let r={id:"news-world",load:()=>Promise.all([o.e("7044"),o.e("7566")]).then(o.bind(o,4925)).then(e=>({default:e.NewsWorldWidget})),labels:{en:"World News",pt:"Not\xedcias Mundo"},descriptions:{en:"Latest news from CNN",pt:"\xdaltimas not\xedcias da CNN"},icon:"\uD83C\uDF0D",accentColor:"#cc0000",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"cnn-rss",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn",notifiable:!0}],notifications:[(0,o(3090).B)({id:"news-world",category:"news.world",labelKey:"notifications.source.newsWorld",badgeColor:"#cc0000",cacheKey:"news-world",parse:function(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,o)=>{let r=Date.parse(e.pubDate);Number.isNaN(r)||t.push({id:`${r}-${o}`,ts:r,title:e.title,link:e.link})}),t}})],persistedKeys:["widget-cache:news-world"]}},5471(e,t,o){o.d(t,{A:()=>a});var r=o(3090);let a={id:"seismic",load:()=>Promise.all([o.e("7044"),o.e("5773")]).then(o.bind(o,8108)).then(e=>({default:e.SeismicWidget})),labels:{en:"PT Seismic",pt:"Sismicidade PT"},descriptions:{en:"Recent seismic activity in Portugal",pt:"Atividade s\xedsmica recente em Portugal"},icon:"\uD83C\uDF0B",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"ipma",kind:"dal-client",cacheKey:"seismic-pt",labelKey:"sources.ipma",notifiable:!0},{id:"usgs",kind:"dal-client",cacheKey:"seismic-world",labelKey:"sources.usgs",notifiable:!0}],notifications:[(0,r.B)({id:"seismic-pt",category:"seismic.pt",labelKey:"notifications.source.seismicPt",badgeColor:"#f97316",cacheKey:"seismic-pt",parse:function(e){if(!Array.isArray(e))return[];let t=[];return e.forEach((e,o)=>{let r=Date.parse(e.time);if(Number.isNaN(r))return;let a=e.local||e.obsRegion||"?";t.push({id:`pt-${r}-${o}`,ts:r,title:`M ${e.mag.toFixed(1)} — ${a}`})}),t}}),(0,r.B)({id:"seismic-world",category:"seismic.world",labelKey:"notifications.source.seismicWorld",badgeColor:"#ea580c",cacheKey:"seismic-world",parse:function(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}})],persistedKeys:["widget-cache:seismic-pt","widget-cache:seismic-world"]}},5417(e,t,o){o.d(t,{A:()=>n});var r=o(907),a=o(8877);let n={id:"techscope",load:()=>Promise.all([o.e("7044"),o.e("7923")]).then(o.bind(o,4942)).then(e=>({default:e.TechScopeLiveWidget})),labels:{en:"TechScope Live",pt:"TechScope Ao Vivo"},descriptions:{en:"Trending GitHub repos and Hacker News stories",pt:"Reposit\xf3rios GitHub e hist\xf3rias do Hacker News em alta"},icon:"⚡",accentColor:"#a371f7",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!0,sources:[{id:"github-trending",kind:"cache-key",cacheKey:"techscope-gh",labelKey:"sources.github",notifiable:!0},{id:"hn-algolia",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"github-trending",category:"github.trending",labelKey:"notifications.source.githubTrending",producer:{id:"github-trending",category:"github.trending",async poll(){if((0,a.isMutedNow)("github.trending"))return[];let e=await (0,r.fetchTrendingRepos)({days:7,perPage:5});if(!e?.items)return[];let t=[];for(let o of e.items){let e=o.created_at?Date.parse(o.created_at):NaN;if(!Number.isFinite(e))continue;let r=o.stargazers_count,a=o.language?` \xb7 ${o.language}`:"";t.push({id:`gh-trending:${o.id}`,category:"github.trending",ts:e,title:`${o.full_name} — ${r.toLocaleString()}★${a}`,link:o.html_url,meta:{stars:r,language:o.language,description:o.description}})}return t}},start(){},stop(){}},{id:"devto-weekly",category:"devto.weekly",labelKey:"notifications.source.devto",producer:{id:"devto-weekly",category:"devto.weekly",async poll(){if((0,a.isMutedNow)("devto.weekly"))return[];let e=await (0,r.fetchDevToArticles)({top:7,perPage:5});if(!e)return[];let t=[];for(let o of e){let e=Date.parse(o.published_at);if(!Number.isFinite(e))continue;let r=o.public_reactions_count??0,a=o.user?.name||o.user?.username,n=a?` — ${a}`:"";t.push({id:`devto:${o.id}`,category:"devto.weekly",ts:e,title:`${o.title}${n}`,link:o.url,meta:{reactions:r,comments:o.comments_count??0,readingTime:o.reading_time_minutes??null,tags:o.tag_list??[]}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:techscope-gh","widget-cache:techscope-hn"]}},4200(e,t,o){o.d(t,{A:()=>r});let r={id:"trending-searches",load:()=>Promise.all([o.e("7044"),o.e("346")]).then(o.bind(o,2065)).then(e=>({default:e.TrendingSearchesWidget})),labels:{en:"Trending Searches",pt:"Pesquisas em Alta"},descriptions:{en:"Top Google trending searches right now",pt:"As pesquisas mais populares no Google agora"},icon:"\uD83D\uDD0D",accentColor:"#e233ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"google-trends-rss",kind:"cache-key",cacheKey:"internet-trends",labelKey:"sources.googleTrends",notifiable:!0}],notifications:[(0,o(3090).B)({id:"trending-daily",category:"trending.daily",labelKey:"notifications.source.trending",badgeColor:"#e233ff",cacheKey:"internet-trends",parse:function(e){let t=e?.items?.[0];return t?[{id:new Date().toISOString().slice(0,10),ts:Date.now(),title:t.title,link:t.link}]:[]},defaultEnabled:!1})],persistedKeys:["widget-cache:internet-trends"]}},2306(e,t,o){o.d(t,{A:()=>i});var r=o(3090);let a={yellow:"\uD83D\uDFE1",orange:"\uD83D\uDFE0",red:"\uD83D\uDD34"},n={yellow:"Yellow",orange:"Orange",red:"Red"},i={id:"weather",load:()=>Promise.all([o.e("7044"),o.e("6693")]).then(o.bind(o,5940)).then(e=>({default:e.WeatherWidget})),labels:{en:"Weather",pt:"Meteorologia"},descriptions:{en:"Current weather for Lisbon",pt:"Meteorologia atual em Lisboa"},icon:"\uD83C\uDF24️",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"openMeteo",kind:"cache-key",cacheKey:"weather-lisbon",labelKey:"sources.openMeteo",notifiable:!0}],notifications:[(0,r.B)({id:"ipma-warnings",category:"weather.pt.warnings",labelKey:"notifications.source.weatherPt",badgeColor:"#facc15",cacheKey:"ipma-warnings",parse:function(e){if(!Array.isArray(e))return[];let t=Date.now(),o=[];return e.forEach((e,r)=>{if("green"===e.awarenessLevelID||"yellow"===e.awarenessLevelID)return;let i=Date.parse(e.endTime);if(Number.isNaN(i)||i<t)return;let s=Date.parse(e.startTime);if(Number.isNaN(s))return;let l=e.awarenessLevelID,d=a[l]??"⚠",c=n[l]??e.awarenessLevelID.toUpperCase(),p=e.idAreaAviso||"Portugal",g=e.awarenessTypeName?e.awarenessTypeName.toLowerCase():"weather";o.push({id:`ipma-warn:${p}-${s}-${r}`,ts:s,title:`${d} ${c} ${g} warning — ${p}`,link:"https://www.ipma.pt/en/otempo/prev-sam/"})}),o}})]}},9780(e,t,o){o.d(t,{A:()=>i});var r=o(3090);let a=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]);function n(){return new Date(Date.now()-864e5).toISOString().slice(0,10)}let i={id:"wiki-most-read",load:()=>Promise.all([o.e("7044"),o.e("545")]).then(o.bind(o,5464)).then(e=>({default:e.WikiMostReadWidget})),labels:{en:"Wikipedia Top",pt:"Mais Lido na Wikip\xe9dia"},descriptions:{en:"Most read articles on Wikipedia today",pt:"Artigos mais lidos na Wikip\xe9dia hoje"},icon:"\uD83D\uDCD6",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-pageviews",kind:"cache-key",labelKey:"sources.wikipedia",notifiable:!0}],notifications:[(0,r.B)({id:"wiki-top-read",category:"wiki.topRead",labelKey:"notifications.source.wikiTopRead",badgeColor:"#58a6ff",cacheKey:()=>`internet-wiki-${n()}`,parse:function(e){let t=(e?.items?.[0]?.articles??[]).find(e=>!a.has(e.article));if(!t)return[];let o=n(),r=t.article.replace(/_/g," ");return[{id:o,ts:Date.now(),title:r,link:`https://en.wikipedia.org/wiki/${encodeURIComponent(t.article)}`}]},defaultEnabled:!1})]}}}]);