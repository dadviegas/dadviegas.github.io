"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["2369"],{9480(e,t,o){var a=o(65723),i=o(37991),n=o.n(i),r=o(58997),s=o(36859),l=o.n(s),c=o(72799),d=o(81316);l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${d.w4.spacing.sm};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,l().div`
  position: relative;
`;var p=o(73661),m=o(40814);let g="260px",u="56px",h="48px",f=l().header`
  display: flex;
  align-items: center;
  height: calc(${h} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${d.w4.colors.sidebarBg};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${h} + env(safe-area-inset-top, 0px));
  }
`,x=l().div`
  width: ${u};
  min-width: ${u};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${d.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,y=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,b=(0,c.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,w=l().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${d.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${d.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,$=l().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${b} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${d.w4.colors.accent}, ${d.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,v=l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  padding-left: ${d.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${d.w4.spacing.sm};
    color: ${d.w4.colors.border};
  }
`,k=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${d.w4.spacing.md};
  padding: 0 ${d.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${d.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${d.w4.spacing.xs} ${d.w4.spacing.sm};
    gap: ${d.w4.spacing.xs};
    border-top: 1px solid ${d.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,j=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=l().div`
  display: flex;
  flex-direction: column;
  height: ${d.w4.sizes.fullHeight};
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  overflow: hidden;
`,M=l().aside`
  width: ${({collapsed:e})=>e?u:g};
  min-width: ${({collapsed:e})=>e?u:g};
  background: ${d.w4.colors.sidebarBg};
  border-right: 1px solid ${d.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,S=l().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,T=l().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function C(){return(0,a.jsx)(w,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,t)=>(0,a.jsx)($,{index:t,accent:e.accent,children:e.char},t))})}let F="atlantis:sidebar-collapsed";function P({sidebar:e,children:t,topBarRight:r,title:s="Atlantis",activeId:l=null}){let[c,d]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(F)}catch{return!1}}),[g,u]=(0,i.useState)(null),h=(0,i.useRef)(),b=()=>d(e=>{let t=!e;try{localStorage.setItem(F,String(t))}catch{}return t}),w=n().useMemo(()=>n().lazy(()=>Promise.resolve().then(o.bind(o,87330)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,a.jsx)(m.I.Provider,{value:{collapsed:c,toggle:b,flyout:g,openFlyout:(e,t,o)=>{clearTimeout(h.current),u({entry:e,anchorY:t,onSelect:o})},scheduleFlyoutClose:()=>{h.current=setTimeout(()=>u(null),160)},cancelFlyoutClose:()=>clearTimeout(h.current)},children:(0,a.jsxs)(z,{children:[(0,a.jsxs)(f,{children:[e&&(0,a.jsx)(x,{children:(0,a.jsx)(y,{onClick:b,title:c?"Expand sidebar":"Collapse sidebar",children:(0,a.jsx)(p.A,{size:17})})}),(0,a.jsx)(C,{}),s&&(0,a.jsx)(v,{children:s}),r&&(0,a.jsx)(k,{children:r})]}),(0,a.jsxs)(j,{children:[null!=e&&(0,a.jsx)(M,{collapsed:c,children:(0,a.jsx)(S,{children:e})}),(0,a.jsx)(T,{children:t})]}),g&&(0,a.jsx)(n().Suspense,{fallback:null,children:(0,a.jsx)(w,{activeId:l})})]})})}l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,l().div`
  overflow: hidden;
`,l().div`
  padding-left: ${d.w4.spacing.md};
`,l().div`
  display: flex;
  flex-direction: column;
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${d.w4.spacing.sm} ${d.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":d.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${d.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${d.w4.colors.sidebarText};
    background: ${d.w4.colors.sidebarHover};
  }
`,l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,l().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${d.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${d.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?d.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?d.w4.colors.sidebarActive:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${d.w4.borderRadius.md} ${d.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.mainText};
  }
`;let L=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;l().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${L} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${d.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${d.w4.colors.surface};
  }
`,l().span`
  display: block;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${d.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${d.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${d.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,o(87330);var E=o(61920),N=o(48607),D=o(68479);let I=(0,i.createContext)({mode:"dark",resolvedMode:"dark",setMode:()=>{}}),R="atlantis:theme-mode";function B(){return"u"<typeof window?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}let H="atlantis-webfonts";function K({resolvedMode:e}){let t=(0,i.useMemo)(()=>(0,d.EE)(e),[e]);return(0,a.jsx)(c.Global,{styles:(0,c.css)`
        :root {
          ${t}
        }

        html {
          color-scheme: ${e};
        }

        body {
          background: var(--at-mainBg);
          color: var(--at-mainText);
          font-family: ${d.w4.typography.fontFamily};
          font-size: ${d.w4.typography.fontSizeBase};
          line-height: ${d.w4.typography.lineHeightBase};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          transition: background 0.3s ease, color 0.3s ease;
        }

        /* Inherit by default — every app gets Inter without restating it. */
        button, input, textarea, select {
          font-family: inherit;
        }
        code, kbd, pre, samp {
          font-family: ${d.w4.typography.fontFamilyMono};
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--at-border);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--at-mainTextMuted);
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: var(--at-border) transparent;
        }

        /* Selection */
        ::selection {
          background: var(--at-accentMuted);
          color: var(--at-mainText);
        }

        /* Focus visible */
        :focus-visible {
          outline: 2px solid var(--at-accent);
          outline-offset: 2px;
        }
      `})}function O({children:e}){let[t,o]=(0,i.useState)(()=>{try{let e=localStorage.getItem(R);if("dark"===e||"light"===e||"system"===e)return e}catch{}return"dark"}),[n,r]=(0,i.useState)(()=>"system"===t?B():t),s=(0,i.useCallback)(e=>{o(e);try{localStorage.setItem(R,e)}catch{}},[]);(0,i.useEffect)(()=>{if("system"!==t)return void r(t);r(B());let e=window.matchMedia("(prefers-color-scheme: light)"),o=e=>{r(e.matches?"light":"dark")};return e.addEventListener("change",o),()=>e.removeEventListener("change",o)},[t]),(0,i.useEffect)(()=>{document.documentElement.setAttribute("data-theme",n)},[n]),(0,i.useEffect)(()=>{!function(){if("u"<typeof document||document.getElementById(H))return;let e=document.createElement("link");e.id=H,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap",document.head.appendChild(e)}()},[]);let l=(0,i.useMemo)(()=>({mode:t,resolvedMode:n,setMode:s}),[t,n,s]);return(0,a.jsxs)(I.Provider,{value:l,children:[(0,a.jsx)(K,{resolvedMode:n}),e]})}function _(){return(0,i.useContext)(I)}let q=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  cursor: pointer;
  color: ${d.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
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
`,Y=["dark","light","system"],G={dark:E.A,light:N.A,system:D.A},W={dark:"Dark mode (click for light)",light:"Light mode (click for system)",system:"System mode (click for dark)"};function J(){let{mode:e,setMode:t}=_(),o=G[e];return(0,a.jsx)(q,{onClick:()=>{let o=Y.indexOf(e);t(Y[(o+1)%Y.length])},title:W[e],children:(0,a.jsx)(o,{size:16,strokeWidth:1.75})})}[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);let U="documents",V="settings";function Q(){return new Promise((e,t)=>{let o=indexedDB.open("atlantis-tools",2);o.onupgradeneeded=e=>{let t=e.target.result;t.objectStoreNames.contains(U)||t.createObjectStore(U,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),t.objectStoreNames.contains(V)||t.createObjectStore(V,{keyPath:"key"})},o.onsuccess=()=>e(o.result),o.onerror=()=>t(o.error)})}let Z={async saveDoc(e,t,o){let a=await Q(),i={appId:e,name:t,content:o,savedAt:Date.now()};return new Promise((e,t)=>{let o=a.transaction(U,"readwrite").objectStore(U).add(i);o.onsuccess=()=>e(String(o.result)),o.onerror=()=>t(o.error)})},async updateDoc(e,t,o){let a=await Q();return new Promise((i,n)=>{let r=a.transaction(U,"readwrite").objectStore(U),s=r.get(Number(e));s.onsuccess=()=>{let e=s.result;if(!e)return void n(Error("Doc not found"));let a=r.put({...e,name:t,content:o,savedAt:Date.now()});a.onsuccess=()=>i(),a.onerror=()=>n(a.error)},s.onerror=()=>n(s.error)})},async listDocs(e){let t=await Q();return new Promise((o,a)=>{let i=t.transaction(U,"readonly").objectStore(U).index("appId").getAll(e);i.onsuccess=()=>o(i.result.map(e=>({...e,id:String(e.id)})).reverse()),i.onerror=()=>a(i.error)})},async deleteDoc(e){let t=await Q();return new Promise((o,a)=>{let i=t.transaction(U,"readwrite").objectStore(U).delete(Number(e));i.onsuccess=()=>o(),i.onerror=()=>a(i.error)})},async putSetting(e,t){let o=await Q();return new Promise((a,i)=>{let n=o.transaction(V,"readwrite").objectStore(V).put({key:e,value:t});n.onsuccess=()=>a(),n.onerror=()=>i(n.error)})},async getSetting(e){let t=await Q();return new Promise((o,a)=>{let i=t.transaction(V,"readonly").objectStore(V).get(e);i.onsuccess=()=>o(i.result?i.result.value:null),i.onerror=()=>a(i.error)})}};function X(e,t){return Z.putSetting(e,t)}function ee(e){return Z.getSetting(e)}let et=Z;function eo(e,t){return et.putSetting(e,t)}function ea(e){return et.getSetting(e)}async function ei(e){try{let t=await Q();await new Promise((o,a)=>{let i=t.transaction(V,"readwrite"),n=i.objectStore(V).openCursor();n.onsuccess=()=>{let t=n.result;t?(String(t.key).startsWith(e)&&t.delete(),t.continue()):o()},n.onerror=()=>a(n.error),i.oncomplete=()=>o()})}catch{}}l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,l().div`
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,l().div`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
`,l().input`
  width: 100%;
  padding: 8px 12px;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${d.w4.colors.accent}; }
  &::placeholder { color: ${d.w4.colors.sidebarTextMuted}; }
`,l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,l().button`
  padding: 7px 18px;
  border-radius: ${d.w4.borderRadius.md};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:t})=>t?"rgba(248,81,73,0.12)":e?d.w4.colors.accent:"none"};
  color: ${({primary:e,danger:t})=>t?d.w4.colors.danger:e?"#fff":d.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:t})=>t?d.w4.colors.danger:e?d.w4.colors.accent:d.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,l().div`
  height: 1px;
  background: ${d.w4.colors.border};
  margin: 0 -4px;
`,l().div`
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
`;let en=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,er=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`,es=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${d.w4.spacing.md};
  animation: ${en} 0.15s ease both;
`,el=l().div`
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?d.w4.colors.danger+"55":d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${d.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${er} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,ec=l().div`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?d.w4.colors.danger:d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
`,ed=l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
`,ep=l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${d.w4.spacing.sm};
`,em=l().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast},
    border-color ${d.w4.transitions.fast},
    color ${d.w4.transitions.fast},
    opacity ${d.w4.transitions.fast};

  background: ${({primary:e,danger:t})=>t?d.w4.colors.danger:e?d.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:t})=>t||e?"#fff":d.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:t})=>t?d.w4.colors.danger:e?d.w4.colors.accent:d.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${d.w4.focusRing} }
`;function eg({open:e,title:t,message:o,confirmLabel:n,cancelLabel:r,onConfirm:s,onCancel:l,danger:c=!1}){return((0,i.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&l(),"Enter"===e.key&&s()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e,l,s]),e)?(0,a.jsx)(es,{onClick:l,role:"dialog","aria-modal":"true","aria-label":t,children:(0,a.jsxs)(el,{danger:c,onClick:e=>e.stopPropagation(),children:[(0,a.jsx)(ec,{danger:c,children:t}),(0,a.jsx)(ed,{children:o}),(0,a.jsxs)(ep,{children:[(0,a.jsx)(em,{onClick:l,children:r}),(0,a.jsx)(em,{danger:c,primary:!c,onClick:s,autoFocus:!0,children:n})]})]})}):null}l().div`
  position: relative;
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    border-color: ${d.w4.colors.accent};
  }
`,l().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,l().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,l().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,l().div`
  padding: 16px 14px;
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-style: italic;
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
`,l().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l().div`
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  margin-top: 1px;
`,l().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${d.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`;let eu="atlantis:app-recents-change";async function eh(e){let t=await ee(`app-recents:${e}`);if(!t)return[];try{let e=JSON.parse(t);return Array.isArray(e)?e:[]}catch{return[]}}function ef(e,t){let o=t?Object.entries(t).filter(([,e])=>void 0!==e&&""!==e).map(([e,t])=>`${encodeURIComponent(e)}=${encodeURIComponent(String(t))}`).join("&"):"";window.location.hash=o?`#/${e}?${o}`:`#/${e}`}let ex="shell:profile",ey="atlantis:profile-change",eb=["tech","movies","learning","games","news","space"],ew={tech:"Tech",movies:"Movies & TV",learning:"Learning",games:"Games",news:"News",space:"Space"},e$={tech:"Tecnologia",movies:"Filmes & S\xe9ries",learning:"Aprender",games:"Jogos",news:"Not\xedcias",space:"Espa\xe7o"},ev={kid:"Kid",teen:"Teen",adult:"Adult"},ek={kid:"Crian\xe7a",teen:"Adolescente",adult:"Adulto"},ej={interests:[],ageMode:"adult"};function ez(e){return e&&"object"==typeof e?{interests:Array.isArray(e.interests)?e.interests.filter(e=>eb.includes(e)):[],ageMode:"kid"===e.ageMode||"teen"===e.ageMode||"adult"===e.ageMode?e.ageMode:"adult"}:ej}function eM(){let[e,t]=(0,i.useState)(ej);return(0,i.useEffect)(()=>{let e=!1;ea(ex).then(o=>{if(!e&&o)try{t(ez(JSON.parse(o)))}catch{}});let o=e=>{let o=e.detail;o&&t(o)};return window.addEventListener(ey,o),()=>{e=!0,window.removeEventListener(ey,o)}},[]),[e,(0,i.useCallback)(async e=>{let o=ez(e);t(o),window.dispatchEvent(new CustomEvent(ey,{detail:o})),await eo(ex,JSON.stringify(o))},[])]}function eS(e){return e.interests.length>0}let eT={space:/\b(NASA|Kepler|Hubble|SpaceX|JWST|James Webb|astronaut[ae]?|astronomia?|telesc[oó]pio|telescope|planet(a|s)?|galax(y|ia)|gal[aá]xia|espa[cç]o|cosmos|foguet[ãa]o|Marte|Saturn[oa]?|J[úu]piter|[oó]rbita|orbit|black ?hole|buraco negro)\b/i,tech:/\b(GitHub|JavaScript|TypeScript|Python|Rust|LLM|ChatGPT|OpenAI|algoritmos?|algorithms?|developer|programador|c[oó]digo fonte|source code|compiler|compilador|framework)\b/i,movies:/\b(film(e|es)?|movie|cinema|Oscar|Netflix|streaming|trailer|s[eé]rie|episode|epis[oó]dio|director|realizador)\b/i,games:/\b(gaming|videojogo|videogame|Nintendo|PlayStation|Xbox|speedrun|e-sports?|DLC|Twitch)\b/i,news:/\b(elei[cç][õã]o|election|guerra|war|crise|crisis|ministr[oa]|president(e|a)?|government|governo|parlamento|parliament)\b/i,learning:/\b(escola|school|matem[aá]tica|math(s|ematics)?|professor(a)?|teacher|aluno|student|pedagog|curriculum|curr[ií]culo)\b/i},eA=new Set([27]);l().div`
  padding: ${d.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,l().section`
  scroll-margin-top: ${d.w4.spacing.lg};
`,l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
`,l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.xl};

  @media (max-width: ${d.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  overflow: hidden;
`,l().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${d.w4.colors.sidebarBg};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  padding-left: max(${d.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${d.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${d.w4.spacing.sm};
  z-index: 100;
`,l().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${d.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${d.w4.colors.accent}; }
`,l().span`
  color: ${d.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,l().span`
  font-weight: 400;
  color: ${d.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,l().div`
  flex: 1;
`;let eC=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eF=(0,c.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,eP=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`,eL=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  animation: ${eC} 0.4s ease 0.15s both;
`,eE=l().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,eN=l().div`
  position: absolute;
  inset: 0;
  animation: ${eF} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,eD=l().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${d.w4.colors.border};
  animation: ${eP} 1.4s ease-in-out infinite;
`,eI=l().span`
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`;function eR({label:e="Loading…"}){return(0,a.jsxs)(eL,{children:[(0,a.jsxs)(eE,{children:[(0,a.jsx)(eN,{delay:0,size:8,color:d.w4.colors.accent}),(0,a.jsx)(eN,{delay:-.45,size:6,color:"#bc8cff"}),(0,a.jsx)(eN,{delay:-.9,size:5,color:"#3fb950"}),(0,a.jsx)(eD,{})]}),(0,a.jsx)(eI,{children:e})]})}function eB(){return new Date().toISOString().slice(0,10)}async function eH(){try{let e=await ea("daily:progress");if(!e)return null;return JSON.parse(e)}catch{return null}}let eK="atlantis:daily-progress-change";function eO(e,t,o){return e.history[o]?.includes(t)??!1}let e_={"daily.mission.brushTeeth":{en:"Brush teeth",pt:"Lavar os dentes"},"daily.mission.makeBed":{en:"Make bed",pt:"Fazer a cama"},"daily.mission.read":{en:"Read for 15 min",pt:"Ler 15 minutos"},"daily.mission.tidyRoom":{en:"Tidy room",pt:"Arrumar o quarto"},"daily.mission.setTable":{en:"Help set table",pt:"Ajudar a p\xf4r a mesa"},"daily.mission.schoolBag":{en:"Pack school bag",pt:"Preparar a mochila"},"daily.mission.vegetables":{en:"Eat vegetables",pt:"Comer legumes"},"daily.mission.clothesAway":{en:"Put clothes away",pt:"Guardar a roupa"},"daily.mission.homework":{en:"Do homework",pt:"Fazer os trabalhos"},"daily.mission.draw":{en:"Draw or paint",pt:"Desenhar ou pintar"},"daily.mission.beKind":{en:"Be kind to someone",pt:"Ser gentil com algu\xe9m"}};function eq(e,t){if(e.translationKey){let o=e_[e.translationKey];if(o)return o[t]}return e.name??""}let eY="atlantis:api-keys";function eG(){if("u"<typeof process)return null;let e=process.env?.GROK_API_KEY;return e&&0!==e.length?e:null}async function eW(){try{let e=await ea(eY);if(e){let t=JSON.parse(e);if(t.groq&&t.groq.length>0)return t.groq}}catch{}let e=function(){if("u"<typeof localStorage)return null;try{let e=localStorage.getItem(eY);if(e){let t=JSON.parse(e);if(t.groq&&t.groq.length>0)return t.groq}let t=localStorage.getItem("atlantis:promptlab:keys");if(t){let e=JSON.parse(t);if(e.groq&&e.groq.length>0)return e.groq}}catch{}return null}();return e||eG()}async function eJ(e,t){let o="pt"===t.locale?"Portuguese":"English",a=t.system??`You are Atlantis, a concise personal-dashboard assistant.
Answer in ${o}. Stay focused and reasonably concise.
If you don't know, say so plainly.

Responses render as rich Markdown in the Atlantis UI. Use these blocks when
they fit the answer:
- Headings, bold/italic, bullet & numbered lists, GFM tables and task lists.
- Fenced code blocks with a language tag (\`\`\`ts / \`\`\`py / \`\`\`sql …).
- Callouts as blockquotes: \`> [!NOTE]\`, \`> [!TIP]\`, \`> [!IMPORTANT]\`,
  \`> [!WARNING]\`, \`> [!CAUTION]\`.
- Mermaid diagrams: fenced \`\`\`mermaid block (Mermaid 11 syntax).
  The FIRST non-empty line MUST declare one of these diagram types,
  otherwise the block will not render:
    graph | flowchart | sequenceDiagram | classDiagram |
    stateDiagram | stateDiagram-v2 | erDiagram | pie | gantt |
    journey | mindmap | gitGraph | sankey-beta | quadrantChart |
    requirementDiagram | timeline | xychart-beta | block-beta |
    C4Context | C4Container | C4Component | C4Dynamic | C4Deployment.
  Example first line: \`graph TD\` or \`flowchart LR\` or \`sequenceDiagram\`.
- Numeric charts: fenced \`\`\`chart block. Only \`type: bar\`, \`type: pie\`,
  and \`type: line\` are supported. Body keys: \`labels: [..]\`, \`data: [..]\`,
  optional \`title:\` and \`colors:\`. Any other chart type will not render.

Default to Mermaid for relationships/flows and \`chart\` for quantitative
data the user provided. Never use Mermaid for time-series or numeric
trends (value per year / month / category) — those are always \`chart\`.
Never emit an empty fenced block. Never emit a mermaid block without a
diagram-type declaration on its first line. Keep caption text short
around rendered blocks.`,i=(t.history??[]).slice(-6),n=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.key}`},body:JSON.stringify({model:"llama-3.1-8b-instant",messages:[{role:"system",content:a},...i,{role:"user",content:e}],temperature:.4,max_tokens:t.maxTokens??1024}),signal:t.signal}),r=await n.json();if(!n.ok)throw Error(r.error?.message??`Groq HTTP ${n.status}`);let s=r.choices?.[0]?.message?.content?.trim();if(!s)throw Error("Empty response from Groq");return s}let eU={ghost:"transparent",accent:"transparent",primary:d.w4.colors.accent,success:"#238636",danger:"#da3633"},eV={ghost:d.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:d.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},eQ={ghost:d.w4.colors.border,accent:d.w4.colors.accent,primary:d.w4.colors.accent,success:"#238636",danger:"#da3633"},eZ={ghost:d.w4.colors.mainTextMuted,accent:d.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},eX={ghost:d.w4.colors.mainText,accent:d.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},e0={sm:"28px",md:"30px"},e1={sm:"0 10px",md:"0 12px"},e4={sm:"12px",md:"12px"},e2=l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>e0[e]};
  padding: ${({size:e})=>e1[e]};
  background: ${({variant:e})=>eU[e]};
  border: 1px solid ${({variant:e})=>eQ[e]};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({variant:e})=>eZ[e]};
  font-size: ${({size:e})=>e4[e]};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>eV[e]};
    color: ${({variant:e})=>eX[e]};
    border-color: ${({variant:e})=>"ghost"===e?d.w4.colors.accent:eQ[e]};
  }

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,e5=n().forwardRef(function({variant:e="ghost",size:t="md",icon:o,iconRight:i,children:n,...r},s){return(0,a.jsxs)(e2,{ref:s,variant:e,size:t,...r,children:[o,n,i]})}),e3={default:d.w4.colors.accent,danger:"#f85149"},e6={default:d.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},e8=l().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${d.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":d.w4.borderRadius.sm};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover:not(:disabled) {
    color: ${({tone:e})=>e3[e]};
    background: ${({tone:e})=>e6[e]};
    border-color: ${({tone:e})=>e3[e]};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,e7=n().forwardRef(function({active:e=!1,shape:t="square",tone:o="default",children:i,...n},r){return(0,a.jsx)(e8,{ref:r,active:e,shape:t,tone:o,...n,children:i})});l().div`
  position: relative;
  display: inline-flex;
`,l().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeSm};
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: -2px;
  }
`,l().div`
  height: 1px;
  margin: 4px 0;
  background: ${d.w4.colors.sidebarBorder};
`,l().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
`,l().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,l().span`
  width: 1px;
  height: 20px;
  background: ${d.w4.colors.border};
  flex-shrink: 0;
`;let e9=l().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,te=l()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:t})=>e||t?d.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:t})=>e||t?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${d.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${d.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${d.w4.focusRing} }
`;function tt({tabs:e,value:t,onChange:o,className:i,"aria-label":n}){return(0,a.jsx)(e9,{role:"tablist","aria-label":n,className:i,children:e.map(e=>{let i=e.value===t;return(0,a.jsx)(te,{type:"button",role:"tab","aria-selected":i,active:i,highlight:e.highlight,disabled:e.disabled,onClick:()=>o(e.value),children:e.label},e.value)})})}var to=o(62727),ta=o.n(to);let ti=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,tn=l().div`
  position: relative;
`,tr=l().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};
  &:hover {
    border-color: ${d.w4.colors.accent};
    background: ${d.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,ts=l().img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,tl=l().div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${d.w4.colors.accentMuted};
  border: 1px solid ${d.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${d.w4.colors.accent};
  font-family: ${d.w4.typography.fontFamily};
  flex-shrink: 0;
`,tc=l().span`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,td=l().div`
  position: fixed;
  min-width: 240px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${ti} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${d.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,tp=l().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,tm=l().img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`,tg=l().div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${d.w4.colors.accentMuted};
  border: 1px solid ${d.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${d.w4.colors.accent};
  font-family: ${d.w4.typography.fontFamily};
  margin-bottom: 10px;
`,tu=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,th=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,tf=l().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,tx=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,ty=l().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.md};
`,tb=l().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
    background: ${({active:e})=>e?d.w4.colors.accentMuted:d.w4.colors.sidebarHover};
  }
`,tw=l().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":d.w4.colors.mainText};
  }
`;function t$({labels:e}){let{mode:t,setMode:o}=_(),i=[{value:"light",label:e?.themeLight??"Light"},{value:"dark",label:e?.themeDark??"Dark"},{value:"system",label:e?.themeSystem??"System"}];return(0,a.jsxs)(tf,{children:[(0,a.jsx)(tx,{children:e?.theme??"Theme"}),(0,a.jsx)(ty,{role:"radiogroup","aria-label":e?.theme??"Theme",children:i.map(({value:e,label:i})=>(0,a.jsx)(tb,{active:t===e,onClick:()=>o(e),role:"radio","aria-checked":t===e,children:i},e))})]})}function tv({user:e,items:t,compact:o=!1,locale:n,onLocaleChange:r,controlLabels:s,showThemeControl:l=!0}){let[c,d]=(0,i.useState)(!1),[p,m]=(0,i.useState)(null),g=(0,i.useRef)(null),u=(0,i.useRef)(null),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c)return;let e=e=>{let t=e.target;g.current?.contains(t)||h.current?.contains(t)||d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[c]),(0,i.useEffect)(()=>{c?u.current&&m(u.current.getBoundingClientRect()):m(null)},[c]);let f=e.name??e.email.split("@")[0],x=f[0]?.toUpperCase()??"?",y=p?{top:Math.round(p.bottom+8),right:Math.max(12,Math.round(window.innerWidth-p.right))}:{top:0,right:12};return(0,a.jsxs)(tn,{ref:g,children:[(0,a.jsxs)(tr,{ref:u,onClick:()=>d(e=>!e),children:[e.avatarUrl?(0,a.jsx)(ts,{src:e.avatarUrl,alt:f}):(0,a.jsx)(tl,{children:x}),!o&&(0,a.jsx)(tc,{children:f})]}),c&&ta().createPortal((0,a.jsxs)(td,{ref:h,style:y,children:[(0,a.jsxs)(tp,{children:[e.avatarUrl?(0,a.jsx)(tm,{src:e.avatarUrl,alt:f}):(0,a.jsx)(tg,{children:x}),(0,a.jsx)(tu,{children:f}),(0,a.jsx)(th,{children:e.email})]}),void 0!==n&&r&&(0,a.jsxs)(tf,{children:[(0,a.jsx)(tx,{children:s?.language??"Language"}),(0,a.jsxs)(ty,{role:"radiogroup","aria-label":s?.language??"Language",children:[(0,a.jsx)(tb,{active:"pt"===n,onClick:()=>r("pt"),role:"radio","aria-checked":"pt"===n,children:"Portugu\xeas"}),(0,a.jsx)(tb,{active:"en"===n,onClick:()=>r("en"),role:"radio","aria-checked":"en"===n,children:"English"})]})]}),l&&(0,a.jsx)(t$,{labels:s}),t.map((e,t)=>(0,a.jsxs)(tw,{danger:e.danger,onClick:()=>{d(!1),e.onClick()},children:[e.icon,e.label]},t))]}),document.body)]})}var tk=o(17681),tj=o(69320),tz=o(19471);let tM={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},tS="atlantis:locale",tT="shell:locale";function tA(e){return"en"===e||"pt"===e}function tC(){try{let e=localStorage.getItem(tS);if(tA(e))return e}catch{}return"en"}function tF(){let[e,t]=(0,i.useState)(tC),o=(0,i.useCallback)(e=>{t(e);try{localStorage.setItem(tS,e)}catch{}eo(tT,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,i.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,i.useEffect)(()=>{ea(tT).then(o=>{if(tA(o)&&o!==e){try{localStorage.setItem(tS,o)}catch{}t(o)}}).catch(()=>{})},[]),[e,o]}function tP(e,t){let o=t?{...tM,...t}:tM;return(t,a)=>{let i=o[t]?.[e]??t;return a?Object.entries(a).reduce((e,[t,o])=>e.replace(RegExp(`\\{${t}\\}`,"g"),String(o)),i):i}}function tL(e,t){let o=Math.floor((Date.now()-new Date(e).getTime())/6e4);if(o<1)return t("time.justNow");if(o<60)return t("time.mAgo",{n:o});let a=Math.floor(o/60);return a<24?t("time.hAgo",{n:a}):t("time.dAgo",{n:Math.floor(a/24)})}ea(tT).then(e=>{if(tA(e))try{localStorage.setItem(tS,e)}catch{}}).catch(()=>{});let tE=l().div`
  display: flex;
  gap: 4px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
`,tN=l().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":d.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":d.w4.colors.mainText};
  }
`;function tD({locale:e,onChange:t}){return(0,a.jsxs)(tE,{children:[(0,a.jsx)(tN,{active:"pt"===e,onClick:()=>t("pt"),children:"PT"}),(0,a.jsx)(tN,{active:"en"===e,onClick:()=>t("en"),children:"EN"})]})}let tI={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>'};function tR(e){return Object.prototype.hasOwnProperty.call(tI,e)}function tB({name:e,size:t=18,strokeWidth:o=1.5,...i}){let n=tI[e];return(0,a.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!i["aria-label"]||void 0,...i,dangerouslySetInnerHTML:{__html:n}})}Object.keys(tI);let tH=l().div`
  position: relative;
  display: inline-block;
`,tK=l().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?d.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?d.w4.colors.borderStrong:d.w4.colors.border};
  border-radius: 999px;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast},
    border-color ${d.w4.transitions.fast},
    color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.borderStrong};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,tO=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${d.w4.colors.accentMuted};
  color: ${d.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`,t_=(0,c.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`,tq=l().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${d.w4.elevation.lg};
  z-index: ${d.w4.zIndex.dropdown};
  animation: ${t_} 0.18s ease both;

  @media (max-width: ${d.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,tY=l()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?d.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.surfaceHover}; }
  &:focus-visible { ${d.w4.focusRing} }
`,tG=l()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,tW=l().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,tJ=l().span`
  font-size: 13.5px;
  color: ${d.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tU=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,tV=l()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,tQ=l().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${d.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,tZ=l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${d.w4.transitions.fast},
    color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    background: ${d.w4.colors.surfaceHover};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,tX=l().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,t0=l().span`
  margin-left: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;function t1({label:e,ariaLabel:t,appsLabel:o,suites:r}){let[s,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null),p=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s)return;let e=e=>{p.current&&!p.current.contains(e.target)&&(l(!1),d(null))},t=e=>{"Escape"===e.key&&(l(!1),d(null))};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[s]);let m=r.reduce((e,t)=>e+t.count,0);return(0,a.jsxs)(tH,{ref:p,children:[(0,a.jsxs)(tK,{open:s,onClick:()=>l(e=>!e),"aria-haspopup":"menu","aria-expanded":s,"aria-label":t,children:[(0,a.jsx)("span",{children:e}),(0,a.jsx)(tO,{title:`${m} ${o}`,"aria-label":`${m} ${o}`,children:m}),(0,a.jsx)(tB,{name:"chevron-down",size:12,"aria-hidden":"true"})]}),s&&(0,a.jsx)(tq,{role:"menu",children:r.map(e=>{let t=c===e.id,i=!!(e.children&&e.children.length>0);return(0,a.jsxs)(n().Fragment,{children:[(0,a.jsxs)(tY,{accent:e.color,expanded:t,onClick:()=>{e.children&&e.children.length>0?d(t=>t===e.id?null:e.id):(e.onClick?.(),l(!1))},role:"menuitem","aria-expanded":i?t:void 0,children:[(0,a.jsx)(tG,{accent:e.color,children:(0,a.jsx)(tB,{name:e.icon,size:18,"aria-hidden":"true"})}),(0,a.jsxs)(tW,{children:[(0,a.jsx)(tJ,{children:e.name}),e.subtitle&&(0,a.jsx)(tU,{children:e.subtitle})]}),(0,a.jsx)(tV,{accent:e.color,title:`${e.count} ${o}`,"aria-label":`${e.count} ${o}`,children:e.count})]}),t&&i&&(0,a.jsx)(tQ,{children:e.children.map(e=>(0,a.jsxs)(tZ,{onClick:()=>{e.onClick(),l(!1),d(null)},role:"menuitem",children:[e.iconName?(0,a.jsx)(tX,{accent:e.accentColor,children:(0,a.jsx)(tB,{name:e.iconName,size:14,"aria-hidden":"true"})}):e.glyph?(0,a.jsx)(tX,{accent:e.accentColor,children:e.glyph}):null,(0,a.jsx)("span",{children:e.name}),e.hash&&(0,a.jsx)(t0,{children:e.hash})]},e.id))})]},e.id)})})]})}let t4=l().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    gap: ${d.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,t2=l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 999px;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
    background: ${d.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,t5=l().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 999px;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};
  white-space: nowrap;

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${d.w4.colors.sidebarHover};
    border: 1px solid ${d.w4.colors.borderSubtle};
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${d.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};
  }

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
    background: ${d.w4.colors.sidebarHover};
  }
  &:hover .kbd {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent}55;
    background: ${d.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,t3=l().div`
  position: relative;
  display: inline-flex;
`,t6=l().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${d.w4.colors.mainBg};
  color: #fff;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,t8=l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${d.w4.colors.accent};
  border: 1px solid ${d.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${d.w4.colors.accentHover};
    border-color: ${d.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`;function t7({locale:e,onLocaleChange:t,user:o,userMenuItems:i=[],userMenuControlLabels:n,suites:r,onPreferences:s,notifications:l,onOpenPalette:c,paletteLabel:d="Search",onSignIn:p,signInLabel:m="Sign in",before:g,after:u}){let h=function(){if("u"<typeof navigator)return"Ctrl";let e=navigator,t=e.userAgentData?.platform??navigator.platform??navigator.userAgent??"";return/Mac|iPod|iPhone|iPad/i.test(t)?"⌘":"Ctrl"}(),f="⌘"===h?`${h}K`:`${h}+K`;return(0,a.jsxs)(t4,{children:[g,r&&r.entries.length>0&&(0,a.jsx)(t1,{label:r.label,ariaLabel:r.ariaLabel,appsLabel:r.appsLabel,suites:r.entries}),c&&(0,a.jsxs)(t5,{onClick:c,"aria-label":d,title:`${d} (${f})`,children:[(0,a.jsx)(tk.A,{size:14}),(0,a.jsx)("span",{className:"kbd header-kbd",children:f})]}),!o&&(0,a.jsx)(tD,{locale:e,onChange:t}),!o&&(0,a.jsx)("span",{className:"header-hide-md",children:(0,a.jsx)(J,{})}),l&&(0,a.jsxs)(t3,{children:[(0,a.jsx)(t2,{onClick:l.onClick,"aria-label":l.label,title:l.label,children:(0,a.jsx)(tB,{name:"bell",size:16})}),l.count>0&&(0,a.jsx)(t6,{"aria-hidden":"true",children:l.count>9?"9+":l.count})]}),s&&(0,a.jsx)("span",{className:"header-hide-md",children:(0,a.jsx)(t2,{onClick:s,"aria-label":"User preferences",title:"Preferences",children:(0,a.jsx)(tj.A,{size:16})})}),o?(0,a.jsx)(tv,{user:o,items:i,locale:e,onLocaleChange:t,controlLabels:n}):p?(0,a.jsxs)(t8,{onClick:p,"aria-label":m,children:[(0,a.jsx)(tz.A,{size:14}),m]}):null,u]})}l().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,l().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,l().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${d.w4.transitions.fast};
`,l().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${d.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,l().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${d.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,l().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${d.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;var t9=o(23318);let oe=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,ot=l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${d.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${oe} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${d.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${d.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,oo=l().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${d.w4.colors.border};
  color: ${d.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${d.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${d.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${d.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${d.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${d.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${d.w4.colors.mainText}; }
    & .b { color: ${d.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${d.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${d.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${d.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${d.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${d.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${d.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${d.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${d.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${d.w4.colors.mainText};
      font-family: ${d.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${d.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${d.w4.colors.mainText};
    }
  }
`,oa=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${d.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${d.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,oi=l().div`
  padding: 6px 14px 16px;
`,on=l().h3`
  margin: 0 0 6px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${d.w4.colors.mainText};

  .hash {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${d.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,or=l().p`
  margin: 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,os=l().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${d.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.4;
`,ol=l().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${d.w4.transitions.fast}, color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
  }
`,oc=l().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast};
  z-index: 3;
`,od={markdown:!0,school:!0,earth:!0,cosmos:!0,techscope:!0,citypulse:!0,stockpulse:!0,weather:!0,daily:!0,csvexplorer:!0,chartbuilder:!0,pad:!0,regexlab:!0,jsonexplorer:!0,codediff:!0,playground:!0,jwtinspector:!0,colorlab:!0,cronbuilder:!0,apiexplorer:!0,movies:!0,promptlab:!0,imagegen:!0,ask:!0,games:!0,devtools:!0},op=["linear-gradient(135deg,#234b6b,#0d1024)","linear-gradient(135deg,#3e6060,#0e2424)","linear-gradient(135deg,#34578c,#0c1828)","linear-gradient(135deg,#6a4a7c,#2a1a34)","linear-gradient(135deg,#6d4d7c,#20102c)","linear-gradient(135deg,#b4503a,#30120b)","linear-gradient(135deg,#d94a4a,#4a1414)","linear-gradient(135deg,#d29922,#30280a)"],om=[{bg:"linear-gradient(135deg,#ff6fa9,#4a1a2a)",glyph:"Qf"},{bg:"linear-gradient(135deg,#d86a6a,#3a1010)",glyph:"\xd7○",fg:"#fff"},{bg:"linear-gradient(135deg,#7fb77e,#0e2414)",glyph:"hz"},{bg:"linear-gradient(135deg,#e89a5c,#3a200e)",glyph:"\xa7"},{bg:"linear-gradient(135deg,#6aa8d8,#10283a)",glyph:"▦"},{bg:"linear-gradient(135deg,#c4b24a,#2a2410)",glyph:"◎"},{bg:"linear-gradient(135deg,#8b7bff,#1a1a40)",glyph:"✱"},{bg:"linear-gradient(135deg,#f97583,#3a1418)",glyph:"‼"}],og=["#f78166","#d29922","#3fb950","#58a6ff","#a371f7"],ou=[40,65,52,78,30,88,45,70,58,82,35,62,72,48,90,55],oh=[{bg:"linear-gradient(135deg,#d29922,#3a2a10)",glyph:"{}",active:!0},{bg:"linear-gradient(135deg,#58a6ff,#10243a)",glyph:"/~"},{bg:"linear-gradient(135deg,#a371f7,#1a1430)",glyph:"◐"},{bg:"linear-gradient(135deg,#3fb950,#10301a)",glyph:"▤"},{bg:"linear-gradient(135deg,#f78166,#3a200e)",glyph:"#"},{bg:"linear-gradient(135deg,#79c0ff,#14243a)",glyph:"Δ"},{bg:"linear-gradient(135deg,#c4b24a,#2a2410)",glyph:"◇"},{bg:"linear-gradient(135deg,#ff6fa9,#3a1424)",glyph:"*/"},{bg:"linear-gradient(135deg,#8b7bff,#1a1a40)",glyph:"⧖"},{bg:"linear-gradient(135deg,#6aa8d8,#10283a)",glyph:"⎈"},{bg:"linear-gradient(135deg,#e89a5c,#3a200e)",glyph:"⟶"},{bg:"linear-gradient(135deg,#7fb77e,#0e2414)",glyph:"∎"}];function of({vizId:e,label:t,description:o,hash:n,category:r,accentColor:s,needsAuth:l,pinned:c,index:p=0,onClick:m,onTogglePin:g,reorderControls:u,onHoverIntent:h,extra:f}){let x=Object.prototype.hasOwnProperty.call(od,e)?e:"generic",y=(0,i.useRef)(null),b=(0,i.useRef)(!1),w=()=>{null!==y.current&&(window.clearTimeout(y.current),y.current=null)};return(0,i.useEffect)(()=>w,[]),(0,a.jsxs)(ot,{role:"button",tabIndex:0,accentColor:s,pinned:c,index:p,onClick:m,onMouseEnter:h?()=>{h&&!b.current&&(w(),y.current=window.setTimeout(()=>{b.current=!0,y.current=null,h()},200))}:void 0,onMouseLeave:h?w:void 0,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),m())},children:[u&&(0,a.jsx)(oc,{className:"pin-controls",children:u}),g&&(0,a.jsx)(ol,{className:"pin-btn",type:"button",pinned:!!c,"aria-label":c?"Unpin":"Pin to top",onClick:e=>{e.stopPropagation(),g?.()},children:(0,a.jsx)(t9.A,{size:14,fill:c?"currentColor":"none"})}),(0,a.jsx)(oo,{className:`viz viz--${x}`,accentColor:s,children:function(e,t,o){switch(e){case"markdown":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"h"}),(0,a.jsx)("span",{className:"l1"}),(0,a.jsx)("span",{className:"l2"}),(0,a.jsx)("span",{className:"l3"}),(0,a.jsx)("span",{className:"l4"})]});case"school":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"lb",children:"School"}),(0,a.jsx)("div",{className:"col"}),(0,a.jsx)("div",{className:"col"}),(0,a.jsx)("div",{className:"col"}),(0,a.jsx)("div",{className:"col"})]});case"earth":return(0,a.jsx)("div",{className:"g"});case"cosmos":case"citypulse":case"chartbuilder":return null;case"techscope":return(0,a.jsx)(a.Fragment,{children:ou.map((e,t)=>(0,a.jsx)("span",{style:{height:`${e}%`}},t))});case"stockpulse":return(0,a.jsx)(a.Fragment,{children:[0,1,0,0,1,0,0,0,1,0,0,0].map((e,t)=>(0,a.jsx)("div",{className:e?"c r":"c"},t))});case"csvexplorer":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"h",children:"id"}),(0,a.jsx)("span",{className:"h",children:"name"}),(0,a.jsx)("span",{className:"h",children:"qty"}),(0,a.jsx)("span",{className:"h",children:"px"}),(0,a.jsx)("span",{children:"01"}),(0,a.jsx)("span",{children:"alfa"}),(0,a.jsx)("span",{children:"12"}),(0,a.jsx)("span",{children:"1.2"}),(0,a.jsx)("span",{children:"02"}),(0,a.jsx)("span",{children:"beta"}),(0,a.jsx)("span",{children:"8"}),(0,a.jsx)("span",{children:"0.9"})]});case"pad":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"t"}),(0,a.jsx)("span",{className:"a"}),(0,a.jsx)("span",{className:"b"}),(0,a.jsx)("span",{className:"c"}),(0,a.jsx)("span",{className:"d"})]});case"regexlab":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"slash",children:"/"}),(0,a.jsx)("span",{children:"("}),(0,a.jsx)("span",{className:"hl",children:"[a-z]+"}),(0,a.jsx)("span",{children:")"}),(0,a.jsx)("span",{className:"slash",children:"/g"})]});case"jsonexplorer":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"b",children:"{"}),(0,a.jsx)("br",{}),"\xa0\xa0",(0,a.jsx)("span",{className:"k",children:'"user"'}),": ",(0,a.jsx)("span",{className:"v",children:'"dev"'}),",",(0,a.jsx)("br",{}),"\xa0\xa0",(0,a.jsx)("span",{className:"k",children:'"apps"'}),": ",(0,a.jsx)("span",{className:"b",children:"["}),(0,a.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,a.jsx)("span",{className:"v",children:'"markdown"'}),",",(0,a.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,a.jsx)("span",{className:"v",children:'"school"'}),(0,a.jsx)("br",{}),"\xa0\xa0",(0,a.jsx)("span",{className:"b",children:"]"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"b",children:"}"})]});case"codediff":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)("span",{className:"a"}),(0,a.jsx)("span",{className:"n",style:{width:"70%"}}),(0,a.jsx)("span",{className:"a"}),(0,a.jsx)("span",{className:"n",style:{width:"55%"}}),(0,a.jsx)("span",{className:"n"}),(0,a.jsx)("span",{className:"n",style:{width:"80%"}})]}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)("span",{className:"g"}),(0,a.jsx)("span",{className:"n",style:{width:"70%"}}),(0,a.jsx)("span",{className:"g"}),(0,a.jsx)("span",{className:"g"}),(0,a.jsx)("span",{className:"n",style:{width:"55%"}}),(0,a.jsx)("span",{className:"n",style:{width:"80%"}})]})]});case"playground":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"tube"}),(0,a.jsx)("div",{className:"tube",style:{height:45}}),(0,a.jsx)("div",{className:"tube",style:{height:50}})]});case"jwtinspector":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"h",children:"header"}),(0,a.jsx)("span",{className:"sep",children:"\xb7"}),(0,a.jsx)("span",{className:"p",children:"payload"}),(0,a.jsx)("span",{className:"sep",children:"\xb7"}),(0,a.jsx)("span",{className:"s",children:"sig"})]});case"colorlab":return(0,a.jsx)(a.Fragment,{children:og.map(e=>(0,a.jsx)("span",{style:{background:e}},e))});case"cronbuilder":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"row","data-l":"m",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{})]}),(0,a.jsxs)("div",{className:"row","data-l":"h",children:[(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsxs)("div",{className:"row","data-l":"d",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{})]})]});case"weather":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"sun"}),(0,a.jsxs)("div",{className:"temp",children:["15",(0,a.jsx)("small",{children:"\xb0"})]})]});case"apiexplorer":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"get",children:"GET"})," ",(0,a.jsx)("span",{className:"url",children:"/api/v1/users/me"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"status",children:"200 OK"})," \xb7 42 ms"]}),(0,a.jsx)("div",{className:"echo",children:'→ { id: 1, role: "dev" }'})]});case"movies":return(0,a.jsx)(a.Fragment,{children:op.map((e,t)=>(0,a.jsx)("span",{style:{background:e}},t))});case"promptlab":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"bubble",children:"Write a haiku about the fog at 6am."}),(0,a.jsx)("div",{className:"bubble r",children:"Low mist. Bridge lamps hum. The ferry horn splits the grey…"})]});case"imagegen":return(0,a.jsx)("div",{className:"frame"});case"ask":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"ask-user",children:"Como ajudo?"}),(0,a.jsx)("div",{className:"ask-spark","aria-hidden":"true"}),(0,a.jsxs)("div",{className:"ask-reply",children:[(0,a.jsx)("span",{className:"h"}),(0,a.jsx)("span",{className:"b1"}),(0,a.jsx)("span",{className:"b2"}),(0,a.jsx)("span",{className:"b3"})]})]});case"devtools":return(0,a.jsx)(a.Fragment,{children:oh.map((e,t)=>(0,a.jsx)("span",{className:e.active?"active":"",style:{background:e.bg},children:e.glyph},t))});case"daily":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"ring r1"}),(0,a.jsx)("div",{className:"ring r2"}),(0,a.jsx)("div",{className:"ring r3"}),(0,a.jsx)("div",{className:"dot"})]});case"games":return(0,a.jsx)(a.Fragment,{children:om.map((e,t)=>(0,a.jsx)("span",{style:{background:e.bg,color:e.fg??d.w4.colors.mainText},children:e.glyph},t))});default:return(0,a.jsx)("span",{className:"viz-mono",style:{color:o},children:function(e){let t=e.trim().split(/\s+/).filter(Boolean);if(0===t.length)return"\xb7\xb7";if(1===t.length){let e=t[0];return(e[0]+(e[1]??"\xb7")).toUpperCase().slice(0,2)}return(t[0][0]+t[1][0]).toUpperCase()}(t)})}}(x,t,s)}),(0,a.jsxs)(oa,{accentColor:s,children:[(0,a.jsx)("span",{className:"dot"}),(0,a.jsx)("span",{className:"cat",children:r}),l&&(0,a.jsx)("span",{className:"lock",children:"◉ AUTH"})]}),(0,a.jsxs)(oi,{children:[(0,a.jsxs)(on,{children:[t,(0,a.jsx)("span",{className:"hash",children:n})]}),(0,a.jsx)(or,{children:o}),f&&(0,a.jsx)(os,{children:f})]})]})}l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?d.w4.colors.borderStrong:d.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?d.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?d.w4.colors.mainTextMuted:d.w4.colors.accent};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${d.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?d.w4.colors.mainTextFaint:d.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?d.w4.colors.mainText:d.w4.colors.accentHover};
  }

  &:focus-visible {
    ${d.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,l().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let ox={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:d.w4.colors.accentMuted},oy={neutral:d.w4.colors.mainTextMuted,live:d.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:d.w4.colors.accent};l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?d.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>ox[e]};
  color: ${({tone:e})=>oy[e]};
`,l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;let ob=l().kbd`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 3px;
  color: ${d.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;function ow({children:e,...t}){return(0,a.jsx)(ob,{...t,children:e})}let o$=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function ov({children:e,...t}){return(0,a.jsx)(o$,{...t,children:e})}let ok=l().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${d.w4.transitions.fast};

  &:focus-within {
    border-color: ${d.w4.colors.accent};
  }
`,oj=l().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  color: ${d.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${d.w4.colors.mainTextFaint};
  }
`,oz=l().span`
  display: inline-flex;
  align-items: center;
  color: ${d.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,oM=n().forwardRef(function({before:e,after:t,...o},i){return(0,a.jsxs)(ok,{children:[e&&(0,a.jsx)(oz,{children:e}),(0,a.jsx)(oj,{ref:i,...o}),t&&(0,a.jsx)(oz,{children:t})]})}),oS=l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px 20px 20px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.lg};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  transition: border-color ${d.w4.transitions.fast},
    background ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,oT=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,oA=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,oC=l().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,oF=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,oP=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function oL({title:e,accessory:t,accentColor:o,error:i,errorLabel:n,children:r}){return(0,a.jsxs)(oS,{accentColor:o,children:[(0,a.jsxs)(oT,{children:[(0,a.jsx)(ov,{children:e}),t&&(0,a.jsx)(oA,{children:t})]}),i?(0,a.jsxs)(oF,{role:"alert",children:[(0,a.jsx)(oP,{children:n??"Error"}),(0,a.jsx)("div",{children:i})]}):(0,a.jsx)(oC,{children:r})]})}l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${d.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.lg};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${d.w4.colors.accent}`:"none"};
  transition: border-color ${d.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?d.w4.colors.accentHover:d.w4.colors.borderStrong};
  }
`,l().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,l().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,l().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,l().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${d.w4.colors.mainText};
  margin-bottom: 4px;
`,l().div`
  font-size: 11.5px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,l().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${d.w4.colors.accentMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
`,l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,l().button`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${d.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${d.w4.transitions.fast},
    background ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.borderStrong};
    background: ${d.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${d.w4.focusRing}
  }
`,l().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainText};
`,l().div`
  margin-top: 14px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`;let oE=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${oE} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${d.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${d.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${d.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${d.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,l().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  z-index: 2;
`,l().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,l().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,l().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,l().div`
  padding: 6px 14px 16px;
`,l().h3`
  margin: 0 0 6px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${d.w4.colors.mainText};

  .hash {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${d.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,l().p`
  margin: 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`;var oN=o(11352),oD=o(76710),oI=o(4311),oR=o(73639),oB=o(8411);o(75406),l().nav`padding: ${d.w4.spacing.sm} 0;`,l().div`
  border-bottom: 1px solid ${d.w4.colors.border}60;
  margin-bottom: 2px;
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${d.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${d.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${d.w4.colors.sidebarText}; }
`,l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,l().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,l().div`overflow: hidden;`,l().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,l().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${d.w4.spacing.md};
  background: ${({active:e})=>e?d.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?d.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?d.w4.colors.sidebarActive:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${d.w4.colors.sidebarHover}; }
`,l().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":d.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;let oH=l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,oK=l().pre`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.md};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${d.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,oO=!1;function o_(e){if("u"<typeof window)return e;let t=e.match(/^var\((--[-\w]+)\)$/);return t&&getComputedStyle(document.documentElement).getPropertyValue(t[1]).trim()||e}function oq({code:e}){let t=(0,i.useRef)(null),[n,r]=(0,i.useState)(null),[s,l]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let a=!1;if(r(null),l(!1),!e.trim())return void l(!0);let i=e.trim().split(/\r?\n/)[0]?.trim()??"";return/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/.test(i)?(async function(){let i=(await o.e("6087").then(o.bind(o,29738))).default;if(oO||(i.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:o_(d.w4.colors.codeBg),primaryColor:o_(d.w4.colors.accent),primaryTextColor:o_(d.w4.colors.mainText),lineColor:o_(d.w4.colors.border)}}),oO=!0),t.current&&!a)try{let o=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:n}=await i.render(o,e);if(a||!t.current)return;if(/aria-roledescription="error"|class="error-icon"|>Syntax error/i.test(n))return void l(!0);t.current.innerHTML=n,requestAnimationFrame(()=>{if(a||!t.current)return;let e=t.current.querySelector("svg");if(!e)return void l(!0);let o=e.getBoundingClientRect();(o.width<40||o.height<40)&&l(!0)})}catch(e){a||r(e instanceof Error?e.message:String(e))}}(),()=>{a=!0}):void l(!0)},[e]),n||s)?(0,a.jsx)(oK,{children:e.trim()}):(0,a.jsx)(oH,{ref:t})}let oY=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],oG=l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,oW=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  margin-bottom: ${d.w4.spacing.md};
  text-align: center;
`,oJ=l().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  margin-top: ${d.w4.spacing.md};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
`,oU=l().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,oV=l().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,oQ=l().pre`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.md};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${d.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`;function oZ(e){if(e<=0)return 10;let t=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/t)*t}function oX({labels:e,data:t,colors:o}){let i=340,n=176,r=oZ(Math.max(...t,1)),s=Math.min(40,i/e.length*.6),l=i/e.length,c=Array.from({length:6},(e,t)=>r/5*t);return(0,a.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,t)=>{let o=16+n-e/r*n;return(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:d.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,a.jsx)("text",{x:38,y:o+4,fill:d.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:d.w4.typography.fontFamily,children:Math.round(e)})]},t)}),t.map((t,i)=>{let c=44+l*i+l/2-s/2,p=t/r*n,m=16+n-p,g=o[i%o.length];return(0,a.jsxs)("g",{children:[(0,a.jsxs)("rect",{x:c,y:m,width:s,height:p,rx:3,fill:g,opacity:.85,children:[(0,a.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,a.jsx)("animate",{attributeName:"y",from:16+n,to:m,dur:"0.5s",fill:"freeze"})]}),(0,a.jsx)("text",{x:c+s/2,y:m-4,fill:d.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:t}),(0,a.jsx)("text",{x:44+l*i+l/2,y:208,fill:d.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:e[i].length>8?e[i].slice(0,7)+"…":e[i]})]},i)})]})}function o0({labels:e,data:t,colors:o}){let i=t.reduce((e,t)=>e+t,0)||1,n=-Math.PI/2,r=t.map((e,t)=>{let r=e/i*Math.PI*2,s=n,l=n+=r,c=120+90*Math.cos(s),p=120+90*Math.sin(s),m=120+90*Math.cos(l),g=120+90*Math.sin(l),u=+(r>Math.PI),h=s+r/2,f=120+58.5*Math.cos(h),x=120+58.5*Math.sin(h),y=Math.round(e/i*100);return(0,a.jsxs)("g",{children:[(0,a.jsx)("path",{d:`M 120 120 L ${c} ${p} A 90 90 0 ${u} 1 ${m} ${g} Z`,fill:o[t%o.length],stroke:d.w4.colors.codeBg,strokeWidth:2,opacity:.85}),y>=5&&(0,a.jsxs)("text",{x:f,y:x+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:[y,"%"]})]},t)});return(0,a.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:r})}function o1({labels:e,data:t,colors:o}){let i=340,n=176,r=oZ(Math.max(...t,1)),s=t.length>1?i/(t.length-1):i,l=o[0],c=t.map((e,t)=>({x:44+s*t,y:16+n-e/r*n})),p=c.map((e,t)=>`${0===t?"M":"L"} ${e.x} ${e.y}`).join(" "),m=Array.from({length:6},(e,t)=>r/5*t);return(0,a.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[m.map((e,t)=>{let o=16+n-e/r*n;return(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:d.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,a.jsx)("text",{x:38,y:o+4,fill:d.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:d.w4.typography.fontFamily,children:Math.round(e)})]},t)}),(0,a.jsx)("path",{d:p,fill:"none",stroke:l,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((o,i)=>(0,a.jsxs)("g",{children:[(0,a.jsx)("circle",{cx:o.x,cy:o.y,r:4,fill:l,stroke:d.w4.colors.codeBg,strokeWidth:2}),(0,a.jsx)("text",{x:o.x,y:o.y-10,fill:d.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:t[i]}),(0,a.jsx)("text",{x:o.x,y:208,fill:d.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:e[i].length>8?e[i].slice(0,7)+"…":e[i]})]},i))]})}function o4({code:e}){let t=(0,i.useMemo)(()=>(function(e){let t,o,a=e.trim().split("\n"),i="bar",n=[],r=[];for(let e of a){let[a,...s]=e.split(":"),l=s.join(":").trim();if(l)switch(a.trim().toLowerCase()){case"type":["bar","pie","line"].includes(l.toLowerCase())&&(i=l.toLowerCase());break;case"title":t=l;break;case"labels":n=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":r=l.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":o=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return n.length&&r.length?{type:i,title:t,labels:n,data:r,colors:o}:null})(e),[e]);if(!t)return(0,a.jsx)(oQ,{children:e.trim()});let o=t.colors??oY;return(0,a.jsxs)(oG,{children:[t.title&&(0,a.jsx)(oW,{children:t.title}),"bar"===t.type&&(0,a.jsx)(oX,{labels:t.labels,data:t.data,colors:o}),"pie"===t.type&&(0,a.jsx)(o0,{labels:t.labels,data:t.data,colors:o}),"line"===t.type&&(0,a.jsx)(o1,{labels:t.labels,data:t.data,colors:o}),(0,a.jsx)(oJ,{children:t.labels.map((e,t)=>(0,a.jsxs)(oU,{children:[(0,a.jsx)(oV,{color:o[t%o.length]}),e]},t))})]})}l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${d.w4.spacing.md};
`,l().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,l().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,l().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.accent};
  }
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  text-align: center;
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  text-align: center;
`;let o2=(0,c.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  margin: ${d.w4.spacing.lg} 0;
`,l().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${d.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${d.w4.colors.accent}40;
    box-shadow: 0 0 8px ${d.w4.colors.accent}15;
  }
`;let o5=l().button`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding: 14px ${d.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${d.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${o2} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;l()(o5)`
  border-bottom: 1px solid ${d.w4.colors.border}80;
`,l()(o5)``,l().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,l().span`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.accent};
`,l().span`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
`;var o3=o(17223),o6=o(21426),o8=o(25609),o7=o(20320);let o9=l().div`
  margin: ${d.w4.spacing.lg} 0;
  border-radius: ${d.w4.borderRadius.md};
  border: 1px solid ${d.w4.colors.codeBorder};
  overflow: hidden;
`,ae=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${d.w4.colors.codeBorder};
`,at=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,ao=l().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":d.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${d.w4.colors.sidebarText}; border-color: ${d.w4.colors.sidebarText}; }
`,aa={...o6.A,'pre[class*="language-"]':{...o6.A['pre[class*="language-"]'],background:d.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...o6.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function ai({lang:e="text",code:t}){let[o,n]=(0,i.useState)(!1);return(0,a.jsxs)(o9,{children:[(0,a.jsxs)(ae,{children:[(0,a.jsx)(at,{children:e}),(0,a.jsxs)(ao,{copied:o,onClick:()=>{navigator.clipboard.writeText(t).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})},children:[o?(0,a.jsx)(o8.A,{size:12}):(0,a.jsx)(o7.A,{size:12}),o?"Copied!":"Copy"]})]}),(0,a.jsx)(o3.A,{language:e,style:aa,showLineNumbers:t.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:d.w4.colors.codeBg},wrapLongLines:!1,children:t})]})}var an=o(65569),ar=o(8218),as=o(57230),al=o(22966),ac=o(21069);let ad={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:an.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:ar.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:as.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:al.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:ac.A,label:"Caution",color:"#f85149"}},ap=l().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${d.w4.borderRadius.md} ${d.w4.borderRadius.md} 0;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
`,am=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${d.w4.typography.fontFamily};
  margin-bottom: ${d.w4.spacing.sm};
`,ag=l().div`
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function au({type:e,children:t}){let o=ad[e]??ad.NOTE,i=o.icon;return(0,a.jsxs)(ap,{bg:o.bg,border:o.border,children:[(0,a.jsxs)(am,{color:o.color,children:[(0,a.jsx)(i,{size:15,strokeWidth:2}),o.label]}),(0,a.jsx)(ag,{children:t})]})}l().nav`
  width: 220px;
  min-width: 220px;
  padding: ${d.w4.spacing.xxl} 0 ${d.w4.spacing.xxl} ${d.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,l().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  margin-bottom: ${d.w4.spacing.md};
`,l().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,l().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${d.w4.typography.fontSizeSm};
  font-family: ${d.w4.typography.fontFamily};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  border-radius: 0 ${d.w4.borderRadius.sm} ${d.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${d.w4.colors.mainText}; background: ${d.w4.colors.sidebarHover}; }
`,l().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${d.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,l().div`flex: 1; min-width: 0;`,l().article`
  padding: ${d.w4.spacing.xxl} 0;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  line-height: ${d.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${d.w4.spacing.xl} 0 ${d.w4.spacing.md};
    color: ${d.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${d.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${d.w4.typography.fontSizeXl}; border-bottom: 1px solid ${d.w4.colors.border}; padding-bottom: ${d.w4.spacing.sm}; }
  h2 { font-size: ${d.w4.typography.fontSizeLg}; border-bottom: 1px solid ${d.w4.colors.border}; padding-bottom: ${d.w4.spacing.xs}; }
  h3 { font-size: ${d.w4.typography.fontSizeMd}; }

  p { margin: ${d.w4.spacing.md} 0; }

  a { color: ${d.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${d.w4.colors.accentHover}; } }

  ul, ol { margin: ${d.w4.spacing.md} 0; padding-left: ${d.w4.spacing.xl}; }
  li { margin: ${d.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${d.w4.colors.border};
    margin: ${d.w4.spacing.lg} 0;
    padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg};
    background: ${d.w4.colors.surface};
    color: ${d.w4.colors.mainTextMuted};
    border-radius: 0 ${d.w4.borderRadius.sm} ${d.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${d.w4.colors.codeBg};
    border: 1px solid ${d.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${d.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${d.w4.spacing.lg} 0; font-size: ${d.w4.typography.fontSizeBase}; }
  th, td { padding: ${d.w4.spacing.sm} ${d.w4.spacing.md}; border: 1px solid ${d.w4.colors.border}; text-align: left; }
  th { background: ${d.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${d.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${d.w4.colors.border}; margin: ${d.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${d.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${d.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${d.w4.spacing.lg} 0; }
`,l().div`
  display: flex;
  gap: ${d.w4.spacing.lg};
  padding: ${d.w4.spacing.xxl} 0;
  border-top: 1px solid ${d.w4.colors.border};
  margin-top: ${d.w4.spacing.xxl};
`,l().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${d.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,l().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${d.w4.colors.sidebarTextMuted}; font-family: ${d.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,l().div`
  font-size: ${d.w4.typography.fontSizeBase}; color: ${d.w4.colors.accent};
  font-family: ${d.w4.typography.fontFamily}; font-weight: 500;
`,l().div`
  color: ${d.w4.colors.mainTextMuted};
  padding: ${d.w4.spacing.xxl} ${d.w4.spacing.xl};
  font-family: ${d.w4.typography.fontFamily};
`;let ah=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,af=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;function ax(){let e=/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i;return t=>{function o(t,o,a){let i=o.children?.[0];i?.type==="text"&&(i.value=i.value.replace(e,""),i.value.trim()||1!==o.children.length||o.children.shift()),t.data=t.data??{},t.data.hName="div",t.data.hProperties={"data-callout":a.toUpperCase()}}!function t(a){if("blockquote"===a.type){let t=a.children?.[0];if(t?.type==="paragraph"){let i=t.children?.[0],n=i?.type==="text"&&i.value?.match(e);n&&o(a,t,n[1])}}if("paragraph"===a.type){let t=a.children?.[0],i=t?.type==="text"&&t.value?.match(e);if(i){let t=[...a.children];a.children=[{type:"paragraph",children:t}],o(a,a.children[0],i[1]);let n=t[0];n?.type==="text"&&(n.value=n.value.replace(e,""),n.value.trim()||1!==t.length||t.shift());return}}a.children?.forEach(t)}(t)}}l().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${ah} 0.15s ease;
`,l().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${d.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${af} 0.2s ease;
`,l().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,l().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  &::placeholder { color: ${d.w4.colors.sidebarTextMuted}; }
`,l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${d.w4.colors.sidebarHover};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${d.w4.colors.mainText}; background: ${d.w4.colors.border}; }
`,l().div`
  flex: 1;
  overflow-y: auto;
  padding: ${d.w4.spacing.sm} 0;
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.sidebarTextMuted};
`,l().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,l().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?d.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${d.w4.colors.sidebarHover}; }
`,l().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${d.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${d.w4.colors.accent}20`:d.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,l().div`
  flex: 1;
  min-width: 0;
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,l().span`
  font-weight: 400;
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.sidebarTextMuted};
`,l().span`
  font-size: 11px;
  font-weight: 500;
  color: ${d.w4.colors.accent};
  background: ${d.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${d.w4.colors.accent}25;
    color: ${d.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,l().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?d.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,l().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${d.w4.colors.border};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
`,l().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${d.w4.colors.sidebarHover};
  border: 1px solid ${d.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.sidebarTextMuted};
`,l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  text-align: center;
`,l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${d.w4.typography.fontFamily};
  background: ${d.w4.colors.mainBg};
`,l().div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,l().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${d.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${d.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,l().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,l().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${d.w4.colors.mainText} 0%,
    ${d.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,l().p`
  font-size: ${d.w4.typography.fontSizeMd};
  color: ${d.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,l().span`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${d.w4.colors.sidebarHover};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: ${d.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${d.w4.colors.accent}60;
    color: ${d.w4.colors.mainText};
    background: ${d.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${d.w4.colors.surface};
    border: 1px solid ${d.w4.colors.border};
    border-radius: 3px;
    color: ${d.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,l().div`
  display: flex;
  gap: 4px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
`,l().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":d.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":d.w4.colors.mainText};
  }
`,l().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${d.w4.spacing.md}`};
  border-bottom: 1px solid ${d.w4.colors.border}60;
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${d.w4.colors.accent}10`:d.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${d.w4.colors.accent}40`:"transparent"};
  border-radius: ${d.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,l().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${d.w4.colors.sidebarText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${d.w4.colors.sidebarTextMuted}; }
`,l().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  border-radius: ${d.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${d.w4.colors.mainText}; }
`,l().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${d.w4.spacing.sm} 0;
`,l().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${d.w4.spacing.md};
  background: ${({active:e})=>e?d.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?d.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${d.w4.colors.sidebarHover}; }
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${d.w4.colors.sidebarText};
`,l().span`
  font-weight: 400;
  color: ${d.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${d.w4.colors.accent}30;
    color: ${d.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,l().div`
  padding: 12px ${d.w4.spacing.md};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,l().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,l().span`
  font-size: 11px;
  color: ${d.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`;let ay=l().div`
  font-size: 14px;
  color: ${d.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${d.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-child { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${d.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${d.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${d.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${d.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${d.w4.colors.accent};
    background: ${d.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${d.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${d.w4.colors.codeBg};
    border: 1px solid ${d.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${d.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${d.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${d.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${d.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${d.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${d.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${d.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${d.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`;function ab({children:e}){return(0,a.jsx)(ay,{children:(0,a.jsx)(oN.oz,{remarkPlugins:[oD.A,oI.A,ax],rehypePlugins:[oR.A,oB.A],components:{div({node:e,children:t,...o}){let i=o["data-callout"];return i?(0,a.jsx)(au,{type:i,children:t}):(0,a.jsx)("div",{...o,children:t})},pre:({children:e})=>(0,a.jsx)(a.Fragment,{children:e}),code({className:e,children:t}){let o=/language-(\w+)/.exec(e??"")?.[1],i=String(t).replace(/\n$/,"");return i.trim()?"mermaid"===o?(0,a.jsx)(oq,{code:i}):"chart"===o?(0,a.jsx)(o4,{code:i}):o||i.includes("\n")?(0,a.jsx)(ai,{lang:o,code:i}):(0,a.jsx)("code",{className:e,children:t}):null}},children:e})})}l().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${d.w4.spacing.sm} 0;
`,l().div`
  font-size: 10px;
  font-weight: 600;
  color: ${d.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${d.w4.spacing.xs} ${d.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;var aw=o(5368),a$=o(54872),av=o(85390),ak=o(70679),aj=o(302),az=o(69753),aM=o(37561);let aS={markdown:()=>o.e("4873").then(o.t.bind(o,27280,23)),earth:()=>o.e("3678").then(o.t.bind(o,67997,23)),techscope:()=>o.e("6514").then(o.t.bind(o,93305,23)),citypulse:()=>o.e("9462").then(o.t.bind(o,29829,23)),cosmos:()=>o.e("5616").then(o.t.bind(o,47699,23)),stockpulse:()=>o.e("1395").then(o.t.bind(o,49614,23)),pad:()=>o.e("9103").then(o.t.bind(o,3250,23)),regexlab:()=>o.e("4898").then(o.t.bind(o,22745,23)),jsonexplorer:()=>o.e("8065").then(o.t.bind(o,56776,23)),codediff:()=>o.e("4026").then(o.t.bind(o,21937,23)),playground:()=>o.e("3141").then(o.t.bind(o,41780,23)),jwtinspector:()=>o.e("5394").then(o.t.bind(o,58633,23)),colorlab:()=>o.e("4274").then(o.t.bind(o,28105,23)),cronbuilder:()=>o.e("6001").then(o.t.bind(o,97672,23)),csvexplorer:()=>o.e("9773").then(o.t.bind(o,95836,23)),chartbuilder:()=>o.e("2467").then(o.t.bind(o,83902,23)),school:()=>o.e("4848").then(o.t.bind(o,355,23)),weather:()=>o.e("446").then(o.t.bind(o,73437,23)),apiexplorer:()=>o.e("5153").then(o.t.bind(o,86488,23)),movies:async()=>{let e=await o.e("649").then(o.t.bind(o,22304,23)),t=e.default;return{default:("object"==typeof t&&t&&"default"in t?t.default:t)??e.default}},promptlab:()=>o.e("747").then(o.t.bind(o,15014,23)),imagegen:()=>o.e("3213").then(o.t.bind(o,67820,23)),games:()=>o.e("3009").then(o.t.bind(o,96840,23)),daily:()=>o.e("3531").then(o.t.bind(o,64438,23)),ask:()=>o.e("7335").then(o.t.bind(o,68170,23))},aT=Object.fromEntries(Object.entries(aS).map(([e,t])=>[e,n().lazy(t)])),aA=new Set;function aC(e){if(aA.has(e))return;let t=aS[e];if(!t)return;let o=navigator.connection;o?.saveData||(aA.add(e),t().catch(()=>{aA.delete(e)}))}let aF={All:{en:"All",pt:"Todas"},Live:{en:"Live",pt:"Ao Vivo"},School:{en:"School",pt:"Escola"},Explore:{en:"Explore",pt:"Explorar"},Create:{en:"Create",pt:"Criar"},Inspect:{en:"Inspect",pt:"Analisar"},Connect:{en:"Connect",pt:"Conectar"},Content:{en:"Content",pt:"Conte\xfado"},Fun:{en:"Fun",pt:"Divers\xe3o"},Lab:{en:"Lab",pt:"Lab"},Tools:{en:"Tools",pt:"Ferramentas"}},aP={"AI Lab":{en:"AI Lab",pt:"Lab de IA"},"Developer Toolkit":{en:"Developer Toolkit",pt:"Ferramentas Dev"},"Data Studio":{en:"Data Studio",pt:"Est\xfadio de Dados"},"Life Dashboard":{en:"Life Dashboard",pt:"Painel de Vida"},"Learning Hub":{en:"Learning Hub",pt:"Aprendizagem"},"Game Room":{en:"Game Room",pt:"Sala de Jogos"},Entertainment:{en:"Entertainment",pt:"Entretenimento"},Other:{en:"Other",pt:"Outros"}},aL={categories:{en:"Categories",pt:"Categorias"},tagline:{en:"Everything happening on the internet. In one place.",pt:"Tudo o que acontece na internet. Num s\xf3 lugar."},searchApps:{en:"Search apps, widgets, places…",pt:"Pesquisar apps, widgets, lugares…"},openLauncher:{en:"to open launcher",pt:"para abrir launcher"},pinned:{en:"Pinned",pt:"Fixos"},recentlyUsed:{en:"Recently used",pt:"Usados recentemente"},noMatch:{en:"No apps match",pt:"Nenhuma app corresponde a"},open:{en:"Open",pt:"Abrir"},suites:{en:"Suites",pt:"Suites"},"greeting.morning":{en:"Good morning",pt:"Bom dia"},"greeting.afternoon":{en:"Good afternoon",pt:"Boa tarde"},"greeting.evening":{en:"Good evening",pt:"Boa noite"},dashboard:{en:"Dashboard",pt:"Painel"},addWidget:{en:"Add widget",pt:"Adicionar widget"},"home.today":{en:"Today",pt:"Hoje"},"home.weather.city":{en:"Lisbon",pt:"Lisboa"},"home.emptyFiltered.title":{en:"No apps to show",pt:"Sem apps para mostrar"},"home.emptyFiltered.desc":{en:"Your current filters don't match any apps. Try a different suite or category, or adjust your interests in Preferences.",pt:"Os filtros atuais n\xe3o correspondem a nenhuma app. Escolhe outra su\xedte ou categoria, ou ajusta os teus interesses nas Prefer\xeancias."},"home.emptyFiltered.cta":{en:"Open Preferences",pt:"Abrir Prefer\xeancias"},"home.emptyFiltered.clear":{en:"Clear filters",pt:"Limpar filtros"}};function aE(e,t){return aF[e]?.[t]??e}function aN(e,t){return aL[e]?.[t]??e}function aD(e){return e.visibility?e.visibility:e.homeHidden?"hidden-home":"default"}let aI=[{id:"markdown",port:3001,labelKey:"apps.markdown.label",descriptionKey:"apps.markdown.description",hash:"#/blog",icon:"file",color:"#388bfd",enabled:!0,category:"Content",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"school",port:3019,labelKey:"apps.school.label",descriptionKey:"apps.school.description",hash:"#/school",hashAliases:["math","portugues","estudodomeio","ingles"],icon:"graduation",color:"#f78166",enabled:!0,category:"School",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"earth",port:3002,labelKey:"apps.earth.label",descriptionKey:"apps.earth.description",hash:"#/earth",icon:"globe",color:"#3fb950",enabled:!0,category:"Explore",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"cosmos",port:3006,labelKey:"apps.cosmos.label",descriptionKey:"apps.cosmos.description",hash:"#/cosmos",icon:"telescope",color:"#bc8cff",enabled:!0,category:"Explore",needsAuth:!1,suite:"Learning Hub",interest:"space"},{id:"techscope",port:3003,labelKey:"apps.techscope.label",descriptionKey:"apps.techscope.description",hash:"#/techscope",icon:"satellite",color:"#a371f7",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard",interest:"tech"},{id:"citypulse",port:3004,labelKey:"apps.citypulse.label",descriptionKey:"apps.citypulse.description",hash:"#/citypulse",icon:"buildings",color:"#d29922",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard",interest:"news"},{id:"stockpulse",port:3007,labelKey:"apps.stockpulse.label",descriptionKey:"apps.stockpulse.description",hash:"#/stockpulse",icon:"trending-up",color:"#3fb950",enabled:!0,flag:"stockpulse.enabled",category:"Live",needsAuth:!1,suite:"Life Dashboard"},{id:"csvexplorer",port:3016,labelKey:"apps.csvexplorer.label",descriptionKey:"apps.csvexplorer.description",hash:"#/csvexplorer",icon:"table",color:"#58a6ff",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"chartbuilder",port:3017,labelKey:"apps.chartbuilder.label",descriptionKey:"apps.chartbuilder.description",hash:"#/chartbuilder",icon:"bar-chart",color:"#d29922",enabled:!0,category:"Create",needsAuth:!1,suite:"Developer Toolkit",homeHidden:!0},{id:"pad",port:3008,labelKey:"apps.pad.label",descriptionKey:"apps.pad.description",hash:"#/mdpad",hashAliases:["mermaidpad"],icon:"edit",color:"#f78166",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"regexlab",port:3009,labelKey:"apps.regexlab.label",descriptionKey:"apps.regexlab.description",hash:"#/regexlab",icon:"search",color:"#388bfd",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"jsonexplorer",port:3010,labelKey:"apps.jsonexplorer.label",descriptionKey:"apps.jsonexplorer.description",hash:"#/jsonexplorer",icon:"braces",color:"#3fb950",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"codediff",port:3011,labelKey:"apps.codediff.label",descriptionKey:"apps.codediff.description",hash:"#/codediff",icon:"diff",color:"#d29922",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"playground",port:3012,labelKey:"apps.playground.label",descriptionKey:"apps.playground.description",hash:"#/playground",icon:"terminal",color:"#facc15",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"jwtinspector",port:3013,labelKey:"apps.jwtinspector.label",descriptionKey:"apps.jwtinspector.description",hash:"#/jwtinspector",icon:"key",color:"#a371f7",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"colorlab",port:3014,labelKey:"apps.colorlab.label",descriptionKey:"apps.colorlab.description",hash:"#/colorlab",icon:"palette",color:"#f78166",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"cronbuilder",port:3015,labelKey:"apps.cronbuilder.label",descriptionKey:"apps.cronbuilder.description",hash:"#/cronbuilder",icon:"clock",color:"#3fb950",enabled:!0,category:"Connect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"weather",port:3022,labelKey:"apps.weather.label",descriptionKey:"apps.weather.description",hash:"#/weather",icon:"cloud",color:"#58a6ff",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard"},{id:"apiexplorer",port:3024,labelKey:"apps.apiexplorer.label",descriptionKey:"apps.apiexplorer.description",hash:"#/apiexplorer",icon:"code",color:"#58a6ff",enabled:!0,category:"Connect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"movies",port:3025,labelKey:"apps.movies.label",descriptionKey:"apps.movies.description",hash:"#/movies",icon:"film",color:"#e50914",enabled:!0,category:"Fun",needsAuth:!0,suite:"Entertainment",interest:"movies"},{id:"promptlab",port:3026,labelKey:"apps.promptlab.label",descriptionKey:"apps.promptlab.description",hash:"#/promptlab",icon:"brain",color:"#a371f7",enabled:!0,category:"Lab",needsAuth:!0,suite:"AI Lab",interest:"tech"},{id:"imagegen",port:3027,labelKey:"apps.imagegen.label",descriptionKey:"apps.imagegen.description",hash:"#/imagegen",icon:"image",color:"#f78166",enabled:!0,category:"Lab",needsAuth:!0,suite:"AI Lab",interest:"tech"},{id:"daily",port:3029,labelKey:"apps.daily.label",descriptionKey:"apps.daily.description",hash:"#/daily",icon:"target",color:"#34d399",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard",interest:"learning"},{id:"games",port:3028,labelKey:"apps.games.label",descriptionKey:"apps.games.description",hash:"#/games",hashAliases:["lebem","leitor","tictactoe","galo","soundhunter","familyquiz","adventure","pixelboard","stopgame","spotit","memory","tapit","jumpparty","drawguess","animalarena","crazykitchen","miniparty","hideseek","buttonmayhem","bombbrawl"],icon:"gamepad",color:"#f97583",enabled:!0,category:"Fun",needsAuth:!1,suite:"Game Room",interest:"games"},{id:"ask",port:3030,labelKey:"apps.ask.label",descriptionKey:"apps.ask.description",hash:"#/ask",hashAliases:[],icon:"sparkle",color:"#8b7bff",enabled:!0,category:"Lab",needsAuth:!1,suite:"AI Lab",interest:"tech"}],aR=[{id:"lab",yamlSuite:"AI Lab",color:d.w4.suites.lab,icon:"beaker",nameKey:"suites.lab.name",subKey:"suites.lab.sub"},{id:"vida",yamlSuite:"Life Dashboard",color:d.w4.suites.vida,icon:"heart",nameKey:"suites.vida.name",subKey:"suites.vida.sub"},{id:"learn",yamlSuite:"Learning Hub",color:d.w4.suites.learn,icon:"graduation",nameKey:"suites.learn.name",subKey:"suites.learn.sub"},{id:"games",yamlSuite:"Game Room",color:d.w4.suites.games,icon:"gamepad",nameKey:"suites.games.name",subKey:"suites.games.sub"},{id:"ent",yamlSuite:"Entertainment",color:d.w4.suites.ent,icon:"film",nameKey:"suites.ent.name",subKey:"suites.ent.sub"}],aB=[{id:"lebem",hash:"#/lebem",iconName:"book",labelKey:"quickLaunch.lebem",color:"#f97583"},{id:"tictactoe",hash:"#/tictactoe",iconName:"grid",labelKey:"quickLaunch.tictactoe",color:"#8b5cf6"},{id:"soundhunter",hash:"#/soundhunter",iconName:"mic",labelKey:"quickLaunch.soundhunter",color:"#f59e0b"},{id:"familyquiz",hash:"#/familyquiz",iconName:"brain",labelKey:"quickLaunch.familyquiz",color:"#3b82f6"},{id:"adventure",hash:"#/adventure",iconName:"book",labelKey:"quickLaunch.adventure",color:"#10b981"},{id:"pixelboard",hash:"#/pixelboard",iconName:"palette",labelKey:"quickLaunch.pixelboard",color:"#ec4899"},{id:"stopgame",hash:"#/stopgame",iconName:"close",labelKey:"quickLaunch.stopgame",color:"#f59e0b"},{id:"spotit",hash:"#/spotit",iconName:"eye",labelKey:"quickLaunch.spotit",color:"#8b5cf6"},{id:"memory",hash:"#/memory",iconName:"brain",labelKey:"quickLaunch.memory",color:"#06b6d4"},{id:"tapit",hash:"#/tapit",iconName:"target",labelKey:"quickLaunch.tapit",color:"#f97583"},{id:"jumpparty",hash:"#/jumpparty",iconName:"zap",labelKey:"quickLaunch.jumpparty",color:"#3fb950"},{id:"drawguess",hash:"#/drawguess",iconName:"edit",labelKey:"quickLaunch.drawguess",color:"#d2a8ff"},{id:"animalarena",hash:"#/animalarena",iconName:"trophy",labelKey:"quickLaunch.animalarena",color:"#ef4444"},{id:"crazykitchen",hash:"#/crazykitchen",iconName:"flame",labelKey:"quickLaunch.crazykitchen",color:"#f59e0b"},{id:"miniparty",hash:"#/miniparty",iconName:"sparkle",labelKey:"quickLaunch.miniparty",color:"#58a6ff"},{id:"hideseek",hash:"#/hideseek",iconName:"search",labelKey:"quickLaunch.hideseek",color:"#10b981"},{id:"buttonmayhem",hash:"#/buttonmayhem",iconName:"dice",labelKey:"quickLaunch.buttonmayhem",color:"#a855f7"},{id:"bombbrawl",hash:"#/bombbrawl",iconName:"bomb",labelKey:"quickLaunch.bombbrawl",color:"#ff4444"}],aH=(()=>{let e={};for(let t of aB)e[t.hash]=t;return e})(),aK={"profile.title":{en:"Your Profile",pt:"O Teu Perfil"},"profile.close":{en:"Close",pt:"Fechar"},"profile.cancel":{en:"Cancel",pt:"Cancelar"},"profile.save":{en:"Save",pt:"Guardar"},"profile.interests":{en:"Interests",pt:"Interesses"},"profile.interestsHint":{en:"Personalize your daily feed and in-app recommendations.",pt:"Personaliza o feed di\xe1rio e as sugest\xf5es das apps."},"profile.ageMode":{en:"Age mode",pt:"Modo de idade"},"profile.ageModeHint":{en:"Adjusts School difficulty and filters sensitive content.",pt:"Ajusta a dificuldade na School e filtra conte\xfado sens\xedvel."},"topbar.profile.tooltip":{en:"Your profile",pt:"O teu perfil"},"topbar.profile.aria":{en:"Open profile",pt:"Abrir perfil"},"sidebar.retreat":{en:"Retreat",pt:"Retiro"},"sidebar.show":{en:"Show sidebar",pt:"Mostrar barra lateral"},"sidebar.hide":{en:"Hide sidebar",pt:"Esconder barra lateral"},"sidebar.showSuites":{en:"+ Show suites",pt:"+ Mostrar su\xedtes"},"retreat.prompt":{en:"search or open anything",pt:"procurar ou abrir qualquer coisa"},"retreat.weather.city":{en:"Lisbon",pt:"Lisboa"},"palette.search":{en:"Search",pt:"Procurar"},"palette.placeholder":{en:"Search apps, tools, or go anywhere…",pt:"Procurar apps, ferramentas ou ir para qualquer s\xedtio…"},"palette.recent":{en:"Recent",pt:"Recentes"},"palette.allApps":{en:"All apps",pt:"Todas as apps"},"palette.noMatch":{en:"No apps match",pt:"Nenhuma app corresponde a"},"palette.emptyHint":{en:"Try another word or check the spelling.",pt:"Tenta outra palavra ou verifica a ortografia."},"palette.recentTag":{en:"recent",pt:"recente"},"palette.clear":{en:"Clear",pt:"Limpar"},"palette.hint.navigate":{en:"navigate",pt:"navegar"},"palette.hint.open":{en:"open",pt:"abrir"},"palette.hint.close":{en:"close",pt:"fechar"},"palette.hint.ask":{en:"ask",pt:"perguntar"},"palette.scope.all":{en:"All",pt:"Tudo"},"palette.scope.jump":{en:"Go to",pt:"Ir para"},"palette.scope.actions":{en:"Actions",pt:"A\xe7\xf5es"},"palette.scope.recent":{en:"Recent",pt:"Recentes"},"palette.scope.ask":{en:"Ask",pt:"Perguntar"},"palette.scope.ariaLabel":{en:"Search scope",pt:"\xc2mbito da pesquisa"},"palette.section.jump":{en:"Go to",pt:"Ir para"},"palette.section.suites":{en:"Suites",pt:"Su\xedtes"},"palette.section.apps":{en:"Apps",pt:"Apps"},"palette.section.games":{en:"Games",pt:"Jogos"},"palette.section.actions":{en:"Actions",pt:"A\xe7\xf5es"},"palette.section.ask":{en:"Ask Atlantis",pt:"Perguntar ao Atlantis"},"palette.meta.game":{en:"Game \xb7 Game Room",pt:"Jogo \xb7 Sala de Jogos"},"palette.action.addWidget":{en:"Add widget to Dashboard",pt:"Adicionar widget ao Painel"},"palette.action.addWidget.meta":{en:"Opens the picker",pt:"Abre o picker"},"palette.action.theme":{en:"Toggle theme",pt:"Mudar tema"},"palette.action.theme.meta":{en:"Dark ↔ Light",pt:"Escuro ↔ Claro"},"palette.action.preferences":{en:"Open Preferences",pt:"Abrir Prefer\xeancias"},"palette.action.preferences.meta":{en:"Interests, age mode",pt:"Interesses, modo de idade"},"palette.action.settings":{en:"Open Settings",pt:"Abrir Defini\xe7\xf5es"},"palette.action.settings.meta":{en:"API keys, advanced",pt:"Chaves API, avan\xe7ado"},"palette.action.language":{en:"Toggle language",pt:"Alternar idioma"},"palette.action.clearNotifications":{en:"Clear notifications",pt:"Limpar notifica\xe7\xf5es"},"palette.action.clearNotifications.meta":{en:"Mark all {n} as read",pt:"Marcar {n} como lidas"},"palette.action.signout":{en:"Sign out",pt:"Terminar sess\xe3o"},"palette.ask.placeholder":{en:"Ask Atlantis or jump anywhere…",pt:"Pergunta ao Atlantis ou salta para qualquer lado…"},"palette.ask.hint":{en:"Type a question and press Enter.",pt:"Escreve uma pergunta e prime Enter."},"palette.ask.thinking":{en:"Thinking…",pt:"A pensar…"},"palette.ask.loading":{en:"Thinking…",pt:"A pensar…"},"palette.ask.answer":{en:"Atlantis says",pt:"O Atlantis diz"},"palette.ask.error":{en:"Couldn't reach the model",pt:"N\xe3o foi poss\xedvel contactar o modelo"},"palette.ask.suggestMeta":{en:"AI \xb7 replies inline",pt:"IA \xb7 responde inline"},"palette.ask.you":{en:"You",pt:"Voc\xea"},"palette.ask.atlantis":{en:"Atlantis",pt:"Atlantis"},"palette.ask.empty":{en:"Ask a question to get started.",pt:"Faz uma pergunta para come\xe7ar."},"palette.ask.suggestionsTitle":{en:"Try asking…",pt:"Experimenta perguntar…"},"palette.ask.followUp":{en:"Ask a follow-up…",pt:"Faz uma pergunta de seguimento…"},"palette.ask.suggest.summarizeDay":{en:"Summarize my day in 3 lines",pt:"Resumir o meu dia em 3 linhas"},"palette.ask.suggest.whatsTrending":{en:"What's trending in Lisbon today?",pt:"O que est\xe1 em alta em Lisboa hoje?"},"userMenu.preferences":{en:"Preferences",pt:"Prefer\xeancias"},"userMenu.settings":{en:"Settings",pt:"Defini\xe7\xf5es"},"userMenu.signOut":{en:"Sign out",pt:"Terminar sess\xe3o"},"userMenu.language":{en:"Language",pt:"Idioma"},"userMenu.theme":{en:"Theme",pt:"Tema"},"userMenu.themeLight":{en:"Light",pt:"Claro"},"userMenu.themeDark":{en:"Dark",pt:"Escuro"},"userMenu.themeSystem":{en:"System",pt:"Sistema"},"userMenu.clearData":{en:"Clear local data",pt:"Limpar dados locais"},"userMenu.clearDataConfirm":{en:"Clear all local settings, caches, and preferences? This cannot be undone — the page will reload.",pt:"Limpar todas as defini\xe7\xf5es, caches e prefer\xeancias locais? N\xe3o \xe9 poss\xedvel anular — a p\xe1gina ser\xe1 recarregada."},"common.cancel":{en:"Cancel",pt:"Cancelar"},"cmdk.hint.label":{en:"to ask or jump",pt:"perguntar ou ir para"},"cmdk.hint.aria":{en:"Press Cmd+K anywhere to open the command palette",pt:"Prime Cmd+K em qualquer lado para abrir a paleta de comandos"},"onboarding.eyebrow":{en:"✦ START HERE",pt:"✦ COME\xc7AR AQUI"},"onboarding.title":{en:"Welcome to Atlantis",pt:"Bem-vindo a Atlantis"},"onboarding.subtitle":{en:"Three shortcuts to get moving. You can dismiss this card and come back anytime via the command palette.",pt:"Tr\xeas atalhos para come\xe7ar. Podes dispensar este cart\xe3o e voltar a tudo pela paleta de comandos."},"onboarding.aria":{en:"Getting started",pt:"Come\xe7ar"},"onboarding.dismiss":{en:"Dismiss onboarding",pt:"Dispensar introdu\xe7\xe3o"},"onboarding.tip.palette.title":{en:"Jump anywhere",pt:"Ir a qualquer lado"},"onboarding.tip.palette.body":{en:"Open the command palette to launch any app, trigger an action, or ask the assistant.",pt:"Abre a paleta de comandos para lan\xe7ar uma app, desencadear uma a\xe7\xe3o ou perguntar ao assistente."},"onboarding.tip.preferences.title":{en:"Pick what you care about",pt:"Escolhe os teus interesses"},"onboarding.tip.preferences.body":{en:"Set interests and age mode in Preferences — the home grid, widgets, and suggestions adapt.",pt:"Define interesses e modo de idade nas Prefer\xeancias — a grelha, os widgets e as sugest\xf5es adaptam-se."},"onboarding.tip.daily.title":{en:"Keep a daily streak",pt:"Cria uma rotina di\xe1ria"},"onboarding.tip.daily.body":{en:"The Daily Manager tracks missions, points, and streaks you pick each day.",pt:"O Gestor Di\xe1rio acompanha miss\xf5es, pontos e sequ\xeancias que escolhes todos os dias."},"suites.label":{en:"Suites",pt:"Su\xedtes"},"suites.aria":{en:"Open Suites menu",pt:"Abrir menu de Su\xedtes"},"suites.appsCount":{en:"apps in suite",pt:"apps na su\xedte"},"suites.lab.name":{en:"AI Lab",pt:"Lab de IA"},"suites.lab.sub":{en:"Prompt \xb7 Image \xb7 Code",pt:"Prompt \xb7 Imagem \xb7 C\xf3digo"},"suites.vida.name":{en:"Life Dashboard",pt:"Painel de Vida"},"suites.vida.sub":{en:"Health \xb7 Habits \xb7 News",pt:"Sa\xfade \xb7 H\xe1bitos \xb7 Not\xedcias"},"suites.learn.name":{en:"Learning Hub",pt:"Aprendizagem"},"suites.learn.sub":{en:"Studies \xb7 Discovery",pt:"Estudos \xb7 Descoberta"},"suites.games.name":{en:"Game Room",pt:"Sala de Jogos"},"suites.games.sub":{en:"Quizzes \xb7 Puzzles",pt:"Quizzes \xb7 Puzzles"},"suites.ent.name":{en:"Entertainment",pt:"Entretenimento"},"suites.ent.sub":{en:"Movies \xb7 Music \xb7 Stars",pt:"Filmes \xb7 M\xfasica \xb7 Estrelas"},"error.remote.title":{en:"Couldn't load {name}",pt:"N\xe3o consegui carregar {name}"},"error.remote.generic":{en:"Something went wrong while rendering this app.",pt:"Algo correu mal ao abrir esta app."},"error.remote.devHint":{en:"The app's dev server isn't reachable. Start it with:",pt:"O servidor de desenvolvimento desta app n\xe3o est\xe1 a correr. Arranca-o com:"},"error.remote.prodHint":{en:"This app is temporarily unavailable. Please try again in a moment.",pt:"Esta app est\xe1 temporariamente indispon\xedvel. Tenta novamente dentro de momentos."},"error.remote.retry":{en:"Retry",pt:"Tentar de novo"},"error.remote.goHome":{en:"Go home",pt:"Voltar ao in\xedcio"},"notifications.bell":{en:"Notifications",pt:"Notifica\xe7\xf5es"},"notifications.title":{en:"Notifications",pt:"Notifica\xe7\xf5es"},"notifications.markAllRead":{en:"Mark all read",pt:"Marcar tudo como lido"},"notifications.dismiss":{en:"Dismiss",pt:"Dispensar"},"notifications.empty":{en:"You're all caught up.",pt:"Est\xe1s em dia."},"notifications.source.newsPt":{en:"PT News",pt:"Not\xedcias PT"},"notifications.source.newsWorld":{en:"World News",pt:"Not\xedcias Mundo"},"notifications.source.seismicPt":{en:"Seismic PT",pt:"Sismos PT"},"notifications.source.seismicWorld":{en:"Seismic",pt:"Sismos"},"notifications.source.daily":{en:"Daily Mission",pt:"Miss\xe3o Di\xe1ria"},"notifications.daily.body":{en:"It's {time} — time for {name}.",pt:"S\xe3o {time} — hora de {name}."},"notifications.daily.group.one":{en:"1 daily mission pending",pt:"1 miss\xe3o di\xe1ria por fazer"},"notifications.daily.group.many":{en:"{count} daily missions pending",pt:"{count} miss\xf5es di\xe1rias por fazer"},"widgets.dashboard":{en:"Dashboard",pt:"Painel"},"widgets.addWidget":{en:"Add widget",pt:"Adicionar widget"},"widgets.moveLeft":{en:"Move left",pt:"Mover para a esquerda"},"widgets.moveRight":{en:"Move right",pt:"Mover para a direita"},"widgets.remove":{en:"Remove",pt:"Remover"},"widgets.unpin":{en:"Unpin",pt:"Desafixar"},"widgets.open":{en:"Open",pt:"Abrir"},"widgets.emptyDashboard":{en:"Your dashboard is empty. Add some widgets!",pt:"O teu dashboard est\xe1 vazio. Adiciona widgets!"},"widget.error.label":{en:"◎ Offline",pt:"◎ Offline"},"widget.error.body":{en:"Can't reach the source. Retrying soon.",pt:"Sem liga\xe7\xe3o \xe0 fonte. A tentar de novo."},"widget.loading":{en:"Loading…",pt:"A carregar…"},"widgets.empty.title":{en:"Compose your dashboard.",pt:"Comp\xf5e o teu painel."},"widgets.empty.body":{en:"Pick the widgets that matter to you — news, weather, your streak, AI sessions. You can reorder and customize later.",pt:"Escolhe os widgets que te importam — not\xedcias, clima, a tua sequ\xeancia, conversas de IA. Podes reordenar e personalizar depois."},"widgets.empty.cta":{en:"Add your first widget",pt:"Adicionar o primeiro widget"},"widgets.picker.title":{en:"Add a widget.",pt:"Adicionar widget."},"widgets.picker.eyebrow":{en:"◇ Picker",pt:"◇ Cat\xe1logo"},"widgets.picker.subtitle":{en:"Pick from your widget catalog. Live data, glanceable.",pt:"Escolhe do cat\xe1logo de widgets. Dados ao vivo, num relance."},"widgets.picker.searchPlaceholder":{en:"Search widgets — e.g. weather, news, clock…",pt:"Procurar widgets — ex: meteorologia, not\xedcias, rel\xf3gio…"},"widgets.picker.empty":{en:"No widgets match. Try another keyword.",pt:"Nenhum widget corresponde. Tenta outra palavra."},"widgets.picker.close":{en:"Close",pt:"Fechar"},"widgets.picker.added":{en:"Added",pt:"Adicionado"},"widgets.picker.suite.all":{en:"All",pt:"Todos"},"widgets.picker.suite.tools":{en:"Tools",pt:"Ferramentas"},"quickLaunch.count.subjects":{en:"subjects",pt:"mat\xe9rias"},"quickLaunch.count.games":{en:"games",pt:"jogos"},"quickLaunch.count.sections":{en:"sections",pt:"sec\xe7\xf5es"},"quickLaunch.count.recent":{en:"recent",pt:"recentes"},"quickLaunch.count.open":{en:"open",pt:"abrir"},"quickLaunch.math":{en:"Math",pt:"Matem\xe1tica"},"quickLaunch.portugues":{en:"Portuguese",pt:"Portugu\xeas"},"quickLaunch.estudodomeio":{en:"Nature",pt:"Est. do Meio"},"quickLaunch.ingles":{en:"English",pt:"Ingl\xeas"},"quickLaunch.tictactoe":{en:"Tic Tac Toe",pt:"Galo"},"quickLaunch.memory":{en:"Memory",pt:"Mem\xf3ria"},"quickLaunch.pixelboard":{en:"Pixels",pt:"Pixels"},"quickLaunch.familyquiz":{en:"Quiz",pt:"Quiz"},"quickLaunch.spotit":{en:"Spot It",pt:"Par"},"quickLaunch.stopgame":{en:"Stop",pt:"Stop"},"quickLaunch.lebem":{en:"Read & Play",pt:"Ler a Brincar"},"quickLaunch.soundhunter":{en:"Sound Hunter",pt:"Ca\xe7ador de Sons"},"quickLaunch.adventure":{en:"Adventure",pt:"Aventura"},"quickLaunch.tapit":{en:"Tap It",pt:"Toca no Certo"},"quickLaunch.jumpparty":{en:"Jump",pt:"Salta"},"quickLaunch.drawguess":{en:"Draw & Guess",pt:"Desenha e Adivinha"},"quickLaunch.animalarena":{en:"Sumo Zoo",pt:"Sumo Zoo"},"quickLaunch.crazykitchen":{en:"Crazy Kitchen",pt:"Cozinha Louca"},"quickLaunch.miniparty":{en:"Mini Party",pt:"Mini Festa"},"quickLaunch.hideseek":{en:"Hide & Seek",pt:"Esconde-Esconde"},"quickLaunch.buttonmayhem":{en:"Button Mayhem",pt:"Bot\xe3o Maluco"},"quickLaunch.bombbrawl":{en:"BombBrawl",pt:"BombBrawl"},"quickLaunch.movies.discover":{en:"Discover",pt:"Descobrir"},"quickLaunch.movies.movies":{en:"Movies",pt:"Filmes"},"quickLaunch.movies.tv":{en:"TV Shows",pt:"S\xe9ries"},"quickLaunch.movies.documentaries":{en:"Docs",pt:"Docs"},"quickLaunch.movies.favorites":{en:"Favorites",pt:"Favoritos"},"quickLaunch.movies.seen":{en:"Seen",pt:"Vistos"},"dailyFeed.title":{en:"Daily feed",pt:"Feed di\xe1rio"},"dailyFeed.sub.tech":{en:"Tech \xb7 trending",pt:"Tech \xb7 em alta"},"dailyFeed.sub.movie":{en:"Trending this week",pt:"Em alta esta semana"},"dailyFeed.sub.history":{en:"On this day",pt:"Neste dia"},"dailyFeed.sub.news.pt":{en:"News \xb7 RTP",pt:"Not\xedcias \xb7 RTP"},"dailyFeed.sub.news.en":{en:"News \xb7 CNN",pt:"Not\xedcias \xb7 CNN"},"dailyFeed.sub.school":{en:"Learn today",pt:"Aprender hoje"},"dailyFeed.sub.game":{en:"Game of the day",pt:"Jogo do dia"},"dailyFeed.school.math":{en:"Try a quick math puzzle",pt:"Experimenta um desafio de matem\xe1tica"},"dailyFeed.school.story":{en:"Read a Portuguese story",pt:"L\xea uma hist\xf3ria em portugu\xeas"},"dailyFeed.school.science":{en:"Learn a science fact",pt:"Aprende um facto de ci\xeancia"},"dailyFeed.school.reading":{en:"Practice reading aloud",pt:"Pratica leitura em voz alta"},"dailyFeed.school.word":{en:"Explore a word quiz",pt:"Explora um quiz de palavras"},"dailyFeed.game.memory":{en:"Memory Game",pt:"Jogo da Mem\xf3ria"},"dailyFeed.game.spotit":{en:"Spot the Pair",pt:"Encontra o Par!"},"dailyFeed.game.tictactoe":{en:"Tic Tac Toe",pt:"Jogo do Galo"},"dailyFeed.game.soundhunter":{en:"Sound Hunter",pt:"Ca\xe7ador de Sons"},"dailyFeed.game.familyquiz":{en:"Family Quiz",pt:"Quiz da Fam\xedlia"},"dailyFeed.game.adventure":{en:"Text Adventure",pt:"Aventura de Texto"},"dailyFeed.game.stop":{en:"Stop!",pt:"Stop!"},"seismic.title.pt":{en:"PT Seismic",pt:"Sismicidade PT"},"seismic.title.world":{en:"World Seismic",pt:"Sismicidade Mundo"},"seismic.empty":{en:"No recent seismic activity",pt:"Sem atividade sismica recente"},"seismic.openInEarth":{en:"Open in Earth",pt:"Abrir no Earth"},"weather.city.lisbon":{en:"Lisbon",pt:"Lisboa"},"weather.openInEarth":{en:"→ Open in Earth",pt:"→ Abrir no Earth"},"weather.humidity":{en:"Humidity",pt:"Humidade"},"weather.wind":{en:"Wind",pt:"Vento"},"weather.feelsLike":{en:"Feels like {t}\xb0",pt:"Sensa\xe7\xe3o de {t}\xb0"},"weather.uv":{en:"UV",pt:"UV"},"weather.sunrise":{en:"Sunrise",pt:"Nascer"},"weather.sunset":{en:"Sunset",pt:"P\xf4r-do-sol"},"weather.hourly":{en:"Next hours",pt:"Pr\xf3ximas horas"},"weather.forecast":{en:"3-day forecast",pt:"Previs\xe3o 3 dias"},"weather.now":{en:"Now",pt:"Agora"},"weather.day.mon":{en:"Mon",pt:"Seg"},"weather.day.tue":{en:"Tue",pt:"Ter"},"weather.day.wed":{en:"Wed",pt:"Qua"},"weather.day.thu":{en:"Thu",pt:"Qui"},"weather.day.fri":{en:"Fri",pt:"Sex"},"weather.day.sat":{en:"Sat",pt:"S\xe1b"},"weather.day.sun":{en:"Sun",pt:"Dom"},"onThisDay.title":{en:"On this day",pt:"Neste dia"},"techscopeLive.title":{en:"Live feeds",pt:"Feeds ao vivo"},"movies.trending.title":{en:"Trending this week",pt:"Em alta esta semana"},"movies.apiKeyMissing":{en:"API key missing",pt:"API key em falta"},"apps.markdown.label":{en:"Blog",pt:"Blog"},"apps.markdown.description":{en:"Articles and notes across a variety of topics",pt:"Artigos e notas sobre v\xe1rios temas"},"apps.school.label":{en:"School",pt:"Escola"},"apps.school.description":{en:"Primary school — Maths, Portuguese & Science (Years 1–4)",pt:"Escola prim\xe1ria — Matem\xe1tica, Portugu\xeas e Estudo do Meio (1.\xba–4.\xba ano)"},"apps.earth.label":{en:"Earth",pt:"Earth"},"apps.earth.description":{en:"Interactive 3D globe visualization",pt:"Globo 3D interativo"},"apps.cosmos.label":{en:"Cosmos",pt:"Cosmos"},"apps.cosmos.description":{en:"Space exploration and astronomy data",pt:"Explora\xe7\xe3o espacial e dados de astronomia"},"apps.techscope.label":{en:"TechScope",pt:"TechScope"},"apps.techscope.description":{en:"GitHub \xb7 HN \xb7 npm \xb7 Dev.to \xb7 Stack Overflow — 9 live feeds in one journal",pt:"GitHub \xb7 HN \xb7 npm \xb7 Dev.to \xb7 Stack Overflow — 9 feeds ao vivo num jornal"},"apps.citypulse.label":{en:"CityPulse",pt:"CityPulse"},"apps.citypulse.description":{en:"City metrics and live urban data",pt:"M\xe9tricas urbanas e dados ao vivo"},"apps.stockpulse.label":{en:"StockPulse",pt:"StockPulse"},"apps.stockpulse.description":{en:"Real-time stock market pulse",pt:"Mercados financeiros em tempo real"},"apps.csvexplorer.label":{en:"CSV Explorer",pt:"CSV Explorer"},"apps.csvexplorer.description":{en:"CSV viewer with sorting, filtering, and stats",pt:"Visualizador CSV com ordena\xe7\xe3o, filtros e estat\xedsticas"},"apps.chartbuilder.label":{en:"Chart Builder",pt:"Chart Builder"},"apps.chartbuilder.description":{en:"Build bar, line, pie, and scatter charts from CSV",pt:"Cria gr\xe1ficos de barras, linhas, pizza e dispers\xe3o"},"apps.pad.label":{en:"Pad",pt:"Pad"},"apps.pad.description":{en:"Markdown & Mermaid editor with live preview",pt:"Editor Markdown e Mermaid com preview ao vivo"},"apps.regexlab.label":{en:"Regex Lab",pt:"Regex Lab"},"apps.regexlab.description":{en:"Live regex tester with group highlighting",pt:"Testador de regex ao vivo com destaque de grupos"},"apps.jsonexplorer.label":{en:"JSON Explorer",pt:"JSON Explorer"},"apps.jsonexplorer.description":{en:"JSON tree explorer with JSONPath filtering",pt:"Explorador de \xe1rvore JSON com filtros JSONPath"},"apps.codediff.label":{en:"Code Diff",pt:"Code Diff"},"apps.codediff.description":{en:"Visual side-by-side code diff",pt:"Compara\xe7\xe3o visual de c\xf3digo lado a lado"},"apps.playground.label":{en:"Playground",pt:"Playground"},"apps.playground.description":{en:"HTML \xb7 CSS \xb7 JS live playground with preview",pt:"Playground HTML \xb7 CSS \xb7 JS ao vivo com preview"},"apps.jwtinspector.label":{en:"JWT Inspector",pt:"JWT Inspector"},"apps.jwtinspector.description":{en:"Decode and inspect JWT tokens with expiry info",pt:"Descodifica e inspeciona tokens JWT"},"apps.colorlab.label":{en:"Color Lab",pt:"Color Lab"},"apps.colorlab.description":{en:"Color picker with palettes, shades, and contrast",pt:"Seletor de cores com paletas, tons e contraste"},"apps.cronbuilder.label":{en:"Cron Builder",pt:"Cron Builder"},"apps.cronbuilder.description":{en:"Visual cron expression builder with next runs",pt:"Construtor visual de express\xf5es cron"},"apps.weather.label":{en:"Weather",pt:"Meteorologia"},"apps.weather.description":{en:"Live global weather map",pt:"Mapa meteorol\xf3gico global ao vivo"},"apps.apiexplorer.label":{en:"API Explorer",pt:"API Explorer"},"apps.apiexplorer.description":{en:"HTTP client — fire requests, inspect responses, save collections",pt:"Cliente HTTP — enviar pedidos, inspecionar respostas, guardar cole\xe7\xf5es"},"apps.movies.label":{en:"Movies & Series",pt:"Filmes & S\xe9ries"},"apps.movies.description":{en:"Browse movies, TV shows & documentaries — search where to stream them",pt:"Filmes, s\xe9ries e document\xe1rios — descobre onde ver em streaming"},"apps.promptlab.label":{en:"Prompt Lab",pt:"Prompt Lab"},"apps.promptlab.description":{en:"Test and compare prompts across Groq, Gemini, and Hugging Face",pt:"Testa e compara prompts no Groq, Gemini e Hugging Face"},"apps.imagegen.label":{en:"Image Gen",pt:"Image Gen"},"apps.imagegen.description":{en:"Generate images from text prompts using Pollinations AI",pt:"Gera imagens a partir de texto com Pollinations AI"},"apps.games.label":{en:"Games",pt:"Jogos"},"apps.games.description":{en:"Tic Tac Toe, Memory, Pixel Board, quizzes and more",pt:"Galo, Mem\xf3ria, Pixels, quizzes e muito mais"},"apps.daily.label":{en:"Daily Manager",pt:"Gestor Di\xe1rio"},"apps.daily.description":{en:"Track daily habits, earn points, keep the streak alive",pt:"Segue h\xe1bitos di\xe1rios, ganha pontos, mant\xe9m a s\xe9rie"},"apps.ask.label":{en:"Ask",pt:"Perguntar"},"apps.ask.description":{en:"Chat with Atlantis — markdown answers, conversations saved.",pt:"Conversa com o Atlantis — respostas em markdown, guardadas."},"apps.devtools.label":{en:"Dev Tools",pt:"Dev Tools"},"apps.devtools.description":{en:"Developer tools",pt:"Ferramentas de desenvolvimento"},"pinnedCard.recent.label":{en:"Last opened",pt:"\xdaltimo aberto"},"ask.widget.title":{en:"Ask sessions",pt:"Conversas com o Atlantis"},"ask.widget.description":{en:"Your recent Ask conversations",pt:"As tuas conversas recentes"},"ask.widget.untitled":{en:"Untitled",pt:"Sem t\xedtulo"},"ask.widget.empty":{en:"No conversations yet. Start one from the command palette or the Ask app.",pt:"Ainda n\xe3o tens conversas. Come\xe7a uma na paleta de comandos ou na app Ask."},"ask.widget.emptyCta":{en:"Ask something",pt:"Fazer uma pergunta"},"streak.title":{en:"Daily Streak",pt:"S\xe9rie Di\xe1ria"},"streak.dayStreak":{en:"day streak",pt:"dias seguidos"},"streak.noStreak":{en:"Start your streak today",pt:"Come\xe7a a tua s\xe9rie hoje"},"streak.todayDone":{en:"{n} / {total} today",pt:"{n} / {total} hoje"},"streak.points":{en:"{n} pts",pt:"{n} pts"},"streak.open":{en:"Open Daily Manager",pt:"Abrir Gestor Di\xe1rio"},"habits.title":{en:"Habits",pt:"H\xe1bitos"},"habits.last7":{en:"Last 7 days",pt:"\xdaltimos 7 dias"},"habits.empty":{en:"Add missions in the Daily Manager to track them here.",pt:"Adiciona miss\xf5es no Gestor Di\xe1rio para as veres aqui."},"habits.weekDone":{en:"{n} done this week",pt:"{n} feitas esta semana"},"habits.open":{en:"Open Daily Manager",pt:"Abrir Gestor Di\xe1rio"},"habits.openShort":{en:"OPEN",pt:"ABRIR"},"agenda.title":{en:"Agenda Today",pt:"Agenda Hoje"},"agenda.count":{en:"{n} events",pt:"{n} eventos"},"agenda.countOne":{en:"1 event",pt:"1 evento"},"agenda.empty":{en:"Nothing scheduled today",pt:"Nada agendado hoje"},"agenda.emptyCta":{en:"Add your first event",pt:"Adiciona o primeiro evento"},"agenda.addEvent":{en:"Add event",pt:"Adicionar evento"},"agenda.titlePlaceholder":{en:"What’s on?",pt:"O que tens?"},"agenda.timeStart":{en:"Start",pt:"In\xedcio"},"agenda.timeEnd":{en:"End",pt:"Fim"},"agenda.tag.personal":{en:"personal",pt:"pessoal"},"agenda.tag.team":{en:"team",pt:"equipa"},"agenda.tag.work":{en:"work",pt:"trabalho"},"agenda.save":{en:"Save",pt:"Guardar"},"agenda.cancel":{en:"Cancel",pt:"Cancelar"},"agenda.delete":{en:"Delete event",pt:"Apagar evento"},"agenda.toggleDone":{en:"Toggle done",pt:"Alternar conclu\xeddo"},"agenda.now":{en:"now",pt:"agora"},"reading.title":{en:"❂ Reading",pt:"❂ Leitura"},"reading.yearProgress":{en:"{read}/{goal} this year",pt:"{read}/{goal} este ano"},"reading.yearGoal":{en:"Year goal",pt:"Meta anual"},"reading.books":{en:"books",pt:"livros"},"reading.goal":{en:"Annual goal",pt:"Meta anual"},"reading.page":{en:"p.",pt:"p."},"reading.empty":{en:"What are you reading right now?",pt:"O que est\xe1s a ler agora?"},"reading.addBook":{en:"Start a book",pt:"Come\xe7ar um livro"},"reading.updateBook":{en:"Update reading",pt:"Atualizar leitura"},"reading.finish":{en:"Mark as finished",pt:"Marcar como lido"},"reading.save":{en:"Save",pt:"Guardar"},"reading.cancel":{en:"Cancel",pt:"Cancelar"},"reading.placeholder.title":{en:"Title",pt:"T\xedtulo"},"reading.placeholder.author":{en:"Author",pt:"Autor"},"reading.placeholder.page":{en:"Page",pt:"P\xe1gina"},"reading.placeholder.pages":{en:"Total",pt:"Total"},"reading.placeholder.goal":{en:"Goal",pt:"Meta"},"reading.placeholder.cover":{en:"COVER",pt:"CAPA"},"reading.stat.week":{en:"Week",pt:"Semana"},"reading.stat.pace":{en:"Pace",pt:"Ritmo"},"reading.stat.finished":{en:"Finished",pt:"Conclu\xeddos"},"reading.unit.pages":{en:"pages",pt:"p\xe1ginas"},"reading.unit.perDay":{en:"pg/day",pt:"p\xe1g/dia"},"reading.unit.total":{en:"total",pt:"total"},"bolsa.title":{en:"▲ Markets",pt:"▲ Bolsa"},"bolsa.updated":{en:"updated {age}",pt:"atualizado {age}"},"bolsa.empty":{en:"Loading tickers…",pt:"A carregar cota\xe7\xf5es…"},"bolsa.error":{en:"Could not load markets.",pt:"N\xe3o foi poss\xedvel carregar cota\xe7\xf5es."},"bolsa.errorLabel":{en:"OFFLINE",pt:"OFFLINE"},"astro.title":{en:"☽ Astronomy",pt:"☽ Astronomia"},"astro.location":{en:"Lisbon",pt:"Lisboa"},"astro.illuminated":{en:"{pct}% illuminated",pt:"{pct}% iluminada"},"astro.dayLength":{en:"{h}h {m}m",pt:"{h}h {m}m"},"astro.phase.new":{en:"New Moon",pt:"Lua Nova"},"astro.phase.waxingCrescent":{en:"Waxing Crescent",pt:"Crescente"},"astro.phase.firstQuarter":{en:"First Quarter",pt:"Quarto Crescente"},"astro.phase.waxingGibbous":{en:"Waxing Gibbous",pt:"Gibosa Crescente"},"astro.phase.full":{en:"Full Moon",pt:"Lua Cheia"},"astro.phase.waningGibbous":{en:"Waning Gibbous",pt:"Gibosa Minguante"},"astro.phase.lastQuarter":{en:"Last Quarter",pt:"Quarto Minguante"},"astro.phase.waningCrescent":{en:"Waning Crescent",pt:"Minguante"},"astro.iss.title":{en:"Next ISS passes",pt:"Pr\xf3ximas passagens — ISS"},"astro.iss.loading":{en:"Loading passes…",pt:"A carregar passagens…"},"astro.iss.empty":{en:"No upcoming visible passes.",pt:"Sem passagens vis\xedveis \xe0 vista."},"labLauncher.title":{en:"✦ AI Lab",pt:"✦ Lab de IA"},"labLauncher.subtitle":{en:"Your AI suite",pt:"A tua su\xedte de IA"},"labLauncher.count":{en:"tools",pt:"ferramentas"},"labLauncher.open":{en:"// OPEN →",pt:"// ABRIR →"},"learnLauncher.title":{en:"◎ Learning",pt:"◎ Aprendizagem"},"learnLauncher.subtitle":{en:"School & games",pt:"Escola & jogos"},"learnLauncher.count":{en:"apps",pt:"apps"},"learnLauncher.open":{en:"// EXPLORE →",pt:"// EXPLORAR →"},"music.title":{en:"♪ Music",pt:"♪ M\xfasica"},"music.subtitle":{en:"Recently played",pt:"Ouvido recentemente"},"music.empty":{en:"Paste a song to save.",pt:"Adiciona uma m\xfasica."},"music.placeholder":{en:"Song — Artist",pt:"M\xfasica — Artista"},"music.add":{en:"Add",pt:"Adicionar"},"music.remove":{en:"Remove",pt:"Remover"},"music.search.label":{en:"Search Apple Music",pt:"Pesquisar no Apple Music"},"nightSky.title":{en:"✦ Night Sky",pt:"✦ C\xe9u Noturno"},"nightSky.iss":{en:"ISS visible",pt:"ISS vis\xedvel"},"nightSky.dayTitle":{en:"Waiting for dusk",pt:"\xc0 espera do anoitecer"},"nightSky.nightLegend":{en:"Zenith view \xb7 {count} constellations",pt:"Vista do z\xe9nite \xb7 {count} constela\xe7\xf5es"},"health.title":{en:"Dashboard Health",pt:"Sa\xfade do Painel"},"health.measuring":{en:"Measuring…",pt:"A medir…"},"health.offline":{en:"offline",pt:"offline"},"health.ch.crypto":{en:"CoinGecko",pt:"CoinGecko"},"health.ch.weather":{en:"Open-Meteo",pt:"Open-Meteo"},"health.ch.wiki":{en:"Wikipedia",pt:"Wikip\xe9dia"},"health.ch.hn":{en:"HN Algolia",pt:"HN Algolia"},"health.ch.dom":{en:"DOM Nodes",pt:"N\xf3s DOM"},"health.ch.fps":{en:"Frame Rate",pt:"Frame Rate"},"health.consumers":{en:"used by {list}",pt:"usado por {list}"},"health.status.ok":{en:"All healthy",pt:"Tudo bem"},"health.status.slow":{en:"{n} slow",pt:"{n} lento"},"health.status.offline":{en:"{n} offline",pt:"{n} offline"}},aO=[{id:"daily-feed",labelEn:"Daily Feed",labelPt:"Feed Di\xe1rio",descriptionEn:"What's new across Atlantis today",descriptionPt:"O que h\xe1 de novo em Atlantis hoje",icon:"\uD83D\uDCF0",defaultCols:2,maxCols:2,minHeight:280,suite:"vida"},{id:"techscope",labelEn:"TechScope Live",labelPt:"TechScope Ao Vivo",descriptionEn:"Trending repos & Hacker News",descriptionPt:"Repos em destaque & Hacker News",icon:"\uD83D\uDCE1",defaultCols:2,maxCols:2,minHeight:160,suite:"lab"},{id:"weather",labelEn:"Weather",labelPt:"Meteorologia",descriptionEn:"Current conditions for Lisbon",descriptionPt:"Condi\xe7\xf5es atuais em Lisboa",icon:"\uD83C\uDF24️",defaultCols:2,maxCols:2,minHeight:220,suite:"vida"},{id:"clock",labelEn:"World Clock",labelPt:"Rel\xf3gio Mundial",descriptionEn:"Time across multiple zones",descriptionPt:"Horas em v\xe1rios fusos",icon:"\uD83D\uDD50",defaultCols:1,maxCols:2,minHeight:160,suite:"vida"},{id:"quicklinks",labelEn:"Quick Links",labelPt:"Atalhos",descriptionEn:"Jump to your pinned apps",descriptionPt:"Acede \xe0s tuas apps fixas",icon:"⚡",defaultCols:1,maxCols:1,minHeight:160,suite:"tools"},{id:"news-pt",labelEn:"PT News",labelPt:"Not\xedcias PT",descriptionEn:"Latest headlines from RTP Not\xedcias",descriptionPt:"\xdaltimas not\xedcias da RTP",icon:"\uD83C\uDDF5\uD83C\uDDF9",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"news-world",labelEn:"World News",labelPt:"Not\xedcias Mundo",descriptionEn:"Latest headlines from CNN International",descriptionPt:"\xdaltimas not\xedcias da CNN",icon:"\uD83C\uDF10",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"crypto",labelEn:"Crypto Prices",labelPt:"Pre\xe7os Crypto",descriptionEn:"BTC, ETH, SOL in EUR",descriptionPt:"BTC, ETH, SOL em EUR",icon:"₿",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"seismic",labelEn:"PT Seismic",labelPt:"Sismicidade PT",descriptionEn:"Felt earthquakes in Portugal (7 days)",descriptionPt:"Sismos sentidos em Portugal (7 dias)",icon:"\uD83C\uDF0D",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"onthisday",labelEn:"On This Day",labelPt:"Neste Dia",descriptionEn:"Historical events on today's date",descriptionPt:"Eventos hist\xf3ricos de hoje",icon:"\uD83D\uDCC5",defaultCols:1,maxCols:1,minHeight:160,suite:"learn"},{id:"analog-clock",labelEn:"Analog Clock",labelPt:"Rel\xf3gio Anal\xf3gico",descriptionEn:"Live analog clock with digital display",descriptionPt:"Rel\xf3gio anal\xf3gico com hora digital",icon:"\uD83D\uDD70️",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"quotes",labelEn:"Daily Quote",labelPt:"Cita\xe7\xe3o do Dia",descriptionEn:"A daily dose of inspiration",descriptionPt:"Uma dose di\xe1ria de inspira\xe7\xe3o",icon:"\uD83D\uDCAC",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"trending-searches",labelEn:"Trending Searches",labelPt:"Pesquisas em Alta",descriptionEn:"Top Google searches right now",descriptionPt:"Pesquisas Google em alta",icon:"\uD83D\uDD0D",defaultCols:1,maxCols:2,minHeight:280,suite:"learn"},{id:"wiki-most-read",labelEn:"Wikipedia Top",labelPt:"Wikip\xe9dia Top",descriptionEn:"Most-read Wikipedia articles",descriptionPt:"Artigos mais lidos da Wikip\xe9dia",icon:"\uD83D\uDCD6",defaultCols:1,maxCols:2,minHeight:280,suite:"learn"},{id:"hackernews-hot",labelEn:"Hacker News Hot",labelPt:"Hacker News",descriptionEn:"Top stories on HN front page",descriptionPt:"Hist\xf3rias em destaque no HN",icon:"\uD83D\uDD25",defaultCols:1,maxCols:2,minHeight:280,suite:"lab"},{id:"live-data",labelEn:"Dashboard Health",labelPt:"Sa\xfade do Painel",descriptionEn:"Latency of APIs your widgets rely on, plus FPS & DOM",descriptionPt:"Lat\xeancia das APIs usadas pelos widgets, FPS & DOM",icon:"\uD83D\uDCCA",defaultCols:2,maxCols:2,minHeight:160,suite:"tools"},{id:"movies",labelEn:"Trending Movies",labelPt:"Filmes em Alta",descriptionEn:"Top 5 trending movies & TV this week",descriptionPt:"Top 5 filmes & s\xe9ries em alta esta semana",icon:"\uD83C\uDFAC",defaultCols:1,maxCols:1,minHeight:160,suite:"ent"},{id:"pet",labelEn:"Digital Pet",labelPt:"Pet Digital",descriptionEn:"A cat that reacts to your visits",descriptionPt:"Um gato que reage \xe0s tuas visitas",icon:"\uD83D\uDC31",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"streak",labelEn:"Daily Streak",labelPt:"S\xe9rie Di\xe1ria",descriptionEn:"Track your daily missions streak",descriptionPt:"Segue a tua s\xe9rie de miss\xf5es di\xe1rias",icon:"\uD83D\uDD25",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"habits",labelEn:"Habits Grid",labelPt:"Grelha de H\xe1bitos",descriptionEn:"Last 7 days for your top 5 daily missions",descriptionPt:"\xdaltimos 7 dias para as 5 miss\xf5es principais",icon:"\uD83C\uDFAF",defaultCols:1,maxCols:2,minHeight:220,suite:"vida"},{id:"agenda",labelEn:"Agenda Today",labelPt:"Agenda Hoje",descriptionEn:"Today's events on a vertical timeline",descriptionPt:"Eventos de hoje numa linha do tempo vertical",icon:"\uD83D\uDDD3️",defaultCols:1,maxCols:2,minHeight:320,suite:"vida"},{id:"ask-sessions",labelEn:"Ask sessions",labelPt:"Conversas com o Atlantis",descriptionEn:"Your recent Ask conversations",descriptionPt:"As tuas conversas recentes",icon:"✨",defaultCols:1,maxCols:2,minHeight:170,suite:"lab"},{id:"reading",labelEn:"Reading",labelPt:"Leitura",descriptionEn:"Currently reading, year goal & pace",descriptionPt:"A ler agora, meta anual & ritmo",icon:"\uD83D\uDCDA",defaultCols:1,maxCols:2,minHeight:340,suite:"vida"},{id:"bolsa",labelEn:"Markets",labelPt:"Bolsa",descriptionEn:"Stocks & crypto tickers with sparklines",descriptionPt:"A\xe7\xf5es & crypto com sparklines",icon:"▲",defaultCols:2,maxCols:2,minHeight:320,suite:"vida"},{id:"astro",labelEn:"Astronomy",labelPt:"Astronomia",descriptionEn:"Moon phase, sun arc & ISS passes",descriptionPt:"Lua, sol & passagens da ISS",icon:"☽",defaultCols:1,maxCols:2,minHeight:300,suite:"learn"},{id:"lab-launcher",labelEn:"AI Lab launcher",labelPt:"Lan\xe7ador Lab de IA",descriptionEn:"Quick access tile for every AI tool",descriptionPt:"Atalho para cada ferramenta de IA",icon:"✦",defaultCols:1,maxCols:2,minHeight:220,suite:"lab"},{id:"learn-launcher",labelEn:"Learning launcher",labelPt:"Lan\xe7ador de Aprendizagem",descriptionEn:"School subjects & learning apps",descriptionPt:"Mat\xe9rias escolares & apps",icon:"◎",defaultCols:1,maxCols:2,minHeight:220,suite:"learn"},{id:"music",labelEn:"Music",labelPt:"M\xfasica",descriptionEn:"Recently played with Apple Music links",descriptionPt:"Ouvido recentemente com atalhos Apple Music",icon:"♪",defaultCols:1,maxCols:1,minHeight:260,suite:"ent"},{id:"night-sky",labelEn:"Night Sky",labelPt:"C\xe9u Noturno",descriptionEn:"Zenith map with visible constellations",descriptionPt:"Mapa do z\xe9nite com constela\xe7\xf5es vis\xedveis",icon:"✦",defaultCols:1,maxCols:2,minHeight:260,suite:"learn"}],a_=[{id:"all",labelKey:"widgets.picker.suite.all"},{id:"lab",labelKey:"suites.lab.name",color:d.w4.suites.lab},{id:"vida",labelKey:"suites.vida.name",color:d.w4.suites.vida},{id:"learn",labelKey:"suites.learn.name",color:d.w4.suites.learn},{id:"games",labelKey:"suites.games.name",color:d.w4.suites.games},{id:"ent",labelKey:"suites.ent.name",color:d.w4.suites.ent},{id:"tools",labelKey:"widgets.picker.suite.tools",color:d.w4.colors.success}],aq={lab:d.w4.suites.lab,vida:d.w4.suites.vida,learn:d.w4.suites.learn,games:d.w4.suites.games,ent:d.w4.suites.ent,tools:d.w4.colors.success},aY=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,aG=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.97) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,aW=l().div`
  position: fixed;
  inset: 0;
  z-index: ${d.w4.zIndex.modal};
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 16px;
  animation: ${aY} ${d.w4.transitions.fast};
`,aJ=l().div`
  width: 760px;
  max-width: 100%;
  max-height: 84vh;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${d.w4.elevation.lg};
  animation: ${aG} ${d.w4.transitions.base};
  display: flex;
  flex-direction: column;
`,aU=l().div`
  padding: 20px 22px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,aV=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,aQ=l().h2`
  margin: 0;
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${d.w4.colors.mainText};
`,aZ=l().p`
  margin: 0;
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 480px;
`,aX=l().button`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  color: ${d.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.borderStrong};
    background: ${d.w4.colors.surfaceHover};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,a0=l().div`
  padding: 14px 22px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,a1=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,a4=l()("button",{shouldForwardProp:e=>"active"!==e&&"chipColor"!==e})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  background: ${({active:e,chipColor:t})=>e?t?`${t}26`:d.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,chipColor:t})=>e?t??d.w4.colors.accent:d.w4.colors.borderSubtle};
  color: ${({active:e,chipColor:t})=>e?t??d.w4.colors.accent:d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  transition: ${d.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    color: ${({chipColor:e})=>e??d.w4.colors.mainText};
    border-color: ${({chipColor:e})=>e??d.w4.colors.borderStrong};
  }
  &:focus-visible { ${d.w4.focusRing} }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`,a2=l().div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 22px 22px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`,a5=l()("button",{shouldForwardProp:e=>"added"!==e})`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  background: ${({added:e})=>e?d.w4.colors.surfaceHover:d.w4.colors.surface};
  border: 1px solid
    ${({added:e})=>e?d.w4.colors.accent:d.w4.colors.borderSubtle};
  border-radius: 12px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: inherit;
  transition: ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.surfaceHover};
    border-color: ${({added:e})=>e?d.w4.colors.danger:d.w4.colors.borderStrong};
    transform: translateY(-1px);
  }
  &:focus-visible { ${d.w4.focusRing} }
`,a3=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
`,a6=l().span`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.borderSubtle};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`,a8=l().div`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,a7=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${d.w4.colors.accentMuted};
  color: ${d.w4.colors.accent};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,a9=l().div`
  font-size: 11.5px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ie=l().div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
`,it=l()("span",{shouldForwardProp:e=>"swatchColor"!==e})`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({swatchColor:e})=>e};
`,io=l().div`
  grid-column: 1 / -1;
  padding: 40px 20px;
  text-align: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 13px;
`;function ia({open:e,activeIds:t,locale:o,onAdd:n,onRemove:r,onClose:s}){let l=(0,i.useMemo)(()=>tP(o,aK),[o]),[c,d]=(0,i.useState)(""),[p,m]=(0,i.useState)("all"),g=(0,i.useRef)(null);(0,i.useEffect)(()=>{e&&(d(""),m("all"),requestAnimationFrame(()=>g.current?.focus()))},[e]),(0,i.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&s()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e,s]);let u=(0,i.useMemo)(()=>{let e=c.trim().toLowerCase();return aO.filter(t=>{if("all"!==p&&t.suite!==p)return!1;if(!e)return!0;let a="pt"===o?t.labelPt:t.labelEn,i="pt"===o?t.descriptionPt:t.descriptionEn;return a.toLowerCase().includes(e)||i.toLowerCase().includes(e)||t.id.toLowerCase().includes(e)||t.suite.toLowerCase().includes(e)})},[c,p,o]);return e?ta().createPortal((0,a.jsx)(aW,{onClick:s,children:(0,a.jsxs)(aJ,{onClick:e=>e.stopPropagation(),role:"dialog","aria-label":l("widgets.picker.title"),children:[(0,a.jsxs)(aU,{children:[(0,a.jsxs)(aV,{children:[(0,a.jsx)(ov,{children:l("widgets.picker.eyebrow")}),(0,a.jsx)(aX,{onClick:s,"aria-label":l("widgets.picker.close"),children:(0,a.jsx)(tB,{name:"close",size:14,"aria-hidden":"true"})})]}),(0,a.jsx)(aQ,{children:l("widgets.picker.title")}),(0,a.jsx)(aZ,{children:l("widgets.picker.subtitle")})]}),(0,a.jsxs)(a0,{children:[(0,a.jsx)(oM,{ref:g,placeholder:l("widgets.picker.searchPlaceholder"),value:c,onChange:e=>d(e.target.value),before:(0,a.jsx)(tB,{name:"search",size:14,"aria-hidden":"true"})}),(0,a.jsx)(a1,{role:"tablist",children:a_.map(e=>(0,a.jsxs)(a4,{active:p===e.id,chipColor:e.color,onClick:()=>m(e.id),role:"tab","aria-selected":p===e.id,children:[e.color&&(0,a.jsx)("span",{className:"dot"}),l(e.labelKey)]},e.id))})]}),(0,a.jsx)(a2,{children:0===u.length?(0,a.jsx)(io,{children:l("widgets.picker.empty")}):u.map(e=>{let i=t.has(e.id),s="pt"===o?e.labelPt:e.labelEn,c="pt"===o?e.descriptionPt:e.descriptionEn,d=aq[e.suite],p=a_.find(t=>t.id===e.suite);return(0,a.jsxs)(a5,{added:i,onClick:()=>{i?r(e.id):n(e.id)},children:[(0,a.jsxs)(a3,{children:[(0,a.jsx)(a6,{children:e.icon}),(0,a.jsx)(a8,{children:s}),i&&(0,a.jsxs)(a7,{children:[(0,a.jsx)(tB,{name:"check",size:10,"aria-hidden":"true"}),l("widgets.picker.added")]})]}),(0,a.jsx)(a9,{children:c}),(0,a.jsxs)(ie,{children:[(0,a.jsx)(it,{swatchColor:d}),p?l(p.labelKey):e.suite]})]},e.id)})})]})}),document.body):null}var ii=o(88641),ir=o(84368);async function is(e,t,o=3e5){let a=await ee(`widget-cache:${t}`);if(a)try{let e=JSON.parse(a);if(Date.now()-e.cachedAt<o)return e.data}catch{}try{let o=await fetch(e);if(!o.ok)return null;let a=await o.json(),i={data:a,cachedAt:Date.now()};return X(`widget-cache:${t}`,JSON.stringify(i)),a}catch{return null}}function il(e,t){let[o,a]=(0,i.useState)(null),[n,r]=(0,i.useState)(!1),s=(0,i.useCallback)(async()=>{let o=await is(e,t);o?(a(o),r(!1)):r(!0)},[e,t]);return(0,i.useEffect)(()=>{s();let e=setInterval(s,3e5);return()=>clearInterval(e)},[s]),{data:o,failed:n}}let ic=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,id=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,ip=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`,im=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
`,ig=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${d.w4.colors.success};
  box-shadow: 0 0 6px ${d.w4.colors.success}80;
  animation: ${id} 2s ease-in-out infinite;
`,iu=l().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${ic} 0.3s ease both;
  animation-delay: ${({delay:e})=>80*e}ms;
  min-width: 0;
  padding: 4px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
  &:hover span.row-title {
    color: ${d.w4.colors.accent};
  }
`,ih=l().span`
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${({color:e})=>e}18;
  color: ${({color:e})=>e};
  border: 1px solid ${({color:e})=>e}30;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,ix=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
`,iy=l().span`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  color: ${({color:e})=>e??d.w4.colors.mainTextMuted};
  font-size: 10px;
`,ib=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,iw=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,i$=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function iv({locale:e}){let t,o=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),n=il(`https://api.github.com/search/repositories?q=created:>${((t=new Date).setDate(t.getDate()-7),t.toISOString().split("T")[0])}&sort=stars&order=desc&per_page=2`,"techscope-gh"),r=il("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=4","techscope-hn"),s=n.data?.items??[],l=r.data?.hits??[],c=n.failed&&r.failed;if(!s.length&&!l.length)return(0,a.jsx)(ip,{children:c?(0,a.jsxs)(iw,{role:"alert",children:[(0,a.jsx)(i$,{children:o("widget.error.label")}),(0,a.jsx)("div",{children:o("widget.error.body")})]}):(0,a.jsx)(ib,{children:o("widget.loading")})});let d=0;return(0,a.jsxs)(ip,{children:[(0,a.jsxs)(im,{children:[(0,a.jsx)(ig,{})," ",o("techscopeLive.title")]}),s.map(e=>{var t;return(0,a.jsxs)(iu,{delay:d++,href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(ih,{color:"#3fb950",children:"GH"}),(0,a.jsx)(ix,{className:"row-title",children:e.full_name}),(0,a.jsxs)(iy,{color:"#d29922",children:[(0,a.jsx)(ii.A,{size:10}),(t=e.stargazers_count)>=1e3?`${(t/1e3).toFixed(1)}k`:String(t)]})]},e.full_name)}),l.map(e=>{let t=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,a.jsxs)(iu,{delay:d++,href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(ih,{color:"#ff6600",children:"HN"}),(0,a.jsx)(ix,{className:"row-title",children:e.title}),(0,a.jsxs)(iy,{color:"#ff6600",children:[(0,a.jsx)(ir.A,{size:10}),e.points??0]})]},e.objectID)})]})}let ik={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",77:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",85:"\uD83C\uDF28️",86:"\uD83C\uDF28️",95:"⛈️",96:"⛈️",99:"⛈️"},ij={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},iz={0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Light showers",81:"Showers",82:"Heavy showers",85:"Light snow showers",86:"Snow showers",95:"Thunderstorm",96:"Hail storm",99:"Severe hail storm"},iM={0:"C\xe9u limpo",1:"Pouco nublado",2:"Parcialmente nublado",3:"Encoberto",45:"Nevoeiro",48:"Nevoeiro gelado",51:"Chuviscos leves",53:"Chuviscos",55:"Chuviscos densos",61:"Chuva fraca",63:"Chuva",65:"Chuva forte",71:"Neve fraca",73:"Neve",75:"Neve forte",77:"Gr\xe3os de neve",80:"Aguaceiros fracos",81:"Aguaceiros",82:"Aguaceiros fortes",85:"Neve fraca",86:"Neve forte",95:"Trovoada",96:"Granizo",99:"Granizo forte"},iS=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,iT=(0,c.keyframes)`
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-6px) rotate(2deg); }
`,iA=(0,c.keyframes)`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
`,iC=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${iS} 0.3s ease both;
  cursor: pointer;
  border-radius: ${d.w4.borderRadius.sm};
  position: relative;

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,iF=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`,iP=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,iL=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.7;
  letter-spacing: 0.04em;
  white-space: nowrap;
`,iE=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex: 1;
  padding: 16px 8px;
  position: relative;

  @media (max-width: 520px) {
    gap: 18px;
    padding: 12px 4px;
  }
`,iN=l().div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      ${({accent:e})=>e}55 0%,
      ${({accent:e})=>e}22 40%,
      transparent 70%
    );
    filter: blur(16px);
    animation: ${iA} 5s ease-in-out infinite;
    pointer-events: none;
  }

  @media (max-width: 520px) {
    width: 92px;
    height: 92px;
  }
`,iD=l().div`
  font-size: 84px;
  line-height: 1;
  position: relative;
  z-index: 1;
  animation: ${iT} 5s ease-in-out infinite;

  @media (max-width: 520px) {
    font-size: 64px;
  }
`,iI=l().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,iR=l().div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,iB=l().div`
  font-size: 76px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  background: linear-gradient(
    135deg,
    ${d.w4.colors.mainText} 20%,
    ${({accent:e})=>e} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media (max-width: 520px) {
    font-size: 56px;
  }
`,iH=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  padding-bottom: 6px;

  span {
    font-weight: 700;
    color: ${d.w4.colors.mainText};
  }
`,iK=l().div`
  font-size: 16px;
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  margin-top: 10px;
  letter-spacing: -0.01em;
`,iO=l().div`
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 3px;
`,i_=l().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid ${d.w4.colors.border};

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,iq=l().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 4px;
`,iY=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 4px;
`,iG=l().div`
  font-size: 15px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,iW=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,iJ=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,iU=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function iV({locale:e}){var t;let o=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[n,r]=(0,i.useState)(null),[s,l]=(0,i.useState)(!1),c=(0,i.useCallback)(async()=>{let e=await is("https://api.open-meteo.com/v1/forecast?latitude=38.7223&longitude=-9.1393&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto&forecast_days=2","weather-lisbon-v3",9e5);e?(r(e),l(!1)):l(!0)},[]);(0,i.useEffect)(()=>{c();let e=setInterval(c,9e5);return()=>clearInterval(e)},[c]);let d=()=>ef("earth",{placeId:"lisbon"}),p=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),d())};if(!n||!n.current||!n.daily)return(0,a.jsx)(iC,{role:"link",tabIndex:0,onClick:d,onKeyDown:p,children:s?(0,a.jsxs)(iJ,{role:"alert",children:[(0,a.jsx)(iU,{children:o("widget.error.label")}),(0,a.jsx)("div",{children:o("widget.error.body")})]}):(0,a.jsx)(iW,{children:o("widget.loading")})});let{temperature_2m:m,apparent_temperature:g,relative_humidity_2m:u,weather_code:h,wind_speed_10m:f,is_day:x}=n.current,y=1===x,b=(t=h,y?0===t?"#fbbf24":1===t?"#fcd34d":2===t?"#60a5fa":3===t?"#94a3b8":t>=95?"#c084fc":t>=51?"#38bdf8":t>=45?"#cbd5e1":"#60a5fa":t>=95?"#a78bfa":t>=51?"#60a5fa":"#818cf8"),w=Math.round(n.daily.temperature_2m_max?.[0]??m),$=Math.round(n.daily.temperature_2m_min?.[0]??m),v=Math.round(n.daily.uv_index_max?.[0]??0),k=n.daily.sunrise?.[0],j=n.daily.sunset?.[0],z=j?new Date(j).getTime():NaN,M=Number.isFinite(z)&&Date.now()<z?"sunset":"sunrise",S="sunset"===M?j:n.daily.sunrise?.[1]??k;return(0,a.jsxs)(iC,{role:"link",tabIndex:0,onClick:d,onKeyDown:p,children:[(0,a.jsxs)(iF,{children:[(0,a.jsxs)(iP,{children:["\uD83C\uDF24️ ",o("weather.city.lisbon")]}),(0,a.jsx)(iL,{children:o("weather.openInEarth")})]}),(0,a.jsxs)(iE,{children:[(0,a.jsx)(iN,{accent:b,children:(0,a.jsx)(iD,{children:!y&&h in ij?ij[h]:ik[h]??"\uD83C\uDF21️"})}),(0,a.jsxs)(iI,{children:[(0,a.jsxs)(iR,{children:[(0,a.jsxs)(iB,{accent:b,children:[Math.round(m),"\xb0"]}),(0,a.jsxs)(iH,{children:[(0,a.jsxs)("div",{children:["▲ ",(0,a.jsxs)("span",{children:[w,"\xb0"]})]}),(0,a.jsxs)("div",{children:["▼ ",(0,a.jsxs)("span",{children:[$,"\xb0"]})]})]})]}),(0,a.jsx)(iK,{children:("pt"===e?iM:iz)[h]??("pt"===e?"Desconhecido":"Unknown")}),(0,a.jsx)(iO,{children:o("weather.feelsLike",{t:Math.round(g)})})]})]}),(0,a.jsxs)(i_,{children:[(0,a.jsxs)(iq,{children:[(0,a.jsxs)(iY,{children:["\uD83D\uDCA7 ",o("weather.humidity")]}),(0,a.jsxs)(iG,{children:[u,"%"]})]}),(0,a.jsxs)(iq,{children:[(0,a.jsxs)(iY,{children:["\uD83D\uDCA8 ",o("weather.wind")]}),(0,a.jsxs)(iG,{children:[Math.round(f)," km/h"]})]}),(0,a.jsxs)(iq,{children:[(0,a.jsxs)(iY,{children:["☀️ ",o("weather.uv")]}),(0,a.jsx)(iG,{children:v})]}),(0,a.jsxs)(iq,{children:[(0,a.jsxs)(iY,{children:["sunset"===M?"\uD83C\uDF07":"\uD83C\uDF05"," ",o("sunset"===M?"weather.sunset":"weather.sunrise")]}),(0,a.jsx)(iG,{children:S?new Date(S).toLocaleTimeString("pt"===e?"pt-PT":"en-GB",{hour:"2-digit",minute:"2-digit"}):"—"})]})]})]})}let iQ=[{id:"lisbon",tz:"Europe/Lisbon",labelEn:"Lisbon",labelPt:"Lisboa",flag:"\uD83C\uDDF5\uD83C\uDDF9"},{id:"london",tz:"Europe/London",labelEn:"London",labelPt:"Londres",flag:"\uD83C\uDDEC\uD83C\uDDE7"},{id:"newyork",tz:"America/New_York",labelEn:"New York",labelPt:"Nova Iorque",flag:"\uD83C\uDDFA\uD83C\uDDF8"},{id:"tokyo",tz:"Asia/Tokyo",labelEn:"Tokyo",labelPt:"T\xf3quio",flag:"\uD83C\uDDEF\uD83C\uDDF5"}],iZ=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,iX=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${iZ} 0.3s ease both;
`,i0=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
`,i1=l().div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,i4=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 0;
  ${({primary:e})=>e&&`
    padding-bottom: 8px;
    border-bottom: 1px solid ${d.w4.colors.border};
    margin-bottom: 2px;
  `}
`,i2=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,i5=l().span`
  font-size: 16px;
  line-height: 1;
`,i3=l().div`
  display: flex;
  flex-direction: column;
`,i6=l().div`
  font-size: ${({primary:e})=>e?"14px":"12px"};
  font-weight: ${({primary:e})=>e?"600":"400"};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
`,i8=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,i7=l().div`
  font-size: ${({primary:e})=>e?"22px":"14px"};
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({primary:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  letter-spacing: -0.02em;
  flex-shrink: 0;
`;function i9({locale:e}){let[,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=setInterval(()=>t(e=>e+1),1e4);return()=>clearInterval(e)},[]),(0,a.jsxs)(iX,{children:[(0,a.jsxs)(i0,{children:["\uD83D\uDD50 ","pt"===e?"Rel\xf3gio mundial":"World clock"]}),(0,a.jsx)(i1,{children:iQ.map((t,o)=>{var i,n;let r="pt"===e?t.labelPt:t.labelEn;return(0,a.jsxs)(i4,{primary:0===o,children:[(0,a.jsxs)(i2,{children:[(0,a.jsx)(i5,{children:t.flag}),(0,a.jsxs)(i3,{children:[(0,a.jsx)(i6,{primary:0===o,children:r}),(0,a.jsx)(i8,{children:(i=t.tz,new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{timeZone:i,weekday:"short",day:"numeric",month:"short"}))})]})]}),(0,a.jsx)(i7,{primary:0===o,children:(n=t.tz,new Date().toLocaleTimeString("en-GB",{timeZone:n,hour:"2-digit",minute:"2-digit"}))})]},t.id)})})]})}let ne=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nt=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${ne} 0.3s ease both;
`,no=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 10px;
`,na=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  flex: 1;
  align-content: start;
`,ni=l().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  background: ${({accentColor:e})=>`${e}08`};
  border: 1px solid ${({accentColor:e})=>`${e}20`};
  border-radius: ${d.w4.borderRadius.md};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${({accentColor:e})=>`${e}18`};
    border-color: ${({accentColor:e})=>`${e}40`};
    transform: scale(1.05);
  }
  &:active { transform: scale(0.95); }
`,nn=l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({tint:e})=>e};
`,nr=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,ns=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
  text-align: center;
  line-height: 1.5;
`;function nl({locale:e,pinnedAppIds:t,recentAppIds:o,apps:i,appMeta:n,onSelect:r}){let s=[...new Set([...t,...o])].slice(0,8).flatMap(e=>i.filter(t=>t.id===e));return(0,a.jsxs)(nt,{children:[(0,a.jsxs)(no,{children:["⚡ ","pt"===e?"Atalhos":"Quick links"]}),0===s.length?(0,a.jsx)(ns,{children:"pt"===e?"Fixa apps para aceder\nrapidamente":"Pin apps for\nquick access"}):(0,a.jsx)(na,{children:s.map(e=>{let t=n[e.id],o=t?.label??e.label;return(0,a.jsxs)(ni,{accentColor:t?.color??d.w4.colors.accent,onClick:()=>r(e),title:o,children:[(0,a.jsx)(nn,{tint:t?.color??d.w4.colors.accent,children:t?.icon&&(0,a.jsx)(tB,{name:t.icon,size:20,"aria-hidden":"true"})}),(0,a.jsx)(nr,{children:o})]},e.id)})})]})}let nc=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nd=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`,np=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,nm=l().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${nc} 0.3s ease both;
  animation-delay: ${({delay:e})=>80*e}ms;
  min-width: 0;
  padding: 4px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
  &:hover .row-title {
    color: ${d.w4.colors.accent};
  }
`,ng=l().span`
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: #2da44e18;
  color: #2da44e;
  border: 1px solid #2da44e30;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,nu=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
`,nh=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,nf=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,nx=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function ny({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)(null),[r,s]=(0,i.useState)(!1),l=(0,i.useCallback)(async()=>{let e=await is("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.rtp.pt%2Fnoticias%2Frss","news-portugal",6e5);e?(n(e),s(!1)):s(!0)},[]);(0,i.useEffect)(()=>{l();let e=setInterval(l,6e5);return()=>clearInterval(e)},[l]);let c=o?.items?.slice(0,9)??[];return c.length?(0,a.jsxs)(nd,{children:[(0,a.jsx)(np,{children:"pt"===e?"Noticias PT":"PT News"}),c.map((e,t)=>(0,a.jsxs)(nm,{delay:t,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(ng,{children:"RTP"}),(0,a.jsx)(nu,{className:"row-title",children:e.title})]},e.link))]}):(0,a.jsx)(nd,{children:r?(0,a.jsxs)(nf,{role:"alert",children:[(0,a.jsx)(nx,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(nh,{children:t("widget.loading")})})}let nb=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nw=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`,n$=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,nv=l().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${nb} 0.3s ease both;
  animation-delay: ${({delay:e})=>80*e}ms;
  min-width: 0;
  padding: 4px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
  &:hover .row-title {
    color: ${d.w4.colors.accent};
  }
`,nk=l().span`
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: #cc000018;
  color: #cc0000;
  border: 1px solid #cc000030;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,nj=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
`,nz=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,nM=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,nS=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function nT({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)(null),[r,s]=(0,i.useState)(!1),l=(0,i.useCallback)(async()=>{let e=await is("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss","news-world",6e5);e?(n(e),s(!1)):s(!0)},[]);(0,i.useEffect)(()=>{l();let e=setInterval(l,6e5);return()=>clearInterval(e)},[l]);let c=o?.items?.slice(0,9)??[];return c.length?(0,a.jsxs)(nw,{children:[(0,a.jsx)(n$,{children:"pt"===e?"Noticias Mundo":"World News"}),c.map((e,t)=>(0,a.jsxs)(nv,{delay:t,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(nk,{children:"CNN"}),(0,a.jsx)(nj,{className:"row-title",children:e.title})]},e.link))]}):(0,a.jsx)(nw,{children:r?(0,a.jsxs)(nM,{role:"alert",children:[(0,a.jsx)(nS,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(nz,{children:t("widget.loading")})})}var nA=o(99121);let nC=[{id:"bitcoin",symbol:"BTC",color:"#f7931a"},{id:"ethereum",symbol:"ETH",color:"#627eea"},{id:"solana",symbol:"SOL",color:"#9945ff"}],nF=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nP=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${nF} 0.3s ease both;
`,nL=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 10px;
`,nE=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,nN=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid ${d.w4.colors.border};
  animation: ${nF} 0.3s ease both;
  animation-delay: ${({delay:e})=>80*e}ms;

  &:last-child {
    border-bottom: none;
  }
`,nD=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
`,nI=l().span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  background: ${({color:e})=>`${e}18`};
  color: ${({color:e})=>e};
  border: 1px solid ${({color:e})=>`${e}30`};
`,nR=l().span`
  font-size: 13px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainText};
`,nB=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,nH=l().div`
  font-size: 13px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainText};
`,nK=l().div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 500;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({positive:e})=>e?"#3fb950":"#f85149"};
`,nO=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,n_=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,nq=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function nY({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)(null),[r,s]=(0,i.useState)(!1),l=(0,i.useCallback)(async()=>{let e=await is("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=eur,usd&include_24hr_change=true","crypto-prices");e?(n(e),s(!1)):s(!0)},[]);return((0,i.useEffect)(()=>{l();let e=setInterval(l,3e5);return()=>clearInterval(e)},[l]),o)?(0,a.jsxs)(nP,{children:[(0,a.jsx)(nL,{children:"Crypto"}),(0,a.jsx)(nE,{children:nC.map((e,t)=>{var i,n;let r=o[e.id];if(!r)return null;let s=r.eur_24h_change>=0;return(0,a.jsxs)(nN,{delay:t,children:[(0,a.jsxs)(nD,{children:[(0,a.jsx)(nI,{color:e.color,children:e.symbol.charAt(0)}),(0,a.jsx)(nR,{children:e.symbol})]}),(0,a.jsxs)(nB,{children:[(0,a.jsxs)(nH,{children:["€",(i=r.eur)>=1e3?`${i.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:0})}`:i.toFixed(2)]}),(0,a.jsxs)(nK,{positive:s,children:[s?(0,a.jsx)(ir.A,{size:11}):(0,a.jsx)(nA.A,{size:11}),(n=r.eur_24h_change,`${n>=0?"+":""}${n.toFixed(1)}%`)]})]})]},e.id)})})]}):(0,a.jsx)(nP,{children:r?(0,a.jsxs)(n_,{role:"alert",children:[(0,a.jsx)(nq,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(nO,{children:t("widget.loading")})})}let nG=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nW=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  animation: ${nG} 0.3s ease both;
`,nJ=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,nU=l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 8px;
  margin: 0 -8px;
  border: none;
  border-bottom: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  animation: ${nG} 0.3s ease both;
  animation-delay: ${({delay:e})=>80*e}ms;
  transition: background ${d.w4.transitions.fast};

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: -2px;
  }
`,nV=l().span`
  font-size: 11px;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 4px;
  background: ${({color:e})=>`${e}18`};
  color: ${({color:e})=>e};
  border: 1px solid ${({color:e})=>`${e}30`};
  flex-shrink: 0;
  font-family: ${d.w4.typography.fontFamilyMono};
  min-width: 44px;
  text-align: center;
`,nQ=l().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,nZ=l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.85;
`,nX=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 1px;
`,n0=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  text-align: center;
  line-height: 1.5;
`,n1=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,n4=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,n2=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function n5({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)([]),[r,s]=(0,i.useState)("pt"),[l,c]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!1),m=(0,i.useCallback)(async()=>{let e=await is("https://api.ipma.pt/open-data/observation/seismic/felt/sea7.json","seismic-pt",18e5),t=e?e.map((e,t)=>({key:`pt-${e.time}-${t}`,source:"pt",mag:e.mag,location:e.local||e.obsRegion,time:new Date(e.time).getTime()})):[];if(t.length>0){n(t),s("pt"),p(!1),c(!0);return}let o=await is("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson","seismic-world",18e5);null===e&&null===o?p(!0):p(!1),n(o?.features?o.features.map(e=>({key:`usgs-${e.id}`,source:"world",mag:e.properties.mag,location:e.properties.place,time:e.properties.time,lon:e.geometry.coordinates[0],lat:e.geometry.coordinates[1],url:e.properties.url})):[]),s("world"),c(!0)},[]);if((0,i.useEffect)(()=>{m();let e=setInterval(m,18e5);return()=>clearInterval(e)},[m]),!l)return(0,a.jsx)(nW,{children:(0,a.jsx)(n1,{children:t("widget.loading")})});if(d)return(0,a.jsx)(nW,{children:(0,a.jsxs)(n4,{role:"alert",children:[(0,a.jsx)(n2,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]})});let g=o.slice().sort((e,t)=>t.time-e.time).slice(0,5),u=t("pt"===r?"seismic.title.pt":"seismic.title.world"),h=t("seismic.openInEarth");return(0,a.jsxs)(nW,{children:[(0,a.jsx)(nJ,{children:u}),0===g.length?(0,a.jsx)(n0,{children:t("seismic.empty")}):g.map((t,o)=>{var i;let n=(i=t.mag)>=4?"#f85149":i>=2.5?"#d29922":"#3fb950";return(0,a.jsxs)(nU,{delay:o,onClick:()=>{null!=t.lat&&null!=t.lon?ef("earth",{lat:t.lat.toFixed(4),lon:t.lon.toFixed(4),zoom:5}):ef("earth",{placeId:"lisbon"})},title:h,children:[(0,a.jsxs)(nV,{color:n,children:["M ",t.mag.toFixed(1)]}),(0,a.jsxs)(nQ,{children:[(0,a.jsx)(nZ,{children:t.location}),(0,a.jsx)(nX,{children:function(e,t){try{return new Date(e).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}catch{return new Date(e).toISOString()}}(t.time,e)})]})]},t.key)})]})}let n3=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,n6=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  animation: ${n3} 0.3s ease both;
`,n8=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,n7=l().span`
  color: ${d.w4.colors.accent};
  margin-left: 6px;
  letter-spacing: 0.02em;
`,n9=l().a`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 0;
  text-decoration: none;
  animation: ${n3} 0.3s ease both;
  animation-delay: ${({delay:e})=>80*e}ms;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
`,re=l().span`
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${d.w4.colors.codeBg};
  color: ${d.w4.colors.mainTextMuted};
  border: 1px solid ${d.w4.colors.border};
  flex-shrink: 0;
  font-family: ${d.w4.typography.fontFamilyMono};
  min-width: 38px;
  text-align: center;
`,rt=l().span`
  flex: 1;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,ro=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,ra=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,ri=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function rn({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)(null),[r,s]=(0,i.useState)(!1),l=(0,i.useCallback)(async()=>{let e,t,o,a=await is((t=String((e=new Date).getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${t}/${o}`),`onthisday-${new Date().toISOString().slice(0,10)}`,36e5);a?.events?(n(a.events),s(!1)):s(!0)},[]);(0,i.useEffect)(()=>{l();let e=setInterval(l,36e5);return()=>clearInterval(e)},[l]);let c=(0,i.useMemo)(()=>{let e,t,a;return o?(t=new Date((e=new Date).getFullYear(),0,0),a=Math.floor((e.getTime()-t.getTime())/864e5),[...o].sort((e,t)=>((0x9e3779b1*e.year^40503*a)>>>0)-((0x9e3779b1*t.year^40503*a)>>>0)).slice(0,4)):[]},[o]),d=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{day:"numeric",month:"long"});return o?(0,a.jsxs)(n6,{children:[(0,a.jsxs)(n8,{children:[t("onThisDay.title"),(0,a.jsx)(n7,{children:d})]}),c.map((e,t)=>{let o=e.pages?.[0]?.content_urls?.desktop?.page??void 0;return(0,a.jsxs)(n9,{delay:t,href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(re,{children:e.year}),(0,a.jsx)(rt,{children:e.text})]},`${e.year}-${t}`)})]}):(0,a.jsx)(n6,{children:r?(0,a.jsxs)(ra,{role:"alert",children:[(0,a.jsx)(ri,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(ro,{children:t("widget.loading")})})}let rr=[{text:"Any sufficiently advanced technology is indistinguishable from magic.",author:"Arthur C. Clarke"},{text:"The best way to predict the future is to invent it.",author:"Alan Kay"},{text:"First, solve the problem. Then, write the code.",textPt:"Primeiro, resolve o problema. Depois, escreve o codigo.",author:"John Johnson"},{text:"Simplicity is the ultimate sophistication.",textPt:"A simplicidade e a sofisticacao suprema.",author:"Leonardo da Vinci"},{text:"Talk is cheap. Show me the code.",author:"Linus Torvalds"},{text:"The only way to do great work is to love what you do.",textPt:"A unica forma de fazer um excelente trabalho e amar o que fazes.",author:"Steve Jobs"},{text:"In the middle of difficulty lies opportunity.",textPt:"No meio da dificuldade encontra-se a oportunidade.",author:"Albert Einstein"},{text:"Make it work, make it right, make it fast.",author:"Kent Beck"},{text:"The computer was born to solve problems that did not exist before.",textPt:"O computador nasceu para resolver problemas que antes nao existiam.",author:"Bill Gates"},{text:"Code is like humor. When you have to explain it, it's bad.",author:"Cory House"},{text:"Imagination is more important than knowledge.",textPt:"A imaginacao e mais importante que o conhecimento.",author:"Albert Einstein"},{text:"Stay hungry, stay foolish.",author:"Steve Jobs"},{text:"Programs must be written for people to read, and only incidentally for machines to execute.",author:"Harold Abelson"},{text:"The advance of technology is based on making it fit in so that you don't really even notice it.",author:"Bill Gates"},{text:"The best error message is the one that never shows up.",textPt:"A melhor mensagem de erro e a que nunca aparece.",author:"Thomas Fuchs"},{text:"It's not a bug, it's a feature.",author:"Anonymous"},{text:"Knowledge is power.",textPt:"O conhecimento e poder.",author:"Francis Bacon"},{text:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",author:"Bill Gates"},{text:"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",textPt:"A perfeicao atinge-se nao quando nao ha mais nada a acrescentar, mas quando nao ha mais nada a retirar.",author:"Antoine de Saint-Exupery"},{text:'The most dangerous phrase in the language is "we\'ve always done it this way".',author:"Grace Hopper"},{text:"Science is organized knowledge. Wisdom is organized life.",textPt:"Ciencia e conhecimento organizado. Sabedoria e vida organizada.",author:"Immanuel Kant"},{text:"Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.",author:"Isaac Newton"},{text:"The important thing is not to stop questioning. Curiosity has its own reason for existence.",textPt:"O importante e nao parar de questionar. A curiosidade tem a sua propria razao de existir.",author:"Albert Einstein"},{text:"We can only see a short distance ahead, but we can see plenty there that needs to be done.",author:"Alan Turing"},{text:"Before software can be reusable it first has to be usable.",author:"Ralph Johnson"},{text:"Experience is the name everyone gives to their mistakes.",textPt:"Experiencia e o nome que todos dao aos seus erros.",author:"Oscar Wilde"},{text:"Creativity is intelligence having fun.",textPt:"Criatividade e inteligencia a divertir-se.",author:"Albert Einstein"},{text:"The only true wisdom is in knowing you know nothing.",textPt:"A unica sabedoria verdadeira e saber que nada sabes.",author:"Socrates"},{text:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{text:"Debugging is twice as hard as writing the code in the first place.",author:"Brian Kernighan"},{text:"Logic will get you from A to B. Imagination will take you everywhere.",textPt:"A logica leva-te de A a B. A imaginacao leva-te a todo o lado.",author:"Albert Einstein"},{text:"Java is to JavaScript what car is to carpet.",author:"Chris Heilmann"},{text:"The function of good software is to make the complex appear to be simple.",author:"Grady Booch"},{text:"One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.",author:"Elbert Hubbard"},{text:"A person who never made a mistake never tried anything new.",textPt:"Uma pessoa que nunca cometeu um erro nunca tentou nada de novo.",author:"Albert Einstein"},{text:"The best time to plant a tree was 20 years ago. The second best time is now.",textPt:"A melhor altura para plantar uma arvore foi ha 20 anos. A segunda melhor e agora.",author:"Chinese Proverb"},{text:"There are only two hard things in Computer Science: cache invalidation and naming things.",author:"Phil Karlton"},{text:"Good code is its own best documentation.",author:"Steve McConnell"},{text:"The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",author:"Tim Berners-Lee"},{text:"It always seems impossible until it's done.",textPt:"Parece sempre impossivel ate estar feito.",author:"Nelson Mandela"},{text:"Wise men speak because they have something to say; fools because they have to say something.",textPt:"Os sabios falam porque tem algo a dizer; os tolos porque tem de dizer algo.",author:"Plato"},{text:"Life is what happens when you're busy making other plans.",textPt:"A vida e o que acontece enquanto estas ocupado a fazer outros planos.",author:"John Lennon"},{text:"The greatest glory in living lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela"},{text:"Software is a great combination between artistry and engineering.",author:"Bill Gates"},{text:"The future belongs to those who believe in the beauty of their dreams.",textPt:"O futuro pertence aqueles que acreditam na beleza dos seus sonhos.",author:"Eleanor Roosevelt"},{text:"Walking on water and developing software from a specification are easy if both are frozen.",author:"Edward V. Berard"},{text:"Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",textPt:"Da-me uma alavanca suficientemente comprida e um ponto de apoio, e moverei o mundo.",author:"Archimedes"},{text:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",textPt:"Nos somos o que fazemos repetidamente. A excelencia nao e um ato, mas um habito.",author:"Aristotle"},{text:"Testing leads to failure, and failure leads to understanding.",author:"Burt Rutan"},{text:"Everybody should learn to program a computer, because it teaches you how to think.",textPt:"Todos deviam aprender a programar, porque isso ensina-te a pensar.",author:"Steve Jobs"}],rs=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,rl=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${rs} 0.3s ease both;
`,rc=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
`,rd=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 4px;
`,rp=l().div`
  font-size: 13px;
  line-height: 1.65;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-style: italic;
  opacity: 0.9;

  &::before {
    content: open-quote;
    font-size: 20px;
    color: ${d.w4.colors.mainTextMuted};
    margin-right: 2px;
    vertical-align: -2px;
  }
  &::after {
    content: close-quote;
    font-size: 20px;
    color: ${d.w4.colors.mainTextMuted};
    margin-left: 2px;
    vertical-align: -2px;
  }
`,rm=l().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 12px;
  letter-spacing: 0.03em;
`;function rg({locale:e}){let t,o,i=(o=new Date((t=new Date).getFullYear(),0,0),Math.floor((t.getTime()-o.getTime())/864e5)%rr.length),n=rr[i],r="pt"===e&&n.textPt?n.textPt:n.text;return(0,a.jsxs)(rl,{children:[(0,a.jsx)(rc,{children:"pt"===e?"Citacao do dia":"Daily quote"}),(0,a.jsxs)(rd,{children:[(0,a.jsx)(rp,{children:r}),(0,a.jsxs)(rm,{children:["— ",n.author]})]})]})}function ru(e){return e.toString().padStart(2,"0")}function rh({hours:e,minutes:t,seconds:o}){let i=e=>e*Math.PI/180,n=o/60*360-90,r=t/60*360+o/60*6-90,s=e%12/12*360+t/60*30-90,l=70+44*Math.cos(i(n)),c=70+44*Math.sin(i(n)),p=70+46*Math.cos(i(r)),m=70+46*Math.sin(i(r)),g=70+32*Math.cos(i(s)),u=70+32*Math.sin(i(s));return(0,a.jsxs)("svg",{viewBox:"0 0 140 140",width:140,height:140,children:[(0,a.jsx)("circle",{cx:70,cy:70,r:60,fill:d.w4.colors.surface,stroke:d.w4.colors.border,strokeWidth:1.5}),Array.from({length:12},(e,t)=>{let o=t+1,n=o/12*360-90,r=70+48*Math.cos(i(n)),s=70+48*Math.sin(i(n));return(0,a.jsx)("text",{x:r,y:s+3,fill:d.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:o},o)}),Array.from({length:60},(e,t)=>{let o=t/60*360-90,n=t%5==0,r=n?53:56;return(0,a.jsx)("line",{x1:70+r*Math.cos(i(o)),y1:70+r*Math.sin(i(o)),x2:70+59*Math.cos(i(o)),y2:70+59*Math.sin(i(o)),stroke:n?d.w4.colors.mainTextMuted:d.w4.colors.border,strokeWidth:n?1.5:.8},t)}),(0,a.jsx)("line",{x1:70,y1:70,x2:g,y2:u,stroke:d.w4.colors.mainText,strokeWidth:3,strokeLinecap:"round"}),(0,a.jsx)("line",{x1:70,y1:70,x2:p,y2:m,stroke:d.w4.colors.accent,strokeWidth:2,strokeLinecap:"round"}),(0,a.jsx)("line",{x1:70-8*Math.cos(i(n)),y1:70-8*Math.sin(i(n)),x2:l,y2:c,stroke:"#f87171",strokeWidth:1,strokeLinecap:"round"}),(0,a.jsx)("circle",{cx:70,cy:70,r:3,fill:d.w4.colors.accent}),(0,a.jsx)("circle",{cx:70,cy:70,r:1.5,fill:"#f87171"})]})}let rf=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,rx=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  animation: ${rf} 0.3s ease both;
`,ry=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
  align-self: flex-start;
`,rb=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,rw=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 22px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  letter-spacing: 0.04em;
`,r$=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  text-align: center;
`,rv=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 2px;
`,rk=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  letter-spacing: 0.04em;
`;function rj({locale:e}){let[t,o]=(0,i.useState)(()=>new Date().getHours()),[n,r]=(0,i.useState)(()=>new Date().getMinutes()),[s,l]=(0,i.useState)(()=>new Date().getSeconds());(0,i.useEffect)(()=>{let e=setInterval(()=>{let e=new Date;o(e.getHours()),r(e.getMinutes()),l(e.getSeconds())},1e3);return()=>clearInterval(e)},[]);let c=t%12||12,d=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{weekday:"long",day:"numeric",month:"long"}),p=Intl.DateTimeFormat().resolvedOptions().timeZone;return(0,a.jsxs)(rx,{children:[(0,a.jsx)(ry,{children:"pt"===e?"Relogio":"Clock"}),(0,a.jsxs)(rb,{children:[(0,a.jsx)(rh,{hours:t,minutes:n,seconds:s}),(0,a.jsxs)(rw,{children:[ru(t),":",ru(n),(0,a.jsxs)("span",{style:{fontSize:"14px",opacity:.5},children:[":",ru(s)]})]}),(0,a.jsx)(r$,{children:function(e,t,o){if("pt"===o){let o=1===e?"1 hora":`${e} horas`;return 0===t?o:15===t?`${o} e um quarto`:30===t?`${o} e meia`:45===t?`um quarto para as ${12===e?1:e+1}`:`${o} e ${t} minutos`}let a=e<12?"AM":"PM",i=e%12||12;return 0===t?`${i} o'clock ${a}`:15===t?`quarter past ${i} ${a}`:30===t?`half past ${i} ${a}`:45===t?`quarter to ${i%12+1} ${a}`:`${i}:${ru(t)} ${a}`}(c,n,e)}),(0,a.jsx)(rv,{children:d}),(0,a.jsx)(rk,{children:p})]})]})}let rz="#e233ff",rM=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,rS=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
`,rT=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
`,rA=l().span`
  font-size: 13px;
  line-height: 1;
`,rC=l().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,rF=l().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${rM} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;
  min-width: 0;
  padding: 3px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${d.w4.colors.accent}; }
`,rP=l().span`
  font-size: 9px;
  font-weight: 700;
  width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  flex-shrink: 0;
  letter-spacing: 0.05em;
  background: ${rz}12;
  color: ${rz};
  border: 1px solid ${rz}25;
`,rL=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
  font-size: 11px;
`,rE=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,rN=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,rD=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function rI({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)([]),[r,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)(!1),d=(0,i.useCallback)(async()=>{let e=await is("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftrends.google.com%2Ftrending%2Frss%3Fgeo%3DUS","internet-trends",6e5);e?.items?.length?(n(e.items.slice(0,12)),c(!1)):c(!0),s(!0)},[]);return((0,i.useEffect)(()=>{d();let e=setInterval(d,6e5);return()=>clearInterval(e)},[d]),o.length)?(0,a.jsxs)(rS,{children:[(0,a.jsxs)(rT,{children:[(0,a.jsx)(rA,{children:"\uD83D\uDD0D"}),"pt"===e?"Pesquisas em Alta":"Trending Searches"]}),(0,a.jsx)(rC,{children:o.map((e,t)=>(0,a.jsxs)(rF,{delay:t,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(rP,{children:t+1}),(0,a.jsx)(rL,{className:"row-title",children:e.title})]},e.title))})]}):(0,a.jsx)(rS,{children:r&&l?(0,a.jsxs)(rN,{role:"alert",children:[(0,a.jsx)(rD,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(rE,{children:t("widget.loading")})})}let rR=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]),rB="#58a6ff",rH=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,rK=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
`,rO=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
`,r_=l().span`
  font-size: 13px;
  line-height: 1;
`,rq=l().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,rY=l().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${rH} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;
  min-width: 0;
  padding: 3px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${d.w4.colors.accent}; }
`,rG=l().span`
  font-size: 9px;
  font-weight: 700;
  width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  flex-shrink: 0;
  letter-spacing: 0.05em;
  background: ${rB}12;
  color: ${rB};
  border: 1px solid ${rB}25;
`,rW=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
  font-size: 11px;
`,rJ=l().span`
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  flex-shrink: 0;
`,rU=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,rV=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,rQ=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function rZ({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)([]),[r,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)(!1),d=(0,i.useCallback)(async()=>{let e,t,o,a,i,r=await is((t=(e=new Date(Date.now()-864e5)).getUTCFullYear(),o=String(e.getUTCMonth()+1).padStart(2,"0"),a=String(e.getUTCDate()).padStart(2,"0"),`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${t}/${o}/${a}`),(i=new Date(Date.now()-864e5),`internet-wiki-${i.toISOString().slice(0,10)}`),36e5),l=r?.items?.[0]?.articles??[];l.length?(n(l.filter(e=>!rR.has(e.article)).slice(0,12)),c(!1)):c(!0),s(!0)},[]);return((0,i.useEffect)(()=>{d();let e=setInterval(d,36e5);return()=>clearInterval(e)},[d]),o.length)?(0,a.jsxs)(rK,{children:[(0,a.jsxs)(rO,{children:[(0,a.jsx)(r_,{children:"\uD83D\uDCD6"}),"pt"===e?"Mais Lido na Wikip\xe9dia":"Most Read — Wikipedia"]}),(0,a.jsx)(rq,{children:o.map((e,t)=>{var o;return(0,a.jsxs)(rY,{delay:t,href:`https://en.wikipedia.org/wiki/${e.article}`,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(rG,{children:t+1}),(0,a.jsx)(rW,{className:"row-title",children:e.article.replace(/_/g," ")}),(0,a.jsx)(rJ,{children:(o=e.views)>=1e6?`${(o/1e6).toFixed(1)}M`:o>=1e3?`${(o/1e3).toFixed(0)}k`:String(o)})]},e.article)})})]}):(0,a.jsx)(rK,{children:r&&l?(0,a.jsxs)(rV,{role:"alert",children:[(0,a.jsx)(rQ,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(rU,{children:t("widget.loading")})})}let rX="#f97316",r0=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,r1=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
`,r4=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
`,r2=l().span`
  font-size: 13px;
  line-height: 1;
`,r5=l().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,r3=l().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${r0} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;
  min-width: 0;
  padding: 3px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${d.w4.colors.accent}; }
`,r6=l().span`
  font-size: 9px;
  font-weight: 700;
  width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  flex-shrink: 0;
  letter-spacing: 0.05em;
  background: ${rX}12;
  color: ${rX};
  border: 1px solid ${rX}25;
`,r8=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
  font-size: 11px;
`,r7=l().span`
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  flex-shrink: 0;
`,r9=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,se=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,st=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function so({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)([]),[r,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)(!1),d=(0,i.useCallback)(async()=>{let e=await is("https://hacker-news.firebaseio.com/v0/topstories.json","internet-hn-ids",6e5);if(!e){c(!0),s(!0);return}let t=e.slice(0,12),o=(await Promise.all(t.map(e=>is(`https://hacker-news.firebaseio.com/v0/item/${e}.json`,`internet-hn-${e}`,6e5)))).filter(e=>null!==e&&!!e.title);o.length?(n(o),c(!1)):c(!0),s(!0)},[]);return((0,i.useEffect)(()=>{d();let e=setInterval(d,6e5);return()=>clearInterval(e)},[d]),o.length)?(0,a.jsxs)(r1,{children:[(0,a.jsxs)(r4,{children:[(0,a.jsx)(r2,{children:"\uD83D\uDD25"}),"pt"===e?"Em Alta no HN":"Hot on Hacker News"]}),(0,a.jsx)(r5,{children:o.map((e,t)=>(0,a.jsxs)(r3,{delay:t,href:e.url??`https://news.ycombinator.com/item?id=${e.id}`,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(r6,{children:t+1}),(0,a.jsx)(r8,{className:"row-title",children:e.title}),(0,a.jsxs)(r7,{children:["▲",e.score]})]},e.id))})]}):(0,a.jsx)(r1,{children:r&&l?(0,a.jsxs)(se,{role:"alert",children:[(0,a.jsx)(st,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(r9,{children:t("widget.loading")})})}let sa=[{key:"crypto",labelKey:"health.ch.crypto",color:"#f7931a",unit:"ms",floor:0,ceil:500,consumers:["Crypto"]},{key:"weather",labelKey:"health.ch.weather",color:"#58a6ff",unit:"ms",floor:0,ceil:500,consumers:["Weather"]},{key:"wiki",labelKey:"health.ch.wiki",color:"#3fb950",unit:"ms",floor:0,ceil:500,consumers:["OnThisDay","WikiTop"]},{key:"hn",labelKey:"health.ch.hn",color:"#f97316",unit:"ms",floor:0,ceil:500,consumers:["TechScope","HN Hot"]},{key:"dom",labelKey:"health.ch.dom",color:"#f87171",unit:"",floor:0,ceil:5e3},{key:"fps",labelKey:"health.ch.fps",color:"#d29922",unit:"fps",floor:0,ceil:120}],si={crypto:"https://api.coingecko.com/api/v3/ping",weather:"https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.14&current=temperature_2m",wiki:"https://en.wikipedia.org/api/rest_v1/page/summary/Lisbon",hn:"https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=1"},sn=Object.keys(si);async function sr(e,t){let o=`widget-cache:ping-${e}`,a=await ee(o);if(a)try{let e=JSON.parse(a);if(Date.now()-e.cachedAt<6e4)return e.latency}catch{}let i=performance.now();try{await fetch(t);let e=Math.round(performance.now()-i),a={latency:e,cachedAt:Date.now()};return X(o,JSON.stringify(a)),e}catch{return -1}}let ss=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,sl=(0,c.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,sc=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`,sd=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
`,sp=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
`,sm=l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  ${({tone:e})=>{let t="ok"===e?"#3fb950":"warn"===e?"#d29922":"#f85149";return`
      color: ${t};
      background: ${t}1a;
      border: 1px solid ${t}33;
    `}}
`,sg=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({tone:e})=>"ok"===e?"#3fb950":"warn"===e?"#d29922":"#f85149"};
  animation: ${sl} 1.5s ease-in-out infinite;
`,su=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  flex: 1;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,sh=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${ss} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
`,sf=l().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,sx=l().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,sy=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,sb=l().span`
  font-size: 9px;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainTextFaint};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,sw=l().div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`,s$=l().span`
  font-size: 14px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({color:e,warn:t})=>t?"#f85149":e};
  transition: color ${d.w4.transitions.base};
  font-variant-numeric: tabular-nums;
`,sv=l().span`
  font-size: 10px;
  font-weight: 400;
  opacity: 0.6;
`,sk=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  /* For latency: up = worse (red-ish), down = better (green).
     For FPS: up = better, down = worse. Invert accordingly. */
  color: ${({dir:e,latency:t})=>"flat"===e?d.w4.colors.mainTextFaint:(t?"up"===e:"down"===e)?"#f85149":"#3fb950"};
`,sj=l().div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${d.w4.colors.border};
  overflow: hidden;
`,sz=l().div`
  width: ${({pct:e})=>Math.min(100,e)}%;
  height: 100%;
  border-radius: 2px;
  background: ${({color:e})=>e};
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 6px ${({color:e})=>`${e}40`};
`,sM=l().div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 16px;
`,sS=l().div`
  flex: 1;
  height: ${({h:e})=>e}%;
  min-height: 1px;
  border-radius: 1px;
  background: ${({color:e,latest:t})=>t?e:`${e}40`};
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`,sT=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`;function sA({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>tP(t,aK),[t]),[n,r]=(0,i.useState)(()=>sa.map(()=>Array(24).fill(0))),[s,l]=(0,i.useState)({}),[c,p]=(0,i.useState)(!1),m=(0,i.useRef)(0),g=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=function(){let e=0,t=performance.now(),o=60,a=0;function i(){e++;let n=performance.now(),r=n-t;r>=1e3&&(o=Math.round(1e3*e/r),e=0,t=n),a=requestAnimationFrame(i)}return{start(){a=requestAnimationFrame(i)},stop(){cancelAnimationFrame(a)},get fps(){return o}}}();return g.current=e,e.start(),()=>e.stop()},[]);let u=(0,i.useCallback)(async()=>{let e=m.current;m.current+=1;let t=sn[e%sn.length],o=si[t],a=await sr(t,o),i=a<0,n=document.getElementsByTagName("*").length,s=g.current?.fps??0;l(e=>({...e,[t]:i})),r(e=>e.map((e,o)=>{let r,l=sa[o];if(l.key===t)r=i?e[e.length-1]:a;else if("dom"===l.key)r=n;else{if("fps"!==l.key)return e;r=s}return[...e.slice(1),r]})),p(!0)},[]);if((0,i.useEffect)(()=>{u();let e=setInterval(u,5e3);return()=>clearInterval(e)},[u]),!c)return(0,a.jsx)(sc,{children:(0,a.jsx)(sT,{children:o("health.measuring")})});let h=d.w4.colors.mainTextFaint,f=Object.values(s).filter(Boolean).length,x=sa.filter(e=>"ms"===e.unit&&!s[e.key]&&n[sa.indexOf(e)][23]>300).length,y=f>0?"bad":x>0?"warn":"ok",b=f>0?o("health.status.offline",{n:f}):x>0?o("health.status.slow",{n:x}):o("health.status.ok");return(0,a.jsxs)(sc,{children:[(0,a.jsxs)(sd,{children:[(0,a.jsxs)(sp,{children:[(0,a.jsx)(sg,{tone:y}),o("health.title")]}),(0,a.jsx)(sm,{tone:y,children:b})]}),(0,a.jsx)(su,{children:sa.map((e,t)=>{let i=n[t],r=i[i.length-1],l=i[i.length-2]??r,c="ms"===e.unit,d=c&&!!s[e.key],p=!d&&c&&r>300,m=d?100:(r-e.floor)/(e.ceil-e.floor)*100,g=d?h:p?"#f85149":e.color,u=d?h:e.color,f=d?o("health.offline"):"dom"===e.key&&r>=1e3?`${(r/1e3).toFixed(1)}k`:String(Math.round(r)),x=d?"":e.unit,y=r-l,b=!d&&Math.abs(y)>=(c?10:2)?y>0?"up":"down":"flat",w=e.consumers?.length?o("health.consumers",{list:e.consumers.join(" \xb7 ")}):"";return(0,a.jsxs)(sh,{delay:t,children:[(0,a.jsxs)(sf,{children:[(0,a.jsxs)(sx,{children:[(0,a.jsx)(sy,{children:o(e.labelKey)}),w&&(0,a.jsx)(sb,{children:w})]}),(0,a.jsxs)(sw,{children:[!d&&"flat"!==b&&(0,a.jsx)(sk,{dir:b,latency:c,children:"up"===b?"▲":"down"===b?"▼":"\xb7"}),(0,a.jsxs)(s$,{color:u,warn:p,children:[f,x&&(0,a.jsx)(sv,{children:x})]})]})]}),(0,a.jsx)(sj,{children:(0,a.jsx)(sz,{pct:m,color:g})}),(0,a.jsx)(sM,{children:i.map((t,o)=>{let n=Math.max(2,(t-e.floor)/(e.ceil-e.floor)*100);return(0,a.jsx)(sS,{h:Math.min(100,n),color:d&&o===i.length-1?h:p&&o===i.length-1?"#f85149":e.color,latest:o===i.length-1},o)})})]},e.key)})})]})}let sC="widget-cache:pet-state",sF={lastVisit:Date.now(),happiness:80,totalPets:0,totalFeeds:0,name:"Pixel"},sP={ecstatic:{en:"Purring loudly!",pt:"A ronronar alto!"},happy:{en:"Feeling great~",pt:"Est\xe1 \xf3timo~"},content:{en:"Chilling...",pt:"Relaxando..."},lonely:{en:"Misses you...",pt:"Tem saudades..."},dramatic:{en:"WHERE WERE YOU?!",pt:"ONDE ESTAVAS?!"}},sL=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,sE=(0,c.keyframes)`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.03); }
`,sN=(0,c.keyframes)`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(8deg); }
`,sD=(0,c.keyframes)`
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
`,sI=(0,c.keyframes)`
  0%, 42%, 44%, 100% { ry: 7; }
  43% { ry: 1; }
`,sR=(0,c.keyframes)`
  0%, 100% { ry: 1; }
`,sB=(0,c.keyframes)`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-0.5px); }
  75% { transform: translateX(0.5px); }
`,sH=(0,c.keyframes)`
  0% { opacity: 1; transform: translate(0, 0) scale(1); }
  100% { opacity: 0; transform: translate(var(--dx), -40px) scale(0.5); }
`,sK=(0,c.keyframes)`
  0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
  30% { opacity: 1; transform: translate(4px, -8px) scale(0.8); }
  100% { opacity: 0; transform: translate(10px, -20px) scale(1); }
`,sO=(0,c.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
`,s_=(0,c.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
`,sq=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${sL} 0.3s ease both;
  user-select: none;
`,sY=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,sG=l().span`
  color: ${d.w4.colors.mainText};
  font-weight: 700;
`,sW=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border-radius: ${d.w4.borderRadius.md};
  transition: background 0.3s;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }

  &:active svg {
    transform: scale(0.96);
  }

  svg {
    transition: transform ${d.w4.transitions.fast};
  }

  ${({mood:e})=>"ecstatic"===e&&(0,c.css)`
    svg .cat-body { animation: ${sB} 0.15s ease infinite; }
  `}
`,sJ=l().div`
  position: absolute;
  font-size: 16px;
  pointer-events: none;
  --dx: ${({dx:e})=>e}px;
  animation: ${sH} 0.8s ease-out forwards;
`,sU=l().text`
  font-size: 14px;
  fill: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 700;
`,sV=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`,sQ=l().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  font-style: italic;
`,sZ=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,sX=l().div`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background: ${d.w4.colors.border};
  overflow: hidden;
`,s0=l().div`
  width: ${({pct:e})=>e}%;
  height: 100%;
  border-radius: 2px;
  transition: width 0.6s ease, background 0.3s;
  background: ${({mood:e})=>{switch(e){case"ecstatic":return"#3fb950";case"happy":return"#58a6ff";case"content":return"#d29922";case"lonely":return"#f97316";case"dramatic":return"#f85149"}}};
`,s1=l().button`
  padding: 3px 10px;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 12px;
  background: transparent;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  cursor: pointer;
  transition: ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.accent};
    background: ${d.w4.colors.sidebarHover};
  }
`;function s4({mood:e}){let t="lonely"===e||"dramatic"===e,o="ecstatic"===e||"happy"===e,i=(()=>{switch(e){case"ecstatic":return"M 92,104 Q 100,114 108,104";case"happy":return"M 94,104 Q 100,110 106,104";case"content":return"M 95,105 L 105,105";case"lonely":return"M 94,108 Q 100,103 106,108";case"dramatic":return"M 92,110 Q 100,102 108,110"}})(),n=o?"#4ade80":t?"#f97316":"#58a6ff";return(0,a.jsxs)("svg",{viewBox:"0 0 200 200",width:"140",height:"140",children:[(0,a.jsxs)("g",{style:{transformOrigin:"145px 155px",animation:`${t?sD:sN} ${t?"4s":"2s"} ease-in-out infinite`},children:[(0,a.jsx)("path",{d:"M 140,155 Q 160,130 170,110 Q 175,100 168,95",stroke:"#7c6f5b",strokeWidth:"6",fill:"none",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M 140,155 Q 160,130 170,110 Q 175,100 168,95",stroke:"#9a8c78",strokeWidth:"4",fill:"none",strokeLinecap:"round"})]}),(0,a.jsxs)("g",{className:"cat-body",style:{transformOrigin:"100px 155px",animation:`${sE} 3s ease-in-out infinite`},children:[(0,a.jsx)("ellipse",{cx:"100",cy:"155",rx:"40",ry:"28",fill:"#9a8c78"}),(0,a.jsx)("ellipse",{cx:"100",cy:"160",rx:"25",ry:"18",fill:"#b5a894"})]}),(0,a.jsx)("ellipse",{cx:"72",cy:"175",rx:"12",ry:"7",fill:"#9a8c78"}),(0,a.jsx)("ellipse",{cx:"128",cy:"175",rx:"12",ry:"7",fill:"#9a8c78"}),(0,a.jsx)("ellipse",{cx:"72",cy:"177",rx:"5",ry:"3",fill:"#c4b5a0"}),(0,a.jsx)("ellipse",{cx:"128",cy:"177",rx:"5",ry:"3",fill:"#c4b5a0"}),(0,a.jsx)("circle",{cx:"100",cy:"95",r:"36",fill:"#9a8c78"}),(0,a.jsx)("ellipse",{cx:"75",cy:"100",rx:"10",ry:"6",fill:"#a89880"}),(0,a.jsx)("ellipse",{cx:"125",cy:"100",rx:"10",ry:"6",fill:"#a89880"}),(0,a.jsxs)("g",{style:{transformOrigin:"78px 68px",animation:t?`${sO} 3s ease-in-out infinite`:void 0},children:[(0,a.jsx)("polygon",{points:"78,68 62,28 92,58",fill:"#9a8c78"}),(0,a.jsx)("polygon",{points:"79,65 67,38 88,58",fill:"#e8a0b0"})]}),(0,a.jsxs)("g",{style:{transformOrigin:"122px 68px",animation:t?`${s_} 3s ease-in-out infinite`:void 0},children:[(0,a.jsx)("polygon",{points:"122,68 138,28 108,58",fill:"#9a8c78"}),(0,a.jsx)("polygon",{points:"121,65 133,38 112,58",fill:"#e8a0b0"})]}),(0,a.jsx)("path",{d:"M 92,70 L 95,80",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M 100,68 L 100,78",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M 108,70 L 105,80",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,a.jsx)("ellipse",{cx:"85",cy:"90",rx:"7",ry:t?1:7,fill:n,style:t?{animation:`${sR} 1s ease infinite`}:{animation:`${sI} 4s ease-in-out infinite`,animationDelay:"0.5s"}}),(0,a.jsx)("ellipse",{cx:"115",cy:"90",rx:"7",ry:t?1:7,fill:n,style:t?{animation:`${sR} 1s ease infinite`}:{animation:`${sI} 4s ease-in-out infinite`}}),!t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("circle",{cx:o?86:85,cy:o?89:90,r:o?4:3.5,fill:"#0d1117"}),(0,a.jsx)("circle",{cx:o?116:115,cy:o?89:90,r:o?4:3.5,fill:"#0d1117"}),(0,a.jsx)("circle",{cx:83,cy:87,r:1.5,fill:"white",opacity:.8}),(0,a.jsx)("circle",{cx:113,cy:87,r:1.5,fill:"white",opacity:.8})]}),(0,a.jsx)("polygon",{points:"100,97 96,101 104,101",fill:"#e8a0b0"}),(0,a.jsx)("path",{d:i,stroke:"#7c6f5b",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),(0,a.jsx)("line",{x1:"55",y1:"96",x2:"78",y2:"95",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"55",y1:"102",x2:"78",y2:"100",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"55",y1:"108",x2:"78",y2:"104",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"145",y1:"96",x2:"122",y2:"95",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"145",y1:"102",x2:"122",y2:"100",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"145",y1:"108",x2:"122",y2:"104",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("g",{style:{animation:`${sK} 2s ease-in-out infinite`},children:(0,a.jsx)(sU,{x:"130",y:"72",children:"z"})}),(0,a.jsx)("g",{style:{animation:`${sK} 2s ease-in-out 0.6s infinite`},children:(0,a.jsx)(sU,{x:"140",y:"60",fontSize:"11",children:"z"})}),(0,a.jsx)("g",{style:{animation:`${sK} 2s ease-in-out 1.2s infinite`},children:(0,a.jsx)(sU,{x:"148",y:"48",fontSize:"9",children:"z"})})]}),"ecstatic"===e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("text",{x:"45",y:"55",fontSize:"10",opacity:"0.7",children:"✨"}),(0,a.jsx)("text",{x:"148",y:"50",fontSize:"8",opacity:"0.5",children:"✨"})]})]})}function s2({locale:e}){var t;let[o,n]=(0,i.useState)(sF),[r,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)([]),d=(0,i.useRef)(0);(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await ea(sC);if(!e){if(t)try{let e,o=JSON.parse(t),a=(e=(Date.now()-o.lastVisit)/36e5)<.5?Math.min(100,o.happiness+5):e<2?o.happiness:e<6?Math.max(0,o.happiness-10):e<24?Math.max(0,o.happiness-25):Math.max(0,o.happiness-50),i={...o,happiness:a,lastVisit:Date.now()};n(i),eo(sC,JSON.stringify(i))}catch{n(sF)}s(!0)}})(),()=>{e=!0}},[]),(0,i.useCallback)(e=>{n(e),eo(sC,JSON.stringify(e))},[]);let p=(0,i.useCallback)(()=>{let e=d.current++,t=(Math.random()-.5)*40;c(o=>[...o,{id:e,dx:t}]),setTimeout(()=>c(t=>t.filter(t=>t.id!==e)),800),n(e=>{let t={...e,happiness:Math.min(100,e.happiness+8),totalPets:e.totalPets+1,lastVisit:Date.now()};return eo(sC,JSON.stringify(t)),t})},[]),m=(0,i.useCallback)(()=>{n(e=>{let t={...e,happiness:Math.min(100,e.happiness+15),totalFeeds:e.totalFeeds+1,lastVisit:Date.now()};return eo(sC,JSON.stringify(t)),t})},[]);if(!r)return null;let g=(t=o.happiness)>=90?"ecstatic":t>=70?"happy":t>=40?"content":t>=20?"lonely":"dramatic",u="pt"===e?sP[g].pt:sP[g].en;return(0,a.jsxs)(sq,{children:[(0,a.jsxs)(sY,{children:[(0,a.jsxs)("span",{children:["\uD83D\uDC31 ",(0,a.jsx)(sG,{children:o.name})]}),(0,a.jsxs)(sZ,{children:[(0,a.jsxs)("span",{children:["❤️ ",o.totalPets]}),(0,a.jsxs)("span",{children:["\uD83D\uDC1F ",o.totalFeeds]})]})]}),(0,a.jsxs)(sW,{mood:g,onClick:p,title:"pt"===e?"Faz festinhas!":"Pet me!",children:[(0,a.jsx)(s4,{mood:g}),l.map(e=>(0,a.jsx)(sJ,{dx:e.dx,children:"❤️"},e.id))]}),(0,a.jsxs)(sV,{children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,a.jsx)(sQ,{children:u}),(0,a.jsx)(sX,{children:(0,a.jsx)(s0,{pct:o.happiness,mood:g})})]}),(0,a.jsxs)(s1,{onClick:e=>{e.stopPropagation(),m()},children:["\uD83D\uDC1F ","pt"===e?"Dar comida":"Feed"]})]})]})}let s5=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,s3=(0,c.keyframes)`
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(251, 146, 60, 0.4)); }
  50%      { transform: scale(1.08); filter: drop-shadow(0 0 14px rgba(251, 146, 60, 0.7)); }
`,s6=l().button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  animation: ${s5} 0.3s ease both;

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${d.w4.borderRadius.sm};
  }
`,s8=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,s7=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${d.w4.spacing.md};
  flex: 1;
`,s9=l().div`
  font-size: 56px;
  line-height: 1;
  animation: ${({active:e})=>e?s3:"none"} 2.4s ease-in-out infinite;
  opacity: ${({active:e})=>e?1:.35};
  filter: ${({active:e})=>e?"none":"grayscale(0.6)"};
`,le=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,lt=l().div`
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  color: #fb923c;
  text-shadow: 0 0 16px rgba(251, 146, 60, 0.35);
`,lo=l().div`
  font-size: ${d.w4.typography.fontSizeSm};
  color: rgba(251, 146, 60, 0.85);
  font-weight: 600;
  margin-top: 2px;
`,la=l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  font-weight: 500;
`,li=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 6px;
  border-top: 1px solid ${d.w4.colors.border};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,ln=l().span`
  color: ${d.w4.colors.accent};
  font-weight: 700;
`;function lr({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)(null),r=(0,i.useCallback)(()=>{eH().then(n)},[]);(0,i.useEffect)(()=>{r();let e=e=>{let t=e.detail;t?n(t):r()},t=()=>r();return window.addEventListener(eK,e),window.addEventListener("focus",t),()=>{window.removeEventListener(eK,e),window.removeEventListener("focus",t)}},[r]);let s=o?.completedToday.length??0,l=o?.missions.length??0,c=o?.totalPoints??0,d=eB(),p=o?.history??{},m=s>=3,g=m&&!(p[d]?.length>=3)?{...p,[d]:o?.completedToday??[]}:p,u=o?function(e,t=3){return function(e){if(0===e.length)return 0;let t=[...new Set(e)].sort().reverse(),o=eB(),a=0,i=o;for(let e of t)if(e===i){a++;let e=new Date(i);e.setDate(e.getDate()-1),i=e.toISOString().slice(0,10)}else break;return a}(function(e,t=3){if(!e)return[];let o=[];for(let[a,i]of Object.entries(e))i&&i.length>=t&&o.push(a);return o}(e,t))}(g):0,h=m||(p[d]?.length??0)>=3;return(0,a.jsxs)(s6,{onClick:()=>{window.location.hash="#/daily"},title:t("streak.open"),children:[(0,a.jsxs)(s8,{children:["\uD83D\uDD25 ",t("streak.title")]}),(0,a.jsxs)(s7,{children:[(0,a.jsx)(s9,{active:u>0||h,children:"\uD83D\uDD25"}),u>0?(0,a.jsxs)(le,{children:[(0,a.jsx)(lt,{children:u}),(0,a.jsx)(lo,{children:t("streak.dayStreak")})]}):(0,a.jsx)(la,{children:t("streak.noStreak")})]}),(0,a.jsxs)(li,{children:[(0,a.jsx)("span",{children:t("streak.todayDone",{n:s,total:l})}),(0,a.jsx)(ln,{children:t("streak.points",{n:c})})]})]})}let ls=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,ll=l().button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  animation: ${ls} 0.3s ease both;

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${d.w4.borderRadius.sm};
  }
`,lc=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
`,ld=l().div`
  display: grid;
  grid-template-columns: 18px 1fr ${"repeat(7, 12px)"} 22px;
  align-items: center;
  gap: 8px;
  padding: 0 2px 2px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,lp=l().div`
  text-align: center;
  color: ${({isToday:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextFaint};
  font-weight: ${({isToday:e})=>e?700:400};
`,lm=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,lg=l().div`
  display: grid;
  grid-template-columns: 18px 1fr ${"repeat(7, 12px)"} 22px;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
  border-radius: ${d.w4.borderRadius.sm};
  animation: ${ls} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
  transition: background ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
`,lu=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  color: ${d.w4.colors.mainText};
`,lh=l().div`
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,lf=l().div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${({done:e,tint:t})=>e?t:d.w4.colors.codeBg};
  border: 1px solid
    ${({done:e,today:t,tint:o})=>t?d.w4.colors.accent:e?o:d.w4.colors.codeBorder};
  box-shadow: ${({done:e,tint:t})=>e?`0 0 0 1px ${t}33`:"none"};
  transition:
    background ${d.w4.transitions.fast},
    border-color ${d.w4.transitions.fast};
`,lx=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  text-align: right;
  color: ${({hot:e,lit:t})=>e?"#fb923c":t?d.w4.colors.mainText:d.w4.colors.mainTextFaint};
  text-shadow: ${({hot:e})=>e?"0 0 8px rgba(251, 146, 60, 0.45)":"none"};
`,ly=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 6px;
  border-top: 1px solid ${d.w4.colors.border};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,lb=l().span`
  color: ${d.w4.colors.accent};
  font-weight: 700;
`,lw=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  text-align: center;
  padding: 0 ${d.w4.spacing.sm};
`,l$=["S","M","T","W","T","F","S"],lv=["D","S","T","Q","Q","S","S"];function lk({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>tP(t,aK),[t]),[n,r]=(0,i.useState)(null),s=(0,i.useCallback)(()=>{eH().then(r)},[]);(0,i.useEffect)(()=>{s();let e=e=>{let t=e.detail;t?r(t):s()},t=()=>s();return window.addEventListener(eK,e),window.addEventListener("focus",t),()=>{window.removeEventListener(eK,e),window.removeEventListener("focus",t)}},[s]);let l=(0,i.useMemo)(()=>(function(e=new Date){let t=[];for(let o=6;o>=0;o--){let a=new Date(e);a.setDate(a.getDate()-o),t.push(a.toISOString().slice(0,10))}return t})(),[]),c=eB(),p=(0,i.useMemo)(()=>{if(!n)return new Set;let e=new Set;for(let t of Object.values(n.history))for(let o of t)e.add(o);return e},[n]),m=()=>{window.location.hash="#/daily"};if(!n||0===p.size)return(0,a.jsxs)(ll,{onClick:m,title:o("habits.open"),children:[(0,a.jsxs)(lc,{children:["\uD83C\uDFAF ",o("habits.title")]}),(0,a.jsx)(lw,{children:o("habits.empty")})]});let g=n.missions.filter(e=>p.has(e.id)).slice(0,5),u=g.reduce((e,t)=>e+l.filter(e=>eO(n,t.id,e)).length,0),h="pt"===t?lv:l$;return(0,a.jsxs)(ll,{onClick:m,title:o("habits.open"),children:[(0,a.jsxs)(lc,{children:[(0,a.jsxs)("span",{children:["\uD83C\uDFAF ",o("habits.title")]}),(0,a.jsx)("span",{children:o("habits.last7")})]}),(0,a.jsxs)(ld,{children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),l.map(e=>{let t=new Date(`${e}T00:00:00`).getDay();return(0,a.jsx)(lp,{isToday:e===c,children:h[t]},e)}),(0,a.jsx)("span",{})]}),(0,a.jsx)(lm,{children:g.map((e,o)=>{let i=function(e,t){let o=0,a=new Date;for(;;){let i=a.toISOString().slice(0,10);if(!eO(e,t.id,i)||(o+=1,a.setDate(a.getDate()-1),o>365))break}return o}(n,e),r=e.color??d.w4.colors.accent,s=eq(e,t);return(0,a.jsxs)(lg,{delay:o,children:[(0,a.jsx)(lu,{style:{color:r},children:tR(e.emoji)?(0,a.jsx)(tB,{name:e.emoji,size:14}):e.emoji}),(0,a.jsx)(lh,{children:s}),l.map(t=>(0,a.jsx)(lf,{done:eO(n,e.id,t),today:t===c,tint:r},t)),(0,a.jsx)(lx,{hot:i>=5,lit:i>0,children:i>0?i:"\xb7"})]},e.id)})}),(0,a.jsxs)(ly,{children:[(0,a.jsx)("span",{children:o("habits.weekDone",{n:u})}),(0,a.jsxs)(lb,{children:[o("habits.openShort")," →"]})]})]})}let lj="9b6f2645abf1725625c843aa71e3efd5",lz=`https://api.themoviedb.org/3/trending/all/week?api_key=${lj}&language=en-US`,lM=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,lS=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`,lT=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
`,lA=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`,lC=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast};
  animation: ${lM} 0.3s ease both;
  animation-delay: ${({delay:e})=>70*e}ms;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
  &:hover .movie-title {
    color: ${d.w4.colors.accent};
  }
`,lF=l().img`
  width: 32px;
  height: 48px;
  border-radius: 3px;
  object-fit: cover;
  flex-shrink: 0;
  background: ${d.w4.colors.border};
`,lP=l().div`
  width: 32px;
  height: 48px;
  border-radius: 3px;
  flex-shrink: 0;
  background: ${d.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`,lL=l().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  flex: 1;
`,lE=l().span`
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color ${d.w4.transitions.fast};
`,lN=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
`,lD=l().span`
  font-size: 9px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 3px;
  letter-spacing: 0.04em;
  background: ${({type:e})=>"movie"===e?"#58a6ff14":"#e233ff14"};
  color: ${({type:e})=>"movie"===e?"#58a6ff":"#e233ff"};
  border: 1px solid ${({type:e})=>"movie"===e?"#58a6ff25":"#e233ff25"};
`,lI=l().span`
  color: #d29922;
`,lR=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,lB=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,lH=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function lK({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o]=eM(),[n,r]=(0,i.useState)([]),[s,l]=(0,i.useState)(!0),[c,d]=(0,i.useState)(!1),p=(0,i.useCallback)(async()=>{if(!lj)return void l(!1);let e=await is(lz,"trending-movies",18e5);e?.results?(r((function(e,t){if("adult"===t)return e;let o=e.filter(e=>!0!==e.adult);return"teen"===t?o.filter(e=>!(e.genre_ids??[]).some(e=>eA.has(e))):o.filter(e=>(e.genre_ids??[]).includes(10751))})(e.results.filter(e=>"movie"===e.media_type||"tv"===e.media_type),o.ageMode).slice(0,5)),d(!1)):d(!0),l(!1)},[o.ageMode]);return((0,i.useEffect)(()=>{p();let e=setInterval(p,18e5);return()=>clearInterval(e)},[p]),s)?(0,a.jsx)(lS,{children:(0,a.jsx)(lR,{children:t("widget.loading")})}):lj?c||0===n.length?(0,a.jsxs)(lS,{children:[(0,a.jsxs)(lT,{children:[(0,a.jsx)("span",{children:"\uD83C\uDFAC"}),t("movies.trending.title")]}),(0,a.jsxs)(lB,{role:"alert",children:[(0,a.jsx)(lH,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]})]}):(0,a.jsxs)(lS,{children:[(0,a.jsxs)(lT,{children:[(0,a.jsx)("span",{children:"\uD83C\uDFAC"}),t("movies.trending.title")]}),(0,a.jsx)(lA,{children:n.map((e,t)=>{let o=e.title??e.name??"—",i=(e.release_date??e.first_air_date??"").slice(0,4),n=e.vote_average.toFixed(1);return(0,a.jsxs)(lC,{delay:t,onClick:()=>ef("movies",{id:e.id,type:e.media_type}),children:[e.poster_path?(0,a.jsx)(lF,{src:`https://image.tmdb.org/t/p/w185${e.poster_path}`,alt:o,loading:"lazy"}):(0,a.jsx)(lP,{children:"movie"===e.media_type?"\uD83C\uDFAC":"\uD83D\uDCFA"}),(0,a.jsxs)(lL,{children:[(0,a.jsx)(lE,{className:"movie-title",children:o}),(0,a.jsxs)(lN,{children:[(0,a.jsx)(lD,{type:e.media_type,children:"movie"===e.media_type?"MOVIE":"TV"}),i&&(0,a.jsx)("span",{children:i}),(0,a.jsxs)("span",{children:[(0,a.jsx)(lI,{children:"★"})," ",n]})]})]})]},e.id)})})]}):(0,a.jsxs)(lS,{children:[(0,a.jsxs)(lT,{children:["\uD83C\uDFAC ",t("movies.trending.title")]}),(0,a.jsx)(lR,{children:t("movies.apiKeyMissing")})]})}let lO=[{titleKey:"dailyFeed.school.math",hash:"#/school"},{titleKey:"dailyFeed.school.story",hash:"#/school"},{titleKey:"dailyFeed.school.science",hash:"#/school"},{titleKey:"dailyFeed.school.reading",hash:"#/leitor"},{titleKey:"dailyFeed.school.word",hash:"#/school"}],l_=[{titleKey:"dailyFeed.game.memory",hash:"#/memory"},{titleKey:"dailyFeed.game.spotit",hash:"#/spotit"},{titleKey:"dailyFeed.game.tictactoe",hash:"#/tictactoe"},{titleKey:"dailyFeed.game.soundhunter",hash:"#/soundhunter"},{titleKey:"dailyFeed.game.familyquiz",hash:"#/familyquiz"},{titleKey:"dailyFeed.game.adventure",hash:"#/adventure"},{titleKey:"dailyFeed.game.stop",hash:"#/stopgame"}];function lq(){let e=new Date;return 1e4*e.getFullYear()+(e.getMonth()+1)*100+e.getDate()}function lY(e,t){return e[(lq()+t)%e.length]}let lG=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,lW=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 100%;
  animation: ${lG} 0.3s ease both;
`,lJ=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
  gap: 6px;
`,lU=l().span`
  color: ${d.w4.colors.accent};
  letter-spacing: 0.02em;
`,lV=l().button`
  display: grid;
  grid-template-columns: 22px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 8px 8px;
  background: transparent;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  text-align: left;
  font-family: ${d.w4.typography.fontFamily};
  color: inherit;
  transition: background ${d.w4.transitions.fast};
  animation: ${lG} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }

  &:hover .row-arrow {
    opacity: 1;
    transform: translateX(2px);
  }
`,lQ=l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: ${({tint:e})=>e};
`,lZ=l().span`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,lX=l().span`
  font-size: 12px;
  font-weight: 500;
  color: ${d.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,l0=l().span`
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-top: 1px;
`,l1=l().span`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
  transition: opacity ${d.w4.transitions.fast}, transform ${d.w4.transitions.fast};
`,l4=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,l2=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,l5=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function l3(e){window.location.hash=e}function l6(e){window.open(e,"_blank","noopener,noreferrer")}function l8({locale:e}){let[t]=eM(),o=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[n,r]=(0,i.useState)(null),[s,l]=(0,i.useState)(null),[c,d]=(0,i.useState)(null),[p,m]=(0,i.useState)(null),[g,u]=(0,i.useState)("pending"),[h,f]=(0,i.useState)("pending"),[x,y]=(0,i.useState)("pending"),[b,w]=(0,i.useState)("pending"),$=(0,i.useCallback)(async()=>{let t="9b6f2645abf1725625c843aa71e3efd5",[o,a,i,n]=await Promise.all([is("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=4","techscope-hn"),t?is(`https://api.themoviedb.org/3/trending/all/week?api_key=${t}&language=en-US`,"trending-movies"):Promise.resolve(null),is(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${String(new Date().getMonth()+1).padStart(2,"0")}/${String(new Date().getDate()).padStart(2,"0")}`,`onthisday-${new Date().toISOString().slice(0,10)}`),is("pt"===e?"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.rtp.pt%2Fnoticias%2Frss":"https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss","pt"===e?"news-portugal":"news-world")]);o&&r(o),a&&l(a),i&&d(i),n&&m(n),u(o?"ok":"failed"),f(t?a?"ok":"failed":"skipped"),y(i?"ok":"failed"),w(n?"ok":"failed")},[e]);(0,i.useEffect)(()=>{$();let e=setInterval($,3e5);return()=>clearInterval(e)},[$]);let v=[],k=n?.hits?.slice().sort((e,t)=>(t.points??0)-(e.points??0))[0];k&&v.push({key:"tech",interest:"tech",icon:"satellite",tint:"#a371f7",title:k.title,subtitle:o("dailyFeed.sub.tech"),onClick:()=>l6(k.url??`https://news.ycombinator.com/item?id=${k.objectID}`)});let j=s?.results?.find(e=>"movie"===e.media_type||"tv"===e.media_type);if(j){let e=j.title??j.name??"";v.push({key:"movie",interest:"movies",icon:"film",tint:"#e50914",title:e,subtitle:`${o("dailyFeed.sub.movie")} \xb7 ★ ${j.vote_average.toFixed(1)}`,onClick:()=>ef("movies",{id:j.id,type:j.media_type})})}if(c?.events?.length){let e=c.events[lq()%c.events.length],t=e.pages?.[0]?.content_urls?.desktop?.page;v.push({key:"history",interest:"learning",icon:"calendar",tint:"#d29922",title:e.text,subtitle:`${o("dailyFeed.sub.history")} \xb7 ${e.year}`,onClick:()=>t?l6(t):void 0})}let z=p?.items?.[0];z&&v.push({key:"news",interest:"news",icon:"globe",tint:"#cc0000",title:z.title,subtitle:o("pt"===e?"dailyFeed.sub.news.pt":"dailyFeed.sub.news.en"),onClick:()=>l6(z.link)});let M=lY(lO,1);v.push({key:"school",interest:"learning",icon:"graduation",tint:"#f78166",title:o(M.titleKey),subtitle:o("dailyFeed.sub.school"),onClick:()=>l3(M.hash)});let S=lY(l_,7);v.push({key:"game",interest:"games",icon:"gamepad",tint:"#f97583",title:o(S.titleKey),subtitle:o("dailyFeed.sub.game"),onClick:()=>l3(S.hash)});let T=eS(t)?v.filter(e=>{var o;return!!t.interests.includes(e.interest)&&(o=`${e.title} ${e.subtitle}`,Object.keys(eT).filter(e=>eT[e].test(o))).every(e=>t.interests.includes(e))}):v,A=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{day:"numeric",month:"long"});if(0===T.length){let e=[g,h,x,b],t=e.some(e=>"pending"===e),i=e.some(e=>"ok"===e);return t||i?(0,a.jsx)(lW,{children:(0,a.jsx)(l4,{children:o("widget.loading")})}):(0,a.jsx)(lW,{children:(0,a.jsxs)(l2,{role:"alert",children:[(0,a.jsx)(l5,{children:o("widget.error.label")}),(0,a.jsx)("div",{children:o("widget.error.body")})]})})}return(0,a.jsxs)(lW,{children:[(0,a.jsxs)(lJ,{children:[o("dailyFeed.title"),(0,a.jsx)(lU,{children:A})]}),T.map((e,t)=>(0,a.jsxs)(lV,{delay:t,onClick:e.onClick,children:[(0,a.jsx)(lQ,{tint:e.tint,children:(0,a.jsx)(tB,{name:e.icon,size:15,"aria-hidden":"true"})}),(0,a.jsxs)(lZ,{children:[(0,a.jsx)(lX,{children:e.title}),(0,a.jsx)(l0,{children:e.subtitle})]}),(0,a.jsx)(l1,{className:"row-arrow",children:"→"})]},e.key))]})}let l7=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,l9=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: ${l7} 0.3s ease both;
`,ce=l().button`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  column-gap: ${d.w4.spacing.sm};
  row-gap: 2px;
  align-items: start;
  width: 100%;
  background: transparent;
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.sm};
  cursor: pointer;
  text-align: left;
  transition: background ${d.w4.transitions.base};
  font: inherit;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: -1px;
  }
`,ct=l().span`
  grid-column: 1;
  grid-row: 1;
  font-size: 13.5px;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,co=l().span`
  grid-column: 2;
  grid-row: 1;
  font-size: 10.5px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  white-space: nowrap;
  flex-shrink: 0;
`,ca=l().span`
  grid-column: 1 / -1;
  grid-row: 2;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainTextMuted};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.45;
`,ci=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${d.w4.spacing.sm};
  padding: ${d.w4.spacing.lg} 0;
  text-align: center;
  flex: 1;
  animation: ${l7} 0.3s ease both;
`,cn=l().p`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 240px;
  margin: 0;
`;function cr({locale:e}){let t=(0,i.useMemo)(()=>tP("pt"===e?"pt":"en",aK),[e]),[o,n]=(0,i.useState)([]),[r,s]=(0,i.useState)(!1),l=(0,i.useCallback)(async()=>{n((await et.listDocs("ask")).map(e=>(function(e,t){let o,a=[];try{let t=JSON.parse(e.content);Array.isArray(t.turns)&&(a=t.turns)}catch{return null}if(0===a.length)return null;let i=a.find(e=>"user"===e.role),n=[...a].reverse().find(e=>"assistant"===e.role),r=e.name?.trim()||i?.content?.slice(0,50)||t("ask.widget.untitled");o=n?n.content.replace(/```[\s\S]*?```/g,"").replace(/`[^`]*`/g,"").replace(/#{1,6}\s+/g,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^>\s+/gm,"").replace(/^[-*+]\s+/gm,"").replace(/^\d+\.\s+/gm,"").replace(/^-{3,}$/gm,"").replace(/\s+/g," ").trim().slice(0,80):i?`> ${i.content.slice(0,77)}`:"";let s=tL(new Date(e.savedAt).toISOString(),t);return{doc:e,title:r,preview:o,age:s}})(e,t)).filter(e=>null!==e).slice(0,3)),s(!0)},[t]);return((0,i.useEffect)(()=>{l()},[l]),(0,i.useEffect)(()=>{let e=()=>{"visible"===document.visibilityState&&l()};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[l]),r)?(0,a.jsx)(oL,{title:t("ask.widget.title"),accentColor:d.w4.suites.lab,children:0===o.length?(0,a.jsxs)(ci,{children:[(0,a.jsx)(cn,{children:t("ask.widget.empty")}),(0,a.jsx)(e5,{variant:"ghost",icon:(0,a.jsx)(tB,{name:"sparkle",size:13}),onClick:()=>{window.dispatchEvent(new CustomEvent("atlantis:open-palette",{detail:{scope:"ask"}}))},children:t("ask.widget.emptyCta")})]}):(0,a.jsx)(l9,{children:o.map(({doc:e,title:t,preview:o,age:i})=>(0,a.jsxs)(ce,{onClick:()=>ef("ask",{session:String(e.id)}),title:t,children:[(0,a.jsx)(ct,{children:t}),(0,a.jsx)(co,{children:i}),o&&(0,a.jsx)(ca,{children:o})]},e.id))})}):null}let cs="agenda:events",cl={personal:d.w4.suites.ent,team:d.w4.suites.lab,work:d.w4.suites.learn},cc=["personal","team","work"];function cd(e){let[t,o]=e.split(":").map(e=>parseInt(e,10));return(Number.isFinite(t)?t:0)*60+(Number.isFinite(o)?o:0)}function cp(){let e=new Date;return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}let cm=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,cg=(0,c.keyframes)`
  0%, 100% { box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.24); }
  50%      { box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.10); }
`,cu=l().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
  height: 100%;
  animation: ${cm} 0.3s ease both;
`,ch=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
  margin-bottom: 2px;
`,cf=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,cx=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,cy=l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  border: 1px solid ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,cb=l().div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  padding-right: 2px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${d.w4.colors.border};
    border-radius: 2px;
  }
`,cw=l().div`
  position: absolute;
  left: 50px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  background: ${d.w4.colors.borderSubtle};
`,c$=l().div`
  display: grid;
  grid-template-columns: 44px 1fr 18px;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 12px;
  opacity: ${({past:e})=>e?.45:1};
  animation: ${cm} 0.3s ease both;
  animation-delay: ${({delay:e})=>35*e}ms;

  &:hover .delete-btn { opacity: 1; }

  &:last-child { margin-bottom: 0; }
`,cv=l().button`
  background: none;
  border: none;
  padding: 2px 0 0;
  text-align: right;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  cursor: pointer;
  color: ${({active:e,past:t})=>e?d.w4.colors.accent:t?d.w4.colors.mainTextFaint:d.w4.colors.mainTextMuted};
  text-decoration: ${({past:e})=>e?"line-through":"none"};

  &:focus-visible { ${d.w4.focusRing} }
`,ck=l().button`
  background: none;
  border: none;
  padding: 0 0 0 14px;
  text-align: left;
  position: relative;
  cursor: pointer;
  color: inherit;
  font: inherit;

  &:focus-visible { ${d.w4.focusRing} }

  .title {
    font-size: 13px;
    font-weight: 500;
    color: ${d.w4.colors.mainText};
    margin-bottom: 2px;
    line-height: 1.3;
    text-decoration: ${({done:e})=>e?"line-through":"none"};
  }
  .meta {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`,cj=l().span`
  position: absolute;
  left: -2px;
  top: 6px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  ${({active:e})=>e?`animation: ${cg} 2.2s ease-in-out infinite;`:""}
`,cz=l().button`
  background: none;
  border: none;
  padding: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextFaint};
  cursor: pointer;
  border-radius: ${d.w4.borderRadius.sm};
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};
  @media (hover: none) { opacity: 0.55; }

  &:hover { color: ${d.w4.colors.danger}; }
  &:focus-visible { ${d.w4.focusRing}; opacity: 1; }
`,cM=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${d.w4.spacing.md};
  text-align: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12px;
`,cS=l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${d.w4.colors.accentMuted};
  border: 1px solid ${d.w4.colors.accent};
  border-radius: 999px;
  color: ${d.w4.colors.accent};
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform ${d.w4.transitions.fast};

  &:hover { transform: translateY(-1px); }
  &:focus-visible { ${d.w4.focusRing} }
`,cT=l().form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  margin-bottom: 8px;
  animation: ${cm} 0.18s ease both;
`,cA=l().div`
  display: grid;
  grid-template-columns: 64px 1fr 64px;
  gap: 6px;
`,cC=l().input`
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  padding: 6px 8px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  min-width: 0;

  &::placeholder { color: ${d.w4.colors.mainTextFaint}; }
  &:focus { outline: none; border-color: ${d.w4.colors.accent}; }
`,cF=l().div`
  display: flex;
  gap: 6px;
`,cP=l().button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 4px 6px;
  background: ${({color:e,selected:t})=>t?`${e}22`:"transparent"};
  border: 1px solid ${({color:e,selected:t})=>t?e:d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({color:e,selected:t})=>t?e:d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({color:e})=>e};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,cL=l().div`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
`,cE=l().button`
  padding: 5px 10px;
  border-radius: ${d.w4.borderRadius.sm};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${({primary:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  background: ${({primary:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({primary:e})=>e?"#fff":d.w4.colors.mainText};

  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${d.w4.focusRing} }
`;function cN({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>tP(t,aK),[t]),[n,r]=(0,i.useState)({}),[s,l]=(0,i.useState)(!1),[c,p]=(0,i.useState)(!1),[m,g]=(0,i.useState)(""),[u,h]=(0,i.useState)(()=>cp()),[f,x]=(0,i.useState)(""),[y,b]=(0,i.useState)("personal"),[w,$]=(0,i.useState)(()=>{let e=new Date;return 60*e.getHours()+e.getMinutes()}),v=eB(),k=(0,i.useMemo)(()=>[...n[v]??[]].sort((e,t)=>cd(e.time)-cd(t.time)),[n,v]);(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await ea(cs);if(!e){if(t)try{r(JSON.parse(t))}catch{}l(!0)}})(),()=>{e=!0}},[]),(0,i.useEffect)(()=>{let e=setInterval(()=>{let e=new Date;$(60*e.getHours()+e.getMinutes())},6e4);return()=>clearInterval(e)},[]);let j=(0,i.useCallback)(e=>{r(e),eo(cs,JSON.stringify(e))},[]),z=(0,i.useCallback)(()=>{let e=m.trim();if(!e||!/^\d{2}:\d{2}$/.test(u))return;let t=/^\d{2}:\d{2}$/.test(f)?f:void 0,o={id:`e-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,title:e,time:u,end:t,tag:y};j({...n,[v]:[...n[v]??[],o]}),g(""),x(""),b("personal"),h(cp()),p(!1)},[m,u,f,y,n,v,j]),M=(0,i.useCallback)(e=>{let t=n[v]??[];j({...n,[v]:t.map(t=>t.id===e?{...t,done:!t.done}:t)})},[n,v,j]),S=(0,i.useCallback)(e=>{let t=n[v]??[],o={...n,[v]:t.filter(t=>t.id!==e)};0===o[v].length&&delete o[v],j(o)},[n,v,j]);if(!s)return null;let T=m.trim().length>0&&/^\d{2}:\d{2}$/.test(u),A=1===k.length?o("agenda.countOne"):o("agenda.count",{n:k.length});return(0,a.jsxs)(cu,{children:[(0,a.jsxs)(ch,{children:[(0,a.jsx)(cf,{children:o("agenda.title")}),(0,a.jsxs)(cx,{children:[k.length>0&&(0,a.jsx)("span",{children:A}),(0,a.jsx)(cy,{type:"button",active:c,onClick:()=>p(e=>!e),"aria-label":o("agenda.addEvent"),title:o("agenda.addEvent"),children:(0,a.jsx)(tB,{name:"plus",size:12})})]})]}),c&&(0,a.jsxs)(cT,{onSubmit:e=>{e.preventDefault(),z()},children:[(0,a.jsxs)(cA,{children:[(0,a.jsx)(cC,{type:"time",value:u,onChange:e=>h(e.target.value),"aria-label":o("agenda.timeStart")}),(0,a.jsx)(cC,{type:"text",value:m,onChange:e=>g(e.target.value),placeholder:o("agenda.titlePlaceholder"),autoFocus:!0}),(0,a.jsx)(cC,{type:"time",value:f,onChange:e=>x(e.target.value),placeholder:o("agenda.timeEnd"),"aria-label":o("agenda.timeEnd")})]}),(0,a.jsx)(cF,{children:cc.map(e=>(0,a.jsx)(cP,{type:"button",color:cl[e],selected:y===e,onClick:()=>b(e),children:o(`agenda.tag.${e}`)},e))}),(0,a.jsxs)(cL,{children:[(0,a.jsx)(cE,{type:"button",onClick:()=>p(!1),children:o("agenda.cancel")}),(0,a.jsx)(cE,{type:"submit",primary:!0,disabled:!T,children:o("agenda.save")})]})]}),0===k.length?(0,a.jsxs)(cM,{children:[(0,a.jsx)("div",{children:o("agenda.empty")}),!c&&(0,a.jsxs)(cS,{type:"button",onClick:()=>p(!0),children:[(0,a.jsx)(tB,{name:"plus",size:12}),o("agenda.emptyCta")]})]}):(0,a.jsxs)(cb,{children:[(0,a.jsx)(cw,{}),k.map((e,t)=>{let i=cd(e.time),n=e.end?cd(e.end):i+30,r=n<w&&!e.done||!!e.done,s=!e.done&&i<=w&&w<n,l=e.done?d.w4.colors.mainTextFaint:cl[e.tag];return(0,a.jsxs)(c$,{delay:t,past:r,children:[(0,a.jsx)(cv,{type:"button",active:s,past:r,onClick:()=>M(e.id),"aria-label":o("agenda.toggleDone"),children:s?o("agenda.now"):e.time}),(0,a.jsxs)(ck,{type:"button",done:!!e.done,onClick:()=>M(e.id),children:[(0,a.jsx)(cj,{color:l,active:s}),(0,a.jsx)("div",{className:"title",children:e.title}),(0,a.jsxs)("div",{className:"meta",style:{color:cl[e.tag]},children:[o(`agenda.tag.${e.tag}`),e.end?` \xb7 ${e.time}–${e.end}`:` \xb7 ${e.time}`]})]}),(0,a.jsx)(cz,{className:"delete-btn",type:"button",onClick:()=>S(e.id),"aria-label":o("agenda.delete"),title:o("agenda.delete"),children:(0,a.jsx)(tB,{name:"close",size:12})})]},e.id)})]})]})}let cD="reading:state",cI={current:null,finished:[],goal:24},cR=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,cB=l().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
  height: 100%;
  animation: ${cR} 0.3s ease both;
`,cH=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
  margin-bottom: 2px;
`,cK=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,cO=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,c_=l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,cq=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
`,cY=l().div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 14px;
  align-items: stretch;
`,cG=l().div`
  width: 64px;
  height: 94px;
  background:
    repeating-linear-gradient(135deg,
      rgba(255, 255, 255, 0.04) 0 6px,
      rgba(255, 255, 255, 0.02) 6px 12px),
    ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.1em;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,cW=l().div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`,cJ=l().div`
  font-family: ${d.w4.typography.fontFamilySerif??"'Cormorant Garamond', 'Iowan Old Style', Georgia, serif"};
  font-size: 20px;
  line-height: 1.1;
  font-weight: 500;
  color: ${d.w4.colors.mainText};
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,cU=l().div`
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,cV=l().div`
  margin-top: 8px;
`,cQ=l().div`
  display: flex;
  justify-content: space-between;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  margin-bottom: 6px;
`,cZ=l().span`
  color: ${d.w4.colors.accent};
`,cX=l().div`
  height: 3px;
  background: ${d.w4.colors.borderSubtle};
  border-radius: 2px;
  overflow: hidden;
`,c0=l().div`
  width: ${({pct:e})=>e}%;
  height: 100%;
  background: ${d.w4.colors.accent};
  transition: width 0.4s ease;
`,c1=l().div``,c4=l().div`
  display: flex;
  justify-content: space-between;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,c2=l().div`
  display: grid;
  grid-template-columns: ${({goal:e})=>`repeat(${e}, 1fr)`};
  gap: 2px;
`,c5=l().div`
  height: 8px;
  background: ${({filled:e})=>e?d.w4.colors.accent:d.w4.colors.borderSubtle};
  border-radius: 1px;
`,c3=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 10px;
  border-top: 1px solid ${d.w4.colors.borderSubtle};
`,c6=l().div``,c8=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
`,c7=l().div`
  font-family: ${d.w4.typography.fontFamilySerif??"'Cormorant Garamond', 'Iowan Old Style', Georgia, serif"};
  font-size: 22px;
  line-height: 1;
  color: ${d.w4.colors.mainText};
`,c9=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextFaint};
  margin-left: 5px;
  letter-spacing: 0.04em;
`,de=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${d.w4.spacing.md};
  text-align: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12px;
`,dt=l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${d.w4.colors.accentMuted};
  border: 1px solid ${d.w4.colors.accent};
  border-radius: 999px;
  color: ${d.w4.colors.accent};
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform ${d.w4.transitions.fast};

  &:hover { transform: translateY(-1px); }
  &:focus-visible { ${d.w4.focusRing} }
`,da=l().form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  margin-bottom: 4px;
  animation: ${cR} 0.18s ease both;
`,di=l().input`
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  padding: 6px 8px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  min-width: 0;

  &::placeholder { color: ${d.w4.colors.mainTextFaint}; }
  &:focus { outline: none; border-color: ${d.w4.colors.accent}; }
`,dn=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
`,dr=l().div`
  display: flex;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
`,ds=l().button`
  padding: 5px 10px;
  border-radius: ${d.w4.borderRadius.sm};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${d.w4.colors.border};
  background: transparent;
  color: ${d.w4.colors.mainTextMuted};

  &:hover { color: ${d.w4.colors.mainText}; }
  &:focus-visible { ${d.w4.focusRing} }
`,dl=l().button`
  padding: 5px 10px;
  border-radius: ${d.w4.borderRadius.sm};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid
    ${({primary:e,danger:t})=>t?d.w4.colors.danger:e?d.w4.colors.accent:d.w4.colors.border};
  background: ${({primary:e,danger:t})=>t?"transparent":e?d.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:t})=>t?d.w4.colors.danger:e?"#fff":d.w4.colors.mainText};

  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${d.w4.focusRing} }
`;function dc({url:e,fallback:t,alt:o}){let[n,r]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{r(!1)},[e]),!e||n)?(0,a.jsx)(cG,{children:t}):(0,a.jsx)(cG,{children:(0,a.jsx)("img",{src:e,alt:o,loading:"lazy",onError:()=>r(!0)})})}function dd({locale:e}){let t,o="pt"===e?"pt":"en",n=(0,i.useMemo)(()=>tP(o,aK),[o]),[r,s]=(0,i.useState)(cI),[l,c]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!1),[m,g]=(0,i.useState)(""),[u,h]=(0,i.useState)(""),[f,x]=(0,i.useState)(""),[y,b]=(0,i.useState)(""),[w,$]=(0,i.useState)(String(24));(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await ea(cD);if(!e){if(t)try{let e=JSON.parse(t);s({current:e.current??null,finished:Array.isArray(e.finished)?e.finished:[],goal:"number"==typeof e.goal&&e.goal>0?e.goal:24})}catch{}c(!0)}})(),()=>{e=!0}},[]);let v=(0,i.useCallback)(e=>{s(e),eo(cD,JSON.stringify(e))},[]),k=(0,i.useCallback)(()=>{r.current?(g(r.current.title),h(r.current.author),x(String(r.current.page)),b(String(r.current.pages))):(g(""),h(""),x(""),b("")),$(String(r.goal)),p(!0)},[r]),j=(0,i.useCallback)(()=>{let e=m.trim(),t=u.trim(),o=parseInt(y,10),a=parseInt(f,10),i=parseInt(w,10)||24;if(!e||!t||!Number.isFinite(o)||o<=0)return;let n=Number.isFinite(a)?Math.max(0,Math.min(o,a)):0,s=!!r.current&&r.current.title===e&&r.current.author===t,l=s?r.current.startedAt:Date.now(),c=s?r.current.coverUrl:void 0;v({...r,current:{title:e,author:t,page:n,pages:o,startedAt:l,coverUrl:c},goal:i}),p(!1)},[m,u,f,y,w,r,v]);(0,i.useEffect)(()=>{if(!l)return;let e=r.current;if(!e||void 0!==e.coverUrl)return;let{title:t,author:o}=e,a=!1;return(async()=>{let e=`reading-cover:${t.toLowerCase().slice(0,60)}:${o.toLowerCase().slice(0,40)}`,i=`title=${encodeURIComponent(t)}&author=${encodeURIComponent(o)}&limit=1`,n=await is(`https://openlibrary.org/search.json?${i}`,e,2592e6);if(a)return;let r=n?.docs?.[0]?.cover_i,l=r?`https://covers.openlibrary.org/b/id/${r}-M.jpg`:null;s(e=>{if(!e.current||e.current.title!==t||e.current.author!==o)return e;let a={...e,current:{...e.current,coverUrl:l}};return eo(cD,JSON.stringify(a)),a})})(),()=>{a=!0}},[l,r.current?.title,r.current?.author,r.current?.coverUrl]);let z=(0,i.useCallback)(()=>{if(!r.current)return;let e={title:r.current.title,author:r.current.author,pages:r.current.pages,finishedAt:Date.now()};v({...r,current:null,finished:[e,...r.finished]}),p(!1)},[r,v]);if(!l)return null;let{current:M,finished:S,goal:T}=r,A=(t=new Date().getFullYear(),S.filter(e=>new Date(e.finishedAt).getFullYear()===t).length),C=M?Math.max(0,Math.min(100,Math.round(M.page/M.pages*100))):0,F=m.trim().length>0&&u.trim().length>0&&/^\d+$/.test(y.trim())&&parseInt(y,10)>0;return(0,a.jsxs)(cB,{children:[(0,a.jsxs)(cH,{children:[(0,a.jsx)(cK,{children:n("reading.title")}),(0,a.jsxs)(cO,{children:[(0,a.jsx)("span",{children:n("reading.yearProgress",{read:A,goal:T})}),(0,a.jsx)(c_,{type:"button",onClick:k,"aria-label":n(M?"reading.updateBook":"reading.addBook"),title:n(M?"reading.updateBook":"reading.addBook"),children:(0,a.jsx)(tB,{name:M?"settings":"plus",size:12})})]})]}),d&&(0,a.jsxs)(da,{onSubmit:e=>{e.preventDefault(),j()},children:[(0,a.jsx)(di,{type:"text",value:m,onChange:e=>g(e.target.value),placeholder:n("reading.placeholder.title"),autoFocus:!0}),(0,a.jsx)(di,{type:"text",value:u,onChange:e=>h(e.target.value),placeholder:n("reading.placeholder.author")}),(0,a.jsxs)(dn,{children:[(0,a.jsx)(di,{type:"number",value:f,onChange:e=>x(e.target.value),placeholder:n("reading.placeholder.page"),min:0}),(0,a.jsx)(di,{type:"number",value:y,onChange:e=>b(e.target.value),placeholder:n("reading.placeholder.pages"),min:1}),(0,a.jsx)(di,{type:"number",value:w,onChange:e=>$(e.target.value),placeholder:n("reading.placeholder.goal"),min:1,"aria-label":n("reading.goal")})]}),(0,a.jsxs)(dr,{children:[M?(0,a.jsx)(dl,{type:"button",danger:!0,onClick:z,children:n("reading.finish")}):(0,a.jsx)("span",{}),(0,a.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,a.jsx)(ds,{type:"button",onClick:()=>p(!1),children:n("reading.cancel")}),(0,a.jsx)(dl,{type:"submit",primary:!0,disabled:!F,children:n("reading.save")})]})]})]}),M?(0,a.jsxs)(cq,{children:[(0,a.jsxs)(cY,{children:[(0,a.jsx)(dc,{url:M.coverUrl,fallback:n("reading.placeholder.cover"),alt:M.title}),(0,a.jsxs)(cW,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(cJ,{children:M.title}),(0,a.jsx)(cU,{children:M.author})]}),(0,a.jsxs)(cV,{children:[(0,a.jsxs)(cQ,{children:[(0,a.jsxs)("span",{children:[n("reading.page")," ",M.page," / ",M.pages]}),(0,a.jsxs)(cZ,{children:[C,"%"]})]}),(0,a.jsx)(cX,{children:(0,a.jsx)(c0,{pct:C})})]})]})]}),(0,a.jsxs)(c1,{children:[(0,a.jsxs)(c4,{children:[(0,a.jsx)("span",{children:n("reading.yearGoal")}),(0,a.jsxs)("span",{children:[A,"/",T," ",n("reading.books")]})]}),(0,a.jsx)(c2,{goal:T,children:Array.from({length:T}).map((e,t)=>(0,a.jsx)(c5,{filled:t<A},t))})]}),(0,a.jsxs)(c3,{children:[(0,a.jsxs)(c6,{children:[(0,a.jsx)(c8,{children:n("reading.stat.week")}),(0,a.jsxs)(c7,{children:[function(e){if(!e)return 0;let t=e.startedAt,o=Math.max(1,Math.ceil((Date.now()-t)/864e5));return Math.round(Math.min(e.page,e.pages)/o*7)}(M),(0,a.jsx)(c9,{children:n("reading.unit.pages")})]})]}),(0,a.jsxs)(c6,{children:[(0,a.jsx)(c8,{children:n("reading.stat.pace")}),(0,a.jsxs)(c7,{children:[function(e){if(!e)return 0;let t=Math.max(1,Math.ceil((Date.now()-e.startedAt)/864e5));return Math.round(e.page/t)}(M),(0,a.jsx)(c9,{children:n("reading.unit.perDay")})]})]}),(0,a.jsxs)(c6,{children:[(0,a.jsx)(c8,{children:n("reading.stat.finished")}),(0,a.jsxs)(c7,{children:[S.length,(0,a.jsx)(c9,{children:n("reading.unit.total")})]})]})]})]}):(0,a.jsxs)(de,{children:[(0,a.jsx)("div",{children:n("reading.empty")}),!d&&(0,a.jsxs)(dt,{type:"button",onClick:k,children:[(0,a.jsx)(tB,{name:"plus",size:12}),n("reading.addBook")]})]})]})}let dp=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,dm=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  animation: ${dp} 0.3s ease both;
`,dg=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
  margin-bottom: 4px;
`,du=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,dh=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,df=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,dx=l().div`
  display: grid;
  grid-template-columns: 60px 1fr 80px minmax(90px, auto) 70px;
  gap: 10px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  animation: ${dp} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;

  &:last-child { border-bottom: none; }
`,dy=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  letter-spacing: 0.04em;
`,db=l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dw=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,d$=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({up:e})=>e?"#7fb77e":d.w4.colors.danger};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,dv=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12px;
`,dk=l().svg`
  display: block;
`;function dj({data:e,color:t,width:o=70,height:i=22}){if(!e||e.length<2)return(0,a.jsx)(dk,{width:o,height:i});let n=Math.min(...e),r=Math.max(...e)-n||1,s=e.map((t,a)=>{let s=a/(e.length-1)*o,l=i-(t-n)/r*(i-2)-1;return`${s.toFixed(1)},${l.toFixed(1)}`}).join(" ");return(0,a.jsx)(dk,{width:o,height:i,children:(0,a.jsx)("polyline",{points:s,fill:"none",stroke:t,strokeWidth:"1.25",strokeLinejoin:"round",strokeLinecap:"round"})})}function dz({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>tP(t,aK),[t]),[n,r]=(0,i.useState)(null),[s,l]=(0,i.useState)(!1),[c,p]=(0,i.useState)(null),m=(0,i.useCallback)(async()=>{let e=await is("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,binancecoin,cardano,dogecoin&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h","bolsa-markets");e?(r(e),p(Date.now()),l(!1)):l(!0)},[]);(0,i.useEffect)(()=>{m();let e=setInterval(m,3e5);return()=>clearInterval(e)},[m]);let g=(0,i.useMemo)(()=>{if(!c)return"";let e=Math.round((Date.now()-c)/6e4);return e<1?o("time.justNow"):o("time.mAgo",{n:e})},[c,o]);return!n&&s?(0,a.jsxs)(dm,{children:[(0,a.jsx)(dg,{children:(0,a.jsx)(du,{children:o("bolsa.title")})}),(0,a.jsx)(dv,{children:o("bolsa.error")})]}):n?(0,a.jsxs)(dm,{children:[(0,a.jsxs)(dg,{children:[(0,a.jsx)(du,{children:o("bolsa.title")}),(0,a.jsx)(dh,{children:g&&o("bolsa.updated",{age:g})})]}),(0,a.jsx)(df,{children:n.map((e,t)=>{var o;let i=e.price_change_percentage_24h>=0,n=i?"#7fb77e":d.w4.colors.danger,r=e.sparkline_in_7d?.price??[];return(0,a.jsxs)(dx,{delay:t,children:[(0,a.jsx)(dy,{children:e.symbol.toUpperCase()}),(0,a.jsx)(db,{children:e.name}),(0,a.jsx)(dj,{data:r,color:n}),(0,a.jsxs)(dw,{children:["$",(o=e.current_price)>=1e3?o.toLocaleString("en-US",{maximumFractionDigits:0}):o>=1?o.toFixed(2):o.toFixed(4)]}),(0,a.jsxs)(d$,{up:i,children:[i?"↗":"↘"," ",Math.abs(e.price_change_percentage_24h).toFixed(2),"%"]})]},e.id)})})]}):(0,a.jsxs)(dm,{children:[(0,a.jsx)(dg,{children:(0,a.jsx)(du,{children:o("bolsa.title")})}),(0,a.jsx)(dv,{children:o("bolsa.empty")})]})}function dM(e){if(!e)return"—";let t=new Date(e);return Number.isNaN(t.getTime())?"—":`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function dS({phase:e,size:t=78}){let o=t/2-2,i=t/2,n=t/2,r=e<.5,s=o*(1-(r?2*e:(1-e)*2));return(0,a.jsxs)("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("radialGradient",{id:"atl-moon-glow",cx:"50%",cy:"45%",r:"60%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#f2ecd8"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#c9c1a8"})]}),(0,a.jsxs)("mask",{id:"atl-moon-mask",children:[(0,a.jsx)("rect",{width:t,height:t,fill:"black"}),(0,a.jsx)("circle",{cx:i,cy:n,r:o,fill:"white"}),(0,a.jsx)("ellipse",{cx:i,cy:n,rx:s,ry:o,fill:"black"}),(0,a.jsx)("rect",{x:r?0:i,y:0,width:i,height:t,fill:"black"})]})]}),(0,a.jsx)("circle",{cx:i,cy:n,r:o,fill:"#1f2233",stroke:d.w4.colors.borderSubtle}),(0,a.jsx)("circle",{cx:i,cy:n,r:o,fill:"url(#atl-moon-glow)",mask:"url(#atl-moon-mask)",opacity:"0.95"}),(0,a.jsx)("circle",{cx:i-8,cy:n-6,r:"3",fill:"#b8b099",opacity:"0.25",mask:"url(#atl-moon-mask)"}),(0,a.jsx)("circle",{cx:i+6,cy:n+10,r:"4",fill:"#b8b099",opacity:"0.22",mask:"url(#atl-moon-mask)"}),(0,a.jsx)("circle",{cx:i-3,cy:n+14,r:"2",fill:"#b8b099",opacity:"0.25",mask:"url(#atl-moon-mask)"})]})}let dT=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,dA=l().div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
  animation: ${dT} 0.3s ease both;
`,dC=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
`,dF=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,dP=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,dL=l().div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 18px;
  align-items: center;
`,dE=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,dN=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
`,dD=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,dI=l().div`
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: 18px;
  line-height: 1.15;
  color: ${d.w4.colors.mainText};
  margin-bottom: 10px;
`,dR=l().div`
  position: relative;
  height: 44px;
`,dB=l().div`
  display: flex;
  justify-content: space-between;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
`,dH=l().span`
  color: ${d.w4.colors.mainTextFaint};
`,dK=l().div`
  border-top: 1px solid ${d.w4.colors.borderSubtle};
  padding-top: 10px;
`,dO=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;l().div`
  display: grid;
  grid-template-columns: 1fr 60px 50px;
  gap: 10px;
  padding: 4px 0;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainText};
`,l().span`
  color: ${({first:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
`,l().span`
  color: ${d.w4.colors.mainTextMuted};
  text-align: right;
`;let d_=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextFaint};
`;function dq({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>tP(t,aK),[t]),[n,r]=(0,i.useState)(null),s=(0,i.useCallback)(async()=>{let e=new Date().toISOString().slice(0,10),t=`astro-sun-${e}`,o=`https://api.sunrise-sunset.org/json?lat=38.72&lng=-9.14&formatted=0&date=${e}`,a=await is(o,t);a?.results&&r({sunriseUtc:a.results.sunrise,sunsetUtc:a.results.sunset,dayLengthSec:a.results.day_length})},[]);(0,i.useEffect)(()=>{s()},[s]);let l=function(e=new Date){let t=Date.UTC(2e3,0,6,18,14)/1e3,o=(e.getTime()/1e3-t)/86400/29.530588853%1;return o<0?o+1:o}(new Date),c=Math.round((1-Math.cos(2*l*Math.PI))*50),p=l<.03||l>.97?"astro.phase.new":l<.22?"astro.phase.waxingCrescent":l<.28?"astro.phase.firstQuarter":l<.47?"astro.phase.waxingGibbous":l<.53?"astro.phase.full":l<.72?"astro.phase.waningGibbous":l<.78?"astro.phase.lastQuarter":"astro.phase.waningCrescent",m=function(e,t){if(!e||!t)return 0;let o=Date.now(),a=new Date(e).getTime(),i=new Date(t).getTime();return o<=a?0:o>=i?1:(o-a)/(i-a)}(n?.sunriseUtc??null,n?.sunsetUtc??null),g=46-42*Math.sin(m*Math.PI),u=n?Math.floor(n.dayLengthSec/3600):0,h=n?Math.floor(n.dayLengthSec%3600/60):0;return(0,a.jsxs)(dA,{children:[(0,a.jsxs)(dC,{children:[(0,a.jsx)(dF,{children:o("astro.title")}),(0,a.jsx)(dP,{children:o("astro.location")})]}),(0,a.jsxs)(dL,{children:[(0,a.jsxs)(dE,{children:[(0,a.jsx)(dS,{phase:l}),(0,a.jsx)(dN,{children:o("astro.illuminated",{pct:c})})]}),(0,a.jsxs)(dD,{children:[(0,a.jsx)(dI,{children:o(p)}),(0,a.jsx)(dR,{children:(0,a.jsxs)("svg",{viewBox:"0 0 200 50",width:"100%",height:"44",style:{display:"block"},children:[(0,a.jsx)("path",{d:"M 4 46 Q 100 -20 196 46",fill:"none",stroke:d.w4.colors.borderSubtle,strokeWidth:"1",strokeDasharray:"2 3"}),(0,a.jsx)("circle",{cx:4+192*m,cy:g,r:3.5,fill:"#e89a5c"}),(0,a.jsx)("line",{x1:"4",y1:"46",x2:"4",y2:"50",stroke:d.w4.colors.mainTextFaint,strokeWidth:"1"}),(0,a.jsx)("line",{x1:"196",y1:"46",x2:"196",y2:"50",stroke:d.w4.colors.mainTextFaint,strokeWidth:"1"})]})}),(0,a.jsxs)(dB,{children:[(0,a.jsxs)("span",{children:["↑ ",dM(n?.sunriseUtc??null)]}),n&&(0,a.jsx)(dH,{children:o("astro.dayLength",{h:u,m:h})}),(0,a.jsxs)("span",{children:["↓ ",dM(n?.sunsetUtc??null)]})]})]})]}),(0,a.jsxs)(dK,{children:[(0,a.jsx)(dO,{children:o("astro.iss.title")}),(0,a.jsx)(d_,{children:o("astro.iss.empty")})]})]})}let dY=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,dG=l().div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  animation: ${dY} 0.3s ease both;
`,dW=l().div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`,dJ=l().div`
  width: 54px;
  height: 54px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  flex-shrink: 0;
`,dU=l().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,dV=l().div`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${d.w4.colors.mainText};
  margin-bottom: 2px;
`,dQ=l().div`
  font-size: 11.5px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.3;
  margin-bottom: 8px;
`,dZ=l().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${d.w4.colors.accentMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
`,dX=l().div`
  display: grid;
  grid-template-columns: ${({cols:e})=>`repeat(${e}, 1fr)`};
  gap: 10px;
  flex: 1;
  min-height: 0;
`,d0=l().button`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${d.w4.colors.mainText};
  cursor: pointer;
  transition: border-color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.borderStrong};
    background: ${d.w4.colors.surfaceHover};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,d1=l().div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`,d4=l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainText};
`,d2=l().button`
  display: inline-flex;
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: ${({color:e})=>e};

  &:hover { opacity: 0.8; }
  &:focus-visible { ${d.w4.focusRing} }
`,d5={titleKey:"labLauncher.title",subtitleKey:"labLauncher.subtitle",countLabelKey:"labLauncher.count",footerKey:"labLauncher.open",icon:"⟁",iconBg:"linear-gradient(135deg, #3a2f5c 0%, #4e3d80 100%)",openHash:"#/ask",footerColor:d.w4.suites.lab,tiles:[{id:"ask",glyph:"✦",label:"Ask",bg:"#5e4cbb",hash:"#/ask"},{id:"promptlab",glyph:"◐",label:"Prompt",bg:"#c47a5e",hash:"#/promptlab"},{id:"imagegen",glyph:"◎",label:"Image",bg:"#a85c7a",hash:"#/imagegen"},{id:"playground",glyph:"⟨⟩",label:"Code",bg:"#4a6fa5",hash:"#/playground"},{id:"pad",glyph:"✎",label:"Pad",bg:"#7aa86c",hash:"#/pad"},{id:"apiexplorer",glyph:"☌",label:"API",bg:"#b08c4a",hash:"#/apiexplorer"}]},d3={titleKey:"learnLauncher.title",subtitleKey:"learnLauncher.subtitle",countLabelKey:"learnLauncher.count",footerKey:"learnLauncher.open",icon:"⌘",iconBg:"linear-gradient(135deg, #2f5c4f 0%, #3e805f 100%)",openHash:"#/school",footerColor:d.w4.suites.learn,tiles:[{id:"school",glyph:"✎",label:"Escola",bg:"#c4844a",hash:"#/school"},{id:"leitor",glyph:"ℓ",label:"Leitor",bg:"#c44a4a",hash:"#/leitor"},{id:"games",glyph:"◉",label:"Jogos",bg:"#4a6fc4",hash:"#/games"},{id:"cosmos",glyph:"☿",label:"Cosmos",bg:"#4a4a4a",hash:"#/cosmos"},{id:"earth",glyph:"⨁",label:"Earth",bg:"#7aa86c",hash:"#/earth"},{id:"weather",glyph:"☀",label:"Tempo",bg:"#5e4cbb",hash:"#/weather"}]};function d6({locale:e,variant:t}){let o="pt"===e?"pt":"en",n=(0,i.useMemo)(()=>tP(o,aK),[o]),r="lab"===t?d5:d3,s=e=>{window.location.hash=e};return(0,a.jsxs)(dG,{children:[(0,a.jsxs)(dW,{children:[(0,a.jsx)(dJ,{bg:r.iconBg,children:r.icon}),(0,a.jsxs)(dU,{children:[(0,a.jsx)(dV,{children:n(r.titleKey)}),(0,a.jsx)(dQ,{children:n(r.subtitleKey)}),(0,a.jsxs)(dZ,{children:[r.tiles.length," ",n(r.countLabelKey)]})]})]}),(0,a.jsx)(dX,{cols:3,children:r.tiles.map(e=>(0,a.jsxs)(d0,{type:"button",onClick:()=>s(e.hash),"aria-label":e.label,children:[(0,a.jsx)(d1,{bg:e.bg,children:e.glyph}),(0,a.jsx)(d4,{children:e.label})]},e.id))}),(0,a.jsx)(d2,{color:r.footerColor,type:"button",onClick:()=>s(r.openHash),children:n(r.footerKey)})]})}function d8({locale:e}){return(0,a.jsx)(d6,{locale:e,variant:"lab"})}function d7({locale:e}){return(0,a.jsx)(d6,{locale:e,variant:"learn"})}let d9="music:tracks",pe=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,pt=l().div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  animation: ${pe} 0.3s ease both;
`,po=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
`,pa=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,pi=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,pn=l().form`
  display: flex;
  gap: 6px;
`,pr=l().input`
  flex: 1;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  padding: 6px 8px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  min-width: 0;

  &::placeholder { color: ${d.w4.colors.mainTextFaint}; }
  &:focus { outline: none; border-color: ${d.w4.colors.accent}; }
`,ps=l().button`
  padding: 5px 10px;
  border-radius: ${d.w4.borderRadius.sm};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${d.w4.colors.accent};
  background: ${d.w4.colors.accent};
  color: #fff;

  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${d.w4.focusRing} }
`,pl=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${d.w4.colors.border};
    border-radius: 2px;
  }
`,pc=l().a`
  display: grid;
  grid-template-columns: 1fr 18px;
  gap: 8px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  text-decoration: none;
  color: inherit;
  transition: background ${d.w4.transitions.fast};
  animation: ${pe} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;

  &:last-child { border-bottom: none; }
  &:hover { background: ${d.w4.colors.surfaceHover}; }
  &:hover .remove-btn { opacity: 1; }
`,pd=l().div`
  min-width: 0;
`,pp=l().div`
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`,pm=l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  font-style: italic;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,pg=l().button`
  background: none;
  border: none;
  padding: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextFaint};
  cursor: pointer;
  border-radius: ${d.w4.borderRadius.sm};
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};
  @media (hover: none) { opacity: 0.55; }

  &:hover { color: ${d.w4.colors.danger}; }
  &:focus-visible { ${d.w4.focusRing}; opacity: 1; }
`,pu=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12px;
`;function ph({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>tP(t,aK),[t]),[n,r]=(0,i.useState)([]),[s,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)("");(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await ea(d9);if(!e){if(t)try{let e=JSON.parse(t);Array.isArray(e)&&r(e)}catch{}l(!0)}})(),()=>{e=!0}},[]);let p=(0,i.useCallback)(e=>{r(e),eo(d9,JSON.stringify(e))},[]),m=(0,i.useCallback)(()=>{let e=c.trim();if(!e)return;let t=e.split(/\s+[—–-]\s+/),o=t[0]?.trim()||e,a=t[1]?.trim()||"";p([{id:`m-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,title:o,artist:a,addedAt:Date.now()},...n].slice(0,8)),d("")},[c,n,p]),g=(0,i.useCallback)(e=>{p(n.filter(t=>t.id!==e))},[n,p]);return s?(0,a.jsxs)(pt,{children:[(0,a.jsxs)(po,{children:[(0,a.jsx)(pa,{children:o("music.title")}),(0,a.jsx)(pi,{children:o("music.subtitle")})]}),(0,a.jsxs)(pn,{onSubmit:e=>{e.preventDefault(),m()},children:[(0,a.jsx)(pr,{type:"text",value:c,onChange:e=>d(e.target.value),placeholder:o("music.placeholder")}),(0,a.jsx)(ps,{type:"submit",disabled:0===c.trim().length,children:o("music.add")})]}),0===n.length?(0,a.jsx)(pu,{children:o("music.empty")}):(0,a.jsx)(pl,{children:n.map((e,t)=>{let i=e.artist?`${e.title} ${e.artist}`:e.title;return(0,a.jsxs)(pc,{delay:t,href:`https://music.apple.com/search?term=${encodeURIComponent(i)}`,target:"_blank",rel:"noreferrer","aria-label":o("music.search.label"),children:[(0,a.jsxs)(pd,{children:[(0,a.jsx)(pp,{children:e.title}),e.artist&&(0,a.jsx)(pm,{children:e.artist})]}),(0,a.jsx)(pg,{className:"remove-btn",type:"button","aria-label":o("music.remove"),title:o("music.remove"),onClick:t=>{t.preventDefault(),t.stopPropagation(),g(e.id)},children:(0,a.jsx)(tB,{name:"close",size:12})})]},e.id)})})]}):null}let pf=[{id:"ursa-major",name:"Ursa Major",stars:[{x:.22,y:.28,mag:1.8},{x:.28,y:.3,mag:2.3},{x:.34,y:.33,mag:2.5},{x:.4,y:.36,mag:1.8},{x:.46,y:.32,mag:2},{x:.5,y:.28,mag:2.3},{x:.55,y:.24,mag:2}],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]},{id:"cassiopeia",name:"Cassiopeia",stars:[{x:.6,y:.18,mag:2.2},{x:.66,y:.22,mag:2.4},{x:.71,y:.17,mag:2.5},{x:.76,y:.22,mag:2.7},{x:.82,y:.18,mag:2.3}],lines:[[0,1],[1,2],[2,3],[3,4]]},{id:"orion",name:"Orion",stars:[{x:.48,y:.68,mag:1.6},{x:.55,y:.6,mag:1.8},{x:.52,y:.74,mag:2.1},{x:.5,y:.72,mag:2},{x:.49,y:.75,mag:2},{x:.6,y:.82,mag:2.2},{x:.44,y:.8,mag:2.4}],lines:[[0,1],[0,2],[2,3],[3,4],[2,5],[2,6]]},{id:"lyra",name:"Lyra",stars:[{x:.78,y:.54,mag:.1},{x:.82,y:.58,mag:3.2},{x:.79,y:.62,mag:3.9},{x:.75,y:.6,mag:3.3}],lines:[[0,1],[1,2],[2,3],[3,0]]},{id:"scorpius",name:"Scorpius",stars:[{x:.18,y:.76,mag:1.1},{x:.24,y:.82,mag:2.3},{x:.3,y:.85,mag:2.8},{x:.36,y:.81,mag:2.9},{x:.32,y:.72,mag:2.6}],lines:[[0,1],[1,2],[2,3],[3,4]]},{id:"cygnus",name:"Cygnus",stars:[{x:.65,y:.42,mag:1.3},{x:.72,y:.46,mag:2.2},{x:.78,y:.44,mag:2.5},{x:.7,y:.38,mag:2.9},{x:.68,y:.5,mag:2.5}],lines:[[0,1],[1,2],[3,0],[0,4]]},{id:"bootes",name:"Bo\xf6tes",stars:[{x:.36,y:.52,mag:-.05},{x:.32,y:.46,mag:2.4},{x:.4,y:.48,mag:2.5},{x:.38,y:.56,mag:2.7}],lines:[[0,1],[0,2],[0,3]]},{id:"leo",name:"Leo",stars:[{x:.56,y:.52,mag:1.4},{x:.62,y:.5,mag:2},{x:.66,y:.54,mag:2.6},{x:.6,y:.58,mag:2.6},{x:.52,y:.58,mag:3.4}],lines:[[0,1],[1,2],[2,3],[3,0],[0,4]]}],px=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,py=(0,c.keyframes)`
  0%, 100% { opacity: 0.85; }
  50%      { opacity: 0.55; }
`,pb=l().div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  animation: ${px} 0.3s ease both;
`,pw=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
`,p$=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,pv=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,pk=l().div`
  position: relative;
  flex: 1;
  min-height: 0;
  background:
    radial-gradient(ellipse at center, #0b1630 0%, #05080f 70%);
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.md};
  overflow: hidden;
`,pj=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
  text-align: center;
`,pz=l().circle`
  animation: ${py} 3s ease-in-out infinite;
`,pM=l().div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${d.w4.spacing.md};
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
`;function pS({locale:e}){let t,o="pt"===e?"pt":"en",n=(0,i.useMemo)(()=>tP(o,aK),[o]),[r,s]=(0,i.useState)(new Date);(0,i.useEffect)(()=>{let e=setInterval(()=>s(new Date),6e4);return()=>clearInterval(e)},[]);let l=(t=new Date().getHours())>=20||t<7,c=(60*r.getHours()+r.getMinutes())/1440*360;return(0,a.jsxs)(pb,{children:[(0,a.jsxs)(pw,{children:[(0,a.jsx)(p$,{children:n("nightSky.title")}),(0,a.jsx)(pv,{children:n("astro.location")})]}),(0,a.jsx)(pk,{children:l?(0,a.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 260 260",preserveAspectRatio:"xMidYMid meet",children:[(0,a.jsx)("circle",{cx:130,cy:130,r:122,fill:"none",stroke:d.w4.colors.borderSubtle,strokeWidth:"1",strokeDasharray:"2 4",opacity:"0.45"}),[0,90,180,270].map(e=>{let t=e*Math.PI/180,o=130+122*Math.cos(t),i=130+122*Math.sin(t),n=130+116*Math.cos(t),r=130+116*Math.sin(t);return(0,a.jsx)("line",{x1:o,y1:i,x2:n,y2:r,stroke:d.w4.colors.mainTextFaint,strokeWidth:"1",opacity:"0.4"},e)}),(0,a.jsx)("g",{transform:`rotate(${c} 130 130)`,children:pf.map(e=>{let t=e.stars.map(e=>({cx:16+228*e.x,cy:16+228*e.y,r:Math.max(.8,2.6-.6*e.mag)}));return(0,a.jsxs)("g",{children:[e.lines.map(([e,o],i)=>(0,a.jsx)("line",{x1:t[e].cx,y1:t[e].cy,x2:t[o].cx,y2:t[o].cy,stroke:"rgba(139,123,255,0.25)",strokeWidth:"0.6"},i)),t.map((e,t)=>(0,a.jsx)(pz,{cx:e.cx,cy:e.cy,r:e.r,fill:"#f2ecd8",style:{animationDelay:`${t%6*.4}s`}},t))]},e.id)})})]}):(0,a.jsx)(pM,{children:n("nightSky.dayTitle")})}),l&&(0,a.jsx)(pj,{children:n("nightSky.nightLegend",{count:pf.length})})]})}let pT="shell:dashboard-widgets",pA="shell:pending-open-widget-picker",pC=[{id:"w-ask-sessions",widgetId:"ask-sessions"},{id:"w-daily-feed",widgetId:"daily-feed"},{id:"w-techscope",widgetId:"techscope"},{id:"w-weather",widgetId:"weather"},{id:"w-clock",widgetId:"clock"}],pF=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,pP=l().div`
  margin-bottom: ${d.w4.spacing.xl};
  animation: ${pF} 0.35s ease both;
`,pL=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.md};
  padding-top: ${d.w4.spacing.md};
  padding-bottom: ${d.w4.spacing.md};
  margin-bottom: ${d.w4.spacing.md};
  border-top: 1px solid ${d.w4.colors.borderSubtle};
`,pE=l().h2`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  margin: 0;
`,pN=l().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 2px;
  background: none;
  border: none;
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: color ${d.w4.transitions.fast};

  &:hover { color: ${d.w4.colors.accent}; }
`,pD=l().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: ${d.w4.spacing.lg};

  @media (max-width: ${d.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    gap: ${d.w4.spacing.md};
  }

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`,pI=l().div`
  grid-column: span ${({cols:e})=>e};
  max-width: ${({maxCols:e})=>e>1?"none":"100%"};
  min-height: ${({minH:e})=>e??200}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${d.w4.spacing.lg};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  position: relative;
  overflow: hidden;
  transition: border-color ${d.w4.transitions.base}, box-shadow ${d.w4.transitions.base};

  /* top accent edge — 1px, always visible, emphasized on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({accentColor:e})=>e??d.w4.colors.accent};
    opacity: 0.4;
    transition: opacity ${d.w4.transitions.base};
  }

  &:hover {
    border-color: ${({accentColor:e})=>e?`${e}55`:`${d.w4.colors.accent}55`};
    box-shadow: 0 4px 16px ${d.w4.colors.shadow};
  }
  &:hover::before { opacity: 0.9; }
  &:hover .widget-controls { opacity: 1; }

  /* iPad / touch: keep controls discoverable. */
  @media (hover: none) {
    .widget-controls { opacity: 0.55; }
  }

  @media (max-width: ${d.w4.breakpoints.lg}) {
    grid-column: span 1;
  }
`,pR=l().div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast};
  z-index: 2;
`,pB=l().button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.mainTextMuted};
    background: ${d.w4.colors.surfaceRaised};
  }
`,pH=l()(pB)`
  &:hover {
    color: #f85149;
    border-color: #f8514960;
  }
`,pK=l().button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  cursor: pointer;
  padding: 0;
  transition: color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
  }
`,pO=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,p_=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
`,pq=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,pY=l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({tintColor:e})=>`${e}14`};
  border: 1px solid ${({tintColor:e})=>`${e}33`};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 11.5px;
  line-height: 1.3;
  cursor: pointer;
  transition: border-color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};

  > .glyph { line-height: 1; }
  > .label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 18ch;
  }

  &:hover {
    border-color: ${({tintColor:e})=>`${e}88`};
    background: ${({tintColor:e})=>`${e}22`};
  }
`,pG=l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${d.w4.spacing.md};
  padding: ${d.w4.spacing.xxl} ${d.w4.spacing.xl};
  min-height: 320px;
  background: ${d.w4.colors.surface};
  border: 1px dashed ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.xl};
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  text-align: center;
  overflow: hidden;

  /* soft accent glow */
  &::before {
    content: '';
    position: absolute;
    inset: -40% 30% auto -30%;
    height: 240px;
    background: radial-gradient(
      ellipse at 50% 50%,
      ${d.w4.colors.accent}1a 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`,pW=l().div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${d.w4.colors.accentMuted};
  border: 1px solid ${d.w4.colors.border};
  color: ${d.w4.colors.accent};
  font-size: 28px;
`,pJ=l().div`
  position: relative;
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 400;
  color: ${d.w4.colors.mainText};
  line-height: 1.2;
`,pU=l().div`
  position: relative;
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 420px;
`,pV=l().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${d.w4.colors.accent};
  border: none;
  border-radius: 99px;
  color: #fff;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: pointer;
  margin-top: ${d.w4.spacing.sm};
  transition: transform ${d.w4.transitions.fast}, box-shadow ${d.w4.transitions.fast};
  box-shadow: ${d.w4.elevation.glow};

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  &:focus-visible { ${d.w4.focusRing} }
`,pQ=new Set(aI.filter(e=>"Developer Toolkit"===e.suite).map(e=>e.id)),pZ="pin:";function pX(e){return e.widgetId.startsWith(pZ)}function p0(e){return e.widgetId.slice(pZ.length)}let p1=new Set(["games","movies","devtools"]);function p4({instance:e,appId:t,meta:o,app:n,idx:r,totalCount:s,tShell:l,recentsOverride:c,onMove:d,onRemove:p,onSelectApp:m}){let g=function(e){let[t,o]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let t=!1;eh(e).then(e=>{t||o(e)});let a=t=>{let a=t.detail;a?.appId===e&&o(a.entries)};return window.addEventListener(eu,a),()=>{t=!0,window.removeEventListener(eu,a)}},[e]),t}(t),u=s>1?(0,a.jsxs)(a.Fragment,{children:[r>0&&(0,a.jsx)(pK,{type:"button",title:l("widgets.moveLeft"),onClick:t=>{t.stopPropagation(),d(e.id,-1)},children:(0,a.jsx)(tB,{name:"chevron-left",size:13})}),r<s-1&&(0,a.jsx)(pK,{type:"button",title:l("widgets.moveRight"),onClick:t=>{t.stopPropagation(),d(e.id,1)},children:(0,a.jsx)(tB,{name:"chevron-right",size:13})})]}):void 0;return(0,a.jsx)(of,{vizId:t,label:o.label,description:o.description,hash:n?.hash??o.hash,category:o.category,accentColor:o.color,needsAuth:o.needsAuth,pinned:!0,index:r,onClick:()=>{n?m(n):window.location.hash=o.hash},onHoverIntent:n?()=>aC(t):void 0,onTogglePin:()=>p(e.id),reorderControls:u,extra:p1.has(t)?function(e,t,o,i){if(0===e.length)return null;let n=e.slice(0,3);return(0,a.jsxs)(pO,{children:[(0,a.jsx)(p_,{children:o("pinnedCard.recent.label")}),(0,a.jsx)(pq,{children:n.map(e=>{let o,n,r;return(0,a.jsxs)(pY,{type:"button",tintColor:e.color??t,title:e.label,onClick:t=>{t.stopPropagation(),window.location.hash=e.hash},children:[(o=function(e){if(e)return aH[e.split("?")[0]]??aH[e]}(e.hash),n=o?.iconName??e.iconName??i,r=o?.color??e.color??t,n?(0,a.jsx)("span",{className:"glyph","aria-hidden":"true",style:{color:r},children:(0,a.jsx)(tB,{name:n,size:14})}):e.icon?(0,a.jsx)("span",{className:"glyph","aria-hidden":"true",children:e.icon}):null),(0,a.jsx)("span",{className:"label",children:e.label})]},e.hash)})})]})}(c??g,o.color,l,o.icon):null})}function p2({locale:e,pinnedAppIds:t,recentAppIds:o,apps:n,appMeta:r,onSelectApp:s,onTogglePin:l}){let c=(0,i.useMemo)(()=>tP(e,aK),[e]),[p,m]=(0,i.useState)([]),[g,u]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{try{sessionStorage.removeItem(pA)}catch{}f(!0)};window.addEventListener("atlantis:open-widget-picker",e);let t=!1;try{t="1"===sessionStorage.getItem(pA)}catch{}if(t){try{sessionStorage.removeItem(pA)}catch{}f(!0)}return()=>window.removeEventListener("atlantis:open-widget-picker",e)},[]),(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await ea(pT);if(!e){if(t)try{let e=JSON.parse(t),o=function(e){if(!e.some(e=>"internet-now"===e.widgetId))return e;let t=[];for(let o of e)if("internet-now"===o.widgetId){let e=Date.now();t.push({id:`w-trending-${e}`,widgetId:"trending-searches"},{id:`w-wiki-${e+1}`,widgetId:"wiki-most-read"},{id:`w-hn-${e+2}`,widgetId:"hackernews-hot"})}else t.push(o);return t}(e);m(o),o!==e&&eo(pT,JSON.stringify(o))}catch{m(pC)}else m(pC);u(!0)}})(),()=>{e=!0}},[]),(0,i.useEffect)(()=>{g&&m(e=>{let o=new Set(t),a=new Set(e.filter(pX).map(p0)),i=e.filter(e=>!pX(e)||o.has(p0(e)));for(let e of t)a.has(e)||(i=[...i,{id:`pin-${e}`,widgetId:`${pZ}${e}`}]);return i.length!==e.length||i.some((t,o)=>t.id!==e[o]?.id)?(eo(pT,JSON.stringify(i)),i):e})},[t,g]);let x=(0,i.useCallback)(e=>{m(e),eo(pT,JSON.stringify(e))},[]),y=(0,i.useCallback)(e=>{x([...p,{id:`w-${e}-${Date.now()}`,widgetId:e}])},[p,x]),b=(0,i.useCallback)(e=>{let t=p.find(t=>t.id===e);t&&pX(t)?l(p0(t)):x(p.filter(t=>t.id!==e))},[p,x,l]),w=(0,i.useCallback)((e,t)=>{let o=p.findIndex(t=>t.id===e);if(o<0)return;let a=o+t;if(a<0||a>=p.length)return;let i=[...p];[i[o],i[a]]=[i[a],i[o]],x(i)},[p,x]),$=(0,i.useMemo)(()=>new Set(p.filter(e=>!pX(e)).map(e=>e.widgetId)),[p]);return g?(0,a.jsxs)(pP,{children:[(0,a.jsxs)(pL,{children:[(0,a.jsx)(pE,{children:c("widgets.dashboard")}),(0,a.jsxs)(pN,{active:h,onClick:()=>f(!h),children:[(0,a.jsx)(tB,{name:"plus",size:14}),c("widgets.addWidget")]})]}),(0,a.jsx)(ia,{open:h,activeIds:$,locale:e,onAdd:e=>{y(e)},onRemove:e=>{let t=p.find(t=>!pX(t)&&t.widgetId===e);t&&b(t.id)},onClose:()=>f(!1)}),0===p.length?(0,a.jsxs)(pG,{children:[(0,a.jsx)(pW,{children:"✨"}),(0,a.jsx)(pJ,{children:c("widgets.empty.title")}),(0,a.jsx)(pU,{children:c("widgets.empty.body")}),(0,a.jsxs)(pV,{onClick:()=>f(!0),children:[(0,a.jsx)(tB,{name:"plus",size:14}),c("widgets.empty.cta")]})]}):(0,a.jsx)(pD,{children:p.map((i,l)=>{var m;if(pX(i)){let t=p0(i),d="devtools"===t,m=d?{icon:"terminal",label:c("apps.devtools.label"),description:c("apps.devtools.description"),color:"#facc15",category:aE("Create",e),hash:"#/playground",needsAuth:!1}:r[t];if(!m)return null;let g=d?null:n.find(e=>e.id===t)??null,u=d?o.filter(e=>pQ.has(e)).map(e=>{let t=r[e];return{hash:t?.hash??`#/${e}`,label:t?.label??e,iconName:t?.icon,color:t?.color,ts:0}}):void 0;return(0,a.jsx)(p4,{instance:i,appId:t,meta:m,app:g,locale:e,idx:l,totalCount:p.length,tShell:c,recentsOverride:u,onMove:w,onRemove:b,onSelectApp:s},i.id)}let g=(m=i.widgetId,aO.find(e=>e.id===m));if(!g)return null;let u={"daily-feed":"#2dd4bf",techscope:"#a371f7",weather:"#58a6ff",clock:"#d29922",quicklinks:"#3fb950","news-pt":"#2da44e","news-world":"#cc0000",crypto:"#f7931a",seismic:"#f97316",onthisday:"#d29922",quotes:"#a371f7","analog-clock":"#f87171","trending-searches":"#e233ff","wiki-most-read":"#58a6ff","hackernews-hot":"#f97316","live-data":"#00d4ff",pet:"#e8a0b0",streak:"#fb923c",habits:"#fb923c",movies:"#f97316","ask-sessions":d.w4.suites.lab,agenda:d.w4.suites.lab,reading:"#a371f7",bolsa:"#7fb77e",astro:"#8b7bff","lab-launcher":d.w4.suites.lab,"learn-launcher":d.w4.suites.learn,music:"#e89a5c","night-sky":"#6aa8d8"};return(0,a.jsxs)(pI,{cols:g.defaultCols,maxCols:g.maxCols,accentColor:u[i.widgetId],minH:g.minHeight,children:[(0,a.jsxs)(pR,{className:"widget-controls",children:[l>0&&(0,a.jsx)(pB,{title:c("widgets.moveLeft"),onClick:()=>w(i.id,-1),children:(0,a.jsx)(tB,{name:"chevron-left",size:14})}),l<p.length-1&&(0,a.jsx)(pB,{title:c("widgets.moveRight"),onClick:()=>w(i.id,1),children:(0,a.jsx)(tB,{name:"chevron-right",size:14})}),(0,a.jsx)(pH,{title:c("widgets.remove"),onClick:()=>b(i.id),children:(0,a.jsx)(tB,{name:"close",size:14})})]}),(i=>{switch(i.widgetId){case"daily-feed":return(0,a.jsx)(l8,{locale:e});case"techscope":return(0,a.jsx)(iv,{locale:e});case"weather":return(0,a.jsx)(iV,{locale:e});case"clock":return(0,a.jsx)(i9,{locale:e});case"quicklinks":return(0,a.jsx)(nl,{locale:e,pinnedAppIds:t,recentAppIds:o,apps:n,appMeta:r,onSelect:s});case"news-pt":return(0,a.jsx)(ny,{locale:e});case"news-world":return(0,a.jsx)(nT,{locale:e});case"crypto":return(0,a.jsx)(nY,{locale:e});case"seismic":return(0,a.jsx)(n5,{locale:e});case"onthisday":return(0,a.jsx)(rn,{locale:e});case"quotes":return(0,a.jsx)(rg,{locale:e});case"analog-clock":return(0,a.jsx)(rj,{locale:e});case"trending-searches":return(0,a.jsx)(rI,{locale:e});case"wiki-most-read":return(0,a.jsx)(rZ,{locale:e});case"hackernews-hot":return(0,a.jsx)(so,{locale:e});case"live-data":return(0,a.jsx)(sA,{locale:e});case"pet":return(0,a.jsx)(s2,{locale:e});case"streak":return(0,a.jsx)(lr,{locale:e});case"habits":return(0,a.jsx)(lk,{locale:e});case"movies":return(0,a.jsx)(lK,{locale:e});case"ask-sessions":return(0,a.jsx)(cr,{locale:e});case"agenda":return(0,a.jsx)(cN,{locale:e});case"reading":return(0,a.jsx)(dd,{locale:e});case"bolsa":return(0,a.jsx)(dz,{locale:e});case"astro":return(0,a.jsx)(dq,{locale:e});case"lab-launcher":return(0,a.jsx)(d8,{locale:e});case"learn-launcher":return(0,a.jsx)(d7,{locale:e});case"music":return(0,a.jsx)(ph,{locale:e});case"night-sky":return(0,a.jsx)(pS,{locale:e});default:return null}})(i)]},i.id)})})]}):null}let p5={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",95:"⛈️",96:"⛈️",99:"⛈️"},p3={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},p6=Object.fromEntries(aI.map(e=>[e.id,e.icon])),p8=Object.fromEntries(aI.map(e=>[e.id,e.color]));function p7(e){return e<10?`0${e}`:String(e)}function p9({locale:e,greeting:t,userName:o,pinnedApps:n,onSelect:r,t:s}){let[l,c]=(0,i.useState)(()=>new Date),[d,p]=(0,i.useState)(null);(0,i.useEffect)(()=>{let e=setInterval(()=>c(new Date),3e4);return()=>clearInterval(e)},[]),(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await is("https://api.open-meteo.com/v1/forecast?latitude=38.7223&longitude=-9.1393&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=Europe%2FLisbon&forecast_days=1","weather-lisbon-v3");!e&&t&&p(t)})(),()=>{e=!0}},[]);let m=`${p7(l.getHours())} : ${p7(l.getMinutes())}`,g=(0,i.useMemo)(()=>{let t,o,a;return t=l.toLocaleDateString("pt"===e?"pt-PT":"en-GB",{weekday:"long"}),o=l.getDate(),a=l.toLocaleDateString("pt"===e?"pt-PT":"en-GB",{month:"long"}),`${t} \xb7 ${o} ${a}`.toUpperCase()},[l,e]),u=n.slice(0,5),h=d?(d.current.is_day?p5[d.current.weather_code]:p3[d.current.weather_code]??p5[d.current.weather_code])??"\xb7":null;return(0,a.jsxs)(mt,{children:[d&&(0,a.jsxs)(ml,{children:[(0,a.jsx)("span",{className:"ico",children:h}),(0,a.jsxs)("span",{className:"temp",children:[Math.round(d.current.temperature_2m),"\xb0"]}),(0,a.jsx)("span",{className:"lbl",children:s("retreat.weather.city")})]}),(0,a.jsxs)(mo,{children:[(0,a.jsx)(ma,{children:g}),(0,a.jsxs)(mi,{children:[t,o?(0,a.jsxs)(a.Fragment,{children:[", ",(0,a.jsx)("span",{className:"name",children:o.split(" ")[0]})]}):null,"."]}),(0,a.jsx)(mn,{children:m}),(0,a.jsxs)(mr,{"aria-hidden":!0,children:[(0,a.jsx)("span",{className:"caret",children:"⌘K"}),(0,a.jsx)("span",{className:"txt",children:s("retreat.prompt")})]}),u.length>0&&(0,a.jsx)(ms,{children:u.map((e,t)=>(0,a.jsxs)(mc,{onClick:()=>r(e),title:`${t+1} \xb7 ${e.label}`,"aria-label":e.label,children:[(0,a.jsx)("span",{className:"ico",style:{color:p8[e.id]},children:p6[e.id]?(0,a.jsx)(tB,{name:p6[e.id],size:18,"aria-hidden":"true"}):"\xb7"}),(0,a.jsx)("span",{className:"n",children:t+1})]},e.id))})]})]})}let me=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,mt=l().div`
  flex: 1;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  animation: ${me} 0.35s ease both;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, ${d.w4.colors.accent}1a 0%, transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -35%;
    left: 20%;
    width: 640px;
    height: 640px;
    border-radius: 50%;
    background: radial-gradient(circle, #a371f71a 0%, transparent 70%);
    filter: blur(50px);
    pointer-events: none;
  }
`,mo=l().div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: ${d.w4.spacing.lg};
`,ma=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.3em;
  color: ${d.w4.colors.mainTextMuted};
  margin-bottom: ${d.w4.spacing.md};
`,mi=l().h1`
  /* Match Command-First Deep Dive: Cormorant Garamond display + ultra-light
     weight + tight tracking. Falls back gracefully to the system serif. */
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: clamp(32px, 6vw, 56px);
  font-weight: 400;
  letter-spacing: -0.8px;
  color: ${d.w4.colors.mainText};
  line-height: 1.05;

  .name {
    color: ${d.w4.colors.accent};
    font-weight: 400;
    font-style: italic;
  }
`,mn=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 14px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.24em;
  margin-top: ${d.w4.spacing.md};
  font-variant-numeric: tabular-nums;
`,mr=l().div`
  margin-top: ${d.w4.spacing.xl};
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 999px;
  background: ${d.w4.colors.surface}aa;
  backdrop-filter: blur(10px);

  .caret {
    color: ${d.w4.colors.accent};
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }
  .txt {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    color: ${d.w4.colors.mainTextMuted};
    letter-spacing: 0.08em;
  }
`,ms=l().div`
  margin-top: ${d.w4.spacing.xl};
  display: flex;
  justify-content: center;
  gap: ${d.w4.spacing.md};
`,ml=l().div`
  position: absolute;
  top: ${d.w4.spacing.lg};
  right: ${d.w4.spacing.lg};
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: ${d.w4.colors.surface}80;
  border: 1px solid ${d.w4.colors.border};
  backdrop-filter: blur(10px);

  .ico { font-size: 14px; line-height: 1; }
  .temp {
    font-size: 14px;
    font-weight: 300;
    color: ${d.w4.colors.mainText};
    font-variant-numeric: tabular-nums;
  }
  .lbl {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${d.w4.colors.mainTextMuted};
  }
`,mc=l().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 44px;
  min-height: 44px;
  padding: 6px 4px;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 12px;
  background: ${d.w4.colors.surface}80;
  color: ${d.w4.colors.sidebarTextMuted};
  cursor: pointer;
  transition: border-color ${d.w4.transitions.base}, color ${d.w4.transitions.base}, transform ${d.w4.transitions.base}, background ${d.w4.transitions.base};

  .ico { font-size: 18px; line-height: 1; }
  .n {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 9px;
    letter-spacing: 0.06em;
  }

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.accent};
    background: ${d.w4.colors.accentMuted??`${d.w4.colors.accent}14`};
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,md=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,mp=l().div`
  position: relative;
  padding: ${d.w4.spacing.xl};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};
  margin-bottom: ${d.w4.spacing.lg};
  animation: ${md} 0.25s ${d.w4.transitions.easing} both;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: ${d.w4.colors.accent};
    border-radius: 0 2px 2px 0;
  }
`,mm=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.md};
`,mg=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,mu=l().div`
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 400;
  color: ${d.w4.colors.mainText};
`,mh=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 560px;
`,mf=l().button`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${d.w4.colors.border};
  background: transparent;
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    color ${d.w4.transitions.fast},
    border-color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.mainText};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,mx=l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,my=l().button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: ${d.w4.spacing.md};
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.md};
  text-align: left;
  cursor: pointer;
  transition:
    border-color ${d.w4.transitions.fast},
    transform ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.accent};
    transform: translateY(-1px);
  }
  &:focus-visible { ${d.w4.focusRing} }
`,mb=l().div`
  color: ${d.w4.colors.accent};
`,mw=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,m$=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.45;
`;function mv({t:e,onDismiss:t,onOpenPalette:o,onOpenPreferences:i}){let n=[{iconName:"search",titleKey:"onboarding.tip.palette.title",bodyKey:"onboarding.tip.palette.body",kbd:"⌘K",onClick:o},{iconName:"settings",titleKey:"onboarding.tip.preferences.title",bodyKey:"onboarding.tip.preferences.body",onClick:i},{iconName:"check",titleKey:"onboarding.tip.daily.title",bodyKey:"onboarding.tip.daily.body",onClick:()=>{window.location.hash="#/daily"}}];return(0,a.jsxs)(mp,{role:"region","aria-label":e("onboarding.aria"),children:[(0,a.jsxs)(mm,{children:[(0,a.jsxs)(mg,{children:[(0,a.jsx)(ov,{children:e("onboarding.eyebrow")}),(0,a.jsx)(mu,{children:e("onboarding.title")}),(0,a.jsx)(mh,{children:e("onboarding.subtitle")})]}),(0,a.jsx)(mf,{type:"button",title:e("onboarding.dismiss"),"aria-label":e("onboarding.dismiss"),onClick:t,children:(0,a.jsx)(tB,{name:"close",size:14})})]}),(0,a.jsx)(mx,{children:n.map(t=>(0,a.jsxs)(my,{type:"button",onClick:t.onClick,disabled:!t.onClick,children:[(0,a.jsx)(mb,{"aria-hidden":!0,children:(0,a.jsx)(tB,{name:t.iconName,size:18})}),(0,a.jsxs)(mw,{children:[e(t.titleKey),t.kbd&&(0,a.jsx)(ow,{children:t.kbd})]}),(0,a.jsx)(m$,{children:e(t.bodyKey)})]},t.titleKey))})]})}let mk=Object.fromEntries(aI.map(({id:e,icon:t,labelKey:o,descriptionKey:a,color:i,category:n,suite:r,interest:s,needsAuth:l,hash:c})=>[e,{icon:t,labelKey:o,descriptionKey:a,color:i,category:n,suite:r,interest:s,needsAuth:l,hash:c}])),mj=new Set(aI.filter(e=>"default"!==aD(e)).map(e=>e.id)),mz=aI.filter(e=>e.enabled&&"default"===aD(e)),mM=["All","Live","School","Explore","Create","Inspect","Connect","Content","Fun","Lab","Tools"],mS=["AI Lab","Data Studio","Life Dashboard","Learning Hub","Game Room","Entertainment"],mT=mS.filter(e=>mz.some(t=>mk[t.id]?.suite===e));function mA(e,t=new Date){let o=t.getHours();return aN(o<12?"greeting.morning":o<19?"greeting.afternoon":"greeting.evening",e)}let mC={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",95:"⛈️",96:"⛈️",99:"⛈️"},mF={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},mP=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,mL=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${d.w4.colors.mainBg};
  position: relative;
  overflow: hidden;

  /* Single static ambient glow — tonal, not theatrical. */
  &::before {
    content: '';
    position: fixed;
    top: -30vmax;
    right: -30vmax;
    width: 80vmax;
    height: 80vmax;
    border-radius: 50%;
    background: radial-gradient(ellipse at center,
      ${d.w4.colors.accent}12 0%,
      ${d.w4.colors.accent}06 40%,
      transparent 70%);
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }

  & > * { position: relative; z-index: 1; }
`,mE=l().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${d.w4.colors.sidebarBg};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  flex-shrink: 0;
  backdrop-filter: blur(12px);
  z-index: 1000;

  /* On mobile the header becomes two stacked rows: logo on top, a
     horizontally-scrollable chrome row below. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(48px + env(safe-area-inset-top, 0px));
  }
`,mN=l().button`
  display: flex;
  align-items: baseline;
  padding: 0 ${d.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${d.w4.colors.mainText};
  transition: opacity ${d.w4.transitions.fast};
  flex-shrink: 0;
  &:hover { opacity: 0.8; }

  .logo-accent {
    background: linear-gradient(135deg, ${d.w4.colors.accent}, ${d.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,mD=l().div`
  display: flex;
  align-items: center;
  padding-left: ${d.w4.spacing.md};
  flex-shrink: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,mI=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${d.w4.spacing.sm};
  padding: 0 ${d.w4.spacing.lg};

  /* Drop to a full-width second row on mobile and scroll horizontally,
     aligned to the right so the avatar stays anchored at the edge. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    min-width: 0;
    justify-content: flex-end;
    gap: ${d.w4.spacing.xs};
    padding: ${d.w4.spacing.xs} ${d.w4.spacing.sm};
    border-top: 1px solid ${d.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,mR=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,mB=l()("nav",{shouldForwardProp:e=>"collapsed"!==e})`
  width: ${({collapsed:e})=>e?"0":"220px"};
  min-width: ${({collapsed:e})=>e?"0":"220px"};
  border-right: ${({collapsed:e})=>e?"none":`1px solid ${d.w4.colors.borderSubtle}`};
  padding: ${({collapsed:e})=>e?"0":`${d.w4.spacing.xxl} ${d.w4.spacing.sm}`};
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  opacity: ${({collapsed:e})=>+!e};
  visibility: ${({collapsed:e})=>e?"hidden":"visible"};
  transition:
    width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease-out,
    visibility 0s linear ${({collapsed:e})=>e?"0.3s":"0s"};

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,mH=l()("button",{shouldForwardProp:e=>"collapsed"!==e})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.sidebarTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  transition: color ${d.w4.transitions.fast};
  &:hover { color: ${d.w4.colors.mainText}; }

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,mK=l()(ak.A,{shouldForwardProp:e=>"collapsed"!==e})`
  width: 14px;
  height: 14px;
  transition: transform ${d.w4.transitions.base};
  transform: rotate(${({collapsed:e})=>e?"-90deg":"0deg"});
  flex-shrink: 0;
`,mO=l()("div",{shouldForwardProp:e=>"collapsed"!==e})`
  display: grid;
  grid-template-rows: ${({collapsed:e})=>e?"0fr":"1fr"};
  opacity: ${({collapsed:e})=>+!e};
  transition:
    grid-template-rows 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease-out;
`,m_=l().div`
  overflow: hidden;
  padding: 2px 0;
  min-height: 0;
`,mq=l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px ${d.w4.spacing.md};
  background: none;
  border: none;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: ${d.w4.colors.sidebarTextMuted};
  cursor: pointer;
  transition: color ${d.w4.transitions.fast};
  text-align: left;

  &:hover { color: ${d.w4.colors.accent}; }
  &:focus-visible { ${d.w4.focusRing} }

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,mY=l().button`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  width: 100%;
  min-height: 36px;
  padding: 8px ${d.w4.spacing.md};
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};
  &:hover {
    background: ${({active:e})=>e?d.w4.colors.accentMuted:d.w4.colors.sidebarHover};
    color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  }

  @media (max-width: ${d.w4.breakpoints.md}) {
    width: auto;
    min-height: 36px;
    padding: 6px ${d.w4.spacing.md};
    border-radius: 20px;
    border: 1px solid ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.border};
    font-size: ${d.w4.typography.fontSizeSm};
  }
`,mG=l().span`
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarTextMuted};
  background: ${({active:e})=>e?d.w4.colors.accentMuted:d.w4.colors.sidebarHover};
  padding: 2px 8px;
  border-radius: 10px;
  min-width: 22px;
  text-align: center;
  line-height: 1.4;
  flex-shrink: 0;
  transition: background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,mW=l().hr`
  border: none;
  border-top: 1px solid ${d.w4.colors.borderSubtle};
  margin: ${d.w4.spacing.sm} ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,mJ=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({bleed:e})=>e?"0":`${d.w4.spacing.xl} ${d.w4.spacing.xxl} 80px`};
  overflow-y: auto;
  position: relative;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${({bleed:e})=>e?"0":`${d.w4.spacing.lg} ${d.w4.spacing.md} ${d.w4.spacing.xxl}`};
  }
`,mU=l().header`
  max-width: 820px;
  margin-bottom: ${d.w4.spacing.lg};
  animation: ${mP} 0.4s ease both;

  @media (max-width: ${d.w4.breakpoints.md}) {
    margin-bottom: ${d.w4.spacing.md};
  }
`,mV=l().div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${d.w4.spacing.md};
  margin-bottom: ${d.w4.spacing.md};
  flex-wrap: wrap;
`,mQ=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.3em;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
`,mZ=l().span`
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
`,mX=l().div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  animation: ${mP} 0.4s ease both;

  .ico { font-size: 13px; line-height: 1; }
  .temp {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 500;
    color: ${d.w4.colors.mainText};
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.05em;
  }
  .lbl {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: ${d.w4.colors.mainTextMuted};
  }
`,m0=l().h1`
  /* Command-First Deep Dive spec: 52 px ultra-light Cormorant Garamond,
     name in brand purple. Scales down gracefully on narrow viewports. */
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: clamp(34px, 4.8vw, 52px);
  font-weight: 300;
  letter-spacing: -0.015em;
  line-height: 1.1;
  color: ${d.w4.colors.mainText};
  margin: 0;

  .accent {
    color: ${d.w4.colors.accent};
    font-style: italic;
    font-weight: 400;
  }

  @media (max-width: ${d.w4.breakpoints.md}) {
    font-size: 28px;
  }
`,m1=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.sidebarTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 18px;
  margin-bottom: ${d.w4.spacing.md};
`,m4=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${d.w4.spacing.sm};
  }
`,m2=l().button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  cursor: pointer;
  padding: 0;
  transition: color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
  }
`,m5=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${d.w4.spacing.sm};
  padding: ${d.w4.spacing.xl};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  margin: ${d.w4.spacing.lg} 0;
`,m3=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,m6=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.55;
  max-width: 480px;
`,m8=l().button`
  margin-top: ${d.w4.spacing.sm};
  padding: 8px 14px;
  background: ${d.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 500;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.accentHover}; }
  &:focus-visible { ${d.w4.focusRing} }
`;function m7({apps:e,recentAppIds:t,pinnedAppIds:o,onTogglePin:n,onMovePinned:r,onSelect:s,user:l,onSignOut:c,onPreferences:m,onClearData:g,onOpenPalette:u,notifications:h,suites:f}){let x,y,b,[w]=eM(),$=(0,i.useMemo)(()=>e.filter(e=>{if(mj.has(e.id))return!1;let t=mk[e.id];return!t||!eS(w)||!t.interest||!!w.interests.includes(t.interest)}),[e,w]),[v,k]=(0,i.useState)("home"),[j,z]=(0,i.useState)("All"),[M,S]=(0,i.useState)(null),[T,A]=(0,i.useState)(()=>new Date),[C,F]=(0,i.useState)(null),[P,L]=(0,i.useState)(!0);(0,i.useEffect)(()=>{let e=!1;return ea("shell:onboarding-dismissed").then(t=>{e||L("true"===t)}).catch(()=>void 0),()=>{e=!0}},[]);let N=(0,i.useCallback)(()=>{L(!0),eo("shell:onboarding-dismissed","true").catch(()=>void 0)},[]);(0,i.useEffect)(()=>{let e=setInterval(()=>A(new Date),6e4),t=()=>{document.hidden||A(new Date)};return document.addEventListener("visibilitychange",t),window.addEventListener("focus",t),()=>{clearInterval(e),document.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}},[]),(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await is("https://api.open-meteo.com/v1/forecast?latitude=38.7223&longitude=-9.1393&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=Europe%2FLisbon&forecast_days=1","weather-lisbon-v3");!e&&t&&F(t)})(),()=>{e=!0}},[]);let D=(0,i.useCallback)(()=>{k("home"),z("All"),S(null),eo("shell:home-mode","dashboard")},[]),I=(0,i.useCallback)(()=>{k("retreat"),z("All"),S(null),eo("shell:home-mode","retreat")},[]),R=(0,i.useCallback)(e=>{k("apps"),S(e),z("All")},[]),B=(0,i.useMemo)(()=>({lab:"AI Lab",vida:"Life Dashboard",learn:"Learning Hub",games:"Game Room",ent:"Entertainment"}),[]);(0,i.useEffect)(()=>{let e=()=>{let e=window.location.hash,t=e.indexOf("?");if(t<0)return;let o=new URLSearchParams(e.slice(t+1)).get("suite");if(!o)return;let a=B[o];a&&(k("apps"),S(a),z("All"))};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[B]);let[H,K]=(0,i.useState)(()=>{try{let e=localStorage.getItem("shell:suites-collapsed");return null===e||"true"===e}catch{return!0}}),[O,_]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem("shell:home-sidebar-hidden")}catch{return!1}}),[q]=(0,i.useState)(()=>{try{return"1"===sessionStorage.getItem(pA)}catch{return!1}});(0,i.useEffect)(()=>{let e=!1;return(async()=>{let[t,o,a]=await Promise.all([ea("shell:suites-collapsed"),ea("shell:home-mode"),ea("shell:home-sidebar-hidden")]);if(!e){if(null!==t){K("true"===t);try{localStorage.setItem("shell:suites-collapsed",t)}catch{}}if(null!==a){_("true"===a);try{localStorage.setItem("shell:home-sidebar-hidden",a)}catch{}}q?(k("home"),eo("shell:home-mode","dashboard").catch(()=>void 0)):"retreat"===o&&k("retreat")}})(),()=>{e=!0}},[q]),(0,i.useEffect)(()=>{let e=()=>{k("home"),z("All"),S(null)};return window.addEventListener("atlantis:open-widget-picker",e),()=>window.removeEventListener("atlantis:open-widget-picker",e)},[]);let Y=(0,i.useCallback)(()=>{K(e=>{let t=!e;try{localStorage.setItem("shell:suites-collapsed",String(t))}catch{}return eo("shell:suites-collapsed",String(t)),t})},[]),G=(0,i.useCallback)(()=>{_(e=>{let t=!e;try{localStorage.setItem("shell:home-sidebar-hidden",String(t))}catch{}return eo("shell:home-sidebar-hidden",String(t)).catch(()=>void 0),t})},[]),[W,J]=tF(),U=(0,i.useMemo)(()=>tP(W,aK),[W]),V=(0,i.useMemo)(()=>{let e={};for(let t of $){let o=mk[t.id];o&&(e[t.id]={icon:o.icon,label:U(o.labelKey),description:U(o.descriptionKey),color:o.color,category:aE(o.category,W),hash:o.hash,needsAuth:!!o.needsAuth})}return e},[$,U,W]),Q=(0,i.useMemo)(()=>$.filter(e=>{let t=mk[e.id],a="All"===j||t?.category===j,i=!M||t?.suite===M,n="All"===j&&!M&&o.includes(e.id);return a&&i&&!n}),[$,j,M,o]),Z=(0,i.useMemo)(()=>{if("All"!==j)return null;if(M){let e={};for(let t of Q){let o=mk[t.id]?.category??"Other";e[o]||(e[o]=[]),e[o].push(t)}return{type:"category",groups:e}}let e={};for(let t of Q){let o=mk[t.id]?.suite??"Other";e[o]||(e[o]=[]),e[o].push(t)}return{type:"suite",groups:e}},[Q,j,M]),X=(0,i.useMemo)(()=>{let e={};for(let t of $){let o=mk[t.id]?.suite;o&&(e[o]=(e[o]??0)+1)}return e["AI Lab"]=(e["AI Lab"]??0)+1,e},[$]),ee=(0,i.useMemo)(()=>o.flatMap(e=>$.filter(t=>t.id===e)),[o,$]),et=(0,i.useMemo)(()=>t.filter(e=>!o.includes(e)).flatMap(e=>$.filter(t=>t.id===e)).slice(0,6),[t,o,$]),ei=0,en=(e,t,i)=>{let l=mk[e.id],c=o.includes(e.id),p=l?U(l.descriptionKey):"",m=l?.color??d.w4.colors.accent,g=l?aE(l.category,W):"",u=i&&i.total>1?(0,a.jsxs)(a.Fragment,{children:[i.pinIdx>0&&(0,a.jsx)(m2,{type:"button",title:"pt"===W?"Mover para a esquerda":"Move left",onClick:t=>{t.stopPropagation(),r(e.id,-1)},children:(0,a.jsx)(aj.A,{size:13})}),i.pinIdx<i.total-1&&(0,a.jsx)(m2,{type:"button",title:"pt"===W?"Mover para a direita":"Move right",onClick:t=>{t.stopPropagation(),r(e.id,1)},children:(0,a.jsx)(az.A,{size:13})})]}):void 0;return(0,a.jsx)(of,{vizId:e.id,label:e.label,description:p,hash:l?.hash??e.hash,category:g,accentColor:m,needsAuth:l?.needsAuth,pinned:c,index:t,onClick:()=>s(e),onHoverIntent:()=>aC(e.id),onTogglePin:()=>n(e.id),reorderControls:u},e.id)},er=e=>{let t=o.includes("devtools");return(0,a.jsx)(of,{vizId:"devtools",label:U("apps.devtools.label"),description:U("apps.devtools.description"),hash:"#/playground",category:aE("Create",W),accentColor:"#facc15",pinned:t,index:e,onClick:()=>{window.location.hash="#/playground"},onHoverIntent:()=>aC("playground"),onTogglePin:()=>n("devtools")})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(mL,{children:[(0,a.jsxs)(mE,{children:[(0,a.jsx)(mD,{children:(0,a.jsx)(e7,{onClick:G,title:O?U("sidebar.show"):U("sidebar.hide"),"aria-label":O?U("sidebar.show"):U("sidebar.hide"),"aria-pressed":O,children:(0,a.jsx)(p.A,{size:16})})}),(0,a.jsxs)(mN,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:[(0,a.jsx)("span",{children:"Atl"}),(0,a.jsx)("span",{className:"logo-accent",children:"antis"})]}),(0,a.jsx)(mI,{children:(0,a.jsx)(t7,{locale:W,onLocaleChange:J,suites:f,notifications:h,onOpenPalette:u,paletteLabel:U("palette.search"),user:l?{name:l.name,email:l.email,avatarUrl:l.avatarUrl}:void 0,userMenuItems:l?[...m?[{label:U("userMenu.preferences"),icon:(0,a.jsx)(tj.A,{size:14}),onClick:m}]:[],{label:U("userMenu.settings"),icon:(0,a.jsx)(aw.A,{size:14}),onClick:()=>{window.location.hash="#/settings"}},...g?[{label:U("userMenu.clearData"),icon:(0,a.jsx)(a$.A,{size:14}),onClick:g,danger:!0}]:[],...c?[{label:U("userMenu.signOut"),icon:(0,a.jsx)(av.A,{size:14}),onClick:c,danger:!0}]:[]]:[],userMenuControlLabels:{language:U("userMenu.language"),theme:U("userMenu.theme"),themeLight:U("userMenu.themeLight"),themeDark:U("userMenu.themeDark"),themeSystem:U("userMenu.themeSystem")},onSignIn:()=>{window.location.hash="#/home"}})})]}),(0,a.jsxs)(mR,{children:[(0,a.jsxs)(mB,{collapsed:O,children:[(0,a.jsx)(mY,{active:"home"===v,onClick:D,children:(0,a.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,a.jsx)(aM.A,{size:14}),"pt"===W?"In\xedcio":"Home"]})}),(0,a.jsx)(mY,{active:"retreat"===v,onClick:I,children:(0,a.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,a.jsx)(E.A,{size:14}),U("sidebar.retreat")]})}),(0,a.jsx)(mW,{}),mT.length>0&&(0,a.jsxs)(a.Fragment,{children:[H?(0,a.jsx)(mq,{type:"button",onClick:Y,children:U("sidebar.showSuites")}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(mH,{onClick:Y,children:[aN("suites",W),(0,a.jsx)(mK,{collapsed:H})]}),(0,a.jsx)(mO,{collapsed:H,children:(0,a.jsx)(m_,{children:mT.map(e=>{let t,o=(t=aR.find(t=>t.yamlSuite===e))?{icon:t.icon,color:t.color}:void 0,i="apps"===v&&M===e;return(0,a.jsxs)(mY,{active:i,onClick:()=>R(e),children:[o&&(0,a.jsx)("span",{style:{display:"inline-flex",color:i?d.w4.colors.accent:o.color,flexShrink:0},children:(0,a.jsx)(tB,{name:o.icon,size:16,"aria-hidden":"true"})}),(0,a.jsx)("span",{style:{flex:1,textAlign:"left"},children:aP[e]?.[W]??e}),(0,a.jsx)(mG,{active:i,children:X[e]??0})]},e)})})})]}),(0,a.jsx)(mW,{})]})]}),(0,a.jsx)(mJ,{bleed:"retreat"===v,children:"retreat"===v?(0,a.jsx)(p9,{locale:W,greeting:mA(W,T),userName:l?.name,pinnedApps:ee,onSelect:s,t:U}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(mU,{children:[(0,a.jsxs)(mV,{children:[(0,a.jsx)(mQ,{children:(x=T.toLocaleDateString("pt"===W?"pt-PT":"en-GB",{weekday:"long"}),y=T.getDate(),b=T.toLocaleDateString("pt"===W?"pt-PT":"en-GB",{month:"long"}),`${x} \xb7 ${y} ${b}`.toUpperCase())}),C&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(mZ,{children:"\xb7"}),(0,a.jsxs)(mX,{children:[(0,a.jsx)("span",{className:"ico",children:(C.current.is_day?mC[C.current.weather_code]:mF[C.current.weather_code]??mC[C.current.weather_code])??"\xb7"}),(0,a.jsxs)("span",{className:"temp",children:[Math.round(C.current.temperature_2m),"\xb0"]}),(0,a.jsx)("span",{className:"lbl",children:aN("home.weather.city",W)})]})]})]}),(0,a.jsxs)(m0,{children:[mA(W,T),l?.name?(0,a.jsxs)(a.Fragment,{children:[", ",(0,a.jsx)("span",{className:"accent",children:l.name.split(" ")[0]})]}):null,"."]})]}),"home"===v&&!P&&0===ee.length&&0===et.length&&(0,a.jsx)(mv,{t:U,onDismiss:N,onOpenPalette:u,onOpenPreferences:m}),"home"===v&&(0,a.jsx)(p2,{locale:W,pinnedAppIds:o,recentAppIds:t,apps:$,appMeta:V,onSelectApp:s,onTogglePin:n}),"apps"===v&&(0,a.jsxs)(a.Fragment,{children:[0===Q.length&&(null!==M||"All"!==j||eS(w))&&(0,a.jsxs)(m5,{children:[(0,a.jsx)(m3,{children:aN("home.emptyFiltered.title",W)}),(0,a.jsx)(m6,{children:aN("home.emptyFiltered.desc",W)}),(0,a.jsxs)("div",{style:{display:"flex",gap:d.w4.spacing.sm},children:[(null!==M||"All"!==j)&&(0,a.jsx)(m8,{type:"button",onClick:()=>{S(null),z("All")},style:{background:"transparent",color:d.w4.colors.accent,border:`1px solid ${d.w4.colors.border}`},children:aN("home.emptyFiltered.clear",W)}),m&&(0,a.jsx)(m8,{type:"button",onClick:m,children:aN("home.emptyFiltered.cta",W)})]})]}),"All"===j&&!M&&ee.length>0&&(0,a.jsxs)("div",{children:[(0,a.jsx)(m1,{children:aN("pinned",W)}),(0,a.jsx)(m4,{children:ee.map((e,t)=>en(e,ei++,{pinIdx:t,total:ee.length}))})]}),"All"===j&&!M&&et.length>0&&(0,a.jsxs)("div",{children:[(0,a.jsx)(m1,{children:aN("recentlyUsed",W)}),(0,a.jsx)(m4,{children:et.map(e=>en(e,ei++))})]}),Z?[..."suite"===Z.type?mS:mM.slice(1),"Other"].filter(e=>Z.groups[e]?.length>0).map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(m1,{children:"suite"===Z.type?aP[e]?.[W]??e:aE(e,W)}),(0,a.jsxs)(m4,{children:[Z.groups[e].map(e=>en(e,ei++)),("suite"===Z.type&&"AI Lab"===e||"category"===Z.type&&"Lab"===e)&&er(ei++)]})]},e)):(0,a.jsxs)(m4,{children:[Q.map(e=>en(e,ei++)),"Lab"===j&&er(ei++)]})]})]})})]})]})})}let m9=(0,o(82791).U)("https://eqvzakschpdemcgexjyy.supabase.co","sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL");function ge(){return m9.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin}})}function gt(){return m9.auth.signOut()}let go=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,ga=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${d.w4.colors.mainBg};
`,gi=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${d.w4.spacing.lg};
  padding: 48px 40px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  animation: ${go} 0.3s ease both;
  max-width: 360px;
  width: 100%;
  text-align: center;
`,gn=l().div`
  font-size: 40px;
  line-height: 1;
`,gr=l().h2`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  margin: 0;
`,gs=l().p`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  margin: 0;
  line-height: 1.5;
`,gl=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 44px;
  padding: 0 ${d.w4.spacing.lg};
  background: #fff;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: #1f1f1f;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};

  &:hover { box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25); }
  &:active { background: #f5f5f5; }
`,gc=()=>(0,a.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[(0,a.jsx)("path",{fill:"#EA4335",d:"M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.53 1 24 1 14.82 1 7.07 6.48 3.88 14.22l7.1 5.52C12.68 13.55 17.9 9.5 24 9.5z"}),(0,a.jsx)("path",{fill:"#4285F4",d:"M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.67c-.55 2.94-2.18 5.44-4.65 7.12l7.19 5.59C43.39 37.48 46.52 31.47 46.52 24.5z"}),(0,a.jsx)("path",{fill:"#FBBC05",d:"M10.98 28.26A14.57 14.57 0 0 1 9.5 24c0-1.48.25-2.91.68-4.26l-7.1-5.52A23.93 23.93 0 0 0 .5 24c0 3.87.93 7.52 2.58 10.74l7.9-6.48z"}),(0,a.jsx)("path",{fill:"#34A853",d:"M24 47c5.52 0 10.15-1.83 13.53-4.97l-7.19-5.59C28.47 37.82 26.36 38.5 24 38.5c-6.1 0-11.32-4.05-13.02-9.74l-7.9 6.48C6.07 42.54 14.45 47 24 47z"})]}),gd=l().button`
  background: none;
  border: none;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  padding: 0;
  &:hover { color: ${d.w4.colors.mainText}; }
`;function gp({appLabel:e,onBack:t}){return(0,a.jsx)(ga,{children:(0,a.jsxs)(gi,{children:[(0,a.jsx)(gn,{children:"\uD83D\uDD12"}),(0,a.jsx)(gr,{children:"Sign in required"}),(0,a.jsxs)(gs,{children:[(0,a.jsx)("strong",{style:{color:"inherit"},children:e})," is only available to signed-in users."]}),(0,a.jsxs)(gl,{onClick:ge,children:[(0,a.jsx)(gc,{}),"Continue with Google"]}),(0,a.jsx)(gd,{onClick:t,children:"← Back to home"})]})})}let gm={async saveDoc(e,t,o){let{data:{user:a}}=await m9.auth.getUser();if(!a)throw Error("Not authenticated");let{data:i,error:n}=await m9.from("documents").insert({user_id:a.id,app_id:e,name:t,content:o,saved_at:new Date().toISOString()}).select("id").single();if(n)throw n;return i.id},async updateDoc(e,t,o){let{error:a}=await m9.from("documents").update({name:t,content:o,saved_at:new Date().toISOString()}).eq("id",e);if(a)throw a},async listDocs(e){let{data:t,error:o}=await m9.from("documents").select("id, app_id, name, content, saved_at").eq("app_id",e).order("saved_at",{ascending:!1});if(o)throw o;return(t??[]).map(e=>({id:e.id,appId:e.app_id,name:e.name,content:e.content,savedAt:new Date(e.saved_at).getTime()}))},async deleteDoc(e){let{error:t}=await m9.from("documents").delete().eq("id",e);if(t)throw t},async putSetting(e,t){let{data:{user:o}}=await m9.auth.getUser();if(!o)return;let{error:a}=await m9.from("settings").upsert({user_id:o.id,key:e,value:t},{onConflict:"user_id,key"});if(a)throw a},async getSetting(e){let{data:{user:t}}=await m9.auth.getUser();if(!t)return null;let{data:o,error:a}=await m9.from("settings").select("value").eq("key",e).single();return a?null:o?.value??null}},gg=["palette.ask.suggest.summarizeDay","palette.ask.suggest.whatsTrending"],gu=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,gh=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.97) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,gf=l().div`
  position: fixed;
  inset: 0;
  z-index: ${d.w4.zIndex.modal};
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  animation: ${gu} ${d.w4.transitions.fast};

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding-top: 0;
    align-items: flex-end;
  }
`,gx=l().div`
  width: 780px;
  max-width: calc(100vw - 24px);
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.borderStrong};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${d.w4.elevation.lg};
  animation: ${gh} ${d.w4.transitions.base};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: ${d.w4.breakpoints.md}) {
    border-radius: 16px 16px 0 0;
    max-height: 84vh;
  }
`,gy=l().div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,gb=l().div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  transition: color ${d.w4.transitions.fast};
`,gw=l().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 17px;
  color: ${d.w4.colors.mainText};
  letter-spacing: -0.2px;
  caret-color: ${d.w4.colors.accent};

  &::placeholder {
    color: ${d.w4.colors.mainTextFaint};
  }
`,g$=l().kbd`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.04em;
  color: ${d.w4.colors.mainTextFaint};
  padding: 3px 8px;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 5px;
  background: transparent;
`,gv=l().div`
  padding: 10px 16px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,gk=l().div`
  flex: 1;
  overflow-y: auto;
  padding: 6px 0 12px;
  min-height: 140px;
  max-height: 60vh;

  @media (max-width: ${d.w4.breakpoints.md}) {
    max-height: none;
  }
`,gj=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px 6px;
`,gz=l().span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.65;
`,gM=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
`,gS=l()("div",{shouldForwardProp:e=>"selected"!==e})`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 22px;
  cursor: pointer;
  background: ${({selected:e})=>e?d.w4.colors.accentMuted:"transparent"};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.accentMuted}; }
`,gT=l()("div",{shouldForwardProp:e=>"tintColor"!==e&&"selected"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  background: ${({tintColor:e})=>`${e}1a`};
  border: 1px solid ${({tintColor:e,selected:t})=>t?`${e}66`:`${e}26`};
  transition: ${d.w4.transitions.fast};
`,gA=l()("div",{shouldForwardProp:e=>"tintColor"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({tintColor:e})=>`${e}26`};
  color: ${({tintColor:e})=>e};
  border: 1px solid ${({tintColor:e})=>`${e}40`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,gC=l().div`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextMuted};
  background: transparent;
  flex-shrink: 0;
`,gF=l()("div",{shouldForwardProp:e=>"tintColor"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  background: ${({tintColor:e})=>`${e}22`};
  border: 1px solid ${({tintColor:e})=>`${e}40`};
`,gP=l().div`
  flex: 1;
  min-width: 0;
`,gL=l()("div",{shouldForwardProp:e=>"selected"!==e})`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: ${({selected:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  line-height: 1.25;
`,gE=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
  margin-top: 3px;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,gN=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
  white-space: nowrap;
`,gD=l().div`
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;
`,gI=l().kbd`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 5px;
  border: 1px solid ${d.w4.colors.border};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextMuted};
  background: transparent;
`,gR=l().div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height: 180px;
  max-height: 60vh;

  @media (max-width: ${d.w4.breakpoints.md}) {
    max-height: none;
  }
`,gB=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 22px 24px;
  gap: 16px;
`,gH=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,gK=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`,gO=l().button`
  padding: 8px 14px;
  border-radius: 8px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12.5px;
  cursor: pointer;
  transition: ${d.w4.transitions.fast};
  line-height: 1.4;

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.accent};
    background: ${d.w4.colors.accentMuted};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,g_=l().div`
  display: flex;
  flex-direction: column;
  padding: 12px 22px 16px;
  gap: 16px;
`,gq=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,gY=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
  margin-bottom: 2px;
`,gG=l().div`
  font-size: 14px;
  color: ${d.w4.colors.mainText};
  line-height: 1.5;
  font-weight: 500;
`,gW=(0,c.keyframes)`
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
  40%           { opacity: 1;   transform: scale(1);   }
`,gJ=l().div`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px 0;

  span {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${d.w4.colors.accent};
    animation: ${gW} 1.4s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.2s; }
    &:nth-of-type(3) { animation-delay: 0.4s; }
  }
`,gU=l().div`
  font-size: 12px;
  color: ${d.w4.colors.danger};
  font-family: ${d.w4.typography.fontFamilyMono};
`,gV=l().div`
  padding: 40px 24px 44px;
  text-align: center;
  color: ${d.w4.colors.mainTextMuted};

  .icon {
    display: inline-flex;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${d.w4.colors.surfaceHover};
    margin-bottom: 10px;
  }
  .title { font-size: 13.5px; color: ${d.w4.colors.mainText}; font-weight: 500; }
  .hint  { font-size: 11.5px; margin-top: 4px; line-height: 1.5; }
  .query { font-family: ${d.w4.typography.fontFamilyMono}; color: ${d.w4.colors.mainText}; }
`,gQ=l().div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 22px;
  border-top: 1px solid ${d.w4.colors.borderSubtle};

  @media (max-width: ${d.w4.breakpoints.md}) {
    gap: 12px;
    padding: 8px 16px;
  }
`,gZ=l().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
`;function gX(e,t){if(!t)return!0;let o=t.toLowerCase();return e.label.toLowerCase().includes(o)||(e.meta?.toLowerCase().includes(o)??!1)}function g0({apps:e,recentIds:t,suites:o=[],games:r=[],actions:s=[],hasAsk:l=!1,groqKey:c,locale:p,initialScope:m,onNavigate:g,onClose:u}){let h=(0,i.useMemo)(()=>tP(p,aK),[p]),[f,x]=(0,i.useState)(""),[y,b]=(0,i.useState)(()=>"ask"!==m||l?m??"all":"all"),[w,$]=(0,i.useState)(0),[v,k]=(0,i.useState)([]),[j,z]=(0,i.useState)(!1),M=(0,i.useRef)([]),S=(0,i.useRef)(null),T=(0,i.useRef)(null),A=(0,i.useRef)(null),C=(0,i.useRef)(null);(0,i.useEffect)(()=>(S.current?.focus(),()=>{C.current?.abort()}),[]),(0,i.useEffect)(()=>{M.current=v},[v]),(0,i.useEffect)(()=>{A.current?.scrollIntoView({behavior:"smooth"})},[v,j]);let F=(0,i.useMemo)(()=>{let a=new Set(t),i=e.map(e=>({id:`app:${e.id}`,kind:"app",label:e.label,meta:e.description,isRecent:a.has(e.id),appIcon:{iconName:e.icon,color:e.color},onConfirm:()=>{g(e.hash),u()}}));return[...o.map(e=>({id:`suite:${e.id}`,kind:"suite",label:e.name,meta:e.sub,glyphIcon:{iconName:e.iconName,color:e.color},shortcut:e.shortcut,onConfirm:()=>{e.onConfirm(),u()}})),...i,...r.map(e=>({id:`game:${e.id}`,kind:"game",label:e.name,meta:h("palette.meta.game"),gameGlyph:{iconName:e.iconName,color:e.color},hash:e.hash,onConfirm:()=>{g(e.hash),u()}})),...s.map(e=>({id:`action:${e.id}`,kind:"action",label:e.label,meta:e.meta,glyphIcon:{iconName:e.iconName,color:e.color??d.w4.colors.accent},shortcut:e.shortcut,onConfirm:()=>{e.onClick(),u()}}))]},[e,o,r,s,t,g,u,h]),P=(0,i.useMemo)(()=>{if("ask"===y)return[];let e=F.filter(e=>gX(e,f)),o=[],a=(e,t,a)=>{if(0!==a.length)for(let i of(o.push({kind:"header",label:h(t),key:e,count:a.length}),a))o.push({kind:"item",item:i})};return"recent"===y?a("recent","palette.recent",F.filter(e=>"app"===e.kind&&e.isRecent&&gX(e,f)).sort((e,o)=>t.indexOf(e.id.slice(4))-t.indexOf(o.id.slice(4)))):"jump"===y?(a("suites","palette.section.suites",e.filter(e=>"suite"===e.kind)),a("apps","palette.section.apps",e.filter(e=>"app"===e.kind)),a("games","palette.section.games",e.filter(e=>"game"===e.kind))):"actions"===y?a("actions","palette.section.actions",e.filter(e=>"action"===e.kind)):(a("jump","palette.section.jump",e.filter(e=>"suite"===e.kind||"app"===e.kind||"game"===e.kind)),a("actions","palette.section.actions",e.filter(e=>"action"===e.kind)),l&&c&&a("ask","palette.section.ask",gg.map((e,t)=>({id:`suggest:${t}`,kind:"suggest",label:h(e),meta:h("palette.ask.suggestMeta"),shortcut:["↵"],onConfirm:()=>{b("ask"),setTimeout(()=>{E(h(e))},0)}})))),o},[y,f,F,t,h,l,c]),L=(0,i.useMemo)(()=>P.filter(e=>"item"===e.kind),[P]);(0,i.useEffect)(()=>{$(0)},[y,f]),(0,i.useEffect)(()=>{let e=T.current;if(!e)return;let t=e.querySelectorAll("[data-selectable]");t[w]?.scrollIntoView({block:"nearest"})},[w]);let E=(0,i.useCallback)(async e=>{if(!c||!e.trim())return;let t=e.trim(),o=`turn-${Date.now()}`;k(e=>[...e,{id:o,question:t}]),z(!0),x("");let a=[];for(let e of M.current)e.answer&&(a.push({role:"user",content:e.question}),a.push({role:"assistant",content:e.answer}));C.current?.abort();let i=new AbortController;C.current=i;try{let e=await eJ(t,{key:c,locale:"pt"===p?"pt":"en",signal:i.signal,history:a});i.signal.aborted||k(t=>t.map(t=>t.id===o?{...t,answer:e}:t))}catch(t){if(i.signal.aborted)return;let e=t instanceof Error?t.message:String(t);k(t=>t.map(t=>t.id===o?{...t,error:e}:t))}finally{i.signal.aborted||z(!1)}},[c,p]),N=(0,i.useCallback)(e=>{if("Escape"===e.key){if("ask"===y&&f.trim())return void x("");if("ask"===y&&v.length>0){C.current?.abort(),z(!1),k([]);return}return void u()}if("ask"===y){"Enter"===e.key&&f.trim()&&(e.preventDefault(),E(f.trim()));return}if("ArrowDown"===e.key)e.preventDefault(),$(e=>Math.min(e+1,L.length-1));else if("ArrowUp"===e.key)e.preventDefault(),$(e=>Math.max(e-1,0));else if("Enter"===e.key){let e=L[w];e&&e.item.onConfirm()}},[y,f,v.length,L,w,u,E]),D=(0,i.useCallback)(e=>{e.target===e.currentTarget&&u()},[u]),I="ask"===y?v.length>0?h("palette.ask.followUp"):h("palette.ask.placeholder"):h("palette.placeholder"),R=(0,i.useMemo)(()=>{let e=[{value:"all",label:h("palette.scope.all")},{value:"jump",label:h("palette.scope.jump")},{value:"actions",label:h("palette.scope.actions")}];return l&&c&&e.push({value:"ask",label:h("palette.scope.ask"),highlight:!0}),e.push({value:"recent",label:h("palette.scope.recent")}),e},[h,l,c]),B=-1;return ta().createPortal((0,a.jsx)(gf,{onClick:D,children:(0,a.jsxs)(gx,{onClick:e=>e.stopPropagation(),children:[(0,a.jsxs)(gy,{children:[(0,a.jsx)(gb,{active:"ask"===y,children:(0,a.jsx)(tB,{name:"ask"===y?"sparkle":"search",size:20,"aria-hidden":"true"})}),(0,a.jsx)(gw,{ref:S,placeholder:I,value:f,onChange:e=>x(e.target.value),onKeyDown:N,"aria-label":h("palette.search")}),(0,a.jsx)(g$,{children:"esc"})]}),(0,a.jsx)(gv,{children:(0,a.jsx)(tt,{tabs:R,value:y,onChange:b,"aria-label":h("palette.scope.ariaLabel")})}),"ask"===y?(0,a.jsx)(gR,{children:0!==v.length||j?(0,a.jsxs)(g_,{children:[v.map(e=>(0,a.jsxs)(n().Fragment,{children:[(0,a.jsxs)(gq,{children:[(0,a.jsx)(gY,{children:h("palette.ask.you")}),(0,a.jsx)(gG,{children:e.question})]}),(0,a.jsxs)(gq,{children:[(0,a.jsx)(gY,{children:h("palette.ask.atlantis")}),void 0!==e.answer?(0,a.jsx)(ab,{children:e.answer}):void 0!==e.error?(0,a.jsx)(gU,{children:e.error}):(0,a.jsxs)(gJ,{"aria-label":h("palette.ask.thinking"),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})]})]},e.id)),(0,a.jsx)("div",{ref:A})]}):(0,a.jsxs)(gB,{children:[(0,a.jsx)(gH,{children:h("palette.ask.suggestionsTitle")}),(0,a.jsx)(gK,{children:gg.map(e=>(0,a.jsx)(gO,{onClick:()=>{E(h(e))},type:"button",children:h(e)},e))}),(0,a.jsx)(gH,{style:{marginTop:4},children:h("palette.ask.hint")})]})}):(0,a.jsx)(gk,{ref:T,children:0===L.length?(0,a.jsxs)(gV,{children:[(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)(tB,{name:"search",size:16,"aria-hidden":"true"})}),(0,a.jsxs)("div",{className:"title",children:[h("palette.noMatch")," ",f&&(0,a.jsxs)("span",{className:"query",children:["“",f,"”"]})]}),(0,a.jsx)("div",{className:"hint",children:h("palette.emptyHint")})]}):P.map((e,t)=>{if("header"===e.kind)return(0,a.jsxs)(gj,{children:[(0,a.jsx)(gz,{children:e.label}),(0,a.jsx)(gM,{children:e.count})]},`h-${e.key}`);let o=B+=1,i=o===w,n=e.item;return(0,a.jsxs)(gS,{selected:i,"data-selectable":!0,onMouseEnter:()=>$(o),onClick:()=>n.onConfirm(),children:[n.appIcon&&(0,a.jsx)(gT,{tintColor:n.appIcon.color,selected:i,children:(0,a.jsx)(tB,{name:n.appIcon.iconName,size:18,"aria-hidden":"true",color:n.appIcon.color})}),n.glyphIcon&&(0,a.jsx)(gA,{tintColor:n.glyphIcon.color,children:(0,a.jsx)(tB,{name:n.glyphIcon.iconName,size:18,"aria-hidden":"true"})}),n.gameGlyph&&(0,a.jsx)(gF,{tintColor:n.gameGlyph.color,children:(0,a.jsx)(tB,{name:n.gameGlyph.iconName,size:18,"aria-hidden":"true",color:n.gameGlyph.color})}),"suggest"===n.kind&&(0,a.jsx)(gC,{children:(0,a.jsx)(tB,{name:"sparkle",size:18,"aria-hidden":"true"})}),(0,a.jsxs)(gP,{children:[(0,a.jsx)(gL,{selected:i,children:n.label}),n.meta&&(0,a.jsx)(gE,{children:n.meta})]}),n.hash&&(0,a.jsx)(gN,{children:n.hash}),n.shortcut&&n.shortcut.length>0&&(0,a.jsx)(gD,{children:n.shortcut.map((e,t)=>(0,a.jsx)(gI,{children:e},t))})]},n.id+"-"+t)})}),(0,a.jsx)(gQ,{children:"ask"===y?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(gZ,{children:[(0,a.jsx)(gI,{children:"↵"}),h("palette.hint.ask")]}),(0,a.jsxs)(gZ,{children:[(0,a.jsx)(gI,{children:"esc"}),h("palette.hint.close")]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(gZ,{children:[(0,a.jsx)(gI,{children:"↑"}),(0,a.jsx)(gI,{children:"↓"}),h("palette.hint.navigate")]}),(0,a.jsxs)(gZ,{children:[(0,a.jsx)(gI,{children:"↵"}),h("palette.hint.open")]}),(0,a.jsxs)(gZ,{children:[(0,a.jsx)(gI,{children:"esc"}),h("palette.hint.close")]})]})})]})}),document.body)}let g1=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,g4=l().button`
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: ${d.w4.zIndex.sticky};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px 7px 14px;
  border-radius: 999px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  box-shadow: ${d.w4.elevation.sm};
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  animation: ${g1} 0.25s ${d.w4.transitions.easing} both;
  animation-delay: 1s;
  transition:
    border-color ${d.w4.transitions.fast},
    color ${d.w4.transitions.fast},
    transform ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.borderStrong};
    transform: translateY(-1px);
  }
  &:focus-visible { ${d.w4.focusRing} }

  /* Only precise-pointer devices see the hint — touch users have no
     keyboard, and the hint would cover content on phones. */
  @media (hover: none), (pointer: coarse) {
    display: none;
  }
`;function g2({onOpenPalette:e,t}){return ta().createPortal((0,a.jsxs)(g4,{type:"button","aria-label":t("cmdk.hint.aria"),onClick:e,children:[(0,a.jsx)(ow,{children:"⌘K"}),t("cmdk.hint.label")]}),document.body)}var g5=o(8006),g3=o(68440),g6=o(80140),g8=o(12743),g7=o(76480),g9=o(69248);let ue=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,ut=l().div`
  flex: 1;
  overflow-y: auto;
  padding: ${d.w4.spacing.xl};
`,uo=l().div`
  max-width: 680px;
  margin: 0 auto;
  animation: ${ue} 0.4s ease;
`,ua=l().div`
  margin-bottom: ${d.w4.spacing.xl};
`,ui=l().h1`
  font-size: ${d.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  margin: 0 0 4px;
`,un=l().p`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  margin: 0;
  line-height: 1.5;
`,ur=l().section`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
  margin-bottom: ${d.w4.spacing.lg};
`,us=l().h2`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  margin: 0 0 ${d.w4.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,ul=l().p`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  margin: 0 0 ${d.w4.spacing.lg};
  line-height: 1.5;
`,uc=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: ${d.w4.spacing.md};

  &:last-of-type {
    margin-bottom: 0;
  }
`,ud=l().label`
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,up=l().span`
  font-size: 9px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${({active:e})=>e?"rgba(63,185,80,0.15)":"rgba(139,148,158,0.15)"};
  color: ${({active:e})=>e?"#3fb950":d.w4.colors.mainTextMuted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,um=l().span`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  font-weight: 400;
`,ug=l().div`
  display: flex;
  gap: 6px;
`,uu=l().div`
  flex: 1;
  position: relative;
`,uh=l().input`
  width: 100%;
  padding: 8px 36px 8px 12px;
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeSm};
  font-family: ${d.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color ${d.w4.transitions.base};
  box-sizing: border-box;

  &:focus {
    border-color: ${d.w4.colors.accent};
  }

  &::placeholder {
    color: ${d.w4.colors.mainTextMuted};
    opacity: 0.5;
  }
`,uf=l().button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 2px;
  display: flex;
  transition: color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
  }
`,ux=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({danger:e})=>e?"#e05252":d.w4.colors.mainTextMuted};
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};

  &:hover {
    border-color: ${({danger:e})=>e?"#e05252":d.w4.colors.accent};
    color: ${({danger:e})=>e?"#e05252":d.w4.colors.mainText};
    background: ${({danger:e})=>e?"rgba(224,82,82,0.08)":d.w4.colors.surface};
  }
`,uy=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${d.w4.spacing.md};
  margin-top: ${d.w4.spacing.md};
  border-top: 1px solid ${d.w4.colors.border};
`,ub=l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: ${d.w4.colors.accent};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  color: #fff;
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${d.w4.transitions.base}, transform ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.accentHover};
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`,uw=l().span`
  font-size: ${d.w4.typography.fontSizeSm};
  color: #3fb950;
  font-family: ${d.w4.typography.fontFamilyMono};
`,u$=l().div`
  display: flex;
  align-items: flex-start;
  gap: ${d.w4.spacing.sm};
  padding: ${d.w4.spacing.md};
  background: rgba(88, 166, 255, 0.06);
  border: 1px solid rgba(88, 166, 255, 0.15);
  border-radius: ${d.w4.borderRadius.md};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
`,uv=[{id:"groq",label:"Groq",placeholder:"gsk_...",help:"Used by Prompt Lab and Image Gen (enhance)",linkUrl:"https://console.groq.com/keys",linkLabel:"Get key"},{id:"gemini",label:"Google Gemini",placeholder:"AIza...",help:"Used by Prompt Lab",linkUrl:"https://aistudio.google.com/apikey",linkLabel:"Get key"}],uk="atlantis:api-keys",uj="atlantis:promptlab:keys",uz={groq:"",gemini:""};function uM({lang:e}){let[t,o]=(0,i.useState)(uz),[n,r]=(0,i.useState)({}),[s,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=function(){try{let e=localStorage.getItem(uk);if(e)return{...uz,...JSON.parse(e)};let t=localStorage.getItem(uj);if(t)return{...uz,...JSON.parse(t)}}catch{}return{...uz}}();o(e),ea(uk).then(t=>{if(t)try{let a={...uz,...JSON.parse(t)},i={groq:e.groq||a.groq,gemini:e.gemini||a.gemini};o(i)}catch{}})},[]);let p=(0,i.useCallback)((e,t)=>{o(o=>({...o,[e]:t})),d(!0),l(!1)},[]),m=(0,i.useCallback)(e=>{o(t=>({...t,[e]:""})),d(!0),l(!1)},[]),g=(0,i.useCallback)(()=>{let e;e=JSON.stringify(t),localStorage.setItem(uk,e),localStorage.setItem(uj,e),eo(uk,e),d(!1),l(!0),setTimeout(()=>l(!1),2500)},[t]),u="pt"===e;return(0,a.jsx)(ut,{children:(0,a.jsxs)(uo,{children:[(0,a.jsxs)(ua,{children:[(0,a.jsx)(ui,{children:u?"Defini\xe7\xf5es":"Settings"}),(0,a.jsx)(un,{children:u?"Gere as tuas chaves de API para os servi\xe7os de IA. As chaves s\xe3o guardadas no teu browser e sincronizadas com a tua conta.":"Manage your API keys for AI services. Keys are stored in your browser and synced with your account."})]}),(0,a.jsxs)(ur,{children:[(0,a.jsxs)(us,{children:[(0,a.jsx)(g5.A,{size:16}),u?"Chaves de API":"API Keys"]}),(0,a.jsx)(ul,{children:u?"Estas chaves s\xe3o usadas pelo Prompt Lab e Image Gen. Cada servi\xe7o tem um plano gratuito.":"These keys are used by Prompt Lab and Image Gen. Each service has a free tier."}),uv.map(e=>{let o=t[e.id],i=n[e.id]??!1;return(0,a.jsxs)(uc,{children:[(0,a.jsxs)(ud,{children:[e.label,(0,a.jsx)(up,{active:!!o,children:o?u?"ativa":"active":u?"vazia":"empty"}),(0,a.jsxs)(um,{children:["— ",e.help]})]}),(0,a.jsxs)(ug,{children:[(0,a.jsxs)(uu,{children:[(0,a.jsx)(uh,{type:i?"text":"password",value:o,onChange:t=>p(e.id,t.target.value),placeholder:e.placeholder,spellCheck:!1,autoComplete:"off"}),(0,a.jsx)(uf,{onClick:()=>r(t=>({...t,[e.id]:!i})),title:i?"Hide":"Show",children:i?(0,a.jsx)(g3.A,{size:13}):(0,a.jsx)(g6.A,{size:13})})]}),(0,a.jsx)(ux,{danger:!0,onClick:()=>m(e.id),title:u?"Limpar":"Clear",children:(0,a.jsx)(a$.A,{size:13})}),(0,a.jsx)("a",{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,a.jsx)(ux,{title:e.linkLabel,children:(0,a.jsx)(g8.A,{size:13})})})]})]},e.id)}),(0,a.jsxs)(uy,{children:[s?(0,a.jsx)(uw,{children:u?"✓ Guardado":"✓ Saved"}):(0,a.jsx)("span",{}),(0,a.jsxs)(ub,{onClick:g,disabled:!c,children:[(0,a.jsx)(g7.A,{size:13}),u?"Guardar":"Save"]})]})]}),(0,a.jsxs)(u$,{children:[(0,a.jsx)(g9.A,{size:14,style:{flexShrink:0,marginTop:2}}),(0,a.jsx)("span",{children:u?"As chaves s\xe3o enviadas diretamente do teu browser para o servi\xe7o de IA — nunca passam pelos nossos servidores. Podes remov\xea-las a qualquer momento.":"Keys are sent directly from your browser to the AI provider — they never pass through our servers. You can remove them at any time."})]})]})})}var uS=o(24525);let uT=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,uA=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-4px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,uC=l().div`
  position: fixed;
  inset: 0;
  z-index: 4000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: ${uT} 0.15s ease both;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${d.w4.spacing.md};
`,uF=l().div`
  width: 100%;
  max-width: 480px;
  max-height: calc(100dvh - 32px);
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  animation: ${uA} 0.18s ease both;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,uP=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  border-bottom: 1px solid ${d.w4.colors.border};
`,uL=l().h2`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  margin: 0;
`,uE=l().button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid transparent;
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.border};
    background: ${d.w4.colors.sidebarHover};
  }
`,uN=l().div`
  padding: ${d.w4.spacing.lg};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,uD=l().section`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,uI=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,uR=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: -2px;
`,uB=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,uH=l().button`
  padding: 6px 12px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  border: 1px solid ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  }
`,uK=l().div`
  display: flex;
  justify-content: flex-end;
  gap: ${d.w4.spacing.sm};
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  border-top: 1px solid ${d.w4.colors.border};
`,uO=l().button`
  padding: 8px 16px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.mainTextMuted};
    color: ${d.w4.colors.mainText};
  }
`,u_=l().button`
  padding: 8px 20px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  font-weight: 600;
  background: ${d.w4.colors.accent};
  border: 1px solid ${d.w4.colors.accent};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainBg};
  cursor: pointer;
  transition: ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.accentHover};
    border-color: ${d.w4.colors.accentHover};
  }
`;function uq({open:e,onClose:t,locale:o}){let[n,r]=eM(),[s,l]=(0,i.useState)(n),c=(0,i.useMemo)(()=>tP("pt"===o?"pt":"en",aK),[o]);if((0,i.useEffect)(()=>{e&&l(n)},[e,n]),(0,i.useEffect)(()=>{if(!e)return;let o=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e)return null;let d=async()=>{let e=s.ageMode!==n.ageMode||s.interests.length!==n.interests.length||s.interests.some(e=>!n.interests.includes(e));await r(s),t(),e&&(await ei("widget-cache:"),window.location.reload())},p="pt"===o?e$:ew,m="pt"===o?ek:ev;return ta().createPortal((0,a.jsx)(uC,{onClick:e=>{e.target===e.currentTarget&&t()},children:(0,a.jsxs)(uF,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-title",children:[(0,a.jsxs)(uP,{children:[(0,a.jsx)(uL,{id:"profile-title",children:c("profile.title")}),(0,a.jsx)(uE,{onClick:t,"aria-label":c("profile.close"),children:(0,a.jsx)(uS.A,{size:16})})]}),(0,a.jsxs)(uN,{children:[(0,a.jsxs)(uD,{children:[(0,a.jsx)(uI,{children:c("profile.interests")}),(0,a.jsx)(uR,{children:c("profile.interestsHint")}),(0,a.jsx)(uB,{children:eb.map(e=>(0,a.jsx)(uH,{active:s.interests.includes(e),onClick:()=>{l(t=>({...t,interests:t.interests.includes(e)?t.interests.filter(t=>t!==e):[...t.interests,e]}))},"aria-pressed":s.interests.includes(e),children:p[e]},e))})]}),(0,a.jsxs)(uD,{children:[(0,a.jsx)(uI,{children:c("profile.ageMode")}),(0,a.jsx)(uR,{children:c("profile.ageModeHint")}),(0,a.jsx)(uB,{children:["kid","teen","adult"].map(e=>(0,a.jsx)(uH,{active:s.ageMode===e,onClick:()=>{l(t=>({...t,ageMode:e}))},"aria-pressed":s.ageMode===e,children:m[e]},e))})]})]}),(0,a.jsxs)(uK,{children:[(0,a.jsx)(uO,{onClick:t,children:c("profile.cancel")}),(0,a.jsx)(u_,{onClick:d,children:c("profile.save")})]})]})}),document.body)}let uY="notifications:lastSeenAt",uG="notifications:dismissed",uW="#fb923c";async function uJ(){let e=await ea(uG);if(!e)return{};try{let t=JSON.parse(e),o=Date.now()-6048e5,a={};for(let[e,i]of Object.entries(t))"number"==typeof i&&i>=o&&(a[e]=i);return a}catch{return{}}}function uU(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,o)=>{let a=Date.parse(e.pubDate);Number.isNaN(a)||t.push({id:`${a}-${o}`,ts:a,title:e.title,link:e.link})}),t}let uV=[{id:"news-pt",cacheKey:"widget-cache:news-portugal",badgeKey:"notifications.source.newsPt",badgeColor:"#2da44e",parse:uU},{id:"news-world",cacheKey:"widget-cache:news-world",badgeKey:"notifications.source.newsWorld",badgeColor:"#cc0000",parse:uU},{id:"seismic-pt",cacheKey:"widget-cache:seismic-pt",badgeKey:"notifications.source.seismicPt",badgeColor:"#f97316",parse:function(e){if(!Array.isArray(e))return[];let t=[];return e.forEach((e,o)=>{let a=Date.parse(e.time);if(Number.isNaN(a))return;let i=e.local||e.obsRegion||"?";t.push({id:`pt-${a}-${o}`,ts:a,title:`M ${e.mag.toFixed(1)} — ${i}`})}),t}},{id:"seismic-world",cacheKey:"widget-cache:seismic-world",badgeKey:"notifications.source.seismicWorld",badgeColor:"#ea580c",parse:function(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}}];async function uQ(e){let t=Date.now()-6048e5,o=[];return await Promise.all(uV.map(async a=>{let i=function(e){if(!e)return null;try{let t=JSON.parse(e);return t?.data??null}catch{return null}}(await ee(a.cacheKey));if(null!=i)for(let n of a.parse(i))!(n.ts<t)&&(n.ts<=e||o.push({kind:"feed",source:a,entry:n}))})),o}function uZ(e){return"feed"===e.kind?`feed:${e.source.id}:${e.entry.id}`:`daily:${eB()}`}async function uX(){let e=await eH();if(!e)return[];let t=function(e,t=new Date){let o=[],a=eB(),i=new Set(e.lastResetDate===a?e.completedToday:[]);for(let a of e.missions){if(!a.time||i.has(a.id))continue;let[e,n]=a.time.split(":"),r=Number(e),s=Number(n);if(!Number.isFinite(r)||!Number.isFinite(s))continue;let l=new Date(t);l.setHours(r,s,0,0),l.getTime()>t.getTime()||o.push({mission:a,dueAt:l.getTime()})}return o.sort((e,t)=>t.dueAt-e.dueAt),o}(e);return 0===t.length?[]:[{kind:"daily",ts:t.reduce((e,t)=>t.dueAt<e?t.dueAt:e,t[0].dueAt),count:t.length,missions:t.map(e=>e.mission)}]}function u0(e){return"feed"===e.kind?e.entry.ts:e.ts}async function u1(e,t={}){let[o,a]=await Promise.all([uQ(e),uX()]),i=[...o,...a].filter(e=>!(uZ(e)in t));return i.sort((e,t)=>u0(t)-u0(e)),i.slice(0,30)}let u4=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,u2=l().div`
  position: fixed;
  inset: 0;
  z-index: ${d.w4.zIndex.dropdown};
`,u5=l().div`
  position: fixed;
  z-index: ${d.w4.zIndex.flyout};
  width: 360px;
  max-height: 480px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.borderStrong};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: ${d.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  animation: ${u4} 0.15s ease both;
  overflow: hidden;

  /* Override the inline { top, right } style on mobile so the panel spans
     the viewport with 12px gutters instead of its left edge going negative
     once width grows near 100vw. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    width: auto;
    max-width: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
  }
`,u3=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,u6=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
`,u8=l().button`
  background: none;
  border: none;
  color: ${d.w4.colors.accent};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  padding: 2px 4px;

  &:hover { color: ${d.w4.colors.accentHover}; }
  &:disabled { color: ${d.w4.colors.mainTextFaint}; cursor: not-allowed; }
`,u7=l().div`
  flex: 1;
  overflow-y: auto;
`,u9=l().div`
  position: relative;
  display: block;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.surfaceHover}; }
  &:hover .dismiss { opacity: 1; }
  &:last-child { border-bottom: none; }
`,he=l().a`
  display: block;
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: none;
  background: none;
  text-align: left;
  text-decoration: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
`,ht=l().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  background: transparent;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast}, background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.surfaceHover}; color: ${d.w4.colors.mainText}; }
  &:focus-visible { opacity: 1; outline: 2px solid ${d.w4.colors.accent}; outline-offset: 1px; }

  @media (hover: none) { opacity: 0.6; }
`,ho=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({color:e})=>e};

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({color:e})=>e};
  }

  .time {
    margin-left: auto;
    color: ${d.w4.colors.mainTextFaint};
  }
`,ha=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  line-height: 1.4;
  color: ${d.w4.colors.mainText};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,hi=l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-right: 6px;
  vertical-align: -2px;
`,hn=l().div`
  padding: 32px 16px;
  text-align: center;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
`;function hr({locale:e,state:t,anchor:o}){let n=(0,i.useMemo)(()=>tP(e,aK),[e]),{open:r,close:s,items:l,markAllRead:c,dismiss:d}=t;if(!r||!o)return null;let p=Math.round(o.bottom+8),m=Math.max(12,Math.round(window.innerWidth-o.right)),g=()=>{s(),window.location.hash="#/daily"};return ta().createPortal((0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u2,{onClick:s}),(0,a.jsxs)(u5,{style:{top:p,right:m},role:"dialog","aria-label":n("notifications.title"),children:[(0,a.jsxs)(u3,{children:[(0,a.jsx)(u6,{children:n("notifications.title")}),(0,a.jsx)(u8,{onClick:c,disabled:0===l.length,children:n("notifications.markAllRead")})]}),(0,a.jsx)(u7,{children:0===l.length?(0,a.jsx)(hn,{children:n("notifications.empty")}):l.map((e,t)=>{if("daily"===e.kind){let t,o,i,r=1===e.count?n("notifications.daily.group.one"):n("notifications.daily.group.many",{count:e.count}),s=e.missions.slice(0,4);return(0,a.jsxs)(u9,{children:[(0,a.jsxs)(he,{as:"button",type:"button",onClick:g,children:[(0,a.jsxs)(ho,{color:uW,children:[(0,a.jsx)("span",{className:"dot"}),n("notifications.source.daily"),(0,a.jsx)("span",{className:"time",children:(o=String((t=new Date(e.ts)).getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),`${o}:${i}`)})]}),(0,a.jsxs)(ha,{children:[(0,a.jsx)(hi,{children:s.map(e=>tR(e.emoji)?(0,a.jsx)(tB,{name:e.emoji,size:14,style:{color:e.color??uW}},e.id):(0,a.jsx)("span",{children:e.emoji},e.id))}),r]})]}),(0,a.jsx)(ht,{type:"button",className:"dismiss","aria-label":n("notifications.dismiss"),title:n("notifications.dismiss"),onClick:t=>{t.stopPropagation(),d(e)},children:"\xd7"})]},`daily-${eB()}`)}let{source:o,entry:i}=e,r=i.link?{href:i.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>{d(e)}}:{as:"button",type:"button",onClick:()=>{d(e)}};return(0,a.jsxs)(u9,{children:[(0,a.jsxs)(he,{...r,children:[(0,a.jsxs)(ho,{color:o.badgeColor,children:[(0,a.jsx)("span",{className:"dot"}),n(o.badgeKey),(0,a.jsx)("span",{className:"time",children:tL(new Date(i.ts).toISOString(),n)})]}),(0,a.jsx)(ha,{children:i.title})]}),(0,a.jsx)(ht,{type:"button",className:"dismiss","aria-label":n("notifications.dismiss"),title:n("notifications.dismiss"),onClick:t=>{t.stopPropagation(),d(e)},children:"\xd7"})]},`${o.id}-${i.id}-${t}`)})})]})]}),document.body)}let hs={"stockpulse.enabled":!0},hl={movies:e=>({apiKey:e.tmdbKey}),games:e=>({isAuthenticated:!!e.user})},hc=l().div`
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  animation: fadeSlideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  height: 100%;
`,hd=(0,c.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,hp=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid ${d.w4.colors.success};
  background: ${d.w4.colors.surface};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.success};
  letter-spacing: 0.02em;
  user-select: none;
  opacity: 0.9;
`,hm=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${d.w4.colors.success};
  flex-shrink: 0;
  animation: ${hd} 2s ease-in-out infinite;
`,hg={techscope:9,weather:1,citypulse:1};function hu({count:e}){return(0,a.jsxs)(hp,{title:`${e} live ${1===e?"feed":"feeds"}`,children:[(0,a.jsx)(hm,{}),e,(0,a.jsx)("span",{style:{opacity:.65,fontSize:10},children:"LIVE"})]})}let hh=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${d.w4.spacing.xl};
  background: ${d.w4.colors.mainBg};
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  gap: ${d.w4.spacing.lg};
`,hf=(l().code`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: ${d.w4.typography.fontSizeSm};
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  color: ${d.w4.colors.mainText};
  padding: 8px 14px;
  border-radius: ${d.w4.borderRadius.sm};
`,l().div`
  font-size: 48px;
  line-height: 1;
  opacity: 0.6;
`),hx=l().h2`
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 600;
`,hy=l().p`
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeBase};
  max-width: 360px;
  text-align: center;
  line-height: 1.5;
`,hb=l().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};
  margin-top: ${d.w4.spacing.sm};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    border-color: ${d.w4.colors.accent};
  }
`;function hw({name:e,error:t,topBarRight:o,onRetry:n}){let[r]=tF(),s=(0,i.useMemo)(()=>tP(r,aK),[r]),l=t.message??"",c=l.startsWith("REMOTE_LOAD_FAILED:"),p=c?l.slice(19):e,m=`apps.${p}.label`,g=s(m),u=g&&g!==m?g:p;return(0,a.jsx)(P,{title:u,sidebar:null,topBarRight:o,children:(0,a.jsxs)(hh,{children:[(0,a.jsx)(hf,{children:"⚠"}),(0,a.jsx)(hx,{children:s("error.remote.title",{name:u})}),(0,a.jsx)(hy,{children:s(c?"error.remote.prodHint":"error.remote.generic")}),c&&!1,(0,a.jsxs)("div",{style:{display:"flex",gap:d.w4.spacing.sm},children:[(0,a.jsx)(hb,{onClick:n,children:s("error.remote.retry")}),(0,a.jsx)(hb,{onClick:()=>{window.location.hash="#/home"},children:s("error.remote.goHome")})]})]})})}class h$ extends n().Component{static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){console.error(`[RemoteErrorBoundary] "${this.props.name}" threw:`,e)}componentDidUpdate(e){e.name!==this.props.name&&this.state.error&&this.setState({error:null})}render(){return this.state.error?(0,a.jsx)(hw,{name:this.props.name,error:this.state.error,topBarRight:this.props.topBarRight,onRetry:()=>this.setState({error:null})}):this.props.children}constructor(...e){super(...e),function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(this,"state",{error:null})}}let hv=(()=>{let e={settings:"settings"};for(let t of aI)for(let o of(e[t.hash.replace(/^#\//,"")]=t.id,t.hashAliases??[]))e[o]=t.id;return e})();function hk(e){let t=e.replace(/^#\/?/,"");return t&&"home"!==t?hv[t.split("/")[0].split("?")[0]]??"home":"home"}let hj="shell:recent",hz="shell:pinned",hM="shell:last-app";function hS(){let e=window.location.hash;if(!e||"#"===e||"#/"===e)try{let e=localStorage.getItem(hM);if(e&&"home"!==e&&aT[e]){let t=aI.find(t=>t.id===e);if(t)return history.replaceState(null,"",t.hash),e}}catch{}return hk(e)}function hT(e){try{return JSON.parse(e??"[]")}catch{return[]}}let hA=new Set(aI.filter(e=>e.needsAuth).map(e=>e.id)),hC="true"===process.env.MOCK_USER?{id:"mock-user",email:"dev@atlantis.local",user_metadata:{full_name:"Dev User",avatar_url:""}}:null,hF=document.getElementById("root");if(!hF)throw Error("Root element #root not found");(0,r.createRoot)(hF).render((0,a.jsx)(function(){let e,[t,o]=(0,i.useState)(hS),[n,r]=(0,i.useState)([]),[s,l]=(0,i.useState)([]),[c,p]=(0,i.useState)(hC),[m,g]=(0,i.useState)(!!hC),[u,h]=(0,i.useState)(!1),[f,x]=(0,i.useState)(void 0),[y,b]=(0,i.useState)(!1),[w,$]=(0,i.useState)(!1),[v,k]=tF(),j=(0,i.useMemo)(()=>tP(v,aK),[v]),z=function(e={}){let[t,o]=(0,i.useState)([]),[a,n]=(0,i.useState)(!1),r=(0,i.useRef)(0),s=(0,i.useRef)({}),l=(0,i.useRef)(null),c=(0,i.useRef)(e.formatDailyReminder);(0,i.useEffect)(()=>{c.current=e.formatDailyReminder},[e.formatDailyReminder]);let d=(0,i.useCallback)(async()=>{let e=await u1(r.current,s.current);if(o(e),"u">typeof window&&"Notification"in window&&"granted"===Notification.permission){let t=e.find(e=>"daily"===e.kind),o=eB();if(t&&"daily"===t.kind&&l.current!==o){l.current=o;let e=c.current?.(t.missions[0]);if(e)try{new Notification(e.title,{body:e.body,tag:`atlantis-daily-${o}`,icon:"/manifest-icon.png"})}catch{}}}},[]);(0,i.useEffect)(()=>{let e=!1;(async()=>{let[t,o]=await Promise.all([ea(uY),uJ()]);r.current=t&&Number(t)||0,s.current=o,e||d()})();let t=window.setInterval(d,6e4),o=()=>d(),a=()=>d();return window.addEventListener("focus",o),window.addEventListener(eK,a),()=>{e=!0,window.clearInterval(t),window.removeEventListener("focus",o),window.removeEventListener(eK,a)}},[d]);let p=(0,i.useCallback)(()=>n(e=>!e),[]),m=(0,i.useCallback)(()=>n(!1),[]),g=(0,i.useCallback)(async()=>{let e=Date.now();r.current=e,await eo(uY,String(e));let t=eB();s.current={...s.current,[`daily:${t}`]:e},await eo(uG,JSON.stringify(s.current)),o([])},[]),u=(0,i.useCallback)(async e=>{let t=uZ(e),a=Date.now();s.current={...s.current,[t]:a},await eo(uG,JSON.stringify(s.current)),o(e=>e.filter(e=>uZ(e)!==t))},[]);return{count:t.length,open:a,toggle:p,close:m,items:t,markAllRead:g,dismiss:u}}({formatDailyReminder:(0,i.useCallback)(e=>{let t=eq(e,v),o=e.emoji?`${e.emoji} ${t}`.trim():t;return{title:j("notifications.source.daily"),body:j("notifications.daily.body",{time:e.time??"",name:o})}},[j,v])}),[M,S]=(0,i.useState)(null);(0,i.useEffect)(()=>{if(hC)return;m9.auth.getSession().then(({data:e})=>{let t=e.session?.user??null;p(t),et=(t?gm:null)??Z,g(!0)});let{data:{subscription:e}}=m9.auth.onAuthStateChange((e,t)=>{let o=t?.user??null;p(o),et=(o?gm:null)??Z});return()=>e.unsubscribe()},[]),(0,i.useEffect)(()=>{ea(hj).then(e=>r(hT(e))),ea(hz).then(e=>l(hT(e)))},[]),(0,i.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"k"===e.key&&(e.preventDefault(),x(void 0),h(e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,i.useEffect)(()=>{let e=e=>{let t=e.detail;x(t?.scope),h(!0)};return window.addEventListener("atlantis:open-palette",e),()=>window.removeEventListener("atlantis:open-palette",e)},[]),(0,i.useEffect)(()=>{let e=()=>o(hk(window.location.hash));return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),(0,i.useEffect)(()=>{if(t&&"home"!==t){try{localStorage.setItem(hM,t)}catch{}r(e=>{let o=[t,...e.filter(e=>e!==t)].slice(0,8);return eo(hj,JSON.stringify(o)),o})}},[t]);let T=(0,i.useCallback)(e=>{window.location.hash=e,h(!1),x(void 0)},[]),A=(0,i.useCallback)(e=>{window.location.hash=`#/home?suite=${encodeURIComponent(e)}`},[]),[C]=eM(),F=(0,i.useMemo)(()=>aI.filter(e=>e.flag?function(e){try{let t=localStorage.getItem("shell:flag:"+e);if("true"===t)return!0;if("false"===t)return!1}catch{}return hs[e]??!1}(e.flag):e.enabled).filter(e=>"hidden"!==aD(e)).filter(e=>!eS(C)||!e.interest||C.interests.includes(e.interest)),[C]),L=(0,i.useMemo)(()=>{let e=aB.map(e=>({id:e.id,name:j(e.labelKey),iconName:e.iconName,hash:e.hash,accentColor:e.color,onClick:()=>{window.location.hash=e.hash}}));return aR.map(t=>{let o=F.filter(e=>e.suite===t.yamlSuite),a="games"===t.id;return{id:t.id,name:j(t.nameKey),subtitle:j(t.subKey),color:t.color,icon:t.icon,count:a?aB.length:o.length,onClick:a?void 0:()=>A(t.id),children:a?e:void 0}})},[F,j,A]),E=(0,i.useMemo)(()=>L.filter(e=>e.count>0),[L]),N=(0,i.useMemo)(()=>E.map(e=>({id:e.id,name:e.name,sub:e.subtitle,color:e.color,iconName:e.icon,onConfirm:()=>A(e.id)})),[E,A]),D=(0,i.useMemo)(()=>aB.map(e=>({id:e.id,name:j(e.labelKey),iconName:e.iconName,hash:e.hash,color:e.color})),[j]),I=(0,i.useMemo)(()=>[{id:"add-widget",label:j("palette.action.addWidget"),meta:j("palette.action.addWidget.meta"),iconName:"plus",color:d.w4.colors.accent,onClick:()=>{window.location.hash="#/home";try{sessionStorage.setItem(pA,"1")}catch{}window.dispatchEvent(new CustomEvent("atlantis:open-widget-picker"))}},{id:"preferences",label:j("palette.action.preferences"),meta:j("palette.action.preferences.meta"),iconName:"settings",onClick:()=>b(!0)},{id:"settings",label:j("palette.action.settings"),meta:j("palette.action.settings.meta"),iconName:"sparkle",onClick:()=>{window.location.hash="#/settings"}},{id:"language",label:j("palette.action.language"),meta:"pt"===v?"PT → EN":"EN → PT",iconName:"globe",onClick:()=>k("pt"===v?"en":"pt")},...z.count>0?[{id:"clear-notifications",label:j("palette.action.clearNotifications"),meta:j("palette.action.clearNotifications.meta",{n:z.count}),iconName:"bell",color:d.w4.colors.accent,onClick:()=>{z.markAllRead()}}]:[],...c?[{id:"signout",label:j("palette.action.signout"),meta:c.email??"",iconName:"arrow-up-right",color:d.w4.colors.danger,onClick:()=>{gt()}}]:[]],[j,v,k,c,z]),[R,B]=(0,i.useState)(null);(0,i.useEffect)(()=>{eW().then(B)},[]);let H=null!==eG()||!!R,K=(0,i.useMemo)(()=>F.map(({id:e,labelKey:t,hash:o})=>({id:e,label:j(t),hash:o})),[F,j]),_=(0,i.useMemo)(()=>F.map(({id:e,labelKey:t,descriptionKey:o,hash:a,icon:i,color:n,category:r})=>({id:e,label:j(t),description:j(o),hash:a,icon:i,color:n,category:r})),[F,j]),q=(e=aI.find(e=>e.id===t))?j(e.labelKey):t;if(!m)return(0,a.jsx)(O,{children:(0,a.jsx)(eR,{})});if(hA.has(t)&&!c)return(0,a.jsx)(O,{children:(0,a.jsx)(gp,{appLabel:q,onBack:()=>{window.location.hash="#/home"}})});let Y=hg[t],G=e=>{S(e.currentTarget.getBoundingClientRect()),z.toggle()},W=(0,a.jsx)(t7,{locale:v,onLocaleChange:k,before:null!=Y?(0,a.jsx)(hu,{count:Y}):void 0,suites:{entries:E,label:j("suites.label"),ariaLabel:j("suites.aria"),appsLabel:j("suites.appsCount")},notifications:{count:z.count,onClick:G,label:j("notifications.bell")},onOpenPalette:()=>{x(void 0),h(!0)},paletteLabel:j("palette.search"),user:c?{name:c.user_metadata?.full_name,email:c.email??"",avatarUrl:c.user_metadata?.avatar_url}:void 0,userMenuItems:c?[{label:j("userMenu.preferences"),icon:(0,a.jsx)(tj.A,{size:14}),onClick:()=>b(!0)},{label:j("userMenu.settings"),icon:(0,a.jsx)(aw.A,{size:14}),onClick:()=>{window.location.hash="#/settings"}},{label:j("userMenu.clearData"),icon:(0,a.jsx)(a$.A,{size:14}),onClick:()=>$(!0),danger:!0},{label:j("userMenu.signOut"),icon:(0,a.jsx)(av.A,{size:14}),onClick:gt,danger:!0}]:[],userMenuControlLabels:{language:j("userMenu.language"),theme:j("userMenu.theme"),themeLight:j("userMenu.themeLight"),themeDark:j("userMenu.themeDark"),themeSystem:j("userMenu.themeSystem")},onSignIn:()=>{window.location.hash="#/home"}}),J=u&&(0,a.jsx)(g0,{apps:_,recentIds:n,suites:N,games:D,actions:I,hasAsk:H,groqKey:R??void 0,locale:v,initialScope:f,onNavigate:T,onClose:()=>{h(!1),x(void 0)}}),U=!u&&(0,a.jsx)(g2,{t:j,onOpenPalette:()=>{x(void 0),h(!0)}}),V=(0,a.jsx)(uq,{open:y,onClose:()=>b(!1),locale:v}),Q=(0,a.jsx)(eg,{open:w,title:j("userMenu.clearData"),message:j("userMenu.clearDataConfirm"),confirmLabel:j("userMenu.clearData"),cancelLabel:j("common.cancel"),danger:!0,onCancel:()=>$(!1),onConfirm:async()=>{$(!1),await ei(""),window.location.reload()}}),X=(0,a.jsx)(hr,{locale:v,state:z,anchor:M});if("home"===t)return(0,a.jsxs)(O,{children:[(0,a.jsx)(hc,{children:(0,a.jsx)(m7,{apps:K,recentAppIds:n,pinnedAppIds:s,onTogglePin:e=>{l(t=>{let o=t.includes(e)?t.filter(t=>t!==e):[...t,e];return eo(hz,JSON.stringify(o)),o})},onMovePinned:(e,t)=>{l(o=>{let a=o.indexOf(e);if(a<0)return o;let i=a+t;if(i<0||i>=o.length)return o;let n=[...o];return[n[a],n[i]]=[n[i],n[a]],eo(hz,JSON.stringify(n)),n})},onSelect:e=>{window.location.hash=e.hash},user:c?{name:c.user_metadata?.full_name,email:c.email??"",avatarUrl:c.user_metadata?.avatar_url}:null,onSignOut:gt,onPreferences:()=>b(!0),onClearData:()=>$(!0),onOpenPalette:()=>{x(void 0),h(!0)},notifications:{count:z.count,onClick:G,label:j("notifications.bell")},suites:{entries:E,label:j("suites.label"),ariaLabel:j("suites.aria"),appsLabel:j("suites.appsCount")}})},"home"),J,U,V,Q,X]});let ee=aT[t],en=hl[t]?.({user:c,tmdbKey:"9b6f2645abf1725625c843aa71e3efd5"})??{};return(0,a.jsxs)(O,{children:[(0,a.jsx)(h$,{name:t,topBarRight:W,children:(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(eR,{}),children:(0,a.jsxs)(hc,{children:[ee&&(0,a.jsx)(ee,{topBarRight:W,...en}),"settings"===t&&(0,a.jsx)(P,{title:"Settings",sidebar:null,topBarRight:W,children:(0,a.jsx)(uM,{lang:"pt"===v?"pt":"en"})})]},t)})}),J,U,V,Q,X]})},{}))},87330(e,t,o){o.d(t,{FlyoutPanel:()=>eL});var a=o(65723),i=o(37991),n=o.n(i),r=o(36859),s=o.n(r),l=o(72799),c=o(20255),d=o(81316),p=o(40814),m=o(36896),g=o(87902),u=o(53013),h=o(32887),f=o(49510),x=o(39848),y=o(37901),b=o(3045),w=o(43775),$=o(41783),v=o(83539),k=o(39416),j=o(1837),z=o(57167),M=o(84494),S=o(82314),T=o(35751),A=o(69633),C=o(92946),F=o(40822),P=o(36720),L=o(57400),E=o(58456),N=o(43317),D=o(52709),I=o(8006),R=o(89301),B=o(37561),H=o(83517),K=o(28207),O=o(37032),_=o(6949),q=o(8218),Y=o(36829),G=o(59591),W=o(15553),J=o(69923),U=o(72820),V=o(14621),Q=o(68479),Z=o(72534),X=o(66673),ee=o(67490),et=o(49033),eo=o(99038),ea=o(45775),ei=o(31365),en=o(62937),er=o(9821),es=o(65912),el=o(80158),ec=o(88641),ed=o(48607),ep=o(83249),em=o(1821),eg=o(15889),eu=o(89655),eh=o(27170),ef=o(19161),ex=o(71849),ey=o(41604),eb=o(13142),ew=o(61187),e$=o(77747),ev=o(2932),ek=o(24525),ej=o(57230),ez=o(22164);let eM={activity:m.A,"a-large-small":g.A,apple:u.A,"arrow-right":h.A,"bar-chart-2":f.A,book:x.A,"book-open":y.A,briefcase:b.A,calendar:w.A,clock:$.A,"circle-dot":v.A,cloud:k.A,compass:j.A,cpu:z.A,droplets:M.A,feather:S.A,file:c.A,"file-text":T.A,folder:A.A,"git-branch":C.A,github:F.A,globe:P.A,grid:L.A,hand:E.A,hash:N.A,heart:D.A,key:I.A,hexagon:R.A,home:B.A,landmark:H.A,layers:K.A,"layout-grid":O.A,leaf:_.A,lightbulb:q.A,list:Y.A,map:G.A,"map-pin":W.A,"message-circle":J.A,"message-square":U.A,minus:V.A,monitor:Q.A,mountain:Z.A,package:X.A,palette:ee.A,"pen-tool":et.A,"pie-chart":eo.A,plane:ea.A,plus:ei.A,ruler:en.A,shirt:er.A,slash:es.A,square:el.A,star:ec.A,sun:ed.A,terminal:ep.A,thermometer:em.A,triangle:eg.A,trophy:eu.A,truck:eh.A,type:ef.A,users:ex.A,"volume-2":ey.A,watch:eb.A,waves:ew.A,wind:e$.A,wrench:ev.A,x:ek.A,zap:ej.A,bot:ez.A},eS=(0,l.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,eT=s().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.accentMuted};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${eS} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
    background: ${d.w4.colors.accent};
    opacity: 0.4;
  }
`,eA=s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.accent};
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  font-family: ${d.w4.typography.fontFamily};
`,eC=s().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${d.w4.colors.accentMuted};
    color: ${d.w4.colors.mainText};
  }
`;function eF({iconKey:e}){let t=e?eM[e]??c.A:c.A;return(0,a.jsx)(t,{size:14,strokeWidth:1.75})}function eP({entries:e,activeId:t,onSelect:o}){return(0,a.jsx)(a.Fragment,{children:e.map(e=>e.children?(0,a.jsx)(n().Fragment,{children:(0,a.jsx)(eP,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,a.jsxs)(eC,{active:t===e.id,onClick:()=>o(e),children:[(0,a.jsx)(eF,{iconKey:e.icon}),e.name]},e.id))})}function eL({activeId:e}){let{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:i}=(0,p.c)();if(!t)return null;let n=t.entry.icon?eM[t.entry.icon]??c.A:c.A;return(0,a.jsxs)(eT,{anchorY:t.anchorY,onMouseEnter:i,onMouseLeave:o,children:[(0,a.jsxs)(eA,{children:[(0,a.jsx)(n,{size:13,strokeWidth:2}),t.entry.name]}),(0,a.jsx)(eP,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},40814(e,t,o){o.d(t,{I:()=>i,c:()=>n});var a=o(37991);let i=(0,a.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,a.useContext)(i)},81316(e,t,o){o.d(t,{EE:()=>r,w4:()=>s});let a={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},i={sidebarBg:"#eef0f5",sidebarText:"#1f2937",sidebarTextMuted:"#6b7280",sidebarActive:"#4f46e5",sidebarActiveBg:"#ede9fe",sidebarHover:"#dde1e8",sidebarBorder:"#d7dbe3",mainBg:"#f5f6fa",mainText:"#111827",mainTextMuted:"#4b5563",mainTextFaint:"rgba(17,24,39,0.42)",accent:"#4f46e5",accentHover:"#6366f1",accentMuted:"rgba(79,70,229,0.12)",codeBg:"#eef0f5",codeBorder:"#d7dbe3",border:"#cfd4de",borderStrong:"rgba(15,23,42,0.18)",borderSubtle:"#e2e5eb",surface:"#ffffff",surfaceRaised:"#fbfbfd",surfaceHover:"#eef1f7",success:"#059669",warning:"#d97706",danger:"#dc2626",shadow:"rgba(15, 23, 42, 0.08)",shadowStrong:"rgba(15, 23, 42, 0.14)",suiteLab:"#5a4acf",suiteVida:"#4f9b6a",suiteLearn:"#3f7ea8",suiteGames:"#d94e85",suiteEnt:"#c47736"},n="--at-";function r(e){let t="dark"===e?a:i;return Object.keys(t).map(e=>`${n}${e}: ${t[e]};`).join("\n  ")}let s={colors:function(){let e={};for(let t of Object.keys(a))e[t]=`var(${n}${t})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${n}suiteLab)`,vida:`var(${n}suiteVida)`,learn:`var(${n}suiteLearn)`,games:`var(${n}suiteGames)`,ent:`var(${n}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}}}]);