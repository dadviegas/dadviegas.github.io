"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[902],{74914(e,o,a){a.d(o,{FlyoutPanel:()=>b});var n=a(27359),t=a(53233),r=a(77207),i=a(20255),l=a(217),s=a(15959),d=a(65185),c=a(65723);const m=r.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,p=t.default.div`
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
`,g=t.default.div`
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
`,u=t.default.button`
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
`;function f({iconKey:e}){const o=e?d.t[e]??i.A:i.A;return(0,c.jsx)(o,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:o,onSelect:a}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(x,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,c.jsxs)(u,{active:o===e.id,onClick:()=>a(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){const{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:n}=(0,s.c)();if(!o)return null;const t=o.entry.icon?d.t[o.entry.icon]??i.A:i.A;return(0,c.jsxs)(p,{anchorY:o.anchorY,onMouseEnter:n,onMouseLeave:a,children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(t,{size:13,strokeWidth:2}),o.entry.name]}),(0,c.jsx)(x,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},15959(e,o,a){a.d(o,{I:()=>t,c:()=>r});var n=a(27359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,n.useContext)(t)},65185(e,o,a){a.d(o,{t:()=>ne});var n=a(49510),t=a(99038),r=a(57400),i=a(28207),l=a(87902),s=a(36896),d=a(37901),c=a(39848),m=a(22164),p=a(3045),g=a(43775),u=a(83539),f=a(41783),x=a(1837),b=a(84494),h=a(82314),y=a(35751),w=a(20255),$=a(69633),z=a(92946),v=a(40822),k=a(36720),A=a(43317),S=a(52709),j=a(89301),M=a(83517),T=a(37032),B=a(6949),C=a(8218),F=a(36829),E=a(15553),P=a(59591),R=a(72820),L=a(14621),D=a(72534),I=a(66673),N=a(49033),H=a(31365),K=a(62937),G=a(65912),W=a(80158),O=a(88641),Y=a(48607),U=a(83249),_=a(1821),V=a(15889),J=a(27170),q=a(19161),Z=a(71849),X=a(61187),Q=a(77747),ee=a(2932),oe=a(24525),ae=a(57230);const ne={activity:s.A,"a-large-small":l.A,"bar-chart-2":n.A,book:c.A,"book-open":d.A,briefcase:p.A,calendar:g.A,clock:f.A,"circle-dot":u.A,compass:x.A,droplets:b.A,feather:h.A,file:w.A,"file-text":y.A,folder:$.A,"git-branch":z.A,github:v.A,globe:k.A,grid:r.A,hash:A.A,heart:S.A,hexagon:j.A,landmark:M.A,layers:i.A,"layout-grid":T.A,leaf:B.A,lightbulb:C.A,list:F.A,map:P.A,"map-pin":E.A,"message-square":R.A,minus:L.A,mountain:D.A,package:I.A,"pen-tool":N.A,"pie-chart":t.A,plus:H.A,ruler:K.A,slash:G.A,square:W.A,star:O.A,sun:Y.A,terminal:U.A,thermometer:_.A,triangle:V.A,truck:J.A,type:q.A,users:Z.A,waves:X.A,wind:Q.A,wrench:ee.A,x:oe.A,zap:ae.A,bot:m.A}},85723(e,o,a){a.d(o,{UO:()=>se,PE:()=>M,MJ:()=>_,KL:()=>D,w4:()=>n.w4,mZ:()=>I});var n=a(217),t=a(27359),r=a(53233),i=a(65723);r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${n.w4.spacing.sm};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,r.default.div`
  position: relative;
`;var l=a(77207),s=a(73661),d=a(15959);const c="260px",m="56px",p=r.default.header`
  display: flex;
  align-items: center;
  height: calc(${"48px"} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,g=r.default.div`
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,u=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
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
  padding: 0 ${n.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,b=r.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${f} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,h=r.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  padding-left: ${n.w4.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${n.w4.spacing.sm};
    color: ${n.w4.colors.border};
  }
`,y=r.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w4.spacing.sm};
  padding: 0 ${n.w4.spacing.lg};
