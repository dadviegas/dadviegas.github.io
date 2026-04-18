"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[908],{4914(e,o,n){n.d(o,{FlyoutPanel:()=>b});var t=n(7359),a=n(3233),i=n(7207),r=n(255),l=n(217),s=n(5959),d=n(5185),c=n(5723);const p=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=a.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.accentMuted};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${l.w4.colors.borderSubtle},
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
    background: ${l.w4.colors.accent};
    opacity: 0.4;
  }
`,u=a.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${l.w4.colors.accent};
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
  font-family: ${l.w4.typography.fontFamily};
`,m=a.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${l.w4.colors.accentMuted};
    color: ${l.w4.colors.mainText};
  }
`;function f({iconKey:e}){const o=e?d.t[e]??r.A:r.A;return(0,c.jsx)(o,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:o,onSelect:n}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(t.Fragment,{children:(0,c.jsx)(x,{entries:e.children,activeId:o,onSelect:n})},e.id):(0,c.jsxs)(m,{active:o===e.id,onClick:()=>n(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){const{flyout:o,scheduleFlyoutClose:n,cancelFlyoutClose:t}=(0,s.c)();if(!o)return null;const a=o.entry.icon?d.t[o.entry.icon]??r.A:r.A;return(0,c.jsxs)(g,{anchorY:o.anchorY,onMouseEnter:t,onMouseLeave:n,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(a,{size:13,strokeWidth:2}),o.entry.name]}),(0,c.jsx)(x,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),n()}})]})}},5959(e,o,n){n.d(o,{I:()=>a,c:()=>i});var t=n(7359);const a=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,t.useContext)(a)},5185(e,o,n){n.d(o,{t:()=>he});var t=n(9510),a=n(9038),i=n(7400),r=n(7561),l=n(8207),s=n(7902),d=n(6896),c=n(3013),p=n(2887),g=n(7901),u=n(9848),m=n(2164),f=n(3045),x=n(3775),b=n(3539),h=n(1783),y=n(9416),w=n(1837),z=n(7167),v=n(4494),k=n(2314),$=n(5751),A=n(255),S=n(9633),j=n(2946),M=n(822),T=n(6720),B=n(8456),C=n(3317),E=n(2709),P=n(9301),R=n(8006),F=n(3517),L=n(7032),D=n(6949),I=n(8218),N=n(6829),H=n(5553),K=n(9591),Y=n(9923),G=n(2820),_=n(4621),O=n(8479),V=n(2534),W=n(6673),U=n(7490),J=n(9033),Z=n(5775),q=n(1365),X=n(2937),Q=n(9821),ee=n(5912),oe=n(158),ne=n(8641),te=n(8607),ae=n(3249),ie=n(1821),re=n(5889),le=n(9655),se=n(7170),de=n(9161),ce=n(1849),pe=n(1604),ge=n(3142),ue=n(1187),me=n(7747),fe=n(2932),xe=n(4525),be=n(7230);const he={activity:d.A,"a-large-small":s.A,apple:c.A,"arrow-right":p.A,"bar-chart-2":t.A,book:u.A,"book-open":g.A,briefcase:f.A,calendar:x.A,clock:h.A,"circle-dot":b.A,cloud:y.A,compass:w.A,cpu:z.A,droplets:v.A,feather:k.A,file:A.A,"file-text":$.A,folder:S.A,"git-branch":j.A,github:M.A,globe:T.A,grid:i.A,hand:B.A,hash:C.A,heart:E.A,key:R.A,hexagon:P.A,home:r.A,landmark:F.A,layers:l.A,"layout-grid":L.A,leaf:D.A,lightbulb:I.A,list:N.A,map:K.A,"map-pin":H.A,"message-circle":Y.A,"message-square":G.A,minus:_.A,monitor:O.A,mountain:V.A,package:W.A,palette:U.A,"pen-tool":J.A,"pie-chart":a.A,plane:Z.A,plus:q.A,ruler:X.A,shirt:Q.A,slash:ee.A,square:oe.A,star:ne.A,sun:te.A,terminal:ae.A,thermometer:ie.A,triangle:re.A,trophy:le.A,truck:se.A,type:de.A,users:ce.A,"volume-2":pe.A,watch:ge.A,waves:ue.A,wind:me.A,wrench:fe.A,x:xe.A,zap:be.A,bot:m.A}},458(e,o,n){n.d(o,{tz:()=>we,UO:()=>ce,PE:()=>M,MJ:()=>J,PL:()=>H,Is:()=>N,KL:()=>D,w4:()=>t.w4,mZ:()=>I});var t=n(217),a=n(7359),i=n(3233),r=n(5723);i.default.button`
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
`,i.default.div`
  position: relative;
