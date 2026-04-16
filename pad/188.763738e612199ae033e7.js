"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[188],{20188(e,o,r){var n=r(58997),t=r(27359),a=r(53233),i=r(76480),l=r(85723),s=r(78967),d=r(89654),c=r(69835),p=r(61326),u=r(27665),g=r(35949),f=r(35339),h=r(65723);function m(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const x=a.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  overflow: hidden;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`,w=a.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  padding-left: max(${l.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${l.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${l.w4.spacing.md};
  z-index: 100;
`,b=a.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${l.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${l.w4.colors.accent}; }
`,v=a.default.span`
  color: ${l.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,k=a.default.div`
  flex: 1;
`,y=a.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${l.w4.colors.accent};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.accent};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, opacity 0.15s;
  white-space: nowrap;
  &:hover { background: rgba(88, 166, 255, 0.1); }
`,$=a.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,j=a.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,C=a.default.button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 12px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  background: ${({active:e})=>e?l.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};

  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${({active:e})=>e?l.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`;function T({topBarRight:e}){const[o,r]=(0,t.useState)(m),[n,a]=(0,t.useState)(g.C),[T,S]=(0,t.useState)(f.U[0].code),[H,R]=(0,t.useState)(!1),[z,B]=(0,t.useState)(!1),[M,F]=(0,t.useState)(!1),[_,L]=(0,t.useState)(null),U="markdown"===o?"mdpad":"mermaidpad",A="markdown"===o?n:T,E="markdown"===o?a:S,I=e=>{e!==o&&(r(e),L(null))},W=(0,t.useRef)(null),D=(0,t.useRef)(null),J=(0,t.useRef)(null),K=(0,t.useCallback)(e=>{if("preview"===J.current)return;const o=e.currentTarget,r=o.scrollTop/(o.scrollHeight-o.clientHeight);D.current&&(J.current="editor",D.current.scrollTop=r*(D.current.scrollHeight-D.current.clientHeight),setTimeout(()=>{J.current=null},50))},[]),O=(0,t.useCallback)(e=>{if("editor"===J.current)return;const o=e.currentTarget,r=o.scrollTop/(o.scrollHeight-o.clientHeight);W.current&&(J.current="preview",W.current.scrollTop=r*(W.current.scrollHeight-W.current.clientHeight),setTimeout(()=>{J.current=null},50))},[]),Z=()=>{!z&&H&&R(!1),B(e=>!e)};return(0,h.jsxs)(x,{children:[(0,h.jsxs)(w,{children:[(0,h.jsxs)(b,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,h.jsx)("span",{children:"antis"})]}),(0,h.jsx)(v,{children:"/"}),(0,h.jsxs)(j,{children:[(0,h.jsx)(C,{active:"markdown"===o,onClick:()=>I("markdown"),children:"Markdown"}),(0,h.jsx)(C,{active:"mermaid"===o,onClick:()=>I("mermaid"),children:"Mermaid"})]}),(0,h.jsx)(k,{}),(0,h.jsx)(l.UO,{appId:U,onLoad:(e,o,r)=>{E(e),L(o&&r?{id:o,name:r}:null)}}),(0,h.jsxs)(y,{onClick:()=>F(!0),children:[(0,h.jsx)(i.A,{size:14}),"Save"]}),"markdown"===o?(0,h.jsx)(p.H,{onSelect:a}):(0,h.jsx)(u.C,{onSelect:S}),e]}),M&&(0,h.jsx)(l.MJ,{onSave:async e=>{F(!1),await(0,l.KL)(U,e,A),L(null)},onUpdate:async()=>{_&&(F(!1),await(0,l.mZ)(_.id,_.name,A))},existingDoc:_??void 0,onCancel:()=>F(!1)}),(0,h.jsxs)($,{children:[(0,h.jsx)(s.M,{value:A,onChange:E,collapsed:H,onToggleCollapse:()=>{!H&&z&&B(!1),R(e=>!e)},scrollRef:"markdown"===o?W:void 0,onScroll:"markdown"===o?K:void 0}),"markdown"===o?(0,h.jsx)(d.r,{content:n,collapsed:z,onToggleCollapse:Z,scrollRef:D,onScroll:O}):(0,h.jsx)(c.u,{code:T,collapsed:z,onToggleCollapse:Z})]})]})}const S=document.getElementById("root");if(!S)throw new Error("Root element #root not found");(0,n.H)(S).render((0,h.jsx)(T,{}))},58997(e,o,r){var n=r(48991);o.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.763738e612199ae033e7.js.map