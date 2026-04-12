"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[376],{4914(e,a,n){n.d(a,{FlyoutPanel:()=>y});var o=n(7359),t=n(3233),i=n(7207),r=n(255),l=n(217),s=n(5959),c=n(5185),d=n(5723);const m=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=t.default.div`
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
`,f=t.default.div`
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
`,g=t.default.button`
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
`;function p({iconKey:e}){const a=e?c.t[e]??r.A:r.A;return(0,d.jsx)(a,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:a,onSelect:n}){return(0,d.jsx)(d.Fragment,{children:e.map(e=>e.children?(0,d.jsx)(o.Fragment,{children:(0,d.jsx)(h,{entries:e.children,activeId:a,onSelect:n})},e.id):(0,d.jsxs)(g,{active:a===e.id,onClick:()=>n(e),children:[(0,d.jsx)(p,{iconKey:e.icon}),e.name]},e.id))})}function y({activeId:e}){const{flyout:a,scheduleFlyoutClose:n,cancelFlyoutClose:o}=(0,s.c)();if(!a)return null;const t=a.entry.icon?c.t[a.entry.icon]??r.A:r.A;return(0,d.jsxs)(u,{anchorY:a.anchorY,onMouseEnter:o,onMouseLeave:n,children:[(0,d.jsxs)(f,{children:[(0,d.jsx)(t,{size:13,strokeWidth:2}),a.entry.name]}),(0,d.jsx)(h,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),n()}})]})}},5959(e,a,n){n.d(a,{I:()=>t,c:()=>i});var o=n(7359);const t=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,o.useContext)(t)},5185(e,a,n){n.d(a,{t:()=>O});var o=n(9510),t=n(9038),i=n(8207),r=n(6896),l=n(7901),s=n(9848),c=n(2164),d=n(3775),m=n(3539),u=n(1783),f=n(1837),g=n(2314),p=n(5751),h=n(255),y=n(9633),x=n(2946),b=n(822),z=n(6720),w=n(3317),v=n(2709),A=n(3517),M=n(7032),$=n(6949),k=n(8218),j=n(6829),S=n(5553),T=n(9591),C=n(2820),B=n(4621),E=n(6673),L=n(9033),F=n(1365),P=n(5912),R=n(8641),I=n(3249),D=n(1821),_=n(9161),N=n(1849),G=n(7747),K=n(2932),H=n(4525),V=n(7230);const O={activity:r.A,"bar-chart-2":o.A,book:s.A,"book-open":l.A,calendar:d.A,clock:u.A,"circle-dot":m.A,feather:g.A,"file-text":p.A,globe:z.A,hash:w.A,heart:v.A,landmark:A.A,layers:i.A,leaf:$.A,map:T.A,package:E.A,compass:f.A,"git-branch":x.A,github:b.A,minus:B.A,terminal:I.A,thermometer:D.A,users:N.A,wind:G.A,"pie-chart":t.A,plus:F.A,slash:P.A,star:R.A,zap:V.A,bot:c.A,lightbulb:k.A,"message-square":C.A,wrench:K.A,x:H.A,"layout-grid":M.A,list:j.A,file:h.A,folder:y.A,"map-pin":S.A,"pen-tool":L.A,type:_.A}},4079(e,a,n){n.d(a,{rh:()=>G,UO:()=>ve,PE:()=>A,CD:()=>D,MJ:()=>le,qs:()=>U,$L:()=>H,w3:()=>K,u6:()=>V,KL:()=>q,w4:()=>o.w,mZ:()=>Q});var o=n(217),t=n(7359),i=n(3233),r=n(5723);i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${o.w.spacing.sm};
  background: ${o.w.colors.surface};
  border: 1px solid ${o.w.colors.border};
  border-radius: ${o.w.borderRadius.md};
  color: ${o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,i.default.div`
  position: relative;
`;var l=n(3661),s=n(5959);const c="260px",d="56px",m=i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${o.w.colors.sidebarBg};
  border-bottom: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,u=i.default.div`
  width: ${d};
  min-width: ${d};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
