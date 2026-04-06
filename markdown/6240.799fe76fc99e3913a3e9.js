"use strict";(self.webpackChunk_atlantis_markdown=self.webpackChunk_atlantis_markdown||[]).push([[6240],{74914(e,o,r){r.d(o,{FlyoutPanel:()=>b});var t=r(27359),n=r(53233),i=r(77207),a=r(20255),l=r(217),s=r(15959),d=r(65185),c=r(65723);const p=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=n.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  z-index: 1200;
  background: #161b22;
  border: 1px solid rgba(88, 166, 255, 0.2);
  border-radius: ${l.w.borderRadius.lg};
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.06),
    0 16px 48px rgba(0, 0, 0, 0.75);
  min-width: 210px;
  overflow: hidden;
  animation: ${p} 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,f=n.default.div`
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
`,u=n.default.button`
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
`;function x({iconKey:e}){const o=e?d.t[e]??a.A:a.A;return(0,c.jsx)(o,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:o,onSelect:r}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(t.Fragment,{children:(0,c.jsx)(h,{entries:e.children,activeId:o,onSelect:r})},e.id):(0,c.jsxs)(u,{active:o===e.id,onClick:()=>r(e),children:[(0,c.jsx)(x,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){const{flyout:o,scheduleFlyoutClose:r,cancelFlyoutClose:t}=(0,s.c)();if(!o)return null;const n=o.entry.icon?d.t[o.entry.icon]??a.A:a.A;return(0,c.jsxs)(g,{anchorY:o.anchorY,onMouseEnter:t,onMouseLeave:r,children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(n,{size:13,strokeWidth:2}),o.entry.name]}),(0,c.jsx)(h,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),r()}})]})}},15959(e,o,r){r.d(o,{I:()=>n,c:()=>i});var t=r(27359);const n=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,t.useContext)(n)},65185(e,o,r){r.d(o,{t:()=>w});var t=r(37901),n=r(22164),i=r(1837),a=r(35751),l=r(20255),s=r(69633),d=r(92946),c=r(40822),p=r(37032),g=r(8218),f=r(15553),u=r(72820),x=r(66673),h=r(83249),b=r(2932),m=r(57230);const w={"book-open":t.A,"file-text":a.A,package:x.A,compass:i.A,"git-branch":d.A,github:c.A,terminal:h.A,zap:m.A,bot:n.A,lightbulb:g.A,"message-square":u.A,wrench:b.A,"layout-grid":p.A,file:l.A,folder:s.A,"map-pin":f.A}},3188(e,o,r){r.d(o,{PE:()=>j,CD:()=>P,w4:()=>t.w});var t=r(217),n=r(27359),i=r(53233),a=r(65723);i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 ${t.w.spacing.sm};
  background: ${t.w.colors.surface};
  border: 1px solid ${t.w.colors.border};
  border-radius: ${t.w.borderRadius.md};
  color: ${t.w.colors.mainText};
  font-family: ${t.w.typography.fontFamily};
  font-size: ${t.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w.colors.sidebarHover};
    border-color: ${t.w.colors.accent};
  }
`,i.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${t.w.colors.surface};
  border: 1px solid ${t.w.colors.border};
  border-radius: ${t.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${t.w.spacing.sm};
  background: ${({active:e})=>e?t.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:e})=>e?t.w.colors.accent:t.w.colors.mainText};
  font-family: ${t.w.typography.fontFamily};
  font-size: ${t.w.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${t.w.colors.sidebarHover};
  }
`,i.default.div`
  position: relative;
`,i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?t.w.colors.accent:t.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var l=r(73661),s=r(15959);const d="260px",c="56px",p=i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${t.w.colors.sidebarBg};
  border-bottom: 1px solid ${t.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,g=i.default.div`
  width: ${c};
  min-width: ${c};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w.colors.sidebarBorder};
  flex-shrink: 0;
`,f=i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${t.w.borderRadius.md};
  cursor: pointer;
  color: ${t.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w.colors.sidebarHover};
    color: ${t.w.colors.sidebarText};
  }
