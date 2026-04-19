"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[913],{4914(e,o,a){a.d(o,{FlyoutPanel:()=>h});var t=a(7359),n=a(3233),r=a(7207),i=a(255),l=a(217),s=a(5959),c=a(5185),d=a(5723);const m=r.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=n.default.div`
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
  animation: ${m} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
`,p=n.default.div`
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
`,g=n.default.button`
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
`;function f({iconKey:e}){const o=e?c.t[e]??i.A:i.A;return(0,d.jsx)(o,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:o,onSelect:a}){return(0,d.jsx)(d.Fragment,{children:e.map(e=>e.children?(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(x,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,d.jsxs)(g,{active:o===e.id,onClick:()=>a(e),children:[(0,d.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function h({activeId:e}){const{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:t}=(0,s.c)();if(!o)return null;const n=o.entry.icon?c.t[o.entry.icon]??i.A:i.A;return(0,d.jsxs)(u,{anchorY:o.anchorY,onMouseEnter:t,onMouseLeave:a,children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(n,{size:13,strokeWidth:2}),o.entry.name]}),(0,d.jsx)(x,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},5959(e,o,a){a.d(o,{I:()=>n,c:()=>r});var t=a(7359);const n=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,t.useContext)(n)},5185(e,o,a){a.d(o,{t:()=>be});var t=a(9510),n=a(9038),r=a(7400),i=a(7561),l=a(8207),s=a(7902),c=a(6896),d=a(3013),m=a(2887),u=a(7901),p=a(9848),g=a(2164),f=a(3045),x=a(3775),h=a(3539),b=a(1783),y=a(9416),w=a(1837),z=a(7167),v=a(4494),k=a(2314),$=a(5751),A=a(255),j=a(9633),S=a(2946),M=a(822),T=a(6720),C=a(8456),_=a(3317),B=a(2709),E=a(9301),P=a(8006),F=a(3517),R=a(7032),D=a(6949),I=a(8218),L=a(6829),N=a(5553),H=a(9591),K=a(9923),Y=a(2820),U=a(4621),V=a(8479),G=a(2534),O=a(6673),W=a(7490),J=a(9033),Z=a(5775),X=a(1365),q=a(2937),Q=a(9821),ee=a(5912),oe=a(158),ae=a(8641),te=a(8607),ne=a(3249),re=a(1821),ie=a(5889),le=a(9655),se=a(7170),ce=a(9161),de=a(1849),me=a(1604),ue=a(3142),pe=a(1187),ge=a(7747),fe=a(2932),xe=a(4525),he=a(7230);const be={activity:c.A,"a-large-small":s.A,apple:d.A,"arrow-right":m.A,"bar-chart-2":t.A,book:p.A,"book-open":u.A,briefcase:f.A,calendar:x.A,clock:b.A,"circle-dot":h.A,cloud:y.A,compass:w.A,cpu:z.A,droplets:v.A,feather:k.A,file:A.A,"file-text":$.A,folder:j.A,"git-branch":S.A,github:M.A,globe:T.A,grid:r.A,hand:C.A,hash:_.A,heart:B.A,key:P.A,hexagon:E.A,home:i.A,landmark:F.A,layers:l.A,"layout-grid":R.A,leaf:D.A,lightbulb:I.A,list:L.A,map:H.A,"map-pin":N.A,"message-circle":K.A,"message-square":Y.A,minus:U.A,monitor:V.A,mountain:G.A,package:O.A,palette:W.A,"pen-tool":J.A,"pie-chart":n.A,plane:Z.A,plus:X.A,ruler:q.A,shirt:Q.A,slash:ee.A,square:oe.A,star:ae.A,sun:te.A,terminal:ne.A,thermometer:re.A,triangle:ie.A,trophy:le.A,truck:se.A,type:ce.A,users:de.A,"volume-2":me.A,watch:ue.A,waves:pe.A,wind:ge.A,wrench:fe.A,x:xe.A,zap:he.A,bot:g.A}},9200(e,o,a){a.d(o,{PE:()=>M,VN:()=>G,w4:()=>t.w4,fy:()=>I,xc:()=>U});var t=a(217),n=a(7359),r=a(3233),i=a(5723);r.default.button`
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
`,r.default.div`
  position: relative;
