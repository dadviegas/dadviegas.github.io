"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{default:()=>nm});var t=i(5723),a=i(7991),s=i(6859),o=i.n(s),r=i(2799),l=i(9874),d=i(3854),c=i(3759),p=i(789),m=i(8395),x=i(1496),u=i(8170),h=i(4041),g=i(948),f=i(719),b=i(9546),w=i(5854),y=i(3616),j=i(6579),$=i(8989),v=i(6376),M=i(9146);let k="#7fb77e",T="#f85149",S=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,F=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${S} 0.25s ease both;
  overflow: hidden;
`,C=o().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,z=o().div`
  display: none;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,I=o().div`
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
`,D=o().div`
  flex: 1;
  min-width: 0;
`,E=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,R=o().div`
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,A=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
  user-select: none;
`,B=o().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`,L=o().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,P=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${k};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${k};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,O=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,Y=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,q=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,H=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${k};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,U=o().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,_=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,N=o().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,Z=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,G=o().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,K=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,W=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,J=o().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,Q=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,V=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,X=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,ee=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,en=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,ei=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,et=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,ea=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,es=o().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eo=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,er="finance:list-density",el="finance:quick-categories",ed=o().input`
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
`,ec=o().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,ep=o().li`
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
`,em=o().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,ex=o().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eu=o().div`
  flex: 1;
  min-width: 0;
