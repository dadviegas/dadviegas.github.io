/*! For license information please see 652.334d41beee7081eebd8f.js.LICENSE.txt */
"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[652],{914(e,t,o){o.d(t,{FlyoutPanel:()=>m});var r=o(359),a=o(233),i=o(207),n=o(255),l=o(217),s=o(959),d=o(800),c=o(723);const p=i.keyframes`
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
`,h=a.default.div`
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
`,x=a.default.button`
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
`;function g({iconKey:e}){const t=e?d.t[e]??n.A:n.A;return(0,c.jsx)(t,{size:14,strokeWidth:1.75})}function u({entries:e,activeId:t,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(u,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,c.jsxs)(x,{active:t===e.id,onClick:()=>o(e),children:[(0,c.jsx)(g,{iconKey:e.icon}),e.name]},e.id))})}function m({activeId:e}){const{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:r}=(0,s.c)();if(!t)return null;const a=t.entry.icon?d.t[t.entry.icon]??n.A:n.A;return(0,c.jsxs)(f,{anchorY:t.anchorY,onMouseEnter:r,onMouseLeave:o,children:[(0,c.jsxs)(h,{children:[(0,c.jsx)(a,{size:13,strokeWidth:2}),t.entry.name]}),(0,c.jsx)(u,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},959(e,t,o){o.d(t,{I:()=>a,c:()=>i});var r=o(359);const a=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,r.useContext)(a)},800(e,t,o){o.d(t,{t:()=>b});var r=o(419);const a=(0,r.A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),i=(0,r.A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),n=(0,r.A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),l=(0,r.A)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),s=(0,r.A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),d=(0,r.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),c=(0,r.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),p=(0,r.A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),f=(0,r.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),h=(0,r.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);var x=o(820);const g=(0,r.A)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),u=(0,r.A)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var m=o(255);const y=(0,r.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),w=(0,r.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),b={"book-open":a,"file-text":i,package:n,compass:l,"git-branch":s,github:d,terminal:c,zap:p,bot:f,lightbulb:h,"message-square":x.A,wrench:g,"layout-grid":u,file:m.A,folder:y,"map-pin":w}},365(e,t,o){o.d(t,{PE:()=>j,CD:()=>D,w4:()=>r.w});var r=o(217),a=o(359),i=o(233),n=o(723);i.default.button`
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
`,h=i.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
`,x=i.default.button`
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
`,g=i.default.button`
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
`,u=i.default.div`
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
`,y=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,w=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.mainText};
  overflow: hidden;
`,b=i.default.aside`
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
`,k="atlantis:sidebar-collapsed";function j({sidebar:e,children:t,topBarRight:r,title:i="Atlantis",activeId:l=null}){const[c,p]=(0,a.useState)(()=>{try{return"true"===localStorage.getItem(k)}catch{return!1}}),[j,z]=(0,a.useState)(null),M=(0,a.useRef)(),S=()=>p(e=>{const t=!e;try{localStorage.setItem(k,String(t))}catch{}return t}),A=a.useMemo(()=>a.lazy(()=>Promise.resolve().then(o.bind(o,914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,n.jsx)(d.I.Provider,{value:{collapsed:c,toggle:S,flyout:j,openFlyout:(e,t,o)=>{clearTimeout(M.current),z({entry:e,anchorY:t,onSelect:o})},scheduleFlyoutClose:()=>{M.current=setTimeout(()=>z(null),160)},cancelFlyoutClose:()=>clearTimeout(M.current)},children:(0,n.jsxs)(w,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(h,{children:(0,n.jsx)(x,{onClick:S,title:c?"Expand sidebar":"Collapse sidebar",children:(0,n.jsx)(s,{size:17})})}),(0,n.jsxs)(g,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,n.jsx)("span",{children:"antis"})]}),i&&(0,n.jsx)(u,{children:i}),r&&(0,n.jsx)(m,{children:r})]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(b,{collapsed:c,children:(0,n.jsx)(v,{children:e})}),(0,n.jsx)($,{children:t})]}),j&&(0,n.jsx)(a.Suspense,{fallback:null,children:(0,n.jsx)(A,{activeId:l})})]})})}var z=o(255);const M=(0,l.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var S=o(800);const A=i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,F=i.default.div`
  overflow: hidden;
`,T=i.default.div`
  padding-left: ${r.w.spacing.md};
`,B=i.default.div`
  display: flex;
  flex-direction: column;
