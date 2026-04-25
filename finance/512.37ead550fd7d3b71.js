"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),r=i(8997),o=i(7991),a=i(6859),s=i.n(a),l=i(2799),c=i(9874),d=i(6455),p=i(3759),m=i(789),u=i(8395),x=i(1496),g=i(8170),f=i(4041),h=i(948),b=i(719),w=i(2405),y=i(9546),$=i(5854),j=i(3616),v=i(6579),k=i(8989),M=i(6376),T=i(9146),S=i(7737),F=i(8635),C=i(8501),z=i(1789),R=i(216),D=i(9419),I=i(341),E=i(9378),A=i(545);let L="#7fb77e",B="#f85149",P=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,O=c.w4.suites.lab,Y=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${P} 0.25s ease both;
  overflow: hidden;
`,H=s().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,K=s().div`
  display: none;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,U=s().div`
  padding: 0 ${c.w4.spacing.md};
  border-bottom: 1px solid ${c.w4.colors.border};
  background: ${c.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,Z=s().div`
  flex: 1;
  min-width: 0;
`,_=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  flex-shrink: 0;
`,q=s().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${c.w4.spacing.sm};
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${O}`:"transparent"};
  background: ${({active:e})=>e?`${O}1f`:"transparent"};
  color: ${({active:e})=>e?O:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${O};
    outline-offset: 2px;
  }
`,N=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  opacity: 0.75;
`,W=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 26px;
  min-width: 36px;
  border-radius: 999px;
  border: 1px solid ${({active:e})=>e?`${O}`:"transparent"};
  background: ${({active:e})=>e?`${O}1f`:"transparent"};
  color: ${({active:e})=>e?O:c.w4.colors.mainTextMuted};
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
    outline: 2px solid ${O};
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
`;let J=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${c.w4.zIndex.modal};
  animation: ${P} 0.18s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    align-items: center;
    padding: ${c.w4.spacing.lg};
  }
`,Q=s().div`
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
`,V=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,X=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${L};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${L};
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
  border-left: 2px solid ${L};
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
`,eo=s().div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
`,ea=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,es=s().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.lg}) {
    grid-template-columns: 60fr 40fr;
  }
`,el=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  min-width: 0;
`,ec=s().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    padding: ${c.w4.spacing.lg};
  }
`,ed=s().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,ep=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  border-left: 2px solid ${L};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    border-left-color: ${L};
  }

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${c.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,em=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,eu=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,ex=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,eg=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${L};
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,ef=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eh=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,eb=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,ew=s().span`
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
`,e$=s().span`
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
`,ev=s().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,ek=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eM=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,eT=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,eS=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,eF=s().span`
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
`,ez=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,eR=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,eD=s().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eI=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,eE="finance:list-density",eA="finance:quick-categories",eL=s().input`
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
`,eB=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eP=s().li`
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
    &:hover .delete-btn { opacity: 1; }
  }
`,eO=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eY=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eH=s().div`
  flex: 1;
  min-width: 0;
`,eK=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eU=s().div`
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
`,e_=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,eq=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${L}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?L:"#facc15"};
  white-space: nowrap;
`,eN=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${L}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?L:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${L}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,eW=s().button`
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
    color: ${B};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,eG=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${L}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${L}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,eJ=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?B:"warning"===e?"#facc15":"success"===e?L:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,eQ=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,eV=s().button`
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
`;s()(ep)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let eX=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,e0=s().button`
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
`,e4=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,e1=s().input`
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
`,e2=s().select`
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
`,e6=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${L};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,e3=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,e8=(0,l.keyframes)`
  0%   { box-shadow: 0 0 0 0 rgba(127,183,126,0.5); }
  70%  { box-shadow: 0 0 0 6px rgba(127,183,126,0); }
  100% { box-shadow: 0 0 0 0 rgba(127,183,126,0); }
`,e5=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${L};
  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;
  transition: opacity 0.2s ease;
  height: 16px;
