"use strict";(self.webpackChunk_atlantis_mdpad=self.webpackChunk_atlantis_mdpad||[]).push([[5773],{74914(e,n,o){o.d(n,{FlyoutPanel:()=>m});var r=o(27359),t=o(53233),a=o(77207),i=o(20255),s=o(217),l=o(15959),d=o(65185),c=o(65723);const p=a.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=t.default.div`
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
`,f=t.default.div`
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
`,g=t.default.button`
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
`;function b({iconKey:e}){const n=e?d.t[e]??i.A:i.A;return(0,c.jsx)(n,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:n,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(x,{entries:e.children,activeId:n,onSelect:o})},e.id):(0,c.jsxs)(g,{active:n===e.id,onClick:()=>o(e),children:[(0,c.jsx)(b,{iconKey:e.icon}),e.name]},e.id))})}function m({activeId:e}){const{flyout:n,scheduleFlyoutClose:o,cancelFlyoutClose:r}=(0,l.c)();if(!n)return null;const t=n.entry.icon?d.t[n.entry.icon]??i.A:i.A;return(0,c.jsxs)(u,{anchorY:n.anchorY,onMouseEnter:r,onMouseLeave:o,children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(t,{size:13,strokeWidth:2}),n.entry.name]}),(0,c.jsx)(x,{entries:n.entry.children??[],activeId:e,onSelect:e=>{n.onSelect(e),o()}})]})}},15959(e,n,o){o.d(n,{c:()=>a});var r=o(27359);const t=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),a=()=>(0,r.useContext)(t)},65185(e,n,o){o.d(n,{t:()=>w});var r=o(37901),t=o(22164),a=o(1837),i=o(35751),s=o(20255),l=o(69633),d=o(92946),c=o(40822),p=o(37032),u=o(8218),f=o(15553),g=o(72820),b=o(66673),x=o(83249),m=o(2932),h=o(57230);const w={"book-open":r.A,"file-text":i.A,package:b.A,compass:a.A,"git-branch":d.A,github:c.A,terminal:x.A,zap:h.A,bot:t.A,lightbulb:u.A,"message-square":g.A,wrench:m.A,"layout-grid":p.A,file:s.A,folder:l.A,"map-pin":f.A}},3188(e,n,o){o.d(n,{w4:()=>r.w});var r=o(217),t=(o(27359),o(53233));o(65723),t.default.button`
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
`,t.default.div`
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
`,t.default.button`
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
`,t.default.div`
  position: relative;
`,t.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?r.w.colors.accent:r.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`,o(15959);const a="260px",i="56px";t.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${r.w.colors.sidebarBg};
  border-bottom: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,t.default.div`
  width: ${i};
  min-width: ${i};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${r.w.colors.sidebarBorder};
  flex-shrink: 0;
`,t.default.button`
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
`,t.default.button`
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
`,t.default.div`
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
`,t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${r.w.spacing.lg};
`,t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${r.w.colors.mainBg};
  font-family: ${r.w.typography.fontFamily};
  color: ${r.w.colors.mainText};
  overflow: hidden;
`,t.default.aside`
  width: ${({collapsed:e})=>e?i:a};
  min-width: ${({collapsed:e})=>e?i:a};
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
`,t.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,t.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,o(65185),t.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,t.default.div`
  overflow: hidden;
`,t.default.div`
  padding-left: ${r.w.spacing.md};
`,t.default.div`
  display: flex;
  flex-direction: column;
`,t.default.button`
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
`,t.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,t.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,t.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${r.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,t.default.button`
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
`;const s=o(77207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;t.default.div`
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
`,t.default.span`
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
`,o(74914)},217(e,n,o){o.d(n,{w:()=>r});const r={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},78967(e,n,o){o.d(n,{M:()=>b}),o(27359);var r=o(53233),t=o(15496),a=o(51530),i=o(3188),s=o(65723);const l=r.default.div`
  display: flex;
  flex-direction: column;
  flex: ${({collapsed:e})=>e?"0 0 0px":"1"};
  min-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
`,d=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${i.w4.spacing.md};
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,c=r.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
`,p=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.sidebarText};
  }
