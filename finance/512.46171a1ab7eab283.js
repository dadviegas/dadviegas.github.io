"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),r=i(8997),o=i(7991),a=i(6859),s=i.n(a),l=i(2799),c=i(4764),d=i(9463),p=i(3759),m=i(789),u=i(5030),x=i(1496),g=i(8170),f=i(4041),h=i(948),b=i(719),y=i(2405),w=i(9546),j=i(5854),v=i(3616),$=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),F=i(8635),z=i(8501),C=i(1789),R=i(216),I=i(9419),D=i(341),L=i(9378),A=i(545),E=i(2167);let B="#7fb77e",O="#f85149",P=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,N=c.w4.suites.lab,W=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${P} 0.25s ease both;
  overflow: hidden;
`,Y=s().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,q=s().div`
  display: none;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,H=s().div`
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
`,U=s().div`
  flex: 1;
  min-width: 0;
`,K=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  flex-shrink: 0;
`,Z=s().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${c.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${N}`:"transparent"};
  background: ${({active:e})=>e?`${N}1f`:"transparent"};
  color: ${({active:e})=>e?N:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${N};
    outline-offset: 2px;
  }
`,_=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,J=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${N}`:"transparent"};
  background: ${({active:e})=>e?`${N}1f`:"transparent"};
  color: ${({active:e})=>e?N:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${N};
    outline-offset: 2px;
  }
`,G=s().div`
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
`;let V=s().div`
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
  animation: ${P} 0.2s ease;

  @media (min-width: ${c.w4.breakpoints.md}) {
    border-radius: ${c.w4.borderRadius.lg};
  }
`,X=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,Q=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${B};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,ee=s().button`
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
`,en=s().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,ei=s().input`
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
  border-left: 2px solid ${B};
  padding: ${c.w4.spacing.lg};
`;let et=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`;s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${B};
  padding: ${c.w4.spacing.md};
`;let er=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`,eo=s().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ea=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,es=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,el=s().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
`,ec=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ed=s().div`
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
`;let ep=s().div`
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
`;let em=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,eu=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  border-left: 2px solid ${B};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    border-left-color: ${B};
  }

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${c.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,ex=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,eg=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ef=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,eh=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${B};
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,eb=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ey=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ew=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,ej=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,ev=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,e$=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,ek=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eM=s().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,eT=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eS=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,eF=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,ez=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eC=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eR=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eI=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,eD=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eL=s().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eA=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eE="finance:list-density",eB="finance:quick-categories",eO="finance:forecast-months",eP="finance:active-member",eN="finance:insights-layout",eW="finance:overview-layout",eY=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eq=[{id:"overview-hero",size:"lg"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eH=s().input`
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
`,eU=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eK=s().li`
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
`,eZ=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,e_=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eJ=s().div`
  flex: 1;
  min-width: 0;
`,eG=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eV=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,eX=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,eQ=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e0=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${B}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?B:"#facc15"};
  white-space: nowrap;
`,e4=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${B}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?B:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${B}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,e1=s().button`
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
    color: ${B};
    background: ${B}1a;
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,e2=s().button`
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
    color: ${O};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,e6=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${B}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${B}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,e3=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?O:"warning"===e?"#facc15":"success"===e?B:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,e8=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,e5=s().button`
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
`;s()(eu)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let e7=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,e9=s().button`
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
`,ne=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,nn=s().input`
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
`,ni=s().select`
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
`,nt=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${B};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nr=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,no=(0,l.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,na=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${B};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,ns=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${B};
  animation: ${no} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nl=s().div`
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
  animation: ${P} 0.2s ease both;

  strong {
    color: ${c.w4.colors.mainText};
    font-weight: 600;
  }
`,nc=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?B:c.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${B}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${B}44`:c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${B}28`:c.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?B:c.w4.colors.borderStrong??c.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nd=s().button`
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
`,np=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  animation: ${P} 0.2s ease;
`,nm=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nu=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,nx=s().button`
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
`,ng=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${c.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?B:c.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?B:c.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${B};
    color: ${B};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nf=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nh=s().ul`
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
`,nb=s().li`
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
`,ny=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nw=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nj=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nv=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,n$=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nk=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nM=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nT=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nS=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,nF=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nz=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nC=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${B}; }
`,nR=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nI=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,nD=s().input`
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
`,nL=s().input`
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
`,nA=s().select`
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
`;let nE=s().button`
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
`,nB=s().div`
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
`;let nO=s().footer`
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
`,nP=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nN=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nW=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nY=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg} ${c.w4.borderRadius.lg} ${c.w4.borderRadius.md} ${c.w4.borderRadius.md};
  border-left: 2px solid ${B};
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
`,nq=s().div`
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,nH=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nU=s().button`
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
`,nK=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nZ=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n_=s().button`
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
`,nJ=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,nG=s().button`
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
`,nV=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nX=s().input`
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
`,nQ=s().select`
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
`,n0=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,n4=s().input`
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
`,n1=s().div`
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
`,n2=s().ul`
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
`,n6=s().li`
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,n3=s().div`
  position: relative;