`,_=i.default.button`
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
`,C=i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,R=i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,L=i.default.span`
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
`;function q({iconKey:e,size:t=16}){const o=e?S.t[e]??z.A:z.A;return(0,n.jsx)(o,{size:t,strokeWidth:1.75})}function H({entry:e,activeId:t,onSelect:o}){const[r,i]=(0,a.useState)(!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:p}=(0,d.c)();return e.children&&e.children.length>0?(0,n.jsxs)(B,{children:[(0,n.jsxs)(_,{collapsed:l,onClick:()=>{l||i(e=>!e)},onMouseEnter:l?t=>{const r=t.currentTarget.getBoundingClientRect();s(e,r.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsxs)(C,{collapsed:l,children:[(0,n.jsx)(q,{iconKey:e.icon,size:16}),(0,n.jsx)(R,{collapsed:l,children:e.name})]}),(0,n.jsx)(L,{open:r,collapsed:l,children:(0,n.jsx)(M,{size:13})})]}),(0,n.jsx)(A,{open:r&&!l,children:(0,n.jsx)(F,{children:(0,n.jsx)(T,{children:e.children.map(e=>(0,n.jsx)(H,{entry:e,activeId:t,onSelect:o},e.id))})})})]}):(0,n.jsxs)(I,{active:t===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?t=>{const r=t.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},r.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsx)(q,{iconKey:e.icon,size:15}),(0,n.jsx)(R,{collapsed:l,children:e.name})]})}function D({entries:e,activeId:t,onSelect:o}){return(0,n.jsx)("div",{children:e.map(e=>(0,n.jsx)(H,{entry:e,activeId:t,onSelect:o},e.id))})}const N=o(207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${N} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,o(914)},217(e,t,o){o.d(t,{w:()=>r});const r={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},656(e,t,o){o.d(t,{A:()=>k});var r=o(359),a=o(233);const i=(0,o(419).A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var n=o(987),l=o(820),s=o(365),d=o(447),c=o(827),p=o(723);const f="#58a6ff",h=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,x=a.default.a`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px ${s.w4.spacing.sm};
  border-radius: ${s.w4.borderRadius.sm};
  text-decoration: none;
  transition: background 0.12s;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
  }
