"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[6551],{4914(o,e,n){n.d(e,{FlyoutPanel:()=>b});var t=n(7359),a=n(3233),r=n(7207),i=n(255),l=n(217),d=n(5959),s=n(5185),c=n(5723);const p=r.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=a.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:o})=>o}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:o})=>o+8}px));
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
`,f=a.default.div`
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
`,u=a.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:o})=>o?l.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:o})=>o?l.w4.colors.accent:"transparent"};
  color: ${({active:o})=>o?l.w4.colors.accent:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${l.w4.colors.accentMuted};
    color: ${l.w4.colors.mainText};
  }
`;function m({iconKey:o}){const e=o?s.t[o]??i.A:i.A;return(0,c.jsx)(e,{size:14,strokeWidth:1.75})}function x({entries:o,activeId:e,onSelect:n}){return(0,c.jsx)(c.Fragment,{children:o.map(o=>o.children?(0,c.jsx)(t.Fragment,{children:(0,c.jsx)(x,{entries:o.children,activeId:e,onSelect:n})},o.id):(0,c.jsxs)(u,{active:e===o.id,onClick:()=>n(o),children:[(0,c.jsx)(m,{iconKey:o.icon}),o.name]},o.id))})}function b({activeId:o}){const{flyout:e,scheduleFlyoutClose:n,cancelFlyoutClose:t}=(0,d.c)();if(!e)return null;const a=e.entry.icon?s.t[e.entry.icon]??i.A:i.A;return(0,c.jsxs)(g,{anchorY:e.anchorY,onMouseEnter:t,onMouseLeave:n,children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(a,{size:13,strokeWidth:2}),e.entry.name]}),(0,c.jsx)(x,{entries:e.entry.children??[],activeId:o,onSelect:o=>{e.onSelect(o),n()}})]})}},5959(o,e,n){n.d(e,{I:()=>a,c:()=>r});var t=n(7359);const a=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,t.useContext)(a)},5185(o,e,n){n.d(e,{t:()=>yo});var t=n(9510),a=n(9038),r=n(7400),i=n(7561),l=n(8207),d=n(7902),s=n(6896),c=n(3013),p=n(2887),g=n(7901),f=n(9848),u=n(2164),m=n(3045),x=n(3775),b=n(3539),h=n(1783),y=n(9416),w=n(1837),$=n(7167),v=n(4494),z=n(2314),k=n(5751),A=n(255),M=n(9633),T=n(2946),S=n(822),j=n(6720),B=n(8456),F=n(3317),C=n(2709),R=n(9301),E=n(8006),P=n(3517),L=n(7032),D=n(6949),H=n(8218),I=n(6829),N=n(5553),K=n(9591),Y=n(9923),G=n(2820),_=n(4621),O=n(8479),V=n(2534),W=n(6673),U=n(7490),J=n(9033),Z=n(5775),q=n(1365),X=n(2937),Q=n(9821),oo=n(5912),eo=n(158),no=n(8641),to=n(8607),ao=n(3249),ro=n(1821),io=n(5889),lo=n(9655),so=n(7170),co=n(9161),po=n(1849),go=n(1604),fo=n(3142),uo=n(1187),mo=n(7747),xo=n(2932),bo=n(4525),ho=n(7230);const yo={activity:s.A,"a-large-small":d.A,apple:c.A,"arrow-right":p.A,"bar-chart-2":t.A,book:f.A,"book-open":g.A,briefcase:m.A,calendar:x.A,clock:h.A,"circle-dot":b.A,cloud:y.A,compass:w.A,cpu:$.A,droplets:v.A,feather:z.A,file:A.A,"file-text":k.A,folder:M.A,"git-branch":T.A,github:S.A,globe:j.A,grid:r.A,hand:B.A,hash:F.A,heart:C.A,key:E.A,hexagon:R.A,home:i.A,landmark:P.A,layers:l.A,"layout-grid":L.A,leaf:D.A,lightbulb:H.A,list:I.A,map:K.A,"map-pin":N.A,"message-circle":Y.A,"message-square":G.A,minus:_.A,monitor:O.A,mountain:V.A,package:W.A,palette:U.A,"pen-tool":J.A,"pie-chart":a.A,plane:Z.A,plus:q.A,ruler:X.A,shirt:Q.A,slash:oo.A,square:eo.A,star:no.A,sun:to.A,terminal:ao.A,thermometer:ro.A,triangle:io.A,trophy:lo.A,truck:so.A,type:co.A,users:po.A,"volume-2":go.A,watch:fo.A,waves:uo.A,wind:mo.A,wrench:xo.A,x:bo.A,zap:ho.A,bot:u.A}},6879(o,e,n){n.d(e,{tz:()=>$o,UO:()=>po,PE:()=>S,MJ:()=>J,PL:()=>N,Is:()=>I,KL:()=>D,w4:()=>t.w4,mZ:()=>H});var t=n(217),a=n(7359),r=n(3233),i=n(5723);r.default.button`
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
`;var l=n(7207),d=n(3661),s=n(5959);const c="260px",p="56px",g=r.default.header`
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
`,f=r.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,u=r.default.button`
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
`,m=l.keyframes`
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
`,b=r.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${m} 10s ease ${({index:o})=>.07*o}s infinite;

  ${({accent:o})=>o&&`\n    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,h=r.default.div`
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
`,$=r.default.div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,v=r.default.aside`
  width: ${({collapsed:o})=>o?p:c};
  min-width: ${({collapsed:o})=>o?p:c};
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
`,z=r.default.div`
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
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function M(){return(0,i.jsx)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((o,e)=>(0,i.jsx)(b,{index:e,accent:o.accent,children:o.char},e))})}const T="atlantis:sidebar-collapsed";function S({sidebar:o,children:e,topBarRight:t,title:r="Atlantis",activeId:l=null}){const[c,p]=(0,a.useState)(()=>{try{return"true"===localStorage.getItem(T)}catch{return!1}}),[m,x]=(0,a.useState)(null),b=(0,a.useRef)(),A=()=>p(o=>{const e=!o;try{localStorage.setItem(T,String(e))}catch{}return e}),S=a.useMemo(()=>a.lazy(()=>Promise.resolve().then(n.bind(n,4914)).then(o=>({default:o.FlyoutPanel}))),[]);return(0,i.jsx)(s.I.Provider,{value:{collapsed:c,toggle:A,flyout:m,openFlyout:(o,e,n)=>{clearTimeout(b.current),x({entry:o,anchorY:e,onSelect:n})},scheduleFlyoutClose:()=>{b.current=setTimeout(()=>x(null),160)},cancelFlyoutClose:()=>clearTimeout(b.current)},children:(0,i.jsxs)($,{children:[(0,i.jsxs)(g,{children:[o&&(0,i.jsx)(f,{children:(0,i.jsx)(u,{onClick:A,title:c?"Expand sidebar":"Collapse sidebar",children:(0,i.jsx)(d.A,{size:17})})}),(0,i.jsx)(M,{}),r&&(0,i.jsx)(h,{children:r}),t&&(0,i.jsx)(y,{children:t})]}),(0,i.jsxs)(w,{children:[null!=o&&(0,i.jsx)(v,{collapsed:c,children:(0,i.jsx)(z,{children:o})}),(0,i.jsx)(k,{children:e})]}),m&&(0,i.jsx)(a.Suspense,{fallback:null,children:(0,i.jsx)(S,{activeId:l})})]})})}n(5185),r.default.div`
  display: grid;
  grid-template-rows: ${({open:o})=>o?"1fr":"0fr"};
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
  padding: ${({collapsed:o})=>o?"10px 0":`${t.w4.spacing.sm} ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:o})=>o?"center":"space-between"};
  gap: ${({collapsed:o})=>o?"0":t.w4.spacing.sm};
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
  gap: ${({collapsed:o})=>o?"0":"8px"};
  min-width: 0;
