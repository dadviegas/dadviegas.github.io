"use strict";(self.webpackChunk_atlantis_mdpad=self.webpackChunk_atlantis_mdpad||[]).push([[188],{20188(e,t,o){var n=o(27359),r=o(58997),l=o(53233),a=o(76480),i=o(24079),s=o(78967),c=o(89654),d=o(61326),p=o(9336),u=o(65723);const f=l.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`,g=l.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${i.w4.spacing.md};
  z-index: 100;
`,h=l.default.button`
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
`,x=l.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,w=l.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,m=l.default.span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,y=l.default.div`
  flex: 1;
`,b=l.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${i.w4.colors.accent};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.accent};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, opacity 0.15s;
  white-space: nowrap;

  &:hover {
    background: rgba(88, 166, 255, 0.1);
  }
`,v=l.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;function $({topBarRight:e}){const[t,o]=(0,n.useState)(p.O),[r,l]=(0,n.useState)(!1),[$,j]=(0,n.useState)(!1),[k,T]=(0,n.useState)(!1),[S,H]=(0,n.useState)(null),C=(0,n.useRef)(null),R=(0,n.useRef)(null),z=(0,n.useRef)(null),B=(0,n.useCallback)(e=>{if("preview"===z.current)return;const t=e.currentTarget,o=t.scrollTop/(t.scrollHeight-t.clientHeight);if(!R.current)return;z.current="editor";const n=R.current;n.scrollTop=o*(n.scrollHeight-n.clientHeight),setTimeout(()=>{z.current=null},50)},[]),M=(0,n.useCallback)(e=>{if("editor"===z.current)return;const t=e.currentTarget,o=t.scrollTop/(t.scrollHeight-t.clientHeight);if(!C.current)return;z.current="preview";const n=C.current;n.scrollTop=o*(n.scrollHeight-n.clientHeight),setTimeout(()=>{z.current=null},50)},[]);return(0,u.jsxs)(f,{children:[(0,u.jsxs)(g,{children:[(0,u.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,u.jsx)("span",{children:"antis"})]}),(0,u.jsx)(x,{children:"/"}),(0,u.jsxs)(w,{children:["MD Editor",(0,u.jsx)(m,{children:"live preview"})]}),(0,u.jsx)(y,{}),(0,u.jsx)(i.UO,{appId:"mdpad",onLoad:o}),(0,u.jsxs)(b,{onClick:()=>T(!0),children:[(0,u.jsx)(a.A,{size:14}),"Save"]}),(0,u.jsx)(d.H,{onSelect:o}),e&&e]}),k&&(0,u.jsx)(i.MJ,{onSave:async e=>{T(!1),await(0,i.KL)("mdpad",e,t),H(null)},onCancel:()=>T(!1)}),(0,u.jsxs)(v,{children:[(0,u.jsx)(s.M,{value:t,onChange:o,collapsed:r,onToggleCollapse:()=>{!r&&$&&j(!1),l(e=>!e)},scrollRef:C,onScroll:B}),(0,u.jsx)(c.r,{content:t,collapsed:$,onToggleCollapse:()=>{!$&&r&&l(!1),j(e=>!e)},scrollRef:R,onScroll:M})]})]})}const j=document.getElementById("root");if(!j)throw new Error("Root element #root not found");(0,r.H)(j).render((0,u.jsx)($,{}))},58997(e,t,o){var n=o(48991);t.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.c99350ecea4bc8705ac9.js.map