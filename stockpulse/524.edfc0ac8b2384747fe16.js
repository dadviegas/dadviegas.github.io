/*! For license information please see 524.edfc0ac8b2384747fe16.js.LICENSE.txt */
"use strict";(self.webpackChunk_atlantis_stockpulse=self.webpackChunk_atlantis_stockpulse||[]).push([[524],{914(e,t,o){o.d(t,{FlyoutPanel:()=>u});var i=o(359),n=o(233),a=o(207),r=o(255),s=o(217),l=o(959),d=o(550),c=o(723);const p=a.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,h=n.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  z-index: 1200;
  background: #161b22;
  border: 1px solid rgba(88, 166, 255, 0.2);
  border-radius: ${s.w.borderRadius.lg};
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
`,g=n.default.div`
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
  font-family: ${s.w.typography.fontFamily};
`,f=n.default.button`
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
  font-size: ${s.w.typography.fontSizeBase};
  font-family: ${s.w.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: rgba(88, 166, 255, 0.07);
    color: #e6edf3;
  }
`;function x({iconKey:e}){const t=e?d.t[e]??r.A:r.A;return(0,c.jsx)(t,{size:14,strokeWidth:1.75})}function m({entries:e,activeId:t,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(i.Fragment,{children:(0,c.jsx)(m,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,c.jsxs)(f,{active:t===e.id,onClick:()=>o(e),children:[(0,c.jsx)(x,{iconKey:e.icon}),e.name]},e.id))})}function u({activeId:e}){const{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:i}=(0,l.c)();if(!t)return null;const n=t.entry.icon?d.t[t.entry.icon]??r.A:r.A;return(0,c.jsxs)(h,{anchorY:t.anchorY,onMouseEnter:i,onMouseLeave:o,children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(n,{size:13,strokeWidth:2}),t.entry.name]}),(0,c.jsx)(m,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},959(e,t,o){o.d(t,{I:()=>n,c:()=>a});var i=o(359);const n=(0,i.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),a=()=>(0,i.useContext)(n)},550(e,t,o){o.d(t,{t:()=>w});var i=o(419);const n=(0,i.A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),a=(0,i.A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),r=(0,i.A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),s=(0,i.A)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),l=(0,i.A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),d=(0,i.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),c=(0,i.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),p=(0,i.A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),h=(0,i.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),g=(0,i.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),f=(0,i.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),x=(0,i.A)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),m=(0,i.A)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var u=o(255);const y=(0,i.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),b=(0,i.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),w={"book-open":n,"file-text":a,package:r,compass:s,"git-branch":l,github:d,terminal:c,zap:p,bot:h,lightbulb:g,"message-square":f,wrench:x,"layout-grid":m,file:u.A,folder:y,"map-pin":b}},365(e,t,o){o.d(t,{PE:()=>k,CD:()=>q,w4:()=>i.w});var i=o(217),n=o(359),a=o(233),r=o(723);a.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 ${i.w.spacing.sm};
  background: ${i.w.colors.surface};
  border: 1px solid ${i.w.colors.border};
  border-radius: ${i.w.borderRadius.md};
  color: ${i.w.colors.mainText};
  font-family: ${i.w.typography.fontFamily};
  font-size: ${i.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${i.w.colors.sidebarHover};
    border-color: ${i.w.colors.accent};
  }
`,a.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${i.w.colors.surface};
  border: 1px solid ${i.w.colors.border};
  border-radius: ${i.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,a.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${i.w.spacing.sm};
  background: ${({active:e})=>e?i.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:e})=>e?i.w.colors.accent:i.w.colors.mainText};
  font-family: ${i.w.typography.fontFamily};
  font-size: ${i.w.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${i.w.colors.sidebarHover};
  }
`,a.default.div`
  position: relative;
`,a.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?i.w.colors.accent:i.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var s=o(419);const l=(0,s.A)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);var d=o(959);const c="260px",p="56px",h=a.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${i.w.colors.sidebarBg};
  border-bottom: 1px solid ${i.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,g=a.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${i.w.colors.sidebarBorder};
  flex-shrink: 0;
`,f=a.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${i.w.borderRadius.md};
  cursor: pointer;
  color: ${i.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${i.w.colors.sidebarHover};
    color: ${i.w.colors.sidebarText};
  }
`,x=a.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${i.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w.typography.fontFamily};
  font-size: ${i.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${i.w.colors.accent}; }
`,m=a.default.div`
  font-size: ${i.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${i.w.colors.sidebarTextMuted};
  font-family: ${i.w.typography.fontFamily};
  padding-left: ${i.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${i.w.spacing.sm};
    color: ${i.w.colors.border};
  }
`,u=a.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${i.w.spacing.lg};
`,y=a.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,b=a.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${i.w.colors.mainBg};
  font-family: ${i.w.typography.fontFamily};
  color: ${i.w.colors.mainText};
  overflow: hidden;
`,w=a.default.aside`
  width: ${({collapsed:e})=>e?p:c};
  min-width: ${({collapsed:e})=>e?p:c};
  background: ${i.w.colors.sidebarBg};
  border-right: 1px solid ${i.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${i.w.breakpoints.md}) {
    display: none;
  }
`,v=a.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,$=a.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,j="atlantis:sidebar-collapsed";function k({sidebar:e,children:t,topBarRight:i,title:a="Atlantis",activeId:s=null}){const[c,p]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(j)}catch{return!1}}),[k,M]=(0,n.useState)(null),A=(0,n.useRef)(),S=()=>p(e=>{const t=!e;try{localStorage.setItem(j,String(t))}catch{}return t}),z=n.useMemo(()=>n.lazy(()=>Promise.resolve().then(o.bind(o,914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(d.I.Provider,{value:{collapsed:c,toggle:S,flyout:k,openFlyout:(e,t,o)=>{clearTimeout(A.current),M({entry:e,anchorY:t,onSelect:o})},scheduleFlyoutClose:()=>{A.current=setTimeout(()=>M(null),160)},cancelFlyoutClose:()=>clearTimeout(A.current)},children:(0,r.jsxs)(b,{children:[(0,r.jsxs)(h,{children:[(0,r.jsx)(g,{children:(0,r.jsx)(f,{onClick:S,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(l,{size:17})})}),(0,r.jsxs)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,r.jsx)("span",{children:"antis"})]}),a&&(0,r.jsx)(m,{children:a}),i&&(0,r.jsx)(u,{children:i})]}),(0,r.jsxs)(y,{children:[(0,r.jsx)(w,{collapsed:c,children:(0,r.jsx)(v,{children:e})}),(0,r.jsx)($,{children:t})]}),k&&(0,r.jsx)(n.Suspense,{fallback:null,children:(0,r.jsx)(z,{activeId:s})})]})})}var M=o(255);const A=(0,s.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var S=o(550);const z=a.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,T=a.default.div`
  overflow: hidden;
`,P=a.default.div`
  padding-left: ${i.w.spacing.md};
`,C=a.default.div`
  display: flex;
  flex-direction: column;
`,L=a.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${i.w.spacing.sm} ${i.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":i.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w.colors.sidebarTextMuted};
  font-size: ${i.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${i.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${i.w.colors.sidebarText};
    background: ${i.w.colors.sidebarHover};
  }
`,F=a.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,R=a.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,E=a.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${i.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,B=a.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${i.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?i.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?i.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?i.w.colors.sidebarActive:i.w.colors.sidebarText};
  font-size: ${i.w.typography.fontSizeBase};
  font-family: ${i.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${i.w.borderRadius.sm} ${i.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${i.w.colors.sidebarHover};
  }
`;function D({iconKey:e,size:t=16}){const o=e?S.t[e]??M.A:M.A;return(0,r.jsx)(o,{size:t,strokeWidth:1.75})}function I({entry:e,activeId:t,onSelect:o}){const[i,a]=(0,n.useState)(!0),{collapsed:s,openFlyout:l,scheduleFlyoutClose:c,cancelFlyoutClose:p}=(0,d.c)();return e.children&&e.children.length>0?(0,r.jsxs)(C,{children:[(0,r.jsxs)(L,{collapsed:s,onClick:()=>{s||a(e=>!e)},onMouseEnter:s?t=>{const i=t.currentTarget.getBoundingClientRect();l(e,i.top,o)}:void 0,onMouseLeave:s?c:void 0,children:[(0,r.jsxs)(F,{collapsed:s,children:[(0,r.jsx)(D,{iconKey:e.icon,size:16}),(0,r.jsx)(R,{collapsed:s,children:e.name})]}),(0,r.jsx)(E,{open:i,collapsed:s,children:(0,r.jsx)(A,{size:13})})]}),(0,r.jsx)(z,{open:i&&!s,children:(0,r.jsx)(T,{children:(0,r.jsx)(P,{children:e.children.map(e=>(0,r.jsx)(I,{entry:e,activeId:t,onSelect:o},e.id))})})})]}):(0,r.jsxs)(B,{active:t===e.id,collapsed:s,onClick:()=>o(e),onMouseEnter:s?t=>{const i=t.currentTarget.getBoundingClientRect();l({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},i.top,o)}:void 0,onMouseLeave:s?c:void 0,children:[(0,r.jsx)(D,{iconKey:e.icon,size:15}),(0,r.jsx)(R,{collapsed:s,children:e.name})]})}function q({entries:e,activeId:t,onSelect:o}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(I,{entry:e,activeId:t,onSelect:o},e.id))})}const N=o(207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;a.default.div`
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
`,o(914)},217(e,t,o){o.d(t,{w:()=>i});const i={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},985(e,t,o){o.d(t,{A:()=>q});var i=o(359),n=o(233),a=o(207);const r=(0,o(419).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var s=o(987),l=o(121),d=o(365),c=o(447),p=o(723);const h=a.keyframes`0%,100%{opacity:1}50%{opacity:.4}`,g=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
`,f=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.sm};
`,x=n.default.h2`
  font-size: ${d.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,m=n.default.div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,u=n.default.button`
  padding: 4px 12px;
  border-radius: ${d.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?"#58a6ff":d.w4.colors.border};
  background: ${({active:e})=>e?"rgba(88,166,255,0.1)":"transparent"};
  color: ${({active:e})=>e?"#58a6ff":d.w4.colors.mainTextMuted};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #58a6ff;
    color: #58a6ff;
  }
`,y=n.default.select`
  padding: 4px 8px;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainText};
  font-size: 12px;
  outline: none;
  cursor: pointer;

  &:focus { border-color: #58a6ff; }
`,b=n.default.div`
  display: flex;
  gap: ${d.w4.spacing.xl};
  align-items: flex-start;

  @media (max-width: ${d.w4.breakpoints.lg}) {
    flex-direction: column;
  }
`,w=n.default.div`
  flex: 1;
  min-width: 0;
`,v=n.default.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 4px;
`,$=n.default.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 6px;
`,j=n.default.div`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 0;
`,k=n.default.div`
  background: ${({bg:e,empty:t})=>t?"transparent":e};
  border-radius: ${d.w4.borderRadius.sm};
  padding: 8px 6px;
  min-height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({empty:e})=>e?"default":"pointer"};
  border: 1px solid ${({empty:e})=>e?"transparent":"rgba(255,255,255,0.05)"};
  transition: filter 0.12s;
  position: relative;

  &:hover {
    filter: ${({empty:e})=>e?"none":"brightness(1.2)"};
  }
`,M=n.default.div`
  font-size: 10px;
  color: rgba(255,255,255,0.55);
  font-family: ${d.w4.typography.fontFamilyMono};
`,A=n.default.div`
  font-size: 13px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  font-family: ${d.w4.typography.fontFamilyMono};
`,S=n.default.div`
  background: ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  min-height: 58px;
  animation: ${h} 1.5s ease-in-out infinite;
`,z=n.default.div`
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,T=n.default.div`
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
`,P=n.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 4px;
`,C=n.default.div`
  font-size: 18px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({positive:e})=>void 0===e?d.w4.colors.mainText:e?"#3fb950":"#f85149"};
