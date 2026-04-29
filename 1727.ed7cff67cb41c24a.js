"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["1727"],{59602(t,e,n){n.d(e,{StreakWidget:()=>v});var o=n(65723),i=n(37991),a=n(36859),s=n.n(a),r=n(72799),l=n(6063),c=n(63236),d=n(23029),p=n(28170),f=n(98975),h=n(82537);let x=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=s().button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  animation: ${x} 0.25s ease both;

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${l.w4.borderRadius.sm};
  }
`,m=s().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  padding: 8px 0;
`,u=s().div`
  font-size: 56px;
  line-height: 1;
  opacity: ${({active:t})=>t?1:.35};
  filter: ${({active:t})=>t?"none":"grayscale(0.6)"};
  transition: opacity ${l.w4.transitions.fast}, filter ${l.w4.transitions.fast};
`,g=s().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,w=s().div`
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  color: ${h.A.accentColor};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
`,k=s().div`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-weight: 500;
  margin-top: 2px;
`,$=s().div`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  font-weight: 500;
`,b=s().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 6px;
  border-top: 1px solid ${l.w4.colors.border};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
`,j=s().span`
  color: ${l.w4.colors.accent};
  font-weight: 700;
`;function v({locale:t}){let e=(0,i.useMemo)(()=>(0,p.Nx)("pt"===t?"pt":"en",f.A),[t]),{progress:n}=(0,d.useDaily)(),a=n?.completedToday.length??0,s=n?.missions.length??0,r=n?.totalPoints??0,l=(0,d.todayISO)(),x=n?.history??{},S=a>=d.STREAK_THRESHOLD,T=S&&!(x[l]?.length>=d.STREAK_THRESHOLD)?{...x,[l]:n?.completedToday??[]}:x,H=n?(0,d.computeStreakFromHistory)(T):0,M=S||(x[l]?.length??0)>=d.STREAK_THRESHOLD;return(0,o.jsx)(c.rl,{title:e("streak.title"),accentColor:h.A.accentColor,children:(0,o.jsxs)(y,{onClick:()=>{window.location.hash="#/daily"},title:e("streak.open"),children:[(0,o.jsxs)(m,{children:[(0,o.jsx)(u,{active:H>0||M,children:"\uD83D\uDD25"}),H>0?(0,o.jsxs)(g,{children:[(0,o.jsx)(w,{children:H}),(0,o.jsx)(k,{children:e("streak.dayStreak")})]}):(0,o.jsx)($,{children:e("streak.noStreak")})]}),(0,o.jsxs)(b,{children:[(0,o.jsx)("span",{children:e("streak.todayDone",{n:a,total:s})}),(0,o.jsx)(j,{children:e("streak.points",{n:r})})]})]})})}}}]);