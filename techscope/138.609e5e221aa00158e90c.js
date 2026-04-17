"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[138],{894(e,a,o){o.d(a,{Nx:()=>p,lw:()=>g,aw:()=>m,Ym:()=>c});var t=o(7359),n=o(9178);const i={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"há {n}m"},"time.hAgo":{en:"{n}h ago",pt:"há {n}h"},"time.dAgo":{en:"{n}d ago",pt:"há {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados disponíveis"},noDescription:{en:"No description provided.",pt:"Sem descrição."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"}},r="atlantis:locale",l="shell:locale";function s(e){return"en"===e||"pt"===e}function d(){try{const e=localStorage.getItem(r);if(s(e))return e}catch{}return"en"}function c(){const[e,a]=(0,t.useState)(d),o=(0,t.useCallback)(e=>{a(e),function(e){try{localStorage.setItem(r,e)}catch{}(0,n.Is)(l,e).catch(()=>{})}(e),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,t.useEffect)(()=>{const e=e=>{const o=e.detail;a(o)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,t.useEffect)(()=>{(0,n.PL)(l).then(o=>{if(s(o)&&o!==e){try{localStorage.setItem(r,o)}catch{}a(o)}}).catch(()=>{})},[]),[e,o]}function p(e,a){const o=a?{...i,...a}:i;return(a,t)=>{const n=o[a]?.[e]??a;return t?Object.entries(t).reduce((e,[a,o])=>e.replace(new RegExp(`\\{${a}\\}`,"g"),String(o)),n):n}}function m(e,a){const o=Date.now()-new Date(e).getTime(),t=Math.floor(o/6e4);if(t<1)return a("time.justNow");if(t<60)return a("time.mAgo",{n:t});const n=Math.floor(t/60);return n<24?a("time.hAgo",{n}):a("time.dAgo",{n:Math.floor(n/24)})}function g(e,a){const o=Math.floor((Date.now()-e.getTime())/6e4);return o<1?a("time.justNow"):o<60?a("time.mAgo",{n:o}):a("time.hAgo",{n:Math.floor(o/60)})}(0,n.PL)(l).then(e=>{if(s(e))try{localStorage.setItem(r,e)}catch{}}).catch(()=>{});var u=o(3233);o(5723),u.default.div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,u.default.button`
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
`},4914(e,a,o){o.d(a,{FlyoutPanel:()=>h});var t=o(7359),n=o(3233),i=o(7207),r=o(255),l=o(217),s=o(5959),d=o(5185),c=o(5723);const p=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,m=n.default.div`
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
  animation: ${p} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
`,g=n.default.div`
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
`;function f({iconKey:e}){const a=e?d.t[e]??r.A:r.A;return(0,c.jsx)(a,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:a,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(t.Fragment,{children:(0,c.jsx)(x,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,c.jsxs)(u,{active:a===e.id,onClick:()=>o(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function h({activeId:e}){const{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:t}=(0,s.c)();if(!a)return null;const n=a.entry.icon?d.t[a.entry.icon]??r.A:r.A;return(0,c.jsxs)(m,{anchorY:a.anchorY,onMouseEnter:t,onMouseLeave:o,children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(n,{size:13,strokeWidth:2}),a.entry.name]}),(0,c.jsx)(x,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},5959(e,a,o){o.d(a,{I:()=>n,c:()=>i});var t=o(7359);const n=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,t.useContext)(n)},5185(e,a,o){o.d(a,{t:()=>ye});var t=o(9510),n=o(9038),i=o(7400),r=o(7561),l=o(8207),s=o(7902),d=o(6896),c=o(3013),p=o(2887),m=o(7901),g=o(9848),u=o(2164),f=o(3045),x=o(3775),h=o(3539),y=o(1783),w=o(9416),b=o(1837),z=o(7167),$=o(4494),v=o(2314),j=o(5751),k=o(255),A=o(9633),S=o(2946),M=o(822),T=o(6720),B=o(8456),P=o(3317),F=o(2709),R=o(9301),D=o(8006),C=o(3517),E=o(7032),_=o(6949),I=o(8218),L=o(6829),N=o(5553),H=o(9591),K=o(9923),Y=o(2820),G=o(4621),U=o(8479),V=o(2534),q=o(6673),O=o(7490),W=o(9033),J=o(5775),Z=o(1365),X=o(2937),Q=o(9821),ee=o(5912),ae=o(158),oe=o(8641),te=o(8607),ne=o(3249),ie=o(1821),re=o(5889),le=o(9655),se=o(7170),de=o(9161),ce=o(1849),pe=o(1604),me=o(3142),ge=o(1187),ue=o(7747),fe=o(2932),xe=o(4525),he=o(7230);const ye={activity:d.A,"a-large-small":s.A,apple:c.A,"arrow-right":p.A,"bar-chart-2":t.A,book:g.A,"book-open":m.A,briefcase:f.A,calendar:x.A,clock:y.A,"circle-dot":h.A,cloud:w.A,compass:b.A,cpu:z.A,droplets:$.A,feather:v.A,file:k.A,"file-text":j.A,folder:A.A,"git-branch":S.A,github:M.A,globe:T.A,grid:i.A,hand:B.A,hash:P.A,heart:F.A,key:D.A,hexagon:R.A,home:r.A,landmark:C.A,layers:l.A,"layout-grid":E.A,leaf:_.A,lightbulb:I.A,list:L.A,map:H.A,"map-pin":N.A,"message-circle":K.A,"message-square":Y.A,minus:G.A,monitor:U.A,mountain:V.A,package:q.A,palette:O.A,"pen-tool":W.A,"pie-chart":n.A,plane:J.A,plus:Z.A,ruler:X.A,shirt:Q.A,slash:ee.A,square:ae.A,star:oe.A,sun:te.A,terminal:ne.A,thermometer:ie.A,triangle:re.A,trophy:le.A,truck:se.A,type:de.A,users:ce.A,"volume-2":pe.A,watch:me.A,waves:ge.A,wind:ue.A,wrench:fe.A,x:xe.A,zap:he.A,bot:u.A}},9178(e,a,o){o.d(a,{wi:()=>L,pB:()=>K,PH:()=>H,KW:()=>N,PE:()=>M,PL:()=>I,Is:()=>_,w4:()=>t.w4});var t=o(217),n=o(7359),i=o(3233),r=o(5723);i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${t.w4.spacing.sm};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,i.default.div`
  position: relative;
`;var l=o(7207),s=o(3661),d=o(5959);const c="260px",p="56px",m=i.default.header`
  display: flex;
  align-items: center;
  height: calc(${"48px"} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,g=i.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,u=i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,f=l.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,x=i.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,h=i.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${f} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,y=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  padding-left: ${t.w4.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${t.w4.spacing.sm};
    color: ${t.w4.colors.border};
  }
`,w=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.w4.spacing.md};
  padding: 0 ${t.w4.spacing.lg};

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${t.w4.spacing.sm};
  }
`,b=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=i.default.div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,$=i.default.aside`
  width: ${({collapsed:e})=>e?p:c};
  min-width: ${({collapsed:e})=>e?p:c};
  background: ${t.w4.colors.sidebarBg};
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,v=i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,j=i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,k=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function A(){return(0,r.jsx)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:k.map((e,a)=>(0,r.jsx)(h,{index:a,accent:e.accent,children:e.char},a))})}const S="atlantis:sidebar-collapsed";function M({sidebar:e,children:a,topBarRight:t,title:i="Atlantis",activeId:l=null}){const[c,p]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(S)}catch{return!1}}),[f,x]=(0,n.useState)(null),h=(0,n.useRef)(),k=()=>p(e=>{const a=!e;try{localStorage.setItem(S,String(a))}catch{}return a}),M=n.useMemo(()=>n.lazy(()=>Promise.resolve().then(o.bind(o,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(d.I.Provider,{value:{collapsed:c,toggle:k,flyout:f,openFlyout:(e,a,o)=>{clearTimeout(h.current),x({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{h.current=setTimeout(()=>x(null),160)},cancelFlyoutClose:()=>clearTimeout(h.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(m,{children:[e&&(0,r.jsx)(g,{children:(0,r.jsx)(u,{onClick:k,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(s.A,{size:17})})}),(0,r.jsx)(A,{}),i&&(0,r.jsx)(y,{children:i}),t&&(0,r.jsx)(w,{children:t})]}),(0,r.jsxs)(b,{children:[null!=e&&(0,r.jsx)($,{collapsed:c,children:(0,r.jsx)(v,{children:e})}),(0,r.jsx)(j,{children:a})]}),f&&(0,r.jsx)(n.Suspense,{fallback:null,children:(0,r.jsx)(M,{activeId:l})})]})})}o(5185),i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.div`
  overflow: hidden;
`,i.default.div`
  padding-left: ${t.w4.spacing.md};
`,i.default.div`
  display: flex;
  flex-direction: column;
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w4.spacing.sm} ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":t.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${t.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w4.colors.sidebarText};
    background: ${t.w4.colors.sidebarHover};
  }
`,i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`;const T=l.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${T} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${t.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${t.w4.colors.surface};
  }
`,i.default.span`
  display: block;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${t.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${t.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${t.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${t.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,o(4914);var B=o(1920),P=o(8607),F=o(8479);i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
    border-color: ${t.w4.colors.accent};
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
`,B.A,P.A,F.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const R="documents",D="settings";function C(){return new Promise((e,a)=>{const o=indexedDB.open("atlantis-tools",2);o.onupgradeneeded=e=>{const a=e.target.result;a.objectStoreNames.contains(R)||a.createObjectStore(R,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),a.objectStoreNames.contains(D)||a.createObjectStore(D,{keyPath:"key"})},o.onsuccess=()=>e(o.result),o.onerror=()=>a(o.error)})}let E={async saveDoc(e,a,o){const t=await C(),n={appId:e,name:a,content:o,savedAt:Date.now()};return new Promise((e,a)=>{const o=t.transaction(R,"readwrite").objectStore(R).add(n);o.onsuccess=()=>e(String(o.result)),o.onerror=()=>a(o.error)})},async updateDoc(e,a,o){const t=await C();return new Promise((n,i)=>{const r=t.transaction(R,"readwrite").objectStore(R),l=r.get(Number(e));l.onsuccess=()=>{const e=l.result;if(!e)return void i(new Error("Doc not found"));const t=r.put({...e,name:a,content:o,savedAt:Date.now()});t.onsuccess=()=>n(),t.onerror=()=>i(t.error)},l.onerror=()=>i(l.error)})},async listDocs(e){const a=await C();return new Promise((o,t)=>{const n=a.transaction(R,"readonly").objectStore(R).index("appId").getAll(e);n.onsuccess=()=>o(n.result.map(e=>({...e,id:String(e.id)})).reverse()),n.onerror=()=>t(n.error)})},async deleteDoc(e){const a=await C();return new Promise((o,t)=>{const n=a.transaction(R,"readwrite").objectStore(R).delete(Number(e));n.onsuccess=()=>o(),n.onerror=()=>t(n.error)})},async putSetting(e,a){const o=await C();return new Promise((t,n)=>{const i=o.transaction(D,"readwrite").objectStore(D).put({key:e,value:a});i.onsuccess=()=>t(),i.onerror=()=>n(i.error)})},async getSetting(e){const a=await C();return new Promise((o,t)=>{const n=a.transaction(D,"readonly").objectStore(D).get(e);n.onsuccess=()=>o(n.result?n.result.value:null),n.onerror=()=>t(n.error)})}};function _(e,a){return E.putSetting(e,a)}function I(e){return E.getSetting(e)}i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,i.default.div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,i.default.div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,i.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,i.default.button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?t.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?t.w4.colors.danger:e?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,i.default.div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,i.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,i.default.div`
  position: relative;
`,i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    border-color: ${t.w4.colors.accent};
  }
`,i.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,i.default.div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
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
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
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
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${t.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,new Set([10751]),new Set([27]);const L=i.default.div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,N=i.default.section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,H=i.default.div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,K=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,i.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding-left: max(${t.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${t.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
  z-index: 100;
`,i.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,i.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,i.default.span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,i.default.div`
  flex: 1;
`;const Y=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,G=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,U=l.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${Y} 0.4s ease 0.15s both;
`,i.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,i.default.div`
  position: absolute;
  inset: 0;
  animation: ${G} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  background: ${t.w4.colors.border};
  animation: ${U} 1.4s ease-in-out infinite;
`,i.default.span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,i.default.nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${t.w4.spacing.sm} 0;
`,i.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${t.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${t.w4.spacing.xs} ${t.w4.spacing.md};
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
  border-radius: ${t.w4.borderRadius.md};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.sidebarText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
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
`},217(e,a,o){o.d(a,{w4:()=>n});const t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)"},n={colors:function(){const e={};for(const a of Object.keys(t))e[a]=`var(--at-${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},6010(e,a,o){o.d(a,{W:()=>ro});var t=o(9178),n=o(7359),i=o(3233),r=o(8641),l=o(8447),s=o(7207),d=o(5569),c=o(9421),p=o(894),m=o(5723);const g=s.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,u=s.keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,f=i.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  margin-bottom: ${t.w4.spacing.lg};
`,x=i.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  flex: 1;
`,h=i.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${g} 2.4s ease-in-out infinite;
`,y=i.default.h2`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.02em;
`,w=i.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,b=i.default.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${t.w4.colors.mainTextMuted};
  cursor: default;
  flex-shrink: 0;

  &:hover > span {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
`,z=i.default.span`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 6px 10px;
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainText};
  width: 500px;
  white-space: normal;
  line-height: 1.4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s, transform 0.15s;
`,$=i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.borderSubtle};
  border-radius: ${t.w4.borderRadius.sm};
  color: ${t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s;
  flex-shrink: 0;

  svg {
    animation: ${({spinning:e})=>e?u:"none"} 0.7s linear infinite;
  }

  &:hover {
    color: ${t.w4.colors.mainText};
    border-color: ${t.w4.colors.accent};
    background: ${t.w4.colors.surfaceRaised};
    box-shadow: 0 0 10px ${t.w4.colors.accentMuted};
  }
`;function v({title:e,color:a,description:o,lastUpdated:t,loading:n,onRefresh:i,t:r}){const l=t?r?(0,p.lw)(t,r):function(e){const a=Math.floor((Date.now()-e.getTime())/6e4);return a<1?"just now":a<60?`${a}m ago`:`${Math.floor(a/60)}h ago`}(t):null,s=l?r?r("updated",{age:l}):`updated ${l}`:null;return(0,m.jsxs)(f,{children:[(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{color:a}),(0,m.jsx)(y,{children:e}),o&&(0,m.jsxs)(b,{children:[(0,m.jsx)(d.A,{size:13}),(0,m.jsx)(z,{children:o})]})]}),s&&(0,m.jsx)(w,{children:s}),(0,m.jsx)($,{spinning:n,onClick:i,title:r?r("refresh"):"Refresh",children:(0,m.jsx)(c.A,{size:13})})]})}const j="#3fb950",k={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080","Jupyter Notebook":"#DA5B0B"},A=i.default.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${t.w4.spacing.md};

  @media (max-width: ${t.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`,S=i.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${t.w4.spacing.md};
  background: linear-gradient(168deg, ${j}0f 0%, ${t.w4.colors.surface} 44%, ${t.w4.colors.surface} 100%);
  border: 1px solid ${j}2e;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.25s, background 0.25s, transform 0.25s, box-shadow 0.25s;
  min-height: 120px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${j}, transparent);
    opacity: 0.45;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${j}66;
    background: linear-gradient(168deg, ${j}1a 0%, ${t.w4.colors.surfaceRaised} 44%, ${t.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${j}24, 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.9;
  }
`,M=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${t.w4.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,T=i.default.div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,B=i.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  margin-top: auto;
`,P=i.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  color: #d29922;
  font-family: ${t.w4.typography.fontFamilyMono};
`,F=i.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>k[e]??t.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,R=i.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
`,D=i.default.span`
  flex: 1;
`,C=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function E({t:e}){const a=`https://api.github.com/search/repositories?q=created:>${(0,l.VF)(7)}&sort=stars&order=desc&per_page=8`,{data:o,loading:t,lastUpdated:n,refresh:i}=(0,l.st)(a);return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:e("nav.livePulse"),color:j,lastUpdated:n,loading:t,onRefresh:i,t:e}),o?.items?.length?(0,m.jsx)(A,{children:o.items.map(a=>(0,m.jsxs)(S,{href:a.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(M,{title:a.full_name,children:a.full_name}),(0,m.jsx)(T,{children:a.description??e("noDescription")}),(0,m.jsxs)(B,{children:[a.language&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(F,{lang:a.language}),(0,m.jsx)(R,{children:a.language})]}),(0,m.jsx)(D,{}),(0,m.jsxs)(P,{children:[(0,m.jsx)(r.A,{size:12}),(0,l.Bz)(a.stargazers_count)]})]})]},a.id))}):(0,m.jsx)(C,{children:e(t?"livePulse.loading":"noData")})]})}var _=o(5046);const I="#bc8cff",L={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080"},N=i.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${t.w4.spacing.md};

  @media (max-width: ${t.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,H=i.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${t.w4.spacing.md};
  background: linear-gradient(168deg, ${I}10 0%, ${t.w4.colors.surface} 44%, ${t.w4.colors.surface} 100%);
  border: 1px solid ${I}2d;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.25s, background 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${I}, transparent);
    opacity: 0.45;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${I}66;
    background: linear-gradient(168deg, ${I}1c 0%, ${t.w4.colors.surfaceRaised} 44%, ${t.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${I}24, 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.9;
  }
`,K=i.default.div`
  display: flex;
  align-items: flex-start;
  gap: ${t.w4.spacing.sm};
  justify-content: space-between;
`,Y=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${I};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,G=i.default.div`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  white-space: nowrap;
  flex-shrink: 0;
`,U=i.default.div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,V=i.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,q=i.default.span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(188, 140, 255, 0.12);
  color: ${I};
  border-radius: 20px;
  border: 1px solid rgba(188, 140, 255, 0.25);
`,O=i.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  margin-top: auto;
`,W=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,J=(0,i.default)(W)`
  color: #d29922;
  font-weight: 600;
`,Z=i.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>L[e]??t.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,X=i.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
`,Q=i.default.span`
  flex: 1;
`,ee=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function ae({t:e}){const a=`https://api.github.com/search/repositories?q=created:>${(0,l.VF)(30)}+stars:50..500+fork:false&sort=stars&order=desc&per_page=8`,{data:o,loading:t,lastUpdated:n,refresh:i}=(0,l.st)(a);return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:e("nav.experimentZone"),color:I,lastUpdated:n,loading:t,onRefresh:i,t:e}),o?.items?.length?(0,m.jsx)(N,{children:o.items.map(a=>(0,m.jsxs)(H,{href:a.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsxs)(K,{children:[(0,m.jsx)(Y,{title:a.full_name,children:a.full_name}),(0,m.jsx)(G,{children:(0,p.aw)(a.created_at,e)})]}),(0,m.jsx)(U,{children:a.description??e("noDescription")}),a.topics.length>0&&(0,m.jsx)(V,{children:a.topics.slice(0,4).map(e=>(0,m.jsx)(q,{children:e},e))}),(0,m.jsxs)(O,{children:[a.language&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{lang:a.language}),(0,m.jsx)(X,{children:a.language})]}),(0,m.jsx)(Q,{}),(0,m.jsxs)(J,{children:[(0,m.jsx)(r.A,{size:12}),(0,l.Bz)(a.stargazers_count)]}),(0,m.jsxs)(W,{children:[(0,m.jsx)(_.A,{size:12}),(0,l.Bz)(a.forks_count)]})]})]},a.id))}):(0,m.jsx)(ee,{children:e(t?"experiment.loading":"noData")})]})}var oe=o(4368),te=o(2820);const ne="#d29922",ie=i.default.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,re=i.default.li``,le=i.default.a`
  display: flex;
  align-items: flex-start;
  gap: ${t.w4.spacing.sm};
  padding: 8px ${t.w4.spacing.sm};
  border: 1px solid ${ne}18;
  border-radius: ${t.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${ne}0a 0%, ${t.w4.colors.surface} 58%, ${t.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(165deg, ${ne}14 0%, ${t.w4.colors.surfaceRaised} 58%, ${t.w4.colors.surfaceRaised} 100%);
    border-color: ${ne}5a;
    transform: translateX(2px);
  }
`,se=i.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  min-width: 20px;
  text-align: right;
  flex-shrink: 0;
  padding-top: 1px;
