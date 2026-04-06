/*! For license information please see 462.0fd6ac6c65a9f74b4f1e.js.LICENSE.txt */
"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([[462],{4914(e,t,o){o.d(t,{FlyoutPanel:()=>b});var r=o(7359),a=o(3233),i=o(7207),n=o(255),s=o(217),l=o(5959),d=o(2550),c=o(5723);const p=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,h=a.default.div`
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
`,f=a.default.div`
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
  font-size: ${s.w.typography.fontSizeBase};
  font-family: ${s.w.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: rgba(88, 166, 255, 0.07);
    color: #e6edf3;
  }
`;function g({iconKey:e}){const t=e?d.t[e]??n.A:n.A;return(0,c.jsx)(t,{size:14,strokeWidth:1.75})}function u({entries:e,activeId:t,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(u,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,c.jsxs)(x,{active:t===e.id,onClick:()=>o(e),children:[(0,c.jsx)(g,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){const{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:r}=(0,l.c)();if(!t)return null;const a=t.entry.icon?d.t[t.entry.icon]??n.A:n.A;return(0,c.jsxs)(h,{anchorY:t.anchorY,onMouseEnter:r,onMouseLeave:o,children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(a,{size:13,strokeWidth:2}),t.entry.name]}),(0,c.jsx)(u,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},5959(e,t,o){o.d(t,{c:()=>i});var r=o(7359);const a=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,r.useContext)(a)},2550(e,t,o){o.d(t,{t:()=>w});var r=o(2419);const a=(0,r.A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),i=(0,r.A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),n=(0,r.A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),s=(0,r.A)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),l=(0,r.A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),d=(0,r.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),c=(0,r.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),p=(0,r.A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),h=(0,r.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),f=(0,r.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),x=(0,r.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),g=(0,r.A)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),u=(0,r.A)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var b=o(255);const m=(0,r.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),y=(0,r.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),w={"book-open":a,"file-text":i,package:n,compass:s,"git-branch":l,github:d,terminal:c,zap:p,bot:h,lightbulb:f,"message-square":x,wrench:g,"layout-grid":u,file:b.A,folder:m,"map-pin":y}},217(e,t,o){o.d(t,{w:()=>r});const r={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},3462(e,t,o){var r=o(7359),a=o(8997),i=o(3233),n=o(217);const s=(0,o(2419).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var l=o(5723);const d=i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 ${n.w.spacing.sm};
  background: ${n.w.colors.surface};
  border: 1px solid ${n.w.colors.border};
  border-radius: ${n.w.borderRadius.md};
  color: ${n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w.colors.sidebarHover};
    border-color: ${n.w.colors.accent};
  }
`,c=i.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${n.w.colors.surface};
  border: 1px solid ${n.w.colors.border};
  border-radius: ${n.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,p=i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${n.w.spacing.sm};
  background: ${({active:e})=>e?n.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:e})=>e?n.w.colors.accent:n.w.colors.mainText};
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
  }
`,h=i.default.div`
  position: relative;
`,f=i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?n.w.colors.accent:n.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;function x({apps:e,activeAppId:t}){const[o,a]=(0,r.useState)(!1),i=(0,r.useRef)(null),n=e.find(e=>e.id===t)??e[0];return(0,r.useEffect)(()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&a(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[]),(0,l.jsxs)(h,{ref:i,children:[(0,l.jsxs)(d,{onClick:()=>a(e=>!e),children:[n?.label??"Apps",(0,l.jsx)(s,{size:13})]}),(0,l.jsx)(c,{open:o,children:e.map(e=>(0,l.jsxs)(p,{active:e.id===t,onClick:()=>(e=>{window.location.hash=e.hash,a(!1)})(e),children:[(0,l.jsx)(f,{active:e.id===t}),e.label]},e.id))})]})}o(5959);const g="260px",u="56px";i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${n.w.colors.sidebarBg};
  border-bottom: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,i.default.div`
  width: ${u};
  min-width: ${u};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${n.w.borderRadius.md};
  cursor: pointer;
  color: ${n.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${n.w.colors.sidebarHover};
    color: ${n.w.colors.sidebarText};
  }
