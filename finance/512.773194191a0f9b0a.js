"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),r=i(8997),a=i(7991),o=i(6859),s=i.n(o),l=i(2799),c=i(6063),d=i(884),p=i(8751),m=i(3759),u=i(789),x=i(9454),g=i(8170),f=i(4041),h=i(948),b=i(719),y=i(2405),w=i(9546),j=i(5854),v=i(3616),$=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),F=i(8635),z=i(8501),C=i(1789),I=i(216),R=i(9419),D=i(341),E=i(9378),L=i(1423),A=i(1255),B=i(3451),O=i(545),P=i(2167),N=i(7637),Y=i(6891),W=i(1331),U=i(2139);let q="#7fb77e",H="#f85149",K=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Z=c.w4.suites.lab,_=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  animation: ${K} 0.25s ease both;
  overflow: hidden;
`,V=s().div`
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
`,X=s().div`
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
`,Q=s().div`
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
`,ee=s().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${c.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${Z}`:"transparent"};
  background: ${({active:e})=>e?`${Z}1f`:"transparent"};
  color: ${({active:e})=>e?Z:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${Z};
    outline-offset: 2px;
  }
`,en=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,ei=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${Z}`:"transparent"};
  background: ${({active:e})=>e?`${Z}1f`:"transparent"};
  color: ${({active:e})=>e?Z:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${Z};
    outline-offset: 2px;
  }
`,et=s().div`
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
  animation: ${K} 0.2s ease;

  @media (min-width: ${c.w4.breakpoints.md}) {
    border-radius: ${c.w4.borderRadius.lg};
  }
