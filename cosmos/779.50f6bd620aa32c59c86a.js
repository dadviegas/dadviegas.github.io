"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([[779],{4914(a,e,o){o.d(e,{FlyoutPanel:()=>x});var n=o(7359),t=o(3233),i=o(7207),r=o(255),l=o(217),s=o(5959),c=o(5185),d=o(5723);const m=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=t.default.div`
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
`;function p({iconKey:a}){const e=a?c.t[a]??r.A:r.A;return(0,d.jsx)(e,{size:14,strokeWidth:1.75})}function h({entries:a,activeId:e,onSelect:o}){return(0,d.jsx)(d.Fragment,{children:a.map(a=>a.children?(0,d.jsx)(n.Fragment,{children:(0,d.jsx)(h,{entries:a.children,activeId:e,onSelect:o})},a.id):(0,d.jsxs)(f,{active:e===a.id,onClick:()=>o(a),children:[(0,d.jsx)(p,{iconKey:a.icon}),a.name]},a.id))})}function x({activeId:a}){const{flyout:e,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,s.c)();if(!e)return null;const t=e.entry.icon?c.t[e.entry.icon]??r.A:r.A;return(0,d.jsxs)(g,{anchorY:e.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(t,{size:13,strokeWidth:2}),e.entry.name]}),(0,d.jsx)(h,{entries:e.entry.children??[],activeId:a,onSelect:a=>{e.onSelect(a),o()}})]})}},5959(a,e,o){o.d(e,{I:()=>t,c:()=>i});var n=o(7359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},5185(a,e,o){o.d(e,{t:()=>V});var n=o(9510),t=o(9038),i=o(8207),r=o(6896),l=o(7901),s=o(9848),c=o(2164),d=o(3775),m=o(3539),g=o(1783),u=o(1837),f=o(2314),p=o(5751),h=o(255),x=o(9633),y=o(2946),z=o(822),b=o(6720),w=o(3317),A=o(2709),v=o(3517),S=o(7032),j=o(6949),k=o(8218),$=o(6829),M=o(5553),T=o(9591),P=o(2820),E=o(4621),C=o(6673),B=o(9033),I=o(1365),L=o(5912),F=o(8641),R=o(3249),D=o(1821),G=o(9161),N=o(1849),K=o(7747),H=o(2932),O=o(4525),_=o(7230);const V={activity:r.A,"bar-chart-2":n.A,book:s.A,"book-open":l.A,calendar:d.A,clock:g.A,"circle-dot":m.A,feather:f.A,"file-text":p.A,globe:b.A,hash:w.A,heart:A.A,landmark:v.A,layers:i.A,leaf:j.A,map:T.A,package:C.A,compass:u.A,"git-branch":y.A,github:z.A,minus:E.A,terminal:R.A,thermometer:D.A,users:N.A,wind:K.A,"pie-chart":t.A,plus:I.A,slash:L.A,star:F.A,zap:_.A,bot:c.A,lightbulb:k.A,"message-square":P.A,wrench:H.A,x:O.A,"layout-grid":S.A,list:$.A,file:h.A,folder:x.A,"map-pin":M.A,"pen-tool":B.A,type:G.A}},906(a,e,o){o.d(e,{PE:()=>v,CD:()=>D,w4:()=>n.w});var n=o(217),t=o(7359),i=o(3233),r=o(5723);i.default.button`
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
`,i.default.div`
  display: ${({open:a})=>a?"flex":"none"};
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
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${n.w.spacing.sm};
  background: ${({active:a})=>a?n.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:a})=>a?n.w.colors.accent:n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeSm};
  font-weight: ${({active:a})=>a?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
  }
`,i.default.div`
  position: relative;
`,i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:a})=>a?n.w.colors.accent:n.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var l=o(3661),s=o(5959);const c="260px",d="56px",m=i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${n.w.colors.sidebarBg};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,g=i.default.div`
  width: ${d};
  min-width: ${d};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,u=i.default.button`
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
`,f=i.default.button`
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
`,p=i.default.div`
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
`,h=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w.spacing.sm};
  padding: 0 ${n.w.spacing.lg};
`,x=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,y=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${n.w.colors.mainBg};
  font-family: ${n.w.typography.fontFamily};
  color: ${n.w.colors.mainText};
  overflow: hidden;
`,z=i.default.aside`
  width: ${({collapsed:a})=>a?d:c};
  min-width: ${({collapsed:a})=>a?d:c};
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
`,b=i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,w=i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A="atlantis:sidebar-collapsed";function v({sidebar:a,children:e,topBarRight:n,title:i="Atlantis",activeId:c=null}){const[d,v]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(A)}catch{return!1}}),[S,j]=(0,t.useState)(null),k=(0,t.useRef)(),$=()=>v(a=>{const e=!a;try{localStorage.setItem(A,String(e))}catch{}return e}),M=t.useMemo(()=>t.lazy(()=>Promise.resolve().then(o.bind(o,4914)).then(a=>({default:a.FlyoutPanel}))),[]);return(0,r.jsx)(s.I.Provider,{value:{collapsed:d,toggle:$,flyout:S,openFlyout:(a,e,o)=>{clearTimeout(k.current),j({entry:a,anchorY:e,onSelect:o})},scheduleFlyoutClose:()=>{k.current=setTimeout(()=>j(null),160)},cancelFlyoutClose:()=>clearTimeout(k.current)},children:(0,r.jsxs)(y,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(g,{children:(0,r.jsx)(u,{onClick:$,title:d?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(l.A,{size:17})})}),(0,r.jsxs)(f,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,r.jsx)("span",{children:"antis"})]}),i&&(0,r.jsx)(p,{children:i}),n&&(0,r.jsx)(h,{children:n})]}),(0,r.jsxs)(x,{children:[(0,r.jsx)(z,{collapsed:d,children:(0,r.jsx)(b,{children:a})}),(0,r.jsx)(w,{children:e})]}),S&&(0,r.jsx)(t.Suspense,{fallback:null,children:(0,r.jsx)(M,{activeId:c})})]})})}var S=o(255),j=o(9753),k=o(5185);const $=i.default.div`
  display: grid;
  grid-template-rows: ${({open:a})=>a?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,M=i.default.div`
  overflow: hidden;
