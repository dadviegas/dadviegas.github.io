"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["84"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),a=i(8997),r=i(7991),o=i(6859),s=i.n(o),l=i(2799),c=i(6063),d=i(3236),p=i(5908),m=i(3759),u=i(789),x=i(9454),f=i(8170),g=i(4041),h=i(948),b=i(719),y=i(2405),w=i(9546),j=i(5854),v=i(3616),$=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),F=i(8635),z=i(8501),C=i(1789),I=i(216),R=i(9419),D=i(341),E=i(9378),A=i(1423),L=i(1255),B=i(3451),O=i(545),P=i(2167),N=i(7637),W=i(6891),Y=i(1331),U=i(2139),q=i(7600),K=i(5962);let _="#7fb77e",Z="#f85149",H=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,G=c.w4.suites.lab,V=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  animation: ${H} 0.25s ease both;
  overflow: hidden;
`,J=s().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,Q=s().div`
  display: none;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,X=s().div`
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
`,ee=s().div`
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
`,en=s().div`
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
`,ei=s().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${c.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${G}`:"transparent"};
  background: ${({active:e})=>e?`${G}1f`:"transparent"};
  color: ${({active:e})=>e?G:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${G};
    outline-offset: 2px;
  }
`,et=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,ea=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${G}`:"transparent"};
  background: ${({active:e})=>e?`${G}1f`:"transparent"};
  color: ${({active:e})=>e?G:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${G};
    outline-offset: 2px;
  }
`,er=s().div`
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
`;let eo=s().div`
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
`,es=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,el=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${_};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,ec=s().button`
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
`,ed=s().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,ep=s().input`
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
  border-left: 2px solid ${_};
  padding: ${c.w4.spacing.lg};
`;let em=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`;s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${_};
  padding: ${c.w4.spacing.md};
`;let eu=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`,ex=s().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ef=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eg=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eh=s().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
`,eb=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ey=s().div`
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
`;let ew=s().div`
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
`;let ej=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,ev=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  border-left: 2px solid ${_};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    border-left-color: ${_};
  }

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${c.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,e$=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,ek=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eM=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,eT=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${_};
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,eS=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eF=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ez=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eC=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,eI=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,eR=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eD=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eE=s().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,eA=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eL=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-of-type {
    margin-top: 0;
  }
`,eB=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,eO=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eP=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eN=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eW=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,eY=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eU=s().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eq=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eK="finance:list-density",e_="finance:quick-categories",eZ="finance:forecast-months",eH="finance:active-member",eG="finance:insights-layout",eV="finance:overview-layout",eJ=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-settlements",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eQ=[{id:"overview-hero",size:"lg"},{id:"overview-accounts",size:"md"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eX=s().input`
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
`,e0=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,e4=s().li`
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
`,e1=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,e2=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,e6=s().div`
  flex: 1;
  min-width: 0;
`,e3=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e8=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,e5=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,e7=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e9=s().span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  /* Each avatar after the first overlaps by half its width */
  & > * + * {
    margin-left: -${({size:e})=>Math.round(.45*e)}px;
  }
`,ne=s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  font-size: ${({size:e})=>Math.max(8,e-5)}px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,nn=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${_}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?_:"#facc15"};
  white-space: nowrap;