`,de=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,ce=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  line-height: 1.4;
`,pe=i.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  font-size: 12px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,me=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${ne};
  font-weight: 600;
`,ge=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,ue=i.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fe=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function xe({t:e}){const{data:a,loading:o,lastUpdated:t,refresh:n}=(0,l.st)("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=12"),i=a?.hits??[];return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:e("nav.todayInTech"),color:ne,lastUpdated:t,loading:o,onRefresh:n,t:e}),i.length?(0,m.jsx)(ie,{children:i.map((e,a)=>{const o=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,m.jsx)(re,{children:(0,m.jsxs)(le,{href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsxs)(se,{children:[a+1,"."]}),(0,m.jsxs)(de,{children:[(0,m.jsx)(ce,{children:e.title}),(0,m.jsxs)(pe,{children:[(0,m.jsxs)(me,{children:[(0,m.jsx)(oe.A,{size:11}),e.points??0]}),(0,m.jsxs)(ge,{children:[(0,m.jsx)(te.A,{size:11}),e.num_comments??0]}),(0,m.jsx)(ue,{children:(0,l.FB)(e.url)})]})]})]})},e.objectID)})}):(0,m.jsx)(fe,{children:e(o?"todayInTech.loading":"todayInTech.empty")})]})}var he=o(2743);const ye="#58a6ff",we=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,be=i.default.a`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px ${t.w4.spacing.sm};
  border: 1px solid ${ye}18;
  border-radius: ${t.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${ye}0b 0%, ${t.w4.colors.surface} 55%, ${t.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(165deg, ${ye}14 0%, ${t.w4.colors.surfaceRaised} 55%, ${t.w4.colors.surfaceRaised} 100%);
    border-color: ${ye}5c;
    transform: translateX(2px);
  }
`,ze=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 6px;
`,$e=i.default.span`
  color: ${t.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 2px;
`,ve=i.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  font-size: 12px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,je=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${ye};
  font-weight: 600;
`,ke=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,Ae=i.default.span`
  color: ${t.w4.colors.mainTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Se=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`,Me=i.default.div`
  height: 1px;
  background: ${ye}2a;
  margin: 2px 0;
`;function Te({t:e}){const a=`https://hn.algolia.com/api/v1/search?query=AI+LLM+model+open+source&tags=story&hitsPerPage=8&numericFilters=created_at_i>${Math.floor((Date.now()-1728e5)/1e3)}`,{data:o,loading:t,lastUpdated:i,refresh:r}=(0,l.st)(a),s=o?.hits??[];return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:e("nav.aiRadar"),color:ye,lastUpdated:i,loading:t,onRefresh:r,t:e}),s.length?(0,m.jsx)(we,{children:s.map((a,o)=>{const t=a.url??`https://news.ycombinator.com/item?id=${a.objectID}`;return(0,m.jsxs)(n.Fragment,{children:[o>0&&(0,m.jsx)(Me,{}),(0,m.jsxs)(be,{href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsxs)(ze,{children:[(0,m.jsx)($e,{children:(0,m.jsx)(he.A,{size:12})}),a.title]}),(0,m.jsxs)(ve,{children:[(0,m.jsxs)(je,{children:[(0,m.jsx)(oe.A,{size:11}),a.points??0]}),(0,m.jsxs)(ke,{children:[(0,m.jsx)(te.A,{size:11}),a.num_comments??0]}),(0,m.jsx)(Ae,{children:(0,l.FB)(a.url)}),(0,m.jsx)("span",{style:{marginLeft:"auto"},children:(0,p.aw)(a.created_at,e)})]})]})]},a.objectID)})}):(0,m.jsx)(Se,{children:e(t?"aiRadar.loading":"aiRadar.empty")})]})}const Be="#ff6314",Pe=[{id:"webdev",label:"webdev",query:"web frontend css html"},{id:"javascript",label:"JavaScript",query:"javascript node npm"},{id:"rust",label:"Rust",query:"rust lang cargo"},{id:"python",label:"Python",query:"python django fastapi"},{id:"devops",label:"DevOps",query:"docker kubernetes devops cloud"}],Fe=i.default.div`
  display: flex;
  gap: 6px;
  margin-bottom: ${t.w4.spacing.lg};
  flex-wrap: wrap;
`,Re=i.default.button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?Be:t.w4.colors.border};
  background: ${({active:e})=>e?"rgba(255,99,20,0.15)":"transparent"};
  color: ${({active:e})=>e?Be:t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${t.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${Be};
    color: ${Be};
    background: rgba(255, 99, 20, 0.08);
  }
`,De=i.default.div`
  display: flex;
  flex-direction: column;
`,Ce=i.default.a`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 8px;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: background 0.12s, transform 0.2s;
  border-bottom: 1px solid ${t.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateX(2px);
  }
`,Ee=i.default.span`
  color: ${t.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 3px;
`,_e=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 0;
`,Ie=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  line-height: 1.45;
`,Le=i.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,Ne=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${Be};
  font-weight: 600;
`,He=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,Ke=i.default.span`
  color: ${t.w4.colors.mainTextMuted};
  opacity: 0.7;
`,Ye=i.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
`,Ge=i.default.span`
  margin-left: auto;
  white-space: nowrap;
`,Ue=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function Ve(){const[e,a]=(0,n.useState)(Pe[0]),o=Math.floor((Date.now()-2592e5)/1e3),t=`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(e.query)}&tags=story&hitsPerPage=10&numericFilters=created_at_i>${o}`,{data:i,loading:r,lastUpdated:s,refresh:d}=(0,l.st)(t),c=i?.hits??[];return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:"Community Feed",color:Be,description:"Top stories from Hacker News in the last 72 hours, filtered by dev topic.",lastUpdated:s,loading:r,onRefresh:d}),(0,m.jsx)(Fe,{children:Pe.map(o=>(0,m.jsx)(Re,{active:e.id===o.id,onClick:()=>a(o),children:o.label},o.id))}),c.length?(0,m.jsx)(De,{children:c.map(e=>{const a=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,m.jsxs)(Ce,{href:a,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(Ee,{children:(0,m.jsx)(he.A,{size:13})}),(0,m.jsxs)(_e,{children:[(0,m.jsx)(Ie,{children:e.title}),(0,m.jsxs)(Le,{children:[(0,m.jsxs)(Ne,{children:[(0,m.jsx)(oe.A,{size:11}),(0,l.aT)(e.points??0)," pts"]}),(0,m.jsxs)(He,{children:[(0,m.jsx)(te.A,{size:11}),e.num_comments??0]}),(0,m.jsxs)(Ke,{children:["by ",e.author]}),(0,m.jsx)(Ye,{children:(0,l.FB)(e.url)}),(0,m.jsx)(Ge,{children:(0,l.fF)(e.created_at)})]})]})]},e.objectID)})}):(0,m.jsx)(Ue,{children:r?"Loading stories...":"No stories in the last 72h"})]})}var qe=o(6673);const Oe="#f7c948",We=[{id:"react",label:"React",query:"react component"},{id:"cli",label:"CLI",query:"cli tool command"},{id:"typescript",label:"TypeScript",query:"typescript types"},{id:"testing",label:"Testing",query:"test jest vitest"},{id:"build",label:"Build",query:"bundler build vite webpack"}],Je=i.default.div`
  display: flex;
  gap: 6px;
  margin-bottom: ${t.w4.spacing.lg};
  flex-wrap: wrap;
`,Ze=i.default.button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?Oe:t.w4.colors.border};
  background: ${({active:e})=>e?"rgba(247,201,72,0.15)":"transparent"};
  color: ${({active:e})=>e?Oe:t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${t.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${Oe};
    color: ${Oe};
    background: rgba(247, 201, 72, 0.08);
  }
`,Xe=i.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${t.w4.spacing.md};

  @media (max-width: ${t.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Qe=i.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${t.w4.spacing.md};
  background: linear-gradient(168deg, ${Oe}0c 0%, ${t.w4.colors.surface} 44%, ${t.w4.colors.surface} 100%);
  border: 1px solid ${Oe}2e;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s, transform 0.25s, box-shadow 0.25s;
  min-height: 130px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${Oe}, transparent);
    opacity: 0.3;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${Oe}66;
    background: linear-gradient(168deg, ${Oe}18 0%, ${t.w4.colors.surfaceRaised} 44%, ${t.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${Oe}20, 0 8px 24px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.8;
  }
`,ea=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${Oe};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
`,aa=i.default.span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-weight: 400;
  flex-shrink: 0;
`,oa=i.default.div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,ta=i.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,na=i.default.span`
  font-size: 10px;
  padding: 2px 7px;
  background: rgba(247, 201, 72, 0.08);
  color: ${t.w4.colors.mainTextMuted};
  border-radius: 4px;
  border: 1px solid rgba(247, 201, 72, 0.15);
`,ia=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
`,ra=i.default.div`
  flex: 1;
  height: 3px;
  background: ${t.w4.colors.border};
  border-radius: 2px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({value:e})=>Math.round(100*e)}%;
    background: ${Oe};
    border-radius: 2px;
    opacity: 0.7;
  }
