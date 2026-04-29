"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["957"],{25708(e,n,t){t.d(n,{FinanceWidget:()=>T});var a=t(65723),i=t(37991),o=t(36859),s=t.n(o),r=t(72799),l=t(6063),c=t(28170),d=t(54350),p=t(98975),f=t(85043),m=t(9391);let g=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"],u=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,x=s().button`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  height: 100%;
  width: 100%;
  cursor: pointer;
  animation: ${u} 0.3s ease both;
  -webkit-tap-highlight-color: transparent;
`,h=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,w=s().span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 99px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
  background: ${({active:e})=>e?"rgba(249, 115, 22, 0.14)":"rgba(110, 118, 129, 0.10)"};
  border: 1px solid ${({active:e})=>e?"rgba(249, 115, 22, 0.40)":l.w4.colors.border};
  color: ${({active:e})=>e?"#fb923c":l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,y=s().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`,b=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  padding: 6px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({status:e})=>"good"===e?"rgba(127, 183, 126, 0.08)":"warning"===e?"rgba(250, 204, 21, 0.08)":"rgba(239, 68, 68, 0.08)"};
  border-left: 2px solid ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
`,$=s().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,j=s().span`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
`,k=s().div`
  height: 4px;
  border-radius: 2px;
  background: ${l.w4.colors.border};
  overflow: hidden;
`,v=s().div`
  height: 100%;
  width: ${({pct:e})=>Math.min(e,100)}%;
  border-radius: 2px;
  background: ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
  transition: width 0.4s ease;
`,M=s().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,F=s().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,W=s().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,z=s().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${l.w4.colors.accent};
`;function T({locale:e}){let n,t,o=(0,i.useMemo)(()=>(0,c.Nx)(e,p.A),[e]),{data:s,loaded:r}=(0,d.useFinance)(),[u,C]=(0,i.useState)("shared"),E=(0,i.useCallback)(()=>{(0,l.PL)("finance:active-member").then(e=>{e&&C(e)})},[]);(0,i.useEffect)(()=>(E(),window.addEventListener("focus",E),()=>{window.removeEventListener("focus",E)}),[E]);let S=(0,i.useCallback)(()=>{window.location.hash="#/finance"},[]);if(!r)return(0,a.jsx)(f.Y,{mode:"loading",label:o("loading")});if(!s)return(0,a.jsx)(f.Y,{mode:"empty",label:o("financeWidget.empty")});let Y=(0,d.computeWeeklyStatus)(s),_=(0,d.computeMonthlySummary)(s,(0,d.thisMonthKey)()),L=(0,d.computeFinanceStreak)(s),A=Y.budget>0?Y.spent/Y.budget*100:0,I=s.familyMembers.find(e=>e.id===u),K=s.familyMembers.findIndex(e=>e.id===u);if(I&&"shared"!==u){let e=I.color??g[K%g.length];n={id:I.id,name:I.name,role:I.role,color:e},t=I.name.split(" ")[0]??I.name}else n={id:"shared",name:o("financeWidget.member.shared"),role:"shared"},t=o("financeWidget.member.shared");return(0,a.jsxs)(x,{onClick:S,"aria-label":o("financeWidget.openApp"),children:[(0,a.jsxs)(h,{children:[(0,a.jsx)(m.O,{member:n,size:"sm"}),(0,a.jsx)(y,{children:t}),L.dailyTarget>0&&(0,a.jsxs)(w,{active:L.count>0,title:o("financeWidget.streak.tooltip",{n:L.count,target:L.dailyTarget.toFixed(0)}),children:[L.count>0?"\uD83D\uDD25":"\xb7"," ",L.count,"d"]})]}),(0,a.jsxs)(b,{status:Y.status,children:[(0,a.jsx)($,{children:o("financeWidget.weekly")}),(0,a.jsxs)(j,{status:Y.status,children:["€",Y.remaining.toFixed(0)]})]}),(0,a.jsx)(k,{children:(0,a.jsx)(v,{pct:A,status:Y.status})}),(0,a.jsxs)(M,{children:[(0,a.jsx)(F,{children:o("financeWidget.spent")}),(0,a.jsxs)(W,{children:["€",Y.spent.toFixed(2)]})]}),(0,a.jsxs)(M,{children:[(0,a.jsx)(F,{children:o("financeWidget.month")}),(0,a.jsxs)(W,{children:["€",_.totalExpenses.toFixed(2)]})]}),(0,a.jsxs)(M,{children:[(0,a.jsx)(F,{}),(0,a.jsxs)(z,{children:[o("financeWidget.open")," →"]})]})]})}}}]);