`,L=n.default.div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,F=n.default.div`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #1c2128;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 8px 10px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainText};
  pointer-events: none;
  z-index: 100;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #1c2128;
  }
`,R=n.default.div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
`,E=n.default.div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #7f1d1d, #dc2626, #21262d, #16a34a, #166534);
`,B=[{symbol:"AAPL",label:"Apple (AAPL)"},{symbol:"MSFT",label:"Microsoft (MSFT)"},{symbol:"NVDA",label:"NVIDIA (NVDA)"},{symbol:"GOOGL",label:"Alphabet (GOOGL)"},{symbol:"TSM",label:"TSMC (TSM)"},{symbol:"ASML",label:"ASML (ASML)"}];function D(e){return new Date(e+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"})}function I({bar:e}){const[t,o]=(0,i.useState)(!1);return(0,p.jsxs)(k,{bg:(0,c.yv)(e.changePct),onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[t&&(0,p.jsxs)(F,{children:[(0,p.jsx)("div",{style:{fontWeight:600,marginBottom:4},children:D(e.date)}),(0,p.jsxs)("div",{children:["Open  ",(0,c.Sc)(e.open,e.open>100?0:2)]}),(0,p.jsxs)("div",{children:["Close ",(0,c.Sc)(e.close,e.close>100?0:2)]}),(0,p.jsxs)("div",{children:["High  ",(0,c.Sc)(e.high,e.high>100?0:2)]}),(0,p.jsxs)("div",{children:["Low   ",(0,c.Sc)(e.low,e.low>100?0:2)]}),(0,p.jsx)("div",{style:{marginTop:4,color:e.changePct>=0?"#3fb950":"#f85149",fontWeight:600},children:(0,c.pT)(e.changePct)})]}),(0,p.jsx)(M,{children:D(e.date)}),(0,p.jsx)(A,{children:(0,c.pT)(e.changePct)})]})}function q(){const[e,t]=(0,i.useState)("1mo"),[o,n]=(0,i.useState)("^GSPC"),{bars:a,loading:h}=(0,c.W6)(o,e),M=function(e){if(0===e.length)return[];const t=[];let o=[],i=-1;return e.forEach(e=>{const n=function(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()));t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));const o=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-o.getTime())/864e5+1)/7)}(new Date(e.date+"T12:00:00Z"));n!==i&&o.length>0&&(t.push(o),o=[]),o.push(e),i=n}),o.length>0&&t.push(o),t.slice(-8)}(a),A=a.filter(e=>e.changePct>0),F=a.filter(e=>e.changePct<0),q=a.reduce((e,t)=>e.changePct>t.changePct?e:t,a[0]),N=a.reduce((e,t)=>e.changePct<t.changePct?e:t,a[0]),U=a.length>1?(a[a.length-1].close-a[0].close)/a[0].close*100:0;return(0,p.jsxs)(g,{children:[(0,p.jsxs)(f,{children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(r,{size:18,color:"#e3b341"}),"Good & Bad Days"]}),(0,p.jsxs)(m,{children:[(0,p.jsx)(y,{value:o,onChange:e=>n(e.target.value),children:B.map(e=>(0,p.jsx)("option",{value:e.symbol,children:e.label},e.symbol))}),["5d","1mo","3mo"].map(o=>(0,p.jsx)(u,{active:e===o,onClick:()=>t(o),children:"5d"===o?"1W":"1mo"===o?"1M":"3M"},o))]})]}),(0,p.jsxs)(b,{children:[(0,p.jsxs)(w,{children:[(0,p.jsx)($,{children:["Mon","Tue","Wed","Thu","Fri"].map(e=>(0,p.jsx)(j,{children:e},e))}),h?Array.from({length:4}).map((e,t)=>(0,p.jsx)(v,{children:Array.from({length:5}).map((e,t)=>(0,p.jsx)(S,{},t))},t)):M.map((e,t)=>{const o=[null,null,null,null,null];return e.forEach(e=>{const t=(i=e.date,new Date(i+"T12:00:00Z").getUTCDay()-1);var i;t>=0&&t<5&&(o[t]=e)}),(0,p.jsx)(v,{children:o.map((e,t)=>e?(0,p.jsx)(I,{bar:e},t):(0,p.jsx)(k,{bg:"transparent",empty:!0},t))},t)}),(0,p.jsxs)(R,{style:{marginTop:d.w4.spacing.sm},children:[(0,p.jsx)("span",{children:"−4%"}),(0,p.jsx)(E,{}),(0,p.jsx)("span",{children:"+4%"})]})]}),(0,p.jsxs)(z,{children:[(0,p.jsxs)(T,{children:[(0,p.jsx)(P,{children:"Period Return"}),(0,p.jsx)(C,{positive:U>=0,children:(0,c.pT)(U)}),(0,p.jsxs)(L,{children:[a.length," trading days"]})]}),(0,p.jsxs)(T,{children:[(0,p.jsx)(P,{children:"Up Days"}),(0,p.jsxs)(C,{positive:!0,children:[A.length,(0,p.jsxs)("span",{style:{fontSize:13,fontWeight:400,color:d.w4.colors.mainTextMuted},children:[" ","/ ",a.length]})]}),(0,p.jsxs)(L,{children:[a.length>0?Math.round(A.length/a.length*100):0,"% of trading days"]})]}),(0,p.jsxs)(T,{children:[(0,p.jsx)(P,{children:"Down Days"}),(0,p.jsxs)(C,{positive:!1,children:[F.length,(0,p.jsxs)("span",{style:{fontSize:13,fontWeight:400,color:d.w4.colors.mainTextMuted},children:[" ","/ ",a.length]})]}),(0,p.jsxs)(L,{children:[a.length>0?Math.round(F.length/a.length*100):0,"% of trading days"]})]}),q&&(0,p.jsxs)(T,{children:[(0,p.jsx)(P,{children:"Best Day"}),(0,p.jsxs)(C,{positive:!0,children:[(0,p.jsx)(s.A,{size:14,style:{marginRight:4}}),(0,c.pT)(q.changePct)]}),(0,p.jsx)(L,{children:D(q.date)})]}),N&&(0,p.jsxs)(T,{children:[(0,p.jsx)(P,{children:"Worst Day"}),(0,p.jsxs)(C,{positive:!1,children:[(0,p.jsx)(l.A,{size:14,style:{marginRight:4}}),(0,c.pT)(N.changePct)]}),(0,p.jsx)(L,{children:D(N.date)})]}),(0,p.jsxs)(T,{children:[(0,p.jsx)(P,{children:"How to read"}),(0,p.jsx)("div",{style:{fontSize:11,color:d.w4.colors.mainTextMuted,lineHeight:1.5},children:"Each cell is one trading day. Dark green = strong up day. Dark red = strong down day. Hover any cell for open, close, high, low, and % change."})]})]})]})]})}},11(e,t,o){o.d(t,{A:()=>H}),o(359);var i=o(233),n=o(207),a=o(987),r=o(121),s=o(621),l=o(419);const d=(0,l.A)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),c=(0,l.A)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);var p=o(365),h=o(447),g=o(723);const f=n.keyframes`0%,100%{opacity:1}50%{opacity:.4}`,x=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.lg};
`,m=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${p.w4.spacing.sm};
`,u=i.default.h2`
  font-size: ${p.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.sm};
