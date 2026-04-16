"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[439],{894(e,a,o){o.d(a,{Nx:()=>m,lw:()=>u,aw:()=>g,Ym:()=>c});var n=o(7359),t=o(5723);const i={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"há {n}m"},"time.hAgo":{en:"{n}h ago",pt:"há {n}h"},"time.dAgo":{en:"{n}d ago",pt:"há {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados disponíveis"},noDescription:{en:"No description provided.",pt:"Sem descrição."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"}},r="atlantis:locale",l="shell:locale";function s(e){return"en"===e||"pt"===e}function d(){try{const e=localStorage.getItem(r);if(s(e))return e}catch{}return"en"}function c(){const[e,a]=(0,n.useState)(d),o=(0,n.useCallback)(e=>{a(e),function(e){try{localStorage.setItem(r,e)}catch{}(0,t.Is)(l,e).catch(()=>{})}(e),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,n.useEffect)(()=>{const e=e=>{const o=e.detail;a(o)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,n.useEffect)(()=>{(0,t.PL)(l).then(o=>{if(s(o)&&o!==e){try{localStorage.setItem(r,o)}catch{}a(o)}}).catch(()=>{})},[]),[e,o]}function m(e,a){const o=a?{...i,...a}:i;return(a,n)=>{const t=o[a]?.[e]??a;return n?Object.entries(n).reduce((e,[a,o])=>e.replace(new RegExp(`\\{${a}\\}`,"g"),String(o)),t):t}}function g(e,a){const o=Date.now()-new Date(e).getTime(),n=Math.floor(o/6e4);if(n<1)return a("time.justNow");if(n<60)return a("time.mAgo",{n});const t=Math.floor(n/60);return t<24?a("time.hAgo",{n:t}):a("time.dAgo",{n:Math.floor(t/24)})}function u(e,a){const o=Math.floor((Date.now()-e.getTime())/6e4);return o<1?a("time.justNow"):o<60?a("time.mAgo",{n:o}):a("time.hAgo",{n:Math.floor(o/60)})}(0,t.PL)(l).then(e=>{if(s(e))try{localStorage.setItem(r,e)}catch{}}).catch(()=>{});var p=o(3233);o(8104),p.default.div`
  display: flex;
  gap: 4px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 2px;
`,p.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${t.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?t.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainText};
  }
`},4914(e,a,o){o.d(a,{FlyoutPanel:()=>y});var n=o(7359),t=o(3233),i=o(7207),r=o(255),l=o(217),s=o(5959),d=o(5185),c=o(8104);const m=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=t.default.div`
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
`;function f({iconKey:e}){const a=e?d.t[e]??r.A:r.A;return(0,c.jsx)(a,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:a,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(h,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,c.jsxs)(p,{active:a===e.id,onClick:()=>o(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function y({activeId:e}){const{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,s.c)();if(!a)return null;const t=a.entry.icon?d.t[a.entry.icon]??r.A:r.A;return(0,c.jsxs)(g,{anchorY:a.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(t,{size:13,strokeWidth:2}),a.entry.name]}),(0,c.jsx)(h,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},5959(e,a,o){o.d(a,{I:()=>t,c:()=>i});var n=o(7359);const t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},5185(e,a,o){o.d(a,{t:()=>V});var n=o(9510),t=o(9038),i=o(8207),r=o(6896),l=o(7901),s=o(9848),d=o(2164),c=o(3775),m=o(3539),g=o(1783),u=o(1837),p=o(2314),f=o(5751),h=o(255),y=o(9633),x=o(2946),b=o(822),w=o(6720),z=o(3317),$=o(2709),v=o(3517),A=o(7032),k=o(6949),j=o(8218),S=o(6829),M=o(5553),T=o(9591),B=o(2820),P=o(4621),R=o(6673),E=o(9033),F=o(1365),C=o(5912),D=o(8641),I=o(3249),L=o(1821),N=o(9161),_=o(1849),K=o(7747),H=o(2932),G=o(4525),Y=o(7230);const V={activity:r.A,"bar-chart-2":n.A,book:s.A,"book-open":l.A,calendar:c.A,clock:g.A,"circle-dot":m.A,feather:p.A,"file-text":f.A,globe:w.A,hash:z.A,heart:$.A,landmark:v.A,layers:i.A,leaf:k.A,map:T.A,package:R.A,compass:u.A,"git-branch":x.A,github:b.A,minus:P.A,terminal:I.A,thermometer:L.A,users:_.A,wind:K.A,"pie-chart":t.A,plus:F.A,slash:C.A,star:D.A,zap:Y.A,bot:d.A,lightbulb:j.A,"message-square":B.A,wrench:H.A,x:G.A,"layout-grid":A.A,list:S.A,file:h.A,folder:y.A,"map-pin":M.A,"pen-tool":E.A,type:N.A}},5723(e,a,o){o.d(a,{wi:()=>ae,pB:()=>te,PH:()=>ne,KW:()=>oe,NI:()=>ee,PL:()=>Q,Is:()=>q,w4:()=>n.w4});var n=o(217),t=o(7359),i=o(3233),r=o(8104);i.default.button`
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
`,i.default.div`
  position: relative;
`;var l=o(7207),s=o(3661),d=o(5959);const c="260px",m="56px",g=i.default.header`
  display: flex;
  align-items: center;
  height: calc(${"48px"} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,u=i.default.div`
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,p=i.default.button`
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
`,f=l.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,h=i.default.button`
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
`,y=i.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${f} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,x=i.default.div`
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
`,b=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w4.spacing.sm};
  padding: 0 ${n.w4.spacing.lg};
`,w=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=i.default.div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,$=i.default.aside`
  width: ${({collapsed:e})=>e?m:c};
  min-width: ${({collapsed:e})=>e?m:c};
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
`,v=i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,A=i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,k=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function j(){return(0,r.jsx)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:k.map((e,a)=>(0,r.jsx)(y,{index:a,accent:e.accent,children:e.char},a))})}const S="atlantis:sidebar-collapsed";function M({sidebar:e,children:a,topBarRight:n,title:i="Atlantis",activeId:l=null}){const[c,m]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(S)}catch{return!1}}),[f,h]=(0,t.useState)(null),y=(0,t.useRef)(),k=()=>m(e=>{const a=!e;try{localStorage.setItem(S,String(a))}catch{}return a}),M=t.useMemo(()=>t.lazy(()=>Promise.resolve().then(o.bind(o,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(d.I.Provider,{value:{collapsed:c,toggle:k,flyout:f,openFlyout:(e,a,o)=>{clearTimeout(y.current),h({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{y.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(y.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(g,{children:[e&&(0,r.jsx)(u,{children:(0,r.jsx)(p,{onClick:k,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(s.A,{size:17})})}),(0,r.jsx)(j,{}),i&&(0,r.jsx)(x,{children:i}),n&&(0,r.jsx)(b,{children:n})]}),(0,r.jsxs)(w,{children:[null!=e&&(0,r.jsx)($,{collapsed:c,children:(0,r.jsx)(v,{children:e})}),(0,r.jsx)(A,{children:a})]}),f&&(0,r.jsx)(t.Suspense,{fallback:null,children:(0,r.jsx)(M,{activeId:l})})]})})}var T=o(255),B=o(9753),P=o(5185);const R=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,E=i.default.div`
  overflow: hidden;
`,F=i.default.div`
  padding-left: ${n.w4.spacing.md};
`,C=i.default.div`
  display: flex;
  flex-direction: column;
`,D=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${n.w4.spacing.sm} ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":n.w4.spacing.sm};
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
`,I=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,L=i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,N=i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,_=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }
`;function K({iconKey:e,size:a=16}){if(e&&!(e in P.t))return(0,r.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});const o=e?P.t[e]??T.A:T.A;return(0,r.jsx)(o,{size:a,strokeWidth:1.75})}function H({entry:e,activeId:a,onSelect:o}){const[n,i]=(0,t.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:m}=(0,d.c)();return e.children&&e.children.length>0?(0,r.jsxs)(C,{children:[(0,r.jsxs)(D,{collapsed:l,onClick:()=>{l||i(e=>!e)},onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();s(e,n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsxs)(I,{collapsed:l,children:[(0,r.jsx)(K,{iconKey:e.icon,size:16}),(0,r.jsx)(L,{collapsed:l,children:e.name})]}),(0,r.jsx)(N,{open:n,collapsed:l,children:(0,r.jsx)(B.A,{size:13})})]}),(0,r.jsx)(R,{open:n&&!l,children:(0,r.jsx)(E,{children:(0,r.jsx)(F,{children:e.children.map(e=>(0,r.jsx)(H,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,r.jsxs)(_,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsx)(K,{iconKey:e.icon,size:15}),(0,r.jsx)(L,{collapsed:l,children:e.name})]})}function G({entries:e,activeId:a,onSelect:o}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(H,{entry:e,activeId:a,onSelect:o},e.id))})}const Y=l.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${Y} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,i.default.span`
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
`,o(4914);var V=o(1920),U=o(8607),O=o(8479);i.default.button`
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
`,V.A,U.A,O.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const J="documents",Z="settings";function W(){return new Promise((e,a)=>{const o=indexedDB.open("atlantis-tools",2);o.onupgradeneeded=e=>{const a=e.target.result;a.objectStoreNames.contains(J)||a.createObjectStore(J,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),a.objectStoreNames.contains(Z)||a.createObjectStore(Z,{keyPath:"key"})},o.onsuccess=()=>e(o.result),o.onerror=()=>a(o.error)})}let X={async saveDoc(e,a,o){const n=await W(),t={appId:e,name:a,content:o,savedAt:Date.now()};return new Promise((e,a)=>{const o=n.transaction(J,"readwrite").objectStore(J).add(t);o.onsuccess=()=>e(String(o.result)),o.onerror=()=>a(o.error)})},async updateDoc(e,a,o){const n=await W();return new Promise((t,i)=>{const r=n.transaction(J,"readwrite").objectStore(J),l=r.get(Number(e));l.onsuccess=()=>{const e=l.result;if(!e)return void i(new Error("Doc not found"));const n=r.put({...e,name:a,content:o,savedAt:Date.now()});n.onsuccess=()=>t(),n.onerror=()=>i(n.error)},l.onerror=()=>i(l.error)})},async listDocs(e){const a=await W();return new Promise((o,n)=>{const t=a.transaction(J,"readonly").objectStore(J).index("appId").getAll(e);t.onsuccess=()=>o(t.result.map(e=>({...e,id:String(e.id)})).reverse()),t.onerror=()=>n(t.error)})},async deleteDoc(e){const a=await W();return new Promise((o,n)=>{const t=a.transaction(J,"readwrite").objectStore(J).delete(Number(e));t.onsuccess=()=>o(),t.onerror=()=>n(t.error)})},async putSetting(e,a){const o=await W();return new Promise((n,t)=>{const i=o.transaction(Z,"readwrite").objectStore(Z).put({key:e,value:a});i.onsuccess=()=>n(),i.onerror=()=>t(i.error)})},async getSetting(e){const a=await W();return new Promise((o,n)=>{const t=a.transaction(Z,"readonly").objectStore(Z).get(e);t.onsuccess=()=>o(t.result?t.result.value:null),t.onerror=()=>n(t.error)})}};function q(e,a){return X.putSetting(e,a)}function Q(e){return X.getSetting(e)}function ee({title:e,sections:a,topBarRight:o,children:n}){const[i,l]=(0,t.useState)(null),s=(0,t.useCallback)(e=>{l(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),d=(0,r.jsx)(G,{entries:a,activeId:i,onSelect:s});return(0,r.jsx)(M,{title:e,sidebar:d,activeId:i,topBarRight:o,children:n})}i.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,i.default.div`
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
`,i.default.div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,i.default.input`
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
`,i.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,i.default.button`
  padding: 7px 18px;
  border-radius: ${n.w4.borderRadius.md};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?n.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,i.default.div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,i.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,i.default.div`
  position: relative;
`,i.default.button`
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
`,i.default.div`
  display: ${({open:e})=>e?"flex":"none"};
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
`,i.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,i.default.div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
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
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
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
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${n.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`;const ae=i.default.div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,oe=i.default.section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,ne=i.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,te=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,i.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding-left: max(${n.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${n.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${n.w4.spacing.sm};
  z-index: 100;
`,i.default.button`
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
`,i.default.span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,i.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,i.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,i.default.div`
  flex: 1;
`;const ie=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,re=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,le=l.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  animation: ${ie} 0.4s ease 0.15s both;
`,i.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,i.default.div`
  position: absolute;
  inset: 0;
  animation: ${re} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  background: ${n.w4.colors.border};
  animation: ${le} 1.4s ease-in-out infinite;
`,i.default.span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},217(e,a,o){o.d(a,{w4:()=>t});const n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#7a8599",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.15)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#2a3040",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1a2030",success:"#34d399",warning:"#fbbf24",danger:"#f87171"},t={colors:function(){const e={};for(const a of Object.keys(n))e[a]=`var(--at-${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},3874(e,a,o){o.d(a,{A:()=>A});var n=o(7359),t=o(3233),i=o(2743),r=o(2820),l=o(4368),s=o(5723),d=o(894),c=o(8447),m=o(7454),g=o(8104);const u="#58a6ff",p=t.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,f=t.default.a`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px ${s.w4.spacing.sm};
  border: 1px solid ${u}18;
  border-radius: ${s.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${u}0b 0%, ${s.w4.colors.surface} 55%, ${s.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(165deg, ${u}14 0%, ${s.w4.colors.surfaceRaised} 55%, ${s.w4.colors.surfaceRaised} 100%);
    border-color: ${u}5c;
    transform: translateX(2px);
  }
`,h=t.default.div`
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainText};
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 6px;
`,y=t.default.span`
  color: ${s.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 2px;
`,x=t.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,b=t.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${u};
  font-weight: 600;
`,w=t.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,z=t.default.span`
  color: ${s.w4.colors.mainTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$=t.default.div`
  padding: ${s.w4.spacing.xl};
  color: ${s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  text-align: center;
`,v=t.default.div`
  height: 1px;
  background: ${u}2a;
  margin: 2px 0;
`;function A({t:e}){const a=`https://hn.algolia.com/api/v1/search?query=AI+LLM+model+open+source&tags=story&hitsPerPage=8&numericFilters=created_at_i>${Math.floor((Date.now()-1728e5)/1e3)}`,{data:o,loading:t,lastUpdated:s,refresh:A}=(0,c.st)(a),k=o?.hits??[];return(0,g.jsxs)("div",{children:[(0,g.jsx)(m.X,{title:e("nav.aiRadar"),color:u,lastUpdated:s,loading:t,onRefresh:A,t:e}),k.length?(0,g.jsx)(p,{children:k.map((a,o)=>{const t=a.url??`https://news.ycombinator.com/item?id=${a.objectID}`;return(0,g.jsxs)(n.Fragment,{children:[o>0&&(0,g.jsx)(v,{}),(0,g.jsxs)(f,{href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,g.jsxs)(h,{children:[(0,g.jsx)(y,{children:(0,g.jsx)(i.A,{size:12})}),a.title]}),(0,g.jsxs)(x,{children:[(0,g.jsxs)(b,{children:[(0,g.jsx)(l.A,{size:11}),a.points??0]}),(0,g.jsxs)(w,{children:[(0,g.jsx)(r.A,{size:11}),a.num_comments??0]}),(0,g.jsx)(z,{children:(0,c.FB)(a.url)}),(0,g.jsx)("span",{style:{marginLeft:"auto"},children:(0,d.aw)(a.created_at,e)})]})]})]},a.objectID)})}):(0,g.jsx)($,{children:e(t?"aiRadar.loading":"aiRadar.empty")})]})}},7401(e,a,o){o.d(a,{A:()=>M}),o(7359);var n=o(3233),t=o(5046),i=o(8641),r=o(5723),l=o(894),s=o(8447),d=o(7454),c=o(8104);const m="#bc8cff",g={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080"},u=n.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r.w4.spacing.md};

  @media (max-width: ${r.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,p=n.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${r.w4.spacing.md};
  background: linear-gradient(168deg, ${m}10 0%, ${r.w4.colors.surface} 44%, ${r.w4.colors.surface} 100%);
  border: 1px solid ${m}2d;
  border-radius: ${r.w4.borderRadius.md};
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
    background: linear-gradient(90deg, transparent, ${m}, transparent);
    opacity: 0.45;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${m}66;
    background: linear-gradient(168deg, ${m}1c 0%, ${r.w4.colors.surfaceRaised} 44%, ${r.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${m}24, 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.9;
  }
`,f=n.default.div`
  display: flex;
  align-items: flex-start;
  gap: ${r.w4.spacing.sm};
  justify-content: space-between;
`,h=n.default.div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${m};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,y=n.default.div`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  white-space: nowrap;
  flex-shrink: 0;
`,x=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,b=n.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,w=n.default.span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(188, 140, 255, 0.12);
  color: ${m};
  border-radius: 20px;
  border: 1px solid rgba(188, 140, 255, 0.25);
`,z=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  margin-top: auto;
`,$=n.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,v=(0,n.default)($)`
  color: #d29922;
  font-weight: 600;
`,A=n.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>g[e]??r.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,k=n.default.span`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
`,j=n.default.span`
  flex: 1;
`,S=n.default.div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function M({t:e}){const a=`https://api.github.com/search/repositories?q=created:>${(0,s.VF)(30)}+stars:50..500+fork:false&sort=stars&order=desc&per_page=8`,{data:o,loading:n,lastUpdated:r,refresh:g}=(0,s.st)(a);return(0,c.jsxs)("div",{children:[(0,c.jsx)(d.X,{title:e("nav.experimentZone"),color:m,lastUpdated:r,loading:n,onRefresh:g,t:e}),o?.items?.length?(0,c.jsx)(u,{children:o.items.map(a=>(0,c.jsxs)(p,{href:a.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(h,{title:a.full_name,children:a.full_name}),(0,c.jsx)(y,{children:(0,l.aw)(a.created_at,e)})]}),(0,c.jsx)(x,{children:a.description??e("noDescription")}),a.topics.length>0&&(0,c.jsx)(b,{children:a.topics.slice(0,4).map(e=>(0,c.jsx)(w,{children:e},e))}),(0,c.jsxs)(z,{children:[a.language&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A,{lang:a.language}),(0,c.jsx)(k,{children:a.language})]}),(0,c.jsx)(j,{}),(0,c.jsxs)(v,{children:[(0,c.jsx)(i.A,{size:12}),(0,s.Bz)(a.stargazers_count)]}),(0,c.jsxs)($,{children:[(0,c.jsx)(t.A,{size:12}),(0,s.Bz)(a.forks_count)]})]})]},a.id))}):(0,c.jsx)(S,{children:e(n?"experiment.loading":"noData")})]})}},69(e,a,o){o.d(a,{A:()=>z}),o(7359);var n=o(3233),t=o(8641),i=o(5723),r=o(8447),l=o(7454),s=o(8104);const d="#3fb950",c={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080","Jupyter Notebook":"#DA5B0B"},m=n.default.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${i.w4.spacing.md};

  @media (max-width: ${i.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`,g=n.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${i.w4.spacing.md};
  background: linear-gradient(168deg, ${d}0f 0%, ${i.w4.colors.surface} 44%, ${i.w4.colors.surface} 100%);
  border: 1px solid ${d}2e;
  border-radius: ${i.w4.borderRadius.md};
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
    background: linear-gradient(90deg, transparent, ${d}, transparent);
    opacity: 0.45;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${d}66;
    background: linear-gradient(168deg, ${d}1a 0%, ${i.w4.colors.surfaceRaised} 44%, ${i.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${d}24, 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.9;
  }
`,u=n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${i.w4.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,p=n.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,f=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  margin-top: auto;
`,h=n.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  color: #d29922;
  font-family: ${i.w4.typography.fontFamilyMono};
`,y=n.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>c[e]??i.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,x=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,b=n.default.span`
  flex: 1;
`,w=n.default.div`
  padding: ${i.w4.spacing.xl};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  text-align: center;
`;function z({t:e}){const a=`https://api.github.com/search/repositories?q=created:>${(0,r.VF)(7)}&sort=stars&order=desc&per_page=8`,{data:o,loading:n,lastUpdated:i,refresh:c}=(0,r.st)(a);return(0,s.jsxs)("div",{children:[(0,s.jsx)(l.X,{title:e("nav.livePulse"),color:d,lastUpdated:i,loading:n,onRefresh:c,t:e}),o?.items?.length?(0,s.jsx)(m,{children:o.items.map(a=>(0,s.jsxs)(g,{href:a.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(u,{title:a.full_name,children:a.full_name}),(0,s.jsx)(p,{children:a.description??e("noDescription")}),(0,s.jsxs)(f,{children:[a.language&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{lang:a.language}),(0,s.jsx)(x,{children:a.language})]}),(0,s.jsx)(b,{}),(0,s.jsxs)(h,{children:[(0,s.jsx)(t.A,{size:12}),(0,r.Bz)(a.stargazers_count)]})]})]},a.id))}):(0,s.jsx)(w,{children:e(n?"livePulse.loading":"noData")})]})}},3019(e,a,o){o.d(a,{A:()=>x}),o(7359);var n=o(3233),t=o(5723),i=o(8447),r=o(7454),l=o(8104);const s="#f97316",d=["react","typescript","lodash","axios","express","next","vue","vite","tailwindcss","eslint","prettier","webpack"].join(","),c=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,m=n.default.a`
  display: grid;
  grid-template-columns: 20px 120px 1fr 68px;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: 7px ${t.w4.spacing.sm};
  border: 1px solid ${s}18;
  border-radius: ${t.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${s}0a 0%, ${t.w4.colors.surface} 62%, ${t.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(165deg, ${s}13 0%, ${t.w4.colors.surfaceRaised} 62%, ${t.w4.colors.surfaceRaised} 100%);
    border-color: ${s}5a;
    transform: translateX(2px);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 20px 90px 1fr 60px;
  }
`,g=n.default.span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  text-align: right;
`,u=n.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${s};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,p=n.default.div`
  height: 6px;
  background: ${t.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,f=n.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: ${s};
  border-radius: 3px;
  opacity: 0.75;
  transition: width 0.4s ease;
`,h=n.default.span`
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.mainTextMuted};
  text-align: right;
  white-space: nowrap;
`,y=n.default.div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function x({t:e}){const a=`https://api.npmjs.org/downloads/point/last-week/${d}`,{data:o,loading:n,lastUpdated:t,refresh:x}=(0,i.st)(a),b=o?Object.values(o).filter(e=>e.downloads>0).map(e=>({name:e.package,downloads:e.downloads})).sort((e,a)=>a.downloads-e.downloads):[],w=b[0]?.downloads??1;return(0,l.jsxs)("div",{children:[(0,l.jsx)(r.X,{title:e("nav.npmPulse"),color:s,lastUpdated:t,loading:n,onRefresh:x,t:e}),b.length?(0,l.jsx)(c,{children:b.map((a,o)=>{return(0,l.jsxs)(m,{href:`https://www.npmjs.com/package/${a.name}`,target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)(g,{children:o+1}),(0,l.jsx)(u,{children:a.name}),(0,l.jsx)(p,{children:(0,l.jsx)(f,{pct:Math.round(a.downloads/w*100)})}),(0,l.jsxs)(h,{children:[(n=a.downloads,n>=1e9?`${(n/1e9).toFixed(1)}B`:n>=1e6?`${(n/1e6).toFixed(1)}M`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(n))," ",e("perWeek")]})]},a.name);var n})}):(0,l.jsx)(y,{children:e(n?"npm.loading":"noData")})]})}},7454(e,a,o){o.d(a,{X:()=>y}),o(7359);var n=o(3233),t=o(7207),i=o(9421),r=o(5723),l=o(894),s=o(8104);const d=t.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,c=t.keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,m=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  margin-bottom: ${r.w4.spacing.lg};
`,g=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  flex: 1;
`,u=n.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${d} 2.4s ease-in-out infinite;
`,p=n.default.h2`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  letter-spacing: -0.02em;
`,f=n.default.span`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,h=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.borderSubtle};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s;
  flex-shrink: 0;

  svg {
    animation: ${({spinning:e})=>e?c:"none"} 0.7s linear infinite;
  }

  &:hover {
    color: ${r.w4.colors.mainText};
    border-color: ${r.w4.colors.accent};
    background: ${r.w4.colors.surfaceRaised};
    box-shadow: 0 0 10px ${r.w4.colors.accentMuted};
  }
`;function y({title:e,color:a,lastUpdated:o,loading:n,onRefresh:t,t:r}){const d=o?(0,l.lw)(o,r):null;return(0,s.jsxs)(m,{children:[(0,s.jsxs)(g,{children:[(0,s.jsx)(u,{color:a}),(0,s.jsx)(p,{children:e})]}),d&&(0,s.jsx)(f,{children:r("updated",{age:d})}),(0,s.jsx)(h,{spinning:n,onClick:t,title:r("refresh"),children:(0,s.jsx)(i.A,{size:13})})]})}},7018(e,a,o){o.d(a,{A:()=>$}),o(7359);var n=o(3233),t=o(2820),i=o(4368),r=o(5723),l=o(8447),s=o(7454),d=o(8104);const c="#d29922",m=n.default.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,g=n.default.li``,u=n.default.a`
  display: flex;
  align-items: flex-start;
  gap: ${r.w4.spacing.sm};
  padding: 8px ${r.w4.spacing.sm};
  border: 1px solid ${c}18;
  border-radius: ${r.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${c}0a 0%, ${r.w4.colors.surface} 58%, ${r.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(165deg, ${c}14 0%, ${r.w4.colors.surfaceRaised} 58%, ${r.w4.colors.surfaceRaised} 100%);
    border-color: ${c}5a;
    transform: translateX(2px);
  }
`,p=n.default.span`
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  min-width: 20px;
  text-align: right;
  flex-shrink: 0;
  padding-top: 1px;
`,f=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,h=n.default.div`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainText};
  line-height: 1.4;
`,y=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  font-size: 12px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,x=n.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${c};
  font-weight: 600;
`,b=n.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,w=n.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,z=n.default.div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function $({t:e}){const{data:a,loading:o,lastUpdated:n,refresh:r}=(0,l.st)("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=12"),$=a?.hits??[];return(0,d.jsxs)("div",{children:[(0,d.jsx)(s.X,{title:e("nav.todayInTech"),color:c,lastUpdated:n,loading:o,onRefresh:r,t:e}),$.length?(0,d.jsx)(m,{children:$.map((e,a)=>{const o=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,d.jsx)(g,{children:(0,d.jsxs)(u,{href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsxs)(p,{children:[a+1,"."]}),(0,d.jsxs)(f,{children:[(0,d.jsx)(h,{children:e.title}),(0,d.jsxs)(y,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(i.A,{size:11}),e.points??0]}),(0,d.jsxs)(b,{children:[(0,d.jsx)(t.A,{size:11}),e.num_comments??0]}),(0,d.jsx)(w,{children:(0,l.FB)(e.url)})]})]})]})},e.objectID)})}):(0,d.jsx)(z,{children:e(o?"todayInTech.loading":"todayInTech.empty")})]})}},8447(e,a,o){o.d(a,{Bz:()=>i,FB:()=>l,VF:()=>r,st:()=>t});var n=o(7359);function t(e,a=3e5){const[o,t]=(0,n.useState)(null),[i,r]=(0,n.useState)(!0),[l,s]=(0,n.useState)(null),[d,c]=(0,n.useState)(null),m=(0,n.useCallback)(async()=>{try{const a=await fetch(e);if(!a.ok)throw new Error(`HTTP ${a.status}`);t(await a.json()),c(new Date),s(null)}catch(e){s(e instanceof Error?e.message:"Failed to fetch")}finally{r(!1)}},[e]);return(0,n.useEffect)(()=>{m();const e=setInterval(m,a);return()=>clearInterval(e)},[m,a]),{data:o,loading:i,error:l,lastUpdated:d,refresh:m}}function i(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function r(e){const a=new Date;return a.setDate(a.getDate()-e),a.toISOString().split("T")[0]}function l(e){if(!e)return"news.ycombinator.com";try{return new URL(e).hostname.replace(/^www\./,"")}catch{return""}}},8887(e,a,o){o.d(a,{A:()=>n});const n={"nav.dashboard":{en:"Dashboard",pt:"Painel"},"nav.livePulse":{en:"Live Pulse",pt:"Pulso ao Vivo"},"nav.aiRadar":{en:"AI Radar",pt:"Radar IA"},"nav.todayInTech":{en:"Today in Tech",pt:"Hoje em Tech"},"nav.experimentZone":{en:"Experiment Zone",pt:"Zona Experimental"},"nav.npmPulse":{en:"npm Pulse",pt:"Pulso npm"},"livePulse.loading":{en:"Loading trending repos…",pt:"A carregar repos em destaque…"},"aiRadar.loading":{en:"Scanning AI activity…",pt:"A analisar atividade IA…"},"aiRadar.empty":{en:"No AI stories in the last 48h",pt:"Sem artigos IA nas últimas 48h"},"todayInTech.loading":{en:"Loading front page…",pt:"A carregar primeira página…"},"todayInTech.empty":{en:"No stories available",pt:"Sem artigos disponíveis"},"experiment.loading":{en:"Scanning experimental repos…",pt:"A procurar repos experimentais…"},"npm.loading":{en:"Fetching download stats…",pt:"A obter estatísticas…"}}}}]);
//# sourceMappingURL=439.b14d152dedf2c9945b4d.js.map