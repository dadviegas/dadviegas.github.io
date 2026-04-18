"use strict";(self.webpackChunk_atlantis_games=self.webpackChunk_atlantis_games||[]).push([[3179],{894(e,o,t){t.d(o,{Ym:()=>c});var a=t(7359),r=t(6879);const n="atlantis:locale",i="shell:locale";function s(e){return"en"===e||"pt"===e}function l(){try{const e=localStorage.getItem(n);if(s(e))return e}catch{}return"en"}function c(){const[e,o]=(0,a.useState)(l),t=(0,a.useCallback)(e=>{o(e),function(e){try{localStorage.setItem(n,e)}catch{}(0,r.Is)(i,e).catch(()=>{})}(e),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,a.useEffect)(()=>{const e=e=>{const t=e.detail;o(t)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,a.useEffect)(()=>{(0,r.PL)(i).then(t=>{if(s(t)&&t!==e){try{localStorage.setItem(n,t)}catch{}o(t)}}).catch(()=>{})},[]),[e,t]}(0,r.PL)(i).then(e=>{if(s(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{});var d=t(3233);t(5723),d.default.div`
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
`},4914(e,o,t){t.d(o,{FlyoutPanel:()=>x});var a=t(7359),r=t(3233),n=t(7207),i=t(255),s=t(217),l=t(5959),c=t(5185),d=t(5723);const p=n.keyframes`
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
`;function g({iconKey:e}){const o=e?c.t[e]??i.A:i.A;return(0,d.jsx)(o,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:o,onSelect:t}){return(0,d.jsx)(d.Fragment,{children:e.map(e=>e.children?(0,d.jsx)(a.Fragment,{children:(0,d.jsx)(h,{entries:e.children,activeId:o,onSelect:t})},e.id):(0,d.jsxs)(f,{active:o===e.id,onClick:()=>t(e),children:[(0,d.jsx)(g,{iconKey:e.icon}),e.name]},e.id))})}function x({activeId:e}){const{flyout:o,scheduleFlyoutClose:t,cancelFlyoutClose:a}=(0,l.c)();if(!o)return null;const r=o.entry.icon?c.t[o.entry.icon]??i.A:i.A;return(0,d.jsxs)(u,{anchorY:o.anchorY,onMouseEnter:a,onMouseLeave:t,children:[(0,d.jsxs)(m,{children:[(0,d.jsx)(r,{size:13,strokeWidth:2}),o.entry.name]}),(0,d.jsx)(h,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),t()}})]})}},5959(e,o,t){t.d(o,{I:()=>r,c:()=>n});var a=t(7359);const r=(0,a.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,a.useContext)(r)},5185(e,o,t){t.d(o,{t:()=>be});var a=t(9510),r=t(9038),n=t(7400),i=t(7561),s=t(8207),l=t(7902),c=t(6896),d=t(3013),p=t(2887),u=t(7901),m=t(9848),f=t(2164),g=t(3045),h=t(3775),x=t(3539),b=t(1783),y=t(9416),w=t(1837),v=t(7167),$=t(4494),k=t(2314),j=t(5751),z=t(255),S=t(9633),T=t(2946),M=t(822),C=t(6720),A=t(8456),R=t(3317),B=t(2709),_=t(9301),E=t(8006),I=t(3517),P=t(7032),F=t(6949),L=t(8218),O=t(6829),D=t(5553),N=t(9591),H=t(9923),G=t(2820),Y=t(4621),q=t(8479),V=t(2534),W=t(6673),J=t(7490),X=t(9033),U=t(5775),K=t(1365),Q=t(2937),Z=t(9821),ee=t(5912),oe=t(158),te=t(8641),ae=t(8607),re=t(3249),ne=t(1821),ie=t(5889),se=t(9655),le=t(7170),ce=t(9161),de=t(1849),pe=t(1604),ue=t(3142),me=t(1187),fe=t(7747),ge=t(2932),he=t(4525),xe=t(7230);const be={activity:c.A,"a-large-small":l.A,apple:d.A,"arrow-right":p.A,"bar-chart-2":a.A,book:m.A,"book-open":u.A,briefcase:g.A,calendar:h.A,clock:b.A,"circle-dot":x.A,cloud:y.A,compass:w.A,cpu:v.A,droplets:$.A,feather:k.A,file:z.A,"file-text":j.A,folder:S.A,"git-branch":T.A,github:M.A,globe:C.A,grid:n.A,hand:A.A,hash:R.A,heart:B.A,key:E.A,hexagon:_.A,home:i.A,landmark:I.A,layers:s.A,"layout-grid":P.A,leaf:F.A,lightbulb:L.A,list:O.A,map:N.A,"map-pin":D.A,"message-circle":H.A,"message-square":G.A,minus:Y.A,monitor:q.A,mountain:V.A,package:W.A,palette:J.A,"pen-tool":X.A,"pie-chart":r.A,plane:U.A,plus:K.A,ruler:Q.A,shirt:Z.A,slash:ee.A,square:oe.A,star:te.A,sun:ae.A,terminal:re.A,thermometer:ne.A,triangle:ie.A,trophy:se.A,truck:le.A,type:ce.A,users:de.A,"volume-2":pe.A,watch:ue.A,waves:me.A,wind:fe.A,wrench:ge.A,x:he.A,zap:xe.A,bot:f.A}},6879(e,o,t){t.d(o,{PE:()=>M,PL:()=>L,Is:()=>F,w4:()=>a.w4});var a=t(217),r=t(7359),n=t(3233),i=t(5723);n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${a.w4.spacing.sm};
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamily};
  font-size: ${a.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,n.default.div`
  position: relative;
`;var s=t(7207),l=t(3661),c=t(5959);const d="260px",p="56px",u=n.default.header`
  display: flex;
  align-items: center;
  height: calc(${"48px"} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
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
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,f=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${a.w4.borderRadius.md};
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.accent};
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
  padding: 0 ${a.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${a.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${a.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,x=n.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${g} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${a.w4.colors.accent}, ${a.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,b=n.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  padding-left: ${a.w4.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${a.w4.spacing.sm};
    color: ${a.w4.colors.border};
  }
`,y=n.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${a.w4.spacing.md};
  padding: 0 ${a.w4.spacing.lg};

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${a.w4.spacing.sm};
  }
`,w=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,v=n.default.div`
  display: flex;
  flex-direction: column;
  height: ${a.w4.sizes.fullHeight};
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  color: ${a.w4.colors.mainText};
  overflow: hidden;
`,$=n.default.aside`
  width: ${({collapsed:e})=>e?p:d};
  min-width: ${({collapsed:e})=>e?p:d};
  background: ${a.w4.colors.sidebarBg};
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${a.w4.breakpoints.md}) {
    display: none;
  }
`,k=n.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,j=n.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,z=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function S(){return(0,i.jsx)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:z.map((e,o)=>(0,i.jsx)(x,{index:o,accent:e.accent,children:e.char},o))})}const T="atlantis:sidebar-collapsed";function M({sidebar:e,children:o,topBarRight:a,title:n="Atlantis",activeId:s=null}){const[d,p]=(0,r.useState)(()=>{try{return"true"===localStorage.getItem(T)}catch{return!1}}),[g,h]=(0,r.useState)(null),x=(0,r.useRef)(),z=()=>p(e=>{const o=!e;try{localStorage.setItem(T,String(o))}catch{}return o}),M=r.useMemo(()=>r.lazy(()=>Promise.resolve().then(t.bind(t,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,i.jsx)(c.I.Provider,{value:{collapsed:d,toggle:z,flyout:g,openFlyout:(e,o,t)=>{clearTimeout(x.current),h({entry:e,anchorY:o,onSelect:t})},scheduleFlyoutClose:()=>{x.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(x.current)},children:(0,i.jsxs)(v,{children:[(0,i.jsxs)(u,{children:[e&&(0,i.jsx)(m,{children:(0,i.jsx)(f,{onClick:z,title:d?"Expand sidebar":"Collapse sidebar",children:(0,i.jsx)(l.A,{size:17})})}),(0,i.jsx)(S,{}),n&&(0,i.jsx)(b,{children:n}),a&&(0,i.jsx)(y,{children:a})]}),(0,i.jsxs)(w,{children:[null!=e&&(0,i.jsx)($,{collapsed:d,children:(0,i.jsx)(k,{children:e})}),(0,i.jsx)(j,{children:o})]}),g&&(0,i.jsx)(r.Suspense,{fallback:null,children:(0,i.jsx)(M,{activeId:s})})]})})}t(5185),n.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,n.default.div`
  overflow: hidden;
`,n.default.div`
  padding-left: ${a.w4.spacing.md};
`,n.default.div`
  display: flex;
  flex-direction: column;
`,n.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${a.w4.spacing.sm} ${a.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":a.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${a.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${a.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${a.w4.colors.sidebarText};
    background: ${a.w4.colors.sidebarHover};
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
  color: ${a.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,n.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${a.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?a.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?a.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?a.w4.colors.sidebarActive:a.w4.colors.sidebarText};
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${a.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${a.w4.borderRadius.md} ${a.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.mainText};
  }
`;const C=s.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;n.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${C} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${a.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${a.w4.colors.surface};
  }
`,n.default.span`
  display: block;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${a.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${a.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${a.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${a.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,t(4914);var A=t(1920),R=t(8607),B=t(8479);n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  cursor: pointer;
  color: ${a.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.accent};
    border-color: ${a.w4.colors.accent};
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
`,A.A,R.A,B.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const _="documents",E="settings";function I(){return new Promise((e,o)=>{const t=indexedDB.open("atlantis-tools",2);t.onupgradeneeded=e=>{const o=e.target.result;o.objectStoreNames.contains(_)||o.createObjectStore(_,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),o.objectStoreNames.contains(E)||o.createObjectStore(E,{keyPath:"key"})},t.onsuccess=()=>e(t.result),t.onerror=()=>o(t.error)})}let P={async saveDoc(e,o,t){const a=await I(),r={appId:e,name:o,content:t,savedAt:Date.now()};return new Promise((e,o)=>{const t=a.transaction(_,"readwrite").objectStore(_).add(r);t.onsuccess=()=>e(String(t.result)),t.onerror=()=>o(t.error)})},async updateDoc(e,o,t){const a=await I();return new Promise((r,n)=>{const i=a.transaction(_,"readwrite").objectStore(_),s=i.get(Number(e));s.onsuccess=()=>{const e=s.result;if(!e)return void n(new Error("Doc not found"));const a=i.put({...e,name:o,content:t,savedAt:Date.now()});a.onsuccess=()=>r(),a.onerror=()=>n(a.error)},s.onerror=()=>n(s.error)})},async listDocs(e){const o=await I();return new Promise((t,a)=>{const r=o.transaction(_,"readonly").objectStore(_).index("appId").getAll(e);r.onsuccess=()=>t(r.result.map(e=>({...e,id:String(e.id)})).reverse()),r.onerror=()=>a(r.error)})},async deleteDoc(e){const o=await I();return new Promise((t,a)=>{const r=o.transaction(_,"readwrite").objectStore(_).delete(Number(e));r.onsuccess=()=>t(),r.onerror=()=>a(r.error)})},async putSetting(e,o){const t=await I();return new Promise((a,r)=>{const n=t.transaction(E,"readwrite").objectStore(E).put({key:e,value:o});n.onsuccess=()=>a(),n.onerror=()=>r(n.error)})},async getSetting(e){const o=await I();return new Promise((t,a)=>{const r=o.transaction(E,"readonly").objectStore(E).get(e);r.onsuccess=()=>t(r.result?r.result.value:null),r.onerror=()=>a(r.error)})}};function F(e,o){return P.putSetting(e,o)}function L(e){return P.getSetting(e)}n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,n.default.div`
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-radius: ${a.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.default.div`
  font-size: ${a.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamily};
`,n.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${a.w4.colors.mainBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  color: ${a.w4.colors.mainText};
  font-size: ${a.w4.typography.fontSizeBase};
  font-family: ${a.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${a.w4.colors.accent}; }
  &::placeholder { color: ${a.w4.colors.sidebarTextMuted}; }
`,n.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,n.default.button`
  padding: 7px 18px;
  border-radius: ${a.w4.borderRadius.md};
  font-size: ${a.w4.typography.fontSizeBase};
  font-family: ${a.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?a.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?a.w4.colors.danger:e?"#fff":a.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?a.w4.colors.danger:e?a.w4.colors.accent:a.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,n.default.div`
  height: 1px;
  background: ${a.w4.colors.border};
  margin: 0 -4px;
`,n.default.div`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
`,n.default.div`
  position: relative;
`,n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  color: ${a.w4.colors.mainText};
  font-size: ${a.w4.typography.fontSizeBase};
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    border-color: ${a.w4.colors.accent};
  }
`,n.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-radius: ${a.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,n.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,n.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,n.default.div`
  padding: 16px 14px;
  font-size: ${a.w4.typography.fontSizeBase};
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  font-style: italic;
`,n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
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
  font-size: ${a.w4.typography.fontSizeBase};
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,n.default.div`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
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
  border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${a.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,new Set([10751]),new Set([27]),n.default.div`
  padding: ${a.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${a.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,n.default.section`
  scroll-margin-top: ${a.w4.spacing.lg};
`,n.default.div`
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.lg};
  padding: ${a.w4.spacing.lg};
`,n.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${a.w4.spacing.xl};

  @media (max-width: ${a.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  color: ${a.w4.colors.mainText};
  overflow: hidden;
`,n.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding-left: max(${a.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${a.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${a.w4.spacing.sm};
  z-index: 100;
`,n.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${a.w4.typography.fontFamily};
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${a.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${a.w4.colors.accent}; }
`,n.default.span`
  color: ${a.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,n.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,n.default.span`
  font-weight: 400;
  color: ${a.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,n.default.div`
  flex: 1;
`;const O=s.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,D=s.keyframes`
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
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  animation: ${O} 0.4s ease 0.15s both;
`,n.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,n.default.div`
  position: absolute;
  inset: 0;
  animation: ${D} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  background: ${a.w4.colors.border};
  animation: ${N} 1.4s ease-in-out infinite;
`,n.default.span`
  color: ${a.w4.colors.mainTextMuted};
  font-size: ${a.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,n.default.nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${a.w4.spacing.sm} 0;
`,n.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${a.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${a.w4.spacing.xs} ${a.w4.spacing.md};
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
  border-radius: ${a.w4.borderRadius.md};
  background: ${({active:e})=>e?a.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.sidebarText};
  font-family: ${a.w4.typography.fontFamily};
  font-size: ${a.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.mainText};
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
`},217(e,o,t){t.d(o,{w4:()=>n});const a={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},r="--at-",n={colors:function(){const e={};for(const o of Object.keys(a))e[o]=`var(${r}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${r}suiteLab)`,vida:`var(${r}suiteVida)`,learn:`var(${r}suiteLearn)`,games:`var(${r}suiteGames)`,ent:`var(${r}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:"\n    outline: 2px solid var(--at-accent);\n    outline-offset: 2px;\n  "}},5(e,o,t){t.d(o,{UO:()=>T});var a=t(7359),r=t(3233),n=t(6879),i=t(5723);const s={ghost:"transparent",accent:"transparent",primary:n.w4.colors.accent,success:"#238636",danger:"#da3633"},l={ghost:n.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:n.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},c={ghost:n.w4.colors.border,accent:n.w4.colors.accent,primary:n.w4.colors.accent,success:"#238636",danger:"#da3633"},d={ghost:n.w4.colors.mainTextMuted,accent:n.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},p={ghost:n.w4.colors.mainText,accent:n.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},u={sm:"28px",md:"30px"},m={sm:"0 10px",md:"0 12px"},f={sm:"12px",md:"12px"};r.default.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>u[e]};
  padding: ${({size:e})=>m[e]};
  background: ${({variant:e})=>s[e]};
  border: 1px solid ${({variant:e})=>c[e]};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${({variant:e})=>d[e]};
  font-size: ${({size:e})=>f[e]};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>l[e]};
    color: ${({variant:e})=>p[e]};
    border-color: ${({variant:e})=>"ghost"===e?n.w4.colors.accent:c[e]};
  }

  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;const g={default:n.w4.colors.accent,danger:"#f85149"},h={default:n.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};r.default.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${n.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":n.w4.borderRadius.sm};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover:not(:disabled) {
    color: ${({tone:e})=>g[e]};
    background: ${({tone:e})=>h[e]};
    border-color: ${({tone:e})=>g[e]};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,r.default.div`
  position: relative;
  display: inline-flex;
`,r.default.div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,r.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: -2px;
  }
`,r.default.div`
  height: 1px;
  margin: 4px 0;
  background: ${n.w4.colors.sidebarBorder};
`,r.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,r.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
`,r.default.span`
  width: 1px;
  height: 20px;
  background: ${n.w4.colors.border};
  flex-shrink: 0;
`;var x=t(7207);const b=x.keyframes`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;r.default.div`
  position: relative;
`,r.default.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  &:hover {
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.sidebarHover};
  }
`,r.default.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,r.default.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${n.w4.colors.accentMuted};
  border: 1px solid ${n.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily};
  flex-shrink: 0;
`,r.default.span`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,r.default.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  background: ${n.w4.colors.surfaceRaised};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${b} 0.15s ease;
  backdrop-filter: blur(12px);
`,r.default.div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${n.w4.colors.border};
`,r.default.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`,r.default.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${n.w4.colors.accentMuted};
  border: 1px solid ${n.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: 10px;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  color: ${n.w4.colors.mainTextMuted};
  margin-top: 2px;
`,r.default.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":n.w4.colors.mainText};
  }
`,t(894),r.default.div`
  position: relative;
  display: inline-block;
`,r.default.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?n.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?n.w4.colors.borderStrong:n.w4.colors.border};
  border-radius: 999px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast},
    border-color ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.mainText};
    border-color: ${n.w4.colors.borderStrong};
  }
  &:focus-visible { ${n.w4.focusRing} }
`,r.default.div`
  display: inline-flex;
  align-items: center;
`,r.default.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-left: -4px;
  background: ${({color:e})=>e};
  border: 2px solid ${n.w4.colors.surface};

  &:first-of-type { margin-left: 0; }
`,r.default.span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${n.w4.colors.accentMuted};
  color: ${n.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;const y=x.keyframes`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;r.default.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${n.w4.colors.surfaceRaised};
  border: 1px solid ${n.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${n.w4.elevation.lg};
  z-index: ${n.w4.zIndex.dropdown};
  animation: ${y} 0.18s ease both;

  @media (max-width: ${n.w4.breakpoints.md}) {
    left: auto;
    right: 0;
    transform: none;
    animation: none;
  }
`,(0,r.default)("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?n.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${n.w4.transitions.fast};

  &:hover { background: ${n.w4.colors.surfaceHover}; }
  &:focus-visible { ${n.w4.focusRing} }
`,(0,r.default)("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,r.default.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,r.default.span`
  font-size: 13.5px;
  color: ${n.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,r.default.span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${n.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,(0,r.default)("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,r.default.div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${n.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,r.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.mainText};
    background: ${n.w4.colors.surfaceHover};
  }
  &:focus-visible { ${n.w4.focusRing} }
`,r.default.span`
  font-size: 14px;
  width: 18px;
  text-align: center;
  flex-shrink: 0;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
`,r.default.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 999px;
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`,r.default.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 999px;
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${n.w4.colors.sidebarHover};
    border: 1px solid ${n.w4.colors.borderSubtle};
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${n.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color 0.15s, border-color 0.15s, background 0.15s;
  }

  &:hover {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.sidebarHover};
  }
  &:hover .kbd {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent}55;
    background: ${n.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`,r.default.div`
  position: relative;
  display: inline-flex;
`,r.default.span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${n.w4.colors.mainBg};
  color: #fff;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,r.default.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${n.w4.colors.accent};
  border: 1px solid ${n.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.accentHover};
    border-color: ${n.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`;const w=r.default.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,v=r.default.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,$=r.default.div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity 0.15s ease;
`,k=r.default.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${n.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,j=r.default.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${n.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,z=r.default.button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  transition: transform 0.08s ease, box-shadow 0.15s ease;

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;function S(e,o){return Math.abs(e)<o?0:e>0?1:-1}function T({onMove:e,actions:o,axes:t="both",snap:r=!0,deadZone:s=.3,forceVisible:l=!1}){const c=(0,a.useRef)(null),d=(0,a.useRef)(null),p=(0,a.useRef)(null),u=(0,a.useRef)({dx:0,dy:0}),[m,f]=(0,a.useState)(null),[g,h]=(0,a.useState)({dx:0,dy:0}),x=(0,a.useCallback)((o,a)=>{if(!e)return;const n="horizontal"===t?0:a,i=r?{dx:S(o,s),dy:S(n,s)}:{dx:o,dy:n};i.dx===u.current.dx&&i.dy===u.current.dy||(u.current=i,e(i))},[e,t,r,s]),b=(0,a.useCallback)(()=>{d.current=null,p.current=null,f(null),h({dx:0,dy:0}),x(0,0)},[x]);(0,a.useEffect)(()=>{const e=c.current;if(e)return e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("touchend",a,{passive:!0}),e.addEventListener("touchcancel",a,{passive:!0}),()=>{e.removeEventListener("touchstart",o),e.removeEventListener("touchmove",t),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",a)};function o(e){if(null!==d.current)return;const o=e.changedTouches[0];d.current=o.identifier,p.current={x:o.clientX,y:o.clientY},f({x:o.clientX,y:o.clientY}),h({dx:0,dy:0})}function t(e){if(null!==d.current&&p.current)for(let o=0;o<e.changedTouches.length;o++){const t=e.changedTouches[o];if(t.identifier!==d.current)continue;const a=t.clientX-p.current.x,r=t.clientY-p.current.y,n=Math.hypot(a,r),i=Math.min(n,60),s=0===n?0:a/n*(i/60),l=0===n?0:r/n*(i/60);h({dx:s,dy:l}),x(s,l)}}function a(e){for(let o=0;o<e.changedTouches.length;o++)if(e.changedTouches[o].identifier===d.current)return void b()}},[x,b]);const y=(0,a.useCallback)(e=>{const o=()=>e.onRelease?.();return{onPointerDown:o=>{o.stopPropagation(),e.onPress?.()},onPointerUp:o,onPointerCancel:o,onPointerLeave:o}},[]);return(0,i.jsxs)(w,{forceVisible:l,"aria-hidden":!0,children:[(0,i.jsx)(v,{ref:c,children:m&&(0,i.jsx)($,{left:m.x,top:m.y,active:!0,children:(0,i.jsx)(k,{dx:g.dx,dy:g.dy})})}),o&&o.length>0&&(0,i.jsx)(j,{children:o.map(e=>(0,i.jsx)(z,{type:"button",accent:e.color??n.w4.colors.accent,...y(e),children:e.label},e.id))})]})}const M=x.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;(0,r.default)("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${n.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${M} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${n.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${n.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,r.default.div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${n.w4.colors.border};
  color: ${n.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${n.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${n.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${n.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${n.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${n.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${n.w4.colors.mainText}; }
    & .b { color: ${n.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${n.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${n.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${n.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${n.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${n.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3px;
    padding: 10px;
    & > span { border-radius: 3px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${n.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${n.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${n.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${n.w4.colors.mainText};
      font-family: ${n.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${n.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${n.w4.colors.mainText};
    }
  }
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${n.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${n.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,r.default.div`
  padding: 6px 14px 16px;
`,r.default.h3`
  margin: 0 0 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${n.w4.colors.mainText};

  .hash {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${n.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,r.default.p`
  margin: 0;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,r.default.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?n.w4.colors.accent:n.w4.colors.mainText};
  opacity: ${({pinned:e})=>e?1:0};
  cursor: pointer;
  transition: opacity 0.15s, color 0.15s, border-color 0.15s;
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
  }
`,r.default.div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 3;
`,r.default.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?n.w4.colors.borderStrong:n.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?n.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?n.w4.colors.mainTextMuted:n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${n.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?n.w4.colors.mainTextFaint:n.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?n.w4.colors.mainText:n.w4.colors.accentHover};
  }

  &:focus-visible {
    ${n.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,r.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;const C={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:n.w4.colors.accentMuted},A={neutral:n.w4.colors.mainTextMuted,live:n.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:n.w4.colors.accent};r.default.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?n.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>C[e]};
  color: ${({tone:e})=>A[e]};
`,r.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`,r.default.kbd`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 3px;
  color: ${n.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,r.default.label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${n.w4.transitions.fast};

  &:focus-within {
    border-color: ${n.w4.colors.accent};
  }
`,r.default.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${n.w4.colors.mainTextFaint};
  }
`,r.default.span`
  display: inline-flex;
  align-items: center;
  color: ${n.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,r.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px 20px 20px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.borderSubtle};
  border-radius: ${n.w4.borderRadius.lg};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  transition: border-color ${n.w4.transitions.fast},
    background ${n.w4.transitions.fast};

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {\n      content: '';\n      position: absolute;\n      top: 14px; bottom: 14px; left: 0;\n      width: 2px;\n      background: ${e};\n      border-radius: 0 2px 2px 0;\n      opacity: 0.7;\n    }`}
`,r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,r.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,r.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${n.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.borderSubtle};
  border-radius: ${n.w4.borderRadius.lg};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${n.w4.colors.accent}`:"none"};
  transition: border-color ${n.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?n.w4.colors.accentHover:n.w4.colors.borderStrong};
  }
`,r.default.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,r.default.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,r.default.div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,r.default.div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${n.w4.colors.mainText};
  margin-bottom: 4px;
`,r.default.div`
  font-size: 11.5px;
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,r.default.div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${n.w4.colors.accentMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
`,r.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,r.default.button`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${n.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${n.w4.transitions.fast},
    background ${n.w4.transitions.fast};

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
    background: ${n.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${n.w4.focusRing}
  }
`,r.default.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,r.default.div`
  font-size: 11px;
  color: ${n.w4.colors.mainText};
`,r.default.div`
  margin-top: 14px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`;const R=x.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;(0,r.default)("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${R} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${n.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${n.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,(0,r.default)("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${n.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${n.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }
`,r.default.span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,r.default.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,r.default.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,(0,r.default)("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,r.default.div`
  padding: 6px 14px 16px;
`,r.default.h3`
  margin: 0 0 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${n.w4.colors.mainText};

  .hash {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${n.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,r.default.p`
  margin: 0;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,r.default.nav`padding: ${n.w4.spacing.sm} 0;`,r.default.div`
  border-bottom: 1px solid ${n.w4.colors.border}60;
  margin-bottom: 2px;
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${n.w4.colors.sidebarText}; }
`,r.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,r.default.span`
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,r.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,r.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,r.default.div`overflow: hidden;`,r.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,r.default.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${n.w4.spacing.md};
  background: ${({active:e})=>e?n.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,r.default.button`
  opacity: ${({active:e})=>e?1:0};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":n.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`,r.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,r.default.div`
  color: #f85149;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`,r.default.pre`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${n.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,r.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  margin-bottom: ${n.w4.spacing.md};
  text-align: center;
`,r.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  margin-top: ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,r.default.span`
  display: flex;
  align-items: center;
  gap: 6px;
`,r.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,r.default.div`
  color: #f85149;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
`,r.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.md};
`,r.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,r.default.div`
  display: flex;
  gap: ${n.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,r.default.button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${n.w4.colors.accent};
    color: ${n.w4.colors.accent};
  }
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  text-align: center;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  text-align: center;
`;const B=x.keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`,_=(r.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
`,r.default.div`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${n.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,r.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${n.w4.spacing.sm};

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,r.default.div`
  display: flex;
  flex-direction: column;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${n.w4.colors.accent}40;
    box-shadow: 0 0 8px ${n.w4.colors.accent}15;
  }
`,r.default.button`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  padding: 14px ${n.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${n.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${B} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`);(0,r.default)(_)`
  border-bottom: 1px solid ${n.w4.colors.border}80;
`,(0,r.default)(_)``,r.default.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,r.default.span`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.accent};
`,r.default.span`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
`;var E=t(1426);r.default.div`
  margin: ${n.w4.spacing.lg} 0;
  border-radius: ${n.w4.borderRadius.md};
  border: 1px solid ${n.w4.colors.codeBorder};
  overflow: hidden;
`,r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${n.w4.colors.codeBorder};
`,r.default.span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,r.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":n.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${n.w4.colors.sidebarText}; border-color: ${n.w4.colors.sidebarText}; }
`,E.A,E.A['pre[class*="language-"]'],n.w4.colors.codeBg,E.A['code[class*="language-"]'];var I=t(5569),P=t(8218),F=t(7230),L=t(2966),O=t(1069);I.A,P.A,F.A,L.A,O.A,r.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.sm};
`,r.default.div`
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,r.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${n.w4.spacing.xxl} 0 ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,r.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.md};
`,r.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,r.default.a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  border-radius: 0 ${n.w4.borderRadius.sm} ${n.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${n.w4.colors.mainText}; background: ${n.w4.colors.sidebarHover}; }
`,r.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${n.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,r.default.div`flex: 1; min-width: 0;`,r.default.article`
  padding: ${n.w4.spacing.xxl} 0;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  line-height: ${n.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${n.w4.spacing.xl} 0 ${n.w4.spacing.md};
    color: ${n.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${n.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${n.w4.typography.fontSizeXl}; border-bottom: 1px solid ${n.w4.colors.border}; padding-bottom: ${n.w4.spacing.sm}; }
  h2 { font-size: ${n.w4.typography.fontSizeLg}; border-bottom: 1px solid ${n.w4.colors.border}; padding-bottom: ${n.w4.spacing.xs}; }
  h3 { font-size: ${n.w4.typography.fontSizeMd}; }

  p { margin: ${n.w4.spacing.md} 0; }

  a { color: ${n.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${n.w4.colors.accentHover}; } }

  ul, ol { margin: ${n.w4.spacing.md} 0; padding-left: ${n.w4.spacing.xl}; }
  li { margin: ${n.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${n.w4.colors.border};
    margin: ${n.w4.spacing.lg} 0;
    padding: ${n.w4.spacing.sm} ${n.w4.spacing.lg};
    background: ${n.w4.colors.surface};
    color: ${n.w4.colors.mainTextMuted};
    border-radius: 0 ${n.w4.borderRadius.sm} ${n.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${n.w4.colors.codeBg};
    border: 1px solid ${n.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${n.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${n.w4.spacing.lg} 0; font-size: ${n.w4.typography.fontSizeBase}; }
  th, td { padding: ${n.w4.spacing.sm} ${n.w4.spacing.md}; border: 1px solid ${n.w4.colors.border}; text-align: left; }
  th { background: ${n.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${n.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${n.w4.colors.border}; margin: ${n.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${n.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${n.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${n.w4.spacing.lg} 0; }
`,r.default.div`
  display: flex;
  gap: ${n.w4.spacing.lg};
  padding: ${n.w4.spacing.xxl} 0;
  border-top: 1px solid ${n.w4.colors.border};
  margin-top: ${n.w4.spacing.xxl};
`,r.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${n.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,r.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${n.w4.colors.sidebarTextMuted}; font-family: ${n.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,r.default.div`
  font-size: ${n.w4.typography.fontSizeBase}; color: ${n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily}; font-weight: 500;
`,r.default.div`
  color: ${n.w4.colors.mainTextMuted};
  padding: ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  font-family: ${n.w4.typography.fontFamily};
`;const D=x.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,N=x.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;r.default.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${D} 0.15s ease;
`,r.default.div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${n.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${N} 0.2s ease;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${n.w4.colors.border};
`,r.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${n.w4.colors.mainText}; background: ${n.w4.colors.border}; }
`,r.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,r.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,r.default.button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?n.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,r.default.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${n.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${n.w4.colors.accent}20`:n.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,r.default.div`
  flex: 1;
  min-width: 0;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,r.default.span`
  font-weight: 400;
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,r.default.span`
  font-size: 11px;
  font-weight: 500;
  color: ${n.w4.colors.accent};
  background: ${n.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${n.w4.colors.accent}25;
    color: ${n.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,r.default.div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?n.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${n.w4.colors.border};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
`,r.default.kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.sidebarTextMuted};
`,r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`,new Map,r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${n.w4.typography.fontFamily};
  background: ${n.w4.colors.mainBg};
`,r.default.div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,r.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${n.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${n.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,r.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,r.default.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${n.w4.colors.mainText} 0%,
    ${n.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,r.default.p`
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,r.default.span`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${n.w4.colors.accent}60;
    color: ${n.w4.colors.mainText};
    background: ${n.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${n.w4.colors.surface};
    border: 1px solid ${n.w4.colors.border};
    border-radius: 3px;
    color: ${n.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,r.default.div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,r.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainText};
  }
`,r.default.div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${n.w4.spacing.md}`};
  border-bottom: 1px solid ${n.w4.colors.border}60;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${n.w4.colors.accent}10`:n.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${n.w4.colors.accent}40`:"transparent"};
  border-radius: ${n.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,r.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.sidebarText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,r.default.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  border-radius: ${n.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${n.w4.colors.mainText}; }
`,r.default.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,r.default.button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${n.w4.spacing.md};
  background: ${({active:e})=>e?n.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${n.w4.colors.sidebarText};
`,r.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  color: ${n.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${n.w4.colors.accent}30;
    color: ${n.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,r.default.div`
  padding: 12px ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,r.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,r.default.span`
  font-size: 11px;
  color: ${n.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,new Map,r.default.div`
  font-size: 14px;
  color: ${n.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${n.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  h1:first-child, h2:first-child, h3:first-child { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${n.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${n.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${n.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${n.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${n.w4.colors.accent};
    background: ${n.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${n.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${n.w4.colors.codeBg};
    border: 1px solid ${n.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${n.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${n.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${n.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${n.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${n.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-child(even) td { background: ${n.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${n.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${n.w4.colors.border};
    margin: 0.8em 0;
  }
`},4204(e,o,t){t.d(o,{m:()=>M});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5),l=t(233),c=t(5723);const d=.92,p=.6,u=["🍌","💨","🧊","⚡"],m=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,f=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,g=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,h=n.keyframes`0%{box-shadow:0 0 0 0 rgba(249,117,131,0.4)}70%{box-shadow:0 0 0 20px rgba(249,117,131,0)}100%{box-shadow:0 0 0 0 rgba(249,117,131,0)}`,x=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${i.w4.spacing.lg};gap:${i.w4.spacing.lg};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(249,117,131,0.06) 0%,transparent 70%),#080b12;`,b=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${m} 0.3s ease;`,y=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;`,w=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,v=r.default.div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:#ef4444;animation:${g} 0.5s ease;`,$=r.default.span`font-size:72px;animation:${f} 1s ease-in-out infinite;`,k=r.default.div`
  position:relative;width:${320}px;height:${320}px;
  border-radius:50%;background:radial-gradient(circle,${i.w4.colors.surface} 60%,rgba(249,117,131,0.15) 100%);
  border:3px solid ${i.w4.colors.border};overflow:hidden;touch-action:none;
  animation:${h} 2s ease-in-out infinite;
`,j=r.default.div`
  position:absolute;inset:0;border-radius:50%;
  background:radial-gradient(circle,transparent 55%,rgba(249,117,131,0.08) 70%,rgba(249,117,131,0.2) 100%);
  pointer-events:none;
`,z=r.default.div`
  position:absolute;
  left:${({x:e})=>e-20}px;top:${({y:e})=>e-20}px;
  transition:opacity 0.3s;opacity:${({alive:e})=>e?1:.2};filter:${({alive:e})=>e?"none":"grayscale(1)"};
  pointer-events:none;
`,S=r.default.div`
  position:absolute;font-size:28px;line-height:1;
  left:${({x:e})=>e-14}px;top:${({y:e})=>e-14}px;
  pointer-events:none;animation:${f} 1s ease-in-out infinite;
`,T=r.default.div`font-size:18px;font-weight:700;color:${i.w4.colors.mainText};`;function M({lang:e}){const[o,t]=(0,a.useState)("menu"),[r,n]=(0,a.useState)(3),[i,m]=(0,a.useState)({x:160,y:160,vx:0,vy:0,charIdx:0,alive:!0,score:0}),[f,g]=(0,a.useState)([]),[h,M]=(0,a.useState)([]),[C,A]=(0,a.useState)({dx:0,dy:-1}),[R,B]=(0,a.useState)(0),_=(0,a.useRef)(i);_.current=i;const E=(0,a.useRef)(f);E.current=f;const I=(0,a.useRef)(C);I.current=C;const P=(0,a.useRef)(0),F=160,L=140,O=(0,a.useCallback)(()=>{const e=Math.floor(Math.random()*l.L.length),o=Array.from({length:3},(o,t)=>{const a=2*Math.PI*t/3;return{x:F+80*Math.cos(a),y:F+80*Math.sin(a),vx:0,vy:0,charIdx:(e+t+1)%l.L.length,alive:!0,score:0}});g(o),E.current=o,m({x:F,y:F,vx:0,vy:0,charIdx:e,alive:!0,score:0}),_.current={x:F,y:F,vx:0,vy:0,charIdx:e,alive:!0,score:0},M([]),B(0),n(3),t("countdown");let a=3;const r=setInterval(()=>{a--,n(a),a<=0&&(clearInterval(r),t("playing"))},800)},[F]),D=(0,a.useCallback)(()=>{_.current.alive&&m(e=>({...e,vx:e.vx+12*I.current.dx,vy:e.vy+12*I.current.dy}))},[]);return(0,a.useEffect)(()=>{if("playing"!==o)return;const e=setInterval(()=>{m(e=>{if(!e.alive)return e;let o=e.x+e.vx,t=e.y+e.vy,a=e.vx*d,r=e.vy*d;const n=o-F,i=t-F,s=Math.sqrt(n*n+i*i);if(s>L){const l=Math.atan2(i,n);o=F+Math.cos(l)*L,t=F+Math.sin(l)*L;const c=a*Math.cos(l)+r*Math.sin(l);if(a-=2*c*Math.cos(l)*p,r-=2*c*Math.sin(l)*p,s>150)return{...e,x:o,y:t,vx:0,vy:0,alive:!1}}return{...e,x:o,y:t,vx:a,vy:r}}),g(e=>e.map(e=>{if(!e.alive)return e;let o=e.x+e.vx,t=e.y+e.vy,a=e.vx*d,r=e.vy*d;if(Math.random()<.02){const o=F-e.x,t=F-e.y,n=Math.sqrt(o*o+t*t)||1;a+=o/n*12*.6,r+=t/n*12*.6}const n=o-F,i=t-F,s=Math.sqrt(n*n+i*i);if(s>L){const l=Math.atan2(i,n);o=F+Math.cos(l)*L,t=F+Math.sin(l)*L;const c=a*Math.cos(l)+r*Math.sin(l);if(a-=2*c*Math.cos(l)*p,r-=2*c*Math.sin(l)*p,s>150)return{...e,x:o,y:t,vx:0,vy:0,alive:!1}}const l=o-_.current.x,c=t-_.current.y;if(Math.sqrt(l*l+c*c)<40&&_.current.alive){const e=Math.atan2(c,l);a+=4*Math.cos(e),r+=4*Math.sin(e)}return{...e,x:o,y:t,vx:a,vy:r}}))},16);return()=>clearInterval(e)},[o,F,L]),(0,a.useEffect)(()=>{if("playing"!==o)return;const e=setInterval(()=>{if(!_.current.alive)return clearInterval(e),void setTimeout(()=>t("gameover"),500);B(e=>e+1)},1e3);return()=>clearInterval(e)},[o]),(0,a.useEffect)(()=>{if("playing"!==o)return;const e=setInterval(()=>{const e=++P.current,o=Math.random()*Math.PI*2,t=Math.random()*L*.8;M(a=>{return[...a,{x:F+Math.cos(o)*t,y:F+Math.sin(o)*t,emoji:(r=u,r[Math.floor(Math.random()*r.length)]),id:e}];var r}),setTimeout(()=>M(o=>o.filter(o=>o.id!==e)),3e3)},5e3);return()=>clearInterval(e)},[o,F,L]),(0,a.useEffect)(()=>{if("playing"!==o)return;const e=e=>{"Space"===e.code&&(e.preventDefault(),D()),"ArrowUp"===e.key&&A({dx:0,dy:-1}),"ArrowDown"===e.key&&A({dx:0,dy:1}),"ArrowLeft"===e.key&&A({dx:-1,dy:0}),"ArrowRight"===e.key&&A({dx:1,dy:0})};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,D]),"menu"===o?(0,c.jsxs)(x,{children:[(0,c.jsx)(l.G,{paletteIndex:0,pose:"idle",size:72}),(0,c.jsx)(b,{children:"Sumo Zoo"}),(0,c.jsx)(y,{children:"pt"===e?"Empurra os outros para fora da arena!":"Bump others off the arena!"}),(0,c.jsx)(w,{accent:"#ef4444",onClick:O,children:"pt"===e?"Jogar!":"Play!"})]}):"countdown"===o?(0,c.jsx)(x,{children:(0,c.jsx)(v,{children:r>0?r:"🐾"},r)}):"gameover"===o?(0,c.jsxs)(x,{children:[(0,c.jsx)($,{children:"💥"}),(0,c.jsx)(b,{children:"pt"===e?"Eliminado!":"Eliminated!"}),(0,c.jsxs)(T,{children:["⏱️ ",R,"s"]}),(0,c.jsx)(w,{accent:"#ef4444",onClick:O,children:"pt"===e?"Outra Vez":"Again"})]}):(0,c.jsxs)(x,{children:[(0,c.jsxs)(T,{children:["⏱️ ",R,"s"]}),(0,c.jsxs)(k,{children:[(0,c.jsx)(j,{}),(0,c.jsx)(z,{x:i.x,y:i.y,alive:i.alive,children:(0,c.jsx)(l.G,{paletteIndex:i.charIdx,pose:i.alive?"idle":"dead",size:40})}),f.map((e,o)=>(0,c.jsx)(z,{x:e.x,y:e.y,alive:e.alive,children:(0,c.jsx)(l.G,{paletteIndex:e.charIdx,pose:e.alive?"idle":"dead",size:40})},o)),h.map(e=>(0,c.jsx)(S,{x:e.x,y:e.y,children:e.emoji},e.id))]}),(0,c.jsx)(s.UO,{onMove:e=>{0===e.dx&&0===e.dy||(Math.abs(e.dx)>=Math.abs(e.dy)?A({dx:e.dx,dy:0}):A({dx:0,dy:e.dy}))},actions:[{id:"dash",label:"💨",color:"#dc2626",onPress:D}]})]})}},9253(e,o,t){t.d(o,{$:()=>Be});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5),l=t(233),c=t(1364),d=t(5723);const p=13,u=11,m=[[-1,0],[1,0],[0,-1],[0,1]],f={up:[-1,0],down:[1,0],left:[0,-1],right:[0,1]},g=["fire","bomb","speed","ghost","shield"],h=[30,30,20,10,10],x=[{name:{pt:"Blaze",en:"Blaze"},palette:0,accent:"#ff4444",desc:{pt:"Rápido e furioso",en:"Fast & furious"}},{name:{pt:"Pixel",en:"Pixel"},palette:1,accent:"#44bb44",desc:{pt:"Equilibrado",en:"Balanced"}},{name:{pt:"Sparky",en:"Sparky"},palette:2,accent:"#ff6644",desc:{pt:"Explosivo!",en:"Explosive!"}},{name:{pt:"Shadow",en:"Shadow"},palette:3,accent:"#cc44cc",desc:{pt:"Misterioso",en:"Mysterious"}},{name:{pt:"Bolt",en:"Bolt"},palette:4,accent:"#ffaa00",desc:{pt:"Veloz como um raio",en:"Lightning fast"}},{name:{pt:"Frost",en:"Frost"},palette:5,accent:"#00cccc",desc:{pt:"Frio e calculista",en:"Cool & calculated"}},{name:{pt:"Ruby",en:"Ruby"},palette:6,accent:"#8855cc",desc:{pt:"Brilhante",en:"Brilliant"}},{name:{pt:"Nova",en:"Nova"},palette:7,accent:"#ff4488",desc:{pt:"Estrela em ascensão",en:"Rising star"}},{name:{pt:"Bomber",en:"Bomber"},palette:8,accent:"#4488ff",desc:{pt:"O clássico!",en:"The classic!"}},{name:{pt:"Knight",en:"Knight"},palette:9,accent:"#ff2222",desc:{pt:"Cavaleiro negro",en:"Dark knight"}},{name:{pt:"Creeper",en:"Creeper"},palette:10,accent:"#55ee55",desc:{pt:"Sssssss...BOOM!",en:"Sssssss...BOOM!"}},{name:{pt:"Ender",en:"Ender"},palette:11,accent:"#9944ff",desc:{pt:"Do outro mundo",en:"From another world"}}],b={title:{pt:"BombBrawl",en:"BombBrawl"},subtitle:{pt:"Escolhe o teu bomber!",en:"Choose your bomber!"},start:{pt:"Começar!",en:"Start!"},youWin:{pt:"Ganhaste! 🎉",en:"You Win! 🎉"},youLose:{pt:"Perdeste! 💥",en:"You Lose! 💥"},draw:{pt:"Empate!",en:"Draw!"},playAgain:{pt:"Jogar de novo",en:"Play Again"},back:{pt:"Voltar",en:"Back"},go:{pt:"VAI!",en:"GO!"},bombs:{pt:"Bombas",en:"Bombs"},range:{pt:"Alcance",en:"Range"},speed:{pt:"Velocidade",en:"Speed"},controls:{pt:"Setas/WASD + Espaço",en:"Arrows/WASD + Space"},controlsMobile:{pt:"D-pad + Botão 💣",en:"D-pad + 💣 Button"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},waiting:{pt:"À espera…",en:"Waiting…"},startMatch:{pt:"Iniciar!",en:"Start Match!"}};function y(e,o){return b[e]?.["pt"===o?"pt":"en"]??e}let w=null,v=!1;function $(e,o,t="square",a=.12){try{const r=v?(w||(w=new AudioContext),w):null;if(!r)return;const n=r.createOscillator(),i=r.createGain();n.type=t,n.frequency.setValueAtTime(e,r.currentTime),i.gain.setValueAtTime(a,r.currentTime),i.gain.exponentialRampToValueAtTime(.001,r.currentTime+o),n.connect(i).connect(r.destination),n.start(),n.stop(r.currentTime+o)}catch{}}function k(){$(200,.15,"square",.1),$(100,.3,"sawtooth",.18)}function j(){$(440,.08,"square",.1),setTimeout(()=>$(660,.08,"square",.1),80),setTimeout(()=>$(880,.12,"square",.1),160)}function z(){$(300,.1,"square",.12),setTimeout(()=>$(200,.15,"square",.1),100),setTimeout(()=>$(100,.3,"sawtooth",.15),200)}function S(){$(440,.12,"square",.08)}const T=[[0,0],[0,1],[1,0],[0,12],[0,11],[1,12],[10,0],[10,1],[9,0],[10,12],[10,11],[9,12]];function M(e,o){return T.some(([t,a])=>t===e&&a===o)}function C(){const e=h.reduce((e,o)=>e+o,0);let o=Math.random()*e;for(let e=0;e<g.length;e++)if(o-=h[e],o<=0)return g[e];return"fire"}function A(e,o,t,a){return!(o<0||o>=u||t<0||t>=p||1===e[o][t]||2===e[o][t]&&!a)}function R(e,o){const t=new Set;for(const a of e)if(!a.detonated){t.add(`${a.row},${a.col}`);for(const[e,r]of m)for(let n=1;n<=a.range;n++){const i=a.row+e*n,s=a.col+r*n;if(i<0||i>=u||s<0||s>=p||1===o[i][s])break;if(t.add(`${i},${s}`),2===o[i][s])break}}return t}function B(e,o){return-1===e?"up":1===e?"down":-1===o?"left":1===o?"right":null}function _(e,o,t,a){let r=0;for(const[n,i]of m)for(let s=1;s<=t;s++){const t=e+n*s,l=o+i*s;if(t<0||t>=u||l<0||l>=p||1===a[t][l])break;if(2===a[t][l]){r++;break}}return r}function E(e,o,t,a){if(e.activeBombs>=e.maxBombs)return null;if(t.bombs.some(o=>!o.detonated&&o.row===e.row&&o.col===e.col))return null;const r=[...t.bombs,{id:-1,row:e.row,col:e.col,owner:o,timer:2500,range:e.range,detonated:!1}],n=R(r,t.grid),i=new Set(r.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),s=new Set;s.add(`${e.row},${e.col}`);const l=[];for(const[o,r]of m){const c=e.row+o,d=e.col+r,p=`${c},${d}`;if(A(t.grid,c,d,a)&&!i.has(p)){const e=B(o,r);if(!n.has(p))return e;s.add(p),l.push({r:c,c:d,firstDir:e})}}for(;l.length>0;){const{r:e,c:o,firstDir:r}=l.shift();for(const[c,d]of m){const p=e+c,u=o+d,m=`${p},${u}`;if(!s.has(m)&&A(t.grid,p,u,a)&&!i.has(m)){if(!n.has(m))return r;s.add(m),l.push({r:p,c:u,firstDir:r})}}}return null}function I(e,o,t,a,r,n){const i=new Set;i.add(`${t},${a}`);const s=new Set(e.bombs.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),l=[];for(const[c,d]of m){const p=t+c,u=a+d,m=`${p},${u}`;if(A(e.grid,p,u,n)&&!s.has(m)&&!o.has(m)){const e=B(c,d);if(r(p,u))return e;i.add(m),l.push({r:p,c:u,firstDir:e})}}for(;l.length>0;){const{r:t,c:a,firstDir:c}=l.shift();for(const[d,p]of m){const u=t+d,m=a+p,f=`${u},${m}`;if(!i.has(f)&&A(e.grid,u,m,n)&&!s.has(f)&&!o.has(f)){if(r(u,m))return c;i.add(f),l.push({r:u,c:m,firstDir:c})}}}return null}function P(e,o,t){const a=R(t.bombs,t.grid),r=a.has(`${e.row},${e.col}`),n=e.ghost>0,i=e.activeBombs<e.maxBombs,s=t.bombs.some(o=>!o.detonated&&o.row===e.row&&o.col===e.col),l=t.bombs.filter(e=>!e.detonated&&e.owner===o).length,c=i&&!s&&0===l;if(r){const o=new Set(t.bombs.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),r=new Set;r.add(`${e.row},${e.col}`);const i=[];for(const[s,l]of m){const c=e.row+s,d=e.col+l,p=`${c},${d}`;if(A(t.grid,c,d,n)&&!o.has(p)){const e=B(s,l);if(!a.has(p))return{move:e,placeBomb:!1};r.add(p),i.push({r:c,c:d,firstDir:e})}}for(;i.length>0;){const{r:e,c:s,firstDir:l}=i.shift();for(const[c,d]of m){const p=e+c,u=s+d,m=`${p},${u}`;if(!r.has(m)&&A(t.grid,p,u,n)&&!o.has(m)){if(!a.has(m))return{move:l,placeBomb:!1};r.add(m),i.push({r:p,c:u,firstDir:l})}}}for(const[o,a]of m){const r=e.row+o,i=e.col+a;if(A(t.grid,r,i,n))return{move:B(o,a),placeBomb:!1}}return{move:null,placeBomb:!1}}const d=t.bombs.find(t=>!t.detonated&&t.owner!==o&&Math.abs(t.row-e.row)+Math.abs(t.col-e.col)<=1);if(d){const o=I(t,a,e.row,e.col,(e,o)=>!a.has(`${e},${o}`)&&Math.abs(e-d.row)+Math.abs(o-d.col)>2,n);if(o)return{move:o,placeBomb:!1}}const f=I(t,a,e.row,e.col,(e,o)=>t.powerUps.some(t=>t.row===e&&t.col===o),n);if(f)return{move:f,placeBomb:!1};const g=function(e,o,t){let a=null;for(let r=0;r<t.players.length;r++){if(r===o||!t.players[r].alive)continue;const n=Math.abs(t.players[r].row-e.row)+Math.abs(t.players[r].col-e.col);(!a||n<a.dist)&&(a={idx:r,dist:n})}return a}(e,o,t);if("aggressive"===e.personality&&g){const r=t.players[g.idx];if(g.dist<=2&&c&&function(e,o,t,a,r){for(const[n,i]of m)for(let s=1;s<=t;s++){const t=e+n*s,l=o+i*s;if(t<0||t>=u||l<0||l>=p||1===a.grid[t][l])break;if(2===a.grid[t][l])break;for(let e=0;e<a.players.length;e++)if(e!==r&&a.players[e].alive&&a.players[e].row===t&&a.players[e].col===l)return!0}return!1}(e.row,e.col,e.range,t,o)){const a=E(e,o,t,n);if(a)return{move:a,placeBomb:!0}}const i=I(t,a,e.row,e.col,(e,o)=>e===r.row&&o===r.col,n);if(i)return{move:i,placeBomb:!1}}if("cautious"===e.personality&&g&&g.dist<=3){const o=t.players[g.idx],r=I(t,a,e.row,e.col,(e,t)=>Math.abs(e-o.row)+Math.abs(t-o.col)>5,n);if(r)return{move:r,placeBomb:!1}}if("chaotic"===e.personality&&g){if(g.dist<=3&&c&&Math.random()<.25){const a=E(e,o,t,n);if(a)return{move:a,placeBomb:!0}}if(Math.random()<.5){const o=t.players[g.idx],r=I(t,a,e.row,e.col,(e,t)=>e===o.row&&t===o.col,n);if(r)return{move:r,placeBomb:!1}}}if(c){if(_(e.row,e.col,e.range,t.grid)>=1){const a=E(e,o,t,n);if(a)return{move:a,placeBomb:!0}}const r=I(t,a,e.row,e.col,(o,a)=>_(o,a,e.range,t.grid)>=1,n);if(r)return{move:r,placeBomb:!1}}if(g){const r=t.players[g.idx];if(g.dist<=2&&c){const a=E(e,o,t,n);if(a)return{move:a,placeBomb:!0}}const i=I(t,a,e.row,e.col,(e,o)=>Math.abs(e-r.row)+Math.abs(o-r.col)<=1,n);if(i)return{move:i,placeBomb:!1}}const h=[...m].sort(()=>Math.random()-.5);for(const[o,r]of h){const i=e.row+o,s=e.col+r;if(A(t.grid,i,s,n)&&!a.has(`${i},${s}`)&&!t.bombs.some(e=>!e.detonated&&e.row===i&&e.col===s))return{move:B(o,r),placeBomb:!1}}return{move:null,placeBomb:!1}}function F(e,o){const t=[o],a=new Set;for(;t.length>0;){const o=t.shift();if(a.has(o))continue;a.add(o);const r=e.bombs.find(e=>e.id===o);if(!r||r.detonated)continue;r.detonated=!0,k();const n=e.players[r.owner];n&&(n.activeBombs=Math.max(0,n.activeBombs-1)),e.explosions.push({row:r.row,col:r.col,timer:450});for(const[o,a]of m)for(let n=1;n<=r.range;n++){const i=r.row+o*n,s=r.col+a*n;if(i<0||i>=u||s<0||s>=p)break;if(1===e.grid[i][s])break;if(e.explosions.push({row:i,col:s,timer:450}),2===e.grid[i][s]){e.grid[i][s]=0,e.gridDirty=!0,Math.random()<.35&&e.powerUps.push({row:i,col:s,type:C()});break}const l=e.bombs.find(e=>!e.detonated&&e.row===i&&e.col===s);l&&t.push(l.id)}}e.bombs=e.bombs.filter(e=>!e.detonated)}const L=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,O=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}`,D=n.keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.12)}`,N=n.keyframes`0%{transform:scale(0.4);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}`,H=n.keyframes`0%{opacity:1;transform:scale(0.5)}30%{transform:scale(1.1)}100%{opacity:0;transform:scale(1)}`,G=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}`,Y=n.keyframes`0%,100%{box-shadow:0 0 0 2px rgba(88,166,255,0.4)}50%{box-shadow:0 0 0 4px rgba(88,166,255,0.7)}`,q=n.keyframes`0%,100%{opacity:0.5}50%{opacity:0.8}`,V=n.keyframes`0%,100%{box-shadow:0 0 12px var(--accent)}50%{box-shadow:0 0 24px var(--accent)}`,W=n.keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`,J=n.keyframes`0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.4) rotate(15deg)}`,X=n.keyframes`0%,100%{transform:translateY(0)}30%{transform:translateY(-16px)}`,U=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Content top-aligned + scrollable — Safari's flex "justify-content: center" clips the top
     when content overflows, so we avoid it entirely. Auto margins on the inner content
     (via the first child's margin-top) keep it visually centered when there's room. */
  padding: ${i.w4.spacing.md};
  gap: ${i.w4.spacing.sm};
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  background: radial-gradient(ellipse 60% 50% at 30% 20%, rgba(249, 117, 131, 0.05) 0%, transparent 70%), #080b12;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  /* Centering without clipping: first/last children expand to push content to the middle
     when viewport is tall, and collapse when content needs every pixel. */
  & > :first-of-type { margin-top: auto; }
  & > :last-child { margin-bottom: auto; }

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.sm};
    gap: 6px;
  }
`,K=r.default.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin: 0;
  text-align: center;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ff4444, #ff8844, #ffcc44);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${L} 0.4s ease;
`,Q=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  margin: 0;
  text-align: center;
  animation: ${L} 0.4s ease 0.1s both;
`,Z=r.default.div`
  display: flex;
  gap: 4px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 20px;
  padding: 3px;
  animation: ${L} 0.4s ease 0.08s both;
`,ee=r.default.button`
  padding: 8px 20px;
  border-radius: 16px;
  border: none;
  background: ${({active:e,color:o})=>e?(o??i.w4.colors.accent)+"20":"transparent"};
  color: ${({active:e,color:o})=>e?o??i.w4.colors.accent:i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 36px;
  &:hover { color: ${({color:e})=>e??i.w4.colors.accent}; }
`,oe=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.lg};
  padding: ${i.w4.spacing.lg};
  overflow-y: auto;
  min-height: 0;
`,te=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`,ae=r.default.button`
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
`,re=r.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${i.w4.spacing.sm};
  max-width: 560px;
  width: 100%;
  animation: ${L} 0.4s ease 0.15s both;

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    max-width: 320px;
  }
`,ne=r.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.sm};
  background: ${({selected:e,accent:o})=>e?`${o}18`:i.w4.colors.surface};
  border: 2px solid ${({selected:e,accent:o})=>e?o:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  transition: all 0.2s ease;
  --accent: ${({accent:e})=>e};
  position: relative;
  overflow: hidden;

  ${({selected:e})=>e&&n.css`animation: ${V} 2s ease-in-out infinite;`}

  &:hover {
    border-color: ${({accent:e})=>e};
    transform: translateY(-2px);
  }
`,ie=r.default.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({accent:e})=>e};
`,se=r.default.span`
  font-size: 10px;
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
`,le=r.default.button`
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
  animation: ${L} 0.4s ease 0.25s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px ${({accent:e})=>e}50;
  }
  &:active { transform: translateY(-1px); }
`,ce=r.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 11, 18, 0.7);
  z-index: 20;
`,de=r.default.div`
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 900;
  color: ${({accent:e})=>e};
  text-shadow: 0 0 40px ${({accent:e})=>e}60;
  animation: ${O} 0.5s ease;
`,pe=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  animation: ${W} 0.3s ease;
  position: relative;
  width: 100%;
  max-width: 800px;
`,ue=r.default.div`
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
`,me=r.default.div`
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
`,fe=r.default.div`
  position: absolute;
  left: ${({c:e,size:o})=>e*o}px;
  top: ${({r:e,size:o})=>e*o}px;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
`,ge=(0,r.default)(fe)`
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
`,he=(0,r.default)(fe)`
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
`,xe=((0,r.default)(fe)`
  background: linear-gradient(170deg, #7a5a38 0%, #5a3e20 50%, #4a3018 100%);
  animation: ${J} 0.35s ease forwards;
  pointer-events: none;
`,(0,r.default)(fe)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${N} 0.2s ease;
  z-index: 5;

  .bomb-inner {
    animation: ${D} 0.6s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(255, 60, 20, 0.6)) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
  }
`),be=(0,r.default)(fe)`
  z-index: 8;
  pointer-events: none;
  border-radius: 4px;
  animation: ${H} ${450}ms ease-out forwards;
  background: ${({center:e})=>e?"radial-gradient(circle, #ffffff 0%, #ffee44 15%, #ffaa00 35%, #ff4400 60%, rgba(255, 30, 0, 0.3) 80%, transparent 100%)":"radial-gradient(circle, #ffee66 0%, #ff8822 30%, #ff4400 55%, rgba(255, 30, 0, 0.2) 80%, transparent 100%)"};
  box-shadow: ${({center:e})=>e?"0 0 20px rgba(255, 150, 0, 0.6), 0 0 40px rgba(255, 80, 0, 0.3)":"0 0 12px rgba(255, 120, 0, 0.4), 0 0 24px rgba(255, 60, 0, 0.2)"};
`,ye=(0,r.default)(fe)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${G} 1.5s ease-in-out infinite;
  z-index: 3;
  font-size: ${({size:e})=>Math.max(14,.5*e)}px;

  &::before {
    content: '';
    position: absolute;
    inset: 15%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  }
`,we=r.default.span`
  filter:
    drop-shadow(0 0 6px ${({glowColor:e})=>e})
    drop-shadow(0 0 12px ${({glowColor:e})=>e}80);
`,ve=r.default.div`
  position: absolute;
  left: ${({c:e,size:o})=>e*o}px;
  top: ${({r:e,size:o})=>e*o}px;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.12s linear, top 0.12s linear;
  z-index: 10;
  opacity: ${({alive:e})=>e?1:.3};
  filter: ${({alive:e,ghostActive:o})=>e?o?"brightness(1.2) saturate(0.5)":"drop-shadow(0 2px 3px rgba(0,0,0,0.6))":"grayscale(1) brightness(0.5)"};
  ${({ghostActive:e})=>e&&n.css`animation: ${q} 1s ease-in-out infinite;`}
  ${({shieldActive:e})=>e&&n.css`animation: ${Y} 1.5s ease-in-out infinite;`}
`,$e=r.default.div`
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
`,ke=r.default.div`
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
`,ze=r.default.span`
  color: ${({color:e})=>e??i.w4.colors.mainText};
  font-weight: 800;
`,Se=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.lg};
  animation: ${L} 0.4s ease;
`,Te=r.default.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  font-weight: 900;
  margin: 0;
  color: ${({win:e})=>e?"#3fb950":"#f97583"};
  text-align: center;
`,Me=r.default.div`
  animation: ${X} 1s ease-in-out infinite;
`,Ce=r.default.div`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  opacity: 0.7;
  animation: ${L} 0.4s ease 0.3s both;
`,Ae={fire:"🔥",bomb:"💣",speed:"🏃",ghost:"👻",shield:"🛡️"},Re={fire:"#ff6622",bomb:"#ff4444",speed:"#44ff44",ghost:"#aa88ff",shield:"#4488ff"};function Be({lang:e,canOnline:o=!1}){const[t,r]=(0,a.useState)("charselect"),[n,i]=(0,a.useState)("solo"),[m,g]=(0,a.useState)(0),[h,b]=(0,a.useState)(3),[,k]=(0,a.useState)(0),T=(0,a.useRef)(null),C=(0,a.useRef)(null),R=(0,a.useRef)(!1),B=(0,a.useRef)(null),_=(0,a.useRef)(null),[E,I]=(0,a.useState)(40),L=(0,a.useRef)([]),O=((0,a.useRef)(0),(0,a.useRef)(new Map)),D=(0,a.useRef)(0),N=(0,a.useRef)(new Map),H=(0,a.useRef)(0),G="online"===n,Y=(0,a.useRef)(t);Y.current=t;const q=(0,a.useRef)({updatePlayerCount:()=>{}}),V=(0,a.useCallback)(e=>{const o=J.current;if("guest-joined"===e.type){const t=[...o.room?.players??[],{id:e.playerId,name:e.name,isHost:!1}];o.addPlayer({id:e.playerId,name:e.name,isHost:!1}),q.current.updatePlayerCount(t.length),o.sendEvent({type:"host-ack",name:(0,c.zE)(),playerId:o.room?.playerId??"",players:t})}else if("host-ack"===e.type)o.setPlayers(e.players);else if("player-list"===e.type)o.setPlayers(e.players);else if("player-left"===e.type){e.playerId&&o.removePlayer(e.playerId);const t=Y.current;"countdown"!==t&&"playing"!==t&&"gameover"!==t||(Le(),"host"===o.room?.role&&q.current.updatePlayerCount(0),o.leaveRoom(),r("charselect"),i("solo"))}else if("game-state"===e.type){const o=e.payload;if("input"===o.action){const e=o.playerId;O.current.set(e,{dir:o.dir,bomb:o.bomb})}else if("start"===o.action){const e=o.gameState;T.current=e,D.current=o.yourIndex;const t=o.playerIdMap;N.current=new Map(Object.entries(t)),r("countdown"),b(3);let a=3;const n=setInterval(()=>{a--,a<=0?(clearInterval(n),r("playing")):b(a)},700)}else if("tick"===o.action){const e=T.current;if(!e)return;const t=o.state;e.players=t.players,e.bombs=t.bombs,e.explosions=t.explosions,e.powerUps=t.powerUps,t.grid&&(e.grid=t.grid),e.running=t.running,e.winner=t.winner,e.elapsed=t.elapsed,k(e=>e+1)}}},[]),W=(0,c.Ky)({gameId:"bombbrawl",playerName:(0,c.zE)(),onEvent:V}),J=(0,a.useRef)(W);J.current=W;const X=(0,c.zj)({gameId:"bombbrawl",enabled:"lobby"===t&&"online"===n});q.current=X;const fe=X.rooms;(0,a.useEffect)(()=>{function e(){const e=window.innerWidth>=768?48:24,o=Math.min(window.innerWidth-e,780),t=window.innerWidth>=1024?80:180,a=window.innerHeight-t,r=Math.floor(o/p),n=Math.floor(a/u),i=window.innerWidth>=768?60:48;I(Math.max(26,Math.min(i,r,n)))}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const Be=p*E,_e=u*E,Ee=x[m].accent,Ie=(0,a.useCallback)(e=>{const o=function(){const e=[];for(let o=0;o<u;o++){e[o]=[];for(let t=0;t<p;t++)o%2==0&&t%2==0&&o>0&&o<10&&t>0&&t<12?e[o][t]=1:M(o,t)?e[o][t]=0:e[o][t]=Math.random()<.62?2:0}return e}(),t=[[0,0],[0,12],[10,0],[10,12]],a=["aggressive","cautious","chaotic"];let r;if(e&&e.length>0){const o=4;r=[];for(let n=0;n<o;n++){const o=n<e.length,i=o?e[n].paletteIdx:Math.floor(Math.random()*l.L.length);r.push({row:t[n][0],col:t[n][1],alive:!0,maxBombs:1,activeBombs:0,range:1,speed:220,ghost:0,shield:!1,paletteIdx:i,dir:null,isBot:!o,personality:o?"aggressive":a[(n-e.length)%3],moveCooldown:0,aiCooldown:200+200*Math.random(),walking:!1,flipX:!1})}}else{const e=new Set([x[m].palette]);r=t.map((o,t)=>{let r;if(0===t)r=x[m].palette;else{do{r=Math.floor(Math.random()*l.L.length)}while(e.has(r));e.add(r)}return{row:o[0],col:o[1],alive:!0,maxBombs:1,activeBombs:0,range:1,speed:220,ghost:0,shield:!1,paletteIdx:r,dir:null,isBot:0!==t,personality:0===t?"aggressive":a[(t-1)%3],moveCooldown:0,aiCooldown:200+200*Math.random(),walking:!1,flipX:!1}})}const n={grid:o,players:r,bombs:[],explosions:[],powerUps:[],running:!0,winner:-1,bombIdCounter:0,elapsed:0};return T.current=n,L.current=[],n},[m]),Pe=(0,a.useCallback)(e=>{const o=T.current;if(!o)return;const t=o.players[e];!t.alive||t.activeBombs>=t.maxBombs||o.bombs.some(e=>e.row===t.row&&e.col===t.col)||(t.activeBombs++,$(120,.3,"sawtooth",.15),setTimeout(()=>$(80,.4,"sawtooth",.2),50),o.bombs.push({id:o.bombIdCounter++,row:t.row,col:t.col,owner:e,timer:2500,range:t.range,detonated:!1}))},[]),Fe=(0,a.useCallback)(()=>{B.current&&clearInterval(B.current);const e=16;H.current=0,B.current=setInterval(()=>{const o=T.current;if(!o||!o.running)return;o.elapsed+=e;for(let t=0;t<o.players.length;t++){const a=o.players[t];if(a.alive){if(a.ghost>0&&(a.ghost=Math.max(0,a.ghost-e)),a.isBot){if(a.aiCooldown-=e,a.aiCooldown<=0){const e=P(a,t,o);a.dir=e.move,e.placeBomb&&(Pe(t),a.moveCooldown=0),a.aiCooldown="aggressive"===a.personality?80+80*Math.random():"chaotic"===a.personality?100+120*Math.random():120+140*Math.random()}}else if(t===D.current)a.dir=C.current,R.current&&(Pe(t),R.current=!1);else if(G)for(const[e,o]of N.current.entries())if(o===t){const o=O.current.get(e);o&&(a.dir=o.dir,o.bomb&&(Pe(t),o.bomb=!1));break}if(a.moveCooldown-=e,a.moveCooldown<=0&&a.dir){const e=f[a.dir];if(e){const t=a.row+e[0],r=a.col+e[1],n=a.ghost>0;A(o.grid,t,r,n)&&!o.bombs.some(e=>e.row===t&&e.col===r)&&(a.row=t,a.col=r,a.moveCooldown=a.speed,a.walking=!0,a.flipX=e[1]<0)}}a.walking=a.moveCooldown>.5*a.speed}}for(const t of o.bombs)t.detonated||(t.timer-=e,t.timer<=0&&F(o,t.id));o.explosions=o.explosions.filter(o=>(o.timer-=e,o.timer>0));const t=new Set(o.explosions.map(e=>`${e.row},${e.col}`));for(const e of o.players)e.alive&&t.has(`${e.row},${e.col}`)&&(e.shield?e.shield=!1:(e.alive=!1,z()));for(const e of o.players){if(!e.alive)continue;const t=o.powerUps.findIndex(o=>o.row===e.row&&o.col===e.col);if(-1!==t){const a=o.powerUps[t];switch(j(),a.type){case"fire":e.range=Math.min(6,e.range+1);break;case"bomb":e.maxBombs=Math.min(5,e.maxBombs+1);break;case"speed":e.speed=Math.max(100,e.speed-40);break;case"ghost":e.ghost=6e3;break;case"shield":e.shield=!0}o.powerUps.splice(t,1)}}const a=o.players.filter(e=>e.alive);if(a.length<=1&&(o.running=!1,o.winner=1===a.length?o.players.indexOf(a[0]):-1),G&&"host"===W.room?.role&&(H.current++,H.current%5==0||!o.running)){const e={players:o.players,bombs:o.bombs,explosions:o.explosions,powerUps:o.powerUps,running:o.running,winner:o.winner,elapsed:o.elapsed};!o.gridDirty&&o.running||(e.grid=o.grid,o.gridDirty=!1),W.sendEvent({type:"game-state",payload:{action:"tick",state:e}})}k(e=>e+1)},e)},[Pe,G,W]),Le=(0,a.useCallback)(()=>{B.current&&(clearInterval(B.current),B.current=null)},[]),Oe=(0,a.useRef)({dir:null,bomb:!1});(0,a.useEffect)(()=>{if(!G||"guest"!==J.current.room?.role||"playing"!==t)return;const e=setInterval(()=>{const e=J.current.room;if(!e)return;const o=C.current,t=R.current;(o!==Oe.current.dir||t)&&(Oe.current={dir:o,bomb:t},J.current.sendEvent({type:"game-state",payload:{action:"input",playerId:e.playerId,dir:o,bomb:t}}),t&&(R.current=!1))},50);return()=>clearInterval(e)},[G,t]),(0,a.useEffect)(()=>{if("playing"!==t)return;const e={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right",W:"up",S:"down",A:"left",D:"right"},o=new Set;function a(t){if(" "===t.key||"Enter"===t.key)return t.preventDefault(),void(R.current=!0);const a=e[t.key];a&&(t.preventDefault(),o.add(t.key),C.current=a)}function r(t){if(o.delete(t.key),0===o.size)C.current=null;else{const t=[...o].pop();C.current=e[t]??null}}return window.addEventListener("keydown",a),window.addEventListener("keyup",r),()=>{window.removeEventListener("keydown",a),window.removeEventListener("keyup",r)}},[t]);const De=(0,a.useCallback)(()=>{v=!0,Ie(),D.current=0,r("countdown"),b(3),S();let e=3;const o=setInterval(()=>{e--,e<=0?(clearInterval(o),r("playing"),Fe(),$(880,.2,"square",.12)):(b(e),S())},700)},[Ie,Fe]),Ne=(0,a.useCallback)(()=>{if(!W.room||"host"!==W.room.role)return;v=!0,X.unpublishRoom();const e=W.room.players,o=e.map((e,o)=>({id:e.id,paletteIdx:x[o%x.length].palette})),t=Ie(o);D.current=0;const a={};e.forEach((e,o)=>{a[e.id]=o}),N.current=new Map(Object.entries(a)),W.sendEvent({type:"game-state",payload:{action:"start",gameState:t,playerIdMap:a}}),e.forEach((e,o)=>{e.isHost||W.sendEvent({type:"game-state",payload:{action:"start",gameState:t,yourIndex:o,playerIdMap:a}})}),r("countdown"),b(3);let n=3;const i=setInterval(()=>{n--,n<=0?(clearInterval(i),r("playing"),Fe()):b(n)},700)},[W,Ie,Fe]);(0,a.useEffect)(()=>()=>{Le(),v=!1,w&&(w.close().catch(()=>{}),w=null),G&&(X.unpublishRoom(),W.leaveRoom())},[Le]);const He=T.current,{walls:Ge,blocks:Ye}=(0,a.useMemo)(()=>{if(!He)return{walls:[],blocks:[]};const e=[],o=[];for(let t=0;t<u;t++)for(let a=0;a<p;a++)1===He.grid[t][a]?e.push([t,a]):2===He.grid[t][a]&&o.push([t,a]);return{walls:e,blocks:o}},[He,He?.elapsed]);if("charselect"===t)return(0,d.jsxs)(U,{children:[(0,d.jsx)(K,{children:"💣 BombBrawl"}),(0,d.jsx)(Q,{children:y("subtitle",e)}),o&&(0,d.jsxs)(Z,{children:[(0,d.jsxs)(ee,{active:"solo"===n,color:"#f59e0b",onClick:()=>i("solo"),children:["🎯 ",y("solo",e)]}),(0,d.jsxs)(ee,{active:"online"===n,color:"#3fb950",onClick:()=>i("online"),children:["🌐 ",y("online",e)]})]}),(0,d.jsx)(re,{children:x.map((o,t)=>(0,d.jsxs)(ne,{accent:o.accent,selected:m===t,onClick:()=>g(t),children:[(0,d.jsx)(l.G,{paletteIndex:o.palette,pose:"idle",size:1.2*E}),(0,d.jsx)(ie,{accent:o.accent,children:o.name["pt"===e?"pt":"en"]}),(0,d.jsx)(se,{children:o.desc["pt"===e?"pt":"en"]})]},t))}),(0,d.jsx)(le,{accent:Ee,onClick:G?()=>r("lobby"):De,children:y(G?"online":"start",e)}),(0,d.jsx)(Ce,{children:"undefined"!=typeof window&&"ontouchstart"in window?y("controlsMobile",e):y("controls",e)})]});if("lobby"===t){const o="host"===W.room?.role,t=W.room?.players.length??0,a=o&&t>=2;return(0,d.jsxs)(U,{children:[(0,d.jsx)(K,{children:"💣 BombBrawl"}),W.room?.connected?(0,d.jsxs)(oe,{children:[(0,d.jsxs)(Q,{children:["👥 ",t,"/4 ","pt"===e?"jogadores":"players"]}),(0,d.jsx)(te,{children:W.room.players.map((e,o)=>(0,d.jsxs)(ne,{accent:x[o%x.length].accent,selected:!1,children:[(0,d.jsx)(l.G,{paletteIndex:x[o%x.length].palette,pose:"idle",size:52}),(0,d.jsx)(ie,{accent:x[o%x.length].accent,children:e.name}),e.isHost&&(0,d.jsx)(se,{children:"👑 Host"})]},e.id))}),a&&(0,d.jsx)(ae,{accent:"#3fb950",onClick:Ne,children:y("startMatch",e)}),!o&&(0,d.jsx)(Q,{children:y("waiting",e)})]}):(0,d.jsx)(c.XB,{lang:e,room:W.room,error:W.error,onCreateRoom:e=>{const{code:o,roomName:t}=W.createRoom();X.publishRoom({code:o,roomName:t,hostName:e,playerCount:1})},onJoinRoom:(e,o)=>W.joinRoom(e),onLeaveRoom:()=>{X.unpublishRoom(),W.leaveRoom(),r("charselect")},availableRooms:fe})]})}if("playing"===t&&He&&!He.running){const o=D.current,t=He.winner===o,a=-1===He.winner,n=He.winner>=0?He.players[He.winner].paletteIdx:m;return(0,d.jsx)(U,{children:(0,d.jsxs)(Se,{children:[(0,d.jsx)(Me,{children:(0,d.jsx)(l.G,{paletteIndex:n,pose:a?"dead":"jump",size:120})}),(0,d.jsx)(Te,{win:t,children:y(a?"draw":t?"youWin":"youLose",e)}),(0,d.jsx)(le,{accent:t?"#3fb950":"#f97583",onClick:()=>{Le(),G&&(X.unpublishRoom(),W.leaveRoom()),r("charselect")},children:y("playAgain",e)})]})})}if(!He)return(0,d.jsx)(U,{});const qe=D.current,Ve=He.players[qe]??He.players[0];return(0,d.jsx)(U,{children:(0,d.jsxs)(pe,{ref:_,children:[(0,d.jsxs)(ke,{children:[(0,d.jsx)(l.G,{paletteIndex:Ve.paletteIdx,pose:"idle",size:28}),(0,d.jsxs)(je,{children:["💣 ",(0,d.jsxs)(ze,{color:"#ff4444",children:[Ve.maxBombs-Ve.activeBombs,"/",Ve.maxBombs]})]}),(0,d.jsxs)(je,{children:["🔥 ",(0,d.jsx)(ze,{color:"#ff8844",children:Ve.range})]}),(0,d.jsxs)(je,{children:["🏃 ",(0,d.jsxs)(ze,{color:"#44ff44",children:[Math.round(100*(1-(Ve.speed-100)/120)),"%"]})]}),Ve.shield&&(0,d.jsx)(je,{children:"🛡️"}),Ve.ghost>0&&(0,d.jsxs)(je,{children:["👻 ",(0,d.jsxs)(ze,{color:"#aa88ff",children:[Math.ceil(Ve.ghost/1e3),"s"]})]})]}),(0,d.jsxs)(ue,{w:Be,h:_e,children:[(0,d.jsx)(me,{cellSize:E}),Ge.map(([e,o])=>(0,d.jsx)(ge,{r:e,c:o,size:E},`w${e},${o}`)),Ye.map(([e,o])=>(0,d.jsx)(he,{r:e,c:o,size:E},`b${e},${o}`)),He.powerUps.map((e,o)=>(0,d.jsx)(ye,{r:e.row,c:e.col,size:E,children:(0,d.jsx)(we,{glowColor:Re[e.type],children:Ae[e.type]})},`pu${e.row},${e.col}-${o}`)),He.bombs.map(e=>(0,d.jsx)(xe,{r:e.row,c:e.col,size:E,children:(0,d.jsx)("span",{className:"bomb-inner",style:{fontSize:Math.max(16,.6*E)},children:"💣"})},`bomb${e.id}`)),He.explosions.map((e,o)=>(0,d.jsx)(be,{r:e.row,c:e.col,size:E,center:e.timer>400},`exp${e.row},${e.col}-${o}`)),He.players.map((e,o)=>(0,d.jsxs)(ve,{r:e.row,c:e.col,size:E,alive:e.alive,ghostActive:e.ghost>0,shieldActive:e.shield,children:[e.isBot&&e.alive&&(0,d.jsx)($e,{color:x[e.paletteIdx%x.length]?.accent??"#888",children:"aggressive"===e.personality?"😈":"cautious"===e.personality?"🤓":"🤪"}),(0,d.jsx)(l.G,{paletteIndex:e.paletteIdx,pose:e.alive?e.walking?"walk":"idle":"dead",size:Math.round(.85*E),flipX:e.flipX})]},`p${o}`)),"countdown"===t&&(0,d.jsx)(ce,{children:(0,d.jsx)(de,{accent:Ee,children:0===h?y("go",e):h},h)})]}),"playing"===t&&(0,d.jsx)(s.UO,{onMove:e=>{let o=null;Math.abs(e.dx)>Math.abs(e.dy)?1===e.dx?o="right":-1===e.dx&&(o="left"):1===e.dy?o="down":-1===e.dy&&(o="up"),C.current=o},actions:[{id:"bomb",label:"💣",color:"#dc2626",onPress:()=>{R.current=!0}}]})]})})}},3054(e,o,t){t.d(o,{M:()=>B});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5723);const l=[{id:"tap-lots",emoji:"⚡",visual:"👆👆👆",instruction:{pt:"Toca muitas vezes!",en:"Tap many times!"},check:e=>e.taps>=10},{id:"dont-tap",emoji:"🤫",visual:"🚫👆",instruction:{pt:"NÃO toques!",en:"DON'T tap!"},check:e=>0===e.taps},{id:"tap-once",emoji:"☝️",visual:"1️⃣",instruction:{pt:"Toca só UMA vez!",en:"Tap ONCE only!"},check:e=>1===e.taps},{id:"hold-it",emoji:"✊",visual:"⏳",instruction:{pt:"Mantém premido!",en:"Hold the button!"},check:e=>e.holdTime>=2e3},{id:"tap-3",emoji:"3️⃣",visual:"👆👆👆",instruction:{pt:"Toca exatamente 3 vezes!",en:"Tap exactly 3 times!"},check:e=>3===e.taps},{id:"tap-5",emoji:"5️⃣",visual:"✋",instruction:{pt:"Toca exatamente 5 vezes!",en:"Tap exactly 5 times!"},check:e=>5===e.taps},{id:"quick-tap",emoji:"💨",visual:"⚡",instruction:{pt:"Toca super rápido!",en:"Tap super fast!"},check:e=>e.taps>=15},{id:"gentle",emoji:"🤏",visual:"😌",instruction:{pt:"Toca devagar… 2 vezes",en:"Tap slowly… 2 times"},check:e=>2===e.taps}];function c(e){return e[Math.floor(Math.random()*e.length)]}const d=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,p=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,u=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,m=n.keyframes`0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(88,166,255,0.5)}50%{transform:scale(1.05);box-shadow:0 0 0 14px rgba(88,166,255,0)}`,f=n.keyframes`0%,100%{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}`,g=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${i.w4.spacing.xl};gap:${i.w4.spacing.xl};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 40%,rgba(210,168,255,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${d} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:340px;`,y=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=r.default.span`font-size:72px;animation:${u} 1s ease-in-out infinite;`,v=r.default.div`
  display:flex;flex-direction:column;align-items:center;gap:${i.w4.spacing.lg};
  padding:${i.w4.spacing.xxl};background:${i.w4.colors.surface};border:3px solid ${i.w4.colors.accent};
  border-radius:24px;animation:${p} 0.4s ease;max-width:340px;width:100%;
`,$=r.default.span`font-size:80px;animation:${f} 1s ease-in-out infinite;`,k=r.default.span`font-size:36px;animation:${u} 1.2s ease-in-out infinite;`,j=r.default.p`font-size:${i.w4.typography.fontSizeLg};font-weight:700;color:${i.w4.colors.mainText};text-align:center;margin:0;`,z=r.default.button`
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
`,T=r.default.div`font-size:${i.w4.typography.fontSizeXl};font-weight:800;color:${i.w4.colors.accent};font-variant-numeric:tabular-nums;`,M=r.default.div`
  font-size:80px;animation:${p} 0.4s ease;
`,C=r.default.div`display:flex;gap:${i.w4.spacing.md};align-items:center;`,A=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};`,R=r.default.div`padding:8px 16px;background:rgba(249,158,11,0.12);border:1px solid rgba(249,158,11,0.3);border-radius:24px;font-size:16px;font-weight:700;color:#f59e0b;animation:${g} 0.3s ease;`;function B({lang:e}){const[o,t]=(0,a.useState)("menu"),[r,n]=(0,a.useState)(0),[d,p]=(0,a.useState)(0),[u,m]=(0,a.useState)(0),[f,g]=(0,a.useState)(null),[B,_]=(0,a.useState)({taps:0,held:!1,holdTime:0,movedDevice:!1}),[E,I]=(0,a.useState)(4),[P,F]=(0,a.useState)(null),[L,O]=(0,a.useState)(!1),[D,N]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-buttonmayhem-best")??"0")}catch{return 0}}),H=(0,a.useRef)(0),G=(0,a.useRef)(null),Y=(0,a.useRef)(null),q=(0,a.useRef)(B);q.current=B;const V=(0,a.useRef)(f);V.current=f;const W=(0,a.useRef)([]),J=(0,a.useCallback)(()=>{const e=l.filter(e=>!W.current.includes(e.id)),o=e.length>0?c(e):c(l);W.current=[...W.current,o.id].slice(-5),g(o),V.current=o,_({taps:0,held:!1,holdTime:0,movedDevice:!1}),q.current={taps:0,held:!1,holdTime:0,movedDevice:!1},t("rule-show"),setTimeout(()=>{I(4),t("playing")},3e3)},[]),X=(0,a.useCallback)(()=>{Y.current&&clearInterval(Y.current),G.current&&clearInterval(G.current);const e=V.current?.check(q.current)??!1;if(F(e),e){const e=5*u;p(o=>o+10+e),m(e=>e+1)}else m(0);t("result")},[u]);(0,a.useEffect)(()=>{if("playing"===o)return Y.current=setInterval(()=>{I(e=>e<=.3?(X(),0):e-.1)},100),()=>{Y.current&&clearInterval(Y.current)}},[o,X]);const U=(0,a.useCallback)(()=>{"playing"===o&&_(e=>({...e,taps:e.taps+1}))},[o]),K=(0,a.useCallback)(()=>{"playing"===o&&(O(!0),H.current=Date.now(),G.current=setInterval(()=>{const e=Date.now()-H.current;_(o=>({...o,held:!0,holdTime:e}))},50))},[o]),Q=(0,a.useCallback)(()=>{O(!1),G.current&&(clearInterval(G.current),G.current=null)},[]),Z=(0,a.useCallback)(()=>{const e=r+1;if(n(e),e>=8){const e=d;if(e>D){N(e);try{localStorage.setItem("atlantis-buttonmayhem-best",String(e))}catch{}}t("scores")}else J()},[r,d,D,J]),ee=(0,a.useCallback)(()=>{n(0),p(0),m(0),W.current=[],J()},[J]);return"menu"===o?(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:["🎲 ","pt"===e?"Botão Maluco!":"Button Mayhem!"]}),(0,s.jsx)(b,{children:"pt"===e?"Cada ronda tem uma regra diferente. Segue a instrução!":"Each round has a different rule. Follow the instruction!"}),D>0&&(0,s.jsxs)(b,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",D]}),(0,s.jsx)(y,{accent:"#d2a8ff",onClick:ee,children:"pt"===e?"Jogar!":"Play!"})]}):"rule-show"===o&&f?(0,s.jsxs)(h,{children:[(0,s.jsxs)(A,{children:["pt"===e?"Ronda":"Round"," ",r+1,"/",8]}),(0,s.jsxs)(v,{children:[(0,s.jsx)($,{children:f.emoji}),(0,s.jsx)(k,{children:f.visual}),(0,s.jsx)(j,{children:f.instruction["pt"===e?"pt":"en"]})]})]}):"result"===o?(0,s.jsxs)(h,{children:[(0,s.jsx)(M,{success:!!P,children:P?"✅":"❌"}),(0,s.jsx)(x,{children:P?"pt"===e?"Boa!":"Nice!":"pt"===e?"Ups!":"Oops!"}),(0,s.jsxs)(C,{children:[(0,s.jsxs)(A,{color:"#3fb950",children:["⭐ ",d]}),u>1&&(0,s.jsxs)(R,{children:["🔥 x",u]})]}),(0,s.jsx)(y,{accent:"#d2a8ff",onClick:Z,children:"➡️"})]}):"scores"===o?(0,s.jsxs)(h,{children:[(0,s.jsx)(w,{children:"🎲"}),(0,s.jsx)(x,{children:"pt"===e?"Resultados":"Results"}),(0,s.jsxs)(A,{color:"#3fb950",children:["⭐ ",d]}),d>=D&&d>0&&(0,s.jsxs)(b,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,s.jsx)(y,{accent:"#d2a8ff",onClick:()=>t("menu"),children:"Menu"})]}):(0,s.jsxs)(h,{children:[(0,s.jsxs)(C,{children:[(0,s.jsxs)(A,{children:["⭐ ",d]}),(0,s.jsxs)(T,{children:["👆 ",B.taps]}),u>1&&(0,s.jsxs)(R,{children:["🔥 x",u]})]}),(0,s.jsx)(S,{pct:E/4}),(0,s.jsx)(z,{pressing:L,onClick:U,onMouseDown:K,onMouseUp:Q,onTouchStart:e=>{e.preventDefault(),K(),U()},onTouchEnd:Q,children:f?.emoji??"?"}),B.held&&(0,s.jsxs)(b,{style:{color:i.w4.colors.accent},children:["✊ ",(B.holdTime/1e3).toFixed(1),"s"]})]})}},2708(e,o,t){t.d(o,{A:()=>E});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5723);const l=[{name:"burger",ingredients:["🍞","🥩","🧀"],result:"🍔"},{name:"pizza",ingredients:["🍞","🧀","🍅"],result:"🍕"},{name:"salad",ingredients:["🥬","🍅","🥑"],result:"🥗"},{name:"cake",ingredients:["🥚","🍫","🍓"],result:"🎂"},{name:"sushi",ingredients:["🍚","🥑","🥒"],result:"🍣"},{name:"sandwich",ingredients:["🍞","🥬","🥩"],result:"🥪"}],c=["🍞","🥩","🧀","🍅","🥬","🥑","🥚","🍫","🍓","🍚","🥒","🍯"],d=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,p=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,u=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}`,m=n.keyframes`0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}`,f=n.keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`,g=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;padding:${i.w4.spacing.md};gap:${i.w4.spacing.md};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(249,158,11,0.08) 0%,transparent 70%),#080b12;`,h=r.default.h1`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${d} 0.3s ease;`,x=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;`,b=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,y=r.default.div`display:flex;gap:12px;overflow-x:auto;width:100%;max-width:600px;padding:8px 4px;justify-content:center;flex-wrap:wrap;`,w=r.default.div`
  display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 16px;min-width:110px;
  background:${i.w4.colors.surface};border:2px solid ${({urgent:e})=>e?"#f97583":i.w4.colors.border};
  border-radius:${i.w4.borderRadius.lg};flex-shrink:0;
  animation: ${({urgent:e})=>e?m:f} ${({urgent:e})=>e?"0.5s ease infinite":"0.3s ease"};
`,v=r.default.span`font-size:40px;line-height:1.2;`,$=r.default.div`display:flex;gap:4px;font-size:22px;line-height:1.2;`,k=r.default.div`width:100%;height:6px;border-radius:3px;background:${i.w4.colors.border};overflow:hidden;
  &::after{content:'';display:block;height:100%;width:${({pct:e})=>100*e}%;background:${({pct:e})=>e>.5?"#3fb950":e>.25?"#f59e0b":"#f97583"};transition:width 1s linear;border-radius:3px;}`,j=r.default.div`
  display:flex;gap:8px;align-items:center;justify-content:center;padding:16px;min-height:80px;
  background:${i.w4.colors.surface};border:2px dashed ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};
  width:100%;max-width:400px;flex-wrap:wrap;
`,z=r.default.span`font-size:40px;animation:${p} 0.2s ease;`,S=r.default.span`font-size:14px;color:${i.w4.colors.mainTextMuted};`,T=r.default.div`display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:400px;width:100%;`,M=r.default.button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,44px);
  background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};
  cursor:pointer;transition:all 0.15s;min-height:64px;
  &:hover{background:rgba(88,166,255,0.08);transform:scale(1.08);border-color:${i.w4.colors.accent};}
  &:active{transform:scale(0.92);}
`,C=r.default.div`display:flex;gap:8px;`,A=r.default.button`
  padding:10px 24px;border-radius:${i.w4.borderRadius.lg};border:2px solid ${({color:e})=>e};
  background:${({color:e})=>e}15;color:${({color:e})=>e};font-size:16px;font-weight:700;
  cursor:pointer;min-height:44px;font-family:${i.w4.typography.fontFamily};transition:all 0.15s;
  &:hover{background:${({color:e})=>e}25;transform:translateY(-1px);}
`,R=r.default.div`display:flex;gap:${i.w4.spacing.lg};align-items:center;`,B=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};animation:${({urgent:e})=>e?m:"none"} ${({urgent:e})=>e?"0.5s ease infinite":"none"};`,_=r.default.span`font-size:72px;animation:${u} 1s ease-in-out infinite;`;function E({lang:e}){const[o,t]=(0,a.useState)("menu"),[r,n]=(0,a.useState)([]),[i,d]=(0,a.useState)([]),[p,u]=(0,a.useState)(0),[m,f]=(0,a.useState)(60),[E,I]=(0,a.useState)(0),[P,F]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-kitchen-best")??"0")}catch{return 0}}),L=(0,a.useRef)(0),O=(0,a.useRef)(0),D=(0,a.useCallback)(()=>{n([]),d([]),u(0),O.current=0,f(60),I(0),L.current=0,t("playing")},[]);(0,a.useEffect)(()=>{if("playing"!==o)return;const e=setInterval(()=>{f(o=>{if(o<=1){clearInterval(e);const o=O.current;if(o>P){F(o);try{localStorage.setItem("atlantis-kitchen-best",String(o))}catch{}}return t("gameover"),0}return o-1})},1e3);return()=>clearInterval(e)},[o,P]),(0,a.useEffect)(()=>{if("playing"!==o)return;const e=()=>{const e=++L.current,o=(t=l)[Math.floor(Math.random()*t.length)];var t;const a=15+Math.floor(10*Math.random());n(t=>[...t.slice(-4),{id:e,recipe:o,timeLeft:a,maxTime:a}])};e();const t=setInterval(e,8e3);return()=>clearInterval(t)},[o]),(0,a.useEffect)(()=>{if("playing"!==o)return;const e=setInterval(()=>{n(e=>e.map(e=>({...e,timeLeft:e.timeLeft-1})).filter(e=>e.timeLeft>0))},1e3);return()=>clearInterval(e)},[o]);const N=(0,a.useCallback)(e=>{"playing"===o&&d(o=>o.length>=6?o:[...o,e])},[o]),H=(0,a.useCallback)(()=>d([]),[]),G=(0,a.useCallback)(()=>{if(0===i.length)return;const e=r.findIndex(e=>{if(e.recipe.ingredients.length!==i.length)return!1;const o=[...e.recipe.ingredients].sort(),t=[...i].sort();return o.every((e,o)=>e===t[o])});if(e>=0){const o=r[e],t=100+Math.ceil(o.timeLeft/o.maxTime*50)+10*E;O.current+=t,u(O.current),I(e=>e+1),n(o=>o.filter((o,t)=>t!==e))}else I(0);d([])},[i,r,E]);if("menu"===o)return(0,s.jsxs)(g,{children:[(0,s.jsxs)(h,{children:["👨‍🍳 ","pt"===e?"Cozinha Louca!":"Crazy Kitchen!"]}),(0,s.jsx)(x,{children:"pt"===e?"Prepara as encomendas o mais rápido possível!":"Fill orders as fast as you can!"}),P>0&&(0,s.jsxs)(x,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",P]}),(0,s.jsx)(b,{accent:"#f59e0b",onClick:D,children:"pt"===e?"Jogar!":"Play!"})]});if("gameover"===o)return(0,s.jsxs)(g,{children:[(0,s.jsx)(_,{children:"👨‍🍳"}),(0,s.jsx)(h,{children:"pt"===e?"Tempo esgotado!":"Time's up!"}),(0,s.jsxs)(B,{color:"#3fb950",children:["⭐ ",p]}),p>=P&&p>0&&(0,s.jsxs)(x,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,s.jsx)(b,{accent:"#f59e0b",onClick:D,children:"pt"===e?"Outra Vez":"Again"})]});const Y=m<=10?"#f97583":m<=20?"#f59e0b":"#3fb950";return(0,s.jsxs)(g,{children:[(0,s.jsxs)(R,{children:[(0,s.jsxs)(B,{color:"#3fb950",children:["⭐ ",p]}),(0,s.jsxs)(B,{color:Y,urgent:m<=10,children:["⏱️ ",m,"s"]}),E>1&&(0,s.jsxs)(B,{color:"#d2a8ff",children:["🔥 x",E]})]}),(0,s.jsxs)(y,{children:[r.map(e=>(0,s.jsxs)(w,{urgent:e.timeLeft<=5,children:[(0,s.jsx)(v,{children:e.recipe.result}),(0,s.jsx)($,{children:e.recipe.ingredients.map((e,o)=>(0,s.jsx)("span",{children:e},o))}),(0,s.jsx)(k,{pct:e.timeLeft/e.maxTime})]},e.id)),0===r.length&&(0,s.jsx)(x,{style:{padding:12},children:"pt"===e?"Sem encomendas…":"No orders…"})]}),(0,s.jsx)(j,{children:i.length>0?i.map((e,o)=>(0,s.jsx)(z,{children:e},o)):(0,s.jsx)(S,{children:"pt"===e?"👆 Toca nos ingredientes":"👆 Tap ingredients"})}),(0,s.jsxs)(C,{children:[(0,s.jsx)(A,{color:"#f97583",onClick:H,children:"🗑️"}),(0,s.jsxs)(A,{color:"#3fb950",onClick:G,children:["✅ ","pt"===e?"Servir!":"Serve!"]})]}),(0,s.jsx)(T,{children:c.map(e=>(0,s.jsx)(M,{onClick:()=>N(e),children:e},e))})]})}},2524(e,o,t){t.d(o,{c:()=>I});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(1364),l=t(5723);const c=[{emoji:"🐶",label:"dog"},{emoji:"🐱",label:"cat"},{emoji:"🏠",label:"house"},{emoji:"🌳",label:"tree"},{emoji:"☀️",label:"sun"},{emoji:"🚗",label:"car"},{emoji:"🍕",label:"pizza"},{emoji:"⭐",label:"star"},{emoji:"🐟",label:"fish"},{emoji:"🌺",label:"flower"},{emoji:"🚀",label:"rocket"},{emoji:"🍌",label:"banana"},{emoji:"🎂",label:"cake"},{emoji:"🐘",label:"elephant"},{emoji:"🦋",label:"butterfly"},{emoji:"⚽",label:"ball"},{emoji:"🌙",label:"moon"},{emoji:"🐸",label:"frog"},{emoji:"🎸",label:"guitar"},{emoji:"🍎",label:"apple"},{emoji:"🐍",label:"snake"},{emoji:"🏔️",label:"mountain"},{emoji:"🌊",label:"wave"},{emoji:"🍦",label:"ice cream"},{emoji:"🐔",label:"chicken"},{emoji:"🎈",label:"balloon"},{emoji:"🐢",label:"turtle"},{emoji:"🌈",label:"rainbow"},{emoji:"🦁",label:"lion"},{emoji:"🍉",label:"watermelon"}],d=["#ffffff","#f97583","#58a6ff","#3fb950","#f59e0b","#d2a8ff","#ff6bcb","#000000"];function p(e){return e[Math.floor(Math.random()*e.length)]}function u(e){const o=[...e];for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o}const m=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,f=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,g=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;padding:${i.w4.spacing.md};gap:${i.w4.spacing.md};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(210,168,255,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${m} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;`,y=r.default.button`padding:14px 36px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:48px;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px ${({accent:e})=>e}40;}`,w=r.default.canvas`
  width:100%;max-width:500px;aspect-ratio:4/3;background:#1a1a2e;border:2px solid ${i.w4.colors.border};
  border-radius:${i.w4.borderRadius.lg};cursor:crosshair;touch-action:none;
`,v=r.default.div`display:flex;gap:6px;flex-wrap:wrap;justify-content:center;`,$=r.default.button`width:36px;height:36px;border-radius:50%;background:${({c:e})=>e};border:3px solid ${({active:e})=>e?"#fff":"transparent"};cursor:pointer;transition:transform 0.15s;&:hover{transform:scale(1.15);}`,k=r.default.button`padding:6px 14px;border-radius:${i.w4.borderRadius.md};border:1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};background:${({active:e})=>e?"rgba(88,166,255,0.12)":"transparent"};color:${i.w4.colors.mainText};font-size:13px;font-weight:600;cursor:pointer;min-height:36px;`,j=r.default.button`padding:6px 14px;border-radius:${i.w4.borderRadius.md};border:1px solid ${i.w4.colors.border};background:transparent;color:#f97583;font-size:13px;font-weight:600;cursor:pointer;min-height:36px;&:hover{border-color:#f97583;}`,z=r.default.div`display:flex;align-items:center;gap:${i.w4.spacing.sm};padding:10px 20px;background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.lg};animation:${f} 0.3s ease;`,S=r.default.span`font-size:48px;`,T=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({urgent:e})=>e?"#f97583":i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({urgent:e})=>e?"#f97583":i.w4.colors.mainText};`,M=r.default.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:400px;width:100%;`,C=r.default.button`
  display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 8px;
  background:${i.w4.colors.surface};border:2px solid ${({correct:e,wrong:o})=>e?"#3fb950":o?"#f97583":i.w4.colors.border};
  border-radius:${i.w4.borderRadius.lg};cursor:pointer;transition:all 0.15s;min-height:80px;font-size:36px;
  ${({correct:e})=>e?"background:rgba(63,185,80,0.15);":""}
  ${({wrong:e})=>e?"background:rgba(249,117,131,0.15);":""}
  &:hover:not(:disabled){border-color:${i.w4.colors.accent};transform:scale(1.05);}
`,A=r.default.span`font-size:80px;animation:${g} 0.8s ease-in-out infinite;`,R=r.default.div`display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;animation:${m} 0.3s ease;`,B=r.default.div`display:flex;align-items:center;gap:${i.w4.spacing.sm};padding:10px 14px;background:${i.w4.colors.surface};border:1px solid ${({highlight:e})=>e?i.w4.colors.accent:i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};`,_=r.default.span`flex:1;font-weight:600;color:${({highlight:e})=>e?i.w4.colors.accent:i.w4.colors.mainText};`,E=r.default.span`font-size:20px;font-weight:800;color:${({color:e})=>e??i.w4.colors.mainText};`;function I({lang:e,canOnline:o}){const[t,r]=(0,a.useState)("menu"),[n,m]=(0,a.useState)(null),[f,g]=(0,a.useState)([]),[I,P]=(0,a.useState)(0),[F,L]=(0,a.useState)(30),[O,D]=(0,a.useState)(0),[N,H]=(0,a.useState)({}),[G,Y]=(0,a.useState)("#ffffff"),[q,V]=(0,a.useState)(4),[W,J]=(0,a.useState)(null),[X,U]=(0,a.useState)(!1),[K,Q]=(0,a.useState)([]),[Z]=(0,a.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),ee=(0,a.useRef)(null),oe=(0,a.useRef)(!1),te=(0,a.useRef)(null),ae=(0,a.useRef)(null),re=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":ie.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),ie.current.sendEvent({type:"host-ack",name:Z,playerId:ie.current.room?.playerId??"",players:ie.current.room?.players??[]});break;case"host-ack":ie.current.setConnected(e.name),e.players&&ie.current.setPlayers([...e.players,{id:ie.current.room?.playerId??"",name:Z,isHost:!1}]);break;case"player-list":ie.current.setPlayers(e.players);break;case"game-state":{const o=e.payload;if("new-round"===o.action){const e=o.drawerId===ie.current.room?.playerId;U(e),P(o.round),L(30),J(null),Q([]),de(),e?(m(o.prompt),r("drawing")):(m(null),g(o.options),r("guessing"))}else if("stroke"===o.action){const e=o.stroke;Q(o=>[...o,e]),pe(e)}else"clear"===o.action?(Q([]),de()):"reveal"===o.action?(m(o.prompt),r("reveal")):"scores"===o.action?H(o.scores):"game-over"===o.action&&(H(o.scores),r("scores"));break}case"player-left":e.playerId&&ie.current.removePlayer(e.playerId)}},[Z]),ne=(0,s.Ky)({gameId:"drawguess",playerName:Z,onEvent:re}),ie=(0,a.useRef)(ne);ie.current=ne;const se=(0,s.zj)({gameId:"drawguess",enabled:"menu"===t||"lobby"===t}),le=(0,a.useRef)(I);le.current=I;const ce=(0,a.useRef)(N);ce.current=N;const de=(0,a.useCallback)(()=>{const e=ee.current?.getContext("2d");e&&(e.fillStyle="#1a1a2e",e.fillRect(0,0,e.canvas.width,e.canvas.height))},[]),pe=(0,a.useCallback)(e=>{const o=ee.current?.getContext("2d");if(o&&!(e.points.length<2)){o.strokeStyle=e.color,o.lineWidth=e.width,o.lineCap="round",o.lineJoin="round",o.beginPath(),o.moveTo(e.points[0][0],e.points[0][1]);for(let t=1;t<e.points.length;t++)o.lineTo(e.points[t][0],e.points[t][1]);o.stroke()}},[]);(0,a.useEffect)(()=>{const e=ee.current;e&&(e.width=e.offsetWidth,e.height=e.offsetHeight,de(),K.forEach(pe))});const ue=(0,a.useCallback)(e=>{const o=ee.current;if(!o)return null;const t=o.getBoundingClientRect(),a="touches"in e?e.touches[0]?.clientX??e.changedTouches[0]?.clientX:e.clientX,r="touches"in e?e.touches[0]?.clientY??e.changedTouches[0]?.clientY:e.clientY;return[(a-t.left)/t.width*o.width,(r-t.top)/t.height*o.height]},[]),me=(0,a.useCallback)(e=>{if(!X)return;const o=ue(e);o&&(oe.current=!0,te.current={points:[o],color:G,width:q})},[X,G,q,ue]),fe=(0,a.useCallback)(e=>{if(!oe.current||!te.current)return;const o=ue(e);if(!o)return;te.current.points.push(o);const t=ee.current?.getContext("2d");if(!t)return;const a=te.current.points;t.strokeStyle=te.current.color,t.lineWidth=te.current.width,t.lineCap="round",t.beginPath(),t.moveTo(a[a.length-2][0],a[a.length-2][1]),t.lineTo(a[a.length-1][0],a[a.length-1][1]),t.stroke()},[ue]),ge=(0,a.useCallback)(()=>{if(!oe.current||!te.current)return;oe.current=!1;const e=te.current;te.current=null,Q(o=>[...o,e]),ne.sendEvent({type:"game-state",payload:{action:"stroke",stroke:e}})},[ne]),he=(0,a.useCallback)(()=>{Q([]),de(),ne.sendEvent({type:"game-state",payload:{action:"clear"}})},[ne,de]);(0,a.useEffect)(()=>{if("drawing"===t||"guessing"===t)return ae.current&&clearInterval(ae.current),ae.current=setInterval(()=>{L(e=>e<=1?(ae.current&&clearInterval(ae.current),"host"===ne.room?.role&&ne.sendEvent({type:"game-state",payload:{action:"reveal",prompt:n}}),r("reveal"),0):e-1)},1e3),()=>{ae.current&&clearInterval(ae.current)}},[t,ne,n]);const xe=(0,a.useCallback)(()=>{const e=le.current+1;if(e>5)return ne.sendEvent({type:"game-state",payload:{action:"game-over",scores:ce.current}}),void r("scores");const o=ne.room?.players??[],t=o[(e-1)%o.length].id,a=p(c),n=u(c.filter(e=>e.emoji!==a.emoji)).slice(0,5),i=u([a,...n]);P(e),le.current=e,L(30),J(null),Q([]),de();const s=t===ne.room?.playerId;U(s),s?(m(a),r("drawing")):(m(null),g(i),r("guessing")),ne.sendEvent({type:"game-state",payload:{action:"new-round",round:e,drawerId:t,prompt:a,options:i}})},[ne,de]),be=(0,a.useCallback)(e=>{if(W)return;const o=e===n?.emoji;if(J(e),o){const e=ne.room?.playerId??"",o={...ce.current,[e]:(ce.current[e]??0)+1};H(o),ce.current=o,D(e=>e+1),ne.sendEvent({type:"game-state",payload:{action:"scores",scores:o}})}},[W,n,ne]),ye=(0,a.useCallback)(()=>{P(0),le.current=0,D(0),H({}),ce.current={};const e=p(c),o=u(c.filter(o=>o.emoji!==e.emoji)).slice(0,5);m(e),g(u([e,...o])),P(1),le.current=1,L(30),J(null),U(!1),r("guessing")},[]);if("menu"===t)return(0,l.jsxs)(h,{children:[(0,l.jsxs)(x,{children:["🎨 ","pt"===e?"Desenha e Adivinha!":"Draw & Guess!"]}),(0,l.jsx)(b,{children:"pt"===e?"Um desenha, os outros adivinham!":"One draws, others guess!"}),o?(0,l.jsx)(y,{accent:"#d2a8ff",onClick:()=>r("lobby"),children:"🌐 Online"}):(0,l.jsx)(y,{accent:"#d2a8ff",onClick:ye,children:"pt"===e?"Jogar Sozinho":"Play Solo"})]});if("lobby"===t)return(0,l.jsxs)(h,{children:[(0,l.jsxs)(x,{children:["🎨 ","pt"===e?"Desenha e Adivinha!":"Draw & Guess!"]}),ne.room?.connected?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(b,{children:[ne.room.players.length," ","pt"===e?"jogadores":"players"]}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:ne.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===ne.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===ne.room.role&&ne.room.players.length>=2&&(0,l.jsx)(y,{accent:"#d2a8ff",onClick:xe,children:"pt"===e?"Começar!":"Start!"}),ne.room.players.length<2&&(0,l.jsx)(b,{children:"pt"===e?"Mínimo 2 jogadores":"Minimum 2 players"})]}):(0,l.jsx)(s.XB,{lang:e,room:ne.room,error:ne.error,availableRooms:se.rooms,onCreateRoom:()=>{const{code:e,roomName:o}=ne.createRoom();se.publishRoom({code:e,roomName:o,hostName:Z,playerCount:1})},onJoinRoom:e=>ne.joinRoom(e),onLeaveRoom:()=>{se.unpublishRoom(),ne.leaveRoom(),r("menu")}})]});if("scores"===t){const o=(ne.room?.players??[{id:"me",name:Z,isHost:!1}]).map(e=>({id:e.id,name:e.name,pts:N[e.id]??0})).sort((e,o)=>o.pts-e.pts);return(0,l.jsxs)(h,{children:[(0,l.jsxs)(x,{children:["🏆 ","pt"===e?"Resultados":"Results"]}),(0,l.jsx)(R,{children:o.map((e,o)=>(0,l.jsxs)(B,{highlight:e.id===ne.room?.playerId,children:[(0,l.jsx)("span",{style:{fontSize:18,minWidth:28},children:0===o?"🥇":1===o?"🥈":2===o?"🥉":`${o+1}.`}),(0,l.jsx)(_,{highlight:e.id===ne.room?.playerId,children:e.name}),(0,l.jsx)(E,{color:0===o?"#3fb950":void 0,children:e.pts})]},e.id))}),(0,l.jsx)(y,{accent:"#d2a8ff",onClick:()=>{ne.leaveRoom(),se.unpublishRoom(),r("menu")},children:"Menu"})]})}return"reveal"===t?(0,l.jsxs)(h,{children:[(0,l.jsx)(b,{children:"pt"===e?"A resposta era:":"The answer was:"}),n&&(0,l.jsx)(A,{children:n.emoji}),"host"===ne.room?.role&&(0,l.jsx)(y,{accent:"#d2a8ff",onClick:xe,children:le.current>=5?"pt"===e?"Ver resultados":"See results":"➡️"})]}):(0,l.jsxs)(h,{children:[(0,l.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,l.jsxs)(T,{urgent:F<=5,children:["⏱️ ",F,"s"]}),X&&(0,l.jsx)(b,{children:"pt"===e?"Desenha isto:":"Draw this:"}),X&&n&&(0,l.jsx)(z,{children:(0,l.jsx)(S,{children:n.emoji})}),!X&&(0,l.jsx)(b,{children:"pt"===e?"O que é o desenho?":"What is the drawing?"})]}),(0,l.jsx)(w,{ref:ee,onMouseDown:me,onMouseMove:fe,onMouseUp:ge,onMouseLeave:ge,onTouchStart:me,onTouchMove:fe,onTouchEnd:ge}),X&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{children:d.map(e=>(0,l.jsx)($,{c:e,active:G===e,onClick:()=>Y(e)},e))}),(0,l.jsxs)(v,{children:[[2,4,8,14].map(e=>(0,l.jsx)(k,{active:q===e,onClick:()=>V(e),children:2===e?"·":4===e?"•":8===e?"●":"⬤"},e)),(0,l.jsx)(j,{onClick:he,children:"🗑️"})]})]}),!X&&(0,l.jsx)(M,{children:f.map(e=>(0,l.jsx)(C,{correct:W===e.emoji&&e.emoji===n?.emoji,wrong:W===e.emoji&&e.emoji!==n?.emoji,onClick:()=>be(e.emoji),disabled:!!W,children:e.emoji},e.emoji))})]})}},818(e,o,t){t.d(o,{i:()=>de});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(1364),l=t(5723);const c=[{id:"geography",icon:"🌍",color:"#3fb950",label:{en:"Geography",pt:"Geografia"},questions:[{q:{en:"What is the capital of France?",pt:"Qual é a capital da França?"},options:[{en:"Berlin",pt:"Berlim"},{en:"Madrid",pt:"Madrid"},{en:"Paris",pt:"Paris"},{en:"Rome",pt:"Roma"}],correct:2},{q:{en:"How many continents are there on Earth?",pt:"Quantos continentes existem na Terra?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:2},{q:{en:"What is the largest ocean in the world?",pt:"Qual é o maior oceano do mundo?"},options:[{en:"Atlantic Ocean",pt:"Oceano Atlântico"},{en:"Indian Ocean",pt:"Oceano Índico"},{en:"Arctic Ocean",pt:"Oceano Ártico"},{en:"Pacific Ocean",pt:"Oceano Pacífico"}],correct:3},{q:{en:"Which is the longest river in the world?",pt:"Qual é o rio mais longo do mundo?"},options:[{en:"Amazon",pt:"Amazonas"},{en:"Nile",pt:"Nilo"},{en:"Mississippi",pt:"Mississípi"},{en:"Yangtze",pt:"Yangtzé"}],correct:1},{q:{en:"What is the capital of Brazil?",pt:"Qual é a capital do Brasil?"},options:[{en:"São Paulo",pt:"São Paulo"},{en:"Rio de Janeiro",pt:"Rio de Janeiro"},{en:"Brasília",pt:"Brasília"},{en:"Salvador",pt:"Salvador"}],correct:2},{q:{en:"Which continent is the largest?",pt:"Qual é o maior continente?"},options:[{en:"Africa",pt:"África"},{en:"North America",pt:"América do Norte"},{en:"Asia",pt:"Ásia"},{en:"Europe",pt:"Europa"}],correct:2},{q:{en:"What is the capital of Portugal?",pt:"Qual é a capital de Portugal?"},options:[{en:"Porto",pt:"Porto"},{en:"Lisbon",pt:"Lisboa"},{en:"Faro",pt:"Faro"},{en:"Coimbra",pt:"Coimbra"}],correct:1},{q:{en:"The Amazon River flows through which continent?",pt:"O rio Amazonas atravessa qual continente?"},options:[{en:"Africa",pt:"África"},{en:"North America",pt:"América do Norte"},{en:"Asia",pt:"Ásia"},{en:"South America",pt:"América do Sul"}],correct:3},{q:{en:"How many oceans are there on Earth?",pt:"Quantos oceanos existem na Terra?"},options:[{en:"3",pt:"3"},{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"}],correct:2},{q:{en:"Which country has the most people?",pt:"Qual país tem mais pessoas?"},options:[{en:"USA",pt:"EUA"},{en:"India",pt:"Índia"},{en:"China",pt:"China"},{en:"Russia",pt:"Rússia"}],correct:1}]},{id:"science",icon:"🔬",color:"#58a6ff",label:{en:"Science",pt:"Ciências"},questions:[{q:{en:"How many planets are in our Solar System?",pt:"Quantos planetas tem o nosso Sistema Solar?"},options:[{en:"7",pt:"7"},{en:"8",pt:"8"},{en:"9",pt:"9"},{en:"10",pt:"10"}],correct:1},{q:{en:"What are the three states of matter?",pt:"Quais são os três estados da matéria?"},options:[{en:"Hot, cold, warm",pt:"Quente, frio, morno"},{en:"Solid, liquid, gas",pt:"Sólido, líquido, gasoso"},{en:"Hard, soft, medium",pt:"Duro, mole, médio"},{en:"Fire, water, earth",pt:"Fogo, água, terra"}],correct:1},{q:{en:"Which planet is closest to the Sun?",pt:"Qual planeta está mais perto do Sol?"},options:[{en:"Venus",pt:"Vénus"},{en:"Earth",pt:"Terra"},{en:"Mercury",pt:"Mercúrio"},{en:"Mars",pt:"Marte"}],correct:2},{q:{en:"How many bones does an adult human body have?",pt:"Quantos ossos tem o corpo humano adulto?"},options:[{en:"106",pt:"106"},{en:"206",pt:"206"},{en:"306",pt:"306"},{en:"406",pt:"406"}],correct:1},{q:{en:"What do plants need to make their food?",pt:"O que as plantas precisam para fazer o seu alimento?"},options:[{en:"Darkness and water",pt:"Escuridão e água"},{en:"Sunlight and carbon dioxide",pt:"Luz solar e dióxido de carbono"},{en:"Rain and soil only",pt:"Chuva e terra apenas"},{en:"Oxygen and fire",pt:"Oxigênio e fogo"}],correct:1},{q:{en:"What is the largest planet in our Solar System?",pt:"Qual é o maior planeta do Sistema Solar?"},options:[{en:"Saturn",pt:"Saturno"},{en:"Neptune",pt:"Neptuno"},{en:"Uranus",pt:"Úrano"},{en:"Jupiter",pt:"Júpiter"}],correct:3},{q:{en:"What organ pumps blood around your body?",pt:"Que órgão bombeia o sangue pelo corpo?"},options:[{en:"Liver",pt:"Fígado"},{en:"Lungs",pt:"Pulmões"},{en:"Heart",pt:"Coração"},{en:"Brain",pt:"Cérebro"}],correct:2},{q:{en:"What happens to water when it freezes?",pt:"O que acontece à água quando congela?"},options:[{en:"It becomes a gas",pt:"Torna-se um gás"},{en:"It becomes smaller",pt:"Fica mais pequena"},{en:"It becomes a solid",pt:"Torna-se um sólido"},{en:"It disappears",pt:"Desaparece"}],correct:2},{q:{en:"Which planet has rings around it?",pt:"Qual planeta tem anéis à sua volta?"},options:[{en:"Mars",pt:"Marte"},{en:"Venus",pt:"Vénus"},{en:"Mercury",pt:"Mercúrio"},{en:"Saturn",pt:"Saturno"}],correct:3},{q:{en:"What is the center of the Solar System?",pt:"O que está no centro do Sistema Solar?"},options:[{en:"The Moon",pt:"A Lua"},{en:"The Earth",pt:"A Terra"},{en:"The Sun",pt:"O Sol"},{en:"Jupiter",pt:"Júpiter"}],correct:2}]},{id:"animals",icon:"🐾",color:"#f0883e",label:{en:"Animals",pt:"Animais"},questions:[{q:{en:"What do pandas mostly eat?",pt:"O que os pandas comem principalmente?"},options:[{en:"Fish",pt:"Peixe"},{en:"Bamboo",pt:"Bambu"},{en:"Leaves",pt:"Folhas"},{en:"Berries",pt:"Bagas"}],correct:1},{q:{en:"Where do penguins live?",pt:"Onde vivem os pinguins?"},options:[{en:"Africa",pt:"África"},{en:"North Pole",pt:"Polo Norte"},{en:"South Pole / Antarctica",pt:"Polo Sul / Antártida"},{en:"Amazon rainforest",pt:"Floresta amazónica"}],correct:2},{q:{en:"What is a baby cat called?",pt:"Como se chama um bebé gato?"},options:[{en:"Puppy",pt:"Cachorro"},{en:"Cub",pt:"Filhote"},{en:"Kitten",pt:"Gatinho"},{en:"Calf",pt:"Bezerro"}],correct:2},{q:{en:"Which is the fastest land animal?",pt:"Qual é o animal terrestre mais rápido?"},options:[{en:"Lion",pt:"Leão"},{en:"Horse",pt:"Cavalo"},{en:"Cheetah",pt:"Guepardo"},{en:"Leopard",pt:"Leopardo"}],correct:2},{q:{en:"How many legs does a spider have?",pt:"Quantas patas tem uma aranha?"},options:[{en:"6",pt:"6"},{en:"8",pt:"8"},{en:"10",pt:"10"},{en:"12",pt:"12"}],correct:1},{q:{en:"What is a baby dog called?",pt:"Como se chama um bebé cão?"},options:[{en:"Kitten",pt:"Gatinho"},{en:"Foal",pt:"Potro"},{en:"Puppy",pt:"Cachorro"},{en:"Lamb",pt:"Cordeiro"}],correct:2},{q:{en:"Which animal is known as the king of the jungle?",pt:"Qual animal é conhecido como o rei da selva?"},options:[{en:"Tiger",pt:"Tigre"},{en:"Elephant",pt:"Elefante"},{en:"Lion",pt:"Leão"},{en:"Gorilla",pt:"Gorila"}],correct:2},{q:{en:"What do cows eat?",pt:"O que as vacas comem?"},options:[{en:"Fish",pt:"Peixe"},{en:"Grass and hay",pt:"Erva e feno"},{en:"Insects",pt:"Insetos"},{en:"Fruit",pt:"Fruta"}],correct:1},{q:{en:"Which is the largest animal on Earth?",pt:"Qual é o maior animal da Terra?"},options:[{en:"Elephant",pt:"Elefante"},{en:"Giraffe",pt:"Girafa"},{en:"Blue whale",pt:"Baleia azul"},{en:"Giant squid",pt:"Lula gigante"}],correct:2},{q:{en:"What sound does a duck make?",pt:"Que som faz um pato?"},options:[{en:"Moo",pt:"Mu"},{en:"Quack",pt:"Quá quá"},{en:"Oink",pt:"Ronc ronc"},{en:"Baa",pt:"Bé"}],correct:1}]},{id:"culture",icon:"🎨",color:"#bc8cff",label:{en:"Culture",pt:"Cultura"},questions:[{q:{en:"How many strings does a guitar usually have?",pt:"Quantas cordas tem normalmente uma guitarra?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"8",pt:"8"}],correct:2},{q:{en:'Who wrote the fairy tale "Cinderella"?',pt:'Quem escreveu o conto "A Gata Borralheira"?'},options:[{en:"Hans Christian Andersen",pt:"Hans Christian Andersen"},{en:"Charles Perrault",pt:"Charles Perrault"},{en:"Brothers Grimm",pt:"Irmãos Grimm"},{en:"Walt Disney",pt:"Walt Disney"}],correct:1},{q:{en:"What instrument has black and white keys?",pt:"Que instrumento tem teclas pretas e brancas?"},options:[{en:"Violin",pt:"Violino"},{en:"Trumpet",pt:"Trompete"},{en:"Piano",pt:"Piano"},{en:"Flute",pt:"Flauta"}],correct:2},{q:{en:"In which story does a boy travel to Neverland?",pt:"Em que história um menino viaja para a Terra do Nunca?"},options:[{en:"Pinocchio",pt:"Pinóquio"},{en:"Peter Pan",pt:"Peter Pan"},{en:"Alice in Wonderland",pt:"Alice no País das Maravilhas"},{en:"The Wizard of Oz",pt:"O Feiticeiro de Oz"}],correct:1},{q:{en:"Which instrument do you blow to play?",pt:"Que instrumento se sopra para tocar?"},options:[{en:"Drums",pt:"Bateria"},{en:"Guitar",pt:"Guitarra"},{en:"Flute",pt:"Flauta"},{en:"Harp",pt:"Harpa"}],correct:2},{q:{en:"What are the three primary colors?",pt:"Quais são as três cores primárias?"},options:[{en:"Green, purple, orange",pt:"Verde, roxo, laranja"},{en:"Red, blue, yellow",pt:"Vermelho, azul, amarelo"},{en:"Black, white, grey",pt:"Preto, branco, cinzento"},{en:"Pink, brown, gold",pt:"Rosa, castanho, dourado"}],correct:1},{q:{en:"Who painted the Mona Lisa?",pt:"Quem pintou a Mona Lisa?"},options:[{en:"Michelangelo",pt:"Miguel Ângelo"},{en:"Pablo Picasso",pt:"Pablo Picasso"},{en:"Leonardo da Vinci",pt:"Leonardo da Vinci"},{en:"Vincent van Gogh",pt:"Vincent van Gogh"}],correct:2},{q:{en:"In the story of the Three Little Pigs, what does the wolf do?",pt:"Na história dos Três Porquinhos, o que faz o lobo?"},options:[{en:"Sings songs",pt:"Canta canções"},{en:"Blows down houses",pt:"Derruba casas soprando"},{en:"Bakes cakes",pt:"Faz bolos"},{en:"Steals food",pt:"Rouba comida"}],correct:1},{q:{en:"Which instrument has strings you hit with sticks?",pt:"Que instrumento tem cordas que se tocam com baquetas?"},options:[{en:"Violin",pt:"Violino"},{en:"Piano",pt:"Piano"},{en:"Xylophone",pt:"Xilofone"},{en:"Banjo",pt:"Banjo"}],correct:2}]},{id:"history",icon:"🏛️",color:"#e3b341",label:{en:"History",pt:"História"},questions:[{q:{en:"Who invented the telephone?",pt:"Quem inventou o telefone?"},options:[{en:"Thomas Edison",pt:"Thomas Edison"},{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Benjamin Franklin",pt:"Benjamin Franklin"}],correct:1},{q:{en:"Who was the first person to walk on the Moon?",pt:"Quem foi a primeira pessoa a caminhar na Lua?"},options:[{en:"Buzz Aldrin",pt:"Buzz Aldrin"},{en:"Yuri Gagarin",pt:"Yuri Gagarin"},{en:"Neil Armstrong",pt:"Neil Armstrong"},{en:"John Glenn",pt:"John Glenn"}],correct:2},{q:{en:"What ancient civilization built the pyramids?",pt:"Que civilização antiga construiu as pirâmides?"},options:[{en:"Romans",pt:"Romanos"},{en:"Greeks",pt:"Gregos"},{en:"Egyptians",pt:"Egípcios"},{en:"Vikings",pt:"Vikings"}],correct:2},{q:{en:"Who was Christopher Columbus?",pt:"Quem foi Cristóvão Colombo?"},options:[{en:"A famous painter",pt:"Um famoso pintor"},{en:"An explorer who sailed to America",pt:"Um explorador que navegou até à América"},{en:"A Roman emperor",pt:"Um imperador romano"},{en:"A scientist",pt:"Um cientista"}],correct:1},{q:{en:"Who invented the light bulb?",pt:"Quem inventou a lâmpada elétrica?"},options:[{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Albert Einstein",pt:"Albert Einstein"},{en:"Thomas Edison",pt:"Thomas Edison"}],correct:3},{q:{en:"What did the ancient Romans build across their empire to travel?",pt:"O que os romanos construíram pelo império para viajar?"},options:[{en:"Canals",pt:"Canais"},{en:"Railways",pt:"Comboios"},{en:"Roads",pt:"Estradas"},{en:"Bridges only",pt:"Apenas pontes"}],correct:2},{q:{en:"What did Vasco da Gama discover?",pt:"O que descobriu Vasco da Gama?"},options:[{en:"A sea route to India",pt:"O caminho marítimo para a Índia"},{en:"The Americas",pt:"As Américas"},{en:"Australia",pt:"A Austrália"},{en:"The South Pole",pt:"O Polo Sul"}],correct:0},{q:{en:"Which ancient wonder is still standing today?",pt:"Qual maravilha antiga ainda existe hoje?"},options:[{en:"The Colossus of Rhodes",pt:"O Colosso de Rodes"},{en:"The Hanging Gardens",pt:"Os Jardins Suspensos"},{en:"The Great Pyramid of Giza",pt:"A Grande Pirâmide de Gizé"},{en:"The Lighthouse of Alexandria",pt:"O Farol de Alexandria"}],correct:2},{q:{en:"In what year did the first man land on the Moon?",pt:"Em que ano o primeiro homem pousou na Lua?"},options:[{en:"1959",pt:"1959"},{en:"1969",pt:"1969"},{en:"1979",pt:"1979"},{en:"1989",pt:"1989"}],correct:1}]},{id:"sports",icon:"⚽",color:"#f78166",label:{en:"Sports",pt:"Desporto"},questions:[{q:{en:"How many players are on a football (soccer) team on the field?",pt:"Quantos jogadores tem uma equipa de futebol em campo?"},options:[{en:"9",pt:"9"},{en:"10",pt:"10"},{en:"11",pt:"11"},{en:"12",pt:"12"}],correct:2},{q:{en:"How often are the Summer Olympics held?",pt:"De quantos em quantos anos se realizam os Jogos Olímpicos de Verão?"},options:[{en:"Every 2 years",pt:"De 2 em 2 anos"},{en:"Every 3 years",pt:"De 3 em 3 anos"},{en:"Every 4 years",pt:"De 4 em 4 anos"},{en:"Every 5 years",pt:"De 5 em 5 anos"}],correct:2},{q:{en:"In basketball, how many points is a regular shot worth?",pt:"No basquetebol, quantos pontos vale um cesto normal?"},options:[{en:"1",pt:"1"},{en:"2",pt:"2"},{en:"3",pt:"3"},{en:"4",pt:"4"}],correct:1},{q:{en:"In which sport do you use a racket and a shuttlecock?",pt:"Em que desporto se usa uma raquete e um volante?"},options:[{en:"Tennis",pt:"Ténis"},{en:"Squash",pt:"Squash"},{en:"Badminton",pt:"Badminton"},{en:"Table tennis",pt:"Ténis de mesa"}],correct:2},{q:{en:"Who is famous for winning 23 Olympic gold medals in swimming?",pt:"Quem é famoso por ganhar 23 medalhas de ouro olímpicas em natação?"},options:[{en:"Ian Thorpe",pt:"Ian Thorpe"},{en:"Ryan Lochte",pt:"Ryan Lochte"},{en:"Michael Phelps",pt:"Michael Phelps"},{en:"Mark Spitz",pt:"Mark Spitz"}],correct:2},{q:{en:"How many players are on each side in volleyball?",pt:"Quantos jogadores tem cada equipa no voleibol?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:1},{q:{en:"What sport uses a puck instead of a ball?",pt:"Que desporto usa um disco em vez de bola?"},options:[{en:"Lacrosse",pt:"Lacrosse"},{en:"Polo",pt:"Polo"},{en:"Ice hockey",pt:"Hóquei no gelo"},{en:"Baseball",pt:"Basebol"}],correct:2},{q:{en:"In tennis, what is it called when the score is tied at 40-40?",pt:"No ténis, como se chama quando o marcador está 40-40?"},options:[{en:"Tie",pt:"Empate"},{en:"Deuce",pt:"Deuce"},{en:"Love",pt:"Love"},{en:"Match point",pt:"Match point"}],correct:1},{q:{en:"How many rings are on the Olympic flag?",pt:"Quantos anéis tem a bandeira olímpica?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"}],correct:1}]}],d=n.keyframes`
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
`,k=r.default.div`display:flex;gap:2px;padding:2px;background:${i.w4.colors.mainBg};border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.md};margin-bottom:${i.w4.spacing.md};`,j=r.default.button`padding:8px 18px;border:none;border-radius:${i.w4.borderRadius.sm};font-size:14px;min-height:36px;font-weight:600;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:background 0.2s,color 0.2s;background:${({active:e})=>e?"rgba(59,130,246,0.18)":"transparent"};color:${({active:e})=>e?"#3b82f6":i.w4.colors.mainTextMuted};&:hover{color:#3b82f6;background:rgba(59,130,246,0.1);}`,z=r.default.button`padding:14px 32px;background:#3b82f6;border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:48px;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,0.4);}`,S=r.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.lg};

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${i.w4.spacing.md};
  }
`,T=r.default.button`
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
`,M=r.default.span`
  font-size: 2.5rem;
  line-height: 1;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: 2rem;
  }
`,C=r.default.span`
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
`,B=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${i.w4.spacing.md};
`,_=r.default.div`
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.md};
  background: ${i.w4.colors.surface};
  border: 1px solid ${({catColor:e})=>e};
  border-radius: 99px;
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${({catColor:e})=>e};
`,E=r.default.div`
  flex: 1;
  height: 8px;
  background: ${i.w4.colors.surface};
  border-radius: 99px;
  overflow: hidden;
  border: 1px solid ${i.w4.colors.border};
`,I=r.default.div`
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
`,F=r.default.div`
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
  background: ${({urgent:e,catColor:o})=>e?"#f85149":o};
  border-radius: 2px;
  margin-bottom: ${i.w4.spacing.md};
  animation: ${x} ${({duration:e})=>e}s linear forwards;
  transform-origin: left;
`,O=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({urgent:e})=>e?"#f85149":i.w4.colors.mainTextMuted};
  transition: color 0.3s ease;
`,D=r.default.p`
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
    ${({status:e,catColor:o})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":"idle"===e?i.w4.colors.border:o};
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
    background: ${({status:e,catColor:o})=>"idle"===e?`${o}18`:void 0};
    border-color: ${({status:e,catColor:o})=>"idle"===e?o:void 0};
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
  background: ${({status:e,catColor:o})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":o};
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
    ${({primary:e,catColor:o})=>e?o??i.w4.colors.accent:i.w4.colors.border};
  background: ${({primary:e,catColor:o})=>e?o??i.w4.colors.accent:"transparent"};
  color: ${({primary:e})=>e?"#fff":i.w4.colors.mainText};

  &:hover {
    transform: translateY(-2px);
    background: ${({primary:e,catColor:o})=>e?o??i.w4.colors.accentHover:i.w4.colors.sidebarHover};
  }
`,oe=r.default.div`
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
`,te=["#f0883e","#58a6ff","#3fb950","#e3b341","#bc8cff","#f78166"];function ae({count:e=60}){const o=(0,a.useMemo)(()=>Array.from({length:e},(e,o)=>({id:o,left:100*Math.random(),delay:2*Math.random(),duration:2.5+2*Math.random(),color:te[Math.floor(Math.random()*te.length)]??"#58a6ff",size:6+Math.floor(8*Math.random())})),[e]);return(0,l.jsx)(l.Fragment,{children:o.map(e=>(0,l.jsx)(oe,{left:e.left,delay:e.delay,duration:e.duration,color:e.color,size:e.size},e.id))})}const re="atlantis-familyquiz-scores";function ne(){try{const e=localStorage.getItem(re);return e?JSON.parse(e):{}}catch{return{}}}function ie(e,o){const t=ne();if((t[e]??0)<o){t[e]=o;try{localStorage.setItem(re,JSON.stringify(t))}catch{}}}const se={title:{en:"Family Quiz",pt:"Quiz da Família"},chooseCategory:{en:"Choose a category",pt:"Escolhe uma categoria"},question:{en:"Question",pt:"Pergunta"},of:{en:"of",pt:"de"},score:{en:"Score",pt:"Pontos"},correct:{en:"✓ Correct!",pt:"✓ Correto!"},correctBonus:{en:"✓ Correct! +5 speed bonus!",pt:"✓ Correto! +5 bónus de velocidade!"},wrong:{en:"✗ Wrong",pt:"✗ Errado"},timeUp:{en:"⏰ Time's up!",pt:"⏰ Tempo esgotado!"},results:{en:"Results",pt:"Resultados"},retry:{en:"Play Again",pt:"Jogar de Novo"},categories:{en:"Categories",pt:"Categorias"},highScore:{en:"Best:",pt:"Melhor:"},msg3stars:{en:"🎉 Amazing! You got everything right!",pt:"🎉 Incrível! Acertaste tudo!"},msg2stars:{en:"👏 Well done! Keep it up!",pt:"👏 Muito bem! Continua assim!"},msg1star:{en:"💪 Good try! Study and try again!",pt:"💪 Boa tentativa! Estuda e tenta outra vez!"},back:{en:"← Back",pt:"← Voltar"}};function le(e,o){const t=se[e];return"pt"===o?t.pt:t.en}const ce=["A","B","C","D"];function de({lang:e,onBack:o,canOnline:t}){const[r,n]=(0,a.useState)("categories"),[d,p]=(0,a.useState)("solo"),[u,m]=(0,a.useState)(null),[f,g]=(0,a.useState)(0),[h,x]=(0,a.useState)(0),[b,oe]=(0,a.useState)({}),[te,re]=(0,a.useState)("idle"),[se,de]=(0,a.useState)(null),[pe,ue]=(0,a.useState)(ne),[me,fe]=(0,a.useState)(15),[ge,he]=(0,a.useState)(0),[xe,be]=(0,a.useState)(!1),[ye,we]=(0,a.useState)(new Set),ve=(0,a.useRef)(Date.now()),$e=(0,a.useRef)(null),ke=(0,a.useRef)(null),je=(0,a.useRef)(null),ze=(0,a.useRef)(!1),[Se]=(0,a.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),Te=(0,a.useRef)(b);Te.current=b;const Me=(0,a.useRef)(u);Me.current=u;const Ce=(0,a.useRef)(f);Ce.current=f;const Ae=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":Be.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),Be.current.sendEvent({type:"host-ack",name:Se,playerId:Be.current.room?.playerId??"",players:Be.current.room?.players??[]});break;case"host-ack":Be.current.setConnected(e.name),e.players&&Be.current.setPlayers([...e.players,{id:Be.current.room?.playerId??"",name:Se,isHost:!1}]);break;case"player-list":Be.current.setPlayers(e.players);break;case"game-state":{const o=e.payload;if("start-question"===o.action){const e=o.categoryId,t=o.questionIndex,a=c.find(o=>o.id===e);a&&(m(a),Me.current=a,g(t),Ce.current=t,re("idle"),de(null),be(!1),we(new Set),n("playing"))}else if("player-answered"===o.action){const e=o.playerId,t=o.pts;if("host"===Be.current.room?.role&&t>0){const o={...Te.current,[e]:(Te.current[e]??0)+t};oe(o),Te.current=o}we(o=>{const t=new Set([...o,e]);if("host"===Be.current.room?.role){const e=Be.current.room?.players.length??1;t.size>=e&&setTimeout(()=>Ee.current(),500)}return t})}else if("question-result"===o.action)oe(o.scores);else if("show-answer"===o.action){const e=o.correct;null!==se?re(se===e?"correct":"wrong"):(re("wrong"),de(null)),oe(o.scores)}else"game-over"===o.action&&(oe(o.scores),n("results"));break}case"player-left":e.playerId&&Be.current.removePlayer(e.playerId)}},[Se,se]),Re=(0,s.Ky)({gameId:"familyquiz",playerName:Se,onEvent:Ae}),Be=(0,a.useRef)(Re);Be.current=Re;const _e=(0,s.zj)({gameId:"familyquiz",enabled:"online"===d&&("categories"===r||"lobby"===r)}),Ee=(0,a.useRef)(()=>{}),Ie=(0,a.useCallback)(()=>{$e.current&&(clearInterval($e.current),$e.current=null)},[]),Pe=(0,a.useCallback)(()=>{ke.current&&(clearTimeout(ke.current),ke.current=null),Ie()},[Ie]);(0,a.useEffect)(()=>()=>Pe(),[Pe]);const Fe=(0,a.useCallback)(()=>{Ie(),fe(15),he(e=>e+1),ve.current=Date.now(),$e.current=setInterval(()=>{fe(e=>e<=1?0:e-1)},1e3)},[Ie]),Le=(0,a.useCallback)(e=>{Pe(),m(e),g(0),x(0),re("idle"),de(null),n("playing")},[Pe]);(0,a.useEffect)(()=>{"playing"===r&&"idle"===te&&Fe()},[r,f]),(0,a.useEffect)(()=>{if(0===me&&"playing"===r&&"idle"===te&&u){Ie(),re("wrong"),de(null),be(!1);const e=h;ke.current=setTimeout(()=>{const o=f+1;o>=u.questions.length?(ie(u.id,e),ue(ne()),x(e),n("results")):(x(e),g(o),re("idle"),de(null))},1500)}},[me,r,te,u,f,h,Ie]);const Oe=(0,a.useCallback)(()=>{if(!Me.current)return;const e=Me.current,o=Ce.current+1;Be.current.sendEvent({type:"game-state",payload:{action:"show-answer",correct:e.questions[Ce.current].correct,scores:Te.current}}),setTimeout(()=>{o>=e.questions.length?(Be.current.sendEvent({type:"game-state",payload:{action:"game-over",scores:Te.current}}),n("results")):(we(new Set),g(o),Ce.current=o,re("idle"),de(null),be(!1),Be.current.sendEvent({type:"game-state",payload:{action:"start-question",categoryId:e.id,questionIndex:o}}))},2e3)},[]);Ee.current=Oe;const De=(0,a.useCallback)(e=>{if("idle"!==te||!u)return;const o=u.questions[f];if(!o)return;Ie();const t=(Date.now()-ve.current)/1e3,a=e===o.correct,r=a&&t<5,i=r?5:0;if(de(e),"online"===d){const o=Be.current.room?.playerId??"",n=(a?10:0)+i;if(n>0){const e={...Te.current,[o]:(Te.current[o]??0)+n};oe(e),Te.current=e,x(e=>e+n)}return be(r),Be.current.sendEvent({type:"game-state",payload:{action:"player-answered",playerId:o,optionIdx:e,pts:n,elapsed:t}}),void("host"===Be.current.room?.role&&(we(e=>{const t=new Set([...e,o]),a=Be.current.room?.players.length??1;return t.size>=a&&setTimeout(()=>Oe(),500),t}),Be.current.sendEvent({type:"game-state",payload:{action:"question-result",scores:Te.current}})))}be(r),re(a?"correct":"wrong");const s=h+(a?10:0)+i;ke.current=setTimeout(()=>{const e=f+1;e>=u.questions.length?(ie(u.id,s),ue(ne()),x(s),n("results")):(x(s),g(e),re("idle"),de(null),be(!1))},1500)},[te,u,f,h,Ie,d,Oe]);if("categories"===r){const o=e=>{"online"===d?(m(e),Me.current=e,n("lobby")):Le(e)};return(0,l.jsxs)(y,{children:[(0,l.jsx)(w,{children:(0,l.jsxs)($,{children:["🧠 ",le("title",e)]})}),t&&(0,l.jsxs)(k,{children:[(0,l.jsxs)(j,{active:"solo"===d,onClick:()=>p("solo"),children:["🎯 ","pt"===e?"Sozinho":"Solo"]}),(0,l.jsx)(j,{active:"online"===d,onClick:()=>p("online"),children:"🌐 Online"})]}),(0,l.jsx)("p",{style:{color:i.w4.colors.mainTextMuted,marginBottom:i.w4.spacing.lg,fontSize:i.w4.typography.fontSizeMd},children:le("chooseCategory",e)}),(0,l.jsx)(S,{children:c.map(t=>{const a=pe[t.id];return(0,l.jsxs)(T,{catColor:t.color,onClick:()=>o(t),children:[(0,l.jsx)(M,{children:t.icon}),(0,l.jsx)(C,{children:"pt"===e?t.label.pt:t.label.en}),void 0!==a&&"solo"===d&&(0,l.jsxs)(A,{catColor:t.color,children:[le("highScore",e)," ",a,"/",10*t.questions.length]})]},t.id)})})]})}if("lobby"===r)return(0,l.jsxs)(y,{children:[(0,l.jsx)(w,{children:(0,l.jsxs)($,{children:["🧠 ",le("title",e)]})}),Re.room?.connected?(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[(0,l.jsx)("p",{style:{color:i.w4.colors.mainTextMuted,fontSize:i.w4.typography.fontSizeMd},children:"host"===Re.room.role?`${Re.room.players.length} ${"pt"===e?"jogadores":"players"}`:"pt"===e?"À espera do anfitrião…":"Waiting for host…"}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:Re.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===Re.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),u&&(0,l.jsxs)("p",{style:{color:i.w4.colors.mainTextMuted,fontSize:14},children:[u.icon," ","pt"===e?u.label.pt:u.label.en]}),"host"===Re.room.role&&u&&(0,l.jsx)(z,{onClick:()=>{g(0),Ce.current=0,x(0),oe({}),Te.current={},we(new Set),re("idle"),de(null),n("playing"),Re.sendEvent({type:"game-state",payload:{action:"start-question",categoryId:u.id,questionIndex:0}})},children:"pt"===e?"Começar!":"Start!"})]}):(0,l.jsx)(s.XB,{lang:e,room:Re.room,error:Re.error,availableRooms:_e.rooms,onCreateRoom:()=>{const{code:e,roomName:o}=Re.createRoom();_e.publishRoom({code:e,roomName:o,hostName:Se,playerCount:1})},onJoinRoom:e=>Re.joinRoom(e),onLeaveRoom:()=>{_e.unpublishRoom(),Re.leaveRoom(),n("categories")}})]});if("playing"===r&&u){const o=u.questions[f];if(!o)return null;const t=u.questions.length,a=(f+1)/t*100;return(0,l.jsxs)(y,{children:[(0,l.jsxs)(w,{children:[(0,l.jsx)(v,{onClick:()=>{Pe(),n("categories")},children:le("back",e)}),(0,l.jsxs)($,{children:[u.icon," ","pt"===e?u.label.pt:u.label.en]})]}),(0,l.jsxs)(R,{children:[(0,l.jsxs)(B,{children:[(0,l.jsxs)(_,{catColor:u.color,children:[le("score",e),": ",h]}),(0,l.jsx)(E,{children:(0,l.jsx)(I,{pct:a,catColor:u.color})}),(0,l.jsxs)(P,{children:[le("question",e)," ",f+1," ",le("of",e)," ",t]}),(0,l.jsxs)(O,{urgent:me<=5,children:[me,"s"]})]}),(0,l.jsxs)(F,{catColor:u.color,children:[(0,l.jsx)(L,{duration:15,catColor:u.color,urgent:me<=5},ge),(0,l.jsx)(D,{children:"pt"===e?o.q.pt:o.q.en}),(0,l.jsx)(N,{children:o.options.map((t,a)=>{let r="idle";return"idle"!==te&&(a===o.correct?r=se===a?"correct":"highlight":a===se&&(r="wrong")),(0,l.jsxs)(H,{status:r,catColor:u.color,disabled:"idle"!==te,...(n=a,{onTouchStart:e=>{je.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!je.current)return;const o=Math.abs(e.changedTouches[0].clientX-je.current.x),t=Math.abs(e.changedTouches[0].clientY-je.current.y);je.current=null,o>8||t>8||(ze.current=!0,De(n))},onClick:()=>{ze.current?ze.current=!1:De(n)}}),children:[(0,l.jsx)(G,{status:r,catColor:u.color,children:ce[a]}),"pt"===e?t.pt:t.en]},a);var n})})]},f),"idle"!==te&&(0,l.jsx)(Y,{isCorrect:"correct"===te,children:le("correct"===te?xe?"correctBonus":"correct":null===se?"timeUp":"wrong",e)})]})]})}if("results"===r&&u){const o=10*u.questions.length,t=Math.round(h/o*100),a=100===t?3:t>=60?2:1,r={3:le("msg3stars",e),2:le("msg2stars",e),1:le("msg1star",e)};return(0,l.jsxs)(y,{children:[3===a&&(0,l.jsx)(ae,{}),(0,l.jsxs)(w,{children:[(0,l.jsx)(v,{onClick:()=>n("categories"),children:le("back",e)}),(0,l.jsxs)($,{children:[u.icon," ",le("results",e)]})]}),(0,l.jsxs)(q,{children:[(0,l.jsxs)(V,{catColor:u.color,children:[(0,l.jsx)(W,{children:le("results",e)}),(0,l.jsx)(J,{catColor:u.color,children:h}),(0,l.jsxs)(X,{children:[t,"% — ",h,"/",o]}),(0,l.jsx)(U,{children:[1,2,3].map(e=>(0,l.jsx)(K,{lit:e<=a,delay:.15*(e-1),children:"⭐"},e))}),(0,l.jsx)(Q,{children:r[a]})]}),"online"===d&&(Re.room?.players??[]).length>1&&(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6,width:"100%",maxWidth:300,marginTop:12},children:(Re.room?.players??[]).map(e=>({...e,pts:b[e.id]??0})).sort((e,o)=>o.pts-e.pts).map((e,o)=>(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:i.w4.colors.surface,border:`1px solid ${e.id===Re.room?.playerId?i.w4.colors.accent:i.w4.colors.border}`,borderRadius:12},children:[(0,l.jsx)("span",{style:{fontSize:16,minWidth:24},children:0===o?"🥇":1===o?"🥈":2===o?"🥉":`${o+1}.`}),(0,l.jsx)("span",{style:{flex:1,fontWeight:600,color:e.id===Re.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:e.name}),(0,l.jsx)("span",{style:{fontSize:18,fontWeight:800,color:0===o?"#3fb950":i.w4.colors.mainText},children:e.pts})]},e.id))}),(0,l.jsx)(Z,{children:"online"===d?(0,l.jsx)(ee,{onClick:()=>{Re.leaveRoom(),_e.unpublishRoom(),p("solo"),n("categories")},children:le("categories",e)}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ee,{primary:!0,catColor:u.color,onClick:()=>Le(u),children:le("retry",e)}),(0,l.jsx)(ee,{onClick:()=>n("categories"),children:le("categories",e)})]})})]})]})}return null}},5693(e,o,t){t.d(o,{p:()=>T});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5723);const l=["🌳","🪨","📦","🏠","🗑️","🪑","🚗","🌺","🪴","🧱","🏢","🎪","⛺","🗿","🛒"],c=["🌳","🪨","📦","🪑","🪴","🧱"];function d(e){return e[Math.floor(Math.random()*e.length)]}const p=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,m=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,f=n.keyframes`0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}`,g=n.keyframes`0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}`,h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${i.w4.spacing.lg};gap:${i.w4.spacing.lg};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 40% 30%,rgba(63,185,80,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${p} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:340px;`,y=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=r.default.span`font-size:72px;animation:${m} 1s ease-in-out infinite;`,v=r.default.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:300px;width:100%;`,$=r.default.button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,48px);
  background:${({selected:e})=>e?"rgba(63,185,80,0.15)":i.w4.colors.surface};
  border:3px solid ${({selected:e})=>e?"#3fb950":i.w4.colors.border};
  border-radius:${i.w4.borderRadius.lg};cursor:pointer;transition:all 0.15s;min-height:70px;
  &:hover{border-color:#3fb950;transform:scale(1.05);}
  &:active{transform:scale(0.95);}
`,k=r.default.div`
  display:grid;grid-template-columns:repeat(${6},1fr);gap:6px;
  max-width:420px;width:100%;animation:${p} 0.3s ease;
`,j=r.default.button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;
  font-size:clamp(24px,5vw,36px);background:${i.w4.colors.surface};
  border:2px solid ${({found:e,wrong:o})=>e?"#3fb950":o?"#f97583":i.w4.colors.border};
  border-radius:${i.w4.borderRadius.md};cursor:pointer;transition:all 0.15s;min-height:48px;
  background: ${({found:e,wrong:o})=>e?"rgba(63,185,80,0.15)":o?"rgba(249,117,131,0.1)":i.w4.colors.surface};
  animation: ${({found:e,wrong:o})=>e?u:o?f:"none"} ${({found:e})=>e?"0.3s ease":"0.4s ease"};
  opacity: ${({revealed:e,found:o})=>e&&!o?.4:1};
  cursor: ${({revealed:e})=>e?"default":"pointer"};
  &:hover:not(:disabled){transform:scale(1.08);border-color:${i.w4.colors.accent};}
  &:active:not(:disabled){transform:scale(0.95);}
`,z=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};`,S=r.default.div`font-size:48px;animation:${g} 0.5s ease-in-out;`;function T({lang:e}){const[o,t]=(0,a.useState)("menu"),[r,n]=(0,a.useState)(0),[i,p]=(0,a.useState)(0),[u,m]=(0,a.useState)(c[0]),[f,g]=(0,a.useState)([]),[T,M]=(0,a.useState)(20),[C,A]=(0,a.useState)(0),[R,B]=(0,a.useState)(!1),[_,E]=(0,a.useState)(null),[I,P]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-hideseek-best")??"0")}catch{return 0}}),F=(0,a.useRef)(null),L=(0,a.useCallback)(()=>{m(d(c)),t("hiding")},[]),O=(0,a.useCallback)(()=>{const e=function(e){const o=Array.from({length:30},()=>({emoji:d(l),isHider:!1,revealed:!1}));o[Math.floor(Math.random()*o.length)]={emoji:e,isHider:!0,revealed:!1};const t=2+Math.floor(3*Math.random());for(let a=0;a<t;a++){const t=Math.floor(Math.random()*o.length);o[t].isHider||(o[t].emoji=e)}return o}(u);g(e),M(20),A(0),B(!1),E(null),t("seeking")},[u]);(0,a.useEffect)(()=>{if("seeking"===o)return F.current=setInterval(()=>{M(e=>e<=1?(F.current&&clearInterval(F.current),t("reveal"),0):e-1)},1e3),()=>{F.current&&clearInterval(F.current)}},[o]);const D=(0,a.useCallback)(e=>{if("seeking"===o&&!R&&!f[e].revealed)if(A(e=>e+1),f[e].isHider){B(!0),F.current&&clearInterval(F.current);const o=Math.max(0,5*T-10*C),a=100+o;p(e=>e+a),g(o=>o.map((o,t)=>t===e?{...o,revealed:!0}:o)),setTimeout(()=>{const e=r+1;if(n(e),e>=3){const e=i+100+o;if(e>I){P(e);try{localStorage.setItem("atlantis-hideseek-best",String(e))}catch{}}t("scores")}else L()},1500)}else E(e),g(o=>o.map((o,t)=>t===e?{...o,revealed:!0}:o)),setTimeout(()=>E(null),500)},[o,R,f,T,C,r,i,I,L]),N=(0,a.useCallback)(()=>{n(0),p(0),L()},[L]);if("menu"===o)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:["🔍 ","pt"===e?"Esconde-Esconde!":"Hide & Seek!"]}),(0,s.jsx)(b,{children:"pt"===e?"Esconde-te como um objeto e vê se te encontram!":"Disguise yourself as an object and see if they find you!"}),I>0&&(0,s.jsxs)(b,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",I]}),(0,s.jsx)(y,{accent:"#3fb950",onClick:N,children:"pt"===e?"Jogar!":"Play!"})]});if("hiding"===o)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:["🫣 ","pt"===e?"Escolhe um disfarce!":"Pick a disguise!"]}),(0,s.jsx)(b,{children:"pt"===e?"Transforma-te num objeto!":"Turn into an object!"}),(0,s.jsx)(v,{children:c.map(e=>(0,s.jsx)($,{selected:u===e,onClick:()=>m(e),children:e},e))}),(0,s.jsxs)(y,{accent:"#3fb950",onClick:O,children:["pt"===e?"Esconder!":"Hide!"," ",u]})]});if("reveal"===o){const o=f.findIndex(e=>e.isHider);return(0,s.jsxs)(h,{children:[(0,s.jsx)(x,{children:"pt"===e?"Tempo esgotado!":"Time's up!"}),(0,s.jsx)(b,{children:"pt"===e?"Estava aqui:":"Was hiding here:"}),(0,s.jsxs)(S,{children:[f[o]?.emoji??"?"," → 🐸"]}),(0,s.jsx)(y,{accent:"#3fb950",onClick:()=>{const e=r+1;if(n(e),e>=3){if(i>I){P(i);try{localStorage.setItem("atlantis-hideseek-best",String(i))}catch{}}t("scores")}else L()},children:"➡️"})]})}if("scores"===o)return(0,s.jsxs)(h,{children:[(0,s.jsx)(w,{children:"🏆"}),(0,s.jsx)(x,{children:"pt"===e?"Resultados":"Results"}),(0,s.jsxs)(z,{color:"#3fb950",children:["⭐ ",i]}),i>=I&&i>0&&(0,s.jsxs)(b,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,s.jsx)(y,{accent:"#3fb950",onClick:()=>t("menu"),children:"Menu"})]});const H=T<=5?"#f97583":T<=10?"#f59e0b":"#3fb950";return(0,s.jsxs)(h,{children:[(0,s.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,s.jsxs)(z,{color:"#3fb950",children:["⭐ ",i]}),(0,s.jsxs)(z,{color:H,children:["⏱️ ",T,"s"]}),(0,s.jsxs)(z,{children:["pt"===e?"Tentativas":"Tries",": ",C]})]}),(0,s.jsx)(b,{children:"pt"===e?"🔍 Encontra quem se escondeu!":"🔍 Find the hidden one!"}),(0,s.jsx)(k,{children:f.map((e,o)=>(0,s.jsx)(j,{revealed:e.revealed&&!e.isHider,found:e.revealed&&e.isHider,wrong:_===o,onClick:()=>D(o),disabled:e.revealed,children:e.revealed&&e.isHider?"🐸":e.emoji},o))})]})}},782(e,o,t){t.d(o,{v:()=>C});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5),l=t(233),c=t(5723);const d={_:null,R:"#ff4444",O:"#ff8800",Y:"#ffcc00",G:"#44cc44",B:"#4488ff",K:"#333333",W:"#cccccc"},p={fire:[["_","_","_","Y","Y","_","_","_"],["_","_","Y","O","O","Y","_","_"],["_","Y","O","R","R","O","Y","_"],["_","Y","R","R","R","R","Y","_"],["Y","O","R","R","R","R","O","Y"],["Y","O","R","R","R","R","O","Y"],["_","Y","O","R","R","O","Y","_"],["_","_","Y","O","O","Y","_","_"]],spike:[["_","_","_","W","W","_","_","_"],["_","_","_","W","W","_","_","_"],["_","_","W","K","K","W","_","_"],["_","_","W","K","K","W","_","_"],["_","W","K","K","K","K","W","_"],["_","W","K","K","K","K","W","_"],["W","K","K","K","K","K","K","W"],["W","K","K","K","K","K","K","W"]],cactus:[["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","G","_","G","G","_","G","_"],["_","G","G","G","G","G","G","_"],["_","G","G","G","G","G","G","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"]],bomb:[["_","_","_","Y","_","_","_","_"],["_","_","Y","O","_","_","_","_"],["_","_","_","K","K","_","_","_"],["_","_","K","K","K","K","_","_"],["_","K","K","K","K","K","K","_"],["_","K","K","W","K","K","K","_"],["_","K","K","K","K","K","K","_"],["_","_","K","K","K","K","_","_"]],rock:[["_","_","_","W","W","_","_","_"],["_","_","W","K","K","W","_","_"],["_","W","K","K","K","K","W","_"],["W","K","K","W","K","K","K","W"],["W","K","K","K","K","K","K","W"],["W","K","K","K","K","K","K","W"]]},u=["fire","spike","cactus","bomb","rock"];function m({type:e,size:o=32,style:t,className:r}){const n=p[e],i=n.length,s=n[0].length,l=(0,a.useMemo)(()=>{const e=[];for(let o=0;o<i;o++)for(let t=0;t<s;t++){const a=d[n[o][t]];a&&e.push({x:t,y:o,color:a})}return e},[n,i,s]);return(0,c.jsx)("svg",{width:o,height:o*(i/s),viewBox:`0 0 ${s} ${i}`,style:{imageRendering:"pixelated",...t},className:r,children:l.map((e,o)=>(0,c.jsx)("rect",{x:e.x,y:e.y,width:1,height:1,fill:e.color},o))})}const f=75,g=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,h=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,x=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,b=r.default.div`
  flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:${i.w4.spacing.lg};gap:${i.w4.spacing.xl};overflow:hidden;min-height:0;
  background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(63,185,80,0.06) 0%,transparent 70%),
             radial-gradient(ellipse 50% 60% at 70% 80%,rgba(88,166,255,0.04) 0%,transparent 70%),#080b12;
`,y=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${g} 0.3s ease;`,w=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;`,v=r.default.div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:#3fb950;animation:${x} 0.5s ease;`,$=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}&:active{transform:translateY(-1px);}`,k=r.default.span`font-size:72px;animation:${h} 1s ease-in-out infinite;`,j=r.default.div`font-size:${i.w4.typography.fontSizeLg};font-weight:800;color:${i.w4.colors.mainText};`,z=r.default.div`
  position:relative;width:100%;max-width:600px;height:240px;
  background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};
  overflow:hidden;touch-action:manipulation;user-select:none;
`,S=r.default.div`
  position:absolute;top:${f}%;left:0;right:0;height:2px;
  background:rgba(63,185,80,0.4);
`,T=r.default.div`
  position:absolute;top:${f}%;left:0;right:0;bottom:0;
  background:linear-gradient(0deg,rgba(63,185,80,0.1),transparent);
`,M=r.default.div`
  position:absolute;
  left:${({left:e})=>e}%;top:${({top:e})=>e}%;
  transform:translate(-50%,-100%);
  transition:opacity 0.3s;
  ${({dead:e})=>e?"opacity:0.3;filter:grayscale(1);":""}
`;function C({lang:e}){const[o,t]=(0,a.useState)("menu"),[r,n]=(0,a.useState)(3),[i,d]=(0,a.useState)(0),[p,g]=(0,a.useState)(20),[h,x]=(0,a.useState)(f),[C,A]=(0,a.useState)(!1),[R,B]=(0,a.useState)([]),[_]=(0,a.useState)(()=>Math.floor(Math.random()*l.L.length)),[E,I]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-jumpparty-best")??"0")}catch{return 0}}),P=(0,a.useRef)(!1),F=(0,a.useRef)(20),L=(0,a.useRef)(f),O=(0,a.useRef)(0),D=(0,a.useRef)(!1),N=(0,a.useRef)(0),H=(0,a.useRef)(0),G=(0,a.useRef)([]),Y=(0,a.useRef)(0),q=(0,a.useRef)(null),V=(0,a.useCallback)(()=>{if(P.current||D.current)return;P.current=!0;const e=performance.now(),o=t=>{const a=t-e,r=Math.min(a/600,1),n=f-35*Math.sin(Math.PI*r);L.current=n,x(n),r<1?requestAnimationFrame(o):(L.current=f,x(f),P.current=!1)};requestAnimationFrame(o)},[]);(0,a.useEffect)(()=>{if("playing"!==o)return;const e=()=>{if(D.current)return;0!==O.current&&(F.current=Math.max(5,Math.min(95,F.current+1.5*O.current)),g(F.current)),G.current=G.current.map(e=>({...e,x:e.x-.8})).filter(e=>!(e.x<-10&&(N.current+=1,d(N.current),1)));const o=F.current,a=L.current;for(const e of G.current)if(Math.abs(e.x-o)<8&&a>=67){D.current=!0,A(!0);const e=N.current;if(e>E){I(e);try{localStorage.setItem("atlantis-jumpparty-best",String(e))}catch{}}return void setTimeout(()=>t("gameover"),600)}B([...G.current]),Y.current=requestAnimationFrame(e)};return Y.current=requestAnimationFrame(e),()=>cancelAnimationFrame(Y.current)},[o,E]),(0,a.useEffect)(()=>{if("playing"!==o)return;const e=()=>{if(D.current)return;const o=++H.current;G.current.push({id:o,type:u[Math.floor(Math.random()*u.length)],x:105});const t=1e3+1200*Math.random();q.current=setTimeout(e,t)};return q.current=setTimeout(e,800),()=>{q.current&&clearTimeout(q.current)}},[o]),(0,a.useEffect)(()=>{if("playing"!==o)return;const e=e=>{"Space"!==e.code&&"ArrowUp"!==e.key||(e.preventDefault(),V()),"ArrowLeft"===e.key&&(e.preventDefault(),O.current=-1),"ArrowRight"===e.key&&(e.preventDefault(),O.current=1)},t=e=>{"ArrowLeft"===e.key&&-1===O.current&&(O.current=0),"ArrowRight"===e.key&&1===O.current&&(O.current=0)};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}},[o,V]);const W=(0,a.useCallback)(()=>{d(0),N.current=0,A(!1),D.current=!1,G.current=[],B([]),g(20),F.current=20,x(f),L.current=f,O.current=0,P.current=!1,n(3),t("countdown");let e=3;const o=setInterval(()=>{e--,n(e),e<=0&&(clearInterval(o),t("playing"))},800)},[]);return"menu"===o?(0,c.jsxs)(b,{children:[(0,c.jsx)(l.G,{paletteIndex:_,pose:"idle",size:64}),(0,c.jsx)(y,{children:"pt"===e?"Salta!":"Jump!"}),(0,c.jsx)(w,{children:"pt"===e?"Salta sobre os obstáculos! Um só botão!":"Jump over obstacles! One button!"}),E>0&&(0,c.jsxs)(w,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",E]}),(0,c.jsx)($,{accent:"#3fb950",onClick:W,children:"pt"===e?"Jogar!":"Play!"})]}):"countdown"===o?(0,c.jsx)(b,{children:(0,c.jsx)(v,{children:r>0?r:"🏃"},r)}):"gameover"===o?(0,c.jsxs)(b,{children:[(0,c.jsx)(k,{children:"💥"}),(0,c.jsx)(y,{children:"pt"===e?"Fim!":"Game Over!"}),(0,c.jsxs)(j,{children:["⭐ ",i]}),i>=E&&i>0&&(0,c.jsxs)(w,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,c.jsx)($,{accent:"#3fb950",onClick:W,children:"pt"===e?"Outra Vez":"Again"})]}):(0,c.jsxs)(b,{children:[(0,c.jsxs)(j,{children:["⭐ ",i]}),(0,c.jsxs)(z,{children:[(0,c.jsx)(T,{}),(0,c.jsx)(S,{}),(0,c.jsx)(M,{left:p,top:h,dead:C,children:(0,c.jsx)(l.G,{paletteIndex:_,pose:C?"dead":P.current?"jump":0!==O.current?"walk":"idle",size:48,flipX:-1===O.current})}),R.map(e=>(0,c.jsx)(M,{left:e.x,top:f,children:(0,c.jsx)(m,{type:e.type,size:36})},e.id))]}),(0,c.jsx)(s.UO,{axes:"horizontal",onMove:e=>{O.current=e.dx},actions:[{id:"jump",label:"⬆",color:"#2ea043",onPress:V}]})]})}},5758(e,o,t){t.d(o,{Y:()=>he});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(1364),l=t(5723);const c={title:{pt:"Jogo da Memória",en:"Memory Game"},subtitle:{pt:"Vira duas cartas e encontra os pares!",en:"Flip two cards and find the pairs!"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},easyDesc:{pt:"16 cartas · 8 pares",en:"16 cards · 8 pairs"},mediumDesc:{pt:"24 cartas · 12 pares",en:"24 cards · 12 pairs"},hardDesc:{pt:"40 cartas · 20 pares",en:"40 cards · 20 pairs"},moves:{pt:"Jogadas",en:"Moves"},pairs:{pt:"Pares",en:"Pairs"},time:{pt:"Tempo",en:"Time"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incrível!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"Rápido!",en:"Fast!"},gameOver:{pt:"Parabéns!",en:"Well done!"},finalMoves:{pt:"jogadas",en:"moves"},finalTime:{pt:"Tempo total",en:"Total time"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestMoves:{pt:"Melhor",en:"Best"},flipTwo:{pt:"Vira duas cartas!",en:"Flip two cards!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},pickSize:{pt:"Quantas cartas?",en:"How many cards?"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espaço",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"Cães, gatos, leões e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguetões e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},matched:{pt:"Par encontrado!",en:"Match found!"},tryAgain:{pt:"Tenta outra vez!",en:"Try again!"},allFound:{pt:"Encontraste todos!",en:"You found them all!"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Adversário",en:"Opponent"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},theirTurn:{pt:"Vez do adversário!",en:"Opponent's turn!"},youWin:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},youLose:{pt:"😅 Perdeste!",en:"😅 You lost!"},tied:{pt:"🤝 Empate!",en:"🤝 Tied!"},opponentLeft:{pt:"O adversário saiu.",en:"Opponent left."},rematch:{pt:"Revanche",en:"Rematch"},waiting:{pt:"À espera…",en:"Waiting…"}};function d(e,o){return c[e]["pt"===o?"pt":"en"]}const p=[{id:"animals",emoji:"🦁",color:"#f59e0b",preview:["🐶","🐱","🦁","🐼","🦋"],symbols:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🦄","🐝","🦋","🐞","🐢","🐙","🐬","🐳","🐘","🦒"]},{id:"food",emoji:"🍕",color:"#ef4444",preview:["🍕","🍦","🧁","🍓","🍩"],symbols:["🍎","🍌","🍓","🍉","🍕","🧁","🍩","🍪","🌮","🍦","🎂","🍫","🍬","🍭","🍿","🥐","🍔","🌭","🍟","🥪","🍝","🍣","🍧","🍰","🥑","🍇"]},{id:"space",emoji:"🚀",color:"#8b5cf6",preview:["🚀","🌍","⭐","🛸","🌙"],symbols:["🚀","🌍","⭐","🛸","🌙","☀️","🪐","🌟","💫","✨","🔭","👽","🤖","👾","🛰️","💎","🔮","⚡","🌈","☄️","🎯","🎮","🎲","🧩","🎸","🔥"]},{id:"mix",emoji:"🎪",color:"#3fb950",preview:["🐶","🍕","🚀","⭐","🎸"],symbols:["🐶","🐱","🦁","🐼","🦋","🐢","🐙","🐬","🍕","🍦","🧁","🍓","🍩","🍉","🎂","🍌","🚀","🌍","⭐","🛸","🌙","☀️","🌈","💎","🎸","⚽"]}],u={easy:8,medium:12,hard:20};function m(e){const o=[...e];for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o}function f(e){return`${Math.floor(e/60)}:${(e%60).toString().padStart(2,"0")}`}const g=n.keyframes`
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
`,k=n.keyframes`
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
  50%      { transform: translateY(-6px) scale(1.1); opacity: 1; }
`,j=r.default.div`
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
`,T=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 380px;
  line-height: 1.5;
`,M=r.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${i.w4.spacing.md};
  max-width: 480px;
  width: 100%;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    max-width: 240px;
  }
`,C=r.default.button`
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
`,B=r.default.span`
  font-size: 17px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,_=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,E=r.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,I=r.default.button`
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
`,F=r.default.span`
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
`,D=r.default.div`
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
  animation: ${k} 1.5s ease-in-out infinite;
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
`,oe=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,te=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,ae=r.default.span`
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
`,pe=["🎊","⭐","🌟","💫","✨","🎉","🏆","🥳"],ue=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],me=["great","amazing","perfect","super","wow","fast"],fe="atlantis-memory-best";function ge(e){try{return JSON.parse(localStorage.getItem(fe)??"{}")[e]??0}catch{return 0}}function he({lang:e,canOnline:o}){const[t,r]=(0,a.useState)("theme"),[n,c]=(0,a.useState)("solo"),[g,h]=(0,a.useState)("animals"),[x,b]=(0,a.useState)("easy"),[y,w]=(0,a.useState)([]),[v,$]=(0,a.useState)([]),[k,V]=(0,a.useState)(new Set),[he,xe]=(0,a.useState)(0),[be,ye]=(0,a.useState)(0),[we,ve]=(0,a.useState)(0),[$e,ke]=(0,a.useState)({msg:"",type:"info"}),[je,ze]=(0,a.useState)(!1),[Se,Te]=(0,a.useState)(!1),[Me,Ce]=(0,a.useState)(!0),[Ae,Re]=(0,a.useState)(""),[Be,_e]=(0,a.useState)(0),[Ee,Ie]=(0,a.useState)(0),[Pe,Fe]=(0,a.useState)({}),[Le,Oe]=(0,a.useState)(!1),[De,Ne]=(0,a.useState)("none"),He=(0,a.useRef)(!1),Ge=(0,a.useRef)(null),[Ye]=(0,a.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),qe=(0,a.useCallback)(o=>{switch(o.type){case"guest-joined":We.current.addPlayer({id:o.playerId,name:o.name,isHost:!1}),We.current.sendEvent({type:"host-ack",name:Ye,playerId:We.current.room?.playerId??"",players:We.current.room?.players??[]});break;case"host-ack":We.current.setConnected(o.name),o.players&&We.current.setPlayers([...o.players,{id:We.current.room?.playerId??"",name:Ye,isHost:!1}]);break;case"player-list":We.current.setPlayers(o.players);break;case"game-state":{const t=o.payload;if("start"===t.action){const o=t.cards,a=t.difficulty;b(a),w(o),$([]),V(new Set),xe(0),ye(0),_e(0),Ie(0),ve(0);const n=t.firstTurnId??"";Re(n),Ce(n===We.current.room?.playerId),Fe({}),ke({msg:n===We.current.room?.playerId?d("yourTurn",e):d("theirTurn",e),type:"info"}),ze(!1),Te(!1),r("playing")}else if("flip"===t.action){const e=t.cardId;w(o=>o.map(o=>o.id===e?{...o,flipped:!0}:o)),$(o=>[...o,e])}else if("match"===t.action){const o=t.pairId,a=t.scorerId,r=t.nextTurnId;w(e=>e.map(e=>e.pairId===o?{...e,matched:!0}:e)),$([]),ye(e=>e+1),Fe(e=>({...e,[a]:(e[a]??0)+1})),a===We.current.room?.playerId?_e(e=>e+1):Ie(e=>e+1),Re(r),Ce(r===We.current.room?.playerId);const n=me[Math.floor(Math.random()*me.length)];ke({msg:`${d(n,e)} ${d("matched",e)}`,type:"match"}),He.current=!1}else if("no-match"===t.action){const o=t.ids,a=t.nextTurnId;V(new Set(o)),ke({msg:d("tryAgain",e),type:"miss"}),setTimeout(()=>{w(e=>e.map(e=>o.includes(e.id)?{...e,flipped:!1}:e)),$([]),V(new Set),Re(a),Ce(a===We.current.room?.playerId),He.current=!1},800)}else"game-end"===t.action&&(_e(t.myPairs??Be),Ie(t.opponentPairs??Ee),Te(!0),r("gameover"));break}case"game-over":r("gameover");break;case"rematch-request":Ne("received");break;case"rematch-accepted":Ne("none"),r("difficulty");break;case"player-left":Oe(!0),r("gameover")}},[Ye,e]),Ve=(0,s.Ky)({gameId:"memory",playerName:Ye,onEvent:qe}),We=(0,a.useRef)(Ve);We.current=Ve;const Je=(0,s.zj)({gameId:"memory",enabled:"online"===n}),Xe=u[x],Ue=function(e){return"easy"===e?4:"medium"===e?6:8}(x),Ke=function(e){return"easy"===e?"lg":"medium"===e?"md":"sm"}(x),Qe=(0,a.useMemo)(()=>{const e=p.find(e=>e.id===g);return e?.symbols??p[0].symbols},[g]);(0,a.useEffect)(()=>{if("playing"===t)return Ge.current=setInterval(()=>ve(e=>e+1),1e3),()=>{Ge.current&&clearInterval(Ge.current)};Ge.current&&clearInterval(Ge.current)},[t]);const Ze=(0,a.useCallback)(o=>{b(o);const t=function(e,o){const t=m(e).slice(0,o),a=[];return t.forEach((e,o)=>{a.push({id:2*o,symbol:e,pairId:o,flipped:!1,matched:!1}),a.push({id:2*o+1,symbol:e,pairId:o,flipped:!1,matched:!1})}),m(a)}(Qe,u[o]);if(w(t),$([]),V(new Set),xe(0),ye(0),_e(0),Ie(0),ve(0),Ce(!0),ke({msg:d("online"===n?"yourTurn":"flipTwo",e),type:"info"}),ze(!1),Te(!1),r("playing"),"online"===n&&"host"===We.current.room?.role){const e=We.current.room.playerId;Re(e),We.current.sendEvent({type:"game-state",payload:{action:"start",cards:t,difficulty:o,firstTurnId:e}})}},[Qe,e,n]),eo=(0,a.useCallback)(o=>{if(He.current||o.matched||o.flipped)return;if("online"===n&&!Me)return;const t=[...v,o.id];if($(t),w(e=>e.map(e=>e.id===o.id?{...e,flipped:!0}:e)),"online"===n&&We.current.sendEvent({type:"game-state",payload:{action:"flip",cardId:o.id}}),2===t.length){He.current=!0,xe(e=>e+1);const[a,i]=t,s=y.find(e=>e.id===a),l=o;if(s.pairId===l.pairId){const o=be+1;ye(o);const t=me[Math.floor(Math.random()*me.length)];if(ke({msg:`${d(t,e)} ${d("matched",e)}`,type:"match"}),"online"===n){const e=We.current.room?.playerId??"";_e(e=>e+1),Fe(o=>({...o,[e]:(o[e]??0)+1})),We.current.sendEvent({type:"game-state",payload:{action:"match",pairId:s.pairId,scorerId:e,nextTurnId:e}})}setTimeout(()=>{if(w(e=>e.map(e=>e.pairId===s.pairId?{...e,matched:!0}:e)),$([]),He.current=!1,o===Xe){if(ke({msg:d("allFound",e),type:"match"}),"solo"===n){const e=he+1,o=ge(x);(!o||e<o)&&(function(e,o){try{const t=JSON.parse(localStorage.getItem(fe)??"{}");(!t[e]||o<t[e])&&(t[e]=o,localStorage.setItem(fe,JSON.stringify(t)))}catch{}}(x,e),ze(!0))}if("online"===n){const e=We.current.room?.playerId??"",o={...Pe,[e]:(Pe[e]??0)+1};We.current.sendEvent({type:"game-state",payload:{action:"game-end",playerPairs:o}})}Te(!0),setTimeout(()=>r("gameover"),1200)}},500)}else{if(ke({msg:d("tryAgain",e),type:"miss"}),V(new Set([a,i])),"online"===n){const e=We.current.room?.players??[],o=(e.findIndex(e=>e.id===We.current.room?.playerId)+1)%e.length,t=e[o]?.id??"";Ce(!1),Re(t),We.current.sendEvent({type:"game-state",payload:{action:"no-match",ids:[a,i],nextTurnId:t}})}setTimeout(()=>{w(e=>e.map(e=>e.id===a||e.id===i?{...e,flipped:!1}:e)),$([]),V(new Set),He.current=!1},800)}}},[v,y,be,Xe,he,x,e,n,Me,Be,Ee]),oo=ge(x);if("theme"===t)return(0,l.jsx)(j,{children:(0,l.jsxs)(z,{children:[(0,l.jsxs)(S,{children:["🃏 ",d("title",e)]}),(0,l.jsx)(T,{children:d("pickTheme",e)}),(0,l.jsx)(M,{children:p.map(o=>(0,l.jsxs)(C,{accent:o.color,onClick:()=>{h(o.id),r("difficulty")},children:[(0,l.jsx)(A,{children:o.emoji}),(0,l.jsx)(B,{children:d(o.id,e)}),(0,l.jsx)(R,{children:o.preview.map((e,o)=>(0,l.jsx)("span",{children:e},o))}),(0,l.jsx)(_,{children:d(`${o.id}Desc`,e)})]},o.id))})]})});if("difficulty"===t){const t=e=>{"online"===n?(b(e),r("lobby")):Ze(e)};return(0,l.jsx)(j,{children:(0,l.jsxs)(z,{children:[(0,l.jsxs)(S,{children:["🃏 ",d("title",e)]}),(0,l.jsx)(T,{children:d("pickSize",e)}),o&&(0,l.jsxs)(ce,{children:[(0,l.jsxs)(de,{active:"solo"===n,onClick:()=>c("solo"),children:["🎯 ",d("solo",e)]}),(0,l.jsxs)(de,{active:"online"===n,onClick:()=>c("online"),children:["🌐 ",d("online",e)]})]}),(0,l.jsxs)(E,{children:[(0,l.jsxs)(I,{accent:"#3fb950",onClick:()=>t("easy"),children:[(0,l.jsx)(P,{children:"🌟"}),(0,l.jsx)(F,{children:d("easy",e)}),(0,l.jsx)(L,{children:d("easyDesc",e)})]}),(0,l.jsxs)(I,{accent:"#f59e0b",onClick:()=>t("medium"),children:[(0,l.jsx)(P,{children:"🔥"}),(0,l.jsx)(F,{children:d("medium",e)}),(0,l.jsx)(L,{children:d("mediumDesc",e)})]}),(0,l.jsxs)(I,{accent:"#f97583",onClick:()=>t("hard"),children:[(0,l.jsx)(P,{children:"💪"}),(0,l.jsx)(F,{children:d("hard",e)}),(0,l.jsx)(L,{children:d("hardDesc",e)})]})]}),oo>0&&"solo"===n&&(0,l.jsxs)(ie,{children:["🏆 ",d("bestMoves",e),": ",oo," ",d("finalMoves",e)]})]})})}if("lobby"===t)return(0,l.jsx)(j,{children:(0,l.jsxs)(z,{children:[(0,l.jsxs)(S,{children:["🃏 ",d("title",e)]}),Ve.room?.connected?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(T,{children:"host"===Ve.room.role?"pt"===e?`${Ve.room.players.length} jogadores. Clica para começar.`:`${Ve.room.players.length} players. Click to start.`:"pt"===e?`Ligado! ${Ve.room.players.length} jogadores na sala.`:`Connected! ${Ve.room.players.length} players in room.`}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:Ve.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===Ve.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===Ve.room.role&&(0,l.jsx)(ne,{accent:"#8b5cf6",onClick:()=>Ze(x),children:"pt"===e?"Começar!":"Start!"})]}):(0,l.jsx)(s.XB,{lang:e,room:Ve.room,error:Ve.error,availableRooms:Je.rooms,onCreateRoom:()=>{const{code:e,roomName:o}=Ve.createRoom();Je.publishRoom({code:e,roomName:o,hostName:Ye,playerCount:1})},onJoinRoom:e=>Ve.joinRoom(e),onLeaveRoom:()=>{Je.unpublishRoom(),Ve.leaveRoom(),r("difficulty")}})]})});if("gameover"===t){const o="online"===n,t=Be>Ee,a=Be===Ee,s=d(Le?"opponentLeft":a?"tied":t?"youWin":"youLose",e),p=()=>{"received"===De?(Ne("none"),r("difficulty"),We.current.sendEvent({type:"rematch-accepted"})):(Ne("sent"),We.current.sendEvent({type:"rematch-request"}))};return(0,l.jsxs)(j,{children:[Se&&pe.map((e,o)=>(0,l.jsx)(se,{left:5+12*o,delay:.1*o,color:ue[o%ue.length],children:e},o)),(0,l.jsxs)(K,{children:[(0,l.jsx)(Z,{children:o?t?"🎉":a?"🤝":"😅":"🏆"}),(0,l.jsx)(Q,{children:o?s:d("gameOver",e)}),!o&&(0,l.jsx)(le,{children:d("allFound",e)}),(0,l.jsx)(ee,{children:o&&(Ve.room?.players??[]).length>2?(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6,width:"100%",maxWidth:280},children:(Ve.room?.players??[]).map(e=>({...e,pts:Pe[e.id]??0})).sort((e,o)=>o.pts-e.pts).map((o,t)=>(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,l.jsx)("span",{style:{fontSize:16,minWidth:24},children:0===t?"🥇":1===t?"🥈":2===t?"🥉":`${t+1}.`}),(0,l.jsxs)("span",{style:{flex:1,fontWeight:600,color:o.id===Ve.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[o.name,o.id===Ve.room?.playerId?` (${d("you",e)})`:""]}),(0,l.jsxs)("span",{style:{fontSize:20,fontWeight:800,color:0===t?"#3fb950":i.w4.colors.mainText},children:[o.pts," ",d("pairs",e)]})]},o.id))}):o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(oe,{children:[(0,l.jsx)(te,{children:d("you",e)}),(0,l.jsx)(ae,{color:"#3fb950",children:Be})]}),(0,l.jsxs)(oe,{children:[(0,l.jsx)(te,{children:d("opponent",e)}),(0,l.jsx)(ae,{color:"#f97583",children:Ee})]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(oe,{children:[(0,l.jsx)(te,{children:d("moves",e)}),(0,l.jsx)(ae,{children:he})]}),(0,l.jsxs)(oe,{children:[(0,l.jsx)(te,{children:d("pairs",e)}),(0,l.jsx)(ae,{color:"#3fb950",children:Xe})]}),(0,l.jsxs)(oe,{children:[(0,l.jsx)(te,{children:d("finalTime",e)}),(0,l.jsx)(ae,{color:"#f59e0b",children:f(we)})]})]})}),!o&&je&&(0,l.jsxs)(re,{children:["🎉 ",d("newRecord",e)]}),!o&&oo>0&&!je&&(0,l.jsxs)(ie,{children:["🏆 ",d("bestMoves",e),": ",oo," ",d("finalMoves",e)]}),o&&!Le?"sent"===De?(0,l.jsx)(ne,{accent:"#666",children:d("waiting",e)}):"received"===De?(0,l.jsxs)(ne,{accent:"#3fb950",onClick:p,children:[d("rematch",e)," ✓"]}):(0,l.jsx)(ne,{accent:"#8b5cf6",onClick:p,children:d("rematch",e)}):(0,l.jsx)(ne,{accent:"#8b5cf6",onClick:()=>{o&&We.current.leaveRoom(),c("solo"),r("theme")},children:d("playAgain",e)})]})]})}return(0,l.jsx)(j,{children:(0,l.jsxs)(O,{children:[(0,l.jsx)(D,{children:"online"===n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(N,{highlight:Me,children:["⭐ ",d("you",e),": ",Be]}),(0,l.jsxs)(N,{children:["👤 ",d("opponent",e),": ",Ee]}),(0,l.jsxs)(N,{children:[d("pairs",e),": ",be,"/",Xe]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(N,{children:["🎴 ",d("moves",e),": ",he]}),(0,l.jsxs)(N,{highlight:be===Xe,children:["⭐ ",d("pairs",e),": ",be,"/",Xe]}),(0,l.jsxs)(N,{children:["⏱️ ",f(we)]})]})}),(0,l.jsx)(H,{type:$e.type,children:"online"===n?d(Me?"yourTurn":"theirTurn",e):$e.msg},$e.msg),(0,l.jsx)(G,{cols:Ue,children:y.map(e=>(0,l.jsx)(Y,{className:"card-outer",matched:e.matched,wrong:k.has(e.id),onClick:()=>eo(e),"aria-label":e.flipped?e.symbol:"Hidden card",children:(0,l.jsxs)(q,{flipped:e.flipped,children:[(0,l.jsx)(W,{}),(0,l.jsxs)(J,{matched:e.matched,children:[(0,l.jsx)(X,{size:Ke,children:e.symbol}),e.matched&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(U,{i:0,children:"✨"}),(0,l.jsx)(U,{i:1,children:"✨"})]})]})]})},e.id))})]})})}},8022(e,o,t){t.d(o,{k:()=>I});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5723);const l=[{id:"dodge",emoji:"💣",instruction:{pt:"Foge das bombas!",en:"Dodge the bombs!"}},{id:"tap-fast",emoji:"⚡",instruction:{pt:"Toca o mais rápido possível!",en:"Tap as fast as you can!"}},{id:"color-match",emoji:"🎨",instruction:{pt:"Toca na cor certa!",en:"Tap the right color!"}},{id:"remember",emoji:"🧠",instruction:{pt:"Memoriza a sequência!",en:"Remember the sequence!"}},{id:"catch",emoji:"🪣",instruction:{pt:"Apanha os que caem!",en:"Catch the falling ones!"}}];function c(e){return e[Math.floor(Math.random()*e.length)]}function d(e){const o=[...e];for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o}const p=n.keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=n.keyframes`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,m=n.keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,f=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,g=(n.keyframes`from{transform:translateY(-40px);opacity:0}to{transform:translateY(0);opacity:1}`,n.keyframes`0%,100%{transform:rotate(0)}25%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}`),h=r.default.div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${i.w4.spacing.lg};gap:${i.w4.spacing.lg};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 30%,rgba(88,166,255,0.06) 0%,transparent 70%),#080b12;`,x=r.default.h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${i.w4.colors.mainText};margin:0;text-align:center;animation:${p} 0.3s ease;`,b=r.default.p`font-size:${i.w4.typography.fontSizeMd};color:${i.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:320px;`,y=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=(r.default.div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:${i.w4.colors.accent};animation:${f} 0.5s ease;`,r.default.span`font-size:72px;animation:${m} 1s ease-in-out infinite;`),v=r.default.div`display:flex;flex-direction:column;align-items:center;gap:${i.w4.spacing.md};padding:${i.w4.spacing.xl};background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.lg};animation:${u} 0.3s ease;`,$=r.default.span`font-size:72px;animation:${g} 1s ease-in-out infinite;`,k=r.default.p`font-size:${i.w4.typography.fontSizeLg};font-weight:700;color:${i.w4.colors.mainText};text-align:center;margin:0;`,j=r.default.div`position:relative;width:100%;max-width:400px;height:300px;background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};overflow:hidden;touch-action:manipulation;`,z=r.default.button`
  position:absolute;left:${({x:e})=>e}%;top:${({y:e})=>e}%;width:${({size:e})=>e}px;height:${({size:e})=>e}px;
  transform:translate(-50%,-50%);border-radius:50%;border:none;cursor:pointer;
  font-size:${({size:e})=>.6*e}px;display:flex;align-items:center;justify-content:center;
  background:rgba(88,166,255,0.15);animation:${u} 0.2s ease;transition:transform 0.1s;
  &:active{transform:translate(-50%,-50%) scale(0.9);}
`,S=r.default.div`display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%;max-width:300px;`,T=r.default.button`
  aspect-ratio:1;border-radius:${i.w4.borderRadius.lg};background:${({bg:e})=>e};border:3px solid transparent;
  cursor:pointer;transition:all 0.15s;min-height:70px;
  &:hover{border-color:rgba(255,255,255,0.3);transform:scale(1.05);}
  &:active{transform:scale(0.95);}
`,M=r.default.div`display:flex;gap:12px;justify-content:center;flex-wrap:wrap;`,C=r.default.div`
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
`,B=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};`,_=r.default.div`padding:8px 20px;background:${i.w4.colors.surface};border:1px solid ${i.w4.colors.accent};border-radius:24px;font-size:16px;font-weight:700;color:${i.w4.colors.accent};`,E=["#f97583","#58a6ff","#3fb950","#f59e0b","#d2a8ff","#ff6bcb","#06b6d4","#ef4444","#a855f7"];function I({lang:e}){const[o,t]=(0,a.useState)("menu"),[r,n]=(0,a.useState)(0),[i,p]=(0,a.useState)(0),[u,m]=(0,a.useState)(null),[f,g]=(0,a.useState)(0),[I,P]=(0,a.useState)({}),[F,L]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-miniparty-best")??"0")}catch{return 0}}),O=(0,a.useRef)(null),D=(0,a.useRef)(null),N=(0,a.useCallback)(()=>{O.current&&(clearInterval(O.current),O.current=null),D.current&&(clearInterval(D.current),D.current=null)},[]),H=(0,a.useCallback)(()=>{N();const e=r+1;if(e>5){const e=i+f;if(e>F){L(e);try{localStorage.setItem("atlantis-miniparty-best",String(e))}catch{}}return void t("scores")}n(e),g(0),m(l[(e-1)%l.length]),P({}),t("intro"),setTimeout(()=>t("playing"),2e3)},[r,i,f,F,N]),G=(0,a.useCallback)(()=>{N(),p(e=>e+f),t("result")},[f,N]),Y=(0,a.useCallback)(()=>{n(0),p(0),g(0),H()},[H]);(0,a.useEffect)(()=>{if("playing"===o)return P(e=>({...e,timeLeft:6})),O.current=setInterval(()=>{P(e=>{const o=(e.timeLeft??6)-1;return o<=0?(G(),e):{...e,timeLeft:o}})},1e3),()=>{O.current&&clearInterval(O.current)}},[o,G]);const q=(0,a.useCallback)(()=>{g(e=>e+1),P(e=>({...e,tapX:10+80*Math.random(),tapY:10+80*Math.random()}))},[]);(0,a.useEffect)(()=>{if("playing"!==o||"color-match"!==u?.id)return;const e=c(E),t=d([...E]).slice(0,9);t.includes(e)||(t[Math.floor(9*Math.random())]=e),P(o=>({...o,targetColor:e,gridColors:t,colorCorrect:null}))},[o,u]);const V=(0,a.useCallback)(e=>{if(e===I.targetColor){g(e=>e+1);const e=c(E),o=d([...E]).slice(0,9);o.includes(e)||(o[Math.floor(9*Math.random())]=e),P(t=>({...t,targetColor:e,gridColors:o,colorCorrect:!0}))}else P(e=>({...e,colorCorrect:!1}));setTimeout(()=>P(e=>({...e,colorCorrect:null})),300)},[I.targetColor]);(0,a.useEffect)(()=>{if("playing"!==o||"remember"!==u?.id)return;const e=["🐶","🐱","🐸","🦊","🐼","🐵","🐰","🐷"],t=3+r,a=Array.from({length:Math.min(t,6)},()=>c(e));P(e=>({...e,sequence:a,seqPhase:"show",seqIdx:0,userSeq:[]}));let n=0;const i=setInterval(()=>{n++,n>=a.length?(clearInterval(i),setTimeout(()=>P(e=>({...e,seqPhase:"input",seqIdx:0})),800)):P(e=>({...e,seqIdx:n}))},700);return()=>clearInterval(i)},[o,u,r]);const W=(0,a.useCallback)(e=>{const o=I.sequence,t=[...I.userSeq??[],e];o[t.length-1]===e?t.length===o.length?(g(e=>e+o.length),G()):P(e=>({...e,userSeq:t})):G()},[I.sequence,I.userSeq,G]);(0,a.useEffect)(()=>{if("playing"!==o||"dodge"!==u?.id)return;const e=[];let t=0,a=0;P(e=>({...e,playerX:50,bombs:[]}));const r=()=>{const o=Date.now();o-a>600&&(a=o,e.push({id:++t,x:10+80*Math.random(),y:-5}));for(const o of e)o.y+=1.5;e.length;for(let o=e.length-1;o>=0;o--)e[o].y>105&&(e.splice(o,1),g(e=>e+1));P(o=>({...o,bombs:e.map(e=>({...e}))})),n.current=requestAnimationFrame(r)},n={current:requestAnimationFrame(r)};return()=>cancelAnimationFrame(n.current)},[o,u]),(0,a.useEffect)(()=>{if("playing"!==o||"catch"!==u?.id)return;const e=[];let t=0,a=0;P(e=>({...e,bucketX:50,items:[]}));const r=()=>{const o=Date.now();o-a>500&&(a=o,e.push({id:++t,x:10+80*Math.random(),y:-5,emoji:c(["⭐","💎","🍎","🍬","🎁"])}));for(const o of e)o.y+=1.2;for(let o=e.length-1;o>=0;o--)e[o].y>105&&e.splice(o,1);P(o=>({...o,items:e.map(e=>({...e}))})),n.current=requestAnimationFrame(r)},n={current:requestAnimationFrame(r)};return()=>cancelAnimationFrame(n.current)},[o,u]);const J=(0,a.useCallback)(e=>{P(o=>({...o,bucketX:Math.max(10,Math.min(90,(o.bucketX??50)+("left"===e?-15:15)))}))},[]);if("menu"===o)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:["🎉 ","pt"===e?"Mini Festa!":"Mini Party!"]}),(0,s.jsx)(b,{children:"pt"===e?"5 mini-jogos rápidos! Consegues pontos máximos?":"5 quick mini-games! Can you get max points?"}),F>0&&(0,s.jsxs)(b,{children:["🏆 ","pt"===e?"Melhor":"Best",": ",F]}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:Y,children:"pt"===e?"Jogar!":"Play!"})]});if("intro"===o&&u)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(_,{children:["pt"===e?"Ronda":"Round"," ",r,"/",5]}),(0,s.jsxs)(v,{children:[(0,s.jsx)($,{children:u.emoji}),(0,s.jsx)(k,{children:u.instruction["pt"===e?"pt":"en"]})]})]});if("result"===o)return(0,s.jsxs)(h,{children:[(0,s.jsxs)(x,{children:[f>0?"🎉":"😅"," +",f]}),(0,s.jsxs)(B,{color:"#3fb950",children:["⭐ ",i+f]}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:H,children:r>=5?"pt"===e?"Ver resultados":"See results":"➡️"})]});if("scores"===o)return(0,s.jsxs)(h,{children:[(0,s.jsx)(w,{children:"🏆"}),(0,s.jsx)(x,{children:"pt"===e?"Resultados":"Results"}),(0,s.jsxs)(B,{color:"#3fb950",children:["⭐ ",i]}),i>=F&&i>0&&(0,s.jsxs)(b,{style:{color:"#f59e0b",fontWeight:700},children:["🎉 ","pt"===e?"Novo recorde!":"New record!"]}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>{n(0),p(0),t("menu")},children:"Menu"})]});const X=I.timeLeft??6;return(0,s.jsxs)(h,{children:[(0,s.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,s.jsxs)(B,{children:["⭐ ",f]}),(0,s.jsxs)(B,{color:X<=2?"#f97583":void 0,children:["⏱️ ",X,"s"]})]}),"tap-fast"===u?.id&&(0,s.jsx)(j,{onClick:q,children:(0,s.jsx)(z,{x:I.tapX??50,y:I.tapY??50,size:70,onClick:e=>{e.stopPropagation(),q()},children:"⚡"})}),"color-match"===u?.id&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{width:80,height:80,borderRadius:"50%",background:I.targetColor??"#fff",border:"4px solid rgba(255,255,255,0.3)"}}),(0,s.jsx)(S,{children:(I.gridColors??[]).map((e,o)=>(0,s.jsx)(T,{bg:e,onClick:()=>V(e)},o))})]}),"remember"===u?.id&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M,{children:(I.sequence??[]).map((e,o)=>(0,s.jsx)(C,{active:"show"===I.seqPhase&&o<=(I.seqIdx??0),revealed:"show"===I.seqPhase&&o===(I.seqIdx??0),onClick:()=>"input"===I.seqPhase&&W(e),children:"show"===I.seqPhase&&o<=(I.seqIdx??0)?e:"?"},o))}),"input"===I.seqPhase&&(0,s.jsx)(b,{children:"pt"===e?"Agora repete!":"Now repeat!"})]}),"dodge"===u?.id&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(j,{children:[(0,s.jsx)("div",{style:{position:"absolute",bottom:20,left:`${I.playerX??50}%`,transform:"translateX(-50%)",fontSize:36,transition:"left 0.15s"},children:"🏃"}),(I.bombs??[]).map(e=>(0,s.jsx)(A,{x:e.x,y:e.y,children:"💣"},e.id))]}),(0,s.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>P(e=>({...e,playerX:Math.max(10,(e.playerX??50)-20)})),children:"⬅️"}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>P(e=>({...e,playerX:Math.min(90,(e.playerX??50)+20)})),children:"➡️"})]})]}),"catch"===u?.id&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(j,{children:[(0,s.jsx)(R,{x:I.bucketX??50,children:"🪣"}),(I.items??[]).map(e=>(0,s.jsx)(A,{x:e.x,y:e.y,children:e.emoji},e.id))]}),(0,s.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>J("left"),children:"⬅️"}),(0,s.jsx)(y,{accent:"#58a6ff",onClick:()=>J("right"),children:"➡️"})]})]})]})}},3065(e,o,t){t.d(o,{H:()=>re});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5723);const l="atlantis-pixelboard-gallery",c=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4ecdc4","#74c0fc","#748ffc","#da77f2","#f783ac","#ffffff","#868e96","#212529"],d=[8,12,16],p={title:{pt:"Tabuleiro de Pixels",en:"Pixel Board"},paint:{pt:"Pintar",en:"Paint"},eraser:{pt:"Apagar",en:"Eraser"},clearAll:{pt:"Limpar",en:"Clear"},save:{pt:"Guardar",en:"Save"},gallery:{pt:"Galeria",en:"Gallery"},back:{pt:"← Voltar",en:"← Back"},confirmClear:{pt:"Tens a certeza que queres apagar tudo?",en:"Are you sure you want to clear everything?"},yes:{pt:"Sim",en:"Yes"},no:{pt:"Não",en:"No"},drawingName:{pt:"Nome do desenho:",en:"Drawing name:"},myDrawing:{pt:"O meu desenho",en:"My drawing"},saved:{pt:"Guardado!",en:"Saved!"},emptyGallery:{pt:"Ainda sem desenhos guardados.",en:"No saved drawings yet."},load:{pt:"Carregar",en:"Load"},delete:{pt:"Apagar",en:"Delete"},close:{pt:"Fechar",en:"Close"},templates:{pt:"Modelos",en:"Templates"},heart:{pt:"Coração",en:"Heart"},star:{pt:"Estrela",en:"Star"},smiley:{pt:"Sorriso",en:"Smiley"},gridSize:{pt:"Tamanho",en:"Size"},selectedColor:{pt:"Cor selecionada",en:"Selected color"},undo:{pt:"Desfazer",en:"Undo"},tapToPaint:{pt:"Toca para pintar!",en:"Tap to paint!"}};function u(e){return Array(e*e).fill("")}function m(e,o,t){const a=u(t),r=Math.floor((t-e.length)/2);return e.forEach((e,n)=>{e.forEach((e,i)=>{const s=n+r,l=i+r;s>=0&&s<t&&l>=0&&l<t&&0!==e&&(a[s*t+l]=o[e]??"")})}),a}function f(e){return m([[0,1,1,0,0,0,1,1,0],[1,1,1,1,0,1,1,1,1],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0]],{1:"#ff6b6b"},e)}function g(e){return m([[0,0,0,0,1,0,0,0,0],[0,0,0,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,0,1,0,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,1]],{1:"#ffd43b"},e)}function h(e){return m([[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,2,1,1,1,1,2,1,1],[1,1,2,1,1,1,1,2,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,3,1,1],[1,1,1,3,3,3,3,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0]],{1:"#ffd43b",2:"#212529",3:"#212529"},e)}function x(e){localStorage.setItem(l,JSON.stringify(e))}const b=n.keyframes`
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
`,k=r.default.h1`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,j=r.default.div`
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
`,T=r.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  flex-shrink: 0;
`,M=r.default.button`
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
`,C=r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: ${i.w4.borderRadius.md};
  min-height: 44px;
  border: 1px solid ${({active:e,danger:o})=>o?"rgba(249,117,131,0.3)":e?i.w4.colors.accent+"50":i.w4.colors.border};
  background: ${({active:e,danger:o})=>o?"rgba(249,117,131,0.08)":e?"rgba(88,166,255,0.12)":i.w4.colors.surface};
  color: ${({active:e,danger:o})=>o?"#f97583":e?i.w4.colors.accent:i.w4.colors.mainText};
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
`,B=r.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
  border-radius: ${i.w4.borderRadius.lg};
`,_=r.default.span`
  font-size: clamp(0.85rem, 3vw, 1.1rem);
  font-weight: 700;
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.5;
  letter-spacing: 0.02em;
  text-align: center;
  padding: ${i.w4.spacing.sm};
`,E=r.default.div`
  background: ${({color:e})=>e||i.w4.colors.surface};
  cursor: crosshair;
  transition: background 0.08s;
  animation: ${({isNew:e})=>e?y:"none"} 0.18s ease;

  &:hover {
    filter: brightness(1.18);
    z-index: 1;
  }
`,I=r.default.div`
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
`,F=r.default.div`
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
`,D=r.default.div`
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
`,oe=r.default.button`
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
`,te=r.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 0;
  border: 1px solid ${i.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
`,ae=r.default.div`
  background: ${({color:e})=>e||i.w4.colors.mainBg};
`;function re({lang:e,onBack:o}){const t=(0,a.useCallback)(o=>p[o]?.[e]??p[o]?.en??o,[e]),[r,n]=(0,a.useState)(12),[m,b]=(0,a.useState)(()=>u(12)),[y,w]=(0,a.useState)([]),[re,ne]=(0,a.useState)(c[0]),[ie,se]=(0,a.useState)("paint"),[le,ce]=(0,a.useState)(null),[de,pe]=(0,a.useState)(!1),[ue,me]=(0,a.useState)(()=>function(){try{const e=localStorage.getItem(l);if(e)return JSON.parse(e)}catch{}return[]}()),[fe,ge]=(0,a.useState)("draw"),[he,xe]=(0,a.useState)(!1),[be,ye]=(0,a.useState)(!1),[we,ve]=(0,a.useState)(!1),[$e,ke]=(0,a.useState)(""),[je,ze]=(0,a.useState)(!1),Se=(0,a.useMemo)(()=>m.every(e=>""===e),[m]),Te=(0,a.useRef)(null),Me=(0,a.useRef)(null),Ce=(0,a.useRef)(null),Ae=(0,a.useCallback)(e=>{ce(e),Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>ce(null),200)},[]),Re=(0,a.useCallback)(e=>{w(o=>[...o.slice(-19),e])},[]),Be=(0,a.useCallback)(e=>{b(o=>{const t="eraser"===ie?"":re;if(o[e]===t)return o;Re(o);const a=[...o];return a[e]=t,a}),ze(!0),Ae(e)},[ie,re,Ae,Re]),_e=(0,a.useCallback)(()=>{w(e=>{if(0===e.length)return e;const o=e[e.length-1];return b(o),e.slice(0,-1)})},[]),Ee=(0,a.useCallback)(e=>{pe(!0),Be(e)},[Be]),Ie=(0,a.useCallback)(e=>{de&&Be(e)},[de,Be]),Pe=(0,a.useCallback)(()=>{pe(!1)},[]);(0,a.useEffect)(()=>{const e=()=>pe(!1);return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);const Fe=(0,a.useCallback)((e,o)=>{if(!Me.current)return null;const t=Me.current.getBoundingClientRect(),a=e-t.left,n=o-t.top;if(a<0||n<0||a>t.width||n>t.height)return null;const i=Math.floor(a/t.width*r),s=Math.floor(n/t.height*r);return i<0||i>=r||s<0||s>=r?null:s*r+i},[r]),Le=(0,a.useCallback)(e=>{const o=e.touches[0],t=Fe(o.clientX,o.clientY);Te.current={x:o.clientX,y:o.clientY,idx:t??-1}},[Fe]),Oe=(0,a.useCallback)(e=>{if(!Te.current)return;const o=e.changedTouches[0],t=Math.abs(o.clientX-Te.current.x),a=Math.abs(o.clientY-Te.current.y);if((t>8||a>8)&&(t>2*a||a<=8)){const e=Fe(o.clientX,o.clientY);null!==e&&Be(e)}},[Fe,Be]),De=(0,a.useCallback)(e=>{if(!Te.current)return;const o=e.changedTouches[0],t=Math.abs(o.clientX-Te.current.x),a=Math.abs(o.clientY-Te.current.y),r=Te.current.idx;Te.current=null,t<=8&&a<=8&&r>=0&&Be(r)},[Be]),Ne=(0,a.useCallback)(e=>{n(e),b(u(e)),w([]),ze(!1)},[]),He=(0,a.useCallback)(e=>{se(e)},[]),Ge=(0,a.useCallback)(()=>{Re(m),b(u(r)),xe(!1),ze(!1)},[r,m,Re]),Ye=(0,a.useCallback)(()=>{ke(t("myDrawing")),ye(!0)},[t]),qe=(0,a.useCallback)(()=>{const e=$e.trim()||t("myDrawing"),o=[{id:Date.now().toString(),name:e,grid:[...m],size:r,savedAt:Date.now()},...ue].slice(0,30);me(o),x(o),ye(!1),ve(!0),setTimeout(()=>ve(!1),1800)},[$e,m,r,ue,t]),Ve=(0,a.useCallback)(e=>{n(e.size),b(e.grid),w([]),ze(!0),ge("draw")},[]),We=(0,a.useCallback)(e=>{const o=ue.filter(o=>o.id!==e);me(o),x(o)},[ue]),Je=(0,a.useCallback)(e=>{Re(m),b(e(r)),ze(!0)},[r,m,Re]),Xe=(0,a.useMemo)(()=>({heart:f(8),star:g(8),smiley:h(8)}),[]);return"gallery"===fe?(0,s.jsxs)(v,{children:[(0,s.jsxs)($,{children:[(0,s.jsxs)(C,{onClick:()=>ge("draw"),children:["← ",t("close")]}),(0,s.jsxs)(Q,{children:["🖼️ ",t("gallery")]})]}),(0,s.jsx)(G,{children:0===ue.length?(0,s.jsx)(Z,{children:t("emptyGallery")}):(0,s.jsx)(Y,{children:ue.map(e=>(0,s.jsxs)(q,{children:[(0,s.jsx)(V,{cols:e.size,children:e.grid.map((e,o)=>(0,s.jsx)(W,{color:e},o))}),(0,s.jsxs)(J,{children:[(0,s.jsx)(X,{children:e.name}),(0,s.jsxs)(U,{children:[(0,s.jsx)(K,{variant:"primary",onClick:()=>Ve(e),children:t("load")}),(0,s.jsx)(K,{variant:"danger",onClick:()=>We(e.id),children:t("delete")})]})]})]},e.id))})})]}):(0,s.jsxs)(v,{children:[he&&(0,s.jsx)(O,{onClick:()=>xe(!1),children:(0,s.jsxs)(D,{onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(N,{children:t("confirmClear")}),(0,s.jsxs)(H,{children:[(0,s.jsx)(C,{onClick:()=>xe(!1),children:t("no")}),(0,s.jsx)(C,{danger:!0,onClick:Ge,children:t("yes")})]})]})}),be&&(0,s.jsx)(O,{onClick:()=>ye(!1),children:(0,s.jsxs)(D,{onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(N,{children:t("drawingName")}),(0,s.jsx)("input",{value:$e,onChange:e=>ke(e.target.value),onKeyDown:e=>{"Enter"===e.key&&qe(),"Escape"===e.key&&ye(!1)},autoFocus:!0,style:{background:i.w4.colors.mainBg,border:`1px solid ${i.w4.colors.border}`,borderRadius:i.w4.borderRadius.md,color:i.w4.colors.mainText,padding:"8px 12px",fontSize:i.w4.typography.fontSizeBase,fontFamily:i.w4.typography.fontFamily,width:"100%",outline:"none"}}),(0,s.jsxs)(H,{children:[(0,s.jsx)(C,{onClick:()=>ye(!1),children:t("no")}),(0,s.jsxs)(C,{onClick:qe,children:[t("save")," 💾"]})]})]})}),(0,s.jsx)($,{children:(0,s.jsxs)(k,{children:["🎨 ",t("title")]})}),(0,s.jsxs)(j,{children:[(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{onClick:_e,disabled:0===y.length,"aria-label":t("undo"),title:t("undo"),children:"↩️"}),(0,s.jsxs)(C,{active:"paint"===ie,onClick:()=>He("paint"),children:["🎨 ",t("paint")]}),(0,s.jsxs)(C,{active:"eraser"===ie,onClick:()=>He("eraser"),children:["🧹 ",t("eraser")]}),(0,s.jsx)(T,{children:d.map(e=>(0,s.jsxs)(M,{active:r===e,onClick:()=>Ne(e),children:[e,"×",e]},e))})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{danger:!0,onClick:()=>xe(!0),title:t("clearAll"),"aria-label":t("clearAll"),children:"🗑️"}),(0,s.jsx)(S,{onClick:Ye,title:t("save"),"aria-label":t("save"),children:"💾"}),(0,s.jsxs)(C,{onClick:()=>ge("gallery"),children:["🖼️ ",t("gallery")," ",ue.length>0&&`(${ue.length})`]})]})]}),(0,s.jsxs)(ee,{children:[(0,s.jsxs)("span",{style:{fontSize:12,color:i.w4.colors.mainTextMuted,alignSelf:"center",flexShrink:0},children:[t("templates"),":"]}),(0,s.jsxs)(oe,{onClick:()=>Je(f),children:[(0,s.jsx)(te,{cols:8,children:Xe.heart.map((e,o)=>(0,s.jsx)(ae,{color:e},o))}),t("heart")]}),(0,s.jsxs)(oe,{onClick:()=>Je(g),children:[(0,s.jsx)(te,{cols:8,children:Xe.star.map((e,o)=>(0,s.jsx)(ae,{color:e},o))}),t("star")]}),(0,s.jsxs)(oe,{onClick:()=>Je(h),children:[(0,s.jsx)(te,{cols:8,children:Xe.smiley.map((e,o)=>(0,s.jsx)(ae,{color:e},o))}),t("smiley")]})]}),(0,s.jsxs)(A,{ref:Me,onTouchStart:Le,onTouchMove:Oe,onTouchEnd:De,children:[(0,s.jsx)(R,{cols:r,role:"grid","aria-label":t("title"),children:m.map((e,o)=>(0,s.jsx)(E,{color:e,isNew:o===le,role:"gridcell","aria-label":`cell ${o}`,onMouseDown:()=>Ee(o),onMouseEnter:()=>Ie(o),onMouseUp:Pe},o))}),Se&&!je&&(0,s.jsx)(B,{children:(0,s.jsx)(_,{children:t("tapToPaint")})})]}),(0,s.jsxs)(I,{role:"group","aria-label":t("selectedColor"),children:[c.map(e=>(0,s.jsx)(P,{color:e,selected:"paint"===ie&&re===e,onClick:()=>{ne(e),se("paint")},role:"radio","aria-checked":"paint"===ie&&re===e,"aria-label":e},e)),(0,s.jsx)(F,{selected:"eraser"===ie,onClick:()=>se("eraser"),role:"radio","aria-checked":"eraser"===ie,"aria-label":t("eraser"),children:"🧹"})]}),we&&(0,s.jsxs)(L,{children:["✅ ",t("saved")]})]})}r.default.div`
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
`},2742(e,o,t){t.d(o,{m:()=>ae});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5723);const l={title:{pt:"Caçador de Sons",en:"Sound Hunter"},subtitle:{pt:"Encontra os sons ao teu redor!",en:"Find the sounds around you!"},progress:{pt:"Missões completas",en:"Missions complete"},record:{pt:"Gravar",en:"Record"},stop:{pt:"Parar",en:"Stop"},play:{pt:"Ouvir",en:"Play"},complete:{pt:"Concluído!",en:"Done!"},markDone:{pt:"Marcar como feito",en:"Mark as done"},back:{pt:"Voltar",en:"Back"},reset:{pt:"Recomeçar",en:"Reset"},permDenied:{pt:"Microfone bloqueado. Verifica as permissões do navegador.",en:"Microphone blocked. Check your browser permissions."},permError:{pt:"Não foi possível aceder ao microfone.",en:"Could not access the microphone."},celebrate:{pt:"🎉 Parabéns, Caçador de Sons!",en:"🎉 Congrats, Sound Hunter!"},celebrateSub:{pt:"Encontraste todos os sons! Que aventura incrível!",en:"You found every sound! What an amazing adventure!"},celebrateReset:{pt:"Jogar outra vez",en:"Play again"},recording:{pt:"A gravar…",en:"Recording…"},tapRecord:{pt:"Toca em Gravar",en:"Tap Record"}};function c(e,o){return l[e]["pt"===o?"pt":"en"]}const d=[{id:"dog",emoji:"🐕",en:"Dog barking",pt:"Cão a ladrar"},{id:"water",emoji:"🚿",en:"Water running",pt:"Água a correr"},{id:"clap",emoji:"👏",en:"Clapping hands",pt:"Palmas"},{id:"door",emoji:"🚪",en:"Door closing",pt:"Porta a fechar"},{id:"cat",emoji:"🐱",en:"Cat meowing",pt:"Gato a miar"},{id:"bell",emoji:"🔔",en:"Bell ringing",pt:"Campainha a tocar"},{id:"alarm",emoji:"⏰",en:"Alarm clock",pt:"Despertador"},{id:"sing",emoji:"🎵",en:"Singing a song",pt:"Cantar uma música"},{id:"wind",emoji:"💨",en:"Wind blowing",pt:"Vento a soprar"},{id:"bird",emoji:"🦜",en:"Bird singing",pt:"Pássaro a cantar"},{id:"keys",emoji:"🗝️",en:"Jingling keys",pt:"Chaves a tilintar"},{id:"laugh",emoji:"😂",en:"Laughter",pt:"Gargalhada"}],p="atlantis-soundhunter-progress";function u(){return Object.fromEntries(d.map(e=>[e.id,{recording:!1,audioUrl:null,completed:!1,timerSecs:0}]))}const m=n.keyframes`
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
`,k=r.default.header`
  text-align: center;
  margin-bottom: ${i.w4.spacing.xl};
`,j=r.default.h1`
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
`,T=r.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${i.w4.spacing.sm};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,M=r.default.span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.accent};
`,C=r.default.div`
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
`,B=r.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  border-radius: 999px;
  background: linear-gradient(90deg, #58a6ff, #79c0ff, #a5d6ff);
  background-size: 200% auto;
  animation: ${w} 2s linear infinite;
  transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`,_=r.default.div`
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
`,E=r.default.div`
  background: ${({completed:e})=>e?"#0e2a1a":i.w4.colors.surface};
  border: 2px solid ${({completed:e,recording:o})=>e?"#2ea043":o?"#f85149":i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  transition: border-color 0.2s ease, background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${({justCompleted:e,completed:o})=>e?`${f} 0.35s ease, ${h} 1.4s ease 0.1s`:o?"none":`${m} 0.35s ease`};
  cursor: default;
  position: relative;

  &:hover {
    transform: ${({completed:e})=>e?"none":"translateY(-2px)"};
    box-shadow: ${({completed:e,recording:o})=>e?"0 4px 16px rgba(46, 160, 67, 0.15)":o?"0 8px 24px rgba(248, 81, 73, 0.25)":"0 8px 24px rgba(88, 166, 255, 0.15)"};
  }

  &:hover .record-btn {
    background: ${i.w4.colors.accentHover};
    transform: translateY(-1px);
  }

  &:active .record-btn {
    transform: scale(0.97) translateY(0);
  }
`,I=r.default.div`
  font-size: 52px;
  line-height: 1;
  user-select: none;
`,P=r.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  text-align: center;
`,F=r.default.div`
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
`;function D(){return(0,s.jsx)(L,{children:[0,.1,.2,.15,.05,.25,.1].map((e,o)=>(0,s.jsx)(O,{delay:e},o))})}const N=r.default.span`
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
`;function ee(){const e=Array.from({length:50},(e,o)=>({key:o,left:100*Math.random(),delay:20*Math.random(),color:J[Math.floor(Math.random()*J.length)],size:8+Math.floor(10*Math.random())}));return(0,s.jsx)(s.Fragment,{children:e.map(e=>(0,s.jsx)(X,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.key))})}function oe({mission:e,state:o,lang:t,justCompleted:a,onRecord:r,onStop:n,onPlay:i,onComplete:l,permError:d}){const p="pt"===t?e.pt:e.en;return(0,s.jsxs)(E,{completed:o.completed,recording:o.recording,justCompleted:a,children:[(0,s.jsx)(I,{children:e.emoji}),(0,s.jsx)(P,{children:p}),o.completed?(0,s.jsxs)(Y,{children:[(0,s.jsx)(q,{children:"⭐"})," ",c("complete",t)]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(F,{children:[o.recording?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(D,{}),(0,s.jsxs)(N,{children:[10-o.timerSecs,"s"]}),(0,s.jsxs)(G,{variant:"danger",onClick:n,children:["⏹ ",c("stop",t)]})]}):(0,s.jsxs)(G,{variant:"primary",className:"record-btn",onClick:r,children:["🎙 ",c("record",t)]}),o.audioUrl&&!o.recording&&(0,s.jsxs)(G,{variant:"ghost",onClick:i,children:["▶ ",c("play",t)]})]}),(0,s.jsx)(H,{children:o.recording?c("recording",t):o.audioUrl?"":c("tapRecord",t)}),d&&(0,s.jsx)(V,{children:d}),o.audioUrl&&!o.recording&&(0,s.jsxs)(G,{variant:"success",onClick:l,children:["✅ ",c("markDone",t)]})]})]})}const te=[25,50,75];function ae({lang:e,onBack:o}){const[t,r]=(0,a.useState)(()=>{const e=u(),o=function(){try{const e=localStorage.getItem(p);if(e)return new Set(JSON.parse(e))}catch{}return new Set}();for(const t of o)e[t]&&(e[t]={...e[t],completed:!0});return e}),[n,i]=(0,a.useState)({}),[l,m]=(0,a.useState)(new Set),[f,g]=(0,a.useState)(null),h=(0,a.useRef)(0),x=(0,a.useRef)(null),b=(0,a.useRef)([]),y=(0,a.useRef)(null),w=(0,a.useRef)(null),v=Object.values(t).filter(e=>e.completed).length,E=v===d.length,I=Math.round(v/d.length*100);(0,a.useEffect)(()=>{const e=h.current;for(const o of te)if(e<o&&I>=o){g(o),setTimeout(()=>g(null),1800);break}h.current=I},[I]),(0,a.useEffect)(()=>{!function(e){try{localStorage.setItem(p,JSON.stringify([...e]))}catch{}}(new Set(Object.entries(t).filter(([,e])=>e.completed).map(([e])=>e)))},[t]);const P=(0,a.useCallback)((e,o)=>{r(t=>({...t,[e]:{...t[e],...o}}))},[]),L=(0,a.useCallback)(()=>{null!==y.current&&(clearInterval(y.current),y.current=null)},[]),O=(0,a.useCallback)(e=>{L(),x.current&&"inactive"!==x.current.state&&x.current.stop(),P(e,{recording:!1,timerSecs:0}),w.current=null},[L,P]),D=(0,a.useCallback)(async o=>{let t;w.current&&w.current!==o&&O(w.current),i(e=>({...e,[o]:""}));try{t=await navigator.mediaDevices.getUserMedia({audio:!0})}catch(t){const a=t instanceof DOMException&&"NotAllowedError"===t.name?c("permDenied",e):c("permError",e);return void i(e=>({...e,[o]:a}))}b.current=[];const a=new MediaRecorder(t);x.current=a,w.current=o,a.ondataavailable=e=>{e.data.size>0&&b.current.push(e.data)},a.onstop=()=>{const e=new Blob(b.current,{type:"audio/webm"}),a=URL.createObjectURL(e);P(o,{audioUrl:a}),t.getTracks().forEach(e=>e.stop())},a.start(),P(o,{recording:!0,timerSecs:0});let r=0;y.current=setInterval(()=>{r+=1,P(o,{timerSecs:r}),r>=10&&O(o)},1e3)},[e,O,P]),N=(0,a.useCallback)(e=>{O(e)},[O]),H=(0,a.useCallback)(e=>{const o=t[e]?.audioUrl;o&&new Audio(o).play().catch(()=>{})},[t]),Y=(0,a.useCallback)(e=>{P(e,{completed:!0}),m(o=>new Set([...o,e])),setTimeout(()=>{m(o=>{const t=new Set(o);return t.delete(e),t})},1600)},[P]),q=(0,a.useCallback)(()=>{Object.values(t).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)}),L(),x.current&&"inactive"!==x.current.state&&x.current.stop(),w.current=null,r(u()),i({}),m(new Set),g(null),h.current=0,localStorage.removeItem(p)},[t,L]);return(0,a.useEffect)(()=>()=>{L(),x.current&&"inactive"!==x.current.state&&x.current.stop(),Object.values(t).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)})},[]),E?(0,s.jsxs)($,{children:[(0,s.jsx)(ee,{}),(0,s.jsxs)(U,{children:[(0,s.jsx)(Z,{children:"🏆"}),(0,s.jsx)(K,{children:c("celebrate",e)}),(0,s.jsx)(Q,{children:c("celebrateSub",e)}),(0,s.jsx)(F,{children:(0,s.jsxs)(G,{variant:"primary",onClick:q,children:["🔄 ",c("celebrateReset",e)]})})]})]}):(0,s.jsxs)($,{children:[(0,s.jsxs)(k,{children:[(0,s.jsxs)(j,{children:["🎙 ",c("title",e)]}),(0,s.jsx)(z,{children:c("subtitle",e)})]}),(0,s.jsxs)(S,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)("span",{children:c("progress",e)}),(0,s.jsxs)(M,{children:[v," / ",d.length]})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(R,{children:(0,s.jsx)(B,{pct:I})}),te.map(e=>(0,s.jsx)(A,{position:e,reached:I>=e,flashing:f===e},e))]})]}),(0,s.jsx)(_,{children:d.map(o=>(0,s.jsx)(oe,{mission:o,state:t[o.id],lang:e,justCompleted:l.has(o.id),onRecord:()=>D(o.id),onStop:()=>N(o.id),onPlay:()=>H(o.id),onComplete:()=>Y(o.id),permError:n[o.id]??null},o.id))}),(0,s.jsx)(W,{children:(0,s.jsxs)(G,{variant:"ghost",onClick:q,children:["🔄 ",c("reset",e)]})})]})}},7566(e,o,t){t.d(o,{O:()=>he});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(1364),l=t(5723);const c={title:{pt:"Encontra o Par!",en:"Spot It!"},subtitle:{pt:"Encontra o símbolo igual nas duas cartas",en:"Find the matching symbol on both cards"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},easyDesc:{pt:"4 símbolos por carta",en:"4 symbols per card"},mediumDesc:{pt:"6 símbolos por carta",en:"6 symbols per card"},hardDesc:{pt:"8 símbolos por carta",en:"8 symbols per card"},score:{pt:"Pontos",en:"Score"},round:{pt:"Ronda",en:"Round"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incrível!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"Rápido!",en:"Fast!"},oops:{pt:"Ups!",en:"Oops!"},gameOver:{pt:"Fim de Jogo!",en:"Game Over!"},finalScore:{pt:"Pontuação final",en:"Final score"},rounds:{pt:"rondas",en:"rounds"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestScore:{pt:"Melhor",en:"Best"},tapMatch:{pt:"Toca no símbolo igual!",en:"Tap the matching symbol!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espaço",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"Cães, gatos, leões e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguetões e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Adversário",en:"Opponent"},youScored:{pt:"Tu pontuaste!",en:"You scored!"},theyScored:{pt:"O adversário pontuou!",en:"Opponent scored!"},youWin:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},youLose:{pt:"😅 Perdeste!",en:"😅 You lost!"},tied:{pt:"🤝 Empate!",en:"🤝 Tied!"},opponentLeft:{pt:"O adversário saiu.",en:"Opponent left."},rematch:{pt:"Revanche",en:"Rematch"},waiting:{pt:"À espera…",en:"Waiting…"}};function d(e,o){return c[e]["pt"===o?"pt":"en"]}const p=[{id:"animals",emoji:"🦁",color:"#f59e0b",preview:["🐶","🐱","🦁","🐼","🦋"],symbols:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🦄","🐝","🐛","🦋","🐌","🐞","🐢","🐙","🦀","🐠","🐬","🦈","🐳","🐘","🦒","🦘","🐿️","🦜","🦩","🐧","🦔","🐫","🦙","🐊","🦕","🐋","🦑","🐄","🐏","🦌","🐈","🐕","🦉","🐓","🦢","🐇","🦎","🐅","🐆","🦧","🦦","🐑"]},{id:"food",emoji:"🍕",color:"#ef4444",preview:["🍕","🍦","🧁","🍓","🍩"],symbols:["🍎","🍌","🍓","🍉","🍕","🧁","🍩","🍪","🌮","🍦","🎂","🍫","🍬","🍭","🍿","🥐","🥨","🥯","🥞","🧇","🍔","🌭","🍟","🥪","🌯","🥗","🍝","🍜","🍣","🍱","🥟","🍡","🍧","🍨","🥧","🍰","🧀","🥚","🥑","🫐","🍇","🍊","🍋","🍑","🍒","🥝","🍍","🥥","🥕","🌽","🥒","🍆","🫑","🧅","🥜","🌰","☕","🧃"]},{id:"space",emoji:"🚀",color:"#8b5cf6",preview:["🚀","🌍","⭐","🛸","🌙"],symbols:["🚀","🌍","⭐","🛸","🌙","☀️","🪐","🌟","💫","✨","🌠","🔭","👽","🤖","👾","🛰️","🌌","💎","🔮","⚡","🌈","☄️","🧲","🔬","🧪","⏰","🗝️","🧭","🎯","🔔","🏆","🎪","🎠","🎡","🎢","🎮","🕹️","🎲","♟️","🧩","🎨","🖌️","🎸","🥁","🎺","🎹","🎤","🎧","📡","💡","🔋","🧬","🌋","🗻","❄️","🔥","💧","🌪️"]},{id:"mix",emoji:"🎪",color:"#3fb950",preview:["🐶","🍕","🚀","⭐","🎸"],symbols:["🐶","🐱","🦁","🐼","🦋","🐢","🐙","🐬","🍕","🍦","🧁","🍓","🍩","🍉","🎂","🍌","🚀","🌍","⭐","🛸","🌙","☀️","🌈","💎","🎈","🎸","⚽","🎯","🔔","🎁","🎮","🎲","❤️","🔥","💧","🌸","🌻","🧲","⚡","🔮","🎨","🎤","🥁","🧩","🏆","🎪","🎡","🎢","🦄","🐘","🐳","🦊","🐸","🐵","🐝","🐞","🍎","🌮"]}];function u(e){const o=[...e];for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o}const m={easy:{order:3,totalRounds:10,timePerRound:15},medium:{order:5,totalRounds:12,timePerRound:12},hard:{order:7,totalRounds:15,timePerRound:10}},f=n.keyframes`
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
`,k=n.keyframes`
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-8px); }
  40%      { transform: translateX(8px); }
  60%      { transform: translateX(-6px); }
  80%      { transform: translateX(6px); }
`,j=n.keyframes`
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
`,T=r.default.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`,M=r.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 340px;
  line-height: 1.5;
`,C=r.default.div`
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
`,B=r.default.span`
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,_=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,E=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px ${i.w4.spacing.md} ${i.w4.spacing.lg};
  gap: 16px;
  min-height: 0;
  width: 100%;
`,I=r.default.div`
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
`,F=r.default.p`
  font-size: 15px;
  font-weight: 600;
  color: ${({wrong:e})=>e?"#f97583":i.w4.colors.accent};
  margin: 0;
  text-align: center;
  min-height: 22px;
  animation: ${({wrong:e})=>e?k:"none"} 0.4s ease;
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
  ${({highlighted:e})=>e?`animation: ${j.toString()} 2s ease-in-out infinite;`:"box-shadow: 0 4px 20px rgba(0,0,0,0.3);"}

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
`,D=r.default.button`
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
`,oe=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 20px;
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
`,te=r.default.div`
  font-size: 24px;
  font-weight: 800;
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.3;
  flex-shrink: 0;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: 18px;
  }
`,ae=r.default.span`
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
`,ue=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],me=["great","amazing","perfect","super","wow","fast"],fe="atlantis-spotit-best";function ge(e){try{return JSON.parse(localStorage.getItem(fe)??"{}")[e]??0}catch{return 0}}function he({lang:e,canOnline:o}){const[t,r]=(0,a.useState)("theme"),[n,c]=(0,a.useState)("solo"),[f,g]=(0,a.useState)("animals"),[h,x]=(0,a.useState)("easy"),[b,y]=(0,a.useState)(null),[w,v]=(0,a.useState)(-1),[$,k]=(0,a.useState)(0),[j,he]=(0,a.useState)(0),[xe,be]=(0,a.useState)(0),[ye,we]=(0,a.useState)({}),[ve,$e]=(0,a.useState)(0),[ke,je]=(0,a.useState)(""),[ze,Se]=(0,a.useState)(null),[Te,Me]=(0,a.useState)(null),[Ce,Ae]=(0,a.useState)(!1),[Re,Be]=(0,a.useState)(!1),[_e,Ee]=(0,a.useState)(new Map),[Ie,Pe]=(0,a.useState)(new Map),[Fe,Le]=(0,a.useState)([[],[]]),[Oe,De]=(0,a.useState)(!1),[Ne,He]=(0,a.useState)("none"),Ge=(0,a.useRef)(null),Ye=(0,a.useRef)([]),qe=(0,a.useRef)(0),Ve=(0,a.useRef)(!1),[We]=(0,a.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),Je=(0,a.useCallback)(o=>{switch(o.type){case"guest-joined":Ue.current.addPlayer({id:o.playerId,name:o.name,isHost:!1}),Ue.current.sendEvent({type:"host-ack",name:We,playerId:Ue.current.room?.playerId??"",players:Ue.current.room?.players??[]});break;case"host-ack":Ue.current.setConnected(o.name),o.players&&Ue.current.setPlayers([...o.players,{id:Ue.current.room?.playerId??"",name:We,isHost:!1}]);break;case"player-list":Ue.current.setPlayers(o.players);break;case"game-state":{const t=o.payload;if("guest-spot"===t.action){if(Ve.current)return;Ve.current=!0;const o=t.timer,a=100+Math.ceil(2*o),n=t.playerId;be(e=>e+a),we(e=>({...e,[n]:(e[n]??0)+a}));const i=`${t.cardIndex}-${t.symbolIndex}`;Me(i),Ae(!1),je(d("theyScored",e)),r("correct"),Ue.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:n,winnerName:"",points:a,correctId:i}}),setTimeout(()=>{Ze.current()},900)}else if("start-round"===t.action){const e=t.pair,o=t.round,a=t.matchSymbol,n=t.totalRounds,i=t.timePerRound;y(e),v(a),k(o),qe.current=o-1,$e(i),Se(null),Me(null),je(""),Ae(!1),Ve.current=!1,r("playing"),Qe.current={totalRounds:n,timePerRound:i}}else if("round-result"===t.action){Ve.current=!0;const o=t.winnerId,a=Ue.current.room?.playerId,n=o===a,i=t.points;we(e=>({...e,[o]:(e[o]??0)+i})),n?(he(e=>e+i),je(d("youScored",e))):(be(e=>e+i),je(d("theyScored",e))),Me(t.correctId),Ae(n),r("correct")}else"game-over-scores"===t.action&&(he(t.myScore??j),be(t.opponentScore??xe),r("gameover"));break}case"game-over":r("gameover");break;case"rematch-request":He("received");break;case"rematch-accepted":He("none"),he(0),be(0),r("menu");break;case"player-left":De(!0),r("gameover")}},[We,e]),Xe=(0,s.Ky)({gameId:"spotit",playerName:We,onEvent:Je}),Ue=(0,a.useRef)(Xe);Ue.current=Xe;const Ke=(0,s.zj)({gameId:"spotit",enabled:"online"===n}),Qe=(0,a.useRef)({totalRounds:10,timePerRound:15}),Ze=(0,a.useRef)(()=>{}),eo=m[h],oo=(0,a.useMemo)(()=>{return e=f,p.find(o=>o.id===e)?.symbols??p[3].symbols;var e},[f]),to=(0,a.useCallback)(e=>{const o=new Map,t=new Map,a=[u(e[0].symbols),u(e[1].symbols)];e.forEach((e,r)=>{a[r].forEach((e,a)=>{const n=`${r}-${e}`;o.set(n,Math.floor(40*Math.random()-20)),t.set(n,.05*a)})}),Ee(o),Pe(t),Le(a)},[]),ao=(0,a.useCallback)(e=>{x(e);const o=m[e];Qe.current={totalRounds:o.totalRounds,timePerRound:o.timePerRound};const t=u(function(e){const o=[];o.push({symbols:Array.from({length:e+1},(e,o)=>o)});for(let t=0;t<e;t++){const a=[0];for(let o=0;o<e;o++)a.push(e+1+t*e+o);o.push({symbols:a})}for(let t=0;t<e;t++)for(let a=0;a<e;a++){const r=[t+1];for(let o=0;o<e;o++)r.push(e+1+o*e+(t*o+a)%e);o.push({symbols:r})}return o}(o.order));Ye.current=t,qe.current=0,Ve.current=!1,k(1),he(0),be(0),we({}),je(""),Se(null),Me(null),Be(!1);const a=[t[0],t[1]];y(a);const i=a[0].symbols.find(e=>a[1].symbols.includes(e))??-1;v(i),$e(o.timePerRound),to(a),r("playing"),"online"===n&&"host"===Ue.current.room?.role&&Ue.current.sendEvent({type:"game-state",payload:{action:"start-round",pair:a,round:1,matchSymbol:i,totalRounds:o.totalRounds,timePerRound:o.timePerRound}})},[to,n]);(0,a.useEffect)(()=>{if("playing"===t)return Ge.current=setInterval(()=>{$e(e=>e<=1?(Ge.current&&clearInterval(Ge.current),r("gameover"),0):e-1)},1e3),()=>{Ge.current&&clearInterval(Ge.current)};Ge.current&&clearInterval(Ge.current)},[t]),(0,a.useEffect)(()=>{if("gameover"===t){const e=ge(h);j>e&&(function(e,o){try{const t=JSON.parse(localStorage.getItem(fe)??"{}");t[e]=o,localStorage.setItem(fe,JSON.stringify(t))}catch{}}(h,j),Be(!0))}},[t,h,j]);const ro=(0,a.useCallback)(()=>{const e=qe.current+1;qe.current=e,Ve.current=!1;const o=Ye.current,t=m[h];if(e>=t.totalRounds||2*e+1>=o.length)return r("gameover"),void("online"===n&&Ue.current.sendEvent({type:"game-over",winner:"draw"}));const a=[o[2*e],o[2*e+1]];y(a);const i=a[0].symbols.find(e=>a[1].symbols.includes(e))??-1;v(i),k(e+1),$e(t.timePerRound),Se(null),Me(null),je(""),Ae(!1),to(a),r("playing"),"online"===n&&"host"===Ue.current.room?.role&&Ue.current.sendEvent({type:"game-state",payload:{action:"start-round",pair:a,round:e+1,matchSymbol:i,totalRounds:t.totalRounds,timePerRound:t.timePerRound}})},[h,to,n]);Ze.current=ro;const no=(0,a.useCallback)((o,a)=>{if("playing"===t){if("online"===n){if(o!==w)return Se(`${a}-${o}`),je(d("oops",e)),he(e=>Math.max(0,e-20)),void setTimeout(()=>{Se(null),je(d("tapMatch",e))},500);if(Ve.current)return;if("host"===(Ue.current.room?.role??"guest")){Ve.current=!0;const t=100+Math.ceil(2*ve);he(e=>e+t),Me(`${a}-${o}`),Ae(!0);const n=me[Math.floor(Math.random()*me.length)];je(d(n,e)),r("correct");const i=Ue.current.room?.playerId??"";we(e=>({...e,[i]:(e[i]??0)+t})),Ue.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:i,winnerName:Ue.current.room?.playerName??"",points:t,correctId:`${a}-${o}`}}),setTimeout(()=>{ro()},900)}else Ue.current.sendEvent({type:"game-state",payload:{action:"guest-spot",symbolIndex:o,cardIndex:a,timer:ve,playerId:Ue.current.room?.playerId}});return}if(o===w){const t=100+Math.ceil(2*ve);he(e=>e+t),Me(`${a}-${o}`),Ae(!0);const n=me[Math.floor(Math.random()*me.length)];je(d(n,e)),r("correct"),setTimeout(()=>{ro()},900)}else Se(`${a}-${o}`),je(d("oops",e)),he(e=>Math.max(0,e-20)),setTimeout(()=>{Se(null),je(d("tapMatch",e))},500)}},[t,w,ve,e,ro,n]),io=(0,a.useMemo)(()=>"easy"===h?80:"medium"===h?64:52,[h]),so=ge(h);if("theme"===t)return(0,l.jsx)(z,{children:(0,l.jsxs)(S,{children:[(0,l.jsxs)(T,{children:["🃏 ",d("title",e)]}),(0,l.jsx)(M,{children:d("pickTheme",e)}),(0,l.jsx)(ie,{children:p.map(o=>(0,l.jsxs)(se,{accent:o.color,onClick:()=>{g(o.id),r("menu")},children:[(0,l.jsx)(le,{children:o.emoji}),(0,l.jsx)(de,{children:d(o.id,e)}),(0,l.jsx)(ce,{children:o.preview.map((e,o)=>(0,l.jsx)("span",{children:e},o))}),(0,l.jsx)(pe,{children:d(`${o.id}Desc`,e)})]},o.id))})]})});if("menu"===t){const t=e=>{"online"===n?(x(e),r("lobby")):ao(e)};return(0,l.jsx)(z,{children:(0,l.jsxs)(S,{children:[(0,l.jsxs)(T,{children:["🃏 ",d("title",e)]}),(0,l.jsx)(M,{children:d("subtitle",e)}),o&&(0,l.jsxs)(re,{children:[(0,l.jsxs)(ne,{active:"solo"===n,onClick:()=>c("solo"),children:["🎯 ",d("solo",e)]}),(0,l.jsxs)(ne,{active:"online"===n,onClick:()=>c("online"),children:["🌐 ",d("online",e)]})]}),(0,l.jsxs)(C,{children:[(0,l.jsxs)(A,{accent:"#3fb950",onClick:()=>t("easy"),children:[(0,l.jsx)(R,{children:"🌟"}),(0,l.jsx)(B,{children:d("easy",e)}),(0,l.jsx)(_,{children:d("easyDesc",e)})]}),(0,l.jsxs)(A,{accent:"#f59e0b",onClick:()=>t("medium"),children:[(0,l.jsx)(R,{children:"🔥"}),(0,l.jsx)(B,{children:d("medium",e)}),(0,l.jsx)(_,{children:d("mediumDesc",e)})]}),(0,l.jsxs)(A,{accent:"#f97583",onClick:()=>t("hard"),children:[(0,l.jsx)(R,{children:"💪"}),(0,l.jsx)(B,{children:d("hard",e)}),(0,l.jsx)(_,{children:d("hardDesc",e)})]})]}),so>0&&"solo"===n&&(0,l.jsxs)(oe,{children:["🏆 ",d("bestScore",e),": ",so]})]})})}if("lobby"===t)return(0,l.jsx)(z,{children:(0,l.jsxs)(S,{children:[(0,l.jsxs)(T,{children:["🃏 ",d("title",e)]}),Xe.room?.connected?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(M,{children:"host"===Xe.room.role?"pt"===e?`${Xe.room.players.length} jogadores ligados. Escolhe a dificuldade para começar.`:`${Xe.room.players.length} players connected. Choose difficulty to start.`:"pt"===e?`Ligado! ${Xe.room.players.length} jogadores na sala. À espera que o anfitrião comece…`:`Connected! ${Xe.room.players.length} players in room. Waiting for host to start…`}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:Xe.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===Xe.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===Xe.room.role&&(0,l.jsxs)(C,{children:[(0,l.jsxs)(A,{accent:"#3fb950",onClick:()=>ao("easy"),children:[(0,l.jsx)(R,{children:"🌟"}),(0,l.jsx)(B,{children:d("easy",e)})]}),(0,l.jsxs)(A,{accent:"#f59e0b",onClick:()=>ao("medium"),children:[(0,l.jsx)(R,{children:"🔥"}),(0,l.jsx)(B,{children:d("medium",e)})]}),(0,l.jsxs)(A,{accent:"#f97583",onClick:()=>ao("hard"),children:[(0,l.jsx)(R,{children:"💪"}),(0,l.jsx)(B,{children:d("hard",e)})]})]})]}):(0,l.jsx)(s.XB,{lang:e,room:Xe.room,error:Xe.error,availableRooms:Ke.rooms,onCreateRoom:()=>{const{code:e,roomName:o}=Xe.createRoom();Ke.publishRoom({code:e,roomName:o,hostName:We,playerCount:1})},onJoinRoom:e=>Xe.joinRoom(e),onLeaveRoom:()=>{Ke.unpublishRoom(),Xe.leaveRoom(),r("menu")}})]})});if("gameover"===t){const o="online"===n,t=j>xe,a=j===xe,s=d(Oe?"opponentLeft":a?"tied":t?"youWin":"youLose",e),p=()=>{"received"===Ne?(He("none"),he(0),be(0),r("menu"),Ue.current.sendEvent({type:"rematch-accepted"})):(He("sent"),Ue.current.sendEvent({type:"rematch-request"}))};return(0,l.jsx)(z,{children:(0,l.jsxs)(W,{children:[(0,l.jsx)(X,{children:o?t?"🎉":a?"🤝":"😅":"🏆"}),(0,l.jsx)(J,{children:o?s:d("gameOver",e)}),(0,l.jsxs)(U,{children:[o&&(Xe.room?.players??[]).length>2?(0,l.jsx)(l.Fragment,{children:(Xe.room?.players??[]).map(e=>({...e,pts:ye[e.id]??0})).sort((e,o)=>o.pts-e.pts).map((o,t)=>(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[(0,l.jsx)("span",{style:{fontSize:16,fontWeight:700,color:0===t?"#3fb950":i.w4.colors.mainTextMuted,minWidth:20},children:0===t?"🥇":1===t?"🥈":2===t?"🥉":`${t+1}.`}),(0,l.jsxs)("span",{style:{color:o.id===Xe.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText,fontWeight:600,flex:1},children:[o.name,o.id===Xe.room?.playerId?` (${d("you",e)})`:""]}),(0,l.jsx)("span",{style:{fontSize:20,fontWeight:800,color:0===t?"#3fb950":i.w4.colors.mainText},children:o.pts})]},o.id))}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(K,{children:d(o?"you":"finalScore",e)}),(0,l.jsx)(Q,{children:j}),o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(K,{style:{marginTop:8},children:d("opponent",e)}),(0,l.jsx)(Q,{style:{color:"#f97583"},children:xe})]})]}),(0,l.jsxs)(K,{children:[$," ",d("rounds",e)]})]}),!o&&Re&&(0,l.jsxs)(Z,{children:["🎉 ",d("newRecord",e)]}),!o&&so>0&&!Re&&(0,l.jsxs)(oe,{children:["🏆 ",d("bestScore",e),": ",so]}),o&&!Oe?"sent"===Ne?(0,l.jsx)(ee,{accent:"#666",children:d("waiting",e)}):"received"===Ne?(0,l.jsxs)(ee,{accent:"#3fb950",onClick:p,children:[d("rematch",e)," ✓"]}):(0,l.jsx)(ee,{accent:"#8b5cf6",onClick:p,children:d("rematch",e)}):(0,l.jsx)(ee,{accent:"#8b5cf6",onClick:()=>{o&&Ue.current.leaveRoom(),c("solo"),r("theme")},children:d("playAgain",e)})]})})}const lo=ve<=3?"#f97583":ve<=6?"#f59e0b":i.w4.colors.accent;return(0,l.jsx)(z,{children:(0,l.jsxs)(E,{children:[(0,l.jsxs)(I,{children:[(0,l.jsxs)(P,{children:["⭐ ",d("online"===n?"you":"score",e),": ",j]}),"online"===n&&(0,l.jsxs)(P,{color:"#f97583",children:["👤 ",d("opponent",e),": ",xe]}),(0,l.jsxs)(P,{children:[d("round",e)," ",$,"/","online"===n?Qe.current.totalRounds:eo.totalRounds]}),(0,l.jsxs)(P,{color:lo,urgent:ve<=3,children:["⏱️ ",ve,"s"]})]}),(0,l.jsx)(F,{wrong:!!ze,children:ke||d("tapMatch",e)}),b&&(0,l.jsx)(L,{children:b.map((e,o)=>(0,l.jsxs)(l.Fragment,{children:[1===o&&(0,l.jsx)(te,{children:"VS"}),(0,l.jsxs)(O,{highlighted:0===o,children:[(0,l.jsx)(ae,{children:0===o?"A":"B"}),Fe[o].map(e=>{const t=`${o}-${e}`,a=_e.get(t)??0,r=Ie.get(t)??0,n=Te===t,i=ze===t;return(0,l.jsxs)(D,{size:io,rotDeg:a,correct:n,wrong:i,style:{animationDelay:`${r}s`},onClick:()=>no(e,o),children:[oo[e%oo.length],n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(V,{x:10,y:10,delay:0,children:"✨"}),(0,l.jsx)(V,{x:80,y:20,delay:.1,children:"✨"}),(0,l.jsx)(V,{x:20,y:80,delay:.15,children:"✨"}),(0,l.jsx)(V,{x:75,y:75,delay:.2,children:"✨"})]})]},t)}),Ce&&0===o&&(0,l.jsxs)(Y,{children:["+",100+Math.ceil(2*ve)]})]},`card-${o}-${$}`)]}))}),"correct"===t&&(0,l.jsxs)(N,{children:[(0,l.jsx)(H,{children:"🎉"}),(0,l.jsx)(G,{color:"#3fb950",children:ke}),ue.map((e,o)=>(0,l.jsx)(q,{left:10+15*o,delay:.08*o,color:e,children:["🎊","⭐","🌟","💫","✨","🎉"][o]},o))]})]})})}},1623(e,o,t){t.d(o,{z:()=>xe});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(1364),l=t(5723);const c="ABCDEFGHIJLMNOPRSTUVZ",d="ABCDEFGHIJKLMNOPRSTUVWYZ",p=[0,60,90,120],u=[{id:"cities",icon:"🏙️",label:{pt:"Cidades",en:"Cities"}},{id:"countries",icon:"🌍",label:{pt:"Países",en:"Countries"}},{id:"animals",icon:"🐾",label:{pt:"Animais",en:"Animals"}},{id:"fruits",icon:"🍎",label:{pt:"Frutas",en:"Fruits"}},{id:"movies",icon:"🎬",label:{pt:"Filmes",en:"Movies"}},{id:"tvshows",icon:"📺",label:{pt:"Séries",en:"TV Shows"}},{id:"brands",icon:"🏷️",label:{pt:"Marcas",en:"Brands"}},{id:"sports",icon:"⚽",label:{pt:"Desportos",en:"Sports"}},{id:"musicians",icon:"🎵",label:{pt:"Músicos",en:"Musicians"}},{id:"books",icon:"📚",label:{pt:"Livros",en:"Books"}},{id:"names",icon:"🧑",label:{pt:"Nomes",en:"Names"}},{id:"foods",icon:"🍽️",label:{pt:"Comidas",en:"Foods"}},{id:"history",icon:"🏛️",label:{pt:"História",en:"History"}},{id:"jobs",icon:"💼",label:{pt:"Profissões",en:"Jobs"}},{id:"colors",icon:"🎨",label:{pt:"Cores",en:"Colors"}},{id:"flowers",icon:"🌺",label:{pt:"Flores",en:"Flowers"}}],m={cities:{A:{pt:["Aveiro","Almada","Amadora","Albufeira"],en:["Amsterdam","Athens","Atlanta","Auckland"]},B:{pt:["Braga","Beja","Bragança","Barcelos"],en:["Berlin","Boston","Barcelona","Brussels"]},C:{pt:["Coimbra","Cascais","Covilhã","Chaves"],en:["Chicago","Cairo","Cologne","Calgary"]},D:{pt:["Dourinho","Douro","Évora (não)"],en:["Dubai","Dublin","Denver","Damascus"]},E:{pt:["Évora","Elvas","Espinho"],en:["Edinburgh","Essex","El Paso","Exeter"]},F:{pt:["Faro","Funchal","Figueira da Foz","Felgueiras"],en:["Florence","Frankfurt","Fukuoka","Fresno"]},G:{pt:["Guimarães","Guarda","Gondomar","Grândola"],en:["Geneva","Glasgow","Guangzhou","Guadalajara"]},H:{pt:["Horta","Hungria (não)"],en:["Hamburg","Havana","Helsinki","Houston"]},I:{pt:["Ílhavo","Idanha-a-Nova"],en:["Istanbul","Indianapolis","Islamabad","Izmir"]},J:{pt:["Joane","Juromenha"],en:["Jakarta","Jerusalem","Johannesburg","Jacksonville"]},L:{pt:["Lisboa","Leiria","Loures","Lagos"],en:["London","Los Angeles","Lima","Lisbon"]},M:{pt:["Matosinhos","Montijo","Miranda do Douro","Moura"],en:["Madrid","Milan","Melbourne","Moscow"]},N:{pt:["Nazaré","Nisa","Nordeste"],en:["New York","Naples","Nairobi","Nashville"]},O:{pt:["Odivelas","Ovar","Óbidos","Olhão"],en:["Oslo","Ottawa","Oxford","Orlando"]},P:{pt:["Porto","Portimão","Ponte de Lima","Póvoa de Varzim"],en:["Paris","Prague","Porto","Pretoria"]},R:{pt:["Régua","Rio Maior","Reguengos","Resende"],en:["Rome","Rio de Janeiro","Rotterdam","Rabat"]},S:{pt:["Setúbal","Sintra","Santarém","Sines"],en:["Sydney","Stockholm","Seoul","Seville"]},T:{pt:["Torres Vedras","Tomar","Tavira","Trofa"],en:["Tokyo","Toronto","Tehran","Tunis"]},V:{pt:["Viseu","Viana do Castelo","Vila Nova de Gaia","Valongo"],en:["Vienna","Vancouver","Venice","Vilnius"]}},countries:{A:{pt:["Alemanha","Angola","Argentina","Austrália"],en:["Argentina","Australia","Austria","Angola"]},B:{pt:["Brasil","Bélgica","Bulgária","Bolívia"],en:["Brazil","Belgium","Bulgaria","Bolivia"]},C:{pt:["China","Colômbia","Cuba","Chile"],en:["China","Colombia","Cuba","Chile"]},D:{pt:["Dinamarca","Djibuti"],en:["Denmark","Dominican Republic","Djibouti"]},E:{pt:["Espanha","Egipto","Etiópia","Equador"],en:["Egypt","Ethiopia","Ecuador","Estonia"]},F:{pt:["França","Finlândia","Filipinas","Fiji"],en:["France","Finland","Philippines","Fiji"]},G:{pt:["Grécia","Guatemala","Gana","Guiné"],en:["Greece","Guatemala","Ghana","Germany"]},H:{pt:["Hungria","Honduras","Haiti"],en:["Hungary","Honduras","Haiti","Holland"]},I:{pt:["Itália","Índia","Irlanda","Islândia"],en:["Italy","India","Ireland","Iceland"]},J:{pt:["Japão","Jordânia","Jamaica"],en:["Japan","Jordan","Jamaica"]},L:{pt:["Líbia","Líbano","Letónia","Lesoto"],en:["Libya","Lebanon","Latvia","Lesotho"]},M:{pt:["México","Marrocos","Moçambique","Madagascar"],en:["Mexico","Morocco","Mozambique","Malaysia"]},N:{pt:["Noruega","Nepal","Nigéria","Nicarágua"],en:["Norway","Nepal","Nigeria","Nicaragua"]},O:{pt:["Omã"],en:["Oman"]},P:{pt:["Portugal","Peru","Paquistão","Polónia"],en:["Portugal","Peru","Pakistan","Poland"]},R:{pt:["Roménia","Rússia","Ruanda"],en:["Romania","Russia","Rwanda"]},S:{pt:["Suécia","Suíça","Sérvia","Síria"],en:["Sweden","Switzerland","Serbia","Spain"]},T:{pt:["Turquia","Tunísia","Tanzânia","Tailândia"],en:["Turkey","Tunisia","Tanzania","Thailand"]},V:{pt:["Venezuela","Vietname"],en:["Venezuela","Vietnam"]}},animals:{A:{pt:["Abelha","Águia","Antílope","Aranha"],en:["Antelope","Alligator","Ape","Albatross"]},B:{pt:["Baleia","Borboleta","Burro","Búfalo"],en:["Bear","Buffalo","Butterfly","Baboon"]},C:{pt:["Cavalo","Coelho","Crocodilo","Camelo"],en:["Cat","Crocodile","Camel","Cobra"]},D:{pt:["Delfim","Dragão","Dromedário"],en:["Dolphin","Dog","Donkey","Deer"]},E:{pt:["Elefante","Esquilo","Escorpião"],en:["Elephant","Eagle","Eel","Elk"]},F:{pt:["Falcão","Flamingo","Formiga","Foca"],en:["Fox","Flamingo","Frog","Falcon"]},G:{pt:["Girafa","Gorila","Gato","Gavião"],en:["Giraffe","Gorilla","Guppy","Gazelle"]},H:{pt:["Hipopótamo","Hiena"],en:["Hippo","Hyena","Hare","Hawk"]},I:{pt:["Iguana","Íbis"],en:["Iguana","Ibis","Impala"]},J:{pt:["Javali","Jaguar","Jerboa"],en:["Jaguar","Jellyfish","Jackal"]},L:{pt:["Leão","Lobo","Lagarto","Lince"],en:["Lion","Lizard","Leopard","Lynx"]},M:{pt:["Macaco","Morcego","Mocho","Morsa"],en:["Monkey","Moose","Mouse","Meerkat"]},N:{pt:["Narval","Nandú"],en:["Narwhal","Newt","Nightingale"]},O:{pt:["Ouriço","Orangotango","Ovelha","Orca"],en:["Owl","Octopus","Otter","Orangutan"]},P:{pt:["Panda","Pinguim","Pato","Papagaio"],en:["Panda","Penguin","Parrot","Panther"]},R:{pt:["Rato","Rinoceronte","Raposa","Rouxinol"],en:["Rabbit","Rhinoceros","Raccoon","Robin"]},S:{pt:["Sapo","Serpente","Sardinha","Salamandra"],en:["Snake","Shark","Salmon","Squirrel"]},T:{pt:["Tigre","Tartaruga","Texugo","Tubarão"],en:["Tiger","Turtle","Toad","Toucan"]},V:{pt:["Vaca","Veado","Vespa"],en:["Vulture","Viper","Vole"]}},fruits:{A:{pt:["Abacate","Abacaxi","Amora","Ameixa"],en:["Apple","Avocado","Apricot","Acai"]},B:{pt:["Banana","Blueberry","Bergamota"],en:["Banana","Blueberry","Blackberry","Boysenberry"]},C:{pt:["Cereja","Coco","Carambola","Caqui"],en:["Cherry","Coconut","Clementine","Cranberry"]},D:{pt:["Damasco","Durian"],en:["Date","Dragonfruit","Durian"]},E:{pt:["Eirado","Escaramuça"],en:["Elderberry"]},F:{pt:["Figo","Framboesa","Feijoa"],en:["Fig","Feijoa"]},G:{pt:["Goiaba","Groselha","Granadilha"],en:["Grape","Guava","Grapefruit","Gooseberry"]},H:{pt:["Higo"],en:["Honeydew","Huckleberry"]},I:{pt:["Imbú"],en:["Imbe"]},J:{pt:["Jaca","Jabuticaba"],en:["Jackfruit","Jujube"]},L:{pt:["Laranja","Limão","Lima","Lichias"],en:["Lemon","Lime","Lychee","Lingonberry"]},M:{pt:["Maçã","Manga","Melão","Melancia"],en:["Mango","Melon","Mulberry","Mandarin"]},N:{pt:["Nectarina","Nêspera"],en:["Nectarine","Nance"]},O:{pt:["Oliveira"],en:["Orange","Olive"]},P:{pt:["Pêra","Pêssego","Papaia","Pitaia"],en:["Peach","Pear","Pineapple","Papaya"]},R:{pt:["Romã","Rambutan"],en:["Raspberry","Rambutan"]},S:{pt:["Saboticaba","Sapota"],en:["Strawberry","Star fruit","Soursop"]},T:{pt:["Tamarindo","Tomate","Tangerina"],en:["Tamarind","Tangerine","Tomato"]},V:{pt:["Uva (não)"],en:["Vanilla bean"]}},names:{A:{pt:["Ana","António","André","Alice"],en:["Anna","Andrew","Alice","Adam"]},B:{pt:["Beatriz","Bruno","Bruna","Bernardo"],en:["Benjamin","Bella","Brian","Beatrice"]},C:{pt:["Carlos","Carolina","Catarina","Clara"],en:["Carlos","Catherine","Clara","Christopher"]},D:{pt:["David","Diana","Diogo","Daniel"],en:["David","Diana","Daniel","Daisy"]},E:{pt:["Eduardo","Eva","Elisa","Emília"],en:["Edward","Emma","Emily","Ethan"]},F:{pt:["Filipa","Francisco","Fernanda","Fábio"],en:["Frank","Frances","Felix","Fiona"]},G:{pt:["Gonçalo","Gabriela","Guida","Gil"],en:["George","Grace","Gabriel","Gabrielle"]},H:{pt:["Henrique","Helena","Hugo"],en:["Henry","Hannah","Harry","Helen"]},I:{pt:["Inês","Isabel","Igor"],en:["Isabelle","Ivan","Irene","Iris"]},J:{pt:["João","Jorge","Joana","Juliana"],en:["James","Julia","John","Jessica"]},L:{pt:["Luís","Laura","Leonardo","Leonor"],en:["Lucas","Laura","Leonardo","Lily"]},M:{pt:["Maria","Miguel","Marta","Manuel"],en:["Matthew","Maria","Mia","Michael"]},N:{pt:["Nuno","Natália","Natacha"],en:["Noah","Natalie","Nicholas","Nina"]},O:{pt:["Olga","Óscar"],en:["Oliver","Olivia","Oscar"]},P:{pt:["Pedro","Paula","Paulo","Patrícia"],en:["Peter","Patricia","Paul","Penelope"]},R:{pt:["Ricardo","Rita","Rodrigo","Rosa"],en:["Richard","Rachel","Robert","Rebecca"]},S:{pt:["Sara","Sofia","Sérgio","Susana"],en:["Samuel","Sarah","Sophia","Simon"]},T:{pt:["Tiago","Teresa","Tomás","Tatiana"],en:["Thomas","Tessa","Timothy","Tina"]},V:{pt:["Vera","Vítor","Valentina"],en:["Victor","Valentina","Victoria"]}},foods:{A:{pt:["Arroz","Atum","Azeitonas","Alho"],en:["Apple pie","Avocado toast","Asparagus","Almond"]},B:{pt:["Bacalhau","Bifes","Batatas","Broa"],en:["Bacon","Bagel","Biscuit","Brownie"]},C:{pt:["Caldo verde","Chouriço","Cenoura","Cebola"],en:["Cake","Carrot","Cheese","Croissant"]},D:{pt:["Doce de leite","Dobrada"],en:["Doughnut","Dumpling","Dal"]},E:{pt:["Espetada","Enchidos","Esparguete"],en:["Egg","Enchilada","Eggplant"]},F:{pt:["Frango","Feijão","Farinha","Francesinha"],en:["Fish","Fries","Falafel","Fondue"]},G:{pt:["Grão","Gelado","Ginja"],en:["Grilled chicken","Guacamole","Gelato","Granola"]},H:{pt:["Hambúrguer","Hotdog"],en:["Hamburger","Hotdog","Hummus","Honey"]},I:{pt:["Iogurte"],en:["Ice cream","Iced tea"]},J:{pt:["Jantar","Jardineira"],en:["Jam","Jelly","Jalapeño"]},L:{pt:["Linguiça","Lentilhas","Laranja"],en:["Lasagna","Lentil soup","Lemon tart"]},M:{pt:["Massa","Migas","Mel","Manteiga"],en:["Mango sorbet","Meatball","Mushroom","Moussaka"]},N:{pt:["Natas","Nozes"],en:["Noodles","Nachos","Nut butter"]},O:{pt:["Ovos","Omeleta"],en:["Omelette","Oyster","Oatmeal"]},P:{pt:["Pão","Peixe","Pizza","Pudim"],en:["Pizza","Pancake","Pasta","Pudding"]},R:{pt:["Risotto","Rissol","Robalo"],en:["Rice","Risotto","Ramen","Roast beef"]},S:{pt:["Sopa","Sardinha","Salada"],en:["Salad","Sandwich","Sushi","Soup"]},T:{pt:["Tosta","Tremoços","Tarte"],en:["Tacos","Tofu","Tomato soup","Toast"]},V:{pt:["Vitela","Vinagrete"],en:["Vegetable stir fry","Vanilla pudding","Veal"]}},colors:{A:{pt:["Amarelo","Azul","Anil","Âmbar"],en:["Amber","Azure","Aquamarine"]},B:{pt:["Branco","Bordô","Bege"],en:["Blue","Black","Brown","Beige"]},C:{pt:["Castanho","Carmim","Ciano","Coral"],en:["Crimson","Cyan","Coral","Cream"]},D:{pt:["Dourado"],en:["Dark blue","Denim"]},E:{pt:["Esmeralda","Escarlate"],en:["Emerald","Electric blue"]},F:{pt:["Fucsia","Ferrugem","Flamingo"],en:["Fuchsia","Flamingo pink","Forest green"]},G:{pt:["Grafite","Gelo"],en:["Gold","Green","Gray"]},H:{pt:["Húmido (não)"],en:["Hot pink","Honey yellow"]},I:{pt:["Índigo","Ivory"],en:["Indigo","Ivory"]},J:{pt:["Jade"],en:["Jade","Jasmine"]},L:{pt:["Laranja","Lavanda","Lilás","Limão"],en:["Lavender","Lime green","Lilac"]},M:{pt:["Magenta","Marrom","Malva"],en:["Magenta","Maroon","Mauve","Mint"]},N:{pt:["Negro","Nata"],en:["Navy blue","Neon green"]},O:{pt:["Ocre","Oliveira"],en:["Orange","Olive","Ochre"]},P:{pt:["Preto","Prata","Rosa","Púrpura"],en:["Purple","Pink","Peach","Platinum"]},R:{pt:["Roxo","Rubi","Rosa"],en:["Red","Ruby","Rose"]},S:{pt:["Salmão","Sépia"],en:["Salmon","Sapphire","Scarlet","Silver"]},T:{pt:["Turquesa","Terra"],en:["Turquoise","Teal","Tan"]},V:{pt:["Verde","Violeta","Vermelho"],en:["Violet","Viridian"]}},sports:{A:{pt:["Atletismo","Andebol","Aeróbica","Aikido"],en:["Athletics","Archery","American football","Aerobics"]},B:{pt:["Basquetebol","Boxe","Badminton","Baseball"],en:["Basketball","Boxing","Badminton","Baseball"]},C:{pt:["Ciclismo","Corrida","Cricket","Canoagem"],en:["Cycling","Cricket","Climbing","Canoeing"]},D:{pt:["Dança","Dart","Dodgeball"],en:["Diving","Darts","Dodgeball"]},E:{pt:["Equitação","Esgrima"],en:["Equestrian","Fencing (esgrima em EN é Fencing)"]},F:{pt:["Futebol","Futsal","Fórmula 1","Fisiculturismo"],en:["Football","Futsal","Formula 1"]},G:{pt:["Ginástica","Golfe","Gateball"],en:["Golf","Gymnastics","Go-karting"]},H:{pt:["Hóquei","Halterofilia","Hípica"],en:["Hockey","Handball","Hurdles"]},I:{pt:["Ioga"],en:["Ice hockey","Ice skating"]},J:{pt:["Judo","Jet ski"],en:["Judo","Javelin","Jet skiing"]},L:{pt:["Luta livre","Lacrosse"],en:["Lacrosse","Long jump"]},M:{pt:["Maratona","Mergulho","MMA"],en:["Marathon","Mixed martial arts","Motocross"]},N:{pt:["Natação","Netball"],en:["Swimming (Natação em PT)","Netball"]},O:{pt:["Orientação"],en:["Orienteering","Olympic weightlifting"]},P:{pt:["Padel","Polo","Patinagem","Pesca desportiva"],en:["Padel","Polo","Parkour","Pentathlon"]},R:{pt:["Rugby","Remo","Raquetebol"],en:["Rugby","Rowing","Racquetball"]},S:{pt:["Surf","Squash","Ski"],en:["Swimming","Surfing","Squash","Skiing"]},T:{pt:["Ténis","Taekwondo","Tiro ao alvo"],en:["Tennis","Taekwondo","Triathlon"]},V:{pt:["Voleibol","Vela","Voo livre"],en:["Volleyball","Volleyball (beach)"]}},brands:{A:{pt:["Apple","Adidas","Amazon","Audi"],en:["Apple","Adidas","Amazon","Audi"]},B:{pt:["BMW","Bose","Burger King","Boss"],en:["BMW","Bose","Burger King","Boss"]},C:{pt:["Coca-Cola","Calvin Klein","Chanel","Canon"],en:["Coca-Cola","Calvin Klein","Chanel","Canon"]},D:{pt:["Disney","Dell","Dyson"],en:["Disney","Dell","Dyson","Dove"]},E:{pt:["Emirates","Epson"],en:["Emirates","Epson","Estée Lauder"]},F:{pt:["Ferrari","Ford","Facebook","Fender"],en:["Ferrari","Ford","Facebook","Fender"]},G:{pt:["Google","Gucci","Gillette"],en:["Google","Gucci","Gillette"]},H:{pt:["H&M","Honda","Heineken"],en:["H&M","Honda","Heineken","Hugo Boss"]},I:{pt:["IKEA","Intel"],en:["IKEA","Intel","Instagram"]},J:{pt:["Jeep","Jimmy Choo"],en:["Jeep","Jimmy Choo","Jordan"]},L:{pt:["Lego","Louis Vuitton","Levi's"],en:["Lego","Louis Vuitton","Levi's"]},M:{pt:["McDonald's","Microsoft","Mercedes","Mazda"],en:["McDonald's","Microsoft","Mercedes","Mazda"]},N:{pt:["Nike","Netflix","Nestlé","Nintendo"],en:["Nike","Netflix","Nestlé","Nintendo"]},O:{pt:["Omega","Oracle"],en:["Omega","Oracle","Old Spice"]},P:{pt:["Puma","Prada","PlayStation","Peugeot"],en:["Puma","Prada","PlayStation","Peugeot"]},R:{pt:["Ray-Ban","Rolex","Renault"],en:["Ray-Ban","Rolex","Renault","Red Bull"]},S:{pt:["Samsung","Sony","Spotify","Skype"],en:["Samsung","Sony","Spotify","Snapchat"]},T:{pt:["Toyota","Twitter","TikTok","Tesla"],en:["Toyota","Twitter","TikTok","Tesla"]},V:{pt:["Versace","Volkswagen","Visa"],en:["Versace","Volkswagen","Visa"]}},movies:{A:{pt:["Avatar","Aladdim","Amor Infinito"],en:["Avatar","Aladdin","Avengers"]},B:{pt:["Bambi","Batman"],en:["Bambi","Batman","Bohemian Rhapsody"]},C:{pt:["Cenicienta","Coco","Cars"],en:["Coco","Cars","Cinderella","Casino Royale"]},D:{pt:["Divertida Mente","Dumbo"],en:["Dune","Dunkirk"]},E:{pt:["Encanto","Elfen Lied"],en:["Encanto","Elf","Eternal Sunshine"]},F:{pt:["Frozen","Fantasia"],en:["Frozen","Finding Nemo"]},G:{pt:["Gladiador","Godzilla"],en:["Gladiator","Godzilla","Grease"]},H:{pt:["Homem-Aranha","Hercules"],en:["Harry Potter","Hercules","Home Alone"]},I:{pt:["Intocáveis","Inside Out"],en:["Inception","Inside Out","Interstellar"]},J:{pt:["Jurassic Park"],en:["Jaws","Jurassic Park","Joker"]},L:{pt:["A Bela e o Monstro","Luca"],en:["Lion King","Luca","La La Land"]},M:{pt:["Moana","Mulan","Monstros SA"],en:["Moana","Mulan","Monsters Inc"]},N:{pt:["Nemo","Noiva Cadáver"],en:["Nemo","Nightmare before Christmas"]},O:{pt:["O Rei Leão","O Espanta Tubarões"],en:["Onward","Oz"]},P:{pt:["Procurando Nemo","Pinóquio"],en:["Pinocchio","Paddington"]},R:{pt:["Ratatouille","Robots"],en:["Ratatouille","Rocky"]},S:{pt:["Soul","Shrek","Star Wars"],en:["Soul","Shrek","Star Wars"]},T:{pt:["Toy Story","Tangled","Titanic"],en:["Toy Story","Titanic","Tangled"]},V:{pt:["Vida de Inseto","Valente"],en:["Venom","Vampirina"]}},tvshows:{A:{pt:["A Casa de Papel","Atípico"],en:["Avatar: The Last Airbender","Arcane"]},B:{pt:["Bluey","Bob Esponja"],en:["Bluey","Breaking Bad","Brooklyn Nine-Nine"]},C:{pt:["Cocomelon","Cidade dos Sonhos"],en:["Cocomelon","Caillou"]},D:{pt:["Detetive Conan","Digimon"],en:["Dora the Explorer","Digimon","Dexter"]},E:{pt:["Emily em Paris"],en:["Emily in Paris"]},F:{pt:["Friends","Flintstones"],en:["Friends","Family Guy"]},G:{pt:["Gravity Falls"],en:["Gravity Falls","Game of Thrones"]},H:{pt:["Heidi","Hora de Aventura"],en:["Hazbin Hotel","Hilda","How I Met Your Mother"]},I:{pt:["Inspector Gadget"],en:["Inside Job","iCarly"]},J:{pt:["Jorge o Curioso"],en:["Jimmy Neutron","Jeopardy"]},L:{pt:["La Casa de Papel","Lupin"],en:["Loki","Lucifer"]},M:{pt:["Miraculous","Mansão Foster"],en:["Miraculous","Monster High"]},N:{pt:["Naruto","Ninjago"],en:["Naruto","Never Have I Ever"]},O:{pt:["Os Simpsons","O Ursinho Pooh"],en:["The Office","Only Murders in the Building"]},P:{pt:["Peppa Pig","Patrulha Pata"],en:["Peppa Pig","Paw Patrol"]},R:{pt:["Rapunzel","Round 6"],en:["Rugrats","Recess"]},S:{pt:["Stranger Things","SpongeBob"],en:["Stranger Things","SpongeBob","Scrubs"]},T:{pt:["Turma da Mônica","The Walking Dead"],en:["The Simpsons","Ted Lasso"]}},musicians:{A:{pt:["ABBA","Adele","Arctic Monkeys"],en:["ABBA","Adele","Arctic Monkeys"]},B:{pt:["Beatles","Beyoncé","Bruno Mars"],en:["Beatles","Beyoncé","Bruno Mars"]},C:{pt:["Coldplay","Cristiano Araújo"],en:["Coldplay","Chris Brown","Cardi B"]},D:{pt:["David Bowie","Drake"],en:["David Bowie","Drake"]},E:{pt:["Ed Sheeran","Elvis"],en:["Ed Sheeran","Elvis Presley","Eminem"]},F:{pt:["Foo Fighters","Fado (não é músico)"],en:["Foo Fighters","Frank Sinatra","Freddie Mercury"]},G:{pt:["Guns N' Roses","Gloria Gaynor"],en:["Guns N' Roses","Green Day"]},H:{pt:["Harry Styles"],en:["Harry Styles","Halsey"]},I:{pt:["Iron Maiden"],en:["Iron Maiden","Imagine Dragons"]},J:{pt:["Joana Amendoeira","Justin Bieber"],en:["Justin Bieber","Jay-Z","John Legend"]},L:{pt:["Lady Gaga","Lorde"],en:["Lady Gaga","Lorde","Lewis Capaldi"]},M:{pt:["Michael Jackson","Madonna","Maroon 5"],en:["Michael Jackson","Madonna","Maroon 5"]},N:{pt:["Nirvana"],en:["Nirvana","Nicki Minaj"]},O:{pt:["One Direction"],en:["One Direction","Olivia Rodrigo"]},P:{pt:["Pink Floyd","Post Malone"],en:["Pink Floyd","Post Malone"]},R:{pt:["Rihanna","Red Hot Chili Peppers"],en:["Rihanna","Red Hot Chili Peppers"]},S:{pt:["Shakira","Selena Gomez","Sam Smith"],en:["Shakira","Selena Gomez","Sam Smith"]},T:{pt:["Taylor Swift","The Weeknd"],en:["Taylor Swift","The Weeknd"]},V:{pt:["Vivaldi"],en:["Vance Joy","Vampire Weekend"]}},books:{A:{pt:["Alice no País das Maravilhas","O Alquimista"],en:["Alice in Wonderland","Animal Farm"]},B:{pt:["Bambi (livro)","Bíblia"],en:["Bambi","Billy Budd"]},C:{pt:["Cinderela","Charlie e a Fábrica de Chocolate"],en:["Charlie and the Chocolate Factory","Cinderella"]},D:{pt:["Dom Quixote","Diário de um Banana"],en:["David Copperfield","Diary of a Wimpy Kid"]},E:{pt:["Eragon","O Estrangeiro"],en:["Eragon","Emma"]},F:{pt:["Fadas e Magia (não real)"],en:["Frankenstein","Fantastic Mr Fox"]},G:{pt:["O Grande Gatsby","Gulliver"],en:["The Great Gatsby","Gulliver's Travels"]},H:{pt:["Harry Potter","Hamlet"],en:["Harry Potter","Hamlet","Hunger Games"]},I:{pt:["Ilíada"],en:["Iliad","It (Stephen King)"]},J:{pt:["O Jogo do Imortais"],en:["Jane Eyre","Julius Caesar"]},L:{pt:["O Livro da Selva","O Leão a Feiticeira e o Guarda-Roupa"],en:["The Lion, the Witch and the Wardrobe","Little Women"]},M:{pt:["Moby Dick","Mafalda"],en:["Moby Dick","Matilda"]},N:{pt:["Narnia (série)"],en:["Narnia Chronicles"]},O:{pt:["Odisseia","Os Lusíadas"],en:["Odyssey","Oliver Twist"]},P:{pt:["Pequeno Príncipe","Peter Pan","Pinóquio"],en:["The Little Prince","Peter Pan","Pinocchio"]},R:{pt:["Robinson Crusoe","Romeo e Julieta"],en:["Robinson Crusoe","Romeo and Juliet"]},S:{pt:["O Senhor dos Anéis","O Sol também se Levanta"],en:["The Lord of the Rings","Sherlock Holmes"]},T:{pt:["Tom Sawyer","Três Mosqueteiros"],en:["Tom Sawyer","The Three Musketeers"]},V:{pt:["Viagem ao Centro da Terra","Vinte Mil Léguas"],en:["Voyage to the Center of the Earth","20,000 Leagues Under the Sea"]}},history:{A:{pt:["Alexandre o Grande","Afonso Henriques"],en:["Alexander the Great","American Revolution"]},B:{pt:["Batalha de Aljubarrota","Bartolomeu Dias"],en:["Battle of Waterloo","Black Death"]},C:{pt:["Cristóvão Colombo","Cleópatra"],en:["Christopher Columbus","Cleopatra","Crusades"]},D:{pt:["Dom Sebastião","Descobrimentos"],en:["Da Vinci","Dark Ages"]},E:{pt:["Egípcios","Escravidão"],en:["Egyptian Empire","Enlightenment"]},F:{pt:["Fernando Magalhães","Feudalismo"],en:["French Revolution","Feudalism"]},G:{pt:["Gengis Khan","Gregos"],en:["Genghis Khan","Greeks"]},H:{pt:["Hitler","Hannibal"],en:["Hitler","Hannibal"]},I:{pt:["Império Romano","Inquisição"],en:["Industrial Revolution","Inquisition"]},J:{pt:["Júlio César"],en:["Julius Caesar"]},L:{pt:["Luís XIV","Lusíadas"],en:["Louis XIV","Lewis and Clark"]},M:{pt:["Marco Polo","Mundo Antigo"],en:["Marco Polo","Middle Ages"]},N:{pt:["Napoleão"],en:["Napoleon","Norman Conquest"]},O:{pt:["Otomanos"],en:["Ottoman Empire"]},P:{pt:["Pombal","Portugueses (descobertas)"],en:["Pharaohs","Peloponnesian War"]},R:{pt:["Revolução Francesa","Roma"],en:["Renaissance","Roman Empire"]},S:{pt:["Salazar","Segunda Guerra Mundial"],en:["Second World War","Spartans"]},T:{pt:["Tratado de Tordesilhas","Templários"],en:["Trojan War","Treaty of Versailles"]}},jobs:{A:{pt:["Advogado","Arquiteto","Astronauta","Agricultor"],en:["Architect","Astronaut","Actor","Accountant"]},B:{pt:["Bombeiro","Biólogo","Barbeiro"],en:["Baker","Biologist","Builder"]},C:{pt:["Cozinheiro","Carpinteiro","Cientista","Cantor"],en:["Chef","Carpenter","Chemist","Conductor"]},D:{pt:["Dentista","Designer","Detetive"],en:["Dentist","Designer","Doctor","Detective"]},E:{pt:["Enfermeiro","Engenheiro","Escritor"],en:["Engineer","Electrician","Economist"]},F:{pt:["Fotógrafo","Fisioterapeuta","Farmacêutico"],en:["Farmer","Firefighter","Florist"]},G:{pt:["Geólogo","Gestor"],en:["Geologist","Gardener","General"]},H:{pt:["Historiador","Hacker (ético)"],en:["Historian","Hairdresser"]},I:{pt:["Informático","Ilustrador"],en:["Illustrator","Inspector"]},J:{pt:["Jornalista","Juiz"],en:["Journalist","Judge"]},L:{pt:["Limpador","Locutor"],en:["Lawyer","Librarian","Locksmith"]},M:{pt:["Médico","Músico","Mecânico","Matemático"],en:["Mechanic","Musician","Manager","Mathematician"]},N:{pt:["Nutricionista","Nadador-Salvador"],en:["Nurse","Nutritionist"]},O:{pt:["Oftalmologista","Operador"],en:["Optician","Officer"]},P:{pt:["Professor","Piloto","Pintor","Polícia"],en:["Pilot","Painter","Police officer","Plumber"]},R:{pt:["Rececionista","Redator"],en:["Receptionist","Reporter","Researcher"]},S:{pt:["Soldado","Secretário","Sociólogo"],en:["Scientist","Surgeon","Social worker"]},T:{pt:["Técnico","Tradutor","Terapeuta"],en:["Teacher","Translator","Technician"]},V:{pt:["Veterinário","Vendedor"],en:["Veterinarian","Violinist"]}},flowers:{A:{pt:["Azaléia","Açafrão","Antúrio"],en:["Azalea","Amaryllis","Aster"]},B:{pt:["Begónia","Boca-de-Leão"],en:["Begonia","Bluebell","Buttercup"]},C:{pt:["Cravo","Crisântemo","Camomila"],en:["Carnation","Chrysanthemum","Clover"]},D:{pt:["Dália","Dente-de-Leão"],en:["Daisy","Daffodil","Dahlia"]},E:{pt:["Espadana"],en:["Echinacea","Elderflower"]},F:{pt:["Freesia","Fúcsia"],en:["Freesia","Fuchsia","Forget-me-not"]},G:{pt:["Gardénia","Gerânio","Girassol"],en:["Gardenia","Geranium","Gladiolus"]},H:{pt:["Hortênsia","Heliotropo"],en:["Hydrangea","Hibiscus","Hollyhock"]},I:{pt:["Íris"],en:["Iris","Impatiens"]},J:{pt:["Jasmim","Jacinto"],en:["Jasmine","Jonquil"]},L:{pt:["Lavanda","Lírio","Loto"],en:["Lavender","Lily","Lotus","Larkspur"]},M:{pt:["Magnólia","Margarida","Malmequeres"],en:["Magnolia","Marigold","Morning glory"]},N:{pt:["Narciso","Noivinha"],en:["Narcissus","Nasturtium"]},O:{pt:["Orquídea"],en:["Orchid","Oxeye daisy"]},P:{pt:["Peônia","Petúnia","Papoila"],en:["Peony","Petunia","Poppy"]},R:{pt:["Rosa","Ranúnculo"],en:["Rose","Ranunculus"]},S:{pt:["Sempre-viva","Salva"],en:["Sunflower","Sweet pea","Sage"]},T:{pt:["Tulipa","Thistle"],en:["Tulip","Thistle"]},V:{pt:["Violeta","Verbena"],en:["Violet","Verbena"]}}},f="atlantis:stop:categories",g="atlantis:stop:timer",h={title:{pt:"STOP!",en:"STOP!"},chooseCategories:{pt:"Escolhe as categorias",en:"Choose categories"},selected:{pt:"selecionadas",en:"selected"},minCategories:{pt:"Seleciona pelo menos 3",en:"Select at least 3"},startGame:{pt:"Iniciar Jogo",en:"Start Game"},spinning:{pt:"A sortear a letra...",en:"Drawing a letter..."},got:{pt:"Saiu o",en:"Got"},thinkFast:{pt:"Pensa rápido!",en:"Think fast!"},timer:{pt:"Temporizador",en:"Timer"},noTimer:{pt:"Sem tempo",en:"No timer"},seconds:{pt:"s",en:"s"},stopBtn:{pt:"🛑 STOP!",en:"🛑 STOP!"},suggestions:{pt:"Sugestões",en:"Suggestions"},showHints:{pt:"💡 Ver sugestões",en:"💡 Show hints"},hideHints:{pt:"💡 Ocultar sugestões",en:"💡 Hide hints"},roundOver:{pt:"Ronda terminada!",en:"Round over!"},newLetter:{pt:"🔀 Nova Letra",en:"🔀 New Letter"},changeCategories:{pt:"⚙️ Mudar Categorias",en:"⚙️ Change Categories"},roundCount:{pt:"Ronda",en:"Round"},typeAnswer:{pt:"Escreve a resposta...",en:"Type your answer..."},timeUp:{pt:"Tempo esgotado!",en:"Time's up!"},noHints:{pt:"Sem sugestões para esta letra",en:"No hints for this letter"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Adversário",en:"Opponent"},opponentStopped:{pt:"O adversário parou!",en:"Opponent stopped!"},opponentLeft:{pt:"O adversário saiu.",en:"Opponent left."},waitingAnswers:{pt:"À espera das respostas…",en:"Waiting for answers…"},rematch:{pt:"Nova ronda",en:"New round"}};function x(e,o){return h[e]["pt"===o?"pt":"en"]}n.keyframes`
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
`,k=r.default.div`
  min-height: 100%;
  background: radial-gradient(ellipse at top, #0f1624 0%, ${i.w4.colors.mainBg} 70%);
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
`,j=r.default.h1`
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
`,T=r.default.span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
`,M=r.default.span`
  font-weight: 700;
  color: ${({ok:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
`,C=r.default.div`
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
`,B=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
`,_=r.default.div`
  position: absolute;
  top: 6px;
  right: 8px;
  color: ${i.w4.colors.accent};
  font-size: 0.85rem;
  font-weight: 700;
`,E=r.default.button`
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
`,I=r.default.div`
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
  box-shadow: 0 0 40px rgba(88, 166, 255, 0.2);
  transition: all 0.1s ease;
  ${({landing:e})=>e&&n.css`
    transform: scale(1.05);
    box-shadow: 0 0 60px rgba(88, 166, 255, 0.5);
  `}
  ${({landed:e})=>e&&n.css`
    animation: ${b} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, ${v} 1.5s 0.5s ease infinite;
  `}
`,F=r.default.p`
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
`,D=r.default.div`
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
`,oe=r.default.li`
  background: rgba(240, 162, 2, 0.12);
  border: 1px solid rgba(240, 162, 2, 0.25);
  border-radius: 99px;
  padding: 2px 10px;
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainText};
`,te=r.default.p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  font-style: italic;
`,ae=r.default.button`
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
`;function xe({lang:e,canOnline:o}){const[t,r]=(0,a.useState)("solo"),[n,h]=(0,a.useState)("setup"),[b,y]=(0,a.useState)({}),[w,v]=(0,a.useState)({}),[$,re]=(0,a.useState)(!1),[xe]=(0,a.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),be=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":we.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),we.current.sendEvent({type:"host-ack",name:xe,playerId:we.current.room?.playerId??"",players:we.current.room?.players??[]});break;case"host-ack":we.current.setConnected(e.name),e.players&&we.current.setPlayers([...e.players,{id:we.current.room?.playerId??"",name:xe,isHost:!1}]);break;case"player-list":we.current.setPlayers(e.players);break;case"game-state":{const o=e.payload;if("next-round"===o.action)Re({}),_e({}),Ne(!1),y({}),v({}),h("roulette"),Ce("spinning");else if("start-round"===o.action)ze(o.letter),ke(o.categories),Ie(o.timer),h("playing"),Re({}),_e({}),Ne(!1),y({}),v({}),o.timer>0&&(Fe(o.timer),Oe(!0));else if("stop"===o.action)Ye.current&&clearInterval(Ye.current),Oe(!1),we.current.sendEvent({type:"game-state",payload:{action:"answers",answers:We.current,playerId:we.current.room?.playerId,playerName:we.current.room?.playerName}}),h("results"),Ge(e=>e+1);else if("answers"===o.action){const e=o.playerId,t=o.playerName,a=o.answers;y(e=>({...e,...a})),v(o=>({...o,[e]:{name:t,answers:a}}))}break}case"player-left":re(!0)}},[xe]),ye=(0,s.Ky)({gameId:"stopgame",playerName:xe,onEvent:be}),we=(0,a.useRef)(ye);we.current=ye;const ve=(0,s.zj)({gameId:"stopgame",enabled:"online"===t}),[$e,ke]=(0,a.useState)(()=>{try{const e=localStorage.getItem(f);if(e){const o=JSON.parse(e);return Array.isArray(o)?o:[]}}catch{}return["cities","animals","names","fruits","colors"]}),[je,ze]=(0,a.useState)("A"),[Se,Te]=(0,a.useState)("A"),[Me,Ce]=(0,a.useState)("spinning"),[Ae,Re]=(0,a.useState)({}),[Be,_e]=(0,a.useState)({}),[Ee,Ie]=(0,a.useState)(()=>{try{const e=localStorage.getItem(g);if(e){const o=Number(e);return p.includes(o)?o:60}}catch{}return 60}),[Pe,Fe]=(0,a.useState)(0),[Le,Oe]=(0,a.useState)(!1),[De,Ne]=(0,a.useState)(!1),[He,Ge]=(0,a.useState)(0),Ye=(0,a.useRef)(null),qe=(0,a.useRef)(null),Ve=(0,a.useRef)("pt"===e?c:d),We=(0,a.useRef)(Ae);We.current=Ae,(0,a.useEffect)(()=>{Ve.current="pt"===e?c:d},[e]),(0,a.useEffect)(()=>{localStorage.setItem(f,JSON.stringify($e))},[$e]),(0,a.useEffect)(()=>{localStorage.setItem(g,String(Ee))},[Ee]),(0,a.useEffect)(()=>()=>{Ye.current&&clearInterval(Ye.current),qe.current&&clearInterval(qe.current)},[]);const Je=(0,a.useCallback)(e=>{ke(o=>o.includes(e)?o.filter(o=>o!==e):[...o,e])},[]),Xe=(0,a.useCallback)(o=>{try{const t=new SpeechSynthesisUtterance(o);t.lang="pt"===e?"pt-PT":"en-US",t.rate=.8,t.pitch=1.2,t.volume=1,window.speechSynthesis.cancel(),window.speechSynthesis.speak(t)}catch{}},[e]),Ue=(0,a.useCallback)(()=>{h("roulette"),Ce("spinning");const e=Ve.current;let o=Math.floor(Math.random()*e.length);qe.current&&clearInterval(qe.current),qe.current=setInterval(()=>{o=(o+1)%e.length,Te(e[o])},70),"host"===we.current.room?.role&&we.current.sendEvent({type:"game-state",payload:{action:"next-round"}})},[]),Ke=(0,a.useCallback)(()=>{if("spinning"!==Me)return;qe.current&&clearInterval(qe.current);const o=function(e){const o="pt"===e?c:d;return o[Math.floor(Math.random()*o.length)]}(e);ze(o),Te(o),Ce("landing"),Xe(o),setTimeout(()=>{Ce("landed"),setTimeout(()=>{h("playing"),Re({}),_e({}),y({}),Ne(!1),Ee>0&&(Fe(Ee),Oe(!0)),"online"===t&&"host"===we.current.room?.role&&we.current.sendEvent({type:"game-state",payload:{action:"start-round",letter:o,categories:$e,timer:Ee}})},1500)},400)},[e,Ee,Me,Xe,t,$e]);(0,a.useEffect)(()=>{if(Le&&0!==Ee)return Ye.current&&clearInterval(Ye.current),Ye.current=setInterval(()=>{Fe(e=>e<=1?(Ye.current&&clearInterval(Ye.current),Oe(!1),Ne(!0),h("results"),0):e-1)},1e3),()=>{Ye.current&&clearInterval(Ye.current)}},[Le,Ee]);const Qe=(0,a.useCallback)(()=>{if(Ye.current&&clearInterval(Ye.current),Oe(!1),h("results"),Ge(e=>e+1),"online"===t){we.current.sendEvent({type:"game-state",payload:{action:"stop"}}),we.current.sendEvent({type:"game-state",payload:{action:"answers",answers:We.current,playerId:we.current.room?.playerId,playerName:we.current.room?.playerName}});const e=we.current.room?.playerId??"",o=we.current.room?.playerName??"";v(t=>({...t,[e]:{name:o,answers:We.current}}))}},[t]),Ze=(0,a.useCallback)(()=>{Re({}),_e({}),Ne(!1),y({}),v({}),Ue()},[Ue]),eo=(0,a.useCallback)(()=>{h("setup"),Re({}),_e({}),Ne(!1),Ye.current&&clearInterval(Ye.current),Oe(!1)},[]),oo=(0,a.useCallback)(e=>{_e(o=>({...o,[e]:!o[e]}))},[]),to=u.filter(e=>$e.includes(e.id)),ao=Ee>0?Pe/Ee:1,ro=(0,a.useRef)(null),no=(0,a.useRef)(!1);return(0,l.jsxs)(k,{children:[(0,l.jsx)(j,{children:x("title",e)}),"setup"===n&&(0,l.jsxs)(l.Fragment,{children:[o&&(0,l.jsxs)(ge,{children:[(0,l.jsxs)(he,{active:"solo"===t,onClick:()=>r("solo"),children:["🎯 ",x("solo",e)]}),(0,l.jsxs)(he,{active:"online"===t,onClick:()=>r("online"),children:["🌐 ",x("online",e)]})]}),(0,l.jsx)(z,{children:x("chooseCategories",e)}),(0,l.jsx)(S,{children:(0,l.jsxs)(T,{children:[(0,l.jsx)(M,{ok:$e.length>=3,children:$e.length})," ",x("selected",e),$e.length<3&&(0,l.jsxs)("span",{style:{marginLeft:i.w4.spacing.sm,color:"#f0a202",fontSize:i.w4.typography.fontSizeSm},children:["— ",x("minCategories",e)]})]})}),(0,l.jsx)(C,{children:u.map(o=>{const t=$e.includes(o.id);return(0,l.jsxs)(A,{selected:t,onClick:()=>Je(o.id),type:"button","aria-pressed":t,children:[t&&(0,l.jsx)(_,{children:"✓"}),(0,l.jsx)(R,{children:o.icon}),(0,l.jsx)(B,{children:"pt"===e?o.label.pt:o.label.en})]},o.id)})}),(0,l.jsx)("div",{style:{marginTop:i.w4.spacing.lg,width:"100%",maxWidth:"720px"},children:(0,l.jsxs)(H,{children:[(0,l.jsxs)(G,{children:[x("timer",e),":"]}),p.map(o=>(0,l.jsx)(Y,{active:Ee===o,onClick:()=>Ie(o),type:"button",children:0===o?x("noTimer",e):`${o}${x("seconds",e)}`},o))]})}),(0,l.jsx)(E,{disabled:$e.length<3,onClick:$e.length>=3?"online"===t?()=>h("lobby"):Ue:void 0,type:"button",children:x("startGame",e)})]}),"lobby"===n&&(0,l.jsx)("div",{style:{marginTop:i.w4.spacing.lg,width:"100%",maxWidth:400,margin:"0 auto"},children:ye.room?.connected?(0,l.jsxs)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[(0,l.jsx)("p",{style:{color:i.w4.colors.mainTextMuted,fontSize:i.w4.typography.fontSizeMd},children:"host"===ye.room.role?"pt"===e?`${ye.room.players.length} jogadores na sala. Clica para começar.`:`${ye.room.players.length} players in room. Click to start.`:"pt"===e?`Ligado! ${ye.room.players.length} jogadores na sala.`:`Connected! ${ye.room.players.length} players in room.`}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:ye.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===ye.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===ye.room.role&&(0,l.jsx)(E,{disabled:!1,onClick:Ue,type:"button",children:x("startGame",e)})]}):(0,l.jsx)(s.XB,{lang:e,room:ye.room,error:ye.error,availableRooms:ve.rooms,onCreateRoom:()=>{const{code:e,roomName:o}=ye.createRoom();ve.publishRoom({code:e,roomName:o,hostName:xe,playerCount:1})},onJoinRoom:e=>ye.joinRoom(e),onLeaveRoom:()=>{ve.unpublishRoom(),ye.leaveRoom(),h("setup")}})}),"roulette"===n&&(0,l.jsxs)(I,{children:[(0,l.jsx)(P,{landing:"landing"===Me,landed:"landed"===Me,children:Se}),"spinning"===Me&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F,{children:x("spinning",e)}),(0,l.jsx)(ne,{onTouchStart:e=>{ro.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!ro.current)return;const o=Math.abs(e.changedTouches[0].clientX-ro.current.x),t=Math.abs(e.changedTouches[0].clientY-ro.current.y);ro.current=null,o>8||t>8||(no.current=!0,Ke())},onClick:()=>{no.current?no.current=!1:Ke()},children:"STOP!"})]}),("landing"===Me||"landed"===Me)&&(0,l.jsxs)(L,{children:[x("got",e)," ",(0,l.jsxs)("strong",{children:["“",je,"”"]}),"!",(0,l.jsx)("br",{}),(0,l.jsx)("span",{style:{fontSize:"1rem",fontWeight:400,color:i.w4.colors.mainTextMuted},children:x("thinkFast",e)})]})]}),"playing"===n&&(0,l.jsxs)(O,{children:[(0,l.jsxs)(D,{children:[(0,l.jsx)(N,{children:je}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{fontSize:i.w4.typography.fontSizeLg,fontWeight:700,color:i.w4.colors.mainText},children:[x("got",e)," “",je,"”"]}),He>0&&(0,l.jsxs)("div",{style:{fontSize:i.w4.typography.fontSizeSm,color:i.w4.colors.mainTextMuted},children:[x("roundCount",e)," ",He+1]})]})]}),Ee>0&&(0,l.jsxs)(H,{children:[(0,l.jsx)(q,{pct:ao}),(0,l.jsxs)(V,{pct:ao,children:[Pe,x("seconds",e)]})]}),to.map(o=>{const t=function(e,o,t){const a=m[e];if(!a)return[];const r=a[o];return r?"pt"===t?r.pt:r.en:[]}(o.id,je,e),a=Be[o.id]??!1;return(0,l.jsxs)(W,{children:[(0,l.jsxs)(J,{children:[(0,l.jsxs)(X,{children:[(0,l.jsx)("span",{children:o.icon}),"pt"===e?o.label.pt:o.label.en]}),(0,l.jsx)(U,{onClick:()=>oo(o.id),type:"button",children:x(a?"hideHints":"showHints",e)})]}),(0,l.jsx)(K,{value:Ae[o.id]??"",onChange:e=>Re(t=>({...t,[o.id]:e.target.value})),placeholder:x("typeAnswer",e),spellCheck:!1,autoCapitalize:"off"}),a&&(0,l.jsxs)(Q,{children:[(0,l.jsx)(Z,{children:x("suggestions",e)}),t.length>0?(0,l.jsx)(ee,{children:t.map((e,o)=>(0,l.jsx)(oe,{children:e},o))}):(0,l.jsx)(te,{children:x("noHints",e)})]})]},o.id)}),(0,l.jsx)(ae,{type:"button",onTouchStart:e=>{ro.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!ro.current)return;const o=Math.abs(e.changedTouches[0].clientX-ro.current.x),t=Math.abs(e.changedTouches[0].clientY-ro.current.y);ro.current=null,o>8||t>8||(no.current=!0,Qe())},onClick:()=>{no.current?no.current=!1:Qe()},children:x("stopBtn",e)})]}),"results"===n&&(0,l.jsxs)(ie,{children:[(0,l.jsxs)(se,{children:[(0,l.jsx)(le,{children:x(De?"timeUp":"roundOver",e)}),(0,l.jsxs)(ce,{children:[x("got",e)," “",je,"”",He>0&&` · ${x("roundCount",e)} ${He+1}`]})]}),to.map(o=>(0,l.jsxs)(de,{children:[(0,l.jsxs)(pe,{children:[(0,l.jsx)("span",{children:o.icon}),"pt"===e?o.label.pt:o.label.en]}),"online"===t?(0,l.jsx)("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:Object.entries(w).sort(([e],[o])=>e===ye.room?.playerId?-1:o===ye.room?.playerId?1:0).map(([t,{name:a,answers:r}])=>(0,l.jsxs)("div",{style:{flex:"1 1 100px",minWidth:80},children:[(0,l.jsxs)("div",{style:{fontSize:11,fontWeight:600,marginBottom:2,color:t===ye.room?.playerId?i.w4.colors.accent:i.w4.colors.mainTextMuted},children:[a,t===ye.room?.playerId?` (${x("you",e)})`:""]}),(0,l.jsx)(ue,{children:r[o.id]||(0,l.jsx)("span",{style:{color:i.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},t))}):(0,l.jsx)(ue,{children:Ae[o.id]||(0,l.jsx)("span",{style:{color:i.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},o.id)),(0,l.jsxs)(me,{children:[(0,l.jsx)(fe,{type:"button",onClick:Ze,children:x("newLetter",e)}),(0,l.jsx)(fe,{type:"button",variant:"secondary",onClick:eo,children:x("changeCategories",e)})]})]})]})}},4425(e,o,t){t.d(o,{n:()=>P});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(1364),l=t(5723);const c=["🍎","🍌","🍇","🍉","🍊","🍓","🫐","🍒","🥝","🍑","🐶","🐱","🐸","🦊","🐼","🐵","🦁","🐮","🐷","🐔","⭐","❤️","💎","🔥","🌈","⚡","🎯","🎸","🚀","🌙"];function d(e){const o=[...e];for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o}function p(e){const o=(t=c)[Math.floor(Math.random()*t.length)];var t;const a=d(c.filter(e=>e!==o)).slice(0,e-1),r=d([o,...a]);return{target:o,grid:r,targetIndex:r.indexOf(o)}}const u=n.keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,m=n.keyframes`0% { transform: scale(0); } 60% { transform: scale(1.15); } 100% { transform: scale(1); }`,f=n.keyframes`0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); }`,g=n.keyframes`0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}`,h=n.keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.3)}`,x=n.keyframes`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,b=r.default.div`
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: ${i.w4.spacing.lg}; gap: ${i.w4.spacing.lg}; overflow-y: auto; min-height: 0;
  background: radial-gradient(ellipse 60% 50% at 30% 20%, rgba(249,117,131,0.06) 0%, transparent 70%),
              radial-gradient(ellipse 50% 60% at 70% 80%, rgba(88,166,255,0.04) 0%, transparent 70%), #080b12;
`,y=r.default.h1`font-size: clamp(1.6rem,4vw,2.4rem); font-weight: 800; color: ${i.w4.colors.mainText}; margin: 0; text-align: center; animation: ${u} 0.3s ease;`,w=r.default.p`font-size: ${i.w4.typography.fontSizeMd}; color: ${i.w4.colors.mainTextMuted}; text-align: center; margin: 0;`,v=r.default.div`display:flex;gap:2px;padding:2px;background:${i.w4.colors.mainBg};border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.md};`,$=r.default.button`padding:8px 18px;border:none;border-radius:${i.w4.borderRadius.sm};font-size:14px;min-height:36px;font-weight:600;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:background 0.2s,color 0.2s;background:${({active:e})=>e?"rgba(249,117,131,0.18)":"transparent"};color:${({active:e})=>e?"#f97583":i.w4.colors.mainTextMuted};&:hover{color:#f97583;background:rgba(249,117,131,0.1);}`,k=r.default.button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${i.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}&:active{transform:translateY(-1px);}`,j=r.default.div`font-size: clamp(4rem,12vw,8rem); font-weight: 900; color: ${i.w4.colors.accent}; animation: ${x} 0.5s ease;`,z=r.default.div`display:flex;align-items:center;gap:${i.w4.spacing.md};padding:12px 24px;border-radius:${i.w4.borderRadius.lg};background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.accent};animation:${m} 0.3s ease;`,S=r.default.span`font-size:48px;animation:${h} 1s ease-in-out infinite;`,T=r.default.span`font-size:24px;color:${i.w4.colors.accent};font-weight:800;`,M=r.default.div`display:grid;grid-template-columns:repeat(${({cols:e})=>e},1fr);gap:10px;max-width:500px;width:100%;animation:${u} 0.2s ease;`,C=r.default.button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(28px,6vw,42px);
  background:${i.w4.colors.surface};border:2px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};
  cursor:pointer;transition:all 0.15s;min-height:56px;
  border-color: ${({correct:e,wrong:o})=>e?"#3fb950":o?"#f97583":i.w4.colors.border};
  background: ${({correct:e,wrong:o})=>e?"rgba(63,185,80,0.15)":o?"rgba(249,117,131,0.15)":i.w4.colors.surface};
  animation: ${({correct:e,wrong:o})=>e?f:o?g:"none"} ${({correct:e})=>e?"0.5s ease":"0.4s ease"};
  &:hover:not(:disabled){background:rgba(88,166,255,0.08);transform:scale(1.05);}
  &:active:not(:disabled){transform:scale(0.95);}
`,A=r.default.div`display:flex;gap:${i.w4.spacing.lg};align-items:center;`,R=r.default.div`padding:6px 14px;background:${i.w4.colors.surface};border:1px solid ${({color:e})=>e??i.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??i.w4.colors.mainText};`,B=(r.default.div`
  position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  font-size:80px;pointer-events:none;animation:${m} 0.3s ease;z-index:10;
  background:${({type:e})=>"correct"===e?"rgba(63,185,80,0.1)":"rgba(249,117,131,0.1)"};
  border-radius:${i.w4.borderRadius.lg};
`,r.default.div`display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;animation:${u} 0.3s ease;`),_=r.default.div`display:flex;align-items:center;gap:${i.w4.spacing.sm};padding:10px 14px;background:${i.w4.colors.surface};border:1px solid ${({highlight:e})=>e?i.w4.colors.accent:i.w4.colors.border};border-radius:${i.w4.borderRadius.lg};`,E=r.default.span`flex:1;font-weight:600;color:${({highlight:e})=>e?i.w4.colors.accent:i.w4.colors.mainText};`,I=r.default.span`font-size:20px;font-weight:800;color:${({color:e})=>e??i.w4.colors.mainText};`;function P({lang:e,canOnline:o}){const[t,r]=(0,a.useState)("menu"),[n,c]=(0,a.useState)("solo"),[d,u]=(0,a.useState)(0),[m,f]=(0,a.useState)(null),[g,h]=(0,a.useState)(0),[x,P]=(0,a.useState)({}),[F,L]=(0,a.useState)(3),[O,D]=(0,a.useState)(null),[N,H]=(0,a.useState)(!1),[G]=(0,a.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),Y=(0,a.useRef)(!1),q=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":W.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),W.current.sendEvent({type:"host-ack",name:G,playerId:W.current.room?.playerId??"",players:W.current.room?.players??[]});break;case"host-ack":W.current.setConnected(e.name),e.players&&W.current.setPlayers([...e.players,{id:W.current.room?.playerId??"",name:G,isHost:!1}]);break;case"player-list":W.current.setPlayers(e.players);break;case"game-state":{const o=e.payload;if("new-round"===o.action)f(o.roundData),u(o.round),D(null),H(!1),Y.current=!1,r("playing");else if("round-result"===o.action)P(o.scores),o.winnerId===W.current.room?.playerId&&h(e=>e+1);else if("game-over"===o.action)P(o.scores),r("scores");else if("tap"===o.action&&"host"===W.current.room?.role&&!Y.current){const e=o.index,t=o.playerId;if(X.current&&e===X.current.targetIndex){Y.current=!0;const e={...K.current,[t]:(K.current[t]??0)+1};P(e),K.current=e,W.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:t,scores:e}}),setTimeout(()=>Q(),1200)}}break}case"player-left":e.playerId&&W.current.removePlayer(e.playerId)}},[G]),V=(0,s.Ky)({gameId:"tapit",playerName:G,onEvent:q}),W=(0,a.useRef)(V);W.current=V;const J=(0,s.zj)({gameId:"tapit",enabled:"online"===n}),X=(0,a.useRef)(m);X.current=m;const U=(0,a.useRef)(d);U.current=d;const K=(0,a.useRef)(x);K.current=x;const Q=(0,a.useCallback)(()=>{const e=U.current+1;if(e>10)return W.current.sendEvent({type:"game-state",payload:{action:"game-over",scores:K.current}}),void r("scores");const o=p(12);X.current=o,f(o),u(e),D(null),H(!1),Y.current=!1,r("playing"),W.current.sendEvent({type:"game-state",payload:{action:"new-round",roundData:o,round:e}})},[]),Z=(0,a.useCallback)(()=>{h(0),P({}),K.current={},u(0),U.current=0,L(3),r("countdown");let e=3;const o=setInterval(()=>{if(e--,L(e),e<=0)if(clearInterval(o),"online"===n&&"host"===V.room?.role)Q();else if("solo"===n){const e=p(12);f(e),u(1),U.current=1,Y.current=!1,r("playing")}},800)},[n,V.room?.role,Q]),ee=(0,a.useCallback)(e=>{if("playing"===t&&!Y.current&&m)if("online"!==n)e===m.targetIndex?(Y.current=!0,D(e),H(!0),h(e=>e+1),setTimeout(()=>{const e=U.current+1;if(e>10)return void r("scores");const o=p(12);f(o),u(e),U.current=e,D(null),Y.current=!1},600)):(D(e),H(!1),setTimeout(()=>D(null),400));else if("host"===V.room?.role)if(e===m.targetIndex){Y.current=!0,D(e),H(!0);const o=V.room.playerId,t={...K.current,[o]:(K.current[o]??0)+1};P(t),K.current=t,h(e=>e+1),V.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:o,scores:t}}),setTimeout(()=>Q(),1200)}else D(e),H(!1),setTimeout(()=>D(null),400);else e===m.targetIndex?(Y.current=!0,D(e),H(!0)):(D(e),H(!1),setTimeout(()=>D(null),400)),V.sendEvent({type:"game-state",payload:{action:"tap",index:e,playerId:V.room?.playerId}})},[t,m,n,V,Q]);if("menu"===t)return(0,l.jsxs)(b,{children:[(0,l.jsxs)(y,{children:["🎯 ","pt"===e?"Toca no Certo!":"Tap the Right One!"]}),(0,l.jsx)(w,{children:"pt"===e?"Encontra o símbolo certo o mais rápido possível!":"Find the right symbol as fast as you can!"}),o&&(0,l.jsxs)(v,{children:[(0,l.jsxs)($,{active:"solo"===n,onClick:()=>c("solo"),children:["🎯 ","pt"===e?"Sozinho":"Solo"]}),(0,l.jsx)($,{active:"online"===n,onClick:()=>c("online"),children:"🌐 Online"})]}),"online"===n?(0,l.jsx)(k,{accent:"#f97583",onClick:()=>r("lobby"),children:"pt"===e?"Criar / Entrar Sala":"Create / Join Room"}):(0,l.jsx)(k,{accent:"#f97583",onClick:Z,children:"pt"===e?"Jogar!":"Play!"})]});if("lobby"===t)return(0,l.jsxs)(b,{children:[(0,l.jsxs)(y,{children:["🎯 ","pt"===e?"Toca no Certo!":"Tap the Right One!"]}),V.room?.connected?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{children:"host"===V.room.role?`${V.room.players.length} ${"pt"===e?"jogadores":"players"}`:"pt"===e?"À espera do anfitrião…":"Waiting for host…"}),(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:V.room.players.map(e=>(0,l.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":i.w4.colors.surface,border:`1px solid ${e.isHost?i.w4.colors.accent:i.w4.colors.border}`,color:e.id===V.room?.playerId?i.w4.colors.accent:i.w4.colors.mainText},children:[e.isHost?"👑":"👤"," ",e.name]},e.id))}),"host"===V.room.role&&(0,l.jsx)(k,{accent:"#f97583",onClick:Z,children:"pt"===e?"Começar!":"Start!"})]}):(0,l.jsx)(s.XB,{lang:e,room:V.room,error:V.error,availableRooms:J.rooms,onCreateRoom:()=>{const{code:e,roomName:o}=V.createRoom();J.publishRoom({code:e,roomName:o,hostName:G,playerCount:1})},onJoinRoom:e=>V.joinRoom(e),onLeaveRoom:()=>{J.unpublishRoom(),V.leaveRoom(),r("menu")}})]});if("countdown"===t)return(0,l.jsx)(b,{children:(0,l.jsx)(j,{children:F>0?F:"🎯"},F)});if("scores"===t){const o="online"===n,t=o?(V.room?.players??[]).map(e=>({id:e.id,name:e.name,pts:x[e.id]??0})).sort((e,o)=>o.pts-e.pts):[{id:"me",name:G,pts:g}];return(0,l.jsxs)(b,{children:[(0,l.jsxs)(y,{children:["🏆 ","pt"===e?"Resultados":"Results"]}),(0,l.jsx)(B,{children:t.map((e,o)=>(0,l.jsxs)(_,{highlight:e.id===V.room?.playerId,children:[(0,l.jsx)("span",{style:{fontSize:18,minWidth:28},children:0===o?"🥇":1===o?"🥈":2===o?"🥉":`${o+1}.`}),(0,l.jsx)(E,{highlight:e.id===V.room?.playerId,children:e.name}),(0,l.jsxs)(I,{color:0===o?"#3fb950":void 0,children:[e.pts,"/",10]})]},e.id))}),(0,l.jsx)(k,{accent:"#f97583",onClick:()=>{o&&(V.leaveRoom(),J.unpublishRoom()),r("menu")},children:"pt"===e?"Jogar Outra Vez":"Play Again"})]})}if(!m)return(0,l.jsx)(b,{children:(0,l.jsx)(w,{children:"Loading..."})});const oe=m.grid.length<=9?3:4;return(0,l.jsxs)(b,{children:[(0,l.jsxs)(A,{children:[(0,l.jsxs)(R,{children:["⭐ ",g]}),(0,l.jsxs)(R,{children:["pt"===e?"Ronda":"Round"," ",d,"/",10]})]}),(0,l.jsxs)(z,{children:[(0,l.jsx)(T,{children:"👉"}),(0,l.jsx)(S,{children:m.target}),(0,l.jsx)(T,{children:"👈"})]}),(0,l.jsx)("div",{style:{position:"relative"},children:(0,l.jsx)(M,{cols:oe,children:m.grid.map((e,o)=>(0,l.jsx)(C,{correct:O===o&&N,wrong:O===o&&!N,onClick:()=>ee(o),style:{animationDelay:.03*o+"s"},children:e},`${d}-${o}`))})})]})}},6574(e,o,t){t.d(o,{a:()=>ee});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(5723);const l="atlantis-textadventure-progress";function c(){try{const e=localStorage.getItem(l);return e?JSON.parse(e):{}}catch{return{}}}const d=[{id:"castle",emoji:"🏰",title:{pt:"O Castelo Misterioso",en:"The Mysterious Castle"},description:{pt:"Explora um castelo mágico cheio de segredos, magos e criaturas encantadas.",en:"Explore a magical castle full of secrets, wizards and enchanted creatures."},color:"#7c5cbf",totalEndings:3,scenes:[{id:"castle_start",emoji:"🏰",text:{pt:"Você chega à porta de um enorme castelo misterioso. As paredes são de pedra cinzenta e há hera crescendo por toda parte. Uma brisa fria sopra pela floresta ao redor. Você ouve um barulho estranho vindo de dentro.",en:"You arrive at the gate of an enormous mysterious castle. The walls are grey stone with ivy growing everywhere. A cool breeze blows through the surrounding forest. You hear a strange sound coming from inside."},choices:[{label:{pt:"Entrar pela porta principal",en:"Enter through the main door"},next:"castle_main_door"},{label:{pt:"Procurar uma janela aberta",en:"Look for an open window"},next:"castle_window"},{label:{pt:"Chamar por alguém",en:"Call out to someone"},next:"castle_call"}]},{id:"castle_main_door",emoji:"🚪",text:{pt:"A porta enorme range ao abrir. Dentro, você encontra um grande salão com tapeçarias coloridas nas paredes. No centro, uma escada larga sobe para o andar de cima. Mas também há uma porta pequena à esquerda.",en:"The huge door creaks as it opens. Inside, you find a grand hall with colourful tapestries on the walls. In the centre, a wide staircase leads upstairs. But there is also a small door to the left."},choices:[{label:{pt:"Subir a escada",en:"Climb the staircase"},next:"castle_upstairs"},{label:{pt:"Abrir a porta pequena",en:"Open the small door"},next:"castle_kitchen"}]},{id:"castle_window",emoji:"🪟",text:{pt:"Você encontra uma janela entreaberta no andar térreo. Ao espiar para dentro, vê uma biblioteca cheia de livros enormes e um gato preto dormindo sobre uma mesa. Você entra sem fazer barulho.",en:"You find a slightly open window on the ground floor. Peeking inside, you see a library full of enormous books and a black cat sleeping on a table. You climb in without making a sound."},choices:[{label:{pt:"Explorar a biblioteca",en:"Explore the library"},next:"castle_library"},{label:{pt:"Acordar o gato",en:"Wake the cat"},next:"castle_cat"}]},{id:"castle_call",emoji:"📣",text:{pt:'Você grita "Olá! Tem alguém aí?" e sua voz ecoa pelo castelo. De repente, uma janela lá em cima se abre e uma velhinha de cabelos brancos aparece. Ela sorri e joga uma chave dourada para você!',en:'You shout "Hello! Is anyone there?" and your voice echoes through the castle. Suddenly, a window opens high above and a little old lady with white hair appears. She smiles and tosses a golden key down to you!'},choices:[{label:{pt:"Usar a chave dourada na porta",en:"Use the golden key on the door"},next:"castle_golden_room"},{label:{pt:"Perguntar à velhinha quem ela é",en:"Ask the old lady who she is"},next:"castle_witch"}]},{id:"castle_upstairs",emoji:"🌟",text:{pt:'No topo da escada, você encontra um quarto cheio de brilho dourado. No centro há um baú antigo com um cartão que diz: "Para o corajoso aventureiro — abra e descubra!" Seu coração bate mais rápido.',en:'At the top of the staircase, you find a room filled with golden glow. In the centre is an old chest with a card that reads: "For the brave adventurer — open and discover!" Your heart beats faster.'},choices:[{label:{pt:"Abrir o baú",en:"Open the chest"},next:"castle_end_treasure"},{label:{pt:"Chamar os amigos antes de abrir",en:"Call friends before opening"},next:"castle_end_friends"}]},{id:"castle_kitchen",emoji:"🍲",text:{pt:'A porta pequena leva a uma cozinha quentinha e cheirosa. Uma sopa deliciosa fervilha no fogão. Há um bilhete na mesa: "Ajude-se! — O Mago do Castelo". Você come um pouco e se sente muito mais corajoso!',en:'The small door leads to a warm, fragrant kitchen. A delicious soup bubbles on the stove. There is a note on the table: "Help yourself! — The Castle Wizard". You eat some and feel much braver!'},choices:[{label:{pt:"Ir procurar o mago",en:"Go look for the wizard"},next:"castle_wizard"},{label:{pt:"Explorar mais o castelo",en:"Explore more of the castle"},next:"castle_upstairs"}]},{id:"castle_library",emoji:"📚",text:{pt:'Os livros na biblioteca são enormes e têm títulos como "Feitiços para Iniciantes" e "Dragões: Um Guia Completo". Um livro começa a brilhar quando você se aproxima. Ele se abre sozinho numa página especial!',en:'The books in the library are enormous with titles like "Spells for Beginners" and "Dragons: A Complete Guide". One book begins to glow as you approach. It opens by itself to a special page!'},choices:[{label:{pt:"Ler o livro brilhante",en:"Read the glowing book"},next:"castle_spell"},{label:{pt:"Pegar o livro sobre dragões",en:"Grab the dragon book"},next:"castle_dragon"}]},{id:"castle_cat",emoji:"🐱",text:{pt:'O gato abre os olhos lentamente e fala: "Finalmente! Estava esperando por você." Você quase cai de susto! O gato explica que é o guardião do castelo e que pode mostrar o tesouro secreto.',en:'The cat opens its eyes slowly and says: "Finally! I have been waiting for you." You nearly fall over in shock! The cat explains it is the castle guardian and can show you the secret treasure.'},choices:[{label:{pt:"Seguir o gato mágico",en:"Follow the magic cat"},next:"castle_end_treasure"},{label:{pt:"Perguntar como o gato fala",en:"Ask how the cat speaks"},next:"castle_wizard"}]},{id:"castle_golden_room",emoji:"✨",text:{pt:'A chave dourada abre uma porta secreta no jardim! Dentro há um quarto redondo cheio de estrelas brilhando no tecto, mesmo durante o dia. Uma nota diz: "Este quarto pertence a quem é curioso e corajoso."',en:'The golden key opens a secret door in the garden! Inside is a round room full of stars shining on the ceiling, even during the day. A note reads: "This room belongs to whoever is curious and brave."'},choices:[{label:{pt:"Deitar e observar as estrelas",en:"Lie down and watch the stars"},next:"castle_end_stars"},{label:{pt:"Procurar mais segredos no quarto",en:"Search for more secrets in the room"},next:"castle_end_treasure"}]},{id:"castle_witch",emoji:"🧙‍♀️",text:{pt:'A velhinha desce pelo jardim e se apresenta: "Sou a Bruxinha Margarida! Cuido deste castelo há 200 anos." Ela sorri: "Mas estou tão sozinha... Queres ficar para um chá e me contar histórias do mundo lá fora?"',en:'The little old lady comes down through the garden and introduces herself: "I am Witch Marguerite! I have been looking after this castle for 200 years." She smiles: "But I am so lonely... Will you stay for tea and tell me stories from the outside world?"'},choices:[{label:{pt:"Ficar para o chá e fazer amizade",en:"Stay for tea and make a friend"},next:"castle_end_friends"},{label:{pt:"Entrar e explorar o castelo dela",en:"Go in and explore her castle"},next:"castle_end_stars"}]},{id:"castle_spell",emoji:"🪄",text:{pt:"O livro ensina um feitiço simples de luz. Você segue as instruções e de repente a palma da sua mão brilha! A magia funciona! O castelo inteiro se ilumina e você vê um mapa secreto desenhado no chão.",en:"The book teaches a simple light spell. You follow the instructions and suddenly your palm glows! The magic works! The whole castle lights up and you see a secret map drawn on the floor."},choices:[{label:{pt:"Seguir o mapa até o tesouro",en:"Follow the map to the treasure"},next:"castle_end_treasure"},{label:{pt:"Guardar o mapa para voltar depois",en:"Keep the map and come back later"},next:"castle_end_stars"}]},{id:"castle_dragon",emoji:"🐉",text:{pt:"O livro se abre numa página com um dragão pequenino desenhado. De repente o dragão sai do livro! Mas é muito pequeno — cabe na sua mão. Ele ronrona como um gatinho e se torna seu amigo.",en:"The book opens to a page with a tiny dragon drawn on it. Suddenly the dragon leaps out of the book! But it is very tiny — small enough to fit in your hand. It purrs like a kitten and becomes your friend."},choices:[{label:{pt:"Levar o dragão em casa como animal de estimação",en:"Take the dragon home as a pet"},next:"castle_end_friends"},{label:{pt:"Pedir ao dragão para mostrar o castelo",en:"Ask the dragon to show you the castle"},next:"castle_end_treasure"}]},{id:"castle_wizard",emoji:"🧙",text:{pt:'Você encontra o Mago do Castelo na torre mais alta. É um senhor alegre com barba azul e chapéu de estrelas. Ele fica muito feliz com sua visita: "Não recebia visitantes há séculos! Vou te ensinar um feitiço de presente!"',en:"You find the Castle Wizard in the tallest tower. He is a jolly gentleman with a blue beard and a star-covered hat. He is thrilled by your visit: \"I haven't had visitors in centuries! I'll teach you a spell as a gift!\""},choices:[{label:{pt:"Aprender o feitiço e explorar o castelo",en:"Learn the spell and explore the castle"},next:"castle_end_stars"},{label:{pt:"Convidar o mago para jantar na sua casa",en:"Invite the wizard to dinner at your home"},next:"castle_end_friends"}]},{id:"castle_end_treasure",emoji:"💎",text:{pt:"Você descobriu o Tesouro do Castelo Misterioso! Baús cheios de joias coloridas, livros de magia e brinquedos encantados que nunca existiram antes. O mago diz que tudo pertence a você porque você foi corajoso e curioso. Que aventura incrível!",en:"You discovered the Treasure of the Mysterious Castle! Chests full of colourful jewels, magic books and enchanted toys that have never existed before. The wizard says it all belongs to you because you were brave and curious. What an incredible adventure!"},isEnding:!0,endingType:"good"},{id:"castle_end_friends",emoji:"🤝",text:{pt:"Você fez os melhores amigos do mundo neste castelo! A Bruxinha Margarida, o Mago da Barba Azul, o gato falante e até um dragãozinho. Eles te convidam para voltar sempre. Às vezes os maiores tesouros são as amizades que fazemos!",en:"You made the best friends in the world in this castle! Witch Marguerite, the Blue-Beard Wizard, the talking cat, and even a tiny dragon. They invite you to come back whenever you like. Sometimes the greatest treasures are the friendships we make!"},isEnding:!0,endingType:"good"},{id:"castle_end_stars",emoji:"🌌",text:{pt:"Você descobre o segredo mais bonito do castelo: um quarto com um telescópio mágico que mostra não só as estrelas, mas também as histórias que acontecem nelas. Você fica tão encantado que decide voltar todos os dias para aprender mais sobre o universo.",en:"You discover the most beautiful secret of the castle: a room with a magical telescope that shows not just stars but also the stories happening in them. You are so enchanted that you decide to come back every day to learn more about the universe."},isEnding:!0,endingType:"neutral"}]},{id:"space",emoji:"🚀",title:{pt:"Missão Espacial",en:"Space Mission"},description:{pt:"Sê o capitão de uma nave espacial e descobre planetas incríveis e seres amigáveis.",en:"Be the captain of a spaceship and discover incredible planets and friendly beings."},color:"#1e6fa8",totalEndings:4,scenes:[{id:"space_start",emoji:"🚀",text:{pt:"Você é o capitão da nave espacial Estrela Dourada! A nave está a orbitar um planeta desconhecido de cor roxa. Os sensores detectam vida lá em baixo, mas também um sinal de socorro vindo de uma lua próxima.",en:"You are the captain of the spaceship Golden Star! The ship is orbiting an unknown purple planet. Sensors detect life below, but also a distress signal coming from a nearby moon."},choices:[{label:{pt:"Descer ao planeta roxo",en:"Land on the purple planet"},next:"space_planet"},{label:{pt:"Ir até à lua do sinal de socorro",en:"Head to the moon with the distress signal"},next:"space_moon"},{label:{pt:"Analisar melhor os dados primeiro",en:"Analyse the data more carefully first"},next:"space_analyse"}]},{id:"space_planet",emoji:"🪐",text:{pt:"O planeta roxo é cheio de plantas gigantes que brilham de noite! Criaturas pequenas e amigáveis chamadas Puffs correm ao seu encontro. Elas falam numa língua estranha mas parecem muito alegres por te ver.",en:"The purple planet is full of giant plants that glow at night! Small, friendly creatures called Puffs come running towards you. They speak a strange language but seem very happy to see you."},choices:[{label:{pt:"Tentar comunicar com os Puffs",en:"Try to communicate with the Puffs"},next:"space_puffs"},{label:{pt:"Explorar a floresta brilhante",en:"Explore the glowing forest"},next:"space_forest"}]},{id:"space_moon",emoji:"🌕",text:{pt:"A lua tem uma superfície cinzenta e cheia de crateras. O sinal vem de uma cúpula de vidro escondida atrás de uma colina de pedra. Dentro, você vê um robô pequenino que acena para você!",en:"The moon has a grey surface full of craters. The signal comes from a glass dome hidden behind a stone hill. Inside, you spot a tiny robot waving at you!"},choices:[{label:{pt:"Entrar na cúpula para ajudar o robô",en:"Enter the dome to help the robot"},next:"space_robot"},{label:{pt:"Pedir reforços antes de entrar",en:"Call for backup before entering"},next:"space_analyse"}]},{id:"space_analyse",emoji:"💻",text:{pt:"Você estuda os dados com cuidado. Os computadores da nave revelam uma surpresa: o planeta roxo e a lua estão conectados! Um túnel subterrâneo liga os dois. Alguém — ou algo — mora nos dois lugares ao mesmo tempo!",en:"You study the data carefully. The ship's computers reveal a surprise: the purple planet and the moon are connected! An underground tunnel links the two. Someone — or something — lives in both places at once!"},choices:[{label:{pt:"Ir ao planeta para procurar a entrada do túnel",en:"Go to the planet to look for the tunnel entrance"},next:"space_tunnel"},{label:{pt:"Mandar uma mensagem amigável pelo rádio",en:"Send a friendly message by radio"},next:"space_radio"}]},{id:"space_puffs",emoji:"👽",text:{pt:"Com gestos e sorrisos, você começa a aprender a língua dos Puffs! Eles se chamam Bloop, Fleep e Zoop. Eles explicam que são os guardiões de uma semente especial que pode crescer em qualquer planeta do universo.",en:"With gestures and smiles, you begin to learn the Puffs' language! They are called Bloop, Fleep and Zoop. They explain they are guardians of a special seed that can grow on any planet in the universe."},choices:[{label:{pt:"Receber a semente como presente",en:"Accept the seed as a gift"},next:"space_end_seeds"},{label:{pt:"Ajudá-los a plantar a semente num novo planeta",en:"Help them plant the seed on a new planet"},next:"space_end_friendship"}]},{id:"space_forest",emoji:"🌿",text:{pt:"A floresta brilhante é mágica! As plantas emitem sons musicais ao serem tocadas. Você descobre que toda a floresta é um instrumento musical gigante. De repente, uma melodia incrível começa a tocar quando você toca as plantas na ordem certa.",en:"The glowing forest is magical! The plants make musical sounds when touched. You discover the whole forest is one giant musical instrument. Suddenly, an incredible melody begins to play when you touch the plants in the right order."},choices:[{label:{pt:"Gravar a música para levar para casa",en:"Record the music to take home"},next:"space_end_music"},{label:{pt:"Chamar os Puffs para dançar",en:"Call the Puffs to come dance"},next:"space_end_friendship"}]},{id:"space_robot",emoji:"🤖",text:{pt:"O robô se chama R-7 e ficou preso na cúpula há 50 anos quando a sua nave avariou. Ele ficou a estudar as estrelas sozinho todo esse tempo. Está tão feliz que começa a dançar! Ele tem mapas de 1000 planetas desconhecidos!",en:"The robot is called R-7 and got stuck in the dome 50 years ago when its ship broke down. It has been studying the stars alone all that time. It is so happy that it starts dancing! It has maps of 1000 unknown planets!"},choices:[{label:{pt:"Levar o R-7 a bordo da sua nave",en:"Bring R-7 aboard your ship"},next:"space_end_friendship"},{label:{pt:"Usar os mapas para explorar novos planetas juntos",en:"Use the maps to explore new planets together"},next:"space_end_exploration"}]},{id:"space_tunnel",emoji:"🕳️",text:{pt:"Você encontra a entrada do túnel escondida debaixo de uma rocha enorme. É um tubo de vidro que brilha de azul por dentro. Ao entrar, você escorrega rapidamente até um laboratório subterrâneo incrível!",en:"You find the tunnel entrance hidden under an enormous rock. It is a glass tube that glows blue inside. When you enter, you slide quickly down to an incredible underground laboratory!"},choices:[{label:{pt:"Explorar o laboratório",en:"Explore the laboratory"},next:"space_end_exploration"},{label:{pt:"Usar o laboratório para fazer contacto com outros planetas",en:"Use the lab to make contact with other planets"},next:"space_end_seeds"}]},{id:"space_radio",emoji:"📡",text:{pt:'Você envia uma mensagem simpática: "Olá, viemos em paz!" Uns segundos depois, recebe uma resposta com música! É uma melodia linda de um ser chamado Cosmo que mora em ambos os mundos e está muito curioso sobre a Terra.',en:'You send a friendly message: "Hello, we come in peace!" A few seconds later you receive a reply with music! It is a beautiful melody from a being called Cosmo who lives in both worlds and is very curious about Earth.'},choices:[{label:{pt:"Trocar músicas e histórias com Cosmo",en:"Exchange music and stories with Cosmo"},next:"space_end_music"},{label:{pt:"Convidar Cosmo a visitar a Terra",en:"Invite Cosmo to visit Earth"},next:"space_end_friendship"}]},{id:"space_end_exploration",emoji:"🗺️",text:{pt:"Com os mapas incríveis que encontrou, você se torna o maior explorador espacial de todos os tempos! A sua nave visita centenas de planetas novos e cada um tem maravilhas nunca vistas. Você escreve um livro que todas as crianças da galáxia lêem!",en:"With the incredible maps you found, you become the greatest space explorer of all time! Your ship visits hundreds of new planets and each one has wonders never seen before. You write a book that every child in the galaxy reads!"},isEnding:!0,endingType:"good"},{id:"space_end_friendship",emoji:"🌈",text:{pt:"Você faz os melhores amigos do universo: os Puffs Bloop, Fleep e Zoop, o robô R-7 e o misterioso Cosmo! Eles visitam a Terra e ficam encantados com o planeta azul. Vocês criam uma aliança galáctica de amizade e aventuras!",en:"You make the best friends in the universe: the Puffs Bloop, Fleep and Zoop, the robot R-7, and the mysterious Cosmo! They visit Earth and are enchanted by the blue planet. Together you create a galactic alliance of friendship and adventures!"},isEnding:!0,endingType:"good"},{id:"space_end_music",emoji:"🎵",text:{pt:"Você traz para a Terra a música mais bonita do universo. Quando ela toca, as pessoas ficam em paz e felizes. Cientistas descobrem que a melodia contém a linguagem universal que todos os seres do cosmos entendem. Você mudou o mundo com música!",en:"You bring to Earth the most beautiful music in the universe. When it plays, people feel peaceful and happy. Scientists discover the melody contains the universal language that all beings in the cosmos understand. You changed the world with music!"},isEnding:!0,endingType:"neutral"},{id:"space_end_seeds",emoji:"🌱",text:{pt:"A semente especial dos Puffs cresce em todos os planetas! Em pouco tempo, cada mundo tem uma floresta brilhante e musical. Os Puffs te nomeiam Guardião das Sementes do Universo. É uma responsabilidade enorme, mas você está pronto!",en:"The Puffs' special seed grows on every planet! Soon, every world has a glowing, musical forest. The Puffs name you Guardian of the Universe's Seeds. It is an enormous responsibility, but you are ready!"},isEnding:!0,endingType:"neutral"}]},{id:"island",emoji:"🌊",title:{pt:"A Ilha do Tesouro",en:"Treasure Island"},description:{pt:"Segue um mapa antigo até uma ilha misteriosa e descobre o que o tesouro realmente é.",en:"Follow an old map to a mysterious island and discover what the treasure really is."},color:"#2d7a4f",totalEndings:3,scenes:[{id:"island_start",emoji:"🗺️",text:{pt:"Você encontrou um velho mapa numa garrafa à beira-mar! O mapa mostra uma ilha misteriosa com um X marcando onde está escondido um tesouro. Você tem um barco pequeno e dois amigos prontos para a aventura!",en:"You found an old map in a bottle by the sea! The map shows a mysterious island with an X marking where a treasure is hidden. You have a small boat and two friends ready for adventure!"},choices:[{label:{pt:"Seguir o mapa directamente até ao X",en:"Follow the map straight to the X"},next:"island_direct"},{label:{pt:"Explorar a ilha primeiro para conhecê-la",en:"Explore the island first to get to know it"},next:"island_explore"},{label:{pt:"Perguntar a um pescador local sobre a ilha",en:"Ask a local fisherman about the island"},next:"island_fisherman"}]},{id:"island_direct",emoji:"🧭",text:{pt:"Você segue o mapa com cuidado pela floresta tropical. Os sons dos pássaros coloridos enchem o ar. De repente, o caminho divide-se em dois: um desce para a praia, o outro sobe pela montanha.",en:"You follow the map carefully through the tropical forest. The sounds of colourful birds fill the air. Suddenly the path splits in two: one goes down to the beach, the other climbs up the mountain."},choices:[{label:{pt:"Ir pela praia",en:"Go along the beach"},next:"island_beach"},{label:{pt:"Subir a montanha",en:"Climb the mountain"},next:"island_mountain"}]},{id:"island_explore",emoji:"🌴",text:{pt:'Explorando a ilha, você encontra uma aldeia escondida na floresta! Os moradores são crianças e adultos que vivem ali há gerações. A anciã da aldeia olha para o seu mapa e diz: "Conheço este tesouro. É especial!"',en:'Exploring the island, you find a hidden village in the forest! The residents are children and adults who have lived there for generations. The village elder looks at your map and says: "I know this treasure. It is special!"'},choices:[{label:{pt:"Ouvir o que a anciã sabe sobre o tesouro",en:"Listen to what the elder knows about the treasure"},next:"island_elder"},{label:{pt:"Convidar a aldeia para ir contigo",en:"Invite the village to come with you"},next:"island_together"}]},{id:"island_fisherman",emoji:"🎣",text:{pt:'O pescador olha para o mapa e arregalha os olhos. "Ah! Esse é o Mapa do Capitão Estrela! Ele escondeu o tesouro aqui há 300 anos. Mas cuidado com a Lagoa dos Peixes Voadores — eles adoram brincar com viajantes!"',en:'The fisherman looks at the map and his eyes go wide. "Ah! That is Captain Star\'s Map! He hid the treasure here 300 years ago. But beware of the Flying Fish Lagoon — they love to play tricks on travellers!"'},choices:[{label:{pt:"Ir ver a lagoa dos peixes voadores",en:"Go see the flying fish lagoon"},next:"island_lagoon"},{label:{pt:"Pedir ao pescador para guiar você até ao X",en:"Ask the fisherman to guide you to the X"},next:"island_direct"}]},{id:"island_beach",emoji:"🐚",text:{pt:'A praia é lindíssima com areia dourada e conchas coloridas. Uma tartaruga gigante dorme na areia. Quando você passa, ela acorda e fala: "Boa tarde! Procura o tesouro, não é? Eu sei onde fica!"',en:'The beach is beautiful with golden sand and colourful shells. A giant turtle is sleeping on the sand. When you walk past, it wakes up and says: "Good afternoon! You are looking for the treasure, aren\'t you? I know where it is!"'},choices:[{label:{pt:"Seguir a tartaruga",en:"Follow the turtle"},next:"island_turtle"},{label:{pt:"Agradecer mas continuar pelo mapa",en:"Thank the turtle but continue with the map"},next:"island_mountain"}]},{id:"island_mountain",emoji:"⛰️",text:{pt:"No topo da montanha, há uma vista incrível de toda a ilha! E você vê claramente onde está o X do mapa — uma gruta escondida atrás de uma cascata. Mas para chegar lá, precisa de atravessar uma ponte de lianas sobre um rio.",en:"At the top of the mountain, there is an incredible view of the whole island! And you can clearly see where the X on the map is — a cave hidden behind a waterfall. But to get there, you need to cross a vine bridge over a river."},choices:[{label:{pt:"Atravessar a ponte de lianas",en:"Cross the vine bridge"},next:"island_cave"},{label:{pt:"Descer pela cascata com uma corda",en:"Climb down by the waterfall with a rope"},next:"island_waterfall"}]},{id:"island_elder",emoji:"👵",text:{pt:'A anciã conta que o tesouro do Capitão Estrela não é ouro — é um cofre de sementes raras de plantas que curam qualquer doença! "Foram roubadas do nosso povo há 300 anos. Se as trouver de volta, a nossa aldeia florescerá de novo!"',en:'The elder explains that Captain Star\'s treasure is not gold — it is a chest of rare seeds from plants that heal any illness! "They were stolen from our people 300 years ago. If you bring them back, our village will flourish again!"'},choices:[{label:{pt:"Prometer devolver o tesouro ao povo da ilha",en:"Promise to return the treasure to the island people"},next:"island_together"},{label:{pt:"Ir buscar o tesouro e partilhá-lo",en:"Go get the treasure and share it"},next:"island_cave"}]},{id:"island_together",emoji:"👫",text:{pt:"Toda a aldeia vai convosco! É uma festa animada a caminhar pela floresta. As crianças cantam, os adultos contam histórias antigas. Juntos, encontram o caminho até à gruta mais depressa e sem nenhum perigo.",en:"The whole village comes with you! It is a joyful procession through the forest. The children sing, the adults tell old stories. Together, you find the path to the cave faster and without any danger."},choices:[{label:{pt:"Abrir a gruta juntos",en:"Open the cave together"},next:"island_end_village"},{label:{pt:"Deixar a anciã entrar primeiro",en:"Let the elder enter first"},next:"island_end_village"}]},{id:"island_lagoon",emoji:"🐟",text:{pt:'A Lagoa dos Peixes Voadores é espectacular! Os peixes saltam para fora de água e voam pelo ar. Um peixe dourado pousa no seu ombro e cochicha: "Sigo o X do teu mapa — sigo eu!" e voa em frente a guiar o caminho.',en:'The Flying Fish Lagoon is spectacular! The fish leap out of the water and fly through the air. A golden fish lands on your shoulder and whispers: "I follow your map\'s X — I follow! Follow me!" and flies ahead to guide the way.'},choices:[{label:{pt:"Seguir o peixe dourado",en:"Follow the golden fish"},next:"island_cave"},{label:{pt:"Nadar com os peixes voadores primeiro",en:"Swim with the flying fish first"},next:"island_waterfall"}]},{id:"island_turtle",emoji:"🐢",text:{pt:'A tartaruga leva você por um caminho secreto pela floresta que nenhum mapa mostra. Em poucos minutos chegam a uma gruta escondida. "Eu guardo este segredo há 100 anos," diz ela orgulhosa.',en:'The turtle leads you along a secret path through the forest that no map shows. In just a few minutes you arrive at a hidden cave. "I have kept this secret for 100 years," she says proudly.'},choices:[{label:{pt:"Entrar na gruta",en:"Enter the cave"},next:"island_cave"},{label:{pt:"Agradecer e dar à tartaruga a sua melhor concha",en:"Thank the turtle and give her your best shell"},next:"island_end_friends"}]},{id:"island_cave",emoji:"🌊",text:{pt:"A gruta atrás da cascata é mágica! As paredes brilham com pedras coloridas. No centro, sobre um pedestal de coral, repousa o cofre do Capitão Estrela. Está coberto de conchas e estrelas-do-mar adormecidas.",en:"The cave behind the waterfall is magical! The walls shimmer with colourful stones. In the centre, on a coral pedestal, rests Captain Star's chest. It is covered in shells and sleeping starfish."},choices:[{label:{pt:"Abrir o cofre",en:"Open the chest"},next:"island_end_treasure"},{label:{pt:"Ler a inscrição gravada no cofre primeiro",en:"Read the inscription carved on the chest first"},next:"island_end_village"}]},{id:"island_waterfall",emoji:"💧",text:{pt:"A cascata forma uma piscina natural linda e fresca. Você nada até ao fundo e descobre um túnel subaquático que leva directamente para dentro da gruta do tesouro! É o atalho secreto que o Capitão Estrela usava.",en:"The waterfall forms a beautiful cool natural pool. You swim to the bottom and discover an underwater tunnel leading straight into the treasure cave! It is the secret shortcut that Captain Star used."},choices:[{label:{pt:"Atravessar o túnel subaquático",en:"Swim through the underwater tunnel"},next:"island_end_treasure"},{label:{pt:"Voltar e partilhar a descoberta com a aldeia",en:"Go back and share the discovery with the village"},next:"island_end_village"}]},{id:"island_end_treasure",emoji:"💰",text:{pt:"O cofre está cheio de moedas douradas, joias brilhantes e mapas de ilhas secretas ao redor do mundo! Você decide partilhar o tesouro com a aldeia da ilha e com as famílias dos pescadores. Toda a gente fica feliz e você é declarado Herói da Ilha!",en:"The chest is full of gold coins, shining jewels and maps of secret islands around the world! You decide to share the treasure with the island village and the fishermen's families. Everyone is happy and you are declared Hero of the Island!"},isEnding:!0,endingType:"good"},{id:"island_end_village",emoji:"🌺",text:{pt:"O cofre continha as sementes mágicas que pertenciam ao povo da ilha! Ao plantá-las, a floresta começa a florescer com cores que nunca tinham visto. A aldeia organiza uma festa enorme em sua honra e você é convidado a ficar para sempre!",en:"The chest contained the magic seeds that belonged to the island people! When planted, the forest begins to bloom with colours never seen before. The village throws a huge party in your honour and you are invited to stay forever!"},isEnding:!0,endingType:"good"},{id:"island_end_friends",emoji:"🐠",text:{pt:"A tartaruga, os peixes voadores e o povo da ilha tornam-se os seus melhores amigos. Você volta a visitar a ilha todos os verões e cada vez encontra novos segredos escondidos. A ilha é um lugar mágico que só os corações bons conseguem encontrar.",en:"The turtle, the flying fish and the island people become your best friends. You visit the island every summer and each time you find new hidden secrets. The island is a magical place that only kind hearts can find."},isEnding:!0,endingType:"neutral"}]}],p=n.keyframes`
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
`,k=r.default.p`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin-bottom: ${i.w4.spacing.xl};
`,j=r.default.button`
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
`,T=r.default.p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  margin: 0;
  line-height: ${i.w4.typography.lineHeightBase};
`,M=r.default.div`
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
`,C=r.default.div`
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
`,B=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  width: 100%;
`,_=r.default.button`
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
`,E=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  margin-bottom: ${i.w4.spacing.xl};
  width: 100%;
`,I=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,P=r.default.span`
  color: ${i.w4.colors.accent};
  font-weight: 600;
`,F=r.default.div`
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
`,D=r.default.div`
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
`,K=["#58a6ff","#3fb950","#f78166","#ffa657","#d2a8ff","#79c0ff"];function Q(){const e=Array.from({length:40},(e,o)=>({id:o,left:100*Math.random(),delay:1.2*Math.random(),color:K[Math.floor(Math.random()*K.length)]??"#58a6ff",size:6+Math.floor(10*Math.random())}));return(0,s.jsx)(s.Fragment,{children:e.map(e=>(0,s.jsx)(U,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.id))})}const Z=["A","B","C","D"];function ee({lang:e,onBack:o}){const[t,r]=(0,a.useState)({phase:"select"}),[n,i]=(0,a.useState)(c),p=(0,a.useRef)(null),[u,m]=(0,a.useState)(!1),[f,g]=(0,a.useState)(0),N=(0,a.useRef)(null),[U,K]=(0,a.useState)(0),ee="pt"===e?"pt":"en",oe=(0,a.useCallback)(e=>{m(!1),g(e=>e+1),N.current&&clearTimeout(N.current),N.current=setTimeout(()=>{m(!0)},600)},[]),te=(0,a.useRef)(null),ae=(0,a.useRef)(!1),re=(0,a.useCallback)(e=>{te.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),ne=(0,a.useCallback)(e=>o=>{if(!te.current)return;const t=Math.abs(o.changedTouches[0].clientX-te.current.x),a=Math.abs(o.changedTouches[0].clientY-te.current.y);te.current=null,t>8||a>8||(ae.current=!0,e())},[]),ie=(0,a.useCallback)(e=>()=>{ae.current?ae.current=!1:e()},[]),se=(0,a.useCallback)((e,o)=>{const t=d.find(o=>o.id===e);return t?.scenes.find(e=>e.id===o)},[]),le=(0,a.useCallback)((o,a)=>{const s=se(o,a);if(s)if(s.isEnding){const t=n[o]??[],c=!t.includes(a),d={...n,[o]:c?[...t,a]:t};c&&(i(d),function(e){try{localStorage.setItem(l,JSON.stringify(e))}catch{}}(d)),r({phase:"ending",storyId:o,sceneId:a,isNew:c}),oe(s.text["pt"===e?"pt":"en"])}else K(e=>e+1),"scene"===t.phase?(r({...t,exiting:!0}),p.current=setTimeout(()=>{r({phase:"scene",storyId:o,sceneId:a,exiting:!1}),oe(s.text["pt"===e?"pt":"en"])},220)):(r({phase:"scene",storyId:o,sceneId:a,exiting:!1}),oe(s.text["pt"===e?"pt":"en"]))},[se,t,n,oe,e]),ce=(0,a.useCallback)(o=>{const t=d.find(e=>e.id===o);t&&t.scenes[0]&&(K(0),r({phase:"scene",storyId:o,sceneId:t.scenes[0].id,exiting:!1}),oe(t.scenes[0].text["pt"===e?"pt":"en"]))},[oe,e]),de=(0,a.useCallback)(()=>{p.current&&clearTimeout(p.current),N.current&&clearTimeout(N.current),r({phase:"select"}),K(0),m(!1)},[]);(0,a.useEffect)(()=>()=>{p.current&&clearTimeout(p.current),N.current&&clearTimeout(N.current)},[]);const pe="pt"===ee?"Aventura de Texto":"Text Adventure";if("select"===t.phase){const e="pt"===ee?"Escolhe a tua Aventura":"Choose Your Adventure",o="pt"===ee?"Selecciona uma história e toma decisões que moldam o destino!":"Select a story and make choices that shape the outcome!";return(0,s.jsxs)(h,{children:[(0,s.jsx)(x,{children:(0,s.jsx)(y,{children:pe})}),(0,s.jsxs)(w,{children:[(0,s.jsx)($,{children:e}),(0,s.jsx)(k,{children:o}),(0,s.jsx)(v,{children:d.map(e=>{const o=(n[e.id]??[]).length,t=o>0,a="pt"===ee?`${o}/${e.totalEndings} finais descobertos`:`${o}/${e.totalEndings} endings found`,r=()=>ce(e.id);return(0,s.jsxs)(j,{accentColor:e.color,onTouchStart:re,onTouchEnd:ne(r),onClick:ie(r),children:[(0,s.jsx)(z,{children:e.emoji}),(0,s.jsx)(S,{children:e.title[ee]}),(0,s.jsx)(T,{children:e.description[ee]}),(0,s.jsxs)(M,{hasProgress:t,children:[t?"⭐ ":"○ ",a]})]},e.id)})})]})]})}if("scene"===t.phase){const{storyId:e,sceneId:o,exiting:a}=t,r=se(e,o),n=d.find(o=>o.id===e);if(!r||!n)return(0,s.jsx)(h,{children:(0,s.jsx)(w,{children:"pt"===ee?"Cena não encontrada.":"Scene not found."})});const i="pt"===ee?"← Histórias":"← Stories",l=8,c=Math.min(U+1,l);return(0,s.jsxs)(h,{accentColor:n.color,children:[(0,s.jsxs)(x,{children:[(0,s.jsx)(b,{onTouchStart:re,onTouchEnd:ne(de),onClick:ie(de),children:i}),(0,s.jsx)(y,{children:n.title[ee]})]}),(0,s.jsx)(w,{children:(0,s.jsxs)(C,{exiting:a,children:[(0,s.jsxs)(E,{children:[(0,s.jsxs)(I,{children:[n.emoji," ",(0,s.jsx)(P,{children:n.title[ee]})]}),(0,s.jsx)(F,{children:Array.from({length:l},(e,o)=>(0,s.jsx)(L,{filled:o<c},o))})]}),(0,s.jsx)(A,{children:r.emoji},o),(0,s.jsx)(R,{children:r.text[ee]},f),u&&r.choices&&(0,s.jsx)(B,{children:r.choices.map((o,t)=>{const a=()=>le(e,o.next);return(0,s.jsxs)(_,{index:t,onTouchStart:re,onTouchEnd:ne(a),onClick:ie(a),children:[(0,s.jsx)(O,{children:Z[t]??String(t+1)}),o.label[ee]]},t)})})]})})]})}if("ending"===t.phase){const{storyId:e,sceneId:o,isNew:a}=t,r=se(e,o),i=d.find(o=>o.id===e);if(!r||!i)return(0,s.jsx)(h,{children:(0,s.jsx)(w,{children:"pt"===ee?"Fim não encontrado.":"Ending not found."})});const l=r.endingType??"neutral",c="good"===l,p=(n[e]??[]).length,m=c?"pt"===ee?"🎉 Final Feliz!":"🎉 Happy Ending!":"pt"===ee?"✨ Final Alternativo":"✨ Alternative Ending",g=c?"pt"===ee?"Que aventura incrível!":"What an incredible adventure!":"pt"===ee?"Uma história para recordar.":"A story to remember.",v="pt"===ee?"🌟 Novo final descoberto!":"🌟 New ending discovered!",$="pt"===ee?`${p} de ${i.totalEndings} finais encontrados`:`${p} of ${i.totalEndings} endings found`,k="pt"===ee?"Jogar novamente":"Play again",j="pt"===ee?"Escolher outra história":"Choose another story",z=()=>ce(e),S=()=>de();return(0,s.jsxs)(h,{accentColor:i.color,children:[c&&(0,s.jsx)(Q,{}),(0,s.jsxs)(x,{children:[(0,s.jsx)(b,{onTouchStart:re,onTouchEnd:ne(de),onClick:ie(de),children:"pt"===ee?"← Histórias":"← Stories"}),(0,s.jsx)(y,{children:i.title[ee]})]}),(0,s.jsx)(w,{children:(0,s.jsxs)(D,{children:[a&&(0,s.jsx)(X,{children:v}),(0,s.jsx)(H,{children:r.emoji}),(0,s.jsx)(G,{endingType:l,children:m}),(0,s.jsx)(Y,{children:g}),(0,s.jsx)(q,{children:r.text[ee]},f),u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(M,{hasProgress:p>0,style:{marginBottom:24},children:[p>0?"⭐ ":"○ ",$]}),(0,s.jsxs)(V,{children:[(0,s.jsx)(W,{onTouchStart:re,onTouchEnd:ne(z),onClick:ie(z),children:k}),(0,s.jsx)(J,{onTouchStart:re,onTouchEnd:ne(S),onClick:ie(S),children:j})]})]})]})})]})}return null}},273(e,o,t){t.d(o,{t:()=>K});var a=t(7359),r=t(3233),n=t(7207),i=t(6879),s=t(1364),l=t(5723);const c=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function d(e){for(const o of c){const[t,a,r]=o;if(e[t]&&e[t]===e[a]&&e[t]===e[r])return{winner:e[t],line:o}}return{winner:null,line:null}}function p(e){return e.reduce((e,o,t)=>null===o?[...e,t]:e,[])}function u(e,o){const{winner:t}=d(e);if("O"===t)return 10;if("X"===t)return-10;const a=p(e);if(0===a.length)return 0;if(o){let o=-1/0;for(const t of a)e[t]="O",o=Math.max(o,u(e,!1)),e[t]=null;return o}{let o=1/0;for(const t of a)e[t]="X",o=Math.min(o,u(e,!0)),e[t]=null;return o}}const m={title:{pt:"Jogo do Galo",en:"Tic Tac Toe"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},thinking:{pt:"A pensar...",en:"Thinking..."},youWin:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},youLose:{pt:"😅 Perdeste!",en:"😅 You lost!"},draw:{pt:"🤝 Empate!",en:"🤝 Draw!"},playAgain:{pt:"Jogar outra vez",en:"Play again"},back:{pt:"← Voltar",en:"← Back"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},wins:{pt:"Vitórias",en:"Wins"},losses:{pt:"Derrotas",en:"Losses"},draws:{pt:"Empates",en:"Draws"},you:{pt:"Tu",en:"You"},robot:{pt:"Robot",en:"Robot"},vsRobot:{pt:"vs Robot",en:"vs Robot"},vsFriend:{pt:"vs Amigo",en:"vs Friend"},player1:{pt:"Jogador 1",en:"Player 1"},player2:{pt:"Jogador 2",en:"Player 2"},player1Turn:{pt:"Vez do Jogador 1!",en:"Player 1's turn!"},player2Turn:{pt:"Vez do Jogador 2!",en:"Player 2's turn!"},player1Wins:{pt:"🎉 Jogador 1 ganhou!",en:"🎉 Player 1 wins!"},player2Wins:{pt:"🎉 Jogador 2 ganhou!",en:"🎉 Player 2 wins!"},p1:{pt:"J1",en:"P1"},p2:{pt:"J2",en:"P2"},vsOnline:{pt:"Online",en:"Online"},opponentTurn:{pt:"Vez do adversário!",en:"Opponent's turn!"},youWinOnline:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},opponentWins:{pt:"😅 O adversário ganhou!",en:"😅 Opponent wins!"},opponentLeft:{pt:"O adversário saiu.",en:"Opponent left."},rematchReq:{pt:"Revanche pedida…",en:"Rematch requested…"},rematch:{pt:"Revanche",en:"Rematch"},waitingRematch:{pt:"À espera da resposta…",en:"Waiting for response…"}},f="⭐",g="🌙",h="atlantis-tictactoe-score";function x(){try{const e=localStorage.getItem(h);if(e)return JSON.parse(e)}catch{}return{wins:0,losses:0,draws:0}}const b=n.keyframes`
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
`,k=n.keyframes`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.4); }
  70%  { transform: scale(0.9); }
  100% { transform: scale(1); }
`,j=n.keyframes`
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
`,T=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  animation: ${b} 0.3s ease;
`,M=r.default.h1`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`,C=r.default.div`
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
  background: ${({active:e,color:o})=>e?o+"20":i.w4.colors.surface};
  color: ${({active:e,color:o})=>e?o:i.w4.colors.mainTextMuted};
  border: 1.5px solid ${({active:e,color:o})=>e?o+"60":i.w4.colors.border};
  box-shadow: ${({active:e,color:o})=>e?`0 0 12px ${o}20`:"none"};

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
`,B=r.default.button`
  padding: 8px 16px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: ${({active:e,color:o})=>e?o+"22":"transparent"};
  color: ${({active:e,color:o})=>e?o:i.w4.colors.mainTextMuted};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}11;
  }
`,_=r.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 20px;
  animation: ${({variant:e})=>"win"===e?v:b} ${({variant:e})=>"win"===e?"0.6s ease-in-out infinite":"0.3s ease"};
  background: ${({variant:e})=>"win"===e?"rgba(63, 185, 80, 0.15)":"lose"===e?"rgba(249, 117, 131, 0.15)":"draw"===e?"rgba(210, 169, 34, 0.15)":"rgba(88, 166, 255, 0.1)"};
  color: ${({variant:e})=>"win"===e?"#3fb950":"lose"===e?"#f97583":"draw"===e?"#d2a922":i.w4.colors.accent};
`,E=r.default.div`
  position: relative;
`,I=r.default.div`
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
`,F=r.default.span`
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
`,D=r.default.span`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${({color:e})=>e};
  font-variant-numeric: tabular-nums;
  animation: ${({pop:e})=>e?k:"none"} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
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
  animation: ${j} 1.2s ease-in-out ${({delay:e})=>e}s infinite;
`,U=["#f97583","#58a6ff","#3fb950","#d2a922","#d2a8ff","#79c0ff"];function K({lang:e,onBack:o,canOnline:t}){const[r,n]=(0,a.useState)(Array(9).fill(null)),[c,b]=(0,a.useState)(null),[y,w]=(0,a.useState)(!0),[v,$]=(0,a.useState)("medium"),[k,j]=(0,a.useState)("bot"),[z,K]=(0,a.useState)(x),[Q,Z]=(0,a.useState)(!1),[ee,oe]=(0,a.useState)(null),[te]=(0,a.useState)(()=>(0,s.zE)()||("pt"===e?"Jogador":"Player")),[ae,re]=(0,a.useState)("none"),[ne,ie]=(0,a.useState)(!1),se=(0,a.useRef)(r);se.current=r;const le=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":de.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),de.current.sendEvent({type:"host-ack",name:te,playerId:de.current.room?.playerId??"",players:de.current.room?.players??[]});break;case"host-ack":de.current.setConnected(e.name),e.players&&de.current.setPlayers([...e.players,{id:de.current.room?.playerId??"",name:te,isHost:!1}]);break;case"game-state":{const o=e.payload;n(o.board),b(o.lastPlaced),w("host"===de.current.room?.role?o.isHostTurn:!o.isHostTurn);break}case"game-over":Z(!0);break;case"rematch-request":re("received");break;case"rematch-accepted":n(Array(9).fill(null)),b(null),w("host"===de.current.room?.role),Z(!1),re("none");break;case"player-left":ie(!0),Z(!0)}},[te]),ce=(0,s.Ky)({gameId:"tictactoe",playerName:te,onEvent:le}),de=(0,a.useRef)(ce);de.current=ce;const pe=(0,s.zj)({gameId:"tictactoe",enabled:"online"===k}),{winner:ue,line:me}=d(r),fe=!ue&&0===p(r).length,ge=(0,a.useCallback)(()=>{n(Array(9).fill(null)),b(null),w("online"!==k||"host"===ce.room?.role),Z(!1),re("none"),ie(!1)},[k,ce.room?.role]);(0,a.useEffect)(()=>{Q||!ue&&!fe||(Z(!0),"bot"!==k)||(oe("X"===ue?"wins":"O"===ue?"losses":"draws"),setTimeout(()=>oe(null),500),K(e=>{const o={...e};return"X"===ue?o.wins++:"O"===ue?o.losses++:o.draws++,function(e){localStorage.setItem(h,JSON.stringify(e))}(o),o}))},[ue,fe,Q,k]),(0,a.useEffect)(()=>{if("bot"!==k||y||Q||ue||fe)return;const e=setTimeout(()=>{const e=se.current,o=function(e,o){const t=p(e);if(0===t.length)return-1;if("easy"===o){if(Math.random()<.7)return t[Math.floor(Math.random()*t.length)]}else if("medium"===o&&Math.random()<.3)return t[Math.floor(Math.random()*t.length)];let a=-1/0,r=t[0];for(const o of t){e[o]="O";const t=u(e,!1);e[o]=null,t>a&&(a=t,r=o)}return r}([...e],v);if(o>=0){const t=[...e];t[o]="O",n(t),b(o),w(!0)}},500);return()=>clearTimeout(e)},[y,Q,ue,fe,v,k]);const he=e=>{$(e),ge()},xe=e=>{"online"===k&&ce.room&&ce.leaveRoom(),j(e),ie(!1),re("none"),ge()},be=()=>{"received"===ae?(n(Array(9).fill(null)),b(null),w("host"===ce.room?.role),Z(!1),re("none"),ce.sendEvent({type:"rematch-accepted"})):(re("sent"),ce.sendEvent({type:"rematch-request"}))},ye=o=>m[o]?.[e]??m[o]?.en??o;let we,ve;if("online"===k)if(ne)we="lose",ve=ye("opponentLeft");else if(ue){const e="X"===ue&&"host"===ce.room?.role||"O"===ue&&"guest"===ce.room?.role;we=e?"win":"lose",ve=ye(e?"youWinOnline":"opponentWins")}else fe?(we="draw",ve=ye("draw")):(we="turn",ve=ye(y?"yourTurn":"opponentTurn"));else"2p"===k?"X"===ue?(we="win",ve=ye("player1Wins")):"O"===ue?(we="win",ve=ye("player2Wins")):fe?(we="draw",ve=ye("draw")):(we="turn",ve=ye(y?"player1Turn":"player2Turn")):"X"===ue?(we="win",ve=ye("youWin")):"O"===ue?(we="lose",ve=ye("youLose")):fe?(we="draw",ve=ye("draw")):(we="turn",ve=ye(y?"yourTurn":"thinking"));const $e=new Set(me??[]),ke="bot"===k?"X"===ue:!!ue,je="bot"===k&&!y&&!Q,ze=(0,a.useMemo)(()=>ke?Array.from({length:12},(e,o)=>({left:10+80*Math.random(),delay:.5*Math.random(),color:U[o%U.length]})):[],[ke]),Se=(0,a.useMemo)(()=>{if(!me)return null;const e=Math.min(120,Math.max(80,.2*window.innerWidth)),o=o=>{const t=o%3,a=Math.floor(o/3);return{x:8+t*(e+8)+e/2,y:8+a*(e+8)+e/2}},t=o(me[0]),a=o(me[2]),r=a.x-t.x,n=a.y-t.y,i=Math.sqrt(r*r+n*n),s=Math.atan2(n,r)*(180/Math.PI);return{left:`${t.x}px`,top:t.y-3+"px",width:`${i}px`,transform:`rotate(${s}deg)`}},[me]),Te="bot"===k?"X"===ue?"#3fb950":"#f97583":"X"===ue?"#58a6ff":"#d2a8ff",Me=e=>e?"online"===k?"X"===e?f:g:"X"===e?f:"2p"===k?g:"🤖":null;return(0,l.jsxs)(S,{children:[(0,l.jsxs)(T,{children:[(0,l.jsxs)(M,{children:["❌ ⭕ ",ye("title")]}),(0,l.jsxs)(C,{children:[(0,l.jsxs)(A,{active:"bot"===k,color:i.w4.colors.accent,onClick:()=>xe("bot"),children:["🤖 ",ye("vsRobot")]}),(0,l.jsxs)(A,{active:"2p"===k,color:"#d2a8ff",onClick:()=>xe("2p"),children:["👫 ",ye("vsFriend")]}),t&&(0,l.jsxs)(A,{active:"online"===k,color:"#3fb950",onClick:()=>xe("online"),children:["🌐 ",ye("vsOnline")]})]}),"bot"===k&&(0,l.jsxs)(R,{children:[(0,l.jsx)(B,{active:"easy"===v,color:"#3fb950",onClick:()=>he("easy"),children:ye("easy")}),(0,l.jsx)(B,{active:"medium"===v,color:"#d2a922",onClick:()=>he("medium"),children:ye("medium")}),(0,l.jsx)(B,{active:"hard"===v,color:"#f97583",onClick:()=>he("hard"),children:ye("hard")})]})]}),"online"===k&&!ce.room?.connected&&(0,l.jsx)(s.XB,{lang:e,room:ce.room,error:ce.error,availableRooms:pe.rooms,onCreateRoom:()=>{const{code:e,roomName:o}=ce.createRoom();pe.publishRoom({code:e,roomName:o,hostName:te,playerCount:1})},onJoinRoom:e=>{ce.joinRoom(e)},onLeaveRoom:()=>{pe.unpublishRoom(),ce.leaveRoom(),ie(!1)}}),("online"!==k||ce.room?.connected)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Y,{children:"online"===k?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(q,{children:["host"===ce.room?.role?f:g," = ",ye("you")," (",ce.room?.playerName,")"]}),(0,l.jsxs)(q,{children:["host"===ce.room?.role?g:f," = ",ce.room?.opponentName??"?"]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(q,{children:[f," = ",ye("2p"===k?"player1":"you")]}),(0,l.jsxs)(q,{children:["2p"===k?g:"🤖"," = ",ye("2p"===k?"player2":"robot")]})]})}),(0,l.jsxs)(_,{variant:we,children:[ve,je&&(0,l.jsxs)(J,{children:[(0,l.jsx)(X,{delay:0}),(0,l.jsx)(X,{delay:.2}),(0,l.jsx)(X,{delay:.4})]})]}),(0,l.jsxs)(E,{children:[ze.map((e,o)=>(0,l.jsx)(V,{left:e.left,delay:e.delay,color:e.color},o)),Se&&(0,l.jsx)(W,{x1:0,y1:0,x2:0,y2:0,color:Te,style:Se}),(0,l.jsx)(I,{children:r.map((e,o)=>(0,l.jsx)(P,{isWinning:$e.has(o),isThinking:je&&!e,disabled:!!e||Q||"bot"===k&&!y||"online"===k&&!y,onClick:()=>(e=>{if(r[e]||Q)return;if("bot"===k&&!y)return;if("online"===k){if(!ce.room?.connected||!y)return;const o="host"===ce.room.role?"X":"O",t=[...r];t[e]=o;const a="host"!==ce.room.role;n(t),b(e),w(!1),ce.sendEvent({type:"game-state",payload:{board:t,isHostTurn:a,lastPlaced:e}});const i=d(t),s=p(t);if(i.winner||0===s.length){Z(!0);const e="X"===i.winner?"host":"O"===i.winner?"guest":"draw";ce.sendEvent({type:"game-over",winner:e})}return}const o=[...r],t=y?"X":"O";o[e]=t,n(o),b(e),w(!y)})(o),"aria-label":`Cell ${Math.floor(o/3)+1},${o%3+1}${e?`: ${e}`:""}`,children:e&&(0,l.jsx)(F,{isNew:o===c,children:Me(e)})},o))})]}),"bot"===k&&(0,l.jsxs)(L,{children:[(0,l.jsxs)(O,{color:"#3fb950",children:[(0,l.jsx)(D,{color:"#3fb950",pop:"wins"===ee,children:z.wins}),(0,l.jsx)(N,{children:ye("wins")})]}),(0,l.jsxs)(O,{color:"#d2a922",children:[(0,l.jsx)(D,{color:"#d2a922",pop:"draws"===ee,children:z.draws}),(0,l.jsx)(N,{children:ye("draws")})]}),(0,l.jsxs)(O,{color:"#f97583",children:[(0,l.jsx)(D,{color:"#f97583",pop:"losses"===ee,children:z.losses}),(0,l.jsx)(N,{children:ye("losses")})]})]}),Q&&"online"!==k&&(0,l.jsx)(H,{children:(0,l.jsx)(G,{variant:"primary",onClick:ge,children:ye("playAgain")})}),Q&&"online"===k&&!ne&&(0,l.jsx)(H,{children:"sent"===ae?(0,l.jsx)(G,{variant:"ghost",children:ye("waitingRematch")}):"received"===ae?(0,l.jsxs)(G,{variant:"primary",onClick:be,children:[ye("rematch")," ✓"]}):(0,l.jsx)(G,{variant:"primary",onClick:be,children:ye("rematch")})}),Q&&"online"===k&&ne&&(0,l.jsx)(H,{children:(0,l.jsx)(G,{variant:"primary",onClick:()=>{ce.leaveRoom(),ge()},children:ye("playAgain")})})]})]})}},3594(e,o,t){t.d(o,{f:()=>Eo});var a=t(7359),r=t(3233),n=t(7207),i=t(9753);const s=[{id:"vogais",title:"Vogais",subtitle:"A · E · I · O · U",icon:"🔤",color:"#a855f7",cards:[{id:"a",letter:"A",emoji:"🐝",word:"Abelha",hint:"Avião · Anel · Arco · Árvore"},{id:"e",letter:"E",emoji:"🐘",word:"Elefante",hint:"Estrela · Escada · Erva · Espada"},{id:"i",letter:"I",emoji:"🏝️",word:"Ilha",hint:"Iglu · Igreja · Íris · Inseto"},{id:"o",letter:"O",emoji:"🐑",word:"Ovelha",hint:"Ovo · Olho · Ouriço · Ouro"},{id:"u",letter:"U",emoji:"🍇",word:"Uva",hint:"Urso · Unhas · Único · Útil"}]},{id:"silabas-b",title:"Letra B",subtitle:"BA · BE · BI · BO · BU",icon:"🅱️",color:"#3b82f6",cards:[{id:"ba",letter:"BA",emoji:"⛵",word:"Barco",hint:"Bala · Bater · Baile · Banana"},{id:"be",letter:"BE",emoji:"👶",word:"Bebé",hint:"Belo · Beber · Berço · Beleza"},{id:"bi",letter:"BI",emoji:"🚲",word:"Bicicleta",hint:"Bicho · Bico · Bingo · Biscoito"},{id:"bo",letter:"BO",emoji:"⚽",word:"Bola",hint:"Boca · Bolo · Bosque · Borboleta"},{id:"bu",letter:"BU",emoji:"🫏",word:"Burro",hint:"Buzina · Bufo · Búzio · Bucha"}]},{id:"silabas-c",title:"Letra C",subtitle:"CA · CE · CI · CO · CU",icon:"🐱",color:"#f97316",cards:[{id:"ca",letter:"CA",emoji:"🏠",word:"Casa",hint:"Cama · Cão · Carro · Caracol"},{id:"ce",letter:"CE",emoji:"🦌",word:"Cervo",hint:"Cedo · Cereja · Cesta · Cebola"},{id:"ci",letter:"CI",emoji:"🦢",word:"Cisne",hint:"Cidade · Cinto · Cinema · Cinco"},{id:"co",letter:"CO",emoji:"🐰",word:"Coelho",hint:"Copo · Corda · Coroa · Comida"},{id:"cu",letter:"CU",emoji:"🩹",word:"Curativo",hint:"Cubo · Cuidado · Curva · Cultura"}]},{id:"silabas-d",title:"Letra D",subtitle:"DA · DE · DI · DO · DU",icon:"🦷",color:"#06b6d4",cards:[{id:"da",letter:"DA",emoji:"💃",word:"Dança",hint:"Data · Dado · Dama · Dama"},{id:"de",letter:"DE",emoji:"🦷",word:"Dente",hint:"Dedo · Descanso · Devagar · Dezembro"},{id:"di",letter:"DI",emoji:"💰",word:"Dinheiro",hint:"Dia · Dinossauro · Direto · Disco"},{id:"do",letter:"DO",emoji:"🤒",word:"Doente",hint:"Doce · Dormir · Dois · Domino"},{id:"du",letter:"DU",emoji:"🚿",word:"Duche",hint:"Duro · Duende · Duna · Duplo"}]},{id:"silabas-f",title:"Letra F",subtitle:"FA · FE · FI · FO · FU",icon:"🌸",color:"#ec4899",cards:[{id:"fa",letter:"FA",emoji:"🗣️",word:"Falar",hint:"Faca · Fada · Família · Farinha"},{id:"fe",letter:"FE",emoji:"😊",word:"Feliz",hint:"Feno · Ferro · Festa · Fevereiro"},{id:"fi",letter:"FI",emoji:"🧵",word:"Fio",hint:"Filho · Figo · Fila · Fim"},{id:"fo",letter:"FO",emoji:"📸",word:"Foto",hint:"Fogo · Folha · Forno · Formiga"},{id:"fu",letter:"FU",emoji:"⽕",word:"Fumo",hint:"Futebol · Furo · Futuro · Fungo"}]},{id:"silabas-g",title:"Letra G",subtitle:"GA · GE · GI · GO · GU",icon:"🐱",color:"#84cc16",cards:[{id:"ga",letter:"GA",emoji:"🐱",word:"Gato",hint:"Galinha · Ganso · Garfo · Gavião"},{id:"ge",letter:"GE",emoji:"🧊",word:"Gelo",hint:"Gente · Gelado · Gengibre · Gesto"},{id:"gi",letter:"GI",emoji:"🌻",word:"Girassol",hint:"Girafa · Ginásio · Gigante · Gira"},{id:"go",letter:"GO",emoji:"💧",word:"Gota",hint:"Gordo · Gorila · Golfe · Governo"},{id:"gu",letter:"GU",emoji:"🌂",word:"Guarda-chuva",hint:"Guitarra · Guloso · Guerra · Guia"}]},{id:"silabas-l",title:"Letra L",subtitle:"LA · LE · LI · LO · LU",icon:"🌙",color:"#8b5cf6",cards:[{id:"la",letter:"LA",emoji:"🏞️",word:"Lago",hint:"Lata · Lavar · Laranja · Lagarto"},{id:"le",letter:"LE",emoji:"🦁",word:"Leão",hint:"Leite · Ler · Lento · Lençol"},{id:"li",letter:"LI",emoji:"📚",word:"Livro",hint:"Lição · Liga · Limão · Lindo"},{id:"lo",letter:"LO",emoji:"🐺",word:"Lobo",hint:"Loja · Logo · Longe · Louça"},{id:"lu",letter:"LU",emoji:"🌙",word:"Lua",hint:"Luva · Luta · Lugar · Lume"}]},{id:"silabas-m",title:"Letra M",subtitle:"MA · ME · MI · MO · MU",icon:"🌊",color:"#10b981",cards:[{id:"ma",letter:"MA",emoji:"🍎",word:"Maçã",hint:"Mala · Mapa · Mago · Macaco"},{id:"me",letter:"ME",emoji:"🍯",word:"Mel",hint:"Mesa · Medo · Meias · Melancia"},{id:"mi",letter:"MI",emoji:"🐭",word:"Rato",hint:"Mina · Mimo · Milho · Miúdo"},{id:"mo",letter:"MO",emoji:"🏍️",word:"Mota",hint:"Mola · Monte · Mochila · Morada"},{id:"mu",letter:"MU",emoji:"🎵",word:"Música",hint:"Muro · Muitos · Mudo · Mundial"}]},{id:"silabas-n",title:"Letra N",subtitle:"NA · NE · NI · NO · NU",icon:"🌙",color:"#6366f1",cards:[{id:"na",letter:"NA",emoji:"🏊",word:"Nadar",hint:"Navio · Nariz · Natal · Natureza"},{id:"ne",letter:"NE",emoji:"❄️",word:"Neve",hint:"Neto · Negro · Negar · Necessário"},{id:"ni",letter:"NI",emoji:"🐦",word:"Ninho",hint:"Ninja · Nitido · Nível · Ninguém"},{id:"no",letter:"NO",emoji:"🌙",word:"Noite",hint:"Nota · Nome · Nobre · Noivo"},{id:"nu",letter:"NU",emoji:"☁️",word:"Nuvem",hint:"Número · Nulo · Nutrição · Nunca"}]},{id:"silabas-p",title:"Letra P",subtitle:"PA · PE · PI · PO · PU",icon:"🦆",color:"#f59e0b",cards:[{id:"pa",letter:"PA",emoji:"🦆",word:"Pato",hint:"Pão · Papa · Palha · Papagaio"},{id:"pe",letter:"PE",emoji:"🐟",word:"Peixe",hint:"Pele · Pena · Pedra · Pensar"},{id:"pi",letter:"PI",emoji:"🎀",word:"Pipa",hint:"Pico · Pingo · Pilha · Pintainho"},{id:"po",letter:"PO",emoji:"🐴",word:"Potro",hint:"Povo · Pote · Pomba · Polvo"},{id:"pu",letter:"PU",emoji:"🐾",word:"Pulga",hint:"Pulo · Pura · Pudim · Pulseira"}]},{id:"silabas-r",title:"Letra R",subtitle:"RA · RE · RI · RO · RU",icon:"🌹",color:"#ef4444",cards:[{id:"ra",letter:"RA",emoji:"🐸",word:"Rana",hint:"Rato · Ramo · Rapaz · Rainha"},{id:"re",letter:"RE",emoji:"👑",word:"Rei",hint:"Rede · Relógio · Remédio · Regra"},{id:"ri",letter:"RI",emoji:"😂",word:"Rir",hint:"Rio · Rico · Risco · Ritmo"},{id:"ro",letter:"RO",emoji:"🌹",word:"Rosa",hint:"Roda · Roupa · Robô · Rochedo"},{id:"ru",letter:"RU",emoji:"🛣️",word:"Rua",hint:"Ruído · Rural · Rumo · Rugido"}]},{id:"silabas-s",title:"Letra S",subtitle:"SA · SE · SI · SO · SU",icon:"☀️",color:"#f43f5e",cards:[{id:"sa",letter:"SA",emoji:"🐸",word:"Sapo",hint:"Saco · Sala · Salto · Sapato"},{id:"se",letter:"SE",emoji:"🌾",word:"Seco",hint:"Sede · Seta · Serra · Setembro"},{id:"si",letter:"SI",emoji:"🔔",word:"Sino",hint:"Sinal · Sítio · Sinto · Silêncio"},{id:"so",letter:"SO",emoji:"☀️",word:"Sol",hint:"Sopa · Sono · Soco · Sonho"},{id:"su",letter:"SU",emoji:"🧃",word:"Sumo",hint:"Sul · Suave · Susto · Subir"}]},{id:"silabas-t",title:"Letra T",subtitle:"TA · TE · TI · TO · TU",icon:"🐯",color:"#0ea5e9",cards:[{id:"ta",letter:"TA",emoji:"🥁",word:"Tambor",hint:"Tapa · Tarde · Tarefa · Tartaruga"},{id:"te",letter:"TE",emoji:"🧸",word:"Teddy",hint:"Tela · Tempo · Telefone · Terra"},{id:"ti",letter:"TI",emoji:"🐯",word:"Tigre",hint:"Tio · Tipo · Título · Tinha"},{id:"to",letter:"TO",emoji:"🍅",word:"Tomate",hint:"Toca · Torta · Touro · Torneira"},{id:"tu",letter:"TU",emoji:"🦈",word:"Tubarão",hint:"Tubo · Tudo · Tulipa · Turbina"}]},{id:"silabas-v",title:"Letra V",subtitle:"VA · VE · VI · VO · VU",icon:"🦋",color:"#d946ef",cards:[{id:"va",letter:"VA",emoji:"🐄",word:"Vaca",hint:"Vale · Varanda · Vassoura · Vampiro"},{id:"ve",letter:"VE",emoji:"🕯️",word:"Vela",hint:"Vento · Verde · Verdade · Veludo"},{id:"vi",letter:"VI",emoji:"🍷",word:"Vinho",hint:"Vida · Vila · Visão · Viagem"},{id:"vo",letter:"VO",emoji:"✈️",word:"Voar",hint:"Voz · Volta · Volume · Voluntário"},{id:"vu",letter:"VU",emoji:"🌋",word:"Vulcão",hint:"Vulnerável · Vulto · Vulgaria"}]},{id:"numeros",title:"Números",subtitle:"UM · DOIS · TRÊS...",icon:"🔢",color:"#f97316",cards:[{id:"um",letter:"UM",emoji:"1️⃣",word:"Um",hint:"Uma · Único · Unidade"},{id:"dois",letter:"DOIS",emoji:"2️⃣",word:"Dois",hint:"Duplo · Segundo · Par"},{id:"tres",letter:"TRÊS",emoji:"3️⃣",word:"Três",hint:"Triplo · Terceiro · Trio"},{id:"quatro",letter:"QUATRO",emoji:"4️⃣",word:"Quatro",hint:"Quádruplo · Quarto · Quadrado"},{id:"cinco",letter:"CINCO",emoji:"5️⃣",word:"Cinco",hint:"Quinteto · Quinto · Pentagon"},{id:"seis",letter:"SEIS",emoji:"6️⃣",word:"Seis",hint:"Sexto · Sexteto · Hexágono"},{id:"sete",letter:"SETE",emoji:"7️⃣",word:"Sete",hint:"Sétimo · Semana · Arco-íris"},{id:"oito",letter:"OITO",emoji:"8️⃣",word:"Oito",hint:"Oitavo · Polvo · Araña"},{id:"nove",letter:"NOVE",emoji:"9️⃣",word:"Nove",hint:"Nono · Novembro · Planeta"},{id:"dez",letter:"DEZ",emoji:"🔟",word:"Dez",hint:"Décimo · Dezembro · Dedos"}]},{id:"cores",title:"Cores",subtitle:"VERMELHO · AZUL · VERDE...",icon:"🎨",color:"#a855f7",cards:[{id:"vermelho",letter:"VERMELHO",emoji:"🔴",word:"Vermelho",hint:"Rosa · Tomate · Maçã · Coração"},{id:"azul",letter:"AZUL",emoji:"🔵",word:"Azul",hint:"Mar · Céu · Mirtilo · Baleia"},{id:"verde",letter:"VERDE",emoji:"🟢",word:"Verde",hint:"Erva · Folha · Sapo · Maçã"},{id:"amarelo",letter:"AMARELO",emoji:"🟡",word:"Amarelo",hint:"Sol · Banana · Patinho · Girassol"},{id:"laranja",letter:"LARANJA",emoji:"🟠",word:"Laranja",hint:"Fruta · Cenoura · Tigre · Outono"},{id:"roxo",letter:"ROXO",emoji:"🟣",word:"Roxo",hint:"Uva · Lavanda · Beringela · Violeta"},{id:"rosa",letter:"ROSA",emoji:"🌸",word:"Rosa",hint:"Flor · Porco · Flamingo · Bubble-gum"},{id:"branco",letter:"BRANCO",emoji:"⬜",word:"Branco",hint:"Neve · Leite · Nuvem · Algodão"},{id:"preto",letter:"PRETO",emoji:"⬛",word:"Preto",hint:"Noite · Gato · Pneu · Carvão"},{id:"castanho",letter:"CASTANHO",emoji:"🟫",word:"Castanho",hint:"Terra · Madeira · Chocolate · Urso"}]},{id:"animais",title:"Animais",subtitle:"Todos os animais",icon:"🦁",color:"#22c55e",cards:[{id:"cao",letter:"CÃO",emoji:"🐕",word:"Cão",hint:"Canino · Cachorro · Companheiro"},{id:"gato2",letter:"GATO",emoji:"🐈",word:"Gato",hint:"Felino · Miar · Bigodes"},{id:"cavalo",letter:"CAVALO",emoji:"🐴",word:"Cavalo",hint:"Patas · Crina · Galope"},{id:"elefante",letter:"ELEFANTE",emoji:"🐘",word:"Elefante",hint:"Tromba · Presa · Savana"},{id:"leao2",letter:"LEÃO",emoji:"🦁",word:"Leão",hint:"Rei · Juba · África"},{id:"girafa",letter:"GIRAFA",emoji:"🦒",word:"Girafa",hint:"Pescoço · Alto · Savana"},{id:"pinguim",letter:"PINGUIM",emoji:"🐧",word:"Pinguim",hint:"Gelo · Nadar · Antártida"},{id:"borboleta",letter:"BORBOLETA",emoji:"🦋",word:"Borboleta",hint:"Asas · Colorida · Flor"},{id:"coelho2",letter:"COELHO",emoji:"🐰",word:"Coelho",hint:"Orelhas · Saltitar · Cenoura"},{id:"pato2",letter:"PATO",emoji:"🦆",word:"Pato",hint:"Nadar · Grasnar · Lago"}]},{id:"corpo",title:"O Meu Corpo",subtitle:"Cabeça · Mãos · Pés...",icon:"🧒",color:"#f59e0b",cards:[{id:"cabeca",letter:"CABEÇA",emoji:"🧠",word:"Cabeça",hint:"Cérebro · Pensar · Crânio"},{id:"olhos",letter:"OLHOS",emoji:"👀",word:"Olhos",hint:"Ver · Piscar · Cores"},{id:"nariz",letter:"NARIZ",emoji:"👃",word:"Nariz",hint:"Cheirar · Respirar · Espirrar"},{id:"boca",letter:"BOCA",emoji:"👄",word:"Boca",hint:"Falar · Comer · Sorrir"},{id:"orelhas",letter:"ORELHAS",emoji:"👂",word:"Orelhas",hint:"Ouvir · Sons · Música"},{id:"maos",letter:"MÃOS",emoji:"🙌",word:"Mãos",hint:"Tocar · Escrever · Bater"},{id:"pes",letter:"PÉS",emoji:"🦶",word:"Pés",hint:"Andar · Correr · Saltar"},{id:"coracão",letter:"CORAÇÃO",emoji:"❤️",word:"Coração",hint:"Amor · Batimento · Vida"}]},{id:"familia",title:"Família",subtitle:"Mãe · Pai · Irmão...",icon:"👨‍👩‍👧‍👦",color:"#e11d48",cards:[{id:"mae",letter:"MÃE",emoji:"👩",word:"Mãe",hint:"Amor · Cuidar · Abraço"},{id:"pai",letter:"PAI",emoji:"👨",word:"Pai",hint:"Forte · Proteção · Brincar"},{id:"irmao",letter:"IRMÃO",emoji:"👦",word:"Irmão",hint:"Brincar · Partilhar · Família"},{id:"irma",letter:"IRMÃ",emoji:"👧",word:"Irmã",hint:"Amigas · Brincar · Família"},{id:"avo",letter:"AVÔ",emoji:"👴",word:"Avô",hint:"Sábio · Velho · Histórias"},{id:"avo2",letter:"AVÓ",emoji:"👵",word:"Avó",hint:"Mimos · Cozinhar · Amor"},{id:"bebe",letter:"BEBÉ",emoji:"👶",word:"Bebé",hint:"Pequeno · Dormir · Chorar"},{id:"tio",letter:"TIO",emoji:"🧔",word:"Tio",hint:"Divertido · Familiar · Natal"}]},{id:"palavras",title:"Palavras",subtitle:"Ler palavras simples",icon:"💬",color:"#14b8a6",cards:[{id:"bola",letter:"BOLA",emoji:"⚽",word:"Bola"},{id:"gato",letter:"GATO",emoji:"🐱",word:"Gato"},{id:"casa",letter:"CASA",emoji:"🏠",word:"Casa"},{id:"pato",letter:"PATO",emoji:"🦆",word:"Pato"},{id:"leao",letter:"LEÃO",emoji:"🦁",word:"Leão"},{id:"mesa",letter:"MESA",emoji:"🪑",word:"Mesa"},{id:"sapo",letter:"SAPO",emoji:"🐸",word:"Sapo"},{id:"porta",letter:"PORTA",emoji:"🚪",word:"Porta"},{id:"livro",letter:"LIVRO",emoji:"📚",word:"Livro"},{id:"cama",letter:"CAMA",emoji:"🛏️",word:"Cama"},{id:"carro",letter:"CARRO",emoji:"🚗",word:"Carro"},{id:"flor",letter:"FLOR",emoji:"🌸",word:"Flor"},{id:"peixe",letter:"PEIXE",emoji:"🐟",word:"Peixe"},{id:"arco",letter:"ARCO",emoji:"🌈",word:"Arco-íris"},{id:"borboleta2",letter:"BORBOLETA",emoji:"🦋",word:"Borboleta"}]},{id:"frases",title:"Frases",subtitle:"Ler frases simples",icon:"📖",color:"#6366f1",cards:[{id:"f1",letter:"O gato é bonito.",emoji:"🐱",word:"O gato é bonito."},{id:"f2",letter:"A bola é redonda.",emoji:"⚽",word:"A bola é redonda."},{id:"f3",letter:"O sapo é verde.",emoji:"🐸",word:"O sapo é verde."},{id:"f4",letter:"A lua brilha à noite.",emoji:"🌙",word:"A lua brilha à noite."},{id:"f5",letter:"O pato nada no lago.",emoji:"🦆",word:"O pato nada no lago."},{id:"f6",letter:"O leão é o rei da selva.",emoji:"🦁",word:"O leão é o rei da selva."},{id:"f7",letter:"A borboleta é colorida.",emoji:"🦋",word:"A borboleta é colorida."},{id:"f8",letter:"O coelho come cenouras.",emoji:"🐰",word:"O coelho come cenouras."},{id:"f9",letter:"O sol brilha durante o dia.",emoji:"☀️",word:"O sol brilha durante o dia."},{id:"f10",letter:"Eu gosto de ler livros.",emoji:"📚",word:"Eu gosto de ler livros."}]}],l=[{label:"🔤 Primeiros Passos",ids:["vogais"]},{label:"🔡 Sílabas",ids:["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"]},{label:"🌍 O Mundo à Volta",ids:["animais","cores","numeros","corpo","familia"]},{label:"📖 Ler e Escrever",ids:["palavras","frases"]}],c={"primeira-estrela":{emoji:"⭐",label:"Primeira Estrela!",desc:"Ganhaste a tua primeira estrela"},"primeira-licao":{emoji:"🎓",label:"Primeira Lição!",desc:"Completaste a tua primeira lição"},"tres-estrelas":{emoji:"🌟",label:"Super Estrela!",desc:"Tiveste 3 estrelas numa lição"},coleccionador:{emoji:"💎",label:"Coleccionador!",desc:"10 favoritos guardados"},"vogais-mestre":{emoji:"🔤",label:"Mestre das Vogais!",desc:"Completaste as Vogais com 3 estrelas"},leitor:{emoji:"📖",label:"Leitor!",desc:"Completaste todas as sílabas"},explorador:{emoji:"🌍",label:"Explorador!",desc:"Completaste O Mundo à Volta"},"numeros-mestre":{emoji:"🔢",label:"Mestre dos Números!",desc:"Completaste os Números com 3 estrelas"}};var d=t(5723);const p=n.keyframes`
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
`,k=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({color:e})=>e}30;
  border: 2px solid ${({color:e})=>e}70;
  border-radius: 32px;
  padding: 8px 16px;
`,j=r.default.span`font-size: 20px;`,z=r.default.span`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,S=r.default.span`
  font-size: 13px;
  font-weight: 700;
  color: #c4b5fd;
  margin-left: 2px;
`,T=r.default.div`
  margin-top: 14px;
  background: #ffffff20;
  border-radius: 16px;
  height: 14px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px #00000030;
`,M=r.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, #f59e0b, #ec4899, #a78bfa, #60a5fa);
  background-size: 200% auto;
  border-radius: 16px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${m} 2s linear infinite;
`,C=r.default.div`
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
`,B=r.default.span`font-size: 36px;`,_=r.default.div`
  flex: 1;
  text-align: left;
`,E=r.default.div`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,I=r.default.div`font-size: 14px; font-weight: 600; color: #f9a8d4;`,P=r.default.div`color: #fb7185; font-size: 24px;`,F=(r.default.div`
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
`,D=r.default.button`
  display: flex;
  flex-direction: column;
  padding: 18px 16px 16px;
  background: ${({color:e,done:o})=>o?`linear-gradient(145deg, ${e}40, ${e}20)`:"linear-gradient(145deg, #1e2540, #131726)"};
  border: 2.5px solid ${({color:e,done:o})=>o?e+"90":e+"40"};
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
  filter: ${({lit:e,color:o})=>e?`drop-shadow(0 0 6px ${o})`:"none"};
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
`;function ee({progress:e,speechDebug:o,onSelectLesson:t,onOpenFavorites:a,onSpeechTest:r}){const n=s.length,p=Object.values(e.lessons).filter(e=>e.completed).length,u=Math.round(p/n*100);return(0,d.jsxs)(g,{children:[(0,d.jsx)(h,{children:(0,d.jsxs)(x,{children:[(0,d.jsxs)(b,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(y,{children:"LêBem"}),(0,d.jsx)(w,{children:"Vamos aprender a ler! 🚀✨"})]}),(0,d.jsx)(v,{children:"🦉"})]}),(0,d.jsxs)($,{children:[(0,d.jsxs)(k,{color:"#f59e0b",children:[(0,d.jsx)(j,{children:"⭐"}),(0,d.jsx)(z,{children:e.totalStars}),(0,d.jsx)(S,{children:"estrelas"})]}),(0,d.jsxs)(k,{color:"#7c3aed",children:[(0,d.jsx)(j,{children:"🏆"}),(0,d.jsxs)(z,{children:["Nível ",e.level]})]}),(0,d.jsxs)(k,{color:"#10b981",children:[(0,d.jsx)(j,{children:"🔥"}),(0,d.jsx)(z,{children:e.streak}),(0,d.jsx)(S,{children:"dias"})]})]}),(0,d.jsx)(T,{children:(0,d.jsx)(M,{pct:u})}),(0,d.jsxs)(C,{children:[(0,d.jsxs)("span",{children:[p," de ",n," lições"]}),(0,d.jsxs)("span",{children:[u,"% completo"]})]})]})}),(0,d.jsxs)(A,{children:[!1,(0,d.jsxs)(R,{onClick:a,children:[(0,d.jsx)(B,{children:"❤️"}),(0,d.jsxs)(_,{children:[(0,d.jsx)(E,{children:"Os meus Favoritos"}),(0,d.jsxs)(I,{children:[e.favorites.length," cartões guardados"]})]}),(0,d.jsx)(P,{children:(0,d.jsx)(i.A,{size:20})})]}),l.map((o,a)=>{const r=o.ids.map(e=>s.find(o=>o.id===e)).filter(Boolean);return(0,d.jsxs)(F,{index:a,children:[(0,d.jsx)(L,{children:o.label}),(0,d.jsx)(O,{children:r.map(o=>{const a=e.lessons[o.id],r=a?.stars??0,n=a?.completed??!1;return(0,d.jsxs)(D,{color:o.color,done:n,onClick:()=>t(o.id),children:[(0,d.jsxs)(N,{children:[(0,d.jsx)(H,{children:o.icon}),n&&(0,d.jsx)(G,{color:o.color,children:"✓ Feito"})]}),(0,d.jsx)(Y,{children:o.title}),(0,d.jsx)(q,{children:o.subtitle}),(0,d.jsxs)(V,{children:[[1,2,3].map(e=>(0,d.jsx)(W,{lit:r>=e,color:o.color,delay:80*e,children:"⭐"},e)),(0,d.jsxs)(J,{children:[o.cards.length," cartões"]})]})]},o.id)})})]},o.label)}),e.badges.length>0&&(0,d.jsxs)(X,{children:[(0,d.jsx)(L,{children:"🏅 Conquistas"}),(0,d.jsx)(U,{children:e.badges.map(e=>{const o=c[e];return o?(0,d.jsxs)(K,{title:o.desc,children:[(0,d.jsx)(Q,{children:o.emoji}),(0,d.jsx)(Z,{children:o.label})]},e):null})})]})]})]})}var oe=t(7180),te=t(1604),ae=t(2709),re=t(2887),ne=t(947),ie=t(6680),se=t(6879);let le=null,ce=null,de=[],pe=!1,ue=null,me="idle",fe=null;const ge=new Set,he=["Joana","Luciana","Eddy","Flo","Grandma","Grandpa","Reed","Rocko","Sandy","Shelley"];function xe(){return/Chrome/i.test(window.navigator.userAgent)&&!/Edg|OPR|CriOS/i.test(window.navigator.userAgent)}function be(){const e=$e();for(const o of ge)o(e)}function ye(){return 0===de.length&&(de=window.speechSynthesis.getVoices()),de}function we(){if(de=window.speechSynthesis.getVoices(),fe&&de.length>0){const e=fe;fe=null,window.setTimeout(()=>ke(e),0)}return be(),de}function ve(){const e=ye();if(xe())return e.find(e=>e.default&&e.lang.toLowerCase().startsWith("pt"))??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??null;for(const o of he){const t=e.find(e=>e.name.toLowerCase()===o.toLowerCase());if(t)return t}return e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??e.find(e=>e.default)??null}function $e(){if(!("speechSynthesis"in window))return{supported:!1,voicesCount:0,preferredVoiceName:null,preferredVoiceLang:null,availableVoiceNames:[],speaking:!1,pending:!1,paused:!1,lastEvent:me,lastError:ue};const e=window.speechSynthesis,o=ve(),t=ye();return{supported:!0,voicesCount:t.length,preferredVoiceName:o?.name??null,preferredVoiceLang:o?.lang??null,availableVoiceNames:t.filter(e=>e.lang.toLowerCase().startsWith("pt")).slice(0,6).map(e=>`${e.name} (${e.lang})`),speaking:e.speaking,pending:e.pending,paused:e.paused,lastEvent:me,lastError:ue}}function ke(e){const o=window.speechSynthesis,t=e.trim(),a=ye();if(!t)return;if(0===a.length)return fe=t,me="waiting-for-voices",be(),void window.setTimeout(()=>{fe===t&&(fe=null,ke(t))},400);null!==ce&&(window.clearTimeout(ce),ce=null),ue=null,me="queued",le=new SpeechSynthesisUtterance(t),le.lang=xe()?"pt-BR":"pt-PT",le.rate=.8,le.pitch=1.1;const r=ve();r&&!xe()?(le.voice=r,le.lang=r.lang):r&&(le.lang=r.lang),le.onstart=()=>{me="start",be()},le.onend=()=>{le=null,me="end",be()},le.onerror=e=>{le=null,me="error",ue=e.error,be()},o.resume(),o.speak(le),be()}function je(e){if(!("speechSynthesis"in window))return;const o=window.speechSynthesis,t=e.trim();if(t){if(null!==ce&&(window.clearTimeout(ce),ce=null),o.speaking||o.pending)return me="cancel",o.cancel(),ce=window.setTimeout(()=>ke(t),150),void be();ke(t)}}function ze(){je("Ola, teste de voz do LeBem. Esta e a voz do leitor.")}n.keyframes`from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); }`;const Se=n.keyframes`0%,100%{ transform: translateX(0); } 25%{ transform: translateX(-10px); } 75%{ transform: translateX(10px); }`,Te=n.keyframes`0%{ transform: scale(1); } 50%{ transform: scale(1.2); } 100%{ transform: scale(1); }`,Me=n.keyframes`from{ transform: translateY(0) scale(1); opacity: 1; } to{ transform: translateY(-120px) scale(0.3) rotate(360deg); opacity: 0; }`,Ce=n.keyframes`0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-12px); }`,Ae=r.default.div`
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
`,Be=r.default.button`
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
`,_e=r.default.div`
  font-size: 17px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
  flex: 1;
`,Ee=r.default.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`,Ie=r.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({active:e,done:o,color:t})=>e?t:o?t+"80":se.w4.colors.border};
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
`,Fe=r.default.div`
  font-size: 110px;
  line-height: 1;
  cursor: pointer;
  animation: ${Ce} 2.5s ease-in-out infinite;
  filter: drop-shadow(0 8px 24px ${({color:e})=>e}50);
  user-select: none;
  &:hover { animation: ${Te} 0.3s ease; }
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
`,De=r.default.div`
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
  background: ${({color:e,active:o})=>o?e+"30":se.w4.colors.surface};
  border: 2px solid ${({color:e,active:o})=>o?e??"#fff":se.w4.colors.border};
  border-radius: 16px;
  cursor: pointer;
  color: ${({color:e,active:o})=>o?e??"#fff":se.w4.colors.mainText};
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
  background: ${({color:e,disabled:o})=>o?se.w4.colors.surface:e+"20"};
  border: 2px solid ${({color:e,disabled:o})=>o?se.w4.colors.border:e+"60"};
  border-radius: 16px;
  color: ${({color:e,disabled:o})=>o?se.w4.colors.mainTextMuted:e};
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
  background: ${({state:e,color:o})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":"current"===e?o:se.w4.colors.border};
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
`,eo=r.default.div`
  display: grid;
  grid-template-columns: ${({count:e})=>e<=2?"1fr 1fr":"repeat(2, 1fr)"};
  gap: 10px;
  width: 100%;
`,oo=r.default.button`
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
`,to=r.default.div`font-size: 42px; line-height: 1;`,ao=r.default.div`
  font-size: 30px;
  font-weight: 900;
  color: ${({color:e})=>e};
`,ro=r.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
  min-height: 28px;
`,no=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 20px;
  position: relative;
  overflow: hidden;
`,io=r.default.div`
  position: absolute;
  font-size: 28px;
  top: 60%;
  left: ${({x:e})=>e}%;
  animation: ${Me} 1.4s ease ${({delay:e})=>e}s forwards;
  pointer-events: none;
`,so=r.default.div`
  font-size: 80px;
  animation: ${Ce} 1s ease-in-out infinite;
`,lo=r.default.div`
  font-size: 32px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-align: center;
`,co=r.default.div`
  font-size: 18px;
  color: ${se.w4.colors.mainTextMuted};
`,po=r.default.div`
  display: flex;
  gap: 8px;
  font-size: 44px;
`,uo=r.default.button`
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
`;function mo({lessonId:e,progress:o,onBack:t,onComplete:r,onToggleFavorite:n}){const i=(l=e,s.find(e=>e.id===l));var l;const[c,p]=(0,a.useState)("learn"),[u,m]=(0,a.useState)(0),[f,g]=(0,a.useState)([]),[h,x]=(0,a.useState)(0),[b,y]=(0,a.useState)([]),[w,v]=(0,a.useState)(null),[$,k]=(0,a.useState)(0),[j,z]=(0,a.useState)(!1),[S,T]=(0,a.useState)(!1),[M,C]=(0,a.useState)(!1),A=(0,a.useCallback)(e=>{je(e),C(!0),setTimeout(()=>C(!1),1200)},[]),R=(0,a.useCallback)(()=>{const e=function(e){const o=[...e.cards].sort(()=>Math.random()-.5).slice(0,5),t="palavras"===e.id||"frases"===e.id;return o.map(o=>{const a=e.cards.filter(e=>e.id!==o.id).sort(()=>Math.random()-.5).slice(0,3);if(t){const e=[{emoji:o.emoji},...a.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"word-to-emoji",cardId:o.id,promptWord:o.letter,label:"Qual é a imagem?",options:e,correctIndex:e.findIndex(e=>e.emoji===o.emoji)}}if(Math.random()>.5){const t=[{letter:o.letter},...a.map(e=>({letter:e.letter}))].sort(()=>Math.random()-.5);return{type:"emoji-to-letter",cardId:o.id,promptEmoji:o.emoji,promptWord:o.word,label:"vogais"===e.id?"Começa com que letra?":"Começa com que sílaba?",options:t,correctIndex:t.findIndex(e=>e.letter===o.letter)}}const r=[{emoji:o.emoji},...a.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"letter-to-emoji",cardId:o.id,promptLetter:o.letter,label:"Qual é a imagem?",options:r,correctIndex:r.findIndex(e=>e.emoji===o.emoji)}})}(i);g(e),x(0),y([]),v(null),k(0),p("quiz")},[i]),B=(0,a.useCallback)(e=>{if(null!==w||!f[h])return;const o=e===f[h].correctIndex;v(e),o?(k(e=>e+1),y(e=>[...e,"correct"]),setTimeout(()=>je(f[h]?.promptWord??f[h]?.promptLetter??""),200)):(z(!0),y(e=>[...e,"wrong"]),setTimeout(()=>z(!1),500)),setTimeout(()=>{h+1>=f.length?(p("result"),T(!0)):(x(e=>e+1),v(null))},900)},[w,f,h]),_=(0,a.useCallback)(()=>{r(e,$,f.length)},[e,$,f.length,r]);if(!i)return null;const E=i.cards[u],I=`${e}:${E?.id}`,P=o.favorites.includes(I),F=$>=f.length?3:$>=f.length-1?2:$>=Math.ceil(f.length/2)?1:0;if("learn"===c)return(0,d.jsxs)(Ae,{children:[(0,d.jsxs)(Re,{children:[(0,d.jsx)(Be,{onClick:t,children:(0,d.jsx)(oe.A,{size:18})}),(0,d.jsx)(_e,{children:i.title}),(0,d.jsx)(Ee,{children:i.cards.map((e,o)=>(0,d.jsx)(Ie,{active:o===u,done:o<u,color:i.color},o))})]}),(0,d.jsxs)(Pe,{children:[(0,d.jsx)(Fe,{color:i.color,onClick:()=>A(E.word),children:E.emoji}),(0,d.jsx)(Le,{color:i.color,children:E.letter}),(0,d.jsx)(Oe,{children:E.word}),E.hint&&(0,d.jsx)(De,{children:E.hint}),(0,d.jsxs)(Ne,{children:[(0,d.jsx)(He,{type:"button",color:"#f59e0b",active:M,title:"Ouvir",onClick:()=>A(E.word),children:(0,d.jsx)(te.A,{size:22,color:"#f59e0b"})}),(0,d.jsx)(He,{type:"button",color:"#ef4444",active:P,title:P?"Remover dos favoritos":"Adicionar aos favoritos",onClick:()=>n(I),children:(0,d.jsx)(ae.A,{size:22,fill:P?"#ef4444":"none",color:"#ef4444"})})]})]}),(0,d.jsxs)(Ge,{children:[(0,d.jsxs)(Ye,{color:i.color,disabled:0===u,onClick:()=>{u>0&&m(e=>e-1)},children:[(0,d.jsx)(oe.A,{size:18})," Anterior"]}),u<i.cards.length-1?(0,d.jsxs)(Ye,{color:i.color,onClick:()=>{m(e=>e+1),A(i.cards[u+1].word)},children:["Próxima ",(0,d.jsx)(re.A,{size:18})]}):(0,d.jsx)(qe,{color:i.color,onClick:R,children:"Fazer Quiz 🎯"})]})]});if("quiz"===c){const e=f[h];return e?(0,d.jsxs)(Ae,{children:[(0,d.jsxs)(Re,{children:[(0,d.jsx)(Be,{onClick:t,children:(0,d.jsx)(oe.A,{size:18})}),(0,d.jsxs)(_e,{children:["Quiz — ",i.title]})]}),(0,d.jsxs)(Ve,{children:[(0,d.jsx)(We,{children:f.map((e,o)=>(0,d.jsx)(Je,{color:i.color,state:o<b.length?b[o]:o===h?"current":"pending"},o))}),(0,d.jsx)(Xe,{children:e.label}),(0,d.jsxs)(Ue,{isShaking:j,color:i.color,children:[e.promptEmoji&&(0,d.jsx)(Ke,{children:e.promptEmoji}),e.promptWord&&"word-to-emoji"!==e.type&&(0,d.jsx)(Qe,{children:e.promptWord}),"word-to-emoji"===e.type&&(0,d.jsx)(Ze,{color:i.color,children:e.promptWord}),e.promptLetter&&(0,d.jsx)(Ze,{color:i.color,children:e.promptLetter})]}),(0,d.jsx)(eo,{count:e.options.length,children:e.options.map((o,t)=>{const a=null===w?"idle":t===e.correctIndex?"correct":t===w&&w!==e.correctIndex?"wrong":"idle";return(0,d.jsxs)(oo,{state:a,isShaking:"wrong"===a&&j,disabled:null!==w,onClick:()=>B(t),children:[o.emoji&&(0,d.jsx)(to,{children:o.emoji}),o.letter&&(0,d.jsx)(ao,{color:i.color,children:o.letter})]},t)})}),(0,d.jsxs)(ro,{children:[null!==w&&w===e.correctIndex&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ne.A,{size:22,color:"#10b981"})," ",(0,d.jsx)("span",{style:{color:"#10b981"},children:"Muito bem! 🎉"})]}),null!==w&&w!==e.correctIndex&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ie.A,{size:22,color:"#ef4444"})," ",(0,d.jsxs)("span",{style:{color:"#ef4444"},children:["Era ",e.options[e.correctIndex]?.letter??e.options[e.correctIndex]?.emoji,"!"]})]})]})]})]}):null}const L=F>0?["⭐","✨","🌟","💫","⭐","✨"].map((e,o)=>({emoji:e,x:10+15*o,delay:.15*o})):[];return(0,d.jsxs)(Ae,{children:[(0,d.jsxs)(Re,{children:[(0,d.jsx)(Be,{onClick:t,children:(0,d.jsx)(oe.A,{size:18})}),(0,d.jsx)(_e,{children:"Resultado"})]}),(0,d.jsxs)(no,{children:[S&&L.map((e,o)=>(0,d.jsx)(io,{x:e.x,delay:e.delay,children:e.emoji},o)),(0,d.jsx)(so,{children:3===F?"🏆":2===F?"🎉":1===F?"👍":"😅"}),(0,d.jsx)(lo,{color:i.color,children:3===F?"Perfeito!":2===F?"Muito bem!":1===F?"Bom esforço!":"Continua a tentar!"}),(0,d.jsxs)(co,{children:[$," de ",f.length," acertos"]}),(0,d.jsx)(po,{children:[1,2,3].map(e=>(0,d.jsx)("span",{style:{opacity:F>=e?1:.2},children:"⭐"},e))}),(0,d.jsx)(uo,{color:i.color,onClick:_,children:"Continuar →"})]})]})}const fo=n.keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,go=r.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${se.w4.colors.mainBg};
  font-family: ${se.w4.typography.fontFamily};
  overflow: hidden;
`,ho=r.default.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  border-bottom: 1px solid ${se.w4.colors.border};
  flex-shrink: 0;
`,xo=r.default.button`
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
`,bo=r.default.div`
  font-size: 18px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
`,yo=r.default.div`
  margin-left: auto;
  font-size: 13px;
  color: ${se.w4.colors.mainTextMuted};
`,wo=r.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 40px;
`,vo=r.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,$o=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px 14px;
  background: ${({color:e})=>e}12;
  border: 2px solid ${({color:e})=>e}30;
  border-radius: 20px;
  position: relative;
  animation: ${fo} 0.3s ease both;
  animation-delay: ${({index:e})=>40*e}ms;
`,ko=r.default.div`
  font-size: 52px;
  line-height: 1;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover { transform: scale(1.1); transition: transform 0.15s; }
`,jo=r.default.div`
  font-size: 22px;
  font-weight: 900;
  color: ${({color:e})=>e};
  letter-spacing: 0.02em;
`,zo=r.default.div`
  font-size: 14px;
  color: ${se.w4.colors.mainTextMuted};
  margin-top: 2px;
`,So=r.default.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`,To=r.default.button`
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
`,Mo=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: ${se.w4.colors.mainTextMuted};
  font-size: 16px;
  text-align: center;
`;function Co({progress:e,onBack:o,onToggleFavorite:t}){const a=[];for(const o of e.favorites){const[e,t]=o.split(":"),r=s.find(o=>o.id===e),n=r?.cards.find(e=>e.id===t);r&&n&&a.push({cardKey:o,card:n,color:r.color})}return(0,d.jsxs)(go,{children:[(0,d.jsxs)(ho,{children:[(0,d.jsx)(xo,{onClick:o,children:(0,d.jsx)(oe.A,{size:18})}),(0,d.jsx)(bo,{children:"❤️ Favoritos"}),(0,d.jsxs)(yo,{children:[a.length," guardados"]})]}),(0,d.jsx)(wo,{children:0===a.length?(0,d.jsxs)(Mo,{children:[(0,d.jsx)("span",{style:{fontSize:64},children:"💔"}),(0,d.jsx)("span",{children:"Ainda não tens favoritos."}),(0,d.jsx)("span",{style:{fontSize:14},children:"Toca no ❤️ nas lições para guardar."})]}):(0,d.jsx)(vo,{children:a.map(({cardKey:e,card:o,color:a},r)=>(0,d.jsxs)($o,{color:a,index:r,children:[(0,d.jsx)(ko,{onClick:()=>je(o.word),children:o.emoji}),(0,d.jsx)(jo,{color:a,children:o.letter}),(0,d.jsx)(zo,{children:o.word}),(0,d.jsxs)(So,{children:[(0,d.jsx)(To,{type:"button",title:"Ouvir",onClick:()=>je(o.word),children:(0,d.jsx)(te.A,{size:16})}),(0,d.jsx)(To,{type:"button",title:"Remover dos favoritos",onClick:()=>t(e),style:{color:"#ef4444",borderColor:"#ef444440"},children:(0,d.jsx)(ae.A,{size:16,fill:"#ef4444"})})]})]},e))})})]})}const Ao="atlantis-leitor-progress",Ro={totalStars:0,level:1,streak:0,lastPlayedDate:"",lessons:{},favorites:[],badges:[]};function Bo(e,o){return e.badges.includes(o)?e:{...e,badges:[...e.badges,o]}}const _o=r.default.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function Eo({onBack:e}){const[o,t]=(0,a.useState)(()=>function(){try{const e=localStorage.getItem(Ao);return e?{...Ro,...JSON.parse(e)}:{...Ro}}catch{return{...Ro}}}()),[r,n]=(0,a.useState)(()=>$e());(0,a.useEffect)(()=>{return"speechSynthesis"in window&&(we(),pe||(window.speechSynthesis.addEventListener("voiceschanged",we),pe=!0,be())),e=n,ge.add(e),e($e()),()=>{ge.delete(e)};var e},[]);const[i,s]=(0,a.useState)({id:"home"}),l=(0,a.useCallback)(e=>{t(o=>{const t=function(e){let o=e;return o.totalStars>=1&&!o.badges.includes("primeira-estrela")&&(o=Bo(o,"primeira-estrela")),Object.values(o.lessons).filter(e=>e.completed).length>=1&&!o.badges.includes("primeira-licao")&&(o=Bo(o,"primeira-licao")),Object.values(o.lessons).some(e=>3===e.stars)&&!o.badges.includes("tres-estrelas")&&(o=Bo(o,"tres-estrelas")),o.favorites.length>=10&&!o.badges.includes("coleccionador")&&(o=Bo(o,"coleccionador")),3!==o.lessons.vogais?.stars||o.badges.includes("vogais-mestre")||(o=Bo(o,"vogais-mestre")),["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"].every(e=>o.lessons[e]?.completed)&&!o.badges.includes("leitor")&&(o=Bo(o,"leitor")),["animais","cores","numeros","corpo","familia"].every(e=>o.lessons[e]?.completed)&&!o.badges.includes("explorador")&&(o=Bo(o,"explorador")),3!==o.lessons.numeros?.stars||o.badges.includes("numeros-mestre")||(o=Bo(o,"numeros-mestre")),o}(e(o));return function(e){try{localStorage.setItem(Ao,JSON.stringify(e))}catch{}}(t),t})},[]),c=(0,a.useCallback)(e=>{l(o=>function(e,o){const t=e.favorites.includes(o);return{...e,favorites:t?e.favorites.filter(e=>e!==o):[...e.favorites,o]}}(o,e))},[l]),p=(0,a.useCallback)((e,o,t)=>{l(a=>function(e,o,t,a){t>=a||t>=a-1||Math.ceil(a/2);const r=e.lessons[o],n=Math.max(r?.bestScore??0,t),i=n>=a?3:n>=a-1?2:n>=Math.ceil(a/2)?1:0,s=Math.max(0,i-(r?.stars??0)),l=(new Date).toISOString().split("T")[0],c=(()=>{if(!e.lastPlayedDate)return!1;const o=new Date(e.lastPlayedDate);return 1==(new Date(l).getTime()-o.getTime())/864e5})();return{...e,totalStars:e.totalStars+s,level:Math.floor((e.totalStars+s)/5)+1,streak:e.lastPlayedDate===l?e.streak:c?e.streak+1:1,lastPlayedDate:l,lessons:{...e.lessons,[o]:{stars:i,bestScore:n,completed:i>0}}}}(a,e,o,t)),s({id:"home"})},[l]);return"lesson"===i.id?(0,d.jsx)(_o,{children:(0,d.jsx)(mo,{lessonId:i.lessonId,progress:o,onBack:()=>s({id:"home"}),onComplete:p,onToggleFavorite:c})}):"favorites"===i.id?(0,d.jsx)(_o,{children:(0,d.jsx)(Co,{progress:o,onBack:()=>s({id:"home"}),onToggleFavorite:c})}):(0,d.jsx)(_o,{children:(0,d.jsx)(ee,{progress:o,speechDebug:r,onSelectLesson:e=>s({id:"lesson",lessonId:e}),onOpenFavorites:()=>s({id:"favorites"}),onSpeechTest:ze})})}},1364(e,o,t){t.d(o,{XB:()=>le,zE:()=>v,Ky:()=>f,zj:()=>h});var a=t(7359),r=t(3279);let n=null;function i(){return n||(n=(0,r.UU)("https://eqvzakschpdemcgexjyy.supabase.co","sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL")),n}function s(e){return i().channel(`game-room-${e}`,{config:{broadcast:{self:!1}}})}function l(e){i().removeChannel(e)}const c=["turbo","mega","super","epic","cosmic","blazing","wild","hyper","magic","thunder","golden","silver","crystal","phantom","stellar","neon","atomic","mystic","shadow","lucky"],d={tictactoe:["grid","cross","circle","duel","board","square"],spotit:["eyes","flash","cards","match","reflex","hunt"],memory:["brain","flip","pairs","cards","mind","vault"],stopgame:["words","rush","sprint","blitz","clash","race"]},p=["arena","zone","battle","quest","clash","showdown"];function u(e){return e[Math.floor(Math.random()*e.length)]}function m(){return Math.random().toString(36).slice(2,8)}function f({gameId:e,playerName:o,onEvent:t}){const[r,n]=(0,a.useState)(null),[i,f]=(0,a.useState)(null),g=(0,a.useRef)(null),h=(0,a.useRef)(t);h.current=t;const x=(0,a.useRef)(o);x.current=o;const b=(0,a.useRef)(m()),y=(0,a.useCallback)((o,t)=>{const a=s(function(e,o){return`${e}-${o.toUpperCase()}`}(e,o));return a.on("broadcast",{event:"mp"},({payload:e})=>{h.current(e)}),a.subscribe(e=>{"SUBSCRIBED"===e?(g.current=a,"guest"===t&&a.send({type:"broadcast",event:"mp",payload:{type:"guest-joined",name:x.current,playerId:b.current}})):"CHANNEL_ERROR"===e&&f("Connection failed. Check your internet and try again.")}),a},[e]),w=(0,a.useCallback)(()=>{b.current=m();const o=Array.from({length:6},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(32*Math.random())]).join(""),t=function(e,o){const t=u(c),a=u(d[e]??p);return`${o.slice(0,8).trim()}'s ${t} ${a}`}(e,x.current);y(o,"host");const a={id:b.current,name:x.current,isHost:!0};return n({code:o,roomName:t,role:"host",playerId:b.current,playerName:x.current,players:[a],opponentName:null,connected:!1}),f(null),{code:o,roomName:t}},[y,e]),v=(0,a.useCallback)(e=>{b.current=m();const o=e.toUpperCase().trim();y(o,"guest");const t={id:b.current,name:x.current,isHost:!1};n({code:o,roomName:"",role:"guest",playerId:b.current,playerName:x.current,players:[t],opponentName:null,connected:!1}),f(null)},[y]),$=(0,a.useCallback)(e=>{g.current?.send({type:"broadcast",event:"mp",payload:e})},[]),k=(0,a.useCallback)(()=>{g.current&&(g.current.send({type:"broadcast",event:"mp",payload:{type:"player-left",playerId:b.current,name:x.current}}),l(g.current),g.current=null),n(null),f(null)},[]),j=(0,a.useCallback)(e=>{n(o=>o?{...o,opponentName:e,connected:!0}:o)},[]),z=(0,a.useCallback)(e=>{n(o=>{if(!o)return o;if(o.players.some(o=>o.id===e.id))return o;const t=[...o.players,e],a=t.find(e=>e.id!==o.playerId);return{...o,players:t,opponentName:a?.name??null,connected:!0}})},[]),S=(0,a.useCallback)(e=>{n(o=>{if(!o)return o;const t=o.players.filter(o=>o.id!==e),a=t.find(e=>e.id!==o.playerId);return{...o,players:t,opponentName:a?.name??null,connected:t.length>1}})},[]),T=(0,a.useCallback)(e=>{n(o=>{if(!o)return o;const t=e.find(e=>e.id!==o.playerId);return{...o,players:e,opponentName:t?.name??null,connected:e.length>1}})},[]);return(0,a.useEffect)(()=>()=>{g.current&&(g.current.send({type:"broadcast",event:"mp",payload:{type:"player-left",playerId:b.current,name:x.current}}),l(g.current),g.current=null)},[]),{room:r,createRoom:w,joinRoom:v,sendEvent:$,leaveRoom:k,setConnected:j,addPlayer:z,removePlayer:S,setPlayers:T,error:i}}const g=864e5;function h({gameId:e,enabled:o}){const[t,r]=(0,a.useState)([]),n=(0,a.useRef)(null),i=(0,a.useRef)(null),c=(0,a.useRef)(null),d=(0,a.useRef)(new Map);(0,a.useEffect)(()=>{if(!o)return;const t=s(`lobby-${e}`);n.current=t,t.on("broadcast",{event:"room-heartbeat"},({payload:e})=>{const o=e,t=Date.now();t-o.createdAt>g||(o.lastSeen=t,d.current.set(o.code,o),r(Array.from(d.current.values())))}),t.on("broadcast",{event:"room-closed"},({payload:e})=>{const{code:o}=e;d.current.delete(o),r(Array.from(d.current.values()))}),t.subscribe();const a=setInterval(()=>{const e=Date.now();let o=!1;for(const[t,a]of d.current)(e-a.lastSeen>45e3||e-a.createdAt>g)&&(d.current.delete(t),o=!0);o&&r(Array.from(d.current.values()))},1e4);return setTimeout(()=>{t.send({type:"broadcast",event:"room-request",payload:{}})},500),()=>{clearInterval(a),n.current&&(l(n.current),n.current=null),d.current.clear()}},[e,o]),(0,a.useEffect)(()=>{if(!o||!n.current)return;const e=n.current;e.on("broadcast",{event:"room-request"},()=>{c.current&&e.send({type:"broadcast",event:"room-heartbeat",payload:{...c.current,lastSeen:Date.now()}})})},[o]);const p=(0,a.useCallback)(o=>{const t={...o,gameId:e,createdAt:Date.now(),lastSeen:Date.now()};c.current=t,n.current?.send({type:"broadcast",event:"room-heartbeat",payload:t}),i.current&&clearInterval(i.current),i.current=setInterval(()=>{c.current&&n.current&&(c.current.lastSeen=Date.now(),n.current.send({type:"broadcast",event:"room-heartbeat",payload:c.current}))},2e4)},[e]),u=(0,a.useCallback)(e=>{c.current&&(c.current.playerCount=e)},[]),m=(0,a.useCallback)(()=>{i.current&&(clearInterval(i.current),i.current=null),c.current&&n.current&&n.current.send({type:"broadcast",event:"room-closed",payload:{code:c.current.code}}),c.current=null},[]);return(0,a.useEffect)(()=>()=>{i.current&&clearInterval(i.current),c.current&&n.current&&n.current.send({type:"broadcast",event:"room-closed",payload:{code:c.current.code}}),c.current=null},[]),{rooms:t,publishRoom:p,updatePlayerCount:u,unpublishRoom:m}}var x=t(3233),b=t(7207),y=t(6879);const w="atlantis-games-player-name";function v(){return sessionStorage.getItem(w)??""}var $=t(5723);const k={yourName:{pt:"O teu nome",en:"Your name"},createRoom:{pt:"Criar Sala",en:"Create Room"},joinRoom:{pt:"Entrar na Sala",en:"Join Room"},roomCode:{pt:"Código da Sala",en:"Room Code"},waiting:{pt:"À espera de jogadores…",en:"Waiting for players…"},shareCode:{pt:"Partilha este código:",en:"Share this code:"},enterCode:{pt:"Introduz o código da sala",en:"Enter room code"},join:{pt:"Entrar",en:"Join"},leave:{pt:"Sair",en:"Leave"},copied:{pt:"Copiado!",en:"Copied!"},copy:{pt:"Copiar",en:"Copy"},namePlaceholder:{pt:"Ex: João",en:"E.g. John"},or:{pt:"ou",en:"or"},connected:{pt:"Ligado!",en:"Connected!"},playOnline:{pt:"Jogar Online",en:"Play Online"},players:{pt:"Jogadores",en:"Players"},openRooms:{pt:"Salas abertas",en:"Open rooms"},noRooms:{pt:"Nenhuma sala aberta",en:"No open rooms"},joinDirect:{pt:"Entrar com código",en:"Join with code"},nameMissingTitle:{pt:"Falta o teu nome",en:"Your name is missing"},nameMissingBody:{pt:"Para entrares ou criares uma sala, escreve primeiro o teu nome no campo lá em cima. Assim os outros jogadores sabem quem és.",en:"To join or create a room, first enter your name in the field above. That’s how other players see who you are."},gotIt:{pt:"Entendido",en:"Got it"}};function j(e,o){return k[e]["pt"===o?"pt":"en"]}const z=b.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,S=b.keyframes`
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
  animation: ${S} 0.25s ease;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`,C=x.default.h2`
  font-size: ${y.w4.typography.fontSizeLg};
  color: ${y.w4.colors.mainText};
  margin: 0;
  text-align: center;
`,A=b.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,R=b.keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,B=x.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 5000;
  animation: ${A} 0.15s ease;
`,_=x.default.div`
  background: ${y.w4.colors.sidebarBg};
  border: 1px solid ${y.w4.colors.border};
  border-radius: ${y.w4.borderRadius.lg};
  padding: 24px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${R} 0.2s cubic-bezier(0.22, 1, 0.36, 1);
`,E=x.default.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${y.w4.colors.mainText};
  font-family: ${y.w4.typography.fontFamily};
`,I=x.default.p`
  margin: 0;
  font-size: ${y.w4.typography.fontSizeBase};
  color: ${y.w4.colors.mainTextMuted};
  font-family: ${y.w4.typography.fontFamily};
  line-height: 1.5;
`,P=x.default.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`,F=x.default.input`
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
`,L=x.default.input`
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
`,O=x.default.div`
  display: flex;
  gap: ${y.w4.spacing.sm};
  width: 100%;
`,D=x.default.button`
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
`,N=x.default.div`
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
`,H=x.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${y.w4.spacing.md};
  width: 100%;
  padding: 20px;
  border-radius: ${y.w4.borderRadius.lg};
  border: 2px dashed ${y.w4.colors.accent};
  background: ${y.w4.colors.surface};
`,G=x.default.span`
  font-size: 32px;
  font-family: ${y.w4.typography.fontFamilyMono};
  font-weight: 700;
  color: ${y.w4.colors.accent};
  letter-spacing: 0.25em;
  user-select: all;
`,Y=x.default.button`
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
`,q=x.default.p`
  color: ${y.w4.colors.mainTextMuted};
  font-size: ${y.w4.typography.fontSizeBase};
  animation: ${z} 1.8s ease infinite;
  text-align: center;
  margin: 0;
`,V=x.default.p`
  color: #f85149;
  font-size: ${y.w4.typography.fontSizeSm};
  text-align: center;
  margin: 0;
`,W=x.default.label`
  font-size: ${y.w4.typography.fontSizeSm};
  color: ${y.w4.colors.mainTextMuted};
  width: 100%;
`,J=x.default.div`
  display: flex;
  flex-direction: column;
  gap: ${y.w4.spacing.sm};
  width: 100%;
`,X=x.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,U=x.default.div`
  font-size: ${y.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${y.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,K=x.default.div`
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
`,Q=x.default.span`
  font-size: 10px;
  font-weight: 700;
  color: ${y.w4.colors.accent};
  background: rgba(88, 166, 255, 0.12);
  border-radius: 8px;
  padding: 1px 6px;
`,Z=x.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ee=x.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,oe=x.default.span`
  font-size: ${y.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${y.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,te=x.default.button`
  display: flex;
  align-items: center;
  gap: ${y.w4.spacing.sm};
  width: 100%;
  padding: 12px 14px;
  background: ${y.w4.colors.surface};
  border: 1px solid ${y.w4.colors.border};
  border-radius: ${y.w4.borderRadius.lg};
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, transform 0.15s, opacity 0.15s;
  font-family: ${y.w4.typography.fontFamily};
  text-align: left;
  min-height: 56px;
  &:hover:not(:disabled) {
    border-color: ${y.w4.colors.accent};
    background: rgba(88, 166, 255, 0.05);
    transform: translateY(-1px);
  }
  &:active:not(:disabled) { transform: translateY(0); }
  /* Previously there was no disabled style — the card looked fully clickable
   * while the handler silently returned, making join feel broken. */
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,ae=x.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,re=x.default.span`
  font-size: ${y.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${y.w4.colors.mainText};
`,ne=x.default.span`
  font-size: ${y.w4.typography.fontSizeSm};
  color: ${y.w4.colors.mainTextMuted};
`,ie=x.default.span`
  font-size: ${y.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${y.w4.colors.accent};
  white-space: nowrap;
`,se=x.default.p`
  font-size: ${y.w4.typography.fontSizeSm};
  color: ${y.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${y.w4.spacing.md} 0;
  margin: 0;
`;function le({lang:e,room:o,error:t,onCreateRoom:r,onJoinRoom:n,onLeaveRoom:i,availableRooms:s=[]}){const[l,c]=(0,a.useState)("idle"),[d,p]=(0,a.useState)(()=>v()),[u,m]=(0,a.useState)(""),[f,g]=(0,a.useState)(!1),[h,x]=(0,a.useState)(!1),b=(0,a.useRef)(null),k=(0,a.useRef)(null);(0,a.useEffect)(()=>{d.trim()&&x(!1)},[d]);const z=()=>{x(!1),setTimeout(()=>k.current?.focus(),50)},S=()=>{const e=d.trim();return e?(function(e){sessionStorage.setItem(w,e)}(e),e):(x(!0),null)},T=()=>{const e=S();e&&(c("hosting"),r(e))},A=()=>{const e=u.trim().toUpperCase();e.length<4||n(e,d.trim())},R=()=>{o&&navigator.clipboard.writeText(o.code).then(()=>{g(!0),setTimeout(()=>g(!1),2e3)})},le=()=>{c("idle"),m(""),i()};if(o?.connected)return null;if("hosting"===l&&o){const a=o.players??[];return(0,$.jsxs)(M,{children:[o.roomName&&(0,$.jsx)(C,{style:{fontSize:18,color:y.w4.colors.accent},children:o.roomName}),(0,$.jsxs)(C,{children:["🌐 ",j("shareCode",e)]}),(0,$.jsxs)(H,{children:[(0,$.jsx)(G,{children:o.code}),(0,$.jsx)(Y,{onClick:R,children:j(f?"copied":"copy",e)})]}),a.length>1&&(0,$.jsxs)(X,{children:[(0,$.jsxs)(U,{children:[j("players",e)," (",a.length,")"]}),a.map(e=>(0,$.jsxs)(K,{children:[e.isHost?"👑":"👤"," ",e.name,e.isHost&&(0,$.jsx)(Q,{children:"Host"})]},e.id))]}),a.length<=1&&(0,$.jsx)(q,{children:j("waiting",e)}),t&&(0,$.jsx)(V,{children:t}),(0,$.jsx)(D,{variant:"secondary",onClick:le,children:j("leave",e)})]})}return"joining"===l?(0,$.jsxs)(M,{children:[(0,$.jsxs)(C,{children:["🔗 ",j("joinRoom",e)]}),(0,$.jsxs)(J,{children:[(0,$.jsx)(W,{children:j("enterCode",e)}),(0,$.jsx)(L,{ref:b,value:u,onChange:e=>m(e.target.value.toUpperCase().slice(0,6)),placeholder:"ABC123",maxLength:6,onKeyDown:e=>"Enter"===e.key&&A()})]}),t&&(0,$.jsx)(V,{children:t}),(0,$.jsxs)(O,{children:[(0,$.jsx)(D,{variant:"secondary",onClick:le,children:j("leave",e)}),(0,$.jsx)(D,{variant:"primary",onClick:A,disabled:u.trim().length<4,children:j("join",e)})]})]}):(0,$.jsxs)(M,{children:[(0,$.jsxs)(C,{children:["🌐 ",j("playOnline",e)]}),(0,$.jsxs)(J,{children:[(0,$.jsx)(W,{children:j("yourName",e)}),(0,$.jsx)(F,{ref:k,value:d,onChange:e=>p(e.target.value.slice(0,20)),placeholder:j("namePlaceholder",e),onKeyDown:e=>"Enter"===e.key&&T()})]}),t&&(0,$.jsx)(V,{children:t}),s.length>0&&(0,$.jsxs)(Z,{children:[(0,$.jsx)(ee,{children:(0,$.jsxs)(oe,{children:[j("openRooms",e)," (",s.length,")"]})}),s.map(e=>(0,$.jsxs)(te,{onClick:()=>(e=>{document.activeElement?.blur();const o=S();o&&n(e,o)})(e.code),"aria-disabled":!d.trim(),children:[(0,$.jsxs)(ae,{children:[(0,$.jsx)(re,{children:e.roomName||e.code}),(0,$.jsxs)(ne,{children:["👑 ",e.hostName]})]}),(0,$.jsxs)(ie,{children:["👤 ",e.playerCount]})]},e.code))]}),0===s.length&&(0,$.jsx)(se,{children:j("noRooms",e)}),(0,$.jsx)(O,{children:(0,$.jsx)(D,{variant:"primary",onClick:T,disabled:!d.trim(),children:j("createRoom",e)})}),(0,$.jsx)(N,{children:j("or",e)}),(0,$.jsx)(O,{children:(0,$.jsx)(D,{variant:"secondary",onClick:()=>{S()&&(c("joining"),setTimeout(()=>b.current?.focus(),100))},disabled:!d.trim(),children:j("joinDirect",e)})}),h&&(0,$.jsx)(B,{role:"dialog","aria-modal":"true",onClick:z,children:(0,$.jsxs)(_,{onClick:e=>e.stopPropagation(),children:[(0,$.jsx)(E,{children:j("nameMissingTitle",e)}),(0,$.jsx)(I,{children:j("nameMissingBody",e)}),(0,$.jsx)(P,{children:(0,$.jsx)(D,{variant:"primary",onClick:z,children:j("gotIt",e)})})]})})]})}},233(e,o,t){t.d(o,{G:()=>l,L:()=>i});var a=t(7359),r=t(5723);function n(e,o){switch(e){case"S":return o.skin;case"B":return o.body;case"D":return o.bodyDark;case"H":return o.hat;case"E":return o.eyes;case"M":return o.mouth;case"A":return o.accent;case"X":return o.shoes;default:return null}}const i=[{skin:"#ffcc99",body:"#4488ff",bodyDark:"#3366cc",shoes:"#cc4444",eyes:"#222",mouth:"#cc5555",hat:"#ff4444",accent:"#ffdd44"},{skin:"#ffe0bd",body:"#44bb44",bodyDark:"#338833",shoes:"#8844cc",eyes:"#222",mouth:"#cc5555",hat:"#22aa22",accent:"#ffffff"},{skin:"#f5c6a0",body:"#ff6644",bodyDark:"#cc4422",shoes:"#4444cc",eyes:"#222",mouth:"#cc5555",hat:"#ffaa00",accent:"#44ddff"},{skin:"#deb887",body:"#cc44cc",bodyDark:"#993399",shoes:"#44cc44",eyes:"#222",mouth:"#cc5555",hat:"#ff66cc",accent:"#ffff44"},{skin:"#ffd5b5",body:"#ffaa00",bodyDark:"#cc8800",shoes:"#884422",eyes:"#222",mouth:"#cc5555",hat:"#4488ff",accent:"#ff4444"},{skin:"#ffe0c0",body:"#00cccc",bodyDark:"#009999",shoes:"#ff6644",eyes:"#222",mouth:"#cc5555",hat:"#ff44aa",accent:"#88ff88"},{skin:"#ffcc99",body:"#8855cc",bodyDark:"#663399",shoes:"#ffaa00",eyes:"#222",mouth:"#cc5555",hat:"#44ccff",accent:"#ff8844"},{skin:"#f0c8a0",body:"#ff4488",bodyDark:"#cc2266",shoes:"#222222",eyes:"#222",mouth:"#cc5555",hat:"#44ff88",accent:"#ffdd00"},{skin:"#ffcc99",body:"#ffffff",bodyDark:"#cccccc",shoes:"#3366cc",eyes:"#222",mouth:"#cc5555",hat:"#4488ff",accent:"#ff4444"},{skin:"#f5c6a0",body:"#222222",bodyDark:"#111111",shoes:"#444444",eyes:"#ff4444",mouth:"#cc5555",hat:"#333333",accent:"#ff2222"},{skin:"#ffe0bd",body:"#44dd44",bodyDark:"#22aa22",shoes:"#664422",eyes:"#222",mouth:"#cc5555",hat:"#55ee55",accent:"#88ff44"},{skin:"#c8a882",body:"#7744cc",bodyDark:"#552299",shoes:"#222222",eyes:"#ff44ff",mouth:"#cc88cc",hat:"#9944ff",accent:"#cc66ff"}],s={idle:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","S","B","B","B","B","B","B","B","B","S","_"],["_","S","B","B","B","A","A","B","B","B","S","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","_","D","D","_","_","D","D","_","_","_"],["_","_","_","D","D","_","_","D","D","_","_","_"],["_","_","X","X","X","_","_","X","X","X","_","_"],["_","_","X","X","X","_","_","X","X","X","_","_"]],jump:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["S","S","B","B","B","B","B","B","B","B","S","S"],["_","S","B","B","B","A","A","B","B","B","S","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","D","D","_","_","_","_","D","D","_","_"],["_","D","D","_","_","_","_","_","_","D","D","_"],["X","X","X","_","_","_","_","_","_","X","X","X"],["X","X","_","_","_","_","_","_","_","_","X","X"]],walk:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","_","B","B","B","B","B","B","B","B","S","_"],["_","_","B","B","B","A","A","B","B","B","S","_"],["_","S","B","B","B","B","B","B","B","B","_","_"],["_","S","B","B","B","B","B","B","B","B","_","_"],["_","_","_","D","D","_","_","_","D","D","_","_"],["_","_","_","_","D","D","_","D","D","_","_","_"],["_","_","_","_","X","X","X","X","_","_","_","_"],["_","_","_","_","X","X","X","X","_","_","_","_"]],dead:[["_","_","_","_","_","H","H","H","H","_","_","_"],["_","_","_","_","H","H","H","H","H","H","_","_"],["_","_","_","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","_","S","S","_","E","S","_","_"],["_","_","S","_","E","S","S","E","_","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","A","A","B","B","B","_","_"],["_","S","B","B","B","B","B","B","B","B","S","_"],["S","_","B","B","B","B","B","B","B","B","_","S"],["_","_","_","D","D","D","D","D","D","_","_","_"],["_","_","_","_","_","_","_","_","_","_","_","_"],["_","_","X","X","X","X","X","X","X","X","_","_"],["_","_","_","_","_","_","_","_","_","_","_","_"]]};function l({paletteIndex:e,pose:o="idle",size:t=48,flipX:l=!1,style:c,className:d}){const p=i[e%i.length],u=s[o],m=u.length,f=u[0].length,g=(0,a.useMemo)(()=>{const e=[];for(let o=0;o<m;o++)for(let t=0;t<f;t++){const a=n(u[o][t],p);a&&e.push({x:t,y:o,color:a})}return e},[u,p,m,f]);return(0,r.jsx)("svg",{width:t,height:t*(m/f),viewBox:`0 0 ${f} ${m}`,style:{imageRendering:"pixelated",transform:l?"scaleX(-1)":void 0,...c},className:d,children:g.map((e,o)=>(0,r.jsx)("rect",{x:e.x,y:e.y,width:1,height:1,fill:e.color},o))})}}}]);
//# sourceMappingURL=3179.7d04f39b8e738c63646b.js.map