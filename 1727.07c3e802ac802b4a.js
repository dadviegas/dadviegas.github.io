"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["1727"],{59602(e,t,n){n.d(t,{StreakWidget:()=>S});var i=n(65723),o=n(37991),r=n(36859),a=n.n(r),s=n(72799),l=n(94764),c=n(45030),d=n(32445),p=n(28170),f=n(98975),h=n(82537);let x=(0,s.keyframes)`
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(251, 146, 60, 0.4)); }
  50%      { transform: scale(1.08); filter: drop-shadow(0 0 14px rgba(251, 146, 60, 0.7)); }
`,u=a().button`
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

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${l.w4.borderRadius.sm};
  }
`,g=a().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  padding: 8px 0;
`,m=a().div`
  font-size: 56px;
  line-height: 1;
  animation: ${({active:e})=>e?x:"none"} 2.4s ease-in-out infinite;
  opacity: ${({active:e})=>e?1:.35};
  filter: ${({active:e})=>e?"none":"grayscale(0.6)"};
`,y=a().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,w=a().div`
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  color: #fb923c;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 16px rgba(251, 146, 60, 0.35);
`,b=a().div`
  font-size: 13px;
  color: rgba(251, 146, 60, 0.85);
  font-weight: 600;
  margin-top: 2px;
`,k=a().div`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  font-weight: 500;
`,j=a().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 6px;
  border-top: 1px solid ${l.w4.colors.border};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
`,v=a().span`
  color: ${l.w4.colors.accent};
  font-weight: 700;
`;function S({locale:e}){let t=(0,o.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",f.A),[e]),{progress:n}=(0,d.useDaily)(),r=n?.completedToday.length??0,a=n?.missions.length??0,s=n?.totalPoints??0,l=(0,d.todayISO)(),x=n?.history??{},$=r>=d.STREAK_THRESHOLD,T=$&&!(x[l]?.length>=d.STREAK_THRESHOLD)?{...x,[l]:n?.completedToday??[]}:x,H=n?(0,d.computeStreakFromHistory)(T):0,R=$||(x[l]?.length??0)>=d.STREAK_THRESHOLD;return(0,i.jsx)(c.rl,{title:t("streak.title"),accentColor:h.A.accentColor,children:(0,i.jsxs)(u,{onClick:()=>{window.location.hash="#/daily"},title:t("streak.open"),children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(m,{active:H>0||R,children:"\uD83D\uDD25"}),H>0?(0,i.jsxs)(y,{children:[(0,i.jsx)(w,{children:H}),(0,i.jsx)(b,{children:t("streak.dayStreak")})]}):(0,i.jsx)(k,{children:t("streak.noStreak")})]}),(0,i.jsxs)(j,{children:[(0,i.jsx)("span",{children:t("streak.todayDone",{n:r,total:a})}),(0,i.jsx)(v,{children:t("streak.points",{n:s})})]})]})})}}}]);