"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["6362"],{3935(e,n,i){i.r(n),i.d(n,{default:()=>e9});var t=i(5723),r=i(7991),a=i(6859),s=i.n(a),o=i(2799),l=i(9874),c=i(7723),d=i(8395),p=i(1496),m=i(8170),x=i(4041),u=i(948),h=i(719),g=i(9546);let f="#7fb77e",b="#f85149",y=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=s().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${y} 0.25s ease both;
  overflow: hidden;
`,j=s().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,$=s().div`
  padding: 0 ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,v=s().div`
  flex: 1;
  min-width: 0;
`,M=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,k=s().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`,T=s().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,F=s().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${f};
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${f};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,D=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,S=s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,z=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,C=s().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${f};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,I=s().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,E=s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,A=s().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,B=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,R=s().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,L=s().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,P=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,O=s().div`
  flex-shrink: 0;
  width: 100%;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,Y=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,_=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,q=s().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,U=s().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
`,H=s().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,Z=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,G=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,N=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,W=s().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,K=s().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,Q="finance:list-density",V=s().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,X=s().li`
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
  &:hover .delete-btn { opacity: 1; }
`,J=s().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  display: inline-block;
`,ee=s().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,en=s().div`
  flex: 1;
  min-width: 0;
`,ei=s().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,et=s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,er=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,ea=s().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,es=s().span`
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${f}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?f:"#facc15"};
  white-space: nowrap;
`,eo=s().button`
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background: ${({ok:e})=>e?`${f}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?f:"#facc15"};
  white-space: nowrap;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: background 120ms ease;

  &:hover {
    background: ${({ok:e})=>e?`${f}40`:"rgba(250,204,21,0.28)"};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,el=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  font-size: 14px;
  opacity: 0;
  transition: opacity 120ms ease, color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  &:hover {
    color: ${b};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ec=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${f}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${f}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,ed=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?b:"warning"===e?"#facc15":"success"===e?f:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,ep=s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;s()(F)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let em=s().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,ex=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:n})=>e?n:l.w4.colors.border};
  background: ${({active:e,color:n})=>e?`${n}22`:l.w4.colors.mainBg};
  color: ${l.w4.colors.mainText};
  font-size: 12px;
  cursor: pointer;
  transition: all 120ms ease;
  white-space: nowrap;
  min-height: 44px;

  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,eu=s().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,eh=s().input`
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
`,eg=s().select`
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
`,ef=s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${f};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,eb=s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ey=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,ew=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ej=s().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,e$=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ev=s().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,eM=s().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,ek=s().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,eT=s().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,eF=s().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${f}; }
`,eD=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eS=s().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,ez=s().input`
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
`,eC=s().select`
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
`,eI=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eE=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,eA=s().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,eB=s().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eR=s().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eL=s().div`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  width: 72px;
  text-align: right;
  flex-shrink: 0;
