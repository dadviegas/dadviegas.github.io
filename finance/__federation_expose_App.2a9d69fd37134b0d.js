"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{ACTIVE_MEMBER_KEY:()=>eH,default:()=>iu});var t=i(5723),a=i(7991),r=i(6859),o=i.n(r),s=i(2799),l=i(6063),c=i(3236),d=i(6197),p=i(3759),m=i(789),u=i(9454),x=i(8170),f=i(4041),g=i(948),h=i(719),b=i(2405),y=i(9546),w=i(5854),j=i(3616),v=i(6579),$=i(8989),k=i(6376),M=i(9146),T=i(7737),S=i(8635),F=i(8501),z=i(1789),C=i(216),I=i(9419),R=i(341),D=i(9378),E=i(1423),A=i(1255),L=i(3451),B=i(545),O=i(2167),P=i(7637),N=i(6891),W=i(1331),Y=i(2139),U=i(7600);let q="#7fb77e",K="#f85149",H=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Z=l.w4.suites.lab,_=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  animation: ${H} 0.25s ease both;
  overflow: hidden;
`,V=o().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,J=o().div`
  display: none;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,G=o().div`
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
`,X=o().div`
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
`,Q=o().div`
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
`,ee=o().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${Z}`:"transparent"};
  background: ${({active:e})=>e?`${Z}1f`:"transparent"};
  color: ${({active:e})=>e?Z:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${Z};
    outline-offset: 2px;
  }
`,en=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,ei=o().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${Z}`:"transparent"};
  background: ${({active:e})=>e?`${Z}1f`:"transparent"};
  color: ${({active:e})=>e?Z:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${Z};
    outline-offset: 2px;
  }
`,et=o().div`
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
`;let ea=o().div`
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
  animation: ${H} 0.2s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,er=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,eo=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${q};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,es=o().button`
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
`,el=o().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,ec=o().input`
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
  border-left: 2px solid ${q};
  padding: ${l.w4.spacing.lg};
`;let ed=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`;o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${q};
  padding: ${l.w4.spacing.md};
