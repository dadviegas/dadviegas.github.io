"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[905],{4914(a,e,o){o.d(e,{FlyoutPanel:()=>z});var n=o(7359),t=o(3233),i=o(7207),r=o(255),l=o(217),s=o(5959),c=o(5185),m=o(5723);const d=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=t.default.div`
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
  animation: ${d} 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,g=t.default.div`
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
`,f=t.default.button`
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
`;function p({iconKey:a}){const e=a?c.t[a]??r.A:r.A;return(0,m.jsx)(e,{size:14,strokeWidth:1.75})}function y({entries:a,activeId:e,onSelect:o}){return(0,m.jsx)(m.Fragment,{children:a.map(a=>a.children?(0,m.jsx)(n.Fragment,{children:(0,m.jsx)(y,{entries:a.children,activeId:e,onSelect:o})},a.id):(0,m.jsxs)(f,{active:e===a.id,onClick:()=>o(a),children:[(0,m.jsx)(p,{iconKey:a.icon}),a.name]},a.id))})}function z({activeId:a}){const{flyout:e,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,s.c)();if(!e)return null;const t=e.entry.icon?c.t[e.entry.icon]??r.A:r.A;return(0,m.jsxs)(u,{anchorY:e.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(t,{size:13,strokeWidth:2}),e.entry.name]}),(0,m.jsx)(y,{entries:e.entry.children??[],activeId:a,onSelect:a=>{e.onSelect(a),o()}})]})}},5959(a,e,o){o.d(e,{c:()=>i});var n=o(7359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},5185(a,e,o){o.d(e,{t:()=>V});var n=o(9510),t=o(9038),i=o(8207),r=o(6896),l=o(7901),s=o(9848),c=o(2164),m=o(3775),d=o(3539),u=o(1783),g=o(1837),f=o(2314),p=o(5751),y=o(255),z=o(9633),b=o(2946),h=o(822),x=o(6720),w=o(3317),A=o(2709),v=o(3517),k=o(7032),$=o(6949),S=o(8218),j=o(6829),B=o(5553),M=o(9591),P=o(2820),T=o(4621),E=o(6673),L=o(9033),C=o(1365),N=o(5912),D=o(8641),R=o(3249),F=o(1821),_=o(9161),K=o(1849),I=o(7747),G=o(2932),H=o(4525),U=o(7230);const V={activity:r.A,"bar-chart-2":n.A,book:s.A,"book-open":l.A,calendar:m.A,clock:u.A,"circle-dot":d.A,feather:f.A,"file-text":p.A,globe:x.A,hash:w.A,heart:A.A,landmark:v.A,layers:i.A,leaf:$.A,map:M.A,package:E.A,compass:g.A,"git-branch":b.A,github:h.A,minus:T.A,terminal:R.A,thermometer:F.A,users:K.A,wind:I.A,"pie-chart":t.A,plus:C.A,slash:N.A,star:D.A,zap:U.A,bot:c.A,lightbulb:S.A,"message-square":P.A,wrench:G.A,x:H.A,"layout-grid":k.A,list:j.A,file:y.A,folder:z.A,"map-pin":B.A,"pen-tool":L.A,type:_.A}},4079(a,e,o){o.d(e,{UO:()=>_,MJ:()=>k,KL:()=>f,w4:()=>n.w,mZ:()=>p});var n=o(217),t=o(7359),i=o(3233),r=o(5723);i.default.button`
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
`,o(5959);const l="260px",s="56px";i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${n.w.colors.sidebarBg};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,i.default.div`
  width: ${s};
  min-width: ${s};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.button`
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
`,i.default.button`
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
`,i.default.div`
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
`,i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w.spacing.sm};
  padding: 0 ${n.w.spacing.lg};
`,i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,i.default.div`
  display: flex;
  flex-direction: column;
  height: ${n.w.sizes.fullHeight};
  background: ${n.w.colors.mainBg};
  font-family: ${n.w.typography.fontFamily};
  color: ${n.w.colors.mainText};
  overflow: hidden;
`,i.default.aside`
  width: ${({collapsed:a})=>a?s:l};
  min-width: ${({collapsed:a})=>a?s:l};
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
`,i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,o(5185),i.default.div`
  display: grid;
  grid-template-rows: ${({open:a})=>a?"1fr":"0fr"};
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
  padding: ${({collapsed:a})=>a?"10px 0":`${n.w.spacing.sm} ${n.w.spacing.md}`};
  justify-content: ${({collapsed:a})=>a?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:a})=>a?"0":n.w.spacing.sm};
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
  gap: ${({collapsed:a})=>a?"0":"8px"};
  min-width: 0;
`,i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:a})=>a?0:1};
  max-width: ${({collapsed:a})=>a?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.span`
  display: ${({collapsed:a})=>a?"none":"flex"};
  align-items: center;
  color: ${n.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:a})=>a?"90deg":"0deg"});
  }
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:a})=>a?"9px 0":`6px ${n.w.spacing.md}`};
  justify-content: ${({collapsed:a})=>a?"center":"flex-start"};
  gap: ${({collapsed:a})=>a?"0":"8px"};
  background: ${({active:a})=>a?n.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:a})=>a?"none":"2px"} solid
    ${({active:a})=>a?n.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:a})=>a?n.w.colors.sidebarActive:n.w.colors.sidebarText};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:a})=>a?"0":`0 ${n.w.borderRadius.sm} ${n.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
  }
`;const c=o(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${c} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,o(4914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(a=>a.places);const m="documents",d="settings";function u(){return new Promise((a,e)=>{const o=indexedDB.open("atlantis-tools",2);o.onupgradeneeded=a=>{const e=a.target.result;e.objectStoreNames.contains(m)||e.createObjectStore(m,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),e.objectStoreNames.contains(d)||e.createObjectStore(d,{keyPath:"key"})},o.onsuccess=()=>a(o.result),o.onerror=()=>e(o.error)})}let g={async saveDoc(a,e,o){const n=await u(),t={appId:a,name:e,content:o,savedAt:Date.now()};return new Promise((a,e)=>{const o=n.transaction(m,"readwrite").objectStore(m).add(t);o.onsuccess=()=>a(String(o.result)),o.onerror=()=>e(o.error)})},async updateDoc(a,e,o){const n=await u();return new Promise((t,i)=>{const r=n.transaction(m,"readwrite").objectStore(m),l=r.get(Number(a));l.onsuccess=()=>{const a=l.result;if(!a)return void i(new Error("Doc not found"));const n=r.put({...a,name:e,content:o,savedAt:Date.now()});n.onsuccess=()=>t(),n.onerror=()=>i(n.error)},l.onerror=()=>i(l.error)})},async listDocs(a){const e=await u();return new Promise((o,n)=>{const t=e.transaction(m,"readonly").objectStore(m).index("appId").getAll(a);t.onsuccess=()=>o(t.result.map(a=>({...a,id:String(a.id)})).reverse()),t.onerror=()=>n(t.error)})},async deleteDoc(a){const e=await u();return new Promise((o,n)=>{const t=e.transaction(m,"readwrite").objectStore(m).delete(Number(a));t.onsuccess=()=>o(),t.onerror=()=>n(t.error)})},async putSetting(a,e){const o=await u();return new Promise((n,t)=>{const i=o.transaction(d,"readwrite").objectStore(d).put({key:a,value:e});i.onsuccess=()=>n(),i.onerror=()=>t(i.error)})},async getSetting(a){const e=await u();return new Promise((o,n)=>{const t=e.transaction(d,"readonly").objectStore(d).get(a);t.onsuccess=()=>o(t.result?t.result.value:null),t.onerror=()=>n(t.error)})}};function f(a,e,o){return g.saveDoc(a,e,o)}function p(a,e,o){return g.updateDoc(a,e,o)}const y=i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,z=i.default.div`
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
`,b=i.default.div`
  font-size: ${n.w.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
`,h=i.default.input`
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
`,x=i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,w=i.default.button`
  padding: 7px 18px;
  border-radius: ${n.w.borderRadius.md};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  background: ${({primary:a,danger:e})=>e?"rgba(248,81,73,0.15)":a?n.w.colors.accent:"none"};
  color: ${({primary:a,danger:e})=>e?"#f85149":a?"#fff":n.w.colors.mainText};
  border: 1px solid ${({primary:a,danger:e})=>e?"#f85149":a?n.w.colors.accent:n.w.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,A=i.default.div`
  height: 1px;
  background: ${n.w.colors.border};
  margin: 0 -4px;
`,v=i.default.div`
  font-size: 11px;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
`;function k({onSave:a,onUpdate:e,onCancel:o,existingDoc:n}){const[i,l]=(0,t.useState)(n?.name??""),s=(0,t.useRef)(null);return(0,t.useEffect)(()=>{s.current?.focus(),n&&s.current?.select()},[n]),(0,r.jsx)(y,{onClick:o,children:(0,r.jsxs)(z,{onClick:a=>a.stopPropagation(),children:[(0,r.jsx)(b,{children:"Save document"}),n&&e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{children:"Update the current version or save as a new one."}),(0,r.jsxs)(x,{children:[(0,r.jsx)(w,{onClick:o,children:"Cancel"}),(0,r.jsxs)(w,{danger:!0,onClick:e,children:['Update "',n.name,'"']})]}),(0,r.jsx)(A,{})]}),(0,r.jsx)(h,{ref:s,value:i,onChange:a=>l(a.target.value),onKeyDown:t=>{"Enter"===t.key&&i.trim()&&(n&&i.trim()===n.name&&e?e():a(i.trim())),"Escape"===t.key&&o()},placeholder:n?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,r.jsxs)(x,{children:[!n&&(0,r.jsx)(w,{onClick:o,children:"Cancel"}),(0,r.jsx)(w,{primary:!0,disabled:!i.trim(),onClick:()=>a(i.trim()),children:"Save as new"})]})]})})}var $=o(8006),S=o(679),j=o(4872);const B=i.default.div`
  position: relative;
`,M=i.default.button`
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
`,P=i.default.div`
  display: ${({open:a})=>a?"flex":"none"};
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
`,T=i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,E=i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,L=i.default.div`
  padding: 16px 14px;
  font-size: ${n.w.typography.fontSizeBase};
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  font-style: italic;
`,C=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
  }