`,T=i.default.div`
  padding-left: ${n.w.spacing.md};
`,P=i.default.div`
  display: flex;
  flex-direction: column;
`,E=i.default.button`
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
`,C=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:a})=>a?"0":"8px"};
  min-width: 0;
`,B=i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:a})=>a?0:1};
  max-width: ${({collapsed:a})=>a?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,I=i.default.span`
  display: ${({collapsed:a})=>a?"none":"flex"};
  align-items: center;
  color: ${n.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:a})=>a?"90deg":"0deg"});
  }
`,L=i.default.button`
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
`;function F({iconKey:a,size:e=16}){if(a&&!(a in k.t))return(0,r.jsx)("span",{style:{fontSize:e,lineHeight:1,display:"flex",alignItems:"center"},children:a});const o=a?k.t[a]??S.A:S.A;return(0,r.jsx)(o,{size:e,strokeWidth:1.75})}function R({entry:a,activeId:e,onSelect:o}){const[n,i]=(0,t.useState)(a.defaultOpen??!0),{collapsed:l,openFlyout:c,scheduleFlyoutClose:d,cancelFlyoutClose:m}=(0,s.c)();return a.children&&a.children.length>0?(0,r.jsxs)(P,{children:[(0,r.jsxs)(E,{collapsed:l,onClick:()=>{l||i(a=>!a)},onMouseEnter:l?e=>{const n=e.currentTarget.getBoundingClientRect();c(a,n.top,o)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsxs)(C,{collapsed:l,children:[(0,r.jsx)(F,{iconKey:a.icon,size:16}),(0,r.jsx)(B,{collapsed:l,children:a.name})]}),(0,r.jsx)(I,{open:n,collapsed:l,children:(0,r.jsx)(j.A,{size:13})})]}),(0,r.jsx)($,{open:n&&!l,children:(0,r.jsx)(M,{children:(0,r.jsx)(T,{children:a.children.map(a=>(0,r.jsx)(R,{entry:a,activeId:e,onSelect:o},a.id))})})})]}):(0,r.jsxs)(L,{active:e===a.id,collapsed:l,onClick:()=>o(a),onMouseEnter:l?e=>{const n=e.currentTarget.getBoundingClientRect();c({id:a.id,name:a.name,icon:a.icon,file:a.file,children:[a]},n.top,o)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsx)(F,{iconKey:a.icon,size:15}),(0,r.jsx)(B,{collapsed:l,children:a.name})]})}function D({entries:a,activeId:e,onSelect:o}){return(0,r.jsx)("div",{children:a.map(a=>(0,r.jsx)(R,{entry:a,activeId:e,onSelect:o},a.id))})}const G=o(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${G} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,o(4914);[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(a=>a.places)},217(a,e,o){o.d(e,{w:()=>n});const n={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},8351(a,e,o){o.d(e,{A:()=>G});var n=o(7359),t=o(3233),i=o(906),r=o(5553),l=o(9421),s=o(8641),c=o(8447),d=o(5723);function m(a,e,o,n,t){const i=Math.PI/180,r=180/Math.PI,l=((function(a){const e=function(a){const e=a.getUTCFullYear(),o=a.getUTCMonth()+1,n=a.getUTCDate()+(a.getUTCHours()+a.getUTCMinutes()/60+a.getUTCSeconds()/3600)/24,t=Math.floor((14-o)/12),i=e+4800-t,r=o+12*t-3;return n+Math.floor((153*r+2)/5)+365*i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400)-32045}(a);return((280.46061837+360.98564736629*(e-2451545))%360+360)%360}(t)+n+360)%360-15*a+360)%360*i,s=o*i,c=e*i,d=Math.sin(s)*Math.sin(c)+Math.cos(s)*Math.cos(c)*Math.cos(l),m=Math.asin(Math.max(-1,Math.min(1,d))),g=m*r,u=(Math.sin(c)-Math.sin(m)*Math.sin(s))/(Math.cos(m)*Math.cos(s));let f=Math.acos(Math.max(-1,Math.min(1,u)))*r;return Math.sin(l)>0&&(f=360-f),{az:f,alt:g}}function g(a,e,o){const n=.00669437999014,t=a*(Math.PI/180),i=e*(Math.PI/180),r=6378.137/Math.sqrt(1-n*Math.sin(t)**2);return{x:(r+o)*Math.cos(t)*Math.cos(i),y:(r+o)*Math.cos(t)*Math.sin(i),z:(r*(1-n)+o)*Math.sin(t)}}function u(a,e,o,n,t){const i=g(a,e,0),r=g(o,n,t),l=r.x-i.x,s=r.y-i.y,c=r.z-i.z,d=Math.sqrt(l*l+s*s+c*c),m=a*(Math.PI/180),u=e*(Math.PI/180),f=[-Math.sin(u),Math.cos(u),0],p=[-Math.sin(m)*Math.cos(u),-Math.sin(m)*Math.sin(u),Math.cos(m)],h=[Math.cos(m)*Math.cos(u),Math.cos(m)*Math.sin(u),Math.sin(m)],x=l*f[0]+s*f[1]+c*f[2],y=l*p[0]+s*p[1]+c*p[2],z=l*h[0]+s*h[1]+c*h[2],b=Math.atan2(z,Math.sqrt(x*x+y*y))*(180/Math.PI);let w=Math.atan2(x,y)*(180/Math.PI);return w<0&&(w+=360),{az:w,el:b,range_km:d}}function f(a,e,o,n,t){if(e<0)return null;const i=t*(1-e/90),r=a*(Math.PI/180);return{x:o+i*Math.sin(r),y:n-i*Math.cos(r)}}const p=[{id:"Betelgeuse",ra:5.9194,dec:7.407,mag:.45},{id:"Bellatrix",ra:5.4187,dec:6.35,mag:1.64},{id:"Mintaka",ra:5.5334,dec:-.3,mag:2.23},{id:"Alnilam",ra:5.6036,dec:-1.202,mag:1.7},{id:"Alnitak",ra:5.6795,dec:-1.943,mag:1.74},{id:"Rigel",ra:5.2423,dec:-8.202,mag:.13},{id:"Saiph",ra:5.7959,dec:-9.67,mag:2.06},{id:"Meissa",ra:5.5852,dec:9.934,mag:3.39},{id:"Dubhe",ra:11.0621,dec:61.75,mag:1.81},{id:"Merak",ra:11.0306,dec:56.383,mag:2.34},{id:"Phecda",ra:11.8974,dec:53.695,mag:2.44},{id:"Megrez",ra:12.2571,dec:57.033,mag:3.31},{id:"Alioth",ra:12.9004,dec:55.96,mag:1.76},{id:"Mizar",ra:13.399,dec:54.925,mag:2.23},{id:"Alkaid",ra:13.7924,dec:49.313,mag:1.85},{id:"Schedar",ra:.6753,dec:56.537,mag:2.24},{id:"Caph",ra:.1528,dec:59.15,mag:2.27},{id:"GammaCas",ra:.945,dec:60.717,mag:2.47},{id:"Ruchbah",ra:1.4304,dec:60.235,mag:2.66},{id:"Segin",ra:1.9061,dec:63.67,mag:3.37},{id:"Regulus",ra:10.1395,dec:11.967,mag:1.36},{id:"Denebola",ra:11.8179,dec:14.572,mag:2.14},{id:"Algieba",ra:10.333,dec:19.842,mag:2.01},{id:"Zosma",ra:11.235,dec:20.524,mag:2.55},{id:"EtaLeo",ra:10.1221,dec:16.763,mag:3.48},{id:"EpsilonLeo",ra:9.7641,dec:23.774,mag:2.97},{id:"Deneb",ra:20.6905,dec:45.28,mag:1.25},{id:"Sadr",ra:20.3704,dec:40.257,mag:2.23},{id:"Albireo",ra:19.512,dec:27.96,mag:3.09},{id:"Gienah",ra:20.7704,dec:33.97,mag:2.48},{id:"DeltaCyg",ra:19.7496,dec:44.95,mag:2.87},{id:"Vega",ra:18.6157,dec:38.783,mag:.03},{id:"Sheliak",ra:18.835,dec:33.363,mag:3.52},{id:"Sulafat",ra:18.9822,dec:32.69,mag:3.24},{id:"Altair",ra:19.8464,dec:8.868,mag:.76},{id:"Tarazed",ra:19.7713,dec:10.613,mag:2.72},{id:"Alshain",ra:19.9215,dec:6.407,mag:3.71},{id:"Antares",ra:16.4901,dec:-26.432,mag:1.06},{id:"Graffias",ra:16.0921,dec:-19.806,mag:2.62},{id:"Dschubba",ra:16.0056,dec:-22.622,mag:2.29},{id:"Shaula",ra:17.5601,dec:-37.104,mag:1.62},{id:"Lesath",ra:17.5304,dec:-37.298,mag:2.69},{id:"EpsilonSco",ra:16.8362,dec:-34.293,mag:2.29},{id:"ThetaSco",ra:17.622,dec:-42.998,mag:1.87},{id:"KappaSco",ra:17.7082,dec:-39.03,mag:2.41},{id:"Pollux",ra:7.7553,dec:28.026,mag:1.16},{id:"Castor",ra:7.5767,dec:31.888,mag:1.58},{id:"Alhena",ra:6.6283,dec:16.399,mag:1.93},{id:"Wasat",ra:7.3348,dec:21.982,mag:3.53},{id:"MuGem",ra:6.3826,dec:22.514,mag:2.87},{id:"Aldebaran",ra:4.5987,dec:16.509,mag:.87},{id:"Elnath",ra:5.4381,dec:28.608,mag:1.65},{id:"Sirius",ra:6.7525,dec:-16.716,mag:-1.46},{id:"Canopus",ra:6.3992,dec:-52.696,mag:-.74},{id:"Arcturus",ra:14.2613,dec:19.182,mag:-.05},{id:"Capella",ra:5.2782,dec:45.998,mag:.08},{id:"Procyon",ra:7.6551,dec:5.225,mag:.4},{id:"Achernar",ra:1.6285,dec:-57.237,mag:.45},{id:"Spica",ra:13.4199,dec:-11.161,mag:.97},{id:"Fomalhaut",ra:22.9608,dec:-29.622,mag:1.16}],h=Object.fromEntries(p.map(a=>[a.id,a])),x=[{name:"Orion",color:"#a0c4ff",lines:[["Meissa","Betelgeuse"],["Meissa","Bellatrix"],["Betelgeuse","Mintaka"],["Bellatrix","Mintaka"],["Mintaka","Alnilam"],["Alnilam","Alnitak"],["Alnitak","Saiph"],["Alnitak","Rigel"],["Saiph","Rigel"]]},{name:"Ursa Major",color:"#90e090",lines:[["Dubhe","Merak"],["Merak","Phecda"],["Phecda","Megrez"],["Megrez","Dubhe"],["Megrez","Alioth"],["Alioth","Mizar"],["Mizar","Alkaid"]]},{name:"Cassiopeia",color:"#ffd0a0",lines:[["Caph","Schedar"],["Schedar","GammaCas"],["GammaCas","Ruchbah"],["Ruchbah","Segin"]]},{name:"Leo",color:"#ffb0b0",lines:[["Regulus","EtaLeo"],["EtaLeo","Algieba"],["Algieba","EpsilonLeo"],["Algieba","Zosma"],["Zosma","Denebola"]]},{name:"Cygnus",color:"#d0b0ff",lines:[["Deneb","Sadr"],["Sadr","Albireo"],["DeltaCyg","Sadr"],["Sadr","Gienah"]]},{name:"Lyra",color:"#ffe080",lines:[["Vega","Sheliak"],["Sheliak","Sulafat"],["Sulafat","Vega"]]},{name:"Aquila",color:"#80d0ff",lines:[["Tarazed","Altair"],["Altair","Alshain"]]},{name:"Scorpius",color:"#ff9090",lines:[["Graffias","Dschubba"],["Dschubba","Antares"],["Antares","EpsilonSco"],["EpsilonSco","ThetaSco"],["ThetaSco","KappaSco"],["KappaSco","Shaula"],["Shaula","Lesath"]]},{name:"Gemini",color:"#a0ffb0",lines:[["Castor","Pollux"],["Castor","Wasat"],["Wasat","Alhena"],["Pollux","Alhena"],["MuGem","Alhena"]]}],y=t.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.md};
`,z=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${i.w4.spacing.sm};
`,b=t.default.h2`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`,w=t.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
`,A=t.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
`,v=t.default.input`
  width: 90px;
  padding: 4px 8px;
  font-size: 12px;
  font-family: ${i.w4.typography.fontFamilyMono};
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainText};
  outline: none;

  &:focus {
    border-color: #58a6ff;
  }
`,S=t.default.label`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
`,j=t.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  align-items: flex-start;

  @media (max-width: ${i.w4.breakpoints.lg}) {
    flex-direction: column;
  }
`,k=t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,$=t.default.canvas`
  border-radius: 50%;
  cursor: crosshair;
`,M=t.default.div`
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};

  @media (max-width: ${i.w4.breakpoints.lg}) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`,T=t.default.div`
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
`,P=t.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: ${i.w4.spacing.xs};
`,E=t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${i.w4.colors.mainText};
  padding: 2px 0;
