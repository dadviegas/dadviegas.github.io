/*! For license information please see 771.ab096a6d3c4d8d3c02fb.js.LICENSE.txt */
"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[771],{914(e,t,o){o.d(t,{FlyoutPanel:()=>x});var r=o(359),a=o(233),i=o(207),n=o(255),s=o(217),l=o(959),d=o(550),c=o(723);const p=i.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,f=a.default.div`
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
  font-family: ${s.w.typography.fontFamily};
`,y=a.default.button`
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
`;function u({iconKey:e}){const t=e?d.t[e]??n.A:n.A;return(0,c.jsx)(t,{size:14,strokeWidth:1.75})}function b({entries:e,activeId:t,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(b,{entries:e.children,activeId:t,onSelect:o})},e.id):(0,c.jsxs)(y,{active:t===e.id,onClick:()=>o(e),children:[(0,c.jsx)(u,{iconKey:e.icon}),e.name]},e.id))})}function x({activeId:e}){const{flyout:t,scheduleFlyoutClose:o,cancelFlyoutClose:r}=(0,l.c)();if(!t)return null;const a=t.entry.icon?d.t[t.entry.icon]??n.A:n.A;return(0,c.jsxs)(f,{anchorY:t.anchorY,onMouseEnter:r,onMouseLeave:o,children:[(0,c.jsxs)(h,{children:[(0,c.jsx)(a,{size:13,strokeWidth:2}),t.entry.name]}),(0,c.jsx)(b,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),o()}})]})}},959(e,t,o){o.d(t,{c:()=>i});var r=o(359);const a=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,r.useContext)(a)},550(e,t,o){o.d(t,{t:()=>w});var r=o(419);const a=(0,r.A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),i=(0,r.A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),n=(0,r.A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),s=(0,r.A)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),l=(0,r.A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),d=(0,r.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),c=(0,r.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),p=(0,r.A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),f=(0,r.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),h=(0,r.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),y=(0,r.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),u=(0,r.A)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),b=(0,r.A)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var x=o(255);const g=(0,r.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),m=(0,r.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),w={"book-open":a,"file-text":i,package:n,compass:s,"git-branch":l,github:d,terminal:c,zap:p,bot:f,lightbulb:h,"message-square":y,wrench:u,"layout-grid":b,file:x.A,folder:g,"map-pin":m}},807(e,t,o){o.d(t,{w4:()=>r.w});var r=o(217),a=(o(359),o(233));o(723),a.default.button`
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
`,o(959);const i="260px",n="56px";a.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${r.w.colors.sidebarBg};
  border-bottom: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,a.default.div`
  width: ${n};
  min-width: ${n};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
`,a.default.button`
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
`,a.default.button`
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
`,a.default.div`
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
`,a.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${r.w.spacing.lg};
`,a.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,a.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.mainText};
  overflow: hidden;
`,a.default.aside`
  width: ${({collapsed:e})=>e?n:i};
  min-width: ${({collapsed:e})=>e?n:i};
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
`,a.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,a.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,o(550),a.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,a.default.div`
  overflow: hidden;
`,a.default.div`
  padding-left: ${r.w.spacing.md};
`,a.default.div`
  display: flex;
  flex-direction: column;
