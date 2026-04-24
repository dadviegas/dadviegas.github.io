"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["5512"],{8997(e,n,t){var i=t(2727);n.createRoot=i.createRoot,i.hydrateRoot},3611(e,n,t){var i=t(5723),r=t(8997),s=t(7991),o=t(6859),a=t.n(o),l=t(2799),d=t(3930),c=t(9009),p=t(8395),m=t(1496),x=t(8170),h=t(4041),u=t(948),g=t(719);let f="#7fb77e",y="#f85149",b=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=a().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${b} 0.25s ease both;
  overflow: hidden;
`,j=a().div`
  display: block;
  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,$=a().div`
  padding: 0 ${d.w4.spacing.md};
  border-bottom: 1px solid ${d.w4.colors.border};
  background: ${d.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
`,v=a().div`
  flex: 1;
  min-width: 0;
`,M=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  flex-shrink: 0;
`,k=a().div`
  flex: 1;
  overflow-y: auto;
  padding: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.lg};
  }
`,T=a().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,F=a().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  border-left: 2px solid ${f};
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${d.w4.colors.mainTextMuted};
    border-left-color: ${f};
  }

  @media (min-width: ${d.w4.breakpoints.md}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,D=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${d.w4.spacing.sm};
  gap: ${d.w4.spacing.sm};
`,z=a().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
`,S=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,I=a().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  border-left: 2px solid ${f};
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};

  @media (min-width: ${d.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,C=a().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,E=a().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
`,A=a().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,B=a().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,R=a().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,L=a().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${d.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,P=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,Y=a().div`
  flex-shrink: 0;
  width: 100%;

  @media (min-width: ${d.w4.breakpoints.md}) {
    width: 260px;
  }
`,O=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,_=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,q=a().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.mainTextMuted};
`,H=a().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
`,Z=a().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,U=a().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,G=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding: 4px 0;
`,N=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,W=a().span`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,K=a().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,Q=a().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,V=a().li`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding: 10px ${d.w4.spacing.sm};
  border-radius: ${d.w4.borderRadius.md};
  transition: background 120ms ease;
  cursor: default;
  min-height: 44px;

  &:hover { background: ${d.w4.colors.sidebarHover}; }
  &:hover .delete-btn { opacity: 1; }
`,X=a().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${d.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,J=a().div`
  flex: 1;
  min-width: 0;
`,ee=a().div`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,en=a().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,et=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  flex-shrink: 0;
`,ei=a().span`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,er=a().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${f}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?f:"#facc15"};
  white-space: nowrap;
`,es=a().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainTextMuted};
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
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,eo=a().div`
  display: flex;
  align-items: flex-start;
  gap: ${d.w4.spacing.sm};
  padding: 10px ${d.w4.spacing.sm};
  border-radius: ${d.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${f}14`:d.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${f}44`:d.w4.colors.border};
  font-size: 13px;
  color: ${d.w4.colors.mainText};
`,ea=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?y:"warning"===e?"#facc15":"success"===e?f:d.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,el=a().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;a()(F)`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`;let ed=a().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  flex-wrap: wrap;
`,ec=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:n})=>e?n:d.w4.colors.border};
  background: ${({active:e,color:n})=>e?`${n}22`:d.w4.colors.mainBg};
  color: ${d.w4.colors.mainText};
  font-size: 12px;
  cursor: pointer;
  transition: all 120ms ease;
  white-space: nowrap;
  min-height: 44px;

  &:focus-visible { outline: 2px solid ${d.w4.colors.accent}; outline-offset: 2px; }
`,ep=a().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${d.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,em=a().input`
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
`,ex=a().select`
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
`,eh=a().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${f};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,eu=a().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,eg=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.md};
  margin-top: ${d.w4.spacing.sm};
  padding-top: ${d.w4.spacing.sm};
  border-top: 1px solid ${d.w4.colors.border};
`,ef=a().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ey=a().div`
  font-size: 18px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,eb=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,ew=a().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,ej=a().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,e$=a().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,ev=a().span`
  font-size: 22px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,eM=a().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};

  span.fin { color: ${f}; }
`,ek=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eT=a().label`
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
`,eF=a().input`
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
`,eD=a().select`
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
`,ez=a().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eS=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,eI=a().div`
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,eC=a().div`
  flex: 1;
  height: 8px;
  background: ${d.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eE=a().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eA=a().div`
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  width: 72px;
  text-align: right;
  flex-shrink: 0;
`,eB=a().button`
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
`,eR=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.sm};
`,eL=a().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${d.w4.colors.accent};
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
`,eP=a().footer`
  flex-shrink: 0;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  border-top: 1px solid ${d.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,eY=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,eO=a().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,e_=a().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,eq=a().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${d.w4.spacing.md};
  z-index: 1000;
  animation: ${b} 0.15s ease;
`,eH=a().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  border-left: 2px solid ${f};
  width: 100%;
  max-width: 560px;
  max-height: calc(100dvh - ${d.w4.spacing.xl});
  overflow-y: auto;
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};
`,eZ=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eU=a().button`
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
`,eG=a().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eN=a().div`
  display: inline-flex;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
