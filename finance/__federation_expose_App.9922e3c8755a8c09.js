"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{ACTIVE_MEMBER_KEY:()=>eK,default:()=>im});var t=i(5723),a=i(7991),r=i(6859),o=i.n(r),s=i(2799),l=i(6063),c=i(3236),d=i(107),p=i(3759),m=i(789),u=i(9454),x=i(8170),f=i(4041),g=i(948),h=i(719),b=i(2405),y=i(9546),w=i(5854),j=i(3616),v=i(6579),$=i(8989),k=i(6376),M=i(9146),T=i(7737),S=i(8635),F=i(8501),z=i(1789),C=i(216),I=i(9419),R=i(341),D=i(9378),E=i(1423),A=i(1255),L=i(3451),B=i(545),O=i(2167),P=i(7637),N=i(6891),W=i(1331),Y=i(2139);let U="#7fb77e",q="#f85149",K=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,H=l.w4.suites.lab,Z=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  animation: ${K} 0.25s ease both;
  overflow: hidden;
`,_=o().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,V=o().div`
  display: none;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,J=o().div`
  padding: 0 ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  /* overflow-x: auto would force overflow-y: clip, hiding Dropdown menus
     that extend below the bar. Use overflow: visible and rely on flex-wrap
     on small screens. */
  flex-wrap: wrap;
  overflow: visible;
`,G=o().div`
  flex: 1;
  min-width: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    /* Force a separate row from TabBarRight so the pill tabs never
       overlap action buttons. Inner tablist scrolls horizontally if
       the pills don't fit (e.g. PT labels with badges). */
    flex-basis: 100%;
    min-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,X=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    /* Wraps to its own row below TabBarLeft. Flex-wrap inside lets
       buttons reflow to multiple sub-rows if needed without forcing
       overflow on the parent (Dropdown menus need overflow-y: visible). */
    flex-basis: 100%;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-bottom: ${l.w4.spacing.xs};
  }
`,Q=o().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${H}`:"transparent"};
  background: ${({active:e})=>e?`${H}1f`:"transparent"};
  color: ${({active:e})=>e?H:l.w4.colors.mainTextMuted};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;

  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${H};
    outline-offset: 2px;
  }
`,ee=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,en=o().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${H}`:"transparent"};
  background: ${({active:e})=>e?`${H}1f`:"transparent"};
  color: ${({active:e})=>e?H:l.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;

  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${H};
    outline-offset: 2px;
  }
`,ei=o().div`
  padding: 6px ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
  user-select: none;
`;let et=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} 0 0;
  width: 100%;
  max-width: 480px;
  max-height: 80dvh;
  overflow-y: auto;
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${K} 0.2s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,ea=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,er=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${U};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,eo=o().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  padding: 0 6px;
  min-height: 44px;
  border-radius: ${l.w4.borderRadius.sm};
  transition: color 120ms ease, background 120ms ease;
  white-space: nowrap;
  flex-shrink: 0;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.sidebarHover}; }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,es=o().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,el=o().input`
  flex: 1;
  height: 44px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 0 ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  outline: none;
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &:focus { border-color: ${l.w4.colors.accent}; }
`;o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${U};
  padding: ${l.w4.spacing.lg};
`;let ec=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`;o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${U};
  padding: ${l.w4.spacing.md};
`;let ed=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,ep=o().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,em=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eu=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,ex=o().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,ef=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eg=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`;o().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 60fr 40fr;
  }
