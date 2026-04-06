/*! For license information please see 448.6173233a4ae97394ca7d.js.LICENSE.txt */
"use strict";(self.webpackChunk_atlantis_devhub=self.webpackChunk_atlantis_devhub||[]).push([[448],{914(e,t,o){o.d(t,{FlyoutPanel:()=>m});var r=o(359),a=o(233),i=o(207),n=o(255),l=o(217),s=o(959),d=o(963),c=o(723);const p=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,f=a.default.div`
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
`,x=a.default.div`
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
`,h=a.default.button`
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
`;function u({iconKey:e}){const t=e?d.t[e]??n.A:n.A;return(0,c.jsx)(t,{size:14,strokeWidth:1.75})}function g({entries:e,activeId:t,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(g,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,c.jsxs)(h,{active:t===e.id,onClick:()=>o(e),children:[(0,c.jsx)(u,{iconKey:e.icon}),e.name]},e.id))})}function m({activeId:e}){const{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:r}=(0,s.c)();if(!t)return null;const a=t.entry.icon?d.t[t.entry.icon]??n.A:n.A;return(0,c.jsxs)(f,{anchorY:t.anchorY,onMouseEnter:r,onMouseLeave:o,children:[(0,c.jsxs)(x,{children:[(0,c.jsx)(a,{size:13,strokeWidth:2}),t.entry.name]}),(0,c.jsx)(g,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},959(e,t,o){o.d(t,{I:()=>a,c:()=>i});var r=o(359);const a=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,r.useContext)(a)},963(e,t,o){o.d(t,{t:()=>w});var r=o(901),a=o(419);const i=(0,a.A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);var n=o(673);const l=(0,a.A)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),s=(0,a.A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),d=(0,a.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),c=(0,a.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),p=(0,a.A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),f=(0,a.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),x=(0,a.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);var h=o(820);const u=(0,a.A)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),g=(0,a.A)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var m=o(255);const b=(0,a.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),y=(0,a.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),w={"book-open":r.A,"file-text":i,package:n.A,compass:l,"git-branch":s,github:d,terminal:c,zap:p,bot:f,lightbulb:x,"message-square":h.A,wrench:u,"layout-grid":g,file:m.A,folder:b,"map-pin":y}},365(e,t,o){o.d(t,{PE:()=>j,CD:()=>P,w4:()=>r.w});var r=o(217),a=o(359),i=o(233),n=o(723);i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
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
`,i.default.div`
  display: ${({open:e})=>e?"flex":"none"};
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
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${r.w.spacing.sm};
  background: ${({active:e})=>e?r.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:e})=>e?r.w.colors.accent:r.w.colors.mainText};
  font-family: ${r.w.typography.fontFamily};
  font-size: ${r.w.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${r.w.colors.sidebarHover};
  }
`,i.default.div`
  position: relative;
`,i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?r.w.colors.accent:r.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var l=o(419);const s=(0,l.A)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);var d=o(959);const c="260px",p="56px",f=i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${r.w.colors.sidebarBg};
  border-bottom: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,x=i.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
`,h=i.default.button`
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
`,u=i.default.button`
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
`,g=i.default.div`
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
`,m=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${r.w.spacing.lg};
`,b=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,y=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.mainText};
  overflow: hidden;
`,w=i.default.aside`
  width: ${({collapsed:e})=>e?p:c};
  min-width: ${({collapsed:e})=>e?p:c};
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
`,v=i.default.div`
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
`,k="atlantis:sidebar-collapsed";function j({sidebar:e,children:t,topBarRight:r,title:i="Atlantis",activeId:l=null}){const[c,p]=(0,a.useState)(()=>{try{return"true"===localStorage.getItem(k)}catch{return!1}}),[j,z]=(0,a.useState)(null),M=(0,a.useRef)(),S=()=>p(e=>{const t=!e;try{localStorage.setItem(k,String(t))}catch{}return t}),A=a.useMemo(()=>a.lazy(()=>Promise.resolve().then(o.bind(o,914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,n.jsx)(d.I.Provider,{value:{collapsed:c,toggle:S,flyout:j,openFlyout:(e,t,o)=>{clearTimeout(M.current),z({entry:e,anchorY:t,onSelect:o})},scheduleFlyoutClose:()=>{M.current=setTimeout(()=>z(null),160)},cancelFlyoutClose:()=>clearTimeout(M.current)},children:(0,n.jsxs)(y,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(x,{children:(0,n.jsx)(h,{onClick:S,title:c?"Expand sidebar":"Collapse sidebar",children:(0,n.jsx)(s,{size:17})})}),(0,n.jsxs)(u,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,n.jsx)("span",{children:"antis"})]}),i&&(0,n.jsx)(g,{children:i}),r&&(0,n.jsx)(m,{children:r})]}),(0,n.jsxs)(b,{children:[(0,n.jsx)(w,{collapsed:c,children:(0,n.jsx)(v,{children:e})}),(0,n.jsx)($,{children:t})]}),j&&(0,n.jsx)(a.Suspense,{fallback:null,children:(0,n.jsx)(A,{activeId:l})})]})})}var z=o(255);const M=(0,l.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var S=o(963);const A=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,T=i.default.div`
  overflow: hidden;
`,F=i.default.div`
  padding-left: ${r.w.spacing.md};
`,q=i.default.div`
  display: flex;
  flex-direction: column;
`,C=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${r.w.spacing.sm} ${r.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":r.w.spacing.sm};
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
`,R=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,_=i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,B=i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${r.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,I=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${r.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?r.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?r.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?r.w.colors.sidebarActive:r.w.colors.sidebarText};
  font-size: ${r.w.typography.fontSizeBase};
  font-family: ${r.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${r.w.borderRadius.sm} ${r.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${r.w.colors.sidebarHover};
  }
`;function L({iconKey:e,size:t=16}){const o=e?S.t[e]??z.A:z.A;return(0,n.jsx)(o,{size:t,strokeWidth:1.75})}function H({entry:e,activeId:t,onSelect:o}){const[r,i]=(0,a.useState)(!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:p}=(0,d.c)();return e.children&&e.children.length>0?(0,n.jsxs)(q,{children:[(0,n.jsxs)(C,{collapsed:l,onClick:()=>{l||i(e=>!e)},onMouseEnter:l?t=>{const r=t.currentTarget.getBoundingClientRect();s(e,r.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsxs)(R,{collapsed:l,children:[(0,n.jsx)(L,{iconKey:e.icon,size:16}),(0,n.jsx)(_,{collapsed:l,children:e.name})]}),(0,n.jsx)(B,{open:r,collapsed:l,children:(0,n.jsx)(M,{size:13})})]}),(0,n.jsx)(A,{open:r&&!l,children:(0,n.jsx)(T,{children:(0,n.jsx)(F,{children:e.children.map(e=>(0,n.jsx)(H,{entry:e,activeId:t,onSelect:o},e.id))})})})]}):(0,n.jsxs)(I,{active:t===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?t=>{const r=t.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},r.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsx)(L,{iconKey:e.icon,size:15}),(0,n.jsx)(_,{collapsed:l,children:e.name})]})}function P({entries:e,activeId:t,onSelect:o}){return(0,n.jsx)("div",{children:e.map(e=>(0,n.jsx)(H,{entry:e,activeId:t,onSelect:o},e.id))})}const E=o(207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
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
`,o(914)},217(e,t,o){o.d(t,{w:()=>r});const r={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},591(e,t,o){o.d(t,{A:()=>j});var r=o(359),a=o(233);const i=(0,o(419).A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var n=o(365),l=o(447),s=o(156),d=o(723);const c="#ff6314",p=[{id:"webdev",label:"webdev",query:"web frontend css html"},{id:"javascript",label:"JavaScript",query:"javascript node npm"},{id:"rust",label:"Rust",query:"rust lang cargo"},{id:"python",label:"Python",query:"python django fastapi"},{id:"devops",label:"DevOps",query:"docker kubernetes devops cloud"}],f=a.default.div`
  display: flex;
  gap: 6px;
  margin-bottom: ${n.w4.spacing.lg};
  flex-wrap: wrap;
`,x=a.default.button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?c:n.w4.colors.border};
  background: ${({active:e})=>e?"rgba(255,99,20,0.15)":"transparent"};
  color: ${({active:e})=>e?c:n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${n.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${c};
    color: ${c};
    background: rgba(255, 99, 20, 0.08);
  }
`,h=a.default.div`
  display: flex;
  flex-direction: column;
`,u=a.default.a`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 8px;
  border-radius: ${n.w4.borderRadius.md};
  text-decoration: none;
  transition: background 0.12s;
  border-bottom: 1px solid ${n.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`,g=a.default.span`
  color: ${n.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 3px;
`,m=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 0;
`,b=a.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  line-height: 1.45;
`,y=a.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
`,w=a.default.span`
  color: ${c};
  font-weight: 600;
`,v=a.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
`,$=a.default.span`
  margin-left: auto;
  white-space: nowrap;
`,k=a.default.div`
  padding: ${n.w4.spacing.xl};
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`;function j(){const[e,t]=(0,r.useState)(p[0]),o=Math.floor((Date.now()-2592e5)/1e3),a=`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(e.query)}&tags=story&hitsPerPage=10&numericFilters=created_at_i>${o}`,{data:n,loading:j,lastUpdated:z,refresh:M}=(0,l.st)(a),S=n?.hits??[];return(0,d.jsxs)("div",{children:[(0,d.jsx)(s.X,{title:"Community Feed",color:c,description:"Top stories from Hacker News in the last 72 hours, filtered by dev topic.",lastUpdated:z,loading:j,onRefresh:M}),(0,d.jsx)(f,{children:p.map(o=>(0,d.jsx)(x,{active:e.id===o.id,onClick:()=>t(o),children:o.label},o.id))}),S.length?(0,d.jsx)(h,{children:S.map(e=>{const t=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,d.jsxs)(u,{href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsx)(g,{children:(0,d.jsx)(i,{size:13})}),(0,d.jsxs)(m,{children:[(0,d.jsx)(b,{children:e.title}),(0,d.jsxs)(y,{children:[(0,d.jsxs)(w,{children:[(0,l.aT)(e.points??0)," pts"]}),(0,d.jsxs)("span",{children:[e.num_comments??0," comments"]}),(0,d.jsx)(v,{children:(0,l.FB)(e.url)}),(0,d.jsx)($,{children:(0,l.fF)(e.created_at)})]})]})]},e.objectID)})}):(0,d.jsx)(k,{children:j?"Loading stories…":"No stories in the last 72h"})]})}},202(e,t,o){o.d(t,{A:()=>z});var r=o(359),a=o(233),i=o(365),n=o(447),l=o(156),s=o(723);const d="#f48024",c=[{id:"",label:"All"},{id:"javascript",label:"JS"},{id:"typescript",label:"TS"},{id:"python",label:"Python"},{id:"react",label:"React"}];function p(e){const t=document.createElement("textarea");return t.innerHTML=e,t.value}const f=a.default.div`
  display: flex;
  gap: 6px;
  margin-bottom: ${i.w4.spacing.lg};
  flex-wrap: wrap;
`,x=a.default.button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?d:i.w4.colors.border};
  background: ${({active:e})=>e?"rgba(244,128,36,0.15)":"transparent"};
  color: ${({active:e})=>e?d:i.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${i.w4.typography.fontFamilyMono};
  letter-spacing: 0.01em;

  &:hover {
    border-color: ${d};
    color: ${d};
    background: rgba(244, 128, 36, 0.08);
  }
`,h=a.default.div`
  display: flex;
  flex-direction: column;
`,u=a.default.a`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 8px;
  border-radius: ${i.w4.borderRadius.md};
  text-decoration: none;
  transition: background 0.12s;
  border-bottom: 1px solid ${i.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`,g=a.default.span`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${({answered:e})=>e?"rgba(63,185,80,0.5)":i.w4.colors.border};
  background: ${({answered:e})=>e?"rgba(35,134,54,0.15)":"transparent"};
  color: ${({answered:e})=>e?"#3fb950":i.w4.colors.mainTextMuted};
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`,m=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,b=a.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainText};
  line-height: 1.45;
`,y=a.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
  flex-wrap: wrap;
`,w=a.default.span`
  color: ${({negative:e})=>e?"#e05252":d};
  font-weight: 600;
`,v=a.default.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,$=a.default.span`
  font-size: 10px;
  padding: 2px 6px;
  background: rgba(244, 128, 36, 0.08);
  color: ${i.w4.colors.mainTextMuted};
  border-radius: 4px;
  border: 1px solid rgba(244, 128, 36, 0.15);
  letter-spacing: 0.01em;
`,k=a.default.span`
  margin-left: auto;
  white-space: nowrap;
`,j=a.default.div`
  padding: ${i.w4.spacing.xl};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  text-align: center;
`;function z(){const[e,t]=(0,r.useState)(""),o="https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow&pagesize=10&filter=default"+(e?`&tagged=${e}`:""),{data:a,loading:i,lastUpdated:z,refresh:M}=(0,n.st)(o),S=a?.items??[];return(0,s.jsxs)("div",{children:[(0,s.jsx)(l.X,{title:"Dev Pulse",color:d,description:"Hot questions from Stack Overflow sorted by activity, filterable by language or framework.",lastUpdated:z,loading:i,onRefresh:M}),(0,s.jsx)(f,{children:c.map(o=>(0,s.jsx)(x,{active:e===o.id,onClick:()=>t(o.id),children:o.label},o.id))}),S.length?(0,s.jsx)(h,{children:S.map(e=>{const t=new Date(1e3*e.creation_date).toISOString();return(0,s.jsxs)(u,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(g,{answered:e.is_answered,children:e.is_answered?"✓":"?"}),(0,s.jsxs)(m,{children:[(0,s.jsx)(b,{children:p(e.title)}),(0,s.jsxs)(y,{children:[(0,s.jsxs)(w,{negative:e.score<0,children:[e.score>0?"+":"",(0,n.aT)(e.score)," votes"]}),(0,s.jsxs)("span",{children:[e.answer_count," ans"]}),(0,s.jsx)(v,{children:e.tags.slice(0,3).map(e=>(0,s.jsx)($,{children:e},e))}),(0,s.jsx)(k,{children:(0,n.fF)(t)})]})]})]},e.question_id)})}):(0,s.jsx)(j,{children:i?"Fetching hot questions…":"No questions found"})]})}},910(e,t,o){o.d(t,{A:()=>z});var r=o(359),a=o(233),i=o(673),n=o(365),l=o(447),s=o(156),d=o(723);const c="#f7c948",p=[{id:"react",label:"React",query:"react component"},{id:"cli",label:"CLI",query:"cli tool command"},{id:"typescript",label:"TypeScript",query:"typescript types"},{id:"testing",label:"Testing",query:"test jest vitest"},{id:"build",label:"Build",query:"bundler build vite webpack"}],f=a.default.div`
  display: flex;
  gap: 6px;
  margin-bottom: ${n.w4.spacing.lg};
  flex-wrap: wrap;
`,x=a.default.button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?c:n.w4.colors.border};
  background: ${({active:e})=>e?"rgba(247,201,72,0.15)":"transparent"};
  color: ${({active:e})=>e?c:n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${n.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${c};
    color: ${c};
    background: rgba(247, 201, 72, 0.08);
  }
`,h=a.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${n.w4.spacing.md};

  @media (max-width: ${n.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,u=a.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${n.w4.spacing.md};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.15s, background 0.15s;
  min-height: 130px;

  &:hover {
    border-color: ${c};
    background: rgba(247, 201, 72, 0.04);
  }
`,g=a.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${c};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
`,m=a.default.span`
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-weight: 400;
  flex-shrink: 0;
`,b=a.default.div`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,y=a.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,w=a.default.span`
  font-size: 10px;
  padding: 2px 7px;
  background: rgba(247, 201, 72, 0.08);
  color: ${n.w4.colors.mainTextMuted};
  border-radius: 4px;
  border: 1px solid rgba(247, 201, 72, 0.15);
`,v=a.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
`,$=a.default.div`
  flex: 1;
  height: 3px;
  background: ${n.w4.colors.border};
  border-radius: 2px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({value:e})=>Math.round(100*e)}%;
    background: ${c};
    border-radius: 2px;
    opacity: 0.7;
  }
`,k=a.default.span`
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  white-space: nowrap;
  opacity: 0.6;
`,j=a.default.div`
  padding: ${n.w4.spacing.xl};
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`;function z(){const[e,t]=(0,r.useState)(p[0]),o=`https://api.npms.io/v2/search?q=${encodeURIComponent(e.query)}&size=12`,{data:a,loading:n,lastUpdated:z,refresh:M}=(0,l.st)(o),S=a?.results??[];return(0,d.jsxs)("div",{children:[(0,d.jsx)(s.X,{title:"Package Radar",color:c,description:"Trending npm packages ranked by quality, popularity, and maintenance. Filtered by topic.",lastUpdated:z,loading:n,onRefresh:M}),(0,d.jsx)(f,{children:p.map(o=>(0,d.jsx)(x,{active:e.id===o.id,onClick:()=>t(o),children:o.label},o.id))}),S.length?(0,d.jsx)(h,{children:S.map(({package:e,score:t})=>(0,d.jsxs)(u,{href:e.links.npm,target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsxs)(g,{title:e.name,children:[(0,d.jsx)(i.A,{size:13}),e.name,(0,d.jsxs)(m,{children:["v",e.version]})]}),(0,d.jsx)(b,{children:e.description||"No description."}),e.keywords&&e.keywords.length>0&&(0,d.jsx)(y,{children:e.keywords.slice(0,3).map(e=>(0,d.jsx)(w,{children:e},e))}),(0,d.jsxs)(v,{children:[(0,d.jsxs)(k,{children:["@",e.publisher.username]}),(0,d.jsx)($,{value:t.final,title:`Score: ${Math.round(100*t.final)}%`})]})]},e.name))}):(0,d.jsx)(j,{children:n?"Scanning npm registry…":"No packages found"})]})}},156(e,t,o){o.d(t,{X:()=>w}),o(359);var r=o(233),a=o(207),i=o(419);const n=(0,i.A)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),l=(0,i.A)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);var s=o(365),d=o(723);const c=a.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,p=a.keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,f=r.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  margin-bottom: ${s.w4.spacing.lg};
`,x=r.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  flex: 1;
`,h=r.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${c} 2.4s ease-in-out infinite;
`,u=r.default.h2`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.02em;
`,g=r.default.span`
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
`,m=r.default.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${s.w4.colors.mainTextMuted};
  cursor: default;
  flex-shrink: 0;

  &:hover > span {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
`,b=r.default.span`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 6px 10px;
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainText};
  width: 500px;
  white-space: normal;
  line-height: 1.4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s, transform 0.15s;
`,y=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  flex-shrink: 0;

  svg {
    animation: ${({spinning:e})=>e?p:"none"} 0.7s linear infinite;
  }

  &:hover {
    color: ${s.w4.colors.mainText};
    border-color: ${s.w4.colors.accent};
  }
