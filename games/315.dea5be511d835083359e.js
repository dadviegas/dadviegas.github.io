"use strict";(self.webpackChunk_atlantis_games=self.webpackChunk_atlantis_games||[]).push([[315],{894(e,a,o){o.d(a,{Ym:()=>c});var t=o(7359),r=o(9178);const n="atlantis:locale",i="shell:locale";function s(e){return"en"===e||"pt"===e}function l(){try{const e=localStorage.getItem(n);if(s(e))return e}catch{}return"en"}function c(){const[e,a]=(0,t.useState)(l),o=(0,t.useCallback)(e=>{a(e),function(e){try{localStorage.setItem(n,e)}catch{}(0,r.Is)(i,e).catch(()=>{})}(e),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,t.useEffect)(()=>{const e=e=>{const o=e.detail;a(o)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,t.useEffect)(()=>{(0,r.PL)(i).then(o=>{if(s(o)&&o!==e){try{localStorage.setItem(n,o)}catch{}a(o)}}).catch(()=>{})},[]),[e,o]}(0,r.PL)(i).then(e=>{if(s(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{});var d=o(3233);o(5723),d.default.div`
  display: flex;
  gap: 4px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 2px;
`,d.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?r.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainText};
  }
`},4914(e,a,o){o.d(a,{FlyoutPanel:()=>x});var t=o(7359),r=o(3233),n=o(7207),i=o(255),s=o(217),l=o(5959),c=o(5185),d=o(5723);const p=n.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=r.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.accentMuted};
  border-radius: ${s.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${s.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${p} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${s.w4.colors.accent};
    opacity: 0.4;
  }
`,m=r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${s.w4.colors.accent};
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  font-family: ${s.w4.typography.fontFamily};
`,f=r.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${s.w4.colors.accentMuted};
    color: ${s.w4.colors.mainText};
  }
`;function g({iconKey:e}){const a=e?c.t[e]??i.A:i.A;return(0,d.jsx)(a,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:a,onSelect:o}){return(0,d.jsx)(d.Fragment,{children:e.map(e=>e.children?(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(h,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,d.jsxs)(f,{active:a===e.id,onClick:()=>o(e),children:[(0,d.jsx)(g,{iconKey:e.icon}),e.name]},e.id))})}function x({activeId:e}){const{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:t}=(0,l.c)();if(!a)return null;const r=a.entry.icon?c.t[a.entry.icon]??i.A:i.A;return(0,d.jsxs)(u,{anchorY:a.anchorY,onMouseEnter:t,onMouseLeave:o,children:[(0,d.jsxs)(m,{children:[(0,d.jsx)(r,{size:13,strokeWidth:2}),a.entry.name]}),(0,d.jsx)(h,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},5959(e,a,o){o.d(a,{I:()=>r,c:()=>n});var t=o(7359);const r=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,t.useContext)(r)},5185(e,a,o){o.d(a,{t:()=>be});var t=o(9510),r=o(9038),n=o(7400),i=o(7561),s=o(8207),l=o(7902),c=o(6896),d=o(3013),p=o(2887),u=o(7901),m=o(9848),f=o(2164),g=o(3045),h=o(3775),x=o(3539),b=o(1783),y=o(9416),w=o(1837),v=o(7167),$=o(4494),j=o(2314),k=o(5751),z=o(255),S=o(9633),C=o(2946),T=o(822),M=o(6720),A=o(8456),R=o(3317),_=o(2709),B=o(9301),I=o(8006),E=o(3517),P=o(7032),D=o(6949),L=o(8218),O=o(6829),F=o(5553),N=o(9591),H=o(9923),G=o(2820),Y=o(4621),q=o(8479),V=o(2534),W=o(6673),J=o(7490),X=o(9033),U=o(5775),K=o(1365),Q=o(2937),Z=o(9821),ee=o(5912),ae=o(158),oe=o(8641),te=o(8607),re=o(3249),ne=o(1821),ie=o(5889),se=o(9655),le=o(7170),ce=o(9161),de=o(1849),pe=o(1604),ue=o(3142),me=o(1187),fe=o(7747),ge=o(2932),he=o(4525),xe=o(7230);const be={activity:c.A,"a-large-small":l.A,apple:d.A,"arrow-right":p.A,"bar-chart-2":t.A,book:m.A,"book-open":u.A,briefcase:g.A,calendar:h.A,clock:b.A,"circle-dot":x.A,cloud:y.A,compass:w.A,cpu:v.A,droplets:$.A,feather:j.A,file:z.A,"file-text":k.A,folder:S.A,"git-branch":C.A,github:T.A,globe:M.A,grid:n.A,hand:A.A,hash:R.A,heart:_.A,key:I.A,hexagon:B.A,home:i.A,landmark:E.A,layers:s.A,"layout-grid":P.A,leaf:D.A,lightbulb:L.A,list:O.A,map:N.A,"map-pin":F.A,"message-circle":H.A,"message-square":G.A,minus:Y.A,monitor:q.A,mountain:V.A,package:W.A,palette:J.A,"pen-tool":X.A,"pie-chart":r.A,plane:U.A,plus:K.A,ruler:Q.A,shirt:Z.A,slash:ee.A,square:ae.A,star:oe.A,sun:te.A,terminal:re.A,thermometer:ne.A,triangle:ie.A,trophy:se.A,truck:le.A,type:ce.A,users:de.A,"volume-2":pe.A,watch:ue.A,waves:me.A,wind:fe.A,wrench:ge.A,x:he.A,zap:xe.A,bot:f.A}},9178(e,a,o){o.d(a,{PE:()=>T,PL:()=>L,Is:()=>D,w4:()=>t.w4});var t=o(217),r=o(7359),n=o(3233),i=o(5723);n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${t.w4.spacing.sm};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,n.default.div`
  position: relative;
`;var s=o(7207),l=o(3661),c=o(5959);const d="260px",p="56px",u=n.default.header`
  display: flex;
  align-items: center;
  height: calc(${"48px"} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,m=n.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,f=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,g=s.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,h=n.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,x=n.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${g} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,b=n.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  padding-left: ${t.w4.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${t.w4.spacing.sm};
    color: ${t.w4.colors.border};
  }
`,y=n.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.w4.spacing.md};
  padding: 0 ${t.w4.spacing.lg};

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${t.w4.spacing.sm};
  }
`,w=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,v=n.default.div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,$=n.default.aside`
  width: ${({collapsed:e})=>e?p:d};
  min-width: ${({collapsed:e})=>e?p:d};
  background: ${t.w4.colors.sidebarBg};
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,j=n.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,k=n.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,z=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function S(){return(0,i.jsx)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:z.map((e,a)=>(0,i.jsx)(x,{index:a,accent:e.accent,children:e.char},a))})}const C="atlantis:sidebar-collapsed";function T({sidebar:e,children:a,topBarRight:t,title:n="Atlantis",activeId:s=null}){const[d,p]=(0,r.useState)(()=>{try{return"true"===localStorage.getItem(C)}catch{return!1}}),[g,h]=(0,r.useState)(null),x=(0,r.useRef)(),z=()=>p(e=>{const a=!e;try{localStorage.setItem(C,String(a))}catch{}return a}),T=r.useMemo(()=>r.lazy(()=>Promise.resolve().then(o.bind(o,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,i.jsx)(c.I.Provider,{value:{collapsed:d,toggle:z,flyout:g,openFlyout:(e,a,o)=>{clearTimeout(x.current),h({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{x.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(x.current)},children:(0,i.jsxs)(v,{children:[(0,i.jsxs)(u,{children:[e&&(0,i.jsx)(m,{children:(0,i.jsx)(f,{onClick:z,title:d?"Expand sidebar":"Collapse sidebar",children:(0,i.jsx)(l.A,{size:17})})}),(0,i.jsx)(S,{}),n&&(0,i.jsx)(b,{children:n}),t&&(0,i.jsx)(y,{children:t})]}),(0,i.jsxs)(w,{children:[null!=e&&(0,i.jsx)($,{collapsed:d,children:(0,i.jsx)(j,{children:e})}),(0,i.jsx)(k,{children:a})]}),g&&(0,i.jsx)(r.Suspense,{fallback:null,children:(0,i.jsx)(T,{activeId:s})})]})})}o(5185),n.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,n.default.div`
  overflow: hidden;
`,n.default.div`
  padding-left: ${t.w4.spacing.md};
`,n.default.div`
  display: flex;
  flex-direction: column;
`,n.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w4.spacing.sm} ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":t.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${t.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w4.colors.sidebarText};
    background: ${t.w4.colors.sidebarHover};
  }
`,n.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,n.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,n.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,n.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`;const M=s.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;n.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${M} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${t.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${t.w4.colors.surface};
  }
`,n.default.span`
  display: block;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${t.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${t.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${t.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${t.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,o(4914);var A=o(1920),R=o(8607),_=o(8479);n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
    border-color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`,A.A,R.A,_.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const B="documents",I="settings";function E(){return new Promise((e,a)=>{const o=indexedDB.open("atlantis-tools",2);o.onupgradeneeded=e=>{const a=e.target.result;a.objectStoreNames.contains(B)||a.createObjectStore(B,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),a.objectStoreNames.contains(I)||a.createObjectStore(I,{keyPath:"key"})},o.onsuccess=()=>e(o.result),o.onerror=()=>a(o.error)})}let P={async saveDoc(e,a,o){const t=await E(),r={appId:e,name:a,content:o,savedAt:Date.now()};return new Promise((e,a)=>{const o=t.transaction(B,"readwrite").objectStore(B).add(r);o.onsuccess=()=>e(String(o.result)),o.onerror=()=>a(o.error)})},async updateDoc(e,a,o){const t=await E();return new Promise((r,n)=>{const i=t.transaction(B,"readwrite").objectStore(B),s=i.get(Number(e));s.onsuccess=()=>{const e=s.result;if(!e)return void n(new Error("Doc not found"));const t=i.put({...e,name:a,content:o,savedAt:Date.now()});t.onsuccess=()=>r(),t.onerror=()=>n(t.error)},s.onerror=()=>n(s.error)})},async listDocs(e){const a=await E();return new Promise((o,t)=>{const r=a.transaction(B,"readonly").objectStore(B).index("appId").getAll(e);r.onsuccess=()=>o(r.result.map(e=>({...e,id:String(e.id)})).reverse()),r.onerror=()=>t(r.error)})},async deleteDoc(e){const a=await E();return new Promise((o,t)=>{const r=a.transaction(B,"readwrite").objectStore(B).delete(Number(e));r.onsuccess=()=>o(),r.onerror=()=>t(r.error)})},async putSetting(e,a){const o=await E();return new Promise((t,r)=>{const n=o.transaction(I,"readwrite").objectStore(I).put({key:e,value:a});n.onsuccess=()=>t(),n.onerror=()=>r(n.error)})},async getSetting(e){const a=await E();return new Promise((o,t)=>{const r=a.transaction(I,"readonly").objectStore(I).get(e);r.onsuccess=()=>o(r.result?r.result.value:null),r.onerror=()=>t(r.error)})}};function D(e,a){return P.putSetting(e,a)}function L(e){return P.getSetting(e)}n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,n.default.div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.default.div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,n.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,n.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,n.default.button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?t.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?t.w4.colors.danger:e?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,n.default.div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,n.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,n.default.div`
  position: relative;
`,n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    border-color: ${t.w4.colors.accent};
  }
`,n.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,n.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,n.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,n.default.div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
  }
`,n.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,n.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,n.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-top: 1px;
`,n.default.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${t.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,n.default.div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,n.default.section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,n.default.div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,n.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,n.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding-left: max(${t.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${t.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
  z-index: 100;
`,n.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,n.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,n.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,n.default.span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,n.default.div`
  flex: 1;
`;const O=s.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,F=s.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,N=s.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${O} 0.4s ease 0.15s both;
`,n.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,n.default.div`
  position: absolute;
  inset: 0;
  animation: ${F} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,n.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${t.w4.colors.border};
  animation: ${N} 1.4s ease-in-out infinite;
`,n.default.span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,n.default.nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${t.w4.spacing.sm} 0;
`,n.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${t.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${t.w4.spacing.xs} ${t.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"\n    font-size: 0;\n    padding: 0;\n    margin: 0;\n    height: 0;\n  "}
`,n.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.sidebarText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&"\n    justify-content: center;\n    padding: 8px;\n    margin: 0 4px;\n  "}
`,n.default.span`
  font-size: 15px;
  line-height: 1;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
`,n.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`},217(e,a,o){o.d(a,{w4:()=>r});const t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#7a8599",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.15)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#2a3040",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1a2030",success:"#34d399",warning:"#fbbf24",danger:"#f87171"},r={colors:function(){const e={};for(const a of Object.keys(t))e[a]=`var(--at-${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},4204(e,a,o){o.d(a,{m:()=>A});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(233),l=o(5723);const c=.92,d=.6,p=["🍌","💨","🧊","⚡"],u=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,m=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,f=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,g=n.keyframes`0%{box-shadow:0 0 0 0 rgba(249,117,131,0.4)}70%{box-shadow:0 0 0 20px rgba(249,117,131,0)}100%{box-shadow:0 0 0 0 rgba(249,117,131,0)}`,h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${i.w4.spacing.lg};gap:${i.w4.spacing.lg};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(249,117,131,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${u} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;`,y=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=r.default.div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:#ef4444;animation:${f} 0.5s ease;`,v=r.default.span`font-size:72px;animation:${m} 1s ease-in-out infinite;`,$=r.default.div`
  position:relative;width:${320}px;height:${320}px;
  border-radius:50%;background:radial-gradient(circle,${i.w4.colors.surface} 60%,rgba(249,117,131,0.15) 100%);
  border:3px solid ${i.w4.colors.border};overflow:hidden;touch-action:none;
  animation:${g} 2s ease-in-out infinite;
`,j=r.default.div`
  position:absolute;inset:0;border-radius:50%;
  background:radial-gradient(circle,transparent 55%,rgba(249,117,131,0.08) 70%,rgba(249,117,131,0.2) 100%);
  pointer-events:none;
`,k=r.default.div`
  position:absolute;
  left:${({x:e})=>e-20}px;top:${({y:e})=>e-20}px;
  transition:opacity 0.3s;opacity:${({alive:e})=>e?1:.2};filter:${({alive:e})=>e?"none":"grayscale(1)"};
  pointer-events:none;
`,z=r.default.div`
  position:absolute;font-size:28px;line-height:1;
  left:${({x:e})=>e-14}px;top:${({y:e})=>e-14}px;
  pointer-events:none;animation:${m} 1s ease-in-out infinite;
`,S=r.default.button`
  width:clamp(100px,25vw,140px);height:clamp(100px,25vw,140px);border-radius:50%;
  background:linear-gradient(145deg,#ef4444,#dc2626);border:4px solid rgba(255,255,255,0.2);
  font-size:clamp(1.8rem,5vw,2.5rem);color:#fff;font-weight:900;cursor:pointer;
  box-shadow:0 8px 32px rgba(239,68,68,0.4);transition:transform 0.1s;&:active{transform:scale(0.9);}
`,C=r.default.div`display:grid;grid-template-columns:repeat(3,1fr);gap:4px;width:180px;`,T=r.default.button`
  width:56px;height:56px;border-radius:${i.w4.borderRadius.md};display:flex;align-items:center;justify-content:center;
  background:${({active:e})=>e?"rgba(88,166,255,0.2)":i.w4.colors.surface};border:1px solid ${i.w4.colors.border};
  font-size:20px;cursor:pointer;transition:background 0.15s;&:hover{background:rgba(88,166,255,0.15);}
`,M=r.default.div`font-size:18px;font-weight:700;color:${i.w4.colors.mainText};`;function A({lang:e}){const[a,o]=(0,t.useState)("menu"),[r,n]=(0,t.useState)(3),[i,u]=(0,t.useState)({x:160,y:160,vx:0,vy:0,charIdx:0,alive:!0,score:0}),[m,f]=(0,t.useState)([]),[g,A]=(0,t.useState)([]),[R,_]=(0,t.useState)({dx:0,dy:-1}),[B,I]=(0,t.useState)(0),E=(0,t.useRef)(i);E.current=i;const P=(0,t.useRef)(m);P.current=m;const D=(0,t.useRef)(R);D.current=R;const L=(0,t.useRef)(0),O=160,F=140,N=(0,t.useCallback)(()=>{const e=Math.floor(Math.random()*s.L.length),a=Array.from({length:3},(a,o)=>{const t=2*Math.PI*o/3;return{x:O+80*Math.cos(t),y:O+80*Math.sin(t),vx:0,vy:0,charIdx:(e+o+1)%s.L.length,alive:!0,score:0}});f(a),P.current=a,u({x:O,y:O,vx:0,vy:0,charIdx:e,alive:!0,score:0}),E.current={x:O,y:O,vx:0,vy:0,charIdx:e,alive:!0,score:0},A([]),I(0),n(3),o("countdown");let t=3;const r=setInterval(()=>{t--,n(t),t<=0&&(clearInterval(r),o("playing"))},800)},[O]),H=(0,t.useCallback)(()=>{E.current.alive&&u(e=>({...e,vx:e.vx+12*D.current.dx,vy:e.vy+12*D.current.dy}))},[]);return(0,t.useEffect)(()=>{if("playing"!==a)return;const e=setInterval(()=>{u(e=>{if(!e.alive)return e;let a=e.x+e.vx,o=e.y+e.vy,t=e.vx*c,r=e.vy*c;const n=a-O,i=o-O,s=Math.sqrt(n*n+i*i);if(s>F){const l=Math.atan2(i,n);a=O+Math.cos(l)*F,o=O+Math.sin(l)*F;const c=t*Math.cos(l)+r*Math.sin(l);if(t-=2*c*Math.cos(l)*d,r-=2*c*Math.sin(l)*d,s>150)return{...e,x:a,y:o,vx:0,vy:0,alive:!1}}return{...e,x:a,y:o,vx:t,vy:r}}),f(e=>e.map(e=>{if(!e.alive)return e;let a=e.x+e.vx,o=e.y+e.vy,t=e.vx*c,r=e.vy*c;if(Math.random()<.02){const a=O-e.x,o=O-e.y,n=Math.sqrt(a*a+o*o)||1;t+=a/n*12*.6,r+=o/n*12*.6}const n=a-O,i=o-O,s=Math.sqrt(n*n+i*i);if(s>F){const l=Math.atan2(i,n);a=O+Math.cos(l)*F,o=O+Math.sin(l)*F;const c=t*Math.cos(l)+r*Math.sin(l);if(t-=2*c*Math.cos(l)*d,r-=2*c*Math.sin(l)*d,s>150)return{...e,x:a,y:o,vx:0,vy:0,alive:!1}}const l=a-E.current.x,p=o-E.current.y;if(Math.sqrt(l*l+p*p)<40&&E.current.alive){const e=Math.atan2(p,l);t+=4*Math.cos(e),r+=4*Math.sin(e)}return{...e,x:a,y:o,vx:t,vy:r}}))},16);return()=>clearInterval(e)},[a,O,F]),(0,t.useEffect)(()=>{if("playing"!==a)return;const e=setInterval(()=>{if(!E.current.alive)return clearInterval(e),void setTimeout(()=>o("gameover"),500);I(e=>e+1)},1e3);return()=>clearInterval(e)},[a]),(0,t.useEffect)(()=>{if("playing"!==a)return;const e=setInterval(()=>{const e=++L.current,a=Math.random()*Math.PI*2,o=Math.random()*F*.8;A(t=>{return[...t,{x:O+Math.cos(a)*o,y:O+Math.sin(a)*o,emoji:(r=p,r[Math.floor(Math.random()*r.length)]),id:e}];var r}),setTimeout(()=>A(a=>a.filter(a=>a.id!==e)),3e3)},5e3);return()=>clearInterval(e)},[a,O,F]),(0,t.useEffect)(()=>{if("playing"!==a)return;const e=e=>{"Space"===e.code&&(e.preventDefault(),H()),"ArrowUp"===e.key&&_({dx:0,dy:-1}),"ArrowDown"===e.key&&_({dx:0,dy:1}),"ArrowLeft"===e.key&&_({dx:-1,dy:0}),"ArrowRight"===e.key&&_({dx:1,dy:0})};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a,H]),"menu"===a?(0,l.jsxs)(h,{children:[(0,l.jsx)(s.G,{paletteIndex:0,pose:"idle",size:72}),(0,l.jsx)(x,{children:"pt"===e?"Arena Animal!":"Animal Arena!"}),(0,l.jsx)(b,{children:"pt"===e?"Empurra os outros para fora da arena!":"Bump others off the arena!"}),(0,l.jsx)(y,{accent:"#ef4444",onClick:N,children:"pt"===e?"Jogar!":"Play!"})]}):"countdown"===a?(0,l.jsx)(h,{children:(0,l.jsx)(w,{children:r>0?r:"🐾"},r)}):"gameover"===a?(0,l.jsxs)(h,{children:[(0,l.jsx)(v,{children:"💥"}),(0,l.jsx)(x,{children:"pt"===e?"Eliminado!":"Eliminated!"}),(0,l.jsxs)(M,{children:["⏱️ ",B,"s"]}),(0,l.jsx)(y,{accent:"#ef4444",onClick:N,children:"pt"===e?"Outra Vez":"Again"})]}):(0,l.jsxs)(h,{children:[(0,l.jsxs)(M,{children:["⏱️ ",B,"s"]}),(0,l.jsxs)($,{children:[(0,l.jsx)(j,{}),(0,l.jsx)(k,{x:i.x,y:i.y,alive:i.alive,children:(0,l.jsx)(s.G,{paletteIndex:i.charIdx,pose:i.alive?"idle":"dead",size:40})}),m.map((e,a)=>(0,l.jsx)(k,{x:e.x,y:e.y,alive:e.alive,children:(0,l.jsx)(s.G,{paletteIndex:e.charIdx,pose:e.alive?"idle":"dead",size:40})},a)),g.map(e=>(0,l.jsx)(z,{x:e.x,y:e.y,children:e.emoji},e.id))]}),(0,l.jsxs)("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[(0,l.jsxs)(C,{children:[(0,l.jsx)("div",{}),(0,l.jsx)(T,{onClick:()=>_({dx:0,dy:-1}),active:-1===R.dy&&0===R.dx,children:"⬆️"}),(0,l.jsx)("div",{}),(0,l.jsx)(T,{onClick:()=>_({dx:-1,dy:0}),active:-1===R.dx&&0===R.dy,children:"⬅️"}),(0,l.jsx)("div",{}),(0,l.jsx)(T,{onClick:()=>_({dx:1,dy:0}),active:1===R.dx&&0===R.dy,children:"➡️"}),(0,l.jsx)("div",{}),(0,l.jsx)(T,{onClick:()=>_({dx:0,dy:1}),active:1===R.dy&&0===R.dx,children:"⬇️"}),(0,l.jsx)("div",{})]}),(0,l.jsx)(S,{onTouchStart:e=>{e.preventDefault(),H()},onClick:H,children:"💨"})]})]})}},9253(e,a,o){o.d(a,{$:()=>Ee});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(233),l=o(1364),c=o(5723);const d=13,p=11,u=[[-1,0],[1,0],[0,-1],[0,1]],m={up:[-1,0],down:[1,0],left:[0,-1],right:[0,1]},f=["fire","bomb","speed","ghost","shield"],g=[30,30,20,10,10],h=[{name:{pt:"Blaze",en:"Blaze"},palette:0,accent:"#ff4444",desc:{pt:"Rápido e furioso",en:"Fast & furious"}},{name:{pt:"Pixel",en:"Pixel"},palette:1,accent:"#44bb44",desc:{pt:"Equilibrado",en:"Balanced"}},{name:{pt:"Sparky",en:"Sparky"},palette:2,accent:"#ff6644",desc:{pt:"Explosivo!",en:"Explosive!"}},{name:{pt:"Shadow",en:"Shadow"},palette:3,accent:"#cc44cc",desc:{pt:"Misterioso",en:"Mysterious"}},{name:{pt:"Bolt",en:"Bolt"},palette:4,accent:"#ffaa00",desc:{pt:"Veloz como um raio",en:"Lightning fast"}},{name:{pt:"Frost",en:"Frost"},palette:5,accent:"#00cccc",desc:{pt:"Frio e calculista",en:"Cool & calculated"}},{name:{pt:"Ruby",en:"Ruby"},palette:6,accent:"#8855cc",desc:{pt:"Brilhante",en:"Brilliant"}},{name:{pt:"Nova",en:"Nova"},palette:7,accent:"#ff4488",desc:{pt:"Estrela em ascensão",en:"Rising star"}},{name:{pt:"Bomber",en:"Bomber"},palette:8,accent:"#4488ff",desc:{pt:"O clássico!",en:"The classic!"}},{name:{pt:"Knight",en:"Knight"},palette:9,accent:"#ff2222",desc:{pt:"Cavaleiro negro",en:"Dark knight"}},{name:{pt:"Creeper",en:"Creeper"},palette:10,accent:"#55ee55",desc:{pt:"Sssssss...BOOM!",en:"Sssssss...BOOM!"}},{name:{pt:"Ender",en:"Ender"},palette:11,accent:"#9944ff",desc:{pt:"Do outro mundo",en:"From another world"}}],x={title:{pt:"BombBrawl",en:"BombBrawl"},subtitle:{pt:"Escolhe o teu bomber!",en:"Choose your bomber!"},start:{pt:"Começar!",en:"Start!"},youWin:{pt:"Ganhaste! 🎉",en:"You Win! 🎉"},youLose:{pt:"Perdeste! 💥",en:"You Lose! 💥"},draw:{pt:"Empate!",en:"Draw!"},playAgain:{pt:"Jogar de novo",en:"Play Again"},back:{pt:"Voltar",en:"Back"},go:{pt:"VAI!",en:"GO!"},bombs:{pt:"Bombas",en:"Bombs"},range:{pt:"Alcance",en:"Range"},speed:{pt:"Velocidade",en:"Speed"},controls:{pt:"Setas/WASD + Espaço",en:"Arrows/WASD + Space"},controlsMobile:{pt:"D-pad + Botão 💣",en:"D-pad + 💣 Button"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},waiting:{pt:"À espera…",en:"Waiting…"},startMatch:{pt:"Iniciar!",en:"Start Match!"}};function b(e,a){return x[e]?.["pt"===a?"pt":"en"]??e}let y=null,w=!1;function v(e,a,o="square",t=.12){try{const r=w?(y||(y=new AudioContext),y):null;if(!r)return;const n=r.createOscillator(),i=r.createGain();n.type=o,n.frequency.setValueAtTime(e,r.currentTime),i.gain.setValueAtTime(t,r.currentTime),i.gain.exponentialRampToValueAtTime(.001,r.currentTime+a),n.connect(i).connect(r.destination),n.start(),n.stop(r.currentTime+a)}catch{}}function $(){v(200,.15,"square",.1),v(100,.3,"sawtooth",.18)}function j(){v(440,.08,"square",.1),setTimeout(()=>v(660,.08,"square",.1),80),setTimeout(()=>v(880,.12,"square",.1),160)}function k(){v(300,.1,"square",.12),setTimeout(()=>v(200,.15,"square",.1),100),setTimeout(()=>v(100,.3,"sawtooth",.15),200)}function z(){v(440,.12,"square",.08)}const S=[[0,0],[0,1],[1,0],[0,12],[0,11],[1,12],[10,0],[10,1],[9,0],[10,12],[10,11],[9,12]];function C(e,a){return S.some(([o,t])=>o===e&&t===a)}function T(){const e=g.reduce((e,a)=>e+a,0);let a=Math.random()*e;for(let e=0;e<f.length;e++)if(a-=g[e],a<=0)return f[e];return"fire"}function M(e,a,o,t){return!(a<0||a>=p||o<0||o>=d||1===e[a][o]||2===e[a][o]&&!t)}function A(e,a){const o=new Set;for(const t of e)if(!t.detonated){o.add(`${t.row},${t.col}`);for(const[e,r]of u)for(let n=1;n<=t.range;n++){const i=t.row+e*n,s=t.col+r*n;if(i<0||i>=p||s<0||s>=d||1===a[i][s])break;if(o.add(`${i},${s}`),2===a[i][s])break}}return o}function R(e,a){return-1===e?"up":1===e?"down":-1===a?"left":1===a?"right":null}function _(e,a,o,t){let r=0;for(const[n,i]of u)for(let s=1;s<=o;s++){const o=e+n*s,l=a+i*s;if(o<0||o>=p||l<0||l>=d||1===t[o][l])break;if(2===t[o][l]){r++;break}}return r}function B(e,a,o,t){if(e.activeBombs>=e.maxBombs)return null;if(o.bombs.some(a=>!a.detonated&&a.row===e.row&&a.col===e.col))return null;const r=[...o.bombs,{id:-1,row:e.row,col:e.col,owner:a,timer:2500,range:e.range,detonated:!1}],n=A(r,o.grid),i=new Set(r.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),s=new Set;s.add(`${e.row},${e.col}`);const l=[];for(const[a,r]of u){const c=e.row+a,d=e.col+r,p=`${c},${d}`;if(M(o.grid,c,d,t)&&!i.has(p)){const e=R(a,r);if(!n.has(p))return e;s.add(p),l.push({r:c,c:d,firstDir:e})}}for(;l.length>0;){const{r:e,c:a,firstDir:r}=l.shift();for(const[c,d]of u){const p=e+c,u=a+d,m=`${p},${u}`;if(!s.has(m)&&M(o.grid,p,u,t)&&!i.has(m)){if(!n.has(m))return r;s.add(m),l.push({r:p,c:u,firstDir:r})}}}return null}function I(e,a,o,t,r,n){const i=new Set;i.add(`${o},${t}`);const s=new Set(e.bombs.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),l=[];for(const[c,d]of u){const p=o+c,u=t+d,m=`${p},${u}`;if(M(e.grid,p,u,n)&&!s.has(m)&&!a.has(m)){const e=R(c,d);if(r(p,u))return e;i.add(m),l.push({r:p,c:u,firstDir:e})}}for(;l.length>0;){const{r:o,c:t,firstDir:c}=l.shift();for(const[d,p]of u){const u=o+d,m=t+p,f=`${u},${m}`;if(!i.has(f)&&M(e.grid,u,m,n)&&!s.has(f)&&!a.has(f)){if(r(u,m))return c;i.add(f),l.push({r:u,c:m,firstDir:c})}}}return null}function E(e,a,o){const t=A(o.bombs,o.grid),r=t.has(`${e.row},${e.col}`),n=e.ghost>0,i=e.activeBombs<e.maxBombs,s=o.bombs.some(a=>!a.detonated&&a.row===e.row&&a.col===e.col),l=o.bombs.filter(e=>!e.detonated&&e.owner===a).length,c=i&&!s&&0===l;if(r){const a=new Set(o.bombs.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),r=new Set;r.add(`${e.row},${e.col}`);const i=[];for(const[s,l]of u){const c=e.row+s,d=e.col+l,p=`${c},${d}`;if(M(o.grid,c,d,n)&&!a.has(p)){const e=R(s,l);if(!t.has(p))return{move:e,placeBomb:!1};r.add(p),i.push({r:c,c:d,firstDir:e})}}for(;i.length>0;){const{r:e,c:s,firstDir:l}=i.shift();for(const[c,d]of u){const p=e+c,u=s+d,m=`${p},${u}`;if(!r.has(m)&&M(o.grid,p,u,n)&&!a.has(m)){if(!t.has(m))return{move:l,placeBomb:!1};r.add(m),i.push({r:p,c:u,firstDir:l})}}}for(const[a,t]of u){const r=e.row+a,i=e.col+t;if(M(o.grid,r,i,n))return{move:R(a,t),placeBomb:!1}}return{move:null,placeBomb:!1}}const m=o.bombs.find(o=>!o.detonated&&o.owner!==a&&Math.abs(o.row-e.row)+Math.abs(o.col-e.col)<=1);if(m){const a=I(o,t,e.row,e.col,(e,a)=>!t.has(`${e},${a}`)&&Math.abs(e-m.row)+Math.abs(a-m.col)>2,n);if(a)return{move:a,placeBomb:!1}}const f=I(o,t,e.row,e.col,(e,a)=>o.powerUps.some(o=>o.row===e&&o.col===a),n);if(f)return{move:f,placeBomb:!1};const g=function(e,a,o){let t=null;for(let r=0;r<o.players.length;r++){if(r===a||!o.players[r].alive)continue;const n=Math.abs(o.players[r].row-e.row)+Math.abs(o.players[r].col-e.col);(!t||n<t.dist)&&(t={idx:r,dist:n})}return t}(e,a,o);if("aggressive"===e.personality&&g){const r=o.players[g.idx];if(g.dist<=2&&c&&function(e,a,o,t,r){for(const[n,i]of u)for(let s=1;s<=o;s++){const o=e+n*s,l=a+i*s;if(o<0||o>=p||l<0||l>=d||1===t.grid[o][l])break;if(2===t.grid[o][l])break;for(let e=0;e<t.players.length;e++)if(e!==r&&t.players[e].alive&&t.players[e].row===o&&t.players[e].col===l)return!0}return!1}(e.row,e.col,e.range,o,a)){const t=B(e,a,o,n);if(t)return{move:t,placeBomb:!0}}const i=I(o,t,e.row,e.col,(e,a)=>e===r.row&&a===r.col,n);if(i)return{move:i,placeBomb:!1}}if("cautious"===e.personality&&g&&g.dist<=3){const a=o.players[g.idx],r=I(o,t,e.row,e.col,(e,o)=>Math.abs(e-a.row)+Math.abs(o-a.col)>5,n);if(r)return{move:r,placeBomb:!1}}if("chaotic"===e.personality&&g){if(g.dist<=3&&c&&Math.random()<.25){const t=B(e,a,o,n);if(t)return{move:t,placeBomb:!0}}if(Math.random()<.5){const a=o.players[g.idx],r=I(o,t,e.row,e.col,(e,o)=>e===a.row&&o===a.col,n);if(r)return{move:r,placeBomb:!1}}}if(c){if(_(e.row,e.col,e.range,o.grid)>=1){const t=B(e,a,o,n);if(t)return{move:t,placeBomb:!0}}const r=I(o,t,e.row,e.col,(a,t)=>_(a,t,e.range,o.grid)>=1,n);if(r)return{move:r,placeBomb:!1}}if(g){const r=o.players[g.idx];if(g.dist<=2&&c){const t=B(e,a,o,n);if(t)return{move:t,placeBomb:!0}}const i=I(o,t,e.row,e.col,(e,a)=>Math.abs(e-r.row)+Math.abs(a-r.col)<=1,n);if(i)return{move:i,placeBomb:!1}}const h=[...u].sort(()=>Math.random()-.5);for(const[a,r]of h){const i=e.row+a,s=e.col+r;if(M(o.grid,i,s,n)&&!t.has(`${i},${s}`)&&!o.bombs.some(e=>!e.detonated&&e.row===i&&e.col===s))return{move:R(a,r),placeBomb:!1}}return{move:null,placeBomb:!1}}function P(e,a){const o=[a],t=new Set;for(;o.length>0;){const a=o.shift();if(t.has(a))continue;t.add(a);const r=e.bombs.find(e=>e.id===a);if(!r||r.detonated)continue;r.detonated=!0,$();const n=e.players[r.owner];n&&(n.activeBombs=Math.max(0,n.activeBombs-1)),e.explosions.push({row:r.row,col:r.col,timer:450});for(const[a,t]of u)for(let n=1;n<=r.range;n++){const i=r.row+a*n,s=r.col+t*n;if(i<0||i>=p||s<0||s>=d)break;if(1===e.grid[i][s])break;if(e.explosions.push({row:i,col:s,timer:450}),2===e.grid[i][s]){e.grid[i][s]=0,Math.random()<.35&&e.powerUps.push({row:i,col:s,type:T()});break}const l=e.bombs.find(e=>!e.detonated&&e.row===i&&e.col===s);l&&o.push(l.id)}}e.bombs=e.bombs.filter(e=>!e.detonated)}const D=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,L=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}`,O=n.keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.12)}`,F=n.keyframes`0%{transform:scale(0.4);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}`,N=n.keyframes`0%{opacity:1;transform:scale(0.5)}30%{transform:scale(1.1)}100%{opacity:0;transform:scale(1)}`,H=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}`,G=n.keyframes`0%,100%{box-shadow:0 0 0 2px rgba(88,166,255,0.4)}50%{box-shadow:0 0 0 4px rgba(88,166,255,0.7)}`,Y=n.keyframes`0%,100%{opacity:0.5}50%{opacity:0.8}`,q=n.keyframes`0%,100%{box-shadow:0 0 12px var(--accent)}50%{box-shadow:0 0 24px var(--accent)}`,V=n.keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`,W=n.keyframes`0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.4) rotate(15deg)}`,J=n.keyframes`0%,100%{transform:translateY(0)}30%{transform:translateY(-16px)}`,X=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${i.w4.spacing.md};
  gap: ${i.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
  background: radial-gradient(ellipse 60% 50% at 30% 20%, rgba(249, 117, 131, 0.05) 0%, transparent 70%), #080b12;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`,U=r.default.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin: 0;
  text-align: center;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ff4444, #ff8844, #ffcc44);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${D} 0.4s ease;
`,K=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  margin: 0;
  text-align: center;
  animation: ${D} 0.4s ease 0.1s both;
`,Q=r.default.div`
  display: flex;
  gap: 4px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 20px;
  padding: 3px;
  animation: ${D} 0.4s ease 0.08s both;
`,Z=r.default.button`
  padding: 8px 20px;
  border-radius: 16px;
  border: none;
  background: ${({active:e,color:a})=>e?(a??i.w4.colors.accent)+"20":"transparent"};
  color: ${({active:e,color:a})=>e?a??i.w4.colors.accent:i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 36px;
  &:hover { color: ${({color:e})=>e??i.w4.colors.accent}; }
`,ee=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.lg};
  padding: ${i.w4.spacing.lg};
  overflow-y: auto;
  min-height: 0;
`,ae=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`,oe=r.default.button`
  padding: 14px 40px;
  background: linear-gradient(135deg, ${({accent:e})=>e}, ${({accent:e})=>e}cc);
  border: none;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s;
  min-height: 52px;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 24px ${({accent:e})=>e}50; }
  &:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
`,te=r.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${i.w4.spacing.sm};
  max-width: 560px;
  width: 100%;
  animation: ${D} 0.4s ease 0.15s both;

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    max-width: 320px;
  }
`,re=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.sm};
  background: ${({selected:e,accent:a})=>e?`${a}18`:i.w4.colors.surface};
  border: 2px solid ${({selected:e,accent:a})=>e?a:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  transition: all 0.2s ease;
  --accent: ${({accent:e})=>e};
  position: relative;
  overflow: hidden;

  ${({selected:e})=>e&&`animation: ${q} 2s ease-in-out infinite;`}

  &:hover {
    border-color: ${({accent:e})=>e};
    transform: translateY(-2px);
  }
`,ne=r.default.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({accent:e})=>e};
`,ie=r.default.span`
  font-size: 10px;
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
`,se=r.default.button`
  padding: 16px 48px;
  background: linear-gradient(135deg, ${({accent:e})=>e}, ${({accent:e})=>e}cc);
  border: none;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s;
  min-height: 56px;
  letter-spacing: 0.02em;
  animation: ${D} 0.4s ease 0.25s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px ${({accent:e})=>e}50;
  }
  &:active { transform: translateY(-1px); }
`,le=r.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 11, 18, 0.7);
  z-index: 20;
`,ce=r.default.div`
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 900;
  color: ${({accent:e})=>e};
  text-shadow: 0 0 40px ${({accent:e})=>e}60;
  animation: ${L} 0.5s ease;
`,de=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  animation: ${V} 0.3s ease;
  position: relative;
  width: 100%;
  max-width: 800px;
`,pe=r.default.div`
  position: relative;
  width: ${({w:e})=>e}px;
  height: ${({h:e})=>e}px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow:
    0 0 0 3px #1a2235,
    0 0 0 5px rgba(88, 166, 255, 0.15),
    0 8px 40px rgba(0, 0, 0, 0.6),
    inset 0 0 30px rgba(0, 0, 0, 0.3);
`,ue=r.default.div`
  position: absolute;
  inset: 0;
  background:
    repeating-conic-gradient(#1a2a1a 0% 25%, #162216 0% 50%)
    0 0 / ${({cellSize:e})=>2*e}px ${({cellSize:e})=>2*e}px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 98%, rgba(255, 255, 255, 0.03) 100%)
      0 0 / 100% ${({cellSize:e})=>e}px,
      linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 98%, rgba(255, 255, 255, 0.03) 100%)
      0 0 / ${({cellSize:e})=>e}px 100%;
    pointer-events: none;
  }
`,me=r.default.div`
  position: absolute;
  left: ${({c:e,size:a})=>e*a}px;
  top: ${({r:e,size:a})=>e*a}px;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
`,fe=(0,r.default)(me)`
  background:
    linear-gradient(180deg, #3a4a5e 0%, #2a3648 40%, #1e2a3a 100%);
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.12),
    inset 0 -3px 0 rgba(0, 0, 0, 0.5),
    inset 2px 0 0 rgba(255, 255, 255, 0.05),
    inset -2px 0 0 rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    right: 1px;
    height: 45%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, transparent 100%);
    border-radius: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(100, 140, 180, 0.08);
    background:
      linear-gradient(0deg, transparent 48%, rgba(0, 0, 0, 0.15) 48%, rgba(0, 0, 0, 0.15) 52%, transparent 52%),
      linear-gradient(90deg, transparent 48%, rgba(0, 0, 0, 0.1) 48%, rgba(0, 0, 0, 0.1) 52%, transparent 52%);
  }
`,ge=(0,r.default)(me)`
  background: linear-gradient(170deg, #7a5a38 0%, #5a3e20 50%, #4a3018 100%);
  box-shadow:
    inset 0 2px 0 rgba(255, 200, 100, 0.15),
    inset 0 -3px 0 rgba(0, 0, 0, 0.4),
    inset 2px 0 0 rgba(255, 200, 100, 0.08),
    inset -2px 0 0 rgba(0, 0, 0, 0.25);

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border: 1.5px solid rgba(180, 130, 70, 0.2);
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    background:
      linear-gradient(45deg, transparent 40%, rgba(255, 200, 100, 0.06) 50%, transparent 60%),
      linear-gradient(0deg, transparent 46%, rgba(0, 0, 0, 0.12) 46%, rgba(0, 0, 0, 0.12) 54%, transparent 54%),
      linear-gradient(90deg, transparent 46%, rgba(0, 0, 0, 0.08) 46%, rgba(0, 0, 0, 0.08) 54%, transparent 54%);
  }
`,he=((0,r.default)(me)`
  background: linear-gradient(170deg, #7a5a38 0%, #5a3e20 50%, #4a3018 100%);
  animation: ${W} 0.35s ease forwards;
  pointer-events: none;
`,(0,r.default)(me)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${F} 0.2s ease;
  z-index: 5;

  .bomb-inner {
    animation: ${O} 0.6s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(255, 60, 20, 0.6)) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
  }
`),xe=(0,r.default)(me)`
  z-index: 8;
  pointer-events: none;
  border-radius: 4px;
  animation: ${N} ${450}ms ease-out forwards;
  background: ${({center:e})=>e?"radial-gradient(circle, #ffffff 0%, #ffee44 15%, #ffaa00 35%, #ff4400 60%, rgba(255, 30, 0, 0.3) 80%, transparent 100%)":"radial-gradient(circle, #ffee66 0%, #ff8822 30%, #ff4400 55%, rgba(255, 30, 0, 0.2) 80%, transparent 100%)"};
  box-shadow: ${({center:e})=>e?"0 0 20px rgba(255, 150, 0, 0.6), 0 0 40px rgba(255, 80, 0, 0.3)":"0 0 12px rgba(255, 120, 0, 0.4), 0 0 24px rgba(255, 60, 0, 0.2)"};
`,be=(0,r.default)(me)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${H} 1.5s ease-in-out infinite;
  z-index: 3;
  font-size: ${({size:e})=>Math.max(14,.5*e)}px;

  &::before {
    content: '';
    position: absolute;
    inset: 15%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  }
`,ye=r.default.span`
  filter:
    drop-shadow(0 0 6px ${({glowColor:e})=>e})
    drop-shadow(0 0 12px ${({glowColor:e})=>e}80);
`,we=r.default.div`
  position: absolute;
  left: ${({c:e,size:a})=>e*a}px;
  top: ${({r:e,size:a})=>e*a}px;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.12s linear, top 0.12s linear;
  z-index: 10;
  opacity: ${({alive:e})=>e?1:.3};
  filter: ${({alive:e,ghostActive:a})=>e?a?"brightness(1.2) saturate(0.5)":"drop-shadow(0 2px 3px rgba(0,0,0,0.6))":"grayscale(1) brightness(0.5)"};
  ${({ghostActive:e})=>e&&`animation: ${Y} 1s ease-in-out infinite;`}
  ${({shieldActive:e})=>e&&`animation: ${G} 1.5s ease-in-out infinite;`}
`,ve=r.default.div`
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 7px;
  font-weight: 800;
  color: ${({color:e})=>e};
  letter-spacing: 0.04em;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  white-space: nowrap;
`,$e=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  flex-wrap: wrap;
`,je=r.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
`,ke=r.default.span`
  color: ${({color:e})=>e??i.w4.colors.mainText};
  font-weight: 800;
`,ze=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xl};
  padding-top: ${i.w4.spacing.sm};

  @media (hover: hover) and (pointer: fine) {
    display: none;
  }
`,Se=r.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  width: clamp(130px, 28vw, 160px);
`,Ce=r.default.button`
  width: clamp(40px, 9vw, 52px);
  height: clamp(40px, 9vw, 52px);
  border-radius: ${i.w4.borderRadius.md};
  border: 1.5px solid ${({active:e})=>e?"rgba(88,166,255,0.5)":i.w4.colors.border};
  background: ${({active:e})=>e?"rgba(88,166,255,0.15)":i.w4.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(16px, 4vw, 22px);
  cursor: pointer;
  transition: background 0.1s;
  color: ${i.w4.colors.mainText};
  -webkit-tap-highlight-color: transparent;
`,Te=r.default.button`
  width: clamp(72px, 18vw, 96px);
  height: clamp(72px, 18vw, 96px);
  border-radius: 50%;
  background: linear-gradient(145deg, #ef4444, #dc2626);
  border: 3px solid rgba(255, 255, 255, 0.2);
  font-size: clamp(28px, 6vw, 36px);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 6px 24px rgba(239, 68, 68, 0.4);
  transition: transform 0.1s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.9);
  }
`,Me=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.lg};
  animation: ${D} 0.4s ease;
`,Ae=r.default.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  font-weight: 900;
  margin: 0;
  color: ${({win:e})=>e?"#3fb950":"#f97583"};
  text-align: center;
`,Re=r.default.div`
  animation: ${J} 1s ease-in-out infinite;
`,_e=r.default.div`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  opacity: 0.7;
  animation: ${D} 0.4s ease 0.3s both;
`,Be={fire:"🔥",bomb:"💣",speed:"🏃",ghost:"👻",shield:"🛡️"},Ie={fire:"#ff6622",bomb:"#ff4444",speed:"#44ff44",ghost:"#aa88ff",shield:"#4488ff"};function Ee({lang:e,canOnline:a=!1}){const[o,r]=(0,t.useState)("charselect"),[n,i]=(0,t.useState)("solo"),[u,f]=(0,t.useState)(0),[g,x]=(0,t.useState)(3),[,$]=(0,t.useState)(0),S=(0,t.useRef)(null),T=(0,t.useRef)(null),A=(0,t.useRef)(!1),R=(0,t.useRef)(null),_=(0,t.useRef)(null),[B,I]=(0,t.useState)(40),D=(0,t.useRef)([]),L=((0,t.useRef)(0),(0,t.useRef)(new Map)),O=(0,t.useRef)(0),F=(0,t.useRef)(new Map),N=(0,t.useRef)(0),H="online"===n,G=(0,t.useRef)({updatePlayerCount:()=>{}}),Y=(0,t.useCallback)(e=>{if("guest-joined"===e.type){q.addPlayer({id:e.playerId,name:e.name,isHost:!1});const a=(q.room?.players.length??1)+1;G.current.updatePlayerCount(a),q.sendEvent({type:"host-ack",name:(0,l.zE)(),playerId:q.room?.playerId??"",players:[...q.room?.players??[],{id:e.playerId,name:e.name,isHost:!1}]})}else if("host-ack"===e.type)q.setPlayers(e.players);else if("player-list"===e.type)q.setPlayers(e.players);else if("player-left"===e.type)e.playerId&&q.removePlayer(e.playerId);else if("game-state"===e.type){const a=e.payload;if("input"===a.action){const e=a.playerId;L.current.set(e,{dir:a.dir,bomb:a.bomb})}else if("start"===a.action){const e=a.gameState;S.current=e,O.current=a.yourIndex;const o=a.playerIdMap;F.current=new Map(Object.entries(o)),r("countdown"),x(3);let t=3;const n=setInterval(()=>{t--,t<=0?(clearInterval(n),r("playing")):x(t)},700)}else if("tick"===a.action){const e=S.current;if(!e)return;const o=a.state;e.players=o.players,e.bombs=o.bombs,e.explosions=o.explosions,e.powerUps=o.powerUps,e.grid=o.grid,e.running=o.running,e.winner=o.winner,e.elapsed=o.elapsed,$(e=>e+1)}}},[]),q=(0,l.Ky)({gameId:"bombbrawl",playerName:(0,l.zE)(),onEvent:Y}),V=(0,l.zj)({gameId:"bombbrawl",enabled:"lobby"===o&&"online"===n});G.current=V;const W=V.rooms;(0,t.useEffect)(()=>{function e(){const e=window.innerWidth>=768?48:24,a=Math.min(window.innerWidth-e,780),o=window.innerWidth>=1024?80:180,t=window.innerHeight-o,r=Math.floor(a/d),n=Math.floor(t/p),i=window.innerWidth>=768?60:48;I(Math.max(26,Math.min(i,r,n)))}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const J=d*B,me=p*B,Ee=h[u].accent,Pe=(0,t.useCallback)(e=>{const a=function(){const e=[];for(let a=0;a<p;a++){e[a]=[];for(let o=0;o<d;o++)a%2==0&&o%2==0&&a>0&&a<10&&o>0&&o<12?e[a][o]=1:C(a,o)?e[a][o]=0:e[a][o]=Math.random()<.62?2:0}return e}(),o=[[0,0],[0,12],[10,0],[10,12]],t=["aggressive","cautious","chaotic"];let r;if(e&&e.length>0){const a=4;r=[];for(let n=0;n<a;n++){const a=n<e.length,i=a?e[n].paletteIdx:Math.floor(Math.random()*s.L.length);r.push({row:o[n][0],col:o[n][1],alive:!0,maxBombs:1,activeBombs:0,range:1,speed:220,ghost:0,shield:!1,paletteIdx:i,dir:null,isBot:!a,personality:a?"aggressive":t[(n-e.length)%3],moveCooldown:0,aiCooldown:200+200*Math.random(),walking:!1,flipX:!1})}}else{const e=new Set([h[u].palette]);r=o.map((a,o)=>{let r;if(0===o)r=h[u].palette;else{do{r=Math.floor(Math.random()*s.L.length)}while(e.has(r));e.add(r)}return{row:a[0],col:a[1],alive:!0,maxBombs:1,activeBombs:0,range:1,speed:220,ghost:0,shield:!1,paletteIdx:r,dir:null,isBot:0!==o,personality:0===o?"aggressive":t[(o-1)%3],moveCooldown:0,aiCooldown:200+200*Math.random(),walking:!1,flipX:!1}})}const n={grid:a,players:r,bombs:[],explosions:[],powerUps:[],running:!0,winner:-1,bombIdCounter:0,elapsed:0};return S.current=n,D.current=[],n},[u]),De=(0,t.useCallback)(e=>{const a=S.current;if(!a)return;const o=a.players[e];!o.alive||o.activeBombs>=o.maxBombs||a.bombs.some(e=>e.row===o.row&&e.col===o.col)||(o.activeBombs++,v(120,.3,"sawtooth",.15),setTimeout(()=>v(80,.4,"sawtooth",.2),50),a.bombs.push({id:a.bombIdCounter++,row:o.row,col:o.col,owner:e,timer:2500,range:o.range,detonated:!1}))},[]),Le=(0,t.useCallback)(()=>{R.current&&clearInterval(R.current);const e=16;N.current=0,R.current=setInterval(()=>{const a=S.current;if(!a||!a.running)return;a.elapsed+=e;for(let o=0;o<a.players.length;o++){const t=a.players[o];if(t.alive){if(t.ghost>0&&(t.ghost=Math.max(0,t.ghost-e)),t.isBot){if(t.aiCooldown-=e,t.aiCooldown<=0){const e=E(t,o,a);t.dir=e.move,e.placeBomb&&(De(o),t.moveCooldown=0),t.aiCooldown="aggressive"===t.personality?80+80*Math.random():"chaotic"===t.personality?100+120*Math.random():120+140*Math.random()}}else if(o===O.current)t.dir=T.current,A.current&&(De(o),A.current=!1);else if(H)for(const[e,a]of F.current.entries())if(a===o){const a=L.current.get(e);a&&(t.dir=a.dir,a.bomb&&(De(o),a.bomb=!1));break}if(t.moveCooldown-=e,t.moveCooldown<=0&&t.dir){const e=m[t.dir];if(e){const o=t.row+e[0],r=t.col+e[1],n=t.ghost>0;M(a.grid,o,r,n)&&!a.bombs.some(e=>e.row===o&&e.col===r)&&(t.row=o,t.col=r,t.moveCooldown=t.speed,t.walking=!0,t.flipX=e[1]<0)}}t.walking=t.moveCooldown>.5*t.speed}}for(const o of a.bombs)o.detonated||(o.timer-=e,o.timer<=0&&P(a,o.id));a.explosions=a.explosions.filter(a=>(a.timer-=e,a.timer>0));const o=new Set(a.explosions.map(e=>`${e.row},${e.col}`));for(const e of a.players)e.alive&&o.has(`${e.row},${e.col}`)&&(e.shield?e.shield=!1:(e.alive=!1,k()));for(const e of a.players){if(!e.alive)continue;const o=a.powerUps.findIndex(a=>a.row===e.row&&a.col===e.col);if(-1!==o){const t=a.powerUps[o];switch(j(),t.type){case"fire":e.range=Math.min(6,e.range+1);break;case"bomb":e.maxBombs=Math.min(5,e.maxBombs+1);break;case"speed":e.speed=Math.max(100,e.speed-40);break;case"ghost":e.ghost=6e3;break;case"shield":e.shield=!0}a.powerUps.splice(o,1)}}const t=a.players.filter(e=>e.alive);t.length<=1&&(a.running=!1,a.winner=1===t.length?a.players.indexOf(t[0]):-1),H&&"host"===q.room?.role&&(N.current++,N.current%5!=0&&a.running||q.sendEvent({type:"game-state",payload:{action:"tick",state:{players:a.players,bombs:a.bombs,explosions:a.explosions,powerUps:a.powerUps,grid:a.grid,running:a.running,winner:a.winner,elapsed:a.elapsed}}})),$(e=>e+1)},e)},[De,H,q]),Oe=(0,t.useCallback)(()=>{R.current&&(clearInterval(R.current),R.current=null)},[]),Fe=(0,t.useRef)({dir:null,bomb:!1});(0,t.useEffect)(()=>{if(!H||!q.room||"guest"!==q.room.role||"playing"!==o)return;const e=setInterval(()=>{const e=T.current,a=A.current;(e!==Fe.current.dir||a)&&(Fe.current={dir:e,bomb:a},q.sendEvent({type:"game-state",payload:{action:"input",playerId:q.room.playerId,dir:e,bomb:a}}),a&&(A.current=!1))},50);return()=>clearInterval(e)},[H,q,o]),(0,t.useEffect)(()=>{if("playing"!==o)return;const e={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right",W:"up",S:"down",A:"left",D:"right"},a=new Set;function t(o){if(" "===o.key||"Enter"===o.key)return o.preventDefault(),void(A.current=!0);const t=e[o.key];t&&(o.preventDefault(),a.add(o.key),T.current=t)}function r(o){if(a.delete(o.key),0===a.size)T.current=null;else{const o=[...a].pop();T.current=e[o]??null}}return window.addEventListener("keydown",t),window.addEventListener("keyup",r),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",r)}},[o]);const Ne=(0,t.useCallback)(()=>{w=!0,Pe(),O.current=0,r("countdown"),x(3),z();let e=3;const a=setInterval(()=>{e--,e<=0?(clearInterval(a),r("playing"),Le(),v(880,.2,"square",.12)):(x(e),z())},700)},[Pe,Le]),He=(0,t.useCallback)(()=>{if(!q.room||"host"!==q.room.role)return;w=!0,V.unpublishRoom();const e=q.room.players,a=e.map((e,a)=>({id:e.id,paletteIdx:h[a%h.length].palette})),o=Pe(a);O.current=0;const t={};e.forEach((e,a)=>{t[e.id]=a}),F.current=new Map(Object.entries(t)),q.sendEvent({type:"game-state",payload:{action:"start",gameState:o,playerIdMap:t}}),e.forEach((e,a)=>{e.isHost||q.sendEvent({type:"game-state",payload:{action:"start",gameState:o,yourIndex:a,playerIdMap:t}})}),r("countdown"),x(3);let n=3;const i=setInterval(()=>{n--,n<=0?(clearInterval(i),r("playing"),Le()):x(n)},700)},[q,Pe,Le]);(0,t.useEffect)(()=>()=>{Oe(),w=!1,y&&(y.close().catch(()=>{}),y=null),H&&(V.unpublishRoom(),q.leaveRoom())},[Oe]);const Ge=(0,t.useRef)(null),Ye=(0,t.useCallback)(e=>{Ge.current=e,T.current=e},[]),qe=(0,t.useCallback)(()=>{Ge.current=null,T.current=null},[]),Ve=S.current,{walls:We,blocks:Je}=(0,t.useMemo)(()=>{if(!Ve)return{walls:[],blocks:[]};const e=[],a=[];for(let o=0;o<p;o++)for(let t=0;t<d;t++)1===Ve.grid[o][t]?e.push([o,t]):2===Ve.grid[o][t]&&a.push([o,t]);return{walls:e,blocks:a}},[Ve,Ve?.elapsed]);if("charselect"===o)return(0,c.jsxs)(X,{children:[(0,c.jsx)(U,{children:"💣 BombBrawl"}),(0,c.jsx)(K,{children:b("subtitle",e)}),a&&(0,c.jsxs)(Q,{children:[(0,c.jsxs)(Z,{active:"solo"===n,color:"#f59e0b",onClick:()=>i("solo"),children:["🎯 ",b("solo",e)]}),(0,c.jsxs)(Z,{active:"online"===n,color:"#3fb950",onClick:()=>i("online"),children:["🌐 ",b("online",e)]})]}),(0,c.jsx)(te,{children:h.map((a,o)=>(0,c.jsxs)(re,{accent:a.accent,selected:u===o,onClick:()=>f(o),children:[(0,c.jsx)(s.G,{paletteIndex:a.palette,pose:"idle",size:1.2*B}),(0,c.jsx)(ne,{accent:a.accent,children:a.name["pt"===e?"pt":"en"]}),(0,c.jsx)(ie,{children:a.desc["pt"===e?"pt":"en"]})]},o))}),(0,c.jsx)(se,{accent:Ee,onClick:H?()=>r("lobby"):Ne,children:b(H?"online":"start",e)}),(0,c.jsx)(_e,{children:"undefined"!=typeof window&&"ontouchstart"in window?b("controlsMobile",e):b("controls",e)})]});if("lobby"===o){const a="host"===q.room?.role,o=q.room?.players.length??0,t=a&&o>=2;return(0,c.jsxs)(X,{children:[(0,c.jsx)(U,{children:"💣 BombBrawl"}),q.room?.connected?(0,c.jsxs)(ee,{children:[(0,c.jsxs)(K,{children:["👥 ",o,"/4 ","pt"===e?"jogadores":"players"]}),(0,c.jsx)(ae,{children:q.room.players.map((e,a)=>(0,c.jsxs)(re,{accent:h[a%h.length].accent,selected:!1,children:[(0,c.jsx)(s.G,{paletteIndex:h[a%h.length].palette,pose:"idle",size:52}),(0,c.jsx)(ne,{accent:h[a%h.length].accent,children:e.name}),e.isHost&&(0,c.jsx)(ie,{children:"👑 Host"})]},e.id))}),t&&(0,c.jsx)(oe,{accent:"#3fb950",onClick:He,children:b("startMatch",e)}),!a&&(0,c.jsx)(K,{children:b("waiting",e)})]}):(0,c.jsx)(l.XB,{lang:e,room:q.room,error:q.error,onCreateRoom:e=>{const{code:a,roomName:o}=q.createRoom();V.publishRoom({code:a,roomName:o,hostName:e,playerCount:1})},onJoinRoom:(e,a)=>q.joinRoom(e),onLeaveRoom:()=>{V.unpublishRoom(),q.leaveRoom(),r("charselect")},availableRooms:W})]})}if("playing"===o&&Ve&&!Ve.running){const a=O.current,o=Ve.winner===a,t=-1===Ve.winner,n=Ve.winner>=0?Ve.players[Ve.winner].paletteIdx:u;return(0,c.jsx)(X,{children:(0,c.jsxs)(Me,{children:[(0,c.jsx)(Re,{children:(0,c.jsx)(s.G,{paletteIndex:n,pose:t?"dead":"jump",size:120})}),(0,c.jsx)(Ae,{win:o,children:b(t?"draw":o?"youWin":"youLose",e)}),(0,c.jsx)(se,{accent:o?"#3fb950":"#f97583",onClick:()=>{Oe(),H&&(V.unpublishRoom(),q.leaveRoom()),r("charselect")},children:b("playAgain",e)})]})})}if(!Ve)return(0,c.jsx)(X,{});const Xe=O.current,Ue=Ve.players[Xe]??Ve.players[0];return(0,c.jsx)(X,{children:(0,c.jsxs)(de,{ref:_,children:[(0,c.jsxs)($e,{children:[(0,c.jsx)(s.G,{paletteIndex:Ue.paletteIdx,pose:"idle",size:28}),(0,c.jsxs)(je,{children:["💣 ",(0,c.jsxs)(ke,{color:"#ff4444",children:[Ue.maxBombs-Ue.activeBombs,"/",Ue.maxBombs]})]}),(0,c.jsxs)(je,{children:["🔥 ",(0,c.jsx)(ke,{color:"#ff8844",children:Ue.range})]}),(0,c.jsxs)(je,{children:["🏃 ",(0,c.jsxs)(ke,{color:"#44ff44",children:[Math.round(100*(1-(Ue.speed-100)/120)),"%"]})]}),Ue.shield&&(0,c.jsx)(je,{children:"🛡️"}),Ue.ghost>0&&(0,c.jsxs)(je,{children:["👻 ",(0,c.jsxs)(ke,{color:"#aa88ff",children:[Math.ceil(Ue.ghost/1e3),"s"]})]})]}),(0,c.jsxs)(pe,{w:J,h:me,children:[(0,c.jsx)(ue,{cellSize:B}),We.map(([e,a])=>(0,c.jsx)(fe,{r:e,c:a,size:B},`w${e},${a}`)),Je.map(([e,a])=>(0,c.jsx)(ge,{r:e,c:a,size:B},`b${e},${a}`)),Ve.powerUps.map((e,a)=>(0,c.jsx)(be,{r:e.row,c:e.col,size:B,children:(0,c.jsx)(ye,{glowColor:Ie[e.type],children:Be[e.type]})},`pu${e.row},${e.col}-${a}`)),Ve.bombs.map(e=>(0,c.jsx)(he,{r:e.row,c:e.col,size:B,children:(0,c.jsx)("span",{className:"bomb-inner",style:{fontSize:Math.max(16,.6*B)},children:"💣"})},`bomb${e.id}`)),Ve.explosions.map((e,a)=>(0,c.jsx)(xe,{r:e.row,c:e.col,size:B,center:e.timer>400},`exp${e.row},${e.col}-${a}`)),Ve.players.map((e,a)=>(0,c.jsxs)(we,{r:e.row,c:e.col,size:B,alive:e.alive,ghostActive:e.ghost>0,shieldActive:e.shield,children:[e.isBot&&e.alive&&(0,c.jsx)(ve,{color:h[e.paletteIdx%h.length]?.accent??"#888",children:"aggressive"===e.personality?"😈":"cautious"===e.personality?"🤓":"🤪"}),(0,c.jsx)(s.G,{paletteIndex:e.paletteIdx,pose:e.alive?e.walking?"walk":"idle":"dead",size:Math.round(.85*B),flipX:e.flipX})]},`p${a}`)),"countdown"===o&&(0,c.jsx)(le,{children:(0,c.jsx)(ce,{accent:Ee,children:0===g?b("go",e):g},g)})]}),(0,c.jsxs)(ze,{children:[(0,c.jsxs)(Se,{children:[(0,c.jsx)("div",{}),(0,c.jsx)(Ce,{active:"up"===Ge.current,onPointerDown:()=>Ye("up"),onPointerUp:qe,onPointerLeave:qe,children:"▲"}),(0,c.jsx)("div",{}),(0,c.jsx)(Ce,{active:"left"===Ge.current,onPointerDown:()=>Ye("left"),onPointerUp:qe,onPointerLeave:qe,children:"◀"}),(0,c.jsx)("div",{}),(0,c.jsx)(Ce,{active:"right"===Ge.current,onPointerDown:()=>Ye("right"),onPointerUp:qe,onPointerLeave:qe,children:"▶"}),(0,c.jsx)("div",{}),(0,c.jsx)(Ce,{active:"down"===Ge.current,onPointerDown:()=>Ye("down"),onPointerUp:qe,onPointerLeave:qe,children:"▼"}),(0,c.jsx)("div",{})]}),(0,c.jsx)(Te,{onPointerDown:()=>{A.current=!0},children:"💣"})]})]})})}},3054(e,a,o){o.d(a,{M:()=>_});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(5723);const l=[{id:"tap-lots",emoji:"⚡",visual:"👆👆👆",instruction:{pt:"Toca muitas vezes!",en:"Tap many times!"},check:e=>e.taps>=10},{id:"dont-tap",emoji:"🤫",visual:"🚫👆",instruction:{pt:"NÃO toques!",en:"DON'T tap!"},check:e=>0===e.taps},{id:"tap-once",emoji:"☝️",visual:"1️⃣",instruction:{pt:"Toca só UMA vez!",en:"Tap ONCE only!"},check:e=>1===e.taps},{id:"hold-it",emoji:"✊",visual:"⏳",instruction:{pt:"Mantém premido!",en:"Hold the button!"},check:e=>e.holdTime>=2e3},{id:"tap-3",emoji:"3️⃣",visual:"👆👆👆",instruction:{pt:"Toca exatamente 3 vezes!",en:"Tap exactly 3 times!"},check:e=>3===e.taps},{id:"tap-5",emoji:"5️⃣",visual:"✋",instruction:{pt:"Toca exatamente 5 vezes!",en:"Tap exactly 5 times!"},check:e=>5===e.taps},{id:"quick-tap",emoji:"💨",visual:"⚡",instruction:{pt:"Toca super rápido!",en:"Tap super fast!"},check:e=>e.taps>=15},{id:"gentle",emoji:"🤏",visual:"😌",instruction:{pt:"Toca devagar… 2 vezes",en:"Tap slowly… 2 times"},check:e=>2===e.taps}];function c(e){return e[Math.floor(Math.random()*e.length)]}const d=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,p=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,u=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,m=n.keyframes`0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(88,166,255,0.5)}50%{transform:scale(1.05);box-shadow:0 0 0 14px rgba(88,166,255,0)}`,f=n.keyframes`0%,100%{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}`,g=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${i.w4.spacing.xl};gap:${i.w4.spacing.xl};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 40%,rgba(210,168,255,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${d} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:340px;`,y=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=r.default.span`font-size:72px;animation:${u} 1s ease-in-out infinite;`,v=r.default.div`
  display:flex;flex-direction:column;align-items:center;gap:${i.w4.spacing.lg};
  padding:${i.w4.spacing.xxl};background:${i.w4.colors.surface};border:3px solid ${i.w4.colors.accent};
  border-radius:24px;animation:${p} 0.4s ease;max-width:340px;width:100%;
`,$=r.default.span`font-size:80px;animation:${f} 1s ease-in-out infinite;`,j=r.default.span`font-size:36px;animation:${u} 1.2s ease-in-out infinite;`,k=r.default.p`font-size:${i.w4.typography.fontSizeLg};font-weight:700;color:${i.w4.colors.mainText};text-align:center;margin:0;`,z=r.default.button`
  width:clamp(180px,45vw,240px);height:clamp(180px,45vw,240px);border-radius:50%;
  background:${({pressing:e})=>e?"linear-gradient(145deg,#f97583,#ef4444)":"linear-gradient(145deg,#58a6ff,#3b82f6)"};
  border:6px solid rgba(255,255,255,0.2);font-size:clamp(3rem,8vw,5rem);color:#fff;
  cursor:pointer;transition:background 0.2s;
  animation:${m} 1.5s ease-in-out infinite;
  box-shadow:0 12px 48px rgba(88,166,255,0.4);
  &:active{transform:scale(0.92);animation:none;}
`,S=r.default.div`
  width:100%;max-width:300px;height:10px;border-radius:5px;background:${i.w4.colors.surface};overflow:hidden;
  &::after{content:'';display:block;height:100%;width:${({pct:e})=>100*e}%;
  background:${({pct:e})=>e>.5?"#3fb950":e>.25?"#f59e0b":"#f97583"};transition:width 0.3s linear;border-radius:5px;}
`,C=r.default.div`font-size:${i.w4.typography.fontSizeXl};font-weight:800;color:${i.w4.colors.accent};font-variant-numeric:tabular-nums;`,T=r.default.div`
  font-size:80px;animation:${p} 0.4s ease;
`,M=r.default.div`display:flex;gap:${i.w4.spacing.md};align-items:center;`,A=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};`,R=r.default.div`padding:8px 16px;background:rgba(249,158,11,0.12);border:1px solid rgba(249,158,11,0.3);border-radius:24px;font-size:16px;font-weight:700;color:#f59e0b;animation:${g} 0.3s ease;`;function _({lang:e}){const[a,o]=(0,t.useState)("menu"),[r,n]=(0,t.useState)(0),[d,p]=(0,t.useState)(0),[u,m]=(0,t.useState)(0),[f,g]=(0,t.useState)(null),[_,B]=(0,t.useState)({taps:0,held:!1,holdTime:0,movedDevice:!1}),[I,E]=(0,t.useState)(4),[P,D]=(0,t.useState)(null),[L,O]=(0,t.useState)(!1),[F,N]=(0,t.useState)(()=>{try{return Number(localStorage.getItem("atlantis-buttonmayhem-best")??"0")}catch{return 0}}),H=(0,t.useRef)(0),G=(0,t.useRef)(null),Y=(0,t.useRef)(null),q=(0,t.useRef)(_);q.current=_;const V=(0,t.useRef)(f);V.current=f;const W=(0,t.useRef)([]),J=(0,t.useCallback)(()=>{const e=l.filter(e=>!W.current.includes(e.id)),a=e.length>0?c(e):c(l);W.current=[...W.current,a.id].slice(-5),g(a),V.current=a,B({taps:0,held:!1,holdTime:0,movedDevice:!1}),q.current={taps:0,held:!1,holdTime:0,movedDevice:!1},o("rule-show"),setTimeout(()=>{E(4),o("playing")},3e3)},[]),X=(0,t.useCallback)(()=>{Y.current&&clearInterval(Y.current),G.current&&clearInterval(G.current);const e=V.current?.check(q.current)??!1;if(D(e),e){const e=5*u;p(a=>a+10+e),m(e=>e+1)}else m(0);o("result")},[u]);(0,t.useEffect)(()=>{if("playing"===a)return Y.current=setInterval(()=>{E(e=>e<=.3?(X(),0):e-.1)},100),()=>{Y.current&&clearInterval(Y.current)}},[a,X]);const U=(0,t.useCallback)(()=>{"playing"===a&&B(e=>({...e,taps:e.taps+1}))},[a]),K=(0,t.useCallback)(()=>{"playing"===a&&(O(!0),H.current=Date.now(),G.current=setInterval(()=>{const e=Date.now()-H.current;B(a=>({...a,held:!0,holdTime:e}))},50))},[a]),Q=(0,t.useCallback)(()=>{O(!1),G.current&&(clearInterval(G.current),G.current=null)},[]),Z=(0,t.useCallback)(()=>{const e=r+1;if(n(e),e>=8){const e=d;if(e>F){N(e);try{localStorage.setItem("atlantis-buttonmayhem-best",String(e))}catch{}}o("scores")}else J()},[r,d,F,J]),ee=(0,t.useCallback)(()=>{n(0),p(0),m(0),W.current=[],J()},[J]);return"menu"===a?(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:["🎲 ","pt"===e?"Botão Maluco!":"Button Mayhem!"]}),(0,s.jsx)(b,{children:"pt"===e?"Cada ronda tem uma regra diferente. Segue a instrução!":"Each round has a different rule. Follow the instruction!"}),F>0&&(0,s.jsxs)(b,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",F]}),(0,s.jsx)(y,{accent:"#d2a8ff",onClick:ee,children:"pt"===e?"Jogar!":"Play!"})]}):"rule-show"===a&&f?(0,s.jsxs)(h,{children:[(0,s.jsxs)(A,{children:["pt"===e?"Ronda":"Round"," ",r+1,"/",8]}),(0,s.jsxs)(v,{children:[(0,s.jsx)($,{children:f.emoji}),(0,s.jsx)(j,{children:f.visual}),(0,s.jsx)(k,{children:f.instruction["pt"===e?"pt":"en"]})]})]}):"result"===a?(0,s.jsxs)(h,{children:[(0,s.jsx)(T,{success:!!P,children:P?"✅":"❌"}),(0,s.jsx)(x,{children:P?"pt"===e?"Boa!":"Nice!":"pt"===e?"Ups!":"Oops!"}),(0,s.jsxs)(M,{children:[(0,s.jsxs)(A,{color:"#3fb950",children:["⭐ ",d]}),u>1&&(0,s.jsxs)(R,{children:["🔥 x",u]})]}),(0,s.jsx)(y,{accent:"#d2a8ff",onClick:Z,children:"➡️"})]}):"scores"===a?(0,s.jsxs)(h,{children:[(0,s.jsx)(w,{children:"🎲"}),(0,s.jsx)(x,{children:"pt"===e?"Resultados":"Results"}),(0,s.jsxs)(A,{color:"#3fb950",children:["⭐ ",d]}),d>=F&&d>0&&(0,s.jsxs)(b,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,s.jsx)(y,{accent:"#d2a8ff",onClick:()=>o("menu"),children:"Menu"})]}):(0,s.jsxs)(h,{children:[(0,s.jsxs)(M,{children:[(0,s.jsxs)(A,{children:["⭐ ",d]}),(0,s.jsxs)(C,{children:["👆 ",_.taps]}),u>1&&(0,s.jsxs)(R,{children:["🔥 x",u]})]}),(0,s.jsx)(S,{pct:I/4}),(0,s.jsx)(z,{pressing:L,onClick:U,onMouseDown:K,onMouseUp:Q,onTouchStart:e=>{e.preventDefault(),K(),U()},onTouchEnd:Q,children:f?.emoji??"?"}),_.held&&(0,s.jsxs)(b,{style:{color:i.w4.colors.accent},children:["✊ ",(_.holdTime/1e3).toFixed(1),"s"]})]})}},2708(e,a,o){o.d(a,{A:()=>I});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(5723);const l=[{name:"burger",ingredients:["🍞","🥩","🧀"],result:"🍔"},{name:"pizza",ingredients:["🍞","🧀","🍅"],result:"🍕"},{name:"salad",ingredients:["🥬","🍅","🥑"],result:"🥗"},{name:"cake",ingredients:["🥚","🍫","🍓"],result:"🎂"},{name:"sushi",ingredients:["🍚","🥑","🥒"],result:"🍣"},{name:"sandwich",ingredients:["🍞","🥬","🥩"],result:"🥪"}],c=["🍞","🥩","🧀","🍅","🥬","🥑","🥚","🍫","🍓","🍚","🥒","🍯"],d=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,p=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,u=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}`,m=n.keyframes`0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}`,f=n.keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`,g=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;padding:${i.w4.spacing.md};gap:${i.w4.spacing.md};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(249,158,11,0.08) 0%,transparent 70%),#080b12;`,h=r.default.h1`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${d} 0.3s ease;`,x=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;`,b=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,y=r.default.div`display:flex;gap:12px;overflow-x:auto;width:100%;max-width:600px;padding:8px 4px;justify-content:center;flex-wrap:wrap;`,w=r.default.div`
  display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 16px;min-width:110px;
  background:${i.w4.colors.surface};border:2px solid ${({urgent:e})=>e?"#f97583":i.w4.colors.border};
  border-radius:${i.w4.borderRadius.lg};flex-shrink:0;
  animation: ${({urgent:e})=>e?m:f} ${({urgent:e})=>e?"0.5s ease infinite":"0.3s ease"};
`,v=r.default.span`font-size:40px;line-height:1.2;`,$=r.default.div`display:flex;gap:4px;font-size:22px;line-height:1.2;`,j=r.default.div`width:100%;height:6px;border-radius:3px;background:${i.w4.colors.border};overflow:hidden;
  &::after{content:'';display:block;height:100%;width:${({pct:e})=>100*e}%;background:${({pct:e})=>e>.5?"#3fb950":e>.25?"#f59e0b":"#f97583"};transition:width 1s linear;border-radius:3px;}`,k=r.default.div`
  display:flex;gap:8px;align-items:center;justify-content:center;padding:16px;min-height:80px;
  background:${i.w4.colors.surface};border:2px dashed ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};
  width:100%;max-width:400px;flex-wrap:wrap;
`,z=r.default.span`font-size:40px;animation:${p} 0.2s ease;`,S=r.default.span`font-size:14px;color:${i.w4.colors.mainTextMuted};`,C=r.default.div`display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:400px;width:100%;`,T=r.default.button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,44px);
  background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};
  cursor:pointer;transition:all 0.15s;min-height:64px;
  &:hover{background:rgba(88,166,255,0.08);transform:scale(1.08);border-color:${i.w4.colors.accent};}
  &:active{transform:scale(0.92);}
`,M=r.default.div`display:flex;gap:8px;`,A=r.default.button`
  padding:10px 24px;border-radius:${i.w4.borderRadius.lg};border:2px solid ${({color:e})=>e};
  background:${({color:e})=>e}15;color:${({color:e})=>e};font-size:16px;font-weight:700;
  cursor:pointer;min-height:44px;font-family:${i.w4.typography.fontFamily};transition:all 0.15s;
  &:hover{background:${({color:e})=>e}25;transform:translateY(-1px);}
`,R=r.default.div`display:flex;gap:${i.w4.spacing.lg};align-items:center;`,_=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};animation:${({urgent:e})=>e?m:"none"} ${({urgent:e})=>e?"0.5s ease infinite":"none"};`,B=r.default.span`font-size:72px;animation:${u} 1s ease-in-out infinite;`;function I({lang:e}){const[a,o]=(0,t.useState)("menu"),[r,n]=(0,t.useState)([]),[i,d]=(0,t.useState)([]),[p,u]=(0,t.useState)(0),[m,f]=(0,t.useState)(60),[I,E]=(0,t.useState)(0),[P,D]=(0,t.useState)(()=>{try{return Number(localStorage.getItem("atlantis-kitchen-best")??"0")}catch{return 0}}),L=(0,t.useRef)(0),O=(0,t.useRef)(0),F=(0,t.useCallback)(()=>{n([]),d([]),u(0),O.current=0,f(60),E(0),L.current=0,o("playing")},[]);(0,t.useEffect)(()=>{if("playing"!==a)return;const e=setInterval(()=>{f(a=>{if(a<=1){clearInterval(e);const a=O.current;if(a>P){D(a);try{localStorage.setItem("atlantis-kitchen-best",String(a))}catch{}}return o("gameover"),0}return a-1})},1e3);return()=>clearInterval(e)},[a,P]),(0,t.useEffect)(()=>{if("playing"!==a)return;const e=()=>{const e=++L.current,a=(o=l)[Math.floor(Math.random()*o.length)];var o;const t=15+Math.floor(10*Math.random());n(o=>[...o.slice(-4),{id:e,recipe:a,timeLeft:t,maxTime:t}])};e();const o=setInterval(e,8e3);return()=>clearInterval(o)},[a]),(0,t.useEffect)(()=>{if("playing"!==a)return;const e=setInterval(()=>{n(e=>e.map(e=>({...e,timeLeft:e.timeLeft-1})).filter(e=>e.timeLeft>0))},1e3);return()=>clearInterval(e)},[a]);const N=(0,t.useCallback)(e=>{"playing"===a&&d(a=>a.length>=6?a:[...a,e])},[a]),H=(0,t.useCallback)(()=>d([]),[]),G=(0,t.useCallback)(()=>{if(0===i.length)return;const e=r.findIndex(e=>{if(e.recipe.ingredients.length!==i.length)return!1;const a=[...e.recipe.ingredients].sort(),o=[...i].sort();return a.every((e,a)=>e===o[a])});if(e>=0){const a=r[e],o=100+Math.ceil(a.timeLeft/a.maxTime*50)+10*I;O.current+=o,u(O.current),E(e=>e+1),n(a=>a.filter((a,o)=>o!==e))}else E(0);d([])},[i,r,I]);if("menu"===a)return(0,s.jsxs)(g,{children:[(0,s.jsxs)(h,{children:["👨‍🍳 ","pt"===e?"Cozinha Louca!":"Crazy Kitchen!"]}),(0,s.jsx)(x,{children:"pt"===e?"Prepara as encomendas o mais rápido possível!":"Fill orders as fast as you can!"}),P>0&&(0,s.jsxs)(x,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",P]}),(0,s.jsx)(b,{accent:"#f59e0b",onClick:F,children:"pt"===e?"Jogar!":"Play!"})]});if("gameover"===a)return(0,s.jsxs)(g,{children:[(0,s.jsx)(B,{children:"👨‍🍳"}),(0,s.jsx)(h,{children:"pt"===e?"Tempo esgotado!":"Time's up!"}),(0,s.jsxs)(_,{color:"#3fb950",children:["⭐ ",p]}),p>=P&&p>0&&(0,s.jsxs)(x,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,s.jsx)(b,{accent:"#f59e0b",onClick:F,children:"pt"===e?"Outra Vez":"Again"})]});const Y=m<=10?"#f97583":m<=20?"#f59e0b":"#3fb950";return(0,s.jsxs)(g,{children:[(0,s.jsxs)(R,{children:[(0,s.jsxs)(_,{color:"#3fb950",children:["⭐ ",p]}),(0,s.jsxs)(_,{color:Y,urgent:m<=10,children:["⏱️ ",m,"s"]}),I>1&&(0,s.jsxs)(_,{color:"#d2a8ff",children:["🔥 x",I]})]}),(0,s.jsxs)(y,{children:[r.map(e=>(0,s.jsxs)(w,{urgent:e.timeLeft<=5,children:[(0,s.jsx)(v,{children:e.recipe.result}),(0,s.jsx)($,{children:e.recipe.ingredients.map((e,a)=>(0,s.jsx)("span",{children:e},a))}),(0,s.jsx)(j,{pct:e.timeLeft/e.maxTime})]},e.id)),0===r.length&&(0,s.jsx)(x,{style:{padding:12},children:"pt"===e?"Sem encomendas…":"No orders…"})]}),(0,s.jsx)(k,{children:i.length>0?i.map((e,a)=>(0,s.jsx)(z,{children:e},a)):(0,s.jsx)(S,{children:"pt"===e?"👆 Toca nos ingredientes":"👆 Tap ingredients"})}),(0,s.jsxs)(M,{children:[(0,s.jsx)(A,{color:"#f97583",onClick:H,children:"🗑️"}),(0,s.jsxs)(A,{color:"#3fb950",onClick:G,children:["✅ ","pt"===e?"Servir!":"Serve!"]})]}),(0,s.jsx)(C,{children:c.map(e=>(0,s.jsx)(T,{onClick:()=>N(e),children:e},e))})]})}},2524(e,a,o){o.d(a,{c:()=>E});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(1364),l=o(5723);const c=[{emoji:"🐶",label:"dog"},{emoji:"🐱",label:"cat"},{emoji:"🏠",label:"house"},{emoji:"🌳",label:"tree"},{emoji:"☀️",label:"sun"},{emoji:"🚗",label:"car"},{emoji:"🍕",label:"pizza"},{emoji:"⭐",label:"star"},{emoji:"🐟",label:"fish"},{emoji:"🌺",label:"flower"},{emoji:"🚀",label:"rocket"},{emoji:"🍌",label:"banana"},{emoji:"🎂",label:"cake"},{emoji:"🐘",label:"elephant"},{emoji:"🦋",label:"butterfly"},{emoji:"⚽",label:"ball"},{emoji:"🌙",label:"moon"},{emoji:"🐸",label:"frog"},{emoji:"🎸",label:"guitar"},{emoji:"🍎",label:"apple"},{emoji:"🐍",label:"snake"},{emoji:"🏔️",label:"mountain"},{emoji:"🌊",label:"wave"},{emoji:"🍦",label:"ice cream"},{emoji:"🐔",label:"chicken"},{emoji:"🎈",label:"balloon"},{emoji:"🐢",label:"turtle"},{emoji:"🌈",label:"rainbow"},{emoji:"🦁",label:"lion"},{emoji:"🍉",label:"watermelon"}],d=["#ffffff","#f97583","#58a6ff","#3fb950","#f59e0b","#d2a8ff","#ff6bcb","#000000"];function p(e){return e[Math.floor(Math.random()*e.length)]}function u(e){const a=[...e];for(let e=a.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[a[e],a[o]]=[a[o],a[e]]}return a}const m=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,f=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,g=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;padding:${i.w4.spacing.md};gap:${i.w4.spacing.md};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(210,168,255,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${m} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;`,y=r.default.button`padding:14px 36px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:48px;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px ${({accent:e})=>e}40;}`,w=r.default.canvas`
  width:100%;max-width:500px;aspect-ratio:4/3;background:#1a1a2e;border:2px solid ${i.w4.colors.border};
  border-radius:${i.w4.borderRadius.lg};cursor:crosshair;touch-action:none;
`,v=r.default.div`display:flex;gap:6px;flex-wrap:wrap;justify-content:center;`,$=r.default.button`width:36px;height:36px;border-radius:50%;background:${({c:e})=>e};border:3px solid ${({active:e})=>e?"#fff":"transparent"};cursor:pointer;transition:transform 0.15s;&:hover{transform:scale(1.15);}`,j=r.default.button`padding:6px 14px;border-radius:${i.w4.borderRadius.md};border:1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};background:${({active:e})=>e?"rgba(88,166,255,0.12)":"transparent"};color:${i.w4.colors.mainText};font-size:13px;font-weight:600;cursor:pointer;min-height:36px;`,k=r.default.button`padding:6px 14px;border-radius:${i.w4.borderRadius.md};border:1px solid ${i.w4.colors.border};background:transparent;color:#f97583;font-size:13px;font-weight:600;cursor:pointer;min-height:36px;&:hover{border-color:#f97583;}`,z=r.default.div`display:flex;align-items:center;gap:${i.w4.spacing.sm};padding:10px 20px;background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.lg};animation:${f} 0.3s ease;`,S=r.default.span`font-size:48px;`,C=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({urgent:e})=>e?"#f97583":i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({urgent:e})=>e?"#f97583":i.w4.colors.mainText};`,T=r.default.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:400px;width:100%;`,M=r.default.button`
  display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 8px;
  background:${i.w4.colors.surface};border:2px solid ${({correct:e,wrong:a})=>e?"#3fb950":a?"#f97583":i.w4.colors.border};
  border-radius:${i.w4.borderRadius.lg};cursor:pointer;transition:all 0.15s;min-height:80px;font-size:36px;
  ${({correct:e})=>e?"background:rgba(63,185,80,0.15);":""}
  ${({wrong:e})=>e?"background:rgba(249,117,131,0.15);":""}
  &:hover:not(:disabled){border-color:${i.w4.colors.accent};transform:scale(1.05);}
`,A=r.default.span`font-size:80px;animation:${g} 0.8s ease-in-out infinite;`,R=r.default.div`display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;animation:${m} 0.3s ease;`,_=r.default.div`display:flex;align-items:center;gap:${i.w4.spacing.sm};padding:10px 14px;background:${i.w4.colors.surface};border:1px solid ${({highlight:e})=>e?i.w4.colors.accent:i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};`,B=r.default.span`flex:1;font-weight:600;color:${({highlight:e})=>e?i.w4.colors.accent:i.w4.colors.mainText};`,I=r.default.span`font-size:20px;font-weight:800;color:${({color:e})=>e??i.w4.colors.mainText};`;function E({lang:e,canOnline:a}){const[o,r]=(0,t.useState)("menu"),[n,m]=(0,t.useState)(null),[f,g]=(0,t.useState)([]),[E,P]=(0,t.useState)(0),[D,L]=(0,t.useState)(30),[O,F]=(0,t.useState)(0),[N,H]=(0,t.useState)({}),[G,Y]=(0,t.useState)("#ffffff"),[q,V]=(0,t.useState)(4),[W,J]=(0,t.useState)(null),[X,U]=(0,t.useState)(!1),[K,Q]=(0,t.useState)([]),[Z]=(0,t.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),ee=(0,t.useRef)(null),ae=(0,t.useRef)(!1),oe=(0,t.useRef)(null),te=(0,t.useRef)(null),re=(0,t.useCallback)(e=>{switch(e.type){case"guest-joined":ie.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),ie.current.sendEvent({type:"host-ack",name:Z,playerId:ie.current.room?.playerId??"",players:ie.current.room?.players??[]});break;case"host-ack":ie.current.setConnected(e.name),e.players&&ie.current.setPlayers([...e.players,{id:ie.current.room?.playerId??"",name:Z,isHost:!1}]);break;case"player-list":ie.current.setPlayers(e.players);break;case"game-state":{const a=e.payload;if("new-round"===a.action){const e=a.drawerId===ie.current.room?.playerId;U(e),P(a.round),L(30),J(null),Q([]),de(),e?(m(a.prompt),r("drawing")):(m(null),g(a.options),r("guessing"))}else if("stroke"===a.action){const e=a.stroke;Q(a=>[...a,e]),pe(e)}else"clear"===a.action?(Q([]),de()):"reveal"===a.action?(m(a.prompt),r("reveal")):"scores"===a.action?H(a.scores):"game-over"===a.action&&(H(a.scores),r("scores"));break}case"player-left":e.playerId&&ie.current.removePlayer(e.playerId)}},[Z]),ne=(0,s.Ky)({gameId:"drawguess",playerName:Z,onEvent:re}),ie=(0,t.useRef)(ne);ie.current=ne;const se=(0,s.zj)({gameId:"drawguess",enabled:"menu"===o||"lobby"===o}),le=(0,t.useRef)(E);le.current=E;const ce=(0,t.useRef)(N);ce.current=N;const de=(0,t.useCallback)(()=>{const e=ee.current?.getContext("2d");e&&(e.fillStyle="#1a1a2e",e.fillRect(0,0,e.canvas.width,e.canvas.height))},[]),pe=(0,t.useCallback)(e=>{const a=ee.current?.getContext("2d");if(a&&!(e.points.length<2)){a.strokeStyle=e.color,a.lineWidth=e.width,a.lineCap="round",a.lineJoin="round",a.beginPath(),a.moveTo(e.points[0][0],e.points[0][1]);for(let o=1;o<e.points.length;o++)a.lineTo(e.points[o][0],e.points[o][1]);a.stroke()}},[]);(0,t.useEffect)(()=>{const e=ee.current;e&&(e.width=e.offsetWidth,e.height=e.offsetHeight,de(),K.forEach(pe))});const ue=(0,t.useCallback)(e=>{const a=ee.current;if(!a)return null;const o=a.getBoundingClientRect(),t="touches"in e?e.touches[0]?.clientX??e.changedTouches[0]?.clientX:e.clientX,r="touches"in e?e.touches[0]?.clientY??e.changedTouches[0]?.clientY:e.clientY;return[(t-o.left)/o.width*a.width,(r-o.top)/o.height*a.height]},[]),me=(0,t.useCallback)(e=>{if(!X)return;const a=ue(e);a&&(ae.current=!0,oe.current={points:[a],color:G,width:q})},[X,G,q,ue]),fe=(0,t.useCallback)(e=>{if(!ae.current||!oe.current)return;const a=ue(e);if(!a)return;oe.current.points.push(a);const o=ee.current?.getContext("2d");if(!o)return;const t=oe.current.points;o.strokeStyle=oe.current.color,o.lineWidth=oe.current.width,o.lineCap="round",o.beginPath(),o.moveTo(t[t.length-2][0],t[t.length-2][1]),o.lineTo(t[t.length-1][0],t[t.length-1][1]),o.stroke()},[ue]),ge=(0,t.useCallback)(()=>{if(!ae.current||!oe.current)return;ae.current=!1;const e=oe.current;oe.current=null,Q(a=>[...a,e]),ne.sendEvent({type:"game-state",payload:{action:"stroke",stroke:e}})},[ne]),he=(0,t.useCallback)(()=>{Q([]),de(),ne.sendEvent({type:"game-state",payload:{action:"clear"}})},[ne,de]);(0,t.useEffect)(()=>{if("drawing"===o||"guessing"===o)return te.current&&clearInterval(te.current),te.current=setInterval(()=>{L(e=>e<=1?(te.current&&clearInterval(te.current),"host"===ne.room?.role&&ne.sendEvent({type:"game-state",payload:{action:"reveal",prompt:n}}),r("reveal"),0):e-1)},1e3),()=>{te.current&&clearInterval(te.current)}},[o,ne,n]);const xe=(0,t.useCallback)(()=>{const e=le.current+1;if(e>5)return ne.sendEvent({type:"game-state",payload:{action:"game-over",scores:ce.current}}),void r("scores");const a=ne.room?.players??[],o=a[(e-1)%a.length].id,t=p(c),n=u(c.filter(e=>e.emoji!==t.emoji)).slice(0,5),i=u([t,...n]);P(e),le.current=e,L(30),J(null),Q([]),de();const s=o===ne.room?.playerId;U(s),s?(m(t),r("drawing")):(m(null),g(i),r("guessing")),ne.sendEvent({type:"game-state",payload:{action:"new-round",round:e,drawerId:o,prompt:t,options:i}})},[ne,de]),be=(0,t.useCallback)(e=>{if(W)return;const a=e===n?.emoji;if(J(e),a){const e=ne.room?.playerId??"",a={...ce.current,[e]:(ce.current[e]??0)+1};H(a),ce.current=a,F(e=>e+1),ne.sendEvent({type:"game-state",payload:{action:"scores",scores:a}})}},[W,n,ne]),ye=(0,t.useCallback)(()=>{P(0),le.current=0,F(0),H({}),ce.current={};const e=p(c),a=u(c.filter(a=>a.emoji!==e.emoji)).slice(0,5);m(e),g(u([e,...a])),P(1),le.current=1,L(30),J(null),U(!1),r("guessing")},[]);if("menu"===o)return(0,l.jsxs)(h,{children:[(0,l.jsxs)(x,{children:["🎨 ","pt"===e?"Desenha e Adivinha!":"Draw & Guess!"]}),(0,l.jsx)(b,{children:"pt"===e?"Um desenha, os outros adivinham!":"One draws, others guess!"}),a?(0,l.jsx)(y,{accent:"#d2a8ff",onClick:()=>r("lobby"),children:"🌐 Online"}):(0,l.jsx)(y,{accent:"#d2a8ff",onClick:ye,children:"pt"===e?"Jogar Sozinho":"Play Solo"})]});if("lobby"===o)return(0,l.jsxs)(h,{children:[(0,l.jsxs)(x,{children:["🎨 ","pt"===e?"Desenha e Adivinha!":"Draw & Guess!"]}),ne.room?.connected?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(b,{children:[ne.room.players.length," ","pt"===e?"jogadores":"players"]}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:ne.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===ne.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===ne.room.role&&ne.room.players.length>=2&&(0,l.jsx)(y,{accent:"#d2a8ff",onClick:xe,children:"pt"===e?"Começar!":"Start!"}),ne.room.players.length<2&&(0,l.jsx)(b,{children:"pt"===e?"Mínimo 2 jogadores":"Minimum 2 players"})]}):(0,l.jsx)(s.XB,{lang:e,room:ne.room,error:ne.error,availableRooms:se.rooms,onCreateRoom:()=>{const{code:e,roomName:a}=ne.createRoom();se.publishRoom({code:e,roomName:a,hostName:Z,playerCount:1})},onJoinRoom:e=>ne.joinRoom(e),onLeaveRoom:()=>{se.unpublishRoom(),ne.leaveRoom(),r("menu")}})]});if("scores"===o){const a=(ne.room?.players??[{id:"me",name:Z,isHost:!1}]).map(e=>({id:e.id,name:e.name,pts:N[e.id]??0})).sort((e,a)=>a.pts-e.pts);return(0,l.jsxs)(h,{children:[(0,l.jsxs)(x,{children:["🏆 ","pt"===e?"Resultados":"Results"]}),(0,l.jsx)(R,{children:a.map((e,a)=>(0,l.jsxs)(_,{highlight:e.id===ne.room?.playerId,children:[(0,l.jsx)("span",{style:{fontSize:18,minWidth:28},children:0===a?"🥇":1===a?"🥈":2===a?"🥉":`${a+1}.`}),(0,l.jsx)(B,{highlight:e.id===ne.room?.playerId,children:e.name}),(0,l.jsx)(I,{color:0===a?"#3fb950":void 0,children:e.pts})]},e.id))}),(0,l.jsx)(y,{accent:"#d2a8ff",onClick:()=>{ne.leaveRoom(),se.unpublishRoom(),r("menu")},children:"Menu"})]})}return"reveal"===o?(0,l.jsxs)(h,{children:[(0,l.jsx)(b,{children:"pt"===e?"A resposta era:":"The answer was:"}),n&&(0,l.jsx)(A,{children:n.emoji}),"host"===ne.room?.role&&(0,l.jsx)(y,{accent:"#d2a8ff",onClick:xe,children:le.current>=5?"pt"===e?"Ver resultados":"See results":"➡️"})]}):(0,l.jsxs)(h,{children:[(0,l.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,l.jsxs)(C,{urgent:D<=5,children:["⏱️ ",D,"s"]}),X&&(0,l.jsx)(b,{children:"pt"===e?"Desenha isto:":"Draw this:"}),X&&n&&(0,l.jsx)(z,{children:(0,l.jsx)(S,{children:n.emoji})}),!X&&(0,l.jsx)(b,{children:"pt"===e?"O que é o desenho?":"What is the drawing?"})]}),(0,l.jsx)(w,{ref:ee,onMouseDown:me,onMouseMove:fe,onMouseUp:ge,onMouseLeave:ge,onTouchStart:me,onTouchMove:fe,onTouchEnd:ge}),X&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{children:d.map(e=>(0,l.jsx)($,{c:e,active:G===e,onClick:()=>Y(e)},e))}),(0,l.jsxs)(v,{children:[[2,4,8,14].map(e=>(0,l.jsx)(j,{active:q===e,onClick:()=>V(e),children:2===e?"·":4===e?"•":8===e?"●":"⬤"},e)),(0,l.jsx)(k,{onClick:he,children:"🗑️"})]})]}),!X&&(0,l.jsx)(T,{children:f.map(e=>(0,l.jsx)(M,{correct:W===e.emoji&&e.emoji===n?.emoji,wrong:W===e.emoji&&e.emoji!==n?.emoji,onClick:()=>be(e.emoji),disabled:!!W,children:e.emoji},e.emoji))})]})}},818(e,a,o){o.d(a,{i:()=>de});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(1364),l=o(5723);const c=[{id:"geography",icon:"🌍",color:"#3fb950",label:{en:"Geography",pt:"Geografia"},questions:[{q:{en:"What is the capital of France?",pt:"Qual é a capital da França?"},options:[{en:"Berlin",pt:"Berlim"},{en:"Madrid",pt:"Madrid"},{en:"Paris",pt:"Paris"},{en:"Rome",pt:"Roma"}],correct:2},{q:{en:"How many continents are there on Earth?",pt:"Quantos continentes existem na Terra?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:2},{q:{en:"What is the largest ocean in the world?",pt:"Qual é o maior oceano do mundo?"},options:[{en:"Atlantic Ocean",pt:"Oceano Atlântico"},{en:"Indian Ocean",pt:"Oceano Índico"},{en:"Arctic Ocean",pt:"Oceano Ártico"},{en:"Pacific Ocean",pt:"Oceano Pacífico"}],correct:3},{q:{en:"Which is the longest river in the world?",pt:"Qual é o rio mais longo do mundo?"},options:[{en:"Amazon",pt:"Amazonas"},{en:"Nile",pt:"Nilo"},{en:"Mississippi",pt:"Mississípi"},{en:"Yangtze",pt:"Yangtzé"}],correct:1},{q:{en:"What is the capital of Brazil?",pt:"Qual é a capital do Brasil?"},options:[{en:"São Paulo",pt:"São Paulo"},{en:"Rio de Janeiro",pt:"Rio de Janeiro"},{en:"Brasília",pt:"Brasília"},{en:"Salvador",pt:"Salvador"}],correct:2},{q:{en:"Which continent is the largest?",pt:"Qual é o maior continente?"},options:[{en:"Africa",pt:"África"},{en:"North America",pt:"América do Norte"},{en:"Asia",pt:"Ásia"},{en:"Europe",pt:"Europa"}],correct:2},{q:{en:"What is the capital of Portugal?",pt:"Qual é a capital de Portugal?"},options:[{en:"Porto",pt:"Porto"},{en:"Lisbon",pt:"Lisboa"},{en:"Faro",pt:"Faro"},{en:"Coimbra",pt:"Coimbra"}],correct:1},{q:{en:"The Amazon River flows through which continent?",pt:"O rio Amazonas atravessa qual continente?"},options:[{en:"Africa",pt:"África"},{en:"North America",pt:"América do Norte"},{en:"Asia",pt:"Ásia"},{en:"South America",pt:"América do Sul"}],correct:3},{q:{en:"How many oceans are there on Earth?",pt:"Quantos oceanos existem na Terra?"},options:[{en:"3",pt:"3"},{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"}],correct:2},{q:{en:"Which country has the most people?",pt:"Qual país tem mais pessoas?"},options:[{en:"USA",pt:"EUA"},{en:"India",pt:"Índia"},{en:"China",pt:"China"},{en:"Russia",pt:"Rússia"}],correct:1}]},{id:"science",icon:"🔬",color:"#58a6ff",label:{en:"Science",pt:"Ciências"},questions:[{q:{en:"How many planets are in our Solar System?",pt:"Quantos planetas tem o nosso Sistema Solar?"},options:[{en:"7",pt:"7"},{en:"8",pt:"8"},{en:"9",pt:"9"},{en:"10",pt:"10"}],correct:1},{q:{en:"What are the three states of matter?",pt:"Quais são os três estados da matéria?"},options:[{en:"Hot, cold, warm",pt:"Quente, frio, morno"},{en:"Solid, liquid, gas",pt:"Sólido, líquido, gasoso"},{en:"Hard, soft, medium",pt:"Duro, mole, médio"},{en:"Fire, water, earth",pt:"Fogo, água, terra"}],correct:1},{q:{en:"Which planet is closest to the Sun?",pt:"Qual planeta está mais perto do Sol?"},options:[{en:"Venus",pt:"Vénus"},{en:"Earth",pt:"Terra"},{en:"Mercury",pt:"Mercúrio"},{en:"Mars",pt:"Marte"}],correct:2},{q:{en:"How many bones does an adult human body have?",pt:"Quantos ossos tem o corpo humano adulto?"},options:[{en:"106",pt:"106"},{en:"206",pt:"206"},{en:"306",pt:"306"},{en:"406",pt:"406"}],correct:1},{q:{en:"What do plants need to make their food?",pt:"O que as plantas precisam para fazer o seu alimento?"},options:[{en:"Darkness and water",pt:"Escuridão e água"},{en:"Sunlight and carbon dioxide",pt:"Luz solar e dióxido de carbono"},{en:"Rain and soil only",pt:"Chuva e terra apenas"},{en:"Oxygen and fire",pt:"Oxigênio e fogo"}],correct:1},{q:{en:"What is the largest planet in our Solar System?",pt:"Qual é o maior planeta do Sistema Solar?"},options:[{en:"Saturn",pt:"Saturno"},{en:"Neptune",pt:"Neptuno"},{en:"Uranus",pt:"Úrano"},{en:"Jupiter",pt:"Júpiter"}],correct:3},{q:{en:"What organ pumps blood around your body?",pt:"Que órgão bombeia o sangue pelo corpo?"},options:[{en:"Liver",pt:"Fígado"},{en:"Lungs",pt:"Pulmões"},{en:"Heart",pt:"Coração"},{en:"Brain",pt:"Cérebro"}],correct:2},{q:{en:"What happens to water when it freezes?",pt:"O que acontece à água quando congela?"},options:[{en:"It becomes a gas",pt:"Torna-se um gás"},{en:"It becomes smaller",pt:"Fica mais pequena"},{en:"It becomes a solid",pt:"Torna-se um sólido"},{en:"It disappears",pt:"Desaparece"}],correct:2},{q:{en:"Which planet has rings around it?",pt:"Qual planeta tem anéis à sua volta?"},options:[{en:"Mars",pt:"Marte"},{en:"Venus",pt:"Vénus"},{en:"Mercury",pt:"Mercúrio"},{en:"Saturn",pt:"Saturno"}],correct:3},{q:{en:"What is the center of the Solar System?",pt:"O que está no centro do Sistema Solar?"},options:[{en:"The Moon",pt:"A Lua"},{en:"The Earth",pt:"A Terra"},{en:"The Sun",pt:"O Sol"},{en:"Jupiter",pt:"Júpiter"}],correct:2}]},{id:"animals",icon:"🐾",color:"#f0883e",label:{en:"Animals",pt:"Animais"},questions:[{q:{en:"What do pandas mostly eat?",pt:"O que os pandas comem principalmente?"},options:[{en:"Fish",pt:"Peixe"},{en:"Bamboo",pt:"Bambu"},{en:"Leaves",pt:"Folhas"},{en:"Berries",pt:"Bagas"}],correct:1},{q:{en:"Where do penguins live?",pt:"Onde vivem os pinguins?"},options:[{en:"Africa",pt:"África"},{en:"North Pole",pt:"Polo Norte"},{en:"South Pole / Antarctica",pt:"Polo Sul / Antártida"},{en:"Amazon rainforest",pt:"Floresta amazónica"}],correct:2},{q:{en:"What is a baby cat called?",pt:"Como se chama um bebé gato?"},options:[{en:"Puppy",pt:"Cachorro"},{en:"Cub",pt:"Filhote"},{en:"Kitten",pt:"Gatinho"},{en:"Calf",pt:"Bezerro"}],correct:2},{q:{en:"Which is the fastest land animal?",pt:"Qual é o animal terrestre mais rápido?"},options:[{en:"Lion",pt:"Leão"},{en:"Horse",pt:"Cavalo"},{en:"Cheetah",pt:"Guepardo"},{en:"Leopard",pt:"Leopardo"}],correct:2},{q:{en:"How many legs does a spider have?",pt:"Quantas patas tem uma aranha?"},options:[{en:"6",pt:"6"},{en:"8",pt:"8"},{en:"10",pt:"10"},{en:"12",pt:"12"}],correct:1},{q:{en:"What is a baby dog called?",pt:"Como se chama um bebé cão?"},options:[{en:"Kitten",pt:"Gatinho"},{en:"Foal",pt:"Potro"},{en:"Puppy",pt:"Cachorro"},{en:"Lamb",pt:"Cordeiro"}],correct:2},{q:{en:"Which animal is known as the king of the jungle?",pt:"Qual animal é conhecido como o rei da selva?"},options:[{en:"Tiger",pt:"Tigre"},{en:"Elephant",pt:"Elefante"},{en:"Lion",pt:"Leão"},{en:"Gorilla",pt:"Gorila"}],correct:2},{q:{en:"What do cows eat?",pt:"O que as vacas comem?"},options:[{en:"Fish",pt:"Peixe"},{en:"Grass and hay",pt:"Erva e feno"},{en:"Insects",pt:"Insetos"},{en:"Fruit",pt:"Fruta"}],correct:1},{q:{en:"Which is the largest animal on Earth?",pt:"Qual é o maior animal da Terra?"},options:[{en:"Elephant",pt:"Elefante"},{en:"Giraffe",pt:"Girafa"},{en:"Blue whale",pt:"Baleia azul"},{en:"Giant squid",pt:"Lula gigante"}],correct:2},{q:{en:"What sound does a duck make?",pt:"Que som faz um pato?"},options:[{en:"Moo",pt:"Mu"},{en:"Quack",pt:"Quá quá"},{en:"Oink",pt:"Ronc ronc"},{en:"Baa",pt:"Bé"}],correct:1}]},{id:"culture",icon:"🎨",color:"#bc8cff",label:{en:"Culture",pt:"Cultura"},questions:[{q:{en:"How many strings does a guitar usually have?",pt:"Quantas cordas tem normalmente uma guitarra?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"8",pt:"8"}],correct:2},{q:{en:'Who wrote the fairy tale "Cinderella"?',pt:'Quem escreveu o conto "A Gata Borralheira"?'},options:[{en:"Hans Christian Andersen",pt:"Hans Christian Andersen"},{en:"Charles Perrault",pt:"Charles Perrault"},{en:"Brothers Grimm",pt:"Irmãos Grimm"},{en:"Walt Disney",pt:"Walt Disney"}],correct:1},{q:{en:"What instrument has black and white keys?",pt:"Que instrumento tem teclas pretas e brancas?"},options:[{en:"Violin",pt:"Violino"},{en:"Trumpet",pt:"Trompete"},{en:"Piano",pt:"Piano"},{en:"Flute",pt:"Flauta"}],correct:2},{q:{en:"In which story does a boy travel to Neverland?",pt:"Em que história um menino viaja para a Terra do Nunca?"},options:[{en:"Pinocchio",pt:"Pinóquio"},{en:"Peter Pan",pt:"Peter Pan"},{en:"Alice in Wonderland",pt:"Alice no País das Maravilhas"},{en:"The Wizard of Oz",pt:"O Feiticeiro de Oz"}],correct:1},{q:{en:"Which instrument do you blow to play?",pt:"Que instrumento se sopra para tocar?"},options:[{en:"Drums",pt:"Bateria"},{en:"Guitar",pt:"Guitarra"},{en:"Flute",pt:"Flauta"},{en:"Harp",pt:"Harpa"}],correct:2},{q:{en:"What are the three primary colors?",pt:"Quais são as três cores primárias?"},options:[{en:"Green, purple, orange",pt:"Verde, roxo, laranja"},{en:"Red, blue, yellow",pt:"Vermelho, azul, amarelo"},{en:"Black, white, grey",pt:"Preto, branco, cinzento"},{en:"Pink, brown, gold",pt:"Rosa, castanho, dourado"}],correct:1},{q:{en:"Who painted the Mona Lisa?",pt:"Quem pintou a Mona Lisa?"},options:[{en:"Michelangelo",pt:"Miguel Ângelo"},{en:"Pablo Picasso",pt:"Pablo Picasso"},{en:"Leonardo da Vinci",pt:"Leonardo da Vinci"},{en:"Vincent van Gogh",pt:"Vincent van Gogh"}],correct:2},{q:{en:"In the story of the Three Little Pigs, what does the wolf do?",pt:"Na história dos Três Porquinhos, o que faz o lobo?"},options:[{en:"Sings songs",pt:"Canta canções"},{en:"Blows down houses",pt:"Derruba casas soprando"},{en:"Bakes cakes",pt:"Faz bolos"},{en:"Steals food",pt:"Rouba comida"}],correct:1},{q:{en:"Which instrument has strings you hit with sticks?",pt:"Que instrumento tem cordas que se tocam com baquetas?"},options:[{en:"Violin",pt:"Violino"},{en:"Piano",pt:"Piano"},{en:"Xylophone",pt:"Xilofone"},{en:"Banjo",pt:"Banjo"}],correct:2}]},{id:"history",icon:"🏛️",color:"#e3b341",label:{en:"History",pt:"História"},questions:[{q:{en:"Who invented the telephone?",pt:"Quem inventou o telefone?"},options:[{en:"Thomas Edison",pt:"Thomas Edison"},{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Benjamin Franklin",pt:"Benjamin Franklin"}],correct:1},{q:{en:"Who was the first person to walk on the Moon?",pt:"Quem foi a primeira pessoa a caminhar na Lua?"},options:[{en:"Buzz Aldrin",pt:"Buzz Aldrin"},{en:"Yuri Gagarin",pt:"Yuri Gagarin"},{en:"Neil Armstrong",pt:"Neil Armstrong"},{en:"John Glenn",pt:"John Glenn"}],correct:2},{q:{en:"What ancient civilization built the pyramids?",pt:"Que civilização antiga construiu as pirâmides?"},options:[{en:"Romans",pt:"Romanos"},{en:"Greeks",pt:"Gregos"},{en:"Egyptians",pt:"Egípcios"},{en:"Vikings",pt:"Vikings"}],correct:2},{q:{en:"Who was Christopher Columbus?",pt:"Quem foi Cristóvão Colombo?"},options:[{en:"A famous painter",pt:"Um famoso pintor"},{en:"An explorer who sailed to America",pt:"Um explorador que navegou até à América"},{en:"A Roman emperor",pt:"Um imperador romano"},{en:"A scientist",pt:"Um cientista"}],correct:1},{q:{en:"Who invented the light bulb?",pt:"Quem inventou a lâmpada elétrica?"},options:[{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Albert Einstein",pt:"Albert Einstein"},{en:"Thomas Edison",pt:"Thomas Edison"}],correct:3},{q:{en:"What did the ancient Romans build across their empire to travel?",pt:"O que os romanos construíram pelo império para viajar?"},options:[{en:"Canals",pt:"Canais"},{en:"Railways",pt:"Comboios"},{en:"Roads",pt:"Estradas"},{en:"Bridges only",pt:"Apenas pontes"}],correct:2},{q:{en:"What did Vasco da Gama discover?",pt:"O que descobriu Vasco da Gama?"},options:[{en:"A sea route to India",pt:"O caminho marítimo para a Índia"},{en:"The Americas",pt:"As Américas"},{en:"Australia",pt:"A Austrália"},{en:"The South Pole",pt:"O Polo Sul"}],correct:0},{q:{en:"Which ancient wonder is still standing today?",pt:"Qual maravilha antiga ainda existe hoje?"},options:[{en:"The Colossus of Rhodes",pt:"O Colosso de Rodes"},{en:"The Hanging Gardens",pt:"Os Jardins Suspensos"},{en:"The Great Pyramid of Giza",pt:"A Grande Pirâmide de Gizé"},{en:"The Lighthouse of Alexandria",pt:"O Farol de Alexandria"}],correct:2},{q:{en:"In what year did the first man land on the Moon?",pt:"Em que ano o primeiro homem pousou na Lua?"},options:[{en:"1959",pt:"1959"},{en:"1969",pt:"1969"},{en:"1979",pt:"1979"},{en:"1989",pt:"1989"}],correct:1}]},{id:"sports",icon:"⚽",color:"#f78166",label:{en:"Sports",pt:"Desporto"},questions:[{q:{en:"How many players are on a football (soccer) team on the field?",pt:"Quantos jogadores tem uma equipa de futebol em campo?"},options:[{en:"9",pt:"9"},{en:"10",pt:"10"},{en:"11",pt:"11"},{en:"12",pt:"12"}],correct:2},{q:{en:"How often are the Summer Olympics held?",pt:"De quantos em quantos anos se realizam os Jogos Olímpicos de Verão?"},options:[{en:"Every 2 years",pt:"De 2 em 2 anos"},{en:"Every 3 years",pt:"De 3 em 3 anos"},{en:"Every 4 years",pt:"De 4 em 4 anos"},{en:"Every 5 years",pt:"De 5 em 5 anos"}],correct:2},{q:{en:"In basketball, how many points is a regular shot worth?",pt:"No basquetebol, quantos pontos vale um cesto normal?"},options:[{en:"1",pt:"1"},{en:"2",pt:"2"},{en:"3",pt:"3"},{en:"4",pt:"4"}],correct:1},{q:{en:"In which sport do you use a racket and a shuttlecock?",pt:"Em que desporto se usa uma raquete e um volante?"},options:[{en:"Tennis",pt:"Ténis"},{en:"Squash",pt:"Squash"},{en:"Badminton",pt:"Badminton"},{en:"Table tennis",pt:"Ténis de mesa"}],correct:2},{q:{en:"Who is famous for winning 23 Olympic gold medals in swimming?",pt:"Quem é famoso por ganhar 23 medalhas de ouro olímpicas em natação?"},options:[{en:"Ian Thorpe",pt:"Ian Thorpe"},{en:"Ryan Lochte",pt:"Ryan Lochte"},{en:"Michael Phelps",pt:"Michael Phelps"},{en:"Mark Spitz",pt:"Mark Spitz"}],correct:2},{q:{en:"How many players are on each side in volleyball?",pt:"Quantos jogadores tem cada equipa no voleibol?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:1},{q:{en:"What sport uses a puck instead of a ball?",pt:"Que desporto usa um disco em vez de bola?"},options:[{en:"Lacrosse",pt:"Lacrosse"},{en:"Polo",pt:"Polo"},{en:"Ice hockey",pt:"Hóquei no gelo"},{en:"Baseball",pt:"Basebol"}],correct:2},{q:{en:"In tennis, what is it called when the score is tied at 40-40?",pt:"No ténis, como se chama quando o marcador está 40-40?"},options:[{en:"Tie",pt:"Empate"},{en:"Deuce",pt:"Deuce"},{en:"Love",pt:"Love"},{en:"Match point",pt:"Match point"}],correct:1},{q:{en:"How many rings are on the Olympic flag?",pt:"Quantos anéis tem a bandeira olímpica?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"}],correct:1}]}],d=n.keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=n.keyframes`
  0%   { transform: scale(0.7); opacity: 0; }
  60%  { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); }
`,u=n.keyframes`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.08); }
`,m=n.keyframes`
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
`,f=n.keyframes`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,g=n.keyframes`
  0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`,h=n.keyframes`
  from { width: 0; }
`,x=n.keyframes`
  from { width: 100%; }
  to   { width: 0%; }
`,b=n.keyframes`
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1); }
`,y=r.default.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${i.w4.colors.mainBg};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  padding: ${i.w4.spacing.lg};
  animation: ${d} 0.3s ease;

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.md};
  }
`,w=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.md};
  margin-bottom: ${i.w4.spacing.xl};
`,v=r.default.button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  min-height: 44px;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    border-color: ${i.w4.colors.accent};
  }
`,$=r.default.h1`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 700;
  margin: 0;
  flex: 1;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: ${i.w4.typography.fontSizeMd};
  }
`,j=r.default.div`display:flex;gap:2px;padding:2px;background:${i.w4.colors.mainBg};border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.md};margin-bottom:${i.w4.spacing.md};`,k=r.default.button`padding:8px 18px;border:none;border-radius:${i.w4.borderRadius.sm};font-size:14px;min-height:36px;font-weight:600;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:background 0.2s,color 0.2s;background:${({active:e})=>e?"rgba(59,130,246,0.18)":"transparent"};color:${({active:e})=>e?"#3b82f6":i.w4.colors.mainTextMuted};&:hover{color:#3b82f6;background:rgba(59,130,246,0.1);}`,z=r.default.button`padding:14px 32px;background:#3b82f6;border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:48px;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,0.4);}`,S=r.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.lg};

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${i.w4.spacing.md};
  }
`,C=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.xl} ${i.w4.spacing.lg};
  background: ${i.w4.colors.surface};
  border: 2px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  color: ${i.w4.colors.mainText};
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  min-height: 44px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({catColor:e})=>e};
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({catColor:e})=>e};
    box-shadow: 0 8px 24px ${({catColor:e})=>`${e}30`};
  }

  &:hover::before {
    opacity: 0.15;
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.lg} ${i.w4.spacing.md};
  }
`,T=r.default.span`
  font-size: 2.5rem;
  line-height: 1;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: 2rem;
  }
`,M=r.default.span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
`,A=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${({catColor:e})=>e};
  font-weight: 600;
`,R=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.lg};
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
`,_=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${i.w4.spacing.md};
`,B=r.default.div`
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.md};
  background: ${i.w4.colors.surface};
  border: 1px solid ${({catColor:e})=>e};
  border-radius: 99px;
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${({catColor:e})=>e};
`,I=r.default.div`
  flex: 1;
  height: 8px;
  background: ${i.w4.colors.surface};
  border-radius: 99px;
  overflow: hidden;
  border: 1px solid ${i.w4.colors.border};
`,E=r.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: ${({catColor:e})=>e};
  border-radius: 99px;
  transition: width 0.4s ease;
  animation: ${h} 0.5s ease;
`,P=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  white-space: nowrap;
`,D=r.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-top: 3px solid ${({catColor:e})=>e};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xl};
  animation: ${d} 0.25s ease;
  overflow: hidden;

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.lg};
  }
`,L=r.default.div`
  height: 4px;
  background: ${({urgent:e,catColor:a})=>e?"#f85149":a};
  border-radius: 2px;
  margin-bottom: ${i.w4.spacing.md};
  animation: ${x} ${({duration:e})=>e}s linear forwards;
  transform-origin: left;
`,O=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({urgent:e})=>e?"#f85149":i.w4.colors.mainTextMuted};
  transition: color 0.3s ease;
`,F=r.default.p`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 ${i.w4.spacing.lg};
  color: ${i.w4.colors.mainText};

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: ${i.w4.typography.fontSizeMd};
  }
`,N=r.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${i.w4.spacing.md};

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,H=r.default.button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  background: ${({status:e})=>"correct"===e||"highlight"===e?"rgba(63, 185, 80, 0.15)":"wrong"===e?"rgba(248, 81, 73, 0.15)":i.w4.colors.mainBg};
  border: 2px solid
    ${({status:e,catColor:a})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":"idle"===e?i.w4.colors.border:a};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 500;
  cursor: ${({status:e})=>"idle"===e?"pointer":"default"};
  text-align: left;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  min-height: 56px;
  animation: ${({status:e})=>"correct"===e?`${u} 0.4s ease`:"wrong"===e?`${m} 0.4s ease`:"none"};

  &:hover {
    background: ${({status:e,catColor:a})=>"idle"===e?`${a}18`:void 0};
    border-color: ${({status:e,catColor:a})=>"idle"===e?a:void 0};
    transform: ${({status:e})=>"idle"===e?"translateY(-1px)":"none"};
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: ${i.w4.typography.fontSizeBase};
    min-height: 52px;
  }
`,G=r.default.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-weight: 700;
  font-size: ${i.w4.typography.fontSizeSm};
  flex-shrink: 0;
  background: ${({status:e,catColor:a})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":a};
  color: #fff;
`,Y=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.md};
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  background: ${({isCorrect:e})=>e?"rgba(63, 185, 80, 0.12)":"rgba(248, 81, 73, 0.12)"};
  border: 1px solid ${({isCorrect:e})=>e?"#3fb950":"#f85149"};
  color: ${({isCorrect:e})=>e?"#3fb950":"#f85149"};
  animation: ${p} 0.35s ease;
`,q=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.xl};
  max-width: 560px;
  margin: 0 auto;
  width: 100%;
  animation: ${d} 0.35s ease;
`,V=r.default.div`
  width: 100%;
  background: ${i.w4.colors.surface};
  border: 2px solid ${({catColor:e})=>e};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xl};
  text-align: center;
  position: relative;
  overflow: hidden;
`,W=r.default.h2`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 800;
  margin: 0 0 ${i.w4.spacing.sm};
`,J=r.default.p`
  font-size: 5rem;
  font-weight: 900;
  color: ${({catColor:e})=>e};
  margin: 0;
  line-height: 1;
  animation: ${b} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  text-shadow: 0 0 40px ${({catColor:e})=>`${e}50`};
`,X=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  margin: ${i.w4.spacing.xs} 0 ${i.w4.spacing.lg};
`,U=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  margin-bottom: ${i.w4.spacing.lg};
`,K=r.default.span`
  font-size: 2.5rem;
  opacity: ${({lit:e})=>e?1:.25};
  filter: ${({lit:e})=>e?"drop-shadow(0 0 8px gold)":"none"};
  animation: ${({lit:e})=>e?`${g} 0.5s ease`:"none"};
  animation-delay: ${({delay:e})=>e}s;
  animation-fill-mode: both;
`,Q=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainText};
  margin: 0;
`,Z=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  width: 100%;

  @media (max-width: ${i.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,ee=r.default.button`
  flex: 1;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  min-height: 48px;
  border: 2px solid
    ${({primary:e,catColor:a})=>e?a??i.w4.colors.accent:i.w4.colors.border};
  background: ${({primary:e,catColor:a})=>e?a??i.w4.colors.accent:"transparent"};
  color: ${({primary:e})=>e?"#fff":i.w4.colors.mainText};

  &:hover {
    transform: translateY(-2px);
    background: ${({primary:e,catColor:a})=>e?a??i.w4.colors.accentHover:i.w4.colors.sidebarHover};
  }
`,ae=r.default.div`
  position: fixed;
  top: -20px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px;
  animation: ${f} ${({duration:e})=>e}s
    ${({delay:e})=>e}s ease-in forwards;
  pointer-events: none;
  z-index: 9999;
`,oe=["#f0883e","#58a6ff","#3fb950","#e3b341","#bc8cff","#f78166"];function te({count:e=60}){const a=(0,t.useMemo)(()=>Array.from({length:e},(e,a)=>({id:a,left:100*Math.random(),delay:2*Math.random(),duration:2.5+2*Math.random(),color:oe[Math.floor(Math.random()*oe.length)]??"#58a6ff",size:6+Math.floor(8*Math.random())})),[e]);return(0,l.jsx)(l.Fragment,{children:a.map(e=>(0,l.jsx)(ae,{left:e.left,delay:e.delay,duration:e.duration,color:e.color,size:e.size},e.id))})}const re="atlantis-familyquiz-scores";function ne(){try{const e=localStorage.getItem(re);return e?JSON.parse(e):{}}catch{return{}}}function ie(e,a){const o=ne();if((o[e]??0)<a){o[e]=a;try{localStorage.setItem(re,JSON.stringify(o))}catch{}}}const se={title:{en:"Family Quiz",pt:"Quiz da Família"},chooseCategory:{en:"Choose a category",pt:"Escolhe uma categoria"},question:{en:"Question",pt:"Pergunta"},of:{en:"of",pt:"de"},score:{en:"Score",pt:"Pontos"},correct:{en:"✓ Correct!",pt:"✓ Correto!"},correctBonus:{en:"✓ Correct! +5 speed bonus!",pt:"✓ Correto! +5 bónus de velocidade!"},wrong:{en:"✗ Wrong",pt:"✗ Errado"},timeUp:{en:"⏰ Time's up!",pt:"⏰ Tempo esgotado!"},results:{en:"Results",pt:"Resultados"},retry:{en:"Play Again",pt:"Jogar de Novo"},categories:{en:"Categories",pt:"Categorias"},highScore:{en:"Best:",pt:"Melhor:"},msg3stars:{en:"🎉 Amazing! You got everything right!",pt:"🎉 Incrível! Acertaste tudo!"},msg2stars:{en:"👏 Well done! Keep it up!",pt:"👏 Muito bem! Continua assim!"},msg1star:{en:"💪 Good try! Study and try again!",pt:"💪 Boa tentativa! Estuda e tenta outra vez!"},back:{en:"← Back",pt:"← Voltar"}};function le(e,a){const o=se[e];return"pt"===a?o.pt:o.en}const ce=["A","B","C","D"];function de({lang:e,onBack:a,canOnline:o}){const[r,n]=(0,t.useState)("categories"),[d,p]=(0,t.useState)("solo"),[u,m]=(0,t.useState)(null),[f,g]=(0,t.useState)(0),[h,x]=(0,t.useState)(0),[b,ae]=(0,t.useState)({}),[oe,re]=(0,t.useState)("idle"),[se,de]=(0,t.useState)(null),[pe,ue]=(0,t.useState)(ne),[me,fe]=(0,t.useState)(15),[ge,he]=(0,t.useState)(0),[xe,be]=(0,t.useState)(!1),[ye,we]=(0,t.useState)(new Set),ve=(0,t.useRef)(Date.now()),$e=(0,t.useRef)(null),je=(0,t.useRef)(null),ke=(0,t.useRef)(null),ze=(0,t.useRef)(!1),[Se]=(0,t.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),Ce=(0,t.useRef)(b);Ce.current=b;const Te=(0,t.useRef)(u);Te.current=u;const Me=(0,t.useRef)(f);Me.current=f;const Ae=(0,t.useCallback)(e=>{switch(e.type){case"guest-joined":_e.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),_e.current.sendEvent({type:"host-ack",name:Se,playerId:_e.current.room?.playerId??"",players:_e.current.room?.players??[]});break;case"host-ack":_e.current.setConnected(e.name),e.players&&_e.current.setPlayers([...e.players,{id:_e.current.room?.playerId??"",name:Se,isHost:!1}]);break;case"player-list":_e.current.setPlayers(e.players);break;case"game-state":{const a=e.payload;if("start-question"===a.action){const e=a.categoryId,o=a.questionIndex,t=c.find(a=>a.id===e);t&&(m(t),Te.current=t,g(o),Me.current=o,re("idle"),de(null),be(!1),we(new Set),n("playing"))}else if("player-answered"===a.action){const e=a.playerId,o=a.pts;if("host"===_e.current.room?.role&&o>0){const a={...Ce.current,[e]:(Ce.current[e]??0)+o};ae(a),Ce.current=a}we(a=>{const o=new Set([...a,e]);if("host"===_e.current.room?.role){const e=_e.current.room?.players.length??1;o.size>=e&&setTimeout(()=>Ie.current(),500)}return o})}else if("question-result"===a.action)ae(a.scores);else if("show-answer"===a.action){const e=a.correct;null!==se?re(se===e?"correct":"wrong"):(re("wrong"),de(null)),ae(a.scores)}else"game-over"===a.action&&(ae(a.scores),n("results"));break}case"player-left":e.playerId&&_e.current.removePlayer(e.playerId)}},[Se,se]),Re=(0,s.Ky)({gameId:"familyquiz",playerName:Se,onEvent:Ae}),_e=(0,t.useRef)(Re);_e.current=Re;const Be=(0,s.zj)({gameId:"familyquiz",enabled:"online"===d&&("categories"===r||"lobby"===r)}),Ie=(0,t.useRef)(()=>{}),Ee=(0,t.useCallback)(()=>{$e.current&&(clearInterval($e.current),$e.current=null)},[]),Pe=(0,t.useCallback)(()=>{je.current&&(clearTimeout(je.current),je.current=null),Ee()},[Ee]);(0,t.useEffect)(()=>()=>Pe(),[Pe]);const De=(0,t.useCallback)(()=>{Ee(),fe(15),he(e=>e+1),ve.current=Date.now(),$e.current=setInterval(()=>{fe(e=>e<=1?0:e-1)},1e3)},[Ee]),Le=(0,t.useCallback)(e=>{Pe(),m(e),g(0),x(0),re("idle"),de(null),n("playing")},[Pe]);(0,t.useEffect)(()=>{"playing"===r&&"idle"===oe&&De()},[r,f]),(0,t.useEffect)(()=>{if(0===me&&"playing"===r&&"idle"===oe&&u){Ee(),re("wrong"),de(null),be(!1);const e=h;je.current=setTimeout(()=>{const a=f+1;a>=u.questions.length?(ie(u.id,e),ue(ne()),x(e),n("results")):(x(e),g(a),re("idle"),de(null))},1500)}},[me,r,oe,u,f,h,Ee]);const Oe=(0,t.useCallback)(()=>{if(!Te.current)return;const e=Te.current,a=Me.current+1;_e.current.sendEvent({type:"game-state",payload:{action:"show-answer",correct:e.questions[Me.current].correct,scores:Ce.current}}),setTimeout(()=>{a>=e.questions.length?(_e.current.sendEvent({type:"game-state",payload:{action:"game-over",scores:Ce.current}}),n("results")):(we(new Set),g(a),Me.current=a,re("idle"),de(null),be(!1),_e.current.sendEvent({type:"game-state",payload:{action:"start-question",categoryId:e.id,questionIndex:a}}))},2e3)},[]);Ie.current=Oe;const Fe=(0,t.useCallback)(e=>{if("idle"!==oe||!u)return;const a=u.questions[f];if(!a)return;Ee();const o=(Date.now()-ve.current)/1e3,t=e===a.correct,r=t&&o<5,i=r?5:0;if(de(e),"online"===d){const a=_e.current.room?.playerId??"",n=(t?10:0)+i;if(n>0){const e={...Ce.current,[a]:(Ce.current[a]??0)+n};ae(e),Ce.current=e,x(e=>e+n)}return be(r),_e.current.sendEvent({type:"game-state",payload:{action:"player-answered",playerId:a,optionIdx:e,pts:n,elapsed:o}}),void("host"===_e.current.room?.role&&(we(e=>{const o=new Set([...e,a]),t=_e.current.room?.players.length??1;return o.size>=t&&setTimeout(()=>Oe(),500),o}),_e.current.sendEvent({type:"game-state",payload:{action:"question-result",scores:Ce.current}})))}be(r),re(t?"correct":"wrong");const s=h+(t?10:0)+i;je.current=setTimeout(()=>{const e=f+1;e>=u.questions.length?(ie(u.id,s),ue(ne()),x(s),n("results")):(x(s),g(e),re("idle"),de(null),be(!1))},1500)},[oe,u,f,h,Ee,d,Oe]);if("categories"===r){const a=e=>{"online"===d?(m(e),Te.current=e,n("lobby")):Le(e)};return(0,l.jsxs)(y,{children:[(0,l.jsx)(w,{children:(0,l.jsxs)($,{children:["🧠 ",le("title",e)]})}),o&&(0,l.jsxs)(j,{children:[(0,l.jsxs)(k,{active:"solo"===d,onClick:()=>p("solo"),children:["🎯 ","pt"===e?"Sozinho":"Solo"]}),(0,l.jsx)(k,{active:"online"===d,onClick:()=>p("online"),children:"🌐 Online"})]}),(0,l.jsx)("p",{style:{color:i.w4.colors.mainTextMuted,marginBottom:i.w4.spacing.lg,fontSize:i.w4.typography.fontSizeMd},children:le("chooseCategory",e)}),(0,l.jsx)(S,{children:c.map(o=>{const t=pe[o.id];return(0,l.jsxs)(C,{catColor:o.color,onClick:()=>a(o),children:[(0,l.jsx)(T,{children:o.icon}),(0,l.jsx)(M,{children:"pt"===e?o.label.pt:o.label.en}),void 0!==t&&"solo"===d&&(0,l.jsxs)(A,{catColor:o.color,children:[le("highScore",e)," ",t,"/",10*o.questions.length]})]},o.id)})})]})}if("lobby"===r)return(0,l.jsxs)(y,{children:[(0,l.jsx)(w,{children:(0,l.jsxs)($,{children:["🧠 ",le("title",e)]})}),Re.room?.connected?(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[(0,l.jsx)("p",{style:{color:i.w4.colors.mainTextMuted,fontSize:i.w4.typography.fontSizeMd},children:"host"===Re.room.role?`${Re.room.players.length} ${"pt"===e?"jogadores":"players"}`:"pt"===e?"À espera do anfitrião…":"Waiting for host…"}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:Re.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===Re.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),u&&(0,l.jsxs)("p",{style:{color:i.w4.colors.mainTextMuted,fontSize:14},children:[u.icon," ","pt"===e?u.label.pt:u.label.en]}),"host"===Re.room.role&&u&&(0,l.jsx)(z,{onClick:()=>{g(0),Me.current=0,x(0),ae({}),Ce.current={},we(new Set),re("idle"),de(null),n("playing"),Re.sendEvent({type:"game-state",payload:{action:"start-question",categoryId:u.id,questionIndex:0}})},children:"pt"===e?"Começar!":"Start!"})]}):(0,l.jsx)(s.XB,{lang:e,room:Re.room,error:Re.error,availableRooms:Be.rooms,onCreateRoom:()=>{const{code:e,roomName:a}=Re.createRoom();Be.publishRoom({code:e,roomName:a,hostName:Se,playerCount:1})},onJoinRoom:e=>Re.joinRoom(e),onLeaveRoom:()=>{Be.unpublishRoom(),Re.leaveRoom(),n("categories")}})]});if("playing"===r&&u){const a=u.questions[f];if(!a)return null;const o=u.questions.length,t=(f+1)/o*100;return(0,l.jsxs)(y,{children:[(0,l.jsxs)(w,{children:[(0,l.jsx)(v,{onClick:()=>{Pe(),n("categories")},children:le("back",e)}),(0,l.jsxs)($,{children:[u.icon," ","pt"===e?u.label.pt:u.label.en]})]}),(0,l.jsxs)(R,{children:[(0,l.jsxs)(_,{children:[(0,l.jsxs)(B,{catColor:u.color,children:[le("score",e),": ",h]}),(0,l.jsx)(I,{children:(0,l.jsx)(E,{pct:t,catColor:u.color})}),(0,l.jsxs)(P,{children:[le("question",e)," ",f+1," ",le("of",e)," ",o]}),(0,l.jsxs)(O,{urgent:me<=5,children:[me,"s"]})]}),(0,l.jsxs)(D,{catColor:u.color,children:[(0,l.jsx)(L,{duration:15,catColor:u.color,urgent:me<=5},ge),(0,l.jsx)(F,{children:"pt"===e?a.q.pt:a.q.en}),(0,l.jsx)(N,{children:a.options.map((o,t)=>{let r="idle";return"idle"!==oe&&(t===a.correct?r=se===t?"correct":"highlight":t===se&&(r="wrong")),(0,l.jsxs)(H,{status:r,catColor:u.color,disabled:"idle"!==oe,...(n=t,{onTouchStart:e=>{ke.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!ke.current)return;const a=Math.abs(e.changedTouches[0].clientX-ke.current.x),o=Math.abs(e.changedTouches[0].clientY-ke.current.y);ke.current=null,a>8||o>8||(ze.current=!0,Fe(n))},onClick:()=>{ze.current?ze.current=!1:Fe(n)}}),children:[(0,l.jsx)(G,{status:r,catColor:u.color,children:ce[t]}),"pt"===e?o.pt:o.en]},t);var n})})]},f),"idle"!==oe&&(0,l.jsx)(Y,{isCorrect:"correct"===oe,children:le("correct"===oe?xe?"correctBonus":"correct":null===se?"timeUp":"wrong",e)})]})]})}if("results"===r&&u){const a=10*u.questions.length,o=Math.round(h/a*100),t=100===o?3:o>=60?2:1,r={3:le("msg3stars",e),2:le("msg2stars",e),1:le("msg1star",e)};return(0,l.jsxs)(y,{children:[3===t&&(0,l.jsx)(te,{}),(0,l.jsxs)(w,{children:[(0,l.jsx)(v,{onClick:()=>n("categories"),children:le("back",e)}),(0,l.jsxs)($,{children:[u.icon," ",le("results",e)]})]}),(0,l.jsxs)(q,{children:[(0,l.jsxs)(V,{catColor:u.color,children:[(0,l.jsx)(W,{children:le("results",e)}),(0,l.jsx)(J,{catColor:u.color,children:h}),(0,l.jsxs)(X,{children:[o,"% — ",h,"/",a]}),(0,l.jsx)(U,{children:[1,2,3].map(e=>(0,l.jsx)(K,{lit:e<=t,delay:.15*(e-1),children:"⭐"},e))}),(0,l.jsx)(Q,{children:r[t]})]}),"online"===d&&(Re.room?.players??[]).length>1&&(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6,width:"100%",maxWidth:300,marginTop:12},children:(Re.room?.players??[]).map(e=>({...e,pts:b[e.id]??0})).sort((e,a)=>a.pts-e.pts).map((e,a)=>(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:i.w4.colors.surface,border:`1px solid ${e.id===Re.room?.playerId?i.w4.colors.accent:i.w4.colors.border}`,borderRadius:12},children:[(0,l.jsx)("span",{style:{fontSize:16,minWidth:24},children:0===a?"🥇":1===a?"🥈":2===a?"🥉":`${a+1}.`}),(0,l.jsx)("span",{style:{flex:1,fontWeight:600,color:e.id===Re.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:e.name}),(0,l.jsx)("span",{style:{fontSize:18,fontWeight:800,color:0===a?"#3fb950":i.w4.colors.mainText},children:e.pts})]},e.id))}),(0,l.jsx)(Z,{children:"online"===d?(0,l.jsx)(ee,{onClick:()=>{Re.leaveRoom(),Be.unpublishRoom(),p("solo"),n("categories")},children:le("categories",e)}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ee,{primary:!0,catColor:u.color,onClick:()=>Le(u),children:le("retry",e)}),(0,l.jsx)(ee,{onClick:()=>n("categories"),children:le("categories",e)})]})})]})]})}return null}},5693(e,a,o){o.d(a,{p:()=>C});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(5723);const l=["🌳","🪨","📦","🏠","🗑️","🪑","🚗","🌺","🪴","🧱","🏢","🎪","⛺","🗿","🛒"],c=["🌳","🪨","📦","🪑","🪴","🧱"];function d(e){return e[Math.floor(Math.random()*e.length)]}const p=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,m=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,f=n.keyframes`0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}`,g=n.keyframes`0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}`,h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${i.w4.spacing.lg};gap:${i.w4.spacing.lg};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 40% 30%,rgba(63,185,80,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${p} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:340px;`,y=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=r.default.span`font-size:72px;animation:${m} 1s ease-in-out infinite;`,v=r.default.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:300px;width:100%;`,$=r.default.button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,48px);
  background:${({selected:e})=>e?"rgba(63,185,80,0.15)":i.w4.colors.surface};
  border:3px solid ${({selected:e})=>e?"#3fb950":i.w4.colors.border};
  border-radius:${i.w4.borderRadius.lg};cursor:pointer;transition:all 0.15s;min-height:70px;
  &:hover{border-color:#3fb950;transform:scale(1.05);}
  &:active{transform:scale(0.95);}
`,j=r.default.div`
  display:grid;grid-template-columns:repeat(${6},1fr);gap:6px;
  max-width:420px;width:100%;animation:${p} 0.3s ease;
`,k=r.default.button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;
  font-size:clamp(24px,5vw,36px);background:${i.w4.colors.surface};
  border:2px solid ${({found:e,wrong:a})=>e?"#3fb950":a?"#f97583":i.w4.colors.border};
  border-radius:${i.w4.borderRadius.md};cursor:pointer;transition:all 0.15s;min-height:48px;
  background: ${({found:e,wrong:a})=>e?"rgba(63,185,80,0.15)":a?"rgba(249,117,131,0.1)":i.w4.colors.surface};
  animation: ${({found:e,wrong:a})=>e?u:a?f:"none"} ${({found:e})=>e?"0.3s ease":"0.4s ease"};
  opacity: ${({revealed:e,found:a})=>e&&!a?.4:1};
  cursor: ${({revealed:e})=>e?"default":"pointer"};
  &:hover:not(:disabled){transform:scale(1.08);border-color:${i.w4.colors.accent};}
  &:active:not(:disabled){transform:scale(0.95);}
`,z=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};`,S=r.default.div`font-size:48px;animation:${g} 0.5s ease-in-out;`;function C({lang:e}){const[a,o]=(0,t.useState)("menu"),[r,n]=(0,t.useState)(0),[i,p]=(0,t.useState)(0),[u,m]=(0,t.useState)(c[0]),[f,g]=(0,t.useState)([]),[C,T]=(0,t.useState)(20),[M,A]=(0,t.useState)(0),[R,_]=(0,t.useState)(!1),[B,I]=(0,t.useState)(null),[E,P]=(0,t.useState)(()=>{try{return Number(localStorage.getItem("atlantis-hideseek-best")??"0")}catch{return 0}}),D=(0,t.useRef)(null),L=(0,t.useCallback)(()=>{m(d(c)),o("hiding")},[]),O=(0,t.useCallback)(()=>{const e=function(e){const a=Array.from({length:30},()=>({emoji:d(l),isHider:!1,revealed:!1}));a[Math.floor(Math.random()*a.length)]={emoji:e,isHider:!0,revealed:!1};const o=2+Math.floor(3*Math.random());for(let t=0;t<o;t++){const o=Math.floor(Math.random()*a.length);a[o].isHider||(a[o].emoji=e)}return a}(u);g(e),T(20),A(0),_(!1),I(null),o("seeking")},[u]);(0,t.useEffect)(()=>{if("seeking"===a)return D.current=setInterval(()=>{T(e=>e<=1?(D.current&&clearInterval(D.current),o("reveal"),0):e-1)},1e3),()=>{D.current&&clearInterval(D.current)}},[a]);const F=(0,t.useCallback)(e=>{if("seeking"===a&&!R&&!f[e].revealed)if(A(e=>e+1),f[e].isHider){_(!0),D.current&&clearInterval(D.current);const a=Math.max(0,5*C-10*M),t=100+a;p(e=>e+t),g(a=>a.map((a,o)=>o===e?{...a,revealed:!0}:a)),setTimeout(()=>{const e=r+1;if(n(e),e>=3){const e=i+100+a;if(e>E){P(e);try{localStorage.setItem("atlantis-hideseek-best",String(e))}catch{}}o("scores")}else L()},1500)}else I(e),g(a=>a.map((a,o)=>o===e?{...a,revealed:!0}:a)),setTimeout(()=>I(null),500)},[a,R,f,C,M,r,i,E,L]),N=(0,t.useCallback)(()=>{n(0),p(0),L()},[L]);if("menu"===a)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:["🔍 ","pt"===e?"Esconde-Esconde!":"Hide & Seek!"]}),(0,s.jsx)(b,{children:"pt"===e?"Esconde-te como um objeto e vê se te encontram!":"Disguise yourself as an object and see if they find you!"}),E>0&&(0,s.jsxs)(b,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",E]}),(0,s.jsx)(y,{accent:"#3fb950",onClick:N,children:"pt"===e?"Jogar!":"Play!"})]});if("hiding"===a)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:["🫣 ","pt"===e?"Escolhe um disfarce!":"Pick a disguise!"]}),(0,s.jsx)(b,{children:"pt"===e?"Transforma-te num objeto!":"Turn into an object!"}),(0,s.jsx)(v,{children:c.map(e=>(0,s.jsx)($,{selected:u===e,onClick:()=>m(e),children:e},e))}),(0,s.jsxs)(y,{accent:"#3fb950",onClick:O,children:["pt"===e?"Esconder!":"Hide!"," ",u]})]});if("reveal"===a){const a=f.findIndex(e=>e.isHider);return(0,s.jsxs)(h,{children:[(0,s.jsx)(x,{children:"pt"===e?"Tempo esgotado!":"Time's up!"}),(0,s.jsx)(b,{children:"pt"===e?"Estava aqui:":"Was hiding here:"}),(0,s.jsxs)(S,{children:[f[a]?.emoji??"?"," → 🐸"]}),(0,s.jsx)(y,{accent:"#3fb950",onClick:()=>{const e=r+1;if(n(e),e>=3){if(i>E){P(i);try{localStorage.setItem("atlantis-hideseek-best",String(i))}catch{}}o("scores")}else L()},children:"➡️"})]})}if("scores"===a)return(0,s.jsxs)(h,{children:[(0,s.jsx)(w,{children:"🏆"}),(0,s.jsx)(x,{children:"pt"===e?"Resultados":"Results"}),(0,s.jsxs)(z,{color:"#3fb950",children:["⭐ ",i]}),i>=E&&i>0&&(0,s.jsxs)(b,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,s.jsx)(y,{accent:"#3fb950",onClick:()=>o("menu"),children:"Menu"})]});const H=C<=5?"#f97583":C<=10?"#f59e0b":"#3fb950";return(0,s.jsxs)(h,{children:[(0,s.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,s.jsxs)(z,{color:"#3fb950",children:["⭐ ",i]}),(0,s.jsxs)(z,{color:H,children:["⏱️ ",C,"s"]}),(0,s.jsxs)(z,{children:["pt"===e?"Tentativas":"Tries",": ",M]})]}),(0,s.jsx)(b,{children:"pt"===e?"🔍 Encontra quem se escondeu!":"🔍 Find the hidden one!"}),(0,s.jsx)(j,{children:f.map((e,a)=>(0,s.jsx)(k,{revealed:e.revealed&&!e.isHider,found:e.revealed&&e.isHider,wrong:B===a,onClick:()=>F(a),disabled:e.revealed,children:e.revealed&&e.isHider?"🐸":e.emoji},a))})]})}},782(e,a,o){o.d(a,{v:()=>R});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(233),l=o(5723);const c={_:null,R:"#ff4444",O:"#ff8800",Y:"#ffcc00",G:"#44cc44",B:"#4488ff",K:"#333333",W:"#cccccc"},d={fire:[["_","_","_","Y","Y","_","_","_"],["_","_","Y","O","O","Y","_","_"],["_","Y","O","R","R","O","Y","_"],["_","Y","R","R","R","R","Y","_"],["Y","O","R","R","R","R","O","Y"],["Y","O","R","R","R","R","O","Y"],["_","Y","O","R","R","O","Y","_"],["_","_","Y","O","O","Y","_","_"]],spike:[["_","_","_","W","W","_","_","_"],["_","_","_","W","W","_","_","_"],["_","_","W","K","K","W","_","_"],["_","_","W","K","K","W","_","_"],["_","W","K","K","K","K","W","_"],["_","W","K","K","K","K","W","_"],["W","K","K","K","K","K","K","W"],["W","K","K","K","K","K","K","W"]],cactus:[["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","G","_","G","G","_","G","_"],["_","G","G","G","G","G","G","_"],["_","G","G","G","G","G","G","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"]],bomb:[["_","_","_","Y","_","_","_","_"],["_","_","Y","O","_","_","_","_"],["_","_","_","K","K","_","_","_"],["_","_","K","K","K","K","_","_"],["_","K","K","K","K","K","K","_"],["_","K","K","W","K","K","K","_"],["_","K","K","K","K","K","K","_"],["_","_","K","K","K","K","_","_"]],rock:[["_","_","_","W","W","_","_","_"],["_","_","W","K","K","W","_","_"],["_","W","K","K","K","K","W","_"],["W","K","K","W","K","K","K","W"],["W","K","K","K","K","K","K","W"],["W","K","K","K","K","K","K","W"]]},p=["fire","spike","cactus","bomb","rock"];function u({type:e,size:a=32,style:o,className:r}){const n=d[e],i=n.length,s=n[0].length,p=(0,t.useMemo)(()=>{const e=[];for(let a=0;a<i;a++)for(let o=0;o<s;o++){const t=c[n[a][o]];t&&e.push({x:o,y:a,color:t})}return e},[n,i,s]);return(0,l.jsx)("svg",{width:a,height:a*(i/s),viewBox:`0 0 ${s} ${i}`,style:{imageRendering:"pixelated",...o},className:r,children:p.map((e,a)=>(0,l.jsx)("rect",{x:e.x,y:e.y,width:1,height:1,fill:e.color},a))})}const m=75,f=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,g=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,h=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,x=r.default.div`
  flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:${i.w4.spacing.lg};gap:${i.w4.spacing.xl};overflow:hidden;min-height:0;
  background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(63,185,80,0.06) 0%,transparent 70%),
             radial-gradient(ellipse 50% 60% at 70% 80%,rgba(88,166,255,0.04) 0%,transparent 70%),#080b12;
`,b=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${f} 0.3s ease;`,y=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;`,w=r.default.div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:#3fb950;animation:${h} 0.5s ease;`,v=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}&:active{transform:translateY(-1px);}`,$=r.default.span`font-size:72px;animation:${g} 1s ease-in-out infinite;`,j=r.default.div`font-size:${i.w4.typography.fontSizeLg};font-weight:800;color:${i.w4.colors.mainText};`,k=r.default.div`
  position:relative;width:100%;max-width:600px;height:240px;
  background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};
  overflow:hidden;touch-action:manipulation;user-select:none;
`,z=r.default.div`
  position:absolute;top:${m}%;left:0;right:0;height:2px;
  background:rgba(63,185,80,0.4);
`,S=r.default.div`
  position:absolute;top:${m}%;left:0;right:0;bottom:0;
  background:linear-gradient(0deg,rgba(63,185,80,0.1),transparent);
`,C=r.default.div`
  position:absolute;
  left:${({left:e})=>e}%;top:${({top:e})=>e}%;
  transform:translate(-50%,-100%);
  transition:opacity 0.3s;
  ${({dead:e})=>e?"opacity:0.3;filter:grayscale(1);":""}
`,T=r.default.div`
  display:flex;gap:${i.w4.spacing.md};align-items:center;justify-content:center;
`,M=r.default.button`
  width:clamp(90px,22vw,130px);height:clamp(90px,22vw,130px);border-radius:50%;
  background:linear-gradient(145deg,#3fb950,#2ea043);border:4px solid rgba(255,255,255,0.2);
  font-size:clamp(1.8rem,4vw,2.5rem);color:#fff;font-weight:900;cursor:pointer;
  transition:transform 0.1s;box-shadow:0 8px 32px rgba(63,185,80,0.4);
  &:active{transform:scale(0.9);}
`,A=r.default.button`
  width:clamp(70px,18vw,100px);height:clamp(70px,18vw,100px);border-radius:50%;
  background:linear-gradient(145deg,#58a6ff,#3b82f6);border:3px solid rgba(255,255,255,0.2);
  font-size:clamp(1.5rem,3.5vw,2rem);color:#fff;font-weight:900;cursor:pointer;
  transition:transform 0.1s;box-shadow:0 6px 24px rgba(88,166,255,0.3);
  &:active{transform:scale(0.9);}
`;function R({lang:e}){const[a,o]=(0,t.useState)("menu"),[r,n]=(0,t.useState)(3),[i,c]=(0,t.useState)(0),[d,f]=(0,t.useState)(20),[g,h]=(0,t.useState)(m),[R,_]=(0,t.useState)(!1),[B,I]=(0,t.useState)([]),[E]=(0,t.useState)(()=>Math.floor(Math.random()*s.L.length)),[P,D]=(0,t.useState)(()=>{try{return Number(localStorage.getItem("atlantis-jumpparty-best")??"0")}catch{return 0}}),L=(0,t.useRef)(!1),O=(0,t.useRef)(20),F=(0,t.useRef)(m),N=(0,t.useRef)(0),H=(0,t.useRef)(!1),G=(0,t.useRef)(0),Y=(0,t.useRef)(0),q=(0,t.useRef)([]),V=(0,t.useRef)(0),W=(0,t.useRef)(null),J=(0,t.useCallback)(()=>{if(L.current||H.current)return;L.current=!0;const e=performance.now(),a=o=>{const t=o-e,r=Math.min(t/600,1),n=m-35*Math.sin(Math.PI*r);F.current=n,h(n),r<1?requestAnimationFrame(a):(F.current=m,h(m),L.current=!1)};requestAnimationFrame(a)},[]);(0,t.useEffect)(()=>{if("playing"!==a)return;const e=()=>{if(H.current)return;0!==N.current&&(O.current=Math.max(5,Math.min(95,O.current+1.5*N.current)),f(O.current)),q.current=q.current.map(e=>({...e,x:e.x-.8})).filter(e=>!(e.x<-10&&(G.current+=1,c(G.current),1)));const a=O.current,t=F.current;for(const e of q.current)if(Math.abs(e.x-a)<8&&t>=67){H.current=!0,_(!0);const e=G.current;if(e>P){D(e);try{localStorage.setItem("atlantis-jumpparty-best",String(e))}catch{}}return void setTimeout(()=>o("gameover"),600)}I([...q.current]),V.current=requestAnimationFrame(e)};return V.current=requestAnimationFrame(e),()=>cancelAnimationFrame(V.current)},[a,P]),(0,t.useEffect)(()=>{if("playing"!==a)return;const e=()=>{if(H.current)return;const a=++Y.current;q.current.push({id:a,type:p[Math.floor(Math.random()*p.length)],x:105});const o=1e3+1200*Math.random();W.current=setTimeout(e,o)};return W.current=setTimeout(e,800),()=>{W.current&&clearTimeout(W.current)}},[a]),(0,t.useEffect)(()=>{if("playing"!==a)return;const e=e=>{"Space"!==e.code&&"ArrowUp"!==e.key||(e.preventDefault(),J()),"ArrowLeft"===e.key&&(e.preventDefault(),N.current=-1),"ArrowRight"===e.key&&(e.preventDefault(),N.current=1)},o=e=>{"ArrowLeft"===e.key&&-1===N.current&&(N.current=0),"ArrowRight"===e.key&&1===N.current&&(N.current=0)};return window.addEventListener("keydown",e),window.addEventListener("keyup",o),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",o)}},[a,J]);const X=(0,t.useCallback)(()=>{c(0),G.current=0,_(!1),H.current=!1,q.current=[],I([]),f(20),O.current=20,h(m),F.current=m,N.current=0,L.current=!1,n(3),o("countdown");let e=3;const a=setInterval(()=>{e--,n(e),e<=0&&(clearInterval(a),o("playing"))},800)},[]);return"menu"===a?(0,l.jsxs)(x,{children:[(0,l.jsx)(s.G,{paletteIndex:E,pose:"idle",size:64}),(0,l.jsx)(b,{children:"pt"===e?"Salta!":"Jump!"}),(0,l.jsx)(y,{children:"pt"===e?"Salta sobre os obstáculos! Um só botão!":"Jump over obstacles! One button!"}),P>0&&(0,l.jsxs)(y,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",P]}),(0,l.jsx)(v,{accent:"#3fb950",onClick:X,children:"pt"===e?"Jogar!":"Play!"})]}):"countdown"===a?(0,l.jsx)(x,{children:(0,l.jsx)(w,{children:r>0?r:"🏃"},r)}):"gameover"===a?(0,l.jsxs)(x,{children:[(0,l.jsx)($,{children:"💥"}),(0,l.jsx)(b,{children:"pt"===e?"Fim!":"Game Over!"}),(0,l.jsxs)(j,{children:["⭐ ",i]}),i>=P&&i>0&&(0,l.jsxs)(y,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,l.jsx)(v,{accent:"#3fb950",onClick:X,children:"pt"===e?"Outra Vez":"Again"})]}):(0,l.jsxs)(x,{children:[(0,l.jsxs)(j,{children:["⭐ ",i]}),(0,l.jsxs)(k,{children:[(0,l.jsx)(S,{}),(0,l.jsx)(z,{}),(0,l.jsx)(C,{left:d,top:g,dead:R,children:(0,l.jsx)(s.G,{paletteIndex:E,pose:R?"dead":L.current?"jump":0!==N.current?"walk":"idle",size:48,flipX:-1===N.current})}),B.map(e=>(0,l.jsx)(C,{left:e.x,top:m,children:(0,l.jsx)(u,{type:e.type,size:36})},e.id))]}),(0,l.jsxs)(T,{children:[(0,l.jsx)(A,{onTouchStart:e=>{e.preventDefault(),N.current=-1},onTouchEnd:()=>{N.current=0},onMouseDown:()=>{N.current=-1},onMouseUp:()=>{N.current=0},children:"⬅️"}),(0,l.jsx)(M,{onTouchStart:e=>{e.preventDefault(),J()},onClick:J,children:"⬆️"}),(0,l.jsx)(A,{onTouchStart:e=>{e.preventDefault(),N.current=1},onTouchEnd:()=>{N.current=0},onMouseDown:()=>{N.current=1},onMouseUp:()=>{N.current=0},children:"➡️"})]})]})}},5758(e,a,o){o.d(a,{Y:()=>he});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(1364),l=o(5723);const c={title:{pt:"Jogo da Memória",en:"Memory Game"},subtitle:{pt:"Vira duas cartas e encontra os pares!",en:"Flip two cards and find the pairs!"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},easyDesc:{pt:"16 cartas · 8 pares",en:"16 cards · 8 pairs"},mediumDesc:{pt:"24 cartas · 12 pares",en:"24 cards · 12 pairs"},hardDesc:{pt:"40 cartas · 20 pares",en:"40 cards · 20 pairs"},moves:{pt:"Jogadas",en:"Moves"},pairs:{pt:"Pares",en:"Pairs"},time:{pt:"Tempo",en:"Time"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incrível!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"Rápido!",en:"Fast!"},gameOver:{pt:"Parabéns!",en:"Well done!"},finalMoves:{pt:"jogadas",en:"moves"},finalTime:{pt:"Tempo total",en:"Total time"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestMoves:{pt:"Melhor",en:"Best"},flipTwo:{pt:"Vira duas cartas!",en:"Flip two cards!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},pickSize:{pt:"Quantas cartas?",en:"How many cards?"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espaço",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"Cães, gatos, leões e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguetões e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},matched:{pt:"Par encontrado!",en:"Match found!"},tryAgain:{pt:"Tenta outra vez!",en:"Try again!"},allFound:{pt:"Encontraste todos!",en:"You found them all!"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Adversário",en:"Opponent"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},theirTurn:{pt:"Vez do adversário!",en:"Opponent's turn!"},youWin:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},youLose:{pt:"😅 Perdeste!",en:"😅 You lost!"},tied:{pt:"🤝 Empate!",en:"🤝 Tied!"},opponentLeft:{pt:"O adversário saiu.",en:"Opponent left."},rematch:{pt:"Revanche",en:"Rematch"},waiting:{pt:"À espera…",en:"Waiting…"}};function d(e,a){return c[e]["pt"===a?"pt":"en"]}const p=[{id:"animals",emoji:"🦁",color:"#f59e0b",preview:["🐶","🐱","🦁","🐼","🦋"],symbols:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🦄","🐝","🦋","🐞","🐢","🐙","🐬","🐳","🐘","🦒"]},{id:"food",emoji:"🍕",color:"#ef4444",preview:["🍕","🍦","🧁","🍓","🍩"],symbols:["🍎","🍌","🍓","🍉","🍕","🧁","🍩","🍪","🌮","🍦","🎂","🍫","🍬","🍭","🍿","🥐","🍔","🌭","🍟","🥪","🍝","🍣","🍧","🍰","🥑","🍇"]},{id:"space",emoji:"🚀",color:"#8b5cf6",preview:["🚀","🌍","⭐","🛸","🌙"],symbols:["🚀","🌍","⭐","🛸","🌙","☀️","🪐","🌟","💫","✨","🔭","👽","🤖","👾","🛰️","💎","🔮","⚡","🌈","☄️","🎯","🎮","🎲","🧩","🎸","🔥"]},{id:"mix",emoji:"🎪",color:"#3fb950",preview:["🐶","🍕","🚀","⭐","🎸"],symbols:["🐶","🐱","🦁","🐼","🦋","🐢","🐙","🐬","🍕","🍦","🧁","🍓","🍩","🍉","🎂","🍌","🚀","🌍","⭐","🛸","🌙","☀️","🌈","💎","🎸","⚽"]}],u={easy:8,medium:12,hard:20};function m(e){const a=[...e];for(let e=a.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[a[e],a[o]]=[a[o],a[e]]}return a}function f(e){return`${Math.floor(e/60)}:${(e%60).toString().padStart(2,"0")}`}const g=n.keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=n.keyframes`
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`,x=n.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`,b=n.keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,y=n.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,w=n.keyframes`
  0%   { transform: rotateY(0deg) scale(1); }
  30%  { transform: rotateY(0deg) scale(1.15); }
  60%  { transform: rotateY(0deg) scale(0.95); }
  100% { transform: rotateY(0deg) scale(1); }
`,v=n.keyframes`
  0%, 100% { transform: rotateY(0deg); }
  20%      { transform: rotateY(0deg) translateX(-4px); }
  40%      { transform: rotateY(0deg) translateX(4px); }
  60%      { transform: rotateY(0deg) translateX(-3px); }
  80%      { transform: rotateY(0deg) translateX(3px); }
`,$=n.keyframes`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(80px) rotate(720deg); opacity: 0; }
`,j=n.keyframes`
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
  50%      { transform: translateY(-6px) scale(1.1); opacity: 1; }
`,k=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.06) 0%, transparent 70%),
    #080b12;
`,z=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: ${i.w4.spacing.xl};
  animation: ${g} 0.4s ease;
`,S=r.default.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`,C=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 380px;
  line-height: 1.5;
`,T=r.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${i.w4.spacing.md};
  max-width: 480px;
  width: 100%;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    max-width: 240px;
  }
`,M=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px 22px;
  background: linear-gradient(168deg, ${({accent:e})=>e}12 0%, ${i.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}35;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: ${i.w4.typography.fontFamily};
  position: relative;
  overflow: hidden;
  min-height: 48px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${({accent:e})=>e}, transparent);
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: ${({accent:e})=>e}70;
    box-shadow: 0 8px 28px ${({accent:e})=>e}20;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,A=r.default.span`
  font-size: 44px;
  animation: ${x} 2.5s ease-in-out infinite;
`,R=r.default.div`
  display: flex;
  gap: 4px;
  font-size: 20px;
  opacity: 0.7;
`,_=r.default.span`
  font-size: 17px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,B=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,I=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,E=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 32px;
  background: linear-gradient(168deg, ${({accent:e})=>e}15 0%, ${i.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}40;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: ${i.w4.typography.fontFamily};
  min-width: 150px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({accent:e})=>e};
    border-radius: 20px 20px 0 0;
    opacity: 0.6;
  }

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: ${({accent:e})=>e}80;
    box-shadow: 0 8px 30px ${({accent:e})=>e}25;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,P=r.default.span`
  font-size: 40px;
  animation: ${x} 2s ease-in-out infinite;
`,D=r.default.span`
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,L=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,O=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px ${i.w4.spacing.md} ${i.w4.spacing.lg};
  gap: 12px;
  min-height: 0;
  width: 100%;
`,F=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  width: 100%;
  max-width: 700px;
  flex-wrap: wrap;
`,N=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${({highlight:e})=>e?"#3fb950":i.w4.colors.border};
  border-radius: 24px;
  font-size: 15px;
  font-weight: 700;
  color: ${({highlight:e})=>e?"#3fb950":i.w4.colors.mainText};
`,H=r.default.div`
  font-size: 16px;
  font-weight: 700;
  min-height: 24px;
  text-align: center;
  color: ${({type:e})=>"match"===e?"#3fb950":"miss"===e?"#f97583":i.w4.colors.accent};
  animation: ${({type:e})=>"match"===e?h:"miss"===e?v:"none"} 0.4s ease;
`,G=r.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 10px;
  max-width: 720px;
  width: 100%;
  padding: 0 4px;
  animation: ${g} 0.3s ease;

  @media (max-width: ${i.w4.breakpoints.md}) {
    gap: 8px;
  }
`,Y=r.default.button`
  aspect-ratio: 1;
  perspective: 600px;
  border: none;
  background: none;
  padding: 0;
  cursor: ${({matched:e})=>e?"default":"pointer"};
  outline: none;

  ${({matched:e})=>e?`animation: ${w.toString()} 0.5s ease;`:""}
  ${({wrong:e})=>e?`animation: ${v.toString()} 0.4s ease;`:""}
`,q=r.default.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
  transform: ${({flipped:e})=>e?"rotateY(180deg)":"rotateY(0deg)"};
`,V=r.default.div`
  position: absolute;
  inset: 0;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`,W=(0,r.default)(V)`
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.2) 0%,
    ${i.w4.colors.surface} 40%,
    ${i.w4.colors.surface} 60%,
    rgba(79, 192, 255, 0.15) 100%
  );
  border: 2px solid ${i.w4.colors.border};
  transition: border-color 0.2s, box-shadow 0.2s;
  overflow: hidden;

  &::after {
    content: '?';
    font-size: 28px;
    font-weight: 800;
    color: ${i.w4.colors.mainTextMuted};
    opacity: 0.3;
  }

  .card-outer:hover & {
    border-color: ${i.w4.colors.accent}60;
    box-shadow: 0 0 16px rgba(139, 92, 246, 0.15);
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    &::after { font-size: 20px; }
  }
`,J=(0,r.default)(V)`
  transform: rotateY(180deg);
  background: ${({matched:e})=>e?`linear-gradient(135deg, rgba(63, 185, 80, 0.15) 0%, ${i.w4.colors.surface} 50%)`:i.w4.colors.surface};
  border: 2px solid ${({matched:e})=>e?"#3fb95060":i.w4.colors.accent+"50"};
  box-shadow: ${({matched:e})=>e?"0 0 16px rgba(63, 185, 80, 0.15)":"0 0 12px rgba(139, 92, 246, 0.1)"};
`,X=r.default.span`
  font-size: ${({size:e})=>"lg"===e?"48px":"md"===e?"40px":"32px"};
  line-height: 1;
  user-select: none;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: ${({size:e})=>"lg"===e?"36px":"md"===e?"30px":"24px"};
  }
`,U=r.default.span`
  position: absolute;
  font-size: 12px;
  pointer-events: none;
  animation: ${j} 1.5s ease-in-out infinite;
  animation-delay: ${({i:e})=>.3*e}s;
  ${({i:e})=>["top: 4px; right: 6px;","bottom: 4px; left: 6px;","top: 6px; left: 8px;","bottom: 6px; right: 8px;"][e%4]}
`,K=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: ${i.w4.spacing.xl};
  animation: ${g} 0.5s ease;
  text-align: center;
`,Q=r.default.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,Z=r.default.span`
  font-size: 72px;
  animation: ${x} 1s ease-in-out infinite;
`,ee=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,ae=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,oe=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,te=r.default.span`
  font-size: 40px;
  font-weight: 800;
  color: ${({color:e})=>e??i.w4.colors.accent};
`,re=r.default.span`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  animation: ${b} 1s ease-in-out infinite;
`,ne=r.default.button`
  padding: 16px 40px;
  background: ${({accent:e})=>e};
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 52px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px ${({accent:e})=>e}40;
  }

  &:active { transform: translateY(-1px); }
`,ie=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 20px;
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
`,se=r.default.span`
  position: fixed;
  top: 20%;
  left: ${({left:e})=>e}%;
  font-size: 22px;
  color: ${({color:e})=>e};
  pointer-events: none;
  animation: ${$} 1.5s ease-out ${({delay:e})=>e}s forwards;
  opacity: 0;
  animation-fill-mode: forwards;
  z-index: 100;
`,le=r.default.span`
  background: linear-gradient(90deg, #f97583, #d2a8ff, #79c0ff, #3fb950, #f97583);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${y} 3s linear infinite;
  font-size: 16px;
  font-weight: 700;
`,ce=r.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
`,de=r.default.button`
  padding: 8px 18px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: ${({active:e})=>e?"rgba(139, 92, 246, 0.18)":"transparent"};
  color: ${({active:e})=>e?"#8b5cf6":i.w4.colors.mainTextMuted};
  &:hover { color: #8b5cf6; background: rgba(139, 92, 246, 0.1); }
`,pe=["🎊","⭐","🌟","💫","✨","🎉","🏆","🥳"],ue=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],me=["great","amazing","perfect","super","wow","fast"],fe="atlantis-memory-best";function ge(e){try{return JSON.parse(localStorage.getItem(fe)??"{}")[e]??0}catch{return 0}}function he({lang:e,canOnline:a}){const[o,r]=(0,t.useState)("theme"),[n,c]=(0,t.useState)("solo"),[g,h]=(0,t.useState)("animals"),[x,b]=(0,t.useState)("easy"),[y,w]=(0,t.useState)([]),[v,$]=(0,t.useState)([]),[j,V]=(0,t.useState)(new Set),[he,xe]=(0,t.useState)(0),[be,ye]=(0,t.useState)(0),[we,ve]=(0,t.useState)(0),[$e,je]=(0,t.useState)({msg:"",type:"info"}),[ke,ze]=(0,t.useState)(!1),[Se,Ce]=(0,t.useState)(!1),[Te,Me]=(0,t.useState)(!0),[Ae,Re]=(0,t.useState)(""),[_e,Be]=(0,t.useState)(0),[Ie,Ee]=(0,t.useState)(0),[Pe,De]=(0,t.useState)({}),[Le,Oe]=(0,t.useState)(!1),[Fe,Ne]=(0,t.useState)("none"),He=(0,t.useRef)(!1),Ge=(0,t.useRef)(null),[Ye]=(0,t.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),qe=(0,t.useCallback)(a=>{switch(a.type){case"guest-joined":We.current.addPlayer({id:a.playerId,name:a.name,isHost:!1}),We.current.sendEvent({type:"host-ack",name:Ye,playerId:We.current.room?.playerId??"",players:We.current.room?.players??[]});break;case"host-ack":We.current.setConnected(a.name),a.players&&We.current.setPlayers([...a.players,{id:We.current.room?.playerId??"",name:Ye,isHost:!1}]);break;case"player-list":We.current.setPlayers(a.players);break;case"game-state":{const o=a.payload;if("start"===o.action){const a=o.cards,t=o.difficulty;b(t),w(a),$([]),V(new Set),xe(0),ye(0),Be(0),Ee(0),ve(0);const n=o.firstTurnId??"";Re(n),Me(n===We.current.room?.playerId),De({}),je({msg:n===We.current.room?.playerId?d("yourTurn",e):d("theirTurn",e),type:"info"}),ze(!1),Ce(!1),r("playing")}else if("flip"===o.action){const e=o.cardId;w(a=>a.map(a=>a.id===e?{...a,flipped:!0}:a)),$(a=>[...a,e])}else if("match"===o.action){const a=o.pairId,t=o.scorerId,r=o.nextTurnId;w(e=>e.map(e=>e.pairId===a?{...e,matched:!0}:e)),$([]),ye(e=>e+1),De(e=>({...e,[t]:(e[t]??0)+1})),t===We.current.room?.playerId?Be(e=>e+1):Ee(e=>e+1),Re(r),Me(r===We.current.room?.playerId);const n=me[Math.floor(Math.random()*me.length)];je({msg:`${d(n,e)} ${d("matched",e)}`,type:"match"}),He.current=!1}else if("no-match"===o.action){const a=o.ids,t=o.nextTurnId;V(new Set(a)),je({msg:d("tryAgain",e),type:"miss"}),setTimeout(()=>{w(e=>e.map(e=>a.includes(e.id)?{...e,flipped:!1}:e)),$([]),V(new Set),Re(t),Me(t===We.current.room?.playerId),He.current=!1},800)}else"game-end"===o.action&&(Be(o.myPairs??_e),Ee(o.opponentPairs??Ie),Ce(!0),r("gameover"));break}case"game-over":r("gameover");break;case"rematch-request":Ne("received");break;case"rematch-accepted":Ne("none"),r("difficulty");break;case"player-left":Oe(!0),r("gameover")}},[Ye,e]),Ve=(0,s.Ky)({gameId:"memory",playerName:Ye,onEvent:qe}),We=(0,t.useRef)(Ve);We.current=Ve;const Je=(0,s.zj)({gameId:"memory",enabled:"online"===n}),Xe=u[x],Ue=function(e){return"easy"===e?4:"medium"===e?6:8}(x),Ke=function(e){return"easy"===e?"lg":"medium"===e?"md":"sm"}(x),Qe=(0,t.useMemo)(()=>{const e=p.find(e=>e.id===g);return e?.symbols??p[0].symbols},[g]);(0,t.useEffect)(()=>{if("playing"===o)return Ge.current=setInterval(()=>ve(e=>e+1),1e3),()=>{Ge.current&&clearInterval(Ge.current)};Ge.current&&clearInterval(Ge.current)},[o]);const Ze=(0,t.useCallback)(a=>{b(a);const o=function(e,a){const o=m(e).slice(0,a),t=[];return o.forEach((e,a)=>{t.push({id:2*a,symbol:e,pairId:a,flipped:!1,matched:!1}),t.push({id:2*a+1,symbol:e,pairId:a,flipped:!1,matched:!1})}),m(t)}(Qe,u[a]);if(w(o),$([]),V(new Set),xe(0),ye(0),Be(0),Ee(0),ve(0),Me(!0),je({msg:d("online"===n?"yourTurn":"flipTwo",e),type:"info"}),ze(!1),Ce(!1),r("playing"),"online"===n&&"host"===We.current.room?.role){const e=We.current.room.playerId;Re(e),We.current.sendEvent({type:"game-state",payload:{action:"start",cards:o,difficulty:a,firstTurnId:e}})}},[Qe,e,n]),ea=(0,t.useCallback)(a=>{if(He.current||a.matched||a.flipped)return;if("online"===n&&!Te)return;const o=[...v,a.id];if($(o),w(e=>e.map(e=>e.id===a.id?{...e,flipped:!0}:e)),"online"===n&&We.current.sendEvent({type:"game-state",payload:{action:"flip",cardId:a.id}}),2===o.length){He.current=!0,xe(e=>e+1);const[t,i]=o,s=y.find(e=>e.id===t),l=a;if(s.pairId===l.pairId){const a=be+1;ye(a);const o=me[Math.floor(Math.random()*me.length)];if(je({msg:`${d(o,e)} ${d("matched",e)}`,type:"match"}),"online"===n){const e=We.current.room?.playerId??"";Be(e=>e+1),De(a=>({...a,[e]:(a[e]??0)+1})),We.current.sendEvent({type:"game-state",payload:{action:"match",pairId:s.pairId,scorerId:e,nextTurnId:e}})}setTimeout(()=>{if(w(e=>e.map(e=>e.pairId===s.pairId?{...e,matched:!0}:e)),$([]),He.current=!1,a===Xe){if(je({msg:d("allFound",e),type:"match"}),"solo"===n){const e=he+1,a=ge(x);(!a||e<a)&&(function(e,a){try{const o=JSON.parse(localStorage.getItem(fe)??"{}");(!o[e]||a<o[e])&&(o[e]=a,localStorage.setItem(fe,JSON.stringify(o)))}catch{}}(x,e),ze(!0))}if("online"===n){const e=We.current.room?.playerId??"",a={...Pe,[e]:(Pe[e]??0)+1};We.current.sendEvent({type:"game-state",payload:{action:"game-end",playerPairs:a}})}Ce(!0),setTimeout(()=>r("gameover"),1200)}},500)}else{if(je({msg:d("tryAgain",e),type:"miss"}),V(new Set([t,i])),"online"===n){const e=We.current.room?.players??[],a=(e.findIndex(e=>e.id===We.current.room?.playerId)+1)%e.length,o=e[a]?.id??"";Me(!1),Re(o),We.current.sendEvent({type:"game-state",payload:{action:"no-match",ids:[t,i],nextTurnId:o}})}setTimeout(()=>{w(e=>e.map(e=>e.id===t||e.id===i?{...e,flipped:!1}:e)),$([]),V(new Set),He.current=!1},800)}}},[v,y,be,Xe,he,x,e,n,Te,_e,Ie]),aa=ge(x);if("theme"===o)return(0,l.jsx)(k,{children:(0,l.jsxs)(z,{children:[(0,l.jsxs)(S,{children:["🃏 ",d("title",e)]}),(0,l.jsx)(C,{children:d("pickTheme",e)}),(0,l.jsx)(T,{children:p.map(a=>(0,l.jsxs)(M,{accent:a.color,onClick:()=>{h(a.id),r("difficulty")},children:[(0,l.jsx)(A,{children:a.emoji}),(0,l.jsx)(_,{children:d(a.id,e)}),(0,l.jsx)(R,{children:a.preview.map((e,a)=>(0,l.jsx)("span",{children:e},a))}),(0,l.jsx)(B,{children:d(`${a.id}Desc`,e)})]},a.id))})]})});if("difficulty"===o){const o=e=>{"online"===n?(b(e),r("lobby")):Ze(e)};return(0,l.jsx)(k,{children:(0,l.jsxs)(z,{children:[(0,l.jsxs)(S,{children:["🃏 ",d("title",e)]}),(0,l.jsx)(C,{children:d("pickSize",e)}),a&&(0,l.jsxs)(ce,{children:[(0,l.jsxs)(de,{active:"solo"===n,onClick:()=>c("solo"),children:["🎯 ",d("solo",e)]}),(0,l.jsxs)(de,{active:"online"===n,onClick:()=>c("online"),children:["🌐 ",d("online",e)]})]}),(0,l.jsxs)(I,{children:[(0,l.jsxs)(E,{accent:"#3fb950",onClick:()=>o("easy"),children:[(0,l.jsx)(P,{children:"🌟"}),(0,l.jsx)(D,{children:d("easy",e)}),(0,l.jsx)(L,{children:d("easyDesc",e)})]}),(0,l.jsxs)(E,{accent:"#f59e0b",onClick:()=>o("medium"),children:[(0,l.jsx)(P,{children:"🔥"}),(0,l.jsx)(D,{children:d("medium",e)}),(0,l.jsx)(L,{children:d("mediumDesc",e)})]}),(0,l.jsxs)(E,{accent:"#f97583",onClick:()=>o("hard"),children:[(0,l.jsx)(P,{children:"💪"}),(0,l.jsx)(D,{children:d("hard",e)}),(0,l.jsx)(L,{children:d("hardDesc",e)})]})]}),aa>0&&"solo"===n&&(0,l.jsxs)(ie,{children:["🏆 ",d("bestMoves",e),": ",aa," ",d("finalMoves",e)]})]})})}if("lobby"===o)return(0,l.jsx)(k,{children:(0,l.jsxs)(z,{children:[(0,l.jsxs)(S,{children:["🃏 ",d("title",e)]}),Ve.room?.connected?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C,{children:"host"===Ve.room.role?"pt"===e?`${Ve.room.players.length} jogadores. Clica para começar.`:`${Ve.room.players.length} players. Click to start.`:"pt"===e?`Ligado! ${Ve.room.players.length} jogadores na sala.`:`Connected! ${Ve.room.players.length} players in room.`}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:Ve.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===Ve.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===Ve.room.role&&(0,l.jsx)(ne,{accent:"#8b5cf6",onClick:()=>Ze(x),children:"pt"===e?"Começar!":"Start!"})]}):(0,l.jsx)(s.XB,{lang:e,room:Ve.room,error:Ve.error,availableRooms:Je.rooms,onCreateRoom:()=>{const{code:e,roomName:a}=Ve.createRoom();Je.publishRoom({code:e,roomName:a,hostName:Ye,playerCount:1})},onJoinRoom:e=>Ve.joinRoom(e),onLeaveRoom:()=>{Je.unpublishRoom(),Ve.leaveRoom(),r("difficulty")}})]})});if("gameover"===o){const a="online"===n,o=_e>Ie,t=_e===Ie,s=d(Le?"opponentLeft":t?"tied":o?"youWin":"youLose",e),p=()=>{"received"===Fe?(Ne("none"),r("difficulty"),We.current.sendEvent({type:"rematch-accepted"})):(Ne("sent"),We.current.sendEvent({type:"rematch-request"}))};return(0,l.jsxs)(k,{children:[Se&&pe.map((e,a)=>(0,l.jsx)(se,{left:5+12*a,delay:.1*a,color:ue[a%ue.length],children:e},a)),(0,l.jsxs)(K,{children:[(0,l.jsx)(Z,{children:a?o?"🎉":t?"🤝":"😅":"🏆"}),(0,l.jsx)(Q,{children:a?s:d("gameOver",e)}),!a&&(0,l.jsx)(le,{children:d("allFound",e)}),(0,l.jsx)(ee,{children:a&&(Ve.room?.players??[]).length>2?(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6,width:"100%",maxWidth:280},children:(Ve.room?.players??[]).map(e=>({...e,pts:Pe[e.id]??0})).sort((e,a)=>a.pts-e.pts).map((a,o)=>(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,l.jsx)("span",{style:{fontSize:16,minWidth:24},children:0===o?"🥇":1===o?"🥈":2===o?"🥉":`${o+1}.`}),(0,l.jsxs)("span",{style:{flex:1,fontWeight:600,color:a.id===Ve.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[a.name,a.id===Ve.room?.playerId?` (${d("you",e)})`:""]}),(0,l.jsxs)("span",{style:{fontSize:20,fontWeight:800,color:0===o?"#3fb950":i.w4.colors.mainText},children:[a.pts," ",d("pairs",e)]})]},a.id))}):a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(ae,{children:[(0,l.jsx)(oe,{children:d("you",e)}),(0,l.jsx)(te,{color:"#3fb950",children:_e})]}),(0,l.jsxs)(ae,{children:[(0,l.jsx)(oe,{children:d("opponent",e)}),(0,l.jsx)(te,{color:"#f97583",children:Ie})]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(ae,{children:[(0,l.jsx)(oe,{children:d("moves",e)}),(0,l.jsx)(te,{children:he})]}),(0,l.jsxs)(ae,{children:[(0,l.jsx)(oe,{children:d("pairs",e)}),(0,l.jsx)(te,{color:"#3fb950",children:Xe})]}),(0,l.jsxs)(ae,{children:[(0,l.jsx)(oe,{children:d("finalTime",e)}),(0,l.jsx)(te,{color:"#f59e0b",children:f(we)})]})]})}),!a&&ke&&(0,l.jsxs)(re,{children:["🎉 ",d("newRecord",e)]}),!a&&aa>0&&!ke&&(0,l.jsxs)(ie,{children:["🏆 ",d("bestMoves",e),": ",aa," ",d("finalMoves",e)]}),a&&!Le?"sent"===Fe?(0,l.jsx)(ne,{accent:"#666",children:d("waiting",e)}):"received"===Fe?(0,l.jsxs)(ne,{accent:"#3fb950",onClick:p,children:[d("rematch",e)," ✓"]}):(0,l.jsx)(ne,{accent:"#8b5cf6",onClick:p,children:d("rematch",e)}):(0,l.jsx)(ne,{accent:"#8b5cf6",onClick:()=>{a&&We.current.leaveRoom(),c("solo"),r("theme")},children:d("playAgain",e)})]})]})}return(0,l.jsx)(k,{children:(0,l.jsxs)(O,{children:[(0,l.jsx)(F,{children:"online"===n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(N,{highlight:Te,children:["⭐ ",d("you",e),": ",_e]}),(0,l.jsxs)(N,{children:["👤 ",d("opponent",e),": ",Ie]}),(0,l.jsxs)(N,{children:[d("pairs",e),": ",be,"/",Xe]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(N,{children:["🎴 ",d("moves",e),": ",he]}),(0,l.jsxs)(N,{highlight:be===Xe,children:["⭐ ",d("pairs",e),": ",be,"/",Xe]}),(0,l.jsxs)(N,{children:["⏱️ ",f(we)]})]})}),(0,l.jsx)(H,{type:$e.type,children:"online"===n?d(Te?"yourTurn":"theirTurn",e):$e.msg},$e.msg),(0,l.jsx)(G,{cols:Ue,children:y.map(e=>(0,l.jsx)(Y,{className:"card-outer",matched:e.matched,wrong:j.has(e.id),onClick:()=>ea(e),"aria-label":e.flipped?e.symbol:"Hidden card",children:(0,l.jsxs)(q,{flipped:e.flipped,children:[(0,l.jsx)(W,{}),(0,l.jsxs)(J,{matched:e.matched,children:[(0,l.jsx)(X,{size:Ke,children:e.symbol}),e.matched&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(U,{i:0,children:"✨"}),(0,l.jsx)(U,{i:1,children:"✨"})]})]})]})},e.id))})]})})}},8022(e,a,o){o.d(a,{k:()=>E});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(5723);const l=[{id:"dodge",emoji:"💣",instruction:{pt:"Foge das bombas!",en:"Dodge the bombs!"}},{id:"tap-fast",emoji:"⚡",instruction:{pt:"Toca o mais rápido possível!",en:"Tap as fast as you can!"}},{id:"color-match",emoji:"🎨",instruction:{pt:"Toca na cor certa!",en:"Tap the right color!"}},{id:"remember",emoji:"🧠",instruction:{pt:"Memoriza a sequência!",en:"Remember the sequence!"}},{id:"catch",emoji:"🪣",instruction:{pt:"Apanha os que caem!",en:"Catch the falling ones!"}}];function c(e){return e[Math.floor(Math.random()*e.length)]}function d(e){const a=[...e];for(let e=a.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[a[e],a[o]]=[a[o],a[e]]}return a}const p=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,m=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,f=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,g=(n.keyframes`from{transform:translateY(-40px);opacity:0}to{transform:translateY(0);opacity:1}`,n.keyframes`0%,100%{transform:rotate(0)}25%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}`),h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${i.w4.spacing.lg};gap:${i.w4.spacing.lg};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 30%,rgba(88,166,255,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${p} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:320px;`,y=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=(r.default.div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:${i.w4.colors.accent};animation:${f} 0.5s ease;`,r.default.span`font-size:72px;animation:${m} 1s ease-in-out infinite;`),v=r.default.div`display:flex;flex-direction:column;align-items:center;gap:${i.w4.spacing.md};padding:${i.w4.spacing.xl};background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.lg};animation:${u} 0.3s ease;`,$=r.default.span`font-size:72px;animation:${g} 1s ease-in-out infinite;`,j=r.default.p`font-size:${i.w4.typography.fontSizeLg};font-weight:700;color:${i.w4.colors.mainText};text-align:center;margin:0;`,k=r.default.div`position:relative;width:100%;max-width:400px;height:300px;background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};overflow:hidden;touch-action:manipulation;`,z=r.default.button`
  position:absolute;left:${({x:e})=>e}%;top:${({y:e})=>e}%;width:${({size:e})=>e}px;height:${({size:e})=>e}px;
  transform:translate(-50%,-50%);border-radius:50%;border:none;cursor:pointer;
  font-size:${({size:e})=>.6*e}px;display:flex;align-items:center;justify-content:center;
  background:rgba(88,166,255,0.15);animation:${u} 0.2s ease;transition:transform 0.1s;
  &:active{transform:translate(-50%,-50%) scale(0.9);}
`,S=r.default.div`display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%;max-width:300px;`,C=r.default.button`
  aspect-ratio:1;border-radius:${i.w4.borderRadius.lg};background:${({bg:e})=>e};border:3px solid transparent;
  cursor:pointer;transition:all 0.15s;min-height:70px;
  &:hover{border-color:rgba(255,255,255,0.3);transform:scale(1.05);}
  &:active{transform:scale(0.95);}
`,T=r.default.div`display:flex;gap:12px;justify-content:center;flex-wrap:wrap;`,M=r.default.div`
  width:60px;height:60px;border-radius:${i.w4.borderRadius.lg};display:flex;align-items:center;justify-content:center;
  font-size:28px;background:${({active:e})=>e?"rgba(88,166,255,0.2)":i.w4.colors.surface};
  border:2px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  animation: ${({revealed:e})=>e?u:"none"} 0.3s ease;
  cursor:pointer;transition:all 0.15s;&:hover{border-color:${i.w4.colors.accent};}
`,A=r.default.div`
  position:absolute;left:${({x:e})=>e}%;top:${({y:e})=>e}%;font-size:32px;line-height:1;
  transform:translateX(-50%);pointer-events:none;
`,R=r.default.div`
  position:absolute;bottom:10px;left:${({x:e})=>e}%;transform:translateX(-50%);
  font-size:40px;transition:left 0.1s linear;
`,_=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};`,B=r.default.div`padding:8px 20px;background:${i.w4.colors.surface};border:1px solid ${i.w4.colors.accent};border-radius:24px;font-size:16px;font-weight:700;color:${i.w4.colors.accent};`,I=["#f97583","#58a6ff","#3fb950","#f59e0b","#d2a8ff","#ff6bcb","#06b6d4","#ef4444","#a855f7"];function E({lang:e}){const[a,o]=(0,t.useState)("menu"),[r,n]=(0,t.useState)(0),[i,p]=(0,t.useState)(0),[u,m]=(0,t.useState)(null),[f,g]=(0,t.useState)(0),[E,P]=(0,t.useState)({}),[D,L]=(0,t.useState)(()=>{try{return Number(localStorage.getItem("atlantis-miniparty-best")??"0")}catch{return 0}}),O=(0,t.useRef)(null),F=(0,t.useRef)(null),N=(0,t.useCallback)(()=>{O.current&&(clearInterval(O.current),O.current=null),F.current&&(clearInterval(F.current),F.current=null)},[]),H=(0,t.useCallback)(()=>{N();const e=r+1;if(e>5){const e=i+f;if(e>D){L(e);try{localStorage.setItem("atlantis-miniparty-best",String(e))}catch{}}return void o("scores")}n(e),g(0),m(l[(e-1)%l.length]),P({}),o("intro"),setTimeout(()=>o("playing"),2e3)},[r,i,f,D,N]),G=(0,t.useCallback)(()=>{N(),p(e=>e+f),o("result")},[f,N]),Y=(0,t.useCallback)(()=>{n(0),p(0),g(0),H()},[H]);(0,t.useEffect)(()=>{if("playing"===a)return P(e=>({...e,timeLeft:6})),O.current=setInterval(()=>{P(e=>{const a=(e.timeLeft??6)-1;return a<=0?(G(),e):{...e,timeLeft:a}})},1e3),()=>{O.current&&clearInterval(O.current)}},[a,G]);const q=(0,t.useCallback)(()=>{g(e=>e+1),P(e=>({...e,tapX:10+80*Math.random(),tapY:10+80*Math.random()}))},[]);(0,t.useEffect)(()=>{if("playing"!==a||"color-match"!==u?.id)return;const e=c(I),o=d([...I]).slice(0,9);o.includes(e)||(o[Math.floor(9*Math.random())]=e),P(a=>({...a,targetColor:e,gridColors:o,colorCorrect:null}))},[a,u]);const V=(0,t.useCallback)(e=>{if(e===E.targetColor){g(e=>e+1);const e=c(I),a=d([...I]).slice(0,9);a.includes(e)||(a[Math.floor(9*Math.random())]=e),P(o=>({...o,targetColor:e,gridColors:a,colorCorrect:!0}))}else P(e=>({...e,colorCorrect:!1}));setTimeout(()=>P(e=>({...e,colorCorrect:null})),300)},[E.targetColor]);(0,t.useEffect)(()=>{if("playing"!==a||"remember"!==u?.id)return;const e=["🐶","🐱","🐸","🦊","🐼","🐵","🐰","🐷"],o=3+r,t=Array.from({length:Math.min(o,6)},()=>c(e));P(e=>({...e,sequence:t,seqPhase:"show",seqIdx:0,userSeq:[]}));let n=0;const i=setInterval(()=>{n++,n>=t.length?(clearInterval(i),setTimeout(()=>P(e=>({...e,seqPhase:"input",seqIdx:0})),800)):P(e=>({...e,seqIdx:n}))},700);return()=>clearInterval(i)},[a,u,r]);const W=(0,t.useCallback)(e=>{const a=E.sequence,o=[...E.userSeq??[],e];a[o.length-1]===e?o.length===a.length?(g(e=>e+a.length),G()):P(e=>({...e,userSeq:o})):G()},[E.sequence,E.userSeq,G]);(0,t.useEffect)(()=>{if("playing"!==a||"dodge"!==u?.id)return;const e=[];let o=0,t=0;P(e=>({...e,playerX:50,bombs:[]}));const r=()=>{const a=Date.now();a-t>600&&(t=a,e.push({id:++o,x:10+80*Math.random(),y:-5}));for(const a of e)a.y+=1.5;e.length;for(let a=e.length-1;a>=0;a--)e[a].y>105&&(e.splice(a,1),g(e=>e+1));P(a=>({...a,bombs:e.map(e=>({...e}))})),n.current=requestAnimationFrame(r)},n={current:requestAnimationFrame(r)};return()=>cancelAnimationFrame(n.current)},[a,u]),(0,t.useEffect)(()=>{if("playing"!==a||"catch"!==u?.id)return;const e=[];let o=0,t=0;P(e=>({...e,bucketX:50,items:[]}));const r=()=>{const a=Date.now();a-t>500&&(t=a,e.push({id:++o,x:10+80*Math.random(),y:-5,emoji:c(["⭐","💎","🍎","🍬","🎁"])}));for(const a of e)a.y+=1.2;for(let a=e.length-1;a>=0;a--)e[a].y>105&&e.splice(a,1);P(a=>({...a,items:e.map(e=>({...e}))})),n.current=requestAnimationFrame(r)},n={current:requestAnimationFrame(r)};return()=>cancelAnimationFrame(n.current)},[a,u]);const J=(0,t.useCallback)(e=>{P(a=>({...a,bucketX:Math.max(10,Math.min(90,(a.bucketX??50)+("left"===e?-15:15)))}))},[]);if("menu"===a)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:["🎉 ","pt"===e?"Mini Festa!":"Mini Party!"]}),(0,s.jsx)(b,{children:"pt"===e?"5 mini-jogos rápidos! Consegues pontos máximos?":"5 quick mini-games! Can you get max points?"}),D>0&&(0,s.jsxs)(b,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",D]}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:Y,children:"pt"===e?"Jogar!":"Play!"})]});if("intro"===a&&u)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(B,{children:["pt"===e?"Ronda":"Round"," ",r,"/",5]}),(0,s.jsxs)(v,{children:[(0,s.jsx)($,{children:u.emoji}),(0,s.jsx)(j,{children:u.instruction["pt"===e?"pt":"en"]})]})]});if("result"===a)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:[f>0?"🎉":"😅"," +",f]}),(0,s.jsxs)(_,{color:"#3fb950",children:["⭐ ",i+f]}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:H,children:r>=5?"pt"===e?"Ver resultados":"See results":"➡️"})]});if("scores"===a)return(0,s.jsxs)(h,{children:[(0,s.jsx)(w,{children:"🏆"}),(0,s.jsx)(x,{children:"pt"===e?"Resultados":"Results"}),(0,s.jsxs)(_,{color:"#3fb950",children:["⭐ ",i]}),i>=D&&i>0&&(0,s.jsxs)(b,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>{n(0),p(0),o("menu")},children:"Menu"})]});const X=E.timeLeft??6;return(0,s.jsxs)(h,{children:[(0,s.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,s.jsxs)(_,{children:["⭐ ",f]}),(0,s.jsxs)(_,{color:X<=2?"#f97583":void 0,children:["⏱️ ",X,"s"]})]}),"tap-fast"===u?.id&&(0,s.jsx)(k,{onClick:q,children:(0,s.jsx)(z,{x:E.tapX??50,y:E.tapY??50,size:70,onClick:e=>{e.stopPropagation(),q()},children:"⚡"})}),"color-match"===u?.id&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{width:80,height:80,borderRadius:"50%",background:E.targetColor??"#fff",border:"4px solid rgba(255,255,255,0.3)"}}),(0,s.jsx)(S,{children:(E.gridColors??[]).map((e,a)=>(0,s.jsx)(C,{bg:e,onClick:()=>V(e)},a))})]}),"remember"===u?.id&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(T,{children:(E.sequence??[]).map((e,a)=>(0,s.jsx)(M,{active:"show"===E.seqPhase&&a<=(E.seqIdx??0),revealed:"show"===E.seqPhase&&a===(E.seqIdx??0),onClick:()=>"input"===E.seqPhase&&W(e),children:"show"===E.seqPhase&&a<=(E.seqIdx??0)?e:"?"},a))}),"input"===E.seqPhase&&(0,s.jsx)(b,{children:"pt"===e?"Agora repete!":"Now repeat!"})]}),"dodge"===u?.id&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)("div",{style:{position:"absolute",bottom:20,left:`${E.playerX??50}%`,transform:"translateX(-50%)",fontSize:36,transition:"left 0.15s"},children:"🏃"}),(E.bombs??[]).map(e=>(0,s.jsx)(A,{x:e.x,y:e.y,children:"💣"},e.id))]}),(0,s.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>P(e=>({...e,playerX:Math.max(10,(e.playerX??50)-20)})),children:"⬅️"}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>P(e=>({...e,playerX:Math.min(90,(e.playerX??50)+20)})),children:"➡️"})]})]}),"catch"===u?.id&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)(R,{x:E.bucketX??50,children:"🪣"}),(E.items??[]).map(e=>(0,s.jsx)(A,{x:e.x,y:e.y,children:e.emoji},e.id))]}),(0,s.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>J("left"),children:"⬅️"}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>J("right"),children:"➡️"})]})]})]})}},1442(e,a,o){o.d(a,{K:()=>xe});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(5723);const l="atlantis-missions-progress",c=[{id:"brush-teeth",emoji:"🪥",name:{pt:"Lavar os dentes",en:"Brush teeth"},points:5},{id:"make-bed",emoji:"🛏️",name:{pt:"Fazer a cama",en:"Make bed"},points:10},{id:"read",emoji:"📚",name:{pt:"Ler 15 minutos",en:"Read for 15 min"},points:15},{id:"tidy-room",emoji:"🧹",name:{pt:"Arrumar o quarto",en:"Tidy room"},points:15},{id:"set-table",emoji:"🍽️",name:{pt:"Ajudar a pôr a mesa",en:"Help set table"},points:10},{id:"school-bag",emoji:"🎒",name:{pt:"Preparar a mochila",en:"Pack school bag"},points:5},{id:"pet",emoji:"🐕",name:{pt:"Passear/alimentar animal",en:"Walk/feed pet"},points:10},{id:"vegetables",emoji:"🥗",name:{pt:"Comer legumes",en:"Eat vegetables"},points:5},{id:"clothes-away",emoji:"🧤",name:{pt:"Guardar a roupa",en:"Put clothes away"},points:10},{id:"homework",emoji:"📝",name:{pt:"Fazer os trabalhos",en:"Do homework"},points:15},{id:"draw",emoji:"🎨",name:{pt:"Desenhar ou pintar",en:"Draw or paint"},points:10},{id:"be-kind",emoji:"🤗",name:{pt:"Ser gentil com alguém",en:"Be kind to someone"},points:10}],d=50,p=[{emoji:"🌱",pt:"Recruta",en:"Recruit"},{emoji:"🧭",pt:"Explorador",en:"Explorer"},{emoji:"⚔️",pt:"Aventureiro",en:"Adventurer"},{emoji:"🦸",pt:"Herói",en:"Hero"},{emoji:"🏆",pt:"Campeão",en:"Champion"},{emoji:"🌟",pt:"Lenda",en:"Legend"}];function u(e){const a=Math.floor(e/d);return Math.min(a,p.length-1)}function m(){return(new Date).toISOString().slice(0,10)}const f=n.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,g=n.keyframes`
  0%   { background: ${i.w4.colors.surface}; box-shadow: none; }
  30%  { background: rgba(88,166,255,0.18); box-shadow: 0 0 0 2px ${i.w4.colors.accent}; }
  100% { background: ${i.w4.colors.surface}; box-shadow: none; }
`,h=n.keyframes`
  0%   { border-color: rgba(52, 211, 153, 0.4); box-shadow: none; }
  40%  { border-color: #f59e0b; box-shadow: 0 0 12px rgba(245, 158, 11, 0.5), 0 0 0 2px rgba(52, 211, 153, 0.6); }
  100% { border-color: rgba(52, 211, 153, 0.6); box-shadow: 0 0 6px rgba(52, 211, 153, 0.2); }
`,x=n.keyframes`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,b=n.keyframes`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,y=n.keyframes`
  from { width: 0%; }
`,w=n.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,v=n.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,$=n.keyframes`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,j=n.keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(251, 146, 60, 0.3); }
  50%       { box-shadow: 0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.2); }
`,k=n.keyframes`
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%       { transform: translateY(-12px) rotate(5deg); }
`,z=n.keyframes`
  0%   { opacity: 0; transform: scale(0.95) translateY(12px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
`,S=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
  background: radial-gradient(ellipse at 50% 0%, rgba(88, 166, 255, 0.08) 0%, ${i.w4.colors.mainBg} 70%);
  padding: ${i.w4.spacing.md} ${i.w4.spacing.md} ${i.w4.spacing.xl};
  gap: ${i.w4.spacing.lg};
  animation: ${v} 0.3s ease;

  @media (min-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.xl};
    max-width: 640px;
    margin: 0 auto;
    width: 100%;
  }
`,C=r.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  position: relative;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(ellipse at 50% -20%, rgba(88, 166, 255, 0.12) 0%, transparent 70%);
    pointer-events: none;
  }
`,T=r.default.div`
  font-size: 64px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px rgba(88, 166, 255, 0.4));
`,M=r.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.accent};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,A=r.default.div`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,R=r.default.div`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};

  span {
    color: ${i.w4.colors.accent};
    font-size: ${i.w4.typography.fontSizeXl};
    font-weight: 700;
  }
`,_=r.default.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,B=r.default.div`
  display: flex;
  justify-content: space-between;
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,I=r.default.div`
  width: 100%;
  height: 10px;
  background: rgba(255,255,255,0.07);
  border-radius: 99px;
  overflow: hidden;
`,E=r.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, ${i.w4.colors.accent}, ${i.w4.colors.accentHover});
  border-radius: 99px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${y} 0.8s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: ${({shimmer:e})=>e?1:0};
    animation: ${({shimmer:e})=>e?w:"none"} 0.7s ease forwards;
  }
`,P=r.default.h2`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,D=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
`,L=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.md};
  padding: ${i.w4.spacing.md};
  min-height: 64px;
  background: ${({completed:e})=>e?"rgba(52, 211, 153, 0.06)":i.w4.colors.surface};
  border: 1px solid ${({completed:e})=>e?"rgba(52, 211, 153, 0.6)":i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  animation: ${({flashing:e,newlyCompleted:a})=>a?h:e?g:"none"} 0.6s ease forwards;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({completed:e})=>e?"rgba(52, 211, 153, 0.8)":i.w4.colors.accentHover};
    background: ${({completed:e})=>e?"rgba(52, 211, 153, 0.1)":"rgba(255,255,255,0.03)"};
  }
`,O=r.default.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(52, 211, 153, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #fff;
  animation: ${$} 0.35s ease;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.4);
`,F=r.default.div`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: ${i.w4.borderRadius.sm};
  border: 2px solid ${({checked:e})=>e?"rgba(52, 211, 153, 0.8)":i.w4.colors.border};
  background: ${({checked:e})=>e?"rgba(52, 211, 153, 0.2)":"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: rgba(52, 211, 153, 1);
  font-size: 16px;
  flex-shrink: 0;
`,N=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  flex: 1;
  min-width: 0;
`,H=r.default.span`
  font-size: 24px;
  line-height: 1;
  flex-shrink: 0;
`,G=r.default.span`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${({completed:e})=>e?i.w4.colors.mainTextMuted:i.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Y=r.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({completed:e})=>e?"rgba(52, 211, 153, 0.8)":i.w4.colors.accent};
  background: ${({completed:e})=>e?"rgba(52, 211, 153, 0.1)":"rgba(88,166,255,0.12)"};
  padding: 4px 10px;
  border-radius: 99px;
  white-space: nowrap;
  flex-shrink: 0;
`,q=r.default.div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.accent};
  text-shadow: 0 0 8px rgba(88, 166, 255, 0.6);
  z-index: 9999;
  animation: ${f} 1.1s ease forwards;
`,V=r.default.div`
  position: fixed;
  inset: 0;
  background: rgba(13, 17, 23, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${({exiting:e})=>e?b:x} 0.4s ease forwards;
`,W=r.default.div`
  background: ${i.w4.colors.surface};
  border: 2px solid ${i.w4.colors.accent};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xxl} ${i.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.md};
  text-align: center;
  box-shadow: 0 0 40px rgba(88, 166, 255, 0.3);
`,J=r.default.div`
  font-size: 80px;
  line-height: 1;
  filter: drop-shadow(0 0 16px rgba(88,166,255,0.6));
`,X=r.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${i.w4.colors.accent};
  font-weight: 700;
`,U=r.default.div`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${i.w4.colors.mainText};
`,K=r.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.sm};
`,Q=r.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  text-align: center;
`,Z=r.default.div`
  background: linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.06) 100%);
  border: 1px solid rgba(251, 146, 60, 0.4);
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  text-align: center;
  animation: ${j} 3s ease-in-out infinite;
`,ee=r.default.div`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${i.w4.colors.accent};
`,ae=r.default.div`
  font-size: 32px;
  font-weight: 800;
  color: #fb923c;
  text-shadow: 0 0 12px rgba(251, 146, 60, 0.5);
  line-height: 1;
`,oe=r.default.div`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  line-height: 1.3;
`,te=r.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: rgba(251, 146, 60, 0.8);
  font-weight: 600;
  line-height: 1.3;
`,re=r.default.div`
  font-size: 20px;
`,ne=r.default.div`
  font-size: 32px;
`,ie=r.default.div`
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.1) 0%, rgba(88, 166, 255, 0.04) 100%);
  border: 1px solid rgba(88, 166, 255, 0.25);
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xl} ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  text-align: center;
  animation: ${z} 0.5s ease;
`,se=r.default.div`
  font-size: 52px;
  animation: ${k} 2s ease-in-out infinite;
`,le=r.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,ce=r.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
  max-width: 280px;
  line-height: 1.5;
`,de=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};

  @media (min-width: ${i.w4.breakpoints.md}) {
    flex-direction: row;
  }
`,pe=r.default.button`
  flex: 1;
  padding: ${i.w4.spacing.md};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;

  &:hover {
    background: rgba(255,255,255,0.08);
    color: ${i.w4.colors.mainText};
    border-color: ${i.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`,ue=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.xs};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  animation: ${v} 0.2s ease;
`,me=r.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
`,fe=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
`,ge=r.default.button`
  flex: 1;
  padding: 10px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: ${i.w4.borderRadius.sm};
  color: #f87171;
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    background: rgba(239, 68, 68, 0.25);
  }

  &:focus-visible {
    outline: 2px solid #f87171;
    outline-offset: 2px;
  }
`,he=r.default.button`
  flex: 1;
  padding: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    background: rgba(255,255,255,0.08);
    color: ${i.w4.colors.mainText};
  }

  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`;function xe({lang:e,onBack:a}){const o="pt"===e,[r,n]=(0,t.useState)(()=>{const e=function(){try{const e=localStorage.getItem(l);if(e)return JSON.parse(e)}catch{}return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:m()}}(),a=m();return e.lastResetDate!==a?{...e,completedToday:[],lastResetDate:a}:e}),[f,g]=(0,t.useState)(new Set),[h,x]=(0,t.useState)(new Set),[b,y]=(0,t.useState)([]),[w,v]=(0,t.useState)(null),[$,j]=(0,t.useState)(!1),[k,z]=(0,t.useState)(!1),[xe,be]=(0,t.useState)(!1),ye=(0,t.useRef)(0),we=(0,t.useRef)(null),ve=(0,t.useRef)({});(0,t.useEffect)(()=>{!function(e){try{localStorage.setItem(l,JSON.stringify(e))}catch{}}(r)},[r]);const $e=(0,t.useRef)(u(r.totalPoints)),je=(0,t.useCallback)((e,a)=>{n(o=>{const t=o.completedToday.includes(e.id),r=m();if(t){const a=Math.max(0,o.totalPoints-e.points),t=o.completedToday.filter(a=>a!==e.id),n=Math.max(0,o.totalMissionsCompleted-1);let i=o.streakDays;return t.length<3&&(i=o.streakDays.filter(e=>e!==r)),{...o,totalPoints:a,totalMissionsCompleted:n,completedToday:t,streakDays:i}}const n=o.totalPoints+e.points,i=[...o.completedToday,e.id],s=o.totalMissionsCompleted+1;let l=o.streakDays;if(i.length>=3&&!o.streakDays.includes(r)&&(l=[...o.streakDays,r]),g(a=>{const o=new Set(a);return o.add(e.id),o}),setTimeout(()=>{g(a=>{const o=new Set(a);return o.delete(e.id),o})},600),x(a=>{const o=new Set(a);return o.add(e.id),o}),setTimeout(()=>{x(a=>{const o=new Set(a);return o.delete(e.id),o})},700),z(!0),setTimeout(()=>z(!1),750),navigator.vibrate?.(50),a){const o=a.getBoundingClientRect(),t=++ye.current,r={id:t,value:e.points,x:o.right-60,y:o.top+o.height/2};y(e=>[...e,r]),setTimeout(()=>{y(e=>e.filter(e=>e.id!==t))},1200)}const c=u(o.totalPoints),d=u(n);return d>c&&(v(p[d]),j(!1),setTimeout(()=>{j(!0),setTimeout(()=>v(null),450)},2e3)),{...o,totalPoints:n,totalMissionsCompleted:s,completedToday:i,streakDays:l}})},[]);(0,t.useEffect)(()=>{$e.current=u(r.totalPoints)},[r.totalPoints]);const ke=(0,t.useCallback)(()=>{n(e=>({...e,completedToday:[],lastResetDate:m()})),be(!1)},[]),ze=u(r.totalPoints),Se=(Ce=r.totalPoints,Math.floor(Ce/d)+1);var Ce;const Te=p[ze],Me=function(e){return e%d/d*100}(r.totalPoints),Ae=r.totalPoints%d,Re=function(e){if(0===e.length)return 0;const a=[...new Set(e)].sort().reverse();let o=0,t=m();for(const e of a){if(e!==t)break;{o++;const e=new Date(t);e.setDate(e.getDate()-1),t=e.toISOString().slice(0,10)}}return o}(r.streakDays),_e=[...c].sort((e,a)=>(r.completedToday.includes(e.id)?1:0)-(r.completedToday.includes(a.id)?1:0)),Be=0===r.totalPoints&&0===r.completedToday.length;return(0,s.jsxs)(S,{children:[(0,s.jsxs)(C,{children:[(0,s.jsx)(T,{children:Te.emoji}),(0,s.jsx)(M,{children:o?`Nível ${Se}`:`Level ${Se}`}),(0,s.jsx)(A,{children:o?Te.pt:Te.en}),(0,s.jsxs)(R,{children:[(0,s.jsx)("span",{children:r.totalPoints}),o?"pontos":"points"]}),(0,s.jsxs)(_,{children:[(0,s.jsxs)(B,{children:[(0,s.jsx)("span",{children:"XP"}),(0,s.jsxs)("span",{children:[Ae," / ",d]})]}),(0,s.jsx)(I,{children:(0,s.jsx)(E,{pct:Me,shimmer:k})})]})]}),Be&&(0,s.jsxs)(ie,{children:[(0,s.jsx)(se,{children:"🚀"}),(0,s.jsx)(le,{children:o?"A tua aventura começa hoje!":"Your adventure starts today!"}),(0,s.jsx)(ce,{children:o?"Completa missões para ganhar pontos e subir de nível. Quanto mais fizeres, mais forte ficas!":"Complete missions to earn points and level up. The more you do, the stronger you get!"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(P,{style:{marginBottom:i.w4.spacing.md},children:o?"🎯 Missões de Hoje":"🎯 Today's Missions"}),(0,s.jsx)(D,{children:_e.map(e=>{const a=r.completedToday.includes(e.id),t=f.has(e.id),n=h.has(e.id);return(0,s.jsxs)(L,{completed:a,flashing:t,newlyCompleted:n,onClick:a=>{ve.current[e.id]?ve.current[e.id]=!1:je(e,a.currentTarget)},onTouchStart:e=>{we.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:a=>((a,o)=>{if(!we.current)return;const t=Math.abs(a.changedTouches[0].clientX-we.current.x),r=Math.abs(a.changedTouches[0].clientY-we.current.y);we.current=null,t>8||r>8||(ve.current[e.id]=!0,je(e,o))})(a,a.currentTarget),role:"checkbox","aria-checked":a,tabIndex:0,onKeyDown:a=>{" "!==a.key&&"Enter"!==a.key||(a.preventDefault(),je(e,a.currentTarget))},children:[(0,s.jsx)(F,{checked:a,children:a&&"✓"}),(0,s.jsxs)(N,{children:[(0,s.jsx)(H,{children:e.emoji}),(0,s.jsx)(G,{completed:a,children:o?e.name.pt:e.name.en})]}),(0,s.jsxs)(Y,{completed:a,children:["+",e.points," pts"]}),a&&(0,s.jsx)(O,{children:"✓"})]},e.id)})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(P,{style:{marginBottom:i.w4.spacing.md},children:o?"📊 As Tuas Estatísticas":"📊 Your Stats"}),(0,s.jsxs)(K,{children:[(0,s.jsxs)(Q,{children:[(0,s.jsx)(re,{children:"✅"}),(0,s.jsx)(ee,{children:r.totalMissionsCompleted}),(0,s.jsx)(oe,{children:o?"Missões\nconcluídas":"Missions\ncompleted"})]}),(0,s.jsxs)(Q,{children:[(0,s.jsx)(re,{children:"⭐"}),(0,s.jsx)(ee,{children:r.totalPoints}),(0,s.jsx)(oe,{children:o?"Pontos\nganhos":"Points\nearned"})]}),(0,s.jsxs)(Z,{children:[(0,s.jsx)(ne,{children:"🔥"}),(0,s.jsx)(ae,{children:Re}),(0,s.jsx)(te,{children:o?"Dias\nseguidos":"Day\nstreak"})]})]})]}),(0,s.jsx)(de,{children:xe?(0,s.jsxs)(ue,{children:[(0,s.jsx)(me,{children:o?"Tens a certeza? As missões de hoje serão limpas, mas os teus pontos ficam.":"Are you sure? This clears today's missions but keeps your points."}),(0,s.jsxs)(fe,{children:[(0,s.jsx)(ge,{onClick:ke,children:o?"Confirmar":"Confirm"}),(0,s.jsx)(he,{onClick:()=>be(!1),children:o?"Cancelar":"Cancel"})]})]}):(0,s.jsxs)(pe,{onClick:()=>be(!0),children:["🔄 ",o?"Novo dia":"Reset day"]})}),b.map(e=>(0,s.jsxs)(q,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),w&&(0,s.jsx)(V,{exiting:$,children:(0,s.jsxs)(W,{children:[(0,s.jsx)(J,{children:w.emoji}),(0,s.jsx)(X,{children:o?"🎉 Subiste de nível!":"🎉 Level Up!"}),(0,s.jsx)(U,{children:o?w.pt:w.en})]})})]})}r.default.button`
  flex: 1;
  padding: ${i.w4.spacing.md};
  background: transparent;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.sm};

  &:hover {
    background: rgba(255,255,255,0.04);
    color: ${i.w4.colors.mainText};
  }

  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`},3065(e,a,o){o.d(a,{H:()=>re});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(5723);const l="atlantis-pixelboard-gallery",c=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4ecdc4","#74c0fc","#748ffc","#da77f2","#f783ac","#ffffff","#868e96","#212529"],d=[8,12,16],p={title:{pt:"Tabuleiro de Pixels",en:"Pixel Board"},paint:{pt:"Pintar",en:"Paint"},eraser:{pt:"Apagar",en:"Eraser"},clearAll:{pt:"Limpar",en:"Clear"},save:{pt:"Guardar",en:"Save"},gallery:{pt:"Galeria",en:"Gallery"},back:{pt:"← Voltar",en:"← Back"},confirmClear:{pt:"Tens a certeza que queres apagar tudo?",en:"Are you sure you want to clear everything?"},yes:{pt:"Sim",en:"Yes"},no:{pt:"Não",en:"No"},drawingName:{pt:"Nome do desenho:",en:"Drawing name:"},myDrawing:{pt:"O meu desenho",en:"My drawing"},saved:{pt:"Guardado!",en:"Saved!"},emptyGallery:{pt:"Ainda sem desenhos guardados.",en:"No saved drawings yet."},load:{pt:"Carregar",en:"Load"},delete:{pt:"Apagar",en:"Delete"},close:{pt:"Fechar",en:"Close"},templates:{pt:"Modelos",en:"Templates"},heart:{pt:"Coração",en:"Heart"},star:{pt:"Estrela",en:"Star"},smiley:{pt:"Sorriso",en:"Smiley"},gridSize:{pt:"Tamanho",en:"Size"},selectedColor:{pt:"Cor selecionada",en:"Selected color"},undo:{pt:"Desfazer",en:"Undo"},tapToPaint:{pt:"Toca para pintar!",en:"Tap to paint!"}};function u(e){return Array(e*e).fill("")}function m(e,a,o){const t=u(o),r=Math.floor((o-e.length)/2);return e.forEach((e,n)=>{e.forEach((e,i)=>{const s=n+r,l=i+r;s>=0&&s<o&&l>=0&&l<o&&0!==e&&(t[s*o+l]=a[e]??"")})}),t}function f(e){return m([[0,1,1,0,0,0,1,1,0],[1,1,1,1,0,1,1,1,1],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0]],{1:"#ff6b6b"},e)}function g(e){return m([[0,0,0,0,1,0,0,0,0],[0,0,0,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,0,1,0,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,1]],{1:"#ffd43b"},e)}function h(e){return m([[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,2,1,1,1,1,2,1,1],[1,1,2,1,1,1,1,2,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,3,1,1],[1,1,1,3,3,3,3,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0]],{1:"#ffd43b",2:"#212529",3:"#212529"},e)}function x(e){localStorage.setItem(l,JSON.stringify(e))}const b=n.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=n.keyframes`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.35); }
  100% { transform: scale(1); }
`,w=n.keyframes`
  0%   { opacity: 0; transform: scale(0.7) translateY(4px); }
  60%  { opacity: 1; transform: scale(1.1) translateY(-2px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
`,v=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.md} ${i.w4.spacing.lg};
  gap: ${i.w4.spacing.md};
  overflow-y: auto;
  min-height: 0;
  background: ${i.w4.colors.mainBg};
  position: relative;
`,$=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  animation: ${b} 0.3s ease;
`,j=r.default.h1`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,k=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: ${b} 0.3s ease 0.05s both;
  width: 100%;
  max-width: min(calc(100vw - 32px), 480px);
`,z=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  width: 100%;
`,S=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${({danger:e})=>e?"rgba(249,117,131,0.3)":i.w4.colors.border};
  background: ${({danger:e})=>e?"rgba(249,117,131,0.08)":i.w4.colors.surface};
  color: ${({danger:e})=>e?"#f97583":i.w4.colors.mainTextMuted};
  font-size: 18px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
    background: ${({danger:e})=>e?"rgba(249,117,131,0.14)":"rgba(255,255,255,0.06)"};
    border-color: ${({danger:e})=>e?"#f97583":i.w4.colors.mainTextMuted};
  }
  &:active { transform: translateY(0); }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }
`,C=r.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  flex-shrink: 0;
`,T=r.default.button`
  padding: 8px 14px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 13px;
  min-height: 36px;
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?"rgba(88,166,255,0.18)":"transparent"};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};

  &:hover {
    background: rgba(88,166,255,0.1);
    color: ${i.w4.colors.accent};
  }
`,M=r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: ${i.w4.borderRadius.md};
  min-height: 44px;
  border: 1px solid ${({active:e,danger:a})=>a?"rgba(249,117,131,0.3)":e?i.w4.colors.accent+"50":i.w4.colors.border};
  background: ${({active:e,danger:a})=>a?"rgba(249,117,131,0.08)":e?"rgba(88,166,255,0.12)":i.w4.colors.surface};
  color: ${({active:e,danger:a})=>a?"#f97583":e?i.w4.colors.accent:i.w4.colors.mainText};
  font-size: 13px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    background: ${({danger:e})=>e?"rgba(249,117,131,0.14)":"rgba(88,166,255,0.1)"};
    border-color: ${({danger:e})=>e?"#f97583":i.w4.colors.accent+"60"};
  }

  &:active {
    transform: translateY(0);
  }
`,A=r.default.div`
  position: relative;
  flex-shrink: 0;
  animation: ${b} 0.3s ease 0.1s both;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
  border-radius: ${i.w4.borderRadius.lg};
  padding: 6px;
  background: ${i.w4.colors.surface};
  box-shadow:
    0 0 0 1px ${i.w4.colors.border},
    0 0 0 1px rgba(88,166,255,0.08) inset,
    0 4px 24px rgba(0,0,0,0.4),
    0 0 16px rgba(88,166,255,0.04) inset;
`,R=r.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 1px;
  background: ${i.w4.colors.border};
  border: 1px solid rgba(88,166,255,0.15);
  border-radius: ${i.w4.borderRadius.sm};
  overflow: hidden;
  width: min(calc(100vw - 56px), 468px);
  aspect-ratio: 1;
`,_=r.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
  border-radius: ${i.w4.borderRadius.lg};
`,B=r.default.span`
  font-size: clamp(0.85rem, 3vw, 1.1rem);
  font-weight: 700;
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.5;
  letter-spacing: 0.02em;
  text-align: center;
  padding: ${i.w4.spacing.sm};
`,I=r.default.div`
  background: ${({color:e})=>e||i.w4.colors.surface};
  cursor: crosshair;
  transition: background 0.08s;
  animation: ${({isNew:e})=>e?y:"none"} 0.18s ease;

  &:hover {
    filter: brightness(1.18);
    z-index: 1;
  }
`,E=r.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  animation: ${b} 0.3s ease 0.15s both;
  max-width: min(calc(100vw - 32px), 480px);
`,P=r.default.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  cursor: pointer;
  border: 2px solid ${({selected:e})=>e?"#ffffff":"transparent"};
  box-shadow: ${({selected:e})=>e?"0 0 0 2px rgba(255,255,255,0.4), 0 0 0 4px rgba(88,166,255,0.5)":"0 1px 3px rgba(0,0,0,0.4)"};
  transform: ${({selected:e})=>e?"scale(1.2)":"scale(1)"};
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 0 2px rgba(255,255,255,0.3), 0 2px 6px rgba(0,0,0,0.4);
  }
`,D=r.default.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: 2px solid ${({selected:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  box-shadow: ${({selected:e})=>e?"0 0 0 2px rgba(88,166,255,0.4)":"none"};
  transform: ${({selected:e})=>e?"scale(1.2)":"scale(1)"};
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;

  &:hover {
    transform: scale(1.15);
    border-color: ${i.w4.colors.accent};
  }
`,L=r.default.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(63,185,80,0.2);
  color: #3fb950;
  border: 1px solid rgba(63,185,80,0.4);
  border-radius: 20px;
  padding: 6px 18px;
  font-size: 14px;
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  animation: ${w} 0.3s ease forwards;
  pointer-events: none;
  z-index: 100;
`,O=r.default.div`
  position: absolute;
  inset: 0;
  background: rgba(13,17,23,0.75);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: ${i.w4.spacing.lg};
  animation: ${b} 0.2s ease;
`,F=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  padding: ${i.w4.spacing.lg};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  max-width: 320px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  animation: ${b} 0.2s ease;
`,N=r.default.p`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,H=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
`,G=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${i.w4.spacing.lg};
  gap: ${i.w4.spacing.md};
  min-height: 0;
  overflow-y: auto;
`,Y=r.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: ${i.w4.spacing.md};
  width: 100%;
  max-width: 540px;
`,q=r.default.div`
  display: flex;
  flex-direction: column;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  overflow: hidden;
  animation: ${b} 0.2s ease;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: ${i.w4.colors.accent}40;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
`,V=r.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 0;
  aspect-ratio: 1;
  width: 100%;
`,W=r.default.div`
  background: ${({color:e})=>e||"#161b22"};
`,J=r.default.div`
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.25);
  border-top: 1px solid ${i.w4.colors.border};
`,X=r.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  padding: 4px 6px 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,U=r.default.div`
  display: flex;
  gap: 4px;
  padding: 4px 6px 6px;
`,K=r.default.button`
  flex: 1;
  padding: 8px 10px;
  border-radius: ${i.w4.borderRadius.sm};
  border: 1px solid ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.3)":i.w4.colors.border};
  background: ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.1)":"rgba(88,166,255,0.08)"};
  color: ${({variant:e})=>"danger"===e?"#f97583":i.w4.colors.accent};
  font-size: 12px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.2)":"rgba(88,166,255,0.16)"};
  }
`,Q=r.default.h2`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,Z=r.default.p`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  text-align: center;
`,ee=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
  max-width: min(calc(100vw - 32px), 480px);
  width: 100%;
`,ae=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 12px 12px;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${i.w4.colors.border};
  background: ${i.w4.colors.surface};
  color: ${i.w4.colors.mainText};
  font-size: 12px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
  min-width: 80px;
  min-height: 44px;

  &:hover {
    transform: translateY(-1px);
    border-color: ${i.w4.colors.accent}60;
    background: rgba(88,166,255,0.06);
  }
  &:active { transform: translateY(0); }
`,oe=r.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 0;
  border: 1px solid ${i.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
`,te=r.default.div`
  background: ${({color:e})=>e||i.w4.colors.mainBg};
`;function re({lang:e,onBack:a}){const o=(0,t.useCallback)(a=>p[a]?.[e]??p[a]?.en??a,[e]),[r,n]=(0,t.useState)(12),[m,b]=(0,t.useState)(()=>u(12)),[y,w]=(0,t.useState)([]),[re,ne]=(0,t.useState)(c[0]),[ie,se]=(0,t.useState)("paint"),[le,ce]=(0,t.useState)(null),[de,pe]=(0,t.useState)(!1),[ue,me]=(0,t.useState)(()=>function(){try{const e=localStorage.getItem(l);if(e)return JSON.parse(e)}catch{}return[]}()),[fe,ge]=(0,t.useState)("draw"),[he,xe]=(0,t.useState)(!1),[be,ye]=(0,t.useState)(!1),[we,ve]=(0,t.useState)(!1),[$e,je]=(0,t.useState)(""),[ke,ze]=(0,t.useState)(!1),Se=(0,t.useMemo)(()=>m.every(e=>""===e),[m]),Ce=(0,t.useRef)(null),Te=(0,t.useRef)(null),Me=(0,t.useRef)(null),Ae=(0,t.useCallback)(e=>{ce(e),Me.current&&clearTimeout(Me.current),Me.current=setTimeout(()=>ce(null),200)},[]),Re=(0,t.useCallback)(e=>{w(a=>[...a.slice(-19),e])},[]),_e=(0,t.useCallback)(e=>{b(a=>{const o="eraser"===ie?"":re;if(a[e]===o)return a;Re(a);const t=[...a];return t[e]=o,t}),ze(!0),Ae(e)},[ie,re,Ae,Re]),Be=(0,t.useCallback)(()=>{w(e=>{if(0===e.length)return e;const a=e[e.length-1];return b(a),e.slice(0,-1)})},[]),Ie=(0,t.useCallback)(e=>{pe(!0),_e(e)},[_e]),Ee=(0,t.useCallback)(e=>{de&&_e(e)},[de,_e]),Pe=(0,t.useCallback)(()=>{pe(!1)},[]);(0,t.useEffect)(()=>{const e=()=>pe(!1);return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);const De=(0,t.useCallback)((e,a)=>{if(!Te.current)return null;const o=Te.current.getBoundingClientRect(),t=e-o.left,n=a-o.top;if(t<0||n<0||t>o.width||n>o.height)return null;const i=Math.floor(t/o.width*r),s=Math.floor(n/o.height*r);return i<0||i>=r||s<0||s>=r?null:s*r+i},[r]),Le=(0,t.useCallback)(e=>{const a=e.touches[0],o=De(a.clientX,a.clientY);Ce.current={x:a.clientX,y:a.clientY,idx:o??-1}},[De]),Oe=(0,t.useCallback)(e=>{if(!Ce.current)return;const a=e.changedTouches[0],o=Math.abs(a.clientX-Ce.current.x),t=Math.abs(a.clientY-Ce.current.y);if((o>8||t>8)&&(o>2*t||t<=8)){const e=De(a.clientX,a.clientY);null!==e&&_e(e)}},[De,_e]),Fe=(0,t.useCallback)(e=>{if(!Ce.current)return;const a=e.changedTouches[0],o=Math.abs(a.clientX-Ce.current.x),t=Math.abs(a.clientY-Ce.current.y),r=Ce.current.idx;Ce.current=null,o<=8&&t<=8&&r>=0&&_e(r)},[_e]),Ne=(0,t.useCallback)(e=>{n(e),b(u(e)),w([]),ze(!1)},[]),He=(0,t.useCallback)(e=>{se(e)},[]),Ge=(0,t.useCallback)(()=>{Re(m),b(u(r)),xe(!1),ze(!1)},[r,m,Re]),Ye=(0,t.useCallback)(()=>{je(o("myDrawing")),ye(!0)},[o]),qe=(0,t.useCallback)(()=>{const e=$e.trim()||o("myDrawing"),a=[{id:Date.now().toString(),name:e,grid:[...m],size:r,savedAt:Date.now()},...ue].slice(0,30);me(a),x(a),ye(!1),ve(!0),setTimeout(()=>ve(!1),1800)},[$e,m,r,ue,o]),Ve=(0,t.useCallback)(e=>{n(e.size),b(e.grid),w([]),ze(!0),ge("draw")},[]),We=(0,t.useCallback)(e=>{const a=ue.filter(a=>a.id!==e);me(a),x(a)},[ue]),Je=(0,t.useCallback)(e=>{Re(m),b(e(r)),ze(!0)},[r,m,Re]),Xe=(0,t.useMemo)(()=>({heart:f(8),star:g(8),smiley:h(8)}),[]);return"gallery"===fe?(0,s.jsxs)(v,{children:[(0,s.jsxs)($,{children:[(0,s.jsxs)(M,{onClick:()=>ge("draw"),children:["← ",o("close")]}),(0,s.jsxs)(Q,{children:["🖼️ ",o("gallery")]})]}),(0,s.jsx)(G,{children:0===ue.length?(0,s.jsx)(Z,{children:o("emptyGallery")}):(0,s.jsx)(Y,{children:ue.map(e=>(0,s.jsxs)(q,{children:[(0,s.jsx)(V,{cols:e.size,children:e.grid.map((e,a)=>(0,s.jsx)(W,{color:e},a))}),(0,s.jsxs)(J,{children:[(0,s.jsx)(X,{children:e.name}),(0,s.jsxs)(U,{children:[(0,s.jsx)(K,{variant:"primary",onClick:()=>Ve(e),children:o("load")}),(0,s.jsx)(K,{variant:"danger",onClick:()=>We(e.id),children:o("delete")})]})]})]},e.id))})})]}):(0,s.jsxs)(v,{children:[he&&(0,s.jsx)(O,{onClick:()=>xe(!1),children:(0,s.jsxs)(F,{onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(N,{children:o("confirmClear")}),(0,s.jsxs)(H,{children:[(0,s.jsx)(M,{onClick:()=>xe(!1),children:o("no")}),(0,s.jsx)(M,{danger:!0,onClick:Ge,children:o("yes")})]})]})}),be&&(0,s.jsx)(O,{onClick:()=>ye(!1),children:(0,s.jsxs)(F,{onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(N,{children:o("drawingName")}),(0,s.jsx)("input",{value:$e,onChange:e=>je(e.target.value),onKeyDown:e=>{"Enter"===e.key&&qe(),"Escape"===e.key&&ye(!1)},autoFocus:!0,style:{background:i.w4.colors.mainBg,border:`1px solid ${i.w4.colors.border}`,borderRadius:i.w4.borderRadius.md,color:i.w4.colors.mainText,padding:"8px 12px",fontSize:i.w4.typography.fontSizeBase,fontFamily:i.w4.typography.fontFamily,width:"100%",outline:"none"}}),(0,s.jsxs)(H,{children:[(0,s.jsx)(M,{onClick:()=>ye(!1),children:o("no")}),(0,s.jsxs)(M,{onClick:qe,children:[o("save")," 💾"]})]})]})}),(0,s.jsx)($,{children:(0,s.jsxs)(j,{children:["🎨 ",o("title")]})}),(0,s.jsxs)(k,{children:[(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{onClick:Be,disabled:0===y.length,"aria-label":o("undo"),title:o("undo"),children:"↩️"}),(0,s.jsxs)(M,{active:"paint"===ie,onClick:()=>He("paint"),children:["🎨 ",o("paint")]}),(0,s.jsxs)(M,{active:"eraser"===ie,onClick:()=>He("eraser"),children:["🧹 ",o("eraser")]}),(0,s.jsx)(C,{children:d.map(e=>(0,s.jsxs)(T,{active:r===e,onClick:()=>Ne(e),children:[e,"×",e]},e))})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{danger:!0,onClick:()=>xe(!0),title:o("clearAll"),"aria-label":o("clearAll"),children:"🗑️"}),(0,s.jsx)(S,{onClick:Ye,title:o("save"),"aria-label":o("save"),children:"💾"}),(0,s.jsxs)(M,{onClick:()=>ge("gallery"),children:["🖼️ ",o("gallery")," ",ue.length>0&&`(${ue.length})`]})]})]}),(0,s.jsxs)(ee,{children:[(0,s.jsxs)("span",{style:{fontSize:12,color:i.w4.colors.mainTextMuted,alignSelf:"center",flexShrink:0},children:[o("templates"),":"]}),(0,s.jsxs)(ae,{onClick:()=>Je(f),children:[(0,s.jsx)(oe,{cols:8,children:Xe.heart.map((e,a)=>(0,s.jsx)(te,{color:e},a))}),o("heart")]}),(0,s.jsxs)(ae,{onClick:()=>Je(g),children:[(0,s.jsx)(oe,{cols:8,children:Xe.star.map((e,a)=>(0,s.jsx)(te,{color:e},a))}),o("star")]}),(0,s.jsxs)(ae,{onClick:()=>Je(h),children:[(0,s.jsx)(oe,{cols:8,children:Xe.smiley.map((e,a)=>(0,s.jsx)(te,{color:e},a))}),o("smiley")]})]}),(0,s.jsxs)(A,{ref:Te,onTouchStart:Le,onTouchMove:Oe,onTouchEnd:Fe,children:[(0,s.jsx)(R,{cols:r,role:"grid","aria-label":o("title"),children:m.map((e,a)=>(0,s.jsx)(I,{color:e,isNew:a===le,role:"gridcell","aria-label":`cell ${a}`,onMouseDown:()=>Ie(a),onMouseEnter:()=>Ee(a),onMouseUp:Pe},a))}),Se&&!ke&&(0,s.jsx)(_,{children:(0,s.jsx)(B,{children:o("tapToPaint")})})]}),(0,s.jsxs)(E,{role:"group","aria-label":o("selectedColor"),children:[c.map(e=>(0,s.jsx)(P,{color:e,selected:"paint"===ie&&re===e,onClick:()=>{ne(e),se("paint")},role:"radio","aria-checked":"paint"===ie&&re===e,"aria-label":e},e)),(0,s.jsx)(D,{selected:"eraser"===ie,onClick:()=>se("eraser"),role:"radio","aria-checked":"eraser"===ie,"aria-label":o("eraser"),children:"🧹"})]}),we&&(0,s.jsxs)(L,{children:["✅ ",o("saved")]})]})}r.default.div`
  margin-top: auto;
  padding-top: ${i.w4.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`,r.default.button`
  padding: 12px 24px;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${i.w4.colors.border};
  background: transparent;
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    background: rgba(255,255,255,0.04);
    border-color: ${i.w4.colors.mainTextMuted};
    color: ${i.w4.colors.mainText};
  }
`},2742(e,a,o){o.d(a,{m:()=>te});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(5723);const l={title:{pt:"Caçador de Sons",en:"Sound Hunter"},subtitle:{pt:"Encontra os sons ao teu redor!",en:"Find the sounds around you!"},progress:{pt:"Missões completas",en:"Missions complete"},record:{pt:"Gravar",en:"Record"},stop:{pt:"Parar",en:"Stop"},play:{pt:"Ouvir",en:"Play"},complete:{pt:"Concluído!",en:"Done!"},markDone:{pt:"Marcar como feito",en:"Mark as done"},back:{pt:"Voltar",en:"Back"},reset:{pt:"Recomeçar",en:"Reset"},permDenied:{pt:"Microfone bloqueado. Verifica as permissões do navegador.",en:"Microphone blocked. Check your browser permissions."},permError:{pt:"Não foi possível aceder ao microfone.",en:"Could not access the microphone."},celebrate:{pt:"🎉 Parabéns, Caçador de Sons!",en:"🎉 Congrats, Sound Hunter!"},celebrateSub:{pt:"Encontraste todos os sons! Que aventura incrível!",en:"You found every sound! What an amazing adventure!"},celebrateReset:{pt:"Jogar outra vez",en:"Play again"},recording:{pt:"A gravar…",en:"Recording…"},tapRecord:{pt:"Toca em Gravar",en:"Tap Record"}};function c(e,a){return l[e]["pt"===a?"pt":"en"]}const d=[{id:"dog",emoji:"🐕",en:"Dog barking",pt:"Cão a ladrar"},{id:"water",emoji:"🚿",en:"Water running",pt:"Água a correr"},{id:"clap",emoji:"👏",en:"Clapping hands",pt:"Palmas"},{id:"door",emoji:"🚪",en:"Door closing",pt:"Porta a fechar"},{id:"cat",emoji:"🐱",en:"Cat meowing",pt:"Gato a miar"},{id:"bell",emoji:"🔔",en:"Bell ringing",pt:"Campainha a tocar"},{id:"alarm",emoji:"⏰",en:"Alarm clock",pt:"Despertador"},{id:"sing",emoji:"🎵",en:"Singing a song",pt:"Cantar uma música"},{id:"wind",emoji:"💨",en:"Wind blowing",pt:"Vento a soprar"},{id:"bird",emoji:"🦜",en:"Bird singing",pt:"Pássaro a cantar"},{id:"keys",emoji:"🗝️",en:"Jingling keys",pt:"Chaves a tilintar"},{id:"laugh",emoji:"😂",en:"Laughter",pt:"Gargalhada"}],p="atlantis-soundhunter-progress";function u(){return Object.fromEntries(d.map(e=>[e.id,{recording:!1,audioUrl:null,completed:!1,timerSecs:0}]))}const m=n.keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=n.keyframes`
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.12); }
  100% { transform: scale(1); opacity: 1; }
`,g=n.keyframes`
  0%, 100% { height: 6px; }
  50%       { height: 22px; }
`,h=n.keyframes`
  0%   { box-shadow: 0 0 0px rgba(46, 160, 67, 0); border-color: #2ea043; }
  40%  { box-shadow: 0 0 20px rgba(255, 215, 0, 0.35), 0 0 40px rgba(46, 160, 67, 0.25); border-color: #ffd700; }
  100% { box-shadow: 0 0 8px rgba(46, 160, 67, 0.2); border-color: #2ea043; }
`,x=n.keyframes`
  0%, 100% { filter: drop-shadow(0 0 0px rgba(255, 215, 0, 0)); }
  50%       { filter: drop-shadow(0 0 24px rgba(255, 215, 0, 0.7)) drop-shadow(0 0 48px rgba(255, 200, 0, 0.4)); }
`,b=n.keyframes`
  0%   { transform: scale(1); background: rgba(88, 166, 255, 0.15); }
  50%  { transform: scale(1.15); background: rgba(88, 166, 255, 0.4); }
  100% { transform: scale(1); background: rgba(88, 166, 255, 0.15); }
`,y=n.keyframes`
  0%   { transform: translateY(-40px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,w=n.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,v=n.keyframes`
  0%   { transform: rotate(0deg) scale(0); }
  60%  { transform: rotate(200deg) scale(1.3); }
  100% { transform: rotate(360deg) scale(1); }
`,$=r.default.div`
  min-height: 100%;
  background:
    radial-gradient(ellipse at 20% 15%, rgba(20, 80, 100, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 55%),
    radial-gradient(ellipse at 50% 50%, rgba(14, 26, 46, 0.7) 0%, ${i.w4.colors.mainBg} 80%);
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${m} 0.3s ease;
`,j=r.default.header`
  text-align: center;
  margin-bottom: ${i.w4.spacing.xl};
`,k=r.default.h1`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.5px;
  margin-bottom: ${i.w4.spacing.xs};
`,z=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
`,S=r.default.div`
  width: 100%;
  max-width: 720px;
  margin-bottom: ${i.w4.spacing.xl};
`,C=r.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${i.w4.spacing.sm};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,T=r.default.span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.accent};
`,M=r.default.div`
  height: 12px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 999px;
  overflow: visible;
  position: relative;
`,A=r.default.div`
  position: absolute;
  top: 50%;
  left: ${({position:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({reached:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border: 2px solid ${({reached:e})=>e?i.w4.colors.accentHover:i.w4.colors.surface};
  z-index: 1;
  transition: background 0.4s ease, border-color 0.4s ease;
  animation: ${({flashing:e})=>e?b:"none"} 0.5s ease 3;
`,R=r.default.div`
  height: 100%;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`,_=r.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  border-radius: 999px;
  background: linear-gradient(90deg, #58a6ff, #79c0ff, #a5d6ff);
  background-size: 200% auto;
  animation: ${w} 2s linear infinite;
  transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`,B=r.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.md};
  width: 100%;
  max-width: 900px;
  @media (max-width: ${i.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,I=r.default.div`
  background: ${({completed:e})=>e?"#0e2a1a":i.w4.colors.surface};
  border: 2px solid ${({completed:e,recording:a})=>e?"#2ea043":a?"#f85149":i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  transition: border-color 0.2s ease, background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${({justCompleted:e,completed:a})=>e?`${f} 0.35s ease, ${h} 1.4s ease 0.1s`:a?"none":`${m} 0.35s ease`};
  cursor: default;
  position: relative;

  &:hover {
    transform: ${({completed:e})=>e?"none":"translateY(-2px)"};
    box-shadow: ${({completed:e,recording:a})=>e?"0 4px 16px rgba(46, 160, 67, 0.15)":a?"0 8px 24px rgba(248, 81, 73, 0.25)":"0 8px 24px rgba(88, 166, 255, 0.15)"};
  }

  &:hover .record-btn {
    background: ${i.w4.colors.accentHover};
    transform: translateY(-1px);
  }

  &:active .record-btn {
    transform: scale(0.97) translateY(0);
  }
`,E=r.default.div`
  font-size: 52px;
  line-height: 1;
  user-select: none;
`,P=r.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  text-align: center;
`,D=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,L=r.default.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 24px;
  flex-shrink: 0;
`,O=r.default.span`
  display: inline-block;
  width: 4px;
  height: 6px;
  border-radius: 2px;
  background: #f85149;
  animation: ${g} 0.7s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
`;function F(){return(0,s.jsx)(L,{children:[0,.1,.2,.15,.05,.25,.1].map((e,a)=>(0,s.jsx)(O,{delay:e},a))})}const N=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: #f85149;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
`,H=r.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  min-height: 18px;
  text-align: center;
`,G=r.default.button`
  display: inline-flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  padding: 8px 16px;
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.15s ease, transform 0.1s ease, opacity 0.15s ease;
  min-height: 44px;

  ${({variant:e="primary"})=>"primary"===e?`background: ${i.w4.colors.accent}; color: #0d1117;`:"danger"===e?"background: #f85149; color: #fff;":"success"===e?"background: #2ea043; color: #fff;":`background: ${i.w4.colors.surface}; color: ${i.w4.colors.mainText}; border-color: ${i.w4.colors.border};`}

  &:hover:not(:disabled) {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Y=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  color: #2ea043;
  font-weight: 700;
  font-size: ${i.w4.typography.fontSizeSm};
`,q=r.default.span`
  display: inline-block;
  animation: ${v} 0.6s ease forwards;
`,V=r.default.div`
  background: #2d1a1a;
  border: 1px solid #f85149;
  border-radius: ${i.w4.borderRadius.md};
  color: #ff7b72;
  font-size: ${i.w4.typography.fontSizeSm};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  text-align: center;
  width: 100%;
`,W=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  margin-top: ${i.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,J=["#58a6ff","#f78166","#3fb950","#d2a8ff","#ffa657","#79c0ff"],X=r.default.div`
  position: fixed;
  top: -40px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>.4*e}px;
  background: ${({color:e})=>e};
  border-radius: 3px;
  animation: ${y} ${({delay:e})=>2+e}s ease-in ${({delay:e})=>(.15*e).toFixed(2)}s forwards;
  pointer-events: none;
  z-index: 999;
`,U=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  gap: ${i.w4.spacing.lg};
  text-align: center;
  animation: ${m} 0.4s ease;
`,K=r.default.h2`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  color: ${i.w4.colors.mainText};
`,Q=r.default.p`
  font-size: ${i.w4.typography.fontSizeLg};
  color: ${i.w4.colors.mainTextMuted};
  max-width: 480px;
`,Z=r.default.div`
  font-size: clamp(3.5rem, 10vw, 6rem);
  line-height: 1;
  animation: ${x} 2s ease-in-out infinite;
  user-select: none;
`;function ee(){const e=Array.from({length:50},(e,a)=>({key:a,left:100*Math.random(),delay:20*Math.random(),color:J[Math.floor(Math.random()*J.length)],size:8+Math.floor(10*Math.random())}));return(0,s.jsx)(s.Fragment,{children:e.map(e=>(0,s.jsx)(X,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.key))})}function ae({mission:e,state:a,lang:o,justCompleted:t,onRecord:r,onStop:n,onPlay:i,onComplete:l,permError:d}){const p="pt"===o?e.pt:e.en;return(0,s.jsxs)(I,{completed:a.completed,recording:a.recording,justCompleted:t,children:[(0,s.jsx)(E,{children:e.emoji}),(0,s.jsx)(P,{children:p}),a.completed?(0,s.jsxs)(Y,{children:[(0,s.jsx)(q,{children:"⭐"})," ",c("complete",o)]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(D,{children:[a.recording?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(F,{}),(0,s.jsxs)(N,{children:[10-a.timerSecs,"s"]}),(0,s.jsxs)(G,{variant:"danger",onClick:n,children:["⏹ ",c("stop",o)]})]}):(0,s.jsxs)(G,{variant:"primary",className:"record-btn",onClick:r,children:["🎙 ",c("record",o)]}),a.audioUrl&&!a.recording&&(0,s.jsxs)(G,{variant:"ghost",onClick:i,children:["▶ ",c("play",o)]})]}),(0,s.jsx)(H,{children:a.recording?c("recording",o):a.audioUrl?"":c("tapRecord",o)}),d&&(0,s.jsx)(V,{children:d}),a.audioUrl&&!a.recording&&(0,s.jsxs)(G,{variant:"success",onClick:l,children:["✅ ",c("markDone",o)]})]})]})}const oe=[25,50,75];function te({lang:e,onBack:a}){const[o,r]=(0,t.useState)(()=>{const e=u(),a=function(){try{const e=localStorage.getItem(p);if(e)return new Set(JSON.parse(e))}catch{}return new Set}();for(const o of a)e[o]&&(e[o]={...e[o],completed:!0});return e}),[n,i]=(0,t.useState)({}),[l,m]=(0,t.useState)(new Set),[f,g]=(0,t.useState)(null),h=(0,t.useRef)(0),x=(0,t.useRef)(null),b=(0,t.useRef)([]),y=(0,t.useRef)(null),w=(0,t.useRef)(null),v=Object.values(o).filter(e=>e.completed).length,I=v===d.length,E=Math.round(v/d.length*100);(0,t.useEffect)(()=>{const e=h.current;for(const a of oe)if(e<a&&E>=a){g(a),setTimeout(()=>g(null),1800);break}h.current=E},[E]),(0,t.useEffect)(()=>{!function(e){try{localStorage.setItem(p,JSON.stringify([...e]))}catch{}}(new Set(Object.entries(o).filter(([,e])=>e.completed).map(([e])=>e)))},[o]);const P=(0,t.useCallback)((e,a)=>{r(o=>({...o,[e]:{...o[e],...a}}))},[]),L=(0,t.useCallback)(()=>{null!==y.current&&(clearInterval(y.current),y.current=null)},[]),O=(0,t.useCallback)(e=>{L(),x.current&&"inactive"!==x.current.state&&x.current.stop(),P(e,{recording:!1,timerSecs:0}),w.current=null},[L,P]),F=(0,t.useCallback)(async a=>{let o;w.current&&w.current!==a&&O(w.current),i(e=>({...e,[a]:""}));try{o=await navigator.mediaDevices.getUserMedia({audio:!0})}catch(o){const t=o instanceof DOMException&&"NotAllowedError"===o.name?c("permDenied",e):c("permError",e);return void i(e=>({...e,[a]:t}))}b.current=[];const t=new MediaRecorder(o);x.current=t,w.current=a,t.ondataavailable=e=>{e.data.size>0&&b.current.push(e.data)},t.onstop=()=>{const e=new Blob(b.current,{type:"audio/webm"}),t=URL.createObjectURL(e);P(a,{audioUrl:t}),o.getTracks().forEach(e=>e.stop())},t.start(),P(a,{recording:!0,timerSecs:0});let r=0;y.current=setInterval(()=>{r+=1,P(a,{timerSecs:r}),r>=10&&O(a)},1e3)},[e,O,P]),N=(0,t.useCallback)(e=>{O(e)},[O]),H=(0,t.useCallback)(e=>{const a=o[e]?.audioUrl;a&&new Audio(a).play().catch(()=>{})},[o]),Y=(0,t.useCallback)(e=>{P(e,{completed:!0}),m(a=>new Set([...a,e])),setTimeout(()=>{m(a=>{const o=new Set(a);return o.delete(e),o})},1600)},[P]),q=(0,t.useCallback)(()=>{Object.values(o).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)}),L(),x.current&&"inactive"!==x.current.state&&x.current.stop(),w.current=null,r(u()),i({}),m(new Set),g(null),h.current=0,localStorage.removeItem(p)},[o,L]);return(0,t.useEffect)(()=>()=>{L(),x.current&&"inactive"!==x.current.state&&x.current.stop(),Object.values(o).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)})},[]),I?(0,s.jsxs)($,{children:[(0,s.jsx)(ee,{}),(0,s.jsxs)(U,{children:[(0,s.jsx)(Z,{children:"🏆"}),(0,s.jsx)(K,{children:c("celebrate",e)}),(0,s.jsx)(Q,{children:c("celebrateSub",e)}),(0,s.jsx)(D,{children:(0,s.jsxs)(G,{variant:"primary",onClick:q,children:["🔄 ",c("celebrateReset",e)]})})]})]}):(0,s.jsxs)($,{children:[(0,s.jsxs)(j,{children:[(0,s.jsxs)(k,{children:["🎙 ",c("title",e)]}),(0,s.jsx)(z,{children:c("subtitle",e)})]}),(0,s.jsxs)(S,{children:[(0,s.jsxs)(C,{children:[(0,s.jsx)("span",{children:c("progress",e)}),(0,s.jsxs)(T,{children:[v," / ",d.length]})]}),(0,s.jsxs)(M,{children:[(0,s.jsx)(R,{children:(0,s.jsx)(_,{pct:E})}),oe.map(e=>(0,s.jsx)(A,{position:e,reached:E>=e,flashing:f===e},e))]})]}),(0,s.jsx)(B,{children:d.map(a=>(0,s.jsx)(ae,{mission:a,state:o[a.id],lang:e,justCompleted:l.has(a.id),onRecord:()=>F(a.id),onStop:()=>N(a.id),onPlay:()=>H(a.id),onComplete:()=>Y(a.id),permError:n[a.id]??null},a.id))}),(0,s.jsx)(W,{children:(0,s.jsxs)(G,{variant:"ghost",onClick:q,children:["🔄 ",c("reset",e)]})})]})}},7566(e,a,o){o.d(a,{O:()=>he});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(1364),l=o(5723);const c={title:{pt:"Encontra o Par!",en:"Spot It!"},subtitle:{pt:"Encontra o símbolo igual nas duas cartas",en:"Find the matching symbol on both cards"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},easyDesc:{pt:"4 símbolos por carta",en:"4 symbols per card"},mediumDesc:{pt:"6 símbolos por carta",en:"6 symbols per card"},hardDesc:{pt:"8 símbolos por carta",en:"8 symbols per card"},score:{pt:"Pontos",en:"Score"},round:{pt:"Ronda",en:"Round"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incrível!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"Rápido!",en:"Fast!"},oops:{pt:"Ups!",en:"Oops!"},gameOver:{pt:"Fim de Jogo!",en:"Game Over!"},finalScore:{pt:"Pontuação final",en:"Final score"},rounds:{pt:"rondas",en:"rounds"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestScore:{pt:"Melhor",en:"Best"},tapMatch:{pt:"Toca no símbolo igual!",en:"Tap the matching symbol!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espaço",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"Cães, gatos, leões e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguetões e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Adversário",en:"Opponent"},youScored:{pt:"Tu pontuaste!",en:"You scored!"},theyScored:{pt:"O adversário pontuou!",en:"Opponent scored!"},youWin:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},youLose:{pt:"😅 Perdeste!",en:"😅 You lost!"},tied:{pt:"🤝 Empate!",en:"🤝 Tied!"},opponentLeft:{pt:"O adversário saiu.",en:"Opponent left."},rematch:{pt:"Revanche",en:"Rematch"},waiting:{pt:"À espera…",en:"Waiting…"}};function d(e,a){return c[e]["pt"===a?"pt":"en"]}const p=[{id:"animals",emoji:"🦁",color:"#f59e0b",preview:["🐶","🐱","🦁","🐼","🦋"],symbols:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🦄","🐝","🐛","🦋","🐌","🐞","🐢","🐙","🦀","🐠","🐬","🦈","🐳","🐘","🦒","🦘","🐿️","🦜","🦩","🐧","🦔","🐫","🦙","🐊","🦕","🐋","🦑","🐄","🐏","🦌","🐈","🐕","🦉","🐓","🦢","🐇","🦎","🐅","🐆","🦧","🦦","🐑"]},{id:"food",emoji:"🍕",color:"#ef4444",preview:["🍕","🍦","🧁","🍓","🍩"],symbols:["🍎","🍌","🍓","🍉","🍕","🧁","🍩","🍪","🌮","🍦","🎂","🍫","🍬","🍭","🍿","🥐","🥨","🥯","🥞","🧇","🍔","🌭","🍟","🥪","🌯","🥗","🍝","🍜","🍣","🍱","🥟","🍡","🍧","🍨","🥧","🍰","🧀","🥚","🥑","🫐","🍇","🍊","🍋","🍑","🍒","🥝","🍍","🥥","🥕","🌽","🥒","🍆","🫑","🧅","🥜","🌰","☕","🧃"]},{id:"space",emoji:"🚀",color:"#8b5cf6",preview:["🚀","🌍","⭐","🛸","🌙"],symbols:["🚀","🌍","⭐","🛸","🌙","☀️","🪐","🌟","💫","✨","🌠","🔭","👽","🤖","👾","🛰️","🌌","💎","🔮","⚡","🌈","☄️","🧲","🔬","🧪","⏰","🗝️","🧭","🎯","🔔","🏆","🎪","🎠","🎡","🎢","🎮","🕹️","🎲","♟️","🧩","🎨","🖌️","🎸","🥁","🎺","🎹","🎤","🎧","📡","💡","🔋","🧬","🌋","🗻","❄️","🔥","💧","🌪️"]},{id:"mix",emoji:"🎪",color:"#3fb950",preview:["🐶","🍕","🚀","⭐","🎸"],symbols:["🐶","🐱","🦁","🐼","🦋","🐢","🐙","🐬","🍕","🍦","🧁","🍓","🍩","🍉","🎂","🍌","🚀","🌍","⭐","🛸","🌙","☀️","🌈","💎","🎈","🎸","⚽","🎯","🔔","🎁","🎮","🎲","❤️","🔥","💧","🌸","🌻","🧲","⚡","🔮","🎨","🎤","🥁","🧩","🏆","🎪","🎡","🎢","🦄","🐘","🐳","🦊","🐸","🐵","🐝","🐞","🍎","🌮"]}];function u(e){const a=[...e];for(let e=a.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[a[e],a[o]]=[a[o],a[e]]}return a}const m={easy:{order:3,totalRounds:10,timePerRound:15},medium:{order:5,totalRounds:12,timePerRound:12},hard:{order:7,totalRounds:15,timePerRound:10}},f=n.keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=n.keyframes`
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
`,h=n.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`,x=n.keyframes`
  0%, 100% { transform: rotate(0deg); }
  25%      { transform: rotate(-8deg); }
  75%      { transform: rotate(8deg); }
`,b=n.keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,y=n.keyframes`
  0%   { opacity: 1; transform: scale(0) rotate(0deg); }
  50%  { opacity: 1; transform: scale(1.2) rotate(180deg); }
  100% { opacity: 0; transform: scale(0) rotate(360deg); }
`,w=n.keyframes`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(80px) rotate(720deg); opacity: 0; }
`,v=n.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-60px) scale(1.5); }
`,$=n.keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.08); }
`,j=n.keyframes`
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-8px); }
  40%      { transform: translateX(8px); }
  60%      { transform: translateX(-6px); }
  80%      { transform: translateX(6px); }
`,k=n.keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.15), 0 4px 20px rgba(0,0,0,0.3); }
  50%      { box-shadow: 0 0 28px rgba(139, 92, 246, 0.25), 0 4px 24px rgba(0,0,0,0.4); }
`,z=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.06) 0%, transparent 70%),
    #080b12;
`,S=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: ${i.w4.spacing.xl};
  animation: ${f} 0.4s ease;
`,C=r.default.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`,T=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 340px;
  line-height: 1.5;
`,M=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,A=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 32px;
  background: linear-gradient(168deg, ${({accent:e})=>e}15 0%, ${i.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}40;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: ${i.w4.typography.fontFamily};
  min-width: 150px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({accent:e})=>e};
    border-radius: 20px 20px 0 0;
    opacity: 0.6;
  }

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: ${({accent:e})=>e}80;
    box-shadow: 0 8px 30px ${({accent:e})=>e}25;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,R=r.default.span`
  font-size: 40px;
  animation: ${h} 2s ease-in-out infinite;
`,_=r.default.span`
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,B=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,I=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px ${i.w4.spacing.md} ${i.w4.spacing.lg};
  gap: 16px;
  min-height: 0;
  width: 100%;
`,E=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.lg};
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
`,P=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${({color:e})=>e??i.w4.colors.border};
  border-radius: 24px;
  font-size: 15px;
  font-weight: 700;
  color: ${({color:e})=>e??i.w4.colors.mainText};
  animation: ${({urgent:e})=>e?$:"none"} 0.5s ease-in-out infinite;
`,D=r.default.p`
  font-size: 15px;
  font-weight: 600;
  color: ${({wrong:e})=>e?"#f97583":i.w4.colors.accent};
  margin: 0;
  text-align: center;
  min-height: 22px;
  animation: ${({wrong:e})=>e?j:"none"} 0.4s ease;
`,L=r.default.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 700px;
  min-height: 0;

  @media (max-width: ${i.w4.breakpoints.md}) {
    flex-direction: column;
    gap: 14px;
  }
`,O=r.default.div`
  position: relative;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 80%, rgba(79, 192, 255, 0.04) 0%, transparent 60%),
    ${i.w4.colors.surface};
  border: 2.5px solid ${({highlighted:e})=>e?"#8b5cf6":i.w4.colors.border};
  border-radius: 50%;
  padding: 28px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 340px;
  height: 340px;
  animation: ${g} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: border-color 0.25s, box-shadow 0.25s;
  ${({highlighted:e})=>e?`animation: ${k.toString()} 2s ease-in-out infinite;`:"box-shadow: 0 4px 20px rgba(0,0,0,0.3);"}

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, transparent 40%, transparent 60%, rgba(79, 192, 255, 0.15) 100%);
    pointer-events: none;
    opacity: ${({highlighted:e})=>e?1:.4};
    transition: opacity 0.3s;
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    width: 260px;
    height: 260px;
    padding: 20px;
    gap: 4px;
  }
`,F=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  font-size: ${({size:e})=>Math.round(.65*e)}px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition: all 0.15s ease;
  transform: rotate(${({rotDeg:e})=>e}deg);
  animation: ${g} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  position: relative;

  ${({correct:e})=>e?`\n    border-color: #3fb950;\n    background: rgba(63, 185, 80, 0.15);\n    animation: ${b.toString()} 0.4s ease;\n  `:""}

  ${({wrong:e})=>e?`\n    border-color: #f97583;\n    background: rgba(249, 117, 131, 0.15);\n    animation: ${x.toString()} 0.4s ease;\n  `:""}

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(${({rotDeg:e})=>e}deg) scale(1.15);
    border-color: ${i.w4.colors.accent}60;
  }

  &:active {
    transform: rotate(${({rotDeg:e})=>e}deg) scale(0.95);
  }
`,N=r.default.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(8, 11, 18, 0.7);
  z-index: 100;
  animation: ${f} 0.2s ease;
  pointer-events: none;
`,H=r.default.span`
  font-size: 80px;
  animation: ${h} 0.6s ease;
`,G=r.default.span`
  font-size: 32px;
  font-weight: 800;
  color: ${({color:e})=>e};
  margin-top: 8px;
  animation: ${g} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards;
`,Y=r.default.span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 800;
  color: #3fb950;
  pointer-events: none;
  animation: ${v} 0.8s ease-out forwards;
`,q=r.default.span`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  font-size: 18px;
  color: ${({color:e})=>e};
  pointer-events: none;
  animation: ${w} 1.2s ease-out ${({delay:e})=>e}s forwards;
  opacity: 0;
  animation-fill-mode: forwards;
`,V=r.default.span`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  font-size: 14px;
  pointer-events: none;
  animation: ${y} 0.6s ease ${({delay:e})=>e}s both;
`,W=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: ${i.w4.spacing.xl};
  animation: ${f} 0.5s ease;
  text-align: center;
`,J=r.default.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,X=r.default.span`
  font-size: 72px;
  animation: ${h} 1s ease-in-out infinite;
`,U=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,K=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,Q=r.default.span`
  font-size: 48px;
  font-weight: 800;
  color: ${i.w4.colors.accent};
`,Z=r.default.span`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  animation: ${b} 1s ease-in-out infinite;
`,ee=r.default.button`
  padding: 16px 40px;
  background: ${({accent:e})=>e};
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 52px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px ${({accent:e})=>e}40;
  }

  &:active { transform: translateY(-1px); }
`,ae=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 20px;
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
`,oe=r.default.div`
  font-size: 24px;
  font-weight: 800;
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.3;
  flex-shrink: 0;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: 18px;
  }
`,te=r.default.span`
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.5;
`,re=r.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
`,ne=r.default.button`
  padding: 8px 18px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: ${({active:e})=>e?"rgba(139, 92, 246, 0.18)":"transparent"};
  color: ${({active:e})=>e?"#8b5cf6":i.w4.colors.mainTextMuted};
  &:hover { color: #8b5cf6; background: rgba(139, 92, 246, 0.1); }
`,ie=r.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${i.w4.spacing.md};
  max-width: 480px;
  width: 100%;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    max-width: 240px;
  }
`,se=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px 22px;
  background: linear-gradient(168deg, ${({accent:e})=>e}12 0%, ${i.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}35;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: ${i.w4.typography.fontFamily};
  position: relative;
  overflow: hidden;
  min-height: 48px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${({accent:e})=>e}, transparent);
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: ${({accent:e})=>e}70;
    box-shadow: 0 8px 28px ${({accent:e})=>e}20;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,le=r.default.span`
  font-size: 44px;
  animation: ${h} 2.5s ease-in-out infinite;
`,ce=r.default.div`
  display: flex;
  gap: 4px;
  font-size: 20px;
  opacity: 0.7;
`,de=r.default.span`
  font-size: 17px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,pe=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,ue=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],me=["great","amazing","perfect","super","wow","fast"],fe="atlantis-spotit-best";function ge(e){try{return JSON.parse(localStorage.getItem(fe)??"{}")[e]??0}catch{return 0}}function he({lang:e,canOnline:a}){const[o,r]=(0,t.useState)("theme"),[n,c]=(0,t.useState)("solo"),[f,g]=(0,t.useState)("animals"),[h,x]=(0,t.useState)("easy"),[b,y]=(0,t.useState)(null),[w,v]=(0,t.useState)(-1),[$,j]=(0,t.useState)(0),[k,he]=(0,t.useState)(0),[xe,be]=(0,t.useState)(0),[ye,we]=(0,t.useState)({}),[ve,$e]=(0,t.useState)(0),[je,ke]=(0,t.useState)(""),[ze,Se]=(0,t.useState)(null),[Ce,Te]=(0,t.useState)(null),[Me,Ae]=(0,t.useState)(!1),[Re,_e]=(0,t.useState)(!1),[Be,Ie]=(0,t.useState)(new Map),[Ee,Pe]=(0,t.useState)(new Map),[De,Le]=(0,t.useState)([[],[]]),[Oe,Fe]=(0,t.useState)(!1),[Ne,He]=(0,t.useState)("none"),Ge=(0,t.useRef)(null),Ye=(0,t.useRef)([]),qe=(0,t.useRef)(0),Ve=(0,t.useRef)(!1),[We]=(0,t.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),Je=(0,t.useCallback)(a=>{switch(a.type){case"guest-joined":Ue.current.addPlayer({id:a.playerId,name:a.name,isHost:!1}),Ue.current.sendEvent({type:"host-ack",name:We,playerId:Ue.current.room?.playerId??"",players:Ue.current.room?.players??[]});break;case"host-ack":Ue.current.setConnected(a.name),a.players&&Ue.current.setPlayers([...a.players,{id:Ue.current.room?.playerId??"",name:We,isHost:!1}]);break;case"player-list":Ue.current.setPlayers(a.players);break;case"game-state":{const o=a.payload;if("guest-spot"===o.action){if(Ve.current)return;Ve.current=!0;const a=o.timer,t=100+Math.ceil(2*a),n=o.playerId;be(e=>e+t),we(e=>({...e,[n]:(e[n]??0)+t}));const i=`${o.cardIndex}-${o.symbolIndex}`;Te(i),Ae(!1),ke(d("theyScored",e)),r("correct"),Ue.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:n,winnerName:"",points:t,correctId:i}}),setTimeout(()=>{Ze.current()},900)}else if("start-round"===o.action){const e=o.pair,a=o.round,t=o.matchSymbol,n=o.totalRounds,i=o.timePerRound;y(e),v(t),j(a),qe.current=a-1,$e(i),Se(null),Te(null),ke(""),Ae(!1),Ve.current=!1,r("playing"),Qe.current={totalRounds:n,timePerRound:i}}else if("round-result"===o.action){Ve.current=!0;const a=o.winnerId,t=Ue.current.room?.playerId,n=a===t,i=o.points;we(e=>({...e,[a]:(e[a]??0)+i})),n?(he(e=>e+i),ke(d("youScored",e))):(be(e=>e+i),ke(d("theyScored",e))),Te(o.correctId),Ae(n),r("correct")}else"game-over-scores"===o.action&&(he(o.myScore??k),be(o.opponentScore??xe),r("gameover"));break}case"game-over":r("gameover");break;case"rematch-request":He("received");break;case"rematch-accepted":He("none"),he(0),be(0),r("menu");break;case"player-left":Fe(!0),r("gameover")}},[We,e]),Xe=(0,s.Ky)({gameId:"spotit",playerName:We,onEvent:Je}),Ue=(0,t.useRef)(Xe);Ue.current=Xe;const Ke=(0,s.zj)({gameId:"spotit",enabled:"online"===n}),Qe=(0,t.useRef)({totalRounds:10,timePerRound:15}),Ze=(0,t.useRef)(()=>{}),ea=m[h],aa=(0,t.useMemo)(()=>{return e=f,p.find(a=>a.id===e)?.symbols??p[3].symbols;var e},[f]),oa=(0,t.useCallback)(e=>{const a=new Map,o=new Map,t=[u(e[0].symbols),u(e[1].symbols)];e.forEach((e,r)=>{t[r].forEach((e,t)=>{const n=`${r}-${e}`;a.set(n,Math.floor(40*Math.random()-20)),o.set(n,.05*t)})}),Ie(a),Pe(o),Le(t)},[]),ta=(0,t.useCallback)(e=>{x(e);const a=m[e];Qe.current={totalRounds:a.totalRounds,timePerRound:a.timePerRound};const o=u(function(e){const a=[];a.push({symbols:Array.from({length:e+1},(e,a)=>a)});for(let o=0;o<e;o++){const t=[0];for(let a=0;a<e;a++)t.push(e+1+o*e+a);a.push({symbols:t})}for(let o=0;o<e;o++)for(let t=0;t<e;t++){const r=[o+1];for(let a=0;a<e;a++)r.push(e+1+a*e+(o*a+t)%e);a.push({symbols:r})}return a}(a.order));Ye.current=o,qe.current=0,Ve.current=!1,j(1),he(0),be(0),we({}),ke(""),Se(null),Te(null),_e(!1);const t=[o[0],o[1]];y(t);const i=t[0].symbols.find(e=>t[1].symbols.includes(e))??-1;v(i),$e(a.timePerRound),oa(t),r("playing"),"online"===n&&"host"===Ue.current.room?.role&&Ue.current.sendEvent({type:"game-state",payload:{action:"start-round",pair:t,round:1,matchSymbol:i,totalRounds:a.totalRounds,timePerRound:a.timePerRound}})},[oa,n]);(0,t.useEffect)(()=>{if("playing"===o)return Ge.current=setInterval(()=>{$e(e=>e<=1?(Ge.current&&clearInterval(Ge.current),r("gameover"),0):e-1)},1e3),()=>{Ge.current&&clearInterval(Ge.current)};Ge.current&&clearInterval(Ge.current)},[o]),(0,t.useEffect)(()=>{if("gameover"===o){const e=ge(h);k>e&&(function(e,a){try{const o=JSON.parse(localStorage.getItem(fe)??"{}");o[e]=a,localStorage.setItem(fe,JSON.stringify(o))}catch{}}(h,k),_e(!0))}},[o,h,k]);const ra=(0,t.useCallback)(()=>{const e=qe.current+1;qe.current=e,Ve.current=!1;const a=Ye.current,o=m[h];if(e>=o.totalRounds||2*e+1>=a.length)return r("gameover"),void("online"===n&&Ue.current.sendEvent({type:"game-over",winner:"draw"}));const t=[a[2*e],a[2*e+1]];y(t);const i=t[0].symbols.find(e=>t[1].symbols.includes(e))??-1;v(i),j(e+1),$e(o.timePerRound),Se(null),Te(null),ke(""),Ae(!1),oa(t),r("playing"),"online"===n&&"host"===Ue.current.room?.role&&Ue.current.sendEvent({type:"game-state",payload:{action:"start-round",pair:t,round:e+1,matchSymbol:i,totalRounds:o.totalRounds,timePerRound:o.timePerRound}})},[h,oa,n]);Ze.current=ra;const na=(0,t.useCallback)((a,t)=>{if("playing"===o){if("online"===n){if(a!==w)return Se(`${t}-${a}`),ke(d("oops",e)),he(e=>Math.max(0,e-20)),void setTimeout(()=>{Se(null),ke(d("tapMatch",e))},500);if(Ve.current)return;if("host"===(Ue.current.room?.role??"guest")){Ve.current=!0;const o=100+Math.ceil(2*ve);he(e=>e+o),Te(`${t}-${a}`),Ae(!0);const n=me[Math.floor(Math.random()*me.length)];ke(d(n,e)),r("correct");const i=Ue.current.room?.playerId??"";we(e=>({...e,[i]:(e[i]??0)+o})),Ue.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:i,winnerName:Ue.current.room?.playerName??"",points:o,correctId:`${t}-${a}`}}),setTimeout(()=>{ra()},900)}else Ue.current.sendEvent({type:"game-state",payload:{action:"guest-spot",symbolIndex:a,cardIndex:t,timer:ve,playerId:Ue.current.room?.playerId}});return}if(a===w){const o=100+Math.ceil(2*ve);he(e=>e+o),Te(`${t}-${a}`),Ae(!0);const n=me[Math.floor(Math.random()*me.length)];ke(d(n,e)),r("correct"),setTimeout(()=>{ra()},900)}else Se(`${t}-${a}`),ke(d("oops",e)),he(e=>Math.max(0,e-20)),setTimeout(()=>{Se(null),ke(d("tapMatch",e))},500)}},[o,w,ve,e,ra,n]),ia=(0,t.useMemo)(()=>"easy"===h?80:"medium"===h?64:52,[h]),sa=ge(h);if("theme"===o)return(0,l.jsx)(z,{children:(0,l.jsxs)(S,{children:[(0,l.jsxs)(C,{children:["🃏 ",d("title",e)]}),(0,l.jsx)(T,{children:d("pickTheme",e)}),(0,l.jsx)(ie,{children:p.map(a=>(0,l.jsxs)(se,{accent:a.color,onClick:()=>{g(a.id),r("menu")},children:[(0,l.jsx)(le,{children:a.emoji}),(0,l.jsx)(de,{children:d(a.id,e)}),(0,l.jsx)(ce,{children:a.preview.map((e,a)=>(0,l.jsx)("span",{children:e},a))}),(0,l.jsx)(pe,{children:d(`${a.id}Desc`,e)})]},a.id))})]})});if("menu"===o){const o=e=>{"online"===n?(x(e),r("lobby")):ta(e)};return(0,l.jsx)(z,{children:(0,l.jsxs)(S,{children:[(0,l.jsxs)(C,{children:["🃏 ",d("title",e)]}),(0,l.jsx)(T,{children:d("subtitle",e)}),a&&(0,l.jsxs)(re,{children:[(0,l.jsxs)(ne,{active:"solo"===n,onClick:()=>c("solo"),children:["🎯 ",d("solo",e)]}),(0,l.jsxs)(ne,{active:"online"===n,onClick:()=>c("online"),children:["🌐 ",d("online",e)]})]}),(0,l.jsxs)(M,{children:[(0,l.jsxs)(A,{accent:"#3fb950",onClick:()=>o("easy"),children:[(0,l.jsx)(R,{children:"🌟"}),(0,l.jsx)(_,{children:d("easy",e)}),(0,l.jsx)(B,{children:d("easyDesc",e)})]}),(0,l.jsxs)(A,{accent:"#f59e0b",onClick:()=>o("medium"),children:[(0,l.jsx)(R,{children:"🔥"}),(0,l.jsx)(_,{children:d("medium",e)}),(0,l.jsx)(B,{children:d("mediumDesc",e)})]}),(0,l.jsxs)(A,{accent:"#f97583",onClick:()=>o("hard"),children:[(0,l.jsx)(R,{children:"💪"}),(0,l.jsx)(_,{children:d("hard",e)}),(0,l.jsx)(B,{children:d("hardDesc",e)})]})]}),sa>0&&"solo"===n&&(0,l.jsxs)(ae,{children:["🏆 ",d("bestScore",e),": ",sa]})]})})}if("lobby"===o)return(0,l.jsx)(z,{children:(0,l.jsxs)(S,{children:[(0,l.jsxs)(C,{children:["🃏 ",d("title",e)]}),Xe.room?.connected?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(T,{children:"host"===Xe.room.role?"pt"===e?`${Xe.room.players.length} jogadores ligados. Escolhe a dificuldade para começar.`:`${Xe.room.players.length} players connected. Choose difficulty to start.`:"pt"===e?`Ligado! ${Xe.room.players.length} jogadores na sala. À espera que o anfitrião comece…`:`Connected! ${Xe.room.players.length} players in room. Waiting for host to start…`}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:Xe.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===Xe.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===Xe.room.role&&(0,l.jsxs)(M,{children:[(0,l.jsxs)(A,{accent:"#3fb950",onClick:()=>ta("easy"),children:[(0,l.jsx)(R,{children:"🌟"}),(0,l.jsx)(_,{children:d("easy",e)})]}),(0,l.jsxs)(A,{accent:"#f59e0b",onClick:()=>ta("medium"),children:[(0,l.jsx)(R,{children:"🔥"}),(0,l.jsx)(_,{children:d("medium",e)})]}),(0,l.jsxs)(A,{accent:"#f97583",onClick:()=>ta("hard"),children:[(0,l.jsx)(R,{children:"💪"}),(0,l.jsx)(_,{children:d("hard",e)})]})]})]}):(0,l.jsx)(s.XB,{lang:e,room:Xe.room,error:Xe.error,availableRooms:Ke.rooms,onCreateRoom:()=>{const{code:e,roomName:a}=Xe.createRoom();Ke.publishRoom({code:e,roomName:a,hostName:We,playerCount:1})},onJoinRoom:e=>Xe.joinRoom(e),onLeaveRoom:()=>{Ke.unpublishRoom(),Xe.leaveRoom(),r("menu")}})]})});if("gameover"===o){const a="online"===n,o=k>xe,t=k===xe,s=d(Oe?"opponentLeft":t?"tied":o?"youWin":"youLose",e),p=()=>{"received"===Ne?(He("none"),he(0),be(0),r("menu"),Ue.current.sendEvent({type:"rematch-accepted"})):(He("sent"),Ue.current.sendEvent({type:"rematch-request"}))};return(0,l.jsx)(z,{children:(0,l.jsxs)(W,{children:[(0,l.jsx)(X,{children:a?o?"🎉":t?"🤝":"😅":"🏆"}),(0,l.jsx)(J,{children:a?s:d("gameOver",e)}),(0,l.jsxs)(U,{children:[a&&(Xe.room?.players??[]).length>2?(0,l.jsx)(l.Fragment,{children:(Xe.room?.players??[]).map(e=>({...e,pts:ye[e.id]??0})).sort((e,a)=>a.pts-e.pts).map((a,o)=>(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[(0,l.jsx)("span",{style:{fontSize:16,fontWeight:700,color:0===o?"#3fb950":i.w4.colors.mainTextMuted,minWidth:20},children:0===o?"🥇":1===o?"🥈":2===o?"🥉":`${o+1}.`}),(0,l.jsxs)("span",{style:{color:a.id===Xe.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText,fontWeight:600,flex:1},children:[a.name,a.id===Xe.room?.playerId?` (${d("you",e)})`:""]}),(0,l.jsx)("span",{style:{fontSize:20,fontWeight:800,color:0===o?"#3fb950":i.w4.colors.mainText},children:a.pts})]},a.id))}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(K,{children:d(a?"you":"finalScore",e)}),(0,l.jsx)(Q,{children:k}),a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(K,{style:{marginTop:8},children:d("opponent",e)}),(0,l.jsx)(Q,{style:{color:"#f97583"},children:xe})]})]}),(0,l.jsxs)(K,{children:[$," ",d("rounds",e)]})]}),!a&&Re&&(0,l.jsxs)(Z,{children:["🎉 ",d("newRecord",e)]}),!a&&sa>0&&!Re&&(0,l.jsxs)(ae,{children:["🏆 ",d("bestScore",e),": ",sa]}),a&&!Oe?"sent"===Ne?(0,l.jsx)(ee,{accent:"#666",children:d("waiting",e)}):"received"===Ne?(0,l.jsxs)(ee,{accent:"#3fb950",onClick:p,children:[d("rematch",e)," ✓"]}):(0,l.jsx)(ee,{accent:"#8b5cf6",onClick:p,children:d("rematch",e)}):(0,l.jsx)(ee,{accent:"#8b5cf6",onClick:()=>{a&&Ue.current.leaveRoom(),c("solo"),r("theme")},children:d("playAgain",e)})]})})}const la=ve<=3?"#f97583":ve<=6?"#f59e0b":i.w4.colors.accent;return(0,l.jsx)(z,{children:(0,l.jsxs)(I,{children:[(0,l.jsxs)(E,{children:[(0,l.jsxs)(P,{children:["⭐ ",d("online"===n?"you":"score",e),": ",k]}),"online"===n&&(0,l.jsxs)(P,{color:"#f97583",children:["👤 ",d("opponent",e),": ",xe]}),(0,l.jsxs)(P,{children:[d("round",e)," ",$,"/","online"===n?Qe.current.totalRounds:ea.totalRounds]}),(0,l.jsxs)(P,{color:la,urgent:ve<=3,children:["⏱️ ",ve,"s"]})]}),(0,l.jsx)(D,{wrong:!!ze,children:je||d("tapMatch",e)}),b&&(0,l.jsx)(L,{children:b.map((e,a)=>(0,l.jsxs)(l.Fragment,{children:[1===a&&(0,l.jsx)(oe,{children:"VS"}),(0,l.jsxs)(O,{highlighted:0===a,children:[(0,l.jsx)(te,{children:0===a?"A":"B"}),De[a].map(e=>{const o=`${a}-${e}`,t=Be.get(o)??0,r=Ee.get(o)??0,n=Ce===o,i=ze===o;return(0,l.jsxs)(F,{size:ia,rotDeg:t,correct:n,wrong:i,style:{animationDelay:`${r}s`},onClick:()=>na(e,a),children:[aa[e%aa.length],n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(V,{x:10,y:10,delay:0,children:"✨"}),(0,l.jsx)(V,{x:80,y:20,delay:.1,children:"✨"}),(0,l.jsx)(V,{x:20,y:80,delay:.15,children:"✨"}),(0,l.jsx)(V,{x:75,y:75,delay:.2,children:"✨"})]})]},o)}),Me&&0===a&&(0,l.jsxs)(Y,{children:["+",100+Math.ceil(2*ve)]})]},`card-${a}-${$}`)]}))}),"correct"===o&&(0,l.jsxs)(N,{children:[(0,l.jsx)(H,{children:"🎉"}),(0,l.jsx)(G,{color:"#3fb950",children:je}),ue.map((e,a)=>(0,l.jsx)(q,{left:10+15*a,delay:.08*a,color:e,children:["🎊","⭐","🌟","💫","✨","🎉"][a]},a))]})]})})}},1623(e,a,o){o.d(a,{z:()=>xe});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(1364),l=o(5723);const c="ABCDEFGHIJLMNOPRSTUVZ",d="ABCDEFGHIJKLMNOPRSTUVWYZ",p=[0,60,90,120],u=[{id:"cities",icon:"🏙️",label:{pt:"Cidades",en:"Cities"}},{id:"countries",icon:"🌍",label:{pt:"Países",en:"Countries"}},{id:"animals",icon:"🐾",label:{pt:"Animais",en:"Animals"}},{id:"fruits",icon:"🍎",label:{pt:"Frutas",en:"Fruits"}},{id:"movies",icon:"🎬",label:{pt:"Filmes",en:"Movies"}},{id:"tvshows",icon:"📺",label:{pt:"Séries",en:"TV Shows"}},{id:"brands",icon:"🏷️",label:{pt:"Marcas",en:"Brands"}},{id:"sports",icon:"⚽",label:{pt:"Desportos",en:"Sports"}},{id:"musicians",icon:"🎵",label:{pt:"Músicos",en:"Musicians"}},{id:"books",icon:"📚",label:{pt:"Livros",en:"Books"}},{id:"names",icon:"🧑",label:{pt:"Nomes",en:"Names"}},{id:"foods",icon:"🍽️",label:{pt:"Comidas",en:"Foods"}},{id:"history",icon:"🏛️",label:{pt:"História",en:"History"}},{id:"jobs",icon:"💼",label:{pt:"Profissões",en:"Jobs"}},{id:"colors",icon:"🎨",label:{pt:"Cores",en:"Colors"}},{id:"flowers",icon:"🌺",label:{pt:"Flores",en:"Flowers"}}],m={cities:{A:{pt:["Aveiro","Almada","Amadora","Albufeira"],en:["Amsterdam","Athens","Atlanta","Auckland"]},B:{pt:["Braga","Beja","Bragança","Barcelos"],en:["Berlin","Boston","Barcelona","Brussels"]},C:{pt:["Coimbra","Cascais","Covilhã","Chaves"],en:["Chicago","Cairo","Cologne","Calgary"]},D:{pt:["Dourinho","Douro","Évora (não)"],en:["Dubai","Dublin","Denver","Damascus"]},E:{pt:["Évora","Elvas","Espinho"],en:["Edinburgh","Essex","El Paso","Exeter"]},F:{pt:["Faro","Funchal","Figueira da Foz","Felgueiras"],en:["Florence","Frankfurt","Fukuoka","Fresno"]},G:{pt:["Guimarães","Guarda","Gondomar","Grândola"],en:["Geneva","Glasgow","Guangzhou","Guadalajara"]},H:{pt:["Horta","Hungria (não)"],en:["Hamburg","Havana","Helsinki","Houston"]},I:{pt:["Ílhavo","Idanha-a-Nova"],en:["Istanbul","Indianapolis","Islamabad","Izmir"]},J:{pt:["Joane","Juromenha"],en:["Jakarta","Jerusalem","Johannesburg","Jacksonville"]},L:{pt:["Lisboa","Leiria","Loures","Lagos"],en:["London","Los Angeles","Lima","Lisbon"]},M:{pt:["Matosinhos","Montijo","Miranda do Douro","Moura"],en:["Madrid","Milan","Melbourne","Moscow"]},N:{pt:["Nazaré","Nisa","Nordeste"],en:["New York","Naples","Nairobi","Nashville"]},O:{pt:["Odivelas","Ovar","Óbidos","Olhão"],en:["Oslo","Ottawa","Oxford","Orlando"]},P:{pt:["Porto","Portimão","Ponte de Lima","Póvoa de Varzim"],en:["Paris","Prague","Porto","Pretoria"]},R:{pt:["Régua","Rio Maior","Reguengos","Resende"],en:["Rome","Rio de Janeiro","Rotterdam","Rabat"]},S:{pt:["Setúbal","Sintra","Santarém","Sines"],en:["Sydney","Stockholm","Seoul","Seville"]},T:{pt:["Torres Vedras","Tomar","Tavira","Trofa"],en:["Tokyo","Toronto","Tehran","Tunis"]},V:{pt:["Viseu","Viana do Castelo","Vila Nova de Gaia","Valongo"],en:["Vienna","Vancouver","Venice","Vilnius"]}},countries:{A:{pt:["Alemanha","Angola","Argentina","Austrália"],en:["Argentina","Australia","Austria","Angola"]},B:{pt:["Brasil","Bélgica","Bulgária","Bolívia"],en:["Brazil","Belgium","Bulgaria","Bolivia"]},C:{pt:["China","Colômbia","Cuba","Chile"],en:["China","Colombia","Cuba","Chile"]},D:{pt:["Dinamarca","Djibuti"],en:["Denmark","Dominican Republic","Djibouti"]},E:{pt:["Espanha","Egipto","Etiópia","Equador"],en:["Egypt","Ethiopia","Ecuador","Estonia"]},F:{pt:["França","Finlândia","Filipinas","Fiji"],en:["France","Finland","Philippines","Fiji"]},G:{pt:["Grécia","Guatemala","Gana","Guiné"],en:["Greece","Guatemala","Ghana","Germany"]},H:{pt:["Hungria","Honduras","Haiti"],en:["Hungary","Honduras","Haiti","Holland"]},I:{pt:["Itália","Índia","Irlanda","Islândia"],en:["Italy","India","Ireland","Iceland"]},J:{pt:["Japão","Jordânia","Jamaica"],en:["Japan","Jordan","Jamaica"]},L:{pt:["Líbia","Líbano","Letónia","Lesoto"],en:["Libya","Lebanon","Latvia","Lesotho"]},M:{pt:["México","Marrocos","Moçambique","Madagascar"],en:["Mexico","Morocco","Mozambique","Malaysia"]},N:{pt:["Noruega","Nepal","Nigéria","Nicarágua"],en:["Norway","Nepal","Nigeria","Nicaragua"]},O:{pt:["Omã"],en:["Oman"]},P:{pt:["Portugal","Peru","Paquistão","Polónia"],en:["Portugal","Peru","Pakistan","Poland"]},R:{pt:["Roménia","Rússia","Ruanda"],en:["Romania","Russia","Rwanda"]},S:{pt:["Suécia","Suíça","Sérvia","Síria"],en:["Sweden","Switzerland","Serbia","Spain"]},T:{pt:["Turquia","Tunísia","Tanzânia","Tailândia"],en:["Turkey","Tunisia","Tanzania","Thailand"]},V:{pt:["Venezuela","Vietname"],en:["Venezuela","Vietnam"]}},animals:{A:{pt:["Abelha","Águia","Antílope","Aranha"],en:["Antelope","Alligator","Ape","Albatross"]},B:{pt:["Baleia","Borboleta","Burro","Búfalo"],en:["Bear","Buffalo","Butterfly","Baboon"]},C:{pt:["Cavalo","Coelho","Crocodilo","Camelo"],en:["Cat","Crocodile","Camel","Cobra"]},D:{pt:["Delfim","Dragão","Dromedário"],en:["Dolphin","Dog","Donkey","Deer"]},E:{pt:["Elefante","Esquilo","Escorpião"],en:["Elephant","Eagle","Eel","Elk"]},F:{pt:["Falcão","Flamingo","Formiga","Foca"],en:["Fox","Flamingo","Frog","Falcon"]},G:{pt:["Girafa","Gorila","Gato","Gavião"],en:["Giraffe","Gorilla","Guppy","Gazelle"]},H:{pt:["Hipopótamo","Hiena"],en:["Hippo","Hyena","Hare","Hawk"]},I:{pt:["Iguana","Íbis"],en:["Iguana","Ibis","Impala"]},J:{pt:["Javali","Jaguar","Jerboa"],en:["Jaguar","Jellyfish","Jackal"]},L:{pt:["Leão","Lobo","Lagarto","Lince"],en:["Lion","Lizard","Leopard","Lynx"]},M:{pt:["Macaco","Morcego","Mocho","Morsa"],en:["Monkey","Moose","Mouse","Meerkat"]},N:{pt:["Narval","Nandú"],en:["Narwhal","Newt","Nightingale"]},O:{pt:["Ouriço","Orangotango","Ovelha","Orca"],en:["Owl","Octopus","Otter","Orangutan"]},P:{pt:["Panda","Pinguim","Pato","Papagaio"],en:["Panda","Penguin","Parrot","Panther"]},R:{pt:["Rato","Rinoceronte","Raposa","Rouxinol"],en:["Rabbit","Rhinoceros","Raccoon","Robin"]},S:{pt:["Sapo","Serpente","Sardinha","Salamandra"],en:["Snake","Shark","Salmon","Squirrel"]},T:{pt:["Tigre","Tartaruga","Texugo","Tubarão"],en:["Tiger","Turtle","Toad","Toucan"]},V:{pt:["Vaca","Veado","Vespa"],en:["Vulture","Viper","Vole"]}},fruits:{A:{pt:["Abacate","Abacaxi","Amora","Ameixa"],en:["Apple","Avocado","Apricot","Acai"]},B:{pt:["Banana","Blueberry","Bergamota"],en:["Banana","Blueberry","Blackberry","Boysenberry"]},C:{pt:["Cereja","Coco","Carambola","Caqui"],en:["Cherry","Coconut","Clementine","Cranberry"]},D:{pt:["Damasco","Durian"],en:["Date","Dragonfruit","Durian"]},E:{pt:["Eirado","Escaramuça"],en:["Elderberry"]},F:{pt:["Figo","Framboesa","Feijoa"],en:["Fig","Feijoa"]},G:{pt:["Goiaba","Groselha","Granadilha"],en:["Grape","Guava","Grapefruit","Gooseberry"]},H:{pt:["Higo"],en:["Honeydew","Huckleberry"]},I:{pt:["Imbú"],en:["Imbe"]},J:{pt:["Jaca","Jabuticaba"],en:["Jackfruit","Jujube"]},L:{pt:["Laranja","Limão","Lima","Lichias"],en:["Lemon","Lime","Lychee","Lingonberry"]},M:{pt:["Maçã","Manga","Melão","Melancia"],en:["Mango","Melon","Mulberry","Mandarin"]},N:{pt:["Nectarina","Nêspera"],en:["Nectarine","Nance"]},O:{pt:["Oliveira"],en:["Orange","Olive"]},P:{pt:["Pêra","Pêssego","Papaia","Pitaia"],en:["Peach","Pear","Pineapple","Papaya"]},R:{pt:["Romã","Rambutan"],en:["Raspberry","Rambutan"]},S:{pt:["Saboticaba","Sapota"],en:["Strawberry","Star fruit","Soursop"]},T:{pt:["Tamarindo","Tomate","Tangerina"],en:["Tamarind","Tangerine","Tomato"]},V:{pt:["Uva (não)"],en:["Vanilla bean"]}},names:{A:{pt:["Ana","António","André","Alice"],en:["Anna","Andrew","Alice","Adam"]},B:{pt:["Beatriz","Bruno","Bruna","Bernardo"],en:["Benjamin","Bella","Brian","Beatrice"]},C:{pt:["Carlos","Carolina","Catarina","Clara"],en:["Carlos","Catherine","Clara","Christopher"]},D:{pt:["David","Diana","Diogo","Daniel"],en:["David","Diana","Daniel","Daisy"]},E:{pt:["Eduardo","Eva","Elisa","Emília"],en:["Edward","Emma","Emily","Ethan"]},F:{pt:["Filipa","Francisco","Fernanda","Fábio"],en:["Frank","Frances","Felix","Fiona"]},G:{pt:["Gonçalo","Gabriela","Guida","Gil"],en:["George","Grace","Gabriel","Gabrielle"]},H:{pt:["Henrique","Helena","Hugo"],en:["Henry","Hannah","Harry","Helen"]},I:{pt:["Inês","Isabel","Igor"],en:["Isabelle","Ivan","Irene","Iris"]},J:{pt:["João","Jorge","Joana","Juliana"],en:["James","Julia","John","Jessica"]},L:{pt:["Luís","Laura","Leonardo","Leonor"],en:["Lucas","Laura","Leonardo","Lily"]},M:{pt:["Maria","Miguel","Marta","Manuel"],en:["Matthew","Maria","Mia","Michael"]},N:{pt:["Nuno","Natália","Natacha"],en:["Noah","Natalie","Nicholas","Nina"]},O:{pt:["Olga","Óscar"],en:["Oliver","Olivia","Oscar"]},P:{pt:["Pedro","Paula","Paulo","Patrícia"],en:["Peter","Patricia","Paul","Penelope"]},R:{pt:["Ricardo","Rita","Rodrigo","Rosa"],en:["Richard","Rachel","Robert","Rebecca"]},S:{pt:["Sara","Sofia","Sérgio","Susana"],en:["Samuel","Sarah","Sophia","Simon"]},T:{pt:["Tiago","Teresa","Tomás","Tatiana"],en:["Thomas","Tessa","Timothy","Tina"]},V:{pt:["Vera","Vítor","Valentina"],en:["Victor","Valentina","Victoria"]}},foods:{A:{pt:["Arroz","Atum","Azeitonas","Alho"],en:["Apple pie","Avocado toast","Asparagus","Almond"]},B:{pt:["Bacalhau","Bifes","Batatas","Broa"],en:["Bacon","Bagel","Biscuit","Brownie"]},C:{pt:["Caldo verde","Chouriço","Cenoura","Cebola"],en:["Cake","Carrot","Cheese","Croissant"]},D:{pt:["Doce de leite","Dobrada"],en:["Doughnut","Dumpling","Dal"]},E:{pt:["Espetada","Enchidos","Esparguete"],en:["Egg","Enchilada","Eggplant"]},F:{pt:["Frango","Feijão","Farinha","Francesinha"],en:["Fish","Fries","Falafel","Fondue"]},G:{pt:["Grão","Gelado","Ginja"],en:["Grilled chicken","Guacamole","Gelato","Granola"]},H:{pt:["Hambúrguer","Hotdog"],en:["Hamburger","Hotdog","Hummus","Honey"]},I:{pt:["Iogurte"],en:["Ice cream","Iced tea"]},J:{pt:["Jantar","Jardineira"],en:["Jam","Jelly","Jalapeño"]},L:{pt:["Linguiça","Lentilhas","Laranja"],en:["Lasagna","Lentil soup","Lemon tart"]},M:{pt:["Massa","Migas","Mel","Manteiga"],en:["Mango sorbet","Meatball","Mushroom","Moussaka"]},N:{pt:["Natas","Nozes"],en:["Noodles","Nachos","Nut butter"]},O:{pt:["Ovos","Omeleta"],en:["Omelette","Oyster","Oatmeal"]},P:{pt:["Pão","Peixe","Pizza","Pudim"],en:["Pizza","Pancake","Pasta","Pudding"]},R:{pt:["Risotto","Rissol","Robalo"],en:["Rice","Risotto","Ramen","Roast beef"]},S:{pt:["Sopa","Sardinha","Salada"],en:["Salad","Sandwich","Sushi","Soup"]},T:{pt:["Tosta","Tremoços","Tarte"],en:["Tacos","Tofu","Tomato soup","Toast"]},V:{pt:["Vitela","Vinagrete"],en:["Vegetable stir fry","Vanilla pudding","Veal"]}},colors:{A:{pt:["Amarelo","Azul","Anil","Âmbar"],en:["Amber","Azure","Aquamarine"]},B:{pt:["Branco","Bordô","Bege"],en:["Blue","Black","Brown","Beige"]},C:{pt:["Castanho","Carmim","Ciano","Coral"],en:["Crimson","Cyan","Coral","Cream"]},D:{pt:["Dourado"],en:["Dark blue","Denim"]},E:{pt:["Esmeralda","Escarlate"],en:["Emerald","Electric blue"]},F:{pt:["Fucsia","Ferrugem","Flamingo"],en:["Fuchsia","Flamingo pink","Forest green"]},G:{pt:["Grafite","Gelo"],en:["Gold","Green","Gray"]},H:{pt:["Húmido (não)"],en:["Hot pink","Honey yellow"]},I:{pt:["Índigo","Ivory"],en:["Indigo","Ivory"]},J:{pt:["Jade"],en:["Jade","Jasmine"]},L:{pt:["Laranja","Lavanda","Lilás","Limão"],en:["Lavender","Lime green","Lilac"]},M:{pt:["Magenta","Marrom","Malva"],en:["Magenta","Maroon","Mauve","Mint"]},N:{pt:["Negro","Nata"],en:["Navy blue","Neon green"]},O:{pt:["Ocre","Oliveira"],en:["Orange","Olive","Ochre"]},P:{pt:["Preto","Prata","Rosa","Púrpura"],en:["Purple","Pink","Peach","Platinum"]},R:{pt:["Roxo","Rubi","Rosa"],en:["Red","Ruby","Rose"]},S:{pt:["Salmão","Sépia"],en:["Salmon","Sapphire","Scarlet","Silver"]},T:{pt:["Turquesa","Terra"],en:["Turquoise","Teal","Tan"]},V:{pt:["Verde","Violeta","Vermelho"],en:["Violet","Viridian"]}},sports:{A:{pt:["Atletismo","Andebol","Aeróbica","Aikido"],en:["Athletics","Archery","American football","Aerobics"]},B:{pt:["Basquetebol","Boxe","Badminton","Baseball"],en:["Basketball","Boxing","Badminton","Baseball"]},C:{pt:["Ciclismo","Corrida","Cricket","Canoagem"],en:["Cycling","Cricket","Climbing","Canoeing"]},D:{pt:["Dança","Dart","Dodgeball"],en:["Diving","Darts","Dodgeball"]},E:{pt:["Equitação","Esgrima"],en:["Equestrian","Fencing (esgrima em EN é Fencing)"]},F:{pt:["Futebol","Futsal","Fórmula 1","Fisiculturismo"],en:["Football","Futsal","Formula 1"]},G:{pt:["Ginástica","Golfe","Gateball"],en:["Golf","Gymnastics","Go-karting"]},H:{pt:["Hóquei","Halterofilia","Hípica"],en:["Hockey","Handball","Hurdles"]},I:{pt:["Ioga"],en:["Ice hockey","Ice skating"]},J:{pt:["Judo","Jet ski"],en:["Judo","Javelin","Jet skiing"]},L:{pt:["Luta livre","Lacrosse"],en:["Lacrosse","Long jump"]},M:{pt:["Maratona","Mergulho","MMA"],en:["Marathon","Mixed martial arts","Motocross"]},N:{pt:["Natação","Netball"],en:["Swimming (Natação em PT)","Netball"]},O:{pt:["Orientação"],en:["Orienteering","Olympic weightlifting"]},P:{pt:["Padel","Polo","Patinagem","Pesca desportiva"],en:["Padel","Polo","Parkour","Pentathlon"]},R:{pt:["Rugby","Remo","Raquetebol"],en:["Rugby","Rowing","Racquetball"]},S:{pt:["Surf","Squash","Ski"],en:["Swimming","Surfing","Squash","Skiing"]},T:{pt:["Ténis","Taekwondo","Tiro ao alvo"],en:["Tennis","Taekwondo","Triathlon"]},V:{pt:["Voleibol","Vela","Voo livre"],en:["Volleyball","Volleyball (beach)"]}},brands:{A:{pt:["Apple","Adidas","Amazon","Audi"],en:["Apple","Adidas","Amazon","Audi"]},B:{pt:["BMW","Bose","Burger King","Boss"],en:["BMW","Bose","Burger King","Boss"]},C:{pt:["Coca-Cola","Calvin Klein","Chanel","Canon"],en:["Coca-Cola","Calvin Klein","Chanel","Canon"]},D:{pt:["Disney","Dell","Dyson"],en:["Disney","Dell","Dyson","Dove"]},E:{pt:["Emirates","Epson"],en:["Emirates","Epson","Estée Lauder"]},F:{pt:["Ferrari","Ford","Facebook","Fender"],en:["Ferrari","Ford","Facebook","Fender"]},G:{pt:["Google","Gucci","Gillette"],en:["Google","Gucci","Gillette"]},H:{pt:["H&M","Honda","Heineken"],en:["H&M","Honda","Heineken","Hugo Boss"]},I:{pt:["IKEA","Intel"],en:["IKEA","Intel","Instagram"]},J:{pt:["Jeep","Jimmy Choo"],en:["Jeep","Jimmy Choo","Jordan"]},L:{pt:["Lego","Louis Vuitton","Levi's"],en:["Lego","Louis Vuitton","Levi's"]},M:{pt:["McDonald's","Microsoft","Mercedes","Mazda"],en:["McDonald's","Microsoft","Mercedes","Mazda"]},N:{pt:["Nike","Netflix","Nestlé","Nintendo"],en:["Nike","Netflix","Nestlé","Nintendo"]},O:{pt:["Omega","Oracle"],en:["Omega","Oracle","Old Spice"]},P:{pt:["Puma","Prada","PlayStation","Peugeot"],en:["Puma","Prada","PlayStation","Peugeot"]},R:{pt:["Ray-Ban","Rolex","Renault"],en:["Ray-Ban","Rolex","Renault","Red Bull"]},S:{pt:["Samsung","Sony","Spotify","Skype"],en:["Samsung","Sony","Spotify","Snapchat"]},T:{pt:["Toyota","Twitter","TikTok","Tesla"],en:["Toyota","Twitter","TikTok","Tesla"]},V:{pt:["Versace","Volkswagen","Visa"],en:["Versace","Volkswagen","Visa"]}},movies:{A:{pt:["Avatar","Aladdim","Amor Infinito"],en:["Avatar","Aladdin","Avengers"]},B:{pt:["Bambi","Batman"],en:["Bambi","Batman","Bohemian Rhapsody"]},C:{pt:["Cenicienta","Coco","Cars"],en:["Coco","Cars","Cinderella","Casino Royale"]},D:{pt:["Divertida Mente","Dumbo"],en:["Dune","Dunkirk"]},E:{pt:["Encanto","Elfen Lied"],en:["Encanto","Elf","Eternal Sunshine"]},F:{pt:["Frozen","Fantasia"],en:["Frozen","Finding Nemo"]},G:{pt:["Gladiador","Godzilla"],en:["Gladiator","Godzilla","Grease"]},H:{pt:["Homem-Aranha","Hercules"],en:["Harry Potter","Hercules","Home Alone"]},I:{pt:["Intocáveis","Inside Out"],en:["Inception","Inside Out","Interstellar"]},J:{pt:["Jurassic Park"],en:["Jaws","Jurassic Park","Joker"]},L:{pt:["A Bela e o Monstro","Luca"],en:["Lion King","Luca","La La Land"]},M:{pt:["Moana","Mulan","Monstros SA"],en:["Moana","Mulan","Monsters Inc"]},N:{pt:["Nemo","Noiva Cadáver"],en:["Nemo","Nightmare before Christmas"]},O:{pt:["O Rei Leão","O Espanta Tubarões"],en:["Onward","Oz"]},P:{pt:["Procurando Nemo","Pinóquio"],en:["Pinocchio","Paddington"]},R:{pt:["Ratatouille","Robots"],en:["Ratatouille","Rocky"]},S:{pt:["Soul","Shrek","Star Wars"],en:["Soul","Shrek","Star Wars"]},T:{pt:["Toy Story","Tangled","Titanic"],en:["Toy Story","Titanic","Tangled"]},V:{pt:["Vida de Inseto","Valente"],en:["Venom","Vampirina"]}},tvshows:{A:{pt:["A Casa de Papel","Atípico"],en:["Avatar: The Last Airbender","Arcane"]},B:{pt:["Bluey","Bob Esponja"],en:["Bluey","Breaking Bad","Brooklyn Nine-Nine"]},C:{pt:["Cocomelon","Cidade dos Sonhos"],en:["Cocomelon","Caillou"]},D:{pt:["Detetive Conan","Digimon"],en:["Dora the Explorer","Digimon","Dexter"]},E:{pt:["Emily em Paris"],en:["Emily in Paris"]},F:{pt:["Friends","Flintstones"],en:["Friends","Family Guy"]},G:{pt:["Gravity Falls"],en:["Gravity Falls","Game of Thrones"]},H:{pt:["Heidi","Hora de Aventura"],en:["Hazbin Hotel","Hilda","How I Met Your Mother"]},I:{pt:["Inspector Gadget"],en:["Inside Job","iCarly"]},J:{pt:["Jorge o Curioso"],en:["Jimmy Neutron","Jeopardy"]},L:{pt:["La Casa de Papel","Lupin"],en:["Loki","Lucifer"]},M:{pt:["Miraculous","Mansão Foster"],en:["Miraculous","Monster High"]},N:{pt:["Naruto","Ninjago"],en:["Naruto","Never Have I Ever"]},O:{pt:["Os Simpsons","O Ursinho Pooh"],en:["The Office","Only Murders in the Building"]},P:{pt:["Peppa Pig","Patrulha Pata"],en:["Peppa Pig","Paw Patrol"]},R:{pt:["Rapunzel","Round 6"],en:["Rugrats","Recess"]},S:{pt:["Stranger Things","SpongeBob"],en:["Stranger Things","SpongeBob","Scrubs"]},T:{pt:["Turma da Mônica","The Walking Dead"],en:["The Simpsons","Ted Lasso"]}},musicians:{A:{pt:["ABBA","Adele","Arctic Monkeys"],en:["ABBA","Adele","Arctic Monkeys"]},B:{pt:["Beatles","Beyoncé","Bruno Mars"],en:["Beatles","Beyoncé","Bruno Mars"]},C:{pt:["Coldplay","Cristiano Araújo"],en:["Coldplay","Chris Brown","Cardi B"]},D:{pt:["David Bowie","Drake"],en:["David Bowie","Drake"]},E:{pt:["Ed Sheeran","Elvis"],en:["Ed Sheeran","Elvis Presley","Eminem"]},F:{pt:["Foo Fighters","Fado (não é músico)"],en:["Foo Fighters","Frank Sinatra","Freddie Mercury"]},G:{pt:["Guns N' Roses","Gloria Gaynor"],en:["Guns N' Roses","Green Day"]},H:{pt:["Harry Styles"],en:["Harry Styles","Halsey"]},I:{pt:["Iron Maiden"],en:["Iron Maiden","Imagine Dragons"]},J:{pt:["Joana Amendoeira","Justin Bieber"],en:["Justin Bieber","Jay-Z","John Legend"]},L:{pt:["Lady Gaga","Lorde"],en:["Lady Gaga","Lorde","Lewis Capaldi"]},M:{pt:["Michael Jackson","Madonna","Maroon 5"],en:["Michael Jackson","Madonna","Maroon 5"]},N:{pt:["Nirvana"],en:["Nirvana","Nicki Minaj"]},O:{pt:["One Direction"],en:["One Direction","Olivia Rodrigo"]},P:{pt:["Pink Floyd","Post Malone"],en:["Pink Floyd","Post Malone"]},R:{pt:["Rihanna","Red Hot Chili Peppers"],en:["Rihanna","Red Hot Chili Peppers"]},S:{pt:["Shakira","Selena Gomez","Sam Smith"],en:["Shakira","Selena Gomez","Sam Smith"]},T:{pt:["Taylor Swift","The Weeknd"],en:["Taylor Swift","The Weeknd"]},V:{pt:["Vivaldi"],en:["Vance Joy","Vampire Weekend"]}},books:{A:{pt:["Alice no País das Maravilhas","O Alquimista"],en:["Alice in Wonderland","Animal Farm"]},B:{pt:["Bambi (livro)","Bíblia"],en:["Bambi","Billy Budd"]},C:{pt:["Cinderela","Charlie e a Fábrica de Chocolate"],en:["Charlie and the Chocolate Factory","Cinderella"]},D:{pt:["Dom Quixote","Diário de um Banana"],en:["David Copperfield","Diary of a Wimpy Kid"]},E:{pt:["Eragon","O Estrangeiro"],en:["Eragon","Emma"]},F:{pt:["Fadas e Magia (não real)"],en:["Frankenstein","Fantastic Mr Fox"]},G:{pt:["O Grande Gatsby","Gulliver"],en:["The Great Gatsby","Gulliver's Travels"]},H:{pt:["Harry Potter","Hamlet"],en:["Harry Potter","Hamlet","Hunger Games"]},I:{pt:["Ilíada"],en:["Iliad","It (Stephen King)"]},J:{pt:["O Jogo do Imortais"],en:["Jane Eyre","Julius Caesar"]},L:{pt:["O Livro da Selva","O Leão a Feiticeira e o Guarda-Roupa"],en:["The Lion, the Witch and the Wardrobe","Little Women"]},M:{pt:["Moby Dick","Mafalda"],en:["Moby Dick","Matilda"]},N:{pt:["Narnia (série)"],en:["Narnia Chronicles"]},O:{pt:["Odisseia","Os Lusíadas"],en:["Odyssey","Oliver Twist"]},P:{pt:["Pequeno Príncipe","Peter Pan","Pinóquio"],en:["The Little Prince","Peter Pan","Pinocchio"]},R:{pt:["Robinson Crusoe","Romeo e Julieta"],en:["Robinson Crusoe","Romeo and Juliet"]},S:{pt:["O Senhor dos Anéis","O Sol também se Levanta"],en:["The Lord of the Rings","Sherlock Holmes"]},T:{pt:["Tom Sawyer","Três Mosqueteiros"],en:["Tom Sawyer","The Three Musketeers"]},V:{pt:["Viagem ao Centro da Terra","Vinte Mil Léguas"],en:["Voyage to the Center of the Earth","20,000 Leagues Under the Sea"]}},history:{A:{pt:["Alexandre o Grande","Afonso Henriques"],en:["Alexander the Great","American Revolution"]},B:{pt:["Batalha de Aljubarrota","Bartolomeu Dias"],en:["Battle of Waterloo","Black Death"]},C:{pt:["Cristóvão Colombo","Cleópatra"],en:["Christopher Columbus","Cleopatra","Crusades"]},D:{pt:["Dom Sebastião","Descobrimentos"],en:["Da Vinci","Dark Ages"]},E:{pt:["Egípcios","Escravidão"],en:["Egyptian Empire","Enlightenment"]},F:{pt:["Fernando Magalhães","Feudalismo"],en:["French Revolution","Feudalism"]},G:{pt:["Gengis Khan","Gregos"],en:["Genghis Khan","Greeks"]},H:{pt:["Hitler","Hannibal"],en:["Hitler","Hannibal"]},I:{pt:["Império Romano","Inquisição"],en:["Industrial Revolution","Inquisition"]},J:{pt:["Júlio César"],en:["Julius Caesar"]},L:{pt:["Luís XIV","Lusíadas"],en:["Louis XIV","Lewis and Clark"]},M:{pt:["Marco Polo","Mundo Antigo"],en:["Marco Polo","Middle Ages"]},N:{pt:["Napoleão"],en:["Napoleon","Norman Conquest"]},O:{pt:["Otomanos"],en:["Ottoman Empire"]},P:{pt:["Pombal","Portugueses (descobertas)"],en:["Pharaohs","Peloponnesian War"]},R:{pt:["Revolução Francesa","Roma"],en:["Renaissance","Roman Empire"]},S:{pt:["Salazar","Segunda Guerra Mundial"],en:["Second World War","Spartans"]},T:{pt:["Tratado de Tordesilhas","Templários"],en:["Trojan War","Treaty of Versailles"]}},jobs:{A:{pt:["Advogado","Arquiteto","Astronauta","Agricultor"],en:["Architect","Astronaut","Actor","Accountant"]},B:{pt:["Bombeiro","Biólogo","Barbeiro"],en:["Baker","Biologist","Builder"]},C:{pt:["Cozinheiro","Carpinteiro","Cientista","Cantor"],en:["Chef","Carpenter","Chemist","Conductor"]},D:{pt:["Dentista","Designer","Detetive"],en:["Dentist","Designer","Doctor","Detective"]},E:{pt:["Enfermeiro","Engenheiro","Escritor"],en:["Engineer","Electrician","Economist"]},F:{pt:["Fotógrafo","Fisioterapeuta","Farmacêutico"],en:["Farmer","Firefighter","Florist"]},G:{pt:["Geólogo","Gestor"],en:["Geologist","Gardener","General"]},H:{pt:["Historiador","Hacker (ético)"],en:["Historian","Hairdresser"]},I:{pt:["Informático","Ilustrador"],en:["Illustrator","Inspector"]},J:{pt:["Jornalista","Juiz"],en:["Journalist","Judge"]},L:{pt:["Limpador","Locutor"],en:["Lawyer","Librarian","Locksmith"]},M:{pt:["Médico","Músico","Mecânico","Matemático"],en:["Mechanic","Musician","Manager","Mathematician"]},N:{pt:["Nutricionista","Nadador-Salvador"],en:["Nurse","Nutritionist"]},O:{pt:["Oftalmologista","Operador"],en:["Optician","Officer"]},P:{pt:["Professor","Piloto","Pintor","Polícia"],en:["Pilot","Painter","Police officer","Plumber"]},R:{pt:["Rececionista","Redator"],en:["Receptionist","Reporter","Researcher"]},S:{pt:["Soldado","Secretário","Sociólogo"],en:["Scientist","Surgeon","Social worker"]},T:{pt:["Técnico","Tradutor","Terapeuta"],en:["Teacher","Translator","Technician"]},V:{pt:["Veterinário","Vendedor"],en:["Veterinarian","Violinist"]}},flowers:{A:{pt:["Azaléia","Açafrão","Antúrio"],en:["Azalea","Amaryllis","Aster"]},B:{pt:["Begónia","Boca-de-Leão"],en:["Begonia","Bluebell","Buttercup"]},C:{pt:["Cravo","Crisântemo","Camomila"],en:["Carnation","Chrysanthemum","Clover"]},D:{pt:["Dália","Dente-de-Leão"],en:["Daisy","Daffodil","Dahlia"]},E:{pt:["Espadana"],en:["Echinacea","Elderflower"]},F:{pt:["Freesia","Fúcsia"],en:["Freesia","Fuchsia","Forget-me-not"]},G:{pt:["Gardénia","Gerânio","Girassol"],en:["Gardenia","Geranium","Gladiolus"]},H:{pt:["Hortênsia","Heliotropo"],en:["Hydrangea","Hibiscus","Hollyhock"]},I:{pt:["Íris"],en:["Iris","Impatiens"]},J:{pt:["Jasmim","Jacinto"],en:["Jasmine","Jonquil"]},L:{pt:["Lavanda","Lírio","Loto"],en:["Lavender","Lily","Lotus","Larkspur"]},M:{pt:["Magnólia","Margarida","Malmequeres"],en:["Magnolia","Marigold","Morning glory"]},N:{pt:["Narciso","Noivinha"],en:["Narcissus","Nasturtium"]},O:{pt:["Orquídea"],en:["Orchid","Oxeye daisy"]},P:{pt:["Peônia","Petúnia","Papoila"],en:["Peony","Petunia","Poppy"]},R:{pt:["Rosa","Ranúnculo"],en:["Rose","Ranunculus"]},S:{pt:["Sempre-viva","Salva"],en:["Sunflower","Sweet pea","Sage"]},T:{pt:["Tulipa","Thistle"],en:["Tulip","Thistle"]},V:{pt:["Violeta","Verbena"],en:["Violet","Verbena"]}}},f="atlantis:stop:categories",g="atlantis:stop:timer",h={title:{pt:"STOP!",en:"STOP!"},chooseCategories:{pt:"Escolhe as categorias",en:"Choose categories"},selected:{pt:"selecionadas",en:"selected"},minCategories:{pt:"Seleciona pelo menos 3",en:"Select at least 3"},startGame:{pt:"Iniciar Jogo",en:"Start Game"},spinning:{pt:"A sortear a letra...",en:"Drawing a letter..."},got:{pt:"Saiu o",en:"Got"},thinkFast:{pt:"Pensa rápido!",en:"Think fast!"},timer:{pt:"Temporizador",en:"Timer"},noTimer:{pt:"Sem tempo",en:"No timer"},seconds:{pt:"s",en:"s"},stopBtn:{pt:"🛑 STOP!",en:"🛑 STOP!"},suggestions:{pt:"Sugestões",en:"Suggestions"},showHints:{pt:"💡 Ver sugestões",en:"💡 Show hints"},hideHints:{pt:"💡 Ocultar sugestões",en:"💡 Hide hints"},roundOver:{pt:"Ronda terminada!",en:"Round over!"},newLetter:{pt:"🔀 Nova Letra",en:"🔀 New Letter"},changeCategories:{pt:"⚙️ Mudar Categorias",en:"⚙️ Change Categories"},roundCount:{pt:"Ronda",en:"Round"},typeAnswer:{pt:"Escreve a resposta...",en:"Type your answer..."},timeUp:{pt:"Tempo esgotado!",en:"Time's up!"},noHints:{pt:"Sem sugestões para esta letra",en:"No hints for this letter"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Adversário",en:"Opponent"},opponentStopped:{pt:"O adversário parou!",en:"Opponent stopped!"},opponentLeft:{pt:"O adversário saiu.",en:"Opponent left."},waitingAnswers:{pt:"À espera das respostas…",en:"Waiting for answers…"},rematch:{pt:"Nova ronda",en:"New round"}};function x(e,a){return h[e]["pt"===a?"pt":"en"]}n.keyframes`
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1) rotate(360deg); }
`;const b=n.keyframes`
  0%   { transform: scale(0.3); opacity: 0; }
  60%  { transform: scale(1.2); opacity: 1; }
  80%  { transform: scale(0.92); }
  100% { transform: scale(1); }
`,y=n.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=n.keyframes`
  from { opacity: 0; max-height: 0; transform: translateY(-4px); }
  to   { opacity: 1; max-height: 200px; transform: translateY(0); }
`,v=n.keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(88, 166, 255, 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(88, 166, 255, 0); }
`,$=n.keyframes`
  from { background-position: -200% center; }
  to   { background-position: 200% center; }
`,j=r.default.div`
  min-height: 100%;
  background: radial-gradient(ellipse at top, #0f1624 0%, ${i.w4.colors.mainBg} 70%);
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
`,k=r.default.h1`
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  background: linear-gradient(135deg, ${i.w4.colors.accent}, #a78bfa, #f472b6);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${$} 3s linear infinite;
  margin-bottom: ${i.w4.spacing.xs};
`,z=r.default.p`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeMd};
  margin-bottom: ${i.w4.spacing.xl};
  text-align: center;
`,S=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  margin-bottom: ${i.w4.spacing.md};
  flex-wrap: wrap;
  gap: ${i.w4.spacing.sm};
`,C=r.default.span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
`,T=r.default.span`
  font-weight: 700;
  color: ${({ok:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
`,M=r.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${i.w4.spacing.sm};
  width: 100%;
  max-width: 720px;
  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,A=r.default.button`
  position: relative;
  background: ${({selected:e})=>e?"rgba(88, 166, 255, 0.1)":i.w4.colors.surface};
  border: 2px solid ${({selected:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 80px;
  color: ${({selected:e})=>e?i.w4.colors.mainText:i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  &:hover {
    border-color: ${i.w4.colors.accent};
    background: rgba(88, 166, 255, 0.05);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`,R=r.default.span`
  font-size: 1.6rem;
  line-height: 1;
`,_=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
`,B=r.default.div`
  position: absolute;
  top: 6px;
  right: 8px;
  color: ${i.w4.colors.accent};
  font-size: 0.85rem;
  font-weight: 700;
`,I=r.default.button`
  margin-top: ${i.w4.spacing.xl};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.xl};
  background: ${({disabled:e})=>e?i.w4.colors.surface:`linear-gradient(135deg, ${i.w4.colors.accent}, #a78bfa)`};
  color: ${({disabled:e})=>e?i.w4.colors.mainTextMuted:"#fff"};
  border: none;
  border-radius: ${i.w4.borderRadius.lg};
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 700;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${({disabled:e})=>e?.5:1};
  min-height: 52px;
  &:hover:not([disabled]) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(88, 166, 255, 0.3);
  }
`,E=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.xl};
  flex: 1;
  padding: ${i.w4.spacing.xxl} 0;
  animation: ${y} 0.3s ease;
`,P=r.default.div`
  width: clamp(160px, 30vw, 220px);
  height: clamp(160px, 30vw, 220px);
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.3), rgba(167, 139, 250, 0.1));
  border: 3px solid ${i.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${i.w4.colors.mainText};
  animation: ${({landed:e})=>e?`${v} 1s ease infinite`:"none"};
  box-shadow: 0 0 40px rgba(88, 166, 255, 0.2);
  transition: all 0.1s ease;
  ${({landing:e})=>e&&"\n    transform: scale(1.05);\n    box-shadow: 0 0 60px rgba(88, 166, 255, 0.5);\n  "}
  ${({landed:e})=>e&&`\n    animation: ${b} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, ${v} 1.5s 0.5s ease infinite;\n  `}
`,D=r.default.p`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeMd};
  text-align: center;
`,L=r.default.div`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
  color: ${i.w4.colors.accent};
  text-align: center;
  animation: ${b} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`,O=r.default.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.md};
  animation: ${y} 0.3s ease;
`,F=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  margin-bottom: ${i.w4.spacing.sm};
`,N=r.default.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.2), rgba(167, 139, 250, 0.2));
  border: 2px solid ${i.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: ${i.w4.colors.mainText};
  flex-shrink: 0;
`,H=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
`,G=r.default.span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
`,Y=r.default.button`
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.sm};
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.1)":"transparent"};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s ease;
  min-height: 44px;
  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.accent};
  }
`,q=r.default.div`
  flex: 1;
  height: 8px;
  background: ${i.w4.colors.surface};
  border-radius: 99px;
  overflow: hidden;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: ${({pct:e})=>100*e}%;
    background: ${({pct:e})=>e>.5?"#3fb950":e>.25?"#f0a202":"#f85149"};
    transition: width 1s linear, background 1s ease;
    border-radius: 99px;
  }
`,V=r.default.span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({pct:e})=>e>.5?"#3fb950":e>.25?"#f0a202":"#f85149"};
  min-width: 36px;
  text-align: right;
`,W=r.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  animation: ${y} 0.25s ease;
`,J=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${i.w4.spacing.sm};
`,X=r.default.span`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
`,U=r.default.button`
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.sm};
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid rgba(240, 162, 2, 0.4);
  background: rgba(240, 162, 2, 0.08);
  color: #f0a202;
  font-size: ${i.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  min-height: 44px;
  &:hover {
    background: rgba(240, 162, 2, 0.15);
    border-color: rgba(240, 162, 2, 0.6);
  }
`,K=r.default.input`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
  font-family: ${i.w4.typography.fontFamily};
  width: 100%;
  min-height: 44px;
  transition: border-color 0.15s ease;
  &:focus {
    outline: none;
    border-color: ${i.w4.colors.accent};
  }
  &::placeholder {
    color: ${i.w4.colors.mainTextMuted};
  }
`,Q=r.default.div`
  overflow: hidden;
  animation: ${w} 0.25s ease forwards;
  background: rgba(240, 162, 2, 0.06);
  border: 1px solid rgba(240, 162, 2, 0.2);
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
`,Z=r.default.p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: #f0a202;
  font-weight: 600;
  margin-bottom: ${i.w4.spacing.xs};
`,ee=r.default.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${i.w4.spacing.xs};
  margin: 0;
  padding: 0;
`,ae=r.default.li`
  background: rgba(240, 162, 2, 0.12);
  border: 1px solid rgba(240, 162, 2, 0.25);
  border-radius: 99px;
  padding: 2px 10px;
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainText};
`,oe=r.default.p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  font-style: italic;
`,te=r.default.button`
  align-self: center;
  margin-top: ${i.w4.spacing.md};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.xxl};
  background: linear-gradient(135deg, #f85149, #ff7a6e);
  color: #fff;
  border: none;
  border-radius: ${i.w4.borderRadius.lg};
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 900;
  cursor: pointer;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;
  min-height: 52px;
  box-shadow: 0 4px 20px rgba(248, 81, 73, 0.3);
  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 28px rgba(248, 81, 73, 0.5);
  }
  &:active {
    transform: translateY(0) scale(0.98);
  }
`,re=n.keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(248, 81, 73, 0.5); }
  50%      { transform: scale(1.05); box-shadow: 0 0 0 14px rgba(248, 81, 73, 0); }
`,ne=r.default.button`
  margin-top: ${i.w4.spacing.lg};
  width: clamp(140px, 40vw, 180px);
  height: clamp(140px, 40vw, 180px);
  border-radius: 50%;
  background: linear-gradient(145deg, #ff4040, #e02020);
  border: 4px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  cursor: pointer;
  animation: ${re} 1.2s ease-in-out infinite;
  transition: transform 0.1s;
  box-shadow: 0 8px 32px rgba(248, 81, 73, 0.4), inset 0 -4px 12px rgba(0, 0, 0, 0.2);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:active {
    transform: scale(0.9);
    animation: none;
  }
`,ie=r.default.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.md};
  animation: ${y} 0.3s ease;
`,se=r.default.div`
  text-align: center;
  margin-bottom: ${i.w4.spacing.md};
`,le=r.default.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 900;
  color: ${i.w4.colors.mainText};
  margin-bottom: ${i.w4.spacing.xs};
`,ce=r.default.p`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
`,de=r.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md};
`,pe=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  margin-bottom: ${i.w4.spacing.xs};
`,ue=r.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${({children:e})=>e?i.w4.colors.mainText:i.w4.colors.mainTextMuted};
  font-style: ${({children:e})=>e?"normal":"italic"};
  padding-left: calc(1.6rem + ${i.w4.spacing.sm});
`,me=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${i.w4.spacing.md};
`,fe=r.default.button`
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  border-radius: ${i.w4.borderRadius.lg};
  border: ${({variant:e})=>"secondary"===e?`1px solid ${i.w4.colors.border}`:"none"};
  background: ${({variant:e})=>"secondary"===e?i.w4.colors.surface:`linear-gradient(135deg, ${i.w4.colors.accent}, #a78bfa)`};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;
  &:hover {
    transform: translateY(-2px);
    ${({variant:e})=>"secondary"!==e&&"box-shadow: 0 8px 20px rgba(88,166,255,0.3);"}
    ${({variant:e})=>"secondary"===e&&`border-color: ${i.w4.colors.accent};`}
  }
`,ge=r.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  margin-bottom: ${i.w4.spacing.md};
`,he=r.default.button`
  padding: 8px 18px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.18)":"transparent"};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  &:hover { color: ${i.w4.colors.accent}; background: rgba(88, 166, 255, 0.1); }
`;function xe({lang:e,canOnline:a}){const[o,r]=(0,t.useState)("solo"),[n,h]=(0,t.useState)("setup"),[b,y]=(0,t.useState)({}),[w,v]=(0,t.useState)({}),[$,re]=(0,t.useState)(!1),[xe]=(0,t.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),be=(0,t.useCallback)(e=>{switch(e.type){case"guest-joined":we.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),we.current.sendEvent({type:"host-ack",name:xe,playerId:we.current.room?.playerId??"",players:we.current.room?.players??[]});break;case"host-ack":we.current.setConnected(e.name),e.players&&we.current.setPlayers([...e.players,{id:we.current.room?.playerId??"",name:xe,isHost:!1}]);break;case"player-list":we.current.setPlayers(e.players);break;case"game-state":{const a=e.payload;if("start-round"===a.action)ze(a.letter),je(a.categories),Ee(a.timer),h("playing"),Re({}),Be({}),Ne(!1),y({}),v({}),a.timer>0&&(De(a.timer),Oe(!0));else if("stop"===a.action)Ye.current&&clearInterval(Ye.current),Oe(!1),we.current.sendEvent({type:"game-state",payload:{action:"answers",answers:We.current,playerId:we.current.room?.playerId,playerName:we.current.room?.playerName}}),h("results"),Ge(e=>e+1);else if("answers"===a.action){const e=a.playerId,o=a.playerName,t=a.answers;y(e=>({...e,...t})),v(a=>({...a,[e]:{name:o,answers:t}}))}break}case"player-left":re(!0)}},[xe]),ye=(0,s.Ky)({gameId:"stopgame",playerName:xe,onEvent:be}),we=(0,t.useRef)(ye);we.current=ye;const ve=(0,s.zj)({gameId:"stopgame",enabled:"online"===o}),[$e,je]=(0,t.useState)(()=>{try{const e=localStorage.getItem(f);if(e){const a=JSON.parse(e);return Array.isArray(a)?a:[]}}catch{}return["cities","animals","names","fruits","colors"]}),[ke,ze]=(0,t.useState)("A"),[Se,Ce]=(0,t.useState)("A"),[Te,Me]=(0,t.useState)("spinning"),[Ae,Re]=(0,t.useState)({}),[_e,Be]=(0,t.useState)({}),[Ie,Ee]=(0,t.useState)(()=>{try{const e=localStorage.getItem(g);if(e){const a=Number(e);return p.includes(a)?a:60}}catch{}return 60}),[Pe,De]=(0,t.useState)(0),[Le,Oe]=(0,t.useState)(!1),[Fe,Ne]=(0,t.useState)(!1),[He,Ge]=(0,t.useState)(0),Ye=(0,t.useRef)(null),qe=(0,t.useRef)(null),Ve=(0,t.useRef)("pt"===e?c:d),We=(0,t.useRef)(Ae);We.current=Ae,(0,t.useEffect)(()=>{Ve.current="pt"===e?c:d},[e]),(0,t.useEffect)(()=>{localStorage.setItem(f,JSON.stringify($e))},[$e]),(0,t.useEffect)(()=>{localStorage.setItem(g,String(Ie))},[Ie]),(0,t.useEffect)(()=>()=>{Ye.current&&clearInterval(Ye.current),qe.current&&clearInterval(qe.current)},[]);const Je=(0,t.useCallback)(e=>{je(a=>a.includes(e)?a.filter(a=>a!==e):[...a,e])},[]),Xe=(0,t.useCallback)(a=>{try{const o=new SpeechSynthesisUtterance(a);o.lang="pt"===e?"pt-PT":"en-US",o.rate=.8,o.pitch=1.2,o.volume=1,window.speechSynthesis.cancel(),window.speechSynthesis.speak(o)}catch{}},[e]),Ue=(0,t.useCallback)(()=>{h("roulette"),Me("spinning");const e=Ve.current;let a=Math.floor(Math.random()*e.length);qe.current&&clearInterval(qe.current),qe.current=setInterval(()=>{a=(a+1)%e.length,Ce(e[a])},70)},[]),Ke=(0,t.useCallback)(()=>{if("spinning"!==Te)return;qe.current&&clearInterval(qe.current);const a=function(e){const a="pt"===e?c:d;return a[Math.floor(Math.random()*a.length)]}(e);ze(a),Ce(a),Me("landing"),Xe(a),setTimeout(()=>{Me("landed"),setTimeout(()=>{h("playing"),Re({}),Be({}),y({}),Ne(!1),Ie>0&&(De(Ie),Oe(!0)),"online"===o&&"host"===we.current.room?.role&&we.current.sendEvent({type:"game-state",payload:{action:"start-round",letter:a,categories:$e,timer:Ie}})},1500)},400)},[e,Ie,Te,Xe,o,$e]);(0,t.useEffect)(()=>{if(Le&&0!==Ie)return Ye.current&&clearInterval(Ye.current),Ye.current=setInterval(()=>{De(e=>e<=1?(Ye.current&&clearInterval(Ye.current),Oe(!1),Ne(!0),h("results"),0):e-1)},1e3),()=>{Ye.current&&clearInterval(Ye.current)}},[Le,Ie]);const Qe=(0,t.useCallback)(()=>{if(Ye.current&&clearInterval(Ye.current),Oe(!1),h("results"),Ge(e=>e+1),"online"===o){we.current.sendEvent({type:"game-state",payload:{action:"stop"}}),we.current.sendEvent({type:"game-state",payload:{action:"answers",answers:We.current,playerId:we.current.room?.playerId,playerName:we.current.room?.playerName}});const e=we.current.room?.playerId??"",a=we.current.room?.playerName??"";v(o=>({...o,[e]:{name:a,answers:We.current}}))}},[o]),Ze=(0,t.useCallback)(()=>{Re({}),Be({}),Ne(!1),Ue()},[Ue]),ea=(0,t.useCallback)(()=>{h("setup"),Re({}),Be({}),Ne(!1),Ye.current&&clearInterval(Ye.current),Oe(!1)},[]),aa=(0,t.useCallback)(e=>{Be(a=>({...a,[e]:!a[e]}))},[]),oa=u.filter(e=>$e.includes(e.id)),ta=Ie>0?Pe/Ie:1,ra=(0,t.useRef)(null),na=(0,t.useRef)(!1);return(0,l.jsxs)(j,{children:[(0,l.jsx)(k,{children:x("title",e)}),"setup"===n&&(0,l.jsxs)(l.Fragment,{children:[a&&(0,l.jsxs)(ge,{children:[(0,l.jsxs)(he,{active:"solo"===o,onClick:()=>r("solo"),children:["🎯 ",x("solo",e)]}),(0,l.jsxs)(he,{active:"online"===o,onClick:()=>r("online"),children:["🌐 ",x("online",e)]})]}),(0,l.jsx)(z,{children:x("chooseCategories",e)}),(0,l.jsx)(S,{children:(0,l.jsxs)(C,{children:[(0,l.jsx)(T,{ok:$e.length>=3,children:$e.length})," ",x("selected",e),$e.length<3&&(0,l.jsxs)("span",{style:{marginLeft:i.w4.spacing.sm,color:"#f0a202",fontSize:i.w4.typography.fontSizeSm},children:["— ",x("minCategories",e)]})]})}),(0,l.jsx)(M,{children:u.map(a=>{const o=$e.includes(a.id);return(0,l.jsxs)(A,{selected:o,onClick:()=>Je(a.id),type:"button","aria-pressed":o,children:[o&&(0,l.jsx)(B,{children:"✓"}),(0,l.jsx)(R,{children:a.icon}),(0,l.jsx)(_,{children:"pt"===e?a.label.pt:a.label.en})]},a.id)})}),(0,l.jsx)("div",{style:{marginTop:i.w4.spacing.lg,width:"100%",maxWidth:"720px"},children:(0,l.jsxs)(H,{children:[(0,l.jsxs)(G,{children:[x("timer",e),":"]}),p.map(a=>(0,l.jsx)(Y,{active:Ie===a,onClick:()=>Ee(a),type:"button",children:0===a?x("noTimer",e):`${a}${x("seconds",e)}`},a))]})}),(0,l.jsx)(I,{disabled:$e.length<3,onClick:$e.length>=3?"online"===o?()=>h("lobby"):Ue:void 0,type:"button",children:x("startGame",e)})]}),"lobby"===n&&(0,l.jsx)("div",{style:{marginTop:i.w4.spacing.lg,width:"100%",maxWidth:400,margin:"0 auto"},children:ye.room?.connected?(0,l.jsxs)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[(0,l.jsx)("p",{style:{color:i.w4.colors.mainTextMuted,fontSize:i.w4.typography.fontSizeMd},children:"host"===ye.room.role?"pt"===e?`${ye.room.players.length} jogadores na sala. Clica para começar.`:`${ye.room.players.length} players in room. Click to start.`:"pt"===e?`Ligado! ${ye.room.players.length} jogadores na sala.`:`Connected! ${ye.room.players.length} players in room.`}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:ye.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===ye.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===ye.room.role&&(0,l.jsx)(I,{disabled:!1,onClick:Ue,type:"button",children:x("startGame",e)})]}):(0,l.jsx)(s.XB,{lang:e,room:ye.room,error:ye.error,availableRooms:ve.rooms,onCreateRoom:()=>{const{code:e,roomName:a}=ye.createRoom();ve.publishRoom({code:e,roomName:a,hostName:xe,playerCount:1})},onJoinRoom:e=>ye.joinRoom(e),onLeaveRoom:()=>{ve.unpublishRoom(),ye.leaveRoom(),h("setup")}})}),"roulette"===n&&(0,l.jsxs)(E,{children:[(0,l.jsx)(P,{landing:"landing"===Te,landed:"landed"===Te,children:Se}),"spinning"===Te&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{children:x("spinning",e)}),(0,l.jsx)(ne,{onTouchStart:e=>{ra.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!ra.current)return;const a=Math.abs(e.changedTouches[0].clientX-ra.current.x),o=Math.abs(e.changedTouches[0].clientY-ra.current.y);ra.current=null,a>8||o>8||(na.current=!0,Ke())},onClick:()=>{na.current?na.current=!1:Ke()},children:"STOP!"})]}),("landing"===Te||"landed"===Te)&&(0,l.jsxs)(L,{children:[x("got",e)," ",(0,l.jsxs)("strong",{children:["“",ke,"”"]}),"!",(0,l.jsx)("br",{}),(0,l.jsx)("span",{style:{fontSize:"1rem",fontWeight:400,color:i.w4.colors.mainTextMuted},children:x("thinkFast",e)})]})]}),"playing"===n&&(0,l.jsxs)(O,{children:[(0,l.jsxs)(F,{children:[(0,l.jsx)(N,{children:ke}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{fontSize:i.w4.typography.fontSizeLg,fontWeight:700,color:i.w4.colors.mainText},children:[x("got",e)," “",ke,"”"]}),He>0&&(0,l.jsxs)("div",{style:{fontSize:i.w4.typography.fontSizeSm,color:i.w4.colors.mainTextMuted},children:[x("roundCount",e)," ",He+1]})]})]}),Ie>0&&(0,l.jsxs)(H,{children:[(0,l.jsx)(q,{pct:ta}),(0,l.jsxs)(V,{pct:ta,children:[Pe,x("seconds",e)]})]}),oa.map(a=>{const o=function(e,a,o){const t=m[e];if(!t)return[];const r=t[a];return r?"pt"===o?r.pt:r.en:[]}(a.id,ke,e),t=_e[a.id]??!1;return(0,l.jsxs)(W,{children:[(0,l.jsxs)(J,{children:[(0,l.jsxs)(X,{children:[(0,l.jsx)("span",{children:a.icon}),"pt"===e?a.label.pt:a.label.en]}),(0,l.jsx)(U,{onClick:()=>aa(a.id),type:"button",children:x(t?"hideHints":"showHints",e)})]}),(0,l.jsx)(K,{value:Ae[a.id]??"",onChange:e=>Re(o=>({...o,[a.id]:e.target.value})),placeholder:x("typeAnswer",e),spellCheck:!1,autoCapitalize:"off"}),t&&(0,l.jsxs)(Q,{children:[(0,l.jsx)(Z,{children:x("suggestions",e)}),o.length>0?(0,l.jsx)(ee,{children:o.map((e,a)=>(0,l.jsx)(ae,{children:e},a))}):(0,l.jsx)(oe,{children:x("noHints",e)})]})]},a.id)}),(0,l.jsx)(te,{type:"button",onTouchStart:e=>{ra.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!ra.current)return;const a=Math.abs(e.changedTouches[0].clientX-ra.current.x),o=Math.abs(e.changedTouches[0].clientY-ra.current.y);ra.current=null,a>8||o>8||(na.current=!0,Qe())},onClick:()=>{na.current?na.current=!1:Qe()},children:x("stopBtn",e)})]}),"results"===n&&(0,l.jsxs)(ie,{children:[(0,l.jsxs)(se,{children:[(0,l.jsx)(le,{children:x(Fe?"timeUp":"roundOver",e)}),(0,l.jsxs)(ce,{children:[x("got",e)," “",ke,"”",He>0&&` · ${x("roundCount",e)} ${He+1}`]})]}),oa.map(a=>(0,l.jsxs)(de,{children:[(0,l.jsxs)(pe,{children:[(0,l.jsx)("span",{children:a.icon}),"pt"===e?a.label.pt:a.label.en]}),"online"===o?(0,l.jsx)("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:Object.entries(w).sort(([e],[a])=>e===ye.room?.playerId?-1:a===ye.room?.playerId?1:0).map(([o,{name:t,answers:r}])=>(0,l.jsxs)("div",{style:{flex:"1 1 100px",minWidth:80},children:[(0,l.jsxs)("div",{style:{fontSize:11,fontWeight:600,marginBottom:2,color:o===ye.room?.playerId?i.w4.colors.accent:i.w4.colors.mainTextMuted},children:[t,o===ye.room?.playerId?` (${x("you",e)})`:""]}),(0,l.jsx)(ue,{children:r[a.id]||(0,l.jsx)("span",{style:{color:i.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},o))}):(0,l.jsx)(ue,{children:Ae[a.id]||(0,l.jsx)("span",{style:{color:i.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},a.id)),(0,l.jsxs)(me,{children:[(0,l.jsx)(fe,{type:"button",onClick:Ze,children:x("newLetter",e)}),(0,l.jsx)(fe,{type:"button",variant:"secondary",onClick:ea,children:x("changeCategories",e)})]})]})]})}},4425(e,a,o){o.d(a,{n:()=>P});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(1364),l=o(5723);const c=["🍎","🍌","🍇","🍉","🍊","🍓","🫐","🍒","🥝","🍑","🐶","🐱","🐸","🦊","🐼","🐵","🦁","🐮","🐷","🐔","⭐","❤️","💎","🔥","🌈","⚡","🎯","🎸","🚀","🌙"];function d(e){const a=[...e];for(let e=a.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[a[e],a[o]]=[a[o],a[e]]}return a}function p(e){const a=(o=c)[Math.floor(Math.random()*o.length)];var o;const t=d(c.filter(e=>e!==a)).slice(0,e-1),r=d([a,...t]);return{target:a,grid:r,targetIndex:r.indexOf(a)}}const u=n.keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,m=n.keyframes`0% { transform: scale(0); } 60% { transform: scale(1.15); } 100% { transform: scale(1); }`,f=n.keyframes`0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); }`,g=n.keyframes`0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}`,h=n.keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.3)}`,x=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,b=r.default.div`
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: ${i.w4.spacing.lg}; gap: ${i.w4.spacing.lg}; overflow-y: auto; min-height: 0;
  background: radial-gradient(ellipse 60% 50% at 30% 20%, rgba(249,117,131,0.06) 0%, transparent 70%),
              radial-gradient(ellipse 50% 60% at 70% 80%, rgba(88,166,255,0.04) 0%, transparent 70%), #080b12;
`,y=r.default.h1`font-size: clamp(1.6rem,4vw,2.4rem); font-weight: 800; color: ${i.w4.colors.mainText}; margin: 0; text-align: center; animation: ${u} 0.3s ease;`,w=r.default.p`font-size: ${i.w4.typography.fontSizeMd}; color: ${i.w4.colors.mainTextMuted}; text-align: center; margin: 0;`,v=r.default.div`display:flex;gap:2px;padding:2px;background:${i.w4.colors.mainBg};border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.md};`,$=r.default.button`padding:8px 18px;border:none;border-radius:${i.w4.borderRadius.sm};font-size:14px;min-height:36px;font-weight:600;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:background 0.2s,color 0.2s;background:${({active:e})=>e?"rgba(249,117,131,0.18)":"transparent"};color:${({active:e})=>e?"#f97583":i.w4.colors.mainTextMuted};&:hover{color:#f97583;background:rgba(249,117,131,0.1);}`,j=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}&:active{transform:translateY(-1px);}`,k=r.default.div`font-size: clamp(4rem,12vw,8rem); font-weight: 900; color: ${i.w4.colors.accent}; animation: ${x} 0.5s ease;`,z=r.default.div`display:flex;align-items:center;gap:${i.w4.spacing.md};padding:12px 24px;border-radius:${i.w4.borderRadius.lg};background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.accent};animation:${m} 0.3s ease;`,S=r.default.span`font-size:48px;animation:${h} 1s ease-in-out infinite;`,C=r.default.span`font-size:24px;color:${i.w4.colors.accent};font-weight:800;`,T=r.default.div`display:grid;grid-template-columns:repeat(${({cols:e})=>e},1fr);gap:10px;max-width:500px;width:100%;animation:${u} 0.2s ease;`,M=r.default.button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(28px,6vw,42px);
  background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};
  cursor:pointer;transition:all 0.15s;min-height:56px;
  border-color: ${({correct:e,wrong:a})=>e?"#3fb950":a?"#f97583":i.w4.colors.border};
  background: ${({correct:e,wrong:a})=>e?"rgba(63,185,80,0.15)":a?"rgba(249,117,131,0.15)":i.w4.colors.surface};
  animation: ${({correct:e,wrong:a})=>e?f:a?g:"none"} ${({correct:e})=>e?"0.5s ease":"0.4s ease"};
  &:hover:not(:disabled){background:rgba(88,166,255,0.08);transform:scale(1.05);}
  &:active:not(:disabled){transform:scale(0.95);}
`,A=r.default.div`display:flex;gap:${i.w4.spacing.lg};align-items:center;`,R=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};`,_=(r.default.div`
  position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  font-size:80px;pointer-events:none;animation:${m} 0.3s ease;z-index:10;
  background:${({type:e})=>"correct"===e?"rgba(63,185,80,0.1)":"rgba(249,117,131,0.1)"};
  border-radius:${i.w4.borderRadius.lg};
`,r.default.div`display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;animation:${u} 0.3s ease;`),B=r.default.div`display:flex;align-items:center;gap:${i.w4.spacing.sm};padding:10px 14px;background:${i.w4.colors.surface};border:1px solid ${({highlight:e})=>e?i.w4.colors.accent:i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};`,I=r.default.span`flex:1;font-weight:600;color:${({highlight:e})=>e?i.w4.colors.accent:i.w4.colors.mainText};`,E=r.default.span`font-size:20px;font-weight:800;color:${({color:e})=>e??i.w4.colors.mainText};`;function P({lang:e,canOnline:a}){const[o,r]=(0,t.useState)("menu"),[n,c]=(0,t.useState)("solo"),[d,u]=(0,t.useState)(0),[m,f]=(0,t.useState)(null),[g,h]=(0,t.useState)(0),[x,P]=(0,t.useState)({}),[D,L]=(0,t.useState)(3),[O,F]=(0,t.useState)(null),[N,H]=(0,t.useState)(!1),[G]=(0,t.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),Y=(0,t.useRef)(!1),q=(0,t.useCallback)(e=>{switch(e.type){case"guest-joined":W.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),W.current.sendEvent({type:"host-ack",name:G,playerId:W.current.room?.playerId??"",players:W.current.room?.players??[]});break;case"host-ack":W.current.setConnected(e.name),e.players&&W.current.setPlayers([...e.players,{id:W.current.room?.playerId??"",name:G,isHost:!1}]);break;case"player-list":W.current.setPlayers(e.players);break;case"game-state":{const a=e.payload;if("new-round"===a.action)f(a.roundData),u(a.round),F(null),H(!1),Y.current=!1,r("playing");else if("round-result"===a.action)P(a.scores),a.winnerId===W.current.room?.playerId&&h(e=>e+1);else if("game-over"===a.action)P(a.scores),r("scores");else if("tap"===a.action&&"host"===W.current.room?.role&&!Y.current){const e=a.index,o=a.playerId;if(X.current&&e===X.current.targetIndex){Y.current=!0;const e={...K.current,[o]:(K.current[o]??0)+1};P(e),K.current=e,W.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:o,scores:e}}),setTimeout(()=>Q(),1200)}}break}case"player-left":e.playerId&&W.current.removePlayer(e.playerId)}},[G]),V=(0,s.Ky)({gameId:"tapit",playerName:G,onEvent:q}),W=(0,t.useRef)(V);W.current=V;const J=(0,s.zj)({gameId:"tapit",enabled:"online"===n}),X=(0,t.useRef)(m);X.current=m;const U=(0,t.useRef)(d);U.current=d;const K=(0,t.useRef)(x);K.current=x;const Q=(0,t.useCallback)(()=>{const e=U.current+1;if(e>10)return W.current.sendEvent({type:"game-state",payload:{action:"game-over",scores:K.current}}),void r("scores");const a=p(12);X.current=a,f(a),u(e),F(null),H(!1),Y.current=!1,r("playing"),W.current.sendEvent({type:"game-state",payload:{action:"new-round",roundData:a,round:e}})},[]),Z=(0,t.useCallback)(()=>{h(0),P({}),K.current={},u(0),U.current=0,L(3),r("countdown");let e=3;const a=setInterval(()=>{if(e--,L(e),e<=0)if(clearInterval(a),"online"===n&&"host"===V.room?.role)Q();else if("solo"===n){const e=p(12);f(e),u(1),U.current=1,Y.current=!1,r("playing")}},800)},[n,V.room?.role,Q]),ee=(0,t.useCallback)(e=>{if("playing"===o&&!Y.current&&m)if("online"!==n)e===m.targetIndex?(Y.current=!0,F(e),H(!0),h(e=>e+1),setTimeout(()=>{const e=U.current+1;if(e>10)return void r("scores");const a=p(12);f(a),u(e),U.current=e,F(null),Y.current=!1},600)):(F(e),H(!1),setTimeout(()=>F(null),400));else if("host"===V.room?.role)if(e===m.targetIndex){Y.current=!0,F(e),H(!0);const a=V.room.playerId,o={...K.current,[a]:(K.current[a]??0)+1};P(o),K.current=o,h(e=>e+1),V.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:a,scores:o}}),setTimeout(()=>Q(),1200)}else F(e),H(!1),setTimeout(()=>F(null),400);else e===m.targetIndex?(Y.current=!0,F(e),H(!0)):(F(e),H(!1),setTimeout(()=>F(null),400)),V.sendEvent({type:"game-state",payload:{action:"tap",index:e,playerId:V.room?.playerId}})},[o,m,n,V,Q]);if("menu"===o)return(0,l.jsxs)(b,{children:[(0,l.jsxs)(y,{children:["🎯 ","pt"===e?"Toca no Certo!":"Tap the Right One!"]}),(0,l.jsx)(w,{children:"pt"===e?"Encontra o símbolo certo o mais rápido possível!":"Find the right symbol as fast as you can!"}),a&&(0,l.jsxs)(v,{children:[(0,l.jsxs)($,{active:"solo"===n,onClick:()=>c("solo"),children:["🎯 ","pt"===e?"Sozinho":"Solo"]}),(0,l.jsx)($,{active:"online"===n,onClick:()=>c("online"),children:"🌐 Online"})]}),"online"===n?(0,l.jsx)(j,{accent:"#f97583",onClick:()=>r("lobby"),children:"pt"===e?"Criar / Entrar Sala":"Create / Join Room"}):(0,l.jsx)(j,{accent:"#f97583",onClick:Z,children:"pt"===e?"Jogar!":"Play!"})]});if("lobby"===o)return(0,l.jsxs)(b,{children:[(0,l.jsxs)(y,{children:["🎯 ","pt"===e?"Toca no Certo!":"Tap the Right One!"]}),V.room?.connected?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{children:"host"===V.room.role?`${V.room.players.length} ${"pt"===e?"jogadores":"players"}`:"pt"===e?"À espera do anfitrião…":"Waiting for host…"}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:V.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===V.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===V.room.role&&(0,l.jsx)(j,{accent:"#f97583",onClick:Z,children:"pt"===e?"Começar!":"Start!"})]}):(0,l.jsx)(s.XB,{lang:e,room:V.room,error:V.error,availableRooms:J.rooms,onCreateRoom:()=>{const{code:e,roomName:a}=V.createRoom();J.publishRoom({code:e,roomName:a,hostName:G,playerCount:1})},onJoinRoom:e=>V.joinRoom(e),onLeaveRoom:()=>{J.unpublishRoom(),V.leaveRoom(),r("menu")}})]});if("countdown"===o)return(0,l.jsx)(b,{children:(0,l.jsx)(k,{children:D>0?D:"🎯"},D)});if("scores"===o){const a="online"===n,o=a?(V.room?.players??[]).map(e=>({id:e.id,name:e.name,pts:x[e.id]??0})).sort((e,a)=>a.pts-e.pts):[{id:"me",name:G,pts:g}];return(0,l.jsxs)(b,{children:[(0,l.jsxs)(y,{children:["🏆 ","pt"===e?"Resultados":"Results"]}),(0,l.jsx)(_,{children:o.map((e,a)=>(0,l.jsxs)(B,{highlight:e.id===V.room?.playerId,children:[(0,l.jsx)("span",{style:{fontSize:18,minWidth:28},children:0===a?"🥇":1===a?"🥈":2===a?"🥉":`${a+1}.`}),(0,l.jsx)(I,{highlight:e.id===V.room?.playerId,children:e.name}),(0,l.jsxs)(E,{color:0===a?"#3fb950":void 0,children:[e.pts,"/",10]})]},e.id))}),(0,l.jsx)(j,{accent:"#f97583",onClick:()=>{a&&(V.leaveRoom(),J.unpublishRoom()),r("menu")},children:"pt"===e?"Jogar Outra Vez":"Play Again"})]})}if(!m)return(0,l.jsx)(b,{children:(0,l.jsx)(w,{children:"Loading..."})});const ae=m.grid.length<=9?3:4;return(0,l.jsxs)(b,{children:[(0,l.jsxs)(A,{children:[(0,l.jsxs)(R,{children:["⭐ ",g]}),(0,l.jsxs)(R,{children:["pt"===e?"Ronda":"Round"," ",d,"/",10]})]}),(0,l.jsxs)(z,{children:[(0,l.jsx)(C,{children:"👉"}),(0,l.jsx)(S,{children:m.target}),(0,l.jsx)(C,{children:"👈"})]}),(0,l.jsx)("div",{style:{position:"relative"},children:(0,l.jsx)(T,{cols:ae,children:m.grid.map((e,a)=>(0,l.jsx)(M,{correct:O===a&&N,wrong:O===a&&!N,onClick:()=>ee(a),style:{animationDelay:.03*a+"s"},children:e},`${d}-${a}`))})})]})}},6574(e,a,o){o.d(a,{a:()=>ee});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(5723);const l="atlantis-textadventure-progress";function c(){try{const e=localStorage.getItem(l);return e?JSON.parse(e):{}}catch{return{}}}const d=[{id:"castle",emoji:"🏰",title:{pt:"O Castelo Misterioso",en:"The Mysterious Castle"},description:{pt:"Explora um castelo mágico cheio de segredos, magos e criaturas encantadas.",en:"Explore a magical castle full of secrets, wizards and enchanted creatures."},color:"#7c5cbf",totalEndings:3,scenes:[{id:"castle_start",emoji:"🏰",text:{pt:"Você chega à porta de um enorme castelo misterioso. As paredes são de pedra cinzenta e há hera crescendo por toda parte. Uma brisa fria sopra pela floresta ao redor. Você ouve um barulho estranho vindo de dentro.",en:"You arrive at the gate of an enormous mysterious castle. The walls are grey stone with ivy growing everywhere. A cool breeze blows through the surrounding forest. You hear a strange sound coming from inside."},choices:[{label:{pt:"Entrar pela porta principal",en:"Enter through the main door"},next:"castle_main_door"},{label:{pt:"Procurar uma janela aberta",en:"Look for an open window"},next:"castle_window"},{label:{pt:"Chamar por alguém",en:"Call out to someone"},next:"castle_call"}]},{id:"castle_main_door",emoji:"🚪",text:{pt:"A porta enorme range ao abrir. Dentro, você encontra um grande salão com tapeçarias coloridas nas paredes. No centro, uma escada larga sobe para o andar de cima. Mas também há uma porta pequena à esquerda.",en:"The huge door creaks as it opens. Inside, you find a grand hall with colourful tapestries on the walls. In the centre, a wide staircase leads upstairs. But there is also a small door to the left."},choices:[{label:{pt:"Subir a escada",en:"Climb the staircase"},next:"castle_upstairs"},{label:{pt:"Abrir a porta pequena",en:"Open the small door"},next:"castle_kitchen"}]},{id:"castle_window",emoji:"🪟",text:{pt:"Você encontra uma janela entreaberta no andar térreo. Ao espiar para dentro, vê uma biblioteca cheia de livros enormes e um gato preto dormindo sobre uma mesa. Você entra sem fazer barulho.",en:"You find a slightly open window on the ground floor. Peeking inside, you see a library full of enormous books and a black cat sleeping on a table. You climb in without making a sound."},choices:[{label:{pt:"Explorar a biblioteca",en:"Explore the library"},next:"castle_library"},{label:{pt:"Acordar o gato",en:"Wake the cat"},next:"castle_cat"}]},{id:"castle_call",emoji:"📣",text:{pt:'Você grita "Olá! Tem alguém aí?" e sua voz ecoa pelo castelo. De repente, uma janela lá em cima se abre e uma velhinha de cabelos brancos aparece. Ela sorri e joga uma chave dourada para você!',en:'You shout "Hello! Is anyone there?" and your voice echoes through the castle. Suddenly, a window opens high above and a little old lady with white hair appears. She smiles and tosses a golden key down to you!'},choices:[{label:{pt:"Usar a chave dourada na porta",en:"Use the golden key on the door"},next:"castle_golden_room"},{label:{pt:"Perguntar à velhinha quem ela é",en:"Ask the old lady who she is"},next:"castle_witch"}]},{id:"castle_upstairs",emoji:"🌟",text:{pt:'No topo da escada, você encontra um quarto cheio de brilho dourado. No centro há um baú antigo com um cartão que diz: "Para o corajoso aventureiro — abra e descubra!" Seu coração bate mais rápido.',en:'At the top of the staircase, you find a room filled with golden glow. In the centre is an old chest with a card that reads: "For the brave adventurer — open and discover!" Your heart beats faster.'},choices:[{label:{pt:"Abrir o baú",en:"Open the chest"},next:"castle_end_treasure"},{label:{pt:"Chamar os amigos antes de abrir",en:"Call friends before opening"},next:"castle_end_friends"}]},{id:"castle_kitchen",emoji:"🍲",text:{pt:'A porta pequena leva a uma cozinha quentinha e cheirosa. Uma sopa deliciosa fervilha no fogão. Há um bilhete na mesa: "Ajude-se! — O Mago do Castelo". Você come um pouco e se sente muito mais corajoso!',en:'The small door leads to a warm, fragrant kitchen. A delicious soup bubbles on the stove. There is a note on the table: "Help yourself! — The Castle Wizard". You eat some and feel much braver!'},choices:[{label:{pt:"Ir procurar o mago",en:"Go look for the wizard"},next:"castle_wizard"},{label:{pt:"Explorar mais o castelo",en:"Explore more of the castle"},next:"castle_upstairs"}]},{id:"castle_library",emoji:"📚",text:{pt:'Os livros na biblioteca são enormes e têm títulos como "Feitiços para Iniciantes" e "Dragões: Um Guia Completo". Um livro começa a brilhar quando você se aproxima. Ele se abre sozinho numa página especial!',en:'The books in the library are enormous with titles like "Spells for Beginners" and "Dragons: A Complete Guide". One book begins to glow as you approach. It opens by itself to a special page!'},choices:[{label:{pt:"Ler o livro brilhante",en:"Read the glowing book"},next:"castle_spell"},{label:{pt:"Pegar o livro sobre dragões",en:"Grab the dragon book"},next:"castle_dragon"}]},{id:"castle_cat",emoji:"🐱",text:{pt:'O gato abre os olhos lentamente e fala: "Finalmente! Estava esperando por você." Você quase cai de susto! O gato explica que é o guardião do castelo e que pode mostrar o tesouro secreto.',en:'The cat opens its eyes slowly and says: "Finally! I have been waiting for you." You nearly fall over in shock! The cat explains it is the castle guardian and can show you the secret treasure.'},choices:[{label:{pt:"Seguir o gato mágico",en:"Follow the magic cat"},next:"castle_end_treasure"},{label:{pt:"Perguntar como o gato fala",en:"Ask how the cat speaks"},next:"castle_wizard"}]},{id:"castle_golden_room",emoji:"✨",text:{pt:'A chave dourada abre uma porta secreta no jardim! Dentro há um quarto redondo cheio de estrelas brilhando no tecto, mesmo durante o dia. Uma nota diz: "Este quarto pertence a quem é curioso e corajoso."',en:'The golden key opens a secret door in the garden! Inside is a round room full of stars shining on the ceiling, even during the day. A note reads: "This room belongs to whoever is curious and brave."'},choices:[{label:{pt:"Deitar e observar as estrelas",en:"Lie down and watch the stars"},next:"castle_end_stars"},{label:{pt:"Procurar mais segredos no quarto",en:"Search for more secrets in the room"},next:"castle_end_treasure"}]},{id:"castle_witch",emoji:"🧙‍♀️",text:{pt:'A velhinha desce pelo jardim e se apresenta: "Sou a Bruxinha Margarida! Cuido deste castelo há 200 anos." Ela sorri: "Mas estou tão sozinha... Queres ficar para um chá e me contar histórias do mundo lá fora?"',en:'The little old lady comes down through the garden and introduces herself: "I am Witch Marguerite! I have been looking after this castle for 200 years." She smiles: "But I am so lonely... Will you stay for tea and tell me stories from the outside world?"'},choices:[{label:{pt:"Ficar para o chá e fazer amizade",en:"Stay for tea and make a friend"},next:"castle_end_friends"},{label:{pt:"Entrar e explorar o castelo dela",en:"Go in and explore her castle"},next:"castle_end_stars"}]},{id:"castle_spell",emoji:"🪄",text:{pt:"O livro ensina um feitiço simples de luz. Você segue as instruções e de repente a palma da sua mão brilha! A magia funciona! O castelo inteiro se ilumina e você vê um mapa secreto desenhado no chão.",en:"The book teaches a simple light spell. You follow the instructions and suddenly your palm glows! The magic works! The whole castle lights up and you see a secret map drawn on the floor."},choices:[{label:{pt:"Seguir o mapa até o tesouro",en:"Follow the map to the treasure"},next:"castle_end_treasure"},{label:{pt:"Guardar o mapa para voltar depois",en:"Keep the map and come back later"},next:"castle_end_stars"}]},{id:"castle_dragon",emoji:"🐉",text:{pt:"O livro se abre numa página com um dragão pequenino desenhado. De repente o dragão sai do livro! Mas é muito pequeno — cabe na sua mão. Ele ronrona como um gatinho e se torna seu amigo.",en:"The book opens to a page with a tiny dragon drawn on it. Suddenly the dragon leaps out of the book! But it is very tiny — small enough to fit in your hand. It purrs like a kitten and becomes your friend."},choices:[{label:{pt:"Levar o dragão em casa como animal de estimação",en:"Take the dragon home as a pet"},next:"castle_end_friends"},{label:{pt:"Pedir ao dragão para mostrar o castelo",en:"Ask the dragon to show you the castle"},next:"castle_end_treasure"}]},{id:"castle_wizard",emoji:"🧙",text:{pt:'Você encontra o Mago do Castelo na torre mais alta. É um senhor alegre com barba azul e chapéu de estrelas. Ele fica muito feliz com sua visita: "Não recebia visitantes há séculos! Vou te ensinar um feitiço de presente!"',en:"You find the Castle Wizard in the tallest tower. He is a jolly gentleman with a blue beard and a star-covered hat. He is thrilled by your visit: \"I haven't had visitors in centuries! I'll teach you a spell as a gift!\""},choices:[{label:{pt:"Aprender o feitiço e explorar o castelo",en:"Learn the spell and explore the castle"},next:"castle_end_stars"},{label:{pt:"Convidar o mago para jantar na sua casa",en:"Invite the wizard to dinner at your home"},next:"castle_end_friends"}]},{id:"castle_end_treasure",emoji:"💎",text:{pt:"Você descobriu o Tesouro do Castelo Misterioso! Baús cheios de joias coloridas, livros de magia e brinquedos encantados que nunca existiram antes. O mago diz que tudo pertence a você porque você foi corajoso e curioso. Que aventura incrível!",en:"You discovered the Treasure of the Mysterious Castle! Chests full of colourful jewels, magic books and enchanted toys that have never existed before. The wizard says it all belongs to you because you were brave and curious. What an incredible adventure!"},isEnding:!0,endingType:"good"},{id:"castle_end_friends",emoji:"🤝",text:{pt:"Você fez os melhores amigos do mundo neste castelo! A Bruxinha Margarida, o Mago da Barba Azul, o gato falante e até um dragãozinho. Eles te convidam para voltar sempre. Às vezes os maiores tesouros são as amizades que fazemos!",en:"You made the best friends in the world in this castle! Witch Marguerite, the Blue-Beard Wizard, the talking cat, and even a tiny dragon. They invite you to come back whenever you like. Sometimes the greatest treasures are the friendships we make!"},isEnding:!0,endingType:"good"},{id:"castle_end_stars",emoji:"🌌",text:{pt:"Você descobre o segredo mais bonito do castelo: um quarto com um telescópio mágico que mostra não só as estrelas, mas também as histórias que acontecem nelas. Você fica tão encantado que decide voltar todos os dias para aprender mais sobre o universo.",en:"You discover the most beautiful secret of the castle: a room with a magical telescope that shows not just stars but also the stories happening in them. You are so enchanted that you decide to come back every day to learn more about the universe."},isEnding:!0,endingType:"neutral"}]},{id:"space",emoji:"🚀",title:{pt:"Missão Espacial",en:"Space Mission"},description:{pt:"Sê o capitão de uma nave espacial e descobre planetas incríveis e seres amigáveis.",en:"Be the captain of a spaceship and discover incredible planets and friendly beings."},color:"#1e6fa8",totalEndings:4,scenes:[{id:"space_start",emoji:"🚀",text:{pt:"Você é o capitão da nave espacial Estrela Dourada! A nave está a orbitar um planeta desconhecido de cor roxa. Os sensores detectam vida lá em baixo, mas também um sinal de socorro vindo de uma lua próxima.",en:"You are the captain of the spaceship Golden Star! The ship is orbiting an unknown purple planet. Sensors detect life below, but also a distress signal coming from a nearby moon."},choices:[{label:{pt:"Descer ao planeta roxo",en:"Land on the purple planet"},next:"space_planet"},{label:{pt:"Ir até à lua do sinal de socorro",en:"Head to the moon with the distress signal"},next:"space_moon"},{label:{pt:"Analisar melhor os dados primeiro",en:"Analyse the data more carefully first"},next:"space_analyse"}]},{id:"space_planet",emoji:"🪐",text:{pt:"O planeta roxo é cheio de plantas gigantes que brilham de noite! Criaturas pequenas e amigáveis chamadas Puffs correm ao seu encontro. Elas falam numa língua estranha mas parecem muito alegres por te ver.",en:"The purple planet is full of giant plants that glow at night! Small, friendly creatures called Puffs come running towards you. They speak a strange language but seem very happy to see you."},choices:[{label:{pt:"Tentar comunicar com os Puffs",en:"Try to communicate with the Puffs"},next:"space_puffs"},{label:{pt:"Explorar a floresta brilhante",en:"Explore the glowing forest"},next:"space_forest"}]},{id:"space_moon",emoji:"🌕",text:{pt:"A lua tem uma superfície cinzenta e cheia de crateras. O sinal vem de uma cúpula de vidro escondida atrás de uma colina de pedra. Dentro, você vê um robô pequenino que acena para você!",en:"The moon has a grey surface full of craters. The signal comes from a glass dome hidden behind a stone hill. Inside, you spot a tiny robot waving at you!"},choices:[{label:{pt:"Entrar na cúpula para ajudar o robô",en:"Enter the dome to help the robot"},next:"space_robot"},{label:{pt:"Pedir reforços antes de entrar",en:"Call for backup before entering"},next:"space_analyse"}]},{id:"space_analyse",emoji:"💻",text:{pt:"Você estuda os dados com cuidado. Os computadores da nave revelam uma surpresa: o planeta roxo e a lua estão conectados! Um túnel subterrâneo liga os dois. Alguém — ou algo — mora nos dois lugares ao mesmo tempo!",en:"You study the data carefully. The ship's computers reveal a surprise: the purple planet and the moon are connected! An underground tunnel links the two. Someone — or something — lives in both places at once!"},choices:[{label:{pt:"Ir ao planeta para procurar a entrada do túnel",en:"Go to the planet to look for the tunnel entrance"},next:"space_tunnel"},{label:{pt:"Mandar uma mensagem amigável pelo rádio",en:"Send a friendly message by radio"},next:"space_radio"}]},{id:"space_puffs",emoji:"👽",text:{pt:"Com gestos e sorrisos, você começa a aprender a língua dos Puffs! Eles se chamam Bloop, Fleep e Zoop. Eles explicam que são os guardiões de uma semente especial que pode crescer em qualquer planeta do universo.",en:"With gestures and smiles, you begin to learn the Puffs' language! They are called Bloop, Fleep and Zoop. They explain they are guardians of a special seed that can grow on any planet in the universe."},choices:[{label:{pt:"Receber a semente como presente",en:"Accept the seed as a gift"},next:"space_end_seeds"},{label:{pt:"Ajudá-los a plantar a semente num novo planeta",en:"Help them plant the seed on a new planet"},next:"space_end_friendship"}]},{id:"space_forest",emoji:"🌿",text:{pt:"A floresta brilhante é mágica! As plantas emitem sons musicais ao serem tocadas. Você descobre que toda a floresta é um instrumento musical gigante. De repente, uma melodia incrível começa a tocar quando você toca as plantas na ordem certa.",en:"The glowing forest is magical! The plants make musical sounds when touched. You discover the whole forest is one giant musical instrument. Suddenly, an incredible melody begins to play when you touch the plants in the right order."},choices:[{label:{pt:"Gravar a música para levar para casa",en:"Record the music to take home"},next:"space_end_music"},{label:{pt:"Chamar os Puffs para dançar",en:"Call the Puffs to come dance"},next:"space_end_friendship"}]},{id:"space_robot",emoji:"🤖",text:{pt:"O robô se chama R-7 e ficou preso na cúpula há 50 anos quando a sua nave avariou. Ele ficou a estudar as estrelas sozinho todo esse tempo. Está tão feliz que começa a dançar! Ele tem mapas de 1000 planetas desconhecidos!",en:"The robot is called R-7 and got stuck in the dome 50 years ago when its ship broke down. It has been studying the stars alone all that time. It is so happy that it starts dancing! It has maps of 1000 unknown planets!"},choices:[{label:{pt:"Levar o R-7 a bordo da sua nave",en:"Bring R-7 aboard your ship"},next:"space_end_friendship"},{label:{pt:"Usar os mapas para explorar novos planetas juntos",en:"Use the maps to explore new planets together"},next:"space_end_exploration"}]},{id:"space_tunnel",emoji:"🕳️",text:{pt:"Você encontra a entrada do túnel escondida debaixo de uma rocha enorme. É um tubo de vidro que brilha de azul por dentro. Ao entrar, você escorrega rapidamente até um laboratório subterrâneo incrível!",en:"You find the tunnel entrance hidden under an enormous rock. It is a glass tube that glows blue inside. When you enter, you slide quickly down to an incredible underground laboratory!"},choices:[{label:{pt:"Explorar o laboratório",en:"Explore the laboratory"},next:"space_end_exploration"},{label:{pt:"Usar o laboratório para fazer contacto com outros planetas",en:"Use the lab to make contact with other planets"},next:"space_end_seeds"}]},{id:"space_radio",emoji:"📡",text:{pt:'Você envia uma mensagem simpática: "Olá, viemos em paz!" Uns segundos depois, recebe uma resposta com música! É uma melodia linda de um ser chamado Cosmo que mora em ambos os mundos e está muito curioso sobre a Terra.',en:'You send a friendly message: "Hello, we come in peace!" A few seconds later you receive a reply with music! It is a beautiful melody from a being called Cosmo who lives in both worlds and is very curious about Earth.'},choices:[{label:{pt:"Trocar músicas e histórias com Cosmo",en:"Exchange music and stories with Cosmo"},next:"space_end_music"},{label:{pt:"Convidar Cosmo a visitar a Terra",en:"Invite Cosmo to visit Earth"},next:"space_end_friendship"}]},{id:"space_end_exploration",emoji:"🗺️",text:{pt:"Com os mapas incríveis que encontrou, você se torna o maior explorador espacial de todos os tempos! A sua nave visita centenas de planetas novos e cada um tem maravilhas nunca vistas. Você escreve um livro que todas as crianças da galáxia lêem!",en:"With the incredible maps you found, you become the greatest space explorer of all time! Your ship visits hundreds of new planets and each one has wonders never seen before. You write a book that every child in the galaxy reads!"},isEnding:!0,endingType:"good"},{id:"space_end_friendship",emoji:"🌈",text:{pt:"Você faz os melhores amigos do universo: os Puffs Bloop, Fleep e Zoop, o robô R-7 e o misterioso Cosmo! Eles visitam a Terra e ficam encantados com o planeta azul. Vocês criam uma aliança galáctica de amizade e aventuras!",en:"You make the best friends in the universe: the Puffs Bloop, Fleep and Zoop, the robot R-7, and the mysterious Cosmo! They visit Earth and are enchanted by the blue planet. Together you create a galactic alliance of friendship and adventures!"},isEnding:!0,endingType:"good"},{id:"space_end_music",emoji:"🎵",text:{pt:"Você traz para a Terra a música mais bonita do universo. Quando ela toca, as pessoas ficam em paz e felizes. Cientistas descobrem que a melodia contém a linguagem universal que todos os seres do cosmos entendem. Você mudou o mundo com música!",en:"You bring to Earth the most beautiful music in the universe. When it plays, people feel peaceful and happy. Scientists discover the melody contains the universal language that all beings in the cosmos understand. You changed the world with music!"},isEnding:!0,endingType:"neutral"},{id:"space_end_seeds",emoji:"🌱",text:{pt:"A semente especial dos Puffs cresce em todos os planetas! Em pouco tempo, cada mundo tem uma floresta brilhante e musical. Os Puffs te nomeiam Guardião das Sementes do Universo. É uma responsabilidade enorme, mas você está pronto!",en:"The Puffs' special seed grows on every planet! Soon, every world has a glowing, musical forest. The Puffs name you Guardian of the Universe's Seeds. It is an enormous responsibility, but you are ready!"},isEnding:!0,endingType:"neutral"}]},{id:"island",emoji:"🌊",title:{pt:"A Ilha do Tesouro",en:"Treasure Island"},description:{pt:"Segue um mapa antigo até uma ilha misteriosa e descobre o que o tesouro realmente é.",en:"Follow an old map to a mysterious island and discover what the treasure really is."},color:"#2d7a4f",totalEndings:3,scenes:[{id:"island_start",emoji:"🗺️",text:{pt:"Você encontrou um velho mapa numa garrafa à beira-mar! O mapa mostra uma ilha misteriosa com um X marcando onde está escondido um tesouro. Você tem um barco pequeno e dois amigos prontos para a aventura!",en:"You found an old map in a bottle by the sea! The map shows a mysterious island with an X marking where a treasure is hidden. You have a small boat and two friends ready for adventure!"},choices:[{label:{pt:"Seguir o mapa directamente até ao X",en:"Follow the map straight to the X"},next:"island_direct"},{label:{pt:"Explorar a ilha primeiro para conhecê-la",en:"Explore the island first to get to know it"},next:"island_explore"},{label:{pt:"Perguntar a um pescador local sobre a ilha",en:"Ask a local fisherman about the island"},next:"island_fisherman"}]},{id:"island_direct",emoji:"🧭",text:{pt:"Você segue o mapa com cuidado pela floresta tropical. Os sons dos pássaros coloridos enchem o ar. De repente, o caminho divide-se em dois: um desce para a praia, o outro sobe pela montanha.",en:"You follow the map carefully through the tropical forest. The sounds of colourful birds fill the air. Suddenly the path splits in two: one goes down to the beach, the other climbs up the mountain."},choices:[{label:{pt:"Ir pela praia",en:"Go along the beach"},next:"island_beach"},{label:{pt:"Subir a montanha",en:"Climb the mountain"},next:"island_mountain"}]},{id:"island_explore",emoji:"🌴",text:{pt:'Explorando a ilha, você encontra uma aldeia escondida na floresta! Os moradores são crianças e adultos que vivem ali há gerações. A anciã da aldeia olha para o seu mapa e diz: "Conheço este tesouro. É especial!"',en:'Exploring the island, you find a hidden village in the forest! The residents are children and adults who have lived there for generations. The village elder looks at your map and says: "I know this treasure. It is special!"'},choices:[{label:{pt:"Ouvir o que a anciã sabe sobre o tesouro",en:"Listen to what the elder knows about the treasure"},next:"island_elder"},{label:{pt:"Convidar a aldeia para ir contigo",en:"Invite the village to come with you"},next:"island_together"}]},{id:"island_fisherman",emoji:"🎣",text:{pt:'O pescador olha para o mapa e arregalha os olhos. "Ah! Esse é o Mapa do Capitão Estrela! Ele escondeu o tesouro aqui há 300 anos. Mas cuidado com a Lagoa dos Peixes Voadores — eles adoram brincar com viajantes!"',en:'The fisherman looks at the map and his eyes go wide. "Ah! That is Captain Star\'s Map! He hid the treasure here 300 years ago. But beware of the Flying Fish Lagoon — they love to play tricks on travellers!"'},choices:[{label:{pt:"Ir ver a lagoa dos peixes voadores",en:"Go see the flying fish lagoon"},next:"island_lagoon"},{label:{pt:"Pedir ao pescador para guiar você até ao X",en:"Ask the fisherman to guide you to the X"},next:"island_direct"}]},{id:"island_beach",emoji:"🐚",text:{pt:'A praia é lindíssima com areia dourada e conchas coloridas. Uma tartaruga gigante dorme na areia. Quando você passa, ela acorda e fala: "Boa tarde! Procura o tesouro, não é? Eu sei onde fica!"',en:'The beach is beautiful with golden sand and colourful shells. A giant turtle is sleeping on the sand. When you walk past, it wakes up and says: "Good afternoon! You are looking for the treasure, aren\'t you? I know where it is!"'},choices:[{label:{pt:"Seguir a tartaruga",en:"Follow the turtle"},next:"island_turtle"},{label:{pt:"Agradecer mas continuar pelo mapa",en:"Thank the turtle but continue with the map"},next:"island_mountain"}]},{id:"island_mountain",emoji:"⛰️",text:{pt:"No topo da montanha, há uma vista incrível de toda a ilha! E você vê claramente onde está o X do mapa — uma gruta escondida atrás de uma cascata. Mas para chegar lá, precisa de atravessar uma ponte de lianas sobre um rio.",en:"At the top of the mountain, there is an incredible view of the whole island! And you can clearly see where the X on the map is — a cave hidden behind a waterfall. But to get there, you need to cross a vine bridge over a river."},choices:[{label:{pt:"Atravessar a ponte de lianas",en:"Cross the vine bridge"},next:"island_cave"},{label:{pt:"Descer pela cascata com uma corda",en:"Climb down by the waterfall with a rope"},next:"island_waterfall"}]},{id:"island_elder",emoji:"👵",text:{pt:'A anciã conta que o tesouro do Capitão Estrela não é ouro — é um cofre de sementes raras de plantas que curam qualquer doença! "Foram roubadas do nosso povo há 300 anos. Se as trouver de volta, a nossa aldeia florescerá de novo!"',en:'The elder explains that Captain Star\'s treasure is not gold — it is a chest of rare seeds from plants that heal any illness! "They were stolen from our people 300 years ago. If you bring them back, our village will flourish again!"'},choices:[{label:{pt:"Prometer devolver o tesouro ao povo da ilha",en:"Promise to return the treasure to the island people"},next:"island_together"},{label:{pt:"Ir buscar o tesouro e partilhá-lo",en:"Go get the treasure and share it"},next:"island_cave"}]},{id:"island_together",emoji:"👫",text:{pt:"Toda a aldeia vai convosco! É uma festa animada a caminhar pela floresta. As crianças cantam, os adultos contam histórias antigas. Juntos, encontram o caminho até à gruta mais depressa e sem nenhum perigo.",en:"The whole village comes with you! It is a joyful procession through the forest. The children sing, the adults tell old stories. Together, you find the path to the cave faster and without any danger."},choices:[{label:{pt:"Abrir a gruta juntos",en:"Open the cave together"},next:"island_end_village"},{label:{pt:"Deixar a anciã entrar primeiro",en:"Let the elder enter first"},next:"island_end_village"}]},{id:"island_lagoon",emoji:"🐟",text:{pt:'A Lagoa dos Peixes Voadores é espectacular! Os peixes saltam para fora de água e voam pelo ar. Um peixe dourado pousa no seu ombro e cochicha: "Sigo o X do teu mapa — sigo eu!" e voa em frente a guiar o caminho.',en:'The Flying Fish Lagoon is spectacular! The fish leap out of the water and fly through the air. A golden fish lands on your shoulder and whispers: "I follow your map\'s X — I follow! Follow me!" and flies ahead to guide the way.'},choices:[{label:{pt:"Seguir o peixe dourado",en:"Follow the golden fish"},next:"island_cave"},{label:{pt:"Nadar com os peixes voadores primeiro",en:"Swim with the flying fish first"},next:"island_waterfall"}]},{id:"island_turtle",emoji:"🐢",text:{pt:'A tartaruga leva você por um caminho secreto pela floresta que nenhum mapa mostra. Em poucos minutos chegam a uma gruta escondida. "Eu guardo este segredo há 100 anos," diz ela orgulhosa.',en:'The turtle leads you along a secret path through the forest that no map shows. In just a few minutes you arrive at a hidden cave. "I have kept this secret for 100 years," she says proudly.'},choices:[{label:{pt:"Entrar na gruta",en:"Enter the cave"},next:"island_cave"},{label:{pt:"Agradecer e dar à tartaruga a sua melhor concha",en:"Thank the turtle and give her your best shell"},next:"island_end_friends"}]},{id:"island_cave",emoji:"🌊",text:{pt:"A gruta atrás da cascata é mágica! As paredes brilham com pedras coloridas. No centro, sobre um pedestal de coral, repousa o cofre do Capitão Estrela. Está coberto de conchas e estrelas-do-mar adormecidas.",en:"The cave behind the waterfall is magical! The walls shimmer with colourful stones. In the centre, on a coral pedestal, rests Captain Star's chest. It is covered in shells and sleeping starfish."},choices:[{label:{pt:"Abrir o cofre",en:"Open the chest"},next:"island_end_treasure"},{label:{pt:"Ler a inscrição gravada no cofre primeiro",en:"Read the inscription carved on the chest first"},next:"island_end_village"}]},{id:"island_waterfall",emoji:"💧",text:{pt:"A cascata forma uma piscina natural linda e fresca. Você nada até ao fundo e descobre um túnel subaquático que leva directamente para dentro da gruta do tesouro! É o atalho secreto que o Capitão Estrela usava.",en:"The waterfall forms a beautiful cool natural pool. You swim to the bottom and discover an underwater tunnel leading straight into the treasure cave! It is the secret shortcut that Captain Star used."},choices:[{label:{pt:"Atravessar o túnel subaquático",en:"Swim through the underwater tunnel"},next:"island_end_treasure"},{label:{pt:"Voltar e partilhar a descoberta com a aldeia",en:"Go back and share the discovery with the village"},next:"island_end_village"}]},{id:"island_end_treasure",emoji:"💰",text:{pt:"O cofre está cheio de moedas douradas, joias brilhantes e mapas de ilhas secretas ao redor do mundo! Você decide partilhar o tesouro com a aldeia da ilha e com as famílias dos pescadores. Toda a gente fica feliz e você é declarado Herói da Ilha!",en:"The chest is full of gold coins, shining jewels and maps of secret islands around the world! You decide to share the treasure with the island village and the fishermen's families. Everyone is happy and you are declared Hero of the Island!"},isEnding:!0,endingType:"good"},{id:"island_end_village",emoji:"🌺",text:{pt:"O cofre continha as sementes mágicas que pertenciam ao povo da ilha! Ao plantá-las, a floresta começa a florescer com cores que nunca tinham visto. A aldeia organiza uma festa enorme em sua honra e você é convidado a ficar para sempre!",en:"The chest contained the magic seeds that belonged to the island people! When planted, the forest begins to bloom with colours never seen before. The village throws a huge party in your honour and you are invited to stay forever!"},isEnding:!0,endingType:"good"},{id:"island_end_friends",emoji:"🐠",text:{pt:"A tartaruga, os peixes voadores e o povo da ilha tornam-se os seus melhores amigos. Você volta a visitar a ilha todos os verões e cada vez encontra novos segredos escondidos. A ilha é um lugar mágico que só os corações bons conseguem encontrar.",en:"The turtle, the flying fish and the island people become your best friends. You visit the island every summer and each time you find new hidden secrets. The island is a magical place that only kind hearts can find."},isEnding:!0,endingType:"neutral"}]}],p=n.keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=n.keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-12px); }
`,m=n.keyframes`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,f=n.keyframes`
  0%   { opacity: 0; transform: scale(0.5); }
  70%  { opacity: 1; transform: scale(1.12); }
  100% { opacity: 1; transform: scale(1); }
`,g=n.keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,h=r.default.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${({accentColor:e})=>e?`radial-gradient(ellipse at top left, ${e}18 0%, ${i.w4.colors.mainBg} 55%)`:i.w4.colors.mainBg};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  transition: background 0.4s ease;
`,x=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  border-bottom: 1px solid ${i.w4.colors.border};
  flex-shrink: 0;
`,b=r.default.button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  background: none;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  min-height: 44px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  &:hover {
    color: ${i.w4.colors.mainText};
    border-color: ${i.w4.colors.accent};
    background: ${i.w4.colors.surface};
  }
`,y=r.default.h1`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,w=r.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${i.w4.spacing.xl} ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=r.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.lg};
  width: 100%;
  max-width: 900px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`,$=r.default.h2`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin-bottom: ${i.w4.spacing.sm};
`,j=r.default.p`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin-bottom: ${i.w4.spacing.xl};
`,k=r.default.button`
  background: linear-gradient(
    135deg,
    ${i.w4.colors.surface} 0%,
    ${({accentColor:e})=>e}12 100%
  );
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xl} ${i.w4.spacing.lg};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  animation: ${p} 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: ${({accentColor:e})=>e};
    box-shadow: 0 8px 32px ${({accentColor:e})=>e}40;
    background: linear-gradient(
      135deg,
      ${i.w4.colors.surface} 0%,
      ${({accentColor:e})=>e}20 100%
    );
  }
`,z=r.default.span`
  font-size: 48px;
  line-height: 1;
  display: block;
  margin-bottom: ${i.w4.spacing.sm};
`,S=r.default.h3`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,C=r.default.p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  margin: 0;
  line-height: ${i.w4.typography.lineHeightBase};
`,T=r.default.div`
  display: inline-flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  font-size: 12px;
  font-weight: 600;
  padding: 2px ${i.w4.spacing.sm};
  border-radius: 100px;
  margin-top: ${i.w4.spacing.xs};
  background: ${({hasProgress:e})=>e?"rgba(88, 166, 255, 0.15)":"rgba(139, 148, 158, 0.1)"};
  color: ${({hasProgress:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  border: 1px solid ${({hasProgress:e})=>e?"rgba(88, 166, 255, 0.3)":i.w4.colors.border};
`,M=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  animation: ${({exiting:e})=>e?u:p} 0.25s ease forwards;
`,A=r.default.div`
  font-size: 80px;
  line-height: 1;
  margin-bottom: ${i.w4.spacing.lg};
  animation: ${f} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  @media (max-width: 768px) {
    font-size: 60px;
  }
`,R=r.default.div`
  font-size: 18px;
  line-height: 1.75;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin-bottom: ${i.w4.spacing.xl};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.xl};
  min-height: 5em;
  position: relative;
  animation: ${p} 0.5s ease both;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: ${i.w4.spacing.md};
  }
`,_=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  width: 100%;
`,B=r.default.button`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-left: 3px solid ${i.w4.colors.accent};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
  font-family: ${i.w4.typography.fontFamily};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  text-align: left;
  cursor: pointer;
  min-height: 56px;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
  line-height: ${i.w4.typography.lineHeightBase};
  opacity: 0;
  animation: ${p} 0.25s ease forwards;
  animation-delay: ${({index:e})=>100*e}ms;
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  &:hover {
    background: rgba(88, 166, 255, 0.08);
    border-color: ${i.w4.colors.accent};
    border-left-color: ${i.w4.colors.accentHover};
    transform: translateX(4px);
  }
  @media (max-width: 768px) {
    font-size: ${i.w4.typography.fontSizeBase};
  }
`,I=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  margin-bottom: ${i.w4.spacing.xl};
  width: 100%;
`,E=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,P=r.default.span`
  color: ${i.w4.colors.accent};
  font-weight: 600;
`,D=r.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`,L=r.default.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({filled:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  transition: background 0.2s ease;
`,O=r.default.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${i.w4.colors.accent};
  color: ${i.w4.colors.mainBg};
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
`,F=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  text-align: center;
  animation: ${p} 0.4s ease;
`,N=n.keyframes`
  0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
  60%  { opacity: 1; transform: scale(1.2) rotate(8deg); }
  80%  { transform: scale(0.95) rotate(-3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,H=r.default.div`
  font-size: 100px;
  line-height: 1;
  margin-bottom: ${i.w4.spacing.lg};
  animation: ${N} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
`,G=r.default.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.md};
  border-radius: 100px;
  margin-bottom: ${i.w4.spacing.md};
  background: ${({endingType:e})=>"good"===e?"rgba(63, 185, 80, 0.15)":"rgba(88, 166, 255, 0.12)"};
  color: ${({endingType:e})=>"good"===e?"#3fb950":i.w4.colors.accent};
  border: 1px solid ${({endingType:e})=>"good"===e?"rgba(63, 185, 80, 0.3)":"rgba(88, 166, 255, 0.3)"};
`,Y=r.default.h2`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  margin-bottom: ${i.w4.spacing.md};
`,q=r.default.p`
  font-size: 17px;
  line-height: 1.75;
  color: ${i.w4.colors.mainText};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.xl};
  margin-bottom: ${i.w4.spacing.xl};
  min-height: 4em;
  animation: ${p} 0.5s ease both;
  @media (max-width: 768px) {
    font-size: 15px;
    padding: ${i.w4.spacing.md};
  }
`,V=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  width: 100%;
`,W=r.default.button`
  background: ${i.w4.colors.accent};
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  color: #0d1117;
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.xl};
  cursor: pointer;
  min-height: 52px;
  transition: background 0.2s ease, transform 0.15s ease;
  &:hover {
    background: ${i.w4.colors.accentHover};
    transform: translateY(-2px);
  }
`,J=r.default.button`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.xl};
  cursor: pointer;
  min-height: 44px;
  transition: border-color 0.2s ease, background 0.2s ease;
  &:hover {
    border-color: ${i.w4.colors.accent};
    background: rgba(88, 166, 255, 0.06);
  }
`,X=r.default.div`
  background: linear-gradient(90deg, #3fb950, #58a6ff);
  background-size: 200% 100%;
  animation: ${g} 2s linear infinite;
  color: #0d1117;
  font-weight: 700;
  font-size: ${i.w4.typography.fontSizeSm};
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.md};
  border-radius: 100px;
  margin-bottom: ${i.w4.spacing.md};
`,U=r.default.div`
  position: fixed;
  top: -20px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px;
  animation: ${m} ${({delay:e})=>1.8+e}s ease-in ${({delay:e})=>e}s forwards;
  pointer-events: none;
  z-index: 9999;
`,K=["#58a6ff","#3fb950","#f78166","#ffa657","#d2a8ff","#79c0ff"];function Q(){const e=Array.from({length:40},(e,a)=>({id:a,left:100*Math.random(),delay:1.2*Math.random(),color:K[Math.floor(Math.random()*K.length)]??"#58a6ff",size:6+Math.floor(10*Math.random())}));return(0,s.jsx)(s.Fragment,{children:e.map(e=>(0,s.jsx)(U,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.id))})}const Z=["A","B","C","D"];function ee({lang:e,onBack:a}){const[o,r]=(0,t.useState)({phase:"select"}),[n,i]=(0,t.useState)(c),p=(0,t.useRef)(null),[u,m]=(0,t.useState)(!1),[f,g]=(0,t.useState)(0),N=(0,t.useRef)(null),[U,K]=(0,t.useState)(0),ee="pt"===e?"pt":"en",ae=(0,t.useCallback)(e=>{m(!1),g(e=>e+1),N.current&&clearTimeout(N.current),N.current=setTimeout(()=>{m(!0)},600)},[]),oe=(0,t.useRef)(null),te=(0,t.useRef)(!1),re=(0,t.useCallback)(e=>{oe.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),ne=(0,t.useCallback)(e=>a=>{if(!oe.current)return;const o=Math.abs(a.changedTouches[0].clientX-oe.current.x),t=Math.abs(a.changedTouches[0].clientY-oe.current.y);oe.current=null,o>8||t>8||(te.current=!0,e())},[]),ie=(0,t.useCallback)(e=>()=>{te.current?te.current=!1:e()},[]),se=(0,t.useCallback)((e,a)=>{const o=d.find(a=>a.id===e);return o?.scenes.find(e=>e.id===a)},[]),le=(0,t.useCallback)((a,t)=>{const s=se(a,t);if(s)if(s.isEnding){const o=n[a]??[],c=!o.includes(t),d={...n,[a]:c?[...o,t]:o};c&&(i(d),function(e){try{localStorage.setItem(l,JSON.stringify(e))}catch{}}(d)),r({phase:"ending",storyId:a,sceneId:t,isNew:c}),ae(s.text["pt"===e?"pt":"en"])}else K(e=>e+1),"scene"===o.phase?(r({...o,exiting:!0}),p.current=setTimeout(()=>{r({phase:"scene",storyId:a,sceneId:t,exiting:!1}),ae(s.text["pt"===e?"pt":"en"])},220)):(r({phase:"scene",storyId:a,sceneId:t,exiting:!1}),ae(s.text["pt"===e?"pt":"en"]))},[se,o,n,ae,e]),ce=(0,t.useCallback)(a=>{const o=d.find(e=>e.id===a);o&&o.scenes[0]&&(K(0),r({phase:"scene",storyId:a,sceneId:o.scenes[0].id,exiting:!1}),ae(o.scenes[0].text["pt"===e?"pt":"en"]))},[ae,e]),de=(0,t.useCallback)(()=>{p.current&&clearTimeout(p.current),N.current&&clearTimeout(N.current),r({phase:"select"}),K(0),m(!1)},[]);(0,t.useEffect)(()=>()=>{p.current&&clearTimeout(p.current),N.current&&clearTimeout(N.current)},[]);const pe="pt"===ee?"Aventura de Texto":"Text Adventure";if("select"===o.phase){const e="pt"===ee?"Escolhe a tua Aventura":"Choose Your Adventure",a="pt"===ee?"Selecciona uma história e toma decisões que moldam o destino!":"Select a story and make choices that shape the outcome!";return(0,s.jsxs)(h,{children:[(0,s.jsx)(x,{children:(0,s.jsx)(y,{children:pe})}),(0,s.jsxs)(w,{children:[(0,s.jsx)($,{children:e}),(0,s.jsx)(j,{children:a}),(0,s.jsx)(v,{children:d.map(e=>{const a=(n[e.id]??[]).length,o=a>0,t="pt"===ee?`${a}/${e.totalEndings} finais descobertos`:`${a}/${e.totalEndings} endings found`,r=()=>ce(e.id);return(0,s.jsxs)(k,{accentColor:e.color,onTouchStart:re,onTouchEnd:ne(r),onClick:ie(r),children:[(0,s.jsx)(z,{children:e.emoji}),(0,s.jsx)(S,{children:e.title[ee]}),(0,s.jsx)(C,{children:e.description[ee]}),(0,s.jsxs)(T,{hasProgress:o,children:[o?"⭐ ":"○ ",t]})]},e.id)})})]})]})}if("scene"===o.phase){const{storyId:e,sceneId:a,exiting:t}=o,r=se(e,a),n=d.find(a=>a.id===e);if(!r||!n)return(0,s.jsx)(h,{children:(0,s.jsx)(w,{children:"pt"===ee?"Cena não encontrada.":"Scene not found."})});const i="pt"===ee?"← Histórias":"← Stories",l=8,c=Math.min(U+1,l);return(0,s.jsxs)(h,{accentColor:n.color,children:[(0,s.jsxs)(x,{children:[(0,s.jsx)(b,{onTouchStart:re,onTouchEnd:ne(de),onClick:ie(de),children:i}),(0,s.jsx)(y,{children:n.title[ee]})]}),(0,s.jsx)(w,{children:(0,s.jsxs)(M,{exiting:t,children:[(0,s.jsxs)(I,{children:[(0,s.jsxs)(E,{children:[n.emoji," ",(0,s.jsx)(P,{children:n.title[ee]})]}),(0,s.jsx)(D,{children:Array.from({length:l},(e,a)=>(0,s.jsx)(L,{filled:a<c},a))})]}),(0,s.jsx)(A,{children:r.emoji},a),(0,s.jsx)(R,{children:r.text[ee]},f),u&&r.choices&&(0,s.jsx)(_,{children:r.choices.map((a,o)=>{const t=()=>le(e,a.next);return(0,s.jsxs)(B,{index:o,onTouchStart:re,onTouchEnd:ne(t),onClick:ie(t),children:[(0,s.jsx)(O,{children:Z[o]??String(o+1)}),a.label[ee]]},o)})})]})})]})}if("ending"===o.phase){const{storyId:e,sceneId:a,isNew:t}=o,r=se(e,a),i=d.find(a=>a.id===e);if(!r||!i)return(0,s.jsx)(h,{children:(0,s.jsx)(w,{children:"pt"===ee?"Fim não encontrado.":"Ending not found."})});const l=r.endingType??"neutral",c="good"===l,p=(n[e]??[]).length,m=c?"pt"===ee?"🎉 Final Feliz!":"🎉 Happy Ending!":"pt"===ee?"✨ Final Alternativo":"✨ Alternative Ending",g=c?"pt"===ee?"Que aventura incrível!":"What an incredible adventure!":"pt"===ee?"Uma história para recordar.":"A story to remember.",v="pt"===ee?"🌟 Novo final descoberto!":"🌟 New ending discovered!",$="pt"===ee?`${p} de ${i.totalEndings} finais encontrados`:`${p} of ${i.totalEndings} endings found`,j="pt"===ee?"Jogar novamente":"Play again",k="pt"===ee?"Escolher outra história":"Choose another story",z=()=>ce(e),S=()=>de();return(0,s.jsxs)(h,{accentColor:i.color,children:[c&&(0,s.jsx)(Q,{}),(0,s.jsxs)(x,{children:[(0,s.jsx)(b,{onTouchStart:re,onTouchEnd:ne(de),onClick:ie(de),children:"pt"===ee?"← Histórias":"← Stories"}),(0,s.jsx)(y,{children:i.title[ee]})]}),(0,s.jsx)(w,{children:(0,s.jsxs)(F,{children:[t&&(0,s.jsx)(X,{children:v}),(0,s.jsx)(H,{children:r.emoji}),(0,s.jsx)(G,{endingType:l,children:m}),(0,s.jsx)(Y,{children:g}),(0,s.jsx)(q,{children:r.text[ee]},f),u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(T,{hasProgress:p>0,style:{marginBottom:24},children:[p>0?"⭐ ":"○ ",$]}),(0,s.jsxs)(V,{children:[(0,s.jsx)(W,{onTouchStart:re,onTouchEnd:ne(z),onClick:ie(z),children:j}),(0,s.jsx)(J,{onTouchStart:re,onTouchEnd:ne(S),onClick:ie(S),children:k})]})]})]})})]})}return null}},273(e,a,o){o.d(a,{t:()=>K});var t=o(7359),r=o(3233),n=o(7207),i=o(9178),s=o(1364),l=o(5723);const c=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function d(e){for(const a of c){const[o,t,r]=a;if(e[o]&&e[o]===e[t]&&e[o]===e[r])return{winner:e[o],line:a}}return{winner:null,line:null}}function p(e){return e.reduce((e,a,o)=>null===a?[...e,o]:e,[])}function u(e,a){const{winner:o}=d(e);if("O"===o)return 10;if("X"===o)return-10;const t=p(e);if(0===t.length)return 0;if(a){let a=-1/0;for(const o of t)e[o]="O",a=Math.max(a,u(e,!1)),e[o]=null;return a}{let a=1/0;for(const o of t)e[o]="X",a=Math.min(a,u(e,!0)),e[o]=null;return a}}const m={title:{pt:"Jogo do Galo",en:"Tic Tac Toe"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},thinking:{pt:"A pensar...",en:"Thinking..."},youWin:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},youLose:{pt:"😅 Perdeste!",en:"😅 You lost!"},draw:{pt:"🤝 Empate!",en:"🤝 Draw!"},playAgain:{pt:"Jogar outra vez",en:"Play again"},back:{pt:"← Voltar",en:"← Back"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},wins:{pt:"Vitórias",en:"Wins"},losses:{pt:"Derrotas",en:"Losses"},draws:{pt:"Empates",en:"Draws"},you:{pt:"Tu",en:"You"},robot:{pt:"Robot",en:"Robot"},vsRobot:{pt:"vs Robot",en:"vs Robot"},vsFriend:{pt:"vs Amigo",en:"vs Friend"},player1:{pt:"Jogador 1",en:"Player 1"},player2:{pt:"Jogador 2",en:"Player 2"},player1Turn:{pt:"Vez do Jogador 1!",en:"Player 1's turn!"},player2Turn:{pt:"Vez do Jogador 2!",en:"Player 2's turn!"},player1Wins:{pt:"🎉 Jogador 1 ganhou!",en:"🎉 Player 1 wins!"},player2Wins:{pt:"🎉 Jogador 2 ganhou!",en:"🎉 Player 2 wins!"},p1:{pt:"J1",en:"P1"},p2:{pt:"J2",en:"P2"},vsOnline:{pt:"Online",en:"Online"},opponentTurn:{pt:"Vez do adversário!",en:"Opponent's turn!"},youWinOnline:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},opponentWins:{pt:"😅 O adversário ganhou!",en:"😅 Opponent wins!"},opponentLeft:{pt:"O adversário saiu.",en:"Opponent left."},rematchReq:{pt:"Revanche pedida…",en:"Rematch requested…"},rematch:{pt:"Revanche",en:"Rematch"},waitingRematch:{pt:"À espera da resposta…",en:"Waiting for response…"}},f="⭐",g="🌙",h="atlantis-tictactoe-score";function x(){try{const e=localStorage.getItem(h);if(e)return JSON.parse(e)}catch{}return{wins:0,losses:0,draws:0}}const b=n.keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
`,y=n.keyframes`
  0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
  60%  { transform: scale(1.15) rotate(3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,w=n.keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.12); }
`,v=n.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
`,$=n.keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
`,j=n.keyframes`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.4); }
  70%  { transform: scale(0.9); }
  100% { transform: scale(1); }
`,k=n.keyframes`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%           { transform: scale(1);   opacity: 1; }
`,z=n.keyframes`
  0%   { transform: translateY(-10px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(40px) rotate(360deg); opacity: 0; }
`,S=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${i.w4.spacing.lg};
  gap: ${i.w4.spacing.lg};
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.04) 0%, transparent 70%),
    #080b12;
  min-height: 0;
`,C=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  animation: ${b} 0.3s ease;
`,T=r.default.h1`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`,M=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
`,A=r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  background: ${({active:e,color:a})=>e?a+"20":i.w4.colors.surface};
  color: ${({active:e,color:a})=>e?a:i.w4.colors.mainTextMuted};
  border: 1.5px solid ${({active:e,color:a})=>e?a+"60":i.w4.colors.border};
  box-shadow: ${({active:e,color:a})=>e?`0 0 12px ${a}20`:"none"};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}18;
    border-color: ${({color:e})=>e}50;
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,R=r.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
`,_=r.default.button`
  padding: 8px 16px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: ${({active:e,color:a})=>e?a+"22":"transparent"};
  color: ${({active:e,color:a})=>e?a:i.w4.colors.mainTextMuted};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}11;
  }
`,B=r.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 20px;
  animation: ${({variant:e})=>"win"===e?v:b} ${({variant:e})=>"win"===e?"0.6s ease-in-out infinite":"0.3s ease"};
  background: ${({variant:e})=>"win"===e?"rgba(63, 185, 80, 0.15)":"lose"===e?"rgba(249, 117, 131, 0.15)":"draw"===e?"rgba(210, 169, 34, 0.15)":"rgba(88, 166, 255, 0.1)"};
  color: ${({variant:e})=>"win"===e?"#3fb950":"lose"===e?"#f97583":"draw"===e?"#d2a922":i.w4.colors.accent};
`,I=r.default.div`
  position: relative;
`,E=r.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background: ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06);
`,P=r.default.button`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({isWinning:e})=>e?"rgba(63, 185, 80, 0.12)":i.w4.colors.surface};
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  transition: background 0.15s, transform 0.15s, opacity 0.2s;
  font-size: clamp(36px, 8vw, 52px);
  line-height: 1;
  position: relative;
  animation: ${({isWinning:e})=>e?w:"none"} 1s ease-in-out infinite;
  opacity: ${({isThinking:e})=>e?.55:1};

  &:hover:not(:disabled) {
    background: rgba(88, 166, 255, 0.08);
    transform: scale(1.04);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }
`,D=r.default.span`
  animation: ${({isNew:e})=>e?y:"none"} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`,L=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  animation: ${b} 0.3s ease 0.1s both;
`,O=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,F=r.default.span`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${({color:e})=>e};
  font-variant-numeric: tabular-nums;
  animation: ${({pop:e})=>e?j:"none"} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
`,N=r.default.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${i.w4.colors.mainTextMuted};
`,H=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  animation: ${b} 0.3s ease 0.2s both;
`,G=r.default.button`
  padding: 12px 24px;
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, border-color 0.2s;

  background: ${({variant:e})=>"primary"===e?"rgba(88, 166, 255, 0.15)":"transparent"};
  color: ${({variant:e})=>"primary"===e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  border: 1px solid ${({variant:e})=>"primary"===e?i.w4.colors.accent+"40":i.w4.colors.border};

  &:hover {
    background: ${({variant:e})=>"primary"===e?"rgba(88, 166, 255, 0.25)":"rgba(255,255,255,0.04)"};
    border-color: ${({variant:e})=>"primary"===e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,Y=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.md};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  animation: ${b} 0.3s ease 0.15s both;
`,q=r.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,V=r.default.div`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  animation: ${z} 1.2s ease-out forwards;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,W=r.default.div`
  position: absolute;
  height: 6px;
  border-radius: 3px;
  background: ${({color:e})=>e};
  box-shadow: 0 0 12px ${({color:e})=>e}80;
  pointer-events: none;
  animation: ${$} 0.35s ease forwards;
  z-index: 10;
  transform-origin: left center;
  /* Geometry calculated inline via style prop */
`,J=r.default.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 4px;
`,X=r.default.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
  animation: ${k} 1.2s ease-in-out ${({delay:e})=>e}s infinite;
`,U=["#f97583","#58a6ff","#3fb950","#d2a922","#d2a8ff","#79c0ff"];function K({lang:e,onBack:a,canOnline:o}){const[r,n]=(0,t.useState)(Array(9).fill(null)),[c,b]=(0,t.useState)(null),[y,w]=(0,t.useState)(!0),[v,$]=(0,t.useState)("medium"),[j,k]=(0,t.useState)("bot"),[z,K]=(0,t.useState)(x),[Q,Z]=(0,t.useState)(!1),[ee,ae]=(0,t.useState)(null),[oe]=(0,t.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),[te,re]=(0,t.useState)("none"),[ne,ie]=(0,t.useState)(!1),se=(0,t.useRef)(r);se.current=r;const le=(0,t.useCallback)(e=>{switch(e.type){case"guest-joined":de.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),de.current.sendEvent({type:"host-ack",name:oe,playerId:de.current.room?.playerId??"",players:de.current.room?.players??[]});break;case"host-ack":de.current.setConnected(e.name),e.players&&de.current.setPlayers([...e.players,{id:de.current.room?.playerId??"",name:oe,isHost:!1}]);break;case"game-state":{const a=e.payload;n(a.board),b(a.lastPlaced),w("host"===de.current.room?.role?a.isHostTurn:!a.isHostTurn);break}case"game-over":Z(!0);break;case"rematch-request":re("received");break;case"rematch-accepted":n(Array(9).fill(null)),b(null),w("host"===de.current.room?.role),Z(!1),re("none");break;case"player-left":ie(!0),Z(!0)}},[oe]),ce=(0,s.Ky)({gameId:"tictactoe",playerName:oe,onEvent:le}),de=(0,t.useRef)(ce);de.current=ce;const pe=(0,s.zj)({gameId:"tictactoe",enabled:"online"===j}),{winner:ue,line:me}=d(r),fe=!ue&&0===p(r).length,ge=(0,t.useCallback)(()=>{n(Array(9).fill(null)),b(null),w("online"!==j||"host"===ce.room?.role),Z(!1),re("none"),ie(!1)},[j,ce.room?.role]);(0,t.useEffect)(()=>{Q||!ue&&!fe||(Z(!0),"bot"!==j)||(ae("X"===ue?"wins":"O"===ue?"losses":"draws"),setTimeout(()=>ae(null),500),K(e=>{const a={...e};return"X"===ue?a.wins++:"O"===ue?a.losses++:a.draws++,function(e){localStorage.setItem(h,JSON.stringify(e))}(a),a}))},[ue,fe,Q,j]),(0,t.useEffect)(()=>{if("bot"!==j||y||Q||ue||fe)return;const e=setTimeout(()=>{const e=se.current,a=function(e,a){const o=p(e);if(0===o.length)return-1;if("easy"===a){if(Math.random()<.7)return o[Math.floor(Math.random()*o.length)]}else if("medium"===a&&Math.random()<.3)return o[Math.floor(Math.random()*o.length)];let t=-1/0,r=o[0];for(const a of o){e[a]="O";const o=u(e,!1);e[a]=null,o>t&&(t=o,r=a)}return r}([...e],v);if(a>=0){const o=[...e];o[a]="O",n(o),b(a),w(!0)}},500);return()=>clearTimeout(e)},[y,Q,ue,fe,v,j]);const he=e=>{$(e),ge()},xe=e=>{"online"===j&&ce.room&&ce.leaveRoom(),k(e),ie(!1),re("none"),ge()},be=()=>{"received"===te?(n(Array(9).fill(null)),b(null),w("host"===ce.room?.role),Z(!1),re("none"),ce.sendEvent({type:"rematch-accepted"})):(re("sent"),ce.sendEvent({type:"rematch-request"}))},ye=a=>m[a]?.[e]??m[a]?.en??a;let we,ve;if("online"===j)if(ne)we="lose",ve=ye("opponentLeft");else if(ue){const e="X"===ue&&"host"===ce.room?.role||"O"===ue&&"guest"===ce.room?.role;we=e?"win":"lose",ve=ye(e?"youWinOnline":"opponentWins")}else fe?(we="draw",ve=ye("draw")):(we="turn",ve=ye(y?"yourTurn":"opponentTurn"));else"2p"===j?"X"===ue?(we="win",ve=ye("player1Wins")):"O"===ue?(we="win",ve=ye("player2Wins")):fe?(we="draw",ve=ye("draw")):(we="turn",ve=ye(y?"player1Turn":"player2Turn")):"X"===ue?(we="win",ve=ye("youWin")):"O"===ue?(we="lose",ve=ye("youLose")):fe?(we="draw",ve=ye("draw")):(we="turn",ve=ye(y?"yourTurn":"thinking"));const $e=new Set(me??[]),je="bot"===j?"X"===ue:!!ue,ke="bot"===j&&!y&&!Q,ze=(0,t.useMemo)(()=>je?Array.from({length:12},(e,a)=>({left:10+80*Math.random(),delay:.5*Math.random(),color:U[a%U.length]})):[],[je]),Se=(0,t.useMemo)(()=>{if(!me)return null;const e=Math.min(120,Math.max(80,.2*window.innerWidth)),a=a=>{const o=a%3,t=Math.floor(a/3);return{x:8+o*(e+8)+e/2,y:8+t*(e+8)+e/2}},o=a(me[0]),t=a(me[2]),r=t.x-o.x,n=t.y-o.y,i=Math.sqrt(r*r+n*n),s=Math.atan2(n,r)*(180/Math.PI);return{left:`${o.x}px`,top:o.y-3+"px",width:`${i}px`,transform:`rotate(${s}deg)`}},[me]),Ce="bot"===j?"X"===ue?"#3fb950":"#f97583":"X"===ue?"#58a6ff":"#d2a8ff",Te=e=>e?"online"===j?"X"===e?f:g:"X"===e?f:"2p"===j?g:"🤖":null;return(0,l.jsxs)(S,{children:[(0,l.jsxs)(C,{children:[(0,l.jsxs)(T,{children:["❌ ⭕ ",ye("title")]}),(0,l.jsxs)(M,{children:[(0,l.jsxs)(A,{active:"bot"===j,color:i.w4.colors.accent,onClick:()=>xe("bot"),children:["🤖 ",ye("vsRobot")]}),(0,l.jsxs)(A,{active:"2p"===j,color:"#d2a8ff",onClick:()=>xe("2p"),children:["👫 ",ye("vsFriend")]}),o&&(0,l.jsxs)(A,{active:"online"===j,color:"#3fb950",onClick:()=>xe("online"),children:["🌐 ",ye("vsOnline")]})]}),"bot"===j&&(0,l.jsxs)(R,{children:[(0,l.jsx)(_,{active:"easy"===v,color:"#3fb950",onClick:()=>he("easy"),children:ye("easy")}),(0,l.jsx)(_,{active:"medium"===v,color:"#d2a922",onClick:()=>he("medium"),children:ye("medium")}),(0,l.jsx)(_,{active:"hard"===v,color:"#f97583",onClick:()=>he("hard"),children:ye("hard")})]})]}),"online"===j&&!ce.room?.connected&&(0,l.jsx)(s.XB,{lang:e,room:ce.room,error:ce.error,availableRooms:pe.rooms,onCreateRoom:()=>{const{code:e,roomName:a}=ce.createRoom();pe.publishRoom({code:e,roomName:a,hostName:oe,playerCount:1})},onJoinRoom:e=>{ce.joinRoom(e)},onLeaveRoom:()=>{pe.unpublishRoom(),ce.leaveRoom(),ie(!1)}}),("online"!==j||ce.room?.connected)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Y,{children:"online"===j?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(q,{children:["host"===ce.room?.role?f:g," = ",ye("you")," (",ce.room?.playerName,")"]}),(0,l.jsxs)(q,{children:["host"===ce.room?.role?g:f," = ",ce.room?.opponentName??"?"]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(q,{children:[f," = ",ye("2p"===j?"player1":"you")]}),(0,l.jsxs)(q,{children:["2p"===j?g:"🤖"," = ",ye("2p"===j?"player2":"robot")]})]})}),(0,l.jsxs)(B,{variant:we,children:[ve,ke&&(0,l.jsxs)(J,{children:[(0,l.jsx)(X,{delay:0}),(0,l.jsx)(X,{delay:.2}),(0,l.jsx)(X,{delay:.4})]})]}),(0,l.jsxs)(I,{children:[ze.map((e,a)=>(0,l.jsx)(V,{left:e.left,delay:e.delay,color:e.color},a)),Se&&(0,l.jsx)(W,{x1:0,y1:0,x2:0,y2:0,color:Ce,style:Se}),(0,l.jsx)(E,{children:r.map((e,a)=>(0,l.jsx)(P,{isWinning:$e.has(a),isThinking:ke&&!e,disabled:!!e||Q||"bot"===j&&!y||"online"===j&&!y,onClick:()=>(e=>{if(r[e]||Q)return;if("bot"===j&&!y)return;if("online"===j){if(!ce.room?.connected||!y)return;const a="host"===ce.room.role?"X":"O",o=[...r];o[e]=a;const t="host"!==ce.room.role;n(o),b(e),w(!1),ce.sendEvent({type:"game-state",payload:{board:o,isHostTurn:t,lastPlaced:e}});const i=d(o),s=p(o);if(i.winner||0===s.length){Z(!0);const e="X"===i.winner?"host":"O"===i.winner?"guest":"draw";ce.sendEvent({type:"game-over",winner:e})}return}const a=[...r],o=y?"X":"O";a[e]=o,n(a),b(e),w(!y)})(a),"aria-label":`Cell ${Math.floor(a/3)+1},${a%3+1}${e?`: ${e}`:""}`,children:e&&(0,l.jsx)(D,{isNew:a===c,children:Te(e)})},a))})]}),"bot"===j&&(0,l.jsxs)(L,{children:[(0,l.jsxs)(O,{color:"#3fb950",children:[(0,l.jsx)(F,{color:"#3fb950",pop:"wins"===ee,children:z.wins}),(0,l.jsx)(N,{children:ye("wins")})]}),(0,l.jsxs)(O,{color:"#d2a922",children:[(0,l.jsx)(F,{color:"#d2a922",pop:"draws"===ee,children:z.draws}),(0,l.jsx)(N,{children:ye("draws")})]}),(0,l.jsxs)(O,{color:"#f97583",children:[(0,l.jsx)(F,{color:"#f97583",pop:"losses"===ee,children:z.losses}),(0,l.jsx)(N,{children:ye("losses")})]})]}),Q&&"online"!==j&&(0,l.jsx)(H,{children:(0,l.jsx)(G,{variant:"primary",onClick:ge,children:ye("playAgain")})}),Q&&"online"===j&&!ne&&(0,l.jsx)(H,{children:"sent"===te?(0,l.jsx)(G,{variant:"ghost",children:ye("waitingRematch")}):"received"===te?(0,l.jsxs)(G,{variant:"primary",onClick:be,children:[ye("rematch")," ✓"]}):(0,l.jsx)(G,{variant:"primary",onClick:be,children:ye("rematch")})}),Q&&"online"===j&&ne&&(0,l.jsx)(H,{children:(0,l.jsx)(G,{variant:"primary",onClick:()=>{ce.leaveRoom(),ge()},children:ye("playAgain")})})]})]})}},3594(e,a,o){o.d(a,{f:()=>Ba});var t=o(7359),r=o(3233),n=o(7207),i=o(9753);const s=[{id:"vogais",title:"Vogais",subtitle:"A · E · I · O · U",icon:"🔤",color:"#a855f7",cards:[{id:"a",letter:"A",emoji:"🐝",word:"Abelha",hint:"Avião · Anel · Arco · Árvore"},{id:"e",letter:"E",emoji:"🐘",word:"Elefante",hint:"Estrela · Escada · Erva · Espada"},{id:"i",letter:"I",emoji:"🏝️",word:"Ilha",hint:"Iglu · Igreja · Íris · Inseto"},{id:"o",letter:"O",emoji:"🐑",word:"Ovelha",hint:"Ovo · Olho · Ouriço · Ouro"},{id:"u",letter:"U",emoji:"🍇",word:"Uva",hint:"Urso · Unhas · Único · Útil"}]},{id:"silabas-b",title:"Letra B",subtitle:"BA · BE · BI · BO · BU",icon:"🅱️",color:"#3b82f6",cards:[{id:"ba",letter:"BA",emoji:"⛵",word:"Barco",hint:"Bala · Bater · Baile · Banana"},{id:"be",letter:"BE",emoji:"👶",word:"Bebé",hint:"Belo · Beber · Berço · Beleza"},{id:"bi",letter:"BI",emoji:"🚲",word:"Bicicleta",hint:"Bicho · Bico · Bingo · Biscoito"},{id:"bo",letter:"BO",emoji:"⚽",word:"Bola",hint:"Boca · Bolo · Bosque · Borboleta"},{id:"bu",letter:"BU",emoji:"🫏",word:"Burro",hint:"Buzina · Bufo · Búzio · Bucha"}]},{id:"silabas-c",title:"Letra C",subtitle:"CA · CE · CI · CO · CU",icon:"🐱",color:"#f97316",cards:[{id:"ca",letter:"CA",emoji:"🏠",word:"Casa",hint:"Cama · Cão · Carro · Caracol"},{id:"ce",letter:"CE",emoji:"🦌",word:"Cervo",hint:"Cedo · Cereja · Cesta · Cebola"},{id:"ci",letter:"CI",emoji:"🦢",word:"Cisne",hint:"Cidade · Cinto · Cinema · Cinco"},{id:"co",letter:"CO",emoji:"🐰",word:"Coelho",hint:"Copo · Corda · Coroa · Comida"},{id:"cu",letter:"CU",emoji:"🩹",word:"Curativo",hint:"Cubo · Cuidado · Curva · Cultura"}]},{id:"silabas-d",title:"Letra D",subtitle:"DA · DE · DI · DO · DU",icon:"🦷",color:"#06b6d4",cards:[{id:"da",letter:"DA",emoji:"💃",word:"Dança",hint:"Data · Dado · Dama · Dama"},{id:"de",letter:"DE",emoji:"🦷",word:"Dente",hint:"Dedo · Descanso · Devagar · Dezembro"},{id:"di",letter:"DI",emoji:"💰",word:"Dinheiro",hint:"Dia · Dinossauro · Direto · Disco"},{id:"do",letter:"DO",emoji:"🤒",word:"Doente",hint:"Doce · Dormir · Dois · Domino"},{id:"du",letter:"DU",emoji:"🚿",word:"Duche",hint:"Duro · Duende · Duna · Duplo"}]},{id:"silabas-f",title:"Letra F",subtitle:"FA · FE · FI · FO · FU",icon:"🌸",color:"#ec4899",cards:[{id:"fa",letter:"FA",emoji:"🗣️",word:"Falar",hint:"Faca · Fada · Família · Farinha"},{id:"fe",letter:"FE",emoji:"😊",word:"Feliz",hint:"Feno · Ferro · Festa · Fevereiro"},{id:"fi",letter:"FI",emoji:"🧵",word:"Fio",hint:"Filho · Figo · Fila · Fim"},{id:"fo",letter:"FO",emoji:"📸",word:"Foto",hint:"Fogo · Folha · Forno · Formiga"},{id:"fu",letter:"FU",emoji:"⽕",word:"Fumo",hint:"Futebol · Furo · Futuro · Fungo"}]},{id:"silabas-g",title:"Letra G",subtitle:"GA · GE · GI · GO · GU",icon:"🐱",color:"#84cc16",cards:[{id:"ga",letter:"GA",emoji:"🐱",word:"Gato",hint:"Galinha · Ganso · Garfo · Gavião"},{id:"ge",letter:"GE",emoji:"🧊",word:"Gelo",hint:"Gente · Gelado · Gengibre · Gesto"},{id:"gi",letter:"GI",emoji:"🌻",word:"Girassol",hint:"Girafa · Ginásio · Gigante · Gira"},{id:"go",letter:"GO",emoji:"💧",word:"Gota",hint:"Gordo · Gorila · Golfe · Governo"},{id:"gu",letter:"GU",emoji:"🌂",word:"Guarda-chuva",hint:"Guitarra · Guloso · Guerra · Guia"}]},{id:"silabas-l",title:"Letra L",subtitle:"LA · LE · LI · LO · LU",icon:"🌙",color:"#8b5cf6",cards:[{id:"la",letter:"LA",emoji:"🏞️",word:"Lago",hint:"Lata · Lavar · Laranja · Lagarto"},{id:"le",letter:"LE",emoji:"🦁",word:"Leão",hint:"Leite · Ler · Lento · Lençol"},{id:"li",letter:"LI",emoji:"📚",word:"Livro",hint:"Lição · Liga · Limão · Lindo"},{id:"lo",letter:"LO",emoji:"🐺",word:"Lobo",hint:"Loja · Logo · Longe · Louça"},{id:"lu",letter:"LU",emoji:"🌙",word:"Lua",hint:"Luva · Luta · Lugar · Lume"}]},{id:"silabas-m",title:"Letra M",subtitle:"MA · ME · MI · MO · MU",icon:"🌊",color:"#10b981",cards:[{id:"ma",letter:"MA",emoji:"🍎",word:"Maçã",hint:"Mala · Mapa · Mago · Macaco"},{id:"me",letter:"ME",emoji:"🍯",word:"Mel",hint:"Mesa · Medo · Meias · Melancia"},{id:"mi",letter:"MI",emoji:"🐭",word:"Rato",hint:"Mina · Mimo · Milho · Miúdo"},{id:"mo",letter:"MO",emoji:"🏍️",word:"Mota",hint:"Mola · Monte · Mochila · Morada"},{id:"mu",letter:"MU",emoji:"🎵",word:"Música",hint:"Muro · Muitos · Mudo · Mundial"}]},{id:"silabas-n",title:"Letra N",subtitle:"NA · NE · NI · NO · NU",icon:"🌙",color:"#6366f1",cards:[{id:"na",letter:"NA",emoji:"🏊",word:"Nadar",hint:"Navio · Nariz · Natal · Natureza"},{id:"ne",letter:"NE",emoji:"❄️",word:"Neve",hint:"Neto · Negro · Negar · Necessário"},{id:"ni",letter:"NI",emoji:"🐦",word:"Ninho",hint:"Ninja · Nitido · Nível · Ninguém"},{id:"no",letter:"NO",emoji:"🌙",word:"Noite",hint:"Nota · Nome · Nobre · Noivo"},{id:"nu",letter:"NU",emoji:"☁️",word:"Nuvem",hint:"Número · Nulo · Nutrição · Nunca"}]},{id:"silabas-p",title:"Letra P",subtitle:"PA · PE · PI · PO · PU",icon:"🦆",color:"#f59e0b",cards:[{id:"pa",letter:"PA",emoji:"🦆",word:"Pato",hint:"Pão · Papa · Palha · Papagaio"},{id:"pe",letter:"PE",emoji:"🐟",word:"Peixe",hint:"Pele · Pena · Pedra · Pensar"},{id:"pi",letter:"PI",emoji:"🎀",word:"Pipa",hint:"Pico · Pingo · Pilha · Pintainho"},{id:"po",letter:"PO",emoji:"🐴",word:"Potro",hint:"Povo · Pote · Pomba · Polvo"},{id:"pu",letter:"PU",emoji:"🐾",word:"Pulga",hint:"Pulo · Pura · Pudim · Pulseira"}]},{id:"silabas-r",title:"Letra R",subtitle:"RA · RE · RI · RO · RU",icon:"🌹",color:"#ef4444",cards:[{id:"ra",letter:"RA",emoji:"🐸",word:"Rana",hint:"Rato · Ramo · Rapaz · Rainha"},{id:"re",letter:"RE",emoji:"👑",word:"Rei",hint:"Rede · Relógio · Remédio · Regra"},{id:"ri",letter:"RI",emoji:"😂",word:"Rir",hint:"Rio · Rico · Risco · Ritmo"},{id:"ro",letter:"RO",emoji:"🌹",word:"Rosa",hint:"Roda · Roupa · Robô · Rochedo"},{id:"ru",letter:"RU",emoji:"🛣️",word:"Rua",hint:"Ruído · Rural · Rumo · Rugido"}]},{id:"silabas-s",title:"Letra S",subtitle:"SA · SE · SI · SO · SU",icon:"☀️",color:"#f43f5e",cards:[{id:"sa",letter:"SA",emoji:"🐸",word:"Sapo",hint:"Saco · Sala · Salto · Sapato"},{id:"se",letter:"SE",emoji:"🌾",word:"Seco",hint:"Sede · Seta · Serra · Setembro"},{id:"si",letter:"SI",emoji:"🔔",word:"Sino",hint:"Sinal · Sítio · Sinto · Silêncio"},{id:"so",letter:"SO",emoji:"☀️",word:"Sol",hint:"Sopa · Sono · Soco · Sonho"},{id:"su",letter:"SU",emoji:"🧃",word:"Sumo",hint:"Sul · Suave · Susto · Subir"}]},{id:"silabas-t",title:"Letra T",subtitle:"TA · TE · TI · TO · TU",icon:"🐯",color:"#0ea5e9",cards:[{id:"ta",letter:"TA",emoji:"🥁",word:"Tambor",hint:"Tapa · Tarde · Tarefa · Tartaruga"},{id:"te",letter:"TE",emoji:"🧸",word:"Teddy",hint:"Tela · Tempo · Telefone · Terra"},{id:"ti",letter:"TI",emoji:"🐯",word:"Tigre",hint:"Tio · Tipo · Título · Tinha"},{id:"to",letter:"TO",emoji:"🍅",word:"Tomate",hint:"Toca · Torta · Touro · Torneira"},{id:"tu",letter:"TU",emoji:"🦈",word:"Tubarão",hint:"Tubo · Tudo · Tulipa · Turbina"}]},{id:"silabas-v",title:"Letra V",subtitle:"VA · VE · VI · VO · VU",icon:"🦋",color:"#d946ef",cards:[{id:"va",letter:"VA",emoji:"🐄",word:"Vaca",hint:"Vale · Varanda · Vassoura · Vampiro"},{id:"ve",letter:"VE",emoji:"🕯️",word:"Vela",hint:"Vento · Verde · Verdade · Veludo"},{id:"vi",letter:"VI",emoji:"🍷",word:"Vinho",hint:"Vida · Vila · Visão · Viagem"},{id:"vo",letter:"VO",emoji:"✈️",word:"Voar",hint:"Voz · Volta · Volume · Voluntário"},{id:"vu",letter:"VU",emoji:"🌋",word:"Vulcão",hint:"Vulnerável · Vulto · Vulgaria"}]},{id:"numeros",title:"Números",subtitle:"UM · DOIS · TRÊS...",icon:"🔢",color:"#f97316",cards:[{id:"um",letter:"UM",emoji:"1️⃣",word:"Um",hint:"Uma · Único · Unidade"},{id:"dois",letter:"DOIS",emoji:"2️⃣",word:"Dois",hint:"Duplo · Segundo · Par"},{id:"tres",letter:"TRÊS",emoji:"3️⃣",word:"Três",hint:"Triplo · Terceiro · Trio"},{id:"quatro",letter:"QUATRO",emoji:"4️⃣",word:"Quatro",hint:"Quádruplo · Quarto · Quadrado"},{id:"cinco",letter:"CINCO",emoji:"5️⃣",word:"Cinco",hint:"Quinteto · Quinto · Pentagon"},{id:"seis",letter:"SEIS",emoji:"6️⃣",word:"Seis",hint:"Sexto · Sexteto · Hexágono"},{id:"sete",letter:"SETE",emoji:"7️⃣",word:"Sete",hint:"Sétimo · Semana · Arco-íris"},{id:"oito",letter:"OITO",emoji:"8️⃣",word:"Oito",hint:"Oitavo · Polvo · Araña"},{id:"nove",letter:"NOVE",emoji:"9️⃣",word:"Nove",hint:"Nono · Novembro · Planeta"},{id:"dez",letter:"DEZ",emoji:"🔟",word:"Dez",hint:"Décimo · Dezembro · Dedos"}]},{id:"cores",title:"Cores",subtitle:"VERMELHO · AZUL · VERDE...",icon:"🎨",color:"#a855f7",cards:[{id:"vermelho",letter:"VERMELHO",emoji:"🔴",word:"Vermelho",hint:"Rosa · Tomate · Maçã · Coração"},{id:"azul",letter:"AZUL",emoji:"🔵",word:"Azul",hint:"Mar · Céu · Mirtilo · Baleia"},{id:"verde",letter:"VERDE",emoji:"🟢",word:"Verde",hint:"Erva · Folha · Sapo · Maçã"},{id:"amarelo",letter:"AMARELO",emoji:"🟡",word:"Amarelo",hint:"Sol · Banana · Patinho · Girassol"},{id:"laranja",letter:"LARANJA",emoji:"🟠",word:"Laranja",hint:"Fruta · Cenoura · Tigre · Outono"},{id:"roxo",letter:"ROXO",emoji:"🟣",word:"Roxo",hint:"Uva · Lavanda · Beringela · Violeta"},{id:"rosa",letter:"ROSA",emoji:"🌸",word:"Rosa",hint:"Flor · Porco · Flamingo · Bubble-gum"},{id:"branco",letter:"BRANCO",emoji:"⬜",word:"Branco",hint:"Neve · Leite · Nuvem · Algodão"},{id:"preto",letter:"PRETO",emoji:"⬛",word:"Preto",hint:"Noite · Gato · Pneu · Carvão"},{id:"castanho",letter:"CASTANHO",emoji:"🟫",word:"Castanho",hint:"Terra · Madeira · Chocolate · Urso"}]},{id:"animais",title:"Animais",subtitle:"Todos os animais",icon:"🦁",color:"#22c55e",cards:[{id:"cao",letter:"CÃO",emoji:"🐕",word:"Cão",hint:"Canino · Cachorro · Companheiro"},{id:"gato2",letter:"GATO",emoji:"🐈",word:"Gato",hint:"Felino · Miar · Bigodes"},{id:"cavalo",letter:"CAVALO",emoji:"🐴",word:"Cavalo",hint:"Patas · Crina · Galope"},{id:"elefante",letter:"ELEFANTE",emoji:"🐘",word:"Elefante",hint:"Tromba · Presa · Savana"},{id:"leao2",letter:"LEÃO",emoji:"🦁",word:"Leão",hint:"Rei · Juba · África"},{id:"girafa",letter:"GIRAFA",emoji:"🦒",word:"Girafa",hint:"Pescoço · Alto · Savana"},{id:"pinguim",letter:"PINGUIM",emoji:"🐧",word:"Pinguim",hint:"Gelo · Nadar · Antártida"},{id:"borboleta",letter:"BORBOLETA",emoji:"🦋",word:"Borboleta",hint:"Asas · Colorida · Flor"},{id:"coelho2",letter:"COELHO",emoji:"🐰",word:"Coelho",hint:"Orelhas · Saltitar · Cenoura"},{id:"pato2",letter:"PATO",emoji:"🦆",word:"Pato",hint:"Nadar · Grasnar · Lago"}]},{id:"corpo",title:"O Meu Corpo",subtitle:"Cabeça · Mãos · Pés...",icon:"🧒",color:"#f59e0b",cards:[{id:"cabeca",letter:"CABEÇA",emoji:"🧠",word:"Cabeça",hint:"Cérebro · Pensar · Crânio"},{id:"olhos",letter:"OLHOS",emoji:"👀",word:"Olhos",hint:"Ver · Piscar · Cores"},{id:"nariz",letter:"NARIZ",emoji:"👃",word:"Nariz",hint:"Cheirar · Respirar · Espirrar"},{id:"boca",letter:"BOCA",emoji:"👄",word:"Boca",hint:"Falar · Comer · Sorrir"},{id:"orelhas",letter:"ORELHAS",emoji:"👂",word:"Orelhas",hint:"Ouvir · Sons · Música"},{id:"maos",letter:"MÃOS",emoji:"🙌",word:"Mãos",hint:"Tocar · Escrever · Bater"},{id:"pes",letter:"PÉS",emoji:"🦶",word:"Pés",hint:"Andar · Correr · Saltar"},{id:"coracão",letter:"CORAÇÃO",emoji:"❤️",word:"Coração",hint:"Amor · Batimento · Vida"}]},{id:"familia",title:"Família",subtitle:"Mãe · Pai · Irmão...",icon:"👨‍👩‍👧‍👦",color:"#e11d48",cards:[{id:"mae",letter:"MÃE",emoji:"👩",word:"Mãe",hint:"Amor · Cuidar · Abraço"},{id:"pai",letter:"PAI",emoji:"👨",word:"Pai",hint:"Forte · Proteção · Brincar"},{id:"irmao",letter:"IRMÃO",emoji:"👦",word:"Irmão",hint:"Brincar · Partilhar · Família"},{id:"irma",letter:"IRMÃ",emoji:"👧",word:"Irmã",hint:"Amigas · Brincar · Família"},{id:"avo",letter:"AVÔ",emoji:"👴",word:"Avô",hint:"Sábio · Velho · Histórias"},{id:"avo2",letter:"AVÓ",emoji:"👵",word:"Avó",hint:"Mimos · Cozinhar · Amor"},{id:"bebe",letter:"BEBÉ",emoji:"👶",word:"Bebé",hint:"Pequeno · Dormir · Chorar"},{id:"tio",letter:"TIO",emoji:"🧔",word:"Tio",hint:"Divertido · Familiar · Natal"}]},{id:"palavras",title:"Palavras",subtitle:"Ler palavras simples",icon:"💬",color:"#14b8a6",cards:[{id:"bola",letter:"BOLA",emoji:"⚽",word:"Bola"},{id:"gato",letter:"GATO",emoji:"🐱",word:"Gato"},{id:"casa",letter:"CASA",emoji:"🏠",word:"Casa"},{id:"pato",letter:"PATO",emoji:"🦆",word:"Pato"},{id:"leao",letter:"LEÃO",emoji:"🦁",word:"Leão"},{id:"mesa",letter:"MESA",emoji:"🪑",word:"Mesa"},{id:"sapo",letter:"SAPO",emoji:"🐸",word:"Sapo"},{id:"porta",letter:"PORTA",emoji:"🚪",word:"Porta"},{id:"livro",letter:"LIVRO",emoji:"📚",word:"Livro"},{id:"cama",letter:"CAMA",emoji:"🛏️",word:"Cama"},{id:"carro",letter:"CARRO",emoji:"🚗",word:"Carro"},{id:"flor",letter:"FLOR",emoji:"🌸",word:"Flor"},{id:"peixe",letter:"PEIXE",emoji:"🐟",word:"Peixe"},{id:"arco",letter:"ARCO",emoji:"🌈",word:"Arco-íris"},{id:"borboleta2",letter:"BORBOLETA",emoji:"🦋",word:"Borboleta"}]},{id:"frases",title:"Frases",subtitle:"Ler frases simples",icon:"📖",color:"#6366f1",cards:[{id:"f1",letter:"O gato é bonito.",emoji:"🐱",word:"O gato é bonito."},{id:"f2",letter:"A bola é redonda.",emoji:"⚽",word:"A bola é redonda."},{id:"f3",letter:"O sapo é verde.",emoji:"🐸",word:"O sapo é verde."},{id:"f4",letter:"A lua brilha à noite.",emoji:"🌙",word:"A lua brilha à noite."},{id:"f5",letter:"O pato nada no lago.",emoji:"🦆",word:"O pato nada no lago."},{id:"f6",letter:"O leão é o rei da selva.",emoji:"🦁",word:"O leão é o rei da selva."},{id:"f7",letter:"A borboleta é colorida.",emoji:"🦋",word:"A borboleta é colorida."},{id:"f8",letter:"O coelho come cenouras.",emoji:"🐰",word:"O coelho come cenouras."},{id:"f9",letter:"O sol brilha durante o dia.",emoji:"☀️",word:"O sol brilha durante o dia."},{id:"f10",letter:"Eu gosto de ler livros.",emoji:"📚",word:"Eu gosto de ler livros."}]}],l=[{label:"🔤 Primeiros Passos",ids:["vogais"]},{label:"🔡 Sílabas",ids:["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"]},{label:"🌍 O Mundo à Volta",ids:["animais","cores","numeros","corpo","familia"]},{label:"📖 Ler e Escrever",ids:["palavras","frases"]}],c={"primeira-estrela":{emoji:"⭐",label:"Primeira Estrela!",desc:"Ganhaste a tua primeira estrela"},"primeira-licao":{emoji:"🎓",label:"Primeira Lição!",desc:"Completaste a tua primeira lição"},"tres-estrelas":{emoji:"🌟",label:"Super Estrela!",desc:"Tiveste 3 estrelas numa lição"},coleccionador:{emoji:"💎",label:"Coleccionador!",desc:"10 favoritos guardados"},"vogais-mestre":{emoji:"🔤",label:"Mestre das Vogais!",desc:"Completaste as Vogais com 3 estrelas"},leitor:{emoji:"📖",label:"Leitor!",desc:"Completaste todas as sílabas"},explorador:{emoji:"🌍",label:"Explorador!",desc:"Completaste O Mundo à Volta"},"numeros-mestre":{emoji:"🔢",label:"Mestre dos Números!",desc:"Completaste os Números com 3 estrelas"}};var d=o(5723);const p=n.keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=n.keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`,m=n.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,f=n.keyframes`
  0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg);  opacity: 1; }
  100% { transform: scale(1)   rotate(0deg);  opacity: 1; }
`,g=r.default.div`
  min-height: 100%;
  background: #0a0e1a;
  padding-bottom: 48px;
  overflow-y: auto;
  font-family: 'Nunito', 'Segoe UI', system-ui, -apple-system, sans-serif;
`,h=r.default.div`
  background: linear-gradient(160deg, #1a0040 0%, #0d1f5e 45%, #062040 100%);
  padding: 28px 20px 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 90% at 15% 25%, #9333ea55 0%, transparent 65%),
      radial-gradient(ellipse 50% 70% at 85% 75%, #06b6d460 0%, transparent 65%),
      radial-gradient(ellipse 40% 50% at 50% 50%, #ec489940 0%, transparent 70%);
    pointer-events: none;
  }

  /* floating bubbles decoration */
  &::after {
    content: '⭐ 🌈 ✨ 🌟';
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 14px;
    opacity: 0.3;
    pointer-events: none;
    letter-spacing: 4px;
  }
`,x=r.default.div`position: relative; z-index: 1;`,b=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,y=r.default.h1`
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, #fde68a 0%, #fb7185 40%, #a78bfa 70%, #60a5fa 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${m} 2.5s linear infinite;
  text-shadow: none;
`,w=r.default.div`
  font-size: 16px;
  font-weight: 700;
  color: #c4b5fd;
  margin-top: 4px;
  letter-spacing: 0.01em;
`,v=r.default.div`
  font-size: 72px;
  line-height: 1;
  animation: ${u} 2.5s ease-in-out infinite;
  user-select: none;
  filter: drop-shadow(0 0 16px #a78bfa80);
`,$=r.default.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,j=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({color:e})=>e}30;
  border: 2px solid ${({color:e})=>e}70;
  border-radius: 32px;
  padding: 8px 16px;
`,k=r.default.span`font-size: 20px;`,z=r.default.span`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,S=r.default.span`
  font-size: 13px;
  font-weight: 700;
  color: #c4b5fd;
  margin-left: 2px;
`,C=r.default.div`
  margin-top: 14px;
  background: #ffffff20;
  border-radius: 16px;
  height: 14px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px #00000030;
`,T=r.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, #f59e0b, #ec4899, #a78bfa, #60a5fa);
  background-size: 200% auto;
  border-radius: 16px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${m} 2s linear infinite;
`,M=r.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #a78bfa;
`,A=r.default.div`padding: 20px 16px 0;`,R=r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 20px;
  background: linear-gradient(135deg, #be185d35, #9333ea35);
  border: 2px solid #ec4899;
  border-radius: 24px;
  cursor: pointer;
  gap: 14px;
  margin-bottom: 20px;
  transition: transform 0.15s, box-shadow 0.15s;
  animation: ${p} 0.3s ease both;
  box-shadow: 0 4px 16px #be185d25;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 30px #be185d45;
  }
  &:active { transform: scale(0.97); }
`,_=r.default.span`font-size: 36px;`,B=r.default.div`
  flex: 1;
  text-align: left;
`,I=r.default.div`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,E=r.default.div`font-size: 14px; font-weight: 600; color: #f9a8d4;`,P=r.default.div`color: #fb7185; font-size: 24px;`,D=(r.default.div`
  background: linear-gradient(135deg, #0f2a2a, #101827);
  border: 1.5px solid #34d39955;
  border-radius: 18px;
  padding: 14px 16px;
  margin-bottom: 20px;
  animation: ${p} 0.32s ease both;
`,r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`,r.default.div`
  font-size: 14px;
  font-weight: 800;
  color: #ecfeff;
`,r.default.div`
  font-size: 12px;
  color: #94a3b8;
  margin-top: 2px;
`,r.default.button`
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #34d399, #0ea5e9);
  color: #06202a;
  font-size: 12px;
  font-weight: 800;
  padding: 10px 12px;
  cursor: pointer;
`,r.default.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`,r.default.div`
  background: #ffffff08;
  border: 1px solid #ffffff12;
  border-radius: 12px;
  padding: 10px 11px;
`,r.default.div`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 4px;
`,r.default.div`
  font-size: 13px;
  font-weight: 700;
  color: #e2e8f0;
  word-break: break-word;
`,r.default.div`
  margin-bottom: 24px;
  animation: ${p} 0.35s ease both;
  animation-delay: ${({index:e})=>60*e}ms;
`),L=r.default.div`
  font-size: 15px;
  font-weight: 900;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
  padding-left: 4px;
`,O=r.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`,F=r.default.button`
  display: flex;
  flex-direction: column;
  padding: 18px 16px 16px;
  background: ${({color:e,done:a})=>a?`linear-gradient(145deg, ${e}40, ${e}20)`:"linear-gradient(145deg, #1e2540, #131726)"};
  border: 2.5px solid ${({color:e,done:a})=>a?e+"90":e+"40"};
  border-radius: 28px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
  position: relative;
  overflow: hidden;
  box-shadow: ${({color:e})=>`0 4px 16px ${e}20`};

  &::before {
    content: '';
    position: absolute;
    top: -20px; right: -20px;
    width: 80px; height: 80px;
    border-radius: 50%;
    background: ${({color:e})=>e}25;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30px; left: -10px;
    width: 70px; height: 70px;
    border-radius: 50%;
    background: ${({color:e})=>e}15;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px) scale(1.03);
    border-color: ${({color:e})=>e};
    box-shadow: 0 14px 32px ${({color:e})=>e}40;
  }

  &:active { transform: scale(0.96); }
`,N=r.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`,H=r.default.div`font-size: 48px; line-height: 1; filter: drop-shadow(0 2px 6px #00000040);`,G=r.default.div`
  font-size: 11px;
  font-weight: 800;
  color: ${({color:e})=>e};
  background: ${({color:e})=>e}25;
  border: 1.5px solid ${({color:e})=>e}60;
  border-radius: 12px;
  padding: 3px 9px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Y=r.default.div`
  font-size: 17px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 3px;
  letter-spacing: -0.01em;
`,q=r.default.div`
  font-size: 12px;
  font-weight: 600;
  color: #7c8db5;
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V=r.default.div`
  display: flex;
  gap: 4px;
  align-items: center;
`,W=r.default.span`
  font-size: 20px;
  opacity: ${({lit:e})=>e?1:.18};
  filter: ${({lit:e,color:a})=>e?`drop-shadow(0 0 6px ${a})`:"none"};
  animation: ${({lit:e})=>e?f:"none"} 0.5s ease both;
  animation-delay: ${({delay:e})=>e}ms;
`,J=r.default.div`
  margin-left: auto;
  font-size: 12px;
  font-weight: 700;
  color: #4b5980;
`,X=r.default.div`
  margin-top: 4px;
  animation: ${p} 0.4s ease both;
`,U=r.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,K=r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #1e2540, #131726);
  border: 2px solid #a78bfa50;
  border-radius: 20px;
  padding: 10px 14px;
  box-shadow: 0 4px 12px #a78bfa15;
`,Q=r.default.span`font-size: 26px;`,Z=r.default.span`
  font-size: 14px;
  font-weight: 800;
  color: #e2d9ff;
`;function ee({progress:e,speechDebug:a,onSelectLesson:o,onOpenFavorites:t,onSpeechTest:r}){const n=s.length,p=Object.values(e.lessons).filter(e=>e.completed).length,u=Math.round(p/n*100);return(0,d.jsxs)(g,{children:[(0,d.jsx)(h,{children:(0,d.jsxs)(x,{children:[(0,d.jsxs)(b,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(y,{children:"LêBem"}),(0,d.jsx)(w,{children:"Vamos aprender a ler! 🚀✨"})]}),(0,d.jsx)(v,{children:"🦉"})]}),(0,d.jsxs)($,{children:[(0,d.jsxs)(j,{color:"#f59e0b",children:[(0,d.jsx)(k,{children:"⭐"}),(0,d.jsx)(z,{children:e.totalStars}),(0,d.jsx)(S,{children:"estrelas"})]}),(0,d.jsxs)(j,{color:"#7c3aed",children:[(0,d.jsx)(k,{children:"🏆"}),(0,d.jsxs)(z,{children:["Nível ",e.level]})]}),(0,d.jsxs)(j,{color:"#10b981",children:[(0,d.jsx)(k,{children:"🔥"}),(0,d.jsx)(z,{children:e.streak}),(0,d.jsx)(S,{children:"dias"})]})]}),(0,d.jsx)(C,{children:(0,d.jsx)(T,{pct:u})}),(0,d.jsxs)(M,{children:[(0,d.jsxs)("span",{children:[p," de ",n," lições"]}),(0,d.jsxs)("span",{children:[u,"% completo"]})]})]})}),(0,d.jsxs)(A,{children:[!1,(0,d.jsxs)(R,{onClick:t,children:[(0,d.jsx)(_,{children:"❤️"}),(0,d.jsxs)(B,{children:[(0,d.jsx)(I,{children:"Os meus Favoritos"}),(0,d.jsxs)(E,{children:[e.favorites.length," cartões guardados"]})]}),(0,d.jsx)(P,{children:(0,d.jsx)(i.A,{size:20})})]}),l.map((a,t)=>{const r=a.ids.map(e=>s.find(a=>a.id===e)).filter(Boolean);return(0,d.jsxs)(D,{index:t,children:[(0,d.jsx)(L,{children:a.label}),(0,d.jsx)(O,{children:r.map(a=>{const t=e.lessons[a.id],r=t?.stars??0,n=t?.completed??!1;return(0,d.jsxs)(F,{color:a.color,done:n,onClick:()=>o(a.id),children:[(0,d.jsxs)(N,{children:[(0,d.jsx)(H,{children:a.icon}),n&&(0,d.jsx)(G,{color:a.color,children:"✓ Feito"})]}),(0,d.jsx)(Y,{children:a.title}),(0,d.jsx)(q,{children:a.subtitle}),(0,d.jsxs)(V,{children:[[1,2,3].map(e=>(0,d.jsx)(W,{lit:r>=e,color:a.color,delay:80*e,children:"⭐"},e)),(0,d.jsxs)(J,{children:[a.cards.length," cartões"]})]})]},a.id)})})]},a.label)}),e.badges.length>0&&(0,d.jsxs)(X,{children:[(0,d.jsx)(L,{children:"🏅 Conquistas"}),(0,d.jsx)(U,{children:e.badges.map(e=>{const a=c[e];return a?(0,d.jsxs)(K,{title:a.desc,children:[(0,d.jsx)(Q,{children:a.emoji}),(0,d.jsx)(Z,{children:a.label})]},e):null})})]})]})]})}var ae=o(7180),oe=o(1604),te=o(2709),re=o(2887),ne=o(947),ie=o(6680),se=o(9178);let le=null,ce=null,de=[],pe=!1,ue=null,me="idle",fe=null;const ge=new Set,he=["Joana","Luciana","Eddy","Flo","Grandma","Grandpa","Reed","Rocko","Sandy","Shelley"];function xe(){return/Chrome/i.test(window.navigator.userAgent)&&!/Edg|OPR|CriOS/i.test(window.navigator.userAgent)}function be(){const e=$e();for(const a of ge)a(e)}function ye(){return 0===de.length&&(de=window.speechSynthesis.getVoices()),de}function we(){if(de=window.speechSynthesis.getVoices(),fe&&de.length>0){const e=fe;fe=null,window.setTimeout(()=>je(e),0)}return be(),de}function ve(){const e=ye();if(xe())return e.find(e=>e.default&&e.lang.toLowerCase().startsWith("pt"))??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??null;for(const a of he){const o=e.find(e=>e.name.toLowerCase()===a.toLowerCase());if(o)return o}return e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??e.find(e=>e.default)??null}function $e(){if(!("speechSynthesis"in window))return{supported:!1,voicesCount:0,preferredVoiceName:null,preferredVoiceLang:null,availableVoiceNames:[],speaking:!1,pending:!1,paused:!1,lastEvent:me,lastError:ue};const e=window.speechSynthesis,a=ve(),o=ye();return{supported:!0,voicesCount:o.length,preferredVoiceName:a?.name??null,preferredVoiceLang:a?.lang??null,availableVoiceNames:o.filter(e=>e.lang.toLowerCase().startsWith("pt")).slice(0,6).map(e=>`${e.name} (${e.lang})`),speaking:e.speaking,pending:e.pending,paused:e.paused,lastEvent:me,lastError:ue}}function je(e){const a=window.speechSynthesis,o=e.trim(),t=ye();if(!o)return;if(0===t.length)return fe=o,me="waiting-for-voices",be(),void window.setTimeout(()=>{fe===o&&(fe=null,je(o))},400);null!==ce&&(window.clearTimeout(ce),ce=null),ue=null,me="queued",le=new SpeechSynthesisUtterance(o),le.lang=xe()?"pt-BR":"pt-PT",le.rate=.8,le.pitch=1.1;const r=ve();r&&!xe()?(le.voice=r,le.lang=r.lang):r&&(le.lang=r.lang),le.onstart=()=>{me="start",be()},le.onend=()=>{le=null,me="end",be()},le.onerror=e=>{le=null,me="error",ue=e.error,be()},a.resume(),a.speak(le),be()}function ke(e){if(!("speechSynthesis"in window))return;const a=window.speechSynthesis,o=e.trim();if(o){if(null!==ce&&(window.clearTimeout(ce),ce=null),a.speaking||a.pending)return me="cancel",a.cancel(),ce=window.setTimeout(()=>je(o),150),void be();je(o)}}function ze(){ke("Ola, teste de voz do LeBem. Esta e a voz do leitor.")}n.keyframes`from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); }`;const Se=n.keyframes`0%,100%{ transform: translateX(0); } 25%{ transform: translateX(-10px); } 75%{ transform: translateX(10px); }`,Ce=n.keyframes`0%{ transform: scale(1); } 50%{ transform: scale(1.2); } 100%{ transform: scale(1); }`,Te=n.keyframes`from{ transform: translateY(0) scale(1); opacity: 1; } to{ transform: translateY(-120px) scale(0.3) rotate(360deg); opacity: 0; }`,Me=n.keyframes`0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-12px); }`,Ae=r.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${se.w4.colors.mainBg};
  font-family: ${se.w4.typography.fontFamily};
  overflow: hidden;
`,Re=r.default.div`
  display: flex;
  align-items: center;
  padding: 16px 20px 0;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  flex-shrink: 0;
`,_e=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${se.w4.colors.surface};
  border: 1px solid ${se.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${se.w4.colors.mainText};
  flex-shrink: 0;
  transition: background 0.15s;
  &:hover { background: ${se.w4.colors.sidebarHover}; }
`,Be=r.default.div`
  font-size: 17px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
  flex: 1;
`,Ie=r.default.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`,Ee=r.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({active:e,done:a,color:o})=>e?o:a?o+"80":se.w4.colors.border};
  transition: background 0.2s, transform 0.2s;
  transform: ${({active:e})=>e?"scale(1.4)":"scale(1)"};
`,Pe=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  gap: 20px;
`,De=r.default.div`
  font-size: 110px;
  line-height: 1;
  cursor: pointer;
  animation: ${Me} 2.5s ease-in-out infinite;
  filter: drop-shadow(0 8px 24px ${({color:e})=>e}50);
  user-select: none;
  &:hover { animation: ${Ce} 0.3s ease; }
`,Le=r.default.div`
  font-size: 72px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,Oe=r.default.div`
  font-size: 26px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
`,Fe=r.default.div`
  font-size: 14px;
  color: ${se.w4.colors.mainTextMuted};
  text-align: center;
`,Ne=r.default.div`
  display: flex;
  gap: 12px;
`,He=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: ${({color:e,active:a})=>a?e+"30":se.w4.colors.surface};
  border: 2px solid ${({color:e,active:a})=>a?e??"#fff":se.w4.colors.border};
  border-radius: 16px;
  cursor: pointer;
  color: ${({color:e,active:a})=>a?e??"#fff":se.w4.colors.mainText};
  transition: all 0.15s;
  &:hover { transform: scale(1.1); }
  &:active { transform: scale(0.95); }
`,Ge=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 24px;
  flex-shrink: 0;
`,Ye=r.default.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: ${({color:e,disabled:a})=>a?se.w4.colors.surface:e+"20"};
  border: 2px solid ${({color:e,disabled:a})=>a?se.w4.colors.border:e+"60"};
  border-radius: 16px;
  color: ${({color:e,disabled:a})=>a?se.w4.colors.mainTextMuted:e};
  font-family: ${se.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 600;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.15s;
  opacity: ${({disabled:e})=>e?.4:1};
  &:hover:not(:disabled) { transform: translateX(${e=>e.disabled?"0":"3px"}); }
`,qe=r.default.button`
  flex: 1;
  padding: 16px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 16px;
  color: #fff;
  font-family: ${se.w4.typography.fontFamily};
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  &:hover { opacity: 0.9; transform: translateY(-2px); }
  &:active { transform: scale(0.97); }
`,Ve=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
  gap: 16px;
  overflow: hidden;
`,We=r.default.div`
  display: flex;
  gap: 6px;
  width: 100%;
`,Je=r.default.div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: ${({state:e,color:a})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":"current"===e?a:se.w4.colors.border};
  transition: background 0.3s;
`,Xe=r.default.div`
  font-size: 18px;
  font-weight: 600;
  color: ${se.w4.colors.mainTextMuted};
  text-align: center;
`,Ue=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${({isShaking:e})=>e?Se:"none"} 0.4s ease;
`,Ke=r.default.div`font-size: 80px; line-height: 1;`,Qe=r.default.div`
  font-size: 20px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
`,Ze=r.default.div`
  font-size: 80px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,ea=r.default.div`
  display: grid;
  grid-template-columns: ${({count:e})=>e<=2?"1fr 1fr":"repeat(2, 1fr)"};
  gap: 10px;
  width: 100%;
`,aa=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 18px 12px;
  background: ${({state:e})=>"correct"===e?"#10b98120":"wrong"===e?"#ef444420":se.w4.colors.surface};
  border: 3px solid ${({state:e})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":se.w4.colors.border};
  border-radius: 18px;
  cursor: pointer;
  font-family: ${se.w4.typography.fontFamily};
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
  animation: ${({isShaking:e})=>e?Se:"none"} 0.4s ease;

  &:hover:not(:disabled) {
    transform: scale(1.04);
    border-color: ${se.w4.colors.accent};
  }
  &:active:not(:disabled) { transform: scale(0.97); }
  &:disabled { cursor: not-allowed; }
`,oa=r.default.div`font-size: 42px; line-height: 1;`,ta=r.default.div`
  font-size: 30px;
  font-weight: 900;
  color: ${({color:e})=>e};
`,ra=r.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
  min-height: 28px;
`,na=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 20px;
  position: relative;
  overflow: hidden;
`,ia=r.default.div`
  position: absolute;
  font-size: 28px;
  top: 60%;
  left: ${({x:e})=>e}%;
  animation: ${Te} 1.4s ease ${({delay:e})=>e}s forwards;
  pointer-events: none;
`,sa=r.default.div`
  font-size: 80px;
  animation: ${Me} 1s ease-in-out infinite;
`,la=r.default.div`
  font-size: 32px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-align: center;
`,ca=r.default.div`
  font-size: 18px;
  color: ${se.w4.colors.mainTextMuted};
`,da=r.default.div`
  display: flex;
  gap: 8px;
  font-size: 44px;
`,pa=r.default.button`
  padding: 16px 40px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 20px;
  color: #fff;
  font-family: ${se.w4.typography.fontFamily};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  &:hover { opacity: 0.9; transform: translateY(-2px); }
`;function ua({lessonId:e,progress:a,onBack:o,onComplete:r,onToggleFavorite:n}){const i=(l=e,s.find(e=>e.id===l));var l;const[c,p]=(0,t.useState)("learn"),[u,m]=(0,t.useState)(0),[f,g]=(0,t.useState)([]),[h,x]=(0,t.useState)(0),[b,y]=(0,t.useState)([]),[w,v]=(0,t.useState)(null),[$,j]=(0,t.useState)(0),[k,z]=(0,t.useState)(!1),[S,C]=(0,t.useState)(!1),[T,M]=(0,t.useState)(!1),A=(0,t.useCallback)(e=>{ke(e),M(!0),setTimeout(()=>M(!1),1200)},[]),R=(0,t.useCallback)(()=>{const e=function(e){const a=[...e.cards].sort(()=>Math.random()-.5).slice(0,5),o="palavras"===e.id||"frases"===e.id;return a.map(a=>{const t=e.cards.filter(e=>e.id!==a.id).sort(()=>Math.random()-.5).slice(0,3);if(o){const e=[{emoji:a.emoji},...t.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"word-to-emoji",cardId:a.id,promptWord:a.letter,label:"Qual é a imagem?",options:e,correctIndex:e.findIndex(e=>e.emoji===a.emoji)}}if(Math.random()>.5){const o=[{letter:a.letter},...t.map(e=>({letter:e.letter}))].sort(()=>Math.random()-.5);return{type:"emoji-to-letter",cardId:a.id,promptEmoji:a.emoji,promptWord:a.word,label:"vogais"===e.id?"Começa com que letra?":"Começa com que sílaba?",options:o,correctIndex:o.findIndex(e=>e.letter===a.letter)}}const r=[{emoji:a.emoji},...t.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"letter-to-emoji",cardId:a.id,promptLetter:a.letter,label:"Qual é a imagem?",options:r,correctIndex:r.findIndex(e=>e.emoji===a.emoji)}})}(i);g(e),x(0),y([]),v(null),j(0),p("quiz")},[i]),_=(0,t.useCallback)(e=>{if(null!==w||!f[h])return;const a=e===f[h].correctIndex;v(e),a?(j(e=>e+1),y(e=>[...e,"correct"]),setTimeout(()=>ke(f[h]?.promptWord??f[h]?.promptLetter??""),200)):(z(!0),y(e=>[...e,"wrong"]),setTimeout(()=>z(!1),500)),setTimeout(()=>{h+1>=f.length?(p("result"),C(!0)):(x(e=>e+1),v(null))},900)},[w,f,h]),B=(0,t.useCallback)(()=>{r(e,$,f.length)},[e,$,f.length,r]);if(!i)return null;const I=i.cards[u],E=`${e}:${I?.id}`,P=a.favorites.includes(E),D=$>=f.length?3:$>=f.length-1?2:$>=Math.ceil(f.length/2)?1:0;if("learn"===c)return(0,d.jsxs)(Ae,{children:[(0,d.jsxs)(Re,{children:[(0,d.jsx)(_e,{onClick:o,children:(0,d.jsx)(ae.A,{size:18})}),(0,d.jsx)(Be,{children:i.title}),(0,d.jsx)(Ie,{children:i.cards.map((e,a)=>(0,d.jsx)(Ee,{active:a===u,done:a<u,color:i.color},a))})]}),(0,d.jsxs)(Pe,{children:[(0,d.jsx)(De,{color:i.color,onClick:()=>A(I.word),children:I.emoji}),(0,d.jsx)(Le,{color:i.color,children:I.letter}),(0,d.jsx)(Oe,{children:I.word}),I.hint&&(0,d.jsx)(Fe,{children:I.hint}),(0,d.jsxs)(Ne,{children:[(0,d.jsx)(He,{type:"button",color:"#f59e0b",active:T,title:"Ouvir",onClick:()=>A(I.word),children:(0,d.jsx)(oe.A,{size:22,color:"#f59e0b"})}),(0,d.jsx)(He,{type:"button",color:"#ef4444",active:P,title:P?"Remover dos favoritos":"Adicionar aos favoritos",onClick:()=>n(E),children:(0,d.jsx)(te.A,{size:22,fill:P?"#ef4444":"none",color:"#ef4444"})})]})]}),(0,d.jsxs)(Ge,{children:[(0,d.jsxs)(Ye,{color:i.color,disabled:0===u,onClick:()=>{u>0&&m(e=>e-1)},children:[(0,d.jsx)(ae.A,{size:18})," Anterior"]}),u<i.cards.length-1?(0,d.jsxs)(Ye,{color:i.color,onClick:()=>{m(e=>e+1),A(i.cards[u+1].word)},children:["Próxima ",(0,d.jsx)(re.A,{size:18})]}):(0,d.jsx)(qe,{color:i.color,onClick:R,children:"Fazer Quiz 🎯"})]})]});if("quiz"===c){const e=f[h];return e?(0,d.jsxs)(Ae,{children:[(0,d.jsxs)(Re,{children:[(0,d.jsx)(_e,{onClick:o,children:(0,d.jsx)(ae.A,{size:18})}),(0,d.jsxs)(Be,{children:["Quiz — ",i.title]})]}),(0,d.jsxs)(Ve,{children:[(0,d.jsx)(We,{children:f.map((e,a)=>(0,d.jsx)(Je,{color:i.color,state:a<b.length?b[a]:a===h?"current":"pending"},a))}),(0,d.jsx)(Xe,{children:e.label}),(0,d.jsxs)(Ue,{isShaking:k,color:i.color,children:[e.promptEmoji&&(0,d.jsx)(Ke,{children:e.promptEmoji}),e.promptWord&&"word-to-emoji"!==e.type&&(0,d.jsx)(Qe,{children:e.promptWord}),"word-to-emoji"===e.type&&(0,d.jsx)(Ze,{color:i.color,children:e.promptWord}),e.promptLetter&&(0,d.jsx)(Ze,{color:i.color,children:e.promptLetter})]}),(0,d.jsx)(ea,{count:e.options.length,children:e.options.map((a,o)=>{const t=null===w?"idle":o===e.correctIndex?"correct":o===w&&w!==e.correctIndex?"wrong":"idle";return(0,d.jsxs)(aa,{state:t,isShaking:"wrong"===t&&k,disabled:null!==w,onClick:()=>_(o),children:[a.emoji&&(0,d.jsx)(oa,{children:a.emoji}),a.letter&&(0,d.jsx)(ta,{color:i.color,children:a.letter})]},o)})}),(0,d.jsxs)(ra,{children:[null!==w&&w===e.correctIndex&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ne.A,{size:22,color:"#10b981"})," ",(0,d.jsx)("span",{style:{color:"#10b981"},children:"Muito bem! 🎉"})]}),null!==w&&w!==e.correctIndex&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ie.A,{size:22,color:"#ef4444"})," ",(0,d.jsxs)("span",{style:{color:"#ef4444"},children:["Era ",e.options[e.correctIndex]?.letter??e.options[e.correctIndex]?.emoji,"!"]})]})]})]})]}):null}const L=D>0?["⭐","✨","🌟","💫","⭐","✨"].map((e,a)=>({emoji:e,x:10+15*a,delay:.15*a})):[];return(0,d.jsxs)(Ae,{children:[(0,d.jsxs)(Re,{children:[(0,d.jsx)(_e,{onClick:o,children:(0,d.jsx)(ae.A,{size:18})}),(0,d.jsx)(Be,{children:"Resultado"})]}),(0,d.jsxs)(na,{children:[S&&L.map((e,a)=>(0,d.jsx)(ia,{x:e.x,delay:e.delay,children:e.emoji},a)),(0,d.jsx)(sa,{children:3===D?"🏆":2===D?"🎉":1===D?"👍":"😅"}),(0,d.jsx)(la,{color:i.color,children:3===D?"Perfeito!":2===D?"Muito bem!":1===D?"Bom esforço!":"Continua a tentar!"}),(0,d.jsxs)(ca,{children:[$," de ",f.length," acertos"]}),(0,d.jsx)(da,{children:[1,2,3].map(e=>(0,d.jsx)("span",{style:{opacity:D>=e?1:.2},children:"⭐"},e))}),(0,d.jsx)(pa,{color:i.color,onClick:B,children:"Continuar →"})]})]})}const ma=n.keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,fa=r.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${se.w4.colors.mainBg};
  font-family: ${se.w4.typography.fontFamily};
  overflow: hidden;
`,ga=r.default.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  border-bottom: 1px solid ${se.w4.colors.border};
  flex-shrink: 0;
`,ha=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${se.w4.colors.surface};
  border: 1px solid ${se.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${se.w4.colors.mainText};
  transition: background 0.15s;
  &:hover { background: ${se.w4.colors.sidebarHover}; }
`,xa=r.default.div`
  font-size: 18px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
`,ba=r.default.div`
  margin-left: auto;
  font-size: 13px;
  color: ${se.w4.colors.mainTextMuted};
`,ya=r.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 40px;
`,wa=r.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,va=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px 14px;
  background: ${({color:e})=>e}12;
  border: 2px solid ${({color:e})=>e}30;
  border-radius: 20px;
  position: relative;
  animation: ${ma} 0.3s ease both;
  animation-delay: ${({index:e})=>40*e}ms;
`,$a=r.default.div`
  font-size: 52px;
  line-height: 1;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover { transform: scale(1.1); transition: transform 0.15s; }
`,ja=r.default.div`
  font-size: 22px;
  font-weight: 900;
  color: ${({color:e})=>e};
  letter-spacing: 0.02em;
`,ka=r.default.div`
  font-size: 14px;
  color: ${se.w4.colors.mainTextMuted};
  margin-top: 2px;
`,za=r.default.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`,Sa=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${se.w4.colors.surface};
  border: 1px solid ${se.w4.colors.border};
  border-radius: 10px;
  cursor: pointer;
  color: ${se.w4.colors.mainTextMuted};
  transition: all 0.15s;
  &:hover { color: ${se.w4.colors.mainText}; background: ${se.w4.colors.sidebarHover}; }
`,Ca=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: ${se.w4.colors.mainTextMuted};
  font-size: 16px;
  text-align: center;
`;function Ta({progress:e,onBack:a,onToggleFavorite:o}){const t=[];for(const a of e.favorites){const[e,o]=a.split(":"),r=s.find(a=>a.id===e),n=r?.cards.find(e=>e.id===o);r&&n&&t.push({cardKey:a,card:n,color:r.color})}return(0,d.jsxs)(fa,{children:[(0,d.jsxs)(ga,{children:[(0,d.jsx)(ha,{onClick:a,children:(0,d.jsx)(ae.A,{size:18})}),(0,d.jsx)(xa,{children:"❤️ Favoritos"}),(0,d.jsxs)(ba,{children:[t.length," guardados"]})]}),(0,d.jsx)(ya,{children:0===t.length?(0,d.jsxs)(Ca,{children:[(0,d.jsx)("span",{style:{fontSize:64},children:"💔"}),(0,d.jsx)("span",{children:"Ainda não tens favoritos."}),(0,d.jsx)("span",{style:{fontSize:14},children:"Toca no ❤️ nas lições para guardar."})]}):(0,d.jsx)(wa,{children:t.map(({cardKey:e,card:a,color:t},r)=>(0,d.jsxs)(va,{color:t,index:r,children:[(0,d.jsx)($a,{onClick:()=>ke(a.word),children:a.emoji}),(0,d.jsx)(ja,{color:t,children:a.letter}),(0,d.jsx)(ka,{children:a.word}),(0,d.jsxs)(za,{children:[(0,d.jsx)(Sa,{type:"button",title:"Ouvir",onClick:()=>ke(a.word),children:(0,d.jsx)(oe.A,{size:16})}),(0,d.jsx)(Sa,{type:"button",title:"Remover dos favoritos",onClick:()=>o(e),style:{color:"#ef4444",borderColor:"#ef444440"},children:(0,d.jsx)(te.A,{size:16,fill:"#ef4444"})})]})]},e))})})]})}const Ma="atlantis-leitor-progress",Aa={totalStars:0,level:1,streak:0,lastPlayedDate:"",lessons:{},favorites:[],badges:[]};function Ra(e,a){return e.badges.includes(a)?e:{...e,badges:[...e.badges,a]}}const _a=r.default.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function Ba({onBack:e}){const[a,o]=(0,t.useState)(()=>function(){try{const e=localStorage.getItem(Ma);return e?{...Aa,...JSON.parse(e)}:{...Aa}}catch{return{...Aa}}}()),[r,n]=(0,t.useState)(()=>$e());(0,t.useEffect)(()=>{return"speechSynthesis"in window&&(we(),pe||(window.speechSynthesis.addEventListener("voiceschanged",we),pe=!0,be())),e=n,ge.add(e),e($e()),()=>{ge.delete(e)};var e},[]);const[i,s]=(0,t.useState)({id:"home"}),l=(0,t.useCallback)(e=>{o(a=>{const o=function(e){let a=e;return a.totalStars>=1&&!a.badges.includes("primeira-estrela")&&(a=Ra(a,"primeira-estrela")),Object.values(a.lessons).filter(e=>e.completed).length>=1&&!a.badges.includes("primeira-licao")&&(a=Ra(a,"primeira-licao")),Object.values(a.lessons).some(e=>3===e.stars)&&!a.badges.includes("tres-estrelas")&&(a=Ra(a,"tres-estrelas")),a.favorites.length>=10&&!a.badges.includes("coleccionador")&&(a=Ra(a,"coleccionador")),3!==a.lessons.vogais?.stars||a.badges.includes("vogais-mestre")||(a=Ra(a,"vogais-mestre")),["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"].every(e=>a.lessons[e]?.completed)&&!a.badges.includes("leitor")&&(a=Ra(a,"leitor")),["animais","cores","numeros","corpo","familia"].every(e=>a.lessons[e]?.completed)&&!a.badges.includes("explorador")&&(a=Ra(a,"explorador")),3!==a.lessons.numeros?.stars||a.badges.includes("numeros-mestre")||(a=Ra(a,"numeros-mestre")),a}(e(a));return function(e){try{localStorage.setItem(Ma,JSON.stringify(e))}catch{}}(o),o})},[]),c=(0,t.useCallback)(e=>{l(a=>function(e,a){const o=e.favorites.includes(a);return{...e,favorites:o?e.favorites.filter(e=>e!==a):[...e.favorites,a]}}(a,e))},[l]),p=(0,t.useCallback)((e,a,o)=>{l(t=>function(e,a,o,t){o>=t||o>=t-1||Math.ceil(t/2);const r=e.lessons[a],n=Math.max(r?.bestScore??0,o),i=n>=t?3:n>=t-1?2:n>=Math.ceil(t/2)?1:0,s=Math.max(0,i-(r?.stars??0)),l=(new Date).toISOString().split("T")[0],c=(()=>{if(!e.lastPlayedDate)return!1;const a=new Date(e.lastPlayedDate);return 1==(new Date(l).getTime()-a.getTime())/864e5})();return{...e,totalStars:e.totalStars+s,level:Math.floor((e.totalStars+s)/5)+1,streak:e.lastPlayedDate===l?e.streak:c?e.streak+1:1,lastPlayedDate:l,lessons:{...e.lessons,[a]:{stars:i,bestScore:n,completed:i>0}}}}(t,e,a,o)),s({id:"home"})},[l]);return"lesson"===i.id?(0,d.jsx)(_a,{children:(0,d.jsx)(ua,{lessonId:i.lessonId,progress:a,onBack:()=>s({id:"home"}),onComplete:p,onToggleFavorite:c})}):"favorites"===i.id?(0,d.jsx)(_a,{children:(0,d.jsx)(Ta,{progress:a,onBack:()=>s({id:"home"}),onToggleFavorite:c})}):(0,d.jsx)(_a,{children:(0,d.jsx)(ee,{progress:a,speechDebug:r,onSelectLesson:e=>s({id:"lesson",lessonId:e}),onOpenFavorites:()=>s({id:"favorites"}),onSpeechTest:ze})})}},1364(e,a,o){o.d(a,{XB:()=>oe,zE:()=>v,Ky:()=>f,zj:()=>h});var t=o(7359),r=o(3279);let n=null;function i(){return n||(n=(0,r.UU)("https://eqvzakschpdemcgexjyy.supabase.co","sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL")),n}function s(e){return i().channel(`game-room-${e}`,{config:{broadcast:{self:!1}}})}function l(e){i().removeChannel(e)}const c=["turbo","mega","super","epic","cosmic","blazing","wild","hyper","magic","thunder","golden","silver","crystal","phantom","stellar","neon","atomic","mystic","shadow","lucky"],d={tictactoe:["grid","cross","circle","duel","board","square"],spotit:["eyes","flash","cards","match","reflex","hunt"],memory:["brain","flip","pairs","cards","mind","vault"],stopgame:["words","rush","sprint","blitz","clash","race"]},p=["arena","zone","battle","quest","clash","showdown"];function u(e){return e[Math.floor(Math.random()*e.length)]}function m(){return Math.random().toString(36).slice(2,8)}function f({gameId:e,playerName:a,onEvent:o}){const[r,n]=(0,t.useState)(null),[i,f]=(0,t.useState)(null),g=(0,t.useRef)(null),h=(0,t.useRef)(o);h.current=o;const x=(0,t.useRef)(a);x.current=a;const b=(0,t.useRef)(m()),y=(0,t.useCallback)((a,o)=>{const t=s(function(e,a){return`${e}-${a.toUpperCase()}`}(e,a));return t.on("broadcast",{event:"mp"},({payload:e})=>{h.current(e)}),t.subscribe(e=>{"SUBSCRIBED"===e?(g.current=t,"guest"===o&&t.send({type:"broadcast",event:"mp",payload:{type:"guest-joined",name:x.current,playerId:b.current}})):"CHANNEL_ERROR"===e&&f("Connection failed. Check your internet and try again.")}),t},[e]),w=(0,t.useCallback)(()=>{b.current=m();const a=Array.from({length:6},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(32*Math.random())]).join(""),o=function(e,a){const o=u(c),t=u(d[e]??p);return`${a.slice(0,8).trim()}'s ${o} ${t}`}(e,x.current);y(a,"host");const t={id:b.current,name:x.current,isHost:!0};return n({code:a,roomName:o,role:"host",playerId:b.current,playerName:x.current,players:[t],opponentName:null,connected:!1}),f(null),{code:a,roomName:o}},[y,e]),v=(0,t.useCallback)(e=>{b.current=m();const a=e.toUpperCase().trim();y(a,"guest");const o={id:b.current,name:x.current,isHost:!1};n({code:a,roomName:"",role:"guest",playerId:b.current,playerName:x.current,players:[o],opponentName:null,connected:!1}),f(null)},[y]),$=(0,t.useCallback)(e=>{g.current?.send({type:"broadcast",event:"mp",payload:e})},[]),j=(0,t.useCallback)(()=>{g.current&&(g.current.send({type:"broadcast",event:"mp",payload:{type:"player-left",playerId:b.current,name:x.current}}),l(g.current),g.current=null),n(null),f(null)},[]),k=(0,t.useCallback)(e=>{n(a=>a?{...a,opponentName:e,connected:!0}:a)},[]),z=(0,t.useCallback)(e=>{n(a=>{if(!a)return a;if(a.players.some(a=>a.id===e.id))return a;const o=[...a.players,e],t=o.find(e=>e.id!==a.playerId);return{...a,players:o,opponentName:t?.name??null,connected:!0}})},[]),S=(0,t.useCallback)(e=>{n(a=>{if(!a)return a;const o=a.players.filter(a=>a.id!==e),t=o.find(e=>e.id!==a.playerId);return{...a,players:o,opponentName:t?.name??null,connected:o.length>1}})},[]),C=(0,t.useCallback)(e=>{n(a=>{if(!a)return a;const o=e.find(e=>e.id!==a.playerId);return{...a,players:e,opponentName:o?.name??null,connected:e.length>1}})},[]);return(0,t.useEffect)(()=>()=>{g.current&&(g.current.send({type:"broadcast",event:"mp",payload:{type:"player-left",playerId:b.current,name:x.current}}),l(g.current),g.current=null)},[]),{room:r,createRoom:w,joinRoom:v,sendEvent:$,leaveRoom:j,setConnected:k,addPlayer:z,removePlayer:S,setPlayers:C,error:i}}const g=864e5;function h({gameId:e,enabled:a}){const[o,r]=(0,t.useState)([]),n=(0,t.useRef)(null),i=(0,t.useRef)(null),c=(0,t.useRef)(null),d=(0,t.useRef)(new Map);(0,t.useEffect)(()=>{if(!a)return;const o=s(`lobby-${e}`);n.current=o,o.on("broadcast",{event:"room-heartbeat"},({payload:e})=>{const a=e,o=Date.now();o-a.createdAt>g||(a.lastSeen=o,d.current.set(a.code,a),r(Array.from(d.current.values())))}),o.on("broadcast",{event:"room-closed"},({payload:e})=>{const{code:a}=e;d.current.delete(a),r(Array.from(d.current.values()))}),o.subscribe();const t=setInterval(()=>{const e=Date.now();let a=!1;for(const[o,t]of d.current)(e-t.lastSeen>45e3||e-t.createdAt>g)&&(d.current.delete(o),a=!0);a&&r(Array.from(d.current.values()))},1e4);return setTimeout(()=>{o.send({type:"broadcast",event:"room-request",payload:{}})},500),()=>{clearInterval(t),n.current&&(l(n.current),n.current=null),d.current.clear()}},[e,a]),(0,t.useEffect)(()=>{if(!a||!n.current)return;const e=n.current;e.on("broadcast",{event:"room-request"},()=>{c.current&&e.send({type:"broadcast",event:"room-heartbeat",payload:{...c.current,lastSeen:Date.now()}})})},[a]);const p=(0,t.useCallback)(a=>{const o={...a,gameId:e,createdAt:Date.now(),lastSeen:Date.now()};c.current=o,n.current?.send({type:"broadcast",event:"room-heartbeat",payload:o}),i.current&&clearInterval(i.current),i.current=setInterval(()=>{c.current&&n.current&&(c.current.lastSeen=Date.now(),n.current.send({type:"broadcast",event:"room-heartbeat",payload:c.current}))},2e4)},[e]),u=(0,t.useCallback)(e=>{c.current&&(c.current.playerCount=e)},[]),m=(0,t.useCallback)(()=>{i.current&&(clearInterval(i.current),i.current=null),c.current&&n.current&&n.current.send({type:"broadcast",event:"room-closed",payload:{code:c.current.code}}),c.current=null},[]);return(0,t.useEffect)(()=>()=>{i.current&&clearInterval(i.current),c.current&&n.current&&n.current.send({type:"broadcast",event:"room-closed",payload:{code:c.current.code}}),c.current=null},[]),{rooms:o,publishRoom:p,updatePlayerCount:u,unpublishRoom:m}}var x=o(3233),b=o(7207),y=o(9178);const w="atlantis-games-player-name";function v(){return sessionStorage.getItem(w)??""}function $(e){sessionStorage.setItem(w,e)}var j=o(5723);const k={yourName:{pt:"O teu nome",en:"Your name"},createRoom:{pt:"Criar Sala",en:"Create Room"},joinRoom:{pt:"Entrar na Sala",en:"Join Room"},roomCode:{pt:"Código da Sala",en:"Room Code"},waiting:{pt:"À espera de jogadores…",en:"Waiting for players…"},shareCode:{pt:"Partilha este código:",en:"Share this code:"},enterCode:{pt:"Introduz o código da sala",en:"Enter room code"},join:{pt:"Entrar",en:"Join"},leave:{pt:"Sair",en:"Leave"},copied:{pt:"Copiado!",en:"Copied!"},copy:{pt:"Copiar",en:"Copy"},namePlaceholder:{pt:"Ex: João",en:"E.g. John"},or:{pt:"ou",en:"or"},connected:{pt:"Ligado!",en:"Connected!"},playOnline:{pt:"Jogar Online",en:"Play Online"},players:{pt:"Jogadores",en:"Players"},openRooms:{pt:"Salas abertas",en:"Open rooms"},noRooms:{pt:"Nenhuma sala aberta",en:"No open rooms"},joinDirect:{pt:"Entrar com código",en:"Join with code"}};function z(e,a){return k[e]["pt"===a?"pt":"en"]}const S=b.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,C=b.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,T=b.keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,M=x.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${y.w4.spacing.lg};
  padding: ${y.w4.spacing.xl} ${y.w4.spacing.lg};
  animation: ${C} 0.25s ease;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`,A=x.default.h2`
  font-size: ${y.w4.typography.fontSizeLg};
  color: ${y.w4.colors.mainText};
  margin: 0;
  text-align: center;
`,R=x.default.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${y.w4.borderRadius.lg};
  border: 1px solid ${y.w4.colors.border};
  background: ${y.w4.colors.surface};
  color: ${y.w4.colors.mainText};
  font-size: ${y.w4.typography.fontSizeBase};
  font-family: ${y.w4.typography.fontFamily};
  outline: none;
  min-height: 44px;
  &:focus { border-color: ${y.w4.colors.accent}; }
  &::placeholder { color: ${y.w4.colors.mainTextMuted}; }
`,_=x.default.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: ${y.w4.borderRadius.lg};
  border: 1px solid ${y.w4.colors.border};
  background: ${y.w4.colors.surface};
  color: ${y.w4.colors.mainText};
  font-size: 20px;
  font-family: ${y.w4.typography.fontFamilyMono};
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  outline: none;
  min-height: 44px;
  &:focus { border-color: ${y.w4.colors.accent}; }
  &::placeholder { color: ${y.w4.colors.mainTextMuted}; letter-spacing: 0.1em; }
`,B=x.default.div`
  display: flex;
  gap: ${y.w4.spacing.sm};
  width: 100%;
`,I=x.default.button`
  flex: 1;
  padding: 12px 20px;
  border-radius: ${y.w4.borderRadius.lg};
  border: 1px solid ${({variant:e})=>"primary"===e?y.w4.colors.accent:y.w4.colors.border};
  background: ${({variant:e})=>"primary"===e?y.w4.colors.accent:y.w4.colors.surface};
  color: ${({variant:e})=>"primary"===e?"#fff":y.w4.colors.mainText};
  font-size: ${y.w4.typography.fontSizeBase};
  font-family: ${y.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  min-height: 44px;
  transition: background 0.2s ease, border-color 0.2s ease;
  &:hover {
    background: ${({variant:e})=>"primary"===e?y.w4.colors.accentHover:y.w4.colors.sidebarHover};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,E=x.default.div`
  display: flex;
  align-items: center;
  gap: ${y.w4.spacing.md};
  width: 100%;
  color: ${y.w4.colors.mainTextMuted};
  font-size: ${y.w4.typography.fontSizeSm};
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${y.w4.colors.border};
  }
`,P=x.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${y.w4.spacing.md};
  width: 100%;
  padding: 20px;
  border-radius: ${y.w4.borderRadius.lg};
  border: 2px dashed ${y.w4.colors.accent};
  background: ${y.w4.colors.surface};
`,D=x.default.span`
  font-size: 32px;
  font-family: ${y.w4.typography.fontFamilyMono};
  font-weight: 700;
  color: ${y.w4.colors.accent};
  letter-spacing: 0.25em;
  user-select: all;
`,L=x.default.button`
  padding: 8px 14px;
  border-radius: ${y.w4.borderRadius.md};
  border: 1px solid ${y.w4.colors.border};
  background: ${y.w4.colors.codeBg};
  color: ${y.w4.colors.mainTextMuted};
  font-size: ${y.w4.typography.fontSizeSm};
  cursor: pointer;
  min-height: 36px;
  transition: background 0.2s ease;
  &:hover { background: ${y.w4.colors.sidebarHover}; }
`,O=x.default.p`
  color: ${y.w4.colors.mainTextMuted};
  font-size: ${y.w4.typography.fontSizeBase};
  animation: ${S} 1.8s ease infinite;
  text-align: center;
  margin: 0;
`,F=x.default.p`
  color: #f85149;
  font-size: ${y.w4.typography.fontSizeSm};
  text-align: center;
  margin: 0;
`,N=x.default.label`
  font-size: ${y.w4.typography.fontSizeSm};
  color: ${y.w4.colors.mainTextMuted};
  width: 100%;
`,H=x.default.div`
  display: flex;
  flex-direction: column;
  gap: ${y.w4.spacing.sm};
  width: 100%;
`,G=x.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Y=x.default.div`
  font-size: ${y.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${y.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,q=x.default.div`
  display: flex;
  align-items: center;
  gap: ${y.w4.spacing.sm};
  padding: 8px 12px;
  background: ${y.w4.colors.surface};
  border: 1px solid ${y.w4.colors.border};
  border-radius: ${y.w4.borderRadius.md};
  font-size: ${y.w4.typography.fontSizeBase};
  color: ${y.w4.colors.mainText};
  animation: ${T} 0.2s ease;
`,V=x.default.span`
  font-size: 10px;
  font-weight: 700;
  color: ${y.w4.colors.accent};
  background: rgba(88, 166, 255, 0.12);
  border-radius: 8px;
  padding: 1px 6px;
`,W=x.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,J=x.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,X=x.default.span`
  font-size: ${y.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${y.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,U=x.default.button`
  display: flex;
  align-items: center;
  gap: ${y.w4.spacing.sm};
  width: 100%;
  padding: 12px 14px;
  background: ${y.w4.colors.surface};
  border: 1px solid ${y.w4.colors.border};
  border-radius: ${y.w4.borderRadius.lg};
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
  font-family: ${y.w4.typography.fontFamily};
  text-align: left;
  min-height: 56px;
  &:hover {
    border-color: ${y.w4.colors.accent};
    background: rgba(88, 166, 255, 0.05);
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,K=x.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Q=x.default.span`
  font-size: ${y.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${y.w4.colors.mainText};
`,Z=x.default.span`
  font-size: ${y.w4.typography.fontSizeSm};
  color: ${y.w4.colors.mainTextMuted};
`,ee=x.default.span`
  font-size: ${y.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${y.w4.colors.accent};
  white-space: nowrap;
`,ae=x.default.p`
  font-size: ${y.w4.typography.fontSizeSm};
  color: ${y.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${y.w4.spacing.md} 0;
  margin: 0;
`;function oe({lang:e,room:a,error:o,onCreateRoom:r,onJoinRoom:n,onLeaveRoom:i,availableRooms:s=[]}){const[l,c]=(0,t.useState)("idle"),[d,p]=(0,t.useState)(()=>v()),[u,m]=(0,t.useState)(""),[f,g]=(0,t.useState)(!1),h=(0,t.useRef)(null),x=()=>{d.trim()&&($(d.trim()),c("hosting"),r(d.trim()))},b=()=>{const e=u.trim().toUpperCase();e.length<4||n(e,d.trim())},w=()=>{a&&navigator.clipboard.writeText(a.code).then(()=>{g(!0),setTimeout(()=>g(!1),2e3)})},k=()=>{c("idle"),m(""),i()};if(a?.connected)return null;if("hosting"===l&&a){const t=a.players??[];return(0,j.jsxs)(M,{children:[a.roomName&&(0,j.jsx)(A,{style:{fontSize:18,color:y.w4.colors.accent},children:a.roomName}),(0,j.jsxs)(A,{children:["🌐 ",z("shareCode",e)]}),(0,j.jsxs)(P,{children:[(0,j.jsx)(D,{children:a.code}),(0,j.jsx)(L,{onClick:w,children:z(f?"copied":"copy",e)})]}),t.length>1&&(0,j.jsxs)(G,{children:[(0,j.jsxs)(Y,{children:[z("players",e)," (",t.length,")"]}),t.map(e=>(0,j.jsxs)(q,{children:[e.isHost?"👑":"👤"," ",e.name,e.isHost&&(0,j.jsx)(V,{children:"Host"})]},e.id))]}),t.length<=1&&(0,j.jsx)(O,{children:z("waiting",e)}),o&&(0,j.jsx)(F,{children:o}),(0,j.jsx)(I,{variant:"secondary",onClick:k,children:z("leave",e)})]})}return"joining"===l?(0,j.jsxs)(M,{children:[(0,j.jsxs)(A,{children:["🔗 ",z("joinRoom",e)]}),(0,j.jsxs)(H,{children:[(0,j.jsx)(N,{children:z("enterCode",e)}),(0,j.jsx)(_,{ref:h,value:u,onChange:e=>m(e.target.value.toUpperCase().slice(0,6)),placeholder:"ABC123",maxLength:6,onKeyDown:e=>"Enter"===e.key&&b()})]}),o&&(0,j.jsx)(F,{children:o}),(0,j.jsxs)(B,{children:[(0,j.jsx)(I,{variant:"secondary",onClick:k,children:z("leave",e)}),(0,j.jsx)(I,{variant:"primary",onClick:b,disabled:u.trim().length<4,children:z("join",e)})]})]}):(0,j.jsxs)(M,{children:[(0,j.jsxs)(A,{children:["🌐 ",z("playOnline",e)]}),(0,j.jsxs)(H,{children:[(0,j.jsx)(N,{children:z("yourName",e)}),(0,j.jsx)(R,{value:d,onChange:e=>p(e.target.value.slice(0,20)),placeholder:z("namePlaceholder",e),onKeyDown:e=>"Enter"===e.key&&x()})]}),o&&(0,j.jsx)(F,{children:o}),s.length>0&&(0,j.jsxs)(W,{children:[(0,j.jsx)(J,{children:(0,j.jsxs)(X,{children:[z("openRooms",e)," (",s.length,")"]})}),s.map(e=>(0,j.jsxs)(U,{onClick:()=>{return a=e.code,void(d.trim()&&($(d.trim()),n(a,d.trim())));var a},disabled:!d.trim(),children:[(0,j.jsxs)(K,{children:[(0,j.jsx)(Q,{children:e.roomName||e.code}),(0,j.jsxs)(Z,{children:["👑 ",e.hostName]})]}),(0,j.jsxs)(ee,{children:["👤 ",e.playerCount]})]},e.code))]}),0===s.length&&(0,j.jsx)(ae,{children:z("noRooms",e)}),(0,j.jsx)(B,{children:(0,j.jsx)(I,{variant:"primary",onClick:x,disabled:!d.trim(),children:z("createRoom",e)})}),(0,j.jsx)(E,{children:z("or",e)}),(0,j.jsx)(B,{children:(0,j.jsx)(I,{variant:"secondary",onClick:()=>{d.trim()&&($(d.trim()),c("joining"),setTimeout(()=>h.current?.focus(),100))},disabled:!d.trim(),children:z("joinDirect",e)})})]})}},233(e,a,o){o.d(a,{G:()=>l,L:()=>i});var t=o(7359),r=o(5723);function n(e,a){switch(e){case"S":return a.skin;case"B":return a.body;case"D":return a.bodyDark;case"H":return a.hat;case"E":return a.eyes;case"M":return a.mouth;case"A":return a.accent;case"X":return a.shoes;default:return null}}const i=[{skin:"#ffcc99",body:"#4488ff",bodyDark:"#3366cc",shoes:"#cc4444",eyes:"#222",mouth:"#cc5555",hat:"#ff4444",accent:"#ffdd44"},{skin:"#ffe0bd",body:"#44bb44",bodyDark:"#338833",shoes:"#8844cc",eyes:"#222",mouth:"#cc5555",hat:"#22aa22",accent:"#ffffff"},{skin:"#f5c6a0",body:"#ff6644",bodyDark:"#cc4422",shoes:"#4444cc",eyes:"#222",mouth:"#cc5555",hat:"#ffaa00",accent:"#44ddff"},{skin:"#deb887",body:"#cc44cc",bodyDark:"#993399",shoes:"#44cc44",eyes:"#222",mouth:"#cc5555",hat:"#ff66cc",accent:"#ffff44"},{skin:"#ffd5b5",body:"#ffaa00",bodyDark:"#cc8800",shoes:"#884422",eyes:"#222",mouth:"#cc5555",hat:"#4488ff",accent:"#ff4444"},{skin:"#ffe0c0",body:"#00cccc",bodyDark:"#009999",shoes:"#ff6644",eyes:"#222",mouth:"#cc5555",hat:"#ff44aa",accent:"#88ff88"},{skin:"#ffcc99",body:"#8855cc",bodyDark:"#663399",shoes:"#ffaa00",eyes:"#222",mouth:"#cc5555",hat:"#44ccff",accent:"#ff8844"},{skin:"#f0c8a0",body:"#ff4488",bodyDark:"#cc2266",shoes:"#222222",eyes:"#222",mouth:"#cc5555",hat:"#44ff88",accent:"#ffdd00"},{skin:"#ffcc99",body:"#ffffff",bodyDark:"#cccccc",shoes:"#3366cc",eyes:"#222",mouth:"#cc5555",hat:"#4488ff",accent:"#ff4444"},{skin:"#f5c6a0",body:"#222222",bodyDark:"#111111",shoes:"#444444",eyes:"#ff4444",mouth:"#cc5555",hat:"#333333",accent:"#ff2222"},{skin:"#ffe0bd",body:"#44dd44",bodyDark:"#22aa22",shoes:"#664422",eyes:"#222",mouth:"#cc5555",hat:"#55ee55",accent:"#88ff44"},{skin:"#c8a882",body:"#7744cc",bodyDark:"#552299",shoes:"#222222",eyes:"#ff44ff",mouth:"#cc88cc",hat:"#9944ff",accent:"#cc66ff"}],s={idle:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","S","B","B","B","B","B","B","B","B","S","_"],["_","S","B","B","B","A","A","B","B","B","S","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","_","D","D","_","_","D","D","_","_","_"],["_","_","_","D","D","_","_","D","D","_","_","_"],["_","_","X","X","X","_","_","X","X","X","_","_"],["_","_","X","X","X","_","_","X","X","X","_","_"]],jump:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["S","S","B","B","B","B","B","B","B","B","S","S"],["_","S","B","B","B","A","A","B","B","B","S","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","D","D","_","_","_","_","D","D","_","_"],["_","D","D","_","_","_","_","_","_","D","D","_"],["X","X","X","_","_","_","_","_","_","X","X","X"],["X","X","_","_","_","_","_","_","_","_","X","X"]],walk:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","_","B","B","B","B","B","B","B","B","S","_"],["_","_","B","B","B","A","A","B","B","B","S","_"],["_","S","B","B","B","B","B","B","B","B","_","_"],["_","S","B","B","B","B","B","B","B","B","_","_"],["_","_","_","D","D","_","_","_","D","D","_","_"],["_","_","_","_","D","D","_","D","D","_","_","_"],["_","_","_","_","X","X","X","X","_","_","_","_"],["_","_","_","_","X","X","X","X","_","_","_","_"]],dead:[["_","_","_","_","_","H","H","H","H","_","_","_"],["_","_","_","_","H","H","H","H","H","H","_","_"],["_","_","_","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","_","S","S","_","E","S","_","_"],["_","_","S","_","E","S","S","E","_","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","A","A","B","B","B","_","_"],["_","S","B","B","B","B","B","B","B","B","S","_"],["S","_","B","B","B","B","B","B","B","B","_","S"],["_","_","_","D","D","D","D","D","D","_","_","_"],["_","_","_","_","_","_","_","_","_","_","_","_"],["_","_","X","X","X","X","X","X","X","X","_","_"],["_","_","_","_","_","_","_","_","_","_","_","_"]]};function l({paletteIndex:e,pose:a="idle",size:o=48,flipX:l=!1,style:c,className:d}){const p=i[e%i.length],u=s[a],m=u.length,f=u[0].length,g=(0,t.useMemo)(()=>{const e=[];for(let a=0;a<m;a++)for(let o=0;o<f;o++){const t=n(u[a][o],p);t&&e.push({x:o,y:a,color:t})}return e},[u,p,m,f]);return(0,r.jsx)("svg",{width:o,height:o*(m/f),viewBox:`0 0 ${f} ${m}`,style:{imageRendering:"pixelated",transform:l?"scaleX(-1)":void 0,...c},className:d,children:g.map((e,a)=>(0,r.jsx)("rect",{x:e.x,y:e.y,width:1,height:1,fill:e.color},a))})}}}]);
//# sourceMappingURL=315.dea5be511d835083359e.js.map