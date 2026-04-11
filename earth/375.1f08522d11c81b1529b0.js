"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[375],{4914(a,e,n){n.d(e,{FlyoutPanel:()=>z});var o=n(7359),i=n(3233),t=n(7207),l=n(255),r=n(217),m=n(5959),s=n(5185),d=n(5723);const c=t.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=i.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:a})=>a}px);
  bottom: 8px;
  z-index: 1200;
  background: #161b22;
  border: 1px solid rgba(88, 166, 255, 0.2);
  border-radius: ${r.w.borderRadius.lg};
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.06),
    0 16px 48px rgba(0, 0, 0, 0.75);
  min-width: 210px;
  overflow-y: auto;
  animation: ${c} 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,f=i.default.div`
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
  font-family: ${r.w.typography.fontFamily};
`,u=i.default.button`
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
  font-size: ${r.w.typography.fontSizeBase};
  font-family: ${r.w.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: rgba(88, 166, 255, 0.07);
    color: #e6edf3;
  }
`;function p({iconKey:a}){const e=a?s.t[a]??l.A:l.A;return(0,d.jsx)(e,{size:14,strokeWidth:1.75})}function y({entries:a,activeId:e,onSelect:n}){return(0,d.jsx)(d.Fragment,{children:a.map(a=>a.children?(0,d.jsx)(o.Fragment,{children:(0,d.jsx)(y,{entries:a.children,activeId:e,onSelect:n})},a.id):(0,d.jsxs)(u,{active:e===a.id,onClick:()=>n(a),children:[(0,d.jsx)(p,{iconKey:a.icon}),a.name]},a.id))})}function z({activeId:a}){const{flyout:e,scheduleFlyoutClose:n,cancelFlyoutClose:o}=(0,m.c)();if(!e)return null;const i=e.entry.icon?s.t[e.entry.icon]??l.A:l.A;return(0,d.jsxs)(g,{anchorY:e.anchorY,onMouseEnter:o,onMouseLeave:n,children:[(0,d.jsxs)(f,{children:[(0,d.jsx)(i,{size:13,strokeWidth:2}),e.entry.name]}),(0,d.jsx)(y,{entries:e.entry.children??[],activeId:a,onSelect:a=>{e.onSelect(a),n()}})]})}},5959(a,e,n){n.d(e,{I:()=>i,c:()=>t});var o=n(7359);const i=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,o.useContext)(i)},5185(a,e,n){n.d(e,{t:()=>G});var o=n(9038),i=n(6896),t=n(7901),l=n(9848),r=n(2164),m=n(3539),s=n(1837),d=n(2314),c=n(5751),g=n(255),f=n(9633),u=n(2946),p=n(822),y=n(3317),z=n(2709),h=n(3517),x=n(7032),b=n(6949),w=n(8218),A=n(6829),v=n(5553),S=n(9591),k=n(2820),$=n(4621),j=n(6673),M=n(9033),B=n(1365),T=n(5912),C=n(3249),E=n(9161),L=n(2932),P=n(4525),F=n(7230);const G={activity:i.A,book:l.A,"book-open":t.A,"circle-dot":m.A,feather:d.A,"file-text":c.A,hash:y.A,heart:z.A,landmark:h.A,leaf:b.A,map:S.A,package:j.A,compass:s.A,"git-branch":u.A,github:p.A,minus:$.A,terminal:C.A,"pie-chart":o.A,plus:B.A,slash:T.A,zap:F.A,bot:r.A,lightbulb:w.A,"message-square":k.A,wrench:L.A,x:P.A,"layout-grid":x.A,list:A.A,file:g.A,folder:f.A,"map-pin":v.A,"pen-tool":M.A,type:E.A}},906(a,e,n){n.d(e,{rh:()=>I,PE:()=>v,CD:()=>N,qs:()=>Y,$L:()=>H,w3:()=>_,u6:()=>V,w4:()=>o.w});var o=n(217),i=n(7359),t=n(3233),l=n(5723);t.default.button`
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
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${o.w.colors.sidebarHover};
    border-color: ${o.w.colors.accent};
  }
`,t.default.div`
  display: ${({open:a})=>a?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${o.w.colors.surface};
  border: 1px solid ${o.w.colors.border};
  border-radius: ${o.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${o.w.spacing.sm};
  background: ${({active:a})=>a?o.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:a})=>a?o.w.colors.accent:o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: ${({active:a})=>a?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`,t.default.div`
  position: relative;
`,t.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:a})=>a?o.w.colors.accent:o.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var r=n(3661),m=n(5959);const s="260px",d="56px",c=t.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${o.w.colors.sidebarBg};
  border-bottom: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,g=t.default.div`
  width: ${d};
  min-width: ${d};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
`,f=t.default.button`
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
`,u=t.default.button`
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
`,p=t.default.div`
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
`,y=t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${o.w.spacing.sm};
  padding: 0 ${o.w.spacing.lg};