`;var l=a(7207),s=a(3661),c=a(5959);const d="260px",m="56px",u=r.default.header`
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
`,p=r.default.div`
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,g=r.default.button`
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
`,x=r.default.button`
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
`,h=r.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${f} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,b=r.default.div`
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
`,y=r.default.div`
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
`,w=r.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=r.default.div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,v=r.default.aside`
  width: ${({collapsed:e})=>e?m:d};
  min-width: ${({collapsed:e})=>e?m:d};
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
`,k=r.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,$=r.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function j(){return(0,i.jsx)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,o)=>(0,i.jsx)(h,{index:o,accent:e.accent,children:e.char},o))})}const S="atlantis:sidebar-collapsed";function M({sidebar:e,children:o,topBarRight:t,title:r="Atlantis",activeId:l=null}){const[d,m]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(S)}catch{return!1}}),[f,x]=(0,n.useState)(null),h=(0,n.useRef)(),A=()=>m(e=>{const o=!e;try{localStorage.setItem(S,String(o))}catch{}return o}),M=n.useMemo(()=>n.lazy(()=>Promise.resolve().then(a.bind(a,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,i.jsx)(c.I.Provider,{value:{collapsed:d,toggle:A,flyout:f,openFlyout:(e,o,a)=>{clearTimeout(h.current),x({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{h.current=setTimeout(()=>x(null),160)},cancelFlyoutClose:()=>clearTimeout(h.current)},children:(0,i.jsxs)(z,{children:[(0,i.jsxs)(u,{children:[e&&(0,i.jsx)(p,{children:(0,i.jsx)(g,{onClick:A,title:d?"Expand sidebar":"Collapse sidebar",children:(0,i.jsx)(s.A,{size:17})})}),(0,i.jsx)(j,{}),r&&(0,i.jsx)(b,{children:r}),t&&(0,i.jsx)(y,{children:t})]}),(0,i.jsxs)(w,{children:[null!=e&&(0,i.jsx)(v,{collapsed:d,children:(0,i.jsx)(k,{children:e})}),(0,i.jsx)($,{children:o})]}),f&&(0,i.jsx)(n.Suspense,{fallback:null,children:(0,i.jsx)(M,{activeId:l})})]})})}a(5185),r.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,r.default.div`
  overflow: hidden;
`,r.default.div`
  padding-left: ${t.w4.spacing.md};
`,r.default.div`
  display: flex;
  flex-direction: column;
`,r.default.button`
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
`,r.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,r.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,r.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,r.default.button`
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
`;r.default.div`
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
`,r.default.span`
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
`,a(4914);var C=a(1920),_=a(8607),B=a(8479);r.default.button`
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
`,C.A,_.A,B.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const E="documents",P="settings";function F(){return new Promise((e,o)=>{const a=indexedDB.open("atlantis-tools",2);a.onupgradeneeded=e=>{const o=e.target.result;o.objectStoreNames.contains(E)||o.createObjectStore(E,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),o.objectStoreNames.contains(P)||o.createObjectStore(P,{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>o(a.error)})}let R={async saveDoc(e,o,a){const t=await F(),n={appId:e,name:o,content:a,savedAt:Date.now()};return new Promise((e,o)=>{const a=t.transaction(E,"readwrite").objectStore(E).add(n);a.onsuccess=()=>e(String(a.result)),a.onerror=()=>o(a.error)})},async updateDoc(e,o,a){const t=await F();return new Promise((n,r)=>{const i=t.transaction(E,"readwrite").objectStore(E),l=i.get(Number(e));l.onsuccess=()=>{const e=l.result;if(!e)return void r(new Error("Doc not found"));const t=i.put({...e,name:o,content:a,savedAt:Date.now()});t.onsuccess=()=>n(),t.onerror=()=>r(t.error)},l.onerror=()=>r(l.error)})},async listDocs(e){const o=await F();return new Promise((a,t)=>{const n=o.transaction(E,"readonly").objectStore(E).index("appId").getAll(e);n.onsuccess=()=>a(n.result.map(e=>({...e,id:String(e.id)})).reverse()),n.onerror=()=>t(n.error)})},async deleteDoc(e){const o=await F();return new Promise((a,t)=>{const n=o.transaction(E,"readwrite").objectStore(E).delete(Number(e));n.onsuccess=()=>a(),n.onerror=()=>t(n.error)})},async putSetting(e,o){const a=await F();return new Promise((t,n)=>{const r=a.transaction(P,"readwrite").objectStore(P).put({key:e,value:o});r.onsuccess=()=>t(),r.onerror=()=>n(r.error)})},async getSetting(e){const o=await F();return new Promise((a,t)=>{const n=o.transaction(P,"readonly").objectStore(P).get(e);n.onsuccess=()=>a(n.result?n.result.value:null),n.onerror=()=>t(n.error)})}};function D(){const e="undefined"!=typeof window?window.location.hash:"",o=e.indexOf("?");if(-1===o)return{};const a={};for(const t of e.slice(o+1).split("&")){if(!t)continue;const e=t.indexOf("=");-1===e?a[decodeURIComponent(t)]="":a[decodeURIComponent(t.slice(0,e))]=decodeURIComponent(t.slice(e+1))}return a}function I(){const[e,o]=(0,n.useState)(D);return(0,n.useEffect)(()=>{const e=()=>o(D());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),e}r.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,r.default.div`
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
`,r.default.div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,r.default.input`
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
`,r.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,r.default.button`
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
`,r.default.div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,r.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,r.default.div`
  position: relative;
`,r.default.button`
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
`,r.default.div`
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
`,r.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,r.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,r.default.div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
  }
`,r.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,r.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,r.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-top: 1px;
`,r.default.button`
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
`;const L="shell:profile",N="atlantis:profile-change",H=["tech","movies","learning","games","news","space"],K={interests:[],ageMode:"adult"};function Y(e){if(!e||"object"!=typeof e)return K;const o=e;return{interests:Array.isArray(o.interests)?o.interests.filter(e=>H.includes(e)):[],ageMode:"kid"===o.ageMode||"teen"===o.ageMode||"adult"===o.ageMode?o.ageMode:"adult"}}function U(){const[e,o]=(0,n.useState)(K);return(0,n.useEffect)(()=>{let e=!1;var a;(a=L,R.getSetting(a)).then(a=>{if(!e&&a)try{o(Y(JSON.parse(a)))}catch{}});const t=e=>{const a=e.detail;a&&o(a)};return window.addEventListener(N,t),()=>{e=!0,window.removeEventListener(N,t)}},[]),[e,(0,n.useCallback)(async e=>{const a=Y(e);var t,n;o(a),window.dispatchEvent(new CustomEvent(N,{detail:a})),await(t=L,n=JSON.stringify(a),R.putSetting(t,n))},[])]}new Set([10751]);const V=new Set([27]);function G(e,o){if("adult"===o)return e;const a=e.filter(e=>!0!==e.adult);return"teen"===o?a.filter(e=>!(e.genre_ids??[]).some(e=>V.has(e))):a.filter(e=>(e.genre_ids??[]).includes(10751))}r.default.div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,r.default.section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,r.default.div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,r.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,r.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,r.default.header`
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
`,r.default.button`
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
`,r.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,r.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,r.default.span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,r.default.div`
  flex: 1;
`;const O=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,W=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,J=l.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${O} 0.4s ease 0.15s both;
`,r.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,r.default.div`
  position: absolute;
  inset: 0;
  animation: ${W} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,r.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${t.w4.colors.border};
  animation: ${J} 1.4s ease-in-out infinite;
`,r.default.span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},217(e,o,a){a.d(o,{w4:()=>r});const t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},n="--at-",r={colors:function(){const e={};for(const o of Object.keys(t))e[o]=`var(${n}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${n}suiteLab)`,vida:`var(${n}suiteVida)`,learn:`var(${n}suiteLearn)`,games:`var(${n}suiteGames)`,ent:`var(${n}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:"\n    outline: 2px solid var(--at-accent);\n    outline-offset: 2px;\n  "}},5056(e,o,a){a.d(o,{H:()=>h});var t=a(7359),n=a(3233),r=a(9200),i=a(5723);const l=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${r.w4.colors.mainBg};
  padding: ${r.w4.spacing.xl};
`,s=n.default.div`
  width: 100%;
  max-width: 480px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
`,c=n.default.div`
  font-size: 48px;
  text-align: center;
`,d=n.default.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,m=n.default.p`
  font-size: 14px;
  color: ${r.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.6;
  margin: 0;
`,u=n.default.a`
  color: ${r.w4.colors.accent};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,p=n.default.label`
  font-size: 13px;
  font-weight: 600;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,g=n.default.input`
  width: 100%;
  padding: 12px ${r.w4.spacing.md};
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.mainText};
  font-size: 14px;
  font-family: ${r.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${r.w4.colors.accent};
  }

  &::placeholder {
    color: ${r.w4.colors.mainTextMuted};
    opacity: 0.5;
  }
`,f=n.default.button`
  padding: 12px;
  background: ${r.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${r.w4.borderRadius.md};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,x=n.default.p`
  font-size: 13px;
  color: #f85149;
  text-align: center;
  margin: 0;
`;function h({onSave:e}){const[o,a]=(0,t.useState)(""),[n,r]=(0,t.useState)(!1),[h,b]=(0,t.useState)(""),y=async()=>{const a=o.trim();if(a){r(!0),b("");try{if(!(await fetch(`https://api.themoviedb.org/3/configuration?api_key=${a}`)).ok)throw new Error("Invalid key");e(a)}catch{b("Could not validate API key. Check it and try again.")}finally{r(!1)}}};return(0,i.jsx)(l,{children:(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{children:"🎬"}),(0,i.jsx)(d,{children:"Movies & Series"}),(0,i.jsxs)(m,{children:["This app uses the free"," ",(0,i.jsx)(u,{href:"https://www.themoviedb.org/settings/api",target:"_blank",rel:"noreferrer",children:"TMDB API"})," ","to browse movies, TV shows, and documentaries — including where to stream them.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Create a free account on TMDB and paste your ",(0,i.jsx)("strong",{children:"API Key (v3)"})," below."]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,i.jsx)(p,{htmlFor:"apikey",children:"TMDB API Key (v3)"}),(0,i.jsx)(g,{id:"apikey",type:"password",placeholder:"e.g. a1b2c3d4e5f6...",value:o,onChange:e=>a(e.target.value),onKeyDown:e=>"Enter"===e.key&&y(),autoFocus:!0})]}),h&&(0,i.jsx)(x,{children:h}),(0,i.jsx)(f,{onClick:y,disabled:!o.trim()||n,children:n?"Validating…":"Connect"})]})})}},6127(e,o,a){a.d(o,{U:()=>X});var t=a(7359),n=a(3233),r=a(9200),i=a(302),l=a(9753),s=a(8991),c=a(7207),d=a(8641),m=a(5569),u=a(140),p=a(7390),g=a(5723);const f=n.default.div`
  position: relative;
  width: 150px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.22s ease;
  -webkit-tap-highlight-color: transparent;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.06);
      box-shadow: 0 14px 44px rgba(0, 0, 0, 0.75);
      z-index: 2;
    }
    &:hover button[data-eye] {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`,x=n.default.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
  background: ${r.w4.colors.surface};
`,h=n.default.div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(135deg, ${r.w4.colors.surface} 0%, ${r.w4.colors.surfaceRaised} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 28px;
`,b=n.default.span`
  font-size: 10px;
  color: ${r.w4.colors.mainTextMuted};
  text-align: center;
  padding: 0 8px;
  line-height: 1.3;
`,y=n.default.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  padding-top: 40px;
  background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,w=n.default.div`
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,z=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`,v=n.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 10px;
  font-weight: 700;
  color: #e3b341;
`,k=n.default.span`
  font-size: 10px;
  color: rgba(255,255,255,0.55);
`,$=n.default.span`
  position: absolute;
  top: 7px;
  left: 7px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 4px;
  backdrop-filter: blur(8px);
  background: ${({kind:e})=>"movie"===e?"rgba(227,179,65,0.85)":"rgba(88,166,255,0.85)"};
  color: #000;
  z-index: 2;
`,A=n.default.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.3);
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(8px);
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.2s, transform 0.2s cubic-bezier(0.34,1.56,0.64,1),
              background 0.15s, border-color 0.15s;
  z-index: 2;

  &:hover {
    background: rgba(88,166,255,0.5);
    border-color: rgba(88,166,255,0.7);
    color: #fff;
    transform: scale(1.1);
  }
  &:active { transform: scale(0.9); }
`,j=c.keyframes`
  from { opacity: 0; transform: scale(0.92) translateY(8px); }
  to   { opacity: 1; transform: scale(1)    translateY(0); }
`,S=n.default.div`
  position: fixed;
  top: ${({top:e})=>e}px;
  left: ${({left:e})=>e}px;
  width: 300px;
  background: ${r.w4.colors.surfaceRaised};
  border-radius: 14px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.08);
  overflow: hidden;
  z-index: 9999;
  animation: ${j} 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  @media (max-width: 480px) {
    width: 280px;
  }
`,M=n.default.div`
  width: 100%;
  padding-top: 56.25%;
  background: url(${({src:e})=>e}) center/cover no-repeat;
  background-color: ${r.w4.colors.surfaceRaised};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 65%;
    background: linear-gradient(to bottom, transparent, ${r.w4.colors.surfaceRaised});
  }
`,T=n.default.div`
  width: 100%;
  padding-top: 56.25%;
  background: linear-gradient(135deg, ${r.w4.colors.surface} 0%, ${r.w4.colors.surfaceRaised} 100%);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to bottom, transparent, ${r.w4.colors.surfaceRaised});
  }
`,C=n.default.div`
  padding: 10px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`,_=n.default.div`
  font-size: 14px;
  font-weight: 800;
  color: ${r.w4.colors.mainText};
  line-height: 1.25;
  letter-spacing: -0.02em;
`,B=n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,E=n.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 700;
  color: #e3b341;
`,P=n.default.span`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
`,F=n.default.span`
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 4px;
  background: ${({kind:e})=>"movie"===e?"rgba(227,179,65,0.15)":"rgba(88,166,255,0.15)"};
  color: ${({kind:e})=>"movie"===e?"#e3b341":"#58a6ff"};
`,R=n.default.p`
  font-size: 11px;
  line-height: 1.6;
  color: ${r.w4.colors.mainTextMuted};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,D=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 0;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${r.w4.colors.border};
  background: rgba(88,166,255,0.12);
  color: ${r.w4.colors.accent};
  transition: background 0.15s;
  width: 100%;

  &:hover { background: rgba(88,166,255,0.22); }
  &:active { transform: scale(0.97); }
`,I=300;function L({item:e,rect:o,onOpen:a,onMouseEnter:t,onMouseLeave:n,withBackdrop:r,onBackdropTap:i}){const l=function(e){const o=window.innerWidth,a=window.innerHeight;if(o<500){const t=Math.max(8,(o-I)/2);return{top:Math.max(8,Math.min(e.bottom+8,a-310-8)),left:t}}let t=e.right+10;t+I>o-8&&(t=e.left-I-10),t=Math.max(8,Math.min(t,o-I-8));let n=e.top+e.height/2-155;return n=Math.max(8,Math.min(n,a-310-8)),{top:n,left:t}}(o),c=(0,p.rS)(e),u=(0,p.Ox)(e),f=(0,p.U7)(e.backdrop_path,"w780");return s.createPortal((0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)("div",{style:{position:"fixed",inset:0,zIndex:9998},onClick:i}),(0,g.jsxs)(S,{top:l.top,left:l.left,onMouseEnter:t,onMouseLeave:n,onClick:a,style:{cursor:"pointer"},children:[f?(0,g.jsx)(M,{src:f}):(0,g.jsx)(T,{}),(0,g.jsxs)(C,{children:[(0,g.jsx)(_,{children:c}),(0,g.jsxs)(B,{children:[(0,g.jsxs)(E,{children:[(0,g.jsx)(d.A,{size:11,fill:"currentColor"}),e.vote_average.toFixed(1)]}),u&&(0,g.jsx)(P,{children:u}),(0,g.jsx)(F,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV"})]}),e.overview&&(0,g.jsx)(R,{children:e.overview}),(0,g.jsxs)(D,{onClick:a,children:[(0,g.jsx)(m.A,{size:13}),"More Info"]})]})]})]}),document.body)}function N({item:e,onClick:o}){const a=(0,p.rS)(e),n=(0,p.Ox)(e),r=(0,p.HD)(e.poster_path),i=(0,t.useRef)(null),l=(0,t.useRef)(),s=(0,t.useRef)(),c=(0,t.useRef)(null),m=(0,t.useRef)(!1),[j,S]=(0,t.useState)(!1),[M,T]=(0,t.useState)(null),[C,_]=(0,t.useState)(!1);(0,t.useEffect)(()=>()=>{clearTimeout(l.current),clearTimeout(s.current)},[]);const B=(0,t.useCallback)((e,o)=>{T(e),S(!0),_(o)},[]),E=(0,t.useCallback)(()=>{S(!1),T(null),_(!1)},[]),P=(0,t.useCallback)(()=>{E(),o(e)},[e,o,E]),F=(0,t.useCallback)(()=>{clearTimeout(s.current)},[]),R=(0,t.useCallback)(()=>{clearTimeout(l.current),s.current=setTimeout(E,180)},[E]),D=(0,t.useCallback)(()=>{clearTimeout(s.current)},[]),I=(0,t.useCallback)(()=>{E()},[E]),N=(0,t.useCallback)(e=>{j||(c.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},[j]),H=(0,t.useCallback)(a=>{if(j||!c.current)return;const t=a.changedTouches[0],n=Math.abs(t.clientX-c.current.x),r=Math.abs(t.clientY-c.current.y);if(c.current=null,n>8||r>8)return;if(m.current=!0,window.innerWidth<768)return void o(e);const l=i.current?.getBoundingClientRect();l&&B(l,!0)},[j,e,o,B]),K=(0,t.useCallback)(()=>{m.current?m.current=!1:j||C||P()},[j,C,P]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(f,{ref:i,onClick:K,onMouseEnter:F,onMouseLeave:R,onTouchStart:N,onTouchEnd:H,title:a,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||P()},children:[(0,g.jsx)($,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV"}),(0,g.jsx)(A,{"data-eye":!0,onClick:e=>{e.stopPropagation();const o=i.current?.getBoundingClientRect();o&&B(o,!1)},title:"Preview",children:(0,g.jsx)(u.A,{size:14})}),r?(0,g.jsx)(x,{src:r,alt:a,loading:"lazy"}):(0,g.jsxs)(h,{children:["🎬",(0,g.jsx)(b,{children:a})]}),(0,g.jsxs)(y,{children:[(0,g.jsx)(w,{children:a}),(0,g.jsxs)(z,{children:[(0,g.jsxs)(v,{children:[(0,g.jsx)(d.A,{size:9,fill:"currentColor"}),e.vote_average.toFixed(1)]}),n&&(0,g.jsx)(k,{children:n})]})]})]}),j&&M&&(0,g.jsx)(L,{item:e,rect:M,onOpen:P,onMouseEnter:D,onMouseLeave:I,withBackdrop:C,onBackdropTap:E})]})}const H=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.md};
  padding: 0 ${r.w4.spacing.xxl};
  position: relative;
`,K=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Y=n.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.01em;
`,U=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
`,V=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${r.w4.colors.border};
  background: ${r.w4.colors.surface};
  color: ${r.w4.colors.mainText};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    border-color: ${r.w4.colors.accent};
    color: ${r.w4.colors.accent};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,G=n.default.div`
  position: relative;
  overflow: hidden;
`,O=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.md};
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 4px;
  /* Contain horizontal overscroll so trackpad + touch don't leak into the
   * page's vertical scroll on iPad / macOS. */
  overscroll-behavior-x: contain;
  /* Snap each card to the left edge as a soft anchor. "proximity" keeps
   * free-scroll feeling unrestricted while landing at a card boundary when
   * the user lifts off near one. */
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar { display: none; }

  /* Every direct child (MediaCard, SkeletonCard) gets snapped. Keeps the
   * snap logic local to the row — no per-child change needed. */
  & > * {
    scroll-snap-align: start;
  }

  &:focus-visible {
    outline: 2px solid ${r.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${r.w4.borderRadius.sm};
  }
`,W=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  color: ${r.w4.colors.mainTextMuted};
  font-size: 14px;
  border: 1px dashed ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
`,J=n.default.div`
  width: 160px;
  aspect-ratio: 2/3;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    ${r.w4.colors.surface} 25%,
    ${r.w4.colors.sidebarHover} 50%,
    ${r.w4.colors.surface} 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;function Z(e){return Math.max(320,Math.round(.85*e.clientWidth))}function X({title:e,items:o,loading:a,onSelect:n}){const r=(0,t.useRef)(null),[s,c]=(0,t.useState)(!1),[d,m]=(0,t.useState)(!0),u=(0,t.useCallback)(()=>{const e=r.current;e&&(c(e.scrollLeft>0),m(e.scrollLeft+e.clientWidth<e.scrollWidth-4))},[]);(0,t.useEffect)(()=>{u();const e=()=>u();return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[o,u]);const p=()=>{const e=r.current;e&&e.scrollBy({left:-Z(e),behavior:"smooth"})},f=()=>{const e=r.current;e&&e.scrollBy({left:Z(e),behavior:"smooth"})};return(0,g.jsxs)(H,{children:[(0,g.jsxs)(K,{children:[(0,g.jsx)(Y,{children:e}),(0,g.jsxs)(U,{children:[(0,g.jsx)(V,{onClick:p,disabled:!s,"aria-label":"Scroll left",children:(0,g.jsx)(i.A,{size:16})}),(0,g.jsx)(V,{onClick:f,disabled:!d||0===o.length,"aria-label":"Scroll right",children:(0,g.jsx)(l.A,{size:16})})]})]}),(0,g.jsx)(G,{children:a?(0,g.jsx)(O,{children:Array.from({length:10}).map((e,o)=>(0,g.jsx)(J,{},o))}):0===o.length?(0,g.jsx)(W,{children:"No results found"}):(0,g.jsx)(O,{ref:r,onScroll:u,onKeyDown:e=>{if("ArrowRight"===e.key)e.preventDefault(),f();else if("ArrowLeft"===e.key)e.preventDefault(),p();else if("Home"===e.key)e.preventDefault(),r.current?.scrollTo({left:0,behavior:"smooth"});else if("End"===e.key){e.preventDefault();const o=r.current;o&&o.scrollTo({left:o.scrollWidth,behavior:"smooth"})}},tabIndex:0,role:"region","aria-label":e,children:o.map(e=>(0,g.jsx)(N,{item:e,onClick:n},`${e.media_type}-${e.id}`))})})]})}},6260(e,o,a){a.d(o,{P:()=>ve});var t=a(7359),n=a(3233),r=a(7207),i=a(9200),l=a(3775),s=a(2310),c=a(1783),d=a(2743),m=a(8440),u=a(140),p=a(2709),g=a(2126),f=a(6135),x=a(8641),h=a(4872),b=a(5031),y=a(1849),w=a(4525),z=a(7390),v=a(2053),k=a(5723);const $=r.keyframes`
  from { transform: translateX(6%); opacity: 0; }
  to   { transform: translateX(0);  opacity: 1; }
`,A=r.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,j=n.default.div`
  flex: 1;
  background: ${i.w4.colors.mainBg};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${A} 0.2s ease;
  scrollbar-width: thin;
  scrollbar-color: ${i.w4.colors.border} transparent;
`,S=n.default.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${$} 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`,M=n.default.div`
  position: relative;
  width: 100%;
  /* 16:9 on small screens, capped at 440px on wide displays so the hero
     doesn't dominate the page. Stays full-bleed horizontally. */
  height: clamp(280px, 42vw, 440px);
  background: url(${({src:e})=>e}) center center / cover no-repeat;
  background-color: ${i.w4.colors.surface};
  flex-shrink: 0;
  overflow: hidden;

  /* Subtle ambient wash on top of the backdrop so it reads as part of the
     app, not as a raw poster — lets the image breathe. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      120% 80% at 30% 40%,
      transparent 0%,
      rgba(0, 0, 0, 0.35) 70%,
      rgba(0, 0, 0, 0.55) 100%
    );
    pointer-events: none;
  }

  /* Bottom fade to the app background so text stays legible and the hero
     bleeds smoothly into the content below. Softer than before to keep
     backdrop detail visible. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        to bottom,
        transparent 0%,
        transparent 45%,
        rgba(0, 0, 0, 0.55) 75%,
        ${i.w4.colors.mainBg} 100%
      ),
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.2) 45%,
        transparent 70%
      );
    pointer-events: none;
  }
`,T=n.default.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 28px 28px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    padding: 0 48px 36px;
    max-width: 640px;
  }
`,C=r.keyframes`
  to { transform: rotate(360deg); }
`,_=n.default.div`
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(4px);
`,B=n.default.div`
  width: 36px;
  height: 36px;
  border: 3px solid ${i.w4.colors.border};
  border-top-color: ${i.w4.colors.accent};
  border-radius: 50%;
  animation: ${C} 0.7s linear infinite;
`,E=n.default.h1`
  font-size: clamp(24px, 5vw, 42px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
`,P=n.default.p`
  font-size: 14px;
  color: rgba(255,255,255,0.65);
  font-style: italic;
  margin: 0;
`,F=n.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`,R=n.default.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  font-weight: 800;
  color: #e3b341;
`,D=n.default.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: rgba(255,255,255,0.6);
`,I=n.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,L=n.default.span`
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.75);
  backdrop-filter: blur(4px);
`,N=n.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,H=n.default.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  border: none;
  background: #fff;
  color: #000;
  text-decoration: none;
  transition: opacity 0.15s, transform 0.1s;
  letter-spacing: -0.01em;

  &:hover { opacity: 0.9; }
  &:active { transform: scale(0.97); }
`,K=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 11px 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({active:e,danger:o})=>o?"#f85149":e?i.w4.colors.accent:"rgba(255,255,255,0.25)"};
  background: ${({active:e,danger:o})=>o?"rgba(248,81,73,0.15)":e?"rgba(88,166,255,0.2)":"rgba(255,255,255,0.08)"};
  color: ${({active:e,danger:o})=>o?"#f85149":e?i.w4.colors.accent:"rgba(255,255,255,0.85)"};
  backdrop-filter: blur(4px);
  transition: background 0.15s, transform 0.1s;

  &:hover { background: rgba(255,255,255,0.14); }
  &:active { transform: scale(0.97); }
`,Y=n.default.div`
  flex: 1;
  padding: 32px 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  @media (min-width: 768px) {
    padding: 36px 48px 64px;
  }
`,U=n.default.p`
  font-size: 15px;
  line-height: 1.8;
  color: ${i.w4.colors.mainTextMuted};
  margin: 0;
`,V=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,G=n.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${i.w4.colors.border};
`,O=n.default.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(88,166,255,0.1);
  border: 1px solid rgba(88,166,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${i.w4.colors.accent};
  flex-shrink: 0;
`,W=n.default.h2`
  font-size: 16px;
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,J=n.default.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  border: 1.5px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.08);
  color: #fff;
  text-decoration: none;
  backdrop-filter: blur(4px);
  transition: background 0.15s, transform 0.1s, border-color 0.15s;
  letter-spacing: -0.01em;

  &:hover { background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.5); }
  &:active { transform: scale(0.97); }
`,Z=n.default.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,X=n.default.div`
  width: 100%;
  max-width: 900px;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8);
  animation: scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
`,q=n.default.div`
  position: relative;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`,Q=n.default.button`
  position: absolute;
  top: -44px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-family: ${i.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: rgba(255, 255, 255, 0.2); }
`,ee=n.default.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 4px;
  &::-webkit-scrollbar { display: none; }
`,oe=n.default.div`
  flex-shrink: 0;
  width: 110px;
  border-radius: 12px;
  overflow: hidden;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.5);
  }
`,ae=n.default.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
`,te=n.default.div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(135deg, #1e2533 0%, #252d3d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`,ne=n.default.div`
  padding: 8px 8px 10px;
`,re=n.default.div`
  font-size: 11px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ie=n.default.div`
  font-size: 10px;
  color: ${i.w4.colors.mainTextMuted};
  margin-top: 3px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,le=n.default.div`
  flex-shrink: 0;
  width: 120px;
  border-radius: 12px;
  overflow: hidden;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.5);
  }
`,se=n.default.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
`,ce=n.default.div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(135deg, #1e2533 0%, #252d3d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`,de=n.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,me=n.default.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 12px;
  background: ${({bg:e})=>e};
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  }
  &:active { transform: scale(0.97); }
`,ue=n.default.img`
  width: 32px;
  height: 32px;
  border-radius: 7px;
  object-fit: cover;
  flex-shrink: 0;
`,pe=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ge=n.default.span`
  font-size: 13px;
  font-weight: 700;
  color: #fff;
`,fe=n.default.span`
  font-size: 10px;
  color: rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  gap: 3px;
`,xe=n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  background: ${({bg:e})=>e};
  border: 1px solid rgba(255,255,255,0.06);
  opacity: 0.55;
`,he=n.default.img`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  object-fit: cover;
`,be=n.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${i.w4.colors.mainTextMuted};
  margin-bottom: 8px;
`,ye=n.default.p`
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
  margin: 0;
`,we=n.default.div`
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
  padding: 12px 0;
`;function ze({provider:e,title:o,appleTVUrl:a}){const t=z.RY[e.provider_name]??i.w4.colors.surface,n=(0,z.$8)(e,o,a);return(0,k.jsxs)(me,{bg:t,href:n,target:"_blank",rel:"noreferrer",children:[e.logo_path&&(0,k.jsx)(ue,{src:(0,z.vo)(e.logo_path),alt:e.provider_name}),(0,k.jsxs)(pe,{children:[(0,k.jsx)(ge,{children:e.provider_name}),(0,k.jsxs)(fe,{children:[(0,k.jsx)(d.A,{size:9}),(0,z.mS)(e.provider_id)?"Open in Apple TV":`Open in ${e.provider_name}`]})]})]})}function ve({item:e,apiKey:o,onBack:a,onLibraryChange:n,onSelect:r}){const[d,$]=(0,t.useState)(null),[A,C]=(0,t.useState)([]),[me,ue]=(0,t.useState)(null),[pe,fe]=(0,t.useState)([]),[ve,ke]=(0,t.useState)([]),[$e,Ae]=(0,t.useState)(!0),[je,Se]=(0,t.useState)(null),[Me,Te]=(0,t.useState)(!1),Ce=(0,t.useRef)(null),[_e,Be]=(0,t.useState)(()=>(0,v.BA)(e)),[Ee,Pe]=(0,t.useState)(()=>(0,v.U4)(e)),Fe=(0,z.rS)(e),Re=(0,z.Ox)(e);(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&(Me?Te(!1):a())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a,Me]),(0,t.useEffect)(()=>{Ce.current?.scrollTo({top:0,behavior:"instant"})},[e.id]),(0,t.useEffect)(()=>{Ae(!0),Te(!1),Promise.all([(0,z.Ug)(o,e.media_type,e.id),(0,z.fY)(o,e.media_type,e.id),(0,z.Mt)(o,e.media_type,e.id),(0,z.Pg)(o,e.media_type,e.id),(0,z.Dz)(o,e.media_type,e.id)]).then(([e,o,a,t,n])=>{$(e),C(o),ue(a),fe(t),ke(n),Ae(!1)}).catch(()=>Ae(!1)),(0,z.Su)(Fe,e.media_type,Re).then(Se)},[e.id,e.media_type,o,Fe,Re]);const De=A.find(e=>"YouTube"===e.site&&("Trailer"===e.type||"Teaser"===e.type)&&e.official)??A.find(e=>"YouTube"===e.site&&"Trailer"===e.type)??A.find(e=>"YouTube"===e.site),Ie=(0,t.useCallback)(()=>{(0,v.dw)(e),Be(e=>!e),n?.()},[e,n]),Le=(0,t.useCallback)(()=>{(0,v.w0)(e),Pe(e=>!e),n?.()},[e,n]),Ne=[...me?.flatrate??[]].filter((e,o,a)=>a.findIndex(o=>o.provider_id===e.provider_id)===o),He=(me?.rent??[]).filter(e=>!Ne.find(o=>o.provider_id===e.provider_id)),Ke=Ne[0],Ye=Ke?(0,z.$8)(Ke,Fe,je):je??`https://tv.apple.com/search?term=${encodeURIComponent(Fe)}`,Ue=(0,z.U7)(e.backdrop_path??d?.backdrop_path??null,"w1280");return(0,k.jsxs)(j,{ref:Ce,children:[$e&&(0,k.jsx)(_,{children:(0,k.jsx)(B,{})}),(0,k.jsxs)(S,{children:[(0,k.jsx)(M,{src:Ue,children:(0,k.jsxs)(T,{children:[(0,k.jsx)(E,{children:Fe}),d?.tagline&&(0,k.jsxs)(P,{children:['"',d.tagline,'"']}),(0,k.jsxs)(F,{children:[(0,k.jsxs)(R,{children:[(0,k.jsx)(x.A,{size:15,fill:"currentColor"}),e.vote_average.toFixed(1)]}),Re&&(0,k.jsxs)(D,{children:[(0,k.jsx)(l.A,{size:13}),Re]}),d?.runtime&&(0,k.jsxs)(D,{children:[(0,k.jsx)(c.A,{size:13}),Math.floor(d.runtime/60),"h ",d.runtime%60,"m"]}),d?.number_of_seasons&&(0,k.jsxs)(D,{children:[(0,k.jsx)(b.A,{size:13}),d.number_of_seasons," season",1!==d.number_of_seasons?"s":""]})]}),d?.genres&&d.genres.length>0&&(0,k.jsx)(I,{children:d.genres.map(e=>(0,k.jsx)(L,{children:e.name},e.id))}),(0,k.jsxs)(N,{children:[(0,k.jsxs)(H,{href:Ye,target:"_blank",rel:"noreferrer",children:[(0,k.jsx)(f.A,{size:16,fill:"black"}),"Watch Now"]}),De&&(0,k.jsxs)(J,{onClick:()=>Te(!0),children:[(0,k.jsx)(s.A,{size:15}),"Trailer"]}),(0,k.jsxs)(K,{active:_e,onClick:Ie,children:[(0,k.jsx)(p.A,{size:14,fill:_e?"currentColor":"none"}),_e?"Favorited":"Favorite"]}),(0,k.jsxs)(K,{active:Ee,onClick:Le,children:[Ee?(0,k.jsx)(m.A,{size:14}):(0,k.jsx)(u.A,{size:14}),Ee?"Unseen":"Mark Seen"]}),(_e||Ee)&&(0,k.jsx)(K,{danger:!0,onClick:()=>{_e&&((0,v.dw)(e),Be(!1)),Ee&&((0,v.w0)(e),Pe(!1)),n?.()},children:(0,k.jsx)(h.A,{size:14})})]})]})}),(0,k.jsxs)(Y,{children:[$e?(0,k.jsx)(we,{children:"Loading…"}):(0,k.jsx)(U,{children:e.overview}),De&&Me&&(0,k.jsx)(Z,{onClick:e=>{e.target===e.currentTarget&&Te(!1)},children:(0,k.jsxs)(X,{children:[(0,k.jsxs)(Q,{onClick:()=>Te(!1),children:[(0,k.jsx)(w.A,{size:14})," Close"]}),(0,k.jsx)(q,{children:(0,k.jsx)("iframe",{src:`https://www.youtube.com/embed/${De.key}?autoplay=1&rel=0&modestbranding=1`,title:De.name,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})]})}),($e||pe.length>0)&&(0,k.jsxs)(V,{children:[(0,k.jsxs)(G,{children:[(0,k.jsx)(O,{children:(0,k.jsx)(y.A,{size:15})}),(0,k.jsx)(W,{children:"Cast"})]}),$e?(0,k.jsx)(we,{children:"Loading cast…"}):(0,k.jsx)(ee,{children:pe.map(e=>(0,k.jsxs)(oe,{children:[e.profile_path?(0,k.jsx)(ae,{src:(0,z.DW)(e.profile_path,"w185"),alt:e.name,loading:"lazy"}):(0,k.jsx)(te,{children:"👤"}),(0,k.jsxs)(ne,{children:[(0,k.jsx)(re,{children:e.name}),e.character&&(0,k.jsx)(ie,{children:e.character})]})]},e.id))})]}),(0,k.jsxs)(V,{children:[(0,k.jsxs)(G,{children:[(0,k.jsx)(O,{children:(0,k.jsx)(g.A,{size:15})}),(0,k.jsx)(W,{children:"Where to Watch"})]}),$e?(0,k.jsx)(we,{children:"Loading streaming info…"}):Ne.length>0?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(de,{children:Ne.map(e=>(0,k.jsx)(ze,{provider:e,title:Fe,appleTVUrl:je},e.provider_id))}),He.length>0&&(0,k.jsxs)("div",{style:{marginTop:8},children:[(0,k.jsx)(be,{children:"Also available to rent"}),(0,k.jsx)(de,{children:He.map(e=>(0,k.jsxs)(xe,{bg:z.RY[e.provider_name]??i.w4.colors.surface,children:[e.logo_path&&(0,k.jsx)(he,{src:(0,z.vo)(e.logo_path),alt:e.provider_name}),(0,k.jsx)(ge,{style:{color:"#fff"},children:e.provider_name})]},e.provider_id))})]})]}):(me?.rent??[]).length>0?(0,k.jsxs)("div",{children:[(0,k.jsx)(ye,{children:"Not on any streaming subscription right now."}),(0,k.jsx)(be,{style:{marginTop:12},children:"Available to rent"}),(0,k.jsx)(de,{children:(me?.rent??[]).map(e=>(0,k.jsxs)(xe,{bg:z.RY[e.provider_name]??i.w4.colors.surface,children:[e.logo_path&&(0,k.jsx)(he,{src:(0,z.vo)(e.logo_path),alt:e.provider_name}),(0,k.jsx)(ge,{style:{color:"#fff"},children:e.provider_name})]},e.provider_id))})]}):(0,k.jsx)(ye,{children:"No streaming info available for your region (US)."})]}),ve.length>0&&(0,k.jsxs)(V,{children:[(0,k.jsxs)(G,{children:[(0,k.jsx)(O,{children:(0,k.jsx)(x.A,{size:15})}),(0,k.jsx)(W,{children:"You Might Also Like"})]}),(0,k.jsx)(ee,{children:ve.map(e=>(0,k.jsxs)(le,{onClick:()=>r?.(e),children:[(0,z.HD)(e.poster_path)?(0,k.jsx)(se,{src:(0,z.HD)(e.poster_path,"w185"),alt:(0,z.rS)(e),loading:"lazy"}):(0,k.jsx)(ce,{children:"🎬"}),(0,k.jsxs)(ne,{children:[(0,k.jsx)(re,{children:(0,z.rS)(e)}),(0,k.jsxs)(ie,{children:[(0,k.jsx)(x.A,{size:9,fill:"#e3b341",color:"#e3b341",style:{verticalAlign:-1}})," ",e.vote_average.toFixed(1)," · ",(0,z.Ox)(e)]})]})]},e.id))})]})]})]})]})}},1385(e,o,a){a.d(o,{K:()=>F});var t=a(7359),n=a(8991),r=a(3233),i=a(7207),l=a(9200),s=a(5609),c=a(7408),d=a(4525),m=a(7390),u=a(5723);const p=i.keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`,g=i.keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`,f=i.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,x=r.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1100;
  animation: ${f} 0.2s ease;
`,h=r.default.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 100vw);
  background: ${l.w4.colors.mainBg};
  border-left: 1px solid ${l.w4.colors.border};
  display: flex;
  flex-direction: column;
  font-family: ${l.w4.typography.fontFamily};
  z-index: 1101;
  animation: ${p} 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;

  @media (max-width: 540px) {
    top: auto;
    right: 0;
    left: 0;
    width: 100%;
    max-height: 88vh;
    border-left: none;
    border-top: 1px solid ${l.w4.colors.border};
    border-radius: 20px 20px 0 0;
    animation: ${g} 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  }
`,b=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 14px;
  border-bottom: 1px solid ${l.w4.colors.border};
  flex-shrink: 0;
`,y=r.default.h2`
  font-size: 17px;
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,w=r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,z=r.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid ${l.w4.colors.border};
  background: none;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover { background: ${l.w4.colors.surface}; color: ${l.w4.colors.mainText}; }
`,v=r.default.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${l.w4.colors.surface};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,k=r.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  scrollbar-width: thin;
  scrollbar-color: ${l.w4.colors.border} transparent;
`,$=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,A=r.default.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${l.w4.colors.mainTextMuted};
`,j=r.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,S=r.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 13px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.1s;
  border: 1px solid ${({active:e,color:o})=>e?o??l.w4.colors.accent:l.w4.colors.border};
  background: ${({active:e,color:o})=>e?`${o??l.w4.colors.accent}22`:l.w4.colors.surface};
  color: ${({active:e,color:o})=>e?o??l.w4.colors.accent:l.w4.colors.mainTextMuted};

  &:hover { border-color: ${({color:e})=>e??l.w4.colors.accent}; }
  &:active { transform: scale(0.95); }
`,M=(0,r.default)(S)`
  padding: 6px 12px 6px 8px;
`,T=r.default.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  flex-shrink: 0;
`,C=r.default.div`
  padding: 16px 20px;
  border-top: 1px solid ${l.w4.colors.border};
  flex-shrink: 0;
`,_=r.default.button`
  width: 100%;
  padding: 13px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: ${({hasFilters:e})=>e?l.w4.colors.accent:l.w4.colors.surface};
  color: ${({hasFilters:e})=>e?"#fff":l.w4.colors.mainTextMuted};
  transition: background 0.2s, transform 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover { opacity: 0.9; }
  &:active { transform: scale(0.98); }
`,B={8:"#E50914",337:"#113CCF",9:"#00A8E0",350:"#555",1899:"#002BE7",15:"#3DBB3D",386:"#D0A42C",531:"#0064FF",283:"#F47521",11:"#5C3317"},E=[[28,"Action"],[12,"Adventure"],[16,"Animation"],[35,"Comedy"],[80,"Crime"],[18,"Drama"],[14,"Fantasy"],[27,"Horror"],[9648,"Mystery"],[10749,"Romance"],[878,"Sci-Fi"],[53,"Thriller"],[37,"Western"],[99,"Documentary"]];function P(e,o){return e.includes(o)?e.filter(e=>e!==o):[...e,o]}function F({filters:e,onChange:o,onClose:a}){const[r,i]=t.useState(()=>({genres:[...e.genres],providerIds:[...e.providerIds],decades:[...e.decades]})),l=r.genres.length+r.providerIds.length+r.decades.length,p=(0,t.useCallback)(()=>{i({genres:[],providerIds:[],decades:[]})},[]),g=(0,t.useCallback)(()=>{o(r),a()},[o,a,r]),f=(0,t.useCallback)(e=>{e.target===e.currentTarget&&a()},[a]);return n.createPortal((0,u.jsx)(x,{onClick:f,children:(0,u.jsxs)(h,{children:[(0,u.jsxs)(b,{children:[(0,u.jsxs)(y,{children:["Filter",l>0?` · ${l}`:""]}),(0,u.jsxs)(w,{children:[l>0&&(0,u.jsxs)(z,{onClick:p,children:[(0,u.jsx)(c.A,{size:12}),"Reset"]}),(0,u.jsx)(v,{onClick:a,"aria-label":"Close filters",children:(0,u.jsx)(d.A,{size:16})})]})]}),(0,u.jsxs)(k,{children:[(0,u.jsxs)($,{children:[(0,u.jsx)(A,{children:"Genre"}),(0,u.jsx)(j,{children:E.map(([e,o])=>(0,u.jsxs)(S,{active:r.genres.includes(e),onClick:()=>i(o=>({...o,genres:P(o.genres,e)})),children:[r.genres.includes(e)&&(0,u.jsx)(s.A,{size:10}),o]},e))})]}),(0,u.jsxs)($,{children:[(0,u.jsx)(A,{children:"Streaming Platform"}),(0,u.jsx)(j,{children:m.Mw.map(e=>{const o=B[e.id]??"#888",a=r.providerIds.includes(e.id);return(0,u.jsxs)(M,{active:a,color:o,onClick:()=>i(o=>({...o,providerIds:P(o.providerIds,e.id)})),children:[(0,u.jsx)(T,{bg:o}),e.name,a&&(0,u.jsx)(s.A,{size:10})]},e.id)})})]}),(0,u.jsxs)($,{children:[(0,u.jsx)(A,{children:"Era / Decade"}),(0,u.jsx)(j,{children:m.c0.map(e=>(0,u.jsxs)(S,{active:r.decades.includes(e),onClick:()=>i(o=>({...o,decades:P(o.decades,e)})),children:[r.decades.includes(e)&&(0,u.jsx)(s.A,{size:10}),e]},e))})]})]}),(0,u.jsx)(C,{children:(0,u.jsx)(_,{hasFilters:l>0,onClick:g,children:l>0?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.A,{size:15})," Apply ",l," filter",1!==l?"s":""]}):"No filters active"})})]})}),document.body)}},7390(e,o,a){a.d(o,{$8:()=>w,$P:()=>B,DW:()=>s,Dz:()=>D,HD:()=>r,Kk:()=>C,Mt:()=>F,Mw:()=>g,N2:()=>p,NE:()=>A,Ox:()=>v,Pg:()=>R,RY:()=>f,Su:()=>x,U7:()=>i,Ug:()=>E,Zy:()=>M,_F:()=>S,ag:()=>_,c0:()=>$,eN:()=>T,fY:()=>P,mS:()=>b,rS:()=>z,vo:()=>l,zJ:()=>d});var t=a(9200);const n="https://image.tmdb.org/t/p",r=(e,o="w342")=>e?`${n}/${o}${e}`:"",i=(e,o="w1280")=>e?`${n}/${o}${e}`:"",l=(e,o="w92")=>e?`${n}/${o}${e}`:"",s=(e,o="w185")=>e?`${n}/${o}${e}`:"";let c="adult";function d(e){c=e}function m(e){return(0,t.VN)(e,c)}async function u(e,o,a={}){const t=new URL(`https://api.themoviedb.org/3${o}`);t.searchParams.set("api_key",e),t.searchParams.set("language","en-US"),void 0===a.include_adult&&t.searchParams.set("include_adult",String("adult"===c));for(const[e,o]of Object.entries(a))t.searchParams.set(e,o);const n=await fetch(t.toString());if(!n.ok)throw new Error(`TMDB ${n.status}`);return n.json()}const p={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Sci-Fi",53:"Thriller",10752:"War",37:"Western",10759:"Action & Adventure",10762:"Kids",10765:"Sci-Fi & Fantasy",10768:"War & Politics",10766:"Soap",10767:"Talk",10763:"News",10764:"Reality"},g=[{id:8,name:"Netflix"},{id:337,name:"Disney+"},{id:9,name:"Amazon Prime"},{id:350,name:"Apple TV+"},{id:384,name:"HBO Max"},{id:1899,name:"Max"},{id:15,name:"Hulu"},{id:386,name:"Peacock"},{id:531,name:"Paramount+"},{id:283,name:"Crunchyroll"},{id:11,name:"MUBI"}],f={Netflix:"#E50914","Disney Plus":"#113CCF","Disney+":"#113CCF","Amazon Prime Video":"#00A8E0","Prime Video":"#00A8E0","Apple TV Plus":"#1C1C1E","Apple TV+":"#1C1C1E","HBO Max":"#552093",Max:"#002BE7",Hulu:"#3DBB3D",Peacock:"#D0A42C","Paramount Plus":"#0064FF","Paramount+":"#0064FF",Crunchyroll:"#F47521",Mubi:"#5C3317"};async function x(e,o,a){try{const t="movie"===o?"movie":"tvShow",n="movie"===o?"movie":"tvSeason",r=await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(e)}&country=us&media=${t}&entity=${n}&limit=5`);if(!r.ok)throw new Error("iTunes API error");const i=(await r.json()).results??[];if(!i.length)throw new Error("no results");let l=i[0];if(a){const e=parseInt(a,10),o=i.find(o=>String(o.releaseDate??"").startsWith(String(e)));o&&(l=o)}const s=l.trackViewUrl??l.collectionViewUrl??"";if(!s)throw new Error("no url");return s}catch{return`https://tv.apple.com/search?term=${encodeURIComponent(e)}`}}const h=new Set([337,9,350,384,1899,386]);function b(e){return h.has(e)}const y={8:e=>`https://www.netflix.com/search?q=${encodeURIComponent(e)}`,15:e=>`https://www.hulu.com/search?q=${encodeURIComponent(e)}`,531:e=>`https://www.paramountplus.com/search/?q=${encodeURIComponent(e)}`,283:e=>`https://www.crunchyroll.com/search?q=${encodeURIComponent(e)}`,11:e=>`https://mubi.com/en/search?query=${encodeURIComponent(e)}`};function w(e,o,a){const t=y[e.provider_id];return t?t(o):(h.has(e.provider_id),a??`https://tv.apple.com/search?term=${encodeURIComponent(o)}`)}function z(e){return e.title??e.name??"Unknown"}function v(e){return(e.release_date??e.first_air_date??"").slice(0,4)}const k={"2020s":[2020,2029],"2010s":[2010,2019],"2000s":[2e3,2009],"1990s":[1990,1999],"1980s":[1980,1989],Classic:[1900,1979]},$=Object.keys(k);async function A(e,o,a){const t={sort_by:"popularity.desc"};a.genres.length&&(t.with_genres=a.genres.join("|")),a.providerIds.length&&(t.with_watch_providers=a.providerIds.join("|"),t.watch_region="US");const{from:n,to:r}=function(e){if(!e.length)return{};const o=e.map(e=>k[e]).filter(Boolean);return{from:Math.min(...o.map(([e])=>e)),to:Math.max(...o.map(([,e])=>e))}}(a.decades);if(n&&(t["primary_release_date.gte"]=`${n}-01-01`,t["first_air_date.gte"]=`${n}-01-01`),r&&(t["primary_release_date.lte"]=`${r}-12-31`,t["first_air_date.lte"]=`${r}-12-31`),"all"===o){const[o,a]=await Promise.all([u(e,"/discover/movie",t),u(e,"/discover/tv",t)]);return m([...o.results.map(e=>({...e,media_type:"movie"})),...a.results.map(e=>({...e,media_type:"tv"}))].sort((e,o)=>(o.popularity??0)-(e.popularity??0)||o.vote_average-e.vote_average))}return m((await u(e,`/discover/${o}`,t)).results.map(e=>({...e,media_type:o})))}const j={with_genres:"10751",sort_by:"popularity.desc","vote_count.gte":"50"};async function S(e){if("kid"===c){const[o,a]=await Promise.all([u(e,"/discover/movie",j),u(e,"/discover/tv",j)]);return m([...o.results.map(e=>({...e,media_type:"movie"})),...a.results.map(e=>({...e,media_type:"tv"}))].sort((e,o)=>(o.popularity??0)-(e.popularity??0)))}return m((await u(e,"/trending/all/week")).results.filter(e=>"movie"===e.media_type||"tv"===e.media_type))}async function M(e){const o="kid"===c?"/discover/movie":"/movie/popular",a="kid"===c?j:{};return m((await u(e,o,a)).results.map(e=>({...e,media_type:"movie"})))}async function T(e){const o="kid"===c?"/discover/tv":"/tv/popular",a="kid"===c?j:{};return m((await u(e,o,a)).results.map(e=>({...e,media_type:"tv"})))}async function C(e,o){const a="kid"===c?`/discover/${o}`:`/${o}/top_rated`,t="kid"===c?{...j,sort_by:"vote_average.desc","vote_count.gte":"500"}:{};return m((await u(e,a,t)).results.map(e=>({...e,media_type:o})))}async function _(e){const[o,a]=await Promise.all([u(e,"/discover/movie",{with_genres:"99",sort_by:"popularity.desc"}),u(e,"/discover/tv",{with_genres:"99",sort_by:"popularity.desc"})]);return m([...o.results.map(e=>({...e,media_type:"movie"})),...a.results.map(e=>({...e,media_type:"tv"}))].sort((e,o)=>o.vote_average-e.vote_average))}async function B(e,o){return m((await u(e,"/search/multi",{query:o,include_adult:"false"})).results.filter(e=>"movie"===e.media_type||"tv"===e.media_type))}async function E(e,o,a){return{...await u(e,`/${o}/${a}`),media_type:o}}async function P(e,o,a){return(await u(e,`/${o}/${a}/videos`)).results??[]}async function F(e,o,a,t="US"){const n=await u(e,`/${o}/${a}/watch/providers`);return n.results?.[t]??{}}async function R(e,o,a){return((await u(e,`/${o}/${a}/credits`)).cast??[]).sort((e,o)=>e.order-o.order).slice(0,20)}async function D(e,o,a){return((await u(e,`/${o}/${a}/recommendations`)).results??[]).filter(e=>e.poster_path).map(e=>({...e,media_type:e.media_type??o})).slice(0,15)}},2053(e,o,a){a.d(o,{BA:()=>s,GB:()=>d,U4:()=>m,dw:()=>c,qx:()=>l,w0:()=>u});const t="atlantis:movies:favorites",n="atlantis:movies:seen";function r(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}function i(e,o){try{localStorage.setItem(e,JSON.stringify(o))}catch{}}function l(){return r(t)}function s(e){return l().some(o=>o.id===e.id&&o.media_type===e.media_type)}function c(e){const o=l(),a=o.some(o=>o.id===e.id&&o.media_type===e.media_type)?o.filter(o=>!(o.id===e.id&&o.media_type===e.media_type)):[e,...o];return i(t,a),a}function d(){return r(n)}function m(e){return d().some(o=>o.id===e.id&&o.media_type===e.media_type)}function u(e){return m(e)?function(e){const o=d().filter(o=>!(o.id===e.id&&o.media_type===e.media_type));return i(n,o),o}(e):function(e){const o=d().filter(o=>!(o.id===e.id&&o.media_type===e.media_type)),a=[e,...o].slice(0,15);return i(n,a),a}(e)}}}]);