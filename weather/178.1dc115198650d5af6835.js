"use strict";(self.webpackChunk_atlantis_weather=self.webpackChunk_atlantis_weather||[]).push([[178],{4914(a,e,o){o.d(e,{FlyoutPanel:()=>z});var n=o(7359),i=o(3233),t=o(7207),l=o(255),r=o(217),m=o(5959),c=o(5185),s=o(5723);const d=t.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=i.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:a})=>a}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:a})=>a+8}px));
  z-index: 1200;
  background: ${r.w4.colors.surfaceRaised};
  border: 1px solid ${r.w4.colors.accentMuted};
  border-radius: ${r.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${r.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${d} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
    background: ${r.w4.colors.accent};
    opacity: 0.4;
  }
`,f=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${r.w4.colors.accent};
  border-bottom: 1px solid ${r.w4.colors.borderSubtle};
  font-family: ${r.w4.typography.fontFamily};
`,u=i.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:a})=>a?r.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:a})=>a?r.w4.colors.accent:"transparent"};
  color: ${({active:a})=>a?r.w4.colors.accent:r.w4.colors.sidebarText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${r.w4.colors.accentMuted};
    color: ${r.w4.colors.mainText};
  }
`;function p({iconKey:a}){const e=a?c.t[a]??l.A:l.A;return(0,s.jsx)(e,{size:14,strokeWidth:1.75})}function y({entries:a,activeId:e,onSelect:o}){return(0,s.jsx)(s.Fragment,{children:a.map(a=>a.children?(0,s.jsx)(n.Fragment,{children:(0,s.jsx)(y,{entries:a.children,activeId:e,onSelect:o})},a.id):(0,s.jsxs)(u,{active:e===a.id,onClick:()=>o(a),children:[(0,s.jsx)(p,{iconKey:a.icon}),a.name]},a.id))})}function z({activeId:a}){const{flyout:e,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,m.c)();if(!e)return null;const i=e.entry.icon?c.t[e.entry.icon]??l.A:l.A;return(0,s.jsxs)(g,{anchorY:e.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,s.jsxs)(f,{children:[(0,s.jsx)(i,{size:13,strokeWidth:2}),e.entry.name]}),(0,s.jsx)(y,{entries:e.entry.children??[],activeId:a,onSelect:a=>{e.onSelect(a),o()}})]})}},5959(a,e,o){o.d(e,{I:()=>i,c:()=>t});var n=o(7359);const i=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,n.useContext)(i)},5185(a,e,o){o.d(e,{t:()=>ba});var n=o(9510),i=o(9038),t=o(7400),l=o(7561),r=o(8207),m=o(7902),c=o(6896),s=o(3013),d=o(2887),g=o(7901),f=o(9848),u=o(2164),p=o(3045),y=o(3775),z=o(3539),b=o(1783),h=o(9416),x=o(1837),w=o(7167),A=o(4494),v=o(2314),$=o(5751),k=o(255),S=o(9633),M=o(2946),B=o(822),T=o(6720),C=o(8456),E=o(3317),j=o(2709),P=o(9301),L=o(8006),R=o(3517),N=o(7032),G=o(6949),K=o(8218),I=o(6829),F=o(5553),D=o(9591),H=o(9923),V=o(2820),Y=o(4621),U=o(8479),O=o(2534),_=o(6673),Z=o(7490),J=o(9033),W=o(5775),Q=o(1365),q=o(2937),X=o(9821),aa=o(5912),ea=o(158),oa=o(8641),na=o(8607),ia=o(3249),ta=o(1821),la=o(5889),ra=o(9655),ma=o(7170),ca=o(9161),sa=o(1849),da=o(1604),ga=o(3142),fa=o(1187),ua=o(7747),pa=o(2932),ya=o(4525),za=o(7230);const ba={activity:c.A,"a-large-small":m.A,apple:s.A,"arrow-right":d.A,"bar-chart-2":n.A,book:f.A,"book-open":g.A,briefcase:p.A,calendar:y.A,clock:b.A,"circle-dot":z.A,cloud:h.A,compass:x.A,cpu:w.A,droplets:A.A,feather:v.A,file:k.A,"file-text":$.A,folder:S.A,"git-branch":M.A,github:B.A,globe:T.A,grid:t.A,hand:C.A,hash:E.A,heart:j.A,key:L.A,hexagon:P.A,home:l.A,landmark:R.A,layers:r.A,"layout-grid":N.A,leaf:G.A,lightbulb:K.A,list:I.A,map:D.A,"map-pin":F.A,"message-circle":H.A,"message-square":V.A,minus:Y.A,monitor:U.A,mountain:O.A,package:_.A,palette:Z.A,"pen-tool":J.A,"pie-chart":i.A,plane:W.A,plus:Q.A,ruler:q.A,shirt:X.A,slash:aa.A,square:ea.A,star:oa.A,sun:na.A,terminal:ia.A,thermometer:ta.A,triangle:la.A,trophy:ra.A,truck:ma.A,type:ca.A,users:sa.A,"volume-2":da.A,watch:ga.A,waves:fa.A,wind:ua.A,wrench:pa.A,x:ya.A,zap:za.A,bot:u.A}},9178(a,e,o){o.d(e,{rh:()=>J,PE:()=>B,CD:()=>V,qs:()=>Q,rz:()=>q});var n=o(217),i=o(7359),t=o(3233),l=o(5723);t.default.button`
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
`,t.default.div`
  position: relative;