`,ea=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,eo=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${q};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,es=s().button`
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
`,el=s().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,ec=s().input`
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
`;let ed=s().div`
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
`;let ep=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`,em=s().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,eu=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ex=s().div`
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
`,ef=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eh=s().div`
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
`;let eb=s().div`
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
`;let ey=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,ew=s().div`
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
`,ej=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,ev=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,e$=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,ek=s().div`
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
`,eM=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eT=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eS=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eF=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,ez=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,eC=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eI=s().div`
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
`,eD=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eE=s().div`
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
`,eA=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eB=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eO=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eP=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,eN=s().span`
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
`,eW=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eU="finance:list-density",eq="finance:quick-categories",eH="finance:forecast-months",eK="finance:active-member",eZ="finance:insights-layout",e_="finance:overview-layout",eV=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eJ=[{id:"overview-hero",size:"lg"},{id:"overview-accounts",size:"md"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eG=s().input`
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
`,eX=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eQ=s().li`
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
`,e0=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,e4=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,e1=s().div`
  flex: 1;
  min-width: 0;
`,e2=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e6=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,e3=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,e8=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e5=s().span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  /* Each avatar after the first overlaps by half its width */
  & > * + * {
    margin-left: -${({size:e})=>Math.round(.45*e)}px;
  }
`,e7=s().span`
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
`,e9=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${q}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?q:"#facc15"};
  white-space: nowrap;
`,ne=s().button`
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
`,nn=s().button`
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
    color: ${H};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nt=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${q}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${q}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,nr=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?H:"warning"===e?"#facc15":"success"===e?q:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,na=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,no=s().button`
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
`;s()(ew)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let ns=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,nl=s().button`
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
`,nc=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,nd=s().input`
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
`,np=s().select`
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
`,nm=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${q};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nu=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nx=(0,l.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,ng=s().div`
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
`,nf=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${q};
  animation: ${nx} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nh=s().div`
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
  animation: ${K} 0.2s ease both;

  strong {
    color: ${c.w4.colors.mainText};
    font-weight: 600;
  }
`,nb=s().button`
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
`,ny=s().button`
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
`,nw=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  animation: ${K} 0.2s ease;
`,nj=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nv=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,n$=s().button`
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
`,nk=s().button`
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
`,nM=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nT=s().ul`
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
`,nS=s().li`
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
`,nF=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nz=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nC=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nI=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,nR=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nD=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nE=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nL=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nA=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,nB=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nO=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nP=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${q}; }
`,nN=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nY=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,nW=s().input`
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
`,nU=s().input`
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
`,nq=s().select`
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
`;let nH=s().button`
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
`,nK=s().div`
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
`;let nZ=s().footer`
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
`,n_=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nV=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nJ=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nG=s().div`
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
`,nX=s().div`
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,nQ=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,n0=s().button`
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
`,n4=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n1=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n2=s().button`
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
`,n6=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,n3=s().button`
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
`,n8=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n5=s().input`
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
`,n7=s().select`
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
`,n9=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,ie=s().input`
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
`,ii=s().div`
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
`,it=s().ul`
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
`,ir=s().li`
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,ia=s().div`
  position: relative;
`,io=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function is(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function il(e){return Math.round(e).toLocaleString("pt-PT")}function ic(){return new Date().toISOString().slice(0,10)}function id(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function ip(e){return p.DEFAULT_CATEGORIES.find(n=>n.id===e)??p.DEFAULT_CATEGORIES[p.DEFAULT_CATEGORIES.length-1]}function im({finData:e,t:n,onClose:i,onSubmit:r}){let o=(0,p.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[l,m]=(0,a.useState)(""),u=parseFloat(l.replace(",",".")),x=l.trim().length>0&&!Number.isNaN(u),g=x?u-o:0;return(0,t.jsx)(P.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nX,{children:[(0,t.jsxs)(nQ,{children:[(0,t.jsx)(d.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(n0,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&r(u)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:c.w4.spacing.sm,background:c.w4.colors.sidebarHover,borderRadius:c.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",is(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:c.w4.colors.mainTextMuted},children:["€",is(s)]})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n5,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:l,onChange:e=>m(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:g>0?q:H,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:is(g)}):n("finance.balance.deltaDown",{n:is(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(n9,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function iu({finData:e,locale:n,t:i,onClose:r,onSubmit:o}){let[s,l]=(0,a.useState)(""),[p,m]=(0,a.useState)(ic()),[u,x]=(0,a.useState)(""),[g,h]=(0,a.useState)(""),[y,w]=(0,a.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(P.X,{open:!0,onClose:r,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nX,{children:[(0,t.jsxs)(nQ,{children:[(0,t.jsx)(d.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(n0,{type:"button",onClick:r,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,f.z)(),amount:j,date:p,source:u.trim(),createdAt:Date.now(),...g?{goalId:g}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n4,{children:[(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n5,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>l(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n5,{id:"inc-date",type:"date",value:p,onChange:e=>m(e.target.value)})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n5,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(d.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(d.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n);return(0,t.jsxs)(d.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n7,{id:"inc-goal",value:g,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(n9,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:r,children:i("finance.income.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function ix({finData:e,activeMemberId:n,locale:i,t:r,onClose:o,onSubmit:s}){let[l,m]=(0,a.useState)(""),[u,x]=(0,a.useState)(""),[g,h]=(0,a.useState)("other"),[y,w]=(0,a.useState)(ic()),[j,v]=(0,a.useState)("single"),[$,k]=(0,a.useState)(n),[M,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,a.useState)([]),[z,C]=(0,a.useState)(""),[I,R]=(0,a.useState)(!1),D=(0,a.useRef)(null);(0,a.useEffect)(()=>{u.trim()&&h((0,p.guessCategoryWithRules)(e,u))},[u,e]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(l.replace(",","."))||0,L=M.length,A="split"===j&&L>0?E/L:E,B=E>0&&!!y&&("single"===j||"split"===j&&L>0),O=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),R(!1))},N=(0,a.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),Y=[{id:"shared",name:r("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(P.X,{open:!0,onClose:o,ariaLabel:r("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nG,{children:[(0,t.jsxs)(nQ,{children:[(0,t.jsxs)(d.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,t.jsx)(n0,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),r=Date.now(),a={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=g)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,f.z)(),amount:E,date:y,categoryId:g,description:t||g,type:"daily",childId:"shared"===$?void 0:$,createdAt:r,...o}];else{let e=Math.round(E/L*100)/100,n=Math.round((E-e*L)*100)/100;i=M.map((i,a)=>({id:(0,f.z)(),amount:0===a?e+n:e,date:y,categoryId:g,description:t?`${t} (1/${L})`:g,type:"daily",childId:i,createdAt:r+a,...o}))}s(i,a,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n4,{children:[(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"exp-amount",children:r("finance.modal.amount")}),(0,t.jsx)(n5,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"exp-date",children:r("finance.modal.date")}),(0,t.jsx)(n5,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"exp-desc",children:r("finance.modal.description")}),(0,t.jsx)(n5,{id:"exp-desc",type:"text",placeholder:r("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,t.jsx)(n7,{id:"exp-cat",value:g,onChange:e=>h(e.target.value),children:p.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,p.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{children:r("finance.tags.label")}),(0,t.jsxs)(ia,{children:[(0,t.jsxs)(ii,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(d.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":r("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(ie,{ref:D,type:"text",value:z,placeholder:0===S.length?r("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),R(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),O(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&R(!1)},onBlur:()=>{z.trim()&&O(z),setTimeout(()=>R(!1),150)},onFocus:()=>R(!0),"aria-label":r("finance.tags.label")})]}),I&&N.length>0&&(0,t.jsx)(it,{children:N.map(e=>(0,t.jsxs)(ir,{onMouseDown:n=>{n.preventDefault(),O(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{children:r("finance.modal.assign")}),(0,t.jsxs)(n1,{role:"tablist",children:[(0,t.jsx)(n2,{type:"button",active:"single"===j,onClick:()=>v("single"),children:r("finance.modal.member")}),(0,t.jsx)(n2,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:r("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n6,{style:{marginTop:c.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(n3,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n6,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(n3,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),L>0&&E>0&&(0,t.jsx)(n8,{style:{marginTop:c.w4.spacing.xs},children:r("finance.modal.splitEach",{n:L,amount:is(A)})})]})]}),(0,t.jsxs)(n9,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:o,children:r("finance.member.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!B,children:r("finance.quickAdd.add")})]})]})]})})}function ig({exp:e,finData:n,locale:i,t:r,onDelete:a,onClone:o,onToggleReimbursed:s,compact:l=!1,selectMode:m=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:g}){let f=ip(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),y=h>=0?n.familyMembers[h]:null,w=y?(0,b.a8)(y,h):c.w4.colors.mainTextMuted,j=e.split&&e.split.length>0?e.split.slice(0,4).map(e=>{let i=n.familyMembers.findIndex(n=>n.id===e.memberId),t=i>=0?n.familyMembers[i]:null;return t?{id:t.id,name:t.name,role:t.role,color:(0,b.a8)(t,i)}:{id:e.memberId,name:e.memberId.slice(0,2).toUpperCase(),role:"adult",color:c.w4.colors.mainTextMuted}}):null,v=e.split&&e.split.length>4?e.split.length-4:0,$=g?g(e.id):null,k=n=>{m&&x&&"INPUT"!==n.target.tagName&&x(e.id)},M=e.isReimbursable&&!m?s?(0,t.jsx)(ne,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e9,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,T=!m&&o?(0,t.jsx)(nn,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,S=m?null:(0,t.jsx)(ni,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),F=m?(0,t.jsx)(eG,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,z=m?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return l?(0,t.jsxs)(eQ,{compact:!0,style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e0,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(e1,{children:(0,t.jsxs)(e2,{style:{display:"flex",alignItems:"center",gap:6},children:[j?(0,t.jsxs)(e5,{size:16,children:[j.map(e=>(0,t.jsx)(d.eu,{member:e,size:16},e.id)),v>0&&(0,t.jsxs)(e7,{size:16,children:["+",v]})]}):y?(0,t.jsx)(d.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:13,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,p.categoryLabel)(f,i)})]})}),(0,t.jsxs)(e3,{children:[M,(0,t.jsxs)(e8,{children:["−€",is(e.amount)]}),T,S]})]}):(0,t.jsxs)(eQ,{style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e4,{color:f.color,children:(0,d.n6)(f.icon)?(0,t.jsx)(d.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:e.description||(0,p.categoryLabel)(f,i)}),(0,t.jsxs)(e6,{children:[j?(0,t.jsxs)(e5,{size:14,children:[j.map(e=>(0,t.jsx)(d.eu,{member:e,size:14},e.id)),v>0&&(0,t.jsxs)(e7,{size:14,children:["+",v]})]}):y?(0,t.jsx)(d.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:11,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,p.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:id(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(io,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e3,{children:[M,"recurring"===e.type&&(0,t.jsx)(e9,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e8,{children:["−€",is(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),T,S]})]})}let ih=document.getElementById("root");if(!ih)throw Error("Root element #root not found");(0,r.createRoot)(ih).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,g.Ym)(),r=(0,a.useMemo)(()=>(0,g.Nx)(i,h.A),[i]),{data:o,loaded:s,save:l}=(0,p.useFinance)(),K=o??{...p.EMPTY_FINANCE_DATA},[Z]=(0,p.useProfile)(),eG=(0,a.useMemo)(()=>(0,p.recentMerchants)(K.expenses,20).slice(0,6),[K.expenses]),{canUndo:e5,latestLabelKey:e7,undo:e9}=(0,p.useUndo)(),[ne,nn]=(0,a.useState)(null),nx=(0,a.useCallback)(async(e,n)=>{(0,p.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:K,labelKey:n,ts:Date.now()}),nn(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,u.K)(10),await l(e)},[K,l]),nG=(0,a.useCallback)(async()=>{let e=e9();e&&(nn("finance.undo.label.reverted"),await l(e),setTimeout(()=>nn(null),2500))},[e9,l]),[nX,nQ]=(0,a.useState)("overview"),[n0,n4]=(0,a.useState)(()=>(0,p.thisMonthKey)()),[n1,n2]=(0,a.useState)("shared");(0,a.useEffect)(()=>{(0,c.PL)(eK).then(e=>{e&&n2(e)})},[]);let n6=(0,a.useCallback)(e=>{n2(e),(0,c.Is)(eK,e)},[]),[n3,n8]=(0,a.useState)(!1),[n5,n7]=(0,a.useState)(!1),[n9,ie]=(0,a.useState)([]),[ii,it]=(0,a.useState)(!1),[ir,ia]=(0,a.useState)(!1),[io,ih]=(0,a.useState)(null),ib=+(n9.length>0)+ +!!ii,[iy,iw]=(0,a.useState)(!1),[ij,iv]=(0,a.useState)({}),i$=(0,a.useMemo)(()=>{let e=0;return ij.text&&e++,ij.memberId&&e++,ij.categoryId&&e++,(ij.dateFrom||ij.dateTo)&&e++,(void 0!==ij.amountMin||void 0!==ij.amountMax)&&e++,ij.tags&&ij.tags.length>0&&e++,e},[ij]),ik=(0,a.useCallback)(e=>{let n=[...K.savedViews??[],e];l({...K,savedViews:n})},[K,l]),iM=(0,a.useCallback)(e=>{let n=(K.savedViews??[]).filter(n=>n.id!==e);l({...K,savedViews:n})},[K,l]),iT=(0,T.E)();(0,a.useEffect)(()=>{"expenses"!==nX&&iT.selectMode&&iT.exitSelectMode()},[nX]);let{range:iS,setRange:iF}=(0,m.H)("month"),iz=(0,a.useRef)(null),iC=(0,a.useRef)(null),iI=(0,a.useRef)(null),[iR,iD]=(0,a.useState)(!1),[iE,iL]=(0,a.useState)(""),[iA,iB]=(0,a.useState)(!1),[iO,iP]=(0,a.useState)(""),iN=(0,a.useRef)(null),[iY,iW]=(0,a.useState)(""),[iU,iq]=(0,a.useState)("shared"),[iH,iK]=(0,a.useState)(null),[iZ,i_]=(0,a.useState)(!1),iV=(0,a.useRef)(null),[iJ,iG]=(0,a.useState)(null),[iX,iQ]=(0,a.useState)("EUR"),[i0,i4]=(0,a.useState)(!1),[i1,i2]=(0,a.useState)(!1),i6=(0,O.x)(),i3=(0,a.useRef)(null),i8=(0,a.useRef)(!1),[i5,i7]=(0,a.useState)(!1),[i9,te]=(0,a.useState)(-1),tn=(0,a.useRef)(null),[ti,tt]=(0,a.useState)(""),[tr,ta]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,c.PL)(eq).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&ta(n)}catch{}})},[]);let[to,ts]=(0,a.useState)(!1),[tl,tc]=(0,a.useState)(!1),[td,tp]=(0,a.useState)(!1),tm=(0,a.useCallback)(e=>{let n=e-(0,p.computeCurrentBalance)(K);if(0===n)return void tp(!1);let i=(K.budget.openingBalance??0)+n;nx({...K,budget:{...K.budget,openingBalance:i}},"finance.undo.label.edited"),tp(!1)},[K,nx]),tu=(0,a.useCallback)(e=>{nx({...K,income:[e,...K.income]},"finance.undo.label.added"),tc(!1),iV.current&&clearTimeout(iV.current),i_(!0),iV.current=setTimeout(()=>i_(!1),2e3)},[K,nx]),tx=(0,a.useCallback)((e,n,i,t)=>{let r=i?[i,...K.recentDescriptions].filter(Boolean).slice(0,20):K.recentDescriptions,a={...K,expenses:[...e,...K.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)a=(0,p.addRecentTag)(a,e);nx(a,"finance.undo.label.added"),ts(!1),iV.current&&clearTimeout(iV.current),i_(!0),iV.current=setTimeout(()=>i_(!1),2e3)},[K,nx]),[tg,tf]=(0,a.useState)(""),[th,tb]=(0,a.useState)(""),[ty,tw]=(0,a.useState)(!1),[tj,tv]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,c.PL)(eU).then(e=>{("compact"===e||"comfortable"===e)&&tv(e)})},[]),(0,a.useCallback)(()=>{let e="comfortable"===tj?"compact":"comfortable";tv(e),(0,c.Is)(eU,e)},[tj]);let[t$,tk]=(0,a.useState)(3);(0,a.useEffect)(()=>{(0,c.PL)(eH).then(e=>{"6"===e?tk(6):"12"===e&&tk(12)})},[]);let tM=(0,a.useCallback)(e=>{tk(e),(0,c.Is)(eH,String(e))},[]),tT=(0,a.useMemo)(()=>(0,p.thisMonthKey)(),[]),[tS,tF]=(0,a.useState)(eV);(0,a.useEffect)(()=>{(0,c.PL)(eZ).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eV.filter(e=>!i.has(e.id))];tF(t)}catch{}})},[]);let tz=(0,a.useCallback)((e,n)=>{tF(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,c.Is)(eZ,JSON.stringify(a)),a})},[]),tC=(0,a.useCallback)(e=>{tF(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(eZ,JSON.stringify(a)),a})},[]),[tI,tR]=(0,a.useState)(eJ);(0,a.useEffect)(()=>{(0,c.PL)(e_).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eJ.filter(e=>!i.has(e.id))];tR(t)}catch{}})},[]);let tD=(0,a.useCallback)((e,n)=>{tR(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,c.Is)(e_,JSON.stringify(a)),a})},[]),tE=(0,a.useCallback)(e=>{tR(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(e_,JSON.stringify(a)),a})},[]),tL=(0,a.useMemo)(()=>(0,p.computeWeeklyStatus)(K),[K]);(0,a.useMemo)(()=>(0,p.computeMonthlySummary)(K,n0),[K,n0]);let tA=(0,a.useMemo)(()=>(0,p.generateInsightsWithMembers)(K),[K]),{insights:tB,dismiss:tO}=(0,p.useFinanceAnomalies)(),tP=(0,a.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=p.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??K.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,p.categoryLabel)(n,i)}:e},[K.categories,i]),tN=(0,a.useMemo)(()=>(0,p.availableMonths)(K),[K]),tY=(0,a.useMemo)(()=>(0,p.filterExpensesByRange)(K.expenses,iS,n0),[K.expenses,iS,n0]),tW=(0,a.useMemo)(()=>(0,p.filterIncomeByRange)(K.income,iS,n0),[K.income,iS,n0]),tU=(0,a.useMemo)(()=>{let e=(0,p.expensesForMember)(tY,n1);return n9.length>0&&(e=e.filter(e=>n9.includes(e.categoryId))),ii&&(e=e.filter(e=>!0===e.isReimbursable)),i$>0&&(e=(0,p.applyExpenseFilter)(e,ij)),e},[tY,n1,n9,ii,ij,i$]),tq=(0,a.useMemo)(()=>(0,p.monthlyTotalByMember)(K,n1,tT),[K,n1,tT]),tH=(0,a.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tT),[tT]),tK=(0,a.useMemo)(()=>(0,p.monthlyTotalByMember)(K,n1,tH),[K,n1,tH]),tZ=(0,a.useMemo)(()=>0===tK?0:Math.round((tq-tK)/tK*100),[tq,tK]),t_=(0,a.useMemo)(()=>{if("all"===n1)return r("finance.member.all");if("shared"===n1)return r("finance.hero.family");let e=K.familyMembers.find(e=>e.id===n1);return e?.name??r("finance.hero.family")},[n1,K.familyMembers,r]),tV=(0,a.useMemo)(()=>{if("all"===n1||"shared"===n1)return c.w4.colors.mainTextMuted;let e=K.familyMembers.findIndex(e=>e.id===n1);return -1===e?q:(0,b.a8)(K.familyMembers[e],e)},[n1,K.familyMembers]),tJ=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,p.expensesForMember)(K.expenses,n1).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[K.expenses,n1]),tG=(0,a.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,p.expensesForMonth)(e.expenses,i),a=(0,p.expensesForMember)(t,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:ip(e).color})),over:s>r?s-r:0}})})(K,n1),[K,n1]),tX=(0,a.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,p.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,p.incomeForMonth)(e.income,s),d=c.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=c.reduce((e,n)=>e+n.amount,0)/30,u=d/30;t.push({inc:m,incGoal:u,exp:l})}return t})(K,n1),[K,n1]),tQ=(0,a.useMemo)(()=>(0,p.forecastCashFlow)(K,t$),[K,t$]),t0=(0,a.useMemo)(()=>(0,p.firstNegativeDay)(tQ),[tQ]),t4=(0,a.useMemo)(()=>{let e,n;return e=new Date,n=K.expenses.length>0?K.expenses.reduce((e,n)=>e+n.amount,0)/K.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),o=(0,p.expensesForMember)(K.expenses.filter(e=>e.date===a),n1).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[K,n1]),t1=(0,a.useMemo)(()=>(0,p.dayHourSpendMatrix)((0,p.expensesForMember)(K.expenses,n1)),[K.expenses,n1]),t2=(0,a.useMemo)(()=>{let e=[];return e.push({key:"shared",label:r("finance.income.member.shared"),color:c.w4.colors.mainTextMuted,incomeSpk:(0,p.incomeSparkline)(K.income,"shared"),spendSpk:(0,p.memberSparkline)(K.expenses,"shared"),incomeTotal:(0,p.incomeForMember)(K.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,p.expensesForMember)(K.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,p.incomeForMember)(K.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,p.expensesForMember)(K.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,p.memberNetByMonth)(K,"shared",6)}),K.familyMembers.forEach((n,i)=>{let t=(0,b.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,p.incomeSparkline)(K.income,n.id),spendSpk:(0,p.memberSparkline)(K.expenses,n.id),incomeTotal:(0,p.incomeForMember)(K.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,p.expensesForMember)(K.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,p.incomeForMember)(K.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,p.expensesForMember)(K.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,p.memberNetByMonth)(K,n.id,6)})}),e},[K,r]),t6=(0,a.useMemo)(()=>{let e=Object.entries((0,p.incomeByMember)(K.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:r("finance.income.member.shared"),value:n,color:c.w4.colors.mainTextMuted};let i=K.familyMembers.findIndex(n=>n.id===e),t=K.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,b.a8)(t,i):c.w4.colors.accent}})},[K,r]),t3=(0,a.useMemo)(()=>t6.reduce((e,n)=>e+n.value,0),[t6]),t8=tL.budget>0?tL.spent/tL.budget*100:0,t5=K.budget.monthlyBudget>0?tq/K.budget.monthlyBudget*100:0,t7=(0,a.useMemo)(()=>{let e=iA&&iO.trim()?iO.trim():(0,p.parseQuickInput)(iE,K.familyMembers)?.description;return e?(0,p.guessCategoryWithRules)(K,e):"other"},[iE,iA,iO,K]),t9=iY||ti||t7,re=(0,a.useMemo)(()=>(0,p.parseRecurringHint)(iE),[iE]);(0,a.useEffect)(()=>{let e=(0,p.parseQuickInput)(iE,K.familyMembers);e?.memberId&&iq(e.memberId)},[iE,K.familyMembers]);let rn=(0,a.useCallback)(()=>{let e=(0,p.parseQuickInput)(iE,K.familyMembers),n=(0,p.parseRecurringHint)(iE);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");iG({amount:e.amount,description:e.description||(t9??"other"),categoryId:t9||"other",cadence:n.cadence,firstDue:`${t}-${r}-${a}`})},[iE,K.familyMembers,t9]),ri=(0,a.useCallback)(()=>{if(!iJ)return;let e=new Date(iJ.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iJ.description,amount:iJ.amount,categoryId:iJ.categoryId,cadence:iJ.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iU?iU:void 0};nx({...K,recurringRules:[...K.recurringRules??[],n]},"finance.undo.label.added"),iG(null),iL(""),iW(""),tt(""),iV.current&&clearTimeout(iV.current),i_(!0),iV.current=setTimeout(()=>i_(!1),2e3)},[iJ,K,iU,nx]),rt=(0,a.useCallback)(async e=>{let n;e.preventDefault();let i=iA&&iO.trim()?iO.trim():void 0,t=(0,p.parseQuickInput)(iE,K.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let r=t9||"other",a=t.memberId??("shared"!==iU?iU:void 0),o=t.tags??[],s=t.description?(0,p.normalizeMerchant)(t.description):void 0,l=ic(),d=t.amount;if("EUR"!==iX){i2(!0),i4(!1);let e=await (0,p.convertToEUR)({amount:t.amount,code:iX,date:l});if(i2(!1),!e)return void i4(!0);d=e.eur,n={code:iX,rate:e.rate,original:t.amount}}let m={id:(0,f.z)(),amount:d,date:l,categoryId:r,description:t.description||r,type:"daily",...t.split?{split:t.split}:{childId:a},createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{},...K.defaultAccountId?{accountId:K.defaultAccountId}:{}};i7(!1),i4(!1);let u={...K.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=r)});let x=[t.description||"",...K.recentDescriptions].filter(Boolean).slice(0,20),g=[m,...K.expenses],h={...K,expenses:g,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,p.addRecentTag)(h,e);nx(h,"finance.undo.label.added");let b=(0,$.j)(g);ta(b),(0,c.Is)(eq,JSON.stringify(b)),iL(""),iP(""),iB(!1),iW(""),tt(""),iK(null),iV.current&&clearTimeout(iV.current),i_(!0),iV.current=setTimeout(()=>i_(!1),2e3)},[iE,iA,iO,t9,iU,iX,K,nx]),rr=(0,a.useCallback)(e=>{(0,u.K)([10,50,10]);let n=(0,p.parseQuickInput)(e,K.familyMembers);if(n){let e=iY||ti||(n.description?(0,p.guessCategoryWithRules)(K,n.description):"other"),i=n.memberId??("shared"!==iU?iU:void 0),t=n.tags??[],r={id:(0,f.z)(),amount:n.amount,date:ic(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},a={...K.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(a[n]=e)});let o=[n.description||"",...K.recentDescriptions].filter(Boolean).slice(0,20),s={...K,expenses:[r,...K.expenses],categoryHints:a,recentDescriptions:o};for(let e of t)s=(0,p.addRecentTag)(s,e);nx(s,"finance.undo.label.added");let l=(0,$.j)([r,...K.expenses]);ta(l),(0,c.Is)(eq,JSON.stringify(l)),iL(""),iW(""),tt(""),iV.current&&clearTimeout(iV.current),i_(!0),iV.current=setTimeout(()=>i_(!1),2e3)}else iL(e),iC.current?.focus()},[K,iY,ti,iU,nx]),ra=(0,a.useCallback)(e=>{nx({...K,expenses:K.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[K,nx]),ro=(0,a.useCallback)(e=>{let n=K.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,f.z)(),date:ic(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nx({...K,expenses:[i,...K.expenses]},"finance.undo.label.added")},[K,nx]),rs=(0,a.useCallback)(e=>{nx({...K,income:K.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[K,nx]),rl=(0,a.useCallback)(e=>{nx({...K,expenses:K.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[K,nx]),rc=(0,a.useCallback)(()=>{let e=parseFloat(tg)||K.budget.weeklyBudget,n=parseFloat(th)||K.budget.monthlyBudget;l({...K,budget:{...K.budget,weeklyBudget:e,monthlyBudget:n}}),tw(!0),setTimeout(()=>tw(!1),2e3)},[tg,th,K,l]),rd=(0,a.useCallback)(()=>{let e=iT.selectedIds;0!==e.size&&(nx({...K,expenses:K.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iT.exitSelectMode())},[iT,K,nx]),rp=(0,a.useCallback)(e=>{let n=iT.selectedIds;0!==n.size&&(nx({...K,expenses:K.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iT.exitSelectMode())},[iT,K,nx]),rm=(0,a.useCallback)(()=>{let e=iT.selectedIds;0!==e.size&&(nx({...K,expenses:K.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iT.exitSelectMode())},[iT,K,nx]),ru=(0,a.useMemo)(()=>["shared",...K.familyMembers.map(e=>e.id)],[K.familyMembers]);(0,v.K)({quickAddInputRef:iC,monthSelectRef:iI,memberIds:ru,activeMemberId:n1,onSelectMember:n6,onSetTab:e=>nQ(e),expenseModalOpen:to,onOpenExpenseModal:()=>ts(!0),shortcutsOpen:iR,onToggleShortcuts:()=>iD(e=>!e),onOpenSearch:()=>{nQ("expenses"),iw(!0)}});let rx=[{value:"week",label:r("finance.range.pill.7d")},{value:"month",label:r("finance.range.pill.month")},{value:"3m",label:r("finance.range.pill.3m")},{value:"6m",label:r("finance.range.pill.6m")},{value:"1y",label:r("finance.range.pill.year")}],rg=Math.floor(tq).toLocaleString("pt-PT"),rf=(tq%1).toFixed(2).slice(1),rh=(0,a.useMemo)(()=>{if(0===(K.goals??[]).length)return null;let e=(0,p.recomputeGoalCurrents)(K);return{onTrack:e.goals.filter(e=>"behind"!==(0,p.goalStatus)(e)).length,total:e.goals.length}},[K]),rb=(()=>{let[e,n]=tT.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),ry=(0,t.jsx)(b.TA,{data:K,activeMemberId:n1,onSelectMember:n6,onSaveData:l,t:r,locale:i}),rw=(0,a.useMemo)(()=>{let e={};for(let n of tU)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:ip(e).color}))},[tU]),rj=rw.reduce((e,n)=>e+n.value,0),rv=(0,a.useMemo)(()=>tG.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tG]),r$=tG.length>0?rv/tG.length:0,rk=tG.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>K.budget.monthlyBudget).length,rM=(0,a.useMemo)(()=>{if(0===tU.length)return null;let e=tU.reduce((e,n)=>n.amount>e.amount?n:e,tU[0]),n={};for(let e of tU){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?K.familyMembers.find(e=>e.id===i[0]):void 0,a=t?.name??r("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tU){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tU.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:a,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tU,K.familyMembers,r]),rT="kid"===Z.ageMode&&"shared"!==n1&&"all"!==n1?K.familyMembers.find(e=>e.id===n1&&"child"===e.role)??null:null;return rT?(0,t.jsx)(d.PE,{title:r("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(Y.N,{member:rT,data:K,t:r})}):(0,t.jsxs)(d.PE,{title:r("finance.appTitle"),sidebar:ry,topBarRight:e,activeId:n1,children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(V,{children:(0,t.jsx)(b.jb,{data:K,activeMemberId:n1,onSelectMember:n6,t:r,locale:i})}),(0,t.jsxs)(G,{children:[(0,t.jsx)(X,{children:(0,t.jsx)("div",{role:"tablist","aria-label":r("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:r("finance.tab.overview"),expenses:r("finance.tab.expenses"),insights:r("finance.tab.insights")},i={overview:0,expenses:tU.length,insights:tA.length}[e];return(0,t.jsxs)(ee,{type:"button",role:"tab","aria-selected":nX===e,active:nX===e,onClick:()=>nQ(e),children:[n[e],i>0&&(0,t.jsxs)(en,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(d.ms,{align:"right",trigger:(0,t.jsx)(d.$n,{variant:ib>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(d.In,{name:"filter",size:13,"aria-hidden":!0}),children:ib>0?r("finance.filters.activeCount",{n:ib}):r("finance.actions.filters")}),children:[(0,t.jsx)(d.o_,{children:r("finance.filters.member")}),["shared",...K.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?r("finance.hero.family"):K.familyMembers.find(n=>n.id===e)?.name??e,i=e===n1;return(0,t.jsx)(d.tJ,{onClick:()=>n6(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(d.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.o_,{children:r("finance.filters.category")}),(0,t.jsx)(d.tJ,{onClick:()=>ie([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===n9.length&&(0,t.jsx)(d.In,{name:"check",size:12}),n9.length>0&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.allCategories")]})}),p.DEFAULT_CATEGORIES.map(e=>{let n=n9.includes(e.id);return(0,t.jsx)(d.tJ,{onClick:()=>ie(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(d.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,p.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.tJ,{onClick:()=>it(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[ii&&(0,t.jsx)(d.In,{name:"check",size:12}),!ii&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.reimbursableOnly")]})}),ib>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.tJ,{onClick:()=>{ie([]),it(!1)},children:r("finance.filters.reset")})]})]}),(0,t.jsx)(d.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(d.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>ia(!0),children:r("finance.actions.categories")}),"expenses"===nX&&(0,t.jsx)(W.g,{count:i$,onClick:()=>iw(e=>!e),label:r("finance.search.openSearch")}),"expenses"===nX&&(0,t.jsx)(d.$n,{variant:iT.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iT.selectMode?iT.exitSelectMode():iT.enterSelectMode()},children:r("finance.bulk.select")}),"overview"===nX&&(0,t.jsx)(d.K0,{onClick:()=>{n7(!0),requestAnimationFrame(()=>{window.print()})},title:r("finance.report.button"),"aria-label":r("finance.report.button"),children:(0,t.jsx)(d.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(d.K0,{onClick:()=>n8(!0),title:r("finance.actions.settings"),"aria-label":r("finance.actions.settings"),active:n3,children:(0,t.jsx)(d.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(J,{children:(0,t.jsx)(d.K0,{onClick:()=>iD(e=>!e),title:r("finance.shortcuts.title"),"aria-label":r("finance.shortcuts.title"),active:iR,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(et,{"aria-label":r("finance.range.label"),children:rx.map(({value:e,label:n})=>(0,t.jsx)(ei,{type:"button",active:iS===e,onClick:()=>{iF(e),"month"===e&&n4(tT)},"aria-pressed":iS===e,children:n},e))}),"expenses"===nX&&(0,t.jsx)(W.P,{open:iy,query:ij,onQueryChange:iv,savedViews:K.savedViews??[],onSaveView:ik,onDeleteView:iM,onClose:()=>iw(!1),members:K.familyMembers,categories:[...p.DEFAULT_CATEGORIES,...K.categories??[]],locale:i,recentTags:K.recentTags}),"month"===iS&&K.expenses.length>0&&(0,t.jsx)(k.f,{data:K,selectedMonth:n0,onSelectMonth:n4,locale:i,t:r}),(0,t.jsxs)(eb,{children:["overview"===nX&&(0,t.jsxs)(ey,{children:[(0,t.jsxs)(eo,{ref:iz,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:r("finance.quickAdd.title")}),(0,t.jsxs)(nm,{visible:iZ&&!i6.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",r("finance.quickAdd.added")]}),i6.listening&&(0,t.jsxs)(ng,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nf,{}),r("finance.voice.listening")]}),(0,t.jsxs)(d.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tc(!0),children:["+ ",r("finance.quickAdd.addIncome")]}),(0,t.jsxs)(d.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tp(!0),children:["⚖ ",r("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:rt,"aria-label":r("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(ns,{children:[{id:"shared",name:r("finance.member.shared"),role:"shared",color:void 0},...K.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(K.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(nl,{type:"button",active:iU===e.id,color:i,onClick:()=>iq(e.id),children:[(0,t.jsx)(d.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(nc,{children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(nd,{ref:iC,type:"text",placeholder:iA?r("finance.quickAdd.amountOnlyPlaceholder"):r("finance.quickAdd.placeholder"),value:iE,onChange:e=>{iL(e.target.value),iW(""),i7(eG.length>0),te(-1)},onFocus:()=>{eG.length>0&&!iE.trim()&&i7(!0)},onBlur:()=>{setTimeout(()=>i7(!1),150)},onKeyDown:e=>{if(i5&&0!==eG.length)if("ArrowDown"===e.key)e.preventDefault(),te(e=>Math.min(e+1,eG.length-1));else if("ArrowUp"===e.key)e.preventDefault(),te(e=>Math.max(e-1,-1));else if("Enter"===e.key&&i9>=0){e.preventDefault();let n=eG[i9];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iE);iL(e?iE.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iW(""),i7(!1),te(-1)}}else"Escape"===e.key&&(i7(!1),te(-1))},"aria-label":r("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":i5&&eG.length>0,autoComplete:"off",inputMode:"decimal"}),i5&&eG.length>0&&(0,t.jsxs)(nT,{ref:tn,role:"listbox","aria-label":r("finance.merchant.recent"),children:[(0,t.jsx)(nC,{role:"presentation",children:r("finance.merchant.recent")}),eG.map((e,n)=>(0,t.jsxs)(nS,{role:"option","aria-selected":i9===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iE);iL(i?iE.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iW(""),i7(!1),te(-1),iC.current?.focus()},children:[(0,t.jsx)(nF,{children:e.merchant}),(0,t.jsxs)(nz,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(es,{type:"button","aria-pressed":iA,"aria-label":iA?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iA;iB(e),e&&requestAnimationFrame(()=>iN.current?.focus())},children:[(0,t.jsx)(d.In,{name:iA?"close":"plus",size:11}),iA?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(np,{value:iY||t7,onChange:e=>{let n=e.target.value,i=iY||t7;iW(n);let t=iA&&iO.trim()?iO.trim():(0,p.parseQuickInput)(iE,K.familyMembers)?.description;t&&iK((0,p.proposeRuleFromOverride)(i,n,t))},"aria-label":r("finance.quickAdd.category"),children:p.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,p.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(np,{value:iX,onChange:e=>{iQ(e.target.value),i4(!1)},"aria-label":r("finance.currency.label"),style:{maxWidth:72},children:p.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iE.trim()||i1,children:i1?r("finance.currency.converting"):r("finance.quickAdd.add")}),i6.supported&&(0,t.jsx)(nk,{type:"button","aria-label":r("finance.voice.listening"),"aria-pressed":i6.listening,active:i6.listening,onPointerDown:()=>{i3.current=window.setTimeout(()=>{i3.current=null,i8.current=!0,(0,u.K)(30),i6.listening?i6.stop():i6.start(rr)},500)},onPointerUp:()=>{null!==i3.current&&(clearTimeout(i3.current),i3.current=null,i8.current||((0,u.K)(10),i6.listening?i6.stop():i6.start(rr))),i8.current=!1},onPointerCancel:()=>{null!==i3.current&&(clearTimeout(i3.current),i3.current=null),i8.current=!1},children:(0,t.jsx)(d.In,{name:"mic",size:16})})]}),(0,t.jsx)(el,{visible:iA,children:(0,t.jsx)(ec,{ref:iN,type:"text",placeholder:r("finance.quickAdd.descPlaceholder"),maxLength:80,value:iO,onChange:e=>iP(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iB(!1),iC.current?.focus())},"aria-label":r("finance.quickAdd.descPlaceholder"),tabIndex:iA?0:-1})}),(0,t.jsx)($.J,{expenses:K.expenses,storedOrder:tr,lockedCategoryId:ti,onToggle:e=>tt(n=>n===e?"":e),locale:i,groupLabel:r("finance.quickAdd.frequentCategories")}),iH&&(0,t.jsxs)(nh,{children:[(0,t.jsxs)("span",{children:[r("finance.categoryRules.alwaysCategorize",{match:iH.match})," ",(0,t.jsx)("strong",{children:(n=p.DEFAULT_CATEGORIES.find(e=>e.id===iH.categoryId))?(0,p.categoryLabel)(n,i):iH.categoryId}),"?"]}),(0,t.jsx)(nb,{type:"button",accent:!0,onClick:()=>{K&&iH&&(nx({...K,categoryRules:[iH,...K.categoryRules??[]]},"finance.undo.label.added"),iK(null))},children:r("finance.categoryRules.propose")}),(0,t.jsx)(nb,{type:"button",onClick:()=>iK(null),children:r("finance.categoryRules.dismiss")})]}),i0&&(0,t.jsx)(nu,{style:{color:H},role:"alert",children:r("finance.currency.fxFailed")}),re&&(0,p.parseQuickInput)(iE,K.familyMembers)&&(0,t.jsxs)(ny,{type:"button",onClick:rn,"aria-label":r("finance.recurring.makeRecurring"),children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsx)(nu,{children:r("finance.quickAdd.hint")})]})]}),(0,t.jsx)(d.dO,{items:tI.map(e=>({...e})),onReorder:tD,onCycleSize:tE,accentColor:()=>q,labels:{moveLeft:r("finance.overview.panel.moveLeft"),moveRight:r("finance.overview.panel.moveRight"),cycleSize:r("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(ek,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eM,{children:[(0,t.jsxs)(eT,{children:[r("finance.hero.spentIn")," ",rb," \xb7 ",t_]}),(0,t.jsxs)(eS,{children:[(0,t.jsx)(eF,{children:"€"}),(0,t.jsx)(ez,{children:rg}),(0,t.jsx)(eC,{children:rf})]}),(0,t.jsxs)(eI,{children:[(0,t.jsx)(x.Ru,{value:tZ,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[r("finance.hero.vsPrevious")," ",(0,p.formatMonthLabel)(tH,i)," \xb7 €",il(tK)]})]}),tJ.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:tJ,accent:tV,width:280,height:34})}),null!==rh&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:rh.onTrack===rh.total?"#7fb77e":c.w4.colors.mainTextMuted},children:r("finance.goals.hero",{on:rh.onTrack,total:rh.total})})]}),(0,t.jsx)(eR,{children:(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eL,{children:r("finance.budget.weekly")}),(0,t.jsxs)(eA,{children:["€",il(tL.spent)," ",(0,t.jsxs)(eB,{children:["/ €",tL.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:t8,over:t8>100?t8-100:0}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)("span",{children:[Math.round(t8),"% ",r("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tL.remaining<0?H:q},children:tL.remaining>0?`€${il(tL.remaining)} ${r("finance.budget.remaining")}`:`€${il(Math.abs(tL.remaining))} ${r("finance.budget.over")}`})]}),(0,t.jsxs)(eE,{style:{marginTop:14},children:[(0,t.jsx)(eL,{children:r("finance.budget.monthly")}),(0,t.jsxs)(eA,{children:["€",il(tq)," ",(0,t.jsxs)(eB,{children:["/ €",K.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:t5,over:t5>100?t5-100:0}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)("span",{children:[Math.round(t5),"% ",r("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[r("finance.budget.projected")," €",il(tq+(tL.projectedTotal-tL.spent))]})]})]})})]});case"overview-accounts":return(0,t.jsx)(U.V,{data:K,t:r,onSave:e=>{nx(e,"finance.undo.label.edited")}});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:r("finance.charts.sixMonths")}),(0,t.jsx)(e$,{children:(0,t.jsx)(n_,{children:p.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nV,{children:[(0,t.jsx)(nJ,{color:e.color}),(0,p.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:tG,budget:K.budget.monthlyBudget,height:200}),(0,t.jsxs)(nI,{children:[(0,t.jsxs)(nR,{children:[(0,t.jsx)(d.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nD,{children:["€",il(rv)]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(d.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nD,{children:["€",il(r$)]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(d.YZ,{children:r("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nD,{children:[rk," / ",tG.length]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(d.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nD,{style:{color:tZ>0?H:q},children:[tZ>0?"+":"",tZ,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:r("finance.charts.byCategory")}),(0,t.jsx)(nH,{type:"button",onClick:()=>nQ("insights"),children:r("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:rw,total:rj,size:110,centerLabel:rb.slice(0,3),centerValue:`€${il(rj)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rw.map(e=>{let n=ip(e.id),r=(0,p.expensesForMember)((0,p.expensesForMonth)(K.expenses,tH),n1).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:e.color}),(0,t.jsx)(eY,{children:(0,p.categoryLabel)(n,i)}),(0,t.jsxs)(eW,{children:["€",il(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(x.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ev,{children:r("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.forecast.sub",{n:t$})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(ei,{type:"button",active:t$===e,onClick:()=>tM(e),"aria-pressed":t$===e,children:r(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(R.b,{forecast:tQ,firstNegDate:t0,t:r,locale:i,height:170}),tX.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:c.w4.spacing.md,paddingTop:c.w4.spacing.sm,borderTop:`1px solid ${c.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:c.w4.colors.mainTextMuted},children:r("finance.charts.cashflow")})}),(0,t.jsx)(x.uj,{data:tX,height:130,legendIn:r("finance.charts.in"),legendOut:r("finance.charts.out"),legendGoal:r("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ej,{children:(0,t.jsx)(ev,{children:r("finance.charts.heatmap")})}),(0,t.jsx)(x.RT,{data:t4,locale:i}),(0,t.jsxs)(nE,{children:[(0,t.jsx)("span",{children:r("finance.charts.less")}),(0,t.jsx)(nL,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:r("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ed,{children:(0,t.jsx)(d.YZ,{children:r("finance.heatmap.title")})}),(0,t.jsx)(y.D,{matrix:t1,locale:i,t:r})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ej,{children:(0,t.jsx)(ev,{children:r("finance.charts.thisWeek")})}),(0,t.jsxs)(nA,{children:[(0,t.jsxs)(nB,{children:[(0,t.jsxs)(nO,{children:["€",il(tL.spent)]}),(0,t.jsxs)(eB,{children:["/ €",tL.budget]})]}),(0,t.jsx)(x.kl,{spent:tL.spent,budget:tL.budget}),(0,t.jsxs)(nP,{children:[(0,t.jsx)("span",{children:r("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:r("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(d.YZ,{children:r("finance.recent.title")}),tU.length>8&&(0,t.jsx)(nH,{type:"button",onClick:()=>nQ("expenses"),children:r("finance.recent.viewAll",{n:tU.length})})]}),0===tU.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:r("finance.dashboard.noRecent")}):(0,t.jsx)(eX,{"aria-label":r("finance.recent.title"),children:tU.slice(0,8).map(e=>(0,t.jsx)(ig,{exp:e,finData:K,locale:i,t:r,onDelete:ra,onClone:ro,onToggleReimbursed:rl,compact:"compact"===tj},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.incomeMix.title")}),0===t6.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,padding:`${c.w4.spacing.md} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:t6,total:t3,size:100,centerLabel:r("finance.byMember.income"),centerValue:`€${il(t3)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:t6.map(e=>(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:e.color}),(0,t.jsx)(eY,{children:e.label}),(0,t.jsxs)(eW,{style:{color:q},children:["€",il(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n1?t2:t2.filter(e=>e.key===n1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.byMember.title")}),t2.length<=1&&0===K.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:q},{id:"expense",value:e.expense,color:H}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:c.w4.spacing.sm},children:[(0,t.jsx)(d.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamily,color:c.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?q:H},children:[n.net>=0?"+":"","€",il(Math.abs(n.net))]}),(0,t.jsx)(x.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(x.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:c.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(d.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(d.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",il(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:q,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:H},children:["€",il(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:H,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.borderSubtle??c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nX&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nK,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(d.YZ,{children:r("finance.tx.title")}),"month"===iS&&0===K.expenses.length&&(0,t.jsx)(nq,{ref:iI,value:n0,onChange:e=>n4(e.target.value),"aria-label":r("finance.insights.month"),children:tN.map(e=>(0,t.jsx)("option",{value:e,children:(0,p.formatMonthLabel)(e,i)},e))})]}),0===tU.length&&0===tW.length?(0,t.jsx)(ew,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:i$>0?r("finance.search.noResults"):r("finance.tx.empty")})}):(0,t.jsx)(ew,{span:12,children:(0,t.jsx)(eX,{"aria-label":r("finance.tx.title"),children:[...tU.map(e=>({...e,_kind:"expense"})),...tW.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ig,{exp:e,finData:K,locale:i,t:r,onDelete:ra,onClone:ro,onToggleReimbursed:rl,compact:"compact"===tj,selectMode:iT.selectMode,selected:iT.selectedIds.has(e.id),onToggleSelect:iT.toggleId,longPressHandlers:iT.longPressHandlers,onEnterSelectMode:iT.enterSelectMode},e.id):(0,t.jsxs)(eQ,{compact:"compact"===tj,children:["compact"===tj?(0,t.jsx)(e0,{color:q,"aria-hidden":!0}):(0,t.jsx)(e4,{color:q,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:e.source}),"compact"!==tj&&(0,t.jsxs)(e6,{children:[id(e.date,i)," \xb7 ",r("finance.dashboard.income")]})]}),(0,t.jsxs)(e3,{children:[(0,t.jsxs)(e8,{style:{color:q},children:["+€",is(e.amount)]}),(0,t.jsx)(ni,{className:"delete-btn",type:"button",onClick:()=>rs(e.id),"aria-label":`${r("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nX&&(0,t.jsxs)(eh,{children:[(0,t.jsxs)(nK,{style:{marginBottom:0},children:[(0,t.jsx)(d.YZ,{children:r("finance.insights.title")}),"month"===iS&&0===K.expenses.length&&(0,t.jsx)(nq,{value:n0,onChange:e=>n4(e.target.value),"aria-label":r("finance.insights.month"),children:tN.map(e=>(0,t.jsx)("option",{value:e,children:(0,p.formatMonthLabel)(e,i)},e))})]}),null!==rM&&(0,t.jsxs)(em,{children:[(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:r("finance.kpi.biggestExpense")}),(0,t.jsxs)(eg,{children:["€",rM.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ef,{children:rM.biggest.description?`${rM.biggest.description} \xb7 ${(0,p.categoryLabel)(ip(rM.biggest.categoryId),i)}`:(0,p.categoryLabel)(ip(rM.biggest.categoryId),i)})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:r("finance.kpi.topSpender")}),(0,t.jsxs)(eg,{children:["€",rM.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ef,{children:rM.topMemberLabel})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:r("finance.kpi.busiestDay")}),(0,t.jsxs)(eg,{children:["€",rM.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ef,{children:r(`finance.weekday.${rM.busiestDowKey}`)})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:r("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(eg,{children:["€",rM.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ef,{children:0===rM.reimbursableTotal?"—":r("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(d.dO,{items:tS.map(e=>({...e})),onReorder:tz,onCycleSize:tC,accentColor:()=>q,labels:{moveLeft:r("finance.insights.panel.moveLeft"),moveRight:r("finance.insights.panel.moveRight"),cycleSize:r("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:tG,budget:K.budget.monthlyBudget,height:180}),(0,t.jsxs)(nI,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(nR,{children:[(0,t.jsx)(d.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nD,{children:["€",il(rv)]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(d.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nD,{children:["€",il(r$)]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(d.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nD,{style:{color:tZ>0?H:q},children:[tZ>0?"+":"",tZ,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.byCategory")}),0===rw.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${c.w4.spacing.lg} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:rw,total:rj,size:110,centerLabel:rb.slice(0,3),centerValue:`€${il(rj)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rw.map(e=>{let n=ip(e.id),r=e.color||c.w4.colors.mainTextMuted,a=(0,p.expensesForMember)((0,p.expensesForMonth)(K.expenses,tH),n1).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:r}),(0,t.jsx)(eY,{children:(0,p.categoryLabel)(n,i)}),(0,t.jsxs)(eW,{children:["€",il(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.title")}),0===tA.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tA.map((e,n)=>(0,t.jsxs)(nt,{itype:e.type,children:[(0,t.jsx)(nr,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:r(e.messageKey,tP(e.params))}),e.memberId&&(()=>{let n=K.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=K.familyMembers.indexOf(n);return(0,t.jsxs)(na,{children:[(0,t.jsx)(d.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.anomalies")}),0===tB.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tB.map(e=>(0,t.jsxs)(nt,{itype:e.type,children:[(0,t.jsx)(nr,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:r(e.messageKey,tP(e.params))})}),e.snoozeKey&&(0,t.jsx)(no,{type:"button",title:r("finance.insights.anomalies.dismiss"),"aria-label":r("finance.insights.anomalies.dismiss"),onClick:()=>{tO(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.smallMultiples.title")}),(0,t.jsx)(A.R,{expenses:K.expenses,familyMembers:K.familyMembers,getMemberColor:b.a8,t:r,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.reimbursables.tracker.title")}),(0,t.jsx)(L.p,{expenses:K.expenses,familyMembers:K.familyMembers,getMemberColor:b.a8,t:r,locale:i})]});case"analytics-budgets":return(0,t.jsx)(D.z,{});case"analytics-bills":return(0,t.jsx)(z.J,{});case"analytics-subscriptions":return(0,t.jsx)(S.n,{});case"analytics-goals":return(0,t.jsx)(F.f,{});case"analytics-recurring":return(0,t.jsx)(C.b,{});case"analytics-rules":return(0,t.jsx)(E.K,{});case"analytics-networth":return(0,t.jsx)(I.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.byMember.title")}),0===t2.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:c.w4.spacing.sm},children:t2.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(d.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(d.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",il(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:q,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:H},children:["€",il(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:H,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nZ,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),to&&(0,t.jsx)(ix,{finData:K,activeMemberId:n1,locale:i,t:r,onClose:()=>ts(!1),onSubmit:tx}),tl&&(0,t.jsx)(iu,{finData:K,locale:i,t:r,onClose:()=>tc(!1),onSubmit:tu}),td&&(0,t.jsx)(im,{finData:K,t:r,onClose:()=>tp(!1),onSubmit:tm}),(0,t.jsx)(w.S,{labelKey:ne,onUndo:()=>{nG()},onDismiss:()=>nn(null),t:r}),iT.selectMode&&"expenses"===nX&&(0,t.jsx)(M.S,{selectionCount:iT.selectedIds.size,visibleIds:tU.map(e=>e.id),selectedIds:iT.selectedIds,categories:p.DEFAULT_CATEGORIES,locale:i,t:r,onCancel:iT.exitSelectMode,onSelectAll:()=>iT.selectAll(tU.map(e=>e.id)),onCategorise:rp,onDelete:rd,onMarkReimbursed:rm}),iR&&(0,t.jsx)(j.m,{t:r,onClose:()=>iD(!1)}),(0,t.jsx)(P.X,{open:n3,onClose:()=>n8(!1),ariaLabel:r("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(er,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(d.YZ,{children:r("finance.settings.title")}),(0,t.jsx)(d.K0,{onClick:()=>n8(!1),title:r("finance.actions.settings"),children:(0,t.jsx)(d.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"drawer-weekly-budget",children:r("finance.settings.weeklyBudget")}),(0,t.jsx)(nW,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(K.budget.weeklyBudget),value:tg,onChange:e=>tf(e.target.value)})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{htmlFor:"drawer-monthly-budget",children:r("finance.settings.monthlyBudget")}),(0,t.jsx)(nW,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(K.budget.monthlyBudget),value:th,onChange:e=>tb(e.target.value)})]}),(0,t.jsx)(d.$n,{variant:"primary",onClick:()=>{rc(),n8(!1)},style:{height:44},children:ty?r("finance.settings.saved"):r("finance.settings.save")})]}),(0,t.jsx)(N.u,{data:K,getMemberColor:b.a8,t:r,onSaveMember:(e,n)=>{let i=K.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);nx({...K,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(P.X,{open:ir,onClose:()=>{ia(!1),ih(null)},ariaLabel:r("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(er,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(d.YZ,{children:r("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!io&&(0,t.jsx)(d.$n,{variant:"ghost",style:{height:28},onClick:()=>ih({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:r("finance.categories.new")}),(0,t.jsx)(d.K0,{onClick:()=>{ia(!1),ih(null)},title:r("finance.categories.cancel"),children:(0,t.jsx)(d.In,{name:"close",size:16})})]})]}),io&&(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.md,display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{children:r("finance.categories.labelEn")}),(0,t.jsx)(nU,{value:io.labelEn,onChange:e=>ih(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{children:r("finance.categories.labelPt")}),(0,t.jsx)(nU,{value:io.labelPt,onChange:e=>ih(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{children:r("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:io.icon,onChange:e=>ih(n=>n&&{...n,icon:e.target.value}),style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:d.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)(nY,{children:r("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:io.color,onChange:e=>ih(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nU,{value:io.color,onChange:e=>ih(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(d.$n,{variant:"ghost",style:{height:28},onClick:()=>ih(null),children:r("finance.categories.cancel")}),(0,t.jsx)(d.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!io.labelEn||!io.labelPt)return;let e={id:(0,f.z)(),labelEn:io.labelEn,labelPt:io.labelPt,icon:io.icon,color:io.color,isCustom:!0},n=K.categories??[];nx({...K,categories:[...n,e]},"finance.undo.label.added"),ih(null)},children:r("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[p.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.n6)(e.icon)?(0,t.jsx)(d.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,p.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:r("finance.categories.builtIn")})]},e.id)),(K.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.n6)(e.icon)?(0,t.jsx)(d.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,p.categoryLabel)(e,i)}),(0,t.jsx)(d.K0,{title:r("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(K.categories??[]).filter(n=>n.id!==e.id);nx({...K,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(d.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(P.X,{open:null!==iJ,onClose:()=>iG(null),ariaLabel:r("finance.recurring.makeRecurring"),maxWidth:360,children:iJ&&(0,t.jsxs)(nw,{children:[(0,t.jsxs)(d.YZ,{children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nj,{children:r("finance.recurring.frequency")}),(0,t.jsx)(nv,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(n$,{type:"button",active:iJ.cadence===e,onClick:()=>iG(n=>n?{...n,cadence:e}:null),children:r(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nj,{children:r("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iJ.firstDue,onChange:e=>iG(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(d.$n,{variant:"ghost",onClick:()=>iG(null),children:r("finance.recurring.cancel")}),(0,t.jsx)(d.$n,{variant:"primary",onClick:ri,disabled:!iJ.firstDue,children:r("finance.recurring.confirm")})]})]})}),n5&&(0,t.jsx)(B.h,{data:K,month:n0,locale:i,t:r,getMemberColor:b.a8})]})},{}))}}]);