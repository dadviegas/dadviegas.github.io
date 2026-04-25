"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{default:()=>n9});var t=i(5723),r=i(7991),o=i(6859),a=i.n(o),s=i(2799),l=i(9874),c=i(6455),d=i(3759),p=i(789),m=i(8395),u=i(1496),x=i(8170),g=i(4041),f=i(948),h=i(719),b=i(2405),w=i(9546),y=i(5854),$=i(3616),j=i(6579),v=i(8989),k=i(6376),M=i(9146),T=i(7737),S=i(8635),F=i(8501),C=i(1789),z=i(216),D=i(9419),R=i(341),I=i(9378),E=i(545);let A="#7fb77e",L="#f85149",B=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,P=l.w4.suites.lab,O=a().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${B} 0.25s ease both;
  overflow: hidden;
`,Y=a().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,H=a().div`
  display: none;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,K=a().div`
  padding: 0 ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,U=a().div`
  flex: 1;
  min-width: 0;
`,Z=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,_=a().button`
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
`,q=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,N=a().button`
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
`,W=a().div`
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
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${l.w4.zIndex.modal};
  animation: ${B} 0.18s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
    padding: ${l.w4.spacing.lg};
  }
`,J=a().div`
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
  animation: ${B} 0.2s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
  }
`,Q=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,V=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${A};
  padding: ${l.w4.spacing.lg};
`;let X=a().div`
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
`;let ee=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,en=a().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ei=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,et=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,er=a().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
`,eo=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ea=a().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 60fr 40fr;
  }
`,es=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  min-width: 0;
`,el=a().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`,ec=a().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,ed=a().div`
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
`,ep=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,em=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,eu=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,ex=a().div`
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
`,eg=a().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ef=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,eh=a().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,eb=a().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,ew=a().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,ey=a().span`
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
`,ej=a().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,ev=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ek=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,eM=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,eT=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eS=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eF=a().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eC=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,ez=a().span`
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
`,eR=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eI="finance:list-density",eE="finance:quick-categories",eA=a().input`
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
`,eL=a().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eB=a().li`
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
    &:hover .delete-btn { opacity: 1; }
  }
`,eP=a().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eO=a().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eY=a().div`
  flex: 1;
  min-width: 0;
`,eH=a().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eK=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,eU=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,eZ=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e_=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${A}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?A:"#facc15"};
  white-space: nowrap;
`,eq=a().button`
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
`,eN=a().button`
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
    color: ${L};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,eW=a().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${A}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${A}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,eG=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?L:"warning"===e?"#facc15":"success"===e?A:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,eJ=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,eQ=a().button`
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
`;a()(ed)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let eV=a().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,eX=a().button`
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
`,e0=a().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,e4=a().input`
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
`,e1=a().select`
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
`,e2=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${A};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,e6=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,e3=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,e8=a().div`
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
`,e5=a().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${A};
  animation: ${e3} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,e7=a().div`
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
  animation: ${B} 0.2s ease both;

  strong {
    color: ${l.w4.colors.mainText};
    font-weight: 600;
  }
`,e9=a().button`
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
`,ne=a().button`
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
`,nn=a().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: ${l.w4.spacing.md};
`,ni=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${B} 0.2s ease;
`,nt=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,nr=a().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,no=a().button`
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
`,na=a().button`
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
`,ns=a().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nl=a().ul`
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
`,nc=a().li`
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
`,nd=a().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,np=a().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nm=a().li`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${l.w4.spacing.sm} 2px;
  pointer-events: none;
`,nu=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,nx=a().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ng=a().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,nf=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nh=a().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nb=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,nw=a().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,ny=a().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,n$=a().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${A}; }
`,nj=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nv=a().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,nk=a().input`
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
`,nM=a().select`
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
`,nT=a().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,nS=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,nF=a().div`
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
`,nC=a().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,nz=a().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,nD=a().div`
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
`,nR=a().button`
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
`,nI=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,nE=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,nA=a().footer`
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
`,nL=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,nB=a().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,nP=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nO=a().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: ${l.w4.spacing.md};
  padding-bottom: max(${l.w4.spacing.md}, env(safe-area-inset-bottom));
  z-index: 1000;
  animation: ${B} 0.15s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
  }
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
`,nH=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nK=a().button`
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
`,nU=a().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nZ=a().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,n_=a().button`
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
`,nq=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,nN=a().button`
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
`,nW=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nG=a().input`
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
`,nJ=a().select`
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
`,nV=a().input`
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
`,nX=a().div`
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
`,n0=a().ul`
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
`,n4=a().li`
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,n1=a().div`
  position: relative;