`,i.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${n.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${n.w.colors.accent}; }
`,i.default.div`
  font-size: ${n.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${n.w.colors.sidebarTextMuted};
  font-family: ${n.w.typography.fontFamily};
  padding-left: ${n.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${n.w.spacing.sm};
    color: ${n.w.colors.border};
  }
`,i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${n.w.spacing.lg};
`,i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${n.w.colors.mainBg};
  font-family: ${n.w.typography.fontFamily};
  color: ${n.w.colors.mainText};
  overflow: hidden;
`,i.default.aside`
  width: ${({collapsed:e})=>e?u:g};
  min-width: ${({collapsed:e})=>e?u:g};
  background: ${n.w.colors.sidebarBg};
  border-right: 1px solid ${n.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${n.w.breakpoints.md}) {
    display: none;
  }
`,i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,o(2550),i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.div`
  overflow: hidden;
`,i.default.div`
  padding-left: ${n.w.spacing.md};
`,i.default.div`
  display: flex;
  flex-direction: column;
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${n.w.spacing.sm} ${n.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":n.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w.colors.sidebarTextMuted};
  font-size: ${n.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${n.w.colors.sidebarText};
    background: ${n.w.colors.sidebarHover};
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
  color: ${n.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${n.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?n.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?n.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w.colors.sidebarActive:n.w.colors.sidebarText};
  font-size: ${n.w.typography.fontSizeBase};
  font-family: ${n.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${n.w.borderRadius.sm} ${n.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${n.w.colors.sidebarHover};
  }
`;var b=o(7207);const m=b.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${m} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,o(4914);const y={markdown:{icon:"📄",description:"Articles and notes across a variety of topics",color:"#388bfd"},earth:{icon:"🌍",description:"Interactive 3D globe visualization",color:"#3fb950"},techscope:{icon:"📡",description:"Technology trends and insights dashboard",color:"#a371f7"},citypulse:{icon:"🏙️",description:"City metrics and live urban data",color:"#d29922"},devhub:{icon:"⚙️",description:"Developer tools and utilities hub",color:"#58a6ff"},cosmos:{icon:"🔭",description:"Space exploration and astronomy data",color:"#bc8cff"},stockpulse:{icon:"📈",description:"Real-time stock market pulse",color:"#3fb950"},mdpad:{icon:"✏️",description:"Markdown editor with live preview, math & diagrams",color:"#f78166"},regexlab:{icon:"🔍",description:"Live regex tester with group highlighting",color:"#388bfd"},jsonexplorer:{icon:"🗂️",description:"JSON tree explorer with JSONPath filtering",color:"#3fb950"},codediff:{icon:"📋",description:"Visual side-by-side code diff",color:"#d29922"},playground:{icon:"🧪",description:"HTML · CSS · JS live playground with preview",color:"#facc15"},jwtinspector:{icon:"🔑",description:"Decode and inspect JWT tokens with expiry info",color:"#a371f7"},colorlab:{icon:"🎨",description:"Color picker with palettes, shades, and contrast",color:"#f78166"},cronbuilder:{icon:"⏰",description:"Visual cron expression builder with next runs",color:"#3fb950"},csvexplorer:{icon:"📊",description:"CSV viewer with sorting, filtering, and stats",color:"#58a6ff"},chartbuilder:{icon:"📉",description:"Build bar, line, pie, and scatter charts from CSV",color:"#d29922"},mermaidpad:{icon:"🧜",description:"Live Mermaid diagram playground",color:"#bc8cff"}},w=b.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,v=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${n.w.colors.mainBg};
  padding: 80px ${n.w.spacing.lg} ${n.w.spacing.xxl};
`,k=i.default.div`
  text-align: center;
  margin-bottom: 56px;
  animation: ${w} 0.4s ease both;
`,$=i.default.div`
  font-size: 40px;
  font-weight: 800;
  font-family: ${n.w.typography.fontFamily};
  color: ${n.w.colors.mainText};
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: ${n.w.spacing.sm};

  span {
    color: ${n.w.colors.accent};
  }
`,z=i.default.p`
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeMd};
  color: ${n.w.colors.mainTextMuted};
  margin: 0;
`,j=i.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: ${n.w.spacing.md};
  width: 100%;
  max-width: 960px;
`,B=i.default.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${n.w.spacing.lg};
  background: ${n.w.colors.surface};
  border: 1px solid ${n.w.colors.border};
  border-radius: ${n.w.borderRadius.lg};
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s, background 0.2s, transform 0.15s, box-shadow 0.2s;
  animation: ${w} 0.4s ease both;
  animation-delay: ${({index:e})=>40*e}ms;

  &:hover {
    border-color: ${({accentColor:e})=>e};
    background: ${n.w.colors.sidebarHover};
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`,M=i.default.div`
  font-size: 28px;
  line-height: 1;
  margin-bottom: ${n.w.spacing.sm};
`,S=i.default.div`
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w.colors.mainText};
  margin-bottom: ${n.w.spacing.xs};