`,y=i.default.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 999px;
  background: ${({state:e})=>"REGULAR"===e?"rgba(63,185,80,0.12)":"PRE"===e?"rgba(88,166,255,0.12)":"POST"===e?"rgba(227,179,65,0.12)":"rgba(139,148,158,0.1)"};
  color: ${({state:e})=>"REGULAR"===e?"#3fb950":"PRE"===e?"#58a6ff":"POST"===e?"#e3b341":p.w4.colors.mainTextMuted};
  border: 1px solid ${({state:e})=>"REGULAR"===e?"rgba(63,185,80,0.3)":"PRE"===e?"rgba(88,166,255,0.3)":"POST"===e?"rgba(227,179,65,0.3)":p.w4.colors.border};
`,b=i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: ${({state:e})=>"REGULAR"===e?f:"none"} 1.5s ease-in-out infinite;
`,w=i.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${p.w4.spacing.md};

  @media (max-width: ${p.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${p.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,v=i.default.div`
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${({positive:e})=>null===e?p.w4.colors.border:e?"rgba(63,185,80,0.25)":"rgba(248,81,73,0.25)"};
  border-radius: ${p.w4.borderRadius.lg};
  padding: ${p.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.3s;
`,$=i.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${p.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,j=i.default.div`
  font-size: 13px;
  font-weight: 500;
  color: ${p.w4.colors.mainText};
`,k=i.default.div`
  font-size: 26px;
  font-weight: 700;
  color: ${p.w4.colors.mainText};
  font-family: ${p.w4.typography.fontFamilyMono};
  line-height: 1.1;
`,M=i.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${p.w4.typography.fontFamilyMono};
  color: ${({pct:e})=>(0,h.Nf)(e)};
`,A=i.default.div`
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  font-family: ${p.w4.typography.fontFamilyMono};
  margin-top: 2px;
`,S=i.default.div`
  height: 14px;
  width: ${({w:e})=>e??"100%"};
  background: ${p.w4.colors.border};
  border-radius: 3px;
  animation: ${f} 1.5s ease-in-out infinite;
`,z=i.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${p.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,T=i.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${p.w4.spacing.md};

  @media (max-width: ${p.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,P=i.default.div`
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.md};
`,C=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: ${p.w4.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({color:e})=>e};
`,L=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid ${p.w4.colors.border};
  font-size: 12px;

  &:last-child { border-bottom: none; }
`,F=i.default.span`
  color: ${p.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,R=i.default.span`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-weight: 600;
  color: ${({pct:e})=>(0,h.Nf)(e)};
`,E=i.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${p.w4.spacing.md};

  @media (max-width: ${p.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,B=i.default.div`
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 6px;
`,D=i.default.div`
  font-size: 12px;
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,I=i.default.div`
  font-size: 12px;
  color: ${p.w4.colors.mainTextMuted};
  line-height: 1.6;
`,q=i.default.div`
  padding: ${p.w4.spacing.md};
  background: rgba(248,81,73,0.08);
  border: 1px solid rgba(248,81,73,0.25);
  border-radius: ${p.w4.borderRadius.md};
  color: #f85149;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.sm};
`,N=[{symbol:"AAPL",label:"Apple",region:"🇺🇸 Americas"},{symbol:"NVDA",label:"NVIDIA",region:"🇺🇸 Americas"},{symbol:"ASML",label:"ASML",region:"🇳🇱 Europe"},{symbol:"TSM",label:"TSMC",region:"🇹🇼 Asia"}];function U({pct:e}){return e>0?(0,g.jsx)(a.A,{size:16}):e<0?(0,g.jsx)(r.A,{size:16}):(0,g.jsx)(s.A,{size:14})}function H({quotes:e,loading:t,error:o}){const i=e.values().next().value,n=i?.marketState??"CLOSED",r="REGULAR"===n?"Market Open":"PRE"===n?"Pre-Market":"POST"===n?"After Hours":"Market Closed";return(0,g.jsxs)(x,{children:[(0,g.jsxs)(m,{children:[(0,g.jsxs)(u,{children:[(0,g.jsx)(a.A,{size:18,color:"#58a6ff"}),"Market Overview"]}),(0,g.jsxs)(y,{state:n,children:[(0,g.jsx)(b,{state:n}),r]})]}),o&&(0,g.jsxs)(q,{children:[(0,g.jsx)(d,{size:13}),"Market data unavailable — ",o,". Add your free API key from financialmodelingprep.com to ",(0,g.jsx)("code",{style:{fontFamily:"monospace",background:"rgba(255,255,255,0.08)",padding:"1px 5px",borderRadius:3},children:"FMP_API_KEY"})," in hooks.ts."]}),(0,g.jsx)(z,{children:"Key Indices"}),(0,g.jsx)(w,{children:N.map(({symbol:o,label:i,region:n})=>{const a=e.get(o),r=a?a.changePct>0||!(a.changePct<0)&&null:null;return(0,g.jsxs)(v,{positive:r,children:[(0,g.jsx)($,{children:n}),(0,g.jsx)(j,{children:i}),t&&!a?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(S,{w:"80px",style:{height:28}}),(0,g.jsx)(S,{w:"60px"})]}):a?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{children:(0,h.Sc)(a.price,a.price>1e3?0:2)}),(0,g.jsxs)(M,{pct:a.changePct,children:[(0,g.jsx)(U,{pct:a.changePct}),(0,h.pT)(a.changePct),(0,g.jsxs)("span",{style:{fontWeight:400,fontSize:12},children:["(",a.change>=0?"+":"",(0,h.Sc)(a.change,2),")"]})]}),(0,g.jsxs)(A,{children:["H ",(0,h.Sc)(a.high,a.high>1e3?0:2)," · L ",(0,h.Sc)(a.low,a.low>1e3?0:2)," · Prev ",(0,h.Sc)(a.prevClose,a.prevClose>1e3?0:2)]})]}):(0,g.jsx)(A,{children:"No data"})]},o)})}),(0,g.jsx)(z,{children:"By Region"}),(0,g.jsx)(T,{children:h.ij.map(o=>(0,g.jsxs)(P,{children:[(0,g.jsxs)(C,{color:o.color,children:[o.emoji," ",o.name]}),o.indices.slice(0,4).map(o=>{const i=e.get(o.symbol);return(0,g.jsxs)(L,{children:[(0,g.jsxs)(F,{children:[(0,g.jsx)("span",{children:o.flag}),o.name]}),t&&!i?(0,g.jsx)(S,{w:"50px"}):i?(0,g.jsx)(R,{pct:i.changePct,children:(0,h.pT)(i.changePct)}):(0,g.jsx)("span",{style:{color:p.w4.colors.mainTextMuted,fontSize:11},children:"—"})]},o.symbol)})]},o.id))}),(0,g.jsx)(z,{children:"Understanding Markets"}),(0,g.jsxs)(E,{children:[(0,g.jsxs)(B,{children:[(0,g.jsxs)(D,{children:[(0,g.jsx)(c,{size:13,color:"#58a6ff"})," What is a stock index?"]}),(0,g.jsx)(I,{children:"An index tracks the combined performance of a group of stocks. The S&P 500, for example, follows 500 of the largest US companies and is widely used as a benchmark for the overall US stock market."})]}),(0,g.jsxs)(B,{children:[(0,g.jsxs)(D,{children:[(0,g.jsx)(a.A,{size:13,color:"#3fb950"})," Green day vs Red day"]}),(0,g.jsx)(I,{children:"A green day means the index closed higher than it opened — investors are bullish. A red day means it closed lower — sentiment is bearish. The % change shows how much the index moved from the previous close."})]}),(0,g.jsxs)(B,{children:[(0,g.jsxs)(D,{children:[(0,g.jsx)(c,{size:13,color:"#e3b341"})," Market hours"]}),(0,g.jsx)(I,{children:"US markets (NYSE, NASDAQ) trade Mon–Fri 9:30 am–4 pm ET. European markets open at ~8 am CET, Asian markets at ~9 am local time. Pre-market and after-hours trading also occur with lower volume."})]})]})]})}},74(e,t,o){o.d(t,{A:()=>P}),o(359);var i=o(233),n=o(207),a=o(621),r=o(121),s=o(987),l=o(365),d=o(447),c=o(723);const p=n.keyframes`0%,100%{opacity:1}50%{opacity:.4}`,h=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,g=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=i.default.h2`
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,x=i.default.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,m=i.default.thead`
  border-bottom: 1px solid ${l.w4.colors.border};
`,u=i.default.th`
  padding: 8px ${l.w4.spacing.sm};
  font-size: 10px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-align: ${({align:e})=>e??"left"};
`,y=i.default.tr`
  border-bottom: 1px solid ${l.w4.colors.border};
  transition: background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover { background: ${l.w4.colors.mainBg}; }
`,b=i.default.td`
  padding: 10px ${l.w4.spacing.sm};
  color: ${l.w4.colors.mainText};
  text-align: ${({align:e})=>e??"left"};
`,w=i.default.div`
  font-weight: 500;
  color: ${l.w4.colors.mainText};
`,v=i.default.div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,$=i.default.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 600;
  font-size: 12px;
  color: ${({pct:e})=>(0,d.Nf)(e)};
  background: ${({pct:e})=>e>0?"rgba(63,185,80,0.1)":e<0?"rgba(248,81,73,0.1)":"transparent"};
  padding: 2px 7px;
  border-radius: 999px;
`,j=i.default.div`
  position: relative;
  width: 90px;
  height: 4px;
  background: ${l.w4.colors.border};
  border-radius: 2px;
  overflow: visible;
`,k=i.default.div`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  height: 100%;
  background: ${l.w4.colors.border};
  border-radius: 2px;
`,M=i.default.div`
  position: absolute;
  top: 50%;
  left: ${({pos:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,A=i.default.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  margin-top: 2px;
`,S=i.default.div`
  height: 14px;
  width: ${({w:e})=>e??"60px"};
  background: ${l.w4.colors.border};
  border-radius: 3px;
  animation: ${p} 1.5s ease-in-out infinite;
  display: inline-block;
`,z=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 110px;
`;function T({q:e}){const t=e.week52High-e.week52Low;if(0===t)return null;const o=(e.low-e.week52Low)/t*100,i=(e.high-e.week52Low)/t*100,n=(e.price-e.week52Low)/t*100;return(0,c.jsxs)(z,{children:[(0,c.jsxs)(j,{children:[(0,c.jsx)(k,{left:o,width:i-o}),(0,c.jsx)(M,{pos:n,color:(0,d.Nf)(e.changePct)})]}),(0,c.jsxs)(A,{children:[(0,c.jsx)("span",{children:(0,d.Sc)(e.week52Low,e.week52Low>1e3?0:2)}),(0,c.jsx)("span",{children:"52w"}),(0,c.jsx)("span",{children:(0,d.Sc)(e.week52High,e.week52High>1e3?0:2)})]})]})}function P({region:e,quotes:t,loading:o}){return(0,c.jsxs)(h,{children:[(0,c.jsx)(g,{children:(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{style:{fontSize:22},children:e.emoji}),e.name]})}),(0,c.jsxs)(x,{children:[(0,c.jsx)(m,{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)(u,{children:"Index"}),(0,c.jsx)(u,{align:"right",children:"Price"}),(0,c.jsx)(u,{align:"right",children:"Day Change"}),(0,c.jsx)(u,{align:"right",children:"Open"}),(0,c.jsx)(u,{align:"right",children:"High / Low"}),(0,c.jsx)(u,{align:"center",children:"52-Week Range"})]})}),(0,c.jsx)("tbody",{children:e.indices.map(e=>{const i=t.get(e.symbol);return(0,c.jsxs)(y,{children:[(0,c.jsxs)(b,{children:[(0,c.jsxs)(w,{children:[e.flag," ",e.name]}),(0,c.jsx)(v,{children:e.description})]}),(0,c.jsx)(b,{align:"right",children:o&&!i?(0,c.jsx)(S,{}):i?(0,c.jsx)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontWeight:600},children:(0,d.Sc)(i.price,i.price>1e3?0:2)}):"—"}),(0,c.jsx)(b,{align:"right",children:o&&!i?(0,c.jsx)(S,{w:"50px"}):i?(0,c.jsxs)($,{pct:i.changePct,children:[i.changePct>0?(0,c.jsx)(s.A,{size:11}):i.changePct<0?(0,c.jsx)(r.A,{size:11}):(0,c.jsx)(a.A,{size:10}),(0,d.pT)(i.changePct)]}):"—"}),(0,c.jsx)(b,{align:"right",children:i?(0,c.jsx)("span",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontSize:12,color:l.w4.colors.mainTextMuted},children:(0,d.Sc)(i.open,i.open>1e3?0:2)}):"—"}),(0,c.jsx)(b,{align:"right",children:i?(0,c.jsxs)("div",{style:{fontFamily:l.w4.typography.fontFamilyMono,fontSize:11},children:[(0,c.jsxs)("div",{style:{color:"#3fb950"},children:["H ",(0,d.Sc)(i.high,i.high>1e3?0:2)]}),(0,c.jsxs)("div",{style:{color:"#f85149"},children:["L ",(0,d.Sc)(i.low,i.low>1e3?0:2)]})]}):"—"}),(0,c.jsx)(b,{align:"center",children:i?(0,c.jsx)(T,{q:i}):"—"})]},e.symbol)})})]})]})}},143(e,t,o){o.d(t,{A:()=>A}),o(359);var i=o(233),n=o(207);const a=(0,o(419).A)("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);var r=o(987),s=o(121),l=o(365),d=o(447),c=o(723);const p=n.keyframes`0%,100%{opacity:1}50%{opacity:.4}`,h=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,g=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,f=i.default.h2`
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,x=i.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,m=i.default.div`
  background: ${({bg:e})=>e};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: default;
  transition: filter 0.15s;
  min-height: 90px;

  &:hover {
    filter: brightness(1.15);
  }
`,u=i.default.div`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
`,y=i.default.div`
  font-size: 10px;
  color: rgba(255,255,255,0.5);
  line-height: 1.3;
  flex: 1;
`,b=i.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 18px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  display: flex;
  align-items: center;
  gap: 4px;
`,w=i.default.div`
  background: ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  min-height: 90px;
  animation: ${p} 1.5s ease-in-out infinite;
`,v=i.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
`,$=i.default.div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #7f1d1d, #dc2626, #21262d, #16a34a, #166534);
`,j=i.default.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,k=i.default.div`
  display: flex;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,M=i.default.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({positive:e})=>e?"rgba(63,185,80,0.1)":"rgba(248,81,73,0.1)"};
  color: ${({positive:e})=>e?"#3fb950":"#f85149"};
  border: 1px solid ${({positive:e})=>e?"rgba(63,185,80,0.25)":"rgba(248,81,73,0.25)"};