`;var l=n(7207),s=n(3661),d=n(5959);const c="260px",p="56px",g=i.default.header`
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
`,u=i.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,m=i.default.button`
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
`,f=l.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,x=i.default.button`
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
`,b=i.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${f} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,h=i.default.div`
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
`,y=i.default.div`
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
`,w=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=i.default.div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,v=i.default.aside`
  width: ${({collapsed:e})=>e?p:c};
  min-width: ${({collapsed:e})=>e?p:c};
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
`,k=i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,$=i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function S(){return(0,r.jsx)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,o)=>(0,r.jsx)(b,{index:o,accent:e.accent,children:e.char},o))})}const j="atlantis:sidebar-collapsed";function M({sidebar:e,children:o,topBarRight:t,title:i="Atlantis",activeId:l=null}){const[c,p]=(0,a.useState)(()=>{try{return"true"===localStorage.getItem(j)}catch{return!1}}),[f,x]=(0,a.useState)(null),b=(0,a.useRef)(),A=()=>p(e=>{const o=!e;try{localStorage.setItem(j,String(o))}catch{}return o}),M=a.useMemo(()=>a.lazy(()=>Promise.resolve().then(n.bind(n,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(d.I.Provider,{value:{collapsed:c,toggle:A,flyout:f,openFlyout:(e,o,n)=>{clearTimeout(b.current),x({entry:e,anchorY:o,onSelect:n})},scheduleFlyoutClose:()=>{b.current=setTimeout(()=>x(null),160)},cancelFlyoutClose:()=>clearTimeout(b.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(g,{children:[e&&(0,r.jsx)(u,{children:(0,r.jsx)(m,{onClick:A,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(s.A,{size:17})})}),(0,r.jsx)(S,{}),i&&(0,r.jsx)(h,{children:i}),t&&(0,r.jsx)(y,{children:t})]}),(0,r.jsxs)(w,{children:[null!=e&&(0,r.jsx)(v,{collapsed:c,children:(0,r.jsx)(k,{children:e})}),(0,r.jsx)($,{children:o})]}),f&&(0,r.jsx)(a.Suspense,{fallback:null,children:(0,r.jsx)(M,{activeId:l})})]})})}n(5185),i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.div`
  overflow: hidden;
`,i.default.div`
  padding-left: ${t.w4.spacing.md};
`,i.default.div`
  display: flex;
  flex-direction: column;
`,i.default.button`
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
`,i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,i.default.button`
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
`;const T=l.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${T} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,i.default.span`
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
`,n(4914);var B=n(1920),C=n(8607),E=n(8479);i.default.button`
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
`,B.A,C.A,E.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const P="documents",R="settings";function F(){return new Promise((e,o)=>{const n=indexedDB.open("atlantis-tools",2);n.onupgradeneeded=e=>{const o=e.target.result;o.objectStoreNames.contains(P)||o.createObjectStore(P,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),o.objectStoreNames.contains(R)||o.createObjectStore(R,{keyPath:"key"})},n.onsuccess=()=>e(n.result),n.onerror=()=>o(n.error)})}let L={async saveDoc(e,o,n){const t=await F(),a={appId:e,name:o,content:n,savedAt:Date.now()};return new Promise((e,o)=>{const n=t.transaction(P,"readwrite").objectStore(P).add(a);n.onsuccess=()=>e(String(n.result)),n.onerror=()=>o(n.error)})},async updateDoc(e,o,n){const t=await F();return new Promise((a,i)=>{const r=t.transaction(P,"readwrite").objectStore(P),l=r.get(Number(e));l.onsuccess=()=>{const e=l.result;if(!e)return void i(new Error("Doc not found"));const t=r.put({...e,name:o,content:n,savedAt:Date.now()});t.onsuccess=()=>a(),t.onerror=()=>i(t.error)},l.onerror=()=>i(l.error)})},async listDocs(e){const o=await F();return new Promise((n,t)=>{const a=o.transaction(P,"readonly").objectStore(P).index("appId").getAll(e);a.onsuccess=()=>n(a.result.map(e=>({...e,id:String(e.id)})).reverse()),a.onerror=()=>t(a.error)})},async deleteDoc(e){const o=await F();return new Promise((n,t)=>{const a=o.transaction(P,"readwrite").objectStore(P).delete(Number(e));a.onsuccess=()=>n(),a.onerror=()=>t(a.error)})},async putSetting(e,o){const n=await F();return new Promise((t,a)=>{const i=n.transaction(R,"readwrite").objectStore(R).put({key:e,value:o});i.onsuccess=()=>t(),i.onerror=()=>a(i.error)})},async getSetting(e){const o=await F();return new Promise((n,t)=>{const a=o.transaction(R,"readonly").objectStore(R).get(e);a.onsuccess=()=>n(a.result?a.result.value:null),a.onerror=()=>t(a.error)})}};function D(e,o,n){return L.saveDoc(e,o,n)}function I(e,o,n){return L.updateDoc(e,o,n)}function N(e,o){return L.putSetting(e,o)}function H(e){return L.getSetting(e)}const K=i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,Y=i.default.div`
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
`,G=i.default.div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,_=i.default.input`
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
`,O=i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,V=i.default.button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?t.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,W=i.default.div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,U=i.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`;function J({onSave:e,onUpdate:o,onCancel:n,existingDoc:t}){const[i,l]=(0,a.useState)(t?.name??""),s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{s.current?.focus(),t&&s.current?.select()},[t]),(0,r.jsx)(K,{onClick:n,children:(0,r.jsxs)(Y,{onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(G,{children:"Save document"}),t&&o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{children:"Update the current version or save as a new one."}),(0,r.jsxs)(O,{children:[(0,r.jsx)(V,{onClick:n,children:"Cancel"}),(0,r.jsxs)(V,{danger:!0,onClick:o,children:['Update "',t.name,'"']})]}),(0,r.jsx)(W,{})]}),(0,r.jsx)(_,{ref:s,value:i,onChange:e=>l(e.target.value),onKeyDown:a=>{"Enter"===a.key&&i.trim()&&(t&&i.trim()===t.name&&o?o():e(i.trim())),"Escape"===a.key&&n()},placeholder:t?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,r.jsxs)(O,{children:[!t&&(0,r.jsx)(V,{onClick:n,children:"Cancel"}),(0,r.jsx)(V,{primary:!0,disabled:!i.trim(),onClick:()=>e(i.trim()),children:"Save as new"})]})]})})}var Z=n(5625),q=n(679),X=n(4872);const Q=i.default.div`
  position: relative;
`,ee=i.default.button`
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
`,oe=i.default.div`
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
`,ne=i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,te=i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,ae=i.default.div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,ie=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
  }