`,eh=o().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eg=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,ef=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,eb=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,ew=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${k}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?k:"#facc15"};
  white-space: nowrap;
`,ey=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${k}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?k:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${k}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ej=o().button`
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
    color: ${T};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,e$=o().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${k}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${k}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,ev=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?T:"warning"===e?"#facc15":"success"===e?k:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,eM=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;o()(P)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let ek=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,eT=o().button`
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
`,eS=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,eF=o().input`
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
`,eC=o().select`
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
`,ez=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${k};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,eI=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eD=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,eE=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eR=o().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,eA=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eB=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,eL=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,eP=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,eO=o().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,eY=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${k}; }
`,eq=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eH=o().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,eU=o().input`
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
`,e_=o().select`
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
`,eN=o().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eZ=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,eG=o().div`
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
`,eK=o().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eW=o().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eJ=o().div`
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
`,eQ=o().button`
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
`,eV=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,eX=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,e0=o().footer`
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
`,e4=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,e1=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,e2=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,e8=o().div`
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
  animation: ${S} 0.15s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
  }
`,e3=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} ${l.w4.borderRadius.md} ${l.w4.borderRadius.md};
  border-left: 2px solid ${k};
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
`,e6=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,e5=o().button`
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
`,e7=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,e9=o().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,ne=o().button`
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
`,nn=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,ni=o().button`
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
`,nt=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,na=o().input`
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
`,ns=o().select`
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
`,no=o().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`;function nr(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function nl(e){return Math.round(e).toLocaleString("pt-PT")}function nd(){return new Date().toISOString().slice(0,10)}function nc(e,n){let[i,t,a]=e.split("-").map(Number);return new Date(i,t-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function np(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function nm({topBarRight:e}){let[n]=(0,u.Ym)(),i=(0,a.useMemo)(()=>(0,u.Nx)(n,g.A),[n]),{data:s,loaded:o,save:r}=(0,d.useFinance)(),S=s??{...d.EMPTY_FINANCE_DATA},{canUndo:ed,latestLabelKey:ew,undo:ey}=(0,d.useUndo)(),[eN,eZ]=(0,a.useState)(null),eG=(0,a.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:S,labelKey:n,ts:Date.now()}),eZ(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,p.K)(10),await r(e)},[S,r]),eK=(0,a.useCallback)(async()=>{let e=ey();e&&(eZ("finance.undo.label.reverted"),await r(e),setTimeout(()=>eZ(null),2500))},[ey,r]),[eW,eJ]=(0,a.useState)("overview"),[e8,e3]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[e6,e5]=(0,a.useState)("shared"),e7=(0,M.E)();(0,a.useEffect)(()=>{"expenses"!==eW&&e7.selectMode&&e7.exitSelectMode()},[eW]);let{range:e9,setRange:ne}=(0,c.H)("month"),nn=(0,a.useRef)(null),ni=(0,a.useRef)(null),nt=(0,a.useRef)(null),[na,ns]=(0,a.useState)(!1),[no,nf]=(0,a.useState)(""),[nb,nw]=(0,a.useState)(""),[ny,nj]=(0,a.useState)("shared"),[n$,nv]=(0,a.useState)(!1),nM=(0,a.useRef)(null),[nk,nT]=(0,a.useState)(""),[nS,nF]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,l.PL)(el).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&nF(n)}catch{}})},[]);let[nC,nz]=(0,a.useState)(!1),nI=(0,a.useCallback)((e,n,i)=>{let t=i?[i,...S.recentDescriptions].filter(Boolean).slice(0,20):S.recentDescriptions;eG({...S,expenses:[...e,...S.expenses],categoryHints:n,recentDescriptions:t},"finance.undo.label.added"),nz(!1),nM.current&&clearTimeout(nM.current),nv(!0),nM.current=setTimeout(()=>nv(!1),2e3)},[S,eG]),[nD,nE]=(0,a.useState)(""),[nR,nA]=(0,a.useState)(""),[nB,nL]=(0,a.useState)(!1),[nP,nO]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,l.PL)(er).then(e=>{("compact"===e||"comfortable"===e)&&nO(e)})},[]);let nY=(0,a.useCallback)(()=>{let e="comfortable"===nP?"compact":"comfortable";nO(e),(0,l.Is)(er,e)},[nP]),nq=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),nH=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(S),[S]);(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(S,e8),[S,e8]);let nU=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(S),[S]),n_=(0,a.useMemo)(()=>(0,d.availableMonths)(S),[S]),nN=(0,a.useMemo)(()=>(0,d.filterExpensesByRange)(S.expenses,e9,e8),[S.expenses,e9,e8]),nZ=(0,a.useMemo)(()=>(0,d.filterIncomeByRange)(S.income,e9,e8),[S.income,e9,e8]),nG=(0,a.useMemo)(()=>(0,d.expensesForMember)(nN,e6),[nN,e6]),nK=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(S,e6,nq),[S,e6,nq]),nW=(0,a.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(nq),[nq]),nJ=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(S,e6,nW),[S,e6,nW]),nQ=(0,a.useMemo)(()=>0===nJ?0:Math.round((nK-nJ)/nJ*100),[nK,nJ]),nV=(0,a.useMemo)(()=>{if("all"===e6)return i("finance.member.all");if("shared"===e6)return i("finance.hero.family");let e=S.familyMembers.find(e=>e.id===e6);return e?.name??i("finance.hero.family")},[e6,S.familyMembers,i]),nX=(0,a.useMemo)(()=>{if("all"===e6||"shared"===e6)return l.w4.colors.mainTextMuted;let e=S.familyMembers.findIndex(e=>e.id===e6);return -1===e?k:(0,f.a8)(S.familyMembers[e],e)},[e6,S.familyMembers]),n0=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let a=new Date(t);return a.setDate(t.getDate()+7),(0,d.expensesForMember)(S.expenses,e6).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<a}).reduce((e,n)=>e+n.amount,0)})},[S.expenses,e6]),n4=(0,a.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),s=(0,d.expensesForMember)(t,n),o={};for(let e of s)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let r=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:np(e).color})),over:r>a?r-a:0}})})(S,e6),[S,e6]),n1=(0,a.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let a=89;a>=0;a--){let s=new Date(i);s.setDate(i.getDate()-a);let o=s.toISOString().slice(0,10),r=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,r).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:c,exp:l})}return t})(S,e6),[S,e6]),n2=(0,a.useMemo)(()=>{let e,n;return e=new Date,n=S.expenses.length>0?S.expenses.reduce((e,n)=>e+n.amount,0)/S.expenses.length:20,Array.from({length:91},(i,t)=>{let a=new Date(e);a.setDate(e.getDate()-90+t);let s=a.toISOString().slice(0,10),o=(0,d.expensesForMember)(S.expenses.filter(e=>e.date===s),e6).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let r=o/n;return r<.5?1:r<1?2:r<2?3:4})},[S,e6]),n8=nH.budget>0?nH.spent/nH.budget*100:0,n3=S.budget.monthlyBudget>0?nK/S.budget.monthlyBudget*100:0,n6=(0,a.useMemo)(()=>{let e=(0,d.parseQuickInput)(no,S.familyMembers);return e?.description?(0,d.guessCategory)(e.description,S.categoryHints):"other"},[no,S.categoryHints,S.familyMembers]),n5=nb||nk||n6;(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(no,S.familyMembers);e?.memberId&&nj(e.memberId)},[no,S.familyMembers]);let n7=(0,a.useCallback)(e=>{e.preventDefault();let n=(0,d.parseQuickInput)(no,S.familyMembers);if(!n)return;let i=n5||"other",t=n.memberId??("shared"!==ny?ny:void 0),a={id:(0,h.z)(),amount:n.amount,date:nd(),categoryId:i,description:n.description||i,type:"daily",childId:t,createdAt:Date.now()},s={...S.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(s[e]=i)});let o=[n.description||"",...S.recentDescriptions].filter(Boolean).slice(0,20),r=[a,...S.expenses];eG({...S,expenses:r,categoryHints:s,recentDescriptions:o},"finance.undo.label.added");let c=(0,j.j)(r);nF(c),(0,l.Is)(el,JSON.stringify(c)),nf(""),nw(""),nT(""),nM.current&&clearTimeout(nM.current),nv(!0),nM.current=setTimeout(()=>nv(!1),2e3)},[no,n5,ny,S,eG]),n9=(0,a.useCallback)(e=>{eG({...S,expenses:S.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[S,eG]),ie=(0,a.useCallback)(e=>{eG({...S,income:S.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[S,eG]),ii=(0,a.useCallback)(e=>{eG({...S,expenses:S.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[S,eG]),it=(0,a.useCallback)(()=>{let e=parseFloat(nD)||S.budget.weeklyBudget,n=parseFloat(nR)||S.budget.monthlyBudget;r({...S,budget:{...S.budget,weeklyBudget:e,monthlyBudget:n}}),nL(!0),setTimeout(()=>nL(!1),2e3)},[nD,nR,S,r]),ia=(0,a.useCallback)(()=>{let e=e7.selectedIds;0!==e.size&&(eG({...S,expenses:S.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),e7.exitSelectMode())},[e7,S,eG]),is=(0,a.useCallback)(e=>{let n=e7.selectedIds;0!==n.size&&(eG({...S,expenses:S.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),e7.exitSelectMode())},[e7,S,eG]),io=(0,a.useCallback)(()=>{let e=e7.selectedIds;0!==e.size&&(eG({...S,expenses:S.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),e7.exitSelectMode())},[e7,S,eG]),ir=(0,a.useMemo)(()=>["shared",...S.familyMembers.map(e=>e.id)],[S.familyMembers]);(0,y.K)({quickAddInputRef:ni,monthSelectRef:nt,memberIds:ir,activeMemberId:e6,onSelectMember:e5,onSetTab:e=>eJ(e),expenseModalOpen:nC,onOpenExpenseModal:()=>nz(!0),shortcutsOpen:na,onToggleShortcuts:()=>ns(e=>!e)});let il=[{value:"overview",label:i("finance.tab.overview")},{value:"expenses",label:`${i("finance.tab.expenses")} ${nG.length>0?`(${nG.length})`:""}`},{value:"insights",label:`${i("finance.tab.insights")} ${nU.length>0?`(${nU.length})`:""}`},{value:"settings",label:i("finance.tab.settings")}],id=[{value:"week",label:i("finance.range.week")},{value:"month",label:i("finance.range.month")},{value:"3m",label:i("finance.range.3m")},{value:"6m",label:i("finance.range.6m")},{value:"1y",label:i("finance.range.1y")},{value:"all",label:i("finance.range.all")}],ic=Math.floor(nK).toLocaleString("pt-PT"),ip=(nK%1).toFixed(2).slice(1),im=(()=>{let[e,i]=nq.split("-");return new Date(parseInt(e),parseInt(i)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),ix=(0,t.jsx)(f.TA,{data:S,activeMemberId:e6,onSelectMember:e5,onSaveData:r,t:i,locale:n}),iu=(0,a.useMemo)(()=>{let e={};for(let n of nG)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:np(e).color}))},[nG]),ih=iu.reduce((e,n)=>e+n.value,0),ig=(0,a.useMemo)(()=>n4.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[n4]),ib=n4.length>0?ig/n4.length:0,iw=n4.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>S.budget.monthlyBudget).length;return(0,t.jsxs)(l.PE,{title:i("finance.appTitle"),sidebar:ix,topBarRight:e,activeId:e6,children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(C,{children:(0,t.jsx)(f.jb,{data:S,activeMemberId:e6,onSelectMember:e5,t:i,locale:n})}),(0,t.jsxs)(I,{children:[(0,t.jsx)(D,{children:(0,t.jsx)(m.tU,{tabs:il,value:eW,onChange:eJ,"aria-label":i("finance.nav.ariaLabel")})}),(0,t.jsxs)(E,{children:[0===S.familyMembers.length&&(0,t.jsx)(eX,{children:i("finance.member.empty")}),(0,t.jsx)(m.K0,{onClick:nY,title:"comfortable"===nP?i("finance.density.compact"):i("finance.density.comfortable"),"aria-label":i("finance.density.toggle"),active:"compact"===nP,children:(0,t.jsx)(m.In,{name:"comfortable"===nP?"list":"menu",size:14,"aria-hidden":!0})}),(0,t.jsx)(z,{children:(0,t.jsx)(m.K0,{onClick:()=>ns(e=>!e),title:i("finance.shortcuts.title"),"aria-label":i("finance.shortcuts.title"),active:na,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})}),"expenses"===eW&&(0,t.jsx)(m.$n,{variant:e7.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{e7.selectMode?e7.exitSelectMode():e7.enterSelectMode()},children:i("finance.bulk.select")}),(0,t.jsxs)(m.$n,{variant:"ghost",style:{height:30},onClick:()=>nz(!0),children:[(0,t.jsx)(m.In,{name:"plus",size:13,"aria-hidden":!0}),i("finance.quickAdd.newExpense")]})]})]}),"settings"!==eW&&(0,t.jsxs)(R,{"aria-label":i("finance.range.label"),children:[(0,t.jsx)(A,{children:i("finance.range.label")}),(0,t.jsx)(m.tU,{tabs:id,value:e9,onChange:e=>{ne(e),"month"===e&&e3(nq)},"aria-label":i("finance.range.label")})]}),"settings"!==eW&&"month"===e9&&S.expenses.length>0&&(0,t.jsx)($.f,{data:S,selectedMonth:e8,onSelectMonth:e3,locale:n,t:i}),(0,t.jsxs)(B,{children:["overview"===eW&&(0,t.jsxs)(L,{children:[(0,t.jsx)(P,{span:12,style:{borderLeft:`2px solid ${k}`},children:(0,t.jsxs)(H,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(U,{children:[(0,t.jsxs)(_,{children:[i("finance.hero.spentIn")," ",im," \xb7 ",nV]}),(0,t.jsxs)(N,{children:[(0,t.jsx)(Z,{children:"€"}),(0,t.jsx)(G,{children:ic}),(0,t.jsx)(K,{children:ip})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(x.Ru,{value:nQ,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[i("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(nW,n)," \xb7 €",nl(nJ)]})]}),n0.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:n0,accent:nX,width:280,height:34})})]}),(0,t.jsx)(J,{children:(0,t.jsxs)(Q,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(X,{children:i("finance.budget.weekly")}),(0,t.jsxs)(ee,{children:["€",nl(nH.spent)," ",(0,t.jsxs)(en,{children:["/ €",nH.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:n8,over:n8>100?n8-100:0}),(0,t.jsxs)(ei,{children:[(0,t.jsxs)("span",{children:[Math.round(n8),"% ",i("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:nH.remaining<0?T:k},children:nH.remaining>0?`€${nl(nH.remaining)} ${i("finance.budget.remaining")}`:`€${nl(Math.abs(nH.remaining))} ${i("finance.budget.over")}`})]}),(0,t.jsxs)(V,{style:{marginTop:14},children:[(0,t.jsx)(X,{children:i("finance.budget.monthly")}),(0,t.jsxs)(ee,{children:["€",nl(nK)," ",(0,t.jsxs)(en,{children:["/ €",S.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:n3,over:n3>100?n3-100:0}),(0,t.jsxs)(ei,{children:[(0,t.jsxs)("span",{children:[Math.round(n3),"% ",i("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[i("finance.budget.projected")," €",nl(nK+(nH.projectedTotal-nH.spent))]})]})]})})]})}),(0,t.jsxs)(P,{span:8,spanMd:12,children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(Y,{children:i("finance.charts.sixMonths")}),(0,t.jsx)(q,{children:(0,t.jsx)(e4,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,t.jsx)(x.ik,{data:n4,budget:S.budget.monthlyBudget,height:200}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(m.YZ,{children:i("finance.charts.total6m")}),(0,t.jsxs)(eR,{children:["€",nl(ig)]})]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(m.YZ,{children:i("finance.charts.monthlyAvg")}),(0,t.jsxs)(eR,{children:["€",nl(ib)]})]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(m.YZ,{children:i("finance.charts.monthsOverBudget")}),(0,t.jsxs)(eR,{children:[iw," / ",n4.length]})]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(m.YZ,{children:i("finance.charts.trend")}),(0,t.jsxs)(eR,{style:{color:nQ>0?T:k},children:[nQ>0?"+":"",nQ,"%"]})]})]})]}),(0,t.jsxs)(P,{span:4,spanMd:6,children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(Y,{children:i("finance.charts.byCategory")}),(0,t.jsx)(eQ,{type:"button",onClick:()=>eJ("insights"),children:i("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:iu,total:ih,size:110,centerLabel:im.slice(0,3),centerValue:`€${nl(ih)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:iu.map(e=>{let i=np(e.id),a=(0,d.expensesForMember)((0,d.expensesForMonth)(S.expenses,nW),e6).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),s=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(et,{children:[(0,t.jsx)(ea,{color:e.color}),(0,t.jsx)(es,{children:"pt"===n?i.labelPt:i.labelEn}),(0,t.jsxs)(eo,{children:["€",nl(e.value)]}),Math.abs(s)>1&&(0,t.jsx)(x.Ru,{value:s,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(P,{span:5,spanMd:6,children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(Y,{children:i("finance.charts.cashflow")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:i("finance.charts.cashflowSub")})]}),(0,t.jsx)(x.uj,{data:n1,height:170,legendIn:i("finance.charts.in"),legendOut:i("finance.charts.out")})]}),(0,t.jsxs)(P,{span:4,spanMd:6,children:[(0,t.jsx)(O,{children:(0,t.jsx)(Y,{children:i("finance.charts.heatmap")})}),(0,t.jsx)(x.RT,{data:n2,locale:n}),(0,t.jsxs)(eA,{children:[(0,t.jsx)("span",{children:i("finance.charts.less")}),(0,t.jsx)(eB,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:i("finance.charts.more")})]})]}),(0,t.jsxs)(P,{span:3,spanMd:6,children:[(0,t.jsx)(O,{children:(0,t.jsx)(Y,{children:i("finance.charts.thisWeek")})}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eP,{children:[(0,t.jsxs)(eO,{children:["€",nl(nH.spent)]}),(0,t.jsxs)(en,{children:["/ €",nH.budget]})]}),(0,t.jsx)(x.kl,{spent:nH.spent,budget:nH.budget}),(0,t.jsxs)(eY,{children:[(0,t.jsx)("span",{children:i("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:i("finance.charts.actual")})]})]})]}),(0,t.jsxs)(P,{span:7,spanMd:12,children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(Y,{children:i("finance.recent.title")}),S.expenses.length>5&&(0,t.jsx)(eQ,{type:"button",onClick:()=>eJ("expenses"),children:i("finance.recent.viewAll",{n:nG.length})})]}),0===nG.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:i("finance.dashboard.noRecent")}):(0,t.jsx)(ec,{"aria-label":i("finance.recent.title"),children:nG.slice(0,6).map(e=>(0,t.jsx)(nu,{exp:e,finData:S,locale:n,t:i,onDelete:n9,onToggleReimbursed:ii,compact:"compact"===nP},e.id))})]}),(0,t.jsxs)(P,{span:5,spanMd:12,children:[(0,t.jsx)(O,{children:(0,t.jsx)(Y,{children:i("finance.insights.title")})}),0===nU.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("insights")??"—"}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nU.map((e,n)=>(0,t.jsxs)(e$,{itype:e.type,children:[(0,t.jsx)(ev,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=S.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=S.familyMembers.indexOf(n);return(0,t.jsxs)(eM,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,f.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(P,{span:12,ref:nn,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.quickAdd.title")}),(0,t.jsxs)("form",{onSubmit:n7,"aria-label":i("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(ek,{children:[{id:"shared",name:i("finance.member.shared"),role:"shared",color:void 0},...S.familyMembers.map((e,n)=>({...e,color:(0,f.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,f.a8)(S.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(eT,{type:"button",active:ny===e.id,color:i,onClick:()=>nj(e.id),children:[(0,t.jsx)(m.eu,{member:a,size:18}),e.name]},e.id)})}),(0,t.jsxs)(eS,{children:[(0,t.jsx)(eF,{ref:ni,type:"text",placeholder:i("finance.quickAdd.placeholder"),value:no,onChange:e=>{nf(e.target.value),nw("")},"aria-label":i("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,t.jsx)(eC,{value:nb||n6,onChange:e=>nw(e.target.value),"aria-label":i("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!no.trim(),children:i("finance.quickAdd.add")})]}),(0,t.jsx)(j.J,{expenses:S.expenses,storedOrder:nS,lockedCategoryId:nk,onToggle:e=>nT(n=>n===e?"":e),locale:n,groupLabel:i("finance.quickAdd.frequentCategories")}),(0,t.jsxs)(ez,{visible:n$,"aria-live":"polite","aria-atomic":!0,children:["✓ ",i("finance.quickAdd.added")]}),(0,t.jsx)(eI,{children:i("finance.quickAdd.hint")})]})]})]}),"expenses"===eW&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eV,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:i("finance.tx.title")}),"month"===e9&&0===S.expenses.length&&(0,t.jsx)(e_,{ref:nt,value:e8,onChange:e=>e3(e.target.value),"aria-label":i("finance.insights.month"),children:n_.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),0===nG.length&&0===nZ.length?(0,t.jsx)(P,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.tx.empty")})}):(0,t.jsx)(P,{span:12,children:(0,t.jsx)(ec,{"aria-label":i("finance.tx.title"),children:[...nG.map(e=>({...e,_kind:"expense"})),...nZ.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(nu,{exp:e,finData:S,locale:n,t:i,onDelete:n9,onToggleReimbursed:ii,compact:"compact"===nP,selectMode:e7.selectMode,selected:e7.selectedIds.has(e.id),onToggleSelect:e7.toggleId,longPressHandlers:e7.longPressHandlers,onEnterSelectMode:e7.enterSelectMode},e.id):(0,t.jsxs)(ep,{compact:"compact"===nP,children:["compact"===nP?(0,t.jsx)(em,{color:k,"aria-hidden":!0}):(0,t.jsx)(ex,{color:k,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(eh,{children:e.source}),"compact"!==nP&&(0,t.jsxs)(eg,{children:[nc(e.date,n)," \xb7 ",i("finance.dashboard.income")]})]}),(0,t.jsxs)(ef,{children:[(0,t.jsxs)(eb,{style:{color:k},children:["+€",nr(e.amount)]}),(0,t.jsx)(ej,{className:"delete-btn",type:"button",onClick:()=>ie(e.id),"aria-label":`${i("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===eW&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eV,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:i("finance.insights.title")}),"month"===e9&&0===S.expenses.length&&(0,t.jsx)(e_,{value:e8,onChange:e=>e3(e.target.value),"aria-label":i("finance.insights.month"),children:n_.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),(0,t.jsxs)(P,{span:12,style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.byCategory")}),(0,t.jsx)(nh,{expenses:nG,total:nG.reduce((e,n)=>e+n.amount,0),locale:n})]}),(0,t.jsxs)(P,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.monthlyTrend")}),(0,t.jsx)(ng,{data:S,months:n_.slice(0,6),locale:n,t:i})]}),(0,t.jsxs)(P,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.title")}),0===nU.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nU.map((e,n)=>(0,t.jsxs)(e$,{itype:e.type,children:[(0,t.jsx)(ev,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=S.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=S.familyMembers.indexOf(n);return(0,t.jsxs)(eM,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,f.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]})]}),"settings"===eW&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(P,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.md},children:i("finance.settings.title")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(eq,{children:[(0,t.jsx)(eH,{htmlFor:"weekly-budget",children:i("finance.settings.weeklyBudget")}),(0,t.jsx)(eU,{id:"weekly-budget",type:"number",min:"1",placeholder:String(S.budget.weeklyBudget),value:nD,onChange:e=>nE(e.target.value)})]}),(0,t.jsxs)(eq,{children:[(0,t.jsx)(eH,{htmlFor:"monthly-budget",children:i("finance.settings.monthlyBudget")}),(0,t.jsx)(eU,{id:"monthly-budget",type:"number",min:"1",placeholder:String(S.budget.monthlyBudget),value:nR,onChange:e=>nA(e.target.value)})]}),(0,t.jsx)(m.$n,{variant:"primary",onClick:it,style:{height:44},children:nB?i("finance.settings.saved"):i("finance.settings.save")})]})]})})]}),(0,t.jsxs)(e0,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),nC&&(0,t.jsx)(nx,{finData:S,activeMemberId:e6,locale:n,t:i,onClose:()=>nz(!1),onSubmit:nI}),(0,t.jsx)(b.S,{labelKey:eN,onUndo:()=>{eK()},onDismiss:()=>eZ(null),t:i}),e7.selectMode&&"expenses"===eW&&(0,t.jsx)(v.S,{selectionCount:e7.selectedIds.size,visibleIds:nG.map(e=>e.id),selectedIds:e7.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:n,t:i,onCancel:e7.exitSelectMode,onSelectAll:()=>e7.selectAll(nG.map(e=>e.id)),onCategorise:is,onDelete:ia,onMarkReimbursed:io}),na&&(0,t.jsx)(w.m,{t:i,onClose:()=>ns(!1)})]})}function nx({finData:e,activeMemberId:n,locale:i,t:s,onClose:o,onSubmit:r}){let[c,p]=(0,a.useState)(""),[x,u]=(0,a.useState)(""),[g,b]=(0,a.useState)("other"),[w,y]=(0,a.useState)(nd()),[j,$]=(0,a.useState)("single"),[v,M]=(0,a.useState)(n),[k,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id));(0,a.useEffect)(()=>{x.trim()&&b((0,d.guessCategory)(x,e.categoryHints))},[x,e.categoryHints]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let S=parseFloat(c.replace(",","."))||0,F=k.length,C="split"===j&&F>0?S/F:S,z=S>0&&!!w&&("single"===j||"split"===j&&F>0),I=[{id:"shared",name:s("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,f.a8)(e,n),role:e.role}))];return(0,t.jsx)(e8,{onClick:o,role:"dialog","aria-modal":"true","aria-label":s("finance.quickAdd.newExpense"),children:(0,t.jsxs)(e3,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(e6,{children:[(0,t.jsxs)(m.YZ,{children:["◉ ",s("finance.quickAdd.newExpense")]}),(0,t.jsx)(e5,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!z)return;let t=x.trim(),a=Date.now(),s={...e.categoryHints};if(t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(s[e]=g)}),"single"===j)i=[{id:(0,h.z)(),amount:S,date:w,categoryId:g,description:t||g,type:"daily",childId:"shared"===v?void 0:v,createdAt:a}];else{let e=Math.round(S/F*100)/100,n=Math.round((S-e*F)*100)/100;i=k.map((i,s)=>({id:(0,h.z)(),amount:0===s?e+n:e,date:w,categoryId:g,description:t?`${t} (1/${F})`:g,type:"daily",childId:i,createdAt:a+s}))}r(i,s,t)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(e7,{children:[(0,t.jsxs)(eq,{children:[(0,t.jsx)(eH,{htmlFor:"exp-amount",children:s("finance.modal.amount")}),(0,t.jsx)(na,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:c,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(eq,{children:[(0,t.jsx)(eH,{htmlFor:"exp-date",children:s("finance.modal.date")}),(0,t.jsx)(na,{id:"exp-date",type:"date",value:w,onChange:e=>y(e.target.value)})]})]}),(0,t.jsxs)(eq,{children:[(0,t.jsx)(eH,{htmlFor:"exp-desc",children:s("finance.modal.description")}),(0,t.jsx)(na,{id:"exp-desc",type:"text",placeholder:s("finance.modal.descPlaceholder"),value:x,onChange:e=>u(e.target.value)})]}),(0,t.jsxs)(eq,{children:[(0,t.jsx)(eH,{htmlFor:"exp-cat",children:s("finance.quickAdd.category")}),(0,t.jsx)(ns,{id:"exp-cat",value:g,onChange:e=>b(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===i?e.labelPt:e.labelEn]},e.id))})]}),(0,t.jsxs)(eq,{children:[(0,t.jsx)(eH,{children:s("finance.modal.assign")}),(0,t.jsxs)(e9,{role:"tablist",children:[(0,t.jsx)(ne,{type:"button",active:"single"===j,onClick:()=>$("single"),children:s("finance.modal.member")}),(0,t.jsx)(ne,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:s("finance.modal.split")})]}),"single"===j?(0,t.jsx)(nn,{style:{marginTop:l.w4.spacing.sm},children:I.map(e=>(0,t.jsxs)(ni,{type:"button",active:v===e.id,color:e.color,onClick:()=>M(e.id),children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nn,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,f.a8)(e,n),a=k.includes(e.id);return(0,t.jsxs)(ni,{type:"button",active:a,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),F>0&&S>0&&(0,t.jsx)(nt,{style:{marginTop:l.w4.spacing.xs},children:s("finance.modal.splitEach",{n:F,amount:nr(C)})})]})]}),(0,t.jsxs)(no,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:o,children:s("finance.member.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!z,children:s("finance.quickAdd.add")})]})]})]})})}function nu({exp:e,finData:n,locale:i,t:a,onDelete:s,onToggleReimbursed:o,compact:r=!1,selectMode:d=!1,selected:c=!1,onToggleSelect:p,longPressHandlers:x}){let u=np(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),g=h>=0?n.familyMembers[h]:null,b=g?(0,f.a8)(g,h):l.w4.colors.mainTextMuted,w=x?x(e.id):null,y=n=>{d&&p&&"INPUT"!==n.target.tagName&&p(e.id)},j=e.isReimbursable&&!d?o?(0,t.jsx)(ey,{type:"button",ok:e.reimbursed,onClick:()=>o(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(ew,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,$=d?null:(0,t.jsx)(ej,{className:"delete-btn",type:"button",onClick:()=>s(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),v=d?(0,t.jsx)(ed,{type:"checkbox",checked:c,"aria-label":e.description,onChange:()=>p?.(e.id),onClick:e=>e.stopPropagation()}):null,M=d?{background:c?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:c?"1px solid rgba(127,183,126,0.35)":"none"}:{};return r?(0,t.jsxs)(ep,{compact:!0,style:M,onClick:y,...w??{},children:[v,(0,t.jsx)(em,{color:u.color,"aria-hidden":!0}),(0,t.jsx)(eu,{children:(0,t.jsxs)(eh,{style:{display:"flex",alignItems:"center",gap:6},children:[g?(0,t.jsx)(m.eu,{member:{id:g.id,name:g.name,role:g.role,color:b},size:16}):null,(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||("pt"===i?u.labelPt:u.labelEn)})]})}),(0,t.jsxs)(ef,{children:[j,(0,t.jsxs)(eb,{children:["−€",nr(e.amount)]}),$]})]}):(0,t.jsxs)(ep,{style:M,onClick:y,...w??{},children:[v,(0,t.jsx)(ex,{color:u.color,children:(0,t.jsx)("span",{"aria-hidden":!0,children:u.icon})}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(eh,{children:e.description||("pt"===i?u.labelPt:u.labelEn)}),(0,t.jsxs)(eg,{children:[g?(0,t.jsx)(m.eu,{member:{id:g.id,name:g.name,role:g.role,color:b},size:14}):null,(0,t.jsx)("span",{children:"pt"===i?u.labelPt:u.labelEn}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:nc(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:a("finance.modal.monthlyLabel")})]})]})]}),(0,t.jsxs)(ef,{children:[j,"recurring"===e.type&&(0,t.jsx)(ew,{children:a("finance.tx.recurring")}),(0,t.jsxs)(eb,{children:["−€",nr(e.amount)]}),$]})]})}function nh({expenses:e,total:n,locale:i}){let s=Object.entries((0,a.useMemo)(()=>{let n={};for(let i of e)n[i.categoryId]=(n[i.categoryId]??0)+i.amount;return n},[e])).map(([e,n])=>({cat:np(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===s.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:"—"}):(0,t.jsx)(eN,{children:s.map(({cat:e,amt:a})=>{let s=n>0?a/n*100:0;return(0,t.jsxs)(eZ,{children:[(0,t.jsxs)(eG,{children:[(0,t.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===i?e.labelPt:e.labelEn]}),(0,t.jsx)(eK,{children:(0,t.jsx)(eW,{pct:s,color:e.color})}),(0,t.jsxs)(eJ,{children:["€",a.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function ng({data:e,months:n,locale:i,t:a}){let s=n.map(n=>(0,d.computeMonthlySummary)(e,n)),o=Math.max(...s.map(e=>e.totalExpenses),1);return s.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)(eN,{children:s.map(e=>{let n=e.totalExpenses/o*100,[,a]=e.month.split("-"),s=new Date(parseInt(e.month.slice(0,4)),parseInt(a)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"short"});return(0,t.jsxs)(eZ,{children:[(0,t.jsx)(eG,{style:{width:80},children:s}),(0,t.jsx)(eK,{children:(0,t.jsx)(eW,{pct:n,color:l.w4.colors.accent})}),(0,t.jsxs)(eJ,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}}}]);