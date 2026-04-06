/*! For license information please see 119.840d66700677ec663e5a.js.LICENSE.txt */
"use strict";(self.webpackChunk_atlantis_citypulse=self.webpackChunk_atlantis_citypulse||[]).push([[119],{914(e,t,o){o.d(t,{FlyoutPanel:()=>m});var r=o(359),i=o(233),n=o(207),a=o(255),l=o(217),s=o(959),d=o(550),c=o(723);const p=n.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=i.default.div`
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
`,h=i.default.div`
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
`,x=i.default.button`
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
`;function f({iconKey:e}){const t=e?d.t[e]??a.A:a.A;return(0,c.jsx)(t,{size:14,strokeWidth:1.75})}function y({entries:e,activeId:t,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(y,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,c.jsxs)(x,{active:t===e.id,onClick:()=>o(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function m({activeId:e}){const{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:r}=(0,s.c)();if(!t)return null;const i=t.entry.icon?d.t[t.entry.icon]??a.A:a.A;return(0,c.jsxs)(u,{anchorY:t.anchorY,onMouseEnter:r,onMouseLeave:o,children:[(0,c.jsxs)(h,{children:[(0,c.jsx)(i,{size:13,strokeWidth:2}),t.entry.name]}),(0,c.jsx)(y,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},959(e,t,o){o.d(t,{I:()=>i,c:()=>n});var r=o(359);const i=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,r.useContext)(i)},550(e,t,o){o.d(t,{t:()=>w});var r=o(419);const i=(0,r.A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),n=(0,r.A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),a=(0,r.A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),l=(0,r.A)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),s=(0,r.A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),d=(0,r.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),c=(0,r.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),p=(0,r.A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),u=(0,r.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),h=(0,r.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),x=(0,r.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),f=(0,r.A)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),y=(0,r.A)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var m=o(255);const g=(0,r.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),b=(0,r.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),w={"book-open":i,"file-text":n,package:a,compass:l,"git-branch":s,github:d,terminal:c,zap:p,bot:u,lightbulb:h,"message-square":x,wrench:f,"layout-grid":y,file:m.A,folder:g,"map-pin":b}},365(e,t,o){o.d(t,{PE:()=>j,CD:()=>E,w4:()=>r.w});var r=o(217),i=o(359),n=o(233),a=o(723);n.default.button`
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
`,n.default.div`
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
`,n.default.button`
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
`,n.default.div`
  position: relative;
`,n.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?r.w.colors.accent:r.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var l=o(419);const s=(0,l.A)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);var d=o(959);const c="260px",p="56px",u=n.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${r.w.colors.sidebarBg};
  border-bottom: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,h=n.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
`,x=n.default.button`
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
`,f=n.default.button`
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
`,y=n.default.div`
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
`,m=n.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${r.w.spacing.lg};
`,g=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,b=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.mainText};
  overflow: hidden;
`,w=n.default.aside`
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
`,v=n.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,$=n.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,k="atlantis:sidebar-collapsed";function j({sidebar:e,children:t,topBarRight:r,title:n="Atlantis",activeId:l=null}){const[c,p]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(k)}catch{return!1}}),[j,z]=(0,i.useState)(null),M=(0,i.useRef)(),A=()=>p(e=>{const t=!e;try{localStorage.setItem(k,String(t))}catch{}return t}),S=i.useMemo(()=>i.lazy(()=>Promise.resolve().then(o.bind(o,914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,a.jsx)(d.I.Provider,{value:{collapsed:c,toggle:A,flyout:j,openFlyout:(e,t,o)=>{clearTimeout(M.current),z({entry:e,anchorY:t,onSelect:o})},scheduleFlyoutClose:()=>{M.current=setTimeout(()=>z(null),160)},cancelFlyoutClose:()=>clearTimeout(M.current)},children:(0,a.jsxs)(b,{children:[(0,a.jsxs)(u,{children:[(0,a.jsx)(h,{children:(0,a.jsx)(x,{onClick:A,title:c?"Expand sidebar":"Collapse sidebar",children:(0,a.jsx)(s,{size:17})})}),(0,a.jsxs)(f,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,a.jsx)("span",{children:"antis"})]}),n&&(0,a.jsx)(y,{children:n}),r&&(0,a.jsx)(m,{children:r})]}),(0,a.jsxs)(g,{children:[(0,a.jsx)(w,{collapsed:c,children:(0,a.jsx)(v,{children:e})}),(0,a.jsx)($,{children:t})]}),j&&(0,a.jsx)(i.Suspense,{fallback:null,children:(0,a.jsx)(S,{activeId:l})})]})})}var z=o(255);const M=(0,l.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var A=o(550);const S=n.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,T=n.default.div`
  overflow: hidden;
`,C=n.default.div`
  padding-left: ${r.w.spacing.md};
`,F=n.default.div`
  display: flex;
  flex-direction: column;
`,B=n.default.button`
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
`,_=n.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,L=n.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,q=n.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${r.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,P=n.default.button`
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
`;function R({iconKey:e,size:t=16}){const o=e?A.t[e]??z.A:z.A;return(0,a.jsx)(o,{size:t,strokeWidth:1.75})}function H({entry:e,activeId:t,onSelect:o}){const[r,n]=(0,i.useState)(!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:p}=(0,d.c)();return e.children&&e.children.length>0?(0,a.jsxs)(F,{children:[(0,a.jsxs)(B,{collapsed:l,onClick:()=>{l||n(e=>!e)},onMouseEnter:l?t=>{const r=t.currentTarget.getBoundingClientRect();s(e,r.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,a.jsxs)(_,{collapsed:l,children:[(0,a.jsx)(R,{iconKey:e.icon,size:16}),(0,a.jsx)(L,{collapsed:l,children:e.name})]}),(0,a.jsx)(q,{open:r,collapsed:l,children:(0,a.jsx)(M,{size:13})})]}),(0,a.jsx)(S,{open:r&&!l,children:(0,a.jsx)(T,{children:(0,a.jsx)(C,{children:e.children.map(e=>(0,a.jsx)(H,{entry:e,activeId:t,onSelect:o},e.id))})})})]}):(0,a.jsxs)(P,{active:t===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?t=>{const r=t.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},r.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,a.jsx)(R,{iconKey:e.icon,size:15}),(0,a.jsx)(L,{collapsed:l,children:e.name})]})}function E({entries:e,activeId:t,onSelect:o}){return(0,a.jsx)("div",{children:e.map(e=>(0,a.jsx)(H,{entry:e,activeId:t,onSelect:o},e.id))})}const I=o(207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;n.default.div`
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
`,n.default.span`
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
`,o(914)},217(e,t,o){o.d(t,{w:()=>r});const r={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},756(e,t,o){o.d(t,{Mq:()=>r,QH:()=>i});const r=[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lon:-9.1399,timezone:"Europe/Lisbon"},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lon:-25.6756,timezone:"Atlantic/Azores"},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lon:-9.3133,timezone:"Europe/Lisbon"},{id:"nyc",name:"New York",country:"US",lat:40.7128,lon:-74.006,timezone:"America/New_York"},{id:"london",name:"London",country:"GB",lat:51.5074,lon:-.1278,timezone:"Europe/London"},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lon:139.6503,timezone:"Asia/Tokyo"},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lon:2.3522,timezone:"Europe/Paris"},{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lon:151.2093,timezone:"Australia/Sydney"},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lon:55.2708,timezone:"Asia/Dubai"},{id:"sf",name:"San Francisco",country:"US",lat:37.7749,lon:-122.4194,timezone:"America/Los_Angeles"},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lon:13.405,timezone:"Europe/Berlin"},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lon:103.8198,timezone:"Asia/Singapore"},{id:"saopaulo",name:"São Paulo",country:"BR",lat:-23.5505,lon:-46.6333,timezone:"America/Sao_Paulo"}];function i(e){return e<=20?{label:"Good",color:"#3fb950"}:e<=40?{label:"Fair",color:"#d29922"}:e<=60?{label:"Moderate",color:"#f0883e"}:e<=80?{label:"Poor",color:"#f85149"}:{label:"Very Poor",color:"#8957e5"}}},253(e,t,o){o.d(t,{A:()=>y});var r=o(359),i=o(233),n=o(365),a=o(756),l=o(723);const s=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.md};
`,d=i.default.h3`
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainText};
  font-weight: 600;
`,c=i.default.div`
  display: flex;
  gap: ${n.w4.spacing.md};
  flex-wrap: wrap;
`,p=i.default.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${({color:e})=>e};
    display: block;
  }
`,u=i.default.div`
  height: 160px;
  background: ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  animation: pulse 1.5s ease-in-out infinite;
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
`,h=i.default.div`
  position: absolute;
  left: ${({x:e})=>e}px;
  top: ${({y:e})=>e}px;
  transform: translate(-50%, -110%);
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  padding: 4px 8px;
  font-size: 11px;
  color: ${n.w4.colors.mainText};
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;
`,x=160,f=22;function y({airQuality:e,loading:t}){const[o,i]=r.useState(null),y=r.useRef(null),m=(0,r.useMemo)(()=>{if(!e)return[];const t=e.european_aqi,o=Math.max(...t.filter(Boolean),1),r=792/t.length;return t.map((t,i)=>{const n=t??0,l=n/Math.max(o,80)*114;return{x:4+i*r+.1*r,y:136-l,w:.8*r,h:l,val:n,color:(0,a.QH)(n).color,time:e.time[i]?.slice(11,16)??""}})},[e]);return(0,l.jsxs)(s,{children:[(0,l.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:(0,l.jsx)(d,{children:"Air Quality (EU AQI)"})}),(0,l.jsx)(c,{children:[0,21,41,61,81].map(e=>{const{label:t,color:o}=(0,a.QH)(e);return(0,l.jsx)(p,{color:o,children:t},t)})}),t?(0,l.jsx)(u,{}):(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsxs)("svg",{ref:y,viewBox:"0 0 800 160",width:"100%",height:x,style:{display:"block",cursor:"crosshair"},onMouseLeave:()=>i(null),children:[[.5,1].map(e=>(0,l.jsx)("line",{x1:4,y1:f+114*(1-e),x2:796,y2:f+114*(1-e),stroke:n.w4.colors.border,strokeWidth:1},e)),m.map((e,t)=>(0,l.jsxs)("g",{children:[(0,l.jsx)("rect",{x:e.x,y:e.y,width:e.w,height:e.h,rx:2,fill:e.color,opacity:o?.i===t?1:.75,onMouseEnter:()=>{if(!y.current)return;const o=y.current.getBoundingClientRect(),r=o.width/800;i({i:t,x:(e.x+e.w/2)*r,y:e.y*(o.height/x)})}}),e.val>0&&(0,l.jsx)("text",{x:e.x+e.w/2,y:Math.max(18,e.y-4),textAnchor:"middle",fontSize:9,fontWeight:"600",fill:e.color,children:e.val})]},t)),[0,6,12,18,23].map(e=>m[e]?(0,l.jsx)("text",{x:m[e].x+m[e].w/2,y:156,textAnchor:"middle",fontSize:10,fill:n.w4.colors.mainTextMuted,children:m[e].time},e):null)]}),o&&m[o.i]&&(0,l.jsxs)(h,{x:o.x,y:o.y,children:[m[o.i].time," — AQI ",m[o.i].val," (",(0,a.QH)(m[o.i].val).label,")"]})]})]})}},10(e,t,o){o.d(t,{A:()=>$});var r=o(359),i=o(233),n=o(365),a=o(756),l=o(447),s=o(876),d=o(723);const c=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.lg};
`,p=i.default.h3`
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainText};
  font-weight: 600;
`,u=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.lg};

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,h=i.default.div`
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.md};
`,x=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=i.default.div`
  font-size: ${n.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
`,y=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,m=i.default.div`
  display: flex;
  justify-content: space-between;
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,g=i.default.div`
  height: 6px;
  background: ${n.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,b=i.default.div`
  height: 100%;
  width: ${({pct:e})=>Math.min(100,e)}%;
  background: ${({color:e})=>e};
  border-radius: 3px;
  transition: width 0.6s ease;
`,w=i.default.div`
  height: 6px;
  background: ${n.w4.colors.border};
  border-radius: 3px;
  animation: pulse 1.5s ease-in-out infinite;
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
`;function v({city:e}){const{snapshot:t,loading:o}=(0,l.n)(e),r=t?[{label:"Temperature",value:`${t.currentTemp}°C`,pct:(t.currentTemp+20)/70*100,color:"#58a6ff"},{label:"Air Quality (AQI)",value:`${t.currentAqi}`,pct:t.currentAqi/100*100,color:(0,a.QH)(t.currentAqi).color},{label:"Wind Speed",value:`${t.currentWind} km/h`,pct:t.currentWind/120*100,color:"#d29922"},{label:"Rain Probability",value:`${t.precipProb}%`,pct:t.precipProb,color:"#79c0ff"}]:[];return(0,d.jsxs)(h,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(f,{children:e.name}),(0,d.jsx)("span",{style:{fontSize:n.w4.typography.fontSizeSm,color:n.w4.colors.mainTextMuted},children:e.country})]}),o?[1,2,3,4].map(e=>(0,d.jsxs)(y,{children:[(0,d.jsx)(m,{children:(0,d.jsx)("span",{children:"Loading…"})}),(0,d.jsx)(w,{})]},e)):r.map(e=>(0,d.jsxs)(y,{children:[(0,d.jsxs)(m,{children:[(0,d.jsx)("span",{children:e.label}),(0,d.jsx)("span",{style:{color:n.w4.colors.mainText,fontWeight:600},children:e.value})]}),(0,d.jsx)(g,{children:(0,d.jsx)(b,{pct:e.pct,color:e.color})})]},e.label))]})}function $(){const[e,t]=r.useState(a.Mq[0]),[o,i]=r.useState(a.Mq[1]);return(0,d.jsxs)(c,{children:[(0,d.jsx)(p,{children:"City Comparison"}),(0,d.jsxs)(u,{children:[(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:n.w4.spacing.md},children:[(0,d.jsx)(s.A,{value:e.id,onChange:t}),(0,d.jsx)(v,{city:e})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:n.w4.spacing.md},children:[(0,d.jsx)(s.A,{value:o.id,onChange:i}),(0,d.jsx)(v,{city:o})]})]})]})}},596(e,t,o){o.d(t,{A:()=>g}),o(359);var r=o(233),i=o(419);const n=(0,i.A)("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]),a=(0,i.A)("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]),l=(0,i.A)("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]),s=(0,i.A)("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);var d=o(365),c=o(756),p=o(723);const u=r.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${d.w4.spacing.md};

  @media (max-width: ${d.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,h=r.default.div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({accentColor:e})=>e??d.w4.colors.accent};
  }
