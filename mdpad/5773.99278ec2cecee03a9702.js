"use strict";(self.webpackChunk_atlantis_mdpad=self.webpackChunk_atlantis_mdpad||[]).push([[5773],{74914(a,n,e){e.d(n,{FlyoutPanel:()=>y});var o=e(27359),i=e(53233),t=e(77207),r=e(20255),l=e(217),s=e(15959),d=e(65185),c=e(65723);const m=t.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=i.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:a})=>a}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:a})=>a+8}px));
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
`,g=i.default.div`
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
  background: ${({active:a})=>a?"rgba(88, 166, 255, 0.1)":"none"};
  border: none;
  /* inset box-shadow for the active indicator — doesn't affect layout unlike border-left */
  box-shadow: inset 2px 0 0 ${({active:a})=>a?"#58a6ff":"transparent"};
  color: ${({active:a})=>a?"#58a6ff":"#c9d1d9"};
  font-size: ${l.w.typography.fontSizeBase};
  font-family: ${l.w.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: rgba(88, 166, 255, 0.07);
    color: #e6edf3;
  }
`;function f({iconKey:a}){const n=a?d.t[a]??r.A:r.A;return(0,c.jsx)(n,{size:14,strokeWidth:1.75})}function b({entries:a,activeId:n,onSelect:e}){return(0,c.jsx)(c.Fragment,{children:a.map(a=>a.children?(0,c.jsx)(o.Fragment,{children:(0,c.jsx)(b,{entries:a.children,activeId:n,onSelect:e})},a.id):(0,c.jsxs)(p,{active:n===a.id,onClick:()=>e(a),children:[(0,c.jsx)(f,{iconKey:a.icon}),a.name]},a.id))})}function y({activeId:a}){const{flyout:n,scheduleFlyoutClose:e,cancelFlyoutClose:o}=(0,s.c)();if(!n)return null;const i=n.entry.icon?d.t[n.entry.icon]??r.A:r.A;return(0,c.jsxs)(u,{anchorY:n.anchorY,onMouseEnter:o,onMouseLeave:e,children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(i,{size:13,strokeWidth:2}),n.entry.name]}),(0,c.jsx)(b,{entries:n.entry.children??[],activeId:a,onSelect:a=>{n.onSelect(a),e()}})]})}},15959(a,n,e){e.d(n,{c:()=>t});var o=e(27359);const i=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,o.useContext)(i)},65185(a,n,e){e.d(n,{t:()=>q});var o=e(49510),i=e(99038),t=e(28207),r=e(36896),l=e(37901),s=e(39848),d=e(22164),c=e(43775),m=e(83539),u=e(41783),g=e(1837),p=e(82314),f=e(35751),b=e(20255),y=e(69633),h=e(92946),x=e(40822),z=e(36720),w=e(43317),$=e(52709),A=e(83517),v=e(37032),k=e(6949),S=e(8218),T=e(36829),M=e(15553),B=e(59591),j=e(72820),C=e(14621),E=e(66673),P=e(49033),R=e(31365),L=e(65912),N=e(88641),D=e(83249),F=e(1821),I=e(19161),G=e(71849),K=e(77747),U=e(2932),_=e(24525),H=e(57230);const q={activity:r.A,"bar-chart-2":o.A,book:s.A,"book-open":l.A,calendar:c.A,clock:u.A,"circle-dot":m.A,feather:p.A,"file-text":f.A,globe:z.A,hash:w.A,heart:$.A,landmark:A.A,layers:t.A,leaf:k.A,map:B.A,package:E.A,compass:g.A,"git-branch":h.A,github:x.A,minus:C.A,terminal:D.A,thermometer:F.A,users:G.A,wind:K.A,"pie-chart":i.A,plus:R.A,slash:L.A,star:N.A,zap:H.A,bot:d.A,lightbulb:S.A,"message-square":j.A,wrench:U.A,x:_.A,"layout-grid":v.A,list:T.A,file:b.A,folder:y.A,"map-pin":M.A,"pen-tool":P.A,type:I.A}},24079(a,n,e){e.d(n,{UO:()=>I,MJ:()=>v,KL:()=>p,w4:()=>o.w,mZ:()=>f});var o=e(217),i=e(27359),t=e(53233),r=e(65723);t.default.button`
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
`,t.default.div`
  position: relative;
`,e(15959);const l="260px",s="56px";t.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${o.w.colors.sidebarBg};
  border-bottom: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,t.default.div`
  width: ${s};
  min-width: ${s};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
`,t.default.button`
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
`,t.default.button`
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
`,t.default.div`
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
`,t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${o.w.spacing.sm};
  padding: 0 ${o.w.spacing.lg};
`,t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${o.w.colors.mainBg};
  font-family: ${o.w.typography.fontFamily};
  color: ${o.w.colors.mainText};
  overflow: hidden;
