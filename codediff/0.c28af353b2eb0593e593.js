/*! For license information please see 0.c28af353b2eb0593e593.js.LICENSE.txt */
"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[0],{914(e,n,t){t.d(n,{FlyoutPanel:()=>y});var o=t(359),r=t(233),a=t(207),i=t(255),s=t(217),l=t(959),d=t(725),c=t(723);const p=a.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,f=r.default.div`
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
`,h=r.default.div`
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
`,u=r.default.button`
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
`;function g({iconKey:e}){const n=e?d.t[e]??i.A:i.A;return(0,c.jsx)(n,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:n,onSelect:t}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(o.Fragment,{children:(0,c.jsx)(x,{entries:e.children,activeId:n,onSelect:t})},e.id):(0,c.jsxs)(u,{active:n===e.id,onClick:()=>t(e),children:[(0,c.jsx)(g,{iconKey:e.icon}),e.name]},e.id))})}function y({activeId:e}){const{flyout:n,scheduleFlyoutClose:t,cancelFlyoutClose:o}=(0,l.c)();if(!n)return null;const r=n.entry.icon?d.t[n.entry.icon]??i.A:i.A;return(0,c.jsxs)(f,{anchorY:n.anchorY,onMouseEnter:o,onMouseLeave:t,children:[(0,c.jsxs)(h,{children:[(0,c.jsx)(r,{size:13,strokeWidth:2}),n.entry.name]}),(0,c.jsx)(x,{entries:n.entry.children??[],activeId:e,onSelect:e=>{n.onSelect(e),t()}})]})}},959(e,n,t){t.d(n,{c:()=>a});var o=t(359);const r=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),a=()=>(0,o.useContext)(r)},725(e,n,t){t.d(n,{t:()=>w});var o=t(419);const r=(0,o.A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),a=(0,o.A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),i=(0,o.A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),s=(0,o.A)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var l=t(946);const d=(0,o.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),c=(0,o.A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),p=(0,o.A)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),f=(0,o.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),h=(0,o.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),u=(0,o.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),g=(0,o.A)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),x=(0,o.A)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var y=t(255);const m=(0,o.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),b=(0,o.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),w={"book-open":r,"file-text":a,package:i,compass:s,"git-branch":l.A,github:d,terminal:c,zap:p,bot:f,lightbulb:h,"message-square":u,wrench:g,"layout-grid":x,file:y.A,folder:m,"map-pin":b}},807(e,n,t){t.d(n,{w4:()=>o.w});var o=t(217),r=(t(359),t(233));t(723),r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 ${o.w.spacing.sm};
  background: ${o.w.colors.surface};
  border: 1px solid ${o.w.colors.border};
  border-radius: ${o.w.borderRadius.md};
  color: ${o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${o.w.colors.sidebarHover};
    border-color: ${o.w.colors.accent};
  }
`,r.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${o.w.colors.surface};
  border: 1px solid ${o.w.colors.border};
  border-radius: ${o.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${o.w.spacing.sm};
  background: ${({active:e})=>e?o.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:e})=>e?o.w.colors.accent:o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`,r.default.div`
  position: relative;
`,r.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?o.w.colors.accent:o.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`,t(959);const a="260px",i="56px";r.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${o.w.colors.sidebarBg};
  border-bottom: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,r.default.div`
  width: ${i};
  min-width: ${i};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
`,r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${o.w.borderRadius.md};
  cursor: pointer;
  color: ${o.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${o.w.colors.sidebarHover};
    color: ${o.w.colors.sidebarText};
  }
