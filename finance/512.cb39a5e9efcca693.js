"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),a=i(8997),r=i(7991),o=i(6859),s=i.n(o),l=i(2799),c=i(6063),d=i(3236),p=i(3019),m=i(3759),u=i(789),x=i(9454),f=i(8170),g=i(4041),h=i(948),b=i(719),y=i(2405),w=i(9546),j=i(5854),v=i(3616),$=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),F=i(8635),z=i(8501),C=i(1789),I=i(216),R=i(9419),D=i(341),E=i(9378),A=i(1423),L=i(1255),B=i(3451),O=i(545),P=i(2167),N=i(7637),W=i(6891),Y=i(1331),U=i(2139);let q="#7fb77e",H="#f85149",K=(0,l.keyframes)`
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
`;let ea=s().div`
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
`,er=s().div`
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
`,ef=s().div`
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
`,eA=s().span`
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
`,eW=s().span`
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
`,na=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?H:"warning"===e?"#facc15":"success"===e?q:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,nr=s().div`
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
`,nx=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nf=(0,l.keyframes)`
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
`,nh=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${q};
  animation: ${nf} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nb=s().div`
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
`,ny=s().button`
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
`,nw=s().button`
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
`,nj=s().div`
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
`,nv=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,n$=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,nk=s().button`
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
`,nM=s().button`
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
`,nT=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nS=s().ul`
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
`,nF=s().li`
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
`,nz=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nC=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nI=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nR=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,nD=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nE=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nA=s().div`
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
`,nB=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,nO=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nP=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nN=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${q}; }
`,nW=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nY=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,nU=s().input`
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
`,nq=s().input`
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
`;let nK=s().button`
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
`,nZ=s().div`
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
`;let n_=s().footer`
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
`,nV=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nJ=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nG=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nX=s().div`
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
`,nQ=s().div`
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,n0=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,n4=s().button`
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
`,n1=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n2=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n6=s().button`
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
`,n3=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,n8=s().button`
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
`,n5=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n7=s().input`
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
`,n9=s().select`
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
`,ie=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,ii=s().input`
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
`,it=s().div`
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
`,ia=s().ul`
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
`,io=s().div`
  position: relative;
