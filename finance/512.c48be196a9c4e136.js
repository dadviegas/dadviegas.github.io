"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),r=i(8997),a=i(7991),o=i(6859),s=i.n(o),l=i(2799),c=i(4764),d=i(2385),p=i(3759),m=i(789),u=i(5030),x=i(1496),g=i(8170),f=i(4041),h=i(948),b=i(719),y=i(2405),w=i(9546),j=i(5854),v=i(3616),$=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),F=i(8635),z=i(8501),C=i(1789),R=i(216),I=i(9419),D=i(341),L=i(9378),E=i(1423),A=i(1255),B=i(545),O=i(2167);let P="#7fb77e",N="#f85149",Y=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,W=c.w4.suites.lab,U=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${Y} 0.25s ease both;
  overflow: hidden;
`,q=s().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,H=s().div`
  display: none;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,Z=s().div`
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
`,K=s().div`
  flex: 1;
  min-width: 0;
`,_=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  flex-shrink: 0;
`,J=s().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${c.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${W}`:"transparent"};
  background: ${({active:e})=>e?`${W}1f`:"transparent"};
  color: ${({active:e})=>e?W:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${W};
    outline-offset: 2px;
  }
`,G=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,V=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${W}`:"transparent"};
  background: ${({active:e})=>e?`${W}1f`:"transparent"};
  color: ${({active:e})=>e?W:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${W};
    outline-offset: 2px;
  }
`,X=s().div`
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
`;let Q=s().div`
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
  animation: ${Y} 0.2s ease;

  @media (min-width: ${c.w4.breakpoints.md}) {
    border-radius: ${c.w4.borderRadius.lg};
  }
`,ee=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,en=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${P};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,ei=s().button`
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
`,et=s().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,er=s().input`
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
  border-left: 2px solid ${P};
  padding: ${c.w4.spacing.lg};
`;let ea=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`;s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${P};
  padding: ${c.w4.spacing.md};
`;let eo=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`,es=s().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,el=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ec=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ed=s().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
`,ep=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,em=s().div`
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
`;let eu=s().div`
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
`;let ex=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,eg=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  border-left: 2px solid ${P};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    border-left-color: ${P};
  }

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${c.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,ef=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,eh=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eb=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,ey=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${P};
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,ew=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ej=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ev=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,e$=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,ek=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,eM=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eT=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eS=s().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,eF=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ez=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,eC=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,eR=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eI=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eD=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eL=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,eE=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eA=s().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eB=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eO="finance:list-density",eP="finance:quick-categories",eN="finance:forecast-months",eY="finance:active-member",eW="finance:insights-layout",eU="finance:overview-layout",eq=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eH=[{id:"overview-hero",size:"lg"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eZ=s().input`
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
`,eK=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,e_=s().li`
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
`,eJ=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eG=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eV=s().div`
  flex: 1;
  min-width: 0;
`,eX=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eQ=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,e0=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,e4=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e1=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${P}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?P:"#facc15"};
  white-space: nowrap;
`,e2=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${P}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?P:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${P}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,e6=s().button`
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
    color: ${P};
    background: ${P}1a;
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,e3=s().button`
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
    color: ${N};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,e8=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${P}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${P}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,e5=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?N:"warning"===e?"#facc15":"success"===e?P:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,e7=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,e9=s().button`
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
`;s()(eg)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let ne=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,nn=s().button`
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
`,ni=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,nt=s().input`
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
`,nr=s().select`
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
`,na=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${P};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,no=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,ns=(0,l.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,nl=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${P};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,nc=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${P};
  animation: ${ns} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nd=s().div`
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
  animation: ${Y} 0.2s ease both;

  strong {
    color: ${c.w4.colors.mainText};
    font-weight: 600;
  }
`,np=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?P:c.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${P}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${P}44`:c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${P}28`:c.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?P:c.w4.colors.borderStrong??c.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nm=s().button`
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
`,nu=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  animation: ${Y} 0.2s ease;
`,nx=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,ng=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,nf=s().button`
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
`,nh=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${c.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?P:c.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?P:c.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${P};
    color: ${P};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nb=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,ny=s().ul`
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
`,nw=s().li`
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
`,nj=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nv=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,n$=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nk=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,nM=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nT=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nS=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nF=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nz=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,nC=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nR=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nI=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${P}; }
`,nD=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nL=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,nE=s().input`
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
`,nA=s().input`
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
`,nB=s().select`
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
`;let nO=s().button`
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
`,nP=s().div`
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
`;let nN=s().footer`
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
`,nY=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nW=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nU=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nq=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg} ${c.w4.borderRadius.lg} ${c.w4.borderRadius.md} ${c.w4.borderRadius.md};
  border-left: 2px solid ${P};
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
`,nH=s().div`
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,nZ=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nK=s().button`
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
`,n_=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nJ=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nG=s().button`
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
`,nV=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,nX=s().button`
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
`,nQ=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n0=s().input`
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
`,n4=s().select`
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
`,n1=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,n2=s().input`
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
`,n6=s().div`
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
`,n3=s().ul`
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
`,n8=s().li`
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,n5=s().div`
  position: relative;