`;function w({title:e,color:t,description:o,lastUpdated:r,loading:a,onRefresh:i}){const s=r?function(e){const t=Math.floor((Date.now()-e.getTime())/6e4);return t<1?"just now":t<60?`${t}m ago`:`${Math.floor(t/60)}h ago`}(r):null;return(0,d.jsxs)(f,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(h,{color:t}),(0,d.jsx)(u,{children:e}),o&&(0,d.jsxs)(m,{children:[(0,d.jsx)(n,{size:13}),(0,d.jsx)(b,{children:o})]})]}),s&&(0,d.jsxs)(g,{children:["updated ",s]}),(0,d.jsx)(y,{spinning:a,onClick:i,title:"Refresh",children:(0,d.jsx)(l,{size:13})})]})}},808(e,t,o){o.d(t,{A:()=>S});var r=o(359),a=o(233);const i=(0,o(419).A)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);var n=o(820),l=o(901),s=o(365),d=o(447),c=o(156),p=o(723);const f="#7c3aed",x=[{id:"webdev",label:"webdev"},{id:"ai",label:"AI"},{id:"typescript",label:"TS"},{id:"rust",label:"Rust"},{id:"devops",label:"DevOps"}],h=a.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s.w4.spacing.md};

  @media (max-width: ${s.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,u=a.default.div`
  display: flex;
  gap: 4px;
  margin-bottom: ${s.w4.spacing.md};
  flex-wrap: wrap;
