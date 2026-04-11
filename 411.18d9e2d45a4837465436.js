"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([[411],{4914(a,o,e){e.d(o,{FlyoutPanel:()=>y});var n=e(7359),t=e(3233),i=e(7207),r=e(255),l=e(217),s=e(5959),c=e(5185),d=e(5723);const m=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=t.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:a})=>a}px);
  bottom: 8px;
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
`,u=t.default.div`
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
`,p=t.default.button`
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
`;function f({iconKey:a}){const o=a?c.t[a]??r.A:r.A;return(0,d.jsx)(o,{size:14,strokeWidth:1.75})}function h({entries:a,activeId:o,onSelect:e}){return(0,d.jsx)(d.Fragment,{children:a.map(a=>a.children?(0,d.jsx)(n.Fragment,{children:(0,d.jsx)(h,{entries:a.children,activeId:o,onSelect:e})},a.id):(0,d.jsxs)(p,{active:o===a.id,onClick:()=>e(a),children:[(0,d.jsx)(f,{iconKey:a.icon}),a.name]},a.id))})}function y({activeId:a}){const{flyout:o,scheduleFlyoutClose:e,cancelFlyoutClose:n}=(0,s.c)();if(!o)return null;const t=o.entry.icon?c.t[o.entry.icon]??r.A:r.A;return(0,d.jsxs)(g,{anchorY:o.anchorY,onMouseEnter:n,onMouseLeave:e,children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(t,{size:13,strokeWidth:2}),o.entry.name]}),(0,d.jsx)(h,{entries:o.entry.children??[],activeId:a,onSelect:a=>{o.onSelect(a),e()}})]})}},5959(a,o,e){e.d(o,{c:()=>i});var n=e(7359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},5185(a,o,e){e.d(o,{t:()=>F});var n=e(9038),t=e(6896),i=e(7901),r=e(9848),l=e(2164),s=e(3539),c=e(1783),d=e(1837),m=e(2314),g=e(5751),u=e(255),p=e(9633),f=e(2946),h=e(822),y=e(3317),z=e(2709),b=e(3517),x=e(7032),w=e(6949),A=e(8218),v=e(6829),k=e(5553),$=e(9591),j=e(2820),S=e(4621),B=e(6673),M=e(9033),T=e(1365),E=e(5912),C=e(8641),P=e(3249),L=e(9161),R=e(2932),D=e(4525),N=e(7230);const F={activity:t.A,book:r.A,clock:c.A,"book-open":i.A,"circle-dot":s.A,feather:m.A,"file-text":g.A,hash:y.A,heart:z.A,landmark:b.A,leaf:w.A,map:$.A,package:B.A,compass:d.A,"git-branch":f.A,github:h.A,minus:S.A,terminal:P.A,"pie-chart":n.A,plus:T.A,slash:E.A,star:C.A,zap:N.A,bot:l.A,lightbulb:A.A,"message-square":j.A,wrench:R.A,x:D.A,"layout-grid":x.A,list:v.A,file:u.A,folder:p.A,"map-pin":k.A,"pen-tool":M.A,type:L.A}},217(a,o,e){e.d(o,{w:()=>n});const n={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},1958(a,o,e){var n=e(7359),t=e(8997),i=e(3233),r=e(217),l=e(679),s=e(5723);const c=i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${r.w.spacing.sm};
  background: ${r.w.colors.surface};
  border: 1px solid ${r.w.colors.border};
  border-radius: ${r.w.borderRadius.md};
  color: ${r.w.colors.mainText};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${r.w.colors.sidebarHover};
    border-color: ${r.w.colors.accent};
  }
`,d=i.default.div`
  display: ${({open:a})=>a?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${r.w.colors.surface};
  border: 1px solid ${r.w.colors.border};
  border-radius: ${r.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,m=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${r.w.spacing.sm};
  background: ${({active:a})=>a?r.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:a})=>a?r.w.colors.accent:r.w.colors.mainText};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeSm};
  font-weight: ${({active:a})=>a?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${r.w.colors.sidebarHover};
  }
`,g=i.default.div`
  position: relative;
`,u=i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:a})=>a?r.w.colors.accent:r.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;function p({apps:a,activeAppId:o}){const[e,t]=(0,n.useState)(!1),i=(0,n.useRef)(null),r=a.find(a=>a.id===o)??a[0];return(0,n.useEffect)(()=>{const a=a=>{i.current&&!i.current.contains(a.target)&&t(!1)};return document.addEventListener("pointerdown",a),()=>document.removeEventListener("pointerdown",a)},[]),(0,s.jsxs)(g,{ref:i,children:[(0,s.jsxs)(c,{onClick:()=>t(a=>!a),children:[r?.label??"Apps",(0,s.jsx)(l.A,{size:13})]}),(0,s.jsx)(d,{open:e,children:a.map(a=>(0,s.jsxs)(m,{active:a.id===o,onClick:()=>(a=>{window.location.hash=a.hash,t(!1)})(a),children:[(0,s.jsx)(u,{active:a.id===o}),a.label]},a.id))})]})}e(5959);const f="260px",h="56px";i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${r.w.colors.sidebarBg};
  border-bottom: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,i.default.div`
  width: ${h};
  min-width: ${h};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${r.w.borderRadius.md};
  cursor: pointer;
  color: ${r.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${r.w.colors.sidebarHover};
    color: ${r.w.colors.sidebarText};
  }
`,i.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${r.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${r.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${r.w.colors.accent}; }
`,i.default.div`
  font-size: ${r.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${r.w.colors.sidebarTextMuted};
  font-family: ${r.w.typography.fontFamily};
  padding-left: ${r.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${r.w.spacing.sm};
    color: ${r.w.colors.border};
  }
`,i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${r.w.spacing.sm};
  padding: 0 ${r.w.spacing.lg};
`,i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.mainText};
  overflow: hidden;
`,i.default.aside`
  width: ${({collapsed:a})=>a?h:f};
  min-width: ${({collapsed:a})=>a?h:f};
  background: ${r.w.colors.sidebarBg};
  border-right: 1px solid ${r.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${r.w.breakpoints.md}) {
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
`,e(5185),i.default.div`
  display: grid;
  grid-template-rows: ${({open:a})=>a?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.div`
  overflow: hidden;
`,i.default.div`
  padding-left: ${r.w.spacing.md};
`,i.default.div`
  display: flex;
  flex-direction: column;
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:a})=>a?"10px 0":`${r.w.spacing.sm} ${r.w.spacing.md}`};
  justify-content: ${({collapsed:a})=>a?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:a})=>a?"0":r.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${r.w.colors.sidebarTextMuted};
  font-size: ${r.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${r.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${r.w.colors.sidebarText};
    background: ${r.w.colors.sidebarHover};
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
  color: ${r.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:a})=>a?"90deg":"0deg"});
  }
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:a})=>a?"9px 0":`6px ${r.w.spacing.md}`};
  justify-content: ${({collapsed:a})=>a?"center":"flex-start"};
  gap: ${({collapsed:a})=>a?"0":"8px"};
  background: ${({active:a})=>a?r.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:a})=>a?"none":"2px"} solid
    ${({active:a})=>a?r.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:a})=>a?r.w.colors.sidebarActive:r.w.colors.sidebarText};
  font-size: ${r.w.typography.fontSizeBase};
  font-family: ${r.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:a})=>a?"0":`0 ${r.w.borderRadius.sm} ${r.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${r.w.colors.sidebarHover};
  }
`;var y=e(7207);const z=y.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${z} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,e(4914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(a=>a.places);const b=JSON.parse('[{"id":"markdown","port":3001,"label":"Blog","hash":"#/blog","icon":"📄","description":"Articles and notes across a variety of topics","color":"#388bfd","enabled":true,"category":"Content"},{"id":"mathblog","port":3019,"label":"Matemática","hash":"#/math","icon":"📘","description":"Primary school maths — Years 1 to 4 · PT / EN","color":"#f78166","enabled":true,"category":"Education"},{"id":"portugues","port":3020,"label":"Português","hash":"#/portugues","icon":"📗","description":"Primary school Portuguese — Years 1 to 4 · PT / EN","color":"#f79666","enabled":true,"category":"Education"},{"id":"estudodomeio","port":3021,"label":"Estudo do Meio","hash":"#/estudodomeio","icon":"📙🌱","description":"Primary school environmental studies — Years 1 to 4 · PT / EN","color":"#f78166","enabled":true,"category":"Education"},{"id":"earth","port":3002,"label":"Earth","hash":"#/earth","icon":"🌍","description":"Interactive 3D globe visualization","color":"#3fb950","enabled":true,"category":"Explore"},{"id":"cosmos","port":3006,"label":"Cosmos","hash":"#/cosmos","icon":"🔭","description":"Space exploration and astronomy data","color":"#bc8cff","enabled":true,"category":"Explore"},{"id":"techscope","port":3003,"label":"TechScope","hash":"#/techscope","icon":"📡","description":"Technology trends and insights dashboard","color":"#a371f7","enabled":true,"category":"Data"},{"id":"citypulse","port":3004,"label":"CityPulse","hash":"#/citypulse","icon":"🏙️","description":"City metrics and live urban data","color":"#d29922","enabled":true,"category":"Data"},{"id":"stockpulse","port":3007,"label":"StockPulse","hash":"#/stockpulse","icon":"📈","description":"Real-time stock market pulse","color":"#3fb950","enabled":false,"category":"Data"},{"id":"csvexplorer","port":3016,"label":"CSV Explorer","hash":"#/csvexplorer","icon":"📊","description":"CSV viewer with sorting, filtering, and stats","color":"#58a6ff","enabled":true,"category":"Data"},{"id":"chartbuilder","port":3017,"label":"Chart Builder","hash":"#/chartbuilder","icon":"📉","description":"Build bar, line, pie, and scatter charts from CSV","color":"#d29922","enabled":true,"category":"Data"},{"id":"devhub","port":3005,"label":"DevHub","hash":"#/devhub","icon":"⚙️","description":"Developer tools and utilities hub","color":"#58a6ff","enabled":true,"category":"Tools"},{"id":"mdpad","port":3008,"label":"MD Editor","hash":"#/mdpad","icon":"✏️","description":"Markdown editor with live preview, math & diagrams","color":"#f78166","enabled":true,"category":"Tools"},{"id":"regexlab","port":3009,"label":"Regex Lab","hash":"#/regexlab","icon":"🔍","description":"Live regex tester with group highlighting","color":"#388bfd","enabled":true,"category":"Tools"},{"id":"jsonexplorer","port":3010,"label":"JSON Explorer","hash":"#/jsonexplorer","icon":"🗂️","description":"JSON tree explorer with JSONPath filtering","color":"#3fb950","enabled":true,"category":"Tools"},{"id":"codediff","port":3011,"label":"Code Diff","hash":"#/codediff","icon":"📋","description":"Visual side-by-side code diff","color":"#d29922","enabled":true,"category":"Tools"},{"id":"playground","port":3012,"label":"Playground","hash":"#/playground","icon":"🧪","description":"HTML · CSS · JS live playground with preview","color":"#facc15","enabled":true,"category":"Tools"},{"id":"jwtinspector","port":3013,"label":"JWT Inspector","hash":"#/jwtinspector","icon":"🔑","description":"Decode and inspect JWT tokens with expiry info","color":"#a371f7","enabled":true,"category":"Tools"},{"id":"colorlab","port":3014,"label":"Color Lab","hash":"#/colorlab","icon":"🎨","description":"Color picker with palettes, shades, and contrast","color":"#f78166","enabled":true,"category":"Tools"},{"id":"cronbuilder","port":3015,"label":"Cron Builder","hash":"#/cronbuilder","icon":"⏰","description":"Visual cron expression builder with next runs","color":"#3fb950","enabled":true,"category":"Tools"},{"id":"weather","port":3022,"label":"Weather","hash":"#/weather","icon":"🌤️","description":"Live global weather map","color":"#58a6ff","enabled":true,"category":"Explore"},{"id":"mermaidpad","port":3018,"label":"Mermaid","hash":"#/mermaidpad","icon":"🧜","description":"Live Mermaid diagram playground","color":"#bc8cff","enabled":true,"category":"Tools"}]'),x=Object.fromEntries(b.map(({id:a,icon:o,description:e,color:n,category:t})=>[a,{icon:o,description:e,color:n,category:t}])),w=["All",...Array.from(new Set(b.filter(a=>a.enabled).map(a=>a.category)))],A=y.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,v=i.default.div`
  display: flex;
  min-height: 100vh;
  background: ${r.w.colors.mainBg};
`,k=i.default.nav`
  width: 200px;
  min-width: 200px;
  border-right: 1px solid ${r.w.colors.border};
  padding: ${r.w.spacing.xxl} 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$=i.default.div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.sidebarTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0 ${r.w.spacing.lg} ${r.w.spacing.sm};
`,j=i.default.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px ${r.w.spacing.lg};
  margin: 0 ${r.w.spacing.sm};
  border: none;
  border-radius: ${r.w.borderRadius.sm};
  background: ${({active:a})=>a?r.w.colors.sidebarHover:"transparent"};
  color: ${({active:a})=>a?r.w.colors.mainText:r.w.colors.sidebarTextMuted};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  font-weight: ${({active:a})=>a?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
  &:hover {
    background: ${r.w.colors.sidebarHover};
    color: ${r.w.colors.mainText};
  }
`,S=i.default.span`
  font-size: 11px;
  color: ${r.w.colors.sidebarTextMuted};
  font-weight: 400;
`,B=i.default.div`
  flex: 1;
  padding: 64px ${r.w.spacing.xxl};
  overflow-y: auto;
`,M=i.default.div`
  margin-bottom: 40px;
  animation: ${A} 0.35s ease both;
`,T=i.default.div`
  font-size: 32px;
  font-weight: 800;
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.mainText};
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: ${r.w.spacing.sm};
  span { color: ${r.w.colors.accent}; }
`,E=i.default.p`
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  color: ${r.w.colors.mainTextMuted};
  margin: 0 0 ${r.w.spacing.lg};
`,C=i.default.input`
  width: 100%;
  max-width: 400px;
  height: 36px;
  padding: 0 ${r.w.spacing.md};
  background: ${r.w.colors.surface};
  border: 1px solid ${r.w.colors.border};
  border-radius: ${r.w.borderRadius.md};
  color: ${r.w.colors.mainText};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  outline: none;
  transition: border-color 0.15s;
  &::placeholder { color: ${r.w.colors.sidebarTextMuted}; }
  &:focus { border-color: ${r.w.colors.accent}; }
`,P=i.default.div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.sidebarTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 18px;
  margin-bottom: ${r.w.spacing.md};
`,L=i.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${r.w.spacing.md};
`,R=i.default.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${r.w.spacing.lg};
  background: ${r.w.colors.surface};
  border: 1px solid ${r.w.colors.border};
  border-radius: ${r.w.borderRadius.lg};
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s, background 0.2s, transform 0.15s, box-shadow 0.2s;
  animation: ${A} 0.35s ease both;
  animation-delay: ${({index:a})=>30*a}ms;

  &:hover {
    border-color: ${({accentColor:a})=>a};
    background: ${r.w.colors.sidebarHover};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  }
  &:active { transform: translateY(0); }
`,D=i.default.div`
  font-size: 26px;
  line-height: 1;
  margin-bottom: ${r.w.spacing.sm};
`,N=i.default.div`
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  font-weight: 600;
  color: ${r.w.colors.mainText};
  margin-bottom: ${r.w.spacing.xs};
`,F=i.default.div`
  font-family: ${r.w.typography.fontFamily};
  font-size: 12px;
  color: ${r.w.colors.mainTextMuted};
  line-height: 1.5;
  flex: 1;
`,K=i.default.div`
  margin-top: ${r.w.spacing.md};
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w.typography.fontFamily};
  color: ${({accentColor:a})=>a};
`,W=i.default.div`
  color: ${r.w.colors.mainTextMuted};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  padding: ${r.w.spacing.xxl} 0;
`;function I({apps:a,onSelect:o}){const[e,t]=(0,n.useState)("All"),[i,l]=(0,n.useState)(""),c=(0,n.useMemo)(()=>{const o=i.toLowerCase();return a.filter(a=>{const n=x[a.id],t="All"===e||n?.category===e,i=!o||a.label.toLowerCase().includes(o)||n?.description.toLowerCase().includes(o);return t&&i})},[a,e,i]),d=(0,n.useMemo)(()=>{if("All"!==e||i)return null;const a={};for(const o of c){const e=x[o.id]?.category??"Other";a[e]||(a[e]=[]),a[e].push(o)}return a},[c,e,i]),m=(0,n.useMemo)(()=>{const o={All:a.length};for(const e of a){const a=x[e.id]?.category;a&&(o[a]=(o[a]??0)+1)}return o},[a]);let g=0;return(0,s.jsxs)(v,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)($,{children:"Categories"}),w.map(a=>(0,s.jsxs)(j,{active:e===a,onClick:()=>t(a),children:[a,(0,s.jsx)(S,{children:m[a]??0})]},a))]}),(0,s.jsxs)(B,{children:[(0,s.jsxs)(M,{children:[(0,s.jsxs)(T,{children:["Atl",(0,s.jsx)("span",{children:"antis"})]}),(0,s.jsx)(E,{children:"A suite of tools — pick where you want to go"}),(0,s.jsx)(C,{placeholder:"Search apps…",value:i,onChange:a=>l(a.target.value)})]}),0===c.length&&(0,s.jsxs)(W,{children:['No apps match "',i,'"']}),d?Object.entries(d).map(([a,e])=>(0,s.jsxs)("div",{children:[(0,s.jsx)(P,{children:a}),(0,s.jsx)(L,{children:e.map(a=>{const e=x[a.id]??{icon:"🔲",description:"",color:r.w.colors.accent},n=g++;return(0,s.jsxs)(R,{accentColor:e.color,index:n,onClick:()=>o(a),children:[(0,s.jsx)(D,{children:e.icon}),(0,s.jsx)(N,{children:a.label}),(0,s.jsx)(F,{children:e.description}),(0,s.jsx)(K,{accentColor:e.color,children:"Open →"})]},a.id)})})]},a)):(0,s.jsx)(L,{children:c.map(a=>{const e=x[a.id]??{icon:"🔲",description:"",color:r.w.colors.accent},n=g++;return(0,s.jsxs)(R,{accentColor:e.color,index:n,onClick:()=>o(a),children:[(0,s.jsx)(D,{children:e.icon}),(0,s.jsx)(N,{children:a.label}),(0,s.jsx)(F,{children:e.description}),(0,s.jsx)(K,{accentColor:e.color,children:"Open →"})]},a.id)})})]})]})}const G=n.lazy(()=>e.e(280).then(e.t.bind(e,7280,23))),H=n.lazy(()=>e.e(997).then(e.t.bind(e,7997,23))),Y=n.lazy(()=>e.e(305).then(e.t.bind(e,3305,23))),V=n.lazy(()=>e.e(829).then(e.t.bind(e,9829,23))),_=n.lazy(()=>e.e(585).then(e.t.bind(e,4585,23))),O=n.lazy(()=>e.e(699).then(e.t.bind(e,7699,23))),J=n.lazy(()=>e.e(614).then(e.t.bind(e,9614,23))),U=n.lazy(()=>e.e(871).then(e.t.bind(e,9871,23))),Z=n.lazy(()=>e.e(745).then(e.t.bind(e,2745,23))),X=n.lazy(()=>e.e(776).then(e.t.bind(e,6776,23))),Q=n.lazy(()=>e.e(937).then(e.t.bind(e,1937,23))),q=n.lazy(()=>e.e(780).then(e.t.bind(e,1780,23))),aa=n.lazy(()=>e.e(633).then(e.t.bind(e,8633,23))),oa=n.lazy(()=>e.e(105).then(e.t.bind(e,8105,23))),ea=n.lazy(()=>e.e(672).then(e.t.bind(e,7672,23))),na=n.lazy(()=>e.e(836).then(e.t.bind(e,5836,23))),ta=n.lazy(()=>e.e(902).then(e.t.bind(e,3902,23))),ia=n.lazy(()=>e.e(867).then(e.t.bind(e,5867,23))),ra=n.lazy(()=>e.e(126).then(e.t.bind(e,7745,23))),la=n.lazy(()=>e.e(399).then(e.t.bind(e,5399,23))),sa=n.lazy(()=>e.e(464).then(e.t.bind(e,8464,23))),ca=n.lazy(()=>e.e(437).then(e.t.bind(e,3437,23))),da=b.filter(a=>a.enabled).map(({id:a,label:o,hash:e})=>({id:a,label:o,hash:e})),ma=i.default.div`
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  animation: fadeIn 0.2s ease-in-out;
  height: 100%;
`,ga=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  color: ${r.w.colors.mainTextMuted};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
`,ua=(0,i.default)(ga)`
  flex-direction: column;
  gap: ${r.w.spacing.md};
`,pa=i.default.h2`
  color: ${r.w.colors.mainText};
  font-size: ${r.w.typography.fontSizeLg};
`;class fa extends n.Component{constructor(a){super(a),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,s.jsxs)(ua,{children:[(0,s.jsxs)(pa,{children:["Failed to load “",this.props.name,"”"]}),(0,s.jsx)("p",{children:"Make sure the remote app is running on the correct port."})]}):this.props.children}}function ha(a){const o=a.replace(/^#\/?/,"");return o&&"home"!==o?o.startsWith("earth")?"earth":o.startsWith("techscope")?"techscope":o.startsWith("citypulse")?"citypulse":o.startsWith("devhub")?"devhub":o.startsWith("cosmos")?"cosmos":o.startsWith("stockpulse")?"stockpulse":o.startsWith("mdpad")?"mdpad":o.startsWith("regexlab")?"regexlab":o.startsWith("jsonexplorer")?"jsonexplorer":o.startsWith("codediff")?"codediff":o.startsWith("playground")?"playground":o.startsWith("blog")?"markdown":o.startsWith("jwtinspector")?"jwtinspector":o.startsWith("colorlab")?"colorlab":o.startsWith("cronbuilder")?"cronbuilder":o.startsWith("csvexplorer")?"csvexplorer":o.startsWith("chartbuilder")?"chartbuilder":o.startsWith("mermaidpad")?"mermaidpad":o.startsWith("math")?"mathblog":o.startsWith("portugues")?"portugues":o.startsWith("estudodomeio")?"estudodomeio":o.startsWith("weather")?"weather":"home":"home"}function ya(){const[a,o]=(0,n.useState)(()=>ha(window.location.hash));(0,n.useEffect)(()=>{const a=()=>o(ha(window.location.hash));return window.addEventListener("hashchange",a),()=>window.removeEventListener("hashchange",a)},[]);const e=(0,s.jsx)(p,{apps:da,activeAppId:a});return"home"===a?(0,s.jsx)(ma,{children:(0,s.jsx)(I,{apps:da,onSelect:a=>{window.location.hash=a.hash}})},"home"):(0,s.jsx)(fa,{name:a,children:(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(ga,{children:"Loading…"}),children:(0,s.jsxs)(ma,{children:["earth"===a&&(0,s.jsx)(H,{topBarRight:e}),"markdown"===a&&(0,s.jsx)(G,{topBarRight:e}),"techscope"===a&&(0,s.jsx)(Y,{topBarRight:e}),"citypulse"===a&&(0,s.jsx)(V,{topBarRight:e}),"devhub"===a&&(0,s.jsx)(_,{topBarRight:e}),"cosmos"===a&&(0,s.jsx)(O,{topBarRight:e}),"stockpulse"===a&&(0,s.jsx)(J,{topBarRight:e}),"mdpad"===a&&(0,s.jsx)(U,{topBarRight:e}),"regexlab"===a&&(0,s.jsx)(Z,{topBarRight:e}),"jsonexplorer"===a&&(0,s.jsx)(X,{topBarRight:e}),"codediff"===a&&(0,s.jsx)(Q,{topBarRight:e}),"playground"===a&&(0,s.jsx)(q,{topBarRight:e}),"jwtinspector"===a&&(0,s.jsx)(aa,{topBarRight:e}),"colorlab"===a&&(0,s.jsx)(oa,{topBarRight:e}),"cronbuilder"===a&&(0,s.jsx)(ea,{topBarRight:e}),"csvexplorer"===a&&(0,s.jsx)(na,{topBarRight:e}),"chartbuilder"===a&&(0,s.jsx)(ta,{topBarRight:e}),"mermaidpad"===a&&(0,s.jsx)(ia,{topBarRight:e}),"mathblog"===a&&(0,s.jsx)(ra,{topBarRight:e}),"portugues"===a&&(0,s.jsx)(la,{topBarRight:e}),"estudodomeio"===a&&(0,s.jsx)(sa,{topBarRight:e}),"weather"===a&&(0,s.jsx)(ca,{topBarRight:e})]},a)})})}const za=document.getElementById("root");if(!za)throw new Error("Root element #root not found");(0,t.H)(za).render((0,s.jsx)(ya,{}))}}]);
//# sourceMappingURL=411.18d9e2d45a4837465436.js.map