`,A=i.default.div`
  font-family: ${n.w.typography.fontFamily};
  font-size: 12px;
  color: ${n.w.colors.mainTextMuted};
  line-height: 1.5;
  flex: 1;
`,R=i.default.div`
  margin-top: ${n.w.spacing.md};
  font-size: 12px;
  font-weight: 600;
  font-family: ${n.w.typography.fontFamily};
  color: ${({accentColor:e})=>e};
  letter-spacing: 0.02em;
`;function C({apps:e,onSelect:t}){return(0,l.jsxs)(v,{children:[(0,l.jsxs)(k,{children:[(0,l.jsxs)($,{children:["Atl",(0,l.jsx)("span",{children:"antis"})]}),(0,l.jsx)(z,{children:"A suite of tools — pick where you want to go"})]}),(0,l.jsx)(j,{children:e.map((e,o)=>{const r=y[e.id]??{icon:"🔲",description:"",color:n.w.colors.accent};return(0,l.jsxs)(B,{accentColor:r.color,index:o,onClick:()=>t(e),children:[(0,l.jsx)(M,{children:r.icon}),(0,l.jsx)(S,{children:e.label}),(0,l.jsx)(A,{children:r.description}),(0,l.jsx)(R,{accentColor:r.color,children:"Open →"})]},e.id)})})]})}const F=r.lazy(()=>o.e(280).then(o.t.bind(o,7280,23))),T=r.lazy(()=>o.e(997).then(o.t.bind(o,7997,23))),W=r.lazy(()=>o.e(305).then(o.t.bind(o,3305,23))),E=r.lazy(()=>o.e(829).then(o.t.bind(o,9829,23))),L=r.lazy(()=>o.e(585).then(o.t.bind(o,4585,23))),H=r.lazy(()=>o.e(699).then(o.t.bind(o,7699,23))),_=r.lazy(()=>o.e(614).then(o.t.bind(o,9614,23))),q=r.lazy(()=>o.e(871).then(o.t.bind(o,9871,23))),N=r.lazy(()=>o.e(745).then(o.t.bind(o,2745,23))),I=r.lazy(()=>o.e(776).then(o.t.bind(o,6776,23))),O=r.lazy(()=>o.e(937).then(o.t.bind(o,1937,23))),Y=r.lazy(()=>o.e(780).then(o.t.bind(o,1780,23))),V=r.lazy(()=>o.e(633).then(o.t.bind(o,8633,23))),P=r.lazy(()=>o.e(105).then(o.t.bind(o,8105,23))),D=r.lazy(()=>o.e(672).then(o.t.bind(o,7672,23))),J=r.lazy(()=>o.e(836).then(o.t.bind(o,5836,23))),X=r.lazy(()=>o.e(902).then(o.t.bind(o,3902,23))),Z=r.lazy(()=>o.e(867).then(o.t.bind(o,5867,23))),U=[{id:"markdown",label:"Blog",hash:"#/blog"},{id:"earth",label:"Earth",hash:"#/earth"},{id:"techscope",label:"TechScope",hash:"#/techscope"},{id:"citypulse",label:"CityPulse",hash:"#/citypulse"},{id:"devhub",label:"DevHub",hash:"#/devhub"},{id:"cosmos",label:"Cosmos",hash:"#/cosmos"},{id:"stockpulse",label:"StockPulse",hash:"#/stockpulse"},{id:"mdpad",label:"MD Editor",hash:"#/mdpad"},{id:"regexlab",label:"Regex Lab",hash:"#/regexlab"},{id:"jsonexplorer",label:"JSON Explorer",hash:"#/jsonexplorer"},{id:"codediff",label:"Code Diff",hash:"#/codediff"},{id:"playground",label:"Playground",hash:"#/playground"},{id:"jwtinspector",label:"JWT Inspector",hash:"#/jwtinspector"},{id:"colorlab",label:"Color Lab",hash:"#/colorlab"},{id:"cronbuilder",label:"Cron Builder",hash:"#/cronbuilder"},{id:"csvexplorer",label:"CSV Explorer",hash:"#/csvexplorer"},{id:"chartbuilder",label:"Chart Builder",hash:"#/chartbuilder"},{id:"mermaidpad",label:"Mermaid",hash:"#/mermaidpad"}],G=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${n.w.colors.mainBg};
  color: ${n.w.colors.mainTextMuted};
  font-family: ${n.w.typography.fontFamily};
  font-size: ${n.w.typography.fontSizeBase};
`,K=(0,i.default)(G)`
  flex-direction: column;
  gap: ${n.w.spacing.md};
`,Q=i.default.h2`
  color: ${n.w.colors.mainText};
  font-size: ${n.w.typography.fontSizeLg};
`;class ee extends r.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,l.jsxs)(K,{children:[(0,l.jsxs)(Q,{children:["Failed to load “",this.props.name,"”"]}),(0,l.jsx)("p",{children:"Make sure the remote app is running on the correct port."})]}):this.props.children}}function te(e){const t=e.replace(/^#\/?/,"");return t&&"home"!==t?t.startsWith("earth")?"earth":t.startsWith("techscope")?"techscope":t.startsWith("citypulse")?"citypulse":t.startsWith("devhub")?"devhub":t.startsWith("cosmos")?"cosmos":t.startsWith("stockpulse")?"stockpulse":t.startsWith("mdpad")?"mdpad":t.startsWith("regexlab")?"regexlab":t.startsWith("jsonexplorer")?"jsonexplorer":t.startsWith("codediff")?"codediff":t.startsWith("playground")?"playground":t.startsWith("blog")?"markdown":t.startsWith("jwtinspector")?"jwtinspector":t.startsWith("colorlab")?"colorlab":t.startsWith("cronbuilder")?"cronbuilder":t.startsWith("csvexplorer")?"csvexplorer":t.startsWith("chartbuilder")?"chartbuilder":t.startsWith("mermaidpad")?"mermaidpad":"home":"home"}function oe(){const[e,t]=(0,r.useState)(()=>te(window.location.hash));(0,r.useEffect)(()=>{const e=()=>t(te(window.location.hash));return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]);const o=(0,l.jsx)(x,{apps:U,activeAppId:e});return"home"===e?(0,l.jsx)(C,{apps:U,onSelect:e=>{window.location.hash=e.hash}}):(0,l.jsx)(ee,{name:e,children:(0,l.jsxs)(r.Suspense,{fallback:(0,l.jsx)(G,{children:"Loading…"}),children:["earth"===e&&(0,l.jsx)(T,{topBarRight:o}),"markdown"===e&&(0,l.jsx)(F,{topBarRight:o}),"techscope"===e&&(0,l.jsx)(W,{topBarRight:o}),"citypulse"===e&&(0,l.jsx)(E,{topBarRight:o}),"devhub"===e&&(0,l.jsx)(L,{topBarRight:o}),"cosmos"===e&&(0,l.jsx)(H,{topBarRight:o}),"stockpulse"===e&&(0,l.jsx)(_,{topBarRight:o}),"mdpad"===e&&(0,l.jsx)(q,{topBarRight:o}),"regexlab"===e&&(0,l.jsx)(N,{topBarRight:o}),"jsonexplorer"===e&&(0,l.jsx)(I,{topBarRight:o}),"codediff"===e&&(0,l.jsx)(O,{topBarRight:o}),"playground"===e&&(0,l.jsx)(Y,{topBarRight:o}),"jwtinspector"===e&&(0,l.jsx)(V,{topBarRight:o}),"colorlab"===e&&(0,l.jsx)(P,{topBarRight:o}),"cronbuilder"===e&&(0,l.jsx)(D,{topBarRight:o}),"csvexplorer"===e&&(0,l.jsx)(J,{topBarRight:o}),"chartbuilder"===e&&(0,l.jsx)(X,{topBarRight:o}),"mermaidpad"===e&&(0,l.jsx)(Z,{topBarRight:o})]})})}const re=document.getElementById("root");if(!re)throw new Error("Root element #root not found");(0,a.H)(re).render((0,l.jsx)(oe,{}))},2419(e,t,o){o.d(t,{A:()=>s});var r=o(7359);const a=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:s="",children:l,iconNode:d,...c},p)=>(0,r.createElement)("svg",{ref:p,...i,width:t,height:t,stroke:e,strokeWidth:n?24*Number(o)/Number(t):o,className:a("lucide",s),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),s=(e,t)=>{const o=(0,r.forwardRef)(({className:o,...i},s)=>{return(0,r.createElement)(n,{ref:s,iconNode:t,className:a(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...i});var l});return o.displayName=`${e}`,o}},255(e,t,o){o.d(t,{A:()=>r});const r=(0,o(2419).A)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},8997(e,t,o){var r=o(8991);t.H=r.createRoot,r.hydrateRoot},2921(e,t,o){var r=o(7359),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,i={},d=null,c=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},5723(e,t,o){e.exports=o(2921)}}]);
//# sourceMappingURL=462.0fd6ac6c65a9f74b4f1e.js.map