`,u=r.default.textarea`
  flex: 1;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  padding: ${i.w4.spacing.lg};
  background: ${i.w4.colors.mainBg};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  line-height: 1.7;
  tab-size: 2;
  caret-color: ${i.w4.colors.accent};

  &::placeholder {
    color: ${i.w4.colors.sidebarTextMuted};
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${i.w4.colors.border};
    border-radius: 3px;
  }
`,f=r.default.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${i.w4.borderRadius.md} ${i.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.sidebarText};
  }
`,g=r.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;function b({value:e,onChange:n,collapsed:o,onToggleCollapse:r,scrollRef:i,onScroll:b}){return o?(0,s.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,s.jsxs)(f,{onClick:r,title:"Show editor",children:[(0,s.jsx)(a.A,{size:14}),(0,s.jsx)(g,{children:"Editor"})]})}):(0,s.jsxs)(l,{collapsed:!1,children:[(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{children:"Editor"}),(0,s.jsx)(p,{onClick:r,title:"Collapse editor",children:(0,s.jsx)(t.A,{size:15})})]}),(0,s.jsx)(u,{ref:i,value:e,onChange:e=>n(e.target.value),onScroll:b,placeholder:"Write markdown here…",spellCheck:!1})]})}},61326(e,n,o){o.d(n,{H:()=>m});var r=o(27359),t=o(53233),a=o(37901),i=o(70679),s=o(3188),l=o(9336),d=o(65723);const c=t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    border-color: ${s.w4.colors.accent};
  }
`,p=t.default.div`
  display: ${({open:e})=>e?"block":"none"};
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 240px;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,u=t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
`,f=t.default.button`
  display: block;
  width: 100%;
  padding: 8px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.12s;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
  }
`,g=t.default.div`
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 500;
`,b=t.default.div`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  margin-top: 1px;
`,x=t.default.div`
  position: relative;
