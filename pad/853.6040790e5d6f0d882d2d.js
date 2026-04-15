"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[853],{74914(o,e,a){a.d(e,{FlyoutPanel:()=>y});var n=a(27359),t=a(53233),r=a(77207),i=a(20255),l=a(217),s=a(15959),d=a(65185),c=a(65723);const m=r.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=t.default.div`
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
`,p=t.default.button`
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
`;function f({iconKey:o}){const e=o?d.t[o]??i.A:i.A;return(0,c.jsx)(e,{size:14,strokeWidth:1.75})}function b({entries:o,activeId:e,onSelect:a}){return(0,c.jsx)(c.Fragment,{children:o.map(o=>o.children?(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(b,{entries:o.children,activeId:e,onSelect:a})},o.id):(0,c.jsxs)(p,{active:e===o.id,onClick:()=>a(o),children:[(0,c.jsx)(f,{iconKey:o.icon}),o.name]},o.id))})}function y({activeId:o}){const{flyout:e,scheduleFlyoutClose:a,cancelFlyoutClose:n}=(0,s.c)();if(!e)return null;const t=e.entry.icon?d.t[e.entry.icon]??i.A:i.A;return(0,c.jsxs)(g,{anchorY:e.anchorY,onMouseEnter:n,onMouseLeave:a,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(t,{size:13,strokeWidth:2}),e.entry.name]}),(0,c.jsx)(b,{entries:e.entry.children??[],activeId:o,onSelect:o=>{e.onSelect(o),a()}})]})}},15959(o,e,a){a.d(e,{c:()=>r});var n=a(27359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,n.useContext)(t)},65185(o,e,a){a.d(e,{t:()=>U});var n=a(49510),t=a(99038),r=a(28207),i=a(36896),l=a(37901),s=a(39848),d=a(22164),c=a(43775),m=a(83539),g=a(41783),u=a(1837),p=a(82314),f=a(35751),b=a(20255),y=a(69633),x=a(92946),h=a(40822),w=a(36720),z=a(43317),$=a(52709),v=a(83517),A=a(37032),k=a(6949),S=a(8218),j=a(36829),T=a(15553),M=a(59591),B=a(72820),C=a(14621),E=a(66673),P=a(49033),R=a(31365),D=a(65912),L=a(88641),F=a(83249),N=a(1821),I=a(19161),H=a(71849),K=a(77747),G=a(2932),O=a(24525),Y=a(57230);const U={activity:i.A,"bar-chart-2":n.A,book:s.A,"book-open":l.A,calendar:c.A,clock:g.A,"circle-dot":m.A,feather:p.A,"file-text":f.A,globe:w.A,hash:z.A,heart:$.A,landmark:v.A,layers:r.A,leaf:k.A,map:M.A,package:E.A,compass:u.A,"git-branch":x.A,github:h.A,minus:C.A,terminal:F.A,thermometer:N.A,users:H.A,wind:K.A,"pie-chart":t.A,plus:R.A,slash:D.A,star:L.A,zap:Y.A,bot:d.A,lightbulb:S.A,"message-square":B.A,wrench:G.A,x:O.A,"layout-grid":A.A,list:j.A,file:b.A,folder:y.A,"map-pin":T.A,"pen-tool":P.A,type:I.A}},85723(o,e,a){a.d(e,{UO:()=>Y,MJ:()=>M,KL:()=>h,w4:()=>n.w4,mZ:()=>w});var n=a(217),t=a(27359),r=a(53233),i=a(65723);r.default.button`
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
`;var l=a(77207);a(15959);const s="260px",d="56px",c=(r.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,r.default.div`
  width: ${d};
  min-width: ${d};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,r.default.button`
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
`,l.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`);r.default.button`
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
`,r.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${c} 10s ease ${({index:o})=>.07*o}s infinite;

  ${({accent:o})=>o&&`\n    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,r.default.div`
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
`,r.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w4.spacing.sm};
  padding: 0 ${n.w4.spacing.lg};
