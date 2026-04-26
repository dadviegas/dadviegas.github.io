"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{ACTIVE_MEMBER_KEY:()=>eL,default:()=>n8});var t=i(5723),r=i(7991),a=i(6859),o=i.n(a),s=i(2799),l=i(4764),c=i(8113),d=i(3759),p=i(789),m=i(5030),u=i(1496),x=i(8170),g=i(4041),f=i(948),h=i(719),b=i(2405),y=i(9546),w=i(5854),j=i(3616),$=i(6579),v=i(8989),k=i(6376),M=i(9146),T=i(7737),S=i(8635),C=i(8501),F=i(1789),z=i(216),R=i(9419),D=i(341),I=i(9378),E=i(545),L=i(2167);let A="#7fb77e",B="#f85149",P=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,O=l.w4.suites.lab,N=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${P} 0.25s ease both;
  overflow: hidden;
`,Y=o().div`
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
`,_=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,W=o().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${O}`:"transparent"};
  background: ${({active:e})=>e?`${O}1f`:"transparent"};
  color: ${({active:e})=>e?O:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${O};
    outline-offset: 2px;
  }
`,Z=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,q=o().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${O}`:"transparent"};
  background: ${({active:e})=>e?`${O}1f`:"transparent"};
  color: ${({active:e})=>e?O:l.w4.colors.mainTextMuted};
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
    outline: 2px solid ${O};
    outline-offset: 2px;
  }
`,J=o().div`
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
`;let G=o().div`
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
  animation: ${P} 0.2s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,X=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,Q=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.lg};
`;let V=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`;o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.md};
`;let ee=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,en=o().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ei=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,et=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,er=o().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,ea=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eo=o().div`
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
`;let es=o().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`,el=o().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,ec=o().div`
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
`,ed=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,ep=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,em=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,eu=o().div`
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
`,ex=o().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eg=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,ef=o().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eh=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,eb=o().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,ey=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,ew=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ej=o().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,e$=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ev=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,ek=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,eM=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eT=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eS=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eC=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,eF=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,ez=o().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eR=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eD="finance:list-density",eI="finance:quick-categories",eE="finance:forecast-months",eL="finance:active-member",eA="finance:insights-layout",eB=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eP=o().input`
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
`,eO=o().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eN=o().li`
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
`,eY=o().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eH=o().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eK=o().div`
  flex: 1;
  min-width: 0;
`,eU=o().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e_=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,eW=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,eZ=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,eq=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${A}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?A:"#facc15"};
  white-space: nowrap;
`,eJ=o().button`
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
`,eG=o().button`
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
`,eX=o().button`
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
`,eQ=o().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${A}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${A}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,eV=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?B:"warning"===e?"#facc15":"success"===e?A:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,e0=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,e4=o().button`
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
`;o()(ec)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let e1=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,e2=o().button`
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
`,e6=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,e3=o().input`
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
`,e8=o().select`
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
`,e5=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${A};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,e7=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,e9=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,ne=o().div`
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
`,nn=o().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${A};
  animation: ${e9} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,ni=o().div`
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
  animation: ${P} 0.2s ease both;

  strong {
    color: ${l.w4.colors.mainText};
    font-weight: 600;
  }
`,nt=o().button`
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
`,nr=o().button`
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
`,na=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${P} 0.2s ease;
`,no=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,ns=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,nl=o().button`
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
`,nc=o().button`
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
`,nd=o().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,np=o().ul`
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
`,nm=o().li`
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
`,nu=o().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nx=o().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,ng=o().li`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${l.w4.spacing.sm} 2px;
  pointer-events: none;
`,nf=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,nh=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nb=o().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,ny=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nw=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nj=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,n$=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nv=o().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nk=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${A}; }
`,nM=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nT=o().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,nS=o().input`
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
`,nC=o().input`
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
`,nF=o().select`
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
`;let nz=o().button`
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
`,nR=o().div`
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
`;let nD=o().footer`
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
`,nI=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,nE=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nL=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nA=o().div`
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
`,nB=o().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,nP=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nO=o().button`
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
`,nN=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nY=o().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nH=o().button`
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
`,nK=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,nU=o().button`
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
`,n_=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nW=o().input`
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
`,nZ=o().select`
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
`,nq=o().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`,nJ=o().input`
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
`,nG=o().div`
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
`,nX=o().ul`
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
`,nQ=o().li`
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,nV=o().div`
  position: relative;
