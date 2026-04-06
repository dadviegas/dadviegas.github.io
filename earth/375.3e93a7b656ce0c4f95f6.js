/*! For license information please see 375.3e93a7b656ce0c4f95f6.js.LICENSE.txt */
"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[375],{914(e,t,o){o.d(t,{FlyoutPanel:()=>m});var r=o(359),i=o(233),a=o(207),n=o(255),l=o(217),s=o(959),d=o(550),c=o(723);const p=a.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,h=i.default.div`
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
`,x=i.default.div`
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
`,f=i.default.button`
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
`;function u({iconKey:e}){const t=e?d.t[e]??n.A:n.A;return(0,c.jsx)(t,{size:14,strokeWidth:1.75})}function y({entries:e,activeId:t,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(y,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,c.jsxs)(f,{active:t===e.id,onClick:()=>o(e),children:[(0,c.jsx)(u,{iconKey:e.icon}),e.name]},e.id))})}function m({activeId:e}){const{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:r}=(0,s.c)();if(!t)return null;const i=t.entry.icon?d.t[t.entry.icon]??n.A:n.A;return(0,c.jsxs)(h,{anchorY:t.anchorY,onMouseEnter:r,onMouseLeave:o,children:[(0,c.jsxs)(x,{children:[(0,c.jsx)(i,{size:13,strokeWidth:2}),t.entry.name]}),(0,c.jsx)(y,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},959(e,t,o){o.d(t,{I:()=>i,c:()=>a});var r=o(359);const i=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),a=()=>(0,r.useContext)(i)},550(e,t,o){o.d(t,{t:()=>w});var r=o(419);const i=(0,r.A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),a=(0,r.A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),n=(0,r.A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),l=(0,r.A)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),s=(0,r.A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),d=(0,r.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),c=(0,r.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),p=(0,r.A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),h=(0,r.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),x=(0,r.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),f=(0,r.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),u=(0,r.A)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),y=(0,r.A)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var m=o(255);const g=(0,r.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),b=(0,r.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),w={"book-open":i,"file-text":a,package:n,compass:l,"git-branch":s,github:d,terminal:c,zap:p,bot:h,lightbulb:x,"message-square":f,wrench:u,"layout-grid":y,file:m.A,folder:g,"map-pin":b}},365(e,t,o){o.d(t,{PE:()=>j,CD:()=>E,w4:()=>r.w});var r=o(217),i=o(359),a=o(233),n=o(723);a.default.button`
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
`,a.default.div`
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
`,a.default.button`
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
`,a.default.div`
  position: relative;