`;let ep=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,em=o().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,eu=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ex=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,ef=o().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,eg=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eh=o().div`
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
`;let eb=o().div`
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
`;let ey=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,ew=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${q};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${q};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,ej=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,ev=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,e$=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,ek=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${q};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,eM=o().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eT=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,eS=o().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eF=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,ez=o().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,eC=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eI=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eR=o().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,eD=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eE=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-of-type {
    margin-top: 0;
  }
`,eA=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,eL=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eB=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eO=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eP=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,eN=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eW=o().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eY=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eU="finance:list-density",eq="finance:quick-categories",eK="finance:forecast-months",eH="finance:active-member",eZ="finance:insights-layout",e_="finance:overview-layout",eV=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eJ=[{id:"overview-hero",size:"lg"},{id:"overview-accounts",size:"md"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eG=o().input`
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
`,eX=o().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eQ=o().li`
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
`,e0=o().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,e4=o().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,e1=o().div`
  flex: 1;
  min-width: 0;
`,e2=o().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e6=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,e3=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,e8=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e5=o().span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  /* Each avatar after the first overlaps by half its width */
  & > * + * {
    margin-left: -${({size:e})=>Math.round(.45*e)}px;
  }
`,e7=o().span`
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
`,e9=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${q}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?q:"#facc15"};
  white-space: nowrap;
`,ne=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${q}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?q:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${q}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
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
    color: ${q};
    background: ${q}1a;
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ni=o().button`
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
    color: ${K};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,nt=o().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${q}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${q}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,na=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?K:"warning"===e?"#facc15":"success"===e?q:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,nr=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,no=o().button`
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
`;o()(ew)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let ns=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,nl=o().button`
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
`,nc=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,nd=o().input`
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
`,np=o().select`
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
`,nm=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${q};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nu=o().div`
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
`,nx=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nf=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,ng=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${q};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,nh=o().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${q};
  animation: ${nf} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nb=o().div`
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
  animation: ${H} 0.2s ease both;

  strong {
    color: ${l.w4.colors.mainText};
    font-weight: 600;
  }
`,ny=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?q:l.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${q}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${q}44`:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${q}28`:l.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?q:l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,nw=o().button`
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
`,nj=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${H} 0.2s ease;
`,nv=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,n$=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,nk=o().button`
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
`,nM=o().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?q:l.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?q:l.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${q};
    color: ${q};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,nT=o().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nS=o().ul`
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
`,nF=o().li`
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
`,nz=o().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nC=o().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nI=o().li`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${l.w4.spacing.sm} 2px;
  pointer-events: none;
`,nR=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,nD=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nE=o().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nA=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nL=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nB=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,nO=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nP=o().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nN=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${q}; }
`,nW=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nY=o().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,nU=o().input`
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
`,nq=o().input`
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
`,nK=o().select`
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
`;let nH=o().button`
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
`,nZ=o().div`
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
`;let n_=o().footer`
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
`,nV=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,nJ=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nG=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nX=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} ${l.w4.borderRadius.md} ${l.w4.borderRadius.md};
  border-left: 2px solid ${q};
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
`,nQ=o().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,n0=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,n4=o().button`
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
`,n1=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n2=o().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n6=o().button`
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
`,n3=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,n8=o().button`
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
`,n5=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n7=o().input`
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
`,n9=o().select`
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
`,ie=o().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`,ii=o().input`
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
`,it=o().div`
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
`,ia=o().ul`
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
`,ir=o().li`
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,io=o().div`
  position: relative;
`,is=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function il(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function ic(e){return Math.round(e).toLocaleString("pt-PT")}function id(){return new Date().toISOString().slice(0,10)}function ip(e,n){let[i,t,a]=e.split("-").map(Number);return new Date(i,t-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function im(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function iu({topBarRight:e}){let n,[i]=(0,x.Ym)(),r=(0,a.useMemo)(()=>(0,x.Nx)(i,g.A),[i]),{data:o,loaded:s,save:H}=(0,d.useFinance)(),Z=o??{...d.EMPTY_FINANCE_DATA},[eG]=(0,d.useProfile)(),e5=(0,a.useMemo)(()=>(0,d.recentMerchants)(Z.expenses,20).slice(0,6),[Z.expenses]),{canUndo:e7,latestLabelKey:e9,undo:ne}=(0,d.useUndo)(),[nn,nf]=(0,a.useState)(null),nX=(0,a.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:Z,labelKey:n,ts:Date.now()}),nf(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await H(e)},[Z,H]),nQ=(0,a.useCallback)(async()=>{let e=ne();e&&(nf("finance.undo.label.reverted"),await H(e),setTimeout(()=>nf(null),2500))},[ne,H]),[n0,n4]=(0,a.useState)("overview"),[n1,n2]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[n6,n3]=(0,a.useState)("shared");(0,a.useEffect)(()=>{(0,l.PL)(eH).then(e=>{e&&n3(e)})},[]);let n8=(0,a.useCallback)(e=>{n3(e),(0,l.Is)(eH,e)},[]),[n5,n7]=(0,a.useState)("1m");(0,a.useEffect)(()=>{(0,l.PL)("finance:timeline:range").then(e=>{("1m"===e||"3m"===e||"6m"===e||"1y"===e)&&n7(e)})},[]);let n9=(0,a.useCallback)(e=>{n7(e),(0,l.Is)("finance:timeline:range",e)},[]),[ie,ii]=(0,a.useState)(!1),[it,ia]=(0,a.useState)(!1),[ir,io]=(0,a.useState)([]),[is,iy]=(0,a.useState)(!1),[iw,ij]=(0,a.useState)(!1),[iv,i$]=(0,a.useState)(null),ik=+(ir.length>0)+ +!!is,[iM,iT]=(0,a.useState)(!1),[iS,iF]=(0,a.useState)({}),iz=(0,a.useMemo)(()=>{let e=0;return iS.text&&e++,iS.memberId&&e++,iS.categoryId&&e++,(iS.dateFrom||iS.dateTo)&&e++,(void 0!==iS.amountMin||void 0!==iS.amountMax)&&e++,iS.tags&&iS.tags.length>0&&e++,e},[iS]),iC=(0,a.useCallback)(e=>{let n=[...Z.savedViews??[],e];H({...Z,savedViews:n})},[Z,H]),iI=(0,a.useCallback)(e=>{let n=(Z.savedViews??[]).filter(n=>n.id!==e);H({...Z,savedViews:n})},[Z,H]),iR=(0,M.E)();(0,a.useEffect)(()=>{"expenses"!==n0&&iR.selectMode&&iR.exitSelectMode()},[n0]);let{range:iD,setRange:iE}=(0,p.H)("month"),iA=(0,a.useRef)(null),iL=(0,a.useRef)(null),iB=(0,a.useRef)(null),[iO,iP]=(0,a.useState)(!1),[iN,iW]=(0,a.useState)(""),[iY,iU]=(0,a.useState)(!1),[iq,iK]=(0,a.useState)(""),iH=(0,a.useRef)(null),[iZ,i_]=(0,a.useState)(""),[iV,iJ]=(0,a.useState)("shared"),[iG,iX]=(0,a.useState)(null),[iQ,i0]=(0,a.useState)(!1),i4=(0,a.useRef)(null),[i1,i2]=(0,a.useState)(null),[i6,i3]=(0,a.useState)("EUR"),[i8,i5]=(0,a.useState)(!1),[i7,i9]=(0,a.useState)(!1),te=(0,B.x)(),tn=(0,a.useRef)(null),ti=(0,a.useRef)(!1),[tt,ta]=(0,a.useState)(!1),[tr,to]=(0,a.useState)(-1),ts=(0,a.useRef)(null),[tl,tc]=(0,a.useState)(""),[td,tp]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,l.PL)(eq).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&tp(n)}catch{}})},[]);let[tm,tu]=(0,a.useState)(!1),[tx,tf]=(0,a.useState)(!1),[tg,th]=(0,a.useState)(!1),tb=(0,a.useCallback)(e=>{let n=e-(0,d.computeCurrentBalance)(Z);if(0===n)return void th(!1);let i=(Z.budget.openingBalance??0)+n,t=Z.accounts??[],a=Z.defaultAccountId??t[0]?.id,r=a?t.map(e=>e.id===a?{...e,openingBalance:e.openingBalance+n}:e):t;nX({...Z,budget:{...Z.budget,openingBalance:i},accounts:r},"finance.undo.label.edited"),th(!1)},[Z,nX]),ty=(0,a.useCallback)(e=>{nX({...Z,income:[e,...Z.income]},"finance.undo.label.added"),tf(!1),i4.current&&clearTimeout(i4.current),i0(!0),i4.current=setTimeout(()=>i0(!1),2e3)},[Z,nX]),tw=(0,a.useCallback)((e,n,i,t)=>{let a=i?[i,...Z.recentDescriptions].filter(Boolean).slice(0,20):Z.recentDescriptions,r={...Z,expenses:[...e,...Z.expenses],categoryHints:n,recentDescriptions:a};for(let e of t)r=(0,d.addRecentTag)(r,e);nX(r,"finance.undo.label.added"),tu(!1),i4.current&&clearTimeout(i4.current),i0(!0),i4.current=setTimeout(()=>i0(!1),2e3)},[Z,nX]),[tj,tv]=(0,a.useState)(""),[t$,tk]=(0,a.useState)(""),[tM,tT]=(0,a.useState)(!1),[tS,tF]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,l.PL)(eU).then(e=>{("compact"===e||"comfortable"===e)&&tF(e)})},[]),(0,a.useCallback)(()=>{let e="comfortable"===tS?"compact":"comfortable";tF(e),(0,l.Is)(eU,e)},[tS]);let[tz,tC]=(0,a.useState)(3);(0,a.useEffect)(()=>{(0,l.PL)(eK).then(e=>{"6"===e?tC(6):"12"===e&&tC(12)})},[]);let tI=(0,a.useCallback)(e=>{tC(e),(0,l.Is)(eK,String(e))},[]),tR=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),[tD,tE]=(0,a.useState)(eV);(0,a.useEffect)(()=>{(0,l.PL)(eZ).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eV.filter(e=>!i.has(e.id))];tE(t)}catch{}})},[]);let tA=(0,a.useCallback)((e,n)=>{tE(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,l.Is)(eZ,JSON.stringify(r)),r})},[]),tL=(0,a.useCallback)(e=>{tE(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,l.Is)(eZ,JSON.stringify(r)),r})},[]),[tB,tO]=(0,a.useState)(eJ);(0,a.useEffect)(()=>{(0,l.PL)(e_).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eJ.filter(e=>!i.has(e.id))];tO(t)}catch{}})},[]);let tP=(0,a.useCallback)((e,n)=>{tO(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,l.Is)(e_,JSON.stringify(r)),r})},[]),tN=(0,a.useCallback)(e=>{tO(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,l.Is)(e_,JSON.stringify(r)),r})},[]),tW=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(Z),[Z]),tY=(0,a.useMemo)(()=>(0,d.safeToSpendToday)(Z),[Z]);(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(Z,n1),[Z,n1]);let tU=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(Z),[Z]),{insights:tq,dismiss:tK}=(0,d.useFinanceAnomalies)(),tH=(0,a.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=d.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??Z.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,d.categoryLabel)(n,i)}:e},[Z.categories,i]),tZ=(0,a.useMemo)(()=>(0,d.availableMonths)(Z),[Z]),t_=(0,a.useMemo)(()=>(0,d.filterExpensesByRange)(Z.expenses,iD,n1),[Z.expenses,iD,n1]),tV=(0,a.useMemo)(()=>(0,d.filterIncomeByRange)(Z.income,iD,n1),[Z.income,iD,n1]),tJ=(0,a.useMemo)(()=>{let e=(0,d.expensesForMember)(t_,n6);return ir.length>0&&(e=e.filter(e=>ir.includes(e.categoryId))),is&&(e=e.filter(e=>!0===e.isReimbursable)),iz>0&&(e=(0,d.applyExpenseFilter)(e,iS)),e},[t_,n6,ir,is,iS,iz]),tG=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(Z,n6,tR),[Z,n6,tR]),tX=(0,a.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tR),[tR]),tQ=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(Z,n6,tX),[Z,n6,tX]),t0=(0,a.useMemo)(()=>0===tQ?0:Math.round((tG-tQ)/tQ*100),[tG,tQ]),t4=(0,a.useMemo)(()=>{if("all"===n6)return r("finance.member.all");if("shared"===n6)return r("finance.hero.family");let e=Z.familyMembers.find(e=>e.id===n6);return e?.name??r("finance.hero.family")},[n6,Z.familyMembers,r]),t1=(0,a.useMemo)(()=>{if("all"===n6||"shared"===n6)return l.w4.colors.mainTextMuted;let e=Z.familyMembers.findIndex(e=>e.id===n6);return -1===e?q:(0,h.a8)(Z.familyMembers[e],e)},[n6,Z.familyMembers]),t2=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let a=new Date(t);return a.setDate(t.getDate()+7),(0,d.expensesForMember)(Z.expenses,n6).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<a}).reduce((e,n)=>e+n.amount,0)})},[Z.expenses,n6]),t6=(0,a.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),r=(0,d.expensesForMember)(t,n),o={};for(let e of r)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:im(e).color})),over:s>a?s-a:0}})})(Z,n6),[Z,n6]),t3=(0,a.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let a=89;a>=0;a--){let r=new Date(i);r.setDate(i.getDate()-a);let o=r.toISOString().slice(0,10),s=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s),p=c.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=c.reduce((e,n)=>e+n.amount,0)/30,u=p/30;t.push({inc:m,incGoal:u,exp:l})}return t})(Z,n6),[Z,n6]),t8=(0,a.useMemo)(()=>(0,d.forecastCashFlow)(Z,tz),[Z,tz]),t5=(0,a.useMemo)(()=>(0,d.firstNegativeDay)(t8),[t8]),t7=(0,a.useMemo)(()=>{let e,n,i;return e=u.zA[n5],n=new Date,i=Z.expenses.length>0?Z.expenses.reduce((e,n)=>e+n.amount,0)/Z.expenses.length:20,Array.from({length:e},(t,a)=>{let r=(0,u.x)(a,e,n),o=(0,d.expensesForMember)(Z.expenses.filter(e=>e.date===r),n6).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/i;return s<.5?1:s<1?2:s<2?3:4})},[Z,n6,n5]),t9=(0,a.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(Z.expenses,n6)),[Z.expenses,n6]),ae=(0,a.useMemo)(()=>{let e=[];return e.push({key:"shared",label:r("finance.income.member.shared"),color:l.w4.colors.mainTextMuted,incomeSpk:(0,d.incomeSparkline)(Z.income,"shared"),spendSpk:(0,d.memberSparkline)(Z.expenses,"shared"),incomeTotal:(0,d.incomeForMember)(Z.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(Z.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(Z.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(Z.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(Z,"shared",6)}),Z.familyMembers.forEach((n,i)=>{let t=(0,h.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,d.incomeSparkline)(Z.income,n.id),spendSpk:(0,d.memberSparkline)(Z.expenses,n.id),incomeTotal:(0,d.incomeForMember)(Z.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(Z.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(Z.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(Z.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(Z,n.id,6)})}),e},[Z,r]),an=(0,a.useMemo)(()=>{let e=Object.entries((0,d.incomeByMember)(Z.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:r("finance.income.member.shared"),value:n,color:l.w4.colors.mainTextMuted};let i=Z.familyMembers.findIndex(n=>n.id===e),t=Z.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,h.a8)(t,i):l.w4.colors.accent}})},[Z,r]),ai=(0,a.useMemo)(()=>an.reduce((e,n)=>e+n.value,0),[an]),at=tW.budget>0?tW.spent/tW.budget*100:0,aa=Z.budget.monthlyBudget>0?tG/Z.budget.monthlyBudget*100:0,ar=(0,a.useMemo)(()=>{let e=iY&&iq.trim()?iq.trim():(0,d.parseQuickInput)(iN,Z.familyMembers)?.description;return e?(0,d.guessCategoryWithRules)(Z,e):"other"},[iN,iY,iq,Z]),ao=iZ||tl||ar,as=(0,a.useMemo)(()=>(0,d.parseRecurringHint)(iN),[iN]);(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(iN,Z.familyMembers);e?.memberId&&iJ(e.memberId)},[iN,Z.familyMembers]);let al=(0,a.useCallback)(()=>{let e=(0,d.parseQuickInput)(iN,Z.familyMembers),n=(0,d.parseRecurringHint)(iN);if(!e||!n)return;let i=new Date,t=i.getFullYear(),a=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0");i2({amount:e.amount,description:e.description||(ao??"other"),categoryId:ao||"other",cadence:n.cadence,firstDue:`${t}-${a}-${r}`})},[iN,Z.familyMembers,ao]),ac=(0,a.useCallback)(()=>{if(!i1)return;let e=new Date(i1.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:i1.description,amount:i1.amount,categoryId:i1.categoryId,cadence:i1.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iV?iV:void 0};nX({...Z,recurringRules:[...Z.recurringRules??[],n]},"finance.undo.label.added"),i2(null),iW(""),i_(""),tc(""),i4.current&&clearTimeout(i4.current),i0(!0),i4.current=setTimeout(()=>i0(!1),2e3)},[i1,Z,iV,nX]),ad=(0,a.useCallback)(async e=>{let n;e.preventDefault();let i=iY&&iq.trim()?iq.trim():void 0,t=(0,d.parseQuickInput)(iN,Z.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let a=ao||"other",r=t.memberId??("shared"!==iV?iV:void 0),o=t.tags??[],s=t.description?(0,d.normalizeMerchant)(t.description):void 0,c=id(),p=t.amount;if("EUR"!==i6){i9(!0),i5(!1);let e=await (0,d.convertToEUR)({amount:t.amount,code:i6,date:c});if(i9(!1),!e)return void i5(!0);p=e.eur,n={code:i6,rate:e.rate,original:t.amount}}let m={id:(0,f.z)(),amount:p,date:c,categoryId:a,description:t.description||a,type:"daily",...t.split?{split:t.split}:{childId:r},createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{},...Z.defaultAccountId?{accountId:Z.defaultAccountId}:{}};ta(!1),i5(!1);let u={...Z.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=a)});let x=[t.description||"",...Z.recentDescriptions].filter(Boolean).slice(0,20),g=[m,...Z.expenses],h={...Z,expenses:g,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,d.addRecentTag)(h,e);nX(h,"finance.undo.label.added");let b=(0,v.j)(g);tp(b),(0,l.Is)(eq,JSON.stringify(b)),iW(""),iK(""),iU(!1),i_(""),tc(""),iX(null),i4.current&&clearTimeout(i4.current),i0(!0),i4.current=setTimeout(()=>i0(!1),2e3)},[iN,iY,iq,ao,iV,i6,Z,nX]),ap=(0,a.useCallback)(e=>{(0,m.K)([10,50,10]);let n=(0,d.parseQuickInput)(e,Z.familyMembers);if(n){let e=iZ||tl||(n.description?(0,d.guessCategoryWithRules)(Z,n.description):"other"),i=n.memberId??("shared"!==iV?iV:void 0),t=n.tags??[],a={id:(0,f.z)(),amount:n.amount,date:id(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},r={...Z.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(r[n]=e)});let o=[n.description||"",...Z.recentDescriptions].filter(Boolean).slice(0,20),s={...Z,expenses:[a,...Z.expenses],categoryHints:r,recentDescriptions:o};for(let e of t)s=(0,d.addRecentTag)(s,e);nX(s,"finance.undo.label.added");let c=(0,v.j)([a,...Z.expenses]);tp(c),(0,l.Is)(eq,JSON.stringify(c)),iW(""),i_(""),tc(""),i4.current&&clearTimeout(i4.current),i0(!0),i4.current=setTimeout(()=>i0(!1),2e3)}else iW(e),iL.current?.focus()},[Z,iZ,tl,iV,nX]),am=(0,a.useCallback)(e=>{nX({...Z,expenses:Z.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[Z,nX]),au=(0,a.useCallback)(e=>{let n=Z.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,f.z)(),date:id(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nX({...Z,expenses:[i,...Z.expenses]},"finance.undo.label.added")},[Z,nX]),ax=(0,a.useCallback)(e=>{nX({...Z,income:Z.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[Z,nX]),af=(0,a.useCallback)(e=>{nX({...Z,expenses:Z.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[Z,nX]),ag=(0,a.useCallback)(()=>{let e=parseFloat(tj)||Z.budget.weeklyBudget,n=parseFloat(t$)||Z.budget.monthlyBudget;H({...Z,budget:{...Z.budget,weeklyBudget:e,monthlyBudget:n}}),tT(!0),setTimeout(()=>tT(!1),2e3)},[tj,t$,Z,H]),ah=(0,a.useCallback)(()=>{let e=iR.selectedIds;0!==e.size&&(nX({...Z,expenses:Z.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iR.exitSelectMode())},[iR,Z,nX]),ab=(0,a.useCallback)(e=>{let n=iR.selectedIds;0!==n.size&&(nX({...Z,expenses:Z.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iR.exitSelectMode())},[iR,Z,nX]),ay=(0,a.useCallback)(()=>{let e=iR.selectedIds;0!==e.size&&(nX({...Z,expenses:Z.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iR.exitSelectMode())},[iR,Z,nX]),aw=(0,a.useMemo)(()=>["shared",...Z.familyMembers.map(e=>e.id)],[Z.familyMembers]);(0,j.K)({quickAddInputRef:iL,monthSelectRef:iB,memberIds:aw,activeMemberId:n6,onSelectMember:n8,onSetTab:e=>n4(e),expenseModalOpen:tm,onOpenExpenseModal:()=>tu(!0),shortcutsOpen:iO,onToggleShortcuts:()=>iP(e=>!e),onOpenSearch:()=>{n4("expenses"),iT(!0)}});let aj=[{value:"week",label:r("finance.range.pill.7d")},{value:"month",label:r("finance.range.pill.month")},{value:"3m",label:r("finance.range.pill.3m")},{value:"6m",label:r("finance.range.pill.6m")},{value:"1y",label:r("finance.range.pill.year")}],av=Math.floor(tG).toLocaleString("pt-PT"),a$=(tG%1).toFixed(2).slice(1),ak=(0,a.useMemo)(()=>{if(0===(Z.goals??[]).length)return null;let e=(0,d.recomputeGoalCurrents)(Z);return{onTrack:e.goals.filter(e=>"behind"!==(0,d.goalStatus)(e)).length,total:e.goals.length}},[Z]),aM=(()=>{let[e,n]=tR.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),aT=(0,t.jsx)(h.TA,{data:Z,activeMemberId:n6,onSelectMember:n8,onSaveData:H,t:r,locale:i}),aS=(0,a.useMemo)(()=>{let e={};for(let n of tJ)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:im(e).color}))},[tJ]),aF=aS.reduce((e,n)=>e+n.value,0),az=(0,a.useMemo)(()=>t6.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[t6]),aC=t6.length>0?az/t6.length:0,aI=t6.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>Z.budget.monthlyBudget).length,aR=(0,a.useMemo)(()=>{if(0===tJ.length)return null;let e=tJ.reduce((e,n)=>n.amount>e.amount?n:e,tJ[0]),n={};for(let e of tJ){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?Z.familyMembers.find(e=>e.id===i[0]):void 0,a=t?.name??r("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tJ){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tJ.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:a,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tJ,Z.familyMembers,r]),aD="kid"===eG.ageMode&&"shared"!==n6&&"all"!==n6?Z.familyMembers.find(e=>e.id===n6&&"child"===e.role)??null:null;return aD?(0,t.jsx)(c.PE,{title:r("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(N.N,{member:aD,data:Z,t:r})}):(0,t.jsxs)(c.PE,{title:r("finance.appTitle"),sidebar:aT,topBarRight:e,activeId:n6,children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(V,{children:(0,t.jsx)(h.jb,{data:Z,activeMemberId:n6,onSelectMember:n8,t:r,locale:i})}),(0,t.jsxs)(G,{children:[(0,t.jsx)(X,{children:(0,t.jsx)("div",{role:"tablist","aria-label":r("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:r("finance.tab.overview"),expenses:r("finance.tab.expenses"),insights:r("finance.tab.insights")},i={overview:0,expenses:tJ.length,insights:tU.length}[e];return(0,t.jsxs)(ee,{type:"button",role:"tab","aria-selected":n0===e,active:n0===e,onClick:()=>n4(e),children:[n[e],i>0&&(0,t.jsxs)(en,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(c.ms,{align:"right",trigger:(0,t.jsx)(c.$n,{variant:ik>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(c.In,{name:"filter",size:13,"aria-hidden":!0}),children:ik>0?r("finance.filters.activeCount",{n:ik}):r("finance.actions.filters")}),children:[(0,t.jsx)(c.o_,{children:r("finance.filters.member")}),["shared",...Z.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?r("finance.hero.family"):Z.familyMembers.find(n=>n.id===e)?.name??e,i=e===n6;return(0,t.jsx)(c.tJ,{onClick:()=>n8(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(c.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.o_,{children:r("finance.filters.category")}),(0,t.jsx)(c.tJ,{onClick:()=>io([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===ir.length&&(0,t.jsx)(c.In,{name:"check",size:12}),ir.length>0&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.allCategories")]})}),d.DEFAULT_CATEGORIES.map(e=>{let n=ir.includes(e.id);return(0,t.jsx)(c.tJ,{onClick:()=>io(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(c.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.tJ,{onClick:()=>iy(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[is&&(0,t.jsx)(c.In,{name:"check",size:12}),!is&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.reimbursableOnly")]})}),ik>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.tJ,{onClick:()=>{io([]),iy(!1)},children:r("finance.filters.reset")})]})]}),(0,t.jsx)(c.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(c.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>ij(!0),children:r("finance.actions.categories")}),"expenses"===n0&&(0,t.jsx)(W.g,{count:iz,onClick:()=>iT(e=>!e),label:r("finance.search.openSearch")}),"expenses"===n0&&(0,t.jsx)(c.$n,{variant:iR.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iR.selectMode?iR.exitSelectMode():iR.enterSelectMode()},children:r("finance.bulk.select")}),"overview"===n0&&(0,t.jsx)(c.K0,{onClick:()=>{ia(!0),requestAnimationFrame(()=>{window.print()})},title:r("finance.report.button"),"aria-label":r("finance.report.button"),children:(0,t.jsx)(c.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(c.K0,{onClick:()=>ii(!0),title:r("finance.actions.settings"),"aria-label":r("finance.actions.settings"),active:ie,children:(0,t.jsx)(c.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(J,{children:(0,t.jsx)(c.K0,{onClick:()=>iP(e=>!e),title:r("finance.shortcuts.title"),"aria-label":r("finance.shortcuts.title"),active:iO,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(et,{"aria-label":r("finance.range.label"),children:aj.map(({value:e,label:n})=>(0,t.jsx)(ei,{type:"button",active:iD===e,onClick:()=>{iE(e),"month"===e&&n2(tR)},"aria-pressed":iD===e,children:n},e))}),"expenses"===n0&&(0,t.jsx)(W.P,{open:iM,query:iS,onQueryChange:iF,savedViews:Z.savedViews??[],onSaveView:iC,onDeleteView:iI,onClose:()=>iT(!1),members:Z.familyMembers,categories:[...d.DEFAULT_CATEGORIES,...Z.categories??[]],locale:i,recentTags:Z.recentTags}),"month"===iD&&Z.expenses.length>0&&(0,t.jsx)($.f,{data:Z,selectedMonth:n1,onSelectMonth:n2,locale:i,t:r}),"overview"===n0&&Z.budget.weeklyBudget>0&&(0,t.jsx)(U.e,{data:Z,t:r,locale:i}),(0,t.jsxs)(eb,{children:["overview"===n0&&(0,t.jsxs)(ey,{children:[(0,t.jsxs)(eo,{ref:iA,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:l.w4.colors.mainTextMuted},children:r("finance.quickAdd.title")}),tW.budget>0?(0,t.jsxs)(nu,{status:tY.status,title:r("finance.safeToSpend.label"),"aria-label":`${r("finance.safeToSpend.label")} €${tY.amount.toFixed(0)}`,children:[(0,t.jsx)("span",{className:"label",children:r("finance.safeToSpend.label")}),"danger"===tY.status?(0,t.jsx)("span",{className:"amount",children:r("finance.safeToSpend.over",{n:Math.abs(tY.remaining).toFixed(0)})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"amount",children:r("finance.safeToSpend.amount",{amount:tY.amount.toFixed(0)})}),(0,t.jsx)("span",{className:"suffix",children:r("finance.safeToSpend.suffix",{n:tY.daysRemaining})})]})]}):null]}),(0,t.jsxs)(nm,{visible:iQ&&!te.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",r("finance.quickAdd.added")]}),te.listening&&(0,t.jsxs)(ng,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nh,{}),r("finance.voice.listening")]}),(0,t.jsxs)(c.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tf(!0),children:["+ ",r("finance.quickAdd.addIncome")]}),(0,t.jsxs)(c.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>th(!0),children:["⚖ ",r("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:ad,"aria-label":r("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(ns,{children:[{id:"shared",name:r("finance.member.shared"),role:"shared",color:void 0},...Z.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(Z.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(nl,{type:"button",active:iV===e.id,color:i,onClick:()=>iJ(e.id),children:[(0,t.jsx)(c.eu,{member:a,size:18}),e.name]},e.id)})}),(0,t.jsxs)(nc,{children:[(0,t.jsxs)(nT,{children:[(0,t.jsx)(nd,{ref:iL,type:"text",placeholder:iY?r("finance.quickAdd.amountOnlyPlaceholder"):r("finance.quickAdd.placeholder"),value:iN,onChange:e=>{iW(e.target.value),i_(""),ta(e5.length>0),to(-1)},onFocus:()=>{e5.length>0&&!iN.trim()&&ta(!0)},onBlur:()=>{setTimeout(()=>ta(!1),150)},onKeyDown:e=>{if(tt&&0!==e5.length)if("ArrowDown"===e.key)e.preventDefault(),to(e=>Math.min(e+1,e5.length-1));else if("ArrowUp"===e.key)e.preventDefault(),to(e=>Math.max(e-1,-1));else if("Enter"===e.key&&tr>=0){e.preventDefault();let n=e5[tr];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iN);iW(e?iN.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),i_(""),ta(!1),to(-1)}}else"Escape"===e.key&&(ta(!1),to(-1))},"aria-label":r("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":tt&&e5.length>0,autoComplete:"off",inputMode:"decimal"}),tt&&e5.length>0&&(0,t.jsxs)(nS,{ref:ts,role:"listbox","aria-label":r("finance.merchant.recent"),children:[(0,t.jsx)(nI,{role:"presentation",children:r("finance.merchant.recent")}),e5.map((e,n)=>(0,t.jsxs)(nF,{role:"option","aria-selected":tr===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iN);iW(i?iN.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),i_(""),ta(!1),to(-1),iL.current?.focus()},children:[(0,t.jsx)(nz,{children:e.merchant}),(0,t.jsxs)(nC,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(es,{type:"button","aria-pressed":iY,"aria-label":iY?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iY;iU(e),e&&requestAnimationFrame(()=>iH.current?.focus())},children:[(0,t.jsx)(c.In,{name:iY?"close":"plus",size:11}),iY?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(np,{value:iZ||ar,onChange:e=>{let n=e.target.value,i=iZ||ar;i_(n);let t=iY&&iq.trim()?iq.trim():(0,d.parseQuickInput)(iN,Z.familyMembers)?.description;t&&iX((0,d.proposeRuleFromOverride)(i,n,t))},"aria-label":r("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(np,{value:i6,onChange:e=>{i3(e.target.value),i5(!1)},"aria-label":r("finance.currency.label"),style:{maxWidth:72},children:d.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iN.trim()||i7,children:i7?r("finance.currency.converting"):r("finance.quickAdd.add")}),te.supported&&(0,t.jsx)(nM,{type:"button","aria-label":r("finance.voice.listening"),"aria-pressed":te.listening,active:te.listening,onPointerDown:()=>{tn.current=window.setTimeout(()=>{tn.current=null,ti.current=!0,(0,m.K)(30),te.listening?te.stop():te.start(ap)},500)},onPointerUp:()=>{null!==tn.current&&(clearTimeout(tn.current),tn.current=null,ti.current||((0,m.K)(10),te.listening?te.stop():te.start(ap))),ti.current=!1},onPointerCancel:()=>{null!==tn.current&&(clearTimeout(tn.current),tn.current=null),ti.current=!1},children:(0,t.jsx)(c.In,{name:"mic",size:16})})]}),(0,t.jsx)(el,{visible:iY,children:(0,t.jsx)(ec,{ref:iH,type:"text",placeholder:r("finance.quickAdd.descPlaceholder"),maxLength:80,value:iq,onChange:e=>iK(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iU(!1),iL.current?.focus())},"aria-label":r("finance.quickAdd.descPlaceholder"),tabIndex:iY?0:-1})}),(0,t.jsx)(v.J,{expenses:Z.expenses,storedOrder:td,lockedCategoryId:tl,onToggle:e=>tc(n=>n===e?"":e),locale:i,groupLabel:r("finance.quickAdd.frequentCategories")}),iG&&(0,t.jsxs)(nb,{children:[(0,t.jsxs)("span",{children:[r("finance.categoryRules.alwaysCategorize",{match:iG.match})," ",(0,t.jsx)("strong",{children:(n=d.DEFAULT_CATEGORIES.find(e=>e.id===iG.categoryId))?(0,d.categoryLabel)(n,i):iG.categoryId}),"?"]}),(0,t.jsx)(ny,{type:"button",accent:!0,onClick:()=>{Z&&iG&&(nX({...Z,categoryRules:[iG,...Z.categoryRules??[]]},"finance.undo.label.added"),iX(null))},children:r("finance.categoryRules.propose")}),(0,t.jsx)(ny,{type:"button",onClick:()=>iX(null),children:r("finance.categoryRules.dismiss")})]}),i8&&(0,t.jsx)(nx,{style:{color:K},role:"alert",children:r("finance.currency.fxFailed")}),as&&(0,d.parseQuickInput)(iN,Z.familyMembers)&&(0,t.jsxs)(nw,{type:"button",onClick:al,"aria-label":r("finance.recurring.makeRecurring"),children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsx)(nx,{children:r("finance.quickAdd.hint")})]})]}),(0,t.jsx)(c.dO,{items:tB.map(e=>({...e})),onReorder:tP,onCycleSize:tN,accentColor:()=>q,labels:{moveLeft:r("finance.overview.panel.moveLeft"),moveRight:r("finance.overview.panel.moveRight"),cycleSize:r("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(ek,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eM,{children:[(0,t.jsxs)(eT,{children:[r("finance.hero.spentIn")," ",aM," \xb7 ",t4]}),(0,t.jsxs)(eS,{children:[(0,t.jsx)(eF,{children:"€"}),(0,t.jsx)(ez,{children:av}),(0,t.jsx)(eC,{children:a$})]}),(0,t.jsxs)(eI,{children:[(0,t.jsx)(u.Ru,{value:t0,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[r("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(tX,i)," \xb7 €",ic(tQ)]})]}),t2.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:t2,accent:t1,width:280,height:34})}),null!==ak&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:ak.onTrack===ak.total?"#7fb77e":l.w4.colors.mainTextMuted},children:r("finance.goals.hero",{on:ak.onTrack,total:ak.total})})]}),(0,t.jsx)(eR,{children:(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{children:r("finance.budget.weekly")}),(0,t.jsxs)(eL,{children:["€",ic(tW.spent)," ",(0,t.jsxs)(eB,{children:["/ €",tW.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:at,over:at>100?at-100:0}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)("span",{children:[Math.round(at),"% ",r("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tW.remaining<0?K:q},children:tW.remaining>0?`€${ic(tW.remaining)} ${r("finance.budget.remaining")}`:`€${ic(Math.abs(tW.remaining))} ${r("finance.budget.over")}`})]}),(0,t.jsxs)(eE,{style:{marginTop:14},children:[(0,t.jsx)(eA,{children:r("finance.budget.monthly")}),(0,t.jsxs)(eL,{children:["€",ic(tG)," ",(0,t.jsxs)(eB,{children:["/ €",Z.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:aa,over:aa>100?aa-100:0}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)("span",{children:[Math.round(aa),"% ",r("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[r("finance.budget.projected")," €",ic(tG+(tW.projectedTotal-tW.spent))]})]})]})})]});case"overview-accounts":return(0,t.jsx)(Y.V,{data:Z,t:r,onSave:e=>{nX(e,"finance.undo.label.edited")}});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:r("finance.charts.sixMonths")}),(0,t.jsx)(e$,{children:(0,t.jsx)(nV,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nJ,{children:[(0,t.jsx)(nG,{color:e.color}),(0,d.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(u.ik,{data:t6,budget:Z.budget.monthlyBudget,height:200}),(0,t.jsxs)(nR,{children:[(0,t.jsxs)(nD,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nE,{children:["€",ic(az)]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nE,{children:["€",ic(aC)]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nE,{children:[aI," / ",t6.length]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nE,{style:{color:t0>0?K:q},children:[t0>0?"+":"",t0,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:r("finance.charts.byCategory")}),(0,t.jsx)(nH,{type:"button",onClick:()=>n4("insights"),children:r("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:aS,total:aF,size:110,centerLabel:aM.slice(0,3),centerValue:`€${ic(aF)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:aS.map(e=>{let n=im(e.id),a=(0,d.expensesForMember)((0,d.expensesForMonth)(Z.expenses,tX),n6).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),r=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:e.color}),(0,t.jsx)(eW,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eY,{children:["€",ic(e.value)]}),Math.abs(r)>1&&(0,t.jsx)(u.Ru,{value:r,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ev,{children:r("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.forecast.sub",{n:tz})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(ei,{type:"button",active:tz===e,onClick:()=>tI(e),"aria-pressed":tz===e,children:r(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(I.b,{forecast:t8,firstNegDate:t5,t:r,locale:i,height:170}),t3.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:l.w4.spacing.md,paddingTop:l.w4.spacing.sm,borderTop:`1px solid ${l.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:l.w4.colors.mainTextMuted},children:r("finance.charts.cashflow")})}),(0,t.jsx)(u.uj,{data:t3,height:130,legendIn:r("finance.charts.in"),legendOut:r("finance.charts.out"),legendGoal:r("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:r("finance.charts.heatmap")}),(0,t.jsx)(u.zy,{range:n5,onChange:n9,labels:{"1m":r("finance.timeline.range.1m"),"3m":r("finance.timeline.range.3m"),"6m":r("finance.timeline.range.6m"),"1y":r("finance.timeline.range.1y")}})]}),(0,t.jsx)(u.RT,{data:t7,locale:i}),(0,t.jsxs)(nA,{children:[(0,t.jsx)("span",{children:r("finance.charts.less")}),(0,t.jsx)(nL,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:r("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ed,{children:(0,t.jsx)(c.YZ,{children:r("finance.heatmap.title")})}),(0,t.jsx)(b.D,{matrix:t9,locale:i,t:r})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ej,{children:(0,t.jsx)(ev,{children:r("finance.charts.thisWeek")})}),(0,t.jsxs)(nB,{children:[(0,t.jsxs)(nO,{children:[(0,t.jsxs)(nP,{children:["€",ic(tW.spent)]}),(0,t.jsxs)(eB,{children:["/ €",tW.budget]})]}),(0,t.jsx)(u.kl,{spent:tW.spent,budget:tW.budget}),(0,t.jsxs)(nN,{children:[(0,t.jsx)("span",{children:r("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:r("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(c.YZ,{children:r("finance.recent.title")}),tJ.length>8&&(0,t.jsx)(nH,{type:"button",onClick:()=>n4("expenses"),children:r("finance.recent.viewAll",{n:tJ.length})})]}),0===tJ.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:r("finance.dashboard.noRecent")}):(0,t.jsx)(eX,{"aria-label":r("finance.recent.title"),children:tJ.slice(0,8).map(e=>(0,t.jsx)(ib,{exp:e,finData:Z,locale:i,t:r,onDelete:am,onClone:au,onToggleReimbursed:af,compact:"compact"===tS},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.incomeMix.title")}),0===an.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,padding:`${l.w4.spacing.md} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:an,total:ai,size:100,centerLabel:r("finance.byMember.income"),centerValue:`€${ic(ai)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:an.map(e=>(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:e.color}),(0,t.jsx)(eW,{children:e.label}),(0,t.jsxs)(eY,{style:{color:q},children:["€",ic(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n6?ae:ae.filter(e=>e.key===n6);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.byMember.title")}),ae.length<=1&&0===Z.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:q},{id:"expense",value:e.expense,color:K}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:l.w4.spacing.sm},children:[(0,t.jsx)(c.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamily,color:l.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?q:K},children:[n.net>=0?"+":"","€",ic(Math.abs(n.net))]}),(0,t.jsx)(u.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(u.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:l.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(c.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(c.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",ic(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:q,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:K},children:["€",ic(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:K,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===n0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nZ,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(c.YZ,{children:r("finance.tx.title")}),"month"===iD&&0===Z.expenses.length&&(0,t.jsx)(nK,{ref:iB,value:n1,onChange:e=>n2(e.target.value),"aria-label":r("finance.insights.month"),children:tZ.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),0===tJ.length&&0===tV.length?(0,t.jsx)(ew,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:iz>0?r("finance.search.noResults"):r("finance.tx.empty")})}):(0,t.jsx)(ew,{span:12,children:(0,t.jsx)(eX,{"aria-label":r("finance.tx.title"),children:[...tJ.map(e=>({...e,_kind:"expense"})),...tV.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ib,{exp:e,finData:Z,locale:i,t:r,onDelete:am,onClone:au,onToggleReimbursed:af,compact:"compact"===tS,selectMode:iR.selectMode,selected:iR.selectedIds.has(e.id),onToggleSelect:iR.toggleId,longPressHandlers:iR.longPressHandlers,onEnterSelectMode:iR.enterSelectMode},e.id):(0,t.jsxs)(eQ,{compact:"compact"===tS,children:["compact"===tS?(0,t.jsx)(e0,{color:q,"aria-hidden":!0}):(0,t.jsx)(e4,{color:q,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:e.source}),"compact"!==tS&&(0,t.jsxs)(e6,{children:[ip(e.date,i)," \xb7 ",r("finance.dashboard.income")]})]}),(0,t.jsxs)(e3,{children:[(0,t.jsxs)(e8,{style:{color:q},children:["+€",il(e.amount)]}),(0,t.jsx)(ni,{className:"delete-btn",type:"button",onClick:()=>ax(e.id),"aria-label":`${r("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===n0&&(0,t.jsxs)(eh,{children:[(0,t.jsxs)(nZ,{style:{marginBottom:0},children:[(0,t.jsx)(c.YZ,{children:r("finance.insights.title")}),"month"===iD&&0===Z.expenses.length&&(0,t.jsx)(nK,{value:n1,onChange:e=>n2(e.target.value),"aria-label":r("finance.insights.month"),children:tZ.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),null!==aR&&(0,t.jsxs)(em,{children:[(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:r("finance.kpi.biggestExpense")}),(0,t.jsxs)(ef,{children:["€",aR.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:aR.biggest.description?`${aR.biggest.description} \xb7 ${(0,d.categoryLabel)(im(aR.biggest.categoryId),i)}`:(0,d.categoryLabel)(im(aR.biggest.categoryId),i)})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:r("finance.kpi.topSpender")}),(0,t.jsxs)(ef,{children:["€",aR.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:aR.topMemberLabel})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:r("finance.kpi.busiestDay")}),(0,t.jsxs)(ef,{children:["€",aR.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:r(`finance.weekday.${aR.busiestDowKey}`)})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:r("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(ef,{children:["€",aR.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:0===aR.reimbursableTotal?"—":r("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(c.dO,{items:tD.map(e=>({...e})),onReorder:tA,onCycleSize:tL,accentColor:()=>q,labels:{moveLeft:r("finance.insights.panel.moveLeft"),moveRight:r("finance.insights.panel.moveRight"),cycleSize:r("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.charts.sixMonths")}),(0,t.jsx)(u.ik,{data:t6,budget:Z.budget.monthlyBudget,height:180}),(0,t.jsxs)(nR,{style:{marginTop:l.w4.spacing.sm},children:[(0,t.jsxs)(nD,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nE,{children:["€",ic(az)]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nE,{children:["€",ic(aC)]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(c.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nE,{style:{color:t0>0?K:q},children:[t0>0?"+":"",t0,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.charts.byCategory")}),0===aS.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${l.w4.spacing.lg} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:aS,total:aF,size:110,centerLabel:aM.slice(0,3),centerValue:`€${ic(aF)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:aS.map(e=>{let n=im(e.id),a=e.color||l.w4.colors.mainTextMuted,r=(0,d.expensesForMember)((0,d.expensesForMonth)(Z.expenses,tX),n6).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:a}),(0,t.jsx)(eW,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eY,{children:["€",ic(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.insights.title")}),0===tU.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tU.map((e,n)=>(0,t.jsxs)(nt,{itype:e.type,children:[(0,t.jsx)(na,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:r(e.messageKey,tH(e.params))}),e.memberId&&(()=>{let n=Z.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=Z.familyMembers.indexOf(n);return(0,t.jsxs)(nr,{children:[(0,t.jsx)(c.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.insights.anomalies")}),0===tq.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tq.map(e=>(0,t.jsxs)(nt,{itype:e.type,children:[(0,t.jsx)(na,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:r(e.messageKey,tH(e.params))})}),e.snoozeKey&&(0,t.jsx)(no,{type:"button",title:r("finance.insights.anomalies.dismiss"),"aria-label":r("finance.insights.anomalies.dismiss"),onClick:()=>{tK(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.smallMultiples.title")}),(0,t.jsx)(A.R,{expenses:Z.expenses,familyMembers:Z.familyMembers,getMemberColor:h.a8,t:r,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.reimbursables.tracker.title")}),(0,t.jsx)(E.p,{expenses:Z.expenses,familyMembers:Z.familyMembers,getMemberColor:h.a8,t:r,locale:i})]});case"analytics-budgets":return(0,t.jsx)(R.z,{});case"analytics-bills":return(0,t.jsx)(F.J,{});case"analytics-subscriptions":return(0,t.jsx)(T.n,{});case"analytics-goals":return(0,t.jsx)(S.f,{});case"analytics-recurring":return(0,t.jsx)(z.b,{});case"analytics-rules":return(0,t.jsx)(D.K,{});case"analytics-networth":return(0,t.jsx)(C.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:r("finance.byMember.title")}),0===ae.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:l.w4.spacing.sm},children:ae.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(c.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(c.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",ic(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:q,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:K},children:["€",ic(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:K,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(n_,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),tm&&(0,t.jsx)(ih,{finData:Z,activeMemberId:n6,locale:i,t:r,onClose:()=>tu(!1),onSubmit:tw}),tx&&(0,t.jsx)(ig,{finData:Z,locale:i,t:r,onClose:()=>tf(!1),onSubmit:ty}),tg&&(0,t.jsx)(ix,{finData:Z,t:r,onClose:()=>th(!1),onSubmit:tb}),(0,t.jsx)(y.S,{labelKey:nn,onUndo:()=>{nQ()},onDismiss:()=>nf(null),t:r}),iR.selectMode&&"expenses"===n0&&(0,t.jsx)(k.S,{selectionCount:iR.selectedIds.size,visibleIds:tJ.map(e=>e.id),selectedIds:iR.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:i,t:r,onCancel:iR.exitSelectMode,onSelectAll:()=>iR.selectAll(tJ.map(e=>e.id)),onCategorise:ab,onDelete:ah,onMarkReimbursed:ay}),iO&&(0,t.jsx)(w.m,{t:r,onClose:()=>iP(!1)}),(0,t.jsx)(O.X,{open:ie,onClose:()=>ii(!1),ariaLabel:r("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(ea,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(c.YZ,{children:r("finance.settings.title")}),(0,t.jsx)(c.K0,{onClick:()=>ii(!1),title:r("finance.actions.settings"),children:(0,t.jsx)(c.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"drawer-weekly-budget",children:r("finance.settings.weeklyBudget")}),(0,t.jsx)(nU,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(Z.budget.weeklyBudget),value:tj,onChange:e=>tv(e.target.value)})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"drawer-monthly-budget",children:r("finance.settings.monthlyBudget")}),(0,t.jsx)(nU,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(Z.budget.monthlyBudget),value:t$,onChange:e=>tk(e.target.value)})]}),(0,t.jsx)(c.$n,{variant:"primary",onClick:()=>{ag(),ii(!1)},style:{height:44},children:tM?r("finance.settings.saved"):r("finance.settings.save")})]}),(0,t.jsx)(P.u,{data:Z,getMemberColor:h.a8,t:r,onSaveMember:(e,n)=>{let i=Z.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);nX({...Z,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(O.X,{open:iw,onClose:()=>{ij(!1),i$(null)},ariaLabel:r("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(ea,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(c.YZ,{children:r("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!iv&&(0,t.jsx)(c.$n,{variant:"ghost",style:{height:28},onClick:()=>i$({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:r("finance.categories.new")}),(0,t.jsx)(c.K0,{onClick:()=>{ij(!1),i$(null)},title:r("finance.categories.cancel"),children:(0,t.jsx)(c.In,{name:"close",size:16})})]})]}),iv&&(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.md,display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:r("finance.categories.labelEn")}),(0,t.jsx)(nq,{value:iv.labelEn,onChange:e=>i$(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:r("finance.categories.labelPt")}),(0,t.jsx)(nq,{value:iv.labelPt,onChange:e=>i$(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:r("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:iv.icon,onChange:e=>i$(n=>n&&{...n,icon:e.target.value}),style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:c.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:r("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:iv.color,onChange:e=>i$(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nq,{value:iv.color,onChange:e=>i$(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(c.$n,{variant:"ghost",style:{height:28},onClick:()=>i$(null),children:r("finance.categories.cancel")}),(0,t.jsx)(c.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!iv.labelEn||!iv.labelPt)return;let e={id:(0,f.z)(),labelEn:iv.labelEn,labelPt:iv.labelPt,icon:iv.icon,color:iv.color,isCustom:!0},n=Z.categories??[];nX({...Z,categories:[...n,e]},"finance.undo.label.added"),i$(null)},children:r("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.n6)(e.icon)?(0,t.jsx)(c.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:r("finance.categories.builtIn")})]},e.id)),(Z.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.n6)(e.icon)?(0,t.jsx)(c.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)(c.K0,{title:r("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(Z.categories??[]).filter(n=>n.id!==e.id);nX({...Z,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(c.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(O.X,{open:null!==i1,onClose:()=>i2(null),ariaLabel:r("finance.recurring.makeRecurring"),maxWidth:360,children:i1&&(0,t.jsxs)(nj,{children:[(0,t.jsxs)(c.YZ,{children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nv,{children:r("finance.recurring.frequency")}),(0,t.jsx)(n$,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nk,{type:"button",active:i1.cadence===e,onClick:()=>i2(n=>n?{...n,cadence:e}:null),children:r(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nv,{children:r("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:i1.firstDue,onChange:e=>i2(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(c.$n,{variant:"ghost",onClick:()=>i2(null),children:r("finance.recurring.cancel")}),(0,t.jsx)(c.$n,{variant:"primary",onClick:ac,disabled:!i1.firstDue,children:r("finance.recurring.confirm")})]})]})}),it&&(0,t.jsx)(L.h,{data:Z,month:n1,locale:i,t:r,getMemberColor:h.a8})]})}function ix({finData:e,t:n,onClose:i,onSubmit:r}){let o=(0,d.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[p,m]=(0,a.useState)(""),u=parseFloat(p.replace(",",".")),x=p.trim().length>0&&!Number.isNaN(u),f=x?u-o:0;return(0,t.jsx)(O.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nQ,{children:[(0,t.jsxs)(n0,{children:[(0,t.jsx)(c.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(n4,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&r(u)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:l.w4.spacing.sm,background:l.w4.colors.sidebarHover,borderRadius:l.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",il(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:l.w4.colors.mainTextMuted},children:["€",il(s)]})]})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n7,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:p,onChange:e=>m(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==f&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:f>0?q:K,marginTop:6},children:f>0?n("finance.balance.deltaUp",{n:il(f)}):n("finance.balance.deltaDown",{n:il(-f)})}),x&&0===f&&(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function ig({finData:e,locale:n,t:i,onClose:r,onSubmit:o}){let[s,d]=(0,a.useState)(""),[p,m]=(0,a.useState)(id()),[u,x]=(0,a.useState)(""),[g,b]=(0,a.useState)(""),[y,w]=(0,a.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(O.X,{open:!0,onClose:r,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nQ,{children:[(0,t.jsxs)(n0,{children:[(0,t.jsx)(c.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(n4,{type:"button",onClick:r,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,f.z)(),amount:j,date:p,source:u.trim(),createdAt:Date.now(),...g?{goalId:g}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(n1,{children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n7,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>d(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n7,{id:"inc-date",type:"date",value:p,onChange:e=>m(e.target.value)})]})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n7,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(c.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(c.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n);return(0,t.jsxs)(c.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n9,{id:"inc-goal",value:g,onChange:e=>b(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:r,children:i("finance.income.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function ih({finData:e,activeMemberId:n,locale:i,t:r,onClose:o,onSubmit:s}){let[p,m]=(0,a.useState)(""),[u,x]=(0,a.useState)(""),[g,b]=(0,a.useState)("other"),[y,w]=(0,a.useState)(id()),[j,v]=(0,a.useState)("single"),[$,k]=(0,a.useState)(n),[M,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,a.useState)([]),[z,C]=(0,a.useState)(""),[I,R]=(0,a.useState)(!1),D=(0,a.useRef)(null);(0,a.useEffect)(()=>{u.trim()&&b((0,d.guessCategoryWithRules)(e,u))},[u,e]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(p.replace(",","."))||0,A=M.length,L="split"===j&&A>0?E/A:E,B=E>0&&!!y&&("single"===j||"split"===j&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),R(!1))},N=(0,a.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),W=[{id:"shared",name:r("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(O.X,{open:!0,onClose:o,ariaLabel:r("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nX,{children:[(0,t.jsxs)(n0,{children:[(0,t.jsxs)(c.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,t.jsx)(n4,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),a=Date.now(),r={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(r[e]=g)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,f.z)(),amount:E,date:y,categoryId:g,description:t||g,type:"daily",childId:"shared"===$?void 0:$,createdAt:a,...o}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,r)=>({id:(0,f.z)(),amount:0===r?e+n:e,date:y,categoryId:g,description:t?`${t} (1/${A})`:g,type:"daily",childId:i,createdAt:a+r,...o}))}s(i,r,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(n1,{children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"exp-amount",children:r("finance.modal.amount")}),(0,t.jsx)(n7,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:p,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"exp-date",children:r("finance.modal.date")}),(0,t.jsx)(n7,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"exp-desc",children:r("finance.modal.description")}),(0,t.jsx)(n7,{id:"exp-desc",type:"text",placeholder:r("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,t.jsx)(n9,{id:"exp-cat",value:g,onChange:e=>b(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:r("finance.tags.label")}),(0,t.jsxs)(io,{children:[(0,t.jsxs)(it,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(c.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":r("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(ii,{ref:D,type:"text",value:z,placeholder:0===S.length?r("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),R(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&R(!1)},onBlur:()=>{z.trim()&&P(z),setTimeout(()=>R(!1),150)},onFocus:()=>R(!0),"aria-label":r("finance.tags.label")})]}),I&&N.length>0&&(0,t.jsx)(ia,{children:N.map(e=>(0,t.jsxs)(ir,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:r("finance.modal.assign")}),(0,t.jsxs)(n2,{role:"tablist",children:[(0,t.jsx)(n6,{type:"button",active:"single"===j,onClick:()=>v("single"),children:r("finance.modal.member")}),(0,t.jsx)(n6,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:r("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n3,{style:{marginTop:l.w4.spacing.sm},children:W.map(e=>(0,t.jsxs)(n8,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n3,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),a=M.includes(e.id);return(0,t.jsxs)(n8,{type:"button",active:a,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(n5,{style:{marginTop:l.w4.spacing.xs},children:r("finance.modal.splitEach",{n:A,amount:il(L)})})]})]}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:o,children:r("finance.member.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!B,children:r("finance.quickAdd.add")})]})]})]})})}function ib({exp:e,finData:n,locale:i,t:a,onDelete:r,onClone:o,onToggleReimbursed:s,compact:p=!1,selectMode:m=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:f}){let g=im(e.categoryId),b=n.familyMembers.findIndex(n=>n.id===e.childId),y=b>=0?n.familyMembers[b]:null,w=y?(0,h.a8)(y,b):l.w4.colors.mainTextMuted,j=e.split&&e.split.length>0?e.split.slice(0,4).map(e=>{let i=n.familyMembers.findIndex(n=>n.id===e.memberId),t=i>=0?n.familyMembers[i]:null;return t?{id:t.id,name:t.name,role:t.role,color:(0,h.a8)(t,i)}:{id:e.memberId,name:e.memberId.slice(0,2).toUpperCase(),role:"adult",color:l.w4.colors.mainTextMuted}}):null,v=e.split&&e.split.length>4?e.split.length-4:0,$=f?f(e.id):null,k=n=>{m&&x&&"INPUT"!==n.target.tagName&&x(e.id)},M=e.isReimbursable&&!m?s?(0,t.jsx)(ne,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e9,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,T=!m&&o?(0,t.jsx)(nn,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${a("finance.tx.clone")} — ${e.description}`,title:a("finance.tx.clone"),children:"↻"}):null,S=m?null:(0,t.jsx)(ni,{className:"delete-btn",type:"button",onClick:()=>r(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),F=m?(0,t.jsx)(eG,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,z=m?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return p?(0,t.jsxs)(eQ,{compact:!0,style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e0,{color:g.color,"aria-hidden":!0}),(0,t.jsx)(e1,{children:(0,t.jsxs)(e2,{style:{display:"flex",alignItems:"center",gap:6},children:[j?(0,t.jsxs)(e5,{size:16,children:[j.map(e=>(0,t.jsx)(c.eu,{member:e,size:16},e.id)),v>0&&(0,t.jsxs)(e7,{size:16,children:["+",v]})]}):y?(0,t.jsx)(c.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:13,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,d.categoryLabel)(g,i)})]})}),(0,t.jsxs)(e3,{children:[M,(0,t.jsxs)(e8,{children:["−€",il(e.amount)]}),T,S]})]}):(0,t.jsxs)(eQ,{style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e4,{color:g.color,children:(0,c.n6)(g.icon)?(0,t.jsx)(c.In,{name:g.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:g.icon})}),(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:e.description||(0,d.categoryLabel)(g,i)}),(0,t.jsxs)(e6,{children:[j?(0,t.jsxs)(e5,{size:14,children:[j.map(e=>(0,t.jsx)(c.eu,{member:e,size:14},e.id)),v>0&&(0,t.jsxs)(e7,{size:14,children:["+",v]})]}):y?(0,t.jsx)(c.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:11,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,d.categoryLabel)(g,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:ip(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:a("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(is,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e3,{children:[M,"recurring"===e.type&&(0,t.jsx)(e9,{children:a("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e8,{children:["−€",il(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:l.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),T,S]})]})}}}]);