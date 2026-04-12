"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[694],{4914(e,a,o){o.d(a,{FlyoutPanel:()=>y});var n=o(7359),i=o(3233),t=o(7207),r=o(255),l=o(217),s=o(5959),d=o(5185),c=o(5723);const m=t.keyframes`
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
`,p=i.default.button`
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
`;function f({iconKey:e}){const a=e?d.t[e]??r.A:r.A;return(0,c.jsx)(a,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:a,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(x,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,c.jsxs)(p,{active:a===e.id,onClick:()=>o(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function y({activeId:e}){const{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,s.c)();if(!a)return null;const i=a.entry.icon?d.t[a.entry.icon]??r.A:r.A;return(0,c.jsxs)(g,{anchorY:a.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(i,{size:13,strokeWidth:2}),a.entry.name]}),(0,c.jsx)(x,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},5959(e,a,o){o.d(a,{I:()=>i,c:()=>t});var n=o(7359);const i=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,n.useContext)(i)},5185(e,a,o){o.d(a,{t:()=>Y});var n=o(9510),i=o(9038),t=o(8207),r=o(6896),l=o(7901),s=o(9848),d=o(2164),c=o(3775),m=o(3539),g=o(1783),u=o(1837),p=o(2314),f=o(5751),x=o(255),y=o(9633),b=o(2946),h=o(822),z=o(6720),w=o(3317),v=o(2709),A=o(3517),$=o(7032),k=o(6949),j=o(8218),S=o(6829),M=o(5553),T=o(9591),B=o(2820),_=o(4621),C=o(6673),P=o(9033),E=o(1365),F=o(5912),L=o(8641),R=o(3249),D=o(1821),I=o(9161),N=o(1849),K=o(7747),H=o(2932),G=o(4525),U=o(7230);const Y={activity:r.A,"bar-chart-2":n.A,book:s.A,"book-open":l.A,calendar:c.A,clock:g.A,"circle-dot":m.A,feather:p.A,"file-text":f.A,globe:z.A,hash:w.A,heart:v.A,landmark:A.A,layers:t.A,leaf:k.A,map:T.A,package:C.A,compass:u.A,"git-branch":b.A,github:h.A,minus:_.A,terminal:R.A,thermometer:D.A,users:N.A,wind:K.A,"pie-chart":i.A,plus:E.A,slash:F.A,star:L.A,zap:U.A,bot:d.A,lightbulb:j.A,"message-square":B.A,wrench:H.A,x:G.A,"layout-grid":$.A,list:S.A,file:x.A,folder:y.A,"map-pin":M.A,"pen-tool":P.A,type:I.A}},4079(e,a,o){o.d(a,{PE:()=>A,CD:()=>D,w4:()=>n.w});var n=o(217),i=o(7359),t=o(3233),r=o(5723);t.default.button`
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
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w.colors.sidebarHover};
    border-color: ${n.w.colors.accent};
  }
`,t.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${n.w.colors.surface};
  border: 1px solid ${n.w.colors.border};
  border-radius: ${n.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${n.w.spacing.sm};
  background: ${({active:e})=>e?n.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:e})=>e?n.w.colors.accent:n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
  }
`,t.default.div`
  position: relative;
`,t.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?n.w.colors.accent:n.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var l=o(3661),s=o(5959);const d="260px",c="56px",m=t.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${n.w.colors.sidebarBg};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
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
  border-right: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,u=t.default.button`
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
`,p=t.default.button`
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
`,f=t.default.div`
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
`,x=t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w.spacing.sm};
  padding: 0 ${n.w.spacing.lg};