`,x=r.default.div`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,f=r.default.div`
  font-size: 36px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,y=r.default.div`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
`,m=r.default.div`
  height: 36px;
  width: 80px;
  background: ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
`;function g({snapshot:e,loading:t}){const o=e?(0,c.QH)(e.currentAqi):null;return(0,p.jsxs)(u,{children:[(0,p.jsxs)(h,{accentColor:"#58a6ff",children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(n,{size:14})," Temperature"]}),t?(0,p.jsx)(m,{}):(0,p.jsxs)(f,{children:[e?.currentTemp,"°C"]}),!t&&(0,p.jsxs)(y,{children:["Feels like ",e?.apparentTemp,"°C"]})]}),(0,p.jsxs)(h,{accentColor:o?.color??"#3fb950",children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(a,{size:14})," Air Quality (EU AQI)"]}),t?(0,p.jsx)(m,{}):(0,p.jsx)(f,{style:{color:o?.color},children:e?.currentAqi}),!t&&(0,p.jsx)(y,{children:o?.label})]}),(0,p.jsxs)(h,{accentColor:"#d29922",children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(l,{size:14})," Wind Speed"]}),t?(0,p.jsx)(m,{}):(0,p.jsx)(f,{children:e?.currentWind}),!t&&(0,p.jsx)(y,{children:"km/h"})]}),(0,p.jsxs)(h,{accentColor:"#79c0ff",children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(s,{size:14})," Precipitation"]}),t?(0,p.jsx)(m,{}):(0,p.jsxs)(f,{children:[e?.precipProb,"%"]}),!t&&(0,p.jsx)(y,{children:"Chance of rain"})]})]})}},876(e,t,o){o.d(t,{A:()=>s}),o(359);var r=o(233),i=o(365),n=o(756),a=o(723);const l=r.default.select`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  padding: 6px 32px 6px 12px;
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238b949e' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  min-width: 160px;

  &:focus {
    outline: none;
    border-color: ${i.w4.colors.accent};
  }
