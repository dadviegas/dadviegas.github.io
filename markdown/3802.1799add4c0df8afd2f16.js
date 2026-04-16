"use strict";(self.webpackChunk_atlantis_markdown=self.webpackChunk_atlantis_markdown||[]).push([[3802],{91826(e,o,a){a.d(o,{WO:()=>Oo});var n=a(27359),t=a(217),i=a(53233),r=a(65723);i.default.button`
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
`;var l=a(77207),s=a(73661),c=a(15959);const d="260px",m="56px",g=i.default.header`
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
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,f=i.default.button`
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
`,p=l.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,h=i.default.button`
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
`,x=i.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${p} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,y=i.default.div`
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
`,b=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.w4.spacing.sm};
  padding: 0 ${t.w4.spacing.lg};
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
`,$=i.default.aside`
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
`,v=i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,A=i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,k=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function j(){return(0,r.jsx)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:k.map((e,o)=>(0,r.jsx)(x,{index:o,accent:e.accent,children:e.char},o))})}const M="atlantis:sidebar-collapsed";function S({sidebar:e,children:o,topBarRight:t,title:i="Atlantis",activeId:l=null}){const[d,m]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(M)}catch{return!1}}),[p,h]=(0,n.useState)(null),x=(0,n.useRef)(),k=()=>m(e=>{const o=!e;try{localStorage.setItem(M,String(o))}catch{}return o}),S=n.useMemo(()=>n.lazy(()=>Promise.resolve().then(a.bind(a,74914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(c.I.Provider,{value:{collapsed:d,toggle:k,flyout:p,openFlyout:(e,o,a)=>{clearTimeout(x.current),h({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{x.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(x.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(g,{children:[e&&(0,r.jsx)(u,{children:(0,r.jsx)(f,{onClick:k,title:d?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(s.A,{size:17})})}),(0,r.jsx)(j,{}),i&&(0,r.jsx)(y,{children:i}),t&&(0,r.jsx)(b,{children:t})]}),(0,r.jsxs)(w,{children:[null!=e&&(0,r.jsx)($,{collapsed:d,children:(0,r.jsx)(v,{children:e})}),(0,r.jsx)(A,{children:o})]}),p&&(0,r.jsx)(n.Suspense,{fallback:null,children:(0,r.jsx)(S,{activeId:l})})]})})}var T=a(20255),B=a(69753),C=a(65185);const E=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,F=i.default.div`
  overflow: hidden;
`,P=i.default.div`
  padding-left: ${t.w4.spacing.md};
`,L=i.default.div`
  display: flex;
  flex-direction: column;
`,R=i.default.button`
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
`,I=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,N=i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,D=i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,H=i.default.button`
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
`;function K({iconKey:e,size:o=16}){if(e&&!(e in C.t))return(0,r.jsx)("span",{style:{fontSize:o,lineHeight:1,display:"flex",alignItems:"center"},children:e});const a=e?C.t[e]??T.A:T.A;return(0,r.jsx)(a,{size:o,strokeWidth:1.75})}function G({entry:e,activeId:o,onSelect:a}){const[t,i]=(0,n.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:m}=(0,c.c)();return e.children&&e.children.length>0?(0,r.jsxs)(L,{children:[(0,r.jsxs)(R,{collapsed:l,onClick:()=>{l||i(e=>!e)},onMouseEnter:l?o=>{const n=o.currentTarget.getBoundingClientRect();s(e,n.top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsxs)(I,{collapsed:l,children:[(0,r.jsx)(K,{iconKey:e.icon,size:16}),(0,r.jsx)(N,{collapsed:l,children:e.name})]}),(0,r.jsx)(D,{open:t,collapsed:l,children:(0,r.jsx)(B.A,{size:13})})]}),(0,r.jsx)(E,{open:t&&!l,children:(0,r.jsx)(F,{children:(0,r.jsx)(P,{children:e.children.map(e=>(0,r.jsx)(G,{entry:e,activeId:o,onSelect:a},e.id))})})})]}):(0,r.jsxs)(H,{active:o===e.id,collapsed:l,onClick:()=>a(e),onMouseEnter:l?o=>{const n=o.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsx)(K,{iconKey:e.icon,size:15}),(0,r.jsx)(N,{collapsed:l,children:e.name})]})}function W({entries:e,activeId:o,onSelect:a}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(G,{entry:e,activeId:o,onSelect:a},e.id))})}const O=l.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${O} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,a(74914);var Y=a(61920),_=a(48607),V=a(68479);i.default.button`
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
`,Y.A,_.A,V.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places),i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,i.default.div`
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
`,i.default.div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,i.default.input`
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
`,i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,i.default.button`
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
`,i.default.div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,i.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,i.default.div`
  position: relative;
`,i.default.button`
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
`,i.default.div`
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
`,i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,i.default.div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
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
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
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
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${t.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,i.default.div`
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
`;const U=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,J=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Z=l.keyframes`
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
  animation: ${U} 0.4s ease 0.15s both;
`,i.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,i.default.div`
  position: absolute;
  inset: 0;
  animation: ${J} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  animation: ${Z} 1.4s ease-in-out infinite;
`,i.default.span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`;var q=a(88641),X=a(41783);function Q(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}const ee=i.default.nav`padding: ${t.w4.spacing.sm} 0;`,oe=i.default.div`
  border-bottom: 1px solid ${t.w4.colors.border}60;
  margin-bottom: 2px;
`,ae=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${t.w4.colors.sidebarText}; }
`,ne=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,te=i.default.span`
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,ie=i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,re=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,le=i.default.div`overflow: hidden;`,se=i.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,ce=i.default.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${t.w4.spacing.md};
  background: ${({active:e})=>e?t.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${t.w4.colors.sidebarHover}; }
`,de=i.default.button`
  opacity: ${({active:e})=>e?1:0};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":t.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;function me({title:e,icon:o,entries:a,activeId:t,onSelect:i,favorites:l,onToggleFav:s,collapsed:c}){const[d,m]=(0,n.useState)(!1);return a.length?(0,r.jsxs)(oe,{children:[(0,r.jsxs)(ae,{collapsed:c,onClick:()=>{c||m(e=>!e)},children:[(0,r.jsxs)(ne,{collapsed:c,children:[o,(0,r.jsx)(te,{collapsed:c,children:e})]}),(0,r.jsx)(ie,{open:d,collapsed:c,children:(0,r.jsx)(B.A,{size:12})})]}),(0,r.jsx)(re,{open:d&&!c,children:(0,r.jsx)(le,{children:a.map(e=>{const o=l.some(o=>o.id===e.id);return(0,r.jsxs)(se,{children:[(0,r.jsx)(ce,{active:t===e.id,onClick:()=>i(e),children:e.name}),(0,r.jsx)(de,{active:o,title:o?"Remover dos favoritos":"Adicionar aos favoritos",onClick:o=>{o.stopPropagation(),s(e)},children:(0,r.jsx)(q.A,{size:12,fill:o?"currentColor":"none"})})]},e.id)})})})]}):null}function ge({config:e,activeId:o,onSelect:a,hashPrefix:t}){const i=`atlantis-recent-${t}`,l=`atlantis-fav-${t}`,{collapsed:s}=(0,c.c)(),[d,m]=(0,n.useState)(()=>Q(i)),[g,u]=(0,n.useState)(()=>Q(l)),f=(0,n.useCallback)(e=>{e.file&&m(o=>function(e,o,a){const n=[o,...a.filter(e=>e.id!==o.id)].slice(0,10);return localStorage.setItem(e,JSON.stringify(n)),n}(i,e,o)),a(e)},[a,i]),p=(0,n.useCallback)(e=>{u(o=>function(e,o,a){const n=a.some(e=>e.id===o.id)?a.filter(e=>e.id!==o.id):[...a,o];return localStorage.setItem(e,JSON.stringify(n)),n}(l,e,o))},[l]);return(0,r.jsxs)(ee,{children:[(0,r.jsx)(me,{title:"Recentes",icon:(0,r.jsx)(X.A,{size:13}),entries:d,activeId:o,onSelect:f,favorites:g,onToggleFav:p,collapsed:s}),(0,r.jsx)(me,{title:"Favoritos",icon:(0,r.jsx)(q.A,{size:13}),entries:g,activeId:o,onSelect:f,favorites:g,onToggleFav:p,collapsed:s}),(0,r.jsx)(W,{entries:e.entries,activeId:o,onSelect:f})]})}var ue=a(28976),fe=a(18055),pe=a(66225),he=a(302),xe=a(39895),ye=a(6930),be=a(14944);const we=i.default.div`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,ze=i.default.div`
  color: #f85149;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: ${t.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let $e=!1;function ve({code:e}){const o=(0,n.useRef)(null),[i,l]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let n=!1;return async function(){const i=(await a.e(774).then(a.bind(a,30774))).default;if($e||(i.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:t.w4.colors.codeBg,primaryColor:t.w4.colors.accent,primaryTextColor:t.w4.colors.mainText,lineColor:t.w4.colors.border}}),$e=!0),o.current&&!n)try{const a=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:t}=await i.render(a,e);!n&&o.current&&(o.current.innerHTML=t)}catch(e){n||l(e instanceof Error?e.message:String(e))}}(),()=>{n=!0}},[e]),i?(0,r.jsx)(we,{children:(0,r.jsxs)(ze,{children:["Mermaid error: ",i]})}):(0,r.jsx)(we,{ref:o})}const Ae=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],ke=i.default.div`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,je=i.default.div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  margin-bottom: ${t.w4.spacing.md};
  text-align: center;
`,Me=i.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  margin-top: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
`,Se=i.default.span`
  display: flex;
  align-items: center;
  gap: 6px;
`,Te=i.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,Be=i.default.div`
  color: #f85149;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: ${t.w4.typography.fontSizeSm};
`;function Ce(e){if(e<=0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/o)*o}function Ee({labels:e,data:o,colors:a}){const n=176,i=Ce(Math.max(...o,1)),l=Math.min(40,340/e.length*.6),s=340/e.length,c=Array.from({length:6},(e,o)=>i/5*o);return(0,r.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,o)=>{const a=192-e/i*n;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:t.w4.colors.border,strokeWidth:.5,strokeDasharray:0===o?"none":"3,3"}),(0,r.jsx)("text",{x:38,y:a+4,fill:t.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:t.w4.typography.fontFamily,children:Math.round(e)})]},o)}),o.map((o,c)=>{const d=44+s*c+s/2-l/2,m=o/i*n,g=192-m,u=a[c%a.length];return(0,r.jsxs)("g",{children:[(0,r.jsxs)("rect",{x:d,y:g,width:l,height:m,rx:3,fill:u,opacity:.85,children:[(0,r.jsx)("animate",{attributeName:"height",from:"0",to:m,dur:"0.5s",fill:"freeze"}),(0,r.jsx)("animate",{attributeName:"y",from:192,to:g,dur:"0.5s",fill:"freeze"})]}),(0,r.jsx)("text",{x:d+l/2,y:g-4,fill:t.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:o}),(0,r.jsx)("text",{x:44+s*c+s/2,y:208,fill:t.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:e[c].length>8?e[c].slice(0,7)+"…":e[c]})]},c)})]})}function Fe({labels:e,data:o,colors:a}){const n=o.reduce((e,o)=>e+o,0)||1;let i=-Math.PI/2;const l=o.map((e,o)=>{const l=e/n*Math.PI*2,s=i;i+=l;const c=i,d=120+90*Math.cos(s),m=120+90*Math.sin(s),g=120+90*Math.cos(c),u=120+90*Math.sin(c),f=l>Math.PI?1:0,p=s+l/2,h=120+58.5*Math.cos(p),x=120+58.5*Math.sin(p),y=Math.round(e/n*100);return(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{d:`M 120 120 L ${d} ${m} A 90 90 0 ${f} 1 ${g} ${u} Z`,fill:a[o%a.length],stroke:t.w4.colors.codeBg,strokeWidth:2,opacity:.85}),y>=5&&(0,r.jsxs)("text",{x:h,y:x+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:[y,"%"]})]},o)});return(0,r.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:l})}function Pe({labels:e,data:o,colors:a}){const n=176,i=Ce(Math.max(...o,1)),l=o.length>1?340/(o.length-1):340,s=a[0],c=o.map((e,o)=>({x:44+l*o,y:192-e/i*n})),d=c.map((e,o)=>`${0===o?"M":"L"} ${e.x} ${e.y}`).join(" "),m=Array.from({length:6},(e,o)=>i/5*o);return(0,r.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[m.map((e,o)=>{const a=192-e/i*n;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:t.w4.colors.border,strokeWidth:.5,strokeDasharray:0===o?"none":"3,3"}),(0,r.jsx)("text",{x:38,y:a+4,fill:t.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:t.w4.typography.fontFamily,children:Math.round(e)})]},o)}),(0,r.jsx)("path",{d,fill:"none",stroke:s,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((a,n)=>(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:a.x,cy:a.y,r:4,fill:s,stroke:t.w4.colors.codeBg,strokeWidth:2}),(0,r.jsx)("text",{x:a.x,y:a.y-10,fill:t.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:o[n]}),(0,r.jsx)("text",{x:a.x,y:208,fill:t.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:e[n].length>8?e[n].slice(0,7)+"…":e[n]})]},n))]})}function Le({code:e}){const o=(0,n.useMemo)(()=>function(e){const o=e.trim().split("\n");let a,n,t="bar",i=[],r=[];for(const e of o){const[o,...l]=e.split(":"),s=l.join(":").trim();if(s)switch(o.trim().toLowerCase()){case"type":["bar","pie","line"].includes(s.toLowerCase())&&(t=s.toLowerCase());break;case"title":a=s;break;case"labels":i=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":r=s.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":n=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return i.length&&r.length?{type:t,title:a,labels:i,data:r,colors:n}:null}(e),[e]);if(!o)return(0,r.jsx)(ke,{children:(0,r.jsx)(Be,{children:"Invalid chart data"})});const a=o.colors??Ae;return(0,r.jsxs)(ke,{children:[o.title&&(0,r.jsx)(je,{children:o.title}),"bar"===o.type&&(0,r.jsx)(Ee,{labels:o.labels,data:o.data,colors:a}),"pie"===o.type&&(0,r.jsx)(Fe,{labels:o.labels,data:o.data,colors:a}),"line"===o.type&&(0,r.jsx)(Pe,{labels:o.labels,data:o.data,colors:a}),(0,r.jsx)(Me,{children:o.labels.map((e,o)=>(0,r.jsxs)(Se,{children:[(0,r.jsx)(Te,{color:a[o%a.length]}),e]},o))})]})}const Re=i.default.div`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${t.w4.spacing.md};
`,Ie=i.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,Ne=i.default.div`
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,De=i.default.div`
  display: flex;
  gap: ${t.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,He=i.default.button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${t.w4.colors.accent};
    color: ${t.w4.colors.accent};
  }
`,Ke=i.default.div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  text-align: center;
`,Ge=i.default.div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  text-align: center;
`;function We(e){return e.toString().padStart(2,"0")}function Oe(e,o,a){if("pt"===a){const a=1===e?"1 hora":`${e} horas`;return 0===o?a:15===o?`${a} e um quarto`:30===o?`${a} e meia`:45===o?`um quarto para as ${12===e?1:e+1}`:`${a} e ${o} minutos`}const n=e<12?"AM":"PM",t=e%12||12;return 0===o?`${t} o'clock ${n}`:15===o?`quarter past ${t} ${n}`:30===o?`half past ${t} ${n}`:45===o?`quarter to ${t%12+1} ${n}`:`${t}:${We(o)} ${n}`}function Ye({hours:e,minutes:o,seconds:a}){const n=100,i=100,l=e=>e*Math.PI/180,s=a/60*360-90,c=o/60*360+a/60*6-90,d=e%12/12*360+o/60*30-90,m=n+61*Math.cos(l(s)),g=i+61*Math.sin(l(s)),u=n+65*Math.cos(l(c)),f=i+65*Math.sin(l(c)),p=n+45*Math.cos(l(d)),h=i+45*Math.sin(l(d));return(0,r.jsxs)("svg",{viewBox:"0 0 200 200",width:200,height:200,children:[(0,r.jsx)("circle",{cx:n,cy:i,r:85,fill:t.w4.colors.surface,stroke:t.w4.colors.border,strokeWidth:2}),Array.from({length:12},(e,o)=>{const a=o+1,s=a/12*360-90,c=n+69*Math.cos(l(s)),d=i+69*Math.sin(l(s));return(0,r.jsx)("text",{x:c,y:d+4,fill:t.w4.colors.mainText,fontSize:14,fontWeight:600,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:a},a)}),Array.from({length:60},(e,o)=>{const a=o/60*360-90,s=o%5==0,c=s?75:79;return(0,r.jsx)("line",{x1:n+c*Math.cos(l(a)),y1:i+c*Math.sin(l(a)),x2:n+83*Math.cos(l(a)),y2:i+83*Math.sin(l(a)),stroke:s?t.w4.colors.mainTextMuted:t.w4.colors.border,strokeWidth:s?2:1},o)}),(0,r.jsx)("line",{x1:n,y1:i,x2:p,y2:h,stroke:t.w4.colors.mainText,strokeWidth:4,strokeLinecap:"round"}),(0,r.jsx)("line",{x1:n,y1:i,x2:u,y2:f,stroke:t.w4.colors.accent,strokeWidth:2.5,strokeLinecap:"round"}),(0,r.jsx)("line",{x1:n-12*Math.cos(l(s)),y1:i-12*Math.sin(l(s)),x2:m,y2:g,stroke:"#f87171",strokeWidth:1.2,strokeLinecap:"round"}),(0,r.jsx)("circle",{cx:n,cy:i,r:4,fill:t.w4.colors.accent}),(0,r.jsx)("circle",{cx:n,cy:i,r:2,fill:"#f87171"})]})}function _e({code:e}){const o=function(e){let o="pt";for(const a of e.trim().split("\n")){const[e,...n]=a.split(":"),t=n.join(":").trim();"locale"===e.trim().toLowerCase()&&(o=t.toLowerCase())}return{locale:o}}(e),[a,t]=(0,n.useState)("live"),[i,l]=(0,n.useState)(()=>(new Date).getHours()),[s,c]=(0,n.useState)(()=>(new Date).getMinutes()),[d,m]=(0,n.useState)(()=>(new Date).getSeconds());(0,n.useEffect)(()=>{if("live"!==a)return;const e=()=>{const e=new Date;l(e.getHours()),c(e.getMinutes()),m(e.getSeconds())};e();const o=setInterval(e,1e3);return()=>clearInterval(o)},[a]);const g=(0,n.useCallback)(e=>{t("manual"),m(0),l(o=>((o+e)%24+24)%24)},[]),u=(0,n.useCallback)(e=>{t("manual"),m(0),c(o=>((o+e)%60+60)%60)},[]),f=(0,n.useCallback)(()=>t("live"),[]);return(0,r.jsxs)(Re,{children:[(0,r.jsxs)(Ie,{children:[(0,r.jsx)(Ye,{hours:i,minutes:s,seconds:d}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(Ne,{children:[We(i),":",We(s),(0,r.jsxs)("span",{style:{fontSize:"24px",opacity:.5},children:[":",We(d)]})]}),(0,r.jsx)(Ge,{children:Oe(i%12||12,s,o.locale)})]})]}),(0,r.jsxs)(De,{children:[(0,r.jsx)(He,{onClick:()=>g(-1),children:"−1h"}),(0,r.jsx)(He,{onClick:()=>g(1),children:"+1h"}),(0,r.jsx)(He,{onClick:()=>u(-15),children:"−15m"}),(0,r.jsx)(He,{onClick:()=>u(15),children:"+15m"}),(0,r.jsx)(He,{onClick:()=>u(-5),children:"−5m"}),(0,r.jsx)(He,{onClick:()=>u(5),children:"+5m"}),(0,r.jsx)(He,{active:"live"===a,onClick:f,children:"pt"===o.locale?"Agora":"Now"})]}),(0,r.jsx)(Ke,{children:"pt"===o.locale?"Usa os botões para mudar as horas e os minutos!":"Use the buttons to change the hours and minutes!"}),(0,r.jsx)(De,{children:[{label:"3:00",h:3,m:0},{label:"6:30",h:6,m:30},{label:"9:15",h:9,m:15},{label:"12:00",h:12,m:0},{label:"13:45",h:13,m:45},{label:"15:30",h:15,m:30},{label:"19:00",h:19,m:0},{label:"23:15",h:23,m:15}].map(e=>(0,r.jsx)(He,{onClick:()=>{t("manual"),l(e.h),c(e.m)},children:e.label},e.label))})]})}var Ve=a(68383),Ue=a(21426),Je=a(25609),Ze=a(20320);const qe=i.default.div`
  margin: ${t.w4.spacing.lg} 0;
  border-radius: ${t.w4.borderRadius.md};
  border: 1px solid ${t.w4.colors.codeBorder};
  overflow: hidden;
`,Xe=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${t.w4.colors.codeBorder};
`,Qe=i.default.span`
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,eo=i.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":t.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${t.w4.colors.sidebarText}; border-color: ${t.w4.colors.sidebarText}; }
`,oo={...Ue.A,'pre[class*="language-"]':{...Ue.A['pre[class*="language-"]'],background:t.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...Ue.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function ao({lang:e="text",code:o}){const[a,i]=(0,n.useState)(!1);return(0,r.jsxs)(qe,{children:[(0,r.jsxs)(Xe,{children:[(0,r.jsx)(Qe,{children:e}),(0,r.jsxs)(eo,{copied:a,onClick:()=>{navigator.clipboard.writeText(o).then(()=>{i(!0),setTimeout(()=>i(!1),2e3)})},children:[a?(0,r.jsx)(Je.A,{size:12}):(0,r.jsx)(Ze.A,{size:12}),a?"Copied!":"Copy"]})]}),(0,r.jsx)(Ve.A,{language:e,style:oo,showLineNumbers:o.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:t.w4.colors.codeBg},wrapLongLines:!1,children:o})]})}var no=a(65569),to=a(8218),io=a(57230),ro=a(22966),lo=a(21069);const so={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:no.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:to.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:io.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:ro.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:lo.A,label:"Caution",color:"#f85149"}},co=i.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
`,mo=i.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${t.w4.typography.fontFamily};
  margin-bottom: ${t.w4.spacing.sm};
`,go=i.default.div`
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function uo({type:e,children:o}){const a=so[e]??so.NOTE,n=a.icon;return(0,r.jsxs)(co,{bg:a.bg,border:a.border,children:[(0,r.jsxs)(mo,{color:a.color,children:[(0,r.jsx)(n,{size:15,strokeWidth:2}),a.label]}),(0,r.jsx)(go,{children:o})]})}const fo=i.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${t.w4.spacing.xxl} 0 ${t.w4.spacing.xxl} ${t.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,po=i.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-bottom: ${t.w4.spacing.md};
`,ho=i.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,xo=i.default.a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${t.w4.typography.fontSizeSm};
  font-family: ${t.w4.typography.fontFamily};
  color: ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?t.w4.colors.accent:"transparent"};
  border-radius: 0 ${t.w4.borderRadius.sm} ${t.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${t.w4.colors.mainText}; background: ${t.w4.colors.sidebarHover}; }
`;function yo({headings:e,activeId:o}){return e.length<2?null:(0,r.jsxs)(fo,{children:[(0,r.jsx)(po,{children:"On this page"}),(0,r.jsx)(ho,{children:e.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(xo,{href:`#${e.id}`,active:o===e.id,level:e.level,onClick:o=>{o.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function bo(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function wo(e){const{Children:o,isValidElement:n}=a(27359);return o.toArray(e).map(e=>"string"==typeof e?e:"number"==typeof e?String(e):n(e)?wo(e.props.children??""):"").join("")}function zo(){return e=>{!function e(o){if("blockquote"===o.type){const e=o.children?.[0];if("paragraph"===e?.type){const a=e.children?.[0];if("text"===a?.type){const n=a.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);n&&(a.value=a.value.slice(n[0].length),a.value.trim()||1!==e.children.length||o.children.shift(),o.data=o.data??{},o.data.hName="div",o.data.hProperties={"data-callout":n[1].toUpperCase()})}}}o.children?.forEach(e)}(e)}}const $o=i.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${t.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,vo=i.default.div`flex: 1; min-width: 0;`,Ao=i.default.article`
  padding: ${t.w4.spacing.xxl} 0;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeMd};
  line-height: ${t.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${t.w4.spacing.xl} 0 ${t.w4.spacing.md};
    color: ${t.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${t.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${t.w4.typography.fontSizeXl}; border-bottom: 1px solid ${t.w4.colors.border}; padding-bottom: ${t.w4.spacing.sm}; }
  h2 { font-size: ${t.w4.typography.fontSizeLg}; border-bottom: 1px solid ${t.w4.colors.border}; padding-bottom: ${t.w4.spacing.xs}; }
  h3 { font-size: ${t.w4.typography.fontSizeMd}; }

  p { margin: ${t.w4.spacing.md} 0; }

  a { color: ${t.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${t.w4.colors.accentHover}; } }

  ul, ol { margin: ${t.w4.spacing.md} 0; padding-left: ${t.w4.spacing.xl}; }
  li { margin: ${t.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${t.w4.colors.border};
    margin: ${t.w4.spacing.lg} 0;
    padding: ${t.w4.spacing.sm} ${t.w4.spacing.lg};
    background: ${t.w4.colors.surface};
    color: ${t.w4.colors.mainTextMuted};
    border-radius: 0 ${t.w4.borderRadius.sm} ${t.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${t.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${t.w4.colors.codeBg};
    border: 1px solid ${t.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${t.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${t.w4.spacing.lg} 0; font-size: ${t.w4.typography.fontSizeBase}; }
  th, td { padding: ${t.w4.spacing.sm} ${t.w4.spacing.md}; border: 1px solid ${t.w4.colors.border}; text-align: left; }
  th { background: ${t.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${t.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${t.w4.colors.border}; margin: ${t.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${t.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${t.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${t.w4.spacing.lg} 0; }
`,ko=i.default.div`
  display: flex;
  gap: ${t.w4.spacing.lg};
  padding: ${t.w4.spacing.xxl} 0;
  border-top: 1px solid ${t.w4.colors.border};
  margin-top: ${t.w4.spacing.xxl};
`,jo=i.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.lg};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${t.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,Mo=i.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${t.w4.colors.sidebarTextMuted}; font-family: ${t.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,So=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase}; color: ${t.w4.colors.accent};
  font-family: ${t.w4.typography.fontFamily}; font-weight: 500;
`,To=i.default.div`
  color: ${t.w4.colors.mainTextMuted};
  padding: ${t.w4.spacing.xxl} ${t.w4.spacing.xl};
  font-family: ${t.w4.typography.fontFamily};
`;function Bo(e){return function({children:o,...a}){const n=`h${e}`,t=wo(o),i=bo(t);return(0,r.jsxs)(n,{id:i,...a,children:[o,(0,r.jsx)("a",{className:"heading-anchor",href:`#${i}`,"aria-label":`Link to "${t}"`,children:(0,r.jsx)(pe.A,{size:14})})]})}}function Co({file:e,prevEntry:o,nextEntry:t,onNavigate:i}){const[l,s]=(0,n.useState)(null),[c,d]=(0,n.useState)(null),m=(0,n.useRef)(null);if((0,n.useEffect)(()=>{s(null),fetch(`${a.p}content/${e}`).then(e=>{if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);return e.text()}).then(s).catch(o=>s(`> **Error loading \`${e}\`:** ${o.message}`))},[e]),(0,n.useEffect)(()=>{if(!l||!m.current)return;const e=m.current.querySelectorAll("h2[id], h3[id]");if(!e.length)return;const o=new IntersectionObserver(e=>{const o=e.filter(e=>e.isIntersecting);o.length&&d(o[0].target.id)},{rootMargin:"-10% 0% -60% 0%",threshold:0});return e.forEach(e=>o.observe(e)),()=>o.disconnect()},[l]),null===l)return(0,r.jsx)(To,{children:"Loading…"});const g=function(e){const o=[],a=/^(#{2,3})\s+(.+)$/gm;let n;for(;null!==(n=a.exec(e));){const e=n[1].length,a=n[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");o.push({level:e,text:a,id:bo(a)})}return o}(l),u=o||t;return(0,r.jsxs)($o,{children:[(0,r.jsxs)(vo,{children:[(0,r.jsx)(Ao,{ref:m,children:(0,r.jsx)(ue.oz,{remarkPlugins:[fe.A,be.A,zo],rehypePlugins:[xe.A,ye.A],components:{div({node:e,children:o,...a}){const n=a["data-callout"];return n?(0,r.jsx)(uo,{type:n,children:o}):(0,r.jsx)("div",{...a,children:o})},h1:Bo(1),h2:Bo(2),h3:Bo(3),h4:Bo(4),pre:({children:e})=>(0,r.jsx)(r.Fragment,{children:e}),code({className:e,children:o}){const a=/language-(\w+)/.exec(e??"")?.[1],n=String(o).replace(/\n$/,"");return"mermaid"===a?(0,r.jsx)(ve,{code:n}):"chart"===a?(0,r.jsx)(Le,{code:n}):"clock"===a?(0,r.jsx)(_e,{code:n}):a||n.includes("\n")?(0,r.jsx)(ao,{lang:a,code:n}):(0,r.jsx)("code",{className:e,children:o})}},children:l})}),u&&(0,r.jsxs)(ko,{children:[o?(0,r.jsxs)(jo,{align:"left",onClick:()=>i?.(o),children:[(0,r.jsxs)(Mo,{children:[(0,r.jsx)(he.A,{size:13})," Previous"]}),(0,r.jsx)(So,{children:o.name})]}):(0,r.jsx)("div",{style:{flex:1}}),t?(0,r.jsxs)(jo,{align:"right",onClick:()=>i?.(t),children:[(0,r.jsxs)(Mo,{children:["Next ",(0,r.jsx)(B.A,{size:13})]}),(0,r.jsx)(So,{children:t.name})]}):(0,r.jsx)("div",{style:{flex:1}})]})]}),(0,r.jsx)(yo,{headings:g,activeId:c})]})}function Eo(e,o){for(const a of e){if(a.id===o)return a;if(a.children){const e=Eo(a.children,o);if(e)return e}}}function Fo(e){return e.flatMap(e=>e.children?Fo(e.children):e.file?[e]:[])}const Po=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${t.w4.typography.fontFamily};
  background: ${t.w4.colors.mainBg};
`,Lo=i.default.div`
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
`,Ro=i.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${t.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${t.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,Io=i.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,No=i.default.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${t.w4.colors.mainText} 0%,
    ${t.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,Do=i.default.p`
  font-size: ${t.w4.typography.fontSizeMd};
  color: ${t.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,Ho=i.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,Ko={en:"Browse the sidebar",pt:"Explora o menu lateral"};function Go({title:e,sub:o,lang:a}){return(0,r.jsxs)(Po,{children:[(0,r.jsx)(Ro,{}),(0,r.jsx)(Lo,{size:500,x:10,y:-10,hue:210,dur:7}),(0,r.jsx)(Lo,{size:400,x:60,y:50,hue:270,dur:9}),(0,r.jsx)(Lo,{size:300,x:30,y:70,hue:190,dur:6}),(0,r.jsxs)(Io,{children:[(0,r.jsx)(No,{children:e}),(0,r.jsx)(Do,{children:o}),(0,r.jsxs)(Ho,{children:[(0,r.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"15 18 9 12 15 6"})}),Ko[a]??Ko.en]})]})]})}function Wo(e,o,a){return"string"==typeof e?e:e[o]??e[a]??Object.values(e)[0]??""}function Oo({navigation:e,languages:o,defaultLang:a,locale:t,hashPrefix:i,topBarRight:l,welcomeTitle:s="Blog",welcomeSub:c="Notes, guides, and references — pick a topic from the sidebar to get started."}){const d=o?Object.keys(o):[],[m,g]=(d.length,(0,n.useState)(()=>a??d[0]??""));(0,n.useEffect)(()=>{t&&d.includes(t)&&t!==m&&g(t)},[t]);const u=(0,n.useMemo)(()=>o&&m?o[m].navigation:e??{entries:[]},[o,e,m]),f=((0,n.useMemo)(()=>Fo(u.entries),[u]),(0,n.useCallback)(e=>{const o=e.match(new RegExp(`^#\\/${i}\\/(.+)$`));if(o)return Eo(u.entries,o[1])},[u,i])),[p,h]=(0,n.useState)(()=>f(window.location.hash)??null);(0,n.useEffect)(()=>{if(!p)return;const e=Eo(u.entries,p.id);h(e??null)},[m,u]),(0,n.useEffect)(()=>{const e=()=>{const e=f(window.location.hash);e&&h(e)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[f]);const x=(0,n.useCallback)(e=>{e.file&&(h(e),window.location.hash=`#/${i}/${e.id}`)},[i]),y=(0,n.useMemo)(()=>Fo(u.entries),[u]),b=y.findIndex(e=>e.id===p?.id),w=b>0?y[b-1]:null,z=b<y.length-1?y[b+1]:null,$=p?.label??p?.name??i,v=Wo(s,m,a??d[0]??""),A=Wo(c,m,a??d[0]??"");return(0,r.jsx)(S,{title:$,activeId:p?.id??null,topBarRight:l,sidebar:(0,r.jsx)(ge,{config:u,activeId:p?.id??null,onSelect:x,hashPrefix:i}),children:p?.file?(0,r.jsx)(Co,{file:p.file,prevEntry:w,nextEntry:z,onNavigate:x}):(0,r.jsx)(Go,{title:v,sub:A,lang:m})})}i.default.div`
  display: flex;
  gap: 4px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 2px;
`,i.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${t.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?t.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainText};
  }
`},74914(e,o,a){a.d(o,{FlyoutPanel:()=>x});var n=a(27359),t=a(53233),i=a(77207),r=a(20255),l=a(217),s=a(15959),c=a(65185),d=a(65723);const m=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=t.default.div`
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
`,u=t.default.div`
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
`,f=t.default.button`
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
`;function p({iconKey:e}){const o=e?c.t[e]??r.A:r.A;return(0,d.jsx)(o,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:o,onSelect:a}){return(0,d.jsx)(d.Fragment,{children:e.map(e=>e.children?(0,d.jsx)(n.Fragment,{children:(0,d.jsx)(h,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,d.jsxs)(f,{active:o===e.id,onClick:()=>a(e),children:[(0,d.jsx)(p,{iconKey:e.icon}),e.name]},e.id))})}function x({activeId:e}){const{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:n}=(0,s.c)();if(!o)return null;const t=o.entry.icon?c.t[o.entry.icon]??r.A:r.A;return(0,d.jsxs)(g,{anchorY:o.anchorY,onMouseEnter:n,onMouseLeave:a,children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(t,{size:13,strokeWidth:2}),o.entry.name]}),(0,d.jsx)(h,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},15959(e,o,a){a.d(o,{I:()=>t,c:()=>i});var n=a(27359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},65185(e,o,a){a.d(o,{t:()=>ne});var n=a(49510),t=a(99038),i=a(57400),r=a(28207),l=a(87902),s=a(36896),c=a(37901),d=a(39848),m=a(22164),g=a(3045),u=a(43775),f=a(83539),p=a(41783),h=a(1837),x=a(84494),y=a(82314),b=a(35751),w=a(20255),z=a(69633),$=a(92946),v=a(40822),A=a(36720),k=a(43317),j=a(52709),M=a(89301),S=a(83517),T=a(37032),B=a(6949),C=a(8218),E=a(36829),F=a(15553),P=a(59591),L=a(72820),R=a(14621),I=a(72534),N=a(66673),D=a(49033),H=a(31365),K=a(62937),G=a(65912),W=a(80158),O=a(88641),Y=a(48607),_=a(83249),V=a(1821),U=a(15889),J=a(27170),Z=a(19161),q=a(71849),X=a(61187),Q=a(77747),ee=a(2932),oe=a(24525),ae=a(57230);const ne={activity:s.A,"a-large-small":l.A,"bar-chart-2":n.A,book:d.A,"book-open":c.A,briefcase:g.A,calendar:u.A,clock:p.A,"circle-dot":f.A,compass:h.A,droplets:x.A,feather:y.A,file:w.A,"file-text":b.A,folder:z.A,"git-branch":$.A,github:v.A,globe:A.A,grid:i.A,hash:k.A,heart:j.A,hexagon:M.A,landmark:S.A,layers:r.A,"layout-grid":T.A,leaf:B.A,lightbulb:C.A,list:E.A,map:P.A,"map-pin":F.A,"message-square":L.A,minus:R.A,mountain:I.A,package:N.A,"pen-tool":D.A,"pie-chart":t.A,plus:H.A,ruler:K.A,slash:G.A,square:W.A,star:O.A,sun:Y.A,terminal:_.A,thermometer:V.A,triangle:U.A,truck:J.A,type:Z.A,users:q.A,waves:X.A,wind:Q.A,wrench:ee.A,x:oe.A,zap:ae.A,bot:m.A}},217(e,o,a){a.d(o,{w4:()=>t});const n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#7a8599",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.15)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#2a3040",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1a2030",success:"#34d399",warning:"#fbbf24",danger:"#f87171"},t={colors:function(){const e={};for(const o of Object.keys(n))e[o]=`var(--at-${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},14231(e){e.exports=JSON.parse('{"entries":[{"id":"guides","name":"Guides","icon":"compass","children":[{"id":"diagrams","name":"Diagrams with Mermaid","label":"Guides — Mermaid Diagrams","icon":"git-branch","file":"guides/diagrams.md"}]},{"id":"github","name":"GitHub","icon":"github","children":[{"id":"github-cli","name":"GitHub CLI (gh)","label":"GitHub — CLI Reference","icon":"terminal","file":"github/cli.md"},{"id":"github-actions","name":"GitHub Actions","label":"GitHub — Actions","icon":"zap","file":"github/actions.md"}]},{"id":"claude","name":"Claude AI","icon":"bot","children":[{"id":"claude-best-practices","name":"Best Practices","label":"Claude AI — Best Practices","icon":"lightbulb","file":"claude/best-practices.md"},{"id":"claude-prompts","name":"Prompt Tips","label":"Claude AI — Prompt Tips","icon":"message-square","file":"claude/prompts.md"}]},{"id":"devtools","name":"Developer Tools","icon":"wrench","children":[{"id":"devtools-extensions","name":"Useful Extensions","label":"Dev Tools — Extensions","icon":"layout-grid","file":"devtools/extensions.md"},{"id":"devtools-commands","name":"Useful Commands","label":"Dev Tools — Commands","icon":"terminal","file":"devtools/commands.md"}]}]}')}}]);
//# sourceMappingURL=3802.1799add4c0df8afd2f16.js.map