`,r.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:o})=>o?0:1};
  max-width: ${({collapsed:o})=>o?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,r.default.span`
  display: ${({collapsed:o})=>o?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:o})=>o?"90deg":"0deg"});
  }
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:o})=>o?"9px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:o})=>o?"center":"flex-start"};
  gap: ${({collapsed:o})=>o?"0":"8px"};
  background: ${({active:o})=>o?t.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:o})=>o?"none":"2px"} solid
    ${({active:o})=>o?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:o})=>o?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: ${({active:o})=>o?"600":"400"};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:o})=>o?"0":`0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`;const j=l.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;r.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${j} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,n(4914);var B=n(1920),F=n(8607),C=n(8479);r.default.button`
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
`,B.A,F.A,C.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(o=>o.places);const R="documents",E="settings";function P(){return new Promise((o,e)=>{const n=indexedDB.open("atlantis-tools",2);n.onupgradeneeded=o=>{const e=o.target.result;e.objectStoreNames.contains(R)||e.createObjectStore(R,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),e.objectStoreNames.contains(E)||e.createObjectStore(E,{keyPath:"key"})},n.onsuccess=()=>o(n.result),n.onerror=()=>e(n.error)})}let L={async saveDoc(o,e,n){const t=await P(),a={appId:o,name:e,content:n,savedAt:Date.now()};return new Promise((o,e)=>{const n=t.transaction(R,"readwrite").objectStore(R).add(a);n.onsuccess=()=>o(String(n.result)),n.onerror=()=>e(n.error)})},async updateDoc(o,e,n){const t=await P();return new Promise((a,r)=>{const i=t.transaction(R,"readwrite").objectStore(R),l=i.get(Number(o));l.onsuccess=()=>{const o=l.result;if(!o)return void r(new Error("Doc not found"));const t=i.put({...o,name:e,content:n,savedAt:Date.now()});t.onsuccess=()=>a(),t.onerror=()=>r(t.error)},l.onerror=()=>r(l.error)})},async listDocs(o){const e=await P();return new Promise((n,t)=>{const a=e.transaction(R,"readonly").objectStore(R).index("appId").getAll(o);a.onsuccess=()=>n(a.result.map(o=>({...o,id:String(o.id)})).reverse()),a.onerror=()=>t(a.error)})},async deleteDoc(o){const e=await P();return new Promise((n,t)=>{const a=e.transaction(R,"readwrite").objectStore(R).delete(Number(o));a.onsuccess=()=>n(),a.onerror=()=>t(a.error)})},async putSetting(o,e){const n=await P();return new Promise((t,a)=>{const r=n.transaction(E,"readwrite").objectStore(E).put({key:o,value:e});r.onsuccess=()=>t(),r.onerror=()=>a(r.error)})},async getSetting(o){const e=await P();return new Promise((n,t)=>{const a=e.transaction(E,"readonly").objectStore(E).get(o);a.onsuccess=()=>n(a.result?a.result.value:null),a.onerror=()=>t(a.error)})}};function D(o,e,n){return L.saveDoc(o,e,n)}function H(o,e,n){return L.updateDoc(o,e,n)}function I(o,e){return L.putSetting(o,e)}function N(o){return L.getSetting(o)}const K=r.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,Y=r.default.div`
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
`,G=r.default.div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,_=r.default.input`
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
`,O=r.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,V=r.default.button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:o,danger:e})=>e?"rgba(248,81,73,0.12)":o?t.w4.colors.accent:"none"};
  color: ${({primary:o,danger:e})=>e?t.w4.colors.danger:o?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:o,danger:e})=>e?t.w4.colors.danger:o?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,W=r.default.div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,U=r.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`;function J({onSave:o,onUpdate:e,onCancel:n,existingDoc:t}){const[r,l]=(0,a.useState)(t?.name??""),d=(0,a.useRef)(null);return(0,a.useEffect)(()=>{d.current?.focus(),t&&d.current?.select()},[t]),(0,i.jsx)(K,{onClick:n,children:(0,i.jsxs)(Y,{onClick:o=>o.stopPropagation(),children:[(0,i.jsx)(G,{children:"Save document"}),t&&e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{children:"Update the current version or save as a new one."}),(0,i.jsxs)(O,{children:[(0,i.jsx)(V,{onClick:n,children:"Cancel"}),(0,i.jsxs)(V,{danger:!0,onClick:e,children:['Update "',t.name,'"']})]}),(0,i.jsx)(W,{})]}),(0,i.jsx)(_,{ref:d,value:r,onChange:o=>l(o.target.value),onKeyDown:a=>{"Enter"===a.key&&r.trim()&&(t&&r.trim()===t.name&&e?e():o(r.trim())),"Escape"===a.key&&n()},placeholder:t?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,i.jsxs)(O,{children:[!t&&(0,i.jsx)(V,{onClick:n,children:"Cancel"}),(0,i.jsx)(V,{primary:!0,disabled:!r.trim(),onClick:()=>o(r.trim()),children:"Save as new"})]})]})})}var Z=n(5625),q=n(679),X=n(4872);const Q=r.default.div`
  position: relative;
`,oo=r.default.button`
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
`,eo=r.default.div`
  display: ${({open:o})=>o?"flex":"none"};
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
`,no=r.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,to=r.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,ao=r.default.div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,ro=r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
  }
`,io=r.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,lo=r.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,so=r.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-top: 1px;
`,co=r.default.button`
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
`;function po({appId:o,onLoad:e}){const[n,t]=(0,a.useState)(!1),[r,l]=(0,a.useState)([]),d=(0,a.useRef)(null),s=(0,a.useCallback)(()=>{(function(o){return L.listDocs(o)})(o).then(l).catch(()=>{})},[o]);(0,a.useEffect)(()=>{if(!n)return;s();const o=o=>{d.current&&!d.current.contains(o.target)&&t(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[n,s]);return(0,i.jsxs)(Q,{ref:d,children:[(0,i.jsxs)(oo,{onClick:()=>t(o=>!o),children:[(0,i.jsx)(Z.A,{size:14}),"Saved",(0,i.jsx)(q.A,{size:13,style:{marginLeft:2}})]}),(0,i.jsxs)(eo,{open:n,children:[(0,i.jsx)(no,{children:"Saved versions"}),(0,i.jsx)(to,{children:0===r.length?(0,i.jsx)(ao,{children:"No saved documents yet."}):r.map(o=>{return(0,i.jsxs)(ro,{children:[(0,i.jsxs)(io,{onClick:()=>{e(o.content,o.id,o.name),t(!1)},children:[(0,i.jsx)(lo,{children:o.name}),(0,i.jsx)(so,{children:(n=o.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(n)))})]}),(0,i.jsx)(co,{onClick:e=>(async(o,e)=>{o.stopPropagation(),await function(o){return L.deleteDoc(o)}(e),l(o=>o.filter(o=>o.id!==e))})(e,o.id),title:"Delete",children:(0,i.jsx)(X.A,{size:13})})]},o.id);var n})})]})]})}new Set([10751]),new Set([27]),r.default.div`
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
`;const go=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,fo=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,uo=l.keyframes`
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
  animation: ${go} 0.4s ease 0.15s both;
`,r.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,r.default.div`
  position: absolute;
  inset: 0;
  animation: ${fo} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:o})=>o}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:o})=>o}px;
    height: ${({size:o})=>o}px;
    border-radius: 50%;
    background: ${({color:o})=>o};
    box-shadow: 0 0 8px ${({color:o})=>o}44;
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
  animation: ${uo} 1.4s ease-in-out infinite;
`,r.default.span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`;const mo=[{id:"playground",label:"Playground",hash:"#/playground",icon:"🧪"},{id:"pad",label:"Pad",hash:"#/mdpad",icon:"✏️"},{id:"chartbuilder",label:"Charts",hash:"#/chartbuilder",icon:"📉"},{id:"csvexplorer",label:"CSV",hash:"#/csvexplorer",icon:"📊"},{id:"regexlab",label:"Regex",hash:"#/regexlab",icon:"🔍"},{id:"jsonexplorer",label:"JSON",hash:"#/jsonexplorer",icon:"🗂️"},{id:"codediff",label:"Diff",hash:"#/codediff",icon:"📋"},{id:"jwtinspector",label:"JWT",hash:"#/jwtinspector",icon:"🔑"},{id:"cronbuilder",label:"Cron",hash:"#/cronbuilder",icon:"⏰"},{id:"colorlab",label:"Colors",hash:"#/colorlab",icon:"🎨"},{id:"apiexplorer",label:"API",hash:"#/apiexplorer",icon:"🛰"}],xo=r.default.nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${t.w4.spacing.sm} 0;
`,bo=r.default.div`
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
  ${({collapsed:o})=>o&&"\n    font-size: 0;\n    padding: 0;\n    margin: 0;\n    height: 0;\n  "}