`,is=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function il(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function ic(e){return Math.round(e).toLocaleString("pt-PT")}function id(){return new Date().toISOString().slice(0,10)}function ip(e,n){let[i,t,a]=e.split("-").map(Number);return new Date(i,t-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function im(e){return p.DEFAULT_CATEGORIES.find(n=>n.id===e)??p.DEFAULT_CATEGORIES[p.DEFAULT_CATEGORIES.length-1]}function iu({finData:e,t:n,onClose:i,onSubmit:a}){let o=(0,p.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[l,m]=(0,r.useState)(""),u=parseFloat(l.replace(",",".")),x=l.trim().length>0&&!Number.isNaN(u),f=x?u-o:0;return(0,t.jsx)(P.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nQ,{children:[(0,t.jsxs)(n0,{children:[(0,t.jsx)(d.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(n4,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&a(u)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:c.w4.spacing.sm,background:c.w4.colors.sidebarHover,borderRadius:c.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",il(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:c.w4.colors.mainTextMuted},children:["€",il(s)]})]})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n7,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:l,onChange:e=>m(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==f&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:f>0?q:H,marginTop:6},children:f>0?n("finance.balance.deltaUp",{n:il(f)}):n("finance.balance.deltaDown",{n:il(-f)})}),x&&0===f&&(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function ix({finData:e,locale:n,t:i,onClose:a,onSubmit:o}){let[s,l]=(0,r.useState)(""),[p,m]=(0,r.useState)(id()),[u,x]=(0,r.useState)(""),[f,h]=(0,r.useState)(""),[y,w]=(0,r.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(P.X,{open:!0,onClose:a,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nQ,{children:[(0,t.jsxs)(n0,{children:[(0,t.jsx)(d.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(n4,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,g.z)(),amount:j,date:p,source:u.trim(),createdAt:Date.now(),...f?{goalId:f}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n1,{children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n7,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>l(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n7,{id:"inc-date",type:"date",value:p,onChange:e=>m(e.target.value)})]})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n7,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(d.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(d.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n);return(0,t.jsxs)(d.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n9,{id:"inc-goal",value:f,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:a,children:i("finance.income.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function ig({finData:e,activeMemberId:n,locale:i,t:a,onClose:o,onSubmit:s}){let[l,m]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,h]=(0,r.useState)("other"),[y,w]=(0,r.useState)(id()),[j,v]=(0,r.useState)("single"),[$,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,r.useState)([]),[z,C]=(0,r.useState)(""),[I,R]=(0,r.useState)(!1),D=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&h((0,p.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(l.replace(",","."))||0,A=M.length,L="split"===j&&A>0?E/A:E,B=E>0&&!!y&&("single"===j||"split"===j&&A>0),O=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),R(!1))},N=(0,r.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),W=[{id:"shared",name:a("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(P.X,{open:!0,onClose:o,ariaLabel:a("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nX,{children:[(0,t.jsxs)(n0,{children:[(0,t.jsxs)(d.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(n4,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),a=Date.now(),r={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(r[e]=f)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:E,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===$?void 0:$,createdAt:a,...o}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,r)=>({id:(0,g.z)(),amount:0===r?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${A})`:f,type:"daily",childId:i,createdAt:a+r,...o}))}s(i,r,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n1,{children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,t.jsx)(n7,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,t.jsx)(n7,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,t.jsx)(n7,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(n9,{id:"exp-cat",value:f,onChange:e=>h(e.target.value),children:p.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,p.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:a("finance.tags.label")}),(0,t.jsxs)(io,{children:[(0,t.jsxs)(it,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(d.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":a("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(ii,{ref:D,type:"text",value:z,placeholder:0===S.length?a("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),R(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),O(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&R(!1)},onBlur:()=>{z.trim()&&O(z),setTimeout(()=>R(!1),150)},onFocus:()=>R(!0),"aria-label":a("finance.tags.label")})]}),I&&N.length>0&&(0,t.jsx)(ia,{children:N.map(e=>(0,t.jsxs)(ir,{onMouseDown:n=>{n.preventDefault(),O(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:a("finance.modal.assign")}),(0,t.jsxs)(n2,{role:"tablist",children:[(0,t.jsx)(n6,{type:"button",active:"single"===j,onClick:()=>v("single"),children:a("finance.modal.member")}),(0,t.jsx)(n6,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n3,{style:{marginTop:c.w4.spacing.sm},children:W.map(e=>(0,t.jsxs)(n8,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n3,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),a=M.includes(e.id);return(0,t.jsxs)(n8,{type:"button",active:a,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(n5,{style:{marginTop:c.w4.spacing.xs},children:a("finance.modal.splitEach",{n:A,amount:il(L)})})]})]}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:o,children:a("finance.member.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!B,children:a("finance.quickAdd.add")})]})]})]})})}function ih({exp:e,finData:n,locale:i,t:a,onDelete:r,onClone:o,onToggleReimbursed:s,compact:l=!1,selectMode:m=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:f}){let g=im(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),y=h>=0?n.familyMembers[h]:null,w=y?(0,b.a8)(y,h):c.w4.colors.mainTextMuted,j=e.split&&e.split.length>0?e.split.slice(0,4).map(e=>{let i=n.familyMembers.findIndex(n=>n.id===e.memberId),t=i>=0?n.familyMembers[i]:null;return t?{id:t.id,name:t.name,role:t.role,color:(0,b.a8)(t,i)}:{id:e.memberId,name:e.memberId.slice(0,2).toUpperCase(),role:"adult",color:c.w4.colors.mainTextMuted}}):null,v=e.split&&e.split.length>4?e.split.length-4:0,$=f?f(e.id):null,k=n=>{m&&x&&"INPUT"!==n.target.tagName&&x(e.id)},M=e.isReimbursable&&!m?s?(0,t.jsx)(ne,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e9,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,T=!m&&o?(0,t.jsx)(nn,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${a("finance.tx.clone")} — ${e.description}`,title:a("finance.tx.clone"),children:"↻"}):null,S=m?null:(0,t.jsx)(ni,{className:"delete-btn",type:"button",onClick:()=>r(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),F=m?(0,t.jsx)(eG,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,z=m?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return l?(0,t.jsxs)(eQ,{compact:!0,style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e0,{color:g.color,"aria-hidden":!0}),(0,t.jsx)(e1,{children:(0,t.jsxs)(e2,{style:{display:"flex",alignItems:"center",gap:6},children:[j?(0,t.jsxs)(e5,{size:16,children:[j.map(e=>(0,t.jsx)(d.eu,{member:e,size:16},e.id)),v>0&&(0,t.jsxs)(e7,{size:16,children:["+",v]})]}):y?(0,t.jsx)(d.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:13,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,p.categoryLabel)(g,i)})]})}),(0,t.jsxs)(e3,{children:[M,(0,t.jsxs)(e8,{children:["−€",il(e.amount)]}),T,S]})]}):(0,t.jsxs)(eQ,{style:z,onClick:k,...$??{},children:[F,(0,t.jsx)(e4,{color:g.color,children:(0,d.n6)(g.icon)?(0,t.jsx)(d.In,{name:g.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:g.icon})}),(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:e.description||(0,p.categoryLabel)(g,i)}),(0,t.jsxs)(e6,{children:[j?(0,t.jsxs)(e5,{size:14,children:[j.map(e=>(0,t.jsx)(d.eu,{member:e,size:14},e.id)),v>0&&(0,t.jsxs)(e7,{size:14,children:["+",v]})]}):y?(0,t.jsx)(d.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:11,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,p.categoryLabel)(g,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:ip(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:a("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(is,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e3,{children:[M,"recurring"===e.type&&(0,t.jsx)(e9,{children:a("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e8,{children:["−€",il(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),T,S]})]})}let ib=document.getElementById("root");if(!ib)throw Error("Root element #root not found");(0,a.createRoot)(ib).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,f.Ym)(),a=(0,r.useMemo)(()=>(0,f.Nx)(i,h.A),[i]),{data:o,loaded:s,save:l}=(0,p.useFinance)(),K=o??{...p.EMPTY_FINANCE_DATA},[Z]=(0,p.useProfile)(),eG=(0,r.useMemo)(()=>(0,p.recentMerchants)(K.expenses,20).slice(0,6),[K.expenses]),{canUndo:e5,latestLabelKey:e7,undo:e9}=(0,p.useUndo)(),[ne,nn]=(0,r.useState)(null),nf=(0,r.useCallback)(async(e,n)=>{(0,p.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:K,labelKey:n,ts:Date.now()}),nn(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,u.K)(10),await l(e)},[K,l]),nX=(0,r.useCallback)(async()=>{let e=e9();e&&(nn("finance.undo.label.reverted"),await l(e),setTimeout(()=>nn(null),2500))},[e9,l]),[nQ,n0]=(0,r.useState)("overview"),[n4,n1]=(0,r.useState)(()=>(0,p.thisMonthKey)()),[n2,n6]=(0,r.useState)("shared");(0,r.useEffect)(()=>{(0,c.PL)(eK).then(e=>{e&&n6(e)})},[]);let n3=(0,r.useCallback)(e=>{n6(e),(0,c.Is)(eK,e)},[]),[n8,n5]=(0,r.useState)("1m");(0,r.useEffect)(()=>{(0,c.PL)("finance:timeline:range").then(e=>{("1m"===e||"3m"===e||"6m"===e||"1y"===e)&&n5(e)})},[]);let n7=(0,r.useCallback)(e=>{n5(e),(0,c.Is)("finance:timeline:range",e)},[]),[n9,ie]=(0,r.useState)(!1),[ii,it]=(0,r.useState)(!1),[ia,ir]=(0,r.useState)([]),[io,is]=(0,r.useState)(!1),[ib,iy]=(0,r.useState)(!1),[iw,ij]=(0,r.useState)(null),iv=+(ia.length>0)+ +!!io,[i$,ik]=(0,r.useState)(!1),[iM,iT]=(0,r.useState)({}),iS=(0,r.useMemo)(()=>{let e=0;return iM.text&&e++,iM.memberId&&e++,iM.categoryId&&e++,(iM.dateFrom||iM.dateTo)&&e++,(void 0!==iM.amountMin||void 0!==iM.amountMax)&&e++,iM.tags&&iM.tags.length>0&&e++,e},[iM]),iF=(0,r.useCallback)(e=>{let n=[...K.savedViews??[],e];l({...K,savedViews:n})},[K,l]),iz=(0,r.useCallback)(e=>{let n=(K.savedViews??[]).filter(n=>n.id!==e);l({...K,savedViews:n})},[K,l]),iC=(0,T.E)();(0,r.useEffect)(()=>{"expenses"!==nQ&&iC.selectMode&&iC.exitSelectMode()},[nQ]);let{range:iI,setRange:iR}=(0,m.H)("month"),iD=(0,r.useRef)(null),iE=(0,r.useRef)(null),iA=(0,r.useRef)(null),[iL,iB]=(0,r.useState)(!1),[iO,iP]=(0,r.useState)(""),[iN,iW]=(0,r.useState)(!1),[iY,iU]=(0,r.useState)(""),iq=(0,r.useRef)(null),[iH,iK]=(0,r.useState)(""),[iZ,i_]=(0,r.useState)("shared"),[iV,iJ]=(0,r.useState)(null),[iG,iX]=(0,r.useState)(!1),iQ=(0,r.useRef)(null),[i0,i4]=(0,r.useState)(null),[i1,i2]=(0,r.useState)("EUR"),[i6,i3]=(0,r.useState)(!1),[i8,i5]=(0,r.useState)(!1),i7=(0,O.x)(),i9=(0,r.useRef)(null),te=(0,r.useRef)(!1),[tn,ti]=(0,r.useState)(!1),[tt,ta]=(0,r.useState)(-1),tr=(0,r.useRef)(null),[to,ts]=(0,r.useState)(""),[tl,tc]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,c.PL)(eq).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&tc(n)}catch{}})},[]);let[td,tp]=(0,r.useState)(!1),[tm,tu]=(0,r.useState)(!1),[tx,tf]=(0,r.useState)(!1),tg=(0,r.useCallback)(e=>{let n=e-(0,p.computeCurrentBalance)(K);if(0===n)return void tf(!1);let i=(K.budget.openingBalance??0)+n,t=K.accounts??[],a=K.defaultAccountId??t[0]?.id,r=a?t.map(e=>e.id===a?{...e,openingBalance:e.openingBalance+n}:e):t;nf({...K,budget:{...K.budget,openingBalance:i},accounts:r},"finance.undo.label.edited"),tf(!1)},[K,nf]),th=(0,r.useCallback)(e=>{nf({...K,income:[e,...K.income]},"finance.undo.label.added"),tu(!1),iQ.current&&clearTimeout(iQ.current),iX(!0),iQ.current=setTimeout(()=>iX(!1),2e3)},[K,nf]),tb=(0,r.useCallback)((e,n,i,t)=>{let a=i?[i,...K.recentDescriptions].filter(Boolean).slice(0,20):K.recentDescriptions,r={...K,expenses:[...e,...K.expenses],categoryHints:n,recentDescriptions:a};for(let e of t)r=(0,p.addRecentTag)(r,e);nf(r,"finance.undo.label.added"),tp(!1),iQ.current&&clearTimeout(iQ.current),iX(!0),iQ.current=setTimeout(()=>iX(!1),2e3)},[K,nf]),[ty,tw]=(0,r.useState)(""),[tj,tv]=(0,r.useState)(""),[t$,tk]=(0,r.useState)(!1),[tM,tT]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,c.PL)(eU).then(e=>{("compact"===e||"comfortable"===e)&&tT(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===tM?"compact":"comfortable";tT(e),(0,c.Is)(eU,e)},[tM]);let[tS,tF]=(0,r.useState)(3);(0,r.useEffect)(()=>{(0,c.PL)(eH).then(e=>{"6"===e?tF(6):"12"===e&&tF(12)})},[]);let tz=(0,r.useCallback)(e=>{tF(e),(0,c.Is)(eH,String(e))},[]),tC=(0,r.useMemo)(()=>(0,p.thisMonthKey)(),[]),[tI,tR]=(0,r.useState)(eV);(0,r.useEffect)(()=>{(0,c.PL)(eZ).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eV.filter(e=>!i.has(e.id))];tR(t)}catch{}})},[]);let tD=(0,r.useCallback)((e,n)=>{tR(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,c.Is)(eZ,JSON.stringify(r)),r})},[]),tE=(0,r.useCallback)(e=>{tR(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,c.Is)(eZ,JSON.stringify(r)),r})},[]),[tA,tL]=(0,r.useState)(eJ);(0,r.useEffect)(()=>{(0,c.PL)(e_).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eJ.filter(e=>!i.has(e.id))];tL(t)}catch{}})},[]);let tB=(0,r.useCallback)((e,n)=>{tL(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let a=t+n;if(a<0||a>=i.length)return i;let r=[...i];return[r[t],r[a]]=[r[a],r[t]],(0,c.Is)(e_,JSON.stringify(r)),r})},[]),tO=(0,r.useCallback)(e=>{tL(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],a=n[i].size,r=[...n];return r[i]={...r[i],size:t[(t.indexOf(a)+1)%t.length]},(0,c.Is)(e_,JSON.stringify(r)),r})},[]),tP=(0,r.useMemo)(()=>(0,p.computeWeeklyStatus)(K),[K]),tN=(0,r.useMemo)(()=>(0,p.safeToSpendToday)(K),[K]);(0,r.useMemo)(()=>(0,p.computeMonthlySummary)(K,n4),[K,n4]);let tW=(0,r.useMemo)(()=>(0,p.generateInsightsWithMembers)(K),[K]),{insights:tY,dismiss:tU}=(0,p.useFinanceAnomalies)(),tq=(0,r.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=p.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??K.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,p.categoryLabel)(n,i)}:e},[K.categories,i]),tH=(0,r.useMemo)(()=>(0,p.availableMonths)(K),[K]),tK=(0,r.useMemo)(()=>(0,p.filterExpensesByRange)(K.expenses,iI,n4),[K.expenses,iI,n4]),tZ=(0,r.useMemo)(()=>(0,p.filterIncomeByRange)(K.income,iI,n4),[K.income,iI,n4]),t_=(0,r.useMemo)(()=>{let e=(0,p.expensesForMember)(tK,n2);return ia.length>0&&(e=e.filter(e=>ia.includes(e.categoryId))),io&&(e=e.filter(e=>!0===e.isReimbursable)),iS>0&&(e=(0,p.applyExpenseFilter)(e,iM)),e},[tK,n2,ia,io,iM,iS]),tV=(0,r.useMemo)(()=>(0,p.monthlyTotalByMember)(K,n2,tC),[K,n2,tC]),tJ=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tC),[tC]),tG=(0,r.useMemo)(()=>(0,p.monthlyTotalByMember)(K,n2,tJ),[K,n2,tJ]),tX=(0,r.useMemo)(()=>0===tG?0:Math.round((tV-tG)/tG*100),[tV,tG]),tQ=(0,r.useMemo)(()=>{if("all"===n2)return a("finance.member.all");if("shared"===n2)return a("finance.hero.family");let e=K.familyMembers.find(e=>e.id===n2);return e?.name??a("finance.hero.family")},[n2,K.familyMembers,a]),t0=(0,r.useMemo)(()=>{if("all"===n2||"shared"===n2)return c.w4.colors.mainTextMuted;let e=K.familyMembers.findIndex(e=>e.id===n2);return -1===e?q:(0,b.a8)(K.familyMembers[e],e)},[n2,K.familyMembers]),t4=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let a=new Date(t);return a.setDate(t.getDate()+7),(0,p.expensesForMember)(K.expenses,n2).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<a}).reduce((e,n)=>e+n.amount,0)})},[K.expenses,n2]),t1=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return i.map(i=>{let t=(0,p.expensesForMonth)(e.expenses,i),r=(0,p.expensesForMember)(t,n),o={};for(let e of r)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:im(e).color})),over:s>a?s-a:0}})})(K,n2),[K,n2]),t2=(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let a=89;a>=0;a--){let r=new Date(i);r.setDate(i.getDate()-a);let o=r.toISOString().slice(0,10),s=o.slice(0,7),l=(0,p.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,p.incomeForMonth)(e.income,s),d=c.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=c.reduce((e,n)=>e+n.amount,0)/30,u=d/30;t.push({inc:m,incGoal:u,exp:l})}return t})(K,n2),[K,n2]),t6=(0,r.useMemo)(()=>(0,p.forecastCashFlow)(K,tS),[K,tS]),t3=(0,r.useMemo)(()=>(0,p.firstNegativeDay)(t6),[t6]),t8=(0,r.useMemo)(()=>{let e,n,i;return e=x.zA[n8],n=new Date,i=K.expenses.length>0?K.expenses.reduce((e,n)=>e+n.amount,0)/K.expenses.length:20,Array.from({length:e},(t,a)=>{let r=(0,x.x)(a,e,n),o=(0,p.expensesForMember)(K.expenses.filter(e=>e.date===r),n2).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/i;return s<.5?1:s<1?2:s<2?3:4})},[K,n2,n8]),t5=(0,r.useMemo)(()=>(0,p.dayHourSpendMatrix)((0,p.expensesForMember)(K.expenses,n2)),[K.expenses,n2]),t7=(0,r.useMemo)(()=>{let e=[];return e.push({key:"shared",label:a("finance.income.member.shared"),color:c.w4.colors.mainTextMuted,incomeSpk:(0,p.incomeSparkline)(K.income,"shared"),spendSpk:(0,p.memberSparkline)(K.expenses,"shared"),incomeTotal:(0,p.incomeForMember)(K.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,p.expensesForMember)(K.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,p.incomeForMember)(K.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,p.expensesForMember)(K.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,p.memberNetByMonth)(K,"shared",6)}),K.familyMembers.forEach((n,i)=>{let t=(0,b.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,p.incomeSparkline)(K.income,n.id),spendSpk:(0,p.memberSparkline)(K.expenses,n.id),incomeTotal:(0,p.incomeForMember)(K.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,p.expensesForMember)(K.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,p.incomeForMember)(K.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,p.expensesForMember)(K.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,p.memberNetByMonth)(K,n.id,6)})}),e},[K,a]),t9=(0,r.useMemo)(()=>{let e=Object.entries((0,p.incomeByMember)(K.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:a("finance.income.member.shared"),value:n,color:c.w4.colors.mainTextMuted};let i=K.familyMembers.findIndex(n=>n.id===e),t=K.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,b.a8)(t,i):c.w4.colors.accent}})},[K,a]),ae=(0,r.useMemo)(()=>t9.reduce((e,n)=>e+n.value,0),[t9]),an=tP.budget>0?tP.spent/tP.budget*100:0,ai=K.budget.monthlyBudget>0?tV/K.budget.monthlyBudget*100:0,at=(0,r.useMemo)(()=>{let e=iN&&iY.trim()?iY.trim():(0,p.parseQuickInput)(iO,K.familyMembers)?.description;return e?(0,p.guessCategoryWithRules)(K,e):"other"},[iO,iN,iY,K]),aa=iH||to||at,ar=(0,r.useMemo)(()=>(0,p.parseRecurringHint)(iO),[iO]);(0,r.useEffect)(()=>{let e=(0,p.parseQuickInput)(iO,K.familyMembers);e?.memberId&&i_(e.memberId)},[iO,K.familyMembers]);let ao=(0,r.useCallback)(()=>{let e=(0,p.parseQuickInput)(iO,K.familyMembers),n=(0,p.parseRecurringHint)(iO);if(!e||!n)return;let i=new Date,t=i.getFullYear(),a=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0");i4({amount:e.amount,description:e.description||(aa??"other"),categoryId:aa||"other",cadence:n.cadence,firstDue:`${t}-${a}-${r}`})},[iO,K.familyMembers,aa]),as=(0,r.useCallback)(()=>{if(!i0)return;let e=new Date(i0.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:i0.description,amount:i0.amount,categoryId:i0.categoryId,cadence:i0.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iZ?iZ:void 0};nf({...K,recurringRules:[...K.recurringRules??[],n]},"finance.undo.label.added"),i4(null),iP(""),iK(""),ts(""),iQ.current&&clearTimeout(iQ.current),iX(!0),iQ.current=setTimeout(()=>iX(!1),2e3)},[i0,K,iZ,nf]),al=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=iN&&iY.trim()?iY.trim():void 0,t=(0,p.parseQuickInput)(iO,K.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let a=aa||"other",r=t.memberId??("shared"!==iZ?iZ:void 0),o=t.tags??[],s=t.description?(0,p.normalizeMerchant)(t.description):void 0,l=id(),d=t.amount;if("EUR"!==i1){i5(!0),i3(!1);let e=await (0,p.convertToEUR)({amount:t.amount,code:i1,date:l});if(i5(!1),!e)return void i3(!0);d=e.eur,n={code:i1,rate:e.rate,original:t.amount}}let m={id:(0,g.z)(),amount:d,date:l,categoryId:a,description:t.description||a,type:"daily",...t.split?{split:t.split}:{childId:r},createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{},...K.defaultAccountId?{accountId:K.defaultAccountId}:{}};ti(!1),i3(!1);let u={...K.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=a)});let x=[t.description||"",...K.recentDescriptions].filter(Boolean).slice(0,20),f=[m,...K.expenses],h={...K,expenses:f,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,p.addRecentTag)(h,e);nf(h,"finance.undo.label.added");let b=(0,$.j)(f);tc(b),(0,c.Is)(eq,JSON.stringify(b)),iP(""),iU(""),iW(!1),iK(""),ts(""),iJ(null),iQ.current&&clearTimeout(iQ.current),iX(!0),iQ.current=setTimeout(()=>iX(!1),2e3)},[iO,iN,iY,aa,iZ,i1,K,nf]),ac=(0,r.useCallback)(e=>{(0,u.K)([10,50,10]);let n=(0,p.parseQuickInput)(e,K.familyMembers);if(n){let e=iH||to||(n.description?(0,p.guessCategoryWithRules)(K,n.description):"other"),i=n.memberId??("shared"!==iZ?iZ:void 0),t=n.tags??[],a={id:(0,g.z)(),amount:n.amount,date:id(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},r={...K.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(r[n]=e)});let o=[n.description||"",...K.recentDescriptions].filter(Boolean).slice(0,20),s={...K,expenses:[a,...K.expenses],categoryHints:r,recentDescriptions:o};for(let e of t)s=(0,p.addRecentTag)(s,e);nf(s,"finance.undo.label.added");let l=(0,$.j)([a,...K.expenses]);tc(l),(0,c.Is)(eq,JSON.stringify(l)),iP(""),iK(""),ts(""),iQ.current&&clearTimeout(iQ.current),iX(!0),iQ.current=setTimeout(()=>iX(!1),2e3)}else iP(e),iE.current?.focus()},[K,iH,to,iZ,nf]),ad=(0,r.useCallback)(e=>{nf({...K,expenses:K.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[K,nf]),ap=(0,r.useCallback)(e=>{let n=K.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,g.z)(),date:id(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nf({...K,expenses:[i,...K.expenses]},"finance.undo.label.added")},[K,nf]),am=(0,r.useCallback)(e=>{nf({...K,income:K.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[K,nf]),au=(0,r.useCallback)(e=>{nf({...K,expenses:K.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[K,nf]),ax=(0,r.useCallback)(()=>{let e=parseFloat(ty)||K.budget.weeklyBudget,n=parseFloat(tj)||K.budget.monthlyBudget;l({...K,budget:{...K.budget,weeklyBudget:e,monthlyBudget:n}}),tk(!0),setTimeout(()=>tk(!1),2e3)},[ty,tj,K,l]),af=(0,r.useCallback)(()=>{let e=iC.selectedIds;0!==e.size&&(nf({...K,expenses:K.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iC.exitSelectMode())},[iC,K,nf]),ag=(0,r.useCallback)(e=>{let n=iC.selectedIds;0!==n.size&&(nf({...K,expenses:K.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iC.exitSelectMode())},[iC,K,nf]),ah=(0,r.useCallback)(()=>{let e=iC.selectedIds;0!==e.size&&(nf({...K,expenses:K.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iC.exitSelectMode())},[iC,K,nf]),ab=(0,r.useMemo)(()=>["shared",...K.familyMembers.map(e=>e.id)],[K.familyMembers]);(0,v.K)({quickAddInputRef:iE,monthSelectRef:iA,memberIds:ab,activeMemberId:n2,onSelectMember:n3,onSetTab:e=>n0(e),expenseModalOpen:td,onOpenExpenseModal:()=>tp(!0),shortcutsOpen:iL,onToggleShortcuts:()=>iB(e=>!e),onOpenSearch:()=>{n0("expenses"),ik(!0)}});let ay=[{value:"week",label:a("finance.range.pill.7d")},{value:"month",label:a("finance.range.pill.month")},{value:"3m",label:a("finance.range.pill.3m")},{value:"6m",label:a("finance.range.pill.6m")},{value:"1y",label:a("finance.range.pill.year")}],aw=Math.floor(tV).toLocaleString("pt-PT"),aj=(tV%1).toFixed(2).slice(1),av=(0,r.useMemo)(()=>{if(0===(K.goals??[]).length)return null;let e=(0,p.recomputeGoalCurrents)(K);return{onTrack:e.goals.filter(e=>"behind"!==(0,p.goalStatus)(e)).length,total:e.goals.length}},[K]),a$=(()=>{let[e,n]=tC.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),ak=(0,t.jsx)(b.TA,{data:K,activeMemberId:n2,onSelectMember:n3,onSaveData:l,t:a,locale:i}),aM=(0,r.useMemo)(()=>{let e={};for(let n of t_)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:im(e).color}))},[t_]),aT=aM.reduce((e,n)=>e+n.value,0),aS=(0,r.useMemo)(()=>t1.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[t1]),aF=t1.length>0?aS/t1.length:0,az=t1.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>K.budget.monthlyBudget).length,aC=(0,r.useMemo)(()=>{if(0===t_.length)return null;let e=t_.reduce((e,n)=>n.amount>e.amount?n:e,t_[0]),n={};for(let e of t_){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?K.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??a("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of t_){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=t_.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[t_,K.familyMembers,a]),aI="kid"===Z.ageMode&&"shared"!==n2&&"all"!==n2?K.familyMembers.find(e=>e.id===n2&&"child"===e.role)??null:null;return aI?(0,t.jsx)(d.PE,{title:a("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(W.N,{member:aI,data:K,t:a})}):(0,t.jsxs)(d.PE,{title:a("finance.appTitle"),sidebar:ak,topBarRight:e,activeId:n2,children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(V,{children:(0,t.jsx)(b.jb,{data:K,activeMemberId:n2,onSelectMember:n3,t:a,locale:i})}),(0,t.jsxs)(G,{children:[(0,t.jsx)(X,{children:(0,t.jsx)("div",{role:"tablist","aria-label":a("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:a("finance.tab.overview"),expenses:a("finance.tab.expenses"),insights:a("finance.tab.insights")},i={overview:0,expenses:t_.length,insights:tW.length}[e];return(0,t.jsxs)(ee,{type:"button",role:"tab","aria-selected":nQ===e,active:nQ===e,onClick:()=>n0(e),children:[n[e],i>0&&(0,t.jsxs)(en,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(d.ms,{align:"right",trigger:(0,t.jsx)(d.$n,{variant:iv>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(d.In,{name:"filter",size:13,"aria-hidden":!0}),children:iv>0?a("finance.filters.activeCount",{n:iv}):a("finance.actions.filters")}),children:[(0,t.jsx)(d.o_,{children:a("finance.filters.member")}),["shared",...K.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?a("finance.hero.family"):K.familyMembers.find(n=>n.id===e)?.name??e,i=e===n2;return(0,t.jsx)(d.tJ,{onClick:()=>n3(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(d.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.o_,{children:a("finance.filters.category")}),(0,t.jsx)(d.tJ,{onClick:()=>ir([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===ia.length&&(0,t.jsx)(d.In,{name:"check",size:12}),ia.length>0&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.allCategories")]})}),p.DEFAULT_CATEGORIES.map(e=>{let n=ia.includes(e.id);return(0,t.jsx)(d.tJ,{onClick:()=>ir(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(d.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,p.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.tJ,{onClick:()=>is(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[io&&(0,t.jsx)(d.In,{name:"check",size:12}),!io&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.reimbursableOnly")]})}),iv>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.rx,{}),(0,t.jsx)(d.tJ,{onClick:()=>{ir([]),is(!1)},children:a("finance.filters.reset")})]})]}),(0,t.jsx)(d.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(d.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>iy(!0),children:a("finance.actions.categories")}),"expenses"===nQ&&(0,t.jsx)(Y.g,{count:iS,onClick:()=>ik(e=>!e),label:a("finance.search.openSearch")}),"expenses"===nQ&&(0,t.jsx)(d.$n,{variant:iC.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iC.selectMode?iC.exitSelectMode():iC.enterSelectMode()},children:a("finance.bulk.select")}),"overview"===nQ&&(0,t.jsx)(d.K0,{onClick:()=>{it(!0),requestAnimationFrame(()=>{window.print()})},title:a("finance.report.button"),"aria-label":a("finance.report.button"),children:(0,t.jsx)(d.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(d.K0,{onClick:()=>ie(!0),title:a("finance.actions.settings"),"aria-label":a("finance.actions.settings"),active:n9,children:(0,t.jsx)(d.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(J,{children:(0,t.jsx)(d.K0,{onClick:()=>iB(e=>!e),title:a("finance.shortcuts.title"),"aria-label":a("finance.shortcuts.title"),active:iL,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(et,{"aria-label":a("finance.range.label"),children:ay.map(({value:e,label:n})=>(0,t.jsx)(ei,{type:"button",active:iI===e,onClick:()=>{iR(e),"month"===e&&n1(tC)},"aria-pressed":iI===e,children:n},e))}),"expenses"===nQ&&(0,t.jsx)(Y.P,{open:i$,query:iM,onQueryChange:iT,savedViews:K.savedViews??[],onSaveView:iF,onDeleteView:iz,onClose:()=>ik(!1),members:K.familyMembers,categories:[...p.DEFAULT_CATEGORIES,...K.categories??[]],locale:i,recentTags:K.recentTags}),"month"===iI&&K.expenses.length>0&&(0,t.jsx)(k.f,{data:K,selectedMonth:n4,onSelectMonth:n1,locale:i,t:a}),(0,t.jsxs)(eb,{children:["overview"===nQ&&(0,t.jsxs)(ey,{children:[(0,t.jsxs)(eo,{ref:iD,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,flexWrap:"wrap"},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:a("finance.quickAdd.title")}),tP.budget>0?(0,t.jsxs)(nu,{status:tN.status,title:a("finance.safeToSpend.label"),"aria-label":`${a("finance.safeToSpend.label")} €${tN.amount.toFixed(0)}`,children:[(0,t.jsx)("span",{className:"label",children:a("finance.safeToSpend.label")}),"danger"===tN.status?(0,t.jsx)("span",{className:"amount",children:a("finance.safeToSpend.over",{n:Math.abs(tN.remaining).toFixed(0)})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"amount",children:a("finance.safeToSpend.amount",{amount:tN.amount.toFixed(0)})}),(0,t.jsx)("span",{className:"suffix",children:a("finance.safeToSpend.suffix",{n:tN.daysRemaining})})]})]}):null]}),(0,t.jsxs)(nm,{visible:iG&&!i7.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",a("finance.quickAdd.added")]}),i7.listening&&(0,t.jsxs)(ng,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nh,{}),a("finance.voice.listening")]}),(0,t.jsxs)(d.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tu(!0),children:["+ ",a("finance.quickAdd.addIncome")]}),(0,t.jsxs)(d.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tf(!0),children:["⚖ ",a("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:al,"aria-label":a("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(ns,{children:[{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...K.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(K.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(nl,{type:"button",active:iZ===e.id,color:i,onClick:()=>i_(e.id),children:[(0,t.jsx)(d.eu,{member:a,size:18}),e.name]},e.id)})}),(0,t.jsxs)(nc,{children:[(0,t.jsxs)(nT,{children:[(0,t.jsx)(nd,{ref:iE,type:"text",placeholder:iN?a("finance.quickAdd.amountOnlyPlaceholder"):a("finance.quickAdd.placeholder"),value:iO,onChange:e=>{iP(e.target.value),iK(""),ti(eG.length>0),ta(-1)},onFocus:()=>{eG.length>0&&!iO.trim()&&ti(!0)},onBlur:()=>{setTimeout(()=>ti(!1),150)},onKeyDown:e=>{if(tn&&0!==eG.length)if("ArrowDown"===e.key)e.preventDefault(),ta(e=>Math.min(e+1,eG.length-1));else if("ArrowUp"===e.key)e.preventDefault(),ta(e=>Math.max(e-1,-1));else if("Enter"===e.key&&tt>=0){e.preventDefault();let n=eG[tt];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iO);iP(e?iO.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iK(""),ti(!1),ta(-1)}}else"Escape"===e.key&&(ti(!1),ta(-1))},"aria-label":a("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":tn&&eG.length>0,autoComplete:"off",inputMode:"decimal"}),tn&&eG.length>0&&(0,t.jsxs)(nS,{ref:tr,role:"listbox","aria-label":a("finance.merchant.recent"),children:[(0,t.jsx)(nI,{role:"presentation",children:a("finance.merchant.recent")}),eG.map((e,n)=>(0,t.jsxs)(nF,{role:"option","aria-selected":tt===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iO);iP(i?iO.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iK(""),ti(!1),ta(-1),iE.current?.focus()},children:[(0,t.jsx)(nz,{children:e.merchant}),(0,t.jsxs)(nC,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(es,{type:"button","aria-pressed":iN,"aria-label":iN?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iN;iW(e),e&&requestAnimationFrame(()=>iq.current?.focus())},children:[(0,t.jsx)(d.In,{name:iN?"close":"plus",size:11}),iN?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(np,{value:iH||at,onChange:e=>{let n=e.target.value,i=iH||at;iK(n);let t=iN&&iY.trim()?iY.trim():(0,p.parseQuickInput)(iO,K.familyMembers)?.description;t&&iJ((0,p.proposeRuleFromOverride)(i,n,t))},"aria-label":a("finance.quickAdd.category"),children:p.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,p.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(np,{value:i1,onChange:e=>{i2(e.target.value),i3(!1)},"aria-label":a("finance.currency.label"),style:{maxWidth:72},children:p.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iO.trim()||i8,children:i8?a("finance.currency.converting"):a("finance.quickAdd.add")}),i7.supported&&(0,t.jsx)(nM,{type:"button","aria-label":a("finance.voice.listening"),"aria-pressed":i7.listening,active:i7.listening,onPointerDown:()=>{i9.current=window.setTimeout(()=>{i9.current=null,te.current=!0,(0,u.K)(30),i7.listening?i7.stop():i7.start(ac)},500)},onPointerUp:()=>{null!==i9.current&&(clearTimeout(i9.current),i9.current=null,te.current||((0,u.K)(10),i7.listening?i7.stop():i7.start(ac))),te.current=!1},onPointerCancel:()=>{null!==i9.current&&(clearTimeout(i9.current),i9.current=null),te.current=!1},children:(0,t.jsx)(d.In,{name:"mic",size:16})})]}),(0,t.jsx)(el,{visible:iN,children:(0,t.jsx)(ec,{ref:iq,type:"text",placeholder:a("finance.quickAdd.descPlaceholder"),maxLength:80,value:iY,onChange:e=>iU(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iW(!1),iE.current?.focus())},"aria-label":a("finance.quickAdd.descPlaceholder"),tabIndex:iN?0:-1})}),(0,t.jsx)($.J,{expenses:K.expenses,storedOrder:tl,lockedCategoryId:to,onToggle:e=>ts(n=>n===e?"":e),locale:i,groupLabel:a("finance.quickAdd.frequentCategories")}),iV&&(0,t.jsxs)(nb,{children:[(0,t.jsxs)("span",{children:[a("finance.categoryRules.alwaysCategorize",{match:iV.match})," ",(0,t.jsx)("strong",{children:(n=p.DEFAULT_CATEGORIES.find(e=>e.id===iV.categoryId))?(0,p.categoryLabel)(n,i):iV.categoryId}),"?"]}),(0,t.jsx)(ny,{type:"button",accent:!0,onClick:()=>{K&&iV&&(nf({...K,categoryRules:[iV,...K.categoryRules??[]]},"finance.undo.label.added"),iJ(null))},children:a("finance.categoryRules.propose")}),(0,t.jsx)(ny,{type:"button",onClick:()=>iJ(null),children:a("finance.categoryRules.dismiss")})]}),i6&&(0,t.jsx)(nx,{style:{color:H},role:"alert",children:a("finance.currency.fxFailed")}),ar&&(0,p.parseQuickInput)(iO,K.familyMembers)&&(0,t.jsxs)(nw,{type:"button",onClick:ao,"aria-label":a("finance.recurring.makeRecurring"),children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsx)(nx,{children:a("finance.quickAdd.hint")})]})]}),(0,t.jsx)(d.dO,{items:tA.map(e=>({...e})),onReorder:tB,onCycleSize:tO,accentColor:()=>q,labels:{moveLeft:a("finance.overview.panel.moveLeft"),moveRight:a("finance.overview.panel.moveRight"),cycleSize:a("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(ek,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eM,{children:[(0,t.jsxs)(eT,{children:[a("finance.hero.spentIn")," ",a$," \xb7 ",tQ]}),(0,t.jsxs)(eS,{children:[(0,t.jsx)(eF,{children:"€"}),(0,t.jsx)(ez,{children:aw}),(0,t.jsx)(eC,{children:aj})]}),(0,t.jsxs)(eI,{children:[(0,t.jsx)(x.Ru,{value:tX,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[a("finance.hero.vsPrevious")," ",(0,p.formatMonthLabel)(tJ,i)," \xb7 €",ic(tG)]})]}),t4.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:t4,accent:t0,width:280,height:34})}),null!==av&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:av.onTrack===av.total?"#7fb77e":c.w4.colors.mainTextMuted},children:a("finance.goals.hero",{on:av.onTrack,total:av.total})})]}),(0,t.jsx)(eR,{children:(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{children:a("finance.budget.weekly")}),(0,t.jsxs)(eL,{children:["€",ic(tP.spent)," ",(0,t.jsxs)(eB,{children:["/ €",tP.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:an,over:an>100?an-100:0}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)("span",{children:[Math.round(an),"% ",a("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tP.remaining<0?H:q},children:tP.remaining>0?`€${ic(tP.remaining)} ${a("finance.budget.remaining")}`:`€${ic(Math.abs(tP.remaining))} ${a("finance.budget.over")}`})]}),(0,t.jsxs)(eE,{style:{marginTop:14},children:[(0,t.jsx)(eA,{children:a("finance.budget.monthly")}),(0,t.jsxs)(eL,{children:["€",ic(tV)," ",(0,t.jsxs)(eB,{children:["/ €",K.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:ai,over:ai>100?ai-100:0}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)("span",{children:[Math.round(ai),"% ",a("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[a("finance.budget.projected")," €",ic(tV+(tP.projectedTotal-tP.spent))]})]})]})})]});case"overview-accounts":return(0,t.jsx)(U.V,{data:K,t:a,onSave:e=>{nf(e,"finance.undo.label.edited")}});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:a("finance.charts.sixMonths")}),(0,t.jsx)(e$,{children:(0,t.jsx)(nV,{children:p.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nJ,{children:[(0,t.jsx)(nG,{color:e.color}),(0,p.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:t1,budget:K.budget.monthlyBudget,height:200}),(0,t.jsxs)(nR,{children:[(0,t.jsxs)(nD,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nE,{children:["€",ic(aS)]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nE,{children:["€",ic(aF)]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nE,{children:[az," / ",t1.length]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nE,{style:{color:tX>0?H:q},children:[tX>0?"+":"",tX,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:a("finance.charts.byCategory")}),(0,t.jsx)(nK,{type:"button",onClick:()=>n0("insights"),children:a("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:aM,total:aT,size:110,centerLabel:a$.slice(0,3),centerValue:`€${ic(aT)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:aM.map(e=>{let n=im(e.id),a=(0,p.expensesForMember)((0,p.expensesForMonth)(K.expenses,tJ),n2).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),r=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:e.color}),(0,t.jsx)(eW,{children:(0,p.categoryLabel)(n,i)}),(0,t.jsxs)(eY,{children:["€",ic(e.value)]}),Math.abs(r)>1&&(0,t.jsx)(x.Ru,{value:r,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ev,{children:a("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.forecast.sub",{n:tS})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(ei,{type:"button",active:tS===e,onClick:()=>tz(e),"aria-pressed":tS===e,children:a(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(R.b,{forecast:t6,firstNegDate:t3,t:a,locale:i,height:170}),t2.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:c.w4.spacing.md,paddingTop:c.w4.spacing.sm,borderTop:`1px solid ${c.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:c.w4.colors.mainTextMuted},children:a("finance.charts.cashflow")})}),(0,t.jsx)(x.uj,{data:t2,height:130,legendIn:a("finance.charts.in"),legendOut:a("finance.charts.out"),legendGoal:a("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:a("finance.charts.heatmap")}),(0,t.jsx)(x.zy,{range:n8,onChange:n7,labels:{"1m":a("finance.timeline.range.1m"),"3m":a("finance.timeline.range.3m"),"6m":a("finance.timeline.range.6m"),"1y":a("finance.timeline.range.1y")}})]}),(0,t.jsx)(x.RT,{data:t8,locale:i}),(0,t.jsxs)(nA,{children:[(0,t.jsx)("span",{children:a("finance.charts.less")}),(0,t.jsx)(nL,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:a("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ed,{children:(0,t.jsx)(d.YZ,{children:a("finance.heatmap.title")})}),(0,t.jsx)(y.D,{matrix:t5,locale:i,t:a})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ej,{children:(0,t.jsx)(ev,{children:a("finance.charts.thisWeek")})}),(0,t.jsxs)(nB,{children:[(0,t.jsxs)(nO,{children:[(0,t.jsxs)(nP,{children:["€",ic(tP.spent)]}),(0,t.jsxs)(eB,{children:["/ €",tP.budget]})]}),(0,t.jsx)(x.kl,{spent:tP.spent,budget:tP.budget}),(0,t.jsxs)(nN,{children:[(0,t.jsx)("span",{children:a("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:a("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(d.YZ,{children:a("finance.recent.title")}),t_.length>8&&(0,t.jsx)(nK,{type:"button",onClick:()=>n0("expenses"),children:a("finance.recent.viewAll",{n:t_.length})})]}),0===t_.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:a("finance.dashboard.noRecent")}):(0,t.jsx)(eX,{"aria-label":a("finance.recent.title"),children:t_.slice(0,8).map(e=>(0,t.jsx)(ih,{exp:e,finData:K,locale:i,t:a,onDelete:ad,onClone:ap,onToggleReimbursed:au,compact:"compact"===tM},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.incomeMix.title")}),0===t9.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,padding:`${c.w4.spacing.md} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:t9,total:ae,size:100,centerLabel:a("finance.byMember.income"),centerValue:`€${ic(ae)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:t9.map(e=>(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:e.color}),(0,t.jsx)(eW,{children:e.label}),(0,t.jsxs)(eY,{style:{color:q},children:["€",ic(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n2?t7:t7.filter(e=>e.key===n2);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.byMember.title")}),t7.length<=1&&0===K.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:q},{id:"expense",value:e.expense,color:H}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:c.w4.spacing.sm},children:[(0,t.jsx)(d.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamily,color:c.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?q:H},children:[n.net>=0?"+":"","€",ic(Math.abs(n.net))]}),(0,t.jsx)(x.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(x.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:c.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(d.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(d.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",ic(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:q,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:H},children:["€",ic(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:H,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.borderSubtle??c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nQ&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nZ,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(d.YZ,{children:a("finance.tx.title")}),"month"===iI&&0===K.expenses.length&&(0,t.jsx)(nH,{ref:iA,value:n4,onChange:e=>n1(e.target.value),"aria-label":a("finance.insights.month"),children:tH.map(e=>(0,t.jsx)("option",{value:e,children:(0,p.formatMonthLabel)(e,i)},e))})]}),0===t_.length&&0===tZ.length?(0,t.jsx)(ew,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:iS>0?a("finance.search.noResults"):a("finance.tx.empty")})}):(0,t.jsx)(ew,{span:12,children:(0,t.jsx)(eX,{"aria-label":a("finance.tx.title"),children:[...t_.map(e=>({...e,_kind:"expense"})),...tZ.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ih,{exp:e,finData:K,locale:i,t:a,onDelete:ad,onClone:ap,onToggleReimbursed:au,compact:"compact"===tM,selectMode:iC.selectMode,selected:iC.selectedIds.has(e.id),onToggleSelect:iC.toggleId,longPressHandlers:iC.longPressHandlers,onEnterSelectMode:iC.enterSelectMode},e.id):(0,t.jsxs)(eQ,{compact:"compact"===tM,children:["compact"===tM?(0,t.jsx)(e0,{color:q,"aria-hidden":!0}):(0,t.jsx)(e4,{color:q,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:e.source}),"compact"!==tM&&(0,t.jsxs)(e6,{children:[ip(e.date,i)," \xb7 ",a("finance.dashboard.income")]})]}),(0,t.jsxs)(e3,{children:[(0,t.jsxs)(e8,{style:{color:q},children:["+€",il(e.amount)]}),(0,t.jsx)(ni,{className:"delete-btn",type:"button",onClick:()=>am(e.id),"aria-label":`${a("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nQ&&(0,t.jsxs)(eh,{children:[(0,t.jsxs)(nZ,{style:{marginBottom:0},children:[(0,t.jsx)(d.YZ,{children:a("finance.insights.title")}),"month"===iI&&0===K.expenses.length&&(0,t.jsx)(nH,{value:n4,onChange:e=>n1(e.target.value),"aria-label":a("finance.insights.month"),children:tH.map(e=>(0,t.jsx)("option",{value:e,children:(0,p.formatMonthLabel)(e,i)},e))})]}),null!==aC&&(0,t.jsxs)(em,{children:[(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:a("finance.kpi.biggestExpense")}),(0,t.jsxs)(ef,{children:["€",aC.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:aC.biggest.description?`${aC.biggest.description} \xb7 ${(0,p.categoryLabel)(im(aC.biggest.categoryId),i)}`:(0,p.categoryLabel)(im(aC.biggest.categoryId),i)})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:a("finance.kpi.topSpender")}),(0,t.jsxs)(ef,{children:["€",aC.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:aC.topMemberLabel})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:a("finance.kpi.busiestDay")}),(0,t.jsxs)(ef,{children:["€",aC.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:a(`finance.weekday.${aC.busiestDowKey}`)})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:a("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(ef,{children:["€",aC.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eg,{children:0===aC.reimbursableTotal?"—":a("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(d.dO,{items:tI.map(e=>({...e})),onReorder:tD,onCycleSize:tE,accentColor:()=>q,labels:{moveLeft:a("finance.insights.panel.moveLeft"),moveRight:a("finance.insights.panel.moveRight"),cycleSize:a("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:t1,budget:K.budget.monthlyBudget,height:180}),(0,t.jsxs)(nR,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(nD,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nE,{children:["€",ic(aS)]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nE,{children:["€",ic(aF)]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(d.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nE,{style:{color:tX>0?H:q},children:[tX>0?"+":"",tX,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.charts.byCategory")}),0===aM.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${c.w4.spacing.lg} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:aM,total:aT,size:110,centerLabel:a$.slice(0,3),centerValue:`€${ic(aT)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:aM.map(e=>{let n=im(e.id),a=e.color||c.w4.colors.mainTextMuted,r=(0,p.expensesForMember)((0,p.expensesForMonth)(K.expenses,tJ),n2).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{color:a}),(0,t.jsx)(eW,{children:(0,p.categoryLabel)(n,i)}),(0,t.jsxs)(eY,{children:["€",ic(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.insights.title")}),0===tW.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tW.map((e,n)=>(0,t.jsxs)(nt,{itype:e.type,children:[(0,t.jsx)(na,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:a(e.messageKey,tq(e.params))}),e.memberId&&(()=>{let n=K.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=K.familyMembers.indexOf(n);return(0,t.jsxs)(nr,{children:[(0,t.jsx)(d.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.insights.anomalies")}),0===tY.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tY.map(e=>(0,t.jsxs)(nt,{itype:e.type,children:[(0,t.jsx)(na,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:a(e.messageKey,tq(e.params))})}),e.snoozeKey&&(0,t.jsx)(no,{type:"button",title:a("finance.insights.anomalies.dismiss"),"aria-label":a("finance.insights.anomalies.dismiss"),onClick:()=>{tU(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.smallMultiples.title")}),(0,t.jsx)(L.R,{expenses:K.expenses,familyMembers:K.familyMembers,getMemberColor:b.a8,t:a,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.reimbursables.tracker.title")}),(0,t.jsx)(A.p,{expenses:K.expenses,familyMembers:K.familyMembers,getMemberColor:b.a8,t:a,locale:i})]});case"analytics-budgets":return(0,t.jsx)(D.z,{});case"analytics-bills":return(0,t.jsx)(z.J,{});case"analytics-subscriptions":return(0,t.jsx)(S.n,{});case"analytics-goals":return(0,t.jsx)(F.f,{});case"analytics-recurring":return(0,t.jsx)(C.b,{});case"analytics-rules":return(0,t.jsx)(E.K,{});case"analytics-networth":return(0,t.jsx)(I.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.YZ,{style:{marginBottom:c.w4.spacing.sm},children:a("finance.byMember.title")}),0===t7.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:c.w4.spacing.sm},children:t7.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(d.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(d.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",ic(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:q,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:H},children:["€",ic(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:H,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(n_,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),td&&(0,t.jsx)(ig,{finData:K,activeMemberId:n2,locale:i,t:a,onClose:()=>tp(!1),onSubmit:tb}),tm&&(0,t.jsx)(ix,{finData:K,locale:i,t:a,onClose:()=>tu(!1),onSubmit:th}),tx&&(0,t.jsx)(iu,{finData:K,t:a,onClose:()=>tf(!1),onSubmit:tg}),(0,t.jsx)(w.S,{labelKey:ne,onUndo:()=>{nX()},onDismiss:()=>nn(null),t:a}),iC.selectMode&&"expenses"===nQ&&(0,t.jsx)(M.S,{selectionCount:iC.selectedIds.size,visibleIds:t_.map(e=>e.id),selectedIds:iC.selectedIds,categories:p.DEFAULT_CATEGORIES,locale:i,t:a,onCancel:iC.exitSelectMode,onSelectAll:()=>iC.selectAll(t_.map(e=>e.id)),onCategorise:ag,onDelete:af,onMarkReimbursed:ah}),iL&&(0,t.jsx)(j.m,{t:a,onClose:()=>iB(!1)}),(0,t.jsx)(P.X,{open:n9,onClose:()=>ie(!1),ariaLabel:a("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(ea,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(d.YZ,{children:a("finance.settings.title")}),(0,t.jsx)(d.K0,{onClick:()=>ie(!1),title:a("finance.actions.settings"),children:(0,t.jsx)(d.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"drawer-weekly-budget",children:a("finance.settings.weeklyBudget")}),(0,t.jsx)(nU,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(K.budget.weeklyBudget),value:ty,onChange:e=>tw(e.target.value)})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{htmlFor:"drawer-monthly-budget",children:a("finance.settings.monthlyBudget")}),(0,t.jsx)(nU,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(K.budget.monthlyBudget),value:tj,onChange:e=>tv(e.target.value)})]}),(0,t.jsx)(d.$n,{variant:"primary",onClick:()=>{ax(),ie(!1)},style:{height:44},children:t$?a("finance.settings.saved"):a("finance.settings.save")})]}),(0,t.jsx)(N.u,{data:K,getMemberColor:b.a8,t:a,onSaveMember:(e,n)=>{let i=K.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);nf({...K,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(P.X,{open:ib,onClose:()=>{iy(!1),ij(null)},ariaLabel:a("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(ea,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(d.YZ,{children:a("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!iw&&(0,t.jsx)(d.$n,{variant:"ghost",style:{height:28},onClick:()=>ij({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:a("finance.categories.new")}),(0,t.jsx)(d.K0,{onClick:()=>{iy(!1),ij(null)},title:a("finance.categories.cancel"),children:(0,t.jsx)(d.In,{name:"close",size:16})})]})]}),iw&&(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.md,display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:a("finance.categories.labelEn")}),(0,t.jsx)(nq,{value:iw.labelEn,onChange:e=>ij(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:a("finance.categories.labelPt")}),(0,t.jsx)(nq,{value:iw.labelPt,onChange:e=>ij(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:a("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:iw.icon,onChange:e=>ij(n=>n&&{...n,icon:e.target.value}),style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:d.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:a("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:iw.color,onChange:e=>ij(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nq,{value:iw.color,onChange:e=>ij(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(d.$n,{variant:"ghost",style:{height:28},onClick:()=>ij(null),children:a("finance.categories.cancel")}),(0,t.jsx)(d.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!iw.labelEn||!iw.labelPt)return;let e={id:(0,g.z)(),labelEn:iw.labelEn,labelPt:iw.labelPt,icon:iw.icon,color:iw.color,isCustom:!0},n=K.categories??[];nf({...K,categories:[...n,e]},"finance.undo.label.added"),ij(null)},children:a("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[p.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.n6)(e.icon)?(0,t.jsx)(d.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,p.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:a("finance.categories.builtIn")})]},e.id)),(K.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.n6)(e.icon)?(0,t.jsx)(d.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,p.categoryLabel)(e,i)}),(0,t.jsx)(d.K0,{title:a("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(K.categories??[]).filter(n=>n.id!==e.id);nf({...K,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(d.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(P.X,{open:null!==i0,onClose:()=>i4(null),ariaLabel:a("finance.recurring.makeRecurring"),maxWidth:360,children:i0&&(0,t.jsxs)(nj,{children:[(0,t.jsxs)(d.YZ,{children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nv,{children:a("finance.recurring.frequency")}),(0,t.jsx)(n$,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nk,{type:"button",active:i0.cadence===e,onClick:()=>i4(n=>n?{...n,cadence:e}:null),children:a(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nv,{children:a("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:i0.firstDue,onChange:e=>i4(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(d.$n,{variant:"ghost",onClick:()=>i4(null),children:a("finance.recurring.cancel")}),(0,t.jsx)(d.$n,{variant:"primary",onClick:as,disabled:!i0.firstDue,children:a("finance.recurring.confirm")})]})]})}),ii&&(0,t.jsx)(B.h,{data:K,month:n4,locale:i,t:a,getMemberColor:b.a8})]})},{}))}}]);