`,r.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,r.default.div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,r.default.aside`
  width: ${({collapsed:o})=>o?d:s};
  min-width: ${({collapsed:o})=>o?d:s};
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
`,r.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,r.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,a(65185),r.default.div`
  display: grid;
  grid-template-rows: ${({open:o})=>o?"1fr":"0fr"};
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
  padding: ${({collapsed:o})=>o?"10px 0":`${n.w4.spacing.sm} ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:o})=>o?"center":"space-between"};
  gap: ${({collapsed:o})=>o?"0":n.w4.spacing.sm};
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
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:o})=>o?"90deg":"0deg"});
  }
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:o})=>o?"9px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:o})=>o?"center":"flex-start"};
  gap: ${({collapsed:o})=>o?"0":"8px"};
  background: ${({active:o})=>o?n.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:o})=>o?"none":"2px"} solid
    ${({active:o})=>o?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:o})=>o?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: ${({active:o})=>o?"600":"400"};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:o})=>o?"0":`0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }
`;const m=l.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;r.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${m} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,a(74914);var g=a(61920),u=a(48607),p=a(68479);r.default.button`
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
`,g.A,u.A,p.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(o=>o.places);const f="documents",b="settings";function y(){return new Promise((o,e)=>{const a=indexedDB.open("atlantis-tools",2);a.onupgradeneeded=o=>{const e=o.target.result;e.objectStoreNames.contains(f)||e.createObjectStore(f,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),e.objectStoreNames.contains(b)||e.createObjectStore(b,{keyPath:"key"})},a.onsuccess=()=>o(a.result),a.onerror=()=>e(a.error)})}let x={async saveDoc(o,e,a){const n=await y(),t={appId:o,name:e,content:a,savedAt:Date.now()};return new Promise((o,e)=>{const a=n.transaction(f,"readwrite").objectStore(f).add(t);a.onsuccess=()=>o(String(a.result)),a.onerror=()=>e(a.error)})},async updateDoc(o,e,a){const n=await y();return new Promise((t,r)=>{const i=n.transaction(f,"readwrite").objectStore(f),l=i.get(Number(o));l.onsuccess=()=>{const o=l.result;if(!o)return void r(new Error("Doc not found"));const n=i.put({...o,name:e,content:a,savedAt:Date.now()});n.onsuccess=()=>t(),n.onerror=()=>r(n.error)},l.onerror=()=>r(l.error)})},async listDocs(o){const e=await y();return new Promise((a,n)=>{const t=e.transaction(f,"readonly").objectStore(f).index("appId").getAll(o);t.onsuccess=()=>a(t.result.map(o=>({...o,id:String(o.id)})).reverse()),t.onerror=()=>n(t.error)})},async deleteDoc(o){const e=await y();return new Promise((a,n)=>{const t=e.transaction(f,"readwrite").objectStore(f).delete(Number(o));t.onsuccess=()=>a(),t.onerror=()=>n(t.error)})},async putSetting(o,e){const a=await y();return new Promise((n,t)=>{const r=a.transaction(b,"readwrite").objectStore(b).put({key:o,value:e});r.onsuccess=()=>n(),r.onerror=()=>t(r.error)})},async getSetting(o){const e=await y();return new Promise((a,n)=>{const t=e.transaction(b,"readonly").objectStore(b).get(o);t.onsuccess=()=>a(t.result?t.result.value:null),t.onerror=()=>n(t.error)})}};function h(o,e,a){return x.saveDoc(o,e,a)}function w(o,e,a){return x.updateDoc(o,e,a)}const z=r.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,$=r.default.div`
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
`,v=r.default.div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,A=r.default.input`
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
`,k=r.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,S=r.default.button`
  padding: 7px 18px;
  border-radius: ${n.w4.borderRadius.md};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:o,danger:e})=>e?"rgba(248,81,73,0.12)":o?n.w4.colors.accent:"none"};
  color: ${({primary:o,danger:e})=>e?n.w4.colors.danger:o?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:o,danger:e})=>e?n.w4.colors.danger:o?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,j=r.default.div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,T=r.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`;function M({onSave:o,onUpdate:e,onCancel:a,existingDoc:n}){const[r,l]=(0,t.useState)(n?.name??""),s=(0,t.useRef)(null);return(0,t.useEffect)(()=>{s.current?.focus(),n&&s.current?.select()},[n]),(0,i.jsx)(z,{onClick:a,children:(0,i.jsxs)($,{onClick:o=>o.stopPropagation(),children:[(0,i.jsx)(v,{children:"Save document"}),n&&e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T,{children:"Update the current version or save as a new one."}),(0,i.jsxs)(k,{children:[(0,i.jsx)(S,{onClick:a,children:"Cancel"}),(0,i.jsxs)(S,{danger:!0,onClick:e,children:['Update "',n.name,'"']})]}),(0,i.jsx)(j,{})]}),(0,i.jsx)(A,{ref:s,value:r,onChange:o=>l(o.target.value),onKeyDown:t=>{"Enter"===t.key&&r.trim()&&(n&&r.trim()===n.name&&e?e():o(r.trim())),"Escape"===t.key&&a()},placeholder:n?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,i.jsxs)(k,{children:[!n&&(0,i.jsx)(S,{onClick:a,children:"Cancel"}),(0,i.jsx)(S,{primary:!0,disabled:!r.trim(),onClick:()=>o(r.trim()),children:"Save as new"})]})]})})}var B=a(18006),C=a(70679),E=a(54872);const P=r.default.div`
  position: relative;
