"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["362"],{3935(e,n,i){i.r(n),i.d(n,{default:()=>nj});var t=i(5723),a=i(7991),s=i(6859),o=i.n(s),r=i(2799),l=i(9874),d=i(3400),c=i(3759),p=i(789),m=i(8395),x=i(1496),u=i(8170),h=i(4041),g=i(948),f=i(719),b=i(2405),w=i(9546),y=i(5854),j=i(3616),$=i(6579),v=i(8989),M=i(6376),k=i(9146),T=i(7737);let S="#7fb77e",F="#f85149",C=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,z=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${C} 0.25s ease both;
  overflow: hidden;
`,D=o().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,I=o().div`
  display: none;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,E=o().div`
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
`,R=o().div`
  flex: 1;
  min-width: 0;
`,A=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,B=o().div`
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
`,L=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
  user-select: none;
`,P=o().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`,O=o().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,H=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${S};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${S};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${l.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,Y=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,q=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,U=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,_=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${S};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,K=o().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Z=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,N=o().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,G=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,W=o().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,J=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,Q=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,V=o().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,X=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ee=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,en=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,ei=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,et=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,ea=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,es=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,eo=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,er=o().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,el=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,ed="finance:list-density",ec="finance:quick-categories",ep=o().input`
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
`,em=o().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,ex=o().li`
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
`,eu=o().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eh=o().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,eg=o().div`
  flex: 1;
  min-width: 0;
`,ef=o().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eb=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,ew=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,ey=o().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,ej=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${S}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?S:"#facc15"};
  white-space: nowrap;
`,e$=o().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${S}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?S:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${S}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ev=o().button`
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
    color: ${F};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,eM=o().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${S}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${S}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,ek=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?F:"warning"===e?"#facc15":"success"===e?S:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,eT=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,eS=o().button`
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
`;o()(H)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let eF=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,eC=o().button`
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
`,ez=o().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,eD=o().input`
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
`,eI=o().select`
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
`,eE=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${S};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,eR=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eA=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,eB=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eL=o().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,eP=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eO=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,eH=o().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,eY=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,eq=o().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,eU=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${S}; }
`,e_=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eK=o().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,eZ=o().input`
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
`,eN=o().select`
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
`,eG=o().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eW=o().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,eJ=o().div`
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
`,eQ=o().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eV=o().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eX=o().div`
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
`,e0=o().button`
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
`,e4=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,e1=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,e2=o().footer`
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
`,e3=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,e6=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,e8=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,e5=o().div`
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
  animation: ${C} 0.15s ease;

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
  }
