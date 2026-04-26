"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),r=i(8997),a=i(7991),o=i(6859),s=i.n(o),l=i(2799),c=i(4764),d=i(8113),p=i(3759),m=i(789),u=i(5030),x=i(1496),g=i(8170),f=i(4041),h=i(948),b=i(719),y=i(2405),w=i(9546),j=i(5854),$=i(3616),v=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),C=i(8635),F=i(8501),z=i(1789),R=i(216),D=i(9419),I=i(341),E=i(9378),L=i(545),A=i(2167);let B="#7fb77e",P="#f85149",O=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,N=c.w4.suites.lab,Y=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${O} 0.25s ease both;
  overflow: hidden;
`,H=s().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,U=s().div`
  display: none;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,K=s().div`
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
`,W=s().div`
  flex: 1;
  min-width: 0;
`,_=s().div`
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
`,q=s().span`
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
`;let X=s().div`
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
  animation: ${O} 0.2s ease;

  @media (min-width: ${c.w4.breakpoints.md}) {
    border-radius: ${c.w4.borderRadius.lg};
  }
`,Q=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,V=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${B};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${B};
  padding: ${c.w4.spacing.lg};
`;let ee=s().div`
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
`;let en=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
`,ei=s().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,et=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,er=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ea=s().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
`,eo=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,es=s().div`
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
`;let el=s().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    padding: ${c.w4.spacing.lg};
  }
`,ec=s().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,ed=s().div`
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
`,ep=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,em=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eu=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,ex=s().div`
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
`,eg=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ef=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eh=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eb=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,ey=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,ew=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,ej=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,e$=s().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,ev=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ek=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,eM=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,eT=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eS=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eC=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eF=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,ez=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eR=s().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eD=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eI="finance:list-density",eE="finance:quick-categories",eL="finance:forecast-months",eA="finance:active-member",eB="finance:insights-layout",eP=[{id:"analytics-trend",size:"lg"},{id:"analytics-donut",size:"md"},{id:"analytics-insights",size:"md"},{id:"analytics-anomalies",size:"sm"},{id:"analytics-budgets",size:"lg"},{id:"analytics-bills",size:"md"},{id:"analytics-subscriptions",size:"md"},{id:"analytics-goals",size:"md"},{id:"analytics-recurring",size:"md"},{id:"analytics-rules",size:"sm"},{id:"analytics-networth",size:"lg"}],eO=s().input`
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
`,eN=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eY=s().li`
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
`,eH=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eU=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eK=s().div`
  flex: 1;
  min-width: 0;
`,eW=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e_=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,eZ=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,eq=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,eJ=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${B}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?B:"#facc15"};
  white-space: nowrap;