`,a.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?r.w.colors.accent:r.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var l=o(419);const s=(0,l.A)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);var d=o(959);const c="260px",p="56px",h=a.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${r.w.colors.sidebarBg};
  border-bottom: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,x=a.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
`,f=a.default.button`
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
`,u=a.default.button`
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
`,y=a.default.div`
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
`,m=a.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${r.w.spacing.lg};
`,g=a.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,b=a.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.mainText};
  overflow: hidden;
`,w=a.default.aside`
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
`,$=a.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,v=a.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,k="atlantis:sidebar-collapsed";function j({sidebar:e,children:t,topBarRight:r,title:a="Atlantis",activeId:l=null}){const[c,p]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(k)}catch{return!1}}),[j,z]=(0,i.useState)(null),M=(0,i.useRef)(),F=()=>p(e=>{const t=!e;try{localStorage.setItem(k,String(t))}catch{}return t}),S=i.useMemo(()=>i.lazy(()=>Promise.resolve().then(o.bind(o,914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,n.jsx)(d.I.Provider,{value:{collapsed:c,toggle:F,flyout:j,openFlyout:(e,t,o)=>{clearTimeout(M.current),z({entry:e,anchorY:t,onSelect:o})},scheduleFlyoutClose:()=>{M.current=setTimeout(()=>z(null),160)},cancelFlyoutClose:()=>clearTimeout(M.current)},children:(0,n.jsxs)(b,{children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(x,{children:(0,n.jsx)(f,{onClick:F,title:c?"Expand sidebar":"Collapse sidebar",children:(0,n.jsx)(s,{size:17})})}),(0,n.jsxs)(u,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,n.jsx)("span",{children:"antis"})]}),a&&(0,n.jsx)(y,{children:a}),r&&(0,n.jsx)(m,{children:r})]}),(0,n.jsxs)(g,{children:[(0,n.jsx)(w,{collapsed:c,children:(0,n.jsx)($,{children:e})}),(0,n.jsx)(v,{children:t})]}),j&&(0,n.jsx)(i.Suspense,{fallback:null,children:(0,n.jsx)(S,{activeId:l})})]})})}var z=o(255);const M=(0,l.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var F=o(550);const S=a.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,A=a.default.div`
  overflow: hidden;
`,_=a.default.div`
  padding-left: ${r.w.spacing.md};
`,T=a.default.div`
  display: flex;
  flex-direction: column;
`,C=a.default.button`
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
`,B=a.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,L=a.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,R=a.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${r.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,H=a.default.button`
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
`;function I({iconKey:e,size:t=16}){const o=e?F.t[e]??z.A:z.A;return(0,n.jsx)(o,{size:t,strokeWidth:1.75})}function q({entry:e,activeId:t,onSelect:o}){const[r,a]=(0,i.useState)(!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:p}=(0,d.c)();return e.children&&e.children.length>0?(0,n.jsxs)(T,{children:[(0,n.jsxs)(C,{collapsed:l,onClick:()=>{l||a(e=>!e)},onMouseEnter:l?t=>{const r=t.currentTarget.getBoundingClientRect();s(e,r.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsxs)(B,{collapsed:l,children:[(0,n.jsx)(I,{iconKey:e.icon,size:16}),(0,n.jsx)(L,{collapsed:l,children:e.name})]}),(0,n.jsx)(R,{open:r,collapsed:l,children:(0,n.jsx)(M,{size:13})})]}),(0,n.jsx)(S,{open:r&&!l,children:(0,n.jsx)(A,{children:(0,n.jsx)(_,{children:e.children.map(e=>(0,n.jsx)(q,{entry:e,activeId:t,onSelect:o},e.id))})})})]}):(0,n.jsxs)(H,{active:t===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?t=>{const r=t.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},r.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsx)(I,{iconKey:e.icon,size:15}),(0,n.jsx)(L,{collapsed:l,children:e.name})]})}function E({entries:e,activeId:t,onSelect:o}){return(0,n.jsx)("div",{children:e.map(e=>(0,n.jsx)(q,{entry:e,activeId:t,onSelect:o},e.id))})}const P=o(207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;a.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${P} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,a.default.span`
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
`,o(914)},217(e,t,o){o.d(t,{w:()=>r});const r={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},375(e,t,o){o.d(t,{v:()=>D});var r=o(359),i=o(233),a=o(365),n=o(723);function l(e){return 0===e?{label:"Clear sky",emoji:"☀️"}:1===e?{label:"Mainly clear",emoji:"🌤️"}:2===e?{label:"Partly cloudy",emoji:"⛅"}:3===e?{label:"Overcast",emoji:"☁️"}:e<=48?{label:"Fog",emoji:"🌫️"}:e<=55?{label:"Drizzle",emoji:"🌦️"}:e<=65?{label:"Rain",emoji:"🌧️"}:e<=75?{label:"Snow",emoji:"❄️"}:77===e?{label:"Snow grains",emoji:"🌨️"}:e<=82?{label:"Rain showers",emoji:"🌧️"}:e<=86?{label:"Snow showers",emoji:"🌨️"}:{label:"Thunderstorm",emoji:"⛈️"}}function s(e,t){return 0===t?"Today":1===t?"Tomorrow":new Date(e).toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric"})}const d="#58a6ff",c="rgba(255,255,255,0.06)",p="#8b949e",h=[{threshold:0,color:"#3fb950"},{threshold:15,color:"#7ee787"},{threshold:25,color:"#d29922"},{threshold:38,color:"#f0883e"},{threshold:50,color:"#f85149"}],x=i.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  flex-wrap: wrap;
`,f=i.default.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  color: ${p};
  font-family: monospace;
`,u=i.default.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,y=[{label:"0–14",color:"#3fb950"},{label:"15–24",color:"#7ee787"},{label:"25–37",color:"#d29922"},{label:"38–49",color:"#f0883e"},{label:"50+",color:"#f85149"}];function m({cx:e,cy:t,deg:o,size:r=7}){return(0,n.jsx)("g",{transform:`translate(${e},${t}) rotate(${o})`,children:(0,n.jsx)("polygon",{points:`0,${-r} ${.55*r},${.6*r} 0,${.2*r} ${.55*-r},${.6*r}`,fill:d,opacity:.85})})}const g=i.default.div`
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 10px 10px 8px;
`,b=i.default.div`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${p};
  font-family: ${a.w4.typography.fontFamily};
  margin-bottom: 6px;
`;function w({speeds:e}){const t=14,o=28,r=52,i=Math.max(...e,1),a=5*Math.ceil(i/5),l=e.map((t,i)=>({x:o+i/(e.length-1)*232,y:66-t/a*r})),s=function(e,t=.35){if(e.length<2)return"";let o=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let r=0;r<e.length-1;r++){const i=e[Math.max(r-1,0)],a=e[r],n=e[r+1],l=e[Math.min(r+2,e.length-1)],s=a.x+(n.x-i.x)*t,d=a.y+(n.y-i.y)*t,c=n.x-(l.x-a.x)*t,p=n.y-(l.y-a.y)*t;o+=` C ${s.toFixed(2)} ${d.toFixed(2)} ${c.toFixed(2)} ${p.toFixed(2)} ${n.x.toFixed(2)} ${n.y.toFixed(2)}`}return o}(l),h=`${s} L ${l[l.length-1].x.toFixed(2)} ${66..toFixed(2)} L ${l[0].x.toFixed(2)} ${66..toFixed(2)} Z`,x=[0,6,12,18,23].map(t=>({label:23===t?"24h":`${t}h`,x:o+t/(e.length-1)*232})),f=[{label:`${a}`,y:t},{label:`${Math.round(a/2)}`,y:40},{label:"0",y:66}];return(0,n.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"windGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,n.jsx)("stop",{offset:"0%",stopColor:d,stopOpacity:.3}),(0,n.jsx)("stop",{offset:"100%",stopColor:d,stopOpacity:0})]})}),f.map(({y:e})=>(0,n.jsx)("line",{x1:o,y1:e,x2:260,y2:e,stroke:c,strokeWidth:1},e)),(0,n.jsx)("path",{d:h,fill:"url(#windGrad)"}),(0,n.jsx)("path",{d:s,fill:"none",stroke:d,strokeWidth:1.5,strokeLinejoin:"round"}),(()=>{const e=(new Date).getHours(),t=l[Math.min(e,l.length-1)];return(0,n.jsx)("circle",{cx:t.x,cy:t.y,r:3,fill:d})})(),x.map(({label:e,x:t})=>(0,n.jsx)("text",{x:t,y:84,textAnchor:"middle",fill:p,fontSize:9,fontFamily:"monospace",children:e},e)),f.map(({label:e,y:t})=>(0,n.jsx)("text",{x:24,y:t+3,textAnchor:"end",fill:p,fontSize:9,fontFamily:"monospace",children:e},e))]})}function $({speeds:e,directions:t,dayLabels:o}){const r=e.length,i=Math.max(...e,1),a=5*Math.ceil(i/5),l=252/r,s=.28*l;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{viewBox:"0 0 268 110",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,n.jsx)("line",{x1:8,y1:90,x2:260,y2:90,stroke:c,strokeWidth:1}),e.map((e,r)=>{const i=e/a*60,d=8+r*l+s/2,c=l-s,x=90-i,f=d+c/2,u=function(e){let t=h[0].color;for(const o of h){if(!(e>=o.threshold))break;t=o.color}return t}(e);return(0,n.jsxs)("g",{children:[(0,n.jsx)(m,{cx:f,cy:7,deg:t[r],size:6}),(0,n.jsx)("text",{x:f,y:23,textAnchor:"middle",fill:u,fontSize:8,fontWeight:"600",fontFamily:"monospace",children:Math.round(e)}),(0,n.jsx)("rect",{x:d,y:x,width:c,height:i,fill:u,opacity:.85,rx:2}),(0,n.jsx)("text",{x:f,y:106,textAnchor:"middle",fill:p,fontSize:9,fontFamily:"monospace",children:o[r]})]},r)}),(0,n.jsx)("text",{x:260,y:88,textAnchor:"end",fill:p,fontSize:8,fontFamily:"monospace",children:"km/h"})]}),(0,n.jsx)(x,{children:y.map(({label:e,color:t})=>(0,n.jsxs)(f,{children:[(0,n.jsx)(u,{color:t}),e]},e))})]})}const v=i.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: ${a.w4.colors.sidebarBg};
  border-left: 1px solid ${a.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  transform: translateX(${({visible:e})=>e?"0":"100%"});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 500;
  overflow: hidden;
`,k=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${a.w4.spacing.md} ${a.w4.spacing.md} ${a.w4.spacing.sm};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,j=i.default.h2`
  margin: 0;
  font-size: ${a.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamily};
`,z=i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: 16px;
  line-height: 1;
  transition: background 0.12s, color 0.12s;
  flex-shrink: 0;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.mainText};
  }
`,M=i.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${a.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${a.w4.spacing.md};
`,F=i.default.div`
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: ${a.w4.spacing.md};
`,S=i.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${a.w4.spacing.sm};
`,A=i.default.span`
  font-size: 48px;
  line-height: 1;
`,_=i.default.div`
  font-size: 40px;
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamilyMono};
  line-height: 1;
`,T=i.default.div`
  font-size: ${a.w4.typography.fontSizeSm};
  color: ${a.w4.colors.mainTextMuted};
  margin-top: 4px;
`,C=i.default.div`
  display: flex;
  gap: ${a.w4.spacing.md};
  margin-top: ${a.w4.spacing.sm};
`,B=i.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,L=i.default.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  margin-bottom: 2px;
`,R=i.default.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: ${a.w4.borderRadius.sm};
  gap: ${a.w4.spacing.sm};
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,H=i.default.span`
  font-size: 20px;
  width: 28px;
  text-align: center;
  flex-shrink: 0;
`,I=i.default.div`
  flex: 1;
  min-width: 0;
`,q=i.default.div`
  font-size: ${a.w4.typography.fontSizeSm};
  font-weight: 500;
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamily};
`,E=i.default.div`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,P=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  flex-shrink: 0;
`,W=i.default.span`
  font-size: ${a.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamilyMono};
`,O=i.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,N=i.default.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 10px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
  flex-shrink: 0;
  width: 36px;
  justify-content: flex-end;
`,Y=i.default.div`
  padding: ${a.w4.spacing.lg};
  text-align: center;
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeSm};
  font-family: ${a.w4.typography.fontFamily};
`;function D({place:e,onClose:t}){const[o,i]=(0,r.useState)(null),[a,d]=(0,r.useState)(!1),[c,p]=(0,r.useState)(null);(0,r.useEffect)(()=>{if(!e)return void i(null);d(!0),p(null),i(null);const t=`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lng}&current_weather=true&hourly=windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=7`;fetch(t).then(e=>{if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()}).then(e=>{i(e),d(!1)}).catch(e=>{p(e.message),d(!1)})},[e?.id]);const h=o?l(o.current_weather.weathercode):null,x=o?o.hourly.windspeed_10m.slice(0,24):[];return(0,n.jsxs)(v,{visible:!!e,children:[(0,n.jsxs)(k,{children:[(0,n.jsx)(j,{children:e?.name??""}),(0,n.jsx)(z,{onClick:t,title:"Close",children:"✕"})]}),(0,n.jsxs)(M,{children:[a&&(0,n.jsx)(Y,{children:"Loading weather…"}),c&&(0,n.jsxs)(Y,{children:["Failed to load weather: ",c]}),o&&h&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(F,{children:[(0,n.jsxs)(S,{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(_,{children:[Math.round(o.current_weather.temperature),"°C"]}),(0,n.jsx)(T,{children:h.label})]}),(0,n.jsx)(A,{children:h.emoji})]}),(0,n.jsxs)(C,{children:[(0,n.jsxs)(B,{children:["💨 ",Math.round(o.current_weather.windspeed)," km/h"]}),(0,n.jsxs)(B,{children:["🌡 ",Math.round(o.daily.temperature_2m_max[0]),"° / ",Math.round(o.daily.temperature_2m_min[0]),"°"]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(L,{children:"Wind today (hourly)"}),(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{children:"Speed km/h · dot = current hour"}),(0,n.jsx)(w,{speeds:x})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(L,{children:"Wind this week (daily max)"}),(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{children:"Max speed km/h · arrows = dominant direction"}),(0,n.jsx)($,{speeds:o.daily.windspeed_10m_max,directions:o.daily.winddirection_10m_dominant,dayLabels:o.daily.time.map((e,t)=>0===t?"Today":new Date(e).toLocaleDateString("en-GB",{weekday:"short"}))})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(L,{children:"7-Day Forecast"}),o.daily.time.map((e,t)=>{const{emoji:r,label:i}=l(o.daily.weathercode[t]);return(0,n.jsxs)(R,{children:[(0,n.jsx)(H,{children:r}),(0,n.jsxs)(I,{children:[(0,n.jsx)(q,{children:s(e,t)}),(0,n.jsx)(E,{children:i})]}),(0,n.jsx)(N,{children:o.daily.precipitation_sum[t]>0&&(0,n.jsxs)(n.Fragment,{children:["💧 ",o.daily.precipitation_sum[t].toFixed(1)]})}),(0,n.jsxs)(P,{children:[(0,n.jsxs)(W,{children:[Math.round(o.daily.temperature_2m_max[t]),"°"]}),(0,n.jsxs)(O,{children:[Math.round(o.daily.temperature_2m_min[t]),"°"]})]})]},e)})]})]})]})]})}},419(e,t,o){o.d(t,{A:()=>l});var r=o(359);const i=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:l="",children:s,iconNode:d,...c},p)=>(0,r.createElement)("svg",{ref:p,...a,width:t,height:t,stroke:e,strokeWidth:n?24*Number(o)/Number(t):o,className:i("lucide",l),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])),l=(e,t)=>{const o=(0,r.forwardRef)(({className:o,...a},l)=>{return(0,r.createElement)(n,{ref:l,iconNode:t,className:i(`lucide-${s=e,s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...a});var s});return o.displayName=`${e}`,o}},255(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},921(e,t,o){var r=o(359),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,a={},d=null,c=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},723(e,t,o){e.exports=o(921)}}]);
//# sourceMappingURL=375.3e93a7b656ce0c4f95f6.js.map