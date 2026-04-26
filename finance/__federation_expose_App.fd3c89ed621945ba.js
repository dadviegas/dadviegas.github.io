"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{ACTIVE_MEMBER_KEY:()=>eK,default:()=>ip});var t=i(5723),r=i(7991),a=i(6859),o=i.n(a),s=i(2799),l=i(6063),c=i(4e3),d=i(4659),p=i(3759),m=i(789),u=i(9454),x=i(8170),g=i(4041),f=i(948),h=i(719),b=i(2405),y=i(9546),w=i(5854),j=i(3616),v=i(6579),$=i(8989),k=i(6376),M=i(9146),T=i(7737),S=i(8635),F=i(8501),z=i(1789),C=i(216),I=i(9419),R=i(341),D=i(9378),E=i(1423),A=i(1255),L=i(3451),B=i(545),O=i(2167),P=i(7637),N=i(6891),Y=i(1331),W=i(2139);let U="#7fb77e",q="#f85149",K=(0,s.keyframes)`
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
`,er=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,ea=o().div`
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
`,eg=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ef=o().div`
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

  &:first-child {
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
`,eY=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eW="finance:list-density",eU="finance:quick-categories",eq="finance:forecast-months",eK="finance:active-member",eH="finance:insights-layout",eZ="finance:overview-layout",e_=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eV=[{id:"overview-hero",size:"lg"},{id:"overview-accounts",size:"md"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eJ=o().input`
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
`,nr=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,na=o().button`
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
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nu=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,nx=o().div`
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
  animation: ${nu} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nf=o().div`
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
`,nh=o().button`
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
`,nb=o().button`
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
`,ny=o().div`
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
`,nw=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nj=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,nv=o().button`
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
`,n$=o().button`
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
`,nk=o().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nM=o().ul`
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
`,nT=o().li`
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
`,nS=o().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nF=o().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nz=o().li`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${l.w4.spacing.sm} 2px;
  pointer-events: none;
`,nC=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,nI=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nR=o().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nD=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nE=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nA=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,nL=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nB=o().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nO=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${U}; }
`,nP=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nN=o().label`
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
`,nW=o().input`
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
`,nU=o().select`
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
`;let nq=o().button`
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
`,nK=o().div`
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
`;let nH=o().footer`
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
`,nZ=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,n_=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nV=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nJ=o().div`
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
`,nG=o().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,nX=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nQ=o().button`
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
`,n0=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n4=o().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n1=o().button`
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
`,n2=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,n6=o().button`
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
`,n3=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n8=o().input`
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
`,n5=o().select`
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
`,n7=o().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`,n9=o().input`
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
`,ie=o().div`
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
`,ii=o().ul`
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
`,it=o().li`
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
`,ia=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function io(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function is(e){return Math.round(e).toLocaleString("pt-PT")}function il(){return new Date().toISOString().slice(0,10)}function ic(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function id(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function ip({topBarRight:e}){let n,[i]=(0,x.Ym)(),a=(0,r.useMemo)(()=>(0,x.Nx)(i,f.A),[i]),{data:o,loaded:s,save:K}=(0,d.useFinance)(),H=o??{...d.EMPTY_FINANCE_DATA},[eJ]=(0,d.useProfile)(),e8=(0,r.useMemo)(()=>(0,d.recentMerchants)(H.expenses,20).slice(0,6),[H.expenses]),{canUndo:e5,latestLabelKey:e7,undo:e9}=(0,d.useUndo)(),[ne,nu]=(0,r.useState)(null),nJ=(0,r.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:H,labelKey:n,ts:Date.now()}),nu(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await K(e)},[H,K]),nG=(0,r.useCallback)(async()=>{let e=e9();e&&(nu("finance.undo.label.reverted"),await K(e),setTimeout(()=>nu(null),2500))},[e9,K]),[nX,nQ]=(0,r.useState)("overview"),[n0,n4]=(0,r.useState)(()=>(0,d.thisMonthKey)()),[n1,n2]=(0,r.useState)("shared");(0,r.useEffect)(()=>{(0,l.PL)(eK).then(e=>{e&&n2(e)})},[]);let n6=(0,r.useCallback)(e=>{n2(e),(0,l.Is)(eK,e)},[]),[n3,n8]=(0,r.useState)(!1),[n5,n7]=(0,r.useState)(!1),[n9,ie]=(0,r.useState)([]),[ii,it]=(0,r.useState)(!1),[ir,ia]=(0,r.useState)(!1),[ih,ib]=(0,r.useState)(null),iy=+(n9.length>0)+ +!!ii,[iw,ij]=(0,r.useState)(!1),[iv,i$]=(0,r.useState)({}),ik=(0,r.useMemo)(()=>{let e=0;return iv.text&&e++,iv.memberId&&e++,iv.categoryId&&e++,(iv.dateFrom||iv.dateTo)&&e++,(void 0!==iv.amountMin||void 0!==iv.amountMax)&&e++,iv.tags&&iv.tags.length>0&&e++,e},[iv]),iM=(0,r.useCallback)(e=>{let n=[...H.savedViews??[],e];K({...H,savedViews:n})},[H,K]),iT=(0,r.useCallback)(e=>{let n=(H.savedViews??[]).filter(n=>n.id!==e);K({...H,savedViews:n})},[H,K]),iS=(0,M.E)();(0,r.useEffect)(()=>{"expenses"!==nX&&iS.selectMode&&iS.exitSelectMode()},[nX]);let{range:iF,setRange:iz}=(0,p.H)("month"),iC=(0,r.useRef)(null),iI=(0,r.useRef)(null),iR=(0,r.useRef)(null),[iD,iE]=(0,r.useState)(!1),[iA,iL]=(0,r.useState)(""),[iB,iO]=(0,r.useState)(!1),[iP,iN]=(0,r.useState)(""),iY=(0,r.useRef)(null),[iW,iU]=(0,r.useState)(""),[iq,iK]=(0,r.useState)("shared"),[iH,iZ]=(0,r.useState)(null),[i_,iV]=(0,r.useState)(!1),iJ=(0,r.useRef)(null),[iG,iX]=(0,r.useState)(null),[iQ,i0]=(0,r.useState)("EUR"),[i4,i1]=(0,r.useState)(!1),[i2,i6]=(0,r.useState)(!1),i3=(0,B.x)(),i8=(0,r.useRef)(null),i5=(0,r.useRef)(!1),[i7,i9]=(0,r.useState)(!1),[te,tn]=(0,r.useState)(-1),ti=(0,r.useRef)(null),[tt,tr]=(0,r.useState)(""),[ta,to]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,l.PL)(eU).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&to(n)}catch{}})},[]);let[ts,tl]=(0,r.useState)(!1),[tc,td]=(0,r.useState)(!1),[tp,tm]=(0,r.useState)(!1),tu=(0,r.useCallback)(e=>{let n=e-(0,d.computeCurrentBalance)(H);if(0===n)return void tm(!1);let i=(H.budget.openingBalance??0)+n;nJ({...H,budget:{...H.budget,openingBalance:i}},"finance.undo.label.edited"),tm(!1)},[H,nJ]),tx=(0,r.useCallback)(e=>{nJ({...H,income:[e,...H.income]},"finance.undo.label.added"),td(!1),iJ.current&&clearTimeout(iJ.current),iV(!0),iJ.current=setTimeout(()=>iV(!1),2e3)},[H,nJ]),tg=(0,r.useCallback)((e,n,i,t)=>{let r=i?[i,...H.recentDescriptions].filter(Boolean).slice(0,20):H.recentDescriptions,a={...H,expenses:[...e,...H.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)a=(0,d.addRecentTag)(a,e);nJ(a,"finance.undo.label.added"),tl(!1),iJ.current&&clearTimeout(iJ.current),iV(!0),iJ.current=setTimeout(()=>iV(!1),2e3)},[H,nJ]),[tf,th]=(0,r.useState)(""),[tb,ty]=(0,r.useState)(""),[tw,tj]=(0,r.useState)(!1),[tv,t$]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,l.PL)(eW).then(e=>{("compact"===e||"comfortable"===e)&&t$(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===tv?"compact":"comfortable";t$(e),(0,l.Is)(eW,e)},[tv]);let[tk,tM]=(0,r.useState)(3);(0,r.useEffect)(()=>{(0,l.PL)(eq).then(e=>{"6"===e?tM(6):"12"===e&&tM(12)})},[]);let tT=(0,r.useCallback)(e=>{tM(e),(0,l.Is)(eq,String(e))},[]),tS=(0,r.useMemo)(()=>(0,d.thisMonthKey)(),[]),[tF,tz]=(0,r.useState)(e_);(0,r.useEffect)(()=>{(0,l.PL)(eH).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...e_.filter(e=>!i.has(e.id))];tz(t)}catch{}})},[]);let tC=(0,r.useCallback)((e,n)=>{tz(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,l.Is)(eH,JSON.stringify(a)),a})},[]),tI=(0,r.useCallback)(e=>{tz(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eH,JSON.stringify(a)),a})},[]),[tR,tD]=(0,r.useState)(eV);(0,r.useEffect)(()=>{(0,l.PL)(eZ).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eV.filter(e=>!i.has(e.id))];tD(t)}catch{}})},[]);let tE=(0,r.useCallback)((e,n)=>{tD(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,l.Is)(eZ,JSON.stringify(a)),a})},[]),tA=(0,r.useCallback)(e=>{tD(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eZ,JSON.stringify(a)),a})},[]),tL=(0,r.useMemo)(()=>(0,d.computeWeeklyStatus)(H),[H]);(0,r.useMemo)(()=>(0,d.computeMonthlySummary)(H,n0),[H,n0]);let tB=(0,r.useMemo)(()=>(0,d.generateInsightsWithMembers)(H),[H]),{insights:tO,dismiss:tP}=(0,d.useFinanceAnomalies)(),tN=(0,r.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=d.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??H.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,d.categoryLabel)(n,i)}:e},[H.categories,i]),tY=(0,r.useMemo)(()=>(0,d.availableMonths)(H),[H]),tW=(0,r.useMemo)(()=>(0,d.filterExpensesByRange)(H.expenses,iF,n0),[H.expenses,iF,n0]),tU=(0,r.useMemo)(()=>(0,d.filterIncomeByRange)(H.income,iF,n0),[H.income,iF,n0]),tq=(0,r.useMemo)(()=>{let e=(0,d.expensesForMember)(tW,n1);return n9.length>0&&(e=e.filter(e=>n9.includes(e.categoryId))),ii&&(e=e.filter(e=>!0===e.isReimbursable)),ik>0&&(e=(0,d.applyExpenseFilter)(e,iv)),e},[tW,n1,n9,ii,iv,ik]),tK=(0,r.useMemo)(()=>(0,d.monthlyTotalByMember)(H,n1,tS),[H,n1,tS]),tH=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tS),[tS]),tZ=(0,r.useMemo)(()=>(0,d.monthlyTotalByMember)(H,n1,tH),[H,n1,tH]),t_=(0,r.useMemo)(()=>0===tZ?0:Math.round((tK-tZ)/tZ*100),[tK,tZ]),tV=(0,r.useMemo)(()=>{if("all"===n1)return a("finance.member.all");if("shared"===n1)return a("finance.hero.family");let e=H.familyMembers.find(e=>e.id===n1);return e?.name??a("finance.hero.family")},[n1,H.familyMembers,a]),tJ=(0,r.useMemo)(()=>{if("all"===n1||"shared"===n1)return l.w4.colors.mainTextMuted;let e=H.familyMembers.findIndex(e=>e.id===n1);return -1===e?U:(0,h.a8)(H.familyMembers[e],e)},[n1,H.familyMembers]),tG=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,d.expensesForMember)(H.expenses,n1).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[H.expenses,n1]),tX=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),a=(0,d.expensesForMember)(t,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:id(e).color})),over:s>r?s-r:0}})})(H,n1),[H,n1]),tQ=(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s),p=c.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=c.reduce((e,n)=>e+n.amount,0)/30,u=p/30;t.push({inc:m,incGoal:u,exp:l})}return t})(H,n1),[H,n1]),t0=(0,r.useMemo)(()=>(0,d.forecastCashFlow)(H,tk),[H,tk]),t4=(0,r.useMemo)(()=>(0,d.firstNegativeDay)(t0),[t0]),t1=(0,r.useMemo)(()=>{let e,n;return e=new Date,n=H.expenses.length>0?H.expenses.reduce((e,n)=>e+n.amount,0)/H.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),o=(0,d.expensesForMember)(H.expenses.filter(e=>e.date===a),n1).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[H,n1]),t2=(0,r.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(H.expenses,n1)),[H.expenses,n1]),t6=(0,r.useMemo)(()=>{let e=[];return e.push({key:"shared",label:a("finance.income.member.shared"),color:l.w4.colors.mainTextMuted,incomeSpk:(0,d.incomeSparkline)(H.income,"shared"),spendSpk:(0,d.memberSparkline)(H.expenses,"shared"),incomeTotal:(0,d.incomeForMember)(H.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(H.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(H.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(H.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(H,"shared",6)}),H.familyMembers.forEach((n,i)=>{let t=(0,h.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,d.incomeSparkline)(H.income,n.id),spendSpk:(0,d.memberSparkline)(H.expenses,n.id),incomeTotal:(0,d.incomeForMember)(H.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(H.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(H.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(H.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(H,n.id,6)})}),e},[H,a]),t3=(0,r.useMemo)(()=>{let e=Object.entries((0,d.incomeByMember)(H.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:a("finance.income.member.shared"),value:n,color:l.w4.colors.mainTextMuted};let i=H.familyMembers.findIndex(n=>n.id===e),t=H.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,h.a8)(t,i):l.w4.colors.accent}})},[H,a]),t8=(0,r.useMemo)(()=>t3.reduce((e,n)=>e+n.value,0),[t3]),t5=tL.budget>0?tL.spent/tL.budget*100:0,t7=H.budget.monthlyBudget>0?tK/H.budget.monthlyBudget*100:0,t9=(0,r.useMemo)(()=>{let e=iB&&iP.trim()?iP.trim():(0,d.parseQuickInput)(iA,H.familyMembers)?.description;return e?(0,d.guessCategoryWithRules)(H,e):"other"},[iA,iB,iP,H]),re=iW||tt||t9,rn=(0,r.useMemo)(()=>(0,d.parseRecurringHint)(iA),[iA]);(0,r.useEffect)(()=>{let e=(0,d.parseQuickInput)(iA,H.familyMembers);e?.memberId&&iK(e.memberId)},[iA,H.familyMembers]);let ri=(0,r.useCallback)(()=>{let e=(0,d.parseQuickInput)(iA,H.familyMembers),n=(0,d.parseRecurringHint)(iA);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");iX({amount:e.amount,description:e.description||(re??"other"),categoryId:re||"other",cadence:n.cadence,firstDue:`${t}-${r}-${a}`})},[iA,H.familyMembers,re]),rt=(0,r.useCallback)(()=>{if(!iG)return;let e=new Date(iG.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iG.description,amount:iG.amount,categoryId:iG.categoryId,cadence:iG.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iq?iq:void 0};nJ({...H,recurringRules:[...H.recurringRules??[],n]},"finance.undo.label.added"),iX(null),iL(""),iU(""),tr(""),iJ.current&&clearTimeout(iJ.current),iV(!0),iJ.current=setTimeout(()=>iV(!1),2e3)},[iG,H,iq,nJ]),rr=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=iB&&iP.trim()?iP.trim():void 0,t=(0,d.parseQuickInput)(iA,H.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let r=re||"other",a=t.memberId??("shared"!==iq?iq:void 0),o=t.tags??[],s=t.description?(0,d.normalizeMerchant)(t.description):void 0,c=il(),p=t.amount;if("EUR"!==iQ){i6(!0),i1(!1);let e=await (0,d.convertToEUR)({amount:t.amount,code:iQ,date:c});if(i6(!1),!e)return void i1(!0);p=e.eur,n={code:iQ,rate:e.rate,original:t.amount}}let m={id:(0,g.z)(),amount:p,date:c,categoryId:r,description:t.description||r,type:"daily",...t.split?{split:t.split}:{childId:a},createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{},...H.defaultAccountId?{accountId:H.defaultAccountId}:{}};i9(!1),i1(!1);let u={...H.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=r)});let x=[t.description||"",...H.recentDescriptions].filter(Boolean).slice(0,20),f=[m,...H.expenses],h={...H,expenses:f,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,d.addRecentTag)(h,e);nJ(h,"finance.undo.label.added");let b=(0,v.j)(f);to(b),(0,l.Is)(eU,JSON.stringify(b)),iL(""),iN(""),iO(!1),iU(""),tr(""),iZ(null),iJ.current&&clearTimeout(iJ.current),iV(!0),iJ.current=setTimeout(()=>iV(!1),2e3)},[iA,iB,iP,re,iq,iQ,H,nJ]),ra=(0,r.useCallback)(e=>{(0,m.K)([10,50,10]);let n=(0,d.parseQuickInput)(e,H.familyMembers);if(n){let e=iW||tt||(n.description?(0,d.guessCategoryWithRules)(H,n.description):"other"),i=n.memberId??("shared"!==iq?iq:void 0),t=n.tags??[],r={id:(0,g.z)(),amount:n.amount,date:il(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},a={...H.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(a[n]=e)});let o=[n.description||"",...H.recentDescriptions].filter(Boolean).slice(0,20),s={...H,expenses:[r,...H.expenses],categoryHints:a,recentDescriptions:o};for(let e of t)s=(0,d.addRecentTag)(s,e);nJ(s,"finance.undo.label.added");let c=(0,v.j)([r,...H.expenses]);to(c),(0,l.Is)(eU,JSON.stringify(c)),iL(""),iU(""),tr(""),iJ.current&&clearTimeout(iJ.current),iV(!0),iJ.current=setTimeout(()=>iV(!1),2e3)}else iL(e),iI.current?.focus()},[H,iW,tt,iq,nJ]),ro=(0,r.useCallback)(e=>{nJ({...H,expenses:H.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[H,nJ]),rs=(0,r.useCallback)(e=>{let n=H.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,g.z)(),date:il(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nJ({...H,expenses:[i,...H.expenses]},"finance.undo.label.added")},[H,nJ]),rl=(0,r.useCallback)(e=>{nJ({...H,income:H.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[H,nJ]),rc=(0,r.useCallback)(e=>{nJ({...H,expenses:H.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[H,nJ]),rd=(0,r.useCallback)(()=>{let e=parseFloat(tf)||H.budget.weeklyBudget,n=parseFloat(tb)||H.budget.monthlyBudget;K({...H,budget:{...H.budget,weeklyBudget:e,monthlyBudget:n}}),tj(!0),setTimeout(()=>tj(!1),2e3)},[tf,tb,H,K]),rp=(0,r.useCallback)(()=>{let e=iS.selectedIds;0!==e.size&&(nJ({...H,expenses:H.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iS.exitSelectMode())},[iS,H,nJ]),rm=(0,r.useCallback)(e=>{let n=iS.selectedIds;0!==n.size&&(nJ({...H,expenses:H.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iS.exitSelectMode())},[iS,H,nJ]),ru=(0,r.useCallback)(()=>{let e=iS.selectedIds;0!==e.size&&(nJ({...H,expenses:H.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iS.exitSelectMode())},[iS,H,nJ]),rx=(0,r.useMemo)(()=>["shared",...H.familyMembers.map(e=>e.id)],[H.familyMembers]);(0,j.K)({quickAddInputRef:iI,monthSelectRef:iR,memberIds:rx,activeMemberId:n1,onSelectMember:n6,onSetTab:e=>nQ(e),expenseModalOpen:ts,onOpenExpenseModal:()=>tl(!0),shortcutsOpen:iD,onToggleShortcuts:()=>iE(e=>!e),onOpenSearch:()=>{nQ("expenses"),ij(!0)}});let rg=[{value:"week",label:a("finance.range.pill.7d")},{value:"month",label:a("finance.range.pill.month")},{value:"3m",label:a("finance.range.pill.3m")},{value:"6m",label:a("finance.range.pill.6m")},{value:"1y",label:a("finance.range.pill.year")}],rf=Math.floor(tK).toLocaleString("pt-PT"),rh=(tK%1).toFixed(2).slice(1),rb=(0,r.useMemo)(()=>{if(0===(H.goals??[]).length)return null;let e=(0,d.recomputeGoalCurrents)(H);return{onTrack:e.goals.filter(e=>"behind"!==(0,d.goalStatus)(e)).length,total:e.goals.length}},[H]),ry=(()=>{let[e,n]=tS.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),rw=(0,t.jsx)(h.TA,{data:H,activeMemberId:n1,onSelectMember:n6,onSaveData:K,t:a,locale:i}),rj=(0,r.useMemo)(()=>{let e={};for(let n of tq)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:id(e).color}))},[tq]),rv=rj.reduce((e,n)=>e+n.value,0),r$=(0,r.useMemo)(()=>tX.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tX]),rk=tX.length>0?r$/tX.length:0,rM=tX.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>H.budget.monthlyBudget).length,rT=(0,r.useMemo)(()=>{if(0===tq.length)return null;let e=tq.reduce((e,n)=>n.amount>e.amount?n:e,tq[0]),n={};for(let e of tq){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?H.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??a("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tq){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tq.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tq,H.familyMembers,a]),rS="kid"===eJ.ageMode&&"shared"!==n1&&"all"!==n1?H.familyMembers.find(e=>e.id===n1&&"child"===e.role)??null:null;return rS?(0,t.jsx)(c.PE,{title:a("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(N.N,{member:rS,data:H,t:a})}):(0,t.jsxs)(c.PE,{title:a("finance.appTitle"),sidebar:rw,topBarRight:e,activeId:n1,children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)(_,{children:(0,t.jsx)(h.jb,{data:H,activeMemberId:n1,onSelectMember:n6,t:a,locale:i})}),(0,t.jsxs)(J,{children:[(0,t.jsx)(G,{children:(0,t.jsx)("div",{role:"tablist","aria-label":a("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:a("finance.tab.overview"),expenses:a("finance.tab.expenses"),insights:a("finance.tab.insights")},i={overview:0,expenses:tq.length,insights:tB.length}[e];return(0,t.jsxs)(Q,{type:"button",role:"tab","aria-selected":nX===e,active:nX===e,onClick:()=>nQ(e),children:[n[e],i>0&&(0,t.jsxs)(ee,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(X,{children:[(0,t.jsxs)(c.ms,{align:"right",trigger:(0,t.jsx)(c.$n,{variant:iy>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(c.In,{name:"filter",size:13,"aria-hidden":!0}),children:iy>0?a("finance.filters.activeCount",{n:iy}):a("finance.actions.filters")}),children:[(0,t.jsx)(c.o_,{children:a("finance.filters.member")}),["shared",...H.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?a("finance.hero.family"):H.familyMembers.find(n=>n.id===e)?.name??e,i=e===n1;return(0,t.jsx)(c.tJ,{onClick:()=>n6(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(c.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.o_,{children:a("finance.filters.category")}),(0,t.jsx)(c.tJ,{onClick:()=>ie([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===n9.length&&(0,t.jsx)(c.In,{name:"check",size:12}),n9.length>0&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.allCategories")]})}),d.DEFAULT_CATEGORIES.map(e=>{let n=n9.includes(e.id);return(0,t.jsx)(c.tJ,{onClick:()=>ie(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(c.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.tJ,{onClick:()=>it(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[ii&&(0,t.jsx)(c.In,{name:"check",size:12}),!ii&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.reimbursableOnly")]})}),iy>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.rx,{}),(0,t.jsx)(c.tJ,{onClick:()=>{ie([]),it(!1)},children:a("finance.filters.reset")})]})]}),(0,t.jsx)(c.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(c.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>ia(!0),children:a("finance.actions.categories")}),"expenses"===nX&&(0,t.jsx)(Y.g,{count:ik,onClick:()=>ij(e=>!e),label:a("finance.search.openSearch")}),"expenses"===nX&&(0,t.jsx)(c.$n,{variant:iS.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iS.selectMode?iS.exitSelectMode():iS.enterSelectMode()},children:a("finance.bulk.select")}),"overview"===nX&&(0,t.jsx)(c.K0,{onClick:()=>{n7(!0),requestAnimationFrame(()=>{window.print()})},title:a("finance.report.button"),"aria-label":a("finance.report.button"),children:(0,t.jsx)(c.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(c.K0,{onClick:()=>n8(!0),title:a("finance.actions.settings"),"aria-label":a("finance.actions.settings"),active:n3,children:(0,t.jsx)(c.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(V,{children:(0,t.jsx)(c.K0,{onClick:()=>iE(e=>!e),title:a("finance.shortcuts.title"),"aria-label":a("finance.shortcuts.title"),active:iD,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(ei,{"aria-label":a("finance.range.label"),children:rg.map(({value:e,label:n})=>(0,t.jsx)(en,{type:"button",active:iF===e,onClick:()=>{iz(e),"month"===e&&n4(tS)},"aria-pressed":iF===e,children:n},e))}),"expenses"===nX&&(0,t.jsx)(Y.P,{open:iw,query:iv,onQueryChange:i$,savedViews:H.savedViews??[],onSaveView:iM,onDeleteView:iT,onClose:()=>ij(!1),members:H.familyMembers,categories:[...d.DEFAULT_CATEGORIES,...H.categories??[]],locale:i,recentTags:H.recentTags}),"month"===iF&&H.expenses.length>0&&(0,t.jsx)($.f,{data:H,selectedMonth:n0,onSelectMonth:n4,locale:i,t:a}),(0,t.jsxs)(eh,{children:["overview"===nX&&(0,t.jsxs)(eb,{children:[(0,t.jsxs)(ea,{ref:iC,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:l.w4.colors.mainTextMuted},children:a("finance.quickAdd.title")}),(0,t.jsxs)(np,{visible:i_&&!i3.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",a("finance.quickAdd.added")]}),i3.listening&&(0,t.jsxs)(nx,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(ng,{}),a("finance.voice.listening")]}),(0,t.jsxs)(c.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>td(!0),children:["+ ",a("finance.quickAdd.addIncome")]}),(0,t.jsxs)(c.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tm(!0),children:["⚖ ",a("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:rr,"aria-label":a("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(no,{children:[{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...H.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(H.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(ns,{type:"button",active:iq===e.id,color:i,onClick:()=>iK(e.id),children:[(0,t.jsx)(c.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(nl,{children:[(0,t.jsxs)(nk,{children:[(0,t.jsx)(nc,{ref:iI,type:"text",placeholder:iB?a("finance.quickAdd.amountOnlyPlaceholder"):a("finance.quickAdd.placeholder"),value:iA,onChange:e=>{iL(e.target.value),iU(""),i9(e8.length>0),tn(-1)},onFocus:()=>{e8.length>0&&!iA.trim()&&i9(!0)},onBlur:()=>{setTimeout(()=>i9(!1),150)},onKeyDown:e=>{if(i7&&0!==e8.length)if("ArrowDown"===e.key)e.preventDefault(),tn(e=>Math.min(e+1,e8.length-1));else if("ArrowUp"===e.key)e.preventDefault(),tn(e=>Math.max(e-1,-1));else if("Enter"===e.key&&te>=0){e.preventDefault();let n=e8[te];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iA);iL(e?iA.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iU(""),i9(!1),tn(-1)}}else"Escape"===e.key&&(i9(!1),tn(-1))},"aria-label":a("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":i7&&e8.length>0,autoComplete:"off",inputMode:"decimal"}),i7&&e8.length>0&&(0,t.jsxs)(nM,{ref:ti,role:"listbox","aria-label":a("finance.merchant.recent"),children:[(0,t.jsx)(nz,{role:"presentation",children:a("finance.merchant.recent")}),e8.map((e,n)=>(0,t.jsxs)(nT,{role:"option","aria-selected":te===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iA);iL(i?iA.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iU(""),i9(!1),tn(-1),iI.current?.focus()},children:[(0,t.jsx)(nS,{children:e.merchant}),(0,t.jsxs)(nF,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(eo,{type:"button","aria-pressed":iB,"aria-label":iB?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iB;iO(e),e&&requestAnimationFrame(()=>iY.current?.focus())},children:[(0,t.jsx)(c.In,{name:iB?"close":"plus",size:11}),iB?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(nd,{value:iW||t9,onChange:e=>{let n=e.target.value,i=iW||t9;iU(n);let t=iB&&iP.trim()?iP.trim():(0,d.parseQuickInput)(iA,H.familyMembers)?.description;t&&iZ((0,d.proposeRuleFromOverride)(i,n,t))},"aria-label":a("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(nd,{value:iQ,onChange:e=>{i0(e.target.value),i1(!1)},"aria-label":a("finance.currency.label"),style:{maxWidth:72},children:d.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iA.trim()||i2,children:i2?a("finance.currency.converting"):a("finance.quickAdd.add")}),i3.supported&&(0,t.jsx)(n$,{type:"button","aria-label":a("finance.voice.listening"),"aria-pressed":i3.listening,active:i3.listening,onPointerDown:()=>{i8.current=window.setTimeout(()=>{i8.current=null,i5.current=!0,(0,m.K)(30),i3.listening?i3.stop():i3.start(ra)},500)},onPointerUp:()=>{null!==i8.current&&(clearTimeout(i8.current),i8.current=null,i5.current||((0,m.K)(10),i3.listening?i3.stop():i3.start(ra))),i5.current=!1},onPointerCancel:()=>{null!==i8.current&&(clearTimeout(i8.current),i8.current=null),i5.current=!1},children:(0,t.jsx)(c.In,{name:"mic",size:16})})]}),(0,t.jsx)(es,{visible:iB,children:(0,t.jsx)(el,{ref:iY,type:"text",placeholder:a("finance.quickAdd.descPlaceholder"),maxLength:80,value:iP,onChange:e=>iN(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iO(!1),iI.current?.focus())},"aria-label":a("finance.quickAdd.descPlaceholder"),tabIndex:iB?0:-1})}),(0,t.jsx)(v.J,{expenses:H.expenses,storedOrder:ta,lockedCategoryId:tt,onToggle:e=>tr(n=>n===e?"":e),locale:i,groupLabel:a("finance.quickAdd.frequentCategories")}),iH&&(0,t.jsxs)(nf,{children:[(0,t.jsxs)("span",{children:[a("finance.categoryRules.alwaysCategorize",{match:iH.match})," ",(0,t.jsx)("strong",{children:(n=d.DEFAULT_CATEGORIES.find(e=>e.id===iH.categoryId))?(0,d.categoryLabel)(n,i):iH.categoryId}),"?"]}),(0,t.jsx)(nh,{type:"button",accent:!0,onClick:()=>{H&&iH&&(nJ({...H,categoryRules:[iH,...H.categoryRules??[]]},"finance.undo.label.added"),iZ(null))},children:a("finance.categoryRules.propose")}),(0,t.jsx)(nh,{type:"button",onClick:()=>iZ(null),children:a("finance.categoryRules.dismiss")})]}),i4&&(0,t.jsx)(nm,{style:{color:q},role:"alert",children:a("finance.currency.fxFailed")}),rn&&(0,d.parseQuickInput)(iA,H.familyMembers)&&(0,t.jsxs)(nb,{type:"button",onClick:ri,"aria-label":a("finance.recurring.makeRecurring"),children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsx)(nm,{children:a("finance.quickAdd.hint")})]})]}),(0,t.jsx)(c.dO,{items:tR.map(e=>({...e})),onReorder:tE,onCycleSize:tA,accentColor:()=>U,labels:{moveLeft:a("finance.overview.panel.moveLeft"),moveRight:a("finance.overview.panel.moveRight"),cycleSize:a("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(e$,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eM,{children:[a("finance.hero.spentIn")," ",ry," \xb7 ",tV]}),(0,t.jsxs)(eT,{children:[(0,t.jsx)(eS,{children:"€"}),(0,t.jsx)(eF,{children:rf}),(0,t.jsx)(ez,{children:rh})]}),(0,t.jsxs)(eC,{children:[(0,t.jsx)(u.Ru,{value:t_,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[a("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(tH,i)," \xb7 €",is(tZ)]})]}),tG.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:tG,accent:tJ,width:280,height:34})}),null!==rb&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:rb.onTrack===rb.total?"#7fb77e":l.w4.colors.mainTextMuted},children:a("finance.goals.hero",{on:rb.onTrack,total:rb.total})})]}),(0,t.jsx)(eI,{children:(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsx)(eE,{children:a("finance.budget.weekly")}),(0,t.jsxs)(eA,{children:["€",is(tL.spent)," ",(0,t.jsxs)(eL,{children:["/ €",tL.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:t5,over:t5>100?t5-100:0}),(0,t.jsxs)(eB,{children:[(0,t.jsxs)("span",{children:[Math.round(t5),"% ",a("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tL.remaining<0?q:U},children:tL.remaining>0?`€${is(tL.remaining)} ${a("finance.budget.remaining")}`:`€${is(Math.abs(tL.remaining))} ${a("finance.budget.over")}`})]}),(0,t.jsxs)(eD,{style:{marginTop:14},children:[(0,t.jsx)(eE,{children:a("finance.budget.monthly")}),(0,t.jsxs)(eA,{children:["€",is(tK)," ",(0,t.jsxs)(eL,{children:["/ €",H.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:t7,over:t7>100?t7-100:0}),(0,t.jsxs)(eB,{children:[(0,t.jsxs)("span",{children:[Math.round(t7),"% ",a("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[a("finance.budget.projected")," €",is(tK+(tL.projectedTotal-tL.spent))]})]})]})})]});case"overview-accounts":return(0,t.jsx)(W.V,{data:H,t:a,onSave:e=>{nJ(e,"finance.undo.label.edited")}});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(ej,{children:a("finance.charts.sixMonths")}),(0,t.jsx)(ev,{children:(0,t.jsx)(nZ,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(n_,{children:[(0,t.jsx)(nV,{color:e.color}),(0,d.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(u.ik,{data:tX,budget:H.budget.monthlyBudget,height:200}),(0,t.jsxs)(nC,{children:[(0,t.jsxs)(nI,{children:[(0,t.jsx)(c.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nR,{children:["€",is(r$)]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(c.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nR,{children:["€",is(rk)]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(c.YZ,{children:a("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nR,{children:[rM," / ",tX.length]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(c.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nR,{style:{color:t_>0?q:U},children:[t_>0?"+":"",t_,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(ej,{children:a("finance.charts.byCategory")}),(0,t.jsx)(nq,{type:"button",onClick:()=>nQ("insights"),children:a("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:rj,total:rv,size:110,centerLabel:ry.slice(0,3),centerValue:`€${is(rv)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rj.map(e=>{let n=id(e.id),r=(0,d.expensesForMember)((0,d.expensesForMonth)(H.expenses,tH),n1).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:e.color}),(0,t.jsx)(eN,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eY,{children:["€",is(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(u.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ej,{children:a("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.forecast.sub",{n:tk})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(en,{type:"button",active:tk===e,onClick:()=>tT(e),"aria-pressed":tk===e,children:a(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(I.b,{forecast:t0,firstNegDate:t4,t:a,locale:i,height:170}),tQ.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:l.w4.spacing.md,paddingTop:l.w4.spacing.sm,borderTop:`1px solid ${l.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:l.w4.colors.mainTextMuted},children:a("finance.charts.cashflow")})}),(0,t.jsx)(u.uj,{data:tQ,height:130,legendIn:a("finance.charts.in"),legendOut:a("finance.charts.out"),legendGoal:a("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ew,{children:(0,t.jsx)(ej,{children:a("finance.charts.heatmap")})}),(0,t.jsx)(u.RT,{data:t1,locale:i}),(0,t.jsxs)(nD,{children:[(0,t.jsx)("span",{children:a("finance.charts.less")}),(0,t.jsx)(nE,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:a("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ec,{children:(0,t.jsx)(c.YZ,{children:a("finance.heatmap.title")})}),(0,t.jsx)(b.D,{matrix:t2,locale:i,t:a})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ew,{children:(0,t.jsx)(ej,{children:a("finance.charts.thisWeek")})}),(0,t.jsxs)(nA,{children:[(0,t.jsxs)(nL,{children:[(0,t.jsxs)(nB,{children:["€",is(tL.spent)]}),(0,t.jsxs)(eL,{children:["/ €",tL.budget]})]}),(0,t.jsx)(u.kl,{spent:tL.spent,budget:tL.budget}),(0,t.jsxs)(nO,{children:[(0,t.jsx)("span",{children:a("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:a("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(c.YZ,{children:a("finance.recent.title")}),tq.length>8&&(0,t.jsx)(nq,{type:"button",onClick:()=>nQ("expenses"),children:a("finance.recent.viewAll",{n:tq.length})})]}),0===tq.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:a("finance.dashboard.noRecent")}):(0,t.jsx)(eG,{"aria-label":a("finance.recent.title"),children:tq.slice(0,8).map(e=>(0,t.jsx)(ig,{exp:e,finData:H,locale:i,t:a,onDelete:ro,onClone:rs,onToggleReimbursed:rc,compact:"compact"===tv},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.incomeMix.title")}),0===t3.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,padding:`${l.w4.spacing.md} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:t3,total:t8,size:100,centerLabel:a("finance.byMember.income"),centerValue:`€${is(t8)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:t3.map(e=>(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:e.color}),(0,t.jsx)(eN,{children:e.label}),(0,t.jsxs)(eY,{style:{color:U},children:["€",is(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n1?t6:t6.filter(e=>e.key===n1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.byMember.title")}),t6.length<=1&&0===H.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:U},{id:"expense",value:e.expense,color:q}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:l.w4.spacing.sm},children:[(0,t.jsx)(c.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamily,color:l.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?U:q},children:[n.net>=0?"+":"","€",is(Math.abs(n.net))]}),(0,t.jsx)(u.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(u.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:l.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(c.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(c.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:U},children:["€",is(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:U,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",is(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:q,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nX&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nK,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(c.YZ,{children:a("finance.tx.title")}),"month"===iF&&0===H.expenses.length&&(0,t.jsx)(nU,{ref:iR,value:n0,onChange:e=>n4(e.target.value),"aria-label":a("finance.insights.month"),children:tY.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),0===tq.length&&0===tU.length?(0,t.jsx)(ey,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:ik>0?a("finance.search.noResults"):a("finance.tx.empty")})}):(0,t.jsx)(ey,{span:12,children:(0,t.jsx)(eG,{"aria-label":a("finance.tx.title"),children:[...tq.map(e=>({...e,_kind:"expense"})),...tU.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ig,{exp:e,finData:H,locale:i,t:a,onDelete:ro,onClone:rs,onToggleReimbursed:rc,compact:"compact"===tv,selectMode:iS.selectMode,selected:iS.selectedIds.has(e.id),onToggleSelect:iS.toggleId,longPressHandlers:iS.longPressHandlers,onEnterSelectMode:iS.enterSelectMode},e.id):(0,t.jsxs)(eX,{compact:"compact"===tv,children:["compact"===tv?(0,t.jsx)(eQ,{color:U,"aria-hidden":!0}):(0,t.jsx)(e0,{color:U,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e1,{children:e.source}),"compact"!==tv&&(0,t.jsxs)(e2,{children:[ic(e.date,i)," \xb7 ",a("finance.dashboard.income")]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e3,{style:{color:U},children:["+€",io(e.amount)]}),(0,t.jsx)(nn,{className:"delete-btn",type:"button",onClick:()=>rl(e.id),"aria-label":`${a("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nX&&(0,t.jsxs)(ef,{children:[(0,t.jsxs)(nK,{style:{marginBottom:0},children:[(0,t.jsx)(c.YZ,{children:a("finance.insights.title")}),"month"===iF&&0===H.expenses.length&&(0,t.jsx)(nU,{value:n0,onChange:e=>n4(e.target.value),"aria-label":a("finance.insights.month"),children:tY.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),null!==rT&&(0,t.jsxs)(ep,{children:[(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:a("finance.kpi.biggestExpense")}),(0,t.jsxs)(ex,{children:["€",rT.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:rT.biggest.description?`${rT.biggest.description} \xb7 ${(0,d.categoryLabel)(id(rT.biggest.categoryId),i)}`:(0,d.categoryLabel)(id(rT.biggest.categoryId),i)})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:a("finance.kpi.topSpender")}),(0,t.jsxs)(ex,{children:["€",rT.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:rT.topMemberLabel})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:a("finance.kpi.busiestDay")}),(0,t.jsxs)(ex,{children:["€",rT.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:a(`finance.weekday.${rT.busiestDowKey}`)})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:a("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(ex,{children:["€",rT.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:0===rT.reimbursableTotal?"—":a("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(c.dO,{items:tF.map(e=>({...e})),onReorder:tC,onCycleSize:tI,accentColor:()=>U,labels:{moveLeft:a("finance.insights.panel.moveLeft"),moveRight:a("finance.insights.panel.moveRight"),cycleSize:a("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.charts.sixMonths")}),(0,t.jsx)(u.ik,{data:tX,budget:H.budget.monthlyBudget,height:180}),(0,t.jsxs)(nC,{style:{marginTop:l.w4.spacing.sm},children:[(0,t.jsxs)(nI,{children:[(0,t.jsx)(c.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nR,{children:["€",is(r$)]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(c.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nR,{children:["€",is(rk)]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(c.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nR,{style:{color:t_>0?q:U},children:[t_>0?"+":"",t_,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.charts.byCategory")}),0===rj.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${l.w4.spacing.lg} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:rj,total:rv,size:110,centerLabel:ry.slice(0,3),centerValue:`€${is(rv)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rj.map(e=>{let n=id(e.id),r=e.color||l.w4.colors.mainTextMuted,a=(0,d.expensesForMember)((0,d.expensesForMonth)(H.expenses,tH),n1).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:r}),(0,t.jsx)(eN,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eY,{children:["€",is(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.insights.title")}),0===tB.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tB.map((e,n)=>(0,t.jsxs)(ni,{itype:e.type,children:[(0,t.jsx)(nt,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:a(e.messageKey,tN(e.params))}),e.memberId&&(()=>{let n=H.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=H.familyMembers.indexOf(n);return(0,t.jsxs)(nr,{children:[(0,t.jsx)(c.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.insights.anomalies")}),0===tO.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tO.map(e=>(0,t.jsxs)(ni,{itype:e.type,children:[(0,t.jsx)(nt,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:a(e.messageKey,tN(e.params))})}),e.snoozeKey&&(0,t.jsx)(na,{type:"button",title:a("finance.insights.anomalies.dismiss"),"aria-label":a("finance.insights.anomalies.dismiss"),onClick:()=>{tP(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.smallMultiples.title")}),(0,t.jsx)(A.R,{expenses:H.expenses,familyMembers:H.familyMembers,getMemberColor:h.a8,t:a,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.reimbursables.tracker.title")}),(0,t.jsx)(E.p,{expenses:H.expenses,familyMembers:H.familyMembers,getMemberColor:h.a8,t:a,locale:i})]});case"analytics-budgets":return(0,t.jsx)(R.z,{});case"analytics-bills":return(0,t.jsx)(F.J,{});case"analytics-subscriptions":return(0,t.jsx)(T.n,{});case"analytics-goals":return(0,t.jsx)(S.f,{});case"analytics-recurring":return(0,t.jsx)(z.b,{});case"analytics-rules":return(0,t.jsx)(D.K,{});case"analytics-networth":return(0,t.jsx)(C.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.byMember.title")}),0===t6.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:l.w4.spacing.sm},children:t6.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(c.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(c.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:U},children:["€",is(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:U,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",is(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:q,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nH,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),ts&&(0,t.jsx)(ix,{finData:H,activeMemberId:n1,locale:i,t:a,onClose:()=>tl(!1),onSubmit:tg}),tc&&(0,t.jsx)(iu,{finData:H,locale:i,t:a,onClose:()=>td(!1),onSubmit:tx}),tp&&(0,t.jsx)(im,{finData:H,t:a,onClose:()=>tm(!1),onSubmit:tu}),(0,t.jsx)(y.S,{labelKey:ne,onUndo:()=>{nG()},onDismiss:()=>nu(null),t:a}),iS.selectMode&&"expenses"===nX&&(0,t.jsx)(k.S,{selectionCount:iS.selectedIds.size,visibleIds:tq.map(e=>e.id),selectedIds:iS.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:i,t:a,onCancel:iS.exitSelectMode,onSelectAll:()=>iS.selectAll(tq.map(e=>e.id)),onCategorise:rm,onDelete:rp,onMarkReimbursed:ru}),iD&&(0,t.jsx)(w.m,{t:a,onClose:()=>iE(!1)}),(0,t.jsx)(O.X,{open:n3,onClose:()=>n8(!1),ariaLabel:a("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(et,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(c.YZ,{children:a("finance.settings.title")}),(0,t.jsx)(c.K0,{onClick:()=>n8(!1),title:a("finance.actions.settings"),children:(0,t.jsx)(c.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"drawer-weekly-budget",children:a("finance.settings.weeklyBudget")}),(0,t.jsx)(nY,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(H.budget.weeklyBudget),value:tf,onChange:e=>th(e.target.value)})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"drawer-monthly-budget",children:a("finance.settings.monthlyBudget")}),(0,t.jsx)(nY,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(H.budget.monthlyBudget),value:tb,onChange:e=>ty(e.target.value)})]}),(0,t.jsx)(c.$n,{variant:"primary",onClick:()=>{rd(),n8(!1)},style:{height:44},children:tw?a("finance.settings.saved"):a("finance.settings.save")})]}),(0,t.jsx)(P.u,{data:H,getMemberColor:h.a8,t:a,onSaveMember:(e,n)=>{let i=H.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);nJ({...H,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(O.X,{open:ir,onClose:()=>{ia(!1),ib(null)},ariaLabel:a("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(et,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(c.YZ,{children:a("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!ih&&(0,t.jsx)(c.$n,{variant:"ghost",style:{height:28},onClick:()=>ib({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:a("finance.categories.new")}),(0,t.jsx)(c.K0,{onClick:()=>{ia(!1),ib(null)},title:a("finance.categories.cancel"),children:(0,t.jsx)(c.In,{name:"close",size:16})})]})]}),ih&&(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.md,display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{children:a("finance.categories.labelEn")}),(0,t.jsx)(nW,{value:ih.labelEn,onChange:e=>ib(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{children:a("finance.categories.labelPt")}),(0,t.jsx)(nW,{value:ih.labelPt,onChange:e=>ib(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{children:a("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:ih.icon,onChange:e=>ib(n=>n&&{...n,icon:e.target.value}),style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:c.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{children:a("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:ih.color,onChange:e=>ib(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nW,{value:ih.color,onChange:e=>ib(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(c.$n,{variant:"ghost",style:{height:28},onClick:()=>ib(null),children:a("finance.categories.cancel")}),(0,t.jsx)(c.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!ih.labelEn||!ih.labelPt)return;let e={id:(0,g.z)(),labelEn:ih.labelEn,labelPt:ih.labelPt,icon:ih.icon,color:ih.color,isCustom:!0},n=H.categories??[];nJ({...H,categories:[...n,e]},"finance.undo.label.added"),ib(null)},children:a("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.n6)(e.icon)?(0,t.jsx)(c.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:a("finance.categories.builtIn")})]},e.id)),(H.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.n6)(e.icon)?(0,t.jsx)(c.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)(c.K0,{title:a("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(H.categories??[]).filter(n=>n.id!==e.id);nJ({...H,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(c.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(O.X,{open:null!==iG,onClose:()=>iX(null),ariaLabel:a("finance.recurring.makeRecurring"),maxWidth:360,children:iG&&(0,t.jsxs)(ny,{children:[(0,t.jsxs)(c.YZ,{children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nw,{children:a("finance.recurring.frequency")}),(0,t.jsx)(nj,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nv,{type:"button",active:iG.cadence===e,onClick:()=>iX(n=>n?{...n,cadence:e}:null),children:a(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nw,{children:a("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iG.firstDue,onChange:e=>iX(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(c.$n,{variant:"ghost",onClick:()=>iX(null),children:a("finance.recurring.cancel")}),(0,t.jsx)(c.$n,{variant:"primary",onClick:rt,disabled:!iG.firstDue,children:a("finance.recurring.confirm")})]})]})}),n5&&(0,t.jsx)(L.h,{data:H,month:n0,locale:i,t:a,getMemberColor:h.a8})]})}function im({finData:e,t:n,onClose:i,onSubmit:a}){let o=(0,d.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[p,m]=(0,r.useState)(""),u=parseFloat(p.replace(",",".")),x=p.trim().length>0&&!Number.isNaN(u),g=x?u-o:0;return(0,t.jsx)(O.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nG,{children:[(0,t.jsxs)(nX,{children:[(0,t.jsx)(c.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nQ,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&a(u)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:l.w4.spacing.sm,background:l.w4.colors.sidebarHover,borderRadius:l.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",io(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:l.w4.colors.mainTextMuted},children:["€",io(s)]})]})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n8,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:p,onChange:e=>m(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:g>0?U:q,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:io(g)}):n("finance.balance.deltaDown",{n:io(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function iu({finData:e,locale:n,t:i,onClose:a,onSubmit:o}){let[s,d]=(0,r.useState)(""),[p,m]=(0,r.useState)(il()),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)(""),[y,w]=(0,r.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(O.X,{open:!0,onClose:a,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nG,{children:[(0,t.jsxs)(nX,{children:[(0,t.jsx)(c.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nQ,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,g.z)(),amount:j,date:p,source:u.trim(),createdAt:Date.now(),...f?{goalId:f}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(n0,{children:[(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n8,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>d(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n8,{id:"inc-date",type:"date",value:p,onChange:e=>m(e.target.value)})]})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n8,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(c.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(c.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n);return(0,t.jsxs)(c.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n5,{id:"inc-goal",value:f,onChange:e=>b(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:a,children:i("finance.income.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function ix({finData:e,activeMemberId:n,locale:i,t:a,onClose:o,onSubmit:s}){let[p,m]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)("other"),[y,w]=(0,r.useState)(il()),[j,v]=(0,r.useState)("single"),[$,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,r.useState)([]),[z,C]=(0,r.useState)(""),[I,R]=(0,r.useState)(!1),D=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&b((0,d.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(p.replace(",","."))||0,A=M.length,L="split"===j&&A>0?E/A:E,B=E>0&&!!y&&("single"===j||"split"===j&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),R(!1))},N=(0,r.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),Y=[{id:"shared",name:a("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(O.X,{open:!0,onClose:o,ariaLabel:a("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nJ,{children:[(0,t.jsxs)(nX,{children:[(0,t.jsxs)(c.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(nQ,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),r=Date.now(),a={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=f)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:E,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===$?void 0:$,createdAt:r,...o}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,a)=>({id:(0,g.z)(),amount:0===a?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${A})`:f,type:"daily",childId:i,createdAt:r+a,...o}))}s(i,a,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(n0,{children:[(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,t.jsx)(n8,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:p,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,t.jsx)(n8,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,t.jsx)(n8,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(n5,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{children:a("finance.tags.label")}),(0,t.jsxs)(ir,{children:[(0,t.jsxs)(ie,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(c.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":a("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(n9,{ref:D,type:"text",value:z,placeholder:0===S.length?a("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),R(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&R(!1)},onBlur:()=>{z.trim()&&P(z),setTimeout(()=>R(!1),150)},onFocus:()=>R(!0),"aria-label":a("finance.tags.label")})]}),I&&N.length>0&&(0,t.jsx)(ii,{children:N.map(e=>(0,t.jsxs)(it,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{children:a("finance.modal.assign")}),(0,t.jsxs)(n4,{role:"tablist",children:[(0,t.jsx)(n1,{type:"button",active:"single"===j,onClick:()=>v("single"),children:a("finance.modal.member")}),(0,t.jsx)(n1,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n2,{style:{marginTop:l.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(n6,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n2,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(n6,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(n3,{style:{marginTop:l.w4.spacing.xs},children:a("finance.modal.splitEach",{n:A,amount:io(L)})})]})]}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:o,children:a("finance.member.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!B,children:a("finance.quickAdd.add")})]})]})]})})}function ig({exp:e,finData:n,locale:i,t:r,onDelete:a,onClone:o,onToggleReimbursed:s,compact:p=!1,selectMode:m=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:g}){let f=id(e.categoryId),b=n.familyMembers.findIndex(n=>n.id===e.childId),y=b>=0?n.familyMembers[b]:null,w=y?(0,h.a8)(y,b):l.w4.colors.mainTextMuted,j=e.split&&e.split.length>0?e.split.slice(0,4).map(e=>{let i=n.familyMembers.findIndex(n=>n.id===e.memberId),t=i>=0?n.familyMembers[i]:null;return t?{id:t.id,name:t.name,role:t.role,color:(0,h.a8)(t,i)}:{id:e.memberId,name:e.memberId.slice(0,2).toUpperCase(),role:"adult",color:l.w4.colors.mainTextMuted}}):null,v=e.split&&e.split.length>4?e.split.length-4:0,$=g?g(e.id):null,k=n=>{m&&x&&"INPUT"!==n.target.tagName&&x(e.id)},M=e.isReimbursable&&!m?s?(0,t.jsx)(e9,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e7,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,T=!m&&o?(0,t.jsx)(ne,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,S=m?null:(0,t.jsx)(nn,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),F=m?(0,t.jsx)(eJ,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,z=m?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return p?(0,t.jsxs)(eX,{compact:!0,style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(eQ,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(e4,{children:(0,t.jsxs)(e1,{style:{display:"flex",alignItems:"center",gap:6},children:[j?(0,t.jsxs)(e8,{size:16,children:[j.map(e=>(0,t.jsx)(c.eu,{member:e,size:16},e.id)),v>0&&(0,t.jsxs)(e5,{size:16,children:["+",v]})]}):y?(0,t.jsx)(c.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:13,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,d.categoryLabel)(f,i)})]})}),(0,t.jsxs)(e6,{children:[M,(0,t.jsxs)(e3,{children:["−€",io(e.amount)]}),T,S]})]}):(0,t.jsxs)(eX,{style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e0,{color:f.color,children:(0,c.n6)(f.icon)?(0,t.jsx)(c.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e1,{children:e.description||(0,d.categoryLabel)(f,i)}),(0,t.jsxs)(e2,{children:[j?(0,t.jsxs)(e8,{size:14,children:[j.map(e=>(0,t.jsx)(c.eu,{member:e,size:14},e.id)),v>0&&(0,t.jsxs)(e5,{size:14,children:["+",v]})]}):y?(0,t.jsx)(c.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:11,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,d.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:ic(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(ia,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e6,{children:[M,"recurring"===e.type&&(0,t.jsx)(e7,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e3,{children:["−€",io(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:l.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),T,S]})]})}}}]);