`,eG=s().button`
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
`,eX=s().button`
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
`,eQ=s().button`
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
    color: ${P};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,eV=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${B}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${B}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,e0=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?P:"warning"===e?"#facc15":"success"===e?B:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,e1=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,e4=s().button`
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
`;s()(ed)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let e2=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,e6=s().button`
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
`,e3=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,e8=s().input`
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
`,e5=s().select`
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
`,e7=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${B};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,e9=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,ne=(0,l.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,nn=s().div`
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
`,ni=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${B};
  animation: ${ne} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,nt=s().div`
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
  animation: ${O} 0.2s ease both;

  strong {
    color: ${c.w4.colors.mainText};
    font-weight: 600;
  }
`,nr=s().button`
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
`,na=s().button`
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
`,no=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  animation: ${O} 0.2s ease;
`,ns=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nl=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,nc=s().button`
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
`,nd=s().button`
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
`,np=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nm=s().ul`
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
`,nu=s().li`
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
`,nx=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ng=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nf=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nh=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,nb=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ny=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nw=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nj=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,n$=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,nv=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,nk=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nM=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${B}; }
`,nT=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nS=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,nC=s().input`
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
`,nF=s().input`
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
`,nz=s().select`
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
`;let nR=s().button`
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
`,nD=s().div`
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
`;let nI=s().footer`
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
`,nE=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nL=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nA=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nB=s().div`
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
`,nP=s().div`
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,nO=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nN=s().button`
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
`,nY=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nH=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nU=s().button`
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
`,nK=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,nW=s().button`
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
`,n_=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nZ=s().input`
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
`,nq=s().select`
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
`,nJ=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,nG=s().input`
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
`,nX=s().div`
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
`,nQ=s().ul`
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
`,nV=s().li`
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,n0=s().div`
  position: relative;
`,n1=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function n4(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function n2(e){return Math.round(e).toLocaleString("pt-PT")}function n6(){return new Date().toISOString().slice(0,10)}function n3(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function n8(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function n5({finData:e,t:n,onClose:i,onSubmit:r}){let o=(0,d.computeCurrentBalance)(e),s=e.budget.openingBalance??0,[l,p]=(0,a.useState)(""),m=parseFloat(l.replace(",",".")),x=l.trim().length>0&&!Number.isNaN(m),g=x?m-o:0;return(0,t.jsx)(A.X,{open:!0,onClose:i,ariaLabel:n("finance.balance.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nP,{children:[(0,t.jsxs)(nO,{children:[(0,t.jsx)(u.YZ,{children:n("finance.balance.modalTitle")}),(0,t.jsx)(nN,{type:"button",onClick:i,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x&&r(m)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:c.w4.spacing.sm,background:c.w4.colors.sidebarHover,borderRadius:c.w4.borderRadius.md,fontSize:13},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.current")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontWeight:600,marginTop:4},children:["€",n4(o)]})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em"},children:n("finance.balance.opening")}),(0,t.jsxs)("div",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",marginTop:4,color:c.w4.colors.mainTextMuted},children:["€",n4(s)]})]})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"bal-target",children:n("finance.balance.target")}),(0,t.jsx)(nZ,{id:"bal-target",type:"text",inputMode:"decimal",placeholder:o.toFixed(2),value:l,onChange:e=>p(e.target.value),autoFocus:!0}),(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:4},children:n("finance.balance.targetHint")}),x&&0!==g&&(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:g>0?B:P,marginTop:6},children:g>0?n("finance.balance.deltaUp",{n:n4(g)}):n("finance.balance.deltaDown",{n:n4(-g)})}),x&&0===g&&(0,t.jsx)("div",{style:{fontSize:11,color:c.w4.colors.mainTextMuted,marginTop:6},children:n("finance.balance.noChange")})]}),(0,t.jsxs)(nJ,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:i,children:n("finance.balance.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!x,children:n("finance.balance.save")})]})]})]})})}function n7({finData:e,locale:n,t:i,onClose:r,onSubmit:o}){let[s,l]=(0,a.useState)(""),[d,p]=(0,a.useState)(n6()),[m,x]=(0,a.useState)(""),[g,h]=(0,a.useState)(""),b=parseFloat(s.replace(",",".")),y=!Number.isNaN(b)&&b>0&&m.trim().length>0,w=e.goals.filter(e=>e.current<e.target);return(0,t.jsx)(A.X,{open:!0,onClose:r,ariaLabel:i("finance.income.modalTitle"),maxWidth:520,children:(0,t.jsxs)(nP,{children:[(0,t.jsxs)(nO,{children:[(0,t.jsx)(u.YZ,{children:i("finance.income.modalTitle")}),(0,t.jsx)(nN,{type:"button",onClick:r,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),y&&o({id:(0,f.z)(),amount:b,date:d,source:m.trim(),createdAt:Date.now(),...g?{goalId:g}:{}})},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nY,{children:[(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"inc-amount",children:i("finance.income.amount")}),(0,t.jsx)(nZ,{id:"inc-amount",type:"text",inputMode:"decimal",placeholder:"1500",value:s,onChange:e=>l(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"inc-date",children:i("finance.income.date")}),(0,t.jsx)(nZ,{id:"inc-date",type:"date",value:d,onChange:e=>p(e.target.value)})]})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"inc-source",children:i("finance.income.source")}),(0,t.jsx)(nZ,{id:"inc-source",type:"text",placeholder:i("finance.form.sourcePlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),w.length>0&&(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"inc-goal",children:i("finance.income.goal")}),(0,t.jsxs)(nq,{id:"inc-goal",value:g,onChange:e=>h(e.target.value),children:[(0,t.jsx)("option",{value:"",children:i("finance.income.goalNone")}),w.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(nJ,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:r,children:i("finance.income.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!y,children:i("finance.income.add")})]})]})]})})}function n9({finData:e,activeMemberId:n,locale:i,t:r,onClose:o,onSubmit:s}){let[l,p]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),[g,h]=(0,a.useState)("other"),[y,w]=(0,a.useState)(n6()),[j,$]=(0,a.useState)("single"),[v,k]=(0,a.useState)(n),[M,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,C]=(0,a.useState)([]),[F,z]=(0,a.useState)(""),[R,D]=(0,a.useState)(!1),I=(0,a.useRef)(null);(0,a.useEffect)(()=>{m.trim()&&h((0,d.guessCategoryWithRules)(e,m))},[m,e]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let E=parseFloat(l.replace(",","."))||0,L=M.length,B="split"===j&&L>0?E/L:E,P=E>0&&!!y&&("single"===j||"split"===j&&L>0),O=e=>{let n=e.trim().replace(/^#/,"");n&&(C(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),z(""),D(!1))},N=(0,a.useMemo)(()=>{let n=F.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[F,e.recentTags,S]),Y=[{id:"shared",name:r("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(A.X,{open:!0,onClose:o,ariaLabel:r("finance.quickAdd.newExpense"),maxWidth:560,children:(0,t.jsxs)(nB,{children:[(0,t.jsxs)(nO,{children:[(0,t.jsxs)(u.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,t.jsx)(nN,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!P)return;let t=m.trim(),r=Date.now(),a={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=g)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,f.z)(),amount:E,date:y,categoryId:g,description:t||g,type:"daily",childId:"shared"===v?void 0:v,createdAt:r,...o}];else{let e=Math.round(E/L*100)/100,n=Math.round((E-e*L)*100)/100;i=M.map((i,a)=>({id:(0,f.z)(),amount:0===a?e+n:e,date:y,categoryId:g,description:t?`${t} (1/${L})`:g,type:"daily",childId:i,createdAt:r+a,...o}))}s(i,a,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nY,{children:[(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"exp-amount",children:r("finance.modal.amount")}),(0,t.jsx)(nZ,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"exp-date",children:r("finance.modal.date")}),(0,t.jsx)(nZ,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"exp-desc",children:r("finance.modal.description")}),(0,t.jsx)(nZ,{id:"exp-desc",type:"text",placeholder:r("finance.modal.descPlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,t.jsx)(nq,{id:"exp-cat",value:g,onChange:e=>h(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{children:r("finance.tags.label")}),(0,t.jsxs)(n0,{children:[(0,t.jsxs)(nX,{onClick:()=>I.current?.focus(),children:[S.map(e=>(0,t.jsxs)(u.vu,{variant:"selected",onClick:()=>{C(n=>n.filter(n=>n!==e))},"aria-label":r("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(nG,{ref:I,type:"text",value:F,placeholder:0===S.length?r("finance.tags.placeholder"):"",onChange:e=>{z(e.target.value),D(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),O(F)):"Backspace"===e.key&&""===F&&S.length>0?C(e=>e.slice(0,-1)):"Escape"===e.key&&D(!1)},onBlur:()=>{F.trim()&&O(F),setTimeout(()=>D(!1),150)},onFocus:()=>D(!0),"aria-label":r("finance.tags.label")})]}),R&&N.length>0&&(0,t.jsx)(nQ,{children:N.map(e=>(0,t.jsxs)(nV,{onMouseDown:n=>{n.preventDefault(),O(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{children:r("finance.modal.assign")}),(0,t.jsxs)(nH,{role:"tablist",children:[(0,t.jsx)(nU,{type:"button",active:"single"===j,onClick:()=>$("single"),children:r("finance.modal.member")}),(0,t.jsx)(nU,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:r("finance.modal.split")})]}),"single"===j?(0,t.jsx)(nK,{style:{marginTop:c.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(nW,{type:"button",active:v===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nK,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(nW,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),L>0&&E>0&&(0,t.jsx)(n_,{style:{marginTop:c.w4.spacing.xs},children:r("finance.modal.splitEach",{n:L,amount:n4(B)})})]})]}),(0,t.jsxs)(nJ,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:o,children:r("finance.member.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!P,children:r("finance.quickAdd.add")})]})]})]})})}function ie({exp:e,finData:n,locale:i,t:r,onDelete:a,onClone:o,onToggleReimbursed:s,compact:l=!1,selectMode:p=!1,selected:m=!1,onToggleSelect:x,longPressHandlers:g}){let f=n8(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),y=h>=0?n.familyMembers[h]:null,w=y?(0,b.a8)(y,h):c.w4.colors.mainTextMuted,j=g?g(e.id):null,$=n=>{p&&x&&"INPUT"!==n.target.tagName&&x(e.id)},v=e.isReimbursable&&!p?s?(0,t.jsx)(eG,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(eJ,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,k=!p&&o?(0,t.jsx)(eX,{className:"clone-btn",type:"button",onClick:n=>{n.stopPropagation(),o(e.id)},"aria-label":`${r("finance.tx.clone")} — ${e.description}`,title:r("finance.tx.clone"),children:"↻"}):null,M=p?null:(0,t.jsx)(eQ,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),T=p?(0,t.jsx)(eO,{type:"checkbox",checked:m,"aria-label":e.description,onChange:()=>x?.(e.id),onClick:e=>e.stopPropagation()}):null,S=p?{background:m?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:m?"1px solid rgba(127,183,126,0.35)":"none"}:{};return l?(0,t.jsxs)(eY,{compact:!0,style:S,onClick:$,...j??{},children:[T,(0,t.jsx)(eH,{color:f.color,"aria-hidden":!0}),(0,t.jsx)(eK,{children:(0,t.jsxs)(eW,{style:{display:"flex",alignItems:"center",gap:6},children:[y?(0,t.jsx)(u.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:16}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:13,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,d.categoryLabel)(f,i)})]})}),(0,t.jsxs)(eZ,{children:[v,(0,t.jsxs)(eq,{children:["−€",n4(e.amount)]}),k,M]})]}):(0,t.jsxs)(eY,{style:S,onClick:$,...j??{},children:[T,(0,t.jsx)(eU,{color:f.color,children:(0,u.n6)(f.icon)?(0,t.jsx)(u.In,{name:f.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:f.icon})}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eW,{children:e.description||(0,d.categoryLabel)(f,i)}),(0,t.jsxs)(e_,{children:[y?(0,t.jsx)(u.eu,{member:{id:y.id,name:y.name,role:y.role,color:w},size:14}):(0,t.jsx)("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,flexShrink:0,fontFamily:c.w4.typography.fontFamilyMono,fontSize:11,color:c.w4.colors.mainTextFaint??c.w4.colors.mainTextMuted,opacity:.45,userSelect:"none"},"aria-hidden":"true",children:"—"}),(0,t.jsx)("span",{children:(0,d.categoryLabel)(f,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:n3(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(n1,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(eZ,{children:[v,"recurring"===e.type&&(0,t.jsx)(eJ,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(eq,{children:["−€",n4(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),k,M]})]})}let ii=document.getElementById("root");if(!ii)throw Error("Root element #root not found");(0,r.createRoot)(ii).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,g.Ym)(),r=(0,a.useMemo)(()=>(0,g.Nx)(i,h.A),[i]),{data:o,loaded:s,save:l}=(0,d.useFinance)(),O=o??{...d.EMPTY_FINANCE_DATA},N=(0,a.useMemo)(()=>(0,d.recentMerchants)(O.expenses,20).slice(0,6),[O.expenses]),{canUndo:eO,latestLabelKey:eJ,undo:eG}=(0,d.useUndo)(),[eX,ne]=(0,a.useState)(null),nB=(0,a.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:O,labelKey:n,ts:Date.now()}),ne(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await l(e)},[O,l]),nP=(0,a.useCallback)(async()=>{let e=eG();e&&(ne("finance.undo.label.reverted"),await l(e),setTimeout(()=>ne(null),2500))},[eG,l]),[nO,nN]=(0,a.useState)("overview"),[nY,nH]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[nU,nK]=(0,a.useState)("shared");(0,a.useEffect)(()=>{(0,c.PL)(eA).then(e=>{e&&nK(e)})},[]);let nW=(0,a.useCallback)(e=>{nK(e),(0,c.Is)(eA,e)},[]),[n_,nZ]=(0,a.useState)(!1),[nq,nJ]=(0,a.useState)([]),[nG,nX]=(0,a.useState)(!1),[nQ,nV]=(0,a.useState)(!1),[n0,n1]=(0,a.useState)(null),ii=+(nq.length>0)+ +!!nG,it=(0,T.E)();(0,a.useEffect)(()=>{"expenses"!==nO&&it.selectMode&&it.exitSelectMode()},[nO]);let{range:ir,setRange:ia}=(0,p.H)("month"),io=(0,a.useRef)(null),is=(0,a.useRef)(null),il=(0,a.useRef)(null),[ic,id]=(0,a.useState)(!1),[ip,im]=(0,a.useState)(""),[iu,ix]=(0,a.useState)(""),[ig,ih]=(0,a.useState)("shared"),[ib,iy]=(0,a.useState)(null),[iw,ij]=(0,a.useState)(!1),i$=(0,a.useRef)(null),[iv,ik]=(0,a.useState)(null),[iM,iT]=(0,a.useState)("EUR"),[iS,iC]=(0,a.useState)(!1),[iF,iz]=(0,a.useState)(!1),iR=(0,L.x)(),iD=(0,a.useRef)(null),iI=(0,a.useRef)(!1),[iE,iL]=(0,a.useState)(!1),[iA,iB]=(0,a.useState)(-1),iP=(0,a.useRef)(null),[iO,iN]=(0,a.useState)(""),[iY,iH]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,c.PL)(eE).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&iH(n)}catch{}})},[]);let[iU,iK]=(0,a.useState)(!1),[iW,i_]=(0,a.useState)(!1),[iZ,iq]=(0,a.useState)(!1),iJ=(0,a.useCallback)(e=>{let n=e-(0,d.computeCurrentBalance)(O);if(0===n)return void iq(!1);let i=(O.budget.openingBalance??0)+n;nB({...O,budget:{...O.budget,openingBalance:i}},"finance.undo.label.edited"),iq(!1)},[O,nB]),iG=(0,a.useCallback)(e=>{nB({...O,income:[e,...O.income]},"finance.undo.label.added"),i_(!1),i$.current&&clearTimeout(i$.current),ij(!0),i$.current=setTimeout(()=>ij(!1),2e3)},[O,nB]),iX=(0,a.useCallback)((e,n,i,t)=>{let r=i?[i,...O.recentDescriptions].filter(Boolean).slice(0,20):O.recentDescriptions,a={...O,expenses:[...e,...O.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)a=(0,d.addRecentTag)(a,e);nB(a,"finance.undo.label.added"),iK(!1),i$.current&&clearTimeout(i$.current),ij(!0),i$.current=setTimeout(()=>ij(!1),2e3)},[O,nB]),[iQ,iV]=(0,a.useState)(""),[i0,i1]=(0,a.useState)(""),[i4,i2]=(0,a.useState)(!1),[i6,i3]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,c.PL)(eI).then(e=>{("compact"===e||"comfortable"===e)&&i3(e)})},[]),(0,a.useCallback)(()=>{let e="comfortable"===i6?"compact":"comfortable";i3(e),(0,c.Is)(eI,e)},[i6]);let[i8,i5]=(0,a.useState)(3);(0,a.useEffect)(()=>{(0,c.PL)(eL).then(e=>{"6"===e?i5(6):"12"===e&&i5(12)})},[]);let i7=(0,a.useCallback)(e=>{i5(e),(0,c.Is)(eL,String(e))},[]),i9=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),[te,tn]=(0,a.useState)(eP);(0,a.useEffect)(()=>{(0,c.PL)(eB).then(e=>{if(e)try{let n=JSON.parse(e),i=new Set(n.map(e=>e.id)),t=[...n,...eP.filter(e=>!i.has(e.id))];tn(t)}catch{}})},[]);let ti=(0,a.useCallback)((e,n)=>{tn(i=>{let t=i.findIndex(n=>n.id===e);if(t<0)return i;let r=t+n;if(r<0||r>=i.length)return i;let a=[...i];return[a[t],a[r]]=[a[r],a[t]],(0,c.Is)(eB,JSON.stringify(a)),a})},[]),tt=(0,a.useCallback)(e=>{tn(n=>{let i=n.findIndex(n=>n.id===e);if(i<0)return n;let t=["sm","md","lg"],r=n[i].size,a=[...n];return a[i]={...a[i],size:t[(t.indexOf(r)+1)%t.length]},(0,c.Is)(eB,JSON.stringify(a)),a})},[]),tr=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(O),[O]);(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(O,nY),[O,nY]);let ta=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(O),[O]),{insights:to,dismiss:ts}=(0,d.useFinanceAnomalies)(),tl=(0,a.useMemo)(()=>(0,d.availableMonths)(O),[O]),tc=(0,a.useMemo)(()=>(0,d.filterExpensesByRange)(O.expenses,ir,nY),[O.expenses,ir,nY]),td=(0,a.useMemo)(()=>(0,d.filterIncomeByRange)(O.income,ir,nY),[O.income,ir,nY]),tp=(0,a.useMemo)(()=>{let e=(0,d.expensesForMember)(tc,nU);return nq.length>0&&(e=e.filter(e=>nq.includes(e.categoryId))),nG&&(e=e.filter(e=>!0===e.isReimbursable)),e},[tc,nU,nq,nG]),tm=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(O,nU,i9),[O,nU,i9]),tu=(0,a.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(i9),[i9]),tx=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(O,nU,tu),[O,nU,tu]),tg=(0,a.useMemo)(()=>0===tx?0:Math.round((tm-tx)/tx*100),[tm,tx]),tf=(0,a.useMemo)(()=>{if("all"===nU)return r("finance.member.all");if("shared"===nU)return r("finance.hero.family");let e=O.familyMembers.find(e=>e.id===nU);return e?.name??r("finance.hero.family")},[nU,O.familyMembers,r]),th=(0,a.useMemo)(()=>{if("all"===nU||"shared"===nU)return c.w4.colors.mainTextMuted;let e=O.familyMembers.findIndex(e=>e.id===nU);return -1===e?B:(0,b.a8)(O.familyMembers[e],e)},[nU,O.familyMembers]),tb=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,d.expensesForMember)(O.expenses,nU).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[O.expenses,nU]),ty=(0,a.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),a=(0,d.expensesForMember)(t,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:n8(e).color})),over:s>r?s-r:0}})})(O,nU),[O,nU]);(0,a.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:c,exp:l})}return t})(O,nU),[O,nU]);let tw=(0,a.useMemo)(()=>(0,d.forecastCashFlow)(O,i8),[O,i8]),tj=(0,a.useMemo)(()=>(0,d.firstNegativeDay)(tw),[tw]),t$=(0,a.useMemo)(()=>{let e,n;return e=new Date,n=O.expenses.length>0?O.expenses.reduce((e,n)=>e+n.amount,0)/O.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),o=(0,d.expensesForMember)(O.expenses.filter(e=>e.date===a),nU).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[O,nU]),tv=(0,a.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(O.expenses,nU)),[O.expenses,nU]),tk=tr.budget>0?tr.spent/tr.budget*100:0,tM=O.budget.monthlyBudget>0?tm/O.budget.monthlyBudget*100:0,tT=(0,a.useMemo)(()=>{let e=(0,d.parseQuickInput)(ip,O.familyMembers);return e?.description?(0,d.guessCategoryWithRules)(O,e.description):"other"},[ip,O]),tS=iu||iO||tT,tC=(0,a.useMemo)(()=>(0,d.parseRecurringHint)(ip),[ip]);(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(ip,O.familyMembers);e?.memberId&&ih(e.memberId)},[ip,O.familyMembers]);let tF=(0,a.useCallback)(()=>{let e=(0,d.parseQuickInput)(ip,O.familyMembers),n=(0,d.parseRecurringHint)(ip);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");ik({amount:e.amount,description:e.description||(tS??"other"),categoryId:tS||"other",cadence:n.cadence,firstDue:`${t}-${r}-${a}`})},[ip,O.familyMembers,tS]),tz=(0,a.useCallback)(()=>{if(!iv)return;let e=new Date(iv.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:iv.description,amount:iv.amount,categoryId:iv.categoryId,cadence:iv.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==ig?ig:void 0};nB({...O,recurringRules:[...O.recurringRules??[],n]},"finance.undo.label.added"),ik(null),im(""),ix(""),iN(""),i$.current&&clearTimeout(i$.current),ij(!0),i$.current=setTimeout(()=>ij(!1),2e3)},[iv,O,ig,nB]),tR=(0,a.useCallback)(async e=>{let n;e.preventDefault();let i=(0,d.parseQuickInput)(ip,O.familyMembers);if(!i)return;let t=tS||"other",r=i.memberId??("shared"!==ig?ig:void 0),a=i.tags??[],o=i.description?(0,d.normalizeMerchant)(i.description):void 0,s=n6(),l=i.amount;if("EUR"!==iM){iz(!0),iC(!1);let e=await (0,d.convertToEUR)({amount:i.amount,code:iM,date:s});if(iz(!1),!e)return void iC(!0);l=e.eur,n={code:iM,rate:e.rate,original:i.amount}}let p={id:(0,f.z)(),amount:l,date:s,categoryId:t,description:i.description||t,type:"daily",childId:r,createdAt:Date.now(),...a.length>0?{tags:a}:{},...o?{merchant:o}:{},...n?{fx:n}:{}};iL(!1),iC(!1);let m={...O.categoryHints};i.description&&i.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(m[e]=t)});let u=[i.description||"",...O.recentDescriptions].filter(Boolean).slice(0,20),x=[p,...O.expenses],g={...O,expenses:x,categoryHints:m,recentDescriptions:u};for(let e of a)g=(0,d.addRecentTag)(g,e);nB(g,"finance.undo.label.added");let h=(0,v.j)(x);iH(h),(0,c.Is)(eE,JSON.stringify(h)),im(""),ix(""),iN(""),iy(null),i$.current&&clearTimeout(i$.current),ij(!0),i$.current=setTimeout(()=>ij(!1),2e3)},[ip,tS,ig,iM,O,nB]),tD=(0,a.useCallback)(e=>{(0,m.K)([10,50,10]);let n=(0,d.parseQuickInput)(e,O.familyMembers);if(n){let e=iu||iO||(n.description?(0,d.guessCategoryWithRules)(O,n.description):"other"),i=n.memberId??("shared"!==ig?ig:void 0),t=n.tags??[],r={id:(0,f.z)(),amount:n.amount,date:n6(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},a={...O.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(a[n]=e)});let o=[n.description||"",...O.recentDescriptions].filter(Boolean).slice(0,20),s={...O,expenses:[r,...O.expenses],categoryHints:a,recentDescriptions:o};for(let e of t)s=(0,d.addRecentTag)(s,e);nB(s,"finance.undo.label.added");let l=(0,v.j)([r,...O.expenses]);iH(l),(0,c.Is)(eE,JSON.stringify(l)),im(""),ix(""),iN(""),i$.current&&clearTimeout(i$.current),ij(!0),i$.current=setTimeout(()=>ij(!1),2e3)}else im(e),is.current?.focus()},[O,iu,iO,ig,nB]),tI=(0,a.useCallback)(e=>{nB({...O,expenses:O.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[O,nB]),tE=(0,a.useCallback)(e=>{let n=O.expenses.find(n=>n.id===e);if(!n)return;let i={...n,id:(0,f.z)(),date:n6(),createdAt:Date.now(),sourceRuleId:void 0,reimbursed:!1};nB({...O,expenses:[i,...O.expenses]},"finance.undo.label.added")},[O,nB]),tL=(0,a.useCallback)(e=>{nB({...O,income:O.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[O,nB]),tA=(0,a.useCallback)(e=>{nB({...O,expenses:O.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[O,nB]),tB=(0,a.useCallback)(()=>{let e=parseFloat(iQ)||O.budget.weeklyBudget,n=parseFloat(i0)||O.budget.monthlyBudget;l({...O,budget:{...O.budget,weeklyBudget:e,monthlyBudget:n}}),i2(!0),setTimeout(()=>i2(!1),2e3)},[iQ,i0,O,l]),tP=(0,a.useCallback)(()=>{let e=it.selectedIds;0!==e.size&&(nB({...O,expenses:O.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),it.exitSelectMode())},[it,O,nB]),tO=(0,a.useCallback)(e=>{let n=it.selectedIds;0!==n.size&&(nB({...O,expenses:O.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),it.exitSelectMode())},[it,O,nB]),tN=(0,a.useCallback)(()=>{let e=it.selectedIds;0!==e.size&&(nB({...O,expenses:O.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),it.exitSelectMode())},[it,O,nB]),tY=(0,a.useMemo)(()=>["shared",...O.familyMembers.map(e=>e.id)],[O.familyMembers]);(0,$.K)({quickAddInputRef:is,monthSelectRef:il,memberIds:tY,activeMemberId:nU,onSelectMember:nW,onSetTab:e=>nN(e),expenseModalOpen:iU,onOpenExpenseModal:()=>iK(!0),shortcutsOpen:ic,onToggleShortcuts:()=>id(e=>!e)});let tH=[{value:"week",label:r("finance.range.pill.7d")},{value:"month",label:r("finance.range.pill.month")},{value:"3m",label:r("finance.range.pill.3m")},{value:"6m",label:r("finance.range.pill.6m")},{value:"1y",label:r("finance.range.pill.year")}],tU=Math.floor(tm).toLocaleString("pt-PT"),tK=(tm%1).toFixed(2).slice(1),tW=(0,a.useMemo)(()=>{if(0===(O.goals??[]).length)return null;let e=(0,d.recomputeGoalCurrents)(O);return{onTrack:e.goals.filter(e=>"behind"!==(0,d.goalStatus)(e)).length,total:e.goals.length}},[O]),t_=(()=>{let[e,n]=i9.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),tZ=(0,t.jsx)(b.TA,{data:O,activeMemberId:nU,onSelectMember:nW,onSaveData:l,t:r,locale:i}),tq=(0,a.useMemo)(()=>{let e={};for(let n of tp)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:n8(e).color}))},[tp]),tJ=tq.reduce((e,n)=>e+n.value,0),tG=(0,a.useMemo)(()=>ty.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[ty]),tX=ty.length>0?tG/ty.length:0,tQ=ty.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>O.budget.monthlyBudget).length,tV=(0,a.useMemo)(()=>{if(0===tp.length)return null;let e=tp.reduce((e,n)=>n.amount>e.amount?n:e,tp[0]),n={};for(let e of tp){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?O.familyMembers.find(e=>e.id===i[0]):void 0,a=t?.name??r("finance.member.shared"),o=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of tp){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=tp.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:a,topMemberAmt:o,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[tp,O.familyMembers,r]);return(0,t.jsxs)(c.PE,{title:r("finance.appTitle"),sidebar:tZ,topBarRight:e,activeId:nU,children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(H,{children:(0,t.jsx)(b.jb,{data:O,activeMemberId:nU,onSelectMember:nW,t:r,locale:i})}),(0,t.jsxs)(K,{children:[(0,t.jsx)(W,{children:(0,t.jsx)("div",{role:"tablist","aria-label":r("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:r("finance.tab.overview"),expenses:r("finance.tab.expenses"),insights:r("finance.tab.insights")},i={overview:0,expenses:tp.length,insights:ta.length}[e];return(0,t.jsxs)(Z,{type:"button",role:"tab","aria-selected":nO===e,active:nO===e,onClick:()=>nN(e),children:[n[e],i>0&&(0,t.jsxs)(q,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(u.ms,{align:"right",trigger:(0,t.jsx)(u.$n,{variant:ii>0?"accent":"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"filter",size:13,"aria-hidden":!0}),children:ii>0?r("finance.filters.activeCount",{n:ii}):r("finance.actions.filters")}),children:[(0,t.jsx)(u.o_,{children:r("finance.filters.member")}),["shared",...O.familyMembers.map(e=>e.id)].map(e=>{let n="shared"===e?r("finance.hero.family"):O.familyMembers.find(n=>n.id===e)?.name??e,i=e===nU;return(0,t.jsx)(u.tJ,{onClick:()=>nW(e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i&&(0,t.jsx)(u.In,{name:"check",size:12}),!i&&(0,t.jsx)("span",{style:{width:12}}),n]})},e)}),(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.o_,{children:r("finance.filters.category")}),(0,t.jsx)(u.tJ,{onClick:()=>nJ([]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[0===nq.length&&(0,t.jsx)(u.In,{name:"check",size:12}),nq.length>0&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.allCategories")]})}),d.DEFAULT_CATEGORIES.map(e=>{let n=nq.includes(e.id);return(0,t.jsx)(u.tJ,{onClick:()=>nJ(i=>n?i.filter(n=>n!==e.id):[...i,e.id]),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n&&(0,t.jsx)(u.In,{name:"check",size:12}),!n&&(0,t.jsx)("span",{style:{width:12}}),(0,t.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),"pt"===i?e.labelPt:e.labelEn]})},e.id)}),(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.tJ,{onClick:()=>nX(e=>!e),children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:6},children:[nG&&(0,t.jsx)(u.In,{name:"check",size:12}),!nG&&(0,t.jsx)("span",{style:{width:12}}),r("finance.filters.reimbursableOnly")]})}),ii>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.rx,{}),(0,t.jsx)(u.tJ,{onClick:()=>{nJ([]),nX(!1)},children:r("finance.filters.reset")})]})]}),(0,t.jsx)(u.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>nV(!0),children:r("finance.actions.categories")}),"expenses"===nO&&(0,t.jsx)(u.$n,{variant:it.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{it.selectMode?it.exitSelectMode():it.enterSelectMode()},children:r("finance.bulk.select")}),(0,t.jsx)(u.K0,{onClick:()=>nZ(!0),title:r("finance.actions.settings"),"aria-label":r("finance.actions.settings"),active:n_,children:(0,t.jsx)(u.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(U,{children:(0,t.jsx)(u.K0,{onClick:()=>id(e=>!e),title:r("finance.shortcuts.title"),"aria-label":r("finance.shortcuts.title"),active:ic,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(G,{"aria-label":r("finance.range.label"),children:tH.map(({value:e,label:n})=>(0,t.jsx)(J,{type:"button",active:ir===e,onClick:()=>{ia(e),"month"===e&&nH(i9)},"aria-pressed":ir===e,children:n},e))}),"month"===ir&&O.expenses.length>0&&(0,t.jsx)(k.f,{data:O,selectedMonth:nY,onSelectMonth:nH,locale:i,t:r}),(0,t.jsxs)(el,{children:["overview"===nO&&(0,t.jsxs)(ec,{children:[(0,t.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,t.jsxs)(V,{ref:io,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:r("finance.quickAdd.title")}),(0,t.jsxs)(e7,{visible:iw&&!iR.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",r("finance.quickAdd.added")]}),iR.listening&&(0,t.jsxs)(nn,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(ni,{}),r("finance.voice.listening")]}),(0,t.jsxs)(u.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>i_(!0),children:["+ ",r("finance.quickAdd.addIncome")]}),(0,t.jsxs)(u.$n,{variant:"ghost",size:"sm",type:"button",onClick:()=>iq(!0),children:["⚖ ",r("finance.balance.button")]})]}),(0,t.jsxs)("form",{onSubmit:tR,"aria-label":r("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(e2,{children:[{id:"shared",name:r("finance.member.shared"),role:"shared",color:void 0},...O.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(O.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(e6,{type:"button",active:ig===e.id,color:i,onClick:()=>ih(e.id),children:[(0,t.jsx)(u.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(e3,{children:[(0,t.jsxs)(np,{children:[(0,t.jsx)(e8,{ref:is,type:"text",placeholder:r("finance.quickAdd.placeholder"),value:ip,onChange:e=>{im(e.target.value),ix(""),iL(N.length>0),iB(-1)},onFocus:()=>{N.length>0&&!ip.trim()&&iL(!0)},onBlur:()=>{setTimeout(()=>iL(!1),150)},onKeyDown:e=>{if(iE&&0!==N.length)if("ArrowDown"===e.key)e.preventDefault(),iB(e=>Math.min(e+1,N.length-1));else if("ArrowUp"===e.key)e.preventDefault(),iB(e=>Math.max(e-1,-1));else if("Enter"===e.key&&iA>=0){e.preventDefault();let n=N[iA];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(ip);im(e?ip.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),ix(""),iL(!1),iB(-1)}}else"Escape"===e.key&&(iL(!1),iB(-1))},"aria-label":r("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":iE&&N.length>0,autoComplete:"off",inputMode:"decimal"}),iE&&N.length>0&&(0,t.jsxs)(nm,{ref:iP,role:"listbox","aria-label":r("finance.merchant.recent"),children:[(0,t.jsx)(nf,{role:"presentation",children:r("finance.merchant.recent")}),N.map((e,n)=>(0,t.jsxs)(nu,{role:"option","aria-selected":iA===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(ip);im(i?ip.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),ix(""),iL(!1),iB(-1),is.current?.focus()},children:[(0,t.jsx)(nx,{children:e.merchant}),(0,t.jsxs)(ng,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsx)(e5,{value:iu||tT,onChange:e=>{let n=e.target.value,i=iu||tT;ix(n);let t=(0,d.parseQuickInput)(ip,O.familyMembers);t?.description&&iy((0,d.proposeRuleFromOverride)(i,n,t.description))},"aria-label":r("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(e5,{value:iM,onChange:e=>{iT(e.target.value),iC(!1)},"aria-label":r("finance.currency.label"),style:{maxWidth:72},children:d.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!ip.trim()||iF,children:iF?r("finance.currency.converting"):r("finance.quickAdd.add")}),iR.supported&&(0,t.jsx)(nd,{type:"button","aria-label":r("finance.voice.listening"),"aria-pressed":iR.listening,active:iR.listening,onPointerDown:()=>{iD.current=window.setTimeout(()=>{iD.current=null,iI.current=!0,(0,m.K)(30),iR.listening?iR.stop():iR.start(tD)},500)},onPointerUp:()=>{null!==iD.current&&(clearTimeout(iD.current),iD.current=null,iI.current||((0,m.K)(10),iR.listening?iR.stop():iR.start(tD))),iI.current=!1},onPointerCancel:()=>{null!==iD.current&&(clearTimeout(iD.current),iD.current=null),iI.current=!1},children:(0,t.jsx)(u.In,{name:"mic",size:16})})]}),(0,t.jsx)(v.J,{expenses:O.expenses,storedOrder:iY,lockedCategoryId:iO,onToggle:e=>iN(n=>n===e?"":e),locale:i,groupLabel:r("finance.quickAdd.frequentCategories")}),ib&&(0,t.jsxs)(nt,{children:[(0,t.jsxs)("span",{children:[r("finance.categoryRules.alwaysCategorize",{match:ib.match})," ",(0,t.jsx)("strong",{children:(n=d.DEFAULT_CATEGORIES.find(e=>e.id===ib.categoryId))?(0,d.categoryLabel)(n,i):ib.categoryId}),"?"]}),(0,t.jsx)(nr,{type:"button",accent:!0,onClick:()=>{O&&ib&&(nB({...O,categoryRules:[ib,...O.categoryRules??[]]},"finance.undo.label.added"),iy(null))},children:r("finance.categoryRules.propose")}),(0,t.jsx)(nr,{type:"button",onClick:()=>iy(null),children:r("finance.categoryRules.dismiss")})]}),iS&&(0,t.jsx)(e9,{style:{color:P},role:"alert",children:r("finance.currency.fxFailed")}),tC&&(0,d.parseQuickInput)(ip,O.familyMembers)&&(0,t.jsxs)(na,{type:"button",onClick:tF,"aria-label":r("finance.recurring.makeRecurring"),children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsx)(e9,{children:r("finance.quickAdd.hint")})]})]})}),(0,t.jsx)(ed,{span:12,style:{borderLeft:`2px solid ${B}`},children:(0,t.jsxs)(ex,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eg,{children:[(0,t.jsxs)(ef,{children:[r("finance.hero.spentIn")," ",t_," \xb7 ",tf]}),(0,t.jsxs)(eh,{children:[(0,t.jsx)(eb,{children:"€"}),(0,t.jsx)(ey,{children:tU}),(0,t.jsx)(ew,{children:tK})]}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(x.Ru,{value:tg,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[r("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(tu,i)," \xb7 €",n2(tx)]})]}),tb.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:tb,accent:th,width:280,height:34})}),null!==tW&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:tW.onTrack===tW.total?"#7fb77e":c.w4.colors.mainTextMuted},children:r("finance.goals.hero",{on:tW.onTrack,total:tW.total})})]}),(0,t.jsx)(e$,{children:(0,t.jsxs)(ev,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eM,{children:r("finance.budget.weekly")}),(0,t.jsxs)(eT,{children:["€",n2(tr.spent)," ",(0,t.jsxs)(eS,{children:["/ €",tr.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:tk,over:tk>100?tk-100:0}),(0,t.jsxs)(eC,{children:[(0,t.jsxs)("span",{children:[Math.round(tk),"% ",r("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:tr.remaining<0?P:B},children:tr.remaining>0?`€${n2(tr.remaining)} ${r("finance.budget.remaining")}`:`€${n2(Math.abs(tr.remaining))} ${r("finance.budget.over")}`})]}),(0,t.jsxs)(ek,{style:{marginTop:14},children:[(0,t.jsx)(eM,{children:r("finance.budget.monthly")}),(0,t.jsxs)(eT,{children:["€",n2(tm)," ",(0,t.jsxs)(eS,{children:["/ €",O.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:tM,over:tM>100?tM-100:0}),(0,t.jsxs)(eC,{children:[(0,t.jsxs)("span",{children:[Math.round(tM),"% ",r("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[r("finance.budget.projected")," €",n2(tm+(tr.projectedTotal-tr.spent))]})]})]})})]})}),(0,t.jsxs)(ed,{span:8,spanMd:12,children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:r("finance.charts.sixMonths")}),(0,t.jsx)(eu,{children:(0,t.jsx)(nE,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nL,{children:[(0,t.jsx)(nA,{color:e.color}),(0,d.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:ty,budget:O.budget.monthlyBudget,height:200}),(0,t.jsxs)(nh,{children:[(0,t.jsxs)(nb,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(ny,{children:["€",n2(tG)]})]}),(0,t.jsxs)(nb,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(ny,{children:["€",n2(tX)]})]}),(0,t.jsxs)(nb,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthsOverBudget")}),(0,t.jsxs)(ny,{children:[tQ," / ",ty.length]})]}),(0,t.jsxs)(nb,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(ny,{style:{color:tg>0?P:B},children:[tg>0?"+":"",tg,"%"]})]})]})]}),(0,t.jsxs)(ed,{span:4,spanMd:6,children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:r("finance.charts.byCategory")}),(0,t.jsx)(nR,{type:"button",onClick:()=>nN("insights"),children:r("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:tq,total:tJ,size:110,centerLabel:t_.slice(0,3),centerValue:`€${n2(tJ)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:tq.map(e=>{let n=n8(e.id),r=(0,d.expensesForMember)((0,d.expensesForMonth)(O.expenses,tu),nU).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eF,{children:[(0,t.jsx)(ez,{color:e.color}),(0,t.jsx)(eR,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eD,{children:["€",n2(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(x.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(ed,{span:5,spanMd:6,children:[(0,t.jsxs)(ep,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,t.jsx)(em,{children:r("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.forecast.sub",{n:i8})})]}),(0,t.jsx)("div",{style:{display:"flex",gap:4,flexShrink:0},children:[3,6,12].map(e=>(0,t.jsx)(J,{type:"button",active:i8===e,onClick:()=>i7(e),"aria-pressed":i8===e,children:r(3===e?"finance.forecast.range.3m":6===e?"finance.forecast.range.6m":"finance.forecast.range.1y")},e))})]}),(0,t.jsx)(D.b,{forecast:tw,firstNegDate:tj,t:r,locale:i,height:170})]}),(0,t.jsxs)(ed,{span:4,spanMd:6,children:[(0,t.jsx)(ep,{children:(0,t.jsx)(em,{children:r("finance.charts.heatmap")})}),(0,t.jsx)(x.RT,{data:t$,locale:i}),(0,t.jsxs)(nw,{children:[(0,t.jsx)("span",{children:r("finance.charts.less")}),(0,t.jsx)(nj,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:r("finance.charts.more")})]})]}),(0,t.jsxs)(ed,{span:12,children:[(0,t.jsx)(ee,{children:(0,t.jsx)(u.YZ,{children:r("finance.heatmap.title")})}),(0,t.jsx)(y.D,{matrix:tv,locale:i,t:r})]}),(0,t.jsxs)(ed,{span:3,spanMd:6,children:[(0,t.jsx)(ep,{children:(0,t.jsx)(em,{children:r("finance.charts.thisWeek")})}),(0,t.jsxs)(n$,{children:[(0,t.jsxs)(nv,{children:[(0,t.jsxs)(nk,{children:["€",n2(tr.spent)]}),(0,t.jsxs)(eS,{children:["/ €",tr.budget]})]}),(0,t.jsx)(x.kl,{spent:tr.spent,budget:tr.budget}),(0,t.jsxs)(nM,{children:[(0,t.jsx)("span",{children:r("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:r("finance.charts.actual")})]})]})]}),(0,t.jsxs)(ed,{span:9,spanMd:12,children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(u.YZ,{children:r("finance.recent.title")}),tp.length>8&&(0,t.jsx)(nR,{type:"button",onClick:()=>nN("expenses"),children:r("finance.recent.viewAll",{n:tp.length})})]}),0===tp.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:r("finance.dashboard.noRecent")}):(0,t.jsx)(eN,{"aria-label":r("finance.recent.title"),children:tp.slice(0,8).map(e=>(0,t.jsx)(ie,{exp:e,finData:O,locale:i,t:r,onDelete:tI,onClone:tE,onToggleReimbursed:tA,compact:"compact"===i6},e.id))})]})]}),"expenses"===nO&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nD,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(u.YZ,{children:r("finance.tx.title")}),"month"===ir&&0===O.expenses.length&&(0,t.jsx)(nz,{ref:il,value:nY,onChange:e=>nH(e.target.value),"aria-label":r("finance.insights.month"),children:tl.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),0===tp.length&&0===td.length?(0,t.jsx)(ed,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.tx.empty")})}):(0,t.jsx)(ed,{span:12,children:(0,t.jsx)(eN,{"aria-label":r("finance.tx.title"),children:[...tp.map(e=>({...e,_kind:"expense"})),...td.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ie,{exp:e,finData:O,locale:i,t:r,onDelete:tI,onClone:tE,onToggleReimbursed:tA,compact:"compact"===i6,selectMode:it.selectMode,selected:it.selectedIds.has(e.id),onToggleSelect:it.toggleId,longPressHandlers:it.longPressHandlers,onEnterSelectMode:it.enterSelectMode},e.id):(0,t.jsxs)(eY,{compact:"compact"===i6,children:["compact"===i6?(0,t.jsx)(eH,{color:B,"aria-hidden":!0}):(0,t.jsx)(eU,{color:B,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eW,{children:e.source}),"compact"!==i6&&(0,t.jsxs)(e_,{children:[n3(e.date,i)," \xb7 ",r("finance.dashboard.income")]})]}),(0,t.jsxs)(eZ,{children:[(0,t.jsxs)(eq,{style:{color:B},children:["+€",n4(e.amount)]}),(0,t.jsx)(eQ,{className:"delete-btn",type:"button",onClick:()=>tL(e.id),"aria-label":`${r("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nO&&(0,t.jsxs)(es,{children:[(0,t.jsxs)(nD,{style:{marginBottom:0},children:[(0,t.jsx)(u.YZ,{children:r("finance.insights.title")}),"month"===ir&&0===O.expenses.length&&(0,t.jsx)(nz,{value:nY,onChange:e=>nH(e.target.value),"aria-label":r("finance.insights.month"),children:tl.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),null!==tV&&(0,t.jsxs)(ei,{children:[(0,t.jsxs)(et,{children:[(0,t.jsx)(er,{children:r("finance.kpi.biggestExpense")}),(0,t.jsxs)(ea,{children:["€",tV.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eo,{children:tV.biggest.description?`${tV.biggest.description} \xb7 ${(0,d.categoryLabel)(n8(tV.biggest.categoryId),i)}`:(0,d.categoryLabel)(n8(tV.biggest.categoryId),i)})]}),(0,t.jsxs)(et,{children:[(0,t.jsx)(er,{children:r("finance.kpi.topSpender")}),(0,t.jsxs)(ea,{children:["€",tV.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eo,{children:tV.topMemberLabel})]}),(0,t.jsxs)(et,{children:[(0,t.jsx)(er,{children:r("finance.kpi.busiestDay")}),(0,t.jsxs)(ea,{children:["€",tV.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eo,{children:r(`finance.weekday.${tV.busiestDowKey}`)})]}),(0,t.jsxs)(et,{children:[(0,t.jsx)(er,{children:r("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(ea,{children:["€",tV.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eo,{children:0===tV.reimbursableTotal?"—":r("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsx)(u.dO,{items:te.map(e=>({...e})),onReorder:ti,onCycleSize:tt,accentColor:()=>B,labels:{moveLeft:r("finance.insights.panel.moveLeft"),moveRight:r("finance.insights.panel.moveRight"),cycleSize:r("finance.insights.panel.cycleSize")},renderPanel:e=>{switch(e.id){case"analytics-trend":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:ty,budget:O.budget.monthlyBudget,height:180}),(0,t.jsxs)(nh,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(nb,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(ny,{children:["€",n2(tG)]})]}),(0,t.jsxs)(nb,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(ny,{children:["€",n2(tX)]})]}),(0,t.jsxs)(nb,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(ny,{style:{color:tg>0?P:B},children:[tg>0?"+":"",tg,"%"]})]})]})]});case"analytics-donut":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.byCategory")}),0===tq.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,fontFamily:c.w4.typography.fontFamilyMono,letterSpacing:"0.06em",padding:`${c.w4.spacing.lg} 0`,textAlign:"center"},children:r("finance.insights.empty")}):(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:tq,total:tJ,size:110,centerLabel:t_.slice(0,3),centerValue:`€${n2(tJ)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:tq.map(e=>{let n=n8(e.id),r=e.color||c.w4.colors.mainTextMuted,a=(0,d.expensesForMember)((0,d.expensesForMonth)(O.expenses,tu),nU).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(eF,{children:[(0,t.jsx)(ez,{color:r}),(0,t.jsx)(eR,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eD,{children:["€",n2(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]});case"analytics-insights":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.title")}),0===ta.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:ta.map((e,n)=>(0,t.jsxs)(eV,{itype:e.type,children:[(0,t.jsx)(e0,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:r(e.messageKey,e.params)}),e.memberId&&(()=>{let n=O.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=O.familyMembers.indexOf(n);return(0,t.jsxs)(e1,{children:[(0,t.jsx)(u.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]});case"analytics-anomalies":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.anomalies")}),0===to.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:to.map(e=>(0,t.jsxs)(eV,{itype:e.type,children:[(0,t.jsx)(e0,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:r(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(e4,{type:"button",title:r("finance.insights.anomalies.dismiss"),"aria-label":r("finance.insights.anomalies.dismiss"),onClick:()=>{ts(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]});case"analytics-budgets":return(0,t.jsx)(I.z,{});case"analytics-bills":return(0,t.jsx)(F.J,{});case"analytics-subscriptions":return(0,t.jsx)(S.n,{});case"analytics-goals":return(0,t.jsx)(C.f,{});case"analytics-recurring":return(0,t.jsx)(z.b,{});case"analytics-rules":return(0,t.jsx)(E.K,{});case"analytics-networth":return(0,t.jsx)(R.S,{});default:return null}}})]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),iU&&(0,t.jsx)(n9,{finData:O,activeMemberId:nU,locale:i,t:r,onClose:()=>iK(!1),onSubmit:iX}),iW&&(0,t.jsx)(n7,{finData:O,locale:i,t:r,onClose:()=>i_(!1),onSubmit:iG}),iZ&&(0,t.jsx)(n5,{finData:O,t:r,onClose:()=>iq(!1),onSubmit:iJ}),(0,t.jsx)(w.S,{labelKey:eX,onUndo:()=>{nP()},onDismiss:()=>ne(null),t:r}),it.selectMode&&"expenses"===nO&&(0,t.jsx)(M.S,{selectionCount:it.selectedIds.size,visibleIds:tp.map(e=>e.id),selectedIds:it.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:i,t:r,onCancel:it.exitSelectMode,onSelectAll:()=>it.selectAll(tp.map(e=>e.id)),onCategorise:tO,onDelete:tP,onMarkReimbursed:tN}),ic&&(0,t.jsx)(j.m,{t:r,onClose:()=>id(!1)}),(0,t.jsx)(A.X,{open:n_,onClose:()=>nZ(!1),ariaLabel:r("finance.actions.settings"),maxWidth:480,children:(0,t.jsxs)(X,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(u.YZ,{children:r("finance.settings.title")}),(0,t.jsx)(u.K0,{onClick:()=>nZ(!1),title:r("finance.actions.settings"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"drawer-weekly-budget",children:r("finance.settings.weeklyBudget")}),(0,t.jsx)(nC,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(O.budget.weeklyBudget),value:iQ,onChange:e=>iV(e.target.value)})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{htmlFor:"drawer-monthly-budget",children:r("finance.settings.monthlyBudget")}),(0,t.jsx)(nC,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(O.budget.monthlyBudget),value:i0,onChange:e=>i1(e.target.value)})]}),(0,t.jsx)(u.$n,{variant:"primary",onClick:()=>{tB(),nZ(!1)},style:{height:44},children:i4?r("finance.settings.saved"):r("finance.settings.save")})]})]})}),(0,t.jsx)(A.X,{open:nQ,onClose:()=>{nV(!1),n1(null)},ariaLabel:r("finance.categories.title"),maxWidth:520,children:(0,t.jsxs)(X,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(u.YZ,{children:r("finance.categories.title")}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[!n0&&(0,t.jsx)(u.$n,{variant:"ghost",style:{height:28},onClick:()=>n1({labelEn:"",labelPt:"",icon:"coins",color:"#6b7280"}),children:r("finance.categories.new")}),(0,t.jsx)(u.K0,{onClick:()=>{nV(!1),n1(null)},title:r("finance.categories.cancel"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]})]}),n0&&(0,t.jsxs)("div",{style:{background:c.w4.colors.mainBg,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.md,padding:c.w4.spacing.md,display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{children:r("finance.categories.labelEn")}),(0,t.jsx)(nF,{value:n0.labelEn,onChange:e=>n1(n=>n&&{...n,labelEn:e.target.value}),placeholder:"e.g. Groceries"})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{children:r("finance.categories.labelPt")}),(0,t.jsx)(nF,{value:n0.labelPt,onChange:e=>n1(n=>n&&{...n,labelPt:e.target.value}),placeholder:"ex. Mercearia"})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{children:r("finance.categories.iconLabel")}),(0,t.jsx)("select",{value:n0.icon,onChange:e=>n1(n=>n&&{...n,icon:e.target.value}),style:{background:c.w4.colors.surface,border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"4px 8px",fontSize:13},children:u.RN.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(nT,{children:[(0,t.jsx)(nS,{children:r("finance.categories.colorLabel")}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("input",{type:"color",value:n0.color,onChange:e=>n1(n=>n&&{...n,color:e.target.value}),style:{width:36,height:28,border:"none",background:"none",cursor:"pointer"}}),(0,t.jsx)(nF,{value:n0.color,onChange:e=>n1(n=>n&&{...n,color:e.target.value}),placeholder:"#6b7280",style:{width:100}})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",style:{height:28},onClick:()=>n1(null),children:r("finance.categories.cancel")}),(0,t.jsx)(u.$n,{variant:"accent",style:{height:28},onClick:()=>{if(!n0.labelEn||!n0.labelPt)return;let e={id:(0,f.z)(),labelEn:n0.labelEn,labelPt:n0.labelPt,icon:n0.icon,color:n0.color,isCustom:!0},n=O.categories??[];nB({...O,categories:[...n,e]},"finance.undo.label.added"),n1(null)},children:r("finance.categories.save")})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,u.n6)(e.icon)?(0,t.jsx)(u.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:"pt"===i?e.labelPt:e.labelEn}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,letterSpacing:"0.08em"},children:r("finance.categories.builtIn")})]},e.id)),(O.categories??[]).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm,padding:"6px 8px",borderRadius:c.w4.borderRadius.sm,background:c.w4.colors.mainBg},children:[(0,t.jsx)("span",{style:{width:10,height:10,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,u.n6)(e.icon)?(0,t.jsx)(u.In,{name:e.icon,size:14,color:e.color}):(0,t.jsx)("span",{style:{fontSize:14},children:e.icon}),(0,t.jsx)("span",{style:{fontSize:13,flex:1},children:"pt"===i?e.labelPt:e.labelEn}),(0,t.jsx)(u.K0,{title:r("finance.categories.delete"),tone:"danger",onClick:()=>{let n=(O.categories??[]).filter(n=>n.id!==e.id);nB({...O,categories:n},"finance.undo.label.deleted")},children:(0,t.jsx)(u.In,{name:"trash",size:13})})]},e.id))]})]})}),(0,t.jsx)(A.X,{open:null!==iv,onClose:()=>ik(null),ariaLabel:r("finance.recurring.makeRecurring"),maxWidth:360,children:iv&&(0,t.jsxs)(no,{children:[(0,t.jsxs)(u.YZ,{children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(ns,{children:r("finance.recurring.frequency")}),(0,t.jsx)(nl,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(nc,{type:"button",active:iv.cadence===e,onClick:()=>ik(n=>n?{...n,cadence:e}:null),children:r(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(ns,{children:r("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:iv.firstDue,onChange:e=>ik(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",onClick:()=>ik(null),children:r("finance.recurring.cancel")}),(0,t.jsx)(u.$n,{variant:"primary",onClick:tz,disabled:!iv.firstDue,children:r("finance.recurring.confirm")})]})]})})]})},{}))}}]);