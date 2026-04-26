"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{ACTIVE_MEMBER_KEY:()=>eU,default:()=>il});var t=i(5723),r=i(7991),a=i(6859),o=i.n(a),s=i(2799),l=i(4764),c=i(8527),d=i(3759),p=i(789),m=i(5030),u=i(9454),x=i(8170),g=i(4041),f=i(948),h=i(719),b=i(2405),y=i(9546),w=i(5854),j=i(3616),v=i(6579),$=i(8989),k=i(6376),M=i(9146),T=i(7737),S=i(8635),F=i(8501),C=i(1789),z=i(216),R=i(9419),I=i(341),D=i(9378),E=i(1423),L=i(1255),A=i(3451),B=i(545),O=i(2167),P=i(7637),N=i(6891),Y=i(1331);let W="#7fb77e",q="#f85149",U=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,K=l.w4.suites.lab,H=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${U} 0.25s ease both;
  overflow: hidden;
`,Z=o().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,_=o().div`
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
`,V=o().div`
  flex: 1;
  min-width: 0;
`,G=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,X=o().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${K}`:"transparent"};
  background: ${({active:e})=>e?`${K}1f`:"transparent"};
  color: ${({active:e})=>e?K:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${K};
    outline-offset: 2px;
  }
`,Q=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,ee=o().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${K}`:"transparent"};
  background: ${({active:e})=>e?`${K}1f`:"transparent"};
  color: ${({active:e})=>e?K:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${K};
    outline-offset: 2px;
  }
`,en=o().div`
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
`;let ei=o().div`
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
  animation: ${U} 0.2s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,et=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,er=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${W};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,ea=o().button`
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
`,eo=o().div`
  display: ${({visible:e})=>e?"flex":"none"};
  width: 100%;
`,es=o().input`
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
  border-left: 2px solid ${W};
  padding: ${l.w4.spacing.lg};
`;let el=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`;o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${W};
  padding: ${l.w4.spacing.md};
`;let ec=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,ed=o().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ep=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,em=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,eu=o().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,ex=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eg=o().div`
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
`;let ef=o().div`
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
`;let eh=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,eb=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${W};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${W};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,ey=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,ew=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,ej=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,ev=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${W};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,e$=o().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ek=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,eM=o().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eT=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,eS=o().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,eF=o().span`
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
`,ez=o().div`
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
`,eI=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,eD=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,eE=o().span`
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
`,eA=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eB=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,eO=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eP=o().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eN=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eY="finance:list-density",eW="finance:quick-categories",eq="finance:forecast-months",eU="finance:active-member",eK="finance:insights-layout",eH="finance:overview-layout",eZ=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"insights-by-member",size:"lg"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-small-multiples",size:"lg"},{id:"analytics-reimbursables",size:"md"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],e_=[{id:"overview-hero",size:"lg"},{id:"overview-trend",size:"lg"},{id:"overview-donut",size:"md"},{id:"overview-income-mix",size:"sm"},{id:"overview-by-member",size:"md"},{id:"overview-cashflow",size:"md"},{id:"overview-heatmap",size:"sm"},{id:"overview-dayhour",size:"lg"},{id:"overview-weekburn",size:"sm"},{id:"overview-recent",size:"lg"}],eJ=o().input`
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
`,eV=o().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eG=o().li`
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
`,eX=o().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eQ=o().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,e0=o().div`
  flex: 1;
  min-width: 0;
`,e4=o().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e1=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,e2=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,e6=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e3=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${W}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?W:"#facc15"};
  white-space: nowrap;
`,e8=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${W}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?W:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${W}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e5=o().button`
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
    color: ${W};
    background: ${W}1a;
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e7=o().button`
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
`,e9=o().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${W}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${W}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,ne=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?q:"warning"===e?"#facc15":"success"===e?W:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,nn=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,ni=o().button`
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
`;o()(eb)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let nt=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,nr=o().button`
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
`,na=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,no=o().input`
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
`,ns=o().select`
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
`,nl=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${W};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,nc=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nd=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,np=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${W};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,nm=o().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${W};
  animation: ${nd} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nu=o().div`
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
  animation: ${U} 0.2s ease both;

  strong {
    color: ${l.w4.colors.mainText};
    font-weight: 600;
  }