`,ho=r.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  background: ${({active:o})=>o?t.w4.colors.accentMuted:"transparent"};
  color: ${({active:o})=>o?t.w4.colors.accent:t.w4.colors.sidebarText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: ${({active:o})=>o?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }

  ${({collapsed:o})=>o&&"\n    justify-content: center;\n    padding: 8px;\n    margin: 0 4px;\n  "}
`,yo=r.default.span`
  font-size: 15px;
  line-height: 1;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
`,wo=r.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:o})=>o&&"display: none;"}
`;function $o({activeAppId:o}){const{collapsed:e}=(0,s.c)(),n=(0,a.useRef)(null),t=o=>{n.current!==o&&(n.current=o,document.activeElement?.blur(),window.location.hash=o,setTimeout(()=>{n.current=null},50))};return(0,i.jsxs)(xo,{children:[(0,i.jsx)(bo,{collapsed:e,children:"Dev Tools"}),mo.map(n=>(0,i.jsxs)(ho,{active:o===n.id,collapsed:e,onPointerDown:o=>{0===o.button&&t(n.hash)},onClick:()=>t(n.hash),title:n.label,children:[(0,i.jsx)(yo,{children:n.icon}),(0,i.jsx)(wo,{collapsed:e,children:n.label})]},n.id))]})}},217(o,e,n){n.d(e,{w4:()=>r});const t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},a="--at-",r={colors:function(){const o={};for(const e of Object.keys(t))o[e]=`var(${a}${e})`;return o}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${a}suiteLab)`,vida:`var(${a}suiteVida)`,learn:`var(${a}suiteLearn)`,games:`var(${a}suiteGames)`,ent:`var(${a}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:"\n    outline: 2px solid var(--at-accent);\n    outline-offset: 2px;\n  "}},1264(o,e,n){n.d(e,{$n:()=>x,ms:()=>z,tJ:()=>k,K0:()=>w,M7:()=>A});var t=n(7359),a=n(3233),r=n(6879),i=n(5723);const l={ghost:"transparent",accent:"transparent",primary:r.w4.colors.accent,success:"#238636",danger:"#da3633"},d={ghost:r.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:r.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},s={ghost:r.w4.colors.border,accent:r.w4.colors.accent,primary:r.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:r.w4.colors.mainTextMuted,accent:r.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},p={ghost:r.w4.colors.mainText,accent:r.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={sm:"28px",md:"30px"},f={sm:"0 10px",md:"0 12px"},u={sm:"12px",md:"12px"},m=a.default.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:o})=>g[o]};
  padding: ${({size:o})=>f[o]};
  background: ${({variant:o})=>l[o]};
  border: 1px solid ${({variant:o})=>s[o]};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${({variant:o})=>c[o]};
  font-size: ${({size:o})=>u[o]};
  font-family: ${r.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:o})=>d[o]};
    color: ${({variant:o})=>p[o]};
    border-color: ${({variant:o})=>"ghost"===o?r.w4.colors.accent:s[o]};
  }

  &:focus-visible {
    outline: 2px solid ${r.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,x=t.forwardRef(function({variant:o="ghost",size:e="md",icon:n,iconRight:t,children:a,...r},l){return(0,i.jsxs)(m,{ref:l,variant:o,size:e,...r,children:[n,a,t]})}),b={default:r.w4.colors.accent,danger:"#f85149"},h={default:r.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},y=a.default.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:o})=>o?`${r.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:o})=>o?r.w4.colors.accent:r.w4.colors.border};
  border-radius: ${({shape:o})=>"circle"===o?"999px":r.w4.borderRadius.sm};
  color: ${({active:o})=>o?r.w4.colors.accent:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover:not(:disabled) {
    color: ${({tone:o})=>b[o]};
    background: ${({tone:o})=>h[o]};
    border-color: ${({tone:o})=>b[o]};
  }
  &:focus-visible {
    outline: 2px solid ${r.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,w=t.forwardRef(function({active:o=!1,shape:e="square",tone:n="default",children:t,...a},r){return(0,i.jsx)(y,{ref:r,active:o,shape:e,tone:n,...a,children:t})}),$=a.default.div`
  position: relative;
  display: inline-flex;
`,v=a.default.div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:o})=>"right"===o?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${r.w4.colors.sidebarBg};
  border: 1px solid ${r.w4.colors.sidebarBorder};
  border-radius: ${r.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`;function z({trigger:o,children:e,align:n="right",open:a,onOpenChange:r}){const[l,d]=(0,t.useState)(!1),s=a??l,c=o=>{r&&r(o),void 0===a&&d(o)},p=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!s)return;const o=o=>{p.current&&!p.current.contains(o.target)&&c(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[s]);const g=t.cloneElement(o,{onClick:e=>{o.props.onClick?.(e),c(!s)},"aria-expanded":s,"aria-haspopup":"menu"});return(0,i.jsxs)($,{ref:p,children:[g,s&&(0,i.jsx)(v,{align:n,role:"menu",children:e})]})}const k=a.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  color: ${r.w4.colors.mainText};
  font-size: ${r.w4.typography.fontSizeSm};
  font-family: ${r.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${r.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${r.w4.colors.accent};
    outline-offset: -2px;
  }
`,A=(a.default.div`
  height: 1px;
  margin: 4px 0;
  background: ${r.w4.colors.sidebarBorder};
`,a.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
`,a.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
`);a.default.span`
  width: 1px;
  height: 20px;
  background: ${r.w4.colors.border};
  flex-shrink: 0;
`;var M=n(7207);const T=M.keyframes`
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
  border: 1px solid ${r.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  &:hover {
    border-color: ${r.w4.colors.accent};
    background: ${r.w4.colors.sidebarHover};
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
  background: ${r.w4.colors.accentMuted};
  border: 1px solid ${r.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${r.w4.colors.accent};
  font-family: ${r.w4.typography.fontFamily};
  flex-shrink: 0;
`,a.default.span`
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,a.default.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  background: ${r.w4.colors.surfaceRaised};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${T} 0.15s ease;
  backdrop-filter: blur(12px);
`,a.default.div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${r.w4.colors.border};
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
  background: ${r.w4.colors.accentMuted};
  border: 1px solid ${r.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${r.w4.colors.accent};
  font-family: ${r.w4.typography.fontFamily};
  margin-bottom: 10px;
`,a.default.div`
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
`,a.default.div`
  font-family: ${r.w4.typography.fontFamily};
  font-size: 12px;
  color: ${r.w4.colors.mainTextMuted};
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
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${({danger:o})=>o?"#e05252":r.w4.colors.mainText};
  }
`;(0,r.PL)("shell:locale").then(o=>{if(function(o){return"en"===o||"pt"===o}(o))try{localStorage.setItem("atlantis:locale",o)}catch{}}).catch(()=>{}),a.default.div`
  display: flex;
  gap: 4px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 2px;
`,a.default.button`
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
  background: ${({active:o})=>o?r.w4.colors.accent:"transparent"};
  color: ${({active:o})=>o?"#0d1117":r.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:o})=>o?"#0d1117":r.w4.colors.mainText};
  }
`,a.default.div`
  position: relative;
  display: inline-block;
`,a.default.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:o})=>o?r.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:o})=>o?r.w4.colors.borderStrong:r.w4.colors.border};
  border-radius: 999px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${r.w4.transitions.fast},
    border-color ${r.w4.transitions.fast},
    color ${r.w4.transitions.fast};

  &:hover {
    color: ${r.w4.colors.mainText};
    border-color: ${r.w4.colors.borderStrong};
  }
  &:focus-visible { ${r.w4.focusRing} }
`,a.default.div`
  display: inline-flex;
  align-items: center;
`,a.default.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-left: -4px;
  background: ${({color:o})=>o};
  border: 2px solid ${r.w4.colors.surface};

  &:first-of-type { margin-left: 0; }
`,a.default.span`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${r.w4.colors.accentMuted};
  color: ${r.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;const S=M.keyframes`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;a.default.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${r.w4.colors.surfaceRaised};
  border: 1px solid ${r.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${r.w4.elevation.lg};
  z-index: ${r.w4.zIndex.dropdown};
  animation: ${S} 0.18s ease both;

  @media (max-width: ${r.w4.breakpoints.md}) {
    left: auto;
    right: 0;
    transform: none;
    animation: none;
  }
`,(0,a.default)("button",{shouldForwardProp:o=>"accent"!==o&&"expanded"!==o})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:o})=>o?r.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${r.w4.transitions.fast};

  &:hover { background: ${r.w4.colors.surfaceHover}; }
  &:focus-visible { ${r.w4.focusRing} }
`,(0,a.default)("span",{shouldForwardProp:o=>"accent"!==o})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:o})=>o}26;
  color: ${({accent:o})=>o};
  border: 1px solid ${({accent:o})=>o}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,a.default.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,a.default.span`
  font-size: 13.5px;
  color: ${r.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,a.default.span`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${r.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,(0,a.default)("span",{shouldForwardProp:o=>"accent"!==o})`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:o})=>o}30;
  color: ${({accent:o})=>o};
  border-radius: 999px;
