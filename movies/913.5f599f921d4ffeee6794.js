"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[913],{4914(e,o,a){a.d(o,{FlyoutPanel:()=>h});var n=a(7359),t=a(3233),i=a(7207),r=a(255),l=a(217),s=a(5959),d=a(5185),c=a(5723);const m=i.keyframes`
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
`,p=t.default.div`
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
`;function f({iconKey:e}){const o=e?d.t[e]??r.A:r.A;return(0,c.jsx)(o,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:o,onSelect:a}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(x,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,c.jsxs)(g,{active:o===e.id,onClick:()=>a(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function h({activeId:e}){const{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:n}=(0,s.c)();if(!o)return null;const t=o.entry.icon?d.t[o.entry.icon]??r.A:r.A;return(0,c.jsxs)(u,{anchorY:o.anchorY,onMouseEnter:n,onMouseLeave:a,children:[(0,c.jsxs)(p,{children:[(0,c.jsx)(t,{size:13,strokeWidth:2}),o.entry.name]}),(0,c.jsx)(x,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},5959(e,o,a){a.d(o,{I:()=>t,c:()=>i});var n=a(7359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},5185(e,o,a){a.d(o,{t:()=>V});var n=a(9510),t=a(9038),i=a(8207),r=a(6896),l=a(7901),s=a(9848),d=a(2164),c=a(3775),m=a(3539),u=a(1783),p=a(1837),g=a(2314),f=a(5751),x=a(255),h=a(9633),b=a(2946),y=a(822),z=a(6720),w=a(3317),v=a(2709),k=a(3517),A=a(7032),$=a(6949),j=a(8218),M=a(6829),S=a(5553),T=a(9591),C=a(2820),_=a(4621),B=a(6673),P=a(9033),E=a(1365),F=a(5912),R=a(8641),L=a(3249),D=a(1821),I=a(9161),N=a(1849),K=a(7747),H=a(2932),Y=a(4525),U=a(7230);const V={activity:r.A,"bar-chart-2":n.A,book:s.A,"book-open":l.A,calendar:c.A,clock:u.A,"circle-dot":m.A,feather:g.A,"file-text":f.A,globe:z.A,hash:w.A,heart:v.A,landmark:k.A,layers:i.A,leaf:$.A,map:T.A,package:B.A,compass:p.A,"git-branch":b.A,github:y.A,minus:_.A,terminal:L.A,thermometer:D.A,users:N.A,wind:K.A,"pie-chart":t.A,plus:E.A,slash:F.A,star:R.A,zap:U.A,bot:d.A,lightbulb:j.A,"message-square":C.A,wrench:H.A,x:Y.A,"layout-grid":A.A,list:M.A,file:x.A,folder:h.A,"map-pin":S.A,"pen-tool":P.A,type:I.A}},4079(e,o,a){a.d(o,{PE:()=>k,w4:()=>n.w});var n=a(217),t=a(7359),i=a(3233),r=a(5723);i.default.button`
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
`,i.default.div`
  position: relative;
`;var l=a(3661),s=a(5959);const d="260px",c="56px",m=i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${n.w.colors.sidebarBg};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,u=i.default.div`
  width: ${c};
  min-width: ${c};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,p=i.default.button`
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
`,g=i.default.button`
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
`,f=i.default.div`
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
`,x=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w.spacing.sm};
  padding: 0 ${n.w.spacing.lg};