`;var r=o(7207),m=o(3661),c=o(5959);const s="260px",d="56px",g=t.default.header`
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
`,f=t.default.div`
  width: ${d};
  min-width: ${d};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,u=t.default.button`
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
`,p=r.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,y=t.default.button`
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
`,z=t.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${p} 10s ease ${({index:a})=>.07*a}s infinite;

  ${({accent:a})=>a&&`\n    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,b=t.default.div`
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
`,h=t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w4.spacing.md};
  padding: 0 ${n.w4.spacing.lg};

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${n.w4.spacing.sm};
  }
`,x=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,w=t.default.div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,A=t.default.aside`
  width: ${({collapsed:a})=>a?d:s};
  min-width: ${({collapsed:a})=>a?d:s};
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
`,v=t.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,$=t.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,k=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function S(){return(0,l.jsx)(y,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:k.map((a,e)=>(0,l.jsx)(z,{index:e,accent:a.accent,children:a.char},e))})}const M="atlantis:sidebar-collapsed";function B({sidebar:a,children:e,topBarRight:n,title:t="Atlantis",activeId:r=null}){const[s,d]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(M)}catch{return!1}}),[p,y]=(0,i.useState)(null),z=(0,i.useRef)(),k=()=>d(a=>{const e=!a;try{localStorage.setItem(M,String(e))}catch{}return e}),B=i.useMemo(()=>i.lazy(()=>Promise.resolve().then(o.bind(o,4914)).then(a=>({default:a.FlyoutPanel}))),[]);return(0,l.jsx)(c.I.Provider,{value:{collapsed:s,toggle:k,flyout:p,openFlyout:(a,e,o)=>{clearTimeout(z.current),y({entry:a,anchorY:e,onSelect:o})},scheduleFlyoutClose:()=>{z.current=setTimeout(()=>y(null),160)},cancelFlyoutClose:()=>clearTimeout(z.current)},children:(0,l.jsxs)(w,{children:[(0,l.jsxs)(g,{children:[a&&(0,l.jsx)(f,{children:(0,l.jsx)(u,{onClick:k,title:s?"Expand sidebar":"Collapse sidebar",children:(0,l.jsx)(m.A,{size:17})})}),(0,l.jsx)(S,{}),t&&(0,l.jsx)(b,{children:t}),n&&(0,l.jsx)(h,{children:n})]}),(0,l.jsxs)(x,{children:[null!=a&&(0,l.jsx)(A,{collapsed:s,children:(0,l.jsx)(v,{children:a})}),(0,l.jsx)($,{children:e})]}),p&&(0,l.jsx)(i.Suspense,{fallback:null,children:(0,l.jsx)(B,{activeId:r})})]})})}var T=o(255),C=o(9753),E=o(5185);const j=t.default.div`
  display: grid;
  grid-template-rows: ${({open:a})=>a?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,P=t.default.div`
  overflow: hidden;
