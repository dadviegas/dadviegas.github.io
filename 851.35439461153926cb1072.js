"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([[851],{4914(o,a,e){e.d(a,{FlyoutPanel:()=>h});var n=e(7359),t=e(3233),i=e(7207),r=e(255),l=e(217),s=e(5959),d=e(5185),c=e(5723);const m=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=t.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:o})=>o}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:o})=>o+8}px));
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
  background: ${({active:o})=>o?"rgba(88, 166, 255, 0.1)":"none"};
  border: none;
  /* inset box-shadow for the active indicator — doesn't affect layout unlike border-left */
  box-shadow: inset 2px 0 0 ${({active:o})=>o?"#58a6ff":"transparent"};
  color: ${({active:o})=>o?"#58a6ff":"#c9d1d9"};
  font-size: ${l.w.typography.fontSizeBase};
  font-family: ${l.w.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: rgba(88, 166, 255, 0.07);
    color: #e6edf3;
  }
`;function f({iconKey:o}){const a=o?d.t[o]??r.A:r.A;return(0,c.jsx)(a,{size:14,strokeWidth:1.75})}function y({entries:o,activeId:a,onSelect:e}){return(0,c.jsx)(c.Fragment,{children:o.map(o=>o.children?(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(y,{entries:o.children,activeId:a,onSelect:e})},o.id):(0,c.jsxs)(p,{active:a===o.id,onClick:()=>e(o),children:[(0,c.jsx)(f,{iconKey:o.icon}),o.name]},o.id))})}function h({activeId:o}){const{flyout:a,scheduleFlyoutClose:e,cancelFlyoutClose:n}=(0,s.c)();if(!a)return null;const t=a.entry.icon?d.t[a.entry.icon]??r.A:r.A;return(0,c.jsxs)(g,{anchorY:a.anchorY,onMouseEnter:n,onMouseLeave:e,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(t,{size:13,strokeWidth:2}),a.entry.name]}),(0,c.jsx)(y,{entries:a.entry.children??[],activeId:o,onSelect:o=>{a.onSelect(o),e()}})]})}},5959(o,a,e){e.d(a,{c:()=>i});var n=e(7359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},5185(o,a,e){e.d(a,{t:()=>V});var n=e(9510),t=e(9038),i=e(8207),r=e(6896),l=e(7901),s=e(9848),d=e(2164),c=e(3775),m=e(3539),g=e(1783),u=e(1837),p=e(2314),f=e(5751),y=e(255),h=e(9633),b=e(2946),z=e(822),x=e(6720),w=e(3317),A=e(2709),v=e(3517),$=e(7032),k=e(6949),j=e(8218),B=e(6829),S=e(5553),M=e(9591),T=e(2820),E=e(4621),C=e(6673),P=e(9033),R=e(1365),L=e(5912),F=e(8641),D=e(3249),N=e(1821),W=e(9161),K=e(1849),H=e(7747),I=e(2932),G=e(4525),Y=e(7230);const V={activity:r.A,"bar-chart-2":n.A,book:s.A,"book-open":l.A,calendar:c.A,clock:g.A,"circle-dot":m.A,feather:p.A,"file-text":f.A,globe:x.A,hash:w.A,heart:A.A,landmark:v.A,layers:i.A,leaf:k.A,map:M.A,package:C.A,compass:u.A,"git-branch":b.A,github:z.A,minus:E.A,terminal:D.A,thermometer:N.A,users:K.A,wind:H.A,"pie-chart":t.A,plus:R.A,slash:L.A,star:F.A,zap:Y.A,bot:d.A,lightbulb:j.A,"message-square":T.A,wrench:I.A,x:G.A,"layout-grid":$.A,list:B.A,file:y.A,folder:h.A,"map-pin":S.A,"pen-tool":P.A,type:W.A}},217(o,a,e){e.d(a,{w:()=>n});const n={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},2629(o,a,e){var n=e(7359),t=e(8997),i=e(3233),r=e(217),l=e(679),s=e(5723);const d=i.default.button`
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
`,c=i.default.div`
  display: ${({open:o})=>o?"flex":"none"};
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
  background: ${({active:o})=>o?r.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:o})=>o?r.w.colors.accent:r.w.colors.mainText};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeSm};
  font-weight: ${({active:o})=>o?"600":"400"};
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
  background: ${({active:o})=>o?r.w.colors.accent:r.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;function p({apps:o,activeAppId:a}){const[e,t]=(0,n.useState)(!1),i=(0,n.useRef)(null),r=o.find(o=>o.id===a)??o[0];return(0,n.useEffect)(()=>{const o=o=>{i.current&&!i.current.contains(o.target)&&t(!1)};return document.addEventListener("pointerdown",o),()=>document.removeEventListener("pointerdown",o)},[]),(0,s.jsxs)(g,{ref:i,children:[(0,s.jsxs)(d,{onClick:()=>t(o=>!o),children:[r?.label??"Apps",(0,s.jsx)(l.A,{size:13})]}),(0,s.jsx)(c,{open:e,children:o.map(o=>(0,s.jsxs)(m,{active:o.id===a,onClick:()=>(o=>{window.location.hash=o.hash,t(!1)})(o),children:[(0,s.jsx)(u,{active:o.id===a}),o.label]},o.id))})]})}e(5959);const f="260px",y="56px";i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${r.w.colors.sidebarBg};
  border-bottom: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,i.default.div`
  width: ${y};
  min-width: ${y};
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
  width: ${({collapsed:o})=>o?y:f};
  min-width: ${({collapsed:o})=>o?y:f};
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
  grid-template-rows: ${({open:o})=>o?"1fr":"0fr"};
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
  padding: ${({collapsed:o})=>o?"10px 0":`${r.w.spacing.sm} ${r.w.spacing.md}`};
  justify-content: ${({collapsed:o})=>o?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:o})=>o?"0":r.w.spacing.sm};
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
  gap: ${({collapsed:o})=>o?"0":"8px"};
  min-width: 0;
`,i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:o})=>o?0:1};
  max-width: ${({collapsed:o})=>o?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.span`
  display: ${({collapsed:o})=>o?"none":"flex"};
  align-items: center;
  color: ${r.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:o})=>o?"90deg":"0deg"});
  }
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:o})=>o?"9px 0":`6px ${r.w.spacing.md}`};
  justify-content: ${({collapsed:o})=>o?"center":"flex-start"};
  gap: ${({collapsed:o})=>o?"0":"8px"};
  background: ${({active:o})=>o?r.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:o})=>o?"none":"2px"} solid
    ${({active:o})=>o?r.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:o})=>o?r.w.colors.sidebarActive:r.w.colors.sidebarText};
  font-size: ${r.w.typography.fontSizeBase};
  font-family: ${r.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:o})=>o?"0":`0 ${r.w.borderRadius.sm} ${r.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${r.w.colors.sidebarHover};
  }
`;var h=e(7207);const b=h.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${b} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,e(4914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(o=>o.places),i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,i.default.div`
  background: ${r.w.colors.sidebarBg};
  border: 1px solid ${r.w.colors.sidebarBorder};
  border-radius: ${r.w.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,i.default.div`
  font-size: ${r.w.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w.colors.mainText};
  font-family: ${r.w.typography.fontFamily};
`,i.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${r.w.colors.mainBg};
  border: 1px solid ${r.w.colors.border};
  border-radius: ${r.w.borderRadius.md};
  color: ${r.w.colors.mainText};
  font-size: ${r.w.typography.fontSizeBase};
  font-family: ${r.w.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${r.w.colors.accent};
  }

  &::placeholder {
    color: ${r.w.colors.sidebarTextMuted};
  }
`,i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,i.default.button`
  padding: 7px 18px;
  border-radius: ${r.w.borderRadius.md};
  font-size: ${r.w.typography.fontSizeBase};
  font-family: ${r.w.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  background: ${({primary:o})=>o?r.w.colors.accent:"none"};
  color: ${({primary:o})=>o?"#fff":r.w.colors.mainText};
  border: 1px solid ${({primary:o})=>o?r.w.colors.accent:r.w.colors.border};

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`,i.default.div`
  position: relative;
`,i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${r.w.colors.border};
  border-radius: ${r.w.borderRadius.md};
  color: ${r.w.colors.mainText};
  font-size: ${r.w.typography.fontSizeBase};
  font-family: ${r.w.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${r.w.colors.sidebarHover};
    border-color: ${r.w.colors.accent};
  }
`,i.default.div`
  display: ${({open:o})=>o?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${r.w.colors.sidebarBg};
  border: 1px solid ${r.w.colors.sidebarBorder};
  border-radius: ${r.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${r.w.colors.sidebarTextMuted};
  font-family: ${r.w.typography.fontFamily};
  border-bottom: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,i.default.div`
  padding: 16px 14px;
  font-size: ${r.w.typography.fontSizeBase};
  color: ${r.w.colors.sidebarTextMuted};
  font-family: ${r.w.typography.fontFamily};
  font-style: italic;
`,i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${r.w.colors.sidebarHover};
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
  font-size: ${r.w.typography.fontSizeBase};
  color: ${r.w.colors.mainText};
  font-family: ${r.w.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i.default.div`
  font-size: 11px;
  color: ${r.w.colors.sidebarTextMuted};
  font-family: ${r.w.typography.fontFamily};
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
  border-radius: ${r.w.borderRadius.sm};
  cursor: pointer;
  color: ${r.w.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: #f85149;
    background: rgba(248, 81, 73, 0.12);
  }
`;const z=JSON.parse('[{"id":"leitor","port":3023,"label":"LêBem","hash":"#/leitor","icon":"📖","description":"Aprende a ler com jogos e gamificação — Vogais, Sílabas, Palavras","color":"#7c3aed","enabled":true,"category":"Education"},{"id":"markdown","port":3001,"label":"Blog","hash":"#/blog","icon":"📄","description":"Articles and notes across a variety of topics","color":"#388bfd","enabled":true,"category":"Content"},{"id":"mathblog","port":3019,"label":"Matemática","hash":"#/math","icon":"📘","description":"Primary school maths — Years 1 to 4 · PT / EN","color":"#f78166","enabled":true,"category":"Education"},{"id":"portugues","port":3020,"label":"Português","hash":"#/portugues","icon":"📗","description":"Primary school Portuguese — Years 1 to 4 · PT / EN","color":"#f79666","enabled":true,"category":"Education"},{"id":"estudodomeio","port":3021,"label":"Estudo do Meio","hash":"#/estudodomeio","icon":"📙🌱","description":"Primary school environmental studies — Years 1 to 4 · PT / EN","color":"#f78166","enabled":true,"category":"Education"},{"id":"earth","port":3002,"label":"Earth","hash":"#/earth","icon":"🌍","description":"Interactive 3D globe visualization","color":"#3fb950","enabled":true,"category":"Explore"},{"id":"cosmos","port":3006,"label":"Cosmos","hash":"#/cosmos","icon":"🔭","description":"Space exploration and astronomy data","color":"#bc8cff","enabled":true,"category":"Explore"},{"id":"techscope","port":3003,"label":"TechScope","hash":"#/techscope","icon":"📡","description":"Technology trends and insights dashboard","color":"#a371f7","enabled":true,"category":"Content"},{"id":"citypulse","port":3004,"label":"CityPulse","hash":"#/citypulse","icon":"🏙️","description":"City metrics and live urban data","color":"#d29922","enabled":true,"category":"Data"},{"id":"stockpulse","port":3007,"label":"StockPulse","hash":"#/stockpulse","icon":"📈","description":"Real-time stock market pulse","color":"#3fb950","enabled":false,"category":"Data"},{"id":"csvexplorer","port":3016,"label":"CSV Explorer","hash":"#/csvexplorer","icon":"📊","description":"CSV viewer with sorting, filtering, and stats","color":"#58a6ff","enabled":true,"category":"Data"},{"id":"chartbuilder","port":3017,"label":"Chart Builder","hash":"#/chartbuilder","icon":"📉","description":"Build bar, line, pie, and scatter charts from CSV","color":"#d29922","enabled":true,"category":"Data"},{"id":"devhub","port":3005,"label":"DevHub","hash":"#/devhub","icon":"⚙️","description":"Developer tools and utilities hub","color":"#58a6ff","enabled":true,"category":"Content"},{"id":"mdpad","port":3008,"label":"MD Editor","hash":"#/mdpad","icon":"✏️","description":"Markdown editor with live preview, math & diagrams","color":"#f78166","enabled":true,"category":"Tools"},{"id":"regexlab","port":3009,"label":"Regex Lab","hash":"#/regexlab","icon":"🔍","description":"Live regex tester with group highlighting","color":"#388bfd","enabled":true,"category":"Tools"},{"id":"jsonexplorer","port":3010,"label":"JSON Explorer","hash":"#/jsonexplorer","icon":"🗂️","description":"JSON tree explorer with JSONPath filtering","color":"#3fb950","enabled":true,"category":"Tools"},{"id":"codediff","port":3011,"label":"Code Diff","hash":"#/codediff","icon":"📋","description":"Visual side-by-side code diff","color":"#d29922","enabled":true,"category":"Tools"},{"id":"playground","port":3012,"label":"Playground","hash":"#/playground","icon":"🧪","description":"HTML · CSS · JS live playground with preview","color":"#facc15","enabled":true,"category":"Tools"},{"id":"jwtinspector","port":3013,"label":"JWT Inspector","hash":"#/jwtinspector","icon":"🔑","description":"Decode and inspect JWT tokens with expiry info","color":"#a371f7","enabled":true,"category":"Tools"},{"id":"colorlab","port":3014,"label":"Color Lab","hash":"#/colorlab","icon":"🎨","description":"Color picker with palettes, shades, and contrast","color":"#f78166","enabled":true,"category":"Tools"},{"id":"cronbuilder","port":3015,"label":"Cron Builder","hash":"#/cronbuilder","icon":"⏰","description":"Visual cron expression builder with next runs","color":"#3fb950","enabled":true,"category":"Tools"},{"id":"weather","port":3022,"label":"Weather","hash":"#/weather","icon":"🌤️","description":"Live global weather map","color":"#58a6ff","enabled":true,"category":"Explore"},{"id":"mermaidpad","port":3018,"label":"Mermaid","hash":"#/mermaidpad","icon":"🧜","description":"Live Mermaid diagram playground","color":"#bc8cff","enabled":true,"category":"Tools"}]'),x=Object.fromEntries(z.map(({id:o,icon:a,description:e,color:n,category:t})=>[o,{icon:a,description:e,color:n,category:t}])),w=["All",...Array.from(new Set(z.filter(o=>o.enabled).map(o=>o.category)))],A=h.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,v=i.default.div`
  display: flex;
  min-height: 100vh;
  background: ${r.w.colors.mainBg};
`,$=i.default.nav`
  width: 200px;
  min-width: 200px;
  border-right: 1px solid ${r.w.colors.border};
  padding: ${r.w.spacing.xxl} 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,k=i.default.div`
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
  background: ${({active:o})=>o?r.w.colors.sidebarHover:"transparent"};
  color: ${({active:o})=>o?r.w.colors.mainText:r.w.colors.sidebarTextMuted};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  font-weight: ${({active:o})=>o?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
  &:hover {
    background: ${r.w.colors.sidebarHover};
    color: ${r.w.colors.mainText};
  }
`,B=i.default.span`
  font-size: 11px;
  color: ${r.w.colors.sidebarTextMuted};
  font-weight: 400;
`,S=i.default.div`
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
`,R=i.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${r.w.spacing.md};
`,L=i.default.button`
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
  animation-delay: ${({index:o})=>30*o}ms;

  &:hover {
    border-color: ${({accentColor:o})=>o};
    background: ${r.w.colors.sidebarHover};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  }
  &:active { transform: translateY(0); }
`,F=i.default.div`
  font-size: 26px;
  line-height: 1;
  margin-bottom: ${r.w.spacing.sm};
`,D=i.default.div`
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  font-weight: 600;
  color: ${r.w.colors.mainText};
  margin-bottom: ${r.w.spacing.xs};
`,N=i.default.div`
  font-family: ${r.w.typography.fontFamily};
  font-size: 12px;
  color: ${r.w.colors.mainTextMuted};
  line-height: 1.5;
  flex: 1;
`,W=i.default.div`
  margin-top: ${r.w.spacing.md};
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w.typography.fontFamily};
  color: ${({accentColor:o})=>o};
`,K=i.default.div`
  color: ${r.w.colors.mainTextMuted};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
  padding: ${r.w.spacing.xxl} 0;
`;function H({apps:o,onSelect:a}){const[e,t]=(0,n.useState)("All"),[i,l]=(0,n.useState)(""),d=(0,n.useMemo)(()=>{const a=i.toLowerCase();return o.filter(o=>{const n=x[o.id],t="All"===e||n?.category===e,i=!a||o.label.toLowerCase().includes(a)||n?.description.toLowerCase().includes(a);return t&&i})},[o,e,i]),c=(0,n.useMemo)(()=>{if("All"!==e||i)return null;const o={};for(const a of d){const e=x[a.id]?.category??"Other";o[e]||(o[e]=[]),o[e].push(a)}return o},[d,e,i]),m=(0,n.useMemo)(()=>{const a={All:o.length};for(const e of o){const o=x[e.id]?.category;o&&(a[o]=(a[o]??0)+1)}return a},[o]);let g=0;return(0,s.jsxs)(v,{children:[(0,s.jsxs)($,{children:[(0,s.jsx)(k,{children:"Categories"}),w.map(o=>(0,s.jsxs)(j,{active:e===o,onClick:()=>t(o),children:[o,(0,s.jsx)(B,{children:m[o]??0})]},o))]}),(0,s.jsxs)(S,{children:[(0,s.jsxs)(M,{children:[(0,s.jsxs)(T,{children:["Atl",(0,s.jsx)("span",{children:"antis"})]}),(0,s.jsx)(E,{children:"A suite of tools — pick where you want to go"}),(0,s.jsx)(C,{placeholder:"Search apps…",value:i,onChange:o=>l(o.target.value)})]}),0===d.length&&(0,s.jsxs)(K,{children:['No apps match "',i,'"']}),c?Object.entries(c).map(([o,e])=>(0,s.jsxs)("div",{children:[(0,s.jsx)(P,{children:o}),(0,s.jsx)(R,{children:e.map(o=>{const e=x[o.id]??{icon:"🔲",description:"",color:r.w.colors.accent},n=g++;return(0,s.jsxs)(L,{accentColor:e.color,index:n,onClick:()=>a(o),children:[(0,s.jsx)(F,{children:e.icon}),(0,s.jsx)(D,{children:o.label}),(0,s.jsx)(N,{children:e.description}),(0,s.jsx)(W,{accentColor:e.color,children:"Open →"})]},o.id)})})]},o)):(0,s.jsx)(R,{children:d.map(o=>{const e=x[o.id]??{icon:"🔲",description:"",color:r.w.colors.accent},n=g++;return(0,s.jsxs)(L,{accentColor:e.color,index:n,onClick:()=>a(o),children:[(0,s.jsx)(F,{children:e.icon}),(0,s.jsx)(D,{children:o.label}),(0,s.jsx)(N,{children:e.description}),(0,s.jsx)(W,{accentColor:e.color,children:"Open →"})]},o.id)})})]})]})}const I=n.lazy(()=>e.e(280).then(e.t.bind(e,7280,23))),G=n.lazy(()=>e.e(997).then(e.t.bind(e,7997,23))),Y=n.lazy(()=>e.e(305).then(e.t.bind(e,3305,23))),V=n.lazy(()=>e.e(829).then(e.t.bind(e,9829,23))),_=n.lazy(()=>e.e(585).then(e.t.bind(e,4585,23))),O=n.lazy(()=>e.e(699).then(e.t.bind(e,7699,23))),J=n.lazy(()=>e.e(614).then(e.t.bind(e,9614,23))),U=n.lazy(()=>e.e(871).then(e.t.bind(e,9871,23))),Z=n.lazy(()=>e.e(745).then(e.t.bind(e,2745,23))),X=n.lazy(()=>e.e(776).then(e.t.bind(e,6776,23))),Q=n.lazy(()=>e.e(937).then(e.t.bind(e,1937,23))),q=n.lazy(()=>e.e(780).then(e.t.bind(e,1780,23))),oo=n.lazy(()=>e.e(633).then(e.t.bind(e,8633,23))),ao=n.lazy(()=>e.e(105).then(e.t.bind(e,8105,23))),eo=n.lazy(()=>e.e(672).then(e.t.bind(e,7672,23))),no=n.lazy(()=>e.e(836).then(e.t.bind(e,5836,23))),to=n.lazy(()=>e.e(902).then(e.t.bind(e,3902,23))),io=n.lazy(()=>e.e(867).then(e.t.bind(e,5867,23))),ro=n.lazy(()=>e.e(126).then(e.t.bind(e,7745,23))),lo=n.lazy(()=>e.e(2).then(e.t.bind(e,2,23))),so=n.lazy(()=>e.e(399).then(e.t.bind(e,5399,23))),co=n.lazy(()=>e.e(464).then(e.t.bind(e,8464,23))),mo=n.lazy(()=>e.e(437).then(e.t.bind(e,3437,23))),go=z.filter(o=>o.enabled).map(({id:o,label:a,hash:e})=>({id:o,label:a,hash:e})),uo=i.default.div`
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  animation: fadeIn 0.2s ease-in-out;
  height: 100%;
`,po=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  color: ${r.w.colors.mainTextMuted};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeBase};
`,fo=(0,i.default)(po)`
  flex-direction: column;
  gap: ${r.w.spacing.md};
`,yo=i.default.h2`
  color: ${r.w.colors.mainText};
  font-size: ${r.w.typography.fontSizeLg};
`;class ho extends n.Component{constructor(o){super(o),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,s.jsxs)(fo,{children:[(0,s.jsxs)(yo,{children:["Failed to load “",this.props.name,"”"]}),(0,s.jsx)("p",{children:"Make sure the remote app is running on the correct port."})]}):this.props.children}}function bo(o){const a=o.replace(/^#\/?/,"");return a&&"home"!==a?a.startsWith("earth")?"earth":a.startsWith("techscope")?"techscope":a.startsWith("citypulse")?"citypulse":a.startsWith("devhub")?"devhub":a.startsWith("cosmos")?"cosmos":a.startsWith("stockpulse")?"stockpulse":a.startsWith("mdpad")?"mdpad":a.startsWith("regexlab")?"regexlab":a.startsWith("jsonexplorer")?"jsonexplorer":a.startsWith("codediff")?"codediff":a.startsWith("playground")?"playground":a.startsWith("blog")?"markdown":a.startsWith("jwtinspector")?"jwtinspector":a.startsWith("colorlab")?"colorlab":a.startsWith("cronbuilder")?"cronbuilder":a.startsWith("csvexplorer")?"csvexplorer":a.startsWith("chartbuilder")?"chartbuilder":a.startsWith("mermaidpad")?"mermaidpad":a.startsWith("math")?"mathblog":a.startsWith("portugues")?"portugues":a.startsWith("estudodomeio")?"estudodomeio":a.startsWith("weather")?"weather":a.startsWith("leitor")?"leitor":"home":"home"}function zo(){const[o,a]=(0,n.useState)(()=>bo(window.location.hash));(0,n.useEffect)(()=>{const o=()=>a(bo(window.location.hash));return window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[]);const e=(0,s.jsx)(p,{apps:go,activeAppId:o});return"home"===o?(0,s.jsx)(uo,{children:(0,s.jsx)(H,{apps:go,onSelect:o=>{window.location.hash=o.hash}})},"home"):(0,s.jsx)(ho,{name:o,children:(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(po,{children:"Loading…"}),children:(0,s.jsxs)(uo,{children:["earth"===o&&(0,s.jsx)(G,{topBarRight:e}),"markdown"===o&&(0,s.jsx)(I,{topBarRight:e}),"techscope"===o&&(0,s.jsx)(Y,{topBarRight:e}),"citypulse"===o&&(0,s.jsx)(V,{topBarRight:e}),"devhub"===o&&(0,s.jsx)(_,{topBarRight:e}),"cosmos"===o&&(0,s.jsx)(O,{topBarRight:e}),"stockpulse"===o&&(0,s.jsx)(J,{topBarRight:e}),"mdpad"===o&&(0,s.jsx)(U,{topBarRight:e}),"regexlab"===o&&(0,s.jsx)(Z,{topBarRight:e}),"jsonexplorer"===o&&(0,s.jsx)(X,{topBarRight:e}),"codediff"===o&&(0,s.jsx)(Q,{topBarRight:e}),"playground"===o&&(0,s.jsx)(q,{topBarRight:e}),"jwtinspector"===o&&(0,s.jsx)(oo,{topBarRight:e}),"colorlab"===o&&(0,s.jsx)(ao,{topBarRight:e}),"cronbuilder"===o&&(0,s.jsx)(eo,{topBarRight:e}),"csvexplorer"===o&&(0,s.jsx)(no,{topBarRight:e}),"chartbuilder"===o&&(0,s.jsx)(to,{topBarRight:e}),"mermaidpad"===o&&(0,s.jsx)(io,{topBarRight:e}),"mathblog"===o&&(0,s.jsx)(ro,{topBarRight:e}),"portugues"===o&&(0,s.jsx)(so,{topBarRight:e}),"estudodomeio"===o&&(0,s.jsx)(co,{topBarRight:e}),"weather"===o&&(0,s.jsx)(mo,{topBarRight:e}),"leitor"===o&&(0,s.jsx)(lo,{topBarRight:e})]},o)})})}const xo=document.getElementById("root");if(!xo)throw new Error("Root element #root not found");(0,t.H)(xo).render((0,s.jsx)(zo,{}))}}]);
//# sourceMappingURL=851.35439461153926cb1072.js.map