`,a.default.div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${r.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,a.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${r.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${r.w4.transitions.fast},
    color ${r.w4.transitions.fast};

  &:hover {
    color: ${r.w4.colors.mainText};
    background: ${r.w4.colors.surfaceHover};
  }
  &:focus-visible { ${r.w4.focusRing} }
`,a.default.span`
  font-size: 14px;
  width: 18px;
  text-align: center;
  flex-shrink: 0;
`,a.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
`,a.default.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${r.w4.colors.border};
  border-radius: 999px;
  color: ${r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    color: ${r.w4.colors.accent};
    border-color: ${r.w4.colors.accent};
    background: ${r.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${r.w4.colors.accent};
    outline-offset: 2px;
  }
`,a.default.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${r.w4.colors.border};
  border-radius: 999px;
  color: ${r.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${r.w4.colors.sidebarHover};
    border: 1px solid ${r.w4.colors.borderSubtle};
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${r.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color 0.15s, border-color 0.15s, background 0.15s;
  }

  &:hover {
    color: ${r.w4.colors.accent};
    border-color: ${r.w4.colors.accent};
    background: ${r.w4.colors.sidebarHover};
  }
  &:hover .kbd {
    color: ${r.w4.colors.accent};
    border-color: ${r.w4.colors.accent}55;
    background: ${r.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${r.w4.colors.accent};
    outline-offset: 2px;
  }
`,a.default.div`
  position: relative;
  display: inline-flex;
`,a.default.span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${r.w4.colors.mainBg};
  color: #fff;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,a.default.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${r.w4.colors.accent};
  border: 1px solid ${r.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${r.w4.colors.accentHover};
    border-color: ${r.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${r.w4.colors.accent};
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
  ${({forceVisible:o})=>o?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
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
  left: ${({left:o})=>o}px;
  top: ${({top:o})=>o}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:o})=>o?1:.9};
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
  background: ${r.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:o})=>60*o}px,
    ${({dy:o})=>60*o}px
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

  @media (max-width: ${r.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,a.default.button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:o})=>o};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${r.w4.typography.fontFamily};
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
`;const j=M.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;(0,a.default)("div",{shouldForwardProp:o=>"accentColor"!==o&&"pinned"!==o&&"index"!==o})`
  --acc: ${({accentColor:o})=>o};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${r.w4.colors.surface};
  border: 1px solid ${({pinned:o})=>o?r.w4.colors.accent:r.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${j} 0.4s ease both;
  animation-delay: ${({index:o})=>Math.min(25*o,300)}ms;

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
      border-color: ${r.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${r.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:o})=>o?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,a.default.div`
  --acc: ${({accentColor:o})=>o};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${r.w4.colors.border};
  color: ${r.w4.colors.mainText};

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
    font-family: ${r.w4.typography.fontFamily};
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
    & > .h { height: 7px; background: ${r.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
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
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${r.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
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
      font-family: ${r.w4.typography.fontFamilyMono};
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
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${r.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${r.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${r.w4.colors.mainText}; }
    & .b { color: ${r.w4.colors.mainTextMuted}; opacity: 0.7; }
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
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${r.w4.colors.mainTextMuted}; opacity: 0.6; }
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
      font-family: ${r.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${r.w4.colors.mainTextMuted};
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
      font-family: ${r.w4.typography.fontFamily};
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
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${r.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${r.w4.colors.mainTextMuted}; opacity: 0.75; }
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
      color: ${r.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${r.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${r.w4.typography.fontFamilyMono};
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
      color: ${r.w4.colors.mainText};
      font-family: ${r.w4.typography.fontFamilyMono};
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
      font-family: ${r.w4.typography.fontFamilyMono};
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
      font-family: ${r.w4.typography.fontFamilyMono};
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
      font-family: ${r.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${r.w4.colors.mainText};
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
    background: ${({accentColor:o})=>o};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:o})=>o};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${r.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${r.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,a.default.div`
  padding: 6px 14px 16px;
`,a.default.h3`
  margin: 0 0 6px;
  font-family: ${r.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${r.w4.colors.mainText};

  .hash {
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${r.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,a.default.p`
  margin: 0;
  color: ${r.w4.colors.mainTextMuted};
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
  color: ${({pinned:o})=>o?r.w4.colors.accent:r.w4.colors.mainText};
  opacity: ${({pinned:o})=>o?1:0};
  cursor: pointer;
  transition: opacity 0.15s, color 0.15s, border-color 0.15s;
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${r.w4.colors.accent};
    border-color: ${r.w4.colors.accent};
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
`,a.default.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:o})=>"default"===o?r.w4.colors.borderStrong:r.w4.colors.accent};
  background: ${({variant:o})=>"filled"===o?r.w4.colors.accentMuted:"transparent"};
  color: ${({variant:o})=>"default"===o?r.w4.colors.mainTextMuted:r.w4.colors.accent};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:o})=>o?"pointer":"default"};
  transition: ${r.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:o})=>"default"===o?r.w4.colors.mainTextFaint:r.w4.colors.accentHover};
    color: ${({variant:o})=>"default"===o?r.w4.colors.mainText:r.w4.colors.accentHover};
  }

  &:focus-visible {
    ${r.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,a.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:o})=>o};
  display: inline-block;
`;const B={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:r.w4.colors.accentMuted},F={neutral:r.w4.colors.mainTextMuted,live:r.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:r.w4.colors.accent};a.default.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:o})=>"film"===o||"tv"===o?600:500};
  letter-spacing: ${({tone:o})=>"live"===o||"film"===o||"tv"===o?"1.2px":"0.6px"};
  text-transform: ${({tone:o})=>"live"===o||"film"===o||"tv"===o?"uppercase":"none"};
  padding: ${({tone:o})=>"film"===o||"tv"===o?"3px 8px":"2px 7px"};
  border-radius: ${({tone:o})=>"film"===o||"tv"===o?r.w4.borderRadius.sm:"3px"};
  background: ${({tone:o})=>B[o]};
  color: ${({tone:o})=>F[o]};
`,a.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`,a.default.kbd`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${r.w4.colors.border};
  border-radius: 3px;
  color: ${r.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,a.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${r.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,a.default.label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${r.w4.colors.codeBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${r.w4.transitions.fast};

  &:focus-within {
    border-color: ${r.w4.colors.accent};
  }
`,a.default.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeMd};
  color: ${r.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${r.w4.colors.mainTextFaint};
  }
`,a.default.span`
  display: inline-flex;
  align-items: center;
  color: ${r.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,a.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px 20px 20px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.borderSubtle};
  border-radius: ${r.w4.borderRadius.lg};
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  transition: border-color ${r.w4.transitions.fast},
    background ${r.w4.transitions.fast};

  &:hover {
    border-color: ${r.w4.colors.borderStrong};
  }

  ${({accentColor:o})=>o&&`&::before {\n      content: '';\n      position: absolute;\n      top: 14px; bottom: 14px; left: 0;\n      width: 2px;\n      background: ${o};\n      border-radius: 0 2px 2px 0;\n      opacity: 0.7;\n    }`}
`,a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,a.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,a.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,a.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${r.w4.colors.surface};
  border: 1px solid
    ${({active:o})=>o?r.w4.colors.accent:r.w4.colors.borderSubtle};
  border-radius: ${r.w4.borderRadius.lg};
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  box-shadow: ${({active:o})=>o?`inset 0 0 0 1px ${r.w4.colors.accent}`:"none"};
  transition: border-color ${r.w4.transitions.fast};

  &:hover {
    border-color: ${({active:o})=>o?r.w4.colors.accentHover:r.w4.colors.borderStrong};
  }
`,a.default.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,a.default.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:o})=>o};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,a.default.div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,a.default.div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${r.w4.colors.mainText};
  margin-bottom: 4px;
`,a.default.div`
  font-size: 11.5px;
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,a.default.div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${r.w4.colors.accentMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${r.w4.colors.mainTextMuted};
`,a.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,a.default.button`
  background: ${r.w4.colors.codeBg};
  border: 1px solid ${r.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${r.w4.colors.mainText};
  cursor: ${o=>o.onClick?"pointer":"default"};
  transition: border-color ${r.w4.transitions.fast},
    background ${r.w4.transitions.fast};

  &:hover {
    border-color: ${r.w4.colors.borderStrong};
    background: ${r.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${r.w4.focusRing}
  }
`,a.default.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:o})=>o};
  color: ${({fg:o})=>o};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,a.default.div`
  font-size: 11px;
  color: ${r.w4.colors.mainText};
`,a.default.div`
  margin-top: 14px;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:o})=>o};
  letter-spacing: 0.5px;
`;const C=M.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;(0,a.default)("div",{shouldForwardProp:o=>"accentColor"!==o&&"index"!==o})`
  --acc: ${({accentColor:o})=>o};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${C} 0.4s ease both;
  animation-delay: ${({index:o})=>Math.min(25*o,300)}ms;

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
      border-color: ${r.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${r.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,(0,a.default)("div",{shouldForwardProp:o=>"accentColor"!==o})`
  --acc: ${({accentColor:o})=>o};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${r.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${r.w4.colors.codeBg};

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
`,a.default.span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,a.default.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,a.default.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,(0,a.default)("div",{shouldForwardProp:o=>"accentColor"!==o})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:o})=>o};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:o})=>o};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,a.default.div`
  padding: 6px 14px 16px;
`,a.default.h3`
  margin: 0 0 6px;
  font-family: ${r.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${r.w4.colors.mainText};

  .hash {
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${r.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,a.default.p`
  margin: 0;
  color: ${r.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,a.default.nav`padding: ${r.w4.spacing.sm} 0;`,a.default.div`
  border-bottom: 1px solid ${r.w4.colors.border}60;
  margin-bottom: 2px;
`,a.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:o})=>o?"10px 0":`7px ${r.w4.spacing.md}`};
  justify-content: ${({collapsed:o})=>o?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${r.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${r.w4.colors.sidebarText}; }
`,a.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:o})=>o?"0":"7px"};
`,a.default.span`
  opacity: ${({collapsed:o})=>o?0:1};
  max-width: ${({collapsed:o})=>o?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,a.default.span`
  display: ${({collapsed:o})=>o?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:o})=>o?"90deg":"0deg"});
  }