`,u=i.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w.typography.fontFamily};
  font-size: ${t.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${t.w.colors.accent}; }
`,x=i.default.div`
  font-size: ${t.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w.colors.sidebarTextMuted};
  font-family: ${t.w.typography.fontFamily};
  padding-left: ${t.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${t.w.spacing.sm};
    color: ${t.w.colors.border};
  }
`,h=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${t.w.spacing.lg};
`,b=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,m=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${t.w.colors.mainBg};
  font-family: ${t.w.typography.fontFamily};
  color: ${t.w.colors.mainText};
  overflow: hidden;
`,w=i.default.aside`
  width: ${({collapsed:e})=>e?c:d};
  min-width: ${({collapsed:e})=>e?c:d};
  background: ${t.w.colors.sidebarBg};
  border-right: 1px solid ${t.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w.breakpoints.md}) {
    display: none;
  }
`,y=i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,$=i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,v="atlantis:sidebar-collapsed";function j({sidebar:e,children:o,topBarRight:t,title:i="Atlantis",activeId:d=null}){const[c,j]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(v)}catch{return!1}}),[k,z]=(0,n.useState)(null),S=(0,n.useRef)(),A=()=>j(e=>{const o=!e;try{localStorage.setItem(v,String(o))}catch{}return o}),T=n.useMemo(()=>n.lazy(()=>Promise.resolve().then(r.bind(r,74914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,a.jsx)(s.I.Provider,{value:{collapsed:c,toggle:A,flyout:k,openFlyout:(e,o,r)=>{clearTimeout(S.current),z({entry:e,anchorY:o,onSelect:r})},scheduleFlyoutClose:()=>{S.current=setTimeout(()=>z(null),160)},cancelFlyoutClose:()=>clearTimeout(S.current)},children:(0,a.jsxs)(m,{children:[(0,a.jsxs)(p,{children:[(0,a.jsx)(g,{children:(0,a.jsx)(f,{onClick:A,title:c?"Expand sidebar":"Collapse sidebar",children:(0,a.jsx)(l.A,{size:17})})}),(0,a.jsxs)(u,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,a.jsx)("span",{children:"antis"})]}),i&&(0,a.jsx)(x,{children:i}),t&&(0,a.jsx)(h,{children:t})]}),(0,a.jsxs)(b,{children:[(0,a.jsx)(w,{collapsed:c,children:(0,a.jsx)(y,{children:e})}),(0,a.jsx)($,{children:o})]}),k&&(0,a.jsx)(n.Suspense,{fallback:null,children:(0,a.jsx)(T,{activeId:d})})]})})}var k=r(20255),z=r(69753),S=r(65185);const A=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,T=i.default.div`
  overflow: hidden;
`,C=i.default.div`
  padding-left: ${t.w.spacing.md};
`,B=i.default.div`
  display: flex;
  flex-direction: column;
`,F=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w.spacing.sm} ${t.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":t.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w.colors.sidebarTextMuted};
  font-size: ${t.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w.colors.sidebarText};
    background: ${t.w.colors.sidebarHover};
  }
