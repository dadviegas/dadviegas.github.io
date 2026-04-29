"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),a=i(8997),r=i(7991),o=i(6859),s=i.n(o),l=i(2799),c=i(6063),d=i(3236),p=i(6197),m=i(3759),u=i(789),x=i(9454),f=i(8170),g=i(4041),h=i(948),b=i(719),y=i(2405),w=i(9546),j=i(5854),v=i(3616),$=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),F=i(8635),z=i(8501),C=i(1789),I=i(216),R=i(9419),D=i(341),E=i(9378),A=i(1423),L=i(1255),B=i(3451),O=i(545),P=i(2167),N=i(7637),W=i(6891),Y=i(1331),U=i(2139),q=i(7600);let H="#7fb77e",K="#f85149",Z=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,_=c.w4.suites.lab,V=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  animation: ${Z} 0.25s ease both;
  overflow: hidden;
`,J=s().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,G=s().div`
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
`,Q=s().div`
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
`,ee=s().div`
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
`,en=s().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${c.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${_}`:"transparent"};
  background: ${({active:e})=>e?`${_}1f`:"transparent"};
  color: ${({active:e})=>e?_:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${_};
    outline-offset: 2px;
  }
`,ei=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,et=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${_}`:"transparent"};
  background: ${({active:e})=>e?`${_}1f`:"transparent"};
  color: ${({active:e})=>e?_:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${_};
    outline-offset: 2px;
  }
`,ea=s().div`
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
`;let er=s().div`
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
  animation: ${Z} 0.2s ease;

  @media (min-width: ${c.w4.breakpoints.md}) {
    border-radius: ${c.w4.borderRadius.lg};
  }
`,eo=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,es=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${H};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,el=s().button`
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
`,ec=s().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,ed=s().input`
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
  border-left: 2px solid ${H};
  padding: ${c.w4.spacing.lg};
`;let ep=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`;s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${H};
  padding: ${c.w4.spacing.md};