`,e7=o().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg} ${l.w4.borderRadius.md} ${l.w4.borderRadius.md};
  border-left: 2px solid ${S};
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
`,e9=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ne=o().button`
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
`,nn=o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ni=o().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,nt=o().button`
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
`,na=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,ns=o().button`
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
`,no=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nr=o().input`
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
`,nl=o().select`
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
`,nd=o().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`,nc=o().input`
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
`,np=o().div`
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
`,nm=o().ul`
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
`,nx=o().li`
  padding: 6px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,nu=o().div`
  position: relative;
`,nh=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function ng(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function nf(e){return Math.round(e).toLocaleString("pt-PT")}function nb(){return new Date().toISOString().slice(0,10)}function nw(e,n){let[i,t,a]=e.split("-").map(Number);return new Date(i,t-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function ny(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function nj({topBarRight:e}){let[n]=(0,u.Ym)(),i=(0,a.useMemo)(()=>(0,u.Nx)(n,g.A),[n]),{data:s,loaded:o,save:r}=(0,d.useFinance)(),C=s??{...d.EMPTY_FINANCE_DATA},{canUndo:ep,latestLabelKey:ej,undo:e$}=(0,d.useUndo)(),[eG,eW]=(0,a.useState)(null),eJ=(0,a.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:C,labelKey:n,ts:Date.now()}),eW(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,p.K)(10),await r(e)},[C,r]),eQ=(0,a.useCallback)(async()=>{let e=e$();e&&(eW("finance.undo.label.reverted"),await r(e),setTimeout(()=>eW(null),2500))},[e$,r]),[eV,eX]=(0,a.useState)("overview"),[e5,e7]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[e9,ne]=(0,a.useState)("shared"),nn=(0,k.E)();(0,a.useEffect)(()=>{"expenses"!==eV&&nn.selectMode&&nn.exitSelectMode()},[eV]);let{range:ni,setRange:nt}=(0,c.H)("month"),na=(0,a.useRef)(null),ns=(0,a.useRef)(null),no=(0,a.useRef)(null),[nr,nl]=(0,a.useState)(!1),[nd,nc]=(0,a.useState)(""),[np,nm]=(0,a.useState)(""),[nx,nu]=(0,a.useState)("shared"),[nh,nT]=(0,a.useState)(!1),nS=(0,a.useRef)(null),[nF,nC]=(0,a.useState)(""),[nz,nD]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,l.PL)(ec).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&nD(n)}catch{}})},[]);let[nI,nE]=(0,a.useState)(!1),nR=(0,a.useCallback)((e,n,i,t)=>{let a=i?[i,...C.recentDescriptions].filter(Boolean).slice(0,20):C.recentDescriptions,s={...C,expenses:[...e,...C.expenses],categoryHints:n,recentDescriptions:a};for(let e of t)s=(0,d.addRecentTag)(s,e);eJ(s,"finance.undo.label.added"),nE(!1),nS.current&&clearTimeout(nS.current),nT(!0),nS.current=setTimeout(()=>nT(!1),2e3)},[C,eJ]),[nA,nB]=(0,a.useState)(""),[nL,nP]=(0,a.useState)(""),[nO,nH]=(0,a.useState)(!1),[nY,nq]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,l.PL)(ed).then(e=>{("compact"===e||"comfortable"===e)&&nq(e)})},[]);let nU=(0,a.useCallback)(()=>{let e="comfortable"===nY?"compact":"comfortable";nq(e),(0,l.Is)(ed,e)},[nY]),n_=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),nK=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(C),[C]);(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(C,e5),[C,e5]);let nZ=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(C),[C]),{insights:nN,dismiss:nG}=(0,d.useFinanceAnomalies)(),nW=(0,a.useMemo)(()=>(0,d.availableMonths)(C),[C]),nJ=(0,a.useMemo)(()=>(0,d.filterExpensesByRange)(C.expenses,ni,e5),[C.expenses,ni,e5]),nQ=(0,a.useMemo)(()=>(0,d.filterIncomeByRange)(C.income,ni,e5),[C.income,ni,e5]),nV=(0,a.useMemo)(()=>(0,d.expensesForMember)(nJ,e9),[nJ,e9]),nX=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(C,e9,n_),[C,e9,n_]),n0=(0,a.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(n_),[n_]),n4=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(C,e9,n0),[C,e9,n0]),n1=(0,a.useMemo)(()=>0===n4?0:Math.round((nX-n4)/n4*100),[nX,n4]),n2=(0,a.useMemo)(()=>{if("all"===e9)return i("finance.member.all");if("shared"===e9)return i("finance.hero.family");let e=C.familyMembers.find(e=>e.id===e9);return e?.name??i("finance.hero.family")},[e9,C.familyMembers,i]),n3=(0,a.useMemo)(()=>{if("all"===e9||"shared"===e9)return l.w4.colors.mainTextMuted;let e=C.familyMembers.findIndex(e=>e.id===e9);return -1===e?S:(0,f.a8)(C.familyMembers[e],e)},[e9,C.familyMembers]),n6=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let a=new Date(t);return a.setDate(t.getDate()+7),(0,d.expensesForMember)(C.expenses,e9).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<a}).reduce((e,n)=>e+n.amount,0)})},[C.expenses,e9]),n8=(0,a.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return i.map(i=>{let t=(0,d.expensesForMonth)(e.expenses,i),s=(0,d.expensesForMember)(t,n),o={};for(let e of s)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let r=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:ny(e).color})),over:r>a?r-a:0}})})(C,e9),[C,e9]),n5=(0,a.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let a=89;a>=0;a--){let s=new Date(i);s.setDate(i.getDate()-a);let o=s.toISOString().slice(0,10),r=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,r).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:c,exp:l})}return t})(C,e9),[C,e9]),n7=(0,a.useMemo)(()=>{let e,n;return e=new Date,n=C.expenses.length>0?C.expenses.reduce((e,n)=>e+n.amount,0)/C.expenses.length:20,Array.from({length:91},(i,t)=>{let a=new Date(e);a.setDate(e.getDate()-90+t);let s=a.toISOString().slice(0,10),o=(0,d.expensesForMember)(C.expenses.filter(e=>e.date===s),e9).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let r=o/n;return r<.5?1:r<1?2:r<2?3:4})},[C,e9]),n9=(0,a.useMemo)(()=>(0,d.dayHourSpendMatrix)((0,d.expensesForMember)(C.expenses,e9)),[C.expenses,e9]),ie=nK.budget>0?nK.spent/nK.budget*100:0,ii=C.budget.monthlyBudget>0?nX/C.budget.monthlyBudget*100:0,it=(0,a.useMemo)(()=>{let e=(0,d.parseQuickInput)(nd,C.familyMembers);return e?.description?(0,d.guessCategory)(e.description,C.categoryHints):"other"},[nd,C.categoryHints,C.familyMembers]),ia=np||nF||it;(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(nd,C.familyMembers);e?.memberId&&nu(e.memberId)},[nd,C.familyMembers]);let is=(0,a.useCallback)(e=>{e.preventDefault();let n=(0,d.parseQuickInput)(nd,C.familyMembers);if(!n)return;let i=ia||"other",t=n.memberId??("shared"!==nx?nx:void 0),a=n.tags??[],s={id:(0,h.z)(),amount:n.amount,date:nb(),categoryId:i,description:n.description||i,type:"daily",childId:t,createdAt:Date.now(),...a.length>0?{tags:a}:{}},o={...C.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(o[e]=i)});let r=[n.description||"",...C.recentDescriptions].filter(Boolean).slice(0,20),c=[s,...C.expenses],p={...C,expenses:c,categoryHints:o,recentDescriptions:r};for(let e of a)p=(0,d.addRecentTag)(p,e);eJ(p,"finance.undo.label.added");let m=(0,$.j)(c);nD(m),(0,l.Is)(ec,JSON.stringify(m)),nc(""),nm(""),nC(""),nS.current&&clearTimeout(nS.current),nT(!0),nS.current=setTimeout(()=>nT(!1),2e3)},[nd,ia,nx,C,eJ]),io=(0,a.useCallback)(e=>{eJ({...C,expenses:C.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[C,eJ]),ir=(0,a.useCallback)(e=>{eJ({...C,income:C.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[C,eJ]),il=(0,a.useCallback)(e=>{eJ({...C,expenses:C.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[C,eJ]),id=(0,a.useCallback)(()=>{let e=parseFloat(nA)||C.budget.weeklyBudget,n=parseFloat(nL)||C.budget.monthlyBudget;r({...C,budget:{...C.budget,weeklyBudget:e,monthlyBudget:n}}),nH(!0),setTimeout(()=>nH(!1),2e3)},[nA,nL,C,r]),ic=(0,a.useCallback)(()=>{let e=nn.selectedIds;0!==e.size&&(eJ({...C,expenses:C.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),nn.exitSelectMode())},[nn,C,eJ]),ip=(0,a.useCallback)(e=>{let n=nn.selectedIds;0!==n.size&&(eJ({...C,expenses:C.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),nn.exitSelectMode())},[nn,C,eJ]),im=(0,a.useCallback)(()=>{let e=nn.selectedIds;0!==e.size&&(eJ({...C,expenses:C.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),nn.exitSelectMode())},[nn,C,eJ]),ix=(0,a.useMemo)(()=>["shared",...C.familyMembers.map(e=>e.id)],[C.familyMembers]);(0,j.K)({quickAddInputRef:ns,monthSelectRef:no,memberIds:ix,activeMemberId:e9,onSelectMember:ne,onSetTab:e=>eX(e),expenseModalOpen:nI,onOpenExpenseModal:()=>nE(!0),shortcutsOpen:nr,onToggleShortcuts:()=>nl(e=>!e)});let iu=[{value:"overview",label:i("finance.tab.overview")},{value:"expenses",label:`${i("finance.tab.expenses")} ${nV.length>0?`(${nV.length})`:""}`},{value:"insights",label:`${i("finance.tab.insights")} ${nZ.length>0?`(${nZ.length})`:""}`},{value:"settings",label:i("finance.tab.settings")}],ih=[{value:"week",label:i("finance.range.week")},{value:"month",label:i("finance.range.month")},{value:"3m",label:i("finance.range.3m")},{value:"6m",label:i("finance.range.6m")},{value:"1y",label:i("finance.range.1y")},{value:"all",label:i("finance.range.all")}],ig=Math.floor(nX).toLocaleString("pt-PT"),ib=(nX%1).toFixed(2).slice(1),iw=(()=>{let[e,i]=n_.split("-");return new Date(parseInt(e),parseInt(i)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),iy=(0,t.jsx)(f.TA,{data:C,activeMemberId:e9,onSelectMember:ne,onSaveData:r,t:i,locale:n}),ij=(0,a.useMemo)(()=>{let e={};for(let n of nV)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:ny(e).color}))},[nV]),i$=ij.reduce((e,n)=>e+n.value,0),iv=(0,a.useMemo)(()=>n8.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[n8]),iM=n8.length>0?iv/n8.length:0,ik=n8.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>C.budget.monthlyBudget).length;return(0,t.jsxs)(l.PE,{title:i("finance.appTitle"),sidebar:iy,topBarRight:e,activeId:e9,children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(D,{children:(0,t.jsx)(f.jb,{data:C,activeMemberId:e9,onSelectMember:ne,t:i,locale:n})}),(0,t.jsxs)(E,{children:[(0,t.jsx)(R,{children:(0,t.jsx)(m.tU,{tabs:iu,value:eV,onChange:eX,"aria-label":i("finance.nav.ariaLabel")})}),(0,t.jsxs)(A,{children:[0===C.familyMembers.length&&(0,t.jsx)(e1,{children:i("finance.member.empty")}),(0,t.jsx)(m.K0,{onClick:nU,title:"comfortable"===nY?i("finance.density.compact"):i("finance.density.comfortable"),"aria-label":i("finance.density.toggle"),active:"compact"===nY,children:(0,t.jsx)(m.In,{name:"comfortable"===nY?"list":"menu",size:14,"aria-hidden":!0})}),(0,t.jsx)(I,{children:(0,t.jsx)(m.K0,{onClick:()=>nl(e=>!e),title:i("finance.shortcuts.title"),"aria-label":i("finance.shortcuts.title"),active:nr,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})}),"expenses"===eV&&(0,t.jsx)(m.$n,{variant:nn.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{nn.selectMode?nn.exitSelectMode():nn.enterSelectMode()},children:i("finance.bulk.select")}),(0,t.jsxs)(m.$n,{variant:"ghost",style:{height:30},onClick:()=>nE(!0),children:[(0,t.jsx)(m.In,{name:"plus",size:13,"aria-hidden":!0}),i("finance.quickAdd.newExpense")]})]})]}),"settings"!==eV&&(0,t.jsxs)(B,{"aria-label":i("finance.range.label"),children:[(0,t.jsx)(L,{children:i("finance.range.label")}),(0,t.jsx)(m.tU,{tabs:ih,value:ni,onChange:e=>{nt(e),"month"===e&&e7(n_)},"aria-label":i("finance.range.label")})]}),"settings"!==eV&&"month"===ni&&C.expenses.length>0&&(0,t.jsx)(v.f,{data:C,selectedMonth:e5,onSelectMonth:e7,locale:n,t:i}),(0,t.jsxs)(P,{children:["overview"===eV&&(0,t.jsxs)(O,{children:[(0,t.jsx)(H,{span:12,style:{borderLeft:`2px solid ${S}`},children:(0,t.jsxs)(_,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(K,{children:[(0,t.jsxs)(Z,{children:[i("finance.hero.spentIn")," ",iw," \xb7 ",n2]}),(0,t.jsxs)(N,{children:[(0,t.jsx)(G,{children:"€"}),(0,t.jsx)(W,{children:ig}),(0,t.jsx)(J,{children:ib})]}),(0,t.jsxs)(Q,{children:[(0,t.jsx)(x.Ru,{value:n1,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[i("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(n0,n)," \xb7 €",nf(n4)]})]}),n6.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(x.OW,{points:n6,accent:n3,width:280,height:34})})]}),(0,t.jsx)(V,{children:(0,t.jsxs)(X,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(en,{children:i("finance.budget.weekly")}),(0,t.jsxs)(ei,{children:["€",nf(nK.spent)," ",(0,t.jsxs)(et,{children:["/ €",nK.budget]})]})]}),(0,t.jsx)(x.Xj,{pct:ie,over:ie>100?ie-100:0}),(0,t.jsxs)(ea,{children:[(0,t.jsxs)("span",{children:[Math.round(ie),"% ",i("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:nK.remaining<0?F:S},children:nK.remaining>0?`€${nf(nK.remaining)} ${i("finance.budget.remaining")}`:`€${nf(Math.abs(nK.remaining))} ${i("finance.budget.over")}`})]}),(0,t.jsxs)(ee,{style:{marginTop:14},children:[(0,t.jsx)(en,{children:i("finance.budget.monthly")}),(0,t.jsxs)(ei,{children:["€",nf(nX)," ",(0,t.jsxs)(et,{children:["/ €",C.budget.monthlyBudget]})]})]}),(0,t.jsx)(x.Xj,{pct:ii,over:ii>100?ii-100:0}),(0,t.jsxs)(ea,{children:[(0,t.jsxs)("span",{children:[Math.round(ii),"% ",i("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[i("finance.budget.projected")," €",nf(nX+(nK.projectedTotal-nK.spent))]})]})]})})]})}),(0,t.jsxs)(H,{span:8,spanMd:12,children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(q,{children:i("finance.charts.sixMonths")}),(0,t.jsx)(U,{children:(0,t.jsx)(e3,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(e6,{children:[(0,t.jsx)(e8,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,t.jsx)(x.ik,{data:n8,budget:C.budget.monthlyBudget,height:200}),(0,t.jsxs)(eA,{children:[(0,t.jsxs)(eB,{children:[(0,t.jsx)(m.YZ,{children:i("finance.charts.total6m")}),(0,t.jsxs)(eL,{children:["€",nf(iv)]})]}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(m.YZ,{children:i("finance.charts.monthlyAvg")}),(0,t.jsxs)(eL,{children:["€",nf(iM)]})]}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(m.YZ,{children:i("finance.charts.monthsOverBudget")}),(0,t.jsxs)(eL,{children:[ik," / ",n8.length]})]}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(m.YZ,{children:i("finance.charts.trend")}),(0,t.jsxs)(eL,{style:{color:n1>0?F:S},children:[n1>0?"+":"",n1,"%"]})]})]})]}),(0,t.jsxs)(H,{span:4,spanMd:6,children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(q,{children:i("finance.charts.byCategory")}),(0,t.jsx)(e0,{type:"button",onClick:()=>eX("insights"),children:i("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(x.RJ,{data:ij,total:i$,size:110,centerLabel:iw.slice(0,3),centerValue:`€${nf(i$)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:ij.map(e=>{let i=ny(e.id),a=(0,d.expensesForMember)((0,d.expensesForMonth)(C.expenses,n0),e9).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),s=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(es,{children:[(0,t.jsx)(eo,{color:e.color}),(0,t.jsx)(er,{children:"pt"===n?i.labelPt:i.labelEn}),(0,t.jsxs)(el,{children:["€",nf(e.value)]}),Math.abs(s)>1&&(0,t.jsx)(x.Ru,{value:s,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(H,{span:5,spanMd:6,children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(q,{children:i("finance.charts.cashflow")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:i("finance.charts.cashflowSub")})]}),(0,t.jsx)(x.uj,{data:n5,height:170,legendIn:i("finance.charts.in"),legendOut:i("finance.charts.out")})]}),(0,t.jsxs)(H,{span:4,spanMd:6,children:[(0,t.jsx)(Y,{children:(0,t.jsx)(q,{children:i("finance.charts.heatmap")})}),(0,t.jsx)(x.RT,{data:n7,locale:n}),(0,t.jsxs)(eP,{children:[(0,t.jsx)("span",{children:i("finance.charts.less")}),(0,t.jsx)(eO,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:i("finance.charts.more")})]})]}),(0,t.jsxs)(H,{span:8,spanMd:12,children:[(0,t.jsx)(Y,{children:(0,t.jsx)(q,{children:i("finance.dayHourHeatmap.title")})}),(0,t.jsx)(b.D,{matrix:n9,locale:n,t:i})]}),(0,t.jsxs)(H,{span:3,spanMd:6,children:[(0,t.jsx)(Y,{children:(0,t.jsx)(q,{children:i("finance.charts.thisWeek")})}),(0,t.jsxs)(eH,{children:[(0,t.jsxs)(eY,{children:[(0,t.jsxs)(eq,{children:["€",nf(nK.spent)]}),(0,t.jsxs)(et,{children:["/ €",nK.budget]})]}),(0,t.jsx)(x.kl,{spent:nK.spent,budget:nK.budget}),(0,t.jsxs)(eU,{children:[(0,t.jsx)("span",{children:i("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:i("finance.charts.actual")})]})]})]}),(0,t.jsxs)(H,{span:7,spanMd:12,children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(q,{children:i("finance.recent.title")}),C.expenses.length>5&&(0,t.jsx)(e0,{type:"button",onClick:()=>eX("expenses"),children:i("finance.recent.viewAll",{n:nV.length})})]}),0===nV.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:i("finance.dashboard.noRecent")}):(0,t.jsx)(em,{"aria-label":i("finance.recent.title"),children:nV.slice(0,6).map(e=>(0,t.jsx)(nv,{exp:e,finData:C,locale:n,t:i,onDelete:io,onToggleReimbursed:il,compact:"compact"===nY},e.id))})]}),(0,t.jsxs)(H,{span:5,spanMd:12,children:[(0,t.jsx)(Y,{children:(0,t.jsx)(q,{children:i("finance.insights.title")})}),0===nZ.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("insights")??"—"}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nZ.map((e,n)=>(0,t.jsxs)(eM,{itype:e.type,children:[(0,t.jsx)(ek,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=C.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=C.familyMembers.indexOf(n);return(0,t.jsxs)(eT,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,f.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(H,{span:12,ref:na,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.quickAdd.title")}),(0,t.jsxs)("form",{onSubmit:is,"aria-label":i("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(eF,{children:[{id:"shared",name:i("finance.member.shared"),role:"shared",color:void 0},...C.familyMembers.map((e,n)=>({...e,color:(0,f.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,f.a8)(C.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(eC,{type:"button",active:nx===e.id,color:i,onClick:()=>nu(e.id),children:[(0,t.jsx)(m.eu,{member:a,size:18}),e.name]},e.id)})}),(0,t.jsxs)(ez,{children:[(0,t.jsx)(eD,{ref:ns,type:"text",placeholder:i("finance.quickAdd.placeholder"),value:nd,onChange:e=>{nc(e.target.value),nm("")},"aria-label":i("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,t.jsx)(eI,{value:np||it,onChange:e=>nm(e.target.value),"aria-label":i("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!nd.trim(),children:i("finance.quickAdd.add")})]}),(0,t.jsx)($.J,{expenses:C.expenses,storedOrder:nz,lockedCategoryId:nF,onToggle:e=>nC(n=>n===e?"":e),locale:n,groupLabel:i("finance.quickAdd.frequentCategories")}),(0,t.jsxs)(eE,{visible:nh,"aria-live":"polite","aria-atomic":!0,children:["✓ ",i("finance.quickAdd.added")]}),(0,t.jsx)(eR,{children:i("finance.quickAdd.hint")})]})]})]}),"expenses"===eV&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e4,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:i("finance.tx.title")}),"month"===ni&&0===C.expenses.length&&(0,t.jsx)(eN,{ref:no,value:e5,onChange:e=>e7(e.target.value),"aria-label":i("finance.insights.month"),children:nW.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),0===nV.length&&0===nQ.length?(0,t.jsx)(H,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.tx.empty")})}):(0,t.jsx)(H,{span:12,children:(0,t.jsx)(em,{"aria-label":i("finance.tx.title"),children:[...nV.map(e=>({...e,_kind:"expense"})),...nQ.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(nv,{exp:e,finData:C,locale:n,t:i,onDelete:io,onToggleReimbursed:il,compact:"compact"===nY,selectMode:nn.selectMode,selected:nn.selectedIds.has(e.id),onToggleSelect:nn.toggleId,longPressHandlers:nn.longPressHandlers,onEnterSelectMode:nn.enterSelectMode},e.id):(0,t.jsxs)(ex,{compact:"compact"===nY,children:["compact"===nY?(0,t.jsx)(eu,{color:S,"aria-hidden":!0}):(0,t.jsx)(eh,{color:S,children:"\uD83D\uDCB0"}),(0,t.jsxs)(eg,{children:[(0,t.jsx)(ef,{children:e.source}),"compact"!==nY&&(0,t.jsxs)(eb,{children:[nw(e.date,n)," \xb7 ",i("finance.dashboard.income")]})]}),(0,t.jsxs)(ew,{children:[(0,t.jsxs)(ey,{style:{color:S},children:["+€",ng(e.amount)]}),(0,t.jsx)(ev,{className:"delete-btn",type:"button",onClick:()=>ir(e.id),"aria-label":`${i("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===eV&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e4,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{children:i("finance.insights.title")}),"month"===ni&&0===C.expenses.length&&(0,t.jsx)(eN,{value:e5,onChange:e=>e7(e.target.value),"aria-label":i("finance.insights.month"),children:nW.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),(0,t.jsxs)(H,{span:12,style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.byCategory")}),(0,t.jsx)(nM,{expenses:nV,total:nV.reduce((e,n)=>e+n.amount,0),locale:n})]}),(0,t.jsxs)(H,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.monthlyTrend")}),(0,t.jsx)(nk,{data:C,months:nW.slice(0,6),locale:n,t:i})]}),(0,t.jsxs)(H,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.title")}),0===nZ.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nZ.map((e,n)=>(0,t.jsxs)(eM,{itype:e.type,children:[(0,t.jsx)(ek,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=C.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=C.familyMembers.indexOf(n);return(0,t.jsxs)(eT,{children:[(0,t.jsx)(m.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,f.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(H,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.anomalies")}),0===nN.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nN.map(e=>(0,t.jsxs)(eM,{itype:e.type,children:[(0,t.jsx)(ek,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:i(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(eS,{type:"button",title:i("finance.insights.anomalies.dismiss"),"aria-label":i("finance.insights.anomalies.dismiss"),onClick:()=>{nG(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]}),(0,t.jsx)(T.n,{})]}),"settings"===eV&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(H,{span:12,children:[(0,t.jsx)(m.YZ,{style:{marginBottom:l.w4.spacing.md},children:i("finance.settings.title")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(e_,{children:[(0,t.jsx)(eK,{htmlFor:"weekly-budget",children:i("finance.settings.weeklyBudget")}),(0,t.jsx)(eZ,{id:"weekly-budget",type:"number",min:"1",placeholder:String(C.budget.weeklyBudget),value:nA,onChange:e=>nB(e.target.value)})]}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eK,{htmlFor:"monthly-budget",children:i("finance.settings.monthlyBudget")}),(0,t.jsx)(eZ,{id:"monthly-budget",type:"number",min:"1",placeholder:String(C.budget.monthlyBudget),value:nL,onChange:e=>nP(e.target.value)})]}),(0,t.jsx)(m.$n,{variant:"primary",onClick:id,style:{height:44},children:nO?i("finance.settings.saved"):i("finance.settings.save")})]})]})})]}),(0,t.jsxs)(e2,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),nI&&(0,t.jsx)(n$,{finData:C,activeMemberId:e9,locale:n,t:i,onClose:()=>nE(!1),onSubmit:nR}),(0,t.jsx)(w.S,{labelKey:eG,onUndo:()=>{eQ()},onDismiss:()=>eW(null),t:i}),nn.selectMode&&"expenses"===eV&&(0,t.jsx)(M.S,{selectionCount:nn.selectedIds.size,visibleIds:nV.map(e=>e.id),selectedIds:nn.selectedIds,categories:d.DEFAULT_CATEGORIES,locale:n,t:i,onCancel:nn.exitSelectMode,onSelectAll:()=>nn.selectAll(nV.map(e=>e.id)),onCategorise:ip,onDelete:ic,onMarkReimbursed:im}),nr&&(0,t.jsx)(y.m,{t:i,onClose:()=>nl(!1)})]})}function n$({finData:e,activeMemberId:n,locale:i,t:s,onClose:o,onSubmit:r}){let[c,p]=(0,a.useState)(""),[x,u]=(0,a.useState)(""),[g,b]=(0,a.useState)("other"),[w,y]=(0,a.useState)(nb()),[j,$]=(0,a.useState)("single"),[v,M]=(0,a.useState)(n),[k,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,a.useState)([]),[C,z]=(0,a.useState)(""),[D,I]=(0,a.useState)(!1),E=(0,a.useRef)(null);(0,a.useEffect)(()=>{x.trim()&&b((0,d.guessCategory)(x,e.categoryHints))},[x,e.categoryHints]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let R=parseFloat(c.replace(",","."))||0,A=k.length,B="split"===j&&A>0?R/A:R,L=R>0&&!!w&&("single"===j||"split"===j&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),z(""),I(!1))},O=(0,a.useMemo)(()=>{let n=C.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[C,e.recentTags,S]),H=[{id:"shared",name:s("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,f.a8)(e,n),role:e.role}))];return(0,t.jsx)(e5,{onClick:o,role:"dialog","aria-modal":"true","aria-label":s("finance.quickAdd.newExpense"),children:(0,t.jsxs)(e7,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(e9,{children:[(0,t.jsxs)(m.YZ,{children:["◉ ",s("finance.quickAdd.newExpense")]}),(0,t.jsx)(ne,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!L)return;let t=x.trim(),a=Date.now(),s={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(s[e]=g)});let o=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,h.z)(),amount:R,date:w,categoryId:g,description:t||g,type:"daily",childId:"shared"===v?void 0:v,createdAt:a,...o}];else{let e=Math.round(R/A*100)/100,n=Math.round((R-e*A)*100)/100;i=k.map((i,s)=>({id:(0,h.z)(),amount:0===s?e+n:e,date:w,categoryId:g,description:t?`${t} (1/${A})`:g,type:"daily",childId:i,createdAt:a+s,...o}))}r(i,s,t,S)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(nn,{children:[(0,t.jsxs)(e_,{children:[(0,t.jsx)(eK,{htmlFor:"exp-amount",children:s("finance.modal.amount")}),(0,t.jsx)(nr,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:c,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eK,{htmlFor:"exp-date",children:s("finance.modal.date")}),(0,t.jsx)(nr,{id:"exp-date",type:"date",value:w,onChange:e=>y(e.target.value)})]})]}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eK,{htmlFor:"exp-desc",children:s("finance.modal.description")}),(0,t.jsx)(nr,{id:"exp-desc",type:"text",placeholder:s("finance.modal.descPlaceholder"),value:x,onChange:e=>u(e.target.value)})]}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eK,{htmlFor:"exp-cat",children:s("finance.quickAdd.category")}),(0,t.jsx)(nl,{id:"exp-cat",value:g,onChange:e=>b(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===i?e.labelPt:e.labelEn]},e.id))})]}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eK,{children:s("finance.tags.label")}),(0,t.jsxs)(nu,{children:[(0,t.jsxs)(np,{onClick:()=>E.current?.focus(),children:[S.map(e=>(0,t.jsxs)(m.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":s("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(nc,{ref:E,type:"text",value:C,placeholder:0===S.length?s("finance.tags.placeholder"):"",onChange:e=>{z(e.target.value),I(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(C)):"Backspace"===e.key&&""===C&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&I(!1)},onBlur:()=>{C.trim()&&P(C),setTimeout(()=>I(!1),150)},onFocus:()=>I(!0),"aria-label":s("finance.tags.label")})]}),D&&O.length>0&&(0,t.jsx)(nm,{children:O.map(e=>(0,t.jsxs)(nx,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eK,{children:s("finance.modal.assign")}),(0,t.jsxs)(ni,{role:"tablist",children:[(0,t.jsx)(nt,{type:"button",active:"single"===j,onClick:()=>$("single"),children:s("finance.modal.member")}),(0,t.jsx)(nt,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:s("finance.modal.split")})]}),"single"===j?(0,t.jsx)(na,{style:{marginTop:l.w4.spacing.sm},children:H.map(e=>(0,t.jsxs)(ns,{type:"button",active:v===e.id,color:e.color,onClick:()=>M(e.id),children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(na,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,f.a8)(e,n),a=k.includes(e.id);return(0,t.jsxs)(ns,{type:"button",active:a,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(m.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&R>0&&(0,t.jsx)(no,{style:{marginTop:l.w4.spacing.xs},children:s("finance.modal.splitEach",{n:A,amount:ng(B)})})]})]}),(0,t.jsxs)(nd,{children:[(0,t.jsx)(m.$n,{type:"button",variant:"ghost",onClick:o,children:s("finance.member.cancel")}),(0,t.jsx)(m.$n,{type:"submit",variant:"primary",disabled:!L,children:s("finance.quickAdd.add")})]})]})]})})}function nv({exp:e,finData:n,locale:i,t:a,onDelete:s,onToggleReimbursed:o,compact:r=!1,selectMode:d=!1,selected:c=!1,onToggleSelect:p,longPressHandlers:x}){let u=ny(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),g=h>=0?n.familyMembers[h]:null,b=g?(0,f.a8)(g,h):l.w4.colors.mainTextMuted,w=x?x(e.id):null,y=n=>{d&&p&&"INPUT"!==n.target.tagName&&p(e.id)},j=e.isReimbursable&&!d?o?(0,t.jsx)(e$,{type:"button",ok:e.reimbursed,onClick:()=>o(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(ej,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,$=d?null:(0,t.jsx)(ev,{className:"delete-btn",type:"button",onClick:()=>s(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),v=d?(0,t.jsx)(ep,{type:"checkbox",checked:c,"aria-label":e.description,onChange:()=>p?.(e.id),onClick:e=>e.stopPropagation()}):null,M=d?{background:c?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:c?"1px solid rgba(127,183,126,0.35)":"none"}:{};return r?(0,t.jsxs)(ex,{compact:!0,style:M,onClick:y,...w??{},children:[v,(0,t.jsx)(eu,{color:u.color,"aria-hidden":!0}),(0,t.jsx)(eg,{children:(0,t.jsxs)(ef,{style:{display:"flex",alignItems:"center",gap:6},children:[g?(0,t.jsx)(m.eu,{member:{id:g.id,name:g.name,role:g.role,color:b},size:16}):null,(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||("pt"===i?u.labelPt:u.labelEn)})]})}),(0,t.jsxs)(ew,{children:[j,(0,t.jsxs)(ey,{children:["−€",ng(e.amount)]}),$]})]}):(0,t.jsxs)(ex,{style:M,onClick:y,...w??{},children:[v,(0,t.jsx)(eh,{color:u.color,children:(0,t.jsx)("span",{"aria-hidden":!0,children:u.icon})}),(0,t.jsxs)(eg,{children:[(0,t.jsx)(ef,{children:e.description||("pt"===i?u.labelPt:u.labelEn)}),(0,t.jsxs)(eb,{children:[g?(0,t.jsx)(m.eu,{member:{id:g.id,name:g.name,role:g.role,color:b},size:14}):null,(0,t.jsx)("span",{children:"pt"===i?u.labelPt:u.labelEn}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:nw(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:a("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(nh,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(ew,{children:[j,"recurring"===e.type&&(0,t.jsx)(ej,{children:a("finance.tx.recurring")}),(0,t.jsxs)(ey,{children:["−€",ng(e.amount)]}),$]})]})}function nM({expenses:e,total:n,locale:i}){let s=Object.entries((0,a.useMemo)(()=>{let n={};for(let i of e)n[i.categoryId]=(n[i.categoryId]??0)+i.amount;return n},[e])).map(([e,n])=>({cat:ny(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===s.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:"—"}):(0,t.jsx)(eG,{children:s.map(({cat:e,amt:a})=>{let s=n>0?a/n*100:0;return(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eJ,{children:[(0,t.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===i?e.labelPt:e.labelEn]}),(0,t.jsx)(eQ,{children:(0,t.jsx)(eV,{pct:s,color:e.color})}),(0,t.jsxs)(eX,{children:["€",a.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function nk({data:e,months:n,locale:i,t:a}){let s=n.map(n=>(0,d.computeMonthlySummary)(e,n)),o=Math.max(...s.map(e=>e.totalExpenses),1);return s.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)(eG,{children:s.map(e=>{let n=e.totalExpenses/o*100,[,a]=e.month.split("-"),s=new Date(parseInt(e.month.slice(0,4)),parseInt(a)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"short"});return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eJ,{style:{width:80},children:s}),(0,t.jsx)(eQ,{children:(0,t.jsx)(eV,{pct:n,color:l.w4.colors.accent})}),(0,t.jsxs)(eX,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}}}]);