"use strict";(self.webpackChunk_atlantis_portugues=self.webpackChunk_atlantis_portugues||[]).push([[2402],{2161(e,a,o){o.d(a,{WO:()=>ca});var n=o(27359),i=o(217),t=o(53233),r=o(65723);t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${i.w.spacing.sm};
  background: ${i.w.colors.surface};
  border: 1px solid ${i.w.colors.border};
  border-radius: ${i.w.borderRadius.md};
  color: ${i.w.colors.mainText};
  font-family: ${i.w.typography.fontFamily};
  font-size: ${i.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,t.default.div`
  position: relative;
`;var l=o(73661),d=o(15959);const s="260px",c="56px",m=t.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${i.w.colors.sidebarBg};
  border-bottom: 1px solid ${i.w.colors.sidebarBorder};
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
  border-right: 1px solid ${i.w.colors.sidebarBorder};
  flex-shrink: 0;
`,u=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${i.w.borderRadius.md};
  cursor: pointer;
  color: ${i.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${i.w.colors.sidebarHover};
    color: ${i.w.colors.sidebarText};
  }
`,f=t.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${i.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w.typography.fontFamily};
  font-size: ${i.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${i.w.colors.accent}; }
`,p=t.default.div`
  font-size: ${i.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${i.w.colors.sidebarTextMuted};
  font-family: ${i.w.typography.fontFamily};
  padding-left: ${i.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${i.w.spacing.sm};
    color: ${i.w.colors.border};
  }
`,y=t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${i.w.spacing.sm};
  padding: 0 ${i.w.spacing.lg};
`,b=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,h=t.default.div`
  display: flex;
  flex-direction: column;
  height: ${i.w.sizes.fullHeight};
  background: ${i.w.colors.mainBg};
  font-family: ${i.w.typography.fontFamily};
  color: ${i.w.colors.mainText};
  overflow: hidden;
`,x=t.default.aside`
  width: ${({collapsed:e})=>e?c:s};
  min-width: ${({collapsed:e})=>e?c:s};
  background: ${i.w.colors.sidebarBg};
  border-right: 1px solid ${i.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${i.w.breakpoints.md}) {
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
`,$="atlantis:sidebar-collapsed";function v({sidebar:e,children:a,topBarRight:i,title:t="Atlantis",activeId:s=null}){const[c,v]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem($)}catch{return!1}}),[A,k]=(0,n.useState)(null),j=(0,n.useRef)(),S=()=>v(e=>{const a=!e;try{localStorage.setItem($,String(a))}catch{}return a}),T=n.useMemo(()=>n.lazy(()=>Promise.resolve().then(o.bind(o,74914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(d.I.Provider,{value:{collapsed:c,toggle:S,flyout:A,openFlyout:(e,a,o)=>{clearTimeout(j.current),k({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{j.current=setTimeout(()=>k(null),160)},cancelFlyoutClose:()=>clearTimeout(j.current)},children:(0,r.jsxs)(h,{children:[(0,r.jsxs)(m,{children:[e&&(0,r.jsx)(g,{children:(0,r.jsx)(u,{onClick:S,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(l.A,{size:17})})}),(0,r.jsxs)(f,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,r.jsx)("span",{children:"antis"})]}),t&&(0,r.jsx)(p,{children:t}),i&&(0,r.jsx)(y,{children:i})]}),(0,r.jsxs)(b,{children:[null!=e&&(0,r.jsx)(x,{collapsed:c,children:(0,r.jsx)(z,{children:e})}),(0,r.jsx)(w,{children:a})]}),A&&(0,r.jsx)(n.Suspense,{fallback:null,children:(0,r.jsx)(T,{activeId:s})})]})})}var A=o(20255),k=o(69753),j=o(65185);const S=t.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,T=t.default.div`
  overflow: hidden;
`,M=t.default.div`
  padding-left: ${i.w.spacing.md};
`,B=t.default.div`
  display: flex;
  flex-direction: column;
`,E=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${i.w.spacing.sm} ${i.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":i.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w.colors.sidebarTextMuted};
  font-size: ${i.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${i.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${i.w.colors.sidebarText};
    background: ${i.w.colors.sidebarHover};
  }
`,C=t.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,P=t.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,R=t.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${i.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,L=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${i.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?i.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?i.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?i.w.colors.sidebarActive:i.w.colors.sidebarText};
  font-size: ${i.w.typography.fontSizeBase};
  font-family: ${i.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${i.w.borderRadius.sm} ${i.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${i.w.colors.sidebarHover};
  }
`;function F({iconKey:e,size:a=16}){if(e&&!(e in j.t))return(0,r.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});const o=e?j.t[e]??A.A:A.A;return(0,r.jsx)(o,{size:a,strokeWidth:1.75})}function N({entry:e,activeId:a,onSelect:o}){const[i,t]=(0,n.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:m}=(0,d.c)();return e.children&&e.children.length>0?(0,r.jsxs)(B,{children:[(0,r.jsxs)(E,{collapsed:l,onClick:()=>{l||t(e=>!e)},onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();s(e,n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsxs)(C,{collapsed:l,children:[(0,r.jsx)(F,{iconKey:e.icon,size:16}),(0,r.jsx)(P,{collapsed:l,children:e.name})]}),(0,r.jsx)(R,{open:i,collapsed:l,children:(0,r.jsx)(k.A,{size:13})})]}),(0,r.jsx)(S,{open:i&&!l,children:(0,r.jsx)(T,{children:(0,r.jsx)(M,{children:e.children.map(e=>(0,r.jsx)(N,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,r.jsxs)(L,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsx)(F,{iconKey:e.icon,size:15}),(0,r.jsx)(P,{collapsed:l,children:e.name})]})}function I({entries:e,activeId:a,onSelect:o}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(N,{entry:e,activeId:a,onSelect:o},e.id))})}const K=o(77207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;t.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${K} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,o(74914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places),t.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,t.default.div`
  background: ${i.w.colors.sidebarBg};
  border: 1px solid ${i.w.colors.sidebarBorder};
  border-radius: ${i.w.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,t.default.div`
  font-size: ${i.w.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w.colors.mainText};
  font-family: ${i.w.typography.fontFamily};
`,t.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${i.w.colors.mainBg};
  border: 1px solid ${i.w.colors.border};
  border-radius: ${i.w.borderRadius.md};
  color: ${i.w.colors.mainText};
  font-size: ${i.w.typography.fontSizeBase};
  font-family: ${i.w.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${i.w.colors.accent}; }
  &::placeholder { color: ${i.w.colors.sidebarTextMuted}; }
`,t.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,t.default.button`
  padding: 7px 18px;
  border-radius: ${i.w.borderRadius.md};
  font-size: ${i.w.typography.fontSizeBase};
  font-family: ${i.w.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.15)":e?i.w.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?"#f85149":e?"#fff":i.w.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?"#f85149":e?i.w.colors.accent:i.w.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,t.default.div`
  height: 1px;
  background: ${i.w.colors.border};
  margin: 0 -4px;
`,t.default.div`
  font-size: 11px;
  color: ${i.w.colors.sidebarTextMuted};
  font-family: ${i.w.typography.fontFamily};
`,t.default.div`
  position: relative;
`,t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${i.w.colors.border};
  border-radius: ${i.w.borderRadius.md};
  color: ${i.w.colors.mainText};
  font-size: ${i.w.typography.fontSizeBase};
  font-family: ${i.w.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${i.w.colors.sidebarHover};
    border-color: ${i.w.colors.accent};
  }
`,t.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${i.w.colors.sidebarBg};
  border: 1px solid ${i.w.colors.sidebarBorder};
  border-radius: ${i.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${i.w.colors.sidebarTextMuted};
  font-family: ${i.w.typography.fontFamily};
  border-bottom: 1px solid ${i.w.colors.sidebarBorder};
  flex-shrink: 0;
`,t.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,t.default.div`
  padding: 16px 14px;
  font-size: ${i.w.typography.fontSizeBase};
  color: ${i.w.colors.sidebarTextMuted};
  font-family: ${i.w.typography.fontFamily};
  font-style: italic;
`,t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${i.w.colors.sidebarHover};
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
  font-size: ${i.w.typography.fontSizeBase};
  color: ${i.w.colors.mainText};
  font-family: ${i.w.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,t.default.div`
  font-size: 11px;
  color: ${i.w.colors.sidebarTextMuted};
  font-family: ${i.w.typography.fontFamily};
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
  border-radius: ${i.w.borderRadius.sm};
  cursor: pointer;
  color: ${i.w.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: #f85149;
    background: rgba(248, 81, 73, 0.12);
  }
`;var G=o(88641),D=o(41783);function H(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}const O=t.default.nav`padding: ${i.w.spacing.sm} 0;`,V=t.default.div`
  border-bottom: 1px solid ${i.w.colors.border}60;
  margin-bottom: 2px;
`,Y=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px ${i.w.spacing.md};
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w.colors.sidebarTextMuted};
  font-size: ${i.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${i.w.typography.fontFamily};
  transition: color 0.15s;

  &:hover { color: ${i.w.colors.sidebarText}; }
`,_=t.default.span`
  display: flex;
  align-items: center;
  gap: 7px;
`,W=t.default.span`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,J=t.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,U=t.default.div`overflow: hidden;`,Z=t.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,X=t.default.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${i.w.spacing.md};
  background: ${({active:e})=>e?i.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?i.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?i.w.colors.sidebarActive:i.w.colors.sidebarText};
  font-size: ${i.w.typography.fontSizeBase};
  font-family: ${i.w.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${i.w.colors.sidebarHover}; }
`,q=t.default.button`
  opacity: ${({active:e})=>e?1:0};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":i.w.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;function Q({title:e,icon:a,entries:o,activeId:i,onSelect:t,favorites:l,onToggleFav:d}){const[s,c]=(0,n.useState)(!1);return o.length?(0,r.jsxs)(V,{children:[(0,r.jsxs)(Y,{onClick:()=>c(e=>!e),children:[(0,r.jsxs)(_,{children:[a,e]}),(0,r.jsx)(W,{open:s,children:(0,r.jsx)(k.A,{size:12})})]}),(0,r.jsx)(J,{open:s,children:(0,r.jsx)(U,{children:o.map(e=>{const a=l.some(a=>a.id===e.id);return(0,r.jsxs)(Z,{children:[(0,r.jsx)(X,{active:i===e.id,onClick:()=>t(e),children:e.name}),(0,r.jsx)(q,{active:a,title:a?"Remover dos favoritos":"Adicionar aos favoritos",onClick:a=>{a.stopPropagation(),d(e)},children:(0,r.jsx)(G.A,{size:12,fill:a?"currentColor":"none"})})]},e.id)})})})]}):null}function ee({config:e,activeId:a,onSelect:o,hashPrefix:i}){const t=`atlantis-recent-${i}`,l=`atlantis-fav-${i}`,[d,s]=(0,n.useState)(()=>H(t)),[c,m]=(0,n.useState)(()=>H(l)),g=(0,n.useCallback)(e=>{e.file&&s(a=>function(e,a,o){const n=[a,...o.filter(e=>e.id!==a.id)].slice(0,10);return localStorage.setItem(e,JSON.stringify(n)),n}(t,e,a)),o(e)},[o,t]),u=(0,n.useCallback)(e=>{m(a=>function(e,a,o){const n=o.some(e=>e.id===a.id)?o.filter(e=>e.id!==a.id):[...o,a];return localStorage.setItem(e,JSON.stringify(n)),n}(l,e,a))},[l]);return(0,r.jsxs)(O,{children:[(0,r.jsx)(Q,{title:"Recentes",icon:(0,r.jsx)(D.A,{size:13}),entries:d,activeId:a,onSelect:g,favorites:c,onToggleFav:u}),(0,r.jsx)(Q,{title:"Favoritos",icon:(0,r.jsx)(G.A,{size:13}),entries:c,activeId:a,onSelect:g,favorites:c,onToggleFav:u}),(0,r.jsx)(I,{entries:e.entries,activeId:a,onSelect:g})]})}var ae=o(28976),oe=o(18055),ne=o(66225),ie=o(302),te=o(39895),re=o(6930),le=o(14944);const de=t.default.div`
  background: ${i.w.colors.codeBg};
  border: 1px solid ${i.w.colors.codeBorder};
  border-radius: ${i.w.borderRadius.md};
  padding: ${i.w.spacing.lg};
  margin: ${i.w.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,se=t.default.div`
  color: #f85149;
  font-family: ${i.w.typography.fontFamilyMono};
  font-size: ${i.w.typography.fontSizeSm};
  white-space: pre-wrap;
`;let ce=!1;function me({code:e}){const a=(0,n.useRef)(null),[t,l]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let n=!1;return async function(){const t=(await o.e(774).then(o.bind(o,30774))).default;if(ce||(t.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:i.w.colors.codeBg,primaryColor:i.w.colors.accent,primaryTextColor:i.w.colors.mainText,lineColor:i.w.colors.border}}),ce=!0),a.current&&!n)try{const o=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:i}=await t.render(o,e);!n&&a.current&&(a.current.innerHTML=i)}catch(e){n||l(e instanceof Error?e.message:String(e))}}(),()=>{n=!0}},[e]),t?(0,r.jsx)(de,{children:(0,r.jsxs)(se,{children:["Mermaid error: ",t]})}):(0,r.jsx)(de,{ref:a})}var ge=o(68383),ue=o(21426),fe=o(25609),pe=o(20320);const ye=t.default.div`
  margin: ${i.w.spacing.lg} 0;
  border-radius: ${i.w.borderRadius.md};
  border: 1px solid ${i.w.colors.codeBorder};
  overflow: hidden;
`,be=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${i.w.colors.codeBorder};
`,he=t.default.span`
  font-family: ${i.w.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,xe=t.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":i.w.colors.border};
  border-radius: ${i.w.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":i.w.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${i.w.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${i.w.colors.sidebarText}; border-color: ${i.w.colors.sidebarText}; }
`,ze={...ue.A,'pre[class*="language-"]':{...ue.A['pre[class*="language-"]'],background:i.w.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...ue.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function we({lang:e="text",code:a}){const[o,t]=(0,n.useState)(!1);return(0,r.jsxs)(ye,{children:[(0,r.jsxs)(be,{children:[(0,r.jsx)(he,{children:e}),(0,r.jsxs)(xe,{copied:o,onClick:()=>{navigator.clipboard.writeText(a).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})},children:[o?(0,r.jsx)(fe.A,{size:12}):(0,r.jsx)(pe.A,{size:12}),o?"Copied!":"Copy"]})]}),(0,r.jsx)(ge.A,{language:e,style:ze,showLineNumbers:a.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:i.w.colors.codeBg},wrapLongLines:!1,children:a})]})}var $e=o(65569),ve=o(8218),Ae=o(57230),ke=o(22966),je=o(21069);const Se={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:$e.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:ve.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:Ae.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:ke.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:je.A,label:"Caution",color:"#f85149"}},Te=t.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${i.w.borderRadius.md} ${i.w.borderRadius.md} 0;
  padding: ${i.w.spacing.md} ${i.w.spacing.lg};
  margin: ${i.w.spacing.lg} 0;
`,Me=t.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${i.w.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${i.w.typography.fontFamily};
  margin-bottom: ${i.w.spacing.sm};
`,Be=t.default.div`
  color: ${i.w.colors.mainText};
  font-size: ${i.w.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function Ee({type:e,children:a}){const o=Se[e]??Se.NOTE,n=o.icon;return(0,r.jsxs)(Te,{bg:o.bg,border:o.border,children:[(0,r.jsxs)(Me,{color:o.color,children:[(0,r.jsx)(n,{size:15,strokeWidth:2}),o.label]}),(0,r.jsx)(Be,{children:a})]})}const Ce=t.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${i.w.spacing.xxl} 0 ${i.w.spacing.xxl} ${i.w.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,Pe=t.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${i.w.colors.sidebarTextMuted};
  font-family: ${i.w.typography.fontFamily};
  margin-bottom: ${i.w.spacing.md};
`,Re=t.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,Le=t.default.a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${i.w.typography.fontSizeSm};
  font-family: ${i.w.typography.fontFamily};
  color: ${({active:e})=>e?i.w.colors.accent:i.w.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?i.w.colors.accent:"transparent"};
  border-radius: 0 ${i.w.borderRadius.sm} ${i.w.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${i.w.colors.mainText}; background: ${i.w.colors.sidebarHover}; }
`;function Fe({headings:e,activeId:a}){return e.length<2?null:(0,r.jsxs)(Ce,{children:[(0,r.jsx)(Pe,{children:"On this page"}),(0,r.jsx)(Re,{children:e.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(Le,{href:`#${e.id}`,active:a===e.id,level:e.level,onClick:a=>{a.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function Ne(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function Ie(e){const{Children:a,isValidElement:n}=o(27359);return a.toArray(e).map(e=>"string"==typeof e?e:"number"==typeof e?String(e):n(e)?Ie(e.props.children??""):"").join("")}function Ke(){return e=>{!function e(a){if("blockquote"===a.type){const e=a.children?.[0];if("paragraph"===e?.type){const o=e.children?.[0];if("text"===o?.type){const n=o.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);n&&(o.value=o.value.slice(n[0].length),o.value.trim()||1!==e.children.length||a.children.shift(),a.data=a.data??{},a.data.hName="div",a.data.hProperties={"data-callout":n[1].toUpperCase()})}}}a.children?.forEach(e)}(e)}}const Ge=t.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${i.w.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,De=t.default.div`flex: 1; min-width: 0;`,He=t.default.article`
  padding: ${i.w.spacing.xxl} 0;
  color: ${i.w.colors.mainText};
  font-family: ${i.w.typography.fontFamily};
  font-size: ${i.w.typography.fontSizeMd};
  line-height: ${i.w.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${i.w.spacing.xl} 0 ${i.w.spacing.md};
    color: ${i.w.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${i.w.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${i.w.typography.fontSizeXl}; border-bottom: 1px solid ${i.w.colors.border}; padding-bottom: ${i.w.spacing.sm}; }
  h2 { font-size: ${i.w.typography.fontSizeLg}; border-bottom: 1px solid ${i.w.colors.border}; padding-bottom: ${i.w.spacing.xs}; }
  h3 { font-size: ${i.w.typography.fontSizeMd}; }

  p { margin: ${i.w.spacing.md} 0; }

  a { color: ${i.w.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${i.w.colors.accentHover}; } }

  ul, ol { margin: ${i.w.spacing.md} 0; padding-left: ${i.w.spacing.xl}; }
  li { margin: ${i.w.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${i.w.colors.border};
    margin: ${i.w.spacing.lg} 0;
    padding: ${i.w.spacing.sm} ${i.w.spacing.lg};
    background: ${i.w.colors.surface};
    color: ${i.w.colors.mainTextMuted};
    border-radius: 0 ${i.w.borderRadius.sm} ${i.w.borderRadius.sm} 0;
  }

  code {
    font-family: ${i.w.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${i.w.colors.codeBg};
    border: 1px solid ${i.w.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${i.w.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${i.w.spacing.lg} 0; font-size: ${i.w.typography.fontSizeBase}; }
  th, td { padding: ${i.w.spacing.sm} ${i.w.spacing.md}; border: 1px solid ${i.w.colors.border}; text-align: left; }
  th { background: ${i.w.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${i.w.colors.surface}; }

  hr { border: none; border-top: 1px solid ${i.w.colors.border}; margin: ${i.w.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${i.w.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${i.w.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${i.w.spacing.lg} 0; }
`,Oe=t.default.div`
  display: flex;
  gap: ${i.w.spacing.lg};
  padding: ${i.w.spacing.xxl} 0;
  border-top: 1px solid ${i.w.colors.border};
  margin-top: ${i.w.spacing.xxl};
`,Ve=t.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${i.w.spacing.md} ${i.w.spacing.lg};
  background: ${i.w.colors.surface};
  border: 1px solid ${i.w.colors.border};
  border-radius: ${i.w.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${i.w.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,Ye=t.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${i.w.colors.sidebarTextMuted}; font-family: ${i.w.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,_e=t.default.div`
  font-size: ${i.w.typography.fontSizeBase}; color: ${i.w.colors.accent};
  font-family: ${i.w.typography.fontFamily}; font-weight: 500;
`,We=t.default.div`
  color: ${i.w.colors.mainTextMuted};
  padding: ${i.w.spacing.xxl} ${i.w.spacing.xl};
  font-family: ${i.w.typography.fontFamily};
`;function Je(e){return function({children:a,...o}){const n=`h${e}`,i=Ie(a),t=Ne(i);return(0,r.jsxs)(n,{id:t,...o,children:[a,(0,r.jsx)("a",{className:"heading-anchor",href:`#${t}`,"aria-label":`Link to "${i}"`,children:(0,r.jsx)(ne.A,{size:14})})]})}}function Ue({file:e,prevEntry:a,nextEntry:i,onNavigate:t}){const[l,d]=(0,n.useState)(null),[s,c]=(0,n.useState)(null),m=(0,n.useRef)(null);if((0,n.useEffect)(()=>{d(null),fetch(`${o.p}content/${e}`).then(e=>{if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);return e.text()}).then(d).catch(a=>d(`> **Error loading \`${e}\`:** ${a.message}`))},[e]),(0,n.useEffect)(()=>{if(!l||!m.current)return;const e=m.current.querySelectorAll("h2[id], h3[id]");if(!e.length)return;const a=new IntersectionObserver(e=>{const a=e.filter(e=>e.isIntersecting);a.length&&c(a[0].target.id)},{rootMargin:"-10% 0% -60% 0%",threshold:0});return e.forEach(e=>a.observe(e)),()=>a.disconnect()},[l]),null===l)return(0,r.jsx)(We,{children:"Loading…"});const g=function(e){const a=[],o=/^(#{2,3})\s+(.+)$/gm;let n;for(;null!==(n=o.exec(e));){const e=n[1].length,o=n[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");a.push({level:e,text:o,id:Ne(o)})}return a}(l),u=a||i;return(0,r.jsxs)(Ge,{children:[(0,r.jsxs)(De,{children:[(0,r.jsx)(He,{ref:m,children:(0,r.jsx)(ae.oz,{remarkPlugins:[oe.A,le.A,Ke],rehypePlugins:[te.A,re.A],components:{div({node:e,children:a,...o}){const n=o["data-callout"];return n?(0,r.jsx)(Ee,{type:n,children:a}):(0,r.jsx)("div",{...o,children:a})},h1:Je(1),h2:Je(2),h3:Je(3),h4:Je(4),pre:({children:e})=>(0,r.jsx)(r.Fragment,{children:e}),code({className:e,children:a}){const o=/language-(\w+)/.exec(e??"")?.[1],n=String(a).replace(/\n$/,"");return"mermaid"===o?(0,r.jsx)(me,{code:n}):o||n.includes("\n")?(0,r.jsx)(we,{lang:o,code:n}):(0,r.jsx)("code",{className:e,children:a})}},children:l})}),u&&(0,r.jsxs)(Oe,{children:[a?(0,r.jsxs)(Ve,{align:"left",onClick:()=>t?.(a),children:[(0,r.jsxs)(Ye,{children:[(0,r.jsx)(ie.A,{size:13})," Previous"]}),(0,r.jsx)(_e,{children:a.name})]}):(0,r.jsx)("div",{style:{flex:1}}),i?(0,r.jsxs)(Ve,{align:"right",onClick:()=>t?.(i),children:[(0,r.jsxs)(Ye,{children:["Next ",(0,r.jsx)(k.A,{size:13})]}),(0,r.jsx)(_e,{children:i.name})]}):(0,r.jsx)("div",{style:{flex:1}})]})]}),(0,r.jsx)(Fe,{headings:g,activeId:s})]})}const Ze=t.default.div`
  display: flex;
  gap: 4px;
  background: ${i.w.colors.surface};
  border: 1px solid ${i.w.colors.border};
  border-radius: ${i.w.borderRadius.md};
  padding: 2px;
`,Xe=t.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${i.w.typography.fontFamilyMono};
  border: none;
  border-radius: ${i.w.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?i.w.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":i.w.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":i.w.colors.mainText};
  }
`;function qe({languages:e,activeLang:a,onChange:o}){return(0,r.jsx)(Ze,{children:Object.entries(e).map(([e,{label:n}])=>(0,r.jsx)(Xe,{active:a===e,onClick:()=>o(e),children:n},e))})}function Qe(e,a){for(const o of e){if(o.id===a)return o;if(o.children){const e=Qe(o.children,a);if(e)return e}}}function ea(e){return e.flatMap(e=>e.children?ea(e.children):e.file?[e]:[])}const aa=t.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${i.w.typography.fontFamily};
  background: ${i.w.colors.mainBg};
`,oa=t.default.div`
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
`,na=t.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${i.w.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${i.w.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,ia=t.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,ta=t.default.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${i.w.colors.mainText} 0%,
    ${i.w.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,ra=t.default.p`
  font-size: ${i.w.typography.fontSizeMd};
  color: ${i.w.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,la=t.default.span`
  font-size: ${i.w.typography.fontSizeSm};
  color: ${i.w.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`;function da({title:e,sub:a}){return(0,r.jsxs)(aa,{children:[(0,r.jsx)(na,{}),(0,r.jsx)(oa,{size:500,x:10,y:-10,hue:210,dur:7}),(0,r.jsx)(oa,{size:400,x:60,y:50,hue:270,dur:9}),(0,r.jsx)(oa,{size:300,x:30,y:70,hue:190,dur:6}),(0,r.jsxs)(ia,{children:[(0,r.jsx)(ta,{children:e}),(0,r.jsx)(ra,{children:a}),(0,r.jsxs)(la,{children:[(0,r.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"15 18 9 12 15 6"})}),"Browse the sidebar"]})]})]})}function sa(e,a,o){return"string"==typeof e?e:e[a]??e[o]??Object.values(e)[0]??""}function ca({navigation:e,languages:a,defaultLang:o,hashPrefix:i,topBarRight:t,welcomeTitle:l="Blog",welcomeSub:d="Notes, guides, and references — pick a topic from the sidebar to get started."}){const s=a?Object.keys(a):[],c=s.length>1,[m,g]=(0,n.useState)(()=>o??s[0]??""),u=(0,n.useMemo)(()=>a&&m?a[m].navigation:e??{entries:[]},[a,e,m]),f=((0,n.useMemo)(()=>ea(u.entries),[u]),(0,n.useCallback)(e=>{const a=e.match(new RegExp(`^#\\/${i}\\/(.+)$`));if(a)return Qe(u.entries,a[1])},[u,i])),[p,y]=(0,n.useState)(()=>f(window.location.hash)??null);(0,n.useEffect)(()=>{y(null)},[m]),(0,n.useEffect)(()=>{const e=()=>{const e=f(window.location.hash);e&&y(e)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[f]);const b=(0,n.useCallback)(e=>{e.file&&(y(e),window.location.hash=`#/${i}/${e.id}`)},[i]),h=(0,n.useMemo)(()=>ea(u.entries),[u]),x=h.findIndex(e=>e.id===p?.id),z=x>0?h[x-1]:null,w=x<h.length-1?h[x+1]:null,$=p?.label??p?.name??i,A=sa(l,m,o??s[0]??""),k=sa(d,m,o??s[0]??""),j=c&&a?(0,r.jsx)(qe,{languages:Object.fromEntries(s.map(e=>[e,{label:a[e].label}])),activeLang:m,onChange:g}):null;return(0,r.jsx)(v,{title:$,activeId:p?.id??null,topBarRight:(0,r.jsxs)(r.Fragment,{children:[j,t]}),sidebar:(0,r.jsx)(ee,{config:u,activeId:p?.id??null,onSelect:b,hashPrefix:i}),children:p?.file?(0,r.jsx)(Ue,{file:p.file,prevEntry:z,nextEntry:w,onNavigate:b}):(0,r.jsx)(da,{title:A,sub:k})})}},74914(e,a,o){o.d(a,{FlyoutPanel:()=>b});var n=o(27359),i=o(53233),t=o(77207),r=o(20255),l=o(217),d=o(15959),s=o(65185),c=o(65723);const m=t.keyframes`
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
`,f=i.default.button`
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
`;function p({iconKey:e}){const a=e?s.t[e]??r.A:r.A;return(0,c.jsx)(a,{size:14,strokeWidth:1.75})}function y({entries:e,activeId:a,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(y,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,c.jsxs)(f,{active:a===e.id,onClick:()=>o(e),children:[(0,c.jsx)(p,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){const{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,d.c)();if(!a)return null;const i=a.entry.icon?s.t[a.entry.icon]??r.A:r.A;return(0,c.jsxs)(g,{anchorY:a.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(i,{size:13,strokeWidth:2}),a.entry.name]}),(0,c.jsx)(y,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},15959(e,a,o){o.d(a,{I:()=>i,c:()=>t});var n=o(27359);const i=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,n.useContext)(i)},65185(e,a,o){o.d(a,{t:()=>Y});var n=o(49510),i=o(99038),t=o(28207),r=o(36896),l=o(37901),d=o(39848),s=o(22164),c=o(43775),m=o(83539),g=o(41783),u=o(1837),f=o(82314),p=o(35751),y=o(20255),b=o(69633),h=o(92946),x=o(40822),z=o(36720),w=o(43317),$=o(52709),v=o(83517),A=o(37032),k=o(6949),j=o(8218),S=o(36829),T=o(15553),M=o(59591),B=o(72820),E=o(14621),C=o(66673),P=o(49033),R=o(31365),L=o(65912),F=o(88641),N=o(83249),I=o(1821),K=o(19161),G=o(71849),D=o(77747),H=o(2932),O=o(24525),V=o(57230);const Y={activity:r.A,"bar-chart-2":n.A,book:d.A,"book-open":l.A,calendar:c.A,clock:g.A,"circle-dot":m.A,feather:f.A,"file-text":p.A,globe:z.A,hash:w.A,heart:$.A,landmark:v.A,layers:t.A,leaf:k.A,map:M.A,package:C.A,compass:u.A,"git-branch":h.A,github:x.A,minus:E.A,terminal:N.A,thermometer:I.A,users:G.A,wind:D.A,"pie-chart":i.A,plus:R.A,slash:L.A,star:F.A,zap:V.A,bot:s.A,lightbulb:j.A,"message-square":B.A,wrench:H.A,x:O.A,"layout-grid":A.A,list:S.A,file:y.A,folder:b.A,"map-pin":T.A,"pen-tool":P.A,type:K.A}},217(e,a,o){o.d(a,{w:()=>n});const n={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},17068(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"book-open","children":[{"id":"y1-reading","name":"Reading & Writing","icon":"book","file":"en/year1/reading.md"},{"id":"y1-grammar","name":"Grammar","icon":"type","file":"en/year1/grammar.md"},{"id":"y1-vocabulary","name":"Vocabulary","icon":"list","file":"en/year1/vocabulary.md"}]},{"id":"year2","name":"Year 2","icon":"book-open","children":[{"id":"y2-reading","name":"Reading & Writing","icon":"book","file":"en/year2/reading.md"},{"id":"y2-grammar","name":"Grammar","icon":"type","file":"en/year2/grammar.md"},{"id":"y2-texttypes","name":"Text Types","icon":"file-text","file":"en/year2/texttypes.md"},{"id":"y2-vocabulary","name":"Vocabulary","icon":"list","file":"en/year2/vocabulary.md"}]},{"id":"year3","name":"Year 3","icon":"book-open","children":[{"id":"y3-reading","name":"Reading & Writing","icon":"book","file":"en/year3/reading.md"},{"id":"y3-grammar","name":"Grammar","icon":"type","file":"en/year3/grammar.md"},{"id":"y3-texttypes","name":"Text Types","icon":"file-text","file":"en/year3/texttypes.md"},{"id":"y3-vocabulary","name":"Vocabulary","icon":"list","file":"en/year3/vocabulary.md"},{"id":"y3-spelling","name":"Spelling","icon":"pen-tool","file":"en/year3/spelling.md"}]},{"id":"year4","name":"Year 4","icon":"book-open","children":[{"id":"y4-reading","name":"Reading & Writing","icon":"book","file":"en/year4/reading.md"},{"id":"y4-grammar","name":"Grammar","icon":"type","file":"en/year4/grammar.md"},{"id":"y4-texttypes","name":"Text Types","icon":"file-text","file":"en/year4/texttypes.md"},{"id":"y4-vocabulary","name":"Vocabulary","icon":"list","file":"en/year4/vocabulary.md"},{"id":"y4-spelling","name":"Spelling","icon":"pen-tool","file":"en/year4/spelling.md"}]}]}')},73463(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"book-open","children":[{"id":"y1-leitura","name":"Leitura e Escrita","icon":"book","file":"pt/year1/leitura.md"},{"id":"y1-gramatica","name":"Gramática","icon":"type","file":"pt/year1/gramatica.md"},{"id":"y1-vocabulario","name":"Vocabulário","icon":"list","file":"pt/year1/vocabulario.md"}]},{"id":"year2","name":"2.º Ano","icon":"book-open","children":[{"id":"y2-leitura","name":"Leitura e Escrita","icon":"book","file":"pt/year2/leitura.md"},{"id":"y2-gramatica","name":"Gramática","icon":"type","file":"pt/year2/gramatica.md"},{"id":"y2-texto","name":"Tipos de Texto","icon":"file-text","file":"pt/year2/texto.md"},{"id":"y2-vocabulario","name":"Vocabulário","icon":"list","file":"pt/year2/vocabulario.md"}]},{"id":"year3","name":"3.º Ano","icon":"book-open","children":[{"id":"y3-leitura","name":"Leitura e Escrita","icon":"book","file":"pt/year3/leitura.md"},{"id":"y3-gramatica","name":"Gramática","icon":"type","file":"pt/year3/gramatica.md"},{"id":"y3-texto","name":"Tipos de Texto","icon":"file-text","file":"pt/year3/texto.md"},{"id":"y3-vocabulario","name":"Vocabulário","icon":"list","file":"pt/year3/vocabulario.md"},{"id":"y3-ortografia","name":"Ortografia","icon":"pen-tool","file":"pt/year3/ortografia.md"}]},{"id":"year4","name":"4.º Ano","icon":"book-open","children":[{"id":"y4-leitura","name":"Leitura e Escrita","icon":"book","file":"pt/year4/leitura.md"},{"id":"y4-gramatica","name":"Gramática","icon":"type","file":"pt/year4/gramatica.md"},{"id":"y4-texto","name":"Tipos de Texto","icon":"file-text","file":"pt/year4/texto.md"},{"id":"y4-vocabulario","name":"Vocabulário","icon":"list","file":"pt/year4/vocabulario.md"},{"id":"y4-ortografia","name":"Ortografia","icon":"pen-tool","file":"pt/year4/ortografia.md"}]}]}')}}]);
//# sourceMappingURL=2402.ae28d7882b009534e8f0.js.map