`,f=i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${o.w.borderRadius.md};
  cursor: pointer;
  color: ${o.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${o.w.colors.sidebarHover};
    color: ${o.w.colors.sidebarText};
  }
`,g=i.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${o.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${o.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${o.w.colors.accent}; }
`,p=i.default.div`
  font-size: ${o.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  padding-left: ${o.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${o.w.spacing.sm};
    color: ${o.w.colors.border};
  }
`,h=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${o.w.spacing.sm};
  padding: 0 ${o.w.spacing.lg};
`,y=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,x=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${o.w.colors.mainBg};
  font-family: ${o.w.typography.fontFamily};
  color: ${o.w.colors.mainText};
  overflow: hidden;
`,b=i.default.aside`
  width: ${({collapsed:e})=>e?d:c};
  min-width: ${({collapsed:e})=>e?d:c};
  background: ${o.w.colors.sidebarBg};
  border-right: 1px solid ${o.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${o.w.breakpoints.md}) {
    display: none;
  }
`,z=i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,w=i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,v="atlantis:sidebar-collapsed";function A({sidebar:e,children:a,topBarRight:o,title:i="Atlantis",activeId:c=null}){const[d,A]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(v)}catch{return!1}}),[M,$]=(0,t.useState)(null),k=(0,t.useRef)(),j=()=>A(e=>{const a=!e;try{localStorage.setItem(v,String(a))}catch{}return a}),S=t.useMemo(()=>t.lazy(()=>Promise.resolve().then(n.bind(n,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(s.I.Provider,{value:{collapsed:d,toggle:j,flyout:M,openFlyout:(e,a,n)=>{clearTimeout(k.current),$({entry:e,anchorY:a,onSelect:n})},scheduleFlyoutClose:()=>{k.current=setTimeout(()=>$(null),160)},cancelFlyoutClose:()=>clearTimeout(k.current)},children:(0,r.jsxs)(x,{children:[(0,r.jsxs)(m,{children:[e&&(0,r.jsx)(u,{children:(0,r.jsx)(f,{onClick:j,title:d?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(l.A,{size:17})})}),(0,r.jsxs)(g,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,r.jsx)("span",{children:"antis"})]}),i&&(0,r.jsx)(p,{children:i}),o&&(0,r.jsx)(h,{children:o})]}),(0,r.jsxs)(y,{children:[null!=e&&(0,r.jsx)(b,{collapsed:d,children:(0,r.jsx)(z,{children:e})}),(0,r.jsx)(w,{children:a})]}),M&&(0,r.jsx)(t.Suspense,{fallback:null,children:(0,r.jsx)(S,{activeId:c})})]})})}var M=n(255),$=n(9753),k=n(5185);const j=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,S=i.default.div`
  overflow: hidden;
`,T=i.default.div`
  padding-left: ${o.w.spacing.md};
`,C=i.default.div`
  display: flex;
  flex-direction: column;
`,B=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${o.w.spacing.sm} ${o.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":o.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${o.w.colors.sidebarTextMuted};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${o.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${o.w.colors.sidebarText};
    background: ${o.w.colors.sidebarHover};
  }
`,E=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,L=i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,F=i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${o.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,P=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${o.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?o.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?o.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?o.w.colors.sidebarActive:o.w.colors.sidebarText};
  font-size: ${o.w.typography.fontSizeBase};
  font-family: ${o.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${o.w.borderRadius.sm} ${o.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`;function R({iconKey:e,size:a=16}){if(e&&!(e in k.t))return(0,r.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});const n=e?k.t[e]??M.A:M.A;return(0,r.jsx)(n,{size:a,strokeWidth:1.75})}function I({entry:e,activeId:a,onSelect:n}){const[o,i]=(0,t.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:c,scheduleFlyoutClose:d,cancelFlyoutClose:m}=(0,s.c)();return e.children&&e.children.length>0?(0,r.jsxs)(C,{children:[(0,r.jsxs)(B,{collapsed:l,onClick:()=>{l||i(e=>!e)},onMouseEnter:l?a=>{const o=a.currentTarget.getBoundingClientRect();c(e,o.top,n)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsxs)(E,{collapsed:l,children:[(0,r.jsx)(R,{iconKey:e.icon,size:16}),(0,r.jsx)(L,{collapsed:l,children:e.name})]}),(0,r.jsx)(F,{open:o,collapsed:l,children:(0,r.jsx)($.A,{size:13})})]}),(0,r.jsx)(j,{open:o&&!l,children:(0,r.jsx)(S,{children:(0,r.jsx)(T,{children:e.children.map(e=>(0,r.jsx)(I,{entry:e,activeId:a,onSelect:n},e.id))})})})]}):(0,r.jsxs)(P,{active:a===e.id,collapsed:l,onClick:()=>n(e),onMouseEnter:l?a=>{const o=a.currentTarget.getBoundingClientRect();c({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},o.top,n)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsx)(R,{iconKey:e.icon,size:15}),(0,r.jsx)(L,{collapsed:l,children:e.name})]})}function D({entries:e,activeId:a,onSelect:n}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(I,{entry:e,activeId:a,onSelect:n},e.id))})}const _=n(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${_} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,i.default.span`
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
`,n(4914);const N=[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}],G=N.flatMap(e=>e.places);function K(e,a){return e.toLocaleTimeString("en-GB",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}function H(e,a){return e.toLocaleDateString("en-GB",{timeZone:a,weekday:"short",day:"numeric",month:"short"})}function V(e){return e.toLocaleTimeString("en-GB",{timeZone:"UTC",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}const O={AD:{name:"Andorra",flag:"🇦🇩"},AE:{name:"UAE",flag:"🇦🇪"},AF:{name:"Afghanistan",flag:"🇦🇫"},AG:{name:"Antigua & Barbuda",flag:"🇦🇬"},AL:{name:"Albania",flag:"🇦🇱"},AM:{name:"Armenia",flag:"🇦🇲"},AO:{name:"Angola",flag:"🇦🇴"},AR:{name:"Argentina",flag:"🇦🇷"},AT:{name:"Austria",flag:"🇦🇹"},AU:{name:"Australia",flag:"🇦🇺"},AZ:{name:"Azerbaijan",flag:"🇦🇿"},BA:{name:"Bosnia & Herzegovina",flag:"🇧🇦"},BB:{name:"Barbados",flag:"🇧🇧"},BD:{name:"Bangladesh",flag:"🇧🇩"},BE:{name:"Belgium",flag:"🇧🇪"},BF:{name:"Burkina Faso",flag:"🇧🇫"},BG:{name:"Bulgaria",flag:"🇧🇬"},BH:{name:"Bahrain",flag:"🇧🇭"},BI:{name:"Burundi",flag:"🇧🇮"},BJ:{name:"Benin",flag:"🇧🇯"},BN:{name:"Brunei",flag:"🇧🇳"},BO:{name:"Bolivia",flag:"🇧🇴"},BR:{name:"Brazil",flag:"🇧🇷"},BS:{name:"Bahamas",flag:"🇧🇸"},BW:{name:"Botswana",flag:"🇧🇼"},BY:{name:"Belarus",flag:"🇧🇾"},BZ:{name:"Belize",flag:"🇧🇿"},CA:{name:"Canada",flag:"🇨🇦"},CD:{name:"DR Congo",flag:"🇨🇩"},CF:{name:"Central African Rep.",flag:"🇨🇫"},CG:{name:"Republic of Congo",flag:"🇨🇬"},CH:{name:"Switzerland",flag:"🇨🇭"},CI:{name:"Côte d'Ivoire",flag:"🇨🇮"},CL:{name:"Chile",flag:"🇨🇱"},CM:{name:"Cameroon",flag:"🇨🇲"},CN:{name:"China",flag:"🇨🇳"},CO:{name:"Colombia",flag:"🇨🇴"},CR:{name:"Costa Rica",flag:"🇨🇷"},CU:{name:"Cuba",flag:"🇨🇺"},CV:{name:"Cape Verde",flag:"🇨🇻"},CY:{name:"Cyprus",flag:"🇨🇾"},CZ:{name:"Czech Republic",flag:"🇨🇿"},DE:{name:"Germany",flag:"🇩🇪"},DJ:{name:"Djibouti",flag:"🇩🇯"},DK:{name:"Denmark",flag:"🇩🇰"},DM:{name:"Dominica",flag:"🇩🇲"},DO:{name:"Dominican Republic",flag:"🇩🇴"},DZ:{name:"Algeria",flag:"🇩🇿"},EC:{name:"Ecuador",flag:"🇪🇨"},EE:{name:"Estonia",flag:"🇪🇪"},EG:{name:"Egypt",flag:"🇪🇬"},ER:{name:"Eritrea",flag:"🇪🇷"},ES:{name:"Spain",flag:"🇪🇸"},ET:{name:"Ethiopia",flag:"🇪🇹"},FI:{name:"Finland",flag:"🇫🇮"},FJ:{name:"Fiji",flag:"🇫🇯"},FM:{name:"Micronesia",flag:"🇫🇲"},FR:{name:"France",flag:"🇫🇷"},GA:{name:"Gabon",flag:"🇬🇦"},GB:{name:"United Kingdom",flag:"🇬🇧"},GD:{name:"Grenada",flag:"🇬🇩"},GE:{name:"Georgia",flag:"🇬🇪"},GH:{name:"Ghana",flag:"🇬🇭"},GM:{name:"Gambia",flag:"🇬🇲"},GN:{name:"Guinea",flag:"🇬🇳"},GQ:{name:"Equatorial Guinea",flag:"🇬🇶"},GR:{name:"Greece",flag:"🇬🇷"},GT:{name:"Guatemala",flag:"🇬🇹"},GW:{name:"Guinea-Bissau",flag:"🇬🇼"},GY:{name:"Guyana",flag:"🇬🇾"},HN:{name:"Honduras",flag:"🇭🇳"},HR:{name:"Croatia",flag:"🇭🇷"},HT:{name:"Haiti",flag:"🇭🇹"},HU:{name:"Hungary",flag:"🇭🇺"},ID:{name:"Indonesia",flag:"🇮🇩"},IE:{name:"Ireland",flag:"🇮🇪"},IL:{name:"Israel",flag:"🇮🇱"},IN:{name:"India",flag:"🇮🇳"},IQ:{name:"Iraq",flag:"🇮🇶"},IR:{name:"Iran",flag:"🇮🇷"},IS:{name:"Iceland",flag:"🇮🇸"},IT:{name:"Italy",flag:"🇮🇹"},JM:{name:"Jamaica",flag:"🇯🇲"},JO:{name:"Jordan",flag:"🇯🇴"},JP:{name:"Japan",flag:"🇯🇵"},KE:{name:"Kenya",flag:"🇰🇪"},KG:{name:"Kyrgyzstan",flag:"🇰🇬"},KH:{name:"Cambodia",flag:"🇰🇭"},KI:{name:"Kiribati",flag:"🇰🇮"},KM:{name:"Comoros",flag:"🇰🇲"},KN:{name:"Saint Kitts & Nevis",flag:"🇰🇳"},KP:{name:"North Korea",flag:"🇰🇵"},KR:{name:"South Korea",flag:"🇰🇷"},KW:{name:"Kuwait",flag:"🇰🇼"},KZ:{name:"Kazakhstan",flag:"🇰🇿"},LA:{name:"Laos",flag:"🇱🇦"},LB:{name:"Lebanon",flag:"🇱🇧"},LC:{name:"Saint Lucia",flag:"🇱🇨"},LI:{name:"Liechtenstein",flag:"🇱🇮"},LK:{name:"Sri Lanka",flag:"🇱🇰"},LR:{name:"Liberia",flag:"🇱🇷"},LS:{name:"Lesotho",flag:"🇱🇸"},LT:{name:"Lithuania",flag:"🇱🇹"},LU:{name:"Luxembourg",flag:"🇱🇺"},LV:{name:"Latvia",flag:"🇱🇻"},LY:{name:"Libya",flag:"🇱🇾"},MA:{name:"Morocco",flag:"🇲🇦"},MC:{name:"Monaco",flag:"🇲🇨"},MD:{name:"Moldova",flag:"🇲🇩"},ME:{name:"Montenegro",flag:"🇲🇪"},MG:{name:"Madagascar",flag:"🇲🇬"},MH:{name:"Marshall Islands",flag:"🇲🇭"},MK:{name:"North Macedonia",flag:"🇲🇰"},ML:{name:"Mali",flag:"🇲🇱"},MM:{name:"Myanmar",flag:"🇲🇲"},MN:{name:"Mongolia",flag:"🇲🇳"},MR:{name:"Mauritania",flag:"🇲🇷"},MT:{name:"Malta",flag:"🇲🇹"},MU:{name:"Mauritius",flag:"🇲🇺"},MV:{name:"Maldives",flag:"🇲🇻"},MW:{name:"Malawi",flag:"🇲🇼"},MX:{name:"Mexico",flag:"🇲🇽"},MY:{name:"Malaysia",flag:"🇲🇾"},MZ:{name:"Mozambique",flag:"🇲🇿"},NA:{name:"Namibia",flag:"🇳🇦"},NE:{name:"Niger",flag:"🇳🇪"},NG:{name:"Nigeria",flag:"🇳🇬"},NI:{name:"Nicaragua",flag:"🇳🇮"},NL:{name:"Netherlands",flag:"🇳🇱"},NO:{name:"Norway",flag:"🇳🇴"},NP:{name:"Nepal",flag:"🇳🇵"},NR:{name:"Nauru",flag:"🇳🇷"},NZ:{name:"New Zealand",flag:"🇳🇿"},OM:{name:"Oman",flag:"🇴🇲"},PA:{name:"Panama",flag:"🇵🇦"},PE:{name:"Peru",flag:"🇵🇪"},PG:{name:"Papua New Guinea",flag:"🇵🇬"},PH:{name:"Philippines",flag:"🇵🇭"},PK:{name:"Pakistan",flag:"🇵🇰"},PL:{name:"Poland",flag:"🇵🇱"},PS:{name:"Palestine",flag:"🇵🇸"},PT:{name:"Portugal",flag:"🇵🇹"},PW:{name:"Palau",flag:"🇵🇼"},PY:{name:"Paraguay",flag:"🇵🇾"},QA:{name:"Qatar",flag:"🇶🇦"},RO:{name:"Romania",flag:"🇷🇴"},RS:{name:"Serbia",flag:"🇷🇸"},RU:{name:"Russia",flag:"🇷🇺"},RW:{name:"Rwanda",flag:"🇷🇼"},SA:{name:"Saudi Arabia",flag:"🇸🇦"},SB:{name:"Solomon Islands",flag:"🇸🇧"},SC:{name:"Seychelles",flag:"🇸🇨"},SD:{name:"Sudan",flag:"🇸🇩"},SE:{name:"Sweden",flag:"🇸🇪"},SG:{name:"Singapore",flag:"🇸🇬"},SI:{name:"Slovenia",flag:"🇸🇮"},SK:{name:"Slovakia",flag:"🇸🇰"},SL:{name:"Sierra Leone",flag:"🇸🇱"},SM:{name:"San Marino",flag:"🇸🇲"},SN:{name:"Senegal",flag:"🇸🇳"},SO:{name:"Somalia",flag:"🇸🇴"},SR:{name:"Suriname",flag:"🇸🇷"},SS:{name:"South Sudan",flag:"🇸🇸"},ST:{name:"São Tomé & Príncipe",flag:"🇸🇹"},SV:{name:"El Salvador",flag:"🇸🇻"},SY:{name:"Syria",flag:"🇸🇾"},SZ:{name:"Eswatini",flag:"🇸🇿"},TD:{name:"Chad",flag:"🇹🇩"},TG:{name:"Togo",flag:"🇹🇬"},TH:{name:"Thailand",flag:"🇹🇭"},TJ:{name:"Tajikistan",flag:"🇹🇯"},TL:{name:"Timor-Leste",flag:"🇹🇱"},TM:{name:"Turkmenistan",flag:"🇹🇲"},TN:{name:"Tunisia",flag:"🇹🇳"},TO:{name:"Tonga",flag:"🇹🇴"},TR:{name:"Turkey",flag:"🇹🇷"},TT:{name:"Trinidad & Tobago",flag:"🇹🇹"},TV:{name:"Tuvalu",flag:"🇹🇻"},TZ:{name:"Tanzania",flag:"🇹🇿"},UA:{name:"Ukraine",flag:"🇺🇦"},UG:{name:"Uganda",flag:"🇺🇬"},US:{name:"United States",flag:"🇺🇸"},UY:{name:"Uruguay",flag:"🇺🇾"},UZ:{name:"Uzbekistan",flag:"🇺🇿"},VA:{name:"Vatican City",flag:"🇻🇦"},VC:{name:"St Vincent & Gren.",flag:"🇻🇨"},VE:{name:"Venezuela",flag:"🇻🇪"},VN:{name:"Vietnam",flag:"🇻🇳"},VU:{name:"Vanuatu",flag:"🇻🇺"},WS:{name:"Samoa",flag:"🇼🇸"},YE:{name:"Yemen",flag:"🇾🇪"},ZA:{name:"South Africa",flag:"🇿🇦"},ZM:{name:"Zambia",flag:"🇿🇲"},ZW:{name:"Zimbabwe",flag:"🇿🇼"}};function U(e=[]){const a=[];if(e.length>0){const n=e.map(e=>G.find(a=>a.id===e)).filter(e=>void 0!==e);a.push({id:"__recent__",name:"Recent",icon:"🕐",defaultOpen:!0,children:n.map(e=>({id:e.id,name:e.name,icon:e.flag}))})}for(const e of N){const n=new Map;for(const a of e.places){const e=n.get(a.country)??[];e.push(a),n.set(a.country,e)}const o=[];for(const[e,a]of n){const n=O[e],t=n?.name??e,i=n?.flag??"";o.push({id:`country-${e}`,name:t,icon:i,defaultOpen:!1,children:a.map(e=>({id:e.id,name:e.name,icon:e.flag}))})}a.push({id:e.id,name:e.name,icon:e.icon,defaultOpen:!1,children:o})}return a}const W="documents",Z="settings";function Y(){return new Promise((e,a)=>{const n=indexedDB.open("atlantis-tools",2);n.onupgradeneeded=e=>{const a=e.target.result;a.objectStoreNames.contains(W)||a.createObjectStore(W,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),a.objectStoreNames.contains(Z)||a.createObjectStore(Z,{keyPath:"key"})},n.onsuccess=()=>e(n.result),n.onerror=()=>a(n.error)})}let J={async saveDoc(e,a,n){const o=await Y(),t={appId:e,name:a,content:n,savedAt:Date.now()};return new Promise((e,a)=>{const n=o.transaction(W,"readwrite").objectStore(W).add(t);n.onsuccess=()=>e(String(n.result)),n.onerror=()=>a(n.error)})},async updateDoc(e,a,n){const o=await Y();return new Promise((t,i)=>{const r=o.transaction(W,"readwrite").objectStore(W),l=r.get(Number(e));l.onsuccess=()=>{const e=l.result;if(!e)return void i(new Error("Doc not found"));const o=r.put({...e,name:a,content:n,savedAt:Date.now()});o.onsuccess=()=>t(),o.onerror=()=>i(o.error)},l.onerror=()=>i(l.error)})},async listDocs(e){const a=await Y();return new Promise((n,o)=>{const t=a.transaction(W,"readonly").objectStore(W).index("appId").getAll(e);t.onsuccess=()=>n(t.result.map(e=>({...e,id:String(e.id)})).reverse()),t.onerror=()=>o(t.error)})},async deleteDoc(e){const a=await Y();return new Promise((n,o)=>{const t=a.transaction(W,"readwrite").objectStore(W).delete(Number(e));t.onsuccess=()=>n(),t.onerror=()=>o(t.error)})},async putSetting(e,a){const n=await Y();return new Promise((o,t)=>{const i=n.transaction(Z,"readwrite").objectStore(Z).put({key:e,value:a});i.onsuccess=()=>o(),i.onerror=()=>t(i.error)})},async getSetting(e){const a=await Y();return new Promise((n,o)=>{const t=a.transaction(Z,"readonly").objectStore(Z).get(e);t.onsuccess=()=>n(t.result?t.result.value:null),t.onerror=()=>o(t.error)})}};function q(e,a,n){return J.saveDoc(e,a,n)}function Q(e,a,n){return J.updateDoc(e,a,n)}const X=i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,ee=i.default.div`
  background: ${o.w.colors.sidebarBg};
  border: 1px solid ${o.w.colors.sidebarBorder};
  border-radius: ${o.w.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ae=i.default.div`
  font-size: ${o.w.typography.fontSizeMd};
  font-weight: 700;
  color: ${o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
`,ne=i.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${o.w.colors.mainBg};
  border: 1px solid ${o.w.colors.border};
  border-radius: ${o.w.borderRadius.md};
  color: ${o.w.colors.mainText};
  font-size: ${o.w.typography.fontSizeBase};
  font-family: ${o.w.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${o.w.colors.accent}; }
  &::placeholder { color: ${o.w.colors.sidebarTextMuted}; }
`,oe=i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,te=i.default.button`
  padding: 7px 18px;
  border-radius: ${o.w.borderRadius.md};
  font-size: ${o.w.typography.fontSizeBase};
  font-family: ${o.w.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.15)":e?o.w.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?"#f85149":e?"#fff":o.w.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?"#f85149":e?o.w.colors.accent:o.w.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,ie=i.default.div`
  height: 1px;
  background: ${o.w.colors.border};
  margin: 0 -4px;
`,re=i.default.div`
  font-size: 11px;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
`;function le({onSave:e,onUpdate:a,onCancel:n,existingDoc:o}){const[i,l]=(0,t.useState)(o?.name??""),s=(0,t.useRef)(null);return(0,t.useEffect)(()=>{s.current?.focus(),o&&s.current?.select()},[o]),(0,r.jsx)(X,{onClick:n,children:(0,r.jsxs)(ee,{onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(ae,{children:"Save document"}),o&&a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(re,{children:"Update the current version or save as a new one."}),(0,r.jsxs)(oe,{children:[(0,r.jsx)(te,{onClick:n,children:"Cancel"}),(0,r.jsxs)(te,{danger:!0,onClick:a,children:['Update "',o.name,'"']})]}),(0,r.jsx)(ie,{})]}),(0,r.jsx)(ne,{ref:s,value:i,onChange:e=>l(e.target.value),onKeyDown:t=>{"Enter"===t.key&&i.trim()&&(o&&i.trim()===o.name&&a?a():e(i.trim())),"Escape"===t.key&&n()},placeholder:o?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,r.jsxs)(oe,{children:[!o&&(0,r.jsx)(te,{onClick:n,children:"Cancel"}),(0,r.jsx)(te,{primary:!0,disabled:!i.trim(),onClick:()=>e(i.trim()),children:"Save as new"})]})]})})}var se=n(8006),ce=n(679),de=n(4872);const me=i.default.div`
  position: relative;
`,ue=i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${o.w.colors.border};
  border-radius: ${o.w.borderRadius.md};
  color: ${o.w.colors.mainText};
  font-size: ${o.w.typography.fontSizeBase};
  font-family: ${o.w.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${o.w.colors.sidebarHover};
    border-color: ${o.w.colors.accent};
  }
`,fe=i.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${o.w.colors.sidebarBg};
  border: 1px solid ${o.w.colors.sidebarBorder};
  border-radius: ${o.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,ge=i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  border-bottom: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
`,pe=i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,he=i.default.div`
  padding: 16px 14px;
  font-size: ${o.w.typography.fontSizeBase};
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  font-style: italic;
`,ye=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`,xe=i.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,be=i.default.div`
  font-size: ${o.w.typography.fontSizeBase};
  color: ${o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ze=i.default.div`
  font-size: 11px;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  margin-top: 1px;
`,we=i.default.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${o.w.borderRadius.sm};
  cursor: pointer;
  color: ${o.w.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: #f85149;
    background: rgba(248, 81, 73, 0.12);
  }
`;function ve({appId:e,onLoad:a}){const[n,o]=(0,t.useState)(!1),[i,l]=(0,t.useState)([]),s=(0,t.useRef)(null),c=(0,t.useCallback)(()=>{(function(e){return J.listDocs(e)})(e).then(l).catch(()=>{})},[e]);(0,t.useEffect)(()=>{if(!n)return;c();const e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[n,c]);return(0,r.jsxs)(me,{ref:s,children:[(0,r.jsxs)(ue,{onClick:()=>o(e=>!e),children:[(0,r.jsx)(se.A,{size:14}),"Saved",(0,r.jsx)(ce.A,{size:13,style:{marginLeft:2}})]}),(0,r.jsxs)(fe,{open:n,children:[(0,r.jsx)(ge,{children:"Saved versions"}),(0,r.jsx)(pe,{children:0===i.length?(0,r.jsx)(he,{children:"No saved documents yet."}):i.map(e=>{return(0,r.jsxs)(ye,{children:[(0,r.jsxs)(xe,{onClick:()=>{a(e.content,e.id,e.name),o(!1)},children:[(0,r.jsx)(be,{children:e.name}),(0,r.jsx)(ze,{children:(n=e.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(n)))})]}),(0,r.jsx)(we,{onClick:a=>(async(e,a)=>{e.stopPropagation(),await function(e){return J.deleteDoc(e)}(a),l(e=>e.filter(e=>e.id!==a))})(a,e.id),title:"Delete",children:(0,r.jsx)(de.A,{size:13})})]},e.id);var n})})]})]})}},217(e,a,n){n.d(a,{w:()=>o});const o={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},5375(e,a,n){n.d(a,{v:()=>Y});var o=n(7359),t=n(3233),i=n(4079),r=n(5723);function l(e){return 0===e?{label:"Clear sky",emoji:"☀️"}:1===e?{label:"Mainly clear",emoji:"🌤️"}:2===e?{label:"Partly cloudy",emoji:"⛅"}:3===e?{label:"Overcast",emoji:"☁️"}:e<=48?{label:"Fog",emoji:"🌫️"}:e<=55?{label:"Drizzle",emoji:"🌦️"}:e<=65?{label:"Rain",emoji:"🌧️"}:e<=75?{label:"Snow",emoji:"❄️"}:77===e?{label:"Snow grains",emoji:"🌨️"}:e<=82?{label:"Rain showers",emoji:"🌧️"}:e<=86?{label:"Snow showers",emoji:"🌨️"}:{label:"Thunderstorm",emoji:"⛈️"}}function s(e,a){return 0===a?"Today":1===a?"Tomorrow":new Date(e).toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric"})}const c="#58a6ff",d="#ff7b72",m="rgba(255,255,255,0.06)",u="#8b949e",f=[{threshold:0,color:"#3fb950"},{threshold:15,color:"#7ee787"},{threshold:25,color:"#d29922"},{threshold:38,color:"#f0883e"},{threshold:50,color:"#f85149"}],g=t.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  flex-wrap: wrap;
`,p=t.default.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  color: ${u};
  font-family: monospace;
`,h=t.default.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,y=[{label:"0–14",color:"#3fb950"},{label:"15–24",color:"#7ee787"},{label:"25–37",color:"#d29922"},{label:"38–49",color:"#f0883e"},{label:"50+",color:"#f85149"}];function x(e,a=.35){if(e.length<2)return"";let n=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let o=0;o<e.length-1;o++){const t=e[Math.max(o-1,0)],i=e[o],r=e[o+1],l=e[Math.min(o+2,e.length-1)],s=i.x+(r.x-t.x)*a,c=i.y+(r.y-t.y)*a,d=r.x-(l.x-i.x)*a,m=r.y-(l.y-i.y)*a;n+=` C ${s.toFixed(2)} ${c.toFixed(2)} ${d.toFixed(2)} ${m.toFixed(2)} ${r.x.toFixed(2)} ${r.y.toFixed(2)}`}return n}function b({cx:e,cy:a,deg:n,size:o=7}){return(0,r.jsx)("g",{transform:`translate(${e},${a}) rotate(${n})`,children:(0,r.jsx)("polygon",{points:`0,${-o} ${.55*o},${.6*o} 0,${.2*o} ${.55*-o},${.6*o}`,fill:c,opacity:.85})})}function z({temps:e,feelsLike:a}){const n=14,o=32,t=52,i=[...e,...a],l=5*Math.floor(Math.min(...i)/5),s=5*Math.ceil(Math.max(...i)/5),f=s-l||1,y=e=>e.map((a,n)=>({x:o+n/(e.length-1)*228,y:66-(a-l)/f*t})),b=y(e),z=y(a),w=x(b),v=x(z),A=`${w} L ${b[b.length-1].x.toFixed(2)} ${66..toFixed(2)} L ${b[0].x.toFixed(2)} ${66..toFixed(2)} Z`,M=[0,6,12,18,23].map(a=>({label:23===a?"24h":`${a}h`,x:o+a/(e.length-1)*228})),$=[{label:`${s}°`,y:n},{label:`${Math.round((s+l)/2)}°`,y:40},{label:`${l}°`,y:66}],k=(new Date).getHours(),j=b[Math.min(k,b.length-1)];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"tempGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:.25}),(0,r.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:0})]})}),$.map(({y:e})=>(0,r.jsx)("line",{x1:o,y1:e,x2:260,y2:e,stroke:m,strokeWidth:1},e)),(0,r.jsx)("path",{d:A,fill:"url(#tempGrad)"}),(0,r.jsx)("path",{d:v,fill:"none",stroke:d,strokeWidth:1,strokeDasharray:"3 4",opacity:.6}),(0,r.jsx)("path",{d:w,fill:"none",stroke:c,strokeWidth:1.5,strokeLinejoin:"round"}),(0,r.jsx)("circle",{cx:j.x,cy:j.y,r:3,fill:c}),M.map(({label:e,x:a})=>(0,r.jsx)("text",{x:a,y:84,textAnchor:"middle",fill:u,fontSize:9,fontFamily:"monospace",children:e},e)),$.map(({label:e,y:a})=>(0,r.jsx)("text",{x:28,y:a+3,textAnchor:"end",fill:u,fontSize:9,fontFamily:"monospace",children:e},e))]}),(0,r.jsxs)(g,{children:[(0,r.jsxs)(p,{children:[(0,r.jsx)(h,{color:c})," Actual"]}),(0,r.jsxs)(p,{style:{marginLeft:4},children:[(0,r.jsx)(h,{color:d,style:{opacity:.6}})," Feels like"]})]})]})}function w({speeds:e}){const a=14,n=28,o=52,t=Math.max(...e,1),i=5*Math.ceil(t/5),l=e.map((a,t)=>({x:n+t/(e.length-1)*232,y:66-a/i*o})),s=x(l),d=`${s} L ${l[l.length-1].x.toFixed(2)} ${66..toFixed(2)} L ${l[0].x.toFixed(2)} ${66..toFixed(2)} Z`,f=[0,6,12,18,23].map(a=>({label:23===a?"24h":`${a}h`,x:n+a/(e.length-1)*232})),g=[{label:`${i}`,y:a},{label:`${Math.round(i/2)}`,y:40},{label:"0",y:66}];return(0,r.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"windGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:.3}),(0,r.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:0})]})}),g.map(({y:e})=>(0,r.jsx)("line",{x1:n,y1:e,x2:260,y2:e,stroke:m,strokeWidth:1},e)),(0,r.jsx)("path",{d,fill:"url(#windGrad)"}),(0,r.jsx)("path",{d:s,fill:"none",stroke:c,strokeWidth:1.5,strokeLinejoin:"round"}),(()=>{const e=(new Date).getHours(),a=l[Math.min(e,l.length-1)];return(0,r.jsx)("circle",{cx:a.x,cy:a.y,r:3,fill:c})})(),f.map(({label:e,x:a})=>(0,r.jsx)("text",{x:a,y:84,textAnchor:"middle",fill:u,fontSize:9,fontFamily:"monospace",children:e},e)),g.map(({label:e,y:a})=>(0,r.jsx)("text",{x:24,y:a+3,textAnchor:"end",fill:u,fontSize:9,fontFamily:"monospace",children:e},e))]})}function v({speeds:e,directions:a,dayLabels:n}){const o=e.length,t=Math.max(...e,1),i=5*Math.ceil(t/5),l=252/o,s=.28*l;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{viewBox:"0 0 268 110",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,r.jsx)("line",{x1:8,y1:90,x2:260,y2:90,stroke:m,strokeWidth:1}),e.map((e,o)=>{const t=e/i*60,c=8+o*l+s/2,d=l-s,m=90-t,g=c+d/2,p=function(e){let a=f[0].color;for(const n of f){if(!(e>=n.threshold))break;a=n.color}return a}(e);return(0,r.jsxs)("g",{children:[(0,r.jsx)(b,{cx:g,cy:7,deg:a[o],size:6}),(0,r.jsx)("text",{x:g,y:23,textAnchor:"middle",fill:p,fontSize:8,fontWeight:"600",fontFamily:"monospace",children:Math.round(e)}),(0,r.jsx)("rect",{x:c,y:m,width:d,height:t,fill:p,opacity:.85,rx:2}),(0,r.jsx)("text",{x:g,y:106,textAnchor:"middle",fill:u,fontSize:9,fontFamily:"monospace",children:n[o]})]},o)}),(0,r.jsx)("text",{x:260,y:88,textAnchor:"end",fill:u,fontSize:8,fontFamily:"monospace",children:"km/h"})]}),(0,r.jsx)(g,{children:y.map(({label:e,color:a})=>(0,r.jsxs)(p,{children:[(0,r.jsx)(h,{color:a}),e]},e))})]})}const A=t.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: ${i.w4.colors.sidebarBg};
  border-left: 1px solid ${i.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  transform: translateX(${({visible:e})=>e?"0":"100%"});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 500;
  overflow: hidden;
`,M=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.md} ${i.w4.spacing.sm};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,$=t.default.h2`
  margin: 0;
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: 16px;
  line-height: 1;
  transition: background 0.12s, color 0.12s;
  flex-shrink: 0;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.mainText};
  }
`,j=t.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.md};
`,S=t.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
`,T=t.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${i.w4.spacing.sm};
`,C=t.default.span`
  font-size: 48px;
  line-height: 1;
`,B=t.default.div`
  font-size: 40px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamilyMono};
  line-height: 1;
`,E=t.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  margin-top: 4px;
`,L=t.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  margin-top: ${i.w4.spacing.sm};
  flex-wrap: wrap;
`,F=t.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
`,P=t.default.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: ${i.w4.spacing.sm};
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${({color:e})=>e};
  background: ${({color:e})=>e}18;
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e};
`,R=t.default.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: 2px;
`,I=t.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 10px 10px 8px;
`,D=t.default.div`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${u};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: 6px;
`,_=t.default.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: ${i.w4.borderRadius.sm};
  gap: ${i.w4.spacing.sm};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,N=t.default.span`font-size: 20px; width: 28px; text-align: center; flex-shrink: 0;`,G=t.default.div`flex: 1; min-width: 0;`,K=t.default.div`font-size: ${i.w4.typography.fontSizeSm}; font-weight: 500; color: ${i.w4.colors.mainText}; font-family: ${i.w4.typography.fontFamily};`,H=t.default.div`font-size: 11px; color: ${i.w4.colors.sidebarTextMuted}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,V=t.default.div`display: flex; flex-direction: column; align-items: flex-end; gap: 1px; flex-shrink: 0;`,O=t.default.span`font-size: ${i.w4.typography.fontSizeSm}; font-weight: 600; color: ${i.w4.colors.mainText}; font-family: ${i.w4.typography.fontFamilyMono};`,U=t.default.span`font-size: 11px; color: ${i.w4.colors.sidebarTextMuted}; font-family: ${i.w4.typography.fontFamilyMono};`,W=t.default.div`display: flex; align-items: center; gap: 2px; font-size: 10px; color: ${i.w4.colors.sidebarTextMuted}; font-family: ${i.w4.typography.fontFamilyMono}; flex-shrink: 0; width: 36px; justify-content: flex-end;`,Z=t.default.div`
  padding: ${i.w4.spacing.lg};
  text-align: center;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-family: ${i.w4.typography.fontFamily};
`;function Y({place:e,onClose:a}){const[n,t]=(0,o.useState)(null),[c,d]=(0,o.useState)(null),[m,u]=(0,o.useState)(!1),[f,g]=(0,o.useState)(null),[p,h]=(0,o.useState)(0);(0,o.useEffect)(()=>{if(!e)return t(null),void d(null);u(!0),g(null),t(null),d(null);const a=`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lng}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=7`,n=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${e.lat}&longitude=${e.lng}&current=pm2_5,pm10,european_aqi,us_aqi`;Promise.all([fetch(a).then(e=>{if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()}),fetch(n).then(e=>e.ok?e.json():null).catch(()=>null)]).then(([e,a])=>{t(e),d(a),u(!1)}).catch(e=>{g(e.message),u(!1)})},[e?.id,p]);const y=n?l(n.current_weather.weathercode):null,x=n?n.hourly.windspeed_10m.slice(0,24):[],b=n?n.hourly.temperature_2m.slice(0,24):[],Y=n?n.hourly.apparent_temperature.slice(0,24):[],J=(new Date).getHours(),q=n?n.hourly.relativehumidity_2m[J]:null,Q=n?n.hourly.apparent_temperature[J]:null,X=c?(ee=c.current.us_aqi)<=50?{label:"Good",color:"#3fb950"}:ee<=100?{label:"Moderate",color:"#d29922"}:ee<=150?{label:"Unhealthy (sensitive)",color:"#f0883e"}:ee<=200?{label:"Unhealthy",color:"#f85149"}:{label:"Hazardous",color:"#b44ac0"}:null;var ee;return(0,r.jsxs)(A,{visible:!!e,children:[(0,r.jsxs)(M,{children:[(0,r.jsx)($,{children:e?.name??""}),(0,r.jsx)(k,{onClick:a,title:"Close",children:"✕"})]}),(0,r.jsxs)(j,{children:[m&&(0,r.jsx)(Z,{children:"Loading weather…"}),f&&(0,r.jsxs)(Z,{children:[(0,r.jsx)("div",{children:"Weather unavailable — the API may be temporarily down."}),(0,r.jsx)("button",{onClick:()=>h(e=>e+1),style:{marginTop:12,padding:"6px 16px",cursor:"pointer",background:"none",border:`1px solid ${i.w4.colors.border}`,borderRadius:6,color:i.w4.colors.mainText,fontFamily:"inherit",fontSize:12},children:"Retry"})]}),n&&y&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(S,{children:[(0,r.jsxs)(T,{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)(B,{children:[Math.round(n.current_weather.temperature),"°C"]}),(0,r.jsx)(E,{children:y.label})]}),(0,r.jsx)(C,{children:y.emoji})]}),(0,r.jsxs)(L,{children:[(0,r.jsxs)(F,{children:["💨 ",Math.round(n.current_weather.windspeed)," km/h"]}),(0,r.jsxs)(F,{children:["🌡 ",Math.round(n.daily.temperature_2m_max[0]),"° / ",Math.round(n.daily.temperature_2m_min[0]),"°"]}),null!=Q&&(0,r.jsxs)(F,{children:["🌬 Feels ",Math.round(Q),"°"]}),null!=q&&(0,r.jsxs)(F,{children:["💧 ",q,"% RH"]})]}),X&&c&&(0,r.jsxs)(P,{color:X.color,children:["🏭 AQI ",c.current.us_aqi," · ",X.label]})]}),b.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)(R,{children:"Temperature today (hourly)"}),(0,r.jsxs)(I,{children:[(0,r.jsx)(D,{children:"°C · dot = current hour"}),(0,r.jsx)(z,{temps:b,feelsLike:Y})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(R,{children:"Wind today (hourly)"}),(0,r.jsxs)(I,{children:[(0,r.jsx)(D,{children:"Speed km/h · dot = current hour"}),(0,r.jsx)(w,{speeds:x})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(R,{children:"Wind this week (daily max)"}),(0,r.jsxs)(I,{children:[(0,r.jsx)(D,{children:"Max speed km/h · arrows = dominant direction"}),(0,r.jsx)(v,{speeds:n.daily.windspeed_10m_max,directions:n.daily.winddirection_10m_dominant,dayLabels:n.daily.time.map((e,a)=>0===a?"Today":new Date(e).toLocaleDateString("en-GB",{weekday:"short"}))})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(R,{children:"7-Day Forecast"}),n.daily.time.map((e,a)=>{const{emoji:o,label:t}=l(n.daily.weathercode[a]);return(0,r.jsxs)(_,{children:[(0,r.jsx)(N,{children:o}),(0,r.jsxs)(G,{children:[(0,r.jsx)(K,{children:s(e,a)}),(0,r.jsx)(H,{children:t})]}),(0,r.jsx)(W,{children:n.daily.precipitation_sum[a]>0&&(0,r.jsxs)(r.Fragment,{children:["💧 ",n.daily.precipitation_sum[a].toFixed(1)]})}),(0,r.jsxs)(V,{children:[(0,r.jsxs)(O,{children:[Math.round(n.daily.temperature_2m_max[a]),"°"]}),(0,r.jsxs)(U,{children:[Math.round(n.daily.temperature_2m_min[a]),"°"]})]})]},e)})]})]})]})]})}},9390(e,a,n){n.d(a,{xy:()=>w});var o=n(7359);function t(e){return e*Math.PI/180}function i(e){return 180*e/Math.PI}function r(e,a){const n=e.gmst+a-e.ra;return Math.atan(-Math.cos(n)/Math.tan(e.dec))}function l(e){return e<2?"#3fb950":e<3?"#7ee787":e<4?"#d29922":e<5?"#f0883e":e<6?"#f85149":"#ff4444"}function s(e){return Math.min(40,Math.max(3,1.5*Math.pow(2,e-1)))}function c(e){const a=Math.round(e/36e5);return a<1?"<1 h ago":a<24?`${a} h ago`:`${Math.round(a/24)} d ago`}function d(e){return e<20?"#00e676":e<40?"#69ff47":e<60?"#b2ff59":e<80?"#ffea00":"#ff6d00"}function m(e){return Date.now()-new Date(e).getTime()}function u(e){const a=Math.round(e/36e5);return a<1?"< 1 h ago":a<24?`${a} h ago`:`${Math.round(a/24)} d ago`}function f(e){return e.replace(/^Wildfire\s*[-–]\s*/i,"")}function g(e){return null==e.lat||null==e.lon?null:{icao24:e.hex,callsign:e.flight?.trim()||null,lat:e.lat,lon:e.lon,altFt:"number"==typeof e.alt_baro?e.alt_baro:null,speedKts:e.gs??null,heading:e.track??null,vrateFpm:e.baro_rate??null,reg:e.r??null,type:e.t??null}}function p(e){return null==e||e<1e3?"#8b949e":e<1e4?"#f0883e":e<25e3?"#d29922":"#58a6ff"}function h(e,a,n){return`<div style="\n    width:22px;height:22px;\n    display:flex;align-items:center;justify-content:center;\n    transform:rotate(${e}deg);\n    ${n?`filter:drop-shadow(0 0 5px ${a}) drop-shadow(0 0 10px ${a});`:"filter:drop-shadow(0 1px 3px rgba(0,0,0,.9));"}\n    cursor:pointer;\n    transition:transform .3s;\n  ">\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="${a}">\n      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>\n    </svg>\n  </div>`}function y(e,a,n,o){const t=o/6371,i=e*Math.PI/180,r=a*Math.PI/180,l=n*Math.PI/180,s=Math.asin(Math.sin(i)*Math.cos(t)+Math.cos(i)*Math.sin(t)*Math.cos(l)),c=r+Math.atan2(Math.sin(l)*Math.sin(t)*Math.cos(i),Math.cos(t)-Math.sin(i)*Math.sin(s));return[180*s/Math.PI,180*c/Math.PI]}function x(e){const a=p(e.altFt),n=null!=e.altFt?`${Math.round(.3048*e.altFt).toLocaleString()} m`:"—",o=null!=e.speedKts?`${Math.round(1.852*e.speedKts)} km/h`:"—",t=null!=e.heading?`${Math.round(e.heading)}°`:"—",i=null!=e.vrateFpm?`${e.vrateFpm>0?"↑":"↓"} ${Math.abs(Math.round(.00508*e.vrateFpm))} m/s`:"—";return`\n    <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:180px;">\n      <div style="font-weight:700;font-size:13px;margin-bottom:4px;color:${a}">\n        ✈ ${e.callsign??e.icao24}${e.reg?` · ${e.reg}`:""}\n      </div>\n      ${e.type?`<div>🛩 ${e.type}</div>`:""}\n      <div>📡 ${e.icao24}</div>\n      <div>↑ Altitude: ${n}</div>\n      <div>→ Speed: ${o}</div>\n      <div>⬆ Heading: ${t}</div>\n      <div>${i}</div>\n      <div style="margin-top:6px">\n        <button\n          onclick="window.__atlantisFlightFollow && window.__atlantisFlightFollow('${e.icao24}')"\n          style="\n            padding:3px 10px;cursor:pointer;\n            background:rgba(88,166,255,.12);\n            border:1px solid #58a6ff;\n            border-radius:4px;\n            color:#58a6ff;\n            font-family:monospace;font-size:11px;\n          ">📍 Follow</button>\n      </div>\n    </div>`}const b=[{id:"night",label:"🌑 Night",title:"Day/night terminator",defaultEnabled:!0,component:function({map:e,enabled:a}){const n=(0,o.useRef)(null),l=(0,o.useRef)(),s=(0,o.useCallback)(()=>{clearInterval(l.current),n.current?.remove(),n.current=null},[]),c=(0,o.useCallback)(()=>{if(!e||!a)return;const o=function(e){const a=function(e){const a=e.getTime()/864e5+2440587.5,n=a-2451545,o=t((280.46+.9856474*n)%360),i=t((357.528+.9856003*n)%360),r=o+t(1.915*Math.sin(i)+.02*Math.sin(2*i)),l=t(23.439-4e-7*n);return{ra:Math.atan2(Math.cos(l)*Math.sin(r),Math.cos(r)),dec:Math.asin(Math.sin(l)*Math.sin(r)),gmst:t((280.46061837+360.98564736629*(a-2451545))%360)}}(e),n=[];for(let e=-180;e<=180;e++){const o=r(a,t(e));n.push([i(o),e])}const o=a.dec>0?-90:90;return n.push([o,180]),n.push([o,-180]),n}(new Date);n.current?n.current.setLatLngs(o):n.current=window.L.polygon(o,{color:"transparent",fillColor:"#000",fillOpacity:.3,interactive:!1}).addTo(e)},[e,a]);return(0,o.useEffect)(()=>{if(e&&a)return c(),l.current=setInterval(c,3e4),s;s()},[e,a,c,s]),null}},{id:"aurora",label:"🌌 Aurora",title:"Aurora forecast — NOAA SWPC",defaultEnabled:!1,component:function({map:e,enabled:a}){const n=(0,o.useRef)([]),t=(0,o.useRef)(null),i=(0,o.useCallback)(()=>{n.current.forEach(e=>e.remove()),n.current=[],t.current&&(t.current.remove(),t.current=null)},[]),r=(0,o.useCallback)(async()=>{var o;if(e&&a)try{const[i,r]=await Promise.all([fetch("https://services.swpc.noaa.gov/json/ovation_aurora_latest.json"),fetch("https://services.swpc.noaa.gov/json/planetary_k_index_1m.json")]);if(!(i.ok&&r.ok&&e&&a))return;const l=await i.json(),s=await r.json(),c=s[s.length-1]?.kp_index??0,m=window.L;n.current.forEach(e=>e.remove()),n.current=[];for(const[a,o,t]of l.coordinates){if(t<5||Math.abs(o)<45)continue;const i=m.circleMarker([o,a],{radius:3,color:d(t),fillColor:d(t),fillOpacity:Math.min(.85,.15+t/100*.7),weight:0,interactive:!1});i.addTo(e),n.current.push(i)}t.current&&t.current.remove();const u=(o=c)>=7?"#f85149":o>=5?"#f0883e":o>=3?"#d29922":"#3fb950",f=m.Control.extend({onAdd(){const e=m.DomUtil.create("div");return e.innerHTML=`\n            <div style="\n              background:rgba(13,17,23,.88);\n              border:1px solid ${u};\n              border-radius:6px;\n              padding:5px 11px;\n              font-family:monospace;\n              font-size:12px;\n              color:${u};\n              backdrop-filter:blur(4px);\n              line-height:1.5;\n              user-select:none;\n            ">\n              🌌 Kp <strong>${c.toFixed(1)}</strong>\n              <span style="opacity:.7;font-size:10px;margin-left:4px">${function(e){return e>=8?"Extreme":e>=7?"Severe":e>=6?"Strong":e>=5?"Moderate":e>=4?"Active":e>=3?"Unsettled":"Quiet"}(c)}</span>\n            </div>`,e},onRemove(){}});t.current=new f({position:"bottomleft"}),t.current.addTo(e)}catch{}},[e,a]);return(0,o.useEffect)(()=>{if(!a)return void i();r();const e=setInterval(r,3e5);return()=>{clearInterval(e),i()}},[a,r,i]),null}},{id:"iss",label:"🛸 ISS",title:"ISS live position + footprint",defaultEnabled:!1,component:function({map:e,enabled:a}){const n=(0,o.useRef)(null),t=(0,o.useRef)(null),i=(0,o.useRef)(null),r=(0,o.useRef)([]),l=(0,o.useCallback)(()=>{n.current?.remove(),n.current=null,t.current?.remove(),t.current=null,i.current?.remove(),i.current=null,r.current=[]},[]),s=(0,o.useCallback)(async()=>{if(e&&a)try{const o=await fetch("https://api.wheretheiss.at/v1/satellites/25544");if(!o.ok)return;const l=await o.json();if(!e||!a)return;const s=window.L,c=l.latitude,d=l.longitude,m=r.current;if(m.length>0){const[,e]=m[m.length-1];Math.abs(d-e)>180&&(r.current=[])}r.current=[...r.current,[c,d]].slice(-80);const u='<div style="\n        font-size:22px;\n        filter:drop-shadow(0 0 8px rgba(255,210,0,.9));\n        line-height:1;\n      ">🛸</div>',f=s.divIcon({html:u,className:"",iconSize:[24,24],iconAnchor:[12,12]}),g=`\n        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:165px;">\n          <div style="font-weight:700;font-size:13px;color:#f0c040;margin-bottom:4px">🛸 ISS</div>\n          <div>↑ ${Math.round(l.altitude).toLocaleString()} km altitude</div>\n          <div>→ ${Math.round(l.velocity).toLocaleString()} km/h</div>\n          <div>☀ ${l.visibility}</div>\n          <div style="margin-top:4px;opacity:.7;font-size:11px">\n            ${c.toFixed(3)}°, ${d.toFixed(3)}°\n          </div>\n          <div style="margin-top:4px;opacity:.55;font-size:10px;line-height:1.4;">\n            Circle = visibility footprint<br>(~2 300 km radius)\n          </div>\n        </div>`;n.current?(n.current.setLatLng([c,d]),n.current.getPopup()?.setContent(g)):n.current=s.marker([c,d],{icon:f,zIndexOffset:2e3}).bindPopup(g,{maxWidth:220}).addTo(e),t.current?t.current.setLatLngs(r.current):t.current=s.polyline(r.current,{color:"#f0c040",weight:1.5,opacity:.55,dashArray:"3 7"}).addTo(e),i.current?i.current.setLatLng([c,d]):i.current=s.circle([c,d],{radius:2316e3,color:"#f0c040",fillColor:"#f0c040",fillOpacity:.04,weight:1,opacity:.25,dashArray:"5 8",interactive:!1}).addTo(e)}catch{}},[e,a]);return(0,o.useEffect)(()=>{if(!a)return void l();let e,n=!1;const o=async()=>{await s(),n||(e=setTimeout(o,5e3))};return o(),()=>{n=!0,clearTimeout(e),l()}},[a,s,l]),null}},{id:"quakes",label:"🌍 Quakes",title:"Earthquakes — USGS past month",defaultEnabled:!1,component:function({map:e,enabled:a}){const n=(0,o.useRef)(new Map),t=(0,o.useCallback)(()=>{n.current.forEach(e=>e.remove()),n.current.clear()},[]),i=(0,o.useCallback)(async()=>{if(e&&a)try{const o=await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson");if(!o.ok)return;const t=await o.json();if(!e||!a)return;const i=window.L,r=Date.now(),d=new Set;for(const a of t.features){const[o,t,m]=a.geometry.coordinates,{mag:u,place:f,time:g,type:p}=a.properties;if("earthquake"!==p||null==u||null==t||null==o)continue;d.add(a.id);const h=r-g,y=l(u),x=s(u);if(n.current.has(a.id))continue;const b=i.circleMarker([t,o],{radius:x,color:y,fillColor:y,fillOpacity:Math.max(.25,.7-h/2592e6),weight:1});b.bindPopup(`\n          <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:190px;">\n            <div style="font-weight:700;font-size:13px;color:${y};margin-bottom:4px">\n              M${u.toFixed(1)} Earthquake\n            </div>\n            <div>📍 ${f}</div>\n            <div>🕐 ${c(h)}</div>\n            <div>↓ Depth: ${Math.round(m)} km</div>\n          </div>`,{maxWidth:250}),b.addTo(e),n.current.set(a.id,b)}n.current.forEach((e,a)=>{d.has(a)||(e.remove(),n.current.delete(a))})}catch{}},[e,a]);return(0,o.useEffect)(()=>{if(!a)return void t();i();const e=setInterval(i,6e5);return()=>{clearInterval(e),t()}},[a,i,t]),null}},{id:"fires",label:"🔥 Fires",title:"Active wildfires — NASA EONET",defaultEnabled:!1,component:function({map:e,enabled:a}){const n=(0,o.useRef)(new Map),t=(0,o.useCallback)(()=>{n.current.forEach(e=>e.remove()),n.current.clear()},[]),i=(0,o.useCallback)(async()=>{if(e&&a)try{const o=await fetch("https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires&status=open&limit=500");if(!o.ok||!e||!a)return;const t=await o.json(),i=window.L,r=new Set;for(const a of t.events){const o=a.geometry[a.geometry.length-1];if(!o||"Point"!==o.type)continue;const[t,l]=o.coordinates;if(r.add(a.id),n.current.has(a.id))continue;const s=m(o.date),c=Math.max(.4,1-s/2592e6),d=f(a.title),g=i.divIcon({html:`<div style="\n            font-size:16px;line-height:1;\n            opacity:${c.toFixed(2)};\n            filter:drop-shadow(0 0 5px rgba(255,90,0,.85));\n            cursor:pointer;\n          ">🔥</div>`,className:"",iconSize:[16,16],iconAnchor:[8,8]}),p=i.marker([l,t],{icon:g});p.bindPopup(`\n          <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:185px;">\n            <div style="font-weight:700;font-size:13px;color:#f85149;margin-bottom:4px">\n              🔥 Wildfire\n            </div>\n            <div>📍 ${d}</div>\n            <div>🕐 ${u(s)}</div>\n            <div style="margin-top:4px;opacity:.6;font-size:10px">\n              ${l.toFixed(3)}°, ${t.toFixed(3)}°\n            </div>\n          </div>`,{maxWidth:240}),p.addTo(e),n.current.set(a.id,p)}n.current.forEach((e,a)=>{r.has(a)||(e.remove(),n.current.delete(a))})}catch{}},[e,a]);return(0,o.useEffect)(()=>{if(!a)return void t();i();const e=setInterval(i,18e5);return()=>{clearInterval(e),t()}},[a,i,t]),null}},{id:"radar",label:"🌧 Radar",title:"Weather radar — RainViewer",defaultEnabled:!1,component:function({map:e,enabled:a}){const n=(0,o.useRef)(null),t=(0,o.useCallback)(()=>{n.current?.remove(),n.current=null},[]),i=(0,o.useCallback)(async()=>{if(e&&a)try{const o=await fetch("https://api.rainviewer.com/public/weather-maps.json");if(!o.ok)return;const t=await o.json();if(!e||!a)return;const i=t.radar.past;if(!i?.length)return;const r=i[i.length-1],l=`${t.host}${r.path}/256/{z}/{x}/{y}/2/1_1.png`;n.current?.remove(),n.current=window.L.tileLayer(l,{opacity:.6,attribution:'<a href="https://www.rainviewer.com">RainViewer</a>'}).addTo(e)}catch{}},[e,a]);return(0,o.useEffect)(()=>{if(!a)return void t();i();const e=setInterval(i,3e5);return()=>{clearInterval(e),t()}},[a,i,t]),null}},{id:"flights",label:"✈ Flights",title:"Live flight traffic — altitude-coded",defaultEnabled:!1,component:function({map:e,enabled:a,zoom:n}){const t=(0,o.useRef)(new Map),i=(0,o.useRef)(new Map),r=(0,o.useRef)(new Map),l=(0,o.useRef)(new Map),s=(0,o.useRef)(new Map),c=(0,o.useRef)(null),d=(0,o.useRef)(null);(0,o.useEffect)(()=>(window.__atlantisFlightFollow=e=>{d.current=d.current===e?null:e},()=>{delete window.__atlantisFlightFollow}),[]);const m=(0,o.useCallback)(()=>{t.current.forEach(e=>e.remove()),t.current.clear(),i.current.forEach(e=>e.remove()),i.current.clear(),r.current.forEach(e=>e.remove()),r.current.clear(),l.current.clear(),s.current.clear(),d.current=null},[]),u=(0,o.useCallback)(async()=>{if(!e||!a||n<5)return;const o=e.getCenter(),m=function(e){const a=e.getBounds(),n=e.getCenter(),o=a.getNorthEast(),t=n.lat*Math.PI/180,i=o.lat*Math.PI/180,r=(o.lat-n.lat)*Math.PI/180,l=(o.lng-n.lng)*Math.PI/180,s=Math.sin(r/2)**2+Math.cos(t)*Math.cos(i)*Math.sin(l/2)**2,c=6880.13*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return Math.min(Math.ceil(c),250)}(e),u=`https://api.airplanes.live/v2/point/${o.lat.toFixed(4)}/${o.lng.toFixed(4)}/${m}`;c.current?.abort(),c.current=new AbortController;try{const n=await fetch(u,{signal:c.current.signal});if(!n.ok)return;const o=await n.json();if(!e||!a)return;const m=window.L,f=Date.now();for(const a of o.ac??[]){const n=g(a);if(!n||null==n.altFt)continue;const o=n.heading??0,c=p(n.altFt),u=d.current===n.icao24,b=m.divIcon({html:h(o,c,u),className:"",iconSize:[22,22],iconAnchor:[11,11]}),z=[...l.current.get(n.icao24)??[],[n.lat,n.lon]].slice(-15);l.current.set(n.icao24,z),s.current.set(n.icao24,f);const w=null!=n.speedKts&&null!=n.heading,v=w?1.852*n.speedKts*.5:0,[A,M]=w?y(n.lat,n.lon,n.heading,v):[n.lat,n.lon],$=t.current.get(n.icao24);if($)$.setLatLng([n.lat,n.lon]),$.setIcon(b),$.getPopup()?.setContent(x(n)),i.current.get(n.icao24)?.setLatLngs([[n.lat,n.lon],[A,M]]),r.current.get(n.icao24)?.setLatLngs(z);else{const a=m.marker([n.lat,n.lon],{icon:b});if(a.bindPopup(x(n),{maxWidth:240}),a.addTo(e),t.current.set(n.icao24,a),w){const a=m.polyline([[n.lat,n.lon],[A,M]],{color:c,weight:1.5,opacity:.35,dashArray:"4 7",interactive:!1});a.addTo(e),i.current.set(n.icao24,a)}if(z.length>1){const a=m.polyline(z,{color:c,weight:1.5,opacity:.45,interactive:!1});a.addTo(e),r.current.set(n.icao24,a)}}}if(t.current.forEach((e,a)=>{const n=s.current.get(a)??0;f-n>5e4&&(e.remove(),t.current.delete(a),i.current.get(a)?.remove(),i.current.delete(a),r.current.get(a)?.remove(),r.current.delete(a),l.current.delete(a),s.current.delete(a),d.current===a&&(d.current=null))}),d.current){const a=t.current.get(d.current);a&&e.panTo(a.getLatLng(),{animate:!0,duration:.5})}}catch(e){if(e instanceof Error&&"AbortError"===e.name)return}},[e,a,n]);return(0,o.useEffect)(()=>{if(!a||n<5)return void m();let e,o=!1;const t=async()=>{await u(),o||(e=setTimeout(t,2e4))};return t(),()=>{o=!0,clearTimeout(e)}},[a,u,m]),(0,o.useEffect)(()=>{if(!e||!a)return;let n;const o=()=>{clearTimeout(n),n=setTimeout(u,1200)};return e.on("moveend",o),()=>{clearTimeout(n),e.off("moveend",o)}},[e,a,u]),null}},{id:"measure",label:"📏 Measure",title:"Click two points to measure great-circle distance",defaultEnabled:!1,component:function({map:e,enabled:a}){const n=(0,o.useRef)([]),t=(0,o.useRef)([]),i=(0,o.useRef)([]),r=(0,o.useRef)(null),l=(0,o.useCallback)(()=>{t.current.forEach(e=>e.remove()),t.current=[],i.current.forEach(e=>e.remove()),i.current=[],r.current?.remove(),r.current=null,n.current=[]},[]);return(0,o.useEffect)(()=>{if(!e||!a)return void l();const o=window.L,s=o.divIcon({html:'<div style="\n        width:10px;height:10px;\n        background:#58a6ff;\n        border:2px solid #fff;\n        border-radius:50%;\n        box-shadow:0 0 6px rgba(88,166,255,.85);\n      "></div>',className:"",iconSize:[10,10],iconAnchor:[5,5]}),c=a=>{const{lat:c,lng:d}=a.latlng;n.current.length>=2&&l(),n.current=[...n.current,[c,d]];const m=o.marker([c,d],{icon:s,interactive:!1}).addTo(e);if(t.current.push(m),2===n.current.length){const[a,t]=n.current,l=o.polyline([a,t],{color:"#58a6ff",weight:2,dashArray:"6 5",opacity:.85,interactive:!1}).addTo(e);i.current.push(l);const s=function(e,a,n,o){const t=(n-e)*Math.PI/180,i=(o-a)*Math.PI/180,r=Math.sin(t/2)**2+Math.cos(e*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(i/2)**2;return 12742*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))}(a[0],a[1],t[0],t[1]),c=s/1.852,d=.6214*s,m=(a[0]+t[0])/2,u=(a[1]+t[1])/2;r.current=o.popup({closeButton:!0,autoClose:!1,className:"",offset:[0,-4]}).setLatLng([m,u]).setContent(`\n            <div style="font-family:monospace;font-size:12px;line-height:1.9;text-align:center;min-width:120px;">\n              <div style="font-weight:700;font-size:15px;color:#58a6ff">\n                ${function(e){return e<1?`${Math.round(1e3*e)} m`:e<100?`${e.toFixed(1)} km`:`${Math.round(e).toLocaleString()} km`}(s)}\n              </div>\n              <div style="opacity:.65;font-size:10px">\n                ${Math.round(c).toLocaleString()} nm\n                &nbsp;·&nbsp;\n                ${Math.round(d).toLocaleString()} mi\n              </div>\n              <div style="opacity:.4;font-size:9px;margin-top:3px">click map to reset</div>\n            </div>`).addTo(e)}};return e.on("click",c),e.getContainer().style.cursor="crosshair",()=>{e.off("click",c),e.getContainer().style.cursor="",l()}},[e,a,l]),null}}],z=new Map(b.map(e=>[e.id,e]));function w(){return Array.from(z.values())}}}]);
//# sourceMappingURL=376.43c31261a3b3dd9f9041.js.map