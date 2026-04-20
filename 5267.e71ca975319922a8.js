"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["5267"],{38542(e,t,o){var a=o(65723),i=o(37991),r=o.n(i),n=o(58997),s=o(36859),l=o.n(s),c=o(72799),d=o(81316);l().button`
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
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function F(){return(0,a.jsx)(w,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,t)=>(0,a.jsx)($,{index:t,accent:e.accent,children:e.char},t))})}let C="atlantis:sidebar-collapsed";function L({sidebar:e,children:t,topBarRight:n,title:s="Atlantis",activeId:l=null}){let[c,d]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(C)}catch{return!1}}),[g,u]=(0,i.useState)(null),h=(0,i.useRef)(),b=()=>d(e=>{let t=!e;try{localStorage.setItem(C,String(t))}catch{}return t}),w=r().useMemo(()=>r().lazy(()=>Promise.resolve().then(o.bind(o,87330)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,a.jsx)(m.I.Provider,{value:{collapsed:c,toggle:b,flyout:g,openFlyout:(e,t,o)=>{clearTimeout(h.current),u({entry:e,anchorY:t,onSelect:o})},scheduleFlyoutClose:()=>{h.current=setTimeout(()=>u(null),160)},cancelFlyoutClose:()=>clearTimeout(h.current)},children:(0,a.jsxs)(z,{children:[(0,a.jsxs)(f,{children:[e&&(0,a.jsx)(x,{children:(0,a.jsx)(y,{onClick:b,title:c?"Expand sidebar":"Collapse sidebar",children:(0,a.jsx)(p.A,{size:17})})}),(0,a.jsx)(F,{}),s&&(0,a.jsx)(v,{children:s}),n&&(0,a.jsx)(k,{children:n})]}),(0,a.jsxs)(j,{children:[null!=e&&(0,a.jsx)(M,{collapsed:c,children:(0,a.jsx)(S,{children:e})}),(0,a.jsx)(T,{children:t})]}),g&&(0,a.jsx)(r().Suspense,{fallback:null,children:(0,a.jsx)(w,{activeId:l})})]})})}l().div`
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
`;let E=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;l().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${E} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,o(87330);var P=o(61920),N=o(48607),D=o(68479);let R=(0,i.createContext)({mode:"dark",resolvedMode:"dark",setMode:()=>{}}),B="atlantis:theme-mode";function I(){return"u"<typeof window?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}let H="atlantis-webfonts";function _({resolvedMode:e}){let t=(0,i.useMemo)(()=>(0,d.EE)(e),[e]);return(0,a.jsx)(c.Global,{styles:(0,c.css)`
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
      `})}function O({children:e}){let[t,o]=(0,i.useState)(()=>{try{let e=localStorage.getItem(B);if("dark"===e||"light"===e||"system"===e)return e}catch{}return"dark"}),[r,n]=(0,i.useState)(()=>"system"===t?I():t),s=(0,i.useCallback)(e=>{o(e);try{localStorage.setItem(B,e)}catch{}},[]);(0,i.useEffect)(()=>{if("system"!==t)return void n(t);n(I());let e=window.matchMedia("(prefers-color-scheme: light)"),o=e=>{n(e.matches?"light":"dark")};return e.addEventListener("change",o),()=>e.removeEventListener("change",o)},[t]),(0,i.useEffect)(()=>{document.documentElement.setAttribute("data-theme",r)},[r]),(0,i.useEffect)(()=>{!function(){if("u"<typeof document||document.getElementById(H))return;let e=document.createElement("link");e.id=H,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap",document.head.appendChild(e)}()},[]);let l=(0,i.useMemo)(()=>({mode:t,resolvedMode:r,setMode:s}),[t,r,s]);return(0,a.jsxs)(R.Provider,{value:l,children:[(0,a.jsx)(_,{resolvedMode:r}),e]})}function K(){return(0,i.useContext)(R)}let q=l().button`
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
`,G=["dark","light","system"],U={dark:P.A,light:N.A,system:D.A},Y={dark:"Dark mode (click for light)",light:"Light mode (click for system)",system:"System mode (click for dark)"};function W(){let{mode:e,setMode:t}=K(),o=U[e];return(0,a.jsx)(q,{onClick:()=>{let o=G.indexOf(e);t(G[(o+1)%G.length])},title:Y[e],children:(0,a.jsx)(o,{size:16,strokeWidth:1.75})})}[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);var V=o(1310);l().div`
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
`;let J=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Q=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`,Z=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${d.w4.spacing.md};
  animation: ${J} 0.15s ease both;
`,X=l().div`
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
  animation: ${Q} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,ee=l().div`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?d.w4.colors.danger:d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
`,et=l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
`,eo=l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${d.w4.spacing.sm};
`,ea=l().button`
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
`;function ei({open:e,title:t,message:o,confirmLabel:r,cancelLabel:n,onConfirm:s,onCancel:l,danger:c=!1}){return((0,i.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&l(),"Enter"===e.key&&s()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e,l,s]),e)?(0,a.jsx)(Z,{onClick:l,role:"dialog","aria-modal":"true","aria-label":t,children:(0,a.jsxs)(X,{danger:c,onClick:e=>e.stopPropagation(),children:[(0,a.jsx)(ee,{danger:c,children:t}),(0,a.jsx)(et,{children:o}),(0,a.jsxs)(eo,{children:[(0,a.jsx)(ea,{onClick:l,children:n}),(0,a.jsx)(ea,{danger:c,primary:!c,onClick:s,autoFocus:!0,children:r})]})]})}):null}function er(e,t){let o=t?Object.entries(t).filter(([,e])=>void 0!==e&&""!==e).map(([e,t])=>`${encodeURIComponent(e)}=${encodeURIComponent(String(t))}`).join("&"):"";window.location.hash=o?`#/${e}?${o}`:`#/${e}`}l().div`
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
`,l().div`
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
`;let en=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,es=(0,c.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,el=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`,ec=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  animation: ${en} 0.4s ease 0.15s both;
`,ed=l().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,ep=l().div`
  position: absolute;
  inset: 0;
  animation: ${es} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,em=l().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${d.w4.colors.border};
  animation: ${el} 1.4s ease-in-out infinite;
`,eg=l().span`
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`;function eu({label:e="Loading…"}){return(0,a.jsxs)(ec,{children:[(0,a.jsxs)(ed,{children:[(0,a.jsx)(ep,{delay:0,size:8,color:d.w4.colors.accent}),(0,a.jsx)(ep,{delay:-.45,size:6,color:"#bc8cff"}),(0,a.jsx)(ep,{delay:-.9,size:5,color:"#3fb950"}),(0,a.jsx)(em,{})]}),(0,a.jsx)(eg,{children:e})]})}let eh="atlantis:api-keys";function ef(){if("u"<typeof process)return null;let e=process.env?.GROK_API_KEY;return e&&0!==e.length?e:null}async function ex(){try{let e=await (0,V.getSetting)(eh);if(e){let t=JSON.parse(e);if(t.groq&&t.groq.length>0)return t.groq}}catch{}let e=function(){if("u"<typeof localStorage)return null;try{let e=localStorage.getItem(eh);if(e){let t=JSON.parse(e);if(t.groq&&t.groq.length>0)return t.groq}let t=localStorage.getItem("atlantis:promptlab:keys");if(t){let e=JSON.parse(t);if(e.groq&&e.groq.length>0)return e.groq}}catch{}return null}();return e||ef()}async function ey(e,t){let o="pt"===t.locale?"Portuguese":"English",a=t.system??`You are Atlantis, a concise personal-dashboard assistant.
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
around rendered blocks.`,i=(t.history??[]).slice(-6),r=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.key}`},body:JSON.stringify({model:"llama-3.1-8b-instant",messages:[{role:"system",content:a},...i,{role:"user",content:e}],temperature:.4,max_tokens:t.maxTokens??1024}),signal:t.signal}),n=await r.json();if(!r.ok)throw Error(n.error?.message??`Groq HTTP ${r.status}`);let s=n.choices?.[0]?.message?.content?.trim();if(!s)throw Error("Empty response from Groq");return s}var eb=o(48294);let ew={ghost:"transparent",accent:"transparent",primary:d.w4.colors.accent,success:"#238636",danger:"#da3633"},e$={ghost:d.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:d.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},ev={ghost:d.w4.colors.border,accent:d.w4.colors.accent,primary:d.w4.colors.accent,success:"#238636",danger:"#da3633"},ek={ghost:d.w4.colors.mainTextMuted,accent:d.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},ej={ghost:d.w4.colors.mainText,accent:d.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},ez={sm:"28px",md:"30px"},eM={sm:"0 10px",md:"0 12px"},eS={sm:"12px",md:"12px"},eT=l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>ez[e]};
  padding: ${({size:e})=>eM[e]};
  background: ${({variant:e})=>ew[e]};
  border: 1px solid ${({variant:e})=>ev[e]};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({variant:e})=>ek[e]};
  font-size: ${({size:e})=>eS[e]};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>e$[e]};
    color: ${({variant:e})=>ej[e]};
    border-color: ${({variant:e})=>"ghost"===e?d.w4.colors.accent:ev[e]};
  }

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,eA=r().forwardRef(function({variant:e="ghost",size:t="md",icon:o,iconRight:i,children:r,...n},s){return(0,a.jsxs)(eT,{ref:s,variant:e,size:t,...n,children:[o,r,i]})}),eF={default:d.w4.colors.accent,danger:"#f85149"},eC={default:d.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},eL=l().button`
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
    color: ${({tone:e})=>eF[e]};
    background: ${({tone:e})=>eC[e]};
    border-color: ${({tone:e})=>eF[e]};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,eE=r().forwardRef(function({active:e=!1,shape:t="square",tone:o="default",children:i,...r},n){return(0,a.jsx)(eL,{ref:n,active:e,shape:t,tone:o,...r,children:i})});l().div`
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
`;let eP=l().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,eN=l()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
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
`;function eD({tabs:e,value:t,onChange:o,className:i,"aria-label":r}){return(0,a.jsx)(eP,{role:"tablist","aria-label":r,className:i,children:e.map(e=>{let i=e.value===t;return(0,a.jsx)(eN,{type:"button",role:"tab","aria-selected":i,active:i,highlight:e.highlight,disabled:e.disabled,onClick:()=>o(e.value),children:e.label},e.value)})})}var eR=o(62727),eB=o.n(eR);let eI=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,eH=l().div`
  position: relative;
`,e_=l().button`
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
`,eO=l().img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,eK=l().div`
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
`,eq=l().span`
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
`,eG=l().div`
  position: fixed;
  min-width: 240px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${eI} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${d.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,eU=l().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,eY=l().img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`,eW=l().div`
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
`,eV=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,eJ=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,eQ=l().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,eZ=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,eX=l().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.md};
`,e0=l().button`
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
`,e1=l().button`
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
`;function e4({labels:e}){let{mode:t,setMode:o}=K(),i=[{value:"light",label:e?.themeLight??"Light"},{value:"dark",label:e?.themeDark??"Dark"},{value:"system",label:e?.themeSystem??"System"}];return(0,a.jsxs)(eQ,{children:[(0,a.jsx)(eZ,{children:e?.theme??"Theme"}),(0,a.jsx)(eX,{role:"radiogroup","aria-label":e?.theme??"Theme",children:i.map(({value:e,label:i})=>(0,a.jsx)(e0,{active:t===e,onClick:()=>o(e),role:"radio","aria-checked":t===e,children:i},e))})]})}function e2({user:e,items:t,compact:o=!1,locale:r,onLocaleChange:n,controlLabels:s,showThemeControl:l=!0}){let[c,d]=(0,i.useState)(!1),[p,m]=(0,i.useState)(null),g=(0,i.useRef)(null),u=(0,i.useRef)(null),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c)return;let e=e=>{let t=e.target;g.current?.contains(t)||h.current?.contains(t)||d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[c]),(0,i.useEffect)(()=>{c?u.current&&m(u.current.getBoundingClientRect()):m(null)},[c]);let f=e.name??e.email.split("@")[0],x=f[0]?.toUpperCase()??"?",y=p?{top:Math.round(p.bottom+8),right:Math.max(12,Math.round(window.innerWidth-p.right))}:{top:0,right:12};return(0,a.jsxs)(eH,{ref:g,children:[(0,a.jsxs)(e_,{ref:u,onClick:()=>d(e=>!e),children:[e.avatarUrl?(0,a.jsx)(eO,{src:e.avatarUrl,alt:f}):(0,a.jsx)(eK,{children:x}),!o&&(0,a.jsx)(eq,{children:f})]}),c&&eB().createPortal((0,a.jsxs)(eG,{ref:h,style:y,children:[(0,a.jsxs)(eU,{children:[e.avatarUrl?(0,a.jsx)(eY,{src:e.avatarUrl,alt:f}):(0,a.jsx)(eW,{children:x}),(0,a.jsx)(eV,{children:f}),(0,a.jsx)(eJ,{children:e.email})]}),void 0!==r&&n&&(0,a.jsxs)(eQ,{children:[(0,a.jsx)(eZ,{children:s?.language??"Language"}),(0,a.jsxs)(eX,{role:"radiogroup","aria-label":s?.language??"Language",children:[(0,a.jsx)(e0,{active:"pt"===r,onClick:()=>n("pt"),role:"radio","aria-checked":"pt"===r,children:"Portugu\xeas"}),(0,a.jsx)(e0,{active:"en"===r,onClick:()=>n("en"),role:"radio","aria-checked":"en"===r,children:"English"})]})]}),l&&(0,a.jsx)(e4,{labels:s}),t.map((e,t)=>(0,a.jsxs)(e1,{danger:e.danger,onClick:()=>{d(!1),e.onClick()},children:[e.icon,e.label]},t))]}),document.body)]})}var e5=o(17681),e3=o(69320),e6=o(19471);let e8={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},e7="atlantis:locale",e9="shell:locale";function te(e){return"en"===e||"pt"===e}function tt(){try{let e=localStorage.getItem(e7);if(te(e))return e}catch{}return"en"}function to(){let[e,t]=(0,i.useState)(tt),o=(0,i.useCallback)(e=>{t(e);try{localStorage.setItem(e7,e)}catch{}(0,V.putSetting)(e9,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,i.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,i.useEffect)(()=>{(0,V.getSetting)(e9).then(o=>{if(te(o)&&o!==e){try{localStorage.setItem(e7,o)}catch{}t(o)}}).catch(()=>{})},[]),[e,o]}function ta(e,t){let o=t?{...e8,...t}:e8;return(t,a)=>{let i=o[t]?.[e]??t;return a?Object.entries(a).reduce((e,[t,o])=>e.replace(RegExp(`\\{${t}\\}`,"g"),String(o)),i):i}}function ti(e,t){let o=Math.floor((Date.now()-new Date(e).getTime())/6e4);if(o<1)return t("time.justNow");if(o<60)return t("time.mAgo",{n:o});let a=Math.floor(o/60);return a<24?t("time.hAgo",{n:a}):t("time.dAgo",{n:Math.floor(a/24)})}(0,V.getSetting)(e9).then(e=>{if(te(e))try{localStorage.setItem(e7,e)}catch{}}).catch(()=>{});let tr=l().div`
  display: flex;
  gap: 4px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
`,tn=l().button`
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
`;function ts({locale:e,onChange:t}){return(0,a.jsxs)(tr,{children:[(0,a.jsx)(tn,{active:"pt"===e,onClick:()=>t("pt"),children:"PT"}),(0,a.jsx)(tn,{active:"en"===e,onClick:()=>t("en"),children:"EN"})]})}let tl={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>'};function tc(e){return Object.prototype.hasOwnProperty.call(tl,e)}function td({name:e,size:t=18,strokeWidth:o=1.5,...i}){let r=tl[e];return(0,a.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!i["aria-label"]||void 0,...i,dangerouslySetInnerHTML:{__html:r}})}Object.keys(tl);let tp=l().div`
  position: relative;
  display: inline-block;
`,tm=l().button`
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
`,tg=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${d.w4.colors.accentMuted};
  color: ${d.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`,tu=(0,c.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`,th=l().div`
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
  animation: ${tu} 0.18s ease both;

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
`,tf=l()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
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
`,tx=l()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ty=l().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,tb=l().span`
  font-size: 13.5px;
  color: ${d.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tw=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,t$=l()("span",{shouldForwardProp:e=>"accent"!==e})`
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
`,tv=l().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${d.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,tk=l().button`
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
`,tj=l().span`
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
`,tz=l().span`
  margin-left: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;function tM({label:e,ariaLabel:t,appsLabel:o,suites:n}){let[s,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null),p=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s)return;let e=e=>{p.current&&!p.current.contains(e.target)&&(l(!1),d(null))},t=e=>{"Escape"===e.key&&(l(!1),d(null))};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[s]);let m=n.reduce((e,t)=>e+t.count,0);return(0,a.jsxs)(tp,{ref:p,children:[(0,a.jsxs)(tm,{open:s,onClick:()=>l(e=>!e),"aria-haspopup":"menu","aria-expanded":s,"aria-label":t,children:[(0,a.jsx)("span",{children:e}),(0,a.jsx)(tg,{title:`${m} ${o}`,"aria-label":`${m} ${o}`,children:m}),(0,a.jsx)(td,{name:"chevron-down",size:12,"aria-hidden":"true"})]}),s&&(0,a.jsx)(th,{role:"menu",children:n.map(e=>{let t=c===e.id,i=!!(e.children&&e.children.length>0);return(0,a.jsxs)(r().Fragment,{children:[(0,a.jsxs)(tf,{accent:e.color,expanded:t,onClick:()=>{e.children&&e.children.length>0?d(t=>t===e.id?null:e.id):(e.onClick?.(),l(!1))},role:"menuitem","aria-expanded":i?t:void 0,children:[(0,a.jsx)(tx,{accent:e.color,children:(0,a.jsx)(td,{name:e.icon,size:18,"aria-hidden":"true"})}),(0,a.jsxs)(ty,{children:[(0,a.jsx)(tb,{children:e.name}),e.subtitle&&(0,a.jsx)(tw,{children:e.subtitle})]}),(0,a.jsx)(t$,{accent:e.color,title:`${e.count} ${o}`,"aria-label":`${e.count} ${o}`,children:e.count})]}),t&&i&&(0,a.jsx)(tv,{children:e.children.map(e=>(0,a.jsxs)(tk,{onClick:()=>{e.onClick(),l(!1),d(null)},role:"menuitem",children:[e.iconName?(0,a.jsx)(tj,{accent:e.accentColor,children:(0,a.jsx)(td,{name:e.iconName,size:14,"aria-hidden":"true"})}):e.glyph?(0,a.jsx)(tj,{accent:e.accentColor,children:e.glyph}):null,(0,a.jsx)("span",{children:e.name}),e.hash&&(0,a.jsx)(tz,{children:e.hash})]},e.id))})]},e.id)})})]})}let tS=l().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    gap: ${d.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,tT=l().button`
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
`,tA=l().button`
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
`,tF=l().div`
  position: relative;
  display: inline-flex;
`,tC=l().span`
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
`,tL=l().button`
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
`;function tE({locale:e,onLocaleChange:t,user:o,userMenuItems:i=[],userMenuControlLabels:r,suites:n,onPreferences:s,notifications:l,onOpenPalette:c,paletteLabel:d="Search",onSignIn:p,signInLabel:m="Sign in",before:g,after:u}){let h=function(){if("u"<typeof navigator)return"Ctrl";let e=navigator,t=e.userAgentData?.platform??navigator.platform??navigator.userAgent??"";return/Mac|iPod|iPhone|iPad/i.test(t)?"⌘":"Ctrl"}(),f="⌘"===h?`${h}K`:`${h}+K`;return(0,a.jsxs)(tS,{children:[g,n&&n.entries.length>0&&(0,a.jsx)(tM,{label:n.label,ariaLabel:n.ariaLabel,appsLabel:n.appsLabel,suites:n.entries}),c&&(0,a.jsxs)(tA,{onClick:c,"aria-label":d,title:`${d} (${f})`,children:[(0,a.jsx)(e5.A,{size:14}),(0,a.jsx)("span",{className:"kbd header-kbd",children:f})]}),!o&&(0,a.jsx)(ts,{locale:e,onChange:t}),!o&&(0,a.jsx)("span",{className:"header-hide-md",children:(0,a.jsx)(W,{})}),l&&(0,a.jsxs)(tF,{children:[(0,a.jsx)(tT,{onClick:l.onClick,"aria-label":l.label,title:l.label,children:(0,a.jsx)(td,{name:"bell",size:16})}),l.count>0&&(0,a.jsx)(tC,{"aria-hidden":"true",children:l.count>9?"9+":l.count})]}),s&&(0,a.jsx)("span",{className:"header-hide-md",children:(0,a.jsx)(tT,{onClick:s,"aria-label":"User preferences",title:"Preferences",children:(0,a.jsx)(e3.A,{size:16})})}),o?(0,a.jsx)(e2,{user:o,items:i,locale:e,onLocaleChange:t,controlLabels:r}):p?(0,a.jsxs)(tL,{onClick:p,"aria-label":m,children:[(0,a.jsx)(e6.A,{size:14}),m]}):null,u]})}l().div`
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
`;var tP=o(23318);let tN=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,tD=l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
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
  animation: ${tN} 0.4s ease both;
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
`,tR=l().div`
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
`,tB=l().div`
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
`,tI=l().div`
  padding: 6px 14px 16px;
`,tH=l().h3`
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
`,t_=l().p`
  margin: 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,tO=l().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${d.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.4;
`,tK=l().button`
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
`,tq=l().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast};
  z-index: 3;
`,tG={markdown:!0,school:!0,earth:!0,cosmos:!0,techscope:!0,citypulse:!0,stockpulse:!0,weather:!0,daily:!0,csvexplorer:!0,chartbuilder:!0,pad:!0,regexlab:!0,jsonexplorer:!0,codediff:!0,playground:!0,jwtinspector:!0,colorlab:!0,cronbuilder:!0,apiexplorer:!0,movies:!0,promptlab:!0,imagegen:!0,ask:!0,games:!0,devtools:!0},tU=["linear-gradient(135deg,#234b6b,#0d1024)","linear-gradient(135deg,#3e6060,#0e2424)","linear-gradient(135deg,#34578c,#0c1828)","linear-gradient(135deg,#6a4a7c,#2a1a34)","linear-gradient(135deg,#6d4d7c,#20102c)","linear-gradient(135deg,#b4503a,#30120b)","linear-gradient(135deg,#d94a4a,#4a1414)","linear-gradient(135deg,#d29922,#30280a)"],tY=[{bg:"linear-gradient(135deg,#ff6fa9,#4a1a2a)",glyph:"Qf"},{bg:"linear-gradient(135deg,#d86a6a,#3a1010)",glyph:"\xd7○",fg:"#fff"},{bg:"linear-gradient(135deg,#7fb77e,#0e2414)",glyph:"hz"},{bg:"linear-gradient(135deg,#e89a5c,#3a200e)",glyph:"\xa7"},{bg:"linear-gradient(135deg,#6aa8d8,#10283a)",glyph:"▦"},{bg:"linear-gradient(135deg,#c4b24a,#2a2410)",glyph:"◎"},{bg:"linear-gradient(135deg,#8b7bff,#1a1a40)",glyph:"✱"},{bg:"linear-gradient(135deg,#f97583,#3a1418)",glyph:"‼"}],tW=["#f78166","#d29922","#3fb950","#58a6ff","#a371f7"],tV=[40,65,52,78,30,88,45,70,58,82,35,62,72,48,90,55],tJ=[{bg:"linear-gradient(135deg,#d29922,#3a2a10)",glyph:"{}",active:!0},{bg:"linear-gradient(135deg,#58a6ff,#10243a)",glyph:"/~"},{bg:"linear-gradient(135deg,#a371f7,#1a1430)",glyph:"◐"},{bg:"linear-gradient(135deg,#3fb950,#10301a)",glyph:"▤"},{bg:"linear-gradient(135deg,#f78166,#3a200e)",glyph:"#"},{bg:"linear-gradient(135deg,#79c0ff,#14243a)",glyph:"Δ"},{bg:"linear-gradient(135deg,#c4b24a,#2a2410)",glyph:"◇"},{bg:"linear-gradient(135deg,#ff6fa9,#3a1424)",glyph:"*/"},{bg:"linear-gradient(135deg,#8b7bff,#1a1a40)",glyph:"⧖"},{bg:"linear-gradient(135deg,#6aa8d8,#10283a)",glyph:"⎈"},{bg:"linear-gradient(135deg,#e89a5c,#3a200e)",glyph:"⟶"},{bg:"linear-gradient(135deg,#7fb77e,#0e2414)",glyph:"∎"}];function tQ({vizId:e,label:t,description:o,hash:r,category:n,accentColor:s,needsAuth:l,pinned:c,index:p=0,onClick:m,onTogglePin:g,reorderControls:u,onHoverIntent:h,extra:f}){let x=Object.prototype.hasOwnProperty.call(tG,e)?e:"generic",y=(0,i.useRef)(null),b=(0,i.useRef)(!1),w=()=>{null!==y.current&&(window.clearTimeout(y.current),y.current=null)};return(0,i.useEffect)(()=>w,[]),(0,a.jsxs)(tD,{role:"button",tabIndex:0,accentColor:s,pinned:c,index:p,onClick:m,onMouseEnter:h?()=>{h&&!b.current&&(w(),y.current=window.setTimeout(()=>{b.current=!0,y.current=null,h()},200))}:void 0,onMouseLeave:h?w:void 0,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),m())},children:[u&&(0,a.jsx)(tq,{className:"pin-controls",children:u}),g&&(0,a.jsx)(tK,{className:"pin-btn",type:"button",pinned:!!c,"aria-label":c?"Unpin":"Pin to top",onClick:e=>{e.stopPropagation(),g?.()},children:(0,a.jsx)(tP.A,{size:14,fill:c?"currentColor":"none"})}),(0,a.jsx)(tR,{className:`viz viz--${x}`,accentColor:s,children:function(e,t,o){switch(e){case"markdown":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"h"}),(0,a.jsx)("span",{className:"l1"}),(0,a.jsx)("span",{className:"l2"}),(0,a.jsx)("span",{className:"l3"}),(0,a.jsx)("span",{className:"l4"})]});case"school":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"lb",children:"School"}),(0,a.jsx)("div",{className:"col"}),(0,a.jsx)("div",{className:"col"}),(0,a.jsx)("div",{className:"col"}),(0,a.jsx)("div",{className:"col"})]});case"earth":return(0,a.jsx)("div",{className:"g"});case"cosmos":case"citypulse":case"chartbuilder":return null;case"techscope":return(0,a.jsx)(a.Fragment,{children:tV.map((e,t)=>(0,a.jsx)("span",{style:{height:`${e}%`}},t))});case"stockpulse":return(0,a.jsx)(a.Fragment,{children:[0,1,0,0,1,0,0,0,1,0,0,0].map((e,t)=>(0,a.jsx)("div",{className:e?"c r":"c"},t))});case"csvexplorer":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"h",children:"id"}),(0,a.jsx)("span",{className:"h",children:"name"}),(0,a.jsx)("span",{className:"h",children:"qty"}),(0,a.jsx)("span",{className:"h",children:"px"}),(0,a.jsx)("span",{children:"01"}),(0,a.jsx)("span",{children:"alfa"}),(0,a.jsx)("span",{children:"12"}),(0,a.jsx)("span",{children:"1.2"}),(0,a.jsx)("span",{children:"02"}),(0,a.jsx)("span",{children:"beta"}),(0,a.jsx)("span",{children:"8"}),(0,a.jsx)("span",{children:"0.9"})]});case"pad":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"t"}),(0,a.jsx)("span",{className:"a"}),(0,a.jsx)("span",{className:"b"}),(0,a.jsx)("span",{className:"c"}),(0,a.jsx)("span",{className:"d"})]});case"regexlab":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"slash",children:"/"}),(0,a.jsx)("span",{children:"("}),(0,a.jsx)("span",{className:"hl",children:"[a-z]+"}),(0,a.jsx)("span",{children:")"}),(0,a.jsx)("span",{className:"slash",children:"/g"})]});case"jsonexplorer":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"b",children:"{"}),(0,a.jsx)("br",{}),"\xa0\xa0",(0,a.jsx)("span",{className:"k",children:'"user"'}),": ",(0,a.jsx)("span",{className:"v",children:'"dev"'}),",",(0,a.jsx)("br",{}),"\xa0\xa0",(0,a.jsx)("span",{className:"k",children:'"apps"'}),": ",(0,a.jsx)("span",{className:"b",children:"["}),(0,a.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,a.jsx)("span",{className:"v",children:'"markdown"'}),",",(0,a.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,a.jsx)("span",{className:"v",children:'"school"'}),(0,a.jsx)("br",{}),"\xa0\xa0",(0,a.jsx)("span",{className:"b",children:"]"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"b",children:"}"})]});case"codediff":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)("span",{className:"a"}),(0,a.jsx)("span",{className:"n",style:{width:"70%"}}),(0,a.jsx)("span",{className:"a"}),(0,a.jsx)("span",{className:"n",style:{width:"55%"}}),(0,a.jsx)("span",{className:"n"}),(0,a.jsx)("span",{className:"n",style:{width:"80%"}})]}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)("span",{className:"g"}),(0,a.jsx)("span",{className:"n",style:{width:"70%"}}),(0,a.jsx)("span",{className:"g"}),(0,a.jsx)("span",{className:"g"}),(0,a.jsx)("span",{className:"n",style:{width:"55%"}}),(0,a.jsx)("span",{className:"n",style:{width:"80%"}})]})]});case"playground":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"tube"}),(0,a.jsx)("div",{className:"tube",style:{height:45}}),(0,a.jsx)("div",{className:"tube",style:{height:50}})]});case"jwtinspector":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"h",children:"header"}),(0,a.jsx)("span",{className:"sep",children:"\xb7"}),(0,a.jsx)("span",{className:"p",children:"payload"}),(0,a.jsx)("span",{className:"sep",children:"\xb7"}),(0,a.jsx)("span",{className:"s",children:"sig"})]});case"colorlab":return(0,a.jsx)(a.Fragment,{children:tW.map(e=>(0,a.jsx)("span",{style:{background:e}},e))});case"cronbuilder":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"row","data-l":"m",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{})]}),(0,a.jsxs)("div",{className:"row","data-l":"h",children:[(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsxs)("div",{className:"row","data-l":"d",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{className:"on"}),(0,a.jsx)("span",{})]})]});case"weather":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"sun"}),(0,a.jsxs)("div",{className:"temp",children:["15",(0,a.jsx)("small",{children:"\xb0"})]})]});case"apiexplorer":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"get",children:"GET"})," ",(0,a.jsx)("span",{className:"url",children:"/api/v1/users/me"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"status",children:"200 OK"})," \xb7 42 ms"]}),(0,a.jsx)("div",{className:"echo",children:'→ { id: 1, role: "dev" }'})]});case"movies":return(0,a.jsx)(a.Fragment,{children:tU.map((e,t)=>(0,a.jsx)("span",{style:{background:e}},t))});case"promptlab":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"bubble",children:"Write a haiku about the fog at 6am."}),(0,a.jsx)("div",{className:"bubble r",children:"Low mist. Bridge lamps hum. The ferry horn splits the grey…"})]});case"imagegen":return(0,a.jsx)("div",{className:"frame"});case"ask":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"ask-user",children:"Como ajudo?"}),(0,a.jsx)("div",{className:"ask-spark","aria-hidden":"true"}),(0,a.jsxs)("div",{className:"ask-reply",children:[(0,a.jsx)("span",{className:"h"}),(0,a.jsx)("span",{className:"b1"}),(0,a.jsx)("span",{className:"b2"}),(0,a.jsx)("span",{className:"b3"})]})]});case"devtools":return(0,a.jsx)(a.Fragment,{children:tJ.map((e,t)=>(0,a.jsx)("span",{className:e.active?"active":"",style:{background:e.bg},children:e.glyph},t))});case"daily":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"ring r1"}),(0,a.jsx)("div",{className:"ring r2"}),(0,a.jsx)("div",{className:"ring r3"}),(0,a.jsx)("div",{className:"dot"})]});case"games":return(0,a.jsx)(a.Fragment,{children:tY.map((e,t)=>(0,a.jsx)("span",{style:{background:e.bg,color:e.fg??d.w4.colors.mainText},children:e.glyph},t))});default:return(0,a.jsx)("span",{className:"viz-mono",style:{color:o},children:function(e){let t=e.trim().split(/\s+/).filter(Boolean);if(0===t.length)return"\xb7\xb7";if(1===t.length){let e=t[0];return(e[0]+(e[1]??"\xb7")).toUpperCase().slice(0,2)}return(t[0][0]+t[1][0]).toUpperCase()}(t)})}}(x,t,s)}),(0,a.jsxs)(tB,{accentColor:s,children:[(0,a.jsx)("span",{className:"dot"}),(0,a.jsx)("span",{className:"cat",children:n}),l&&(0,a.jsx)("span",{className:"lock",children:"◉ AUTH"})]}),(0,a.jsxs)(tI,{children:[(0,a.jsxs)(tH,{children:[t,(0,a.jsx)("span",{className:"hash",children:r})]}),(0,a.jsx)(t_,{children:o}),f&&(0,a.jsx)(tO,{children:f})]})]})}l().button`
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
`;let tZ={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:d.w4.colors.accentMuted},tX={neutral:d.w4.colors.mainTextMuted,live:d.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:d.w4.colors.accent};l().span`
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
  background: ${({tone:e})=>tZ[e]};
  color: ${({tone:e})=>tX[e]};
`,l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;let t0=l().kbd`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 3px;
  color: ${d.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;function t1({children:e,...t}){return(0,a.jsx)(t0,{...t,children:e})}let t4=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function t2({children:e,...t}){return(0,a.jsx)(t4,{...t,children:e})}let t5=l().label`
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
`,t3=l().input`
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
`,t6=l().span`
  display: inline-flex;
  align-items: center;
  color: ${d.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,t8=r().forwardRef(function({before:e,after:t,...o},i){return(0,a.jsxs)(t5,{children:[e&&(0,a.jsx)(t6,{children:e}),(0,a.jsx)(t3,{ref:i,...o}),t&&(0,a.jsx)(t6,{children:t})]})}),t7=l().div`
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
`,t9=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,oe=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,ot=l().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,oo=l().div`
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
`,oa=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function oi({title:e,accessory:t,accentColor:o,error:i,errorLabel:r,children:n}){return(0,a.jsxs)(t7,{accentColor:o,children:[(0,a.jsxs)(t9,{children:[(0,a.jsx)(t2,{children:e}),t&&(0,a.jsx)(oe,{children:t})]}),i?(0,a.jsxs)(oo,{role:"alert",children:[(0,a.jsx)(oa,{children:r??"Error"}),(0,a.jsx)("div",{children:i})]}):(0,a.jsx)(ot,{children:n})]})}l().div`
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
`;let or=(0,c.keyframes)`
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
  animation: ${or} 0.4s ease both;
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
`;var on=o(11352),os=o(76710),ol=o(4311),oc=o(73639),od=o(8411);o(75406),l().nav`padding: ${d.w4.spacing.sm} 0;`,l().div`
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
`;let op=l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,om=l().pre`
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
`,og=!1;function ou(e){if("u"<typeof window)return e;let t=e.match(/^var\((--[-\w]+)\)$/);return t&&getComputedStyle(document.documentElement).getPropertyValue(t[1]).trim()||e}function oh({code:e}){let t=(0,i.useRef)(null),[r,n]=(0,i.useState)(null),[s,l]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let a=!1;if(n(null),l(!1),!e.trim())return void l(!0);let i=e.trim().split(/\r?\n/)[0]?.trim()??"";return/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/.test(i)?(async function(){let i=(await o.e("6087").then(o.bind(o,29738))).default;if(og||(i.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:ou(d.w4.colors.codeBg),primaryColor:ou(d.w4.colors.accent),primaryTextColor:ou(d.w4.colors.mainText),lineColor:ou(d.w4.colors.border)}}),og=!0),t.current&&!a)try{let o=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:r}=await i.render(o,e);if(a||!t.current)return;if(/aria-roledescription="error"|class="error-icon"|>Syntax error/i.test(r))return void l(!0);t.current.innerHTML=r,requestAnimationFrame(()=>{if(a||!t.current)return;let e=t.current.querySelector("svg");if(!e)return void l(!0);let o=e.getBoundingClientRect();(o.width<40||o.height<40)&&l(!0)})}catch(e){a||n(e instanceof Error?e.message:String(e))}}(),()=>{a=!0}):void l(!0)},[e]),r||s)?(0,a.jsx)(om,{children:e.trim()}):(0,a.jsx)(op,{ref:t})}let of=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],ox=l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,oy=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  margin-bottom: ${d.w4.spacing.md};
  text-align: center;
`,ob=l().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  margin-top: ${d.w4.spacing.md};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
`,ow=l().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,o$=l().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,ov=l().pre`
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
`;function ok(e){if(e<=0)return 10;let t=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/t)*t}function oj({labels:e,data:t,colors:o}){let i=340,r=176,n=ok(Math.max(...t,1)),s=Math.min(40,i/e.length*.6),l=i/e.length,c=Array.from({length:6},(e,t)=>n/5*t);return(0,a.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,t)=>{let o=16+r-e/n*r;return(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:d.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,a.jsx)("text",{x:38,y:o+4,fill:d.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:d.w4.typography.fontFamily,children:Math.round(e)})]},t)}),t.map((t,i)=>{let c=44+l*i+l/2-s/2,p=t/n*r,m=16+r-p,g=o[i%o.length];return(0,a.jsxs)("g",{children:[(0,a.jsxs)("rect",{x:c,y:m,width:s,height:p,rx:3,fill:g,opacity:.85,children:[(0,a.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,a.jsx)("animate",{attributeName:"y",from:16+r,to:m,dur:"0.5s",fill:"freeze"})]}),(0,a.jsx)("text",{x:c+s/2,y:m-4,fill:d.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:t}),(0,a.jsx)("text",{x:44+l*i+l/2,y:208,fill:d.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:e[i].length>8?e[i].slice(0,7)+"…":e[i]})]},i)})]})}function oz({labels:e,data:t,colors:o}){let i=t.reduce((e,t)=>e+t,0)||1,r=-Math.PI/2,n=t.map((e,t)=>{let n=e/i*Math.PI*2,s=r,l=r+=n,c=120+90*Math.cos(s),p=120+90*Math.sin(s),m=120+90*Math.cos(l),g=120+90*Math.sin(l),u=+(n>Math.PI),h=s+n/2,f=120+58.5*Math.cos(h),x=120+58.5*Math.sin(h),y=Math.round(e/i*100);return(0,a.jsxs)("g",{children:[(0,a.jsx)("path",{d:`M 120 120 L ${c} ${p} A 90 90 0 ${u} 1 ${m} ${g} Z`,fill:o[t%o.length],stroke:d.w4.colors.codeBg,strokeWidth:2,opacity:.85}),y>=5&&(0,a.jsxs)("text",{x:f,y:x+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:[y,"%"]})]},t)});return(0,a.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:n})}function oM({labels:e,data:t,colors:o}){let i=340,r=176,n=ok(Math.max(...t,1)),s=t.length>1?i/(t.length-1):i,l=o[0],c=t.map((e,t)=>({x:44+s*t,y:16+r-e/n*r})),p=c.map((e,t)=>`${0===t?"M":"L"} ${e.x} ${e.y}`).join(" "),m=Array.from({length:6},(e,t)=>n/5*t);return(0,a.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[m.map((e,t)=>{let o=16+r-e/n*r;return(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:d.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,a.jsx)("text",{x:38,y:o+4,fill:d.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:d.w4.typography.fontFamily,children:Math.round(e)})]},t)}),(0,a.jsx)("path",{d:p,fill:"none",stroke:l,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((o,i)=>(0,a.jsxs)("g",{children:[(0,a.jsx)("circle",{cx:o.x,cy:o.y,r:4,fill:l,stroke:d.w4.colors.codeBg,strokeWidth:2}),(0,a.jsx)("text",{x:o.x,y:o.y-10,fill:d.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:t[i]}),(0,a.jsx)("text",{x:o.x,y:208,fill:d.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:e[i].length>8?e[i].slice(0,7)+"…":e[i]})]},i))]})}function oS({code:e}){let t=(0,i.useMemo)(()=>(function(e){let t,o,a=e.trim().split("\n"),i="bar",r=[],n=[];for(let e of a){let[a,...s]=e.split(":"),l=s.join(":").trim();if(l)switch(a.trim().toLowerCase()){case"type":["bar","pie","line"].includes(l.toLowerCase())&&(i=l.toLowerCase());break;case"title":t=l;break;case"labels":r=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":n=l.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":o=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return r.length&&n.length?{type:i,title:t,labels:r,data:n,colors:o}:null})(e),[e]);if(!t)return(0,a.jsx)(ov,{children:e.trim()});let o=t.colors??of;return(0,a.jsxs)(ox,{children:[t.title&&(0,a.jsx)(oy,{children:t.title}),"bar"===t.type&&(0,a.jsx)(oj,{labels:t.labels,data:t.data,colors:o}),"pie"===t.type&&(0,a.jsx)(oz,{labels:t.labels,data:t.data,colors:o}),"line"===t.type&&(0,a.jsx)(oM,{labels:t.labels,data:t.data,colors:o}),(0,a.jsx)(ob,{children:t.labels.map((e,t)=>(0,a.jsxs)(ow,{children:[(0,a.jsx)(o$,{color:o[t%o.length]}),e]},t))})]})}l().div`
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
`;let oT=(0,c.keyframes)`
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
`;let oA=l().button`
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
    animation: ${oT} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;l()(oA)`
  border-bottom: 1px solid ${d.w4.colors.border}80;
`,l()(oA)``,l().span`
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
`;var oF=o(17223),oC=o(21426),oL=o(25609),oE=o(20320);let oP=l().div`
  margin: ${d.w4.spacing.lg} 0;
  border-radius: ${d.w4.borderRadius.md};
  border: 1px solid ${d.w4.colors.codeBorder};
  overflow: hidden;
`,oN=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${d.w4.colors.codeBorder};
`,oD=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,oR=l().button`
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
`,oB={...oC.A,'pre[class*="language-"]':{...oC.A['pre[class*="language-"]'],background:d.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...oC.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function oI({lang:e="text",code:t}){let[o,r]=(0,i.useState)(!1);return(0,a.jsxs)(oP,{children:[(0,a.jsxs)(oN,{children:[(0,a.jsx)(oD,{children:e}),(0,a.jsxs)(oR,{copied:o,onClick:()=>{navigator.clipboard.writeText(t).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})},children:[o?(0,a.jsx)(oL.A,{size:12}):(0,a.jsx)(oE.A,{size:12}),o?"Copied!":"Copy"]})]}),(0,a.jsx)(oF.A,{language:e,style:oB,showLineNumbers:t.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:d.w4.colors.codeBg},wrapLongLines:!1,children:t})]})}var oH=o(65569),o_=o(8218),oO=o(57230),oK=o(22966),oq=o(21069);let oG={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:oH.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:o_.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:oO.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:oK.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:oq.A,label:"Caution",color:"#f85149"}},oU=l().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${d.w4.borderRadius.md} ${d.w4.borderRadius.md} 0;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
`,oY=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${d.w4.typography.fontFamily};
  margin-bottom: ${d.w4.spacing.sm};
`,oW=l().div`
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function oV({type:e,children:t}){let o=oG[e]??oG.NOTE,i=o.icon;return(0,a.jsxs)(oU,{bg:o.bg,border:o.border,children:[(0,a.jsxs)(oY,{color:o.color,children:[(0,a.jsx)(i,{size:15,strokeWidth:2}),o.label]}),(0,a.jsx)(oW,{children:t})]})}l().nav`
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
`;let oJ=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,oQ=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;function oZ(){let e=/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i;return t=>{function o(t,o,a){let i=o.children?.[0];i?.type==="text"&&(i.value=i.value.replace(e,""),i.value.trim()||1!==o.children.length||o.children.shift()),t.data=t.data??{},t.data.hName="div",t.data.hProperties={"data-callout":a.toUpperCase()}}!function t(a){if("blockquote"===a.type){let t=a.children?.[0];if(t?.type==="paragraph"){let i=t.children?.[0],r=i?.type==="text"&&i.value?.match(e);r&&o(a,t,r[1])}}if("paragraph"===a.type){let t=a.children?.[0],i=t?.type==="text"&&t.value?.match(e);if(i){let t=[...a.children];a.children=[{type:"paragraph",children:t}],o(a,a.children[0],i[1]);let r=t[0];r?.type==="text"&&(r.value=r.value.replace(e,""),r.value.trim()||1!==t.length||t.shift());return}}a.children?.forEach(t)}(t)}}l().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${oJ} 0.15s ease;
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
  animation: ${oQ} 0.2s ease;
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
`;let oX=l().div`
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
`;function o0({children:e}){return(0,a.jsx)(oX,{children:(0,a.jsx)(on.oz,{remarkPlugins:[os.A,ol.A,oZ],rehypePlugins:[oc.A,od.A],components:{div({node:e,children:t,...o}){let i=o["data-callout"];return i?(0,a.jsx)(oV,{type:i,children:t}):(0,a.jsx)("div",{...o,children:t})},pre:({children:e})=>(0,a.jsx)(a.Fragment,{children:e}),code({className:e,children:t}){let o=/language-(\w+)/.exec(e??"")?.[1],i=String(t).replace(/\n$/,"");return i.trim()?"mermaid"===o?(0,a.jsx)(oh,{code:i}):"chart"===o?(0,a.jsx)(oS,{code:i}):o||i.includes("\n")?(0,a.jsx)(oI,{lang:o,code:i}):(0,a.jsx)("code",{className:e,children:t}):null}},children:e})})}l().nav`
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
`;var o1=o(5368),o4=o(54872),o2=o(85390),o5=o(70679),o3=o(302),o6=o(69753),o8=o(37561),o7=o(30522);let o9={markdown:()=>o.e("4873").then(o.t.bind(o,27280,23)),earth:()=>o.e("3678").then(o.t.bind(o,67997,23)),techscope:()=>o.e("6514").then(o.t.bind(o,93305,23)),citypulse:()=>o.e("9462").then(o.t.bind(o,29829,23)),cosmos:()=>o.e("5616").then(o.t.bind(o,47699,23)),stockpulse:()=>o.e("1395").then(o.t.bind(o,49614,23)),pad:()=>o.e("9103").then(o.t.bind(o,3250,23)),regexlab:()=>o.e("4898").then(o.t.bind(o,22745,23)),jsonexplorer:()=>o.e("8065").then(o.t.bind(o,56776,23)),codediff:()=>o.e("4026").then(o.t.bind(o,21937,23)),playground:()=>o.e("3141").then(o.t.bind(o,41780,23)),jwtinspector:()=>o.e("5394").then(o.t.bind(o,58633,23)),colorlab:()=>o.e("4274").then(o.t.bind(o,28105,23)),cronbuilder:()=>o.e("6001").then(o.t.bind(o,97672,23)),csvexplorer:()=>o.e("9773").then(o.t.bind(o,95836,23)),chartbuilder:()=>o.e("2467").then(o.t.bind(o,83902,23)),school:()=>o.e("4848").then(o.t.bind(o,355,23)),weather:()=>o.e("446").then(o.t.bind(o,73437,23)),apiexplorer:()=>o.e("5153").then(o.t.bind(o,86488,23)),movies:async()=>{let e=await o.e("649").then(o.t.bind(o,22304,23)),t=e.default;return{default:("object"==typeof t&&t&&"default"in t?t.default:t)??e.default}},promptlab:()=>o.e("747").then(o.t.bind(o,15014,23)),imagegen:()=>o.e("3213").then(o.t.bind(o,67820,23)),games:()=>o.e("3009").then(o.t.bind(o,96840,23)),daily:()=>o.e("3531").then(o.t.bind(o,64438,23)),ask:()=>o.e("7335").then(o.t.bind(o,68170,23))},ae=Object.fromEntries(Object.entries(o9).map(([e,t])=>[e,r().lazy(t)])),at=new Set;function ao(e){if(at.has(e))return;let t=o9[e];if(!t)return;let o=navigator.connection;o?.saveData||(at.add(e),t().catch(()=>{at.delete(e)}))}let aa={All:{en:"All",pt:"Todas"},Live:{en:"Live",pt:"Ao Vivo"},School:{en:"School",pt:"Escola"},Explore:{en:"Explore",pt:"Explorar"},Create:{en:"Create",pt:"Criar"},Inspect:{en:"Inspect",pt:"Analisar"},Connect:{en:"Connect",pt:"Conectar"},Content:{en:"Content",pt:"Conte\xfado"},Fun:{en:"Fun",pt:"Divers\xe3o"},Lab:{en:"Lab",pt:"Lab"},Tools:{en:"Tools",pt:"Ferramentas"}},ai={"AI Lab":{en:"AI Lab",pt:"Lab de IA"},"Developer Toolkit":{en:"Developer Toolkit",pt:"Ferramentas Dev"},"Data Studio":{en:"Data Studio",pt:"Est\xfadio de Dados"},"Life Dashboard":{en:"Life Dashboard",pt:"Painel de Vida"},"Learning Hub":{en:"Learning Hub",pt:"Aprendizagem"},"Game Room":{en:"Game Room",pt:"Sala de Jogos"},Entertainment:{en:"Entertainment",pt:"Entretenimento"},Other:{en:"Other",pt:"Outros"}},ar={categories:{en:"Categories",pt:"Categorias"},tagline:{en:"Everything happening on the internet. In one place.",pt:"Tudo o que acontece na internet. Num s\xf3 lugar."},searchApps:{en:"Search apps, widgets, places…",pt:"Pesquisar apps, widgets, lugares…"},openLauncher:{en:"to open launcher",pt:"para abrir launcher"},pinned:{en:"Pinned",pt:"Fixos"},recentlyUsed:{en:"Recently used",pt:"Usados recentemente"},noMatch:{en:"No apps match",pt:"Nenhuma app corresponde a"},open:{en:"Open",pt:"Abrir"},suites:{en:"Suites",pt:"Suites"},"greeting.morning":{en:"Good morning",pt:"Bom dia"},"greeting.afternoon":{en:"Good afternoon",pt:"Boa tarde"},"greeting.evening":{en:"Good evening",pt:"Boa noite"},dashboard:{en:"Dashboard",pt:"Painel"},addWidget:{en:"Add widget",pt:"Adicionar widget"},"home.today":{en:"Today",pt:"Hoje"},"home.weather.city":{en:"Lisbon",pt:"Lisboa"},"home.emptyFiltered.title":{en:"No apps to show",pt:"Sem apps para mostrar"},"home.emptyFiltered.desc":{en:"Your current filters don't match any apps. Try a different suite or category, or adjust your interests in Preferences.",pt:"Os filtros atuais n\xe3o correspondem a nenhuma app. Escolhe outra su\xedte ou categoria, ou ajusta os teus interesses nas Prefer\xeancias."},"home.emptyFiltered.cta":{en:"Open Preferences",pt:"Abrir Prefer\xeancias"},"home.emptyFiltered.clear":{en:"Clear filters",pt:"Limpar filtros"}};function an(e,t){return aa[e]?.[t]??e}function as(e,t){return ar[e]?.[t]??e}function al(e){return e.visibility?e.visibility:e.homeHidden?"hidden-home":"default"}let ac=[{id:"markdown",port:3001,labelKey:"apps.markdown.label",descriptionKey:"apps.markdown.description",hash:"#/blog",icon:"file",color:"#388bfd",enabled:!0,category:"Content",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"school",port:3019,labelKey:"apps.school.label",descriptionKey:"apps.school.description",hash:"#/school",hashAliases:["math","portugues","estudodomeio","ingles"],icon:"graduation",color:"#f78166",enabled:!0,category:"School",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"earth",port:3002,labelKey:"apps.earth.label",descriptionKey:"apps.earth.description",hash:"#/earth",icon:"globe",color:"#3fb950",enabled:!0,category:"Explore",needsAuth:!1,suite:"Learning Hub",interest:"learning",dataSources:["seismic.pt","seismic.world"]},{id:"cosmos",port:3006,labelKey:"apps.cosmos.label",descriptionKey:"apps.cosmos.description",hash:"#/cosmos",icon:"telescope",color:"#bc8cff",enabled:!0,category:"Explore",needsAuth:!1,suite:"Learning Hub",interest:"space"},{id:"techscope",port:3003,labelKey:"apps.techscope.label",descriptionKey:"apps.techscope.description",hash:"#/techscope",icon:"satellite",color:"#a371f7",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard",interest:"tech"},{id:"citypulse",port:3004,labelKey:"apps.citypulse.label",descriptionKey:"apps.citypulse.description",hash:"#/citypulse",icon:"buildings",color:"#d29922",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard",interest:"news",dataSources:["news.pt","news.world"]},{id:"stockpulse",port:3007,labelKey:"apps.stockpulse.label",descriptionKey:"apps.stockpulse.description",hash:"#/stockpulse",icon:"trending-up",color:"#3fb950",enabled:!0,flag:"stockpulse.enabled",category:"Live",needsAuth:!1,suite:"Life Dashboard"},{id:"csvexplorer",port:3016,labelKey:"apps.csvexplorer.label",descriptionKey:"apps.csvexplorer.description",hash:"#/csvexplorer",icon:"table",color:"#58a6ff",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"chartbuilder",port:3017,labelKey:"apps.chartbuilder.label",descriptionKey:"apps.chartbuilder.description",hash:"#/chartbuilder",icon:"bar-chart",color:"#d29922",enabled:!0,category:"Create",needsAuth:!1,suite:"Developer Toolkit",homeHidden:!0},{id:"pad",port:3008,labelKey:"apps.pad.label",descriptionKey:"apps.pad.description",hash:"#/mdpad",hashAliases:["mermaidpad"],icon:"edit",color:"#f78166",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"regexlab",port:3009,labelKey:"apps.regexlab.label",descriptionKey:"apps.regexlab.description",hash:"#/regexlab",icon:"search",color:"#388bfd",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"jsonexplorer",port:3010,labelKey:"apps.jsonexplorer.label",descriptionKey:"apps.jsonexplorer.description",hash:"#/jsonexplorer",icon:"braces",color:"#3fb950",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"codediff",port:3011,labelKey:"apps.codediff.label",descriptionKey:"apps.codediff.description",hash:"#/codediff",icon:"diff",color:"#d29922",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"playground",port:3012,labelKey:"apps.playground.label",descriptionKey:"apps.playground.description",hash:"#/playground",icon:"terminal",color:"#facc15",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"jwtinspector",port:3013,labelKey:"apps.jwtinspector.label",descriptionKey:"apps.jwtinspector.description",hash:"#/jwtinspector",icon:"key",color:"#a371f7",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"colorlab",port:3014,labelKey:"apps.colorlab.label",descriptionKey:"apps.colorlab.description",hash:"#/colorlab",icon:"palette",color:"#f78166",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"cronbuilder",port:3015,labelKey:"apps.cronbuilder.label",descriptionKey:"apps.cronbuilder.description",hash:"#/cronbuilder",icon:"clock",color:"#3fb950",enabled:!0,category:"Connect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"weather",port:3022,labelKey:"apps.weather.label",descriptionKey:"apps.weather.description",hash:"#/weather",icon:"cloud",color:"#58a6ff",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard"},{id:"apiexplorer",port:3024,labelKey:"apps.apiexplorer.label",descriptionKey:"apps.apiexplorer.description",hash:"#/apiexplorer",icon:"code",color:"#58a6ff",enabled:!0,category:"Connect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"movies",port:3025,labelKey:"apps.movies.label",descriptionKey:"apps.movies.description",hash:"#/movies",icon:"film",color:"#e50914",enabled:!0,category:"Fun",needsAuth:!0,suite:"Entertainment",interest:"movies"},{id:"promptlab",port:3026,labelKey:"apps.promptlab.label",descriptionKey:"apps.promptlab.description",hash:"#/promptlab",icon:"brain",color:"#a371f7",enabled:!0,category:"Lab",needsAuth:!0,suite:"AI Lab",interest:"tech"},{id:"imagegen",port:3027,labelKey:"apps.imagegen.label",descriptionKey:"apps.imagegen.description",hash:"#/imagegen",icon:"image",color:"#f78166",enabled:!0,category:"Lab",needsAuth:!0,suite:"AI Lab",interest:"tech"},{id:"daily",port:3029,labelKey:"apps.daily.label",descriptionKey:"apps.daily.description",hash:"#/daily",icon:"target",color:"#34d399",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard",interest:"learning",dataSources:["daily.overdue"]},{id:"games",port:3028,labelKey:"apps.games.label",descriptionKey:"apps.games.description",hash:"#/games",hashAliases:["lebem","leitor","tictactoe","galo","soundhunter","familyquiz","adventure","pixelboard","stopgame","spotit","memory","tapit","jumpparty","drawguess","animalarena","crazykitchen","miniparty","hideseek","buttonmayhem","bombbrawl"],icon:"gamepad",color:"#f97583",enabled:!0,category:"Fun",needsAuth:!1,suite:"Game Room",interest:"games"},{id:"ask",port:3030,labelKey:"apps.ask.label",descriptionKey:"apps.ask.description",hash:"#/ask",hashAliases:[],icon:"sparkle",color:"#8b7bff",enabled:!0,category:"Lab",needsAuth:!1,suite:"AI Lab",interest:"tech"}],ad=[{id:"lab",yamlSuite:"AI Lab",color:d.w4.suites.lab,icon:"beaker",nameKey:"suites.lab.name",subKey:"suites.lab.sub"},{id:"vida",yamlSuite:"Life Dashboard",color:d.w4.suites.vida,icon:"heart",nameKey:"suites.vida.name",subKey:"suites.vida.sub"},{id:"learn",yamlSuite:"Learning Hub",color:d.w4.suites.learn,icon:"graduation",nameKey:"suites.learn.name",subKey:"suites.learn.sub"},{id:"games",yamlSuite:"Game Room",color:d.w4.suites.games,icon:"gamepad",nameKey:"suites.games.name",subKey:"suites.games.sub"},{id:"ent",yamlSuite:"Entertainment",color:d.w4.suites.ent,icon:"film",nameKey:"suites.ent.name",subKey:"suites.ent.sub"}],ap=[{id:"lebem",hash:"#/lebem",iconName:"book",labelKey:"quickLaunch.lebem",color:"#f97583"},{id:"tictactoe",hash:"#/tictactoe",iconName:"grid",labelKey:"quickLaunch.tictactoe",color:"#8b5cf6"},{id:"soundhunter",hash:"#/soundhunter",iconName:"mic",labelKey:"quickLaunch.soundhunter",color:"#f59e0b"},{id:"familyquiz",hash:"#/familyquiz",iconName:"brain",labelKey:"quickLaunch.familyquiz",color:"#3b82f6"},{id:"adventure",hash:"#/adventure",iconName:"book",labelKey:"quickLaunch.adventure",color:"#10b981"},{id:"pixelboard",hash:"#/pixelboard",iconName:"palette",labelKey:"quickLaunch.pixelboard",color:"#ec4899"},{id:"stopgame",hash:"#/stopgame",iconName:"close",labelKey:"quickLaunch.stopgame",color:"#f59e0b"},{id:"spotit",hash:"#/spotit",iconName:"eye",labelKey:"quickLaunch.spotit",color:"#8b5cf6"},{id:"memory",hash:"#/memory",iconName:"brain",labelKey:"quickLaunch.memory",color:"#06b6d4"},{id:"tapit",hash:"#/tapit",iconName:"target",labelKey:"quickLaunch.tapit",color:"#f97583"},{id:"jumpparty",hash:"#/jumpparty",iconName:"zap",labelKey:"quickLaunch.jumpparty",color:"#3fb950"},{id:"drawguess",hash:"#/drawguess",iconName:"edit",labelKey:"quickLaunch.drawguess",color:"#d2a8ff"},{id:"animalarena",hash:"#/animalarena",iconName:"trophy",labelKey:"quickLaunch.animalarena",color:"#ef4444"},{id:"crazykitchen",hash:"#/crazykitchen",iconName:"flame",labelKey:"quickLaunch.crazykitchen",color:"#f59e0b"},{id:"miniparty",hash:"#/miniparty",iconName:"sparkle",labelKey:"quickLaunch.miniparty",color:"#58a6ff"},{id:"hideseek",hash:"#/hideseek",iconName:"search",labelKey:"quickLaunch.hideseek",color:"#10b981"},{id:"buttonmayhem",hash:"#/buttonmayhem",iconName:"dice",labelKey:"quickLaunch.buttonmayhem",color:"#a855f7"},{id:"bombbrawl",hash:"#/bombbrawl",iconName:"bomb",labelKey:"quickLaunch.bombbrawl",color:"#ff4444"}],am=(()=>{let e={};for(let t of ap)e[t.hash]=t;return e})(),ag={"profile.title":"Your Profile","profile.close":"Close","profile.cancel":"Cancel","profile.save":"Save","profile.interests":"Interests","profile.interestsHint":"Personalize your daily feed and in-app recommendations.","profile.ageMode":"Age mode","profile.ageModeHint":"Adjusts School difficulty and filters sensitive content.","topbar.profile.tooltip":"Your profile","topbar.profile.aria":"Open profile","sidebar.retreat":"Retreat","sidebar.show":"Show sidebar","sidebar.hide":"Hide sidebar","sidebar.showSuites":"+ Show suites","retreat.prompt":"search or open anything","retreat.weather.city":"Lisbon","palette.search":"Search","palette.placeholder":"Search apps, tools, or go anywhere…","palette.recent":"Recent","palette.allApps":"All apps","palette.noMatch":"No apps match","palette.emptyHint":"Try another word or check the spelling.","palette.recentTag":"recent","palette.clear":"Clear","palette.hint.navigate":"navigate","palette.hint.open":"open","palette.hint.close":"close","palette.hint.ask":"ask","palette.scope.all":"All","palette.scope.jump":"Go to","palette.scope.actions":"Actions","palette.scope.recent":"Recent","palette.scope.ask":"Ask","palette.scope.ariaLabel":"Search scope","palette.section.jump":"Go to","palette.section.suites":"Suites","palette.section.apps":"Apps","palette.section.games":"Games","palette.section.actions":"Actions","palette.section.ask":"Ask Atlantis","palette.meta.game":"Game \xb7 Game Room","palette.action.addWidget":"Add widget to Dashboard","palette.action.addWidget.meta":"Opens the picker","palette.action.theme":"Toggle theme","palette.action.theme.meta":"Dark ↔ Light","palette.action.preferences":"Open Preferences","palette.action.preferences.meta":"Interests, age mode","palette.action.settings":"Open Settings","palette.action.settings.meta":"API keys, advanced","palette.action.language":"Toggle language","palette.action.clearNotifications":"Clear notifications","palette.action.clearNotifications.meta":"Mark all {n} as read","palette.action.signout":"Sign out","palette.ask.placeholder":"Ask Atlantis or jump anywhere…","palette.ask.hint":"Type a question and press Enter.","palette.ask.thinking":"Thinking…","palette.ask.loading":"Thinking…","palette.ask.answer":"Atlantis says","palette.ask.error":"Couldn't reach the model","palette.ask.suggestMeta":"AI \xb7 replies inline","palette.ask.you":"You","palette.ask.atlantis":"Atlantis","palette.ask.empty":"Ask a question to get started.","palette.ask.suggestionsTitle":"Try asking…","palette.ask.followUp":"Ask a follow-up…","palette.ask.suggest.summarizeDay":"Summarize my day in 3 lines","palette.ask.suggest.whatsTrending":"What's trending in Lisbon today?","userMenu.preferences":"Preferences","userMenu.settings":"Settings","userMenu.signOut":"Sign out","userMenu.language":"Language","userMenu.theme":"Theme","userMenu.themeLight":"Light","userMenu.themeDark":"Dark","userMenu.themeSystem":"System","userMenu.clearData":"Clear local data","userMenu.clearDataConfirm":"Clear all local settings, caches, and preferences? This cannot be undone — the page will reload.","common.cancel":"Cancel","cmdk.hint.label":"to ask or jump","cmdk.hint.aria":"Press Cmd+K anywhere to open the command palette","onboarding.eyebrow":"✦ START HERE","onboarding.title":"Welcome to Atlantis","onboarding.subtitle":"Three shortcuts to get moving. You can dismiss this card and come back anytime via the command palette.","onboarding.aria":"Getting started","onboarding.dismiss":"Dismiss onboarding","onboarding.tip.palette.title":"Jump anywhere","onboarding.tip.palette.body":"Open the command palette to launch any app, trigger an action, or ask the assistant.","onboarding.tip.preferences.title":"Pick what you care about","onboarding.tip.preferences.body":"Set interests and age mode in Preferences — the home grid, widgets, and suggestions adapt.","onboarding.tip.daily.title":"Keep a daily streak","onboarding.tip.daily.body":"The Daily Manager tracks missions, points, and streaks you pick each day.","suites.label":"Suites","suites.aria":"Open Suites menu","suites.appsCount":"apps in suite","suites.lab.name":"AI Lab","suites.lab.sub":"Prompt \xb7 Image \xb7 Code","suites.vida.name":"Life Dashboard","suites.vida.sub":"Health \xb7 Habits \xb7 News","suites.learn.name":"Learning Hub","suites.learn.sub":"Studies \xb7 Discovery","suites.games.name":"Game Room","suites.games.sub":"Quizzes \xb7 Puzzles","suites.ent.name":"Entertainment","suites.ent.sub":"Movies \xb7 Music \xb7 Stars","error.remote.title":"Couldn't load {name}","error.remote.generic":"Something went wrong while rendering this app.","error.remote.devHint":"The app's dev server isn't reachable. Start it with:","error.remote.prodHint":"This app is temporarily unavailable. Please try again in a moment.","error.remote.retry":"Retry","error.remote.goHome":"Go home","notifications.bell":"Notifications","notifications.title":"Notifications","notifications.markAllRead":"Mark all read","notifications.dismiss":"Dismiss","notifications.empty":"You're all caught up.","notifications.source.newsPt":"PT News","notifications.source.newsWorld":"World News","notifications.source.seismicPt":"Seismic PT","notifications.source.seismicWorld":"Seismic","notifications.source.daily":"Daily Mission","notifications.daily.body":"It's {time} — time for {name}.","notifications.daily.group.one":"1 daily mission pending","notifications.daily.group.many":"{count} daily missions pending","widgets.dashboard":"Dashboard","widgets.addWidget":"Add widget","widgets.moveLeft":"Move left","widgets.moveRight":"Move right","widgets.remove":"Remove","widgets.unpin":"Unpin","widgets.open":"Open","widgets.emptyDashboard":"Your dashboard is empty. Add some widgets!","widget.error.label":"◎ Offline","widget.error.body":"Can't reach the source. Retrying soon.","widget.loading":"Loading…","widgets.empty.title":"Compose your dashboard.","widgets.empty.body":"Pick the widgets that matter to you — news, weather, your streak, AI sessions. You can reorder and customize later.","widgets.empty.cta":"Add your first widget","widgets.picker.title":"Add a widget.","widgets.picker.eyebrow":"◇ Picker","widgets.picker.subtitle":"Pick from your widget catalog. Live data, glanceable.","widgets.picker.searchPlaceholder":"Search widgets — e.g. weather, news, clock…","widgets.picker.empty":"No widgets match. Try another keyword.","widgets.picker.close":"Close","widgets.picker.added":"Added","widgets.picker.suite.all":"All","widgets.picker.suite.tools":"Tools","quickLaunch.count.subjects":"subjects","quickLaunch.count.games":"games","quickLaunch.count.sections":"sections","quickLaunch.count.recent":"recent","quickLaunch.count.open":"open","quickLaunch.math":"Math","quickLaunch.portugues":"Portuguese","quickLaunch.estudodomeio":"Nature","quickLaunch.ingles":"English","quickLaunch.tictactoe":"Tic Tac Toe","quickLaunch.memory":"Memory","quickLaunch.pixelboard":"Pixels","quickLaunch.familyquiz":"Quiz","quickLaunch.spotit":"Spot It","quickLaunch.stopgame":"Stop","quickLaunch.lebem":"Read & Play","quickLaunch.soundhunter":"Sound Hunter","quickLaunch.adventure":"Adventure","quickLaunch.tapit":"Tap It","quickLaunch.jumpparty":"Jump","quickLaunch.drawguess":"Draw & Guess","quickLaunch.animalarena":"Sumo Zoo","quickLaunch.crazykitchen":"Crazy Kitchen","quickLaunch.miniparty":"Mini Party","quickLaunch.hideseek":"Hide & Seek","quickLaunch.buttonmayhem":"Button Mayhem","quickLaunch.bombbrawl":"BombBrawl","quickLaunch.movies.discover":"Discover","quickLaunch.movies.movies":"Movies","quickLaunch.movies.tv":"TV Shows","quickLaunch.movies.documentaries":"Docs","quickLaunch.movies.favorites":"Favorites","quickLaunch.movies.seen":"Seen","dailyFeed.title":"Daily feed","dailyFeed.sub.tech":"Tech \xb7 trending","dailyFeed.sub.movie":"Trending this week","dailyFeed.sub.history":"On this day","dailyFeed.sub.news.pt":"News \xb7 RTP","dailyFeed.sub.news.en":"News \xb7 CNN","dailyFeed.sub.school":"Learn today","dailyFeed.sub.game":"Game of the day","dailyFeed.school.math":"Try a quick math puzzle","dailyFeed.school.story":"Read a Portuguese story","dailyFeed.school.science":"Learn a science fact","dailyFeed.school.reading":"Practice reading aloud","dailyFeed.school.word":"Explore a word quiz","dailyFeed.game.memory":"Memory Game","dailyFeed.game.spotit":"Spot the Pair","dailyFeed.game.tictactoe":"Tic Tac Toe","dailyFeed.game.soundhunter":"Sound Hunter","dailyFeed.game.familyquiz":"Family Quiz","dailyFeed.game.adventure":"Text Adventure","dailyFeed.game.stop":"Stop!","seismic.title.pt":"PT Seismic","seismic.title.world":"World Seismic","seismic.empty":"No recent seismic activity","seismic.openInEarth":"Open in Earth","weather.city.lisbon":"Lisbon","weather.openInEarth":"→ Open in Earth","weather.humidity":"Humidity","weather.wind":"Wind","weather.feelsLike":"Feels like {t}\xb0","weather.uv":"UV","weather.sunrise":"Sunrise","weather.sunset":"Sunset","weather.hourly":"Next hours","weather.forecast":"3-day forecast","weather.now":"Now","weather.day.mon":"Mon","weather.day.tue":"Tue","weather.day.wed":"Wed","weather.day.thu":"Thu","weather.day.fri":"Fri","weather.day.sat":"Sat","weather.day.sun":"Sun","onThisDay.title":"On this day","techscopeLive.title":"Live feeds","movies.trending.title":"Trending this week","movies.apiKeyMissing":"API key missing","apps.markdown.label":"Blog","apps.markdown.description":"Articles and notes across a variety of topics","apps.school.label":"School","apps.school.description":"Primary school — Maths, Portuguese & Science (Years 1–4)","apps.earth.label":"Earth","apps.earth.description":"Interactive 3D globe visualization","apps.cosmos.label":"Cosmos","apps.cosmos.description":"Space exploration and astronomy data","apps.techscope.label":"TechScope","apps.techscope.description":"GitHub \xb7 HN \xb7 npm \xb7 Dev.to \xb7 Stack Overflow — 9 live feeds in one journal","apps.citypulse.label":"CityPulse","apps.citypulse.description":"City metrics and live urban data","apps.stockpulse.label":"StockPulse","apps.stockpulse.description":"Real-time stock market pulse","apps.csvexplorer.label":"CSV Explorer","apps.csvexplorer.description":"CSV viewer with sorting, filtering, and stats","apps.chartbuilder.label":"Chart Builder","apps.chartbuilder.description":"Build bar, line, pie, and scatter charts from CSV","apps.pad.label":"Pad","apps.pad.description":"Markdown & Mermaid editor with live preview","apps.regexlab.label":"Regex Lab","apps.regexlab.description":"Live regex tester with group highlighting","apps.jsonexplorer.label":"JSON Explorer","apps.jsonexplorer.description":"JSON tree explorer with JSONPath filtering","apps.codediff.label":"Code Diff","apps.codediff.description":"Visual side-by-side code diff","apps.playground.label":"Playground","apps.playground.description":"HTML \xb7 CSS \xb7 JS live playground with preview","apps.jwtinspector.label":"JWT Inspector","apps.jwtinspector.description":"Decode and inspect JWT tokens with expiry info","apps.colorlab.label":"Color Lab","apps.colorlab.description":"Color picker with palettes, shades, and contrast","apps.cronbuilder.label":"Cron Builder","apps.cronbuilder.description":"Visual cron expression builder with next runs","apps.weather.label":"Weather","apps.weather.description":"Live global weather map","apps.apiexplorer.label":"API Explorer","apps.apiexplorer.description":"HTTP client — fire requests, inspect responses, save collections","apps.movies.label":"Movies & Series","apps.movies.description":"Browse movies, TV shows & documentaries — search where to stream them","apps.promptlab.label":"Prompt Lab","apps.promptlab.description":"Test and compare prompts across Groq, Gemini, and Hugging Face","apps.imagegen.label":"Image Gen","apps.imagegen.description":"Generate images from text prompts using Pollinations AI","apps.games.label":"Games","apps.games.description":"Tic Tac Toe, Memory, Pixel Board, quizzes and more","apps.daily.label":"Daily Manager","apps.daily.description":"Track daily habits, earn points, keep the streak alive","apps.ask.label":"Ask","apps.ask.description":"Chat with Atlantis — markdown answers, conversations saved.","apps.devtools.label":"Dev Tools","apps.devtools.description":"Developer tools","pinnedCard.recent.label":"Last opened","ask.widget.title":"Ask sessions","ask.widget.description":"Your recent Ask conversations","ask.widget.untitled":"Untitled","ask.widget.empty":"No conversations yet. Start one from the command palette or the Ask app.","ask.widget.emptyCta":"Ask something","streak.title":"Daily Streak","streak.dayStreak":"day streak","streak.noStreak":"Start your streak today","streak.todayDone":"{n} / {total} today","streak.points":"{n} pts","streak.open":"Open Daily Manager","habits.title":"Habits","habits.last7":"Last 7 days","habits.empty":"Add missions in the Daily Manager to track them here.","habits.weekDone":"{n} done this week","habits.open":"Open Daily Manager","habits.openShort":"OPEN","agenda.title":"Agenda Today","agenda.count":"{n} events","agenda.countOne":"1 event","agenda.empty":"Nothing scheduled today","agenda.emptyCta":"Add your first event","agenda.addEvent":"Add event","agenda.titlePlaceholder":"What\\u2019s on?","agenda.timeStart":"Start","agenda.timeEnd":"End","agenda.tag.personal":"personal","agenda.tag.team":"team","agenda.tag.work":"work","agenda.save":"Save","agenda.cancel":"Cancel","agenda.delete":"Delete event","agenda.toggleDone":"Toggle done","agenda.now":"now","reading.title":"❂ Reading","reading.yearProgress":"{read}/{goal} this year","reading.yearGoal":"Year goal","reading.books":"books","reading.goal":"Annual goal","reading.page":"p.","reading.empty":"What are you reading right now?","reading.addBook":"Start a book","reading.updateBook":"Update reading","reading.finish":"Mark as finished","reading.save":"Save","reading.cancel":"Cancel","reading.placeholder.title":"Title","reading.placeholder.author":"Author","reading.placeholder.page":"Page","reading.placeholder.pages":"Total","reading.placeholder.goal":"Goal","reading.placeholder.cover":"COVER","reading.stat.week":"Week","reading.stat.pace":"Pace","reading.stat.finished":"Finished","reading.unit.pages":"pages","reading.unit.perDay":"pg/day","reading.unit.total":"total","bolsa.title":"▲ Markets","bolsa.updated":"updated {age}","bolsa.empty":"Loading tickers…","bolsa.error":"Could not load markets.","bolsa.errorLabel":"OFFLINE","astro.title":"☽ Astronomy","astro.location":"Lisbon","astro.illuminated":"{pct}% illuminated","astro.dayLength":"{h}h {m}m","astro.phase.new":"New Moon","astro.phase.waxingCrescent":"Waxing Crescent","astro.phase.firstQuarter":"First Quarter","astro.phase.waxingGibbous":"Waxing Gibbous","astro.phase.full":"Full Moon","astro.phase.waningGibbous":"Waning Gibbous","astro.phase.lastQuarter":"Last Quarter","astro.phase.waningCrescent":"Waning Crescent","astro.iss.title":"Next ISS passes","astro.iss.loading":"Loading passes…","astro.iss.empty":"No upcoming visible passes.","labLauncher.title":"✦ AI Lab","labLauncher.subtitle":"Your AI suite","labLauncher.count":"tools","labLauncher.open":"// OPEN →","learnLauncher.title":"◎ Learning","learnLauncher.subtitle":"School & games","learnLauncher.count":"apps","learnLauncher.open":"// EXPLORE →","music.title":"♪ Music","music.subtitle":"Recently played","music.empty":"Paste a song to save.","music.placeholder":"Song — Artist","music.add":"Add","music.remove":"Remove","music.search.label":"Search Apple Music","nightSky.title":"✦ Night Sky","nightSky.iss":"ISS visible","nightSky.dayTitle":"Waiting for dusk","nightSky.nightLegend":"Zenith view \xb7 {count} constellations","health.title":"Dashboard Health","health.measuring":"Measuring…","health.offline":"offline","health.ch.crypto":"CoinGecko","health.ch.weather":"Open-Meteo","health.ch.wiki":"Wikipedia","health.ch.hn":"HN Algolia","health.ch.dom":"DOM Nodes","health.ch.fps":"Frame Rate","health.consumers":"used by {list}","health.status.ok":"All healthy","health.status.slow":"{n} slow","health.status.offline":"{n} offline"},au={"profile.title":"O Teu Perfil","profile.close":"Fechar","profile.cancel":"Cancelar","profile.save":"Guardar","profile.interests":"Interesses","profile.interestsHint":"Personaliza o feed di\xe1rio e as sugest\xf5es das apps.","profile.ageMode":"Modo de idade","profile.ageModeHint":"Ajusta a dificuldade na School e filtra conte\xfado sens\xedvel.","topbar.profile.tooltip":"O teu perfil","topbar.profile.aria":"Abrir perfil","sidebar.retreat":"Retiro","sidebar.show":"Mostrar barra lateral","sidebar.hide":"Esconder barra lateral","sidebar.showSuites":"+ Mostrar su\xedtes","retreat.prompt":"procurar ou abrir qualquer coisa","retreat.weather.city":"Lisboa","palette.search":"Procurar","palette.placeholder":"Procurar apps, ferramentas ou ir para qualquer s\xedtio…","palette.recent":"Recentes","palette.allApps":"Todas as apps","palette.noMatch":"Nenhuma app corresponde a","palette.emptyHint":"Tenta outra palavra ou verifica a ortografia.","palette.recentTag":"recente","palette.clear":"Limpar","palette.hint.navigate":"navegar","palette.hint.open":"abrir","palette.hint.close":"fechar","palette.hint.ask":"perguntar","palette.scope.all":"Tudo","palette.scope.jump":"Ir para","palette.scope.actions":"A\xe7\xf5es","palette.scope.recent":"Recentes","palette.scope.ask":"Perguntar","palette.scope.ariaLabel":"\xc2mbito da pesquisa","palette.section.jump":"Ir para","palette.section.suites":"Su\xedtes","palette.section.apps":"Apps","palette.section.games":"Jogos","palette.section.actions":"A\xe7\xf5es","palette.section.ask":"Perguntar ao Atlantis","palette.meta.game":"Jogo \xb7 Sala de Jogos","palette.action.addWidget":"Adicionar widget ao Painel","palette.action.addWidget.meta":"Abre o picker","palette.action.theme":"Mudar tema","palette.action.theme.meta":"Escuro ↔ Claro","palette.action.preferences":"Abrir Prefer\xeancias","palette.action.preferences.meta":"Interesses, modo de idade","palette.action.settings":"Abrir Defini\xe7\xf5es","palette.action.settings.meta":"Chaves API, avan\xe7ado","palette.action.language":"Alternar idioma","palette.action.clearNotifications":"Limpar notifica\xe7\xf5es","palette.action.clearNotifications.meta":"Marcar {n} como lidas","palette.action.signout":"Terminar sess\xe3o","palette.ask.placeholder":"Pergunta ao Atlantis ou salta para qualquer lado…","palette.ask.hint":"Escreve uma pergunta e prime Enter.","palette.ask.thinking":"A pensar…","palette.ask.loading":"A pensar…","palette.ask.answer":"O Atlantis diz","palette.ask.error":"N\xe3o foi poss\xedvel contactar o modelo","palette.ask.suggestMeta":"IA \xb7 responde inline","palette.ask.you":"Voc\xea","palette.ask.atlantis":"Atlantis","palette.ask.empty":"Faz uma pergunta para come\xe7ar.","palette.ask.suggestionsTitle":"Experimenta perguntar…","palette.ask.followUp":"Faz uma pergunta de seguimento…","palette.ask.suggest.summarizeDay":"Resumir o meu dia em 3 linhas","palette.ask.suggest.whatsTrending":"O que est\xe1 em alta em Lisboa hoje?","userMenu.preferences":"Prefer\xeancias","userMenu.settings":"Defini\xe7\xf5es","userMenu.signOut":"Terminar sess\xe3o","userMenu.language":"Idioma","userMenu.theme":"Tema","userMenu.themeLight":"Claro","userMenu.themeDark":"Escuro","userMenu.themeSystem":"Sistema","userMenu.clearData":"Limpar dados locais","userMenu.clearDataConfirm":"Limpar todas as defini\xe7\xf5es, caches e prefer\xeancias locais? N\xe3o \xe9 poss\xedvel anular — a p\xe1gina ser\xe1 recarregada.","common.cancel":"Cancelar","cmdk.hint.label":"perguntar ou ir para","cmdk.hint.aria":"Prime Cmd+K em qualquer lado para abrir a paleta de comandos","onboarding.eyebrow":"✦ COME\xc7AR AQUI","onboarding.title":"Bem-vindo a Atlantis","onboarding.subtitle":"Tr\xeas atalhos para come\xe7ar. Podes dispensar este cart\xe3o e voltar a tudo pela paleta de comandos.","onboarding.aria":"Come\xe7ar","onboarding.dismiss":"Dispensar introdu\xe7\xe3o","onboarding.tip.palette.title":"Ir a qualquer lado","onboarding.tip.palette.body":"Abre a paleta de comandos para lan\xe7ar uma app, desencadear uma a\xe7\xe3o ou perguntar ao assistente.","onboarding.tip.preferences.title":"Escolhe os teus interesses","onboarding.tip.preferences.body":"Define interesses e modo de idade nas Prefer\xeancias — a grelha, os widgets e as sugest\xf5es adaptam-se.","onboarding.tip.daily.title":"Cria uma rotina di\xe1ria","onboarding.tip.daily.body":"O Gestor Di\xe1rio acompanha miss\xf5es, pontos e sequ\xeancias que escolhes todos os dias.","suites.label":"Su\xedtes","suites.aria":"Abrir menu de Su\xedtes","suites.appsCount":"apps na su\xedte","suites.lab.name":"Lab de IA","suites.lab.sub":"Prompt \xb7 Imagem \xb7 C\xf3digo","suites.vida.name":"Painel de Vida","suites.vida.sub":"Sa\xfade \xb7 H\xe1bitos \xb7 Not\xedcias","suites.learn.name":"Aprendizagem","suites.learn.sub":"Estudos \xb7 Descoberta","suites.games.name":"Sala de Jogos","suites.games.sub":"Quizzes \xb7 Puzzles","suites.ent.name":"Entretenimento","suites.ent.sub":"Filmes \xb7 M\xfasica \xb7 Estrelas","error.remote.title":"N\xe3o consegui carregar {name}","error.remote.generic":"Algo correu mal ao abrir esta app.","error.remote.devHint":"O servidor de desenvolvimento desta app n\xe3o est\xe1 a correr. Arranca-o com:","error.remote.prodHint":"Esta app est\xe1 temporariamente indispon\xedvel. Tenta novamente dentro de momentos.","error.remote.retry":"Tentar de novo","error.remote.goHome":"Voltar ao in\xedcio","notifications.bell":"Notifica\xe7\xf5es","notifications.title":"Notifica\xe7\xf5es","notifications.markAllRead":"Marcar tudo como lido","notifications.dismiss":"Dispensar","notifications.empty":"Est\xe1s em dia.","notifications.source.newsPt":"Not\xedcias PT","notifications.source.newsWorld":"Not\xedcias Mundo","notifications.source.seismicPt":"Sismos PT","notifications.source.seismicWorld":"Sismos","notifications.source.daily":"Miss\xe3o Di\xe1ria","notifications.daily.body":"S\xe3o {time} — hora de {name}.","notifications.daily.group.one":"1 miss\xe3o di\xe1ria por fazer","notifications.daily.group.many":"{count} miss\xf5es di\xe1rias por fazer","widgets.dashboard":"Painel","widgets.addWidget":"Adicionar widget","widgets.moveLeft":"Mover para a esquerda","widgets.moveRight":"Mover para a direita","widgets.remove":"Remover","widgets.unpin":"Desafixar","widgets.open":"Abrir","widgets.emptyDashboard":"O teu dashboard est\xe1 vazio. Adiciona widgets!","widget.error.label":"◎ Offline","widget.error.body":"Sem liga\xe7\xe3o \xe0 fonte. A tentar de novo.","widget.loading":"A carregar…","widgets.empty.title":"Comp\xf5e o teu painel.","widgets.empty.body":"Escolhe os widgets que te importam — not\xedcias, clima, a tua sequ\xeancia, conversas de IA. Podes reordenar e personalizar depois.","widgets.empty.cta":"Adicionar o primeiro widget","widgets.picker.title":"Adicionar widget.","widgets.picker.eyebrow":"◇ Cat\xe1logo","widgets.picker.subtitle":"Escolhe do cat\xe1logo de widgets. Dados ao vivo, num relance.","widgets.picker.searchPlaceholder":"Procurar widgets — ex: meteorologia, not\xedcias, rel\xf3gio…","widgets.picker.empty":"Nenhum widget corresponde. Tenta outra palavra.","widgets.picker.close":"Fechar","widgets.picker.added":"Adicionado","widgets.picker.suite.all":"Todos","widgets.picker.suite.tools":"Ferramentas","quickLaunch.count.subjects":"mat\xe9rias","quickLaunch.count.games":"jogos","quickLaunch.count.sections":"sec\xe7\xf5es","quickLaunch.count.recent":"recentes","quickLaunch.count.open":"abrir","quickLaunch.math":"Matem\xe1tica","quickLaunch.portugues":"Portugu\xeas","quickLaunch.estudodomeio":"Est. do Meio","quickLaunch.ingles":"Ingl\xeas","quickLaunch.tictactoe":"Galo","quickLaunch.memory":"Mem\xf3ria","quickLaunch.pixelboard":"Pixels","quickLaunch.familyquiz":"Quiz","quickLaunch.spotit":"Par","quickLaunch.stopgame":"Stop","quickLaunch.lebem":"Ler a Brincar","quickLaunch.soundhunter":"Ca\xe7ador de Sons","quickLaunch.adventure":"Aventura","quickLaunch.tapit":"Toca no Certo","quickLaunch.jumpparty":"Salta","quickLaunch.drawguess":"Desenha e Adivinha","quickLaunch.animalarena":"Sumo Zoo","quickLaunch.crazykitchen":"Cozinha Louca","quickLaunch.miniparty":"Mini Festa","quickLaunch.hideseek":"Esconde-Esconde","quickLaunch.buttonmayhem":"Bot\xe3o Maluco","quickLaunch.bombbrawl":"BombBrawl","quickLaunch.movies.discover":"Descobrir","quickLaunch.movies.movies":"Filmes","quickLaunch.movies.tv":"S\xe9ries","quickLaunch.movies.documentaries":"Docs","quickLaunch.movies.favorites":"Favoritos","quickLaunch.movies.seen":"Vistos","dailyFeed.title":"Feed di\xe1rio","dailyFeed.sub.tech":"Tech \xb7 em alta","dailyFeed.sub.movie":"Em alta esta semana","dailyFeed.sub.history":"Neste dia","dailyFeed.sub.news.pt":"Not\xedcias \xb7 RTP","dailyFeed.sub.news.en":"Not\xedcias \xb7 CNN","dailyFeed.sub.school":"Aprender hoje","dailyFeed.sub.game":"Jogo do dia","dailyFeed.school.math":"Experimenta um desafio de matem\xe1tica","dailyFeed.school.story":"L\xea uma hist\xf3ria em portugu\xeas","dailyFeed.school.science":"Aprende um facto de ci\xeancia","dailyFeed.school.reading":"Pratica leitura em voz alta","dailyFeed.school.word":"Explora um quiz de palavras","dailyFeed.game.memory":"Jogo da Mem\xf3ria","dailyFeed.game.spotit":"Encontra o Par!","dailyFeed.game.tictactoe":"Jogo do Galo","dailyFeed.game.soundhunter":"Ca\xe7ador de Sons","dailyFeed.game.familyquiz":"Quiz da Fam\xedlia","dailyFeed.game.adventure":"Aventura de Texto","dailyFeed.game.stop":"Stop!","seismic.title.pt":"Sismicidade PT","seismic.title.world":"Sismicidade Mundo","seismic.empty":"Sem atividade sismica recente","seismic.openInEarth":"Abrir no Earth","weather.city.lisbon":"Lisboa","weather.openInEarth":"→ Abrir no Earth","weather.humidity":"Humidade","weather.wind":"Vento","weather.feelsLike":"Sensa\xe7\xe3o de {t}\xb0","weather.uv":"UV","weather.sunrise":"Nascer","weather.sunset":"P\xf4r-do-sol","weather.hourly":"Pr\xf3ximas horas","weather.forecast":"Previs\xe3o 3 dias","weather.now":"Agora","weather.day.mon":"Seg","weather.day.tue":"Ter","weather.day.wed":"Qua","weather.day.thu":"Qui","weather.day.fri":"Sex","weather.day.sat":"S\xe1b","weather.day.sun":"Dom","onThisDay.title":"Neste dia","techscopeLive.title":"Feeds ao vivo","movies.trending.title":"Em alta esta semana","movies.apiKeyMissing":"API key em falta","apps.markdown.label":"Blog","apps.markdown.description":"Artigos e notas sobre v\xe1rios temas","apps.school.label":"Escola","apps.school.description":"Escola prim\xe1ria — Matem\xe1tica, Portugu\xeas e Estudo do Meio (1.\xba–4.\xba ano)","apps.earth.label":"Earth","apps.earth.description":"Globo 3D interativo","apps.cosmos.label":"Cosmos","apps.cosmos.description":"Explora\xe7\xe3o espacial e dados de astronomia","apps.techscope.label":"TechScope","apps.techscope.description":"GitHub \xb7 HN \xb7 npm \xb7 Dev.to \xb7 Stack Overflow — 9 feeds ao vivo num jornal","apps.citypulse.label":"CityPulse","apps.citypulse.description":"M\xe9tricas urbanas e dados ao vivo","apps.stockpulse.label":"StockPulse","apps.stockpulse.description":"Mercados financeiros em tempo real","apps.csvexplorer.label":"CSV Explorer","apps.csvexplorer.description":"Visualizador CSV com ordena\xe7\xe3o, filtros e estat\xedsticas","apps.chartbuilder.label":"Chart Builder","apps.chartbuilder.description":"Cria gr\xe1ficos de barras, linhas, pizza e dispers\xe3o","apps.pad.label":"Pad","apps.pad.description":"Editor Markdown e Mermaid com preview ao vivo","apps.regexlab.label":"Regex Lab","apps.regexlab.description":"Testador de regex ao vivo com destaque de grupos","apps.jsonexplorer.label":"JSON Explorer","apps.jsonexplorer.description":"Explorador de \xe1rvore JSON com filtros JSONPath","apps.codediff.label":"Code Diff","apps.codediff.description":"Compara\xe7\xe3o visual de c\xf3digo lado a lado","apps.playground.label":"Playground","apps.playground.description":"Playground HTML \xb7 CSS \xb7 JS ao vivo com preview","apps.jwtinspector.label":"JWT Inspector","apps.jwtinspector.description":"Descodifica e inspeciona tokens JWT","apps.colorlab.label":"Color Lab","apps.colorlab.description":"Seletor de cores com paletas, tons e contraste","apps.cronbuilder.label":"Cron Builder","apps.cronbuilder.description":"Construtor visual de express\xf5es cron","apps.weather.label":"Meteorologia","apps.weather.description":"Mapa meteorol\xf3gico global ao vivo","apps.apiexplorer.label":"API Explorer","apps.apiexplorer.description":"Cliente HTTP — enviar pedidos, inspecionar respostas, guardar cole\xe7\xf5es","apps.movies.label":"Filmes & S\xe9ries","apps.movies.description":"Filmes, s\xe9ries e document\xe1rios — descobre onde ver em streaming","apps.promptlab.label":"Prompt Lab","apps.promptlab.description":"Testa e compara prompts no Groq, Gemini e Hugging Face","apps.imagegen.label":"Image Gen","apps.imagegen.description":"Gera imagens a partir de texto com Pollinations AI","apps.games.label":"Jogos","apps.games.description":"Galo, Mem\xf3ria, Pixels, quizzes e muito mais","apps.daily.label":"Gestor Di\xe1rio","apps.daily.description":"Segue h\xe1bitos di\xe1rios, ganha pontos, mant\xe9m a s\xe9rie","apps.ask.label":"Perguntar","apps.ask.description":"Conversa com o Atlantis — respostas em markdown, guardadas.","apps.devtools.label":"Dev Tools","apps.devtools.description":"Ferramentas de desenvolvimento","pinnedCard.recent.label":"\xdaltimo aberto","ask.widget.title":"Conversas com o Atlantis","ask.widget.description":"As tuas conversas recentes","ask.widget.untitled":"Sem t\xedtulo","ask.widget.empty":"Ainda n\xe3o tens conversas. Come\xe7a uma na paleta de comandos ou na app Ask.","ask.widget.emptyCta":"Fazer uma pergunta","streak.title":"S\xe9rie Di\xe1ria","streak.dayStreak":"dias seguidos","streak.noStreak":"Come\xe7a a tua s\xe9rie hoje","streak.todayDone":"{n} / {total} hoje","streak.points":"{n} pts","streak.open":"Abrir Gestor Di\xe1rio","habits.title":"H\xe1bitos","habits.last7":"\xdaltimos 7 dias","habits.empty":"Adiciona miss\xf5es no Gestor Di\xe1rio para as veres aqui.","habits.weekDone":"{n} feitas esta semana","habits.open":"Abrir Gestor Di\xe1rio","habits.openShort":"ABRIR","agenda.title":"Agenda Hoje","agenda.count":"{n} eventos","agenda.countOne":"1 evento","agenda.empty":"Nada agendado hoje","agenda.emptyCta":"Adiciona o primeiro evento","agenda.addEvent":"Adicionar evento","agenda.titlePlaceholder":"O que tens?","agenda.timeStart":"In\xedcio","agenda.timeEnd":"Fim","agenda.tag.personal":"pessoal","agenda.tag.team":"equipa","agenda.tag.work":"trabalho","agenda.save":"Guardar","agenda.cancel":"Cancelar","agenda.delete":"Apagar evento","agenda.toggleDone":"Alternar conclu\xeddo","agenda.now":"agora","reading.title":"❂ Leitura","reading.yearProgress":"{read}/{goal} este ano","reading.yearGoal":"Meta anual","reading.books":"livros","reading.goal":"Meta anual","reading.page":"p.","reading.empty":"O que est\xe1s a ler agora?","reading.addBook":"Come\xe7ar um livro","reading.updateBook":"Atualizar leitura","reading.finish":"Marcar como lido","reading.save":"Guardar","reading.cancel":"Cancelar","reading.placeholder.title":"T\xedtulo","reading.placeholder.author":"Autor","reading.placeholder.page":"P\xe1gina","reading.placeholder.pages":"Total","reading.placeholder.goal":"Meta","reading.placeholder.cover":"CAPA","reading.stat.week":"Semana","reading.stat.pace":"Ritmo","reading.stat.finished":"Conclu\xeddos","reading.unit.pages":"p\xe1ginas","reading.unit.perDay":"p\xe1g/dia","reading.unit.total":"total","bolsa.title":"▲ Bolsa","bolsa.updated":"atualizado {age}","bolsa.empty":"A carregar cota\xe7\xf5es…","bolsa.error":"N\xe3o foi poss\xedvel carregar cota\xe7\xf5es.","bolsa.errorLabel":"OFFLINE","astro.title":"☽ Astronomia","astro.location":"Lisboa","astro.illuminated":"{pct}% iluminada","astro.dayLength":"{h}h {m}m","astro.phase.new":"Lua Nova","astro.phase.waxingCrescent":"Crescente","astro.phase.firstQuarter":"Quarto Crescente","astro.phase.waxingGibbous":"Gibosa Crescente","astro.phase.full":"Lua Cheia","astro.phase.waningGibbous":"Gibosa Minguante","astro.phase.lastQuarter":"Quarto Minguante","astro.phase.waningCrescent":"Minguante","astro.iss.title":"Pr\xf3ximas passagens — ISS","astro.iss.loading":"A carregar passagens…","astro.iss.empty":"Sem passagens vis\xedveis \xe0 vista.","labLauncher.title":"✦ Lab de IA","labLauncher.subtitle":"A tua su\xedte de IA","labLauncher.count":"ferramentas","labLauncher.open":"// ABRIR →","learnLauncher.title":"◎ Aprendizagem","learnLauncher.subtitle":"Escola & jogos","learnLauncher.count":"apps","learnLauncher.open":"// EXPLORAR →","music.title":"♪ M\xfasica","music.subtitle":"Ouvido recentemente","music.empty":"Adiciona uma m\xfasica.","music.placeholder":"M\xfasica — Artista","music.add":"Adicionar","music.remove":"Remover","music.search.label":"Pesquisar no Apple Music","nightSky.title":"✦ C\xe9u Noturno","nightSky.iss":"ISS vis\xedvel","nightSky.dayTitle":"\xc0 espera do anoitecer","nightSky.nightLegend":"Vista do z\xe9nite \xb7 {count} constela\xe7\xf5es","health.title":"Sa\xfade do Painel","health.measuring":"A medir…","health.offline":"offline","health.ch.crypto":"CoinGecko","health.ch.weather":"Open-Meteo","health.ch.wiki":"Wikip\xe9dia","health.ch.hn":"HN Algolia","health.ch.dom":"N\xf3s DOM","health.ch.fps":"Frame Rate","health.consumers":"usado por {list}","health.status.ok":"Tudo bem","health.status.slow":"{n} lento","health.status.offline":"{n} offline"},ah=function(){let e={};for(let t of new Set([...Object.keys(ag),...Object.keys(au)])){let o=ag[t],a=au[t];e[t]={en:o??t,pt:a??o??t}}return e}(),af=[{id:"daily-feed",labelEn:"Daily Feed",labelPt:"Feed Di\xe1rio",descriptionEn:"What's new across Atlantis today",descriptionPt:"O que h\xe1 de novo em Atlantis hoje",icon:"\uD83D\uDCF0",defaultCols:2,maxCols:2,minHeight:280,suite:"vida"},{id:"techscope",labelEn:"TechScope Live",labelPt:"TechScope Ao Vivo",descriptionEn:"Trending repos & Hacker News",descriptionPt:"Repos em destaque & Hacker News",icon:"\uD83D\uDCE1",defaultCols:2,maxCols:2,minHeight:160,suite:"lab"},{id:"weather",labelEn:"Weather",labelPt:"Meteorologia",descriptionEn:"Current conditions for Lisbon",descriptionPt:"Condi\xe7\xf5es atuais em Lisboa",icon:"\uD83C\uDF24️",defaultCols:2,maxCols:2,minHeight:220,suite:"vida"},{id:"clock",labelEn:"World Clock",labelPt:"Rel\xf3gio Mundial",descriptionEn:"Time across multiple zones",descriptionPt:"Horas em v\xe1rios fusos",icon:"\uD83D\uDD50",defaultCols:1,maxCols:2,minHeight:160,suite:"vida"},{id:"quicklinks",labelEn:"Quick Links",labelPt:"Atalhos",descriptionEn:"Jump to your pinned apps",descriptionPt:"Acede \xe0s tuas apps fixas",icon:"⚡",defaultCols:1,maxCols:1,minHeight:160,suite:"tools"},{id:"news-pt",labelEn:"PT News",labelPt:"Not\xedcias PT",descriptionEn:"Latest headlines from RTP Not\xedcias",descriptionPt:"\xdaltimas not\xedcias da RTP",icon:"\uD83C\uDDF5\uD83C\uDDF9",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"news-world",labelEn:"World News",labelPt:"Not\xedcias Mundo",descriptionEn:"Latest headlines from CNN International",descriptionPt:"\xdaltimas not\xedcias da CNN",icon:"\uD83C\uDF10",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"crypto",labelEn:"Crypto Prices",labelPt:"Pre\xe7os Crypto",descriptionEn:"BTC, ETH, SOL in EUR",descriptionPt:"BTC, ETH, SOL em EUR",icon:"₿",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"seismic",labelEn:"PT Seismic",labelPt:"Sismicidade PT",descriptionEn:"Felt earthquakes in Portugal (7 days)",descriptionPt:"Sismos sentidos em Portugal (7 dias)",icon:"\uD83C\uDF0D",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"onthisday",labelEn:"On This Day",labelPt:"Neste Dia",descriptionEn:"Historical events on today's date",descriptionPt:"Eventos hist\xf3ricos de hoje",icon:"\uD83D\uDCC5",defaultCols:1,maxCols:1,minHeight:160,suite:"learn"},{id:"analog-clock",labelEn:"Analog Clock",labelPt:"Rel\xf3gio Anal\xf3gico",descriptionEn:"Live analog clock with digital display",descriptionPt:"Rel\xf3gio anal\xf3gico com hora digital",icon:"\uD83D\uDD70️",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"quotes",labelEn:"Daily Quote",labelPt:"Cita\xe7\xe3o do Dia",descriptionEn:"A daily dose of inspiration",descriptionPt:"Uma dose di\xe1ria de inspira\xe7\xe3o",icon:"\uD83D\uDCAC",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"trending-searches",labelEn:"Trending Searches",labelPt:"Pesquisas em Alta",descriptionEn:"Top Google searches right now",descriptionPt:"Pesquisas Google em alta",icon:"\uD83D\uDD0D",defaultCols:1,maxCols:2,minHeight:280,suite:"learn"},{id:"wiki-most-read",labelEn:"Wikipedia Top",labelPt:"Wikip\xe9dia Top",descriptionEn:"Most-read Wikipedia articles",descriptionPt:"Artigos mais lidos da Wikip\xe9dia",icon:"\uD83D\uDCD6",defaultCols:1,maxCols:2,minHeight:280,suite:"learn"},{id:"hackernews-hot",labelEn:"Hacker News Hot",labelPt:"Hacker News",descriptionEn:"Top stories on HN front page",descriptionPt:"Hist\xf3rias em destaque no HN",icon:"\uD83D\uDD25",defaultCols:1,maxCols:2,minHeight:280,suite:"lab"},{id:"live-data",labelEn:"Dashboard Health",labelPt:"Sa\xfade do Painel",descriptionEn:"Latency of APIs your widgets rely on, plus FPS & DOM",descriptionPt:"Lat\xeancia das APIs usadas pelos widgets, FPS & DOM",icon:"\uD83D\uDCCA",defaultCols:2,maxCols:2,minHeight:160,suite:"tools"},{id:"movies",labelEn:"Trending Movies",labelPt:"Filmes em Alta",descriptionEn:"Top 5 trending movies & TV this week",descriptionPt:"Top 5 filmes & s\xe9ries em alta esta semana",icon:"\uD83C\uDFAC",defaultCols:1,maxCols:1,minHeight:160,suite:"ent"},{id:"pet",labelEn:"Digital Pet",labelPt:"Pet Digital",descriptionEn:"A cat that reacts to your visits",descriptionPt:"Um gato que reage \xe0s tuas visitas",icon:"\uD83D\uDC31",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"streak",labelEn:"Daily Streak",labelPt:"S\xe9rie Di\xe1ria",descriptionEn:"Track your daily missions streak",descriptionPt:"Segue a tua s\xe9rie de miss\xf5es di\xe1rias",icon:"\uD83D\uDD25",defaultCols:1,maxCols:1,minHeight:160,suite:"vida"},{id:"habits",labelEn:"Habits Grid",labelPt:"Grelha de H\xe1bitos",descriptionEn:"Last 7 days for your top 5 daily missions",descriptionPt:"\xdaltimos 7 dias para as 5 miss\xf5es principais",icon:"\uD83C\uDFAF",defaultCols:1,maxCols:2,minHeight:220,suite:"vida"},{id:"agenda",labelEn:"Agenda Today",labelPt:"Agenda Hoje",descriptionEn:"Today's events on a vertical timeline",descriptionPt:"Eventos de hoje numa linha do tempo vertical",icon:"\uD83D\uDDD3️",defaultCols:1,maxCols:2,minHeight:320,suite:"vida"},{id:"ask-sessions",labelEn:"Ask sessions",labelPt:"Conversas com o Atlantis",descriptionEn:"Your recent Ask conversations",descriptionPt:"As tuas conversas recentes",icon:"✨",defaultCols:1,maxCols:2,minHeight:170,suite:"lab"},{id:"reading",labelEn:"Reading",labelPt:"Leitura",descriptionEn:"Currently reading, year goal & pace",descriptionPt:"A ler agora, meta anual & ritmo",icon:"\uD83D\uDCDA",defaultCols:1,maxCols:2,minHeight:340,suite:"vida"},{id:"bolsa",labelEn:"Markets",labelPt:"Bolsa",descriptionEn:"Stocks & crypto tickers with sparklines",descriptionPt:"A\xe7\xf5es & crypto com sparklines",icon:"▲",defaultCols:2,maxCols:2,minHeight:320,suite:"vida"},{id:"astro",labelEn:"Astronomy",labelPt:"Astronomia",descriptionEn:"Moon phase, sun arc & ISS passes",descriptionPt:"Lua, sol & passagens da ISS",icon:"☽",defaultCols:1,maxCols:2,minHeight:300,suite:"learn"},{id:"lab-launcher",labelEn:"AI Lab launcher",labelPt:"Lan\xe7ador Lab de IA",descriptionEn:"Quick access tile for every AI tool",descriptionPt:"Atalho para cada ferramenta de IA",icon:"✦",defaultCols:1,maxCols:2,minHeight:220,suite:"lab"},{id:"learn-launcher",labelEn:"Learning launcher",labelPt:"Lan\xe7ador de Aprendizagem",descriptionEn:"School subjects & learning apps",descriptionPt:"Mat\xe9rias escolares & apps",icon:"◎",defaultCols:1,maxCols:2,minHeight:220,suite:"learn"},{id:"music",labelEn:"Music",labelPt:"M\xfasica",descriptionEn:"Recently played with Apple Music links",descriptionPt:"Ouvido recentemente com atalhos Apple Music",icon:"♪",defaultCols:1,maxCols:1,minHeight:260,suite:"ent"},{id:"night-sky",labelEn:"Night Sky",labelPt:"C\xe9u Noturno",descriptionEn:"Zenith map with visible constellations",descriptionPt:"Mapa do z\xe9nite com constela\xe7\xf5es vis\xedveis",icon:"✦",defaultCols:1,maxCols:2,minHeight:260,suite:"learn"}],ax=[{id:"all",labelKey:"widgets.picker.suite.all"},{id:"lab",labelKey:"suites.lab.name",color:d.w4.suites.lab},{id:"vida",labelKey:"suites.vida.name",color:d.w4.suites.vida},{id:"learn",labelKey:"suites.learn.name",color:d.w4.suites.learn},{id:"games",labelKey:"suites.games.name",color:d.w4.suites.games},{id:"ent",labelKey:"suites.ent.name",color:d.w4.suites.ent},{id:"tools",labelKey:"widgets.picker.suite.tools",color:d.w4.colors.success}],ay={lab:d.w4.suites.lab,vida:d.w4.suites.vida,learn:d.w4.suites.learn,games:d.w4.suites.games,ent:d.w4.suites.ent,tools:d.w4.colors.success},ab=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,aw=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.97) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,a$=l().div`
  position: fixed;
  inset: 0;
  z-index: ${d.w4.zIndex.modal};
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 16px;
  animation: ${ab} ${d.w4.transitions.fast};
`,av=l().div`
  width: 760px;
  max-width: 100%;
  max-height: 84vh;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${d.w4.elevation.lg};
  animation: ${aw} ${d.w4.transitions.base};
  display: flex;
  flex-direction: column;
`,ak=l().div`
  padding: 20px 22px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,aj=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,az=l().h2`
  margin: 0;
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${d.w4.colors.mainText};
`,aM=l().p`
  margin: 0;
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 480px;
`,aS=l().button`
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
`,aT=l().div`
  padding: 14px 22px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,aA=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,aF=l()("button",{shouldForwardProp:e=>"active"!==e&&"chipColor"!==e})`
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
`,aC=l().div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 22px 22px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`,aL=l()("button",{shouldForwardProp:e=>"added"!==e})`
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
`,aE=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
`,aP=l().span`
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
`,aN=l().div`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,aD=l().span`
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
`,aR=l().div`
  font-size: 11.5px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,aB=l().div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
`,aI=l()("span",{shouldForwardProp:e=>"swatchColor"!==e})`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({swatchColor:e})=>e};
`,aH=l().div`
  grid-column: 1 / -1;
  padding: 40px 20px;
  text-align: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 13px;
`;function a_({open:e,activeIds:t,locale:o,onAdd:r,onRemove:n,onClose:s}){let l=(0,i.useMemo)(()=>ta(o,ah),[o]),[c,d]=(0,i.useState)(""),[p,m]=(0,i.useState)("all"),g=(0,i.useRef)(null);(0,i.useEffect)(()=>{e&&(d(""),m("all"),requestAnimationFrame(()=>g.current?.focus()))},[e]),(0,i.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&s()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e,s]);let u=(0,i.useMemo)(()=>{let e=c.trim().toLowerCase();return af.filter(t=>{if("all"!==p&&t.suite!==p)return!1;if(!e)return!0;let a="pt"===o?t.labelPt:t.labelEn,i="pt"===o?t.descriptionPt:t.descriptionEn;return a.toLowerCase().includes(e)||i.toLowerCase().includes(e)||t.id.toLowerCase().includes(e)||t.suite.toLowerCase().includes(e)})},[c,p,o]);return e?eB().createPortal((0,a.jsx)(a$,{onClick:s,children:(0,a.jsxs)(av,{onClick:e=>e.stopPropagation(),role:"dialog","aria-label":l("widgets.picker.title"),children:[(0,a.jsxs)(ak,{children:[(0,a.jsxs)(aj,{children:[(0,a.jsx)(t2,{children:l("widgets.picker.eyebrow")}),(0,a.jsx)(aS,{onClick:s,"aria-label":l("widgets.picker.close"),children:(0,a.jsx)(td,{name:"close",size:14,"aria-hidden":"true"})})]}),(0,a.jsx)(az,{children:l("widgets.picker.title")}),(0,a.jsx)(aM,{children:l("widgets.picker.subtitle")})]}),(0,a.jsxs)(aT,{children:[(0,a.jsx)(t8,{ref:g,placeholder:l("widgets.picker.searchPlaceholder"),value:c,onChange:e=>d(e.target.value),before:(0,a.jsx)(td,{name:"search",size:14,"aria-hidden":"true"})}),(0,a.jsx)(aA,{role:"tablist",children:ax.map(e=>(0,a.jsxs)(aF,{active:p===e.id,chipColor:e.color,onClick:()=>m(e.id),role:"tab","aria-selected":p===e.id,children:[e.color&&(0,a.jsx)("span",{className:"dot"}),l(e.labelKey)]},e.id))})]}),(0,a.jsx)(aC,{children:0===u.length?(0,a.jsx)(aH,{children:l("widgets.picker.empty")}):u.map(e=>{let i=t.has(e.id),s="pt"===o?e.labelPt:e.labelEn,c="pt"===o?e.descriptionPt:e.descriptionEn,d=ay[e.suite],p=ax.find(t=>t.id===e.suite);return(0,a.jsxs)(aL,{added:i,onClick:()=>{i?n(e.id):r(e.id)},children:[(0,a.jsxs)(aE,{children:[(0,a.jsx)(aP,{children:e.icon}),(0,a.jsx)(aN,{children:s}),i&&(0,a.jsxs)(aD,{children:[(0,a.jsx)(td,{name:"check",size:10,"aria-hidden":"true"}),l("widgets.picker.added")]})]}),(0,a.jsx)(aR,{children:c}),(0,a.jsxs)(aB,{children:[(0,a.jsx)(aI,{swatchColor:d}),p?l(p.labelKey):e.suite]})]},e.id)})})]})}),document.body):null}var aO=o(88641),aK=o(84368);let aq=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,aG=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,aU=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`,aY=l().div`
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
`,aW=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${d.w4.colors.success};
  box-shadow: 0 0 6px ${d.w4.colors.success}80;
  animation: ${aG} 2s ease-in-out infinite;
`,aV=l().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${aq} 0.3s ease both;
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
`,aJ=l().span`
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${({color:e})=>e}18;
  color: ${({color:e})=>e};
  border: 1px solid ${({color:e})=>e}30;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,aQ=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
`,aZ=l().span`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  color: ${({color:e})=>e??d.w4.colors.mainTextMuted};
  font-size: 10px;
`,aX=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,a0=l().div`
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
`,a1=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function a4({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),o=(0,eb.useTrendingRepos)({days:7,perPage:2,refreshMs:3e5}),r=(0,eb.useHnFrontPage)({hitsPerPage:4,cacheKey:"techscope-hn",refreshMs:3e5}),n=o.repos??[],s=r.hits??[],l=o.failed&&r.failed;if(!n.length&&!s.length)return(0,a.jsx)(aU,{children:l?(0,a.jsxs)(a0,{role:"alert",children:[(0,a.jsx)(a1,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(aX,{children:t("widget.loading")})});let c=0;return(0,a.jsxs)(aU,{children:[(0,a.jsxs)(aY,{children:[(0,a.jsx)(aW,{})," ",t("techscopeLive.title")]}),n.map(e=>{var t;return(0,a.jsxs)(aV,{delay:c++,href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(aJ,{color:"#3fb950",children:"GH"}),(0,a.jsx)(aQ,{className:"row-title",children:e.full_name}),(0,a.jsxs)(aZ,{color:"#d29922",children:[(0,a.jsx)(aO.A,{size:10}),(t=e.stargazers_count)>=1e3?`${(t/1e3).toFixed(1)}k`:String(t)]})]},e.full_name)}),s.map(e=>{let t=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,a.jsxs)(aV,{delay:c++,href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(aJ,{color:"#ff6600",children:"HN"}),(0,a.jsx)(aQ,{className:"row-title",children:e.title}),(0,a.jsxs)(aZ,{color:"#ff6600",children:[(0,a.jsx)(aK.A,{size:10}),e.points??0]})]},e.objectID)})]})}let a2=o7.j.lisbon.lat,a5=o7.j.lisbon.lon,a3={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",77:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",85:"\uD83C\uDF28️",86:"\uD83C\uDF28️",95:"⛈️",96:"⛈️",99:"⛈️"},a6={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},a8={0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Light showers",81:"Showers",82:"Heavy showers",85:"Light snow showers",86:"Snow showers",95:"Thunderstorm",96:"Hail storm",99:"Severe hail storm"},a7={0:"C\xe9u limpo",1:"Pouco nublado",2:"Parcialmente nublado",3:"Encoberto",45:"Nevoeiro",48:"Nevoeiro gelado",51:"Chuviscos leves",53:"Chuviscos",55:"Chuviscos densos",61:"Chuva fraca",63:"Chuva",65:"Chuva forte",71:"Neve fraca",73:"Neve",75:"Neve forte",77:"Gr\xe3os de neve",80:"Aguaceiros fracos",81:"Aguaceiros",82:"Aguaceiros fortes",85:"Neve fraca",86:"Neve forte",95:"Trovoada",96:"Granizo",99:"Granizo forte"},a9=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,ie=(0,c.keyframes)`
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-6px) rotate(2deg); }
`,it=(0,c.keyframes)`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
`,io=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${a9} 0.3s ease both;
  cursor: pointer;
  border-radius: ${d.w4.borderRadius.sm};
  position: relative;

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,ia=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`,ii=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,ir=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.7;
  letter-spacing: 0.04em;
  white-space: nowrap;
`,is=l().div`
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
`,il=l().div`
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
    animation: ${it} 5s ease-in-out infinite;
    pointer-events: none;
  }

  @media (max-width: 520px) {
    width: 92px;
    height: 92px;
  }
`,ic=l().div`
  font-size: 84px;
  line-height: 1;
  position: relative;
  z-index: 1;
  animation: ${ie} 5s ease-in-out infinite;

  @media (max-width: 520px) {
    font-size: 64px;
  }
`,id=l().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,ip=l().div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,im=l().div`
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
`,ig=l().div`
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
`,iu=l().div`
  font-size: 16px;
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  margin-top: 10px;
  letter-spacing: -0.01em;
`,ih=l().div`
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 3px;
`,ix=l().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid ${d.w4.colors.border};

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,iy=l().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 4px;
`,ib=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 4px;
`,iw=l().div`
  font-size: 15px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,i$=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,iv=l().div`
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
`,ik=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function ij({locale:e}){var t;let o=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{forecast:r,failed:n}=(0,eb.useWeather)({lat:a2,lon:a5,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:"auto",cacheKey:"weather-lisbon-v3"}),s=()=>er("earth",{placeId:"lisbon"}),l=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),s())};if(!r||!r.current||!r.daily)return(0,a.jsx)(io,{role:"link",tabIndex:0,onClick:s,onKeyDown:l,children:n?(0,a.jsxs)(iv,{role:"alert",children:[(0,a.jsx)(ik,{children:o("widget.error.label")}),(0,a.jsx)("div",{children:o("widget.error.body")})]}):(0,a.jsx)(i$,{children:o("widget.loading")})});if(!r.current)return(0,a.jsx)(io,{children:(0,a.jsx)(i$,{children:o("widget.loading")})});let c=r.current,d=c.temperature_2m??0,p=c.apparent_temperature??d,m=c.relative_humidity_2m??0,g=c.weather_code??0,u=c.wind_speed_10m??0,h=1===c.is_day,f=(t=g,h?0===t?"#fbbf24":1===t?"#fcd34d":2===t?"#60a5fa":3===t?"#94a3b8":t>=95?"#c084fc":t>=51?"#38bdf8":t>=45?"#cbd5e1":"#60a5fa":t>=95?"#a78bfa":t>=51?"#60a5fa":"#818cf8"),x=r.daily??{},y=Math.round(x.temperature_2m_max?.[0]??d),b=Math.round(x.temperature_2m_min?.[0]??d),w=Math.round(x.uv_index_max?.[0]??0),$=x.sunrise?.[0],v=x.sunset?.[0],k=v?new Date(v).getTime():NaN,j=Number.isFinite(k)&&Date.now()<k?"sunset":"sunrise",z="sunset"===j?v:x.sunrise?.[1]??$;return(0,a.jsxs)(io,{role:"link",tabIndex:0,onClick:s,onKeyDown:l,children:[(0,a.jsxs)(ia,{children:[(0,a.jsxs)(ii,{children:["\uD83C\uDF24️ ",o("weather.city.lisbon")]}),(0,a.jsx)(ir,{children:o("weather.openInEarth")})]}),(0,a.jsxs)(is,{children:[(0,a.jsx)(il,{accent:f,children:(0,a.jsx)(ic,{children:!h&&g in a6?a6[g]:a3[g]??"\uD83C\uDF21️"})}),(0,a.jsxs)(id,{children:[(0,a.jsxs)(ip,{children:[(0,a.jsxs)(im,{accent:f,children:[Math.round(d),"\xb0"]}),(0,a.jsxs)(ig,{children:[(0,a.jsxs)("div",{children:["▲ ",(0,a.jsxs)("span",{children:[y,"\xb0"]})]}),(0,a.jsxs)("div",{children:["▼ ",(0,a.jsxs)("span",{children:[b,"\xb0"]})]})]})]}),(0,a.jsx)(iu,{children:("pt"===e?a7:a8)[g]??("pt"===e?"Desconhecido":"Unknown")}),(0,a.jsx)(ih,{children:o("weather.feelsLike",{t:Math.round(p)})})]})]}),(0,a.jsxs)(ix,{children:[(0,a.jsxs)(iy,{children:[(0,a.jsxs)(ib,{children:["\uD83D\uDCA7 ",o("weather.humidity")]}),(0,a.jsxs)(iw,{children:[m,"%"]})]}),(0,a.jsxs)(iy,{children:[(0,a.jsxs)(ib,{children:["\uD83D\uDCA8 ",o("weather.wind")]}),(0,a.jsxs)(iw,{children:[Math.round(u)," km/h"]})]}),(0,a.jsxs)(iy,{children:[(0,a.jsxs)(ib,{children:["☀️ ",o("weather.uv")]}),(0,a.jsx)(iw,{children:w})]}),(0,a.jsxs)(iy,{children:[(0,a.jsxs)(ib,{children:["sunset"===j?"\uD83C\uDF07":"\uD83C\uDF05"," ",o("sunset"===j?"weather.sunset":"weather.sunrise")]}),(0,a.jsx)(iw,{children:z?new Date(z).toLocaleTimeString("pt"===e?"pt-PT":"en-GB",{hour:"2-digit",minute:"2-digit"}):"—"})]})]})]})}let iz=[{id:"lisbon",tz:"Europe/Lisbon",labelEn:"Lisbon",labelPt:"Lisboa",flag:"\uD83C\uDDF5\uD83C\uDDF9"},{id:"london",tz:"Europe/London",labelEn:"London",labelPt:"Londres",flag:"\uD83C\uDDEC\uD83C\uDDE7"},{id:"newyork",tz:"America/New_York",labelEn:"New York",labelPt:"Nova Iorque",flag:"\uD83C\uDDFA\uD83C\uDDF8"},{id:"tokyo",tz:"Asia/Tokyo",labelEn:"Tokyo",labelPt:"T\xf3quio",flag:"\uD83C\uDDEF\uD83C\uDDF5"}],iM=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,iS=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${iM} 0.3s ease both;
`,iT=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
`,iA=l().div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,iF=l().div`
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
`,iC=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,iL=l().span`
  font-size: 16px;
  line-height: 1;
`,iE=l().div`
  display: flex;
  flex-direction: column;
`,iP=l().div`
  font-size: ${({primary:e})=>e?"14px":"12px"};
  font-weight: ${({primary:e})=>e?"600":"400"};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
`,iN=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,iD=l().div`
  font-size: ${({primary:e})=>e?"22px":"14px"};
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({primary:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  letter-spacing: -0.02em;
  flex-shrink: 0;
`;function iR({locale:e}){let[,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=setInterval(()=>t(e=>e+1),1e4);return()=>clearInterval(e)},[]),(0,a.jsxs)(iS,{children:[(0,a.jsxs)(iT,{children:["\uD83D\uDD50 ","pt"===e?"Rel\xf3gio mundial":"World clock"]}),(0,a.jsx)(iA,{children:iz.map((t,o)=>{var i,r;let n="pt"===e?t.labelPt:t.labelEn;return(0,a.jsxs)(iF,{primary:0===o,children:[(0,a.jsxs)(iC,{children:[(0,a.jsx)(iL,{children:t.flag}),(0,a.jsxs)(iE,{children:[(0,a.jsx)(iP,{primary:0===o,children:n}),(0,a.jsx)(iN,{children:(i=t.tz,new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{timeZone:i,weekday:"short",day:"numeric",month:"short"}))})]})]}),(0,a.jsx)(iD,{primary:0===o,children:(r=t.tz,new Date().toLocaleTimeString("en-GB",{timeZone:r,hour:"2-digit",minute:"2-digit"}))})]},t.id)})})]})}let iB=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,iI=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${iB} 0.3s ease both;
`,iH=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 10px;
`,i_=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  flex: 1;
  align-content: start;
`,iO=l().button`
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
`,iK=l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({tint:e})=>e};
`,iq=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,iG=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
  text-align: center;
  line-height: 1.5;
`;function iU({locale:e,pinnedAppIds:t,recentAppIds:o,apps:i,appMeta:r,onSelect:n}){let s=[...new Set([...t,...o])].slice(0,8).flatMap(e=>i.filter(t=>t.id===e));return(0,a.jsxs)(iI,{children:[(0,a.jsxs)(iH,{children:["⚡ ","pt"===e?"Atalhos":"Quick links"]}),0===s.length?(0,a.jsx)(iG,{children:"pt"===e?"Fixa apps para aceder\nrapidamente":"Pin apps for\nquick access"}):(0,a.jsx)(i_,{children:s.map(e=>{let t=r[e.id],o=t?.label??e.label;return(0,a.jsxs)(iO,{accentColor:t?.color??d.w4.colors.accent,onClick:()=>n(e),title:o,children:[(0,a.jsx)(iK,{tint:t?.color??d.w4.colors.accent,children:t?.icon&&(0,a.jsx)(td,{name:t.icon,size:20,"aria-hidden":"true"})}),(0,a.jsx)(iq,{children:o})]},e.id)})})]})}let iY=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,iW=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`,iV=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,iJ=l().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${iY} 0.3s ease both;
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
`,iQ=l().span`
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: #2da44e18;
  color: #2da44e;
  border: 1px solid #2da44e30;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,iZ=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
`,iX=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,i0=l().div`
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
`,i1=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function i4({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{items:o,failed:r}=(0,eb.useRssFeed)({url:"https://www.rtp.pt/noticias/rss",cacheKey:"news-portugal"}),n=o?.slice(0,9)??[];return n.length?(0,a.jsxs)(iW,{children:[(0,a.jsx)(iV,{children:"pt"===e?"Noticias PT":"PT News"}),n.map((e,t)=>(0,a.jsxs)(iJ,{delay:t,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(iQ,{children:"RTP"}),(0,a.jsx)(iZ,{className:"row-title",children:e.title})]},e.link))]}):(0,a.jsx)(iW,{children:r?(0,a.jsxs)(i0,{role:"alert",children:[(0,a.jsx)(i1,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(iX,{children:t("widget.loading")})})}let i2=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,i5=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`,i3=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,i6=l().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${i2} 0.3s ease both;
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
`,i8=l().span`
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: #cc000018;
  color: #cc0000;
  border: 1px solid #cc000030;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,i7=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
`,i9=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,re=l().div`
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
`,rt=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function ro({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{items:o,failed:r}=(0,eb.useRssFeed)({url:"http://rss.cnn.com/rss/edition.rss",cacheKey:"news-world"}),n=o?.slice(0,9)??[];return n.length?(0,a.jsxs)(i5,{children:[(0,a.jsx)(i3,{children:"pt"===e?"Noticias Mundo":"World News"}),n.map((e,t)=>(0,a.jsxs)(i6,{delay:t,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(i8,{children:"CNN"}),(0,a.jsx)(i7,{className:"row-title",children:e.title})]},e.link))]}):(0,a.jsx)(i5,{children:r?(0,a.jsxs)(re,{role:"alert",children:[(0,a.jsx)(rt,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(i9,{children:t("widget.loading")})})}var ra=o(99121);let ri=[{id:"bitcoin",symbol:"BTC",color:"#f7931a"},{id:"ethereum",symbol:"ETH",color:"#627eea"},{id:"solana",symbol:"SOL",color:"#9945ff"}],rr=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,rn=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${rr} 0.3s ease both;
`,rs=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 10px;
`,rl=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,rc=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid ${d.w4.colors.border};
  animation: ${rr} 0.3s ease both;
  animation-delay: ${({delay:e})=>80*e}ms;

  &:last-child {
    border-bottom: none;
  }
`,rd=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
`,rp=l().span`
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
`,rm=l().span`
  font-size: 13px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainText};
`,rg=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,ru=l().div`
  font-size: 13px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainText};
`,rh=l().div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 500;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({positive:e})=>e?"#3fb950":"#f85149"};
`,rf=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,rx=l().div`
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
`,ry=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function rb({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{prices:o,failed:r}=(0,eb.useSimplePrice)({ids:["bitcoin","ethereum","solana"],currencies:["eur","usd"],cacheKey:"crypto-prices"});return o?(0,a.jsxs)(rn,{children:[(0,a.jsx)(rs,{children:"Crypto"}),(0,a.jsx)(rl,{children:ri.map((e,t)=>{var i,r;let n=o[e.id];if(!n)return null;let s=n.eur_24h_change>=0;return(0,a.jsxs)(rc,{delay:t,children:[(0,a.jsxs)(rd,{children:[(0,a.jsx)(rp,{color:e.color,children:e.symbol.charAt(0)}),(0,a.jsx)(rm,{children:e.symbol})]}),(0,a.jsxs)(rg,{children:[(0,a.jsxs)(ru,{children:["€",(i=n.eur)>=1e3?`${i.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:0})}`:i.toFixed(2)]}),(0,a.jsxs)(rh,{positive:s,children:[s?(0,a.jsx)(aK.A,{size:11}):(0,a.jsx)(ra.A,{size:11}),(r=n.eur_24h_change,`${r>=0?"+":""}${r.toFixed(1)}%`)]})]})]},e.id)})})]}):(0,a.jsx)(rn,{children:r?(0,a.jsxs)(rx,{role:"alert",children:[(0,a.jsx)(ry,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(rf,{children:t("widget.loading")})})}let rw=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,r$=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  animation: ${rw} 0.3s ease both;
`,rv=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,rk=l().button`
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
  animation: ${rw} 0.3s ease both;
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
`,rj=l().span`
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
`,rz=l().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,rM=l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.85;
`,rS=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 1px;
`,rT=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  text-align: center;
  line-height: 1.5;
`,rA=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,rF=l().div`
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
`,rC=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function rL({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{quakes:o,source:r,loading:n,failed:s}=(0,eb.useSeismicQuakes)();if(n)return(0,a.jsx)(r$,{children:(0,a.jsx)(rA,{children:t("widget.loading")})});if(s)return(0,a.jsx)(r$,{children:(0,a.jsxs)(rF,{role:"alert",children:[(0,a.jsx)(rC,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]})});let l=o.slice().sort((e,t)=>t.time-e.time).slice(0,5),c=t("pt"===r?"seismic.title.pt":"seismic.title.world"),d=t("seismic.openInEarth");return(0,a.jsxs)(r$,{children:[(0,a.jsx)(rv,{children:c}),0===l.length?(0,a.jsx)(rT,{children:t("seismic.empty")}):l.map((t,o)=>{var i;let r=(i=t.mag)>=4?"#f85149":i>=2.5?"#d29922":"#3fb950";return(0,a.jsxs)(rk,{delay:o,onClick:()=>{null!=t.lat&&null!=t.lon?er("earth",{lat:t.lat.toFixed(4),lon:t.lon.toFixed(4),zoom:5}):er("earth",{placeId:"lisbon"})},title:d,children:[(0,a.jsxs)(rj,{color:r,children:["M ",t.mag.toFixed(1)]}),(0,a.jsxs)(rz,{children:[(0,a.jsx)(rM,{children:t.location}),(0,a.jsx)(rS,{children:function(e,t){try{return new Date(e).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}catch{return new Date(e).toISOString()}}(t.time,e)})]})]},t.key)})]})}let rE=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,rP=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  animation: ${rE} 0.3s ease both;
`,rN=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,rD=l().span`
  color: ${d.w4.colors.accent};
  margin-left: 6px;
  letter-spacing: 0.02em;
`,rR=l().a`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 0;
  text-decoration: none;
  animation: ${rE} 0.3s ease both;
  animation-delay: ${({delay:e})=>80*e}ms;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
`,rB=l().span`
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
`,rI=l().span`
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
`,rH=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,r_=l().div`
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
`,rO=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function rK({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{events:o,failed:r}=(0,eb.useOnThisDay)(),n=(0,i.useMemo)(()=>{let e,t,a;return o?(t=new Date((e=new Date).getFullYear(),0,0),a=Math.floor((e.getTime()-t.getTime())/864e5),[...o].sort((e,t)=>((0x9e3779b1*e.year^40503*a)>>>0)-((0x9e3779b1*t.year^40503*a)>>>0)).slice(0,4)):[]},[o]),s=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{day:"numeric",month:"long"});return o?(0,a.jsxs)(rP,{children:[(0,a.jsxs)(rN,{children:[t("onThisDay.title"),(0,a.jsx)(rD,{children:s})]}),n.map((e,t)=>{let o=e.pages?.[0]?.content_urls?.desktop?.page??void 0;return(0,a.jsxs)(rR,{delay:t,href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(rB,{children:e.year}),(0,a.jsx)(rI,{children:e.text})]},`${e.year}-${t}`)})]}):(0,a.jsx)(rP,{children:r?(0,a.jsxs)(r_,{role:"alert",children:[(0,a.jsx)(rO,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(rH,{children:t("widget.loading")})})}let rq=[{text:"Any sufficiently advanced technology is indistinguishable from magic.",author:"Arthur C. Clarke"},{text:"The best way to predict the future is to invent it.",author:"Alan Kay"},{text:"First, solve the problem. Then, write the code.",textPt:"Primeiro, resolve o problema. Depois, escreve o codigo.",author:"John Johnson"},{text:"Simplicity is the ultimate sophistication.",textPt:"A simplicidade e a sofisticacao suprema.",author:"Leonardo da Vinci"},{text:"Talk is cheap. Show me the code.",author:"Linus Torvalds"},{text:"The only way to do great work is to love what you do.",textPt:"A unica forma de fazer um excelente trabalho e amar o que fazes.",author:"Steve Jobs"},{text:"In the middle of difficulty lies opportunity.",textPt:"No meio da dificuldade encontra-se a oportunidade.",author:"Albert Einstein"},{text:"Make it work, make it right, make it fast.",author:"Kent Beck"},{text:"The computer was born to solve problems that did not exist before.",textPt:"O computador nasceu para resolver problemas que antes nao existiam.",author:"Bill Gates"},{text:"Code is like humor. When you have to explain it, it's bad.",author:"Cory House"},{text:"Imagination is more important than knowledge.",textPt:"A imaginacao e mais importante que o conhecimento.",author:"Albert Einstein"},{text:"Stay hungry, stay foolish.",author:"Steve Jobs"},{text:"Programs must be written for people to read, and only incidentally for machines to execute.",author:"Harold Abelson"},{text:"The advance of technology is based on making it fit in so that you don't really even notice it.",author:"Bill Gates"},{text:"The best error message is the one that never shows up.",textPt:"A melhor mensagem de erro e a que nunca aparece.",author:"Thomas Fuchs"},{text:"It's not a bug, it's a feature.",author:"Anonymous"},{text:"Knowledge is power.",textPt:"O conhecimento e poder.",author:"Francis Bacon"},{text:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",author:"Bill Gates"},{text:"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",textPt:"A perfeicao atinge-se nao quando nao ha mais nada a acrescentar, mas quando nao ha mais nada a retirar.",author:"Antoine de Saint-Exupery"},{text:'The most dangerous phrase in the language is "we\'ve always done it this way".',author:"Grace Hopper"},{text:"Science is organized knowledge. Wisdom is organized life.",textPt:"Ciencia e conhecimento organizado. Sabedoria e vida organizada.",author:"Immanuel Kant"},{text:"Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.",author:"Isaac Newton"},{text:"The important thing is not to stop questioning. Curiosity has its own reason for existence.",textPt:"O importante e nao parar de questionar. A curiosidade tem a sua propria razao de existir.",author:"Albert Einstein"},{text:"We can only see a short distance ahead, but we can see plenty there that needs to be done.",author:"Alan Turing"},{text:"Before software can be reusable it first has to be usable.",author:"Ralph Johnson"},{text:"Experience is the name everyone gives to their mistakes.",textPt:"Experiencia e o nome que todos dao aos seus erros.",author:"Oscar Wilde"},{text:"Creativity is intelligence having fun.",textPt:"Criatividade e inteligencia a divertir-se.",author:"Albert Einstein"},{text:"The only true wisdom is in knowing you know nothing.",textPt:"A unica sabedoria verdadeira e saber que nada sabes.",author:"Socrates"},{text:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{text:"Debugging is twice as hard as writing the code in the first place.",author:"Brian Kernighan"},{text:"Logic will get you from A to B. Imagination will take you everywhere.",textPt:"A logica leva-te de A a B. A imaginacao leva-te a todo o lado.",author:"Albert Einstein"},{text:"Java is to JavaScript what car is to carpet.",author:"Chris Heilmann"},{text:"The function of good software is to make the complex appear to be simple.",author:"Grady Booch"},{text:"One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.",author:"Elbert Hubbard"},{text:"A person who never made a mistake never tried anything new.",textPt:"Uma pessoa que nunca cometeu um erro nunca tentou nada de novo.",author:"Albert Einstein"},{text:"The best time to plant a tree was 20 years ago. The second best time is now.",textPt:"A melhor altura para plantar uma arvore foi ha 20 anos. A segunda melhor e agora.",author:"Chinese Proverb"},{text:"There are only two hard things in Computer Science: cache invalidation and naming things.",author:"Phil Karlton"},{text:"Good code is its own best documentation.",author:"Steve McConnell"},{text:"The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",author:"Tim Berners-Lee"},{text:"It always seems impossible until it's done.",textPt:"Parece sempre impossivel ate estar feito.",author:"Nelson Mandela"},{text:"Wise men speak because they have something to say; fools because they have to say something.",textPt:"Os sabios falam porque tem algo a dizer; os tolos porque tem de dizer algo.",author:"Plato"},{text:"Life is what happens when you're busy making other plans.",textPt:"A vida e o que acontece enquanto estas ocupado a fazer outros planos.",author:"John Lennon"},{text:"The greatest glory in living lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela"},{text:"Software is a great combination between artistry and engineering.",author:"Bill Gates"},{text:"The future belongs to those who believe in the beauty of their dreams.",textPt:"O futuro pertence aqueles que acreditam na beleza dos seus sonhos.",author:"Eleanor Roosevelt"},{text:"Walking on water and developing software from a specification are easy if both are frozen.",author:"Edward V. Berard"},{text:"Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",textPt:"Da-me uma alavanca suficientemente comprida e um ponto de apoio, e moverei o mundo.",author:"Archimedes"},{text:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",textPt:"Nos somos o que fazemos repetidamente. A excelencia nao e um ato, mas um habito.",author:"Aristotle"},{text:"Testing leads to failure, and failure leads to understanding.",author:"Burt Rutan"},{text:"Everybody should learn to program a computer, because it teaches you how to think.",textPt:"Todos deviam aprender a programar, porque isso ensina-te a pensar.",author:"Steve Jobs"}],rG=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,rU=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${rG} 0.3s ease both;
`,rY=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
`,rW=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 4px;
`,rV=l().div`
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
`,rJ=l().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 12px;
  letter-spacing: 0.03em;
`;function rQ({locale:e}){let t,o,i=(o=new Date((t=new Date).getFullYear(),0,0),Math.floor((t.getTime()-o.getTime())/864e5)%rq.length),r=rq[i],n="pt"===e&&r.textPt?r.textPt:r.text;return(0,a.jsxs)(rU,{children:[(0,a.jsx)(rY,{children:"pt"===e?"Citacao do dia":"Daily quote"}),(0,a.jsxs)(rW,{children:[(0,a.jsx)(rV,{children:n}),(0,a.jsxs)(rJ,{children:["— ",r.author]})]})]})}function rZ(e){return e.toString().padStart(2,"0")}function rX({hours:e,minutes:t,seconds:o}){let i=e=>e*Math.PI/180,r=o/60*360-90,n=t/60*360+o/60*6-90,s=e%12/12*360+t/60*30-90,l=70+44*Math.cos(i(r)),c=70+44*Math.sin(i(r)),p=70+46*Math.cos(i(n)),m=70+46*Math.sin(i(n)),g=70+32*Math.cos(i(s)),u=70+32*Math.sin(i(s));return(0,a.jsxs)("svg",{viewBox:"0 0 140 140",width:140,height:140,children:[(0,a.jsx)("circle",{cx:70,cy:70,r:60,fill:d.w4.colors.surface,stroke:d.w4.colors.border,strokeWidth:1.5}),Array.from({length:12},(e,t)=>{let o=t+1,r=o/12*360-90,n=70+48*Math.cos(i(r)),s=70+48*Math.sin(i(r));return(0,a.jsx)("text",{x:n,y:s+3,fill:d.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:d.w4.typography.fontFamily,children:o},o)}),Array.from({length:60},(e,t)=>{let o=t/60*360-90,r=t%5==0,n=r?53:56;return(0,a.jsx)("line",{x1:70+n*Math.cos(i(o)),y1:70+n*Math.sin(i(o)),x2:70+59*Math.cos(i(o)),y2:70+59*Math.sin(i(o)),stroke:r?d.w4.colors.mainTextMuted:d.w4.colors.border,strokeWidth:r?1.5:.8},t)}),(0,a.jsx)("line",{x1:70,y1:70,x2:g,y2:u,stroke:d.w4.colors.mainText,strokeWidth:3,strokeLinecap:"round"}),(0,a.jsx)("line",{x1:70,y1:70,x2:p,y2:m,stroke:d.w4.colors.accent,strokeWidth:2,strokeLinecap:"round"}),(0,a.jsx)("line",{x1:70-8*Math.cos(i(r)),y1:70-8*Math.sin(i(r)),x2:l,y2:c,stroke:"#f87171",strokeWidth:1,strokeLinecap:"round"}),(0,a.jsx)("circle",{cx:70,cy:70,r:3,fill:d.w4.colors.accent}),(0,a.jsx)("circle",{cx:70,cy:70,r:1.5,fill:"#f87171"})]})}let r0=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,r1=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  animation: ${r0} 0.3s ease both;
`,r4=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
  align-self: flex-start;
`,r2=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,r5=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 22px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  letter-spacing: 0.04em;
`,r3=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  text-align: center;
`,r6=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 2px;
`,r8=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  letter-spacing: 0.04em;
`;function r7({locale:e}){let[t,o]=(0,i.useState)(()=>new Date().getHours()),[r,n]=(0,i.useState)(()=>new Date().getMinutes()),[s,l]=(0,i.useState)(()=>new Date().getSeconds());(0,i.useEffect)(()=>{let e=setInterval(()=>{let e=new Date;o(e.getHours()),n(e.getMinutes()),l(e.getSeconds())},1e3);return()=>clearInterval(e)},[]);let c=t%12||12,d=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{weekday:"long",day:"numeric",month:"long"}),p=Intl.DateTimeFormat().resolvedOptions().timeZone;return(0,a.jsxs)(r1,{children:[(0,a.jsx)(r4,{children:"pt"===e?"Relogio":"Clock"}),(0,a.jsxs)(r2,{children:[(0,a.jsx)(rX,{hours:t,minutes:r,seconds:s}),(0,a.jsxs)(r5,{children:[rZ(t),":",rZ(r),(0,a.jsxs)("span",{style:{fontSize:"14px",opacity:.5},children:[":",rZ(s)]})]}),(0,a.jsx)(r3,{children:function(e,t,o){if("pt"===o){let o=1===e?"1 hora":`${e} horas`;return 0===t?o:15===t?`${o} e um quarto`:30===t?`${o} e meia`:45===t?`um quarto para as ${12===e?1:e+1}`:`${o} e ${t} minutos`}let a=e<12?"AM":"PM",i=e%12||12;return 0===t?`${i} o'clock ${a}`:15===t?`quarter past ${i} ${a}`:30===t?`half past ${i} ${a}`:45===t?`quarter to ${i%12+1} ${a}`:`${i}:${rZ(t)} ${a}`}(c,r,e)}),(0,a.jsx)(r6,{children:d}),(0,a.jsx)(r8,{children:p})]})]})}let r9="#e233ff",ne=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nt=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
`,no=l().div`
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
`,na=l().span`
  font-size: 13px;
  line-height: 1;
`,ni=l().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,nr=l().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${ne} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;
  min-width: 0;
  padding: 3px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${d.w4.colors.accent}; }
`,nn=l().span`
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
  background: ${r9}12;
  color: ${r9};
  border: 1px solid ${r9}25;
`,ns=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
  font-size: 11px;
`,nl=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,nc=l().div`
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
`,nd=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function np({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{items:o,loading:r,failed:n}=(0,eb.useRssFeed)({url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftrends.google.com%2Ftrending%2Frss%3Fgeo%3DUS",cacheKey:"internet-trends"}),s=o?.slice(0,12)??[];return s.length?(0,a.jsxs)(nt,{children:[(0,a.jsxs)(no,{children:[(0,a.jsx)(na,{children:"\uD83D\uDD0D"}),"pt"===e?"Pesquisas em Alta":"Trending Searches"]}),(0,a.jsx)(ni,{children:s.map((e,t)=>(0,a.jsxs)(nr,{delay:t,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(nn,{children:t+1}),(0,a.jsx)(ns,{className:"row-title",children:e.title})]},e.title))})]}):(0,a.jsx)(nt,{children:!r&&n?(0,a.jsxs)(nc,{role:"alert",children:[(0,a.jsx)(nd,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(nl,{children:t("widget.loading")})})}let nm=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]),ng="#58a6ff",nu=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nh=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
`,nf=l().div`
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
`,nx=l().span`
  font-size: 13px;
  line-height: 1;
`,ny=l().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,nb=l().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${nu} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;
  min-width: 0;
  padding: 3px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${d.w4.colors.accent}; }
`,nw=l().span`
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
  background: ${ng}12;
  color: ${ng};
  border: 1px solid ${ng}25;
`,n$=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
  font-size: 11px;
`,nv=l().span`
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  flex-shrink: 0;
`,nk=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,nj=l().div`
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
`,nz=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function nM({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{articles:o,loading:r,failed:n}=(0,eb.useWikiMostRead)(),s=(0,i.useMemo)(()=>(o??[]).filter(e=>!nm.has(e.article)).slice(0,12),[o]);return s.length?(0,a.jsxs)(nh,{children:[(0,a.jsxs)(nf,{children:[(0,a.jsx)(nx,{children:"\uD83D\uDCD6"}),"pt"===e?"Mais Lido na Wikip\xe9dia":"Most Read — Wikipedia"]}),(0,a.jsx)(ny,{children:s.map((e,t)=>{var o;return(0,a.jsxs)(nb,{delay:t,href:`https://en.wikipedia.org/wiki/${e.article}`,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(nw,{children:t+1}),(0,a.jsx)(n$,{className:"row-title",children:e.article.replace(/_/g," ")}),(0,a.jsx)(nv,{children:(o=e.views)>=1e6?`${(o/1e6).toFixed(1)}M`:o>=1e3?`${(o/1e3).toFixed(0)}k`:String(o)})]},e.article)})})]}):(0,a.jsx)(nh,{children:!r&&n?(0,a.jsxs)(nj,{role:"alert",children:[(0,a.jsx)(nz,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(nk,{children:t("widget.loading")})})}let nS="#f97316",nT=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nA=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
`,nF=l().div`
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
`,nC=l().span`
  font-size: 13px;
  line-height: 1;
`,nL=l().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,nE=l().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${nT} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;
  min-width: 0;
  padding: 3px 0;
  border-radius: ${d.w4.borderRadius.sm};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${d.w4.colors.accent}; }
`,nP=l().span`
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
  background: ${nS}12;
  color: ${nS};
  border: 1px solid ${nS}25;
`,nN=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${d.w4.colors.mainText};
  opacity: 0.85;
  font-size: 11px;
`,nD=l().span`
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  flex-shrink: 0;
`,nR=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,nB=l().div`
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
`,nI=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function nH({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{stories:o,loading:r,failed:n}=(0,eb.useHnTopStories)({limit:12}),s=o??[];return s.length?(0,a.jsxs)(nA,{children:[(0,a.jsxs)(nF,{children:[(0,a.jsx)(nC,{children:"\uD83D\uDD25"}),"pt"===e?"Em Alta no HN":"Hot on Hacker News"]}),(0,a.jsx)(nL,{children:s.map((e,t)=>(0,a.jsxs)(nE,{delay:t,href:e.url??`https://news.ycombinator.com/item?id=${e.id}`,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(nP,{children:t+1}),(0,a.jsx)(nN,{className:"row-title",children:e.title}),(0,a.jsxs)(nD,{children:["▲",e.score]})]},e.id))})]}):(0,a.jsx)(nA,{children:!r&&n?(0,a.jsxs)(nB,{role:"alert",children:[(0,a.jsx)(nI,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]}):(0,a.jsx)(nR,{children:t("widget.loading")})})}let n_=[{key:"crypto",labelKey:"health.ch.crypto",color:"#f7931a",unit:"ms",floor:0,ceil:500,consumers:["Crypto"]},{key:"weather",labelKey:"health.ch.weather",color:"#58a6ff",unit:"ms",floor:0,ceil:500,consumers:["Weather"]},{key:"wiki",labelKey:"health.ch.wiki",color:"#3fb950",unit:"ms",floor:0,ceil:500,consumers:["OnThisDay","WikiTop"]},{key:"hn",labelKey:"health.ch.hn",color:"#f97316",unit:"ms",floor:0,ceil:500,consumers:["TechScope","HN Hot"]},{key:"dom",labelKey:"health.ch.dom",color:"#f87171",unit:"",floor:0,ceil:5e3},{key:"fps",labelKey:"health.ch.fps",color:"#d29922",unit:"fps",floor:0,ceil:120}],nO={crypto:"https://api.coingecko.com/api/v3/ping",weather:"https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.14&current=temperature_2m",wiki:"https://en.wikipedia.org/api/rest_v1/page/summary/Lisbon",hn:"https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=1"},nK=Object.keys(nO);async function nq(e,t){let o=`widget-cache:ping-${e}`,a=await (0,V.getLocalSetting)(o);if(a)try{let e=JSON.parse(a);if(Date.now()-e.cachedAt<6e4)return e.latency}catch{}let i=performance.now();try{await fetch(t);let e=Math.round(performance.now()-i),a={latency:e,cachedAt:Date.now()};return(0,V.putLocalSetting)(o,JSON.stringify(a)),e}catch{return -1}}let nG=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,nU=(0,c.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,nY=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`,nW=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
`,nV=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
`,nJ=l().span`
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
`,nQ=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({tone:e})=>"ok"===e?"#3fb950":"warn"===e?"#d29922":"#f85149"};
  animation: ${nU} 1.5s ease-in-out infinite;
`,nZ=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  flex: 1;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,nX=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${nG} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
`,n0=l().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,n1=l().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,n4=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,n2=l().span`
  font-size: 9px;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainTextFaint};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,n5=l().div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`,n3=l().span`
  font-size: 14px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({color:e,warn:t})=>t?"#f85149":e};
  transition: color ${d.w4.transitions.base};
  font-variant-numeric: tabular-nums;
`,n6=l().span`
  font-size: 10px;
  font-weight: 400;
  opacity: 0.6;
`,n8=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  /* For latency: up = worse (red-ish), down = better (green).
     For FPS: up = better, down = worse. Invert accordingly. */
  color: ${({dir:e,latency:t})=>"flat"===e?d.w4.colors.mainTextFaint:(t?"up"===e:"down"===e)?"#f85149":"#3fb950"};
`,n7=l().div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${d.w4.colors.border};
  overflow: hidden;
`,n9=l().div`
  width: ${({pct:e})=>Math.min(100,e)}%;
  height: 100%;
  border-radius: 2px;
  background: ${({color:e})=>e};
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 6px ${({color:e})=>`${e}40`};
`,se=l().div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 16px;
`,st=l().div`
  flex: 1;
  height: ${({h:e})=>e}%;
  min-height: 1px;
  border-radius: 1px;
  background: ${({color:e,latest:t})=>t?e:`${e}40`};
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`,so=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`;function sa({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>ta(t,ah),[t]),[r,n]=(0,i.useState)(()=>n_.map(()=>Array(24).fill(0))),[s,l]=(0,i.useState)({}),[c,p]=(0,i.useState)(!1),m=(0,i.useRef)(0),g=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=function(){let e=0,t=performance.now(),o=60,a=0;function i(){e++;let r=performance.now(),n=r-t;n>=1e3&&(o=Math.round(1e3*e/n),e=0,t=r),a=requestAnimationFrame(i)}return{start(){a=requestAnimationFrame(i)},stop(){cancelAnimationFrame(a)},get fps(){return o}}}();return g.current=e,e.start(),()=>e.stop()},[]);let u=(0,i.useCallback)(async()=>{let e=m.current;m.current+=1;let t=nK[e%nK.length],o=nO[t],a=await nq(t,o),i=a<0,r=document.getElementsByTagName("*").length,s=g.current?.fps??0;l(e=>({...e,[t]:i})),n(e=>e.map((e,o)=>{let n,l=n_[o];if(l.key===t)n=i?e[e.length-1]:a;else if("dom"===l.key)n=r;else{if("fps"!==l.key)return e;n=s}return[...e.slice(1),n]})),p(!0)},[]);if((0,i.useEffect)(()=>{u();let e=setInterval(u,5e3);return()=>clearInterval(e)},[u]),!c)return(0,a.jsx)(nY,{children:(0,a.jsx)(so,{children:o("health.measuring")})});let h=d.w4.colors.mainTextFaint,f=Object.values(s).filter(Boolean).length,x=n_.filter(e=>"ms"===e.unit&&!s[e.key]&&r[n_.indexOf(e)][23]>300).length,y=f>0?"bad":x>0?"warn":"ok",b=f>0?o("health.status.offline",{n:f}):x>0?o("health.status.slow",{n:x}):o("health.status.ok");return(0,a.jsxs)(nY,{children:[(0,a.jsxs)(nW,{children:[(0,a.jsxs)(nV,{children:[(0,a.jsx)(nQ,{tone:y}),o("health.title")]}),(0,a.jsx)(nJ,{tone:y,children:b})]}),(0,a.jsx)(nZ,{children:n_.map((e,t)=>{let i=r[t],n=i[i.length-1],l=i[i.length-2]??n,c="ms"===e.unit,d=c&&!!s[e.key],p=!d&&c&&n>300,m=d?100:(n-e.floor)/(e.ceil-e.floor)*100,g=d?h:p?"#f85149":e.color,u=d?h:e.color,f=d?o("health.offline"):"dom"===e.key&&n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n)),x=d?"":e.unit,y=n-l,b=!d&&Math.abs(y)>=(c?10:2)?y>0?"up":"down":"flat",w=e.consumers?.length?o("health.consumers",{list:e.consumers.join(" \xb7 ")}):"";return(0,a.jsxs)(nX,{delay:t,children:[(0,a.jsxs)(n0,{children:[(0,a.jsxs)(n1,{children:[(0,a.jsx)(n4,{children:o(e.labelKey)}),w&&(0,a.jsx)(n2,{children:w})]}),(0,a.jsxs)(n5,{children:[!d&&"flat"!==b&&(0,a.jsx)(n8,{dir:b,latency:c,children:"up"===b?"▲":"down"===b?"▼":"\xb7"}),(0,a.jsxs)(n3,{color:u,warn:p,children:[f,x&&(0,a.jsx)(n6,{children:x})]})]})]}),(0,a.jsx)(n7,{children:(0,a.jsx)(n9,{pct:m,color:g})}),(0,a.jsx)(se,{children:i.map((t,o)=>{let r=Math.max(2,(t-e.floor)/(e.ceil-e.floor)*100);return(0,a.jsx)(st,{h:Math.min(100,r),color:d&&o===i.length-1?h:p&&o===i.length-1?"#f85149":e.color,latest:o===i.length-1},o)})})]},e.key)})})]})}let si="widget-cache:pet-state",sr={lastVisit:Date.now(),happiness:80,totalPets:0,totalFeeds:0,name:"Pixel"},sn={ecstatic:{en:"Purring loudly!",pt:"A ronronar alto!"},happy:{en:"Feeling great~",pt:"Est\xe1 \xf3timo~"},content:{en:"Chilling...",pt:"Relaxando..."},lonely:{en:"Misses you...",pt:"Tem saudades..."},dramatic:{en:"WHERE WERE YOU?!",pt:"ONDE ESTAVAS?!"}},ss=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,sl=(0,c.keyframes)`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.03); }
`,sc=(0,c.keyframes)`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(8deg); }
`,sd=(0,c.keyframes)`
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
`,sp=(0,c.keyframes)`
  0%, 42%, 44%, 100% { ry: 7; }
  43% { ry: 1; }
`,sm=(0,c.keyframes)`
  0%, 100% { ry: 1; }
`,sg=(0,c.keyframes)`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-0.5px); }
  75% { transform: translateX(0.5px); }
`,su=(0,c.keyframes)`
  0% { opacity: 1; transform: translate(0, 0) scale(1); }
  100% { opacity: 0; transform: translate(var(--dx), -40px) scale(0.5); }
`,sh=(0,c.keyframes)`
  0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
  30% { opacity: 1; transform: translate(4px, -8px) scale(0.8); }
  100% { opacity: 0; transform: translate(10px, -20px) scale(1); }
`,sf=(0,c.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
`,sx=(0,c.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
`,sy=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${ss} 0.3s ease both;
  user-select: none;
`,sb=l().div`
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
`,sw=l().span`
  color: ${d.w4.colors.mainText};
  font-weight: 700;
`,s$=l().div`
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
    svg .cat-body { animation: ${sg} 0.15s ease infinite; }
  `}
`,sv=l().div`
  position: absolute;
  font-size: 16px;
  pointer-events: none;
  --dx: ${({dx:e})=>e}px;
  animation: ${su} 0.8s ease-out forwards;
`,sk=l().text`
  font-size: 14px;
  fill: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 700;
`,sj=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`,sz=l().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  font-style: italic;
`,sM=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,sS=l().div`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background: ${d.w4.colors.border};
  overflow: hidden;
`,sT=l().div`
  width: ${({pct:e})=>e}%;
  height: 100%;
  border-radius: 2px;
  transition: width 0.6s ease, background 0.3s;
  background: ${({mood:e})=>{switch(e){case"ecstatic":return"#3fb950";case"happy":return"#58a6ff";case"content":return"#d29922";case"lonely":return"#f97316";case"dramatic":return"#f85149"}}};
`,sA=l().button`
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
`;function sF({mood:e}){let t="lonely"===e||"dramatic"===e,o="ecstatic"===e||"happy"===e,i=(()=>{switch(e){case"ecstatic":return"M 92,104 Q 100,114 108,104";case"happy":return"M 94,104 Q 100,110 106,104";case"content":return"M 95,105 L 105,105";case"lonely":return"M 94,108 Q 100,103 106,108";case"dramatic":return"M 92,110 Q 100,102 108,110"}})(),r=o?"#4ade80":t?"#f97316":"#58a6ff";return(0,a.jsxs)("svg",{viewBox:"0 0 200 200",width:"140",height:"140",children:[(0,a.jsxs)("g",{style:{transformOrigin:"145px 155px",animation:`${t?sd:sc} ${t?"4s":"2s"} ease-in-out infinite`},children:[(0,a.jsx)("path",{d:"M 140,155 Q 160,130 170,110 Q 175,100 168,95",stroke:"#7c6f5b",strokeWidth:"6",fill:"none",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M 140,155 Q 160,130 170,110 Q 175,100 168,95",stroke:"#9a8c78",strokeWidth:"4",fill:"none",strokeLinecap:"round"})]}),(0,a.jsxs)("g",{className:"cat-body",style:{transformOrigin:"100px 155px",animation:`${sl} 3s ease-in-out infinite`},children:[(0,a.jsx)("ellipse",{cx:"100",cy:"155",rx:"40",ry:"28",fill:"#9a8c78"}),(0,a.jsx)("ellipse",{cx:"100",cy:"160",rx:"25",ry:"18",fill:"#b5a894"})]}),(0,a.jsx)("ellipse",{cx:"72",cy:"175",rx:"12",ry:"7",fill:"#9a8c78"}),(0,a.jsx)("ellipse",{cx:"128",cy:"175",rx:"12",ry:"7",fill:"#9a8c78"}),(0,a.jsx)("ellipse",{cx:"72",cy:"177",rx:"5",ry:"3",fill:"#c4b5a0"}),(0,a.jsx)("ellipse",{cx:"128",cy:"177",rx:"5",ry:"3",fill:"#c4b5a0"}),(0,a.jsx)("circle",{cx:"100",cy:"95",r:"36",fill:"#9a8c78"}),(0,a.jsx)("ellipse",{cx:"75",cy:"100",rx:"10",ry:"6",fill:"#a89880"}),(0,a.jsx)("ellipse",{cx:"125",cy:"100",rx:"10",ry:"6",fill:"#a89880"}),(0,a.jsxs)("g",{style:{transformOrigin:"78px 68px",animation:t?`${sf} 3s ease-in-out infinite`:void 0},children:[(0,a.jsx)("polygon",{points:"78,68 62,28 92,58",fill:"#9a8c78"}),(0,a.jsx)("polygon",{points:"79,65 67,38 88,58",fill:"#e8a0b0"})]}),(0,a.jsxs)("g",{style:{transformOrigin:"122px 68px",animation:t?`${sx} 3s ease-in-out infinite`:void 0},children:[(0,a.jsx)("polygon",{points:"122,68 138,28 108,58",fill:"#9a8c78"}),(0,a.jsx)("polygon",{points:"121,65 133,38 112,58",fill:"#e8a0b0"})]}),(0,a.jsx)("path",{d:"M 92,70 L 95,80",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M 100,68 L 100,78",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M 108,70 L 105,80",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,a.jsx)("ellipse",{cx:"85",cy:"90",rx:"7",ry:t?1:7,fill:r,style:t?{animation:`${sm} 1s ease infinite`}:{animation:`${sp} 4s ease-in-out infinite`,animationDelay:"0.5s"}}),(0,a.jsx)("ellipse",{cx:"115",cy:"90",rx:"7",ry:t?1:7,fill:r,style:t?{animation:`${sm} 1s ease infinite`}:{animation:`${sp} 4s ease-in-out infinite`}}),!t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("circle",{cx:o?86:85,cy:o?89:90,r:o?4:3.5,fill:"#0d1117"}),(0,a.jsx)("circle",{cx:o?116:115,cy:o?89:90,r:o?4:3.5,fill:"#0d1117"}),(0,a.jsx)("circle",{cx:83,cy:87,r:1.5,fill:"white",opacity:.8}),(0,a.jsx)("circle",{cx:113,cy:87,r:1.5,fill:"white",opacity:.8})]}),(0,a.jsx)("polygon",{points:"100,97 96,101 104,101",fill:"#e8a0b0"}),(0,a.jsx)("path",{d:i,stroke:"#7c6f5b",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),(0,a.jsx)("line",{x1:"55",y1:"96",x2:"78",y2:"95",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"55",y1:"102",x2:"78",y2:"100",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"55",y1:"108",x2:"78",y2:"104",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"145",y1:"96",x2:"122",y2:"95",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"145",y1:"102",x2:"122",y2:"100",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,a.jsx)("line",{x1:"145",y1:"108",x2:"122",y2:"104",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("g",{style:{animation:`${sh} 2s ease-in-out infinite`},children:(0,a.jsx)(sk,{x:"130",y:"72",children:"z"})}),(0,a.jsx)("g",{style:{animation:`${sh} 2s ease-in-out 0.6s infinite`},children:(0,a.jsx)(sk,{x:"140",y:"60",fontSize:"11",children:"z"})}),(0,a.jsx)("g",{style:{animation:`${sh} 2s ease-in-out 1.2s infinite`},children:(0,a.jsx)(sk,{x:"148",y:"48",fontSize:"9",children:"z"})})]}),"ecstatic"===e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("text",{x:"45",y:"55",fontSize:"10",opacity:"0.7",children:"✨"}),(0,a.jsx)("text",{x:"148",y:"50",fontSize:"8",opacity:"0.5",children:"✨"})]})]})}function sC({locale:e}){var t;let[o,r]=(0,i.useState)(sr),[n,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)([]),d=(0,i.useRef)(0);(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await (0,V.getSetting)(si);if(!e){if(t)try{let e,o=JSON.parse(t),a=(e=(Date.now()-o.lastVisit)/36e5)<.5?Math.min(100,o.happiness+5):e<2?o.happiness:e<6?Math.max(0,o.happiness-10):e<24?Math.max(0,o.happiness-25):Math.max(0,o.happiness-50),i={...o,happiness:a,lastVisit:Date.now()};r(i),(0,V.putSetting)(si,JSON.stringify(i))}catch{r(sr)}s(!0)}})(),()=>{e=!0}},[]),(0,i.useCallback)(e=>{r(e),(0,V.putSetting)(si,JSON.stringify(e))},[]);let p=(0,i.useCallback)(()=>{let e=d.current++,t=(Math.random()-.5)*40;c(o=>[...o,{id:e,dx:t}]),setTimeout(()=>c(t=>t.filter(t=>t.id!==e)),800),r(e=>{let t={...e,happiness:Math.min(100,e.happiness+8),totalPets:e.totalPets+1,lastVisit:Date.now()};return(0,V.putSetting)(si,JSON.stringify(t)),t})},[]),m=(0,i.useCallback)(()=>{r(e=>{let t={...e,happiness:Math.min(100,e.happiness+15),totalFeeds:e.totalFeeds+1,lastVisit:Date.now()};return(0,V.putSetting)(si,JSON.stringify(t)),t})},[]);if(!n)return null;let g=(t=o.happiness)>=90?"ecstatic":t>=70?"happy":t>=40?"content":t>=20?"lonely":"dramatic",u="pt"===e?sn[g].pt:sn[g].en;return(0,a.jsxs)(sy,{children:[(0,a.jsxs)(sb,{children:[(0,a.jsxs)("span",{children:["\uD83D\uDC31 ",(0,a.jsx)(sw,{children:o.name})]}),(0,a.jsxs)(sM,{children:[(0,a.jsxs)("span",{children:["❤️ ",o.totalPets]}),(0,a.jsxs)("span",{children:["\uD83D\uDC1F ",o.totalFeeds]})]})]}),(0,a.jsxs)(s$,{mood:g,onClick:p,title:"pt"===e?"Faz festinhas!":"Pet me!",children:[(0,a.jsx)(sF,{mood:g}),l.map(e=>(0,a.jsx)(sv,{dx:e.dx,children:"❤️"},e.id))]}),(0,a.jsxs)(sj,{children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,a.jsx)(sz,{children:u}),(0,a.jsx)(sS,{children:(0,a.jsx)(sT,{pct:o.happiness,mood:g})})]}),(0,a.jsxs)(sA,{onClick:e=>{e.stopPropagation(),m()},children:["\uD83D\uDC1F ","pt"===e?"Dar comida":"Feed"]})]})]})}let sL=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,sE=(0,c.keyframes)`
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(251, 146, 60, 0.4)); }
  50%      { transform: scale(1.08); filter: drop-shadow(0 0 14px rgba(251, 146, 60, 0.7)); }
`,sP=l().button`
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
  animation: ${sL} 0.3s ease both;

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${d.w4.borderRadius.sm};
  }
`,sN=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,sD=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${d.w4.spacing.md};
  flex: 1;
`,sR=l().div`
  font-size: 56px;
  line-height: 1;
  animation: ${({active:e})=>e?sE:"none"} 2.4s ease-in-out infinite;
  opacity: ${({active:e})=>e?1:.35};
  filter: ${({active:e})=>e?"none":"grayscale(0.6)"};
`,sB=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,sI=l().div`
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  color: #fb923c;
  text-shadow: 0 0 16px rgba(251, 146, 60, 0.35);
`,sH=l().div`
  font-size: ${d.w4.typography.fontSizeSm};
  color: rgba(251, 146, 60, 0.85);
  font-weight: 600;
  margin-top: 2px;
`,s_=l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  font-weight: 500;
`,sO=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 6px;
  border-top: 1px solid ${d.w4.colors.border};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,sK=l().span`
  color: ${d.w4.colors.accent};
  font-weight: 700;
`;function sq({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{progress:o}=(0,eb.useDaily)(),r=o?.completedToday.length??0,n=o?.missions.length??0,s=o?.totalPoints??0,l=(0,eb.todayISO)(),c=o?.history??{},d=r>=eb.STREAK_THRESHOLD,p=d&&!(c[l]?.length>=eb.STREAK_THRESHOLD)?{...c,[l]:o?.completedToday??[]}:c,m=o?(0,eb.computeStreakFromHistory)(p):0,g=d||(c[l]?.length??0)>=eb.STREAK_THRESHOLD;return(0,a.jsxs)(sP,{onClick:()=>{window.location.hash="#/daily"},title:t("streak.open"),children:[(0,a.jsxs)(sN,{children:["\uD83D\uDD25 ",t("streak.title")]}),(0,a.jsxs)(sD,{children:[(0,a.jsx)(sR,{active:m>0||g,children:"\uD83D\uDD25"}),m>0?(0,a.jsxs)(sB,{children:[(0,a.jsx)(sI,{children:m}),(0,a.jsx)(sH,{children:t("streak.dayStreak")})]}):(0,a.jsx)(s_,{children:t("streak.noStreak")})]}),(0,a.jsxs)(sO,{children:[(0,a.jsx)("span",{children:t("streak.todayDone",{n:r,total:n})}),(0,a.jsx)(sK,{children:t("streak.points",{n:s})})]})]})}let sG=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,sU=l().button`
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
  animation: ${sG} 0.3s ease both;

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${d.w4.borderRadius.sm};
  }
`,sY=l().div`
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
`,sW=l().div`
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
`,sV=l().div`
  text-align: center;
  color: ${({isToday:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextFaint};
  font-weight: ${({isToday:e})=>e?700:400};
`,sJ=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,sQ=l().div`
  display: grid;
  grid-template-columns: 18px 1fr ${"repeat(7, 12px)"} 22px;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
  border-radius: ${d.w4.borderRadius.sm};
  animation: ${sG} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
  transition: background ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
`,sZ=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  color: ${d.w4.colors.mainText};
`,sX=l().div`
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s0=l().div`
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
`,s1=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  text-align: right;
  color: ${({hot:e,lit:t})=>e?"#fb923c":t?d.w4.colors.mainText:d.w4.colors.mainTextFaint};
  text-shadow: ${({hot:e})=>e?"0 0 8px rgba(251, 146, 60, 0.45)":"none"};
`,s4=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 6px;
  border-top: 1px solid ${d.w4.colors.border};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
`,s2=l().span`
  color: ${d.w4.colors.accent};
  font-weight: 700;
`,s5=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  text-align: center;
  padding: 0 ${d.w4.spacing.sm};
`,s3=["S","M","T","W","T","F","S"],s6=["D","S","T","Q","Q","S","S"];function s8({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>ta(t,ah),[t]),{progress:r}=(0,eb.useDaily)(),n=(0,i.useMemo)(()=>(0,eb.lastNDays)(7),[]),s=(0,eb.todayISO)(),l=(0,i.useMemo)(()=>{if(!r)return new Set;let e=new Set;for(let t of Object.values(r.history))for(let o of t)e.add(o);return e},[r]),c=()=>{window.location.hash="#/daily"};if(!r||0===l.size)return(0,a.jsxs)(sU,{onClick:c,title:o("habits.open"),children:[(0,a.jsxs)(sY,{children:["\uD83C\uDFAF ",o("habits.title")]}),(0,a.jsx)(s5,{children:o("habits.empty")})]});let p=r.missions.filter(e=>l.has(e.id)).slice(0,5),m=p.reduce((e,t)=>e+n.filter(e=>(0,eb.wasMissionDone)(r,t.id,e)).length,0),g="pt"===t?s6:s3;return(0,a.jsxs)(sU,{onClick:c,title:o("habits.open"),children:[(0,a.jsxs)(sY,{children:[(0,a.jsxs)("span",{children:["\uD83C\uDFAF ",o("habits.title")]}),(0,a.jsx)("span",{children:o("habits.last7")})]}),(0,a.jsxs)(sW,{children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),n.map(e=>{let t=new Date(`${e}T00:00:00`).getDay();return(0,a.jsx)(sV,{isToday:e===s,children:g[t]},e)}),(0,a.jsx)("span",{})]}),(0,a.jsx)(sJ,{children:p.map((e,o)=>{let i=function(e,t){let o=0,a=new Date;for(;;){let i=a.toISOString().slice(0,10);if(!(0,eb.wasMissionDone)(e,t.id,i)||(o+=1,a.setDate(a.getDate()-1),o>365))break}return o}(r,e),l=e.color??d.w4.colors.accent,c=(0,eb.missionLabel)(e,t);return(0,a.jsxs)(sQ,{delay:o,children:[(0,a.jsx)(sZ,{style:{color:l},children:tc(e.emoji)?(0,a.jsx)(td,{name:e.emoji,size:14}):e.emoji}),(0,a.jsx)(sX,{children:c}),n.map(t=>(0,a.jsx)(s0,{done:(0,eb.wasMissionDone)(r,e.id,t),today:t===s,tint:l},t)),(0,a.jsx)(s1,{hot:i>=5,lit:i>0,children:i>0?i:"\xb7"})]},e.id)})}),(0,a.jsxs)(s4,{children:[(0,a.jsx)("span",{children:o("habits.weekDone",{n:m})}),(0,a.jsxs)(s2,{children:[o("habits.openShort")," →"]})]})]})}let s7="9b6f2645abf1725625c843aa71e3efd5",s9=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,le=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`,lt=l().div`
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
`,lo=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`,la=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast};
  animation: ${s9} 0.3s ease both;
  animation-delay: ${({delay:e})=>70*e}ms;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
  &:hover .movie-title {
    color: ${d.w4.colors.accent};
  }
`,li=l().img`
  width: 32px;
  height: 48px;
  border-radius: 3px;
  object-fit: cover;
  flex-shrink: 0;
  background: ${d.w4.colors.border};
`,lr=l().div`
  width: 32px;
  height: 48px;
  border-radius: 3px;
  flex-shrink: 0;
  background: ${d.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`,ln=l().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  flex: 1;
`,ls=l().span`
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color ${d.w4.transitions.fast};
`,ll=l().span`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
`,lc=l().span`
  font-size: 9px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 3px;
  letter-spacing: 0.04em;
  background: ${({type:e})=>"movie"===e?"#58a6ff14":"#e233ff14"};
  color: ${({type:e})=>"movie"===e?"#58a6ff":"#e233ff"};
  border: 1px solid ${({type:e})=>"movie"===e?"#58a6ff25":"#e233ff25"};
`,ld=l().span`
  color: #d29922;
`,lp=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,lm=l().div`
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
`,lg=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function lu({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),[o]=(0,eb.useProfile)(),{items:r,loading:n,failed:s}=(0,eb.useTmdbTrending)({apiKey:s7,cacheKey:"trending-movies"}),l=(0,i.useMemo)(()=>r?(0,eb.filterMediaByAge)(r.filter(e=>"movie"===e.media_type||"tv"===e.media_type),o.ageMode).slice(0,5):[],[r,o.ageMode]);return n?(0,a.jsx)(le,{children:(0,a.jsx)(lp,{children:t("widget.loading")})}):s7?s||0===l.length?(0,a.jsxs)(le,{children:[(0,a.jsxs)(lt,{children:[(0,a.jsx)("span",{children:"\uD83C\uDFAC"}),t("movies.trending.title")]}),(0,a.jsxs)(lm,{role:"alert",children:[(0,a.jsx)(lg,{children:t("widget.error.label")}),(0,a.jsx)("div",{children:t("widget.error.body")})]})]}):(0,a.jsxs)(le,{children:[(0,a.jsxs)(lt,{children:[(0,a.jsx)("span",{children:"\uD83C\uDFAC"}),t("movies.trending.title")]}),(0,a.jsx)(lo,{children:l.map((e,t)=>{let o=e.title??e.name??"—",i=(e.release_date??e.first_air_date??"").slice(0,4),r=(e.vote_average??0).toFixed(1);return(0,a.jsxs)(la,{delay:t,onClick:()=>er("movies",{id:e.id,type:e.media_type}),children:[e.poster_path?(0,a.jsx)(li,{src:(0,eb.tmdbPosterUrl)(e.poster_path,"w185"),alt:o,loading:"lazy"}):(0,a.jsx)(lr,{children:"movie"===e.media_type?"\uD83C\uDFAC":"\uD83D\uDCFA"}),(0,a.jsxs)(ln,{children:[(0,a.jsx)(ls,{className:"movie-title",children:o}),(0,a.jsxs)(ll,{children:[(0,a.jsx)(lc,{type:e.media_type,children:"movie"===e.media_type?"MOVIE":"TV"}),i&&(0,a.jsx)("span",{children:i}),(0,a.jsxs)("span",{children:[(0,a.jsx)(ld,{children:"★"})," ",r]})]})]})]},e.id)})})]}):(0,a.jsxs)(le,{children:[(0,a.jsxs)(lt,{children:["\uD83C\uDFAC ",t("movies.trending.title")]}),(0,a.jsx)(lp,{children:t("movies.apiKeyMissing")})]})}let lh=[{titleKey:"dailyFeed.school.math",hash:"#/school"},{titleKey:"dailyFeed.school.story",hash:"#/school"},{titleKey:"dailyFeed.school.science",hash:"#/school"},{titleKey:"dailyFeed.school.reading",hash:"#/leitor"},{titleKey:"dailyFeed.school.word",hash:"#/school"}],lf=[{titleKey:"dailyFeed.game.memory",hash:"#/memory"},{titleKey:"dailyFeed.game.spotit",hash:"#/spotit"},{titleKey:"dailyFeed.game.tictactoe",hash:"#/tictactoe"},{titleKey:"dailyFeed.game.soundhunter",hash:"#/soundhunter"},{titleKey:"dailyFeed.game.familyquiz",hash:"#/familyquiz"},{titleKey:"dailyFeed.game.adventure",hash:"#/adventure"},{titleKey:"dailyFeed.game.stop",hash:"#/stopgame"}];function lx(){let e=new Date;return 1e4*e.getFullYear()+(e.getMonth()+1)*100+e.getDate()}function ly(e,t){return e[(lx()+t)%e.length]}let lb=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,lw=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 100%;
  animation: ${lb} 0.3s ease both;
`,l$=l().div`
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
`,lv=l().span`
  color: ${d.w4.colors.accent};
  letter-spacing: 0.02em;
`,lk=l().button`
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
  animation: ${lb} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }

  &:hover .row-arrow {
    opacity: 1;
    transform: translateX(2px);
  }
`,lj=l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: ${({tint:e})=>e};
`,lz=l().span`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,lM=l().span`
  font-size: 12px;
  font-weight: 500;
  color: ${d.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,lS=l().span`
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-top: 1px;
`,lT=l().span`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
  transition: opacity ${d.w4.transitions.fast}, transform ${d.w4.transitions.fast};
`,lA=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
`,lF=l().div`
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
`,lC=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`;function lL(e){window.location.hash=e}function lE(e){window.open(e,"_blank","noopener,noreferrer")}function lP({locale:e}){let[t]=(0,eb.useProfile)(),o=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),{hits:r,loading:n,failed:s}=(0,eb.useHnFrontPage)({hitsPerPage:4,cacheKey:"techscope-hn",refreshMs:3e5}),{events:l,failed:c,loading:d}=(0,eb.useOnThisDay)({cacheKey:`onthisday-${new Date().toISOString().slice(0,10)}`}),{items:p,loading:m,failed:g}=(0,eb.useRssFeed)({url:"pt"===e?"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.rtp.pt%2Fnoticias%2Frss":"https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss",cacheKey:"pt"===e?"news-portugal":"news-world",refreshMs:3e5}),{items:u,loading:h,failed:f,skipped:x}=(0,eb.useTmdbTrending)({apiKey:"9b6f2645abf1725625c843aa71e3efd5",cacheKey:"trending-movies",refreshMs:3e5}),y=[],b=r?.slice().sort((e,t)=>(t.points??0)-(e.points??0))[0];b&&y.push({key:"tech",interest:"tech",icon:"satellite",tint:"#a371f7",title:b.title,subtitle:o("dailyFeed.sub.tech"),onClick:()=>lE(b.url??`https://news.ycombinator.com/item?id=${b.objectID}`)});let w=u?.find(e=>"movie"===e.media_type||"tv"===e.media_type);if(w){let e=w.title??w.name??"";y.push({key:"movie",interest:"movies",icon:"film",tint:"#e50914",title:e,subtitle:`${o("dailyFeed.sub.movie")} \xb7 ★ ${(w.vote_average??0).toFixed(1)}`,onClick:()=>er("movies",{id:w.id,type:w.media_type})})}if(l?.length){let e=l[lx()%l.length],t=e.pages?.[0]?.content_urls?.desktop?.page;y.push({key:"history",interest:"learning",icon:"calendar",tint:"#d29922",title:e.text,subtitle:`${o("dailyFeed.sub.history")} \xb7 ${e.year}`,onClick:()=>t?lE(t):void 0})}let $=p?.[0];$&&y.push({key:"news",interest:"news",icon:"globe",tint:"#cc0000",title:$.title,subtitle:o("pt"===e?"dailyFeed.sub.news.pt":"dailyFeed.sub.news.en"),onClick:()=>lE($.link)});let v=ly(lh,1);y.push({key:"school",interest:"learning",icon:"graduation",tint:"#f78166",title:o(v.titleKey),subtitle:o("dailyFeed.sub.school"),onClick:()=>lL(v.hash)});let k=ly(lf,7);y.push({key:"game",interest:"games",icon:"gamepad",tint:"#f97583",title:o(k.titleKey),subtitle:o("dailyFeed.sub.game"),onClick:()=>lL(k.hash)});let j=(0,eb.hasInterests)(t)?y.filter(e=>!!t.interests.includes(e.interest)&&(0,eb.detectInterests)(`${e.title} ${e.subtitle}`).every(e=>t.interests.includes(e))):y,z=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{day:"numeric",month:"long"});if(0===j.length){let e=[n?"pending":s?"failed":"ok",x?"skipped":h?"pending":f?"failed":"ok",d?"pending":c?"failed":"ok",m?"pending":g?"failed":"ok"],t=e.some(e=>"pending"===e),i=e.some(e=>"ok"===e);return t||i?(0,a.jsx)(lw,{children:(0,a.jsx)(lA,{children:o("widget.loading")})}):(0,a.jsx)(lw,{children:(0,a.jsxs)(lF,{role:"alert",children:[(0,a.jsx)(lC,{children:o("widget.error.label")}),(0,a.jsx)("div",{children:o("widget.error.body")})]})})}return(0,a.jsxs)(lw,{children:[(0,a.jsxs)(l$,{children:[o("dailyFeed.title"),(0,a.jsx)(lv,{children:z})]}),j.map((e,t)=>(0,a.jsxs)(lk,{delay:t,onClick:e.onClick,children:[(0,a.jsx)(lj,{tint:e.tint,children:(0,a.jsx)(td,{name:e.icon,size:15,"aria-hidden":"true"})}),(0,a.jsxs)(lz,{children:[(0,a.jsx)(lM,{children:e.title}),(0,a.jsx)(lS,{children:e.subtitle})]}),(0,a.jsx)(lT,{className:"row-arrow",children:"→"})]},e.key))]})}let lN=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,lD=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: ${lN} 0.3s ease both;
`,lR=l().button`
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
`,lB=l().span`
  grid-column: 1;
  grid-row: 1;
  font-size: 13.5px;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,lI=l().span`
  grid-column: 2;
  grid-row: 1;
  font-size: 10.5px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  white-space: nowrap;
  flex-shrink: 0;
`,lH=l().span`
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
`,l_=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${d.w4.spacing.sm};
  padding: ${d.w4.spacing.lg} 0;
  text-align: center;
  flex: 1;
  animation: ${lN} 0.3s ease both;
`,lO=l().p`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 240px;
  margin: 0;
`;function lK({locale:e}){let t=(0,i.useMemo)(()=>ta("pt"===e?"pt":"en",ah),[e]),[o,r]=(0,i.useState)([]),[n,s]=(0,i.useState)(!1),l=(0,i.useCallback)(async()=>{r((await (0,V.listDocs)("ask")).map(e=>(function(e,t){let o,a=[];try{let t=JSON.parse(e.content);Array.isArray(t.turns)&&(a=t.turns)}catch{return null}if(0===a.length)return null;let i=a.find(e=>"user"===e.role),r=[...a].reverse().find(e=>"assistant"===e.role),n=e.name?.trim()||i?.content?.slice(0,50)||t("ask.widget.untitled");o=r?r.content.replace(/```[\s\S]*?```/g,"").replace(/`[^`]*`/g,"").replace(/#{1,6}\s+/g,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^>\s+/gm,"").replace(/^[-*+]\s+/gm,"").replace(/^\d+\.\s+/gm,"").replace(/^-{3,}$/gm,"").replace(/\s+/g," ").trim().slice(0,80):i?`> ${i.content.slice(0,77)}`:"";let s=ti(new Date(e.savedAt).toISOString(),t);return{doc:e,title:n,preview:o,age:s}})(e,t)).filter(e=>null!==e).slice(0,3)),s(!0)},[t]);return((0,i.useEffect)(()=>{l()},[l]),(0,i.useEffect)(()=>{let e=()=>{"visible"===document.visibilityState&&l()};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[l]),n)?(0,a.jsx)(oi,{title:t("ask.widget.title"),accentColor:d.w4.suites.lab,children:0===o.length?(0,a.jsxs)(l_,{children:[(0,a.jsx)(lO,{children:t("ask.widget.empty")}),(0,a.jsx)(eA,{variant:"ghost",icon:(0,a.jsx)(td,{name:"sparkle",size:13}),onClick:()=>{window.dispatchEvent(new CustomEvent("atlantis:open-palette",{detail:{scope:"ask"}}))},children:t("ask.widget.emptyCta")})]}):(0,a.jsx)(lD,{children:o.map(({doc:e,title:t,preview:o,age:i})=>(0,a.jsxs)(lR,{onClick:()=>er("ask",{session:String(e.id)}),title:t,children:[(0,a.jsx)(lB,{children:t}),(0,a.jsx)(lI,{children:i}),o&&(0,a.jsx)(lH,{children:o})]},e.id))})}):null}let lq="agenda:events",lG={personal:d.w4.suites.ent,team:d.w4.suites.lab,work:d.w4.suites.learn},lU=["personal","team","work"];function lY(e){let[t,o]=e.split(":").map(e=>parseInt(e,10));return(Number.isFinite(t)?t:0)*60+(Number.isFinite(o)?o:0)}function lW(){let e=new Date;return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}let lV=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,lJ=(0,c.keyframes)`
  0%, 100% { box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.24); }
  50%      { box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.10); }
`,lQ=l().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
  height: 100%;
  animation: ${lV} 0.3s ease both;
`,lZ=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
  margin-bottom: 2px;
`,lX=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,l0=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,l1=l().button`
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
`,l4=l().div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  padding-right: 2px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${d.w4.colors.border};
    border-radius: 2px;
  }
`,l2=l().div`
  position: absolute;
  left: 50px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  background: ${d.w4.colors.borderSubtle};
`,l5=l().div`
  display: grid;
  grid-template-columns: 44px 1fr 18px;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 12px;
  opacity: ${({past:e})=>e?.45:1};
  animation: ${lV} 0.3s ease both;
  animation-delay: ${({delay:e})=>35*e}ms;

  &:hover .delete-btn { opacity: 1; }

  &:last-child { margin-bottom: 0; }
`,l3=l().button`
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
`,l6=l().button`
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
`,l8=l().span`
  position: absolute;
  left: -2px;
  top: 6px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  ${({active:e})=>e?`animation: ${lJ} 2.2s ease-in-out infinite;`:""}
`,l7=l().button`
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
`,l9=l().div`
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
`,ce=l().button`
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
`,ct=l().form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  margin-bottom: 8px;
  animation: ${lV} 0.18s ease both;
`,co=l().div`
  display: grid;
  grid-template-columns: 64px 1fr 64px;
  gap: 6px;
`,ca=l().input`
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
`,ci=l().div`
  display: flex;
  gap: 6px;
`,cr=l().button`
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
`,cn=l().div`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
`,cs=l().button`
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
`;function cl({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>ta(t,ah),[t]),[r,n]=(0,i.useState)({}),[s,l]=(0,i.useState)(!1),[c,p]=(0,i.useState)(!1),[m,g]=(0,i.useState)(""),[u,h]=(0,i.useState)(()=>lW()),[f,x]=(0,i.useState)(""),[y,b]=(0,i.useState)("personal"),[w,$]=(0,i.useState)(()=>{let e=new Date;return 60*e.getHours()+e.getMinutes()}),v=(0,eb.todayISO)(),k=(0,i.useMemo)(()=>[...r[v]??[]].sort((e,t)=>lY(e.time)-lY(t.time)),[r,v]);(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await (0,V.getSetting)(lq);if(!e){if(t)try{n(JSON.parse(t))}catch{}l(!0)}})(),()=>{e=!0}},[]),(0,i.useEffect)(()=>{let e=setInterval(()=>{let e=new Date;$(60*e.getHours()+e.getMinutes())},6e4);return()=>clearInterval(e)},[]);let j=(0,i.useCallback)(e=>{n(e),(0,V.putSetting)(lq,JSON.stringify(e))},[]),z=(0,i.useCallback)(()=>{let e=m.trim();if(!e||!/^\d{2}:\d{2}$/.test(u))return;let t=/^\d{2}:\d{2}$/.test(f)?f:void 0,o={id:`e-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,title:e,time:u,end:t,tag:y};j({...r,[v]:[...r[v]??[],o]}),g(""),x(""),b("personal"),h(lW()),p(!1)},[m,u,f,y,r,v,j]),M=(0,i.useCallback)(e=>{let t=r[v]??[];j({...r,[v]:t.map(t=>t.id===e?{...t,done:!t.done}:t)})},[r,v,j]),S=(0,i.useCallback)(e=>{let t=r[v]??[],o={...r,[v]:t.filter(t=>t.id!==e)};0===o[v].length&&delete o[v],j(o)},[r,v,j]);if(!s)return null;let T=m.trim().length>0&&/^\d{2}:\d{2}$/.test(u),A=1===k.length?o("agenda.countOne"):o("agenda.count",{n:k.length});return(0,a.jsxs)(lQ,{children:[(0,a.jsxs)(lZ,{children:[(0,a.jsx)(lX,{children:o("agenda.title")}),(0,a.jsxs)(l0,{children:[k.length>0&&(0,a.jsx)("span",{children:A}),(0,a.jsx)(l1,{type:"button",active:c,onClick:()=>p(e=>!e),"aria-label":o("agenda.addEvent"),title:o("agenda.addEvent"),children:(0,a.jsx)(td,{name:"plus",size:12})})]})]}),c&&(0,a.jsxs)(ct,{onSubmit:e=>{e.preventDefault(),z()},children:[(0,a.jsxs)(co,{children:[(0,a.jsx)(ca,{type:"time",value:u,onChange:e=>h(e.target.value),"aria-label":o("agenda.timeStart")}),(0,a.jsx)(ca,{type:"text",value:m,onChange:e=>g(e.target.value),placeholder:o("agenda.titlePlaceholder"),autoFocus:!0}),(0,a.jsx)(ca,{type:"time",value:f,onChange:e=>x(e.target.value),placeholder:o("agenda.timeEnd"),"aria-label":o("agenda.timeEnd")})]}),(0,a.jsx)(ci,{children:lU.map(e=>(0,a.jsx)(cr,{type:"button",color:lG[e],selected:y===e,onClick:()=>b(e),children:o(`agenda.tag.${e}`)},e))}),(0,a.jsxs)(cn,{children:[(0,a.jsx)(cs,{type:"button",onClick:()=>p(!1),children:o("agenda.cancel")}),(0,a.jsx)(cs,{type:"submit",primary:!0,disabled:!T,children:o("agenda.save")})]})]}),0===k.length?(0,a.jsxs)(l9,{children:[(0,a.jsx)("div",{children:o("agenda.empty")}),!c&&(0,a.jsxs)(ce,{type:"button",onClick:()=>p(!0),children:[(0,a.jsx)(td,{name:"plus",size:12}),o("agenda.emptyCta")]})]}):(0,a.jsxs)(l4,{children:[(0,a.jsx)(l2,{}),k.map((e,t)=>{let i=lY(e.time),r=e.end?lY(e.end):i+30,n=r<w&&!e.done||!!e.done,s=!e.done&&i<=w&&w<r,l=e.done?d.w4.colors.mainTextFaint:lG[e.tag];return(0,a.jsxs)(l5,{delay:t,past:n,children:[(0,a.jsx)(l3,{type:"button",active:s,past:n,onClick:()=>M(e.id),"aria-label":o("agenda.toggleDone"),children:s?o("agenda.now"):e.time}),(0,a.jsxs)(l6,{type:"button",done:!!e.done,onClick:()=>M(e.id),children:[(0,a.jsx)(l8,{color:l,active:s}),(0,a.jsx)("div",{className:"title",children:e.title}),(0,a.jsxs)("div",{className:"meta",style:{color:lG[e.tag]},children:[o(`agenda.tag.${e.tag}`),e.end?` \xb7 ${e.time}–${e.end}`:` \xb7 ${e.time}`]})]}),(0,a.jsx)(l7,{className:"delete-btn",type:"button",onClick:()=>S(e.id),"aria-label":o("agenda.delete"),title:o("agenda.delete"),children:(0,a.jsx)(td,{name:"close",size:12})})]},e.id)})]})]})}let cc="reading:state",cd={current:null,finished:[],goal:24},cp=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,cm=l().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
  height: 100%;
  animation: ${cp} 0.3s ease both;
`,cg=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
  margin-bottom: 2px;
`,cu=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,ch=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,cf=l().button`
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
`,cx=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
`,cy=l().div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 14px;
  align-items: stretch;
`,cb=l().div`
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
`,cw=l().div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`,c$=l().div`
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
`,cv=l().div`
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ck=l().div`
  margin-top: 8px;
`,cj=l().div`
  display: flex;
  justify-content: space-between;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  margin-bottom: 6px;
`,cz=l().span`
  color: ${d.w4.colors.accent};
`,cM=l().div`
  height: 3px;
  background: ${d.w4.colors.borderSubtle};
  border-radius: 2px;
  overflow: hidden;
`,cS=l().div`
  width: ${({pct:e})=>e}%;
  height: 100%;
  background: ${d.w4.colors.accent};
  transition: width 0.4s ease;
`,cT=l().div``,cA=l().div`
  display: flex;
  justify-content: space-between;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,cF=l().div`
  display: grid;
  grid-template-columns: ${({goal:e})=>`repeat(${e}, 1fr)`};
  gap: 2px;
`,cC=l().div`
  height: 8px;
  background: ${({filled:e})=>e?d.w4.colors.accent:d.w4.colors.borderSubtle};
  border-radius: 1px;
`,cL=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 10px;
  border-top: 1px solid ${d.w4.colors.borderSubtle};
`,cE=l().div``,cP=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
`,cN=l().div`
  font-family: ${d.w4.typography.fontFamilySerif??"'Cormorant Garamond', 'Iowan Old Style', Georgia, serif"};
  font-size: 22px;
  line-height: 1;
  color: ${d.w4.colors.mainText};
`,cD=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextFaint};
  margin-left: 5px;
  letter-spacing: 0.04em;
`,cR=l().div`
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
`,cB=l().button`
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
`,cI=l().form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  margin-bottom: 4px;
  animation: ${cp} 0.18s ease both;
`,cH=l().input`
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
`,c_=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
`,cO=l().div`
  display: flex;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
`,cK=l().button`
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
`,cq=l().button`
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
`;function cG({url:e,fallback:t,alt:o}){let[r,n]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{n(!1)},[e]),!e||r)?(0,a.jsx)(cb,{children:t}):(0,a.jsx)(cb,{children:(0,a.jsx)("img",{src:e,alt:o,loading:"lazy",onError:()=>n(!0)})})}function cU({locale:e}){let t,o="pt"===e?"pt":"en",r=(0,i.useMemo)(()=>ta(o,ah),[o]),[n,s]=(0,i.useState)(cd),[l,c]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!1),[m,g]=(0,i.useState)(""),[u,h]=(0,i.useState)(""),[f,x]=(0,i.useState)(""),[y,b]=(0,i.useState)(""),[w,$]=(0,i.useState)(String(24));(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await (0,V.getSetting)(cc);if(!e){if(t)try{let e=JSON.parse(t);s({current:e.current??null,finished:Array.isArray(e.finished)?e.finished:[],goal:"number"==typeof e.goal&&e.goal>0?e.goal:24})}catch{}c(!0)}})(),()=>{e=!0}},[]);let v=(0,i.useCallback)(e=>{s(e),(0,V.putSetting)(cc,JSON.stringify(e))},[]),k=(0,i.useCallback)(()=>{n.current?(g(n.current.title),h(n.current.author),x(String(n.current.page)),b(String(n.current.pages))):(g(""),h(""),x(""),b("")),$(String(n.goal)),p(!0)},[n]),j=(0,i.useCallback)(()=>{let e=m.trim(),t=u.trim(),o=parseInt(y,10),a=parseInt(f,10),i=parseInt(w,10)||24;if(!e||!t||!Number.isFinite(o)||o<=0)return;let r=Number.isFinite(a)?Math.max(0,Math.min(o,a)):0,s=!!n.current&&n.current.title===e&&n.current.author===t,l=s?n.current.startedAt:Date.now(),c=s?n.current.coverUrl:void 0;v({...n,current:{title:e,author:t,page:r,pages:o,startedAt:l,coverUrl:c},goal:i}),p(!1)},[m,u,f,y,w,n,v]);(0,i.useEffect)(()=>{if(!l)return;let e=n.current;if(!e||void 0!==e.coverUrl)return;let{title:t,author:o}=e,a=!1;return(async()=>{let e=await (0,eb.fetchBookCoverUrl)(t,o);a||s(a=>{if(!a.current||a.current.title!==t||a.current.author!==o)return a;let i={...a,current:{...a.current,coverUrl:e}};return(0,V.putSetting)(cc,JSON.stringify(i)),i})})(),()=>{a=!0}},[l,n.current?.title,n.current?.author,n.current?.coverUrl]);let z=(0,i.useCallback)(()=>{if(!n.current)return;let e={title:n.current.title,author:n.current.author,pages:n.current.pages,finishedAt:Date.now()};v({...n,current:null,finished:[e,...n.finished]}),p(!1)},[n,v]);if(!l)return null;let{current:M,finished:S,goal:T}=n,A=(t=new Date().getFullYear(),S.filter(e=>new Date(e.finishedAt).getFullYear()===t).length),F=M?Math.max(0,Math.min(100,Math.round(M.page/M.pages*100))):0,C=m.trim().length>0&&u.trim().length>0&&/^\d+$/.test(y.trim())&&parseInt(y,10)>0;return(0,a.jsxs)(cm,{children:[(0,a.jsxs)(cg,{children:[(0,a.jsx)(cu,{children:r("reading.title")}),(0,a.jsxs)(ch,{children:[(0,a.jsx)("span",{children:r("reading.yearProgress",{read:A,goal:T})}),(0,a.jsx)(cf,{type:"button",onClick:k,"aria-label":r(M?"reading.updateBook":"reading.addBook"),title:r(M?"reading.updateBook":"reading.addBook"),children:(0,a.jsx)(td,{name:M?"settings":"plus",size:12})})]})]}),d&&(0,a.jsxs)(cI,{onSubmit:e=>{e.preventDefault(),j()},children:[(0,a.jsx)(cH,{type:"text",value:m,onChange:e=>g(e.target.value),placeholder:r("reading.placeholder.title"),autoFocus:!0}),(0,a.jsx)(cH,{type:"text",value:u,onChange:e=>h(e.target.value),placeholder:r("reading.placeholder.author")}),(0,a.jsxs)(c_,{children:[(0,a.jsx)(cH,{type:"number",value:f,onChange:e=>x(e.target.value),placeholder:r("reading.placeholder.page"),min:0}),(0,a.jsx)(cH,{type:"number",value:y,onChange:e=>b(e.target.value),placeholder:r("reading.placeholder.pages"),min:1}),(0,a.jsx)(cH,{type:"number",value:w,onChange:e=>$(e.target.value),placeholder:r("reading.placeholder.goal"),min:1,"aria-label":r("reading.goal")})]}),(0,a.jsxs)(cO,{children:[M?(0,a.jsx)(cq,{type:"button",danger:!0,onClick:z,children:r("reading.finish")}):(0,a.jsx)("span",{}),(0,a.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,a.jsx)(cK,{type:"button",onClick:()=>p(!1),children:r("reading.cancel")}),(0,a.jsx)(cq,{type:"submit",primary:!0,disabled:!C,children:r("reading.save")})]})]})]}),M?(0,a.jsxs)(cx,{children:[(0,a.jsxs)(cy,{children:[(0,a.jsx)(cG,{url:M.coverUrl,fallback:r("reading.placeholder.cover"),alt:M.title}),(0,a.jsxs)(cw,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(c$,{children:M.title}),(0,a.jsx)(cv,{children:M.author})]}),(0,a.jsxs)(ck,{children:[(0,a.jsxs)(cj,{children:[(0,a.jsxs)("span",{children:[r("reading.page")," ",M.page," / ",M.pages]}),(0,a.jsxs)(cz,{children:[F,"%"]})]}),(0,a.jsx)(cM,{children:(0,a.jsx)(cS,{pct:F})})]})]})]}),(0,a.jsxs)(cT,{children:[(0,a.jsxs)(cA,{children:[(0,a.jsx)("span",{children:r("reading.yearGoal")}),(0,a.jsxs)("span",{children:[A,"/",T," ",r("reading.books")]})]}),(0,a.jsx)(cF,{goal:T,children:Array.from({length:T}).map((e,t)=>(0,a.jsx)(cC,{filled:t<A},t))})]}),(0,a.jsxs)(cL,{children:[(0,a.jsxs)(cE,{children:[(0,a.jsx)(cP,{children:r("reading.stat.week")}),(0,a.jsxs)(cN,{children:[function(e){if(!e)return 0;let t=e.startedAt,o=Math.max(1,Math.ceil((Date.now()-t)/864e5));return Math.round(Math.min(e.page,e.pages)/o*7)}(M),(0,a.jsx)(cD,{children:r("reading.unit.pages")})]})]}),(0,a.jsxs)(cE,{children:[(0,a.jsx)(cP,{children:r("reading.stat.pace")}),(0,a.jsxs)(cN,{children:[function(e){if(!e)return 0;let t=Math.max(1,Math.ceil((Date.now()-e.startedAt)/864e5));return Math.round(e.page/t)}(M),(0,a.jsx)(cD,{children:r("reading.unit.perDay")})]})]}),(0,a.jsxs)(cE,{children:[(0,a.jsx)(cP,{children:r("reading.stat.finished")}),(0,a.jsxs)(cN,{children:[S.length,(0,a.jsx)(cD,{children:r("reading.unit.total")})]})]})]})]}):(0,a.jsxs)(cR,{children:[(0,a.jsx)("div",{children:r("reading.empty")}),!d&&(0,a.jsxs)(cB,{type:"button",onClick:k,children:[(0,a.jsx)(td,{name:"plus",size:12}),r("reading.addBook")]})]})]})}let cY=["bitcoin","ethereum","solana","binancecoin","cardano","dogecoin"],cW=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,cV=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  animation: ${cW} 0.3s ease both;
`,cJ=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
  margin-bottom: 4px;
`,cQ=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,cZ=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,cX=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,c0=l().div`
  display: grid;
  grid-template-columns: 60px 1fr 80px minmax(90px, auto) 70px;
  gap: 10px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  animation: ${cW} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;

  &:last-child { border-bottom: none; }
`,c1=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  letter-spacing: 0.04em;
`,c4=l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,c2=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,c5=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({up:e})=>e?"#7fb77e":d.w4.colors.danger};
  text-align: right;
  font-variant-numeric: tabular-nums;
`,c3=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12px;
`,c6=l().svg`
  display: block;
`;function c8({data:e,color:t,width:o=70,height:i=22}){if(!e||e.length<2)return(0,a.jsx)(c6,{width:o,height:i});let r=Math.min(...e),n=Math.max(...e)-r||1,s=e.map((t,a)=>{let s=a/(e.length-1)*o,l=i-(t-r)/n*(i-2)-1;return`${s.toFixed(1)},${l.toFixed(1)}`}).join(" ");return(0,a.jsx)(c6,{width:o,height:i,children:(0,a.jsx)("polyline",{points:s,fill:"none",stroke:t,strokeWidth:"1.25",strokeLinejoin:"round",strokeLinecap:"round"})})}function c7({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>ta(t,ah),[t]),{rows:r,failed:n}=(0,eb.useCoinsMarkets)({ids:cY,includeSparkline:!0,priceChangePercentage:"24h",cacheKey:"bolsa-markets"}),[s,l]=(0,i.useState)(null);(0,i.useEffect)(()=>{r&&l(Date.now())},[r]);let c=(0,i.useMemo)(()=>{if(!s)return"";let e=Math.round((Date.now()-s)/6e4);return e<1?o("time.justNow"):o("time.mAgo",{n:e})},[s,o]);return!r&&n?(0,a.jsxs)(cV,{children:[(0,a.jsx)(cJ,{children:(0,a.jsx)(cQ,{children:o("bolsa.title")})}),(0,a.jsx)(c3,{children:o("bolsa.error")})]}):r?(0,a.jsxs)(cV,{children:[(0,a.jsxs)(cJ,{children:[(0,a.jsx)(cQ,{children:o("bolsa.title")}),(0,a.jsx)(cZ,{children:c&&o("bolsa.updated",{age:c})})]}),(0,a.jsx)(cX,{children:r.map((e,t)=>{var o;let i=e.price_change_percentage_24h>=0,r=i?"#7fb77e":d.w4.colors.danger,n=e.sparkline_in_7d?.price??[];return(0,a.jsxs)(c0,{delay:t,children:[(0,a.jsx)(c1,{children:e.symbol.toUpperCase()}),(0,a.jsx)(c4,{children:e.name}),(0,a.jsx)(c8,{data:n,color:r}),(0,a.jsxs)(c2,{children:["$",(o=e.current_price)>=1e3?o.toLocaleString("en-US",{maximumFractionDigits:0}):o>=1?o.toFixed(2):o.toFixed(4)]}),(0,a.jsxs)(c5,{up:i,children:[i?"↗":"↘"," ",Math.abs(e.price_change_percentage_24h).toFixed(2),"%"]})]},e.id)})})]}):(0,a.jsxs)(cV,{children:[(0,a.jsx)(cJ,{children:(0,a.jsx)(cQ,{children:o("bolsa.title")})}),(0,a.jsx)(c3,{children:o("bolsa.empty")})]})}let c9=o7.j.lisbon.lat,de=o7.j.lisbon.lon;function dt(e){if(!e)return"—";let t=new Date(e);return Number.isNaN(t.getTime())?"—":`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function da({phase:e,size:t=78}){let o=t/2-2,i=t/2,r=t/2,n=e<.5,s=o*(1-(n?2*e:(1-e)*2));return(0,a.jsxs)("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("radialGradient",{id:"atl-moon-glow",cx:"50%",cy:"45%",r:"60%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#f2ecd8"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#c9c1a8"})]}),(0,a.jsxs)("mask",{id:"atl-moon-mask",children:[(0,a.jsx)("rect",{width:t,height:t,fill:"black"}),(0,a.jsx)("circle",{cx:i,cy:r,r:o,fill:"white"}),(0,a.jsx)("ellipse",{cx:i,cy:r,rx:s,ry:o,fill:"black"}),(0,a.jsx)("rect",{x:n?0:i,y:0,width:i,height:t,fill:"black"})]})]}),(0,a.jsx)("circle",{cx:i,cy:r,r:o,fill:"#1f2233",stroke:d.w4.colors.borderSubtle}),(0,a.jsx)("circle",{cx:i,cy:r,r:o,fill:"url(#atl-moon-glow)",mask:"url(#atl-moon-mask)",opacity:"0.95"}),(0,a.jsx)("circle",{cx:i-8,cy:r-6,r:"3",fill:"#b8b099",opacity:"0.25",mask:"url(#atl-moon-mask)"}),(0,a.jsx)("circle",{cx:i+6,cy:r+10,r:"4",fill:"#b8b099",opacity:"0.22",mask:"url(#atl-moon-mask)"}),(0,a.jsx)("circle",{cx:i-3,cy:r+14,r:"2",fill:"#b8b099",opacity:"0.25",mask:"url(#atl-moon-mask)"})]})}let di=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,dr=l().div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
  animation: ${di} 0.3s ease both;
`,dn=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
`,ds=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,dl=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,dc=l().div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 18px;
  align-items: center;
`,dd=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,dp=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
`,dm=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,dg=l().div`
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: 18px;
  line-height: 1.15;
  color: ${d.w4.colors.mainText};
  margin-bottom: 10px;
`,du=l().div`
  position: relative;
  height: 44px;
`,dh=l().div`
  display: flex;
  justify-content: space-between;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
`,df=l().span`
  color: ${d.w4.colors.mainTextFaint};
`,dx=l().div`
  border-top: 1px solid ${d.w4.colors.borderSubtle};
  padding-top: 10px;
`,dy=l().div`
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
`;let db=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextFaint};
`;function dw({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>ta(t,ah),[t]),r=new Date().toISOString().slice(0,10),{sun:n}=(0,eb.useSunArc)({lat:c9,lon:de,date:r,cacheKey:`astro-sun-${r}`}),s=function(e=new Date){let t=Date.UTC(2e3,0,6,18,14)/1e3,o=(e.getTime()/1e3-t)/86400/29.530588853%1;return o<0?o+1:o}(new Date),l=Math.round((1-Math.cos(2*s*Math.PI))*50),c=s<.03||s>.97?"astro.phase.new":s<.22?"astro.phase.waxingCrescent":s<.28?"astro.phase.firstQuarter":s<.47?"astro.phase.waxingGibbous":s<.53?"astro.phase.full":s<.72?"astro.phase.waningGibbous":s<.78?"astro.phase.lastQuarter":"astro.phase.waningCrescent",p=function(e,t){if(!e||!t)return 0;let o=Date.now(),a=new Date(e).getTime(),i=new Date(t).getTime();return o<=a?0:o>=i?1:(o-a)/(i-a)}(n?.sunriseUtc??null,n?.sunsetUtc??null),m=46-42*Math.sin(p*Math.PI),g=n?Math.floor(n.dayLengthSec/3600):0,u=n?Math.floor(n.dayLengthSec%3600/60):0;return(0,a.jsxs)(dr,{children:[(0,a.jsxs)(dn,{children:[(0,a.jsx)(ds,{children:o("astro.title")}),(0,a.jsx)(dl,{children:o("astro.location")})]}),(0,a.jsxs)(dc,{children:[(0,a.jsxs)(dd,{children:[(0,a.jsx)(da,{phase:s}),(0,a.jsx)(dp,{children:o("astro.illuminated",{pct:l})})]}),(0,a.jsxs)(dm,{children:[(0,a.jsx)(dg,{children:o(c)}),(0,a.jsx)(du,{children:(0,a.jsxs)("svg",{viewBox:"0 0 200 50",width:"100%",height:"44",style:{display:"block"},children:[(0,a.jsx)("path",{d:"M 4 46 Q 100 -20 196 46",fill:"none",stroke:d.w4.colors.borderSubtle,strokeWidth:"1",strokeDasharray:"2 3"}),(0,a.jsx)("circle",{cx:4+192*p,cy:m,r:3.5,fill:"#e89a5c"}),(0,a.jsx)("line",{x1:"4",y1:"46",x2:"4",y2:"50",stroke:d.w4.colors.mainTextFaint,strokeWidth:"1"}),(0,a.jsx)("line",{x1:"196",y1:"46",x2:"196",y2:"50",stroke:d.w4.colors.mainTextFaint,strokeWidth:"1"})]})}),(0,a.jsxs)(dh,{children:[(0,a.jsxs)("span",{children:["↑ ",dt(n?.sunriseUtc??null)]}),n&&(0,a.jsx)(df,{children:o("astro.dayLength",{h:g,m:u})}),(0,a.jsxs)("span",{children:["↓ ",dt(n?.sunsetUtc??null)]})]})]})]}),(0,a.jsxs)(dx,{children:[(0,a.jsx)(dy,{children:o("astro.iss.title")}),(0,a.jsx)(db,{children:o("astro.iss.empty")})]})]})}let d$=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,dv=l().div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  animation: ${d$} 0.3s ease both;
`,dk=l().div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`,dj=l().div`
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
`,dz=l().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,dM=l().div`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${d.w4.colors.mainText};
  margin-bottom: 2px;
`,dS=l().div`
  font-size: 11.5px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.3;
  margin-bottom: 8px;
`,dT=l().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${d.w4.colors.accentMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
`,dA=l().div`
  display: grid;
  grid-template-columns: ${({cols:e})=>`repeat(${e}, 1fr)`};
  gap: 10px;
  flex: 1;
  min-height: 0;
`,dF=l().button`
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
`,dC=l().div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`,dL=l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainText};
`,dE=l().button`
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
`,dP={titleKey:"labLauncher.title",subtitleKey:"labLauncher.subtitle",countLabelKey:"labLauncher.count",footerKey:"labLauncher.open",icon:"⟁",iconBg:"linear-gradient(135deg, #3a2f5c 0%, #4e3d80 100%)",openHash:"#/ask",footerColor:d.w4.suites.lab,tiles:[{id:"ask",glyph:"✦",label:"Ask",bg:"#5e4cbb",hash:"#/ask"},{id:"promptlab",glyph:"◐",label:"Prompt",bg:"#c47a5e",hash:"#/promptlab"},{id:"imagegen",glyph:"◎",label:"Image",bg:"#a85c7a",hash:"#/imagegen"},{id:"playground",glyph:"⟨⟩",label:"Code",bg:"#4a6fa5",hash:"#/playground"},{id:"pad",glyph:"✎",label:"Pad",bg:"#7aa86c",hash:"#/pad"},{id:"apiexplorer",glyph:"☌",label:"API",bg:"#b08c4a",hash:"#/apiexplorer"}]},dN={titleKey:"learnLauncher.title",subtitleKey:"learnLauncher.subtitle",countLabelKey:"learnLauncher.count",footerKey:"learnLauncher.open",icon:"⌘",iconBg:"linear-gradient(135deg, #2f5c4f 0%, #3e805f 100%)",openHash:"#/school",footerColor:d.w4.suites.learn,tiles:[{id:"school",glyph:"✎",label:"Escola",bg:"#c4844a",hash:"#/school"},{id:"leitor",glyph:"ℓ",label:"Leitor",bg:"#c44a4a",hash:"#/leitor"},{id:"games",glyph:"◉",label:"Jogos",bg:"#4a6fc4",hash:"#/games"},{id:"cosmos",glyph:"☿",label:"Cosmos",bg:"#4a4a4a",hash:"#/cosmos"},{id:"earth",glyph:"⨁",label:"Earth",bg:"#7aa86c",hash:"#/earth"},{id:"weather",glyph:"☀",label:"Tempo",bg:"#5e4cbb",hash:"#/weather"}]};function dD({locale:e,variant:t}){let o="pt"===e?"pt":"en",r=(0,i.useMemo)(()=>ta(o,ah),[o]),n="lab"===t?dP:dN,s=e=>{window.location.hash=e};return(0,a.jsxs)(dv,{children:[(0,a.jsxs)(dk,{children:[(0,a.jsx)(dj,{bg:n.iconBg,children:n.icon}),(0,a.jsxs)(dz,{children:[(0,a.jsx)(dM,{children:r(n.titleKey)}),(0,a.jsx)(dS,{children:r(n.subtitleKey)}),(0,a.jsxs)(dT,{children:[n.tiles.length," ",r(n.countLabelKey)]})]})]}),(0,a.jsx)(dA,{cols:3,children:n.tiles.map(e=>(0,a.jsxs)(dF,{type:"button",onClick:()=>s(e.hash),"aria-label":e.label,children:[(0,a.jsx)(dC,{bg:e.bg,children:e.glyph}),(0,a.jsx)(dL,{children:e.label})]},e.id))}),(0,a.jsx)(dE,{color:n.footerColor,type:"button",onClick:()=>s(n.openHash),children:r(n.footerKey)})]})}function dR({locale:e}){return(0,a.jsx)(dD,{locale:e,variant:"lab"})}function dB({locale:e}){return(0,a.jsx)(dD,{locale:e,variant:"learn"})}let dI="music:tracks",dH=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,d_=l().div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  animation: ${dH} 0.3s ease both;
`,dO=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
`,dK=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,dq=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,dG=l().form`
  display: flex;
  gap: 6px;
`,dU=l().input`
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
`,dY=l().button`
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
`,dW=l().div`
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
`,dV=l().a`
  display: grid;
  grid-template-columns: 1fr 18px;
  gap: 8px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  text-decoration: none;
  color: inherit;
  transition: background ${d.w4.transitions.fast};
  animation: ${dH} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;

  &:last-child { border-bottom: none; }
  &:hover { background: ${d.w4.colors.surfaceHover}; }
  &:hover .remove-btn { opacity: 1; }
`,dJ=l().div`
  min-width: 0;
`,dQ=l().div`
  font-size: 12px;
  color: ${d.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`,dZ=l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  font-style: italic;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dX=l().button`
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
`,d0=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12px;
`;function d1({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>ta(t,ah),[t]),[r,n]=(0,i.useState)([]),[s,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)("");(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await (0,V.getSetting)(dI);if(!e){if(t)try{let e=JSON.parse(t);Array.isArray(e)&&n(e)}catch{}l(!0)}})(),()=>{e=!0}},[]);let p=(0,i.useCallback)(e=>{n(e),(0,V.putSetting)(dI,JSON.stringify(e))},[]),m=(0,i.useCallback)(()=>{let e=c.trim();if(!e)return;let t=e.split(/\s+[—–-]\s+/),o=t[0]?.trim()||e,a=t[1]?.trim()||"";p([{id:`m-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,title:o,artist:a,addedAt:Date.now()},...r].slice(0,8)),d("")},[c,r,p]),g=(0,i.useCallback)(e=>{p(r.filter(t=>t.id!==e))},[r,p]);return s?(0,a.jsxs)(d_,{children:[(0,a.jsxs)(dO,{children:[(0,a.jsx)(dK,{children:o("music.title")}),(0,a.jsx)(dq,{children:o("music.subtitle")})]}),(0,a.jsxs)(dG,{onSubmit:e=>{e.preventDefault(),m()},children:[(0,a.jsx)(dU,{type:"text",value:c,onChange:e=>d(e.target.value),placeholder:o("music.placeholder")}),(0,a.jsx)(dY,{type:"submit",disabled:0===c.trim().length,children:o("music.add")})]}),0===r.length?(0,a.jsx)(d0,{children:o("music.empty")}):(0,a.jsx)(dW,{children:r.map((e,t)=>{let i=e.artist?`${e.title} ${e.artist}`:e.title;return(0,a.jsxs)(dV,{delay:t,href:`https://music.apple.com/search?term=${encodeURIComponent(i)}`,target:"_blank",rel:"noreferrer","aria-label":o("music.search.label"),children:[(0,a.jsxs)(dJ,{children:[(0,a.jsx)(dQ,{children:e.title}),e.artist&&(0,a.jsx)(dZ,{children:e.artist})]}),(0,a.jsx)(dX,{className:"remove-btn",type:"button","aria-label":o("music.remove"),title:o("music.remove"),onClick:t=>{t.preventDefault(),t.stopPropagation(),g(e.id)},children:(0,a.jsx)(td,{name:"close",size:12})})]},e.id)})})]}):null}let d4=[{id:"ursa-major",name:"Ursa Major",stars:[{x:.22,y:.28,mag:1.8},{x:.28,y:.3,mag:2.3},{x:.34,y:.33,mag:2.5},{x:.4,y:.36,mag:1.8},{x:.46,y:.32,mag:2},{x:.5,y:.28,mag:2.3},{x:.55,y:.24,mag:2}],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]},{id:"cassiopeia",name:"Cassiopeia",stars:[{x:.6,y:.18,mag:2.2},{x:.66,y:.22,mag:2.4},{x:.71,y:.17,mag:2.5},{x:.76,y:.22,mag:2.7},{x:.82,y:.18,mag:2.3}],lines:[[0,1],[1,2],[2,3],[3,4]]},{id:"orion",name:"Orion",stars:[{x:.48,y:.68,mag:1.6},{x:.55,y:.6,mag:1.8},{x:.52,y:.74,mag:2.1},{x:.5,y:.72,mag:2},{x:.49,y:.75,mag:2},{x:.6,y:.82,mag:2.2},{x:.44,y:.8,mag:2.4}],lines:[[0,1],[0,2],[2,3],[3,4],[2,5],[2,6]]},{id:"lyra",name:"Lyra",stars:[{x:.78,y:.54,mag:.1},{x:.82,y:.58,mag:3.2},{x:.79,y:.62,mag:3.9},{x:.75,y:.6,mag:3.3}],lines:[[0,1],[1,2],[2,3],[3,0]]},{id:"scorpius",name:"Scorpius",stars:[{x:.18,y:.76,mag:1.1},{x:.24,y:.82,mag:2.3},{x:.3,y:.85,mag:2.8},{x:.36,y:.81,mag:2.9},{x:.32,y:.72,mag:2.6}],lines:[[0,1],[1,2],[2,3],[3,4]]},{id:"cygnus",name:"Cygnus",stars:[{x:.65,y:.42,mag:1.3},{x:.72,y:.46,mag:2.2},{x:.78,y:.44,mag:2.5},{x:.7,y:.38,mag:2.9},{x:.68,y:.5,mag:2.5}],lines:[[0,1],[1,2],[3,0],[0,4]]},{id:"bootes",name:"Bo\xf6tes",stars:[{x:.36,y:.52,mag:-.05},{x:.32,y:.46,mag:2.4},{x:.4,y:.48,mag:2.5},{x:.38,y:.56,mag:2.7}],lines:[[0,1],[0,2],[0,3]]},{id:"leo",name:"Leo",stars:[{x:.56,y:.52,mag:1.4},{x:.62,y:.5,mag:2},{x:.66,y:.54,mag:2.6},{x:.6,y:.58,mag:2.6},{x:.52,y:.58,mag:3.4}],lines:[[0,1],[1,2],[2,3],[3,0],[0,4]]}],d2=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,d5=(0,c.keyframes)`
  0%, 100% { opacity: 0.85; }
  50%      { opacity: 0.55; }
`,d3=l().div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  animation: ${d2} 0.3s ease both;
`,d6=l().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${d.w4.spacing.sm};
`,d8=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,d7=l().div`
  font-size: 10px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,d9=l().div`
  position: relative;
  flex: 1;
  min-height: 0;
  background:
    radial-gradient(ellipse at center, #0b1630 0%, #05080f 70%);
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.md};
  overflow: hidden;
`,pe=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
  text-align: center;
`,pt=l().circle`
  animation: ${d5} 3s ease-in-out infinite;
`,po=l().div`
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
`;function pa({locale:e}){let t,o="pt"===e?"pt":"en",r=(0,i.useMemo)(()=>ta(o,ah),[o]),[n,s]=(0,i.useState)(new Date);(0,i.useEffect)(()=>{let e=setInterval(()=>s(new Date),6e4);return()=>clearInterval(e)},[]);let l=(t=new Date().getHours())>=20||t<7,c=(60*n.getHours()+n.getMinutes())/1440*360;return(0,a.jsxs)(d3,{children:[(0,a.jsxs)(d6,{children:[(0,a.jsx)(d8,{children:r("nightSky.title")}),(0,a.jsx)(d7,{children:r("astro.location")})]}),(0,a.jsx)(d9,{children:l?(0,a.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 260 260",preserveAspectRatio:"xMidYMid meet",children:[(0,a.jsx)("circle",{cx:130,cy:130,r:122,fill:"none",stroke:d.w4.colors.borderSubtle,strokeWidth:"1",strokeDasharray:"2 4",opacity:"0.45"}),[0,90,180,270].map(e=>{let t=e*Math.PI/180,o=130+122*Math.cos(t),i=130+122*Math.sin(t),r=130+116*Math.cos(t),n=130+116*Math.sin(t);return(0,a.jsx)("line",{x1:o,y1:i,x2:r,y2:n,stroke:d.w4.colors.mainTextFaint,strokeWidth:"1",opacity:"0.4"},e)}),(0,a.jsx)("g",{transform:`rotate(${c} 130 130)`,children:d4.map(e=>{let t=e.stars.map(e=>({cx:16+228*e.x,cy:16+228*e.y,r:Math.max(.8,2.6-.6*e.mag)}));return(0,a.jsxs)("g",{children:[e.lines.map(([e,o],i)=>(0,a.jsx)("line",{x1:t[e].cx,y1:t[e].cy,x2:t[o].cx,y2:t[o].cy,stroke:"rgba(139,123,255,0.25)",strokeWidth:"0.6"},i)),t.map((e,t)=>(0,a.jsx)(pt,{cx:e.cx,cy:e.cy,r:e.r,fill:"#f2ecd8",style:{animationDelay:`${t%6*.4}s`}},t))]},e.id)})})]}):(0,a.jsx)(po,{children:r("nightSky.dayTitle")})}),l&&(0,a.jsx)(pe,{children:r("nightSky.nightLegend",{count:d4.length})})]})}let pi="shell:dashboard-widgets",pr="shell:pending-open-widget-picker",pn=[{id:"w-ask-sessions",widgetId:"ask-sessions"},{id:"w-daily-feed",widgetId:"daily-feed"},{id:"w-techscope",widgetId:"techscope"},{id:"w-weather",widgetId:"weather"},{id:"w-clock",widgetId:"clock"}],ps=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,pl=l().div`
  margin-bottom: ${d.w4.spacing.xl};
  animation: ${ps} 0.35s ease both;
`,pc=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.md};
  padding-top: ${d.w4.spacing.md};
  padding-bottom: ${d.w4.spacing.md};
  margin-bottom: ${d.w4.spacing.md};
  border-top: 1px solid ${d.w4.colors.borderSubtle};
`,pd=l().h2`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  margin: 0;
`,pp=l().button`
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
`,pm=l().div`
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
`,pg=l().div`
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
`,pu=l().div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast};
  z-index: 2;
`,ph=l().button`
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
`,pf=l()(ph)`
  &:hover {
    color: #f85149;
    border-color: #f8514960;
  }
`,px=l().button`
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
`,py=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,pb=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
`,pw=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,p$=l().button`
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
`,pv=l().div`
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
`,pk=l().div`
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
`,pj=l().div`
  position: relative;
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 400;
  color: ${d.w4.colors.mainText};
  line-height: 1.2;
`,pz=l().div`
  position: relative;
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 420px;
`,pM=l().button`
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
`,pS=new Set(ac.filter(e=>"Developer Toolkit"===e.suite).map(e=>e.id)),pT="pin:";function pA(e){return e.widgetId.startsWith(pT)}function pF(e){return e.widgetId.slice(pT.length)}let pC=new Set(["games","movies","devtools"]);function pL({instance:e,appId:t,meta:o,app:i,idx:r,totalCount:n,tShell:s,recentsOverride:l,onMove:c,onRemove:d,onSelectApp:p}){let m=(0,eb.useRecents)(t),g=n>1?(0,a.jsxs)(a.Fragment,{children:[r>0&&(0,a.jsx)(px,{type:"button",title:s("widgets.moveLeft"),onClick:t=>{t.stopPropagation(),c(e.id,-1)},children:(0,a.jsx)(td,{name:"chevron-left",size:13})}),r<n-1&&(0,a.jsx)(px,{type:"button",title:s("widgets.moveRight"),onClick:t=>{t.stopPropagation(),c(e.id,1)},children:(0,a.jsx)(td,{name:"chevron-right",size:13})})]}):void 0;return(0,a.jsx)(tQ,{vizId:t,label:o.label,description:o.description,hash:i?.hash??o.hash,category:o.category,accentColor:o.color,needsAuth:o.needsAuth,pinned:!0,index:r,onClick:()=>{i?p(i):window.location.hash=o.hash},onHoverIntent:i?()=>ao(t):void 0,onTogglePin:()=>d(e.id),reorderControls:g,extra:pC.has(t)?function(e,t,o,i){if(0===e.length)return null;let r=e.slice(0,3);return(0,a.jsxs)(py,{children:[(0,a.jsx)(pb,{children:o("pinnedCard.recent.label")}),(0,a.jsx)(pw,{children:r.map(e=>{let o,r,n;return(0,a.jsxs)(p$,{type:"button",tintColor:e.color??t,title:e.label,onClick:t=>{t.stopPropagation(),window.location.hash=e.hash},children:[(o=function(e){if(e)return am[e.split("?")[0]]??am[e]}(e.hash),r=o?.iconName??e.iconName??i,n=o?.color??e.color??t,r?(0,a.jsx)("span",{className:"glyph","aria-hidden":"true",style:{color:n},children:(0,a.jsx)(td,{name:r,size:14})}):e.icon?(0,a.jsx)("span",{className:"glyph","aria-hidden":"true",children:e.icon}):null),(0,a.jsx)("span",{className:"label",children:e.label})]},e.hash)})})]})}(l??m,o.color,s,o.icon):null})}function pE({locale:e,pinnedAppIds:t,recentAppIds:o,apps:r,appMeta:n,onSelectApp:s,onTogglePin:l}){let c=(0,i.useMemo)(()=>ta(e,ah),[e]),[p,m]=(0,i.useState)([]),[g,u]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{try{sessionStorage.removeItem(pr)}catch{}f(!0)};window.addEventListener("atlantis:open-widget-picker",e);let t=!1;try{t="1"===sessionStorage.getItem(pr)}catch{}if(t){try{sessionStorage.removeItem(pr)}catch{}f(!0)}return()=>window.removeEventListener("atlantis:open-widget-picker",e)},[]),(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await (0,V.getSetting)(pi);if(!e){if(t)try{let e=JSON.parse(t),o=function(e){if(!e.some(e=>"internet-now"===e.widgetId))return e;let t=[];for(let o of e)if("internet-now"===o.widgetId){let e=Date.now();t.push({id:`w-trending-${e}`,widgetId:"trending-searches"},{id:`w-wiki-${e+1}`,widgetId:"wiki-most-read"},{id:`w-hn-${e+2}`,widgetId:"hackernews-hot"})}else t.push(o);return t}(e);m(o),o!==e&&(0,V.putSetting)(pi,JSON.stringify(o))}catch{m(pn)}else m(pn);u(!0)}})(),()=>{e=!0}},[]),(0,i.useEffect)(()=>{g&&m(e=>{let o=new Set(t),a=new Set(e.filter(pA).map(pF)),i=e.filter(e=>!pA(e)||o.has(pF(e)));for(let e of t)a.has(e)||(i=[...i,{id:`pin-${e}`,widgetId:`${pT}${e}`}]);return i.length!==e.length||i.some((t,o)=>t.id!==e[o]?.id)?((0,V.putSetting)(pi,JSON.stringify(i)),i):e})},[t,g]);let x=(0,i.useCallback)(e=>{m(e),(0,V.putSetting)(pi,JSON.stringify(e))},[]),y=(0,i.useCallback)(e=>{x([...p,{id:`w-${e}-${Date.now()}`,widgetId:e}])},[p,x]),b=(0,i.useCallback)(e=>{let t=p.find(t=>t.id===e);t&&pA(t)?l(pF(t)):x(p.filter(t=>t.id!==e))},[p,x,l]),w=(0,i.useCallback)((e,t)=>{let o=p.findIndex(t=>t.id===e);if(o<0)return;let a=o+t;if(a<0||a>=p.length)return;let i=[...p];[i[o],i[a]]=[i[a],i[o]],x(i)},[p,x]),$=(0,i.useMemo)(()=>new Set(p.filter(e=>!pA(e)).map(e=>e.widgetId)),[p]);return g?(0,a.jsxs)(pl,{children:[(0,a.jsxs)(pc,{children:[(0,a.jsx)(pd,{children:c("widgets.dashboard")}),(0,a.jsxs)(pp,{active:h,onClick:()=>f(!h),children:[(0,a.jsx)(td,{name:"plus",size:14}),c("widgets.addWidget")]})]}),(0,a.jsx)(a_,{open:h,activeIds:$,locale:e,onAdd:e=>{y(e)},onRemove:e=>{let t=p.find(t=>!pA(t)&&t.widgetId===e);t&&b(t.id)},onClose:()=>f(!1)}),0===p.length?(0,a.jsxs)(pv,{children:[(0,a.jsx)(pk,{children:"✨"}),(0,a.jsx)(pj,{children:c("widgets.empty.title")}),(0,a.jsx)(pz,{children:c("widgets.empty.body")}),(0,a.jsxs)(pM,{onClick:()=>f(!0),children:[(0,a.jsx)(td,{name:"plus",size:14}),c("widgets.empty.cta")]})]}):(0,a.jsx)(pm,{children:p.map((i,l)=>{var m;if(pA(i)){let t=pF(i),d="devtools"===t,m=d?{icon:"terminal",label:c("apps.devtools.label"),description:c("apps.devtools.description"),color:"#facc15",category:an("Create",e),hash:"#/playground",needsAuth:!1}:n[t];if(!m)return null;let g=d?null:r.find(e=>e.id===t)??null,u=d?o.filter(e=>pS.has(e)).map(e=>{let t=n[e];return{hash:t?.hash??`#/${e}`,label:t?.label??e,iconName:t?.icon,color:t?.color,ts:0}}):void 0;return(0,a.jsx)(pL,{instance:i,appId:t,meta:m,app:g,locale:e,idx:l,totalCount:p.length,tShell:c,recentsOverride:u,onMove:w,onRemove:b,onSelectApp:s},i.id)}let g=(m=i.widgetId,af.find(e=>e.id===m));if(!g)return null;let u={"daily-feed":"#2dd4bf",techscope:"#a371f7",weather:"#58a6ff",clock:"#d29922",quicklinks:"#3fb950","news-pt":"#2da44e","news-world":"#cc0000",crypto:"#f7931a",seismic:"#f97316",onthisday:"#d29922",quotes:"#a371f7","analog-clock":"#f87171","trending-searches":"#e233ff","wiki-most-read":"#58a6ff","hackernews-hot":"#f97316","live-data":"#00d4ff",pet:"#e8a0b0",streak:"#fb923c",habits:"#fb923c",movies:"#f97316","ask-sessions":d.w4.suites.lab,agenda:d.w4.suites.lab,reading:"#a371f7",bolsa:"#7fb77e",astro:"#8b7bff","lab-launcher":d.w4.suites.lab,"learn-launcher":d.w4.suites.learn,music:"#e89a5c","night-sky":"#6aa8d8"};return(0,a.jsxs)(pg,{cols:g.defaultCols,maxCols:g.maxCols,accentColor:u[i.widgetId],minH:g.minHeight,children:[(0,a.jsxs)(pu,{className:"widget-controls",children:[l>0&&(0,a.jsx)(ph,{title:c("widgets.moveLeft"),onClick:()=>w(i.id,-1),children:(0,a.jsx)(td,{name:"chevron-left",size:14})}),l<p.length-1&&(0,a.jsx)(ph,{title:c("widgets.moveRight"),onClick:()=>w(i.id,1),children:(0,a.jsx)(td,{name:"chevron-right",size:14})}),(0,a.jsx)(pf,{title:c("widgets.remove"),onClick:()=>b(i.id),children:(0,a.jsx)(td,{name:"close",size:14})})]}),(i=>{switch(i.widgetId){case"daily-feed":return(0,a.jsx)(lP,{locale:e});case"techscope":return(0,a.jsx)(a4,{locale:e});case"weather":return(0,a.jsx)(ij,{locale:e});case"clock":return(0,a.jsx)(iR,{locale:e});case"quicklinks":return(0,a.jsx)(iU,{locale:e,pinnedAppIds:t,recentAppIds:o,apps:r,appMeta:n,onSelect:s});case"news-pt":return(0,a.jsx)(i4,{locale:e});case"news-world":return(0,a.jsx)(ro,{locale:e});case"crypto":return(0,a.jsx)(rb,{locale:e});case"seismic":return(0,a.jsx)(rL,{locale:e});case"onthisday":return(0,a.jsx)(rK,{locale:e});case"quotes":return(0,a.jsx)(rQ,{locale:e});case"analog-clock":return(0,a.jsx)(r7,{locale:e});case"trending-searches":return(0,a.jsx)(np,{locale:e});case"wiki-most-read":return(0,a.jsx)(nM,{locale:e});case"hackernews-hot":return(0,a.jsx)(nH,{locale:e});case"live-data":return(0,a.jsx)(sa,{locale:e});case"pet":return(0,a.jsx)(sC,{locale:e});case"streak":return(0,a.jsx)(sq,{locale:e});case"habits":return(0,a.jsx)(s8,{locale:e});case"movies":return(0,a.jsx)(lu,{locale:e});case"ask-sessions":return(0,a.jsx)(lK,{locale:e});case"agenda":return(0,a.jsx)(cl,{locale:e});case"reading":return(0,a.jsx)(cU,{locale:e});case"bolsa":return(0,a.jsx)(c7,{locale:e});case"astro":return(0,a.jsx)(dw,{locale:e});case"lab-launcher":return(0,a.jsx)(dR,{locale:e});case"learn-launcher":return(0,a.jsx)(dB,{locale:e});case"music":return(0,a.jsx)(d1,{locale:e});case"night-sky":return(0,a.jsx)(pa,{locale:e});default:return null}})(i)]},i.id)})})]}):null}let pP={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",95:"⛈️",96:"⛈️",99:"⛈️"},pN={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},pD=Object.fromEntries(ac.map(e=>[e.id,e.icon])),pR=Object.fromEntries(ac.map(e=>[e.id,e.color]));function pB(e){return e<10?`0${e}`:String(e)}function pI({locale:e,greeting:t,userName:o,pinnedApps:r,onSelect:n,t:s}){let[l,c]=(0,i.useState)(()=>new Date),{forecast:d}=(0,eb.useWeather)({lat:o7.j.lisbon.lat,lon:o7.j.lisbon.lon,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:o7.j.lisbon.timezone,cacheKey:"weather-lisbon-v3"});(0,i.useEffect)(()=>{let e=setInterval(()=>c(new Date),3e4);return()=>clearInterval(e)},[]);let p=`${pB(l.getHours())} : ${pB(l.getMinutes())}`,m=(0,i.useMemo)(()=>{let t,o,a;return t=l.toLocaleDateString("pt"===e?"pt-PT":"en-GB",{weekday:"long"}),o=l.getDate(),a=l.toLocaleDateString("pt"===e?"pt-PT":"en-GB",{month:"long"}),`${t} \xb7 ${o} ${a}`.toUpperCase()},[l,e]),g=r.slice(0,5),u=d?.current?(d.current.is_day?pP[d.current.weather_code??0]:pN[d.current.weather_code??0]??pP[d.current.weather_code??0])??"\xb7":null;return(0,a.jsxs)(p_,{children:[d?.current&&(0,a.jsxs)(pW,{children:[(0,a.jsx)("span",{className:"ico",children:u}),(0,a.jsxs)("span",{className:"temp",children:[Math.round(d.current.temperature_2m??0),"\xb0"]}),(0,a.jsx)("span",{className:"lbl",children:s("retreat.weather.city")})]}),(0,a.jsxs)(pO,{children:[(0,a.jsx)(pK,{children:m}),(0,a.jsxs)(pq,{children:[t,o?(0,a.jsxs)(a.Fragment,{children:[", ",(0,a.jsx)("span",{className:"name",children:o.split(" ")[0]})]}):null,"."]}),(0,a.jsx)(pG,{children:p}),(0,a.jsxs)(pU,{"aria-hidden":!0,children:[(0,a.jsx)("span",{className:"caret",children:"⌘K"}),(0,a.jsx)("span",{className:"txt",children:s("retreat.prompt")})]}),g.length>0&&(0,a.jsx)(pY,{children:g.map((e,t)=>(0,a.jsxs)(pV,{onClick:()=>n(e),title:`${t+1} \xb7 ${e.label}`,"aria-label":e.label,children:[(0,a.jsx)("span",{className:"ico",style:{color:pR[e.id]},children:pD[e.id]?(0,a.jsx)(td,{name:pD[e.id],size:18,"aria-hidden":"true"}):"\xb7"}),(0,a.jsx)("span",{className:"n",children:t+1})]},e.id))})]})]})}let pH=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,p_=l().div`
  flex: 1;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  animation: ${pH} 0.35s ease both;

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
`,pO=l().div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: ${d.w4.spacing.lg};
`,pK=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.3em;
  color: ${d.w4.colors.mainTextMuted};
  margin-bottom: ${d.w4.spacing.md};
`,pq=l().h1`
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
`,pG=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 14px;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.24em;
  margin-top: ${d.w4.spacing.md};
  font-variant-numeric: tabular-nums;
`,pU=l().div`
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
`,pY=l().div`
  margin-top: ${d.w4.spacing.xl};
  display: flex;
  justify-content: center;
  gap: ${d.w4.spacing.md};
`,pW=l().div`
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
`,pV=l().button`
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
`,pJ=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,pQ=l().div`
  position: relative;
  padding: ${d.w4.spacing.xl};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};
  margin-bottom: ${d.w4.spacing.lg};
  animation: ${pJ} 0.25s ${d.w4.transitions.easing} both;

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
`,pZ=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${d.w4.spacing.md};
`,pX=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,p0=l().div`
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 400;
  color: ${d.w4.colors.mainText};
`,p1=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 560px;
`,p4=l().button`
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
`,p2=l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,p5=l().button`
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
`,p3=l().div`
  color: ${d.w4.colors.accent};
`,p6=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,p8=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.45;
`;function p7({t:e,onDismiss:t,onOpenPalette:o,onOpenPreferences:i}){let r=[{iconName:"search",titleKey:"onboarding.tip.palette.title",bodyKey:"onboarding.tip.palette.body",kbd:"⌘K",onClick:o},{iconName:"settings",titleKey:"onboarding.tip.preferences.title",bodyKey:"onboarding.tip.preferences.body",onClick:i},{iconName:"check",titleKey:"onboarding.tip.daily.title",bodyKey:"onboarding.tip.daily.body",onClick:()=>{window.location.hash="#/daily"}}];return(0,a.jsxs)(pQ,{role:"region","aria-label":e("onboarding.aria"),children:[(0,a.jsxs)(pZ,{children:[(0,a.jsxs)(pX,{children:[(0,a.jsx)(t2,{children:e("onboarding.eyebrow")}),(0,a.jsx)(p0,{children:e("onboarding.title")}),(0,a.jsx)(p1,{children:e("onboarding.subtitle")})]}),(0,a.jsx)(p4,{type:"button",title:e("onboarding.dismiss"),"aria-label":e("onboarding.dismiss"),onClick:t,children:(0,a.jsx)(td,{name:"close",size:14})})]}),(0,a.jsx)(p2,{children:r.map(t=>(0,a.jsxs)(p5,{type:"button",onClick:t.onClick,disabled:!t.onClick,children:[(0,a.jsx)(p3,{"aria-hidden":!0,children:(0,a.jsx)(td,{name:t.iconName,size:18})}),(0,a.jsxs)(p6,{children:[e(t.titleKey),t.kbd&&(0,a.jsx)(t1,{children:t.kbd})]}),(0,a.jsx)(p8,{children:e(t.bodyKey)})]},t.titleKey))})]})}let p9=Object.fromEntries(ac.map(({id:e,icon:t,labelKey:o,descriptionKey:a,color:i,category:r,suite:n,interest:s,needsAuth:l,hash:c})=>[e,{icon:t,labelKey:o,descriptionKey:a,color:i,category:r,suite:n,interest:s,needsAuth:l,hash:c}])),me=new Set(ac.filter(e=>"default"!==al(e)).map(e=>e.id)),mt=ac.filter(e=>e.enabled&&"default"===al(e)),mo=["All","Live","School","Explore","Create","Inspect","Connect","Content","Fun","Lab","Tools"],ma=["AI Lab","Data Studio","Life Dashboard","Learning Hub","Game Room","Entertainment"],mi=ma.filter(e=>mt.some(t=>p9[t.id]?.suite===e));function mr(e,t=new Date){let o=t.getHours();return as(o<12?"greeting.morning":o<19?"greeting.afternoon":"greeting.evening",e)}let mn={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",95:"⛈️",96:"⛈️",99:"⛈️"},ms={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},ml=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,mc=l().div`
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
`,md=l().header`
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
`,mp=l().button`
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
`,mm=l().div`
  display: flex;
  align-items: center;
  padding-left: ${d.w4.spacing.md};
  flex-shrink: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,mg=l().div`
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
`,mu=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,mh=l()("nav",{shouldForwardProp:e=>"collapsed"!==e})`
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
`,mf=l()("button",{shouldForwardProp:e=>"collapsed"!==e})`
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
`,mx=l()(o5.A,{shouldForwardProp:e=>"collapsed"!==e})`
  width: 14px;
  height: 14px;
  transition: transform ${d.w4.transitions.base};
  transform: rotate(${({collapsed:e})=>e?"-90deg":"0deg"});
  flex-shrink: 0;
`,my=l()("div",{shouldForwardProp:e=>"collapsed"!==e})`
  display: grid;
  grid-template-rows: ${({collapsed:e})=>e?"0fr":"1fr"};
  opacity: ${({collapsed:e})=>+!e};
  transition:
    grid-template-rows 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease-out;
`,mb=l().div`
  overflow: hidden;
  padding: 2px 0;
  min-height: 0;
`,mw=l().button`
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
`,m$=l().button`
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
`,mv=l().span`
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
`,mk=l().hr`
  border: none;
  border-top: 1px solid ${d.w4.colors.borderSubtle};
  margin: ${d.w4.spacing.sm} ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,mj=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({bleed:e})=>e?"0":`${d.w4.spacing.xl} ${d.w4.spacing.xxl} 80px`};
  overflow-y: auto;
  position: relative;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${({bleed:e})=>e?"0":`${d.w4.spacing.lg} ${d.w4.spacing.md} ${d.w4.spacing.xxl}`};
  }
`,mz=l().header`
  max-width: 820px;
  margin-bottom: ${d.w4.spacing.lg};
  animation: ${ml} 0.4s ease both;

  @media (max-width: ${d.w4.breakpoints.md}) {
    margin-bottom: ${d.w4.spacing.md};
  }
`,mM=l().div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${d.w4.spacing.md};
  margin-bottom: ${d.w4.spacing.md};
  flex-wrap: wrap;
`,mS=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.3em;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
`,mT=l().span`
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
`,mA=l().div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  animation: ${ml} 0.4s ease both;

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
`,mF=l().h1`
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
`,mC=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.sidebarTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 18px;
  margin-bottom: ${d.w4.spacing.md};
`,mL=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${d.w4.spacing.sm};
  }
`,mE=l().button`
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
`,mP=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${d.w4.spacing.sm};
  padding: ${d.w4.spacing.xl};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  margin: ${d.w4.spacing.lg} 0;
`,mN=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,mD=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.55;
  max-width: 480px;
`,mR=l().button`
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
`;function mB({apps:e,recentAppIds:t,pinnedAppIds:o,onTogglePin:r,onMovePinned:n,onSelect:s,user:l,onSignOut:c,onPreferences:m,onClearData:g,onOpenPalette:u,notifications:h,suites:f}){let x,y,b,[w]=(0,eb.useProfile)(),$=(0,i.useMemo)(()=>e.filter(e=>{if(me.has(e.id))return!1;let t=p9[e.id];return!t||!(0,eb.hasInterests)(w)||!t.interest||!!w.interests.includes(t.interest)}),[e,w]),[v,k]=(0,i.useState)("home"),[j,z]=(0,i.useState)("All"),[M,S]=(0,i.useState)(null),[T,A]=(0,i.useState)(()=>new Date),{forecast:F}=(0,eb.useWeather)({lat:o7.j.lisbon.lat,lon:o7.j.lisbon.lon,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:o7.j.lisbon.timezone,cacheKey:"weather-lisbon-v3"}),[C,L]=(0,i.useState)(!0);(0,i.useEffect)(()=>{let e=!1;return(0,V.getSetting)("shell:onboarding-dismissed").then(t=>{e||L("true"===t)}).catch(()=>void 0),()=>{e=!0}},[]);let E=(0,i.useCallback)(()=>{L(!0),(0,V.putSetting)("shell:onboarding-dismissed","true").catch(()=>void 0)},[]);(0,i.useEffect)(()=>{let e=setInterval(()=>A(new Date),6e4),t=()=>{document.hidden||A(new Date)};return document.addEventListener("visibilitychange",t),window.addEventListener("focus",t),()=>{clearInterval(e),document.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}},[]);let N=(0,i.useCallback)(()=>{k("home"),z("All"),S(null),(0,V.putSetting)("shell:home-mode","dashboard")},[]),D=(0,i.useCallback)(()=>{k("retreat"),z("All"),S(null),(0,V.putSetting)("shell:home-mode","retreat")},[]),R=(0,i.useCallback)(e=>{k("apps"),S(e),z("All")},[]),B=(0,i.useMemo)(()=>({lab:"AI Lab",vida:"Life Dashboard",learn:"Learning Hub",games:"Game Room",ent:"Entertainment"}),[]);(0,i.useEffect)(()=>{let e=()=>{let e=window.location.hash,t=e.indexOf("?");if(t<0)return;let o=new URLSearchParams(e.slice(t+1)).get("suite");if(!o)return;let a=B[o];a&&(k("apps"),S(a),z("All"))};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[B]);let[I,H]=(0,i.useState)(()=>{try{let e=localStorage.getItem("shell:suites-collapsed");return null===e||"true"===e}catch{return!0}}),[_,O]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem("shell:home-sidebar-hidden")}catch{return!1}}),[K]=(0,i.useState)(()=>{try{return"1"===sessionStorage.getItem(pr)}catch{return!1}});(0,i.useEffect)(()=>{let e=!1;return(async()=>{let[t,o,a]=await Promise.all([(0,V.getSetting)("shell:suites-collapsed"),(0,V.getSetting)("shell:home-mode"),(0,V.getSetting)("shell:home-sidebar-hidden")]);if(!e){if(null!==t){H("true"===t);try{localStorage.setItem("shell:suites-collapsed",t)}catch{}}if(null!==a){O("true"===a);try{localStorage.setItem("shell:home-sidebar-hidden",a)}catch{}}K?(k("home"),(0,V.putSetting)("shell:home-mode","dashboard").catch(()=>void 0)):"retreat"===o&&k("retreat")}})(),()=>{e=!0}},[K]),(0,i.useEffect)(()=>{let e=()=>{k("home"),z("All"),S(null)};return window.addEventListener("atlantis:open-widget-picker",e),()=>window.removeEventListener("atlantis:open-widget-picker",e)},[]);let q=(0,i.useCallback)(()=>{H(e=>{let t=!e;try{localStorage.setItem("shell:suites-collapsed",String(t))}catch{}return(0,V.putSetting)("shell:suites-collapsed",String(t)),t})},[]),G=(0,i.useCallback)(()=>{O(e=>{let t=!e;try{localStorage.setItem("shell:home-sidebar-hidden",String(t))}catch{}return(0,V.putSetting)("shell:home-sidebar-hidden",String(t)).catch(()=>void 0),t})},[]),[U,Y]=to(),W=(0,i.useMemo)(()=>ta(U,ah),[U]),J=(0,i.useMemo)(()=>{let e={};for(let t of $){let o=p9[t.id];o&&(e[t.id]={icon:o.icon,label:W(o.labelKey),description:W(o.descriptionKey),color:o.color,category:an(o.category,U),hash:o.hash,needsAuth:!!o.needsAuth})}return e},[$,W,U]),Q=(0,i.useMemo)(()=>$.filter(e=>{let t=p9[e.id],a="All"===j||t?.category===j,i=!M||t?.suite===M,r="All"===j&&!M&&o.includes(e.id);return a&&i&&!r}),[$,j,M,o]),Z=(0,i.useMemo)(()=>{if("All"!==j)return null;if(M){let e={};for(let t of Q){let o=p9[t.id]?.category??"Other";e[o]||(e[o]=[]),e[o].push(t)}return{type:"category",groups:e}}let e={};for(let t of Q){let o=p9[t.id]?.suite??"Other";e[o]||(e[o]=[]),e[o].push(t)}return{type:"suite",groups:e}},[Q,j,M]),X=(0,i.useMemo)(()=>{let e={};for(let t of $){let o=p9[t.id]?.suite;o&&(e[o]=(e[o]??0)+1)}return e["AI Lab"]=(e["AI Lab"]??0)+1,e},[$]),ee=(0,i.useMemo)(()=>o.flatMap(e=>$.filter(t=>t.id===e)),[o,$]),et=(0,i.useMemo)(()=>t.filter(e=>!o.includes(e)).flatMap(e=>$.filter(t=>t.id===e)).slice(0,6),[t,o,$]),eo=0,ea=(e,t,i)=>{let l=p9[e.id],c=o.includes(e.id),p=l?W(l.descriptionKey):"",m=l?.color??d.w4.colors.accent,g=l?an(l.category,U):"",u=i&&i.total>1?(0,a.jsxs)(a.Fragment,{children:[i.pinIdx>0&&(0,a.jsx)(mE,{type:"button",title:"pt"===U?"Mover para a esquerda":"Move left",onClick:t=>{t.stopPropagation(),n(e.id,-1)},children:(0,a.jsx)(o3.A,{size:13})}),i.pinIdx<i.total-1&&(0,a.jsx)(mE,{type:"button",title:"pt"===U?"Mover para a direita":"Move right",onClick:t=>{t.stopPropagation(),n(e.id,1)},children:(0,a.jsx)(o6.A,{size:13})})]}):void 0;return(0,a.jsx)(tQ,{vizId:e.id,label:e.label,description:p,hash:l?.hash??e.hash,category:g,accentColor:m,needsAuth:l?.needsAuth,pinned:c,index:t,onClick:()=>s(e),onHoverIntent:()=>ao(e.id),onTogglePin:()=>r(e.id),reorderControls:u},e.id)},ei=e=>{let t=o.includes("devtools");return(0,a.jsx)(tQ,{vizId:"devtools",label:W("apps.devtools.label"),description:W("apps.devtools.description"),hash:"#/playground",category:an("Create",U),accentColor:"#facc15",pinned:t,index:e,onClick:()=>{window.location.hash="#/playground"},onHoverIntent:()=>ao("playground"),onTogglePin:()=>r("devtools")})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(mc,{children:[(0,a.jsxs)(md,{children:[(0,a.jsx)(mm,{children:(0,a.jsx)(eE,{onClick:G,title:_?W("sidebar.show"):W("sidebar.hide"),"aria-label":_?W("sidebar.show"):W("sidebar.hide"),"aria-pressed":_,children:(0,a.jsx)(p.A,{size:16})})}),(0,a.jsxs)(mp,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:[(0,a.jsx)("span",{children:"Atl"}),(0,a.jsx)("span",{className:"logo-accent",children:"antis"})]}),(0,a.jsx)(mg,{children:(0,a.jsx)(tE,{locale:U,onLocaleChange:Y,suites:f,notifications:h,onOpenPalette:u,paletteLabel:W("palette.search"),user:l?{name:l.name,email:l.email,avatarUrl:l.avatarUrl}:void 0,userMenuItems:l?[...m?[{label:W("userMenu.preferences"),icon:(0,a.jsx)(e3.A,{size:14}),onClick:m}]:[],{label:W("userMenu.settings"),icon:(0,a.jsx)(o1.A,{size:14}),onClick:()=>{window.location.hash="#/settings"}},...g?[{label:W("userMenu.clearData"),icon:(0,a.jsx)(o4.A,{size:14}),onClick:g,danger:!0}]:[],...c?[{label:W("userMenu.signOut"),icon:(0,a.jsx)(o2.A,{size:14}),onClick:c,danger:!0}]:[]]:[],userMenuControlLabels:{language:W("userMenu.language"),theme:W("userMenu.theme"),themeLight:W("userMenu.themeLight"),themeDark:W("userMenu.themeDark"),themeSystem:W("userMenu.themeSystem")},onSignIn:()=>{window.location.hash="#/home"}})})]}),(0,a.jsxs)(mu,{children:[(0,a.jsxs)(mh,{collapsed:_,children:[(0,a.jsx)(m$,{active:"home"===v,onClick:N,children:(0,a.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,a.jsx)(o8.A,{size:14}),"pt"===U?"In\xedcio":"Home"]})}),(0,a.jsx)(m$,{active:"retreat"===v,onClick:D,children:(0,a.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,a.jsx)(P.A,{size:14}),W("sidebar.retreat")]})}),(0,a.jsx)(mk,{}),mi.length>0&&(0,a.jsxs)(a.Fragment,{children:[I?(0,a.jsx)(mw,{type:"button",onClick:q,children:W("sidebar.showSuites")}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(mf,{onClick:q,children:[as("suites",U),(0,a.jsx)(mx,{collapsed:I})]}),(0,a.jsx)(my,{collapsed:I,children:(0,a.jsx)(mb,{children:mi.map(e=>{let t,o=(t=ad.find(t=>t.yamlSuite===e))?{icon:t.icon,color:t.color}:void 0,i="apps"===v&&M===e;return(0,a.jsxs)(m$,{active:i,onClick:()=>R(e),children:[o&&(0,a.jsx)("span",{style:{display:"inline-flex",color:i?d.w4.colors.accent:o.color,flexShrink:0},children:(0,a.jsx)(td,{name:o.icon,size:16,"aria-hidden":"true"})}),(0,a.jsx)("span",{style:{flex:1,textAlign:"left"},children:ai[e]?.[U]??e}),(0,a.jsx)(mv,{active:i,children:X[e]??0})]},e)})})})]}),(0,a.jsx)(mk,{})]})]}),(0,a.jsx)(mj,{bleed:"retreat"===v,children:"retreat"===v?(0,a.jsx)(pI,{locale:U,greeting:mr(U,T),userName:l?.name,pinnedApps:ee,onSelect:s,t:W}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(mz,{children:[(0,a.jsxs)(mM,{children:[(0,a.jsx)(mS,{children:(x=T.toLocaleDateString("pt"===U?"pt-PT":"en-GB",{weekday:"long"}),y=T.getDate(),b=T.toLocaleDateString("pt"===U?"pt-PT":"en-GB",{month:"long"}),`${x} \xb7 ${y} ${b}`.toUpperCase())}),F?.current&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(mT,{children:"\xb7"}),(0,a.jsxs)(mA,{children:[(0,a.jsx)("span",{className:"ico",children:(F.current.is_day?mn[F.current.weather_code??0]:ms[F.current.weather_code??0]??mn[F.current.weather_code??0])??"\xb7"}),(0,a.jsxs)("span",{className:"temp",children:[Math.round(F.current.temperature_2m??0),"\xb0"]}),(0,a.jsx)("span",{className:"lbl",children:as("home.weather.city",U)})]})]})]}),(0,a.jsxs)(mF,{children:[mr(U,T),l?.name?(0,a.jsxs)(a.Fragment,{children:[", ",(0,a.jsx)("span",{className:"accent",children:l.name.split(" ")[0]})]}):null,"."]})]}),"home"===v&&!C&&0===ee.length&&0===et.length&&(0,a.jsx)(p7,{t:W,onDismiss:E,onOpenPalette:u,onOpenPreferences:m}),"home"===v&&(0,a.jsx)(pE,{locale:U,pinnedAppIds:o,recentAppIds:t,apps:$,appMeta:J,onSelectApp:s,onTogglePin:r}),"apps"===v&&(0,a.jsxs)(a.Fragment,{children:[0===Q.length&&(null!==M||"All"!==j||(0,eb.hasInterests)(w))&&(0,a.jsxs)(mP,{children:[(0,a.jsx)(mN,{children:as("home.emptyFiltered.title",U)}),(0,a.jsx)(mD,{children:as("home.emptyFiltered.desc",U)}),(0,a.jsxs)("div",{style:{display:"flex",gap:d.w4.spacing.sm},children:[(null!==M||"All"!==j)&&(0,a.jsx)(mR,{type:"button",onClick:()=>{S(null),z("All")},style:{background:"transparent",color:d.w4.colors.accent,border:`1px solid ${d.w4.colors.border}`},children:as("home.emptyFiltered.clear",U)}),m&&(0,a.jsx)(mR,{type:"button",onClick:m,children:as("home.emptyFiltered.cta",U)})]})]}),"All"===j&&!M&&ee.length>0&&(0,a.jsxs)("div",{children:[(0,a.jsx)(mC,{children:as("pinned",U)}),(0,a.jsx)(mL,{children:ee.map((e,t)=>ea(e,eo++,{pinIdx:t,total:ee.length}))})]}),"All"===j&&!M&&et.length>0&&(0,a.jsxs)("div",{children:[(0,a.jsx)(mC,{children:as("recentlyUsed",U)}),(0,a.jsx)(mL,{children:et.map(e=>ea(e,eo++))})]}),Z?[..."suite"===Z.type?ma:mo.slice(1),"Other"].filter(e=>Z.groups[e]?.length>0).map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(mC,{children:"suite"===Z.type?ai[e]?.[U]??e:an(e,U)}),(0,a.jsxs)(mL,{children:[Z.groups[e].map(e=>ea(e,eo++)),("suite"===Z.type&&"AI Lab"===e||"category"===Z.type&&"Lab"===e)&&ei(eo++)]})]},e)):(0,a.jsxs)(mL,{children:[Q.map(e=>ea(e,eo++)),"Lab"===j&&ei(eo++)]})]})]})})]})]})})}let mI=(0,o(82791).U)("https://eqvzakschpdemcgexjyy.supabase.co","sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL");function mH(){return mI.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin}})}function m_(){return mI.auth.signOut()}let mO=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,mK=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${d.w4.colors.mainBg};
`,mq=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${d.w4.spacing.lg};
  padding: 48px 40px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  animation: ${mO} 0.3s ease both;
  max-width: 360px;
  width: 100%;
  text-align: center;
`,mG=l().div`
  font-size: 40px;
  line-height: 1;
`,mU=l().h2`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  margin: 0;
`,mY=l().p`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  margin: 0;
  line-height: 1.5;
`,mW=l().button`
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
`,mV=()=>(0,a.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[(0,a.jsx)("path",{fill:"#EA4335",d:"M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.53 1 24 1 14.82 1 7.07 6.48 3.88 14.22l7.1 5.52C12.68 13.55 17.9 9.5 24 9.5z"}),(0,a.jsx)("path",{fill:"#4285F4",d:"M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.67c-.55 2.94-2.18 5.44-4.65 7.12l7.19 5.59C43.39 37.48 46.52 31.47 46.52 24.5z"}),(0,a.jsx)("path",{fill:"#FBBC05",d:"M10.98 28.26A14.57 14.57 0 0 1 9.5 24c0-1.48.25-2.91.68-4.26l-7.1-5.52A23.93 23.93 0 0 0 .5 24c0 3.87.93 7.52 2.58 10.74l7.9-6.48z"}),(0,a.jsx)("path",{fill:"#34A853",d:"M24 47c5.52 0 10.15-1.83 13.53-4.97l-7.19-5.59C28.47 37.82 26.36 38.5 24 38.5c-6.1 0-11.32-4.05-13.02-9.74l-7.9 6.48C6.07 42.54 14.45 47 24 47z"})]}),mJ=l().button`
  background: none;
  border: none;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  padding: 0;
  &:hover { color: ${d.w4.colors.mainText}; }
`;function mQ({appLabel:e,onBack:t}){return(0,a.jsx)(mK,{children:(0,a.jsxs)(mq,{children:[(0,a.jsx)(mG,{children:"\uD83D\uDD12"}),(0,a.jsx)(mU,{children:"Sign in required"}),(0,a.jsxs)(mY,{children:[(0,a.jsx)("strong",{style:{color:"inherit"},children:e})," is only available to signed-in users."]}),(0,a.jsxs)(mW,{onClick:mH,children:[(0,a.jsx)(mV,{}),"Continue with Google"]}),(0,a.jsx)(mJ,{onClick:t,children:"← Back to home"})]})})}let mZ={async saveDoc(e,t,o){let{data:{user:a}}=await mI.auth.getUser();if(!a)throw Error("Not authenticated");let{data:i,error:r}=await mI.from("documents").insert({user_id:a.id,app_id:e,name:t,content:o,saved_at:new Date().toISOString()}).select("id").single();if(r)throw r;return i.id},async updateDoc(e,t,o){let{error:a}=await mI.from("documents").update({name:t,content:o,saved_at:new Date().toISOString()}).eq("id",e);if(a)throw a},async listDocs(e){let{data:t,error:o}=await mI.from("documents").select("id, app_id, name, content, saved_at").eq("app_id",e).order("saved_at",{ascending:!1});if(o)throw o;return(t??[]).map(e=>({id:e.id,appId:e.app_id,name:e.name,content:e.content,savedAt:new Date(e.saved_at).getTime()}))},async deleteDoc(e){let{error:t}=await mI.from("documents").delete().eq("id",e);if(t)throw t},async putSetting(e,t){let{data:{user:o}}=await mI.auth.getUser();if(!o)return;let{error:a}=await mI.from("settings").upsert({user_id:o.id,key:e,value:t},{onConflict:"user_id,key"});if(a)throw a},async getSetting(e){let{data:{user:t}}=await mI.auth.getUser();if(!t)return null;let{data:o,error:a}=await mI.from("settings").select("value").eq("key",e).single();return a?null:o?.value??null}},mX=["palette.ask.suggest.summarizeDay","palette.ask.suggest.whatsTrending"],m0=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,m1=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.97) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,m4=l().div`
  position: fixed;
  inset: 0;
  z-index: ${d.w4.zIndex.modal};
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  animation: ${m0} ${d.w4.transitions.fast};

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding-top: 0;
    align-items: flex-end;
  }
`,m2=l().div`
  width: 780px;
  max-width: calc(100vw - 24px);
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.borderStrong};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${d.w4.elevation.lg};
  animation: ${m1} ${d.w4.transitions.base};
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
`,m5=l().div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,m3=l().div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  transition: color ${d.w4.transitions.fast};
`,m6=l().input`
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
`,m8=l().kbd`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.04em;
  color: ${d.w4.colors.mainTextFaint};
  padding: 3px 8px;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 5px;
  background: transparent;
`,m7=l().div`
  padding: 10px 16px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,m9=l().div`
  flex: 1;
  overflow-y: auto;
  padding: 6px 0 12px;
  min-height: 140px;
  max-height: 60vh;

  @media (max-width: ${d.w4.breakpoints.md}) {
    max-height: none;
  }
`,ge=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px 6px;
`,gt=l().span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.65;
`,go=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
`,ga=l()("div",{shouldForwardProp:e=>"selected"!==e})`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 22px;
  cursor: pointer;
  background: ${({selected:e})=>e?d.w4.colors.accentMuted:"transparent"};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.accentMuted}; }
`,gi=l()("div",{shouldForwardProp:e=>"tintColor"!==e&&"selected"!==e})`
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
`,gr=l()("div",{shouldForwardProp:e=>"tintColor"!==e})`
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
`,gn=l().div`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextMuted};
  background: transparent;
  flex-shrink: 0;
`,gs=l()("div",{shouldForwardProp:e=>"tintColor"!==e})`
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
`,gl=l().div`
  flex: 1;
  min-width: 0;
`,gc=l()("div",{shouldForwardProp:e=>"selected"!==e})`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: ${({selected:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  line-height: 1.25;
`,gd=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
  margin-top: 3px;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,gp=l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
  white-space: nowrap;
`,gm=l().div`
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;
`,gg=l().kbd`
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
`,gu=l().div`
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
`,gh=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 22px 24px;
  gap: 16px;
`,gf=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,gx=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`,gy=l().button`
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
`,gb=l().div`
  display: flex;
  flex-direction: column;
  padding: 12px 22px 16px;
  gap: 16px;
`,gw=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,g$=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
  margin-bottom: 2px;
`,gv=l().div`
  font-size: 14px;
  color: ${d.w4.colors.mainText};
  line-height: 1.5;
  font-weight: 500;
`,gk=(0,c.keyframes)`
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
  40%           { opacity: 1;   transform: scale(1);   }
`,gj=l().div`
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
    animation: ${gk} 1.4s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.2s; }
    &:nth-of-type(3) { animation-delay: 0.4s; }
  }
`,gz=l().div`
  font-size: 12px;
  color: ${d.w4.colors.danger};
  font-family: ${d.w4.typography.fontFamilyMono};
`,gM=l().div`
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
`,gS=l().div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 22px;
  border-top: 1px solid ${d.w4.colors.borderSubtle};

  @media (max-width: ${d.w4.breakpoints.md}) {
    gap: 12px;
    padding: 8px 16px;
  }
`,gT=l().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
`;function gA(e,t){if(!t)return!0;let o=t.toLowerCase();return e.label.toLowerCase().includes(o)||(e.meta?.toLowerCase().includes(o)??!1)}function gF({apps:e,recentIds:t,suites:o=[],games:n=[],actions:s=[],hasAsk:l=!1,groqKey:c,locale:p,initialScope:m,onNavigate:g,onClose:u}){let h=(0,i.useMemo)(()=>ta(p,ah),[p]),[f,x]=(0,i.useState)(""),[y,b]=(0,i.useState)(()=>"ask"!==m||l?m??"all":"all"),[w,$]=(0,i.useState)(0),[v,k]=(0,i.useState)([]),[j,z]=(0,i.useState)(!1),M=(0,i.useRef)([]),S=(0,i.useRef)(null),T=(0,i.useRef)(null),A=(0,i.useRef)(null),F=(0,i.useRef)(null);(0,i.useEffect)(()=>(S.current?.focus(),()=>{F.current?.abort()}),[]),(0,i.useEffect)(()=>{M.current=v},[v]),(0,i.useEffect)(()=>{A.current?.scrollIntoView({behavior:"smooth"})},[v,j]);let C=(0,i.useMemo)(()=>{let a=new Set(t),i=e.map(e=>({id:`app:${e.id}`,kind:"app",label:e.label,meta:e.description,isRecent:a.has(e.id),appIcon:{iconName:e.icon,color:e.color},onConfirm:()=>{g(e.hash),u()}}));return[...o.map(e=>({id:`suite:${e.id}`,kind:"suite",label:e.name,meta:e.sub,glyphIcon:{iconName:e.iconName,color:e.color},shortcut:e.shortcut,onConfirm:()=>{e.onConfirm(),u()}})),...i,...n.map(e=>({id:`game:${e.id}`,kind:"game",label:e.name,meta:h("palette.meta.game"),gameGlyph:{iconName:e.iconName,color:e.color},hash:e.hash,onConfirm:()=>{g(e.hash),u()}})),...s.map(e=>({id:`action:${e.id}`,kind:"action",label:e.label,meta:e.meta,glyphIcon:{iconName:e.iconName,color:e.color??d.w4.colors.accent},shortcut:e.shortcut,onConfirm:()=>{e.onClick(),u()}}))]},[e,o,n,s,t,g,u,h]),L=(0,i.useMemo)(()=>{if("ask"===y)return[];let e=C.filter(e=>gA(e,f)),o=[],a=(e,t,a)=>{if(0!==a.length)for(let i of(o.push({kind:"header",label:h(t),key:e,count:a.length}),a))o.push({kind:"item",item:i})};return"recent"===y?a("recent","palette.recent",C.filter(e=>"app"===e.kind&&e.isRecent&&gA(e,f)).sort((e,o)=>t.indexOf(e.id.slice(4))-t.indexOf(o.id.slice(4)))):"jump"===y?(a("suites","palette.section.suites",e.filter(e=>"suite"===e.kind)),a("apps","palette.section.apps",e.filter(e=>"app"===e.kind)),a("games","palette.section.games",e.filter(e=>"game"===e.kind))):"actions"===y?a("actions","palette.section.actions",e.filter(e=>"action"===e.kind)):(a("jump","palette.section.jump",e.filter(e=>"suite"===e.kind||"app"===e.kind||"game"===e.kind)),a("actions","palette.section.actions",e.filter(e=>"action"===e.kind)),l&&c&&a("ask","palette.section.ask",mX.map((e,t)=>({id:`suggest:${t}`,kind:"suggest",label:h(e),meta:h("palette.ask.suggestMeta"),shortcut:["↵"],onConfirm:()=>{b("ask"),setTimeout(()=>{P(h(e))},0)}})))),o},[y,f,C,t,h,l,c]),E=(0,i.useMemo)(()=>L.filter(e=>"item"===e.kind),[L]);(0,i.useEffect)(()=>{$(0)},[y,f]),(0,i.useEffect)(()=>{let e=T.current;if(!e)return;let t=e.querySelectorAll("[data-selectable]");t[w]?.scrollIntoView({block:"nearest"})},[w]);let P=(0,i.useCallback)(async e=>{if(!c||!e.trim())return;let t=e.trim(),o=`turn-${Date.now()}`;k(e=>[...e,{id:o,question:t}]),z(!0),x("");let a=[];for(let e of M.current)e.answer&&(a.push({role:"user",content:e.question}),a.push({role:"assistant",content:e.answer}));F.current?.abort();let i=new AbortController;F.current=i;try{let e=await ey(t,{key:c,locale:"pt"===p?"pt":"en",signal:i.signal,history:a});i.signal.aborted||k(t=>t.map(t=>t.id===o?{...t,answer:e}:t))}catch(t){if(i.signal.aborted)return;let e=t instanceof Error?t.message:String(t);k(t=>t.map(t=>t.id===o?{...t,error:e}:t))}finally{i.signal.aborted||z(!1)}},[c,p]),N=(0,i.useCallback)(e=>{if("Escape"===e.key){if("ask"===y&&f.trim())return void x("");if("ask"===y&&v.length>0){F.current?.abort(),z(!1),k([]);return}return void u()}if("ask"===y){"Enter"===e.key&&f.trim()&&(e.preventDefault(),P(f.trim()));return}if("ArrowDown"===e.key)e.preventDefault(),$(e=>Math.min(e+1,E.length-1));else if("ArrowUp"===e.key)e.preventDefault(),$(e=>Math.max(e-1,0));else if("Enter"===e.key){let e=E[w];e&&e.item.onConfirm()}},[y,f,v.length,E,w,u,P]),D=(0,i.useCallback)(e=>{e.target===e.currentTarget&&u()},[u]),R="ask"===y?v.length>0?h("palette.ask.followUp"):h("palette.ask.placeholder"):h("palette.placeholder"),B=(0,i.useMemo)(()=>{let e=[{value:"all",label:h("palette.scope.all")},{value:"jump",label:h("palette.scope.jump")},{value:"actions",label:h("palette.scope.actions")}];return l&&c&&e.push({value:"ask",label:h("palette.scope.ask"),highlight:!0}),e.push({value:"recent",label:h("palette.scope.recent")}),e},[h,l,c]),I=-1;return eB().createPortal((0,a.jsx)(m4,{onClick:D,children:(0,a.jsxs)(m2,{onClick:e=>e.stopPropagation(),children:[(0,a.jsxs)(m5,{children:[(0,a.jsx)(m3,{active:"ask"===y,children:(0,a.jsx)(td,{name:"ask"===y?"sparkle":"search",size:20,"aria-hidden":"true"})}),(0,a.jsx)(m6,{ref:S,placeholder:R,value:f,onChange:e=>x(e.target.value),onKeyDown:N,"aria-label":h("palette.search")}),(0,a.jsx)(m8,{children:"esc"})]}),(0,a.jsx)(m7,{children:(0,a.jsx)(eD,{tabs:B,value:y,onChange:b,"aria-label":h("palette.scope.ariaLabel")})}),"ask"===y?(0,a.jsx)(gu,{children:0!==v.length||j?(0,a.jsxs)(gb,{children:[v.map(e=>(0,a.jsxs)(r().Fragment,{children:[(0,a.jsxs)(gw,{children:[(0,a.jsx)(g$,{children:h("palette.ask.you")}),(0,a.jsx)(gv,{children:e.question})]}),(0,a.jsxs)(gw,{children:[(0,a.jsx)(g$,{children:h("palette.ask.atlantis")}),void 0!==e.answer?(0,a.jsx)(o0,{children:e.answer}):void 0!==e.error?(0,a.jsx)(gz,{children:e.error}):(0,a.jsxs)(gj,{"aria-label":h("palette.ask.thinking"),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})]})]},e.id)),(0,a.jsx)("div",{ref:A})]}):(0,a.jsxs)(gh,{children:[(0,a.jsx)(gf,{children:h("palette.ask.suggestionsTitle")}),(0,a.jsx)(gx,{children:mX.map(e=>(0,a.jsx)(gy,{onClick:()=>{P(h(e))},type:"button",children:h(e)},e))}),(0,a.jsx)(gf,{style:{marginTop:4},children:h("palette.ask.hint")})]})}):(0,a.jsx)(m9,{ref:T,children:0===E.length?(0,a.jsxs)(gM,{children:[(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)(td,{name:"search",size:16,"aria-hidden":"true"})}),(0,a.jsxs)("div",{className:"title",children:[h("palette.noMatch")," ",f&&(0,a.jsxs)("span",{className:"query",children:["“",f,"”"]})]}),(0,a.jsx)("div",{className:"hint",children:h("palette.emptyHint")})]}):L.map((e,t)=>{if("header"===e.kind)return(0,a.jsxs)(ge,{children:[(0,a.jsx)(gt,{children:e.label}),(0,a.jsx)(go,{children:e.count})]},`h-${e.key}`);let o=I+=1,i=o===w,r=e.item;return(0,a.jsxs)(ga,{selected:i,"data-selectable":!0,onMouseEnter:()=>$(o),onClick:()=>r.onConfirm(),children:[r.appIcon&&(0,a.jsx)(gi,{tintColor:r.appIcon.color,selected:i,children:(0,a.jsx)(td,{name:r.appIcon.iconName,size:18,"aria-hidden":"true",color:r.appIcon.color})}),r.glyphIcon&&(0,a.jsx)(gr,{tintColor:r.glyphIcon.color,children:(0,a.jsx)(td,{name:r.glyphIcon.iconName,size:18,"aria-hidden":"true"})}),r.gameGlyph&&(0,a.jsx)(gs,{tintColor:r.gameGlyph.color,children:(0,a.jsx)(td,{name:r.gameGlyph.iconName,size:18,"aria-hidden":"true",color:r.gameGlyph.color})}),"suggest"===r.kind&&(0,a.jsx)(gn,{children:(0,a.jsx)(td,{name:"sparkle",size:18,"aria-hidden":"true"})}),(0,a.jsxs)(gl,{children:[(0,a.jsx)(gc,{selected:i,children:r.label}),r.meta&&(0,a.jsx)(gd,{children:r.meta})]}),r.hash&&(0,a.jsx)(gp,{children:r.hash}),r.shortcut&&r.shortcut.length>0&&(0,a.jsx)(gm,{children:r.shortcut.map((e,t)=>(0,a.jsx)(gg,{children:e},t))})]},r.id+"-"+t)})}),(0,a.jsx)(gS,{children:"ask"===y?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(gT,{children:[(0,a.jsx)(gg,{children:"↵"}),h("palette.hint.ask")]}),(0,a.jsxs)(gT,{children:[(0,a.jsx)(gg,{children:"esc"}),h("palette.hint.close")]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(gT,{children:[(0,a.jsx)(gg,{children:"↑"}),(0,a.jsx)(gg,{children:"↓"}),h("palette.hint.navigate")]}),(0,a.jsxs)(gT,{children:[(0,a.jsx)(gg,{children:"↵"}),h("palette.hint.open")]}),(0,a.jsxs)(gT,{children:[(0,a.jsx)(gg,{children:"esc"}),h("palette.hint.close")]})]})})]})}),document.body)}let gC=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,gL=l().button`
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
  animation: ${gC} 0.25s ${d.w4.transitions.easing} both;
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
`;function gE({onOpenPalette:e,t}){return eB().createPortal((0,a.jsxs)(gL,{type:"button","aria-label":t("cmdk.hint.aria"),onClick:e,children:[(0,a.jsx)(t1,{children:"⌘K"}),t("cmdk.hint.label")]}),document.body)}var gP=o(8006),gN=o(68440),gD=o(80140),gR=o(12743),gB=o(76480),gI=o(69248);let gH=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,g_=l().div`
  flex: 1;
  overflow-y: auto;
  padding: ${d.w4.spacing.xl};
`,gO=l().div`
  max-width: 680px;
  margin: 0 auto;
  animation: ${gH} 0.4s ease;
`,gK=l().div`
  margin-bottom: ${d.w4.spacing.xl};
`,gq=l().h1`
  font-size: ${d.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  margin: 0 0 4px;
`,gG=l().p`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  margin: 0;
  line-height: 1.5;
`,gU=l().section`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
  margin-bottom: ${d.w4.spacing.lg};
`,gY=l().h2`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  margin: 0 0 ${d.w4.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,gW=l().p`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  margin: 0 0 ${d.w4.spacing.lg};
  line-height: 1.5;
`,gV=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: ${d.w4.spacing.md};

  &:last-of-type {
    margin-bottom: 0;
  }
`,gJ=l().label`
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,gQ=l().span`
  font-size: 9px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${({active:e})=>e?"rgba(63,185,80,0.15)":"rgba(139,148,158,0.15)"};
  color: ${({active:e})=>e?"#3fb950":d.w4.colors.mainTextMuted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,gZ=l().span`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  font-weight: 400;
`,gX=l().div`
  display: flex;
  gap: 6px;
`,g0=l().div`
  flex: 1;
  position: relative;
`,g1=l().input`
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
`,g4=l().button`
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
`,g2=l().button`
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
`,g5=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${d.w4.spacing.md};
  margin-top: ${d.w4.spacing.md};
  border-top: 1px solid ${d.w4.colors.border};
`,g3=l().button`
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
`,g6=l().span`
  font-size: ${d.w4.typography.fontSizeSm};
  color: #3fb950;
  font-family: ${d.w4.typography.fontFamilyMono};
`,g8=l().div`
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
`,g7=[{id:"groq",label:"Groq",placeholder:"gsk_...",help:"Used by Prompt Lab and Image Gen (enhance)",linkUrl:"https://console.groq.com/keys",linkLabel:"Get key"},{id:"gemini",label:"Google Gemini",placeholder:"AIza...",help:"Used by Prompt Lab",linkUrl:"https://aistudio.google.com/apikey",linkLabel:"Get key"}],g9="atlantis:api-keys",ue="atlantis:promptlab:keys",ut={groq:"",gemini:""};function uo({lang:e}){let[t,o]=(0,i.useState)(ut),[r,n]=(0,i.useState)({}),[s,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=function(){try{let e=localStorage.getItem(g9);if(e)return{...ut,...JSON.parse(e)};let t=localStorage.getItem(ue);if(t)return{...ut,...JSON.parse(t)}}catch{}return{...ut}}();o(e),(0,V.getSetting)(g9).then(t=>{if(t)try{let a={...ut,...JSON.parse(t)},i={groq:e.groq||a.groq,gemini:e.gemini||a.gemini};o(i)}catch{}})},[]);let p=(0,i.useCallback)((e,t)=>{o(o=>({...o,[e]:t})),d(!0),l(!1)},[]),m=(0,i.useCallback)(e=>{o(t=>({...t,[e]:""})),d(!0),l(!1)},[]),g=(0,i.useCallback)(()=>{let e;e=JSON.stringify(t),localStorage.setItem(g9,e),localStorage.setItem(ue,e),(0,V.putSetting)(g9,e),d(!1),l(!0),setTimeout(()=>l(!1),2500)},[t]),u="pt"===e;return(0,a.jsx)(g_,{children:(0,a.jsxs)(gO,{children:[(0,a.jsxs)(gK,{children:[(0,a.jsx)(gq,{children:u?"Defini\xe7\xf5es":"Settings"}),(0,a.jsx)(gG,{children:u?"Gere as tuas chaves de API para os servi\xe7os de IA. As chaves s\xe3o guardadas no teu browser e sincronizadas com a tua conta.":"Manage your API keys for AI services. Keys are stored in your browser and synced with your account."})]}),(0,a.jsxs)(gU,{children:[(0,a.jsxs)(gY,{children:[(0,a.jsx)(gP.A,{size:16}),u?"Chaves de API":"API Keys"]}),(0,a.jsx)(gW,{children:u?"Estas chaves s\xe3o usadas pelo Prompt Lab e Image Gen. Cada servi\xe7o tem um plano gratuito.":"These keys are used by Prompt Lab and Image Gen. Each service has a free tier."}),g7.map(e=>{let o=t[e.id],i=r[e.id]??!1;return(0,a.jsxs)(gV,{children:[(0,a.jsxs)(gJ,{children:[e.label,(0,a.jsx)(gQ,{active:!!o,children:o?u?"ativa":"active":u?"vazia":"empty"}),(0,a.jsxs)(gZ,{children:["— ",e.help]})]}),(0,a.jsxs)(gX,{children:[(0,a.jsxs)(g0,{children:[(0,a.jsx)(g1,{type:i?"text":"password",value:o,onChange:t=>p(e.id,t.target.value),placeholder:e.placeholder,spellCheck:!1,autoComplete:"off"}),(0,a.jsx)(g4,{onClick:()=>n(t=>({...t,[e.id]:!i})),title:i?"Hide":"Show",children:i?(0,a.jsx)(gN.A,{size:13}):(0,a.jsx)(gD.A,{size:13})})]}),(0,a.jsx)(g2,{danger:!0,onClick:()=>m(e.id),title:u?"Limpar":"Clear",children:(0,a.jsx)(o4.A,{size:13})}),(0,a.jsx)("a",{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,a.jsx)(g2,{title:e.linkLabel,children:(0,a.jsx)(gR.A,{size:13})})})]})]},e.id)}),(0,a.jsxs)(g5,{children:[s?(0,a.jsx)(g6,{children:u?"✓ Guardado":"✓ Saved"}):(0,a.jsx)("span",{}),(0,a.jsxs)(g3,{onClick:g,disabled:!c,children:[(0,a.jsx)(gB.A,{size:13}),u?"Guardar":"Save"]})]})]}),(0,a.jsxs)(g8,{children:[(0,a.jsx)(gI.A,{size:14,style:{flexShrink:0,marginTop:2}}),(0,a.jsx)("span",{children:u?"As chaves s\xe3o enviadas diretamente do teu browser para o servi\xe7o de IA — nunca passam pelos nossos servidores. Podes remov\xea-las a qualquer momento.":"Keys are sent directly from your browser to the AI provider — they never pass through our servers. You can remove them at any time."})]})]})})}var ua=o(24525);let ui=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ur=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-4px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,un=l().div`
  position: fixed;
  inset: 0;
  z-index: 4000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: ${ui} 0.15s ease both;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${d.w4.spacing.md};
`,us=l().div`
  width: 100%;
  max-width: 480px;
  max-height: calc(100dvh - 32px);
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  animation: ${ur} 0.18s ease both;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,ul=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  border-bottom: 1px solid ${d.w4.colors.border};
`,uc=l().h2`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  margin: 0;
`,ud=l().button`
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
`,up=l().div`
  padding: ${d.w4.spacing.lg};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,um=l().section`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,ug=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,uu=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: -2px;
`,uh=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,uf=l().button`
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
`,ux=l().div`
  display: flex;
  justify-content: flex-end;
  gap: ${d.w4.spacing.sm};
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  border-top: 1px solid ${d.w4.colors.border};
`,uy=l().button`
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
`,ub=l().button`
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
`;function uw({open:e,onClose:t,locale:o}){let[r,n]=(0,eb.useProfile)(),[s,l]=(0,i.useState)(r),c=(0,i.useMemo)(()=>ta("pt"===o?"pt":"en",ah),[o]);if((0,i.useEffect)(()=>{e&&l(r)},[e,r]),(0,i.useEffect)(()=>{if(!e)return;let o=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e)return null;let d=async()=>{let e=s.ageMode!==r.ageMode||s.interests.length!==r.interests.length||s.interests.some(e=>!r.interests.includes(e));await n(s),t(),e&&(await (0,V.clearSettingsByPrefix)("widget-cache:"),window.location.reload())},p="pt"===o?eb.INTEREST_LABELS_PT:eb.INTEREST_LABELS_EN,m="pt"===o?eb.AGE_MODE_LABELS_PT:eb.AGE_MODE_LABELS_EN;return eB().createPortal((0,a.jsx)(un,{onClick:e=>{e.target===e.currentTarget&&t()},children:(0,a.jsxs)(us,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-title",children:[(0,a.jsxs)(ul,{children:[(0,a.jsx)(uc,{id:"profile-title",children:c("profile.title")}),(0,a.jsx)(ud,{onClick:t,"aria-label":c("profile.close"),children:(0,a.jsx)(ua.A,{size:16})})]}),(0,a.jsxs)(up,{children:[(0,a.jsxs)(um,{children:[(0,a.jsx)(ug,{children:c("profile.interests")}),(0,a.jsx)(uu,{children:c("profile.interestsHint")}),(0,a.jsx)(uh,{children:eb.ALL_INTERESTS.map(e=>(0,a.jsx)(uf,{active:s.interests.includes(e),onClick:()=>{l(t=>({...t,interests:t.interests.includes(e)?t.interests.filter(t=>t!==e):[...t.interests,e]}))},"aria-pressed":s.interests.includes(e),children:p[e]},e))})]}),(0,a.jsxs)(um,{children:[(0,a.jsx)(ug,{children:c("profile.ageMode")}),(0,a.jsx)(uu,{children:c("profile.ageModeHint")}),(0,a.jsx)(uh,{children:["kid","teen","adult"].map(e=>(0,a.jsx)(uf,{active:s.ageMode===e,onClick:()=>{l(t=>({...t,ageMode:e}))},"aria-pressed":s.ageMode===e,children:m[e]},e))})]})]}),(0,a.jsxs)(ux,{children:[(0,a.jsx)(uy,{onClick:t,children:c("profile.cancel")}),(0,a.jsx)(ub,{onClick:d,children:c("profile.save")})]})]})}),document.body)}let u$=["news.pt","news.world","seismic.pt","seismic.world","daily.overdue"],uv=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,uk=l().div`
  position: fixed;
  inset: 0;
  z-index: ${d.w4.zIndex.dropdown};
`,uj=l().div`
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
  animation: ${uv} 0.15s ease both;
  overflow: hidden;

  @media (max-width: ${d.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    width: auto;
    max-width: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
  }
`,uz=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,uM=l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
`,uS=l().button`
  background: none;
  border: none;
  color: ${d.w4.colors.accent};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  padding: 2px 4px;

  &:hover { color: ${d.w4.colors.accentHover}; }
  &:disabled { color: ${d.w4.colors.mainTextFaint}; cursor: not-allowed; }
`,uT=l().div`
  flex: 1;
  overflow-y: auto;
`,uA=l().div`
  position: relative;
  display: block;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.surfaceHover}; }
  &:hover .dismiss { opacity: 1; }
  &:last-child { border-bottom: none; }
`,uF=l().a`
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
`,uC=l().button`
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
`,uL=l().div`
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
`,uE=l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  line-height: 1.4;
  color: ${d.w4.colors.mainText};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,uP=l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-right: 6px;
  vertical-align: -2px;
`,uN=l().div`
  padding: 32px 16px;
  text-align: center;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  color: ${d.w4.colors.mainTextMuted};
`;function uD({locale:e,state:t,anchor:o}){let r=(0,i.useMemo)(()=>ta(e,ah),[e]),{open:n,close:s,items:l,markAllRead:c,dismiss:p}=t;if(!n||!o)return null;let m=Math.round(o.bottom+8),g=Math.max(12,Math.round(window.innerWidth-o.right)),u=()=>{s(),window.location.hash="#/daily"};return eB().createPortal((0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(uk,{onClick:s}),(0,a.jsxs)(uj,{style:{top:m,right:g},role:"dialog","aria-label":r("notifications.title"),children:[(0,a.jsxs)(uz,{children:[(0,a.jsx)(uM,{children:r("notifications.title")}),(0,a.jsx)(uS,{onClick:c,disabled:0===l.length,children:r("notifications.markAllRead")})]}),(0,a.jsx)(uT,{children:0===l.length?(0,a.jsx)(uN,{children:r("notifications.empty")}):l.map(e=>{let t=eb.defaultStore.getCategory(e.category)?.badgeColor??d.w4.colors.mainTextMuted,o=eb.defaultStore.getCategory(e.category)?.labelKey,i=o?r(o):e.category;if("daily.overdue"===e.category){let o,n,s,l=e.meta,c=l?.count??0,d=(l?.missions??[]).slice(0,4),m=1===c?r("notifications.daily.group.one"):r("notifications.daily.group.many",{count:c});return(0,a.jsxs)(uA,{children:[(0,a.jsxs)(uF,{as:"button",type:"button",onClick:u,children:[(0,a.jsxs)(uL,{color:t,children:[(0,a.jsx)("span",{className:"dot"}),i,(0,a.jsx)("span",{className:"time",children:(n=String((o=new Date(e.ts)).getHours()).padStart(2,"0"),s=String(o.getMinutes()).padStart(2,"0"),`${n}:${s}`)})]}),(0,a.jsxs)(uE,{children:[(0,a.jsx)(uP,{children:d.map(e=>tc(e.emoji)?(0,a.jsx)(td,{name:e.emoji,size:14,style:{color:e.color??t}},e.id):(0,a.jsx)("span",{children:e.emoji},e.id))}),m]})]}),(0,a.jsx)(uC,{type:"button",className:"dismiss","aria-label":r("notifications.dismiss"),title:r("notifications.dismiss"),onClick:t=>{t.stopPropagation(),p(e.id)},children:"\xd7"})]},e.id)}let n=e.link?{href:e.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>{p(e.id)}}:{as:"button",type:"button",onClick:()=>{p(e.id)}};return(0,a.jsxs)(uA,{children:[(0,a.jsxs)(uF,{...n,children:[(0,a.jsxs)(uL,{color:t,children:[(0,a.jsx)("span",{className:"dot"}),i,(0,a.jsx)("span",{className:"time",children:ti(new Date(e.ts).toISOString(),r)})]}),(0,a.jsx)(uE,{children:e.title})]}),(0,a.jsx)(uC,{type:"button",className:"dismiss","aria-label":r("notifications.dismiss"),title:r("notifications.dismiss"),onClick:t=>{t.stopPropagation(),p(e.id)},children:"\xd7"})]},e.id)})})]})]}),document.body)}let uR={"stockpulse.enabled":!0};function uB(e){try{let t=localStorage.getItem("shell:flag:"+e);if("true"===t)return!0;if("false"===t)return!1}catch{}return uR[e]??!1}function uI(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,o)=>{let a=Date.parse(e.pubDate);Number.isNaN(a)||t.push({id:`${a}-${o}`,ts:a,title:e.title,link:e.link})}),t}function uH(e){if(!Array.isArray(e))return[];let t=[];return e.forEach((e,o)=>{let a=Date.parse(e.time);if(Number.isNaN(a))return;let i=e.local||e.obsRegion||"?";t.push({id:`pt-${a}-${o}`,ts:a,title:`M ${e.mag.toFixed(1)} — ${i}`})}),t}function u_(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}let uO={"news.pt":()=>{eb.events.registerCategory({id:"news.pt",labelKey:"notifications.source.newsPt",badgeColor:"#2da44e"}),eb.events.registerProducer((0,eb.cacheBackedProducer)({id:"news-pt",category:"news.pt",cacheKey:"news-portugal",parse:uI}))},"news.world":()=>{eb.events.registerCategory({id:"news.world",labelKey:"notifications.source.newsWorld",badgeColor:"#cc0000"}),eb.events.registerProducer((0,eb.cacheBackedProducer)({id:"news-world",category:"news.world",cacheKey:"news-world",parse:uI}))},"seismic.pt":()=>{eb.events.registerCategory({id:"seismic.pt",labelKey:"notifications.source.seismicPt",badgeColor:"#f97316"}),eb.events.registerProducer((0,eb.cacheBackedProducer)({id:"seismic-pt",category:"seismic.pt",cacheKey:"seismic-pt",parse:uH}))},"seismic.world":()=>{eb.events.registerCategory({id:"seismic.world",labelKey:"notifications.source.seismicWorld",badgeColor:"#ea580c"}),eb.events.registerProducer((0,eb.cacheBackedProducer)({id:"seismic-world",category:"seismic.world",cacheKey:"seismic-world",parse:u_}))},"daily.overdue":()=>{eb.events.registerCategory({id:"daily.overdue",labelKey:"notifications.source.daily",badgeColor:"#fb923c"}),eb.events.registerProducer((0,eb.dailyProducer)({category:"daily.overdue"}))}};var uK=ac.filter(e=>e.flag?uB(e.flag):e.enabled).flatMap(e=>e.dataSources??[]);let uq=new Set;for(let e of uK){if(uq.has(e))continue;uq.add(e);let t=uO[e];if(!t){console.warn(`[dataSources] unknown id '${e}' — not in DATA_SOURCES registry`);continue}t()}let uG={movies:e=>({apiKey:e.tmdbKey}),games:e=>({isAuthenticated:!!e.user})},uU=l().div`
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  animation: fadeSlideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  height: 100%;
`,uY=(0,c.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,uW=l().div`
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
`,uV=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${d.w4.colors.success};
  flex-shrink: 0;
  animation: ${uY} 2s ease-in-out infinite;
`,uJ={techscope:9,weather:1,citypulse:1};function uQ({count:e}){return(0,a.jsxs)(uW,{title:`${e} live ${1===e?"feed":"feeds"}`,children:[(0,a.jsx)(uV,{}),e,(0,a.jsx)("span",{style:{opacity:.65,fontSize:10},children:"LIVE"})]})}let uZ=l().div`
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
`,uX=(l().code`
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
`),u0=l().h2`
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 600;
`,u1=l().p`
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeBase};
  max-width: 360px;
  text-align: center;
  line-height: 1.5;
`,u4=l().button`
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
`;function u2({name:e,error:t,topBarRight:o,onRetry:r}){let[n]=to(),s=(0,i.useMemo)(()=>ta(n,ah),[n]),l=t.message??"",c=l.startsWith("REMOTE_LOAD_FAILED:"),p=c?l.slice(19):e,m=`apps.${p}.label`,g=s(m),u=g&&g!==m?g:p;return(0,a.jsx)(L,{title:u,sidebar:null,topBarRight:o,children:(0,a.jsxs)(uZ,{children:[(0,a.jsx)(uX,{children:"⚠"}),(0,a.jsx)(u0,{children:s("error.remote.title",{name:u})}),(0,a.jsx)(u1,{children:s(c?"error.remote.prodHint":"error.remote.generic")}),c&&!1,(0,a.jsxs)("div",{style:{display:"flex",gap:d.w4.spacing.sm},children:[(0,a.jsx)(u4,{onClick:r,children:s("error.remote.retry")}),(0,a.jsx)(u4,{onClick:()=>{window.location.hash="#/home"},children:s("error.remote.goHome")})]})]})})}class u5 extends r().Component{static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){console.error(`[RemoteErrorBoundary] "${this.props.name}" threw:`,e)}componentDidUpdate(e){e.name!==this.props.name&&this.state.error&&this.setState({error:null})}render(){return this.state.error?(0,a.jsx)(u2,{name:this.props.name,error:this.state.error,topBarRight:this.props.topBarRight,onRetry:()=>this.setState({error:null})}):this.props.children}constructor(...e){super(...e),function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(this,"state",{error:null})}}let u3=(()=>{let e={settings:"settings"};for(let t of ac)for(let o of(e[t.hash.replace(/^#\//,"")]=t.id,t.hashAliases??[]))e[o]=t.id;return e})();function u6(e){let t=e.replace(/^#\/?/,"");return t&&"home"!==t?u3[t.split("/")[0].split("?")[0]]??"home":"home"}let u8="shell:recent",u7="shell:pinned",u9="shell:last-app";function he(){let e=window.location.hash;if(!e||"#"===e||"#/"===e)try{let e=localStorage.getItem(u9);if(e&&"home"!==e&&ae[e]){let t=ac.find(t=>t.id===e);if(t)return history.replaceState(null,"",t.hash),e}}catch{}return u6(e)}function ht(e){try{return JSON.parse(e??"[]")}catch{return[]}}let ho=new Set(ac.filter(e=>e.needsAuth).map(e=>e.id)),ha="true"===process.env.MOCK_USER?{id:"mock-user",email:"dev@atlantis.local",user_metadata:{full_name:"Dev User",avatar_url:""}}:null,hi=document.getElementById("root");if(!hi)throw Error("Root element #root not found");(0,n.createRoot)(hi).render((0,a.jsx)(function(){let e,[t,o]=(0,i.useState)(he),[r,n]=(0,i.useState)([]),[s,l]=(0,i.useState)([]),[c,p]=(0,i.useState)(ha),[m,g]=(0,i.useState)(!!ha),[u,h]=(0,i.useState)(!1),[f,x]=(0,i.useState)(void 0),[y,b]=(0,i.useState)(!1),[w,$]=(0,i.useState)(!1),[v,k]=to(),j=(0,i.useMemo)(()=>ta(v,ah),[v]),z=function(e={}){let t=(0,eb.useEventBell)({channels:[...u$]}),[o,a]=(0,i.useState)(!1),r=(0,i.useRef)(null),n=(0,i.useRef)(e.formatDailyReminder);(0,i.useEffect)(()=>{n.current=e.formatDailyReminder},[e.formatDailyReminder]),(0,i.useEffect)(()=>{let e=()=>{eb.defaultStore.refresh()};window.addEventListener("focus",e);let t=eb.dailyStore.subscribe(e);return()=>{window.removeEventListener("focus",e),t()}},[]),(0,i.useEffect)(()=>{if("u"<typeof window||!("Notification"in window)||"granted"!==Notification.permission)return;let e=t.items.find(e=>"daily.overdue"===e.category),o=(0,eb.todayISO)();if(!e||r.current===o)return;let a=e.meta,i=a?.missions?.[0],s=i?n.current?.(i):void 0;if(s){r.current=o;try{new Notification(s.title,{body:s.body,tag:`atlantis-daily-${o}`,icon:"/manifest-icon.png"})}catch{}}},[t.items]);let s=(0,i.useCallback)(()=>a(e=>!e),[]),l=(0,i.useCallback)(()=>a(!1),[]);return{...t,open:o,toggle:s,close:l}}({formatDailyReminder:(0,i.useCallback)(e=>{let t=(0,eb.missionLabel)(e,v),o=e.emoji?`${e.emoji} ${t}`.trim():t;return{title:j("notifications.source.daily"),body:j("notifications.daily.body",{time:e.time??"",name:o})}},[j,v])}),[M,S]=(0,i.useState)(null);(0,i.useEffect)(()=>{if(ha)return;mI.auth.getSession().then(({data:e})=>{let t=e.session?.user??null;p(t),(0,V.setStorageProvider)(t?mZ:null),g(!0)});let{data:{subscription:e}}=mI.auth.onAuthStateChange((e,t)=>{let o=t?.user??null;p(o),(0,V.setStorageProvider)(o?mZ:null)});return()=>e.unsubscribe()},[]),(0,i.useEffect)(()=>{(0,V.getSetting)(u8).then(e=>n(ht(e))),(0,V.getSetting)(u7).then(e=>l(ht(e)))},[]),(0,i.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"k"===e.key&&(e.preventDefault(),x(void 0),h(e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,i.useEffect)(()=>{let e=e=>{let t=e.detail;x(t?.scope),h(!0)};return window.addEventListener("atlantis:open-palette",e),()=>window.removeEventListener("atlantis:open-palette",e)},[]),(0,i.useEffect)(()=>{let e=()=>o(u6(window.location.hash));return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),(0,i.useEffect)(()=>{if(t&&"home"!==t){try{localStorage.setItem(u9,t)}catch{}n(e=>{let o=[t,...e.filter(e=>e!==t)].slice(0,8);return(0,V.putSetting)(u8,JSON.stringify(o)),o})}},[t]);let T=(0,i.useCallback)(e=>{window.location.hash=e,h(!1),x(void 0)},[]),A=(0,i.useCallback)(e=>{window.location.hash=`#/home?suite=${encodeURIComponent(e)}`},[]),[F]=(0,eb.useProfile)(),C=(0,i.useMemo)(()=>ac.filter(e=>e.flag?uB(e.flag):e.enabled).filter(e=>"hidden"!==al(e)).filter(e=>!(0,eb.hasInterests)(F)||!e.interest||F.interests.includes(e.interest)),[F]),E=(0,i.useMemo)(()=>{let e=ap.map(e=>({id:e.id,name:j(e.labelKey),iconName:e.iconName,hash:e.hash,accentColor:e.color,onClick:()=>{window.location.hash=e.hash}}));return ad.map(t=>{let o=C.filter(e=>e.suite===t.yamlSuite),a="games"===t.id;return{id:t.id,name:j(t.nameKey),subtitle:j(t.subKey),color:t.color,icon:t.icon,count:a?ap.length:o.length,onClick:a?void 0:()=>A(t.id),children:a?e:void 0}})},[C,j,A]),P=(0,i.useMemo)(()=>E.filter(e=>e.count>0),[E]),N=(0,i.useMemo)(()=>P.map(e=>({id:e.id,name:e.name,sub:e.subtitle,color:e.color,iconName:e.icon,onConfirm:()=>A(e.id)})),[P,A]),D=(0,i.useMemo)(()=>ap.map(e=>({id:e.id,name:j(e.labelKey),iconName:e.iconName,hash:e.hash,color:e.color})),[j]),R=(0,i.useMemo)(()=>[{id:"add-widget",label:j("palette.action.addWidget"),meta:j("palette.action.addWidget.meta"),iconName:"plus",color:d.w4.colors.accent,onClick:()=>{window.location.hash="#/home";try{sessionStorage.setItem(pr,"1")}catch{}window.dispatchEvent(new CustomEvent("atlantis:open-widget-picker"))}},{id:"preferences",label:j("palette.action.preferences"),meta:j("palette.action.preferences.meta"),iconName:"settings",onClick:()=>b(!0)},{id:"settings",label:j("palette.action.settings"),meta:j("palette.action.settings.meta"),iconName:"sparkle",onClick:()=>{window.location.hash="#/settings"}},{id:"language",label:j("palette.action.language"),meta:"pt"===v?"PT → EN":"EN → PT",iconName:"globe",onClick:()=>k("pt"===v?"en":"pt")},...z.count>0?[{id:"clear-notifications",label:j("palette.action.clearNotifications"),meta:j("palette.action.clearNotifications.meta",{n:z.count}),iconName:"bell",color:d.w4.colors.accent,onClick:()=>{z.markAllRead()}}]:[],...c?[{id:"signout",label:j("palette.action.signout"),meta:c.email??"",iconName:"arrow-up-right",color:d.w4.colors.danger,onClick:()=>{m_()}}]:[]],[j,v,k,c,z]),[B,I]=(0,i.useState)(null);(0,i.useEffect)(()=>{ex().then(I)},[]);let H=null!==ef()||!!B,_=(0,i.useMemo)(()=>C.map(({id:e,labelKey:t,hash:o})=>({id:e,label:j(t),hash:o})),[C,j]),K=(0,i.useMemo)(()=>C.map(({id:e,labelKey:t,descriptionKey:o,hash:a,icon:i,color:r,category:n})=>({id:e,label:j(t),description:j(o),hash:a,icon:i,color:r,category:n})),[C,j]),q=(e=ac.find(e=>e.id===t))?j(e.labelKey):t;if(!m)return(0,a.jsx)(O,{children:(0,a.jsx)(eu,{})});if(ho.has(t)&&!c)return(0,a.jsx)(O,{children:(0,a.jsx)(mQ,{appLabel:q,onBack:()=>{window.location.hash="#/home"}})});let G=uJ[t],U=e=>{S(e.currentTarget.getBoundingClientRect()),z.toggle()},Y=(0,a.jsx)(tE,{locale:v,onLocaleChange:k,before:null!=G?(0,a.jsx)(uQ,{count:G}):void 0,suites:{entries:P,label:j("suites.label"),ariaLabel:j("suites.aria"),appsLabel:j("suites.appsCount")},notifications:{count:z.count,onClick:U,label:j("notifications.bell")},onOpenPalette:()=>{x(void 0),h(!0)},paletteLabel:j("palette.search"),user:c?{name:c.user_metadata?.full_name,email:c.email??"",avatarUrl:c.user_metadata?.avatar_url}:void 0,userMenuItems:c?[{label:j("userMenu.preferences"),icon:(0,a.jsx)(e3.A,{size:14}),onClick:()=>b(!0)},{label:j("userMenu.settings"),icon:(0,a.jsx)(o1.A,{size:14}),onClick:()=>{window.location.hash="#/settings"}},{label:j("userMenu.clearData"),icon:(0,a.jsx)(o4.A,{size:14}),onClick:()=>$(!0),danger:!0},{label:j("userMenu.signOut"),icon:(0,a.jsx)(o2.A,{size:14}),onClick:m_,danger:!0}]:[],userMenuControlLabels:{language:j("userMenu.language"),theme:j("userMenu.theme"),themeLight:j("userMenu.themeLight"),themeDark:j("userMenu.themeDark"),themeSystem:j("userMenu.themeSystem")},onSignIn:()=>{window.location.hash="#/home"}}),W=u&&(0,a.jsx)(gF,{apps:K,recentIds:r,suites:N,games:D,actions:R,hasAsk:H,groqKey:B??void 0,locale:v,initialScope:f,onNavigate:T,onClose:()=>{h(!1),x(void 0)}}),J=!u&&(0,a.jsx)(gE,{t:j,onOpenPalette:()=>{x(void 0),h(!0)}}),Q=(0,a.jsx)(uw,{open:y,onClose:()=>b(!1),locale:v}),Z=(0,a.jsx)(ei,{open:w,title:j("userMenu.clearData"),message:j("userMenu.clearDataConfirm"),confirmLabel:j("userMenu.clearData"),cancelLabel:j("common.cancel"),danger:!0,onCancel:()=>$(!1),onConfirm:async()=>{$(!1),await (0,V.clearSettingsByPrefix)(""),window.location.reload()}}),X=(0,a.jsx)(uD,{locale:v,state:z,anchor:M});if("home"===t)return(0,a.jsxs)(O,{children:[(0,a.jsx)(uU,{children:(0,a.jsx)(mB,{apps:_,recentAppIds:r,pinnedAppIds:s,onTogglePin:e=>{l(t=>{let o=t.includes(e)?t.filter(t=>t!==e):[...t,e];return(0,V.putSetting)(u7,JSON.stringify(o)),o})},onMovePinned:(e,t)=>{l(o=>{let a=o.indexOf(e);if(a<0)return o;let i=a+t;if(i<0||i>=o.length)return o;let r=[...o];return[r[a],r[i]]=[r[i],r[a]],(0,V.putSetting)(u7,JSON.stringify(r)),r})},onSelect:e=>{window.location.hash=e.hash},user:c?{name:c.user_metadata?.full_name,email:c.email??"",avatarUrl:c.user_metadata?.avatar_url}:null,onSignOut:m_,onPreferences:()=>b(!0),onClearData:()=>$(!0),onOpenPalette:()=>{x(void 0),h(!0)},notifications:{count:z.count,onClick:U,label:j("notifications.bell")},suites:{entries:P,label:j("suites.label"),ariaLabel:j("suites.aria"),appsLabel:j("suites.appsCount")}})},"home"),W,J,Q,Z,X]});let ee=ae[t],et=uG[t]?.({user:c,tmdbKey:"9b6f2645abf1725625c843aa71e3efd5"})??{};return(0,a.jsxs)(O,{children:[(0,a.jsx)(u5,{name:t,topBarRight:Y,children:(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(eu,{}),children:(0,a.jsxs)(uU,{children:[ee&&(0,a.jsx)(ee,{topBarRight:Y,...et}),"settings"===t&&(0,a.jsx)(L,{title:"Settings",sidebar:null,topBarRight:Y,children:(0,a.jsx)(uo,{lang:"pt"===v?"pt":"en"})})]},t)})}),W,J,Q,Z,X]})},{}))},30522(e,t,o){o.d(t,{C:()=>l,j:()=>c});let a={dal:{tmdb:{baseUrl:"https://api.themoviedb.org/3",imageBaseUrl:"https://image.tmdb.org/t/p",defaultTtlMs:18e5},wikipedia:{contentBaseUrl:"https://en.wikipedia.org/api/rest_v1",analyticsBaseUrl:"https://wikimedia.org/api/rest_v1",defaultTtlMs:36e5},sunriseSunset:{baseUrl:"https://api.sunrise-sunset.org/json",defaultTtlMs:864e5},openLibrary:{searchUrl:"https://openlibrary.org/search.json",coverBaseUrl:"https://covers.openlibrary.org/b/id",defaultTtlMs:2592e6},coinGecko:{baseUrl:"https://api.coingecko.com/api/v3",defaultTtlMs:3e5},openMeteo:{baseUrl:"https://api.open-meteo.com/v1",defaultTtlMs:9e5},hn:{algoliaBaseUrl:"https://hn.algolia.com/api/v1",firebaseBaseUrl:"https://hacker-news.firebaseio.com/v0",defaultTtlMs:3e5},github:{baseUrl:"https://api.github.com",defaultTtlMs:3e5},rss:{baseUrl:"https://api.rss2json.com/v1/api.json",defaultTtlMs:6e5},ipma:{baseUrl:"https://api.ipma.pt/open-data/observation/seismic",defaultTtlMs:18e5},usgs:{baseUrl:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary",defaultTtlMs:18e5}},locations:{lisbon:{lat:38.7223,lon:-9.1393,label:"Lisboa",timezone:"Europe/Lisbon"}}};function i(e){try{return"u">typeof process?process.env[e]:void 0}catch{return}}function r(e,t){let o=e;for(let e of t){if(!o||"object"!=typeof o)throw Error(`appConfig: missing path ${t.join(".")}`);o=o[e]}return o}function n(e,t){let o=i(t);if(o)return o;let n=r(a,e);if("string"!=typeof n)throw Error(`appConfig: expected string at ${e.join(".")}`);return n}function s(e,t){let o=i(t);if(void 0!==o&&""!==o){let e=Number(o);if(Number.isFinite(e))return e}let n=r(a,e);if("number"!=typeof n)throw Error(`appConfig: expected number at ${e.join(".")}`);return n}let l=Object.freeze({tmdb:Object.freeze({baseUrl:n(["dal","tmdb","baseUrl"],"TMDB_BASE_URL"),imageBaseUrl:n(["dal","tmdb","imageBaseUrl"],"TMDB_IMAGE_BASE_URL"),defaultTtlMs:s(["dal","tmdb","defaultTtlMs"],"TMDB_DEFAULT_TTL_MS")}),wikipedia:Object.freeze({contentBaseUrl:n(["dal","wikipedia","contentBaseUrl"],"WIKIPEDIA_CONTENT_BASE_URL"),analyticsBaseUrl:n(["dal","wikipedia","analyticsBaseUrl"],"WIKIPEDIA_ANALYTICS_BASE_URL"),defaultTtlMs:s(["dal","wikipedia","defaultTtlMs"],"WIKIPEDIA_DEFAULT_TTL_MS")}),sunriseSunset:Object.freeze({baseUrl:n(["dal","sunriseSunset","baseUrl"],"SUNRISE_SUNSET_BASE_URL"),defaultTtlMs:s(["dal","sunriseSunset","defaultTtlMs"],"SUNRISE_SUNSET_DEFAULT_TTL_MS")}),openLibrary:Object.freeze({searchUrl:n(["dal","openLibrary","searchUrl"],"OPEN_LIBRARY_SEARCH_URL"),coverBaseUrl:n(["dal","openLibrary","coverBaseUrl"],"OPEN_LIBRARY_COVER_BASE_URL"),defaultTtlMs:s(["dal","openLibrary","defaultTtlMs"],"OPEN_LIBRARY_DEFAULT_TTL_MS")}),coinGecko:Object.freeze({baseUrl:n(["dal","coinGecko","baseUrl"],"COINGECKO_BASE_URL"),defaultTtlMs:s(["dal","coinGecko","defaultTtlMs"],"COINGECKO_DEFAULT_TTL_MS")}),openMeteo:Object.freeze({baseUrl:n(["dal","openMeteo","baseUrl"],"OPEN_METEO_BASE_URL"),defaultTtlMs:s(["dal","openMeteo","defaultTtlMs"],"OPEN_METEO_DEFAULT_TTL_MS")}),hn:Object.freeze({algoliaBaseUrl:n(["dal","hn","algoliaBaseUrl"],"HN_ALGOLIA_BASE_URL"),firebaseBaseUrl:n(["dal","hn","firebaseBaseUrl"],"HN_FIREBASE_BASE_URL"),defaultTtlMs:s(["dal","hn","defaultTtlMs"],"HN_DEFAULT_TTL_MS")}),github:Object.freeze({baseUrl:n(["dal","github","baseUrl"],"GITHUB_BASE_URL"),defaultTtlMs:s(["dal","github","defaultTtlMs"],"GITHUB_DEFAULT_TTL_MS")}),rss:Object.freeze({baseUrl:n(["dal","rss","baseUrl"],"RSS_BASE_URL"),defaultTtlMs:s(["dal","rss","defaultTtlMs"],"RSS_DEFAULT_TTL_MS")}),ipma:Object.freeze({baseUrl:n(["dal","ipma","baseUrl"],"IPMA_BASE_URL"),defaultTtlMs:s(["dal","ipma","defaultTtlMs"],"IPMA_DEFAULT_TTL_MS")}),usgs:Object.freeze({baseUrl:n(["dal","usgs","baseUrl"],"USGS_BASE_URL"),defaultTtlMs:s(["dal","usgs","defaultTtlMs"],"USGS_DEFAULT_TTL_MS")})}),c=Object.freeze({lisbon:Object.freeze({lat:s(["locations","lisbon","lat"],"LOCATION_LISBON_LAT"),lon:s(["locations","lisbon","lon"],"LOCATION_LISBON_LON"),label:n(["locations","lisbon","label"],"LOCATION_LISBON_LABEL"),timezone:n(["locations","lisbon","timezone"],"LOCATION_LISBON_TIMEZONE")})})},87330(e,t,o){o.d(t,{FlyoutPanel:()=>eE});var a=o(65723),i=o(37991),r=o.n(i),n=o(36859),s=o.n(n),l=o(72799),c=o(20255),d=o(81316),p=o(40814),m=o(36896),g=o(87902),u=o(53013),h=o(32887),f=o(49510),x=o(39848),y=o(37901),b=o(3045),w=o(43775),$=o(41783),v=o(83539),k=o(39416),j=o(1837),z=o(57167),M=o(84494),S=o(82314),T=o(35751),A=o(69633),F=o(92946),C=o(40822),L=o(36720),E=o(57400),P=o(58456),N=o(43317),D=o(52709),R=o(8006),B=o(89301),I=o(37561),H=o(83517),_=o(28207),O=o(37032),K=o(6949),q=o(8218),G=o(36829),U=o(59591),Y=o(15553),W=o(69923),V=o(72820),J=o(14621),Q=o(68479),Z=o(72534),X=o(66673),ee=o(67490),et=o(49033),eo=o(99038),ea=o(45775),ei=o(31365),er=o(62937),en=o(9821),es=o(65912),el=o(80158),ec=o(88641),ed=o(48607),ep=o(83249),em=o(1821),eg=o(15889),eu=o(89655),eh=o(27170),ef=o(19161),ex=o(71849),ey=o(41604),eb=o(13142),ew=o(61187),e$=o(77747),ev=o(2932),ek=o(24525),ej=o(57230),ez=o(22164);let eM={activity:m.A,"a-large-small":g.A,apple:u.A,"arrow-right":h.A,"bar-chart-2":f.A,book:x.A,"book-open":y.A,briefcase:b.A,calendar:w.A,clock:$.A,"circle-dot":v.A,cloud:k.A,compass:j.A,cpu:z.A,droplets:M.A,feather:S.A,file:c.A,"file-text":T.A,folder:A.A,"git-branch":F.A,github:C.A,globe:L.A,grid:E.A,hand:P.A,hash:N.A,heart:D.A,key:R.A,hexagon:B.A,home:I.A,landmark:H.A,layers:_.A,"layout-grid":O.A,leaf:K.A,lightbulb:q.A,list:G.A,map:U.A,"map-pin":Y.A,"message-circle":W.A,"message-square":V.A,minus:J.A,monitor:Q.A,mountain:Z.A,package:X.A,palette:ee.A,"pen-tool":et.A,"pie-chart":eo.A,plane:ea.A,plus:ei.A,ruler:er.A,shirt:en.A,slash:es.A,square:el.A,star:ec.A,sun:ed.A,terminal:ep.A,thermometer:em.A,triangle:eg.A,trophy:eu.A,truck:eh.A,type:ef.A,users:ex.A,"volume-2":ey.A,watch:eb.A,waves:ew.A,wind:e$.A,wrench:ev.A,x:ek.A,zap:ej.A,bot:ez.A},eS=(0,l.keyframes)`
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
`,eF=s().button`
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
`;function eC({iconKey:e}){let t=e?eM[e]??c.A:c.A;return(0,a.jsx)(t,{size:14,strokeWidth:1.75})}function eL({entries:e,activeId:t,onSelect:o}){return(0,a.jsx)(a.Fragment,{children:e.map(e=>e.children?(0,a.jsx)(r().Fragment,{children:(0,a.jsx)(eL,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,a.jsxs)(eF,{active:t===e.id,onClick:()=>o(e),children:[(0,a.jsx)(eC,{iconKey:e.icon}),e.name]},e.id))})}function eE({activeId:e}){let{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:i}=(0,p.c)();if(!t)return null;let r=t.entry.icon?eM[t.entry.icon]??c.A:c.A;return(0,a.jsxs)(eT,{anchorY:t.anchorY,onMouseEnter:i,onMouseLeave:o,children:[(0,a.jsxs)(eA,{children:[(0,a.jsx)(r,{size:13,strokeWidth:2}),t.entry.name]}),(0,a.jsx)(eL,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},40814(e,t,o){o.d(t,{I:()=>i,c:()=>r});var a=o(37991);let i=(0,a.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,a.useContext)(i)},81316(e,t,o){o.d(t,{EE:()=>n,w4:()=>s});let a={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},i={sidebarBg:"#eef0f5",sidebarText:"#1f2937",sidebarTextMuted:"#6b7280",sidebarActive:"#4f46e5",sidebarActiveBg:"#ede9fe",sidebarHover:"#dde1e8",sidebarBorder:"#d7dbe3",mainBg:"#f5f6fa",mainText:"#111827",mainTextMuted:"#4b5563",mainTextFaint:"rgba(17,24,39,0.42)",accent:"#4f46e5",accentHover:"#6366f1",accentMuted:"rgba(79,70,229,0.12)",codeBg:"#eef0f5",codeBorder:"#d7dbe3",border:"#cfd4de",borderStrong:"rgba(15,23,42,0.18)",borderSubtle:"#e2e5eb",surface:"#ffffff",surfaceRaised:"#fbfbfd",surfaceHover:"#eef1f7",success:"#059669",warning:"#d97706",danger:"#dc2626",shadow:"rgba(15, 23, 42, 0.08)",shadowStrong:"rgba(15, 23, 42, 0.14)",suiteLab:"#5a4acf",suiteVida:"#4f9b6a",suiteLearn:"#3f7ea8",suiteGames:"#d94e85",suiteEnt:"#c47736"},r="--at-";function n(e){let t="dark"===e?a:i;return Object.keys(t).map(e=>`${r}${e}: ${t[e]};`).join("\n  ")}let s={colors:function(){let e={};for(let t of Object.keys(a))e[t]=`var(${r}${t})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${r}suiteLab)`,vida:`var(${r}suiteVida)`,learn:`var(${r}suiteLearn)`,games:`var(${r}suiteGames)`,ent:`var(${r}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}}}]);