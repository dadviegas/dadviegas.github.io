"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6957"],{25708(e,n,t){t.d(n,{FinanceWidget:()=>z});var s=t(65723),a=t(37991),i=t(36859),o=t.n(i),r=t(72799),l=t(6063),c=t(28170),d=t(80270),p=t(98975),m=t(85043),f=t(9391);let g=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"],h=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=o().button`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  height: 100%;
  width: 100%;
  cursor: pointer;
  animation: ${h} 0.3s ease both;
  -webkit-tap-highlight-color: transparent;
`,w=o().div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,x=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`,y=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  padding: 6px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({status:e})=>"good"===e?"rgba(127, 183, 126, 0.08)":"warning"===e?"rgba(250, 204, 21, 0.08)":"rgba(239, 68, 68, 0.08)"};
  border-left: 2px solid ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
`,b=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,j=o().span`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
`,$=o().div`
  height: 4px;
  border-radius: 2px;
  background: ${l.w4.colors.border};
  overflow: hidden;
`,v=o().div`
  height: 100%;
  width: ${({pct:e})=>Math.min(e,100)}%;
  border-radius: 2px;
  background: ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
  transition: width 0.4s ease;
`,M=o().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,k=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,F=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,W=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${l.w4.colors.accent};
`;function z({locale:e}){let n,t,i=(0,a.useMemo)(()=>(0,c.Nx)(e,p.A),[e]),{data:o,loaded:r}=(0,d.useFinance)(),[h,C]=(0,a.useState)("shared"),T=(0,a.useCallback)(()=>{(0,l.PL)("finance:active-member").then(e=>{e&&C(e)})},[]);(0,a.useEffect)(()=>(T(),window.addEventListener("focus",T),()=>{window.removeEventListener("focus",T)}),[T]);let E=(0,a.useCallback)(()=>{window.location.hash="#/finance"},[]);if(!r)return(0,s.jsx)(m.Y,{mode:"loading",label:i("loading")});if(!o)return(0,s.jsx)(m.Y,{mode:"empty",label:i("financeWidget.empty")});let Y=(0,d.computeWeeklyStatus)(o),_=(0,d.computeMonthlySummary)(o,(0,d.thisMonthKey)()),L=Y.budget>0?Y.spent/Y.budget*100:0,S=o.familyMembers.find(e=>e.id===h),A=o.familyMembers.findIndex(e=>e.id===h);if(S&&"shared"!==h){let e=S.color??g[A%g.length];n={id:S.id,name:S.name,role:S.role,color:e},t=S.name.split(" ")[0]??S.name}else n={id:"shared",name:i("financeWidget.member.shared"),role:"shared"},t=i("financeWidget.member.shared");return(0,s.jsxs)(u,{onClick:E,"aria-label":i("financeWidget.openApp"),children:[(0,s.jsxs)(w,{children:[(0,s.jsx)(f.O,{member:n,size:"sm"}),(0,s.jsx)(x,{children:t})]}),(0,s.jsxs)(y,{status:Y.status,children:[(0,s.jsx)(b,{children:i("financeWidget.weekly")}),(0,s.jsxs)(j,{status:Y.status,children:["€",Y.remaining.toFixed(0)]})]}),(0,s.jsx)($,{children:(0,s.jsx)(v,{pct:L,status:Y.status})}),(0,s.jsxs)(M,{children:[(0,s.jsx)(k,{children:i("financeWidget.spent")}),(0,s.jsxs)(F,{children:["€",Y.spent.toFixed(2)]})]}),(0,s.jsxs)(M,{children:[(0,s.jsx)(k,{children:i("financeWidget.month")}),(0,s.jsxs)(F,{children:["€",_.totalExpenses.toFixed(2)]})]}),(0,s.jsxs)(M,{children:[(0,s.jsx)(k,{}),(0,s.jsxs)(W,{children:[i("financeWidget.open")," →"]})]})]})}}}]);