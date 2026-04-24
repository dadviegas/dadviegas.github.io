"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["5512"],{8997(e,n,t){var i=t(2727);n.createRoot=i.createRoot,i.hydrateRoot},3611(e,n,t){var i=t(5723),r=t(8997),a=t(7991),o=t(6859),s=t.n(o),l=t(2799),c=t(9874),d=t(7723),p=t(8395),m=t(1496),x=t(8170),u=t(4041),h=t(948),g=t(719),f=t(9546);let b="#7fb77e",y="#f85149",w=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,j=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${w} 0.25s ease both;
  overflow: hidden;
`,$=s().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,v=s().div`
  padding: 0 ${c.w4.spacing.md};
  border-bottom: 1px solid ${c.w4.colors.border};
  background: ${c.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
`,M=s().div`
  flex: 1;
  min-width: 0;
`,k=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,T=s().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    padding: ${c.w4.spacing.lg};
  }
`,F=s().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,D=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  border-left: 2px solid ${b};
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    border-left-color: ${b};
  }

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,S=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,z=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,C=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,I=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${b};
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,E=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,A=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,B=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,R=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,L=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,P=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,O=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,Y=s().div`
  flex-shrink: 0;
  width: 100%;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,_=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,q=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,U=s().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,H=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
`,Z=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,G=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,N=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,W=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,K=s().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Q=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,V="finance:list-density",X=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,J=s().li`
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
  &:hover .delete-btn { opacity: 1; }
`,ee=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,en=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,et=s().div`
  flex: 1;
  min-width: 0;
`,ei=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,er=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,ea=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,eo=s().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,es=s().span`
  font-size: 10px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${b}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?b:"#facc15"};
  white-space: nowrap;
`,el=s().button`
  font-size: 10px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${b}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?b:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${b}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,ec=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainTextMuted};
  cursor: pointer;
  font-size: 14px;
  opacity: 0;
  transition: opacity 120ms ease, color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  &:hover {
    color: ${y};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,ed=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${b}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${b}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,ep=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?y:"warning"===e?"#facc15":"success"===e?b:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,em=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;s()(D)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let ex=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
`,eu=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:n})=>e?n:c.w4.colors.border};
  background: ${({active:e,color:n})=>e?`${n}22`:c.w4.colors.mainBg};
  color: ${c.w4.colors.mainText};
  font-size: 12px;
  cursor: pointer;
  transition: all 120ms ease;
  white-space: nowrap;
  min-height: 44px;

  &:focus-visible { outline: 2px solid ${c.w4.colors.accent}; outline-offset: 2px; }
`,eh=s().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,eg=s().input`
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
`,ef=s().select`
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
`,eb=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${b};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,ey=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,ew=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,ej=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,e$=s().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,ev=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eM=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,ek=s().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,eT=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,eF=s().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,eD=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${b}; }
`,eS=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ez=s().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,eC=s().input`
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
`,eI=s().select`
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
`,eE=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eA=s().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,eB=s().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,eR=s().div`
  flex: 1;
  height: 8px;
  background: ${c.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eL=s().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eP=s().div`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  width: 72px;
  text-align: right;
  flex-shrink: 0;