`,a.default.div`
  display: grid;
  grid-template-rows: ${({open:o})=>o?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,a.default.div`overflow: hidden;`,a.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,a.default.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${r.w4.spacing.md};
  background: ${({active:o})=>o?r.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:o})=>o?r.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:o})=>o?r.w4.colors.sidebarActive:r.w4.colors.sidebarText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${r.w4.colors.sidebarHover}; }
`,a.default.button`
  opacity: ${({active:o})=>o?1:0};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:o})=>o?"#e3b341":r.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`,a.default.div`
  background: ${r.w4.colors.codeBg};
  border: 1px solid ${r.w4.colors.codeBorder};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.lg};
  margin: ${r.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,a.default.div`
  color: #f85149;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: ${r.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`,a.default.pre`
  background: ${r.w4.colors.codeBg};
  border: 1px solid ${r.w4.colors.codeBorder};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md};
  margin: ${r.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${r.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,a.default.div`
  background: ${r.w4.colors.codeBg};
  border: 1px solid ${r.w4.colors.codeBorder};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.lg};
  margin: ${r.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,a.default.div`
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  margin-bottom: ${r.w4.spacing.md};
  text-align: center;
`,a.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${r.w4.spacing.sm} ${r.w4.spacing.md};
  margin-top: ${r.w4.spacing.md};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
`,a.default.span`
  display: flex;
  align-items: center;
  gap: 6px;
`,a.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:o})=>o};
  flex-shrink: 0;
`,a.default.div`
  color: #f85149;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: ${r.w4.typography.fontSizeSm};
`,a.default.div`
  background: ${r.w4.colors.codeBg};
  border: 1px solid ${r.w4.colors.codeBorder};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.lg};
  margin: ${r.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${r.w4.spacing.md};
`,a.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,a.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,a.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,a.default.button`
  padding: 6px 14px;
  border: 1px solid ${({active:o})=>o?r.w4.colors.accent:r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  background: ${({active:o})=>o?r.w4.colors.accentMuted:"transparent"};
  color: ${({active:o})=>o?r.w4.colors.accent:r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${r.w4.colors.accent};
    color: ${r.w4.colors.accent};
  }
`,a.default.div`
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  text-align: center;
`,a.default.div`
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  text-align: center;
`;const R=M.keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`,E=(a.default.div`
  background: ${r.w4.colors.codeBg};
  border: 1px solid ${r.w4.colors.codeBorder};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.md};
  margin: ${r.w4.spacing.lg} 0;
`,a.default.div`
  font-size: 11px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${r.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${r.w4.spacing.sm};

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,a.default.div`
  display: flex;
  flex-direction: column;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${r.w4.colors.accent}40;
    box-shadow: 0 0 8px ${r.w4.colors.accent}15;
  }
`,a.default.button`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  padding: 14px ${r.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${r.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${R} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:o})=>o}0c;
  }
`);(0,a.default)(E)`
  border-bottom: 1px solid ${r.w4.colors.border}80;
`,(0,a.default)(E)``,a.default.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:o})=>o}18;
  color: ${({accentColor:o})=>o};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:o})=>o}30;
    transform: scale(0.9);
  }
`,a.default.span`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${r.w4.colors.accent};
`,a.default.span`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainTextMuted};
`;var P=n(1426);a.default.div`
  margin: ${r.w4.spacing.lg} 0;
  border-radius: ${r.w4.borderRadius.md};
  border: 1px solid ${r.w4.colors.codeBorder};
  overflow: hidden;
`,a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${r.w4.colors.codeBorder};
`,a.default.span`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,a.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:o})=>o?"#3fb950":r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${({copied:o})=>o?"#3fb950":r.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${r.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${r.w4.colors.sidebarText}; border-color: ${r.w4.colors.sidebarText}; }
`,P.A,P.A['pre[class*="language-"]'],r.w4.colors.codeBg,P.A['code[class*="language-"]'];var L=n(5569),D=n(8218),H=n(7230),I=n(2966),N=n(1069);L.A,D.A,H.A,I.A,N.A,a.default.div`
  background: ${({bg:o})=>o};
  border-left: 3px solid ${({border:o})=>o};
  border-radius: 0 ${r.w4.borderRadius.md} ${r.w4.borderRadius.md} 0;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.lg};
  margin: ${r.w4.spacing.lg} 0;
`,a.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${({color:o})=>o};
  font-family: ${r.w4.typography.fontFamily};
  margin-bottom: ${r.w4.spacing.sm};