`,re=i.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,le=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,se=i.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-top: 1px;
`,de=i.default.button`
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
`;function ce({appId:e,onLoad:o}){const[n,t]=(0,a.useState)(!1),[i,l]=(0,a.useState)([]),s=(0,a.useRef)(null),d=(0,a.useCallback)(()=>{(function(e){return L.listDocs(e)})(e).then(l).catch(()=>{})},[e]);(0,a.useEffect)(()=>{if(!n)return;d();const e=e=>{s.current&&!s.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[n,d]);return(0,r.jsxs)(Q,{ref:s,children:[(0,r.jsxs)(ee,{onClick:()=>t(e=>!e),children:[(0,r.jsx)(Z.A,{size:14}),"Saved",(0,r.jsx)(q.A,{size:13,style:{marginLeft:2}})]}),(0,r.jsxs)(oe,{open:n,children:[(0,r.jsx)(ne,{children:"Saved versions"}),(0,r.jsx)(te,{children:0===i.length?(0,r.jsx)(ae,{children:"No saved documents yet."}):i.map(e=>{return(0,r.jsxs)(ie,{children:[(0,r.jsxs)(re,{onClick:()=>{o(e.content,e.id,e.name),t(!1)},children:[(0,r.jsx)(le,{children:e.name}),(0,r.jsx)(se,{children:(n=e.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(n)))})]}),(0,r.jsx)(de,{onClick:o=>(async(e,o)=>{e.stopPropagation(),await function(e){return L.deleteDoc(e)}(o),l(e=>e.filter(e=>e.id!==o))})(o,e.id),title:"Delete",children:(0,r.jsx)(X.A,{size:13})})]},e.id);var n})})]})]})}new Set([10751]),new Set([27]),i.default.div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,i.default.section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,i.default.div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,i.default.header`
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
`,i.default.button`
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
`,i.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,i.default.span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,i.default.div`
  flex: 1;
`;const pe=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ge=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ue=l.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${pe} 0.4s ease 0.15s both;
`,i.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,i.default.div`
  position: absolute;
  inset: 0;
  animation: ${ge} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,i.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${t.w4.colors.border};
  animation: ${ue} 1.4s ease-in-out infinite;
`,i.default.span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`;const me=[{id:"playground",label:"Playground",hash:"#/playground",icon:"🧪"},{id:"pad",label:"Pad",hash:"#/mdpad",icon:"✏️"},{id:"chartbuilder",label:"Charts",hash:"#/chartbuilder",icon:"📉"},{id:"csvexplorer",label:"CSV",hash:"#/csvexplorer",icon:"📊"},{id:"regexlab",label:"Regex",hash:"#/regexlab",icon:"🔍"},{id:"jsonexplorer",label:"JSON",hash:"#/jsonexplorer",icon:"🗂️"},{id:"codediff",label:"Diff",hash:"#/codediff",icon:"📋"},{id:"jwtinspector",label:"JWT",hash:"#/jwtinspector",icon:"🔑"},{id:"cronbuilder",label:"Cron",hash:"#/cronbuilder",icon:"⏰"},{id:"colorlab",label:"Colors",hash:"#/colorlab",icon:"🎨"},{id:"apiexplorer",label:"API",hash:"#/apiexplorer",icon:"🛰"}],fe=i.default.nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${t.w4.spacing.sm} 0;
`,xe=i.default.div`
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
`,be=i.default.button`
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
`,he=i.default.span`
  font-size: 15px;
  line-height: 1;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
`,ye=i.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;function we({activeAppId:e}){const{collapsed:o}=(0,d.c)(),n=(0,a.useRef)(null),t=e=>{n.current!==e&&(n.current=e,document.activeElement?.blur(),window.location.hash=e,setTimeout(()=>{n.current=null},50))};return(0,r.jsxs)(fe,{children:[(0,r.jsx)(xe,{collapsed:o,children:"Dev Tools"}),me.map(n=>(0,r.jsxs)(be,{active:e===n.id,collapsed:o,onPointerDown:e=>{0===e.button&&t(n.hash)},onClick:()=>t(n.hash),title:n.label,children:[(0,r.jsx)(he,{children:n.icon}),(0,r.jsx)(ye,{collapsed:o,children:n.label})]},n.id))]})}},217(e,o,n){n.d(o,{w4:()=>a});const t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)"},a={colors:function(){const e={};for(const o of Object.keys(t))e[o]=`var(--at-${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:"\n    outline: 2px solid var(--at-accent);\n    outline-offset: 2px;\n  "}},9359(e,o,n){n.d(o,{$n:()=>x,ms:()=>k,tJ:()=>$,K0:()=>w,M7:()=>A});var t=n(7359),a=n(3233),i=n(458),r=n(5723);const l={ghost:"transparent",accent:"transparent",primary:i.w4.colors.accent,success:"#238636",danger:"#da3633"},s={ghost:i.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:i.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},d={ghost:i.w4.colors.border,accent:i.w4.colors.accent,primary:i.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:i.w4.colors.mainTextMuted,accent:i.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},p={ghost:i.w4.colors.mainText,accent:i.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={sm:"28px",md:"30px"},u={sm:"0 10px",md:"0 12px"},m={sm:"12px",md:"12px"},f=a.default.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>g[e]};
  padding: ${({size:e})=>u[e]};
  background: ${({variant:e})=>l[e]};
  border: 1px solid ${({variant:e})=>d[e]};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${({variant:e})=>c[e]};
  font-size: ${({size:e})=>m[e]};
  font-family: ${i.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>s[e]};
    color: ${({variant:e})=>p[e]};
    border-color: ${({variant:e})=>"ghost"===e?i.w4.colors.accent:d[e]};
  }

  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,x=t.forwardRef(function({variant:e="ghost",size:o="md",icon:n,iconRight:t,children:a,...i},l){return(0,r.jsxs)(f,{ref:l,variant:e,size:o,...i,children:[n,a,t]})}),b={default:i.w4.colors.accent,danger:"#f85149"},h={default:i.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},y=a.default.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${i.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":i.w4.borderRadius.sm};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover:not(:disabled) {
    color: ${({tone:e})=>b[e]};
    background: ${({tone:e})=>h[e]};
    border-color: ${({tone:e})=>b[e]};
  }
  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,w=t.forwardRef(function({active:e=!1,shape:o="square",tone:n="default",children:t,...a},i){return(0,r.jsx)(y,{ref:i,active:e,shape:o,tone:n,...a,children:t})}),z=a.default.div`
  position: relative;
  display: inline-flex;
`,v=a.default.div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`;function k({trigger:e,children:o,align:n="right",open:a,onOpenChange:i}){const[l,s]=(0,t.useState)(!1),d=a??l,c=e=>{i&&i(e),void 0===a&&s(e)},p=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!d)return;const e=e=>{p.current&&!p.current.contains(e.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d]);const g=t.cloneElement(e,{onClick:o=>{e.props.onClick?.(o),c(!d)},"aria-expanded":d,"aria-haspopup":"menu"});return(0,r.jsxs)(z,{ref:p,children:[g,d&&(0,r.jsx)(v,{align:n,role:"menu",children:o})]})}const $=a.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeSm};
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: -2px;
  }
`,A=(a.default.div`
  height: 1px;
  margin: 4px 0;
  background: ${i.w4.colors.sidebarBorder};
`,a.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
`,a.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`);a.default.span`
  width: 1px;
  height: 20px;
  background: ${i.w4.colors.border};
  flex-shrink: 0;
`;var S=n(7207);const j=S.keyframes`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;a.default.div`
  position: relative;
`,a.default.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${i.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  &:hover {
    border-color: ${i.w4.colors.accent};
    background: ${i.w4.colors.sidebarHover};
  }
`,a.default.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,a.default.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${i.w4.colors.accentMuted};
  border: 1px solid ${i.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${i.w4.colors.accent};
  font-family: ${i.w4.typography.fontFamily};
  flex-shrink: 0;
`,a.default.span`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,a.default.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  background: ${i.w4.colors.surfaceRaised};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${j} 0.15s ease;
  backdrop-filter: blur(12px);
`,a.default.div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${i.w4.colors.border};
`,a.default.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`,a.default.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${i.w4.colors.accentMuted};
  border: 1px solid ${i.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.accent};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: 10px;
`,a.default.div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,a.default.div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: 12px;
  color: ${i.w4.colors.mainTextMuted};
  margin-top: 2px;
`,a.default.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":i.w4.colors.mainText};
  }
`;(0,i.PL)("shell:locale").then(e=>{if(function(e){return"en"===e||"pt"===e}(e))try{localStorage.setItem("atlantis:locale",e)}catch{}}).catch(()=>{}),a.default.div`
  display: flex;
  gap: 4px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
`,a.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?i.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":i.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":i.w4.colors.mainText};
  }
