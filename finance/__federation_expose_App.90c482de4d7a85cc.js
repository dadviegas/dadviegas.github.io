"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["6362"],{3935(e,n,i){i.r(n),i.d(n,{default:()=>e3});var t=i(5723),r=i(7991),s=i(6859),a=i.n(s),o=i(2799),l=i(3930),d=i(9009),c=i(8395),p=i(1496),m=i(8170),x=i(4041),h=i(948),u=i(719);let g="#7fb77e",f="#f85149",b=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=a().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${b} 0.25s ease both;
  overflow: hidden;
`,w=a().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,j=a().div`
  padding: 0 ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,$=a().div`
  flex: 1;
  min-width: 0;
`,v=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,M=a().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`,k=a().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,T=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${g};
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${g};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,F=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,D=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,z=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,S=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${g};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,I=a().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,C=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,E=a().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,A=a().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,B=a().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,R=a().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,L=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,P=a().div`
  flex-shrink: 0;
  width: 100%;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,Y=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,_=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,q=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
`,H=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,Z=a().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,U=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,G=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,N=a().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,K=a().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,Q=a().li`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  transition: background 120ms ease;
  cursor: default;
  min-height: 44px;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
  &:hover .delete-btn { opacity: 1; }
`,V=a().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,X=a().div`
  flex: 1;
  min-width: 0;
`,J=a().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ee=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,en=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,ei=a().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,et=a().span`
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${g}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?g:"#facc15"};
  white-space: nowrap;
`,er=a().button`
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
    color: ${f};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,es=a().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${g}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${g}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,ea=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?f:"warning"===e?"#facc15":"success"===e?g:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,eo=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;a()(T)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let el=a().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,ed=a().button`
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
`,ec=a().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,ep=a().input`
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
`,em=a().select`
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
`,ex=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${g};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,eh=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eu=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,eg=a().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ef=a().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,eb=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ey=a().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,ew=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,ej=a().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,e$=a().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,ev=a().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${g}; }
`,eM=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ek=a().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,eT=a().input`
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
`,eF=a().select`
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
`,eD=a().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ez=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,eS=a().div`
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
`,eI=a().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eC=a().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eE=a().div`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  width: 72px;
  text-align: right;
  flex-shrink: 0;