`;function m({onSelect:e}){const[n,o]=(0,r.useState)(!1),t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!n)return;const e=e=>{t.current&&!t.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[n]),(0,d.jsxs)(x,{ref:t,children:[(0,d.jsxs)(c,{onClick:()=>o(e=>!e),children:[(0,d.jsx)(a.A,{size:14}),"Examples",(0,d.jsx)(i.A,{size:13,style:{marginLeft:2}})]}),(0,d.jsxs)(p,{open:n,children:[(0,d.jsx)(u,{children:"Load an example"}),l.k.map(n=>(0,d.jsxs)(f,{onClick:()=>{e(n.content),o(!1)},children:[(0,d.jsx)(g,{children:n.label}),(0,d.jsx)(b,{children:n.description})]},n.id))]})]})}},89654(e,n,o){o.d(n,{r:()=>_});var r=o(27359),t=o(28976),a=o(18055),i=o(14944),s=o(39895),l=o(6930),d=(o(72737),o(53233)),c=o(49881),p=o(13045),u=o(3188),f=o(65723);const g=d.default.div`
  background: ${u.w4.colors.codeBg};
  border: 1px solid ${u.w4.colors.codeBorder};
  border-radius: ${u.w4.borderRadius.md};
  padding: ${u.w4.spacing.lg};
  margin: ${u.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;

  svg {
    max-width: 100%;
  }
`,b=d.default.div`
  color: #f85149;
  font-family: ${u.w4.typography.fontFamilyMono};
  font-size: ${u.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let x=!1;function m({code:e}){const n=(0,r.useRef)(null),[t,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let r=!1;return a(null),async function(){const t=(await o.e(774).then(o.bind(o,30774))).default;if(x||(t.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:u.w4.colors.codeBg,primaryColor:u.w4.colors.accent,primaryTextColor:u.w4.colors.mainText,lineColor:u.w4.colors.border}}),x=!0),n.current&&!r)try{const o=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:a}=await t.render(o,e);!r&&n.current&&(n.current.innerHTML=a)}catch(e){r||a(e instanceof Error?e.message:String(e))}}(),()=>{r=!0}},[e]),t?(0,f.jsx)(g,{children:(0,f.jsxs)(b,{children:["Mermaid error: ",t]})}):(0,f.jsx)(g,{ref:n})}var h=o(68383),w=o(21426),y=o(25609),$=o(20320);const v=d.default.div`
  margin: ${u.w4.spacing.lg} 0;
  border-radius: ${u.w4.borderRadius.md};
  border: 1px solid ${u.w4.colors.codeBorder};
  overflow: hidden;
`,k=d.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${u.w4.colors.codeBorder};
`,T=d.default.span`
  font-family: ${u.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${u.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,S=d.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":u.w4.colors.border};
  border-radius: ${u.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":u.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${u.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: ${u.w4.colors.sidebarText};
    border-color: ${u.w4.colors.sidebarText};
  }
`,z={...w.A,'pre[class*="language-"]':{...w.A['pre[class*="language-"]'],background:u.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...w.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function j({lang:e="text",code:n}){const[o,t]=(0,r.useState)(!1),a=n.split("\n").length>8;return(0,f.jsxs)(v,{children:[(0,f.jsxs)(k,{children:[(0,f.jsx)(T,{children:e}),(0,f.jsxs)(S,{copied:o,onClick:()=>{navigator.clipboard.writeText(n).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})},children:[o?(0,f.jsx)(y.A,{size:12}):(0,f.jsx)($.A,{size:12}),o?"Copied!":"Copy"]})]}),(0,f.jsx)(h.A,{language:e,style:z,showLineNumbers:a,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:u.w4.colors.codeBg},wrapLongLines:!1,children:n})]})}function A(){return e=>{!function e(n){if("blockquote"===n.type){const e=n.children?.[0];if("paragraph"===e?.type){const o=e.children?.[0];if("text"===o?.type){const r=o.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);r&&(o.value=o.value.slice(r[0].length),o.value.trim()||1!==e.children.length||n.children.shift(),n.data=n.data??{},n.data.hName="div",n.data.hProperties={"data-callout":r[1].toUpperCase()})}}}n.children?.forEach(e)}(e)}}const M=d.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: ${u.w4.colors.mainBg};
`,B=d.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${u.w4.spacing.md};
  height: 36px;
  background: ${u.w4.colors.sidebarBg};
  border-bottom: 1px solid ${u.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,C=d.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${u.w4.colors.sidebarTextMuted};
  font-family: ${u.w4.typography.fontFamily};
`,R=d.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${u.w4.borderRadius.sm};
  cursor: pointer;
  color: ${u.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${u.w4.colors.sidebarHover};
    color: ${u.w4.colors.sidebarText};
  }
`,F=d.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${u.w4.colors.border};
    border-radius: 3px;
  }
`,E=d.default.article`
  max-width: 780px;
  margin: 0 auto;
  padding: ${u.w4.spacing.xl} ${u.w4.spacing.xxl};
  color: ${u.w4.colors.mainText};
  font-family: ${u.w4.typography.fontFamily};
  font-size: ${u.w4.typography.fontSizeMd};
  line-height: ${u.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${u.w4.spacing.xl} 0 ${u.w4.spacing.md};
    color: ${u.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    &:first-of-type { margin-top: 0; }
  }
  h1 { font-size: ${u.w4.typography.fontSizeXl}; border-bottom: 1px solid ${u.w4.colors.border}; padding-bottom: ${u.w4.spacing.sm}; }
  h2 { font-size: ${u.w4.typography.fontSizeLg}; border-bottom: 1px solid ${u.w4.colors.border}; padding-bottom: ${u.w4.spacing.xs}; }
  h3 { font-size: ${u.w4.typography.fontSizeMd}; }

  p { margin: ${u.w4.spacing.md} 0; }

  a {
    color: ${u.w4.colors.accent};
    text-decoration: none;
    &:hover { text-decoration: underline; color: ${u.w4.colors.accentHover}; }
  }

  ul, ol { margin: ${u.w4.spacing.md} 0; padding-left: ${u.w4.spacing.xl}; }
  li { margin: ${u.w4.spacing.xs} 0; }

  /* Task list checkboxes */
  li input[type="checkbox"] {
    margin-right: 6px;
    accent-color: ${u.w4.colors.accent};
  }

  blockquote {
    border-left: 3px solid ${u.w4.colors.border};
    margin: ${u.w4.spacing.lg} 0;
    padding: ${u.w4.spacing.sm} ${u.w4.spacing.lg};
    background: ${u.w4.colors.surface};
    color: ${u.w4.colors.mainTextMuted};
    border-radius: 0 ${u.w4.borderRadius.sm} ${u.w4.borderRadius.sm} 0;
  }

  /* Callout variants */
  div[data-callout] {
    border-radius: ${u.w4.borderRadius.md};
    padding: ${u.w4.spacing.md} ${u.w4.spacing.lg};
    margin: ${u.w4.spacing.lg} 0;
    border-left: 4px solid;
    font-size: ${u.w4.typography.fontSizeBase};

    &::before {
      display: block;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: ${u.w4.spacing.xs};
    }
  }
  div[data-callout="NOTE"]      { background: rgba(56,139,253,0.1);  border-color: #388bfd; &::before { content: "Note";      color: #388bfd; } }
  div[data-callout="TIP"]       { background: rgba(63,185,80,0.1);   border-color: #3fb950; &::before { content: "Tip";       color: #3fb950; } }
  div[data-callout="WARNING"]   { background: rgba(210,153,34,0.1);  border-color: #d29922; &::before { content: "Warning";   color: #d29922; } }
  div[data-callout="CAUTION"]   { background: rgba(248,81,73,0.1);   border-color: #f85149; &::before { content: "Caution";   color: #f85149; } }
  div[data-callout="IMPORTANT"] { background: rgba(163,113,247,0.1); border-color: #a371f7; &::before { content: "Important"; color: #a371f7; } }

  code {
    font-family: ${u.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${u.w4.colors.codeBg};
    border: 1px solid ${u.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${u.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${u.w4.spacing.lg} 0; font-size: ${u.w4.typography.fontSizeBase}; }
  th, td { padding: ${u.w4.spacing.sm} ${u.w4.spacing.md}; border: 1px solid ${u.w4.colors.border}; text-align: left; }
  th { background: ${u.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${u.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${u.w4.colors.border}; margin: ${u.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${u.w4.borderRadius.md}; }

  /* KaTeX display math spacing */
  .math-display {
    overflow-x: auto;
    padding: ${u.w4.spacing.md} 0;
  }
`,P=d.default.button`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${u.w4.colors.sidebarBg};
  border: 1px solid ${u.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${u.w4.borderRadius.md} 0 0 ${u.w4.borderRadius.md};
  cursor: pointer;
  color: ${u.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  align-self: center;

  &:hover {
    background: ${u.w4.colors.sidebarHover};
    color: ${u.w4.colors.sidebarText};
  }
`,N=d.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${u.w4.typography.fontFamily};
  writing-mode: vertical-rl;
`;function _({content:e,collapsed:n,onToggleCollapse:o,scrollRef:r,onScroll:d}){return n?(0,f.jsxs)(P,{onClick:o,title:"Show preview",children:[(0,f.jsx)(c.A,{size:14}),(0,f.jsx)(N,{children:"Preview"})]}):(0,f.jsxs)(M,{children:[(0,f.jsxs)(B,{children:[(0,f.jsx)(C,{children:"Preview"}),(0,f.jsx)(R,{onClick:o,title:"Collapse preview",children:(0,f.jsx)(p.A,{size:15})})]}),(0,f.jsx)(F,{ref:r,onScroll:d,children:(0,f.jsx)(E,{children:(0,f.jsx)(t.oz,{remarkPlugins:[a.A,i.A,A],rehypePlugins:[s.A,l.A],components:{div({node:e,children:n,...o}){const r=o["data-callout"];return r?(0,f.jsx)("div",{"data-callout":r,children:n}):(0,f.jsx)("div",{...o,children:n})},pre:({children:e})=>(0,f.jsx)(f.Fragment,{children:e}),code({className:e,children:n}){const o=/language-(\w+)/.exec(e??"")?.[1],r=String(n).replace(/\n$/,"");return"mermaid"===o?(0,f.jsx)(m,{code:r}):o||r.includes("\n")?(0,f.jsx)(j,{lang:o,code:r}):(0,f.jsx)("code",{className:e,children:n})}},children:e})})})]})}},9336(e,n,o){o.d(n,{O:()=>t,k:()=>r});const r=[{id:"showcase",label:"Full Showcase",description:"All supported features in one document",content:"# Markdown Editor — Feature Showcase\n\nWelcome! This editor supports **rich markdown** with live preview.\nUse the collapse buttons `◀` / `▶` to hide the editor or preview pane.\n\n---\n\n## Text Formatting\n\nYou can write **bold**, *italic*, ~~strikethrough~~, and `inline code`.\nLinks work too: [Atlantis](https://github.com) opens in a new tab.\n\n> [!NOTE]\n> This is a GitHub-style callout. Supported types: NOTE, TIP, WARNING, CAUTION, IMPORTANT.\n\n> [!TIP]\n> Collapse the editor to enter reading mode. Collapse the preview to focus on writing.\n\n---\n\n## Code Blocks\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nasync function fetchUser(id: number): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n}\n```\n\n---\n\n## Math (LaTeX)\n\nInline math: $E = mc^2$ and the Euler identity $e^{i\\pi} + 1 = 0$.\n\nDisplay math:\n\n$$\n\\int_{-\\infty}^{\\infty} e^{-x^2}\\, dx = \\sqrt{\\pi}\n$$\n\n$$\n\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}\n$$\n\n---\n\n## Mermaid Diagrams\n\n```mermaid\nflowchart TD\n    A[Write Markdown] --\x3e B{Live Preview}\n    B --\x3e|Renders| C[HTML Output]\n    B --\x3e|Supports| D[Math / Mermaid / Code]\n    C --\x3e E[Reading Mode]\n    D --\x3e E\n```\n\n---\n\n## Tables\n\n| Feature        | Supported | Notes                       |\n|----------------|-----------|-----------------------------|\n| GFM tables     | ✅        | With striped rows            |\n| Math (LaTeX)   | ✅        | Inline `$...$` and block `$$` |\n| Mermaid        | ✅        | Flowcharts, sequences, etc.  |\n| Syntax highlight | ✅      | 20+ languages               |\n| Callouts       | ✅        | GitHub-style `[!NOTE]`     |\n\n---\n\n## Task Lists\n\n- [x] Side-by-side editor and preview\n- [x] Collapsible panes\n- [x] Math support\n- [x] Mermaid diagrams\n- [x] Syntax highlighting\n- [ ] Export to PDF *(coming soon)*\n"},{id:"typescript",label:"TypeScript",description:"TypeScript code examples",content:"# TypeScript Examples\n\n## Generics & Type Utilities\n\n```typescript\ntype Result<T, E = Error> =\n  | { ok: true; value: T }\n  | { ok: false; error: E };\n\nfunction tryCatch<T>(fn: () => T): Result<T> {\n  try {\n    return { ok: true, value: fn() };\n  } catch (e) {\n    return { ok: false, error: e instanceof Error ? e : new Error(String(e)) };\n  }\n}\n```\n\n## Mapped & Conditional Types\n\n```typescript\ntype Nullable<T> = { [K in keyof T]: T[K] | null };\n\ntype DeepReadonly<T> = T extends (infer U)[]\n  ? ReadonlyArray<DeepReadonly<U>>\n  : T extends object\n  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }\n  : T;\n```\n\n## Async Iterator\n\n```typescript\nasync function* paginate<T>(\n  fetch: (cursor: string | null) => Promise<{ items: T[]; next: string | null }>,\n): AsyncGenerator<T> {\n  let cursor: string | null = null;\n  do {\n    const page = await fetch(cursor);\n    yield* page.items;\n    cursor = page.next;\n  } while (cursor !== null);\n}\n```\n\n## Decorator (Stage 3)\n\n```typescript\nfunction memoize<T extends object, R>(\n  _target: T,\n  key: string,\n  descriptor: TypedPropertyDescriptor<(...args: unknown[]) => R>,\n) {\n  const cache = new Map<string, R>();\n  const original = descriptor.value!;\n  descriptor.value = function (...args: unknown[]) {\n    const k = JSON.stringify(args);\n    if (cache.has(k)) return cache.get(k)!;\n    const result = original.apply(this, args);\n    cache.set(k, result);\n    return result;\n  };\n}\n```\n"},{id:"javascript",label:"JavaScript",description:"Modern JavaScript snippets",content:"# JavaScript Examples\n\n## Optional Chaining & Nullish Coalescing\n\n```javascript\nconst city = user?.address?.city ?? 'Unknown';\nconst name = data?.profile?.displayName ?? data?.email ?? 'Anonymous';\n```\n\n## Array Methods\n\n```javascript\nconst products = [\n  { name: 'Widget', price: 9.99, stock: 50 },\n  { name: 'Gadget', price: 24.99, stock: 0 },\n  { name: 'Doohickey', price: 4.99, stock: 200 },\n];\n\nconst available = products\n  .filter(p => p.stock > 0)\n  .sort((a, b) => a.price - b.price)\n  .map(({ name, price }) => `${name} — $${price.toFixed(2)}`);\n```\n\n## Promise.allSettled\n\n```javascript\nasync function fetchAll(urls) {\n  const results = await Promise.allSettled(urls.map(url => fetch(url)));\n\n  return results.map((result, i) =>\n    result.status === 'fulfilled'\n      ? { url: urls[i], data: result.value }\n      : { url: urls[i], error: result.reason.message },\n  );\n}\n```\n\n## Proxy & Reflect\n\n```javascript\nfunction observable(target, onChange) {\n  return new Proxy(target, {\n    set(obj, prop, value) {\n      const prev = obj[prop];\n      Reflect.set(obj, prop, value);\n      if (prev !== value) onChange(prop, value, prev);\n      return true;\n    },\n  });\n}\n\nconst state = observable({ count: 0 }, (key, next, prev) => {\n  console.log(`${key}: ${prev} → ${next}`);\n});\n\nstate.count = 1; // count: 0 → 1\n```\n"},{id:"ruby",label:"Ruby",description:"Ruby code examples",content:"# Ruby Examples\n\n## Classes & Modules\n\n```ruby\nmodule Serializable\n  def to_h\n    instance_variables.each_with_object({}) do |var, hash|\n      hash[var.to_s.delete('@').to_sym] = instance_variable_get(var)\n    end\n  end\n\n  def to_json\n    require 'json'\n    JSON.generate(to_h)\n  end\nend\n\nclass User\n  include Serializable\n  include Comparable\n\n  attr_accessor :name, :age\n\n  def initialize(name, age)\n    @name = name\n    @age  = age\n  end\n\n  def <=>(other)\n    @age <=> other.age\n  end\nend\n```\n\n## Enumerables & Lazy Chains\n\n```ruby\nprimes = (2..Float::INFINITY).lazy.select do |n|\n  (2..Math.sqrt(n)).none? { |i| n % i == 0 }\nend\n\nputs primes.first(10).inspect\n# => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]\n```\n\n## Blocks, Procs & Lambdas\n\n```ruby\ndouble  = ->(x) { x * 2 }\nsquare  = ->(x) { x ** 2 }\ncompose = ->(f, g) { ->(x) { f.(g.(x)) } }\n\ndouble_then_square = compose.(square, double)\nputs double_then_square.(3)  # => 36\n```\n\n## Pattern Matching (Ruby 3+)\n\n```ruby\nresponse = { status: 200, body: { user: { name: 'Alice', role: :admin } } }\n\ncase response\nin { status: 200, body: { user: { name: String => name, role: :admin } } }\n  puts \"Admin user: #{name}\"\nin { status: 404 }\n  puts \"Not found\"\nin { status: (500..) => code }\n  puts \"Server error: #{code}\"\nend\n```\n"},{id:"mermaid",label:"Mermaid Diagrams",description:"Flowcharts, sequences, and more",content:'# Mermaid Diagrams\n\n## Flowchart\n\n```mermaid\nflowchart LR\n    A([Start]) --\x3e B[/Input data/]\n    B --\x3e C{Valid?}\n    C -- Yes --\x3e D[Process]\n    C -- No  --\x3e E[Show error]\n    D --\x3e F[(Database)]\n    F --\x3e G([End])\n    E --\x3e B\n```\n\n## Sequence Diagram\n\n```mermaid\nsequenceDiagram\n    participant U as User\n    participant C as Client\n    participant S as Server\n    participant DB as Database\n\n    U->>C: Click "Login"\n    C->>S: POST /auth (credentials)\n    S->>DB: SELECT user WHERE email=?\n    DB--\x3e>S: User record\n    S--\x3e>C: 200 OK { token }\n    C--\x3e>U: Redirect to dashboard\n```\n\n## Class Diagram\n\n```mermaid\nclassDiagram\n    class Animal {\n        +String name\n        +int age\n        +speak() String\n    }\n    class Dog {\n        +String breed\n        +speak() String\n        +fetch() void\n    }\n    class Cat {\n        +bool indoor\n        +speak() String\n        +purr() void\n    }\n    Animal <|-- Dog\n    Animal <|-- Cat\n```\n\n## Git Graph\n\n```mermaid\ngitGraph\n    commit id: "init"\n    branch feature/auth\n    checkout feature/auth\n    commit id: "add login"\n    commit id: "add tokens"\n    checkout main\n    merge feature/auth\n    commit id: "hotfix"\n    branch feature/dashboard\n    checkout feature/dashboard\n    commit id: "add charts"\n    checkout main\n    merge feature/dashboard\n```\n'},{id:"math",label:"Math (LaTeX)",description:"Mathematical notation with KaTeX",content:"# Math Examples\n\nAll math is rendered with [KaTeX](https://katex.org).\nUse `$...$` for inline math and `$$...$$` for display math.\n\n---\n\n## Inline Math\n\nThe quadratic formula is $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.\n\nEuler's identity: $e^{i\\pi} + 1 = 0$ — often called the most beautiful equation.\n\nThe derivative of $f(x) = x^n$ is $f'(x) = nx^{n-1}$.\n\n---\n\n## Calculus\n\n$$\n\\frac{d}{dx}\\left[\\int_a^x f(t)\\, dt\\right] = f(x)\n$$\n\n$$\n\\int_0^\\infty e^{-x^2}\\, dx = \\frac{\\sqrt{\\pi}}{2}\n$$\n\n$$\n\\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = e^x\n$$\n\n---\n\n## Linear Algebra\n\n$$\n\\mathbf{A}\\mathbf{x} = \\mathbf{b}\n\\quad \\Rightarrow \\quad\n\\mathbf{x} = \\mathbf{A}^{-1}\\mathbf{b}\n$$\n\n$$\n\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc\n$$\n\n---\n\n## Probability & Statistics\n\nBayes' theorem:\n\n$$\nP(A \\mid B) = \\frac{P(B \\mid A)\\, P(A)}{P(B)}\n$$\n\nNormal distribution PDF:\n\n$$\nf(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}\n$$\n\n---\n\n## Physics\n\nSchrödinger equation (time-independent):\n\n$$\n\\hat{H}\\,|\\psi\\rangle = E\\,|\\psi\\rangle\n$$\n\nMaxwell's equations (differential form):\n\n$$\n\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}\n\\qquad\n\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t}\n$$\n"}],t=""}}]);
//# sourceMappingURL=5773.5385ec2ab03c94c55de8.js.map