`,n8=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function n5(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function n7(e){return Math.round(e).toLocaleString("pt-PT")}function n9(){return new Date().toISOString().slice(0,10)}function ie(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function ii(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function it({finData:e,t:n,onClose:i,onSubmit:r}){let a=(0,d.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[l,p]=(0,o.useState)(""),m=parseFloat(l.replace(",",".")),x=l.trim().length>0&&!Number.isNaN(m),g=x?m-a:0;return(0,t.jsx)(E.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nq,{children:[(0,t.jsxs)(nH,{children:[(0,t.jsx)(u.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nU,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&r(m)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:c.w4.spacing.sm,background:c.w4.colors.sidebarHover,borderRadius:c.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",n5(a)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:c.w4.colors.mainTextMuted},children:["€",n5(s)]})]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(nX,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:a.toFixed(2),value:l,onChange:e=>p(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:g>0?B:O,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:n5(g)}):n("finance.balance.deltaDown",{n:n5(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(n0,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function ir({finData:e,locale:n,t:i,onClose:r,onSubmit:a}){let[s,l]=(0,o.useState)(""),[d,p]=(0,o.useState)(n9()),[m,x]=(0,o.useState)(""),[g,h]=(0,o.useState)(""),[y,w]=(0,o.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&m.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(E.X,{open:!0,onClose:r,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nq,{children:[(0,t.jsxs)(nH,{children:[(0,t.jsx)(u.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nU,{type:"button",onClick:r,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&a({id:(0,f.z)(),amount:j,date:d,source:m.trim(),createdAt:Date.now(),...g?{goalId:g}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nK,{children:[(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(nX,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>l(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(nX,{id:"inc-date",type:"date",value:d,onChange:e=>p(e.target.value)})]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(nX,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(u.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(u.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n);return(0,t.jsxs)(u.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(nQ,{id:"inc-goal",value:g,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(n0,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:r,children:i("finance.income.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function io({finData:e,activeMemberId:n,locale:i,t:r,onClose:a,onSubmit:s}){let[l,p]=(0,o.useState)(""),[m,x]=(0,o.useState)(""),[g,h]=(0,o.useState)("other"),[y,w]=(0,o.useState)(n9()),[j,v]=(0,o.useState)("single"),[$,k]=(0,o.useState)(n),[M,T]=(0,o.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,o.useState)([]),[z,C]=(0,o.useState)(""),[R,I]=(0,o.useState)(!1),D=(0,o.useRef)(null);(0,o.useEffect)(()=>{m.trim()&&h((0,d.guessCategoryWithRules)(e,m))},[m,e]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a]);let L=parseFloat(l.replace(",","."))||0,A=M.length,B="split"===j&&A>0?L/A:L,O=L>0&&!!y&&("single"===j||"split"===j&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),I(!1))},N=(0,o.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),W=[{id:"shared",name:r("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(E.X,{open:!0,onClose:a,ariaLabel:r("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nY,{children:[(0,t.jsxs)(nH,{children:[(0,t.jsxs)(u.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,t.jsx)(nU,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!O)return;let t=m.trim(),r=Date.now(),o={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(o[e]=g)});let a=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,f.z)(),amount:L,date:y,categoryId:g,description:t||g,type:"daily",childId:"shared"===$?void 0:$,createdAt:r,...a}];else{let e=Math.round(L/A*100)/100,n=Math.round((L-e*A)*100)/100;i=M.map((i,o)=>({id:(0,f.z)(),amount:0===o?e+n:e,date:y,categoryId:g,description:t?`${t} (1/${A})`:g,type:"daily",childId:i,createdAt:r+o,...a}))}s(i,o,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nK,{children:[(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"exp-amount",children:r("finance.modal.amount")}),(0,t.jsx)(nX,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"exp-date",children:r("finance.modal.date")}),(0,t.jsx)(nX,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"exp-desc",children:r("finance.modal.description")}),(0,t.jsx)(nX,{id:"exp-desc",type:"text",placeholder:r("finance.modal.descPlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,t.jsx)(nQ,{id:"exp-cat",value:g,onChange:e=>h(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{children:r("finance.tags.label")}),(0,t.jsxs)(n3,{children:[(0,t.jsxs)(n1,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(u.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":r("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(n4,{ref:D,type:"text",value:z,placeholder:0===S.length?r("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),I(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&I(!1)},onBlur:()=>{z.trim()&&P(z),setTimeout(()=>I(!1),150)},onFocus:()=>I(!0),"aria-label":r("finance.tags.label")})]}),R&&N.length>0&&(0,t.jsx)(n2,{children:N.map(e=>(0,t.jsxs)(n6,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{children:r("finance.modal.assign")}),(0,t.jsxs)(nZ,{role:"tablist",children:[(0,t.jsx)(n_,{type:"button",active:"single"===j,onClick:()=>v("single"),children:r("finance.modal.member")}),(0,t.jsx)(n_,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:r("finance.modal.split")})]}),"single"===j?(0,t.jsx)(nJ,{style:{marginTop:c.w4.spacing.sm},children:W.map(e=>(0,t.jsxs)(nG,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nJ,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(nG,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&L>0&&(0,t.jsx)(nV,{style:{marginTop:c.w4.spacing.xs},children:r("finance.modal.splitEach",{n:A,amount:n5(B)})})]})]}),(0,t.jsxs)(n0,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:a,children:r("finance.member.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!O,children:r("finance.quickAdd.add")})]})]})]})})}function ia({exp:e,finData:n,locale:i,t:r,onDelete:o,onClone:a,onToggleReimbursed:s,compact:l=!1,selectMode:p=!1,selected:m=!1,onToggleSelect:x,longPressHandlers:g}){let f=ii(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),y=h>=0?n.familyMembers[h]:null,w=y?(0,b.a8)(y,h):c.w4.colors.mainTextMuted,j=g?g(e.id):null,v=n=>{p&&x&&"INPUT"!==n.target.tagName&&x(e.id)},$=e.isReimbursable&&!p?s?(0,t.jsx)(e4,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e0,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,k=!p&&a?(0,t.jsx)(e1,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),a(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,M=p?null:(0,t.jsx)(e2,{className:"delete-btn",type:"button",onClick:()=>o(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),T=p?(0,t.jsx)(eH,{type:"checkbox",checked:m,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,S=p?{background:m?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:m?"1px solid rgba(127,183,126,0.35)":"none"}:{};return l?(0,t.jsxs)(eK,{compact:!0,style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eZ,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(eJ,{children:(0,t.jsxs)(eG,{style:{display:"flex",alignItems:"center",gap:6},children:[y?(0,t.jsx)(u.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:13,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,d.categoryLabel)(f,i)})]})}),(0,t.jsxs)(eX,{children:[$,(0,t.jsxs)(eQ,{children:["−€",n5(e.amount)]}),k,M]})]}):(0,t.jsxs)(eK,{style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(e_,{color:f.color,children:(0,u.n6)(f.icon)?(0,t.jsx)(u.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(eJ,{children:[(0,t.jsx)(eG,{children:e.description||(0,d.categoryLabel)(f,i)}),(0,t.jsxs)(eV,{children:[y?(0,t.jsx)(u.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:11,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,d.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:ie(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(n8,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(eX,{children:[$,"recurring"===e.type&&(0,t.jsx)(e0,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(eQ,{children:["−€",n5(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),k,M]})]})}let is=document.getElementById("root");if(!is)throw Error("Root element #root not found");(0,r.createRoot)(is).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,g.Ym)(),r=(0,o.useMemo)(()=>(0,g.Nx)(i,h.A),[i]),{data:a,loaded:s,save:l}=(0,d.useFinance)(),P=a??{...d.EMPTY_FINANCE_DATA},N=(0,o.useMemo)(()=>(0,d.recentMerchants)(P.expenses,20).slice(0,6),[P.expenses]),{canUndo:eH,latestLabelKey:e0,undo:e4}=(0,d.useUndo)(),[e1,no]=(0,o.useState)(null),nY=(0,o.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:P,labelKey:n,ts:Date.now()}),no(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await l(e)},[P,l]),nq=(0,o.useCallback)(async()=>{let e=e4();e&&(no("finance.undo.label.reverted"),await l(e),setTimeout(()=>no(null),2500))},[e4,l]),[nH,nU]=(0,o.useState)("overview"),[nK,nZ]=(0,o.useState)(()=>(0,d.thisMonthKey)()),[n_,nJ]=(0,o.useState)("shared");(0,o.useEffect)(()=>{(0,c.PL)(eP).then(e=>{e&&nJ(e)})},[]);let nG=(0,o.useCallback)(e=>{nJ(e),(0,c.Is)(eP,e)},[]),[nV,nX]=(0,o.useState)(!1),[nQ,n0]=(0,o.useState)([]),[n4,n1]=(0,o.useState)(!1),[n2,n6]=(0,o.useState)(!1),[n3,n8]=(0,o.useState)(null),is=+(nQ.length>0)+ +!!n4,il=(0,T.E)();(0,o.useEffect)(()=>{"expenses"!==nH&&il.selectMode&&il.exitSelectMode()},[nH]);let{range:ic,setRange:id}=(0,p.H)("month"),ip=(0,o.useRef)(null),im=(0,o.useRef)(null),iu=(0,o.useRef)(null),[ix,ig]=(0,o.useState)(!1),[ih,ib]=(0,o.useState)(""),[iy,iw]=(0,o.useState)(!1),[ij,iv]=(0,o.useState)(""),i$=(0,o.useRef)(null),[ik,iM]=(0,o.useState)(""),[iT,iS]=(0,o.useState)("shared"),[iF,iz]=(0,o.useState)(null),[iC,iR]=(0,o.useState)(!1),iI=(0,o.useRef)(null),[iD,iL]=(0,o.useState)(null),[iA,iE]=(0,o.useState)("EUR"),[iB,iO]=(0,o.useState)(!1),[iP,iN]=(0,o.useState)(!1),iW=(0,A.x)(),iY=(0,o.useRef)(null),iq=(0,o.useRef)(!1),[iH,iU]=(0,o.useState)(!1),[iK,iZ]=(0,o.useState)(-1),i_=(0,o.useRef)(null),[iJ,iG]=(0,o.useState)(""),[iV,iX]=(0,o.useState)(null);(0,o.useEffect)(()=>{(0,c.PL)(eB).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&iX(n)}catch{}})},[]);let[iQ,i0]=(0,o.useState)(!1),[i4,i1]=(0,o.useState)(!1),[i2,i6]=(0,o.useState)(!1),i3=(0,o.useCallback)(e=>{let n=e-(0,d.computeCurrentBalance)(P);if(0===n)return void i6(!1);let i=(P.budget.openingBalance??0)+n;nY({...P,budget:{...P.budget,openingBalance:i}},"finance.undo.label.edited"),i6(!1)},[P,nY]),i8=(0,o.useCallback)(e=>{nY({...P,income:[e,...P.income]},"finance.undo.label.added"),i1(!1),iI.current&&clearTimeout(iI.current),iR(!0),iI.current=setTimeout(()=>iR(!1),2e3)},[P,nY]),i5=(0,o.useCallback)((e,n,i,t)=>{let r=i?[i,...P.recentDescriptions].filter(Boolean).slice(0,20):P.recentDescriptions,o={...P,expenses:[...e,...P.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)o=(0,d.addRecentTag)(o,e);nY(o,"finance.undo.label.added"),i0(!1),iI.current&&clearTimeout(iI.current),iR(!0),iI.current=setTimeout(()=>iR(!1),2e3)},[P,nY]),[i7,i9]=(0,o.useState)(""),[te,tn]=(0,o.useState)(""),[ti,tt]=(0,o.useState)(!1),[tr,to]=(0,o.useState)("comfortable");(0,o.useEffect)(()=>{(0,c.PL)(eE).then(e=>{("compact"===e||"comfortable"===e)&&to(e)})},[]),(0,o.useCallback)(()=>{let e="comfortable"===tr?"compact":"comfortable";to(e),(0,c.Is)(eE,e)},[tr]);let[ta,ts]=(0,o.useState)(3);(0,o.useEffect)(()=>{(0,c.PL)(eO).then(e=>{"6"===e?ts(6):"12"===e&&ts(12)})},[]);let tl=(0,o.useCallback)(e=>{ts(e),(0,c.Is)(eO,String(e))},[]),tc=(0,o.useMemo)(()=>(0,d.thisMonthKey)(),[]),[td,tp]=(0,o.useState)(eY);(0,o.useEffect)(()=>{(0,c.PL)(eN).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eY.filter(e=>!i.has(e.id))];tp(t)}catch{}})},[]);let tm=(0,o.useCallback)((e,n)=>{tp(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let o=[...i];return[o[t],o[r]]=[o[r],o[t]],(0,c.Is)(eN,JSON.stringify(o)),o})},[]),tu=(0,o.useCallback)(e=>{tp(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,o=[...n];return o[i]={...o[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(eN,JSON.stringify(o)),o})},[]),[tx,tg]=(0,o.useState)(eq);(0,o.useEffect)(()=>{(0,c.PL)(eW).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eq.filter(e=>!i.has(e.id))];tg(t)}catch{}})},[]);let tf=(0,o.useCallback)((e,n)=>{tg(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let o=[...i];return[o[t],o[r]]=[o[r],o[t]],(0,c.Is)(eW,JSON.stringify(o)),o})},[]),th=(0,o.useCallback)(e=>{tg(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,o=[...n];return o[i]={...o[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(eW,JSON.stringify(o)),o})},[]),tb=(0,o.useMemo)(()=>(0,d.computeWeeklyStatus)(P),[P]);(0,o.useMemo)(()=>(0,d.computeMonthlySummary)(P,nK),[P,nK]);let ty=(0,o.useMemo)(()=>(0,d.generateInsightsWithMembers)(P),[P]),{insights:tw,dismiss:tj}=(0,d.useFinanceAnomalies)(),tv=(0,o.useMemo)(()=>(0,d.availableMonths)(P),[P]),t$=(0,o.useMemo)(()=>(0,d.filterExpensesByRange)(P.expenses,ic,nK),[P.expenses,ic,nK]),tk=(0,o.useMemo)(()=>(0,d.filterIncomeByRange)(P.income,ic,nK),[P.income,ic,nK]),tM=(0,o.useMemo)(()=>{let e=(0,d.expensesForMember)(t$,n_);return nQ.length>0&&(e=e.filter(e=>nQ.includes(e.categoryId))),n4&&(e=e.filter(e=>!0===e.isReimbursable)),e},[t$,n_,nQ,n4]),tT=(0,o.useMemo)(()=>(0,d.monthlyTotalByMember)(P,n_,tc),[P,n_,tc]),tS=(0,o.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tc),[tc]),tF=(0,o.useMemo)(()=>(0,d.monthlyTotalByMember)(P,n_,tS),[P,n_,tS]),tz=(0,o.useMemo)(()=>0===tF?0:Math.round((tT-tF)/tF*100),[tT,tF]),tC=(0,o.useMemo)(()=>{if("all"===n_)return r("finance.member.all");if("shared"===n_)return r("finance.hero.family");let e=P.familyMembers.find(e=>e.id===n_);return e?.name??r("finance.hero.family")},[n_,P.familyMembers,r]),tR=(0,o.useMemo)(()=>{if("all"===n_||"shared"===n_)return c.w4.colors.mainTextMuted;let e=P.familyMembers.findIndex(e=>e.id===n_);return -1===e?B:(0,b.a8)(P.familyMembers[e],e)},[n_,P.familyMembers]),tI=(0,o.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,d.expensesForMember)(P.expenses,n_).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[P.expenses,n_]),tD=(0,o.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),o=(0,d.expensesForMember)(t,n),a={};for(let e of o)a[e.categoryId]=(a[e.categoryId]??0)+e.amount;let s=Object.values(a).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(a).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:ii(e).color})),over:s>r?s-r:0}})})(P,n_),[P,n_]);(0,o.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let o=new Date(i);o.setDate(i.getDate()-r);let a=o.toISOString().slice(0,10),s=a.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===a),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:c,exp:l})}return t})(P,n_),[P,n_]);let tL=(0,o.useMemo)(()=>(0,d.forecastCashFlow)(P,ta),[P,ta]),tA=(0,o.useMemo)(()=>(0,d.firstNegativeDay)(tL),[tL]),tE=(0,o.useMemo)(()=>{let e,n;return e=new Date,n=P.expenses.length>0?P.expenses.reduce((e,n)=>e+n.amount,0)/P.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let o=r.toISOString().slice(0,10),a=(0,d.expensesForMember)(P.expenses.filter(e=>e.date===o),n_).reduce((e,n)=>e+n.amount,0);if(0===a)return 0;let s=a/n;return s<.5?1:s<1?2:s<2?3:4})},[P,n_]),tB=(0,o.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(P.expenses,n_)),[P.expenses,n_]),tO=(0,o.useMemo)(()=>{let e=[];return e.push({key:"shared",label:r("finance.income.member.shared"),color:c.w4.colors.mainTextMuted,incomeSpk:(0,d.incomeSparkline)(P.income,"shared"),spendSpk:(0,d.memberSparkline)(P.expenses,"shared"),incomeTotal:(0,d.incomeForMember)(P.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(P.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(P.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(P.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(P,"shared",6)}),P.familyMembers.forEach((n,i)=>{let t=(0,b.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,d.incomeSparkline)(P.income,n.id),spendSpk:(0,d.memberSparkline)(P.expenses,n.id),incomeTotal:(0,d.incomeForMember)(P.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,d.expensesForMember)(P.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,d.incomeForMember)(P.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,d.expensesForMember)(P.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,d.memberNetByMonth)(P,n.id,6)})}),e},[P,r]),tP=(0,o.useMemo)(()=>{let e=Object.entries((0,d.incomeByMember)(P.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:r("finance.income.member.shared"),value:n,color:c.w4.colors.mainTextMuted};let i=P.familyMembers.findIndex(n=>n.id===e),t=P.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,b.a8)(t,i):c.w4.colors.accent}})},[P,r]),tN=(0,o.useMemo)(()=>tP.reduce((e,n)=>e+n.value,0),[tP]),tW=tb.budget>0?tb.spent/tb.budget*100:0,tY=P.budget.monthlyBudget>0?tT/P.budget.monthlyBudget*100:0,tq=(0,o.useMemo)(()=>{let e=iy&&ij.trim()?ij.trim():(0,d.parseQuickInput)(ih,P.familyMembers)?.description;return e?(0,d.guessCategoryWithRules)(P,e):"other"},[ih,iy,ij,P]),tH=ik||iJ||tq,tU=(0,o.useMemo)(()=>(0,d.parseRecurringHint)(ih),[ih]);(0,o.useEffect)(()=>{let e=(0,d.parseQuickInput)(ih,P.familyMembers);e?.memberId&&iS(e.memberId)},[ih,P.familyMembers]);let tK=(0,o.useCallback)(()=>{let e=(0,d.parseQuickInput)(ih,P.familyMembers),n=(0,d.parseRecurringHint)(ih);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),o=String(i.getDate()).padStart(2,"0");iL({amount:e.amount,description:e.description||(tH??"other"),categoryId:tH||"other",cadence:n.cadence,firstDue:`${t}-${r}-${o}`})},[ih,P.familyMembers,tH]),tZ=(0,o.useCallback)(()=>{if(!iD)return;let e=new Date(iD.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iD.description,amount:iD.amount,categoryId:iD.categoryId,cadence:iD.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iT?iT:void 0};nY({...P,recurringRules:[...P.recurringRules??[],n]},"finance.undo.label.added"),iL(null),ib(""),iM(""),iG(""),iI.current&&clearTimeout(iI.current),iR(!0),iI.current=setTimeout(()=>iR(!1),2e3)},[iD,P,iT,nY]),t_=(0,o.useCallback)(async e=>{let n;e.preventDefault();let i=iy&&ij.trim()?ij.trim():void 0,t=(0,d.parseQuickInput)(ih,P.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let r=tH||"other",o=t.memberId??("shared"!==iT?iT:void 0),a=t.tags??[],s=t.description?(0,d.normalizeMerchant)(t.description):void 0,l=n9(),p=t.amount;if("EUR"!==iA){iN(!0),iO(!1);let e=await (0,d.convertToEUR)({amount:t.amount,code:iA,date:l});if(iN(!1),!e)return void iO(!0);p=e.eur,n={code:iA,rate:e.rate,original:t.amount}}let m={id:(0,f.z)(),amount:p,date:l,categoryId:r,description:t.description||r,type:"daily",childId:o,createdAt:Date.now(),...a.length>0?{tags:a}:{},...s?{merchant:s}:{},...n?{fx:n}:{}};iU(!1),iO(!1);let u={...P.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=r)});let x=[t.description||"",...P.recentDescriptions].filter(Boolean).slice(0,20),g=[m,...P.expenses],h={...P,expenses:g,categoryHints:u,recentDescriptions:x};for(let e of a)h=(0,d.addRecentTag)(h,e);nY(h,"finance.undo.label.added");let b=(0,$.j)(g);iX(b),(0,c.Is)(eB,JSON.stringify(b)),ib(""),iv(""),iw(!1),iM(""),iG(""),iz(null),iI.current&&clearTimeout(iI.current),iR(!0),iI.current=setTimeout(()=>iR(!1),2e3)},[ih,iy,ij,tH,iT,iA,P,nY]),tJ=(0,o.useCallback)(e=>{(0,m.K)([10,50,10]);let n=(0,d.parseQuickInput)(e,P.familyMembers);if(n){let e=ik||iJ||(n.description?(0,d.guessCategoryWithRules)(P,n.description):"other"),i=n.memberId??("shared"!==iT?iT:void 0),t=n.tags??[],r={id:(0,f.z)(),amount:n.amount,date:n9(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},o={...P.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(o[n]=e)});let a=[n.description||"",...P.recentDescriptions].filter(Boolean).slice(0,20),s={...P,expenses:[r,...P.expenses],categoryHints:o,recentDescriptions:a};for(let e of t)s=(0,d.addRecentTag)(s,e);nY(s,"finance.undo.label.added");let l=(0,$.j)([r,...P.expenses]);iX(l),(0,c.Is)(eB,JSON.stringify(l)),ib(""),iM(""),iG(""),iI.current&&clearTimeout(iI.current),iR(!0),iI.current=setTimeout(()=>iR(!1),2e3)}else ib(e),im.current?.focus()},[P,ik,iJ,iT,nY]),tG=(0,o.useCallback)(e=>{nY({...P,expenses:P.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[P,nY]),tV=(0,o.useCallback)(e=>{let n=P.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,f.z)(),date:n9(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nY({...P,expenses:[i,...P.expenses]},"finance.undo.label.added")},[P,nY]),tX=(0,o.useCallback)(e=>{nY({...P,income:P.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[P,nY]),tQ=(0,o.useCallback)(e=>{nY({...P,expenses:P.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[P,nY]),t0=(0,o.useCallback)(()=>{let e=parseFloat(i7)||P.budget.weeklyBudget,n=parseFloat(te)||P.budget.monthlyBudget;l({...P,budget:{...P.budget,weeklyBudget:e,monthlyBudget:n}}),tt(!0),setTimeout(()=>tt(!1),2e3)},[i7,te,P,l]),t4=(0,o.useCallback)(()=>{let e=il.selectedIds;0!==e.size&&(nY({...P,expenses:P.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),il.exitSelectMode())},[il,P,nY]),t1=(0,o.useCallback)(e=>{let n=il.selectedIds;0!==n.size&&(nY({...P,expenses:P.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),il.exitSelectMode())},[il,P,nY]),t2=(0,o.useCallback)(()=>{let e=il.selectedIds;0!==e.size&&(nY({...P,expenses:P.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),il.exitSelectMode())},[il,P,nY]),t6=(0,o.useMemo)(()=>["shared",...P.familyMembers.map(e=>e.id)],[P.familyMembers]);(0,v.K)({quickAddInputRef:im,monthSelectRef:iu,memberIds:t6,activeMemberId:n_,onSelectMember:nG,onSetTab:e=>nU(e),expenseModalOpen:iQ,onOpenExpenseModal:()=>i0(!0),shortcutsOpen:ix,onToggleShortcuts:()=>ig(e=>!e)});let t3=[{value:"week",label:r("finance.range.pill.7d")},{value:"month",label:r("finance.range.pill.month")},{value:"3m",label:r("finance.range.pill.3m")},{value:"6m",label:r("finance.range.pill.6m")},{value:"1y",label:r("finance.range.pill.year")}],t8=Math.floor(tT).toLocaleString("pt-PT"),t5=(tT%1).toFixed(2).slice(1),t7=(0,o.useMemo)(()=>{if(0===(P.goals??[]).length)return null;let e=(0,d.recomputeGoalCurrents)(P);return{onTrack:e.goals.filter(e=>"behind"!==(0,d.goalStatus)(e)).length,total:e.goals.length}},[P]),t9=(()=>{let[e,n]=tc.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),re=(0,t.jsx)(b.TA,{data:P,activeMemberId:n_,onSelectMember:nG,onSaveData:l,t:r,locale:i}),rn=(0,o.useMemo)(()=>{let e={};for(let n of tM)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:ii(e).color}))},[tM]),ri=rn.reduce((e,n)=>e+n.value,0),rt=(0,o.useMemo)(()=>tD.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tD]),rr=tD.length>0?rt/tD.length:0,ro=tD.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>P.budget.monthlyBudget).length,ra=(0,o.useMemo)(()=>{if(0===tM.length)return null;let e=tM.reduce((e,n)=>n.amount>e.amount?n:e,tM[0]),n={};for(let e of tM){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?P.familyMembers.find(e=>e.id===i[0]):void 0,o=t?.name??r("finance.member.shared"),a=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tM){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tM.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:o,topMemberAmt:a,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tM,P.familyMembers,r]);return(0,t.jsxs)(c.PE,{title:r("finance.appTitle"),sidebar:re,topBarRight:e,activeId:n_,children:[(0,t.jsxs)(W,{children:[(0,t.jsx)(Y,{children:(0,t.jsx)(b.jb,{data:P,activeMemberId:n_,onSelectMember:nG,t:r,locale:i})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(U,{children:(0,t.jsx)("div",{role:"tablist","aria-label":r("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:r("finance.tab.overview"),expenses:r("finance.tab.expenses"),insights:r("finance.tab.insights")},i={overview:0,expenses:tM.length,insights:ty.length}[e];return(0,t.jsxs)(Z,{type:"button",role:"tab","aria-selected":nH===e,active:nH===e,onClick:()=>nU(e),children:[n[e],i>0&&(0,t.jsxs)(_,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(K,{children:[(0,t.jsxs)(u.ms,{align:"right",trigger:(0,t.jsx)(u.$n,{variant:is>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"filter",size:13,"aria-hidden":!0}),children:is>0?r("finance.filters.activeCount",{n:is}):r("finance.actions.filters")}),children:[(0,t.jsx)(u.o_,{children:r("finance.filters.member")}),["shared",...P.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?r("finance.hero.family"):P.familyMembers.find(n=>n.id===e)?.name??e,i=e===n_;return(0,t.jsx)(u.tJ,{onClick:()=>nG(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(u.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.o_,{children:r("finance.filters.category")}),(0,t.jsx)(u.tJ,{onClick:()=>n0([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===nQ.length&&(0,t.jsx)(u.In,{name:"check",size:12}),nQ.length>0&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.allCategories")]})}),d.DEFAULT_CATEGORIES.map(e=>{let n=nQ.includes(e.id);return(0,t.jsx)(u.tJ,{onClick:()=>n0(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(u.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,d.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.tJ,{onClick:()=>n1(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n4&&(0,t.jsx)(u.In,{name:"check",size:12}),!n4&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.reimbursableOnly")]})}),is>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.tJ,{onClick:()=>{n0([]),n1(!1)},children:r("finance.filters.reset")})]})]}),(0,t.jsx)(u.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>n6(!0),children:r("finance.actions.categories")}),"expenses"===nH&&(0,t.jsx)(u.$n,{variant:il.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{il.selectMode?il.exitSelectMode():il.enterSelectMode()},children:r("finance.bulk.select")}),(0,t.jsx)(u.K0,{onClick:()=>nX(!0),title:r("finance.actions.settings"),"aria-label":r("finance.actions.settings"),active:nV,children:(0,t.jsx)(u.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(q,{children:(0,t.jsx)(u.K0,{onClick:()=>ig(e=>!e),title:r("finance.shortcuts.title"),"aria-label":r("finance.shortcuts.title"),active:ix,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(G,{"aria-label":r("finance.range.label"),children:t3.map(({value:e,label:n})=>(0,t.jsx)(J,{type:"button",active:ic===e,onClick:()=>{id(e),"month"===e&&nZ(tc)},"aria-pressed":ic===e,children:n},e))}),"month"===ic&&P.expenses.length>0&&(0,t.jsx)(k.f,{data:P,selectedMonth:nK,onSelectMonth:nZ,locale:i,t:r}),(0,t.jsxs)(ep,{children:["overview"===nH&&(0,t.jsxs)(em,{children:[(0,t.jsxs)(Q,{ref:ip,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:r("finance.quickAdd.title")}),(0,t.jsxs)(nt,{visible:iC&&!iW.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",r("finance.quickAdd.added")]}),iW.listening&&(0,t.jsxs)(na,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(ns,{}),r("finance.voice.listening")]}),(0,t.jsxs)(u.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i1(!0),children:["+ ",r("finance.quickAdd.addIncome")]}),(0,t.jsxs)(u.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i6(!0),children:["⚖ ",r("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:t_,"aria-label":r("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(e7,{children:[{id:"shared",name:r("finance.member.shared"),role:"shared",color:void 0},...P.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(P.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(e9,{type:"button",active:iT===e.id,color:i,onClick:()=>iS(e.id),children:[(0,t.jsx)(u.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(ne,{children:[(0,t.jsxs)(nf,{children:[(0,t.jsx)(nn,{ref:im,type:"text",placeholder:iy?r("finance.quickAdd.amountOnlyPlaceholder"):r("finance.quickAdd.placeholder"),value:ih,onChange:e=>{ib(e.target.value),iM(""),iU(N.length>0),iZ(-1)},onFocus:()=>{N.length>0&&!ih.trim()&&iU(!0)},onBlur:()=>{setTimeout(()=>iU(!1),150)},onKeyDown:e=>{if(iH&&0!==N.length)if("ArrowDown"===e.key)e.preventDefault(),iZ(e=>Math.min(e+1,N.length-1));else if("ArrowUp"===e.key)e.preventDefault(),iZ(e=>Math.max(e-1,-1));else if("Enter"===e.key&&iK>=0){e.preventDefault();let n=N[iK];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(ih);ib(e?ih.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iM(""),iU(!1),iZ(-1)}}else"Escape"===e.key&&(iU(!1),iZ(-1))},"aria-label":r("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":iH&&N.length>0,autoComplete:"off",inputMode:"decimal"}),iH&&N.length>0&&(0,t.jsxs)(nh,{ref:i_,role:"listbox","aria-label":r("finance.merchant.recent"),children:[(0,t.jsx)(nj,{role:"presentation",children:r("finance.merchant.recent")}),N.map((e,n)=>(0,t.jsxs)(nb,{role:"option","aria-selected":iK===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(ih);ib(i?ih.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iM(""),iU(!1),iZ(-1),im.current?.focus()},children:[(0,t.jsx)(ny,{children:e.merchant}),(0,t.jsxs)(nw,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(ee,{type:"button","aria-pressed":iy,"aria-label":iy?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iy;iw(e),e&&requestAnimationFrame(()=>i$.current?.focus())},children:[(0,t.jsx)(u.In,{name:iy?"close":"plus",size:11}),iy?r("finance.quickAdd.descToggle.hide"):r("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(ni,{value:ik||tq,onChange:e=>{let n=e.target.value,i=ik||tq;iM(n);let t=iy&&ij.trim()?ij.trim():(0,d.parseQuickInput)(ih,P.familyMembers)?.description;t&&iz((0,d.proposeRuleFromOverride)(i,n,t))},"aria-label":r("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(ni,{value:iA,onChange:e=>{iE(e.target.value),iO(!1)},"aria-label":r("finance.currency.label"),style:{maxWidth:72},children:d.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!ih.trim()||iP,children:iP?r("finance.currency.converting"):r("finance.quickAdd.add")}),iW.supported&&(0,t.jsx)(ng,{type:"button","aria-label":r("finance.voice.listening"),"aria-pressed":iW.listening,active:iW.listening,onPointerDown:()=>{iY.current=window.setTimeout(()=>{iY.current=null,iq.current=!0,(0,m.K)(30),iW.listening?iW.stop():iW.start(tJ)},500)},onPointerUp:()=>{null!==iY.current&&(clearTimeout(iY.current),iY.current=null,iq.current||((0,m.K)(10),iW.listening?iW.stop():iW.start(tJ))),iq.current=!1},onPointerCancel:()=>{null!==iY.current&&(clearTimeout(iY.current),iY.current=null),iq.current=!1},children:(0,t.jsx)(u.In,{name:"mic",size:16})})]}),(0,t.jsx)(en,{visible:iy,children:(0,t.jsx)(ei,{ref:i$,type:"text",placeholder:r("finance.quickAdd.descPlaceholder"),maxLength:80,value:ij,onChange:e=>iv(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iw(!1),im.current?.focus())},"aria-label":r("finance.quickAdd.descPlaceholder"),tabIndex:iy?0:-1})}),(0,t.jsx)($.J,{expenses:P.expenses,storedOrder:iV,lockedCategoryId:iJ,onToggle:e=>iG(n=>n===e?"":e),locale:i,groupLabel:r("finance.quickAdd.frequentCategories")}),iF&&(0,t.jsxs)(nl,{children:[(0,t.jsxs)("span",{children:[r("finance.categoryRules.alwaysCategorize",{match:iF.match})," ",(0,t.jsx)("strong",{children:(n=d.DEFAULT_CATEGORIES.find(e=>e.id===iF.categoryId))?(0,d.categoryLabel)(n,i):iF.categoryId}),"?"]}),(0,t.jsx)(nc,{type:"button",accent:!0,onClick:()=>{P&&iF&&(nY({...P,categoryRules:[iF,...P.categoryRules??[]]},"finance.undo.label.added"),iz(null))},children:r("finance.categoryRules.propose")}),(0,t.jsx)(nc,{type:"button",onClick:()=>iz(null),children:r("finance.categoryRules.dismiss")})]}),iB&&(0,t.jsx)(nr,{style:{color:O},role:"alert",children:r("finance.currency.fxFailed")}),tU&&(0,d.parseQuickInput)(ih,P.familyMembers)&&(0,t.jsxs)(nd,{type:"button",onClick:tK,"aria-label":r("finance.recurring.makeRecurring"),children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsx)(nr,{children:r("finance.quickAdd.hint")})]})]}),(0,t.jsx)(u.dO,{items:tx.map(e=>({...e})),onReorder:tf,onCycleSize:th,accentColor:()=>B,labels:{moveLeft:r("finance.overview.panel.moveLeft"),moveRight:r("finance.overview.panel.moveRight"),cycleSize:r("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(eh,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eb,{children:[(0,t.jsxs)(ey,{children:[r("finance.hero.spentIn")," ",t9," \xb7 ",tC]}),(0,t.jsxs)(ew,{children:[(0,t.jsx)(ej,{children:"€"}),(0,t.jsx)(ev,{children:t8}),(0,t.jsx)(e$,{children:t5})]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(x.Ru,{value:tz,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[r("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(tS,i)," \xb7 €",n7(tF)]})]}),tI.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:tI,accent:tR,width:280,height:34})}),null!==t7&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:t7.onTrack===t7.total?"#7fb77e":c.w4.colors.mainTextMuted},children:r("finance.goals.hero",{on:t7.onTrack,total:t7.total})})]}),(0,t.jsx)(eM,{children:(0,t.jsxs)(eT,{children:[(0,t.jsxs)(eS,{children:[(0,t.jsx)(eF,{children:r("finance.budget.weekly")}),(0,t.jsxs)(ez,{children:["€",n7(tb.spent)," ",(0,t.jsxs)(eC,{children:["/ €",tb.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:tW,over:tW>100?tW-100:0}),(0,t.jsxs)(eR,{children:[(0,t.jsxs)("span",{children:[Math.round(tW),"% ",r("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tb.remaining<0?O:B},children:tb.remaining>0?`€${n7(tb.remaining)} ${r("finance.budget.remaining")}`:`€${n7(Math.abs(tb.remaining))} ${r("finance.budget.over")}`})]}),(0,t.jsxs)(eS,{style:{marginTop:14},children:[(0,t.jsx)(eF,{children:r("finance.budget.monthly")}),(0,t.jsxs)(ez,{children:["€",n7(tT)," ",(0,t.jsxs)(eC,{children:["/ €",P.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:tY,over:tY>100?tY-100:0}),(0,t.jsxs)(eR,{children:[(0,t.jsxs)("span",{children:[Math.round(tY),"% ",r("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[r("finance.budget.projected")," €",n7(tT+(tb.projectedTotal-tb.spent))]})]})]})})]});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ex,{children:[(0,t.jsx)(eg,{children:r("finance.charts.sixMonths")}),(0,t.jsx)(ef,{children:(0,t.jsx)(nP,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nN,{children:[(0,t.jsx)(nW,{color:e.color}),(0,d.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:tD,budget:P.budget.monthlyBudget,height:200}),(0,t.jsxs)(nv,{children:[(0,t.jsxs)(n$,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nk,{children:["€",n7(rt)]})]}),(0,t.jsxs)(n$,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nk,{children:["€",n7(rr)]})]}),(0,t.jsxs)(n$,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nk,{children:[ro," / ",tD.length]})]}),(0,t.jsxs)(n$,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nk,{style:{color:tz>0?O:B},children:[tz>0?"+":"",tz,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ex,{children:[(0,t.jsx)(eg,{children:r("finance.charts.byCategory")}),(0,t.jsx)(nE,{type:"button",onClick:()=>nU("insights"),children:r("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:rn,total:ri,size:110,centerLabel:t9.slice(0,3),centerValue:`€${n7(ri)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rn.map(e=>{let n=ii(e.id),r=(0,d.expensesForMember)((0,d.expensesForMonth)(P.expenses,tS),n_).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eI,{children:[(0,t.jsx)(eD,{color:e.color}),(0,t.jsx)(eL,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eA,{children:["€",n7(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ex,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(eg,{children:r("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.forecast.sub",{n:ta})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(J,{type:"button",active:ta===e,onClick:()=>tl(e),"aria-pressed":ta===e,children:r(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(I.b,{forecast:tL,firstNegDate:tA,t:r,locale:i,height:170})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ex,{children:(0,t.jsx)(eg,{children:r("finance.charts.heatmap")})}),(0,t.jsx)(x.RT,{data:tE,locale:i}),(0,t.jsxs)(nM,{children:[(0,t.jsx)("span",{children:r("finance.charts.less")}),(0,t.jsx)(nT,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:r("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(et,{children:(0,t.jsx)(u.YZ,{children:r("finance.heatmap.title")})}),(0,t.jsx)(y.D,{matrix:tB,locale:i,t:r})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ex,{children:(0,t.jsx)(eg,{children:r("finance.charts.thisWeek")})}),(0,t.jsxs)(nS,{children:[(0,t.jsxs)(nF,{children:[(0,t.jsxs)(nz,{children:["€",n7(tb.spent)]}),(0,t.jsxs)(eC,{children:["/ €",tb.budget]})]}),(0,t.jsx)(x.kl,{spent:tb.spent,budget:tb.budget}),(0,t.jsxs)(nC,{children:[(0,t.jsx)("span",{children:r("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:r("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(u.YZ,{children:r("finance.recent.title")}),tM.length>8&&(0,t.jsx)(nE,{type:"button",onClick:()=>nU("expenses"),children:r("finance.recent.viewAll",{n:tM.length})})]}),0===tM.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:r("finance.dashboard.noRecent")}):(0,t.jsx)(eU,{"aria-label":r("finance.recent.title"),children:tM.slice(0,8).map(e=>(0,t.jsx)(ia,{exp:e,finData:P,locale:i,t:r,onDelete:tG,onClone:tV,onToggleReimbursed:tQ,compact:"compact"===tr},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.incomeMix.title")}),0===tP.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,padding:`${c.w4.spacing.md} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:tP,total:tN,size:100,centerLabel:r("finance.byMember.income"),centerValue:`€${n7(tN)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:tP.map(e=>(0,t.jsxs)(eI,{children:[(0,t.jsx)(eD,{color:e.color}),(0,t.jsx)(eL,{children:e.label}),(0,t.jsxs)(eA,{style:{color:B},children:["€",n7(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n_?tO:tO.filter(e=>e.key===n_);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.byMember.title")}),tO.length<=1&&0===P.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:B},{id:"expense",value:e.expense,color:O}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:c.w4.spacing.sm},children:[(0,t.jsx)(u.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamily,color:c.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?B:O},children:[n.net>=0?"+":"","€",n7(Math.abs(n.net))]}),(0,t.jsx)(x.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(x.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:c.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(u.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(u.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:B},children:["€",n7(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:B,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:O},children:["€",n7(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:O,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.borderSubtle??c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nH&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nB,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(u.YZ,{children:r("finance.tx.title")}),"month"===ic&&0===P.expenses.length&&(0,t.jsx)(nA,{ref:iu,value:nK,onChange:e=>nZ(e.target.value),"aria-label":r("finance.insights.month"),children:tv.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),0===tM.length&&0===tk.length?(0,t.jsx)(eu,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.tx.empty")})}):(0,t.jsx)(eu,{span:12,children:(0,t.jsx)(eU,{"aria-label":r("finance.tx.title"),children:[...tM.map(e=>({...e,_kind:"expense"})),...tk.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ia,{exp:e,finData:P,locale:i,t:r,onDelete:tG,onClone:tV,onToggleReimbursed:tQ,compact:"compact"===tr,selectMode:il.selectMode,selected:il.selectedIds.has(e.id),onToggleSelect:il.toggleId,longPressHandlers:il.longPressHandlers,onEnterSelectMode:il.enterSelectMode},e.id):(0,t.jsxs)(eK,{compact:"compact"===tr,children:["compact"===tr?(0,t.jsx)(eZ,{color:B,"aria-hidden":!0}):(0,t.jsx)(e_,{color:B,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eJ,{children:[(0,t.jsx)(eG,{children:e.source}),"compact"!==tr&&(0,t.jsxs)(eV,{children:[ie(e.date,i)," \xb7 ",r("finance.dashboard.income")]})]}),(0,t.jsxs)(eX,{children:[(0,t.jsxs)(eQ,{style:{color:B},children:["+€",n5(e.amount)]}),(0,t.jsx)(e2,{className:"delete-btn",type:"button",onClick:()=>tX(e.id),"aria-label":`${r("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nH&&(0,t.jsxs)(ed,{children:[(0,t.jsxs)(nB,{style:{marginBottom:0},children:[(0,t.jsx)(u.YZ,{children:r("finance.insights.title")}),"month"===ic&&0===P.expenses.length&&(0,t.jsx)(nA,{value:nK,onChange:e=>nZ(e.target.value),"aria-label":r("finance.insights.month"),children:tv.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),null!==ra&&(0,t.jsxs)(eo,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:r("finance.kpi.biggestExpense")}),(0,t.jsxs)(el,{children:["€",ra.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ec,{children:ra.biggest.description?`${ra.biggest.description} \xb7 ${(0,d.categoryLabel)(ii(ra.biggest.categoryId),i)}`:(0,d.categoryLabel)(ii(ra.biggest.categoryId),i)})]}),(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:r("finance.kpi.topSpender")}),(0,t.jsxs)(el,{children:["€",ra.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ec,{children:ra.topMemberLabel})]}),(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:r("finance.kpi.busiestDay")}),(0,t.jsxs)(el,{children:["€",ra.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ec,{children:r(`finance.weekday.${ra.busiestDowKey}`)})]}),(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:r("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(el,{children:["€",ra.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ec,{children:0===ra.reimbursableTotal?"—":r("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(u.dO,{items:td.map(e=>({...e})),onReorder:tm,onCycleSize:tu,accentColor:()=>B,labels:{moveLeft:r("finance.insights.panel.moveLeft"),moveRight:r("finance.insights.panel.moveRight"),cycleSize:r("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:tD,budget:P.budget.monthlyBudget,height:180}),(0,t.jsxs)(nv,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(n$,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nk,{children:["€",n7(rt)]})]}),(0,t.jsxs)(n$,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nk,{children:["€",n7(rr)]})]}),(0,t.jsxs)(n$,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nk,{style:{color:tz>0?O:B},children:[tz>0?"+":"",tz,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.byCategory")}),0===rn.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${c.w4.spacing.lg} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:rn,total:ri,size:110,centerLabel:t9.slice(0,3),centerValue:`€${n7(ri)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rn.map(e=>{let n=ii(e.id),r=e.color||c.w4.colors.mainTextMuted,o=(0,d.expensesForMember)((0,d.expensesForMonth)(P.expenses,tS),n_).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=o>0?(e.value-o)/o*100:0;return(0,t.jsxs)(eI,{children:[(0,t.jsx)(eD,{color:r}),(0,t.jsx)(eL,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eA,{children:["€",n7(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(x.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.title")}),0===ty.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:ty.map((e,n)=>(0,t.jsxs)(e6,{itype:e.type,children:[(0,t.jsx)(e3,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:r(e.messageKey,e.params)}),e.memberId&&(()=>{let n=P.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=P.familyMembers.indexOf(n);return(0,t.jsxs)(e8,{children:[(0,t.jsx)(u.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.anomalies")}),0===tw.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tw.map(e=>(0,t.jsxs)(e6,{itype:e.type,children:[(0,t.jsx)(e3,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:r(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(e5,{type:"button",title:r("finance.insights.anomalies.dismiss"),"aria-label":r("finance.insights.anomalies.dismiss"),onClick:()=>{tj(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-budgets":return(0,t.jsx)(D.z,{});case"analytics-bills":return(0,t.jsx)(z.J,{});case"analytics-subscriptions":return(0,t.jsx)(S.n,{});case"analytics-goals":return(0,t.jsx)(F.f,{});case"analytics-recurring":return(0,t.jsx)(C.b,{});case"analytics-rules":return(0,t.jsx)(L.K,{});case"analytics-networth":return(0,t.jsx)(R.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.byMember.title")}),0===tO.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:c.w4.spacing.sm},children:tO.map(e=>(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(u.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(u.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:c.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:B},children:["€",n7(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.incomeSpk,accent:B,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:O},children:["€",n7(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(x.OW,{points:e.spendSpk,accent:O,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${c.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.byMember.net")}),(0,t.jsx)(x.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nO,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),iQ&&(0,t.jsx)(io,{finData:P,activeMemberId:n_,locale:i,t:r,onClose:()=>i0(!1),onSubmit:i5}),i4&&(0,t.jsx)(ir,{finData:P,locale:i,t:r,onClose:()=>i1(!1),onSubmit:i8}),i2&&(0,t.jsx)(it,{finData:P,t:r,onClose:()=>i6(!1),onSubmit:i3}),(0,t.jsx)(w.S,{labelKey:e1,onUndo:()=>{nq()},onDismiss:()=>no(null),t:r}),il.selectMode&&"expenses"===nH&&(0,t.jsx)(M.S,{selectionCount:il.selectedIds.size,visibleIds:tM.map(e=>e.id),selectedIds:il.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:i,t:r,onCancel:il.exitSelectMode,onSelectAll:()=>il.selectAll(tM.map(e=>e.id)),onCategorise:t1,onDelete:t4,onMarkReimbursed:t2}),ix&&(0,t.jsx)(j.m,{t:r,onClose:()=>ig(!1)}),(0,t.jsx)(E.X,{open:nV,onClose:()=>nX(!1),ariaLabel:r("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(V,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(u.YZ,{children:r("finance.settings.title")}),(0,t.jsx)(u.K0,{onClick:()=>nX(!1),title:r("finance.actions.settings"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"drawer-weekly-budget",children:r("finance.settings.weeklyBudget")}),(0,t.jsx)(nD,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(P.budget.weeklyBudget),value:i7,onChange:e=>i9(e.target.value)})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{htmlFor:"drawer-monthly-budget",children:r("finance.settings.monthlyBudget")}),(0,t.jsx)(nD,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(P.budget.monthlyBudget),value:te,onChange:e=>tn(e.target.value)})]}),(0,t.jsx)(u.$n,{variant:"primary",onClick:()=>{t0(),nX(!1)},style:{height:44},children:ti?r("finance.settings.saved"):r("finance.settings.save")})]})]})}),(0,t.jsx)(E.X,{open:n2,onClose:()=>{n6(!1),n8(null)},ariaLabel:r("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(V,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(u.YZ,{children:r("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!n3&&(0,t.jsx)(u.$n,{variant:"ghost",style:{height:28},onClick:()=>n8({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:r("finance.categories.new")}),(0,t.jsx)(u.K0,{onClick:()=>{n6(!1),n8(null)},title:r("finance.categories.cancel"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]})]}),n3&&(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.md,display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{children:r("finance.categories.labelEn")}),(0,t.jsx)(nL,{value:n3.labelEn,onChange:e=>n8(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{children:r("finance.categories.labelPt")}),(0,t.jsx)(nL,{value:n3.labelPt,onChange:e=>n8(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{children:r("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:n3.icon,onChange:e=>n8(n=>n&&{...n,icon:e.target.value}),style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:u.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nR,{children:[(0,t.jsx)(nI,{children:r("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:n3.color,onChange:e=>n8(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nL,{value:n3.color,onChange:e=>n8(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",style:{height:28},onClick:()=>n8(null),children:r("finance.categories.cancel")}),(0,t.jsx)(u.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!n3.labelEn||!n3.labelPt)return;let e={id:(0,f.z)(),labelEn:n3.labelEn,labelPt:n3.labelPt,icon:n3.icon,color:n3.color,isCustom:!0},n=P.categories??[];nY({...P,categories:[...n,e]},"finance.undo.label.added"),n8(null)},children:r("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,u.n6)(e.icon)?(0,t.jsx)(u.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:r("finance.categories.builtIn")})]},e.id)),(P.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,u.n6)(e.icon)?(0,t.jsx)(u.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,d.categoryLabel)(e,i)}),(0,t.jsx)(u.K0,{title:r("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(P.categories??[]).filter(n=>n.id!==e.id);nY({...P,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(u.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(E.X,{open:null!==iD,onClose:()=>iL(null),ariaLabel:r("finance.recurring.makeRecurring"),maxWidth:360,children:iD&&(0,t.jsxs)(np,{children:[(0,t.jsxs)(u.YZ,{children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nm,{children:r("finance.recurring.frequency")}),(0,t.jsx)(nu,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nx,{type:"button",active:iD.cadence===e,onClick:()=>iL(n=>n?{...n,cadence:e}:null),children:r(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nm,{children:r("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iD.firstDue,onChange:e=>iL(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",onClick:()=>iL(null),children:r("finance.recurring.cancel")}),(0,t.jsx)(u.$n,{variant:"primary",onClick:tZ,disabled:!iD.firstDue,children:r("finance.recurring.confirm")})]})]})})]})},{}))}}]);