`,eA=a().button`
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
`,eB=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,eR=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,eL=a().footer`
  flex-shrink: 0;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-top: 1px solid ${l.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eP=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,eY=a().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eO=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,e_=a().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${l.w4.spacing.md};
  z-index: 1000;
  animation: ${b} 0.15s ease;
`,eq=a().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${g};
  width: 100%;
  max-width: 560px;
  max-height: calc(100dvh - ${l.w4.spacing.xl});
  overflow-y: auto;
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,eH=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eZ=a().button`
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
`,eU=a().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eG=a().div`
  display: inline-flex;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,eN=a().button`
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
`,eW=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,eK=a().button`
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
`,eQ=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,eV=a().input`
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
`,eX=a().select`
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
`,eJ=a().div`
  display: flex;
  justify-content: flex-end;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
`;function e0(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function e4(e){return Math.round(e).toLocaleString("pt-PT")}function e1(){return new Date().toISOString().slice(0,10)}function e2(e,n){let[i,t,r]=e.split("-").map(Number);return new Date(i,t-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function e8(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function e3({topBarRight:e}){let[n]=(0,m.Ym)(),i=(0,r.useMemo)(()=>(0,m.Nx)(n,h.A),[n]),{data:s,loaded:a,save:o}=(0,d.useFinance)(),b=s??{...d.EMPTY_FINANCE_DATA},[et,eD]=(0,r.useState)("overview"),[ez,eS]=(0,r.useState)(()=>(0,d.thisMonthKey)()),[eI,eC]=(0,r.useState)("shared"),eE=(0,r.useRef)(null),[e_,eq]=(0,r.useState)(""),[eH,eZ]=(0,r.useState)(""),[eU,eG]=(0,r.useState)("shared"),[eN,eW]=(0,r.useState)(!1),eK=(0,r.useRef)(null),[eQ,eV]=(0,r.useState)(!1),eX=(0,r.useCallback)((e,n,i)=>{let t=i?[i,...b.recentDescriptions].filter(Boolean).slice(0,20):b.recentDescriptions;o({...b,expenses:[...e,...b.expenses],categoryHints:n,recentDescriptions:t}),eV(!1),eK.current&&clearTimeout(eK.current),eW(!0),eK.current=setTimeout(()=>eW(!1),2e3)},[b,o]),[eJ,ne]=(0,r.useState)(""),[nn,ni]=(0,r.useState)(""),[nt,nr]=(0,r.useState)(!1),ns=(0,r.useMemo)(()=>(0,d.thisMonthKey)(),[]),na=(0,r.useMemo)(()=>(0,d.computeWeeklyStatus)(b),[b]),no=(0,r.useMemo)(()=>(0,d.computeMonthlySummary)(b,ez),[b,ez]),nl=(0,r.useMemo)(()=>(0,d.generateInsightsWithMembers)(b),[b]),nd=(0,r.useMemo)(()=>(0,d.availableMonths)(b),[b]),nc=(0,r.useMemo)(()=>(0,d.expensesForMonth)(b.expenses,ez),[b,ez]),np=(0,r.useMemo)(()=>(0,d.incomeForMonth)(b.income,ez),[b,ez]),nm=(0,r.useMemo)(()=>"shared"===eI?nc.filter(e=>!e.childId):nc.filter(e=>e.childId===eI),[nc,eI]),nx=(0,r.useMemo)(()=>(0,d.monthlyTotalByMember)(b,eI,ns),[b,eI,ns]),nh=(0,r.useMemo)(()=>(function(e){let[n,i]=e.split("-").map(Number),t=new Date(n,i-2,1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`})(ns),[ns]),nu=(0,r.useMemo)(()=>(0,d.monthlyTotalByMember)(b,eI,nh),[b,eI,nh]),ng=(0,r.useMemo)(()=>0===nu?0:Math.round((nx-nu)/nu*100),[nx,nu]),nf=(0,r.useMemo)(()=>{if("shared"===eI)return i("finance.hero.family");let e=b.familyMembers.find(e=>e.id===eI);return e?.name??i("finance.hero.family")},[eI,b.familyMembers,i]),nb=(0,r.useMemo)(()=>{if("shared"===eI)return l.w4.colors.mainTextMuted;let e=b.familyMembers.findIndex(e=>e.id===eI);return -1===e?g:(0,u.a8)(b.familyMembers[e],e)},[eI,b.familyMembers]),ny=(0,r.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,i)=>{let t=new Date(e);t.setDate(e.getDate()-(5-i)*7-e.getDay()),t.setHours(0,0,0,0);let r=new Date(t);return r.setDate(t.getDate()+7),(0,d.expensesForMember)(b.expenses,eI).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=t&&n<r}).reduce((e,n)=>e+n.amount,0)})},[b.expenses,eI]),nw=(0,r.useMemo)(()=>(function(e,n){let i=[],t=new Date;for(let e=5;e>=0;e--){let n=new Date(t.getFullYear(),t.getMonth()-e,1);i.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return i.map(i=>{let t="shared"===n?(0,d.expensesForMonth)(e.expenses,i).filter(e=>!e.childId):(0,d.expensesForMonth)(e.expenses,i).filter(e=>e.childId===n),s={};for(let e of t)s[e.categoryId]=(s[e.categoryId]??0)+e.amount;let a=Object.values(s).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(i.slice(0,4)),parseInt(i.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(s).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:e8(e).color})),over:a>r?a-r:0}})})(b,eI),[b,eI]),nj=(0,r.useMemo)(()=>(function(e,n){let i=new Date,t=[];for(let r=89;r>=0;r--){let s=new Date(i);s.setDate(i.getDate()-r);let a=s.toISOString().slice(0,10),o=a.slice(0,7),l=("shared"===n?e.expenses.filter(e=>e.date===a&&!e.childId):e.expenses.filter(e=>e.date===a&&e.childId===n)).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,o).reduce((e,n)=>e+n.amount,0)/30;t.push({inc:c,exp:l})}return t})(b,eI),[b,eI]),n$=(0,r.useMemo)(()=>{let e,n;return e=new Date,n=b.expenses.length>0?b.expenses.reduce((e,n)=>e+n.amount,0)/b.expenses.length:20,Array.from({length:91},(i,t)=>{let r=new Date(e);r.setDate(e.getDate()-90+t);let s=r.toISOString().slice(0,10),a=("shared"===eI?b.expenses.filter(e=>e.date===s&&!e.childId):b.expenses.filter(e=>e.date===s&&e.childId===eI)).reduce((e,n)=>e+n.amount,0);if(0===a)return 0;let o=a/n;return o<.5?1:o<1?2:o<2?3:4})},[b,eI]),nv=na.budget>0?na.spent/na.budget*100:0,nM=b.budget.monthlyBudget>0?nx/b.budget.monthlyBudget*100:0,nk=(0,r.useMemo)(()=>{let e=(0,d.parseQuickInput)(e_,b.familyMembers);return e?.description?(0,d.guessCategory)(e.description,b.categoryHints):"other"},[e_,b.categoryHints,b.familyMembers]),nT=eH||nk;(0,r.useEffect)(()=>{let e=(0,d.parseQuickInput)(e_,b.familyMembers);e?.memberId&&eG(e.memberId)},[e_,b.familyMembers]);let nF=(0,r.useCallback)(e=>{e.preventDefault();let n=(0,d.parseQuickInput)(e_,b.familyMembers);if(!n)return;let i=nT||"other",t=n.memberId??("shared"!==eU?eU:void 0),r={id:(0,x.z)(),amount:n.amount,date:e1(),categoryId:i,description:n.description||i,type:"daily",childId:t,createdAt:Date.now()},s={...b.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(s[e]=i)});let a=[n.description||"",...b.recentDescriptions].filter(Boolean).slice(0,20);o({...b,expenses:[r,...b.expenses],categoryHints:s,recentDescriptions:a}),eq(""),eZ(""),eK.current&&clearTimeout(eK.current),eW(!0),eK.current=setTimeout(()=>eW(!1),2e3)},[e_,nT,eU,b,o]),nD=(0,r.useCallback)(e=>{o({...b,expenses:b.expenses.filter(n=>n.id!==e)})},[b,o]),nz=(0,r.useCallback)(e=>{o({...b,income:b.income.filter(n=>n.id!==e)})},[b,o]),nS=(0,r.useCallback)(()=>{let e=parseFloat(eJ)||b.budget.weeklyBudget,n=parseFloat(nn)||b.budget.monthlyBudget;o({...b,budget:{...b.budget,weeklyBudget:e,monthlyBudget:n}}),nr(!0),setTimeout(()=>nr(!1),2e3)},[eJ,nn,b,o]),nI=[{value:"overview",label:i("finance.tab.overview")},{value:"expenses",label:`${i("finance.tab.expenses")} ${nm.length>0?`(${nm.length})`:""}`},{value:"insights",label:`${i("finance.tab.insights")} ${nl.length>0?`(${nl.length})`:""}`},{value:"settings",label:i("finance.tab.settings")}],nC=Math.floor(nx).toLocaleString("pt-PT"),nE=(nx%1).toFixed(2).slice(1),nA=(()=>{let[e,i]=ns.split("-");return new Date(parseInt(e),parseInt(i)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),nB=(0,t.jsx)(u.TA,{data:b,activeMemberId:eI,onSelectMember:eC,onSaveData:o,t:i,locale:n}),nR=(0,r.useMemo)(()=>{let e={};for(let n of nm)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:e8(e).color}))},[nm]),nL=nR.reduce((e,n)=>e+n.value,0),nP=(0,r.useMemo)(()=>nw.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[nw]),nY=nw.length>0?nP/nw.length:0,nO=nw.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>b.budget.monthlyBudget).length;return(0,t.jsxs)(l.PE,{title:i("finance.appTitle"),sidebar:nB,topBarRight:e,activeId:eI,children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(w,{children:(0,t.jsx)(u.jb,{data:b,activeMemberId:eI,onSelectMember:eC,t:i,locale:n})}),(0,t.jsxs)(j,{children:[(0,t.jsx)($,{children:(0,t.jsx)(c.tU,{tabs:nI,value:et,onChange:eD,"aria-label":i("finance.nav.ariaLabel")})}),(0,t.jsxs)(v,{children:[0===b.familyMembers.length&&(0,t.jsx)(eR,{children:i("finance.member.empty")}),(0,t.jsxs)(c.$n,{variant:"ghost",style:{height:30},onClick:()=>eV(!0),children:[(0,t.jsx)(c.In,{name:"plus",size:13,"aria-hidden":!0}),i("finance.quickAdd.newExpense")]})]})]}),(0,t.jsxs)(M,{children:["overview"===et&&(0,t.jsxs)(k,{children:[(0,t.jsx)(T,{span:12,style:{borderLeft:`2px solid ${g}`},children:(0,t.jsxs)(S,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(C,{children:[i("finance.hero.spentIn")," ",nA," \xb7 ",nf]}),(0,t.jsxs)(E,{children:[(0,t.jsx)(A,{children:"€"}),(0,t.jsx)(B,{children:nC}),(0,t.jsx)(R,{children:nE})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(p.Ru,{value:ng,format:"pct",decimals:0}),(0,t.jsxs)("span",{children:[i("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(nh,n)," \xb7 €",e4(nu)]})]}),ny.some(e=>e>0)&&(0,t.jsx)("div",{style:{marginTop:4},children:(0,t.jsx)(p.OW,{points:ny,accent:nb,width:320,height:34})})]}),(0,t.jsx)(P,{children:(0,t.jsxs)(Y,{children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(_,{children:i("finance.budget.weekly")}),(0,t.jsxs)(q,{children:["€",e4(na.spent)," ",(0,t.jsxs)(H,{children:["/ €",na.budget]})]})]}),(0,t.jsx)(p.Xj,{pct:nv,over:nv>100?nv-100:0}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)("span",{children:[Math.round(nv),"% ",i("finance.budget.used")]}),(0,t.jsx)("span",{style:{color:na.remaining<0?f:g},children:na.remaining>0?`€${e4(na.remaining)} ${i("finance.budget.remaining")}`:`€${e4(Math.abs(na.remaining))} ${i("finance.budget.over")}`})]}),(0,t.jsxs)(O,{style:{marginTop:14},children:[(0,t.jsx)(_,{children:i("finance.budget.monthly")}),(0,t.jsxs)(q,{children:["€",e4(nx)," ",(0,t.jsxs)(H,{children:["/ €",b.budget.monthlyBudget]})]})]}),(0,t.jsx)(p.Xj,{pct:nM,over:nM>100?nM-100:0}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)("span",{children:[Math.round(nM),"% ",i("finance.budget.used")]}),(0,t.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[i("finance.budget.projected")," €",e4(nx+(na.projectedTotal-na.spent))]})]})]})})]})}),(0,t.jsxs)(T,{span:8,children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(D,{children:i("finance.charts.sixMonths")}),(0,t.jsx)(z,{children:(0,t.jsx)(eP,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,t.jsxs)(eY,{children:[(0,t.jsx)(eO,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,t.jsx)(p.ik,{data:nw,budget:b.budget.monthlyBudget,height:200}),(0,t.jsxs)(eu,{children:[(0,t.jsxs)(eg,{children:[(0,t.jsx)(c.YZ,{children:i("finance.charts.total6m")}),(0,t.jsxs)(ef,{children:["€",e4(nP)]})]}),(0,t.jsxs)(eg,{children:[(0,t.jsx)(c.YZ,{children:i("finance.charts.monthlyAvg")}),(0,t.jsxs)(ef,{children:["€",e4(nY)]})]}),(0,t.jsxs)(eg,{children:[(0,t.jsx)(c.YZ,{children:i("finance.charts.monthsOverBudget")}),(0,t.jsxs)(ef,{children:[nO," / ",nw.length]})]}),(0,t.jsxs)(eg,{children:[(0,t.jsx)(c.YZ,{children:i("finance.charts.trend")}),(0,t.jsxs)(ef,{style:{color:ng>0?f:g},children:[ng>0?"+":"",ng,"%"]})]})]})]}),(0,t.jsxs)(T,{span:4,children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(D,{children:i("finance.charts.byCategory")}),(0,t.jsx)(eA,{type:"button",onClick:()=>eD("insights"),children:i("finance.charts.viewAll")})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,t.jsx)(p.RJ,{data:nR,total:nL,size:110,centerLabel:nA.slice(0,3),centerValue:`€${e4(nL)}`}),(0,t.jsx)("div",{style:{flex:1,minWidth:120},children:nR.map(e=>{let i=e8(e.id),r=(0,d.expensesForMonth)(b.expenses,nh).filter(n=>"shared"===eI?!n.childId&&n.categoryId===e.id:n.childId===eI&&n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),s=r>0?(e.value-r)/r*100:0;return(0,t.jsxs)(U,{children:[(0,t.jsx)(G,{color:e.color}),(0,t.jsx)(N,{children:"pt"===n?i.labelPt:i.labelEn}),(0,t.jsxs)(W,{children:["€",e4(e.value)]}),Math.abs(s)>1&&(0,t.jsx)(p.Ru,{value:s,format:"pct",decimals:0})]},e.id)})})]})]}),(0,t.jsxs)(T,{span:5,children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(D,{children:i("finance.charts.cashflow")}),(0,t.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:i("finance.charts.cashflowSub")})]}),(0,t.jsx)(p.uj,{data:nj,height:170,legendIn:i("finance.charts.in"),legendOut:i("finance.charts.out")})]}),(0,t.jsxs)(T,{span:4,children:[(0,t.jsx)(F,{children:(0,t.jsx)(D,{children:i("finance.charts.heatmap")})}),(0,t.jsx)(p.RT,{data:n$,locale:n}),(0,t.jsxs)(eb,{children:[(0,t.jsx)("span",{children:i("finance.charts.less")}),(0,t.jsx)(ey,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,t.jsx)("span",{style:{background:e}},n))}),(0,t.jsx)("span",{children:i("finance.charts.more")})]})]}),(0,t.jsxs)(T,{span:3,children:[(0,t.jsx)(F,{children:(0,t.jsx)(D,{children:i("finance.charts.thisWeek")})}),(0,t.jsxs)(ew,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsxs)(e$,{children:["€",e4(na.spent)]}),(0,t.jsxs)(H,{children:["/ €",na.budget]})]}),(0,t.jsx)(p.kl,{spent:na.spent,budget:na.budget}),(0,t.jsxs)(ev,{children:[(0,t.jsx)("span",{children:i("finance.charts.ideal")}),(0,t.jsx)("span",{className:"fin",children:i("finance.charts.actual")})]})]})]}),(0,t.jsxs)(T,{span:7,children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(D,{children:i("finance.recent.title")}),b.expenses.length>5&&(0,t.jsx)(eA,{type:"button",onClick:()=>eD("expenses"),children:i("finance.recent.viewAll",{n:nm.length})})]}),0===nm.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:i("finance.dashboard.noRecent")}):(0,t.jsx)(K,{"aria-label":i("finance.recent.title"),children:nm.slice(0,6).map(e=>(0,t.jsx)(e5,{exp:e,finData:b,locale:n,t:i,onDelete:nD},e.id))})]}),(0,t.jsxs)(T,{span:5,children:[(0,t.jsx)(F,{children:(0,t.jsx)(D,{children:i("finance.insights.title")})}),0===nl.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("insights")??"—"}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nl.map((e,n)=>(0,t.jsxs)(es,{itype:e.type,children:[(0,t.jsx)(ea,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=b.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=b.familyMembers.indexOf(n);return(0,t.jsxs)(eo,{children:[(0,t.jsx)(c.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,u.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,t.jsxs)(T,{span:12,ref:eE,children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.quickAdd.title")}),(0,t.jsxs)("form",{onSubmit:nF,"aria-label":i("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,t.jsx)(el,{children:[{id:"shared",name:i("finance.member.shared"),role:"shared",color:void 0},...b.familyMembers.map((e,n)=>({...e,color:(0,u.a8)(e,n)}))].map((e,n)=>{let i="shared"===e.id?l.w4.colors.mainTextMuted:(0,u.a8)(b.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?i:void 0};return(0,t.jsxs)(ed,{type:"button",active:eU===e.id,color:i,onClick:()=>eG(e.id),children:[(0,t.jsx)(c.eu,{member:r,size:18}),e.name]},e.id)})}),(0,t.jsxs)(ec,{children:[(0,t.jsx)(ep,{type:"text",placeholder:i("finance.quickAdd.placeholder"),value:e_,onChange:e=>{eq(e.target.value),eZ("")},"aria-label":i("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,t.jsx)(em,{value:eH||nk,onChange:e=>eZ(e.target.value),"aria-label":i("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!e_.trim(),children:i("finance.quickAdd.add")})]}),(0,t.jsxs)(ex,{visible:eN,"aria-live":"polite","aria-atomic":!0,children:["✓ ",i("finance.quickAdd.added")]}),(0,t.jsx)(eh,{children:i("finance.quickAdd.hint")})]})]})]}),"expenses"===et&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eB,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(c.YZ,{children:i("finance.tx.title")}),(0,t.jsx)(eF,{value:ez,onChange:e=>eS(e.target.value),"aria-label":i("finance.insights.month"),children:nd.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),0===nm.length&&0===np.length?(0,t.jsx)(T,{children:(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.tx.empty")})}):(0,t.jsx)(T,{span:12,children:(0,t.jsx)(K,{"aria-label":i("finance.tx.title"),children:[...nm.map(e=>({...e,_kind:"expense"})),...np.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,t.jsx)(e5,{exp:e,finData:b,locale:n,t:i,onDelete:nD},e.id):(0,t.jsxs)(Q,{children:[(0,t.jsx)(V,{color:g,children:"\uD83D\uDCB0"}),(0,t.jsxs)(X,{children:[(0,t.jsx)(J,{children:e.source}),(0,t.jsxs)(ee,{children:[e2(e.date,n)," \xb7 ",i("finance.dashboard.income")]})]}),(0,t.jsxs)(en,{children:[(0,t.jsxs)(ei,{style:{color:g},children:["+€",e0(e.amount)]}),(0,t.jsx)(er,{className:"delete-btn",type:"button",onClick:()=>nz(e.id),"aria-label":`${i("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===et&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eB,{style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(c.YZ,{children:i("finance.insights.title")}),(0,t.jsx)(eF,{value:ez,onChange:e=>eS(e.target.value),"aria-label":i("finance.insights.month"),children:nd.map(e=>(0,t.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),(0,t.jsxs)(T,{span:12,style:{marginBottom:l.w4.spacing.md},children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.byCategory")}),(0,t.jsx)(e7,{expenses:nm,total:no.totalExpenses,locale:n})]}),(0,t.jsxs)(T,{span:12,children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.monthlyTrend")}),(0,t.jsx)(e9,{data:b,months:nd.slice(0,6),locale:n,t:i})]}),(0,t.jsxs)(T,{span:12,children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.sm},children:i("finance.insights.title")}),0===nl.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:i("finance.insights.noData")}):(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nl.map((e,n)=>(0,t.jsxs)(es,{itype:e.type,children:[(0,t.jsx)(ea,{itype:e.type}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:i(e.messageKey,e.params)}),e.memberId&&(()=>{let n=b.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let i=b.familyMembers.indexOf(n);return(0,t.jsxs)(eo,{children:[(0,t.jsx)(c.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,u.a8)(n,i)},size:14}),(0,t.jsx)("span",{children:n.name})]})})()]})]},n))})]})]}),"settings"===et&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(T,{span:12,children:[(0,t.jsx)(c.YZ,{style:{marginBottom:l.w4.spacing.md},children:i("finance.settings.title")}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(eM,{children:[(0,t.jsx)(ek,{htmlFor:"weekly-budget",children:i("finance.settings.weeklyBudget")}),(0,t.jsx)(eT,{id:"weekly-budget",type:"number",min:"1",placeholder:String(b.budget.weeklyBudget),value:eJ,onChange:e=>ne(e.target.value)})]}),(0,t.jsxs)(eM,{children:[(0,t.jsx)(ek,{htmlFor:"monthly-budget",children:i("finance.settings.monthlyBudget")}),(0,t.jsx)(eT,{id:"monthly-budget",type:"number",min:"1",placeholder:String(b.budget.monthlyBudget),value:nn,onChange:e=>ni(e.target.value)})]}),(0,t.jsx)(c.$n,{variant:"primary",onClick:nS,style:{height:44},children:nt?i("finance.settings.saved"):i("finance.settings.save")})]})]})})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,t.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),eQ&&(0,t.jsx)(e6,{finData:b,activeMemberId:eI,locale:n,t:i,onClose:()=>eV(!1),onSubmit:eX})]})}function e6({finData:e,activeMemberId:n,locale:i,t:s,onClose:a,onSubmit:o}){let[p,m]=(0,r.useState)(""),[h,g]=(0,r.useState)(""),[f,b]=(0,r.useState)("other"),[y,w]=(0,r.useState)(e1()),[j,$]=(0,r.useState)("single"),[v,M]=(0,r.useState)(n),[k,T]=(0,r.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id));(0,r.useEffect)(()=>{h.trim()&&b((0,d.guessCategory)(h,e.categoryHints))},[h,e.categoryHints]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a]);let F=parseFloat(p.replace(",","."))||0,D=k.length,z="split"===j&&D>0?F/D:F,S=F>0&&!!y&&("single"===j||"split"===j&&D>0),I=[{id:"shared",name:s("finance.member.shared"),color:l.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,u.a8)(e,n),role:e.role}))];return(0,t.jsx)(e_,{onClick:a,role:"dialog","aria-modal":"true","aria-label":s("finance.quickAdd.newExpense"),children:(0,t.jsxs)(eq,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(eH,{children:[(0,t.jsxs)(c.YZ,{children:["◉ ",s("finance.quickAdd.newExpense")]}),(0,t.jsx)(eZ,{type:"button",onClick:a,"aria-label":"Close",children:"\xd7"})]}),(0,t.jsxs)("form",{onSubmit:n=>{let i;if(n.preventDefault(),!S)return;let t=h.trim(),r=Date.now(),s={...e.categoryHints};if(t&&t.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(s[e]=f)}),"single"===j)i=[{id:(0,x.z)(),amount:F,date:y,categoryId:f,description:t||f,type:"daily",childId:"shared"===v?void 0:v,createdAt:r}];else{let e=Math.round(F/D*100)/100,n=Math.round((F-e*D)*100)/100;i=k.map((i,s)=>({id:(0,x.z)(),amount:0===s?e+n:e,date:y,categoryId:f,description:t?`${t} (1/${D})`:f,type:"daily",childId:i,createdAt:r+s}))}o(i,s,t)},style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eM,{children:[(0,t.jsx)(ek,{htmlFor:"exp-amount",children:"pt"===i?"Valor (€)":"Amount (€)"}),(0,t.jsx)(eV,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:p,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,t.jsxs)(eM,{children:[(0,t.jsx)(ek,{htmlFor:"exp-date",children:"pt"===i?"Data":"Date"}),(0,t.jsx)(eV,{id:"exp-date",type:"date",value:y,onChange:e=>w(e.target.value)})]})]}),(0,t.jsxs)(eM,{children:[(0,t.jsx)(ek,{htmlFor:"exp-desc",children:"pt"===i?"Descri\xe7\xe3o":"Description"}),(0,t.jsx)(eV,{id:"exp-desc",type:"text",placeholder:"pt"===i?"ex. Continente, farm\xe1cia…":"e.g. Continente, pharmacy…",value:h,onChange:e=>g(e.target.value)})]}),(0,t.jsxs)(eM,{children:[(0,t.jsx)(ek,{htmlFor:"exp-cat",children:s("finance.quickAdd.category")}),(0,t.jsx)(eX,{id:"exp-cat",value:f,onChange:e=>b(e.target.value),children:d.DEFAULT_CATEGORIES.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===i?e.labelPt:e.labelEn]},e.id))})]}),(0,t.jsxs)(eM,{children:[(0,t.jsx)(ek,{children:"pt"===i?"Atribuir a":"Assign to"}),(0,t.jsxs)(eG,{role:"tablist",children:[(0,t.jsx)(eN,{type:"button",active:"single"===j,onClick:()=>$("single"),children:"pt"===i?"Membro":"Member"}),(0,t.jsx)(eN,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:"pt"===i?"Dividir":"Split"})]}),"single"===j?(0,t.jsx)(eW,{style:{marginTop:l.w4.spacing.sm},children:I.map(e=>(0,t.jsxs)(eK,{type:"button",active:v===e.id,color:e.color,onClick:()=>M(e.id),children:[(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eW,{style:{marginTop:l.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let i=(0,u.a8)(e,n),r=k.includes(e.id);return(0,t.jsxs)(eK,{type:"button",active:r,color:i,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)(c.eu,{member:{id:e.id,name:e.name,role:e.role,color:i},size:16}),e.name]},e.id)})}),D>0&&F>0&&(0,t.jsx)(eQ,{style:{marginTop:l.w4.spacing.xs},children:"pt"===i?`${D}\xd7 €${e0(z)} cada`:`${D}\xd7 €${e0(z)} each`})]})]}),(0,t.jsxs)(eJ,{children:[(0,t.jsx)(c.$n,{type:"button",variant:"ghost",onClick:a,children:s("finance.member.cancel")}),(0,t.jsx)(c.$n,{type:"submit",variant:"primary",disabled:!S,children:s("finance.quickAdd.add")})]})]})]})})}function e5({exp:e,finData:n,locale:i,t:r,onDelete:s}){let a=e8(e.categoryId),o=n.familyMembers.findIndex(n=>n.id===e.childId),d=o>=0?n.familyMembers[o]:null,p=d?(0,u.a8)(d,o):l.w4.colors.mainTextMuted;return(0,t.jsxs)(Q,{children:[(0,t.jsx)(V,{color:a.color,children:(0,t.jsx)("span",{"aria-hidden":!0,children:a.icon})}),(0,t.jsxs)(X,{children:[(0,t.jsx)(J,{children:e.description||("pt"===i?a.labelPt:a.labelEn)}),(0,t.jsxs)(ee,{children:[d?(0,t.jsx)(c.eu,{member:{id:d.id,name:d.name,role:d.role,color:p},size:14}):null,(0,t.jsx)("span",{children:"pt"===i?a.labelPt:a.labelEn}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:e2(e.date,i)}),"monthly"===e.type&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)("span",{children:"mensal"})]})]})]}),(0,t.jsxs)(en,{children:[e.isReimbursable&&(0,t.jsx)(et,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}),"recurring"===e.type&&(0,t.jsx)(et,{children:r("finance.tx.recurring")}),(0,t.jsxs)(ei,{children:["−€",e0(e.amount)]}),(0,t.jsx)(er,{className:"delete-btn",type:"button",onClick:()=>s(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"})]})]})}function e7({expenses:e,total:n,locale:i}){let s=Object.entries((0,r.useMemo)(()=>{let n={};for(let i of e)n[i.categoryId]=(n[i.categoryId]??0)+i.amount;return n},[e])).map(([e,n])=>({cat:e8(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===s.length?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:"—"}):(0,t.jsx)(eD,{children:s.map(({cat:e,amt:r})=>{let s=n>0?r/n*100:0;return(0,t.jsxs)(ez,{children:[(0,t.jsxs)(eS,{children:[(0,t.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===i?e.labelPt:e.labelEn]}),(0,t.jsx)(eI,{children:(0,t.jsx)(eC,{pct:s,color:e.color})}),(0,t.jsxs)(eE,{children:["€",r.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function e9({data:e,months:n,locale:i,t:r}){let s=n.map(n=>(0,d.computeMonthlySummary)(e,n)),a=Math.max(...s.map(e=>e.totalExpenses),1);return s.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,t.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,t.jsx)(eD,{children:s.map(e=>{let n=e.totalExpenses/a*100,[,r]=e.month.split("-"),s=new Date(parseInt(e.month.slice(0,4)),parseInt(r)-1,1).toLocaleDateString("pt"===i?"pt-PT":"en-GB",{month:"short"});return(0,t.jsxs)(ez,{children:[(0,t.jsx)(eS,{style:{width:80},children:s}),(0,t.jsx)(eI,{children:(0,t.jsx)(eC,{pct:n,color:l.w4.colors.accent})}),(0,t.jsxs)(eE,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}}}]);