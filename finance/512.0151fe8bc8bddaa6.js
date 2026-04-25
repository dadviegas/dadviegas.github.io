"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,t){var i=t(2727);n.createRoot=i.createRoot,i.hydrateRoot},3611(e,n,t){var i=t(5723),a=t(8997),o=t(7991),s=t(6859),r=t.n(s),l=t(2799),d=t(9874),c=t(3152),p=t(3759),m=t(789),x=t(8395),u=t(1496),h=t(8170),g=t(4041),f=t(948),b=t(719),w=t(9546),y=t(5854),j=t(3616),$=t(6579),v=t(8989),M=t(6376),k=t(9146);let T="#7fb77e",S="#f85149",F=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,C=r().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${F} 0.25s ease both;
  overflow: hidden;
`,z=r().div`
  display: block;
  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,I=r().div`
  display: none;
  @media (min-width: ${d.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,D=r().div`
  padding: 0 ${d.w4.spacing.md};
  border-bottom: 1px solid ${d.w4.colors.border};
  background: ${d.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,E=r().div`
  flex: 1;
  min-width: 0;
`,R=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.xs};
  flex-shrink: 0;
`,A=r().div`
  padding: ${d.w4.spacing.xs} ${d.w4.spacing.md};
  border-bottom: 1px solid ${d.w4.colors.border};
  background: ${d.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,B=r().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.mainTextMuted};
  flex-shrink: 0;
  user-select: none;
`,L=r().div`
  flex: 1;
  overflow-y: auto;
  padding: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.lg};
  }
`,P=r().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,O=r().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  border-left: 2px solid ${T};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${d.w4.colors.mainTextMuted};
    border-left-color: ${T};
  }

  @media (min-width: ${d.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${d.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,Y=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${d.w4.spacing.sm};
  gap: ${d.w4.spacing.sm};
`,q=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
`,H=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,U=r().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  border-left: 2px solid ${T};
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,_=r().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,N=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
`,Z=r().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,G=r().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,K=r().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,W=r().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,J=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,Q=r().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${d.w4.breakpoints.md}) {
    width: 260px;
  }
`,V=r().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,X=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,ee=r().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.mainTextMuted};
`,en=r().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,et=r().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,ei=r().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,ea=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding: 4px 0;
`,eo=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,es=r().span`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,er=r().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,el="finance:list-density",ed="finance:quick-categories",ec=r().input`
  appearance: none;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 1.5px solid ${d.w4.colors.mainTextMuted};
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
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,ep=r().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,em=r().li`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding: ${({compact:e})=>e?"0 8px":"10px 8px"};
  border-radius: ${d.w4.borderRadius.md};
  transition: background 120ms ease, min-height 150ms ease, padding 150ms ease;
  cursor: default;
  /* Comfortable: 48px natural height; Compact: 32px visible but ≥44px touch target via padding */
  min-height: ${({compact:e})=>e?"44px":"48px"};

  &:hover { background: ${d.w4.colors.sidebarHover}; }
  @media (hover: hover) and (pointer: fine) {
    &:hover .delete-btn { opacity: 1; }
  }
`,ex=r().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eu=r().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${d.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eh=r().div`
  flex: 1;
  min-width: 0;
`,eg=r().div`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ef=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,eb=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  flex-shrink: 0;
`,ew=r().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,ey=r().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${T}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?T:"#facc15"};
  white-space: nowrap;
`,ej=r().button`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${T}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?T:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${T}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,e$=r().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainTextMuted};
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
    color: ${S};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,ev=r().div`
  display: flex;
  align-items: flex-start;
  gap: ${d.w4.spacing.sm};
  padding: 10px ${d.w4.spacing.sm};
  border-radius: ${d.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${T}14`:d.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${T}44`:d.w4.colors.border};
  font-size: 13px;
  color: ${d.w4.colors.mainText};
`,eM=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?S:"warning"===e?"#facc15":"success"===e?T:d.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,ek=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;r()(O)`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`;let eT=r().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,eS=r().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:n})=>e?n:d.w4.colors.border};
  background: ${({active:e,color:n})=>e?`${n}22`:d.w4.colors.mainBg};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  cursor: pointer;
  transition: all 120ms ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:focus-visible { outline: 2px solid ${d.w4.colors.accent}; outline-offset: 2px; }
`,eF=r().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${d.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,eC=r().input`
  flex: 1;
  min-width: 160px;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${d.w4.spacing.sm};
  height: 44px;
  font-family: ${d.w4.typography.fontFamily};
  outline: none;
  transition: border-color 120ms ease;

  &::placeholder { color: ${d.w4.colors.mainTextMuted}; }
  &:focus {
    border-color: ${d.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,ez=r().select`
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${d.w4.spacing.sm};
  height: 44px;
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;

  &:focus { border-color: ${d.w4.colors.accent}; }
  option { background: ${d.w4.colors.surface}; }
`,eI=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${T};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,eD=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,eE=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.md};
  margin-top: ${d.w4.spacing.sm};
  padding-top: ${d.w4.spacing.sm};
  border-top: 1px solid ${d.w4.colors.border};
`,eR=r().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eA=r().div`
  font-size: 18px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,eB=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,eL=r().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,eP=r().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,eO=r().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,eY=r().span`
  font-size: 22px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,eq=r().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};

  span.fin { color: ${T}; }