`,n2=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function n6(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function n3(e){return Math.round(e).toLocaleString("pt-PT")}function n8(){return new Date().toISOString().slice(0,10)}function n5(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function n7(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function n9({topBarRight:e}){let n,[i]=(0,x.Ym)(),o=(0,r.useMemo)(()=>(0,x.Nx)(i,f.A),[i]),{data:a,loaded:s,save:B}=(0,c.useFinance)(),P=a??{...c.EMPTY_FINANCE_DATA},eA=(0,r.useMemo)(()=>(0,c.recentMerchants)(P.expenses,20).slice(0,6),[P.expenses]),{canUndo:e_,latestLabelKey:eq,undo:e3}=(0,c.useUndo)(),[nT,nS]=(0,r.useState)(null),nF=(0,r.useCallback)(async(e,n)=>{(0,c.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:P,labelKey:n,ts:Date.now()}),nS(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,p.K)(10),await B(e)},[P,B]),nC=(0,r.useCallback)(async()=>{let e=e3();e&&(nS("finance.undo.label.reverted"),await B(e),setTimeout(()=>nS(null),2500))},[e3,B]),[nz,nD]=(0,r.useState)("overview"),[nO,nY]=(0,r.useState)(()=>(0,c.thisMonthKey)()),[nH,nK]=(0,r.useState)("shared"),[nU,nZ]=(0,r.useState)(!1),n_=(0,M.E)();(0,r.useEffect)(()=>{"expenses"!==nz&&n_.selectMode&&n_.exitSelectMode()},[nz]);let{range:nq,setRange:nN}=(0,d.H)("month"),nW=(0,r.useRef)(null),nG=(0,r.useRef)(null),nJ=(0,r.useRef)(null),[nQ,nV]=(0,r.useState)(!1),[nX,n0]=(0,r.useState)(""),[n4,n1]=(0,r.useState)(""),[n2,ir]=(0,r.useState)("shared"),[io,ia]=(0,r.useState)(null),[is,il]=(0,r.useState)(!1),ic=(0,r.useRef)(null),[id,ip]=(0,r.useState)(null),[im,iu]=(0,r.useState)("EUR"),[ix,ig]=(0,r.useState)(!1),[ih,ib]=(0,r.useState)(!1),iw=(0,E.x)(),iy=(0,r.useRef)(null),i$=(0,r.useRef)(!1),[ij,iv]=(0,r.useState)(!1),[ik,iM]=(0,r.useState)(-1),iT=(0,r.useRef)(null),[iS,iF]=(0,r.useState)(""),[iC,iz]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,l.PL)(eE).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&iz(n)}catch{}})},[]);let[iD,iR]=(0,r.useState)(!1),iI=(0,r.useCallback)((e,n,i,t)=>{let r=i?[i,...P.recentDescriptions].filter(Boolean).slice(0,20):P.recentDescriptions,o={...P,expenses:[...e,...P.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)o=(0,c.addRecentTag)(o,e);nF(o,"finance.undo.label.added"),iR(!1),ic.current&&clearTimeout(ic.current),il(!0),ic.current=setTimeout(()=>il(!1),2e3)},[P,nF]),[iE,iA]=(0,r.useState)(""),[iL,iB]=(0,r.useState)(""),[iP,iO]=(0,r.useState)(!1),[iY,iH]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,l.PL)(eI).then(e=>{("compact"===e||"comfortable"===e)&&iH(e)})},[]),(0,r.useCallback)(()=>{let e="comfortable"===iY?"compact":"comfortable";iH(e),(0,l.Is)(eI,e)},[iY]);let iK=(0,r.useMemo)(()=>(0,c.thisMonthKey)(),[]),iU=(0,r.useMemo)(()=>(0,c.computeWeeklyStatus)(P),[P]);(0,r.useMemo)(()=>(0,c.computeMonthlySummary)(P,nO),[P,nO]);let iZ=(0,r.useMemo)(()=>(0,c.generateInsightsWithMembers)(P),[P]),{insights:i_,dismiss:iq}=(0,c.useFinanceAnomalies)(),iN=(0,r.useMemo)(()=>(0,c.availableMonths)(P),[P]),iW=(0,r.useMemo)(()=>(0,c.filterExpensesByRange)(P.expenses,nq,nO),[P.expenses,nq,nO]),iG=(0,r.useMemo)(()=>(0,c.filterIncomeByRange)(P.income,nq,nO),[P.income,nq,nO]),iJ=(0,r.useMemo)(()=>(0,c.expensesForMember)(iW,nH),[iW,nH]),iQ=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(P,nH,iK),[P,nH,iK]),iV=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(iK),[iK]),iX=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(P,nH,iV),[P,nH,iV]),i0=(0,r.useMemo)(()=>0===iX?0:Math.round((iQ-iX)/iX*100),[iQ,iX]),i4=(0,r.useMemo)(()=>{if("all"===nH)return o("finance.member.all");if("shared"===nH)return o("finance.hero.family");let e=P.familyMembers.find(e=>e.id===nH);return e?.name??o("finance.hero.family")},[nH,P.familyMembers,o]),i1=(0,r.useMemo)(()=>{if("all"===nH||"shared"===nH)return l.w4.colors.mainTextMuted;let e=P.familyMembers.findIndex(e=>e.id===nH);return -1===e?A:(0,h.a8)(P.familyMembers[e],e)},[nH,P.familyMembers]),i2=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,c.expensesForMember)(P.expenses,nH).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[P.expenses,nH]),i6=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,c.expensesForMonth)(e.expenses,i),o=(0,c.expensesForMember)(t,n),a={};for(let e of o)a[e.categoryId]=(a[e.categoryId]??0)+e.amount;let s=Object.values(a).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(a).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:n7(e).color})),over:s>r?s-r:0}})})(P,nH),[P,nH]);(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let o=new Date(i);o.setDate(i.getDate()-r);let a=o.toISOString().slice(0,10),s=a.slice(0,7),l=(0,c.expensesForMember)(e.expenses.filter(e=>e.date===a),n).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:d,exp:l})}return t})(P,nH),[P,nH]);let i3=(0,r.useMemo)(()=>(0,c.forecastCashFlow)(P,3),[P]),i8=(0,r.useMemo)(()=>(0,c.firstNegativeDay)(i3),[i3]),i5=(0,r.useMemo)(()=>{let e,n;return e=new Date,n=P.expenses.length>0?P.expenses.reduce((e,n)=>e+n.amount,0)/P.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let o=r.toISOString().slice(0,10),a=(0,c.expensesForMember)(P.expenses.filter(e=>e.date===o),nH).reduce((e,n)=>e+n.amount,0);if(0===a)return 0;let s=a/n;return s<.5?1:s<1?2:s<2?3:4})},[P,nH]),i7=(0,r.useMemo)(()=>(0,c.dayHourSpendMatrix)((0,c.expensesForMember)(P.expenses,nH)),[P.expenses,nH]),i9=iU.budget>0?iU.spent/iU.budget*100:0,te=P.budget.monthlyBudget>0?iQ/P.budget.monthlyBudget*100:0,tn=(0,r.useMemo)(()=>{let e=(0,c.parseQuickInput)(nX,P.familyMembers);return e?.description?(0,c.guessCategoryWithRules)(P,e.description):"other"},[nX,P]),ti=n4||iS||tn,tt=(0,r.useMemo)(()=>(0,c.parseRecurringHint)(nX),[nX]);(0,r.useEffect)(()=>{let e=(0,c.parseQuickInput)(nX,P.familyMembers);e?.memberId&&ir(e.memberId)},[nX,P.familyMembers]);let tr=(0,r.useCallback)(()=>{let e=(0,c.parseQuickInput)(nX,P.familyMembers),n=(0,c.parseRecurringHint)(nX);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),o=String(i.getDate()).padStart(2,"0");ip({amount:e.amount,description:e.description||(ti??"other"),categoryId:ti||"other",cadence:n.cadence,firstDue:`${t}-${r}-${o}`})},[nX,P.familyMembers,ti]),to=(0,r.useCallback)(()=>{if(!id)return;let e=new Date(id.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:id.description,amount:id.amount,categoryId:id.categoryId,cadence:id.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==n2?n2:void 0};nF({...P,recurringRules:[...P.recurringRules??[],n]},"finance.undo.label.added"),ip(null),n0(""),n1(""),iF(""),ic.current&&clearTimeout(ic.current),il(!0),ic.current=setTimeout(()=>il(!1),2e3)},[id,P,n2,nF]),ta=(0,r.useCallback)(async e=>{let n;e.preventDefault();let i=(0,c.parseQuickInput)(nX,P.familyMembers);if(!i)return;let t=ti||"other",r=i.memberId??("shared"!==n2?n2:void 0),o=i.tags??[],a=i.description?(0,c.normalizeMerchant)(i.description):void 0,s=n8(),d=i.amount;if("EUR"!==im){ib(!0),ig(!1);let e=await (0,c.convertToEUR)({amount:i.amount,code:im,date:s});if(ib(!1),!e)return void ig(!0);d=e.eur,n={code:im,rate:e.rate,original:i.amount}}let p={id:(0,g.z)(),amount:d,date:s,categoryId:t,description:i.description||t,type:"daily",childId:r,createdAt:Date.now(),...o.length>0?{tags:o}:{},...a?{merchant:a}:{},...n?{fx:n}:{}};iv(!1),ig(!1);let m={...P.categoryHints};i.description&&i.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(m[e]=t)});let u=[i.description||"",...P.recentDescriptions].filter(Boolean).slice(0,20),x=[p,...P.expenses],f={...P,expenses:x,categoryHints:m,recentDescriptions:u};for(let e of o)f=(0,c.addRecentTag)(f,e);nF(f,"finance.undo.label.added");let h=(0,j.j)(x);iz(h),(0,l.Is)(eE,JSON.stringify(h)),n0(""),n1(""),iF(""),ia(null),ic.current&&clearTimeout(ic.current),il(!0),ic.current=setTimeout(()=>il(!1),2e3)},[nX,ti,n2,im,P,nF]),ts=(0,r.useCallback)(e=>{(0,p.K)([10,50,10]);let n=(0,c.parseQuickInput)(e,P.familyMembers);if(n){let e=n4||iS||(n.description?(0,c.guessCategoryWithRules)(P,n.description):"other"),i=n.memberId??("shared"!==n2?n2:void 0),t=n.tags??[],r={id:(0,g.z)(),amount:n.amount,date:n8(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},o={...P.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(o[n]=e)});let a=[n.description||"",...P.recentDescriptions].filter(Boolean).slice(0,20),s={...P,expenses:[r,...P.expenses],categoryHints:o,recentDescriptions:a};for(let e of t)s=(0,c.addRecentTag)(s,e);nF(s,"finance.undo.label.added");let d=(0,j.j)([r,...P.expenses]);iz(d),(0,l.Is)(eE,JSON.stringify(d)),n0(""),n1(""),iF(""),ic.current&&clearTimeout(ic.current),il(!0),ic.current=setTimeout(()=>il(!1),2e3)}else n0(e),nG.current?.focus()},[P,n4,iS,n2,nF]),tl=(0,r.useCallback)(e=>{nF({...P,expenses:P.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[P,nF]),tc=(0,r.useCallback)(e=>{nF({...P,income:P.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[P,nF]),td=(0,r.useCallback)(e=>{nF({...P,expenses:P.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[P,nF]),tp=(0,r.useCallback)(()=>{let e=parseFloat(iE)||P.budget.weeklyBudget,n=parseFloat(iL)||P.budget.monthlyBudget;B({...P,budget:{...P.budget,weeklyBudget:e,monthlyBudget:n}}),iO(!0),setTimeout(()=>iO(!1),2e3)},[iE,iL,P,B]),tm=(0,r.useCallback)(()=>{let e=n_.selectedIds;0!==e.size&&(nF({...P,expenses:P.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),n_.exitSelectMode())},[n_,P,nF]),tu=(0,r.useCallback)(e=>{let n=n_.selectedIds;0!==n.size&&(nF({...P,expenses:P.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),n_.exitSelectMode())},[n_,P,nF]),tx=(0,r.useCallback)(()=>{let e=n_.selectedIds;0!==e.size&&(nF({...P,expenses:P.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),n_.exitSelectMode())},[n_,P,nF]),tg=(0,r.useMemo)(()=>["shared",...P.familyMembers.map(e=>e.id)],[P.familyMembers]);(0,$.K)({quickAddInputRef:nG,monthSelectRef:nJ,memberIds:tg,activeMemberId:nH,onSelectMember:nK,onSetTab:e=>nD(e),expenseModalOpen:iD,onOpenExpenseModal:()=>iR(!0),shortcutsOpen:nQ,onToggleShortcuts:()=>nV(e=>!e)});let tf=[{value:"week",label:o("finance.range.pill.7d")},{value:"month",label:o("finance.range.pill.month")},{value:"3m",label:o("finance.range.pill.3m")},{value:"6m",label:o("finance.range.pill.6m")},{value:"1y",label:o("finance.range.pill.year")}],th=Math.floor(iQ).toLocaleString("pt-PT"),tb=(iQ%1).toFixed(2).slice(1),tw=(0,r.useMemo)(()=>{if(0===(P.goals??[]).length)return null;let e=(0,c.recomputeGoalCurrents)(P);return{onTrack:e.goals.filter(e=>"behind"!==(0,c.goalStatus)(e)).length,total:e.goals.length}},[P]),ty=(()=>{let[e,n]=iK.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),t$=(0,t.jsx)(h.TA,{data:P,activeMemberId:nH,onSelectMember:nK,onSaveData:B,t:o,locale:i}),tj=(0,r.useMemo)(()=>{let e={};for(let n of iJ)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:n7(e).color}))},[iJ]),tv=tj.reduce((e,n)=>e+n.value,0),tk=(0,r.useMemo)(()=>i6.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[i6]),tM=i6.length>0?tk/i6.length:0,tT=i6.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>P.budget.monthlyBudget).length,tS=(0,r.useMemo)(()=>{if(0===iJ.length)return null;let e=iJ.reduce((e,n)=>n.amount>e.amount?n:e,iJ[0]),n={};for(let e of iJ){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?P.familyMembers.find(e=>e.id===i[0]):void 0,r=t?.name??o("finance.member.shared"),a=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of iJ){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=iJ.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:r,topMemberAmt:a,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[iJ,P.familyMembers,o]);return(0,t.jsxs)(l.PE,{title:o("finance.appTitle"),sidebar:t$,topBarRight:e,activeId:nH,children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(Y,{children:(0,t.jsx)(h.jb,{data:P,activeMemberId:nH,onSelectMember:nK,t:o,locale:i})}),(0,t.jsxs)(K,{children:[(0,t.jsx)(U,{children:(0,t.jsx)("div",{role:"tablist","aria-label":o("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:o("finance.tab.overview"),expenses:o("finance.tab.expenses"),insights:o("finance.tab.insights")},i={overview:0,expenses:iJ.length,insights:iZ.length}[e];return(0,t.jsxs)(_,{type:"button",role:"tab","aria-selected":nz===e,active:nz===e,onClick:()=>nD(e),children:[n[e],i>0&&(0,t.jsxs)(q,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(Z,{children:[0===P.familyMembers.length&&(0,t.jsx)(nE,{children:o("finance.member.empty")}),(0,t.jsx)(m.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"filter",size:13,"aria-hidden":!0}),onClick:()=>{},children:o("finance.actions.filters")}),(0,t.jsx)(m.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(m.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>nD("insights"),children:o("finance.actions.categories")}),"expenses"===nz&&(0,t.jsx)(m.$n,{variant:n_.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{n_.selectMode?n_.exitSelectMode():n_.enterSelectMode()},children:o("finance.bulk.select")}),(0,t.jsx)(m.K0,{onClick:()=>nZ(!0),title:o("finance.actions.settings"),"aria-label":o("finance.actions.settings"),active:nU,children:(0,t.jsx)(m.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(H,{children:(0,t.jsx)(m.K0,{onClick:()=>nV(e=>!e),title:o("finance.shortcuts.title"),"aria-label":o("finance.shortcuts.title"),active:nQ,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(W,{"aria-label":o("finance.range.label"),children:tf.map(({value:e,label:n})=>(0,t.jsx)(N,{type:"button",active:nq===e,onClick:()=>{nN(e),"month"===e&&nY(iK)},"aria-pressed":nq===e,children:n},e))}),"month"===nq&&P.expenses.length>0&&(0,t.jsx)(v.f,{data:P,selectedMonth:nO,onSelectMonth:nY,locale:i,t:o}),(0,t.jsxs)(el,{children:["overview"===nz&&(0,t.jsxs)(ec,{children:[(0,t.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,t.jsxs)(V,{ref:nW,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:l.w4.colors.mainTextMuted},children:o("finance.quickAdd.title")}),(0,t.jsxs)(e2,{visible:is&&!iw.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",o("finance.quickAdd.added")]}),iw.listening&&(0,t.jsxs)(e8,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(e5,{}),o("finance.voice.listening")]})]}),(0,t.jsxs)("form",{onSubmit:ta,"aria-label":o("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(eV,{children:[{id:"shared",name:o("finance.member.shared"),role:"shared",color:void 0},...P.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(P.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(eX,{type:"button",active:n2===e.id,color:i,onClick:()=>ir(e.id),children:[(0,t.jsx)(m.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(e0,{children:[(0,t.jsxs)(ns,{children:[(0,t.jsx)(e4,{ref:nG,type:"text",placeholder:o("finance.quickAdd.placeholder"),value:nX,onChange:e=>{n0(e.target.value),n1(""),iv(eA.length>0),iM(-1)},onFocus:()=>{eA.length>0&&!nX.trim()&&iv(!0)},onBlur:()=>{setTimeout(()=>iv(!1),150)},onKeyDown:e=>{if(ij&&0!==eA.length)if("ArrowDown"===e.key)e.preventDefault(),iM(e=>Math.min(e+1,eA.length-1));else if("ArrowUp"===e.key)e.preventDefault(),iM(e=>Math.max(e-1,-1));else if("Enter"===e.key&&ik>=0){e.preventDefault();let n=eA[ik];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(nX);n0(e?nX.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),n1(""),iv(!1),iM(-1)}}else"Escape"===e.key&&(iv(!1),iM(-1))},"aria-label":o("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":ij&&eA.length>0,autoComplete:"off",inputMode:"decimal"}),ij&&eA.length>0&&(0,t.jsxs)(nl,{ref:iT,role:"listbox","aria-label":o("finance.merchant.recent"),children:[(0,t.jsx)(nm,{role:"presentation",children:o("finance.merchant.recent")}),eA.map((e,n)=>(0,t.jsxs)(nc,{role:"option","aria-selected":ik===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(nX);n0(i?nX.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),n1(""),iv(!1),iM(-1),nG.current?.focus()},children:[(0,t.jsx)(nd,{children:e.merchant}),(0,t.jsxs)(np,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsx)(e1,{value:n4||tn,onChange:e=>{let n=e.target.value,i=n4||tn;n1(n);let t=(0,c.parseQuickInput)(nX,P.familyMembers);t?.description&&ia((0,c.proposeRuleFromOverride)(i,n,t.description))},"aria-label":o("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(e1,{value:im,onChange:e=>{iu(e.target.value),ig(!1)},"aria-label":o("finance.currency.label"),style:{maxWidth:72},children:c.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!nX.trim()||ih,children:ih?o("finance.currency.converting"):o("finance.quickAdd.add")}),iw.supported&&(0,t.jsx)(na,{type:"button","aria-label":o("finance.voice.listening"),"aria-pressed":iw.listening,active:iw.listening,onPointerDown:()=>{iy.current=window.setTimeout(()=>{iy.current=null,i$.current=!0,(0,p.K)(30),iw.listening?iw.stop():iw.start(ts)},500)},onPointerUp:()=>{null!==iy.current&&(clearTimeout(iy.current),iy.current=null,i$.current||((0,p.K)(10),iw.listening?iw.stop():iw.start(ts))),i$.current=!1},onPointerCancel:()=>{null!==iy.current&&(clearTimeout(iy.current),iy.current=null),i$.current=!1},children:(0,t.jsx)(m.In,{name:"mic",size:16})})]}),(0,t.jsx)(j.J,{expenses:P.expenses,storedOrder:iC,lockedCategoryId:iS,onToggle:e=>iF(n=>n===e?"":e),locale:i,groupLabel:o("finance.quickAdd.frequentCategories")}),io&&(0,t.jsxs)(e7,{children:[(0,t.jsxs)("span",{children:[o("finance.categoryRules.alwaysCategorize",{match:io.match})," ",(0,t.jsx)("strong",{children:(n=c.DEFAULT_CATEGORIES.find(e=>e.id===io.categoryId))?(0,c.categoryLabel)(n,i):io.categoryId}),"?"]}),(0,t.jsx)(e9,{type:"button",accent:!0,onClick:()=>{P&&io&&(nF({...P,categoryRules:[io,...P.categoryRules??[]]},"finance.undo.label.added"),ia(null))},children:o("finance.categoryRules.propose")}),(0,t.jsx)(e9,{type:"button",onClick:()=>ia(null),children:o("finance.categoryRules.dismiss")})]}),ix&&(0,t.jsx)(e6,{style:{color:L},role:"alert",children:o("finance.currency.fxFailed")}),tt&&(0,c.parseQuickInput)(nX,P.familyMembers)&&(0,t.jsxs)(ne,{type:"button",onClick:tr,"aria-label":o("finance.recurring.makeRecurring"),children:["↻ ",o("finance.recurring.makeRecurring")]}),(0,t.jsx)(e6,{children:o("finance.quickAdd.hint")})]})]})}),(0,t.jsx)(ed,{span:12,style:{borderLeft:`2px solid ${A}`},children:(0,t.jsxs)(ex,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(eg,{children:[(0,t.jsxs)(ef,{children:[o("finance.hero.spentIn")," ",ty," \xb7 ",i4]}),(0,t.jsxs)(eh,{children:[(0,t.jsx)(eb,{children:"€"}),(0,t.jsx)(ew,{children:th}),(0,t.jsx)(ey,{children:tb})]}),(0,t.jsxs)(e$,{children:[(0,t.jsx)(u.Ru,{value:i0,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[o("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(iV,i)," \xb7 €",n3(iX)]})]}),i2.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:i2,accent:i1,width:280,height:34})}),null!==tw&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:tw.onTrack===tw.total?"#7fb77e":l.w4.colors.mainTextMuted},children:o("finance.goals.hero",{on:tw.onTrack,total:tw.total})})]}),(0,t.jsx)(ej,{children:(0,t.jsxs)(ev,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eM,{children:o("finance.budget.weekly")}),(0,t.jsxs)(eT,{children:["€",n3(iU.spent)," ",(0,t.jsxs)(eS,{children:["/ €",iU.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:i9,over:i9>100?i9-100:0}),(0,t.jsxs)(eF,{children:[(0,t.jsxs)("span",{children:[Math.round(i9),"% ",o("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:iU.remaining<0?L:A},children:iU.remaining>0?`€${n3(iU.remaining)} ${o("finance.budget.remaining")}`:`€${n3(Math.abs(iU.remaining))} ${o("finance.budget.over")}`})]}),(0,t.jsxs)(ek,{style:{marginTop:14},children:[(0,t.jsx)(eM,{children:o("finance.budget.monthly")}),(0,t.jsxs)(eT,{children:["€",n3(iQ)," ",(0,t.jsxs)(eS,{children:["/ €",P.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:te,over:te>100?te-100:0}),(0,t.jsxs)(eF,{children:[(0,t.jsxs)("span",{children:[Math.round(te),"% ",o("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[o("finance.budget.projected")," €",n3(iQ+(iU.projectedTotal-iU.spent))]})]})]})})]})}),(0,t.jsxs)(ed,{span:8,spanMd:12,children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:o("finance.charts.sixMonths")}),(0,t.jsx)(eu,{children:(0,t.jsx)(nL,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nB,{children:[(0,t.jsx)(nP,{color:e.color}),(0,c.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(u.ik,{data:i6,budget:P.budget.monthlyBudget,height:200}),(0,t.jsxs)(nu,{children:[(0,t.jsxs)(nx,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.total6m")}),(0,t.jsxs)(ng,{children:["€",n3(tk)]})]}),(0,t.jsxs)(nx,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.monthlyAvg")}),(0,t.jsxs)(ng,{children:["€",n3(tM)]})]}),(0,t.jsxs)(nx,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.monthsOverBudget")}),(0,t.jsxs)(ng,{children:[tT," / ",i6.length]})]}),(0,t.jsxs)(nx,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.trend")}),(0,t.jsxs)(ng,{style:{color:i0>0?L:A},children:[i0>0?"+":"",i0,"%"]})]})]})]}),(0,t.jsxs)(ed,{span:4,spanMd:6,children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:o("finance.charts.byCategory")}),(0,t.jsx)(nR,{type:"button",onClick:()=>nD("insights"),children:o("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:tj,total:tv,size:110,centerLabel:ty.slice(0,3),centerValue:`€${n3(tv)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:tj.map(e=>{let n=n7(e.id),r=(0,c.expensesForMember)((0,c.expensesForMonth)(P.expenses,iV),nH).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eC,{children:[(0,t.jsx)(ez,{color:e.color}),(0,t.jsx)(eD,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eR,{children:["€",n3(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(ed,{span:5,spanMd:6,children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(em,{children:o("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("finance.forecast.sub")})]}),(0,t.jsx)(D.b,{forecast:i3,firstNegDate:i8,t:o,locale:i,height:170})]}),(0,t.jsxs)(ed,{span:4,spanMd:6,children:[(0,t.jsx)(ep,{children:(0,t.jsx)(em,{children:o("finance.charts.heatmap")})}),(0,t.jsx)(u.RT,{data:i5,locale:i}),(0,t.jsxs)(nf,{children:[(0,t.jsx)("span",{children:o("finance.charts.less")}),(0,t.jsx)(nh,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:o("finance.charts.more")})]})]}),(0,t.jsxs)(ed,{span:12,children:[(0,t.jsx)(X,{children:(0,t.jsx)(m.YZ,{children:o("finance.heatmap.title")})}),(0,t.jsx)(b.D,{matrix:i7,locale:i,t:o})]}),(0,t.jsxs)(ed,{span:3,spanMd:6,children:[(0,t.jsx)(ep,{children:(0,t.jsx)(em,{children:o("finance.charts.thisWeek")})}),(0,t.jsxs)(nb,{children:[(0,t.jsxs)(nw,{children:[(0,t.jsxs)(ny,{children:["€",n3(iU.spent)]}),(0,t.jsxs)(eS,{children:["/ €",iU.budget]})]}),(0,t.jsx)(u.kl,{spent:iU.spent,budget:iU.budget}),(0,t.jsxs)(n$,{children:[(0,t.jsx)("span",{children:o("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:o("finance.charts.actual")})]})]})]}),(0,t.jsxs)(ed,{span:9,spanMd:12,children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(m.YZ,{children:o("finance.recent.title")}),iJ.length>8&&(0,t.jsx)(nR,{type:"button",onClick:()=>nD("expenses"),children:o("finance.recent.viewAll",{n:iJ.length})})]}),0===iJ.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:o("finance.dashboard.noRecent")}):(0,t.jsx)(eL,{"aria-label":o("finance.recent.title"),children:iJ.slice(0,8).map(e=>(0,t.jsx)(ii,{exp:e,finData:P,locale:i,t:o,onDelete:tl,onToggleReimbursed:td,compact:"compact"===iY},e.id))})]})]}),"expenses"===nz&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nI,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:o("finance.tx.title")}),"month"===nq&&0===P.expenses.length&&(0,t.jsx)(nM,{ref:nJ,value:nO,onChange:e=>nY(e.target.value),"aria-label":o("finance.insights.month"),children:iN.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),0===iJ.length&&0===iG.length?(0,t.jsx)(ed,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:o("finance.tx.empty")})}):(0,t.jsx)(ed,{span:12,children:(0,t.jsx)(eL,{"aria-label":o("finance.tx.title"),children:[...iJ.map(e=>({...e,_kind:"expense"})),...iG.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ii,{exp:e,finData:P,locale:i,t:o,onDelete:tl,onToggleReimbursed:td,compact:"compact"===iY,selectMode:n_.selectMode,selected:n_.selectedIds.has(e.id),onToggleSelect:n_.toggleId,longPressHandlers:n_.longPressHandlers,onEnterSelectMode:n_.enterSelectMode},e.id):(0,t.jsxs)(eB,{compact:"compact"===iY,children:["compact"===iY?(0,t.jsx)(eP,{color:A,"aria-hidden":!0}):(0,t.jsx)(eO,{color:A,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eY,{children:[(0,t.jsx)(eH,{children:e.source}),"compact"!==iY&&(0,t.jsxs)(eK,{children:[n5(e.date,i)," \xb7 ",o("finance.dashboard.income")]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eZ,{style:{color:A},children:["+€",n6(e.amount)]}),(0,t.jsx)(eN,{className:"delete-btn",type:"button",onClick:()=>tc(e.id),"aria-label":`${o("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nz&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nI,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:o("finance.insights.title")}),"month"===nq&&0===P.expenses.length&&(0,t.jsx)(nM,{value:nO,onChange:e=>nY(e.target.value),"aria-label":o("finance.insights.month"),children:iN.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,i)},e))})]}),null!==tS&&(0,t.jsxs)(en,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{children:o("finance.kpi.biggestExpense")}),(0,t.jsxs)(er,{children:["€",tS.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eo,{children:tS.biggest.description?`${tS.biggest.description} \xb7 ${(0,c.categoryLabel)(n7(tS.biggest.categoryId),i)}`:(0,c.categoryLabel)(n7(tS.biggest.categoryId),i)})]}),(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{children:o("finance.kpi.topSpender")}),(0,t.jsxs)(er,{children:["€",tS.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eo,{children:tS.topMemberLabel})]}),(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{children:o("finance.kpi.busiestDay")}),(0,t.jsxs)(er,{children:["€",tS.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eo,{children:o(`finance.weekday.${tS.busiestDowKey}`)})]}),(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{children:o("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(er,{children:["€",tS.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(eo,{children:0===tS.reimbursableTotal?"—":o("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsxs)(ea,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.charts.sixMonths")}),(0,t.jsx)(u.ik,{data:i6,budget:P.budget.monthlyBudget,height:180}),(0,t.jsxs)(nu,{style:{marginTop:l.w4.spacing.sm},children:[(0,t.jsxs)(nx,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.total6m")}),(0,t.jsxs)(ng,{children:["€",n3(tk)]})]}),(0,t.jsxs)(nx,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.monthlyAvg")}),(0,t.jsxs)(ng,{children:["€",n3(tM)]})]}),(0,t.jsxs)(nx,{children:[(0,t.jsx)(m.YZ,{children:o("finance.charts.trend")}),(0,t.jsxs)(ng,{style:{color:i0>0?L:A},children:[i0>0?"+":"",i0,"%"]})]})]})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.charts.byCategory")}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:tj,total:tv,size:110,centerLabel:ty.slice(0,3),centerValue:`€${n3(tv)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:tj.map(e=>{let n=n7(e.id),r=(0,c.expensesForMember)((0,c.expensesForMonth)(P.expenses,iV),nH).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(eC,{children:[(0,t.jsx)(ez,{color:e.color}),(0,t.jsx)(eD,{children:(0,c.categoryLabel)(n,i)}),(0,t.jsxs)(eR,{children:["€",n3(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]})]}),(0,t.jsxs)(ed,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.insights.monthlyTrend")}),(0,t.jsx)(it,{data:P,months:iN.slice(0,6),locale:i,t:o})]}),(0,t.jsxs)(ed,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.insights.title")}),0===iZ.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:o("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:iZ.map((e,n)=>(0,t.jsxs)(eW,{itype:e.type,children:[(0,t.jsx)(eG,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:o(e.messageKey,e.params)}),e.memberId&&(()=>{let n=P.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=P.familyMembers.indexOf(n);return(0,t.jsxs)(eJ,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(ed,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:o("finance.insights.anomalies")}),0===i_.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:o("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i_.map(e=>(0,t.jsxs)(eW,{itype:e.type,children:[(0,t.jsx)(eG,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:o(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(eQ,{type:"button",title:o("finance.insights.anomalies.dismiss"),"aria-label":o("finance.insights.anomalies.dismiss"),onClick:()=>{iq(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]}),(0,t.jsx)(R.z,{}),(0,t.jsx)(F.J,{}),(0,t.jsx)(T.n,{}),(0,t.jsx)(S.f,{}),(0,t.jsx)(C.b,{}),(0,t.jsx)(I.K,{}),(0,t.jsx)(z.S,{})]})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),iD&&(0,t.jsx)(ie,{finData:P,activeMemberId:nH,locale:i,t:o,onClose:()=>iR(!1),onSubmit:iI}),(0,t.jsx)(w.S,{labelKey:nT,onUndo:()=>{nC()},onDismiss:()=>nS(null),t:o}),n_.selectMode&&"expenses"===nz&&(0,t.jsx)(k.S,{selectionCount:n_.selectedIds.size,visibleIds:iJ.map(e=>e.id),selectedIds:n_.selectedIds,categories:c.DEFAULT_CATEGORIES,locale:i,t:o,onCancel:n_.exitSelectMode,onSelectAll:()=>n_.selectAll(iJ.map(e=>e.id)),onCategorise:tu,onDelete:tm,onMarkReimbursed:tx}),nQ&&(0,t.jsx)(y.m,{t:o,onClose:()=>nV(!1)}),nU&&(0,t.jsx)(G,{onClick:()=>nZ(!1),role:"dialog","aria-modal":"true","aria-label":o("finance.actions.settings"),children:(0,t.jsxs)(J,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(m.YZ,{children:o("finance.settings.title")}),(0,t.jsx)(m.K0,{onClick:()=>nZ(!1),title:o("finance.actions.settings"),children:(0,t.jsx)(m.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nj,{children:[(0,t.jsx)(nv,{htmlFor:"drawer-weekly-budget",children:o("finance.settings.weeklyBudget")}),(0,t.jsx)(nk,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(P.budget.weeklyBudget),value:iE,onChange:e=>iA(e.target.value)})]}),(0,t.jsxs)(nj,{children:[(0,t.jsx)(nv,{htmlFor:"drawer-monthly-budget",children:o("finance.settings.monthlyBudget")}),(0,t.jsx)(nk,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(P.budget.monthlyBudget),value:iL,onChange:e=>iB(e.target.value)})]}),(0,t.jsx)(m.$n,{variant:"primary",onClick:()=>{tp(),nZ(!1)},style:{height:44},children:iP?o("finance.settings.saved"):o("finance.settings.save")})]})]})}),id&&(0,t.jsx)(nn,{onClick:()=>ip(null),role:"dialog","aria-modal":"true","aria-label":o("finance.recurring.makeRecurring"),children:(0,t.jsxs)(ni,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(m.YZ,{children:["↻ ",o("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nt,{children:o("finance.recurring.frequency")}),(0,t.jsx)(nr,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(no,{type:"button",active:id.cadence===e,onClick:()=>ip(n=>n?{...n,cadence:e}:null),children:o(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nt,{children:o("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:id.firstDue,onChange:e=>ip(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.sm,color:l.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:l.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(m.$n,{variant:"ghost",onClick:()=>ip(null),children:o("finance.recurring.cancel")}),(0,t.jsx)(m.$n,{variant:"primary",onClick:to,disabled:!id.firstDue,children:o("finance.recurring.confirm")})]})]})})]})}function ie({finData:e,activeMemberId:n,locale:i,t:o,onClose:a,onSubmit:s}){let[d,p]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)("other"),[w,y]=(0,r.useState)(n8()),[$,j]=(0,r.useState)("single"),[v,k]=(0,r.useState)(n),[M,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,r.useState)([]),[C,z]=(0,r.useState)(""),[D,R]=(0,r.useState)(!1),I=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.trim()&&b((0,c.guessCategoryWithRules)(e,u))},[u,e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a]);let E=parseFloat(d.replace(",","."))||0,A=M.length,L="split"===$&&A>0?E/A:E,B=E>0&&!!w&&("single"===$||"split"===$&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),z(""),R(!1))},O=(0,r.useMemo)(()=>{let n=C.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[C,e.recentTags,S]),Y=[{id:"shared",name:o("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(nO,{onClick:a,role:"dialog","aria-modal":"true","aria-label":o("finance.quickAdd.newExpense"),children:(0,t.jsxs)(nY,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(nH,{children:[(0,t.jsxs)(m.YZ,{children:["◉ ",o("finance.quickAdd.newExpense")]}),(0,t.jsx)(nK,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=u.trim(),r=Date.now(),o={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(o[e]=f)});let a=S.length>0?{tags:S}:{};if("single"===$)i=[{id:(0,g.z)(),amount:E,date:w,categoryId:f,description:t||f,type:"daily",childId:"shared"===v?void 0:v,createdAt:r,...a}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,o)=>({id:(0,g.z)(),amount:0===o?e+n:e,date:w,categoryId:f,description:t?`${t} (1/${A})`:f,type:"daily",childId:i,createdAt:r+o,...a}))}s(i,o,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nU,{children:[(0,t.jsxs)(nj,{children:[(0,t.jsx)(nv,{htmlFor:"exp-amount",children:o("finance.modal.amount")}),(0,t.jsx)(nG,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:d,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nj,{children:[(0,t.jsx)(nv,{htmlFor:"exp-date",children:o("finance.modal.date")}),(0,t.jsx)(nG,{id:"exp-date",type:"date",value:w,onChange:e=>y(e.target.value)})]})]}),(0,t.jsxs)(nj,{children:[(0,t.jsx)(nv,{htmlFor:"exp-desc",children:o("finance.modal.description")}),(0,t.jsx)(nG,{id:"exp-desc",type:"text",placeholder:o("finance.modal.descPlaceholder"),value:u,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nj,{children:[(0,t.jsx)(nv,{htmlFor:"exp-cat",children:o("finance.quickAdd.category")}),(0,t.jsx)(nJ,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,c.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nj,{children:[(0,t.jsx)(nv,{children:o("finance.tags.label")}),(0,t.jsxs)(n1,{children:[(0,t.jsxs)(nX,{onClick:()=>I.current?.focus(),children:[S.map(e=>(0,t.jsxs)(m.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":o("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(nV,{ref:I,type:"text",value:C,placeholder:0===S.length?o("finance.tags.placeholder"):"",onChange:e=>{z(e.target.value),R(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(C)):"Backspace"===e.key&&""===C&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&R(!1)},onBlur:()=>{C.trim()&&P(C),setTimeout(()=>R(!1),150)},onFocus:()=>R(!0),"aria-label":o("finance.tags.label")})]}),D&&O.length>0&&(0,t.jsx)(n0,{children:O.map(e=>(0,t.jsxs)(n4,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nj,{children:[(0,t.jsx)(nv,{children:o("finance.modal.assign")}),(0,t.jsxs)(nZ,{role:"tablist",children:[(0,t.jsx)(n_,{type:"button",active:"single"===$,onClick:()=>j("single"),children:o("finance.modal.member")}),(0,t.jsx)(n_,{type:"button",active:"split"===$,onClick:()=>j("split"),disabled:e.familyMembers.length<2,children:o("finance.modal.split")})]}),"single"===$?(0,t.jsx)(nq,{style:{marginTop:l.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(nN,{type:"button",active:v===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nq,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(nN,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(nW,{style:{marginTop:l.w4.spacing.xs},children:o("finance.modal.splitEach",{n:A,amount:n6(L)})})]})]}),(0,t.jsxs)(nQ,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:a,children:o("finance.member.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!B,children:o("finance.quickAdd.add")})]})]})]})})}function ii({exp:e,finData:n,locale:i,t:r,onDelete:o,onToggleReimbursed:a,compact:s=!1,selectMode:d=!1,selected:p=!1,onToggleSelect:u,longPressHandlers:x}){let g=n7(e.categoryId),f=n.familyMembers.findIndex(n=>n.id===e.childId),b=f>=0?n.familyMembers[f]:null,w=b?(0,h.a8)(b,f):l.w4.colors.mainTextMuted,y=x?x(e.id):null,$=n=>{d&&u&&"INPUT"!==n.target.tagName&&u(e.id)},j=e.isReimbursable&&!d?a?(0,t.jsx)(eq,{type:"button",ok:e.reimbursed,onClick:()=>a(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e_,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,v=d?null:(0,t.jsx)(eN,{className:"delete-btn",type:"button",onClick:()=>o(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),k=d?(0,t.jsx)(eA,{type:"checkbox",checked:p,"aria-label":e.description,onChange:()=>u?.(e.id),onClick:e=>e.stopPropagation()}):null,M=d?{background:p?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:p?"1px solid rgba(127,183,126,0.35)":"none"}:{};return s?(0,t.jsxs)(eB,{compact:!0,style:M,onClick:$,...y??{},children:[k,(0,t.jsx)(eP,{color:g.color,"aria-hidden":!0}),(0,t.jsx)(eY,{children:(0,t.jsxs)(eH,{style:{display:"flex",alignItems:"center",gap:6},children:[b?(0,t.jsx)(m.eu,{member:{id:b.id,name:b.name,role:b.role,color:w},size:16}):null,(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,c.categoryLabel)(g,i)})]})}),(0,t.jsxs)(eU,{children:[j,(0,t.jsxs)(eZ,{children:["−€",n6(e.amount)]}),v]})]}):(0,t.jsxs)(eB,{style:M,onClick:$,...y??{},children:[k,(0,t.jsx)(eO,{color:g.color,children:(0,m.n6)(g.icon)?(0,t.jsx)(m.In,{name:g.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:g.icon})}),(0,t.jsxs)(eY,{children:[(0,t.jsx)(eH,{children:e.description||(0,c.categoryLabel)(g,i)}),(0,t.jsxs)(eK,{children:[b?(0,t.jsx)(m.eu,{member:{id:b.id,name:b.name,role:b.role,color:w},size:14}):null,(0,t.jsx)("span",{children:(0,c.categoryLabel)(g,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:n5(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(n2,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(eU,{children:[j,"recurring"===e.type&&(0,t.jsx)(e_,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(eZ,{children:["−€",n6(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:l.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),v]})]})}function it({data:e,months:n,locale:i,t:r}){let o=n.map(n=>(0,c.computeMonthlySummary)(e,n)),a=Math.max(...o.map(e=>e.totalExpenses),1);return o.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)(nT,{children:o.map(e=>{let n=e.totalExpenses/a*100,[,r]=e.month.split("-"),o=new Date(parseInt(e.month.slice(0,4)),parseInt(r)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"short"});return(0,t.jsxs)(nS,{children:[(0,t.jsx)(nF,{style:{width:80},children:o}),(0,t.jsx)(nC,{children:(0,t.jsx)(nz,{pct:n,color:l.w4.colors.accent})}),(0,t.jsxs)(nD,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}}}]);