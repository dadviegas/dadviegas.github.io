"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{ACTIVE_MEMBER_KEY:()=>eO,default:()=>ii});var t=i(5723),r=i(7991),o=i(6859),a=i.n(o),s=i(2799),l=i(4764),c=i(9463),d=i(3759),p=i(789),m=i(5030),u=i(1496),x=i(8170),g=i(4041),f=i(948),h=i(719),b=i(2405),y=i(9546),w=i(5854),j=i(3616),v=i(6579),$=i(8989),k=i(6376),M=i(9146),T=i(7737),S=i(8635),F=i(8501),z=i(1789),C=i(216),R=i(9419),I=i(341),D=i(9378),L=i(545),E=i(2167);let A="#7fb77e",B="#f85149",O=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,P=l.w4.suites.lab,N=a().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${O} 0.25s ease both;
  overflow: hidden;
`,Y=a().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,W=a().div`
  display: none;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,q=a().div`
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
`,H=a().div`
  flex: 1;
  min-width: 0;
`,K=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,U=a().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${P}`:"transparent"};
  background: ${({active:e})=>e?`${P}1f`:"transparent"};
  color: ${({active:e})=>e?P:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${P};
    outline-offset: 2px;
  }
`,Z=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,_=a().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${P}`:"transparent"};
  background: ${({active:e})=>e?`${P}1f`:"transparent"};
  color: ${({active:e})=>e?P:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${P};
    outline-offset: 2px;
  }
`,J=a().div`
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
`;a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
  user-select: none;
`;let G=a().div`
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
  animation: ${O} 0.2s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,V=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,X=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,Q=a().button`
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
`,ee=a().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,en=a().input`
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
`;a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.lg};
`;let ei=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`;a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.md};
`;let et=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,er=a().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,eo=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ea=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,es=a().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,el=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ec=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`;a().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 60fr 40fr;
  }
`,a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  min-width: 0;
`;let ed=a().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`;a().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;let ep=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,em=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${A};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${A};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,eu=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,ex=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,eg=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,ef=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,eh=a().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eb=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,ey=a().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,ew=a().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,ej=a().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,ev=a().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,e$=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ek=a().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,eM=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eT=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,eS=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,eF=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,ez=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eC=a().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eR=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,eI=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eD=a().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eL=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eE="finance:list-density",eA="finance:quick-categories",eB="finance:forecast-months",eO="finance:active-member",eP="finance:insights-layout",eN="finance:overview-layout",eY=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eW=[{id:"overview-hero",size:"lg"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eq=a().input`
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
`,eH=a().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eK=a().li`
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
`,eU=a().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eZ=a().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,e_=a().div`
  flex: 1;
  min-width: 0;
`,eJ=a().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eG=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,eV=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,eX=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,eQ=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${A}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?A:"#facc15"};
  white-space: nowrap;
`,e0=a().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${A}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?A:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${A}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e4=a().button`
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
    color: ${A};
    background: ${A}1a;
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e1=a().button`
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
    color: ${B};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e2=a().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${A}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${A}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,e6=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?B:"warning"===e?"#facc15":"success"===e?A:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,e3=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,e8=a().button`
  margin-left: auto;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 2px 4px;
  cursor: pointer;
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1;
  border-radius: ${l.w4.borderRadius.sm};
  transition: color 120ms ease, background 120ms ease;
  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`;a()(em)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let e5=a().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,e7=a().button`
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
`,e9=a().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,ne=a().input`
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
`,nn=a().select`
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
`,ni=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${A};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nt=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nr=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,no=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${A};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,na=a().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${A};
  animation: ${nr} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,ns=a().div`
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
  animation: ${O} 0.2s ease both;

  strong {
    color: ${l.w4.colors.mainText};
    font-weight: 600;
  }
`,nl=a().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?A:l.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${A}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${A}44`:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${A}28`:l.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?A:l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,nc=a().button`
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
`,nd=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${O} 0.2s ease;
`,np=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nm=a().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,nu=a().button`
  flex: 1;
  padding: 6px 4px;
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
`,nx=a().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?A:l.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?A:l.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${A};
    color: ${A};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ng=a().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nf=a().ul`
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
`,nh=a().li`
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
`,nb=a().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ny=a().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nw=a().li`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${l.w4.spacing.sm} 2px;
  pointer-events: none;
`,nj=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,nv=a().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,n$=a().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nk=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nM=a().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nT=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,nS=a().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nF=a().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nz=a().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${A}; }
`,nC=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nR=a().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,nI=a().input`
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
`,nD=a().input`
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
`,nL=a().select`
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
`;a().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,a().div`
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
`,a().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,a().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,a().div`
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
`;let nE=a().button`
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
`,nA=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`;a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`;let nB=a().footer`
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
`,nO=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,nP=a().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nN=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nY=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} ${l.w4.borderRadius.md} ${l.w4.borderRadius.md};
  border-left: 2px solid ${A};
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
`,nW=a().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,nq=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nH=a().button`
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
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
    border-color: ${l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
    color: ${l.w4.colors.mainText};
  }
`,nK=a().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nU=a().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nZ=a().button`
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
`,n_=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,nJ=a().button`
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
`,nG=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nV=a().input`
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
`,nX=a().select`
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
`,nQ=a().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`,n0=a().input`
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
`,n4=a().div`
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
`,n1=a().ul`
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
`,n2=a().li`
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,n6=a().div`
  position: relative;