`,a.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`,a.default.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${i.w4.colors.border};
  border-radius: 999px;
  color: ${i.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    color: ${i.w4.colors.accent};
    border-color: ${i.w4.colors.accent};
    background: ${i.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`,a.default.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${i.w4.colors.border};
  border-radius: 999px;
  color: ${i.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${i.w4.colors.sidebarHover};
    border: 1px solid ${i.w4.colors.borderSubtle};
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${i.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color 0.15s, border-color 0.15s, background 0.15s;
  }

  &:hover {
    color: ${i.w4.colors.accent};
    border-color: ${i.w4.colors.accent};
    background: ${i.w4.colors.sidebarHover};
  }
  &:hover .kbd {
    color: ${i.w4.colors.accent};
    border-color: ${i.w4.colors.accent}55;
    background: ${i.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`,a.default.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${i.w4.colors.accent};
  border: 1px solid ${i.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${i.w4.colors.accentHover};
    border-color: ${i.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`;a.default.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,a.default.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,a.default.div`
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
`,a.default.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${i.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,a.default.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${i.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,a.default.button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
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
`;const M=S.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;a.default.button`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${i.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
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
      border-color: ${i.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${i.w4.colors.shadowStrong};
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
`,a.default.div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${i.w4.colors.border};
  color: ${i.w4.colors.mainText};

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
    font-family: ${i.w4.typography.fontFamily};
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
    & > .h { height: 7px; background: ${i.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
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
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${i.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
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
      font-family: ${i.w4.typography.fontFamilyMono};
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
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${i.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${i.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${i.w4.colors.mainText}; }
    & .b { color: ${i.w4.colors.mainTextMuted}; opacity: 0.7; }
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
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${i.w4.colors.mainTextMuted}; opacity: 0.6; }
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
      font-family: ${i.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${i.w4.colors.mainTextMuted};
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
      font-family: ${i.w4.typography.fontFamily};
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
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${i.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${i.w4.colors.mainTextMuted}; opacity: 0.75; }
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
      color: ${i.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${i.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${i.w4.typography.fontFamilyMono};
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
      font-family: ${i.w4.typography.fontFamilyMono};
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
      font-family: ${i.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${i.w4.colors.mainText};
    }
  }
`,a.default.div`
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
    font-family: ${i.w4.typography.fontFamilyMono};
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
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${i.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${i.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,a.default.div`
  padding: 6px 14px 16px;
`,a.default.h3`
  margin: 0 0 6px;
  font-family: ${i.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${i.w4.colors.mainText};

  .hash {
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${i.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,a.default.p`
  margin: 0;
  color: ${i.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,a.default.button`
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
  color: ${({pinned:e})=>e?i.w4.colors.accent:i.w4.colors.mainText};
  opacity: ${({pinned:e})=>e?1:0};
  cursor: pointer;
  transition: opacity 0.15s, color 0.15s, border-color 0.15s;
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${i.w4.colors.accent};
    border-color: ${i.w4.colors.accent};
  }
`,a.default.div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 3;
`},7293(e,o,n){n.d(o,{A:()=>x});var t=n(7359),a=n(6965),i=n(2116),r=n(9378),l=n(6004),s=n(1767),d=n(3628),c=n(6016),p=n(9282),g=n(458),u=n(5723);function m(e){switch(e){case"html":return(0,s.qy)();case"css":return(0,d.AH)();case"ts":return(0,c.Q2)({typescript:!0});case"react":return(0,c.Q2)({jsx:!0,typescript:!0});default:return(0,c.Q2)()}}const f=i.Lz.theme({"&":{flex:"1",minHeight:"0",height:"100%",fontSize:"13px",fontFamily:"'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",background:g.w4.colors.mainBg},".cm-scroller":{overflow:"auto",lineHeight:"1.7",fontFamily:"inherit"},".cm-content":{padding:"16px",caretColor:g.w4.colors.accent},".cm-gutters":{background:g.w4.colors.mainBg,border:"none",borderRight:`1px solid ${g.w4.colors.border}`,color:g.w4.colors.sidebarTextMuted},".cm-activeLineGutter":{background:"transparent"},".cm-activeLine":{background:"rgba(88,166,255,0.04)"},".cm-selectionBackground, ::selection":{background:"rgba(88,166,255,0.2) !important"},".cm-cursor":{borderLeftColor:g.w4.colors.accent},"&::-webkit-scrollbar":{width:"6px",height:"6px"},"&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar-thumb":{background:g.w4.colors.border,borderRadius:"3px"}});function x({value:e,onChange:o,lang:n}){const s=(0,t.useRef)(null),d=(0,t.useRef)(null),c=(0,t.useRef)(o);return c.current=o,(0,t.useEffect)(()=>{if(!s.current)return;const o=new i.Lz({state:r.$t.create({doc:e,extensions:[a.oQ,l.bM,f,m(n),i.w4.of([p.Yc]),i.Lz.updateListener.of(e=>{e.docChanged&&c.current(e.state.doc.toString())})]}),parent:s.current});return d.current=o,()=>{o.destroy(),d.current=null}},[n]),(0,t.useEffect)(()=>{const o=d.current;if(!o)return;const n=o.state.doc.toString();n!==e&&o.dispatch({changes:{from:0,to:n.length,insert:e}})},[e]),(0,u.jsx)("div",{ref:s,style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"}})}},9336(e,o,n){n.d(o,{k:()=>t});const t=[{label:"Hello World",html:'<h1>Hello, World!</h1>\n<p>Edit the panels to see live changes.</p>\n<button id="btn">Click me</button>\n<p id="output"></p>',css:"body {\n  font-family: system-ui, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #0d1117;\n  color: #e6edf3;\n  gap: 16px;\n}\n\nh1 {\n  font-size: 2.5rem;\n  background: linear-gradient(135deg, #388bfd, #a371f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nbutton {\n  padding: 10px 24px;\n  background: #388bfd;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: transform 0.1s;\n}\n\nbutton:hover { transform: scale(1.05); }\nbutton:active { transform: scale(0.95); }",js:"const btn = document.getElementById('btn');\nconst output = document.getElementById('output');\nlet count = 0;\n\nbtn.addEventListener('click', () => {\n  count++;\n  output.textContent = `Clicked ${count} time${count !== 1 ? 's' : ''}!`;\n  output.style.color = `hsl(${count * 40}, 80%, 65%)`;\n});"},{label:"CSS Animation",html:'<div class="scene">\n  <div class="orbit orbit-1">\n    <div class="planet planet-1"></div>\n  </div>\n  <div class="orbit orbit-2">\n    <div class="planet planet-2"></div>\n  </div>\n  <div class="orbit orbit-3">\n    <div class="planet planet-3"></div>\n  </div>\n  <div class="sun"></div>\n</div>',css:"body {\n  margin: 0;\n  background: #0d1117;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n\n.scene {\n  position: relative;\n  width: 320px;\n  height: 320px;\n}\n\n.sun {\n  position: absolute;\n  top: 50%; left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px; height: 50px;\n  border-radius: 50%;\n  background: radial-gradient(circle, #ffd700, #ff8c00);\n  box-shadow: 0 0 40px #ff8c00, 0 0 80px rgba(255,140,0,0.4);\n}\n\n.orbit {\n  position: absolute;\n  top: 50%; left: 50%;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: rotate linear infinite;\n}\n\n.orbit-1 { width: 120px; height: 120px; animation-duration: 4s; }\n.orbit-2 { width: 200px; height: 200px; animation-duration: 8s; }\n.orbit-3 { width: 290px; height: 290px; animation-duration: 14s; }\n\n.planet {\n  position: absolute;\n  top: 0; left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border-radius: 50%;\n}\n\n.planet-1 { width: 14px; height: 14px; background: #4fc3f7; }\n.planet-2 { width: 20px; height: 20px; background: #ef5350; }\n.planet-3 { width: 12px; height: 12px; background: #ab47bc; }\n\n@keyframes rotate {\n  from { transform: translate(-50%, -50%) rotate(0deg); }\n  to   { transform: translate(-50%, -50%) rotate(360deg); }\n}",js:"// No JS needed — pure CSS animation"},{label:"Todo List",html:'<div class="app">\n  <h2>Todo List</h2>\n  <div class="input-row">\n    <input id="newTodo" type="text" placeholder="Add a task…" />\n    <button id="addBtn">Add</button>\n  </div>\n  <ul id="list"></ul>\n  <p id="stats"></p>\n</div>',css:"body {\n  font-family: system-ui, sans-serif;\n  background: #0d1117;\n  color: #e6edf3;\n  display: flex;\n  justify-content: center;\n  padding: 40px 16px;\n  margin: 0;\n}\n\n.app {\n  width: 100%;\n  max-width: 400px;\n}\n\nh2 { margin-bottom: 16px; font-size: 1.4rem; }\n\n.input-row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\ninput {\n  flex: 1;\n  padding: 8px 12px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  color: #e6edf3;\n  font-size: 14px;\n  outline: none;\n}\n\ninput:focus { border-color: #388bfd; }\n\nbutton {\n  padding: 8px 16px;\n  background: #388bfd;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\nbutton:hover { background: #58a6ff; }\n\nul { list-style: none; padding: 0; margin: 0 0 12px; }\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #161b22;\n  border: 1px solid #21262d;\n  border-radius: 6px;\n  margin-bottom: 6px;\n  font-size: 14px;\n}\n\nli.done span { text-decoration: line-through; opacity: 0.5; }\n\nli span { flex: 1; cursor: pointer; }\nli .del { color: #f87171; cursor: pointer; font-size: 18px; line-height: 1; }\n#stats { font-size: 12px; color: #8b949e; }",js:"const input = document.getElementById('newTodo');\nconst addBtn = document.getElementById('addBtn');\nconst list = document.getElementById('list');\nconst stats = document.getElementById('stats');\nlet todos = [];\n\nfunction render() {\n  list.innerHTML = '';\n  todos.forEach((todo, i) => {\n    const li = document.createElement('li');\n    if (todo.done) li.classList.add('done');\n\n    const span = document.createElement('span');\n    span.textContent = todo.text;\n    span.addEventListener('click', () => {\n      todos[i].done = !todos[i].done;\n      render();\n    });\n\n    const del = document.createElement('span');\n    del.className = 'del';\n    del.textContent = '×';\n    del.addEventListener('click', () => {\n      todos.splice(i, 1);\n      render();\n    });\n\n    li.append(span, del);\n    list.appendChild(li);\n  });\n\n  const done = todos.filter(t => t.done).length;\n  stats.textContent = `${done}/${todos.length} completed`;\n}\n\nfunction addTodo() {\n  const text = input.value.trim();\n  if (!text) return;\n  todos.push({ text, done: false });\n  input.value = '';\n  render();\n}\n\naddBtn.addEventListener('click', addTodo);\ninput.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });\n\n// Seed with some todos\ntodos = [\n  { text: 'Build an amazing app', done: true },\n  { text: 'Write tests', done: false },\n  { text: 'Deploy to production', done: false },\n];\nrender();"},{label:"Canvas — Particles",html:'<canvas id="c"></canvas>',css:"html, body {\n  margin: 0;\n  background: #0d1117;\n  width: 100%; height: 100%;\n  overflow: hidden;\n}\ncanvas { display: block; }",js:"const canvas = document.getElementById('c');\nconst ctx = canvas.getContext('2d');\n\nfunction resize() {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n}\nresize();\nwindow.addEventListener('resize', resize);\n\nconst particles = Array.from({ length: 120 }, () => ({\n  x: Math.random() * canvas.width,\n  y: Math.random() * canvas.height,\n  vx: (Math.random() - 0.5) * 0.8,\n  vy: (Math.random() - 0.5) * 0.8,\n  r: Math.random() * 2 + 1,\n  hue: Math.random() * 60 + 200,\n}));\n\nlet mouse = { x: -9999, y: -9999 };\ncanvas.addEventListener('mousemove', e => {\n  mouse.x = e.clientX;\n  mouse.y = e.clientY;\n});\n\nfunction draw() {\n  ctx.fillStyle = 'rgba(13,17,23,0.15)';\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n  for (const p of particles) {\n    p.x += p.vx;\n    p.y += p.vy;\n    if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;\n    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;\n\n    ctx.beginPath();\n    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);\n    ctx.fillStyle = `hsl(${p.hue}, 80%, 65%)`;\n    ctx.fill();\n  }\n\n  // Draw lines to nearby particles & mouse\n  for (let i = 0; i < particles.length; i++) {\n    for (let j = i + 1; j < particles.length; j++) {\n      const dx = particles[i].x - particles[j].x;\n      const dy = particles[i].y - particles[j].y;\n      const dist = Math.sqrt(dx * dx + dy * dy);\n      if (dist < 100) {\n        ctx.strokeStyle = `rgba(88,166,255,${1 - dist / 100})`;\n        ctx.lineWidth = 0.5;\n        ctx.beginPath();\n        ctx.moveTo(particles[i].x, particles[i].y);\n        ctx.lineTo(particles[j].x, particles[j].y);\n        ctx.stroke();\n      }\n    }\n\n    const dx = particles[i].x - mouse.x;\n    const dy = particles[i].y - mouse.y;\n    const dist = Math.sqrt(dx * dx + dy * dy);\n    if (dist < 150) {\n      ctx.strokeStyle = `rgba(163,113,247,${1 - dist / 150})`;\n      ctx.lineWidth = 1;\n      ctx.beginPath();\n      ctx.moveTo(particles[i].x, particles[i].y);\n      ctx.lineTo(mouse.x, mouse.y);\n      ctx.stroke();\n    }\n  }\n\n  requestAnimationFrame(draw);\n}\n\ndraw();"},{label:"Clock",html:'<canvas id="clock" width="300" height="300"></canvas>',css:"body {\n  margin: 0;\n  background: #0d1117;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}",js:"const canvas = document.getElementById('clock');\nconst ctx = canvas.getContext('2d');\nconst cx = 150, cy = 150, R = 130;\n\nfunction drawClock() {\n  ctx.clearRect(0, 0, 300, 300);\n\n  // Face\n  ctx.beginPath();\n  ctx.arc(cx, cy, R, 0, Math.PI * 2);\n  ctx.fillStyle = '#161b22';\n  ctx.fill();\n  ctx.strokeStyle = '#388bfd';\n  ctx.lineWidth = 3;\n  ctx.stroke();\n\n  // Hour marks\n  for (let i = 0; i < 12; i++) {\n    const angle = (i * Math.PI) / 6;\n    const x1 = cx + Math.sin(angle) * (R - 12);\n    const y1 = cy - Math.cos(angle) * (R - 12);\n    const x2 = cx + Math.sin(angle) * (R - 4);\n    const y2 = cy - Math.cos(angle) * (R - 4);\n    ctx.beginPath();\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.strokeStyle = '#8b949e';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n  }\n\n  const now = new Date();\n  const s = now.getSeconds() + now.getMilliseconds() / 1000;\n  const m = now.getMinutes() + s / 60;\n  const h = (now.getHours() % 12) + m / 60;\n\n  const hand = (angle, len, width, color) => {\n    ctx.save();\n    ctx.translate(cx, cy);\n    ctx.rotate(angle);\n    ctx.beginPath();\n    ctx.moveTo(0, 8);\n    ctx.lineTo(0, -len);\n    ctx.strokeStyle = color;\n    ctx.lineWidth = width;\n    ctx.lineCap = 'round';\n    ctx.stroke();\n    ctx.restore();\n  };\n\n  hand((h * Math.PI) / 6, 70, 5, '#e6edf3');\n  hand((m * Math.PI) / 30, 95, 3, '#58a6ff');\n  hand((s * Math.PI) / 30, 105, 1.5, '#f87171');\n\n  // Center dot\n  ctx.beginPath();\n  ctx.arc(cx, cy, 5, 0, Math.PI * 2);\n  ctx.fillStyle = '#f87171';\n  ctx.fill();\n\n  requestAnimationFrame(drawClock);\n}\n\ndrawClock();"},{label:"TypeScript — Typed Utils",html:'<div id="output"></div>',css:"body {\n  font-family: system-ui, sans-serif;\n  background: #0d1117;\n  color: #e6edf3;\n  padding: 32px;\n  margin: 0;\n  line-height: 1.6;\n}\n\n#output { max-width: 560px; }\n\n.section {\n  margin-bottom: 24px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 8px;\n  padding: 16px 20px;\n}\n\n.label {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #3b82f6;\n  margin-bottom: 8px;\n}\n\n.value { font-size: 14px; color: #c9d1d9; }\n.tag {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  margin: 2px;\n}",js:"",ts:"// TypeScript utilities with full type safety\n\ntype Status = 'pending' | 'active' | 'completed' | 'archived';\n\ninterface Task {\n  id: number;\n  title: string;\n  status: Status;\n  tags: string[];\n  createdAt: Date;\n}\n\nfunction groupBy<T, K extends string>(\n  items: T[],\n  keyFn: (item: T) => K\n): Record<K, T[]> {\n  return items.reduce((acc, item) => {\n    const key = keyFn(item);\n    if (!acc[key]) acc[key] = [];\n    acc[key].push(item);\n    return acc;\n  }, {} as Record<K, T[]>);\n}\n\nfunction formatRelative(date: Date): string {\n  const diff = Math.floor((Date.now() - date.getTime()) / 1000);\n  if (diff < 60) return `${diff}s ago`;\n  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;\n  return `${Math.floor(diff / 3600)}h ago`;\n}\n\nconst STATUS_COLOR: Record<Status, string> = {\n  pending: '#d29922',\n  active: '#3b82f6',\n  completed: '#3fb950',\n  archived: '#8b949e',\n};\n\nconst tasks: Task[] = [\n  { id: 1, title: 'Design system', status: 'completed', tags: ['ui', 'design'], createdAt: new Date(Date.now() - 7200000) },\n  { id: 2, title: 'Auth flow', status: 'active', tags: ['backend', 'security'], createdAt: new Date(Date.now() - 1800000) },\n  { id: 3, title: 'Unit tests', status: 'pending', tags: ['testing'], createdAt: new Date(Date.now() - 300000) },\n  { id: 4, title: 'CI pipeline', status: 'active', tags: ['devops'], createdAt: new Date(Date.now() - 600000) },\n  { id: 5, title: 'Docs', status: 'archived', tags: ['docs'], createdAt: new Date(Date.now() - 86400000) },\n];\n\nconst grouped = groupBy(tasks, t => t.status);\n\nconst out = document.getElementById('output')!;\n\n(Object.entries(grouped) as [Status, Task[]][]).forEach(([status, items]) => {\n  const div = document.createElement('div');\n  div.className = 'section';\n  div.innerHTML = `\n    <div class=\"label\" style=\"color:${STATUS_COLOR[status]}\">${status} (${items.length})</div>\n    ${items.map(t => `\n      <div class=\"value\">\n        <strong>${t.title}</strong>\n        <span style=\"color:#8b949e;font-size:12px;margin-left:8px\">${formatRelative(t.createdAt)}</span><br>\n        ${t.tags.map(tag => `<span class=\"tag\" style=\"background:#161b22;border:1px solid #30363d\">#${tag}</span>`).join('')}\n      </div>\n    `).join('')}\n  `;\n  out.appendChild(div);\n});"},{label:"React — Counter",html:'<div id="root"></div>',css:"body {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: #0d1117;\n  color: #e6edf3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n\n.card {\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n  padding: 40px 48px;\n  text-align: center;\n  min-width: 260px;\n}\n\nh2 { margin: 0 0 8px; font-size: 1.1rem; color: #8b949e; font-weight: 500; }\n\n.count {\n  font-size: 5rem;\n  font-weight: 700;\n  line-height: 1;\n  margin: 16px 0 32px;\n  background: linear-gradient(135deg, #61dafb, #a371f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.buttons { display: flex; gap: 12px; justify-content: center; }\n\nbutton {\n  width: 48px; height: 48px;\n  border-radius: 50%;\n  border: 1px solid #30363d;\n  background: #21262d;\n  color: #e6edf3;\n  font-size: 1.4rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\nbutton:hover { background: #388bfd; border-color: #388bfd; }\nbutton:active { transform: scale(0.92); }\n\n.reset {\n  margin-top: 20px;\n  width: auto;\n  padding: 0 20px;\n  border-radius: 6px;\n  font-size: 13px;\n  color: #8b949e;\n  height: 32px;\n}",js:"",react:'const { useState } = React;\n\nfunction Counter() {\n  const [count, setCount] = useState<number>(0);\n\n  return (\n    <div className="card">\n      <h2>React Counter</h2>\n      <div className="count">{count}</div>\n      <div className="buttons">\n        <button onClick={() => setCount(c => c - 1)}>−</button>\n        <button onClick={() => setCount(c => c + 1)}>+</button>\n      </div>\n      <br />\n      <button className="reset" onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\'root\')!).render(<Counter />);'},{label:"React — Todo App",html:'<div id="root"></div>',css:"body {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: #0d1117;\n  color: #e6edf3;\n  display: flex;\n  justify-content: center;\n  padding: 40px 16px;\n}\n\n.app { width: 100%; max-width: 420px; }\nh2 { margin: 0 0 20px; }\n\n.row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\ninput {\n  flex: 1;\n  padding: 8px 12px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  color: #e6edf3;\n  font-size: 14px;\n  outline: none;\n}\ninput:focus { border-color: #61dafb; }\n\nbutton {\n  padding: 8px 16px;\n  background: #238636;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\nbutton:hover { background: #2ea043; }\n\nul { list-style: none; padding: 0; margin: 0; }\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #161b22;\n  border: 1px solid #21262d;\n  border-radius: 6px;\n  margin-bottom: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: border-color 0.12s;\n}\nli:hover { border-color: #30363d; }\nli.done { opacity: 0.55; }\nli.done .text { text-decoration: line-through; }\n.check { font-size: 16px; flex-shrink: 0; }\n.text { flex: 1; }\n.del { color: #f87171; cursor: pointer; font-size: 18px; padding: 0 4px; }\n.stats { font-size: 12px; color: #8b949e; margin-top: 12px; }",js:"",react:"const { useState } = React;\n\ninterface Todo {\n  id: number;\n  text: string;\n  done: boolean;\n}\n\nlet nextId = 4;\n\nfunction App() {\n  const [todos, setTodos] = useState<Todo[]>([\n    { id: 1, text: 'Build something awesome', done: true },\n    { id: 2, text: 'Add TypeScript types', done: false },\n    { id: 3, text: 'Deploy to production', done: false },\n  ]);\n  const [input, setInput] = useState('');\n\n  const add = () => {\n    const text = input.trim();\n    if (!text) return;\n    setTodos(prev => [...prev, { id: nextId++, text, done: false }]);\n    setInput('');\n  };\n\n  const toggle = (id: number) =>\n    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));\n\n  const remove = (id: number) =>\n    setTodos(prev => prev.filter(t => t.id !== id));\n\n  const done = todos.filter(t => t.done).length;\n\n  return (\n    <div className=\"app\">\n      <h2>React Todo</h2>\n      <div className=\"row\">\n        <input\n          value={input}\n          onChange={e => setInput(e.target.value)}\n          onKeyDown={e => e.key === 'Enter' && add()}\n          placeholder=\"Add a task…\"\n        />\n        <button onClick={add}>Add</button>\n      </div>\n      <ul>\n        {todos.map(todo => (\n          <li key={todo.id} className={todo.done ? 'done' : ''}>\n            <span className=\"check\" onClick={() => toggle(todo.id)}>\n              {todo.done ? '✅' : '⬜'}\n            </span>\n            <span className=\"text\" onClick={() => toggle(todo.id)}>{todo.text}</span>\n            <span className=\"del\" onClick={() => remove(todo.id)}>×</span>\n          </li>\n        ))}\n      </ul>\n      <p className=\"stats\">{done}/{todos.length} completed</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')!).render(<App />);"}]}}]);
//# sourceMappingURL=908.20aff45b609c2730ed21.js.map