`,a.default.div`
  color: ${r.w4.colors.mainText};
  font-size: ${r.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,a.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${r.w4.spacing.xxl} 0 ${r.w4.spacing.xxl} ${r.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,a.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  margin-bottom: ${r.w4.spacing.md};
`,a.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,a.default.a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:o})=>3===o?"20px":"8px"};
  font-size: ${r.w4.typography.fontSizeSm};
  font-family: ${r.w4.typography.fontFamily};
  color: ${({active:o})=>o?r.w4.colors.accent:r.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:o})=>o?r.w4.colors.accent:"transparent"};
  border-radius: 0 ${r.w4.borderRadius.sm} ${r.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${r.w4.colors.mainText}; background: ${r.w4.colors.sidebarHover}; }
`,a.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${r.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,a.default.div`flex: 1; min-width: 0;`,a.default.article`
  padding: ${r.w4.spacing.xxl} 0;
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeMd};
  line-height: ${r.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${r.w4.spacing.xl} 0 ${r.w4.spacing.md};
    color: ${r.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${r.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${r.w4.typography.fontSizeXl}; border-bottom: 1px solid ${r.w4.colors.border}; padding-bottom: ${r.w4.spacing.sm}; }
  h2 { font-size: ${r.w4.typography.fontSizeLg}; border-bottom: 1px solid ${r.w4.colors.border}; padding-bottom: ${r.w4.spacing.xs}; }
  h3 { font-size: ${r.w4.typography.fontSizeMd}; }

  p { margin: ${r.w4.spacing.md} 0; }

  a { color: ${r.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${r.w4.colors.accentHover}; } }

  ul, ol { margin: ${r.w4.spacing.md} 0; padding-left: ${r.w4.spacing.xl}; }
  li { margin: ${r.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${r.w4.colors.border};
    margin: ${r.w4.spacing.lg} 0;
    padding: ${r.w4.spacing.sm} ${r.w4.spacing.lg};
    background: ${r.w4.colors.surface};
    color: ${r.w4.colors.mainTextMuted};
    border-radius: 0 ${r.w4.borderRadius.sm} ${r.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${r.w4.colors.codeBg};
    border: 1px solid ${r.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${r.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${r.w4.spacing.lg} 0; font-size: ${r.w4.typography.fontSizeBase}; }
  th, td { padding: ${r.w4.spacing.sm} ${r.w4.spacing.md}; border: 1px solid ${r.w4.colors.border}; text-align: left; }
  th { background: ${r.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${r.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${r.w4.colors.border}; margin: ${r.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${r.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${r.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${r.w4.spacing.lg} 0; }
`,a.default.div`
  display: flex;
  gap: ${r.w4.spacing.lg};
  padding: ${r.w4.spacing.xxl} 0;
  border-top: 1px solid ${r.w4.colors.border};
  margin-top: ${r.w4.spacing.xxl};
`,a.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:o})=>"left"===o?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.lg};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:o})=>o};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${r.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,a.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${r.w4.colors.sidebarTextMuted}; font-family: ${r.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,a.default.div`
  font-size: ${r.w4.typography.fontSizeBase}; color: ${r.w4.colors.accent};
  font-family: ${r.w4.typography.fontFamily}; font-weight: 500;
`,a.default.div`
  color: ${r.w4.colors.mainTextMuted};
  padding: ${r.w4.spacing.xxl} ${r.w4.spacing.xl};
  font-family: ${r.w4.typography.fontFamily};
`;const K=M.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Y=M.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;a.default.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${K} 0.15s ease;
`,a.default.div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${r.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Y} 0.2s ease;
`,a.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${r.w4.colors.border};
`,a.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeMd};
  &::placeholder { color: ${r.w4.colors.sidebarTextMuted}; }
`,a.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${r.w4.colors.sidebarHover};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${r.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${r.w4.colors.mainText}; background: ${r.w4.colors.border}; }
`,a.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${r.w4.spacing.sm} 0;
`,a.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.sidebarTextMuted};
`,a.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,a.default.button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:o})=>o?r.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${r.w4.colors.sidebarHover}; }
`,a.default.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${r.w4.borderRadius.md};
  background: ${({selected:o})=>o?`${r.w4.colors.accent}20`:r.w4.colors.sidebarHover};
  color: ${({selected:o})=>o?r.w4.colors.accent:r.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,a.default.div`
  flex: 1;
  min-width: 0;
`,a.default.div`
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,a.default.span`
  font-weight: 400;
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.sidebarTextMuted};
`,a.default.span`
  font-size: 11px;
  font-weight: 500;
  color: ${r.w4.colors.accent};
  background: ${r.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${r.w4.typography.fontFamilyMono};
`,a.default.div`
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${r.w4.colors.accent}25;
    color: ${r.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,a.default.div`
  display: flex;
  align-items: center;
  color: ${({selected:o})=>o?r.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,a.default.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${r.w4.colors.border};
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.sidebarTextMuted};
`,a.default.kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${r.w4.colors.sidebarHover};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.sidebarTextMuted};
`,a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`,new Map,a.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${r.w4.typography.fontFamily};
  background: ${r.w4.colors.mainBg};
`,a.default.div`
  position: absolute;
  width: ${({size:o})=>o}px;
  height: ${({size:o})=>o}px;
  left: ${({x:o})=>o}%;
  top: ${({y:o})=>o}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:o})=>o}, 80%, 65%) 0%,
    hsl(${({hue:o})=>o+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:o})=>o}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,a.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${r.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${r.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,a.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,a.default.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${r.w4.colors.mainText} 0%,
    ${r.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,a.default.p`
  font-size: ${r.w4.typography.fontSizeMd};
  color: ${r.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,a.default.span`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,a.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${r.w4.colors.sidebarHover};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: ${r.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${r.w4.colors.accent}60;
    color: ${r.w4.colors.mainText};
    background: ${r.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${r.w4.colors.surface};
    border: 1px solid ${r.w4.colors.border};
    border-radius: 3px;
    color: ${r.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,a.default.div`
  display: flex;
  gap: 4px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 2px;
`,a.default.button`
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
  background: ${({active:o})=>o?r.w4.colors.accent:"transparent"};
  color: ${({active:o})=>o?"#0d1117":r.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:o})=>o?"#0d1117":r.w4.colors.mainText};
  }
`,a.default.div`
  padding: ${({collapsed:o})=>o?"8px 4px":`8px ${r.w4.spacing.md}`};
  border-bottom: 1px solid ${r.w4.colors.border}60;
`,a.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:o})=>o?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:o})=>o?"center":"flex-start"};
  background: ${({focused:o})=>o?`${r.w4.colors.accent}10`:r.w4.colors.sidebarHover};
  border: 1px solid ${({focused:o})=>o?`${r.w4.colors.accent}40`:"transparent"};
  border-radius: ${r.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:o})=>o?"pointer":"text"};
`,a.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${r.w4.colors.sidebarText};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:o})=>o?"none":"block"};
  &::placeholder { color: ${r.w4.colors.sidebarTextMuted}; }
`,a.default.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  border-radius: ${r.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${r.w4.colors.mainText}; }
`,a.default.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${r.w4.spacing.sm} 0;
`,a.default.button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${r.w4.spacing.md};
  background: ${({active:o})=>o?r.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:o})=>o?r.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${r.w4.colors.sidebarHover}; }
