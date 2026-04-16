"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[6036],{46036(e,o,a){a.r(o),a.d(o,{default:()=>C});var r=a(27359),n=a(53233),t=a(76480),i=a(85723),l=a(78967),s=a(98971),d=a(69835),c=a(61326),p=a(27665),u=a(35949),g=a(35339),f=a(65723);function h(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const x=n.default.div`
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
`,m=n.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding-left: max(${i.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${i.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${i.w4.spacing.md};
  z-index: 100;
`,w=n.default.button`
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
`,b=n.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,v=n.default.div`
  flex: 1;
`,k=n.default.button`
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
  &:hover { background: rgba(88, 166, 255, 0.1); }
`,y=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,$=n.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,j=n.default.button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 12px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  background: ${({active:e})=>e?i.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?i.w4.colors.mainText:i.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};

  &:hover {
    color: ${i.w4.colors.mainText};
    background: ${({active:e})=>e?i.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`;function C({topBarRight:e}){const[o,a]=(0,r.useState)(h),[n,C]=(0,r.useState)(u.C),[T,S]=(0,r.useState)(g.U[0].code),[H,R]=(0,r.useState)(!1),[z,B]=(0,r.useState)(!1),[M,F]=(0,r.useState)(!1),[_,L]=(0,r.useState)(null),U="markdown"===o?"mdpad":"mermaidpad",A="markdown"===o?n:T,W="markdown"===o?C:S,D=e=>{e!==o&&(a(e),L(null))},I=(0,r.useRef)(null),J=(0,r.useRef)(null),K=(0,r.useRef)(null),O=(0,r.useCallback)(e=>{if("preview"===K.current)return;const o=e.currentTarget,a=o.scrollTop/(o.scrollHeight-o.clientHeight);J.current&&(K.current="editor",J.current.scrollTop=a*(J.current.scrollHeight-J.current.clientHeight),setTimeout(()=>{K.current=null},50))},[]),Z=(0,r.useCallback)(e=>{if("editor"===K.current)return;const o=e.currentTarget,a=o.scrollTop/(o.scrollHeight-o.clientHeight);I.current&&(K.current="preview",I.current.scrollTop=a*(I.current.scrollHeight-I.current.clientHeight),setTimeout(()=>{K.current=null},50))},[]),q=()=>{!z&&H&&R(!1),B(e=>!e)};return(0,f.jsxs)(x,{children:[(0,f.jsxs)(m,{children:[(0,f.jsxs)(w,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(b,{children:"/"}),(0,f.jsxs)($,{children:[(0,f.jsx)(j,{active:"markdown"===o,onClick:()=>D("markdown"),children:"Markdown"}),(0,f.jsx)(j,{active:"mermaid"===o,onClick:()=>D("mermaid"),children:"Mermaid"})]}),(0,f.jsx)(v,{}),(0,f.jsx)(i.UO,{appId:U,onLoad:(e,o,a)=>{W(e),L(o&&a?{id:o,name:a}:null)}}),(0,f.jsxs)(k,{onClick:()=>F(!0),children:[(0,f.jsx)(t.A,{size:14}),"Save"]}),"markdown"===o?(0,f.jsx)(c.H,{onSelect:C}):(0,f.jsx)(p.C,{onSelect:S}),e]}),M&&(0,f.jsx)(i.MJ,{onSave:async e=>{F(!1),await(0,i.KL)(U,e,A),L(null)},onUpdate:async()=>{_&&(F(!1),await(0,i.mZ)(_.id,_.name,A))},existingDoc:_??void 0,onCancel:()=>F(!1)}),(0,f.jsxs)(y,{children:[(0,f.jsx)(l.M,{value:A,onChange:W,collapsed:H,onToggleCollapse:()=>{!H&&z&&B(!1),R(e=>!e)},scrollRef:"markdown"===o?I:void 0,onScroll:"markdown"===o?O:void 0}),"markdown"===o?(0,f.jsx)(s.r,{content:n,collapsed:z,onToggleCollapse:q,scrollRef:J,onScroll:Z}):(0,f.jsx)(d.u,{code:T,collapsed:z,onToggleCollapse:q})]})]})}}}]);
//# sourceMappingURL=6036.b3c80bae79cf22e0cbcb.js.map