`,n3=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function n8(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function n5(e){return Math.round(e).toLocaleString("pt-PT")}function n7(){return new Date().toISOString().slice(0,10)}function n9(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function ie(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function ii({topBarRight:e}){let n,[i]=(0,x.Ym)(),o=(0,r.useMemo)(()=>(0,x.Nx)(i,f.A),[i]),{data:a,loaded:s,save:O}=(0,c.useFinance)(),P=a??{...c.EMPTY_FINANCE_DATA},eq=(0,r.useMemo)(()=>(0,c.recentMerchants)(P.expenses,20).slice(0,6),[P.expenses]),{canUndo:eQ,latestLabelKey:e0,undo:e4}=(0,c.useUndo)(),[nr,nY]=(0,r.useState)(null),nW=(0,r.useCallback)(async(e,n)=>{(0,c.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:P,labelKey:n,ts:Date.now()}),nY(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,p.K)(10),await O(e)},[P,O]),nq=(0,r.useCallback)(async()=>{let e=e4();e&&(nY("finance.undo.label.reverted"),await O(e),setTimeout(()=>nY(null),2500))},[e4,O]),[nH,nK]=(0,r.useState)("overview"),[nU,nZ]=(0,r.useState)(()=>(0,c.thisMonthKey)()),[n_,nJ]=(0,r.useState)("shared");(0,r.useEffect)(()=>{(0,l.PL)(eO).then(e=>{e&&nJ(e)})},[]);let nG=(0,r.useCallback)(e=>{nJ(e),(0,l.Is)(eO,e)},[]),[nV,nX]=(0,r.useState)(!1),[nQ,n0]=(0,r.useState)([]),[n4,n1]=(0,r.useState)(!1),[n2,n6]=(0,r.useState)(!1),[n3,is]=(0,r.useState)(null),il=+(nQ.length>0)+ +!!n4,ic=(0,M.E)();(0,r.useEffect)(()=>{"expenses"!==nH&&ic.selectMode&&ic.exitSelectMode()},[nH]);let{range:id,setRange:ip}=(0,d.H)("month"),im=(0,r.useRef)(null),iu=(0,r.useRef)(null),ix=(0,r.useRef)(null),[ig,ih]=(0,r.useState)(!1),[ib,iy]=(0,r.useState)(""),[iw,ij]=(0,r.useState)(!1),[iv,i$]=(0,r.useState)(""),ik=(0,r.useRef)(null),[iM,iT]=(0,r.useState)(""),[iS,iF]=(0,r.useState)("shared"),[iz,iC]=(0,r.useState)(null),[iR,iI]=(0,r.useState)(!1),iD=(0,r.useRef)(null),[iL,iE]=(0,r.useState)(null),[iA,iB]=(0,r.useState)("EUR"),[iO,iP]=(0,r.useState)(!1),[iN,iY]=(0,r.useState)(!1),iW=(0,L.x)(),iq=(0,r.useRef)(null),iH=(0,r.useRef)(!1),[iK,iU]=(0,r.useState)(!1),[iZ,i_]=(0,r.useState)(-1),iJ=(0,r.useRef)(null),[iG,iV]=(0,r.useState)(""),[iX,iQ]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,l.PL)(eA).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&iQ(n)}catch{}})},[]);let[i0,i4]=(0,r.useState)(!1),[i1,i2]=(0,r.useState)(!1),[i6,i3]=(0,r.useState)(!1),i8=(0,r.useCallback)(e=>{let n=e-(0,c.computeCurrentBalance)(P);if(0===n)return void i3(!1);let i=(P.budget.openingBalance??0)+n;nW({...P,budget:{...P.budget,openingBalance:i}},"finance.undo.label.edited"),i3(!1)},[P,nW]),i5=(0,r.useCallback)(e=>{nW({...P,income:[e,...P.income]},"finance.undo.label.added"),i2(!1),iD.current&&clearTimeout(iD.current),iI(!0),iD.current=setTimeout(()=>iI(!1),2e3)},[P,nW]),i7=(0,r.useCallback)((e,n,i,t)=>{let r=i?[i,...P.recentDescriptions].filter(Boolean).slice(0,20):P.recentDescriptions,o={...P,expenses:[...e,...P.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)o=(0,c.addRecentTag)(o,e);nW(o,"finance.undo.label.added"),i4(!1),iD.current&&clearTimeout(iD.current),iI(!0),iD.current=setTimeout(()=>iI(!1),2e3)},[P,nW]),[i9,te]=(0,r.useState)(""),[tn,ti]=(0,r.useState)(""),[tt,tr]=(0,r.useState)(!1),[to,ta]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,l.PL)(eE).then(e=>{("compact"===e||"comfortable"===e)&&ta(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===to?"compact":"comfortable";ta(e),(0,l.Is)(eE,e)},[to]);let[ts,tl]=(0,r.useState)(3);(0,r.useEffect)(()=>{(0,l.PL)(eB).then(e=>{"6"===e?tl(6):"12"===e&&tl(12)})},[]);let tc=(0,r.useCallback)(e=>{tl(e),(0,l.Is)(eB,String(e))},[]),td=(0,r.useMemo)(()=>(0,c.thisMonthKey)(),[]),[tp,tm]=(0,r.useState)(eY);(0,r.useEffect)(()=>{(0,l.PL)(eP).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eY.filter(e=>!i.has(e.id))];tm(t)}catch{}})},[]);let tu=(0,r.useCallback)((e,n)=>{tm(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let o=[...i];return[o[t],o[r]]=[o[r],o[t]],(0,l.Is)(eP,JSON.stringify(o)),o})},[]),tx=(0,r.useCallback)(e=>{tm(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,o=[...n];return o[i]={...o[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eP,JSON.stringify(o)),o})},[]),[tg,tf]=(0,r.useState)(eW);(0,r.useEffect)(()=>{(0,l.PL)(eN).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eW.filter(e=>!i.has(e.id))];tf(t)}catch{}})},[]);let th=(0,r.useCallback)((e,n)=>{tf(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let o=[...i];return[o[t],o[r]]=[o[r],o[t]],(0,l.Is)(eN,JSON.stringify(o)),o})},[]),tb=(0,r.useCallback)(e=>{tf(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,o=[...n];return o[i]={...o[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eN,JSON.stringify(o)),o})},[]),ty=(0,r.useMemo)(()=>(0,c.computeWeeklyStatus)(P),[P]);(0,r.useMemo)(()=>(0,c.computeMonthlySummary)(P,nU),[P,nU]);let tw=(0,r.useMemo)(()=>(0,c.generateInsightsWithMembers)(P),[P]),{insights:tj,dismiss:tv}=(0,c.useFinanceAnomalies)(),t$=(0,r.useMemo)(()=>(0,c.availableMonths)(P),[P]),tk=(0,r.useMemo)(()=>(0,c.filterExpensesByRange)(P.expenses,id,nU),[P.expenses,id,nU]),tM=(0,r.useMemo)(()=>(0,c.filterIncomeByRange)(P.income,id,nU),[P.income,id,nU]),tT=(0,r.useMemo)(()=>{let e=(0,c.expensesForMember)(tk,n_);return nQ.length>0&&(e=e.filter(e=>nQ.includes(e.categoryId))),n4&&(e=e.filter(e=>!0===e.isReimbursable)),e},[tk,n_,nQ,n4]),tS=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(P,n_,td),[P,n_,td]),tF=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(td),[td]),tz=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(P,n_,tF),[P,n_,tF]),tC=(0,r.useMemo)(()=>0===tz?0:Math.round((tS-tz)/tz*100),[tS,tz]),tR=(0,r.useMemo)(()=>{if("all"===n_)return o("finance.member.all");if("shared"===n_)return o("finance.hero.family");let e=P.familyMembers.find(e=>e.id===n_);return e?.name??o("finance.hero.family")},[n_,P.familyMembers,o]),tI=(0,r.useMemo)(()=>{if("all"===n_||"shared"===n_)return l.w4.colors.mainTextMuted;let e=P.familyMembers.findIndex(e=>e.id===n_);return -1===e?A:(0,h.a8)(P.familyMembers[e],e)},[n_,P.familyMembers]),tD=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,c.expensesForMember)(P.expenses,n_).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[P.expenses,n_]),tL=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,c.expensesForMonth)(e.expenses,i),o=(0,c.expensesForMember)(t,n),a={};for(let e of o)a[e.categoryId]=(a[e.categoryId]??0)+e.amount;let s=Object.values(a).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(a).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:ie(e).color})),over:s>r?s-r:0}})})(P,n_),[P,n_]);(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let o=new Date(i);o.setDate(i.getDate()-r);let a=o.toISOString().slice(0,10),s=a.slice(0,7),l=(0,c.expensesForMember)(e.expenses.filter(e=>e.date===a),n).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:d,exp:l})}return t})(P,n_),[P,n_]);let tE=(0,r.useMemo)(()=>(0,c.forecastCashFlow)(P,ts),[P,ts]),tA=(0,r.useMemo)(()=>(0,c.firstNegativeDay)(tE),[tE]),tB=(0,r.useMemo)(()=>{let e,n;return e=new Date,n=P.expenses.length>0?P.expenses.reduce((e,n)=>e+n.amount,0)/P.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let o=r.toISOString().slice(0,10),a=(0,c.expensesForMember)(P.expenses.filter(e=>e.date===o),n_).reduce((e,n)=>e+n.amount,0);if(0===a)return 0;let s=a/n;return s<.5?1:s<1?2:s<2?3:4})},[P,n_]),tO=(0,r.useMemo)(()=>(0,c.dayHourSpendMatrix)((0,c.expensesForMember)(P.expenses,n_)),[P.expenses,n_]),tP=(0,r.useMemo)(()=>{let e=[];return e.push({key:"shared",label:o("finance.income.member.shared"),color:l.w4.colors.mainTextMuted,incomeSpk:(0,c.incomeSparkline)(P.income,"shared"),spendSpk:(0,c.memberSparkline)(P.expenses,"shared"),incomeTotal:(0,c.incomeForMember)(P.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,c.expensesForMember)(P.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,c.incomeForMember)(P.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,c.expensesForMember)(P.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,c.memberNetByMonth)(P,"shared",6)}),P.familyMembers.forEach((n,i)=>{let t=(0,h.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,c.incomeSparkline)(P.income,n.id),spendSpk:(0,c.memberSparkline)(P.expenses,n.id),incomeTotal:(0,c.incomeForMember)(P.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,c.expensesForMember)(P.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,c.incomeForMember)(P.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,c.expensesForMember)(P.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,c.memberNetByMonth)(P,n.id,6)})}),e},[P,o]),tN=(0,r.useMemo)(()=>{let e=Object.entries((0,c.incomeByMember)(P.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:o("finance.income.member.shared"),value:n,color:l.w4.colors.mainTextMuted};let i=P.familyMembers.findIndex(n=>n.id===e),t=P.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,h.a8)(t,i):l.w4.colors.accent}})},[P,o]),tY=(0,r.useMemo)(()=>tN.reduce((e,n)=>e+n.value,0),[tN]),tW=ty.budget>0?ty.spent/ty.budget*100:0,tq=P.budget.monthlyBudget>0?tS/P.budget.monthlyBudget*100:0,tH=(0,r.useMemo)(()=>{let e=iw&&iv.trim()?iv.trim():(0,c.parseQuickInput)(ib,P.familyMembers)?.description;return e?(0,c.guessCategoryWithRules)(P,e):"other"},[ib,iw,iv,P]),tK=iM||iG||tH,tU=(0,r.useMemo)(()=>(0,c.parseRecurringHint)(ib),[ib]);(0,r.useEffect)(()=>{let e=(0,c.parseQuickInput)(ib,P.familyMembers);e?.memberId&&iF(e.memberId)},[ib,P.familyMembers]);let tZ=(0,r.useCallback)(()=>{let e=(0,c.parseQuickInput)(ib,P.familyMembers),n=(0,c.parseRecurringHint)(ib);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),o=String(i.getDate()).padStart(2,"0");iE({amount:e.amount,description:e.description||(tK??"other"),categoryId:tK||"other",cadence:n.cadence,firstDue:`${t}-${r}-${o}`})},[ib,P.familyMembers,tK]),t_=(0,r.useCallback)(()=>{if(!iL)return;let e=new Date(iL.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iL.description,amount:iL.amount,categoryId:iL.categoryId,cadence:iL.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iS?iS:void 0};nW({...P,recurringRules:[...P.recurringRules??[],n]},"finance.undo.label.added"),iE(null),iy(""),iT(""),iV(""),iD.current&&clearTimeout(iD.current),iI(!0),iD.current=setTimeout(()=>iI(!1),2e3)},[iL,P,iS,nW]),tJ=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=iw&&iv.trim()?iv.trim():void 0,t=(0,c.parseQuickInput)(ib,P.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let r=tK||"other",o=t.memberId??("shared"!==iS?iS:void 0),a=t.tags??[],s=t.description?(0,c.normalizeMerchant)(t.description):void 0,d=n7(),p=t.amount;if("EUR"!==iA){iY(!0),iP(!1);let e=await (0,c.convertToEUR)({amount:t.amount,code:iA,date:d});if(iY(!1),!e)return void iP(!0);p=e.eur,n={code:iA,rate:e.rate,original:t.amount}}let m={id:(0,g.z)(),amount:p,date:d,categoryId:r,description:t.description||r,type:"daily",childId:o,createdAt:Date.now(),...a.length>0?{tags:a}:{},...s?{merchant:s}:{},...n?{fx:n}:{}};iU(!1),iP(!1);let u={...P.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=r)});let x=[t.description||"",...P.recentDescriptions].filter(Boolean).slice(0,20),f=[m,...P.expenses],h={...P,expenses:f,categoryHints:u,recentDescriptions:x};for(let e of a)h=(0,c.addRecentTag)(h,e);nW(h,"finance.undo.label.added");let b=(0,v.j)(f);iQ(b),(0,l.Is)(eA,JSON.stringify(b)),iy(""),i$(""),ij(!1),iT(""),iV(""),iC(null),iD.current&&clearTimeout(iD.current),iI(!0),iD.current=setTimeout(()=>iI(!1),2e3)},[ib,iw,iv,tK,iS,iA,P,nW]),tG=(0,r.useCallback)(e=>{(0,p.K)([10,50,10]);let n=(0,c.parseQuickInput)(e,P.familyMembers);if(n){let e=iM||iG||(n.description?(0,c.guessCategoryWithRules)(P,n.description):"other"),i=n.memberId??("shared"!==iS?iS:void 0),t=n.tags??[],r={id:(0,g.z)(),amount:n.amount,date:n7(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},o={...P.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(o[n]=e)});let a=[n.description||"",...P.recentDescriptions].filter(Boolean).slice(0,20),s={...P,expenses:[r,...P.expenses],categoryHints:o,recentDescriptions:a};for(let e of t)s=(0,c.addRecentTag)(s,e);nW(s,"finance.undo.label.added");let d=(0,v.j)([r,...P.expenses]);iQ(d),(0,l.Is)(eA,JSON.stringify(d)),iy(""),iT(""),iV(""),iD.current&&clearTimeout(iD.current),iI(!0),iD.current=setTimeout(()=>iI(!1),2e3)}else iy(e),iu.current?.focus()},[P,iM,iG,iS,nW]),tV=(0,r.useCallback)(e=>{nW({...P,expenses:P.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[P,nW]),tX=(0,r.useCallback)(e=>{let n=P.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,g.z)(),date:n7(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nW({...P,expenses:[i,...P.expenses]},"finance.undo.label.added")},[P,nW]),tQ=(0,r.useCallback)(e=>{nW({...P,income:P.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[P,nW]),t0=(0,r.useCallback)(e=>{nW({...P,expenses:P.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[P,nW]),t4=(0,r.useCallback)(()=>{let e=parseFloat(i9)||P.budget.weeklyBudget,n=parseFloat(tn)||P.budget.monthlyBudget;O({...P,budget:{...P.budget,weeklyBudget:e,monthlyBudget:n}}),tr(!0),setTimeout(()=>tr(!1),2e3)},[i9,tn,P,O]),t1=(0,r.useCallback)(()=>{let e=ic.selectedIds;0!==e.size&&(nW({...P,expenses:P.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),ic.exitSelectMode())},[ic,P,nW]),t2=(0,r.useCallback)(e=>{let n=ic.selectedIds;0!==n.size&&(nW({...P,expenses:P.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),ic.exitSelectMode())},[ic,P,nW]),t6=(0,r.useCallback)(()=>{let e=ic.selectedIds;0!==e.size&&(nW({...P,expenses:P.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),ic.exitSelectMode())},[ic,P,nW]),t3=(0,r.useMemo)(()=>["shared",...P.familyMembers.map(e=>e.id)],[P.familyMembers]);(0,j.K)({quickAddInputRef:iu,monthSelectRef:ix,memberIds:t3,activeMemberId:n_,onSelectMember:nG,onSetTab:e=>nK(e),expenseModalOpen:i0,onOpenExpenseModal:()=>i4(!0),shortcutsOpen:ig,onToggleShortcuts:()=>ih(e=>!e)});let t8=[{value:"week",label:o("finance.range.pill.7d")},{value:"month",label:o("finance.range.pill.month")},{value:"3m",label:o("finance.range.pill.3m")},{value:"6m",label:o("finance.range.pill.6m")},{value:"1y",label:o("finance.range.pill.year")}],t5=Math.floor(tS).toLocaleString("pt-PT"),t7=(tS%1).toFixed(2).slice(1),t9=(0,r.useMemo)(()=>{if(0===(P.goals??[]).length)return null;let e=(0,c.recomputeGoalCurrents)(P);return{onTrack:e.goals.filter(e=>"behind"!==(0,c.goalStatus)(e)).length,total:e.goals.length}},[P]),re=(()=>{let[e,n]=td.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),rn=(0,t.jsx)(h.TA,{data:P,activeMemberId:n_,onSelectMember:nG,onSaveData:O,t:o,locale:i}),ri=(0,r.useMemo)(()=>{let e={};for(let n of tT)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:ie(e).color}))},[tT]),rt=ri.reduce((e,n)=>e+n.value,0),rr=(0,r.useMemo)(()=>tL.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tL]),ro=tL.length>0?rr/tL.length:0,ra=tL.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>P.budget.monthlyBudget).length,rs=(0,r.useMemo)(()=>{if(0===tT.length)return null;let e=tT.reduce((e,n)=>n.amount>e.amount?n:e,tT[0]),n={};for(let e of tT){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?P.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??o("finance.member.shared"),a=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tT){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tT.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:a,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tT,P.familyMembers,o]);return(0,t.jsxs)(l.PE,{title:o("finance.appTitle"),sidebar:rn,topBarRight:e,activeId:n_,children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(Y,{children:(0,t.jsx)(h.jb,{data:P,activeMemberId:n_,onSelectMember:nG,t:o,locale:i})}),(0,t.jsxs)(q,{children:[(0,t.jsx)(H,{children:(0,t.jsx)("div",{role:"tablist","aria-label":o("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:o("finance.tab.overview"),expenses:o("finance.tab.expenses"),insights:o("finance.tab.insights")},i={overview:0,expenses:tT.length,insights:tw.length}[e];return(0,t.jsxs)(U,{type:"button",role:"tab","aria-selected":nH===e,active:nH===e,onClick:()=>nK(e),children:[n[e],i>0&&(0,t.jsxs)(Z,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(K,{children:[(0,t.jsxs)(m.ms,{align:"right",trigger:(0,t.jsx)(m.$n,{variant:il>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"filter",size:13,"aria-hidden":!0}),children:il>0?o("finance.filters.activeCount",{n:il}):o("finance.actions.filters")}),children:[(0,t.jsx)(m.o_,{children:o("finance.filters.member")}),["shared",...P.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?o("finance.hero.family"):P.familyMembers.find(n=>n.id===e)?.name??e,i=e===n_;return(0,t.jsx)(m.tJ,{onClick:()=>nG(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(m.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.o_,{children:o("finance.filters.category")}),(0,t.jsx)(m.tJ,{onClick:()=>n0([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===nQ.length&&(0,t.jsx)(m.In,{name:"check",size:12}),nQ.length>0&&(0,t.jsx)("span",{style:{width:12}}),o("finance.filters.allCategories")]})}),c.DEFAULT_CATEGORIES.map(e=>{let n=nQ.includes(e.id);return(0,t.jsx)(m.tJ,{onClick:()=>n0(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(m.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.tJ,{onClick:()=>n1(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n4&&(0,t.jsx)(m.In,{name:"check",size:12}),!n4&&(0,t.jsx)("span",{style:{width:12}}),o("finance.filters.reimbursableOnly")]})}),il>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.tJ,{onClick:()=>{n0([]),n1(!1)},children:o("finance.filters.reset")})]})]}),(0,t.jsx)(m.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>n6(!0),children:o("finance.actions.categories")}),"expenses"===nH&&(0,t.jsx)(m.$n,{variant:ic.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{ic.selectMode?ic.exitSelectMode():ic.enterSelectMode()},children:o("finance.bulk.select")}),(0,t.jsx)(m.K0,{onClick:()=>nX(!0),title:o("finance.actions.settings"),"aria-label":o("finance.actions.settings"),active:nV,children:(0,t.jsx)(m.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(W,{children:(0,t.jsx)(m.K0,{onClick:()=>ih(e=>!e),title:o("finance.shortcuts.title"),"aria-label":o("finance.shortcuts.title"),active:ig,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(J,{"aria-label":o("finance.range.label"),children:t8.map(({value:e,label:n})=>(0,t.jsx)(_,{type:"button",active:id===e,onClick:()=>{ip(e),"month"===e&&nZ(td)},"aria-pressed":id===e,children:n},e))}),"month"===id&&P.expenses.length>0&&(0,t.jsx)($.f,{data:P,selectedMonth:nU,onSelectMonth:nZ,locale:i,t:o}),(0,t.jsxs)(ed,{children:["overview"===nH&&(0,t.jsxs)(ep,{children:[(0,t.jsxs)(X,{ref:im,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:l.w4.colors.mainTextMuted},children:o("finance.quickAdd.title")}),(0,t.jsxs)(ni,{visible:iR&&!iW.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",o("finance.quickAdd.added")]}),iW.listening&&(0,t.jsxs)(no,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(na,{}),o("finance.voice.listening")]}),(0,t.jsxs)(m.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i2(!0),children:["+ ",o("finance.quickAdd.addIncome")]}),(0,t.jsxs)(m.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i3(!0),children:["⚖ ",o("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:tJ,"aria-label":o("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(e5,{children:[{id:"shared",name:o("finance.member.shared"),role:"shared",color:void 0},...P.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(P.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(e7,{type:"button",active:iS===e.id,color:i,onClick:()=>iF(e.id),children:[(0,t.jsx)(m.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(e9,{children:[(0,t.jsxs)(ng,{children:[(0,t.jsx)(ne,{ref:iu,type:"text",placeholder:iw?o("finance.quickAdd.amountOnlyPlaceholder"):o("finance.quickAdd.placeholder"),value:ib,onChange:e=>{iy(e.target.value),iT(""),iU(eq.length>0),i_(-1)},onFocus:()=>{eq.length>0&&!ib.trim()&&iU(!0)},onBlur:()=>{setTimeout(()=>iU(!1),150)},onKeyDown:e=>{if(iK&&0!==eq.length)if("ArrowDown"===e.key)e.preventDefault(),i_(e=>Math.min(e+1,eq.length-1));else if("ArrowUp"===e.key)e.preventDefault(),i_(e=>Math.max(e-1,-1));else if("Enter"===e.key&&iZ>=0){e.preventDefault();let n=eq[iZ];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(ib);iy(e?ib.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iT(""),iU(!1),i_(-1)}}else"Escape"===e.key&&(iU(!1),i_(-1))},"aria-label":o("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":iK&&eq.length>0,autoComplete:"off",inputMode:"decimal"}),iK&&eq.length>0&&(0,t.jsxs)(nf,{ref:iJ,role:"listbox","aria-label":o("finance.merchant.recent"),children:[(0,t.jsx)(nw,{role:"presentation",children:o("finance.merchant.recent")}),eq.map((e,n)=>(0,t.jsxs)(nh,{role:"option","aria-selected":iZ===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(ib);iy(i?ib.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iT(""),iU(!1),i_(-1),iu.current?.focus()},children:[(0,t.jsx)(nb,{children:e.merchant}),(0,t.jsxs)(ny,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(Q,{type:"button","aria-pressed":iw,"aria-label":iw?o("finance.quickAdd.descToggle.hide"):o("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iw;ij(e),e&&requestAnimationFrame(()=>ik.current?.focus())},children:[(0,t.jsx)(m.In,{name:iw?"close":"plus",size:11}),iw?o("finance.quickAdd.descToggle.hide"):o("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(nn,{value:iM||tH,onChange:e=>{let n=e.target.value,i=iM||tH;iT(n);let t=iw&&iv.trim()?iv.trim():(0,c.parseQuickInput)(ib,P.familyMembers)?.description;t&&iC((0,c.proposeRuleFromOverride)(i,n,t))},"aria-label":o("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(nn,{value:iA,onChange:e=>{iB(e.target.value),iP(!1)},"aria-label":o("finance.currency.label"),style:{maxWidth:72},children:c.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!ib.trim()||iN,children:iN?o("finance.currency.converting"):o("finance.quickAdd.add")}),iW.supported&&(0,t.jsx)(nx,{type:"button","aria-label":o("finance.voice.listening"),"aria-pressed":iW.listening,active:iW.listening,onPointerDown:()=>{iq.current=window.setTimeout(()=>{iq.current=null,iH.current=!0,(0,p.K)(30),iW.listening?iW.stop():iW.start(tG)},500)},onPointerUp:()=>{null!==iq.current&&(clearTimeout(iq.current),iq.current=null,iH.current||((0,p.K)(10),iW.listening?iW.stop():iW.start(tG))),iH.current=!1},onPointerCancel:()=>{null!==iq.current&&(clearTimeout(iq.current),iq.current=null),iH.current=!1},children:(0,t.jsx)(m.In,{name:"mic",size:16})})]}),(0,t.jsx)(ee,{visible:iw,children:(0,t.jsx)(en,{ref:ik,type:"text",placeholder:o("finance.quickAdd.descPlaceholder"),maxLength:80,value:iv,onChange:e=>i$(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),ij(!1),iu.current?.focus())},"aria-label":o("finance.quickAdd.descPlaceholder"),tabIndex:iw?0:-1})}),(0,t.jsx)(v.J,{expenses:P.expenses,storedOrder:iX,lockedCategoryId:iG,onToggle:e=>iV(n=>n===e?"":e),locale:i,groupLabel:o("finance.quickAdd.frequentCategories")}),iz&&(0,t.jsxs)(ns,{children:[(0,t.jsxs)("span",{children:[o("finance.categoryRules.alwaysCategorize",{match:iz.match})," ",(0,t.jsx)("strong",{children:(n=c.DEFAULT_CATEGORIES.find(e=>e.id===iz.categoryId))?(0,c.categoryLabel)(n,i):iz.categoryId}),"?"]}),(0,t.jsx)(nl,{type:"button",accent:!0,onClick:()=>{P&&iz&&(nW({...P,categoryRules:[iz,...P.categoryRules??[]]},"finance.undo.label.added"),iC(null))},children:o("finance.categoryRules.propose")}),(0,t.jsx)(nl,{type:"button",onClick:()=>iC(null),children:o("finance.categoryRules.dismiss")})]}),iO&&(0,t.jsx)(nt,{style:{color:B},role:"alert",children:o("finance.currency.fxFailed")}),tU&&(0,c.parseQuickInput)(ib,P.familyMembers)&&(0,t.jsxs)(nc,{type:"button",onClick:tZ,"aria-label":o("finance.recurring.makeRecurring"),children:["↻ ",o("finance.recurring.makeRecurring")]}),(0,t.jsx)(nt,{children:o("finance.quickAdd.hint")})]})]}),(0,t.jsx)(m.dO,{items:tg.map(e=>({...e})),onReorder:th,onCycleSize:tb,accentColor:()=>A,labels:{moveLeft:o("finance.overview.panel.moveLeft"),moveRight:o("finance.overview.panel.moveRight"),cycleSize:o("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(ef,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eh,{children:[(0,t.jsxs)(eb,{children:[o("finance.hero.spentIn")," ",re," \xb7 ",tR]}),(0,t.jsxs)(ey,{children:[(0,t.jsx)(ew,{children:"€"}),(0,t.jsx)(ej,{children:t5}),(0,t.jsx)(ev,{children:t7})]}),(0,t.jsxs)(e$,{children:[(0,t.jsx)(u.Ru,{value:tC,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[o("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(tF,i)," \xb7 €",n5(tz)]})]}),tD.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:tD,accent:tI,width:280,height:34})}),null!==t9&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:t9.onTrack===t9.total?"#7fb77e":l.w4.colors.mainTextMuted},children:o("finance.goals.hero",{on:t9.onTrack,total:t9.total})})]}),(0,t.jsx)(ek,{children:(0,t.jsxs)(eM,{children:[(0,t.jsxs)(eT,{children:[(0,t.jsx)(eS,{children:o("finance.budget.weekly")}),(0,t.jsxs)(eF,{children:["€",n5(ty.spent)," ",(0,t.jsxs)(ez,{children:["/ €",ty.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:tW,over:tW>100?tW-100:0}),(0,t.jsxs)(eC,{children:[(0,t.jsxs)("span",{children:[Math.round(tW),"% ",o("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:ty.remaining<0?B:A},children:ty.remaining>0?`€${n5(ty.remaining)} ${o("finance.budget.remaining")}`:`€${n5(Math.abs(ty.remaining))} ${o("finance.budget.over")}`})]}),(0,t.jsxs)(eT,{style:{marginTop:14},children:[(0,t.jsx)(eS,{children:o("finance.budget.monthly")}),(0,t.jsxs)(eF,{children:["€",n5(tS)," ",(0,t.jsxs)(ez,{children:["/ €",P.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:tq,over:tq>100?tq-100:0}),(0,t.jsxs)(eC,{children:[(0,t.jsxs)("span",{children:[Math.round(tq),"% ",o("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[o("finance.budget.projected")," €",n5(tS+(ty.projectedTotal-ty.spent))]})]})]})})]});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:o("finance.charts.sixMonths")}),(0,t.jsx)(eg,{children:(0,t.jsx)(nO,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nP,{children:[(0,t.jsx)(nN,{color:e.color}),(0,c.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(u.ik,{data:tL,budget:P.budget.monthlyBudget,height:200}),(0,t.jsxs)(nj,{children:[(0,t.jsxs)(nv,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.total6m")}),(0,t.jsxs)(n$,{children:["€",n5(rr)]})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.monthlyAvg")}),(0,t.jsxs)(n$,{children:["€",n5(ro)]})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.monthsOverBudget")}),(0,t.jsxs)(n$,{children:[ra," / ",tL.length]})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.trend")}),(0,t.jsxs)(n$,{style:{color:tC>0?B:A},children:[tC>0?"+":"",tC,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eu,{children:[(0,t.jsx)(ex,{children:o("finance.charts.byCategory")}),(0,t.jsx)(nE,{type:"button",onClick:()=>nK("insights"),children:o("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:ri,total:rt,size:110,centerLabel:re.slice(0,3),centerValue:`€${n5(rt)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:ri.map(e=>{let n=ie(e.id),r=(0,c.expensesForMember)((0,c.expensesForMonth)(P.expenses,tF),n_).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eR,{children:[(0,t.jsx)(eI,{color:e.color}),(0,t.jsx)(eD,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eL,{children:["€",n5(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eu,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ex,{children:o("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("finance.forecast.sub",{n:ts})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(_,{type:"button",active:ts===e,onClick:()=>tc(e),"aria-pressed":ts===e,children:o(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(R.b,{forecast:tE,firstNegDate:tA,t:o,locale:i,height:170})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eu,{children:(0,t.jsx)(ex,{children:o("finance.charts.heatmap")})}),(0,t.jsx)(u.RT,{data:tB,locale:i}),(0,t.jsxs)(nk,{children:[(0,t.jsx)("span",{children:o("finance.charts.less")}),(0,t.jsx)(nM,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:o("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ei,{children:(0,t.jsx)(m.YZ,{children:o("finance.heatmap.title")})}),(0,t.jsx)(b.D,{matrix:tO,locale:i,t:o})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eu,{children:(0,t.jsx)(ex,{children:o("finance.charts.thisWeek")})}),(0,t.jsxs)(nT,{children:[(0,t.jsxs)(nS,{children:[(0,t.jsxs)(nF,{children:["€",n5(ty.spent)]}),(0,t.jsxs)(ez,{children:["/ €",ty.budget]})]}),(0,t.jsx)(u.kl,{spent:ty.spent,budget:ty.budget}),(0,t.jsxs)(nz,{children:[(0,t.jsx)("span",{children:o("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:o("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(et,{children:[(0,t.jsx)(m.YZ,{children:o("finance.recent.title")}),tT.length>8&&(0,t.jsx)(nE,{type:"button",onClick:()=>nK("expenses"),children:o("finance.recent.viewAll",{n:tT.length})})]}),0===tT.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:o("finance.dashboard.noRecent")}):(0,t.jsx)(eH,{"aria-label":o("finance.recent.title"),children:tT.slice(0,8).map(e=>(0,t.jsx)(ia,{exp:e,finData:P,locale:i,t:o,onDelete:tV,onClone:tX,onToggleReimbursed:t0,compact:"compact"===to},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.incomeMix.title")}),0===tN.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,padding:`${l.w4.spacing.md} 0`,textAlign:"center"},children:o("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:tN,total:tY,size:100,centerLabel:o("finance.byMember.income"),centerValue:`€${n5(tY)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:tN.map(e=>(0,t.jsxs)(eR,{children:[(0,t.jsx)(eI,{color:e.color}),(0,t.jsx)(eD,{children:e.label}),(0,t.jsxs)(eL,{style:{color:A},children:["€",n5(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n_?tP:tP.filter(e=>e.key===n_);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.byMember.title")}),tP.length<=1&&0===P.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:o("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:A},{id:"expense",value:e.expense,color:B}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:l.w4.spacing.sm},children:[(0,t.jsx)(m.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamily,color:l.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?A:B},children:[n.net>=0?"+":"","€",n5(Math.abs(n.net))]}),(0,t.jsx)(u.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(u.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:l.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(m.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(m.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:A},children:["€",n5(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:A,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:B},children:["€",n5(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:B,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nH&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nA,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:o("finance.tx.title")}),"month"===id&&0===P.expenses.length&&(0,t.jsx)(nL,{ref:ix,value:nU,onChange:e=>nZ(e.target.value),"aria-label":o("finance.insights.month"),children:t$.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),0===tT.length&&0===tM.length?(0,t.jsx)(em,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:o("finance.tx.empty")})}):(0,t.jsx)(em,{span:12,children:(0,t.jsx)(eH,{"aria-label":o("finance.tx.title"),children:[...tT.map(e=>({...e,_kind:"expense"})),...tM.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ia,{exp:e,finData:P,locale:i,t:o,onDelete:tV,onClone:tX,onToggleReimbursed:t0,compact:"compact"===to,selectMode:ic.selectMode,selected:ic.selectedIds.has(e.id),onToggleSelect:ic.toggleId,longPressHandlers:ic.longPressHandlers,onEnterSelectMode:ic.enterSelectMode},e.id):(0,t.jsxs)(eK,{compact:"compact"===to,children:["compact"===to?(0,t.jsx)(eU,{color:A,"aria-hidden":!0}):(0,t.jsx)(eZ,{color:A,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eJ,{children:e.source}),"compact"!==to&&(0,t.jsxs)(eG,{children:[n9(e.date,i)," \xb7 ",o("finance.dashboard.income")]})]}),(0,t.jsxs)(eV,{children:[(0,t.jsxs)(eX,{style:{color:A},children:["+€",n8(e.amount)]}),(0,t.jsx)(e1,{className:"delete-btn",type:"button",onClick:()=>tQ(e.id),"aria-label":`${o("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nH&&(0,t.jsxs)(ec,{children:[(0,t.jsxs)(nA,{style:{marginBottom:0},children:[(0,t.jsx)(m.YZ,{children:o("finance.insights.title")}),"month"===id&&0===P.expenses.length&&(0,t.jsx)(nL,{value:nU,onChange:e=>nZ(e.target.value),"aria-label":o("finance.insights.month"),children:t$.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),null!==rs&&(0,t.jsxs)(er,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(ea,{children:o("finance.kpi.biggestExpense")}),(0,t.jsxs)(es,{children:["€",rs.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(el,{children:rs.biggest.description?`${rs.biggest.description} \xb7 ${(0,c.categoryLabel)(ie(rs.biggest.categoryId),i)}`:(0,c.categoryLabel)(ie(rs.biggest.categoryId),i)})]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(ea,{children:o("finance.kpi.topSpender")}),(0,t.jsxs)(es,{children:["€",rs.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(el,{children:rs.topMemberLabel})]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(ea,{children:o("finance.kpi.busiestDay")}),(0,t.jsxs)(es,{children:["€",rs.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(el,{children:o(`finance.weekday.${rs.busiestDowKey}`)})]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(ea,{children:o("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(es,{children:["€",rs.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(el,{children:0===rs.reimbursableTotal?"—":o("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(m.dO,{items:tp.map(e=>({...e})),onReorder:tu,onCycleSize:tx,accentColor:()=>A,labels:{moveLeft:o("finance.insights.panel.moveLeft"),moveRight:o("finance.insights.panel.moveRight"),cycleSize:o("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.charts.sixMonths")}),(0,t.jsx)(u.ik,{data:tL,budget:P.budget.monthlyBudget,height:180}),(0,t.jsxs)(nj,{style:{marginTop:l.w4.spacing.sm},children:[(0,t.jsxs)(nv,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.total6m")}),(0,t.jsxs)(n$,{children:["€",n5(rr)]})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.monthlyAvg")}),(0,t.jsxs)(n$,{children:["€",n5(ro)]})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.trend")}),(0,t.jsxs)(n$,{style:{color:tC>0?B:A},children:[tC>0?"+":"",tC,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.charts.byCategory")}),0===ri.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${l.w4.spacing.lg} 0`,textAlign:"center"},children:o("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:ri,total:rt,size:110,centerLabel:re.slice(0,3),centerValue:`€${n5(rt)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:ri.map(e=>{let n=ie(e.id),r=e.color||l.w4.colors.mainTextMuted,o=(0,c.expensesForMember)((0,c.expensesForMonth)(P.expenses,tF),n_).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=o>0?(e.value-o)/o*100:0;return(0,t.jsxs)(eR,{children:[(0,t.jsx)(eI,{color:r}),(0,t.jsx)(eD,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eL,{children:["€",n5(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(u.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.insights.title")}),0===tw.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:o("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tw.map((e,n)=>(0,t.jsxs)(e2,{itype:e.type,children:[(0,t.jsx)(e6,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:o(e.messageKey,e.params)}),e.memberId&&(()=>{let n=P.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=P.familyMembers.indexOf(n);return(0,t.jsxs)(e3,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.insights.anomalies")}),0===tj.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:o("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tj.map(e=>(0,t.jsxs)(e2,{itype:e.type,children:[(0,t.jsx)(e6,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:o(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(e8,{type:"button",title:o("finance.insights.anomalies.dismiss"),"aria-label":o("finance.insights.anomalies.dismiss"),onClick:()=>{tv(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-budgets":return(0,t.jsx)(I.z,{});case"analytics-bills":return(0,t.jsx)(F.J,{});case"analytics-subscriptions":return(0,t.jsx)(T.n,{});case"analytics-goals":return(0,t.jsx)(S.f,{});case"analytics-recurring":return(0,t.jsx)(z.b,{});case"analytics-rules":return(0,t.jsx)(D.K,{});case"analytics-networth":return(0,t.jsx)(C.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.byMember.title")}),0===tP.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:o("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:l.w4.spacing.sm},children:tP.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(m.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(m.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:A},children:["€",n5(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:A,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:B},children:["€",n5(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:B,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("finance.byMember.net")}),(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nB,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),i0&&(0,t.jsx)(io,{finData:P,activeMemberId:n_,locale:i,t:o,onClose:()=>i4(!1),onSubmit:i7}),i1&&(0,t.jsx)(ir,{finData:P,locale:i,t:o,onClose:()=>i2(!1),onSubmit:i5}),i6&&(0,t.jsx)(it,{finData:P,t:o,onClose:()=>i3(!1),onSubmit:i8}),(0,t.jsx)(y.S,{labelKey:nr,onUndo:()=>{nq()},onDismiss:()=>nY(null),t:o}),ic.selectMode&&"expenses"===nH&&(0,t.jsx)(k.S,{selectionCount:ic.selectedIds.size,visibleIds:tT.map(e=>e.id),selectedIds:ic.selectedIds,categories:c.DEFAULT_CATEGORIES,locale:i,t:o,onCancel:ic.exitSelectMode,onSelectAll:()=>ic.selectAll(tT.map(e=>e.id)),onCategorise:t2,onDelete:t1,onMarkReimbursed:t6}),ig&&(0,t.jsx)(w.m,{t:o,onClose:()=>ih(!1)}),(0,t.jsx)(E.X,{open:nV,onClose:()=>nX(!1),ariaLabel:o("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(G,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(m.YZ,{children:o("finance.settings.title")}),(0,t.jsx)(m.K0,{onClick:()=>nX(!1),title:o("finance.actions.settings"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"drawer-weekly-budget",children:o("finance.settings.weeklyBudget")}),(0,t.jsx)(nI,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(P.budget.weeklyBudget),value:i9,onChange:e=>te(e.target.value)})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"drawer-monthly-budget",children:o("finance.settings.monthlyBudget")}),(0,t.jsx)(nI,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(P.budget.monthlyBudget),value:tn,onChange:e=>ti(e.target.value)})]}),(0,t.jsx)(m.$n,{variant:"primary",onClick:()=>{t4(),nX(!1)},style:{height:44},children:tt?o("finance.settings.saved"):o("finance.settings.save")})]})]})}),(0,t.jsx)(E.X,{open:n2,onClose:()=>{n6(!1),is(null)},ariaLabel:o("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(G,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(m.YZ,{children:o("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!n3&&(0,t.jsx)(m.$n,{variant:"ghost",style:{height:28},onClick:()=>is({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:o("finance.categories.new")}),(0,t.jsx)(m.K0,{onClick:()=>{n6(!1),is(null)},title:o("finance.categories.cancel"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]})]}),n3&&(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.md,display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{children:o("finance.categories.labelEn")}),(0,t.jsx)(nD,{value:n3.labelEn,onChange:e=>is(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{children:o("finance.categories.labelPt")}),(0,t.jsx)(nD,{value:n3.labelPt,onChange:e=>is(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{children:o("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:n3.icon,onChange:e=>is(n=>n&&{...n,icon:e.target.value}),style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:m.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{children:o("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:n3.color,onChange:e=>is(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nD,{value:n3.color,onChange:e=>is(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",style:{height:28},onClick:()=>is(null),children:o("finance.categories.cancel")}),(0,t.jsx)(m.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!n3.labelEn||!n3.labelPt)return;let e={id:(0,g.z)(),labelEn:n3.labelEn,labelPt:n3.labelPt,icon:n3.icon,color:n3.color,isCustom:!0},n=P.categories??[];nW({...P,categories:[...n,e]},"finance.undo.label.added"),is(null)},children:o("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,m.n6)(e.icon)?(0,t.jsx)(m.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,c.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:o("finance.categories.builtIn")})]},e.id)),(P.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,m.n6)(e.icon)?(0,t.jsx)(m.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,c.categoryLabel)(e,i)}),(0,t.jsx)(m.K0,{title:o("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(P.categories??[]).filter(n=>n.id!==e.id);nW({...P,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(m.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(E.X,{open:null!==iL,onClose:()=>iE(null),ariaLabel:o("finance.recurring.makeRecurring"),maxWidth:360,children:iL&&(0,t.jsxs)(nd,{children:[(0,t.jsxs)(m.YZ,{children:["↻ ",o("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(np,{children:o("finance.recurring.frequency")}),(0,t.jsx)(nm,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nu,{type:"button",active:iL.cadence===e,onClick:()=>iE(n=>n?{...n,cadence:e}:null),children:o(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(np,{children:o("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iL.firstDue,onChange:e=>iE(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",onClick:()=>iE(null),children:o("finance.recurring.cancel")}),(0,t.jsx)(m.$n,{variant:"primary",onClick:t_,disabled:!iL.firstDue,children:o("finance.recurring.confirm")})]})]})})]})}function it({finData:e,t:n,onClose:i,onSubmit:o}){let a=(0,c.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[d,p]=(0,r.useState)(""),u=parseFloat(d.replace(",",".")),x=d.trim().length>0&&!Number.isNaN(u),g=x?u-a:0;return(0,t.jsx)(E.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nW,{children:[(0,t.jsxs)(nq,{children:[(0,t.jsx)(m.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nH,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&o(u)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:l.w4.spacing.sm,background:l.w4.colors.sidebarHover,borderRadius:l.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",n8(a)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:l.w4.colors.mainTextMuted},children:["€",n8(s)]})]})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(nV,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:a.toFixed(2),value:d,onChange:e=>p(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:g>0?A:B,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:n8(g)}):n("finance.balance.deltaDown",{n:n8(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(nQ,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function ir({finData:e,locale:n,t:i,onClose:o,onSubmit:a}){let[s,c]=(0,r.useState)(""),[d,p]=(0,r.useState)(n7()),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)(""),[y,w]=(0,r.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(E.X,{open:!0,onClose:o,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nW,{children:[(0,t.jsxs)(nq,{children:[(0,t.jsx)(m.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nH,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&a({id:(0,g.z)(),amount:j,date:d,source:u.trim(),createdAt:Date.now(),...f?{goalId:f}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nK,{children:[(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(nV,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>c(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(nV,{id:"inc-date",type:"date",value:d,onChange:e=>p(e.target.value)})]})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(nV,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(m.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(m.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n);return(0,t.jsxs)(m.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(nX,{id:"inc-goal",value:f,onChange:e=>b(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(nQ,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:o,children:i("finance.income.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function io({finData:e,activeMemberId:n,locale:i,t:o,onClose:a,onSubmit:s}){let[d,p]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)("other"),[y,w]=(0,r.useState)(n7()),[j,v]=(0,r.useState)("single"),[$,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,r.useState)([]),[z,C]=(0,r.useState)(""),[R,I]=(0,r.useState)(!1),D=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&b((0,c.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a]);let L=parseFloat(d.replace(",","."))||0,A=M.length,B="split"===j&&A>0?L/A:L,O=L>0&&!!y&&("single"===j||"split"===j&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),I(!1))},N=(0,r.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),Y=[{id:"shared",name:o("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(E.X,{open:!0,onClose:a,ariaLabel:o("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nY,{children:[(0,t.jsxs)(nq,{children:[(0,t.jsxs)(m.YZ,{children:["◉ ",o("finance.quickAdd.newExpense")]}),(0,t.jsx)(nH,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!O)return;let t=u.trim(),r=Date.now(),o={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(o[e]=f)});let a=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:L,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===$?void 0:$,createdAt:r,...a}];else{let e=Math.round(L/A*100)/100,n=Math.round((L-e*A)*100)/100;i=M.map((i,o)=>({id:(0,g.z)(),amount:0===o?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${A})`:f,type:"daily",childId:i,createdAt:r+o,...a}))}s(i,o,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nK,{children:[(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"exp-amount",children:o("finance.modal.amount")}),(0,t.jsx)(nV,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:d,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"exp-date",children:o("finance.modal.date")}),(0,t.jsx)(nV,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"exp-desc",children:o("finance.modal.description")}),(0,t.jsx)(nV,{id:"exp-desc",type:"text",placeholder:o("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{htmlFor:"exp-cat",children:o("finance.quickAdd.category")}),(0,t.jsx)(nX,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{children:o("finance.tags.label")}),(0,t.jsxs)(n6,{children:[(0,t.jsxs)(n4,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(m.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":o("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(n0,{ref:D,type:"text",value:z,placeholder:0===S.length?o("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),I(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&I(!1)},onBlur:()=>{z.trim()&&P(z),setTimeout(()=>I(!1),150)},onFocus:()=>I(!0),"aria-label":o("finance.tags.label")})]}),R&&N.length>0&&(0,t.jsx)(n1,{children:N.map(e=>(0,t.jsxs)(n2,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nR,{children:o("finance.modal.assign")}),(0,t.jsxs)(nU,{role:"tablist",children:[(0,t.jsx)(nZ,{type:"button",active:"single"===j,onClick:()=>v("single"),children:o("finance.modal.member")}),(0,t.jsx)(nZ,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:o("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n_,{style:{marginTop:l.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(nJ,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n_,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(nJ,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&L>0&&(0,t.jsx)(nG,{style:{marginTop:l.w4.spacing.xs},children:o("finance.modal.splitEach",{n:A,amount:n8(B)})})]})]}),(0,t.jsxs)(nQ,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:a,children:o("finance.member.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!O,children:o("finance.quickAdd.add")})]})]})]})})}function ia({exp:e,finData:n,locale:i,t:r,onDelete:o,onClone:a,onToggleReimbursed:s,compact:d=!1,selectMode:p=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:g}){let f=ie(e.categoryId),b=n.familyMembers.findIndex(n=>n.id===e.childId),y=b>=0?n.familyMembers[b]:null,w=y?(0,h.a8)(y,b):l.w4.colors.mainTextMuted,j=g?g(e.id):null,v=n=>{p&&x&&"INPUT"!==n.target.tagName&&x(e.id)},$=e.isReimbursable&&!p?s?(0,t.jsx)(e0,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(eQ,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,k=!p&&a?(0,t.jsx)(e4,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),a(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,M=p?null:(0,t.jsx)(e1,{className:"delete-btn",type:"button",onClick:()=>o(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),T=p?(0,t.jsx)(eq,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,S=p?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return d?(0,t.jsxs)(eK,{compact:!0,style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eU,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(e_,{children:(0,t.jsxs)(eJ,{style:{display:"flex",alignItems:"center",gap:6},children:[y?(0,t.jsx)(m.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:13,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,c.categoryLabel)(f,i)})]})}),(0,t.jsxs)(eV,{children:[$,(0,t.jsxs)(eX,{children:["−€",n8(e.amount)]}),k,M]})]}):(0,t.jsxs)(eK,{style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eZ,{color:f.color,children:(0,m.n6)(f.icon)?(0,t.jsx)(m.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eJ,{children:e.description||(0,c.categoryLabel)(f,i)}),(0,t.jsxs)(eG,{children:[y?(0,t.jsx)(m.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:11,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,c.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:n9(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(n3,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(eV,{children:[$,"recurring"===e.type&&(0,t.jsx)(eQ,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(eX,{children:["−€",n8(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:l.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),k,M]})]})}}}]);