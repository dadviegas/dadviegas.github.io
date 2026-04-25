"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["512"],{8997(e,n,i){var t=i(2727);n.createRoot=t.createRoot,t.hydrateRoot},3611(e,n,i){var t=i(5723),a=i(8997),o=i(7991),s=i(6859),r=i.n(s),l=i(2799),d=i(9874),c=i(3400),p=i(3759),m=i(789),x=i(8395),u=i(1496),h=i(8170),g=i(4041),f=i(948),b=i(719),w=i(2405),y=i(9546),j=i(5854),$=i(3616),v=i(6579),M=i(8989),k=i(6376),T=i(9146),S=i(7737);let F="#7fb77e",C="#f85149",z=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,D=r().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${z} 0.25s ease both;
  overflow: hidden;
`,I=r().div`
  display: block;
  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,R=r().div`
  display: none;
  @media (min-width: ${d.w4.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`,E=r().div`
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
`,A=r().div`
  flex: 1;
  min-width: 0;
`,B=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.xs};
  flex-shrink: 0;
`,L=r().div`
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
`,P=r().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.mainTextMuted};
  flex-shrink: 0;
  user-select: none;
`,O=r().div`
  flex: 1;
  overflow-y: auto;
  padding: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.lg};
  }
`,H=r().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,Y=r().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  border-left: 2px solid ${F};
  transition: border-color 120ms ease;
  min-width: 0;

  &:hover {
    border-color: ${d.w4.colors.mainTextMuted};
    border-left-color: ${F};
  }

  @media (min-width: ${d.w4.breakpoints.md}) {
    grid-column: span ${({spanMd:e,span:n})=>e??n??12};
  }

  @media (min-width: ${d.w4.breakpoints.lg}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,q=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${d.w4.spacing.sm};
  gap: ${d.w4.spacing.sm};
`,U=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
`,_=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,K=r().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  border-left: 2px solid ${F};
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Z=r().div`
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
`,G=r().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,W=r().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,J=r().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,Q=r().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,V=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,X=r().div`
  flex-shrink: 0;
  width: 100%;
  min-width: 0;

  @media (min-width: ${d.w4.breakpoints.md}) {
    width: 260px;
  }
`,ee=r().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,en=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,ei=r().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.mainTextMuted};
`,et=r().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`,ea=r().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,eo=r().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,es=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding: 4px 0;
`,er=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,el=r().span`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ed=r().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,ec="finance:list-density",ep="finance:quick-categories",em=r().input`
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
`,ex=r().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,eu=r().li`
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
`,eh=r().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,eg=r().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${d.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,ef=r().div`
  flex: 1;
  min-width: 0;
`,eb=r().div`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ew=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,ey=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  flex-shrink: 0;
`,ej=r().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,e$=r().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${F}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?F:"#facc15"};
  white-space: nowrap;
`,ev=r().button`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${F}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?F:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${F}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,eM=r().button`
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
    color: ${C};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,ek=r().div`
  display: flex;
  align-items: flex-start;
  gap: ${d.w4.spacing.sm};
  padding: 10px ${d.w4.spacing.sm};
  border-radius: ${d.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${F}14`:d.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${F}44`:d.w4.colors.border};
  font-size: 13px;
  color: ${d.w4.colors.mainText};
`,eT=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?C:"warning"===e?"#facc15":"success"===e?F:d.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,eS=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`,eF=r().button`
  margin-left: auto;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 2px 4px;
  cursor: pointer;
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1;
  border-radius: ${d.w4.borderRadius.sm};
  transition: color 120ms ease, background 120ms ease;
  &:hover {
    color: ${d.w4.colors.mainText};
    background: ${d.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`;r()(Y)`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`;let eC=r().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 2px;
`,ez=r().button`
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
`,eD=r().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${d.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,eI=r().input`
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
`,eR=r().select`
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
`,eE=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${F};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,eA=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,eB=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.md};
  margin-top: ${d.w4.spacing.sm};
  padding-top: ${d.w4.spacing.sm};
  border-top: 1px solid ${d.w4.colors.border};
`,eL=r().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eP=r().div`
  font-size: 18px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,eO=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,eH=r().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,eY=r().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,eq=r().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,eU=r().span`
  font-size: 22px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,e_=r().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};

  span.fin { color: ${F}; }
`,eK=r().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eZ=r().label`
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
`,eN=r().input`
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
`,eG=r().select`
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
`,eW=r().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eJ=r().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,eQ=r().div`
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
`,eV=r().div`
  flex: 1;
  height: 8px;
  background: ${d.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eX=r().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,e0=r().div`
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
`,e4=r().button`
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
`,e1=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
`,e2=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.accent};
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
`,e3=r().footer`
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
`,e6=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,e8=r().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,e5=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,e7=r().div`
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
  animation: ${z} 0.15s ease;

  @media (min-width: ${d.w4.breakpoints.md}) {
    align-items: center;
  }
`,e9=r().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg} ${d.w4.borderRadius.lg} ${d.w4.borderRadius.md} ${d.w4.borderRadius.md};
  border-left: 2px solid ${F};
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
`,ne=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nn=r().button`
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
`,ni=r().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nt=r().div`
  display: inline-flex;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,na=r().button`
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
`,no=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.xs};
`,ns=r().button`
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
`,nr=r().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,nl=r().input`
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
`,nd=r().select`
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
`,nc=r().div`
  display: flex;
  justify-content: flex-end;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};
`,np=r().input`
  flex: 1;
  min-width: 80px;
  background: transparent;
  border: none;
  outline: none;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  padding: 2px 0;
  &::placeholder { color: ${d.w4.colors.mainTextMuted}; }
