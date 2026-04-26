"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{ACTIVE_MEMBER_KEY:()=>eN,default:()=>ir});var t=i(5723),r=i(7991),a=i(6859),o=i.n(a),s=i(2799),l=i(4764),c=i(1232),d=i(3759),p=i(789),m=i(5030),u=i(1496),x=i(8170),g=i(4041),f=i(948),h=i(719),b=i(2405),y=i(9546),w=i(5854),j=i(3616),v=i(6579),$=i(8989),k=i(6376),M=i(9146),T=i(7737),S=i(8635),F=i(8501),z=i(1789),C=i(216),R=i(9419),I=i(341),D=i(9378),L=i(1423),E=i(1255),A=i(545),B=i(2167);let O="#7fb77e",P="#f85149",N=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Y=l.w4.suites.lab,W=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${N} 0.25s ease both;
  overflow: hidden;
`,q=o().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,H=o().div`
  display: none;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,K=o().div`
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
`,U=o().div`
  flex: 1;
  min-width: 0;
`,Z=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,_=o().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${Y}`:"transparent"};
  background: ${({active:e})=>e?`${Y}1f`:"transparent"};
  color: ${({active:e})=>e?Y:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${Y};
    outline-offset: 2px;
  }
`,J=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,G=o().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${Y}`:"transparent"};
  background: ${({active:e})=>e?`${Y}1f`:"transparent"};
  color: ${({active:e})=>e?Y:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${Y};
    outline-offset: 2px;
  }
`,V=o().div`
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
`;let X=o().div`
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
  animation: ${N} 0.2s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,Q=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,ee=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${O};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,en=o().button`
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
`,ei=o().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,et=o().input`
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
  border-left: 2px solid ${O};
  padding: ${l.w4.spacing.lg};
`;let er=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`;o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${O};
  padding: ${l.w4.spacing.md};
`;let ea=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,eo=o().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,es=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,el=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,ec=o().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,ed=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ep=o().div`
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
`;let em=o().div`
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
`;let eu=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,ex=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${O};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${O};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,eg=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,ef=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,eh=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,eb=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${O};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,ey=o().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ew=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,ej=o().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,ev=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,e$=o().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,ek=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eM=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eT=o().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,eS=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eF=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,ez=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,eC=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eR=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eI=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eD=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,eL=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eE=o().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eA=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eB="finance:list-density",eO="finance:quick-categories",eP="finance:forecast-months",eN="finance:active-member",eY="finance:insights-layout",eW="finance:overview-layout",eq=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eH=[{id:"overview-hero",size:"lg"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eK=o().input`
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
`,eU=o().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eZ=o().li`
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
`,e_=o().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eJ=o().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eG=o().div`
  flex: 1;
  min-width: 0;
`,eV=o().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eX=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,eQ=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,e0=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e4=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${O}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?O:"#facc15"};
  white-space: nowrap;
`,e1=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${O}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?O:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${O}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e2=o().button`
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
    color: ${O};
    background: ${O}1a;
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e6=o().button`
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
    color: ${P};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e3=o().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${O}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${O}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,e8=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?P:"warning"===e?"#facc15":"success"===e?O:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,e5=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,e7=o().button`
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
`;o()(ex)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let e9=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,ne=o().button`
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
`,nn=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,ni=o().input`
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
`,nt=o().select`
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
`,nr=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${O};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,na=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,no=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,ns=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${O};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,nl=o().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${O};
  animation: ${no} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nc=o().div`
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
  animation: ${N} 0.2s ease both;

  strong {
    color: ${l.w4.colors.mainText};
    font-weight: 600;
  }
`,nd=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?O:l.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${O}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${O}44`:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${O}28`:l.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?O:l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,np=o().button`
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
`,nm=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${N} 0.2s ease;
`,nu=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nx=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,ng=o().button`
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
`,nf=o().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?O:l.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?O:l.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${O};
    color: ${O};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,nh=o().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nb=o().ul`
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
`,ny=o().li`
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
`,nw=o().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nj=o().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nv=o().li`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${l.w4.spacing.sm} 2px;
  pointer-events: none;
`,n$=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,nk=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nM=o().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nT=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nS=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nF=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,nz=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nC=o().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nR=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${O}; }
`,nI=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nD=o().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,nL=o().input`
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
`,nE=o().input`
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
`,nA=o().select`
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
`;let nB=o().button`
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
`,nO=o().div`
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
`;let nP=o().footer`
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
`,nN=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,nY=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nW=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nq=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} ${l.w4.borderRadius.md} ${l.w4.borderRadius.md};
  border-left: 2px solid ${O};
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
`,nH=o().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,nK=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nU=o().button`
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
`,nZ=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n_=o().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nJ=o().button`
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
`,nG=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,nV=o().button`
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
`,nX=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nQ=o().input`
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
`,n0=o().select`
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
`,n4=o().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`,n1=o().input`
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
`,n2=o().div`
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
`,n6=o().ul`
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
`,n3=o().li`
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,n8=o().div`
  position: relative;
