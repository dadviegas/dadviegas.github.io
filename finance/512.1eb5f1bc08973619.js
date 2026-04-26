"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),r=i(8997),a=i(7991),o=i(6859),s=i.n(o),l=i(2799),c=i(4764),d=i(2445),p=i(3759),m=i(789),u=i(5030),x=i(9454),g=i(8170),f=i(4041),h=i(948),b=i(719),y=i(2405),w=i(9546),j=i(5854),v=i(3616),$=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),F=i(8635),z=i(8501),C=i(1789),R=i(216),I=i(9419),D=i(341),E=i(9378),L=i(1423),A=i(1255),B=i(3451),O=i(545),P=i(2167),N=i(7637),Y=i(6891),W=i(1331);let q="#7fb77e",U="#f85149",H=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,K=c.w4.suites.lab,Z=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  animation: ${H} 0.25s ease both;
  overflow: hidden;
`,_=s().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,J=s().div`
  display: none;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,G=s().div`
  padding: 0 ${c.w4.spacing.md};
  border-bottom: 1px solid ${c.w4.colors.border};
  background: ${c.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  /* overflow-x: auto would force overflow-y: clip, hiding Dropdown menus
     that extend below the bar. Use overflow: visible and rely on flex-wrap
     on small screens. */
  flex-wrap: wrap;
  overflow: visible;
`,V=s().div`
  flex: 1;
  min-width: 0;

  @media (max-width: ${c.w4.breakpoints.md}) {
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
`,X=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  flex-shrink: 0;

  @media (max-width: ${c.w4.breakpoints.md}) {
    /* Wraps to its own row below TabBarLeft. Flex-wrap inside lets
       buttons reflow to multiple sub-rows if needed without forcing
       overflow on the parent (Dropdown menus need overflow-y: visible). */
    flex-basis: 100%;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-bottom: ${c.w4.spacing.xs};
  }
`,Q=s().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${c.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${K}`:"transparent"};
  background: ${({active:e})=>e?`${K}1f`:"transparent"};
  color: ${({active:e})=>e?K:c.w4.colors.mainTextMuted};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamily};
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;

  &:hover {
    color: ${c.w4.colors.mainText};
    background: ${c.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${K};
    outline-offset: 2px;
  }
`,ee=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,en=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${K}`:"transparent"};
  background: ${({active:e})=>e?`${K}1f`:"transparent"};
  color: ${({active:e})=>e?K:c.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;

  &:hover {
    color: ${c.w4.colors.mainText};
    background: ${c.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${K};
    outline-offset: 2px;
  }
`,ei=s().div`
  padding: 6px ${c.w4.spacing.md};
  border-bottom: 1px solid ${c.w4.colors.border};
  background: ${c.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  flex-shrink: 0;
  user-select: none;
`;let et=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg} ${c.w4.borderRadius.lg} 0 0;
  width: 100%;
  max-width: 480px;
  max-height: 80dvh;
  overflow-y: auto;
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  animation: ${H} 0.2s ease;

  @media (min-width: ${c.w4.breakpoints.md}) {
    border-radius: ${c.w4.borderRadius.lg};
  }
`,er=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,ea=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${q};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,eo=s().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  padding: 0 6px;
  min-height: 44px;
  border-radius: ${c.w4.borderRadius.sm};
  transition: color 120ms ease, background 120ms ease;
  white-space: nowrap;
  flex-shrink: 0;
  &:hover { color: ${c.w4.colors.mainText}; background: ${c.w4.colors.sidebarHover}; }
  &:focus-visible { outline: 2px solid ${c.w4.colors.accent}; outline-offset: 2px; }
`,es=s().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,el=s().input`
  flex: 1;
  height: 44px;
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 0 ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamily};
  color: ${c.w4.colors.mainText};
  outline: none;
  &::placeholder { color: ${c.w4.colors.mainTextMuted}; }
  &:focus { border-color: ${c.w4.colors.accent}; }
`;s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${q};
  padding: ${c.w4.spacing.lg};
`;let ec=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`;s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${q};
  padding: ${c.w4.spacing.md};
`;let ed=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`,ep=s().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,em=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eu=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ex=s().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
`,eg=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ef=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.lg};
`;s().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.lg}) {
    grid-template-columns: 60fr 40fr;
  }
`,s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  min-width: 0;
`;let eh=s().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    padding: ${c.w4.spacing.lg};
  }
`;s().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;let eb=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,ey=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  border-left: 2px solid ${q};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    border-left-color: ${q};
  }

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${c.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,ew=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,ej=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ev=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,e$=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${q};
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,ek=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eM=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eT=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eS=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,eF=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,ez=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eC=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eR=s().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,eI=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eD=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,eE=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,eL=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eA=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eB=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eO=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,eP=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eN=s().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eY=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eW="finance:list-density",eq="finance:quick-categories",eU="finance:forecast-months",eH="finance:active-member",eK="finance:insights-layout",eZ="finance:overview-layout",e_=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eJ=[{id:"overview-hero",size:"lg"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eG=s().input`
  appearance: none;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 1.5px solid ${c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,eV=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eX=s().li`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: ${({compact:e})=>e?"0 8px":"10px 8px"};
  border-radius: ${c.w4.borderRadius.md};
  transition: background 120ms ease, min-height 150ms ease, padding 150ms ease;
  cursor: default;
  /* Comfortable: 48px natural height; Compact: 32px visible but ≥44px touch target via padding */
  min-height: ${({compact:e})=>e?"44px":"48px"};

  &:hover { background: ${c.w4.colors.sidebarHover}; }
  @media (hover: hover) and (pointer: fine) {
    &:hover .delete-btn,
    &:hover .clone-btn { opacity: 1; }
  }
`,eQ=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,e0=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,e4=s().div`
  flex: 1;
  min-width: 0;
`,e1=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e2=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,e6=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,e3=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e8=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${q}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?q:"#facc15"};
  white-space: nowrap;
`,e5=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
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
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,e7=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,e9=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainTextMuted};
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
    color: ${U};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,ne=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${q}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${q}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,nn=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?U:"warning"===e?"#facc15":"success"===e?q:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,ni=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,nt=s().button`
  margin-left: auto;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 2px 4px;
  cursor: pointer;
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1;
  border-radius: ${c.w4.borderRadius.sm};
  transition: color 120ms ease, background 120ms ease;
  &:hover {
    color: ${c.w4.colors.mainText};
    background: ${c.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`;s()(ey)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let nr=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,na=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:n})=>e?n:c.w4.colors.border};
  background: ${({active:e,color:n})=>e?`${n}22`:c.w4.colors.mainBg};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:focus-visible { outline: 2px solid ${c.w4.colors.accent}; outline-offset: 2px; }