`,la=i.default.div`
  display: flex;
  gap: 6px;
  font-size: 10px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.mainTextMuted};
  opacity: 0.7;
`,sa=i.default.span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  white-space: nowrap;
  opacity: 0.6;
`,da=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function ca(){const[e,a]=(0,n.useState)(We[0]),o=`https://api.npms.io/v2/search?q=${encodeURIComponent(e.query)}&size=12`,{data:t,loading:i,lastUpdated:r,refresh:s}=(0,l.st)(o),d=t?.results??[];return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:"Package Radar",color:Oe,description:"Trending npm packages ranked by quality, popularity, and maintenance. Filtered by topic.",lastUpdated:r,loading:i,onRefresh:s}),(0,m.jsx)(Je,{children:We.map(o=>(0,m.jsx)(Ze,{active:e.id===o.id,onClick:()=>a(o),children:o.label},o.id))}),d.length?(0,m.jsx)(Xe,{children:d.map(({package:e,score:a})=>(0,m.jsxs)(Qe,{href:e.links.npm,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsxs)(ea,{title:e.name,children:[(0,m.jsx)(qe.A,{size:13}),e.name,(0,m.jsxs)(aa,{children:["v",e.version]})]}),(0,m.jsx)(oa,{children:e.description||"No description."}),e.keywords&&e.keywords.length>0&&(0,m.jsx)(ta,{children:e.keywords.slice(0,3).map(e=>(0,m.jsx)(na,{children:e},e))}),(0,m.jsxs)(ia,{children:[(0,m.jsxs)(sa,{children:["@",e.publisher.username]}),(0,m.jsx)(ra,{value:a.final,title:`Score: ${Math.round(100*a.final)}%`})]}),(0,m.jsxs)(la,{children:[(0,m.jsxs)("span",{title:"Quality",children:["Q:",Math.round(100*a.detail.quality),"%"]}),(0,m.jsxs)("span",{title:"Popularity",children:["P:",Math.round(100*a.detail.popularity),"%"]}),(0,m.jsxs)("span",{title:"Maintenance",children:["M:",Math.round(100*a.detail.maintenance),"%"]})]})]},e.name))}):(0,m.jsx)(da,{children:i?"Scanning npm registry...":"No packages found"})]})}const pa="#f97316",ma=["react","typescript","lodash","axios","express","next","vue","vite","tailwindcss","eslint","prettier","webpack"].join(","),ga=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ua=i.default.a`
  display: grid;
  grid-template-columns: 20px 120px 1fr 68px;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: 7px ${t.w4.spacing.sm};
  border: 1px solid ${pa}18;
  border-radius: ${t.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${pa}0a 0%, ${t.w4.colors.surface} 62%, ${t.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(165deg, ${pa}13 0%, ${t.w4.colors.surfaceRaised} 62%, ${t.w4.colors.surfaceRaised} 100%);
    border-color: ${pa}5a;
    transform: translateX(2px);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 20px 90px 1fr 60px;
  }
`,fa=i.default.span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  text-align: right;
`,xa=i.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${pa};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ha=i.default.div`
  height: 6px;
  background: ${t.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,ya=i.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: ${pa};
  border-radius: 3px;
  opacity: 0.75;
  transition: width 0.4s ease;
`,wa=i.default.span`
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.mainTextMuted};
  text-align: right;
  white-space: nowrap;