`,a.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${r.w4.colors.sidebarText};
`,a.default.span`
  font-weight: 400;
  color: ${r.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,a.default.div`
  font-family: ${r.w4.typography.fontFamily};
  font-size: 12px;
  color: ${r.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${r.w4.colors.accent}30;
    color: ${r.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,a.default.div`
  padding: 12px ${r.w4.spacing.md};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,a.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,a.default.span`
  font-size: 11px;
  color: ${r.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,new Map,a.default.div`
  font-size: 14px;
  color: ${r.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${r.w4.colors.mainText};
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
    accent-color: ${r.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${r.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${r.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${r.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${r.w4.colors.accent};
    background: ${r.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${r.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${r.w4.colors.codeBg};
    border: 1px solid ${r.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${r.w4.colors.mainText};
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
    border-radius: ${r.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${r.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${r.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${r.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-child(even) td { background: ${r.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${r.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${r.w4.colors.border};
    margin: 0.8em 0;
  }
`},7293(o,e,n){n.d(e,{A:()=>x});var t=n(7359),a=n(6965),r=n(2116),i=n(9378),l=n(6004),d=n(1767),s=n(3628),c=n(6016),p=n(9282),g=n(6879),f=n(5723);function u(o){switch(o){case"html":return(0,d.qy)();case"css":return(0,s.AH)();case"ts":return(0,c.Q2)({typescript:!0});case"react":return(0,c.Q2)({jsx:!0,typescript:!0});default:return(0,c.Q2)()}}const m=r.Lz.theme({"&":{flex:"1",minHeight:"0",height:"100%",fontSize:"13px",fontFamily:"'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",background:g.w4.colors.mainBg},".cm-scroller":{overflow:"auto",lineHeight:"1.7",fontFamily:"inherit"},".cm-content":{padding:"16px",caretColor:g.w4.colors.accent},".cm-gutters":{background:g.w4.colors.mainBg,border:"none",borderRight:`1px solid ${g.w4.colors.border}`,color:g.w4.colors.sidebarTextMuted},".cm-activeLineGutter":{background:"transparent"},".cm-activeLine":{background:"rgba(88,166,255,0.04)"},".cm-selectionBackground, ::selection":{background:"rgba(88,166,255,0.2) !important"},".cm-cursor":{borderLeftColor:g.w4.colors.accent},"&::-webkit-scrollbar":{width:"6px",height:"6px"},"&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar-thumb":{background:g.w4.colors.border,borderRadius:"3px"}});function x({value:o,onChange:e,lang:n}){const d=(0,t.useRef)(null),s=(0,t.useRef)(null),c=(0,t.useRef)(e);return c.current=e,(0,t.useEffect)(()=>{if(!d.current)return;const e=new r.Lz({state:i.$t.create({doc:o,extensions:[a.oQ,l.bM,m,u(n),r.w4.of([p.Yc]),r.Lz.updateListener.of(o=>{o.docChanged&&c.current(o.state.doc.toString())})]}),parent:d.current});return s.current=e,()=>{e.destroy(),s.current=null}},[n]),(0,t.useEffect)(()=>{const e=s.current;if(!e)return;const n=e.state.doc.toString();n!==o&&e.dispatch({changes:{from:0,to:n.length,insert:o}})},[o]),(0,f.jsx)("div",{ref:d,style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"}})}},9336(o,e,n){n.d(e,{k:()=>t});const t=[{label:"Hello World",html:'<h1>Hello, World!</h1>\n<p>Edit the panels to see live changes.</p>\n<button id="btn">Click me</button>\n<p id="output"></p>',css:"body {\n  font-family: system-ui, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #0d1117;\n  color: #e6edf3;\n  gap: 16px;\n}\n\nh1 {\n  font-size: 2.5rem;\n  background: linear-gradient(135deg, #388bfd, #a371f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nbutton {\n  padding: 10px 24px;\n  background: #388bfd;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: transform 0.1s;\n}\n\nbutton:hover { transform: scale(1.05); }\nbutton:active { transform: scale(0.95); }",js:"const btn = document.getElementById('btn');\nconst output = document.getElementById('output');\nlet count = 0;\n\nbtn.addEventListener('click', () => {\n  count++;\n  output.textContent = `Clicked ${count} time${count !== 1 ? 's' : ''}!`;\n  output.style.color = `hsl(${count * 40}, 80%, 65%)`;\n});"},{label:"CSS Animation",html:'<div class="scene">\n  <div class="orbit orbit-1">\n    <div class="planet planet-1"></div>\n  </div>\n  <div class="orbit orbit-2">\n    <div class="planet planet-2"></div>\n  </div>\n  <div class="orbit orbit-3">\n    <div class="planet planet-3"></div>\n  </div>\n  <div class="sun"></div>\n</div>',css:"body {\n  margin: 0;\n  background: #0d1117;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n\n.scene {\n  position: relative;\n  width: 320px;\n  height: 320px;\n}\n\n.sun {\n  position: absolute;\n  top: 50%; left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px; height: 50px;\n  border-radius: 50%;\n  background: radial-gradient(circle, #ffd700, #ff8c00);\n  box-shadow: 0 0 40px #ff8c00, 0 0 80px rgba(255,140,0,0.4);\n}\n\n.orbit {\n  position: absolute;\n  top: 50%; left: 50%;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: rotate linear infinite;\n}\n\n.orbit-1 { width: 120px; height: 120px; animation-duration: 4s; }\n.orbit-2 { width: 200px; height: 200px; animation-duration: 8s; }\n.orbit-3 { width: 290px; height: 290px; animation-duration: 14s; }\n\n.planet {\n  position: absolute;\n  top: 0; left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border-radius: 50%;\n}\n\n.planet-1 { width: 14px; height: 14px; background: #4fc3f7; }\n.planet-2 { width: 20px; height: 20px; background: #ef5350; }\n.planet-3 { width: 12px; height: 12px; background: #ab47bc; }\n\n@keyframes rotate {\n  from { transform: translate(-50%, -50%) rotate(0deg); }\n  to   { transform: translate(-50%, -50%) rotate(360deg); }\n}",js:"// No JS needed — pure CSS animation"},{label:"Todo List",html:'<div class="app">\n  <h2>Todo List</h2>\n  <div class="input-row">\n    <input id="newTodo" type="text" placeholder="Add a task…" />\n    <button id="addBtn">Add</button>\n  </div>\n  <ul id="list"></ul>\n  <p id="stats"></p>\n</div>',css:"body {\n  font-family: system-ui, sans-serif;\n  background: #0d1117;\n  color: #e6edf3;\n  display: flex;\n  justify-content: center;\n  padding: 40px 16px;\n  margin: 0;\n}\n\n.app {\n  width: 100%;\n  max-width: 400px;\n}\n\nh2 { margin-bottom: 16px; font-size: 1.4rem; }\n\n.input-row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\ninput {\n  flex: 1;\n  padding: 8px 12px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  color: #e6edf3;\n  font-size: 14px;\n  outline: none;\n}\n\ninput:focus { border-color: #388bfd; }\n\nbutton {\n  padding: 8px 16px;\n  background: #388bfd;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\nbutton:hover { background: #58a6ff; }\n\nul { list-style: none; padding: 0; margin: 0 0 12px; }\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #161b22;\n  border: 1px solid #21262d;\n  border-radius: 6px;\n  margin-bottom: 6px;\n  font-size: 14px;\n}\n\nli.done span { text-decoration: line-through; opacity: 0.5; }\n\nli span { flex: 1; cursor: pointer; }\nli .del { color: #f87171; cursor: pointer; font-size: 18px; line-height: 1; }\n#stats { font-size: 12px; color: #8b949e; }",js:"const input = document.getElementById('newTodo');\nconst addBtn = document.getElementById('addBtn');\nconst list = document.getElementById('list');\nconst stats = document.getElementById('stats');\nlet todos = [];\n\nfunction render() {\n  list.innerHTML = '';\n  todos.forEach((todo, i) => {\n    const li = document.createElement('li');\n    if (todo.done) li.classList.add('done');\n\n    const span = document.createElement('span');\n    span.textContent = todo.text;\n    span.addEventListener('click', () => {\n      todos[i].done = !todos[i].done;\n      render();\n    });\n\n    const del = document.createElement('span');\n    del.className = 'del';\n    del.textContent = '×';\n    del.addEventListener('click', () => {\n      todos.splice(i, 1);\n      render();\n    });\n\n    li.append(span, del);\n    list.appendChild(li);\n  });\n\n  const done = todos.filter(t => t.done).length;\n  stats.textContent = `${done}/${todos.length} completed`;\n}\n\nfunction addTodo() {\n  const text = input.value.trim();\n  if (!text) return;\n  todos.push({ text, done: false });\n  input.value = '';\n  render();\n}\n\naddBtn.addEventListener('click', addTodo);\ninput.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });\n\n// Seed with some todos\ntodos = [\n  { text: 'Build an amazing app', done: true },\n  { text: 'Write tests', done: false },\n  { text: 'Deploy to production', done: false },\n];\nrender();"},{label:"Canvas — Particles",html:'<canvas id="c"></canvas>',css:"html, body {\n  margin: 0;\n  background: #0d1117;\n  width: 100%; height: 100%;\n  overflow: hidden;\n}\ncanvas { display: block; }",js:"const canvas = document.getElementById('c');\nconst ctx = canvas.getContext('2d');\n\nfunction resize() {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n}\nresize();\nwindow.addEventListener('resize', resize);\n\nconst particles = Array.from({ length: 120 }, () => ({\n  x: Math.random() * canvas.width,\n  y: Math.random() * canvas.height,\n  vx: (Math.random() - 0.5) * 0.8,\n  vy: (Math.random() - 0.5) * 0.8,\n  r: Math.random() * 2 + 1,\n  hue: Math.random() * 60 + 200,\n}));\n\nlet mouse = { x: -9999, y: -9999 };\ncanvas.addEventListener('mousemove', e => {\n  mouse.x = e.clientX;\n  mouse.y = e.clientY;\n});\n\nfunction draw() {\n  ctx.fillStyle = 'rgba(13,17,23,0.15)';\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n  for (const p of particles) {\n    p.x += p.vx;\n    p.y += p.vy;\n    if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;\n    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;\n\n    ctx.beginPath();\n    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);\n    ctx.fillStyle = `hsl(${p.hue}, 80%, 65%)`;\n    ctx.fill();\n  }\n\n  // Draw lines to nearby particles & mouse\n  for (let i = 0; i < particles.length; i++) {\n    for (let j = i + 1; j < particles.length; j++) {\n      const dx = particles[i].x - particles[j].x;\n      const dy = particles[i].y - particles[j].y;\n      const dist = Math.sqrt(dx * dx + dy * dy);\n      if (dist < 100) {\n        ctx.strokeStyle = `rgba(88,166,255,${1 - dist / 100})`;\n        ctx.lineWidth = 0.5;\n        ctx.beginPath();\n        ctx.moveTo(particles[i].x, particles[i].y);\n        ctx.lineTo(particles[j].x, particles[j].y);\n        ctx.stroke();\n      }\n    }\n\n    const dx = particles[i].x - mouse.x;\n    const dy = particles[i].y - mouse.y;\n    const dist = Math.sqrt(dx * dx + dy * dy);\n    if (dist < 150) {\n      ctx.strokeStyle = `rgba(163,113,247,${1 - dist / 150})`;\n      ctx.lineWidth = 1;\n      ctx.beginPath();\n      ctx.moveTo(particles[i].x, particles[i].y);\n      ctx.lineTo(mouse.x, mouse.y);\n      ctx.stroke();\n    }\n  }\n\n  requestAnimationFrame(draw);\n}\n\ndraw();"},{label:"Clock",html:'<canvas id="clock" width="300" height="300"></canvas>',css:"body {\n  margin: 0;\n  background: #0d1117;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}",js:"const canvas = document.getElementById('clock');\nconst ctx = canvas.getContext('2d');\nconst cx = 150, cy = 150, R = 130;\n\nfunction drawClock() {\n  ctx.clearRect(0, 0, 300, 300);\n\n  // Face\n  ctx.beginPath();\n  ctx.arc(cx, cy, R, 0, Math.PI * 2);\n  ctx.fillStyle = '#161b22';\n  ctx.fill();\n  ctx.strokeStyle = '#388bfd';\n  ctx.lineWidth = 3;\n  ctx.stroke();\n\n  // Hour marks\n  for (let i = 0; i < 12; i++) {\n    const angle = (i * Math.PI) / 6;\n    const x1 = cx + Math.sin(angle) * (R - 12);\n    const y1 = cy - Math.cos(angle) * (R - 12);\n    const x2 = cx + Math.sin(angle) * (R - 4);\n    const y2 = cy - Math.cos(angle) * (R - 4);\n    ctx.beginPath();\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.strokeStyle = '#8b949e';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n  }\n\n  const now = new Date();\n  const s = now.getSeconds() + now.getMilliseconds() / 1000;\n  const m = now.getMinutes() + s / 60;\n  const h = (now.getHours() % 12) + m / 60;\n\n  const hand = (angle, len, width, color) => {\n    ctx.save();\n    ctx.translate(cx, cy);\n    ctx.rotate(angle);\n    ctx.beginPath();\n    ctx.moveTo(0, 8);\n    ctx.lineTo(0, -len);\n    ctx.strokeStyle = color;\n    ctx.lineWidth = width;\n    ctx.lineCap = 'round';\n    ctx.stroke();\n    ctx.restore();\n  };\n\n  hand((h * Math.PI) / 6, 70, 5, '#e6edf3');\n  hand((m * Math.PI) / 30, 95, 3, '#58a6ff');\n  hand((s * Math.PI) / 30, 105, 1.5, '#f87171');\n\n  // Center dot\n  ctx.beginPath();\n  ctx.arc(cx, cy, 5, 0, Math.PI * 2);\n  ctx.fillStyle = '#f87171';\n  ctx.fill();\n\n  requestAnimationFrame(drawClock);\n}\n\ndrawClock();"},{label:"TypeScript — Typed Utils",html:'<div id="output"></div>',css:"body {\n  font-family: system-ui, sans-serif;\n  background: #0d1117;\n  color: #e6edf3;\n  padding: 32px;\n  margin: 0;\n  line-height: 1.6;\n}\n\n#output { max-width: 560px; }\n\n.section {\n  margin-bottom: 24px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 8px;\n  padding: 16px 20px;\n}\n\n.label {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #3b82f6;\n  margin-bottom: 8px;\n}\n\n.value { font-size: 14px; color: #c9d1d9; }\n.tag {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  margin: 2px;\n}",js:"",ts:"// TypeScript utilities with full type safety\n\ntype Status = 'pending' | 'active' | 'completed' | 'archived';\n\ninterface Task {\n  id: number;\n  title: string;\n  status: Status;\n  tags: string[];\n  createdAt: Date;\n}\n\nfunction groupBy<T, K extends string>(\n  items: T[],\n  keyFn: (item: T) => K\n): Record<K, T[]> {\n  return items.reduce((acc, item) => {\n    const key = keyFn(item);\n    if (!acc[key]) acc[key] = [];\n    acc[key].push(item);\n    return acc;\n  }, {} as Record<K, T[]>);\n}\n\nfunction formatRelative(date: Date): string {\n  const diff = Math.floor((Date.now() - date.getTime()) / 1000);\n  if (diff < 60) return `${diff}s ago`;\n  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;\n  return `${Math.floor(diff / 3600)}h ago`;\n}\n\nconst STATUS_COLOR: Record<Status, string> = {\n  pending: '#d29922',\n  active: '#3b82f6',\n  completed: '#3fb950',\n  archived: '#8b949e',\n};\n\nconst tasks: Task[] = [\n  { id: 1, title: 'Design system', status: 'completed', tags: ['ui', 'design'], createdAt: new Date(Date.now() - 7200000) },\n  { id: 2, title: 'Auth flow', status: 'active', tags: ['backend', 'security'], createdAt: new Date(Date.now() - 1800000) },\n  { id: 3, title: 'Unit tests', status: 'pending', tags: ['testing'], createdAt: new Date(Date.now() - 300000) },\n  { id: 4, title: 'CI pipeline', status: 'active', tags: ['devops'], createdAt: new Date(Date.now() - 600000) },\n  { id: 5, title: 'Docs', status: 'archived', tags: ['docs'], createdAt: new Date(Date.now() - 86400000) },\n];\n\nconst grouped = groupBy(tasks, t => t.status);\n\nconst out = document.getElementById('output')!;\n\n(Object.entries(grouped) as [Status, Task[]][]).forEach(([status, items]) => {\n  const div = document.createElement('div');\n  div.className = 'section';\n  div.innerHTML = `\n    <div class=\"label\" style=\"color:${STATUS_COLOR[status]}\">${status} (${items.length})</div>\n    ${items.map(t => `\n      <div class=\"value\">\n        <strong>${t.title}</strong>\n        <span style=\"color:#8b949e;font-size:12px;margin-left:8px\">${formatRelative(t.createdAt)}</span><br>\n        ${t.tags.map(tag => `<span class=\"tag\" style=\"background:#161b22;border:1px solid #30363d\">#${tag}</span>`).join('')}\n      </div>\n    `).join('')}\n  `;\n  out.appendChild(div);\n});"},{label:"React — Counter",html:'<div id="root"></div>',css:"body {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: #0d1117;\n  color: #e6edf3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n\n.card {\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n  padding: 40px 48px;\n  text-align: center;\n  min-width: 260px;\n}\n\nh2 { margin: 0 0 8px; font-size: 1.1rem; color: #8b949e; font-weight: 500; }\n\n.count {\n  font-size: 5rem;\n  font-weight: 700;\n  line-height: 1;\n  margin: 16px 0 32px;\n  background: linear-gradient(135deg, #61dafb, #a371f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.buttons { display: flex; gap: 12px; justify-content: center; }\n\nbutton {\n  width: 48px; height: 48px;\n  border-radius: 50%;\n  border: 1px solid #30363d;\n  background: #21262d;\n  color: #e6edf3;\n  font-size: 1.4rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\nbutton:hover { background: #388bfd; border-color: #388bfd; }\nbutton:active { transform: scale(0.92); }\n\n.reset {\n  margin-top: 20px;\n  width: auto;\n  padding: 0 20px;\n  border-radius: 6px;\n  font-size: 13px;\n  color: #8b949e;\n  height: 32px;\n}",js:"",react:'const { useState } = React;\n\nfunction Counter() {\n  const [count, setCount] = useState<number>(0);\n\n  return (\n    <div className="card">\n      <h2>React Counter</h2>\n      <div className="count">{count}</div>\n      <div className="buttons">\n        <button onClick={() => setCount(c => c - 1)}>−</button>\n        <button onClick={() => setCount(c => c + 1)}>+</button>\n      </div>\n      <br />\n      <button className="reset" onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\'root\')!).render(<Counter />);'},{label:"React — Todo App",html:'<div id="root"></div>',css:"body {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: #0d1117;\n  color: #e6edf3;\n  display: flex;\n  justify-content: center;\n  padding: 40px 16px;\n}\n\n.app { width: 100%; max-width: 420px; }\nh2 { margin: 0 0 20px; }\n\n.row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\ninput {\n  flex: 1;\n  padding: 8px 12px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  color: #e6edf3;\n  font-size: 14px;\n  outline: none;\n}\ninput:focus { border-color: #61dafb; }\n\nbutton {\n  padding: 8px 16px;\n  background: #238636;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\nbutton:hover { background: #2ea043; }\n\nul { list-style: none; padding: 0; margin: 0; }\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #161b22;\n  border: 1px solid #21262d;\n  border-radius: 6px;\n  margin-bottom: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: border-color 0.12s;\n}\nli:hover { border-color: #30363d; }\nli.done { opacity: 0.55; }\nli.done .text { text-decoration: line-through; }\n.check { font-size: 16px; flex-shrink: 0; }\n.text { flex: 1; }\n.del { color: #f87171; cursor: pointer; font-size: 18px; padding: 0 4px; }\n.stats { font-size: 12px; color: #8b949e; margin-top: 12px; }",js:"",react:"const { useState } = React;\n\ninterface Todo {\n  id: number;\n  text: string;\n  done: boolean;\n}\n\nlet nextId = 4;\n\nfunction App() {\n  const [todos, setTodos] = useState<Todo[]>([\n    { id: 1, text: 'Build something awesome', done: true },\n    { id: 2, text: 'Add TypeScript types', done: false },\n    { id: 3, text: 'Deploy to production', done: false },\n  ]);\n  const [input, setInput] = useState('');\n\n  const add = () => {\n    const text = input.trim();\n    if (!text) return;\n    setTodos(prev => [...prev, { id: nextId++, text, done: false }]);\n    setInput('');\n  };\n\n  const toggle = (id: number) =>\n    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));\n\n  const remove = (id: number) =>\n    setTodos(prev => prev.filter(t => t.id !== id));\n\n  const done = todos.filter(t => t.done).length;\n\n  return (\n    <div className=\"app\">\n      <h2>React Todo</h2>\n      <div className=\"row\">\n        <input\n          value={input}\n          onChange={e => setInput(e.target.value)}\n          onKeyDown={e => e.key === 'Enter' && add()}\n          placeholder=\"Add a task…\"\n        />\n        <button onClick={add}>Add</button>\n      </div>\n      <ul>\n        {todos.map(todo => (\n          <li key={todo.id} className={todo.done ? 'done' : ''}>\n            <span className=\"check\" onClick={() => toggle(todo.id)}>\n              {todo.done ? '✅' : '⬜'}\n            </span>\n            <span className=\"text\" onClick={() => toggle(todo.id)}>{todo.text}</span>\n            <span className=\"del\" onClick={() => remove(todo.id)}>×</span>\n          </li>\n        ))}\n      </ul>\n      <p className=\"stats\">{done}/{todos.length} completed</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')!).render(<App />);"}]}}]);
//# sourceMappingURL=6551.0a6638030faa3a5b7796.js.map