`,n0=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function n4(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function n1(e){return Math.round(e).toLocaleString("pt-PT")}function n2(){return new Date().toISOString().slice(0,10)}function n6(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function n3(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function n8({topBarRight:e}){let n,[i]=(0,x.Ym)(),a=(0,r.useMemo)(()=>(0,x.Nx)(i,f.A),[i]),{data:o,loaded:s,save:P}=(0,c.useFinance)(),O=o??{...c.EMPTY_FINANCE_DATA},eP=(0,r.useMemo)(()=>(0,c.recentMerchants)(O.expenses,20).slice(0,6),[O.expenses]),{canUndo:eq,latestLabelKey:eJ,undo:eG}=(0,c.useUndo)(),[e9,nA]=(0,r.useState)(null),nB=(0,r.useCallback)(async(e,n)=>{(0,c.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:O,labelKey:n,ts:Date.now()}),nA(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,p.K)(10),await P(e)},[O,P]),nP=(0,r.useCallback)(async()=>{let e=eG();e&&(nA("finance.undo.label.reverted"),await P(e),setTimeout(()=>nA(null),2500))},[eG,P]),[nO,nN]=(0,r.useState)("overview"),[nY,nH]=(0,r.useState)(()=>(0,c.thisMonthKey)()),[nK,nU]=(0,r.useState)("shared");(0,r.useEffect)(()=>{(0,l.PL)(eL).then(e=>{e&&nU(e)})},[]);let n_=(0,r.useCallback)(e=>{nU(e),(0,l.Is)(eL,e)},[]),[nW,nZ]=(0,r.useState)(!1),[nq,nJ]=(0,r.useState)([]),[nG,nX]=(0,r.useState)(!1),[nQ,nV]=(0,r.useState)(!1),[n0,ii]=(0,r.useState)(null),it=+(nq.length>0)+ +!!nG,ir=(0,M.E)();(0,r.useEffect)(()=>{"expenses"!==nO&&ir.selectMode&&ir.exitSelectMode()},[nO]);let{range:ia,setRange:io}=(0,d.H)("month"),is=(0,r.useRef)(null),il=(0,r.useRef)(null),ic=(0,r.useRef)(null),[id,ip]=(0,r.useState)(!1),[im,iu]=(0,r.useState)(""),[ix,ig]=(0,r.useState)(""),[ih,ib]=(0,r.useState)("shared"),[iy,iw]=(0,r.useState)(null),[ij,i$]=(0,r.useState)(!1),iv=(0,r.useRef)(null),[ik,iM]=(0,r.useState)(null),[iT,iS]=(0,r.useState)("EUR"),[iC,iF]=(0,r.useState)(!1),[iz,iR]=(0,r.useState)(!1),iD=(0,E.x)(),iI=(0,r.useRef)(null),iE=(0,r.useRef)(!1),[iL,iA]=(0,r.useState)(!1),[iB,iP]=(0,r.useState)(-1),iO=(0,r.useRef)(null),[iN,iY]=(0,r.useState)(""),[iH,iK]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,l.PL)(eI).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&iK(n)}catch{}})},[]);let[iU,i_]=(0,r.useState)(!1),[iW,iZ]=(0,r.useState)(!1),[iq,iJ]=(0,r.useState)(!1),iG=(0,r.useCallback)(e=>{let n=e-(0,c.computeCurrentBalance)(O);if(0===n)return void iJ(!1);let i=(O.budget.openingBalance??0)+n;nB({...O,budget:{...O.budget,openingBalance:i}},"finance.undo.label.edited"),iJ(!1)},[O,nB]),iX=(0,r.useCallback)(e=>{nB({...O,income:[e,...O.income]},"finance.undo.label.added"),iZ(!1),iv.current&&clearTimeout(iv.current),i$(!0),iv.current=setTimeout(()=>i$(!1),2e3)},[O,nB]),iQ=(0,r.useCallback)((e,n,i,t)=>{let r=i?[i,...O.recentDescriptions].filter(Boolean).slice(0,20):O.recentDescriptions,a={...O,expenses:[...e,...O.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)a=(0,c.addRecentTag)(a,e);nB(a,"finance.undo.label.added"),i_(!1),iv.current&&clearTimeout(iv.current),i$(!0),iv.current=setTimeout(()=>i$(!1),2e3)},[O,nB]),[iV,i0]=(0,r.useState)(""),[i4,i1]=(0,r.useState)(""),[i2,i6]=(0,r.useState)(!1),[i3,i8]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,l.PL)(eD).then(e=>{("compact"===e||"comfortable"===e)&&i8(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===i3?"compact":"comfortable";i8(e),(0,l.Is)(eD,e)},[i3]);let[i5,i7]=(0,r.useState)(3);(0,r.useEffect)(()=>{(0,l.PL)(eE).then(e=>{"6"===e?i7(6):"12"===e&&i7(12)})},[]);let i9=(0,r.useCallback)(e=>{i7(e),(0,l.Is)(eE,String(e))},[]),te=(0,r.useMemo)(()=>(0,c.thisMonthKey)(),[]),[tn,ti]=(0,r.useState)(eB);(0,r.useEffect)(()=>{(0,l.PL)(eA).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eB.filter(e=>!i.has(e.id))];ti(t)}catch{}})},[]);let tt=(0,r.useCallback)((e,n)=>{ti(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,l.Is)(eA,JSON.stringify(a)),a})},[]),tr=(0,r.useCallback)(e=>{ti(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,l.Is)(eA,JSON.stringify(a)),a})},[]),ta=(0,r.useMemo)(()=>(0,c.computeWeeklyStatus)(O),[O]);(0,r.useMemo)(()=>(0,c.computeMonthlySummary)(O,nY),[O,nY]);let to=(0,r.useMemo)(()=>(0,c.generateInsightsWithMembers)(O),[O]),{insights:ts,dismiss:tl}=(0,c.useFinanceAnomalies)(),tc=(0,r.useMemo)(()=>(0,c.availableMonths)(O),[O]),td=(0,r.useMemo)(()=>(0,c.filterExpensesByRange)(O.expenses,ia,nY),[O.expenses,ia,nY]),tp=(0,r.useMemo)(()=>(0,c.filterIncomeByRange)(O.income,ia,nY),[O.income,ia,nY]),tm=(0,r.useMemo)(()=>{let e=(0,c.expensesForMember)(td,nK);return nq.length>0&&(e=e.filter(e=>nq.includes(e.categoryId))),nG&&(e=e.filter(e=>!0===e.isReimbursable)),e},[td,nK,nq,nG]),tu=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(O,nK,te),[O,nK,te]),tx=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(te),[te]),tg=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(O,nK,tx),[O,nK,tx]),tf=(0,r.useMemo)(()=>0===tg?0:Math.round((tu-tg)/tg*100),[tu,tg]),th=(0,r.useMemo)(()=>{if("all"===nK)return a("finance.member.all");if("shared"===nK)return a("finance.hero.family");let e=O.familyMembers.find(e=>e.id===nK);return e?.name??a("finance.hero.family")},[nK,O.familyMembers,a]),tb=(0,r.useMemo)(()=>{if("all"===nK||"shared"===nK)return l.w4.colors.mainTextMuted;let e=O.familyMembers.findIndex(e=>e.id===nK);return -1===e?A:(0,h.a8)(O.familyMembers[e],e)},[nK,O.familyMembers]),ty=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,c.expensesForMember)(O.expenses,nK).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[O.expenses,nK]),tw=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,c.expensesForMonth)(e.expenses,i),a=(0,c.expensesForMember)(t,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:n3(e).color})),over:s>r?s-r:0}})})(O,nK),[O,nK]);(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,c.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:d,exp:l})}return t})(O,nK),[O,nK]);let tj=(0,r.useMemo)(()=>(0,c.forecastCashFlow)(O,i5),[O,i5]),t$=(0,r.useMemo)(()=>(0,c.firstNegativeDay)(tj),[tj]),tv=(0,r.useMemo)(()=>{let e,n;return e=new Date,n=O.expenses.length>0?O.expenses.reduce((e,n)=>e+n.amount,0)/O.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),o=(0,c.expensesForMember)(O.expenses.filter(e=>e.date===a),nK).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[O,nK]),tk=(0,r.useMemo)(()=>(0,c.dayHourSpendMatrix)((0,c.expensesForMember)(O.expenses,nK)),[O.expenses,nK]),tM=ta.budget>0?ta.spent/ta.budget*100:0,tT=O.budget.monthlyBudget>0?tu/O.budget.monthlyBudget*100:0,tS=(0,r.useMemo)(()=>{let e=(0,c.parseQuickInput)(im,O.familyMembers);return e?.description?(0,c.guessCategoryWithRules)(O,e.description):"other"},[im,O]),tC=ix||iN||tS,tF=(0,r.useMemo)(()=>(0,c.parseRecurringHint)(im),[im]);(0,r.useEffect)(()=>{let e=(0,c.parseQuickInput)(im,O.familyMembers);e?.memberId&&ib(e.memberId)},[im,O.familyMembers]);let tz=(0,r.useCallback)(()=>{let e=(0,c.parseQuickInput)(im,O.familyMembers),n=(0,c.parseRecurringHint)(im);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");iM({amount:e.amount,description:e.description||(tC??"other"),categoryId:tC||"other",cadence:n.cadence,firstDue:`${t}-${r}-${a}`})},[im,O.familyMembers,tC]),tR=(0,r.useCallback)(()=>{if(!ik)return;let e=new Date(ik.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:ik.description,amount:ik.amount,categoryId:ik.categoryId,cadence:ik.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==ih?ih:void 0};nB({...O,recurringRules:[...O.recurringRules??[],n]},"finance.undo.label.added"),iM(null),iu(""),ig(""),iY(""),iv.current&&clearTimeout(iv.current),i$(!0),iv.current=setTimeout(()=>i$(!1),2e3)},[ik,O,ih,nB]),tD=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=(0,c.parseQuickInput)(im,O.familyMembers);if(!i)return;let t=tC||"other",r=i.memberId??("shared"!==ih?ih:void 0),a=i.tags??[],o=i.description?(0,c.normalizeMerchant)(i.description):void 0,s=n2(),d=i.amount;if("EUR"!==iT){iR(!0),iF(!1);let e=await (0,c.convertToEUR)({amount:i.amount,code:iT,date:s});if(iR(!1),!e)return void iF(!0);d=e.eur,n={code:iT,rate:e.rate,original:i.amount}}let p={id:(0,g.z)(),amount:d,date:s,categoryId:t,description:i.description||t,type:"daily",childId:r,createdAt:Date.now(),...a.length>0?{tags:a}:{},...o?{merchant:o}:{},...n?{fx:n}:{}};iA(!1),iF(!1);let m={...O.categoryHints};i.description&&i.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(m[e]=t)});let u=[i.description||"",...O.recentDescriptions].filter(Boolean).slice(0,20),x=[p,...O.expenses],f={...O,expenses:x,categoryHints:m,recentDescriptions:u};for(let e of a)f=(0,c.addRecentTag)(f,e);nB(f,"finance.undo.label.added");let h=(0,$.j)(x);iK(h),(0,l.Is)(eI,JSON.stringify(h)),iu(""),ig(""),iY(""),iw(null),iv.current&&clearTimeout(iv.current),i$(!0),iv.current=setTimeout(()=>i$(!1),2e3)},[im,tC,ih,iT,O,nB]),tI=(0,r.useCallback)(e=>{(0,p.K)([10,50,10]);let n=(0,c.parseQuickInput)(e,O.familyMembers);if(n){let e=ix||iN||(n.description?(0,c.guessCategoryWithRules)(O,n.description):"other"),i=n.memberId??("shared"!==ih?ih:void 0),t=n.tags??[],r={id:(0,g.z)(),amount:n.amount,date:n2(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},a={...O.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(a[n]=e)});let o=[n.description||"",...O.recentDescriptions].filter(Boolean).slice(0,20),s={...O,expenses:[r,...O.expenses],categoryHints:a,recentDescriptions:o};for(let e of t)s=(0,c.addRecentTag)(s,e);nB(s,"finance.undo.label.added");let d=(0,$.j)([r,...O.expenses]);iK(d),(0,l.Is)(eI,JSON.stringify(d)),iu(""),ig(""),iY(""),iv.current&&clearTimeout(iv.current),i$(!0),iv.current=setTimeout(()=>i$(!1),2e3)}else iu(e),il.current?.focus()},[O,ix,iN,ih,nB]),tE=(0,r.useCallback)(e=>{nB({...O,expenses:O.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[O,nB]),tL=(0,r.useCallback)(e=>{let n=O.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,g.z)(),date:n2(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nB({...O,expenses:[i,...O.expenses]},"finance.undo.label.added")},[O,nB]),tA=(0,r.useCallback)(e=>{nB({...O,income:O.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[O,nB]),tB=(0,r.useCallback)(e=>{nB({...O,expenses:O.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[O,nB]),tP=(0,r.useCallback)(()=>{let e=parseFloat(iV)||O.budget.weeklyBudget,n=parseFloat(i4)||O.budget.monthlyBudget;P({...O,budget:{...O.budget,weeklyBudget:e,monthlyBudget:n}}),i6(!0),setTimeout(()=>i6(!1),2e3)},[iV,i4,O,P]),tO=(0,r.useCallback)(()=>{let e=ir.selectedIds;0!==e.size&&(nB({...O,expenses:O.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),ir.exitSelectMode())},[ir,O,nB]),tN=(0,r.useCallback)(e=>{let n=ir.selectedIds;0!==n.size&&(nB({...O,expenses:O.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),ir.exitSelectMode())},[ir,O,nB]),tY=(0,r.useCallback)(()=>{let e=ir.selectedIds;0!==e.size&&(nB({...O,expenses:O.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),ir.exitSelectMode())},[ir,O,nB]),tH=(0,r.useMemo)(()=>["shared",...O.familyMembers.map(e=>e.id)],[O.familyMembers]);(0,j.K)({quickAddInputRef:il,monthSelectRef:ic,memberIds:tH,activeMemberId:nK,onSelectMember:n_,onSetTab:e=>nN(e),expenseModalOpen:iU,onOpenExpenseModal:()=>i_(!0),shortcutsOpen:id,onToggleShortcuts:()=>ip(e=>!e)});let tK=[{value:"week",label:a("finance.range.pill.7d")},{value:"month",label:a("finance.range.pill.month")},{value:"3m",label:a("finance.range.pill.3m")},{value:"6m",label:a("finance.range.pill.6m")},{value:"1y",label:a("finance.range.pill.year")}],tU=Math.floor(tu).toLocaleString("pt-PT"),t_=(tu%1).toFixed(2).slice(1),tW=(0,r.useMemo)(()=>{if(0===(O.goals??[]).length)return null;let e=(0,c.recomputeGoalCurrents)(O);return{onTrack:e.goals.filter(e=>"behind"!==(0,c.goalStatus)(e)).length,total:e.goals.length}},[O]),tZ=(()=>{let[e,n]=te.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),tq=(0,t.jsx)(h.TA,{data:O,activeMemberId:nK,onSelectMember:n_,onSaveData:P,t:a,locale:i}),tJ=(0,r.useMemo)(()=>{let e={};for(let n of tm)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:n3(e).color}))},[tm]),tG=tJ.reduce((e,n)=>e+n.value,0),tX=(0,r.useMemo)(()=>tw.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[tw]),tQ=tw.length>0?tX/tw.length:0,tV=tw.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>O.budget.monthlyBudget).length,t0=(0,r.useMemo)(()=>{if(0===tm.length)return null;let e=tm.reduce((e,n)=>n.amount>e.amount?n:e,tm[0]),n={};for(let e of tm){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?O.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??a("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tm){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tm.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tm,O.familyMembers,a]);return(0,t.jsxs)(l.PE,{title:a("finance.appTitle"),sidebar:tq,topBarRight:e,activeId:nK,children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(Y,{children:(0,t.jsx)(h.jb,{data:O,activeMemberId:nK,onSelectMember:n_,t:a,locale:i})}),(0,t.jsxs)(K,{children:[(0,t.jsx)(U,{children:(0,t.jsx)("div",{role:"tablist","aria-label":a("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:a("finance.tab.overview"),expenses:a("finance.tab.expenses"),insights:a("finance.tab.insights")},i={overview:0,expenses:tm.length,insights:to.length}[e];return(0,t.jsxs)(W,{type:"button",role:"tab","aria-selected":nO===e,active:nO===e,onClick:()=>nN(e),children:[n[e],i>0&&(0,t.jsxs)(Z,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(m.ms,{align:"right",trigger:(0,t.jsx)(m.$n,{variant:it>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"filter",size:13,"aria-hidden":!0}),children:it>0?a("finance.filters.activeCount",{n:it}):a("finance.actions.filters")}),children:[(0,t.jsx)(m.o_,{children:a("finance.filters.member")}),["shared",...O.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?a("finance.hero.family"):O.familyMembers.find(n=>n.id===e)?.name??e,i=e===nK;return(0,t.jsx)(m.tJ,{onClick:()=>n_(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(m.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.o_,{children:a("finance.filters.category")}),(0,t.jsx)(m.tJ,{onClick:()=>nJ([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===nq.length&&(0,t.jsx)(m.In,{name:"check",size:12}),nq.length>0&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.allCategories")]})}),c.DEFAULT_CATEGORIES.map(e=>{let n=nq.includes(e.id);return(0,t.jsx)(m.tJ,{onClick:()=>nJ(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(m.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),"pt"===i?e.labelPt:e.labelEn]})},e.id)}),(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.tJ,{onClick:()=>nX(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[nG&&(0,t.jsx)(m.In,{name:"check",size:12}),!nG&&(0,t.jsx)("span",{style:{width:12}}),a("finance.filters.reimbursableOnly")]})}),it>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.rx,{}),(0,t.jsx)(m.tJ,{onClick:()=>{nJ([]),nX(!1)},children:a("finance.filters.reset")})]})]}),(0,t.jsx)(m.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>nV(!0),children:a("finance.actions.categories")}),"expenses"===nO&&(0,t.jsx)(m.$n,{variant:ir.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{ir.selectMode?ir.exitSelectMode():ir.enterSelectMode()},children:a("finance.bulk.select")}),(0,t.jsx)(m.K0,{onClick:()=>nZ(!0),title:a("finance.actions.settings"),"aria-label":a("finance.actions.settings"),active:nW,children:(0,t.jsx)(m.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(H,{children:(0,t.jsx)(m.K0,{onClick:()=>ip(e=>!e),title:a("finance.shortcuts.title"),"aria-label":a("finance.shortcuts.title"),active:id,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(J,{"aria-label":a("finance.range.label"),children:tK.map(({value:e,label:n})=>(0,t.jsx)(q,{type:"button",active:ia===e,onClick:()=>{io(e),"month"===e&&nH(te)},"aria-pressed":ia===e,children:n},e))}),"month"===ia&&O.expenses.length>0&&(0,t.jsx)(v.f,{data:O,selectedMonth:nY,onSelectMonth:nH,locale:i,t:a}),(0,t.jsxs)(es,{children:["overview"===nO&&(0,t.jsxs)(el,{children:[(0,t.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,t.jsxs)(Q,{ref:is,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:l.w4.colors.mainTextMuted},children:a("finance.quickAdd.title")}),(0,t.jsxs)(e5,{visible:ij&&!iD.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",a("finance.quickAdd.added")]}),iD.listening&&(0,t.jsxs)(ne,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(nn,{}),a("finance.voice.listening")]}),(0,t.jsxs)(m.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>iZ(!0),children:["+ ",a("finance.quickAdd.addIncome")]}),(0,t.jsxs)(m.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>iJ(!0),children:["⚖ ",a("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:tD,"aria-label":a("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(e1,{children:[{id:"shared",name:a("finance.member.shared"),role:"shared",color:void 0},...O.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(O.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(e2,{type:"button",active:ih===e.id,color:i,onClick:()=>ib(e.id),children:[(0,t.jsx)(m.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(nd,{children:[(0,t.jsx)(e3,{ref:il,type:"text",placeholder:a("finance.quickAdd.placeholder"),value:im,onChange:e=>{iu(e.target.value),ig(""),iA(eP.length>0),iP(-1)},onFocus:()=>{eP.length>0&&!im.trim()&&iA(!0)},onBlur:()=>{setTimeout(()=>iA(!1),150)},onKeyDown:e=>{if(iL&&0!==eP.length)if("ArrowDown"===e.key)e.preventDefault(),iP(e=>Math.min(e+1,eP.length-1));else if("ArrowUp"===e.key)e.preventDefault(),iP(e=>Math.max(e-1,-1));else if("Enter"===e.key&&iB>=0){e.preventDefault();let n=eP[iB];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(im);iu(e?im.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),ig(""),iA(!1),iP(-1)}}else"Escape"===e.key&&(iA(!1),iP(-1))},"aria-label":a("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":iL&&eP.length>0,autoComplete:"off",inputMode:"decimal"}),iL&&eP.length>0&&(0,t.jsxs)(np,{ref:iO,role:"listbox","aria-label":a("finance.merchant.recent"),children:[(0,t.jsx)(ng,{role:"presentation",children:a("finance.merchant.recent")}),eP.map((e,n)=>(0,t.jsxs)(nm,{role:"option","aria-selected":iB===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(im);iu(i?im.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),ig(""),iA(!1),iP(-1),il.current?.focus()},children:[(0,t.jsx)(nu,{children:e.merchant}),(0,t.jsxs)(nx,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsx)(e8,{value:ix||tS,onChange:e=>{let n=e.target.value,i=ix||tS;ig(n);let t=(0,c.parseQuickInput)(im,O.familyMembers);t?.description&&iw((0,c.proposeRuleFromOverride)(i,n,t.description))},"aria-label":a("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(e8,{value:iT,onChange:e=>{iS(e.target.value),iF(!1)},"aria-label":a("finance.currency.label"),style:{maxWidth:72},children:c.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!im.trim()||iz,children:iz?a("finance.currency.converting"):a("finance.quickAdd.add")}),iD.supported&&(0,t.jsx)(nc,{type:"button","aria-label":a("finance.voice.listening"),"aria-pressed":iD.listening,active:iD.listening,onPointerDown:()=>{iI.current=window.setTimeout(()=>{iI.current=null,iE.current=!0,(0,p.K)(30),iD.listening?iD.stop():iD.start(tI)},500)},onPointerUp:()=>{null!==iI.current&&(clearTimeout(iI.current),iI.current=null,iE.current||((0,p.K)(10),iD.listening?iD.stop():iD.start(tI))),iE.current=!1},onPointerCancel:()=>{null!==iI.current&&(clearTimeout(iI.current),iI.current=null),iE.current=!1},children:(0,t.jsx)(m.In,{name:"mic",size:16})})]}),(0,t.jsx)($.J,{expenses:O.expenses,storedOrder:iH,lockedCategoryId:iN,onToggle:e=>iY(n=>n===e?"":e),locale:i,groupLabel:a("finance.quickAdd.frequentCategories")}),iy&&(0,t.jsxs)(ni,{children:[(0,t.jsxs)("span",{children:[a("finance.categoryRules.alwaysCategorize",{match:iy.match})," ",(0,t.jsx)("strong",{children:(n=c.DEFAULT_CATEGORIES.find(e=>e.id===iy.categoryId))?(0,c.categoryLabel)(n,i):iy.categoryId}),"?"]}),(0,t.jsx)(nt,{type:"button",accent:!0,onClick:()=>{O&&iy&&(nB({...O,categoryRules:[iy,...O.categoryRules??[]]},"finance.undo.label.added"),iw(null))},children:a("finance.categoryRules.propose")}),(0,t.jsx)(nt,{type:"button",onClick:()=>iw(null),children:a("finance.categoryRules.dismiss")})]}),iC&&(0,t.jsx)(e7,{style:{color:B},role:"alert",children:a("finance.currency.fxFailed")}),tF&&(0,c.parseQuickInput)(im,O.familyMembers)&&(0,t.jsxs)(nr,{type:"button",onClick:tz,"aria-label":a("finance.recurring.makeRecurring"),children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsx)(e7,{children:a("finance.quickAdd.hint")})]})]})}),(0,t.jsx)(ec,{span:12,style:{borderLeft:`2px solid ${A}`},children:(0,t.jsxs)(eu,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(ex,{children:[(0,t.jsxs)(eg,{children:[a("finance.hero.spentIn")," ",tZ," \xb7 ",th]}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eh,{children:"€"}),(0,t.jsx)(eb,{children:tU}),(0,t.jsx)(ey,{children:t_})]}),(0,t.jsxs)(ew,{children:[(0,t.jsx)(u.Ru,{value:tf,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[a("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(tx,i)," \xb7 €",n1(tg)]})]}),ty.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:ty,accent:tb,width:280,height:34})}),null!==tW&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:tW.onTrack===tW.total?"#7fb77e":l.w4.colors.mainTextMuted},children:a("finance.goals.hero",{on:tW.onTrack,total:tW.total})})]}),(0,t.jsx)(ej,{children:(0,t.jsxs)(e$,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(ek,{children:a("finance.budget.weekly")}),(0,t.jsxs)(eM,{children:["€",n1(ta.spent)," ",(0,t.jsxs)(eT,{children:["/ €",ta.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:tM,over:tM>100?tM-100:0}),(0,t.jsxs)(eS,{children:[(0,t.jsxs)("span",{children:[Math.round(tM),"% ",a("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:ta.remaining<0?B:A},children:ta.remaining>0?`€${n1(ta.remaining)} ${a("finance.budget.remaining")}`:`€${n1(Math.abs(ta.remaining))} ${a("finance.budget.over")}`})]}),(0,t.jsxs)(ev,{style:{marginTop:14},children:[(0,t.jsx)(ek,{children:a("finance.budget.monthly")}),(0,t.jsxs)(eM,{children:["€",n1(tu)," ",(0,t.jsxs)(eT,{children:["/ €",O.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:tT,over:tT>100?tT-100:0}),(0,t.jsxs)(eS,{children:[(0,t.jsxs)("span",{children:[Math.round(tT),"% ",a("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[a("finance.budget.projected")," €",n1(tu+(ta.projectedTotal-ta.spent))]})]})]})})]})}),(0,t.jsxs)(ec,{span:8,spanMd:12,children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(ep,{children:a("finance.charts.sixMonths")}),(0,t.jsx)(em,{children:(0,t.jsx)(nI,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nE,{children:[(0,t.jsx)(nL,{color:e.color}),(0,c.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(u.ik,{data:tw,budget:O.budget.monthlyBudget,height:200}),(0,t.jsxs)(nf,{children:[(0,t.jsxs)(nh,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nb,{children:["€",n1(tX)]})]}),(0,t.jsxs)(nh,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nb,{children:["€",n1(tQ)]})]}),(0,t.jsxs)(nh,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nb,{children:[tV," / ",tw.length]})]}),(0,t.jsxs)(nh,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nb,{style:{color:tf>0?B:A},children:[tf>0?"+":"",tf,"%"]})]})]})]}),(0,t.jsxs)(ec,{span:4,spanMd:6,children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(ep,{children:a("finance.charts.byCategory")}),(0,t.jsx)(nz,{type:"button",onClick:()=>nN("insights"),children:a("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:tJ,total:tG,size:110,centerLabel:tZ.slice(0,3),centerValue:`€${n1(tG)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:tJ.map(e=>{let n=n3(e.id),r=(0,c.expensesForMember)((0,c.expensesForMonth)(O.expenses,tx),nK).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eC,{children:[(0,t.jsx)(eF,{color:e.color}),(0,t.jsx)(ez,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eR,{children:["€",n1(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(u.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(ec,{span:5,spanMd:6,children:[(0,t.jsxs)(ed,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(ep,{children:a("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:a("finance.forecast.sub",{n:i5})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(q,{type:"button",active:i5===e,onClick:()=>i9(e),"aria-pressed":i5===e,children:a(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(R.b,{forecast:tj,firstNegDate:t$,t:a,locale:i,height:170})]}),(0,t.jsxs)(ec,{span:4,spanMd:6,children:[(0,t.jsx)(ed,{children:(0,t.jsx)(ep,{children:a("finance.charts.heatmap")})}),(0,t.jsx)(u.RT,{data:tv,locale:i}),(0,t.jsxs)(ny,{children:[(0,t.jsx)("span",{children:a("finance.charts.less")}),(0,t.jsx)(nw,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:a("finance.charts.more")})]})]}),(0,t.jsxs)(ec,{span:12,children:[(0,t.jsx)(V,{children:(0,t.jsx)(m.YZ,{children:a("finance.heatmap.title")})}),(0,t.jsx)(b.D,{matrix:tk,locale:i,t:a})]}),(0,t.jsxs)(ec,{span:3,spanMd:6,children:[(0,t.jsx)(ed,{children:(0,t.jsx)(ep,{children:a("finance.charts.thisWeek")})}),(0,t.jsxs)(nj,{children:[(0,t.jsxs)(n$,{children:[(0,t.jsxs)(nv,{children:["€",n1(ta.spent)]}),(0,t.jsxs)(eT,{children:["/ €",ta.budget]})]}),(0,t.jsx)(u.kl,{spent:ta.spent,budget:ta.budget}),(0,t.jsxs)(nk,{children:[(0,t.jsx)("span",{children:a("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:a("finance.charts.actual")})]})]})]}),(0,t.jsxs)(ec,{span:9,spanMd:12,children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(m.YZ,{children:a("finance.recent.title")}),tm.length>8&&(0,t.jsx)(nz,{type:"button",onClick:()=>nN("expenses"),children:a("finance.recent.viewAll",{n:tm.length})})]}),0===tm.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:a("finance.dashboard.noRecent")}):(0,t.jsx)(eO,{"aria-label":a("finance.recent.title"),children:tm.slice(0,8).map(e=>(0,t.jsx)(ie,{exp:e,finData:O,locale:i,t:a,onDelete:tE,onClone:tL,onToggleReimbursed:tB,compact:"compact"===i3},e.id))})]})]}),"expenses"===nO&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nR,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:a("finance.tx.title")}),"month"===ia&&0===O.expenses.length&&(0,t.jsx)(nF,{ref:ic,value:nY,onChange:e=>nH(e.target.value),"aria-label":a("finance.insights.month"),children:tc.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),0===tm.length&&0===tp.length?(0,t.jsx)(ec,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.tx.empty")})}):(0,t.jsx)(ec,{span:12,children:(0,t.jsx)(eO,{"aria-label":a("finance.tx.title"),children:[...tm.map(e=>({...e,_kind:"expense"})),...tp.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ie,{exp:e,finData:O,locale:i,t:a,onDelete:tE,onClone:tL,onToggleReimbursed:tB,compact:"compact"===i3,selectMode:ir.selectMode,selected:ir.selectedIds.has(e.id),onToggleSelect:ir.toggleId,longPressHandlers:ir.longPressHandlers,onEnterSelectMode:ir.enterSelectMode},e.id):(0,t.jsxs)(eN,{compact:"compact"===i3,children:["compact"===i3?(0,t.jsx)(eY,{color:A,"aria-hidden":!0}):(0,t.jsx)(eH,{color:A,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eU,{children:e.source}),"compact"!==i3&&(0,t.jsxs)(e_,{children:[n6(e.date,i)," \xb7 ",a("finance.dashboard.income")]})]}),(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eZ,{style:{color:A},children:["+€",n4(e.amount)]}),(0,t.jsx)(eX,{className:"delete-btn",type:"button",onClick:()=>tA(e.id),"aria-label":`${a("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nO&&(0,t.jsxs)(eo,{children:[(0,t.jsxs)(nR,{style:{marginBottom:0},children:[(0,t.jsx)(m.YZ,{children:a("finance.insights.title")}),"month"===ia&&0===O.expenses.length&&(0,t.jsx)(nF,{value:nY,onChange:e=>nH(e.target.value),"aria-label":a("finance.insights.month"),children:tc.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),null!==t0&&(0,t.jsxs)(en,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{children:a("finance.kpi.biggestExpense")}),(0,t.jsxs)(er,{children:["€",t0.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ea,{children:t0.biggest.description?`${t0.biggest.description} \xb7 ${(0,c.categoryLabel)(n3(t0.biggest.categoryId),i)}`:(0,c.categoryLabel)(n3(t0.biggest.categoryId),i)})]}),(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{children:a("finance.kpi.topSpender")}),(0,t.jsxs)(er,{children:["€",t0.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ea,{children:t0.topMemberLabel})]}),(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{children:a("finance.kpi.busiestDay")}),(0,t.jsxs)(er,{children:["€",t0.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ea,{children:a(`finance.weekday.${t0.busiestDowKey}`)})]}),(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{children:a("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(er,{children:["€",t0.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ea,{children:0===t0.reimbursableTotal?"—":a("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(m.dO,{items:tn.map(e=>({...e})),onReorder:tt,onCycleSize:tr,accentColor:()=>A,labels:{moveLeft:a("finance.insights.panel.moveLeft"),moveRight:a("finance.insights.panel.moveRight"),cycleSize:a("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.charts.sixMonths")}),(0,t.jsx)(u.ik,{data:tw,budget:O.budget.monthlyBudget,height:180}),(0,t.jsxs)(nf,{style:{marginTop:l.w4.spacing.sm},children:[(0,t.jsxs)(nh,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.total6m")}),(0,t.jsxs)(nb,{children:["€",n1(tX)]})]}),(0,t.jsxs)(nh,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.monthlyAvg")}),(0,t.jsxs)(nb,{children:["€",n1(tQ)]})]}),(0,t.jsxs)(nh,{children:[(0,t.jsx)(m.YZ,{children:a("finance.charts.trend")}),(0,t.jsxs)(nb,{style:{color:tf>0?B:A},children:[tf>0?"+":"",tf,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.charts.byCategory")}),0===tJ.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${l.w4.spacing.lg} 0`,textAlign:"center"},children:a("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:tJ,total:tG,size:110,centerLabel:tZ.slice(0,3),centerValue:`€${n1(tG)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:tJ.map(e=>{let n=n3(e.id),r=e.color||l.w4.colors.mainTextMuted,a=(0,c.expensesForMember)((0,c.expensesForMonth)(O.expenses,tx),nK).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eC,{children:[(0,t.jsx)(eF,{color:r}),(0,t.jsx)(ez,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eR,{children:["€",n1(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.insights.title")}),0===to.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:to.map((e,n)=>(0,t.jsxs)(eQ,{itype:e.type,children:[(0,t.jsx)(eV,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:a(e.messageKey,e.params)}),e.memberId&&(()=>{let n=O.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=O.familyMembers.indexOf(n);return(0,t.jsxs)(e0,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:a("finance.insights.anomalies")}),0===ts.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:ts.map(e=>(0,t.jsxs)(eQ,{itype:e.type,children:[(0,t.jsx)(eV,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:a(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(e4,{type:"button",title:a("finance.insights.anomalies.dismiss"),"aria-label":a("finance.insights.anomalies.dismiss"),onClick:()=>{tl(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-budgets":return(0,t.jsx)(D.z,{});case"analytics-bills":return(0,t.jsx)(C.J,{});case"analytics-subscriptions":return(0,t.jsx)(T.n,{});case"analytics-goals":return(0,t.jsx)(S.f,{});case"analytics-recurring":return(0,t.jsx)(F.b,{});case"analytics-rules":return(0,t.jsx)(I.K,{});case"analytics-networth":return(0,t.jsx)(z.S,{});default:return null}}})]})]}),(0,t.jsxs)(nD,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),iU&&(0,t.jsx)(n9,{finData:O,activeMemberId:nK,locale:i,t:a,onClose:()=>i_(!1),onSubmit:iQ}),iW&&(0,t.jsx)(n7,{finData:O,locale:i,t:a,onClose:()=>iZ(!1),onSubmit:iX}),iq&&(0,t.jsx)(n5,{finData:O,t:a,onClose:()=>iJ(!1),onSubmit:iG}),(0,t.jsx)(y.S,{labelKey:e9,onUndo:()=>{nP()},onDismiss:()=>nA(null),t:a}),ir.selectMode&&"expenses"===nO&&(0,t.jsx)(k.S,{selectionCount:ir.selectedIds.size,visibleIds:tm.map(e=>e.id),selectedIds:ir.selectedIds,categories:c.DEFAULT_CATEGORIES,locale:i,t:a,onCancel:ir.exitSelectMode,onSelectAll:()=>ir.selectAll(tm.map(e=>e.id)),onCategorise:tN,onDelete:tO,onMarkReimbursed:tY}),id&&(0,t.jsx)(w.m,{t:a,onClose:()=>ip(!1)}),(0,t.jsx)(L.X,{open:nW,onClose:()=>nZ(!1),ariaLabel:a("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(G,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(m.YZ,{children:a("finance.settings.title")}),(0,t.jsx)(m.K0,{onClick:()=>nZ(!1),title:a("finance.actions.settings"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"drawer-weekly-budget",children:a("finance.settings.weeklyBudget")}),(0,t.jsx)(nS,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(O.budget.weeklyBudget),value:iV,onChange:e=>i0(e.target.value)})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"drawer-monthly-budget",children:a("finance.settings.monthlyBudget")}),(0,t.jsx)(nS,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(O.budget.monthlyBudget),value:i4,onChange:e=>i1(e.target.value)})]}),(0,t.jsx)(m.$n,{variant:"primary",onClick:()=>{tP(),nZ(!1)},style:{height:44},children:i2?a("finance.settings.saved"):a("finance.settings.save")})]})]})}),(0,t.jsx)(L.X,{open:nQ,onClose:()=>{nV(!1),ii(null)},ariaLabel:a("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(G,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(m.YZ,{children:a("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!n0&&(0,t.jsx)(m.$n,{variant:"ghost",style:{height:28},onClick:()=>ii({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:a("finance.categories.new")}),(0,t.jsx)(m.K0,{onClick:()=>{nV(!1),ii(null)},title:a("finance.categories.cancel"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]})]}),n0&&(0,t.jsxs)("div",{style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,padding:l.w4.spacing.md,display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{children:a("finance.categories.labelEn")}),(0,t.jsx)(nC,{value:n0.labelEn,onChange:e=>ii(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{children:a("finance.categories.labelPt")}),(0,t.jsx)(nC,{value:n0.labelPt,onChange:e=>ii(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{children:a("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:n0.icon,onChange:e=>ii(n=>n&&{...n,icon:e.target.value}),style:{background:l.w4.colors.surface,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:m.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{children:a("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:n0.color,onChange:e=>ii(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nC,{value:n0.color,onChange:e=>ii(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",style:{height:28},onClick:()=>ii(null),children:a("finance.categories.cancel")}),(0,t.jsx)(m.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!n0.labelEn||!n0.labelPt)return;let e={id:(0,g.z)(),labelEn:n0.labelEn,labelPt:n0.labelPt,icon:n0.icon,color:n0.color,isCustom:!0},n=O.categories??[];nB({...O,categories:[...n,e]},"finance.undo.label.added"),ii(null)},children:a("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,m.n6)(e.icon)?(0,t.jsx)(m.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:"pt"===i?e.labelPt:e.labelEn}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:a("finance.categories.builtIn")})]},e.id)),(O.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm,padding:"6px 8px",borderRadius:l.w4.borderRadius.sm,background:l.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,m.n6)(e.icon)?(0,t.jsx)(m.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:"pt"===i?e.labelPt:e.labelEn}),(0,t.jsx)(m.K0,{title:a("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(O.categories??[]).filter(n=>n.id!==e.id);nB({...O,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(m.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(L.X,{open:null!==ik,onClose:()=>iM(null),ariaLabel:a("finance.recurring.makeRecurring"),maxWidth:360,children:ik&&(0,t.jsxs)(na,{children:[(0,t.jsxs)(m.YZ,{children:["↻ ",a("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(no,{children:a("finance.recurring.frequency")}),(0,t.jsx)(ns,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nl,{type:"button",active:ik.cadence===e,onClick:()=>iM(n=>n?{...n,cadence:e}:null),children:a(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(no,{children:a("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:ik.firstDue,onChange:e=>iM(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",onClick:()=>iM(null),children:a("finance.recurring.cancel")}),(0,t.jsx)(m.$n,{variant:"primary",onClick:tR,disabled:!ik.firstDue,children:a("finance.recurring.confirm")})]})]})})]})}function n5({finData:e,t:n,onClose:i,onSubmit:a}){let o=(0,c.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[d,p]=(0,r.useState)(""),u=parseFloat(d.replace(",",".")),x=d.trim().length>0&&!Number.isNaN(u),g=x?u-o:0;return(0,t.jsx)(L.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nB,{children:[(0,t.jsxs)(nP,{children:[(0,t.jsx)(m.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nO,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&a(u)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:l.w4.spacing.sm,background:l.w4.colors.sidebarHover,borderRadius:l.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",n4(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:l.w4.colors.mainTextMuted},children:["€",n4(s)]})]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(nW,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:d,onChange:e=>p(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:g>0?A:B,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:n4(g)}):n("finance.balance.deltaDown",{n:n4(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:l.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function n7({finData:e,locale:n,t:i,onClose:a,onSubmit:o}){let[s,c]=(0,r.useState)(""),[d,p]=(0,r.useState)(n2()),[u,x]=(0,r.useState)(""),[f,h]=(0,r.useState)(""),b=parseFloat(s.replace(",",".")),y=!Number.isNaN(b)&&b>0&&u.trim().length>0,w=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(L.X,{open:!0,onClose:a,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nB,{children:[(0,t.jsxs)(nP,{children:[(0,t.jsx)(m.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nO,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),y&&o({id:(0,g.z)(),amount:b,date:d,source:u.trim(),createdAt:Date.now(),...f?{goalId:f}:{}})},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nN,{children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(nW,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>c(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(nW,{id:"inc-date",type:"date",value:d,onChange:e=>p(e.target.value)})]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(nW,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),w.length>0&&(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(nZ,{id:"inc-goal",value:f,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),w.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:a,children:i("finance.income.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!y,children:i("finance.income.add")})]})]})]})})}function n9({finData:e,activeMemberId:n,locale:i,t:a,onClose:o,onSubmit:s}){let[d,p]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)("other"),[y,w]=(0,r.useState)(n2()),[j,$]=(0,r.useState)("single"),[v,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,C]=(0,r.useState)([]),[F,z]=(0,r.useState)(""),[R,D]=(0,r.useState)(!1),I=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&b((0,c.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(d.replace(",","."))||0,A=M.length,B="split"===j&&A>0?E/A:E,P=E>0&&!!y&&("single"===j||"split"===j&&A>0),O=e=>{let n=e.trim().replace(/^#/,"");n&&(C(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),z(""),D(!1))},N=(0,r.useMemo)(()=>{let n=F.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[F,e.recentTags,S]),Y=[{id:"shared",name:a("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(L.X,{open:!0,onClose:o,ariaLabel:a("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nA,{children:[(0,t.jsxs)(nP,{children:[(0,t.jsxs)(m.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(nO,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!P)return;let t=u.trim(),r=Date.now(),a={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=f)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:E,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===v?void 0:v,createdAt:r,...o}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,a)=>({id:(0,g.z)(),amount:0===a?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${A})`:f,type:"daily",childId:i,createdAt:r+a,...o}))}s(i,a,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nN,{children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,t.jsx)(nW,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:d,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,t.jsx)(nW,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,t.jsx)(nW,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(nZ,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{children:a("finance.tags.label")}),(0,t.jsxs)(nV,{children:[(0,t.jsxs)(nG,{onClick:()=>I.current?.focus(),children:[S.map(e=>(0,t.jsxs)(m.vu,{variant:"selected",onClick:()=>{C(n=>n.filter(n=>n!==e))},"aria-label":a("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(nJ,{ref:I,type:"text",value:F,placeholder:0===S.length?a("finance.tags.placeholder"):"",onChange:e=>{z(e.target.value),D(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),O(F)):"Backspace"===e.key&&""===F&&S.length>0?C(e=>e.slice(0,-1)):"Escape"===e.key&&D(!1)},onBlur:()=>{F.trim()&&O(F),setTimeout(()=>D(!1),150)},onFocus:()=>D(!0),"aria-label":a("finance.tags.label")})]}),R&&N.length>0&&(0,t.jsx)(nX,{children:N.map(e=>(0,t.jsxs)(nQ,{onMouseDown:n=>{n.preventDefault(),O(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nM,{children:[(0,t.jsx)(nT,{children:a("finance.modal.assign")}),(0,t.jsxs)(nY,{role:"tablist",children:[(0,t.jsx)(nH,{type:"button",active:"single"===j,onClick:()=>$("single"),children:a("finance.modal.member")}),(0,t.jsx)(nH,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,t.jsx)(nK,{style:{marginTop:l.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(nU,{type:"button",active:v===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nK,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(nU,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(n_,{style:{marginTop:l.w4.spacing.xs},children:a("finance.modal.splitEach",{n:A,amount:n4(B)})})]})]}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:o,children:a("finance.member.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!P,children:a("finance.quickAdd.add")})]})]})]})})}function ie({exp:e,finData:n,locale:i,t:r,onDelete:a,onClone:o,onToggleReimbursed:s,compact:d=!1,selectMode:p=!1,selected:u=!1,onToggleSelect:x,longPressHandlers:g}){let f=n3(e.categoryId),b=n.familyMembers.findIndex(n=>n.id===e.childId),y=b>=0?n.familyMembers[b]:null,w=y?(0,h.a8)(y,b):l.w4.colors.mainTextMuted,j=g?g(e.id):null,$=n=>{p&&x&&"INPUT"!==n.target.tagName&&x(e.id)},v=e.isReimbursable&&!p?s?(0,t.jsx)(eJ,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(eq,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,k=!p&&o?(0,t.jsx)(eG,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,M=p?null:(0,t.jsx)(eX,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),T=p?(0,t.jsx)(eP,{type:"checkbox",checked:u,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,S=p?{background:u?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:u?"1px solid rgba(127,183,126,0.35)":"none"}:{};return d?(0,t.jsxs)(eN,{compact:!0,style:S,onClick:$,...j??{},children:[T,(0,t.jsx)(eY,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(eK,{children:(0,t.jsxs)(eU,{style:{display:"flex",alignItems:"center",gap:6},children:[y?(0,t.jsx)(m.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:13,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,c.categoryLabel)(f,i)})]})}),(0,t.jsxs)(eW,{children:[v,(0,t.jsxs)(eZ,{children:["−€",n4(e.amount)]}),k,M]})]}):(0,t.jsxs)(eN,{style:S,onClick:$,...j??{},children:[T,(0,t.jsx)(eH,{color:f.color,children:(0,m.n6)(f.icon)?(0,t.jsx)(m.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eU,{children:e.description||(0,c.categoryLabel)(f,i)}),(0,t.jsxs)(e_,{children:[y?(0,t.jsx)(m.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:l.w4.typography.fontFamilyMono,fontSize:11,color:l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,c.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:n6(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(n0,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(eW,{children:[v,"recurring"===e.type&&(0,t.jsx)(eq,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(eZ,{children:["−€",n4(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:l.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),k,M]})]})}}}]);