"use strict";(self.webpackChunk_atlantis_markdown=self.webpackChunk_atlantis_markdown||[]).push([[7053],{27915(e,o,a){a.d(o,{WO:()=>Da});var t=a(27359),n=a(217),i=a(53233),r=a(65723);i.default.button`
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
`,i.default.div`
  position: relative;
`;var l=a(77207),s=a(73661),c=a(15959);const d="260px",m="56px",g=i.default.header`
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
`,p=i.default.div`
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,u=i.default.button`
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
`,h=i.default.button`
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
`,x=i.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${f} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,y=i.default.div`
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
`,b=i.default.div`
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
`,w=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=i.default.div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,$=i.default.aside`
  width: ${({collapsed:e})=>e?m:d};
  min-width: ${({collapsed:e})=>e?m:d};
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
`,v=i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,k=i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function j(){return(0,r.jsx)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,o)=>(0,r.jsx)(x,{index:o,accent:e.accent,children:e.char},o))})}const S="atlantis:sidebar-collapsed";function M({sidebar:e,children:o,topBarRight:n,title:i="Atlantis",activeId:l=null}){const[d,m]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(S)}catch{return!1}}),[f,h]=(0,t.useState)(null),x=(0,t.useRef)(),A=()=>m(e=>{const o=!e;try{localStorage.setItem(S,String(o))}catch{}return o}),M=t.useMemo(()=>t.lazy(()=>Promise.resolve().then(a.bind(a,74914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(c.I.Provider,{value:{collapsed:d,toggle:A,flyout:f,openFlyout:(e,o,a)=>{clearTimeout(x.current),h({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{x.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(x.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(g,{children:[e&&(0,r.jsx)(p,{children:(0,r.jsx)(u,{onClick:A,title:d?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(s.A,{size:17})})}),(0,r.jsx)(j,{}),i&&(0,r.jsx)(y,{children:i}),n&&(0,r.jsx)(b,{children:n})]}),(0,r.jsxs)(w,{children:[null!=e&&(0,r.jsx)($,{collapsed:d,children:(0,r.jsx)(v,{children:e})}),(0,r.jsx)(k,{children:o})]}),f&&(0,r.jsx)(t.Suspense,{fallback:null,children:(0,r.jsx)(M,{activeId:l})})]})})}var T=a(20255),C=a(69753),B=a(65185);const E=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,F=i.default.div`
  overflow: hidden;
`,P=i.default.div`
  padding-left: ${n.w4.spacing.md};
`,R=i.default.div`
  display: flex;
  flex-direction: column;
`,L=i.default.button`
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
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,H=i.default.button`
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
`;function K({iconKey:e,size:o=16}){if(e&&!(e in B.t))return(0,r.jsx)("span",{style:{fontSize:o,lineHeight:1,display:"flex",alignItems:"center"},children:e});const a=e?B.t[e]??T.A:T.A;return(0,r.jsx)(a,{size:o,strokeWidth:1.75})}function G({entry:e,activeId:o,onSelect:a}){const[n,i]=(0,t.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:m}=(0,c.c)();return e.children&&e.children.length>0?(0,r.jsxs)(R,{children:[(0,r.jsxs)(L,{collapsed:l,onClick:()=>{l||i(e=>!e)},onMouseEnter:l?o=>{const t=o.currentTarget.getBoundingClientRect();s(e,t.top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsxs)(I,{collapsed:l,children:[(0,r.jsx)(K,{iconKey:e.icon,size:16}),(0,r.jsx)(N,{collapsed:l,children:e.name})]}),(0,r.jsx)(D,{open:n,collapsed:l,children:(0,r.jsx)(C.A,{size:13})})]}),(0,r.jsx)(E,{open:n&&!l,children:(0,r.jsx)(F,{children:(0,r.jsx)(P,{children:e.children.map(e=>(0,r.jsx)(G,{entry:e,activeId:o,onSelect:a},e.id))})})})]}):(0,r.jsxs)(H,{active:o===e.id,collapsed:l,onClick:()=>a(e),onMouseEnter:l?o=>{const t=o.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},t.top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsx)(K,{iconKey:e.icon,size:15}),(0,r.jsx)(N,{collapsed:l,children:e.name})]})}function W({entries:e,activeId:o,onSelect:a}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(G,{entry:e,activeId:o,onSelect:a},e.id))})}const O=l.keyframes`
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
`,i.default.span`
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
`,a(74914);var Y=a(61920),_=a(48607),V=a(68479);i.default.button`
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
`,i.default.div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,i.default.input`
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
`,i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,i.default.button`
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
`,i.default.div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,i.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,i.default.div`
  position: relative;
`,i.default.button`
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
`,i.default.div`
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
`,i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,i.default.div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
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
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
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
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${n.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,new Set([10751]),new Set([27]),i.default.div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,i.default.section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,i.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,i.default.header`
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
`,i.default.button`
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
`,i.default.span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,i.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,i.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
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
`,q=l.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
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
  background: ${n.w4.colors.border};
  animation: ${q} 1.4s ease-in-out infinite;
`,i.default.span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,i.default.nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${n.w4.spacing.sm} 0;
`,i.default.div`
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
  ${({collapsed:e})=>e&&"\n    font-size: 0;\n    padding: 0;\n    margin: 0;\n    height: 0;\n  "}
`,i.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&"\n    justify-content: center;\n    padding: 8px;\n    margin: 0 4px;\n  "}
`,i.default.span`
  font-size: 15px;
  line-height: 1;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
`,i.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;var Z=a(17681),X=a(88641),Q=a(41783);function ee(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}const oe=i.default.nav`padding: ${n.w4.spacing.sm} 0;`,ae=i.default.div`
  border-bottom: 1px solid ${n.w4.colors.border}60;
  margin-bottom: 2px;
`,te=i.default.button`
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
`,ne=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,ie=i.default.span`
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,re=i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,le=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,se=i.default.div`overflow: hidden;`,ce=i.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,de=i.default.button`
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
`,me=i.default.button`
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
`;function ge({title:e,icon:o,entries:a,activeId:n,onSelect:i,favorites:l,onToggleFav:s,collapsed:c}){const[d,m]=(0,t.useState)(!1);return a.length?(0,r.jsxs)(ae,{children:[(0,r.jsxs)(te,{collapsed:c,onClick:()=>{c||m(e=>!e)},children:[(0,r.jsxs)(ne,{collapsed:c,children:[o,(0,r.jsx)(ie,{collapsed:c,children:e})]}),(0,r.jsx)(re,{open:d,collapsed:c,children:(0,r.jsx)(C.A,{size:12})})]}),(0,r.jsx)(le,{open:d&&!c,children:(0,r.jsx)(se,{children:a.map(e=>{const o=l.some(o=>o.id===e.id);return(0,r.jsxs)(ce,{children:[(0,r.jsx)(de,{active:n===e.id,onClick:()=>i(e),children:e.name}),(0,r.jsx)(me,{active:o,title:o?"Remover dos favoritos":"Adicionar aos favoritos",onClick:o=>{o.stopPropagation(),s(e)},children:(0,r.jsx)(X.A,{size:12,fill:o?"currentColor":"none"})})]},e.id)})})})]}):null}function pe({config:e,activeId:o,onSelect:a,hashPrefix:n}){const i=`atlantis-recent-${n}`,l=`atlantis-fav-${n}`,{collapsed:s}=(0,c.c)(),[d,m]=(0,t.useState)(()=>ee(i)),[g,p]=(0,t.useState)(()=>ee(l)),u=(0,t.useCallback)(e=>{e.file&&m(o=>function(e,o,a){const t=[o,...a.filter(e=>e.id!==o.id)].slice(0,10);return localStorage.setItem(e,JSON.stringify(t)),t}(i,e,o)),a(e)},[a,i]),f=(0,t.useCallback)(e=>{p(o=>function(e,o,a){const t=a.some(e=>e.id===o.id)?a.filter(e=>e.id!==o.id):[...a,o];return localStorage.setItem(e,JSON.stringify(t)),t}(l,e,o))},[l]);return(0,r.jsxs)(oe,{children:[(0,r.jsx)(ge,{title:"Recentes",icon:(0,r.jsx)(Q.A,{size:13}),entries:d,activeId:o,onSelect:u,favorites:g,onToggleFav:f,collapsed:s}),(0,r.jsx)(ge,{title:"Favoritos",icon:(0,r.jsx)(X.A,{size:13}),entries:g,activeId:o,onSelect:u,favorites:g,onToggleFav:f,collapsed:s}),(0,r.jsx)(W,{entries:e.entries,activeId:o,onSelect:u})]})}var ue=a(28976),fe=a(18055),he=a(66225),xe=a(302),ye=a(39895),be=a(6930),we=a(14944);const ze=i.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,$e=i.default.div`
  color: #f85149;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let ve=!1;function ke({code:e}){const o=(0,t.useRef)(null),[i,l]=(0,t.useState)(null);return(0,t.useEffect)(()=>{let t=!1;return async function(){const i=(await a.e(774).then(a.bind(a,30774))).default;if(ve||(i.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:n.w4.colors.codeBg,primaryColor:n.w4.colors.accent,primaryTextColor:n.w4.colors.mainText,lineColor:n.w4.colors.border}}),ve=!0),o.current&&!t)try{const a=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:n}=await i.render(a,e);!t&&o.current&&(o.current.innerHTML=n)}catch(e){t||l(e instanceof Error?e.message:String(e))}}(),()=>{t=!0}},[e]),i?(0,r.jsx)(ze,{children:(0,r.jsxs)($e,{children:["Mermaid error: ",i]})}):(0,r.jsx)(ze,{ref:o})}const Ae=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],je=i.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Se=i.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  margin-bottom: ${n.w4.spacing.md};
  text-align: center;
`,Me=i.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  margin-top: ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,Te=i.default.span`
  display: flex;
  align-items: center;
  gap: 6px;
`,Ce=i.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,Be=i.default.div`
  color: #f85149;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
`;function Ee(e){if(e<=0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/o)*o}function Fe({labels:e,data:o,colors:a}){const t=176,i=Ee(Math.max(...o,1)),l=Math.min(40,340/e.length*.6),s=340/e.length,c=Array.from({length:6},(e,o)=>i/5*o);return(0,r.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,o)=>{const a=192-e/i*t;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:n.w4.colors.border,strokeWidth:.5,strokeDasharray:0===o?"none":"3,3"}),(0,r.jsx)("text",{x:38,y:a+4,fill:n.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:n.w4.typography.fontFamily,children:Math.round(e)})]},o)}),o.map((o,c)=>{const d=44+s*c+s/2-l/2,m=o/i*t,g=192-m,p=a[c%a.length];return(0,r.jsxs)("g",{children:[(0,r.jsxs)("rect",{x:d,y:g,width:l,height:m,rx:3,fill:p,opacity:.85,children:[(0,r.jsx)("animate",{attributeName:"height",from:"0",to:m,dur:"0.5s",fill:"freeze"}),(0,r.jsx)("animate",{attributeName:"y",from:192,to:g,dur:"0.5s",fill:"freeze"})]}),(0,r.jsx)("text",{x:d+l/2,y:g-4,fill:n.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:o}),(0,r.jsx)("text",{x:44+s*c+s/2,y:208,fill:n.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:e[c].length>8?e[c].slice(0,7)+"…":e[c]})]},c)})]})}function Pe({labels:e,data:o,colors:a}){const t=o.reduce((e,o)=>e+o,0)||1;let i=-Math.PI/2;const l=o.map((e,o)=>{const l=e/t*Math.PI*2,s=i;i+=l;const c=i,d=120+90*Math.cos(s),m=120+90*Math.sin(s),g=120+90*Math.cos(c),p=120+90*Math.sin(c),u=l>Math.PI?1:0,f=s+l/2,h=120+58.5*Math.cos(f),x=120+58.5*Math.sin(f),y=Math.round(e/t*100);return(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{d:`M 120 120 L ${d} ${m} A 90 90 0 ${u} 1 ${g} ${p} Z`,fill:a[o%a.length],stroke:n.w4.colors.codeBg,strokeWidth:2,opacity:.85}),y>=5&&(0,r.jsxs)("text",{x:h,y:x+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:[y,"%"]})]},o)});return(0,r.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:l})}function Re({labels:e,data:o,colors:a}){const t=176,i=Ee(Math.max(...o,1)),l=o.length>1?340/(o.length-1):340,s=a[0],c=o.map((e,o)=>({x:44+l*o,y:192-e/i*t})),d=c.map((e,o)=>`${0===o?"M":"L"} ${e.x} ${e.y}`).join(" "),m=Array.from({length:6},(e,o)=>i/5*o);return(0,r.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[m.map((e,o)=>{const a=192-e/i*t;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:n.w4.colors.border,strokeWidth:.5,strokeDasharray:0===o?"none":"3,3"}),(0,r.jsx)("text",{x:38,y:a+4,fill:n.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:n.w4.typography.fontFamily,children:Math.round(e)})]},o)}),(0,r.jsx)("path",{d,fill:"none",stroke:s,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((a,t)=>(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:a.x,cy:a.y,r:4,fill:s,stroke:n.w4.colors.codeBg,strokeWidth:2}),(0,r.jsx)("text",{x:a.x,y:a.y-10,fill:n.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:o[t]}),(0,r.jsx)("text",{x:a.x,y:208,fill:n.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:e[t].length>8?e[t].slice(0,7)+"…":e[t]})]},t))]})}function Le({code:e}){const o=(0,t.useMemo)(()=>function(e){const o=e.trim().split("\n");let a,t,n="bar",i=[],r=[];for(const e of o){const[o,...l]=e.split(":"),s=l.join(":").trim();if(s)switch(o.trim().toLowerCase()){case"type":["bar","pie","line"].includes(s.toLowerCase())&&(n=s.toLowerCase());break;case"title":a=s;break;case"labels":i=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":r=s.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":t=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return i.length&&r.length?{type:n,title:a,labels:i,data:r,colors:t}:null}(e),[e]);if(!o)return(0,r.jsx)(je,{children:(0,r.jsx)(Be,{children:"Invalid chart data"})});const a=o.colors??Ae;return(0,r.jsxs)(je,{children:[o.title&&(0,r.jsx)(Se,{children:o.title}),"bar"===o.type&&(0,r.jsx)(Fe,{labels:o.labels,data:o.data,colors:a}),"pie"===o.type&&(0,r.jsx)(Pe,{labels:o.labels,data:o.data,colors:a}),"line"===o.type&&(0,r.jsx)(Re,{labels:o.labels,data:o.data,colors:a}),(0,r.jsx)(Me,{children:o.labels.map((e,o)=>(0,r.jsxs)(Te,{children:[(0,r.jsx)(Ce,{color:a[o%a.length]}),e]},o))})]})}const Ie=i.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.md};
`,Ne=i.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,De=i.default.div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,He=i.default.div`
  display: flex;
  gap: ${n.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,Ke=i.default.button`
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
`,Ge=i.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  text-align: center;
`,We=i.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  text-align: center;
`;function Oe(e){return e.toString().padStart(2,"0")}function Ye(e,o,a){if("pt"===a){const a=1===e?"1 hora":`${e} horas`;return 0===o?a:15===o?`${a} e um quarto`:30===o?`${a} e meia`:45===o?`um quarto para as ${12===e?1:e+1}`:`${a} e ${o} minutos`}const t=e<12?"AM":"PM",n=e%12||12;return 0===o?`${n} o'clock ${t}`:15===o?`quarter past ${n} ${t}`:30===o?`half past ${n} ${t}`:45===o?`quarter to ${n%12+1} ${t}`:`${n}:${Oe(o)} ${t}`}function _e({hours:e,minutes:o,seconds:a}){const t=100,i=100,l=e=>e*Math.PI/180,s=a/60*360-90,c=o/60*360+a/60*6-90,d=e%12/12*360+o/60*30-90,m=t+61*Math.cos(l(s)),g=i+61*Math.sin(l(s)),p=t+65*Math.cos(l(c)),u=i+65*Math.sin(l(c)),f=t+45*Math.cos(l(d)),h=i+45*Math.sin(l(d));return(0,r.jsxs)("svg",{viewBox:"0 0 200 200",width:200,height:200,children:[(0,r.jsx)("circle",{cx:t,cy:i,r:85,fill:n.w4.colors.surface,stroke:n.w4.colors.border,strokeWidth:2}),Array.from({length:12},(e,o)=>{const a=o+1,s=a/12*360-90,c=t+69*Math.cos(l(s)),d=i+69*Math.sin(l(s));return(0,r.jsx)("text",{x:c,y:d+4,fill:n.w4.colors.mainText,fontSize:14,fontWeight:600,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:a},a)}),Array.from({length:60},(e,o)=>{const a=o/60*360-90,s=o%5==0,c=s?75:79;return(0,r.jsx)("line",{x1:t+c*Math.cos(l(a)),y1:i+c*Math.sin(l(a)),x2:t+83*Math.cos(l(a)),y2:i+83*Math.sin(l(a)),stroke:s?n.w4.colors.mainTextMuted:n.w4.colors.border,strokeWidth:s?2:1},o)}),(0,r.jsx)("line",{x1:t,y1:i,x2:f,y2:h,stroke:n.w4.colors.mainText,strokeWidth:4,strokeLinecap:"round"}),(0,r.jsx)("line",{x1:t,y1:i,x2:p,y2:u,stroke:n.w4.colors.accent,strokeWidth:2.5,strokeLinecap:"round"}),(0,r.jsx)("line",{x1:t-12*Math.cos(l(s)),y1:i-12*Math.sin(l(s)),x2:m,y2:g,stroke:"#f87171",strokeWidth:1.2,strokeLinecap:"round"}),(0,r.jsx)("circle",{cx:t,cy:i,r:4,fill:n.w4.colors.accent}),(0,r.jsx)("circle",{cx:t,cy:i,r:2,fill:"#f87171"})]})}function Ve({code:e}){const o=function(e){let o="pt";for(const a of e.trim().split("\n")){const[e,...t]=a.split(":"),n=t.join(":").trim();"locale"===e.trim().toLowerCase()&&(o=n.toLowerCase())}return{locale:o}}(e),[a,n]=(0,t.useState)("live"),[i,l]=(0,t.useState)(()=>(new Date).getHours()),[s,c]=(0,t.useState)(()=>(new Date).getMinutes()),[d,m]=(0,t.useState)(()=>(new Date).getSeconds());(0,t.useEffect)(()=>{if("live"!==a)return;const e=()=>{const e=new Date;l(e.getHours()),c(e.getMinutes()),m(e.getSeconds())};e();const o=setInterval(e,1e3);return()=>clearInterval(o)},[a]);const g=(0,t.useCallback)(e=>{n("manual"),m(0),l(o=>((o+e)%24+24)%24)},[]),p=(0,t.useCallback)(e=>{n("manual"),m(0),c(o=>((o+e)%60+60)%60)},[]),u=(0,t.useCallback)(()=>n("live"),[]);return(0,r.jsxs)(Ie,{children:[(0,r.jsxs)(Ne,{children:[(0,r.jsx)(_e,{hours:i,minutes:s,seconds:d}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(De,{children:[Oe(i),":",Oe(s),(0,r.jsxs)("span",{style:{fontSize:"24px",opacity:.5},children:[":",Oe(d)]})]}),(0,r.jsx)(We,{children:Ye(i%12||12,s,o.locale)})]})]}),(0,r.jsxs)(He,{children:[(0,r.jsx)(Ke,{onClick:()=>g(-1),children:"−1h"}),(0,r.jsx)(Ke,{onClick:()=>g(1),children:"+1h"}),(0,r.jsx)(Ke,{onClick:()=>p(-15),children:"−15m"}),(0,r.jsx)(Ke,{onClick:()=>p(15),children:"+15m"}),(0,r.jsx)(Ke,{onClick:()=>p(-5),children:"−5m"}),(0,r.jsx)(Ke,{onClick:()=>p(5),children:"+5m"}),(0,r.jsx)(Ke,{active:"live"===a,onClick:u,children:"pt"===o.locale?"Agora":"Now"})]}),(0,r.jsx)(Ge,{children:"pt"===o.locale?"Usa os botões para mudar as horas e os minutos!":"Use the buttons to change the hours and minutes!"}),(0,r.jsx)(He,{children:[{label:"3:00",h:3,m:0},{label:"6:30",h:6,m:30},{label:"9:15",h:9,m:15},{label:"12:00",h:12,m:0},{label:"13:45",h:13,m:45},{label:"15:30",h:15,m:30},{label:"19:00",h:19,m:0},{label:"23:15",h:23,m:15}].map(e=>(0,r.jsx)(Ke,{onClick:()=>{n("manual"),l(e.h),c(e.m)},children:e.label},e.label))})]})}var Ue=a(41604);const Je=["Samantha","Karen","Daniel","Moira","Rishi","Google UK English Female","Google US English"],qe=["Joana","Luciana","Catarina","Google português do Brasil"];function Ze(e,o){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(e);a.lang="pt"===o?"pt-PT":"en-US",a.rate=1,a.pitch=1;const t=function(e,o){const a="en"===o?Je:qe,t="en"===o?"en":"pt";for(const o of a){const a=e.find(e=>e.name.includes(o)&&e.lang.startsWith(t));if(a)return a}return e.find(e=>e.lang.startsWith(t))}(window.speechSynthesis.getVoices(),o);t&&(a.voice=t,a.lang=t.lang),window.speechSynthesis.speak(a)}const Xe=l.keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`,Qe=i.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
`,eo=i.default.div`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${n.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,oo=i.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${n.w4.spacing.sm};

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ao=i.default.div`
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
`,to=i.default.button`
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
    animation: ${Xe} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`,no=(0,i.default)(to)`
  border-bottom: 1px solid ${n.w4.colors.border}80;
`,io=(0,i.default)(to)``,ro=i.default.span`
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
`,lo=i.default.span`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.accent};
`,so=i.default.span`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
`;function co({code:e}){const o=function(e){return e.split("\n").map(e=>e.trim()).filter(e=>e&&e.includes("|")).map(e=>{const[o,a]=e.split("|").map(e=>e.trim());return{en:o??"",pt:a??""}}).filter(e=>e.en&&e.pt)}(e),a=(0,t.useRef)(null),n=(0,t.useRef)(!1),i=(0,t.useCallback)(e=>{a.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),l=(0,t.useCallback)((e,o)=>t=>{if(!a.current)return;const i=Math.abs(t.changedTouches[0].clientX-a.current.x),r=Math.abs(t.changedTouches[0].clientY-a.current.y);a.current=null,i>8||r>8||(n.current=!0,Ze(e,o))},[]),s=(0,t.useCallback)((e,o)=>()=>{n.current?n.current=!1:Ze(e,o)},[]);return o.length?(0,r.jsxs)(Qe,{children:[(0,r.jsxs)(eo,{children:[(0,r.jsx)(Ue.A,{size:12}),"Words to Listen / Palavras para Ouvir"]}),(0,r.jsx)(oo,{children:o.map(e=>(0,r.jsxs)(ao,{children:[(0,r.jsxs)(no,{accentColor:"#58a6ff",onTouchStart:i,onTouchEnd:l(e.en,"en"),onClick:s(e.en,"en"),title:`Listen: ${e.en}`,children:[(0,r.jsx)(ro,{accentColor:"#58a6ff",children:(0,r.jsx)(Ue.A,{size:16})}),(0,r.jsx)(lo,{children:e.en})]}),(0,r.jsxs)(io,{accentColor:"#3fb950",onTouchStart:i,onTouchEnd:l(e.pt,"pt"),onClick:s(e.pt,"pt"),title:`Ouvir: ${e.pt}`,children:[(0,r.jsx)(ro,{accentColor:"#3fb950",children:(0,r.jsx)(Ue.A,{size:16})}),(0,r.jsx)(so,{children:e.pt})]})]},e.en))})]}):null}var mo=a(68383),go=a(21426),po=a(25609),uo=a(20320);const fo=i.default.div`
  margin: ${n.w4.spacing.lg} 0;
  border-radius: ${n.w4.borderRadius.md};
  border: 1px solid ${n.w4.colors.codeBorder};
  overflow: hidden;
`,ho=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${n.w4.colors.codeBorder};
`,xo=i.default.span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,yo=i.default.button`
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
`,bo={...go.A,'pre[class*="language-"]':{...go.A['pre[class*="language-"]'],background:n.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...go.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function wo({lang:e="text",code:o}){const[a,i]=(0,t.useState)(!1);return(0,r.jsxs)(fo,{children:[(0,r.jsxs)(ho,{children:[(0,r.jsx)(xo,{children:e}),(0,r.jsxs)(yo,{copied:a,onClick:()=>{navigator.clipboard.writeText(o).then(()=>{i(!0),setTimeout(()=>i(!1),2e3)})},children:[a?(0,r.jsx)(po.A,{size:12}):(0,r.jsx)(uo.A,{size:12}),a?"Copied!":"Copy"]})]}),(0,r.jsx)(mo.A,{language:e,style:bo,showLineNumbers:o.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:n.w4.colors.codeBg},wrapLongLines:!1,children:o})]})}var zo=a(65569),$o=a(8218),vo=a(57230),ko=a(22966),Ao=a(21069);const jo={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:zo.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:$o.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:vo.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:ko.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:Ao.A,label:"Caution",color:"#f85149"}},So=i.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
`,Mo=i.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.sm};
`,To=i.default.div`
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function Co({type:e,children:o}){const a=jo[e]??jo.NOTE,t=a.icon;return(0,r.jsxs)(So,{bg:a.bg,border:a.border,children:[(0,r.jsxs)(Mo,{color:a.color,children:[(0,r.jsx)(t,{size:15,strokeWidth:2}),a.label]}),(0,r.jsx)(To,{children:o})]})}const Bo=i.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${n.w4.spacing.xxl} 0 ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,Eo=i.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.md};
`,Fo=i.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,Po=i.default.a`
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
`;function Ro({headings:e,activeId:o}){return e.length<2?null:(0,r.jsxs)(Bo,{children:[(0,r.jsx)(Eo,{children:"On this page"}),(0,r.jsx)(Fo,{children:e.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(Po,{href:`#${e.id}`,active:o===e.id,level:e.level,onClick:o=>{o.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function Lo(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function Io(e){return t.Children.toArray(e).map(e=>"string"==typeof e?e:"number"==typeof e?String(e):(0,t.isValidElement)(e)?Io(e.props.children??""):"").join("")}function No(){return e=>{!function e(o){if("blockquote"===o.type){const e=o.children?.[0];if("paragraph"===e?.type){const a=e.children?.[0];if("text"===a?.type){const t=a.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);t&&(a.value=a.value.slice(t[0].length),a.value.trim()||1!==e.children.length||o.children.shift(),o.data=o.data??{},o.data.hName="div",o.data.hProperties={"data-callout":t[1].toUpperCase()})}}}o.children?.forEach(e)}(e)}}const Do=i.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${n.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,Ho=i.default.div`flex: 1; min-width: 0;`,Ko=i.default.article`
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
`,Go=i.default.div`
  display: flex;
  gap: ${n.w4.spacing.lg};
  padding: ${n.w4.spacing.xxl} 0;
  border-top: 1px solid ${n.w4.colors.border};
  margin-top: ${n.w4.spacing.xxl};
`,Wo=i.default.button`
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
`,Oo=i.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${n.w4.colors.sidebarTextMuted}; font-family: ${n.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,Yo=i.default.div`
  font-size: ${n.w4.typography.fontSizeBase}; color: ${n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily}; font-weight: 500;
`,_o=i.default.div`
  color: ${n.w4.colors.mainTextMuted};
  padding: ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  font-family: ${n.w4.typography.fontFamily};
`;function Vo(e){return function({children:o,...a}){const t=`h${e}`,n=Io(o),i=Lo(n);return(0,r.jsxs)(t,{id:i,...a,children:[o,(0,r.jsx)("a",{className:"heading-anchor",href:`#${i}`,"aria-label":`Link to "${n}"`,children:(0,r.jsx)(he.A,{size:14})})]})}}function Uo({file:e,prevEntry:o,nextEntry:n,onNavigate:i,scrollToId:l,onScrolled:s}){const[c,d]=(0,t.useState)(null),[m,g]=(0,t.useState)(null),p=(0,t.useRef)(null);if((0,t.useEffect)(()=>{d(null),fetch(`${a.p}content/${e}`).then(e=>{if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);return e.text()}).then(d).catch(o=>d(`> **Error loading \`${e}\`:** ${o.message}`))},[e]),(0,t.useEffect)(()=>{if(!l||!c||!p.current)return;const e=setTimeout(()=>{const e=p.current?.querySelector(`#${CSS.escape(l)}`);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),g(l),s?.())},150);return()=>clearTimeout(e)},[l,c,s]),(0,t.useEffect)(()=>{if(!c||!p.current)return;const e=p.current.querySelectorAll("h2[id], h3[id]");if(!e.length)return;const o=new IntersectionObserver(e=>{const o=e.filter(e=>e.isIntersecting);o.length&&g(o[0].target.id)},{rootMargin:"-10% 0% -60% 0%",threshold:0});return e.forEach(e=>o.observe(e)),()=>o.disconnect()},[c]),null===c)return(0,r.jsx)(_o,{children:"Loading…"});const u=function(e){const o=[],a=/^(#{2,3})\s+(.+)$/gm;let t;for(;null!==(t=a.exec(e));){const e=t[1].length,a=t[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");o.push({level:e,text:a,id:Lo(a)})}return o}(c),f=o||n;return(0,r.jsxs)(Do,{children:[(0,r.jsxs)(Ho,{children:[(0,r.jsx)(Ko,{ref:p,children:(0,r.jsx)(ue.oz,{remarkPlugins:[fe.A,we.A,No],rehypePlugins:[ye.A,be.A],components:{div({node:e,children:o,...a}){const t=a["data-callout"];return t?(0,r.jsx)(Co,{type:t,children:o}):(0,r.jsx)("div",{...a,children:o})},h1:Vo(1),h2:Vo(2),h3:Vo(3),h4:Vo(4),pre:({children:e})=>(0,r.jsx)(r.Fragment,{children:e}),code({className:e,children:o}){const a=/language-(\w+)/.exec(e??"")?.[1],t=String(o).replace(/\n$/,"");return"mermaid"===a?(0,r.jsx)(ke,{code:t}):"chart"===a?(0,r.jsx)(Le,{code:t}):"clock"===a?(0,r.jsx)(Ve,{code:t}):"vocabulary"===a?(0,r.jsx)(co,{code:t}):a||t.includes("\n")?(0,r.jsx)(wo,{lang:a,code:t}):(0,r.jsx)("code",{className:e,children:o})}},children:c})}),f&&(0,r.jsxs)(Go,{children:[o?(0,r.jsxs)(Wo,{align:"left",onClick:()=>i?.(o),children:[(0,r.jsxs)(Oo,{children:[(0,r.jsx)(xe.A,{size:13})," Previous"]}),(0,r.jsx)(Yo,{children:o.name})]}):(0,r.jsx)("div",{style:{flex:1}}),n?(0,r.jsxs)(Wo,{align:"right",onClick:()=>i?.(n),children:[(0,r.jsxs)(Oo,{children:["Next ",(0,r.jsx)(C.A,{size:13})]}),(0,r.jsx)(Yo,{children:n.name})]}):(0,r.jsx)("div",{style:{flex:1}})]})]}),(0,r.jsx)(Ro,{headings:u,activeId:m})]})}var Jo=a(24525),qo=a(87071),Zo=a(35751),Xo=a(32887);const Qo=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ea=l.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,oa=i.default.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${Qo} 0.15s ease;
`,aa=i.default.div`
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
  animation: ${ea} 0.2s ease;
`,ta=i.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${n.w4.colors.border};
`,na=i.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,ia=i.default.button`
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
`,ra=i.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,la=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,sa=i.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,ca=i.default.button`
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
`,da=i.default.div`
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
`,ma=i.default.div`
  flex: 1;
  min-width: 0;
`,ga=i.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,pa=i.default.span`
  font-weight: 400;
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,ua=i.default.span`
  font-size: 11px;
  font-weight: 500;
  color: ${n.w4.colors.accent};
  background: ${n.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
`,fa=i.default.div`
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
`,ha=i.default.div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?n.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,xa=i.default.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${n.w4.colors.border};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
`,ya=i.default.kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.sidebarTextMuted};
`,ba=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`;function wa(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}const za=new Map;function $a(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function va(e,o=""){return e.flatMap(e=>e.children?va(e.children,e.name):e.file?[{entry:e,parentName:o}]:[])}function ka(e,o){const a=$a(e),t=$a(o),n=e.split("\n");let i=0,r=0;for(;-1!==(r=a.indexOf(t,r));)i++,r+=t.length;let l=null;for(const e of n){const a=e.match(/^#{1,4}\s+(.+)/);if(a&&(l=a[1].trim()),!e.trim()||e.startsWith("```")||e.startsWith("|--"))continue;const n=e.replace(/^#{1,6}\s*/,"").replace(/[*_`|]/g,"").trim(),r=n.normalize("NFD"),s=[];let c=0;for(let e=0;e<r.length;e++){const o=r.charCodeAt(e);o>=768&&o<=879||(s.push(c),c++)}s.push(c);const d=$a(n).indexOf(t);if(-1===d)continue;const m=s[d]??d,g=s[d+t.length]??m+o.length,p=Math.max(0,m-50),u=Math.min(n.length,g+70),f=p>0?"…":"",h=u<n.length?"…":"";return{snippet:`${f}${n.slice(p,m)}<mark>${n.slice(m,g)}</mark>${n.slice(g,u)}${h}`,count:i,headingSlug:l?wa(l):null,headingText:l}}return{snippet:"",count:i,headingSlug:null,headingText:null}}function Aa({open:e,onClose:o,entries:i,activeId:l,onSelect:s}){const[c,d]=(0,t.useState)(""),[m,g]=(0,t.useState)([]),[p,u]=(0,t.useState)(!1),[f,h]=(0,t.useState)(0),x=(0,t.useRef)(null),y=(0,t.useRef)(),b=(0,t.useMemo)(()=>va(i),[i]);(0,t.useEffect)(()=>{e&&(d(""),g([]),h(0),setTimeout(()=>x.current?.focus(),50))},[e]),(0,t.useEffect)(()=>{if(!e)return;const a=e=>{"Escape"===e.key&&(e.preventDefault(),o())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[e,o]);const w=(0,t.useCallback)(async e=>{if(e.length<2)return g([]),void u(!1);u(!0);const o=await Promise.all(b.map(async({entry:e,parentName:o})=>{const t=await async function(e){const o=za.get(e);if(void 0!==o)return o;try{const o=await fetch(`${a.p}content/${e}`);if(!o.ok)return"";const t=await o.text();return za.set(e,t),t}catch{return za.set(e,""),""}}(e.file);return{entry:e,parentName:o,text:t}})),t=[];for(const{entry:a,parentName:n,text:i}of o){const o=$a(a.name),r=$a(i),l=$a(e);if(!o.includes(l)&&!r.includes(l))continue;const{snippet:s,count:c,headingSlug:d,headingText:m}=ka(i,e),g=o.includes(l);t.push({entry:a,parentName:n,snippet:s||(g?a.name:""),matchCount:c+(g?10:0),headingSlug:d,headingText:m})}t.sort((e,o)=>o.matchCount-e.matchCount),g(t),h(0),u(!1)},[b]);(0,t.useEffect)(()=>{if(clearTimeout(y.current),c.trim())return y.current=setTimeout(()=>w(c.trim()),250),()=>clearTimeout(y.current);g([])},[c,w]);const z=(0,t.useCallback)(e=>{"ArrowDown"===e.key?(e.preventDefault(),h(e=>Math.min(e+1,m.length-1))):"ArrowUp"===e.key?(e.preventDefault(),h(e=>Math.max(e-1,0))):"Enter"===e.key&&m[f]&&(e.preventDefault(),s(m[f].entry,m[f].headingSlug),o())},[m,f,s,o]);return e?(0,r.jsx)(oa,{onClick:e=>{e.target===e.currentTarget&&o()},children:(0,r.jsxs)(aa,{onKeyDown:z,children:[(0,r.jsxs)(ta,{children:[(0,r.jsx)(Z.A,{size:18,color:n.w4.colors.accent,style:{flexShrink:0}}),(0,r.jsx)(na,{ref:x,placeholder:"Pesquisar em todo o conteúdo…",value:c,onChange:e=>d(e.target.value)}),(0,r.jsx)(ia,{onClick:o,title:"Fechar (Esc)",children:(0,r.jsx)(Jo.A,{size:14})})]}),(0,r.jsxs)(ra,{children:[p&&(0,r.jsxs)(la,{children:[(0,r.jsx)(sa,{children:(0,r.jsx)(qo.A,{size:14})}),"A pesquisar ",b.length," ficheiros…"]}),!p&&c.length>=2&&m.length>0&&(0,r.jsxs)(la,{children:[(0,r.jsx)(Zo.A,{size:13}),m.length," ",1===m.length?"resultado":"resultados"," encontrados"]}),!p&&c.length>=2&&0===m.length&&(0,r.jsxs)(ba,{children:[(0,r.jsx)(Z.A,{size:32,strokeWidth:1.2}),'Nenhum resultado para "',(0,r.jsx)("strong",{children:c}),'"']}),!p&&c.length<2&&(0,r.jsxs)(ba,{children:[(0,r.jsx)(Z.A,{size:32,strokeWidth:1.2}),"Escreve pelo menos 2 caracteres para pesquisar"]}),m.map((e,a)=>(0,r.jsxs)(ca,{selected:a===f,onClick:()=>{s(e.entry,e.headingSlug),o()},onMouseEnter:()=>h(a),children:[(0,r.jsx)(da,{selected:a===f,children:(0,r.jsx)(Zo.A,{size:15})}),(0,r.jsxs)(ma,{children:[(0,r.jsxs)(ga,{children:[e.entry.name,e.matchCount>0&&(0,r.jsx)(ua,{children:e.matchCount>10?e.matchCount-10:e.matchCount})]}),(e.parentName||e.headingText)&&(0,r.jsxs)(pa,{children:[e.parentName,e.parentName&&e.headingText?" › ":"",e.headingText]}),e.snippet&&(0,r.jsx)(fa,{dangerouslySetInnerHTML:{__html:e.snippet}})]}),(0,r.jsx)(ha,{selected:a===f,children:(0,r.jsx)(Xo.A,{size:14})})]},e.entry.id))]}),(0,r.jsxs)(xa,{children:[(0,r.jsxs)("span",{children:[(0,r.jsx)(ya,{children:"↑"})," ",(0,r.jsx)(ya,{children:"↓"})," navegar"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)(ya,{children:"↵"})," abrir"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)(ya,{children:"esc"})," fechar"]})]})]})}):null}function ja(e,o){for(const a of e){if(a.id===o)return a;if(a.children){const e=ja(a.children,o);if(e)return e}}}function Sa(e){return e.flatMap(e=>e.children?Sa(e.children):e.file?[e]:[])}const Ma=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${n.w4.typography.fontFamily};
  background: ${n.w4.colors.mainBg};
`,Ta=i.default.div`
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
`,Ca=i.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${n.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${n.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,Ba=i.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Ea=i.default.h1`
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
`,Fa=i.default.p`
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,Pa=i.default.span`
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
`,Ra=i.default.button`
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
`,La={en:"Browse the sidebar",pt:"Explora o menu lateral"};function Ia({title:e,sub:o,lang:a}){return(0,r.jsxs)(Ma,{children:[(0,r.jsx)(Ca,{}),(0,r.jsx)(Ta,{size:500,x:10,y:-10,hue:210,dur:7}),(0,r.jsx)(Ta,{size:400,x:60,y:50,hue:270,dur:9}),(0,r.jsx)(Ta,{size:300,x:30,y:70,hue:190,dur:6}),(0,r.jsxs)(Ba,{children:[(0,r.jsx)(Ea,{children:e}),(0,r.jsx)(Fa,{children:o}),(0,r.jsxs)(Pa,{children:[(0,r.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"15 18 9 12 15 6"})}),La[a]??La.en]})]})]})}function Na(e,o,a){return"string"==typeof e?e:e[o]??e[a]??Object.values(e)[0]??""}function Da({navigation:e,languages:o,defaultLang:a,locale:n,hashPrefix:i,topBarRight:l,welcomeTitle:s="Blog",welcomeSub:c="Notes, guides, and references — pick a topic from the sidebar to get started."}){const d=o?Object.keys(o):[],[m,g]=(d.length,(0,t.useState)(()=>a??d[0]??""));(0,t.useEffect)(()=>{n&&d.includes(n)&&n!==m&&g(n)},[n]);const p=(0,t.useMemo)(()=>o&&m?o[m].navigation:e??{entries:[]},[o,e,m]),u=((0,t.useMemo)(()=>Sa(p.entries),[p]),(0,t.useCallback)(e=>{const o=e.match(new RegExp(`^#\\/${i}\\/(.+)$`));if(o)return ja(p.entries,o[1])},[p,i])),[f,h]=(0,t.useState)(()=>u(window.location.hash)??null);(0,t.useEffect)(()=>{if(!f)return;const e=ja(p.entries,f.id);h(e??null)},[m,p]),(0,t.useEffect)(()=>{const e=()=>{const e=u(window.location.hash);e&&h(e)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[u]);const x=(0,t.useCallback)(e=>{e.file&&(h(e),window.location.hash=`#/${i}/${e.id}`)},[i]),y=(0,t.useMemo)(()=>Sa(p.entries),[p]),b=y.findIndex(e=>e.id===f?.id),w=b>0?y[b-1]:null,z=b<y.length-1?y[b+1]:null,[$,v]=(0,t.useState)(!1),[k,A]=(0,t.useState)(null);(0,t.useEffect)(()=>{const e=e=>{(e.metaKey||e.ctrlKey)&&"f"===e.key&&(e.preventDefault(),v(!0))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);const j=f?.label??f?.name??i,S=Na(s,m,a??d[0]??""),T=Na(c,m,a??d[0]??""),C=(0,r.jsxs)(Ra,{onClick:()=>v(!0),title:"Pesquisar (Ctrl+F)",children:[(0,r.jsx)(Z.A,{size:14}),(0,r.jsx)("span",{children:"Pesquisar"}),(0,r.jsx)("kbd",{children:"⌘F"})]}),B=(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[C,l]});return(0,r.jsxs)(M,{title:j,activeId:f?.id??null,topBarRight:B,sidebar:(0,r.jsx)(pe,{config:p,activeId:f?.id??null,onSelect:x,hashPrefix:i}),children:[f?.file?(0,r.jsx)(Uo,{file:f.file,prevEntry:w,nextEntry:z,onNavigate:x,scrollToId:k,onScrolled:()=>A(null)}):(0,r.jsx)(Ia,{title:S,sub:T,lang:m}),(0,r.jsx)(Aa,{open:$,onClose:()=>v(!1),entries:p.entries,activeId:f?.id??null,onSelect:(e,o)=>{x(e),A(o??null)}})]})}i.default.div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,i.default.button`
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
`,i.default.div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${n.w4.spacing.md}`};
  border-bottom: 1px solid ${n.w4.colors.border}60;
`,i.default.div`
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
`,i.default.input`
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
`,i.default.button`
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
`,i.default.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,i.default.button`
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
`,i.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${n.w4.colors.sidebarText};
`,i.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,i.default.div`
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
`,i.default.div`
  padding: 12px ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,i.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,i.default.span`
  font-size: 11px;
  color: ${n.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,new Map},74914(e,o,a){a.d(o,{FlyoutPanel:()=>x});var t=a(27359),n=a(53233),i=a(77207),r=a(20255),l=a(217),s=a(15959),c=a(65185),d=a(65723);const m=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=n.default.div`
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
`,u=n.default.button`
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
`;function f({iconKey:e}){const o=e?c.t[e]??r.A:r.A;return(0,d.jsx)(o,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:o,onSelect:a}){return(0,d.jsx)(d.Fragment,{children:e.map(e=>e.children?(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(h,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,d.jsxs)(u,{active:o===e.id,onClick:()=>a(e),children:[(0,d.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function x({activeId:e}){const{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:t}=(0,s.c)();if(!o)return null;const n=o.entry.icon?c.t[o.entry.icon]??r.A:r.A;return(0,d.jsxs)(g,{anchorY:o.anchorY,onMouseEnter:t,onMouseLeave:a,children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(n,{size:13,strokeWidth:2}),o.entry.name]}),(0,d.jsx)(h,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},15959(e,o,a){a.d(o,{I:()=>n,c:()=>i});var t=a(27359);const n=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,t.useContext)(n)},65185(e,o,a){a.d(o,{t:()=>ye});var t=a(49510),n=a(99038),i=a(57400),r=a(37561),l=a(28207),s=a(87902),c=a(36896),d=a(53013),m=a(32887),g=a(37901),p=a(39848),u=a(22164),f=a(3045),h=a(43775),x=a(83539),y=a(41783),b=a(39416),w=a(1837),z=a(57167),$=a(84494),v=a(82314),k=a(35751),A=a(20255),j=a(69633),S=a(92946),M=a(40822),T=a(36720),C=a(58456),B=a(43317),E=a(52709),F=a(89301),P=a(8006),R=a(83517),L=a(37032),I=a(6949),N=a(8218),D=a(36829),H=a(15553),K=a(59591),G=a(69923),W=a(72820),O=a(14621),Y=a(68479),_=a(72534),V=a(66673),U=a(67490),J=a(49033),q=a(45775),Z=a(31365),X=a(62937),Q=a(9821),ee=a(65912),oe=a(80158),ae=a(88641),te=a(48607),ne=a(83249),ie=a(1821),re=a(15889),le=a(89655),se=a(27170),ce=a(19161),de=a(71849),me=a(41604),ge=a(13142),pe=a(61187),ue=a(77747),fe=a(2932),he=a(24525),xe=a(57230);const ye={activity:c.A,"a-large-small":s.A,apple:d.A,"arrow-right":m.A,"bar-chart-2":t.A,book:p.A,"book-open":g.A,briefcase:f.A,calendar:h.A,clock:y.A,"circle-dot":x.A,cloud:b.A,compass:w.A,cpu:z.A,droplets:$.A,feather:v.A,file:A.A,"file-text":k.A,folder:j.A,"git-branch":S.A,github:M.A,globe:T.A,grid:i.A,hand:C.A,hash:B.A,heart:E.A,key:P.A,hexagon:F.A,home:r.A,landmark:R.A,layers:l.A,"layout-grid":L.A,leaf:I.A,lightbulb:N.A,list:D.A,map:K.A,"map-pin":H.A,"message-circle":G.A,"message-square":W.A,minus:O.A,monitor:Y.A,mountain:_.A,package:V.A,palette:U.A,"pen-tool":J.A,"pie-chart":n.A,plane:q.A,plus:Z.A,ruler:X.A,shirt:Q.A,slash:ee.A,square:oe.A,star:ae.A,sun:te.A,terminal:ne.A,thermometer:ie.A,triangle:re.A,trophy:le.A,truck:se.A,type:ce.A,users:de.A,"volume-2":me.A,watch:ge.A,waves:pe.A,wind:ue.A,wrench:fe.A,x:he.A,zap:xe.A,bot:u.A}},217(e,o,a){a.d(o,{w4:()=>n});const t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)"},n={colors:function(){const e={};for(const o of Object.keys(t))e[o]=`var(--at-${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},14231(e){e.exports=JSON.parse('{"entries":[{"id":"guides","name":"Guides","icon":"compass","children":[{"id":"diagrams","name":"Diagrams with Mermaid","label":"Guides — Mermaid Diagrams","icon":"git-branch","file":"guides/diagrams.md"},{"id":"prompt-lab-api-keys","name":"Prompt Lab API Keys","label":"Guides — Prompt Lab API Keys","icon":"key","file":"guides/prompt-lab-api-keys.md"}]},{"id":"github","name":"GitHub","icon":"github","children":[{"id":"github-cli","name":"GitHub CLI (gh)","label":"GitHub — CLI Reference","icon":"terminal","file":"github/cli.md"},{"id":"github-actions","name":"GitHub Actions","label":"GitHub — Actions","icon":"zap","file":"github/actions.md"}]},{"id":"claude","name":"Claude AI","icon":"bot","children":[{"id":"claude-best-practices","name":"Best Practices","label":"Claude AI — Best Practices","icon":"lightbulb","file":"claude/best-practices.md"},{"id":"claude-prompts","name":"Prompt Tips","label":"Claude AI — Prompt Tips","icon":"message-square","file":"claude/prompts.md"}]},{"id":"devtools","name":"Developer Tools","icon":"wrench","children":[{"id":"devtools-extensions","name":"Useful Extensions","label":"Dev Tools — Extensions","icon":"layout-grid","file":"devtools/extensions.md"},{"id":"devtools-commands","name":"Useful Commands","label":"Dev Tools — Commands","icon":"terminal","file":"devtools/commands.md"}]}]}')}}]);
//# sourceMappingURL=7053.3981b3561a0adf460fff.js.map