`,w=r.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,$=r.default.div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,z=r.default.aside`
  width: ${({collapsed:e})=>e?m:c};
  min-width: ${({collapsed:e})=>e?m:c};
  background: ${n.w4.colors.sidebarBg};
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,v=r.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,k=r.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function S(){return(0,i.jsx)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,o)=>(0,i.jsx)(b,{index:o,accent:e.accent,children:e.char},o))})}const j="atlantis:sidebar-collapsed";function M({sidebar:e,children:o,topBarRight:n,title:r="Atlantis",activeId:l=null}){const[c,m]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(j)}catch{return!1}}),[f,x]=(0,t.useState)(null),b=(0,t.useRef)(),A=()=>m(e=>{const o=!e;try{localStorage.setItem(j,String(o))}catch{}return o}),M=t.useMemo(()=>t.lazy(()=>Promise.resolve().then(a.bind(a,74914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,i.jsx)(d.I.Provider,{value:{collapsed:c,toggle:A,flyout:f,openFlyout:(e,o,a)=>{clearTimeout(b.current),x({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{b.current=setTimeout(()=>x(null),160)},cancelFlyoutClose:()=>clearTimeout(b.current)},children:(0,i.jsxs)($,{children:[(0,i.jsxs)(p,{children:[e&&(0,i.jsx)(g,{children:(0,i.jsx)(u,{onClick:A,title:c?"Expand sidebar":"Collapse sidebar",children:(0,i.jsx)(s.A,{size:17})})}),(0,i.jsx)(S,{}),r&&(0,i.jsx)(h,{children:r}),n&&(0,i.jsx)(y,{children:n})]}),(0,i.jsxs)(w,{children:[null!=e&&(0,i.jsx)(z,{collapsed:c,children:(0,i.jsx)(v,{children:e})}),(0,i.jsx)(k,{children:o})]}),f&&(0,i.jsx)(t.Suspense,{fallback:null,children:(0,i.jsx)(M,{activeId:l})})]})})}a(65185),r.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,r.default.div`
  overflow: hidden;
`,r.default.div`
  padding-left: ${n.w4.spacing.md};
`,r.default.div`
  display: flex;
  flex-direction: column;
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${n.w4.spacing.sm} ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":n.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${n.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${n.w4.colors.sidebarText};
    background: ${n.w4.colors.sidebarHover};
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
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
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
    border-right-color: ${n.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${n.w4.colors.surface};
  }
`,r.default.span`
  display: block;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${n.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${n.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${n.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${n.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,a(74914);var B=a(61920),C=a(48607),F=a(68479);r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
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
`,B.A,C.A,F.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const E="documents",P="settings";function R(){return new Promise((e,o)=>{const a=indexedDB.open("atlantis-tools",2);a.onupgradeneeded=e=>{const o=e.target.result;o.objectStoreNames.contains(E)||o.createObjectStore(E,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),o.objectStoreNames.contains(P)||o.createObjectStore(P,{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>o(a.error)})}let L={async saveDoc(e,o,a){const n=await R(),t={appId:e,name:o,content:a,savedAt:Date.now()};return new Promise((e,o)=>{const a=n.transaction(E,"readwrite").objectStore(E).add(t);a.onsuccess=()=>e(String(a.result)),a.onerror=()=>o(a.error)})},async updateDoc(e,o,a){const n=await R();return new Promise((t,r)=>{const i=n.transaction(E,"readwrite").objectStore(E),l=i.get(Number(e));l.onsuccess=()=>{const e=l.result;if(!e)return void r(new Error("Doc not found"));const n=i.put({...e,name:o,content:a,savedAt:Date.now()});n.onsuccess=()=>t(),n.onerror=()=>r(n.error)},l.onerror=()=>r(l.error)})},async listDocs(e){const o=await R();return new Promise((a,n)=>{const t=o.transaction(E,"readonly").objectStore(E).index("appId").getAll(e);t.onsuccess=()=>a(t.result.map(e=>({...e,id:String(e.id)})).reverse()),t.onerror=()=>n(t.error)})},async deleteDoc(e){const o=await R();return new Promise((a,n)=>{const t=o.transaction(E,"readwrite").objectStore(E).delete(Number(e));t.onsuccess=()=>a(),t.onerror=()=>n(t.error)})},async putSetting(e,o){const a=await R();return new Promise((n,t)=>{const r=a.transaction(P,"readwrite").objectStore(P).put({key:e,value:o});r.onsuccess=()=>n(),r.onerror=()=>t(r.error)})},async getSetting(e){const o=await R();return new Promise((a,n)=>{const t=o.transaction(P,"readonly").objectStore(P).get(e);t.onsuccess=()=>a(t.result?t.result.value:null),t.onerror=()=>n(t.error)})}};function D(e,o,a){return L.saveDoc(e,o,a)}function I(e,o,a){return L.updateDoc(e,o,a)}const N=r.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,H=r.default.div`
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,K=r.default.div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,G=r.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${n.w4.colors.accent}; }
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,W=r.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,O=r.default.button`
  padding: 7px 18px;
  border-radius: ${n.w4.borderRadius.md};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?n.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,Y=r.default.div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,U=r.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`;function _({onSave:e,onUpdate:o,onCancel:a,existingDoc:n}){const[r,l]=(0,t.useState)(n?.name??""),s=(0,t.useRef)(null);return(0,t.useEffect)(()=>{s.current?.focus(),n&&s.current?.select()},[n]),(0,i.jsx)(N,{onClick:a,children:(0,i.jsxs)(H,{onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(K,{children:"Save document"}),n&&o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{children:"Update the current version or save as a new one."}),(0,i.jsxs)(W,{children:[(0,i.jsx)(O,{onClick:a,children:"Cancel"}),(0,i.jsxs)(O,{danger:!0,onClick:o,children:['Update "',n.name,'"']})]}),(0,i.jsx)(Y,{})]}),(0,i.jsx)(G,{ref:s,value:r,onChange:e=>l(e.target.value),onKeyDown:t=>{"Enter"===t.key&&r.trim()&&(n&&r.trim()===n.name&&o?o():e(r.trim())),"Escape"===t.key&&a()},placeholder:n?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,i.jsxs)(W,{children:[!n&&(0,i.jsx)(O,{onClick:a,children:"Cancel"}),(0,i.jsx)(O,{primary:!0,disabled:!r.trim(),onClick:()=>e(r.trim()),children:"Save as new"})]})]})})}var V=a(18006),J=a(70679),q=a(54872);const Z=r.default.div`
  position: relative;
`,X=r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    border-color: ${n.w4.colors.accent};
  }
`,Q=r.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,ee=r.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,oe=r.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,ae=r.default.div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,ne=r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,te=r.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,re=r.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ie=r.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-top: 1px;
`,le=r.default.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${n.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`;function se({appId:e,onLoad:o}){const[a,n]=(0,t.useState)(!1),[r,l]=(0,t.useState)([]),s=(0,t.useRef)(null),d=(0,t.useCallback)(()=>{(function(e){return L.listDocs(e)})(e).then(l).catch(()=>{})},[e]);(0,t.useEffect)(()=>{if(!a)return;d();const e=e=>{s.current&&!s.current.contains(e.target)&&n(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[a,d]);return(0,i.jsxs)(Z,{ref:s,children:[(0,i.jsxs)(X,{onClick:()=>n(e=>!e),children:[(0,i.jsx)(V.A,{size:14}),"Saved",(0,i.jsx)(J.A,{size:13,style:{marginLeft:2}})]}),(0,i.jsxs)(Q,{open:a,children:[(0,i.jsx)(ee,{children:"Saved versions"}),(0,i.jsx)(oe,{children:0===r.length?(0,i.jsx)(ae,{children:"No saved documents yet."}):r.map(e=>{return(0,i.jsxs)(ne,{children:[(0,i.jsxs)(te,{onClick:()=>{o(e.content,e.id,e.name),n(!1)},children:[(0,i.jsx)(re,{children:e.name}),(0,i.jsx)(ie,{children:(a=e.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a)))})]}),(0,i.jsx)(le,{onClick:o=>(async(e,o)=>{e.stopPropagation(),await function(e){return L.deleteDoc(e)}(o),l(e=>e.filter(e=>e.id!==o))})(o,e.id),title:"Delete",children:(0,i.jsx)(q.A,{size:13})})]},e.id);var a})})]})]})}r.default.div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,r.default.section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,r.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,r.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,r.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,r.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding-left: max(${n.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${n.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${n.w4.spacing.sm};
  z-index: 100;
`,r.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${n.w4.colors.accent}; }
`,r.default.span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,r.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,r.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,r.default.div`
  flex: 1;
`;const de=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ce=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,me=l.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  animation: ${de} 0.4s ease 0.15s both;
`,r.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,r.default.div`
  position: absolute;
  inset: 0;
  animation: ${ce} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  background: ${n.w4.colors.border};
  animation: ${me} 1.4s ease-in-out infinite;
`,r.default.span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},217(e,o,a){a.d(o,{w4:()=>t});const n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#7a8599",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.15)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#2a3040",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1a2030",success:"#34d399",warning:"#fbbf24",danger:"#f87171"},t={colors:function(){const e={};for(const o of Object.keys(n))e[o]=`var(--at-${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},78967(e,o,a){a.d(o,{M:()=>f}),a(27359);var n=a(53233),t=a(15496),r=a(51530),i=a(85723),l=a(65723);const s=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${({collapsed:e})=>e?"0 0 0px":"1"};
  min-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
`,d=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${i.w4.spacing.md};
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,c=n.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
`,m=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.sidebarText};
  }
`,p=n.default.textarea`
  flex: 1;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  padding: ${i.w4.spacing.lg};
  background: ${i.w4.colors.mainBg};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  line-height: 1.7;
  tab-size: 2;
  caret-color: ${i.w4.colors.accent};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::placeholder {
    color: ${i.w4.colors.sidebarTextMuted};
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${i.w4.colors.border};
    border-radius: 3px;
  }
`,g=n.default.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${i.w4.borderRadius.md} ${i.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.sidebarText};
  }
`,u=n.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;function f({value:e,onChange:o,collapsed:a,onToggleCollapse:n,scrollRef:i,onScroll:f}){return a?(0,l.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,l.jsxs)(g,{onClick:n,title:"Show editor",children:[(0,l.jsx)(r.A,{size:14}),(0,l.jsx)(u,{children:"Editor"})]})}):(0,l.jsxs)(s,{collapsed:!1,children:[(0,l.jsxs)(d,{children:[(0,l.jsx)(c,{children:"Editor"}),(0,l.jsx)(m,{onClick:n,title:"Collapse editor",children:(0,l.jsx)(t.A,{size:15})})]}),(0,l.jsx)(p,{ref:i,value:e,onChange:e=>o(e.target.value),onScroll:f,placeholder:"Write markdown here…",spellCheck:!1})]})}},61326(e,o,a){a.d(o,{H:()=>b});var n=a(27359),t=a(53233),r=a(37901),i=a(70679),l=a(85723),s=a(35949),d=a(65723);const c=t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    border-color: ${l.w4.colors.accent};
  }
`,m=t.default.div`
  display: ${({open:e})=>e?"block":"none"};
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 240px;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,p=t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
`,g=t.default.button`
  display: block;
  width: 100%;
  padding: 8px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.12s;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }
`,u=t.default.div`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 500;
`,f=t.default.div`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-top: 1px;
`,x=t.default.div`
  position: relative;
`;function b({onSelect:e}){const[o,a]=(0,n.useState)(!1),t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!o)return;const e=e=>{t.current&&!t.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[o]),(0,d.jsxs)(x,{ref:t,children:[(0,d.jsxs)(c,{onClick:()=>a(e=>!e),children:[(0,d.jsx)(r.A,{size:14}),"Examples",(0,d.jsx)(i.A,{size:13,style:{marginLeft:2}})]}),(0,d.jsxs)(m,{open:o,children:[(0,d.jsx)(p,{children:"Load an example"}),s.S.map(o=>(0,d.jsxs)(g,{onClick:()=>{e(o.content),a(!1)},children:[(0,d.jsx)(u,{children:o.label}),(0,d.jsx)(f,{children:o.description})]},o.id))]})]})}},27665(e,o,a){a.d(o,{C:()=>f});var n=a(27359),t=a(53233),r=a(37901),i=a(70679),l=a(85723),s=a(35339),d=a(65723);const c=t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
  &:hover { background: ${l.w4.colors.sidebarHover}; border-color: ${l.w4.colors.accent}; }
`,m=t.default.div`
  display: ${({open:e})=>e?"block":"none"};
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 200px;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,p=t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
`,g=t.default.button`
  display: block;
  width: 100%;
  padding: 8px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.12s;
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,u=t.default.div`
  position: relative;
`;function f({onSelect:e}){const[o,a]=(0,n.useState)(!1),t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!o)return;const e=e=>{t.current&&!t.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[o]),(0,d.jsxs)(u,{ref:t,children:[(0,d.jsxs)(c,{onClick:()=>a(e=>!e),children:[(0,d.jsx)(r.A,{size:14}),"Examples",(0,d.jsx)(i.A,{size:13,style:{marginLeft:2}})]}),(0,d.jsxs)(m,{open:o,children:[(0,d.jsx)(p,{children:"Load a diagram"}),s.U.map(o=>(0,d.jsx)(g,{onClick:()=>{e(o.code),a(!1)},children:o.label},o.label))]})]})}},69835(e,o,a){a.d(o,{u:()=>w});var n=a(27359),t=a(53233),r=a(52534),i=a(13045),l=a(49881),s=a(85723),d=a(30774),c=a(65723);d.default.initialize({startOnLoad:!1,theme:"dark",securityLevel:"loose"});const m=`\n  &::-webkit-scrollbar { width: 6px; }\n  &::-webkit-scrollbar-thumb { background: ${s.w4.colors.border}; border-radius: 3px; }\n`,p=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: #1a1f2e;
`,g=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${s.w4.spacing.md};
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,u=t.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`,f=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover { background: ${s.w4.colors.sidebarHover}; color: ${s.w4.colors.sidebarText}; }
`,x=t.default.div`
  flex: 1;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${s.w4.spacing.xl};
  ${m}
  & svg { max-width: 100%; height: auto; }
`,b=t.default.div`
  margin: ${s.w4.spacing.lg};
  padding: ${s.w4.spacing.md};
  background: rgba(248, 113, 113, 0.08);
  border: 1px solid rgba(248, 113, 113, 0.25);
  border-radius: ${s.w4.borderRadius.md};
  color: #f87171;
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  line-height: 1.5;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  flex-shrink: 0;
`,h=t.default.button`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${s.w4.borderRadius.md} 0 0 ${s.w4.borderRadius.md};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  align-self: center;
  &:hover { background: ${s.w4.colors.sidebarHover}; color: ${s.w4.colors.sidebarText}; }
`,y=t.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${s.w4.typography.fontFamily};
  writing-mode: vertical-rl;
`;function w({code:e,collapsed:o,onToggleCollapse:a}){const[t,s]=(0,n.useState)(""),[m,w]=(0,n.useState)(null),$=(0,n.useRef)(0),z=(0,n.useCallback)(async e=>{if(!e.trim())return s(""),void w(null);const o=++$.current;try{const a="mermaid-"+Date.now(),{svg:n}=await d.default.render(a,e);$.current===o&&(s(n),w(null))}catch(e){$.current===o&&(w(e instanceof Error?e.message:String(e)),s(""))}},[]);return(0,n.useEffect)(()=>{const o=setTimeout(()=>z(e),300);return()=>clearTimeout(o)},[e,z]),o?(0,c.jsxs)(h,{onClick:a,title:"Show preview",children:[(0,c.jsx)(l.A,{size:14}),(0,c.jsx)(y,{children:"Preview"})]}):(0,c.jsxs)(p,{children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(u,{children:"Preview"}),(0,c.jsx)(f,{onClick:a,title:"Collapse preview",children:(0,c.jsx)(i.A,{size:15})})]}),m&&(0,c.jsxs)(b,{children:[(0,c.jsx)(r.A,{size:14,style:{flexShrink:0,marginTop:1}}),m]}),(0,c.jsx)(x,{dangerouslySetInnerHTML:{__html:t}})]})}},36933(e,o,a){a.d(o,{r:()=>ue});var n=a(27359),t=a(28976),r=a(18055),i=a(14944),l=a(39895),s=a(6930),d=(a(61385),a(53233)),c=a(49881),m=a(13045),p=a(85723),g=a(65723);d.default.nav`padding: ${p.w4.spacing.sm} 0;`,d.default.div`
  border-bottom: 1px solid ${p.w4.colors.border}60;
  margin-bottom: 2px;
`,d.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${p.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${p.w4.colors.sidebarTextMuted};
  font-size: ${p.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${p.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${p.w4.colors.sidebarText}; }
`,d.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,d.default.span`
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,d.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,d.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,d.default.div`overflow: hidden;`,d.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,d.default.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${p.w4.spacing.md};
  background: ${({active:e})=>e?p.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?p.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?p.w4.colors.sidebarActive:p.w4.colors.sidebarText};
  font-size: ${p.w4.typography.fontSizeBase};
  font-family: ${p.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${p.w4.colors.sidebarHover}; }
`,d.default.button`
  opacity: ${({active:e})=>e?1:0};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":p.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;const u=d.default.div`
  background: ${p.w4.colors.codeBg};
  border: 1px solid ${p.w4.colors.codeBorder};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.lg};
  margin: ${p.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,f=d.default.div`
  color: #f85149;
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: ${p.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let x=!1;function b({code:e}){const o=(0,n.useRef)(null),[t,r]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let n=!1;return async function(){const t=(await Promise.resolve().then(a.bind(a,30774))).default;if(x||(t.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:p.w4.colors.codeBg,primaryColor:p.w4.colors.accent,primaryTextColor:p.w4.colors.mainText,lineColor:p.w4.colors.border}}),x=!0),o.current&&!n)try{const a=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:r}=await t.render(a,e);!n&&o.current&&(o.current.innerHTML=r)}catch(e){n||r(e instanceof Error?e.message:String(e))}}(),()=>{n=!0}},[e]),t?(0,g.jsx)(u,{children:(0,g.jsxs)(f,{children:["Mermaid error: ",t]})}):(0,g.jsx)(u,{ref:o})}const h=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],y=d.default.div`
  background: ${p.w4.colors.codeBg};
  border: 1px solid ${p.w4.colors.codeBorder};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.lg};
  margin: ${p.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,w=d.default.div`
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  margin-bottom: ${p.w4.spacing.md};
  text-align: center;
`,$=d.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p.w4.spacing.sm} ${p.w4.spacing.md};
  margin-top: ${p.w4.spacing.md};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
`,z=d.default.span`
  display: flex;
  align-items: center;
  gap: 6px;
`,v=d.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,k=d.default.div`
  color: #f85149;
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: ${p.w4.typography.fontSizeSm};
`;function A(e){if(e<=0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/o)*o}function S({labels:e,data:o,colors:a}){const n=176,t=A(Math.max(...o,1)),r=Math.min(40,340/e.length*.6),i=340/e.length,l=Array.from({length:6},(e,o)=>t/5*o);return(0,g.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[l.map((e,o)=>{const a=192-e/t*n;return(0,g.jsxs)("g",{children:[(0,g.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:p.w4.colors.border,strokeWidth:.5,strokeDasharray:0===o?"none":"3,3"}),(0,g.jsx)("text",{x:38,y:a+4,fill:p.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:p.w4.typography.fontFamily,children:Math.round(e)})]},o)}),o.map((o,l)=>{const s=44+i*l+i/2-r/2,d=o/t*n,c=192-d,m=a[l%a.length];return(0,g.jsxs)("g",{children:[(0,g.jsxs)("rect",{x:s,y:c,width:r,height:d,rx:3,fill:m,opacity:.85,children:[(0,g.jsx)("animate",{attributeName:"height",from:"0",to:d,dur:"0.5s",fill:"freeze"}),(0,g.jsx)("animate",{attributeName:"y",from:192,to:c,dur:"0.5s",fill:"freeze"})]}),(0,g.jsx)("text",{x:s+r/2,y:c-4,fill:p.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:p.w4.typography.fontFamily,children:o}),(0,g.jsx)("text",{x:44+i*l+i/2,y:208,fill:p.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:p.w4.typography.fontFamily,children:e[l].length>8?e[l].slice(0,7)+"…":e[l]})]},l)})]})}function j({labels:e,data:o,colors:a}){const n=o.reduce((e,o)=>e+o,0)||1;let t=-Math.PI/2;const r=o.map((e,o)=>{const r=e/n*Math.PI*2,i=t;t+=r;const l=t,s=120+90*Math.cos(i),d=120+90*Math.sin(i),c=120+90*Math.cos(l),m=120+90*Math.sin(l),u=r>Math.PI?1:0,f=i+r/2,x=120+58.5*Math.cos(f),b=120+58.5*Math.sin(f),h=Math.round(e/n*100);return(0,g.jsxs)("g",{children:[(0,g.jsx)("path",{d:`M 120 120 L ${s} ${d} A 90 90 0 ${u} 1 ${c} ${m} Z`,fill:a[o%a.length],stroke:p.w4.colors.codeBg,strokeWidth:2,opacity:.85}),h>=5&&(0,g.jsxs)("text",{x,y:b+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:p.w4.typography.fontFamily,children:[h,"%"]})]},o)});return(0,g.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:r})}function M({labels:e,data:o,colors:a}){const n=176,t=A(Math.max(...o,1)),r=o.length>1?340/(o.length-1):340,i=a[0],l=o.map((e,o)=>({x:44+r*o,y:192-e/t*n})),s=l.map((e,o)=>`${0===o?"M":"L"} ${e.x} ${e.y}`).join(" "),d=Array.from({length:6},(e,o)=>t/5*o);return(0,g.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[d.map((e,o)=>{const a=192-e/t*n;return(0,g.jsxs)("g",{children:[(0,g.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:p.w4.colors.border,strokeWidth:.5,strokeDasharray:0===o?"none":"3,3"}),(0,g.jsx)("text",{x:38,y:a+4,fill:p.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:p.w4.typography.fontFamily,children:Math.round(e)})]},o)}),(0,g.jsx)("path",{d:s,fill:"none",stroke:i,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.map((a,n)=>(0,g.jsxs)("g",{children:[(0,g.jsx)("circle",{cx:a.x,cy:a.y,r:4,fill:i,stroke:p.w4.colors.codeBg,strokeWidth:2}),(0,g.jsx)("text",{x:a.x,y:a.y-10,fill:p.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:p.w4.typography.fontFamily,children:o[n]}),(0,g.jsx)("text",{x:a.x,y:208,fill:p.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:p.w4.typography.fontFamily,children:e[n].length>8?e[n].slice(0,7)+"…":e[n]})]},n))]})}function T({code:e}){const o=(0,n.useMemo)(()=>function(e){const o=e.trim().split("\n");let a,n,t="bar",r=[],i=[];for(const e of o){const[o,...l]=e.split(":"),s=l.join(":").trim();if(s)switch(o.trim().toLowerCase()){case"type":["bar","pie","line"].includes(s.toLowerCase())&&(t=s.toLowerCase());break;case"title":a=s;break;case"labels":r=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":i=s.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":n=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return r.length&&i.length?{type:t,title:a,labels:r,data:i,colors:n}:null}(e),[e]);if(!o)return(0,g.jsx)(y,{children:(0,g.jsx)(k,{children:"Invalid chart data"})});const a=o.colors??h;return(0,g.jsxs)(y,{children:[o.title&&(0,g.jsx)(w,{children:o.title}),"bar"===o.type&&(0,g.jsx)(S,{labels:o.labels,data:o.data,colors:a}),"pie"===o.type&&(0,g.jsx)(j,{labels:o.labels,data:o.data,colors:a}),"line"===o.type&&(0,g.jsx)(M,{labels:o.labels,data:o.data,colors:a}),(0,g.jsx)($,{children:o.labels.map((e,o)=>(0,g.jsxs)(z,{children:[(0,g.jsx)(v,{color:a[o%a.length]}),e]},o))})]})}const B=d.default.div`
  background: ${p.w4.colors.codeBg};
  border: 1px solid ${p.w4.colors.codeBorder};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.lg};
  margin: ${p.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p.w4.spacing.md};
`,C=d.default.div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,F=d.default.div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${p.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,E=d.default.div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,P=d.default.button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?p.w4.colors.accent:p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  background: ${({active:e})=>e?p.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?p.w4.colors.accent:p.w4.colors.mainTextMuted};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${p.w4.colors.accent};
    color: ${p.w4.colors.accent};
  }
`,R=d.default.div`
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  text-align: center;
`,L=d.default.div`
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  text-align: center;
`;function D(e){return e.toString().padStart(2,"0")}function I(e,o,a){if("pt"===a){const a=1===e?"1 hora":`${e} horas`;return 0===o?a:15===o?`${a} e um quarto`:30===o?`${a} e meia`:45===o?`um quarto para as ${12===e?1:e+1}`:`${a} e ${o} minutos`}const n=e<12?"AM":"PM",t=e%12||12;return 0===o?`${t} o'clock ${n}`:15===o?`quarter past ${t} ${n}`:30===o?`half past ${t} ${n}`:45===o?`quarter to ${t%12+1} ${n}`:`${t}:${D(o)} ${n}`}function N({hours:e,minutes:o,seconds:a}){const n=100,t=100,r=e=>e*Math.PI/180,i=a/60*360-90,l=o/60*360+a/60*6-90,s=e%12/12*360+o/60*30-90,d=n+61*Math.cos(r(i)),c=t+61*Math.sin(r(i)),m=n+65*Math.cos(r(l)),u=t+65*Math.sin(r(l)),f=n+45*Math.cos(r(s)),x=t+45*Math.sin(r(s));return(0,g.jsxs)("svg",{viewBox:"0 0 200 200",width:200,height:200,children:[(0,g.jsx)("circle",{cx:n,cy:t,r:85,fill:p.w4.colors.surface,stroke:p.w4.colors.border,strokeWidth:2}),Array.from({length:12},(e,o)=>{const a=o+1,i=a/12*360-90,l=n+69*Math.cos(r(i)),s=t+69*Math.sin(r(i));return(0,g.jsx)("text",{x:l,y:s+4,fill:p.w4.colors.mainText,fontSize:14,fontWeight:600,textAnchor:"middle",fontFamily:p.w4.typography.fontFamily,children:a},a)}),Array.from({length:60},(e,o)=>{const a=o/60*360-90,i=o%5==0,l=i?75:79;return(0,g.jsx)("line",{x1:n+l*Math.cos(r(a)),y1:t+l*Math.sin(r(a)),x2:n+83*Math.cos(r(a)),y2:t+83*Math.sin(r(a)),stroke:i?p.w4.colors.mainTextMuted:p.w4.colors.border,strokeWidth:i?2:1},o)}),(0,g.jsx)("line",{x1:n,y1:t,x2:f,y2:x,stroke:p.w4.colors.mainText,strokeWidth:4,strokeLinecap:"round"}),(0,g.jsx)("line",{x1:n,y1:t,x2:m,y2:u,stroke:p.w4.colors.accent,strokeWidth:2.5,strokeLinecap:"round"}),(0,g.jsx)("line",{x1:n-12*Math.cos(r(i)),y1:t-12*Math.sin(r(i)),x2:d,y2:c,stroke:"#f87171",strokeWidth:1.2,strokeLinecap:"round"}),(0,g.jsx)("circle",{cx:n,cy:t,r:4,fill:p.w4.colors.accent}),(0,g.jsx)("circle",{cx:n,cy:t,r:2,fill:"#f87171"})]})}function H({code:e}){const o=function(e){let o="pt";for(const a of e.trim().split("\n")){const[e,...n]=a.split(":"),t=n.join(":").trim();"locale"===e.trim().toLowerCase()&&(o=t.toLowerCase())}return{locale:o}}(e),[a,t]=(0,n.useState)("live"),[r,i]=(0,n.useState)(()=>(new Date).getHours()),[l,s]=(0,n.useState)(()=>(new Date).getMinutes()),[d,c]=(0,n.useState)(()=>(new Date).getSeconds());(0,n.useEffect)(()=>{if("live"!==a)return;const e=()=>{const e=new Date;i(e.getHours()),s(e.getMinutes()),c(e.getSeconds())};e();const o=setInterval(e,1e3);return()=>clearInterval(o)},[a]);const m=(0,n.useCallback)(e=>{t("manual"),c(0),i(o=>((o+e)%24+24)%24)},[]),p=(0,n.useCallback)(e=>{t("manual"),c(0),s(o=>((o+e)%60+60)%60)},[]),u=(0,n.useCallback)(()=>t("live"),[]);return(0,g.jsxs)(B,{children:[(0,g.jsxs)(C,{children:[(0,g.jsx)(N,{hours:r,minutes:l,seconds:d}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(F,{children:[D(r),":",D(l),(0,g.jsxs)("span",{style:{fontSize:"24px",opacity:.5},children:[":",D(d)]})]}),(0,g.jsx)(L,{children:I(r%12||12,l,o.locale)})]})]}),(0,g.jsxs)(E,{children:[(0,g.jsx)(P,{onClick:()=>m(-1),children:"−1h"}),(0,g.jsx)(P,{onClick:()=>m(1),children:"+1h"}),(0,g.jsx)(P,{onClick:()=>p(-15),children:"−15m"}),(0,g.jsx)(P,{onClick:()=>p(15),children:"+15m"}),(0,g.jsx)(P,{onClick:()=>p(-5),children:"−5m"}),(0,g.jsx)(P,{onClick:()=>p(5),children:"+5m"}),(0,g.jsx)(P,{active:"live"===a,onClick:u,children:"pt"===o.locale?"Agora":"Now"})]}),(0,g.jsx)(R,{children:"pt"===o.locale?"Usa os botões para mudar as horas e os minutos!":"Use the buttons to change the hours and minutes!"}),(0,g.jsx)(E,{children:[{label:"3:00",h:3,m:0},{label:"6:30",h:6,m:30},{label:"9:15",h:9,m:15},{label:"12:00",h:12,m:0},{label:"13:45",h:13,m:45},{label:"15:30",h:15,m:30},{label:"19:00",h:19,m:0},{label:"23:15",h:23,m:15}].map(e=>(0,g.jsx)(P,{onClick:()=>{t("manual"),i(e.h),s(e.m)},children:e.label},e.label))})]})}var K=a(68383),G=a(21426),W=a(25609),O=a(20320);const Y=d.default.div`
  margin: ${p.w4.spacing.lg} 0;
  border-radius: ${p.w4.borderRadius.md};
  border: 1px solid ${p.w4.colors.codeBorder};
  overflow: hidden;
`,U=d.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${p.w4.colors.codeBorder};
`,_=d.default.span`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,V=d.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":p.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${p.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${p.w4.colors.sidebarText}; border-color: ${p.w4.colors.sidebarText}; }
`,J={...G.A,'pre[class*="language-"]':{...G.A['pre[class*="language-"]'],background:p.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...G.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function q({lang:e="text",code:o}){const[a,t]=(0,n.useState)(!1);return(0,g.jsxs)(Y,{children:[(0,g.jsxs)(U,{children:[(0,g.jsx)(_,{children:e}),(0,g.jsxs)(V,{copied:a,onClick:()=>{navigator.clipboard.writeText(o).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})},children:[a?(0,g.jsx)(W.A,{size:12}):(0,g.jsx)(O.A,{size:12}),a?"Copied!":"Copy"]})]}),(0,g.jsx)(K.A,{language:e,style:J,showLineNumbers:o.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:p.w4.colors.codeBg},wrapLongLines:!1,children:o})]})}var Z=a(65569),X=a(8218),Q=a(57230),ee=a(22966),oe=a(21069);Z.A,X.A,Q.A,ee.A,oe.A,d.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${p.w4.borderRadius.md} ${p.w4.borderRadius.md} 0;
  padding: ${p.w4.spacing.md} ${p.w4.spacing.lg};
  margin: ${p.w4.spacing.lg} 0;
`,d.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${p.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${p.w4.typography.fontFamily};
  margin-bottom: ${p.w4.spacing.sm};
`,d.default.div`
  color: ${p.w4.colors.mainText};
  font-size: ${p.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,d.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${p.w4.spacing.xxl} 0 ${p.w4.spacing.xxl} ${p.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,d.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${p.w4.colors.sidebarTextMuted};
  font-family: ${p.w4.typography.fontFamily};
  margin-bottom: ${p.w4.spacing.md};
`,d.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,d.default.a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${p.w4.typography.fontSizeSm};
  font-family: ${p.w4.typography.fontFamily};
  color: ${({active:e})=>e?p.w4.colors.accent:p.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?p.w4.colors.accent:"transparent"};
  border-radius: 0 ${p.w4.borderRadius.sm} ${p.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${p.w4.colors.mainText}; background: ${p.w4.colors.sidebarHover}; }
`,d.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${p.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,d.default.div`flex: 1; min-width: 0;`,d.default.article`
  padding: ${p.w4.spacing.xxl} 0;
  color: ${p.w4.colors.mainText};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeMd};
  line-height: ${p.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${p.w4.spacing.xl} 0 ${p.w4.spacing.md};
    color: ${p.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${p.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${p.w4.typography.fontSizeXl}; border-bottom: 1px solid ${p.w4.colors.border}; padding-bottom: ${p.w4.spacing.sm}; }
  h2 { font-size: ${p.w4.typography.fontSizeLg}; border-bottom: 1px solid ${p.w4.colors.border}; padding-bottom: ${p.w4.spacing.xs}; }
  h3 { font-size: ${p.w4.typography.fontSizeMd}; }

  p { margin: ${p.w4.spacing.md} 0; }

  a { color: ${p.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${p.w4.colors.accentHover}; } }

  ul, ol { margin: ${p.w4.spacing.md} 0; padding-left: ${p.w4.spacing.xl}; }
  li { margin: ${p.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${p.w4.colors.border};
    margin: ${p.w4.spacing.lg} 0;
    padding: ${p.w4.spacing.sm} ${p.w4.spacing.lg};
    background: ${p.w4.colors.surface};
    color: ${p.w4.colors.mainTextMuted};
    border-radius: 0 ${p.w4.borderRadius.sm} ${p.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${p.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${p.w4.colors.codeBg};
    border: 1px solid ${p.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${p.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${p.w4.spacing.lg} 0; font-size: ${p.w4.typography.fontSizeBase}; }
  th, td { padding: ${p.w4.spacing.sm} ${p.w4.spacing.md}; border: 1px solid ${p.w4.colors.border}; text-align: left; }
  th { background: ${p.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${p.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${p.w4.colors.border}; margin: ${p.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${p.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${p.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${p.w4.spacing.lg} 0; }
`,d.default.div`
  display: flex;
  gap: ${p.w4.spacing.lg};
  padding: ${p.w4.spacing.xxl} 0;
  border-top: 1px solid ${p.w4.colors.border};
  margin-top: ${p.w4.spacing.xxl};
`,d.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${p.w4.spacing.md} ${p.w4.spacing.lg};
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${p.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,d.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${p.w4.colors.sidebarTextMuted}; font-family: ${p.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,d.default.div`
  font-size: ${p.w4.typography.fontSizeBase}; color: ${p.w4.colors.accent};
  font-family: ${p.w4.typography.fontFamily}; font-weight: 500;
`,d.default.div`
  color: ${p.w4.colors.mainTextMuted};
  padding: ${p.w4.spacing.xxl} ${p.w4.spacing.xl};
  font-family: ${p.w4.typography.fontFamily};
`;var ae=a(77207);const ne=ae.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,te=ae.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;function re(){return e=>{!function e(o){if("blockquote"===o.type){const e=o.children?.[0];if("paragraph"===e?.type){const a=e.children?.[0];if("text"===a?.type){const n=a.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);n&&(a.value=a.value.slice(n[0].length),a.value.trim()||1!==e.children.length||o.children.shift(),o.data=o.data??{},o.data.hName="div",o.data.hProperties={"data-callout":n[1].toUpperCase()})}}}o.children?.forEach(e)}(e)}}d.default.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${ne} 0.15s ease;
`,d.default.div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${p.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${te} 0.2s ease;
`,d.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${p.w4.colors.border};
`,d.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${p.w4.colors.mainText};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeMd};
  &::placeholder { color: ${p.w4.colors.sidebarTextMuted}; }
`,d.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${p.w4.colors.sidebarHover};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.sm};
  cursor: pointer;
  color: ${p.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${p.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${p.w4.colors.mainText}; background: ${p.w4.colors.border}; }
`,d.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${p.w4.spacing.sm} 0;
`,d.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.sidebarTextMuted};
`,d.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,d.default.button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?p.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${p.w4.colors.sidebarHover}; }
`,d.default.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${p.w4.colors.accent}20`:p.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?p.w4.colors.accent:p.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,d.default.div`
  flex: 1;
  min-width: 0;
`,d.default.div`
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,d.default.span`
  font-weight: 400;
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.sidebarTextMuted};
`,d.default.span`
  font-size: 11px;
  font-weight: 500;
  color: ${p.w4.colors.accent};
  background: ${p.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${p.w4.typography.fontFamilyMono};
`,d.default.div`
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${p.w4.colors.accent}25;
    color: ${p.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,d.default.div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?p.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,d.default.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${p.w4.colors.border};
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.sidebarTextMuted};
`,d.default.kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${p.w4.colors.sidebarHover};
  border: 1px solid ${p.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${p.w4.typography.fontFamilyMono};
  color: ${p.w4.colors.sidebarTextMuted};
`,d.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${p.w4.colors.sidebarTextMuted};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  text-align: center;
`,new Map,d.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${p.w4.typography.fontFamily};
  background: ${p.w4.colors.mainBg};
`,d.default.div`
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
`,d.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${p.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${p.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,d.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,d.default.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${p.w4.colors.mainText} 0%,
    ${p.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,d.default.p`
  font-size: ${p.w4.typography.fontSizeMd};
  color: ${p.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,d.default.span`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,d.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${p.w4.colors.sidebarHover};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  color: ${p.w4.colors.sidebarTextMuted};
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: ${p.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${p.w4.colors.accent}60;
    color: ${p.w4.colors.mainText};
    background: ${p.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${p.w4.colors.surface};
    border: 1px solid ${p.w4.colors.border};
    border-radius: 3px;
    color: ${p.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${p.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,d.default.div`
  display: flex;
  gap: 4px;
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: 2px;
`,d.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${p.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${p.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?p.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":p.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":p.w4.colors.mainText};
  }
`,d.default.div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${p.w4.spacing.md}`};
  border-bottom: 1px solid ${p.w4.colors.border}60;
`,d.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${p.w4.colors.accent}10`:p.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${p.w4.colors.accent}40`:"transparent"};
  border-radius: ${p.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,d.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${p.w4.colors.sidebarText};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${p.w4.colors.sidebarTextMuted}; }
`,d.default.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${p.w4.colors.sidebarTextMuted};
  border-radius: ${p.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${p.w4.colors.mainText}; }
`,d.default.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${p.w4.spacing.sm} 0;
`,d.default.button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${p.w4.spacing.md};
  background: ${({active:e})=>e?p.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?p.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${p.w4.colors.sidebarHover}; }
`,d.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${p.w4.colors.sidebarText};
`,d.default.span`
  font-weight: 400;
  color: ${p.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,d.default.div`
  font-family: ${p.w4.typography.fontFamily};
  font-size: 12px;
  color: ${p.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${p.w4.colors.accent}30;
    color: ${p.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,d.default.div`
  padding: 12px ${p.w4.spacing.md};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,d.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,d.default.span`
  font-size: 11px;
  color: ${p.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,new Map;const ie=d.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: ${p.w4.colors.mainBg};
`,le=d.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${p.w4.spacing.md};
  height: 36px;
  background: ${p.w4.colors.sidebarBg};
  border-bottom: 1px solid ${p.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,se=d.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${p.w4.colors.sidebarTextMuted};
  font-family: ${p.w4.typography.fontFamily};
`,de=d.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${p.w4.borderRadius.sm};
  cursor: pointer;
  color: ${p.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${p.w4.colors.sidebarHover};
    color: ${p.w4.colors.sidebarText};
  }
`,ce=d.default.div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${p.w4.colors.border};
    border-radius: 3px;
  }
`,me=d.default.article`
  max-width: 780px;
  margin: 0 auto;
  padding: ${p.w4.spacing.xl} ${p.w4.spacing.xxl};
  color: ${p.w4.colors.mainText};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeMd};
  line-height: ${p.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${p.w4.spacing.xl} 0 ${p.w4.spacing.md};
    color: ${p.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    &:first-of-type { margin-top: 0; }
  }
  h1 { font-size: ${p.w4.typography.fontSizeXl}; border-bottom: 1px solid ${p.w4.colors.border}; padding-bottom: ${p.w4.spacing.sm}; }
  h2 { font-size: ${p.w4.typography.fontSizeLg}; border-bottom: 1px solid ${p.w4.colors.border}; padding-bottom: ${p.w4.spacing.xs}; }
  h3 { font-size: ${p.w4.typography.fontSizeMd}; }

  p { margin: ${p.w4.spacing.md} 0; }

  a {
    color: ${p.w4.colors.accent};
    text-decoration: none;
    &:hover { text-decoration: underline; color: ${p.w4.colors.accentHover}; }
  }

  ul, ol { margin: ${p.w4.spacing.md} 0; padding-left: ${p.w4.spacing.xl}; }
  li { margin: ${p.w4.spacing.xs} 0; }

  /* Task list checkboxes */
  li input[type="checkbox"] {
    margin-right: 6px;
    accent-color: ${p.w4.colors.accent};
  }

  blockquote {
    border-left: 3px solid ${p.w4.colors.border};
    margin: ${p.w4.spacing.lg} 0;
    padding: ${p.w4.spacing.sm} ${p.w4.spacing.lg};
    background: ${p.w4.colors.surface};
    color: ${p.w4.colors.mainTextMuted};
    border-radius: 0 ${p.w4.borderRadius.sm} ${p.w4.borderRadius.sm} 0;
  }

  /* Callout variants */
  div[data-callout] {
    border-radius: ${p.w4.borderRadius.md};
    padding: ${p.w4.spacing.md} ${p.w4.spacing.lg};
    margin: ${p.w4.spacing.lg} 0;
    border-left: 4px solid;
    font-size: ${p.w4.typography.fontSizeBase};

    &::before {
      display: block;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: ${p.w4.spacing.xs};
    }
  }
  div[data-callout="NOTE"]      { background: rgba(56,139,253,0.1);  border-color: #388bfd; &::before { content: "Note";      color: #388bfd; } }
  div[data-callout="TIP"]       { background: rgba(63,185,80,0.1);   border-color: #3fb950; &::before { content: "Tip";       color: #3fb950; } }
  div[data-callout="WARNING"]   { background: rgba(210,153,34,0.1);  border-color: #d29922; &::before { content: "Warning";   color: #d29922; } }
  div[data-callout="CAUTION"]   { background: rgba(248,81,73,0.1);   border-color: #f85149; &::before { content: "Caution";   color: #f85149; } }
  div[data-callout="IMPORTANT"] { background: rgba(163,113,247,0.1); border-color: #a371f7; &::before { content: "Important"; color: #a371f7; } }

  code {
    font-family: ${p.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${p.w4.colors.codeBg};
    border: 1px solid ${p.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${p.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${p.w4.spacing.lg} 0; font-size: ${p.w4.typography.fontSizeBase}; }
  th, td { padding: ${p.w4.spacing.sm} ${p.w4.spacing.md}; border: 1px solid ${p.w4.colors.border}; text-align: left; }
  th { background: ${p.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${p.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${p.w4.colors.border}; margin: ${p.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${p.w4.borderRadius.md}; }

  /* KaTeX display math spacing */
  .math-display {
    overflow-x: auto;
    padding: ${p.w4.spacing.md} 0;
  }
`,pe=d.default.button`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${p.w4.colors.sidebarBg};
  border: 1px solid ${p.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${p.w4.borderRadius.md} 0 0 ${p.w4.borderRadius.md};
  cursor: pointer;
  color: ${p.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  align-self: center;

  &:hover {
    background: ${p.w4.colors.sidebarHover};
    color: ${p.w4.colors.sidebarText};
  }
`,ge=d.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${p.w4.typography.fontFamily};
  writing-mode: vertical-rl;
`;function ue({content:e,collapsed:o,onToggleCollapse:a,scrollRef:n,onScroll:d}){return o?(0,g.jsxs)(pe,{onClick:a,title:"Show preview",children:[(0,g.jsx)(c.A,{size:14}),(0,g.jsx)(ge,{children:"Preview"})]}):(0,g.jsxs)(ie,{children:[(0,g.jsxs)(le,{children:[(0,g.jsx)(se,{children:"Preview"}),(0,g.jsx)(de,{onClick:a,title:"Collapse preview",children:(0,g.jsx)(m.A,{size:15})})]}),(0,g.jsx)(ce,{ref:n,onScroll:d,children:(0,g.jsx)(me,{children:(0,g.jsx)(t.oz,{remarkPlugins:[r.A,i.A,re],rehypePlugins:[l.A,s.A],components:{div({node:e,children:o,...a}){const n=a["data-callout"];return n?(0,g.jsx)("div",{"data-callout":n,children:o}):(0,g.jsx)("div",{...a,children:o})},pre:({children:e})=>(0,g.jsx)(g.Fragment,{children:e}),code({className:e,children:o}){const a=/language-(\w+)/.exec(e??"")?.[1],n=String(o).replace(/\n$/,"");return"mermaid"===a?(0,g.jsx)(b,{code:n}):"chart"===a?(0,g.jsx)(T,{code:n}):"clock"===a?(0,g.jsx)(H,{code:n}):a||n.includes("\n")?(0,g.jsx)(q,{lang:a,code:n}):(0,g.jsx)("code",{className:e,children:o})}},children:e})})})]})}},35949(e,o,a){a.d(o,{C:()=>t,S:()=>n});const n=[{id:"showcase",label:"Full Showcase",description:"All supported features in one document",content:"# Markdown Editor — Feature Showcase\n\nWelcome! This editor supports **rich markdown** with live preview.\nUse the collapse buttons to hide the editor or preview pane.\n\n---\n\n## Text Formatting\n\nYou can write **bold**, *italic*, ~~strikethrough~~, and `inline code`.\nLinks work too: [Atlantis](https://github.com) opens in a new tab.\n\n> [!NOTE]\n> This is a GitHub-style callout. Supported types: NOTE, TIP, WARNING, CAUTION, IMPORTANT.\n\n> [!TIP]\n> Collapse the editor to enter reading mode. Collapse the preview to focus on writing.\n\n---\n\n## Code Blocks\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nasync function fetchUser(id: number): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n}\n```\n\n---\n\n## Math (LaTeX)\n\nInline math: $E = mc^2$ and the Euler identity $e^{i\\pi} + 1 = 0$.\n\nDisplay math:\n\n$$\n\\int_{-\\infty}^{\\infty} e^{-x^2}\\, dx = \\sqrt{\\pi}\n$$\n\n---\n\n## Mermaid Diagrams\n\n```mermaid\nflowchart TD\n    A[Write Markdown] --\x3e B{Live Preview}\n    B --\x3e|Renders| C[HTML Output]\n    B --\x3e|Supports| D[Math / Mermaid / Code]\n    C --\x3e E[Reading Mode]\n    D --\x3e E\n```\n\n---\n\n## Tables\n\n| Feature        | Supported | Notes                       |\n|----------------|-----------|-----------------------------|\n| GFM tables     | ✅        | With striped rows            |\n| Math (LaTeX)   | ✅        | Inline and block             |\n| Mermaid        | ✅        | Flowcharts, sequences, etc.  |\n| Charts         | ✅        | Bar, line, pie               |\n| Clock          | ✅        | Interactive analog + digital |\n| Syntax highlight | ✅      | 20+ languages               |\n\n---\n\n## Charts\n\n```chart\ntype: bar\ntitle: Monthly Sales\nlabels: [Jan, Feb, Mar, Apr, May, Jun]\ndata: [12, 19, 8, 15, 22, 17]\ncolors: [#388bfd, #3fb950, #d29922, #a371f7, #f87171, #22d3ee]\n```\n\n```chart\ntype: pie\ntitle: Browser Market Share\nlabels: [Chrome, Safari, Firefox, Edge, Other]\ndata: [65, 18, 7, 5, 5]\n```\n\n```chart\ntype: line\ntitle: Temperature (°C)\nlabels: [Mon, Tue, Wed, Thu, Fri, Sat, Sun]\ndata: [18, 20, 22, 19, 23, 25, 24]\n```\n\n---\n\n## Interactive Clock\n\n```clock\nlocale: en\n```\n\n---\n\n## Task Lists\n\n- [x] Side-by-side editor and preview\n- [x] Collapsible panes\n- [x] Math support\n- [x] Mermaid diagrams\n- [x] Charts (bar, line, pie)\n- [x] Interactive clock\n- [x] Syntax highlighting\n"},{id:"charts",label:"Charts",description:"Bar, line, and pie charts from simple data",content:["# Chart Examples","","Use ` ``` chart` code blocks to render interactive charts.","","---","","## Bar Chart","","```chart","type: bar","title: Favourite Fruits","labels: [Apple, Banana, Orange, Strawberry, Grapes]","data: [4, 6, 3, 7, 2]","colors: [#ff6b6b, #ffd93d, #ff9f43, #ee5a24, #6c5ce7]","```","","---","","## Pie Chart","","```chart","type: pie","title: Time Spent Today","labels: [School, Homework, Play, Eating, Sleep]","data: [6, 2, 3, 1, 10]","```","","---","","## Line Chart","","```chart","type: line","title: Weekly Steps (thousands)","labels: [Mon, Tue, Wed, Thu, Fri, Sat, Sun]","data: [5, 7, 4, 8, 6, 12, 9]","colors: [#3fb950]","```","","---","","## Interactive Clock","","```clock","locale: en","```"].join("\n")},{id:"math",label:"Math (LaTeX)",description:"Mathematical notation with KaTeX",content:"# Math Examples\n\nAll math is rendered with KaTeX.\nUse `$...$` for inline math and `$$...$$` for display math.\n\n---\n\n## Calculus\n\n$$\n\\frac{d}{dx}\\left[\\int_a^x f(t)\\, dt\\right] = f(x)\n$$\n\n$$\n\\int_0^\\infty e^{-x^2}\\, dx = \\frac{\\sqrt{\\pi}}{2}\n$$\n\n---\n\n## Linear Algebra\n\n$$\n\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc\n$$\n\n---\n\n## Probability\n\nBayes' theorem:\n\n$$\nP(A \\mid B) = \\frac{P(B \\mid A)\\, P(A)}{P(B)}\n$$\n"}],t="# Hello\n\nStart writing **Markdown** here — the preview updates live.\n\nSwitch to **Mermaid** mode in the top bar to create diagrams.\n"},35339(e,o,a){a.d(o,{U:()=>n});const n=[{label:"Flowchart",code:"flowchart TD\n    A([Start]) --\x3e B{Is it working?}\n    B -- Yes --\x3e C[Great!]\n    B -- No --\x3e D[Debug it]\n    D --\x3e E{Fixed?}\n    E -- Yes --\x3e C\n    E -- No --\x3e F[Ask for help]\n    F --\x3e D\n    C --\x3e G([End])"},{label:"Sequence Diagram",code:"sequenceDiagram\n    participant Client\n    participant API\n    participant DB\n\n    Client->>API: POST /login\n    API->>DB: SELECT user WHERE email=?\n    DB--\x3e>API: User record\n    API--\x3e>Client: 200 OK + JWT token\n    Client->>API: GET /profile (Bearer token)\n    API--\x3e>Client: 200 OK + profile data"},{label:"Class Diagram",code:"classDiagram\n    class Animal {\n      +String name\n      +int age\n      +makeSound() String\n    }\n    class Dog {\n      +String breed\n      +fetch() void\n    }\n    class Cat {\n      +bool isIndoor\n      +purr() void\n    }\n    Animal <|-- Dog\n    Animal <|-- Cat"},{label:"Entity Relationship",code:"erDiagram\n    USER {\n      int id PK\n      string email\n      string name\n    }\n    ORDER {\n      int id PK\n      int user_id FK\n      decimal total\n    }\n    PRODUCT {\n      int id PK\n      string name\n      decimal price\n    }\n    USER ||--o{ ORDER : places\n    ORDER ||--|{ PRODUCT : contains"},{label:"Gantt Chart",code:"gantt\n    title Project Timeline\n    dateFormat  YYYY-MM-DD\n    section Planning\n    Requirements    :done,    req,  2024-01-01, 2024-01-14\n    Design          :done,    des,  2024-01-15, 2024-01-28\n    section Development\n    Backend API     :active,  be,   2024-01-29, 2024-02-25\n    Frontend        :         fe,   2024-02-01, 2024-02-28\n    section Release\n    Deploy          :         dep,  2024-03-18, 2024-03-20"},{label:"State Diagram",code:"stateDiagram-v2\n    [*] --\x3e Idle\n    Idle --\x3e Loading : fetchData()\n    Loading --\x3e Success : data received\n    Loading --\x3e Error : request failed\n    Success --\x3e Idle : reset()\n    Error --\x3e Loading : retry()\n    Error --\x3e Idle : dismiss()\n    Success --\x3e [*] : done"},{label:"Git Graph",code:'gitGraph\n   commit id: "Initial commit"\n   commit id: "Add README"\n   branch feature/login\n   checkout feature/login\n   commit id: "Add login form"\n   commit id: "Add auth API"\n   checkout main\n   merge feature/login id: "Merge login"\n   commit id: "v1.0.0" tag: "v1.0.0"'}]}}]);
//# sourceMappingURL=902.695faf43dc8d15f33ef4.js.map