`,n5=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function n7(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function n9(e){return Math.round(e).toLocaleString("pt-PT")}function ie(){return new Date().toISOString().slice(0,10)}function ii(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function it(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function ir({topBarRight:e}){let n,[i]=(0,x.Ym)(),a=(0,r.useMemo)(()=>(0,x.Nx)(i,f.A),[i]),{data:o,loaded:s,save:N}=(0,c.useFinance)(),Y=o??{...c.EMPTY_FINANCE_DATA},eK=(0,r.useMemo)(()=>(0,c.recentMerchants)(Y.expenses,20).slice(0,6),[Y.expenses]),{canUndo:e4,latestLabelKey:e1,undo:e2}=(0,c.useUndo)(),[no,nq]=(0,r.useState)(null),nH=(0,r.useCallback)(async(e,n)=>{(0,c.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:Y,labelKey:n,ts:Date.now()}),nq(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,p.K)(10),await N(e)},[Y,N]),nK=(0,r.useCallback)(async()=>{let e=e2();e&&(nq("finance.undo.label.reverted"),await N(e),setTimeout(()=>nq(null),2500))},[e2,N]),[nU,nZ]=(0,r.useState)("overview"),[n_,nJ]=(0,r.useState)(()=>(0,c.thisMonthKey)()),[nG,nV]=(0,r.useState)("shared");(0,r.useEffect)(()=>{(0,l.PL)(eN).then(e=>{e&&nV(e)})},[]);let nX=(0,r.useCallback)(e=>{nV(e),(0,l.Is)(eN,e)},[]),[nQ,n0]=(0,r.useState)(!1),[n4,n1]=(0,r.useState)([]),[n2,n6]=(0,r.useState)(!1),[n3,n8]=(0,r.useState)(!1),[n5,ic]=(0,r.useState)(null),id=+(n4.length>0)+ +!!n2,ip=(0,M.E)();(0,r.useEffect)(()=>{"expenses"!==nU&&ip.selectMode&&ip.exitSelectMode()},[nU]);let{range:im,setRange:iu}=(0,d.H)("month"),ix=(0,r.useRef)(null),ig=(0,r.useRef)(null),ih=(0,r.useRef)(null),[ib,iy]=(0,r.useState)(!1),[iw,ij]=(0,r.useState)(""),[iv,i$]=(0,r.useState)(!1),[ik,iM]=(0,r.useState)(""),iT=(0,r.useRef)(null),[iS,iF]=(0,r.useState)(""),[iz,iC]=(0,r.useState)("shared"),[iR,iI]=(0,r.useState)(null),[iD,iL]=(0,r.useState)(!1),iE=(0,r.useRef)(null),[iA,iB]=(0,r.useState)(null),[iO,iP]=(0,r.useState)("EUR"),[iN,iY]=(0,r.useState)(!1),[iW,iq]=(0,r.useState)(!1),iH=(0,A.x)(),iK=(0,r.useRef)(null),iU=(0,r.useRef)(!1),[iZ,i_]=(0,r.useState)(!1),[iJ,iG]=(0,r.useState)(-1),iV=(0,r.useRef)(null),[iX,iQ]=(0,r.useState)(""),[i0,i4]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,l.PL)(eO).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&i4(n)}catch{}})},[]);let[i1,i2]=(0,r.useState)(!1),[i6,i3]=(0,r.useState)(!1),[i8,i5]=(0,r.useState)(!1),i7=(0,r.useCallback)(e=>{let n=e-(0,c.computeCurrentBalance)(Y);if(0===n)return void i5(!1);let i=(Y.budget.openingBalance??0)+n;nH({...Y,budget:{...Y.budget,openingBalance:i}},"finance.undo.label.edited"),i5(!1)},[Y,nH]),i9=(0,r.useCallback)(e=>{nH({...Y,income:[e,...Y.income]},"finance.undo.label.added"),i3(!1),iE.current&&clearTimeout(iE.current),iL(!0),iE.current=setTimeout(()=>iL(!1),2e3)},[Y,nH]),te=(0,r.useCallback)((e,n,i,t)=>{let r=i?[i,...Y.recentDescriptions].filter(Boolean).slice(0,20):Y.recentDescriptions,a={...Y,expenses:[...e,...Y.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)a=(0,c.addRecentTag)(a,e);nH(a,"finance.undo.label.added"),i2(!1),iE.current&&clearTimeout(iE.current),iL(!0),iE.current=setTimeout(()=>iL(!1),2e3)},[Y,nH]),[tn,ti]=(0,r.useState)(""),[tt,tr]=(0,r.useState)(""),[ta,to]=(0,r.useState)(!1),[ts,tl]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,l.PL)(eB).then(e=>{("compact"===e||"comfortable"===e)&&tl(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===ts?"compact":"comfortable";tl(e),(0,l.Is)(eB,e)},[ts]);let[tc,td]=(0,r.useState)(3);(0,r.useEffect)(()=>{(0,l.PL)(eP).then(e=>{"6"===e?td(6):"12"===e&&td(12)})},[]);let tp=(0,r.useCallback)(e=>{td(e),(0,l.Is)(eP,String(e))},[]),tm=(0,r.useMemo)(()=>(0,c.thisMonthKey)(),[]),[tu,tx]=(0,r.useState)(eq);(0,r.useEffect)(()=>{(0,l.PL)(eY).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eq.filter(e=>!i.has(e.id))];tx(t)}catch{}})},[]);let tg=(0,r.useCallback)((e,n)=>{tx(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,l.Is)(eY,JSON.stringify(a)),a})},[]),tf=(0,r.useCallback)(e=>{tx(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eY,JSON.stringify(a)),a})},[]),[th,tb]=(0,r.useState)(eH);(0,r.useEffect)(()=>{(0,l.PL)(eW).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eH.filter(e=>!i.has(e.id))];tb(t)}catch{}})},[]);let ty=(0,r.useCallback)((e,n)=>{tb(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,l.Is)(eW,JSON.stringify(a)),a})},[]),tw=(0,r.useCallback)(e=>{tb(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eW,JSON.stringify(a)),a})},[]),tj=(0,r.useMemo)(()=>(0,c.computeWeeklyStatus)(Y),[Y]);(0,r.useMemo)(()=>(0,c.computeMonthlySummary)(Y,n_),[Y,n_]);let tv=(0,r.useMemo)(()=>(0,c.generateInsightsWithMembers)(Y),[Y]),{insights:t$,dismiss:tk}=(0,c.useFinanceAnomalies)(),tM=(0,r.useMemo)(()=>(0,c.availableMonths)(Y),[Y]),tT=(0,r.useMemo)(()=>(0,c.filterExpensesByRange)(Y.expenses,im,n_),[Y.expenses,im,n_]),tS=(0,r.useMemo)(()=>(0,c.filterIncomeByRange)(Y.income,im,n_),[Y.income,im,n_]),tF=(0,r.useMemo)(()=>{let e=(0,c.expensesForMember)(tT,nG);return n4.length>0&&(e=e.filter(e=>n4.includes(e.categoryId))),n2&&(e=e.filter(e=>!0===e.isReimbursable)),e},[tT,nG,n4,n2]),tz=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(Y,nG,tm),[Y,nG,tm]),tC=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tm),[tm]),tR=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(Y,nG,tC),[Y,nG,tC]),tI=(0,r.useMemo)(()=>0===tR?0:Math.round((tz-tR)/tR*100),[tz,tR]),tD=(0,r.useMemo)(()=>{if("all"===nG)return a("finance.member.all");if("shared"===nG)return a("finance.hero.family");let e=Y.familyMembers.find(e=>e.id===nG);return e?.name??a("finance.hero.family")},[nG,Y.familyMembers,a]),tL=(0,r.useMemo)(()=>{if("all"===nG||"shared"===nG)return l.w4.colors.mainTextMuted;let e=Y.familyMembers.findIndex(e=>e.id===nG);return -1===e?O:(0,h.a8)(Y.familyMembers[e],e)},[nG,Y.familyMembers]),tE=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,c.expensesForMember)(Y.expenses,nG).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[Y.expenses,nG]),tA=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,c.expensesForMonth)(e.expenses,i),a=(0,c.expensesForMember)(t,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:it(e).color})),over:s>r?s-r:0}})})(Y,nG),[Y,nG]);(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,c.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:d,exp:l})}return t})(Y,nG),[Y,nG]);let tB=(0,r.useMemo)(()=>(0,c.forecastCashFlow)(Y,tc),[Y,tc]),tO=(0,r.useMemo)(()=>(0,c.firstNegativeDay)(tB),[tB]),tP=(0,r.useMemo)(()=>{let e,n;return e=new Date,n=Y.expenses.length>0?Y.expenses.reduce((e,n)=>e+n.amount,0)/Y.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),o=(0,c.expensesForMember)(Y.expenses.filter(e=>e.date===a),nG).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[Y,nG]),tN=(0,r.useMemo)(()=>(0,c.dayHourSpendMatrix)((0,c.expensesForMember)(Y.expenses,nG)),[Y.expenses,nG]),tY=(0,r.useMemo)(()=>{let e=[];return e.push({key:"shared",label:a("finance.income.member.shared"),color:l.w4.colors.mainTextMuted,incomeSpk:(0,c.incomeSparkline)(Y.income,"shared"),spendSpk:(0,c.memberSparkline)(Y.expenses,"shared"),incomeTotal:(0,c.incomeForMember)(Y.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,c.expensesForMember)(Y.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,c.incomeForMember)(Y.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,c.expensesForMember)(Y.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,c.memberNetByMonth)(Y,"shared",6)}),Y.familyMembers.forEach((n,i)=>{let t=(0,h.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,c.incomeSparkline)(Y.income,n.id),spendSpk:(0,c.memberSparkline)(Y.expenses,n.id),incomeTotal:(0,c.incomeForMember)(Y.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,c.expensesForMember)(Y.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,c.incomeForMember)(Y.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,c.expensesForMember)(Y.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,c.memberNetByMonth)(Y,n.id,6)})}),e},[Y,a]),tW=(0,r.useMemo)(()=>{let e=Object.entries((0,c.incomeByMember)(Y.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:a("finance.income.member.shared"),value:n,color:l.w4.colors.mainTextMuted};let i=Y.familyMembers.findIndex(n=>n.id===e),t=Y.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,h.a8)(t,i):l.w4.colors.accent}})},[Y,a]),tq=(0,r.useMemo)(()=>tW.reduce((e,n)=>e+n.value,0),[tW]),tH=tj.budget>0?tj.spent/tj.budget*100:0,tK=Y.budget.monthlyBudget>0?tz/Y.budget.monthlyBudget*100:0,tU=(0,r.useMemo)(()=>{let e=iv&&ik.trim()?ik.trim():(0,c.parseQuickInput)(iw,Y.familyMembers)?.description;return e?(0,c.guessCategoryWithRules)(Y,e):"other"},[iw,iv,ik,Y]),tZ=iS||iX||tU,t_=(0,r.useMemo)(()=>(0,c.parseRecurringHint)(iw),[iw]);(0,r.useEffect)(()=>{let e=(0,c.parseQuickInput)(iw,Y.familyMembers);e?.memberId&&iC(e.memberId)},[iw,Y.familyMembers]);let tJ=(0,r.useCallback)(()=>{let e=(0,c.parseQuickInput)(iw,Y.familyMembers),n=(0,c.parseRecurringHint)(iw);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");iB({amount:e.amount,description:e.description||(tZ??"other"),categoryId:tZ||"other",cadence:n.cadence,firstDue:`${t}-${r}-${a}`})},[iw,Y.familyMembers,tZ]),tG=(0,r.useCallback)(()=>{if(!iA)return;let e=new Date(iA.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iA.description,amount:iA.amount,categoryId:iA.categoryId,cadence:iA.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iz?iz:void 0};nH({...Y,recurringRules:[...Y.recurringRules??[],n]},"finance.undo.label.added"),iB(null),ij(""),iF(""),iQ(""),iE.current&&clearTimeout(iE.current),iL(!0),iE.current=setTimeout(()=>iL(!1),2e3)},[iA,Y,iz,nH]),tV=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=iv&&ik.trim()?ik.trim():void 0,t=(0,c.parseQuickInput)(iw,Y.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let r=tZ||"other",a=t.memberId??("shared"!==iz?iz:void 0),o=t.tags??[],s=t.description?(0,c.normalizeMerchant)(t.description):void 0,d=ie(),p=t.amount;if("EUR"!==iO){iq(!0),iY(!1);let e=await (0,c.convertToEUR)({amount:t.amount,code:iO,date:d});if(iq(!1),!e)return void iY(!0);p=e.eur,n={code:iO,rate:e.rate,original:t.amount}}let m={id:(0,g.z)(),amount:p,date:d,categoryId:r,description:t.description||r,type:"daily",childId:a,createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{}};i_(!1),iY(!1);let u={...Y.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=r)});let x=[t.description||"",...Y.recentDescriptions].filter(Boolean).slice(0,20),f=[m,...Y.expenses],h={...Y,expenses:f,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,c.addRecentTag)(h,e);nH(h,"finance.undo.label.added");let b=(0,v.j)(f);i4(b),(0,l.Is)(eO,JSON.stringify(b)),ij(""),iM(""),i$(!1),iF(""),iQ(""),iI(null),iE.current&&clearTimeout(iE.current),iL(!0),iE.current=setTimeout(()=>iL(!1),2e3)},[iw,iv,ik,tZ,iz,iO,Y,nH]),tX=(0,r.useCallback)(e=>{(0,p.K)([10,50,10]);let n=(0,c.parseQuickInput)(e,Y.familyMembers);if(n){let e=iS||iX||(n.description?(0,c.guessCategoryWithRules)(Y,n.description):"other"),i=n.memberId??("shared"!==iz?iz:void 0),t=n.tags??[],r={id:(0,g.z)(),amount:n.amount,date:ie(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},a={...Y.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(a[n]=e)});let o=[n.description||"",...Y.recentDescriptions].filter(Boolean).slice(0,20),s={...Y,expenses:[r,...Y.expenses],categoryHints:a,recentDescriptions:o};for(let e of t)s=(0,c.addRecentTag)(s,e);nH(s,"finance.undo.label.added");let d=(0,v.j)([r,...Y.expenses]);i4(d),(0,l.Is)(eO,JSON.stringify(d)),ij(""),iF(""),iQ(""),iE.current&&clearTimeout(iE.current),iL(!0),iE.current=setTimeout(()=>iL(!1),2e3)}else ij(e),ig.current?.focus()},[Y,iS,iX,iz,nH]),tQ=(0,r.useCallback)(e=>{nH({...Y,expenses:Y.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[Y,nH]),t0=(0,r.useCallback)(e=>{let n=Y.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,g.z)(),date:ie(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nH({...Y,expenses:[i,...Y.expenses]},"finance.undo.label.added")},[Y,nH]),t4=(0,r.useCallback)(e=>{nH({...Y,income:Y.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[Y,nH]),t1=(0,r.useCallback)(e=>{nH({...Y,expenses:Y.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[Y,nH]),t2=(0,r.useCallback)(()=>{let e=parseFloat(tn)||Y.budget.weeklyBudget,n=parseFloat(tt)||Y.budget.monthlyBudget;N({...Y,budget:{...Y.budget,weeklyBudget:e,monthlyBudget:n}}),to(!0),setTimeout(()=>to(!1),2e3)},[tn,tt,Y,N]),t6=(0,r.useCallback)(()=>{let e=ip.selectedIds;0!==e.size&&(nH({...Y,expenses:Y.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),ip.exitSelectMode())},[ip,Y,nH]),t3=(0,r.useCallback)(e=>{let n=ip.selectedIds;0!==n.size&&(nH({...Y,expenses:Y.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),ip.exitSelectMode())},[ip,Y,nH]),t8=(0,r.useCallback)(()=>{let e=ip.selectedIds;0!==e.size&&(nH({...Y,expenses:Y.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),ip.exitSelectMode())},[ip,Y,nH]),t5=(0,r.useMemo)(()=>["shared",...Y.familyMembers.map(e=>e.id)],[Y.familyMembers]);(0,j.K)({quickAddInputRef:ig,monthSelectRef:ih,memberIds:t5,activeMemberId:nG,onSelectMember:nX,onSetTab:e=>nZ(e),expenseModalOpen:i1,onOpenExpenseModal:()=>i2(!0),shortcutsOpen:ib,onToggleShortcuts:()=>iy(e=>!e)});let t7=[{value:"week",label:a("finance.range.pill.7d")},{value:"month",label:a("finance.range.pill.month")},{value:"3m",label:a("finance.range.pill.3m")},{value:"6m",label:a("finance.range.pill.6m")},{value:"1y",label:a("finance.range.pill.year")}],t9=Math.floor(tz).toLocaleString("pt-PT"),re=(tz%1).toFixed(2).slice(1),rn=(0,r.useMemo)(()=>{if(0===(Y.goals??[]).length)return null;let e=(0,c.recomputeGoalCurrents)(Y);return{onTrack:e.goals.filter(e=>"behind"!==(0,c.goalStatus)(e)).length,total:e.goals.length}},[Y]),ri=(()=>{let[e,n]=tm.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),rt=(0,t.jsx)(h.TA,{data:Y,activeMemberId:nG,onSelectMember:nX,onSaveData:N,t:a,locale:i}),rr=(0,r.useMemo)(()=>{let e={};for(let n of tF)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:it(e).color}))},[tF]),ra=rr.reduce((e,n)=>e+n.value,0),ro=(0,r.useMemo)(()=>tA.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tA]),rs=tA.length>0?ro/tA.length:0,rl=tA.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>Y.budget.monthlyBudget).length,rc=(0,r.useMemo)(()=>{if(0===tF.length)return null;let e=tF.reduce((e,n)=>n.amount>e.amount?n:e,tF[0]),n={};for(let e of tF){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?Y.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??a("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tF){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tF.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tF,Y.familyMembers,a]);return(0,t.jsxs)(l.PE,{title:a("finance.appTitle"),sidebar:rt,topBarRight:e,activeId:nG,children:[(0,t.jsxs)(W,{children:[(0,t.jsx)(q,{children:(0,t.jsx)(h.jb,{data:Y,activeMemberId:nG,onSelectMember:nX,t:a,locale:i})}),(0,t.jsxs)(K,{children:[(0,t.jsx)(U,{children:(0,t.jsx)("div",{role:"tablist","aria-label":a("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:a("finance.tab.overview"),expenses:a("finance.tab.expenses"),insights:a("finance.tab.insights")},i={overview:0,expenses:tF.length,insights:tv.length}[e];return(0,t.jsxs)(_,{type:"button",role:"tab","aria-selected":nU===e,active:nU===e,onClick:()=>nZ(e),children:[n[e],i>0&&(0,t.jsxs)(J,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)(m.ms,{align:"right",trigger:(0,t.jsx)(m.$n,{variant:id>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"filter",size:13,"aria-hidden":!0}),children:id>0?a("finance.filters.activeCount",{n:id}):a("finance.actions.filters")}),children:[(0,t.jsx)(m.o_,{children:a("finance.filters.member")}),["shared",...Y.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?a("finance.hero.family"):Y.familyMembers.find(n=>n.id===e)?.name??e,i=e===nG;return(0,t.jsx)(m.tJ,{onClick:()=>nX(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(m.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.o_,{children:a("finance.filters.category")}),(0,t.jsx)(m.tJ,{onClick:()=>n1([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===n4.length&&(0,t.jsx)(m.In,{name:"check",size:12}),n4.length>0&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.allCategories")]})}),c.DEFAULT_CATEGORIES.map(e=>{let n=n4.includes(e.id);return(0,t.jsx)(m.tJ,{onClick:()=>n1(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(m.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.tJ,{onClick:()=>n6(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n2&&(0,t.jsx)(m.In,{name:"check",size:12}),!n2&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.reimbursableOnly")]})}),id>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.tJ,{onClick:()=>{n1([]),n6(!1)},children:a("finance.filters.reset")})]})]}),(0,t.jsx)(m.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>n8(!0),children:a("finance.actions.categories")}),"expenses"===nU&&(0,t.jsx)(m.$n,{variant:ip.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{ip.selectMode?ip.exitSelectMode():ip.enterSelectMode()},children:a("finance.bulk.select")}),(0,t.jsx)(m.K0,{onClick:()=>n0(!0),title:a("finance.actions.settings"),"aria-label":a("finance.actions.settings"),active:nQ,children:(0,t.jsx)(m.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(H,{children:(0,t.jsx)(m.K0,{onClick:()=>iy(e=>!e),title:a("finance.shortcuts.title"),"aria-label":a("finance.shortcuts.title"),active:ib,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(V,{"aria-label":a("finance.range.label"),children:t7.map(({value:e,label:n})=>(0,t.jsx)(G,{type:"button",active:im===e,onClick:()=>{iu(e),"month"===e&&nJ(tm)},"aria-pressed":im===e,children:n},e))}),"month"===im&&Y.expenses.length>0&&(0,t.jsx)($.f,{data:Y,selectedMonth:n_,onSelectMonth:nJ,locale:i,t:a}),(0,t.jsxs)(em,{children:["overview"===nU&&(0,t.jsxs)(eu,{children:[(0,t.jsxs)(ee,{ref:ix,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:l.w4.colors.mainTextMuted},children:a("finance.quickAdd.title")}),(0,t.jsxs)(nr,{visible:iD&&!iH.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",a("finance.quickAdd.added")]}),iH.listening&&(0,t.jsxs)(ns,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nl,{}),a("finance.voice.listening")]}),(0,t.jsxs)(m.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i3(!0),children:["+ ",a("finance.quickAdd.addIncome")]}),(0,t.jsxs)(m.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i5(!0),children:["⚖ ",a("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:tV,"aria-label":a("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(e9,{children:[{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...Y.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(Y.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(ne,{type:"button",active:iz===e.id,color:i,onClick:()=>iC(e.id),children:[(0,t.jsx)(m.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(nn,{children:[(0,t.jsxs)(nh,{children:[(0,t.jsx)(ni,{ref:ig,type:"text",placeholder:iv?a("finance.quickAdd.amountOnlyPlaceholder"):a("finance.quickAdd.placeholder"),value:iw,onChange:e=>{ij(e.target.value),iF(""),i_(eK.length>0),iG(-1)},onFocus:()=>{eK.length>0&&!iw.trim()&&i_(!0)},onBlur:()=>{setTimeout(()=>i_(!1),150)},onKeyDown:e=>{if(iZ&&0!==eK.length)if("ArrowDown"===e.key)e.preventDefault(),iG(e=>Math.min(e+1,eK.length-1));else if("ArrowUp"===e.key)e.preventDefault(),iG(e=>Math.max(e-1,-1));else if("Enter"===e.key&&iJ>=0){e.preventDefault();let n=eK[iJ];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iw);ij(e?iw.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iF(""),i_(!1),iG(-1)}}else"Escape"===e.key&&(i_(!1),iG(-1))},"aria-label":a("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":iZ&&eK.length>0,autoComplete:"off",inputMode:"decimal"}),iZ&&eK.length>0&&(0,t.jsxs)(nb,{ref:iV,role:"listbox","aria-label":a("finance.merchant.recent"),children:[(0,t.jsx)(nv,{role:"presentation",children:a("finance.merchant.recent")}),eK.map((e,n)=>(0,t.jsxs)(ny,{role:"option","aria-selected":iJ===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iw);ij(i?iw.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iF(""),i_(!1),iG(-1),ig.current?.focus()},children:[(0,t.jsx)(nw,{children:e.merchant}),(0,t.jsxs)(nj,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(en,{type:"button","aria-pressed":iv,"aria-label":iv?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iv;i$(e),e&&requestAnimationFrame(()=>iT.current?.focus())},children:[(0,t.jsx)(m.In,{name:iv?"close":"plus",size:11}),iv?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(nt,{value:iS||tU,onChange:e=>{let n=e.target.value,i=iS||tU;iF(n);let t=iv&&ik.trim()?ik.trim():(0,c.parseQuickInput)(iw,Y.familyMembers)?.description;t&&iI((0,c.proposeRuleFromOverride)(i,n,t))},"aria-label":a("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(nt,{value:iO,onChange:e=>{iP(e.target.value),iY(!1)},"aria-label":a("finance.currency.label"),style:{maxWidth:72},children:c.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iw.trim()||iW,children:iW?a("finance.currency.converting"):a("finance.quickAdd.add")}),iH.supported&&(0,t.jsx)(nf,{type:"button","aria-label":a("finance.voice.listening"),"aria-pressed":iH.listening,active:iH.listening,onPointerDown:()=>{iK.current=window.setTimeout(()=>{iK.current=null,iU.current=!0,(0,p.K)(30),iH.listening?iH.stop():iH.start(tX)},500)},onPointerUp:()=>{null!==iK.current&&(clearTimeout(iK.current),iK.current=null,iU.current||((0,p.K)(10),iH.listening?iH.stop():iH.start(tX))),iU.current=!1},onPointerCancel:()=>{null!==iK.current&&(clearTimeout(iK.current),iK.current=null),iU.current=!1},children:(0,t.jsx)(m.In,{name:"mic",size:16})})]}),(0,t.jsx)(ei,{visible:iv,children:(0,t.jsx)(et,{ref:iT,type:"text",placeholder:a("finance.quickAdd.descPlaceholder"),maxLength:80,value:ik,onChange:e=>iM(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),i$(!1),ig.current?.focus())},"aria-label":a("finance.quickAdd.descPlaceholder"),tabIndex:iv?0:-1})}),(0,t.jsx)(v.J,{expenses:Y.expenses,storedOrder:i0,lockedCategoryId:iX,onToggle:e=>iQ(n=>n===e?"":e),locale:i,groupLabel:a("finance.quickAdd.frequentCategories")}),iR&&(0,t.jsxs)(nc,{children:[(0,t.jsxs)("span",{children:[a("finance.categoryRules.alwaysCategorize",{match:iR.match})," ",(0,t.jsx)("strong",{children:(n=c.DEFAULT_CATEGORIES.find(e=>e.id===iR.categoryId))?(0,c.categoryLabel)(n,i):iR.categoryId}),"?"]}),(0,t.jsx)(nd,{type:"button",accent:!0,onClick:()=>{Y&&iR&&(nH({...Y,categoryRules:[iR,...Y.categoryRules??[]]},"finance.undo.label.added"),iI(null))},children:a("finance.categoryRules.propose")}),(0,t.jsx)(nd,{type:"button",onClick:()=>iI(null),children:a("finance.categoryRules.dismiss")})]}),iN&&(0,t.jsx)(na,{style:{color:P},role:"alert",children:a("finance.currency.fxFailed")}),t_&&(0,c.parseQuickInput)(iw,Y.familyMembers)&&(0,t.jsxs)(np,{type:"button",onClick:tJ,"aria-label":a("finance.recurring.makeRecurring"),children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsx)(na,{children:a("finance.quickAdd.hint")})]})]}),(0,t.jsx)(m.dO,{items:th.map(e=>({...e})),onReorder:ty,onCycleSize:tw,accentColor:()=>O,labels:{moveLeft:a("finance.overview.panel.moveLeft"),moveRight:a("finance.overview.panel.moveRight"),cycleSize:a("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(eb,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(ey,{children:[(0,t.jsxs)(ew,{children:[a("finance.hero.spentIn")," ",ri," \xb7 ",tD]}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:"€"}),(0,t.jsx)(e$,{children:t9}),(0,t.jsx)(ek,{children:re})]}),(0,t.jsxs)(eM,{children:[(0,t.jsx)(u.Ru,{value:tI,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[a("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(tC,i)," \xb7 €",n9(tR)]})]}),tE.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:tE,accent:tL,width:280,height:34})}),null!==rn&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:rn.onTrack===rn.total?"#7fb77e":l.w4.colors.mainTextMuted},children:a("finance.goals.hero",{on:rn.onTrack,total:rn.total})})]}),(0,t.jsx)(eT,{children:(0,t.jsxs)(eS,{children:[(0,t.jsxs)(eF,{children:[(0,t.jsx)(ez,{children:a("finance.budget.weekly")}),(0,t.jsxs)(eC,{children:["€",n9(tj.spent)," ",(0,t.jsxs)(eR,{children:["/ €",tj.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:tH,over:tH>100?tH-100:0}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)("span",{children:[Math.round(tH),"% ",a("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tj.remaining<0?P:O},children:tj.remaining>0?`€${n9(tj.remaining)} ${a("finance.budget.remaining")}`:`€${n9(Math.abs(tj.remaining))} ${a("finance.budget.over")}`})]}),(0,t.jsxs)(eF,{style:{marginTop:14},children:[(0,t.jsx)(ez,{children:a("finance.budget.monthly")}),(0,t.jsxs)(eC,{children:["€",n9(tz)," ",(0,t.jsxs)(eR,{children:["/ €",Y.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:tK,over:tK>100?tK-100:0}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)("span",{children:[Math.round(tK),"% ",a("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[a("finance.budget.projected")," €",n9(tz+(tj.projectedTotal-tj.spent))]})]})]})})]});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eg,{children:[(0,t.jsx)(ef,{children:a("finance.charts.sixMonths")}),(0,t.jsx)(eh,{children:(0,t.jsx)(nN,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nY,{children:[(0,t.jsx)(nW,{color:e.color}),(0,c.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(u.ik,{data:tA,budget:Y.budget.monthlyBudget,height:200}),(0,t.jsxs)(n$,{children:[(0,t.jsxs)(nk,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nM,{children:["€",n9(ro)]})]}),(0,t.jsxs)(nk,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nM,{children:["€",n9(rs)]})]}),(0,t.jsxs)(nk,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nM,{children:[rl," / ",tA.length]})]}),(0,t.jsxs)(nk,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nM,{style:{color:tI>0?P:O},children:[tI>0?"+":"",tI,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eg,{children:[(0,t.jsx)(ef,{children:a("finance.charts.byCategory")}),(0,t.jsx)(nB,{type:"button",onClick:()=>nZ("insights"),children:a("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:rr,total:ra,size:110,centerLabel:ri.slice(0,3),centerValue:`€${n9(ra)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rr.map(e=>{let n=it(e.id),r=(0,c.expensesForMember)((0,c.expensesForMonth)(Y.expenses,tC),nG).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eD,{children:[(0,t.jsx)(eL,{color:e.color}),(0,t.jsx)(eE,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eA,{children:["€",n9(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(u.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eg,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ef,{children:a("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.forecast.sub",{n:tc})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(G,{type:"button",active:tc===e,onClick:()=>tp(e),"aria-pressed":tc===e,children:a(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(R.b,{forecast:tB,firstNegDate:tO,t:a,locale:i,height:170})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eg,{children:(0,t.jsx)(ef,{children:a("finance.charts.heatmap")})}),(0,t.jsx)(u.RT,{data:tP,locale:i}),(0,t.jsxs)(nT,{children:[(0,t.jsx)("span",{children:a("finance.charts.less")}),(0,t.jsx)(nS,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:a("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(er,{children:(0,t.jsx)(m.YZ,{children:a("finance.heatmap.title")})}),(0,t.jsx)(b.D,{matrix:tN,locale:i,t:a})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eg,{children:(0,t.jsx)(ef,{children:a("finance.charts.thisWeek")})}),(0,t.jsxs)(nF,{children:[(0,t.jsxs)(nz,{children:[(0,t.jsxs)(nC,{children:["€",n9(tj.spent)]}),(0,t.jsxs)(eR,{children:["/ €",tj.budget]})]}),(0,t.jsx)(u.kl,{spent:tj.spent,budget:tj.budget}),(0,t.jsxs)(nR,{children:[(0,t.jsx)("span",{children:a("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:a("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(m.YZ,{children:a("finance.recent.title")}),tF.length>8&&(0,t.jsx)(nB,{type:"button",onClick:()=>nZ("expenses"),children:a("finance.recent.viewAll",{n:tF.length})})]}),0===tF.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:a("finance.dashboard.noRecent")}):(0,t.jsx)(eU,{"aria-label":a("finance.recent.title"),children:tF.slice(0,8).map(e=>(0,t.jsx)(il,{exp:e,finData:Y,locale:i,t:a,onDelete:tQ,onClone:t0,onToggleReimbursed:t1,compact:"compact"===ts},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.incomeMix.title")}),0===tW.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,padding:`${l.w4.spacing.md} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:tW,total:tq,size:100,centerLabel:a("finance.byMember.income"),centerValue:`€${n9(tq)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:tW.map(e=>(0,t.jsxs)(eD,{children:[(0,t.jsx)(eL,{color:e.color}),(0,t.jsx)(eE,{children:e.label}),(0,t.jsxs)(eA,{style:{color:O},children:["€",n9(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===nG?tY:tY.filter(e=>e.key===nG);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.byMember.title")}),tY.length<=1&&0===Y.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:O},{id:"expense",value:e.expense,color:P}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:l.w4.spacing.sm},children:[(0,t.jsx)(m.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamily,color:l.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?O:P},children:[n.net>=0?"+":"","€",n9(Math.abs(n.net))]}),(0,t.jsx)(u.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(u.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:l.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(m.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(m.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:O},children:["€",n9(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:O,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:P},children:["€",n9(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:P,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nU&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nO,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:a("finance.tx.title")}),"month"===im&&0===Y.expenses.length&&(0,t.jsx)(nA,{ref:ih,value:n_,onChange:e=>nJ(e.target.value),"aria-label":a("finance.insights.month"),children:tM.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),0===tF.length&&0===tS.length?(0,t.jsx)(ex,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.tx.empty")})}):(0,t.jsx)(ex,{span:12,children:(0,t.jsx)(eU,{"aria-label":a("finance.tx.title"),children:[...tF.map(e=>({...e,_kind:"expense"})),...tS.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(il,{exp:e,finData:Y,locale:i,t:a,onDelete:tQ,onClone:t0,onToggleReimbursed:t1,compact:"compact"===ts,selectMode:ip.selectMode,selected:ip.selectedIds.has(e.id),onToggleSelect:ip.toggleId,longPressHandlers:ip.longPressHandlers,onEnterSelectMode:ip.enterSelectMode},e.id):(0,t.jsxs)(eZ,{compact:"compact"===ts,children:["compact"===ts?(0,t.jsx)(e_,{color:O,"aria-hidden":!0}):(0,t.jsx)(eJ,{color:O,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eG,{children:[(0,t.jsx)(eV,{children:e.source}),"compact"!==ts&&(0,t.jsxs)(eX,{children:[ii(e.date,i)," \xb7 ",a("finance.dashboard.income")]})]}),(0,t.jsxs)(eQ,{children:[(0,t.jsxs)(e0,{style:{color:O},children:["+€",n7(e.amount)]}),(0,t.jsx)(e6,{className:"delete-btn",type:"button",onClick:()=>t4(e.id),"aria-label":`${a("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nU&&(0,t.jsxs)(ep,{children:[(0,t.jsxs)(nO,{style:{marginBottom:0},children:[(0,t.jsx)(m.YZ,{children:a("finance.insights.title")}),"month"===im&&0===Y.expenses.length&&(0,t.jsx)(nA,{value:n_,onChange:e=>nJ(e.target.value),"aria-label":a("finance.insights.month"),children:tM.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),null!==rc&&(0,t.jsxs)(eo,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(el,{children:a("finance.kpi.biggestExpense")}),(0,t.jsxs)(ec,{children:["€",rc.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ed,{children:rc.biggest.description?`${rc.biggest.description} \xb7 ${(0,c.categoryLabel)(it(rc.biggest.categoryId),i)}`:(0,c.categoryLabel)(it(rc.biggest.categoryId),i)})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(el,{children:a("finance.kpi.topSpender")}),(0,t.jsxs)(ec,{children:["€",rc.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ed,{children:rc.topMemberLabel})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(el,{children:a("finance.kpi.busiestDay")}),(0,t.jsxs)(ec,{children:["€",rc.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ed,{children:a(`finance.weekday.${rc.busiestDowKey}`)})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(el,{children:a("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(ec,{children:["€",rc.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ed,{children:0===rc.reimbursableTotal?"—":a("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(m.dO,{items:tu.map(e=>({...e})),onReorder:tg,onCycleSize:tf,accentColor:()=>O,labels:{moveLeft:a("finance.insights.panel.moveLeft"),moveRight:a("finance.insights.panel.moveRight"),cycleSize:a("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.charts.sixMonths")}),(0,t.jsx)(u.ik,{data:tA,budget:Y.budget.monthlyBudget,height:180}),(0,t.jsxs)(n$,{style:{marginTop:l.w4.spacing.sm},children:[(0,t.jsxs)(nk,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nM,{children:["€",n9(ro)]})]}),(0,t.jsxs)(nk,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nM,{children:["€",n9(rs)]})]}),(0,t.jsxs)(nk,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nM,{style:{color:tI>0?P:O},children:[tI>0?"+":"",tI,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.charts.byCategory")}),0===rr.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${l.w4.spacing.lg} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:rr,total:ra,size:110,centerLabel:ri.slice(0,3),centerValue:`€${n9(ra)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rr.map(e=>{let n=it(e.id),r=e.color||l.w4.colors.mainTextMuted,a=(0,c.expensesForMember)((0,c.expensesForMonth)(Y.expenses,tC),nG).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eD,{children:[(0,t.jsx)(eL,{color:r}),(0,t.jsx)(eE,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eA,{children:["€",n9(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.insights.title")}),0===tv.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tv.map((e,n)=>(0,t.jsxs)(e3,{itype:e.type,children:[(0,t.jsx)(e8,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:a(e.messageKey,e.params)}),e.memberId&&(()=>{let n=Y.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=Y.familyMembers.indexOf(n);return(0,t.jsxs)(e5,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.insights.anomalies")}),0===t$.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:t$.map(e=>(0,t.jsxs)(e3,{itype:e.type,children:[(0,t.jsx)(e8,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:a(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(e7,{type:"button",title:a("finance.insights.anomalies.dismiss"),"aria-label":a("finance.insights.anomalies.dismiss"),onClick:()=>{tk(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.smallMultiples.title")}),(0,t.jsx)(E.R,{expenses:Y.expenses,familyMembers:Y.familyMembers,getMemberColor:h.a8,t:a,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.reimbursables.tracker.title")}),(0,t.jsx)(L.p,{expenses:Y.expenses,familyMembers:Y.familyMembers,getMemberColor:h.a8,t:a,locale:i})]});case"analytics-budgets":return(0,t.jsx)(I.z,{});case"analytics-bills":return(0,t.jsx)(F.J,{});case"analytics-subscriptions":return(0,t.jsx)(T.n,{});case"analytics-goals":return(0,t.jsx)(S.f,{});case"analytics-recurring":return(0,t.jsx)(z.b,{});case"analytics-rules":return(0,t.jsx)(D.K,{});case"analytics-networth":return(0,t.jsx)(C.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.byMember.title")}),0===tY.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:l.w4.spacing.sm},children:tY.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(m.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(m.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:O},children:["€",n9(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:O,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:P},children:["€",n9(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:P,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nP,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),i1&&(0,t.jsx)(is,{finData:Y,activeMemberId:nG,locale:i,t:a,onClose:()=>i2(!1),onSubmit:te}),i6&&(0,t.jsx)(io,{finData:Y,locale:i,t:a,onClose:()=>i3(!1),onSubmit:i9}),i8&&(0,t.jsx)(ia,{finData:Y,t:a,onClose:()=>i5(!1),onSubmit:i7}),(0,t.jsx)(y.S,{labelKey:no,onUndo:()=>{nK()},onDismiss:()=>nq(null),t:a}),ip.selectMode&&"expenses"===nU&&(0,t.jsx)(k.S,{selectionCount:ip.selectedIds.size,visibleIds:tF.map(e=>e.id),selectedIds:ip.selectedIds,categories:c.DEFAULT_CATEGORIES,locale:i,t:a,onCancel:ip.exitSelectMode,onSelectAll:()=>ip.selectAll(tF.map(e=>e.id)),onCategorise:t3,onDelete:t6,onMarkReimbursed:t8}),ib&&(0,t.jsx)(w.m,{t:a,onClose:()=>iy(!1)}),(0,t.jsx)(B.X,{open:nQ,onClose:()=>n0(!1),ariaLabel:a("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(X,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(m.YZ,{children:a("finance.settings.title")}),(0,t.jsx)(m.K0,{onClick:()=>n0(!1),title:a("finance.actions.settings"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"drawer-weekly-budget",children:a("finance.settings.weeklyBudget")}),(0,t.jsx)(nL,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(Y.budget.weeklyBudget),value:tn,onChange:e=>ti(e.target.value)})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"drawer-monthly-budget",children:a("finance.settings.monthlyBudget")}),(0,t.jsx)(nL,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(Y.budget.monthlyBudget),value:tt,onChange:e=>tr(e.target.value)})]}),(0,t.jsx)(m.$n,{variant:"primary",onClick:()=>{t2(),n0(!1)},style:{height:44},children:ta?a("finance.settings.saved"):a("finance.settings.save")})]})]})}),(0,t.jsx)(B.X,{open:n3,onClose:()=>{n8(!1),ic(null)},ariaLabel:a("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(X,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(m.YZ,{children:a("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!n5&&(0,t.jsx)(m.$n,{variant:"ghost",style:{height:28},onClick:()=>ic({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:a("finance.categories.new")}),(0,t.jsx)(m.K0,{onClick:()=>{n8(!1),ic(null)},title:a("finance.categories.cancel"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]})]}),n5&&(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.md,display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{children:a("finance.categories.labelEn")}),(0,t.jsx)(nE,{value:n5.labelEn,onChange:e=>ic(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{children:a("finance.categories.labelPt")}),(0,t.jsx)(nE,{value:n5.labelPt,onChange:e=>ic(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{children:a("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:n5.icon,onChange:e=>ic(n=>n&&{...n,icon:e.target.value}),style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:m.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{children:a("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:n5.color,onChange:e=>ic(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nE,{value:n5.color,onChange:e=>ic(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",style:{height:28},onClick:()=>ic(null),children:a("finance.categories.cancel")}),(0,t.jsx)(m.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!n5.labelEn||!n5.labelPt)return;let e={id:(0,g.z)(),labelEn:n5.labelEn,labelPt:n5.labelPt,icon:n5.icon,color:n5.color,isCustom:!0},n=Y.categories??[];nH({...Y,categories:[...n,e]},"finance.undo.label.added"),ic(null)},children:a("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,m.n6)(e.icon)?(0,t.jsx)(m.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,c.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:a("finance.categories.builtIn")})]},e.id)),(Y.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,m.n6)(e.icon)?(0,t.jsx)(m.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,c.categoryLabel)(e,i)}),(0,t.jsx)(m.K0,{title:a("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(Y.categories??[]).filter(n=>n.id!==e.id);nH({...Y,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(m.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(B.X,{open:null!==iA,onClose:()=>iB(null),ariaLabel:a("finance.recurring.makeRecurring"),maxWidth:360,children:iA&&(0,t.jsxs)(nm,{children:[(0,t.jsxs)(m.YZ,{children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nu,{children:a("finance.recurring.frequency")}),(0,t.jsx)(nx,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(ng,{type:"button",active:iA.cadence===e,onClick:()=>iB(n=>n?{...n,cadence:e}:null),children:a(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nu,{children:a("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iA.firstDue,onChange:e=>iB(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",onClick:()=>iB(null),children:a("finance.recurring.cancel")}),(0,t.jsx)(m.$n,{variant:"primary",onClick:tG,disabled:!iA.firstDue,children:a("finance.recurring.confirm")})]})]})})]})}function ia({finData:e,t:n,onClose:i,onSubmit:a}){let o=(0,c.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[d,p]=(0,r.useState)(""),u=parseFloat(d.replace(",",".")),x=d.trim().length>0&&!Number.isNaN(u),g=x?u-o:0;return(0,t.jsx)(B.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nH,{children:[(0,t.jsxs)(nK,{children:[(0,t.jsx)(m.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nU,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&a(u)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:l.w4.spacing.sm,background:l.w4.colors.sidebarHover,borderRadius:l.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",n7(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:l.w4.colors.mainTextMuted},children:["€",n7(s)]})]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(nQ,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:d,onChange:e=>p(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:g>0?O:P,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:n7(g)}):n("finance.balance.deltaDown",{n:n7(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(n4,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function io({finData:e,locale:n,t:i,onClose:a,onSubmit:o}){let[s,c]=(0,r.useState)(""),[d,p]=(0,r.useState)(ie()),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)(""),[y,w]=(0,r.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(B.X,{open:!0,onClose:a,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nH,{children:[(0,t.jsxs)(nK,{children:[(0,t.jsx)(m.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nU,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,g.z)(),amount:j,date:d,source:u.trim(),createdAt:Date.now(),...f?{goalId:f}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nZ,{children:[(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(nQ,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>c(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(nQ,{id:"inc-date",type:"date",value:d,onChange:e=>p(e.target.value)})]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(nQ,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(m.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(m.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n);return(0,t.jsxs)(m.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n0,{id:"inc-goal",value:f,onChange:e=>b(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(n4,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:a,children:i("finance.income.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function is({finData:e,activeMemberId:n,locale:i,t:a,onClose:o,onSubmit:s}){let[d,p]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)("other"),[y,w]=(0,r.useState)(ie()),[j,v]=(0,r.useState)("single"),[$,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,r.useState)([]),[z,C]=(0,r.useState)(""),[R,I]=(0,r.useState)(!1),D=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&b((0,c.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let L=parseFloat(d.replace(",","."))||0,E=M.length,A="split"===j&&E>0?L/E:L,O=L>0&&!!y&&("single"===j||"split"===j&&E>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),C(""),I(!1))},N=(0,r.useMemo)(()=>{let n=z.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[z,e.recentTags,S]),Y=[{id:"shared",name:a("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(B.X,{open:!0,onClose:o,ariaLabel:a("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nq,{children:[(0,t.jsxs)(nK,{children:[(0,t.jsxs)(m.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(nU,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!O)return;let t=u.trim(),r=Date.now(),a={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=f)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:L,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===$?void 0:$,createdAt:r,...o}];else{let e=Math.round(L/E*100)/100,n=Math.round((L-e*E)*100)/100;i=M.map((i,a)=>({id:(0,g.z)(),amount:0===a?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${E})`:f,type:"daily",childId:i,createdAt:r+a,...o}))}s(i,a,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nZ,{children:[(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,t.jsx)(nQ,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:d,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,t.jsx)(nQ,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,t.jsx)(nQ,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(n0,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{children:a("finance.tags.label")}),(0,t.jsxs)(n8,{children:[(0,t.jsxs)(n2,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(m.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":a("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(n1,{ref:D,type:"text",value:z,placeholder:0===S.length?a("finance.tags.placeholder"):"",onChange:e=>{C(e.target.value),I(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(z)):"Backspace"===e.key&&""===z&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&I(!1)},onBlur:()=>{z.trim()&&P(z),setTimeout(()=>I(!1),150)},onFocus:()=>I(!0),"aria-label":a("finance.tags.label")})]}),R&&N.length>0&&(0,t.jsx)(n6,{children:N.map(e=>(0,t.jsxs)(n3,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nD,{children:a("finance.modal.assign")}),(0,t.jsxs)(n_,{role:"tablist",children:[(0,t.jsx)(nJ,{type:"button",active:"single"===j,onClick:()=>v("single"),children:a("finance.modal.member")}),(0,t.jsx)(nJ,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,t.jsx)(nG,{style:{marginTop:l.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(nV,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nG,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(nV,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),E>0&&L>0&&(0,t.jsx)(nX,{style:{marginTop:l.w4.spacing.xs},children:a("finance.modal.splitEach",{n:E,amount:n7(A)})})]})]}),(0,t.jsxs)(n4,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:o,children:a("finance.member.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!O,children:a("finance.quickAdd.add")})]})]})]})})}function il({exp:e,finData:n,locale:i,t:r,onDelete:a,onClone:o,onToggleReimbursed:s,compact:d=!1,selectMode:p=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:g}){let f=it(e.categoryId),b=n.familyMembers.findIndex(n=>n.id===e.childId),y=b>=0?n.familyMembers[b]:null,w=y?(0,h.a8)(y,b):l.w4.colors.mainTextMuted,j=g?g(e.id):null,v=n=>{p&&x&&"INPUT"!==n.target.tagName&&x(e.id)},$=e.isReimbursable&&!p?s?(0,t.jsx)(e1,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e4,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,k=!p&&o?(0,t.jsx)(e2,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,M=p?null:(0,t.jsx)(e6,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),T=p?(0,t.jsx)(eK,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,S=p?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return d?(0,t.jsxs)(eZ,{compact:!0,style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(e_,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(eG,{children:(0,t.jsxs)(eV,{style:{display:"flex",alignItems:"center",gap:6},children:[y?(0,t.jsx)(m.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:13,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,c.categoryLabel)(f,i)})]})}),(0,t.jsxs)(eQ,{children:[$,(0,t.jsxs)(e0,{children:["−€",n7(e.amount)]}),k,M]})]}):(0,t.jsxs)(eZ,{style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eJ,{color:f.color,children:(0,m.n6)(f.icon)?(0,t.jsx)(m.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(eG,{children:[(0,t.jsx)(eV,{children:e.description||(0,c.categoryLabel)(f,i)}),(0,t.jsxs)(eX,{children:[y?(0,t.jsx)(m.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:11,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,c.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:ii(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(n5,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(eQ,{children:[$,"recurring"===e.type&&(0,t.jsx)(e4,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e0,{children:["−€",n7(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:l.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),k,M]})]})}}}]);