`,e7=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${L};
  animation: ${e8} 1.2s ease-in-out infinite;
  flex-shrink: 0;
`,e9=s().div`
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
`,ne=s().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({accent:e})=>e?L:c.w4.colors.mainTextMuted};
  background: ${({accent:e})=>e?`${L}18`:"transparent"};
  border: 1px solid ${({accent:e})=>e?`${L}44`:c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.sm};
  padding: 2px 6px;
  cursor: pointer;
  min-height: 22px;
  transition: background 120ms ease, border-color 120ms ease;
  white-space: nowrap;

  &:hover {
    background: ${({accent:e})=>e?`${L}28`:c.w4.colors.sidebarHover};
    border-color: ${({accent:e})=>e?L:c.w4.colors.borderStrong??c.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nn=s().button`
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
`,ni=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: ${c.w4.spacing.md};
`,nt=s().div`
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
`,nr=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: 4px;
`,no=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,na=s().button`
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
`,ns=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: ${c.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?L:c.w4.colors.border};
  background: ${({active:e})=>e?"rgba(127,183,126,0.12)":"transparent"};
  color: ${({active:e})=>e?L:c.w4.colors.mainTextMuted};
  cursor: pointer;
  touch-action: none; /* suppress native long-press menu */
  transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

  &:hover {
    border-color: ${L};
    color: ${L};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,nl=s().div`
  position: relative;
  flex: 1;
  min-width: 160px;
`,nc=s().ul`
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
`,nd=s().li`
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
`,np=s().span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nm=s().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`,nu=s().li`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px ${c.w4.spacing.sm} 2px;
  pointer-events: none;
`,nx=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,ng=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nf=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nh=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nb=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,nw=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,ny=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,n$=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,nj=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${L}; }
`,nv=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nk=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,nM=s().input`
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
`,nT=s().select`
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
`,nS=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,nF=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,nC=s().div`
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
`,nz=s().div`
  flex: 1;
  height: 8px;
  background: ${c.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,nR=s().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,nD=s().div`
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
`,nI=s().button`
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
`,nE=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
`,nA=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
`,nL=s().footer`
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
`,nB=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,nP=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,nO=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,nY=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: ${c.w4.spacing.md};
  padding-bottom: max(${c.w4.spacing.md}, env(safe-area-inset-bottom));
  z-index: 1000;
  animation: ${P} 0.15s ease;

  @media (min-width: ${c.w4.breakpoints.md}) {
    align-items: center;
  }
`,nH=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg} ${c.w4.borderRadius.lg} ${c.w4.borderRadius.md} ${c.w4.borderRadius.md};
  border-left: 2px solid ${L};
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
`,nK=s().div`
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
`,nZ=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,n_=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nq=s().button`
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
`,nN=s().div`
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
`,nG=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nJ=s().input`
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
`,nV=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`,nX=s().input`
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
`,n0=s().div`
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
`,n4=s().ul`
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
`,n1=s().li`
  padding: 6px ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${c.w4.colors.sidebarHover};
  }
`,n2=s().div`
  position: relative;
`,n6=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function n3(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function n8(e){return Math.round(e).toLocaleString("pt-PT")}function n5(){return new Date().toISOString().slice(0,10)}function n7(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function n9(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function ie({finData:e,activeMemberId:n,locale:i,t:r,onClose:a,onSubmit:s}){let[l,p]=(0,o.useState)(""),[m,x]=(0,o.useState)(""),[g,h]=(0,o.useState)("other"),[w,y]=(0,o.useState)(n5()),[$,j]=(0,o.useState)("single"),[v,k]=(0,o.useState)(n),[M,T]=(0,o.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,o.useState)([]),[C,z]=(0,o.useState)(""),[R,D]=(0,o.useState)(!1),I=(0,o.useRef)(null);(0,o.useEffect)(()=>{m.trim()&&h((0,d.guessCategoryWithRules)(e,m))},[m,e]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a]);let E=parseFloat(l.replace(",","."))||0,A=M.length,L="split"===$&&A>0?E/A:E,B=E>0&&!!w&&("single"===$||"split"===$&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),z(""),D(!1))},O=(0,o.useMemo)(()=>{let n=C.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[C,e.recentTags,S]),Y=[{id:"shared",name:r("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(nY,{onClick:a,role:"dialog","aria-modal":"true","aria-label":r("finance.quickAdd.newExpense"),children:(0,t.jsxs)(nH,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(nK,{children:[(0,t.jsxs)(u.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,t.jsx)(nU,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!B)return;let t=m.trim(),r=Date.now(),o={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(o[e]=g)});let a=S.length>0?{tags:S}:{};if("single"===$)i=[{id:(0,f.z)(),amount:E,date:w,categoryId:g,description:t||g,type:"daily",childId:"shared"===v?void 0:v,createdAt:r,...a}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=M.map((i,o)=>({id:(0,f.z)(),amount:0===o?e+n:e,date:w,categoryId:g,description:t?`${t} (1/${A})`:g,type:"daily",childId:i,createdAt:r+o,...a}))}s(i,o,t,S)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nZ,{children:[(0,t.jsxs)(nv,{children:[(0,t.jsx)(nk,{htmlFor:"exp-amount",children:r("finance.modal.amount")}),(0,t.jsx)(nJ,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(nk,{htmlFor:"exp-date",children:r("finance.modal.date")}),(0,t.jsx)(nJ,{id:"exp-date",type:"date",value:w,onChange:e=>y(e.target.value)})]})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(nk,{htmlFor:"exp-desc",children:r("finance.modal.description")}),(0,t.jsx)(nJ,{id:"exp-desc",type:"text",placeholder:r("finance.modal.descPlaceholder"),value:m,onChange:e=>x(e.target.value)})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(nk,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,t.jsx)(nQ,{id:"exp-cat",value:g,onChange:e=>h(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(nk,{children:r("finance.tags.label")}),(0,t.jsxs)(n2,{children:[(0,t.jsxs)(n0,{onClick:()=>I.current?.focus(),children:[S.map(e=>(0,t.jsxs)(u.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":r("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(nX,{ref:I,type:"text",value:C,placeholder:0===S.length?r("finance.tags.placeholder"):"",onChange:e=>{z(e.target.value),D(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(C)):"Backspace"===e.key&&""===C&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&D(!1)},onBlur:()=>{C.trim()&&P(C),setTimeout(()=>D(!1),150)},onFocus:()=>D(!0),"aria-label":r("finance.tags.label")})]}),R&&O.length>0&&(0,t.jsx)(n4,{children:O.map(e=>(0,t.jsxs)(n1,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(nk,{children:r("finance.modal.assign")}),(0,t.jsxs)(n_,{role:"tablist",children:[(0,t.jsx)(nq,{type:"button",active:"single"===$,onClick:()=>j("single"),children:r("finance.modal.member")}),(0,t.jsx)(nq,{type:"button",active:"split"===$,onClick:()=>j("split"),disabled:e.familyMembers.length<2,children:r("finance.modal.split")})]}),"single"===$?(0,t.jsx)(nN,{style:{marginTop:c.w4.spacing.sm},children:Y.map(e=>(0,t.jsxs)(nW,{type:"button",active:v===e.id,color:e.color,onClick:()=>k(e.id),children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nN,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),r=M.includes(e.id);return(0,t.jsxs)(nW,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(u.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(nG,{style:{marginTop:c.w4.spacing.xs},children:r("finance.modal.splitEach",{n:A,amount:n3(L)})})]})]}),(0,t.jsxs)(nV,{children:[(0,t.jsx)(u.$n,{type:"button",variant:"ghost",onClick:a,children:r("finance.member.cancel")}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",disabled:!B,children:r("finance.quickAdd.add")})]})]})]})})}function ii({exp:e,finData:n,locale:i,t:r,onDelete:o,onToggleReimbursed:a,compact:s=!1,selectMode:l=!1,selected:p=!1,onToggleSelect:m,longPressHandlers:x}){let g=n9(e.categoryId),f=n.familyMembers.findIndex(n=>n.id===e.childId),h=f>=0?n.familyMembers[f]:null,w=h?(0,b.a8)(h,f):c.w4.colors.mainTextMuted,y=x?x(e.id):null,$=n=>{l&&m&&"INPUT"!==n.target.tagName&&m(e.id)},j=e.isReimbursable&&!l?a?(0,t.jsx)(eN,{type:"button",ok:e.reimbursed,onClick:()=>a(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(eq,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,v=l?null:(0,t.jsx)(eW,{className:"delete-btn",type:"button",onClick:()=>o(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"}),k=l?(0,t.jsx)(eL,{type:"checkbox",checked:p,"aria-label":e.description,onChange:()=>m?.(e.id),onClick:e=>e.stopPropagation()}):null,M=l?{background:p?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:p?"1px solid rgba(127,183,126,0.35)":"none"}:{};return s?(0,t.jsxs)(eP,{compact:!0,style:M,onClick:$,...y??{},children:[k,(0,t.jsx)(eO,{color:g.color,"aria-hidden":!0}),(0,t.jsx)(eH,{children:(0,t.jsxs)(eK,{style:{display:"flex",alignItems:"center",gap:6},children:[h?(0,t.jsx)(u.eu,{member:{id:h.id,name:h.name,role:h.role,color:w},size:16}):null,(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||(0,d.categoryLabel)(g,i)})]})}),(0,t.jsxs)(eZ,{children:[j,(0,t.jsxs)(e_,{children:["−€",n3(e.amount)]}),v]})]}):(0,t.jsxs)(eP,{style:M,onClick:$,...y??{},children:[k,(0,t.jsx)(eY,{color:g.color,children:(0,u.n6)(g.icon)?(0,t.jsx)(u.In,{name:g.icon,size:16,"aria-hidden":!0}):(0,t.jsx)("span",{"aria-hidden":!0,children:g.icon})}),(0,t.jsxs)(eH,{children:[(0,t.jsx)(eK,{children:e.description||(0,d.categoryLabel)(g,i)}),(0,t.jsxs)(eU,{children:[h?(0,t.jsx)(u.eu,{member:{id:h.id,name:h.name,role:h.role,color:w},size:14}):null,(0,t.jsx)("span",{children:(0,d.categoryLabel)(g,i)}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:n7(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:r("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(n6,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(eZ,{children:[j,"recurring"===e.type&&(0,t.jsx)(eq,{children:r("finance.tx.recurring")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,t.jsxs)(e_,{children:["−€",n3(e.amount)]}),e.fx&&(0,t.jsxs)("span",{style:{fontFamily:c.w4.typography.fontFamilyMono,fontVariantNumeric:"tabular-nums",fontSize:11,color:c.w4.colors.mainTextMuted,whiteSpace:"nowrap"},children:[e.fx.code," ",e.fx.original.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),v]})]})}function it({data:e,months:n,locale:i,t:r}){let o=n.map(n=>(0,d.computeMonthlySummary)(e,n)),a=Math.max(...o.map(e=>e.totalExpenses),1);return o.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)(nS,{children:o.map(e=>{let n=e.totalExpenses/a*100,[,r]=e.month.split("-"),o=new Date(parseInt(e.month.slice(0,4)),parseInt(r)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"short"});return(0,t.jsxs)(nF,{children:[(0,t.jsx)(nC,{style:{width:80},children:o}),(0,t.jsx)(nz,{children:(0,t.jsx)(nR,{pct:n,color:c.w4.colors.accent})}),(0,t.jsxs)(nD,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}let ir=document.getElementById("root");if(!ir)throw Error("Root element #root not found");(0,r.createRoot)(ir).render((0,t.jsx)(function({topBarRight:e}){let n,[i]=(0,g.Ym)(),r=(0,o.useMemo)(()=>(0,g.Nx)(i,h.A),[i]),{data:a,loaded:s,save:l}=(0,d.useFinance)(),P=a??{...d.EMPTY_FINANCE_DATA},O=(0,o.useMemo)(()=>(0,d.recentMerchants)(P.expenses,20).slice(0,6),[P.expenses]),{canUndo:eL,latestLabelKey:eq,undo:eN}=(0,d.useUndo)(),[e8,nS]=(0,o.useState)(null),nF=(0,o.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:P,labelKey:n,ts:Date.now()}),nS(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await l(e)},[P,l]),nC=(0,o.useCallback)(async()=>{let e=eN();e&&(nS("finance.undo.label.reverted"),await l(e),setTimeout(()=>nS(null),2500))},[eN,l]),[nz,nR]=(0,o.useState)("overview"),[nD,nY]=(0,o.useState)(()=>(0,d.thisMonthKey)()),[nH,nK]=(0,o.useState)("shared"),[nU,nZ]=(0,o.useState)(!1),n_=(0,T.E)();(0,o.useEffect)(()=>{"expenses"!==nz&&n_.selectMode&&n_.exitSelectMode()},[nz]);let{range:nq,setRange:nN}=(0,p.H)("month"),nW=(0,o.useRef)(null),nG=(0,o.useRef)(null),nJ=(0,o.useRef)(null),[nQ,nV]=(0,o.useState)(!1),[nX,n0]=(0,o.useState)(""),[n4,n1]=(0,o.useState)(""),[n2,n6]=(0,o.useState)("shared"),[ir,io]=(0,o.useState)(null),[ia,is]=(0,o.useState)(!1),il=(0,o.useRef)(null),[ic,id]=(0,o.useState)(null),[ip,im]=(0,o.useState)("EUR"),[iu,ix]=(0,o.useState)(!1),[ig,ih]=(0,o.useState)(!1),ib=(0,A.x)(),iw=(0,o.useRef)(null),iy=(0,o.useRef)(!1),[i$,ij]=(0,o.useState)(!1),[iv,ik]=(0,o.useState)(-1),iM=(0,o.useRef)(null),[iT,iS]=(0,o.useState)(""),[iF,iC]=(0,o.useState)(null);(0,o.useEffect)(()=>{(0,c.PL)(eA).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&iC(n)}catch{}})},[]);let[iz,iR]=(0,o.useState)(!1),iD=(0,o.useCallback)((e,n,i,t)=>{let r=i?[i,...P.recentDescriptions].filter(Boolean).slice(0,20):P.recentDescriptions,o={...P,expenses:[...e,...P.expenses],categoryHints:n,recentDescriptions:r};for(let e of t)o=(0,d.addRecentTag)(o,e);nF(o,"finance.undo.label.added"),iR(!1),il.current&&clearTimeout(il.current),is(!0),il.current=setTimeout(()=>is(!1),2e3)},[P,nF]),[iI,iE]=(0,o.useState)(""),[iA,iL]=(0,o.useState)(""),[iB,iP]=(0,o.useState)(!1),[iO,iY]=(0,o.useState)("comfortable");(0,o.useEffect)(()=>{(0,c.PL)(eE).then(e=>{("compact"===e||"comfortable"===e)&&iY(e)})},[]),(0,o.useCallback)(()=>{let e="comfortable"===iO?"compact":"comfortable";iY(e),(0,c.Is)(eE,e)},[iO]);let iH=(0,o.useMemo)(()=>(0,d.thisMonthKey)(),[]),iK=(0,o.useMemo)(()=>(0,d.computeWeeklyStatus)(P),[P]);(0,o.useMemo)(()=>(0,d.computeMonthlySummary)(P,nD),[P,nD]);let iU=(0,o.useMemo)(()=>(0,d.generateInsightsWithMembers)(P),[P]),{insights:iZ,dismiss:i_}=(0,d.useFinanceAnomalies)(),iq=(0,o.useMemo)(()=>(0,d.availableMonths)(P),[P]),iN=(0,o.useMemo)(()=>(0,d.filterExpensesByRange)(P.expenses,nq,nD),[P.expenses,nq,nD]),iW=(0,o.useMemo)(()=>(0,d.filterIncomeByRange)(P.income,nq,nD),[P.income,nq,nD]),iG=(0,o.useMemo)(()=>(0,d.expensesForMember)(iN,nH),[iN,nH]),iJ=(0,o.useMemo)(()=>(0,d.monthlyTotalByMember)(P,nH,iH),[P,nH,iH]),iQ=(0,o.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(iH),[iH]),iV=(0,o.useMemo)(()=>(0,d.monthlyTotalByMember)(P,nH,iQ),[P,nH,iQ]),iX=(0,o.useMemo)(()=>0===iV?0:Math.round((iJ-iV)/iV*100),[iJ,iV]),i0=(0,o.useMemo)(()=>{if("all"===nH)return r("finance.member.all");if("shared"===nH)return r("finance.hero.family");let e=P.familyMembers.find(e=>e.id===nH);return e?.name??r("finance.hero.family")},[nH,P.familyMembers,r]),i4=(0,o.useMemo)(()=>{if("all"===nH||"shared"===nH)return c.w4.colors.mainTextMuted;let e=P.familyMembers.findIndex(e=>e.id===nH);return -1===e?L:(0,b.a8)(P.familyMembers[e],e)},[nH,P.familyMembers]),i1=(0,o.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,d.expensesForMember)(P.expenses,nH).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[P.expenses,nH]),i2=(0,o.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),o=(0,d.expensesForMember)(t,n),a={};for(let e of o)a[e.categoryId]=(a[e.categoryId]??0)+e.amount;let s=Object.values(a).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(a).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:n9(e).color})),over:s>r?s-r:0}})})(P,nH),[P,nH]);(0,o.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let o=new Date(i);o.setDate(i.getDate()-r);let a=o.toISOString().slice(0,10),s=a.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===a),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:c,exp:l})}return t})(P,nH),[P,nH]);let i6=(0,o.useMemo)(()=>(0,d.forecastCashFlow)(P,3),[P]),i3=(0,o.useMemo)(()=>(0,d.firstNegativeDay)(i6),[i6]),i8=(0,o.useMemo)(()=>{let e,n;return e=new Date,n=P.expenses.length>0?P.expenses.reduce((e,n)=>e+n.amount,0)/P.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let o=r.toISOString().slice(0,10),a=(0,d.expensesForMember)(P.expenses.filter(e=>e.date===o),nH).reduce((e,n)=>e+n.amount,0);if(0===a)return 0;let s=a/n;return s<.5?1:s<1?2:s<2?3:4})},[P,nH]),i5=(0,o.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(P.expenses,nH)),[P.expenses,nH]),i7=iK.budget>0?iK.spent/iK.budget*100:0,i9=P.budget.monthlyBudget>0?iJ/P.budget.monthlyBudget*100:0,te=(0,o.useMemo)(()=>{let e=(0,d.parseQuickInput)(nX,P.familyMembers);return e?.description?(0,d.guessCategoryWithRules)(P,e.description):"other"},[nX,P]),tn=n4||iT||te,ti=(0,o.useMemo)(()=>(0,d.parseRecurringHint)(nX),[nX]);(0,o.useEffect)(()=>{let e=(0,d.parseQuickInput)(nX,P.familyMembers);e?.memberId&&n6(e.memberId)},[nX,P.familyMembers]);let tt=(0,o.useCallback)(()=>{let e=(0,d.parseQuickInput)(nX,P.familyMembers),n=(0,d.parseRecurringHint)(nX);if(!e||!n)return;let i=new Date,t=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),o=String(i.getDate()).padStart(2,"0");id({amount:e.amount,description:e.description||(tn??"other"),categoryId:tn||"other",cadence:n.cadence,firstDue:`${t}-${r}-${o}`})},[nX,P.familyMembers,tn]),tr=(0,o.useCallback)(()=>{if(!ic)return;let e=new Date(ic.firstDue+"T00:00:00").getTime(),n={id:`rule-${Date.now().toString(36)}`,description:ic.description,amount:ic.amount,categoryId:ic.categoryId,cadence:ic.cadence,nextDueAt:e,createdAt:Date.now(),memberId:"shared"!==n2?n2:void 0};nF({...P,recurringRules:[...P.recurringRules??[],n]},"finance.undo.label.added"),id(null),n0(""),n1(""),iS(""),il.current&&clearTimeout(il.current),is(!0),il.current=setTimeout(()=>is(!1),2e3)},[ic,P,n2,nF]),to=(0,o.useCallback)(async e=>{let n;e.preventDefault();let i=(0,d.parseQuickInput)(nX,P.familyMembers);if(!i)return;let t=tn||"other",r=i.memberId??("shared"!==n2?n2:void 0),o=i.tags??[],a=i.description?(0,d.normalizeMerchant)(i.description):void 0,s=n5(),l=i.amount;if("EUR"!==ip){ih(!0),ix(!1);let e=await (0,d.convertToEUR)({amount:i.amount,code:ip,date:s});if(ih(!1),!e)return void ix(!0);l=e.eur,n={code:ip,rate:e.rate,original:i.amount}}let p={id:(0,f.z)(),amount:l,date:s,categoryId:t,description:i.description||t,type:"daily",childId:r,createdAt:Date.now(),...o.length>0?{tags:o}:{},...a?{merchant:a}:{},...n?{fx:n}:{}};ij(!1),ix(!1);let m={...P.categoryHints};i.description&&i.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(m[e]=t)});let u=[i.description||"",...P.recentDescriptions].filter(Boolean).slice(0,20),x=[p,...P.expenses],g={...P,expenses:x,categoryHints:m,recentDescriptions:u};for(let e of o)g=(0,d.addRecentTag)(g,e);nF(g,"finance.undo.label.added");let h=(0,v.j)(x);iC(h),(0,c.Is)(eA,JSON.stringify(h)),n0(""),n1(""),iS(""),io(null),il.current&&clearTimeout(il.current),is(!0),il.current=setTimeout(()=>is(!1),2e3)},[nX,tn,n2,ip,P,nF]),ta=(0,o.useCallback)(e=>{(0,m.K)([10,50,10]);let n=(0,d.parseQuickInput)(e,P.familyMembers);if(n){let e=n4||iT||(n.description?(0,d.guessCategoryWithRules)(P,n.description):"other"),i=n.memberId??("shared"!==n2?n2:void 0),t=n.tags??[],r={id:(0,f.z)(),amount:n.amount,date:n5(),categoryId:e,description:n.description||e,type:"daily",childId:i,createdAt:Date.now(),...t.length>0?{tags:t}:{}},o={...P.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(n=>{n.length>2&&(o[n]=e)});let a=[n.description||"",...P.recentDescriptions].filter(Boolean).slice(0,20),s={...P,expenses:[r,...P.expenses],categoryHints:o,recentDescriptions:a};for(let e of t)s=(0,d.addRecentTag)(s,e);nF(s,"finance.undo.label.added");let l=(0,v.j)([r,...P.expenses]);iC(l),(0,c.Is)(eA,JSON.stringify(l)),n0(""),n1(""),iS(""),il.current&&clearTimeout(il.current),is(!0),il.current=setTimeout(()=>is(!1),2e3)}else n0(e),nG.current?.focus()},[P,n4,iT,n2,nF]),ts=(0,o.useCallback)(e=>{nF({...P,expenses:P.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[P,nF]),tl=(0,o.useCallback)(e=>{nF({...P,income:P.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[P,nF]),tc=(0,o.useCallback)(e=>{nF({...P,expenses:P.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[P,nF]),td=(0,o.useCallback)(()=>{let e=parseFloat(iI)||P.budget.weeklyBudget,n=parseFloat(iA)||P.budget.monthlyBudget;l({...P,budget:{...P.budget,weeklyBudget:e,monthlyBudget:n}}),iP(!0),setTimeout(()=>iP(!1),2e3)},[iI,iA,P,l]),tp=(0,o.useCallback)(()=>{let e=n_.selectedIds;0!==e.size&&(nF({...P,expenses:P.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),n_.exitSelectMode())},[n_,P,nF]),tm=(0,o.useCallback)(e=>{let n=n_.selectedIds;0!==n.size&&(nF({...P,expenses:P.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),n_.exitSelectMode())},[n_,P,nF]),tu=(0,o.useCallback)(()=>{let e=n_.selectedIds;0!==e.size&&(nF({...P,expenses:P.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),n_.exitSelectMode())},[n_,P,nF]),tx=(0,o.useMemo)(()=>["shared",...P.familyMembers.map(e=>e.id)],[P.familyMembers]);(0,j.K)({quickAddInputRef:nG,monthSelectRef:nJ,memberIds:tx,activeMemberId:nH,onSelectMember:nK,onSetTab:e=>nR(e),expenseModalOpen:iz,onOpenExpenseModal:()=>iR(!0),shortcutsOpen:nQ,onToggleShortcuts:()=>nV(e=>!e)});let tg=[{value:"week",label:r("finance.range.pill.7d")},{value:"month",label:r("finance.range.pill.month")},{value:"3m",label:r("finance.range.pill.3m")},{value:"6m",label:r("finance.range.pill.6m")},{value:"1y",label:r("finance.range.pill.year")}],tf=Math.floor(iJ).toLocaleString("pt-PT"),th=(iJ%1).toFixed(2).slice(1),tb=(0,o.useMemo)(()=>{if(0===(P.goals??[]).length)return null;let e=(0,d.recomputeGoalCurrents)(P);return{onTrack:e.goals.filter(e=>"behind"!==(0,d.goalStatus)(e)).length,total:e.goals.length}},[P]),tw=(()=>{let[e,n]=iH.split("-");return new Date(parseInt(e),parseInt(n)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),ty=(0,t.jsx)(b.TA,{data:P,activeMemberId:nH,onSelectMember:nK,onSaveData:l,t:r,locale:i}),t$=(0,o.useMemo)(()=>{let e={};for(let n of iG)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:n9(e).color}))},[iG]),tj=t$.reduce((e,n)=>e+n.value,0),tv=(0,o.useMemo)(()=>i2.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[i2]),tk=i2.length>0?tv/i2.length:0,tM=i2.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>P.budget.monthlyBudget).length,tT=(0,o.useMemo)(()=>{if(0===iG.length)return null;let e=iG.reduce((e,n)=>n.amount>e.amount?n:e,iG[0]),n={};for(let e of iG){let i=e.childId??"shared";n[i]=(n[i]??0)+e.amount}let i=Object.entries(n).sort((e,n)=>n[1]-e[1])[0],t=i?P.familyMembers.find(e=>e.id===i[0]):void 0,o=t?.name??r("finance.member.shared"),a=i?.[1]??0,s=[0,0,0,0,0,0,0];for(let e of iG){let n=new Date(e.date).getDay();s[n]=(s[n]??0)+e.amount}let l=s.indexOf(Math.max(...s)),c=iG.filter(e=>e.isReimbursable&&!e.reimbursed).reduce((e,n)=>e+n.amount,0);return{biggest:e,topMemberLabel:o,topMemberAmt:a,busiestDowKey:["sun","mon","tue","wed","thu","fri","sat"][l]??"mon",busiestDowAmt:s[l]??0,reimbursableTotal:c}},[iG,P.familyMembers,r]);return(0,t.jsxs)(c.PE,{title:r("finance.appTitle"),sidebar:ty,topBarRight:e,activeId:nH,children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(H,{children:(0,t.jsx)(b.jb,{data:P,activeMemberId:nH,onSelectMember:nK,t:r,locale:i})}),(0,t.jsxs)(U,{children:[(0,t.jsx)(Z,{children:(0,t.jsx)("div",{role:"tablist","aria-label":r("finance.nav.ariaLabel"),style:{display:"flex",alignItems:"center",gap:4},children:["overview","expenses","insights"].map(e=>{let n={overview:r("finance.tab.overview"),expenses:r("finance.tab.expenses"),insights:r("finance.tab.insights")},i={overview:0,expenses:iG.length,insights:iU.length}[e];return(0,t.jsxs)(q,{type:"button",role:"tab","aria-selected":nz===e,active:nz===e,onClick:()=>nR(e),children:[n[e],i>0&&(0,t.jsxs)(N,{children:["(",i,")"]})]},e)})})}),(0,t.jsxs)(_,{children:[0===P.familyMembers.length&&(0,t.jsx)(nA,{children:r("finance.member.empty")}),(0,t.jsx)(u.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"filter",size:13,"aria-hidden":!0}),onClick:()=>{},children:r("finance.actions.filters")}),(0,t.jsx)(u.$n,{variant:"ghost",style:{height:30},icon:(0,t.jsx)(u.In,{name:"grid",size:13,"aria-hidden":!0}),onClick:()=>nR("insights"),children:r("finance.actions.categories")}),"expenses"===nz&&(0,t.jsx)(u.$n,{variant:n_.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{n_.selectMode?n_.exitSelectMode():n_.enterSelectMode()},children:r("finance.bulk.select")}),(0,t.jsx)(u.K0,{onClick:()=>nZ(!0),title:r("finance.actions.settings"),"aria-label":r("finance.actions.settings"),active:nU,children:(0,t.jsx)(u.In,{name:"settings",size:14,"aria-hidden":!0})}),(0,t.jsx)(K,{children:(0,t.jsx)(u.K0,{onClick:()=>nV(e=>!e),title:r("finance.shortcuts.title"),"aria-label":r("finance.shortcuts.title"),active:nQ,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:c.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})})]})]}),(0,t.jsx)(G,{"aria-label":r("finance.range.label"),children:tg.map(({value:e,label:n})=>(0,t.jsx)(W,{type:"button",active:nq===e,onClick:()=>{nN(e),"month"===e&&nY(iH)},"aria-pressed":nq===e,children:n},e))}),"month"===nq&&P.expenses.length>0&&(0,t.jsx)(k.f,{data:P,selectedMonth:nD,onSelectMonth:nY,locale:i,t:r}),(0,t.jsxs)(ec,{children:["overview"===nz&&(0,t.jsxs)(ed,{children:[(0,t.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,t.jsxs)(X,{ref:nW,children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.w4.spacing.sm},children:[(0,t.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.16em",color:c.w4.colors.mainTextMuted},children:r("finance.quickAdd.title")}),(0,t.jsxs)(e6,{visible:ia&&!ib.listening,"aria-live":"polite","aria-atomic":!0,children:["✓ ",r("finance.quickAdd.added")]}),ib.listening&&(0,t.jsxs)(e5,{visible:!0,"aria-live":"polite","aria-atomic":!0,children:[(0,t.jsx)(e7,{}),r("finance.voice.listening")]})]}),(0,t.jsxs)("form",{onSubmit:to,"aria-label":r("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,t.jsx)(eX,{children:[{id:"shared",name:r("finance.member.shared"),role:"shared",color:void 0},...P.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?c.w4.colors.mainTextMuted:(0,b.a8)(P.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(e0,{type:"button",active:n2===e.id,color:i,onClick:()=>n6(e.id),children:[(0,t.jsx)(u.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(e4,{children:[(0,t.jsxs)(nl,{children:[(0,t.jsx)(e1,{ref:nG,type:"text",placeholder:r("finance.quickAdd.placeholder"),value:nX,onChange:e=>{n0(e.target.value),n1(""),ij(O.length>0),ik(-1)},onFocus:()=>{O.length>0&&!nX.trim()&&ij(!0)},onBlur:()=>{setTimeout(()=>ij(!1),150)},onKeyDown:e=>{if(i$&&0!==O.length)if("ArrowDown"===e.key)e.preventDefault(),ik(e=>Math.min(e+1,O.length-1));else if("ArrowUp"===e.key)e.preventDefault(),ik(e=>Math.max(e-1,-1));else if("Enter"===e.key&&iv>=0){e.preventDefault();let n=O[iv];if(n){let e=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(nX);n0(e?nX.slice(0,e[0].length)+n.merchant.toLowerCase():n.merchant.toLowerCase()),n1(""),ij(!1),ik(-1)}}else"Escape"===e.key&&(ij(!1),ik(-1))},"aria-label":r("finance.quickAdd.hint"),"aria-autocomplete":"list","aria-expanded":i$&&O.length>0,autoComplete:"off",inputMode:"decimal"}),i$&&O.length>0&&(0,t.jsxs)(nc,{ref:iM,role:"listbox","aria-label":r("finance.merchant.recent"),children:[(0,t.jsx)(nu,{role:"presentation",children:r("finance.merchant.recent")}),O.map((e,n)=>(0,t.jsxs)(nd,{role:"option","aria-selected":iv===n,onMouseDown:n=>{n.preventDefault();let i=/^\s*[@\w]*\s*\d[\d.,]*\s*/.exec(nX);n0(i?nX.slice(0,i[0].length)+e.merchant.toLowerCase():e.merchant.toLowerCase()),n1(""),ij(!1),ik(-1),nG.current?.focus()},children:[(0,t.jsx)(np,{children:e.merchant}),(0,t.jsxs)(nm,{children:["\xd7",e.count]})]},e.merchant))]})]}),(0,t.jsx)(e2,{value:n4||te,onChange:e=>{let n=e.target.value,i=n4||te;n1(n);let t=(0,d.parseQuickInput)(nX,P.familyMembers);t?.description&&io((0,d.proposeRuleFromOverride)(i,n,t.description))},"aria-label":r("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsx)("option",{value:e.id,children:(0,d.categoryLabel)(e,i)},e.id))}),(0,t.jsx)(e2,{value:ip,onChange:e=>{im(e.target.value),ix(!1)},"aria-label":r("finance.currency.label"),style:{maxWidth:72},children:d.FX_CURRENCIES.map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(u.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!nX.trim()||ig,children:ig?r("finance.currency.converting"):r("finance.quickAdd.add")}),ib.supported&&(0,t.jsx)(ns,{type:"button","aria-label":r("finance.voice.listening"),"aria-pressed":ib.listening,active:ib.listening,onPointerDown:()=>{iw.current=window.setTimeout(()=>{iw.current=null,iy.current=!0,(0,m.K)(30),ib.listening?ib.stop():ib.start(ta)},500)},onPointerUp:()=>{null!==iw.current&&(clearTimeout(iw.current),iw.current=null,iy.current||((0,m.K)(10),ib.listening?ib.stop():ib.start(ta))),iy.current=!1},onPointerCancel:()=>{null!==iw.current&&(clearTimeout(iw.current),iw.current=null),iy.current=!1},children:(0,t.jsx)(u.In,{name:"mic",size:16})})]}),(0,t.jsx)(v.J,{expenses:P.expenses,storedOrder:iF,lockedCategoryId:iT,onToggle:e=>iS(n=>n===e?"":e),locale:i,groupLabel:r("finance.quickAdd.frequentCategories")}),ir&&(0,t.jsxs)(e9,{children:[(0,t.jsxs)("span",{children:[r("finance.categoryRules.alwaysCategorize",{match:ir.match})," ",(0,t.jsx)("strong",{children:(n=d.DEFAULT_CATEGORIES.find(e=>e.id===ir.categoryId))?(0,d.categoryLabel)(n,i):ir.categoryId}),"?"]}),(0,t.jsx)(ne,{type:"button",accent:!0,onClick:()=>{P&&ir&&(nF({...P,categoryRules:[ir,...P.categoryRules??[]]},"finance.undo.label.added"),io(null))},children:r("finance.categoryRules.propose")}),(0,t.jsx)(ne,{type:"button",onClick:()=>io(null),children:r("finance.categoryRules.dismiss")})]}),iu&&(0,t.jsx)(e3,{style:{color:B},role:"alert",children:r("finance.currency.fxFailed")}),ti&&(0,d.parseQuickInput)(nX,P.familyMembers)&&(0,t.jsxs)(nn,{type:"button",onClick:tt,"aria-label":r("finance.recurring.makeRecurring"),children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsx)(e3,{children:r("finance.quickAdd.hint")})]})]})}),(0,t.jsx)(ep,{span:12,style:{borderLeft:`2px solid ${L}`},children:(0,t.jsxs)(eg,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(ef,{children:[(0,t.jsxs)(eh,{children:[r("finance.hero.spentIn")," ",tw," \xb7 ",i0]}),(0,t.jsxs)(eb,{children:[(0,t.jsx)(ew,{children:"€"}),(0,t.jsx)(ey,{children:tf}),(0,t.jsx)(e$,{children:th})]}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(x.Ru,{value:iX,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[r("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(iQ,i)," \xb7 €",n8(iV)]})]}),i1.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:i1,accent:i4,width:280,height:34})}),null!==tb&&(0,t.jsx)("div",{style:{marginTop:8,fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,textTransform:"uppercase",letterSpacing:"0.12em",color:tb.onTrack===tb.total?"#7fb77e":c.w4.colors.mainTextMuted},children:r("finance.goals.hero",{on:tb.onTrack,total:tb.total})})]}),(0,t.jsx)(ev,{children:(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eM,{children:[(0,t.jsx)(eT,{children:r("finance.budget.weekly")}),(0,t.jsxs)(eS,{children:["€",n8(iK.spent)," ",(0,t.jsxs)(eF,{children:["/ €",iK.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:i7,over:i7>100?i7-100:0}),(0,t.jsxs)(eC,{children:[(0,t.jsxs)("span",{children:[Math.round(i7),"% ",r("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:iK.remaining<0?B:L},children:iK.remaining>0?`€${n8(iK.remaining)} ${r("finance.budget.remaining")}`:`€${n8(Math.abs(iK.remaining))} ${r("finance.budget.over")}`})]}),(0,t.jsxs)(eM,{style:{marginTop:14},children:[(0,t.jsx)(eT,{children:r("finance.budget.monthly")}),(0,t.jsxs)(eS,{children:["€",n8(iJ)," ",(0,t.jsxs)(eF,{children:["/ €",P.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:i9,over:i9>100?i9-100:0}),(0,t.jsxs)(eC,{children:[(0,t.jsxs)("span",{children:[Math.round(i9),"% ",r("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[r("finance.budget.projected")," €",n8(iJ+(iK.projectedTotal-iK.spent))]})]})]})})]})}),(0,t.jsxs)(ep,{span:8,spanMd:12,children:[(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.charts.sixMonths")}),(0,t.jsx)(ex,{children:(0,t.jsx)(nB,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(nP,{children:[(0,t.jsx)(nO,{color:e.color}),(0,d.categoryLabel)(e,i)]},e.id))})})]}),(0,t.jsx)(x.ik,{data:i2,budget:P.budget.monthlyBudget,height:200}),(0,t.jsxs)(nx,{children:[(0,t.jsxs)(ng,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nf,{children:["€",n8(tv)]})]}),(0,t.jsxs)(ng,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nf,{children:["€",n8(tk)]})]}),(0,t.jsxs)(ng,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthsOverBudget")}),(0,t.jsxs)(nf,{children:[tM," / ",i2.length]})]}),(0,t.jsxs)(ng,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nf,{style:{color:iX>0?B:L},children:[iX>0?"+":"",iX,"%"]})]})]})]}),(0,t.jsxs)(ep,{span:4,spanMd:6,children:[(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.charts.byCategory")}),(0,t.jsx)(nI,{type:"button",onClick:()=>nR("insights"),children:r("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:t$,total:tj,size:110,centerLabel:tw.slice(0,3),centerValue:`€${n8(tj)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:t$.map(e=>{let n=n9(e.id),r=(0,d.expensesForMember)((0,d.expensesForMonth)(P.expenses,iQ),nH).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(ez,{children:[(0,t.jsx)(eR,{color:e.color}),(0,t.jsx)(eD,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eI,{children:["€",n8(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(ep,{span:5,spanMd:6,children:[(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{children:r("finance.forecast.title")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:r("finance.forecast.sub")})]}),(0,t.jsx)(D.b,{forecast:i6,firstNegDate:i3,t:r,locale:i,height:170})]}),(0,t.jsxs)(ep,{span:4,spanMd:6,children:[(0,t.jsx)(em,{children:(0,t.jsx)(eu,{children:r("finance.charts.heatmap")})}),(0,t.jsx)(x.RT,{data:i8,locale:i}),(0,t.jsxs)(nh,{children:[(0,t.jsx)("span",{children:r("finance.charts.less")}),(0,t.jsx)(nb,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:r("finance.charts.more")})]})]}),(0,t.jsxs)(ep,{span:12,children:[(0,t.jsx)(ee,{children:(0,t.jsx)(u.YZ,{children:r("finance.heatmap.title")})}),(0,t.jsx)(w.D,{matrix:i5,locale:i,t:r})]}),(0,t.jsxs)(ep,{span:3,spanMd:6,children:[(0,t.jsx)(em,{children:(0,t.jsx)(eu,{children:r("finance.charts.thisWeek")})}),(0,t.jsxs)(nw,{children:[(0,t.jsxs)(ny,{children:[(0,t.jsxs)(n$,{children:["€",n8(iK.spent)]}),(0,t.jsxs)(eF,{children:["/ €",iK.budget]})]}),(0,t.jsx)(x.kl,{spent:iK.spent,budget:iK.budget}),(0,t.jsxs)(nj,{children:[(0,t.jsx)("span",{children:r("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:r("finance.charts.actual")})]})]})]}),(0,t.jsxs)(ep,{span:9,spanMd:12,children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(u.YZ,{children:r("finance.recent.title")}),iG.length>8&&(0,t.jsx)(nI,{type:"button",onClick:()=>nR("expenses"),children:r("finance.recent.viewAll",{n:iG.length})})]}),0===iG.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:r("finance.dashboard.noRecent")}):(0,t.jsx)(eB,{"aria-label":r("finance.recent.title"),children:iG.slice(0,8).map(e=>(0,t.jsx)(ii,{exp:e,finData:P,locale:i,t:r,onDelete:ts,onToggleReimbursed:tc,compact:"compact"===iO},e.id))})]})]}),"expenses"===nz&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nE,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(u.YZ,{children:r("finance.tx.title")}),"month"===nq&&0===P.expenses.length&&(0,t.jsx)(nT,{ref:nJ,value:nD,onChange:e=>nY(e.target.value),"aria-label":r("finance.insights.month"),children:iq.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),0===iG.length&&0===iW.length?(0,t.jsx)(ep,{children:(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.tx.empty")})}):(0,t.jsx)(ep,{span:12,children:(0,t.jsx)(eB,{"aria-label":r("finance.tx.title"),children:[...iG.map(e=>({...e,_kind:"expense"})),...iW.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(ii,{exp:e,finData:P,locale:i,t:r,onDelete:ts,onToggleReimbursed:tc,compact:"compact"===iO,selectMode:n_.selectMode,selected:n_.selectedIds.has(e.id),onToggleSelect:n_.toggleId,longPressHandlers:n_.longPressHandlers,onEnterSelectMode:n_.enterSelectMode},e.id):(0,t.jsxs)(eP,{compact:"compact"===iO,children:["compact"===iO?(0,t.jsx)(eO,{color:L,"aria-hidden":!0}):(0,t.jsx)(eY,{color:L,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eH,{children:[(0,t.jsx)(eK,{children:e.source}),"compact"!==iO&&(0,t.jsxs)(eU,{children:[n7(e.date,i)," \xb7 ",r("finance.dashboard.income")]})]}),(0,t.jsxs)(eZ,{children:[(0,t.jsxs)(e_,{style:{color:L},children:["+€",n3(e.amount)]}),(0,t.jsx)(eW,{className:"delete-btn",type:"button",onClick:()=>tl(e.id),"aria-label":`${r("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===nz&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nE,{style:{marginBottom:c.w4.spacing.md},children:[(0,t.jsx)(u.YZ,{children:r("finance.insights.title")}),"month"===nq&&0===P.expenses.length&&(0,t.jsx)(nT,{value:nD,onChange:e=>nY(e.target.value),"aria-label":r("finance.insights.month"),children:iq.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,i)},e))})]}),null!==tT&&(0,t.jsxs)(ei,{children:[(0,t.jsxs)(et,{children:[(0,t.jsx)(er,{children:r("finance.kpi.biggestExpense")}),(0,t.jsxs)(eo,{children:["€",tT.biggest.amount.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ea,{children:tT.biggest.description?`${tT.biggest.description} \xb7 ${(0,d.categoryLabel)(n9(tT.biggest.categoryId),i)}`:(0,d.categoryLabel)(n9(tT.biggest.categoryId),i)})]}),(0,t.jsxs)(et,{children:[(0,t.jsx)(er,{children:r("finance.kpi.topSpender")}),(0,t.jsxs)(eo,{children:["€",tT.topMemberAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ea,{children:tT.topMemberLabel})]}),(0,t.jsxs)(et,{children:[(0,t.jsx)(er,{children:r("finance.kpi.busiestDay")}),(0,t.jsxs)(eo,{children:["€",tT.busiestDowAmt.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ea,{children:r(`finance.weekday.${tT.busiestDowKey}`)})]}),(0,t.jsxs)(et,{children:[(0,t.jsx)(er,{children:r("finance.kpi.pendingReimbursable")}),(0,t.jsxs)(eo,{children:["€",tT.reimbursableTotal.toLocaleString("pt-PT",{maximumFractionDigits:0})]}),(0,t.jsx)(ea,{children:0===tT.reimbursableTotal?"—":r("finance.kpi.pendingReimbursableSub")})]})]}),(0,t.jsxs)(es,{children:[(0,t.jsxs)(el,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.sixMonths")}),(0,t.jsx)(x.ik,{data:i2,budget:P.budget.monthlyBudget,height:180}),(0,t.jsxs)(nx,{style:{marginTop:c.w4.spacing.sm},children:[(0,t.jsxs)(ng,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.total6m")}),(0,t.jsxs)(nf,{children:["€",n8(tv)]})]}),(0,t.jsxs)(ng,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.monthlyAvg")}),(0,t.jsxs)(nf,{children:["€",n8(tk)]})]}),(0,t.jsxs)(ng,{children:[(0,t.jsx)(u.YZ,{children:r("finance.charts.trend")}),(0,t.jsxs)(nf,{style:{color:iX>0?B:L},children:[iX>0?"+":"",iX,"%"]})]})]})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.charts.byCategory")}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:t$,total:tj,size:110,centerLabel:tw.slice(0,3),centerValue:`€${n8(tj)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:t$.map(e=>{let n=n9(e.id),r=(0,d.expensesForMember)((0,d.expensesForMonth)(P.expenses,iQ),nH).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(ez,{children:[(0,t.jsx)(eR,{color:e.color}),(0,t.jsx)(eD,{children:(0,d.categoryLabel)(n,i)}),(0,t.jsxs)(eI,{children:["€",n8(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(x.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]})]}),(0,t.jsxs)(ep,{span:12,children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.monthlyTrend")}),(0,t.jsx)(it,{data:P,months:iq.slice(0,6),locale:i,t:r})]}),(0,t.jsxs)(ep,{span:12,children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.title")}),0===iU.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:iU.map((e,n)=>(0,t.jsxs)(eG,{itype:e.type,children:[(0,t.jsx)(eJ,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:r(e.messageKey,e.params)}),e.memberId&&(()=>{let n=P.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=P.familyMembers.indexOf(n);return(0,t.jsxs)(eQ,{children:[(0,t.jsx)(u.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(ep,{span:12,children:[(0,t.jsx)(u.YZ,{style:{marginBottom:c.w4.spacing.sm},children:r("finance.insights.anomalies")}),0===iZ.length?(0,t.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:iZ.map(e=>(0,t.jsxs)(eG,{itype:e.type,children:[(0,t.jsx)(eJ,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:r(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(eV,{type:"button",title:r("finance.insights.anomalies.dismiss"),"aria-label":r("finance.insights.anomalies.dismiss"),onClick:()=>{i_(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]}),(0,t.jsx)(I.z,{}),(0,t.jsx)(C.J,{}),(0,t.jsx)(S.n,{}),(0,t.jsx)(F.f,{}),(0,t.jsx)(z.b,{}),(0,t.jsx)(E.K,{}),(0,t.jsx)(R.S,{})]})]}),(0,t.jsxs)(nL,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),iz&&(0,t.jsx)(ie,{finData:P,activeMemberId:nH,locale:i,t:r,onClose:()=>iR(!1),onSubmit:iD}),(0,t.jsx)(y.S,{labelKey:e8,onUndo:()=>{nC()},onDismiss:()=>nS(null),t:r}),n_.selectMode&&"expenses"===nz&&(0,t.jsx)(M.S,{selectionCount:n_.selectedIds.size,visibleIds:iG.map(e=>e.id),selectedIds:n_.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:i,t:r,onCancel:n_.exitSelectMode,onSelectAll:()=>n_.selectAll(iG.map(e=>e.id)),onCategorise:tm,onDelete:tp,onMarkReimbursed:tu}),nQ&&(0,t.jsx)($.m,{t:r,onClose:()=>nV(!1)}),nU&&(0,t.jsx)(J,{onClick:()=>nZ(!1),role:"dialog","aria-modal":"true","aria-label":r("finance.actions.settings"),children:(0,t.jsxs)(Q,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(u.YZ,{children:r("finance.settings.title")}),(0,t.jsx)(u.K0,{onClick:()=>nZ(!1),title:r("finance.actions.settings"),children:(0,t.jsx)(u.In,{name:"close",size:16})})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,t.jsxs)(nv,{children:[(0,t.jsx)(nk,{htmlFor:"drawer-weekly-budget",children:r("finance.settings.weeklyBudget")}),(0,t.jsx)(nM,{id:"drawer-weekly-budget",type:"number",min:"1",placeholder:String(P.budget.weeklyBudget),value:iI,onChange:e=>iE(e.target.value)})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(nk,{htmlFor:"drawer-monthly-budget",children:r("finance.settings.monthlyBudget")}),(0,t.jsx)(nM,{id:"drawer-monthly-budget",type:"number",min:"1",placeholder:String(P.budget.monthlyBudget),value:iA,onChange:e=>iL(e.target.value)})]}),(0,t.jsx)(u.$n,{variant:"primary",onClick:()=>{td(),nZ(!1)},style:{height:44},children:iB?r("finance.settings.saved"):r("finance.settings.save")})]})]})}),ic&&(0,t.jsx)(ni,{onClick:()=>id(null),role:"dialog","aria-modal":"true","aria-label":r("finance.recurring.makeRecurring"),children:(0,t.jsxs)(nt,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(u.YZ,{children:["↻ ",r("finance.recurring.makeRecurring")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nr,{children:r("finance.recurring.frequency")}),(0,t.jsx)(no,{children:["weekly","monthly","yearly"].map(e=>(0,t.jsx)(na,{type:"button",active:ic.cadence===e,onClick:()=>id(n=>n?{...n,cadence:e}:null),children:r(`finance.recurring.cadence.${e}`)},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nr,{children:r("finance.recurring.firstDue")}),(0,t.jsx)("input",{type:"date",value:ic.firstDue,onChange:e=>id(n=>n?{...n,firstDue:e.target.value}:null),style:{width:"100%",background:"transparent",border:`1px solid ${c.w4.colors.border}`,borderRadius:c.w4.borderRadius.sm,color:c.w4.colors.mainText,padding:"6px 8px",fontSize:13,fontFamily:c.w4.typography.fontFamilyMono}})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm,justifyContent:"flex-end"},children:[(0,t.jsx)(u.$n,{variant:"ghost",onClick:()=>id(null),children:r("finance.recurring.cancel")}),(0,t.jsx)(u.$n,{variant:"primary",onClick:tr,disabled:!ic.firstDue,children:r("finance.recurring.confirm")})]})]})})]})},{}))}}]);