`,C=t.default.div`
  width: 20px;
  height: 2px;
  background: ${({color:a})=>a};
  opacity: 0.7;
  border-radius: 1px;
  flex-shrink: 0;
`,B=t.default.div`
  font-size: 12px;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamilyMono};
  line-height: 1.8;
`,I=t.default.div`
  display: flex;
  justify-content: space-between;
  gap: ${i.w4.spacing.sm};
`,L=t.default.span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: 11px;
`,F=t.default.div`
  font-size: 12px;
  color: ${i.w4.colors.mainTextMuted};
  line-height: 1.5;
`,R=t.default.div`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
  text-align: center;
`,D=t.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 11px;
  background: transparent;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainTextMuted};
  cursor: pointer;

  &:hover {
    border-color: #58a6ff;
    color: #58a6ff;
  }
`;function G(){const a=(0,n.useRef)(null),e=(0,n.useRef)(null),[o,t]=(0,n.useState)(480),[g,G]=(0,n.useState)(0),[N,K]=(0,n.useState)(new Date),{data:H}=(0,c.so)(5e3),{location:O,status:_}=(0,c.mJ)(),[V,W]=(0,n.useState)(48.85),[Y,U]=(0,n.useState)(2.35),[Z,J]=(0,n.useState)("48.85"),[q,X]=(0,n.useState)("2.35");(0,n.useEffect)(()=>{O&&(W(O.lat),U(O.lon),J(O.lat.toFixed(3)),X(O.lon.toFixed(3)))},[O]),(0,n.useEffect)(()=>{const a=e.current;if(!a)return;const o=new ResizeObserver(a=>{const e=a[0].contentRect.width;t(Math.max(280,Math.min(e,540)))});return o.observe(a),()=>o.disconnect()},[]),(0,n.useEffect)(()=>{const a=setInterval(()=>{G(a=>a+1),K(new Date)},1e4);return()=>clearInterval(a)},[]);const Q=(0,n.useCallback)(()=>{const e=a.current;if(!e)return;const n=e.getContext("2d");if(!n)return;const t=new Date,r=o,l=r/2,s=r/2,c=r/2-18;n.clearRect(0,0,r,r);const d=n.createRadialGradient(l,s,0,l,s,c);d.addColorStop(0,"#06060f"),d.addColorStop(.7,"#08091a"),d.addColorStop(1,"#0b0c1e"),n.save(),n.beginPath(),n.arc(l,s,c,0,2*Math.PI),n.clip(),n.fillStyle=d,n.fillRect(0,0,r,r),n.restore();for(const a of[30,60]){const e=c*(1-a/90);n.beginPath(),n.arc(l,s,e,0,2*Math.PI),n.strokeStyle="rgba(255,255,255,0.04)",n.lineWidth=.8,n.stroke()}if(n.beginPath(),n.arc(l,s,c,0,2*Math.PI),n.strokeStyle="rgba(255,255,255,0.12)",n.lineWidth=1,n.stroke(),x.forEach(a=>{n.strokeStyle=a.color+"50",n.lineWidth=.9,a.lines.forEach(([a,e])=>{const o=h[a],i=h[e];if(!o||!i)return;const r=m(o.ra,o.dec,V,Y,t),d=m(i.ra,i.dec,V,Y,t);if(r.alt<0||d.alt<0)return;const g=f(r.az,r.alt,l,s,c),u=f(d.az,d.alt,l,s,c);g&&u&&(n.beginPath(),n.moveTo(g.x,g.y),n.lineTo(u.x,u.y),n.stroke())})}),p.forEach(a=>{const e=m(a.ra,a.dec,V,Y,t);if(e.alt<0)return;const o=f(e.az,e.alt,l,s,c);if(!o)return;const i=Math.max(.4,2.8-.55*a.mag),r=Math.min(1,Math.max(.25,1-.12*(a.mag- -1.5)));if(a.mag<1.5){const a=n.createRadialGradient(o.x,o.y,0,o.x,o.y,3*i);a.addColorStop(0,`rgba(255,255,220,${.5*r})`),a.addColorStop(1,"rgba(255,255,220,0)"),n.beginPath(),n.arc(o.x,o.y,3*i,0,2*Math.PI),n.fillStyle=a,n.fill()}n.beginPath(),n.arc(o.x,o.y,i,0,2*Math.PI),n.fillStyle=`rgba(255,255,220,${r})`,n.fill()}),H){const a=u(V,Y,H.latitude,H.longitude,H.altitude);if(a.el>0){const e=f(a.az,a.el,l,s,c);if(e){const o=n.createRadialGradient(e.x,e.y,0,e.x,e.y,12);o.addColorStop(0,"rgba(255,215,0,0.4)"),o.addColorStop(1,"rgba(255,215,0,0)"),n.beginPath(),n.arc(e.x,e.y,12,0,2*Math.PI),n.fillStyle=o,n.fill(),n.beginPath(),n.arc(e.x,e.y,5,0,2*Math.PI),n.fillStyle="#ffd700",n.fill(),n.strokeStyle="#fffacd",n.lineWidth=1,n.stroke(),n.font=`bold 11px ${i.w4.typography.fontFamilyMono}`,n.fillStyle="#ffd700",n.fillText("ISS",e.x+8,e.y+4),n.font=`10px ${i.w4.typography.fontFamilyMono}`,n.fillStyle="#ffd70099",n.fillText(`${a.el.toFixed(1)}° el`,e.x+8,e.y+16)}}}n.font="bold 11px sans-serif",n.textAlign="center",n.textBaseline="middle",[{az:0,label:"N"},{az:90,label:"E"},{az:180,label:"S"},{az:270,label:"W"}].forEach(({az:a,label:e})=>{const o=a*(Math.PI/180),t=l+(c+12)*Math.sin(o),i=s-(c+12)*Math.cos(o);n.fillStyle="N"===e?"#58a6ff":"#8b949e",n.fillText(e,t,i)}),n.font="9px sans-serif",n.fillStyle="rgba(255,255,255,0.15)",n.textAlign="center",n.fillText("Zenith",l,s+4),n.textAlign="left",n.textBaseline="alphabetic"},[V,Y,H,o]);(0,n.useEffect)(()=>{Q()},[Q,g]);const aa=H?u(V,Y,H.latitude,H.longitude,H.altitude):null,ea=aa&&aa.el>0;return(0,d.jsxs)(y,{children:[(0,d.jsxs)(z,{children:[(0,d.jsxs)(b,{children:[(0,d.jsx)(s.A,{size:18,color:"#ffd700"}),"Night Sky"]}),(0,d.jsxs)(w,{children:[(0,d.jsxs)(A,{children:[(0,d.jsx)(r.A,{size:12}),(0,d.jsx)(S,{children:"Lat"}),(0,d.jsx)(v,{type:"number",value:Z,onChange:a=>{J(a.target.value);const e=parseFloat(a.target.value);!isNaN(e)&&e>=-90&&e<=90&&W(e)},step:"0.001",min:"-90",max:"90"}),(0,d.jsx)(S,{children:"Lon"}),(0,d.jsx)(v,{type:"number",value:q,onChange:a=>{X(a.target.value);const e=parseFloat(a.target.value);!isNaN(e)&&e>=-180&&e<=180&&U(e)},step:"0.001",min:"-180",max:"180"})]}),"granted"===_&&(0,d.jsxs)(A,{style:{color:"#3fb950"},children:[(0,d.jsx)(r.A,{size:11}),"GPS"]}),(0,d.jsxs)(D,{onClick:()=>{G(a=>a+1),K(new Date)},children:[(0,d.jsx)(l.A,{size:11}),"Refresh"]})]})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)(k,{ref:e,children:(0,d.jsx)($,{ref:a,width:o,height:o})}),(0,d.jsxs)(M,{children:[(0,d.jsxs)(T,{children:[(0,d.jsx)(P,{children:"ISS Visibility"}),H&&aa?ea?(0,d.jsxs)(B,{children:[(0,d.jsxs)(I,{children:[(0,d.jsx)(L,{children:"Elevation"}),(0,d.jsxs)("span",{children:[aa.el.toFixed(1),"°"]})]}),(0,d.jsxs)(I,{children:[(0,d.jsx)(L,{children:"Azimuth"}),(0,d.jsxs)("span",{children:[aa.az.toFixed(1),"°"]})]}),(0,d.jsxs)(I,{children:[(0,d.jsx)(L,{children:"Range"}),(0,d.jsxs)("span",{children:[aa.range_km.toFixed(0)," km"]})]}),(0,d.jsxs)(I,{children:[(0,d.jsx)(L,{children:"Sun"}),(0,d.jsx)("span",{children:H.visibility})]})]}):(0,d.jsxs)(F,{children:["ISS is currently below the horizon.",(0,d.jsx)("br",{}),"El: ",aa.el.toFixed(1),"°"]}):(0,d.jsx)(F,{children:"Loading ISS data…"})]}),(0,d.jsxs)(T,{children:[(0,d.jsx)(P,{children:"Constellations"}),x.map(a=>(0,d.jsxs)(E,{children:[(0,d.jsx)(C,{color:a.color}),a.name]},a.name))]}),(0,d.jsxs)(T,{children:[(0,d.jsx)(P,{children:"How to read"}),(0,d.jsx)(F,{children:"Centre = zenith (directly overhead). Edge = horizon. N is up. Stars are sized by brightness. ISS shown in gold when visible."})]})]})]}),(0,d.jsxs)(R,{children:["UTC ",N.toUTCString().split(" ")[4]," · Observer ",V.toFixed(3),"° ",V>=0?"N":"S",","," ",Math.abs(Y).toFixed(3),"° ",Y>=0?"E":"W"]})]})}},6713(a,e,o){o.d(e,{A:()=>b});var n=o(7359),t=o(3233),i=o(906),r=o(8447),l=o(5723);const s=[{category:"station",label:"Space Stations",examples:"ISS, Tiangong"},{category:"observation",label:"Earth Observation",examples:"Terra, Aqua, Landsat-9"},{category:"navigation",label:"Navigation",examples:"GPS III, GPS IIF"},{category:"communications",label:"Communications",examples:"Starlink"},{category:"scientific",label:"Scientific",examples:"Hubble"},{category:"weather",label:"Weather",examples:"GOES-16, GOES-18"}],c=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,d=t.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,m=t.default.div`
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: #0d1117;
    font-family: ${i.w4.typography.fontFamily};
  }

  .leaflet-tile-pane {
    filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9);
  }

  .leaflet-popup-content-wrapper {
    background: ${i.w4.colors.surface};
    border: 1px solid ${i.w4.colors.border};
    border-radius: ${i.w4.borderRadius.md};
    color: ${i.w4.colors.mainText};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  .leaflet-popup-tip {
    background: ${i.w4.colors.surface};
  }

  .leaflet-popup-content {
    margin: 12px 16px;
    font-size: 13px;
    line-height: 1.6;
  }

  .leaflet-control-zoom a {
    background: ${i.w4.colors.surface};
    border-color: ${i.w4.colors.border};
    color: ${i.w4.colors.mainText};
  }

  .leaflet-control-zoom a:hover {
    background: ${i.w4.colors.mainBg};
  }

  .leaflet-tooltip {
    background: #1c2128;
    border: 1px solid ${i.w4.colors.border};
    border-radius: 5px;
    color: ${i.w4.colors.mainText};
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 11px;
    padding: 4px 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }

  .leaflet-tooltip::before {
    border-top-color: ${i.w4.colors.border};
  }
`,g=t.default.div`
  background: ${i.w4.colors.sidebarBg};
  border-top: 1px solid ${i.w4.colors.border};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.lg};
  flex-wrap: wrap;