`,ni=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${_}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?_:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${_}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nt=s().button`
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
    color: ${_};
    background: ${_}1a;
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,na=s().button`
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
    color: ${Z};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nr=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${_}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${_}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,no=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?Z:"warning"===e?"#facc15":"success"===e?_:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,ns=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,nl=s().button`
  margin-left: auto;
  flex-shrink: 0;
  background: none;
  border: none;
  /* Minimum 44px touch target per docs/constraints.md */
  padding: 0 10px;
  min-height: 44px;
  cursor: pointer;
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1;
  border-radius: ${c.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  transition: color 120ms ease, background 120ms ease;
  &:hover {
    color: ${c.w4.colors.mainText};
    background: ${c.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`;s()(ev)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let nc=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,nd=s().button`
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
`,np=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,nm=s().input`
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
`,nu=s().select`
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
`,nx=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${_};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nf=s().div`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 4px 10px;
  border-radius: ${c.w4.borderRadius.sm};
  border: 1px solid ${({status:e})=>"danger"===e?c.w4.colors.danger:"warning"===e?"#facc15":"#7fb77e"};
  background: ${({status:e})=>"danger"===e?"rgba(248, 81, 73, 0.08)":"warning"===e?"rgba(250, 204, 21, 0.08)":"rgba(127, 183, 126, 0.08)"};
  color: ${({status:e})=>"danger"===e?c.w4.colors.danger:"warning"===e?"#facc15":"#7fb77e"};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;

  .label { color: ${c.w4.colors.mainTextMuted}; }
  .amount {
    font-weight: 700;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0;
  }
  .suffix { color: ${c.w4.colors.mainTextFaint}; letter-spacing: 0.04em; }
`,ng=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nh=(0,l.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,nb=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${_};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,ny=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${_};
  animation: ${nh} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nw=s().div`
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
`,nj=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?_:c.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${_}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${_}44`:c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${_}28`:c.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?_:c.w4.colors.borderStrong??c.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nv=s().div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: ${({tone:e})=>"over"===e?"#fb7185":"warn"===e?"#facc15":"#7fb77e"};
  background: ${({tone:e})=>"over"===e?"rgba(251, 113, 133, 0.10)":"warn"===e?"rgba(250, 204, 21, 0.10)":"rgba(127, 183, 126, 0.08)"};
  border: 1px solid ${({tone:e})=>"over"===e?"rgba(251, 113, 133, 0.35)":"warn"===e?"rgba(250, 204, 21, 0.35)":"rgba(127, 183, 126, 0.30)"};
  border-radius: ${c.w4.borderRadius.sm};
  padding: 2px 8px;
  white-space: nowrap;

  & > strong {
    color: ${c.w4.colors.mainText};
    font-weight: 700;
  }

  & > .arrow {
    opacity: 0.55;
  }
`,n$=s().button`
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
`,nk=s().div`
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
`,nM=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nT=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,nS=s().button`
  flex: 1;
  /* 44px minimum touch target */
  min-height: 44px;
  padding: 0 4px;
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
`,nF=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${c.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?_:c.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?_:c.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${_};
    color: ${_};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nz=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nC=s().ul`
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
`,nI=s().li`
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
`,nR=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nD=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nE=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nA=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,nL=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nB=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nO=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nP=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nN=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,nW=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nY=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nU=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${_}; }
`,nq=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nK=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,n_=s().input`
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
`,nZ=s().input`
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
`,nH=s().select`
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
`;let nG=s().button`
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
`,nV=s().div`
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
`;let nJ=s().footer`
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
`,nQ=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nX=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,n0=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,n4=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg} ${c.w4.borderRadius.lg} ${c.w4.borderRadius.md} ${c.w4.borderRadius.md};
  border-left: 2px solid ${_};
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
`,n1=s().div`
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,n2=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,n6=s().button`
  background: transparent;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainTextMuted};
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
    border-color: ${c.w4.colors.borderStrong??c.w4.colors.mainTextMuted};
    color: ${c.w4.colors.mainText};
  }
`,n3=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n8=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n5=s().button`
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
`,n7=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,n9=s().button`
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
`,ie=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,ii=s().input`
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
`,it=s().select`
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
`,ia=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,ir=s().input`
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
`,io=s().div`
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
`,is=s().ul`
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
`,il=s().li`
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,ic=s().div`
  position: relative;
`,id=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function ip(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function im(e){return Math.round(e).toLocaleString("pt-PT")}function iu(){return new Date().toISOString().slice(0,10)}function ix(e,n){let[i,t,a]=e.split("-").map(Number);return new Date(i,t-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function ig(e){return p.DEFAULT_CATEGORIES.find(n=>n.id===e)??p.DEFAULT_CATEGORIES[p.DEFAULT_CATEGORIES.length-1]}function ih({finData:e,t:n,onClose:i,onSubmit:a}){let o=e.accounts??[],[s,l]=(0,r.useState)(()=>Object.fromEntries(o.map(e=>[e.id,""]))),m=(0,r.useMemo)(()=>Object.fromEntries(o.map(n=>[n.id,(0,p.accountBalance)(e,n.id)])),[o,e]),u=(0,r.useMemo)(()=>o.reduce((e,n)=>e+(m[n.id]??0),0),[o,m]),x=(0,r.useMemo)(()=>{let e={};for(let n of o){let i=s[n.id]?.trim();if(!i)continue;let t=parseFloat(i.replace(",","."));Number.isNaN(t)||(e[n.id]=t)}return e},[o,s]),f=(0,r.useMemo)(()=>o.reduce((e,n)=>{let i=x[n.id];return e+(void 0!==i?i:m[n.id]??0)},0),[o,x,m]),g=(0,r.useMemo)(()=>o.some(e=>{let n=x[e.id];return void 0!==n&&n!==m[e.id]}),[o,x,m]);return(0,t.jsx)(P.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:560,children:(0,t.jsxs)(n1,{children:[(0,t.jsxs)(n2,{children:[(0,t.jsx)(d.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(n6,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),g&&a(x)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsx)("div",{style:{fontSize:12,color:c.w4.colors.mainTextMuted},children:n("finance.balance.perAccountIntro")}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:o.map(e=>{let i=m[e.id]??0,a=x[e.id],r=void 0!==a?a-i:0;return(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 140px",gap:c.w4.spacing.sm,padding:c.w4.spacing.sm,background:c.w4.colors.sidebarHover,borderRadius:c.w4.borderRadius.md,alignItems:"center"},children:[(0,t.jsxs)("div",{style:{minWidth:0},children:[(0,t.jsx)("div",{style:{fontSize:13,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:e.name,children:e.name}),(0,t.jsxs)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,marginTop:2},children:[n("finance.balance.current")," \xb7"," ",(0,t.jsxs)("span",{style:{fontVariantNumeric:"tabular-nums",color:c.w4.colors.mainText},children:["€",ip(i)]})]}),void 0!==a&&0!==r&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:r>0?_:Z,marginTop:2},children:r>0?n("finance.balance.deltaUp",{n:ip(r)}):n("finance.balance.deltaDown",{n:ip(-r)})})]}),(0,t.jsx)(ii,{type:"text",inputMode:"decimal",placeholder:n("finance.balance.realBalance"),value:s[e.id]??"",onChange:n=>l(i=>({...i,[e.id]:n.target.value})),style:{textAlign:"right"},"aria-label":`${e.name} — ${n("finance.balance.target")}`})]},e.id)})}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:c.w4.spacing.sm,borderTop:`1px solid ${c.w4.colors.border}`,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:[(0,t.jsxs)("span",{children:[n("finance.balance.totalCurrent"),":"," ",(0,t.jsxs)("span",{style:{color:c.w4.colors.mainText,fontVariantNumeric:"tabular-nums",textTransform:"none",letterSpacing:"normal"},children:["€",ip(u)]})]}),(0,t.jsxs)("span",{children:[n("finance.balance.totalTarget"),":"," ",(0,t.jsxs)("span",{style:{color:c.w4.colors.mainText,fontVariantNumeric:"tabular-nums",fontWeight:600,textTransform:"none",letterSpacing:"normal"},children:["€",ip(f)]})]})]}),(0,t.jsxs)(ia,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!g,children:n("finance.balance.save")})]})]})]})})}function ib({finData:e,locale:n,t:i,onClose:a,onSubmit:o}){let[s,l]=(0,r.useState)(""),[p,m]=(0,r.useState)(iu()),[u,x]=(0,r.useState)(""),[f,h]=(0,r.useState)(""),[y,w]=(0,r.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(P.X,{open:!0,onClose:a,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(n1,{children:[(0,t.jsxs)(n2,{children:[(0,t.jsx)(d.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(n6,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,g.z)(),amount:j,date:p,source:u.trim(),createdAt:Date.now(),...f?{goalId:f}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n3,{children:[(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(ii,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>l(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(ii,{id:"inc-date",type:"date",value:p,onChange:e=>m(e.target.value)})]})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(ii,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(d.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(d.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n);return(0,t.jsxs)(d.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(it,{id:"inc-goal",value:f,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(ia,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:a,children:i("finance.income.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function iy({finData:e,activeMemberId:n,locale:i,t:a,onClose:o,onSubmit:s}){let[l,m]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,h]=(0,r.useState)("other"),[y,w]=(0,r.useState)(iu()),[j,v]=(0,r.useState)("single"),[$,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,r.useState)([]),[z,C]=(0,r.useState)(""),[I,R]=(0,r.useState)(!1),D=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&h((0,p.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(l.replace(",","."))||0,A=M.length,L="split"===j&&A>0?E/A:E,B=E>0&&!!y&&("single"===j||"split"===j&&A>0),O=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),R(!1))},N=(0,r.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),W=[{id:"shared",name:a("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(P.X,{open:!0,onClose:o,ariaLabel:a("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(n4,{children:[(0,t.jsxs)(n2,{children:[(0,t.jsxs)(d.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(n6,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),a=Date.now(),r={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(r[e]=f)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:E,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===$?void 0:$,createdAt:a,...o}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,r)=>({id:(0,g.z)(),amount:0===r?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${A})`:f,type:"daily",childId:i,createdAt:a+r,...o}))}s(i,r,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n3,{children:[(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,t.jsx)(ii,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,t.jsx)(ii,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,t.jsx)(ii,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(it,{id:"exp-cat",value:f,onChange:e=>h(e.target.value),children:p.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,p.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{children:a("finance.tags.label")}),(0,t.jsxs)(ic,{children:[(0,t.jsxs)(io,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(d.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":a("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(ir,{ref:D,type:"text",value:z,placeholder:0===S.length?a("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),R(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),O(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&R(!1)},onBlur:()=>{z.trim()&&O(z),setTimeout(()=>R(!1),150)},onFocus:()=>R(!0),"aria-label":a("finance.tags.label")})]}),I&&N.length>0&&(0,t.jsx)(is,{children:N.map(e=>(0,t.jsxs)(il,{onMouseDown:n=>{n.preventDefault(),O(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{children:a("finance.modal.assign")}),(0,t.jsxs)(n8,{role:"tablist",children:[(0,t.jsx)(n5,{type:"button",active:"single"===j,onClick:()=>v("single"),children:a("finance.modal.member")}),(0,t.jsx)(n5,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n7,{style:{marginTop:c.w4.spacing.sm},children:W.map(e=>(0,t.jsxs)(n9,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n7,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),a=M.includes(e.id);return(0,t.jsxs)(n9,{type:"button",active:a,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(ie,{style:{marginTop:c.w4.spacing.xs},children:a("finance.modal.splitEach",{n:A,amount:ip(L)})})]})]}),(0,t.jsxs)(ia,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:o,children:a("finance.member.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!B,children:a("finance.quickAdd.add")})]})]})]})})}function iw({exp:e,finData:n,locale:i,t:a,onDelete:r,onClone:o,onToggleReimbursed:s,compact:l=!1,selectMode:m=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:f}){let g=ig(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),y=h>=0?n.familyMembers[h]:null,w=y?(0,b.a8)(y,h):c.w4.colors.mainTextMuted,j=e.split&&e.split.length>0?e.split.slice(0,4).map(e=>{let i=n.familyMembers.findIndex(n=>n.id===e.memberId),t=i>=0?n.familyMembers[i]:null;return t?{id:t.id,name:t.name,role:t.role,color:(0,b.a8)(t,i)}:{id:e.memberId,name:e.memberId.slice(0,2).toUpperCase(),role:"adult",color:c.w4.colors.mainTextMuted}}):null,v=e.split&&e.split.length>4?e.split.length-4:0,$=f?f(e.id):null,k=n=>{m&&x&&"INPUT"!==n.target.tagName&&x(e.id)},M=e.isReimbursable&&!m?s?(0,t.jsx)(ni,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(nn,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,T=!m&&o?(0,t.jsx)(nt,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${a("finance.tx.clone")} — ${e.description}`,title:a("finance.tx.clone"),children:"↻"}):null,S=m?null:(0,t.jsx)(na,{className:"delete-btn",type:"button",onClick:()=>r(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),F=m?(0,t.jsx)(eX,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,z=m?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return l?(0,t.jsxs)(e4,{compact:!0,style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e1,{color:g.color,"aria-hidden":!0}),(0,t.jsx)(e6,{children:(0,t.jsxs)(e3,{style:{display:"flex",alignItems:"center",gap:6},children:[j?(0,t.jsxs)(e9,{size:16,children:[j.map(e=>(0,t.jsx)(d.eu,{member:e,size:16},e.id)),v>0&&(0,t.jsxs)(ne,{size:16,children:["+",v]})]}):y?(0,t.jsx)(d.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:13,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,p.categoryLabel)(g,i)})]})}),(0,t.jsxs)(e5,{children:[M,(0,t.jsxs)(e7,{children:["−€",ip(e.amount)]}),T,S]})]}):(0,t.jsxs)(e4,{style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e2,{color:g.color,children:(0,d.n6)(g.icon)?(0,t.jsx)(d.In,{name:g.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:g.icon})}),(0,t.jsxs)(e6,{children:[(0,t.jsx)(e3,{children:e.description||(0,p.categoryLabel)(g,i)}),(0,t.jsxs)(e8,{children:[j?(0,t.jsxs)(e9,{size:14,children:[j.map(e=>(0,t.jsx)(d.eu,{member:e,size:14},e.id)),v>0&&(0,t.jsxs)(ne,{size:14,children:["+",v]})]}):y?(0,t.jsx)(d.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:11,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,p.categoryLabel)(g,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:ix(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:a("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(id,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e5,{children:[M,"recurring"===e.type&&(0,t.jsx)(nn,{children:a("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e7,{children:["−€",ip(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),T,S]})]})}let ij=document.getElementById("root");if(!ij)throw Error("Root element #root not found");(0,a.createRoot)(ij).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,f.Ym)(),a=(0,r.useMemo)(()=>(0,f.Nx)(i,h.A),[i]),{data:o,loaded:s,save:l}=(0,p.useFinance)(),H=o??{...p.EMPTY_FINANCE_DATA},[G]=(0,p.useProfile)(),eX=(0,r.useMemo)(()=>(0,p.recentMerchants)(H.expenses,20).slice(0,6),[H.expenses]),{canUndo:e9,latestLabelKey:ne,undo:nn}=(0,p.useUndo)(),[ni,nt]=(0,r.useState)(null),nh=(0,r.useCallback)(async(e,n)=>{(0,p.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:H,labelKey:n,ts:Date.now()}),nt(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,u.K)(10),await l(e)},[H,l]),n4=(0,r.useCallback)(async()=>{let e=nn();e&&(nt("finance.undo.label.reverted"),await l(e),setTimeout(()=>nt(null),2500))},[nn,l]),[n1,n2]=(0,r.useState)("overview"),[n6,n3]=(0,r.useState)(()=>(0,p.thisMonthKey)()),[n8,n5]=(0,r.useState)("shared");(0,r.useEffect)(()=>{(0,c.PL)(eH).then(e=>{e&&n5(e)})},[]);let n7=(0,r.useCallback)(e=>{n5(e),(0,c.Is)(eH,e)},[]),[n9,ie]=(0,r.useState)("1m");(0,r.useEffect)(()=>{(0,c.PL)("finance:timeline:range").then(e=>{("1m"===e||"3m"===e||"6m"===e||"1y"===e)&&ie(e)})},[]);let ii=(0,r.useCallback)(e=>{ie(e),(0,c.Is)("finance:timeline:range",e)},[]),[it,ia]=(0,r.useState)(!1),[ir,io]=(0,r.useState)(!1),[is,il]=(0,r.useState)([]),[ic,id]=(0,r.useState)(!1),[ij,iv]=(0,r.useState)(!1),[i$,ik]=(0,r.useState)(null),iM=+(is.length>0)+ +!!ic,[iT,iS]=(0,r.useState)(!1),[iF,iz]=(0,r.useState)({}),iC=(0,r.useMemo)(()=>{let e=0;return iF.text&&e++,iF.memberId&&e++,iF.categoryId&&e++,(iF.dateFrom||iF.dateTo)&&e++,(void 0!==iF.amountMin||void 0!==iF.amountMax)&&e++,iF.tags&&iF.tags.length>0&&e++,e},[iF]),iI=(0,r.useCallback)(e=>{let n=[...H.savedViews??[],e];l({...H,savedViews:n})},[H,l]),iR=(0,r.useCallback)(e=>{let n=(H.savedViews??[]).filter(n=>n.id!==e);l({...H,savedViews:n})},[H,l]),iD=(0,T.E)();(0,r.useEffect)(()=>{"expenses"!==n1&&iD.selectMode&&iD.exitSelectMode()},[n1]);let{range:iE,setRange:iA}=(0,m.H)("month"),iL=(0,r.useRef)(null),iB=(0,r.useRef)(null),iO=(0,r.useRef)(null),[iP,iN]=(0,r.useState)(!1),[iW,iY]=(0,r.useState)(""),[iU,iq]=(0,r.useState)(!1),[iK,i_]=(0,r.useState)(""),iZ=(0,r.useRef)(null),[iH,iG]=(0,r.useState)(""),[iV,iJ]=(0,r.useState)("shared"),[iQ,iX]=(0,r.useState)(null),[i0,i4]=(0,r.useState)(!1),i1=(0,r.useRef)(null),[i2,i6]=(0,r.useState)(null),[i3,i8]=(0,r.useState)("EUR"),[i5,i7]=(0,r.useState)(!1),[i9,te]=(0,r.useState)(!1),tn=(0,O.x)(),ti=(0,r.useRef)(null),tt=(0,r.useRef)(!1),[ta,tr]=(0,r.useState)(!1),[to,ts]=(0,r.useState)(-1),tl=(0,r.useRef)(null),[tc,td]=(0,r.useState)(""),[tp,tm]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,c.PL)(e_).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&tm(n)}catch{}})},[]);let[tu,tx]=(0,r.useState)(!1),[tf,tg]=(0,r.useState)(!1),[th,tb]=(0,r.useState)(!1),ty=(0,r.useCallback)(e=>{let n=H.accounts??[],i=!1,t=n.map(n=>{if(!(n.id in e))return n;let t=e[n.id]-(0,p.accountBalance)(H,n.id);return 0===t?n:(i=!0,{...n,openingBalance:n.openingBalance+t})});i&&nh({...H,accounts:t},"finance.undo.label.edited"),tb(!1)},[H,nh]),tw=(0,r.useCallback)(e=>{nh({...H,income:[e,...H.income]},"finance.undo.label.added"),tg(!1),i1.current&&clearTimeout(i1.current),i4(!0),i1.current=setTimeout(()=>i4(!1),2e3)},[H,nh]),tj=(0,r.useCallback)((e,n,i,t)=>{let a=i?[i,...H.recentDescriptions].filter(Boolean).slice(0,20):H.recentDescriptions,r={...H,expenses:[...e,...H.expenses],categoryHints:n,recentDescriptions:a};for(let e of t)r=(0,p.addRecentTag)(r,e);nh(r,"finance.undo.label.added"),tx(!1),i1.current&&clearTimeout(i1.current),i4(!0),i1.current=setTimeout(()=>i4(!1),2e3)},[H,nh]),[tv,t$]=(0,r.useState)(""),[tk,tM]=(0,r.useState)(""),[tT,tS]=(0,r.useState)(!1),[tF,tz]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,c.PL)(eK).then(e=>{("compact"===e||"comfortable"===e)&&tz(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===tF?"compact":"comfortable";tz(e),(0,c.Is)(eK,e)},[tF]);let[tC,tI]=(0,r.useState)(3);(0,r.useEffect)(()=>{(0,c.PL)(eZ).then(e=>{"6"===e?tI(6):"12"===e&&tI(12)})},[]);let tR=(0,r.useCallback)(e=>{tI(e),(0,c.Is)(eZ,String(e))},[]),tD=(0,r.useMemo)(()=>(0,p.thisMonthKey)(),[]),[tE,tA]=(0,r.useState)(eJ);(0,r.useEffect)(()=>{(0,c.PL)(eG).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eJ.filter(e=>!i.has(e.id))];tA(t)}catch{}})},[]);let tL=(0,r.useCallback)((e,n)=>{tA(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,c.Is)(eG,JSON.stringify(r)),r})},[]),tB=(0,r.useCallback)(e=>{tA(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,c.Is)(eG,JSON.stringify(r)),r})},[]),[tO,tP]=(0,r.useState)(eQ);(0,r.useEffect)(()=>{(0,c.PL)(eV).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eQ.filter(e=>!i.has(e.id))];tP(t)}catch{}})},[]);let tN=(0,r.useCallback)((e,n)=>{tP(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,c.Is)(eV,JSON.stringify(r)),r})},[]),tW=(0,r.useCallback)(e=>{tP(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,c.Is)(eV,JSON.stringify(r)),r})},[]),tY=(0,r.useMemo)(()=>(0,p.computeWeeklyStatus)(H),[H]),tU=(0,r.useMemo)(()=>(0,p.safeToSpendToday)(H),[H]);(0,r.useMemo)(()=>(0,p.computeMonthlySummary)(H,n6),[H,n6]);let tq=(0,r.useMemo)(()=>(0,p.generateInsightsWithMembers)(H),[H]),{insights:tK,dismiss:t_}=(0,p.useFinanceAnomalies)(),tZ=(0,r.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=p.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??H.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,p.categoryLabel)(n,i)}:e},[H.categories,i]),tH=(0,r.useMemo)(()=>(0,p.availableMonths)(H),[H]),tG=(0,r.useMemo)(()=>(0,p.filterExpensesByRange)(H.expenses,iE,n6),[H.expenses,iE,n6]),tV=(0,r.useMemo)(()=>(0,p.filterIncomeByRange)(H.income,iE,n6),[H.income,iE,n6]),tJ=(0,r.useMemo)(()=>{let e=(0,p.expensesForMember)(tG,n8);return is.length>0&&(e=e.filter(e=>is.includes(e.categoryId))),ic&&(e=e.filter(e=>!0===e.isReimbursable)),iC>0&&(e=(0,p.applyExpenseFilter)(e,iF)),e},[tG,n8,is,ic,iF,iC]),tQ=(0,r.useMemo)(()=>(0,p.monthlyTotalByMember)(H,n8,tD),[H,n8,tD]),tX=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tD),[tD]),t0=(0,r.useMemo)(()=>(0,p.monthlyTotalByMember)(H,n8,tX),[H,n8,tX]),t4=(0,r.useMemo)(()=>0===t0?0:Math.round((tQ-t0)/t0*100),[tQ,t0]),t1=(0,r.useMemo)(()=>{if("all"===n8)return a("finance.member.all");if("shared"===n8)return a("finance.hero.family");let e=H.familyMembers.find(e=>e.id===n8);return e?.name??a("finance.hero.family")},[n8,H.familyMembers,a]),t2=(0,r.useMemo)(()=>{if("all"===n8||"shared"===n8)return c.w4.colors.mainTextMuted;let e=H.familyMembers.findIndex(e=>e.id===n8);return -1===e?_:(0,b.a8)(H.familyMembers[e],e)},[n8,H.familyMembers]),t6=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let a=new Date(t);return a.setDate(t.getDate()+7),(0,p.expensesForMember)(H.expenses,n8).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<a}).reduce((e,n)=>e+n.amount,0)})},[H.expenses,n8]),t3=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return i.map(i=>{let t=(0,p.expensesForMonth)(e.expenses,i),r=(0,p.expensesForMember)(t,n),o={};for(let e of r)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:ig(e).color})),over:s>a?s-a:0}})})(H,n8),[H,n8]),t8=(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let a=89;a>=0;a--){let r=new Date(i);r.setDate(i.getDate()-a);let o=r.toISOString().slice(0,10),s=o.slice(0,7),l=(0,p.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,p.incomeForMonth)(e.income,s),d=c.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=c.reduce((e,n)=>e+n.amount,0)/30,u=d/30;t.push({inc:m,incGoal:u,exp:l})}return t})(H,n8),[H,n8]),t5=(0,r.useMemo)(()=>(0,p.forecastCashFlow)(H,tC),[H,tC]),t7=(0,r.useMemo)(()=>(0,p.firstNegativeDay)(t5),[t5]),t9=(0,r.useMemo)(()=>{let e,n,i;return e=x.zA[n9],n=new Date,i=H.expenses.length>0?H.expenses.reduce((e,n)=>e+n.amount,0)/H.expenses.length:20,Array.from({length:e},(t,a)=>{let r=(0,x.x)(a,e,n),o=(0,p.expensesForMember)(H.expenses.filter(e=>e.date===r),n8).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/i;return s<.5?1:s<1?2:s<2?3:4})},[H,n8,n9]),ae=(0,r.useMemo)(()=>(0,p.dayHourSpendMatrix)((0,p.expensesForMember)(H.expenses,n8)),[H.expenses,n8]),an=(0,r.useMemo)(()=>{let e=[];return e.push({key:"shared",label:a("finance.income.member.shared"),color:c.w4.colors.mainTextMuted,incomeSpk:(0,p.incomeSparkline)(H.income,"shared"),spendSpk:(0,p.memberSparkline)(H.expenses,"shared"),incomeTotal:(0,p.incomeForMember)(H.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,p.expensesForMember)(H.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,p.incomeForMember)(H.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,p.expensesForMember)(H.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,p.memberNetByMonth)(H,"shared",6)}),H.familyMembers.forEach((n,i)=>{let t=(0,b.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,p.incomeSparkline)(H.income,n.id),spendSpk:(0,p.memberSparkline)(H.expenses,n.id),incomeTotal:(0,p.incomeForMember)(H.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,p.expensesForMember)(H.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,p.incomeForMember)(H.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,p.expensesForMember)(H.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,p.memberNetByMonth)(H,n.id,6)})}),e},[H,a]),ai=(0,r.useMemo)(()=>{let e=Object.entries((0,p.incomeByMember)(H.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:a("finance.income.member.shared"),value:n,color:c.w4.colors.mainTextMuted};let i=H.familyMembers.findIndex(n=>n.id===e),t=H.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,b.a8)(t,i):c.w4.colors.accent}})},[H,a]),at=(0,r.useMemo)(()=>ai.reduce((e,n)=>e+n.value,0),[ai]),aa=tY.budget>0?tY.spent/tY.budget*100:0,ar=H.budget.monthlyBudget>0?tQ/H.budget.monthlyBudget*100:0,ao=(0,r.useMemo)(()=>{let e=iU&&iK.trim()?iK.trim():(0,p.parseQuickInput)(iW,H.familyMembers)?.description;return e?(0,p.guessCategoryWithRules)(H,e):"other"},[iW,iU,iK,H]),as=iH||tc||ao,al=(0,r.useMemo)(()=>(0,p.parseRecurringHint)(iW),[iW]),ac=(0,r.useMemo)(()=>{let e=(0,p.parseQuickInput)(iW,H.familyMembers),n=e?.amount??0;if(n<=0||!as)return null;let t=(0,p.expensesForWeek)(H.expenses),a=(0,p.spendingByCategory)(t)[as]??0,r=(0,p.thisMonthKey)(),o=(0,p.categoryProgress)(H,as,r),s=o.spent,l=o.budget,c=s+n,d="good";l>0&&(c>=l?d="over":(l>0?c/l*100:0)>=80&&(d="warn"));let m=(H.categories??p.DEFAULT_CATEGORIES).find(e=>e.id===as)??p.DEFAULT_CATEGORIES.find(e=>e.id===as)??p.DEFAULT_CATEGORIES[p.DEFAULT_CATEGORIES.length-1];return{label:m?(0,p.categoryLabel)(m,i):as,weekSpend:a,weekProjected:a+n,monthSpend:s,monthBudget:l,monthProjected:c,tone:d}},[iW,as,H,i]);(0,r.useEffect)(()=>{let e=(0,p.parseQuickInput)(iW,H.familyMembers);e?.memberId&&iJ(e.memberId)},[iW,H.familyMembers]);let ad=(0,r.useCallback)(()=>{let e=(0,p.parseQuickInput)(iW,H.familyMembers),n=(0,p.parseRecurringHint)(iW);if(!e||!n)return;let i=new Date,t=i.getFullYear(),a=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0");i6({amount:e.amount,description:e.description||(as??"other"),categoryId:as||"other",cadence:n.cadence,firstDue:`${t}-${a}-${r}`})},[iW,H.familyMembers,as]),ap=(0,r.useCallback)(()=>{if(!i2)return;let e=new Date(i2.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:i2.description,amount:i2.amount,categoryId:i2.categoryId,cadence:i2.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iV?iV:void 0};nh({...H,recurringRules:[...H.recurringRules??[],n]},"finance.undo.label.added"),i6(null),iY(""),iG(""),td(""),i1.current&&clearTimeout(i1.current),i4(!0),i1.current=setTimeout(()=>i4(!1),2e3)},[i2,H,iV,nh]),am=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=iU&&iK.trim()?iK.trim():void 0,t=(0,p.parseQuickInput)(iW,H.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let a=as||"other",r=t.memberId??("shared"!==iV?iV:void 0),o=t.tags??[],s=t.description?(0,p.normalizeMerchant)(t.description):void 0,l=iu(),d=t.amount;if("EUR"!==i3){te(!0),i7(!1);let e=await (0,p.convertToEUR)({amount:t.amount,code:i3,date:l});if(te(!1),!e)return void i7(!0);d=e.eur,n={code:i3,rate:e.rate,original:t.amount}}let m={id:(0,g.z)(),amount:d,date:l,categoryId:a,description:t.description||a,type:"daily",...t.split?{split:t.split}:{childId:r},createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{},...H.defaultAccountId?{accountId:H.defaultAccountId}:{}};tr(!1),i7(!1);let u={...H.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=a)});let x=[t.description||"",...H.recentDescriptions].filter(Boolean).slice(0,20),f=[m,...H.expenses],h={...H,expenses:f,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,p.addRecentTag)(h,e);nh(h,"finance.undo.label.added");let b=(0,$.j)(f);tm(b),(0,c.Is)(e_,JSON.stringify(b)),iY(""),i_(""),iq(!1),iG(""),td(""),iX(null),i1.current&&clearTimeout(i1.current),i4(!0),i1.current=setTimeout(()=>i4(!1),2e3)},[iW,iU,iK,as,iV,i3,H,nh]),au=(0,r.useCallback)(e=>{(0,u.K)([10,50,10]);let n=(0,p.parseQuickInput)(e,H.familyMembers);if(n){let e=iH||tc||(n.description?(0,p.guessCategoryWithRules)(H,n.description):"other"),i=n.memberId??("shared"!==iV?iV:void 0),t=n.tags??[],a={id:(0,g.z)(),amount:n.amount,date:iu(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},r={...H.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(r[n]=e)});let o=[n.description||"",...H.recentDescriptions].filter(Boolean).slice(0,20),s={...H,expenses:[a,...H.expenses],categoryHints:r,recentDescriptions:o};for(let e of t)s=(0,p.addRecentTag)(s,e);nh(s,"finance.undo.label.added");let l=(0,$.j)([a,...H.expenses]);tm(l),(0,c.Is)(e_,JSON.stringify(l)),iY(""),iG(""),td(""),i1.current&&clearTimeout(i1.current),i4(!0),i1.current=setTimeout(()=>i4(!1),2e3)}else iY(e),iB.current?.focus()},[H,iH,tc,iV,nh]),ax=(0,r.useCallback)(e=>{nh({...H,expenses:H.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[H,nh]),af=(0,r.useCallback)(e=>{let n=H.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,g.z)(),date:iu(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nh({...H,expenses:[i,...H.expenses]},"finance.undo.label.added")},[H,nh]),ag=(0,r.useCallback)(e=>{nh({...H,income:H.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[H,nh]),ah=(0,r.useCallback)(e=>{nh({...H,expenses:H.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[H,nh]),ab=(0,r.useCallback)(()=>{let e=parseFloat(tv)||H.budget.weeklyBudget,n=parseFloat(tk)||H.budget.monthlyBudget;l({...H,budget:{...H.budget,weeklyBudget:e,monthlyBudget:n}}),tS(!0),setTimeout(()=>tS(!1),2e3)},[tv,tk,H,l]),ay=(0,r.useCallback)(()=>{let e=iD.selectedIds;0!==e.size&&(nh({...H,expenses:H.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iD.exitSelectMode())},[iD,H,nh]),aw=(0,r.useCallback)(e=>{let n=iD.selectedIds;0!==n.size&&(nh({...H,expenses:H.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iD.exitSelectMode())},[iD,H,nh]),aj=(0,r.useCallback)(()=>{let e=iD.selectedIds;0!==e.size&&(nh({...H,expenses:H.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iD.exitSelectMode())},[iD,H,nh]),av=(0,r.useMemo)(()=>["shared",...H.familyMembers.map(e=>e.id)],[H.familyMembers]);(0,v.K)({quickAddInputRef:iB,monthSelectRef:iO,memberIds:av,activeMemberId:n8,onSelectMember:n7,onSetTab:e=>n2(e),expenseModalOpen:tu,onOpenExpenseModal:()=>tx(!0),shortcutsOpen:iP,onToggleShortcuts:()=>iN(e=>!e),onOpenSearch:()=>{n2("expenses"),iS(!0)}});let a$=[{value:"week",label:a("finance.range.pill.7d")},{value:"month",label:a("finance.range.pill.month")},{value:"3m",label:a("finance.range.pill.3m")},{value:"6m",label:a("finance.range.pill.6m")},{value:"1y",label:a("finance.range.pill.year")}],ak=Math.floor(tQ).toLocaleString("pt-PT"),aM=(tQ%1).toFixed(2).slice(1),aT=(0,r.useMemo)(()=>{if(0===(H.goals??[]).length)return null;let e=(0,p.recomputeGoalCurrents)(H);return{onTrack:e.goals.filter(e=>"behind"!==(0,p.goalStatus)(e)).length,total:e.goals.length}},[H]),aS=(()=>{let[e,n]=tD.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),aF=(0,t.jsx)(b.TA,{data:H,activeMemberId:n8,onSelectMember:n7,onSaveData:l,t:a,locale:i}),az=(0,r.useMemo)(()=>{let e={};for(let n of tJ)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:ig(e).color}))},[tJ]),aC=az.reduce((e,n)=>e+n.value,0),aI=(0,r.useMemo)(()=>t3.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[t3]),aR=t3.length>0?aI/t3.length:0,aD=t3.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>H.budget.monthlyBudget).length,aE=(0,r.useMemo)(()=>{if(0===tJ.length)return null;let e=tJ.reduce((e,n)=>n.amount>e.amount?n:e,tJ[0]),n={};for(let e of tJ){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?H.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??a("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tJ){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tJ.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tJ,H.familyMembers,a]),aA="kid"===G.ageMode&&"shared"!==n8&&"all"!==n8?H.familyMembers.find(e=>e.id===n8&&"child"===e.role)??null:null;return aA?(0,t.jsx)(d.PE,{title:a("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(W.N,{member:aA,data:H,t:a})}):(0,t.jsxs)(d.PE,{title:a("finance.appTitle"),sidebar:aF,topBarRight:e,activeId:n8,children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(J,{children:(0,t.jsx)(b.jb,{data:H,activeMemberId:n8,onSelectMember:n7,t:a,locale:i})}),(0,t.jsxs)(X,{children:[(0,t.jsx)(ee,{children:(0,t.jsx)("div",{role:"tablist","aria-label":a("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:a("finance.tab.overview"),expenses:a("finance.tab.expenses"),insights:a("finance.tab.insights")},i={overview:0,expenses:tJ.length,insights:tq.length}[e];return(0,t.jsxs)(ei,{type:"button",role:"tab","aria-selected":n1===e,active:n1===e,onClick:()=>n2(e),children:[n[e],i>0&&(0,t.jsxs)(et,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(en,{children:[(0,t.jsxs)(d.ms,{align:"right",trigger:(0,t.jsx)(d.$n,{variant:iM>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(d.In,{name:"filter",size:13,"aria-hidden":!0}),children:iM>0?a("finance.filters.activeCount",{n:iM}):a("finance.actions.filters")}),children:[(0,t.jsx)(d.o_,{children:a("finance.filters.member")}),["shared",...H.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?a("finance.hero.family"):H.familyMembers.find(n=>n.id===e)?.name??e,i=e===n8;return(0,t.jsx)(d.tJ,{onClick:()=>n7(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(d.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.o_,{children:a("finance.filters.category")}),(0,t.jsx)(d.tJ,{onClick:()=>il([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===is.length&&(0,t.jsx)(d.In,{name:"check",size:12}),is.length>0&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.allCategories")]})}),p.DEFAULT_CATEGORIES.map(e=>{let n=is.includes(e.id);return(0,t.jsx)(d.tJ,{onClick:()=>il(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(d.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,p.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.tJ,{onClick:()=>id(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[ic&&(0,t.jsx)(d.In,{name:"check",size:12}),!ic&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.reimbursableOnly")]})}),iM>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.tJ,{onClick:()=>{il([]),id(!1)},children:a("finance.filters.reset")})]})]}),(0,t.jsx)(d.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(d.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>iv(!0),children:a("finance.actions.categories")}),"expenses"===n1&&(0,t.jsx)(Y.g,{count:iC,onClick:()=>iS(e=>!e),label:a("finance.search.openSearch")}),"expenses"===n1&&(0,t.jsx)(d.$n,{variant:iD.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iD.selectMode?iD.exitSelectMode():iD.enterSelectMode()},children:a("finance.bulk.select")}),"overview"===n1&&(0,t.jsx)(d.K0,{onClick:()=>{io(!0),requestAnimationFrame(()=>{window.print()})},title:a("finance.report.button"),"aria-label":a("finance.report.button"),children:(0,t.jsx)(d.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(d.K0,{onClick:()=>ia(!0),title:a("finance.actions.settings"),"aria-label":a("finance.actions.settings"),active:it,children:(0,t.jsx)(d.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(Q,{children:(0,t.jsx)(d.K0,{onClick:()=>iN(e=>!e),title:a("finance.shortcuts.title"),"aria-label":a("finance.shortcuts.title"),active:iP,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(er,{"aria-label":a("finance.range.label"),children:a$.map(({value:e,label:n})=>(0,t.jsx)(ea,{type:"button",active:iE===e,onClick:()=>{iA(e),"month"===e&&n3(tD)},"aria-pressed":iE===e,children:n},e))}),"expenses"===n1&&(0,t.jsx)(Y.P,{open:iT,query:iF,onQueryChange:iz,savedViews:H.savedViews??[],onSaveView:iI,onDeleteView:iR,onClose:()=>iS(!1),members:H.familyMembers,categories:[...p.DEFAULT_CATEGORIES,...H.categories??[]],locale:i,recentTags:H.recentTags}),"month"===iE&&H.expenses.length>0&&(0,t.jsx)(k.f,{data:H,selectedMonth:n6,onSelectMonth:n3,locale:i,t:a}),"overview"===n1&&H.budget.weeklyBudget>0&&(0,t.jsx)(q.e,{data:H,t:a,locale:i}),(0,t.jsxs)(ew,{children:["overview"===n1&&(0,t.jsxs)(ej,{children:[(0,t.jsxs)(el,{ref:iL,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:a("finance.quickAdd.title")}),tY.budget>0?(0,t.jsxs)(nf,{status:tU.status,title:a("finance.safeToSpend.label"),"aria-label":`${a("finance.safeToSpend.label")} €${tU.amount.toFixed(0)}`,children:[(0,t.jsx)("span",{className:"label",children:a("finance.safeToSpend.label")}),"danger"===tU.status?(0,t.jsx)("span",{className:"amount",children:a("finance.safeToSpend.over",{n:Math.abs(tU.remaining).toFixed(0)})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"amount",children:a("finance.safeToSpend.amount",{amount:tU.amount.toFixed(0)})}),(0,t.jsx)("span",{className:"suffix",children:a("finance.safeToSpend.suffix",{n:tU.daysRemaining})})]})]}):null]}),(0,t.jsxs)(nx,{visible:i0&&!tn.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",a("finance.quickAdd.added")]}),tn.listening&&(0,t.jsxs)(nb,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(ny,{}),a("finance.voice.listening")]}),(0,t.jsxs)(d.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tg(!0),children:["+ ",a("finance.quickAdd.addIncome")]}),(0,t.jsxs)(d.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tb(!0),children:["⚖ ",a("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:am,"aria-label":a("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(nc,{children:[{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...H.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(H.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(nd,{type:"button",active:iV===e.id,color:i,onClick:()=>iJ(e.id),children:[(0,t.jsx)(d.eu,{member:a,size:18}),e.name]},e.id)})}),(0,t.jsxs)(np,{children:[(0,t.jsxs)(nz,{children:[(0,t.jsx)(nm,{ref:iB,type:"text",placeholder:iU?a("finance.quickAdd.amountOnlyPlaceholder"):a("finance.quickAdd.placeholder"),value:iW,onChange:e=>{iY(e.target.value),iG(""),tr(eX.length>0),ts(-1)},onFocus:()=>{eX.length>0&&!iW.trim()&&tr(!0)},onBlur:()=>{setTimeout(()=>tr(!1),150)},onKeyDown:e=>{if(ta&&0!==eX.length)if("ArrowDown"===e.key)e.preventDefault(),ts(e=>Math.min(e+1,eX.length-1));else if("ArrowUp"===e.key)e.preventDefault(),ts(e=>Math.max(e-1,-1));else if("Enter"===e.key&&to>=0){e.preventDefault();let n=eX[to];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iW);iY(e?iW.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iG(""),tr(!1),ts(-1)}}else"Escape"===e.key&&(tr(!1),ts(-1))},"aria-label":a("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":ta&&eX.length>0,autoComplete:"off",inputMode:"decimal"}),ta&&eX.length>0&&(0,t.jsxs)(nC,{ref:tl,role:"listbox","aria-label":a("finance.merchant.recent"),children:[(0,t.jsx)(nE,{role:"presentation",children:a("finance.merchant.recent")}),eX.map((e,n)=>(0,t.jsxs)(nI,{role:"option","aria-selected":to===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iW);iY(i?iW.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iG(""),tr(!1),ts(-1),iB.current?.focus()},children:[(0,t.jsx)(nR,{children:e.merchant}),(0,t.jsxs)(nD,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(ec,{type:"button","aria-pressed":iU,"aria-label":iU?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iU;iq(e),e&&requestAnimationFrame(()=>iZ.current?.focus())},children:[(0,t.jsx)(d.In,{name:iU?"close":"plus",size:11}),iU?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(nu,{value:iH||ao,onChange:e=>{let n=e.target.value,i=iH||ao;iG(n);let t=iU&&iK.trim()?iK.trim():(0,p.parseQuickInput)(iW,H.familyMembers)?.description;t&&iX((0,p.proposeRuleFromOverride)(i,n,t))},"aria-label":a("finance.quickAdd.category"),children:p.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,p.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(nu,{value:i3,onChange:e=>{i8(e.target.value),i7(!1)},"aria-label":a("finance.currency.label"),style:{maxWidth:72},children:p.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iW.trim()||i9,children:i9?a("finance.currency.converting"):a("finance.quickAdd.add")}),tn.supported&&(0,t.jsx)(nF,{type:"button","aria-label":a("finance.voice.listening"),"aria-pressed":tn.listening,active:tn.listening,onPointerDown:()=>{ti.current=window.setTimeout(()=>{ti.current=null,tt.current=!0,(0,u.K)(30),tn.listening?tn.stop():tn.start(au)},500)},onPointerUp:()=>{null!==ti.current&&(clearTimeout(ti.current),ti.current=null,tt.current||((0,u.K)(10),tn.listening?tn.stop():tn.start(au))),tt.current=!1},onPointerCancel:()=>{null!==ti.current&&(clearTimeout(ti.current),ti.current=null),tt.current=!1},children:(0,t.jsx)(d.In,{name:"mic",size:16})})]}),(0,t.jsx)(ed,{visible:iU,children:(0,t.jsx)(ep,{ref:iZ,type:"text",placeholder:a("finance.quickAdd.descPlaceholder"),maxLength:80,value:iK,onChange:e=>i_(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iq(!1),iB.current?.focus())},"aria-label":a("finance.quickAdd.descPlaceholder"),tabIndex:iU?0:-1})}),(0,t.jsx)($.J,{expenses:H.expenses,storedOrder:tp,lockedCategoryId:tc,onToggle:e=>td(n=>n===e?"":e),locale:i,groupLabel:a("finance.quickAdd.frequentCategories")}),iQ&&(0,t.jsxs)(nw,{children:[(0,t.jsxs)("span",{children:[a("finance.categoryRules.alwaysCategorize",{match:iQ.match})," ",(0,t.jsx)("strong",{children:(n=p.DEFAULT_CATEGORIES.find(e=>e.id===iQ.categoryId))?(0,p.categoryLabel)(n,i):iQ.categoryId}),"?"]}),(0,t.jsx)(nj,{type:"button",accent:!0,onClick:()=>{H&&iQ&&(nh({...H,categoryRules:[iQ,...H.categoryRules??[]]},"finance.undo.label.added"),iX(null))},children:a("finance.categoryRules.propose")}),(0,t.jsx)(nj,{type:"button",onClick:()=>iX(null),children:a("finance.categoryRules.dismiss")})]}),i5&&(0,t.jsx)(ng,{style:{color:Z},role:"alert",children:a("finance.currency.fxFailed")}),ac&&(0,t.jsxs)(nv,{tone:ac.tone,title:ac.monthBudget>0?a("finance.quickAdd.preview.monthTooltip",{cat:ac.label,spent:ac.monthSpend.toFixed(0),budget:ac.monthBudget.toFixed(0),projected:ac.monthProjected.toFixed(0)}):a("finance.quickAdd.preview.weekTooltip",{cat:ac.label,spent:ac.weekSpend.toFixed(0),projected:ac.weekProjected.toFixed(0)}),children:["◉ ",ac.label," \xb7"," ",(0,t.jsxs)("strong",{children:["€",ac.weekSpend.toFixed(0)]})," ",(0,t.jsx)("span",{className:"arrow",children:"→"})," ",(0,t.jsxs)("strong",{children:["€",ac.weekProjected.toFixed(0)]})," ",a("finance.quickAdd.preview.thisWeek")]}),al&&(0,p.parseQuickInput)(iW,H.familyMembers)&&(0,t.jsxs)(n$,{type:"button",onClick:ad,"aria-label":a("finance.recurring.makeRecurring"),children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsx)(ng,{children:a("finance.quickAdd.hint")})]})]}),(0,t.jsx)(d.dO,{items:tO.map(e=>({...e})),onReorder:tN,onCycleSize:tW,accentColor:()=>_,labels:{moveLeft:a("finance.overview.panel.moveLeft"),moveRight:a("finance.overview.panel.moveRight"),cycleSize:a("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(eT,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eS,{children:[(0,t.jsxs)(eF,{children:[a("finance.hero.spentIn")," ",aS," \xb7 ",t1]}),(0,t.jsxs)(ez,{children:[(0,t.jsx)(eC,{children:"€"}),(0,t.jsx)(eI,{children:ak}),(0,t.jsx)(eR,{children:aM})]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(x.Ru,{value:t4,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[a("finance.hero.vsPrevious")," ",(0,p.formatMonthLabel)(tX,i)," \xb7 €",im(t0)]})]}),t6.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:t6,accent:t2,width:280,height:34})}),null!==aT&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:aT.onTrack===aT.total?"#7fb77e":c.w4.colors.mainTextMuted},children:a("finance.goals.hero",{on:aT.onTrack,total:aT.total})})]}),(0,t.jsx)(eE,{children:(0,t.jsxs)(eA,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(eB,{children:a("finance.budget.weekly")}),(0,t.jsxs)(eO,{children:["€",im(tY.spent)," ",(0,t.jsxs)(eP,{children:["/ €",tY.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:aa,over:aa>100?aa-100:0}),(0,t.jsxs)(eN,{children:[(0,t.jsxs)("span",{children:[Math.round(aa),"% ",a("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tY.remaining<0?Z:_},children:tY.remaining>0?`€${im(tY.remaining)} ${a("finance.budget.remaining")}`:`€${im(Math.abs(tY.remaining))} ${a("finance.budget.over")}`})]}),(0,t.jsxs)(eL,{style:{marginTop:14},children:[(0,t.jsx)(eB,{children:a("finance.budget.monthly")}),(0,t.jsxs)(eO,{children:["€",im(tQ)," ",(0,t.jsxs)(eP,{children:["/ €",H.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:ar,over:ar>100?ar-100:0}),(0,t.jsxs)(eN,{children:[(0,t.jsxs)("span",{children:[Math.round(ar),"% ",a("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[a("finance.budget.projected")," €",im(tQ+(tY.projectedTotal-tY.spent))]})]})]})})]});case"overview-accounts":return(0,t.jsx)(U.V,{data:H,t:a,onSave:e=>{nh(e,"finance.undo.label.edited")}});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e$,{children:[(0,t.jsx)(ek,{children:a("finance.charts.sixMonths")}),(0,t.jsx)(eM,{children:(0,t.jsx)(nQ,{children:p.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nX,{children:[(0,t.jsx)(n0,{color:e.color}),(0,p.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:t3,budget:H.budget.monthlyBudget,height:200}),(0,t.jsxs)(nA,{children:[(0,t.jsxs)(nL,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nB,{children:["€",im(aI)]})]}),(0,t.jsxs)(nL,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nB,{children:["€",im(aR)]})]}),(0,t.jsxs)(nL,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nB,{children:[aD," / ",t3.length]})]}),(0,t.jsxs)(nL,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nB,{style:{color:t4>0?Z:_},children:[t4>0?"+":"",t4,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e$,{children:[(0,t.jsx)(ek,{children:a("finance.charts.byCategory")}),(0,t.jsx)(nG,{type:"button",onClick:()=>n2("insights"),children:a("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:az,total:aC,size:110,centerLabel:aS.slice(0,3),centerValue:`€${im(aC)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:az.map(e=>{let n=ig(e.id),a=(0,p.expensesForMember)((0,p.expensesForMonth)(H.expenses,tX),n8).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),r=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{color:e.color}),(0,t.jsx)(eU,{children:(0,p.categoryLabel)(n,i)}),(0,t.jsxs)(eq,{children:["€",im(e.value)]}),Math.abs(r)>1&&(0,t.jsx)(x.Ru,{value:r,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e$,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ek,{children:a("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.forecast.sub",{n:tC})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(ea,{type:"button",active:tC===e,onClick:()=>tR(e),"aria-pressed":tC===e,children:a(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(R.b,{forecast:t5,firstNegDate:t7,t:a,locale:i,height:170}),t8.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:c.w4.spacing.md,paddingTop:c.w4.spacing.sm,borderTop:`1px solid ${c.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:c.w4.colors.mainTextMuted},children:a("finance.charts.cashflow")})}),(0,t.jsx)(x.uj,{data:t8,height:130,legendIn:a("finance.charts.in"),legendOut:a("finance.charts.out"),legendGoal:a("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e$,{children:[(0,t.jsx)(ek,{children:a("finance.charts.heatmap")}),(0,t.jsx)(x.zy,{range:n9,onChange:ii,labels:{"1m":a("finance.timeline.range.1m"),"3m":a("finance.timeline.range.3m"),"6m":a("finance.timeline.range.6m"),"1y":a("finance.timeline.range.1y")}})]}),(0,t.jsx)(x.RT,{data:t9,locale:i}),(0,t.jsxs)(nO,{children:[(0,t.jsx)("span",{children:a("finance.charts.less")}),(0,t.jsx)(nP,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:a("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(em,{children:(0,t.jsx)(d.YZ,{children:a("finance.heatmap.title")})}),(0,t.jsx)(y.D,{matrix:ae,locale:i,t:a})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e$,{children:(0,t.jsx)(ek,{children:a("finance.charts.thisWeek")})}),(0,t.jsxs)(nN,{children:[(0,t.jsxs)(nW,{children:[(0,t.jsxs)(nY,{children:["€",im(tY.spent)]}),(0,t.jsxs)(eP,{children:["/ €",tY.budget]})]}),(0,t.jsx)(x.kl,{spent:tY.spent,budget:tY.budget}),(0,t.jsxs)(nU,{children:[(0,t.jsx)("span",{children:a("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:a("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eu,{children:[(0,t.jsx)(d.YZ,{children:a("finance.recent.title")}),tJ.length>8&&(0,t.jsx)(nG,{type:"button",onClick:()=>n2("expenses"),children:a("finance.recent.viewAll",{n:tJ.length})})]}),0===tJ.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:a("finance.dashboard.noRecent")}):(0,t.jsx)(e0,{"aria-label":a("finance.recent.title"),children:tJ.slice(0,8).map(e=>(0,t.jsx)(iw,{exp:e,finData:H,locale:i,t:a,onDelete:ax,onClone:af,onToggleReimbursed:ah,compact:"compact"===tF},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.incomeMix.title")}),0===ai.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,padding:`${c.w4.spacing.md} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:ai,total:at,size:100,centerLabel:a("finance.byMember.income"),centerValue:`€${im(at)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:ai.map(e=>(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{color:e.color}),(0,t.jsx)(eU,{children:e.label}),(0,t.jsxs)(eq,{style:{color:_},children:["€",im(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n8?an:an.filter(e=>e.key===n8);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.byMember.title")}),an.length<=1&&0===H.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:_},{id:"expense",value:e.expense,color:Z}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:c.w4.spacing.sm},children:[(0,t.jsx)(d.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamily,color:c.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?_:Z},children:[n.net>=0?"+":"","€",im(Math.abs(n.net))]}),(0,t.jsx)(x.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(x.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:c.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(d.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(d.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:_},children:["€",im(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:_,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:Z},children:["€",im(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:Z,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.borderSubtle??c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===n1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nV,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(d.YZ,{children:a("finance.tx.title")}),"month"===iE&&0===H.expenses.length&&(0,t.jsx)(nH,{ref:iO,value:n6,onChange:e=>n3(e.target.value),"aria-label":a("finance.insights.month"),children:tH.map(e=>(0,t.jsx)("option",{value:e,children:(0,p.formatMonthLabel)(e,i)},e))})]}),0===tJ.length&&0===tV.length?(0,t.jsx)(ev,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:iC>0?a("finance.search.noResults"):a("finance.tx.empty")})}):(0,t.jsx)(ev,{span:12,children:(0,t.jsx)(e0,{"aria-label":a("finance.tx.title"),children:[...tJ.map(e=>({...e,_kind:"expense"})),...tV.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(iw,{exp:e,finData:H,locale:i,t:a,onDelete:ax,onClone:af,onToggleReimbursed:ah,compact:"compact"===tF,selectMode:iD.selectMode,selected:iD.selectedIds.has(e.id),onToggleSelect:iD.toggleId,longPressHandlers:iD.longPressHandlers,onEnterSelectMode:iD.enterSelectMode},e.id):(0,t.jsxs)(e4,{compact:"compact"===tF,children:["compact"===tF?(0,t.jsx)(e1,{color:_,"aria-hidden":!0}):(0,t.jsx)(e2,{color:_,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e6,{children:[(0,t.jsx)(e3,{children:e.source}),"compact"!==tF&&(0,t.jsxs)(e8,{children:[ix(e.date,i)," \xb7 ",a("finance.dashboard.income")]})]}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e7,{style:{color:_},children:["+€",ip(e.amount)]}),(0,t.jsx)(na,{className:"delete-btn",type:"button",onClick:()=>ag(e.id),"aria-label":`${a("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===n1&&(0,t.jsxs)(ey,{children:[(0,t.jsxs)(nV,{style:{marginBottom:0},children:[(0,t.jsx)(d.YZ,{children:a("finance.insights.title")}),"month"===iE&&0===H.expenses.length&&(0,t.jsx)(nH,{value:n6,onChange:e=>n3(e.target.value),"aria-label":a("finance.insights.month"),children:tH.map(e=>(0,t.jsx)("option",{value:e,children:(0,p.formatMonthLabel)(e,i)},e))})]}),null!==aE&&(0,t.jsxs)(ex,{children:[(0,t.jsxs)(ef,{children:[(0,t.jsx)(eg,{children:a("finance.kpi.biggestExpense")}),(0,t.jsxs)(eh,{children:["€",aE.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eb,{children:aE.biggest.description?`${aE.biggest.description} \xb7 ${(0,p.categoryLabel)(ig(aE.biggest.categoryId),i)}`:(0,p.categoryLabel)(ig(aE.biggest.categoryId),i)})]}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eg,{children:a("finance.kpi.topSpender")}),(0,t.jsxs)(eh,{children:["€",aE.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eb,{children:aE.topMemberLabel})]}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eg,{children:a("finance.kpi.busiestDay")}),(0,t.jsxs)(eh,{children:["€",aE.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eb,{children:a(`finance.weekday.${aE.busiestDowKey}`)})]}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eg,{children:a("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(eh,{children:["€",aE.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eb,{children:0===aE.reimbursableTotal?"—":a("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(d.dO,{items:tE.map(e=>({...e})),onReorder:tL,onCycleSize:tB,accentColor:()=>_,labels:{moveLeft:a("finance.insights.panel.moveLeft"),moveRight:a("finance.insights.panel.moveRight"),cycleSize:a("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:t3,budget:H.budget.monthlyBudget,height:180}),(0,t.jsxs)(nA,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(nL,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nB,{children:["€",im(aI)]})]}),(0,t.jsxs)(nL,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nB,{children:["€",im(aR)]})]}),(0,t.jsxs)(nL,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nB,{style:{color:t4>0?Z:_},children:[t4>0?"+":"",t4,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.charts.byCategory")}),0===az.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${c.w4.spacing.lg} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:az,total:aC,size:110,centerLabel:aS.slice(0,3),centerValue:`€${im(aC)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:az.map(e=>{let n=ig(e.id),a=e.color||c.w4.colors.mainTextMuted,r=(0,p.expensesForMember)((0,p.expensesForMonth)(H.expenses,tX),n8).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{color:a}),(0,t.jsx)(eU,{children:(0,p.categoryLabel)(n,i)}),(0,t.jsxs)(eq,{children:["€",im(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.insights.title")}),0===tq.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tq.map((e,n)=>(0,t.jsxs)(nr,{itype:e.type,children:[(0,t.jsx)(no,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:a(e.messageKey,tZ(e.params))}),e.memberId&&(()=>{let n=H.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=H.familyMembers.indexOf(n);return(0,t.jsxs)(ns,{children:[(0,t.jsx)(d.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.insights.anomalies")}),0===tK.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tK.map(e=>(0,t.jsxs)(nr,{itype:e.type,children:[(0,t.jsx)(no,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:a(e.messageKey,tZ(e.params))})}),e.snoozeKey&&(0,t.jsx)(nl,{type:"button",title:a("finance.insights.anomalies.dismiss"),"aria-label":a("finance.insights.anomalies.dismiss"),onClick:()=>{t_(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.smallMultiples.title")}),(0,t.jsx)(L.R,{expenses:H.expenses,familyMembers:H.familyMembers,getMemberColor:b.a8,t:a,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.reimbursables.tracker.title")}),(0,t.jsx)(A.p,{expenses:H.expenses,familyMembers:H.familyMembers,getMemberColor:b.a8,t:a,locale:i})]});case"analytics-settlements":return(0,t.jsx)(K.m,{data:H,onSave:e=>nh(e,"finance.undo.label.added"),t:a});case"analytics-budgets":return(0,t.jsx)(D.z,{});case"analytics-bills":return(0,t.jsx)(z.J,{});case"analytics-subscriptions":return(0,t.jsx)(S.n,{});case"analytics-goals":return(0,t.jsx)(F.f,{});case"analytics-recurring":return(0,t.jsx)(C.b,{});case"analytics-rules":return(0,t.jsx)(E.K,{});case"analytics-networth":return(0,t.jsx)(I.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.byMember.title")}),0===an.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:c.w4.spacing.sm},children:an.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(d.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(d.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:_},children:["€",im(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:_,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:Z},children:["€",im(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:Z,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nJ,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),tu&&(0,t.jsx)(iy,{finData:H,activeMemberId:n8,locale:i,t:a,onClose:()=>tx(!1),onSubmit:tj}),tf&&(0,t.jsx)(ib,{finData:H,locale:i,t:a,onClose:()=>tg(!1),onSubmit:tw}),th&&(0,t.jsx)(ih,{finData:H,t:a,onClose:()=>tb(!1),onSubmit:ty}),(0,t.jsx)(w.S,{labelKey:ni,onUndo:()=>{n4()},onDismiss:()=>nt(null),t:a}),iD.selectMode&&"expenses"===n1&&(0,t.jsx)(M.S,{selectionCount:iD.selectedIds.size,visibleIds:tJ.map(e=>e.id),selectedIds:iD.selectedIds,categories:p.DEFAULT_CATEGORIES,locale:i,t:a,onCancel:iD.exitSelectMode,onSelectAll:()=>iD.selectAll(tJ.map(e=>e.id)),onCategorise:aw,onDelete:ay,onMarkReimbursed:aj}),iP&&(0,t.jsx)(j.m,{t:a,onClose:()=>iN(!1)}),(0,t.jsx)(P.X,{open:it,onClose:()=>ia(!1),ariaLabel:a("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(eo,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(d.YZ,{children:a("finance.settings.title")}),(0,t.jsx)(d.K0,{onClick:()=>ia(!1),title:a("finance.actions.settings"),children:(0,t.jsx)(d.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"drawer-weekly-budget",children:a("finance.settings.weeklyBudget")}),(0,t.jsx)(n_,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(H.budget.weeklyBudget),value:tv,onChange:e=>t$(e.target.value)})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{htmlFor:"drawer-monthly-budget",children:a("finance.settings.monthlyBudget")}),(0,t.jsx)(n_,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(H.budget.monthlyBudget),value:tk,onChange:e=>tM(e.target.value)})]}),(0,t.jsx)(d.$n,{variant:"primary",onClick:()=>{ab(),ia(!1)},style:{height:44},children:tT?a("finance.settings.saved"):a("finance.settings.save")})]}),(0,t.jsx)(N.u,{data:H,getMemberColor:b.a8,t:a,onSaveMember:(e,n)=>{let i=H.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);nh({...H,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(P.X,{open:ij,onClose:()=>{iv(!1),ik(null)},ariaLabel:a("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(eo,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(d.YZ,{children:a("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!i$&&(0,t.jsx)(d.$n,{variant:"ghost",style:{height:28},onClick:()=>ik({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:a("finance.categories.new")}),(0,t.jsx)(d.K0,{onClick:()=>{iv(!1),ik(null)},title:a("finance.categories.cancel"),children:(0,t.jsx)(d.In,{name:"close",size:16})})]})]}),i$&&(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.md,display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{children:a("finance.categories.labelEn")}),(0,t.jsx)(nZ,{value:i$.labelEn,onChange:e=>ik(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{children:a("finance.categories.labelPt")}),(0,t.jsx)(nZ,{value:i$.labelPt,onChange:e=>ik(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{children:a("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:i$.icon,onChange:e=>ik(n=>n&&{...n,icon:e.target.value}),style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:d.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nK,{children:a("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:i$.color,onChange:e=>ik(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nZ,{value:i$.color,onChange:e=>ik(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(d.$n,{variant:"ghost",style:{height:28},onClick:()=>ik(null),children:a("finance.categories.cancel")}),(0,t.jsx)(d.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!i$.labelEn||!i$.labelPt)return;let e={id:(0,g.z)(),labelEn:i$.labelEn,labelPt:i$.labelPt,icon:i$.icon,color:i$.color,isCustom:!0},n=H.categories??[];nh({...H,categories:[...n,e]},"finance.undo.label.added"),ik(null)},children:a("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[p.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.n6)(e.icon)?(0,t.jsx)(d.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,p.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:a("finance.categories.builtIn")})]},e.id)),(H.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.n6)(e.icon)?(0,t.jsx)(d.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,p.categoryLabel)(e,i)}),(0,t.jsx)(d.K0,{title:a("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(H.categories??[]).filter(n=>n.id!==e.id);nh({...H,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(d.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(P.X,{open:null!==i2,onClose:()=>i6(null),ariaLabel:a("finance.recurring.makeRecurring"),maxWidth:360,children:i2&&(0,t.jsxs)(nk,{children:[(0,t.jsxs)(d.YZ,{children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nM,{children:a("finance.recurring.frequency")}),(0,t.jsx)(nT,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nS,{type:"button",active:i2.cadence===e,onClick:()=>i6(n=>n?{...n,cadence:e}:null),children:a(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nM,{children:a("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:i2.firstDue,onChange:e=>i6(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(d.$n,{variant:"ghost",onClick:()=>i6(null),children:a("finance.recurring.cancel")}),(0,t.jsx)(d.$n,{variant:"primary",onClick:ap,disabled:!i2.firstDue,children:a("finance.recurring.confirm")})]})]})}),ir&&(0,t.jsx)(B.h,{data:H,month:n6,locale:i,t:a,getMemberColor:b.a8})]})},{}))},8085(e,n,i){i.d(n,{default:()=>t});let t={id:"finance",port:3031,labelKey:"apps.finance.label",descriptionKey:"apps.finance.description",hash:"#/finance",hashAliases:[],icon:"wallet",color:"#7fb77e",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard"}}}]);