`,N=i.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,D=i.default.div`
  font-size: ${n.w.typography.fontSizeBase};
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,R=i.default.div`
  font-size: 11px;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  margin-top: 1px;
`,F=i.default.button`
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
`;function _({appId:a,onLoad:e}){const[o,n]=(0,t.useState)(!1),[i,l]=(0,t.useState)([]),s=(0,t.useRef)(null),c=(0,t.useCallback)(()=>{(function(a){return g.listDocs(a)})(a).then(l).catch(()=>{})},[a]);(0,t.useEffect)(()=>{if(!o)return;c();const a=a=>{s.current&&!s.current.contains(a.target)&&n(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[o,c]);return(0,r.jsxs)(B,{ref:s,children:[(0,r.jsxs)(M,{onClick:()=>n(a=>!a),children:[(0,r.jsx)($.A,{size:14}),"Saved",(0,r.jsx)(S.A,{size:13,style:{marginLeft:2}})]}),(0,r.jsxs)(P,{open:o,children:[(0,r.jsx)(T,{children:"Saved versions"}),(0,r.jsx)(E,{children:0===i.length?(0,r.jsx)(L,{children:"No saved documents yet."}):i.map(a=>{return(0,r.jsxs)(C,{children:[(0,r.jsxs)(N,{onClick:()=>{e(a.content,a.id,a.name),n(!1)},children:[(0,r.jsx)(D,{children:a.name}),(0,r.jsx)(R,{children:(o=a.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(o)))})]}),(0,r.jsx)(F,{onClick:e=>(async(a,e)=>{a.stopPropagation(),await function(a){return g.deleteDoc(a)}(e),l(a=>a.filter(a=>a.id!==e))})(e,a.id),title:"Delete",children:(0,r.jsx)(j.A,{size:13})})]},a.id);var o})})]})]})}},217(a,e,o){o.d(e,{w:()=>n});const n={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},9820(a,e,o){function n(a,e,o,t,i){return 0===t&&0===i?[]:t>0&&i>0&&e[t-1]===o[i-1]?[...n(a,e,o,t-1,i-1),{type:"equal",oldLine:e[t-1],newLine:o[i-1],oldNum:t,newNum:i}]:i>0&&(0===t||a[t][i-1]>=a[t-1][i])?[...n(a,e,o,t,i-1),{type:"insert",oldLine:null,newLine:o[i-1],oldNum:null,newNum:i}]:[...n(a,e,o,t-1,i),{type:"delete",oldLine:e[t-1],newLine:null,oldNum:t,newNum:null}]}function t(a,e){const o=a.split("\n"),t=e.split("\n");if(o.length>2e3||t.length>2e3)return function(a,e){const o=[],n=Math.max(a.length,e.length);for(let t=0;t<n;t++)t>=a.length?o.push({type:"insert",oldLine:null,newLine:e[t],oldNum:null,newNum:t+1}):t>=e.length?o.push({type:"delete",oldLine:a[t],newLine:null,oldNum:t+1,newNum:null}):a[t]===e[t]?o.push({type:"equal",oldLine:a[t],newLine:e[t],oldNum:t+1,newNum:t+1}):o.push({type:"replace",oldLine:a[t],newLine:e[t],oldNum:t+1,newNum:t+1});return o}(o,t);const i=function(a,e){const o=a.length,n=e.length,t=Array.from({length:o+1},()=>new Array(n+1).fill(0));for(let i=1;i<=o;i++)for(let o=1;o<=n;o++)a[i-1]===e[o-1]?t[i][o]=t[i-1][o-1]+1:t[i][o]=Math.max(t[i-1][o],t[i][o-1]);return t}(o,t),r=n(i,o,t,o.length,t.length),l=[];let s=0;for(;s<r.length;)"delete"===r[s].type&&s+1<r.length&&"insert"===r[s+1].type?(l.push({type:"replace",oldLine:r[s].oldLine,newLine:r[s+1].newLine,oldNum:r[s].oldNum,newNum:r[s+1].newNum}),s+=2):(l.push(r[s]),s++);return l}function i(a){let e=0,o=0,n=0;for(const t of a)"insert"===t.type?e++:"delete"===t.type?o++:"replace"===t.type&&n++;return{added:e,removed:o,changed:n}}o.d(e,{P:()=>t,h:()=>i})},9336(a,e,o){o.d(e,{k:()=>n});const n=[{label:"TypeScript function refactor",original:"function fetchUser(id) {\n  return fetch('/api/users/' + id)\n    .then(res => res.json())\n    .then(data => {\n      return data;\n    })\n    .catch(err => {\n      console.log('Error:', err);\n    });\n}\n\nfunction updateUser(id, data) {\n  return fetch('/api/users/' + id, {\n    method: 'PUT',\n    body: JSON.stringify(data)\n  });\n}",modified:"async function fetchUser(id: string): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n}\n\nasync function updateUser(id: string, data: Partial<User>): Promise<void> {\n  const res = await fetch(`/api/users/${id}`, {\n    method: 'PUT',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(data),\n  });\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n}"},{label:"CSS to Tailwind migration",original:".card {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n\n.card-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 8px;\n}\n\n.card-body {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n}",modified:'/* Using Tailwind utility classes */\n/* <div class="flex flex-col bg-white border border-gray-200 rounded-lg p-4 shadow-sm"> */\n\n/* .card-title → */\n/* <h2 class="text-lg font-semibold text-gray-900 mb-2"> */\n\n/* .card-body → */\n/* <p class="text-sm text-gray-500 leading-relaxed"> */\n\n/* Removed all custom CSS — handled by Tailwind */'},{label:"Config file update",original:'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "scripts": {\n    "start": "node index.js",\n    "test": "jest"\n  },\n  "dependencies": {\n    "express": "^4.17.1",\n    "lodash": "^4.17.21"\n  }\n}',modified:'{\n  "name": "my-app",\n  "version": "1.1.0",\n  "scripts": {\n    "start": "node dist/index.js",\n    "dev": "tsx watch src/index.ts",\n    "build": "tsc",\n    "test": "vitest"\n  },\n  "dependencies": {\n    "express": "^4.18.2"\n  },\n  "devDependencies": {\n    "typescript": "^5.0.0",\n    "tsx": "^4.0.0",\n    "vitest": "^1.0.0"\n  }\n}'},{label:"Python class refactor",original:"class Database:\n    def __init__(self):\n        self.connection = None\n\n    def connect(self, host, port, name):\n        self.connection = create_connection(host, port, name)\n\n    def query(self, sql):\n        cursor = self.connection.cursor()\n        cursor.execute(sql)\n        return cursor.fetchall()\n\n    def close(self):\n        if self.connection:\n            self.connection.close()",modified:"from contextlib import contextmanager\nfrom dataclasses import dataclass\n\n@dataclass\nclass DatabaseConfig:\n    host: str\n    port: int\n    name: str\n\nclass Database:\n    def __init__(self, config: DatabaseConfig):\n        self.config = config\n        self._connection = None\n\n    @contextmanager\n    def connect(self):\n        self._connection = create_connection(\n            self.config.host,\n            self.config.port,\n            self.config.name,\n        )\n        try:\n            yield self\n        finally:\n            self._connection.close()\n            self._connection = None\n\n    def query(self, sql: str, params: tuple = ()) -> list:\n        cursor = self._connection.cursor()\n        cursor.execute(sql, params)\n        return cursor.fetchall()"}]}}]);
//# sourceMappingURL=905.3c2cf39b447cae54795e.js.map