`,n7=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function n9(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function ie(e){return Math.round(e).toLocaleString("pt-PT")}function ii(){return new Date().toISOString().slice(0,10)}function it(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function ir(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function ia({finData:e,t:n,onClose:i,onSubmit:r}){let o=(0,d.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[l,p]=(0,a.useState)(""),m=parseFloat(l.replace(",",".")),x=l.trim().length>0&&!Number.isNaN(m),g=x?m-o:0;return(0,t.jsx)(O.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nH,{children:[(0,t.jsxs)(nZ,{children:[(0,t.jsx)(u.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nK,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&r(m)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:c.w4.spacing.sm,background:c.w4.colors.sidebarHover,borderRadius:c.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",n9(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:c.w4.colors.mainTextMuted},children:["€",n9(s)]})]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n0,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:l,onChange:e=>p(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:g>0?P:N,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:n9(g)}):n("finance.balance.deltaDown",{n:n9(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(n1,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function io({finData:e,locale:n,t:i,onClose:r,onSubmit:o}){let[s,l]=(0,a.useState)(""),[d,p]=(0,a.useState)(ii()),[m,x]=(0,a.useState)(""),[g,h]=(0,a.useState)(""),[y,w]=(0,a.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&m.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(O.X,{open:!0,onClose:r,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nH,{children:[(0,t.jsxs)(nZ,{children:[(0,t.jsx)(u.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nK,{type:"button",onClick:r,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,f.z)(),amount:j,date:d,source:m.trim(),createdAt:Date.now(),...g?{goalId:g}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n_,{children:[(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n0,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>l(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n0,{id:"inc-date",type:"date",value:d,onChange:e=>p(e.target.value)})]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n0,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(u.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(u.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n);return(0,t.jsxs)(u.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n4,{id:"inc-goal",value:g,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(n1,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:r,children:i("finance.income.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function is({finData:e,activeMemberId:n,locale:i,t:r,onClose:o,onSubmit:s}){let[l,p]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),[g,h]=(0,a.useState)("other"),[y,w]=(0,a.useState)(ii()),[j,v]=(0,a.useState)("single"),[$,k]=(0,a.useState)(n),[M,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,a.useState)([]),[z,C]=(0,a.useState)(""),[R,I]=(0,a.useState)(!1),D=(0,a.useRef)(null);(0,a.useEffect)(()=>{m.trim()&&h((0,d.guessCategoryWithRules)(e,m))},[m,e]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let L=parseFloat(l.replace(",","."))||0,E=M.length,A="split"===j&&E>0?L/E:L,B=L>0&&!!y&&("single"===j||"split"===j&&E>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),I(!1))},N=(0,a.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),Y=[{id:"shared",name:r("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(O.X,{open:!0,onClose:o,ariaLabel:r("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nq,{children:[(0,t.jsxs)(nZ,{children:[(0,t.jsxs)(u.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,t.jsx)(nK,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=m.trim(),r=Date.now(),a={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=g)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,f.z)(),amount:L,date:y,categoryId:g,description:t||g,type:"daily",childId:"shared"===$?void 0:$,createdAt:r,...o}];else{let e=Math.round(L/E*100)/100,n=Math.round((L-e*E)*100)/100;i=M.map((i,a)=>({id:(0,f.z)(),amount:0===a?e+n:e,date:y,categoryId:g,description:t?`${t} (1/${E})`:g,type:"daily",childId:i,createdAt:r+a,...o}))}s(i,a,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(n_,{children:[(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"exp-amount",children:r("finance.modal.amount")}),(0,t.jsx)(n0,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"exp-date",children:r("finance.modal.date")}),(0,t.jsx)(n0,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"exp-desc",children:r("finance.modal.description")}),(0,t.jsx)(n0,{id:"exp-desc",type:"text",placeholder:r("finance.modal.descPlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,t.jsx)(n4,{id:"exp-cat",value:g,onChange:e=>h(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{children:r("finance.tags.label")}),(0,t.jsxs)(n5,{children:[(0,t.jsxs)(n6,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(u.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":r("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(n2,{ref:D,type:"text",value:z,placeholder:0===S.length?r("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),I(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&I(!1)},onBlur:()=>{z.trim()&&P(z),setTimeout(()=>I(!1),150)},onFocus:()=>I(!0),"aria-label":r("finance.tags.label")})]}),R&&N.length>0&&(0,t.jsx)(n3,{children:N.map(e=>(0,t.jsxs)(n8,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{children:r("finance.modal.assign")}),(0,t.jsxs)(nJ,{role:"tablist",children:[(0,t.jsx)(nG,{type:"button",active:"single"===j,onClick:()=>v("single"),children:r("finance.modal.member")}),(0,t.jsx)(nG,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:r("finance.modal.split")})]}),"single"===j?(0,t.jsx)(nV,{style:{marginTop:c.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(nX,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nV,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(nX,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),E>0&&L>0&&(0,t.jsx)(nQ,{style:{marginTop:c.w4.spacing.xs},children:r("finance.modal.splitEach",{n:E,amount:n9(A)})})]})]}),(0,t.jsxs)(n1,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:o,children:r("finance.member.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!B,children:r("finance.quickAdd.add")})]})]})]})})}function il({exp:e,finData:n,locale:i,t:r,onDelete:a,onClone:o,onToggleReimbursed:s,compact:l=!1,selectMode:p=!1,selected:m=!1,onToggleSelect:x,longPressHandlers:g}){let f=ir(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),y=h>=0?n.familyMembers[h]:null,w=y?(0,b.a8)(y,h):c.w4.colors.mainTextMuted,j=g?g(e.id):null,v=n=>{p&&x&&"INPUT"!==n.target.tagName&&x(e.id)},$=e.isReimbursable&&!p?s?(0,t.jsx)(e2,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e1,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,k=!p&&o?(0,t.jsx)(e6,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,M=p?null:(0,t.jsx)(e3,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),T=p?(0,t.jsx)(eZ,{type:"checkbox",checked:m,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,S=p?{background:m?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:m?"1px solid rgba(127,183,126,0.35)":"none"}:{};return l?(0,t.jsxs)(e_,{compact:!0,style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eJ,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(eV,{children:(0,t.jsxs)(eX,{style:{display:"flex",alignItems:"center",gap:6},children:[y?(0,t.jsx)(u.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:13,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,d.categoryLabel)(f,i)})]})}),(0,t.jsxs)(e0,{children:[$,(0,t.jsxs)(e4,{children:["−€",n9(e.amount)]}),k,M]})]}):(0,t.jsxs)(e_,{style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eG,{color:f.color,children:(0,u.n6)(f.icon)?(0,t.jsx)(u.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(eV,{children:[(0,t.jsx)(eX,{children:e.description||(0,d.categoryLabel)(f,i)}),(0,t.jsxs)(eQ,{children:[y?(0,t.jsx)(u.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:11,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,d.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:it(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(n7,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e0,{children:[$,"recurring"===e.type&&(0,t.jsx)(e1,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e4,{children:["−€",n9(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),k,M]})]})}let ic=document.getElementById("root");if(!ic)throw Error("Root element #root not found");(0,r.createRoot)(ic).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,g.Ym)(),r=(0,a.useMemo)(()=>(0,g.Nx)(i,h.A),[i]),{data:o,loaded:s,save:l}=(0,d.useFinance)(),Y=o??{...d.EMPTY_FINANCE_DATA},W=(0,a.useMemo)(()=>(0,d.recentMerchants)(Y.expenses,20).slice(0,6),[Y.expenses]),{canUndo:eZ,latestLabelKey:e1,undo:e2}=(0,d.useUndo)(),[e6,ns]=(0,a.useState)(null),nq=(0,a.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:Y,labelKey:n,ts:Date.now()}),ns(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await l(e)},[Y,l]),nH=(0,a.useCallback)(async()=>{let e=e2();e&&(ns("finance.undo.label.reverted"),await l(e),setTimeout(()=>ns(null),2500))},[e2,l]),[nZ,nK]=(0,a.useState)("overview"),[n_,nJ]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[nG,nV]=(0,a.useState)("shared");(0,a.useEffect)(()=>{(0,c.PL)(eY).then(e=>{e&&nV(e)})},[]);let nX=(0,a.useCallback)(e=>{nV(e),(0,c.Is)(eY,e)},[]),[nQ,n0]=(0,a.useState)(!1),[n4,n1]=(0,a.useState)([]),[n2,n6]=(0,a.useState)(!1),[n3,n8]=(0,a.useState)(!1),[n5,n7]=(0,a.useState)(null),ic=+(n4.length>0)+ +!!n2,id=(0,T.E)();(0,a.useEffect)(()=>{"expenses"!==nZ&&id.selectMode&&id.exitSelectMode()},[nZ]);let{range:ip,setRange:im}=(0,p.H)("month"),iu=(0,a.useRef)(null),ix=(0,a.useRef)(null),ig=(0,a.useRef)(null),[ih,ib]=(0,a.useState)(!1),[iy,iw]=(0,a.useState)(""),[ij,iv]=(0,a.useState)(!1),[i$,ik]=(0,a.useState)(""),iM=(0,a.useRef)(null),[iT,iS]=(0,a.useState)(""),[iF,iz]=(0,a.useState)("shared"),[iC,iR]=(0,a.useState)(null),[iI,iD]=(0,a.useState)(!1),iL=(0,a.useRef)(null),[iE,iA]=(0,a.useState)(null),[iB,iO]=(0,a.useState)("EUR"),[iP,iN]=(0,a.useState)(!1),[iY,iW]=(0,a.useState)(!1),iU=(0,B.x)(),iq=(0,a.useRef)(null),iH=(0,a.useRef)(!1),[iZ,iK]=(0,a.useState)(!1),[i_,iJ]=(0,a.useState)(-1),iG=(0,a.useRef)(null),[iV,iX]=(0,a.useState)(""),[iQ,i0]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,c.PL)(eP).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&i0(n)}catch{}})},[]);let[i4,i1]=(0,a.useState)(!1),[i2,i6]=(0,a.useState)(!1),[i3,i8]=(0,a.useState)(!1),i5=(0,a.useCallback)(e=>{let n=e-(0,d.computeCurrentBalance)(Y);if(0===n)return void i8(!1);let i=(Y.budget.openingBalance??0)+n;nq({...Y,budget:{...Y.budget,openingBalance:i}},"finance.undo.label.edited"),i8(!1)},[Y,nq]),i7=(0,a.useCallback)(e=>{nq({...Y,income:[e,...Y.income]},"finance.undo.label.added"),i6(!1),iL.current&&clearTimeout(iL.current),iD(!0),iL.current=setTimeout(()=>iD(!1),2e3)},[Y,nq]),i9=(0,a.useCallback)((e,n,i,t)=>{let r=i?[i,...Y.recentDescriptions].filter(Boolean).slice(0,20):Y.recentDescriptions,a={...Y,expenses:[...e,...Y.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)a=(0,d.addRecentTag)(a,e);nq(a,"finance.undo.label.added"),i1(!1),iL.current&&clearTimeout(iL.current),iD(!0),iL.current=setTimeout(()=>iD(!1),2e3)},[Y,nq]),[te,tn]=(0,a.useState)(""),[ti,tt]=(0,a.useState)(""),[tr,ta]=(0,a.useState)(!1),[to,ts]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,c.PL)(eO).then(e=>{("compact"===e||"comfortable"===e)&&ts(e)})},[]),(0,a.useCallback)(()=>{let e="comfortable"===to?"compact":"comfortable";ts(e),(0,c.Is)(eO,e)},[to]);let[tl,tc]=(0,a.useState)(3);(0,a.useEffect)(()=>{(0,c.PL)(eN).then(e=>{"6"===e?tc(6):"12"===e&&tc(12)})},[]);let td=(0,a.useCallback)(e=>{tc(e),(0,c.Is)(eN,String(e))},[]),tp=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),[tm,tu]=(0,a.useState)(eq);(0,a.useEffect)(()=>{(0,c.PL)(eW).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eq.filter(e=>!i.has(e.id))];tu(t)}catch{}})},[]);let tx=(0,a.useCallback)((e,n)=>{tu(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,c.Is)(eW,JSON.stringify(a)),a})},[]),tg=(0,a.useCallback)(e=>{tu(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(eW,JSON.stringify(a)),a})},[]),[tf,th]=(0,a.useState)(eH);(0,a.useEffect)(()=>{(0,c.PL)(eU).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eH.filter(e=>!i.has(e.id))];th(t)}catch{}})},[]);let tb=(0,a.useCallback)((e,n)=>{th(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,c.Is)(eU,JSON.stringify(a)),a})},[]),ty=(0,a.useCallback)(e=>{th(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(eU,JSON.stringify(a)),a})},[]),tw=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(Y),[Y]);(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(Y,n_),[Y,n_]);let tj=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(Y),[Y]),{insights:tv,dismiss:t$}=(0,d.useFinanceAnomalies)(),tk=(0,a.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=d.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??Y.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,d.categoryLabel)(n,i)}:e},[Y.categories,i]),tM=(0,a.useMemo)(()=>(0,d.availableMonths)(Y),[Y]),tT=(0,a.useMemo)(()=>(0,d.filterExpensesByRange)(Y.expenses,ip,n_),[Y.expenses,ip,n_]),tS=(0,a.useMemo)(()=>(0,d.filterIncomeByRange)(Y.income,ip,n_),[Y.income,ip,n_]),tF=(0,a.useMemo)(()=>{let e=(0,d.expensesForMember)(tT,nG);return n4.length>0&&(e=e.filter(e=>n4.includes(e.categoryId))),n2&&(e=e.filter(e=>!0===e.isReimbursable)),e},[tT,nG,n4,n2]),tz=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(Y,nG,tp),[Y,nG,tp]),tC=(0,a.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tp),[tp]),tR=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(Y,nG,tC),[Y,nG,tC]),tI=(0,a.useMemo)(()=>0===tR?0:Math.round((tz-tR)/tR*100),[tz,tR]),tD=(0,a.useMemo)(()=>{if("all"===nG)return r("finance.member.all");if("shared"===nG)return r("finance.hero.family");let e=Y.familyMembers.find(e=>e.id===nG);return e?.name??r("finance.hero.family")},[nG,Y.familyMembers,r]),tL=(0,a.useMemo)(()=>{if("all"===nG||"shared"===nG)return c.w4.colors.mainTextMuted;let e=Y.familyMembers.findIndex(e=>e.id===nG);return -1===e?P:(0,b.a8)(Y.familyMembers[e],e)},[nG,Y.familyMembers]),tE=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,d.expensesForMember)(Y.expenses,nG).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[Y.expenses,nG]),tA=(0,a.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),a=(0,d.expensesForMember)(t,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:ir(e).color})),over:s>r?s-r:0}})})(Y,nG),[Y,nG]);(0,a.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:c,exp:l})}return t})(Y,nG),[Y,nG]);let tB=(0,a.useMemo)(()=>(0,d.forecastCashFlow)(Y,tl),[Y,tl]),tO=(0,a.useMemo)(()=>(0,d.firstNegativeDay)(tB),[tB]),tP=(0,a.useMemo)(()=>{let e,n;return e=new Date,n=Y.expenses.length>0?Y.expenses.reduce((e,n)=>e+n.amount,0)/Y.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),o=(0,d.expensesForMember)(Y.expenses.filter(e=>e.date===a),nG).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[Y,nG]),tN=(0,a.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(Y.expenses,nG)),[Y.expenses,nG]),tY=(0,a.useMemo)(()=>{let e=[];return e.push({key:"shared",label:r("finance.income.member.shared"),color:c.w4.colors.mainTextMuted,incomeSpk:(0,d.incomeSparkline)(Y.income,"shared"),spendSpk:(0,d.memberSparkline)(Y.expenses,"shared"),incomeTotal:(0,d.incomeForMember)(Y.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(Y.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(Y.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(Y.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(Y,"shared",6)}),Y.familyMembers.forEach((n,i)=>{let t=(0,b.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,d.incomeSparkline)(Y.income,n.id),spendSpk:(0,d.memberSparkline)(Y.expenses,n.id),incomeTotal:(0,d.incomeForMember)(Y.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(Y.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(Y.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(Y.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(Y,n.id,6)})}),e},[Y,r]),tW=(0,a.useMemo)(()=>{let e=Object.entries((0,d.incomeByMember)(Y.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:r("finance.income.member.shared"),value:n,color:c.w4.colors.mainTextMuted};let i=Y.familyMembers.findIndex(n=>n.id===e),t=Y.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,b.a8)(t,i):c.w4.colors.accent}})},[Y,r]),tU=(0,a.useMemo)(()=>tW.reduce((e,n)=>e+n.value,0),[tW]),tq=tw.budget>0?tw.spent/tw.budget*100:0,tH=Y.budget.monthlyBudget>0?tz/Y.budget.monthlyBudget*100:0,tZ=(0,a.useMemo)(()=>{let e=ij&&i$.trim()?i$.trim():(0,d.parseQuickInput)(iy,Y.familyMembers)?.description;return e?(0,d.guessCategoryWithRules)(Y,e):"other"},[iy,ij,i$,Y]),tK=iT||iV||tZ,t_=(0,a.useMemo)(()=>(0,d.parseRecurringHint)(iy),[iy]);(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(iy,Y.familyMembers);e?.memberId&&iz(e.memberId)},[iy,Y.familyMembers]);let tJ=(0,a.useCallback)(()=>{let e=(0,d.parseQuickInput)(iy,Y.familyMembers),n=(0,d.parseRecurringHint)(iy);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");iA({amount:e.amount,description:e.description||(tK??"other"),categoryId:tK||"other",cadence:n.cadence,firstDue:`${t}-${r}-${a}`})},[iy,Y.familyMembers,tK]),tG=(0,a.useCallback)(()=>{if(!iE)return;let e=new Date(iE.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iE.description,amount:iE.amount,categoryId:iE.categoryId,cadence:iE.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iF?iF:void 0};nq({...Y,recurringRules:[...Y.recurringRules??[],n]},"finance.undo.label.added"),iA(null),iw(""),iS(""),iX(""),iL.current&&clearTimeout(iL.current),iD(!0),iL.current=setTimeout(()=>iD(!1),2e3)},[iE,Y,iF,nq]),tV=(0,a.useCallback)(async e=>{let n;e.preventDefault();let i=ij&&i$.trim()?i$.trim():void 0,t=(0,d.parseQuickInput)(iy,Y.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let r=tK||"other",a=t.memberId??("shared"!==iF?iF:void 0),o=t.tags??[],s=t.description?(0,d.normalizeMerchant)(t.description):void 0,l=ii(),p=t.amount;if("EUR"!==iB){iW(!0),iN(!1);let e=await (0,d.convertToEUR)({amount:t.amount,code:iB,date:l});if(iW(!1),!e)return void iN(!0);p=e.eur,n={code:iB,rate:e.rate,original:t.amount}}let m={id:(0,f.z)(),amount:p,date:l,categoryId:r,description:t.description||r,type:"daily",childId:a,createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{}};iK(!1),iN(!1);let u={...Y.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=r)});let x=[t.description||"",...Y.recentDescriptions].filter(Boolean).slice(0,20),g=[m,...Y.expenses],h={...Y,expenses:g,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,d.addRecentTag)(h,e);nq(h,"finance.undo.label.added");let b=(0,$.j)(g);i0(b),(0,c.Is)(eP,JSON.stringify(b)),iw(""),ik(""),iv(!1),iS(""),iX(""),iR(null),iL.current&&clearTimeout(iL.current),iD(!0),iL.current=setTimeout(()=>iD(!1),2e3)},[iy,ij,i$,tK,iF,iB,Y,nq]),tX=(0,a.useCallback)(e=>{(0,m.K)([10,50,10]);let n=(0,d.parseQuickInput)(e,Y.familyMembers);if(n){let e=iT||iV||(n.description?(0,d.guessCategoryWithRules)(Y,n.description):"other"),i=n.memberId??("shared"!==iF?iF:void 0),t=n.tags??[],r={id:(0,f.z)(),amount:n.amount,date:ii(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},a={...Y.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(a[n]=e)});let o=[n.description||"",...Y.recentDescriptions].filter(Boolean).slice(0,20),s={...Y,expenses:[r,...Y.expenses],categoryHints:a,recentDescriptions:o};for(let e of t)s=(0,d.addRecentTag)(s,e);nq(s,"finance.undo.label.added");let l=(0,$.j)([r,...Y.expenses]);i0(l),(0,c.Is)(eP,JSON.stringify(l)),iw(""),iS(""),iX(""),iL.current&&clearTimeout(iL.current),iD(!0),iL.current=setTimeout(()=>iD(!1),2e3)}else iw(e),ix.current?.focus()},[Y,iT,iV,iF,nq]),tQ=(0,a.useCallback)(e=>{nq({...Y,expenses:Y.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[Y,nq]),t0=(0,a.useCallback)(e=>{let n=Y.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,f.z)(),date:ii(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nq({...Y,expenses:[i,...Y.expenses]},"finance.undo.label.added")},[Y,nq]),t4=(0,a.useCallback)(e=>{nq({...Y,income:Y.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[Y,nq]),t1=(0,a.useCallback)(e=>{nq({...Y,expenses:Y.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[Y,nq]),t2=(0,a.useCallback)(()=>{let e=parseFloat(te)||Y.budget.weeklyBudget,n=parseFloat(ti)||Y.budget.monthlyBudget;l({...Y,budget:{...Y.budget,weeklyBudget:e,monthlyBudget:n}}),ta(!0),setTimeout(()=>ta(!1),2e3)},[te,ti,Y,l]),t6=(0,a.useCallback)(()=>{let e=id.selectedIds;0!==e.size&&(nq({...Y,expenses:Y.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),id.exitSelectMode())},[id,Y,nq]),t3=(0,a.useCallback)(e=>{let n=id.selectedIds;0!==n.size&&(nq({...Y,expenses:Y.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),id.exitSelectMode())},[id,Y,nq]),t8=(0,a.useCallback)(()=>{let e=id.selectedIds;0!==e.size&&(nq({...Y,expenses:Y.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),id.exitSelectMode())},[id,Y,nq]),t5=(0,a.useMemo)(()=>["shared",...Y.familyMembers.map(e=>e.id)],[Y.familyMembers]);(0,v.K)({quickAddInputRef:ix,monthSelectRef:ig,memberIds:t5,activeMemberId:nG,onSelectMember:nX,onSetTab:e=>nK(e),expenseModalOpen:i4,onOpenExpenseModal:()=>i1(!0),shortcutsOpen:ih,onToggleShortcuts:()=>ib(e=>!e)});let t7=[{value:"week",label:r("finance.range.pill.7d")},{value:"month",label:r("finance.range.pill.month")},{value:"3m",label:r("finance.range.pill.3m")},{value:"6m",label:r("finance.range.pill.6m")},{value:"1y",label:r("finance.range.pill.year")}],t9=Math.floor(tz).toLocaleString("pt-PT"),re=(tz%1).toFixed(2).slice(1),rn=(0,a.useMemo)(()=>{if(0===(Y.goals??[]).length)return null;let e=(0,d.recomputeGoalCurrents)(Y);return{onTrack:e.goals.filter(e=>"behind"!==(0,d.goalStatus)(e)).length,total:e.goals.length}},[Y]),ri=(()=>{let[e,n]=tp.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),rt=(0,t.jsx)(b.TA,{data:Y,activeMemberId:nG,onSelectMember:nX,onSaveData:l,t:r,locale:i}),rr=(0,a.useMemo)(()=>{let e={};for(let n of tF)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:ir(e).color}))},[tF]),ra=rr.reduce((e,n)=>e+n.value,0),ro=(0,a.useMemo)(()=>tA.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tA]),rs=tA.length>0?ro/tA.length:0,rl=tA.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>Y.budget.monthlyBudget).length,rc=(0,a.useMemo)(()=>{if(0===tF.length)return null;let e=tF.reduce((e,n)=>n.amount>e.amount?n:e,tF[0]),n={};for(let e of tF){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?Y.familyMembers.find(e=>e.id===i[0]):void 0,a=t?.name??r("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tF){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tF.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:a,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tF,Y.familyMembers,r]);return(0,t.jsxs)(c.PE,{title:r("finance.appTitle"),sidebar:rt,topBarRight:e,activeId:nG,children:[(0,t.jsxs)(U,{children:[(0,t.jsx)(q,{children:(0,t.jsx)(b.jb,{data:Y,activeMemberId:nG,onSelectMember:nX,t:r,locale:i})}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(K,{children:(0,t.jsx)("div",{role:"tablist","aria-label":r("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:r("finance.tab.overview"),expenses:r("finance.tab.expenses"),insights:r("finance.tab.insights")},i={overview:0,expenses:tF.length,insights:tj.length}[e];return(0,t.jsxs)(J,{type:"button",role:"tab","aria-selected":nZ===e,active:nZ===e,onClick:()=>nK(e),children:[n[e],i>0&&(0,t.jsxs)(G,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(u.ms,{align:"right",trigger:(0,t.jsx)(u.$n,{variant:ic>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"filter",size:13,"aria-hidden":!0}),children:ic>0?r("finance.filters.activeCount",{n:ic}):r("finance.actions.filters")}),children:[(0,t.jsx)(u.o_,{children:r("finance.filters.member")}),["shared",...Y.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?r("finance.hero.family"):Y.familyMembers.find(n=>n.id===e)?.name??e,i=e===nG;return(0,t.jsx)(u.tJ,{onClick:()=>nX(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(u.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.o_,{children:r("finance.filters.category")}),(0,t.jsx)(u.tJ,{onClick:()=>n1([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===n4.length&&(0,t.jsx)(u.In,{name:"check",size:12}),n4.length>0&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.allCategories")]})}),d.DEFAULT_CATEGORIES.map(e=>{let n=n4.includes(e.id);return(0,t.jsx)(u.tJ,{onClick:()=>n1(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(u.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.tJ,{onClick:()=>n6(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n2&&(0,t.jsx)(u.In,{name:"check",size:12}),!n2&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.reimbursableOnly")]})}),ic>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.tJ,{onClick:()=>{n1([]),n6(!1)},children:r("finance.filters.reset")})]})]}),(0,t.jsx)(u.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>n8(!0),children:r("finance.actions.categories")}),"expenses"===nZ&&(0,t.jsx)(u.$n,{variant:id.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{id.selectMode?id.exitSelectMode():id.enterSelectMode()},children:r("finance.bulk.select")}),(0,t.jsx)(u.K0,{onClick:()=>n0(!0),title:r("finance.actions.settings"),"aria-label":r("finance.actions.settings"),active:nQ,children:(0,t.jsx)(u.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(H,{children:(0,t.jsx)(u.K0,{onClick:()=>ib(e=>!e),title:r("finance.shortcuts.title"),"aria-label":r("finance.shortcuts.title"),active:ih,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(X,{"aria-label":r("finance.range.label"),children:t7.map(({value:e,label:n})=>(0,t.jsx)(V,{type:"button",active:ip===e,onClick:()=>{im(e),"month"===e&&nJ(tp)},"aria-pressed":ip===e,children:n},e))}),"month"===ip&&Y.expenses.length>0&&(0,t.jsx)(k.f,{data:Y,selectedMonth:n_,onSelectMonth:nJ,locale:i,t:r}),(0,t.jsxs)(eu,{children:["overview"===nZ&&(0,t.jsxs)(ex,{children:[(0,t.jsxs)(en,{ref:iu,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:r("finance.quickAdd.title")}),(0,t.jsxs)(na,{visible:iI&&!iU.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",r("finance.quickAdd.added")]}),iU.listening&&(0,t.jsxs)(nl,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nc,{}),r("finance.voice.listening")]}),(0,t.jsxs)(u.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i6(!0),children:["+ ",r("finance.quickAdd.addIncome")]}),(0,t.jsxs)(u.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i8(!0),children:["⚖ ",r("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:tV,"aria-label":r("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(ne,{children:[{id:"shared",name:r("finance.member.shared"),role:"shared",color:void 0},...Y.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(Y.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(nn,{type:"button",active:iF===e.id,color:i,onClick:()=>iz(e.id),children:[(0,t.jsx)(u.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(ni,{children:[(0,t.jsxs)(nb,{children:[(0,t.jsx)(nt,{ref:ix,type:"text",placeholder:ij?r("finance.quickAdd.amountOnlyPlaceholder"):r("finance.quickAdd.placeholder"),value:iy,onChange:e=>{iw(e.target.value),iS(""),iK(W.length>0),iJ(-1)},onFocus:()=>{W.length>0&&!iy.trim()&&iK(!0)},onBlur:()=>{setTimeout(()=>iK(!1),150)},onKeyDown:e=>{if(iZ&&0!==W.length)if("ArrowDown"===e.key)e.preventDefault(),iJ(e=>Math.min(e+1,W.length-1));else if("ArrowUp"===e.key)e.preventDefault(),iJ(e=>Math.max(e-1,-1));else if("Enter"===e.key&&i_>=0){e.preventDefault();let n=W[i_];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iy);iw(e?iy.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iS(""),iK(!1),iJ(-1)}}else"Escape"===e.key&&(iK(!1),iJ(-1))},"aria-label":r("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":iZ&&W.length>0,autoComplete:"off",inputMode:"decimal"}),iZ&&W.length>0&&(0,t.jsxs)(ny,{ref:iG,role:"listbox","aria-label":r("finance.merchant.recent"),children:[(0,t.jsx)(n$,{role:"presentation",children:r("finance.merchant.recent")}),W.map((e,n)=>(0,t.jsxs)(nw,{role:"option","aria-selected":i_===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iy);iw(i?iy.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iS(""),iK(!1),iJ(-1),ix.current?.focus()},children:[(0,t.jsx)(nj,{children:e.merchant}),(0,t.jsxs)(nv,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(ei,{type:"button","aria-pressed":ij,"aria-label":ij?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!ij;iv(e),e&&requestAnimationFrame(()=>iM.current?.focus())},children:[(0,t.jsx)(u.In,{name:ij?"close":"plus",size:11}),ij?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(nr,{value:iT||tZ,onChange:e=>{let n=e.target.value,i=iT||tZ;iS(n);let t=ij&&i$.trim()?i$.trim():(0,d.parseQuickInput)(iy,Y.familyMembers)?.description;t&&iR((0,d.proposeRuleFromOverride)(i,n,t))},"aria-label":r("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(nr,{value:iB,onChange:e=>{iO(e.target.value),iN(!1)},"aria-label":r("finance.currency.label"),style:{maxWidth:72},children:d.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iy.trim()||iY,children:iY?r("finance.currency.converting"):r("finance.quickAdd.add")}),iU.supported&&(0,t.jsx)(nh,{type:"button","aria-label":r("finance.voice.listening"),"aria-pressed":iU.listening,active:iU.listening,onPointerDown:()=>{iq.current=window.setTimeout(()=>{iq.current=null,iH.current=!0,(0,m.K)(30),iU.listening?iU.stop():iU.start(tX)},500)},onPointerUp:()=>{null!==iq.current&&(clearTimeout(iq.current),iq.current=null,iH.current||((0,m.K)(10),iU.listening?iU.stop():iU.start(tX))),iH.current=!1},onPointerCancel:()=>{null!==iq.current&&(clearTimeout(iq.current),iq.current=null),iH.current=!1},children:(0,t.jsx)(u.In,{name:"mic",size:16})})]}),(0,t.jsx)(et,{visible:ij,children:(0,t.jsx)(er,{ref:iM,type:"text",placeholder:r("finance.quickAdd.descPlaceholder"),maxLength:80,value:i$,onChange:e=>ik(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iv(!1),ix.current?.focus())},"aria-label":r("finance.quickAdd.descPlaceholder"),tabIndex:ij?0:-1})}),(0,t.jsx)($.J,{expenses:Y.expenses,storedOrder:iQ,lockedCategoryId:iV,onToggle:e=>iX(n=>n===e?"":e),locale:i,groupLabel:r("finance.quickAdd.frequentCategories")}),iC&&(0,t.jsxs)(nd,{children:[(0,t.jsxs)("span",{children:[r("finance.categoryRules.alwaysCategorize",{match:iC.match})," ",(0,t.jsx)("strong",{children:(n=d.DEFAULT_CATEGORIES.find(e=>e.id===iC.categoryId))?(0,d.categoryLabel)(n,i):iC.categoryId}),"?"]}),(0,t.jsx)(np,{type:"button",accent:!0,onClick:()=>{Y&&iC&&(nq({...Y,categoryRules:[iC,...Y.categoryRules??[]]},"finance.undo.label.added"),iR(null))},children:r("finance.categoryRules.propose")}),(0,t.jsx)(np,{type:"button",onClick:()=>iR(null),children:r("finance.categoryRules.dismiss")})]}),iP&&(0,t.jsx)(no,{style:{color:N},role:"alert",children:r("finance.currency.fxFailed")}),t_&&(0,d.parseQuickInput)(iy,Y.familyMembers)&&(0,t.jsxs)(nm,{type:"button",onClick:tJ,"aria-label":r("finance.recurring.makeRecurring"),children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsx)(no,{children:r("finance.quickAdd.hint")})]})]}),(0,t.jsx)(u.dO,{items:tf.map(e=>({...e})),onReorder:tb,onCycleSize:ty,accentColor:()=>P,labels:{moveLeft:r("finance.overview.panel.moveLeft"),moveRight:r("finance.overview.panel.moveRight"),cycleSize:r("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(ey,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(ew,{children:[(0,t.jsxs)(ej,{children:[r("finance.hero.spentIn")," ",ri," \xb7 ",tD]}),(0,t.jsxs)(ev,{children:[(0,t.jsx)(e$,{children:"€"}),(0,t.jsx)(ek,{children:t9}),(0,t.jsx)(eM,{children:re})]}),(0,t.jsxs)(eT,{children:[(0,t.jsx)(x.Ru,{value:tI,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[r("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(tC,i)," \xb7 €",ie(tR)]})]}),tE.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:tE,accent:tL,width:280,height:34})}),null!==rn&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:rn.onTrack===rn.total?"#7fb77e":c.w4.colors.mainTextMuted},children:r("finance.goals.hero",{on:rn.onTrack,total:rn.total})})]}),(0,t.jsx)(eS,{children:(0,t.jsxs)(eF,{children:[(0,t.jsxs)(ez,{children:[(0,t.jsx)(eC,{children:r("finance.budget.weekly")}),(0,t.jsxs)(eR,{children:["€",ie(tw.spent)," ",(0,t.jsxs)(eI,{children:["/ €",tw.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:tq,over:tq>100?tq-100:0}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)("span",{children:[Math.round(tq),"% ",r("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tw.remaining<0?N:P},children:tw.remaining>0?`€${ie(tw.remaining)} ${r("finance.budget.remaining")}`:`€${ie(Math.abs(tw.remaining))} ${r("finance.budget.over")}`})]}),(0,t.jsxs)(ez,{style:{marginTop:14},children:[(0,t.jsx)(eC,{children:r("finance.budget.monthly")}),(0,t.jsxs)(eR,{children:["€",ie(tz)," ",(0,t.jsxs)(eI,{children:["/ €",Y.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:tH,over:tH>100?tH-100:0}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)("span",{children:[Math.round(tH),"% ",r("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[r("finance.budget.projected")," €",ie(tz+(tw.projectedTotal-tw.spent))]})]})]})})]});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ef,{children:[(0,t.jsx)(eh,{children:r("finance.charts.sixMonths")}),(0,t.jsx)(eb,{children:(0,t.jsx)(nY,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nW,{children:[(0,t.jsx)(nU,{color:e.color}),(0,d.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:tA,budget:Y.budget.monthlyBudget,height:200}),(0,t.jsxs)(nk,{children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nT,{children:["€",ie(ro)]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nT,{children:["€",ie(rs)]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nT,{children:[rl," / ",tA.length]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nT,{style:{color:tI>0?N:P},children:[tI>0?"+":"",tI,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ef,{children:[(0,t.jsx)(eh,{children:r("finance.charts.byCategory")}),(0,t.jsx)(nO,{type:"button",onClick:()=>nK("insights"),children:r("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:rr,total:ra,size:110,centerLabel:ri.slice(0,3),centerValue:`€${ie(ra)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rr.map(e=>{let n=ir(e.id),r=(0,d.expensesForMember)((0,d.expensesForMonth)(Y.expenses,tC),nG).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eL,{children:[(0,t.jsx)(eE,{color:e.color}),(0,t.jsx)(eA,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eB,{children:["€",ie(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(x.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ef,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(eh,{children:r("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.forecast.sub",{n:tl})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(V,{type:"button",active:tl===e,onClick:()=>td(e),"aria-pressed":tl===e,children:r(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(I.b,{forecast:tB,firstNegDate:tO,t:r,locale:i,height:170})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ef,{children:(0,t.jsx)(eh,{children:r("finance.charts.heatmap")})}),(0,t.jsx)(x.RT,{data:tP,locale:i}),(0,t.jsxs)(nS,{children:[(0,t.jsx)("span",{children:r("finance.charts.less")}),(0,t.jsx)(nF,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:r("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ea,{children:(0,t.jsx)(u.YZ,{children:r("finance.heatmap.title")})}),(0,t.jsx)(y.D,{matrix:tN,locale:i,t:r})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ef,{children:(0,t.jsx)(eh,{children:r("finance.charts.thisWeek")})}),(0,t.jsxs)(nz,{children:[(0,t.jsxs)(nC,{children:[(0,t.jsxs)(nR,{children:["€",ie(tw.spent)]}),(0,t.jsxs)(eI,{children:["/ €",tw.budget]})]}),(0,t.jsx)(x.kl,{spent:tw.spent,budget:tw.budget}),(0,t.jsxs)(nI,{children:[(0,t.jsx)("span",{children:r("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:r("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(u.YZ,{children:r("finance.recent.title")}),tF.length>8&&(0,t.jsx)(nO,{type:"button",onClick:()=>nK("expenses"),children:r("finance.recent.viewAll",{n:tF.length})})]}),0===tF.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:r("finance.dashboard.noRecent")}):(0,t.jsx)(eK,{"aria-label":r("finance.recent.title"),children:tF.slice(0,8).map(e=>(0,t.jsx)(il,{exp:e,finData:Y,locale:i,t:r,onDelete:tQ,onClone:t0,onToggleReimbursed:t1,compact:"compact"===to},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.incomeMix.title")}),0===tW.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,padding:`${c.w4.spacing.md} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:tW,total:tU,size:100,centerLabel:r("finance.byMember.income"),centerValue:`€${ie(tU)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:tW.map(e=>(0,t.jsxs)(eL,{children:[(0,t.jsx)(eE,{color:e.color}),(0,t.jsx)(eA,{children:e.label}),(0,t.jsxs)(eB,{style:{color:P},children:["€",ie(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===nG?tY:tY.filter(e=>e.key===nG);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.byMember.title")}),tY.length<=1&&0===Y.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:P},{id:"expense",value:e.expense,color:N}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:c.w4.spacing.sm},children:[(0,t.jsx)(u.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamily,color:c.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?P:N},children:[n.net>=0?"+":"","€",ie(Math.abs(n.net))]}),(0,t.jsx)(x.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(x.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:c.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(u.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(u.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:P},children:["€",ie(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:P,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:N},children:["€",ie(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:N,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.borderSubtle??c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nZ&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nP,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(u.YZ,{children:r("finance.tx.title")}),"month"===ip&&0===Y.expenses.length&&(0,t.jsx)(nB,{ref:ig,value:n_,onChange:e=>nJ(e.target.value),"aria-label":r("finance.insights.month"),children:tM.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),0===tF.length&&0===tS.length?(0,t.jsx)(eg,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.tx.empty")})}):(0,t.jsx)(eg,{span:12,children:(0,t.jsx)(eK,{"aria-label":r("finance.tx.title"),children:[...tF.map(e=>({...e,_kind:"expense"})),...tS.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(il,{exp:e,finData:Y,locale:i,t:r,onDelete:tQ,onClone:t0,onToggleReimbursed:t1,compact:"compact"===to,selectMode:id.selectMode,selected:id.selectedIds.has(e.id),onToggleSelect:id.toggleId,longPressHandlers:id.longPressHandlers,onEnterSelectMode:id.enterSelectMode},e.id):(0,t.jsxs)(e_,{compact:"compact"===to,children:["compact"===to?(0,t.jsx)(eJ,{color:P,"aria-hidden":!0}):(0,t.jsx)(eG,{color:P,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eV,{children:[(0,t.jsx)(eX,{children:e.source}),"compact"!==to&&(0,t.jsxs)(eQ,{children:[it(e.date,i)," \xb7 ",r("finance.dashboard.income")]})]}),(0,t.jsxs)(e0,{children:[(0,t.jsxs)(e4,{style:{color:P},children:["+€",n9(e.amount)]}),(0,t.jsx)(e3,{className:"delete-btn",type:"button",onClick:()=>t4(e.id),"aria-label":`${r("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nZ&&(0,t.jsxs)(em,{children:[(0,t.jsxs)(nP,{style:{marginBottom:0},children:[(0,t.jsx)(u.YZ,{children:r("finance.insights.title")}),"month"===ip&&0===Y.expenses.length&&(0,t.jsx)(nB,{value:n_,onChange:e=>nJ(e.target.value),"aria-label":r("finance.insights.month"),children:tM.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),null!==rc&&(0,t.jsxs)(es,{children:[(0,t.jsxs)(el,{children:[(0,t.jsx)(ec,{children:r("finance.kpi.biggestExpense")}),(0,t.jsxs)(ed,{children:["€",rc.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ep,{children:rc.biggest.description?`${rc.biggest.description} \xb7 ${(0,d.categoryLabel)(ir(rc.biggest.categoryId),i)}`:(0,d.categoryLabel)(ir(rc.biggest.categoryId),i)})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(ec,{children:r("finance.kpi.topSpender")}),(0,t.jsxs)(ed,{children:["€",rc.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ep,{children:rc.topMemberLabel})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(ec,{children:r("finance.kpi.busiestDay")}),(0,t.jsxs)(ed,{children:["€",rc.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ep,{children:r(`finance.weekday.${rc.busiestDowKey}`)})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(ec,{children:r("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(ed,{children:["€",rc.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ep,{children:0===rc.reimbursableTotal?"—":r("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(u.dO,{items:tm.map(e=>({...e})),onReorder:tx,onCycleSize:tg,accentColor:()=>P,labels:{moveLeft:r("finance.insights.panel.moveLeft"),moveRight:r("finance.insights.panel.moveRight"),cycleSize:r("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:tA,budget:Y.budget.monthlyBudget,height:180}),(0,t.jsxs)(nk,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nT,{children:["€",ie(ro)]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nT,{children:["€",ie(rs)]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nT,{style:{color:tI>0?N:P},children:[tI>0?"+":"",tI,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.byCategory")}),0===rr.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${c.w4.spacing.lg} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:rr,total:ra,size:110,centerLabel:ri.slice(0,3),centerValue:`€${ie(ra)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rr.map(e=>{let n=ir(e.id),r=e.color||c.w4.colors.mainTextMuted,a=(0,d.expensesForMember)((0,d.expensesForMonth)(Y.expenses,tC),nG).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eL,{children:[(0,t.jsx)(eE,{color:r}),(0,t.jsx)(eA,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eB,{children:["€",ie(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.title")}),0===tj.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tj.map((e,n)=>(0,t.jsxs)(e8,{itype:e.type,children:[(0,t.jsx)(e5,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:r(e.messageKey,tk(e.params))}),e.memberId&&(()=>{let n=Y.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=Y.familyMembers.indexOf(n);return(0,t.jsxs)(e7,{children:[(0,t.jsx)(u.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.anomalies")}),0===tv.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tv.map(e=>(0,t.jsxs)(e8,{itype:e.type,children:[(0,t.jsx)(e5,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:r(e.messageKey,tk(e.params))})}),e.snoozeKey&&(0,t.jsx)(e9,{type:"button",title:r("finance.insights.anomalies.dismiss"),"aria-label":r("finance.insights.anomalies.dismiss"),onClick:()=>{t$(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.smallMultiples.title")}),(0,t.jsx)(A.R,{expenses:Y.expenses,familyMembers:Y.familyMembers,getMemberColor:b.a8,t:r,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.reimbursables.tracker.title")}),(0,t.jsx)(E.p,{expenses:Y.expenses,familyMembers:Y.familyMembers,getMemberColor:b.a8,t:r,locale:i})]});case"analytics-budgets":return(0,t.jsx)(D.z,{});case"analytics-bills":return(0,t.jsx)(z.J,{});case"analytics-subscriptions":return(0,t.jsx)(S.n,{});case"analytics-goals":return(0,t.jsx)(F.f,{});case"analytics-recurring":return(0,t.jsx)(C.b,{});case"analytics-rules":return(0,t.jsx)(L.K,{});case"analytics-networth":return(0,t.jsx)(R.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.byMember.title")}),0===tY.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:c.w4.spacing.sm},children:tY.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(u.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(u.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:P},children:["€",ie(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:P,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:N},children:["€",ie(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:N,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nN,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),i4&&(0,t.jsx)(is,{finData:Y,activeMemberId:nG,locale:i,t:r,onClose:()=>i1(!1),onSubmit:i9}),i2&&(0,t.jsx)(io,{finData:Y,locale:i,t:r,onClose:()=>i6(!1),onSubmit:i7}),i3&&(0,t.jsx)(ia,{finData:Y,t:r,onClose:()=>i8(!1),onSubmit:i5}),(0,t.jsx)(w.S,{labelKey:e6,onUndo:()=>{nH()},onDismiss:()=>ns(null),t:r}),id.selectMode&&"expenses"===nZ&&(0,t.jsx)(M.S,{selectionCount:id.selectedIds.size,visibleIds:tF.map(e=>e.id),selectedIds:id.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:i,t:r,onCancel:id.exitSelectMode,onSelectAll:()=>id.selectAll(tF.map(e=>e.id)),onCategorise:t3,onDelete:t6,onMarkReimbursed:t8}),ih&&(0,t.jsx)(j.m,{t:r,onClose:()=>ib(!1)}),(0,t.jsx)(O.X,{open:nQ,onClose:()=>n0(!1),ariaLabel:r("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(u.YZ,{children:r("finance.settings.title")}),(0,t.jsx)(u.K0,{onClick:()=>n0(!1),title:r("finance.actions.settings"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"drawer-weekly-budget",children:r("finance.settings.weeklyBudget")}),(0,t.jsx)(nE,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(Y.budget.weeklyBudget),value:te,onChange:e=>tn(e.target.value)})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{htmlFor:"drawer-monthly-budget",children:r("finance.settings.monthlyBudget")}),(0,t.jsx)(nE,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(Y.budget.monthlyBudget),value:ti,onChange:e=>tt(e.target.value)})]}),(0,t.jsx)(u.$n,{variant:"primary",onClick:()=>{t2(),n0(!1)},style:{height:44},children:tr?r("finance.settings.saved"):r("finance.settings.save")})]})]})}),(0,t.jsx)(O.X,{open:n3,onClose:()=>{n8(!1),n7(null)},ariaLabel:r("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(u.YZ,{children:r("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!n5&&(0,t.jsx)(u.$n,{variant:"ghost",style:{height:28},onClick:()=>n7({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:r("finance.categories.new")}),(0,t.jsx)(u.K0,{onClick:()=>{n8(!1),n7(null)},title:r("finance.categories.cancel"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]})]}),n5&&(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.md,display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{children:r("finance.categories.labelEn")}),(0,t.jsx)(nA,{value:n5.labelEn,onChange:e=>n7(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{children:r("finance.categories.labelPt")}),(0,t.jsx)(nA,{value:n5.labelPt,onChange:e=>n7(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{children:r("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:n5.icon,onChange:e=>n7(n=>n&&{...n,icon:e.target.value}),style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:u.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)(nL,{children:r("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:n5.color,onChange:e=>n7(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nA,{value:n5.color,onChange:e=>n7(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",style:{height:28},onClick:()=>n7(null),children:r("finance.categories.cancel")}),(0,t.jsx)(u.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!n5.labelEn||!n5.labelPt)return;let e={id:(0,f.z)(),labelEn:n5.labelEn,labelPt:n5.labelPt,icon:n5.icon,color:n5.color,isCustom:!0},n=Y.categories??[];nq({...Y,categories:[...n,e]},"finance.undo.label.added"),n7(null)},children:r("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,u.n6)(e.icon)?(0,t.jsx)(u.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:r("finance.categories.builtIn")})]},e.id)),(Y.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,u.n6)(e.icon)?(0,t.jsx)(u.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)(u.K0,{title:r("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(Y.categories??[]).filter(n=>n.id!==e.id);nq({...Y,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(u.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(O.X,{open:null!==iE,onClose:()=>iA(null),ariaLabel:r("finance.recurring.makeRecurring"),maxWidth:360,children:iE&&(0,t.jsxs)(nu,{children:[(0,t.jsxs)(u.YZ,{children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nx,{children:r("finance.recurring.frequency")}),(0,t.jsx)(ng,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nf,{type:"button",active:iE.cadence===e,onClick:()=>iA(n=>n?{...n,cadence:e}:null),children:r(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nx,{children:r("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iE.firstDue,onChange:e=>iA(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",onClick:()=>iA(null),children:r("finance.recurring.cancel")}),(0,t.jsx)(u.$n,{variant:"primary",onClick:tG,disabled:!iE.firstDue,children:r("finance.recurring.confirm")})]})]})})]})},{}))}}]);