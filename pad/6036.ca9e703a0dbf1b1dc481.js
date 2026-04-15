"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[6036],{46036(e,o,r){r.r(o),r.d(o,{default:()=>C});var n=r(27359),a=r(53233),t=r(76480),i=r(85723),l=r(78967),s=r(89654),d=r(69835),c=r(61326),p=r(27665),u=r(35949),g=r(35339),f=r(65723);function h(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const m=a.default.div`
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
`,w=a.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${i.w4.spacing.md};
  z-index: 100;
`,x=a.default.button`
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
`,b=a.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,k=a.default.div`
  flex: 1;
`,v=a.default.button`
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
`,y=a.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,$=a.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,j=a.default.button`
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
`;function C({topBarRight:e}){const[o,r]=(0,n.useState)(h),[a,C]=(0,n.useState)(u.C),[T,S]=(0,n.useState)(g.U[0].code),[H,R]=(0,n.useState)(!1),[z,B]=(0,n.useState)(!1),[M,F]=(0,n.useState)(!1),[_,L]=(0,n.useState)(null),U="markdown"===o?"mdpad":"mermaidpad",A="markdown"===o?a:T,W="markdown"===o?C:S,D=e=>{e!==o&&(r(e),L(null))},I=(0,n.useRef)(null),J=(0,n.useRef)(null),K=(0,n.useRef)(null),O=(0,n.useCallback)(e=>{if("preview"===K.current)return;const o=e.currentTarget,r=o.scrollTop/(o.scrollHeight-o.clientHeight);J.current&&(K.current="editor",J.current.scrollTop=r*(J.current.scrollHeight-J.current.clientHeight),setTimeout(()=>{K.current=null},50))},[]),Z=(0,n.useCallback)(e=>{if("editor"===K.current)return;const o=e.currentTarget,r=o.scrollTop/(o.scrollHeight-o.clientHeight);I.current&&(K.current="preview",I.current.scrollTop=r*(I.current.scrollHeight-I.current.clientHeight),setTimeout(()=>{K.current=null},50))},[]),q=()=>{!z&&H&&R(!1),B(e=>!e)};return(0,f.jsxs)(m,{children:[(0,f.jsxs)(w,{children:[(0,f.jsxs)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(b,{children:"/"}),(0,f.jsxs)($,{children:[(0,f.jsx)(j,{active:"markdown"===o,onClick:()=>D("markdown"),children:"Markdown"}),(0,f.jsx)(j,{active:"mermaid"===o,onClick:()=>D("mermaid"),children:"Mermaid"})]}),(0,f.jsx)(k,{}),(0,f.jsx)(i.UO,{appId:U,onLoad:(e,o,r)=>{W(e),L(o&&r?{id:o,name:r}:null)}}),(0,f.jsxs)(v,{onClick:()=>F(!0),children:[(0,f.jsx)(t.A,{size:14}),"Save"]}),"markdown"===o?(0,f.jsx)(c.H,{onSelect:C}):(0,f.jsx)(p.C,{onSelect:S}),e]}),M&&(0,f.jsx)(i.MJ,{onSave:async e=>{F(!1),await(0,i.KL)(U,e,A),L(null)},onUpdate:async()=>{_&&(F(!1),await(0,i.mZ)(_.id,_.name,A))},existingDoc:_??void 0,onCancel:()=>F(!1)}),(0,f.jsxs)(y,{children:[(0,f.jsx)(l.M,{value:A,onChange:W,collapsed:H,onToggleCollapse:()=>{!H&&z&&B(!1),R(e=>!e)},scrollRef:"markdown"===o?I:void 0,onScroll:"markdown"===o?O:void 0}),"markdown"===o?(0,f.jsx)(s.r,{content:a,collapsed:z,onToggleCollapse:q,scrollRef:J,onScroll:Z}):(0,f.jsx)(d.u,{code:T,collapsed:z,onToggleCollapse:q})]})]})}}}]);
//# sourceMappingURL=6036.ca9e703a0dbf1b1dc481.js.map