`,ba=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function za({t:e}){const a=`https://api.npmjs.org/downloads/point/last-week/${ma}`,{data:o,loading:t,lastUpdated:n,refresh:i}=(0,l.st)(a),r=o?Object.values(o).filter(e=>e.downloads>0).map(e=>({name:e.package,downloads:e.downloads})).sort((e,a)=>a.downloads-e.downloads):[],s=r[0]?.downloads??1;return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:e("nav.npmPulse"),color:pa,lastUpdated:n,loading:t,onRefresh:i,t:e}),r.length?(0,m.jsx)(ga,{children:r.map((a,o)=>{return(0,m.jsxs)(ua,{href:`https://www.npmjs.com/package/${a.name}`,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(fa,{children:o+1}),(0,m.jsx)(xa,{children:a.name}),(0,m.jsx)(ha,{children:(0,m.jsx)(ya,{pct:Math.round(a.downloads/s*100)})}),(0,m.jsxs)(wa,{children:[(t=a.downloads,t>=1e9?`${(t/1e9).toFixed(1)}B`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}k`:String(t))," ",e("perWeek")]})]},a.name);var t})}):(0,m.jsx)(ba,{children:e(t?"npm.loading":"noData")})]})}var $a=o(2709),va=o(602),ja=o(7901);const ka="#7c3aed",Aa=[{id:"webdev",label:"webdev"},{id:"ai",label:"AI"},{id:"typescript",label:"TS"},{id:"rust",label:"Rust"},{id:"devops",label:"DevOps"}],Sa=i.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${t.w4.spacing.md};

  @media (max-width: ${t.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Ma=i.default.div`
  display: flex;
  gap: 4px;
  margin-bottom: ${t.w4.spacing.md};
  flex-wrap: wrap;
`,Ta=i.default.button`
  padding: 4px 10px;
  font-size: ${t.w4.typography.fontSizeSm};
  border-radius: ${t.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?ka:t.w4.colors.border};
  background: ${({active:e})=>e?"rgba(124,58,237,0.12)":"transparent"};
  color: ${({active:e})=>e?ka:t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${t.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${ka};
    color: ${ka};
  }
`,Ba=i.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${t.w4.spacing.md};
  background: linear-gradient(168deg, ${ka}0c 0%, ${t.w4.colors.surface} 44%, ${t.w4.colors.surface} 100%);
  border: 1px solid ${ka}2d;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s, transform 0.25s, box-shadow 0.25s;
  min-height: 140px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${ka}, transparent);
    opacity: 0.3;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${ka}66;
    background: linear-gradient(168deg, ${ka}18 0%, ${t.w4.colors.surfaceRaised} 44%, ${t.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${ka}20, 0 8px 24px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.8;
  }
`,Pa=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Fa=i.default.div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,Ra=i.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,Da=i.default.span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(124,58,237,0.1);
  color: ${ka};
  border-radius: 20px;
  border: 1px solid rgba(124,58,237,0.2);
`,Ca=i.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  margin-top: auto;
  font-size: 12px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,Ea=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #e05252;
`,_a=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,Ia=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  opacity: 0.7;
`,La=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: auto;
`,Na=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function Ha(){const[e,a]=(0,n.useState)(Aa[0].id),o=`https://dev.to/api/articles?tag=${e}&top=7&per_page=8`,{data:t,loading:i,lastUpdated:r,refresh:s}=(0,l.st)(o),d=t??[];return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:"Tech Articles",color:ka,description:"Popular articles from Dev.to across frontend, AI, and systems topics.",lastUpdated:r,loading:i,onRefresh:s}),(0,m.jsx)(Ma,{children:Aa.map(o=>(0,m.jsxs)(Ta,{active:e===o.id,onClick:()=>a(o.id),children:["#",o.label]},o.id))}),d.length?(0,m.jsx)(Sa,{children:d.map(e=>(0,m.jsxs)(Ba,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(Pa,{children:e.title}),e.description&&(0,m.jsx)(Fa,{children:e.description}),e.tag_list.length>0&&(0,m.jsx)(Ra,{children:e.tag_list.slice(0,3).map(e=>(0,m.jsxs)(Da,{children:["#",e]},e))}),(0,m.jsxs)(Ca,{children:[(0,m.jsxs)(Ea,{children:[(0,m.jsx)($a.A,{size:11}),(0,l.aT)(e.public_reactions_count)]}),(0,m.jsxs)(_a,{children:[(0,m.jsx)(te.A,{size:11}),e.comments_count]}),(0,m.jsxs)(Ia,{children:[(0,m.jsx)(va.A,{size:10}),e.user.name]}),(0,m.jsxs)(La,{children:[(0,m.jsx)(ja.A,{size:11}),e.reading_time_minutes,"m"]})]})]},e.id))}):(0,m.jsx)(Na,{children:i?"Loading articles...":"No articles found"})]})}var Ka=o(140);const Ya="#f48024",Ga=[{id:"",label:"All"},{id:"javascript",label:"JS"},{id:"typescript",label:"TS"},{id:"python",label:"Python"},{id:"react",label:"React"}],Ua=i.default.div`
  display: flex;
  gap: 6px;
  margin-bottom: ${t.w4.spacing.lg};
  flex-wrap: wrap;
`,Va=i.default.button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?Ya:t.w4.colors.border};
  background: ${({active:e})=>e?"rgba(244,128,36,0.15)":"transparent"};
  color: ${({active:e})=>e?Ya:t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${t.w4.typography.fontFamilyMono};
  letter-spacing: 0.01em;

  &:hover {
    border-color: ${Ya};
    color: ${Ya};
    background: rgba(244, 128, 36, 0.08);
  }
`,qa=i.default.div`
  display: flex;
  flex-direction: column;
`,Oa=i.default.a`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 8px;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: background 0.12s, transform 0.2s;
  border-bottom: 1px solid ${t.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateX(2px);
  }
`,Wa=i.default.span`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${({answered:e})=>e?"rgba(63,185,80,0.5)":t.w4.colors.border};
  background: ${({answered:e})=>e?"rgba(35,134,54,0.15)":"transparent"};
  color: ${({answered:e})=>e?"#3fb950":t.w4.colors.mainTextMuted};
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`,Ja=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,Za=i.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  line-height: 1.45;
`,Xa=i.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  flex-wrap: wrap;
`,Qa=i.default.span`
  color: ${({negative:e})=>e?"#e05252":Ya};
  font-weight: 600;
`,eo=i.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  opacity: 0.7;
`,ao=i.default.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,oo=i.default.span`
  font-size: 10px;
  padding: 2px 6px;
  background: rgba(244, 128, 36, 0.08);
  color: ${t.w4.colors.mainTextMuted};
  border-radius: 4px;
  border: 1px solid rgba(244, 128, 36, 0.15);
  letter-spacing: 0.01em;
`,to=i.default.span`
  margin-left: auto;
  white-space: nowrap;
`,no=i.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function io(){const[e,a]=(0,n.useState)(""),o="https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow&pagesize=10&filter=default"+(e?`&tagged=${e}`:""),{data:t,loading:i,lastUpdated:r,refresh:s}=(0,l.st)(o),d=t?.items??[];return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{title:"Dev Pulse",color:Ya,description:"Hot questions from Stack Overflow sorted by activity, filterable by language or framework.",lastUpdated:r,loading:i,onRefresh:s}),(0,m.jsx)(Ua,{children:Ga.map(o=>(0,m.jsx)(Va,{active:e===o.id,onClick:()=>a(o.id),children:o.label},o.id))}),d.length?(0,m.jsx)(qa,{children:d.map(e=>{const a=new Date(1e3*e.creation_date).toISOString();return(0,m.jsxs)(Oa,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(Wa,{answered:e.is_answered,children:e.is_answered?"✓":"?"}),(0,m.jsxs)(Ja,{children:[(0,m.jsx)(Za,{children:(0,l.iT)(e.title)}),(0,m.jsxs)(Xa,{children:[(0,m.jsxs)(Qa,{negative:e.score<0,children:[e.score>0?"+":"",(0,l.aT)(e.score)," votes"]}),(0,m.jsxs)("span",{children:[e.answer_count," ans"]}),(0,m.jsxs)(eo,{children:[(0,m.jsx)(Ka.A,{size:10}),(0,l.aT)(e.view_count)]}),(0,m.jsx)(ao,{children:e.tags.slice(0,3).map(e=>(0,m.jsx)(oo,{children:e},e))}),(0,m.jsx)(to,{children:(0,l.fF)(a)})]})]})]},e.question_id)})}):(0,m.jsx)(no,{children:i?"Fetching hot questions...":"No questions found"})]})}function ro({category:e,t:a}){return(0,m.jsxs)(t.wi,{children:["github"===e&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.KW,{id:"live-pulse",children:(0,m.jsx)(t.PH,{children:(0,m.jsx)(E,{t:a})})}),(0,m.jsx)(t.KW,{id:"experiment-zone",children:(0,m.jsx)(t.PH,{children:(0,m.jsx)(ae,{t:a})})})]}),"hackernews"===e&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(t.pB,{children:[(0,m.jsx)(t.KW,{id:"today-in-tech",children:(0,m.jsx)(t.PH,{style:{height:"100%"},children:(0,m.jsx)(xe,{t:a})})}),(0,m.jsx)(t.KW,{id:"ai-radar",children:(0,m.jsx)(t.PH,{style:{height:"100%"},children:(0,m.jsx)(Te,{t:a})})})]}),(0,m.jsx)(t.KW,{id:"community-feed",children:(0,m.jsx)(t.PH,{children:(0,m.jsx)(Ve,{})})})]}),"packages"===e&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.KW,{id:"package-radar",children:(0,m.jsx)(t.PH,{children:(0,m.jsx)(ca,{})})}),(0,m.jsx)(t.KW,{id:"npm-trends",children:(0,m.jsx)(t.PH,{children:(0,m.jsx)(za,{t:a})})})]}),"devcommunity"===e&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.KW,{id:"tech-articles",children:(0,m.jsx)(t.PH,{children:(0,m.jsx)(Ha,{})})}),(0,m.jsx)(t.KW,{id:"dev-pulse",children:(0,m.jsx)(t.PH,{children:(0,m.jsx)(io,{})})})]})]})}},8283(e,a,o){o.d(a,{A:()=>se});var t=o(7359),n=o(3233),i=o(7207),r=o(7230),l=o(8641),s=o(2743),d=o(9753),c=o(9178),p=o(8447),m=o(5723);const g=i.keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,u=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,f=n.default.div`
  display: grid;
  grid-template-columns: 100px 1fr 52px;
  align-items: center;
  gap: ${c.w4.spacing.sm};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 80px 1fr 44px;
  }
`,x=n.default.span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,h=n.default.div`
  height: 18px;
  background: ${c.w4.colors.codeBg};
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`,y=n.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, ${({color:e})=>e}66, ${({color:e})=>e});
  border-radius: 3px;
  transform-origin: left center;
  animation: ${g} 0.6s ease forwards;
  animation-delay: ${({delay:e})=>e}s;
  box-shadow: 0 0 8px ${({color:e})=>e}44;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 6px ${({color:e})=>e};
  }
`,w=n.default.span`
  font-size: 12px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 600;
  color: ${({color:e})=>e};
  text-align: right;
`;function b({bars:e}){const a=Math.max(...e.map(e=>e.value),1);return(0,m.jsx)(u,{children:e.map((e,o)=>(0,m.jsxs)(f,{children:[(0,m.jsx)(x,{children:e.label}),(0,m.jsx)(h,{children:(0,m.jsx)(y,{pct:Math.round(e.value/a*100),color:e.color,delay:.1*o})}),(0,m.jsx)(w,{color:e.color,children:e.value})]},e.label))})}const z=[{id:"github",label:"GitHub",color:"#3fb950",panels:["live-pulse","experiment-zone"],desc:"Trending repos & rising projects"},{id:"hackernews",label:"Hacker News",color:"#ff6600",panels:["today-in-tech","ai-radar","community-feed"],desc:"Front page, AI & community"},{id:"packages",label:"Packages",color:"#cb3837",panels:["package-radar","npm-trends"],desc:"npm search & download stats"},{id:"devcommunity",label:"Dev Community",color:"#7c3aed",panels:["tech-articles","dev-pulse"],desc:"Articles & hot questions"}],$=i.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,v=i.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`,j=(i.keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,n.default.div`
  padding: 0 ${c.w4.spacing.xl} ${c.w4.spacing.xxl};
  max-width: 1100px;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  margin: 0 auto;

  @media (max-width: ${c.w4.breakpoints.md}) {
    padding: 0 ${c.w4.spacing.md} ${c.w4.spacing.xl};
  }
`),k=n.default.header`
  text-align: center;
  padding: ${c.w4.spacing.xxl} 0 ${c.w4.spacing.lg};
  margin-bottom: ${c.w4.spacing.lg};
  animation: ${v} 0.6s ease;
  position: relative;
`,A=n.default.div`
  font-size: 10px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${c.w4.spacing.sm};
`,S=n.default.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 2px;
  line-height: 1;
  background: linear-gradient(135deg, ${c.w4.colors.mainText} 0%, ${c.w4.colors.accent} 50%, ${c.w4.colors.mainText} 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${c.w4.breakpoints.md}) {
    font-size: 28px;
  }
`,M=n.default.div`
  height: 3px;
  background: linear-gradient(90deg, transparent, ${c.w4.colors.border}, ${c.w4.colors.accent}40, ${c.w4.colors.border}, transparent);
  margin: ${c.w4.spacing.md} 0;
`,T=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${c.w4.spacing.lg};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  flex-wrap: wrap;
`,B=n.default.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(63, 185, 80, 0.08);
  border: 1px solid rgba(63, 185, 80, 0.25);
  border-radius: 20px;
  color: #3fb950;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
`,P=n.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3fb950;
  animation: ${$} 2s ease-in-out infinite;
  box-shadow: 0 0 6px #3fb95080;
`,F=n.default.div`
  height: 1px;
  background: ${c.w4.colors.border};
  margin: ${c.w4.spacing.lg} 0;
`,R=n.default.section`
  animation: ${v} 0.5s ease both;
  animation-delay: ${({delay:e})=>.12*(e??0)}s;
`,D=n.default.div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};
`,C=n.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  box-shadow: 0 0 8px ${({color:e})=>e}60;
  flex-shrink: 0;
`,E=n.default.span`
  font-size: 10px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e??c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
`,_=n.default.span`
  flex: 1;
  height: 1px;
  background: ${c.w4.colors.border};
`,I=n.default.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: ${c.w4.spacing.lg};
  margin-bottom: ${c.w4.spacing.lg};

  @media (max-width: ${c.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,L=n.default.div`
  background: linear-gradient(180deg, transparent, ${c.w4.colors.border}, transparent);

  @media (max-width: ${c.w4.breakpoints.lg}) {
    display: none;
  }
`,N=n.default.a`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  padding: ${c.w4.spacing.lg};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  text-decoration: none;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3fb950, transparent);
    opacity: 0.5;
  }

  &:hover {
    border-color: #3fb95044;
    transform: translateY(-2px);
    box-shadow: 0 0 20px #3fb95015, 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`,H=n.default.div`
  font-size: 9px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: #3fb950;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  display: flex;
  align-items: center;
  gap: 6px;
`,K=n.default.div`
  font-size: 22px;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
  font-family: ${c.w4.typography.fontFamilyMono};
`,Y=n.default.div`
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.65;
  flex: 1;
`,G=n.default.div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.md};
  font-size: 12px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: auto;
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,U=n.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #d29922;
  font-weight: 600;
`,V=n.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,q=n.default.div`
  display: flex;
  flex-direction: column;
`,O=n.default.a`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 11px 0;
  text-decoration: none;
  border-bottom: 1px solid ${c.w4.colors.border}80;
  transition: background 0.15s, padding-left 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    padding-left: 6px;
  }
`,W=n.default.span`
  font-size: 18px;
  font-weight: 800;
  color: #ff660030;
  font-family: ${c.w4.typography.fontFamilyMono};
  min-width: 24px;
  text-align: right;
  flex-shrink: 0;
  line-height: 1;
`,J=n.default.div`
  flex: 1;
  min-width: 0;
`,Z=n.default.div`
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainText};
  line-height: 1.4;
  margin-bottom: 3px;
`,X=n.default.div`
  font-size: 10px;
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamilyMono};
  display: flex;
  align-items: center;
  gap: 8px;
`,Q=n.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.xl};

  @media (max-width: ${c.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ee=n.default.button`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg} ${c.w4.spacing.md};
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({accentColor:e})=>e};
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${({accentColor:e})=>e}50;
    transform: translateY(-3px);
    box-shadow: 0 0 20px ${({accentColor:e})=>e}18, 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  &:hover::before {
    opacity: 1;
  }
`,ae=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
`,oe=n.default.div`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,te=n.default.div`
  font-size: 20px;
  font-weight: 800;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e};
  opacity: 0.7;
`,ne=n.default.div`
  font-size: 12px;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: ${c.w4.spacing.xs};
`,ie=n.default.div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding-top: ${c.w4.spacing.sm};
  opacity: 0.8;
  transition: transform 0.2s;

  button:hover > & {
    transform: translateX(3px);
  }
`,re=n.default.div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  margin-bottom: ${c.w4.spacing.lg};
`,le=n.default.div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.mainTextMuted};
  font-size: ${c.w4.typography.fontSizeSm};
  min-height: 180px;
  font-family: ${c.w4.typography.fontFamilyMono};
  letter-spacing: 0.04em;

  &::before {
    content: '//  ';
    opacity: 0.3;
  }
`;function se({onNavigate:e,t:a}){const o=`https://api.github.com/search/repositories?q=created:>${(0,p.VF)(7)}&sort=stars&order=desc&per_page=1`,{data:n}=(0,p.st)(o),{data:i}=(0,p.st)("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=6"),g=n?.items?.[0]??null,u=i?.hits??[],[f,x]=(0,t.useState)({});(0,t.useEffect)(()=>{Promise.all(["live-pulse","experiment-zone","today-in-tech","ai-radar","community-feed","package-radar","npm-trends","tech-articles","dev-pulse"].map(e=>(0,c.PL)(`ts:count:${e}`).then(a=>[e,Number(a??0)]))).then(e=>x(Object.fromEntries(e)))},[]);const h=e=>e.reduce((e,a)=>e+(f[a]??0),0),y=z.map(e=>({label:e.label,value:h(e.panels),color:e.color})),w=(new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),$=z.reduce((e,a)=>e+a.panels.length,0),v=y.some(e=>e.value>0);return(0,m.jsxs)(j,{children:[(0,m.jsxs)(k,{children:[(0,m.jsx)(A,{children:a("journal.title")}),(0,m.jsx)(S,{children:"TechScope"}),(0,m.jsx)(M,{}),(0,m.jsxs)(T,{children:[(0,m.jsx)("span",{children:w}),(0,m.jsx)("span",{children:"·"}),(0,m.jsxs)(B,{children:[(0,m.jsx)(P,{}),a("journal.live")," — ",$," ",a("journal.feedsActive")]})]})]}),(0,m.jsx)(R,{delay:1,children:(0,m.jsxs)(I,{children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)(D,{children:[(0,m.jsx)(C,{color:"#3fb950"}),(0,m.jsx)(E,{color:"#3fb950",children:a("journal.headline")}),(0,m.jsx)(_,{})]}),g?(0,m.jsxs)(N,{href:g.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsxs)(H,{children:[(0,m.jsx)(r.A,{size:10})," Trending this week"]}),(0,m.jsx)(K,{children:g.full_name}),(0,m.jsx)(Y,{children:g.description??a("noDescription")}),(0,m.jsxs)(G,{children:[(0,m.jsxs)(U,{children:[(0,m.jsx)(l.A,{size:12}),(0,p.Bz)(g.stargazers_count)]}),g.language&&(0,m.jsx)(V,{children:g.language}),(0,m.jsx)(s.A,{size:10,style:{marginLeft:"auto",opacity:.4}})]})]}):(0,m.jsx)(le,{children:a("livePulse.loading")})]}),(0,m.jsx)(L,{}),(0,m.jsxs)(q,{children:[(0,m.jsxs)(D,{children:[(0,m.jsx)(C,{color:"#ff6600"}),(0,m.jsx)(E,{color:"#ff6600",children:a("journal.topStories")}),(0,m.jsx)(_,{})]}),u.length>0?u.map((e,a)=>{const o=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,m.jsxs)(O,{index:a,href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(W,{children:a+1}),(0,m.jsxs)(J,{children:[(0,m.jsx)(Z,{children:e.title}),(0,m.jsxs)(X,{children:[(0,m.jsxs)("span",{style:{color:"#ff6600",fontWeight:600},children:[e.points??0," pts"]}),(0,m.jsxs)("span",{children:[e.num_comments??0," comments"]}),(0,m.jsx)("span",{style:{opacity:.5},children:(0,p.FB)(e.url)})]})]})]},e.objectID)}):(0,m.jsx)(le,{children:a("todayInTech.loading")})]})]})}),(0,m.jsx)(F,{}),(0,m.jsxs)(R,{delay:2,children:[(0,m.jsxs)(D,{children:[(0,m.jsx)(C,{color:c.w4.colors.accent}),(0,m.jsx)(E,{children:a("journal.categories")}),(0,m.jsx)(_,{})]}),(0,m.jsx)(Q,{children:z.map(a=>{const o=h(a.panels);return(0,m.jsxs)(ee,{accentColor:a.color,onClick:()=>e(a.id),children:[(0,m.jsxs)(ae,{children:[(0,m.jsx)(oe,{children:a.label}),(0,m.jsx)(te,{color:a.color,children:o||""})]}),(0,m.jsx)(ne,{children:a.desc}),(0,m.jsxs)(ie,{color:a.color,children:[a.panels.length," feeds ",(0,m.jsx)(d.A,{size:12})]})]},a.id)})})]}),v&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(F,{}),(0,m.jsxs)(R,{delay:3,children:[(0,m.jsxs)(D,{children:[(0,m.jsx)(C,{color:c.w4.colors.accent}),(0,m.jsx)(E,{children:a("journal.activity")}),(0,m.jsx)(_,{})]}),(0,m.jsx)(re,{children:(0,m.jsx)(b,{bars:y})})]})]})]})}},8447(e,a,o){o.d(a,{Bz:()=>l,FB:()=>m,VF:()=>p,aT:()=>s,fF:()=>d,iT:()=>c,st:()=>r});var t=o(7359);o(9178);const n=new Map,i=18e4;function r(e,a=3e5){const o=n.get(e),r=o&&Date.now()-o.timestamp<i,[l,s]=(0,t.useState)(r?o.data:null),[d,c]=(0,t.useState)(!r),[p,m]=(0,t.useState)(null),[g,u]=(0,t.useState)(r?new Date(o.timestamp):null),f=(0,t.useCallback)(async()=>{try{const a=await fetch(e);if(!a.ok)throw new Error(`HTTP ${a.status}`);const o=await a.json();s(o),u(new Date),m(null),n.set(e,{data:o,timestamp:Date.now()})}catch(e){m(e instanceof Error?e.message:"Failed to fetch")}finally{c(!1)}},[e]);return(0,t.useEffect)(()=>{const o=n.get(e);o&&Date.now()-o.timestamp<i?(s(o.data),u(new Date(o.timestamp)),c(!1)):f();const t=setInterval(f,a);return()=>clearInterval(t)},[f,a,e]),{data:l,loading:d,error:p,lastUpdated:g,refresh:f}}function l(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function s(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function d(e){const a=Date.now()-new Date(e).getTime(),o=Math.floor(a/6e4);if(o<1)return"just now";if(o<60)return`${o}m ago`;const t=Math.floor(o/60);return t<24?`${t}h ago`:`${Math.floor(t/24)}d ago`}function c(e){const a=document.createElement("textarea");return a.innerHTML=e,a.value}function p(e){const a=new Date;return a.setDate(a.getDate()-e),a.toISOString().split("T")[0]}function m(e){if(!e)return"news.ycombinator.com";try{return new URL(e).hostname.replace(/^www\./,"")}catch{return""}}},8887(e,a,o){o.d(a,{A:()=>t});const t={"nav.journal":{en:"Journal",pt:"Jornal"},"nav.github":{en:"GitHub",pt:"GitHub"},"nav.hackernews":{en:"Hacker News",pt:"Hacker News"},"nav.packages":{en:"Packages",pt:"Packages"},"nav.devCommunity":{en:"Dev Community",pt:"Comunidade Dev"},"nav.livePulse":{en:"Live Pulse",pt:"Pulso ao Vivo"},"nav.aiRadar":{en:"AI Radar",pt:"Radar IA"},"nav.todayInTech":{en:"Today in Tech",pt:"Hoje em Tech"},"nav.experimentZone":{en:"Experiment Zone",pt:"Zona Experimental"},"nav.npmPulse":{en:"npm Pulse",pt:"Pulso npm"},"nav.packageRadar":{en:"Package Radar",pt:"Radar de Packages"},"nav.communityFeed":{en:"Community Feed",pt:"Feed da Comunidade"},"nav.devPulse":{en:"Dev Pulse",pt:"Pulso Dev"},"nav.techArticles":{en:"Tech Articles",pt:"Artigos Tech"},"journal.title":{en:"Internet Control Panel",pt:"Painel de Controlo da Internet"},"journal.activity":{en:"Activity Overview",pt:"Visão Geral de Atividade"},"journal.headline":{en:"Headline",pt:"Destaque"},"journal.topStories":{en:"Top Stories",pt:"Principais Notícias"},"journal.categories":{en:"Categories",pt:"Categorias"},"journal.items":{en:"items",pt:"itens"},"journal.feedsActive":{en:"feeds active",pt:"feeds ativos"},"journal.open":{en:"Open",pt:"Abrir"},"journal.live":{en:"LIVE",pt:"AO VIVO"},"livePulse.loading":{en:"Loading trending repos...",pt:"A carregar repos em destaque..."},"aiRadar.loading":{en:"Scanning AI activity...",pt:"A analisar atividade IA..."},"aiRadar.empty":{en:"No AI stories in the last 48h",pt:"Sem artigos IA nas últimas 48h"},"todayInTech.loading":{en:"Loading front page...",pt:"A carregar primeira página..."},"todayInTech.empty":{en:"No stories available",pt:"Sem artigos disponíveis"},"experiment.loading":{en:"Scanning experimental repos...",pt:"A procurar repos experimentais..."},"npm.loading":{en:"Fetching download stats...",pt:"A obter estatísticas..."}}}}]);
//# sourceMappingURL=138.609e5e221aa00158e90c.js.map