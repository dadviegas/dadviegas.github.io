"use strict";(self.webpackChunk_atlantis_mdpad=self.webpackChunk_atlantis_mdpad||[]).push([[188],{20188(e,o,t){var r=t(27359),l=t(58997),n=t(53233),i=t(90906),s=t(78967),c=t(89654),a=t(61326),d=t(9336),u=t(65723);const f=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,p=n.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${i.w4.spacing.md};
  z-index: 100;
`,h=n.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${i.w4.colors.accent}; }
`,g=n.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,x=n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,w=n.default.span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,m=n.default.div`
  flex: 1;
`,y=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;function b({topBarRight:e}){const[o,t]=(0,r.useState)(d.O),[l,n]=(0,r.useState)(!1),[i,b]=(0,r.useState)(!1),v=(0,r.useRef)(null),$=(0,r.useRef)(null),T=(0,r.useRef)(null),j=(0,r.useCallback)(e=>{if("preview"===T.current)return;const o=e.currentTarget,t=o.scrollTop/(o.scrollHeight-o.clientHeight);if(!$.current)return;T.current="editor";const r=$.current;r.scrollTop=t*(r.scrollHeight-r.clientHeight),setTimeout(()=>{T.current=null},50)},[]),k=(0,r.useCallback)(e=>{if("editor"===T.current)return;const o=e.currentTarget,t=o.scrollTop/(o.scrollHeight-o.clientHeight);if(!v.current)return;T.current="preview";const r=v.current;r.scrollTop=t*(r.scrollHeight-r.clientHeight),setTimeout(()=>{T.current=null},50)},[]);return(0,u.jsxs)(f,{children:[(0,u.jsxs)(p,{children:[(0,u.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,u.jsx)("span",{children:"antis"})]}),(0,u.jsx)(g,{children:"/"}),(0,u.jsxs)(x,{children:["MD Editor",(0,u.jsx)(w,{children:"live preview"})]}),(0,u.jsx)(m,{}),(0,u.jsx)(a.H,{onSelect:t}),e&&e]}),(0,u.jsxs)(y,{children:[(0,u.jsx)(s.M,{value:o,onChange:t,collapsed:l,onToggleCollapse:()=>{!l&&i&&b(!1),n(e=>!e)},scrollRef:v,onScroll:j}),(0,u.jsx)(c.r,{content:o,collapsed:i,onToggleCollapse:()=>{!i&&l&&n(!1),b(e=>!e)},scrollRef:$,onScroll:k})]})]})}const v=document.getElementById("root");if(!v)throw new Error("Root element #root not found");(0,l.H)(v).render((0,u.jsx)(b,{}))},58997(e,o,t){var r=t(48991);o.H=r.createRoot,r.hydrateRoot}}]);
//# sourceMappingURL=188.9ce876bc6c42bd48b23c.js.map