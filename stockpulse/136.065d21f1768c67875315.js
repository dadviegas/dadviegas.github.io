"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([[136],{4914(e,a,o){o.d(a,{FlyoutPanel:()=>y});var n=o(7359),i=o(3233),t=o(7207),r=o(255),l=o(217),s=o(5959),d=o(5185),c=o(5723);const m=t.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=i.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: #161b22;
  border: 1px solid rgba(88, 166, 255, 0.2);
  border-radius: ${l.w.borderRadius.lg};
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.06),
    0 16px 48px rgba(0, 0, 0, 0.75);
  min-width: 210px;
  overflow-y: auto;
  animation: ${m} 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: rgba(88, 166, 255, 0.35);
  }
`,u=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: rgba(88, 166, 255, 0.85);
  border-bottom: 1px solid rgba(88, 166, 255, 0.1);
  font-family: ${l.w.typography.fontFamily};
`,p=i.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  /* Same padding as PanelTitle so icons stay in the same column */
  padding: 8px 14px;
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.1)":"none"};
  border: none;
  /* inset box-shadow for the active indicator — doesn't affect layout unlike border-left */
  box-shadow: inset 2px 0 0 ${({active:e})=>e?"#58a6ff":"transparent"};
  color: ${({active:e})=>e?"#58a6ff":"#c9d1d9"};
  font-size: ${l.w.typography.fontSizeBase};
  font-family: ${l.w.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: rgba(88, 166, 255, 0.07);
    color: #e6edf3;
  }
`;function f({iconKey:e}){const a=e?d.t[e]??r.A:r.A;return(0,c.jsx)(a,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:a,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(h,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,c.jsxs)(p,{active:a===e.id,onClick:()=>o(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function y({activeId:e}){const{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,s.c)();if(!a)return null;const i=a.entry.icon?d.t[a.entry.icon]??r.A:r.A;return(0,c.jsxs)(g,{anchorY:a.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(i,{size:13,strokeWidth:2}),a.entry.name]}),(0,c.jsx)(h,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},5959(e,a,o){o.d(a,{I:()=>i,c:()=>t});var n=o(7359);const i=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,n.useContext)(i)},5185(e,a,o){o.d(a,{t:()=>V});var n=o(9510),i=o(9038),t=o(8207),r=o(6896),l=o(7901),s=o(9848),d=o(2164),c=o(3775),m=o(3539),g=o(1783),u=o(1837),p=o(2314),f=o(5751),h=o(255),y=o(9633),x=o(2946),b=o(822),z=o(6720),w=o(3317),A=o(2709),v=o(3517),j=o(7032),$=o(6949),k=o(8218),S=o(6829),M=o(5553),T=o(9591),P=o(2820),B=o(4621),E=o(6673),C=o(9033),L=o(1365),R=o(5912),D=o(8641),F=o(3249),N=o(1821),I=o(9161),G=o(1849),U=o(7747),H=o(2932),K=o(4525),O=o(7230);const V={activity:r.A,"bar-chart-2":n.A,book:s.A,"book-open":l.A,calendar:c.A,clock:g.A,"circle-dot":m.A,feather:p.A,"file-text":f.A,globe:z.A,hash:w.A,heart:A.A,landmark:v.A,layers:t.A,leaf:$.A,map:T.A,package:E.A,compass:u.A,"git-branch":x.A,github:b.A,minus:B.A,terminal:F.A,thermometer:N.A,users:G.A,wind:U.A,"pie-chart":i.A,plus:L.A,slash:R.A,star:D.A,zap:O.A,bot:d.A,lightbulb:k.A,"message-square":P.A,wrench:H.A,x:K.A,"layout-grid":j.A,list:S.A,file:h.A,folder:y.A,"map-pin":M.A,"pen-tool":C.A,type:I.A}},4079(e,a,o){o.d(a,{PE:()=>v,CD:()=>N,w4:()=>n.w});var n=o(217),i=o(7359),t=o(3233),r=o(5723);t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${n.w.spacing.sm};
  background: ${n.w.colors.surface};
  border: 1px solid ${n.w.colors.border};
  border-radius: ${n.w.borderRadius.md};
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,t.default.div`
  position: relative;
`;var l=o(3661),s=o(5959);const d="260px",c="56px",m=t.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${n.w.colors.sidebarBg};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,g=t.default.div`
  width: ${c};
  min-width: ${c};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,u=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${n.w.borderRadius.md};
  cursor: pointer;
  color: ${n.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${n.w.colors.sidebarHover};
    color: ${n.w.colors.sidebarText};
  }
`,p=t.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${n.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${n.w.colors.accent}; }
`,f=t.default.div`
  font-size: ${n.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  padding-left: ${n.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${n.w.spacing.sm};
    color: ${n.w.colors.border};
  }
`,h=t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w.spacing.sm};
  padding: 0 ${n.w.spacing.lg};
