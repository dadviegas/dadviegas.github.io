"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6024"],{71803(o,e,a){a.d(e,{FormaNowWidget:()=>R});var n=a(65723),t=a(37991),r=a(36859),i=a.n(r),l=a(72799),s=a(6063),c=a(63236),p=a(73014),d=a(28170),f=a(98975),m=a(85043),x=a(74170),u=a(64392),g=a(79638);let h=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=i().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  animation: ${h} 0.3s ease both;
`,b=i().button`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  cursor: pointer;
  padding: 6px 0 4px;
  border-radius: ${s.w4.borderRadius.sm};
  transition: background 0.14s ease;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,y=i().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${s.w4.spacing.sm};
`,$=i().span`
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainTextMuted};
`,j=i().span`
  font-size: 18px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: #7fb77e;
  text-align: right;
`,M=i().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${s.w4.spacing.sm};
`,v=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
`,N=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
  text-align: right;
`,k=i().div`
  padding: 6px 0 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`,F=i().span`
  font-size: 13px;
  color: ${s.w4.colors.mainTextMuted};
`,z=i().div`
  height: 1px;
  background: ${s.w4.colors.border};
  margin: 2px 0;
`,C=i().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,T=i().button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  margin-top: 4px;
  padding: 6px ${s.w4.spacing.sm};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: border-color 0.14s ease, color 0.14s ease;

  &:hover {
    border-color: #7fb77e;
    color: #7fb77e;
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`;function R({locale:o}){let e,a,r=(0,t.useMemo)(()=>(0,d.Nx)(o,f.A),[o]),{data:i,loaded:l}=(0,p.useForma)(),s=(0,t.useMemo)(()=>i?(0,p.currentFast)(i):null,[i]),h=(0,t.useMemo)(()=>i?(0,p.proteinByDay)(i.meals,(0,p.todayISO)()):0,[i]),A=(0,t.useMemo)(()=>i&&i.goal.proteinG?i.goal.proteinG:120,[i]);if(!l)return(0,n.jsx)(m.Y,{mode:"loading",label:r("formaNow.loading")});if(!i)return(0,n.jsx)(m.Y,{mode:"empty",label:r("formaNow.empty")});let Y=()=>{window.location.hash="#/forma"};return(0,n.jsx)(c.rl,{title:r("formaNow.title"),accentColor:g.A.accentColor,children:(0,n.jsxs)(w,{children:[s?(0,n.jsxs)(b,{onClick:Y,"aria-label":r("formaNow.fastRunningAria"),children:[(0,n.jsxs)(y,{children:[(0,n.jsx)($,{children:r("formaNow.fastRunning")}),(0,n.jsxs)(j,{children:[s.hoursElapsed.toFixed(1),"h"]})]}),(0,n.jsx)(x.X,{pct:100*s.percent,color:"#7fb77e"}),(0,n.jsxs)(M,{children:[(0,n.jsx)(v,{children:r("formaNow.fastTarget",{n:s.session.targetHours})}),(0,n.jsx)(N,{children:r("formaNow.fastRemaining",{n:(a=Math.floor((e=Math.floor(s.remainingMs/6e4))/60),`${a}h ${String(e%60).padStart(2,"0")}m`)})})]})]}):(0,n.jsx)(k,{children:(0,n.jsx)(F,{children:r("formaNow.fastIdle")})}),(0,n.jsx)(z,{}),(0,n.jsxs)(C,{children:[(0,n.jsx)(u.$,{label:r("formaNow.proteinLabel"),value:`${Math.round(h)}g / ${Math.round(A)}g`}),(0,n.jsx)(x.X,{pct:A>0?h/A*100:0,color:"#7fb77e"})]}),(0,n.jsx)(T,{onClick:Y,"aria-label":r("formaNow.logMealAria"),children:r("formaNow.logMeal")})]})})}}}]);