`,u=t.default.span`
  font-size: 11px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
`,f=t.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${i.w4.colors.mainText};
  white-space: nowrap;
`,p=t.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:a})=>a};
  box-shadow: 0 0 6px ${({color:a})=>a}80;
  flex-shrink: 0;
`,h=t.default.span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: 11px;
`,x=t.default.div`
  height: 26px;
  min-height: 26px;
  background: ${i.w4.colors.sidebarBg};
  border-top: 1px solid ${i.w4.colors.border};
  display: flex;
  align-items: center;
  padding: 0 ${i.w4.spacing.md};
  gap: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
`,y=t.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({live:a})=>a?"#3fb950":"#f85149"};
`;function z(a){return`\n    <div style="font-family: monospace; line-height: 1.8;">\n      <div style="font-size: 14px; font-weight: 700; margin-bottom: 6px; color: ${r.IT[a.category]};">\n        🛰 ${a.name}\n      </div>\n      <table style="border-collapse: collapse; width: 100%;">\n        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Lat</td>\n            <td>${a.latitude.toFixed(4)}°</td></tr>\n        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Lon</td>\n            <td>${a.longitude.toFixed(4)}°</td></tr>\n        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Altitude</td>\n            <td>${a.altitude.toFixed(1)} km</td></tr>\n      </table>\n    </div>\n  `}function b(){const a=(0,n.useRef)(null),e=(0,n.useRef)(null),o=(0,n.useRef)(null),t=(0,n.useRef)(null),i=(0,n.useRef)(null),b=(0,n.useRef)(new Map),[w,A]=(0,n.useState)(!1),{data:v}=(0,r.so)(5e3),S=(0,r.Ey)(15e3),{trail:j,addPoint:k}=(0,r.wB)(80);return(0,n.useEffect)(()=>{var a;!function(a){if(document.querySelector(`link[href="${a}"]`))return;const e=document.createElement("link");e.rel="stylesheet",e.href=a,document.head.appendChild(e)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(a="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((e,o)=>{if(document.querySelector(`script[src="${a}"]`))return void e();const n=document.createElement("script");n.src=a,n.onload=()=>e(),n.onerror=o,document.head.appendChild(n)})).then(()=>A(!0))},[]),(0,n.useEffect)(()=>{if(!w||!a.current||e.current)return;const n=window.L,l=n.map(a.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1,minZoom:2});n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:10}).addTo(l);const s=n.circleMarker([20,0],{radius:8,color:r.IT.station,fillColor:r.IT.station,fillOpacity:1,weight:2,pane:"markerPane"}).addTo(l);s.bindPopup("Loading ISS…",{maxWidth:260,minWidth:200}),s.bindTooltip("🛰 ISS · International Space Station",{direction:"top",offset:[0,-8]}),o.current=s;const c=n.polyline([],{color:`${r.IT.station}55`,weight:1.5,dashArray:"4 4"}).addTo(l);t.current=c;const d=n.circle([20,0],{radius:0,color:`${r.IT.station}22`,fillColor:`${r.IT.station}08`,fillOpacity:1,weight:1}).addTo(l);return i.current=d,e.current=l,()=>{l.remove(),e.current=null,o.current=null,t.current=null,i.current=null,b.current.clear()}},[w]),(0,n.useEffect)(()=>{if(!v||!e.current)return;const a=[v.latitude,v.longitude];k(v.latitude,v.longitude),o.current?.setLatLng(a),o.current?.setPopupContent(z({...v,norad:25544,category:"station",displayName:"ISS"})),i.current?.setLatLng(a),i.current?.setRadius(v.footprint/2*1e3)},[v,k]),(0,n.useEffect)(()=>{t.current?.setLatLngs(j)},[j]),(0,n.useEffect)(()=>{if(!e.current||!window.L)return;const a=window.L,o=e.current,n=b.current;S.forEach(e=>{if(25544===e.norad)return;const t=[e.latitude,e.longitude],i=r.IT[e.category],l=`🛰 ${e.name} · ${e.altitude.toFixed(0)} km`;if(n.has(e.norad)){const a=n.get(e.norad);a.setLatLng(t),a.setPopupContent(z(e)),a.setTooltipContent(l)}else{const r=a.circleMarker(t,{radius:5,color:i,fillColor:i,fillOpacity:.85,weight:1.5}).addTo(o);r.bindPopup(z(e),{maxWidth:260,minWidth:200}),r.bindTooltip(l,{direction:"top",offset:[0,-6]}),n.set(e.norad,r)}})},[S]),(0,l.jsxs)(c,{children:[(0,l.jsx)(d,{children:(0,l.jsx)(m,{children:(0,l.jsx)("div",{ref:a,style:{height:"100%",width:"100%"}})})}),(0,l.jsxs)(g,{children:[(0,l.jsx)(u,{children:"Legend"}),s.map(({category:a,label:e,examples:o})=>(0,l.jsxs)(f,{children:[(0,l.jsx)(p,{color:r.IT[a]}),e,(0,l.jsxs)(h,{children:["· ",o]})]},a))]}),(0,l.jsxs)(x,{children:[(0,l.jsx)(y,{live:!!v}),(0,l.jsx)("span",{children:"ISS"}),v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"·"}),(0,l.jsxs)("span",{children:[v.latitude.toFixed(3),"°, ",v.longitude.toFixed(3),"°"]}),(0,l.jsx)("span",{children:"·"}),(0,l.jsxs)("span",{children:[v.altitude.toFixed(1)," km"]}),(0,l.jsx)("span",{children:"·"}),(0,l.jsxs)("span",{children:[(v.velocity/3600).toFixed(2)," km/s"]})]}),(0,l.jsxs)("span",{style:{marginLeft:"auto"},children:[S.length," satellites tracked · click any marker for details  · ",(0,l.jsx)("a",{href:"https://www.openstreetmap.org/copyright",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline",opacity:.7},children:"© OpenStreetMap contributors"})]})]})]})}},6423(a,e,o){o.d(e,{A:()=>L}),o(7359);var n=o(3233),t=o(7207),i=o(906),r=o(6896),l=o(140),s=o(6494),c=o(6720),d=o(4558),m=o(7230),g=o(8447),u=o(5723);const f=t.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,p=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.lg};
`,h=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${i.w4.spacing.md};
`,x=n.default.h2`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`,y=n.default.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: ${({active:a})=>a?"#3fb950":i.w4.colors.mainTextMuted};
  background: ${({active:a})=>a?"rgba(63,185,80,0.1)":"transparent"};
  border: 1px solid ${({active:a})=>a?"rgba(63,185,80,0.3)":i.w4.colors.border};
  border-radius: 999px;
  padding: 2px 10px;
`,z=n.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:a})=>a?"#3fb950":i.w4.colors.mainTextMuted};
  animation: ${({active:a})=>a?f:"none"} 1.5s ease-in-out infinite;