`,r.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${o.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${o.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${o.w.colors.accent}; }
`,r.default.div`
  font-size: ${o.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  padding-left: ${o.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${o.w.spacing.sm};
    color: ${o.w.colors.border};
  }
`,r.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${o.w.spacing.lg};
`,r.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,r.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${o.w.colors.mainBg};
  font-family: ${o.w.typography.fontFamily};
  color: ${o.w.colors.mainText};
  overflow: hidden;
`,r.default.aside`
  width: ${({collapsed:e})=>e?i:a};
  min-width: ${({collapsed:e})=>e?i:a};
  background: ${o.w.colors.sidebarBg};
  border-right: 1px solid ${o.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${o.w.breakpoints.md}) {
    display: none;
  }
`,r.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,r.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,t(725),r.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,r.default.div`
  overflow: hidden;
`,r.default.div`
  padding-left: ${o.w.spacing.md};
`,r.default.div`
  display: flex;
  flex-direction: column;
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${o.w.spacing.sm} ${o.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":o.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${o.w.colors.sidebarTextMuted};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${o.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${o.w.colors.sidebarText};
    background: ${o.w.colors.sidebarHover};
  }
`,r.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,r.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,r.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${o.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${o.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?o.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?o.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?o.w.colors.sidebarActive:o.w.colors.sidebarText};
  font-size: ${o.w.typography.fontSizeBase};
  font-family: ${o.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${o.w.borderRadius.sm} ${o.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`;const s=t(207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;r.default.div`
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
`,r.default.span`
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
`,t(914)},217(e,n,t){t.d(n,{w:()=>o});const o={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},820(e,n,t){function o(e,n,t,r,a){return 0===r&&0===a?[]:r>0&&a>0&&n[r-1]===t[a-1]?[...o(e,n,t,r-1,a-1),{type:"equal",oldLine:n[r-1],newLine:t[a-1],oldNum:r,newNum:a}]:a>0&&(0===r||e[r][a-1]>=e[r-1][a])?[...o(e,n,t,r,a-1),{type:"insert",oldLine:null,newLine:t[a-1],oldNum:null,newNum:a}]:[...o(e,n,t,r-1,a),{type:"delete",oldLine:n[r-1],newLine:null,oldNum:r,newNum:null}]}function r(e,n){const t=e.split("\n"),r=n.split("\n");if(t.length>2e3||r.length>2e3)return function(e,n){const t=[],o=Math.max(e.length,n.length);for(let r=0;r<o;r++)r>=e.length?t.push({type:"insert",oldLine:null,newLine:n[r],oldNum:null,newNum:r+1}):r>=n.length?t.push({type:"delete",oldLine:e[r],newLine:null,oldNum:r+1,newNum:null}):e[r]===n[r]?t.push({type:"equal",oldLine:e[r],newLine:n[r],oldNum:r+1,newNum:r+1}):t.push({type:"replace",oldLine:e[r],newLine:n[r],oldNum:r+1,newNum:r+1});return t}(t,r);const a=function(e,n){const t=e.length,o=n.length,r=Array.from({length:t+1},()=>new Array(o+1).fill(0));for(let a=1;a<=t;a++)for(let t=1;t<=o;t++)e[a-1]===n[t-1]?r[a][t]=r[a-1][t-1]+1:r[a][t]=Math.max(r[a-1][t],r[a][t-1]);return r}(t,r),i=o(a,t,r,t.length,r.length),s=[];let l=0;for(;l<i.length;)"delete"===i[l].type&&l+1<i.length&&"insert"===i[l+1].type?(s.push({type:"replace",oldLine:i[l].oldLine,newLine:i[l+1].newLine,oldNum:i[l].oldNum,newNum:i[l+1].newNum}),l+=2):(s.push(i[l]),l++);return s}function a(e){let n=0,t=0,o=0;for(const r of e)"insert"===r.type?n++:"delete"===r.type?t++:"replace"===r.type&&o++;return{added:n,removed:t,changed:o}}t.d(n,{P:()=>r,h:()=>a})},336(e,n,t){t.d(n,{k:()=>o});const o=[{label:"TypeScript function refactor",original:"function fetchUser(id) {\n  return fetch('/api/users/' + id)\n    .then(res => res.json())\n    .then(data => {\n      return data;\n    })\n    .catch(err => {\n      console.log('Error:', err);\n    });\n}\n\nfunction updateUser(id, data) {\n  return fetch('/api/users/' + id, {\n    method: 'PUT',\n    body: JSON.stringify(data)\n  });\n}",modified:"async function fetchUser(id: string): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n}\n\nasync function updateUser(id: string, data: Partial<User>): Promise<void> {\n  const res = await fetch(`/api/users/${id}`, {\n    method: 'PUT',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(data),\n  });\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n}"},{label:"CSS to Tailwind migration",original:".card {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n\n.card-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 8px;\n}\n\n.card-body {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n}",modified:'/* Using Tailwind utility classes */\n/* <div class="flex flex-col bg-white border border-gray-200 rounded-lg p-4 shadow-sm"> */\n\n/* .card-title → */\n/* <h2 class="text-lg font-semibold text-gray-900 mb-2"> */\n\n/* .card-body → */\n/* <p class="text-sm text-gray-500 leading-relaxed"> */\n\n/* Removed all custom CSS — handled by Tailwind */'},{label:"Config file update",original:'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "scripts": {\n    "start": "node index.js",\n    "test": "jest"\n  },\n  "dependencies": {\n    "express": "^4.17.1",\n    "lodash": "^4.17.21"\n  }\n}',modified:'{\n  "name": "my-app",\n  "version": "1.1.0",\n  "scripts": {\n    "start": "node dist/index.js",\n    "dev": "tsx watch src/index.ts",\n    "build": "tsc",\n    "test": "vitest"\n  },\n  "dependencies": {\n    "express": "^4.18.2"\n  },\n  "devDependencies": {\n    "typescript": "^5.0.0",\n    "tsx": "^4.0.0",\n    "vitest": "^1.0.0"\n  }\n}'},{label:"Python class refactor",original:"class Database:\n    def __init__(self):\n        self.connection = None\n\n    def connect(self, host, port, name):\n        self.connection = create_connection(host, port, name)\n\n    def query(self, sql):\n        cursor = self.connection.cursor()\n        cursor.execute(sql)\n        return cursor.fetchall()\n\n    def close(self):\n        if self.connection:\n            self.connection.close()",modified:"from contextlib import contextmanager\nfrom dataclasses import dataclass\n\n@dataclass\nclass DatabaseConfig:\n    host: str\n    port: int\n    name: str\n\nclass Database:\n    def __init__(self, config: DatabaseConfig):\n        self.config = config\n        self._connection = None\n\n    @contextmanager\n    def connect(self):\n        self._connection = create_connection(\n            self.config.host,\n            self.config.port,\n            self.config.name,\n        )\n        try:\n            yield self\n        finally:\n            self._connection.close()\n            self._connection = None\n\n    def query(self, sql: str, params: tuple = ()) -> list:\n        cursor = self._connection.cursor()\n        cursor.execute(sql, params)\n        return cursor.fetchall()"}]},419(e,n,t){t.d(n,{A:()=>s});var o=t(359);const r=(...e)=>e.filter((e,n,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===n).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(0,o.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:d,...c},p)=>(0,o.createElement)("svg",{ref:p,...a,width:n,height:n,stroke:e,strokeWidth:i?24*Number(t)/Number(n):t,className:r("lucide",s),...c},[...d.map(([e,n])=>(0,o.createElement)(e,n)),...Array.isArray(l)?l:[l]])),s=(e,n)=>{const t=(0,o.forwardRef)(({className:t,...a},s)=>{return(0,o.createElement)(i,{ref:s,iconNode:n,className:r(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,t),...a});var l});return t.displayName=`${e}`,t}},679(e,n,t){t.d(n,{A:()=>o});const o=(0,t(419).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},255(e,n,t){t.d(n,{A:()=>o});const o=(0,t(419).A)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},946(e,n,t){t.d(n,{A:()=>o});const o=(0,t(419).A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},921(e,n,t){var o=t(359),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,a={},d=null,c=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,o)&&!l.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:c,props:a,_owner:s.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},723(e,n,t){e.exports=t(921)}}]);
//# sourceMappingURL=0.c28af353b2eb0593e593.js.map