`,R=r.default.button`
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
`,D=r.default.div`
  display: ${({open:o})=>o?"flex":"none"};
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
`,L=r.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,F=r.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,N=r.default.div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,I=r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,H=r.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,K=r.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,G=r.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-top: 1px;
`,O=r.default.button`
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
`;function Y({appId:o,onLoad:e}){const[a,n]=(0,t.useState)(!1),[r,l]=(0,t.useState)([]),s=(0,t.useRef)(null),d=(0,t.useCallback)(()=>{(function(o){return x.listDocs(o)})(o).then(l).catch(()=>{})},[o]);(0,t.useEffect)(()=>{if(!a)return;d();const o=o=>{s.current&&!s.current.contains(o.target)&&n(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[a,d]);return(0,i.jsxs)(P,{ref:s,children:[(0,i.jsxs)(R,{onClick:()=>n(o=>!o),children:[(0,i.jsx)(B.A,{size:14}),"Saved",(0,i.jsx)(C.A,{size:13,style:{marginLeft:2}})]}),(0,i.jsxs)(D,{open:a,children:[(0,i.jsx)(L,{children:"Saved versions"}),(0,i.jsx)(F,{children:0===r.length?(0,i.jsx)(N,{children:"No saved documents yet."}):r.map(o=>{return(0,i.jsxs)(I,{children:[(0,i.jsxs)(H,{onClick:()=>{e(o.content,o.id,o.name),n(!1)},children:[(0,i.jsx)(K,{children:o.name}),(0,i.jsx)(G,{children:(a=o.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a)))})]}),(0,i.jsx)(O,{onClick:e=>(async(o,e)=>{o.stopPropagation(),await function(o){return x.deleteDoc(o)}(e),l(o=>o.filter(o=>o.id!==e))})(e,o.id),title:"Delete",children:(0,i.jsx)(E.A,{size:13})})]},o.id);var a})})]})]})}r.default.div`
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
  height: 48px;
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding: 0 ${n.w4.spacing.lg};
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
`;const U=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,_=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,V=l.keyframes`
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
  animation: ${U} 0.4s ease 0.15s both;
`,r.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,r.default.div`
  position: absolute;
  inset: 0;
  animation: ${_} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  background: ${n.w4.colors.border};
  animation: ${V} 1.4s ease-in-out infinite;
`,r.default.span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},217(o,e,a){a.d(e,{w4:()=>t});const n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#7a8599",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.15)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#2a3040",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1a2030",success:"#34d399",warning:"#fbbf24",danger:"#f87171"},t={colors:function(){const o={};for(const e of Object.keys(n))o[e]=`var(--at-${e})`;return o}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},78967(o,e,a){a.d(e,{M:()=>f}),a(27359);var n=a(53233),t=a(15496),r=a(51530),i=a(85723),l=a(65723);const s=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${({collapsed:o})=>o?"0 0 0px":"1"};
  min-width: ${({collapsed:o})=>o?"0":"200px"};
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
`,g=n.default.textarea`
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
`,u=n.default.button`
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
`,p=n.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;function f({value:o,onChange:e,collapsed:a,onToggleCollapse:n,scrollRef:i,onScroll:f}){return a?(0,l.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,l.jsxs)(u,{onClick:n,title:"Show editor",children:[(0,l.jsx)(r.A,{size:14}),(0,l.jsx)(p,{children:"Editor"})]})}):(0,l.jsxs)(s,{collapsed:!1,children:[(0,l.jsxs)(d,{children:[(0,l.jsx)(c,{children:"Editor"}),(0,l.jsx)(m,{onClick:n,title:"Collapse editor",children:(0,l.jsx)(t.A,{size:15})})]}),(0,l.jsx)(g,{ref:i,value:o,onChange:o=>e(o.target.value),onScroll:f,placeholder:"Write markdown here…",spellCheck:!1})]})}},61326(o,e,a){a.d(e,{H:()=>y});var n=a(27359),t=a(53233),r=a(37901),i=a(70679),l=a(85723),s=a(35949),d=a(65723);const c=t.default.button`
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
  display: ${({open:o})=>o?"block":"none"};
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
`,g=t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
`,u=t.default.button`
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
`,p=t.default.div`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 500;
`,f=t.default.div`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-top: 1px;
`,b=t.default.div`
  position: relative;
`;function y({onSelect:o}){const[e,a]=(0,n.useState)(!1),t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!e)return;const o=o=>{t.current&&!t.current.contains(o.target)&&a(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[e]),(0,d.jsxs)(b,{ref:t,children:[(0,d.jsxs)(c,{onClick:()=>a(o=>!o),children:[(0,d.jsx)(r.A,{size:14}),"Examples",(0,d.jsx)(i.A,{size:13,style:{marginLeft:2}})]}),(0,d.jsxs)(m,{open:e,children:[(0,d.jsx)(g,{children:"Load an example"}),s.S.map(e=>(0,d.jsxs)(u,{onClick:()=>{o(e.content),a(!1)},children:[(0,d.jsx)(p,{children:e.label}),(0,d.jsx)(f,{children:e.description})]},e.id))]})]})}},27665(o,e,a){a.d(e,{C:()=>f});var n=a(27359),t=a(53233),r=a(37901),i=a(70679),l=a(85723),s=a(35339),d=a(65723);const c=t.default.button`
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
  display: ${({open:o})=>o?"block":"none"};
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
`,g=t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
`,u=t.default.button`
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
`,p=t.default.div`
  position: relative;
`;function f({onSelect:o}){const[e,a]=(0,n.useState)(!1),t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!e)return;const o=o=>{t.current&&!t.current.contains(o.target)&&a(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[e]),(0,d.jsxs)(p,{ref:t,children:[(0,d.jsxs)(c,{onClick:()=>a(o=>!o),children:[(0,d.jsx)(r.A,{size:14}),"Examples",(0,d.jsx)(i.A,{size:13,style:{marginLeft:2}})]}),(0,d.jsxs)(m,{open:e,children:[(0,d.jsx)(g,{children:"Load a diagram"}),s.U.map(e=>(0,d.jsx)(u,{onClick:()=>{o(e.code),a(!1)},children:e.label},e.label))]})]})}},69835(o,e,a){a.d(e,{u:()=>w});var n=a(27359),t=a(53233),r=a(52534),i=a(13045),l=a(49881),s=a(85723),d=a(30774),c=a(65723);d.default.initialize({startOnLoad:!1,theme:"dark",securityLevel:"loose"});const m=`\n  &::-webkit-scrollbar { width: 6px; }\n  &::-webkit-scrollbar-thumb { background: ${s.w4.colors.border}; border-radius: 3px; }\n`,g=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: #1a1f2e;
`,u=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${s.w4.spacing.md};
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,p=t.default.span`
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
`,b=t.default.div`
  flex: 1;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${s.w4.spacing.xl};
  ${m}
  & svg { max-width: 100%; height: auto; }
`,y=t.default.div`
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
`,x=t.default.button`
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
`,h=t.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${s.w4.typography.fontFamily};
  writing-mode: vertical-rl;
`;function w({code:o,collapsed:e,onToggleCollapse:a}){const[t,s]=(0,n.useState)(""),[m,w]=(0,n.useState)(null),z=(0,n.useRef)(0),$=(0,n.useCallback)(async o=>{if(!o.trim())return s(""),void w(null);const e=++z.current;try{const a="mermaid-"+Date.now(),{svg:n}=await d.default.render(a,o);z.current===e&&(s(n),w(null))}catch(o){z.current===e&&(w(o instanceof Error?o.message:String(o)),s(""))}},[]);return(0,n.useEffect)(()=>{const e=setTimeout(()=>$(o),300);return()=>clearTimeout(e)},[o,$]),e?(0,c.jsxs)(x,{onClick:a,title:"Show preview",children:[(0,c.jsx)(l.A,{size:14}),(0,c.jsx)(h,{children:"Preview"})]}):(0,c.jsxs)(g,{children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(p,{children:"Preview"}),(0,c.jsx)(f,{onClick:a,title:"Collapse preview",children:(0,c.jsx)(i.A,{size:15})})]}),m&&(0,c.jsxs)(y,{children:[(0,c.jsx)(r.A,{size:14,style:{flexShrink:0,marginTop:1}}),m]}),(0,c.jsx)(b,{dangerouslySetInnerHTML:{__html:t}})]})}},89654(o,e,a){a.d(e,{r:()=>F});var n=a(27359),t=a(28976),r=a(18055),i=a(14944),l=a(39895),s=a(6930),d=(a(61385),a(53233)),c=a(49881),m=a(13045),g=a(85723),u=a(65723);const p=d.default.div`
  background: ${g.w4.colors.codeBg};
  border: 1px solid ${g.w4.colors.codeBorder};
  border-radius: ${g.w4.borderRadius.md};
  padding: ${g.w4.spacing.lg};
  margin: ${g.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;

  svg {
    max-width: 100%;
  }
`,f=d.default.div`
  color: #f85149;
  font-family: ${g.w4.typography.fontFamilyMono};
  font-size: ${g.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let b=!1;function y({code:o}){const e=(0,n.useRef)(null),[t,r]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let n=!1;return r(null),async function(){const t=(await Promise.resolve().then(a.bind(a,30774))).default;if(b||(t.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:g.w4.colors.codeBg,primaryColor:g.w4.colors.accent,primaryTextColor:g.w4.colors.mainText,lineColor:g.w4.colors.border}}),b=!0),e.current&&!n)try{const a=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:r}=await t.render(a,o);!n&&e.current&&(e.current.innerHTML=r)}catch(o){n||r(o instanceof Error?o.message:String(o))}}(),()=>{n=!0}},[o]),t?(0,u.jsx)(p,{children:(0,u.jsxs)(f,{children:["Mermaid error: ",t]})}):(0,u.jsx)(p,{ref:e})}var x=a(68383),h=a(21426),w=a(25609),z=a(20320);const $=d.default.div`
  margin: ${g.w4.spacing.lg} 0;
  border-radius: ${g.w4.borderRadius.md};
  border: 1px solid ${g.w4.colors.codeBorder};
  overflow: hidden;
`,v=d.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${g.w4.colors.codeBorder};
`,A=d.default.span`
  font-family: ${g.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${g.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,k=d.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:o})=>o?"#3fb950":g.w4.colors.border};
  border-radius: ${g.w4.borderRadius.sm};
  color: ${({copied:o})=>o?"#3fb950":g.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${g.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: ${g.w4.colors.sidebarText};
    border-color: ${g.w4.colors.sidebarText};
  }
`,S={...h.A,'pre[class*="language-"]':{...h.A['pre[class*="language-"]'],background:g.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...h.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function j({lang:o="text",code:e}){const[a,t]=(0,n.useState)(!1),r=e.split("\n").length>8;return(0,u.jsxs)($,{children:[(0,u.jsxs)(v,{children:[(0,u.jsx)(A,{children:o}),(0,u.jsxs)(k,{copied:a,onClick:()=>{navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})},children:[a?(0,u.jsx)(w.A,{size:12}):(0,u.jsx)(z.A,{size:12}),a?"Copied!":"Copy"]})]}),(0,u.jsx)(x.A,{language:o,style:S,showLineNumbers:r,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:g.w4.colors.codeBg},wrapLongLines:!1,children:e})]})}function T(){return o=>{!function o(e){if("blockquote"===e.type){const o=e.children?.[0];if("paragraph"===o?.type){const a=o.children?.[0];if("text"===a?.type){const n=a.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);n&&(a.value=a.value.slice(n[0].length),a.value.trim()||1!==o.children.length||e.children.shift(),e.data=e.data??{},e.data.hName="div",e.data.hProperties={"data-callout":n[1].toUpperCase()})}}}e.children?.forEach(o)}(o)}}const M=d.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: ${g.w4.colors.mainBg};
`,B=d.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${g.w4.spacing.md};
  height: 36px;
  background: ${g.w4.colors.sidebarBg};
  border-bottom: 1px solid ${g.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,C=d.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${g.w4.colors.sidebarTextMuted};
  font-family: ${g.w4.typography.fontFamily};
`,E=d.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${g.w4.borderRadius.sm};
  cursor: pointer;
  color: ${g.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${g.w4.colors.sidebarHover};
    color: ${g.w4.colors.sidebarText};
  }
`,P=d.default.div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${g.w4.colors.border};
    border-radius: 3px;
  }
`,R=d.default.article`
  max-width: 780px;
  margin: 0 auto;
  padding: ${g.w4.spacing.xl} ${g.w4.spacing.xxl};
  color: ${g.w4.colors.mainText};
  font-family: ${g.w4.typography.fontFamily};
  font-size: ${g.w4.typography.fontSizeMd};
  line-height: ${g.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${g.w4.spacing.xl} 0 ${g.w4.spacing.md};
    color: ${g.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    &:first-of-type { margin-top: 0; }
  }
  h1 { font-size: ${g.w4.typography.fontSizeXl}; border-bottom: 1px solid ${g.w4.colors.border}; padding-bottom: ${g.w4.spacing.sm}; }
  h2 { font-size: ${g.w4.typography.fontSizeLg}; border-bottom: 1px solid ${g.w4.colors.border}; padding-bottom: ${g.w4.spacing.xs}; }
  h3 { font-size: ${g.w4.typography.fontSizeMd}; }

  p { margin: ${g.w4.spacing.md} 0; }

  a {
    color: ${g.w4.colors.accent};
    text-decoration: none;
    &:hover { text-decoration: underline; color: ${g.w4.colors.accentHover}; }
  }

  ul, ol { margin: ${g.w4.spacing.md} 0; padding-left: ${g.w4.spacing.xl}; }
  li { margin: ${g.w4.spacing.xs} 0; }

  /* Task list checkboxes */
  li input[type="checkbox"] {
    margin-right: 6px;
    accent-color: ${g.w4.colors.accent};
  }

  blockquote {
    border-left: 3px solid ${g.w4.colors.border};
    margin: ${g.w4.spacing.lg} 0;
    padding: ${g.w4.spacing.sm} ${g.w4.spacing.lg};
    background: ${g.w4.colors.surface};
    color: ${g.w4.colors.mainTextMuted};
    border-radius: 0 ${g.w4.borderRadius.sm} ${g.w4.borderRadius.sm} 0;
  }

  /* Callout variants */
  div[data-callout] {
    border-radius: ${g.w4.borderRadius.md};
    padding: ${g.w4.spacing.md} ${g.w4.spacing.lg};
    margin: ${g.w4.spacing.lg} 0;
    border-left: 4px solid;
    font-size: ${g.w4.typography.fontSizeBase};

    &::before {
      display: block;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: ${g.w4.spacing.xs};
    }
  }
  div[data-callout="NOTE"]      { background: rgba(56,139,253,0.1);  border-color: #388bfd; &::before { content: "Note";      color: #388bfd; } }
  div[data-callout="TIP"]       { background: rgba(63,185,80,0.1);   border-color: #3fb950; &::before { content: "Tip";       color: #3fb950; } }
  div[data-callout="WARNING"]   { background: rgba(210,153,34,0.1);  border-color: #d29922; &::before { content: "Warning";   color: #d29922; } }
  div[data-callout="CAUTION"]   { background: rgba(248,81,73,0.1);   border-color: #f85149; &::before { content: "Caution";   color: #f85149; } }
  div[data-callout="IMPORTANT"] { background: rgba(163,113,247,0.1); border-color: #a371f7; &::before { content: "Important"; color: #a371f7; } }

  code {
    font-family: ${g.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${g.w4.colors.codeBg};
    border: 1px solid ${g.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${g.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${g.w4.spacing.lg} 0; font-size: ${g.w4.typography.fontSizeBase}; }
  th, td { padding: ${g.w4.spacing.sm} ${g.w4.spacing.md}; border: 1px solid ${g.w4.colors.border}; text-align: left; }
  th { background: ${g.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${g.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${g.w4.colors.border}; margin: ${g.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${g.w4.borderRadius.md}; }

  /* KaTeX display math spacing */
  .math-display {
    overflow-x: auto;
    padding: ${g.w4.spacing.md} 0;
  }
`,D=d.default.button`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${g.w4.colors.sidebarBg};
  border: 1px solid ${g.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${g.w4.borderRadius.md} 0 0 ${g.w4.borderRadius.md};
  cursor: pointer;
  color: ${g.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  align-self: center;

  &:hover {
    background: ${g.w4.colors.sidebarHover};
    color: ${g.w4.colors.sidebarText};
  }
`,L=d.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${g.w4.typography.fontFamily};
  writing-mode: vertical-rl;
`;function F({content:o,collapsed:e,onToggleCollapse:a,scrollRef:n,onScroll:d}){return e?(0,u.jsxs)(D,{onClick:a,title:"Show preview",children:[(0,u.jsx)(c.A,{size:14}),(0,u.jsx)(L,{children:"Preview"})]}):(0,u.jsxs)(M,{children:[(0,u.jsxs)(B,{children:[(0,u.jsx)(C,{children:"Preview"}),(0,u.jsx)(E,{onClick:a,title:"Collapse preview",children:(0,u.jsx)(m.A,{size:15})})]}),(0,u.jsx)(P,{ref:n,onScroll:d,children:(0,u.jsx)(R,{children:(0,u.jsx)(t.oz,{remarkPlugins:[r.A,i.A,T],rehypePlugins:[l.A,s.A],components:{div({node:o,children:e,...a}){const n=a["data-callout"];return n?(0,u.jsx)("div",{"data-callout":n,children:e}):(0,u.jsx)("div",{...a,children:e})},pre:({children:o})=>(0,u.jsx)(u.Fragment,{children:o}),code({className:o,children:e}){const a=/language-(\w+)/.exec(o??"")?.[1],n=String(e).replace(/\n$/,"");return"mermaid"===a?(0,u.jsx)(y,{code:n}):a||n.includes("\n")?(0,u.jsx)(j,{lang:a,code:n}):(0,u.jsx)("code",{className:o,children:e})}},children:o})})})]})}},35949(o,e,a){a.d(e,{C:()=>t,S:()=>n});const n=[{id:"showcase",label:"Full Showcase",description:"All supported features in one document",content:"# Markdown Editor — Feature Showcase\n\nWelcome! This editor supports **rich markdown** with live preview.\nUse the collapse buttons to hide the editor or preview pane.\n\n---\n\n## Text Formatting\n\nYou can write **bold**, *italic*, ~~strikethrough~~, and `inline code`.\nLinks work too: [Atlantis](https://github.com) opens in a new tab.\n\n> [!NOTE]\n> This is a GitHub-style callout. Supported types: NOTE, TIP, WARNING, CAUTION, IMPORTANT.\n\n> [!TIP]\n> Collapse the editor to enter reading mode. Collapse the preview to focus on writing.\n\n---\n\n## Code Blocks\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nasync function fetchUser(id: number): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n}\n```\n\n---\n\n## Math (LaTeX)\n\nInline math: $E = mc^2$ and the Euler identity $e^{i\\pi} + 1 = 0$.\n\nDisplay math:\n\n$$\n\\int_{-\\infty}^{\\infty} e^{-x^2}\\, dx = \\sqrt{\\pi}\n$$\n\n---\n\n## Mermaid Diagrams\n\n```mermaid\nflowchart TD\n    A[Write Markdown] --\x3e B{Live Preview}\n    B --\x3e|Renders| C[HTML Output]\n    B --\x3e|Supports| D[Math / Mermaid / Code]\n    C --\x3e E[Reading Mode]\n    D --\x3e E\n```\n\n---\n\n## Tables\n\n| Feature        | Supported | Notes                       |\n|----------------|-----------|-----------------------------|\n| GFM tables     | ✅        | With striped rows            |\n| Math (LaTeX)   | ✅        | Inline and block             |\n| Mermaid        | ✅        | Flowcharts, sequences, etc.  |\n| Syntax highlight | ✅      | 20+ languages               |\n\n---\n\n## Task Lists\n\n- [x] Side-by-side editor and preview\n- [x] Collapsible panes\n- [x] Math support\n- [x] Mermaid diagrams\n- [x] Syntax highlighting\n"},{id:"math",label:"Math (LaTeX)",description:"Mathematical notation with KaTeX",content:"# Math Examples\n\nAll math is rendered with KaTeX.\nUse `$...$` for inline math and `$$...$$` for display math.\n\n---\n\n## Calculus\n\n$$\n\\frac{d}{dx}\\left[\\int_a^x f(t)\\, dt\\right] = f(x)\n$$\n\n$$\n\\int_0^\\infty e^{-x^2}\\, dx = \\frac{\\sqrt{\\pi}}{2}\n$$\n\n---\n\n## Linear Algebra\n\n$$\n\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc\n$$\n\n---\n\n## Probability\n\nBayes' theorem:\n\n$$\nP(A \\mid B) = \\frac{P(B \\mid A)\\, P(A)}{P(B)}\n$$\n"}],t="# Hello\n\nStart writing **Markdown** here — the preview updates live.\n\nSwitch to **Mermaid** mode in the top bar to create diagrams.\n"},35339(o,e,a){a.d(e,{U:()=>n});const n=[{label:"Flowchart",code:"flowchart TD\n    A([Start]) --\x3e B{Is it working?}\n    B -- Yes --\x3e C[Great!]\n    B -- No --\x3e D[Debug it]\n    D --\x3e E{Fixed?}\n    E -- Yes --\x3e C\n    E -- No --\x3e F[Ask for help]\n    F --\x3e D\n    C --\x3e G([End])"},{label:"Sequence Diagram",code:"sequenceDiagram\n    participant Client\n    participant API\n    participant DB\n\n    Client->>API: POST /login\n    API->>DB: SELECT user WHERE email=?\n    DB--\x3e>API: User record\n    API--\x3e>Client: 200 OK + JWT token\n    Client->>API: GET /profile (Bearer token)\n    API--\x3e>Client: 200 OK + profile data"},{label:"Class Diagram",code:"classDiagram\n    class Animal {\n      +String name\n      +int age\n      +makeSound() String\n    }\n    class Dog {\n      +String breed\n      +fetch() void\n    }\n    class Cat {\n      +bool isIndoor\n      +purr() void\n    }\n    Animal <|-- Dog\n    Animal <|-- Cat"},{label:"Entity Relationship",code:"erDiagram\n    USER {\n      int id PK\n      string email\n      string name\n    }\n    ORDER {\n      int id PK\n      int user_id FK\n      decimal total\n    }\n    PRODUCT {\n      int id PK\n      string name\n      decimal price\n    }\n    USER ||--o{ ORDER : places\n    ORDER ||--|{ PRODUCT : contains"},{label:"Gantt Chart",code:"gantt\n    title Project Timeline\n    dateFormat  YYYY-MM-DD\n    section Planning\n    Requirements    :done,    req,  2024-01-01, 2024-01-14\n    Design          :done,    des,  2024-01-15, 2024-01-28\n    section Development\n    Backend API     :active,  be,   2024-01-29, 2024-02-25\n    Frontend        :         fe,   2024-02-01, 2024-02-28\n    section Release\n    Deploy          :         dep,  2024-03-18, 2024-03-20"},{label:"State Diagram",code:"stateDiagram-v2\n    [*] --\x3e Idle\n    Idle --\x3e Loading : fetchData()\n    Loading --\x3e Success : data received\n    Loading --\x3e Error : request failed\n    Success --\x3e Idle : reset()\n    Error --\x3e Loading : retry()\n    Error --\x3e Idle : dismiss()\n    Success --\x3e [*] : done"},{label:"Git Graph",code:'gitGraph\n   commit id: "Initial commit"\n   commit id: "Add README"\n   branch feature/login\n   checkout feature/login\n   commit id: "Add login form"\n   commit id: "Add auth API"\n   checkout main\n   merge feature/login id: "Merge login"\n   commit id: "v1.0.0" tag: "v1.0.0"'}]}}]);
//# sourceMappingURL=853.6040790e5d6f0d882d2d.js.map