`,eW=a().button`
  background: ${({active:e})=>e?d.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
`,eK=a().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.xs};
`,eQ=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({active:e,color:n})=>e?`${n}22`:d.w4.colors.mainBg};
  border: 1px solid ${({active:e,color:n})=>e?n:d.w4.colors.border};
  color: ${({active:e})=>e?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
  border-radius: 999px;
  padding: 4px 10px 4px 6px;
  font-size: 12px;
  cursor: pointer;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease;
`,eV=a().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,eX=a().input`
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
`,eJ=a().select`
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
`,e0=a().div`
  display: flex;
  justify-content: flex-end;
  gap: ${d.w4.spacing.sm};
  margin-top: ${d.w4.spacing.sm};
`;function e4(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function e1(e){return Math.round(e).toLocaleString("pt-PT")}function e2(){return new Date().toISOString().slice(0,10)}function e8(e,n){let[t,i,r]=e.split("-").map(Number);return new Date(t,i-1,r).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function e3(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function e5({finData:e,activeMemberId:n,locale:t,t:r,onClose:o,onSubmit:a}){let[l,m]=(0,s.useState)(""),[x,u]=(0,s.useState)(""),[f,y]=(0,s.useState)("other"),[b,w]=(0,s.useState)(e2()),[j,$]=(0,s.useState)("single"),[v,M]=(0,s.useState)(n),[k,T]=(0,s.useState)("shared"!==n?[n]:e.familyMembers.map(e=>e.id));(0,s.useEffect)(()=>{x.trim()&&y((0,c.guessCategory)(x,e.categoryHints))},[x,e.categoryHints]),(0,s.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);let F=parseFloat(l.replace(",","."))||0,D=k.length,z="split"===j&&D>0?F/D:F,S=F>0&&!!b&&("single"===j||"split"===j&&D>0),I=[{id:"shared",name:r("finance.member.shared"),color:d.w4.colors.mainTextMuted,role:"adult"},...e.familyMembers.map((e,n)=>({id:e.id,name:e.name,color:(0,g.a8)(e,n),role:e.role}))];return(0,i.jsx)(eq,{onClick:o,role:"dialog","aria-modal":"true","aria-label":r("finance.quickAdd.newExpense"),children:(0,i.jsxs)(eH,{onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)(eZ,{children:[(0,i.jsxs)(p.YZ,{children:["◉ ",r("finance.quickAdd.newExpense")]}),(0,i.jsx)(eU,{type:"button",onClick:o,"aria-label":"Close",children:"\xd7"})]}),(0,i.jsxs)("form",{onSubmit:n=>{let t;if(n.preventDefault(),!S)return;let i=x.trim(),r=Date.now(),s={...e.categoryHints};if(i&&i.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(s[e]=f)}),"single"===j)t=[{id:(0,h.z)(),amount:F,date:b,categoryId:f,description:i||f,type:"daily",childId:"shared"===v?void 0:v,createdAt:r}];else{let e=Math.round(F/D*100)/100,n=Math.round((F-e*D)*100)/100;t=k.map((t,s)=>({id:(0,h.z)(),amount:0===s?e+n:e,date:b,categoryId:f,description:i?`${i} (1/${D})`:f,type:"daily",childId:t,createdAt:r+s}))}a(t,s,i)},style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.md},children:[(0,i.jsxs)(eG,{children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{htmlFor:"exp-amount",children:"pt"===t?"Valor (€)":"Amount (€)"}),(0,i.jsx)(eX,{id:"exp-amount",type:"text",inputMode:"decimal",placeholder:"12.50",value:l,onChange:e=>m(e.target.value),autoFocus:!0})]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{htmlFor:"exp-date",children:"pt"===t?"Data":"Date"}),(0,i.jsx)(eX,{id:"exp-date",type:"date",value:b,onChange:e=>w(e.target.value)})]})]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{htmlFor:"exp-desc",children:"pt"===t?"Descri\xe7\xe3o":"Description"}),(0,i.jsx)(eX,{id:"exp-desc",type:"text",placeholder:"pt"===t?"ex. Continente, farm\xe1cia…":"e.g. Continente, pharmacy…",value:x,onChange:e=>u(e.target.value)})]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{htmlFor:"exp-cat",children:r("finance.quickAdd.category")}),(0,i.jsx)(eJ,{id:"exp-cat",value:f,onChange:e=>y(e.target.value),children:c.DEFAULT_CATEGORIES.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===t?e.labelPt:e.labelEn]},e.id))})]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{children:"pt"===t?"Atribuir a":"Assign to"}),(0,i.jsxs)(eN,{role:"tablist",children:[(0,i.jsx)(eW,{type:"button",active:"single"===j,onClick:()=>$("single"),children:"pt"===t?"Membro":"Member"}),(0,i.jsx)(eW,{type:"button",active:"split"===j,onClick:()=>$("split"),disabled:e.familyMembers.length<2,children:"pt"===t?"Dividir":"Split"})]}),"single"===j?(0,i.jsx)(eK,{style:{marginTop:d.w4.spacing.sm},children:I.map(e=>(0,i.jsxs)(eQ,{type:"button",active:v===e.id,color:e.color,onClick:()=>M(e.id),children:[(0,i.jsx)(p.eu,{member:{id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?e.color:void 0},size:16}),e.name]},e.id))}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eK,{style:{marginTop:d.w4.spacing.sm},children:e.familyMembers.map((e,n)=>{let t=(0,g.a8)(e,n),r=k.includes(e.id);return(0,i.jsxs)(eQ,{type:"button",active:r,color:t,onClick:()=>{var n;return n=e.id,void T(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,i.jsx)(p.eu,{member:{id:e.id,name:e.name,role:e.role,color:t},size:16}),e.name]},e.id)})}),D>0&&F>0&&(0,i.jsx)(eV,{style:{marginTop:d.w4.spacing.xs},children:"pt"===t?`${D}\xd7 €${e4(z)} cada`:`${D}\xd7 €${e4(z)} each`})]})]}),(0,i.jsxs)(e0,{children:[(0,i.jsx)(p.$n,{type:"button",variant:"ghost",onClick:o,children:r("finance.member.cancel")}),(0,i.jsx)(p.$n,{type:"submit",variant:"primary",disabled:!S,children:r("finance.quickAdd.add")})]})]})]})})}function e6({exp:e,finData:n,locale:t,t:r,onDelete:s}){let o=e3(e.categoryId),a=n.familyMembers.findIndex(n=>n.id===e.childId),l=a>=0?n.familyMembers[a]:null,c=l?(0,g.a8)(l,a):d.w4.colors.mainTextMuted;return(0,i.jsxs)(V,{children:[(0,i.jsx)(X,{color:o.color,children:(0,i.jsx)("span",{"aria-hidden":!0,children:o.icon})}),(0,i.jsxs)(J,{children:[(0,i.jsx)(ee,{children:e.description||("pt"===t?o.labelPt:o.labelEn)}),(0,i.jsxs)(en,{children:[l?(0,i.jsx)(p.eu,{member:{id:l.id,name:l.name,role:l.role,color:c},size:14}):null,(0,i.jsx)("span",{children:"pt"===t?o.labelPt:o.labelEn}),(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:e8(e.date,t)}),"monthly"===e.type&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:"mensal"})]})]})]}),(0,i.jsxs)(et,{children:[e.isReimbursable&&(0,i.jsx)(er,{ok:e.reimbursed,children:r(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}),"recurring"===e.type&&(0,i.jsx)(er,{children:r("finance.tx.recurring")}),(0,i.jsxs)(ei,{children:["−€",e4(e.amount)]}),(0,i.jsx)(es,{className:"delete-btn",type:"button",onClick:()=>s(e.id),"aria-label":`${r("finance.tx.delete")} ${e.description}`,children:"\xd7"})]})]})}function e7({expenses:e,total:n,locale:t}){let r=Object.entries((0,s.useMemo)(()=>{let n={};for(let t of e)n[t.categoryId]=(n[t.categoryId]??0)+t.amount;return n},[e])).map(([e,n])=>({cat:e3(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===r.length?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:"—"}):(0,i.jsx)(ez,{children:r.map(({cat:e,amt:r})=>{let s=n>0?r/n*100:0;return(0,i.jsxs)(eS,{children:[(0,i.jsxs)(eI,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===t?e.labelPt:e.labelEn]}),(0,i.jsx)(eC,{children:(0,i.jsx)(eE,{pct:s,color:e.color})}),(0,i.jsxs)(eA,{children:["€",r.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function e9({data:e,months:n,locale:t,t:r}){let s=n.map(n=>(0,c.computeMonthlySummary)(e,n)),o=Math.max(...s.map(e=>e.totalExpenses),1);return s.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:r("finance.insights.noData")}):(0,i.jsx)(ez,{children:s.map(e=>{let n=e.totalExpenses/o*100,[,r]=e.month.split("-"),s=new Date(parseInt(e.month.slice(0,4)),parseInt(r)-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"});return(0,i.jsxs)(eS,{children:[(0,i.jsx)(eI,{style:{width:80},children:s}),(0,i.jsx)(eC,{children:(0,i.jsx)(eE,{pct:n,color:d.w4.colors.accent})}),(0,i.jsxs)(eA,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}let ne=document.getElementById("root");if(!ne)throw Error("Root element #root not found");(0,r.createRoot)(ne).render((0,i.jsx)(function({topBarRight:e}){let[n]=(0,x.Ym)(),t=(0,s.useMemo)(()=>(0,x.Nx)(n,u.A),[n]),{data:r,loaded:o,save:a}=(0,c.useFinance)(),l=r??{...c.EMPTY_FINANCE_DATA},[b,er]=(0,s.useState)("overview"),[ez,eS]=(0,s.useState)(()=>(0,c.thisMonthKey)()),[eI,eC]=(0,s.useState)("shared"),eE=(0,s.useRef)(null),[eA,eq]=(0,s.useState)(""),[eH,eZ]=(0,s.useState)(""),[eU,eG]=(0,s.useState)("shared"),[eN,eW]=(0,s.useState)(!1),eK=(0,s.useRef)(null),[eQ,eV]=(0,s.useState)(!1),eX=(0,s.useCallback)((e,n,t)=>{let i=t?[t,...l.recentDescriptions].filter(Boolean).slice(0,20):l.recentDescriptions;a({...l,expenses:[...e,...l.expenses],categoryHints:n,recentDescriptions:i}),eV(!1),eK.current&&clearTimeout(eK.current),eW(!0),eK.current=setTimeout(()=>eW(!1),2e3)},[l,a]),[eJ,e0]=(0,s.useState)(""),[ne,nn]=(0,s.useState)(""),[nt,ni]=(0,s.useState)(!1),nr=(0,s.useMemo)(()=>(0,c.thisMonthKey)(),[]),ns=(0,s.useMemo)(()=>(0,c.computeWeeklyStatus)(l),[l]),no=(0,s.useMemo)(()=>(0,c.computeMonthlySummary)(l,ez),[l,ez]),na=(0,s.useMemo)(()=>(0,c.generateInsightsWithMembers)(l),[l]),nl=(0,s.useMemo)(()=>(0,c.availableMonths)(l),[l]),nd=(0,s.useMemo)(()=>(0,c.expensesForMonth)(l.expenses,ez),[l,ez]),nc=(0,s.useMemo)(()=>(0,c.incomeForMonth)(l.income,ez),[l,ez]),np=(0,s.useMemo)(()=>"shared"===eI?nd.filter(e=>!e.childId):nd.filter(e=>e.childId===eI),[nd,eI]),nm=(0,s.useMemo)(()=>(0,c.monthlyTotalByMember)(l,eI,nr),[l,eI,nr]),nx=(0,s.useMemo)(()=>(function(e){let[n,t]=e.split("-").map(Number),i=new Date(n,t-2,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`})(nr),[nr]),nh=(0,s.useMemo)(()=>(0,c.monthlyTotalByMember)(l,eI,nx),[l,eI,nx]),nu=(0,s.useMemo)(()=>0===nh?0:Math.round((nm-nh)/nh*100),[nm,nh]),ng=(0,s.useMemo)(()=>{if("shared"===eI)return t("finance.hero.family");let e=l.familyMembers.find(e=>e.id===eI);return e?.name??t("finance.hero.family")},[eI,l.familyMembers,t]),nf=(0,s.useMemo)(()=>{if("shared"===eI)return d.w4.colors.mainTextMuted;let e=l.familyMembers.findIndex(e=>e.id===eI);return -1===e?f:(0,g.a8)(l.familyMembers[e],e)},[eI,l.familyMembers]),ny=(0,s.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,t)=>{let i=new Date(e);i.setDate(e.getDate()-(5-t)*7-e.getDay()),i.setHours(0,0,0,0);let r=new Date(i);return r.setDate(i.getDate()+7),(0,c.expensesForMember)(l.expenses,eI).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=i&&n<r}).reduce((e,n)=>e+n.amount,0)})},[l.expenses,eI]),nb=(0,s.useMemo)(()=>(function(e,n){let t=[],i=new Date;for(let e=5;e>=0;e--){let n=new Date(i.getFullYear(),i.getMonth()-e,1);t.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let r=e.budget.monthlyBudget;return t.map(t=>{let i="shared"===n?(0,c.expensesForMonth)(e.expenses,t).filter(e=>!e.childId):(0,c.expensesForMonth)(e.expenses,t).filter(e=>e.childId===n),s={};for(let e of i)s[e.categoryId]=(s[e.categoryId]??0)+e.amount;let o=Object.values(s).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(t.slice(0,4)),parseInt(t.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(s).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:e3(e).color})),over:o>r?o-r:0}})})(l,eI),[l,eI]),nw=(0,s.useMemo)(()=>(function(e,n){let t=new Date,i=[];for(let r=89;r>=0;r--){let s=new Date(t);s.setDate(t.getDate()-r);let o=s.toISOString().slice(0,10),a=o.slice(0,7),l=("shared"===n?e.expenses.filter(e=>e.date===o&&!e.childId):e.expenses.filter(e=>e.date===o&&e.childId===n)).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,a).reduce((e,n)=>e+n.amount,0)/30;i.push({inc:d,exp:l})}return i})(l,eI),[l,eI]),nj=(0,s.useMemo)(()=>{let e,n;return e=new Date,n=l.expenses.length>0?l.expenses.reduce((e,n)=>e+n.amount,0)/l.expenses.length:20,Array.from({length:91},(t,i)=>{let r=new Date(e);r.setDate(e.getDate()-90+i);let s=r.toISOString().slice(0,10),o=("shared"===eI?l.expenses.filter(e=>e.date===s&&!e.childId):l.expenses.filter(e=>e.date===s&&e.childId===eI)).reduce((e,n)=>e+n.amount,0);if(0===o)return 0;let a=o/n;return a<.5?1:a<1?2:a<2?3:4})},[l,eI]),n$=ns.budget>0?ns.spent/ns.budget*100:0,nv=l.budget.monthlyBudget>0?nm/l.budget.monthlyBudget*100:0,nM=(0,s.useMemo)(()=>{let e=(0,c.parseQuickInput)(eA,l.familyMembers);return e?.description?(0,c.guessCategory)(e.description,l.categoryHints):"other"},[eA,l.categoryHints,l.familyMembers]),nk=eH||nM;(0,s.useEffect)(()=>{let e=(0,c.parseQuickInput)(eA,l.familyMembers);e?.memberId&&eG(e.memberId)},[eA,l.familyMembers]);let nT=(0,s.useCallback)(e=>{e.preventDefault();let n=(0,c.parseQuickInput)(eA,l.familyMembers);if(!n)return;let t=nk||"other",i=n.memberId??("shared"!==eU?eU:void 0),r={id:(0,h.z)(),amount:n.amount,date:e2(),categoryId:t,description:n.description||t,type:"daily",childId:i,createdAt:Date.now()},s={...l.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(s[e]=t)});let o=[n.description||"",...l.recentDescriptions].filter(Boolean).slice(0,20);a({...l,expenses:[r,...l.expenses],categoryHints:s,recentDescriptions:o}),eq(""),eZ(""),eK.current&&clearTimeout(eK.current),eW(!0),eK.current=setTimeout(()=>eW(!1),2e3)},[eA,nk,eU,l,a]),nF=(0,s.useCallback)(e=>{a({...l,expenses:l.expenses.filter(n=>n.id!==e)})},[l,a]),nD=(0,s.useCallback)(e=>{a({...l,income:l.income.filter(n=>n.id!==e)})},[l,a]),nz=(0,s.useCallback)(()=>{let e=parseFloat(eJ)||l.budget.weeklyBudget,n=parseFloat(ne)||l.budget.monthlyBudget;a({...l,budget:{...l.budget,weeklyBudget:e,monthlyBudget:n}}),ni(!0),setTimeout(()=>ni(!1),2e3)},[eJ,ne,l,a]),nS=[{value:"overview",label:t("finance.tab.overview")},{value:"expenses",label:`${t("finance.tab.expenses")} ${np.length>0?`(${np.length})`:""}`},{value:"insights",label:`${t("finance.tab.insights")} ${na.length>0?`(${na.length})`:""}`},{value:"settings",label:t("finance.tab.settings")}],nI=Math.floor(nm).toLocaleString("pt-PT"),nC=(nm%1).toFixed(2).slice(1),nE=(()=>{let[e,t]=nr.split("-");return new Date(parseInt(e),parseInt(t)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),nA=(0,i.jsx)(g.TA,{data:l,activeMemberId:eI,onSelectMember:eC,onSaveData:a,t:t,locale:n}),nB=(0,s.useMemo)(()=>{let e={};for(let n of np)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:e3(e).color}))},[np]),nR=nB.reduce((e,n)=>e+n.value,0),nL=(0,s.useMemo)(()=>nb.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[nb]),nP=nb.length>0?nL/nb.length:0,nY=nb.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>l.budget.monthlyBudget).length;return(0,i.jsxs)(d.PE,{title:t("finance.appTitle"),sidebar:nA,topBarRight:e,activeId:eI,children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(j,{children:(0,i.jsx)(g.jb,{data:l,activeMemberId:eI,onSelectMember:eC,t:t,locale:n})}),(0,i.jsxs)($,{children:[(0,i.jsx)(v,{children:(0,i.jsx)(p.tU,{tabs:nS,value:b,onChange:er,"aria-label":t("finance.nav.ariaLabel")})}),(0,i.jsxs)(M,{children:[0===l.familyMembers.length&&(0,i.jsx)(eL,{children:t("finance.member.empty")}),(0,i.jsxs)(p.$n,{variant:"ghost",style:{height:30},onClick:()=>eV(!0),children:[(0,i.jsx)(p.In,{name:"plus",size:13,"aria-hidden":!0}),t("finance.quickAdd.newExpense")]})]})]}),(0,i.jsxs)(k,{children:["overview"===b&&(0,i.jsxs)(T,{children:[(0,i.jsx)(F,{span:12,style:{borderLeft:`2px solid ${f}`},children:(0,i.jsxs)(I,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,i.jsxs)(C,{children:[(0,i.jsxs)(E,{children:[t("finance.hero.spentIn")," ",nE," \xb7 ",ng]}),(0,i.jsxs)(A,{children:[(0,i.jsx)(B,{children:"€"}),(0,i.jsx)(R,{children:nI}),(0,i.jsx)(L,{children:nC})]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(m.Ru,{value:nu,format:"pct",decimals:0}),(0,i.jsxs)("span",{children:[t("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(nx,n)," \xb7 €",e1(nh)]})]}),ny.some(e=>e>0)&&(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsx)(m.OW,{points:ny,accent:nf,width:320,height:34})})]}),(0,i.jsx)(Y,{children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(q,{children:t("finance.budget.weekly")}),(0,i.jsxs)(H,{children:["€",e1(ns.spent)," ",(0,i.jsxs)(Z,{children:["/ €",ns.budget]})]})]}),(0,i.jsx)(m.Xj,{pct:n$,over:n$>100?n$-100:0}),(0,i.jsxs)(U,{children:[(0,i.jsxs)("span",{children:[Math.round(n$),"% ",t("finance.budget.used")]}),(0,i.jsx)("span",{style:{color:ns.remaining<0?y:f},children:ns.remaining>0?`€${e1(ns.remaining)} ${t("finance.budget.remaining")}`:`€${e1(Math.abs(ns.remaining))} ${t("finance.budget.over")}`})]}),(0,i.jsxs)(_,{style:{marginTop:14},children:[(0,i.jsx)(q,{children:t("finance.budget.monthly")}),(0,i.jsxs)(H,{children:["€",e1(nm)," ",(0,i.jsxs)(Z,{children:["/ €",l.budget.monthlyBudget]})]})]}),(0,i.jsx)(m.Xj,{pct:nv,over:nv>100?nv-100:0}),(0,i.jsxs)(U,{children:[(0,i.jsxs)("span",{children:[Math.round(nv),"% ",t("finance.budget.used")]}),(0,i.jsxs)("span",{style:{color:d.w4.colors.mainTextMuted},children:[t("finance.budget.projected")," €",e1(nm+(ns.projectedTotal-ns.spent))]})]})]})})]})}),(0,i.jsxs)(F,{span:8,children:[(0,i.jsxs)(D,{children:[(0,i.jsx)(z,{children:t("finance.charts.sixMonths")}),(0,i.jsx)(S,{children:(0,i.jsx)(eY,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,i.jsxs)(eO,{children:[(0,i.jsx)(e_,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,i.jsx)(m.ik,{data:nb,budget:l.budget.monthlyBudget,height:200}),(0,i.jsxs)(eg,{children:[(0,i.jsxs)(ef,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.total6m")}),(0,i.jsxs)(ey,{children:["€",e1(nL)]})]}),(0,i.jsxs)(ef,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.monthlyAvg")}),(0,i.jsxs)(ey,{children:["€",e1(nP)]})]}),(0,i.jsxs)(ef,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.monthsOverBudget")}),(0,i.jsxs)(ey,{children:[nY," / ",nb.length]})]}),(0,i.jsxs)(ef,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.trend")}),(0,i.jsxs)(ey,{style:{color:nu>0?y:f},children:[nu>0?"+":"",nu,"%"]})]})]})]}),(0,i.jsxs)(F,{span:4,children:[(0,i.jsxs)(D,{children:[(0,i.jsx)(z,{children:t("finance.charts.byCategory")}),(0,i.jsx)(eB,{type:"button",onClick:()=>er("insights"),children:t("finance.charts.viewAll")})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:d.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,i.jsx)(m.RJ,{data:nB,total:nR,size:110,centerLabel:nE.slice(0,3),centerValue:`€${e1(nR)}`}),(0,i.jsx)("div",{style:{flex:1,minWidth:120},children:nB.map(e=>{let t=e3(e.id),r=(0,c.expensesForMonth)(l.expenses,nx).filter(n=>"shared"===eI?!n.childId&&n.categoryId===e.id:n.childId===eI&&n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),s=r>0?(e.value-r)/r*100:0;return(0,i.jsxs)(G,{children:[(0,i.jsx)(N,{color:e.color}),(0,i.jsx)(W,{children:"pt"===n?t.labelPt:t.labelEn}),(0,i.jsxs)(K,{children:["€",e1(e.value)]}),Math.abs(s)>1&&(0,i.jsx)(m.Ru,{value:s,format:"pct",decimals:0})]},e.id)})})]})]}),(0,i.jsxs)(F,{span:5,children:[(0,i.jsxs)(D,{children:[(0,i.jsx)(z,{children:t("finance.charts.cashflow")}),(0,i.jsx)("span",{style:{fontSize:11,fontFamily:d.w4.typography.fontFamilyMono,color:d.w4.colors.mainTextMuted},children:t("finance.charts.cashflowSub")})]}),(0,i.jsx)(m.uj,{data:nw,height:170,legendIn:t("finance.charts.in"),legendOut:t("finance.charts.out")})]}),(0,i.jsxs)(F,{span:4,children:[(0,i.jsx)(D,{children:(0,i.jsx)(z,{children:t("finance.charts.heatmap")})}),(0,i.jsx)(m.RT,{data:nj,locale:n}),(0,i.jsxs)(eb,{children:[(0,i.jsx)("span",{children:t("finance.charts.less")}),(0,i.jsx)(ew,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,i.jsx)("span",{style:{background:e}},n))}),(0,i.jsx)("span",{children:t("finance.charts.more")})]})]}),(0,i.jsxs)(F,{span:3,children:[(0,i.jsx)(D,{children:(0,i.jsx)(z,{children:t("finance.charts.thisWeek")})}),(0,i.jsxs)(ej,{children:[(0,i.jsxs)(e$,{children:[(0,i.jsxs)(ev,{children:["€",e1(ns.spent)]}),(0,i.jsxs)(Z,{children:["/ €",ns.budget]})]}),(0,i.jsx)(m.kl,{spent:ns.spent,budget:ns.budget}),(0,i.jsxs)(eM,{children:[(0,i.jsx)("span",{children:t("finance.charts.ideal")}),(0,i.jsx)("span",{className:"fin",children:t("finance.charts.actual")})]})]})]}),(0,i.jsxs)(F,{span:7,children:[(0,i.jsxs)(D,{children:[(0,i.jsx)(z,{children:t("finance.recent.title")}),l.expenses.length>5&&(0,i.jsx)(eB,{type:"button",onClick:()=>er("expenses"),children:t("finance.recent.viewAll",{n:np.length})})]}),0===np.length?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted,padding:`${d.w4.spacing.sm} 0`},children:t("finance.dashboard.noRecent")}):(0,i.jsx)(Q,{"aria-label":t("finance.recent.title"),children:np.slice(0,6).map(e=>(0,i.jsx)(e6,{exp:e,finData:l,locale:n,t:t,onDelete:nF},e.id))})]}),(0,i.jsxs)(F,{span:5,children:[(0,i.jsx)(D,{children:(0,i.jsx)(z,{children:t("finance.insights.title")})}),0===na.length?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:t("insights")??"—"}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:na.map((e,n)=>(0,i.jsxs)(eo,{itype:e.type,children:[(0,i.jsx)(ea,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=l.familyMembers.indexOf(n);return(0,i.jsxs)(el,{children:[(0,i.jsx)(p.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,g.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,i.jsxs)(F,{span:12,ref:eE,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:d.w4.spacing.sm},children:t("finance.quickAdd.title")}),(0,i.jsxs)("form",{onSubmit:nT,"aria-label":t("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.sm},children:[(0,i.jsx)(ed,{children:[{id:"shared",name:t("finance.member.shared"),role:"shared",color:void 0},...l.familyMembers.map((e,n)=>({...e,color:(0,g.a8)(e,n)}))].map((e,n)=>{let t="shared"===e.id?d.w4.colors.mainTextMuted:(0,g.a8)(l.familyMembers[n-1]??e,n-1),r={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?t:void 0};return(0,i.jsxs)(ec,{type:"button",active:eU===e.id,color:t,onClick:()=>eG(e.id),children:[(0,i.jsx)(p.eu,{member:r,size:18}),e.name]},e.id)})}),(0,i.jsxs)(ep,{children:[(0,i.jsx)(em,{type:"text",placeholder:t("finance.quickAdd.placeholder"),value:eA,onChange:e=>{eq(e.target.value),eZ("")},"aria-label":t("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,i.jsx)(ex,{value:eH||nM,onChange:e=>eZ(e.target.value),"aria-label":t("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,i.jsx)(p.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!eA.trim(),children:t("finance.quickAdd.add")})]}),(0,i.jsxs)(eh,{visible:eN,"aria-live":"polite","aria-atomic":!0,children:["✓ ",t("finance.quickAdd.added")]}),(0,i.jsx)(eu,{children:t("finance.quickAdd.hint")})]})]})]}),"expenses"===b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eR,{style:{marginBottom:d.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{children:t("finance.tx.title")}),(0,i.jsx)(eD,{value:ez,onChange:e=>eS(e.target.value),"aria-label":t("finance.insights.month"),children:nl.map(e=>(0,i.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),0===np.length&&0===nc.length?(0,i.jsx)(F,{children:(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:t("finance.tx.empty")})}):(0,i.jsx)(F,{span:12,children:(0,i.jsx)(Q,{"aria-label":t("finance.tx.title"),children:[...np.map(e=>({...e,_kind:"expense"})),...nc.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,i.jsx)(e6,{exp:e,finData:l,locale:n,t:t,onDelete:nF},e.id):(0,i.jsxs)(V,{children:[(0,i.jsx)(X,{color:f,children:"\uD83D\uDCB0"}),(0,i.jsxs)(J,{children:[(0,i.jsx)(ee,{children:e.source}),(0,i.jsxs)(en,{children:[e8(e.date,n)," \xb7 ",t("finance.dashboard.income")]})]}),(0,i.jsxs)(et,{children:[(0,i.jsxs)(ei,{style:{color:f},children:["+€",e4(e.amount)]}),(0,i.jsx)(es,{className:"delete-btn",type:"button",onClick:()=>nD(e.id),"aria-label":`${t("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eR,{style:{marginBottom:d.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{children:t("finance.insights.title")}),(0,i.jsx)(eD,{value:ez,onChange:e=>eS(e.target.value),"aria-label":t("finance.insights.month"),children:nl.map(e=>(0,i.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),(0,i.jsxs)(F,{span:12,style:{marginBottom:d.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{style:{marginBottom:d.w4.spacing.sm},children:t("finance.insights.byCategory")}),(0,i.jsx)(e7,{expenses:np,total:no.totalExpenses,locale:n})]}),(0,i.jsxs)(F,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:d.w4.spacing.sm},children:t("finance.insights.monthlyTrend")}),(0,i.jsx)(e9,{data:l,months:nl.slice(0,6),locale:n,t:t})]}),(0,i.jsxs)(F,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:d.w4.spacing.sm},children:t("finance.insights.title")}),0===na.length?(0,i.jsx)("div",{style:{fontSize:13,color:d.w4.colors.mainTextMuted},children:t("finance.insights.noData")}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:na.map((e,n)=>(0,i.jsxs)(eo,{itype:e.type,children:[(0,i.jsx)(ea,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=l.familyMembers.indexOf(n);return(0,i.jsxs)(el,{children:[(0,i.jsx)(p.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,g.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]})]}),"settings"===b&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(F,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:d.w4.spacing.md},children:t("finance.settings.title")}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:d.w4.spacing.md},children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{htmlFor:"weekly-budget",children:t("finance.settings.weeklyBudget")}),(0,i.jsx)(eF,{id:"weekly-budget",type:"number",min:"1",placeholder:String(l.budget.weeklyBudget),value:eJ,onChange:e=>e0(e.target.value)})]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{htmlFor:"monthly-budget",children:t("finance.settings.monthlyBudget")}),(0,i.jsx)(eF,{id:"monthly-budget",type:"number",min:"1",placeholder:String(l.budget.monthlyBudget),value:ne,onChange:e=>nn(e.target.value)})]}),(0,i.jsx)(p.$n,{variant:"primary",onClick:nz,style:{height:44},children:nt?t("finance.settings.saved"):t("finance.settings.save")})]})]})})]}),(0,i.jsxs)(eP,{children:[(0,i.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,i.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]}),eQ&&(0,i.jsx)(e5,{finData:l,activeMemberId:eI,locale:n,t:t,onClose:()=>eV(!1),onSubmit:eX})]})},{}))}}]);