`,y=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,b=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${n.w.colors.mainBg};
  font-family: ${n.w.typography.fontFamily};
  color: ${n.w.colors.mainText};
  overflow: hidden;
`,h=t.default.aside`
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
`,v="atlantis:sidebar-collapsed";function A({sidebar:e,children:a,topBarRight:n,title:t="Atlantis",activeId:d=null}){const[c,A]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(v)}catch{return!1}}),[$,k]=(0,i.useState)(null),j=(0,i.useRef)(),S=()=>A(e=>{const a=!e;try{localStorage.setItem(v,String(a))}catch{}return a}),M=i.useMemo(()=>i.lazy(()=>Promise.resolve().then(o.bind(o,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(s.I.Provider,{value:{collapsed:c,toggle:S,flyout:$,openFlyout:(e,a,o)=>{clearTimeout(j.current),k({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{j.current=setTimeout(()=>k(null),160)},cancelFlyoutClose:()=>clearTimeout(j.current)},children:(0,r.jsxs)(b,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(g,{children:(0,r.jsx)(u,{onClick:S,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(l.A,{size:17})})}),(0,r.jsxs)(p,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,r.jsx)("span",{children:"antis"})]}),t&&(0,r.jsx)(f,{children:t}),n&&(0,r.jsx)(x,{children:n})]}),(0,r.jsxs)(y,{children:[(0,r.jsx)(h,{collapsed:c,children:(0,r.jsx)(z,{children:e})}),(0,r.jsx)(w,{children:a})]}),$&&(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)(M,{activeId:d})})]})})}var $=o(255),k=o(9753),j=o(5185);const S=t.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,M=t.default.div`
  overflow: hidden;
`,T=t.default.div`
  padding-left: ${n.w.spacing.md};
`,B=t.default.div`
  display: flex;
  flex-direction: column;
`,_=t.default.button`
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
`,E=t.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${n.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,F=t.default.button`
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
`;function L({iconKey:e,size:a=16}){if(e&&!(e in j.t))return(0,r.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});const o=e?j.t[e]??$.A:$.A;return(0,r.jsx)(o,{size:a,strokeWidth:1.75})}function R({entry:e,activeId:a,onSelect:o}){const[n,t]=(0,i.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:d,scheduleFlyoutClose:c,cancelFlyoutClose:m}=(0,s.c)();return e.children&&e.children.length>0?(0,r.jsxs)(B,{children:[(0,r.jsxs)(_,{collapsed:l,onClick:()=>{l||t(e=>!e)},onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();d(e,n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsxs)(C,{collapsed:l,children:[(0,r.jsx)(L,{iconKey:e.icon,size:16}),(0,r.jsx)(P,{collapsed:l,children:e.name})]}),(0,r.jsx)(E,{open:n,collapsed:l,children:(0,r.jsx)(k.A,{size:13})})]}),(0,r.jsx)(S,{open:n&&!l,children:(0,r.jsx)(M,{children:(0,r.jsx)(T,{children:e.children.map(e=>(0,r.jsx)(R,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,r.jsxs)(F,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();d({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsx)(L,{iconKey:e.icon,size:15}),(0,r.jsx)(P,{collapsed:l,children:e.name})]})}function D({entries:e,activeId:a,onSelect:o}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(R,{entry:e,activeId:a,onSelect:o},e.id))})}const I=o(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;t.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${I} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,o(4914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places),t.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,t.default.div`
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
`,t.default.div`
  font-size: ${n.w.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
`,t.default.input`
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
`,t.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,t.default.button`
  padding: 7px 18px;
  border-radius: ${n.w.borderRadius.md};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.15)":e?n.w.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?"#f85149":e?"#fff":n.w.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?"#f85149":e?n.w.colors.accent:n.w.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,t.default.div`
  height: 1px;
  background: ${n.w.colors.border};
  margin: 0 -4px;
`,t.default.div`
  font-size: 11px;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
`,t.default.div`
  position: relative;
`,t.default.button`
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
`,t.default.div`
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
`,t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,t.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,t.default.div`
  padding: 16px 14px;
  font-size: ${n.w.typography.fontSizeBase};
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  font-style: italic;
`,t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
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
  font-size: ${n.w.typography.fontSizeBase};
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,t.default.div`
  font-size: 11px;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
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
  border-radius: ${n.w.borderRadius.sm};
  cursor: pointer;
  color: ${n.w.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: #f85149;
    background: rgba(248, 81, 73, 0.12);
  }
`},217(e,a,o){o.d(a,{w:()=>n});const n={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},5056(e,a,o){o.d(a,{H:()=>y});var n=o(7359),i=o(3233),t=o(4079),r=o(5723);const l=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${t.w4.colors.mainBg};
  padding: ${t.w4.spacing.xl};
`,s=i.default.div`
  width: 100%;
  max-width: 480px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.lg};
`,d=i.default.div`
  font-size: 48px;
  text-align: center;
`,c=i.default.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,m=i.default.p`
  font-size: 14px;
  color: ${t.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.6;
  margin: 0;
`,g=i.default.a`
  color: ${t.w4.colors.accent};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,u=i.default.label`
  font-size: 13px;
  font-weight: 600;
  color: ${t.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,p=i.default.input`
  width: 100%;
  padding: 12px ${t.w4.spacing.md};
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: 14px;
  font-family: ${t.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${t.w4.colors.accent};
  }

  &::placeholder {
    color: ${t.w4.colors.mainTextMuted};
    opacity: 0.5;
  }
`,f=i.default.button`
  padding: 12px;
  background: ${t.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,x=i.default.p`
  font-size: 13px;
  color: #f85149;
  text-align: center;
  margin: 0;
`;function y({onSave:e}){const[a,o]=(0,n.useState)(""),[i,t]=(0,n.useState)(!1),[y,b]=(0,n.useState)(""),h=async()=>{const o=a.trim();if(o){t(!0),b("");try{if(!(await fetch(`https://api.themoviedb.org/3/configuration?api_key=${o}`)).ok)throw new Error("Invalid key");e(o)}catch{b("Could not validate API key. Check it and try again.")}finally{t(!1)}}};return(0,r.jsx)(l,{children:(0,r.jsxs)(s,{children:[(0,r.jsx)(d,{children:"🎬"}),(0,r.jsx)(c,{children:"Movies & Series"}),(0,r.jsxs)(m,{children:["This app uses the free"," ",(0,r.jsx)(g,{href:"https://www.themoviedb.org/settings/api",target:"_blank",rel:"noreferrer",children:"TMDB API"})," ","to browse movies, TV shows, and documentaries — including where to stream them.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Create a free account on TMDB and paste your ",(0,r.jsx)("strong",{children:"API Key (v3)"})," below."]}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,r.jsx)(u,{htmlFor:"apikey",children:"TMDB API Key (v3)"}),(0,r.jsx)(p,{id:"apikey",type:"password",placeholder:"e.g. a1b2c3d4e5f6...",value:a,onChange:e=>o(e.target.value),onKeyDown:e=>"Enter"===e.key&&h(),autoFocus:!0})]}),y&&(0,r.jsx)(x,{children:y}),(0,r.jsx)(f,{onClick:h,disabled:!a.trim()||i,children:i?"Validating…":"Connect"})]})})}},6127(e,a,o){o.d(a,{U:()=>_});var n=o(7359),i=o(3233),t=o(4079),r=o(302),l=o(9753),s=o(8641),d=o(7390),c=o(5723);const m=i.default.div`
  position: relative;
  width: 160px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);
    z-index: 2;
  }
`,g=i.default.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
  background: ${t.w4.colors.surface};
`,u=i.default.div`
  width: 100%;
  aspect-ratio: 2/3;
  background: ${t.w4.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 32px;
  color: ${t.w4.colors.mainTextMuted};
`,p=i.default.span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  text-align: center;
  padding: 0 8px;
  line-height: 1.3;
`,f=i.default.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
`,x=i.default.div`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,y=i.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`,b=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 600;
  color: #e3b341;
`,h=i.default.span`
  font-size: 11px;
  color: rgba(255,255,255,0.6);
`,z=i.default.span`
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  background: ${({type:e})=>"movie"===e?"rgba(227,179,65,0.85)":"rgba(88,166,255,0.85)"};
  color: #000;
`;function w({item:e,onClick:a}){const[o,i]=(0,n.useState)(!1),t=(0,d.rS)(e),r=(0,d.Ox)(e),l=(0,d.HD)(e.poster_path);return(0,c.jsxs)(m,{onClick:()=>a(e),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),title:t,children:[(0,c.jsx)(z,{type:e.media_type,children:"movie"===e.media_type?"Film":"TV"}),l?(0,c.jsx)(g,{src:l,alt:t,loading:"lazy"}):(0,c.jsxs)(u,{children:["🎬",(0,c.jsx)(p,{children:t})]}),(0,c.jsxs)(f,{visible:o,children:[(0,c.jsx)(x,{children:t}),(0,c.jsxs)(y,{children:[(0,c.jsxs)(b,{children:[(0,c.jsx)(s.A,{size:10,fill:"currentColor"}),e.vote_average.toFixed(1)]}),r&&(0,c.jsx)(h,{children:r})]})]})]})}const v=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.md};
  padding: 0 ${t.w4.spacing.xxl};
  position: relative;
`,A=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,$=i.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.01em;
`,k=i.default.div`
  display: flex;
  gap: ${t.w4.spacing.sm};
`,j=i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${t.w4.colors.border};
  background: ${t.w4.colors.surface};
  color: ${t.w4.colors.mainText};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    border-color: ${t.w4.colors.accent};
    color: ${t.w4.colors.accent};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,S=i.default.div`
  position: relative;
  overflow: hidden;
`,M=i.default.div`
  display: flex;
  gap: ${t.w4.spacing.md};
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 4px;

  &::-webkit-scrollbar { display: none; }
`,T=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  color: ${t.w4.colors.mainTextMuted};
  font-size: 14px;
  border: 1px dashed ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
`,B=i.default.div`
  width: 160px;
  aspect-ratio: 2/3;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    ${t.w4.colors.surface} 25%,
    ${t.w4.colors.sidebarHover} 50%,
    ${t.w4.colors.surface} 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;function _({title:e,items:a,loading:o,onSelect:i}){const t=(0,n.useRef)(null),[s,d]=(0,n.useState)(!1),[m,g]=(0,n.useState)(!0),u=()=>{const e=t.current;e&&(d(e.scrollLeft>0),g(e.scrollLeft+e.clientWidth<e.scrollWidth-4))};return(0,c.jsxs)(v,{children:[(0,c.jsxs)(A,{children:[(0,c.jsx)($,{children:e}),(0,c.jsxs)(k,{children:[(0,c.jsx)(j,{onClick:()=>{t.current?.scrollBy({left:-600,behavior:"smooth"}),setTimeout(u,350)},disabled:!s,children:(0,c.jsx)(r.A,{size:16})}),(0,c.jsx)(j,{onClick:()=>{t.current?.scrollBy({left:600,behavior:"smooth"}),setTimeout(u,350)},disabled:!m||0===a.length,children:(0,c.jsx)(l.A,{size:16})})]})]}),(0,c.jsx)(S,{children:o?(0,c.jsx)(M,{children:Array.from({length:10}).map((e,a)=>(0,c.jsx)(B,{},a))}):0===a.length?(0,c.jsx)(T,{children:"No results found"}):(0,c.jsx)(M,{ref:t,onScroll:u,children:a.map(e=>(0,c.jsx)(w,{item:e,onClick:i},`${e.media_type}-${e.id}`))})})]})}},7010(e,a,o){o.d(a,{j:()=>O});var n=o(7359),i=o(3233),t=o(4079),r=o(3775),l=o(1783),s=o(8440),d=o(140),c=o(2709),m=o(8641),g=o(4872),u=o(5031),p=o(4525),f=o(7390),x=o(2053),y=o(5723);const b=i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  animation: fadeIn 0.2s ease;

  @media (min-width: 768px) {
    align-items: center;
    padding: 40px ${t.w4.spacing.lg};
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,h=i.default.div`
  background: #161b22;
  border-radius: 16px 16px 0 0;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  animation: slideUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  scrollbar-width: thin;
  scrollbar-color: ${t.w4.colors.border} transparent;

  @media (min-width: 768px) {
    border-radius: 16px;
    max-width: 900px;
    max-height: 85vh;
  }

  @keyframes slideUp {
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`,z=i.default.button`
  position: absolute;
  top: ${t.w4.spacing.md};
  right: ${t.w4.spacing.md};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  z-index: 2;
  backdrop-filter: blur(4px);

  &:hover { background: rgba(0,0,0,0.9); }
`,w=i.default.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: url(${({src:e})=>e}) center/cover no-repeat;
  background-color: ${t.w4.colors.surface};
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, #161b22);
  }
`,v=i.default.div`
  padding: ${t.w4.spacing.lg} ${t.w4.spacing.lg} ${t.w4.spacing.xxl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.lg};

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
    gap: ${t.w4.spacing.xl};
  }
`,A=i.default.img`
  width: 120px;
  border-radius: ${t.w4.borderRadius.lg};
  flex-shrink: 0;
  box-shadow: 0 8px 32px rgba(0,0,0,0.6);
  margin-top: -60px;
  position: relative;
  z-index: 1;

  @media (min-width: 640px) {
    width: 140px;
    margin-top: -80px;
  }
`,$=i.default.div`
  flex: 1;
  min-width: 0;
`,k=i.default.h2`
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 800;
  color: ${t.w4.colors.mainText};
  margin: 0 0 ${t.w4.spacing.sm};
  letter-spacing: -0.02em;
`,j=i.default.p`
  font-size: 14px;
  color: ${t.w4.colors.mainTextMuted};
  font-style: italic;
  margin: 0 0 ${t.w4.spacing.md};
`,S=i.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${t.w4.spacing.md};
  margin-bottom: ${t.w4.spacing.md};
`,M=i.default.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: ${t.w4.colors.mainTextMuted};
`,T=i.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 700;
  color: #e3b341;
`,B=i.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.w4.spacing.sm};
  margin-bottom: ${t.w4.spacing.md};
`,_=i.default.span`
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 99px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  color: ${t.w4.colors.mainTextMuted};
`,C=i.default.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  margin: 0 0 ${t.w4.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 12px;
`,P=i.default.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${t.w4.colors.mainTextMuted};
  margin: 0;
`,E=i.default.div`
  padding: 0 ${t.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.md};
`,F=i.default.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: ${t.w4.borderRadius.lg};
  overflow: hidden;
  background: #000;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`,L=i.default.div`
  padding: 0 ${t.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.md};
`,R=i.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.w4.spacing.sm};
`,D=i.default.a`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: 8px 14px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.15s, opacity 0.15s;

  &:hover {
    transform: scale(1.04);
    opacity: 0.9;
  }
`,I=i.default.img`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  object-fit: cover;
`,N=i.default.span`
  font-size: 13px;
  font-weight: 600;
  color: #fff;
`,K=i.default.p`
  font-size: 14px;
  color: ${t.w4.colors.mainTextMuted};
  margin: 0;
`,H=i.default.hr`
  border: none;
  border-top: 1px solid ${t.w4.colors.border};
  margin: 0 ${t.w4.spacing.lg};
`,G=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: ${t.w4.colors.mainTextMuted};
  font-size: 14px;
`,U=i.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.w4.spacing.sm};
  padding: ${t.w4.spacing.md} ${t.w4.spacing.lg} 0;
`,Y=i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({active:e,danger:a})=>a?"#f85149":e?t.w4.colors.accent:t.w4.colors.border};
  background: ${({active:e,danger:a})=>a?"rgba(248,81,73,0.1)":e?"rgba(88,166,255,0.15)":t.w4.colors.surface};
  color: ${({active:e,danger:a})=>a?"#f85149":e?t.w4.colors.accent:t.w4.colors.mainText};
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${({danger:e})=>e?"rgba(248,81,73,0.2)":t.w4.colors.sidebarHover};
  }
`;function V({label:e,providers:a,link:o}){return a.length?(0,y.jsxs)("div",{children:[(0,y.jsx)(C,{children:e}),(0,y.jsx)(R,{children:a.map(e=>{const a=f.RY[e.provider_name]??t.w4.colors.surface;return(0,y.jsxs)(D,{bg:a,href:o??"#",target:"_blank",rel:"noreferrer",children:[e.logo_path&&(0,y.jsx)(I,{src:(0,f.vo)(e.logo_path),alt:e.provider_name}),(0,y.jsx)(N,{children:e.provider_name})]},e.provider_id)})})]}):null}function O({item:e,apiKey:a,onClose:o,onLibraryChange:i}){const[R,D]=(0,n.useState)(null),[I,N]=(0,n.useState)([]),[O,W]=(0,n.useState)(null),[J,Z]=(0,n.useState)(!0),[X,q]=(0,n.useState)(()=>(0,x.BA)(e)),[Q,ee]=(0,n.useState)(()=>(0,x.U4)(e));(0,n.useEffect)(()=>{Z(!0),Promise.all([(0,f.Ug)(a,e.media_type,e.id),(0,f.fY)(a,e.media_type,e.id),(0,f.Mt)(a,e.media_type,e.id)]).then(([e,a,o])=>{D(e),N(a),W(o),Z(!1)}).catch(()=>Z(!1))},[e.id,e.media_type,a]);const ae=(0,n.useCallback)(e=>{e.target===e.currentTarget&&o()},[o]);(0,n.useEffect)(()=>{const e=e=>{"Escape"===e.key&&o()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]);const oe=I.find(e=>"YouTube"===e.site&&("Trailer"===e.type||"Teaser"===e.type)&&e.official)??I.find(e=>"YouTube"===e.site&&"Trailer"===e.type)??I.find(e=>"YouTube"===e.site),ne=(0,f.rS)(e),ie=(0,f.Ox)(e),te=[...O?.flatrate??[]].filter((e,a,o)=>o.findIndex(a=>a.provider_id===e.provider_id)===a),re=(O?.rent??[]).filter(e=>!te.find(a=>a.provider_id===e.provider_id)),le=te.length>0||re.length>0||(O?.buy??[]).length>0;return(0,y.jsx)(b,{onClick:ae,children:(0,y.jsxs)(h,{children:[(0,y.jsxs)("div",{style:{position:"relative"},children:[(0,y.jsx)(z,{onClick:o,"aria-label":"Close",children:(0,y.jsx)(p.A,{size:18})}),(0,y.jsx)(w,{src:(0,f.U7)(e.backdrop_path??R?.backdrop_path??null,"w1280")})]}),(0,y.jsxs)(v,{children:[(R?.poster_path??e.poster_path)&&(0,y.jsx)(A,{src:(0,f.HD)(R?.poster_path??e.poster_path,"w342"),alt:ne}),(0,y.jsxs)($,{children:[(0,y.jsx)(k,{children:ne}),R?.tagline&&(0,y.jsx)(j,{children:R.tagline}),(0,y.jsxs)(S,{children:[(0,y.jsxs)(T,{children:[(0,y.jsx)(m.A,{size:14,fill:"currentColor"}),e.vote_average.toFixed(1)]}),ie&&(0,y.jsxs)(M,{children:[(0,y.jsx)(r.A,{size:13}),ie]}),R?.runtime&&(0,y.jsxs)(M,{children:[(0,y.jsx)(l.A,{size:13}),Math.floor(R.runtime/60),"h ",R.runtime%60,"m"]}),R?.number_of_seasons&&(0,y.jsxs)(M,{children:[(0,y.jsx)(u.A,{size:13}),R.number_of_seasons," season",1!==R.number_of_seasons?"s":""]})]}),R?.genres&&R.genres.length>0&&(0,y.jsx)(B,{children:R.genres.map(e=>(0,y.jsx)(_,{children:e.name},e.id))}),J?(0,y.jsx)(G,{children:"Loading details…"}):(0,y.jsx)(P,{children:e.overview})]})]}),(0,y.jsxs)(U,{children:[(0,y.jsxs)(Y,{active:X,onClick:()=>{(0,x.dw)(e),q(!X),i?.()},children:[(0,y.jsx)(c.A,{size:14,fill:X?"currentColor":"none"}),X?"Favorited":"Add to Favorites"]}),(0,y.jsxs)(Y,{active:Q,onClick:()=>{(0,x.w0)(e),ee(!Q),i?.()},children:[Q?(0,y.jsx)(s.A,{size:14}):(0,y.jsx)(d.A,{size:14}),Q?"Mark as Unseen":"Mark as Seen"]}),(X||Q)&&(0,y.jsxs)(Y,{danger:!0,onClick:()=>{X&&((0,x.dw)(e),q(!1)),Q&&((0,x.w0)(e),ee(!1)),i?.()},children:[(0,y.jsx)(g.A,{size:14}),"Remove from Library"]})]}),oe&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(H,{}),(0,y.jsxs)(E,{children:[(0,y.jsx)(C,{children:"Trailer"}),(0,y.jsx)(F,{children:(0,y.jsx)("iframe",{src:`https://www.youtube.com/embed/${oe.key}?autoplay=0&rel=0`,title:oe.name,allowFullScreen:!0,allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})]})]}),(0,y.jsx)(H,{style:{marginTop:t.w4.spacing.lg}}),(0,y.jsxs)(L,{children:[(0,y.jsx)(C,{children:"Where to Watch"}),J?(0,y.jsx)(G,{children:"Loading streaming info…"}):le?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(V,{label:"Streaming (Included with subscription)",providers:te,link:O?.link}),(0,y.jsx)(V,{label:"Rent",providers:re,link:O?.link}),(0,y.jsx)(V,{label:"Buy",providers:O?.buy??[],link:O?.link})]}):(0,y.jsx)(K,{children:"No streaming info available for your region (US)."})]}),(0,y.jsx)("div",{style:{height:t.w4.spacing.xxl}})]})})}},6294(e,a,o){o.d(a,{l:()=>w}),o(7359);var n=o(3233),i=o(4079),t=o(5569),r=o(6135),l=o(7390),s=o(5723);const d=n.default.div`
  position: relative;
  width: 100%;
  height: 520px;
  background-image: url(${({bg:e})=>e});
  background-size: cover;
  background-position: center top;
  flex-shrink: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(13, 17, 23, 0.95) 0%,
      rgba(13, 17, 23, 0.6) 50%,
      rgba(13, 17, 23, 0.1) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 140px;
    background: linear-gradient(to bottom, transparent, ${i.w4.colors.mainBg});
  }
`,c=n.default.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 ${i.w4.spacing.xxl} 56px;
  max-width: 600px;
`,m=n.default.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({type:e})=>"movie"===e?"#e3b341":"#79c0ff"};
  margin-bottom: ${i.w4.spacing.sm};
`,g=n.default.h1`
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  color: #fff;
  margin: 0 0 ${i.w4.spacing.md};
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
`,u=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.md};
  margin-bottom: ${i.w4.spacing.md};
`,p=n.default.span`
  font-size: 14px;
  font-weight: 600;
  color: #e3b341;
`,f=n.default.span`
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
`,x=n.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${i.w4.spacing.xs};
  margin-bottom: ${i.w4.spacing.md};
`,y=n.default.span`
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 99px;
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.75);
`,b=n.default.p`
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255,255,255,0.85);
  margin: 0 0 ${i.w4.spacing.lg};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,h=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
`,z=n.default.button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.15s, transform 0.1s;

  background: ${({primary:e})=>e?"#fff":"rgba(255,255,255,0.15)"};
  color: ${({primary:e})=>e?"#000":"#fff"};
  backdrop-filter: blur(8px);

  &:hover {
    opacity: 0.85;
    transform: scale(1.02);
  }
`;function w({item:e,onPlay:a,onMore:o}){const n=(0,l.U7)(e.backdrop_path,"original"),i=(0,l.rS)(e),w=(0,l.Ox)(e),v=e.vote_average.toFixed(1),A=(e.genre_ids??[]).slice(0,4).map(e=>l.N2[e]).filter(Boolean);return(0,s.jsx)(d,{bg:n,children:(0,s.jsxs)(c,{children:[(0,s.jsx)(m,{type:e.media_type,children:"movie"===e.media_type?"▶ Movie":"▶ TV Series"}),(0,s.jsx)(g,{children:i}),(0,s.jsxs)(u,{children:[(0,s.jsxs)(p,{children:["★ ",v]}),w&&(0,s.jsx)(f,{children:w})]}),A.length>0&&(0,s.jsx)(x,{children:A.map(e=>(0,s.jsx)(y,{children:e},e))}),e.overview&&(0,s.jsx)(b,{children:e.overview}),(0,s.jsxs)(h,{children:[(0,s.jsxs)(z,{primary:!0,onClick:()=>a(e),children:[(0,s.jsx)(r.A,{size:16,fill:"currentColor"})," Watch"]}),(0,s.jsxs)(z,{onClick:()=>o(e),children:[(0,s.jsx)(t.A,{size:16})," More Info"]})]})]})})}},7390(e,a,o){o.d(a,{$P:()=>w,$m:()=>b,HD:()=>i,Kk:()=>x,Mt:()=>$,Mw:()=>d,N2:()=>s,Ox:()=>g,RY:()=>c,U7:()=>t,Ug:()=>v,Zy:()=>p,_F:()=>u,ag:()=>y,eN:()=>f,fY:()=>A,lO:()=>h,px:()=>z,rS:()=>m,vo:()=>r});const n="https://image.tmdb.org/t/p",i=(e,a="w342")=>e?`${n}/${a}${e}`:"",t=(e,a="w1280")=>e?`${n}/${a}${e}`:"",r=(e,a="w92")=>e?`${n}/${a}${e}`:"";async function l(e,a,o={}){const n=new URL(`https://api.themoviedb.org/3${a}`);n.searchParams.set("api_key",e),n.searchParams.set("language","en-US");for(const[e,a]of Object.entries(o))n.searchParams.set(e,a);const i=await fetch(n.toString());if(!i.ok)throw new Error(`TMDB ${i.status}`);return i.json()}const s={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Sci-Fi",53:"Thriller",10752:"War",37:"Western",10759:"Action & Adventure",10762:"Kids",10765:"Sci-Fi & Fantasy",10768:"War & Politics",10766:"Soap",10767:"Talk",10763:"News",10764:"Reality"},d=[{id:8,name:"Netflix"},{id:337,name:"Disney+"},{id:9,name:"Amazon Prime"},{id:350,name:"Apple TV+"},{id:384,name:"HBO Max"},{id:1899,name:"Max"},{id:15,name:"Hulu"},{id:386,name:"Peacock"},{id:531,name:"Paramount+"},{id:283,name:"Crunchyroll"},{id:11,name:"MUBI"}],c={Netflix:"#E50914","Disney Plus":"#113CCF","Disney+":"#113CCF","Amazon Prime Video":"#00A8E0","Prime Video":"#00A8E0","Apple TV Plus":"#1C1C1E","Apple TV+":"#1C1C1E","HBO Max":"#552093",Max:"#002BE7",Hulu:"#3DBB3D",Peacock:"#D0A42C","Paramount Plus":"#0064FF","Paramount+":"#0064FF",Crunchyroll:"#F47521",Mubi:"#5C3317"};function m(e){return e.title??e.name??"Unknown"}function g(e){return(e.release_date??e.first_air_date??"").slice(0,4)}async function u(e){return(await l(e,"/trending/all/week")).results.filter(e=>"movie"===e.media_type||"tv"===e.media_type)}async function p(e){return(await l(e,"/movie/popular")).results.map(e=>({...e,media_type:"movie"}))}async function f(e){return(await l(e,"/tv/popular")).results.map(e=>({...e,media_type:"tv"}))}async function x(e,a){return(await l(e,`/${a}/top_rated`)).results.map(e=>({...e,media_type:a}))}async function y(e){const[a,o]=await Promise.all([l(e,"/discover/movie",{with_genres:"99",sort_by:"popularity.desc"}),l(e,"/discover/tv",{with_genres:"99",sort_by:"popularity.desc"})]);return[...a.results.map(e=>({...e,media_type:"movie"})),...o.results.map(e=>({...e,media_type:"tv"}))].sort((e,a)=>a.vote_average-e.vote_average)}async function b(e,a,o){const n="movie"===o?{primary_release_year:String(a),sort_by:"popularity.desc"}:{first_air_date_year:String(a),sort_by:"popularity.desc"};return(await l(e,`/discover/${o}`,n)).results.map(e=>({...e,media_type:o}))}async function h(e,a,o){return(await l(e,`/discover/${o}`,{with_genres:String(a),sort_by:"popularity.desc"})).results.map(e=>({...e,media_type:o}))}async function z(e,a,o,n="US"){return(await l(e,`/discover/${o}`,{with_watch_providers:String(a),watch_region:n,sort_by:"popularity.desc"})).results.map(e=>({...e,media_type:o}))}async function w(e,a){return(await l(e,"/search/multi",{query:a,include_adult:"false"})).results.filter(e=>"movie"===e.media_type||"tv"===e.media_type)}async function v(e,a,o){return{...await l(e,`/${a}/${o}`),media_type:a}}async function A(e,a,o){return(await l(e,`/${a}/${o}/videos`)).results??[]}async function $(e,a,o,n="US"){const i=await l(e,`/${a}/${o}/watch/providers`);return i.results?.[n]??{}}},2053(e,a,o){o.d(a,{BA:()=>s,GB:()=>c,U4:()=>m,dw:()=>d,qx:()=>l,w0:()=>g});const n="atlantis:movies:favorites",i="atlantis:movies:seen";function t(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}function r(e,a){try{localStorage.setItem(e,JSON.stringify(a))}catch{}}function l(){return t(n)}function s(e){return l().some(a=>a.id===e.id&&a.media_type===e.media_type)}function d(e){const a=l(),o=a.some(a=>a.id===e.id&&a.media_type===e.media_type)?a.filter(a=>!(a.id===e.id&&a.media_type===e.media_type)):[e,...a];return r(n,o),o}function c(){return t(i)}function m(e){return c().some(a=>a.id===e.id&&a.media_type===e.media_type)}function g(e){return m(e)?function(e){const a=c().filter(a=>!(a.id===e.id&&a.media_type===e.media_type));return r(i,a),a}(e):function(e){const a=c().filter(a=>!(a.id===e.id&&a.media_type===e.media_type)),o=[e,...a].slice(0,15);return r(i,o),o}(e)}}}]);
//# sourceMappingURL=694.3c1933d52efafe33d0f0.js.map