`,o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  min-width: 0;
`;let eh=o().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`;o().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;let eb=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,ey=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${U};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${U};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,ew=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,ej=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,ev=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,e$=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${U};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,ek=o().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eM=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,eT=o().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eS=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,eF=o().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,ez=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eC=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eI=o().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,eR=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eD=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-of-type {
    margin-top: 0;
  }
`,eE=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,eA=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eL=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eB=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eO=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,eP=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eN=o().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eW=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eY="finance:list-density",eU="finance:quick-categories",eq="finance:forecast-months",eK="finance:active-member",eH="finance:insights-layout",eZ="finance:overview-layout",e_=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eV=[{id:"overview-hero",size:"lg"},{id:"overview-accounts",size:"md"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eJ=o().input`
  appearance: none;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 1.5px solid ${l.w4.colors.mainTextMuted};
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: border-color 120ms ease, background 120ms ease;

  &:checked {
    background: #7fb77e;
    border-color: #7fb77e;
  }

  &:checked::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 1px;
    width: 8px;
    height: 5px;
    border-left: 1.5px solid #000;
    border-bottom: 1.5px solid #000;
    transform: rotate(-45deg);
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,eG=o().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eX=o().li`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${({compact:e})=>e?"0 8px":"10px 8px"};
  border-radius: ${l.w4.borderRadius.md};
  transition: background 120ms ease, min-height 150ms ease, padding 150ms ease;
  cursor: default;
  /* Comfortable: 48px natural height; Compact: 32px visible but ≥44px touch target via padding */
  min-height: ${({compact:e})=>e?"44px":"48px"};

  &:hover { background: ${l.w4.colors.sidebarHover}; }
  @media (hover: hover) and (pointer: fine) {
    &:hover .delete-btn,
    &:hover .clone-btn { opacity: 1; }
  }
`,eQ=o().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,e0=o().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,e4=o().div`
  flex: 1;
  min-width: 0;
`,e1=o().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e2=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,e6=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,e3=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e8=o().span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  /* Each avatar after the first overlaps by half its width */
  & > * + * {
    margin-left: -${({size:e})=>Math.round(.45*e)}px;
  }
`,e5=o().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  font-size: ${({size:e})=>Math.max(8,e-5)}px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,e7=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${U}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?U:"#facc15"};
  white-space: nowrap;
`,e9=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${U}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?U:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${U}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ne=o().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  opacity: 0.35;
  transition: opacity 120ms ease, color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  @media (hover: hover) and (pointer: fine) {
    opacity: 0;
  }

  &:hover {
    opacity: 1;
    color: ${U};
    background: ${U}1a;
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,nn=o().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  font-size: 14px;
  /* Visible at reduced opacity on touch; full opacity on hover/focus */
  opacity: 0.35;
  transition: opacity 120ms ease, color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  @media (hover: hover) and (pointer: fine) {
    opacity: 0;
  }

  &:hover {
    opacity: 1;
    color: ${q};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ni=o().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${U}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${U}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,nt=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?q:"warning"===e?"#facc15":"success"===e?U:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,na=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,nr=o().button`
  margin-left: auto;
  flex-shrink: 0;
  background: none;
  border: none;
  /* Minimum 44px touch target per docs/constraints.md */
  padding: 0 10px;
  min-height: 44px;
  cursor: pointer;
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1;
  border-radius: ${l.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  transition: color 120ms ease, background 120ms ease;
  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`;o()(ey)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let no=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,ns=o().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:n})=>e?n:l.w4.colors.border};
  background: ${({active:e,color:n})=>e?`${n}22`:l.w4.colors.mainBg};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,nl=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,nc=o().input`
  width: 100%;
  flex: 1;
  min-width: 160px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 44px;
  font-family: ${l.w4.typography.fontFamily};
  outline: none;
  transition: border-color 120ms ease;

  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &:focus {
    border-color: ${l.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,nd=o().select`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 44px;
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;

  &:focus { border-color: ${l.w4.colors.accent}; }
  option { background: ${l.w4.colors.surface}; }
`,np=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${U};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nm=o().div`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 4px 10px;
  border-radius: ${l.w4.borderRadius.sm};
  border: 1px solid ${({status:e})=>"danger"===e?l.w4.colors.danger:"warning"===e?"#facc15":"#7fb77e"};
  background: ${({status:e})=>"danger"===e?"rgba(248, 81, 73, 0.08)":"warning"===e?"rgba(250, 204, 21, 0.08)":"rgba(127, 183, 126, 0.08)"};
  color: ${({status:e})=>"danger"===e?l.w4.colors.danger:"warning"===e?"#facc15":"#7fb77e"};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;

  .label { color: ${l.w4.colors.mainTextMuted}; }
  .amount {
    font-weight: 700;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0;
  }
  .suffix { color: ${l.w4.colors.mainTextFaint}; letter-spacing: 0.04em; }
`,nu=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nx=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,nf=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${U};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,ng=o().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${U};
  animation: ${nx} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nh=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 4px 8px;
  flex-wrap: wrap;
  animation: ${K} 0.2s ease both;

  strong {
    color: ${l.w4.colors.mainText};
    font-weight: 600;
  }
`,nb=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?U:l.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${U}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${U}44`:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${U}28`:l.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?U:l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ny=o().button`
  display: inline-flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #a371f7;
  background: rgba(163, 113, 247, 0.08);
  border: 1px solid rgba(163, 113, 247, 0.3);
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 8px;
  cursor: pointer;
  transition: background 140ms ease, border-color 140ms ease;
  &:hover {
    background: rgba(163, 113, 247, 0.16);
    border-color: rgba(163, 113, 247, 0.55);
  }
`,nw=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${K} 0.2s ease;
`,nj=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nv=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,n$=o().button`
  flex: 1;
  /* 44px minimum touch target */
  min-height: 44px;
  padding: 0 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: ${l.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?"rgba(163,113,247,0.7)":l.w4.colors.border};
  background: ${({active:e})=>e?"rgba(163,113,247,0.12)":"transparent"};
  color: ${({active:e})=>e?"#a371f7":l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;
`,nk=o().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?U:l.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?U:l.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${U};
    color: ${U};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,nM=o().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nT=o().ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 50;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.xs} 0;
  margin: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
`,nS=o().li`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  transition: background 120ms ease;

  &:hover,
  &[aria-selected='true'] {
    background: ${l.w4.colors.sidebarHover};
  }
`,nF=o().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nz=o().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nC=o().li`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${l.w4.spacing.sm} 2px;
  pointer-events: none;
`,nI=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,nR=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nD=o().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nE=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nA=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nL=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,nB=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nO=o().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nP=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${U}; }
`,nN=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nW=o().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,nY=o().input`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 0 ${l.w4.spacing.sm};
  height: 44px;
  width: 100%;
  outline: none;
  transition: border-color 120ms ease;

  &:focus {
    border-color: ${l.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,nU=o().input`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  padding: 0 ${l.w4.spacing.sm};
  height: 36px;
  width: 100%;
  outline: none;
  transition: border-color 120ms ease;

  &:focus {
    border-color: ${l.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,nq=o().select`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 6px ${l.w4.spacing.sm};
  outline: none;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamilyMono};
  transition: border-color 120ms ease;
  height: 36px;

  &:focus { border-color: ${l.w4.colors.accent}; }
  option { background: ${l.w4.colors.surface}; }
`;o().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,o().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 120px;
  }
`,o().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,o().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,o().div`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  width: 60px;
  text-align: right;
  flex-shrink: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 72px;
  }
`;let nK=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 120ms ease;

  &:hover { color: ${l.w4.colors.accentHover??l.w4.colors.accent}; }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,nH=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`;o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`;let nZ=o().footer`
  flex-shrink: 0;
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  border-top: 1px solid ${l.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  /* Respect iOS safe area at bottom */
  padding-bottom: max(${l.w4.spacing.xs}, env(safe-area-inset-bottom));

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,n_=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,nV=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nJ=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nG=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} ${l.w4.borderRadius.md} ${l.w4.borderRadius.md};
  border-left: 2px solid ${U};
  width: 100%;
  max-width: 560px;
  max-height: 80dvh;
  overflow-y: auto;
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
    max-height: calc(100dvh - ${l.w4.spacing.xl});
  }
`,nX=o().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,nQ=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,n0=o().button`
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
  /* Visual 28px, touch target 44px via min-width/min-height. */
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  transition: border-color 120ms ease, color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
    color: ${l.w4.colors.mainText};
  }
`,n4=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n1=o().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n2=o().button`
  background: ${({active:e})=>e?l.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
`,n6=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,n3=o().button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({active:e,color:n})=>e?`${n}22`:l.w4.colors.mainBg};
  border: 1px solid ${({active:e,color:n})=>e?n:l.w4.colors.border};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  border-radius: 999px;
  padding: 6px 10px 6px 6px;
  min-height: 44px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease;
`,n8=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n5=o().input`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  font-family: ${l.w4.typography.fontFamily};
  outline: none;
  transition: border-color 120ms ease;

  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &:focus {
    border-color: ${l.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(0.7);
    cursor: pointer;
  }
`,n7=o().select`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;

  &:focus { border-color: ${l.w4.colors.accent}; }
  option { background: ${l.w4.colors.surface}; }
`,n9=o().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`,ie=o().input`
  flex: 1;
  min-width: 80px;
  background: transparent;
  border: none;
  outline: none;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 13px;
  padding: 2px 0;
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,ii=o().div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  padding: 6px ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  min-height: 36px;
  cursor: text;
  &:focus-within {
    border-color: ${l.w4.colors.accent};
  }
`,it=o().ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 20;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 4px 0;
  list-style: none;
  margin: 0;
  max-height: 160px;
  overflow-y: auto;
`,ia=o().li`
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,ir=o().div`
  position: relative;
`,io=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function is(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function il(e){return Math.round(e).toLocaleString("pt-PT")}function ic(){return new Date().toISOString().slice(0,10)}function id(e,n){let[i,t,a]=e.split("-").map(Number);return new Date(i,t-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function ip(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function im({topBarRight:e}){let n,[i]=(0,x.Ym)(),r=(0,a.useMemo)(()=>(0,x.Nx)(i,g.A),[i]),{data:o,loaded:s,save:K}=(0,d.useFinance)(),H=o??{...d.EMPTY_FINANCE_DATA},[eJ]=(0,d.useProfile)(),e8=(0,a.useMemo)(()=>(0,d.recentMerchants)(H.expenses,20).slice(0,6),[H.expenses]),{canUndo:e5,latestLabelKey:e7,undo:e9}=(0,d.useUndo)(),[ne,nx]=(0,a.useState)(null),nG=(0,a.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:H,labelKey:n,ts:Date.now()}),nx(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await K(e)},[H,K]),nX=(0,a.useCallback)(async()=>{let e=e9();e&&(nx("finance.undo.label.reverted"),await K(e),setTimeout(()=>nx(null),2500))},[e9,K]),[nQ,n0]=(0,a.useState)("overview"),[n4,n1]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[n2,n6]=(0,a.useState)("shared");(0,a.useEffect)(()=>{(0,l.PL)(eK).then(e=>{e&&n6(e)})},[]);let n3=(0,a.useCallback)(e=>{n6(e),(0,l.Is)(eK,e)},[]),[n8,n5]=(0,a.useState)("1m");(0,a.useEffect)(()=>{(0,l.PL)("finance:timeline:range").then(e=>{("1m"===e||"3m"===e||"6m"===e||"1y"===e)&&n5(e)})},[]);let n7=(0,a.useCallback)(e=>{n5(e),(0,l.Is)("finance:timeline:range",e)},[]),[n9,ie]=(0,a.useState)(!1),[ii,it]=(0,a.useState)(!1),[ia,ir]=(0,a.useState)([]),[io,ib]=(0,a.useState)(!1),[iy,iw]=(0,a.useState)(!1),[ij,iv]=(0,a.useState)(null),i$=+(ia.length>0)+ +!!io,[ik,iM]=(0,a.useState)(!1),[iT,iS]=(0,a.useState)({}),iF=(0,a.useMemo)(()=>{let e=0;return iT.text&&e++,iT.memberId&&e++,iT.categoryId&&e++,(iT.dateFrom||iT.dateTo)&&e++,(void 0!==iT.amountMin||void 0!==iT.amountMax)&&e++,iT.tags&&iT.tags.length>0&&e++,e},[iT]),iz=(0,a.useCallback)(e=>{let n=[...H.savedViews??[],e];K({...H,savedViews:n})},[H,K]),iC=(0,a.useCallback)(e=>{let n=(H.savedViews??[]).filter(n=>n.id!==e);K({...H,savedViews:n})},[H,K]),iI=(0,M.E)();(0,a.useEffect)(()=>{"expenses"!==nQ&&iI.selectMode&&iI.exitSelectMode()},[nQ]);let{range:iR,setRange:iD}=(0,p.H)("month"),iE=(0,a.useRef)(null),iA=(0,a.useRef)(null),iL=(0,a.useRef)(null),[iB,iO]=(0,a.useState)(!1),[iP,iN]=(0,a.useState)(""),[iW,iY]=(0,a.useState)(!1),[iU,iq]=(0,a.useState)(""),iK=(0,a.useRef)(null),[iH,iZ]=(0,a.useState)(""),[i_,iV]=(0,a.useState)("shared"),[iJ,iG]=(0,a.useState)(null),[iX,iQ]=(0,a.useState)(!1),i0=(0,a.useRef)(null),[i4,i1]=(0,a.useState)(null),[i2,i6]=(0,a.useState)("EUR"),[i3,i8]=(0,a.useState)(!1),[i5,i7]=(0,a.useState)(!1),i9=(0,B.x)(),te=(0,a.useRef)(null),tn=(0,a.useRef)(!1),[ti,tt]=(0,a.useState)(!1),[ta,tr]=(0,a.useState)(-1),to=(0,a.useRef)(null),[ts,tl]=(0,a.useState)(""),[tc,td]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,l.PL)(eU).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&td(n)}catch{}})},[]);let[tp,tm]=(0,a.useState)(!1),[tu,tx]=(0,a.useState)(!1),[tf,tg]=(0,a.useState)(!1),th=(0,a.useCallback)(e=>{let n=e-(0,d.computeCurrentBalance)(H);if(0===n)return void tg(!1);let i=(H.budget.openingBalance??0)+n,t=H.accounts??[],a=H.defaultAccountId??t[0]?.id,r=a?t.map(e=>e.id===a?{...e,openingBalance:e.openingBalance+n}:e):t;nG({...H,budget:{...H.budget,openingBalance:i},accounts:r},"finance.undo.label.edited"),tg(!1)},[H,nG]),tb=(0,a.useCallback)(e=>{nG({...H,income:[e,...H.income]},"finance.undo.label.added"),tx(!1),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)},[H,nG]),ty=(0,a.useCallback)((e,n,i,t)=>{let a=i?[i,...H.recentDescriptions].filter(Boolean).slice(0,20):H.recentDescriptions,r={...H,expenses:[...e,...H.expenses],categoryHints:n,recentDescriptions:a};for(let e of t)r=(0,d.addRecentTag)(r,e);nG(r,"finance.undo.label.added"),tm(!1),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)},[H,nG]),[tw,tj]=(0,a.useState)(""),[tv,t$]=(0,a.useState)(""),[tk,tM]=(0,a.useState)(!1),[tT,tS]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,l.PL)(eY).then(e=>{("compact"===e||"comfortable"===e)&&tS(e)})},[]),(0,a.useCallback)(()=>{let e="comfortable"===tT?"compact":"comfortable";tS(e),(0,l.Is)(eY,e)},[tT]);let[tF,tz]=(0,a.useState)(3);(0,a.useEffect)(()=>{(0,l.PL)(eq).then(e=>{"6"===e?tz(6):"12"===e&&tz(12)})},[]);let tC=(0,a.useCallback)(e=>{tz(e),(0,l.Is)(eq,String(e))},[]),tI=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),[tR,tD]=(0,a.useState)(e_);(0,a.useEffect)(()=>{(0,l.PL)(eH).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...e_.filter(e=>!i.has(e.id))];tD(t)}catch{}})},[]);let tE=(0,a.useCallback)((e,n)=>{tD(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,l.Is)(eH,JSON.stringify(r)),r})},[]),tA=(0,a.useCallback)(e=>{tD(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,l.Is)(eH,JSON.stringify(r)),r})},[]),[tL,tB]=(0,a.useState)(eV);(0,a.useEffect)(()=>{(0,l.PL)(eZ).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eV.filter(e=>!i.has(e.id))];tB(t)}catch{}})},[]);let tO=(0,a.useCallback)((e,n)=>{tB(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,l.Is)(eZ,JSON.stringify(r)),r})},[]),tP=(0,a.useCallback)(e=>{tB(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,l.Is)(eZ,JSON.stringify(r)),r})},[]),tN=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(H),[H]),tW=(0,a.useMemo)(()=>(0,d.safeToSpendToday)(H),[H]);(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(H,n4),[H,n4]);let tY=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(H),[H]),{insights:tU,dismiss:tq}=(0,d.useFinanceAnomalies)(),tK=(0,a.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=d.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??H.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,d.categoryLabel)(n,i)}:e},[H.categories,i]),tH=(0,a.useMemo)(()=>(0,d.availableMonths)(H),[H]),tZ=(0,a.useMemo)(()=>(0,d.filterExpensesByRange)(H.expenses,iR,n4),[H.expenses,iR,n4]),t_=(0,a.useMemo)(()=>(0,d.filterIncomeByRange)(H.income,iR,n4),[H.income,iR,n4]),tV=(0,a.useMemo)(()=>{let e=(0,d.expensesForMember)(tZ,n2);return ia.length>0&&(e=e.filter(e=>ia.includes(e.categoryId))),io&&(e=e.filter(e=>!0===e.isReimbursable)),iF>0&&(e=(0,d.applyExpenseFilter)(e,iT)),e},[tZ,n2,ia,io,iT,iF]),tJ=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(H,n2,tI),[H,n2,tI]),tG=(0,a.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tI),[tI]),tX=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(H,n2,tG),[H,n2,tG]),tQ=(0,a.useMemo)(()=>0===tX?0:Math.round((tJ-tX)/tX*100),[tJ,tX]),t0=(0,a.useMemo)(()=>{if("all"===n2)return r("finance.member.all");if("shared"===n2)return r("finance.hero.family");let e=H.familyMembers.find(e=>e.id===n2);return e?.name??r("finance.hero.family")},[n2,H.familyMembers,r]),t4=(0,a.useMemo)(()=>{if("all"===n2||"shared"===n2)return l.w4.colors.mainTextMuted;let e=H.familyMembers.findIndex(e=>e.id===n2);return -1===e?U:(0,h.a8)(H.familyMembers[e],e)},[n2,H.familyMembers]),t1=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let a=new Date(t);return a.setDate(t.getDate()+7),(0,d.expensesForMember)(H.expenses,n2).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<a}).reduce((e,n)=>e+n.amount,0)})},[H.expenses,n2]),t2=(0,a.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),r=(0,d.expensesForMember)(t,n),o={};for(let e of r)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:ip(e).color})),over:s>a?s-a:0}})})(H,n2),[H,n2]),t6=(0,a.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let a=89;a>=0;a--){let r=new Date(i);r.setDate(i.getDate()-a);let o=r.toISOString().slice(0,10),s=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s),p=c.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=c.reduce((e,n)=>e+n.amount,0)/30,u=p/30;t.push({inc:m,incGoal:u,exp:l})}return t})(H,n2),[H,n2]),t3=(0,a.useMemo)(()=>(0,d.forecastCashFlow)(H,tF),[H,tF]),t8=(0,a.useMemo)(()=>(0,d.firstNegativeDay)(t3),[t3]),t5=(0,a.useMemo)(()=>{let e,n,i;return e=u.zA[n8],n=new Date,i=H.expenses.length>0?H.expenses.reduce((e,n)=>e+n.amount,0)/H.expenses.length:20,Array.from({length:e},(t,a)=>{let r=(0,u.x)(a,e,n),o=(0,d.expensesForMember)(H.expenses.filter(e=>e.date===r),n2).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/i;return s<.5?1:s<1?2:s<2?3:4})},[H,n2,n8]),t7=(0,a.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(H.expenses,n2)),[H.expenses,n2]),t9=(0,a.useMemo)(()=>{let e=[];return e.push({key:"shared",label:r("finance.income.member.shared"),color:l.w4.colors.mainTextMuted,incomeSpk:(0,d.incomeSparkline)(H.income,"shared"),spendSpk:(0,d.memberSparkline)(H.expenses,"shared"),incomeTotal:(0,d.incomeForMember)(H.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(H.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(H.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(H.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(H,"shared",6)}),H.familyMembers.forEach((n,i)=>{let t=(0,h.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,d.incomeSparkline)(H.income,n.id),spendSpk:(0,d.memberSparkline)(H.expenses,n.id),incomeTotal:(0,d.incomeForMember)(H.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(H.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(H.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(H.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(H,n.id,6)})}),e},[H,r]),ae=(0,a.useMemo)(()=>{let e=Object.entries((0,d.incomeByMember)(H.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:r("finance.income.member.shared"),value:n,color:l.w4.colors.mainTextMuted};let i=H.familyMembers.findIndex(n=>n.id===e),t=H.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,h.a8)(t,i):l.w4.colors.accent}})},[H,r]),an=(0,a.useMemo)(()=>ae.reduce((e,n)=>e+n.value,0),[ae]),ai=tN.budget>0?tN.spent/tN.budget*100:0,at=H.budget.monthlyBudget>0?tJ/H.budget.monthlyBudget*100:0,aa=(0,a.useMemo)(()=>{let e=iW&&iU.trim()?iU.trim():(0,d.parseQuickInput)(iP,H.familyMembers)?.description;return e?(0,d.guessCategoryWithRules)(H,e):"other"},[iP,iW,iU,H]),ar=iH||ts||aa,ao=(0,a.useMemo)(()=>(0,d.parseRecurringHint)(iP),[iP]);(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(iP,H.familyMembers);e?.memberId&&iV(e.memberId)},[iP,H.familyMembers]);let as=(0,a.useCallback)(()=>{let e=(0,d.parseQuickInput)(iP,H.familyMembers),n=(0,d.parseRecurringHint)(iP);if(!e||!n)return;let i=new Date,t=i.getFullYear(),a=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0");i1({amount:e.amount,description:e.description||(ar??"other"),categoryId:ar||"other",cadence:n.cadence,firstDue:`${t}-${a}-${r}`})},[iP,H.familyMembers,ar]),al=(0,a.useCallback)(()=>{if(!i4)return;let e=new Date(i4.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:i4.description,amount:i4.amount,categoryId:i4.categoryId,cadence:i4.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==i_?i_:void 0};nG({...H,recurringRules:[...H.recurringRules??[],n]},"finance.undo.label.added"),i1(null),iN(""),iZ(""),tl(""),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)},[i4,H,i_,nG]),ac=(0,a.useCallback)(async e=>{let n;e.preventDefault();let i=iW&&iU.trim()?iU.trim():void 0,t=(0,d.parseQuickInput)(iP,H.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let a=ar||"other",r=t.memberId??("shared"!==i_?i_:void 0),o=t.tags??[],s=t.description?(0,d.normalizeMerchant)(t.description):void 0,c=ic(),p=t.amount;if("EUR"!==i2){i7(!0),i8(!1);let e=await (0,d.convertToEUR)({amount:t.amount,code:i2,date:c});if(i7(!1),!e)return void i8(!0);p=e.eur,n={code:i2,rate:e.rate,original:t.amount}}let m={id:(0,f.z)(),amount:p,date:c,categoryId:a,description:t.description||a,type:"daily",...t.split?{split:t.split}:{childId:r},createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{},...H.defaultAccountId?{accountId:H.defaultAccountId}:{}};tt(!1),i8(!1);let u={...H.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=a)});let x=[t.description||"",...H.recentDescriptions].filter(Boolean).slice(0,20),g=[m,...H.expenses],h={...H,expenses:g,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,d.addRecentTag)(h,e);nG(h,"finance.undo.label.added");let b=(0,v.j)(g);td(b),(0,l.Is)(eU,JSON.stringify(b)),iN(""),iq(""),iY(!1),iZ(""),tl(""),iG(null),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)},[iP,iW,iU,ar,i_,i2,H,nG]),ad=(0,a.useCallback)(e=>{(0,m.K)([10,50,10]);let n=(0,d.parseQuickInput)(e,H.familyMembers);if(n){let e=iH||ts||(n.description?(0,d.guessCategoryWithRules)(H,n.description):"other"),i=n.memberId??("shared"!==i_?i_:void 0),t=n.tags??[],a={id:(0,f.z)(),amount:n.amount,date:ic(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},r={...H.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(r[n]=e)});let o=[n.description||"",...H.recentDescriptions].filter(Boolean).slice(0,20),s={...H,expenses:[a,...H.expenses],categoryHints:r,recentDescriptions:o};for(let e of t)s=(0,d.addRecentTag)(s,e);nG(s,"finance.undo.label.added");let c=(0,v.j)([a,...H.expenses]);td(c),(0,l.Is)(eU,JSON.stringify(c)),iN(""),iZ(""),tl(""),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)}else iN(e),iA.current?.focus()},[H,iH,ts,i_,nG]),ap=(0,a.useCallback)(e=>{nG({...H,expenses:H.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[H,nG]),am=(0,a.useCallback)(e=>{let n=H.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,f.z)(),date:ic(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nG({...H,expenses:[i,...H.expenses]},"finance.undo.label.added")},[H,nG]),au=(0,a.useCallback)(e=>{nG({...H,income:H.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[H,nG]),ax=(0,a.useCallback)(e=>{nG({...H,expenses:H.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[H,nG]),af=(0,a.useCallback)(()=>{let e=parseFloat(tw)||H.budget.weeklyBudget,n=parseFloat(tv)||H.budget.monthlyBudget;K({...H,budget:{...H.budget,weeklyBudget:e,monthlyBudget:n}}),tM(!0),setTimeout(()=>tM(!1),2e3)},[tw,tv,H,K]),ag=(0,a.useCallback)(()=>{let e=iI.selectedIds;0!==e.size&&(nG({...H,expenses:H.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iI.exitSelectMode())},[iI,H,nG]),ah=(0,a.useCallback)(e=>{let n=iI.selectedIds;0!==n.size&&(nG({...H,expenses:H.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iI.exitSelectMode())},[iI,H,nG]),ab=(0,a.useCallback)(()=>{let e=iI.selectedIds;0!==e.size&&(nG({...H,expenses:H.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iI.exitSelectMode())},[iI,H,nG]),ay=(0,a.useMemo)(()=>["shared",...H.familyMembers.map(e=>e.id)],[H.familyMembers]);(0,j.K)({quickAddInputRef:iA,monthSelectRef:iL,memberIds:ay,activeMemberId:n2,onSelectMember:n3,onSetTab:e=>n0(e),expenseModalOpen:tp,onOpenExpenseModal:()=>tm(!0),shortcutsOpen:iB,onToggleShortcuts:()=>iO(e=>!e),onOpenSearch:()=>{n0("expenses"),iM(!0)}});let aw=[{value:"week",label:r("finance.range.pill.7d")},{value:"month",label:r("finance.range.pill.month")},{value:"3m",label:r("finance.range.pill.3m")},{value:"6m",label:r("finance.range.pill.6m")},{value:"1y",label:r("finance.range.pill.year")}],aj=Math.floor(tJ).toLocaleString("pt-PT"),av=(tJ%1).toFixed(2).slice(1),a$=(0,a.useMemo)(()=>{if(0===(H.goals??[]).length)return null;let e=(0,d.recomputeGoalCurrents)(H);return{onTrack:e.goals.filter(e=>"behind"!==(0,d.goalStatus)(e)).length,total:e.goals.length}},[H]),ak=(()=>{let[e,n]=tI.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),aM=(0,t.jsx)(h.TA,{data:H,activeMemberId:n2,onSelectMember:n3,onSaveData:K,t:r,locale:i}),aT=(0,a.useMemo)(()=>{let e={};for(let n of tV)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:ip(e).color}))},[tV]),aS=aT.reduce((e,n)=>e+n.value,0),aF=(0,a.useMemo)(()=>t2.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[t2]),az=t2.length>0?aF/t2.length:0,aC=t2.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>H.budget.monthlyBudget).length,aI=(0,a.useMemo)(()=>{if(0===tV.length)return null;let e=tV.reduce((e,n)=>n.amount>e.amount?n:e,tV[0]),n={};for(let e of tV){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?H.familyMembers.find(e=>e.id===i[0]):void 0,a=t?.name??r("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tV){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tV.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:a,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tV,H.familyMembers,r]),aR="kid"===eJ.ageMode&&"shared"!==n2&&"all"!==n2?H.familyMembers.find(e=>e.id===n2&&"child"===e.role)??null:null;return aR?(0,t.jsx)(c.PE,{title:r("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(N.N,{member:aR,data:H,t:r})}):(0,t.jsxs)(c.PE,{title:r("finance.appTitle"),sidebar:aM,topBarRight:e,activeId:n2,children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)(_,{children:(0,t.jsx)(h.jb,{data:H,activeMemberId:n2,onSelectMember:n3,t:r,locale:i})}),(0,t.jsxs)(J,{children:[(0,t.jsx)(G,{children:(0,t.jsx)("div",{role:"tablist","aria-label":r("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:r("finance.tab.overview"),expenses:r("finance.tab.expenses"),insights:r("finance.tab.insights")},i={overview:0,expenses:tV.length,insights:tY.length}[e];return(0,t.jsxs)(Q,{type:"button",role:"tab","aria-selected":nQ===e,active:nQ===e,onClick:()=>n0(e),children:[n[e],i>0&&(0,t.jsxs)(ee,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(X,{children:[(0,t.jsxs)(c.ms,{align:"right",trigger:(0,t.jsx)(c.$n,{variant:i$>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(c.In,{name:"filter",size:13,"aria-hidden":!0}),children:i$>0?r("finance.filters.activeCount",{n:i$}):r("finance.actions.filters")}),children:[(0,t.jsx)(c.o_,{children:r("finance.filters.member")}),["shared",...H.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?r("finance.hero.family"):H.familyMembers.find(n=>n.id===e)?.name??e,i=e===n2;return(0,t.jsx)(c.tJ,{onClick:()=>n3(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(c.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.o_,{children:r("finance.filters.category")}),(0,t.jsx)(c.tJ,{onClick:()=>ir([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===ia.length&&(0,t.jsx)(c.In,{name:"check",size:12}),ia.length>0&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.allCategories")]})}),d.DEFAULT_CATEGORIES.map(e=>{let n=ia.includes(e.id);return(0,t.jsx)(c.tJ,{onClick:()=>ir(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(c.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.tJ,{onClick:()=>ib(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[io&&(0,t.jsx)(c.In,{name:"check",size:12}),!io&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.reimbursableOnly")]})}),i$>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.tJ,{onClick:()=>{ir([]),ib(!1)},children:r("finance.filters.reset")})]})]}),(0,t.jsx)(c.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(c.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>iw(!0),children:r("finance.actions.categories")}),"expenses"===nQ&&(0,t.jsx)(W.g,{count:iF,onClick:()=>iM(e=>!e),label:r("finance.search.openSearch")}),"expenses"===nQ&&(0,t.jsx)(c.$n,{variant:iI.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iI.selectMode?iI.exitSelectMode():iI.enterSelectMode()},children:r("finance.bulk.select")}),"overview"===nQ&&(0,t.jsx)(c.K0,{onClick:()=>{it(!0),requestAnimationFrame(()=>{window.print()})},title:r("finance.report.button"),"aria-label":r("finance.report.button"),children:(0,t.jsx)(c.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(c.K0,{onClick:()=>ie(!0),title:r("finance.actions.settings"),"aria-label":r("finance.actions.settings"),active:n9,children:(0,t.jsx)(c.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(V,{children:(0,t.jsx)(c.K0,{onClick:()=>iO(e=>!e),title:r("finance.shortcuts.title"),"aria-label":r("finance.shortcuts.title"),active:iB,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(ei,{"aria-label":r("finance.range.label"),children:aw.map(({value:e,label:n})=>(0,t.jsx)(en,{type:"button",active:iR===e,onClick:()=>{iD(e),"month"===e&&n1(tI)},"aria-pressed":iR===e,children:n},e))}),"expenses"===nQ&&(0,t.jsx)(W.P,{open:ik,query:iT,onQueryChange:iS,savedViews:H.savedViews??[],onSaveView:iz,onDeleteView:iC,onClose:()=>iM(!1),members:H.familyMembers,categories:[...d.DEFAULT_CATEGORIES,...H.categories??[]],locale:i,recentTags:H.recentTags}),"month"===iR&&H.expenses.length>0&&(0,t.jsx)($.f,{data:H,selectedMonth:n4,onSelectMonth:n1,locale:i,t:r}),(0,t.jsxs)(eh,{children:["overview"===nQ&&(0,t.jsxs)(eb,{children:[(0,t.jsxs)(er,{ref:iE,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:l.w4.colors.mainTextMuted},children:r("finance.quickAdd.title")}),tN.budget>0?(0,t.jsxs)(nm,{status:tW.status,title:r("finance.safeToSpend.label"),"aria-label":`${r("finance.safeToSpend.label")} €${tW.amount.toFixed(0)}`,children:[(0,t.jsx)("span",{className:"label",children:r("finance.safeToSpend.label")}),"danger"===tW.status?(0,t.jsx)("span",{className:"amount",children:r("finance.safeToSpend.over",{n:Math.abs(tW.remaining).toFixed(0)})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"amount",children:r("finance.safeToSpend.amount",{amount:tW.amount.toFixed(0)})}),(0,t.jsx)("span",{className:"suffix",children:r("finance.safeToSpend.suffix",{n:tW.daysRemaining})})]})]}):null]}),(0,t.jsxs)(np,{visible:iX&&!i9.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",r("finance.quickAdd.added")]}),i9.listening&&(0,t.jsxs)(nf,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(ng,{}),r("finance.voice.listening")]}),(0,t.jsxs)(c.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tx(!0),children:["+ ",r("finance.quickAdd.addIncome")]}),(0,t.jsxs)(c.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tg(!0),children:["⚖ ",r("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:ac,"aria-label":r("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(no,{children:[{id:"shared",name:r("finance.member.shared"),role:"shared",color:void 0},...H.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(H.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(ns,{type:"button",active:i_===e.id,color:i,onClick:()=>iV(e.id),children:[(0,t.jsx)(c.eu,{member:a,size:18}),e.name]},e.id)})}),(0,t.jsxs)(nl,{children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(nc,{ref:iA,type:"text",placeholder:iW?r("finance.quickAdd.amountOnlyPlaceholder"):r("finance.quickAdd.placeholder"),value:iP,onChange:e=>{iN(e.target.value),iZ(""),tt(e8.length>0),tr(-1)},onFocus:()=>{e8.length>0&&!iP.trim()&&tt(!0)},onBlur:()=>{setTimeout(()=>tt(!1),150)},onKeyDown:e=>{if(ti&&0!==e8.length)if("ArrowDown"===e.key)e.preventDefault(),tr(e=>Math.min(e+1,e8.length-1));else if("ArrowUp"===e.key)e.preventDefault(),tr(e=>Math.max(e-1,-1));else if("Enter"===e.key&&ta>=0){e.preventDefault();let n=e8[ta];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iP);iN(e?iP.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iZ(""),tt(!1),tr(-1)}}else"Escape"===e.key&&(tt(!1),tr(-1))},"aria-label":r("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":ti&&e8.length>0,autoComplete:"off",inputMode:"decimal"}),ti&&e8.length>0&&(0,t.jsxs)(nT,{ref:to,role:"listbox","aria-label":r("finance.merchant.recent"),children:[(0,t.jsx)(nC,{role:"presentation",children:r("finance.merchant.recent")}),e8.map((e,n)=>(0,t.jsxs)(nS,{role:"option","aria-selected":ta===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iP);iN(i?iP.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iZ(""),tt(!1),tr(-1),iA.current?.focus()},children:[(0,t.jsx)(nF,{children:e.merchant}),(0,t.jsxs)(nz,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(eo,{type:"button","aria-pressed":iW,"aria-label":iW?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iW;iY(e),e&&requestAnimationFrame(()=>iK.current?.focus())},children:[(0,t.jsx)(c.In,{name:iW?"close":"plus",size:11}),iW?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(nd,{value:iH||aa,onChange:e=>{let n=e.target.value,i=iH||aa;iZ(n);let t=iW&&iU.trim()?iU.trim():(0,d.parseQuickInput)(iP,H.familyMembers)?.description;t&&iG((0,d.proposeRuleFromOverride)(i,n,t))},"aria-label":r("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(nd,{value:i2,onChange:e=>{i6(e.target.value),i8(!1)},"aria-label":r("finance.currency.label"),style:{maxWidth:72},children:d.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iP.trim()||i5,children:i5?r("finance.currency.converting"):r("finance.quickAdd.add")}),i9.supported&&(0,t.jsx)(nk,{type:"button","aria-label":r("finance.voice.listening"),"aria-pressed":i9.listening,active:i9.listening,onPointerDown:()=>{te.current=window.setTimeout(()=>{te.current=null,tn.current=!0,(0,m.K)(30),i9.listening?i9.stop():i9.start(ad)},500)},onPointerUp:()=>{null!==te.current&&(clearTimeout(te.current),te.current=null,tn.current||((0,m.K)(10),i9.listening?i9.stop():i9.start(ad))),tn.current=!1},onPointerCancel:()=>{null!==te.current&&(clearTimeout(te.current),te.current=null),tn.current=!1},children:(0,t.jsx)(c.In,{name:"mic",size:16})})]}),(0,t.jsx)(es,{visible:iW,children:(0,t.jsx)(el,{ref:iK,type:"text",placeholder:r("finance.quickAdd.descPlaceholder"),maxLength:80,value:iU,onChange:e=>iq(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iY(!1),iA.current?.focus())},"aria-label":r("finance.quickAdd.descPlaceholder"),tabIndex:iW?0:-1})}),(0,t.jsx)(v.J,{expenses:H.expenses,storedOrder:tc,lockedCategoryId:ts,onToggle:e=>tl(n=>n===e?"":e),locale:i,groupLabel:r("finance.quickAdd.frequentCategories")}),iJ&&(0,t.jsxs)(nh,{children:[(0,t.jsxs)("span",{children:[r("finance.categoryRules.alwaysCategorize",{match:iJ.match})," ",(0,t.jsx)("strong",{children:(n=d.DEFAULT_CATEGORIES.find(e=>e.id===iJ.categoryId))?(0,d.categoryLabel)(n,i):iJ.categoryId}),"?"]}),(0,t.jsx)(nb,{type:"button",accent:!0,onClick:()=>{H&&iJ&&(nG({...H,categoryRules:[iJ,...H.categoryRules??[]]},"finance.undo.label.added"),iG(null))},children:r("finance.categoryRules.propose")}),(0,t.jsx)(nb,{type:"button",onClick:()=>iG(null),children:r("finance.categoryRules.dismiss")})]}),i3&&(0,t.jsx)(nu,{style:{color:q},role:"alert",children:r("finance.currency.fxFailed")}),ao&&(0,d.parseQuickInput)(iP,H.familyMembers)&&(0,t.jsxs)(ny,{type:"button",onClick:as,"aria-label":r("finance.recurring.makeRecurring"),children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsx)(nu,{children:r("finance.quickAdd.hint")})]})]}),(0,t.jsx)(c.dO,{items:tL.map(e=>({...e})),onReorder:tO,onCycleSize:tP,accentColor:()=>U,labels:{moveLeft:r("finance.overview.panel.moveLeft"),moveRight:r("finance.overview.panel.moveRight"),cycleSize:r("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(e$,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eM,{children:[r("finance.hero.spentIn")," ",ak," \xb7 ",t0]}),(0,t.jsxs)(eT,{children:[(0,t.jsx)(eS,{children:"€"}),(0,t.jsx)(eF,{children:aj}),(0,t.jsx)(ez,{children:av})]}),(0,t.jsxs)(eC,{children:[(0,t.jsx)(u.Ru,{value:tQ,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[r("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(tG,i)," \xb7 €",il(tX)]})]}),t1.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:t1,accent:t4,width:280,height:34})}),null!==a$&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:a$.onTrack===a$.total?"#7fb77e":l.w4.colors.mainTextMuted},children:r("finance.goals.hero",{on:a$.onTrack,total:a$.total})})]}),(0,t.jsx)(eI,{children:(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsx)(eE,{children:r("finance.budget.weekly")}),(0,t.jsxs)(eA,{children:["€",il(tN.spent)," ",(0,t.jsxs)(eL,{children:["/ €",tN.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:ai,over:ai>100?ai-100:0}),(0,t.jsxs)(eB,{children:[(0,t.jsxs)("span",{children:[Math.round(ai),"% ",r("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tN.remaining<0?q:U},children:tN.remaining>0?`€${il(tN.remaining)} ${r("finance.budget.remaining")}`:`€${il(Math.abs(tN.remaining))} ${r("finance.budget.over")}`})]}),(0,t.jsxs)(eD,{style:{marginTop:14},children:[(0,t.jsx)(eE,{children:r("finance.budget.monthly")}),(0,t.jsxs)(eA,{children:["€",il(tJ)," ",(0,t.jsxs)(eL,{children:["/ €",H.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:at,over:at>100?at-100:0}),(0,t.jsxs)(eB,{children:[(0,t.jsxs)("span",{children:[Math.round(at),"% ",r("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[r("finance.budget.projected")," €",il(tJ+(tN.projectedTotal-tN.spent))]})]})]})})]});case"overview-accounts":return(0,t.jsx)(Y.V,{data:H,t:r,onSave:e=>{nG(e,"finance.undo.label.edited")}});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(ej,{children:r("finance.charts.sixMonths")}),(0,t.jsx)(ev,{children:(0,t.jsx)(n_,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nV,{children:[(0,t.jsx)(nJ,{color:e.color}),(0,d.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(u.ik,{data:t2,budget:H.budget.monthlyBudget,height:200}),(0,t.jsxs)(nI,{children:[(0,t.jsxs)(nR,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nD,{children:["€",il(aF)]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nD,{children:["€",il(az)]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nD,{children:[aC," / ",t2.length]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nD,{style:{color:tQ>0?q:U},children:[tQ>0?"+":"",tQ,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(ej,{children:r("finance.charts.byCategory")}),(0,t.jsx)(nK,{type:"button",onClick:()=>n0("insights"),children:r("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:aT,total:aS,size:110,centerLabel:ak.slice(0,3),centerValue:`€${il(aS)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:aT.map(e=>{let n=ip(e.id),a=(0,d.expensesForMember)((0,d.expensesForMonth)(H.expenses,tG),n2).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),r=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:e.color}),(0,t.jsx)(eN,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eW,{children:["€",il(e.value)]}),Math.abs(r)>1&&(0,t.jsx)(u.Ru,{value:r,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ej,{children:r("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.forecast.sub",{n:tF})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(en,{type:"button",active:tF===e,onClick:()=>tC(e),"aria-pressed":tF===e,children:r(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(I.b,{forecast:t3,firstNegDate:t8,t:r,locale:i,height:170}),t6.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:l.w4.spacing.md,paddingTop:l.w4.spacing.sm,borderTop:`1px solid ${l.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:l.w4.colors.mainTextMuted},children:r("finance.charts.cashflow")})}),(0,t.jsx)(u.uj,{data:t6,height:130,legendIn:r("finance.charts.in"),legendOut:r("finance.charts.out"),legendGoal:r("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(ej,{children:r("finance.charts.heatmap")}),(0,t.jsx)(u.zy,{range:n8,onChange:n7,labels:{"1m":r("finance.timeline.range.1m"),"3m":r("finance.timeline.range.3m"),"6m":r("finance.timeline.range.6m"),"1y":r("finance.timeline.range.1y")}})]}),(0,t.jsx)(u.RT,{data:t5,locale:i}),(0,t.jsxs)(nE,{children:[(0,t.jsx)("span",{children:r("finance.charts.less")}),(0,t.jsx)(nA,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:r("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ec,{children:(0,t.jsx)(c.YZ,{children:r("finance.heatmap.title")})}),(0,t.jsx)(b.D,{matrix:t7,locale:i,t:r})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ew,{children:(0,t.jsx)(ej,{children:r("finance.charts.thisWeek")})}),(0,t.jsxs)(nL,{children:[(0,t.jsxs)(nB,{children:[(0,t.jsxs)(nO,{children:["€",il(tN.spent)]}),(0,t.jsxs)(eL,{children:["/ €",tN.budget]})]}),(0,t.jsx)(u.kl,{spent:tN.spent,budget:tN.budget}),(0,t.jsxs)(nP,{children:[(0,t.jsx)("span",{children:r("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:r("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(c.YZ,{children:r("finance.recent.title")}),tV.length>8&&(0,t.jsx)(nK,{type:"button",onClick:()=>n0("expenses"),children:r("finance.recent.viewAll",{n:tV.length})})]}),0===tV.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:r("finance.dashboard.noRecent")}):(0,t.jsx)(eG,{"aria-label":r("finance.recent.title"),children:tV.slice(0,8).map(e=>(0,t.jsx)(ih,{exp:e,finData:H,locale:i,t:r,onDelete:ap,onClone:am,onToggleReimbursed:ax,compact:"compact"===tT},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.incomeMix.title")}),0===ae.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,padding:`${l.w4.spacing.md} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:ae,total:an,size:100,centerLabel:r("finance.byMember.income"),centerValue:`€${il(an)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:ae.map(e=>(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:e.color}),(0,t.jsx)(eN,{children:e.label}),(0,t.jsxs)(eW,{style:{color:U},children:["€",il(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n2?t9:t9.filter(e=>e.key===n2);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.byMember.title")}),t9.length<=1&&0===H.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:U},{id:"expense",value:e.expense,color:q}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:l.w4.spacing.sm},children:[(0,t.jsx)(c.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamily,color:l.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?U:q},children:[n.net>=0?"+":"","€",il(Math.abs(n.net))]}),(0,t.jsx)(u.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(u.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:l.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(c.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(c.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:U},children:["€",il(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:U,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",il(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:q,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nQ&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nH,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(c.YZ,{children:r("finance.tx.title")}),"month"===iR&&0===H.expenses.length&&(0,t.jsx)(nq,{ref:iL,value:n4,onChange:e=>n1(e.target.value),"aria-label":r("finance.insights.month"),children:tH.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),0===tV.length&&0===t_.length?(0,t.jsx)(ey,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:iF>0?r("finance.search.noResults"):r("finance.tx.empty")})}):(0,t.jsx)(ey,{span:12,children:(0,t.jsx)(eG,{"aria-label":r("finance.tx.title"),children:[...tV.map(e=>({...e,_kind:"expense"})),...t_.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ih,{exp:e,finData:H,locale:i,t:r,onDelete:ap,onClone:am,onToggleReimbursed:ax,compact:"compact"===tT,selectMode:iI.selectMode,selected:iI.selectedIds.has(e.id),onToggleSelect:iI.toggleId,longPressHandlers:iI.longPressHandlers,onEnterSelectMode:iI.enterSelectMode},e.id):(0,t.jsxs)(eX,{compact:"compact"===tT,children:["compact"===tT?(0,t.jsx)(eQ,{color:U,"aria-hidden":!0}):(0,t.jsx)(e0,{color:U,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e1,{children:e.source}),"compact"!==tT&&(0,t.jsxs)(e2,{children:[id(e.date,i)," \xb7 ",r("finance.dashboard.income")]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e3,{style:{color:U},children:["+€",is(e.amount)]}),(0,t.jsx)(nn,{className:"delete-btn",type:"button",onClick:()=>au(e.id),"aria-label":`${r("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nQ&&(0,t.jsxs)(eg,{children:[(0,t.jsxs)(nH,{style:{marginBottom:0},children:[(0,t.jsx)(c.YZ,{children:r("finance.insights.title")}),"month"===iR&&0===H.expenses.length&&(0,t.jsx)(nq,{value:n4,onChange:e=>n1(e.target.value),"aria-label":r("finance.insights.month"),children:tH.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),null!==aI&&(0,t.jsxs)(ep,{children:[(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.kpi.biggestExpense")}),(0,t.jsxs)(ex,{children:["€",aI.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ef,{children:aI.biggest.description?`${aI.biggest.description} \xb7 ${(0,d.categoryLabel)(ip(aI.biggest.categoryId),i)}`:(0,d.categoryLabel)(ip(aI.biggest.categoryId),i)})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.kpi.topSpender")}),(0,t.jsxs)(ex,{children:["€",aI.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ef,{children:aI.topMemberLabel})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.kpi.busiestDay")}),(0,t.jsxs)(ex,{children:["€",aI.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ef,{children:r(`finance.weekday.${aI.busiestDowKey}`)})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(ex,{children:["€",aI.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ef,{children:0===aI.reimbursableTotal?"—":r("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(c.dO,{items:tR.map(e=>({...e})),onReorder:tE,onCycleSize:tA,accentColor:()=>U,labels:{moveLeft:r("finance.insights.panel.moveLeft"),moveRight:r("finance.insights.panel.moveRight"),cycleSize:r("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.charts.sixMonths")}),(0,t.jsx)(u.ik,{data:t2,budget:H.budget.monthlyBudget,height:180}),(0,t.jsxs)(nI,{style:{marginTop:l.w4.spacing.sm},children:[(0,t.jsxs)(nR,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nD,{children:["€",il(aF)]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nD,{children:["€",il(az)]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nD,{style:{color:tQ>0?q:U},children:[tQ>0?"+":"",tQ,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.charts.byCategory")}),0===aT.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${l.w4.spacing.lg} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:aT,total:aS,size:110,centerLabel:ak.slice(0,3),centerValue:`€${il(aS)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:aT.map(e=>{let n=ip(e.id),a=e.color||l.w4.colors.mainTextMuted,r=(0,d.expensesForMember)((0,d.expensesForMonth)(H.expenses,tG),n2).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:a}),(0,t.jsx)(eN,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eW,{children:["€",il(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.insights.title")}),0===tY.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tY.map((e,n)=>(0,t.jsxs)(ni,{itype:e.type,children:[(0,t.jsx)(nt,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:r(e.messageKey,tK(e.params))}),e.memberId&&(()=>{let n=H.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=H.familyMembers.indexOf(n);return(0,t.jsxs)(na,{children:[(0,t.jsx)(c.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.insights.anomalies")}),0===tU.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tU.map(e=>(0,t.jsxs)(ni,{itype:e.type,children:[(0,t.jsx)(nt,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:r(e.messageKey,tK(e.params))})}),e.snoozeKey&&(0,t.jsx)(nr,{type:"button",title:r("finance.insights.anomalies.dismiss"),"aria-label":r("finance.insights.anomalies.dismiss"),onClick:()=>{tq(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.smallMultiples.title")}),(0,t.jsx)(A.R,{expenses:H.expenses,familyMembers:H.familyMembers,getMemberColor:h.a8,t:r,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.reimbursables.tracker.title")}),(0,t.jsx)(E.p,{expenses:H.expenses,familyMembers:H.familyMembers,getMemberColor:h.a8,t:r,locale:i})]});case"analytics-budgets":return(0,t.jsx)(R.z,{});case"analytics-bills":return(0,t.jsx)(F.J,{});case"analytics-subscriptions":return(0,t.jsx)(T.n,{});case"analytics-goals":return(0,t.jsx)(S.f,{});case"analytics-recurring":return(0,t.jsx)(z.b,{});case"analytics-rules":return(0,t.jsx)(D.K,{});case"analytics-networth":return(0,t.jsx)(C.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.byMember.title")}),0===t9.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:l.w4.spacing.sm},children:t9.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(c.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(c.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:U},children:["€",il(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:U,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",il(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:q,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nZ,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),tp&&(0,t.jsx)(ig,{finData:H,activeMemberId:n2,locale:i,t:r,onClose:()=>tm(!1),onSubmit:ty}),tu&&(0,t.jsx)(ix,{finData:H,locale:i,t:r,onClose:()=>tx(!1),onSubmit:tb}),tf&&(0,t.jsx)(iu,{finData:H,t:r,onClose:()=>tg(!1),onSubmit:th}),(0,t.jsx)(y.S,{labelKey:ne,onUndo:()=>{nX()},onDismiss:()=>nx(null),t:r}),iI.selectMode&&"expenses"===nQ&&(0,t.jsx)(k.S,{selectionCount:iI.selectedIds.size,visibleIds:tV.map(e=>e.id),selectedIds:iI.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:i,t:r,onCancel:iI.exitSelectMode,onSelectAll:()=>iI.selectAll(tV.map(e=>e.id)),onCategorise:ah,onDelete:ag,onMarkReimbursed:ab}),iB&&(0,t.jsx)(w.m,{t:r,onClose:()=>iO(!1)}),(0,t.jsx)(O.X,{open:n9,onClose:()=>ie(!1),ariaLabel:r("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(et,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(c.YZ,{children:r("finance.settings.title")}),(0,t.jsx)(c.K0,{onClick:()=>ie(!1),title:r("finance.actions.settings"),children:(0,t.jsx)(c.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"drawer-weekly-budget",children:r("finance.settings.weeklyBudget")}),(0,t.jsx)(nY,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(H.budget.weeklyBudget),value:tw,onChange:e=>tj(e.target.value)})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"drawer-monthly-budget",children:r("finance.settings.monthlyBudget")}),(0,t.jsx)(nY,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(H.budget.monthlyBudget),value:tv,onChange:e=>t$(e.target.value)})]}),(0,t.jsx)(c.$n,{variant:"primary",onClick:()=>{af(),ie(!1)},style:{height:44},children:tk?r("finance.settings.saved"):r("finance.settings.save")})]}),(0,t.jsx)(P.u,{data:H,getMemberColor:h.a8,t:r,onSaveMember:(e,n)=>{let i=H.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);nG({...H,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(O.X,{open:iy,onClose:()=>{iw(!1),iv(null)},ariaLabel:r("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(et,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(c.YZ,{children:r("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!ij&&(0,t.jsx)(c.$n,{variant:"ghost",style:{height:28},onClick:()=>iv({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:r("finance.categories.new")}),(0,t.jsx)(c.K0,{onClick:()=>{iw(!1),iv(null)},title:r("finance.categories.cancel"),children:(0,t.jsx)(c.In,{name:"close",size:16})})]})]}),ij&&(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.md,display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{children:r("finance.categories.labelEn")}),(0,t.jsx)(nU,{value:ij.labelEn,onChange:e=>iv(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{children:r("finance.categories.labelPt")}),(0,t.jsx)(nU,{value:ij.labelPt,onChange:e=>iv(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{children:r("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:ij.icon,onChange:e=>iv(n=>n&&{...n,icon:e.target.value}),style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:c.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{children:r("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:ij.color,onChange:e=>iv(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nU,{value:ij.color,onChange:e=>iv(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(c.$n,{variant:"ghost",style:{height:28},onClick:()=>iv(null),children:r("finance.categories.cancel")}),(0,t.jsx)(c.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!ij.labelEn||!ij.labelPt)return;let e={id:(0,f.z)(),labelEn:ij.labelEn,labelPt:ij.labelPt,icon:ij.icon,color:ij.color,isCustom:!0},n=H.categories??[];nG({...H,categories:[...n,e]},"finance.undo.label.added"),iv(null)},children:r("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.n6)(e.icon)?(0,t.jsx)(c.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:r("finance.categories.builtIn")})]},e.id)),(H.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.n6)(e.icon)?(0,t.jsx)(c.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)(c.K0,{title:r("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(H.categories??[]).filter(n=>n.id!==e.id);nG({...H,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(c.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(O.X,{open:null!==i4,onClose:()=>i1(null),ariaLabel:r("finance.recurring.makeRecurring"),maxWidth:360,children:i4&&(0,t.jsxs)(nw,{children:[(0,t.jsxs)(c.YZ,{children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nj,{children:r("finance.recurring.frequency")}),(0,t.jsx)(nv,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(n$,{type:"button",active:i4.cadence===e,onClick:()=>i1(n=>n?{...n,cadence:e}:null),children:r(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nj,{children:r("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:i4.firstDue,onChange:e=>i1(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(c.$n,{variant:"ghost",onClick:()=>i1(null),children:r("finance.recurring.cancel")}),(0,t.jsx)(c.$n,{variant:"primary",onClick:al,disabled:!i4.firstDue,children:r("finance.recurring.confirm")})]})]})}),ii&&(0,t.jsx)(L.h,{data:H,month:n4,locale:i,t:r,getMemberColor:h.a8})]})}function iu({finData:e,t:n,onClose:i,onSubmit:r}){let o=(0,d.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[p,m]=(0,a.useState)(""),u=parseFloat(p.replace(",",".")),x=p.trim().length>0&&!Number.isNaN(u),f=x?u-o:0;return(0,t.jsx)(O.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nX,{children:[(0,t.jsxs)(nQ,{children:[(0,t.jsx)(c.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(n0,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&r(u)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:l.w4.spacing.sm,background:l.w4.colors.sidebarHover,borderRadius:l.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",is(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:l.w4.colors.mainTextMuted},children:["€",is(s)]})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n5,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:p,onChange:e=>m(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==f&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:f>0?U:q,marginTop:6},children:f>0?n("finance.balance.deltaUp",{n:is(f)}):n("finance.balance.deltaDown",{n:is(-f)})}),x&&0===f&&(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(n9,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function ix({finData:e,locale:n,t:i,onClose:r,onSubmit:o}){let[s,d]=(0,a.useState)(""),[p,m]=(0,a.useState)(ic()),[u,x]=(0,a.useState)(""),[g,b]=(0,a.useState)(""),[y,w]=(0,a.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(O.X,{open:!0,onClose:r,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nX,{children:[(0,t.jsxs)(nQ,{children:[(0,t.jsx)(c.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(n0,{type:"button",onClick:r,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,f.z)(),amount:j,date:p,source:u.trim(),createdAt:Date.now(),...g?{goalId:g}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(n4,{children:[(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n5,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>d(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n5,{id:"inc-date",type:"date",value:p,onChange:e=>m(e.target.value)})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n5,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(c.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(c.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n);return(0,t.jsxs)(c.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n7,{id:"inc-goal",value:g,onChange:e=>b(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(n9,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:r,children:i("finance.income.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function ig({finData:e,activeMemberId:n,locale:i,t:r,onClose:o,onSubmit:s}){let[p,m]=(0,a.useState)(""),[u,x]=(0,a.useState)(""),[g,b]=(0,a.useState)("other"),[y,w]=(0,a.useState)(ic()),[j,v]=(0,a.useState)("single"),[$,k]=(0,a.useState)(n),[M,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,a.useState)([]),[z,C]=(0,a.useState)(""),[I,R]=(0,a.useState)(!1),D=(0,a.useRef)(null);(0,a.useEffect)(()=>{u.trim()&&b((0,d.guessCategoryWithRules)(e,u))},[u,e]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(p.replace(",","."))||0,A=M.length,L="split"===j&&A>0?E/A:E,B=E>0&&!!y&&("single"===j||"split"===j&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),R(!1))},N=(0,a.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),W=[{id:"shared",name:r("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(O.X,{open:!0,onClose:o,ariaLabel:r("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nG,{children:[(0,t.jsxs)(nQ,{children:[(0,t.jsxs)(c.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,t.jsx)(n0,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),a=Date.now(),r={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(r[e]=g)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,f.z)(),amount:E,date:y,categoryId:g,description:t||g,type:"daily",childId:"shared"===$?void 0:$,createdAt:a,...o}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,r)=>({id:(0,f.z)(),amount:0===r?e+n:e,date:y,categoryId:g,description:t?`${t} (1/${A})`:g,type:"daily",childId:i,createdAt:a+r,...o}))}s(i,r,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(n4,{children:[(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"exp-amount",children:r("finance.modal.amount")}),(0,t.jsx)(n5,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:p,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"exp-date",children:r("finance.modal.date")}),(0,t.jsx)(n5,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"exp-desc",children:r("finance.modal.description")}),(0,t.jsx)(n5,{id:"exp-desc",type:"text",placeholder:r("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,t.jsx)(n7,{id:"exp-cat",value:g,onChange:e=>b(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{children:r("finance.tags.label")}),(0,t.jsxs)(ir,{children:[(0,t.jsxs)(ii,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(c.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":r("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(ie,{ref:D,type:"text",value:z,placeholder:0===S.length?r("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),R(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&R(!1)},onBlur:()=>{z.trim()&&P(z),setTimeout(()=>R(!1),150)},onFocus:()=>R(!0),"aria-label":r("finance.tags.label")})]}),I&&N.length>0&&(0,t.jsx)(it,{children:N.map(e=>(0,t.jsxs)(ia,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{children:r("finance.modal.assign")}),(0,t.jsxs)(n1,{role:"tablist",children:[(0,t.jsx)(n2,{type:"button",active:"single"===j,onClick:()=>v("single"),children:r("finance.modal.member")}),(0,t.jsx)(n2,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:r("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n6,{style:{marginTop:l.w4.spacing.sm},children:W.map(e=>(0,t.jsxs)(n3,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n6,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),a=M.includes(e.id);return(0,t.jsxs)(n3,{type:"button",active:a,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(n8,{style:{marginTop:l.w4.spacing.xs},children:r("finance.modal.splitEach",{n:A,amount:is(L)})})]})]}),(0,t.jsxs)(n9,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:o,children:r("finance.member.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!B,children:r("finance.quickAdd.add")})]})]})]})})}function ih({exp:e,finData:n,locale:i,t:a,onDelete:r,onClone:o,onToggleReimbursed:s,compact:p=!1,selectMode:m=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:f}){let g=ip(e.categoryId),b=n.familyMembers.findIndex(n=>n.id===e.childId),y=b>=0?n.familyMembers[b]:null,w=y?(0,h.a8)(y,b):l.w4.colors.mainTextMuted,j=e.split&&e.split.length>0?e.split.slice(0,4).map(e=>{let i=n.familyMembers.findIndex(n=>n.id===e.memberId),t=i>=0?n.familyMembers[i]:null;return t?{id:t.id,name:t.name,role:t.role,color:(0,h.a8)(t,i)}:{id:e.memberId,name:e.memberId.slice(0,2).toUpperCase(),role:"adult",color:l.w4.colors.mainTextMuted}}):null,v=e.split&&e.split.length>4?e.split.length-4:0,$=f?f(e.id):null,k=n=>{m&&x&&"INPUT"!==n.target.tagName&&x(e.id)},M=e.isReimbursable&&!m?s?(0,t.jsx)(e9,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e7,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,T=!m&&o?(0,t.jsx)(ne,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${a("finance.tx.clone")} — ${e.description}`,title:a("finance.tx.clone"),children:"↻"}):null,S=m?null:(0,t.jsx)(nn,{className:"delete-btn",type:"button",onClick:()=>r(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),F=m?(0,t.jsx)(eJ,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,z=m?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return p?(0,t.jsxs)(eX,{compact:!0,style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(eQ,{color:g.color,"aria-hidden":!0}),(0,t.jsx)(e4,{children:(0,t.jsxs)(e1,{style:{display:"flex",alignItems:"center",gap:6},children:[j?(0,t.jsxs)(e8,{size:16,children:[j.map(e=>(0,t.jsx)(c.eu,{member:e,size:16},e.id)),v>0&&(0,t.jsxs)(e5,{size:16,children:["+",v]})]}):y?(0,t.jsx)(c.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:13,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,d.categoryLabel)(g,i)})]})}),(0,t.jsxs)(e6,{children:[M,(0,t.jsxs)(e3,{children:["−€",is(e.amount)]}),T,S]})]}):(0,t.jsxs)(eX,{style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e0,{color:g.color,children:(0,c.n6)(g.icon)?(0,t.jsx)(c.In,{name:g.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:g.icon})}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e1,{children:e.description||(0,d.categoryLabel)(g,i)}),(0,t.jsxs)(e2,{children:[j?(0,t.jsxs)(e8,{size:14,children:[j.map(e=>(0,t.jsx)(c.eu,{member:e,size:14},e.id)),v>0&&(0,t.jsxs)(e5,{size:14,children:["+",v]})]}):y?(0,t.jsx)(c.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:11,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,d.categoryLabel)(g,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:id(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:a("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(io,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e6,{children:[M,"recurring"===e.type&&(0,t.jsx)(e7,{children:a("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e3,{children:["−€",is(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:l.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),T,S]})]})}}}]);