`,b=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.md};

  @media (max-width: ${i.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,w=n.default.div`
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.xs};
`,A=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${i.w4.borderRadius.sm};
  background: ${({color:a})=>a}18;
  color: ${({color:a})=>a};
  margin-bottom: ${i.w4.spacing.xs};
`,v=n.default.div`
  font-size: 11px;
  font-weight: 500;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,S=n.default.div`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamilyMono};
  line-height: 1.2;
`,j=n.default.div`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
`,k=n.default.div`
  height: 24px;
  width: 120px;
  background: ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  animation: ${f} 1.5s ease-in-out infinite;
`,$=n.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${i.w4.spacing.sm};

  @media (max-width: ${i.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,M=n.default.div`
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,T=n.default.div`
  font-size: 10px;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,P=n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamilyMono};
`,E=n.default.div`
  font-size: 12px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,C=n.default.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: ${({vis:a})=>"daylight"===a?"rgba(255,215,0,0.15)":"eclipsed"===a?"rgba(88,166,255,0.15)":"rgba(139,148,158,0.15)"};
  color: ${({vis:a})=>"daylight"===a?"#ffd700":"eclipsed"===a?"#58a6ff":i.w4.colors.mainTextMuted};
`;function B(a,e=2){return void 0===a?"—":a.toFixed(e)}function I(a,e,o){return`${Math.abs(a).toFixed(4)}° ${a>=0?e:o}`}function L(){const{data:a,loading:e}=(0,g.so)(5e3);return(0,u.jsxs)(p,{children:[(0,u.jsxs)(h,{children:[(0,u.jsxs)(x,{children:[(0,u.jsx)(r.A,{size:18,color:"#58a6ff"}),"Space Metrics"]}),(0,u.jsxs)(y,{active:!e&&!!a,children:[(0,u.jsx)(z,{active:!e&&!!a}),e?"Connecting…":a?"Live":"Offline"]})]}),(0,u.jsx)(E,{children:"ISS Telemetry"}),(0,u.jsxs)(b,{children:[(0,u.jsxs)(w,{children:[(0,u.jsx)(A,{color:"#58a6ff",children:(0,u.jsx)(c.A,{size:16})}),(0,u.jsx)(v,{children:"Position"}),e?(0,u.jsx)(k,{}):a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S,{children:I(a.latitude,"N","S")}),(0,u.jsx)(j,{children:I(a.longitude,"E","W")})]}):(0,u.jsx)(S,{children:"—"})]}),(0,u.jsxs)(w,{children:[(0,u.jsx)(A,{color:"#3fb950",children:(0,u.jsx)(s.A,{size:16})}),(0,u.jsx)(v,{children:"Altitude"}),e?(0,u.jsx)(k,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(S,{children:[B(a?.altitude)," km"]}),(0,u.jsxs)(j,{children:["~",B(a?.621371*a.altitude:void 0)," mi"]})]})]}),(0,u.jsxs)(w,{children:[(0,u.jsx)(A,{color:"#e3b341",children:(0,u.jsx)(m.A,{size:16})}),(0,u.jsx)(v,{children:"Velocity"}),e?(0,u.jsx)(k,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(S,{children:[B(a?.velocity,0)," km/h"]}),(0,u.jsxs)(j,{children:[B(a?a.velocity/3600:void 0,2)," km/s"]})]})]}),(0,u.jsxs)(w,{children:[(0,u.jsx)(A,{color:"#bc8cff",children:(0,u.jsx)(d.A,{size:16})}),(0,u.jsx)(v,{children:"Signal Footprint"}),e?(0,u.jsx)(k,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(S,{children:[B(a?.footprint,0)," km"]}),(0,u.jsx)(j,{children:"diameter visible from ISS"})]})]}),(0,u.jsxs)(w,{children:[(0,u.jsx)(A,{color:"#ff7b72",children:(0,u.jsx)(l.A,{size:16})}),(0,u.jsx)(v,{children:"Sun Visibility"}),e?(0,u.jsx)(k,{}):a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S,{children:(0,u.jsx)(C,{vis:a.visibility,children:a.visibility.charAt(0).toUpperCase()+a.visibility.slice(1)})}),(0,u.jsxs)(j,{children:["Solar lat ",B(a.solar_lat,1),"° · lon ",B(a.solar_lon,1),"°"]})]}):(0,u.jsx)(S,{children:"—"})]}),(0,u.jsxs)(w,{children:[(0,u.jsx)(A,{color:"#39d353",children:(0,u.jsx)(r.A,{size:16})}),(0,u.jsx)(v,{children:"Orbit Period"}),(0,u.jsx)(S,{children:"92.68 min"}),(0,u.jsx)(j,{children:"15.5 orbits per day"})]})]}),(0,u.jsx)(E,{children:"In Orbit Right Now"}),(0,u.jsxs)($,{children:[(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:"Tracked Objects"}),(0,u.jsx)(P,{children:"~27,000+"})]}),(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:"Active Satellites"}),(0,u.jsx)(P,{children:"~9,000+"})]}),(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:"ISS Inclination"}),(0,u.jsx)(P,{children:"51.64°"})]}),(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:"ISS Mass"}),(0,u.jsx)(P,{children:"~420,000 kg"})]}),(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:"ISS Size"}),(0,u.jsx)(P,{children:"109 × 73 m"})]}),(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:"LEO Range"}),(0,u.jsx)(P,{children:"160–2,000 km"})]}),(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:"Orbital Velocity"}),(0,u.jsx)(P,{children:"~7.66 km/s"})]}),(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:"ISS Crew"}),(0,u.jsx)(P,{children:"~7 people"})]})]})]})}},8447(a,e,o){o.d(e,{Ey:()=>g,IT:()=>s,mJ:()=>r,so:()=>i,wB:()=>u});var n=o(7359),t=o(5881);function i(a=5e3){const[e,o]=(0,n.useState)(null),[t,i]=(0,n.useState)(!0),[r,l]=(0,n.useState)(null),s=(0,n.useCallback)(async()=>{try{const a=await fetch("https://api.wheretheiss.at/v1/satellites/25544");if(!a.ok)throw new Error(`HTTP ${a.status}`);const e=await a.json();o(e),l(null)}catch(a){l(a instanceof Error?a.message:"Fetch failed")}finally{i(!1)}},[]);return(0,n.useEffect)(()=>{s();const e=setInterval(s,a);return()=>clearInterval(e)},[s,a]),{data:e,loading:t,error:r,refresh:s}}function r(){const[a,e]=(0,n.useState)(null),[o,t]=(0,n.useState)("pending");return(0,n.useEffect)(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(a=>{e({lat:a.coords.latitude,lon:a.coords.longitude}),t("granted")},()=>t("denied"),{timeout:8e3}):t("denied")},[]),{location:a,status:o}}const l=[{norad:25544,name:"ISS",category:"station"},{norad:48274,name:"Tiangong",category:"station"},{norad:25994,name:"Terra",category:"observation"},{norad:27424,name:"Aqua",category:"observation"},{norad:49260,name:"Landsat-9",category:"observation"},{norad:43873,name:"GPS III-1",category:"navigation"},{norad:45854,name:"GPS III-4",category:"navigation"},{norad:40534,name:"GPS IIF-10",category:"navigation"},{norad:44713,name:"Starlink-24",category:"communications"},{norad:44914,name:"Starlink-60",category:"communications"},{norad:45178,name:"Starlink-100",category:"communications"},{norad:20580,name:"Hubble",category:"scientific"},{norad:37820,name:"Suomi NPP",category:"scientific"},{norad:41866,name:"GOES-16",category:"weather"},{norad:44914,name:"GOES-18",category:"weather"}],s={station:"#ffd700",observation:"#58a6ff",navigation:"#3fb950",communications:"#e3b341",scientific:"#bc8cff",weather:"#79c0ff"},c=new Map,d=36e5;function m(a,e,o){try{const n=(0,t.jl)(a,e),i=(0,t.gv)(n,o);if(!i.position||"boolean"==typeof i.position)return null;const r=(0,t.Y0)(o),l=(0,t.$6)(i.position,r);return{latitude:(0,t.Zr)(l.latitude),longitude:(0,t.yy)(l.longitude),altitude:l.height}}catch{return null}}function g(a=5e3){const[e,o]=(0,n.useState)([]),t=(0,n.useCallback)(async()=>{const a=await Promise.allSettled(l.map(async(a,e)=>(await new Promise(a=>setTimeout(a,120*e)),async function(a){const e=c.get(a);if(e&&Date.now()-e.fetchedAt<d)return{line1:e.line1,line2:e.line2};try{const e=await fetch(`https://tle.ivanstanojevic.me/api/tle/${a}`);if(!e.ok)throw new Error(`HTTP ${e.status}`);const o=await e.json();if(!o.line1||!o.line2)throw new Error("No TLE lines");return c.set(a,{line1:o.line1,line2:o.line2,fetchedAt:Date.now()}),{line1:o.line1,line2:o.line2}}catch{return null}}(a.norad)))),e=new Date,n=[];a.forEach((a,o)=>{if("fulfilled"!==a.status||!a.value)return;const t=l[o],i=m(a.value.line1,a.value.line2,e);i&&n.push({norad:t.norad,name:t.name,category:t.category,...i})}),n.length>0&&o(n)},[]);return(0,n.useEffect)(()=>{t();const a=setInterval(t,d);return()=>clearInterval(a)},[t]),(0,n.useEffect)(()=>{const e=setInterval(()=>{const a=new Date,e=[];l.forEach(o=>{const n=c.get(o.norad);if(!n)return;const t=m(n.line1,n.line2,a);t&&e.push({norad:o.norad,name:o.name,category:o.category,...t})}),e.length>0&&o(e)},a);return()=>clearInterval(e)},[a]),e}function u(a=60){const e=(0,n.useRef)([]),[o,t]=(0,n.useState)([]);return{trail:o,addPoint:(0,n.useCallback)((o,n)=>{e.current=[...e.current,[o,n]].slice(-a),t([...e.current])},[a])}}}}]);
//# sourceMappingURL=779.50f6bd620aa32c59c86a.js.map