`,z=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,h=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${o.w.colors.mainBg};
  font-family: ${o.w.typography.fontFamily};
  color: ${o.w.colors.mainText};
  overflow: hidden;
`,x=t.default.aside`
  width: ${({collapsed:a})=>a?d:s};
  min-width: ${({collapsed:a})=>a?d:s};
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
`,b=t.default.div`
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
`,A="atlantis:sidebar-collapsed";function v({sidebar:a,children:e,topBarRight:o,title:t="Atlantis",activeId:s=null}){const[d,v]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(A)}catch{return!1}}),[S,k]=(0,i.useState)(null),$=(0,i.useRef)(),j=()=>v(a=>{const e=!a;try{localStorage.setItem(A,String(e))}catch{}return e}),M=i.useMemo(()=>i.lazy(()=>Promise.resolve().then(n.bind(n,4914)).then(a=>({default:a.FlyoutPanel}))),[]);return(0,l.jsx)(m.I.Provider,{value:{collapsed:d,toggle:j,flyout:S,openFlyout:(a,e,n)=>{clearTimeout($.current),k({entry:a,anchorY:e,onSelect:n})},scheduleFlyoutClose:()=>{$.current=setTimeout(()=>k(null),160)},cancelFlyoutClose:()=>clearTimeout($.current)},children:(0,l.jsxs)(h,{children:[(0,l.jsxs)(c,{children:[(0,l.jsx)(g,{children:(0,l.jsx)(f,{onClick:j,title:d?"Expand sidebar":"Collapse sidebar",children:(0,l.jsx)(r.A,{size:17})})}),(0,l.jsxs)(u,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,l.jsx)("span",{children:"antis"})]}),t&&(0,l.jsx)(p,{children:t}),o&&(0,l.jsx)(y,{children:o})]}),(0,l.jsxs)(z,{children:[(0,l.jsx)(x,{collapsed:d,children:(0,l.jsx)(b,{children:a})}),(0,l.jsx)(w,{children:e})]}),S&&(0,l.jsx)(i.Suspense,{fallback:null,children:(0,l.jsx)(M,{activeId:s})})]})})}var S=n(255),k=n(9753),$=n(5185);const j=t.default.div`
  display: grid;
  grid-template-rows: ${({open:a})=>a?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,M=t.default.div`
  overflow: hidden;
`,B=t.default.div`
  padding-left: ${o.w.spacing.md};
`,T=t.default.div`
  display: flex;
  flex-direction: column;