`,nm=r().div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${d.w4.spacing.xs};
  padding: 6px ${d.w4.spacing.sm};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  min-height: 36px;
  cursor: text;
  &:focus-within {
    border-color: ${d.w4.colors.accent};
  }
`,nx=r().ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 20;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 4px 0;
  list-style: none;
  margin: 0;
  max-height: 160px;
  overflow-y: auto;
`,nu=r().li`
  padding: 6px ${d.w4.spacing.sm};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainText};
  cursor: pointer;
  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
`,nh=r().div`
  position: relative;
`,ng=r().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function nf(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function nb(e){return Math.round(e).toLocaleString("pt-PT")}function nw(){return new Date().toISOString().slice(0,10)}function ny(e,n){let[i,t,a]=e.split("-").map(Number);return new Date(i,t-1,a).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function nj(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function n$({finData:e,activeMemberId:n,locale:i,t:a,onClose:s,onSubmit:r}){let[l,p]=(0,o.useState)(""),[m,u]=(0,o.useState)(""),[h,f]=(0,o.useState)("other"),[w,y]=(0,o.useState)(nw()),[j,$]=(0,o.useState)("single"),[v,M]=(0,o.useState)(n),[k,T]=(0,o.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id)),[S,F]=(0,o.useState)([]),[C,z]=(0,o.useState)(""),[D,I]=(0,o.useState)(!1),R=(0,o.useRef)(null);(0,o.useEffect)(()=>{m.trim()&&f((0,c.guessCategory)(m,e.categoryHints))},[m,e.categoryHints]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]);let E=parseFloat(l.replace(",","."))||0,A=k.length,B="split"===j&&A>0?E/A:E,L=E>0&&!!w&&("single"===j||"split"===j&&A>0),P=e=>{let n=e.trim().replace(/^#/,"");n&&(F(e=>e.some(e=>e.toLowerCase()===n.toLowerCase())?e:[...e,n]),z(""),I(!1))},O=(0,o.useMemo)(()=>{let n=C.replace(/^#/,"").toLowerCase();return n?(e.recentTags??[]).filter(e=>e.toLowerCase().includes(n)&&!S.includes(e)):(e.recentTags??[]).filter(e=>!S.includes(e))},[C,e.recentTags,S]),H=[{id:"shared",name:a("finance.member.shared"),color:d.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,b.a8)(e,n),role:e.role}))];return(0,t.jsx)(e7,{onClick:s,role:"dialog","aria-modal":"true","aria-label":a("finance.quickAdd.newExpense"),children:(0,t.jsxs)(e9,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(ne,{children:[(0,t.jsxs)(x.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(nn,{type:"button",onClick:s,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!L)return;let t=m.trim(),a=Date.now(),o={...e.categoryHints};t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(o[e]=h)});let s=S.length>0?{tags:S}:{};if("single"===j)i=[{id:(0,g.z)(),amount:E,date:w,categoryId:h,description:t||h,type:"daily",childId:"shared"===v?void 0:v,createdAt:a,...s}];else{let e=Math.round(E/A*100)/100,n=Math.round((E-e*A)*100)/100;i=k.map((i,o)=>({id:(0,g.z)(),amount:0===o?e+n:e,date:w,categoryId:h,description:t?`${t} (1/${A})`:h,type:"daily",childId:i,createdAt:a+o,...s}))}r(i,o,t,S)},style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.md},children:[(0,t.jsxs)(ni,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eZ,{htmlFor:"exp-amount",children:a("finance.modal.amount")}),(0,t.jsx)(nl,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>p(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eZ,{htmlFor:"exp-date",children:a("finance.modal.date")}),(0,t.jsx)(nl,{id:"exp-date",type:"date",value:w,onChange:e=>y(e.target.value)})]})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eZ,{htmlFor:"exp-desc",children:a("finance.modal.description")}),(0,t.jsx)(nl,{id:"exp-desc",type:"text",placeholder:a("finance.modal.descPlaceholder"),value:m,onChange:e=>u(e.target.value)})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eZ,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(nd,{id:"exp-cat",value:h,onChange:e=>f(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===i?e.labelPt:e.labelEn]},e.id))})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eZ,{children:a("finance.tags.label")}),(0,t.jsxs)(nh,{children:[(0,t.jsxs)(nm,{onClick:()=>R.current?.focus(),children:[S.map(e=>(0,t.jsxs)(x.vu,{variant:"selected",onClick:()=>{F(n=>n.filter(n=>n!==e))},"aria-label":a("finance.tags.removeLabel",{tag:e}),children:["#",e," \xd7"]},e)),(0,t.jsx)(np,{ref:R,type:"text",value:C,placeholder:0===S.length?a("finance.tags.placeholder"):"",onChange:e=>{z(e.target.value),I(!0)},onKeyDown:e=>{"Enter"===e.key||","===e.key?(e.preventDefault(),P(C)):"Backspace"===e.key&&""===C&&S.length>0?F(e=>e.slice(0,-1)):"Escape"===e.key&&I(!1)},onBlur:()=>{C.trim()&&P(C),setTimeout(()=>I(!1),150)},onFocus:()=>I(!0),"aria-label":a("finance.tags.label")})]}),D&&O.length>0&&(0,t.jsx)(nx,{children:O.map(e=>(0,t.jsxs)(nu,{onMouseDown:n=>{n.preventDefault(),P(e)},children:["#",e]},e))})]})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eZ,{children:a("finance.modal.assign")}),(0,t.jsxs)(nt,{role:"tablist",children:[(0,t.jsx)(na,{type:"button",active:"single"===j,onClick:()=>$("single"),children:a("finance.modal.member")}),(0,t.jsx)(na,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:a("finance.modal.split")})]}),"single"===j?(0,t.jsx)(no,{style:{marginTop:d.w4.spacing.sm},children:H.map(e=>(0,t.jsxs)(ns,{type:"button",active:v===e.id,color:e.color,onClick:()=>M(e.id),children:[(0,t.jsx)(x.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(no,{style:{marginTop:d.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,b.a8)(e,n),a=k.includes(e.id);return(0,t.jsxs)(ns,{type:"button",active:a,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(x.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),A>0&&E>0&&(0,t.jsx)(nr,{style:{marginTop:d.w4.spacing.xs},children:a("finance.modal.splitEach",{n:A,amount:nf(B)})})]})]}),(0,t.jsxs)(nc,{children:[(0,t.jsx)(x.$n,{type:"button",variant:"ghost",onClick:s,children:a("finance.member.cancel")}),(0,t.jsx)(x.$n,{type:"submit",variant:"primary",disabled:!L,children:a("finance.quickAdd.add")})]})]})]})})}function nv({exp:e,finData:n,locale:i,t:a,onDelete:o,onToggleReimbursed:s,compact:r=!1,selectMode:l=!1,selected:c=!1,onToggleSelect:p,longPressHandlers:m}){let u=nj(e.categoryId),h=n.familyMembers.findIndex(n=>n.id===e.childId),g=h>=0?n.familyMembers[h]:null,f=g?(0,b.a8)(g,h):d.w4.colors.mainTextMuted,w=m?m(e.id):null,y=n=>{l&&p&&"INPUT"!==n.target.tagName&&p(e.id)},j=e.isReimbursable&&!l?s?(0,t.jsx)(ev,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":a("finance.tx.markReimbursed"),children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(e$,{ok:e.reimbursed,children:a(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,$=l?null:(0,t.jsx)(eM,{className:"delete-btn",type:"button",onClick:()=>o(e.id),"aria-label":`${a("finance.tx.delete")} ${e.description}`,children:"\xd7"}),v=l?(0,t.jsx)(em,{type:"checkbox",checked:c,"aria-label":e.description,onChange:()=>p?.(e.id),onClick:e=>e.stopPropagation()}):null,M=l?{background:c?"rgba(127,183,126,0.08)":void 0,cursor:"pointer",borderRadius:6,outline:c?"1px solid rgba(127,183,126,0.35)":"none"}:{};return r?(0,t.jsxs)(eu,{compact:!0,style:M,onClick:y,...w??{},children:[v,(0,t.jsx)(eh,{color:u.color,"aria-hidden":!0}),(0,t.jsx)(ef,{children:(0,t.jsxs)(eb,{style:{display:"flex",alignItems:"center",gap:6},children:[g?(0,t.jsx)(x.eu,{member:{id:g.id,name:g.name,role:g.role,color:f},size:16}):null,(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||("pt"===i?u.labelPt:u.labelEn)})]})}),(0,t.jsxs)(ey,{children:[j,(0,t.jsxs)(ej,{children:["−€",nf(e.amount)]}),$]})]}):(0,t.jsxs)(eu,{style:M,onClick:y,...w??{},children:[v,(0,t.jsx)(eg,{color:u.color,children:(0,t.jsx)("span",{"aria-hidden":!0,children:u.icon})}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eb,{children:e.description||("pt"===i?u.labelPt:u.labelEn)}),(0,t.jsxs)(ew,{children:[g?(0,t.jsx)(x.eu,{member:{id:g.id,name:g.name,role:g.role,color:f},size:14}):null,(0,t.jsx)("span",{children:"pt"===i?u.labelPt:u.labelEn}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:ny(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:a("finance.modal.monthlyLabel")})]}),e.tags&&e.tags.length>0&&(0,t.jsxs)(ng,{"aria-label":"tags",children:[" \xb7 ",e.tags.map(e=>`#${e}`).join(" ")]})]})]}),(0,t.jsxs)(ey,{children:[j,"recurring"===e.type&&(0,t.jsx)(e$,{children:a("finance.tx.recurring")}),(0,t.jsxs)(ej,{children:["−€",nf(e.amount)]}),$]})]})}function nM({expenses:e,total:n,locale:i}){let a=Object.entries((0,o.useMemo)(()=>{let n={};for(let i of e)n[i.categoryId]=(n[i.categoryId]??0)+i.amount;return n},[e])).map(([e,n])=>({cat:nj(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===a.length?(0,t.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:"—"}):(0,t.jsx)(eW,{children:a.map(({cat:e,amt:a})=>{let o=n>0?a/n*100:0;return(0,t.jsxs)(eJ,{children:[(0,t.jsxs)(eQ,{children:[(0,t.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===i?e.labelPt:e.labelEn]}),(0,t.jsx)(eV,{children:(0,t.jsx)(eX,{pct:o,color:e.color})}),(0,t.jsxs)(e0,{children:["€",a.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function nk({data:e,months:n,locale:i,t:a}){let o=n.map(n=>(0,c.computeMonthlySummary)(e,n)),s=Math.max(...o.map(e=>e.totalExpenses),1);return o.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,t.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:a("finance.insights.noData")}):(0,t.jsx)(eW,{children:o.map(e=>{let n=e.totalExpenses/s*100,[,a]=e.month.split("-"),o=new Date(parseInt(e.month.slice(0,4)),parseInt(a)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"short"});return(0,t.jsxs)(eJ,{children:[(0,t.jsx)(eQ,{style:{width:80},children:o}),(0,t.jsx)(eV,{children:(0,t.jsx)(eX,{pct:n,color:d.w4.colors.accent})}),(0,t.jsxs)(e0,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}let nT=document.getElementById("root");if(!nT)throw Error("Root element #root not found");(0,a.createRoot)(nT).render((0,t.jsx)(function({topBarRight:e}){let[n]=(0,h.Ym)(),i=(0,o.useMemo)(()=>(0,h.Nx)(n,f.A),[n]),{data:a,loaded:s,save:r}=(0,c.useFinance)(),l=a??{...c.EMPTY_FINANCE_DATA},{canUndo:z,latestLabelKey:em,undo:e$}=(0,c.useUndo)(),[ev,eW]=(0,o.useState)(null),eJ=(0,o.useCallback)(async(e,n)=>{(0,c.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:l,labelKey:n,ts:Date.now()}),eW(n),("finance.undo.label.added"===n||"finance.undo.label.reimbursed"===n)&&(0,m.K)(10),await r(e)},[l,r]),eQ=(0,o.useCallback)(async()=>{let e=e$();e&&(eW("finance.undo.label.reverted"),await r(e),setTimeout(()=>eW(null),2500))},[e$,r]),[eV,eX]=(0,o.useState)("overview"),[e0,e7]=(0,o.useState)(()=>(0,c.thisMonthKey)()),[e9,ne]=(0,o.useState)("shared"),nn=(0,T.E)();(0,o.useEffect)(()=>{"expenses"!==eV&&nn.selectMode&&nn.exitSelectMode()},[eV]);let{range:ni,setRange:nt}=(0,p.H)("month"),na=(0,o.useRef)(null),no=(0,o.useRef)(null),ns=(0,o.useRef)(null),[nr,nl]=(0,o.useState)(!1),[nd,nc]=(0,o.useState)(""),[np,nm]=(0,o.useState)(""),[nx,nu]=(0,o.useState)("shared"),[nh,ng]=(0,o.useState)(!1),nT=(0,o.useRef)(null),[nS,nF]=(0,o.useState)(""),[nC,nz]=(0,o.useState)(null);(0,o.useEffect)(()=>{(0,d.PL)(ep).then(e=>{if(e)try{let n=JSON.parse(e);Array.isArray(n)&&n.every(e=>"string"==typeof e)&&nz(n)}catch{}})},[]);let[nD,nI]=(0,o.useState)(!1),nR=(0,o.useCallback)((e,n,i,t)=>{let a=i?[i,...l.recentDescriptions].filter(Boolean).slice(0,20):l.recentDescriptions,o={...l,expenses:[...e,...l.expenses],categoryHints:n,recentDescriptions:a};for(let e of t)o=(0,c.addRecentTag)(o,e);eJ(o,"finance.undo.label.added"),nI(!1),nT.current&&clearTimeout(nT.current),ng(!0),nT.current=setTimeout(()=>ng(!1),2e3)},[l,eJ]),[nE,nA]=(0,o.useState)(""),[nB,nL]=(0,o.useState)(""),[nP,nO]=(0,o.useState)(!1),[nH,nY]=(0,o.useState)("comfortable");(0,o.useEffect)(()=>{(0,d.PL)(ec).then(e=>{("compact"===e||"comfortable"===e)&&nY(e)})},[]);let nq=(0,o.useCallback)(()=>{let e="comfortable"===nH?"compact":"comfortable";nY(e),(0,d.Is)(ec,e)},[nH]),nU=(0,o.useMemo)(()=>(0,c.thisMonthKey)(),[]),n_=(0,o.useMemo)(()=>(0,c.computeWeeklyStatus)(l),[l]);(0,o.useMemo)(()=>(0,c.computeMonthlySummary)(l,e0),[l,e0]);let nK=(0,o.useMemo)(()=>(0,c.generateInsightsWithMembers)(l),[l]),{insights:nZ,dismiss:nN}=(0,c.useFinanceAnomalies)(),nG=(0,o.useMemo)(()=>(0,c.availableMonths)(l),[l]),nW=(0,o.useMemo)(()=>(0,c.filterExpensesByRange)(l.expenses,ni,e0),[l.expenses,ni,e0]),nJ=(0,o.useMemo)(()=>(0,c.filterIncomeByRange)(l.income,ni,e0),[l.income,ni,e0]),nQ=(0,o.useMemo)(()=>(0,c.expensesForMember)(nW,e9),[nW,e9]),nV=(0,o.useMemo)(()=>(0,c.monthlyTotalByMember)(l,e9,nU),[l,e9,nU]),nX=(0,o.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(nU),[nU]),n0=(0,o.useMemo)(()=>(0,c.monthlyTotalByMember)(l,e9,nX),[l,e9,nX]),n4=(0,o.useMemo)(()=>0===n0?0:Math.round((nV-n0)/n0*100),[nV,n0]),n1=(0,o.useMemo)(()=>{if("all"===e9)return i("finance.member.all");if("shared"===e9)return i("finance.hero.family");let e=l.familyMembers.find(e=>e.id===e9);return e?.name??i("finance.hero.family")},[e9,l.familyMembers,i]),n2=(0,o.useMemo)(()=>{if("all"===e9||"shared"===e9)return d.w4.colors.mainTextMuted;let e=l.familyMembers.findIndex(e=>e.id===e9);return -1===e?F:(0,b.a8)(l.familyMembers[e],e)},[e9,l.familyMembers]),n3=(0,o.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let a=new Date(t);return a.setDate(t.getDate()+7),(0,c.expensesForMember)(l.expenses,e9).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<a}).reduce((e,n)=>e+n.amount,0)})},[l.expenses,e9]),n6=(0,o.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let a=e.budget.monthlyBudget;return i.map(i=>{let t=(0,c.expensesForMonth)(e.expenses,i),o=(0,c.expensesForMember)(t,n),s={};for(let e of o)s[e.categoryId]=(s[e.categoryId]??0)+e.amount;let r=Object.values(s).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(s).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:nj(e).color})),over:r>a?r-a:0}})})(l,e9),[l,e9]),n8=(0,o.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let a=89;a>=0;a--){let o=new Date(i);o.setDate(i.getDate()-a);let s=o.toISOString().slice(0,10),r=s.slice(0,7),l=(0,c.expensesForMember)(e.expenses.filter(e=>e.date===s),n).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,r).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:d,exp:l})}return t})(l,e9),[l,e9]),n5=(0,o.useMemo)(()=>{let e,n;return e=new Date,n=l.expenses.length>0?l.expenses.reduce((e,n)=>e+n.amount,0)/l.expenses.length:20,Array.from({length:91},(i,t)=>{let a=new Date(e);a.setDate(e.getDate()-90+t);let o=a.toISOString().slice(0,10),s=(0,c.expensesForMember)(l.expenses.filter(e=>e.date===o),e9).reduce((e,n)=>e+n.amount,0);if(0===s)return 0;let r=s/n;return r<.5?1:r<1?2:r<2?3:4})},[l,e9]),n7=(0,o.useMemo)(()=>(0,c.dayHourSpendMatrix)((0,c.expensesForMember)(l.expenses,e9)),[l.expenses,e9]),n9=n_.budget>0?n_.spent/n_.budget*100:0,ie=l.budget.monthlyBudget>0?nV/l.budget.monthlyBudget*100:0,ii=(0,o.useMemo)(()=>{let e=(0,c.parseQuickInput)(nd,l.familyMembers);return e?.description?(0,c.guessCategory)(e.description,l.categoryHints):"other"},[nd,l.categoryHints,l.familyMembers]),it=np||nS||ii;(0,o.useEffect)(()=>{let e=(0,c.parseQuickInput)(nd,l.familyMembers);e?.memberId&&nu(e.memberId)},[nd,l.familyMembers]);let ia=(0,o.useCallback)(e=>{e.preventDefault();let n=(0,c.parseQuickInput)(nd,l.familyMembers);if(!n)return;let i=it||"other",t=n.memberId??("shared"!==nx?nx:void 0),a=n.tags??[],o={id:(0,g.z)(),amount:n.amount,date:nw(),categoryId:i,description:n.description||i,type:"daily",childId:t,createdAt:Date.now(),...a.length>0?{tags:a}:{}},s={...l.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(s[e]=i)});let r=[n.description||"",...l.recentDescriptions].filter(Boolean).slice(0,20),p=[o,...l.expenses],m={...l,expenses:p,categoryHints:s,recentDescriptions:r};for(let e of a)m=(0,c.addRecentTag)(m,e);eJ(m,"finance.undo.label.added");let x=(0,v.j)(p);nz(x),(0,d.Is)(ep,JSON.stringify(x)),nc(""),nm(""),nF(""),nT.current&&clearTimeout(nT.current),ng(!0),nT.current=setTimeout(()=>ng(!1),2e3)},[nd,it,nx,l,eJ]),io=(0,o.useCallback)(e=>{eJ({...l,expenses:l.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[l,eJ]),is=(0,o.useCallback)(e=>{eJ({...l,income:l.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[l,eJ]),ir=(0,o.useCallback)(e=>{eJ({...l,expenses:l.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[l,eJ]),il=(0,o.useCallback)(()=>{let e=parseFloat(nE)||l.budget.weeklyBudget,n=parseFloat(nB)||l.budget.monthlyBudget;r({...l,budget:{...l.budget,weeklyBudget:e,monthlyBudget:n}}),nO(!0),setTimeout(()=>nO(!1),2e3)},[nE,nB,l,r]),id=(0,o.useCallback)(()=>{let e=nn.selectedIds;0!==e.size&&(eJ({...l,expenses:l.expenses.filter(n=>!e.has(n.id))},"finance.undo.label.deleted"),nn.exitSelectMode())},[nn,l,eJ]),ic=(0,o.useCallback)(e=>{let n=nn.selectedIds;0!==n.size&&(eJ({...l,expenses:l.expenses.map(i=>n.has(i.id)?{...i,categoryId:e}:i)},"finance.undo.label.edited"),nn.exitSelectMode())},[nn,l,eJ]),ip=(0,o.useCallback)(()=>{let e=nn.selectedIds;0!==e.size&&(eJ({...l,expenses:l.expenses.map(n=>e.has(n.id)&&n.isReimbursable?{...n,reimbursed:!0}:n)},"finance.undo.label.reimbursed"),nn.exitSelectMode())},[nn,l,eJ]),im=(0,o.useMemo)(()=>["shared",...l.familyMembers.map(e=>e.id)],[l.familyMembers]);(0,$.K)({quickAddInputRef:no,monthSelectRef:ns,memberIds:im,activeMemberId:e9,onSelectMember:ne,onSetTab:e=>eX(e),expenseModalOpen:nD,onOpenExpenseModal:()=>nI(!0),shortcutsOpen:nr,onToggleShortcuts:()=>nl(e=>!e)});let ix=[{value:"overview",label:i("finance.tab.overview")},{value:"expenses",label:`${i("finance.tab.expenses")} ${nQ.length>0?`(${nQ.length})`:""}`},{value:"insights",label:`${i("finance.tab.insights")} ${nK.length>0?`(${nK.length})`:""}`},{value:"settings",label:i("finance.tab.settings")}],iu=[{value:"week",label:i("finance.range.week")},{value:"month",label:i("finance.range.month")},{value:"3m",label:i("finance.range.3m")},{value:"6m",label:i("finance.range.6m")},{value:"1y",label:i("finance.range.1y")},{value:"all",label:i("finance.range.all")}],ih=Math.floor(nV).toLocaleString("pt-PT"),ig=(nV%1).toFixed(2).slice(1),ib=(()=>{let[e,i]=nU.split("-");return new Date(parseInt(e),parseInt(i)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),iw=(0,t.jsx)(b.TA,{data:l,activeMemberId:e9,onSelectMember:ne,onSaveData:r,t:i,locale:n}),iy=(0,o.useMemo)(()=>{let e={};for(let n of nQ)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:nj(e).color}))},[nQ]),ij=iy.reduce((e,n)=>e+n.value,0),i$=(0,o.useMemo)(()=>n6.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[n6]),iv=n6.length>0?i$/n6.length:0,iM=n6.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>l.budget.monthlyBudget).length;return(0,t.jsxs)(d.PE,{title:i("finance.appTitle"),sidebar:iw,topBarRight:e,activeId:e9,children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(I,{children:(0,t.jsx)(b.jb,{data:l,activeMemberId:e9,onSelectMember:ne,t:i,locale:n})}),(0,t.jsxs)(E,{children:[(0,t.jsx)(A,{children:(0,t.jsx)(x.tU,{tabs:ix,value:eV,onChange:eX,"aria-label":i("finance.nav.ariaLabel")})}),(0,t.jsxs)(B,{children:[0===l.familyMembers.length&&(0,t.jsx)(e2,{children:i("finance.member.empty")}),(0,t.jsx)(x.K0,{onClick:nq,title:"comfortable"===nH?i("finance.density.compact"):i("finance.density.comfortable"),"aria-label":i("finance.density.toggle"),active:"compact"===nH,children:(0,t.jsx)(x.In,{name:"comfortable"===nH?"list":"menu",size:14,"aria-hidden":!0})}),(0,t.jsx)(R,{children:(0,t.jsx)(x.K0,{onClick:()=>nl(e=>!e),title:i("finance.shortcuts.title"),"aria-label":i("finance.shortcuts.title"),active:nr,children:(0,t.jsx)("span",{"aria-hidden":!0,style:{fontSize:13,fontFamily:d.w4.typography.fontFamilyMono,fontWeight:600,lineHeight:1},children:"?"})})}),"expenses"===eV&&(0,t.jsx)(x.$n,{variant:nn.selectMode?"accent":"ghost",style:{height:30},onClick:()=>{nn.selectMode?nn.exitSelectMode():nn.enterSelectMode()},children:i("finance.bulk.select")}),(0,t.jsxs)(x.$n,{variant:"ghost",style:{height:30},onClick:()=>nI(!0),children:[(0,t.jsx)(x.In,{name:"plus",size:13,"aria-hidden":!0}),i("finance.quickAdd.newExpense")]})]})]}),"settings"!==eV&&(0,t.jsxs)(L,{"aria-label":i("finance.range.label"),children:[(0,t.jsx)(P,{children:i("finance.range.label")}),(0,t.jsx)(x.tU,{tabs:iu,value:ni,onChange:e=>{nt(e),"month"===e&&e7(nU)},"aria-label":i("finance.range.label")})]}),"settings"!==eV&&"month"===ni&&l.expenses.length>0&&(0,t.jsx)(M.f,{data:l,selectedMonth:e0,onSelectMonth:e7,locale:n,t:i}),(0,t.jsxs)(O,{children:["overview"===eV&&(0,t.jsxs)(H,{children:[(0,t.jsx)(Y,{span:12,style:{borderLeft:`2px solid ${F}`},children:(0,t.jsxs)(K,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(Z,{children:[(0,t.jsxs)(N,{children:[i("finance.hero.spentIn")," ",ib," \xb7 ",n1]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(W,{children:"€"}),(0,t.jsx)(J,{children:ih}),(0,t.jsx)(Q,{children:ig})]}),(0,t.jsxs)(V,{children:[(0,t.jsx)(u.Ru,{value:n4,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[i("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(nX,n)," \xb7 €",nb(n0)]})]}),n3.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4,overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(u.OW,{points:n3,accent:n2,width:280,height:34})})]}),(0,t.jsx)(X,{children:(0,t.jsxs)(ee,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(ei,{children:i("finance.budget.weekly")}),(0,t.jsxs)(et,{children:["€",nb(n_.spent)," ",(0,t.jsxs)(ea,{children:["/ €",n_.budget]})]})]}),(0,t.jsx)(u.Xj,{pct:n9,over:n9>100?n9-100:0}),(0,t.jsxs)(eo,{children:[(0,t.jsxs)("span",{children:[Math.round(n9),"% ",i("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:n_.remaining<0?C:F},children:n_.remaining>0?`€${nb(n_.remaining)} ${i("finance.budget.remaining")}`:`€${nb(Math.abs(n_.remaining))} ${i("finance.budget.over")}`})]}),(0,t.jsxs)(en,{style:{marginTop:14},children:[(0,t.jsx)(ei,{children:i("finance.budget.monthly")}),(0,t.jsxs)(et,{children:["€",nb(nV)," ",(0,t.jsxs)(ea,{children:["/ €",l.budget.monthlyBudget]})]})]}),(0,t.jsx)(u.Xj,{pct:ie,over:ie>100?ie-100:0}),(0,t.jsxs)(eo,{children:[(0,t.jsxs)("span",{children:[Math.round(ie),"% ",i("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:d.w4.colors.mainTextMuted},children:[i("finance.budget.projected")," €",nb(nV+(n_.projectedTotal-n_.spent))]})]})]})})]})}),(0,t.jsxs)(Y,{span:8,spanMd:12,children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(U,{children:i("finance.charts.sixMonths")}),(0,t.jsx)(_,{children:(0,t.jsx)(e6,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(e8,{children:[(0,t.jsx)(e5,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,t.jsx)(u.ik,{data:n6,budget:l.budget.monthlyBudget,height:200}),(0,t.jsxs)(eB,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(x.YZ,{children:i("finance.charts.total6m")}),(0,t.jsxs)(eP,{children:["€",nb(i$)]})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(x.YZ,{children:i("finance.charts.monthlyAvg")}),(0,t.jsxs)(eP,{children:["€",nb(iv)]})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(x.YZ,{children:i("finance.charts.monthsOverBudget")}),(0,t.jsxs)(eP,{children:[iM," / ",n6.length]})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(x.YZ,{children:i("finance.charts.trend")}),(0,t.jsxs)(eP,{style:{color:n4>0?C:F},children:[n4>0?"+":"",n4,"%"]})]})]})]}),(0,t.jsxs)(Y,{span:4,spanMd:6,children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(U,{children:i("finance.charts.byCategory")}),(0,t.jsx)(e4,{type:"button",onClick:()=>eX("insights"),children:i("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:d.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(u.RJ,{data:iy,total:ij,size:110,centerLabel:ib.slice(0,3),centerValue:`€${nb(ij)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:iy.map(e=>{let i=nj(e.id),a=(0,c.expensesForMember)((0,c.expensesForMonth)(l.expenses,nX),e9).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),o=a>0?(e.value-a)/a*100:0;return(0,t.jsxs)(es,{children:[(0,t.jsx)(er,{color:e.color}),(0,t.jsx)(el,{children:"pt"===n?i.labelPt:i.labelEn}),(0,t.jsxs)(ed,{children:["€",nb(e.value)]}),Math.abs(o)>1&&(0,t.jsx)(u.Ru,{value:o,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(Y,{span:5,spanMd:6,children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(U,{children:i("finance.charts.cashflow")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:d.w4.typography.fontFamilyMono,color:d.w4.colors.mainTextMuted},children:i("finance.charts.cashflowSub")})]}),(0,t.jsx)(u.uj,{data:n8,height:170,legendIn:i("finance.charts.in"),legendOut:i("finance.charts.out")})]}),(0,t.jsxs)(Y,{span:4,spanMd:6,children:[(0,t.jsx)(q,{children:(0,t.jsx)(U,{children:i("finance.charts.heatmap")})}),(0,t.jsx)(u.RT,{data:n5,locale:n}),(0,t.jsxs)(eO,{children:[(0,t.jsx)("span",{children:i("finance.charts.less")}),(0,t.jsx)(eH,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:i("finance.charts.more")})]})]}),(0,t.jsxs)(Y,{span:8,spanMd:12,children:[(0,t.jsx)(q,{children:(0,t.jsx)(U,{children:i("finance.dayHourHeatmap.title")})}),(0,t.jsx)(w.D,{matrix:n7,locale:n,t:i})]}),(0,t.jsxs)(Y,{span:3,spanMd:6,children:[(0,t.jsx)(q,{children:(0,t.jsx)(U,{children:i("finance.charts.thisWeek")})}),(0,t.jsxs)(eY,{children:[(0,t.jsxs)(eq,{children:[(0,t.jsxs)(eU,{children:["€",nb(n_.spent)]}),(0,t.jsxs)(ea,{children:["/ €",n_.budget]})]}),(0,t.jsx)(u.kl,{spent:n_.spent,budget:n_.budget}),(0,t.jsxs)(e_,{children:[(0,t.jsx)("span",{children:i("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:i("finance.charts.actual")})]})]})]}),(0,t.jsxs)(Y,{span:7,spanMd:12,children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(U,{children:i("finance.recent.title")}),l.expenses.length>5&&(0,t.jsx)(e4,{type:"button",onClick:()=>eX("expenses"),children:i("finance.recent.viewAll",{n:nQ.length})})]}),0===nQ.length?(0,t.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted,padding:`${d.w4.spacing.sm} 0`},children:i("finance.dashboard.noRecent")}):(0,t.jsx)(ex,{"aria-label":i("finance.recent.title"),children:nQ.slice(0,6).map(e=>(0,t.jsx)(nv,{exp:e,finData:l,locale:n,t:i,onDelete:io,onToggleReimbursed:ir,compact:"compact"===nH},e.id))})]}),(0,t.jsxs)(Y,{span:5,spanMd:12,children:[(0,t.jsx)(q,{children:(0,t.jsx)(U,{children:i("finance.insights.title")})}),0===nK.length?(0,t.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:i("insights")??"—"}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nK.map((e,n)=>(0,t.jsxs)(ek,{itype:e.type,children:[(0,t.jsx)(eT,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=l.familyMembers.indexOf(n);return(0,t.jsxs)(eS,{children:[(0,t.jsx)(x.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(Y,{span:12,ref:na,children:[(0,t.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:i("finance.quickAdd.title")}),(0,t.jsxs)("form",{onSubmit:ia,"aria-label":i("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.sm},children:[(0,t.jsx)(eC,{children:[{id:"shared",name:i("finance.member.shared"),role:"shared",color:void 0},...l.familyMembers.map((e,n)=>({...e,color:(0,b.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?d.w4.colors.mainTextMuted:(0,b.a8)(l.familyMembers[n-1]??e,n-1),a={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(ez,{type:"button",active:nx===e.id,color:i,onClick:()=>nu(e.id),children:[(0,t.jsx)(x.eu,{member:a,size:18}),e.name]},e.id)})}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(eI,{ref:no,type:"text",placeholder:i("finance.quickAdd.placeholder"),value:nd,onChange:e=>{nc(e.target.value),nm("")},"aria-label":i("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,t.jsx)(eR,{value:np||ii,onChange:e=>nm(e.target.value),"aria-label":i("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,t.jsx)(x.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!nd.trim(),children:i("finance.quickAdd.add")})]}),(0,t.jsx)(v.J,{expenses:l.expenses,storedOrder:nC,lockedCategoryId:nS,onToggle:e=>nF(n=>n===e?"":e),locale:n,groupLabel:i("finance.quickAdd.frequentCategories")}),(0,t.jsxs)(eE,{visible:nh,"aria-live":"polite","aria-atomic":!0,children:["✓ ",i("finance.quickAdd.added")]}),(0,t.jsx)(eA,{children:i("finance.quickAdd.hint")})]})]})]}),"expenses"===eV&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e1,{style:{marginBottom:d.w4.spacing.md},children:[(0,t.jsx)(x.YZ,{children:i("finance.tx.title")}),"month"===ni&&0===l.expenses.length&&(0,t.jsx)(eG,{ref:ns,value:e0,onChange:e=>e7(e.target.value),"aria-label":i("finance.insights.month"),children:nG.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),0===nQ.length&&0===nJ.length?(0,t.jsx)(Y,{children:(0,t.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:i("finance.tx.empty")})}):(0,t.jsx)(Y,{span:12,children:(0,t.jsx)(ex,{"aria-label":i("finance.tx.title"),children:[...nQ.map(e=>({...e,_kind:"expense"})),...nJ.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(nv,{exp:e,finData:l,locale:n,t:i,onDelete:io,onToggleReimbursed:ir,compact:"compact"===nH,selectMode:nn.selectMode,selected:nn.selectedIds.has(e.id),onToggleSelect:nn.toggleId,longPressHandlers:nn.longPressHandlers,onEnterSelectMode:nn.enterSelectMode},e.id):(0,t.jsxs)(eu,{compact:"compact"===nH,children:["compact"===nH?(0,t.jsx)(eh,{color:F,"aria-hidden":!0}):(0,t.jsx)(eg,{color:F,children:"\uD83D\uDCB0"}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eb,{children:e.source}),"compact"!==nH&&(0,t.jsxs)(ew,{children:[ny(e.date,n)," \xb7 ",i("finance.dashboard.income")]})]}),(0,t.jsxs)(ey,{children:[(0,t.jsxs)(ej,{style:{color:F},children:["+€",nf(e.amount)]}),(0,t.jsx)(eM,{className:"delete-btn",type:"button",onClick:()=>is(e.id),"aria-label":`${i("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===eV&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e1,{style:{marginBottom:d.w4.spacing.md},children:[(0,t.jsx)(x.YZ,{children:i("finance.insights.title")}),"month"===ni&&0===l.expenses.length&&(0,t.jsx)(eG,{value:e0,onChange:e=>e7(e.target.value),"aria-label":i("finance.insights.month"),children:nG.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),(0,t.jsxs)(Y,{span:12,style:{marginBottom:d.w4.spacing.md},children:[(0,t.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:i("finance.insights.byCategory")}),(0,t.jsx)(nM,{expenses:nQ,total:nQ.reduce((e,n)=>e+n.amount,0),locale:n})]}),(0,t.jsxs)(Y,{span:12,children:[(0,t.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:i("finance.insights.monthlyTrend")}),(0,t.jsx)(nk,{data:l,months:nG.slice(0,6),locale:n,t:i})]}),(0,t.jsxs)(Y,{span:12,children:[(0,t.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:i("finance.insights.title")}),0===nK.length?(0,t.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:i("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nK.map((e,n)=>(0,t.jsxs)(ek,{itype:e.type,children:[(0,t.jsx)(eT,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=l.familyMembers.indexOf(n);return(0,t.jsxs)(eS,{children:[(0,t.jsx)(x.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,b.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(Y,{span:12,children:[(0,t.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.sm},children:i("finance.insights.anomalies")}),0===nZ.length?(0,t.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:i("finance.insights.anomalies.none")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nZ.map(e=>(0,t.jsxs)(ek,{itype:e.type,children:[(0,t.jsx)(eT,{itype:e.type}),(0,t.jsx)("div",{style:{flex:1,minWidth:0},children:(0,t.jsx)("div",{children:i(e.messageKey,e.params)})}),e.snoozeKey&&(0,t.jsx)(eF,{type:"button",title:i("finance.insights.anomalies.dismiss"),"aria-label":i("finance.insights.anomalies.dismiss"),onClick:()=>{nN(e.snoozeKey)},children:"\xd7"})]},e.snoozeKey??e.messageKey))})]}),(0,t.jsx)(S.n,{})]}),"settings"===eV&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(Y,{span:12,children:[(0,t.jsx)(x.YZ,{style:{marginBottom:d.w4.spacing.md},children:i("finance.settings.title")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.md},children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eZ,{htmlFor:"weekly-budget",children:i("finance.settings.weeklyBudget")}),(0,t.jsx)(eN,{id:"weekly-budget",type:"number",min:"1",placeholder:String(l.budget.weeklyBudget),value:nE,onChange:e=>nA(e.target.value)})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eZ,{htmlFor:"monthly-budget",children:i("finance.settings.monthlyBudget")}),(0,t.jsx)(eN,{id:"monthly-budget",type:"number",min:"1",placeholder:String(l.budget.monthlyBudget),value:nB,onChange:e=>nL(e.target.value)})]}),(0,t.jsx)(x.$n,{variant:"primary",onClick:il,style:{height:44},children:nP?i("finance.settings.saved"):i("finance.settings.save")})]})]})})]}),(0,t.jsxs)(e3,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),nD&&(0,t.jsx)(n$,{finData:l,activeMemberId:e9,locale:n,t:i,onClose:()=>nI(!1),onSubmit:nR}),(0,t.jsx)(y.S,{labelKey:ev,onUndo:()=>{eQ()},onDismiss:()=>eW(null),t:i}),nn.selectMode&&"expenses"===eV&&(0,t.jsx)(k.S,{selectionCount:nn.selectedIds.size,visibleIds:nQ.map(e=>e.id),selectedIds:nn.selectedIds,categories:c.DEFAULT_CATEGORIES,locale:n,t:i,onCancel:nn.exitSelectMode,onSelectAll:()=>nn.selectAll(nQ.map(e=>e.id)),onCategorise:ic,onDelete:id,onMarkReimbursed:ip}),nr&&(0,t.jsx)(j.m,{t:i,onClose:()=>nl(!1)})]})},{}))}}]);