`;function s({value:e,onChange:t}){return(0,a.jsx)(l,{value:e,onChange:e=>t(n.Mq.find(t=>t.id===e.target.value)),children:n.Mq.map(e=>(0,a.jsxs)("option",{value:e.id,children:[e.name,", ",e.country]},e.id))})}},841(e,t,o){o.d(t,{A:()=>f});var r=o(359),i=o(233),n=o(365),a=o(723);const l=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.md};
`,s=i.default.h3`
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainText};
  font-weight: 600;
`,d=i.default.div`
  width: 100%;
  overflow: hidden;
`,c=i.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${n.w4.spacing.xs};
  padding: 0 4px;
`,p=i.default.span`
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
`,u=i.default.div`
  height: 140px;
  background: ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  animation: pulse 1.5s ease-in-out infinite;
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
`,h=140,x=28;function f({weather:e,loading:t}){const{path:o,areaPath:i,points:f,tickLabels:y,minT:m,maxT:g}=(0,r.useMemo)(()=>{if(!e)return{path:"",areaPath:"",points:[],tickLabels:[],minT:0,maxT:0};const t=e.temperature_2m,o=e.time,r=Math.min(...t)-2,i=Math.max(...t)+2,n=t.map((e,o)=>({x:4+o/(t.length-1)*792,y:132-(e-r)/(i-r)*104,temp:Math.round(e)})),a=function(e){if(e.length<2)return"";let t=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let o=1;o<e.length;o++){const r=e[o-1],i=e[o],n=((r.x+i.x)/2).toFixed(2);t+=` C ${n} ${r.y.toFixed(2)} ${n} ${i.y.toFixed(2)} ${i.x.toFixed(2)} ${i.y.toFixed(2)}`}return t}(n);return{path:a,areaPath:a+` L ${n[n.length-1].x.toFixed(2)} ${132..toFixed(2)}`+` L ${n[0].x.toFixed(2)} ${132..toFixed(2)} Z`,points:n,tickLabels:[0,6,12,18,23].map(e=>({x:4+e/(t.length-1)*792,label:o[e]?o[e].slice(11,16):""})),minT:r,maxT:i}},[e]),b=`${Math.round(m+2)}° – ${Math.round(g-2)}°C`;return(0,a.jsxs)(l,{children:[(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[(0,a.jsx)(s,{children:"24h Temperature"}),e&&(0,a.jsx)("span",{style:{fontSize:n.w4.typography.fontSizeSm,color:n.w4.colors.mainTextMuted},children:b})]}),t?(0,a.jsx)(u,{}):(0,a.jsxs)(d,{children:[(0,a.jsxs)("svg",{viewBox:"0 0 800 140",width:"100%",height:h,style:{display:"block",overflow:"visible"},children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"tempGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#58a6ff",stopOpacity:"0.35"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#58a6ff",stopOpacity:"0"})]})}),[.25,.5,.75].map(e=>(0,a.jsx)("line",{x1:4,y1:x+104*e,x2:796,y2:x+104*e,stroke:n.w4.colors.border,strokeWidth:1},e)),(0,a.jsx)("path",{d:i,fill:"url(#tempGrad)"}),(0,a.jsx)("path",{d:o,fill:"none",stroke:"#58a6ff",strokeWidth:2,strokeLinecap:"round"}),f.filter((e,t)=>t%3==0).map((e,t)=>(0,a.jsxs)("g",{children:[(0,a.jsx)("circle",{cx:e.x,cy:e.y,r:3,fill:"#58a6ff"}),(0,a.jsxs)("text",{x:e.x,y:Math.max(22,e.y-10),textAnchor:"middle",fontSize:11,fontWeight:"600",fill:"#79c0ff",children:[e.temp,"°"]})]},t))]}),(0,a.jsx)(c,{children:y.map(e=>(0,a.jsx)(p,{children:e.label},e.label))})]})]})}},447(e,t,o){o.d(t,{n:()=>i});var r=o(359);function i(e){const[t,o]=(0,r.useState)({snapshot:null,weather:null,airQuality:null,loading:!0,error:null});return(0,r.useEffect)(()=>{let t=!1;o({snapshot:null,weather:null,airQuality:null,loading:!0,error:null});const r=`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,windspeed_10m&forecast_days=1&timezone=${encodeURIComponent(e.timezone)}`,i=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${e.lat}&longitude=${e.lon}&hourly=european_aqi,pm2_5,pm10&timezone=${encodeURIComponent(e.timezone)}&forecast_days=1`;return Promise.all([fetch(r).then(e=>e.json()),fetch(i).then(e=>e.json())]).then(([e,r])=>{if(t)return;const i=e.hourly,n=r.hourly,a=function(e){const t=new Date,o=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}T${String(t.getHours()).padStart(2,"0")}:00`,r=e.indexOf(o);return r>=0?r:Math.min(e.length-1,12)}(i.time),l={currentTemp:Math.round(i.temperature_2m[a]),apparentTemp:Math.round(i.apparent_temperature[a]),currentAqi:Math.round(n.european_aqi[a]??0),currentWind:Math.round(i.windspeed_10m[a]),precipProb:i.precipitation_probability[a]};o({snapshot:l,weather:i,airQuality:n,loading:!1,error:null})}).catch(e=>{t||o({snapshot:null,weather:null,airQuality:null,loading:!1,error:String(e)})}),()=>{t=!0}},[e.id]),t}},419(e,t,o){o.d(t,{A:()=>l});var r=o(359);const i=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const a=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:s,iconNode:d,...c},p)=>(0,r.createElement)("svg",{ref:p,...n,width:t,height:t,stroke:e,strokeWidth:a?24*Number(o)/Number(t):o,className:i("lucide",l),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])),l=(e,t)=>{const o=(0,r.forwardRef)(({className:o,...n},l)=>{return(0,r.createElement)(a,{ref:l,iconNode:t,className:i(`lucide-${s=e,s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...n});var s});return o.displayName=`${e}`,o}},255(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},921(e,t,o){var r=o(359),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,n={},d=null,c=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:c,props:n,_owner:l.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},723(e,t,o){e.exports=o(921)}}]);
//# sourceMappingURL=119.840d66700677ec663e5a.js.map