`,g=a.default.div`
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainText};
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 6px;
`,u=a.default.span`
  color: ${s.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 2px;
`,m=a.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,y=a.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${f};
  font-weight: 600;
`,w=a.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,b=a.default.span`
  color: ${s.w4.colors.mainTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=a.default.div`
  padding: ${s.w4.spacing.xl};
  color: ${s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  text-align: center;
`,$=a.default.div`
  height: 1px;
  background: ${s.w4.colors.border};
  margin: 2px 0;
`;function k(){const e=`https://hn.algolia.com/api/v1/search?query=AI+LLM+model+open+source&tags=story&hitsPerPage=8&numericFilters=created_at_i>${Math.floor((Date.now()-1728e5)/1e3)}`,{data:t,loading:o,lastUpdated:a,refresh:s}=(0,d.st)(e),k=t?.hits??[];return(0,p.jsxs)("div",{children:[(0,p.jsx)(c.X,{title:"AI Radar",color:f,lastUpdated:a,loading:o,onRefresh:s}),k.length?(0,p.jsx)(h,{children:k.map((e,t)=>{const o=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,p.jsxs)(r.Fragment,{children:[t>0&&(0,p.jsx)($,{}),(0,p.jsxs)(x,{href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,p.jsxs)(g,{children:[(0,p.jsx)(u,{children:(0,p.jsx)(i,{size:12})}),e.title]}),(0,p.jsxs)(m,{children:[(0,p.jsxs)(y,{children:[(0,p.jsx)(n.A,{size:11}),e.points??0]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(l.A,{size:11}),e.num_comments??0]}),(0,p.jsx)(b,{children:(0,d.FB)(e.url)}),(0,p.jsx)("span",{style:{marginLeft:"auto"},children:(0,d.fF)(e.created_at)})]})]})]},e.objectID)})}):(0,p.jsx)(v,{children:o?"Scanning AI activity…":"No AI stories in the last 48h"})]})}},738(e,t,o){o.d(t,{A:()=>S}),o(359);var r=o(233),a=o(641);const i=(0,o(419).A)("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);var n=o(365),l=o(447),s=o(827),d=o(723);const c="#bc8cff",p={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080"},f=r.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${n.w4.spacing.md};

  @media (max-width: ${n.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,h=r.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${n.w4.spacing.md};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${c};
  }
`,x=r.default.div`
  display: flex;
  align-items: flex-start;
  gap: ${n.w4.spacing.sm};
  justify-content: space-between;
`,g=r.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${c};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,u=r.default.div`
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  white-space: nowrap;
  flex-shrink: 0;
`,m=r.default.div`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,y=r.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,w=r.default.span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(188, 140, 255, 0.12);
  color: ${c};
  border-radius: 20px;
  border: 1px solid rgba(188, 140, 255, 0.25);
`,b=r.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  margin-top: auto;
`,v=r.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
`,$=(0,r.default)(v)`
  color: #d29922;
  font-weight: 600;
`,k=r.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>p[e]??n.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,j=r.default.span`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,z=r.default.span`
  flex: 1;
`,M=r.default.div`
  padding: ${n.w4.spacing.xl};
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`;function S(){const e=`https://api.github.com/search/repositories?q=created:>${(0,l.VF)(30)}+stars:50..500+fork:false&sort=stars&order=desc&per_page=8`,{data:t,loading:o,lastUpdated:r,refresh:n}=(0,l.st)(e);return(0,d.jsxs)("div",{children:[(0,d.jsx)(s.X,{title:"Experiment Zone",color:c,lastUpdated:r,loading:o,onRefresh:n}),t?.items?.length?(0,d.jsx)(f,{children:t.items.map(e=>(0,d.jsxs)(h,{href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(g,{title:e.full_name,children:e.full_name}),(0,d.jsx)(u,{children:(0,l.fF)(e.created_at)})]}),(0,d.jsx)(m,{children:e.description??"No description provided."}),e.topics.length>0&&(0,d.jsx)(y,{children:e.topics.slice(0,4).map(e=>(0,d.jsx)(w,{children:e},e))}),(0,d.jsxs)(b,{children:[e.language&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(k,{lang:e.language}),(0,d.jsx)(j,{children:e.language})]}),(0,d.jsx)(z,{}),(0,d.jsxs)($,{children:[(0,d.jsx)(a.A,{size:12}),(0,l.Bz)(e.stargazers_count)]}),(0,d.jsxs)(v,{children:[(0,d.jsx)(i,{size:12}),(0,l.Bz)(e.forks_count)]})]})]},e.id))}):(0,d.jsx)(M,{children:o?"Scanning experimental repos…":"No data available"})]})}},69(e,t,o){o.d(t,{A:()=>v}),o(359);var r=o(233),a=o(641),i=o(365),n=o(447),l=o(827),s=o(723);const d="#3fb950",c={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080","Jupyter Notebook":"#DA5B0B"},p=r.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${i.w4.spacing.md};

  @media (max-width: ${i.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,f=r.default.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${i.w4.spacing.md};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.15s, background 0.15s;
  min-height: 120px;

  &:hover {
    border-color: ${d};
    background: #161b22ee;
  }
`,h=r.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${i.w4.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,x=r.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,g=r.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  margin-top: auto;
`,u=r.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  color: #d29922;
  font-family: ${i.w4.typography.fontFamilyMono};
`,m=r.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>c[e]??i.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,y=r.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,w=r.default.span`
  flex: 1;
`,b=r.default.div`
  padding: ${i.w4.spacing.xl};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  text-align: center;
`;function v(){const e=`https://api.github.com/search/repositories?q=created:>${(0,n.VF)(7)}&sort=stars&order=desc&per_page=8`,{data:t,loading:o,lastUpdated:r,refresh:i}=(0,n.st)(e);return(0,s.jsxs)("div",{children:[(0,s.jsx)(l.X,{title:"Live Pulse",color:d,lastUpdated:r,loading:o,onRefresh:i}),t?.items?.length?(0,s.jsx)(p,{children:t.items.map(e=>(0,s.jsxs)(f,{href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(h,{title:e.full_name,children:e.full_name}),(0,s.jsx)(x,{children:e.description??"No description provided."}),(0,s.jsxs)(g,{children:[e.language&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{lang:e.language}),(0,s.jsx)(y,{children:e.language})]}),(0,s.jsx)(w,{}),(0,s.jsxs)(u,{children:[(0,s.jsx)(a.A,{size:12}),(0,n.Bz)(e.stargazers_count)]})]})]},e.id))}):(0,s.jsx)(b,{children:o?"Loading trending repos…":"No data available"})]})}},827(e,t,o){o.d(t,{X:()=>u}),o(359);var r=o(233),a=o(207);const i=(0,o(419).A)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);var n=o(365),l=o(723);const s=a.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,d=a.keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,c=r.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  margin-bottom: ${n.w4.spacing.lg};
`,p=r.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  flex: 1;
`,f=r.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${s} 2.4s ease-in-out infinite;
`,h=r.default.h2`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.02em;
`,x=r.default.span`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,g=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  flex-shrink: 0;

  svg {
    animation: ${({spinning:e})=>e?d:"none"} 0.7s linear infinite;
  }

  &:hover {
    color: ${n.w4.colors.mainText};
    border-color: ${n.w4.colors.accent};
  }
`;function u({title:e,color:t,lastUpdated:o,loading:r,onRefresh:a}){const n=o?function(e){const t=Math.floor((Date.now()-e.getTime())/6e4);return t<1?"just now":t<60?`${t}m ago`:`${Math.floor(t/60)}h ago`}(o):null;return(0,l.jsxs)(c,{children:[(0,l.jsxs)(p,{children:[(0,l.jsx)(f,{color:t}),(0,l.jsx)(h,{children:e})]}),n&&(0,l.jsxs)(x,{children:["updated ",n]}),(0,l.jsx)(g,{spinning:r,onClick:a,title:"Refresh",children:(0,l.jsx)(i,{size:13})})]})}},18(e,t,o){o.d(t,{A:()=>$}),o(359);var r=o(233),a=o(820),i=o(987),n=o(365),l=o(447),s=o(827),d=o(723);const c="#d29922",p=r.default.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,f=r.default.li``,h=r.default.a`
  display: flex;
  align-items: flex-start;
  gap: ${n.w4.spacing.sm};
  padding: 8px ${n.w4.spacing.sm};
  border-radius: ${n.w4.borderRadius.sm};
  text-decoration: none;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,x=r.default.span`
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  min-width: 20px;
  text-align: right;
  flex-shrink: 0;
  padding-top: 1px;
`,g=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,u=r.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  line-height: 1.4;
`,m=r.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  font-size: 12px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
`,y=r.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${c};
  font-weight: 600;
`,w=r.default.span`
  display: flex;
  align-items: center;
  gap: 3px;
`,b=r.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=r.default.div`
  padding: ${n.w4.spacing.xl};
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`;function $(){const{data:e,loading:t,lastUpdated:o,refresh:r}=(0,l.st)("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=12"),n=e?.hits??[];return(0,d.jsxs)("div",{children:[(0,d.jsx)(s.X,{title:"Today in Tech",color:c,lastUpdated:o,loading:t,onRefresh:r}),n.length?(0,d.jsx)(p,{children:n.map((e,t)=>{const o=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,d.jsx)(f,{children:(0,d.jsxs)(h,{href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsxs)(x,{children:[t+1,"."]}),(0,d.jsxs)(g,{children:[(0,d.jsx)(u,{children:e.title}),(0,d.jsxs)(m,{children:[(0,d.jsxs)(y,{children:[(0,d.jsx)(i.A,{size:11}),e.points??0]}),(0,d.jsxs)(w,{children:[(0,d.jsx)(a.A,{size:11}),e.num_comments??0]}),(0,d.jsx)(b,{children:(0,l.FB)(e.url)})]})]})]})},e.objectID)})}):(0,d.jsx)(v,{children:t?"Loading front page…":"No stories available"})]})}},447(e,t,o){o.d(t,{Bz:()=>n,FB:()=>s,VF:()=>l,fF:()=>i,st:()=>a});var r=o(359);function a(e,t=3e5){const[o,a]=(0,r.useState)(null),[i,n]=(0,r.useState)(!0),[l,s]=(0,r.useState)(null),[d,c]=(0,r.useState)(null),p=(0,r.useCallback)(async()=>{try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);a(await t.json()),c(new Date),s(null)}catch(e){s(e instanceof Error?e.message:"Failed to fetch")}finally{n(!1)}},[e]);return(0,r.useEffect)(()=>{p();const e=setInterval(p,t);return()=>clearInterval(e)},[p,t]),{data:o,loading:i,error:l,lastUpdated:d,refresh:p}}function i(e){const t=Date.now()-new Date(e).getTime(),o=Math.floor(t/6e4);if(o<1)return"just now";if(o<60)return`${o}m ago`;const r=Math.floor(o/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function n(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function l(e){const t=new Date;return t.setDate(t.getDate()-e),t.toISOString().split("T")[0]}function s(e){if(!e)return"news.ycombinator.com";try{return new URL(e).hostname.replace(/^www\./,"")}catch{return""}}},419(e,t,o){o.d(t,{A:()=>l});var r=o(359);const a=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:l="",children:s,iconNode:d,...c},p)=>(0,r.createElement)("svg",{ref:p,...i,width:t,height:t,stroke:e,strokeWidth:n?24*Number(o)/Number(t):o,className:a("lucide",l),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])),l=(e,t)=>{const o=(0,r.forwardRef)(({className:o,...i},l)=>{return(0,r.createElement)(n,{ref:l,iconNode:t,className:a(`lucide-${s=e,s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...i});var s});return o.displayName=`${e}`,o}},255(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},820(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]])},641(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])},987(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},921(e,t,o){var r=o(359),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,i={},d=null,c=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},723(e,t,o){e.exports=o(921)}}]);
//# sourceMappingURL=652.334d41beee7081eebd8f.js.map