`,y=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,x=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${n.w.colors.mainBg};
  font-family: ${n.w.typography.fontFamily};
  color: ${n.w.colors.mainText};
  overflow: hidden;
`,b=t.default.aside`
  width: ${({collapsed:e})=>e?c:d};
  min-width: ${({collapsed:e})=>e?c:d};
  background: ${n.w.colors.sidebarBg};
  border-right: 1px solid ${n.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${n.w.breakpoints.md}) {
    display: none;
  }
`,z=t.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,w=t.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A="atlantis:sidebar-collapsed";function v({sidebar:e,children:a,topBarRight:n,title:t="Atlantis",activeId:d=null}){const[c,v]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(A)}catch{return!1}}),[j,$]=(0,i.useState)(null),k=(0,i.useRef)(),S=()=>v(e=>{const a=!e;try{localStorage.setItem(A,String(a))}catch{}return a}),M=i.useMemo(()=>i.lazy(()=>Promise.resolve().then(o.bind(o,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(s.I.Provider,{value:{collapsed:c,toggle:S,flyout:j,openFlyout:(e,a,o)=>{clearTimeout(k.current),$({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{k.current=setTimeout(()=>$(null),160)},cancelFlyoutClose:()=>clearTimeout(k.current)},children:(0,r.jsxs)(x,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(g,{children:(0,r.jsx)(u,{onClick:S,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(l.A,{size:17})})}),(0,r.jsxs)(p,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,r.jsx)("span",{children:"antis"})]}),t&&(0,r.jsx)(f,{children:t}),n&&(0,r.jsx)(h,{children:n})]}),(0,r.jsxs)(y,{children:[null!=e&&(0,r.jsx)(b,{collapsed:c,children:(0,r.jsx)(z,{children:e})}),(0,r.jsx)(w,{children:a})]}),j&&(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)(M,{activeId:d})})]})})}var j=o(255),$=o(9753),k=o(5185);const S=t.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,M=t.default.div`
  overflow: hidden;
`,T=t.default.div`
  padding-left: ${n.w.spacing.md};
`,P=t.default.div`
  display: flex;
  flex-direction: column;
`,B=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${n.w.spacing.sm} ${n.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":n.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w.colors.sidebarTextMuted};
  font-size: ${n.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${n.w.colors.sidebarText};
    background: ${n.w.colors.sidebarHover};
  }
`,E=t.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,C=t.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,L=t.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${n.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,R=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${n.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?n.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?n.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w.colors.sidebarActive:n.w.colors.sidebarText};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${n.w.borderRadius.sm} ${n.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
  }
`;function D({iconKey:e,size:a=16}){if(e&&!(e in k.t))return(0,r.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});const o=e?k.t[e]??j.A:j.A;return(0,r.jsx)(o,{size:a,strokeWidth:1.75})}function F({entry:e,activeId:a,onSelect:o}){const[n,t]=(0,i.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:d,scheduleFlyoutClose:c,cancelFlyoutClose:m}=(0,s.c)();return e.children&&e.children.length>0?(0,r.jsxs)(P,{children:[(0,r.jsxs)(B,{collapsed:l,onClick:()=>{l||t(e=>!e)},onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();d(e,n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsxs)(E,{collapsed:l,children:[(0,r.jsx)(D,{iconKey:e.icon,size:16}),(0,r.jsx)(C,{collapsed:l,children:e.name})]}),(0,r.jsx)(L,{open:n,collapsed:l,children:(0,r.jsx)($.A,{size:13})})]}),(0,r.jsx)(S,{open:n&&!l,children:(0,r.jsx)(M,{children:(0,r.jsx)(T,{children:e.children.map(e=>(0,r.jsx)(F,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,r.jsxs)(R,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();d({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsx)(D,{iconKey:e.icon,size:15}),(0,r.jsx)(C,{collapsed:l,children:e.name})]})}function N({entries:e,activeId:a,onSelect:o}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(F,{entry:e,activeId:a,onSelect:o},e.id))})}const I=o(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;t.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${I} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: rgba(88, 166, 255, 0.3);
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: #0d1117;
  }
`,t.default.span`
  display: block;
  background: #0d1117;
  border: 1px solid rgba(88, 166, 255, 0.25);
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.08),
    0 8px 32px rgba(0, 0, 0, 0.7);
  color: #e6edf3;
  font-size: 12px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
`,o(4914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places),t.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,t.default.div`
  background: ${n.w.colors.sidebarBg};
  border: 1px solid ${n.w.colors.sidebarBorder};
  border-radius: ${n.w.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,t.default.div`
  font-size: ${n.w.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
`,t.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${n.w.colors.mainBg};
  border: 1px solid ${n.w.colors.border};
  border-radius: ${n.w.borderRadius.md};
  color: ${n.w.colors.mainText};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${n.w.colors.accent}; }
  &::placeholder { color: ${n.w.colors.sidebarTextMuted}; }
`,t.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,t.default.button`
  padding: 7px 18px;
  border-radius: ${n.w.borderRadius.md};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.15)":e?n.w.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?"#f85149":e?"#fff":n.w.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?"#f85149":e?n.w.colors.accent:n.w.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,t.default.div`
  height: 1px;
  background: ${n.w.colors.border};
  margin: 0 -4px;
`,t.default.div`
  font-size: 11px;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
`,t.default.div`
  position: relative;
`,t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${n.w.colors.border};
  border-radius: ${n.w.borderRadius.md};
  color: ${n.w.colors.mainText};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w.colors.sidebarHover};
    border-color: ${n.w.colors.accent};
  }
`,t.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${n.w.colors.sidebarBg};
  border: 1px solid ${n.w.colors.sidebarBorder};
  border-radius: ${n.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,t.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,t.default.div`
  padding: 16px 14px;
  font-size: ${n.w.typography.fontSizeBase};
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  font-style: italic;
`,t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
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
  font-size: ${n.w.typography.fontSizeBase};
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,t.default.div`
  font-size: 11px;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
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
  border-radius: ${n.w.borderRadius.sm};
  cursor: pointer;
  color: ${n.w.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: #f85149;
    background: rgba(248, 81, 73, 0.12);
  }
`},217(e,a,o){o.d(a,{w:()=>n});const n={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},6208(e,a,o){o.d(a,{A:()=>I});var n=o(7359),i=o(3233),t=o(7207),r=o(3775),l=o(9121),s=o(4368),d=o(4079),c=o(8447),m=o(5723);const g=t.keyframes`0%,100%{opacity:1}50%{opacity:.4}`,u=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,p=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,f=i.default.h2`
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,h=i.default.div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,y=i.default.button`
  padding: 4px 12px;
  border-radius: ${d.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?"#58a6ff":d.w4.colors.border};
  background: ${({active:e})=>e?"rgba(88,166,255,0.1)":"transparent"};
  color: ${({active:e})=>e?"#58a6ff":d.w4.colors.mainTextMuted};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #58a6ff;
    color: #58a6ff;
  }
`,x=i.default.select`
  padding: 4px 8px;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainText};
  font-size: 12px;
  outline: none;
  cursor: pointer;

  &:focus { border-color: #58a6ff; }
`,b=i.default.div`
  display: flex;
  gap: ${d.w4.spacing.xl};
  align-items: flex-start;

  @media (max-width: ${d.w4.breakpoints.lg}) {
    flex-direction: column;
  }
`,z=i.default.div`
  flex: 1;
  min-width: 0;
`,w=i.default.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 4px;
`,A=i.default.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 6px;
`,v=i.default.div`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 0;
`,j=i.default.div`
  background: ${({bg:e,empty:a})=>a?"transparent":e};
  border-radius: ${d.w4.borderRadius.sm};
  padding: 8px 6px;
  min-height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({empty:e})=>e?"default":"pointer"};
  border: 1px solid ${({empty:e})=>e?"transparent":"rgba(255,255,255,0.05)"};
  transition: filter 0.12s;
  position: relative;

  &:hover {
    filter: ${({empty:e})=>e?"none":"brightness(1.2)"};
  }
`,$=i.default.div`
  font-size: 10px;
  color: rgba(255,255,255,0.55);
  font-family: ${d.w4.typography.fontFamilyMono};
`,k=i.default.div`
  font-size: 13px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  font-family: ${d.w4.typography.fontFamilyMono};
`,S=i.default.div`
  background: ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  min-height: 58px;
  animation: ${g} 1.5s ease-in-out infinite;
`,M=i.default.div`
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,T=i.default.div`
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
`,P=i.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 4px;
`,B=i.default.div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({positive:e})=>void 0===e?d.w4.colors.mainText:e?"#3fb950":"#f85149"};
`,E=i.default.div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,C=i.default.div`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #1c2128;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 8px 10px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainText};
  pointer-events: none;
  z-index: 100;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #1c2128;
  }
`,L=i.default.div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
`,R=i.default.div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #7f1d1d, #dc2626, #21262d, #16a34a, #166534);
`,D=[{symbol:"AAPL",label:"Apple (AAPL)"},{symbol:"MSFT",label:"Microsoft (MSFT)"},{symbol:"NVDA",label:"NVIDIA (NVDA)"},{symbol:"GOOGL",label:"Alphabet (GOOGL)"},{symbol:"TSM",label:"TSMC (TSM)"},{symbol:"ASML",label:"ASML (ASML)"}];function F(e){return new Date(e+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"})}function N({bar:e}){const[a,o]=(0,n.useState)(!1);return(0,m.jsxs)(j,{bg:(0,c.yv)(e.changePct),onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[a&&(0,m.jsxs)(C,{children:[(0,m.jsx)("div",{style:{fontWeight:600,marginBottom:4},children:F(e.date)}),(0,m.jsxs)("div",{children:["Open  ",(0,c.Sc)(e.open,e.open>100?0:2)]}),(0,m.jsxs)("div",{children:["Close ",(0,c.Sc)(e.close,e.close>100?0:2)]}),(0,m.jsxs)("div",{children:["High  ",(0,c.Sc)(e.high,e.high>100?0:2)]}),(0,m.jsxs)("div",{children:["Low   ",(0,c.Sc)(e.low,e.low>100?0:2)]}),(0,m.jsx)("div",{style:{marginTop:4,color:e.changePct>=0?"#3fb950":"#f85149",fontWeight:600},children:(0,c.pT)(e.changePct)})]}),(0,m.jsx)($,{children:F(e.date)}),(0,m.jsx)(k,{children:(0,c.pT)(e.changePct)})]})}function I(){const[e,a]=(0,n.useState)("1mo"),[o,i]=(0,n.useState)("^GSPC"),{bars:t,loading:g}=(0,c.W6)(o,e),$=function(e){if(0===e.length)return[];const a=[];let o=[],n=-1;return e.forEach(e=>{const i=function(e){const a=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()));a.setUTCDate(a.getUTCDate()+4-(a.getUTCDay()||7));const o=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a.getTime()-o.getTime())/864e5+1)/7)}(new Date(e.date+"T12:00:00Z"));i!==n&&o.length>0&&(a.push(o),o=[]),o.push(e),n=i}),o.length>0&&a.push(o),a.slice(-8)}(t),k=t.filter(e=>e.changePct>0),C=t.filter(e=>e.changePct<0),I=t.reduce((e,a)=>e.changePct>a.changePct?e:a,t[0]),G=t.reduce((e,a)=>e.changePct<a.changePct?e:a,t[0]),U=t.length>1?(t[t.length-1].close-t[0].close)/t[0].close*100:0;return(0,m.jsxs)(u,{children:[(0,m.jsxs)(p,{children:[(0,m.jsxs)(f,{children:[(0,m.jsx)(r.A,{size:18,color:"#e3b341"}),"Good & Bad Days"]}),(0,m.jsxs)(h,{children:[(0,m.jsx)(x,{value:o,onChange:e=>i(e.target.value),children:D.map(e=>(0,m.jsx)("option",{value:e.symbol,children:e.label},e.symbol))}),["5d","1mo","3mo"].map(o=>(0,m.jsx)(y,{active:e===o,onClick:()=>a(o),children:"5d"===o?"1W":"1mo"===o?"1M":"3M"},o))]})]}),(0,m.jsxs)(b,{children:[(0,m.jsxs)(z,{children:[(0,m.jsx)(A,{children:["Mon","Tue","Wed","Thu","Fri"].map(e=>(0,m.jsx)(v,{children:e},e))}),g?Array.from({length:4}).map((e,a)=>(0,m.jsx)(w,{children:Array.from({length:5}).map((e,a)=>(0,m.jsx)(S,{},a))},a)):$.map((e,a)=>{const o=[null,null,null,null,null];return e.forEach(e=>{const a=(n=e.date,new Date(n+"T12:00:00Z").getUTCDay()-1);var n;a>=0&&a<5&&(o[a]=e)}),(0,m.jsx)(w,{children:o.map((e,a)=>e?(0,m.jsx)(N,{bar:e},a):(0,m.jsx)(j,{bg:"transparent",empty:!0},a))},a)}),(0,m.jsxs)(L,{style:{marginTop:d.w4.spacing.sm},children:[(0,m.jsx)("span",{children:"−4%"}),(0,m.jsx)(R,{}),(0,m.jsx)("span",{children:"+4%"})]})]}),(0,m.jsxs)(M,{children:[(0,m.jsxs)(T,{children:[(0,m.jsx)(P,{children:"Period Return"}),(0,m.jsx)(B,{positive:U>=0,children:(0,c.pT)(U)}),(0,m.jsxs)(E,{children:[t.length," trading days"]})]}),(0,m.jsxs)(T,{children:[(0,m.jsx)(P,{children:"Up Days"}),(0,m.jsxs)(B,{positive:!0,children:[k.length,(0,m.jsxs)("span",{style:{fontSize:13,fontWeight:400,color:d.w4.colors.mainTextMuted},children:[" ","/ ",t.length]})]}),(0,m.jsxs)(E,{children:[t.length>0?Math.round(k.length/t.length*100):0,"% of trading days"]})]}),(0,m.jsxs)(T,{children:[(0,m.jsx)(P,{children:"Down Days"}),(0,m.jsxs)(B,{positive:!1,children:[C.length,(0,m.jsxs)("span",{style:{fontSize:13,fontWeight:400,color:d.w4.colors.mainTextMuted},children:[" ","/ ",t.length]})]}),(0,m.jsxs)(E,{children:[t.length>0?Math.round(C.length/t.length*100):0,"% of trading days"]})]}),I&&(0,m.jsxs)(T,{children:[(0,m.jsx)(P,{children:"Best Day"}),(0,m.jsxs)(B,{positive:!0,children:[(0,m.jsx)(s.A,{size:14,style:{marginRight:4}}),(0,c.pT)(I.changePct)]}),(0,m.jsx)(E,{children:F(I.date)})]}),G&&(0,m.jsxs)(T,{children:[(0,m.jsx)(P,{children:"Worst Day"}),(0,m.jsxs)(B,{positive:!1,children:[(0,m.jsx)(l.A,{size:14,style:{marginRight:4}}),(0,c.pT)(G.changePct)]}),(0,m.jsx)(E,{children:F(G.date)})]}),(0,m.jsxs)(T,{children:[(0,m.jsx)(P,{children:"How to read"}),(0,m.jsx)("div",{style:{fontSize:11,color:d.w4.colors.mainTextMuted,lineHeight:1.5},children:"Each cell is one trading day. Dark green = strong up day. Dark red = strong down day. Hover any cell for open, close, high, low, and % change."})]})]})]})]})}},719(e,a,o){o.d(a,{A:()=>U}),o(7359);var n=o(3233),i=o(7207),t=o(5569),r=o(4621),l=o(9421),s=o(9121),d=o(4368),c=o(4079),m=o(8447),g=o(5723);const u=i.keyframes`0%,100%{opacity:1}50%{opacity:.4}`,p=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.lg};
`,f=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,h=n.default.h2`
  font-size: ${c.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,y=n.default.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 999px;
  background: ${({state:e})=>"REGULAR"===e?"rgba(63,185,80,0.12)":"PRE"===e?"rgba(88,166,255,0.12)":"POST"===e?"rgba(227,179,65,0.12)":"rgba(139,148,158,0.1)"};
  color: ${({state:e})=>"REGULAR"===e?"#3fb950":"PRE"===e?"#58a6ff":"POST"===e?"#e3b341":c.w4.colors.mainTextMuted};
  border: 1px solid ${({state:e})=>"REGULAR"===e?"rgba(63,185,80,0.3)":"PRE"===e?"rgba(88,166,255,0.3)":"POST"===e?"rgba(227,179,65,0.3)":c.w4.colors.border};
`,x=n.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: ${({state:e})=>"REGULAR"===e?u:"none"} 1.5s ease-in-out infinite;
`,b=n.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,z=n.default.div`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${({positive:e})=>null===e?c.w4.colors.border:e?"rgba(63,185,80,0.25)":"rgba(248,81,73,0.25)"};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.3s;
`,w=n.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,A=n.default.div`
  font-size: 13px;
  font-weight: 500;
  color: ${c.w4.colors.mainText};
`,v=n.default.div`
  font-size: 26px;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  font-family: ${c.w4.typography.fontFamilyMono};
  line-height: 1.1;
`,j=n.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${({pct:e})=>(0,m.Nf)(e)};
`,$=n.default.div`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamilyMono};
  margin-top: 2px;
`,k=n.default.div`
  height: 14px;
  width: ${({w:e})=>e??"100%"};
  background: ${c.w4.colors.border};
  border-radius: 3px;
  animation: ${u} 1.5s ease-in-out infinite;
`,S=n.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,M=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,T=n.default.div`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
`,P=n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: ${c.w4.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({color:e})=>e};
`,B=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid ${c.w4.colors.border};
  font-size: 12px;

  &:last-child { border-bottom: none; }
`,E=n.default.span`
  color: ${c.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,C=n.default.span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 600;
  color: ${({pct:e})=>(0,m.Nf)(e)};
`,L=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,R=n.default.div`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 6px;
`,D=n.default.div`
  font-size: 12px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,F=n.default.div`
  font-size: 12px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.6;
`,N=n.default.div`
  padding: ${c.w4.spacing.md};
  background: rgba(248,81,73,0.08);
  border: 1px solid rgba(248,81,73,0.25);
  border-radius: ${c.w4.borderRadius.md};
  color: #f85149;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,I=[{symbol:"AAPL",label:"Apple",region:"🇺🇸 Americas"},{symbol:"NVDA",label:"NVIDIA",region:"🇺🇸 Americas"},{symbol:"ASML",label:"ASML",region:"🇳🇱 Europe"},{symbol:"TSM",label:"TSMC",region:"🇹🇼 Asia"}];function G({pct:e}){return e>0?(0,g.jsx)(d.A,{size:16}):e<0?(0,g.jsx)(s.A,{size:16}):(0,g.jsx)(r.A,{size:14})}function U({quotes:e,loading:a,error:o}){const n=e.values().next().value,i=n?.marketState??"CLOSED",r="REGULAR"===i?"Market Open":"PRE"===i?"Pre-Market":"POST"===i?"After Hours":"Market Closed";return(0,g.jsxs)(p,{children:[(0,g.jsxs)(f,{children:[(0,g.jsxs)(h,{children:[(0,g.jsx)(d.A,{size:18,color:"#58a6ff"}),"Market Overview"]}),(0,g.jsxs)(y,{state:i,children:[(0,g.jsx)(x,{state:i}),r]})]}),o&&(0,g.jsxs)(N,{children:[(0,g.jsx)(l.A,{size:13}),"Market data unavailable — ",o,". Add your free API key from financialmodelingprep.com to ",(0,g.jsx)("code",{style:{fontFamily:"monospace",background:"rgba(255,255,255,0.08)",padding:"1px 5px",borderRadius:3},children:"FMP_API_KEY"})," in hooks.ts."]}),(0,g.jsx)(S,{children:"Key Indices"}),(0,g.jsx)(b,{children:I.map(({symbol:o,label:n,region:i})=>{const t=e.get(o),r=t?t.changePct>0||!(t.changePct<0)&&null:null;return(0,g.jsxs)(z,{positive:r,children:[(0,g.jsx)(w,{children:i}),(0,g.jsx)(A,{children:n}),a&&!t?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{w:"80px",style:{height:28}}),(0,g.jsx)(k,{w:"60px"})]}):t?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{children:(0,m.Sc)(t.price,t.price>1e3?0:2)}),(0,g.jsxs)(j,{pct:t.changePct,children:[(0,g.jsx)(G,{pct:t.changePct}),(0,m.pT)(t.changePct),(0,g.jsxs)("span",{style:{fontWeight:400,fontSize:12},children:["(",t.change>=0?"+":"",(0,m.Sc)(t.change,2),")"]})]}),(0,g.jsxs)($,{children:["H ",(0,m.Sc)(t.high,t.high>1e3?0:2)," · L ",(0,m.Sc)(t.low,t.low>1e3?0:2)," · Prev ",(0,m.Sc)(t.prevClose,t.prevClose>1e3?0:2)]})]}):(0,g.jsx)($,{children:"No data"})]},o)})}),(0,g.jsx)(S,{children:"By Region"}),(0,g.jsx)(M,{children:m.ij.map(o=>(0,g.jsxs)(T,{children:[(0,g.jsxs)(P,{color:o.color,children:[o.emoji," ",o.name]}),o.indices.slice(0,4).map(o=>{const n=e.get(o.symbol);return(0,g.jsxs)(B,{children:[(0,g.jsxs)(E,{children:[(0,g.jsx)("span",{children:o.flag}),o.name]}),a&&!n?(0,g.jsx)(k,{w:"50px"}):n?(0,g.jsx)(C,{pct:n.changePct,children:(0,m.pT)(n.changePct)}):(0,g.jsx)("span",{style:{color:c.w4.colors.mainTextMuted,fontSize:11},children:"—"})]},o.symbol)})]},o.id))}),(0,g.jsx)(S,{children:"Understanding Markets"}),(0,g.jsxs)(L,{children:[(0,g.jsxs)(R,{children:[(0,g.jsxs)(D,{children:[(0,g.jsx)(t.A,{size:13,color:"#58a6ff"})," What is a stock index?"]}),(0,g.jsx)(F,{children:"An index tracks the combined performance of a group of stocks. The S&P 500, for example, follows 500 of the largest US companies and is widely used as a benchmark for the overall US stock market."})]}),(0,g.jsxs)(R,{children:[(0,g.jsxs)(D,{children:[(0,g.jsx)(d.A,{size:13,color:"#3fb950"})," Green day vs Red day"]}),(0,g.jsx)(F,{children:"A green day means the index closed higher than it opened — investors are bullish. A red day means it closed lower — sentiment is bearish. The % change shows how much the index moved from the previous close."})]}),(0,g.jsxs)(R,{children:[(0,g.jsxs)(D,{children:[(0,g.jsx)(t.A,{size:13,color:"#e3b341"})," Market hours"]}),(0,g.jsx)(F,{children:"US markets (NYSE, NASDAQ) trade Mon–Fri 9:30 am–4 pm ET. European markets open at ~8 am CET, Asian markets at ~9 am local time. Pre-market and after-hours trading also occur with lower volume."})]})]})]})}},7074(e,a,o){o.d(a,{A:()=>P}),o(7359);var n=o(3233),i=o(7207),t=o(4621),r=o(9121),l=o(4368),s=o(4079),d=o(8447),c=o(5723);const m=i.keyframes`0%,100%{opacity:1}50%{opacity:.4}`,g=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
`,u=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,p=n.default.h2`
  font-size: ${s.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,f=n.default.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,h=n.default.thead`
  border-bottom: 1px solid ${s.w4.colors.border};
`,y=n.default.th`
  padding: 8px ${s.w4.spacing.sm};
  font-size: 10px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-align: ${({align:e})=>e??"left"};
`,x=n.default.tr`
  border-bottom: 1px solid ${s.w4.colors.border};
  transition: background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover { background: ${s.w4.colors.mainBg}; }
`,b=n.default.td`
  padding: 10px ${s.w4.spacing.sm};
  color: ${s.w4.colors.mainText};
  text-align: ${({align:e})=>e??"left"};
`,z=n.default.div`
  font-weight: 500;
  color: ${s.w4.colors.mainText};
`,w=n.default.div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 2px;
`,A=n.default.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-weight: 600;
  font-size: 12px;
  color: ${({pct:e})=>(0,d.Nf)(e)};
  background: ${({pct:e})=>e>0?"rgba(63,185,80,0.1)":e<0?"rgba(248,81,73,0.1)":"transparent"};
  padding: 2px 7px;
  border-radius: 999px;
`,v=n.default.div`
  position: relative;
  width: 90px;
  height: 4px;
  background: ${s.w4.colors.border};
  border-radius: 2px;
  overflow: visible;
`,j=n.default.div`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  height: 100%;
  background: ${s.w4.colors.border};
  border-radius: 2px;
`,$=n.default.div`
  position: absolute;
  top: 50%;
  left: ${({pos:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,k=n.default.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  margin-top: 2px;
`,S=n.default.div`
  height: 14px;
  width: ${({w:e})=>e??"60px"};
  background: ${s.w4.colors.border};
  border-radius: 3px;
  animation: ${m} 1.5s ease-in-out infinite;
  display: inline-block;
`,M=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 110px;
`;function T({q:e}){const a=e.week52High-e.week52Low;if(0===a)return null;const o=(e.low-e.week52Low)/a*100,n=(e.high-e.week52Low)/a*100,i=(e.price-e.week52Low)/a*100;return(0,c.jsxs)(M,{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)(j,{left:o,width:n-o}),(0,c.jsx)($,{pos:i,color:(0,d.Nf)(e.changePct)})]}),(0,c.jsxs)(k,{children:[(0,c.jsx)("span",{children:(0,d.Sc)(e.week52Low,e.week52Low>1e3?0:2)}),(0,c.jsx)("span",{children:"52w"}),(0,c.jsx)("span",{children:(0,d.Sc)(e.week52High,e.week52High>1e3?0:2)})]})]})}function P({region:e,quotes:a,loading:o}){return(0,c.jsxs)(g,{children:[(0,c.jsx)(u,{children:(0,c.jsxs)(p,{children:[(0,c.jsx)("span",{style:{fontSize:22},children:e.emoji}),e.name]})}),(0,c.jsxs)(f,{children:[(0,c.jsx)(h,{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)(y,{children:"Index"}),(0,c.jsx)(y,{align:"right",children:"Price"}),(0,c.jsx)(y,{align:"right",children:"Day Change"}),(0,c.jsx)(y,{align:"right",children:"Open"}),(0,c.jsx)(y,{align:"right",children:"High / Low"}),(0,c.jsx)(y,{align:"center",children:"52-Week Range"})]})}),(0,c.jsx)("tbody",{children:e.indices.map(e=>{const n=a.get(e.symbol);return(0,c.jsxs)(x,{children:[(0,c.jsxs)(b,{children:[(0,c.jsxs)(z,{children:[e.flag," ",e.name]}),(0,c.jsx)(w,{children:e.description})]}),(0,c.jsx)(b,{align:"right",children:o&&!n?(0,c.jsx)(S,{}):n?(0,c.jsx)("span",{style:{fontFamily:s.w4.typography.fontFamilyMono,fontWeight:600},children:(0,d.Sc)(n.price,n.price>1e3?0:2)}):"—"}),(0,c.jsx)(b,{align:"right",children:o&&!n?(0,c.jsx)(S,{w:"50px"}):n?(0,c.jsxs)(A,{pct:n.changePct,children:[n.changePct>0?(0,c.jsx)(l.A,{size:11}):n.changePct<0?(0,c.jsx)(r.A,{size:11}):(0,c.jsx)(t.A,{size:10}),(0,d.pT)(n.changePct)]}):"—"}),(0,c.jsx)(b,{align:"right",children:n?(0,c.jsx)("span",{style:{fontFamily:s.w4.typography.fontFamilyMono,fontSize:12,color:s.w4.colors.mainTextMuted},children:(0,d.Sc)(n.open,n.open>1e3?0:2)}):"—"}),(0,c.jsx)(b,{align:"right",children:n?(0,c.jsxs)("div",{style:{fontFamily:s.w4.typography.fontFamilyMono,fontSize:11},children:[(0,c.jsxs)("div",{style:{color:"#3fb950"},children:["H ",(0,d.Sc)(n.high,n.high>1e3?0:2)]}),(0,c.jsxs)("div",{style:{color:"#f85149"},children:["L ",(0,d.Sc)(n.low,n.low>1e3?0:2)]})]}):"—"}),(0,c.jsx)(b,{align:"center",children:n?(0,c.jsx)(T,{q:n}):"—"})]},e.symbol)})})]})]})}},5778(e,a,o){o.d(a,{A:()=>k}),o(7359);var n=o(3233),i=o(7207),t=o(8207),r=o(9121),l=o(4368),s=o(4079),d=o(8447),c=o(5723);const m=i.keyframes`0%,100%{opacity:1}50%{opacity:.4}`,g=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
`,u=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.sm};
`,p=n.default.h2`
  font-size: ${s.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,f=n.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,h=n.default.div`
  background: ${({bg:e})=>e};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: default;
  transition: filter 0.15s;
  min-height: 90px;

  &:hover {
    filter: brightness(1.15);
  }
`,y=n.default.div`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
`,x=n.default.div`
  font-size: 10px;
  color: rgba(255,255,255,0.5);
  line-height: 1.3;
  flex: 1;
`,b=n.default.div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 18px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  display: flex;
  align-items: center;
  gap: 4px;
`,z=n.default.div`
  background: ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  min-height: 90px;
  animation: ${m} 1.5s ease-in-out infinite;
`,w=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
`,A=n.default.div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #7f1d1d, #dc2626, #21262d, #16a34a, #166534);
`,v=n.default.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 2px;
`,j=n.default.div`
  display: flex;
  gap: ${s.w4.spacing.md};
  flex-wrap: wrap;
`,$=n.default.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({positive:e})=>e?"rgba(63,185,80,0.1)":"rgba(248,81,73,0.1)"};
  color: ${({positive:e})=>e?"#3fb950":"#f85149"};
  border: 1px solid ${({positive:e})=>e?"rgba(63,185,80,0.25)":"rgba(248,81,73,0.25)"};
`;function k({quotes:e,loading:a}){const o=d.kJ.map(a=>({...a,quote:e.get(a.symbol)})),n=o.filter(e=>e.quote),i=n.filter(e=>(e.quote?.changePct??0)>0).length,s=n.filter(e=>(e.quote?.changePct??0)<0).length,m=n.reduce((e,a)=>(e.quote?.changePct??-1/0)>(a.quote?.changePct??-1/0)?e:a,n[0]),k=n.reduce((e,a)=>(e.quote?.changePct??1/0)<(a.quote?.changePct??1/0)?e:a,n[0]);return(0,c.jsxs)(g,{children:[(0,c.jsxs)(u,{children:[(0,c.jsxs)(p,{children:[(0,c.jsx)(t.A,{size:18,color:"#bc8cff"}),"S&P 500 Sectors"]}),n.length>0&&(0,c.jsxs)(j,{children:[(0,c.jsxs)($,{positive:!0,children:[(0,c.jsx)(l.A,{size:12}),i," advancing"]}),(0,c.jsxs)($,{positive:!1,children:[(0,c.jsx)(r.A,{size:12}),s," declining"]}),m?.quote&&(0,c.jsxs)($,{positive:!0,children:["Best: ",m.name," ",(0,d.pT)(m.quote.changePct)]}),k?.quote&&(0,c.jsxs)($,{positive:!1,children:["Worst: ",k.name," ",(0,d.pT)(k.quote.changePct)]})]})]}),(0,c.jsx)(f,{children:a&&0===e.size?d.kJ.map(e=>(0,c.jsx)(z,{},e.symbol)):o.map(({symbol:e,name:a,description:o,quote:n})=>{const i=n?.changePct??0;return(0,c.jsxs)(h,{bg:(0,d.yv)(i),children:[(0,c.jsx)(y,{children:a}),(0,c.jsx)(x,{children:o}),(0,c.jsxs)(b,{children:[i>0?(0,c.jsx)(l.A,{size:14}):i<0?(0,c.jsx)(r.A,{size:14}):null,n?(0,d.pT)(i):"—"]})]},e)})}),(0,c.jsxs)("div",{children:[(0,c.jsxs)(w,{children:[(0,c.jsx)("span",{children:"−4%"}),(0,c.jsx)(A,{}),(0,c.jsx)("span",{children:"+4%"})]}),(0,c.jsxs)(v,{children:[(0,c.jsx)("span",{children:"Bearish"}),(0,c.jsx)("span",{children:"Neutral"}),(0,c.jsx)("span",{children:"Bullish"})]})]})]})}},8447(e,a,o){o.d(a,{Nf:()=>g,Rq:()=>c,Sc:()=>p,W6:()=>m,ij:()=>i,kJ:()=>r,pT:()=>f,rb:()=>t,yv:()=>u,zR:()=>l});var n=o(7359);const i=[{id:"americas",name:"Americas",emoji:"🌎",color:"#58a6ff",indices:[{symbol:"AAPL",name:"Apple",flag:"🇺🇸",description:"Consumer electronics & software giant"},{symbol:"MSFT",name:"Microsoft",flag:"🇺🇸",description:"Cloud, enterprise software & AI leader"},{symbol:"AMZN",name:"Amazon",flag:"🇺🇸",description:"E-commerce and cloud computing (AWS)"},{symbol:"NVDA",name:"NVIDIA",flag:"🇺🇸",description:"GPU & AI chip market leader"},{symbol:"META",name:"Meta",flag:"🇺🇸",description:"Social media and metaverse platforms"},{symbol:"TSLA",name:"Tesla",flag:"🇺🇸",description:"Electric vehicles and clean energy"}]},{id:"europe",name:"Europe",emoji:"🌍",color:"#3fb950",indices:[{symbol:"ASML",name:"ASML",flag:"🇳🇱",description:"Dutch chipmaker — world monopoly on EUV lithography"},{symbol:"SAP",name:"SAP",flag:"🇩🇪",description:"German enterprise software leader"},{symbol:"NVO",name:"Novo Nordisk",flag:"🇩🇰",description:"Danish pharma — Ozempic/GLP-1 drugs"},{symbol:"SHEL",name:"Shell",flag:"🇬🇧",description:"UK-based global oil & gas major"},{symbol:"HSBC",name:"HSBC",flag:"🇬🇧",description:"One of the world's largest banks"},{symbol:"UL",name:"Unilever",flag:"🇬🇧",description:"Global consumer goods conglomerate"}]},{id:"asia",name:"Asia Pacific",emoji:"🌏",color:"#e3b341",indices:[{symbol:"TSM",name:"TSMC",flag:"🇹🇼",description:"World's largest semiconductor foundry"},{symbol:"BABA",name:"Alibaba",flag:"🇨🇳",description:"China's largest e-commerce platform"},{symbol:"TM",name:"Toyota",flag:"🇯🇵",description:"World's largest automaker"},{symbol:"SONY",name:"Sony",flag:"🇯🇵",description:"Electronics, gaming & entertainment"},{symbol:"SE",name:"Sea Limited",flag:"🇸🇬",description:"Southeast Asia's leading tech company"},{symbol:"BIDU",name:"Baidu",flag:"🇨🇳",description:"China's leading search & AI company"}]}],t=i.flatMap(e=>e.indices.map(e=>e.symbol)),r=[{symbol:"NVDA",name:"Technology",description:"NVIDIA — AI & GPU leader"},{symbol:"JPM",name:"Financials",description:"JPMorgan — largest US bank"},{symbol:"JNJ",name:"Healthcare",description:"Johnson & Johnson — pharma giant"},{symbol:"XOM",name:"Energy",description:"ExxonMobil — oil & gas major"},{symbol:"GOOGL",name:"Communication",description:"Alphabet — search & ads"},{symbol:"CAT",name:"Industrials",description:"Caterpillar — heavy machinery"},{symbol:"AMZN",name:"Consumer Disc.",description:"Amazon — retail & marketplace"},{symbol:"PG",name:"Consumer Staples",description:"Procter & Gamble — household goods"},{symbol:"NEE",name:"Utilities",description:"NextEra Energy — renewable power"},{symbol:"PLD",name:"Real Estate",description:"Prologis — industrial REITs"},{symbol:"LIN",name:"Materials",description:"Linde — industrial gases & chemicals"}],l=r.map(e=>e.symbol),s="https://financialmodelingprep.com/stable";async function d(e){try{const a=await fetch(`${s}/quote?symbol=${encodeURIComponent(e)}&apikey=`);if(!a.ok)return null;const o=await a.json(),n=Array.isArray(o)?o[0]:null;if(!n)return null;const i=n.price??0,t=n.previousClose??i;return{symbol:e,shortName:n.name??e,price:i,change:n.change??i-t,changePct:n.changesPercentage??0,open:n.open??i,high:n.dayHigh??i,low:n.dayLow??i,prevClose:t,week52High:n.yearHigh??i,week52Low:n.yearLow??i,marketState:"REGULAR"}}catch{return null}}function c(e,a=3e4){const[o,i]=(0,n.useState)(new Map),[t,r]=(0,n.useState)(!0),[l,s]=(0,n.useState)(null),c=(0,n.useCallback)(async()=>{try{const a=await async function(e){const a=new Map;for(let o=0;o<e.length;o++){o>0&&await new Promise(e=>setTimeout(e,300));const n=await d(e[o]);n&&a.set(e[o],n)}return a}(e);i(a),s(null)}catch(e){s(e instanceof Error?e.message:"Fetch failed")}finally{r(!1)}},[e.join(",")]);return(0,n.useEffect)(()=>{c();const e=setInterval(c,a);return()=>clearInterval(e)},[c,a]),{quotes:o,loading:t,error:l}}function m(e,a){const[o,i]=(0,n.useState)([]),[t,r]=(0,n.useState)(!0),[l,d]=(0,n.useState)(null),c=(0,n.useCallback)(async()=>{try{const o=await async function(e,a){const o=function(e){const a=new Date,o=new Date(a);return"5d"===e&&o.setDate(a.getDate()-7),"1mo"===e&&o.setMonth(a.getMonth()-1),"3mo"===e&&o.setMonth(a.getMonth()-3),o.toISOString().slice(0,10)}(a),n=(new Date).toISOString().slice(0,10),i=await fetch(`${s}/historical-price-eod/full?symbol=${encodeURIComponent(e)}&from=${o}&to=${n}&apikey=`);if(!i.ok)throw new Error(`HTTP ${i.status}`);const t=await i.json();return(t?.historical??[]).slice().reverse().map((e,a,o)=>{const n=e.close??0,i=a>0?o[a-1].close??n:n;return{date:e.date,open:e.open??n,high:e.high??n,low:e.low??n,close:n,changePct:e.changePercent??(0!==i?(n-i)/i*100:0)}})}(e,a);i(o),d(null)}catch(e){d(e instanceof Error?e.message:"Fetch failed")}finally{r(!1)}},[e,a]);return(0,n.useEffect)(()=>{c()},[c]),{bars:o,loading:t,error:l}}function g(e){return e>0?"#3fb950":e<0?"#f85149":"#8b949e"}function u(e){const a=Math.max(-4,Math.min(4,e));if(0===a)return"#21262d";if(a>0){const e=a/4,o=Math.round(80+105*e);return`rgb(${Math.round(20+10*e)},${o},${Math.round(30+10*e)})`}const o=-a/4;return`rgb(${Math.round(100+148*o)},${Math.round(20+10*o)},${Math.round(20+10*o)})`}function p(e,a=2){return e.toLocaleString("en-US",{minimumFractionDigits:a,maximumFractionDigits:a})}function f(e){return`${e>=0?"+":""}${e.toFixed(2)}%`}}}]);
//# sourceMappingURL=136.065d21f1768c67875315.js.map