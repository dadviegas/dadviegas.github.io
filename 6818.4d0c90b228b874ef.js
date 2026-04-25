"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6818"],{79753(e,t,n){n.d(t,{FinanceBudgetWidget:()=>j});var i=n(65723),o=n(37991),a=n(36859),r=n.n(a),l=n(72799),s=n(89874),d=n(28170),c=n(48294),p=n(98975),x=n(85043);let f=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=r().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  animation: ${f} 0.3s ease both;
  overflow-y: auto;
`,g=r().button`
  all: unset;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: 5px ${s.w4.spacing.sm};
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  transition: background 0.14s ease;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,h=r().span`
  font-size: 14px;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
`,m=r().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`,w=r().span`
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,b=r().div`
  height: 3px;
  border-radius: 2px;
  background: ${s.w4.colors.border};
  overflow: hidden;
`,y=r().div`
  height: 100%;
  width: ${({pct:e})=>Math.min(e,100)}%;
  border-radius: 2px;
  background: ${({tone:e})=>"ok"===e?"#7fb77e":"warn"===e?"#facc15":s.w4.colors.danger};
  transition: width 0.4s ease;
`,$=r().div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
`,v=r().span`
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({tone:e})=>"ok"===e?s.w4.colors.mainText:"warn"===e?"#facc15":s.w4.colors.danger};
  text-align: right;
`,k=r().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
  text-align: right;
`;function j({locale:e}){let t=(0,o.useMemo)(()=>(0,d.Nx)(e,p.A),[e]),{data:n,loaded:a}=(0,c.useFinance)(),r=(0,o.useMemo)(()=>{if(!n)return[];let t=Object.entries(n.budget.categoryBudgets??{}).filter(([,e])=>e>0);if(0===t.length)return[];let i=(0,c.expensesForMonth)(n.expenses,(0,c.thisMonthKey)()),o=(0,c.spendingByCategory)(i),a=new Map(c.DEFAULT_CATEGORIES.map(e=>[e.id,e]));return t.map(([t,n])=>{let i=a.get(t),r=o[t]??0,l=n>0?r/n*100:0;return{id:t,icon:i?.icon??"\uD83D\uDCB8",label:"pt"===e?i?.labelPt??t:i?.labelEn??t,spent:r,cap:n,pct:l,tone:l>=100?"over":l>=80?"warn":"ok"}}).sort((e,t)=>t.pct-e.pct)},[n,e]);return a?n&&0!==r.length?(0,i.jsx)(u,{children:r.map(e=>(0,i.jsxs)(g,{onClick:()=>(0,s.VJ)("finance",{categoryId:e.id}),"aria-label":`${e.label} — €${e.spent.toFixed(2)} / €${e.cap.toFixed(0)}`,children:[(0,i.jsx)(h,{"aria-hidden":"true",children:e.icon}),(0,i.jsxs)(m,{children:[(0,i.jsx)(w,{children:e.label}),(0,i.jsx)(b,{children:(0,i.jsx)(y,{pct:e.pct,tone:e.tone})})]}),(0,i.jsxs)($,{children:[(0,i.jsxs)(v,{tone:e.tone,children:["€",e.spent.toFixed(0)]}),(0,i.jsxs)(k,{children:["/ €",e.cap.toFixed(0)]})]})]},e.id))}):(0,i.jsx)(x.Y,{mode:"empty",label:t("finance.budget.widget.empty")}):(0,i.jsx)(x.Y,{mode:"loading",label:t("finance.budget.widget.loading")})}}}]);