`,no=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,ns=s().input`
  width: 100%;
  flex: 1;
  min-width: 160px;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${c.w4.spacing.sm};
  height: 44px;
  font-family: ${c.w4.typography.fontFamily};
  outline: none;
  transition: border-color 120ms ease;

  &::placeholder { color: ${c.w4.colors.mainTextMuted}; }
  &:focus {
    border-color: ${c.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,nl=s().select`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${c.w4.spacing.sm};
  height: 44px;
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;

  &:focus { border-color: ${c.w4.colors.accent}; }
  option { background: ${c.w4.colors.surface}; }
`,nc=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${q};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nd=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,np=(0,l.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,nm=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${q};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,nu=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${q};
  animation: ${np} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nx=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.sm};
  padding: 4px 8px;
  flex-wrap: wrap;
  animation: ${H} 0.2s ease both;

  strong {
    color: ${c.w4.colors.mainText};
    font-weight: 600;
  }
`,ng=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?q:c.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${q}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${q}44`:c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${q}28`:c.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?q:c.w4.colors.borderStrong??c.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nf=s().button`
  display: inline-flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #a371f7;
  background: rgba(163, 113, 247, 0.08);
  border: 1px solid rgba(163, 113, 247, 0.3);
  border-radius: ${c.w4.borderRadius.sm};
  padding: 2px 8px;
  cursor: pointer;
  transition: background 140ms ease, border-color 140ms ease;
  &:hover {
    background: rgba(163, 113, 247, 0.16);
    border-color: rgba(163, 113, 247, 0.55);
  }
`,nh=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  animation: ${H} 0.2s ease;
`,nb=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,ny=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,nw=s().button`
  flex: 1;
  padding: 6px 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: ${c.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?"rgba(163,113,247,0.7)":c.w4.colors.border};
  background: ${({active:e})=>e?"rgba(163,113,247,0.12)":"transparent"};
  color: ${({active:e})=>e?"#a371f7":c.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;
`,nj=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${c.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?q:c.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?q:c.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${q};
    color: ${q};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nv=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,n$=s().ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 50;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.xs} 0;
  margin: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
`,nk=s().li`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  transition: background 120ms ease;

  &:hover,
  &[aria-selected='true'] {
    background: ${c.w4.colors.sidebarHover};
  }
`,nM=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nT=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nS=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nF=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,nz=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nC=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nR=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nI=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nD=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,nE=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nL=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nA=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${q}; }
`,nB=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nO=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,nP=s().input`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 0 ${c.w4.spacing.sm};
  height: 44px;
  width: 100%;
  outline: none;
  transition: border-color 120ms ease;

  &:focus {
    border-color: ${c.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,nN=s().input`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamily};
  padding: 0 ${c.w4.spacing.sm};
  height: 36px;
  width: 100%;
  outline: none;
  transition: border-color 120ms ease;

  &:focus {
    border-color: ${c.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,nY=s().select`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  padding: 6px ${c.w4.spacing.sm};
  outline: none;
  cursor: pointer;
  font-family: ${c.w4.typography.fontFamilyMono};
  transition: border-color 120ms ease;
  height: 36px;

  &:focus { border-color: ${c.w4.colors.accent}; }
  option { background: ${c.w4.colors.surface}; }
`;s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 120px;
  }
`,s().div`
  flex: 1;
  height: 8px;
  background: ${c.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,s().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,s().div`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  width: 60px;
  text-align: right;
  flex-shrink: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 72px;
  }
`;let nW=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 120ms ease;

  &:hover { color: ${c.w4.colors.accentHover??c.w4.colors.accent}; }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,nq=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
`;s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
`;let nU=s().footer`
  flex-shrink: 0;
  padding: ${c.w4.spacing.xs} ${c.w4.spacing.md};
  border-top: 1px solid ${c.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  /* Respect iOS safe area at bottom */
  padding-bottom: max(${c.w4.spacing.xs}, env(safe-area-inset-bottom));

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,nH=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nK=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nZ=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,n_=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg} ${c.w4.borderRadius.lg} ${c.w4.borderRadius.md} ${c.w4.borderRadius.md};
  border-left: 2px solid ${q};
  width: 100%;
  max-width: 560px;
  max-height: 80dvh;
  overflow-y: auto;
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    border-radius: ${c.w4.borderRadius.lg};
    max-height: calc(100dvh - ${c.w4.spacing.xl});
  }
`,nJ=s().div`
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,nG=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nV=s().button`
  background: transparent;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainTextMuted};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  transition: border-color 120ms ease, color 120ms ease;

  &:hover {
    border-color: ${c.w4.colors.borderStrong??c.w4.colors.mainTextMuted};
    color: ${c.w4.colors.mainText};
  }
`,nX=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nQ=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n0=s().button`
  background: ${({active:e})=>e?c.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?c.w4.colors.mainText:c.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
`,n4=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,n1=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({active:e,color:n})=>e?`${n}22`:c.w4.colors.mainBg};
  border: 1px solid ${({active:e,color:n})=>e?n:c.w4.colors.border};
  color: ${({active:e})=>e?c.w4.colors.mainText:c.w4.colors.mainTextMuted};
  border-radius: 999px;
  padding: 6px 10px 6px 6px;
  min-height: 44px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease;
`,n2=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n6=s().input`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${c.w4.spacing.sm};
  font-family: ${c.w4.typography.fontFamily};
  outline: none;
  transition: border-color 120ms ease;

  &::placeholder { color: ${c.w4.colors.mainTextMuted}; }
  &:focus {
    border-color: ${c.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(0.7);
    cursor: pointer;
  }
`,n3=s().select`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${c.w4.spacing.sm};
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;

  &:focus { border-color: ${c.w4.colors.accent}; }
  option { background: ${c.w4.colors.surface}; }
`,n8=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,n5=s().input`
  flex: 1;
  min-width: 80px;
  background: transparent;
  border: none;
  outline: none;
  color: ${c.w4.colors.mainText};
  font-family: ${c.w4.typography.fontFamily};
  font-size: 13px;
  padding: 2px 0;
  &::placeholder { color: ${c.w4.colors.mainTextMuted}; }
`,n7=s().div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  padding: 6px ${c.w4.spacing.sm};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  min-height: 36px;
  cursor: text;
  &:focus-within {
    border-color: ${c.w4.colors.accent};
  }
`,n9=s().ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 20;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 4px 0;
  list-style: none;
  margin: 0;
  max-height: 160px;
  overflow-y: auto;
`,ie=s().li`
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,ii=s().div`
  position: relative;
`,it=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function ir(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function ia(e){return Math.round(e).toLocaleString("pt-PT")}function io(){return new Date().toISOString().slice(0,10)}function is(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function il(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function ic({finData:e,t:n,onClose:i,onSubmit:r}){let o=(0,d.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[l,p]=(0,a.useState)(""),m=parseFloat(l.replace(",",".")),x=l.trim().length>0&&!Number.isNaN(m),g=x?m-o:0;return(0,t.jsx)(P.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nJ,{children:[(0,t.jsxs)(nG,{children:[(0,t.jsx)(u.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nV,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&r(m)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:c.w4.spacing.sm,background:c.w4.colors.sidebarHover,borderRadius:c.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",ir(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:c.w4.colors.mainTextMuted},children:["€",ir(s)]})]})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n6,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:l,onChange:e=>p(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:g>0?q:U,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:ir(g)}):n("finance.balance.deltaDown",{n:ir(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(n8,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function id({finData:e,locale:n,t:i,onClose:r,onSubmit:o}){let[s,l]=(0,a.useState)(""),[d,p]=(0,a.useState)(io()),[m,x]=(0,a.useState)(""),[g,h]=(0,a.useState)(""),[y,w]=(0,a.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&m.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(P.X,{open:!0,onClose:r,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nJ,{children:[(0,t.jsxs)(nG,{children:[(0,t.jsx)(u.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nV,{type:"button",onClick:r,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,f.z)(),amount:j,date:d,source:m.trim(),createdAt:Date.now(),...g?{goalId:g}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nX,{children:[(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n6,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>l(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n6,{id:"inc-date",type:"date",value:d,onChange:e=>p(e.target.value)})]})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n6,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(u.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(u.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n);return(0,t.jsxs)(u.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n3,{id:"inc-goal",value:g,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(n8,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:r,children:i("finance.income.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function ip({finData:e,activeMemberId:n,locale:i,t:r,onClose:o,onSubmit:s}){let[l,p]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),[g,h]=(0,a.useState)("other"),[y,w]=(0,a.useState)(io()),[j,v]=(0,a.useState)("single"),[$,k]=(0,a.useState)(n),[M,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,a.useState)([]),[z,C]=(0,a.useState)(""),[R,I]=(0,a.useState)(!1),D=(0,a.useRef)(null);(0,a.useEffect)(()=>{m.trim()&&h((0,d.guessCategoryWithRules)(e,m))},[m,e]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(l.replace(",","."))||0,L=M.length,A="split"===j&&L>0?E/L:E,B=E>0&&!!y&&("single"===j||"split"===j&&L>0),O=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),I(!1))},N=(0,a.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),Y=[{id:"shared",name:r("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(P.X,{open:!0,onClose:o,ariaLabel:r("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(n_,{children:[(0,t.jsxs)(nG,{children:[(0,t.jsxs)(u.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,t.jsx)(nV,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=m.trim(),r=Date.now(),a={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=g)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,f.z)(),amount:E,date:y,categoryId:g,description:t||g,type:"daily",childId:"shared"===$?void 0:$,createdAt:r,...o}];else{let e=Math.round(E/L*100)/100,n=Math.round((E-e*L)*100)/100;i=M.map((i,a)=>({id:(0,f.z)(),amount:0===a?e+n:e,date:y,categoryId:g,description:t?`${t} (1/${L})`:g,type:"daily",childId:i,createdAt:r+a,...o}))}s(i,a,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nX,{children:[(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"exp-amount",children:r("finance.modal.amount")}),(0,t.jsx)(n6,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"exp-date",children:r("finance.modal.date")}),(0,t.jsx)(n6,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"exp-desc",children:r("finance.modal.description")}),(0,t.jsx)(n6,{id:"exp-desc",type:"text",placeholder:r("finance.modal.descPlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,t.jsx)(n3,{id:"exp-cat",value:g,onChange:e=>h(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{children:r("finance.tags.label")}),(0,t.jsxs)(ii,{children:[(0,t.jsxs)(n7,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(u.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":r("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(n5,{ref:D,type:"text",value:z,placeholder:0===S.length?r("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),I(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),O(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&I(!1)},onBlur:()=>{z.trim()&&O(z),setTimeout(()=>I(!1),150)},onFocus:()=>I(!0),"aria-label":r("finance.tags.label")})]}),R&&N.length>0&&(0,t.jsx)(n9,{children:N.map(e=>(0,t.jsxs)(ie,{onMouseDown:n=>{n.preventDefault(),O(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{children:r("finance.modal.assign")}),(0,t.jsxs)(nQ,{role:"tablist",children:[(0,t.jsx)(n0,{type:"button",active:"single"===j,onClick:()=>v("single"),children:r("finance.modal.member")}),(0,t.jsx)(n0,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:r("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n4,{style:{marginTop:c.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(n1,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n4,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(n1,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),L>0&&E>0&&(0,t.jsx)(n2,{style:{marginTop:c.w4.spacing.xs},children:r("finance.modal.splitEach",{n:L,amount:ir(A)})})]})]}),(0,t.jsxs)(n8,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:o,children:r("finance.member.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!B,children:r("finance.quickAdd.add")})]})]})]})})}function im({exp:e,finData:n,locale:i,t:r,onDelete:a,onClone:o,onToggleReimbursed:s,compact:l=!1,selectMode:p=!1,selected:m=!1,onToggleSelect:x,longPressHandlers:g}){let f=il(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),y=h>=0?n.familyMembers[h]:null,w=y?(0,b.a8)(y,h):c.w4.colors.mainTextMuted,j=g?g(e.id):null,v=n=>{p&&x&&"INPUT"!==n.target.tagName&&x(e.id)},$=e.isReimbursable&&!p?s?(0,t.jsx)(e5,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e8,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,k=!p&&o?(0,t.jsx)(e7,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,M=p?null:(0,t.jsx)(e9,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),T=p?(0,t.jsx)(eG,{type:"checkbox",checked:m,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,S=p?{background:m?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:m?"1px solid rgba(127,183,126,0.35)":"none"}:{};return l?(0,t.jsxs)(eX,{compact:!0,style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eQ,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(e4,{children:(0,t.jsxs)(e1,{style:{display:"flex",alignItems:"center",gap:6},children:[y?(0,t.jsx)(u.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:13,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,d.categoryLabel)(f,i)})]})}),(0,t.jsxs)(e6,{children:[$,(0,t.jsxs)(e3,{children:["−€",ir(e.amount)]}),k,M]})]}):(0,t.jsxs)(eX,{style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(e0,{color:f.color,children:(0,u.n6)(f.icon)?(0,t.jsx)(u.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e1,{children:e.description||(0,d.categoryLabel)(f,i)}),(0,t.jsxs)(e2,{children:[y?(0,t.jsx)(u.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:11,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,d.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:is(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(it,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e6,{children:[$,"recurring"===e.type&&(0,t.jsx)(e8,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e3,{children:["−€",ir(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),k,M]})]})}let iu=document.getElementById("root");if(!iu)throw Error("Root element #root not found");(0,r.createRoot)(iu).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,g.Ym)(),r=(0,a.useMemo)(()=>(0,g.Nx)(i,h.A),[i]),{data:o,loaded:s,save:l}=(0,d.useFinance)(),H=o??{...d.EMPTY_FINANCE_DATA},[K]=(0,d.useProfile)(),eG=(0,a.useMemo)(()=>(0,d.recentMerchants)(H.expenses,20).slice(0,6),[H.expenses]),{canUndo:e8,latestLabelKey:e5,undo:e7}=(0,d.useUndo)(),[np,n_]=(0,a.useState)(null),nJ=(0,a.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:H,labelKey:n,ts:Date.now()}),n_(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await l(e)},[H,l]),nG=(0,a.useCallback)(async()=>{let e=e7();e&&(n_("finance.undo.label.reverted"),await l(e),setTimeout(()=>n_(null),2500))},[e7,l]),[nV,nX]=(0,a.useState)("overview"),[nQ,n0]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[n4,n1]=(0,a.useState)("shared");(0,a.useEffect)(()=>{(0,c.PL)(eH).then(e=>{e&&n1(e)})},[]);let n2=(0,a.useCallback)(e=>{n1(e),(0,c.Is)(eH,e)},[]),[n6,n3]=(0,a.useState)(!1),[n8,n5]=(0,a.useState)(!1),[n7,n9]=(0,a.useState)([]),[ie,ii]=(0,a.useState)(!1),[it,iu]=(0,a.useState)(!1),[ix,ig]=(0,a.useState)(null),ih=+(n7.length>0)+ +!!ie,[ib,iy]=(0,a.useState)(!1),[iw,ij]=(0,a.useState)({}),iv=(0,a.useMemo)(()=>{let e=0;return iw.text&&e++,iw.memberId&&e++,iw.categoryId&&e++,(iw.dateFrom||iw.dateTo)&&e++,(void 0!==iw.amountMin||void 0!==iw.amountMax)&&e++,iw.tags&&iw.tags.length>0&&e++,e},[iw]),i$=(0,a.useCallback)(e=>{let n=[...H.savedViews??[],e];l({...H,savedViews:n})},[H,l]),ik=(0,a.useCallback)(e=>{let n=(H.savedViews??[]).filter(n=>n.id!==e);l({...H,savedViews:n})},[H,l]),iM=(0,T.E)();(0,a.useEffect)(()=>{"expenses"!==nV&&iM.selectMode&&iM.exitSelectMode()},[nV]);let{range:iT,setRange:iS}=(0,p.H)("month"),iF=(0,a.useRef)(null),iz=(0,a.useRef)(null),iC=(0,a.useRef)(null),[iR,iI]=(0,a.useState)(!1),[iD,iE]=(0,a.useState)(""),[iL,iA]=(0,a.useState)(!1),[iB,iO]=(0,a.useState)(""),iP=(0,a.useRef)(null),[iN,iY]=(0,a.useState)(""),[iW,iq]=(0,a.useState)("shared"),[iU,iH]=(0,a.useState)(null),[iK,iZ]=(0,a.useState)(!1),i_=(0,a.useRef)(null),[iJ,iG]=(0,a.useState)(null),[iV,iX]=(0,a.useState)("EUR"),[iQ,i0]=(0,a.useState)(!1),[i4,i1]=(0,a.useState)(!1),i2=(0,O.x)(),i6=(0,a.useRef)(null),i3=(0,a.useRef)(!1),[i8,i5]=(0,a.useState)(!1),[i7,i9]=(0,a.useState)(-1),te=(0,a.useRef)(null),[tn,ti]=(0,a.useState)(""),[tt,tr]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,c.PL)(eq).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&tr(n)}catch{}})},[]);let[ta,to]=(0,a.useState)(!1),[ts,tl]=(0,a.useState)(!1),[tc,td]=(0,a.useState)(!1),tp=(0,a.useCallback)(e=>{let n=e-(0,d.computeCurrentBalance)(H);if(0===n)return void td(!1);let i=(H.budget.openingBalance??0)+n;nJ({...H,budget:{...H.budget,openingBalance:i}},"finance.undo.label.edited"),td(!1)},[H,nJ]),tm=(0,a.useCallback)(e=>{nJ({...H,income:[e,...H.income]},"finance.undo.label.added"),tl(!1),i_.current&&clearTimeout(i_.current),iZ(!0),i_.current=setTimeout(()=>iZ(!1),2e3)},[H,nJ]),tu=(0,a.useCallback)((e,n,i,t)=>{let r=i?[i,...H.recentDescriptions].filter(Boolean).slice(0,20):H.recentDescriptions,a={...H,expenses:[...e,...H.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)a=(0,d.addRecentTag)(a,e);nJ(a,"finance.undo.label.added"),to(!1),i_.current&&clearTimeout(i_.current),iZ(!0),i_.current=setTimeout(()=>iZ(!1),2e3)},[H,nJ]),[tx,tg]=(0,a.useState)(""),[tf,th]=(0,a.useState)(""),[tb,ty]=(0,a.useState)(!1),[tw,tj]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,c.PL)(eW).then(e=>{("compact"===e||"comfortable"===e)&&tj(e)})},[]),(0,a.useCallback)(()=>{let e="comfortable"===tw?"compact":"comfortable";tj(e),(0,c.Is)(eW,e)},[tw]);let[tv,t$]=(0,a.useState)(3);(0,a.useEffect)(()=>{(0,c.PL)(eU).then(e=>{"6"===e?t$(6):"12"===e&&t$(12)})},[]);let tk=(0,a.useCallback)(e=>{t$(e),(0,c.Is)(eU,String(e))},[]),tM=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),[tT,tS]=(0,a.useState)(e_);(0,a.useEffect)(()=>{(0,c.PL)(eK).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...e_.filter(e=>!i.has(e.id))];tS(t)}catch{}})},[]);let tF=(0,a.useCallback)((e,n)=>{tS(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,c.Is)(eK,JSON.stringify(a)),a})},[]),tz=(0,a.useCallback)(e=>{tS(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(eK,JSON.stringify(a)),a})},[]),[tC,tR]=(0,a.useState)(eJ);(0,a.useEffect)(()=>{(0,c.PL)(eZ).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eJ.filter(e=>!i.has(e.id))];tR(t)}catch{}})},[]);let tI=(0,a.useCallback)((e,n)=>{tR(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,c.Is)(eZ,JSON.stringify(a)),a})},[]),tD=(0,a.useCallback)(e=>{tR(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(eZ,JSON.stringify(a)),a})},[]),tE=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(H),[H]);(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(H,nQ),[H,nQ]);let tL=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(H),[H]),{insights:tA,dismiss:tB}=(0,d.useFinanceAnomalies)(),tO=(0,a.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=d.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??H.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,d.categoryLabel)(n,i)}:e},[H.categories,i]),tP=(0,a.useMemo)(()=>(0,d.availableMonths)(H),[H]),tN=(0,a.useMemo)(()=>(0,d.filterExpensesByRange)(H.expenses,iT,nQ),[H.expenses,iT,nQ]),tY=(0,a.useMemo)(()=>(0,d.filterIncomeByRange)(H.income,iT,nQ),[H.income,iT,nQ]),tW=(0,a.useMemo)(()=>{let e=(0,d.expensesForMember)(tN,n4);return n7.length>0&&(e=e.filter(e=>n7.includes(e.categoryId))),ie&&(e=e.filter(e=>!0===e.isReimbursable)),iv>0&&(e=(0,d.applyExpenseFilter)(e,iw)),e},[tN,n4,n7,ie,iw,iv]),tq=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(H,n4,tM),[H,n4,tM]),tU=(0,a.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tM),[tM]),tH=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(H,n4,tU),[H,n4,tU]),tK=(0,a.useMemo)(()=>0===tH?0:Math.round((tq-tH)/tH*100),[tq,tH]),tZ=(0,a.useMemo)(()=>{if("all"===n4)return r("finance.member.all");if("shared"===n4)return r("finance.hero.family");let e=H.familyMembers.find(e=>e.id===n4);return e?.name??r("finance.hero.family")},[n4,H.familyMembers,r]),t_=(0,a.useMemo)(()=>{if("all"===n4||"shared"===n4)return c.w4.colors.mainTextMuted;let e=H.familyMembers.findIndex(e=>e.id===n4);return -1===e?q:(0,b.a8)(H.familyMembers[e],e)},[n4,H.familyMembers]),tJ=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,d.expensesForMember)(H.expenses,n4).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[H.expenses,n4]),tG=(0,a.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),a=(0,d.expensesForMember)(t,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:il(e).color})),over:s>r?s-r:0}})})(H,n4),[H,n4]),tV=(0,a.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s),p=c.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=c.reduce((e,n)=>e+n.amount,0)/30,u=p/30;t.push({inc:m,incGoal:u,exp:l})}return t})(H,n4),[H,n4]),tX=(0,a.useMemo)(()=>(0,d.forecastCashFlow)(H,tv),[H,tv]),tQ=(0,a.useMemo)(()=>(0,d.firstNegativeDay)(tX),[tX]),t0=(0,a.useMemo)(()=>{let e,n;return e=new Date,n=H.expenses.length>0?H.expenses.reduce((e,n)=>e+n.amount,0)/H.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),o=(0,d.expensesForMember)(H.expenses.filter(e=>e.date===a),n4).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[H,n4]),t4=(0,a.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(H.expenses,n4)),[H.expenses,n4]),t1=(0,a.useMemo)(()=>{let e=[];return e.push({key:"shared",label:r("finance.income.member.shared"),color:c.w4.colors.mainTextMuted,incomeSpk:(0,d.incomeSparkline)(H.income,"shared"),spendSpk:(0,d.memberSparkline)(H.expenses,"shared"),incomeTotal:(0,d.incomeForMember)(H.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(H.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(H.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(H.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(H,"shared",6)}),H.familyMembers.forEach((n,i)=>{let t=(0,b.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,d.incomeSparkline)(H.income,n.id),spendSpk:(0,d.memberSparkline)(H.expenses,n.id),incomeTotal:(0,d.incomeForMember)(H.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(H.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(H.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(H.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(H,n.id,6)})}),e},[H,r]),t2=(0,a.useMemo)(()=>{let e=Object.entries((0,d.incomeByMember)(H.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:r("finance.income.member.shared"),value:n,color:c.w4.colors.mainTextMuted};let i=H.familyMembers.findIndex(n=>n.id===e),t=H.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,b.a8)(t,i):c.w4.colors.accent}})},[H,r]),t6=(0,a.useMemo)(()=>t2.reduce((e,n)=>e+n.value,0),[t2]),t3=tE.budget>0?tE.spent/tE.budget*100:0,t8=H.budget.monthlyBudget>0?tq/H.budget.monthlyBudget*100:0,t5=(0,a.useMemo)(()=>{let e=iL&&iB.trim()?iB.trim():(0,d.parseQuickInput)(iD,H.familyMembers)?.description;return e?(0,d.guessCategoryWithRules)(H,e):"other"},[iD,iL,iB,H]),t7=iN||tn||t5,t9=(0,a.useMemo)(()=>(0,d.parseRecurringHint)(iD),[iD]);(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(iD,H.familyMembers);e?.memberId&&iq(e.memberId)},[iD,H.familyMembers]);let re=(0,a.useCallback)(()=>{let e=(0,d.parseQuickInput)(iD,H.familyMembers),n=(0,d.parseRecurringHint)(iD);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");iG({amount:e.amount,description:e.description||(t7??"other"),categoryId:t7||"other",cadence:n.cadence,firstDue:`${t}-${r}-${a}`})},[iD,H.familyMembers,t7]),rn=(0,a.useCallback)(()=>{if(!iJ)return;let e=new Date(iJ.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iJ.description,amount:iJ.amount,categoryId:iJ.categoryId,cadence:iJ.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iW?iW:void 0};nJ({...H,recurringRules:[...H.recurringRules??[],n]},"finance.undo.label.added"),iG(null),iE(""),iY(""),ti(""),i_.current&&clearTimeout(i_.current),iZ(!0),i_.current=setTimeout(()=>iZ(!1),2e3)},[iJ,H,iW,nJ]),ri=(0,a.useCallback)(async e=>{let n;e.preventDefault();let i=iL&&iB.trim()?iB.trim():void 0,t=(0,d.parseQuickInput)(iD,H.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let r=t7||"other",a=t.memberId??("shared"!==iW?iW:void 0),o=t.tags??[],s=t.description?(0,d.normalizeMerchant)(t.description):void 0,l=io(),p=t.amount;if("EUR"!==iV){i1(!0),i0(!1);let e=await (0,d.convertToEUR)({amount:t.amount,code:iV,date:l});if(i1(!1),!e)return void i0(!0);p=e.eur,n={code:iV,rate:e.rate,original:t.amount}}let m={id:(0,f.z)(),amount:p,date:l,categoryId:r,description:t.description||r,type:"daily",childId:a,createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{}};i5(!1),i0(!1);let u={...H.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=r)});let x=[t.description||"",...H.recentDescriptions].filter(Boolean).slice(0,20),g=[m,...H.expenses],h={...H,expenses:g,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,d.addRecentTag)(h,e);nJ(h,"finance.undo.label.added");let b=(0,$.j)(g);tr(b),(0,c.Is)(eq,JSON.stringify(b)),iE(""),iO(""),iA(!1),iY(""),ti(""),iH(null),i_.current&&clearTimeout(i_.current),iZ(!0),i_.current=setTimeout(()=>iZ(!1),2e3)},[iD,iL,iB,t7,iW,iV,H,nJ]),rt=(0,a.useCallback)(e=>{(0,m.K)([10,50,10]);let n=(0,d.parseQuickInput)(e,H.familyMembers);if(n){let e=iN||tn||(n.description?(0,d.guessCategoryWithRules)(H,n.description):"other"),i=n.memberId??("shared"!==iW?iW:void 0),t=n.tags??[],r={id:(0,f.z)(),amount:n.amount,date:io(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},a={...H.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(a[n]=e)});let o=[n.description||"",...H.recentDescriptions].filter(Boolean).slice(0,20),s={...H,expenses:[r,...H.expenses],categoryHints:a,recentDescriptions:o};for(let e of t)s=(0,d.addRecentTag)(s,e);nJ(s,"finance.undo.label.added");let l=(0,$.j)([r,...H.expenses]);tr(l),(0,c.Is)(eq,JSON.stringify(l)),iE(""),iY(""),ti(""),i_.current&&clearTimeout(i_.current),iZ(!0),i_.current=setTimeout(()=>iZ(!1),2e3)}else iE(e),iz.current?.focus()},[H,iN,tn,iW,nJ]),rr=(0,a.useCallback)(e=>{nJ({...H,expenses:H.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[H,nJ]),ra=(0,a.useCallback)(e=>{let n=H.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,f.z)(),date:io(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nJ({...H,expenses:[i,...H.expenses]},"finance.undo.label.added")},[H,nJ]),ro=(0,a.useCallback)(e=>{nJ({...H,income:H.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[H,nJ]),rs=(0,a.useCallback)(e=>{nJ({...H,expenses:H.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[H,nJ]),rl=(0,a.useCallback)(()=>{let e=parseFloat(tx)||H.budget.weeklyBudget,n=parseFloat(tf)||H.budget.monthlyBudget;l({...H,budget:{...H.budget,weeklyBudget:e,monthlyBudget:n}}),ty(!0),setTimeout(()=>ty(!1),2e3)},[tx,tf,H,l]),rc=(0,a.useCallback)(()=>{let e=iM.selectedIds;0!==e.size&&(nJ({...H,expenses:H.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iM.exitSelectMode())},[iM,H,nJ]),rd=(0,a.useCallback)(e=>{let n=iM.selectedIds;0!==n.size&&(nJ({...H,expenses:H.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iM.exitSelectMode())},[iM,H,nJ]),rp=(0,a.useCallback)(()=>{let e=iM.selectedIds;0!==e.size&&(nJ({...H,expenses:H.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iM.exitSelectMode())},[iM,H,nJ]),rm=(0,a.useMemo)(()=>["shared",...H.familyMembers.map(e=>e.id)],[H.familyMembers]);(0,v.K)({quickAddInputRef:iz,monthSelectRef:iC,memberIds:rm,activeMemberId:n4,onSelectMember:n2,onSetTab:e=>nX(e),expenseModalOpen:ta,onOpenExpenseModal:()=>to(!0),shortcutsOpen:iR,onToggleShortcuts:()=>iI(e=>!e),onOpenSearch:()=>{nX("expenses"),iy(!0)}});let ru=[{value:"week",label:r("finance.range.pill.7d")},{value:"month",label:r("finance.range.pill.month")},{value:"3m",label:r("finance.range.pill.3m")},{value:"6m",label:r("finance.range.pill.6m")},{value:"1y",label:r("finance.range.pill.year")}],rx=Math.floor(tq).toLocaleString("pt-PT"),rg=(tq%1).toFixed(2).slice(1),rf=(0,a.useMemo)(()=>{if(0===(H.goals??[]).length)return null;let e=(0,d.recomputeGoalCurrents)(H);return{onTrack:e.goals.filter(e=>"behind"!==(0,d.goalStatus)(e)).length,total:e.goals.length}},[H]),rh=(()=>{let[e,n]=tM.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),rb=(0,t.jsx)(b.TA,{data:H,activeMemberId:n4,onSelectMember:n2,onSaveData:l,t:r,locale:i}),ry=(0,a.useMemo)(()=>{let e={};for(let n of tW)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:il(e).color}))},[tW]),rw=ry.reduce((e,n)=>e+n.value,0),rj=(0,a.useMemo)(()=>tG.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tG]),rv=tG.length>0?rj/tG.length:0,r$=tG.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>H.budget.monthlyBudget).length,rk=(0,a.useMemo)(()=>{if(0===tW.length)return null;let e=tW.reduce((e,n)=>n.amount>e.amount?n:e,tW[0]),n={};for(let e of tW){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?H.familyMembers.find(e=>e.id===i[0]):void 0,a=t?.name??r("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tW){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tW.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:a,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tW,H.familyMembers,r]),rM="kid"===K.ageMode&&"shared"!==n4&&"all"!==n4?H.familyMembers.find(e=>e.id===n4&&"child"===e.role)??null:null;return rM?(0,t.jsx)(c.PE,{title:r("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(Y.N,{member:rM,data:H,t:r})}):(0,t.jsxs)(c.PE,{title:r("finance.appTitle"),sidebar:rb,topBarRight:e,activeId:n4,children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)(_,{children:(0,t.jsx)(b.jb,{data:H,activeMemberId:n4,onSelectMember:n2,t:r,locale:i})}),(0,t.jsxs)(G,{children:[(0,t.jsx)(V,{children:(0,t.jsx)("div",{role:"tablist","aria-label":r("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:r("finance.tab.overview"),expenses:r("finance.tab.expenses"),insights:r("finance.tab.insights")},i={overview:0,expenses:tW.length,insights:tL.length}[e];return(0,t.jsxs)(Q,{type:"button",role:"tab","aria-selected":nV===e,active:nV===e,onClick:()=>nX(e),children:[n[e],i>0&&(0,t.jsxs)(ee,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(X,{children:[(0,t.jsxs)(u.ms,{align:"right",trigger:(0,t.jsx)(u.$n,{variant:ih>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"filter",size:13,"aria-hidden":!0}),children:ih>0?r("finance.filters.activeCount",{n:ih}):r("finance.actions.filters")}),children:[(0,t.jsx)(u.o_,{children:r("finance.filters.member")}),["shared",...H.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?r("finance.hero.family"):H.familyMembers.find(n=>n.id===e)?.name??e,i=e===n4;return(0,t.jsx)(u.tJ,{onClick:()=>n2(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(u.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.o_,{children:r("finance.filters.category")}),(0,t.jsx)(u.tJ,{onClick:()=>n9([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===n7.length&&(0,t.jsx)(u.In,{name:"check",size:12}),n7.length>0&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.allCategories")]})}),d.DEFAULT_CATEGORIES.map(e=>{let n=n7.includes(e.id);return(0,t.jsx)(u.tJ,{onClick:()=>n9(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(u.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.tJ,{onClick:()=>ii(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[ie&&(0,t.jsx)(u.In,{name:"check",size:12}),!ie&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.reimbursableOnly")]})}),ih>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.tJ,{onClick:()=>{n9([]),ii(!1)},children:r("finance.filters.reset")})]})]}),(0,t.jsx)(u.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>iu(!0),children:r("finance.actions.categories")}),"expenses"===nV&&(0,t.jsx)(W.g,{count:iv,onClick:()=>iy(e=>!e),label:r("finance.search.openSearch")}),"expenses"===nV&&(0,t.jsx)(u.$n,{variant:iM.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iM.selectMode?iM.exitSelectMode():iM.enterSelectMode()},children:r("finance.bulk.select")}),"overview"===nV&&(0,t.jsx)(u.K0,{onClick:()=>{n5(!0),requestAnimationFrame(()=>{window.print()})},title:r("finance.report.button"),"aria-label":r("finance.report.button"),children:(0,t.jsx)(u.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(u.K0,{onClick:()=>n3(!0),title:r("finance.actions.settings"),"aria-label":r("finance.actions.settings"),active:n6,children:(0,t.jsx)(u.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(J,{children:(0,t.jsx)(u.K0,{onClick:()=>iI(e=>!e),title:r("finance.shortcuts.title"),"aria-label":r("finance.shortcuts.title"),active:iR,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(ei,{"aria-label":r("finance.range.label"),children:ru.map(({value:e,label:n})=>(0,t.jsx)(en,{type:"button",active:iT===e,onClick:()=>{iS(e),"month"===e&&n0(tM)},"aria-pressed":iT===e,children:n},e))}),"expenses"===nV&&(0,t.jsx)(W.P,{open:ib,query:iw,onQueryChange:ij,savedViews:H.savedViews??[],onSaveView:i$,onDeleteView:ik,onClose:()=>iy(!1),members:H.familyMembers,categories:[...d.DEFAULT_CATEGORIES,...H.categories??[]],locale:i,recentTags:H.recentTags}),"month"===iT&&H.expenses.length>0&&(0,t.jsx)(k.f,{data:H,selectedMonth:nQ,onSelectMonth:n0,locale:i,t:r}),(0,t.jsxs)(eh,{children:["overview"===nV&&(0,t.jsxs)(eb,{children:[(0,t.jsxs)(ea,{ref:iF,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:r("finance.quickAdd.title")}),(0,t.jsxs)(nc,{visible:iK&&!i2.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",r("finance.quickAdd.added")]}),i2.listening&&(0,t.jsxs)(nm,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nu,{}),r("finance.voice.listening")]}),(0,t.jsxs)(u.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tl(!0),children:["+ ",r("finance.quickAdd.addIncome")]}),(0,t.jsxs)(u.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>td(!0),children:["⚖ ",r("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:ri,"aria-label":r("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(nr,{children:[{id:"shared",name:r("finance.member.shared"),role:"shared",color:void 0},...H.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(H.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(na,{type:"button",active:iW===e.id,color:i,onClick:()=>iq(e.id),children:[(0,t.jsx)(u.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(no,{children:[(0,t.jsxs)(nv,{children:[(0,t.jsx)(ns,{ref:iz,type:"text",placeholder:iL?r("finance.quickAdd.amountOnlyPlaceholder"):r("finance.quickAdd.placeholder"),value:iD,onChange:e=>{iE(e.target.value),iY(""),i5(eG.length>0),i9(-1)},onFocus:()=>{eG.length>0&&!iD.trim()&&i5(!0)},onBlur:()=>{setTimeout(()=>i5(!1),150)},onKeyDown:e=>{if(i8&&0!==eG.length)if("ArrowDown"===e.key)e.preventDefault(),i9(e=>Math.min(e+1,eG.length-1));else if("ArrowUp"===e.key)e.preventDefault(),i9(e=>Math.max(e-1,-1));else if("Enter"===e.key&&i7>=0){e.preventDefault();let n=eG[i7];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iD);iE(e?iD.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iY(""),i5(!1),i9(-1)}}else"Escape"===e.key&&(i5(!1),i9(-1))},"aria-label":r("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":i8&&eG.length>0,autoComplete:"off",inputMode:"decimal"}),i8&&eG.length>0&&(0,t.jsxs)(n$,{ref:te,role:"listbox","aria-label":r("finance.merchant.recent"),children:[(0,t.jsx)(nS,{role:"presentation",children:r("finance.merchant.recent")}),eG.map((e,n)=>(0,t.jsxs)(nk,{role:"option","aria-selected":i7===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iD);iE(i?iD.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iY(""),i5(!1),i9(-1),iz.current?.focus()},children:[(0,t.jsx)(nM,{children:e.merchant}),(0,t.jsxs)(nT,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(eo,{type:"button","aria-pressed":iL,"aria-label":iL?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iL;iA(e),e&&requestAnimationFrame(()=>iP.current?.focus())},children:[(0,t.jsx)(u.In,{name:iL?"close":"plus",size:11}),iL?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(nl,{value:iN||t5,onChange:e=>{let n=e.target.value,i=iN||t5;iY(n);let t=iL&&iB.trim()?iB.trim():(0,d.parseQuickInput)(iD,H.familyMembers)?.description;t&&iH((0,d.proposeRuleFromOverride)(i,n,t))},"aria-label":r("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(nl,{value:iV,onChange:e=>{iX(e.target.value),i0(!1)},"aria-label":r("finance.currency.label"),style:{maxWidth:72},children:d.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iD.trim()||i4,children:i4?r("finance.currency.converting"):r("finance.quickAdd.add")}),i2.supported&&(0,t.jsx)(nj,{type:"button","aria-label":r("finance.voice.listening"),"aria-pressed":i2.listening,active:i2.listening,onPointerDown:()=>{i6.current=window.setTimeout(()=>{i6.current=null,i3.current=!0,(0,m.K)(30),i2.listening?i2.stop():i2.start(rt)},500)},onPointerUp:()=>{null!==i6.current&&(clearTimeout(i6.current),i6.current=null,i3.current||((0,m.K)(10),i2.listening?i2.stop():i2.start(rt))),i3.current=!1},onPointerCancel:()=>{null!==i6.current&&(clearTimeout(i6.current),i6.current=null),i3.current=!1},children:(0,t.jsx)(u.In,{name:"mic",size:16})})]}),(0,t.jsx)(es,{visible:iL,children:(0,t.jsx)(el,{ref:iP,type:"text",placeholder:r("finance.quickAdd.descPlaceholder"),maxLength:80,value:iB,onChange:e=>iO(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iA(!1),iz.current?.focus())},"aria-label":r("finance.quickAdd.descPlaceholder"),tabIndex:iL?0:-1})}),(0,t.jsx)($.J,{expenses:H.expenses,storedOrder:tt,lockedCategoryId:tn,onToggle:e=>ti(n=>n===e?"":e),locale:i,groupLabel:r("finance.quickAdd.frequentCategories")}),iU&&(0,t.jsxs)(nx,{children:[(0,t.jsxs)("span",{children:[r("finance.categoryRules.alwaysCategorize",{match:iU.match})," ",(0,t.jsx)("strong",{children:(n=d.DEFAULT_CATEGORIES.find(e=>e.id===iU.categoryId))?(0,d.categoryLabel)(n,i):iU.categoryId}),"?"]}),(0,t.jsx)(ng,{type:"button",accent:!0,onClick:()=>{H&&iU&&(nJ({...H,categoryRules:[iU,...H.categoryRules??[]]},"finance.undo.label.added"),iH(null))},children:r("finance.categoryRules.propose")}),(0,t.jsx)(ng,{type:"button",onClick:()=>iH(null),children:r("finance.categoryRules.dismiss")})]}),iQ&&(0,t.jsx)(nd,{style:{color:U},role:"alert",children:r("finance.currency.fxFailed")}),t9&&(0,d.parseQuickInput)(iD,H.familyMembers)&&(0,t.jsxs)(nf,{type:"button",onClick:re,"aria-label":r("finance.recurring.makeRecurring"),children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsx)(nd,{children:r("finance.quickAdd.hint")})]})]}),(0,t.jsx)(u.dO,{items:tC.map(e=>({...e})),onReorder:tI,onCycleSize:tD,accentColor:()=>q,labels:{moveLeft:r("finance.overview.panel.moveLeft"),moveRight:r("finance.overview.panel.moveRight"),cycleSize:r("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(e$,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eM,{children:[r("finance.hero.spentIn")," ",rh," \xb7 ",tZ]}),(0,t.jsxs)(eT,{children:[(0,t.jsx)(eS,{children:"€"}),(0,t.jsx)(eF,{children:rx}),(0,t.jsx)(ez,{children:rg})]}),(0,t.jsxs)(eC,{children:[(0,t.jsx)(x.Ru,{value:tK,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[r("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(tU,i)," \xb7 €",ia(tH)]})]}),tJ.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:tJ,accent:t_,width:280,height:34})}),null!==rf&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:rf.onTrack===rf.total?"#7fb77e":c.w4.colors.mainTextMuted},children:r("finance.goals.hero",{on:rf.onTrack,total:rf.total})})]}),(0,t.jsx)(eR,{children:(0,t.jsxs)(eI,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsx)(eE,{children:r("finance.budget.weekly")}),(0,t.jsxs)(eL,{children:["€",ia(tE.spent)," ",(0,t.jsxs)(eA,{children:["/ €",tE.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:t3,over:t3>100?t3-100:0}),(0,t.jsxs)(eB,{children:[(0,t.jsxs)("span",{children:[Math.round(t3),"% ",r("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tE.remaining<0?U:q},children:tE.remaining>0?`€${ia(tE.remaining)} ${r("finance.budget.remaining")}`:`€${ia(Math.abs(tE.remaining))} ${r("finance.budget.over")}`})]}),(0,t.jsxs)(eD,{style:{marginTop:14},children:[(0,t.jsx)(eE,{children:r("finance.budget.monthly")}),(0,t.jsxs)(eL,{children:["€",ia(tq)," ",(0,t.jsxs)(eA,{children:["/ €",H.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:t8,over:t8>100?t8-100:0}),(0,t.jsxs)(eB,{children:[(0,t.jsxs)("span",{children:[Math.round(t8),"% ",r("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[r("finance.budget.projected")," €",ia(tq+(tE.projectedTotal-tE.spent))]})]})]})})]});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(ej,{children:r("finance.charts.sixMonths")}),(0,t.jsx)(ev,{children:(0,t.jsx)(nH,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nK,{children:[(0,t.jsx)(nZ,{color:e.color}),(0,d.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:tG,budget:H.budget.monthlyBudget,height:200}),(0,t.jsxs)(nF,{children:[(0,t.jsxs)(nz,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nC,{children:["€",ia(rj)]})]}),(0,t.jsxs)(nz,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nC,{children:["€",ia(rv)]})]}),(0,t.jsxs)(nz,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nC,{children:[r$," / ",tG.length]})]}),(0,t.jsxs)(nz,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nC,{style:{color:tK>0?U:q},children:[tK>0?"+":"",tK,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(ej,{children:r("finance.charts.byCategory")}),(0,t.jsx)(nW,{type:"button",onClick:()=>nX("insights"),children:r("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:ry,total:rw,size:110,centerLabel:rh.slice(0,3),centerValue:`€${ia(rw)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:ry.map(e=>{let n=il(e.id),r=(0,d.expensesForMember)((0,d.expensesForMonth)(H.expenses,tU),n4).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:e.color}),(0,t.jsx)(eN,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eY,{children:["€",ia(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(x.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ej,{children:r("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.forecast.sub",{n:tv})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(en,{type:"button",active:tv===e,onClick:()=>tk(e),"aria-pressed":tv===e,children:r(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(I.b,{forecast:tX,firstNegDate:tQ,t:r,locale:i,height:170}),tV.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:c.w4.spacing.md,paddingTop:c.w4.spacing.sm,borderTop:`1px solid ${c.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:c.w4.colors.mainTextMuted},children:r("finance.charts.cashflow")})}),(0,t.jsx)(x.uj,{data:tV,height:130,legendIn:r("finance.charts.in"),legendOut:r("finance.charts.out"),legendGoal:r("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ew,{children:(0,t.jsx)(ej,{children:r("finance.charts.heatmap")})}),(0,t.jsx)(x.RT,{data:t0,locale:i}),(0,t.jsxs)(nR,{children:[(0,t.jsx)("span",{children:r("finance.charts.less")}),(0,t.jsx)(nI,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:r("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ec,{children:(0,t.jsx)(u.YZ,{children:r("finance.heatmap.title")})}),(0,t.jsx)(y.D,{matrix:t4,locale:i,t:r})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ew,{children:(0,t.jsx)(ej,{children:r("finance.charts.thisWeek")})}),(0,t.jsxs)(nD,{children:[(0,t.jsxs)(nE,{children:[(0,t.jsxs)(nL,{children:["€",ia(tE.spent)]}),(0,t.jsxs)(eA,{children:["/ €",tE.budget]})]}),(0,t.jsx)(x.kl,{spent:tE.spent,budget:tE.budget}),(0,t.jsxs)(nA,{children:[(0,t.jsx)("span",{children:r("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:r("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(u.YZ,{children:r("finance.recent.title")}),tW.length>8&&(0,t.jsx)(nW,{type:"button",onClick:()=>nX("expenses"),children:r("finance.recent.viewAll",{n:tW.length})})]}),0===tW.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:r("finance.dashboard.noRecent")}):(0,t.jsx)(eV,{"aria-label":r("finance.recent.title"),children:tW.slice(0,8).map(e=>(0,t.jsx)(im,{exp:e,finData:H,locale:i,t:r,onDelete:rr,onClone:ra,onToggleReimbursed:rs,compact:"compact"===tw},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.incomeMix.title")}),0===t2.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,padding:`${c.w4.spacing.md} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:t2,total:t6,size:100,centerLabel:r("finance.byMember.income"),centerValue:`€${ia(t6)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:t2.map(e=>(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:e.color}),(0,t.jsx)(eN,{children:e.label}),(0,t.jsxs)(eY,{style:{color:q},children:["€",ia(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n4?t1:t1.filter(e=>e.key===n4);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.byMember.title")}),t1.length<=1&&0===H.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:q},{id:"expense",value:e.expense,color:U}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:c.w4.spacing.sm},children:[(0,t.jsx)(u.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamily,color:c.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?q:U},children:[n.net>=0?"+":"","€",ia(Math.abs(n.net))]}),(0,t.jsx)(x.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(x.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:c.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(u.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(u.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",ia(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:q,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:U},children:["€",ia(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:U,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.borderSubtle??c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nV&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nq,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(u.YZ,{children:r("finance.tx.title")}),"month"===iT&&0===H.expenses.length&&(0,t.jsx)(nY,{ref:iC,value:nQ,onChange:e=>n0(e.target.value),"aria-label":r("finance.insights.month"),children:tP.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),0===tW.length&&0===tY.length?(0,t.jsx)(ey,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:iv>0?r("finance.search.noResults"):r("finance.tx.empty")})}):(0,t.jsx)(ey,{span:12,children:(0,t.jsx)(eV,{"aria-label":r("finance.tx.title"),children:[...tW.map(e=>({...e,_kind:"expense"})),...tY.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(im,{exp:e,finData:H,locale:i,t:r,onDelete:rr,onClone:ra,onToggleReimbursed:rs,compact:"compact"===tw,selectMode:iM.selectMode,selected:iM.selectedIds.has(e.id),onToggleSelect:iM.toggleId,longPressHandlers:iM.longPressHandlers,onEnterSelectMode:iM.enterSelectMode},e.id):(0,t.jsxs)(eX,{compact:"compact"===tw,children:["compact"===tw?(0,t.jsx)(eQ,{color:q,"aria-hidden":!0}):(0,t.jsx)(e0,{color:q,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e1,{children:e.source}),"compact"!==tw&&(0,t.jsxs)(e2,{children:[is(e.date,i)," \xb7 ",r("finance.dashboard.income")]})]}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e3,{style:{color:q},children:["+€",ir(e.amount)]}),(0,t.jsx)(e9,{className:"delete-btn",type:"button",onClick:()=>ro(e.id),"aria-label":`${r("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nV&&(0,t.jsxs)(ef,{children:[(0,t.jsxs)(nq,{style:{marginBottom:0},children:[(0,t.jsx)(u.YZ,{children:r("finance.insights.title")}),"month"===iT&&0===H.expenses.length&&(0,t.jsx)(nY,{value:nQ,onChange:e=>n0(e.target.value),"aria-label":r("finance.insights.month"),children:tP.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),null!==rk&&(0,t.jsxs)(ep,{children:[(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.kpi.biggestExpense")}),(0,t.jsxs)(ex,{children:["€",rk.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:rk.biggest.description?`${rk.biggest.description} \xb7 ${(0,d.categoryLabel)(il(rk.biggest.categoryId),i)}`:(0,d.categoryLabel)(il(rk.biggest.categoryId),i)})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.kpi.topSpender")}),(0,t.jsxs)(ex,{children:["€",rk.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:rk.topMemberLabel})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.kpi.busiestDay")}),(0,t.jsxs)(ex,{children:["€",rk.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:r(`finance.weekday.${rk.busiestDowKey}`)})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(ex,{children:["€",rk.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:0===rk.reimbursableTotal?"—":r("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(u.dO,{items:tT.map(e=>({...e})),onReorder:tF,onCycleSize:tz,accentColor:()=>q,labels:{moveLeft:r("finance.insights.panel.moveLeft"),moveRight:r("finance.insights.panel.moveRight"),cycleSize:r("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:tG,budget:H.budget.monthlyBudget,height:180}),(0,t.jsxs)(nF,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(nz,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nC,{children:["€",ia(rj)]})]}),(0,t.jsxs)(nz,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nC,{children:["€",ia(rv)]})]}),(0,t.jsxs)(nz,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nC,{style:{color:tK>0?U:q},children:[tK>0?"+":"",tK,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.byCategory")}),0===ry.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${c.w4.spacing.lg} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:ry,total:rw,size:110,centerLabel:rh.slice(0,3),centerValue:`€${ia(rw)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:ry.map(e=>{let n=il(e.id),r=e.color||c.w4.colors.mainTextMuted,a=(0,d.expensesForMember)((0,d.expensesForMonth)(H.expenses,tU),n4).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eO,{children:[(0,t.jsx)(eP,{color:r}),(0,t.jsx)(eN,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eY,{children:["€",ia(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.title")}),0===tL.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tL.map((e,n)=>(0,t.jsxs)(ne,{itype:e.type,children:[(0,t.jsx)(nn,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:r(e.messageKey,tO(e.params))}),e.memberId&&(()=>{let n=H.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=H.familyMembers.indexOf(n);return(0,t.jsxs)(ni,{children:[(0,t.jsx)(u.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.anomalies")}),0===tA.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tA.map(e=>(0,t.jsxs)(ne,{itype:e.type,children:[(0,t.jsx)(nn,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:r(e.messageKey,tO(e.params))})}),e.snoozeKey&&(0,t.jsx)(nt,{type:"button",title:r("finance.insights.anomalies.dismiss"),"aria-label":r("finance.insights.anomalies.dismiss"),onClick:()=>{tB(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.smallMultiples.title")}),(0,t.jsx)(A.R,{expenses:H.expenses,familyMembers:H.familyMembers,getMemberColor:b.a8,t:r,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.reimbursables.tracker.title")}),(0,t.jsx)(L.p,{expenses:H.expenses,familyMembers:H.familyMembers,getMemberColor:b.a8,t:r,locale:i})]});case"analytics-budgets":return(0,t.jsx)(D.z,{});case"analytics-bills":return(0,t.jsx)(z.J,{});case"analytics-subscriptions":return(0,t.jsx)(S.n,{});case"analytics-goals":return(0,t.jsx)(F.f,{});case"analytics-recurring":return(0,t.jsx)(C.b,{});case"analytics-rules":return(0,t.jsx)(E.K,{});case"analytics-networth":return(0,t.jsx)(R.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.byMember.title")}),0===t1.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:c.w4.spacing.sm},children:t1.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(u.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(u.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",ia(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:q,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:U},children:["€",ia(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:U,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nU,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),ta&&(0,t.jsx)(ip,{finData:H,activeMemberId:n4,locale:i,t:r,onClose:()=>to(!1),onSubmit:tu}),ts&&(0,t.jsx)(id,{finData:H,locale:i,t:r,onClose:()=>tl(!1),onSubmit:tm}),tc&&(0,t.jsx)(ic,{finData:H,t:r,onClose:()=>td(!1),onSubmit:tp}),(0,t.jsx)(w.S,{labelKey:np,onUndo:()=>{nG()},onDismiss:()=>n_(null),t:r}),iM.selectMode&&"expenses"===nV&&(0,t.jsx)(M.S,{selectionCount:iM.selectedIds.size,visibleIds:tW.map(e=>e.id),selectedIds:iM.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:i,t:r,onCancel:iM.exitSelectMode,onSelectAll:()=>iM.selectAll(tW.map(e=>e.id)),onCategorise:rd,onDelete:rc,onMarkReimbursed:rp}),iR&&(0,t.jsx)(j.m,{t:r,onClose:()=>iI(!1)}),(0,t.jsx)(P.X,{open:n6,onClose:()=>n3(!1),ariaLabel:r("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(et,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(u.YZ,{children:r("finance.settings.title")}),(0,t.jsx)(u.K0,{onClick:()=>n3(!1),title:r("finance.actions.settings"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"drawer-weekly-budget",children:r("finance.settings.weeklyBudget")}),(0,t.jsx)(nP,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(H.budget.weeklyBudget),value:tx,onChange:e=>tg(e.target.value)})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{htmlFor:"drawer-monthly-budget",children:r("finance.settings.monthlyBudget")}),(0,t.jsx)(nP,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(H.budget.monthlyBudget),value:tf,onChange:e=>th(e.target.value)})]}),(0,t.jsx)(u.$n,{variant:"primary",onClick:()=>{rl(),n3(!1)},style:{height:44},children:tb?r("finance.settings.saved"):r("finance.settings.save")})]}),(0,t.jsx)(N.u,{data:H,getMemberColor:b.a8,t:r,onSaveMember:(e,n)=>{let i=H.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);nJ({...H,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(P.X,{open:it,onClose:()=>{iu(!1),ig(null)},ariaLabel:r("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(et,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(u.YZ,{children:r("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!ix&&(0,t.jsx)(u.$n,{variant:"ghost",style:{height:28},onClick:()=>ig({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:r("finance.categories.new")}),(0,t.jsx)(u.K0,{onClick:()=>{iu(!1),ig(null)},title:r("finance.categories.cancel"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]})]}),ix&&(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.md,display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{children:r("finance.categories.labelEn")}),(0,t.jsx)(nN,{value:ix.labelEn,onChange:e=>ig(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{children:r("finance.categories.labelPt")}),(0,t.jsx)(nN,{value:ix.labelPt,onChange:e=>ig(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{children:r("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:ix.icon,onChange:e=>ig(n=>n&&{...n,icon:e.target.value}),style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:u.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{children:r("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:ix.color,onChange:e=>ig(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nN,{value:ix.color,onChange:e=>ig(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",style:{height:28},onClick:()=>ig(null),children:r("finance.categories.cancel")}),(0,t.jsx)(u.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!ix.labelEn||!ix.labelPt)return;let e={id:(0,f.z)(),labelEn:ix.labelEn,labelPt:ix.labelPt,icon:ix.icon,color:ix.color,isCustom:!0},n=H.categories??[];nJ({...H,categories:[...n,e]},"finance.undo.label.added"),ig(null)},children:r("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,u.n6)(e.icon)?(0,t.jsx)(u.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:r("finance.categories.builtIn")})]},e.id)),(H.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,u.n6)(e.icon)?(0,t.jsx)(u.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)(u.K0,{title:r("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(H.categories??[]).filter(n=>n.id!==e.id);nJ({...H,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(u.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(P.X,{open:null!==iJ,onClose:()=>iG(null),ariaLabel:r("finance.recurring.makeRecurring"),maxWidth:360,children:iJ&&(0,t.jsxs)(nh,{children:[(0,t.jsxs)(u.YZ,{children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nb,{children:r("finance.recurring.frequency")}),(0,t.jsx)(ny,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nw,{type:"button",active:iJ.cadence===e,onClick:()=>iG(n=>n?{...n,cadence:e}:null),children:r(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nb,{children:r("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iJ.firstDue,onChange:e=>iG(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",onClick:()=>iG(null),children:r("finance.recurring.cancel")}),(0,t.jsx)(u.$n,{variant:"primary",onClick:rn,disabled:!iJ.firstDue,children:r("finance.recurring.confirm")})]})]})}),n8&&(0,t.jsx)(B.h,{data:H,month:nQ,locale:i,t:r,getMemberColor:b.a8})]})},{}))}}]);