`,g=a.default.button`
  padding: 4px 10px;
  font-size: ${s.w4.typography.fontSizeSm};
  border-radius: ${s.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?f:s.w4.colors.border};
  background: ${({active:e})=>e?"rgba(124,58,237,0.12)":"transparent"};
  color: ${({active:e})=>e?f:s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${s.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${f};
    color: ${f};
  }
`,m=a.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${s.w4.spacing.md};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.15s, background 0.15s;
  min-height: 140px;

  &:hover {
    border-color: ${f};
    background: #161b22ee;
  }
`,b=a.default.div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,y=a.default.div`
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,w=a.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,v=a.default.span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(124,58,237,0.1);
  color: ${f};
  border-radius: 20px;
  border: 1px solid rgba(124,58,237,0.2);
`,$=a.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  margin-top: auto;
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,k=a.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #e05252;
`,j=a.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,z=a.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: auto;
`,M=a.default.div`
  padding: ${s.w4.spacing.xl};
  color: ${s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  text-align: center;
`;function S(){const[e,t]=(0,r.useState)(x[0].id),o=`https://dev.to/api/articles?tag=${e}&top=7&per_page=8`,{data:a,loading:s,lastUpdated:S,refresh:A}=(0,d.st)(o),T=a??[];return(0,p.jsxs)("div",{children:[(0,p.jsx)(c.X,{title:"Tech Articles",color:f,description:"Popular articles from Dev.to across frontend, AI, and systems topics.",lastUpdated:S,loading:s,onRefresh:A}),(0,p.jsx)(u,{children:x.map(o=>(0,p.jsxs)(g,{active:e===o.id,onClick:()=>t(o.id),children:["#",o.label]},o.id))}),T.length?(0,p.jsx)(h,{children:T.map(e=>(0,p.jsxs)(m,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,p.jsx)(b,{children:e.title}),e.description&&(0,p.jsx)(y,{children:e.description}),e.tag_list.length>0&&(0,p.jsx)(w,{children:e.tag_list.slice(0,3).map(e=>(0,p.jsxs)(v,{children:["#",e]},e))}),(0,p.jsxs)($,{children:[(0,p.jsxs)(k,{children:[(0,p.jsx)(i,{size:11}),(0,d.aT)(e.public_reactions_count)]}),(0,p.jsxs)(j,{children:[(0,p.jsx)(n.A,{size:11}),e.comments_count]}),(0,p.jsxs)(z,{children:[(0,p.jsx)(l.A,{size:11}),e.reading_time_minutes,"m read"]})]})]},e.id))}):(0,p.jsx)(M,{children:s?"Loading articles…":"No articles found"})]})}},447(e,t,o){o.d(t,{FB:()=>l,aT:()=>n,fF:()=>i,st:()=>a});var r=o(359);function a(e,t=3e5){const[o,a]=(0,r.useState)(null),[i,n]=(0,r.useState)(!0),[l,s]=(0,r.useState)(null),[d,c]=(0,r.useState)(null),p=(0,r.useCallback)(async()=>{try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);a(await t.json()),c(new Date),s(null)}catch(e){s(e instanceof Error?e.message:"Failed to fetch")}finally{n(!1)}},[e]);return(0,r.useEffect)(()=>{p();const e=setInterval(p,t);return()=>clearInterval(e)},[p,t]),{data:o,loading:i,error:l,lastUpdated:d,refresh:p}}function i(e){const t=Date.now()-new Date(e).getTime(),o=Math.floor(t/6e4);if(o<1)return"just now";if(o<60)return`${o}m ago`;const r=Math.floor(o/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function n(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function l(e){if(!e)return"";try{return new URL(e).hostname.replace(/^www\./,"")}catch{return""}}},419(e,t,o){o.d(t,{A:()=>l});var r=o(359);const a=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:l="",children:s,iconNode:d,...c},p)=>(0,r.createElement)("svg",{ref:p,...i,width:t,height:t,stroke:e,strokeWidth:n?24*Number(o)/Number(t):o,className:a("lucide",l),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])),l=(e,t)=>{const o=(0,r.forwardRef)(({className:o,...i},l)=>{return(0,r.createElement)(n,{ref:l,iconNode:t,className:a(`lucide-${s=e,s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...i});var s});return o.displayName=`${e}`,o}},901(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},255(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},820(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]])},673(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]])},921(e,t,o){var r=o(359),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,i={},d=null,c=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},723(e,t,o){e.exports=o(921)}}]);
//# sourceMappingURL=448.6173233a4ae97394ca7d.js.map