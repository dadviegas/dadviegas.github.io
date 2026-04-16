"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[188],{20188(e,r,o){var t=o(58997),n=o(27359),a=o(53233),l=o(76480),i=o(85723),s=o(78967),c=o(36933),d=o(69835),u=o(61326),p=o(27665),g=o(35949),m=o(35339),w=o(65723);function x(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const h=a.default.button`
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
`,f=a.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,b=a.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,k=a.default.button`
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
`;function v({topBarRight:e}){const[r,o]=(0,n.useState)(x),[t,a]=(0,n.useState)(g.C),[v,y]=(0,n.useState)(m.U[0].code),[j,C]=(0,n.useState)(!1),[$,S]=(0,n.useState)(!1),[T,R]=(0,n.useState)(!1),[H,z]=(0,n.useState)(null),B="markdown"===r?"mdpad":"mermaidpad",M="markdown"===r?t:v,_="markdown"===r?a:y,E=e=>{e!==r&&(o(e),z(null))},I=(0,n.useRef)(null),L=(0,n.useRef)(null),U=(0,n.useRef)(null),F=(0,n.useCallback)(e=>{if("preview"===U.current)return;const r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);L.current&&(U.current="editor",L.current.scrollTop=o*(L.current.scrollHeight-L.current.clientHeight),setTimeout(()=>{U.current=null},50))},[]),P=(0,n.useCallback)(e=>{if("editor"===U.current)return;const r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);I.current&&(U.current="preview",I.current.scrollTop=o*(I.current.scrollHeight-I.current.clientHeight),setTimeout(()=>{U.current=null},50))},[]),W=()=>{!$&&j&&C(!1),S(e=>!e)},A=(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,w.jsxs)(b,{children:[(0,w.jsx)(k,{active:"markdown"===r,onClick:()=>E("markdown"),children:"Markdown"}),(0,w.jsx)(k,{active:"mermaid"===r,onClick:()=>E("mermaid"),children:"Mermaid"})]}),(0,w.jsx)(i.UO,{appId:B,onLoad:(e,r,o)=>{_(e),z(r&&o?{id:r,name:o}:null)}}),(0,w.jsxs)(h,{onClick:()=>R(!0),children:[(0,w.jsx)(l.A,{size:14}),"Save"]}),"markdown"===r?(0,w.jsx)(u.H,{onSelect:a}):(0,w.jsx)(p.C,{onSelect:y}),e]});return(0,w.jsxs)(i.PE,{title:"Pad",sidebar:null,topBarRight:A,children:[T&&(0,w.jsx)(i.MJ,{onSave:async e=>{R(!1),await(0,i.KL)(B,e,M),z(null)},onUpdate:async()=>{H&&(R(!1),await(0,i.mZ)(H.id,H.name,M))},existingDoc:H??void 0,onCancel:()=>R(!1)}),(0,w.jsxs)(f,{children:[(0,w.jsx)(s.M,{value:M,onChange:_,collapsed:j,onToggleCollapse:()=>{!j&&$&&S(!1),C(e=>!e)},scrollRef:"markdown"===r?I:void 0,onScroll:"markdown"===r?F:void 0}),"markdown"===r?(0,w.jsx)(c.r,{content:t,collapsed:$,onToggleCollapse:W,scrollRef:L,onScroll:P}):(0,w.jsx)(d.u,{code:v,collapsed:$,onToggleCollapse:W})]})]})}const y=document.getElementById("root");if(!y)throw new Error("Root element #root not found");(0,t.H)(y).render((0,w.jsx)(v,{}))},58997(e,r,o){var t=o(48991);r.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.16caad5765df1b1d4921.js.map