`,eO=s().button`
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
`,eY=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
`,e_=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
`,eq=s().footer`
  flex-shrink: 0;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  border-top: 1px solid ${c.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eU=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,eH=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eZ=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,eG=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${c.w4.spacing.md};
  z-index: 1000;
  animation: ${w} 0.15s ease;
`,eN=s().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${b};
  width: 100%;
  max-width: 560px;
  max-height: calc(100dvh - ${c.w4.spacing.xl});
  overflow-y: auto;
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,eW=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eK=s().button`
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
`,eQ=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eV=s().div`
  display: inline-flex;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,eX=s().button`
  background: ${({active:e})=>e?c.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?c.w4.colors.mainText:c.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  font-size: 12px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
`,eJ=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.xs};
`,e0=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({active:e,color:n})=>e?`${n}22`:c.w4.colors.mainBg};
  border: 1px solid ${({active:e,color:n})=>e?n:c.w4.colors.border};
  color: ${({active:e})=>e?c.w4.colors.mainText:c.w4.colors.mainTextMuted};
  border-radius: 999px;
  padding: 4px 10px 4px 6px;
  font-size: 12px;
  cursor: pointer;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease;
`,e4=s().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,e1=s().input`
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
`,e2=s().select`
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
`,e8=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
`;function e5(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function e3(e){return Math.round(e).toLocaleString("pt-PT")}function e6(){return new Date().toISOString().slice(0,10)}function e7(e,n){let[t,i,r]=e.split("-").map(Number);return new Date(t,i-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function e9(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function ne({finData:e,activeMemberId:n,locale:t,t:r,onClose:o,onSubmit:s}){let[l,m]=(0,a.useState)(""),[x,h]=(0,a.useState)(""),[f,b]=(0,a.useState)("other"),[y,w]=(0,a.useState)(e6()),[j,$]=(0,a.useState)("single"),[v,M]=(0,a.useState)(n),[k,T]=(0,a.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id));(0,a.useEffect)(()=>{x.trim()&&b((0,d.guessCategory)(x,e.categoryHints))},[x,e.categoryHints]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let F=parseFloat(l.replace(",","."))||0,D=k.length,S="split"===j&&D>0?F/D:F,z=F>0&&!!y&&("single"===j||"split"===j&&D>0),C=[{id:"shared",name:r("finance.member.shared"),color:c.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,g.a8)(e,n),role:e.role}))];return(0,i.jsx)(eG,{onClick:o,role:"dialog","aria-modal":"true","aria-label":r("finance.quickAdd.newExpense"),children:(0,i.jsxs)(eN,{onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)(eW,{children:[(0,i.jsxs)(p.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,i.jsx)(eK,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,i.jsxs)("form",{onSubmit:n=>{let t;if(n.preventDefault(),!z)return;let i=x.trim(),r=Date.now(),a={...e.categoryHints};if(i&&i.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=f)}),"single"===j)t=[{id:(0,u.z)(),amount:F,date:y,categoryId:f,description:i||f,type:"daily",childId:"shared"===v?void 0:v,createdAt:r}];else{let e=Math.round(F/D*100)/100,n=Math.round((F-e*D)*100)/100;t=k.map((t,a)=>({id:(0,u.z)(),amount:0===a?e+n:e,date:y,categoryId:f,description:i?`${i} (1/${D})`:f,type:"daily",childId:t,createdAt:r+a}))}s(t,a,i)},style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,i.jsxs)(eQ,{children:[(0,i.jsxs)(eS,{children:[(0,i.jsx)(ez,{htmlFor:"exp-amount",children:"pt"===t?"Valor (€)":"Amount (€)"}),(0,i.jsx)(e1,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,i.jsxs)(eS,{children:[(0,i.jsx)(ez,{htmlFor:"exp-date",children:"pt"===t?"Data":"Date"}),(0,i.jsx)(e1,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,i.jsxs)(eS,{children:[(0,i.jsx)(ez,{htmlFor:"exp-desc",children:"pt"===t?"Descri\xe7\xe3o":"Description"}),(0,i.jsx)(e1,{id:"exp-desc",type:"text",placeholder:"pt"===t?"ex. Continente, farm\xe1cia…":"e.g. Continente, pharmacy…",value:x,onChange:e=>h(e.target.value)})]}),(0,i.jsxs)(eS,{children:[(0,i.jsx)(ez,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,i.jsx)(e2,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===t?e.labelPt:e.labelEn]},e.id))})]}),(0,i.jsxs)(eS,{children:[(0,i.jsx)(ez,{children:"pt"===t?"Atribuir a":"Assign to"}),(0,i.jsxs)(eV,{role:"tablist",children:[(0,i.jsx)(eX,{type:"button",active:"single"===j,onClick:()=>$("single"),children:"pt"===t?"Membro":"Member"}),(0,i.jsx)(eX,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:"pt"===t?"Dividir":"Split"})]}),"single"===j?(0,i.jsx)(eJ,{style:{marginTop:c.w4.spacing.sm},children:C.map(e=>(0,i.jsxs)(e0,{type:"button",active:v===e.id,color:e.color,onClick:()=>M(e.id),children:[(0,i.jsx)(p.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eJ,{style:{marginTop:c.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let t=(0,g.a8)(e,n),r=k.includes(e.id);return(0,i.jsxs)(e0,{type:"button",active:r,color:t,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,i.jsx)(p.eu,{member:{id:e.id,name:e.name,role:e.role,color:t},size:16}),e.name]},e.id)})}),D>0&&F>0&&(0,i.jsx)(e4,{style:{marginTop:c.w4.spacing.xs},children:"pt"===t?`${D}\xd7 €${e5(S)} cada`:`${D}\xd7 €${e5(S)} each`})]})]}),(0,i.jsxs)(e8,{children:[(0,i.jsx)(p.$n,{type:"button",variant:"ghost",onClick:o,children:r("finance.member.cancel")}),(0,i.jsx)(p.$n,{type:"submit",variant:"primary",disabled:!z,children:r("finance.quickAdd.add")})]})]})]})})}function nn({exp:e,finData:n,locale:t,t:r,onDelete:a,onToggleReimbursed:o,compact:s=!1}){let l=e9(e.categoryId),d=n.familyMembers.findIndex(n=>n.id===e.childId),m=d>=0?n.familyMembers[d]:null,x=m?(0,g.a8)(m,d):c.w4.colors.mainTextMuted,u=e.isReimbursable?o?(0,i.jsx)(el,{type:"button",ok:e.reimbursed,onClick:()=>o(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,i.jsx)(es,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,h=(0,i.jsx)(ec,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"});return s?(0,i.jsxs)(J,{compact:!0,children:[(0,i.jsx)(ee,{color:l.color,"aria-hidden":!0}),(0,i.jsx)(et,{children:(0,i.jsxs)(ei,{style:{display:"flex",alignItems:"center",gap:6},children:[m?(0,i.jsx)(p.eu,{member:{id:m.id,name:m.name,role:m.role,color:x},size:16}):null,(0,i.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||("pt"===t?l.labelPt:l.labelEn)})]})}),(0,i.jsxs)(ea,{children:[u,(0,i.jsxs)(eo,{children:["−€",e5(e.amount)]}),h]})]}):(0,i.jsxs)(J,{children:[(0,i.jsx)(en,{color:l.color,children:(0,i.jsx)("span",{"aria-hidden":!0,children:l.icon})}),(0,i.jsxs)(et,{children:[(0,i.jsx)(ei,{children:e.description||("pt"===t?l.labelPt:l.labelEn)}),(0,i.jsxs)(er,{children:[m?(0,i.jsx)(p.eu,{member:{id:m.id,name:m.name,role:m.role,color:x},size:14}):null,(0,i.jsx)("span",{children:"pt"===t?l.labelPt:l.labelEn}),(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:e7(e.date,t)}),"monthly"===e.type&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:"mensal"})]})]})]}),(0,i.jsxs)(ea,{children:[u,"recurring"===e.type&&(0,i.jsx)(es,{children:r("finance.tx.recurring")}),(0,i.jsxs)(eo,{children:["−€",e5(e.amount)]}),h]})]})}function nt({expenses:e,total:n,locale:t}){let r=Object.entries((0,a.useMemo)(()=>{let n={};for(let t of e)n[t.categoryId]=(n[t.categoryId]??0)+t.amount;return n},[e])).map(([e,n])=>({cat:e9(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===r.length?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:"—"}):(0,i.jsx)(eE,{children:r.map(({cat:e,amt:r})=>{let a=n>0?r/n*100:0;return(0,i.jsxs)(eA,{children:[(0,i.jsxs)(eB,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===t?e.labelPt:e.labelEn]}),(0,i.jsx)(eR,{children:(0,i.jsx)(eL,{pct:a,color:e.color})}),(0,i.jsxs)(eP,{children:["€",r.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function ni({data:e,months:n,locale:t,t:r}){let a=n.map(n=>(0,d.computeMonthlySummary)(e,n)),o=Math.max(...a.map(e=>e.totalExpenses),1);return a.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,i.jsx)(eE,{children:a.map(e=>{let n=e.totalExpenses/o*100,[,r]=e.month.split("-"),a=new Date(parseInt(e.month.slice(0,4)),parseInt(r)-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"});return(0,i.jsxs)(eA,{children:[(0,i.jsx)(eB,{style:{width:80},children:a}),(0,i.jsx)(eR,{children:(0,i.jsx)(eL,{pct:n,color:c.w4.colors.accent})}),(0,i.jsxs)(eP,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}let nr=document.getElementById("root");if(!nr)throw Error("Root element #root not found");(0,r.createRoot)(nr).render((0,i.jsx)(function({topBarRight:e}){let[n]=(0,x.Ym)(),t=(0,a.useMemo)(()=>(0,x.Nx)(n,h.A),[n]),{data:r,loaded:o,save:s}=(0,d.useFinance)(),l=r??{...d.EMPTY_FINANCE_DATA},{canUndo:w,latestLabelKey:es,undo:el}=(0,d.useUndo)(),[eE,eA]=(0,a.useState)(null),eB=(0,a.useCallback)(async(e,n)=>{(0,d.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:l,labelKey:n,ts:Date.now()}),eA(n),await s(e)},[l,s]),eR=(0,a.useCallback)(async()=>{let e=el();e&&(eA("finance.undo.label.reverted"),await s(e),setTimeout(()=>eA(null),2500))},[el,s]),[eL,eP]=(0,a.useState)("overview"),[eG,eN]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[eW,eK]=(0,a.useState)("shared"),eQ=(0,a.useRef)(null),[eV,eX]=(0,a.useState)(""),[eJ,e0]=(0,a.useState)(""),[e4,e1]=(0,a.useState)("shared"),[e2,e8]=(0,a.useState)(!1),nr=(0,a.useRef)(null),[na,no]=(0,a.useState)(!1),ns=(0,a.useCallback)((e,n,t)=>{let i=t?[t,...l.recentDescriptions].filter(Boolean).slice(0,20):l.recentDescriptions;eB({...l,expenses:[...e,...l.expenses],categoryHints:n,recentDescriptions:i},"finance.undo.label.added"),no(!1),nr.current&&clearTimeout(nr.current),e8(!0),nr.current=setTimeout(()=>e8(!1),2e3)},[l,eB]),[nl,nc]=(0,a.useState)(""),[nd,np]=(0,a.useState)(""),[nm,nx]=(0,a.useState)(!1),[nu,nh]=(0,a.useState)("comfortable");(0,a.useEffect)(()=>{(0,c.PL)(V).then(e=>{("compact"===e||"comfortable"===e)&&nh(e)})},[]);let ng=(0,a.useCallback)(()=>{let e="comfortable"===nu?"compact":"comfortable";nh(e),(0,c.Is)(V,e)},[nu]),nf=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),nb=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(l),[l]),ny=(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(l,eG),[l,eG]),nw=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(l),[l]),nj=(0,a.useMemo)(()=>(0,d.availableMonths)(l),[l]),n$=(0,a.useMemo)(()=>(0,d.expensesForMonth)(l.expenses,eG),[l,eG]),nv=(0,a.useMemo)(()=>(0,d.incomeForMonth)(l.income,eG),[l,eG]),nM=(0,a.useMemo)(()=>(0,d.expensesForMember)(n$,eW),[n$,eW]),nk=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(l,eW,nf),[l,eW,nf]),nT=(0,a.useMemo)(()=>(function(e){let[n,t]=e.split("-").map(Number),i=new Date(n,t-2,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`})(nf),[nf]),nF=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(l,eW,nT),[l,eW,nT]),nD=(0,a.useMemo)(()=>0===nF?0:Math.round((nk-nF)/nF*100),[nk,nF]),nS=(0,a.useMemo)(()=>{if("all"===eW)return t("finance.member.all");if("shared"===eW)return t("finance.hero.family");let e=l.familyMembers.find(e=>e.id===eW);return e?.name??t("finance.hero.family")},[eW,l.familyMembers,t]),nz=(0,a.useMemo)(()=>{if("all"===eW||"shared"===eW)return c.w4.colors.mainTextMuted;let e=l.familyMembers.findIndex(e=>e.id===eW);return -1===e?b:(0,g.a8)(l.familyMembers[e],e)},[eW,l.familyMembers]),nC=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,t)=>{let i=new Date(e);i.setDate(e.getDate()-(5-t)*7-e.getDay()),i.setHours(0,0,0,0);let r=new Date(i);return r.setDate(i.getDate()+7),(0,d.expensesForMember)(l.expenses,eW).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=i&&n<r}).reduce((e,n)=>e+n.amount,0)})},[l.expenses,eW]),nI=(0,a.useMemo)(()=>(function(e,n){let t=[],i=new Date;for(let e=5;e>=0;e--){let n=new Date(i.getFullYear(),i.getMonth()-e,1);t.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return t.map(t=>{let i=(0,d.expensesForMonth)(e.expenses,t),a=(0,d.expensesForMember)(i,n),o={};for(let e of a)o[e.categoryId]=(o[e.categoryId]??0)+e.amount;let s=Object.values(o).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(t.slice(0,4)),parseInt(t.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(o).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:e9(e).color})),over:s>r?s-r:0}})})(l,eW),[l,eW]),nE=(0,a.useMemo)(()=>(function(e,n){let t=new Date,i=[];for(let r=89;r>=0;r--){let a=new Date(t);a.setDate(t.getDate()-r);let o=a.toISOString().slice(0,10),s=o.slice(0,7),l=(0,d.expensesForMember)(e.expenses.filter(e=>e.date===o),n).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,s).reduce((e,n)=>e+n.amount,0)/30;i.push({inc:c,exp:l})}return i})(l,eW),[l,eW]),nA=(0,a.useMemo)(()=>{let e,n;return e=new Date,n=l.expenses.length>0?l.expenses.reduce((e,n)=>e+n.amount,0)/l.expenses.length:20,Array.from({length:91},(t,i)=>{let r=new Date(e);r.setDate(e.getDate()-90+i);let a=r.toISOString().slice(0,10),o=(0,d.expensesForMember)(l.expenses.filter(e=>e.date===a),eW).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let s=o/n;return s<.5?1:s<1?2:s<2?3:4})},[l,eW]),nB=nb.budget>0?nb.spent/nb.budget*100:0,nR=l.budget.monthlyBudget>0?nk/l.budget.monthlyBudget*100:0,nL=(0,a.useMemo)(()=>{let e=(0,d.parseQuickInput)(eV,l.familyMembers);return e?.description?(0,d.guessCategory)(e.description,l.categoryHints):"other"},[eV,l.categoryHints,l.familyMembers]),nP=eJ||nL;(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(eV,l.familyMembers);e?.memberId&&e1(e.memberId)},[eV,l.familyMembers]);let nO=(0,a.useCallback)(e=>{e.preventDefault();let n=(0,d.parseQuickInput)(eV,l.familyMembers);if(!n)return;let t=nP||"other",i=n.memberId??("shared"!==e4?e4:void 0),r={id:(0,u.z)(),amount:n.amount,date:e6(),categoryId:t,description:n.description||t,type:"daily",childId:i,createdAt:Date.now()},a={...l.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=t)});let o=[n.description||"",...l.recentDescriptions].filter(Boolean).slice(0,20);eB({...l,expenses:[r,...l.expenses],categoryHints:a,recentDescriptions:o},"finance.undo.label.added"),eX(""),e0(""),nr.current&&clearTimeout(nr.current),e8(!0),nr.current=setTimeout(()=>e8(!1),2e3)},[eV,nP,e4,l,eB]),nY=(0,a.useCallback)(e=>{eB({...l,expenses:l.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[l,eB]),n_=(0,a.useCallback)(e=>{eB({...l,income:l.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[l,eB]),nq=(0,a.useCallback)(e=>{eB({...l,expenses:l.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[l,eB]),nU=(0,a.useCallback)(()=>{let e=parseFloat(nl)||l.budget.weeklyBudget,n=parseFloat(nd)||l.budget.monthlyBudget;s({...l,budget:{...l.budget,weeklyBudget:e,monthlyBudget:n}}),nx(!0),setTimeout(()=>nx(!1),2e3)},[nl,nd,l,s]),nH=[{value:"overview",label:t("finance.tab.overview")},{value:"expenses",label:`${t("finance.tab.expenses")} ${nM.length>0?`(${nM.length})`:""}`},{value:"insights",label:`${t("finance.tab.insights")} ${nw.length>0?`(${nw.length})`:""}`},{value:"settings",label:t("finance.tab.settings")}],nZ=Math.floor(nk).toLocaleString("pt-PT"),nG=(nk%1).toFixed(2).slice(1),nN=(()=>{let[e,t]=nf.split("-");return new Date(parseInt(e),parseInt(t)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),nW=(0,i.jsx)(g.TA,{data:l,activeMemberId:eW,onSelectMember:eK,onSaveData:s,t:t,locale:n}),nK=(0,a.useMemo)(()=>{let e={};for(let n of nM)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:e9(e).color}))},[nM]),nQ=nK.reduce((e,n)=>e+n.value,0),nV=(0,a.useMemo)(()=>nI.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[nI]),nX=nI.length>0?nV/nI.length:0,nJ=nI.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>l.budget.monthlyBudget).length;return(0,i.jsxs)(c.PE,{title:t("finance.appTitle"),sidebar:nW,topBarRight:e,activeId:eW,children:[(0,i.jsxs)(j,{children:[(0,i.jsx)($,{children:(0,i.jsx)(g.jb,{data:l,activeMemberId:eW,onSelectMember:eK,t:t,locale:n})}),(0,i.jsxs)(v,{children:[(0,i.jsx)(M,{children:(0,i.jsx)(p.tU,{tabs:nH,value:eL,onChange:eP,"aria-label":t("finance.nav.ariaLabel")})}),(0,i.jsxs)(k,{children:[0===l.familyMembers.length&&(0,i.jsx)(e_,{children:t("finance.member.empty")}),(0,i.jsx)(p.K0,{onClick:ng,title:"comfortable"===nu?t("finance.density.compact"):t("finance.density.comfortable"),"aria-label":t("finance.density.toggle"),active:"compact"===nu,children:(0,i.jsx)(p.In,{name:"comfortable"===nu?"list":"menu",size:14,"aria-hidden":!0})}),(0,i.jsxs)(p.$n,{variant:"ghost",style:{height:30},onClick:()=>no(!0),children:[(0,i.jsx)(p.In,{name:"plus",size:13,"aria-hidden":!0}),t("finance.quickAdd.newExpense")]})]})]}),(0,i.jsxs)(T,{children:["overview"===eL&&(0,i.jsxs)(F,{children:[(0,i.jsx)(D,{span:12,style:{borderLeft:`2px solid ${b}`},children:(0,i.jsxs)(I,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,i.jsxs)(E,{children:[(0,i.jsxs)(A,{children:[t("finance.hero.spentIn")," ",nN," \xb7 ",nS]}),(0,i.jsxs)(B,{children:[(0,i.jsx)(R,{children:"€"}),(0,i.jsx)(L,{children:nZ}),(0,i.jsx)(P,{children:nG})]}),(0,i.jsxs)(O,{children:[(0,i.jsx)(m.Ru,{value:nD,format:"pct",decimals:0}),(0,i.jsxs)("span",{children:[t("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(nT,n)," \xb7 €",e3(nF)]})]}),nC.some(e=>e>0)&&(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsx)(m.OW,{points:nC,accent:nz,width:320,height:34})})]}),(0,i.jsx)(Y,{children:(0,i.jsxs)(_,{children:[(0,i.jsxs)(q,{children:[(0,i.jsx)(U,{children:t("finance.budget.weekly")}),(0,i.jsxs)(H,{children:["€",e3(nb.spent)," ",(0,i.jsxs)(Z,{children:["/ €",nb.budget]})]})]}),(0,i.jsx)(m.Xj,{pct:nB,over:nB>100?nB-100:0}),(0,i.jsxs)(G,{children:[(0,i.jsxs)("span",{children:[Math.round(nB),"% ",t("finance.budget.used")]}),(0,i.jsx)("span",{style:{color:nb.remaining<0?y:b},children:nb.remaining>0?`€${e3(nb.remaining)} ${t("finance.budget.remaining")}`:`€${e3(Math.abs(nb.remaining))} ${t("finance.budget.over")}`})]}),(0,i.jsxs)(q,{style:{marginTop:14},children:[(0,i.jsx)(U,{children:t("finance.budget.monthly")}),(0,i.jsxs)(H,{children:["€",e3(nk)," ",(0,i.jsxs)(Z,{children:["/ €",l.budget.monthlyBudget]})]})]}),(0,i.jsx)(m.Xj,{pct:nR,over:nR>100?nR-100:0}),(0,i.jsxs)(G,{children:[(0,i.jsxs)("span",{children:[Math.round(nR),"% ",t("finance.budget.used")]}),(0,i.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[t("finance.budget.projected")," €",e3(nk+(nb.projectedTotal-nb.spent))]})]})]})})]})}),(0,i.jsxs)(D,{span:8,children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(z,{children:t("finance.charts.sixMonths")}),(0,i.jsx)(C,{children:(0,i.jsx)(eU,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,i.jsxs)(eH,{children:[(0,i.jsx)(eZ,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,i.jsx)(m.ik,{data:nI,budget:l.budget.monthlyBudget,height:200}),(0,i.jsxs)(ew,{children:[(0,i.jsxs)(ej,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.total6m")}),(0,i.jsxs)(e$,{children:["€",e3(nV)]})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.monthlyAvg")}),(0,i.jsxs)(e$,{children:["€",e3(nX)]})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.monthsOverBudget")}),(0,i.jsxs)(e$,{children:[nJ," / ",nI.length]})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.trend")}),(0,i.jsxs)(e$,{style:{color:nD>0?y:b},children:[nD>0?"+":"",nD,"%"]})]})]})]}),(0,i.jsxs)(D,{span:4,children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(z,{children:t("finance.charts.byCategory")}),(0,i.jsx)(eO,{type:"button",onClick:()=>eP("insights"),children:t("finance.charts.viewAll")})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,i.jsx)(m.RJ,{data:nK,total:nQ,size:110,centerLabel:nN.slice(0,3),centerValue:`€${e3(nQ)}`}),(0,i.jsx)("div",{style:{flex:1,minWidth:120},children:nK.map(e=>{let t=e9(e.id),r=(0,d.expensesForMember)((0,d.expensesForMonth)(l.expenses,nT),eW).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,i.jsxs)(N,{children:[(0,i.jsx)(W,{color:e.color}),(0,i.jsx)(K,{children:"pt"===n?t.labelPt:t.labelEn}),(0,i.jsxs)(Q,{children:["€",e3(e.value)]}),Math.abs(a)>1&&(0,i.jsx)(m.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]}),(0,i.jsxs)(D,{span:5,children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(z,{children:t("finance.charts.cashflow")}),(0,i.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:t("finance.charts.cashflowSub")})]}),(0,i.jsx)(m.uj,{data:nE,height:170,legendIn:t("finance.charts.in"),legendOut:t("finance.charts.out")})]}),(0,i.jsxs)(D,{span:4,children:[(0,i.jsx)(S,{children:(0,i.jsx)(z,{children:t("finance.charts.heatmap")})}),(0,i.jsx)(m.RT,{data:nA,locale:n}),(0,i.jsxs)(ev,{children:[(0,i.jsx)("span",{children:t("finance.charts.less")}),(0,i.jsx)(eM,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,i.jsx)("span",{style:{background:e}},n))}),(0,i.jsx)("span",{children:t("finance.charts.more")})]})]}),(0,i.jsxs)(D,{span:3,children:[(0,i.jsx)(S,{children:(0,i.jsx)(z,{children:t("finance.charts.thisWeek")})}),(0,i.jsxs)(ek,{children:[(0,i.jsxs)(eT,{children:[(0,i.jsxs)(eF,{children:["€",e3(nb.spent)]}),(0,i.jsxs)(Z,{children:["/ €",nb.budget]})]}),(0,i.jsx)(m.kl,{spent:nb.spent,budget:nb.budget}),(0,i.jsxs)(eD,{children:[(0,i.jsx)("span",{children:t("finance.charts.ideal")}),(0,i.jsx)("span",{className:"fin",children:t("finance.charts.actual")})]})]})]}),(0,i.jsxs)(D,{span:7,children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(z,{children:t("finance.recent.title")}),l.expenses.length>5&&(0,i.jsx)(eO,{type:"button",onClick:()=>eP("expenses"),children:t("finance.recent.viewAll",{n:nM.length})})]}),0===nM.length?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:t("finance.dashboard.noRecent")}):(0,i.jsx)(X,{"aria-label":t("finance.recent.title"),children:nM.slice(0,6).map(e=>(0,i.jsx)(nn,{exp:e,finData:l,locale:n,t:t,onDelete:nY,onToggleReimbursed:nq,compact:"compact"===nu},e.id))})]}),(0,i.jsxs)(D,{span:5,children:[(0,i.jsx)(S,{children:(0,i.jsx)(z,{children:t("finance.insights.title")})}),0===nw.length?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:t("insights")??"—"}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nw.map((e,n)=>(0,i.jsxs)(ed,{itype:e.type,children:[(0,i.jsx)(ep,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=l.familyMembers.indexOf(n);return(0,i.jsxs)(em,{children:[(0,i.jsx)(p.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,g.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,i.jsxs)(D,{span:12,ref:eQ,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.sm},children:t("finance.quickAdd.title")}),(0,i.jsxs)("form",{onSubmit:nO,"aria-label":t("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,i.jsx)(ex,{children:[{id:"shared",name:t("finance.member.shared"),role:"shared",color:void 0},...l.familyMembers.map((e,n)=>({...e,color:(0,g.a8)(e,n)}))].map((e,n)=>{let t="shared"===e.id?c.w4.colors.mainTextMuted:(0,g.a8)(l.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?t:void 0};return(0,i.jsxs)(eu,{type:"button",active:e4===e.id,color:t,onClick:()=>e1(e.id),children:[(0,i.jsx)(p.eu,{member:r,size:18}),e.name]},e.id)})}),(0,i.jsxs)(eh,{children:[(0,i.jsx)(eg,{type:"text",placeholder:t("finance.quickAdd.placeholder"),value:eV,onChange:e=>{eX(e.target.value),e0("")},"aria-label":t("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,i.jsx)(ef,{value:eJ||nL,onChange:e=>e0(e.target.value),"aria-label":t("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,i.jsx)(p.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!eV.trim(),children:t("finance.quickAdd.add")})]}),(0,i.jsxs)(eb,{visible:e2,"aria-live":"polite","aria-atomic":!0,children:["✓ ",t("finance.quickAdd.added")]}),(0,i.jsx)(ey,{children:t("finance.quickAdd.hint")})]})]})]}),"expenses"===eL&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eY,{style:{marginBottom:c.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{children:t("finance.tx.title")}),(0,i.jsx)(eI,{value:eG,onChange:e=>eN(e.target.value),"aria-label":t("finance.insights.month"),children:nj.map(e=>(0,i.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),0===nM.length&&0===nv.length?(0,i.jsx)(D,{children:(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:t("finance.tx.empty")})}):(0,i.jsx)(D,{span:12,children:(0,i.jsx)(X,{"aria-label":t("finance.tx.title"),children:[...nM.map(e=>({...e,_kind:"expense"})),...nv.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,i.jsx)(nn,{exp:e,finData:l,locale:n,t:t,onDelete:nY,onToggleReimbursed:nq,compact:"compact"===nu},e.id):(0,i.jsxs)(J,{compact:"compact"===nu,children:["compact"===nu?(0,i.jsx)(ee,{color:b,"aria-hidden":!0}):(0,i.jsx)(en,{color:b,children:"\uD83D\uDCB0"}),(0,i.jsxs)(et,{children:[(0,i.jsx)(ei,{children:e.source}),"compact"!==nu&&(0,i.jsxs)(er,{children:[e7(e.date,n)," \xb7 ",t("finance.dashboard.income")]})]}),(0,i.jsxs)(ea,{children:[(0,i.jsxs)(eo,{style:{color:b},children:["+€",e5(e.amount)]}),(0,i.jsx)(ec,{className:"delete-btn",type:"button",onClick:()=>n_(e.id),"aria-label":`${t("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===eL&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eY,{style:{marginBottom:c.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{children:t("finance.insights.title")}),(0,i.jsx)(eI,{value:eG,onChange:e=>eN(e.target.value),"aria-label":t("finance.insights.month"),children:nj.map(e=>(0,i.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),(0,i.jsxs)(D,{span:12,style:{marginBottom:c.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.sm},children:t("finance.insights.byCategory")}),(0,i.jsx)(nt,{expenses:nM,total:ny.totalExpenses,locale:n})]}),(0,i.jsxs)(D,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.sm},children:t("finance.insights.monthlyTrend")}),(0,i.jsx)(ni,{data:l,months:nj.slice(0,6),locale:n,t:t})]}),(0,i.jsxs)(D,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.sm},children:t("finance.insights.title")}),0===nw.length?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:t("finance.insights.noData")}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nw.map((e,n)=>(0,i.jsxs)(ed,{itype:e.type,children:[(0,i.jsx)(ep,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=l.familyMembers.indexOf(n);return(0,i.jsxs)(em,{children:[(0,i.jsx)(p.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,g.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]})]}),"settings"===eL&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(D,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.md},children:t("finance.settings.title")}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,i.jsxs)(eS,{children:[(0,i.jsx)(ez,{htmlFor:"weekly-budget",children:t("finance.settings.weeklyBudget")}),(0,i.jsx)(eC,{id:"weekly-budget",type:"number",min:"1",placeholder:String(l.budget.weeklyBudget),value:nl,onChange:e=>nc(e.target.value)})]}),(0,i.jsxs)(eS,{children:[(0,i.jsx)(ez,{htmlFor:"monthly-budget",children:t("finance.settings.monthlyBudget")}),(0,i.jsx)(eC,{id:"monthly-budget",type:"number",min:"1",placeholder:String(l.budget.monthlyBudget),value:nd,onChange:e=>np(e.target.value)})]}),(0,i.jsx)(p.$n,{variant:"primary",onClick:nU,style:{height:44},children:nm?t("finance.settings.saved"):t("finance.settings.save")})]})]})})]}),(0,i.jsxs)(eq,{children:[(0,i.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,i.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),na&&(0,i.jsx)(ne,{finData:l,activeMemberId:eW,locale:n,t:t,onClose:()=>no(!1),onSubmit:ns}),(0,i.jsx)(f.S,{labelKey:eE,onUndo:()=>{eR()},onDismiss:()=>eA(null),t:t})]})},{}))}}]);