`,C=t.default.button`
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
`,E=t.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:a})=>a?"0":"8px"};
  min-width: 0;
`,L=t.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:a})=>a?0:1};
  max-width: ${({collapsed:a})=>a?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,P=t.default.span`
  display: ${({collapsed:a})=>a?"none":"flex"};
  align-items: center;
  color: ${o.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:a})=>a?"90deg":"0deg"});
  }
`,F=t.default.button`
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
`;function G({iconKey:a,size:e=16}){if(a&&!(a in $.t))return(0,l.jsx)("span",{style:{fontSize:e,lineHeight:1,display:"flex",alignItems:"center"},children:a});const n=a?$.t[a]??S.A:S.A;return(0,l.jsx)(n,{size:e,strokeWidth:1.75})}function R({entry:a,activeId:e,onSelect:n}){const[o,t]=(0,i.useState)(a.defaultOpen??!0),{collapsed:r,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:c}=(0,m.c)();return a.children&&a.children.length>0?(0,l.jsxs)(T,{children:[(0,l.jsxs)(C,{collapsed:r,onClick:()=>{r||t(a=>!a)},onMouseEnter:r?e=>{const o=e.currentTarget.getBoundingClientRect();s(a,o.top,n)}:void 0,onMouseLeave:r?d:void 0,children:[(0,l.jsxs)(E,{collapsed:r,children:[(0,l.jsx)(G,{iconKey:a.icon,size:16}),(0,l.jsx)(L,{collapsed:r,children:a.name})]}),(0,l.jsx)(P,{open:o,collapsed:r,children:(0,l.jsx)(k.A,{size:13})})]}),(0,l.jsx)(j,{open:o&&!r,children:(0,l.jsx)(M,{children:(0,l.jsx)(B,{children:a.children.map(a=>(0,l.jsx)(R,{entry:a,activeId:e,onSelect:n},a.id))})})})]}):(0,l.jsxs)(F,{active:e===a.id,collapsed:r,onClick:()=>n(a),onMouseEnter:r?e=>{const o=e.currentTarget.getBoundingClientRect();s({id:a.id,name:a.name,icon:a.icon,file:a.file,children:[a]},o.top,n)}:void 0,onMouseLeave:r?d:void 0,children:[(0,l.jsx)(G,{iconKey:a.icon,size:15}),(0,l.jsx)(L,{collapsed:r,children:a.name})]})}function N({entries:a,activeId:e,onSelect:n}){return(0,l.jsx)("div",{children:a.map(a=>(0,l.jsx)(R,{entry:a,activeId:e,onSelect:n},a.id))})}const D=n(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;t.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${D} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,n(4914);const K=[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}],I=K.flatMap(a=>a.places);function _(a,e){return a.toLocaleTimeString("en-GB",{timeZone:e,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}function H(a,e){return a.toLocaleDateString("en-GB",{timeZone:e,weekday:"short",day:"numeric",month:"short"})}function V(a){return a.toLocaleTimeString("en-GB",{timeZone:"UTC",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}const U={AD:{name:"Andorra",flag:"🇦🇩"},AE:{name:"UAE",flag:"🇦🇪"},AF:{name:"Afghanistan",flag:"🇦🇫"},AG:{name:"Antigua & Barbuda",flag:"🇦🇬"},AL:{name:"Albania",flag:"🇦🇱"},AM:{name:"Armenia",flag:"🇦🇲"},AO:{name:"Angola",flag:"🇦🇴"},AR:{name:"Argentina",flag:"🇦🇷"},AT:{name:"Austria",flag:"🇦🇹"},AU:{name:"Australia",flag:"🇦🇺"},AZ:{name:"Azerbaijan",flag:"🇦🇿"},BA:{name:"Bosnia & Herzegovina",flag:"🇧🇦"},BB:{name:"Barbados",flag:"🇧🇧"},BD:{name:"Bangladesh",flag:"🇧🇩"},BE:{name:"Belgium",flag:"🇧🇪"},BF:{name:"Burkina Faso",flag:"🇧🇫"},BG:{name:"Bulgaria",flag:"🇧🇬"},BH:{name:"Bahrain",flag:"🇧🇭"},BI:{name:"Burundi",flag:"🇧🇮"},BJ:{name:"Benin",flag:"🇧🇯"},BN:{name:"Brunei",flag:"🇧🇳"},BO:{name:"Bolivia",flag:"🇧🇴"},BR:{name:"Brazil",flag:"🇧🇷"},BS:{name:"Bahamas",flag:"🇧🇸"},BW:{name:"Botswana",flag:"🇧🇼"},BY:{name:"Belarus",flag:"🇧🇾"},BZ:{name:"Belize",flag:"🇧🇿"},CA:{name:"Canada",flag:"🇨🇦"},CD:{name:"DR Congo",flag:"🇨🇩"},CF:{name:"Central African Rep.",flag:"🇨🇫"},CG:{name:"Republic of Congo",flag:"🇨🇬"},CH:{name:"Switzerland",flag:"🇨🇭"},CI:{name:"Côte d'Ivoire",flag:"🇨🇮"},CL:{name:"Chile",flag:"🇨🇱"},CM:{name:"Cameroon",flag:"🇨🇲"},CN:{name:"China",flag:"🇨🇳"},CO:{name:"Colombia",flag:"🇨🇴"},CR:{name:"Costa Rica",flag:"🇨🇷"},CU:{name:"Cuba",flag:"🇨🇺"},CV:{name:"Cape Verde",flag:"🇨🇻"},CY:{name:"Cyprus",flag:"🇨🇾"},CZ:{name:"Czech Republic",flag:"🇨🇿"},DE:{name:"Germany",flag:"🇩🇪"},DJ:{name:"Djibouti",flag:"🇩🇯"},DK:{name:"Denmark",flag:"🇩🇰"},DM:{name:"Dominica",flag:"🇩🇲"},DO:{name:"Dominican Republic",flag:"🇩🇴"},DZ:{name:"Algeria",flag:"🇩🇿"},EC:{name:"Ecuador",flag:"🇪🇨"},EE:{name:"Estonia",flag:"🇪🇪"},EG:{name:"Egypt",flag:"🇪🇬"},ER:{name:"Eritrea",flag:"🇪🇷"},ES:{name:"Spain",flag:"🇪🇸"},ET:{name:"Ethiopia",flag:"🇪🇹"},FI:{name:"Finland",flag:"🇫🇮"},FJ:{name:"Fiji",flag:"🇫🇯"},FM:{name:"Micronesia",flag:"🇫🇲"},FR:{name:"France",flag:"🇫🇷"},GA:{name:"Gabon",flag:"🇬🇦"},GB:{name:"United Kingdom",flag:"🇬🇧"},GD:{name:"Grenada",flag:"🇬🇩"},GE:{name:"Georgia",flag:"🇬🇪"},GH:{name:"Ghana",flag:"🇬🇭"},GM:{name:"Gambia",flag:"🇬🇲"},GN:{name:"Guinea",flag:"🇬🇳"},GQ:{name:"Equatorial Guinea",flag:"🇬🇶"},GR:{name:"Greece",flag:"🇬🇷"},GT:{name:"Guatemala",flag:"🇬🇹"},GW:{name:"Guinea-Bissau",flag:"🇬🇼"},GY:{name:"Guyana",flag:"🇬🇾"},HN:{name:"Honduras",flag:"🇭🇳"},HR:{name:"Croatia",flag:"🇭🇷"},HT:{name:"Haiti",flag:"🇭🇹"},HU:{name:"Hungary",flag:"🇭🇺"},ID:{name:"Indonesia",flag:"🇮🇩"},IE:{name:"Ireland",flag:"🇮🇪"},IL:{name:"Israel",flag:"🇮🇱"},IN:{name:"India",flag:"🇮🇳"},IQ:{name:"Iraq",flag:"🇮🇶"},IR:{name:"Iran",flag:"🇮🇷"},IS:{name:"Iceland",flag:"🇮🇸"},IT:{name:"Italy",flag:"🇮🇹"},JM:{name:"Jamaica",flag:"🇯🇲"},JO:{name:"Jordan",flag:"🇯🇴"},JP:{name:"Japan",flag:"🇯🇵"},KE:{name:"Kenya",flag:"🇰🇪"},KG:{name:"Kyrgyzstan",flag:"🇰🇬"},KH:{name:"Cambodia",flag:"🇰🇭"},KI:{name:"Kiribati",flag:"🇰🇮"},KM:{name:"Comoros",flag:"🇰🇲"},KN:{name:"Saint Kitts & Nevis",flag:"🇰🇳"},KP:{name:"North Korea",flag:"🇰🇵"},KR:{name:"South Korea",flag:"🇰🇷"},KW:{name:"Kuwait",flag:"🇰🇼"},KZ:{name:"Kazakhstan",flag:"🇰🇿"},LA:{name:"Laos",flag:"🇱🇦"},LB:{name:"Lebanon",flag:"🇱🇧"},LC:{name:"Saint Lucia",flag:"🇱🇨"},LI:{name:"Liechtenstein",flag:"🇱🇮"},LK:{name:"Sri Lanka",flag:"🇱🇰"},LR:{name:"Liberia",flag:"🇱🇷"},LS:{name:"Lesotho",flag:"🇱🇸"},LT:{name:"Lithuania",flag:"🇱🇹"},LU:{name:"Luxembourg",flag:"🇱🇺"},LV:{name:"Latvia",flag:"🇱🇻"},LY:{name:"Libya",flag:"🇱🇾"},MA:{name:"Morocco",flag:"🇲🇦"},MC:{name:"Monaco",flag:"🇲🇨"},MD:{name:"Moldova",flag:"🇲🇩"},ME:{name:"Montenegro",flag:"🇲🇪"},MG:{name:"Madagascar",flag:"🇲🇬"},MH:{name:"Marshall Islands",flag:"🇲🇭"},MK:{name:"North Macedonia",flag:"🇲🇰"},ML:{name:"Mali",flag:"🇲🇱"},MM:{name:"Myanmar",flag:"🇲🇲"},MN:{name:"Mongolia",flag:"🇲🇳"},MR:{name:"Mauritania",flag:"🇲🇷"},MT:{name:"Malta",flag:"🇲🇹"},MU:{name:"Mauritius",flag:"🇲🇺"},MV:{name:"Maldives",flag:"🇲🇻"},MW:{name:"Malawi",flag:"🇲🇼"},MX:{name:"Mexico",flag:"🇲🇽"},MY:{name:"Malaysia",flag:"🇲🇾"},MZ:{name:"Mozambique",flag:"🇲🇿"},NA:{name:"Namibia",flag:"🇳🇦"},NE:{name:"Niger",flag:"🇳🇪"},NG:{name:"Nigeria",flag:"🇳🇬"},NI:{name:"Nicaragua",flag:"🇳🇮"},NL:{name:"Netherlands",flag:"🇳🇱"},NO:{name:"Norway",flag:"🇳🇴"},NP:{name:"Nepal",flag:"🇳🇵"},NR:{name:"Nauru",flag:"🇳🇷"},NZ:{name:"New Zealand",flag:"🇳🇿"},OM:{name:"Oman",flag:"🇴🇲"},PA:{name:"Panama",flag:"🇵🇦"},PE:{name:"Peru",flag:"🇵🇪"},PG:{name:"Papua New Guinea",flag:"🇵🇬"},PH:{name:"Philippines",flag:"🇵🇭"},PK:{name:"Pakistan",flag:"🇵🇰"},PL:{name:"Poland",flag:"🇵🇱"},PS:{name:"Palestine",flag:"🇵🇸"},PT:{name:"Portugal",flag:"🇵🇹"},PW:{name:"Palau",flag:"🇵🇼"},PY:{name:"Paraguay",flag:"🇵🇾"},QA:{name:"Qatar",flag:"🇶🇦"},RO:{name:"Romania",flag:"🇷🇴"},RS:{name:"Serbia",flag:"🇷🇸"},RU:{name:"Russia",flag:"🇷🇺"},RW:{name:"Rwanda",flag:"🇷🇼"},SA:{name:"Saudi Arabia",flag:"🇸🇦"},SB:{name:"Solomon Islands",flag:"🇸🇧"},SC:{name:"Seychelles",flag:"🇸🇨"},SD:{name:"Sudan",flag:"🇸🇩"},SE:{name:"Sweden",flag:"🇸🇪"},SG:{name:"Singapore",flag:"🇸🇬"},SI:{name:"Slovenia",flag:"🇸🇮"},SK:{name:"Slovakia",flag:"🇸🇰"},SL:{name:"Sierra Leone",flag:"🇸🇱"},SM:{name:"San Marino",flag:"🇸🇲"},SN:{name:"Senegal",flag:"🇸🇳"},SO:{name:"Somalia",flag:"🇸🇴"},SR:{name:"Suriname",flag:"🇸🇷"},SS:{name:"South Sudan",flag:"🇸🇸"},ST:{name:"São Tomé & Príncipe",flag:"🇸🇹"},SV:{name:"El Salvador",flag:"🇸🇻"},SY:{name:"Syria",flag:"🇸🇾"},SZ:{name:"Eswatini",flag:"🇸🇿"},TD:{name:"Chad",flag:"🇹🇩"},TG:{name:"Togo",flag:"🇹🇬"},TH:{name:"Thailand",flag:"🇹🇭"},TJ:{name:"Tajikistan",flag:"🇹🇯"},TL:{name:"Timor-Leste",flag:"🇹🇱"},TM:{name:"Turkmenistan",flag:"🇹🇲"},TN:{name:"Tunisia",flag:"🇹🇳"},TO:{name:"Tonga",flag:"🇹🇴"},TR:{name:"Turkey",flag:"🇹🇷"},TT:{name:"Trinidad & Tobago",flag:"🇹🇹"},TV:{name:"Tuvalu",flag:"🇹🇻"},TZ:{name:"Tanzania",flag:"🇹🇿"},UA:{name:"Ukraine",flag:"🇺🇦"},UG:{name:"Uganda",flag:"🇺🇬"},US:{name:"United States",flag:"🇺🇸"},UY:{name:"Uruguay",flag:"🇺🇾"},UZ:{name:"Uzbekistan",flag:"🇺🇿"},VA:{name:"Vatican City",flag:"🇻🇦"},VC:{name:"St Vincent & Gren.",flag:"🇻🇨"},VE:{name:"Venezuela",flag:"🇻🇪"},VN:{name:"Vietnam",flag:"🇻🇳"},VU:{name:"Vanuatu",flag:"🇻🇺"},WS:{name:"Samoa",flag:"🇼🇸"},YE:{name:"Yemen",flag:"🇾🇪"},ZA:{name:"South Africa",flag:"🇿🇦"},ZM:{name:"Zambia",flag:"🇿🇲"},ZW:{name:"Zimbabwe",flag:"🇿🇼"}};function Y(a=[]){const e=[];if(a.length>0){const n=a.map(a=>I.find(e=>e.id===a)).filter(a=>void 0!==a);e.push({id:"__recent__",name:"Recent",icon:"🕐",defaultOpen:!0,children:n.map(a=>({id:a.id,name:a.name,icon:a.flag}))})}for(const a of K){const n=new Map;for(const e of a.places){const a=n.get(e.country)??[];a.push(e),n.set(e.country,a)}const o=[];for(const[a,e]of n){const n=U[a],i=n?.name??a,t=n?.flag??"";o.push({id:`country-${a}`,name:i,icon:t,defaultOpen:!1,children:e.map(a=>({id:a.id,name:a.name,icon:a.flag}))})}e.push({id:a.id,name:a.name,icon:a.icon,defaultOpen:!1,children:o})}return e}},217(a,e,n){n.d(e,{w:()=>o});const o={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},5375(a,e,n){n.d(e,{v:()=>U});var o=n(7359),i=n(3233),t=n(906),l=n(5723);function r(a){return 0===a?{label:"Clear sky",emoji:"☀️"}:1===a?{label:"Mainly clear",emoji:"🌤️"}:2===a?{label:"Partly cloudy",emoji:"⛅"}:3===a?{label:"Overcast",emoji:"☁️"}:a<=48?{label:"Fog",emoji:"🌫️"}:a<=55?{label:"Drizzle",emoji:"🌦️"}:a<=65?{label:"Rain",emoji:"🌧️"}:a<=75?{label:"Snow",emoji:"❄️"}:77===a?{label:"Snow grains",emoji:"🌨️"}:a<=82?{label:"Rain showers",emoji:"🌧️"}:a<=86?{label:"Snow showers",emoji:"🌨️"}:{label:"Thunderstorm",emoji:"⛈️"}}function m(a,e){return 0===e?"Today":1===e?"Tomorrow":new Date(a).toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric"})}const s="#58a6ff",d="rgba(255,255,255,0.06)",c="#8b949e",g=[{threshold:0,color:"#3fb950"},{threshold:15,color:"#7ee787"},{threshold:25,color:"#d29922"},{threshold:38,color:"#f0883e"},{threshold:50,color:"#f85149"}],f=i.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  flex-wrap: wrap;
`,u=i.default.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  color: ${c};
  font-family: monospace;
`,p=i.default.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({color:a})=>a};
  flex-shrink: 0;
`,y=[{label:"0–14",color:"#3fb950"},{label:"15–24",color:"#7ee787"},{label:"25–37",color:"#d29922"},{label:"38–49",color:"#f0883e"},{label:"50+",color:"#f85149"}];function z({cx:a,cy:e,deg:n,size:o=7}){return(0,l.jsx)("g",{transform:`translate(${a},${e}) rotate(${n})`,children:(0,l.jsx)("polygon",{points:`0,${-o} ${.55*o},${.6*o} 0,${.2*o} ${.55*-o},${.6*o}`,fill:s,opacity:.85})})}const h=i.default.div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 10px 10px 8px;
`,x=i.default.div`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${c};
  font-family: ${t.w4.typography.fontFamily};
  margin-bottom: 6px;
`;function b({speeds:a}){const e=14,n=28,o=52,i=Math.max(...a,1),t=5*Math.ceil(i/5),r=a.map((e,i)=>({x:n+i/(a.length-1)*232,y:66-e/t*o})),m=function(a,e=.35){if(a.length<2)return"";let n=`M ${a[0].x.toFixed(2)} ${a[0].y.toFixed(2)}`;for(let o=0;o<a.length-1;o++){const i=a[Math.max(o-1,0)],t=a[o],l=a[o+1],r=a[Math.min(o+2,a.length-1)],m=t.x+(l.x-i.x)*e,s=t.y+(l.y-i.y)*e,d=l.x-(r.x-t.x)*e,c=l.y-(r.y-t.y)*e;n+=` C ${m.toFixed(2)} ${s.toFixed(2)} ${d.toFixed(2)} ${c.toFixed(2)} ${l.x.toFixed(2)} ${l.y.toFixed(2)}`}return n}(r),g=`${m} L ${r[r.length-1].x.toFixed(2)} ${66..toFixed(2)} L ${r[0].x.toFixed(2)} ${66..toFixed(2)} Z`,f=[0,6,12,18,23].map(e=>({label:23===e?"24h":`${e}h`,x:n+e/(a.length-1)*232})),u=[{label:`${t}`,y:e},{label:`${Math.round(t/2)}`,y:40},{label:"0",y:66}];return(0,l.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"windGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,l.jsx)("stop",{offset:"0%",stopColor:s,stopOpacity:.3}),(0,l.jsx)("stop",{offset:"100%",stopColor:s,stopOpacity:0})]})}),u.map(({y:a})=>(0,l.jsx)("line",{x1:n,y1:a,x2:260,y2:a,stroke:d,strokeWidth:1},a)),(0,l.jsx)("path",{d:g,fill:"url(#windGrad)"}),(0,l.jsx)("path",{d:m,fill:"none",stroke:s,strokeWidth:1.5,strokeLinejoin:"round"}),(()=>{const a=(new Date).getHours(),e=r[Math.min(a,r.length-1)];return(0,l.jsx)("circle",{cx:e.x,cy:e.y,r:3,fill:s})})(),f.map(({label:a,x:e})=>(0,l.jsx)("text",{x:e,y:84,textAnchor:"middle",fill:c,fontSize:9,fontFamily:"monospace",children:a},a)),u.map(({label:a,y:e})=>(0,l.jsx)("text",{x:24,y:e+3,textAnchor:"end",fill:c,fontSize:9,fontFamily:"monospace",children:a},a))]})}function w({speeds:a,directions:e,dayLabels:n}){const o=a.length,i=Math.max(...a,1),t=5*Math.ceil(i/5),r=252/o,m=.28*r;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("svg",{viewBox:"0 0 268 110",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,l.jsx)("line",{x1:8,y1:90,x2:260,y2:90,stroke:d,strokeWidth:1}),a.map((a,o)=>{const i=a/t*60,s=8+o*r+m/2,d=r-m,f=90-i,u=s+d/2,p=function(a){let e=g[0].color;for(const n of g){if(!(a>=n.threshold))break;e=n.color}return e}(a);return(0,l.jsxs)("g",{children:[(0,l.jsx)(z,{cx:u,cy:7,deg:e[o],size:6}),(0,l.jsx)("text",{x:u,y:23,textAnchor:"middle",fill:p,fontSize:8,fontWeight:"600",fontFamily:"monospace",children:Math.round(a)}),(0,l.jsx)("rect",{x:s,y:f,width:d,height:i,fill:p,opacity:.85,rx:2}),(0,l.jsx)("text",{x:u,y:106,textAnchor:"middle",fill:c,fontSize:9,fontFamily:"monospace",children:n[o]})]},o)}),(0,l.jsx)("text",{x:260,y:88,textAnchor:"end",fill:c,fontSize:8,fontFamily:"monospace",children:"km/h"})]}),(0,l.jsx)(f,{children:y.map(({label:a,color:e})=>(0,l.jsxs)(u,{children:[(0,l.jsx)(p,{color:e}),a]},a))})]})}const A=i.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: ${t.w4.colors.sidebarBg};
  border-left: 1px solid ${t.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  transform: translateX(${({visible:a})=>a?"0":"100%"});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 500;
  overflow: hidden;
`,v=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.md} ${t.w4.spacing.sm};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,S=i.default.h2`
  margin: 0;
  font-size: ${t.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,k=i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: 16px;
  line-height: 1;
  transition: background 0.12s, color 0.12s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`,$=i.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${t.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.md};
`,j=i.default.div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.md};
`,M=i.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${t.w4.spacing.sm};
`,B=i.default.span`
  font-size: 48px;
  line-height: 1;
`,T=i.default.div`
  font-size: 40px;
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamilyMono};
  line-height: 1;
`,C=i.default.div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  margin-top: 4px;
`,E=i.default.div`
  display: flex;
  gap: ${t.w4.spacing.md};
  margin-top: ${t.w4.spacing.sm};
`,L=i.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,P=i.default.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-bottom: 2px;
`,F=i.default.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: ${t.w4.borderRadius.sm};
  gap: ${t.w4.spacing.sm};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,G=i.default.span`
  font-size: 20px;
  width: 28px;
  text-align: center;
  flex-shrink: 0;
`,R=i.default.div`
  flex: 1;
  min-width: 0;
`,N=i.default.div`
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,D=i.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,K=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  flex-shrink: 0;
`,I=i.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamilyMono};
`,_=i.default.span`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,H=i.default.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 10px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  flex-shrink: 0;
  width: 36px;
  justify-content: flex-end;
`,V=i.default.div`
  padding: ${t.w4.spacing.lg};
  text-align: center;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-family: ${t.w4.typography.fontFamily};
`;function U({place:a,onClose:e}){const[n,i]=(0,o.useState)(null),[s,d]=(0,o.useState)(!1),[c,g]=(0,o.useState)(null),[f,u]=(0,o.useState)(0);(0,o.useEffect)(()=>{if(!a)return void i(null);d(!0),g(null),i(null);const e=`https://api.open-meteo.com/v1/forecast?latitude=${a.lat}&longitude=${a.lng}&current_weather=true&hourly=windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=7`;fetch(e).then(a=>{if(!a.ok)throw new Error(`HTTP ${a.status}`);return a.json()}).then(a=>{i(a),d(!1)}).catch(a=>{g(a.message),d(!1)})},[a?.id,f]);const p=n?r(n.current_weather.weathercode):null,y=n?n.hourly.windspeed_10m.slice(0,24):[];return(0,l.jsxs)(A,{visible:!!a,children:[(0,l.jsxs)(v,{children:[(0,l.jsx)(S,{children:a?.name??""}),(0,l.jsx)(k,{onClick:e,title:"Close",children:"✕"})]}),(0,l.jsxs)($,{children:[s&&(0,l.jsx)(V,{children:"Loading weather…"}),c&&(0,l.jsxs)(V,{children:[(0,l.jsx)("div",{children:"Weather unavailable — the API may be temporarily down."}),(0,l.jsx)("button",{onClick:()=>u(a=>a+1),style:{marginTop:12,padding:"6px 16px",cursor:"pointer",background:"none",border:`1px solid ${t.w4.colors.border}`,borderRadius:6,color:t.w4.colors.mainText,fontFamily:"inherit",fontSize:12},children:"Retry"})]}),n&&p&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(j,{children:[(0,l.jsxs)(M,{children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)(T,{children:[Math.round(n.current_weather.temperature),"°C"]}),(0,l.jsx)(C,{children:p.label})]}),(0,l.jsx)(B,{children:p.emoji})]}),(0,l.jsxs)(E,{children:[(0,l.jsxs)(L,{children:["💨 ",Math.round(n.current_weather.windspeed)," km/h"]}),(0,l.jsxs)(L,{children:["🌡 ",Math.round(n.daily.temperature_2m_max[0]),"° / ",Math.round(n.daily.temperature_2m_min[0]),"°"]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(P,{children:"Wind today (hourly)"}),(0,l.jsxs)(h,{children:[(0,l.jsx)(x,{children:"Speed km/h · dot = current hour"}),(0,l.jsx)(b,{speeds:y})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(P,{children:"Wind this week (daily max)"}),(0,l.jsxs)(h,{children:[(0,l.jsx)(x,{children:"Max speed km/h · arrows = dominant direction"}),(0,l.jsx)(w,{speeds:n.daily.windspeed_10m_max,directions:n.daily.winddirection_10m_dominant,dayLabels:n.daily.time.map((a,e)=>0===e?"Today":new Date(a).toLocaleDateString("en-GB",{weekday:"short"}))})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(P,{children:"7-Day Forecast"}),n.daily.time.map((a,e)=>{const{emoji:o,label:i}=r(n.daily.weathercode[e]);return(0,l.jsxs)(F,{children:[(0,l.jsx)(G,{children:o}),(0,l.jsxs)(R,{children:[(0,l.jsx)(N,{children:m(a,e)}),(0,l.jsx)(D,{children:i})]}),(0,l.jsx)(H,{children:n.daily.precipitation_sum[e]>0&&(0,l.jsxs)(l.Fragment,{children:["💧 ",n.daily.precipitation_sum[e].toFixed(1)]})}),(0,l.jsxs)(K,{children:[(0,l.jsxs)(I,{children:[Math.round(n.daily.temperature_2m_max[e]),"°"]}),(0,l.jsxs)(_,{children:[Math.round(n.daily.temperature_2m_min[e]),"°"]})]})]},a)})]})]})]})]})}}}]);
//# sourceMappingURL=375.1f08522d11c81b1529b0.js.map