`,eH=r().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eU=r().label`
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
`,e_=r().input`
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 0 ${d.w4.spacing.sm};
  height: 44px;
  width: 100%;
  outline: none;
  transition: border-color 120ms ease;

  &:focus {
    border-color: ${d.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,eN=r().select`
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  padding: 6px ${d.w4.spacing.sm};
  outline: none;
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamilyMono};
  transition: border-color 120ms ease;
  height: 36px;

  &:focus { border-color: ${d.w4.colors.accent}; }
  option { background: ${d.w4.colors.surface}; }
`,eZ=r().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eG=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,eK=r().div`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (min-width: ${d.w4.breakpoints.md}) {
    width: 120px;
  }
`,eW=r().div`
  flex: 1;
  height: 8px;
  background: ${d.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eJ=r().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eQ=r().div`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  width: 60px;
  text-align: right;
  flex-shrink: 0;

  @media (min-width: ${d.w4.breakpoints.md}) {
    width: 72px;
  }
`,eV=r().button`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.accent};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 120ms ease;

  &:hover { color: ${d.w4.colors.accentHover??d.w4.colors.accent}; }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,eX=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
`,e0=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.accent};
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
`,e4=r().footer`
  flex-shrink: 0;
  padding: ${d.w4.spacing.xs} ${d.w4.spacing.md};
  border-top: 1px solid ${d.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  /* Respect iOS safe area at bottom */
  padding-bottom: max(${d.w4.spacing.xs}, env(safe-area-inset-bottom));

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,e1=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,e2=r().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,e8=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,e6=r().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: ${d.w4.spacing.md};
  padding-bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom));
  z-index: 1000;
  animation: ${F} 0.15s ease;

  @media (min-width: ${d.w4.breakpoints.md}) {
    align-items: center;
  }
`,e3=r().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg} ${d.w4.borderRadius.lg} ${d.w4.borderRadius.md} ${d.w4.borderRadius.md};
  border-left: 2px solid ${T};
  width: 100%;
  max-width: 560px;
  max-height: 80dvh;
  overflow-y: auto;
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    border-radius: ${d.w4.borderRadius.lg};
    max-height: calc(100dvh - ${d.w4.spacing.xl});
  }
`,e5=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,e7=r().button`
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainTextMuted};
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
    border-color: ${d.w4.colors.borderStrong??d.w4.colors.mainTextMuted};
    color: ${d.w4.colors.mainText};
  }