`,h=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,b=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${n.w.colors.mainBg};
  font-family: ${n.w.typography.fontFamily};
  color: ${n.w.colors.mainText};
  overflow: hidden;
`,y=i.default.aside`
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
`,v="atlantis:sidebar-collapsed";function k({sidebar:e,children:o,topBarRight:n,title:i="Atlantis",activeId:d=null}){const[c,k]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(v)}catch{return!1}}),[A,$]=(0,t.useState)(null),j=(0,t.useRef)(),M=()=>k(e=>{const o=!e;try{localStorage.setItem(v,String(o))}catch{}return o}),S=t.useMemo(()=>t.lazy(()=>Promise.resolve().then(a.bind(a,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(s.I.Provider,{value:{collapsed:c,toggle:M,flyout:A,openFlyout:(e,o,a)=>{clearTimeout(j.current),$({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{j.current=setTimeout(()=>$(null),160)},cancelFlyoutClose:()=>clearTimeout(j.current)},children:(0,r.jsxs)(b,{children:[(0,r.jsxs)(m,{children:[e&&(0,r.jsx)(u,{children:(0,r.jsx)(p,{onClick:M,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(l.A,{size:17})})}),(0,r.jsxs)(g,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,r.jsx)("span",{children:"antis"})]}),i&&(0,r.jsx)(f,{children:i}),n&&(0,r.jsx)(x,{children:n})]}),(0,r.jsxs)(h,{children:[null!=e&&(0,r.jsx)(y,{collapsed:c,children:(0,r.jsx)(z,{children:e})}),(0,r.jsx)(w,{children:o})]}),A&&(0,r.jsx)(t.Suspense,{fallback:null,children:(0,r.jsx)(S,{activeId:d})})]})})}a(5185),i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.div`
  overflow: hidden;
`,i.default.div`
  padding-left: ${n.w.spacing.md};
`,i.default.div`
  display: flex;
  flex-direction: column;
`,i.default.button`
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
  color: ${n.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,i.default.button`
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
`;const A=a(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${A} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,a(4914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places),i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,i.default.div`
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
`,i.default.div`
  font-size: ${n.w.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
`,i.default.input`
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
`,i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,i.default.button`
  padding: 7px 18px;
  border-radius: ${n.w.borderRadius.md};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.15)":e?n.w.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?"#f85149":e?"#fff":n.w.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?"#f85149":e?n.w.colors.accent:n.w.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,i.default.div`
  height: 1px;
  background: ${n.w.colors.border};
  margin: 0 -4px;
`,i.default.div`
  font-size: 11px;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
`,i.default.div`
  position: relative;
`,i.default.button`
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
`,i.default.div`
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
`,i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,i.default.div`
  padding: 16px 14px;
  font-size: ${n.w.typography.fontSizeBase};
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  font-style: italic;
`,i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
  }
`,i.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,i.default.div`
  font-size: ${n.w.typography.fontSizeBase};
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i.default.div`
  font-size: 11px;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  margin-top: 1px;
`,i.default.button`
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
`},217(e,o,a){a.d(o,{w:()=>n});const n={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},5056(e,o,a){a.d(o,{H:()=>h});var n=a(7359),t=a(3233),i=a(4079),r=a(5723);const l=t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${i.w4.colors.mainBg};
  padding: ${i.w4.spacing.xl};
`,s=t.default.div`
  width: 100%;
  max-width: 480px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.lg};
`,d=t.default.div`
  font-size: 48px;
  text-align: center;
`,c=t.default.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,m=t.default.p`
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.6;
  margin: 0;
`,u=t.default.a`
  color: ${i.w4.colors.accent};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,p=t.default.label`
  font-size: 13px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,g=t.default.input`
  width: 100%;
  padding: 12px ${i.w4.spacing.md};
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: 14px;
  font-family: ${i.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${i.w4.colors.accent};
  }

  &::placeholder {
    color: ${i.w4.colors.mainTextMuted};
    opacity: 0.5;
  }
`,f=t.default.button`
  padding: 12px;
  background: ${i.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,x=t.default.p`
  font-size: 13px;
  color: #f85149;
  text-align: center;
  margin: 0;
`;function h({onSave:e}){const[o,a]=(0,n.useState)(""),[t,i]=(0,n.useState)(!1),[h,b]=(0,n.useState)(""),y=async()=>{const a=o.trim();if(a){i(!0),b("");try{if(!(await fetch(`https://api.themoviedb.org/3/configuration?api_key=${a}`)).ok)throw new Error("Invalid key");e(a)}catch{b("Could not validate API key. Check it and try again.")}finally{i(!1)}}};return(0,r.jsx)(l,{children:(0,r.jsxs)(s,{children:[(0,r.jsx)(d,{children:"🎬"}),(0,r.jsx)(c,{children:"Movies & Series"}),(0,r.jsxs)(m,{children:["This app uses the free"," ",(0,r.jsx)(u,{href:"https://www.themoviedb.org/settings/api",target:"_blank",rel:"noreferrer",children:"TMDB API"})," ","to browse movies, TV shows, and documentaries — including where to stream them.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Create a free account on TMDB and paste your ",(0,r.jsx)("strong",{children:"API Key (v3)"})," below."]}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,r.jsx)(p,{htmlFor:"apikey",children:"TMDB API Key (v3)"}),(0,r.jsx)(g,{id:"apikey",type:"password",placeholder:"e.g. a1b2c3d4e5f6...",value:o,onChange:e=>a(e.target.value),onKeyDown:e=>"Enter"===e.key&&y(),autoFocus:!0})]}),h&&(0,r.jsx)(x,{children:h}),(0,r.jsx)(f,{onClick:y,disabled:!o.trim()||t,children:t?"Validating…":"Connect"})]})})}},6127(e,o,a){a.d(o,{U:()=>W});var n=a(7359),t=a(3233),i=a(4079),r=a(302),l=a(9753),s=a(8991),d=a(7207),c=a(8641),m=a(5569),u=a(7390),p=a(5723);const g=t.default.div`
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
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`,f=t.default.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
  background: ${i.w4.colors.surface};
`,x=t.default.div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(135deg, #1e2533 0%, #252d3d 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 28px;
`,h=t.default.span`
  font-size: 10px;
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  padding: 0 8px;
  line-height: 1.3;
`,b=t.default.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 55%, transparent 100%);
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
`,y=t.default.div`
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,z=t.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`,w=t.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 10px;
  font-weight: 700;
  color: #e3b341;
`,v=t.default.span`
  font-size: 10px;
  color: rgba(255,255,255,0.55);
`,k=t.default.span`
  position: absolute;
  top: 7px;
  left: 7px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  background: ${({kind:e})=>"movie"===e?"rgba(227,179,65,0.85)":"rgba(88,166,255,0.85)"};
  color: #000;
`,A=d.keyframes`
  from { opacity: 0; transform: scale(0.92) translateY(8px); }
  to   { opacity: 1; transform: scale(1)    translateY(0); }
`,$=t.default.div`
  position: fixed;
  top: ${({top:e})=>e}px;
  left: ${({left:e})=>e}px;
  width: 300px;
  background: #1a1f2e;
  border-radius: 14px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.08);
  overflow: hidden;
  z-index: 9999;
  animation: ${A} 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  @media (max-width: 480px) {
    width: 280px;
  }
`,j=t.default.div`
  width: 100%;
  padding-top: 56.25%;
  background: url(${({src:e})=>e}) center/cover no-repeat;
  background-color: #1a1f2e;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 65%;
    background: linear-gradient(to bottom, transparent, #1a1f2e);
  }
`,M=t.default.div`
  width: 100%;
  padding-top: 56.25%;
  background: linear-gradient(135deg, #1e2533 0%, #252d3d 100%);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to bottom, transparent, #1a1f2e);
  }
`,S=t.default.div`
  padding: 10px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`,T=t.default.div`
  font-size: 14px;
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  line-height: 1.25;
  letter-spacing: -0.02em;
`,C=t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,_=t.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 700;
  color: #e3b341;
`,B=t.default.span`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
`,P=t.default.span`
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 4px;
  background: ${({kind:e})=>"movie"===e?"rgba(227,179,65,0.15)":"rgba(88,166,255,0.15)"};
  color: ${({kind:e})=>"movie"===e?"#e3b341":"#58a6ff"};
`,E=t.default.p`
  font-size: 11px;
  line-height: 1.6;
  color: ${i.w4.colors.mainTextMuted};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,F=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 0;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${i.w4.colors.border};
  background: rgba(88,166,255,0.12);
  color: ${i.w4.colors.accent};
  transition: background 0.15s;
  width: 100%;

  &:hover { background: rgba(88,166,255,0.22); }
  &:active { transform: scale(0.97); }
`,R=300;function L({item:e,rect:o,onOpen:a,onMouseEnter:n,onMouseLeave:t,withBackdrop:i,onBackdropTap:r}){const l=function(e){const o=window.innerWidth,a=window.innerHeight;if(o<500){const n=Math.max(8,(o-R)/2);return{top:Math.max(8,Math.min(e.bottom+8,a-310-8)),left:n}}let n=e.right+10;n+R>o-8&&(n=e.left-R-10),n=Math.max(8,Math.min(n,o-R-8));let t=e.top+e.height/2-155;return t=Math.max(8,Math.min(t,a-310-8)),{top:t,left:n}}(o),d=(0,u.rS)(e),g=(0,u.Ox)(e),f=(0,u.U7)(e.backdrop_path,"w780");return s.createPortal((0,p.jsxs)(p.Fragment,{children:[i&&(0,p.jsx)("div",{style:{position:"fixed",inset:0,zIndex:9998},onClick:r}),(0,p.jsxs)($,{top:l.top,left:l.left,onMouseEnter:n,onMouseLeave:t,children:[f?(0,p.jsx)(j,{src:f}):(0,p.jsx)(M,{}),(0,p.jsxs)(S,{children:[(0,p.jsx)(T,{children:d}),(0,p.jsxs)(C,{children:[(0,p.jsxs)(_,{children:[(0,p.jsx)(c.A,{size:11,fill:"currentColor"}),e.vote_average.toFixed(1)]}),g&&(0,p.jsx)(B,{children:g}),(0,p.jsx)(P,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV"})]}),e.overview&&(0,p.jsx)(E,{children:e.overview}),(0,p.jsxs)(F,{onClick:a,children:[(0,p.jsx)(m.A,{size:13}),"More Info"]})]})]})]}),document.body)}function D({item:e,onClick:o}){const a=(0,u.rS)(e),t=(0,u.Ox)(e),i=(0,u.HD)(e.poster_path),r=(0,n.useRef)(null),l=(0,n.useRef)(),s=(0,n.useRef)(),d=(0,n.useRef)(null),m=(0,n.useRef)(!1),[A,$]=(0,n.useState)(!1),[j,M]=(0,n.useState)(!1),[S,T]=(0,n.useState)(null),[C,_]=(0,n.useState)(!1);(0,n.useEffect)(()=>()=>{clearTimeout(l.current),clearTimeout(s.current)},[]);const B=(0,n.useCallback)((e,o)=>{T(e),M(!0),_(o)},[]),P=(0,n.useCallback)(()=>{M(!1),T(null),_(!1)},[]),E=(0,n.useCallback)(()=>{P(),o(e)},[e,o,P]),F=(0,n.useCallback)(()=>{$(!0),clearTimeout(s.current),l.current=setTimeout(()=>{const e=r.current?.getBoundingClientRect();e&&B(e,!1)},400)},[B]),R=(0,n.useCallback)(()=>{$(!1),clearTimeout(l.current),s.current=setTimeout(P,180)},[P]),D=(0,n.useCallback)(()=>{clearTimeout(s.current)},[]),I=(0,n.useCallback)(()=>{P()},[P]),N=(0,n.useCallback)(e=>{j||(d.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},[j]),K=(0,n.useCallback)(a=>{if(j||!d.current)return;const n=a.changedTouches[0],t=Math.abs(n.clientX-d.current.x),i=Math.abs(n.clientY-d.current.y);if(d.current=null,t>8||i>8)return;if(m.current=!0,window.innerWidth<360)return void o(e);const l=r.current?.getBoundingClientRect();l&&B(l,!0)},[j,e,o,B]),H=(0,n.useCallback)(()=>{m.current?m.current=!1:j||C||E()},[j,C,E]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(g,{ref:r,onClick:H,onMouseEnter:F,onMouseLeave:R,onTouchStart:N,onTouchEnd:K,title:a,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||E()},children:[(0,p.jsx)(k,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV"}),i?(0,p.jsx)(f,{src:i,alt:a,loading:"lazy"}):(0,p.jsxs)(x,{children:["🎬",(0,p.jsx)(h,{children:a})]}),(0,p.jsxs)(b,{visible:A,children:[(0,p.jsx)(y,{children:a}),(0,p.jsxs)(z,{children:[(0,p.jsxs)(w,{children:[(0,p.jsx)(c.A,{size:9,fill:"currentColor"}),e.vote_average.toFixed(1)]}),t&&(0,p.jsx)(v,{children:t})]})]})]}),j&&S&&(0,p.jsx)(L,{item:e,rect:S,onOpen:E,onMouseEnter:D,onMouseLeave:I,withBackdrop:C,onBackdropTap:P})]})}const I=t.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.md};
  padding: 0 ${i.w4.spacing.xxl};
  position: relative;
`,N=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,K=t.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.01em;
`,H=t.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
`,Y=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${i.w4.colors.border};
  background: ${i.w4.colors.surface};
  color: ${i.w4.colors.mainText};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.accent};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,U=t.default.div`
  position: relative;
  overflow: hidden;
`,V=t.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 4px;

  &::-webkit-scrollbar { display: none; }
`,G=t.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  color: ${i.w4.colors.mainTextMuted};
  font-size: 14px;
  border: 1px dashed ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
`,O=t.default.div`
  width: 160px;
  aspect-ratio: 2/3;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    ${i.w4.colors.surface} 25%,
    ${i.w4.colors.sidebarHover} 50%,
    ${i.w4.colors.surface} 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;function W({title:e,items:o,loading:a,onSelect:t}){const i=(0,n.useRef)(null),[s,d]=(0,n.useState)(!1),[c,m]=(0,n.useState)(!0),u=()=>{const e=i.current;e&&(d(e.scrollLeft>0),m(e.scrollLeft+e.clientWidth<e.scrollWidth-4))};return(0,p.jsxs)(I,{children:[(0,p.jsxs)(N,{children:[(0,p.jsx)(K,{children:e}),(0,p.jsxs)(H,{children:[(0,p.jsx)(Y,{onClick:()=>{i.current?.scrollBy({left:-600,behavior:"smooth"}),setTimeout(u,350)},disabled:!s,children:(0,p.jsx)(r.A,{size:16})}),(0,p.jsx)(Y,{onClick:()=>{i.current?.scrollBy({left:600,behavior:"smooth"}),setTimeout(u,350)},disabled:!c||0===o.length,children:(0,p.jsx)(l.A,{size:16})})]})]}),(0,p.jsx)(U,{children:a?(0,p.jsx)(V,{children:Array.from({length:10}).map((e,o)=>(0,p.jsx)(O,{},o))}):0===o.length?(0,p.jsx)(G,{children:"No results found"}):(0,p.jsx)(V,{ref:i,onScroll:u,children:o.map(e=>(0,p.jsx)(D,{item:e,onClick:t},`${e.media_type}-${e.id}`))})})]})}},6260(e,o,a){a.d(o,{P:()=>xe});var n=a(7359),t=a(3233),i=a(7207),r=a(4079),l=a(7180),s=a(3775),d=a(2310),c=a(1783),m=a(2743),u=a(8440),p=a(140),g=a(2709),f=a(2126),x=a(6135),h=a(8641),b=a(4872),y=a(5031),z=a(1849),w=a(7390),v=a(2053),k=a(5723);const A=i.keyframes`
  from { transform: translateX(6%); opacity: 0; }
  to   { transform: translateX(0);  opacity: 1; }
`,$=i.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,j=i.keyframes`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,M=t.default.div`
  flex: 1;
  background: #080c12;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${$} 0.2s ease;
  scrollbar-width: thin;
  scrollbar-color: ${r.w4.colors.border} transparent;
`,S=t.default.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${A} 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`,T=t.default.div`
  position: relative;
  width: 100%;
  padding-top: min(56.25%, 520px);
  background: url(${({src:e})=>e}) center top / cover no-repeat;
  background-color: #141920;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(8,12,18,0.15) 0%, rgba(8,12,18,0.92) 80%, #080c12 100%),
      linear-gradient(to right,  rgba(8,12,18,0.5)  0%, transparent 60%);
  }
`,C=t.default.div`
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
`,_=t.default.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 99px;
  border: none;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  color: rgba(255,255,255,0.9);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:hover { background: rgba(0,0,0,0.8); }
`,B=t.default.h1`
  font-size: clamp(24px, 5vw, 42px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
`,P=t.default.p`
  font-size: 14px;
  color: rgba(255,255,255,0.65);
  font-style: italic;
  margin: 0;
`,E=t.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`,F=t.default.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  font-weight: 800;
  color: #e3b341;
`,R=t.default.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: rgba(255,255,255,0.6);
`,L=t.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,D=t.default.span`
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.75);
  backdrop-filter: blur(4px);
`,I=t.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,N=t.default.a`
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
`,K=t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 11px 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({active:e,danger:o})=>o?"#f85149":e?r.w4.colors.accent:"rgba(255,255,255,0.25)"};
  background: ${({active:e,danger:o})=>o?"rgba(248,81,73,0.15)":e?"rgba(88,166,255,0.2)":"rgba(255,255,255,0.08)"};
  color: ${({active:e,danger:o})=>o?"#f85149":e?r.w4.colors.accent:"rgba(255,255,255,0.85)"};
  backdrop-filter: blur(4px);
  transition: background 0.15s, transform 0.1s;

  &:hover { background: rgba(255,255,255,0.14); }
  &:active { transform: scale(0.97); }
`,H=t.default.div`
  flex: 1;
  padding: 32px 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  max-width: 900px;

  @media (min-width: 768px) {
    padding: 36px 48px 64px;
  }
`,Y=t.default.p`
  font-size: 15px;
  line-height: 1.8;
  color: ${r.w4.colors.mainTextMuted};
  margin: 0;
`,U=t.default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,V=t.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${r.w4.colors.border};
`,G=t.default.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(88,166,255,0.1);
  border: 1px solid rgba(88,166,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${r.w4.colors.accent};
  flex-shrink: 0;
`,O=t.default.h2`
  font-size: 16px;
  font-weight: 800;
  color: ${r.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,W=t.default.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 12px 48px rgba(0,0,0,0.7);

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`,J=t.default.div`
  position: absolute;
  inset: 0;
  background: url(${({src:e})=>e}) center/cover no-repeat;
  background-color: #141920;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({loaded:e})=>e?0:1};
  transition: opacity 0.25s;
  pointer-events: ${({loaded:e})=>e?"none":"all"};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%
    );
    background-size: 200% 100%;
    animation: ${j} 1.8s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%);
  }

  &:hover .play-circle {
    transform: scale(1.12);
    background: rgba(255,255,255,0.25);
  }
`,Z=t.default.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  z-index: 1;
  transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), background 0.15s;
`,X=t.default.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 4px;
  &::-webkit-scrollbar { display: none; }
`,q=t.default.div`
  flex-shrink: 0;
  width: 110px;
  border-radius: 12px;
  overflow: hidden;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.5);
  }
`,Q=t.default.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
`,ee=t.default.div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(135deg, #1e2533 0%, #252d3d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`,oe=t.default.div`
  padding: 8px 8px 10px;
`,ae=t.default.div`
  font-size: 11px;
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ne=t.default.div`
  font-size: 10px;
  color: ${r.w4.colors.mainTextMuted};
  margin-top: 3px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,te=t.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,ie=t.default.a`
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
`,re=t.default.img`
  width: 32px;
  height: 32px;
  border-radius: 7px;
  object-fit: cover;
  flex-shrink: 0;
`,le=t.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,se=t.default.span`
  font-size: 13px;
  font-weight: 700;
  color: #fff;
`,de=t.default.span`
  font-size: 10px;
  color: rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  gap: 3px;
`,ce=t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  background: ${({bg:e})=>e};
  border: 1px solid rgba(255,255,255,0.06);
  opacity: 0.55;
`,me=t.default.img`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  object-fit: cover;
`,ue=t.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${r.w4.colors.mainTextMuted};
  margin-bottom: 8px;
`,pe=t.default.p`
  font-size: 14px;
  color: ${r.w4.colors.mainTextMuted};
  margin: 0;
`,ge=t.default.div`
  font-size: 14px;
  color: ${r.w4.colors.mainTextMuted};
  padding: 12px 0;
`;function fe({provider:e,title:o,appleTVUrl:a}){const n=w.RY[e.provider_name]??r.w4.colors.surface,t=(0,w.$8)(e,o,a),i=e.provider_name.toLowerCase().includes("netflix");return(0,k.jsxs)(ie,{bg:n,href:t,target:"_blank",rel:"noreferrer",children:[e.logo_path&&(0,k.jsx)(re,{src:(0,w.vo)(e.logo_path),alt:e.provider_name}),(0,k.jsxs)(le,{children:[(0,k.jsx)(se,{children:e.provider_name}),(0,k.jsxs)(de,{children:[(0,k.jsx)(m.A,{size:9}),i?"Open in Netflix":"Open in Apple TV"]})]})]})}function xe({item:e,apiKey:o,onBack:a,onLibraryChange:t}){const[i,m]=(0,n.useState)(null),[A,$]=(0,n.useState)([]),[j,ie]=(0,n.useState)(null),[re,le]=(0,n.useState)([]),[de,xe]=(0,n.useState)(!0),[he,be]=(0,n.useState)(null),[ye,ze]=(0,n.useState)(!1),[we,ve]=(0,n.useState)(()=>(0,v.BA)(e)),[ke,Ae]=(0,n.useState)(()=>(0,v.U4)(e)),$e=(0,w.rS)(e),je=(0,w.Ox)(e);(0,n.useEffect)(()=>{const e=e=>{"Escape"===e.key&&a()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a]),(0,n.useEffect)(()=>{xe(!0),ze(!1),Promise.all([(0,w.Ug)(o,e.media_type,e.id),(0,w.fY)(o,e.media_type,e.id),(0,w.Mt)(o,e.media_type,e.id),(0,w.Pg)(o,e.media_type,e.id)]).then(([e,o,a,n])=>{m(e),$(o),ie(a),le(n),xe(!1)}).catch(()=>xe(!1)),(0,w.Su)($e,e.media_type,je).then(be)},[e.id,e.media_type,o,$e,je]);const Me=A.find(e=>"YouTube"===e.site&&("Trailer"===e.type||"Teaser"===e.type)&&e.official)??A.find(e=>"YouTube"===e.site&&"Trailer"===e.type)??A.find(e=>"YouTube"===e.site),Se=(0,n.useCallback)(()=>{(0,v.dw)(e),ve(e=>!e),t?.()},[e,t]),Te=(0,n.useCallback)(()=>{(0,v.w0)(e),Ae(e=>!e),t?.()},[e,t]),Ce=[...j?.flatrate??[]].filter((e,o,a)=>a.findIndex(o=>o.provider_id===e.provider_id)===o),_e=(j?.rent??[]).filter(e=>!Ce.find(o=>o.provider_id===e.provider_id)),Be=Ce[0],Pe=Be?(0,w.$8)(Be,$e,he):he??`https://tv.apple.com/search?term=${encodeURIComponent($e)}`,Ee=(0,w.U7)(e.backdrop_path??i?.backdrop_path??null,"w1280"),Fe=Me?`https://i.ytimg.com/vi/${Me.key}/maxresdefault.jpg`:"";return(0,k.jsx)(M,{children:(0,k.jsxs)(S,{children:[(0,k.jsxs)(T,{src:Ee,children:[(0,k.jsxs)(_,{onClick:a,children:[(0,k.jsx)(l.A,{size:15}),"Back"]}),(0,k.jsxs)(C,{children:[(0,k.jsx)(B,{children:$e}),i?.tagline&&(0,k.jsxs)(P,{children:['"',i.tagline,'"']}),(0,k.jsxs)(E,{children:[(0,k.jsxs)(F,{children:[(0,k.jsx)(h.A,{size:15,fill:"currentColor"}),e.vote_average.toFixed(1)]}),je&&(0,k.jsxs)(R,{children:[(0,k.jsx)(s.A,{size:13}),je]}),i?.runtime&&(0,k.jsxs)(R,{children:[(0,k.jsx)(c.A,{size:13}),Math.floor(i.runtime/60),"h ",i.runtime%60,"m"]}),i?.number_of_seasons&&(0,k.jsxs)(R,{children:[(0,k.jsx)(y.A,{size:13}),i.number_of_seasons," season",1!==i.number_of_seasons?"s":""]})]}),i?.genres&&i.genres.length>0&&(0,k.jsx)(L,{children:i.genres.map(e=>(0,k.jsx)(D,{children:e.name},e.id))}),(0,k.jsxs)(I,{children:[(0,k.jsxs)(N,{href:Pe,target:"_blank",rel:"noreferrer",children:[(0,k.jsx)(x.A,{size:16,fill:"black"}),"Watch Now"]}),(0,k.jsxs)(K,{active:we,onClick:Se,children:[(0,k.jsx)(g.A,{size:14,fill:we?"currentColor":"none"}),we?"Favorited":"Favorite"]}),(0,k.jsxs)(K,{active:ke,onClick:Te,children:[ke?(0,k.jsx)(u.A,{size:14}):(0,k.jsx)(p.A,{size:14}),ke?"Unseen":"Mark Seen"]}),(we||ke)&&(0,k.jsx)(K,{danger:!0,onClick:()=>{we&&((0,v.dw)(e),ve(!1)),ke&&((0,v.w0)(e),Ae(!1)),t?.()},children:(0,k.jsx)(b.A,{size:14})})]})]})]}),(0,k.jsxs)(H,{children:[de?(0,k.jsx)(ge,{children:"Loading…"}):(0,k.jsx)(Y,{children:e.overview}),Me&&(0,k.jsxs)(U,{children:[(0,k.jsxs)(V,{children:[(0,k.jsx)(G,{children:(0,k.jsx)(d.A,{size:15})}),(0,k.jsx)(O,{children:"Trailer"})]}),(0,k.jsxs)(W,{children:[ye&&(0,k.jsx)("iframe",{src:`https://www.youtube.com/embed/${Me.key}?autoplay=1&rel=0&modestbranding=1`,title:Me.name,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),(0,k.jsx)(J,{src:Fe,loaded:ye,onClick:()=>ze(!0),children:(0,k.jsx)(Z,{className:"play-circle",children:(0,k.jsx)(x.A,{size:24,fill:"white",style:{marginLeft:3}})})})]})]}),(de||re.length>0)&&(0,k.jsxs)(U,{children:[(0,k.jsxs)(V,{children:[(0,k.jsx)(G,{children:(0,k.jsx)(z.A,{size:15})}),(0,k.jsx)(O,{children:"Cast"})]}),de?(0,k.jsx)(ge,{children:"Loading cast…"}):(0,k.jsx)(X,{children:re.map(e=>(0,k.jsxs)(q,{children:[e.profile_path?(0,k.jsx)(Q,{src:(0,w.DW)(e.profile_path,"w185"),alt:e.name,loading:"lazy"}):(0,k.jsx)(ee,{children:"👤"}),(0,k.jsxs)(oe,{children:[(0,k.jsx)(ae,{children:e.name}),e.character&&(0,k.jsx)(ne,{children:e.character})]})]},e.id))})]}),(0,k.jsxs)(U,{children:[(0,k.jsxs)(V,{children:[(0,k.jsx)(G,{children:(0,k.jsx)(f.A,{size:15})}),(0,k.jsx)(O,{children:"Where to Watch"})]}),de?(0,k.jsx)(ge,{children:"Loading streaming info…"}):Ce.length>0?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(te,{children:Ce.map(e=>(0,k.jsx)(fe,{provider:e,title:$e,appleTVUrl:he},e.provider_id))}),_e.length>0&&(0,k.jsxs)("div",{style:{marginTop:8},children:[(0,k.jsx)(ue,{children:"Also available to rent"}),(0,k.jsx)(te,{children:_e.map(e=>(0,k.jsxs)(ce,{bg:w.RY[e.provider_name]??r.w4.colors.surface,children:[e.logo_path&&(0,k.jsx)(me,{src:(0,w.vo)(e.logo_path),alt:e.provider_name}),(0,k.jsx)(se,{style:{color:"#fff"},children:e.provider_name})]},e.provider_id))})]})]}):(j?.rent??[]).length>0?(0,k.jsxs)("div",{children:[(0,k.jsx)(pe,{children:"Not on any streaming subscription right now."}),(0,k.jsx)(ue,{style:{marginTop:12},children:"Available to rent"}),(0,k.jsx)(te,{children:(j?.rent??[]).map(e=>(0,k.jsxs)(ce,{bg:w.RY[e.provider_name]??r.w4.colors.surface,children:[e.logo_path&&(0,k.jsx)(me,{src:(0,w.vo)(e.logo_path),alt:e.provider_name}),(0,k.jsx)(se,{style:{color:"#fff"},children:e.provider_name})]},e.provider_id))})]}):(0,k.jsx)(pe,{children:"No streaming info available for your region (US)."})]})]})]})})}},1385(e,o,a){a.d(o,{K:()=>F});var n=a(7359),t=a(8991),i=a(3233),r=a(7207),l=a(4079),s=a(5609),d=a(7408),c=a(4525),m=a(7390),u=a(5723);const p=r.keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`,g=r.keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`,f=r.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,x=i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1100;
  animation: ${f} 0.2s ease;
`,h=i.default.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 100vw);
  background: #0d1117;
  border-left: 1px solid ${l.w4.colors.border};
  display: flex;
  flex-direction: column;
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
`,b=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 14px;
  border-bottom: 1px solid ${l.w4.colors.border};
  flex-shrink: 0;
`,y=i.default.h2`
  font-size: 17px;
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,z=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,w=i.default.button`
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
`,v=i.default.button`
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
`,k=i.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  scrollbar-width: thin;
  scrollbar-color: ${l.w4.colors.border} transparent;
`,A=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$=i.default.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${l.w4.colors.mainTextMuted};
`,j=i.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,M=i.default.button`
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
`,S=(0,i.default)(M)`
  padding: 6px 12px 6px 8px;
`,T=i.default.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  flex-shrink: 0;
`,C=i.default.div`
  padding: 16px 20px;
  border-top: 1px solid ${l.w4.colors.border};
  flex-shrink: 0;
`,_=i.default.button`
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
`,B={8:"#E50914",337:"#113CCF",9:"#00A8E0",350:"#555",1899:"#002BE7",15:"#3DBB3D",386:"#D0A42C",531:"#0064FF",283:"#F47521",11:"#5C3317"},P=[[28,"Action"],[12,"Adventure"],[16,"Animation"],[35,"Comedy"],[80,"Crime"],[18,"Drama"],[14,"Fantasy"],[27,"Horror"],[9648,"Mystery"],[10749,"Romance"],[878,"Sci-Fi"],[53,"Thriller"],[37,"Western"],[99,"Documentary"]];function E(e,o){return e.includes(o)?e.filter(e=>e!==o):[...e,o]}function F({filters:e,onChange:o,onClose:a}){const i=e.genres.length+e.providerIds.length+e.decades.length,r=(0,n.useCallback)(()=>{o({genres:[],providerIds:[],decades:[]})},[o]),l=(0,n.useCallback)(e=>{e.target===e.currentTarget&&a()},[a]);return t.createPortal((0,u.jsx)(x,{onClick:l,children:(0,u.jsxs)(h,{children:[(0,u.jsxs)(b,{children:[(0,u.jsxs)(y,{children:["Filter",i>0?` · ${i}`:""]}),(0,u.jsxs)(z,{children:[i>0&&(0,u.jsxs)(w,{onClick:r,children:[(0,u.jsx)(d.A,{size:12}),"Reset"]}),(0,u.jsx)(v,{onClick:a,"aria-label":"Close filters",children:(0,u.jsx)(c.A,{size:16})})]})]}),(0,u.jsxs)(k,{children:[(0,u.jsxs)(A,{children:[(0,u.jsx)($,{children:"Genre"}),(0,u.jsx)(j,{children:P.map(([a,n])=>(0,u.jsxs)(M,{active:e.genres.includes(a),onClick:()=>o({...e,genres:E(e.genres,a)}),children:[e.genres.includes(a)&&(0,u.jsx)(s.A,{size:10}),n]},a))})]}),(0,u.jsxs)(A,{children:[(0,u.jsx)($,{children:"Streaming Platform"}),(0,u.jsx)(j,{children:m.Mw.map(a=>{const n=B[a.id]??"#888",t=e.providerIds.includes(a.id);return(0,u.jsxs)(S,{active:t,color:n,onClick:()=>o({...e,providerIds:E(e.providerIds,a.id)}),children:[(0,u.jsx)(T,{bg:n}),a.name,t&&(0,u.jsx)(s.A,{size:10})]},a.id)})})]}),(0,u.jsxs)(A,{children:[(0,u.jsx)($,{children:"Era / Decade"}),(0,u.jsx)(j,{children:m.c0.map(a=>(0,u.jsxs)(M,{active:e.decades.includes(a),onClick:()=>o({...e,decades:E(e.decades,a)}),children:[e.decades.includes(a)&&(0,u.jsx)(s.A,{size:10}),a]},a))})]})]}),(0,u.jsx)(C,{children:(0,u.jsx)(_,{hasFilters:i>0,onClick:a,children:i>0?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.A,{size:15})," Apply ",i," filter",1!==i?"s":""]}):"No filters active"})})]})}),document.body)}},7390(e,o,a){a.d(o,{$8:()=>p,$P:()=>A,DW:()=>l,HD:()=>t,Kk:()=>v,Mt:()=>M,Mw:()=>c,N2:()=>d,NE:()=>b,Ox:()=>f,Pg:()=>S,RY:()=>m,Su:()=>u,U7:()=>i,Ug:()=>$,Zy:()=>z,_F:()=>y,ag:()=>k,c0:()=>h,eN:()=>w,fY:()=>j,rS:()=>g,vo:()=>r});const n="https://image.tmdb.org/t/p",t=(e,o="w342")=>e?`${n}/${o}${e}`:"",i=(e,o="w1280")=>e?`${n}/${o}${e}`:"",r=(e,o="w92")=>e?`${n}/${o}${e}`:"",l=(e,o="w185")=>e?`${n}/${o}${e}`:"";async function s(e,o,a={}){const n=new URL(`https://api.themoviedb.org/3${o}`);n.searchParams.set("api_key",e),n.searchParams.set("language","en-US");for(const[e,o]of Object.entries(a))n.searchParams.set(e,o);const t=await fetch(n.toString());if(!t.ok)throw new Error(`TMDB ${t.status}`);return t.json()}const d={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Sci-Fi",53:"Thriller",10752:"War",37:"Western",10759:"Action & Adventure",10762:"Kids",10765:"Sci-Fi & Fantasy",10768:"War & Politics",10766:"Soap",10767:"Talk",10763:"News",10764:"Reality"},c=[{id:8,name:"Netflix"},{id:337,name:"Disney+"},{id:9,name:"Amazon Prime"},{id:350,name:"Apple TV+"},{id:384,name:"HBO Max"},{id:1899,name:"Max"},{id:15,name:"Hulu"},{id:386,name:"Peacock"},{id:531,name:"Paramount+"},{id:283,name:"Crunchyroll"},{id:11,name:"MUBI"}],m={Netflix:"#E50914","Disney Plus":"#113CCF","Disney+":"#113CCF","Amazon Prime Video":"#00A8E0","Prime Video":"#00A8E0","Apple TV Plus":"#1C1C1E","Apple TV+":"#1C1C1E","HBO Max":"#552093",Max:"#002BE7",Hulu:"#3DBB3D",Peacock:"#D0A42C","Paramount Plus":"#0064FF","Paramount+":"#0064FF",Crunchyroll:"#F47521",Mubi:"#5C3317"};async function u(e,o,a){try{const n="movie"===o?"movie":"tvShow",t="movie"===o?"movie":"tvSeason",i=await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(e)}&country=us&media=${n}&entity=${t}&limit=5`);if(!i.ok)throw new Error("iTunes API error");const r=(await i.json()).results??[];if(!r.length)throw new Error("no results");let l=r[0];if(a){const e=parseInt(a,10),o=r.find(o=>String(o.releaseDate??"").startsWith(String(e)));o&&(l=o)}const s=l.trackViewUrl??l.collectionViewUrl??"";if(!s)throw new Error("no url");return s}catch{return`https://tv.apple.com/search?term=${encodeURIComponent(e)}`}}function p(e,o,a){return 8===e.provider_id?`https://www.netflix.com/search?q=${encodeURIComponent(o)}`:a??`https://tv.apple.com/search?term=${encodeURIComponent(o)}`}function g(e){return e.title??e.name??"Unknown"}function f(e){return(e.release_date??e.first_air_date??"").slice(0,4)}const x={"2020s":[2020,2029],"2010s":[2010,2019],"2000s":[2e3,2009],"1990s":[1990,1999],"1980s":[1980,1989],Classic:[1900,1979]},h=Object.keys(x);async function b(e,o,a){const n={sort_by:"popularity.desc"};a.genres.length&&(n.with_genres=a.genres.join("|")),a.providerIds.length&&(n.with_watch_providers=a.providerIds.join("|"),n.watch_region="US");const{from:t,to:i}=function(e){if(!e.length)return{};const o=e.map(e=>x[e]).filter(Boolean);return{from:Math.min(...o.map(([e])=>e)),to:Math.max(...o.map(([,e])=>e))}}(a.decades);if(t&&(n["primary_release_date.gte"]=`${t}-01-01`,n["first_air_date.gte"]=`${t}-01-01`),i&&(n["primary_release_date.lte"]=`${i}-12-31`,n["first_air_date.lte"]=`${i}-12-31`),"all"===o){const[o,a]=await Promise.all([s(e,"/discover/movie",n),s(e,"/discover/tv",n)]);return[...o.results.map(e=>({...e,media_type:"movie"})),...a.results.map(e=>({...e,media_type:"tv"}))].sort((e,o)=>(o.popularity??0)-(e.popularity??0)||o.vote_average-e.vote_average)}return(await s(e,`/discover/${o}`,n)).results.map(e=>({...e,media_type:o}))}async function y(e){return(await s(e,"/trending/all/week")).results.filter(e=>"movie"===e.media_type||"tv"===e.media_type)}async function z(e){return(await s(e,"/movie/popular")).results.map(e=>({...e,media_type:"movie"}))}async function w(e){return(await s(e,"/tv/popular")).results.map(e=>({...e,media_type:"tv"}))}async function v(e,o){return(await s(e,`/${o}/top_rated`)).results.map(e=>({...e,media_type:o}))}async function k(e){const[o,a]=await Promise.all([s(e,"/discover/movie",{with_genres:"99",sort_by:"popularity.desc"}),s(e,"/discover/tv",{with_genres:"99",sort_by:"popularity.desc"})]);return[...o.results.map(e=>({...e,media_type:"movie"})),...a.results.map(e=>({...e,media_type:"tv"}))].sort((e,o)=>o.vote_average-e.vote_average)}async function A(e,o){return(await s(e,"/search/multi",{query:o,include_adult:"false"})).results.filter(e=>"movie"===e.media_type||"tv"===e.media_type)}async function $(e,o,a){return{...await s(e,`/${o}/${a}`),media_type:o}}async function j(e,o,a){return(await s(e,`/${o}/${a}/videos`)).results??[]}async function M(e,o,a,n="US"){const t=await s(e,`/${o}/${a}/watch/providers`);return t.results?.[n]??{}}async function S(e,o,a){return((await s(e,`/${o}/${a}/credits`)).cast??[]).sort((e,o)=>e.order-o.order).slice(0,20)}},2053(e,o,a){a.d(o,{BA:()=>s,GB:()=>c,U4:()=>m,dw:()=>d,qx:()=>l,w0:()=>u});const n="atlantis:movies:favorites",t="atlantis:movies:seen";function i(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}function r(e,o){try{localStorage.setItem(e,JSON.stringify(o))}catch{}}function l(){return i(n)}function s(e){return l().some(o=>o.id===e.id&&o.media_type===e.media_type)}function d(e){const o=l(),a=o.some(o=>o.id===e.id&&o.media_type===e.media_type)?o.filter(o=>!(o.id===e.id&&o.media_type===e.media_type)):[e,...o];return r(n,a),a}function c(){return i(t)}function m(e){return c().some(o=>o.id===e.id&&o.media_type===e.media_type)}function u(e){return m(e)?function(e){const o=c().filter(o=>!(o.id===e.id&&o.media_type===e.media_type));return r(t,o),o}(e):function(e){const o=c().filter(o=>!(o.id===e.id&&o.media_type===e.media_type)),a=[e,...o].slice(0,15);return r(t,a),a}(e)}}}]);
//# sourceMappingURL=913.5f599f921d4ffeee6794.js.map