`;function A({quotes:e,loading:t}){const o=d.kJ.map(t=>({...t,quote:e.get(t.symbol)})),i=o.filter(e=>e.quote),n=i.filter(e=>(e.quote?.changePct??0)>0).length,l=i.filter(e=>(e.quote?.changePct??0)<0).length,p=i.reduce((e,t)=>(e.quote?.changePct??-1/0)>(t.quote?.changePct??-1/0)?e:t,i[0]),A=i.reduce((e,t)=>(e.quote?.changePct??1/0)<(t.quote?.changePct??1/0)?e:t,i[0]);return(0,c.jsxs)(h,{children:[(0,c.jsxs)(g,{children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(a,{size:18,color:"#bc8cff"}),"S&P 500 Sectors"]}),i.length>0&&(0,c.jsxs)(k,{children:[(0,c.jsxs)(M,{positive:!0,children:[(0,c.jsx)(r.A,{size:12}),n," advancing"]}),(0,c.jsxs)(M,{positive:!1,children:[(0,c.jsx)(s.A,{size:12}),l," declining"]}),p?.quote&&(0,c.jsxs)(M,{positive:!0,children:["Best: ",p.name," ",(0,d.pT)(p.quote.changePct)]}),A?.quote&&(0,c.jsxs)(M,{positive:!1,children:["Worst: ",A.name," ",(0,d.pT)(A.quote.changePct)]})]})]}),(0,c.jsx)(x,{children:t&&0===e.size?d.kJ.map(e=>(0,c.jsx)(w,{},e.symbol)):o.map(({symbol:e,name:t,description:o,quote:i})=>{const n=i?.changePct??0;return(0,c.jsxs)(m,{bg:(0,d.yv)(n),children:[(0,c.jsx)(u,{children:t}),(0,c.jsx)(y,{children:o}),(0,c.jsxs)(b,{children:[n>0?(0,c.jsx)(r.A,{size:14}):n<0?(0,c.jsx)(s.A,{size:14}):null,i?(0,d.pT)(n):"—"]})]},e)})}),(0,c.jsxs)("div",{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)("span",{children:"−4%"}),(0,c.jsx)($,{}),(0,c.jsx)("span",{children:"+4%"})]}),(0,c.jsxs)(j,{children:[(0,c.jsx)("span",{children:"Bearish"}),(0,c.jsx)("span",{children:"Neutral"}),(0,c.jsx)("span",{children:"Bullish"})]})]})]})}},447(e,t,o){o.d(t,{Nf:()=>g,Rq:()=>p,Sc:()=>x,W6:()=>h,ij:()=>n,kJ:()=>r,pT:()=>m,rb:()=>a,yv:()=>f,zR:()=>s});var i=o(359);const n=[{id:"americas",name:"Americas",emoji:"🌎",color:"#58a6ff",indices:[{symbol:"AAPL",name:"Apple",flag:"🇺🇸",description:"Consumer electronics & software giant"},{symbol:"MSFT",name:"Microsoft",flag:"🇺🇸",description:"Cloud, enterprise software & AI leader"},{symbol:"AMZN",name:"Amazon",flag:"🇺🇸",description:"E-commerce and cloud computing (AWS)"},{symbol:"NVDA",name:"NVIDIA",flag:"🇺🇸",description:"GPU & AI chip market leader"},{symbol:"META",name:"Meta",flag:"🇺🇸",description:"Social media and metaverse platforms"},{symbol:"TSLA",name:"Tesla",flag:"🇺🇸",description:"Electric vehicles and clean energy"}]},{id:"europe",name:"Europe",emoji:"🌍",color:"#3fb950",indices:[{symbol:"ASML",name:"ASML",flag:"🇳🇱",description:"Dutch chipmaker — world monopoly on EUV lithography"},{symbol:"SAP",name:"SAP",flag:"🇩🇪",description:"German enterprise software leader"},{symbol:"NVO",name:"Novo Nordisk",flag:"🇩🇰",description:"Danish pharma — Ozempic/GLP-1 drugs"},{symbol:"SHEL",name:"Shell",flag:"🇬🇧",description:"UK-based global oil & gas major"},{symbol:"HSBC",name:"HSBC",flag:"🇬🇧",description:"One of the world's largest banks"},{symbol:"UL",name:"Unilever",flag:"🇬🇧",description:"Global consumer goods conglomerate"}]},{id:"asia",name:"Asia Pacific",emoji:"🌏",color:"#e3b341",indices:[{symbol:"TSM",name:"TSMC",flag:"🇹🇼",description:"World's largest semiconductor foundry"},{symbol:"BABA",name:"Alibaba",flag:"🇨🇳",description:"China's largest e-commerce platform"},{symbol:"TM",name:"Toyota",flag:"🇯🇵",description:"World's largest automaker"},{symbol:"SONY",name:"Sony",flag:"🇯🇵",description:"Electronics, gaming & entertainment"},{symbol:"SE",name:"Sea Limited",flag:"🇸🇬",description:"Southeast Asia's leading tech company"},{symbol:"BIDU",name:"Baidu",flag:"🇨🇳",description:"China's leading search & AI company"}]}],a=n.flatMap(e=>e.indices.map(e=>e.symbol)),r=[{symbol:"NVDA",name:"Technology",description:"NVIDIA — AI & GPU leader"},{symbol:"JPM",name:"Financials",description:"JPMorgan — largest US bank"},{symbol:"JNJ",name:"Healthcare",description:"Johnson & Johnson — pharma giant"},{symbol:"XOM",name:"Energy",description:"ExxonMobil — oil & gas major"},{symbol:"GOOGL",name:"Communication",description:"Alphabet — search & ads"},{symbol:"CAT",name:"Industrials",description:"Caterpillar — heavy machinery"},{symbol:"AMZN",name:"Consumer Disc.",description:"Amazon — retail & marketplace"},{symbol:"PG",name:"Consumer Staples",description:"Procter & Gamble — household goods"},{symbol:"NEE",name:"Utilities",description:"NextEra Energy — renewable power"},{symbol:"PLD",name:"Real Estate",description:"Prologis — industrial REITs"},{symbol:"LIN",name:"Materials",description:"Linde — industrial gases & chemicals"}],s=r.map(e=>e.symbol),l="uqHHItGNTnVCveBfU2ROO0247urQgU3m",d="https://financialmodelingprep.com/stable";async function c(e){try{const t=await fetch(`${d}/quote?symbol=${encodeURIComponent(e)}&apikey=${l}`);if(!t.ok)return null;const o=await t.json(),i=Array.isArray(o)?o[0]:null;if(!i)return null;const n=i.price??0,a=i.previousClose??n;return{symbol:e,shortName:i.name??e,price:n,change:i.change??n-a,changePct:i.changesPercentage??0,open:i.open??n,high:i.dayHigh??n,low:i.dayLow??n,prevClose:a,week52High:i.yearHigh??n,week52Low:i.yearLow??n,marketState:"REGULAR"}}catch{return null}}function p(e,t=3e4){const[o,n]=(0,i.useState)(new Map),[a,r]=(0,i.useState)(!0),[s,l]=(0,i.useState)(null),d=(0,i.useCallback)(async()=>{try{const t=await async function(e){const t=new Map;for(let o=0;o<e.length;o++){o>0&&await new Promise(e=>setTimeout(e,300));const i=await c(e[o]);i&&t.set(e[o],i)}return t}(e);n(t),l(null)}catch(e){l(e instanceof Error?e.message:"Fetch failed")}finally{r(!1)}},[e.join(",")]);return(0,i.useEffect)(()=>{d();const e=setInterval(d,t);return()=>clearInterval(e)},[d,t]),{quotes:o,loading:a,error:s}}function h(e,t){const[o,n]=(0,i.useState)([]),[a,r]=(0,i.useState)(!0),[s,c]=(0,i.useState)(null),p=(0,i.useCallback)(async()=>{try{const o=await async function(e,t){const o=function(e){const t=new Date,o=new Date(t);return"5d"===e&&o.setDate(t.getDate()-7),"1mo"===e&&o.setMonth(t.getMonth()-1),"3mo"===e&&o.setMonth(t.getMonth()-3),o.toISOString().slice(0,10)}(t),i=(new Date).toISOString().slice(0,10),n=await fetch(`${d}/historical-price-eod/full?symbol=${encodeURIComponent(e)}&from=${o}&to=${i}&apikey=${l}`);if(!n.ok)throw new Error(`HTTP ${n.status}`);const a=await n.json();return(a?.historical??[]).slice().reverse().map((e,t,o)=>{const i=e.close??0,n=t>0?o[t-1].close??i:i;return{date:e.date,open:e.open??i,high:e.high??i,low:e.low??i,close:i,changePct:e.changePercent??(0!==n?(i-n)/n*100:0)}})}(e,t);n(o),c(null)}catch(e){c(e instanceof Error?e.message:"Fetch failed")}finally{r(!1)}},[e,t]);return(0,i.useEffect)(()=>{p()},[p]),{bars:o,loading:a,error:s}}function g(e){return e>0?"#3fb950":e<0?"#f85149":"#8b949e"}function f(e){const t=Math.max(-4,Math.min(4,e));if(0===t)return"#21262d";if(t>0){const e=t/4,o=Math.round(80+105*e);return`rgb(${Math.round(20+10*e)},${o},${Math.round(30+10*e)})`}const o=-t/4;return`rgb(${Math.round(100+148*o)},${Math.round(20+10*o)},${Math.round(20+10*o)})`}function x(e,t=2){return e.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}function m(e){return`${e>=0?"+":""}${e.toFixed(2)}%`}},419(e,t,o){o.d(t,{A:()=>s});var i=o(359);const n=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const r=(0,i.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:s="",children:l,iconNode:d,...c},p)=>(0,i.createElement)("svg",{ref:p,...a,width:t,height:t,stroke:e,strokeWidth:r?24*Number(o)/Number(t):o,className:n("lucide",s),...c},[...d.map(([e,t])=>(0,i.createElement)(e,t)),...Array.isArray(l)?l:[l]])),s=(e,t)=>{const o=(0,i.forwardRef)(({className:o,...a},s)=>{return(0,i.createElement)(r,{ref:s,iconNode:t,className:n(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...a});var l});return o.displayName=`${e}`,o}},255(e,t,o){o.d(t,{A:()=>i});const i=(0,o(419).A)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},621(e,t,o){o.d(t,{A:()=>i});const i=(0,o(419).A)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},121(e,t,o){o.d(t,{A:()=>i});const i=(0,o(419).A)("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]])},987(e,t,o){o.d(t,{A:()=>i});const i=(0,o(419).A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},921(e,t,o){var i=o(359),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var i,a={},d=null,c=null;for(i in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},723(e,t,o){e.exports=o(921)}}]);
//# sourceMappingURL=524.edfc0ac8b2384747fe16.js.map