`,nx=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?W:l.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${W}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${W}44`:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${W}28`:l.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?W:l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ng=o().button`
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
`,nf=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${U} 0.2s ease;
`,nh=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nb=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,ny=o().button`
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
`,nw=o().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?W:l.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?W:l.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${W};
    color: ${W};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,nj=o().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nv=o().ul`
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
`,n$=o().li`
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
`,nk=o().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nM=o().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nT=o().li`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${l.w4.spacing.sm} 2px;
  pointer-events: none;
`,nS=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,nF=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nC=o().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nz=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nR=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nI=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,nD=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nE=o().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nL=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${W}; }
`,nA=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nB=o().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,nO=o().input`
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
`,nP=o().input`
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
`,nN=o().select`
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
`;let nY=o().button`
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
`,nW=o().div`
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
`;let nq=o().footer`
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
`,nU=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,nK=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nH=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nZ=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} ${l.w4.borderRadius.md} ${l.w4.borderRadius.md};
  border-left: 2px solid ${W};
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
`,n_=o().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,nJ=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nV=o().button`
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
`,nG=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nX=o().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nQ=o().button`
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
`,n0=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,n4=o().button`
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
`,n1=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,n2=o().input`
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
`,n6=o().select`
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
`,n3=o().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`,n8=o().input`
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
`,n5=o().div`
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
`,n7=o().ul`
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
`,n9=o().li`
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,ie=o().div`
  position: relative;
`,ii=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function it(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function ir(e){return Math.round(e).toLocaleString("pt-PT")}function ia(){return new Date().toISOString().slice(0,10)}function io(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function is(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function il({topBarRight:e}){let n,[i]=(0,x.Ym)(),a=(0,r.useMemo)(()=>(0,x.Nx)(i,f.A),[i]),{data:o,loaded:s,save:U}=(0,c.useFinance)(),K=o??{...c.EMPTY_FINANCE_DATA},[eJ]=(0,c.useProfile)(),e3=(0,r.useMemo)(()=>(0,c.recentMerchants)(K.expenses,20).slice(0,6),[K.expenses]),{canUndo:e8,latestLabelKey:e5,undo:nd}=(0,c.useUndo)(),[nZ,n_]=(0,r.useState)(null),nJ=(0,r.useCallback)(async(e,n)=>{(0,c.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:K,labelKey:n,ts:Date.now()}),n_(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,p.K)(10),await U(e)},[K,U]),nV=(0,r.useCallback)(async()=>{let e=nd();e&&(n_("finance.undo.label.reverted"),await U(e),setTimeout(()=>n_(null),2500))},[nd,U]),[nG,nX]=(0,r.useState)("overview"),[nQ,n0]=(0,r.useState)(()=>(0,c.thisMonthKey)()),[n4,n1]=(0,r.useState)("shared");(0,r.useEffect)(()=>{(0,l.PL)(eU).then(e=>{e&&n1(e)})},[]);let n2=(0,r.useCallback)(e=>{n1(e),(0,l.Is)(eU,e)},[]),[n6,n3]=(0,r.useState)(!1),[n8,n5]=(0,r.useState)(!1),[n7,n9]=(0,r.useState)([]),[ie,ii]=(0,r.useState)(!1),[iu,ix]=(0,r.useState)(!1),[ig,ih]=(0,r.useState)(null),ib=+(n7.length>0)+ +!!ie,[iy,iw]=(0,r.useState)(!1),[ij,iv]=(0,r.useState)({}),i$=(0,r.useMemo)(()=>{let e=0;return ij.text&&e++,ij.memberId&&e++,ij.categoryId&&e++,(ij.dateFrom||ij.dateTo)&&e++,(void 0!==ij.amountMin||void 0!==ij.amountMax)&&e++,ij.tags&&ij.tags.length>0&&e++,e},[ij]),ik=(0,r.useCallback)(e=>{let n=[...K.savedViews??[],e];U({...K,savedViews:n})},[K,U]),iM=(0,r.useCallback)(e=>{let n=(K.savedViews??[]).filter(n=>n.id!==e);U({...K,savedViews:n})},[K,U]),iT=(0,M.E)();(0,r.useEffect)(()=>{"expenses"!==nG&&iT.selectMode&&iT.exitSelectMode()},[nG]);let{range:iS,setRange:iF}=(0,d.H)("month"),iC=(0,r.useRef)(null),iz=(0,r.useRef)(null),iR=(0,r.useRef)(null),[iI,iD]=(0,r.useState)(!1),[iE,iL]=(0,r.useState)(""),[iA,iB]=(0,r.useState)(!1),[iO,iP]=(0,r.useState)(""),iN=(0,r.useRef)(null),[iY,iW]=(0,r.useState)(""),[iq,iU]=(0,r.useState)("shared"),[iK,iH]=(0,r.useState)(null),[iZ,i_]=(0,r.useState)(!1),iJ=(0,r.useRef)(null),[iV,iG]=(0,r.useState)(null),[iX,iQ]=(0,r.useState)("EUR"),[i0,i4]=(0,r.useState)(!1),[i1,i2]=(0,r.useState)(!1),i6=(0,B.x)(),i3=(0,r.useRef)(null),i8=(0,r.useRef)(!1),[i5,i7]=(0,r.useState)(!1),[i9,te]=(0,r.useState)(-1),tn=(0,r.useRef)(null),[ti,tt]=(0,r.useState)(""),[tr,ta]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,l.PL)(eW).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&ta(n)}catch{}})},[]);let[to,ts]=(0,r.useState)(!1),[tl,tc]=(0,r.useState)(!1),[td,tp]=(0,r.useState)(!1),tm=(0,r.useCallback)(e=>{let n=e-(0,c.computeCurrentBalance)(K);if(0===n)return void tp(!1);let i=(K.budget.openingBalance??0)+n;nJ({...K,budget:{...K.budget,openingBalance:i}},"finance.undo.label.edited"),tp(!1)},[K,nJ]),tu=(0,r.useCallback)(e=>{nJ({...K,income:[e,...K.income]},"finance.undo.label.added"),tc(!1),iJ.current&&clearTimeout(iJ.current),i_(!0),iJ.current=setTimeout(()=>i_(!1),2e3)},[K,nJ]),tx=(0,r.useCallback)((e,n,i,t)=>{let r=i?[i,...K.recentDescriptions].filter(Boolean).slice(0,20):K.recentDescriptions,a={...K,expenses:[...e,...K.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)a=(0,c.addRecentTag)(a,e);nJ(a,"finance.undo.label.added"),ts(!1),iJ.current&&clearTimeout(iJ.current),i_(!0),iJ.current=setTimeout(()=>i_(!1),2e3)},[K,nJ]),[tg,tf]=(0,r.useState)(""),[th,tb]=(0,r.useState)(""),[ty,tw]=(0,r.useState)(!1),[tj,tv]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,l.PL)(eY).then(e=>{("compact"===e||"comfortable"===e)&&tv(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===tj?"compact":"comfortable";tv(e),(0,l.Is)(eY,e)},[tj]);let[t$,tk]=(0,r.useState)(3);(0,r.useEffect)(()=>{(0,l.PL)(eq).then(e=>{"6"===e?tk(6):"12"===e&&tk(12)})},[]);let tM=(0,r.useCallback)(e=>{tk(e),(0,l.Is)(eq,String(e))},[]),tT=(0,r.useMemo)(()=>(0,c.thisMonthKey)(),[]),[tS,tF]=(0,r.useState)(eZ);(0,r.useEffect)(()=>{(0,l.PL)(eK).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eZ.filter(e=>!i.has(e.id))];tF(t)}catch{}})},[]);let tC=(0,r.useCallback)((e,n)=>{tF(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,l.Is)(eK,JSON.stringify(a)),a})},[]),tz=(0,r.useCallback)(e=>{tF(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eK,JSON.stringify(a)),a})},[]),[tR,tI]=(0,r.useState)(e_);(0,r.useEffect)(()=>{(0,l.PL)(eH).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...e_.filter(e=>!i.has(e.id))];tI(t)}catch{}})},[]);let tD=(0,r.useCallback)((e,n)=>{tI(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,l.Is)(eH,JSON.stringify(a)),a})},[]),tE=(0,r.useCallback)(e=>{tI(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eH,JSON.stringify(a)),a})},[]),tL=(0,r.useMemo)(()=>(0,c.computeWeeklyStatus)(K),[K]);(0,r.useMemo)(()=>(0,c.computeMonthlySummary)(K,nQ),[K,nQ]);let tA=(0,r.useMemo)(()=>(0,c.generateInsightsWithMembers)(K),[K]),{insights:tB,dismiss:tO}=(0,c.useFinanceAnomalies)(),tP=(0,r.useCallback)(e=>{if(!e||"string"!=typeof e.category)return e;let n=c.DEFAULT_CATEGORIES.find(n=>n.id===e.category)??K.categories?.find(n=>n.id===e.category);return n?{...e,category:(0,c.categoryLabel)(n,i)}:e},[K.categories,i]),tN=(0,r.useMemo)(()=>(0,c.availableMonths)(K),[K]),tY=(0,r.useMemo)(()=>(0,c.filterExpensesByRange)(K.expenses,iS,nQ),[K.expenses,iS,nQ]),tW=(0,r.useMemo)(()=>(0,c.filterIncomeByRange)(K.income,iS,nQ),[K.income,iS,nQ]),tq=(0,r.useMemo)(()=>{let e=(0,c.expensesForMember)(tY,n4);return n7.length>0&&(e=e.filter(e=>n7.includes(e.categoryId))),ie&&(e=e.filter(e=>!0===e.isReimbursable)),i$>0&&(e=(0,c.applyExpenseFilter)(e,ij)),e},[tY,n4,n7,ie,ij,i$]),tU=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(K,n4,tT),[K,n4,tT]),tK=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(tT),[tT]),tH=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(K,n4,tK),[K,n4,tK]),tZ=(0,r.useMemo)(()=>0===tH?0:Math.round((tU-tH)/tH*100),[tU,tH]),t_=(0,r.useMemo)(()=>{if("all"===n4)return a("finance.member.all");if("shared"===n4)return a("finance.hero.family");let e=K.familyMembers.find(e=>e.id===n4);return e?.name??a("finance.hero.family")},[n4,K.familyMembers,a]),tJ=(0,r.useMemo)(()=>{if("all"===n4||"shared"===n4)return l.w4.colors.mainTextMuted;let e=K.familyMembers.findIndex(e=>e.id===n4);return -1===e?W:(0,h.a8)(K.familyMembers[e],e)},[n4,K.familyMembers]),tV=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,c.expensesForMember)(K.expenses,n4).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[K.expenses,n4]),tG=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,c.expensesForMonth)(e.expenses,i),a=(0,c.expensesForMember)(t,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:is(e).color})),over:s>r?s-r:0}})})(K,n4),[K,n4]),tX=(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,c.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,s),p=d.filter(e=>e.goalId).reduce((e,n)=>e+n.amount,0),m=d.reduce((e,n)=>e+n.amount,0)/30,u=p/30;t.push({inc:m,incGoal:u,exp:l})}return t})(K,n4),[K,n4]),tQ=(0,r.useMemo)(()=>(0,c.forecastCashFlow)(K,t$),[K,t$]),t0=(0,r.useMemo)(()=>(0,c.firstNegativeDay)(tQ),[tQ]),t4=(0,r.useMemo)(()=>{let e,n;return e=new Date,n=K.expenses.length>0?K.expenses.reduce((e,n)=>e+n.amount,0)/K.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),o=(0,c.expensesForMember)(K.expenses.filter(e=>e.date===a),n4).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[K,n4]),t1=(0,r.useMemo)(()=>(0,c.dayHourSpendMatrix)((0,c.expensesForMember)(K.expenses,n4)),[K.expenses,n4]),t2=(0,r.useMemo)(()=>{let e=[];return e.push({key:"shared",label:a("finance.income.member.shared"),color:l.w4.colors.mainTextMuted,incomeSpk:(0,c.incomeSparkline)(K.income,"shared"),spendSpk:(0,c.memberSparkline)(K.expenses,"shared"),incomeTotal:(0,c.incomeForMember)(K.income,"shared").reduce((e,n)=>e+n.amount,0),spendTotal:(0,c.expensesForMember)(K.expenses,"shared").reduce((e,n)=>e+n.amount,0),net:(0,c.incomeForMember)(K.income,"shared").reduce((e,n)=>e+n.amount,0)-(0,c.expensesForMember)(K.expenses,"shared").reduce((e,n)=>e+n.amount,0),netByMonth:(0,c.memberNetByMonth)(K,"shared",6)}),K.familyMembers.forEach((n,i)=>{let t=(0,h.a8)(n,i);e.push({key:n.id,label:n.name,color:t,incomeSpk:(0,c.incomeSparkline)(K.income,n.id),spendSpk:(0,c.memberSparkline)(K.expenses,n.id),incomeTotal:(0,c.incomeForMember)(K.income,n.id).reduce((e,n)=>e+n.amount,0),spendTotal:(0,c.expensesForMember)(K.expenses,n.id).reduce((e,n)=>e+n.amount,0),net:(0,c.incomeForMember)(K.income,n.id).reduce((e,n)=>e+n.amount,0)-(0,c.expensesForMember)(K.expenses,n.id).reduce((e,n)=>e+n.amount,0),netByMonth:(0,c.memberNetByMonth)(K,n.id,6)})}),e},[K,a]),t6=(0,r.useMemo)(()=>{let e=Object.entries((0,c.incomeByMember)(K.income));return 0===e.length?[]:e.map(([e,n])=>{if("shared"===e)return{id:"shared",label:a("finance.income.member.shared"),value:n,color:l.w4.colors.mainTextMuted};let i=K.familyMembers.findIndex(n=>n.id===e),t=K.familyMembers[i];return{id:e,label:t?.name??e,value:n,color:t?(0,h.a8)(t,i):l.w4.colors.accent}})},[K,a]),t3=(0,r.useMemo)(()=>t6.reduce((e,n)=>e+n.value,0),[t6]),t8=tL.budget>0?tL.spent/tL.budget*100:0,t5=K.budget.monthlyBudget>0?tU/K.budget.monthlyBudget*100:0,t7=(0,r.useMemo)(()=>{let e=iA&&iO.trim()?iO.trim():(0,c.parseQuickInput)(iE,K.familyMembers)?.description;return e?(0,c.guessCategoryWithRules)(K,e):"other"},[iE,iA,iO,K]),t9=iY||ti||t7,re=(0,r.useMemo)(()=>(0,c.parseRecurringHint)(iE),[iE]);(0,r.useEffect)(()=>{let e=(0,c.parseQuickInput)(iE,K.familyMembers);e?.memberId&&iU(e.memberId)},[iE,K.familyMembers]);let rn=(0,r.useCallback)(()=>{let e=(0,c.parseQuickInput)(iE,K.familyMembers),n=(0,c.parseRecurringHint)(iE);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");iG({amount:e.amount,description:e.description||(t9??"other"),categoryId:t9||"other",cadence:n.cadence,firstDue:`${t}-${r}-${a}`})},[iE,K.familyMembers,t9]),ri=(0,r.useCallback)(()=>{if(!iV)return;let e=new Date(iV.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iV.description,amount:iV.amount,categoryId:iV.categoryId,cadence:iV.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==iq?iq:void 0};nJ({...K,recurringRules:[...K.recurringRules??[],n]},"finance.undo.label.added"),iG(null),iL(""),iW(""),tt(""),iJ.current&&clearTimeout(iJ.current),i_(!0),iJ.current=setTimeout(()=>i_(!1),2e3)},[iV,K,iq,nJ]),rt=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=iA&&iO.trim()?iO.trim():void 0,t=(0,c.parseQuickInput)(iE,K.familyMembers,void 0!==i?{description:i}:void 0);if(!t)return;let r=t9||"other",a=t.memberId??("shared"!==iq?iq:void 0),o=t.tags??[],s=t.description?(0,c.normalizeMerchant)(t.description):void 0,d=ia(),p=t.amount;if("EUR"!==iX){i2(!0),i4(!1);let e=await (0,c.convertToEUR)({amount:t.amount,code:iX,date:d});if(i2(!1),!e)return void i4(!0);p=e.eur,n={code:iX,rate:e.rate,original:t.amount}}let m={id:(0,g.z)(),amount:p,date:d,categoryId:r,description:t.description||r,type:"daily",childId:a,createdAt:Date.now(),...o.length>0?{tags:o}:{},...s?{merchant:s}:{},...n?{fx:n}:{}};i7(!1),i4(!1);let u={...K.categoryHints};t.description&&t.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(u[e]=r)});let x=[t.description||"",...K.recentDescriptions].filter(Boolean).slice(0,20),f=[m,...K.expenses],h={...K,expenses:f,categoryHints:u,recentDescriptions:x};for(let e of o)h=(0,c.addRecentTag)(h,e);nJ(h,"finance.undo.label.added");let b=(0,v.j)(f);ta(b),(0,l.Is)(eW,JSON.stringify(b)),iL(""),iP(""),iB(!1),iW(""),tt(""),iH(null),iJ.current&&clearTimeout(iJ.current),i_(!0),iJ.current=setTimeout(()=>i_(!1),2e3)},[iE,iA,iO,t9,iq,iX,K,nJ]),rr=(0,r.useCallback)(e=>{(0,p.K)([10,50,10]);let n=(0,c.parseQuickInput)(e,K.familyMembers);if(n){let e=iY||ti||(n.description?(0,c.guessCategoryWithRules)(K,n.description):"other"),i=n.memberId??("shared"!==iq?iq:void 0),t=n.tags??[],r={id:(0,g.z)(),amount:n.amount,date:ia(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},a={...K.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(a[n]=e)});let o=[n.description||"",...K.recentDescriptions].filter(Boolean).slice(0,20),s={...K,expenses:[r,...K.expenses],categoryHints:a,recentDescriptions:o};for(let e of t)s=(0,c.addRecentTag)(s,e);nJ(s,"finance.undo.label.added");let d=(0,v.j)([r,...K.expenses]);ta(d),(0,l.Is)(eW,JSON.stringify(d)),iL(""),iW(""),tt(""),iJ.current&&clearTimeout(iJ.current),i_(!0),iJ.current=setTimeout(()=>i_(!1),2e3)}else iL(e),iz.current?.focus()},[K,iY,ti,iq,nJ]),ra=(0,r.useCallback)(e=>{nJ({...K,expenses:K.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[K,nJ]),ro=(0,r.useCallback)(e=>{let n=K.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,g.z)(),date:ia(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nJ({...K,expenses:[i,...K.expenses]},"finance.undo.label.added")},[K,nJ]),rs=(0,r.useCallback)(e=>{nJ({...K,income:K.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[K,nJ]),rl=(0,r.useCallback)(e=>{nJ({...K,expenses:K.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[K,nJ]),rc=(0,r.useCallback)(()=>{let e=parseFloat(tg)||K.budget.weeklyBudget,n=parseFloat(th)||K.budget.monthlyBudget;U({...K,budget:{...K.budget,weeklyBudget:e,monthlyBudget:n}}),tw(!0),setTimeout(()=>tw(!1),2e3)},[tg,th,K,U]),rd=(0,r.useCallback)(()=>{let e=iT.selectedIds;0!==e.size&&(nJ({...K,expenses:K.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),iT.exitSelectMode())},[iT,K,nJ]),rp=(0,r.useCallback)(e=>{let n=iT.selectedIds;0!==n.size&&(nJ({...K,expenses:K.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),iT.exitSelectMode())},[iT,K,nJ]),rm=(0,r.useCallback)(()=>{let e=iT.selectedIds;0!==e.size&&(nJ({...K,expenses:K.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),iT.exitSelectMode())},[iT,K,nJ]),ru=(0,r.useMemo)(()=>["shared",...K.familyMembers.map(e=>e.id)],[K.familyMembers]);(0,j.K)({quickAddInputRef:iz,monthSelectRef:iR,memberIds:ru,activeMemberId:n4,onSelectMember:n2,onSetTab:e=>nX(e),expenseModalOpen:to,onOpenExpenseModal:()=>ts(!0),shortcutsOpen:iI,onToggleShortcuts:()=>iD(e=>!e),onOpenSearch:()=>{nX("expenses"),iw(!0)}});let rx=[{value:"week",label:a("finance.range.pill.7d")},{value:"month",label:a("finance.range.pill.month")},{value:"3m",label:a("finance.range.pill.3m")},{value:"6m",label:a("finance.range.pill.6m")},{value:"1y",label:a("finance.range.pill.year")}],rg=Math.floor(tU).toLocaleString("pt-PT"),rf=(tU%1).toFixed(2).slice(1),rh=(0,r.useMemo)(()=>{if(0===(K.goals??[]).length)return null;let e=(0,c.recomputeGoalCurrents)(K);return{onTrack:e.goals.filter(e=>"behind"!==(0,c.goalStatus)(e)).length,total:e.goals.length}},[K]),rb=(()=>{let[e,n]=tT.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),ry=(0,t.jsx)(h.TA,{data:K,activeMemberId:n4,onSelectMember:n2,onSaveData:U,t:a,locale:i}),rw=(0,r.useMemo)(()=>{let e={};for(let n of tq)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:is(e).color}))},[tq]),rj=rw.reduce((e,n)=>e+n.value,0),rv=(0,r.useMemo)(()=>tG.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tG]),r$=tG.length>0?rv/tG.length:0,rk=tG.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>K.budget.monthlyBudget).length,rM=(0,r.useMemo)(()=>{if(0===tq.length)return null;let e=tq.reduce((e,n)=>n.amount>e.amount?n:e,tq[0]),n={};for(let e of tq){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?K.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??a("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tq){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tq.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tq,K.familyMembers,a]),rT="kid"===eJ.ageMode&&"shared"!==n4&&"all"!==n4?K.familyMembers.find(e=>e.id===n4&&"child"===e.role)??null:null;return rT?(0,t.jsx)(l.PE,{title:a("finance.kidMode.title"),sidebar:null,topBarRight:e,children:(0,t.jsx)(N.N,{member:rT,data:K,t:a})}):(0,t.jsxs)(l.PE,{title:a("finance.appTitle"),sidebar:ry,topBarRight:e,activeId:n4,children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(Z,{children:(0,t.jsx)(h.jb,{data:K,activeMemberId:n4,onSelectMember:n2,t:a,locale:i})}),(0,t.jsxs)(J,{children:[(0,t.jsx)(V,{children:(0,t.jsx)("div",{role:"tablist","aria-label":a("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:a("finance.tab.overview"),expenses:a("finance.tab.expenses"),insights:a("finance.tab.insights")},i={overview:0,expenses:tq.length,insights:tA.length}[e];return(0,t.jsxs)(X,{type:"button",role:"tab","aria-selected":nG===e,active:nG===e,onClick:()=>nX(e),children:[n[e],i>0&&(0,t.jsxs)(Q,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(G,{children:[(0,t.jsxs)(m.ms,{align:"right",trigger:(0,t.jsx)(m.$n,{variant:ib>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"filter",size:13,"aria-hidden":!0}),children:ib>0?a("finance.filters.activeCount",{n:ib}):a("finance.actions.filters")}),children:[(0,t.jsx)(m.o_,{children:a("finance.filters.member")}),["shared",...K.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?a("finance.hero.family"):K.familyMembers.find(n=>n.id===e)?.name??e,i=e===n4;return(0,t.jsx)(m.tJ,{onClick:()=>n2(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(m.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.o_,{children:a("finance.filters.category")}),(0,t.jsx)(m.tJ,{onClick:()=>n9([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===n7.length&&(0,t.jsx)(m.In,{name:"check",size:12}),n7.length>0&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.allCategories")]})}),c.DEFAULT_CATEGORIES.map(e=>{let n=n7.includes(e.id);return(0,t.jsx)(m.tJ,{onClick:()=>n9(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(m.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,c.categoryLabel)(e,i)]})},e.id)}),(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.tJ,{onClick:()=>ii(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[ie&&(0,t.jsx)(m.In,{name:"check",size:12}),!ie&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.reimbursableOnly")]})}),ib>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.tJ,{onClick:()=>{n9([]),ii(!1)},children:a("finance.filters.reset")})]})]}),(0,t.jsx)(m.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>ix(!0),children:a("finance.actions.categories")}),"expenses"===nG&&(0,t.jsx)(Y.g,{count:i$,onClick:()=>iw(e=>!e),label:a("finance.search.openSearch")}),"expenses"===nG&&(0,t.jsx)(m.$n,{variant:iT.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{iT.selectMode?iT.exitSelectMode():iT.enterSelectMode()},children:a("finance.bulk.select")}),"overview"===nG&&(0,t.jsx)(m.K0,{onClick:()=>{n5(!0),requestAnimationFrame(()=>{window.print()})},title:a("finance.report.button"),"aria-label":a("finance.report.button"),children:(0,t.jsx)(m.In,{name:"download",size:14,"aria-hidden":!0})}),(0,t.jsx)(m.K0,{onClick:()=>n3(!0),title:a("finance.actions.settings"),"aria-label":a("finance.actions.settings"),active:n6,children:(0,t.jsx)(m.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(_,{children:(0,t.jsx)(m.K0,{onClick:()=>iD(e=>!e),title:a("finance.shortcuts.title"),"aria-label":a("finance.shortcuts.title"),active:iI,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(en,{"aria-label":a("finance.range.label"),children:rx.map(({value:e,label:n})=>(0,t.jsx)(ee,{type:"button",active:iS===e,onClick:()=>{iF(e),"month"===e&&n0(tT)},"aria-pressed":iS===e,children:n},e))}),"expenses"===nG&&(0,t.jsx)(Y.P,{open:iy,query:ij,onQueryChange:iv,savedViews:K.savedViews??[],onSaveView:ik,onDeleteView:iM,onClose:()=>iw(!1),members:K.familyMembers,categories:[...c.DEFAULT_CATEGORIES,...K.categories??[]],locale:i,recentTags:K.recentTags}),"month"===iS&&K.expenses.length>0&&(0,t.jsx)($.f,{data:K,selectedMonth:nQ,onSelectMonth:n0,locale:i,t:a}),(0,t.jsxs)(ef,{children:["overview"===nG&&(0,t.jsxs)(eh,{children:[(0,t.jsxs)(er,{ref:iC,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:l.w4.colors.mainTextMuted},children:a("finance.quickAdd.title")}),(0,t.jsxs)(nl,{visible:iZ&&!i6.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",a("finance.quickAdd.added")]}),i6.listening&&(0,t.jsxs)(np,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nm,{}),a("finance.voice.listening")]}),(0,t.jsxs)(m.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tc(!0),children:["+ ",a("finance.quickAdd.addIncome")]}),(0,t.jsxs)(m.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>tp(!0),children:["⚖ ",a("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:rt,"aria-label":a("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(nt,{children:[{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...K.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(K.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(nr,{type:"button",active:iq===e.id,color:i,onClick:()=>iU(e.id),children:[(0,t.jsx)(m.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(na,{children:[(0,t.jsxs)(nj,{children:[(0,t.jsx)(no,{ref:iz,type:"text",placeholder:iA?a("finance.quickAdd.amountOnlyPlaceholder"):a("finance.quickAdd.placeholder"),value:iE,onChange:e=>{iL(e.target.value),iW(""),i7(e3.length>0),te(-1)},onFocus:()=>{e3.length>0&&!iE.trim()&&i7(!0)},onBlur:()=>{setTimeout(()=>i7(!1),150)},onKeyDown:e=>{if(i5&&0!==e3.length)if("ArrowDown"===e.key)e.preventDefault(),te(e=>Math.min(e+1,e3.length-1));else if("ArrowUp"===e.key)e.preventDefault(),te(e=>Math.max(e-1,-1));else if("Enter"===e.key&&i9>=0){e.preventDefault();let n=e3[i9];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iE);iL(e?iE.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),iW(""),i7(!1),te(-1)}}else"Escape"===e.key&&(i7(!1),te(-1))},"aria-label":a("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":i5&&e3.length>0,autoComplete:"off",inputMode:"decimal"}),i5&&e3.length>0&&(0,t.jsxs)(nv,{ref:tn,role:"listbox","aria-label":a("finance.merchant.recent"),children:[(0,t.jsx)(nT,{role:"presentation",children:a("finance.merchant.recent")}),e3.map((e,n)=>(0,t.jsxs)(n$,{role:"option","aria-selected":i9===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(iE);iL(i?iE.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),iW(""),i7(!1),te(-1),iz.current?.focus()},children:[(0,t.jsx)(nk,{children:e.merchant}),(0,t.jsxs)(nM,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsxs)(ea,{type:"button","aria-pressed":iA,"aria-label":iA?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show"),onClick:()=>{let e=!iA;iB(e),e&&requestAnimationFrame(()=>iN.current?.focus())},children:[(0,t.jsx)(m.In,{name:iA?"close":"plus",size:11}),iA?a("finance.quickAdd.descToggle.hide"):a("finance.quickAdd.descToggle.show")]}),(0,t.jsx)(ns,{value:iY||t7,onChange:e=>{let n=e.target.value,i=iY||t7;iW(n);let t=iA&&iO.trim()?iO.trim():(0,c.parseQuickInput)(iE,K.familyMembers)?.description;t&&iH((0,c.proposeRuleFromOverride)(i,n,t))},"aria-label":a("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(ns,{value:iX,onChange:e=>{iQ(e.target.value),i4(!1)},"aria-label":a("finance.currency.label"),style:{maxWidth:72},children:c.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!iE.trim()||i1,children:i1?a("finance.currency.converting"):a("finance.quickAdd.add")}),i6.supported&&(0,t.jsx)(nw,{type:"button","aria-label":a("finance.voice.listening"),"aria-pressed":i6.listening,active:i6.listening,onPointerDown:()=>{i3.current=window.setTimeout(()=>{i3.current=null,i8.current=!0,(0,p.K)(30),i6.listening?i6.stop():i6.start(rr)},500)},onPointerUp:()=>{null!==i3.current&&(clearTimeout(i3.current),i3.current=null,i8.current||((0,p.K)(10),i6.listening?i6.stop():i6.start(rr))),i8.current=!1},onPointerCancel:()=>{null!==i3.current&&(clearTimeout(i3.current),i3.current=null),i8.current=!1},children:(0,t.jsx)(m.In,{name:"mic",size:16})})]}),(0,t.jsx)(eo,{visible:iA,children:(0,t.jsx)(es,{ref:iN,type:"text",placeholder:a("finance.quickAdd.descPlaceholder"),maxLength:80,value:iO,onChange:e=>iP(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),iB(!1),iz.current?.focus())},"aria-label":a("finance.quickAdd.descPlaceholder"),tabIndex:iA?0:-1})}),(0,t.jsx)(v.J,{expenses:K.expenses,storedOrder:tr,lockedCategoryId:ti,onToggle:e=>tt(n=>n===e?"":e),locale:i,groupLabel:a("finance.quickAdd.frequentCategories")}),iK&&(0,t.jsxs)(nu,{children:[(0,t.jsxs)("span",{children:[a("finance.categoryRules.alwaysCategorize",{match:iK.match})," ",(0,t.jsx)("strong",{children:(n=c.DEFAULT_CATEGORIES.find(e=>e.id===iK.categoryId))?(0,c.categoryLabel)(n,i):iK.categoryId}),"?"]}),(0,t.jsx)(nx,{type:"button",accent:!0,onClick:()=>{K&&iK&&(nJ({...K,categoryRules:[iK,...K.categoryRules??[]]},"finance.undo.label.added"),iH(null))},children:a("finance.categoryRules.propose")}),(0,t.jsx)(nx,{type:"button",onClick:()=>iH(null),children:a("finance.categoryRules.dismiss")})]}),i0&&(0,t.jsx)(nc,{style:{color:q},role:"alert",children:a("finance.currency.fxFailed")}),re&&(0,c.parseQuickInput)(iE,K.familyMembers)&&(0,t.jsxs)(ng,{type:"button",onClick:rn,"aria-label":a("finance.recurring.makeRecurring"),children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsx)(nc,{children:a("finance.quickAdd.hint")})]})]}),(0,t.jsx)(m.dO,{items:tR.map(e=>({...e})),onReorder:tD,onCycleSize:tE,accentColor:()=>W,labels:{moveLeft:a("finance.overview.panel.moveLeft"),moveRight:a("finance.overview.panel.moveRight"),cycleSize:a("finance.overview.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"overview-hero":return(0,t.jsxs)(ev,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(e$,{children:[(0,t.jsxs)(ek,{children:[a("finance.hero.spentIn")," ",rb," \xb7 ",t_]}),(0,t.jsxs)(eM,{children:[(0,t.jsx)(eT,{children:"€"}),(0,t.jsx)(eS,{children:rg}),(0,t.jsx)(eF,{children:rf})]}),(0,t.jsxs)(eC,{children:[(0,t.jsx)(u.Ru,{value:tZ,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[a("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(tK,i)," \xb7 €",ir(tH)]})]}),tV.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:tV,accent:tJ,width:280,height:34})}),null!==rh&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:rh.onTrack===rh.total?"#7fb77e":l.w4.colors.mainTextMuted},children:a("finance.goals.hero",{on:rh.onTrack,total:rh.total})})]}),(0,t.jsx)(ez,{children:(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eI,{children:[(0,t.jsx)(eD,{children:a("finance.budget.weekly")}),(0,t.jsxs)(eE,{children:["€",ir(tL.spent)," ",(0,t.jsxs)(eL,{children:["/ €",tL.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:t8,over:t8>100?t8-100:0}),(0,t.jsxs)(eA,{children:[(0,t.jsxs)("span",{children:[Math.round(t8),"% ",a("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tL.remaining<0?q:W},children:tL.remaining>0?`€${ir(tL.remaining)} ${a("finance.budget.remaining")}`:`€${ir(Math.abs(tL.remaining))} ${a("finance.budget.over")}`})]}),(0,t.jsxs)(eI,{style:{marginTop:14},children:[(0,t.jsx)(eD,{children:a("finance.budget.monthly")}),(0,t.jsxs)(eE,{children:["€",ir(tU)," ",(0,t.jsxs)(eL,{children:["/ €",K.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:t5,over:t5>100?t5-100:0}),(0,t.jsxs)(eA,{children:[(0,t.jsxs)("span",{children:[Math.round(t5),"% ",a("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[a("finance.budget.projected")," €",ir(tU+(tL.projectedTotal-tL.spent))]})]})]})})]});case"overview-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ey,{children:[(0,t.jsx)(ew,{children:a("finance.charts.sixMonths")}),(0,t.jsx)(ej,{children:(0,t.jsx)(nU,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nK,{children:[(0,t.jsx)(nH,{color:e.color}),(0,c.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(u.ik,{data:tG,budget:K.budget.monthlyBudget,height:200}),(0,t.jsxs)(nS,{children:[(0,t.jsxs)(nF,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nC,{children:["€",ir(rv)]})]}),(0,t.jsxs)(nF,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nC,{children:["€",ir(r$)]})]}),(0,t.jsxs)(nF,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nC,{children:[rk," / ",tG.length]})]}),(0,t.jsxs)(nF,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nC,{style:{color:tZ>0?q:W},children:[tZ>0?"+":"",tZ,"%"]})]})]})]});case"overview-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ey,{children:[(0,t.jsx)(ew,{children:a("finance.charts.byCategory")}),(0,t.jsx)(nY,{type:"button",onClick:()=>nX("insights"),children:a("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:rw,total:rj,size:110,centerLabel:rb.slice(0,3),centerValue:`€${ir(rj)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rw.map(e=>{let n=is(e.id),r=(0,c.expensesForMember)((0,c.expensesForMonth)(K.expenses,tK),n4).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eB,{children:[(0,t.jsx)(eO,{color:e.color}),(0,t.jsx)(eP,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eN,{children:["€",ir(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(u.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]});case"overview-cashflow":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ey,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ew,{children:a("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.forecast.sub",{n:t$})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(ee,{type:"button",active:t$===e,onClick:()=>tM(e),"aria-pressed":t$===e,children:a(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(R.b,{forecast:tQ,firstNegDate:t0,t:a,locale:i,height:170}),tX.some(e=>e.incGoal>0)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{marginTop:l.w4.spacing.md,paddingTop:l.w4.spacing.sm,borderTop:`1px solid ${l.w4.colors.border}`},children:(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:l.w4.colors.mainTextMuted},children:a("finance.charts.cashflow")})}),(0,t.jsx)(u.uj,{data:tX,height:130,legendIn:a("finance.charts.in"),legendOut:a("finance.charts.out"),legendGoal:a("finance.cashflow.legend.goal")})]})]});case"overview-heatmap":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ey,{children:(0,t.jsx)(ew,{children:a("finance.charts.heatmap")})}),(0,t.jsx)(u.RT,{data:t4,locale:i}),(0,t.jsxs)(nz,{children:[(0,t.jsx)("span",{children:a("finance.charts.less")}),(0,t.jsx)(nR,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:a("finance.charts.more")})]})]});case"overview-dayhour":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(el,{children:(0,t.jsx)(m.YZ,{children:a("finance.heatmap.title")})}),(0,t.jsx)(b.D,{matrix:t1,locale:i,t:a})]});case"overview-weekburn":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ey,{children:(0,t.jsx)(ew,{children:a("finance.charts.thisWeek")})}),(0,t.jsxs)(nI,{children:[(0,t.jsxs)(nD,{children:[(0,t.jsxs)(nE,{children:["€",ir(tL.spent)]}),(0,t.jsxs)(eL,{children:["/ €",tL.budget]})]}),(0,t.jsx)(u.kl,{spent:tL.spent,budget:tL.budget}),(0,t.jsxs)(nL,{children:[(0,t.jsx)("span",{children:a("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:a("finance.charts.actual")})]})]})]});case"overview-recent":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ec,{children:[(0,t.jsx)(m.YZ,{children:a("finance.recent.title")}),tq.length>8&&(0,t.jsx)(nY,{type:"button",onClick:()=>nX("expenses"),children:a("finance.recent.viewAll",{n:tq.length})})]}),0===tq.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:a("finance.dashboard.noRecent")}):(0,t.jsx)(eV,{"aria-label":a("finance.recent.title"),children:tq.slice(0,8).map(e=>(0,t.jsx)(im,{exp:e,finData:K,locale:i,t:a,onDelete:ra,onClone:ro,onToggleReimbursed:rl,compact:"compact"===tj},e.id))})]});case"overview-income-mix":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.incomeMix.title")}),0===t6.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,padding:`${l.w4.spacing.md} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:t6,total:t3,size:100,centerLabel:a("finance.byMember.income"),centerValue:`€${ir(t3)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:100},children:t6.map(e=>(0,t.jsxs)(eB,{children:[(0,t.jsx)(eO,{color:e.color}),(0,t.jsx)(eP,{children:e.label}),(0,t.jsxs)(eN,{style:{color:W},children:["€",ir(e.value)]})]},e.id))})]})]});case"overview-by-member":{let e="all"===n4?t2:t2.filter(e=>e.key===n4);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.byMember.title")}),t2.length<=1&&0===K.familyMembers.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):1===e.length?(()=>{let n=e[0];if(!n)return null;let i=n.netByMonth.map(e=>({label:new Date(e.month+"-01").toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:[{id:"income",value:e.income,color:W},{id:"expense",value:e.expense,color:q}],over:0}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:l.w4.spacing.sm},children:[(0,t.jsx)(m.eu,{member:{id:n.key,name:n.label,role:"adult",color:n.color},size:20}),(0,t.jsx)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamily,color:l.w4.colors.mainText},children:n.label}),(0,t.jsxs)("span",{style:{marginLeft:"auto",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:n.net>=0?W:q},children:[n.net>=0?"+":"","€",ir(Math.abs(n.net))]}),(0,t.jsx)(u.Ru,{value:n.net>=0?5:-5,format:"pct",decimals:0})]}),(0,t.jsx)(u.ik,{data:i,height:140})]})})():(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:l.w4.spacing.sm},children:e.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:["shared"===e.key?(0,t.jsx)(m.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(m.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:W},children:["€",ir(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:W,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",ir(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:q,width:160,height:22}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)("span",{style:{display:"flex",alignItems:"center",gap:4},children:(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})})]})]})]},e.key))})]})}default:return null}}})]}),"expenses"===nG&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nW,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:a("finance.tx.title")}),"month"===iS&&0===K.expenses.length&&(0,t.jsx)(nN,{ref:iR,value:nQ,onChange:e=>n0(e.target.value),"aria-label":a("finance.insights.month"),children:tN.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),0===tq.length&&0===tW.length?(0,t.jsx)(eb,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i$>0?a("finance.search.noResults"):a("finance.tx.empty")})}):(0,t.jsx)(eb,{span:12,children:(0,t.jsx)(eV,{"aria-label":a("finance.tx.title"),children:[...tq.map(e=>({...e,_kind:"expense"})),...tW.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(im,{exp:e,finData:K,locale:i,t:a,onDelete:ra,onClone:ro,onToggleReimbursed:rl,compact:"compact"===tj,selectMode:iT.selectMode,selected:iT.selectedIds.has(e.id),onToggleSelect:iT.toggleId,longPressHandlers:iT.longPressHandlers,onEnterSelectMode:iT.enterSelectMode},e.id):(0,t.jsxs)(eG,{compact:"compact"===tj,children:["compact"===tj?(0,t.jsx)(eX,{color:W,"aria-hidden":!0}):(0,t.jsx)(eQ,{color:W,children:"\uD83D\uDCB0"}),(0,t.jsxs)(e0,{children:[(0,t.jsx)(e4,{children:e.source}),"compact"!==tj&&(0,t.jsxs)(e1,{children:[io(e.date,i)," \xb7 ",a("finance.dashboard.income")]})]}),(0,t.jsxs)(e2,{children:[(0,t.jsxs)(e6,{style:{color:W},children:["+€",it(e.amount)]}),(0,t.jsx)(e7,{className:"delete-btn",type:"button",onClick:()=>rs(e.id),"aria-label":`${a("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nG&&(0,t.jsxs)(eg,{children:[(0,t.jsxs)(nW,{style:{marginBottom:0},children:[(0,t.jsx)(m.YZ,{children:a("finance.insights.title")}),"month"===iS&&0===K.expenses.length&&(0,t.jsx)(nN,{value:nQ,onChange:e=>n0(e.target.value),"aria-label":a("finance.insights.month"),children:tN.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),null!==rM&&(0,t.jsxs)(ed,{children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:a("finance.kpi.biggestExpense")}),(0,t.jsxs)(eu,{children:["€",rM.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ex,{children:rM.biggest.description?`${rM.biggest.description} \xb7 ${(0,c.categoryLabel)(is(rM.biggest.categoryId),i)}`:(0,c.categoryLabel)(is(rM.biggest.categoryId),i)})]}),(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:a("finance.kpi.topSpender")}),(0,t.jsxs)(eu,{children:["€",rM.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ex,{children:rM.topMemberLabel})]}),(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:a("finance.kpi.busiestDay")}),(0,t.jsxs)(eu,{children:["€",rM.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ex,{children:a(`finance.weekday.${rM.busiestDowKey}`)})]}),(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:a("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(eu,{children:["€",rM.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ex,{children:0===rM.reimbursableTotal?"—":a("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(m.dO,{items:tS.map(e=>({...e})),onReorder:tC,onCycleSize:tz,accentColor:()=>W,labels:{moveLeft:a("finance.insights.panel.moveLeft"),moveRight:a("finance.insights.panel.moveRight"),cycleSize:a("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.charts.sixMonths")}),(0,t.jsx)(u.ik,{data:tG,budget:K.budget.monthlyBudget,height:180}),(0,t.jsxs)(nS,{style:{marginTop:l.w4.spacing.sm},children:[(0,t.jsxs)(nF,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nC,{children:["€",ir(rv)]})]}),(0,t.jsxs)(nF,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nC,{children:["€",ir(r$)]})]}),(0,t.jsxs)(nF,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nC,{style:{color:tZ>0?q:W},children:[tZ>0?"+":"",tZ,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.charts.byCategory")}),0===rw.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${l.w4.spacing.lg} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:rw,total:rj,size:110,centerLabel:rb.slice(0,3),centerValue:`€${ir(rj)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:rw.map(e=>{let n=is(e.id),r=e.color||l.w4.colors.mainTextMuted,a=(0,c.expensesForMember)((0,c.expensesForMonth)(K.expenses,tK),n4).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eB,{children:[(0,t.jsx)(eO,{color:r}),(0,t.jsx)(eP,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eN,{children:["€",ir(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.insights.title")}),0===tA.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tA.map((e,n)=>(0,t.jsxs)(e9,{itype:e.type,children:[(0,t.jsx)(ne,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:a(e.messageKey,tP(e.params))}),e.memberId&&(()=>{let n=K.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=K.familyMembers.indexOf(n);return(0,t.jsxs)(nn,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.insights.anomalies")}),0===tB.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:tB.map(e=>(0,t.jsxs)(e9,{itype:e.type,children:[(0,t.jsx)(ne,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:a(e.messageKey,tP(e.params))})}),e.snoozeKey&&(0,t.jsx)(ni,{type:"button",title:a("finance.insights.anomalies.dismiss"),"aria-label":a("finance.insights.anomalies.dismiss"),onClick:()=>{tO(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-small-multiples":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.smallMultiples.title")}),(0,t.jsx)(L.R,{expenses:K.expenses,familyMembers:K.familyMembers,getMemberColor:h.a8,t:a,locale:i})]});case"analytics-reimbursables":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.reimbursables.tracker.title")}),(0,t.jsx)(E.p,{expenses:K.expenses,familyMembers:K.familyMembers,getMemberColor:h.a8,t:a,locale:i})]});case"analytics-budgets":return(0,t.jsx)(I.z,{});case"analytics-bills":return(0,t.jsx)(F.J,{});case"analytics-subscriptions":return(0,t.jsx)(T.n,{});case"analytics-goals":return(0,t.jsx)(S.f,{});case"analytics-recurring":return(0,t.jsx)(C.b,{});case"analytics-rules":return(0,t.jsx)(D.K,{});case"analytics-networth":return(0,t.jsx)(z.S,{});case"insights-by-member":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.byMember.title")}),0===t2.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.empty")}):(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:l.w4.spacing.sm},children:t2.map(e=>(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderLeft:`2px solid ${e.color}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.sm},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:["shared"===e.key?(0,t.jsx)(m.In,{name:"users",size:14,color:e.color}):(0,t.jsx)(m.eu,{member:{id:e.key,name:e.label,role:"adult",color:e.color},size:16}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.1em",color:l.w4.colors.mainTextMuted,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.income")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:W},children:["€",ir(e.incomeTotal)]})]}),e.incomeSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.incomeSpk,accent:W,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.spend")}),(0,t.jsxs)("span",{style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",color:q},children:["€",ir(e.spendTotal)]})]}),e.spendSpk.some(e=>e>0)&&(0,t.jsx)(u.OW,{points:e.spendSpk,accent:q,width:180,height:24}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,borderTop:`1px solid ${l.w4.colors.border}`,paddingTop:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.byMember.net")}),(0,t.jsx)(u.Ru,{value:e.net,format:"abs",decimals:0})]})]})]},e.key))})]});default:return null}}})]})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),to&&(0,t.jsx)(ip,{finData:K,activeMemberId:n4,locale:i,t:a,onClose:()=>ts(!1),onSubmit:tx}),tl&&(0,t.jsx)(id,{finData:K,locale:i,t:a,onClose:()=>tc(!1),onSubmit:tu}),td&&(0,t.jsx)(ic,{finData:K,t:a,onClose:()=>tp(!1),onSubmit:tm}),(0,t.jsx)(y.S,{labelKey:nZ,onUndo:()=>{nV()},onDismiss:()=>n_(null),t:a}),iT.selectMode&&"expenses"===nG&&(0,t.jsx)(k.S,{selectionCount:iT.selectedIds.size,visibleIds:tq.map(e=>e.id),selectedIds:iT.selectedIds,categories:c.DEFAULT_CATEGORIES,locale:i,t:a,onCancel:iT.exitSelectMode,onSelectAll:()=>iT.selectAll(tq.map(e=>e.id)),onCategorise:rp,onDelete:rd,onMarkReimbursed:rm}),iI&&(0,t.jsx)(w.m,{t:a,onClose:()=>iD(!1)}),(0,t.jsx)(O.X,{open:n6,onClose:()=>n3(!1),ariaLabel:a("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(ei,{children:[(0,t.jsxs)(et,{children:[(0,t.jsx)(m.YZ,{children:a("finance.settings.title")}),(0,t.jsx)(m.K0,{onClick:()=>n3(!1),title:a("finance.actions.settings"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"drawer-weekly-budget",children:a("finance.settings.weeklyBudget")}),(0,t.jsx)(nO,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(K.budget.weeklyBudget),value:tg,onChange:e=>tf(e.target.value)})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"drawer-monthly-budget",children:a("finance.settings.monthlyBudget")}),(0,t.jsx)(nO,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(K.budget.monthlyBudget),value:th,onChange:e=>tb(e.target.value)})]}),(0,t.jsx)(m.$n,{variant:"primary",onClick:()=>{rc(),n3(!1)},style:{height:44},children:ty?a("finance.settings.saved"):a("finance.settings.save")})]}),(0,t.jsx)(P.u,{data:K,getMemberColor:h.a8,t:a,onSaveMember:(e,n)=>{let i=K.familyMembers.map(i=>i.id===e?{...i,weeklyAllowance:n}:i);nJ({...K,familyMembers:i},"finance.undo.label.edited")}})]})}),(0,t.jsx)(O.X,{open:iu,onClose:()=>{ix(!1),ih(null)},ariaLabel:a("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(ei,{children:[(0,t.jsxs)(et,{children:[(0,t.jsx)(m.YZ,{children:a("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!ig&&(0,t.jsx)(m.$n,{variant:"ghost",style:{height:28},onClick:()=>ih({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:a("finance.categories.new")}),(0,t.jsx)(m.K0,{onClick:()=>{ix(!1),ih(null)},title:a("finance.categories.cancel"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]})]}),ig&&(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.md,display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{children:a("finance.categories.labelEn")}),(0,t.jsx)(nP,{value:ig.labelEn,onChange:e=>ih(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{children:a("finance.categories.labelPt")}),(0,t.jsx)(nP,{value:ig.labelPt,onChange:e=>ih(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{children:a("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:ig.icon,onChange:e=>ih(n=>n&&{...n,icon:e.target.value}),style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:m.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{children:a("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:ig.color,onChange:e=>ih(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nP,{value:ig.color,onChange:e=>ih(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",style:{height:28},onClick:()=>ih(null),children:a("finance.categories.cancel")}),(0,t.jsx)(m.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!ig.labelEn||!ig.labelPt)return;let e={id:(0,g.z)(),labelEn:ig.labelEn,labelPt:ig.labelPt,icon:ig.icon,color:ig.color,isCustom:!0},n=K.categories??[];nJ({...K,categories:[...n,e]},"finance.undo.label.added"),ih(null)},children:a("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,m.n6)(e.icon)?(0,t.jsx)(m.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,c.categoryLabel)(e,i)}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:a("finance.categories.builtIn")})]},e.id)),(K.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,m.n6)(e.icon)?(0,t.jsx)(m.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:(0,c.categoryLabel)(e,i)}),(0,t.jsx)(m.K0,{title:a("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(K.categories??[]).filter(n=>n.id!==e.id);nJ({...K,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(m.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(O.X,{open:null!==iV,onClose:()=>iG(null),ariaLabel:a("finance.recurring.makeRecurring"),maxWidth:360,children:iV&&(0,t.jsxs)(nf,{children:[(0,t.jsxs)(m.YZ,{children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nh,{children:a("finance.recurring.frequency")}),(0,t.jsx)(nb,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(ny,{type:"button",active:iV.cadence===e,onClick:()=>iG(n=>n?{...n,cadence:e}:null),children:a(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nh,{children:a("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iV.firstDue,onChange:e=>iG(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",onClick:()=>iG(null),children:a("finance.recurring.cancel")}),(0,t.jsx)(m.$n,{variant:"primary",onClick:ri,disabled:!iV.firstDue,children:a("finance.recurring.confirm")})]})]})}),n8&&(0,t.jsx)(A.h,{data:K,month:nQ,locale:i,t:a,getMemberColor:h.a8})]})}function ic({finData:e,t:n,onClose:i,onSubmit:a}){let o=(0,c.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[d,p]=(0,r.useState)(""),u=parseFloat(d.replace(",",".")),x=d.trim().length>0&&!Number.isNaN(u),g=x?u-o:0;return(0,t.jsx)(O.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(n_,{children:[(0,t.jsxs)(nJ,{children:[(0,t.jsx)(m.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nV,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&a(u)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:l.w4.spacing.sm,background:l.w4.colors.sidebarHover,borderRadius:l.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",it(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:l.w4.colors.mainTextMuted},children:["€",it(s)]})]})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(n2,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:d,onChange:e=>p(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:g>0?W:q,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:it(g)}):n("finance.balance.deltaDown",{n:it(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(n3,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function id({finData:e,locale:n,t:i,onClose:a,onSubmit:o}){let[s,c]=(0,r.useState)(""),[d,p]=(0,r.useState)(ia()),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)(""),[y,w]=(0,r.useState)(""),j=parseFloat(s.replace(",",".")),v=!Number.isNaN(j)&&j>0&&u.trim().length>0,$=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(O.X,{open:!0,onClose:a,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(n_,{children:[(0,t.jsxs)(nJ,{children:[(0,t.jsx)(m.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nV,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v&&o({id:(0,g.z)(),amount:j,date:d,source:u.trim(),createdAt:Date.now(),...f?{goalId:f}:{},...y?{memberId:y}:{}})},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nG,{children:[(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(n2,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>c(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(n2,{id:"inc-date",type:"date",value:d,onChange:e=>p(e.target.value)})]})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(n2,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),e.familyMembers.length>0&&(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{children:i("finance.income.member.label")}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[(0,t.jsxs)(m.vu,{variant:""===y?"selected":"default",onClick:()=>w(""),children:[(0,t.jsx)(m.In,{name:"users",size:13,style:{marginRight:4,verticalAlign:"middle"}}),i("finance.income.member.shared")]}),e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n);return(0,t.jsxs)(m.vu,{variant:y===e.id?"selected":"default",dotColor:i,onClick:()=>w(e.id),children:[(0,t.jsx)("span",{style:{marginRight:4,verticalAlign:"middle",display:"inline-flex"},children:(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:14})}),e.name]},e.id)})]})]}),$.length>0&&(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(n6,{id:"inc-goal",value:f,onChange:e=>b(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),$.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(n3,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:a,children:i("finance.income.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!v,children:i("finance.income.add")})]})]})]})})}function ip({finData:e,activeMemberId:n,locale:i,t:a,onClose:o,onSubmit:s}){let[d,p]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)("other"),[y,w]=(0,r.useState)(ia()),[j,v]=(0,r.useState)("single"),[$,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,r.useState)([]),[C,z]=(0,r.useState)(""),[R,I]=(0,r.useState)(!1),D=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&b((0,c.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(d.replace(",","."))||0,L=M.length,A="split"===j&&L>0?E/L:E,B=E>0&&!!y&&("single"===j||"split"===j&&L>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),z(""),I(!1))},N=(0,r.useMemo)(()=>{let n=C.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[C,e.recentTags,S]),Y=[{id:"shared",name:a("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(O.X,{open:!0,onClose:o,ariaLabel:a("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nZ,{children:[(0,t.jsxs)(nJ,{children:[(0,t.jsxs)(m.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(nV,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),r=Date.now(),a={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=f)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:E,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===$?void 0:$,createdAt:r,...o}];else{let e=Math.round(E/L*100)/100,n=Math.round((E-e*L)*100)/100;i=M.map((i,a)=>({id:(0,g.z)(),amount:0===a?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${L})`:f,type:"daily",childId:i,createdAt:r+a,...o}))}s(i,a,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nG,{children:[(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,t.jsx)(n2,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:d,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,t.jsx)(n2,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,t.jsx)(n2,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(n6,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{children:a("finance.tags.label")}),(0,t.jsxs)(ie,{children:[(0,t.jsxs)(n5,{onClick:()=>D.current?.focus(),children:[S.map(e=>(0,t.jsxs)(m.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":a("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(n8,{ref:D,type:"text",value:C,placeholder:0===S.length?a("finance.tags.placeholder"):"",onChange:e=>{z(e.target.value),I(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(C)):"Backspace"===e.key&&""===C&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&I(!1)},onBlur:()=>{C.trim()&&P(C),setTimeout(()=>I(!1),150)},onFocus:()=>I(!0),"aria-label":a("finance.tags.label")})]}),R&&N.length>0&&(0,t.jsx)(n7,{children:N.map(e=>(0,t.jsxs)(n9,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(nB,{children:a("finance.modal.assign")}),(0,t.jsxs)(nX,{role:"tablist",children:[(0,t.jsx)(nQ,{type:"button",active:"single"===j,onClick:()=>v("single"),children:a("finance.modal.member")}),(0,t.jsx)(nQ,{type:"button",active:"split"===j,onClick:()=>v("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,t.jsx)(n0,{style:{marginTop:l.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(n4,{type:"button",active:$===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n0,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(n4,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),L>0&&E>0&&(0,t.jsx)(n1,{style:{marginTop:l.w4.spacing.xs},children:a("finance.modal.splitEach",{n:L,amount:it(A)})})]})]}),(0,t.jsxs)(n3,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:o,children:a("finance.member.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!B,children:a("finance.quickAdd.add")})]})]})]})})}function im({exp:e,finData:n,locale:i,t:r,onDelete:a,onClone:o,onToggleReimbursed:s,compact:d=!1,selectMode:p=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:g}){let f=is(e.categoryId),b=n.familyMembers.findIndex(n=>n.id===e.childId),y=b>=0?n.familyMembers[b]:null,w=y?(0,h.a8)(y,b):l.w4.colors.mainTextMuted,j=g?g(e.id):null,v=n=>{p&&x&&"INPUT"!==n.target.tagName&&x(e.id)},$=e.isReimbursable&&!p?s?(0,t.jsx)(e8,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e3,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,k=!p&&o?(0,t.jsx)(e5,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,M=p?null:(0,t.jsx)(e7,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),T=p?(0,t.jsx)(eJ,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,S=p?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return d?(0,t.jsxs)(eG,{compact:!0,style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eX,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(e0,{children:(0,t.jsxs)(e4,{style:{display:"flex",alignItems:"center",gap:6},children:[y?(0,t.jsx)(m.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:13,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,c.categoryLabel)(f,i)})]})}),(0,t.jsxs)(e2,{children:[$,(0,t.jsxs)(e6,{children:["−€",it(e.amount)]}),k,M]})]}):(0,t.jsxs)(eG,{style:S,onClick:v,...j??{},children:[T,(0,t.jsx)(eQ,{color:f.color,children:(0,m.n6)(f.icon)?(0,t.jsx)(m.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(e0,{children:[(0,t.jsx)(e4,{children:e.description||(0,c.categoryLabel)(f,i)}),(0,t.jsxs)(e1,{children:[y?(0,t.jsx)(m.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:11,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,c.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:io(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(ii,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(e2,{children:[$,"recurring"===e.type&&(0,t.jsx)(e3,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e6,{children:["−€",it(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:l.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),k,M]})]})}}}]);