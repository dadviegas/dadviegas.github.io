"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6957"],{25708(e,n,t){t.d(n,{FinanceWidget:()=>v});var o=t(65723),s=t(37991),a=t(36859),i=t.n(a),r=t(72799),l=t(89874),c=t(28170),d=t(48294),p=t(98975),g=t(85043);let f=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  height: 100%;
  animation: ${f} 0.3s ease both;
`,m=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  padding: 6px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({status:e})=>"good"===e?"rgba(127, 183, 126, 0.08)":"warning"===e?"rgba(250, 204, 21, 0.08)":"rgba(239, 68, 68, 0.08)"};
  border-left: 2px solid ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
`,x=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,w=i().span`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
`,h=i().div`
  height: 4px;
  border-radius: 2px;
  background: ${l.w4.colors.border};
  overflow: hidden;
`,y=i().div`
  height: 100%;
  width: ${({pct:e})=>Math.min(e,100)}%;
  border-radius: 2px;
  background: ${({status:e})=>"good"===e?l.w4.colors.success:"warning"===e?l.w4.colors.warning:l.w4.colors.danger};
  transition: width 0.4s ease;
`,b=i().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$=i().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,j=i().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,k=i().button`
  all: unset;
  cursor: pointer;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${l.w4.colors.accent};
  &:hover { color: ${l.w4.colors.accentHover}; }
`;function v({locale:e}){let n=(0,s.useMemo)(()=>(0,c.Nx)(e,p.A),[e]),{data:t,loaded:a}=(0,d.useFinance)();if(!a)return(0,o.jsx)(g.Y,{mode:"loading",label:n("loading")});if(!t)return(0,o.jsx)(g.Y,{mode:"empty",label:n("financeWidget.empty")});let i=(0,d.computeWeeklyStatus)(t),r=(0,d.computeMonthlySummary)(t,(0,d.thisMonthKey)()),l=i.budget>0?i.spent/i.budget*100:0;return(0,o.jsxs)(u,{children:[(0,o.jsxs)(m,{status:i.status,children:[(0,o.jsx)(x,{children:n("financeWidget.weekly")}),(0,o.jsxs)(w,{status:i.status,children:["€",i.remaining.toFixed(0)]})]}),(0,o.jsx)(h,{children:(0,o.jsx)(y,{pct:l,status:i.status})}),(0,o.jsxs)(b,{children:[(0,o.jsx)($,{children:n("financeWidget.spent")}),(0,o.jsxs)(j,{children:["€",i.spent.toFixed(2)]})]}),(0,o.jsxs)(b,{children:[(0,o.jsx)($,{children:n("financeWidget.month")}),(0,o.jsxs)(j,{children:["€",r.totalExpenses.toFixed(2)]})]}),(0,o.jsxs)(b,{children:[(0,o.jsx)($,{}),(0,o.jsxs)(k,{onClick:()=>{window.location.hash="#/finance"},"aria-label":n("financeWidget.openApp"),children:[n("financeWidget.open")," →"]})]})]})}}}]);