`,L=t.default.div`
  padding-left: ${n.w4.spacing.md};
`,R=t.default.div`
  display: flex;
  flex-direction: column;
`,N=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:a})=>a?"10px 0":`${n.w4.spacing.sm} ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:a})=>a?"center":"space-between"};
  gap: ${({collapsed:a})=>a?"0":n.w4.spacing.sm};
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
`,G=t.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:a})=>a?"0":"8px"};
  min-width: 0;
`,K=t.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:a})=>a?0:1};
  max-width: ${({collapsed:a})=>a?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,I=t.default.span`
  display: ${({collapsed:a})=>a?"none":"flex"};
  align-items: center;
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:a})=>a?"90deg":"0deg"});
  }
`,F=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:a})=>a?"9px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:a})=>a?"center":"flex-start"};
  gap: ${({collapsed:a})=>a?"0":"8px"};
  background: ${({active:a})=>a?n.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:a})=>a?"none":"2px"} solid
    ${({active:a})=>a?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:a})=>a?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: ${({active:a})=>a?"600":"400"};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:a})=>a?"0":`0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }
`;function D({iconKey:a,size:e=16}){if(a&&!(a in E.t))return(0,l.jsx)("span",{style:{fontSize:e,lineHeight:1,display:"flex",alignItems:"center"},children:a});const o=a?E.t[a]??T.A:T.A;return(0,l.jsx)(o,{size:e,strokeWidth:1.75})}function H({entry:a,activeId:e,onSelect:o}){const[n,t]=(0,i.useState)(a.defaultOpen??!0),{collapsed:r,openFlyout:m,scheduleFlyoutClose:s,cancelFlyoutClose:d}=(0,c.c)();return a.children&&a.children.length>0?(0,l.jsxs)(R,{children:[(0,l.jsxs)(N,{collapsed:r,onClick:()=>{r||t(a=>!a)},onMouseEnter:r?e=>{const n=e.currentTarget.getBoundingClientRect();m(a,n.top,o)}:void 0,onMouseLeave:r?s:void 0,children:[(0,l.jsxs)(G,{collapsed:r,children:[(0,l.jsx)(D,{iconKey:a.icon,size:16}),(0,l.jsx)(K,{collapsed:r,children:a.name})]}),(0,l.jsx)(I,{open:n,collapsed:r,children:(0,l.jsx)(C.A,{size:13})})]}),(0,l.jsx)(j,{open:n&&!r,children:(0,l.jsx)(P,{children:(0,l.jsx)(L,{children:a.children.map(a=>(0,l.jsx)(H,{entry:a,activeId:e,onSelect:o},a.id))})})})]}):(0,l.jsxs)(F,{active:e===a.id,collapsed:r,onClick:()=>o(a),onMouseEnter:r?e=>{const n=e.currentTarget.getBoundingClientRect();m({id:a.id,name:a.name,icon:a.icon,file:a.file,children:[a]},n.top,o)}:void 0,onMouseLeave:r?s:void 0,children:[(0,l.jsx)(D,{iconKey:a.icon,size:15}),(0,l.jsx)(K,{collapsed:r,children:a.name})]})}function V({entries:a,activeId:e,onSelect:o}){return(0,l.jsx)("div",{children:a.map(a=>(0,l.jsx)(H,{entry:a,activeId:e,onSelect:o},a.id))})}const Y=r.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;t.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${Y} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,t.default.span`
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
`,o(4914);var U=o(1920),O=o(8607),_=o(8479);t.default.button`
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
`,U.A,O.A,_.A;const Z=[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}],J=Z.flatMap(a=>a.places),W={AD:{name:"Andorra",flag:"🇦🇩"},AE:{name:"UAE",flag:"🇦🇪"},AF:{name:"Afghanistan",flag:"🇦🇫"},AG:{name:"Antigua & Barbuda",flag:"🇦🇬"},AL:{name:"Albania",flag:"🇦🇱"},AM:{name:"Armenia",flag:"🇦🇲"},AO:{name:"Angola",flag:"🇦🇴"},AR:{name:"Argentina",flag:"🇦🇷"},AT:{name:"Austria",flag:"🇦🇹"},AU:{name:"Australia",flag:"🇦🇺"},AZ:{name:"Azerbaijan",flag:"🇦🇿"},BA:{name:"Bosnia & Herzegovina",flag:"🇧🇦"},BB:{name:"Barbados",flag:"🇧🇧"},BD:{name:"Bangladesh",flag:"🇧🇩"},BE:{name:"Belgium",flag:"🇧🇪"},BF:{name:"Burkina Faso",flag:"🇧🇫"},BG:{name:"Bulgaria",flag:"🇧🇬"},BH:{name:"Bahrain",flag:"🇧🇭"},BI:{name:"Burundi",flag:"🇧🇮"},BJ:{name:"Benin",flag:"🇧🇯"},BN:{name:"Brunei",flag:"🇧🇳"},BO:{name:"Bolivia",flag:"🇧🇴"},BR:{name:"Brazil",flag:"🇧🇷"},BS:{name:"Bahamas",flag:"🇧🇸"},BW:{name:"Botswana",flag:"🇧🇼"},BY:{name:"Belarus",flag:"🇧🇾"},BZ:{name:"Belize",flag:"🇧🇿"},CA:{name:"Canada",flag:"🇨🇦"},CD:{name:"DR Congo",flag:"🇨🇩"},CF:{name:"Central African Rep.",flag:"🇨🇫"},CG:{name:"Republic of Congo",flag:"🇨🇬"},CH:{name:"Switzerland",flag:"🇨🇭"},CI:{name:"Côte d'Ivoire",flag:"🇨🇮"},CL:{name:"Chile",flag:"🇨🇱"},CM:{name:"Cameroon",flag:"🇨🇲"},CN:{name:"China",flag:"🇨🇳"},CO:{name:"Colombia",flag:"🇨🇴"},CR:{name:"Costa Rica",flag:"🇨🇷"},CU:{name:"Cuba",flag:"🇨🇺"},CV:{name:"Cape Verde",flag:"🇨🇻"},CY:{name:"Cyprus",flag:"🇨🇾"},CZ:{name:"Czech Republic",flag:"🇨🇿"},DE:{name:"Germany",flag:"🇩🇪"},DJ:{name:"Djibouti",flag:"🇩🇯"},DK:{name:"Denmark",flag:"🇩🇰"},DM:{name:"Dominica",flag:"🇩🇲"},DO:{name:"Dominican Republic",flag:"🇩🇴"},DZ:{name:"Algeria",flag:"🇩🇿"},EC:{name:"Ecuador",flag:"🇪🇨"},EE:{name:"Estonia",flag:"🇪🇪"},EG:{name:"Egypt",flag:"🇪🇬"},ER:{name:"Eritrea",flag:"🇪🇷"},ES:{name:"Spain",flag:"🇪🇸"},ET:{name:"Ethiopia",flag:"🇪🇹"},FI:{name:"Finland",flag:"🇫🇮"},FJ:{name:"Fiji",flag:"🇫🇯"},FM:{name:"Micronesia",flag:"🇫🇲"},FR:{name:"France",flag:"🇫🇷"},GA:{name:"Gabon",flag:"🇬🇦"},GB:{name:"United Kingdom",flag:"🇬🇧"},GD:{name:"Grenada",flag:"🇬🇩"},GE:{name:"Georgia",flag:"🇬🇪"},GH:{name:"Ghana",flag:"🇬🇭"},GM:{name:"Gambia",flag:"🇬🇲"},GN:{name:"Guinea",flag:"🇬🇳"},GQ:{name:"Equatorial Guinea",flag:"🇬🇶"},GR:{name:"Greece",flag:"🇬🇷"},GT:{name:"Guatemala",flag:"🇬🇹"},GW:{name:"Guinea-Bissau",flag:"🇬🇼"},GY:{name:"Guyana",flag:"🇬🇾"},HN:{name:"Honduras",flag:"🇭🇳"},HR:{name:"Croatia",flag:"🇭🇷"},HT:{name:"Haiti",flag:"🇭🇹"},HU:{name:"Hungary",flag:"🇭🇺"},ID:{name:"Indonesia",flag:"🇮🇩"},IE:{name:"Ireland",flag:"🇮🇪"},IL:{name:"Israel",flag:"🇮🇱"},IN:{name:"India",flag:"🇮🇳"},IQ:{name:"Iraq",flag:"🇮🇶"},IR:{name:"Iran",flag:"🇮🇷"},IS:{name:"Iceland",flag:"🇮🇸"},IT:{name:"Italy",flag:"🇮🇹"},JM:{name:"Jamaica",flag:"🇯🇲"},JO:{name:"Jordan",flag:"🇯🇴"},JP:{name:"Japan",flag:"🇯🇵"},KE:{name:"Kenya",flag:"🇰🇪"},KG:{name:"Kyrgyzstan",flag:"🇰🇬"},KH:{name:"Cambodia",flag:"🇰🇭"},KI:{name:"Kiribati",flag:"🇰🇮"},KM:{name:"Comoros",flag:"🇰🇲"},KN:{name:"Saint Kitts & Nevis",flag:"🇰🇳"},KP:{name:"North Korea",flag:"🇰🇵"},KR:{name:"South Korea",flag:"🇰🇷"},KW:{name:"Kuwait",flag:"🇰🇼"},KZ:{name:"Kazakhstan",flag:"🇰🇿"},LA:{name:"Laos",flag:"🇱🇦"},LB:{name:"Lebanon",flag:"🇱🇧"},LC:{name:"Saint Lucia",flag:"🇱🇨"},LI:{name:"Liechtenstein",flag:"🇱🇮"},LK:{name:"Sri Lanka",flag:"🇱🇰"},LR:{name:"Liberia",flag:"🇱🇷"},LS:{name:"Lesotho",flag:"🇱🇸"},LT:{name:"Lithuania",flag:"🇱🇹"},LU:{name:"Luxembourg",flag:"🇱🇺"},LV:{name:"Latvia",flag:"🇱🇻"},LY:{name:"Libya",flag:"🇱🇾"},MA:{name:"Morocco",flag:"🇲🇦"},MC:{name:"Monaco",flag:"🇲🇨"},MD:{name:"Moldova",flag:"🇲🇩"},ME:{name:"Montenegro",flag:"🇲🇪"},MG:{name:"Madagascar",flag:"🇲🇬"},MH:{name:"Marshall Islands",flag:"🇲🇭"},MK:{name:"North Macedonia",flag:"🇲🇰"},ML:{name:"Mali",flag:"🇲🇱"},MM:{name:"Myanmar",flag:"🇲🇲"},MN:{name:"Mongolia",flag:"🇲🇳"},MR:{name:"Mauritania",flag:"🇲🇷"},MT:{name:"Malta",flag:"🇲🇹"},MU:{name:"Mauritius",flag:"🇲🇺"},MV:{name:"Maldives",flag:"🇲🇻"},MW:{name:"Malawi",flag:"🇲🇼"},MX:{name:"Mexico",flag:"🇲🇽"},MY:{name:"Malaysia",flag:"🇲🇾"},MZ:{name:"Mozambique",flag:"🇲🇿"},NA:{name:"Namibia",flag:"🇳🇦"},NE:{name:"Niger",flag:"🇳🇪"},NG:{name:"Nigeria",flag:"🇳🇬"},NI:{name:"Nicaragua",flag:"🇳🇮"},NL:{name:"Netherlands",flag:"🇳🇱"},NO:{name:"Norway",flag:"🇳🇴"},NP:{name:"Nepal",flag:"🇳🇵"},NR:{name:"Nauru",flag:"🇳🇷"},NZ:{name:"New Zealand",flag:"🇳🇿"},OM:{name:"Oman",flag:"🇴🇲"},PA:{name:"Panama",flag:"🇵🇦"},PE:{name:"Peru",flag:"🇵🇪"},PG:{name:"Papua New Guinea",flag:"🇵🇬"},PH:{name:"Philippines",flag:"🇵🇭"},PK:{name:"Pakistan",flag:"🇵🇰"},PL:{name:"Poland",flag:"🇵🇱"},PS:{name:"Palestine",flag:"🇵🇸"},PT:{name:"Portugal",flag:"🇵🇹"},PW:{name:"Palau",flag:"🇵🇼"},PY:{name:"Paraguay",flag:"🇵🇾"},QA:{name:"Qatar",flag:"🇶🇦"},RO:{name:"Romania",flag:"🇷🇴"},RS:{name:"Serbia",flag:"🇷🇸"},RU:{name:"Russia",flag:"🇷🇺"},RW:{name:"Rwanda",flag:"🇷🇼"},SA:{name:"Saudi Arabia",flag:"🇸🇦"},SB:{name:"Solomon Islands",flag:"🇸🇧"},SC:{name:"Seychelles",flag:"🇸🇨"},SD:{name:"Sudan",flag:"🇸🇩"},SE:{name:"Sweden",flag:"🇸🇪"},SG:{name:"Singapore",flag:"🇸🇬"},SI:{name:"Slovenia",flag:"🇸🇮"},SK:{name:"Slovakia",flag:"🇸🇰"},SL:{name:"Sierra Leone",flag:"🇸🇱"},SM:{name:"San Marino",flag:"🇸🇲"},SN:{name:"Senegal",flag:"🇸🇳"},SO:{name:"Somalia",flag:"🇸🇴"},SR:{name:"Suriname",flag:"🇸🇷"},SS:{name:"South Sudan",flag:"🇸🇸"},ST:{name:"São Tomé & Príncipe",flag:"🇸🇹"},SV:{name:"El Salvador",flag:"🇸🇻"},SY:{name:"Syria",flag:"🇸🇾"},SZ:{name:"Eswatini",flag:"🇸🇿"},TD:{name:"Chad",flag:"🇹🇩"},TG:{name:"Togo",flag:"🇹🇬"},TH:{name:"Thailand",flag:"🇹🇭"},TJ:{name:"Tajikistan",flag:"🇹🇯"},TL:{name:"Timor-Leste",flag:"🇹🇱"},TM:{name:"Turkmenistan",flag:"🇹🇲"},TN:{name:"Tunisia",flag:"🇹🇳"},TO:{name:"Tonga",flag:"🇹🇴"},TR:{name:"Turkey",flag:"🇹🇷"},TT:{name:"Trinidad & Tobago",flag:"🇹🇹"},TV:{name:"Tuvalu",flag:"🇹🇻"},TZ:{name:"Tanzania",flag:"🇹🇿"},UA:{name:"Ukraine",flag:"🇺🇦"},UG:{name:"Uganda",flag:"🇺🇬"},US:{name:"United States",flag:"🇺🇸"},UY:{name:"Uruguay",flag:"🇺🇾"},UZ:{name:"Uzbekistan",flag:"🇺🇿"},VA:{name:"Vatican City",flag:"🇻🇦"},VC:{name:"St Vincent & Gren.",flag:"🇻🇨"},VE:{name:"Venezuela",flag:"🇻🇪"},VN:{name:"Vietnam",flag:"🇻🇳"},VU:{name:"Vanuatu",flag:"🇻🇺"},WS:{name:"Samoa",flag:"🇼🇸"},YE:{name:"Yemen",flag:"🇾🇪"},ZA:{name:"South Africa",flag:"🇿🇦"},ZM:{name:"Zambia",flag:"🇿🇲"},ZW:{name:"Zimbabwe",flag:"🇿🇼"}};function Q(a=[]){const e=[];if(a.length>0){const o=a.map(a=>J.find(e=>e.id===a)).filter(a=>void 0!==a);e.push({id:"__recent__",name:"Recent",icon:"🕐",defaultOpen:!0,children:o.map(a=>({id:a.id,name:a.name,icon:a.flag}))})}for(const a of Z){const o=new Map;for(const e of a.places){const a=o.get(e.country)??[];a.push(e),o.set(e.country,a)}const n=[];for(const[a,e]of o){const o=W[a],i=o?.name??a,t=o?.flag??"";n.push({id:`country-${a}`,name:i,icon:t,defaultOpen:!1,children:e.map(a=>({id:a.id,name:a.name,icon:a.flag}))})}e.push({id:a.id,name:a.name,icon:a.icon,defaultOpen:!1,children:n})}return e}function q(a,e=8){const[o,n]=(0,i.useState)(()=>function(a){try{return JSON.parse(localStorage.getItem(a)??"[]")}catch{return[]}}(a));return{recent:o,addRecent:(0,i.useCallback)(o=>{n(n=>{const i=[o,...n.filter(a=>a!==o)].slice(0,e);return function(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}(a,i),i})},[a,e])}}t.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,t.default.div`
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
`,t.default.div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,t.default.input`
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
`,t.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,t.default.button`
  padding: 7px 18px;
  border-radius: ${n.w4.borderRadius.md};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:a,danger:e})=>e?"rgba(248,81,73,0.12)":a?n.w4.colors.accent:"none"};
  color: ${({primary:a,danger:e})=>e?n.w4.colors.danger:a?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:a,danger:e})=>e?n.w4.colors.danger:a?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,t.default.div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,t.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,t.default.div`
  position: relative;
