"use strict";(self.webpackChunk_atlantis_mdpad=self.webpackChunk_atlantis_mdpad||[]).push([[6036],{46036(e,t,o){o.r(t),o.d(t,{default:()=>v});var n=o(27359),r=o(53233),l=o(76480),i=o(24079),a=o(78967),s=o(89654),c=o(61326),d=o(9336),p=o(65723);const f=r.default.div`
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
`,u=r.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${i.w4.spacing.md};
  z-index: 100;
`,g=r.default.button`
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
`,h=r.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,x=r.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,w=r.default.span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,m=r.default.div`
  flex: 1;
`,y=r.default.button`
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
`,b=r.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;function v({topBarRight:e}){const[t,o]=(0,n.useState)(d.O),[r,v]=(0,n.useState)(!1),[$,k]=(0,n.useState)(!1),[j,T]=(0,n.useState)(!1),S=(0,n.useRef)(null),C=(0,n.useRef)(null),H=(0,n.useRef)(null),z=(0,n.useCallback)(e=>{if("preview"===H.current)return;const t=e.currentTarget,o=t.scrollTop/(t.scrollHeight-t.clientHeight);if(!C.current)return;H.current="editor";const n=C.current;n.scrollTop=o*(n.scrollHeight-n.clientHeight),setTimeout(()=>{H.current=null},50)},[]),B=(0,n.useCallback)(e=>{if("editor"===H.current)return;const t=e.currentTarget,o=t.scrollTop/(t.scrollHeight-t.clientHeight);if(!S.current)return;H.current="preview";const n=S.current;n.scrollTop=o*(n.scrollHeight-n.clientHeight),setTimeout(()=>{H.current=null},50)},[]);return(0,p.jsxs)(f,{children:[(0,p.jsxs)(u,{children:[(0,p.jsxs)(g,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,p.jsx)("span",{children:"antis"})]}),(0,p.jsx)(h,{children:"/"}),(0,p.jsxs)(x,{children:["MD Editor",(0,p.jsx)(w,{children:"live preview"})]}),(0,p.jsx)(m,{}),(0,p.jsx)(i.UO,{appId:"mdpad",onLoad:o}),(0,p.jsxs)(y,{onClick:()=>T(!0),children:[(0,p.jsx)(l.A,{size:14}),"Save"]}),(0,p.jsx)(c.H,{onSelect:o}),e&&e]}),j&&(0,p.jsx)(i.MJ,{onSave:async e=>{T(!1),await(0,i.KL)("mdpad",e,t)},onCancel:()=>T(!1)}),(0,p.jsxs)(b,{children:[(0,p.jsx)(a.M,{value:t,onChange:o,collapsed:r,onToggleCollapse:()=>{!r&&$&&k(!1),v(e=>!e)},scrollRef:S,onScroll:z}),(0,p.jsx)(s.r,{content:t,collapsed:$,onToggleCollapse:()=>{!$&&r&&v(!1),k(e=>!e)},scrollRef:C,onScroll:B})]})]})}}}]);
//# sourceMappingURL=6036.d7970df79f3b14fc7c69.js.map