`,t.default.aside`
  width: ${({collapsed:a})=>a?s:l};
  min-width: ${({collapsed:a})=>a?s:l};
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
`,t.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,t.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,e(65185),t.default.div`
  display: grid;
  grid-template-rows: ${({open:a})=>a?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,t.default.div`
  overflow: hidden;
`,t.default.div`
  padding-left: ${o.w.spacing.md};
`,t.default.div`
  display: flex;
  flex-direction: column;
`,t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:a})=>a?"10px 0":`${o.w.spacing.sm} ${o.w.spacing.md}`};
  justify-content: ${({collapsed:a})=>a?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:a})=>a?"0":o.w.spacing.sm};
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
`,t.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:a})=>a?"0":"8px"};
  min-width: 0;
`,t.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:a})=>a?0:1};
  max-width: ${({collapsed:a})=>a?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,t.default.span`
  display: ${({collapsed:a})=>a?"none":"flex"};
  align-items: center;
  color: ${o.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:a})=>a?"90deg":"0deg"});
  }
`,t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:a})=>a?"9px 0":`6px ${o.w.spacing.md}`};
  justify-content: ${({collapsed:a})=>a?"center":"flex-start"};
  gap: ${({collapsed:a})=>a?"0":"8px"};
  background: ${({active:a})=>a?o.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:a})=>a?"none":"2px"} solid
    ${({active:a})=>a?o.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:a})=>a?o.w.colors.sidebarActive:o.w.colors.sidebarText};
  font-size: ${o.w.typography.fontSizeBase};
  font-family: ${o.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:a})=>a?"0":`0 ${o.w.borderRadius.sm} ${o.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`;const d=e(77207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;t.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${d} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,e(74914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(a=>a.places);const c="documents",m="settings";function u(){return new Promise((a,n)=>{const e=indexedDB.open("atlantis-tools",2);e.onupgradeneeded=a=>{const n=a.target.result;n.objectStoreNames.contains(c)||n.createObjectStore(c,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),n.objectStoreNames.contains(m)||n.createObjectStore(m,{keyPath:"key"})},e.onsuccess=()=>a(e.result),e.onerror=()=>n(e.error)})}let g={async saveDoc(a,n,e){const o=await u(),i={appId:a,name:n,content:e,savedAt:Date.now()};return new Promise((a,n)=>{const e=o.transaction(c,"readwrite").objectStore(c).add(i);e.onsuccess=()=>a(String(e.result)),e.onerror=()=>n(e.error)})},async updateDoc(a,n,e){const o=await u();return new Promise((i,t)=>{const r=o.transaction(c,"readwrite").objectStore(c),l=r.get(Number(a));l.onsuccess=()=>{const a=l.result;if(!a)return void t(new Error("Doc not found"));const o=r.put({...a,name:n,content:e,savedAt:Date.now()});o.onsuccess=()=>i(),o.onerror=()=>t(o.error)},l.onerror=()=>t(l.error)})},async listDocs(a){const n=await u();return new Promise((e,o)=>{const i=n.transaction(c,"readonly").objectStore(c).index("appId").getAll(a);i.onsuccess=()=>e(i.result.map(a=>({...a,id:String(a.id)})).reverse()),i.onerror=()=>o(i.error)})},async deleteDoc(a){const n=await u();return new Promise((e,o)=>{const i=n.transaction(c,"readwrite").objectStore(c).delete(Number(a));i.onsuccess=()=>e(),i.onerror=()=>o(i.error)})},async putSetting(a,n){const e=await u();return new Promise((o,i)=>{const t=e.transaction(m,"readwrite").objectStore(m).put({key:a,value:n});t.onsuccess=()=>o(),t.onerror=()=>i(t.error)})},async getSetting(a){const n=await u();return new Promise((e,o)=>{const i=n.transaction(m,"readonly").objectStore(m).get(a);i.onsuccess=()=>e(i.result?i.result.value:null),i.onerror=()=>o(i.error)})}};function p(a,n,e){return g.saveDoc(a,n,e)}function f(a,n,e){return g.updateDoc(a,n,e)}const b=t.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,y=t.default.div`
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
`,h=t.default.div`
  font-size: ${o.w.typography.fontSizeMd};
  font-weight: 700;
  color: ${o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
`,x=t.default.input`
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
`,z=t.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,w=t.default.button`
  padding: 7px 18px;
  border-radius: ${o.w.borderRadius.md};
  font-size: ${o.w.typography.fontSizeBase};
  font-family: ${o.w.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  background: ${({primary:a,danger:n})=>n?"rgba(248,81,73,0.15)":a?o.w.colors.accent:"none"};
  color: ${({primary:a,danger:n})=>n?"#f85149":a?"#fff":o.w.colors.mainText};
  border: 1px solid ${({primary:a,danger:n})=>n?"#f85149":a?o.w.colors.accent:o.w.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,$=t.default.div`
  height: 1px;
  background: ${o.w.colors.border};
  margin: 0 -4px;
`,A=t.default.div`
  font-size: 11px;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
`;function v({onSave:a,onUpdate:n,onCancel:e,existingDoc:o}){const[t,l]=(0,i.useState)(o?.name??""),s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{s.current?.focus(),o&&s.current?.select()},[o]),(0,r.jsx)(b,{onClick:e,children:(0,r.jsxs)(y,{onClick:a=>a.stopPropagation(),children:[(0,r.jsx)(h,{children:"Save document"}),o&&n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A,{children:"Update the current version or save as a new one."}),(0,r.jsxs)(z,{children:[(0,r.jsx)(w,{onClick:e,children:"Cancel"}),(0,r.jsxs)(w,{danger:!0,onClick:n,children:['Update "',o.name,'"']})]}),(0,r.jsx)($,{})]}),(0,r.jsx)(x,{ref:s,value:t,onChange:a=>l(a.target.value),onKeyDown:i=>{"Enter"===i.key&&t.trim()&&(o&&t.trim()===o.name&&n?n():a(t.trim())),"Escape"===i.key&&e()},placeholder:o?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,r.jsxs)(z,{children:[!o&&(0,r.jsx)(w,{onClick:e,children:"Cancel"}),(0,r.jsx)(w,{primary:!0,disabled:!t.trim(),onClick:()=>a(t.trim()),children:"Save as new"})]})]})})}var k=e(18006),S=e(70679),T=e(54872);const M=t.default.div`
  position: relative;
`,B=t.default.button`
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
`,j=t.default.div`
  display: ${({open:a})=>a?"flex":"none"};
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
`,C=t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  border-bottom: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
`,E=t.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,P=t.default.div`
  padding: 16px 14px;
  font-size: ${o.w.typography.fontSizeBase};
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  font-style: italic;
`,R=t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`,L=t.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,N=t.default.div`
  font-size: ${o.w.typography.fontSizeBase};
  color: ${o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,D=t.default.div`
  font-size: 11px;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  margin-top: 1px;
`,F=t.default.button`
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
`;function I({appId:a,onLoad:n}){const[e,o]=(0,i.useState)(!1),[t,l]=(0,i.useState)([]),s=(0,i.useRef)(null),d=(0,i.useCallback)(()=>{(function(a){return g.listDocs(a)})(a).then(l).catch(()=>{})},[a]);(0,i.useEffect)(()=>{if(!e)return;d();const a=a=>{s.current&&!s.current.contains(a.target)&&o(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e,d]);return(0,r.jsxs)(M,{ref:s,children:[(0,r.jsxs)(B,{onClick:()=>o(a=>!a),children:[(0,r.jsx)(k.A,{size:14}),"Saved",(0,r.jsx)(S.A,{size:13,style:{marginLeft:2}})]}),(0,r.jsxs)(j,{open:e,children:[(0,r.jsx)(C,{children:"Saved versions"}),(0,r.jsx)(E,{children:0===t.length?(0,r.jsx)(P,{children:"No saved documents yet."}):t.map(a=>{return(0,r.jsxs)(R,{children:[(0,r.jsxs)(L,{onClick:()=>{n(a.content,a.id,a.name),o(!1)},children:[(0,r.jsx)(N,{children:a.name}),(0,r.jsx)(D,{children:(e=a.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e)))})]}),(0,r.jsx)(F,{onClick:n=>(async(a,n)=>{a.stopPropagation(),await function(a){return g.deleteDoc(a)}(n),l(a=>a.filter(a=>a.id!==n))})(n,a.id),title:"Delete",children:(0,r.jsx)(T.A,{size:13})})]},a.id);var e})})]})]})}},217(a,n,e){e.d(n,{w:()=>o});const o={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},78967(a,n,e){e.d(n,{M:()=>f}),e(27359);var o=e(53233),i=e(15496),t=e(51530),r=e(24079),l=e(65723);const s=o.default.div`
  display: flex;
  flex-direction: column;
  flex: ${({collapsed:a})=>a?"0 0 0px":"1"};
  min-width: ${({collapsed:a})=>a?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${r.w4.colors.sidebarBorder};
  background: ${r.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
`,d=o.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${r.w4.spacing.md};
  height: 36px;
  background: ${r.w4.colors.sidebarBg};
  border-bottom: 1px solid ${r.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,c=o.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
`,m=o.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${r.w4.colors.sidebarText};
  }
`,u=o.default.textarea`
  flex: 1;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  padding: ${r.w4.spacing.lg};
  background: ${r.w4.colors.mainBg};
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 13px;
  line-height: 1.7;
  tab-size: 2;
  caret-color: ${r.w4.colors.accent};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::placeholder {
    color: ${r.w4.colors.sidebarTextMuted};
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${r.w4.colors.border};
    border-radius: 3px;
  }
`,g=o.default.button`
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
  background: ${r.w4.colors.sidebarBg};
  border: 1px solid ${r.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${r.w4.borderRadius.md} ${r.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${r.w4.colors.sidebarText};
  }
`,p=o.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${r.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;function f({value:a,onChange:n,collapsed:e,onToggleCollapse:o,scrollRef:r,onScroll:f}){return e?(0,l.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,l.jsxs)(g,{onClick:o,title:"Show editor",children:[(0,l.jsx)(t.A,{size:14}),(0,l.jsx)(p,{children:"Editor"})]})}):(0,l.jsxs)(s,{collapsed:!1,children:[(0,l.jsxs)(d,{children:[(0,l.jsx)(c,{children:"Editor"}),(0,l.jsx)(m,{onClick:o,title:"Collapse editor",children:(0,l.jsx)(i.A,{size:15})})]}),(0,l.jsx)(u,{ref:r,value:a,onChange:a=>n(a.target.value),onScroll:f,placeholder:"Write markdown here…",spellCheck:!1})]})}},61326(a,n,e){e.d(n,{H:()=>y});var o=e(27359),i=e(53233),t=e(37901),r=e(70679),l=e(24079),s=e(9336),d=e(65723);const c=i.default.button`
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
`,m=i.default.div`
  display: ${({open:a})=>a?"block":"none"};
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
`,u=i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
`,g=i.default.button`
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
`,p=i.default.div`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 500;
`,f=i.default.div`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-top: 1px;
`,b=i.default.div`
  position: relative;
`;function y({onSelect:a}){const[n,e]=(0,o.useState)(!1),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!n)return;const a=a=>{i.current&&!i.current.contains(a.target)&&e(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[n]),(0,d.jsxs)(b,{ref:i,children:[(0,d.jsxs)(c,{onClick:()=>e(a=>!a),children:[(0,d.jsx)(t.A,{size:14}),"Examples",(0,d.jsx)(r.A,{size:13,style:{marginLeft:2}})]}),(0,d.jsxs)(m,{open:n,children:[(0,d.jsx)(u,{children:"Load an example"}),s.k.map(n=>(0,d.jsxs)(g,{onClick:()=>{a(n.content),e(!1)},children:[(0,d.jsx)(p,{children:n.label}),(0,d.jsx)(f,{children:n.description})]},n.id))]})]})}},89654(a,n,e){e.d(n,{r:()=>D});var o=e(27359),i=e(28976),t=e(18055),r=e(14944),l=e(39895),s=e(6930),d=(e(61385),e(53233)),c=e(49881),m=e(13045),u=e(24079),g=e(65723);const p=d.default.div`
  background: ${u.w4.colors.codeBg};
  border: 1px solid ${u.w4.colors.codeBorder};
  border-radius: ${u.w4.borderRadius.md};
  padding: ${u.w4.spacing.lg};
  margin: ${u.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;

  svg {
    max-width: 100%;
  }
`,f=d.default.div`
  color: #f85149;
  font-family: ${u.w4.typography.fontFamilyMono};
  font-size: ${u.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let b=!1;function y({code:a}){const n=(0,o.useRef)(null),[i,t]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let o=!1;return t(null),async function(){const i=(await e.e(774).then(e.bind(e,30774))).default;if(b||(i.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:u.w4.colors.codeBg,primaryColor:u.w4.colors.accent,primaryTextColor:u.w4.colors.mainText,lineColor:u.w4.colors.border}}),b=!0),n.current&&!o)try{const e=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:t}=await i.render(e,a);!o&&n.current&&(n.current.innerHTML=t)}catch(a){o||t(a instanceof Error?a.message:String(a))}}(),()=>{o=!0}},[a]),i?(0,g.jsx)(p,{children:(0,g.jsxs)(f,{children:["Mermaid error: ",i]})}):(0,g.jsx)(p,{ref:n})}var h=e(68383),x=e(21426),z=e(25609),w=e(20320);const $=d.default.div`
  margin: ${u.w4.spacing.lg} 0;
  border-radius: ${u.w4.borderRadius.md};
  border: 1px solid ${u.w4.colors.codeBorder};
  overflow: hidden;
`,A=d.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${u.w4.colors.codeBorder};
`,v=d.default.span`
  font-family: ${u.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${u.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,k=d.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:a})=>a?"#3fb950":u.w4.colors.border};
  border-radius: ${u.w4.borderRadius.sm};
  color: ${({copied:a})=>a?"#3fb950":u.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${u.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: ${u.w4.colors.sidebarText};
    border-color: ${u.w4.colors.sidebarText};
  }
`,S={...x.A,'pre[class*="language-"]':{...x.A['pre[class*="language-"]'],background:u.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...x.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function T({lang:a="text",code:n}){const[e,i]=(0,o.useState)(!1),t=n.split("\n").length>8;return(0,g.jsxs)($,{children:[(0,g.jsxs)(A,{children:[(0,g.jsx)(v,{children:a}),(0,g.jsxs)(k,{copied:e,onClick:()=>{navigator.clipboard.writeText(n).then(()=>{i(!0),setTimeout(()=>i(!1),2e3)})},children:[e?(0,g.jsx)(z.A,{size:12}):(0,g.jsx)(w.A,{size:12}),e?"Copied!":"Copy"]})]}),(0,g.jsx)(h.A,{language:a,style:S,showLineNumbers:t,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:u.w4.colors.codeBg},wrapLongLines:!1,children:n})]})}function M(){return a=>{!function a(n){if("blockquote"===n.type){const a=n.children?.[0];if("paragraph"===a?.type){const e=a.children?.[0];if("text"===e?.type){const o=e.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);o&&(e.value=e.value.slice(o[0].length),e.value.trim()||1!==a.children.length||n.children.shift(),n.data=n.data??{},n.data.hName="div",n.data.hProperties={"data-callout":o[1].toUpperCase()})}}}n.children?.forEach(a)}(a)}}const B=d.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: ${u.w4.colors.mainBg};
`,j=d.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${u.w4.spacing.md};
  height: 36px;
  background: ${u.w4.colors.sidebarBg};
  border-bottom: 1px solid ${u.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,C=d.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${u.w4.colors.sidebarTextMuted};
  font-family: ${u.w4.typography.fontFamily};
`,E=d.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${u.w4.borderRadius.sm};
  cursor: pointer;
  color: ${u.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${u.w4.colors.sidebarHover};
    color: ${u.w4.colors.sidebarText};
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
    background: ${u.w4.colors.border};
    border-radius: 3px;
  }
`,R=d.default.article`
  max-width: 780px;
  margin: 0 auto;
  padding: ${u.w4.spacing.xl} ${u.w4.spacing.xxl};
  color: ${u.w4.colors.mainText};
  font-family: ${u.w4.typography.fontFamily};
  font-size: ${u.w4.typography.fontSizeMd};
  line-height: ${u.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${u.w4.spacing.xl} 0 ${u.w4.spacing.md};
    color: ${u.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    &:first-of-type { margin-top: 0; }
  }
  h1 { font-size: ${u.w4.typography.fontSizeXl}; border-bottom: 1px solid ${u.w4.colors.border}; padding-bottom: ${u.w4.spacing.sm}; }
  h2 { font-size: ${u.w4.typography.fontSizeLg}; border-bottom: 1px solid ${u.w4.colors.border}; padding-bottom: ${u.w4.spacing.xs}; }
  h3 { font-size: ${u.w4.typography.fontSizeMd}; }

  p { margin: ${u.w4.spacing.md} 0; }

  a {
    color: ${u.w4.colors.accent};
    text-decoration: none;
    &:hover { text-decoration: underline; color: ${u.w4.colors.accentHover}; }
  }

  ul, ol { margin: ${u.w4.spacing.md} 0; padding-left: ${u.w4.spacing.xl}; }
  li { margin: ${u.w4.spacing.xs} 0; }

  /* Task list checkboxes */
  li input[type="checkbox"] {
    margin-right: 6px;
    accent-color: ${u.w4.colors.accent};
  }

  blockquote {
    border-left: 3px solid ${u.w4.colors.border};
    margin: ${u.w4.spacing.lg} 0;
    padding: ${u.w4.spacing.sm} ${u.w4.spacing.lg};
    background: ${u.w4.colors.surface};
    color: ${u.w4.colors.mainTextMuted};
    border-radius: 0 ${u.w4.borderRadius.sm} ${u.w4.borderRadius.sm} 0;
  }

  /* Callout variants */
  div[data-callout] {
    border-radius: ${u.w4.borderRadius.md};
    padding: ${u.w4.spacing.md} ${u.w4.spacing.lg};
    margin: ${u.w4.spacing.lg} 0;
    border-left: 4px solid;
    font-size: ${u.w4.typography.fontSizeBase};

    &::before {
      display: block;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: ${u.w4.spacing.xs};
    }
  }
  div[data-callout="NOTE"]      { background: rgba(56,139,253,0.1);  border-color: #388bfd; &::before { content: "Note";      color: #388bfd; } }
  div[data-callout="TIP"]       { background: rgba(63,185,80,0.1);   border-color: #3fb950; &::before { content: "Tip";       color: #3fb950; } }
  div[data-callout="WARNING"]   { background: rgba(210,153,34,0.1);  border-color: #d29922; &::before { content: "Warning";   color: #d29922; } }
  div[data-callout="CAUTION"]   { background: rgba(248,81,73,0.1);   border-color: #f85149; &::before { content: "Caution";   color: #f85149; } }
  div[data-callout="IMPORTANT"] { background: rgba(163,113,247,0.1); border-color: #a371f7; &::before { content: "Important"; color: #a371f7; } }

  code {
    font-family: ${u.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${u.w4.colors.codeBg};
    border: 1px solid ${u.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${u.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${u.w4.spacing.lg} 0; font-size: ${u.w4.typography.fontSizeBase}; }
  th, td { padding: ${u.w4.spacing.sm} ${u.w4.spacing.md}; border: 1px solid ${u.w4.colors.border}; text-align: left; }
  th { background: ${u.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${u.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${u.w4.colors.border}; margin: ${u.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${u.w4.borderRadius.md}; }

  /* KaTeX display math spacing */
  .math-display {
    overflow-x: auto;
    padding: ${u.w4.spacing.md} 0;
  }
`,L=d.default.button`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${u.w4.colors.sidebarBg};
  border: 1px solid ${u.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${u.w4.borderRadius.md} 0 0 ${u.w4.borderRadius.md};
  cursor: pointer;
  color: ${u.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  align-self: center;

  &:hover {
    background: ${u.w4.colors.sidebarHover};
    color: ${u.w4.colors.sidebarText};
  }
`,N=d.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${u.w4.typography.fontFamily};
  writing-mode: vertical-rl;
`;function D({content:a,collapsed:n,onToggleCollapse:e,scrollRef:o,onScroll:d}){return n?(0,g.jsxs)(L,{onClick:e,title:"Show preview",children:[(0,g.jsx)(c.A,{size:14}),(0,g.jsx)(N,{children:"Preview"})]}):(0,g.jsxs)(B,{children:[(0,g.jsxs)(j,{children:[(0,g.jsx)(C,{children:"Preview"}),(0,g.jsx)(E,{onClick:e,title:"Collapse preview",children:(0,g.jsx)(m.A,{size:15})})]}),(0,g.jsx)(P,{ref:o,onScroll:d,children:(0,g.jsx)(R,{children:(0,g.jsx)(i.oz,{remarkPlugins:[t.A,r.A,M],rehypePlugins:[l.A,s.A],components:{div({node:a,children:n,...e}){const o=e["data-callout"];return o?(0,g.jsx)("div",{"data-callout":o,children:n}):(0,g.jsx)("div",{...e,children:n})},pre:({children:a})=>(0,g.jsx)(g.Fragment,{children:a}),code({className:a,children:n}){const e=/language-(\w+)/.exec(a??"")?.[1],o=String(n).replace(/\n$/,"");return"mermaid"===e?(0,g.jsx)(y,{code:o}):e||o.includes("\n")?(0,g.jsx)(T,{lang:e,code:o}):(0,g.jsx)("code",{className:a,children:n})}},children:a})})})]})}},9336(a,n,e){e.d(n,{O:()=>i,k:()=>o});const o=[{id:"countries",label:"Countries",description:"All countries in the world with their flags, populations, and more",content:"\n| # | País (Português) | Country (English) |\n|---|------------------|-------------------|\n| 1 | Afeganistão | Afghanistan |\n| 2 | África do Sul | South Africa |\n| 3 | Albânia | Albania |\n| 4 | Alemanha | Germany |\n| 5 | Andorra | Andorra |\n| 6 | Angola | Angola |\n| 7 | Antígua e Barbuda | Antigua and Barbuda |\n| 8 | Arábia Saudita | Saudi Arabia |\n| 9 | Argélia | Algeria |\n|10 | Argentina | Argentina |\n|11 | Arménia | Armenia |\n|12 | Austrália | Australia |\n|13 | Áustria | Austria |\n|14 | Azerbaijão | Azerbaijan |\n|15 | Bahamas | Bahamas |\n|16 | Bangladexe | Bangladesh |\n|17 | Barbados | Barbados |\n|18 | Barém | Bahrain |\n|19 | Bélgica | Belgium |\n|20 | Belize | Belize |\n|21 | Benim | Benin |\n|22 | Bielorrússia | Belarus |\n|23 | Bolívia | Bolivia |\n|24 | Bósnia e Herzegovina | Bosnia and Herzegovina |\n|25 | Botsuana | Botswana |\n|26 | Brasil | Brazil |\n|27 | Brunei | Brunei |\n|28 | Bulgária | Bulgaria |\n|29 | Burquina Faso | Burkina Faso |\n|30 | Burundi | Burundi |\n|31 | Cabo Verde | Cape Verde |\n|32 | Camboja | Cambodia |\n|33 | Camarões | Cameroon |\n|34 | Canadá | Canada |\n|35 | Catar | Qatar |\n|36 | Cazaquistão | Kazakhstan |\n|37 | Chade | Chad |\n|38 | Chile | Chile |\n|39 | China | China |\n|40 | Chipre | Cyprus |\n|41 | Colômbia | Colombia |\n|42 | Comores | Comoros |\n|43 | Congo (República do) | Republic of the Congo |\n|44 | Congo (República Democrática do) | Democratic Republic of the Congo |\n|45 | Coreia do Norte | North Korea |\n|46 | Coreia do Sul | South Korea |\n|47 | Costa do Marfim | Ivory Coast |\n|48 | Costa Rica | Costa Rica |\n|49 | Croácia | Croatia |\n|50 | Cuba | Cuba |\n|51 | Dinamarca | Denmark |\n|52 | Djibuti | Djibouti |\n|53 | Dominica | Dominica |\n|54 | Egito | Egypt |\n|55 | El Salvador | El Salvador |\n|56 | Emirados Árabes Unidos | United Arab Emirates |\n|57 | Equador | Ecuador |\n|58 | Eritreia | Eritrea |\n|59 | Eslováquia | Slovakia |\n|60 | Eslovénia | Slovenia |\n|61 | Espanha | Spain |\n|62 | Essuatíni | Eswatini |\n|63 | Estados Unidos | United States |\n|64 | Estónia | Estonia |\n|65 | Etiópia | Ethiopia |\n|66 | Fiji | Fiji |\n|67 | Filipinas | Philippines |\n|68 | Finlândia | Finland |\n|69 | França | France |\n|70 | Gabão | Gabon |\n|71 | Gâmbia | Gambia |\n|72 | Gana | Ghana |\n|73 | Geórgia | Georgia |\n|74 | Granada | Grenada |\n|75 | Grécia | Greece |\n|76 | Guatemala | Guatemala |\n|77 | Guiana | Guyana |\n|78 | Guiné | Guinea |\n|79 | Guiné-Bissau | Guinea-Bissau |\n|80 | Guiné Equatorial | Equatorial Guinea |\n|81 | Haiti | Haiti |\n|82 | Honduras | Honduras |\n|83 | Hungria | Hungary |\n|84 | Iémen | Yemen |\n|85 | Ilhas Marshall | Marshall Islands |\n|86 | Ilhas Salomão | Solomon Islands |\n|87 | Índia | India |\n|88 | Indonésia | Indonesia |\n|89 | Irão | Iran |\n|90 | Iraque | Iraq |\n|91 | Irlanda | Ireland |\n|92 | Islândia | Iceland |\n|93 | Israel | Israel |\n|94 | Itália | Italy |\n|95 | Jamaica | Jamaica |\n|96 | Japão | Japan |\n|97 | Jordânia | Jordan |\n|98 | Kiribati | Kiribati |\n|99 | Kuwait | Kuwait |\n|100| Laos | Laos |\n|101| Lesoto | Lesotho |\n|102| Letónia | Latvia |\n|103| Líbano | Lebanon |\n|104| Libéria | Liberia |\n|105| Líbia | Libya |\n|106| Liechtenstein | Liechtenstein |\n|107| Lituânia | Lithuania |\n|108| Luxemburgo | Luxembourg |\n|109| Macedónia do Norte | North Macedonia |\n|110| Madagáscar | Madagascar |\n|111| Malásia | Malaysia |\n|112| Malawi | Malawi |\n|113| Maldivas | Maldives |\n|114| Mali | Mali |\n|115| Malta | Malta |\n|116| Marrocos | Morocco |\n|117| Maurícia | Mauritius |\n|118| Mauritânia | Mauritania |\n|119| México | Mexico |\n|120| Micronésia | Micronesia |\n|121| Moçambique | Mozambique |\n|122| Moldávia | Moldova |\n|123| Mónaco | Monaco |\n|124| Mongólia | Mongolia |\n|125| Montenegro | Montenegro |\n|126| Myanmar | Myanmar |\n|127| Namíbia | Namibia |\n|128| Nauru | Nauru |\n|129| Nepal | Nepal |\n|130| Nicarágua | Nicaragua |\n|131| Níger | Niger |\n|132| Nigéria | Nigeria |\n|133| Noruega | Norway |\n|134| Nova Zelândia | New Zealand |\n|135| Omã | Oman |\n|136| Países Baixos | Netherlands |\n|137| Palau | Palau |\n|138| Palestina | Palestine |\n|139| Panamá | Panama |\n|140| Papua-Nova Guiné | Papua New Guinea |\n|141| Paquistão | Pakistan |\n|142| Paraguai | Paraguay |\n|143| Peru | Peru |\n|144| Polónia | Poland |\n|145| Portugal | Portugal |\n|146| Quénia | Kenya |\n|147| Quirguistão | Kyrgyzstan |\n|148| Reino Unido | United Kingdom |\n|149| República Centro-Africana | Central African Republic |\n|150| República Checa | Czech Republic |\n|151| República Dominicana | Dominican Republic |\n|152| Roménia | Romania |\n|153| Ruanda | Rwanda |\n|154| Rússia | Russia |\n|155| Samoa | Samoa |\n|156| Santa Lúcia | Saint Lucia |\n|157| São Cristóvão e Neves | Saint Kitts and Nevis |\n|158| São Marino | San Marino |\n|159| São Tomé e Príncipe | São Tomé and Príncipe |\n|160| São Vicente e Granadinas | Saint Vincent and the Grenadines |\n|161| Senegal | Senegal |\n|162| Serra Leoa | Sierra Leone |\n|163| Sérvia | Serbia |\n|164| Seychelles | Seychelles |\n|165| Singapura | Singapore |\n|166| Síria | Syria |\n|167| Somália | Somalia |\n|168| Sri Lanka | Sri Lanka |\n|169| Sudão | Sudan |\n|170| Sudão do Sul | South Sudan |\n|171| Suécia | Sweden |\n|172| Suíça | Switzerland |\n|173| Suriname | Suriname |\n|174| Tailândia | Thailand |\n|175| Tajiquistão | Tajikistan |\n|176| Tanzânia | Tanzania |\n|177| Timor-Leste | Timor-Leste |\n|178| Togo | Togo |\n|179| Tonga | Tonga |\n|180| Trinidad e Tobago | Trinidad and Tobago |\n|181| Tunísia | Tunisia |\n|182| Turquemenistão | Turkmenistan |\n|183| Turquia | Turkey |\n|184| Tuvalu | Tuvalu |\n|185| Ucrânia | Ukraine |\n|186| Uganda | Uganda |\n|187| Uruguai | Uruguay |\n|188| Usbequistão | Uzbekistan |\n|189| Vanuatu | Vanuatu |\n|190| Vaticano | Vatican City |\n|191| Venezuela | Venezuela |\n|192| Vietname | Vietnam |\n|193| Zâmbia | Zambia |\n|194| Zimbabué | Zimbabwe |\n    "},{id:"showcase",label:"Full Showcase",description:"All supported features in one document",content:"# Markdown Editor — Feature Showcase\n\nWelcome! This editor supports **rich markdown** with live preview.\nUse the collapse buttons `◀` / `▶` to hide the editor or preview pane.\n\n---\n\n## Text Formatting\n\nYou can write **bold**, *italic*, ~~strikethrough~~, and `inline code`.\nLinks work too: [Atlantis](https://github.com) opens in a new tab.\n\n> [!NOTE]\n> This is a GitHub-style callout. Supported types: NOTE, TIP, WARNING, CAUTION, IMPORTANT.\n\n> [!TIP]\n> Collapse the editor to enter reading mode. Collapse the preview to focus on writing.\n\n---\n\n## Code Blocks\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nasync function fetchUser(id: number): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n}\n```\n\n---\n\n## Math (LaTeX)\n\nInline math: $E = mc^2$ and the Euler identity $e^{i\\pi} + 1 = 0$.\n\nDisplay math:\n\n$$\n\\int_{-\\infty}^{\\infty} e^{-x^2}\\, dx = \\sqrt{\\pi}\n$$\n\n$$\n\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}\n$$\n\n---\n\n## Mermaid Diagrams\n\n```mermaid\nflowchart TD\n    A[Write Markdown] --\x3e B{Live Preview}\n    B --\x3e|Renders| C[HTML Output]\n    B --\x3e|Supports| D[Math / Mermaid / Code]\n    C --\x3e E[Reading Mode]\n    D --\x3e E\n```\n\n---\n\n## Tables\n\n| Feature        | Supported | Notes                       |\n|----------------|-----------|-----------------------------|\n| GFM tables     | ✅        | With striped rows            |\n| Math (LaTeX)   | ✅        | Inline `$...$` and block `$$` |\n| Mermaid        | ✅        | Flowcharts, sequences, etc.  |\n| Syntax highlight | ✅      | 20+ languages               |\n| Callouts       | ✅        | GitHub-style `[!NOTE]`     |\n\n---\n\n## Task Lists\n\n- [x] Side-by-side editor and preview\n- [x] Collapsible panes\n- [x] Math support\n- [x] Mermaid diagrams\n- [x] Syntax highlighting\n- [ ] Export to PDF *(coming soon)*\n"},{id:"typescript",label:"TypeScript",description:"TypeScript code examples",content:"# TypeScript Examples\n\n## Generics & Type Utilities\n\n```typescript\ntype Result<T, E = Error> =\n  | { ok: true; value: T }\n  | { ok: false; error: E };\n\nfunction tryCatch<T>(fn: () => T): Result<T> {\n  try {\n    return { ok: true, value: fn() };\n  } catch (e) {\n    return { ok: false, error: e instanceof Error ? e : new Error(String(e)) };\n  }\n}\n```\n\n## Mapped & Conditional Types\n\n```typescript\ntype Nullable<T> = { [K in keyof T]: T[K] | null };\n\ntype DeepReadonly<T> = T extends (infer U)[]\n  ? ReadonlyArray<DeepReadonly<U>>\n  : T extends object\n  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }\n  : T;\n```\n\n## Async Iterator\n\n```typescript\nasync function* paginate<T>(\n  fetch: (cursor: string | null) => Promise<{ items: T[]; next: string | null }>,\n): AsyncGenerator<T> {\n  let cursor: string | null = null;\n  do {\n    const page = await fetch(cursor);\n    yield* page.items;\n    cursor = page.next;\n  } while (cursor !== null);\n}\n```\n\n## Decorator (Stage 3)\n\n```typescript\nfunction memoize<T extends object, R>(\n  _target: T,\n  key: string,\n  descriptor: TypedPropertyDescriptor<(...args: unknown[]) => R>,\n) {\n  const cache = new Map<string, R>();\n  const original = descriptor.value!;\n  descriptor.value = function (...args: unknown[]) {\n    const k = JSON.stringify(args);\n    if (cache.has(k)) return cache.get(k)!;\n    const result = original.apply(this, args);\n    cache.set(k, result);\n    return result;\n  };\n}\n```\n"},{id:"javascript",label:"JavaScript",description:"Modern JavaScript snippets",content:"# JavaScript Examples\n\n## Optional Chaining & Nullish Coalescing\n\n```javascript\nconst city = user?.address?.city ?? 'Unknown';\nconst name = data?.profile?.displayName ?? data?.email ?? 'Anonymous';\n```\n\n## Array Methods\n\n```javascript\nconst products = [\n  { name: 'Widget', price: 9.99, stock: 50 },\n  { name: 'Gadget', price: 24.99, stock: 0 },\n  { name: 'Doohickey', price: 4.99, stock: 200 },\n];\n\nconst available = products\n  .filter(p => p.stock > 0)\n  .sort((a, b) => a.price - b.price)\n  .map(({ name, price }) => `${name} — $${price.toFixed(2)}`);\n```\n\n## Promise.allSettled\n\n```javascript\nasync function fetchAll(urls) {\n  const results = await Promise.allSettled(urls.map(url => fetch(url)));\n\n  return results.map((result, i) =>\n    result.status === 'fulfilled'\n      ? { url: urls[i], data: result.value }\n      : { url: urls[i], error: result.reason.message },\n  );\n}\n```\n\n## Proxy & Reflect\n\n```javascript\nfunction observable(target, onChange) {\n  return new Proxy(target, {\n    set(obj, prop, value) {\n      const prev = obj[prop];\n      Reflect.set(obj, prop, value);\n      if (prev !== value) onChange(prop, value, prev);\n      return true;\n    },\n  });\n}\n\nconst state = observable({ count: 0 }, (key, next, prev) => {\n  console.log(`${key}: ${prev} → ${next}`);\n});\n\nstate.count = 1; // count: 0 → 1\n```\n"},{id:"ruby",label:"Ruby",description:"Ruby code examples",content:"# Ruby Examples\n\n## Classes & Modules\n\n```ruby\nmodule Serializable\n  def to_h\n    instance_variables.each_with_object({}) do |var, hash|\n      hash[var.to_s.delete('@').to_sym] = instance_variable_get(var)\n    end\n  end\n\n  def to_json\n    require 'json'\n    JSON.generate(to_h)\n  end\nend\n\nclass User\n  include Serializable\n  include Comparable\n\n  attr_accessor :name, :age\n\n  def initialize(name, age)\n    @name = name\n    @age  = age\n  end\n\n  def <=>(other)\n    @age <=> other.age\n  end\nend\n```\n\n## Enumerables & Lazy Chains\n\n```ruby\nprimes = (2..Float::INFINITY).lazy.select do |n|\n  (2..Math.sqrt(n)).none? { |i| n % i == 0 }\nend\n\nputs primes.first(10).inspect\n# => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]\n```\n\n## Blocks, Procs & Lambdas\n\n```ruby\ndouble  = ->(x) { x * 2 }\nsquare  = ->(x) { x ** 2 }\ncompose = ->(f, g) { ->(x) { f.(g.(x)) } }\n\ndouble_then_square = compose.(square, double)\nputs double_then_square.(3)  # => 36\n```\n\n## Pattern Matching (Ruby 3+)\n\n```ruby\nresponse = { status: 200, body: { user: { name: 'Alice', role: :admin } } }\n\ncase response\nin { status: 200, body: { user: { name: String => name, role: :admin } } }\n  puts \"Admin user: #{name}\"\nin { status: 404 }\n  puts \"Not found\"\nin { status: (500..) => code }\n  puts \"Server error: #{code}\"\nend\n```\n"},{id:"mermaid",label:"Mermaid Diagrams",description:"Flowcharts, sequences, and more",content:'# Mermaid Diagrams\n\n## Flowchart\n\n```mermaid\nflowchart LR\n    A([Start]) --\x3e B[/Input data/]\n    B --\x3e C{Valid?}\n    C -- Yes --\x3e D[Process]\n    C -- No  --\x3e E[Show error]\n    D --\x3e F[(Database)]\n    F --\x3e G([End])\n    E --\x3e B\n```\n\n## Sequence Diagram\n\n```mermaid\nsequenceDiagram\n    participant U as User\n    participant C as Client\n    participant S as Server\n    participant DB as Database\n\n    U->>C: Click "Login"\n    C->>S: POST /auth (credentials)\n    S->>DB: SELECT user WHERE email=?\n    DB--\x3e>S: User record\n    S--\x3e>C: 200 OK { token }\n    C--\x3e>U: Redirect to dashboard\n```\n\n## Class Diagram\n\n```mermaid\nclassDiagram\n    class Animal {\n        +String name\n        +int age\n        +speak() String\n    }\n    class Dog {\n        +String breed\n        +speak() String\n        +fetch() void\n    }\n    class Cat {\n        +bool indoor\n        +speak() String\n        +purr() void\n    }\n    Animal <|-- Dog\n    Animal <|-- Cat\n```\n\n## Git Graph\n\n```mermaid\ngitGraph\n    commit id: "init"\n    branch feature/auth\n    checkout feature/auth\n    commit id: "add login"\n    commit id: "add tokens"\n    checkout main\n    merge feature/auth\n    commit id: "hotfix"\n    branch feature/dashboard\n    checkout feature/dashboard\n    commit id: "add charts"\n    checkout main\n    merge feature/dashboard\n```\n'},{id:"math",label:"Math (LaTeX)",description:"Mathematical notation with KaTeX",content:"# Math Examples\n\nAll math is rendered with [KaTeX](https://katex.org).\nUse `$...$` for inline math and `$$...$$` for display math.\n\n---\n\n## Inline Math\n\nThe quadratic formula is $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.\n\nEuler's identity: $e^{i\\pi} + 1 = 0$ — often called the most beautiful equation.\n\nThe derivative of $f(x) = x^n$ is $f'(x) = nx^{n-1}$.\n\n---\n\n## Calculus\n\n$$\n\\frac{d}{dx}\\left[\\int_a^x f(t)\\, dt\\right] = f(x)\n$$\n\n$$\n\\int_0^\\infty e^{-x^2}\\, dx = \\frac{\\sqrt{\\pi}}{2}\n$$\n\n$$\n\\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = e^x\n$$\n\n---\n\n## Linear Algebra\n\n$$\n\\mathbf{A}\\mathbf{x} = \\mathbf{b}\n\\quad \\Rightarrow \\quad\n\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}\n$$\n\n$$\n\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc\n$$\n\n---\n\n## Probability & Statistics\n\nBayes' theorem:\n\n$$\nP(A \\mid B) = \\frac{P(B \\mid A)\\, P(A)}{P(B)}\n$$\n\nNormal distribution PDF:\n\n$$\nf(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}\n$$\n\n---\n\n## Physics\n\nSchrödinger equation (time-independent):\n\n$$\n\\hat{H}\\,|\\psi\\rangle = E\\,|\\psi\\rangle\n$$\n\nMaxwell's equations (differential form):\n\n$$\n\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}\n\\qquad\n\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t}\n$$\n"}],i=""}}]);
//# sourceMappingURL=5773.99278ec2cecee03a9702.js.map