`,t.default.button`
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
`,t.default.div`
  display: ${({open:a})=>a?"flex":"none"};
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
`,t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,t.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,t.default.div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,t.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,t.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,t.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-top: 1px;
`,t.default.button`
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
`,new Set([10751]),new Set([27]),t.default.div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,t.default.section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,t.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,t.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,t.default.header`
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
`,t.default.button`
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
`,t.default.span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,t.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,t.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,t.default.div`
  flex: 1;
`;const X=r.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,aa=r.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ea=r.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  animation: ${X} 0.4s ease 0.15s both;
`,t.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,t.default.div`
  position: absolute;
  inset: 0;
  animation: ${aa} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:a})=>a}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:a})=>a}px;
    height: ${({size:a})=>a}px;
    border-radius: 50%;
    background: ${({color:a})=>a};
    box-shadow: 0 0 8px ${({color:a})=>a}44;
  }
`,t.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${n.w4.colors.border};
  animation: ${ea} 1.4s ease-in-out infinite;
`,t.default.span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,t.default.nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${n.w4.spacing.sm} 0;
`,t.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${n.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${n.w4.spacing.xs} ${n.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:a})=>a&&"\n    font-size: 0;\n    padding: 0;\n    margin: 0;\n    height: 0;\n  "}
`,t.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  background: ${({active:a})=>a?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:a})=>a?n.w4.colors.accent:n.w4.colors.sidebarText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: ${({active:a})=>a?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }

  ${({collapsed:a})=>a&&"\n    justify-content: center;\n    padding: 8px;\n    margin: 0 4px;\n  "}
`,t.default.span`
  font-size: 15px;
  line-height: 1;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
`,t.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:a})=>a&&"display: none;"}
`},217(a,e,o){o.d(e,{w4:()=>i});const n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#7a8599",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.15)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#2a3040",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1a2030",success:"#34d399",warning:"#fbbf24",danger:"#f87171"},i={colors:function(){const a={};for(const e of Object.keys(n))a[e]=`var(--at-${e})`;return a}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}}}]);
//# sourceMappingURL=178.1dc115198650d5af6835.js.map