`,a.default.button`
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
`,a.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,a.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,a.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${r.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,a.default.button`
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
`;const s=o(207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;a.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${s} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,o(914)},217(e,t,o){o.d(t,{w:()=>r});const r={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},336(e,t,o){o.d(t,{k:()=>r});const r=[{label:"GitHub API response",json:JSON.stringify({id:1296269,name:"atlantis",full_name:"octocat/atlantis",owner:{login:"octocat",id:1,type:"User"},private:!1,description:"A monorepo of mini web apps",fork:!1,created_at:"2024-01-15T12:00:00Z",stargazers_count:42,watchers_count:42,language:"TypeScript",topics:["react","typescript","webpack","module-federation"],license:{key:"mit",name:"MIT License"}},null,2)},{label:"Users list",json:JSON.stringify({total:3,page:1,users:[{id:1,name:"Alice",email:"alice@example.com",role:"admin",active:!0,score:98.5},{id:2,name:"Bob",email:"bob@example.com",role:"user",active:!0,score:74.2},{id:3,name:"Charlie",email:"charlie@example.com",role:"user",active:!1,score:61}],meta:{hasNext:!1,hasPrev:!1}},null,2)},{label:"Config file",json:JSON.stringify({app:{name:"Atlantis",version:"1.0.0",env:"production"},server:{host:"0.0.0.0",port:3e3,cors:!0},database:{primary:{host:"db.example.com",port:5432,name:"atlantis_prod"},replica:{host:"replica.example.com",port:5432,name:"atlantis_prod"}},features:{darkMode:!0,analytics:!1,betaFeatures:["newDashboard","aiSuggestions"]},limits:{maxUploadMB:100,rateLimit:1e3,timeout:3e4}},null,2)},{label:"Package.json",json:JSON.stringify({name:"@atlantis/shell",version:"1.0.0",scripts:{dev:"webpack serve",build:"webpack",typecheck:"tsc --noEmit"},dependencies:{"@atlantis/shared":"workspace:*",react:"^18.3.1","react-dom":"^18.3.1"},devDependencies:{typescript:"^5.7.3",webpack:"^5.97.1"}},null,2)},{label:"Nested deep object",json:JSON.stringify({level1:{level2:{level3:{level4:{value:"deep nested value",array:[1,2,{nested:!0,items:[null,!1,"string"]}]}}},siblings:[{id:"a",data:[1,2,3]},{id:"b",data:[4,5,6]}]},metadata:{created:"2024-01-01",tags:["a","b","c"],active:null}},null,2)}]},54(e,t,o){function r(e,t){if(!(t=t.trim())||"$"===t)return[{path:"$",value:e}];const o=[];return function e(t,r,a){if(!r)return void o.push({path:a,value:t});if(r.startsWith("..")){const o=r.slice(2);if(e(t,"."+o,a),Array.isArray(t))t.forEach((t,r)=>e(t,".."+o,`${a}[${r}]`));else if(null!==t&&"object"==typeof t)for(const r of Object.keys(t))e(t[r],".."+o,`${a}.${r}`);return}const i=r.match(/^\.(\*|[^.[*\]]+)(.*)/s);if(i){const[,o,r]=i;if("*"===o){if(Array.isArray(t))t.forEach((t,o)=>e(t,r,`${a}[${o}]`));else if(null!==t&&"object"==typeof t)for(const o of Object.keys(t))e(t[o],r,`${a}.${o}`)}else if(null===t||"object"!=typeof t||Array.isArray(t))Array.isArray(t)&&t.forEach((t,i)=>{if(null!==t&&"object"==typeof t&&!Array.isArray(t)){const n=t[o];void 0!==n&&e(n,r,`${a}[${i}].${o}`)}});else{const i=t[o];void 0!==i&&e(i,r,`${a}.${o}`)}return}const n=r.match(/^\[(\*|\d+|'[^']*'|"[^"]*")\](.*)/s);if(n){const[,o,r]=n;if("*"===o){if(Array.isArray(t))t.forEach((t,o)=>e(t,r,`${a}[${o}]`));else if(null!==t&&"object"==typeof t)for(const o of Object.keys(t))e(t[o],r,`${a}['${o}']`)}else if(/^\d+$/.test(o)){const i=parseInt(o,10);Array.isArray(t)&&i<t.length&&e(t[i],r,`${a}[${i}]`)}else{const i=o.slice(1,-1);if(null!==t&&"object"==typeof t&&!Array.isArray(t)){const o=t[i];void 0!==o&&e(o,r,`${a}['${i}']`)}}return}}(e,t.startsWith("$")?t.slice(1):t,"$"),o}o.d(t,{Y:()=>r})},419(e,t,o){o.d(t,{A:()=>s});var r=o(359);const a=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:s="",children:l,iconNode:d,...c},p)=>(0,r.createElement)("svg",{ref:p,...i,width:t,height:t,stroke:e,strokeWidth:n?24*Number(o)/Number(t):o,className:a("lucide",s),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),s=(e,t)=>{const o=(0,r.forwardRef)(({className:o,...i},s)=>{return(0,r.createElement)(n,{ref:s,iconNode:t,className:a(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...i});var l});return o.displayName=`${e}`,o}},609(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},679(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},753(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},320(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},255(e,t,o){o.d(t,{A:()=>r});const r=(0,o(419).A)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},921(e,t,o){var r=o(359),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,i={},d=null,c=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},723(e,t,o){e.exports=o(921)}}]);
//# sourceMappingURL=771.ab096a6d3c4d8d3c02fb.js.map