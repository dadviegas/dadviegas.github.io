"use strict";(self.webpackChunk_atlantis_mdpad=self.webpackChunk_atlantis_mdpad||[]).push([[188],{20188(e,o,t){var n=t(27359),r=t(58997),l=t(53233),a=t(76480),i=t(24079),s=t(78967),c=t(89654),d=t(61326),p=t(9336),f=t(65723);const u=l.default.div`
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
`;function $({topBarRight:e}){const[o,t]=(0,n.useState)(p.O),[r,l]=(0,n.useState)(!1),[$,j]=(0,n.useState)(!1),[k,T]=(0,n.useState)(!1),H=(0,n.useRef)(null),S=(0,n.useRef)(null),C=(0,n.useRef)(null),R=(0,n.useCallback)(e=>{if("preview"===C.current)return;const o=e.currentTarget,t=o.scrollTop/(o.scrollHeight-o.clientHeight);if(!S.current)return;C.current="editor";const n=S.current;n.scrollTop=t*(n.scrollHeight-n.clientHeight),setTimeout(()=>{C.current=null},50)},[]),z=(0,n.useCallback)(e=>{if("editor"===C.current)return;const o=e.currentTarget,t=o.scrollTop/(o.scrollHeight-o.clientHeight);if(!H.current)return;C.current="preview";const n=H.current;n.scrollTop=t*(n.scrollHeight-n.clientHeight),setTimeout(()=>{C.current=null},50)},[]);return(0,f.jsxs)(u,{children:[(0,f.jsxs)(g,{children:[(0,f.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(x,{children:"/"}),(0,f.jsxs)(w,{children:["MD Editor",(0,f.jsx)(m,{children:"live preview"})]}),(0,f.jsx)(y,{}),(0,f.jsx)(i.UO,{appId:"mdpad",onLoad:t}),(0,f.jsxs)(b,{onClick:()=>T(!0),children:[(0,f.jsx)(a.A,{size:14}),"Save"]}),(0,f.jsx)(d.H,{onSelect:t}),e&&e]}),k&&(0,f.jsx)(i.MJ,{onSave:async e=>{T(!1),await(0,i.KL)("mdpad",e,o)},onCancel:()=>T(!1)}),(0,f.jsxs)(v,{children:[(0,f.jsx)(s.M,{value:o,onChange:t,collapsed:r,onToggleCollapse:()=>{!r&&$&&j(!1),l(e=>!e)},scrollRef:H,onScroll:R}),(0,f.jsx)(c.r,{content:o,collapsed:$,onToggleCollapse:()=>{!$&&r&&l(!1),j(e=>!e)},scrollRef:S,onScroll:z})]})]})}const j=document.getElementById("root");if(!j)throw new Error("Root element #root not found");(0,r.H)(j).render((0,f.jsx)($,{}))},58997(e,o,t){var n=t(48991);o.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.f583030b1cd8fb243288.js.map