`,eP=s().button`
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
`,eO=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,eY=s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,e_=s().footer`
  flex-shrink: 0;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-top: 1px solid ${l.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eq=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,eU=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eH=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,eZ=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${l.w4.spacing.md};
  z-index: 1000;
  animation: ${y} 0.15s ease;
`,eG=s().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${f};
  width: 100%;
  max-width: 560px;
  max-height: calc(100dvh - ${l.w4.spacing.xl});
  overflow-y: auto;
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,eN=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eW=s().button`
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
`,eK=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eQ=s().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,eV=s().button`
  background: ${({active:e})=>e?l.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
`,eX=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,eJ=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({active:e,color:n})=>e?`${n}22`:l.w4.colors.mainBg};
  border: 1px solid ${({active:e,color:n})=>e?n:l.w4.colors.border};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  border-radius: 999px;
  padding: 4px 10px 4px 6px;
  font-size: 12px;
  cursor: pointer;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease;
`,e0=s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,e4=s().input`
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
`,e1=s().select`
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
`,e2=s().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`;function e8(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function e3(e){return Math.round(e).toLocaleString("pt-PT")}function e5(){return new Date().toISOString().slice(0,10)}function e6(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function e7(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function e9({topBarRight:e}){let[n]=(0,m.Ym)(),i=(0,r.useMemo)(()=>(0,m.Nx)(n,u.A),[n]),{data:a,loaded:s,save:o}=(0,c.useFinance)(),y=a??{...c.EMPTY_FINANCE_DATA},{canUndo:es,latestLabelKey:eo,undo:eI}=(0,c.useUndo)(),[eE,eA]=(0,r.useState)(null),eB=(0,r.useCallback)(async(e,n)=>{(0,c.pushUndo)({id:`finance-undo-${Date.now()}`,snapshot:y,labelKey:n,ts:Date.now()}),eA(n),await o(e)},[y,o]),eR=(0,r.useCallback)(async()=>{let e=eI();e&&(eA("finance.undo.label.reverted"),await o(e),setTimeout(()=>eA(null),2500))},[eI,o]),[eL,eZ]=(0,r.useState)("overview"),[eG,eN]=(0,r.useState)(()=>(0,c.thisMonthKey)()),[eW,eK]=(0,r.useState)("shared"),eQ=(0,r.useRef)(null),[eV,eX]=(0,r.useState)(""),[eJ,e0]=(0,r.useState)(""),[e4,e1]=(0,r.useState)("shared"),[e2,nr]=(0,r.useState)(!1),na=(0,r.useRef)(null),[ns,no]=(0,r.useState)(!1),nl=(0,r.useCallback)((e,n,i)=>{let t=i?[i,...y.recentDescriptions].filter(Boolean).slice(0,20):y.recentDescriptions;eB({...y,expenses:[...e,...y.expenses],categoryHints:n,recentDescriptions:t},"finance.undo.label.added"),no(!1),na.current&&clearTimeout(na.current),nr(!0),na.current=setTimeout(()=>nr(!1),2e3)},[y,eB]),[nc,nd]=(0,r.useState)(""),[np,nm]=(0,r.useState)(""),[nx,nu]=(0,r.useState)(!1),[nh,ng]=(0,r.useState)("comfortable");(0,r.useEffect)(()=>{(0,l.PL)(Q).then(e=>{("compact"===e||"comfortable"===e)&&ng(e)})},[]);let nf=(0,r.useCallback)(()=>{let e="comfortable"===nh?"compact":"comfortable";ng(e),(0,l.Is)(Q,e)},[nh]),nb=(0,r.useMemo)(()=>(0,c.thisMonthKey)(),[]),ny=(0,r.useMemo)(()=>(0,c.computeWeeklyStatus)(y),[y]),nw=(0,r.useMemo)(()=>(0,c.computeMonthlySummary)(y,eG),[y,eG]),nj=(0,r.useMemo)(()=>(0,c.generateInsightsWithMembers)(y),[y]),n$=(0,r.useMemo)(()=>(0,c.availableMonths)(y),[y]),nv=(0,r.useMemo)(()=>(0,c.expensesForMonth)(y.expenses,eG),[y,eG]),nM=(0,r.useMemo)(()=>(0,c.incomeForMonth)(y.income,eG),[y,eG]),nk=(0,r.useMemo)(()=>(0,c.expensesForMember)(nv,eW),[nv,eW]),nT=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(y,eW,nb),[y,eW,nb]),nF=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(nb),[nb]),nD=(0,r.useMemo)(()=>(0,c.monthlyTotalByMember)(y,eW,nF),[y,eW,nF]),nS=(0,r.useMemo)(()=>0===nD?0:Math.round((nT-nD)/nD*100),[nT,nD]),nz=(0,r.useMemo)(()=>{if("all"===eW)return i("finance.member.all");if("shared"===eW)return i("finance.hero.family");let e=y.familyMembers.find(e=>e.id===eW);return e?.name??i("finance.hero.family")},[eW,y.familyMembers,i]),nC=(0,r.useMemo)(()=>{if("all"===eW||"shared"===eW)return l.w4.colors.mainTextMuted;let e=y.familyMembers.findIndex(e=>e.id===eW);return -1===e?f:(0,h.a8)(y.familyMembers[e],e)},[eW,y.familyMembers]),nI=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,c.expensesForMember)(y.expenses,eW).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[y.expenses,eW]),nE=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t=(0,c.expensesForMonth)(e.expenses,i),a=(0,c.expensesForMember)(t,n),s={};for(let e of a)s[e.categoryId]=(s[e.categoryId]??0)+e.amount;let o=Object.values(s).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(s).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:e7(e).color})),over:o>r?o-r:0}})})(y,eW),[y,eW]),nA=(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let a=new Date(i);a.setDate(i.getDate()-r);let s=a.toISOString().slice(0,10),o=s.slice(0,7),l=(0,c.expensesForMember)(e.expenses.filter(e=>e.date===s),n).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,o).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:d,exp:l})}return t})(y,eW),[y,eW]),nB=(0,r.useMemo)(()=>{let e,n;return e=new Date,n=y.expenses.length>0?y.expenses.reduce((e,n)=>e+n.amount,0)/y.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let a=r.toISOString().slice(0,10),s=(0,c.expensesForMember)(y.expenses.filter(e=>e.date===a),eW).reduce((e,n)=>e+n.amount,0);if(0===s)return 0;let o=s/n;return o<.5?1:o<1?2:o<2?3:4})},[y,eW]),nR=ny.budget>0?ny.spent/ny.budget*100:0,nL=y.budget.monthlyBudget>0?nT/y.budget.monthlyBudget*100:0,nP=(0,r.useMemo)(()=>{let e=(0,c.parseQuickInput)(eV,y.familyMembers);return e?.description?(0,c.guessCategory)(e.description,y.categoryHints):"other"},[eV,y.categoryHints,y.familyMembers]),nO=eJ||nP;(0,r.useEffect)(()=>{let e=(0,c.parseQuickInput)(eV,y.familyMembers);e?.memberId&&e1(e.memberId)},[eV,y.familyMembers]);let nY=(0,r.useCallback)(e=>{e.preventDefault();let n=(0,c.parseQuickInput)(eV,y.familyMembers);if(!n)return;let i=nO||"other",t=n.memberId??("shared"!==e4?e4:void 0),r={id:(0,x.z)(),amount:n.amount,date:e5(),categoryId:i,description:n.description||i,type:"daily",childId:t,createdAt:Date.now()},a={...y.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=i)});let s=[n.description||"",...y.recentDescriptions].filter(Boolean).slice(0,20);eB({...y,expenses:[r,...y.expenses],categoryHints:a,recentDescriptions:s},"finance.undo.label.added"),eX(""),e0(""),na.current&&clearTimeout(na.current),nr(!0),na.current=setTimeout(()=>nr(!1),2e3)},[eV,nO,e4,y,eB]),n_=(0,r.useCallback)(e=>{eB({...y,expenses:y.expenses.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[y,eB]),nq=(0,r.useCallback)(e=>{eB({...y,income:y.income.filter(n=>n.id!==e)},"finance.undo.label.deleted")},[y,eB]),nU=(0,r.useCallback)(e=>{eB({...y,expenses:y.expenses.map(n=>n.id===e?{...n,reimbursed:!n.reimbursed}:n)},"finance.undo.label.reimbursed")},[y,eB]),nH=(0,r.useCallback)(()=>{let e=parseFloat(nc)||y.budget.weeklyBudget,n=parseFloat(np)||y.budget.monthlyBudget;o({...y,budget:{...y.budget,weeklyBudget:e,monthlyBudget:n}}),nu(!0),setTimeout(()=>nu(!1),2e3)},[nc,np,y,o]),nZ=[{value:"overview",label:i("finance.tab.overview")},{value:"expenses",label:`${i("finance.tab.expenses")} ${nk.length>0?`(${nk.length})`:""}`},{value:"insights",label:`${i("finance.tab.insights")} ${nj.length>0?`(${nj.length})`:""}`},{value:"settings",label:i("finance.tab.settings")}],nG=Math.floor(nT).toLocaleString("pt-PT"),nN=(nT%1).toFixed(2).slice(1),nW=(()=>{let[e,i]=nb.split("-");return new Date(parseInt(e),parseInt(i)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),nK=(0,t.jsx)(h.TA,{data:y,activeMemberId:eW,onSelectMember:eK,onSaveData:o,t:i,locale:n}),nQ=(0,r.useMemo)(()=>{let e={};for(let n of nk)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:e7(e).color}))},[nk]),nV=nQ.reduce((e,n)=>e+n.value,0),nX=(0,r.useMemo)(()=>nE.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[nE]),nJ=nE.length>0?nX/nE.length:0,n0=nE.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>y.budget.monthlyBudget).length;return(0,t.jsxs)(l.PE,{title:i("finance.appTitle"),sidebar:nK,topBarRight:e,activeId:eW,children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(j,{children:(0,t.jsx)(h.jb,{data:y,activeMemberId:eW,onSelectMember:eK,t:i,locale:n})}),(0,t.jsxs)($,{children:[(0,t.jsx)(v,{children:(0,t.jsx)(d.tU,{tabs:nZ,value:eL,onChange:eZ,"aria-label":i("finance.nav.ariaLabel")})}),(0,t.jsxs)(M,{children:[0===y.familyMembers.length&&(0,t.jsx)(eY,{children:i("finance.member.empty")}),(0,t.jsx)(d.K0,{onClick:nf,title:"comfortable"===nh?i("finance.density.compact"):i("finance.density.comfortable"),"aria-label":i("finance.density.toggle"),active:"compact"===nh,children:(0,t.jsx)(d.In,{name:"comfortable"===nh?"list":"menu",size:14,"aria-hidden":!0})}),(0,t.jsxs)(d.$n,{variant:"ghost",style:{height:30},onClick:()=>no(!0),children:[(0,t.jsx)(d.In,{name:"plus",size:13,"aria-hidden":!0}),i("finance.quickAdd.newExpense")]})]})]}),(0,t.jsxs)(k,{children:["overview"===eL&&(0,t.jsxs)(T,{children:[(0,t.jsx)(F,{span:12,style:{borderLeft:`2px solid ${f}`},children:(0,t.jsxs)(C,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(E,{children:[i("finance.hero.spentIn")," ",nW," \xb7 ",nz]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(B,{children:"€"}),(0,t.jsx)(R,{children:nG}),(0,t.jsx)(L,{children:nN})]}),(0,t.jsxs)(P,{children:[(0,t.jsx)(p.Ru,{value:nS,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[i("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(nF,n)," \xb7 €",e3(nD)]})]}),nI.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4},children:(0,t.jsx)(p.OW,{points:nI,accent:nC,width:320,height:34})})]}),(0,t.jsx)(O,{children:(0,t.jsxs)(Y,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(q,{children:i("finance.budget.weekly")}),(0,t.jsxs)(U,{children:["€",e3(ny.spent)," ",(0,t.jsxs)(H,{children:["/ €",ny.budget]})]})]}),(0,t.jsx)(p.Xj,{pct:nR,over:nR>100?nR-100:0}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)("span",{children:[Math.round(nR),"% ",i("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:ny.remaining<0?b:f},children:ny.remaining>0?`€${e3(ny.remaining)} ${i("finance.budget.remaining")}`:`€${e3(Math.abs(ny.remaining))} ${i("finance.budget.over")}`})]}),(0,t.jsxs)(_,{style:{marginTop:14},children:[(0,t.jsx)(q,{children:i("finance.budget.monthly")}),(0,t.jsxs)(U,{children:["€",e3(nT)," ",(0,t.jsxs)(H,{children:["/ €",y.budget.monthlyBudget]})]})]}),(0,t.jsx)(p.Xj,{pct:nL,over:nL>100?nL-100:0}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)("span",{children:[Math.round(nL),"% ",i("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[i("finance.budget.projected")," €",e3(nT+(ny.projectedTotal-ny.spent))]})]})]})})]})}),(0,t.jsxs)(F,{span:8,children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(S,{children:i("finance.charts.sixMonths")}),(0,t.jsx)(z,{children:(0,t.jsx)(eq,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(eU,{children:[(0,t.jsx)(eH,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,t.jsx)(p.ik,{data:nE,budget:y.budget.monthlyBudget,height:200}),(0,t.jsxs)(ey,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(d.YZ,{children:i("finance.charts.total6m")}),(0,t.jsxs)(ej,{children:["€",e3(nX)]})]}),(0,t.jsxs)(ew,{children:[(0,t.jsx)(d.YZ,{children:i("finance.charts.monthlyAvg")}),(0,t.jsxs)(ej,{children:["€",e3(nJ)]})]}),(0,t.jsxs)(ew,{children:[(0,t.jsx)(d.YZ,{children:i("finance.charts.monthsOverBudget")}),(0,t.jsxs)(ej,{children:[n0," / ",nE.length]})]}),(0,t.jsxs)(ew,{children:[(0,t.jsx)(d.YZ,{children:i("finance.charts.trend")}),(0,t.jsxs)(ej,{style:{color:nS>0?b:f},children:[nS>0?"+":"",nS,"%"]})]})]})]}),(0,t.jsxs)(F,{span:4,children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(S,{children:i("finance.charts.byCategory")}),(0,t.jsx)(eP,{type:"button",onClick:()=>eZ("insights"),children:i("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(p.RJ,{data:nQ,total:nV,size:110,centerLabel:nW.slice(0,3),centerValue:`€${e3(nV)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:nQ.map(e=>{let i=e7(e.id),r=(0,c.expensesForMember)((0,c.expensesForMonth)(y.expenses,nF),eW).filter(n=>n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(G,{children:[(0,t.jsx)(N,{color:e.color}),(0,t.jsx)(W,{children:"pt"===n?i.labelPt:i.labelEn}),(0,t.jsxs)(K,{children:["€",e3(e.value)]}),Math.abs(a)>1&&(0,t.jsx)(p.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(F,{span:5,children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(S,{children:i("finance.charts.cashflow")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:i("finance.charts.cashflowSub")})]}),(0,t.jsx)(p.uj,{data:nA,height:170,legendIn:i("finance.charts.in"),legendOut:i("finance.charts.out")})]}),(0,t.jsxs)(F,{span:4,children:[(0,t.jsx)(D,{children:(0,t.jsx)(S,{children:i("finance.charts.heatmap")})}),(0,t.jsx)(p.RT,{data:nB,locale:n}),(0,t.jsxs)(e$,{children:[(0,t.jsx)("span",{children:i("finance.charts.less")}),(0,t.jsx)(ev,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:i("finance.charts.more")})]})]}),(0,t.jsxs)(F,{span:3,children:[(0,t.jsx)(D,{children:(0,t.jsx)(S,{children:i("finance.charts.thisWeek")})}),(0,t.jsxs)(eM,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eT,{children:["€",e3(ny.spent)]}),(0,t.jsxs)(H,{children:["/ €",ny.budget]})]}),(0,t.jsx)(p.kl,{spent:ny.spent,budget:ny.budget}),(0,t.jsxs)(eF,{children:[(0,t.jsx)("span",{children:i("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:i("finance.charts.actual")})]})]})]}),(0,t.jsxs)(F,{span:7,children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(S,{children:i("finance.recent.title")}),y.expenses.length>5&&(0,t.jsx)(eP,{type:"button",onClick:()=>eZ("expenses"),children:i("finance.recent.viewAll",{n:nk.length})})]}),0===nk.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:i("finance.dashboard.noRecent")}):(0,t.jsx)(V,{"aria-label":i("finance.recent.title"),children:nk.slice(0,6).map(e=>(0,t.jsx)(nn,{exp:e,finData:y,locale:n,t:i,onDelete:n_,onToggleReimbursed:nU,compact:"compact"===nh},e.id))})]}),(0,t.jsxs)(F,{span:5,children:[(0,t.jsx)(D,{children:(0,t.jsx)(S,{children:i("finance.insights.title")})}),0===nj.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("insights")??"—"}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nj.map((e,n)=>(0,t.jsxs)(ec,{itype:e.type,children:[(0,t.jsx)(ed,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=y.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=y.familyMembers.indexOf(n);return(0,t.jsxs)(ep,{children:[(0,t.jsx)(d.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(F,{span:12,ref:eQ,children:[(0,t.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.quickAdd.title")}),(0,t.jsxs)("form",{onSubmit:nY,"aria-label":i("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(em,{children:[{id:"shared",name:i("finance.member.shared"),role:"shared",color:void 0},...y.familyMembers.map((e,n)=>({...e,color:(0,h.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,h.a8)(y.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(ex,{type:"button",active:e4===e.id,color:i,onClick:()=>e1(e.id),children:[(0,t.jsx)(d.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(eh,{type:"text",placeholder:i("finance.quickAdd.placeholder"),value:eV,onChange:e=>{eX(e.target.value),e0("")},"aria-label":i("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,t.jsx)(eg,{value:eJ||nP,onChange:e=>e0(e.target.value),"aria-label":i("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!eV.trim(),children:i("finance.quickAdd.add")})]}),(0,t.jsxs)(ef,{visible:e2,"aria-live":"polite","aria-atomic":!0,children:["✓ ",i("finance.quickAdd.added")]}),(0,t.jsx)(eb,{children:i("finance.quickAdd.hint")})]})]})]}),"expenses"===eL&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eO,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(d.YZ,{children:i("finance.tx.title")}),(0,t.jsx)(eC,{value:eG,onChange:e=>eN(e.target.value),"aria-label":i("finance.insights.month"),children:n$.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),0===nk.length&&0===nM.length?(0,t.jsx)(F,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.tx.empty")})}):(0,t.jsx)(F,{span:12,children:(0,t.jsx)(V,{"aria-label":i("finance.tx.title"),children:[...nk.map(e=>({...e,_kind:"expense"})),...nM.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(nn,{exp:e,finData:y,locale:n,t:i,onDelete:n_,onToggleReimbursed:nU,compact:"compact"===nh},e.id):(0,t.jsxs)(X,{compact:"compact"===nh,children:["compact"===nh?(0,t.jsx)(J,{color:f,"aria-hidden":!0}):(0,t.jsx)(ee,{color:f,children:"\uD83D\uDCB0"}),(0,t.jsxs)(en,{children:[(0,t.jsx)(ei,{children:e.source}),"compact"!==nh&&(0,t.jsxs)(et,{children:[e6(e.date,n)," \xb7 ",i("finance.dashboard.income")]})]}),(0,t.jsxs)(er,{children:[(0,t.jsxs)(ea,{style:{color:f},children:["+€",e8(e.amount)]}),(0,t.jsx)(el,{className:"delete-btn",type:"button",onClick:()=>nq(e.id),"aria-label":`${i("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===eL&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eO,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(d.YZ,{children:i("finance.insights.title")}),(0,t.jsx)(eC,{value:eG,onChange:e=>eN(e.target.value),"aria-label":i("finance.insights.month"),children:n$.map(e=>(0,t.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),(0,t.jsxs)(F,{span:12,style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.byCategory")}),(0,t.jsx)(ni,{expenses:nk,total:nw.totalExpenses,locale:n})]}),(0,t.jsxs)(F,{span:12,children:[(0,t.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.monthlyTrend")}),(0,t.jsx)(nt,{data:y,months:n$.slice(0,6),locale:n,t:i})]}),(0,t.jsxs)(F,{span:12,children:[(0,t.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.title")}),0===nj.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nj.map((e,n)=>(0,t.jsxs)(ec,{itype:e.type,children:[(0,t.jsx)(ed,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=y.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=y.familyMembers.indexOf(n);return(0,t.jsxs)(ep,{children:[(0,t.jsx)(d.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,h.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]})]}),"settings"===eL&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(F,{span:12,children:[(0,t.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.md},children:i("finance.settings.title")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(eD,{children:[(0,t.jsx)(eS,{htmlFor:"weekly-budget",children:i("finance.settings.weeklyBudget")}),(0,t.jsx)(ez,{id:"weekly-budget",type:"number",min:"1",placeholder:String(y.budget.weeklyBudget),value:nc,onChange:e=>nd(e.target.value)})]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(eS,{htmlFor:"monthly-budget",children:i("finance.settings.monthlyBudget")}),(0,t.jsx)(ez,{id:"monthly-budget",type:"number",min:"1",placeholder:String(y.budget.monthlyBudget),value:np,onChange:e=>nm(e.target.value)})]}),(0,t.jsx)(d.$n,{variant:"primary",onClick:nH,style:{height:44},children:nx?i("finance.settings.saved"):i("finance.settings.save")})]})]})})]}),(0,t.jsxs)(e_,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),ns&&(0,t.jsx)(ne,{finData:y,activeMemberId:eW,locale:n,t:i,onClose:()=>no(!1),onSubmit:nl}),(0,t.jsx)(g.S,{labelKey:eE,onUndo:()=>{eR()},onDismiss:()=>eA(null),t:i})]})}function ne({finData:e,activeMemberId:n,locale:i,t:a,onClose:s,onSubmit:o}){let[p,m]=(0,r.useState)(""),[u,g]=(0,r.useState)(""),[f,b]=(0,r.useState)("other"),[y,w]=(0,r.useState)(e5()),[j,$]=(0,r.useState)("single"),[v,M]=(0,r.useState)(n),[k,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id));(0,r.useEffect)(()=>{u.trim()&&b((0,c.guessCategory)(u,e.categoryHints))},[u,e.categoryHints]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]);let F=parseFloat(p.replace(",","."))||0,D=k.length,S="split"===j&&D>0?F/D:F,z=F>0&&!!y&&("single"===j||"split"===j&&D>0),C=[{id:"shared",name:a("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,h.a8)(e,n),role:e.role}))];return(0,t.jsx)(eZ,{onClick:s,role:"dialog","aria-modal":"true","aria-label":a("finance.quickAdd.newExpense"),children:(0,t.jsxs)(eG,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(eN,{children:[(0,t.jsxs)(d.YZ,{children:["◉ ",a("finance.quickAdd.newExpense")]}),(0,t.jsx)(eW,{type:"button",onClick:s,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!z)return;let t=u.trim(),r=Date.now(),a={...e.categoryHints};if(t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=f)}),"single"===j)i=[{id:(0,x.z)(),amount:F,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===v?void 0:v,createdAt:r}];else{let e=Math.round(F/D*100)/100,n=Math.round((F-e*D)*100)/100;i=k.map((i,a)=>({id:(0,x.z)(),amount:0===a?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${D})`:f,type:"daily",childId:i,createdAt:r+a}))}o(i,a,t)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsx)(eS,{htmlFor:"exp-amount",children:"pt"===i?"Valor (€)":"Amount (€)"}),(0,t.jsx)(e4,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:p,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(eS,{htmlFor:"exp-date",children:"pt"===i?"Data":"Date"}),(0,t.jsx)(e4,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(eS,{htmlFor:"exp-desc",children:"pt"===i?"Descri\xe7\xe3o":"Description"}),(0,t.jsx)(e4,{id:"exp-desc",type:"text",placeholder:"pt"===i?"ex. Continente, farm\xe1cia…":"e.g. Continente, pharmacy…",value:u,onChange:e=>g(e.target.value)})]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(eS,{htmlFor:"exp-cat",children:a("finance.quickAdd.category")}),(0,t.jsx)(e1,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===i?e.labelPt:e.labelEn]},e.id))})]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(eS,{children:"pt"===i?"Atribuir a":"Assign to"}),(0,t.jsxs)(eQ,{role:"tablist",children:[(0,t.jsx)(eV,{type:"button",active:"single"===j,onClick:()=>$("single"),children:"pt"===i?"Membro":"Member"}),(0,t.jsx)(eV,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:"pt"===i?"Dividir":"Split"})]}),"single"===j?(0,t.jsx)(eX,{style:{marginTop:l.w4.spacing.sm},children:C.map(e=>(0,t.jsxs)(eJ,{type:"button",active:v===e.id,color:e.color,onClick:()=>M(e.id),children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eX,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,h.a8)(e,n),r=k.includes(e.id);return(0,t.jsxs)(eJ,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(d.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),D>0&&F>0&&(0,t.jsx)(e0,{style:{marginTop:l.w4.spacing.xs},children:"pt"===i?`${D}\xd7 €${e8(S)} cada`:`${D}\xd7 €${e8(S)} each`})]})]}),(0,t.jsxs)(e2,{children:[(0,t.jsx)(d.$n,{type:"button",variant:"ghost",onClick:s,children:a("finance.member.cancel")}),(0,t.jsx)(d.$n,{type:"submit",variant:"primary",disabled:!z,children:a("finance.quickAdd.add")})]})]})]})})}function nn({exp:e,finData:n,locale:i,t:r,onDelete:a,onToggleReimbursed:s,compact:o=!1}){let c=e7(e.categoryId),p=n.familyMembers.findIndex(n=>n.id===e.childId),m=p>=0?n.familyMembers[p]:null,x=m?(0,h.a8)(m,p):l.w4.colors.mainTextMuted,u=e.isReimbursable?s?(0,t.jsx)(eo,{type:"button",ok:e.reimbursed,onClick:()=>s(e.id),"aria-label":r("finance.tx.markReimbursed"),children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):(0,t.jsx)(es,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}):null,g=(0,t.jsx)(el,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"});return o?(0,t.jsxs)(X,{compact:!0,children:[(0,t.jsx)(J,{color:c.color,"aria-hidden":!0}),(0,t.jsx)(en,{children:(0,t.jsxs)(ei,{style:{display:"flex",alignItems:"center",gap:6},children:[m?(0,t.jsx)(d.eu,{member:{id:m.id,name:m.name,role:m.role,color:x},size:16}):null,(0,t.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description||("pt"===i?c.labelPt:c.labelEn)})]})}),(0,t.jsxs)(er,{children:[u,(0,t.jsxs)(ea,{children:["−€",e8(e.amount)]}),g]})]}):(0,t.jsxs)(X,{children:[(0,t.jsx)(ee,{color:c.color,children:(0,t.jsx)("span",{"aria-hidden":!0,children:c.icon})}),(0,t.jsxs)(en,{children:[(0,t.jsx)(ei,{children:e.description||("pt"===i?c.labelPt:c.labelEn)}),(0,t.jsxs)(et,{children:[m?(0,t.jsx)(d.eu,{member:{id:m.id,name:m.name,role:m.role,color:x},size:14}):null,(0,t.jsx)("span",{children:"pt"===i?c.labelPt:c.labelEn}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:e6(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:"mensal"})]})]})]}),(0,t.jsxs)(er,{children:[u,"recurring"===e.type&&(0,t.jsx)(es,{children:r("finance.tx.recurring")}),(0,t.jsxs)(ea,{children:["−€",e8(e.amount)]}),g]})]})}function ni({expenses:e,total:n,locale:i}){let a=Object.entries((0,r.useMemo)(()=>{let n={};for(let i of e)n[i.categoryId]=(n[i.categoryId]??0)+i.amount;return n},[e])).map(([e,n])=>({cat:e7(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===a.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:"—"}):(0,t.jsx)(eI,{children:a.map(({cat:e,amt:r})=>{let a=n>0?r/n*100:0;return(0,t.jsxs)(eE,{children:[(0,t.jsxs)(eA,{children:[(0,t.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===i?e.labelPt:e.labelEn]}),(0,t.jsx)(eB,{children:(0,t.jsx)(eR,{pct:a,color:e.color})}),(0,t.jsxs)(eL,{children:["€",r.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function nt({data:e,months:n,locale:i,t:r}){let a=n.map(n=>(0,c.computeMonthlySummary)(e,n)),s=Math.max(...a.map(e=>e.totalExpenses),1);return a.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)(eI,{children:a.map(e=>{let n=e.totalExpenses/s*100,[,r]=e.month.split("-"),a=new Date(parseInt(e.month.slice(0,4)),parseInt(r)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"short"});return(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{style:{width:80},children:a}),(0,t.jsx)(eB,{children:(0,t.jsx)(eR,{pct:n,color:l.w4.colors.accent})}),(0,t.jsxs)(eL,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}}}]);