`,e9=r().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ne=r().div`
  display: inline-flex;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nn=r().button`
  background: ${({active:e})=>e?d.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
`,nt=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.xs};
`,ni=r().button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({active:e,color:n})=>e?`${n}22`:d.w4.colors.mainBg};
  border: 1px solid ${({active:e,color:n})=>e?n:d.w4.colors.border};
  color: ${({active:e})=>e?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
  border-radius: 999px;
  padding: 6px 10px 6px 6px;
  min-height: 44px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease;
`,na=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,no=r().input`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${d.w4.spacing.sm};
  font-family: ${d.w4.typography.fontFamily};
  outline: none;
  transition: border-color 120ms ease;

  &::placeholder { color: ${d.w4.colors.mainTextMuted}; }
  &:focus {
    border-color: ${d.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(0.7);
    cursor: pointer;
  }
`,ns=r().select`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${d.w4.spacing.sm};
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;

  &:focus { border-color: ${d.w4.colors.accent}; }
  option { background: ${d.w4.colors.surface}; }
`,nr=r().div`
  display: flex;
  justify-content: flex-end;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};
`;function nl(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function nd(e){return Math.round(e).toLocaleString("pt-PT")}function nc(){return new Date().toISOString().slice(0,10)}function np(e,n){let[t,i,a]=e.split("-").map(Number);return new Date(t,i-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function nm(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function nx({finData:e,activeMemberId:n,locale:t,t:a,onClose:s,onSubmit:r}){let[l,p]=(0,o.useState)(""),[m,u]=(0,o.useState)(""),[h,f]=(0,o.useState)("other"),[w,y]=(0,o.useState)(nc()),[j,$]=(0,o.useState)("single"),[v,M]=(0,o.useState)(n),[k,T]=(0,o.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id));(0,o.useEffect)(()=>{m.trim()&&f((0,c.guessCategory)(m,e.categoryHints))},[m,e.categoryHints]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]);let S=parseFloat(l.replace(",","."))||0,F=k.length,C="split"===j&&F>0?S/F:S,z=S>0&&!!w&&("single"===j||"split"===j&&F>0),I=[{id:"shared",name:a("finance.member.shared"),color:d.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,i.jsx)(e6,{onClick:s,role:"dialog","aria-modal":"true","aria-label":a("finance.quickAdd.newExpense"),children:(0,i.jsxs)(e3,{onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)(e5,{children:[(0,i.jsxs)(x.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,i.jsx)(e7,{type:"button",onClick:s,"aria-label":"Close",children:"\xd7"})]}),(0,i.jsxs)("form",{onSubmit:n=>{let t;if(n.preventDefault(),!z)return;let i=m.trim(),a=Date.now(),o={...e.categoryHints};if(i&&i.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(o[e]=h)}),"single"===j)t=[{id:(0,g.z)(),amount:S,date:w,categoryId:h,description:i||h,type:"daily",childId:"shared"===v?void 0:v,createdAt:a}];else{let e=Math.round(S/F*100)/100,n=Math.round((S-e*F)*100)/100;t=k.map((t,o)=>({id:(0,g.z)(),amount:0===o?e+n:e,date:w,categoryId:h,description:i?`${i} (1/${F})`:h,type:"daily",childId:t,createdAt:a+o}))}r(t,o,i)},style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.md},children:[(0,i.jsxs)(e9,{children:[(0,i.jsxs)(eH,{children:[(0,i.jsx)(eU,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,i.jsx)(no,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,i.jsxs)(eH,{children:[(0,i.jsx)(eU,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,i.jsx)(no,{id:"exp-date",type:"date",value:w,onChange:e=>y(e.target.value)})]})]}),(0,i.jsxs)(eH,{children:[(0,i.jsx)(eU,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,i.jsx)(no,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:m,onChange:e=>u(e.target.value)})]}),(0,i.jsxs)(eH,{children:[(0,i.jsx)(eU,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,i.jsx)(ns,{id:"exp-cat",value:h,onChange:e=>f(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===t?e.labelPt:e.labelEn]},e.id))})]}),(0,i.jsxs)(eH,{children:[(0,i.jsx)(eU,{children:a("finance.modal.assign")}),(0,i.jsxs)(ne,{role:"tablist",children:[(0,i.jsx)(nn,{type:"button",active:"single"===j,onClick:()=>$("single"),children:a("finance.modal.member")}),(0,i.jsx)(nn,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,i.jsx)(nt,{style:{marginTop:d.w4.spacing.sm},children:I.map(e=>(0,i.jsxs)(ni,{type:"button",active:v===e.id,color:e.color,onClick:()=>M(e.id),children:[(0,i.jsx)(x.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(nt,{style:{marginTop:d.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let t=(0,b.a8)(e,n),a=k.includes(e.id);return(0,i.jsxs)(ni,{type:"button",active:a,color:t,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,i.jsx)(x.eu,{member:{id:e.id,name:e.name,role:e.role,color:t},size:16}),e.name]},e.id)})}),F>0&&S>0&&(0,i.jsx)(na,{style:{marginTop:d.w4.spacing.xs},children:a("finance.modal.splitEach",{n:F,amount:nl(C)})})]})]}),(0,i.jsxs)(nr,{children:[(0,i.jsx)(x.$n,{type:"button",variant:"ghost",onClick:s,children:a("finance.member.cancel")}),(0,i.jsx)(x.$n,{type:"submit",variant:"primary",disabled:!z,children:a("finance.quickAdd.add")})]})]})]})})}function nu({exp:e,finData:n,locale:t,t:a,onDelete:o,onToggleReimbursed:s,compact:r=!1,selectMode:l=!1,selected:c=!1,onToggleSelect:p,longPressHandlers:m}){let u=nm(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),g=h>=0?n.familyMembers[h]:null,f=g?(0,b.a8)(g,h):d.w4.colors.mainTextMuted,w=m?m(e.id):null,y=n=>{l&&p&&"INPUT"!==n.target.tagName&&p(e.id)},j=e.isReimbursable&&!l?s?(0,i.jsx)(ej,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,i.jsx)(ey,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,$=l?null:(0,i.jsx)(e$,{className:"delete-btn",type:"button",onClick:()=>o(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),v=l?(0,i.jsx)(ec,{type:"checkbox",checked:c,"aria-label":e.description,onChange:()=>p?.(e.id),onClick:e=>e.stopPropagation()}):null,M=l?{background:c?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:c?"1px solid rgba(127,183,126,0.35)":"none"}:{};return r?(0,i.jsxs)(em,{compact:!0,style:M,onClick:y,...w??{},children:[v,(0,i.jsx)(ex,{color:u.color,"aria-hidden":!0}),(0,i.jsx)(eh,{children:(0,i.jsxs)(eg,{style:{display:"flex",alignItems:"center",gap:6},children:[g?(0,i.jsx)(x.eu,{member:{id:g.id,name:g.name,role:g.role,color:f},size:16}):null,(0,i.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||("pt"===t?u.labelPt:u.labelEn)})]})}),(0,i.jsxs)(eb,{children:[j,(0,i.jsxs)(ew,{children:["−€",nl(e.amount)]}),$]})]}):(0,i.jsxs)(em,{style:M,onClick:y,...w??{},children:[v,(0,i.jsx)(eu,{color:u.color,children:(0,i.jsx)("span",{"aria-hidden":!0,children:u.icon})}),(0,i.jsxs)(eh,{children:[(0,i.jsx)(eg,{children:e.description||("pt"===t?u.labelPt:u.labelEn)}),(0,i.jsxs)(ef,{children:[g?(0,i.jsx)(x.eu,{member:{id:g.id,name:g.name,role:g.role,color:f},size:14}):null,(0,i.jsx)("span",{children:"pt"===t?u.labelPt:u.labelEn}),(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:np(e.date,t)}),"monthly"===e.type&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:a("finance.modal.monthlyLabel")})]})]})]}),(0,i.jsxs)(eb,{children:[j,"recurring"===e.type&&(0,i.jsx)(ey,{children:a("finance.tx.recurring")}),(0,i.jsxs)(ew,{children:["−€",nl(e.amount)]}),$]})]})}function nh({expenses:e,total:n,locale:t}){let a=Object.entries((0,o.useMemo)(()=>{let n={};for(let t of e)n[t.categoryId]=(n[t.categoryId]??0)+t.amount;return n},[e])).map(([e,n])=>({cat:nm(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===a.length?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:"—"}):(0,i.jsx)(eZ,{children:a.map(({cat:e,amt:a})=>{let o=n>0?a/n*100:0;return(0,i.jsxs)(eG,{children:[(0,i.jsxs)(eK,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===t?e.labelPt:e.labelEn]}),(0,i.jsx)(eW,{children:(0,i.jsx)(eJ,{pct:o,color:e.color})}),(0,i.jsxs)(eQ,{children:["€",a.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function ng({data:e,months:n,locale:t,t:a}){let o=n.map(n=>(0,c.computeMonthlySummary)(e,n)),s=Math.max(...o.map(e=>e.totalExpenses),1);return o.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,i.jsx)(eZ,{children:o.map(e=>{let n=e.totalExpenses/s*100,[,a]=e.month.split("-"),o=new Date(parseInt(e.month.slice(0,4)),parseInt(a)-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"});return(0,i.jsxs)(eG,{children:[(0,i.jsx)(eK,{style:{width:80},children:o}),(0,i.jsx)(eW,{children:(0,i.jsx)(eJ,{pct:n,color:d.w4.colors.accent})}),(0,i.jsxs)(eQ,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}let nf=document.getElementById("root");if(!nf)throw Error("Root element #root not found");(0,a.createRoot)(nf).render((0,i.jsx)(function({topBarRight:e}){let[n]=(0,h.Ym)(),t=(0,o.useMemo)(()=>(0,h.Nx)(n,f.A),[n]),{data:a,loaded:s,save:r}=(0,c.useFinance)(),l=a??{...c.EMPTY_FINANCE_DATA},{canUndo:F,latestLabelKey:ec,undo:ey}=(0,c.useUndo)(),[ej,eZ]=(0,o.useState)(null),eG=(0,o.useCallback)(async(e,n)=>{(0,c.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:l,labelKey:n,ts:Date.now()}),eZ(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await r(e)},[l,r]),eK=(0,o.useCallback)(async()=>{let e=ey();e&&(eZ("finance.undo.label.reverted"),await r(e),setTimeout(()=>eZ(null),2500))},[ey,r]),[eW,eJ]=(0,o.useState)("overview"),[eQ,e6]=(0,o.useState)(()=>(0,c.thisMonthKey)()),[e3,e5]=(0,o.useState)("shared"),e7=(0,k.E)();(0,o.useEffect)(()=>{"expenses"!==eW&&e7.selectMode&&e7.exitSelectMode()},[eW]);let{range:e9,setRange:ne}=(0,p.H)("month"),nn=(0,o.useRef)(null),nt=(0,o.useRef)(null),ni=(0,o.useRef)(null),[na,no]=(0,o.useState)(!1),[ns,nr]=(0,o.useState)(""),[nf,nb]=(0,o.useState)(""),[nw,ny]=(0,o.useState)("shared"),[nj,n$]=(0,o.useState)(!1),nv=(0,o.useRef)(null),[nM,nk]=(0,o.useState)(""),[nT,nS]=(0,o.useState)(null);(0,o.useEffect)(()=>{(0,d.PL)(ed).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&nS(n)}catch{}})},[]);let[nF,nC]=(0,o.useState)(!1),nz=(0,o.useCallback)((e,n,t)=>{let i=t?[t,...l.recentDescriptions].filter(Boolean).slice(0,20):l.recentDescriptions;eG({...l,expenses:[...e,...l.expenses],categoryHints:n,recentDescriptions:i},"finance.undo.label.added"),nC(!1),nv.current&&clearTimeout(nv.current),n$(!0),nv.current=setTimeout(()=>n$(!1),2e3)},[l,eG]),[nI,nD]=(0,o.useState)(""),[nE,nR]=(0,o.useState)(""),[nA,nB]=(0,o.useState)(!1),[nL,nP]=(0,o.useState)("comfortable");(0,o.useEffect)(()=>{(0,d.PL)(el).then(e=>{("compact"===e||"comfortable"===e)&&nP(e)})},[]);let nO=(0,o.useCallback)(()=>{let e="comfortable"===nL?"compact":"comfortable";nP(e),(0,d.Is)(el,e)},[nL]),nY=(0,o.useMemo)(()=>(0,c.thisMonthKey)(),[]),nq=(0,o.useMemo)(()=>(0,c.computeWeeklyStatus)(l),[l]);(0,o.useMemo)(()=>(0,c.computeMonthlySummary)(l,eQ),[l,eQ]);let nH=(0,o.useMemo)(()=>(0,c.generateInsightsWithMembers)(l),[l]),nU=(0,o.useMemo)(()=>(0,c.availableMonths)(l),[l]),n_=(0,o.useMemo)(()=>(0,c.filterExpensesByRange)(l.expenses,e9,eQ),[l.expenses,e9,eQ]),nN=(0,o.useMemo)(()=>(0,c.filterIncomeByRange)(l.income,e9,eQ),[l.income,e9,eQ]),nZ=(0,o.useMemo)(()=>(0,c.expensesForMember)(n_,e3),[n_,e3]),nG=(0,o.useMemo)(()=>(0,c.monthlyTotalByMember)(l,e3,nY),[l,e3,nY]),nK=(0,o.useMemo)(()=>(function(e){let[n,t]=e.split("-").map(Number),i=new Date(n,t-2,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`})(nY),[nY]),nW=(0,o.useMemo)(()=>(0,c.monthlyTotalByMember)(l,e3,nK),[l,e3,nK]),nJ=(0,o.useMemo)(()=>0===nW?0:Math.round((nG-nW)/nW*100),[nG,nW]),nQ=(0,o.useMemo)(()=>{if("all"===e3)return t("finance.member.all");if("shared"===e3)return t("finance.hero.family");let e=l.familyMembers.find(e=>e.id===e3);return e?.name??t("finance.hero.family")},[e3,l.familyMembers,t]),nV=(0,o.useMemo)(()=>{if("all"===e3||"shared"===e3)return d.w4.colors.mainTextMuted;let e=l.familyMembers.findIndex(e=>e.id===e3);return -1===e?T:(0,b.a8)(l.familyMembers[e],e)},[e3,l.familyMembers]),nX=(0,o.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,t)=>{let i=new Date(e);i.setDate(e.getDate()-(5-t)*7-e.getDay()),i.setHours(0,0,0,0);let a=new Date(i);return a.setDate(i.getDate()+7),(0,c.expensesForMember)(l.expenses,e3).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=i&&n<a}).reduce((e,n)=>e+n.amount,0)})},[l.expenses,e3]),n0=(0,o.useMemo)(()=>(function(e,n){let t=[],i=new Date;for(let e=5;e>=0;e--){let n=new Date(i.getFullYear(),i.getMonth()-e,1);t.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return t.map(t=>{let i=(0,c.expensesForMonth)(e.expenses,t),o=(0,c.expensesForMember)(i,n),s={};for(let e of o)s[e.categoryId]=(s[e.categoryId]??0)+e.amount;let r=Object.values(s).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(t.slice(0,4)),parseInt(t.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(s).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:nm(e).color})),over:r>a?r-a:0}})})(l,e3),[l,e3]),n4=(0,o.useMemo)(()=>(function(e,n){let t=new Date,i=[];for(let a=89;a>=0;a--){let o=new Date(t);o.setDate(t.getDate()-a);let s=o.toISOString().slice(0,10),r=s.slice(0,7),l=(0,c.expensesForMember)(e.expenses.filter(e=>e.date===s),n).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,r).reduce((e,n)=>e+n.amount,0)/30;i.push({inc:d,exp:l})}return i})(l,e3),[l,e3]),n1=(0,o.useMemo)(()=>{let e,n;return e=new Date,n=l.expenses.length>0?l.expenses.reduce((e,n)=>e+n.amount,0)/l.expenses.length:20,Array.from({length:91},(t,i)=>{let a=new Date(e);a.setDate(e.getDate()-90+i);let o=a.toISOString().slice(0,10),s=(0,c.expensesForMember)(l.expenses.filter(e=>e.date===o),e3).reduce((e,n)=>e+n.amount,0);if(0===s)return 0;let r=s/n;return r<.5?1:r<1?2:r<2?3:4})},[l,e3]),n2=nq.budget>0?nq.spent/nq.budget*100:0,n8=l.budget.monthlyBudget>0?nG/l.budget.monthlyBudget*100:0,n6=(0,o.useMemo)(()=>{let e=(0,c.parseQuickInput)(ns,l.familyMembers);return e?.description?(0,c.guessCategory)(e.description,l.categoryHints):"other"},[ns,l.categoryHints,l.familyMembers]),n3=nf||nM||n6;(0,o.useEffect)(()=>{let e=(0,c.parseQuickInput)(ns,l.familyMembers);e?.memberId&&ny(e.memberId)},[ns,l.familyMembers]);let n5=(0,o.useCallback)(e=>{e.preventDefault();let n=(0,c.parseQuickInput)(ns,l.familyMembers);if(!n)return;let t=n3||"other",i=n.memberId??("shared"!==nw?nw:void 0),a={id:(0,g.z)(),amount:n.amount,date:nc(),categoryId:t,description:n.description||t,type:"daily",childId:i,createdAt:Date.now()},o={...l.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(o[e]=t)});let s=[n.description||"",...l.recentDescriptions].filter(Boolean).slice(0,20),r=[a,...l.expenses];eG({...l,expenses:r,categoryHints:o,recentDescriptions:s},"finance.undo.label.added");let p=(0,$.j)(r);nS(p),(0,d.Is)(ed,JSON.stringify(p)),nr(""),nb(""),nk(""),nv.current&&clearTimeout(nv.current),n$(!0),nv.current=setTimeout(()=>n$(!1),2e3)},[ns,n3,nw,l,eG]),n7=(0,o.useCallback)(e=>{eG({...l,expenses:l.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[l,eG]),n9=(0,o.useCallback)(e=>{eG({...l,income:l.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[l,eG]),te=(0,o.useCallback)(e=>{eG({...l,expenses:l.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[l,eG]),tn=(0,o.useCallback)(()=>{let e=parseFloat(nI)||l.budget.weeklyBudget,n=parseFloat(nE)||l.budget.monthlyBudget;r({...l,budget:{...l.budget,weeklyBudget:e,monthlyBudget:n}}),nB(!0),setTimeout(()=>nB(!1),2e3)},[nI,nE,l,r]),tt=(0,o.useCallback)(()=>{let e=e7.selectedIds;0!==e.size&&(eG({...l,expenses:l.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),e7.exitSelectMode())},[e7,l,eG]),ti=(0,o.useCallback)(e=>{let n=e7.selectedIds;0!==n.size&&(eG({...l,expenses:l.expenses.map(t=>n.has(t.id)?{...t,categoryId:e}:t)},"finance.undo.label.edited"),e7.exitSelectMode())},[e7,l,eG]),ta=(0,o.useCallback)(()=>{let e=e7.selectedIds;0!==e.size&&(eG({...l,expenses:l.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),e7.exitSelectMode())},[e7,l,eG]),to=(0,o.useMemo)(()=>["shared",...l.familyMembers.map(e=>e.id)],[l.familyMembers]);(0,j.K)({quickAddInputRef:nt,monthSelectRef:ni,memberIds:to,activeMemberId:e3,onSelectMember:e5,onSetTab:e=>eJ(e),expenseModalOpen:nF,onOpenExpenseModal:()=>nC(!0),shortcutsOpen:na,onToggleShortcuts:()=>no(e=>!e)});let ts=[{value:"overview",label:t("finance.tab.overview")},{value:"expenses",label:`${t("finance.tab.expenses")} ${nZ.length>0?`(${nZ.length})`:""}`},{value:"insights",label:`${t("finance.tab.insights")} ${nH.length>0?`(${nH.length})`:""}`},{value:"settings",label:t("finance.tab.settings")}],tr=[{value:"week",label:t("finance.range.week")},{value:"month",label:t("finance.range.month")},{value:"3m",label:t("finance.range.3m")},{value:"6m",label:t("finance.range.6m")},{value:"1y",label:t("finance.range.1y")},{value:"all",label:t("finance.range.all")}],tl=Math.floor(nG).toLocaleString("pt-PT"),td=(nG%1).toFixed(2).slice(1),tc=(()=>{let[e,t]=nY.split("-");return new Date(parseInt(e),parseInt(t)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),tp=(0,i.jsx)(b.TA,{data:l,activeMemberId:e3,onSelectMember:e5,onSaveData:r,t:t,locale:n}),tm=(0,o.useMemo)(()=>{let e={};for(let n of nZ)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:nm(e).color}))},[nZ]),tx=tm.reduce((e,n)=>e+n.value,0),tu=(0,o.useMemo)(()=>n0.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[n0]),th=n0.length>0?tu/n0.length:0,tg=n0.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>l.budget.monthlyBudget).length;return(0,i.jsxs)(d.PE,{title:t("finance.appTitle"),sidebar:tp,topBarRight:e,activeId:e3,children:[(0,i.jsxs)(C,{children:[(0,i.jsx)(z,{children:(0,i.jsx)(b.jb,{data:l,activeMemberId:e3,onSelectMember:e5,t:t,locale:n})}),(0,i.jsxs)(D,{children:[(0,i.jsx)(E,{children:(0,i.jsx)(x.tU,{tabs:ts,value:eW,onChange:eJ,"aria-label":t("finance.nav.ariaLabel")})}),(0,i.jsxs)(R,{children:[0===l.familyMembers.length&&(0,i.jsx)(e0,{children:t("finance.member.empty")}),(0,i.jsx)(x.K0,{onClick:nO,title:"comfortable"===nL?t("finance.density.compact"):t("finance.density.comfortable"),"aria-label":t("finance.density.toggle"),active:"compact"===nL,children:(0,i.jsx)(x.In,{name:"comfortable"===nL?"list":"menu",size:14,"aria-hidden":!0})}),(0,i.jsx)(I,{children:(0,i.jsx)(x.K0,{onClick:()=>no(e=>!e),title:t("finance.shortcuts.title"),"aria-label":t("finance.shortcuts.title"),active:na,children:(0,i.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:d.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})}),"expenses"===eW&&(0,i.jsx)(x.$n,{variant:e7.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{e7.selectMode?e7.exitSelectMode():e7.enterSelectMode()},children:t("finance.bulk.select")}),(0,i.jsxs)(x.$n,{variant:"ghost",style:{height:30},onClick:()=>nC(!0),children:[(0,i.jsx)(x.In,{name:"plus",size:13,"aria-hidden":!0}),t("finance.quickAdd.newExpense")]})]})]}),"settings"!==eW&&(0,i.jsxs)(A,{"aria-label":t("finance.range.label"),children:[(0,i.jsx)(B,{children:t("finance.range.label")}),(0,i.jsx)(x.tU,{tabs:tr,value:e9,onChange:e=>{ne(e),"month"===e&&e6(nY)},"aria-label":t("finance.range.label")})]}),"settings"!==eW&&"month"===e9&&l.expenses.length>0&&(0,i.jsx)(v.f,{data:l,selectedMonth:eQ,onSelectMonth:e6,locale:n,t:t}),(0,i.jsxs)(L,{children:["overview"===eW&&(0,i.jsxs)(P,{children:[(0,i.jsx)(O,{span:12,style:{borderLeft:`2px solid ${T}`},children:(0,i.jsxs)(U,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,i.jsxs)(_,{children:[(0,i.jsxs)(N,{children:[t("finance.hero.spentIn")," ",tc," \xb7 ",nQ]}),(0,i.jsxs)(Z,{children:[(0,i.jsx)(G,{children:"€"}),(0,i.jsx)(K,{children:tl}),(0,i.jsx)(W,{children:td})]}),(0,i.jsxs)(J,{children:[(0,i.jsx)(u.Ru,{value:nJ,format:"pct",decimals:0}),(0,i.jsxs)("span",{children:[t("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(nK,n)," \xb7 €",nd(nW)]})]}),nX.some(e=>e>0)&&(0,i.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,i.jsx)(u.OW,{points:nX,accent:nV,width:280,height:34})})]}),(0,i.jsx)(Q,{children:(0,i.jsxs)(V,{children:[(0,i.jsxs)(X,{children:[(0,i.jsx)(ee,{children:t("finance.budget.weekly")}),(0,i.jsxs)(en,{children:["€",nd(nq.spent)," ",(0,i.jsxs)(et,{children:["/ €",nq.budget]})]})]}),(0,i.jsx)(u.Xj,{pct:n2,over:n2>100?n2-100:0}),(0,i.jsxs)(ei,{children:[(0,i.jsxs)("span",{children:[Math.round(n2),"% ",t("finance.budget.used")]}),(0,i.jsx)("span",{style:{color:nq.remaining<0?S:T},children:nq.remaining>0?`€${nd(nq.remaining)} ${t("finance.budget.remaining")}`:`€${nd(Math.abs(nq.remaining))} ${t("finance.budget.over")}`})]}),(0,i.jsxs)(X,{style:{marginTop:14},children:[(0,i.jsx)(ee,{children:t("finance.budget.monthly")}),(0,i.jsxs)(en,{children:["€",nd(nG)," ",(0,i.jsxs)(et,{children:["/ €",l.budget.monthlyBudget]})]})]}),(0,i.jsx)(u.Xj,{pct:n8,over:n8>100?n8-100:0}),(0,i.jsxs)(ei,{children:[(0,i.jsxs)("span",{children:[Math.round(n8),"% ",t("finance.budget.used")]}),(0,i.jsxs)("span",{style:{color:d.w4.colors.mainTextMuted},children:[t("finance.budget.projected")," €",nd(nG+(nq.projectedTotal-nq.spent))]})]})]})})]})}),(0,i.jsxs)(O,{span:8,spanMd:12,children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(q,{children:t("finance.charts.sixMonths")}),(0,i.jsx)(H,{children:(0,i.jsx)(e1,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,i.jsxs)(e2,{children:[(0,i.jsx)(e8,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,i.jsx)(u.ik,{data:n0,budget:l.budget.monthlyBudget,height:200}),(0,i.jsxs)(eE,{children:[(0,i.jsxs)(eR,{children:[(0,i.jsx)(x.YZ,{children:t("finance.charts.total6m")}),(0,i.jsxs)(eA,{children:["€",nd(tu)]})]}),(0,i.jsxs)(eR,{children:[(0,i.jsx)(x.YZ,{children:t("finance.charts.monthlyAvg")}),(0,i.jsxs)(eA,{children:["€",nd(th)]})]}),(0,i.jsxs)(eR,{children:[(0,i.jsx)(x.YZ,{children:t("finance.charts.monthsOverBudget")}),(0,i.jsxs)(eA,{children:[tg," / ",n0.length]})]}),(0,i.jsxs)(eR,{children:[(0,i.jsx)(x.YZ,{children:t("finance.charts.trend")}),(0,i.jsxs)(eA,{style:{color:nJ>0?S:T},children:[nJ>0?"+":"",nJ,"%"]})]})]})]}),(0,i.jsxs)(O,{span:4,spanMd:6,children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(q,{children:t("finance.charts.byCategory")}),(0,i.jsx)(eV,{type:"button",onClick:()=>eJ("insights"),children:t("finance.charts.viewAll")})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:d.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,i.jsx)(u.RJ,{data:tm,total:tx,size:110,centerLabel:tc.slice(0,3),centerValue:`€${nd(tx)}`}),(0,i.jsx)("div",{style:{flex:1,minWidth:120},children:tm.map(e=>{let t=nm(e.id),a=(0,c.expensesForMember)((0,c.expensesForMonth)(l.expenses,nK),e3).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,i.jsxs)(ea,{children:[(0,i.jsx)(eo,{color:e.color}),(0,i.jsx)(es,{children:"pt"===n?t.labelPt:t.labelEn}),(0,i.jsxs)(er,{children:["€",nd(e.value)]}),Math.abs(o)>1&&(0,i.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]}),(0,i.jsxs)(O,{span:5,spanMd:6,children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(q,{children:t("finance.charts.cashflow")}),(0,i.jsx)("span",{style:{fontSize:11,fontFamily:d.w4.typography.fontFamilyMono,color:d.w4.colors.mainTextMuted},children:t("finance.charts.cashflowSub")})]}),(0,i.jsx)(u.uj,{data:n4,height:170,legendIn:t("finance.charts.in"),legendOut:t("finance.charts.out")})]}),(0,i.jsxs)(O,{span:4,spanMd:6,children:[(0,i.jsx)(Y,{children:(0,i.jsx)(q,{children:t("finance.charts.heatmap")})}),(0,i.jsx)(u.RT,{data:n1,locale:n}),(0,i.jsxs)(eB,{children:[(0,i.jsx)("span",{children:t("finance.charts.less")}),(0,i.jsx)(eL,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,i.jsx)("span",{style:{background:e}},n))}),(0,i.jsx)("span",{children:t("finance.charts.more")})]})]}),(0,i.jsxs)(O,{span:3,spanMd:6,children:[(0,i.jsx)(Y,{children:(0,i.jsx)(q,{children:t("finance.charts.thisWeek")})}),(0,i.jsxs)(eP,{children:[(0,i.jsxs)(eO,{children:[(0,i.jsxs)(eY,{children:["€",nd(nq.spent)]}),(0,i.jsxs)(et,{children:["/ €",nq.budget]})]}),(0,i.jsx)(u.kl,{spent:nq.spent,budget:nq.budget}),(0,i.jsxs)(eq,{children:[(0,i.jsx)("span",{children:t("finance.charts.ideal")}),(0,i.jsx)("span",{className:"fin",children:t("finance.charts.actual")})]})]})]}),(0,i.jsxs)(O,{span:7,spanMd:12,children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(q,{children:t("finance.recent.title")}),l.expenses.length>5&&(0,i.jsx)(eV,{type:"button",onClick:()=>eJ("expenses"),children:t("finance.recent.viewAll",{n:nZ.length})})]}),0===nZ.length?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted,padding:`${d.w4.spacing.sm} 0`},children:t("finance.dashboard.noRecent")}):(0,i.jsx)(ep,{"aria-label":t("finance.recent.title"),children:nZ.slice(0,6).map(e=>(0,i.jsx)(nu,{exp:e,finData:l,locale:n,t:t,onDelete:n7,onToggleReimbursed:te,compact:"compact"===nL},e.id))})]}),(0,i.jsxs)(O,{span:5,spanMd:12,children:[(0,i.jsx)(Y,{children:(0,i.jsx)(q,{children:t("finance.insights.title")})}),0===nH.length?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:t("insights")??"—"}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nH.map((e,n)=>(0,i.jsxs)(ev,{itype:e.type,children:[(0,i.jsx)(eM,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=l.familyMembers.indexOf(n);return(0,i.jsxs)(ek,{children:[(0,i.jsx)(x.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,i.jsxs)(O,{span:12,ref:nn,children:[(0,i.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:t("finance.quickAdd.title")}),(0,i.jsxs)("form",{onSubmit:n5,"aria-label":t("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.sm},children:[(0,i.jsx)(eT,{children:[{id:"shared",name:t("finance.member.shared"),role:"shared",color:void 0},...l.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let t="shared"===e.id?d.w4.colors.mainTextMuted:(0,b.a8)(l.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?t:void 0};return(0,i.jsxs)(eS,{type:"button",active:nw===e.id,color:t,onClick:()=>ny(e.id),children:[(0,i.jsx)(x.eu,{member:a,size:18}),e.name]},e.id)})}),(0,i.jsxs)(eF,{children:[(0,i.jsx)(eC,{ref:nt,type:"text",placeholder:t("finance.quickAdd.placeholder"),value:ns,onChange:e=>{nr(e.target.value),nb("")},"aria-label":t("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,i.jsx)(ez,{value:nf||n6,onChange:e=>nb(e.target.value),"aria-label":t("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,i.jsx)(x.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!ns.trim(),children:t("finance.quickAdd.add")})]}),(0,i.jsx)($.J,{expenses:l.expenses,storedOrder:nT,lockedCategoryId:nM,onToggle:e=>nk(n=>n===e?"":e),locale:n,groupLabel:t("finance.quickAdd.frequentCategories")}),(0,i.jsxs)(eI,{visible:nj,"aria-live":"polite","aria-atomic":!0,children:["✓ ",t("finance.quickAdd.added")]}),(0,i.jsx)(eD,{children:t("finance.quickAdd.hint")})]})]})]}),"expenses"===eW&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eX,{style:{marginBottom:d.w4.spacing.md},children:[(0,i.jsx)(x.YZ,{children:t("finance.tx.title")}),"month"===e9&&0===l.expenses.length&&(0,i.jsx)(eN,{ref:ni,value:eQ,onChange:e=>e6(e.target.value),"aria-label":t("finance.insights.month"),children:nU.map(e=>(0,i.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),0===nZ.length&&0===nN.length?(0,i.jsx)(O,{children:(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:t("finance.tx.empty")})}):(0,i.jsx)(O,{span:12,children:(0,i.jsx)(ep,{"aria-label":t("finance.tx.title"),children:[...nZ.map(e=>({...e,_kind:"expense"})),...nN.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,i.jsx)(nu,{exp:e,finData:l,locale:n,t:t,onDelete:n7,onToggleReimbursed:te,compact:"compact"===nL,selectMode:e7.selectMode,selected:e7.selectedIds.has(e.id),onToggleSelect:e7.toggleId,longPressHandlers:e7.longPressHandlers,onEnterSelectMode:e7.enterSelectMode},e.id):(0,i.jsxs)(em,{compact:"compact"===nL,children:["compact"===nL?(0,i.jsx)(ex,{color:T,"aria-hidden":!0}):(0,i.jsx)(eu,{color:T,children:"\uD83D\uDCB0"}),(0,i.jsxs)(eh,{children:[(0,i.jsx)(eg,{children:e.source}),"compact"!==nL&&(0,i.jsxs)(ef,{children:[np(e.date,n)," \xb7 ",t("finance.dashboard.income")]})]}),(0,i.jsxs)(eb,{children:[(0,i.jsxs)(ew,{style:{color:T},children:["+€",nl(e.amount)]}),(0,i.jsx)(e$,{className:"delete-btn",type:"button",onClick:()=>n9(e.id),"aria-label":`${t("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===eW&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eX,{style:{marginBottom:d.w4.spacing.md},children:[(0,i.jsx)(x.YZ,{children:t("finance.insights.title")}),"month"===e9&&0===l.expenses.length&&(0,i.jsx)(eN,{value:eQ,onChange:e=>e6(e.target.value),"aria-label":t("finance.insights.month"),children:nU.map(e=>(0,i.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),(0,i.jsxs)(O,{span:12,style:{marginBottom:d.w4.spacing.md},children:[(0,i.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:t("finance.insights.byCategory")}),(0,i.jsx)(nh,{expenses:nZ,total:nZ.reduce((e,n)=>e+n.amount,0),locale:n})]}),(0,i.jsxs)(O,{span:12,children:[(0,i.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:t("finance.insights.monthlyTrend")}),(0,i.jsx)(ng,{data:l,months:nU.slice(0,6),locale:n,t:t})]}),(0,i.jsxs)(O,{span:12,children:[(0,i.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:t("finance.insights.title")}),0===nH.length?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:t("finance.insights.noData")}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nH.map((e,n)=>(0,i.jsxs)(ev,{itype:e.type,children:[(0,i.jsx)(eM,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=l.familyMembers.indexOf(n);return(0,i.jsxs)(ek,{children:[(0,i.jsx)(x.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]})]}),"settings"===eW&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(O,{span:12,children:[(0,i.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.md},children:t("finance.settings.title")}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.md},children:[(0,i.jsxs)(eH,{children:[(0,i.jsx)(eU,{htmlFor:"weekly-budget",children:t("finance.settings.weeklyBudget")}),(0,i.jsx)(e_,{id:"weekly-budget",type:"number",min:"1",placeholder:String(l.budget.weeklyBudget),value:nI,onChange:e=>nD(e.target.value)})]}),(0,i.jsxs)(eH,{children:[(0,i.jsx)(eU,{htmlFor:"monthly-budget",children:t("finance.settings.monthlyBudget")}),(0,i.jsx)(e_,{id:"monthly-budget",type:"number",min:"1",placeholder:String(l.budget.monthlyBudget),value:nE,onChange:e=>nR(e.target.value)})]}),(0,i.jsx)(x.$n,{variant:"primary",onClick:tn,style:{height:44},children:nA?t("finance.settings.saved"):t("finance.settings.save")})]})]})})]}),(0,i.jsxs)(e4,{children:[(0,i.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,i.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),nF&&(0,i.jsx)(nx,{finData:l,activeMemberId:e3,locale:n,t:t,onClose:()=>nC(!1),onSubmit:nz}),(0,i.jsx)(w.S,{labelKey:ej,onUndo:()=>{eK()},onDismiss:()=>eZ(null),t:t}),e7.selectMode&&"expenses"===eW&&(0,i.jsx)(M.S,{selectionCount:e7.selectedIds.size,visibleIds:nZ.map(e=>e.id),selectedIds:e7.selectedIds,categories:c.DEFAULT_CATEGORIES,locale:n,t:t,onCancel:e7.exitSelectMode,onSelectAll:()=>e7.selectAll(nZ.map(e=>e.id)),onCategorise:ti,onDelete:tt,onMarkReimbursed:ta}),na&&(0,i.jsx)(y.m,{t:t,onClose:()=>no(!1)})]})},{}))}}]);