`,M=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,I=i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,R=i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,E=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${t.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w.colors.sidebarActive:t.w.colors.sidebarText};
  font-size: ${t.w.typography.fontSizeBase};
  font-family: ${t.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w.borderRadius.sm} ${t.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${t.w.colors.sidebarHover};
  }
`;function N({iconKey:e,size:o=16}){const r=e?S.t[e]??k.A:k.A;return(0,a.jsx)(r,{size:o,strokeWidth:1.75})}function H({entry:e,activeId:o,onSelect:r}){const[t,i]=(0,n.useState)(!0),{collapsed:l,openFlyout:d,scheduleFlyoutClose:c,cancelFlyoutClose:p}=(0,s.c)();return e.children&&e.children.length>0?(0,a.jsxs)(B,{children:[(0,a.jsxs)(F,{collapsed:l,onClick:()=>{l||i(e=>!e)},onMouseEnter:l?o=>{const t=o.currentTarget.getBoundingClientRect();d(e,t.top,r)}:void 0,onMouseLeave:l?c:void 0,children:[(0,a.jsxs)(M,{collapsed:l,children:[(0,a.jsx)(N,{iconKey:e.icon,size:16}),(0,a.jsx)(I,{collapsed:l,children:e.name})]}),(0,a.jsx)(R,{open:t,collapsed:l,children:(0,a.jsx)(z.A,{size:13})})]}),(0,a.jsx)(A,{open:t&&!l,children:(0,a.jsx)(T,{children:(0,a.jsx)(C,{children:e.children.map(e=>(0,a.jsx)(H,{entry:e,activeId:o,onSelect:r},e.id))})})})]}):(0,a.jsxs)(E,{active:o===e.id,collapsed:l,onClick:()=>r(e),onMouseEnter:l?o=>{const t=o.currentTarget.getBoundingClientRect();d({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},t.top,r)}:void 0,onMouseLeave:l?c:void 0,children:[(0,a.jsx)(N,{iconKey:e.icon,size:15}),(0,a.jsx)(I,{collapsed:l,children:e.name})]})}function P({entries:e,activeId:o,onSelect:r}){return(0,a.jsx)("div",{children:e.map(e=>(0,a.jsx)(H,{entry:e,activeId:o,onSelect:r},e.id))})}const L=r(77207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
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
`,r(74914)},217(e,o,r){r.d(o,{w:()=>t});const t={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},31509(e,o,r){r.d(o,{G:()=>oe});var t=r(27359),n=r(28976),i=r(35143),a=r(98808),l=r(53233),s=r(66225),d=r(302),c=r(69753),p=r(3188),g=r(65723);const f=l.default.div`
  background: ${p.w4.colors.codeBg};
  border: 1px solid ${p.w4.colors.codeBorder};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.lg};
  margin: ${p.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;

  svg {
    max-width: 100%;
  }
`,u=l.default.div`
  color: #f85149;
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: ${p.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let x=!1;function h({code:e}){const o=(0,t.useRef)(null),[n,i]=(0,t.useState)(null);return(0,t.useEffect)(()=>{let t=!1;return async function(){const n=(await r.e(774).then(r.bind(r,30774))).default;if(x||(n.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:p.w4.colors.codeBg,primaryColor:p.w4.colors.accent,primaryTextColor:p.w4.colors.mainText,lineColor:p.w4.colors.border}}),x=!0),o.current&&!t)try{const r=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:i}=await n.render(r,e);!t&&o.current&&(o.current.innerHTML=i)}catch(e){t||i(e instanceof Error?e.message:String(e))}}(),()=>{t=!0}},[e]),n?(0,g.jsx)(f,{children:(0,g.jsxs)(u,{children:["Mermaid error: ",n]})}):(0,g.jsx)(f,{ref:o})}var b=r(68383),m=r(21426),w=r(25609),y=r(20320);const $=l.default.div`
  margin: ${p.w4.spacing.lg} 0;
  border-radius: ${p.w4.borderRadius.md};
  border: 1px solid ${p.w4.colors.codeBorder};
  overflow: hidden;
`,v=l.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${p.w4.colors.codeBorder};
`,j=l.default.span`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,k=l.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":p.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${p.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: ${p.w4.colors.sidebarText};
    border-color: ${p.w4.colors.sidebarText};
  }
