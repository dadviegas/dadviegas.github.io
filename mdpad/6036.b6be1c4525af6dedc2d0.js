"use strict";(self.webpackChunk_atlantis_mdpad=self.webpackChunk_atlantis_mdpad||[]).push([[6036],{46036(e,l,t){t.r(l),t.d(l,{default:()=>y});var r=t(27359),o=t(53233),n=t(3188),i=t(78967),s=t(89654),a=t(61326),c=t(9336),d=t(65723);const u=o.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,f=o.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding: 0 ${n.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${n.w4.spacing.md};
  z-index: 100;
`,p=o.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${n.w4.colors.accent}; }
`,h=o.default.span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,g=o.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,x=o.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,w=o.default.div`
  flex: 1;
`,m=o.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;function y({topBarRight:e}){const[l,t]=(0,r.useState)(c.O),[o,n]=(0,r.useState)(!1),[y,b]=(0,r.useState)(!1),$=(0,r.useRef)(null),v=(0,r.useRef)(null),k=(0,r.useRef)(null),j=(0,r.useCallback)(e=>{if("preview"===k.current)return;const l=e.currentTarget,t=l.scrollTop/(l.scrollHeight-l.clientHeight);if(!v.current)return;k.current="editor";const r=v.current;r.scrollTop=t*(r.scrollHeight-r.clientHeight),requestAnimationFrame(()=>{k.current=null})},[]),T=(0,r.useCallback)(e=>{if("editor"===k.current)return;const l=e.currentTarget,t=l.scrollTop/(l.scrollHeight-l.clientHeight);if(!$.current)return;k.current="preview";const r=$.current;r.scrollTop=t*(r.scrollHeight-r.clientHeight),requestAnimationFrame(()=>{k.current=null})},[]);return(0,d.jsxs)(u,{children:[(0,d.jsxs)(f,{children:[(0,d.jsxs)(p,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,d.jsx)("span",{children:"antis"})]}),(0,d.jsx)(h,{children:"/"}),(0,d.jsxs)(g,{children:["MD Editor",(0,d.jsx)(x,{children:"live preview"})]}),(0,d.jsx)(w,{}),(0,d.jsx)(a.H,{onSelect:t}),e&&e]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(i.M,{value:l,onChange:t,collapsed:o,onToggleCollapse:()=>{!o&&y&&b(!1),n(e=>!e)},scrollRef:$,onScroll:j}),(0,d.jsx)(s.r,{content:l,collapsed:y,onToggleCollapse:()=>{!y&&o&&n(!1),b(e=>!e)},scrollRef:v,onScroll:T})]})]})}}}]);
//# sourceMappingURL=6036.b6be1c4525af6dedc2d0.js.map