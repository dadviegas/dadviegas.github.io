"use strict";(self.webpackChunk_atlantis_mdpad=self.webpackChunk_atlantis_mdpad||[]).push([[6036],{46036(e,t,o){o.r(t),o.d(t,{default:()=>v});var n=o(27359),r=o(53233),l=o(76480),a=o(24079),i=o(78967),s=o(89654),c=o(61326),d=o(9336),p=o(65723);const u=r.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  color: ${a.w4.colors.mainText};
  overflow: hidden;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`,f=r.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding: 0 ${a.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${a.w4.spacing.md};
  z-index: 100;
`,g=r.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${a.w4.typography.fontFamily};
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${a.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${a.w4.colors.accent}; }
`,h=r.default.span`
  color: ${a.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,x=r.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,w=r.default.span`
  font-weight: 400;
  color: ${a.w4.colors.sidebarTextMuted};
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
  border: 1px solid ${a.w4.colors.accent};
  border-radius: ${a.w4.borderRadius.md};
  color: ${a.w4.colors.accent};
  font-size: ${a.w4.typography.fontSizeBase};
  font-family: ${a.w4.typography.fontFamily};
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
`;function v({topBarRight:e}){const[t,o]=(0,n.useState)(d.O),[r,v]=(0,n.useState)(!1),[$,k]=(0,n.useState)(!1),[j,T]=(0,n.useState)(!1),[S,C]=(0,n.useState)(null),H=(0,n.useRef)(null),z=(0,n.useRef)(null),B=(0,n.useRef)(null),R=(0,n.useCallback)(e=>{if("preview"===B.current)return;const t=e.currentTarget,o=t.scrollTop/(t.scrollHeight-t.clientHeight);if(!z.current)return;B.current="editor";const n=z.current;n.scrollTop=o*(n.scrollHeight-n.clientHeight),setTimeout(()=>{B.current=null},50)},[]),M=(0,n.useCallback)(e=>{if("editor"===B.current)return;const t=e.currentTarget,o=t.scrollTop/(t.scrollHeight-t.clientHeight);if(!H.current)return;B.current="preview";const n=H.current;n.scrollTop=o*(n.scrollHeight-n.clientHeight),setTimeout(()=>{B.current=null},50)},[]);return(0,p.jsxs)(u,{children:[(0,p.jsxs)(f,{children:[(0,p.jsxs)(g,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,p.jsx)("span",{children:"antis"})]}),(0,p.jsx)(h,{children:"/"}),(0,p.jsxs)(x,{children:["MD Editor",(0,p.jsx)(w,{children:"live preview"})]}),(0,p.jsx)(m,{}),(0,p.jsx)(a.UO,{appId:"mdpad",onLoad:o}),(0,p.jsxs)(y,{onClick:()=>T(!0),children:[(0,p.jsx)(l.A,{size:14}),"Save"]}),(0,p.jsx)(c.H,{onSelect:o}),e&&e]}),j&&(0,p.jsx)(a.MJ,{onSave:async e=>{T(!1),await(0,a.KL)("mdpad",e,t),C(null)},onCancel:()=>T(!1)}),(0,p.jsxs)(b,{children:[(0,p.jsx)(i.M,{value:t,onChange:o,collapsed:r,onToggleCollapse:()=>{!r&&$&&k(!1),v(e=>!e)},scrollRef:H,onScroll:R}),(0,p.jsx)(s.r,{content:t,collapsed:$,onToggleCollapse:()=>{!$&&r&&v(!1),k(e=>!e)},scrollRef:z,onScroll:M})]})]})}}}]);
//# sourceMappingURL=6036.e6401bb1a40e7ef204dc.js.map