`,z={...m.A,'pre[class*="language-"]':{...m.A['pre[class*="language-"]'],background:p.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...m.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function S({lang:e="text",code:o}){const[r,n]=(0,t.useState)(!1),i=o.split("\n").length>8;return(0,g.jsxs)($,{children:[(0,g.jsxs)(v,{children:[(0,g.jsx)(j,{children:e}),(0,g.jsxs)(k,{copied:r,onClick:()=>{navigator.clipboard.writeText(o).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})},children:[r?(0,g.jsx)(w.A,{size:12}):(0,g.jsx)(y.A,{size:12}),r?"Copied!":"Copy"]})]}),(0,g.jsx)(b.A,{language:e,style:z,showLineNumbers:i,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:p.w4.colors.codeBg},wrapLongLines:!1,children:o})]})}var A=r(65569),T=r(8218),C=r(57230),B=r(22966),F=r(21069);const M={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:A.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:T.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:C.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:B.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:F.A,label:"Caution",color:"#f85149"}},I=l.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${p.w4.borderRadius.md} ${p.w4.borderRadius.md} 0;
  padding: ${p.w4.spacing.md} ${p.w4.spacing.lg};
  margin: ${p.w4.spacing.lg} 0;
`,R=l.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${p.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${p.w4.typography.fontFamily};
  margin-bottom: ${p.w4.spacing.sm};
`,E=l.default.div`
  color: ${p.w4.colors.mainText};
  font-size: ${p.w4.typography.fontSizeBase};

  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function N({type:e,children:o}){const r=M[e]??M.NOTE,t=r.icon;return(0,g.jsxs)(I,{bg:r.bg,border:r.border,children:[(0,g.jsxs)(R,{color:r.color,children:[(0,g.jsx)(t,{size:15,strokeWidth:2}),r.label]}),(0,g.jsx)(E,{children:o})]})}const H=l.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${p.w4.spacing.xxl} 0 ${p.w4.spacing.xxl} ${p.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;

  @media (max-width: 1100px) {
    display: none;
  }
`,P=l.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${p.w4.colors.sidebarTextMuted};
  font-family: ${p.w4.typography.fontFamily};
  margin-bottom: ${p.w4.spacing.md};
`,L=l.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,O=l.default.li`
  padding-left: ${({level:e})=>3===e?"12px":"0"};
`,G=l.default.a`
  display: block;
  padding: 4px 8px;
  font-size: ${p.w4.typography.fontSizeSm};
  font-family: ${p.w4.typography.fontFamily};
  color: ${({active:e})=>e?p.w4.colors.accent:p.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?p.w4.colors.accent:"transparent"};
  border-radius: 0 ${p.w4.borderRadius.sm} ${p.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;

  &:hover {
    color: ${p.w4.colors.mainText};
    background: ${p.w4.colors.sidebarHover};
  }
`;function Y({headings:e,activeId:o}){return e.length<2?null:(0,g.jsxs)(H,{children:[(0,g.jsx)(P,{children:"On this page"}),(0,g.jsx)(L,{children:e.map(e=>(0,g.jsx)(O,{level:e.level,active:o===e.id,children:(0,g.jsx)(G,{href:`#${e.id}`,active:o===e.id,onClick:o=>{o.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function D(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function W(e){const{Children:o,isValidElement:t}=r(27359);return o.toArray(e).map(e=>"string"==typeof e?e:"number"==typeof e?String(e):t(e)?W(e.props.children??""):"").join("")}function U(){return e=>{!function e(o){if("blockquote"===o.type){const e=o.children?.[0];if("paragraph"===e?.type){const r=e.children?.[0];if("text"===r?.type){const t=r.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);t&&(r.value=r.value.slice(t[0].length),r.value.trim()||1!==e.children.length||o.children.shift(),o.data=o.data??{},o.data.hName="div",o.data.hProperties={"data-callout":t[1].toUpperCase()})}}}o.children?.forEach(e)}(e)}}const q=l.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${p.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,X=l.default.div`
  flex: 1;
  min-width: 0;
`,K=l.default.article`
  padding: ${p.w4.spacing.xxl} 0;
  color: ${p.w4.colors.mainText};
  font-family: ${p.w4.typography.fontFamily};
  font-size: ${p.w4.typography.fontSizeMd};
  line-height: ${p.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${p.w4.spacing.xl} 0 ${p.w4.spacing.md};
    color: ${p.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;

    &:first-of-type { margin-top: 0; }

    /* Anchor link — hidden until hover */
    .heading-anchor {
      opacity: 0;
      margin-left: 8px;
      color: ${p.w4.colors.sidebarTextMuted};
      text-decoration: none;
      font-size: 0.7em;
      vertical-align: middle;
      transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }

  h1 { font-size: ${p.w4.typography.fontSizeXl}; border-bottom: 1px solid ${p.w4.colors.border}; padding-bottom: ${p.w4.spacing.sm}; }
  h2 { font-size: ${p.w4.typography.fontSizeLg}; border-bottom: 1px solid ${p.w4.colors.border}; padding-bottom: ${p.w4.spacing.xs}; }
  h3 { font-size: ${p.w4.typography.fontSizeMd}; }

  p { margin: ${p.w4.spacing.md} 0; }

  a {
    color: ${p.w4.colors.accent};
    text-decoration: none;
    &:hover { text-decoration: underline; color: ${p.w4.colors.accentHover}; }
  }

  ul, ol { margin: ${p.w4.spacing.md} 0; padding-left: ${p.w4.spacing.xl}; }
  li { margin: ${p.w4.spacing.xs} 0; }

  /* Fallback blockquote (non-callout) */
  blockquote {
    border-left: 3px solid ${p.w4.colors.border};
    margin: ${p.w4.spacing.lg} 0;
    padding: ${p.w4.spacing.sm} ${p.w4.spacing.lg};
    background: ${p.w4.colors.surface};
    color: ${p.w4.colors.mainTextMuted};
    border-radius: 0 ${p.w4.borderRadius.sm} ${p.w4.borderRadius.sm} 0;
  }

  /* Inline code */
  code {
    font-family: ${p.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${p.w4.colors.codeBg};
    border: 1px solid ${p.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${p.w4.borderRadius.sm};
  }

  /* pre resets — CodeBlock component handles the styling */
  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${p.w4.spacing.lg} 0; font-size: ${p.w4.typography.fontSizeBase}; }
  th, td { padding: ${p.w4.spacing.sm} ${p.w4.spacing.md}; border: 1px solid ${p.w4.colors.border}; text-align: left; }
  th { background: ${p.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${p.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${p.w4.colors.border}; margin: ${p.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${p.w4.borderRadius.md}; }
`,_=l.default.div`
  display: flex;
  gap: ${p.w4.spacing.lg};
  padding: ${p.w4.spacing.xxl} 0 ${p.w4.spacing.xxl};
  border-top: 1px solid ${p.w4.colors.border};
  margin-top: ${p.w4.spacing.xxl};
`,V=l.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${p.w4.spacing.md} ${p.w4.spacing.lg};
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;

  &:hover {
    border-color: ${p.w4.colors.accent};
    background: rgba(88, 166, 255, 0.05);
  }
`,J=l.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${p.w4.colors.sidebarTextMuted};
  font-family: ${p.w4.typography.fontFamily};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Q=l.default.div`
  font-size: ${p.w4.typography.fontSizeBase};
  color: ${p.w4.colors.accent};
  font-family: ${p.w4.typography.fontFamily};
  font-weight: 500;
`;function Z(e){return function({children:o,...r}){const t=`h${e}`,n=W(o),i=D(n);return(0,g.jsxs)(t,{id:i,...r,children:[o,(0,g.jsx)("a",{className:"heading-anchor",href:`#${i}`,"aria-label":`Link to "${n}"`,children:(0,g.jsx)(s.A,{size:14})})]})}}const ee=l.default.div`
  color: ${p.w4.colors.mainTextMuted};
  padding: ${p.w4.spacing.xxl} ${p.w4.spacing.xl};
  font-family: ${p.w4.typography.fontFamily};
`;function oe({file:e,prevEntry:o,nextEntry:l,onNavigate:s}){const[p,f]=(0,t.useState)(null),[u,x]=(0,t.useState)(null),b=(0,t.useRef)(null);if((0,t.useEffect)(()=>{f(null),fetch(`${r.p}content/${e}`).then(e=>{if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);return e.text()}).then(f).catch(o=>f(`> **Error loading \`${e}\`:** ${o.message}`))},[e]),(0,t.useEffect)(()=>{if(!p||!b.current)return;const e=b.current.querySelectorAll("h2[id], h3[id]");if(!e.length)return;const o=new IntersectionObserver(e=>{const o=e.filter(e=>e.isIntersecting);o.length&&x(o[0].target.id)},{rootMargin:"-10% 0% -60% 0%",threshold:0});return e.forEach(e=>o.observe(e)),()=>o.disconnect()},[p]),null===p)return(0,g.jsx)(ee,{children:"Loading…"});const m=function(e){const o=[],r=/^(#{2,3})\s+(.+)$/gm;let t;for(;null!==(t=r.exec(e));){const e=t[1].length,r=t[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");o.push({level:e,text:r,id:D(r)})}return o}(p),w=o||l;return(0,g.jsxs)(q,{children:[(0,g.jsxs)(X,{children:[(0,g.jsx)(K,{ref:b,children:(0,g.jsx)(n.oz,{remarkPlugins:[i.A,U],rehypePlugins:[a.A],components:{div({node:e,children:o,...r}){const t=r["data-callout"];return t?(0,g.jsx)(N,{type:t,children:o}):(0,g.jsx)("div",{...r,children:o})},h1:Z(1),h2:Z(2),h3:Z(3),h4:Z(4),pre:({children:e})=>(0,g.jsx)(g.Fragment,{children:e}),code({className:e,children:o}){const r=/language-(\w+)/.exec(e??"")?.[1],t=String(o).replace(/\n$/,"");return"mermaid"===r?(0,g.jsx)(h,{code:t}):r||t.includes("\n")?(0,g.jsx)(S,{lang:r,code:t}):(0,g.jsx)("code",{className:e,children:o})}},children:p})}),w&&(0,g.jsxs)(_,{children:[o?(0,g.jsxs)(V,{align:"left",onClick:()=>s?.(o),children:[(0,g.jsxs)(J,{children:[(0,g.jsx)(d.A,{size:13})," Previous"]}),(0,g.jsx)(Q,{children:o.name})]}):(0,g.jsx)("div",{style:{flex:1}}),l?(0,g.jsxs)(V,{align:"right",onClick:()=>s?.(l),children:[(0,g.jsxs)(J,{children:["Next ",(0,g.jsx)(c.A,{size:13})]}),(0,g.jsx)(Q,{children:l.name})]}):(0,g.jsx)("div",{style:{flex:1}})]})]}),(0,g.jsx)(Y,{headings:m,activeId:u})]})}},35688(e,o,r){r.d(o,{B:()=>l}),r(27359);var t=r(53233),n=r(3188),i=r(65723);const a=t.default.nav`
  padding: ${n.w4.spacing.sm} 0;
`;function l({config:e,activeId:o,onSelect:r}){return(0,i.jsx)(a,{children:(0,i.jsx)(n.CD,{entries:e.entries,activeId:o,onSelect:r})})}},14231(e){e.exports=JSON.parse('{"entries":[{"id":"guides","name":"Guides","icon":"compass","children":[{"id":"diagrams","name":"Diagrams with Mermaid","label":"Guides — Mermaid Diagrams","icon":"git-branch","file":"guides/diagrams.md"}]},{"id":"github","name":"GitHub","icon":"github","children":[{"id":"github-cli","name":"GitHub CLI (gh)","label":"GitHub — CLI Reference","icon":"terminal","file":"github/cli.md"},{"id":"github-actions","name":"GitHub Actions","label":"GitHub — Actions","icon":"zap","file":"github/actions.md"}]},{"id":"claude","name":"Claude AI","icon":"bot","children":[{"id":"claude-best-practices","name":"Best Practices","label":"Claude AI — Best Practices","icon":"lightbulb","file":"claude/best-practices.md"},{"id":"claude-prompts","name":"Prompt Tips","label":"Claude AI — Prompt Tips","icon":"message-square","file":"claude/prompts.md"}]},{"id":"devtools","name":"Developer Tools","icon":"wrench","children":[{"id":"devtools-extensions","name":"Useful Extensions","label":"Dev Tools — Extensions","icon":"layout-grid","file":"devtools/extensions.md"},{"id":"devtools-commands","name":"Useful Commands","label":"Dev Tools — Commands","icon":"terminal","file":"devtools/commands.md"}]}]}')}}]);
//# sourceMappingURL=6240.799fe76fc99e3913a3e9.js.map