`;let em=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`,eu=s().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ex=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ef=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eg=s().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
`,eh=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eb=s().div`
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
`;let ey=s().div`
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
`;let ew=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,ej=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  border-left: 2px solid ${H};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    border-left-color: ${H};
  }

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${c.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,ev=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,e$=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ek=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,eM=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${H};
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,eT=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eS=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eF=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,ez=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,eC=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,eI=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eR=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eD=s().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,eE=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eA=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-of-type {
    margin-top: 0;
  }
`,eL=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,eB=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eO=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eP=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eN=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,eW=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eY=s().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eU=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eq="finance:list-density",eH="finance:quick-categories",eK="finance:forecast-months",eZ="finance:active-member",e_="finance:insights-layout",eV="finance:overview-layout",eJ=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eG=[{id:"overview-hero",size:"lg"},{id:"overview-accounts",size:"md"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eX=s().input`
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
`,eQ=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,e0=s().li`
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
`,e4=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,e1=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,e2=s().div`
  flex: 1;
  min-width: 0;
`,e6=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e3=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,e8=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,e5=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e7=s().span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  /* Each avatar after the first overlaps by half its width */
  & > * + * {
    margin-left: -${({size:e})=>Math.round(.45*e)}px;
  }
`,e9=s().span`
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
`,ne=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${H}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?H:"#facc15"};
  white-space: nowrap;
`,nn=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${H}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?H:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${H}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,ni=s().button`
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
    color: ${H};
    background: ${H}1a;
  }
  &:focus-visible {
    opacity: 1;
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
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,na=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${H}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${H}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,nr=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?K:"warning"===e?"#facc15":"success"===e?H:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,no=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,ns=s().button`
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
`;s()(ej)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let nl=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,nc=s().button`
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
`,nd=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,np=s().input`
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
`,nm=s().select`
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
`,nu=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${H};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nx=s().div`
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
`,nf=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,ng=(0,l.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,nh=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${H};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,nb=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${H};
  animation: ${ng} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,ny=s().div`
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
  animation: ${Z} 0.2s ease both;

  strong {
    color: ${c.w4.colors.mainText};
    font-weight: 600;
  }
`,nw=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?H:c.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${H}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${H}44`:c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${H}28`:c.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?H:c.w4.colors.borderStrong??c.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nj=s().button`
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
`,nv=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  animation: ${Z} 0.2s ease;
`,n$=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nk=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,nM=s().button`
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
`,nT=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${c.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?H:c.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?H:c.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${H};
    color: ${H};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nS=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nF=s().ul`
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
`,nz=s().li`
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
`,nC=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nI=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nR=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nD=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,nE=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nA=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nL=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nB=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nO=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,nP=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nN=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nW=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${H}; }
`,nY=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nU=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,nq=s().input`
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
`,nH=s().input`
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
`,nK=s().select`
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
`;let nZ=s().button`
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
`,n_=s().div`
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
`;let nV=s().footer`
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
`,nJ=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nG=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nX=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nQ=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg} ${c.w4.borderRadius.lg} ${c.w4.borderRadius.md} ${c.w4.borderRadius.md};
  border-left: 2px solid ${H};
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
`,n0=s().div`
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,n4=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,n1=s().button`
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
`,n2=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n6=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n3=s().button`
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
`,n8=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,n5=s().button`
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
`,n7=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n9=s().input`
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
`,ie=s().select`
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
`,ii=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,it=s().input`
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
`,ia=s().div`
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
`,ir=s().ul`
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
`,io=s().li`
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,is=s().div`
  position: relative;
`,il=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function ic(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function id(e){return Math.round(e).toLocaleString("pt-PT")}function ip(){return new Date().toISOString().slice(0,10)}function im(e,n){let[i,t,a]=e.split("-").map(Number);return new Date(i,t-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function iu(e){return p.DEFAULT_CATEGORIES.find(n=>n.id===e)??p.DEFAULT_CATEGORIES[p.DEFAULT_CATEGORIES.length-1]}function ix({finData:e,t:n,onClose:i,onSubmit:a}){let o=(0,p.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[l,m]=(0,r.useState)(""),u=parseFloat(l.replace(",",".")),x=l.trim().length>0&&!Number.isNaN(u),f=x?u-o:0;return(0,t.jsx)(P.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(n0,{children:[(0,t.jsxs)(n4,{children:[(0,t.jsx)(d.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(n1,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&a(u)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:c.w4.spacing.sm,background:c.w4.colors.sidebarHover,borderRadius:c.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",ic(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:c.w4.colors.mainTextMuted},children:["€",ic(s)]})]})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n9,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:l,onChange:e=>m(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==f&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:f>0?H:K,marginTop:6},children:f>0?n("finance.balance.deltaUp",{n:ic(f)}):n("finance.balance.deltaDown",{n:ic(-f)})}),x&&0===f&&(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(ii,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function ig({finData:e,locale:n,t:i,onClose:a,onSubmit:o}){let[s,l]=(0,r.useState)(""),[p,m]=(0,r.useState)(ip()),[u,x]=(0,r.useState)(""),[f,h]=(0,r.useState)(""),[y,w]=(0,r.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(P.X,{open:!0,onClose:a,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(n0,{children:[(0,t.jsxs)(n4,{children:[(0,t.jsx)(d.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(n1,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,g.z)(),amount:j,date:p,source:u.trim(),createdAt:Date.now(),...f?{goalId:f}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n2,{children:[(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n9,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>l(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n9,{id:"inc-date",type:"date",value:p,onChange:e=>m(e.target.value)})]})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n9,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(d.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(d.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n);return(0,t.jsxs)(d.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(ie,{id:"inc-goal",value:f,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(ii,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:a,children:i("finance.income.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function ih({finData:e,activeMemberId:n,locale:i,t:a,onClose:o,onSubmit:s}){let[l,m]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,h]=(0,r.useState)("other"),[y,w]=(0,r.useState)(ip()),[j,v]=(0,r.useState)("single"),[$,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,r.useState)([]),[z,C]=(0,r.useState)(""),[I,R]=(0,r.useState)(!1),D=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&h((0,p.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(l.replace(",","."))||0,A=M.length,L="split"===j&&A>0?E/A:E,B=E>0&&!!y&&("single"===j||"split"===j&&A>0),O=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),R(!1))},N=(0,r.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),W=[{id:"shared",name:a("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(P.X,{open:!0,onClose:o,ariaLabel:a("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nQ,{children:[(0,t.jsxs)(n4,{children:[(0,t.jsxs)(d.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(n1,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),a=Date.now(),r={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(r[e]=f)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:E,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===$?void 0:$,createdAt:a,...o}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,r)=>({id:(0,g.z)(),amount:0===r?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${A})`:f,type:"daily",childId:i,createdAt:a+r,...o}))}s(i,r,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n2,{children:[(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,t.jsx)(n9,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,t.jsx)(n9,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,t.jsx)(n9,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(ie,{id:"exp-cat",value:f,onChange:e=>h(e.target.value),children:p.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,p.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{children:a("finance.tags.label")}),(0,t.jsxs)(is,{children:[(0,t.jsxs)(ia,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(d.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":a("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(it,{ref:D,type:"text",value:z,placeholder:0===S.length?a("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),R(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),O(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&R(!1)},onBlur:()=>{z.trim()&&O(z),setTimeout(()=>R(!1),150)},onFocus:()=>R(!0),"aria-label":a("finance.tags.label")})]}),I&&N.length>0&&(0,t.jsx)(ir,{children:N.map(e=>(0,t.jsxs)(io,{onMouseDown:n=>{n.preventDefault(),O(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{children:a("finance.modal.assign")}),(0,t.jsxs)(n6,{role:"tablist",children:[(0,t.jsx)(n3,{type:"button",active:"single"===j,onClick:()=>v("single"),children:a("finance.modal.member")}),(0,t.jsx)(n3,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n8,{style:{marginTop:c.w4.spacing.sm},children:W.map(e=>(0,t.jsxs)(n5,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n8,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),a=M.includes(e.id);return(0,t.jsxs)(n5,{type:"button",active:a,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(n7,{style:{marginTop:c.w4.spacing.xs},children:a("finance.modal.splitEach",{n:A,amount:ic(L)})})]})]}),(0,t.jsxs)(ii,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:o,children:a("finance.member.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!B,children:a("finance.quickAdd.add")})]})]})]})})}function ib({exp:e,finData:n,locale:i,t:a,onDelete:r,onClone:o,onToggleReimbursed:s,compact:l=!1,selectMode:m=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:f}){let g=iu(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),y=h>=0?n.familyMembers[h]:null,w=y?(0,b.a8)(y,h):c.w4.colors.mainTextMuted,j=e.split&&e.split.length>0?e.split.slice(0,4).map(e=>{let i=n.familyMembers.findIndex(n=>n.id===e.memberId),t=i>=0?n.familyMembers[i]:null;return t?{id:t.id,name:t.name,role:t.role,color:(0,b.a8)(t,i)}:{id:e.memberId,name:e.memberId.slice(0,2).toUpperCase(),role:"adult",color:c.w4.colors.mainTextMuted}}):null,v=e.split&&e.split.length>4?e.split.length-4:0,$=f?f(e.id):null,k=n=>{m&&x&&"INPUT"!==n.target.tagName&&x(e.id)},M=e.isReimbursable&&!m?s?(0,t.jsx)(nn,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(ne,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,T=!m&&o?(0,t.jsx)(ni,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${a("finance.tx.clone")} — ${e.description}`,title:a("finance.tx.clone"),children:"↻"}):null,S=m?null:(0,t.jsx)(nt,{className:"delete-btn",type:"button",onClick:()=>r(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),F=m?(0,t.jsx)(eX,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,z=m?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return l?(0,t.jsxs)(e0,{compact:!0,style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e4,{color:g.color,"aria-hidden":!0}),(0,t.jsx)(e2,{children:(0,t.jsxs)(e6,{style:{display:"flex",alignItems:"center",gap:6},children:[j?(0,t.jsxs)(e7,{size:16,children:[j.map(e=>(0,t.jsx)(d.eu,{member:e,size:16},e.id)),v>0&&(0,t.jsxs)(e9,{size:16,children:["+",v]})]}):y?(0,t.jsx)(d.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:13,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,p.categoryLabel)(g,i)})]})}),(0,t.jsxs)(e8,{children:[M,(0,t.jsxs)(e5,{children:["−€",ic(e.amount)]}),T,S]})]}):(0,t.jsxs)(e0,{style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e1,{color:g.color,children:(0,d.n6)(g.icon)?(0,t.jsx)(d.In,{name:g.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:g.icon})}),(0,t.jsxs)(e2,{children:[(0,t.jsx)(e6,{children:e.description||(0,p.categoryLabel)(g,i)}),(0,t.jsxs)(e3,{children:[j?(0,t.jsxs)(e7,{size:14,children:[j.map(e=>(0,t.jsx)(d.eu,{member:e,size:14},e.id)),v>0&&(0,t.jsxs)(e9,{size:14,children:["+",v]})]}):y?(0,t.jsx)(d.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:11,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,p.categoryLabel)(g,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:im(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:a("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(il,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e8,{children:[M,"recurring"===e.type&&(0,t.jsx)(ne,{children:a("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e5,{children:["−€",ic(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),T,S]})]})}let iy=document.getElementById("root");if(!iy)throw Error("Root element #root not found");(0,a.createRoot)(iy).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,f.Ym)(),a=(0,r.useMemo)(()=>(0,f.Nx)(i,h.A),[i]),{data:o,loaded:s,save:l}=(0,p.useFinance)(),Z=o??{...p.EMPTY_FINANCE_DATA},[_]=(0,p.useProfile)(),eX=(0,r.useMemo)(()=>(0,p.recentMerchants)(Z.expenses,20).slice(0,6),[Z.expenses]),{canUndo:e7,latestLabelKey:e9,undo:ne}=(0,p.useUndo)(),[nn,ni]=(0,r.useState)(null),ng=(0,r.useCallback)(async(e,n)=>{(0,p.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:Z,labelKey:n,ts:Date.now()}),ni(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,u.K)(10),await l(e)},[Z,l]),nQ=(0,r.useCallback)(async()=>{let e=ne();e&&(ni("finance.undo.label.reverted"),await l(e),setTimeout(()=>ni(null),2500))},[ne,l]),[n0,n4]=(0,r.useState)("overview"),[n1,n2]=(0,r.useState)(()=>(0,p.thisMonthKey)()),[n6,n3]=(0,r.useState)("shared");(0,r.useEffect)(()=>{(0,c.PL)(eZ).then(e=>{e&&n3(e)})},[]);let n8=(0,r.useCallback)(e=>{n3(e),(0,c.Is)(eZ,e)},[]),[n5,n7]=(0,r.useState)("1m");(0,r.useEffect)(()=>{(0,c.PL)("finance:timeline:range").then(e=>{("1m"===e||"3m"===e||"6m"===e||"1y"===e)&&n7(e)})},[]);let n9=(0,r.useCallback)(e=>{n7(e),(0,c.Is)("finance:timeline:range",e)},[]),[ie,ii]=(0,r.useState)(!1),[it,ia]=(0,r.useState)(!1),[ir,io]=(0,r.useState)([]),[is,il]=(0,r.useState)(!1),[iy,iw]=(0,r.useState)(!1),[ij,iv]=(0,r.useState)(null),i$=+(ir.length>0)+ +!!is,[ik,iM]=(0,r.useState)(!1),[iT,iS]=(0,r.useState)({}),iF=(0,r.useMemo)(()=>{let e=0;return iT.text&&e++,iT.memberId&&e++,iT.categoryId&&e++,(iT.dateFrom||iT.dateTo)&&e++,(void 0!==iT.amountMin||void 0!==iT.amountMax)&&e++,iT.tags&&iT.tags.length>0&&e++,e},[iT]),iz=(0,r.useCallback)(e=>{let n=[...Z.savedViews??[],e];l({...Z,savedViews:n})},[Z,l]),iC=(0,r.useCallback)(e=>{let n=(Z.savedViews??[]).filter(n=>n.id!==e);l({...Z,savedViews:n})},[Z,l]),iI=(0,T.E)();(0,r.useEffect)(()=>{"expenses"!==n0&&iI.selectMode&&iI.exitSelectMode()},[n0]);let{range:iR,setRange:iD}=(0,m.H)("month"),iE=(0,r.useRef)(null),iA=(0,r.useRef)(null),iL=(0,r.useRef)(null),[iB,iO]=(0,r.useState)(!1),[iP,iN]=(0,r.useState)(""),[iW,iY]=(0,r.useState)(!1),[iU,iq]=(0,r.useState)(""),iH=(0,r.useRef)(null),[iK,iZ]=(0,r.useState)(""),[i_,iV]=(0,r.useState)("shared"),[iJ,iG]=(0,r.useState)(null),[iX,iQ]=(0,r.useState)(!1),i0=(0,r.useRef)(null),[i4,i1]=(0,r.useState)(null),[i2,i6]=(0,r.useState)("EUR"),[i3,i8]=(0,r.useState)(!1),[i5,i7]=(0,r.useState)(!1),i9=(0,O.x)(),te=(0,r.useRef)(null),tn=(0,r.useRef)(!1),[ti,tt]=(0,r.useState)(!1),[ta,tr]=(0,r.useState)(-1),to=(0,r.useRef)(null),[ts,tl]=(0,r.useState)(""),[tc,td]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,c.PL)(eH).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&td(n)}catch{}})},[]);let[tp,tm]=(0,r.useState)(!1),[tu,tx]=(0,r.useState)(!1),[tf,tg]=(0,r.useState)(!1),th=(0,r.useCallback)(e=>{let n=e-(0,p.computeCurrentBalance)(Z);if(0===n)return void tg(!1);let i=(Z.budget.openingBalance??0)+n,t=Z.accounts??[],a=Z.defaultAccountId??t[0]?.id,r=a?t.map(e=>e.id===a?{...e,openingBalance:e.openingBalance+n}:e):t;ng({...Z,budget:{...Z.budget,openingBalance:i},accounts:r},"finance.undo.label.edited"),tg(!1)},[Z,ng]),tb=(0,r.useCallback)(e=>{ng({...Z,income:[e,...Z.income]},"finance.undo.label.added"),tx(!1),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)},[Z,ng]),ty=(0,r.useCallback)((e,n,i,t)=>{let a=i?[i,...Z.recentDescriptions].filter(Boolean).slice(0,20):Z.recentDescriptions,r={...Z,expenses:[...e,...Z.expenses],categoryHints:n,recentDescriptions:a};for(let e of t)r=(0,p.addRecentTag)(r,e);ng(r,"finance.undo.label.added"),tm(!1),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)},[Z,ng]),[tw,tj]=(0,r.useState)(""),[tv,t$]=(0,r.useState)(""),[tk,tM]=(0,r.useState)(!1),[tT,tS]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,c.PL)(eq).then(e=>{("compact"===e||"comfortable"===e)&&tS(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===tT?"compact":"comfortable";tS(e),(0,c.Is)(eq,e)},[tT]);let[tF,tz]=(0,r.useState)(3);(0,r.useEffect)(()=>{(0,c.PL)(eK).then(e=>{"6"===e?tz(6):"12"===e&&tz(12)})},[]);let tC=(0,r.useCallback)(e=>{tz(e),(0,c.Is)(eK,String(e))},[]),tI=(0,r.useMemo)(()=>(0,p.thisMonthKey)(),[]),[tR,tD]=(0,r.useState)(eJ);(0,r.useEffect)(()=>{(0,c.PL)(e_).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eJ.filter(e=>!i.has(e.id))];tD(t)}catch{}})},[]);let tE=(0,r.useCallback)((e,n)=>{tD(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,c.Is)(e_,JSON.stringify(r)),r})},[]),tA=(0,r.useCallback)(e=>{tD(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,c.Is)(e_,JSON.stringify(r)),r})},[]),[tL,tB]=(0,r.useState)(eG);(0,r.useEffect)(()=>{(0,c.PL)(eV).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eG.filter(e=>!i.has(e.id))];tB(t)}catch{}})},[]);let tO=(0,r.useCallback)((e,n)=>{tB(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,c.Is)(eV,JSON.stringify(r)),r})},[]),tP=(0,r.useCallback)(e=>{tB(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,c.Is)(eV,JSON.stringify(r)),r})},[]),tN=(0,r.useMemo)(()=>(0,p.computeWeeklyStatus)(Z),[Z]),tW=(0,r.useMemo)(()=>(0,p.safeToSpendToday)(Z),[Z]);(0,r.useMemo)(()=>(0,p.computeMonthlySummary)(Z,n1),[Z,n1]);let tY=(0,r.useMemo)(()=>(0,p.generateInsightsWithMembers)(Z),[Z]),{insights:tU,dismiss:tq}=(0,p.useFinanceAnomalies)(),tH=(0,r.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=p.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??Z.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,p.categoryLabel)(n,i)}:e},[Z.categories,i]),tK=(0,r.useMemo)(()=>(0,p.availableMonths)(Z),[Z]),tZ=(0,r.useMemo)(()=>(0,p.filterExpensesByRange)(Z.expenses,iR,n1),[Z.expenses,iR,n1]),t_=(0,r.useMemo)(()=>(0,p.filterIncomeByRange)(Z.income,iR,n1),[Z.income,iR,n1]),tV=(0,r.useMemo)(()=>{let e=(0,p.expensesForMember)(tZ,n6);return ir.length>0&&(e=e.filter(e=>ir.includes(e.categoryId))),is&&(e=e.filter(e=>!0===e.isReimbursable)),iF>0&&(e=(0,p.applyExpenseFilter)(e,iT)),e},[tZ,n6,ir,is,iT,iF]),tJ=(0,r.useMemo)(()=>(0,p.monthlyTotalByMember)(Z,n6,tI),[Z,n6,tI]),tG=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tI),[tI]),tX=(0,r.useMemo)(()=>(0,p.monthlyTotalByMember)(Z,n6,tG),[Z,n6,tG]),tQ=(0,r.useMemo)(()=>0===tX?0:Math.round((tJ-tX)/tX*100),[tJ,tX]),t0=(0,r.useMemo)(()=>{if("all"===n6)return a("finance.member.all");if("shared"===n6)return a("finance.hero.family");let e=Z.familyMembers.find(e=>e.id===n6);return e?.name??a("finance.hero.family")},[n6,Z.familyMembers,a]),t4=(0,r.useMemo)(()=>{if("all"===n6||"shared"===n6)return c.w4.colors.mainTextMuted;let e=Z.familyMembers.findIndex(e=>e.id===n6);return -1===e?H:(0,b.a8)(Z.familyMembers[e],e)},[n6,Z.familyMembers]),t1=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let a=new Date(t);return a.setDate(t.getDate()+7),(0,p.expensesForMember)(Z.expenses,n6).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<a}).reduce((e,n)=>e+n.amount,0)})},[Z.expenses,n6]),t2=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return i.map(i=>{let t=(0,p.expensesForMonth)(e.expenses,i),r=(0,p.expensesForMember)(t,n),o={};for(let e of r)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:iu(e).color})),over:s>a?s-a:0}})})(Z,n6),[Z,n6]),t6=(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let a=89;a>=0;a--){let r=new Date(i);r.setDate(i.getDate()-a);let o=r.toISOString().slice(0,10),s=o.slice(0,7),l=(0,p.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,p.incomeForMonth)(e.income,s),d=c.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=c.reduce((e,n)=>e+n.amount,0)/30,u=d/30;t.push({inc:m,incGoal:u,exp:l})}return t})(Z,n6),[Z,n6]),t3=(0,r.useMemo)(()=>(0,p.forecastCashFlow)(Z,tF),[Z,tF]),t8=(0,r.useMemo)(()=>(0,p.firstNegativeDay)(t3),[t3]),t5=(0,r.useMemo)(()=>{let e,n,i;return e=x.zA[n5],n=new Date,i=Z.expenses.length>0?Z.expenses.reduce((e,n)=>e+n.amount,0)/Z.expenses.length:20,Array.from({length:e},(t,a)=>{let r=(0,x.x)(a,e,n),o=(0,p.expensesForMember)(Z.expenses.filter(e=>e.date===r),n6).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/i;return s<.5?1:s<1?2:s<2?3:4})},[Z,n6,n5]),t7=(0,r.useMemo)(()=>(0,p.dayHourSpendMatrix)((0,p.expensesForMember)(Z.expenses,n6)),[Z.expenses,n6]),t9=(0,r.useMemo)(()=>{let e=[];return e.push({key:"shared",label:a("finance.income.member.shared"),color:c.w4.colors.mainTextMuted,incomeSpk:(0,p.incomeSparkline)(Z.income,"shared"),spendSpk:(0,p.memberSparkline)(Z.expenses,"shared"),incomeTotal:(0,p.incomeForMember)(Z.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,p.expensesForMember)(Z.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,p.incomeForMember)(Z.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,p.expensesForMember)(Z.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,p.memberNetByMonth)(Z,"shared",6)}),Z.familyMembers.forEach((n,i)=>{let t=(0,b.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,p.incomeSparkline)(Z.income,n.id),spendSpk:(0,p.memberSparkline)(Z.expenses,n.id),incomeTotal:(0,p.incomeForMember)(Z.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,p.expensesForMember)(Z.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,p.incomeForMember)(Z.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,p.expensesForMember)(Z.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,p.memberNetByMonth)(Z,n.id,6)})}),e},[Z,a]),ae=(0,r.useMemo)(()=>{let e=Object.entries((0,p.incomeByMember)(Z.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:a("finance.income.member.shared"),value:n,color:c.w4.colors.mainTextMuted};let i=Z.familyMembers.findIndex(n=>n.id===e),t=Z.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,b.a8)(t,i):c.w4.colors.accent}})},[Z,a]),an=(0,r.useMemo)(()=>ae.reduce((e,n)=>e+n.value,0),[ae]),ai=tN.budget>0?tN.spent/tN.budget*100:0,at=Z.budget.monthlyBudget>0?tJ/Z.budget.monthlyBudget*100:0,aa=(0,r.useMemo)(()=>{let e=iW&&iU.trim()?iU.trim():(0,p.parseQuickInput)(iP,Z.familyMembers)?.description;return e?(0,p.guessCategoryWithRules)(Z,e):"other"},[iP,iW,iU,Z]),ar=iK||ts||aa,ao=(0,r.useMemo)(()=>(0,p.parseRecurringHint)(iP),[iP]);(0,r.useEffect)(()=>{let e=(0,p.parseQuickInput)(iP,Z.familyMembers);e?.memberId&&iV(e.memberId)},[iP,Z.familyMembers]);let as=(0,r.useCallback)(()=>{let e=(0,p.parseQuickInput)(iP,Z.familyMembers),n=(0,p.parseRecurringHint)(iP);if(!e||!n)return;let i=new Date,t=i.getFullYear(),a=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0");i1({amount:e.amount,description:e.description||(ar??"other"),categoryId:ar||"other",cadence:n.cadence,firstDue:`${t}-${a}-${r}`})},[iP,Z.familyMembers,ar]),al=(0,r.useCallback)(()=>{if(!i4)return;let e=new Date(i4.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:i4.description,amount:i4.amount,categoryId:i4.categoryId,cadence:i4.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==i_?i_:void 0};ng({...Z,recurringRules:[...Z.recurringRules??[],n]},"finance.undo.label.added"),i1(null),iN(""),iZ(""),tl(""),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)},[i4,Z,i_,ng]),ac=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=iW&&iU.trim()?iU.trim():void 0,t=(0,p.parseQuickInput)(iP,Z.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let a=ar||"other",r=t.memberId??("shared"!==i_?i_:void 0),o=t.tags??[],s=t.description?(0,p.normalizeMerchant)(t.description):void 0,l=ip(),d=t.amount;if("EUR"!==i2){i7(!0),i8(!1);let e=await (0,p.convertToEUR)({amount:t.amount,code:i2,date:l});if(i7(!1),!e)return void i8(!0);d=e.eur,n={code:i2,rate:e.rate,original:t.amount}}let m={id:(0,g.z)(),amount:d,date:l,categoryId:a,description:t.description||a,type:"daily",...t.split?{split:t.split}:{childId:r},createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{},...Z.defaultAccountId?{accountId:Z.defaultAccountId}:{}};tt(!1),i8(!1);let u={...Z.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=a)});let x=[t.description||"",...Z.recentDescriptions].filter(Boolean).slice(0,20),f=[m,...Z.expenses],h={...Z,expenses:f,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,p.addRecentTag)(h,e);ng(h,"finance.undo.label.added");let b=(0,$.j)(f);td(b),(0,c.Is)(eH,JSON.stringify(b)),iN(""),iq(""),iY(!1),iZ(""),tl(""),iG(null),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)},[iP,iW,iU,ar,i_,i2,Z,ng]),ad=(0,r.useCallback)(e=>{(0,u.K)([10,50,10]);let n=(0,p.parseQuickInput)(e,Z.familyMembers);if(n){let e=iK||ts||(n.description?(0,p.guessCategoryWithRules)(Z,n.description):"other"),i=n.memberId??("shared"!==i_?i_:void 0),t=n.tags??[],a={id:(0,g.z)(),amount:n.amount,date:ip(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},r={...Z.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(r[n]=e)});let o=[n.description||"",...Z.recentDescriptions].filter(Boolean).slice(0,20),s={...Z,expenses:[a,...Z.expenses],categoryHints:r,recentDescriptions:o};for(let e of t)s=(0,p.addRecentTag)(s,e);ng(s,"finance.undo.label.added");let l=(0,$.j)([a,...Z.expenses]);td(l),(0,c.Is)(eH,JSON.stringify(l)),iN(""),iZ(""),tl(""),i0.current&&clearTimeout(i0.current),iQ(!0),i0.current=setTimeout(()=>iQ(!1),2e3)}else iN(e),iA.current?.focus()},[Z,iK,ts,i_,ng]),ap=(0,r.useCallback)(e=>{ng({...Z,expenses:Z.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[Z,ng]),am=(0,r.useCallback)(e=>{let n=Z.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,g.z)(),date:ip(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};ng({...Z,expenses:[i,...Z.expenses]},"finance.undo.label.added")},[Z,ng]),au=(0,r.useCallback)(e=>{ng({...Z,income:Z.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[Z,ng]),ax=(0,r.useCallback)(e=>{ng({...Z,expenses:Z.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[Z,ng]),af=(0,r.useCallback)(()=>{let e=parseFloat(tw)||Z.budget.weeklyBudget,n=parseFloat(tv)||Z.budget.monthlyBudget;l({...Z,budget:{...Z.budget,weeklyBudget:e,monthlyBudget:n}}),tM(!0),setTimeout(()=>tM(!1),2e3)},[tw,tv,Z,l]),ag=(0,r.useCallback)(()=>{let e=iI.selectedIds;0!==e.size&&(ng({...Z,expenses:Z.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iI.exitSelectMode())},[iI,Z,ng]),ah=(0,r.useCallback)(e=>{let n=iI.selectedIds;0!==n.size&&(ng({...Z,expenses:Z.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iI.exitSelectMode())},[iI,Z,ng]),ab=(0,r.useCallback)(()=>{let e=iI.selectedIds;0!==e.size&&(ng({...Z,expenses:Z.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iI.exitSelectMode())},[iI,Z,ng]),ay=(0,r.useMemo)(()=>["shared",...Z.familyMembers.map(e=>e.id)],[Z.familyMembers]);(0,v.K)({quickAddInputRef:iA,monthSelectRef:iL,memberIds:ay,activeMemberId:n6,onSelectMember:n8,onSetTab:e=>n4(e),expenseModalOpen:tp,onOpenExpenseModal:()=>tm(!0),shortcutsOpen:iB,onToggleShortcuts:()=>iO(e=>!e),onOpenSearch:()=>{n4("expenses"),iM(!0)}});let aw=[{value:"week",label:a("finance.range.pill.7d")},{value:"month",label:a("finance.range.pill.month")},{value:"3m",label:a("finance.range.pill.3m")},{value:"6m",label:a("finance.range.pill.6m")},{value:"1y",label:a("finance.range.pill.year")}],aj=Math.floor(tJ).toLocaleString("pt-PT"),av=(tJ%1).toFixed(2).slice(1),a$=(0,r.useMemo)(()=>{if(0===(Z.goals??[]).length)return null;let e=(0,p.recomputeGoalCurrents)(Z);return{onTrack:e.goals.filter(e=>"behind"!==(0,p.goalStatus)(e)).length,total:e.goals.length}},[Z]),ak=(()=>{let[e,n]=tI.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),aM=(0,t.jsx)(b.TA,{data:Z,activeMemberId:n6,onSelectMember:n8,onSaveData:l,t:a,locale:i}),aT=(0,r.useMemo)(()=>{let e={};for(let n of tV)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:iu(e).color}))},[tV]),aS=aT.reduce((e,n)=>e+n.value,0),aF=(0,r.useMemo)(()=>t2.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[t2]),az=t2.length>0?aF/t2.length:0,aC=t2.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>Z.budget.monthlyBudget).length,aI=(0,r.useMemo)(()=>{if(0===tV.length)return null;let e=tV.reduce((e,n)=>n.amount>e.amount?n:e,tV[0]),n={};for(let e of tV){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?Z.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??a("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tV){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tV.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tV,Z.familyMembers,a]),aR="kid"===_.ageMode&&"shared"!==n6&&"all"!==n6?Z.familyMembers.find(e=>e.id===n6&&"child"===e.role)??null:null;return aR?(0,t.jsx)(d.PE,{title:a("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(W.N,{member:aR,data:Z,t:a})}):(0,t.jsxs)(d.PE,{title:a("finance.appTitle"),sidebar:aM,topBarRight:e,activeId:n6,children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(J,{children:(0,t.jsx)(b.jb,{data:Z,activeMemberId:n6,onSelectMember:n8,t:a,locale:i})}),(0,t.jsxs)(X,{children:[(0,t.jsx)(Q,{children:(0,t.jsx)("div",{role:"tablist","aria-label":a("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:a("finance.tab.overview"),expenses:a("finance.tab.expenses"),insights:a("finance.tab.insights")},i={overview:0,expenses:tV.length,insights:tY.length}[e];return(0,t.jsxs)(en,{type:"button",role:"tab","aria-selected":n0===e,active:n0===e,onClick:()=>n4(e),children:[n[e],i>0&&(0,t.jsxs)(ei,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(ee,{children:[(0,t.jsxs)(d.ms,{align:"right",trigger:(0,t.jsx)(d.$n,{variant:i$>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(d.In,{name:"filter",size:13,"aria-hidden":!0}),children:i$>0?a("finance.filters.activeCount",{n:i$}):a("finance.actions.filters")}),children:[(0,t.jsx)(d.o_,{children:a("finance.filters.member")}),["shared",...Z.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?a("finance.hero.family"):Z.familyMembers.find(n=>n.id===e)?.name??e,i=e===n6;return(0,t.jsx)(d.tJ,{onClick:()=>n8(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(d.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.o_,{children:a("finance.filters.category")}),(0,t.jsx)(d.tJ,{onClick:()=>io([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===ir.length&&(0,t.jsx)(d.In,{name:"check",size:12}),ir.length>0&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.allCategories")]})}),p.DEFAULT_CATEGORIES.map(e=>{let n=ir.includes(e.id);return(0,t.jsx)(d.tJ,{onClick:()=>io(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(d.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,p.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.tJ,{onClick:()=>il(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[is&&(0,t.jsx)(d.In,{name:"check",size:12}),!is&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.reimbursableOnly")]})}),i$>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.tJ,{onClick:()=>{io([]),il(!1)},children:a("finance.filters.reset")})]})]}),(0,t.jsx)(d.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(d.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>iw(!0),children:a("finance.actions.categories")}),"expenses"===n0&&(0,t.jsx)(Y.g,{count:iF,onClick:()=>iM(e=>!e),label:a("finance.search.openSearch")}),"expenses"===n0&&(0,t.jsx)(d.$n,{variant:iI.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iI.selectMode?iI.exitSelectMode():iI.enterSelectMode()},children:a("finance.bulk.select")}),"overview"===n0&&(0,t.jsx)(d.K0,{onClick:()=>{ia(!0),requestAnimationFrame(()=>{window.print()})},title:a("finance.report.button"),"aria-label":a("finance.report.button"),children:(0,t.jsx)(d.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(d.K0,{onClick:()=>ii(!0),title:a("finance.actions.settings"),"aria-label":a("finance.actions.settings"),active:ie,children:(0,t.jsx)(d.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(G,{children:(0,t.jsx)(d.K0,{onClick:()=>iO(e=>!e),title:a("finance.shortcuts.title"),"aria-label":a("finance.shortcuts.title"),active:iB,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(ea,{"aria-label":a("finance.range.label"),children:aw.map(({value:e,label:n})=>(0,t.jsx)(et,{type:"button",active:iR===e,onClick:()=>{iD(e),"month"===e&&n2(tI)},"aria-pressed":iR===e,children:n},e))}),"expenses"===n0&&(0,t.jsx)(Y.P,{open:ik,query:iT,onQueryChange:iS,savedViews:Z.savedViews??[],onSaveView:iz,onDeleteView:iC,onClose:()=>iM(!1),members:Z.familyMembers,categories:[...p.DEFAULT_CATEGORIES,...Z.categories??[]],locale:i,recentTags:Z.recentTags}),"month"===iR&&Z.expenses.length>0&&(0,t.jsx)(k.f,{data:Z,selectedMonth:n1,onSelectMonth:n2,locale:i,t:a}),"overview"===n0&&Z.budget.weeklyBudget>0&&(0,t.jsx)(q.e,{data:Z,t:a,locale:i}),(0,t.jsxs)(ey,{children:["overview"===n0&&(0,t.jsxs)(ew,{children:[(0,t.jsxs)(es,{ref:iE,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:a("finance.quickAdd.title")}),tN.budget>0?(0,t.jsxs)(nx,{status:tW.status,title:a("finance.safeToSpend.label"),"aria-label":`${a("finance.safeToSpend.label")} €${tW.amount.toFixed(0)}`,children:[(0,t.jsx)("span",{className:"label",children:a("finance.safeToSpend.label")}),"danger"===tW.status?(0,t.jsx)("span",{className:"amount",children:a("finance.safeToSpend.over",{n:Math.abs(tW.remaining).toFixed(0)})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"amount",children:a("finance.safeToSpend.amount",{amount:tW.amount.toFixed(0)})}),(0,t.jsx)("span",{className:"suffix",children:a("finance.safeToSpend.suffix",{n:tW.daysRemaining})})]})]}):null]}),(0,t.jsxs)(nu,{visible:iX&&!i9.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",a("finance.quickAdd.added")]}),i9.listening&&(0,t.jsxs)(nh,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nb,{}),a("finance.voice.listening")]}),(0,t.jsxs)(d.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tx(!0),children:["+ ",a("finance.quickAdd.addIncome")]}),(0,t.jsxs)(d.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tg(!0),children:["⚖ ",a("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:ac,"aria-label":a("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(nl,{children:[{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...Z.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(Z.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(nc,{type:"button",active:i_===e.id,color:i,onClick:()=>iV(e.id),children:[(0,t.jsx)(d.eu,{member:a,size:18}),e.name]},e.id)})}),(0,t.jsxs)(nd,{children:[(0,t.jsxs)(nS,{children:[(0,t.jsx)(np,{ref:iA,type:"text",placeholder:iW?a("finance.quickAdd.amountOnlyPlaceholder"):a("finance.quickAdd.placeholder"),value:iP,onChange:e=>{iN(e.target.value),iZ(""),tt(eX.length>0),tr(-1)},onFocus:()=>{eX.length>0&&!iP.trim()&&tt(!0)},onBlur:()=>{setTimeout(()=>tt(!1),150)},onKeyDown:e=>{if(ti&&0!==eX.length)if("ArrowDown"===e.key)e.preventDefault(),tr(e=>Math.min(e+1,eX.length-1));else if("ArrowUp"===e.key)e.preventDefault(),tr(e=>Math.max(e-1,-1));else if("Enter"===e.key&&ta>=0){e.preventDefault();let n=eX[ta];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iP);iN(e?iP.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iZ(""),tt(!1),tr(-1)}}else"Escape"===e.key&&(tt(!1),tr(-1))},"aria-label":a("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":ti&&eX.length>0,autoComplete:"off",inputMode:"decimal"}),ti&&eX.length>0&&(0,t.jsxs)(nF,{ref:to,role:"listbox","aria-label":a("finance.merchant.recent"),children:[(0,t.jsx)(nR,{role:"presentation",children:a("finance.merchant.recent")}),eX.map((e,n)=>(0,t.jsxs)(nz,{role:"option","aria-selected":ta===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iP);iN(i?iP.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iZ(""),tt(!1),tr(-1),iA.current?.focus()},children:[(0,t.jsx)(nC,{children:e.merchant}),(0,t.jsxs)(nI,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(el,{type:"button","aria-pressed":iW,"aria-label":iW?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iW;iY(e),e&&requestAnimationFrame(()=>iH.current?.focus())},children:[(0,t.jsx)(d.In,{name:iW?"close":"plus",size:11}),iW?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(nm,{value:iK||aa,onChange:e=>{let n=e.target.value,i=iK||aa;iZ(n);let t=iW&&iU.trim()?iU.trim():(0,p.parseQuickInput)(iP,Z.familyMembers)?.description;t&&iG((0,p.proposeRuleFromOverride)(i,n,t))},"aria-label":a("finance.quickAdd.category"),children:p.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,p.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(nm,{value:i2,onChange:e=>{i6(e.target.value),i8(!1)},"aria-label":a("finance.currency.label"),style:{maxWidth:72},children:p.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iP.trim()||i5,children:i5?a("finance.currency.converting"):a("finance.quickAdd.add")}),i9.supported&&(0,t.jsx)(nT,{type:"button","aria-label":a("finance.voice.listening"),"aria-pressed":i9.listening,active:i9.listening,onPointerDown:()=>{te.current=window.setTimeout(()=>{te.current=null,tn.current=!0,(0,u.K)(30),i9.listening?i9.stop():i9.start(ad)},500)},onPointerUp:()=>{null!==te.current&&(clearTimeout(te.current),te.current=null,tn.current||((0,u.K)(10),i9.listening?i9.stop():i9.start(ad))),tn.current=!1},onPointerCancel:()=>{null!==te.current&&(clearTimeout(te.current),te.current=null),tn.current=!1},children:(0,t.jsx)(d.In,{name:"mic",size:16})})]}),(0,t.jsx)(ec,{visible:iW,children:(0,t.jsx)(ed,{ref:iH,type:"text",placeholder:a("finance.quickAdd.descPlaceholder"),maxLength:80,value:iU,onChange:e=>iq(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iY(!1),iA.current?.focus())},"aria-label":a("finance.quickAdd.descPlaceholder"),tabIndex:iW?0:-1})}),(0,t.jsx)($.J,{expenses:Z.expenses,storedOrder:tc,lockedCategoryId:ts,onToggle:e=>tl(n=>n===e?"":e),locale:i,groupLabel:a("finance.quickAdd.frequentCategories")}),iJ&&(0,t.jsxs)(ny,{children:[(0,t.jsxs)("span",{children:[a("finance.categoryRules.alwaysCategorize",{match:iJ.match})," ",(0,t.jsx)("strong",{children:(n=p.DEFAULT_CATEGORIES.find(e=>e.id===iJ.categoryId))?(0,p.categoryLabel)(n,i):iJ.categoryId}),"?"]}),(0,t.jsx)(nw,{type:"button",accent:!0,onClick:()=>{Z&&iJ&&(ng({...Z,categoryRules:[iJ,...Z.categoryRules??[]]},"finance.undo.label.added"),iG(null))},children:a("finance.categoryRules.propose")}),(0,t.jsx)(nw,{type:"button",onClick:()=>iG(null),children:a("finance.categoryRules.dismiss")})]}),i3&&(0,t.jsx)(nf,{style:{color:K},role:"alert",children:a("finance.currency.fxFailed")}),ao&&(0,p.parseQuickInput)(iP,Z.familyMembers)&&(0,t.jsxs)(nj,{type:"button",onClick:as,"aria-label":a("finance.recurring.makeRecurring"),children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsx)(nf,{children:a("finance.quickAdd.hint")})]})]}),(0,t.jsx)(d.dO,{items:tL.map(e=>({...e})),onReorder:tO,onCycleSize:tP,accentColor:()=>H,labels:{moveLeft:a("finance.overview.panel.moveLeft"),moveRight:a("finance.overview.panel.moveRight"),cycleSize:a("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(eM,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eT,{children:[(0,t.jsxs)(eS,{children:[a("finance.hero.spentIn")," ",ak," \xb7 ",t0]}),(0,t.jsxs)(eF,{children:[(0,t.jsx)(ez,{children:"€"}),(0,t.jsx)(eC,{children:aj}),(0,t.jsx)(eI,{children:av})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(x.Ru,{value:tQ,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[a("finance.hero.vsPrevious")," ",(0,p.formatMonthLabel)(tG,i)," \xb7 €",id(tX)]})]}),t1.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:t1,accent:t4,width:280,height:34})}),null!==a$&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:a$.onTrack===a$.total?"#7fb77e":c.w4.colors.mainTextMuted},children:a("finance.goals.hero",{on:a$.onTrack,total:a$.total})})]}),(0,t.jsx)(eD,{children:(0,t.jsxs)(eE,{children:[(0,t.jsxs)(eA,{children:[(0,t.jsx)(eL,{children:a("finance.budget.weekly")}),(0,t.jsxs)(eB,{children:["€",id(tN.spent)," ",(0,t.jsxs)(eO,{children:["/ €",tN.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:ai,over:ai>100?ai-100:0}),(0,t.jsxs)(eP,{children:[(0,t.jsxs)("span",{children:[Math.round(ai),"% ",a("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tN.remaining<0?K:H},children:tN.remaining>0?`€${id(tN.remaining)} ${a("finance.budget.remaining")}`:`€${id(Math.abs(tN.remaining))} ${a("finance.budget.over")}`})]}),(0,t.jsxs)(eA,{style:{marginTop:14},children:[(0,t.jsx)(eL,{children:a("finance.budget.monthly")}),(0,t.jsxs)(eB,{children:["€",id(tJ)," ",(0,t.jsxs)(eO,{children:["/ €",Z.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:at,over:at>100?at-100:0}),(0,t.jsxs)(eP,{children:[(0,t.jsxs)("span",{children:[Math.round(at),"% ",a("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[a("finance.budget.projected")," €",id(tJ+(tN.projectedTotal-tN.spent))]})]})]})})]});case"overview-accounts":return(0,t.jsx)(U.V,{data:Z,t:a,onSave:e=>{ng(e,"finance.undo.label.edited")}});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(e$,{children:a("finance.charts.sixMonths")}),(0,t.jsx)(ek,{children:(0,t.jsx)(nJ,{children:p.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nG,{children:[(0,t.jsx)(nX,{color:e.color}),(0,p.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:t2,budget:Z.budget.monthlyBudget,height:200}),(0,t.jsxs)(nD,{children:[(0,t.jsxs)(nE,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nA,{children:["€",id(aF)]})]}),(0,t.jsxs)(nE,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nA,{children:["€",id(az)]})]}),(0,t.jsxs)(nE,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nA,{children:[aC," / ",t2.length]})]}),(0,t.jsxs)(nE,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nA,{style:{color:tQ>0?K:H},children:[tQ>0?"+":"",tQ,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(e$,{children:a("finance.charts.byCategory")}),(0,t.jsx)(nZ,{type:"button",onClick:()=>n4("insights"),children:a("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:aT,total:aS,size:110,centerLabel:ak.slice(0,3),centerValue:`€${id(aS)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:aT.map(e=>{let n=iu(e.id),a=(0,p.expensesForMember)((0,p.expensesForMonth)(Z.expenses,tG),n6).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),r=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eN,{children:[(0,t.jsx)(eW,{color:e.color}),(0,t.jsx)(eY,{children:(0,p.categoryLabel)(n,i)}),(0,t.jsxs)(eU,{children:["€",id(e.value)]}),Math.abs(r)>1&&(0,t.jsx)(x.Ru,{value:r,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(e$,{children:a("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.forecast.sub",{n:tF})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(et,{type:"button",active:tF===e,onClick:()=>tC(e),"aria-pressed":tF===e,children:a(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(R.b,{forecast:t3,firstNegDate:t8,t:a,locale:i,height:170}),t6.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:c.w4.spacing.md,paddingTop:c.w4.spacing.sm,borderTop:`1px solid ${c.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:c.w4.colors.mainTextMuted},children:a("finance.charts.cashflow")})}),(0,t.jsx)(x.uj,{data:t6,height:130,legendIn:a("finance.charts.in"),legendOut:a("finance.charts.out"),legendGoal:a("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(e$,{children:a("finance.charts.heatmap")}),(0,t.jsx)(x.zy,{range:n5,onChange:n9,labels:{"1m":a("finance.timeline.range.1m"),"3m":a("finance.timeline.range.3m"),"6m":a("finance.timeline.range.6m"),"1y":a("finance.timeline.range.1y")}})]}),(0,t.jsx)(x.RT,{data:t5,locale:i}),(0,t.jsxs)(nL,{children:[(0,t.jsx)("span",{children:a("finance.charts.less")}),(0,t.jsx)(nB,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:a("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ep,{children:(0,t.jsx)(d.YZ,{children:a("finance.heatmap.title")})}),(0,t.jsx)(y.D,{matrix:t7,locale:i,t:a})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ev,{children:(0,t.jsx)(e$,{children:a("finance.charts.thisWeek")})}),(0,t.jsxs)(nO,{children:[(0,t.jsxs)(nP,{children:[(0,t.jsxs)(nN,{children:["€",id(tN.spent)]}),(0,t.jsxs)(eO,{children:["/ €",tN.budget]})]}),(0,t.jsx)(x.kl,{spent:tN.spent,budget:tN.budget}),(0,t.jsxs)(nW,{children:[(0,t.jsx)("span",{children:a("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:a("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(em,{children:[(0,t.jsx)(d.YZ,{children:a("finance.recent.title")}),tV.length>8&&(0,t.jsx)(nZ,{type:"button",onClick:()=>n4("expenses"),children:a("finance.recent.viewAll",{n:tV.length})})]}),0===tV.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:a("finance.dashboard.noRecent")}):(0,t.jsx)(eQ,{"aria-label":a("finance.recent.title"),children:tV.slice(0,8).map(e=>(0,t.jsx)(ib,{exp:e,finData:Z,locale:i,t:a,onDelete:ap,onClone:am,onToggleReimbursed:ax,compact:"compact"===tT},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.incomeMix.title")}),0===ae.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,padding:`${c.w4.spacing.md} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:ae,total:an,size:100,centerLabel:a("finance.byMember.income"),centerValue:`€${id(an)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:ae.map(e=>(0,t.jsxs)(eN,{children:[(0,t.jsx)(eW,{color:e.color}),(0,t.jsx)(eY,{children:e.label}),(0,t.jsxs)(eU,{style:{color:H},children:["€",id(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n6?t9:t9.filter(e=>e.key===n6);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.byMember.title")}),t9.length<=1&&0===Z.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:H},{id:"expense",value:e.expense,color:K}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:c.w4.spacing.sm},children:[(0,t.jsx)(d.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamily,color:c.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?H:K},children:[n.net>=0?"+":"","€",id(Math.abs(n.net))]}),(0,t.jsx)(x.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(x.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:c.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(d.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(d.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:H},children:["€",id(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:H,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:K},children:["€",id(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:K,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.borderSubtle??c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===n0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n_,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(d.YZ,{children:a("finance.tx.title")}),"month"===iR&&0===Z.expenses.length&&(0,t.jsx)(nK,{ref:iL,value:n1,onChange:e=>n2(e.target.value),"aria-label":a("finance.insights.month"),children:tK.map(e=>(0,t.jsx)("option",{value:e,children:(0,p.formatMonthLabel)(e,i)},e))})]}),0===tV.length&&0===t_.length?(0,t.jsx)(ej,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:iF>0?a("finance.search.noResults"):a("finance.tx.empty")})}):(0,t.jsx)(ej,{span:12,children:(0,t.jsx)(eQ,{"aria-label":a("finance.tx.title"),children:[...tV.map(e=>({...e,_kind:"expense"})),...t_.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ib,{exp:e,finData:Z,locale:i,t:a,onDelete:ap,onClone:am,onToggleReimbursed:ax,compact:"compact"===tT,selectMode:iI.selectMode,selected:iI.selectedIds.has(e.id),onToggleSelect:iI.toggleId,longPressHandlers:iI.longPressHandlers,onEnterSelectMode:iI.enterSelectMode},e.id):(0,t.jsxs)(e0,{compact:"compact"===tT,children:["compact"===tT?(0,t.jsx)(e4,{color:H,"aria-hidden":!0}):(0,t.jsx)(e1,{color:H,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e2,{children:[(0,t.jsx)(e6,{children:e.source}),"compact"!==tT&&(0,t.jsxs)(e3,{children:[im(e.date,i)," \xb7 ",a("finance.dashboard.income")]})]}),(0,t.jsxs)(e8,{children:[(0,t.jsxs)(e5,{style:{color:H},children:["+€",ic(e.amount)]}),(0,t.jsx)(nt,{className:"delete-btn",type:"button",onClick:()=>au(e.id),"aria-label":`${a("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===n0&&(0,t.jsxs)(eb,{children:[(0,t.jsxs)(n_,{style:{marginBottom:0},children:[(0,t.jsx)(d.YZ,{children:a("finance.insights.title")}),"month"===iR&&0===Z.expenses.length&&(0,t.jsx)(nK,{value:n1,onChange:e=>n2(e.target.value),"aria-label":a("finance.insights.month"),children:tK.map(e=>(0,t.jsx)("option",{value:e,children:(0,p.formatMonthLabel)(e,i)},e))})]}),null!==aI&&(0,t.jsxs)(eu,{children:[(0,t.jsxs)(ex,{children:[(0,t.jsx)(ef,{children:a("finance.kpi.biggestExpense")}),(0,t.jsxs)(eg,{children:["€",aI.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eh,{children:aI.biggest.description?`${aI.biggest.description} \xb7 ${(0,p.categoryLabel)(iu(aI.biggest.categoryId),i)}`:(0,p.categoryLabel)(iu(aI.biggest.categoryId),i)})]}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(ef,{children:a("finance.kpi.topSpender")}),(0,t.jsxs)(eg,{children:["€",aI.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eh,{children:aI.topMemberLabel})]}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(ef,{children:a("finance.kpi.busiestDay")}),(0,t.jsxs)(eg,{children:["€",aI.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eh,{children:a(`finance.weekday.${aI.busiestDowKey}`)})]}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(ef,{children:a("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(eg,{children:["€",aI.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eh,{children:0===aI.reimbursableTotal?"—":a("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(d.dO,{items:tR.map(e=>({...e})),onReorder:tE,onCycleSize:tA,accentColor:()=>H,labels:{moveLeft:a("finance.insights.panel.moveLeft"),moveRight:a("finance.insights.panel.moveRight"),cycleSize:a("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:t2,budget:Z.budget.monthlyBudget,height:180}),(0,t.jsxs)(nD,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(nE,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nA,{children:["€",id(aF)]})]}),(0,t.jsxs)(nE,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nA,{children:["€",id(az)]})]}),(0,t.jsxs)(nE,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nA,{style:{color:tQ>0?K:H},children:[tQ>0?"+":"",tQ,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.charts.byCategory")}),0===aT.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${c.w4.spacing.lg} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:aT,total:aS,size:110,centerLabel:ak.slice(0,3),centerValue:`€${id(aS)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:aT.map(e=>{let n=iu(e.id),a=e.color||c.w4.colors.mainTextMuted,r=(0,p.expensesForMember)((0,p.expensesForMonth)(Z.expenses,tG),n6).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eN,{children:[(0,t.jsx)(eW,{color:a}),(0,t.jsx)(eY,{children:(0,p.categoryLabel)(n,i)}),(0,t.jsxs)(eU,{children:["€",id(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.insights.title")}),0===tY.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tY.map((e,n)=>(0,t.jsxs)(na,{itype:e.type,children:[(0,t.jsx)(nr,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:a(e.messageKey,tH(e.params))}),e.memberId&&(()=>{let n=Z.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=Z.familyMembers.indexOf(n);return(0,t.jsxs)(no,{children:[(0,t.jsx)(d.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.insights.anomalies")}),0===tU.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tU.map(e=>(0,t.jsxs)(na,{itype:e.type,children:[(0,t.jsx)(nr,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:a(e.messageKey,tH(e.params))})}),e.snoozeKey&&(0,t.jsx)(ns,{type:"button",title:a("finance.insights.anomalies.dismiss"),"aria-label":a("finance.insights.anomalies.dismiss"),onClick:()=>{tq(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.smallMultiples.title")}),(0,t.jsx)(L.R,{expenses:Z.expenses,familyMembers:Z.familyMembers,getMemberColor:b.a8,t:a,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.reimbursables.tracker.title")}),(0,t.jsx)(A.p,{expenses:Z.expenses,familyMembers:Z.familyMembers,getMemberColor:b.a8,t:a,locale:i})]});case"analytics-budgets":return(0,t.jsx)(D.z,{});case"analytics-bills":return(0,t.jsx)(z.J,{});case"analytics-subscriptions":return(0,t.jsx)(S.n,{});case"analytics-goals":return(0,t.jsx)(F.f,{});case"analytics-recurring":return(0,t.jsx)(C.b,{});case"analytics-rules":return(0,t.jsx)(E.K,{});case"analytics-networth":return(0,t.jsx)(I.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.byMember.title")}),0===t9.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:c.w4.spacing.sm},children:t9.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(d.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(d.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:H},children:["€",id(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:H,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:K},children:["€",id(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:K,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nV,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),tp&&(0,t.jsx)(ih,{finData:Z,activeMemberId:n6,locale:i,t:a,onClose:()=>tm(!1),onSubmit:ty}),tu&&(0,t.jsx)(ig,{finData:Z,locale:i,t:a,onClose:()=>tx(!1),onSubmit:tb}),tf&&(0,t.jsx)(ix,{finData:Z,t:a,onClose:()=>tg(!1),onSubmit:th}),(0,t.jsx)(w.S,{labelKey:nn,onUndo:()=>{nQ()},onDismiss:()=>ni(null),t:a}),iI.selectMode&&"expenses"===n0&&(0,t.jsx)(M.S,{selectionCount:iI.selectedIds.size,visibleIds:tV.map(e=>e.id),selectedIds:iI.selectedIds,categories:p.DEFAULT_CATEGORIES,locale:i,t:a,onCancel:iI.exitSelectMode,onSelectAll:()=>iI.selectAll(tV.map(e=>e.id)),onCategorise:ah,onDelete:ag,onMarkReimbursed:ab}),iB&&(0,t.jsx)(j.m,{t:a,onClose:()=>iO(!1)}),(0,t.jsx)(P.X,{open:ie,onClose:()=>ii(!1),ariaLabel:a("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(er,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(d.YZ,{children:a("finance.settings.title")}),(0,t.jsx)(d.K0,{onClick:()=>ii(!1),title:a("finance.actions.settings"),children:(0,t.jsx)(d.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"drawer-weekly-budget",children:a("finance.settings.weeklyBudget")}),(0,t.jsx)(nq,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(Z.budget.weeklyBudget),value:tw,onChange:e=>tj(e.target.value)})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{htmlFor:"drawer-monthly-budget",children:a("finance.settings.monthlyBudget")}),(0,t.jsx)(nq,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(Z.budget.monthlyBudget),value:tv,onChange:e=>t$(e.target.value)})]}),(0,t.jsx)(d.$n,{variant:"primary",onClick:()=>{af(),ii(!1)},style:{height:44},children:tk?a("finance.settings.saved"):a("finance.settings.save")})]}),(0,t.jsx)(N.u,{data:Z,getMemberColor:b.a8,t:a,onSaveMember:(e,n)=>{let i=Z.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);ng({...Z,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(P.X,{open:iy,onClose:()=>{iw(!1),iv(null)},ariaLabel:a("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(er,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(d.YZ,{children:a("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!ij&&(0,t.jsx)(d.$n,{variant:"ghost",style:{height:28},onClick:()=>iv({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:a("finance.categories.new")}),(0,t.jsx)(d.K0,{onClick:()=>{iw(!1),iv(null)},title:a("finance.categories.cancel"),children:(0,t.jsx)(d.In,{name:"close",size:16})})]})]}),ij&&(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.md,display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{children:a("finance.categories.labelEn")}),(0,t.jsx)(nH,{value:ij.labelEn,onChange:e=>iv(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{children:a("finance.categories.labelPt")}),(0,t.jsx)(nH,{value:ij.labelPt,onChange:e=>iv(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{children:a("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:ij.icon,onChange:e=>iv(n=>n&&{...n,icon:e.target.value}),style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:d.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nY,{children:[(0,t.jsx)(nU,{children:a("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:ij.color,onChange:e=>iv(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nH,{value:ij.color,onChange:e=>iv(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(d.$n,{variant:"ghost",style:{height:28},onClick:()=>iv(null),children:a("finance.categories.cancel")}),(0,t.jsx)(d.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!ij.labelEn||!ij.labelPt)return;let e={id:(0,g.z)(),labelEn:ij.labelEn,labelPt:ij.labelPt,icon:ij.icon,color:ij.color,isCustom:!0},n=Z.categories??[];ng({...Z,categories:[...n,e]},"finance.undo.label.added"),iv(null)},children:a("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[p.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.n6)(e.icon)?(0,t.jsx)(d.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,p.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:a("finance.categories.builtIn")})]},e.id)),(Z.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.n6)(e.icon)?(0,t.jsx)(d.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,p.categoryLabel)(e,i)}),(0,t.jsx)(d.K0,{title:a("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(Z.categories??[]).filter(n=>n.id!==e.id);ng({...Z,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(d.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(P.X,{open:null!==i4,onClose:()=>i1(null),ariaLabel:a("finance.recurring.makeRecurring"),maxWidth:360,children:i4&&(0,t.jsxs)(nv,{children:[(0,t.jsxs)(d.YZ,{children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n$,{children:a("finance.recurring.frequency")}),(0,t.jsx)(nk,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nM,{type:"button",active:i4.cadence===e,onClick:()=>i1(n=>n?{...n,cadence:e}:null),children:a(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n$,{children:a("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:i4.firstDue,onChange:e=>i1(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(d.$n,{variant:"ghost",onClick:()=>i1(null),children:a("finance.recurring.cancel")}),(0,t.jsx)(d.$n,{variant:"primary",onClick:al,disabled:!i4.firstDue,children:a("finance.recurring.confirm")})]})]})}),it&&(0,t.jsx)(B.h,{data:Z,month:n1,locale:i,t:a,getMemberColor:b.a8})]})},{}))}}]);