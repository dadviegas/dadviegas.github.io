"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[6036],{46036(e,r,o){o.r(r),o.d(r,{default:()=>k});var t=o(27359),n=o(53233),a=o(76480),l=o(85723),i=o(78967),s=o(36933),c=o(69835),d=o(61326),u=o(27665),p=o(35949),g=o(35339),m=o(65723);function w(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const x=n.default.button`
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
`,h=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,f=n.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,b=n.default.button`
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
`;function k({topBarRight:e}){const[r,o]=(0,t.useState)(w),[n,k]=(0,t.useState)(p.C),[v,y]=(0,t.useState)(g.U[0].code),[j,C]=(0,t.useState)(!1),[$,S]=(0,t.useState)(!1),[T,R]=(0,t.useState)(!1),[H,z]=(0,t.useState)(null),M="markdown"===r?"mdpad":"mermaidpad",B="markdown"===r?n:v,_="markdown"===r?k:y,L=e=>{e!==r&&(o(e),z(null))},U=(0,t.useRef)(null),F=(0,t.useRef)(null),I=(0,t.useRef)(null),P=(0,t.useCallback)(e=>{if("preview"===I.current)return;const r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);F.current&&(I.current="editor",F.current.scrollTop=o*(F.current.scrollHeight-F.current.clientHeight),setTimeout(()=>{I.current=null},50))},[]),W=(0,t.useCallback)(e=>{if("editor"===I.current)return;const r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);U.current&&(I.current="preview",U.current.scrollTop=o*(U.current.scrollHeight-U.current.clientHeight),setTimeout(()=>{I.current=null},50))},[]),A=()=>{!$&&j&&C(!1),S(e=>!e)},D=(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,m.jsxs)(f,{children:[(0,m.jsx)(b,{active:"markdown"===r,onClick:()=>L("markdown"),children:"Markdown"}),(0,m.jsx)(b,{active:"mermaid"===r,onClick:()=>L("mermaid"),children:"Mermaid"})]}),(0,m.jsx)(l.UO,{appId:M,onLoad:(e,r,o)=>{_(e),z(r&&o?{id:r,name:o}:null)}}),(0,m.jsxs)(x,{onClick:()=>R(!0),children:[(0,m.jsx)(a.A,{size:14}),"Save"]}),"markdown"===r?(0,m.jsx)(d.H,{onSelect:k}):(0,m.jsx)(u.C,{onSelect:y}),e]});return(0,m.jsxs)(l.PE,{title:"Pad",sidebar:null,topBarRight:D,children:[T&&(0,m.jsx)(l.MJ,{onSave:async e=>{R(!1),await(0,l.KL)(M,e,B),z(null)},onUpdate:async()=>{H&&(R(!1),await(0,l.mZ)(H.id,H.name,B))},existingDoc:H??void 0,onCancel:()=>R(!1)}),(0,m.jsxs)(h,{children:[(0,m.jsx)(i.M,{value:B,onChange:_,collapsed:j,onToggleCollapse:()=>{!j&&$&&S(!1),C(e=>!e)},scrollRef:"markdown"===r?U:void 0,onScroll:"markdown"===r?P:void 0}),"markdown"===r?(0,m.jsx)(s.r,{content:n,collapsed:$,onToggleCollapse:A,scrollRef:F,onScroll:W}):(0,m.jsx)(c.u,{code:v,collapsed:$,onToggleCollapse:A})]})]})}}}]);
//# sourceMappingURL=6036.35bbcb2163cdb96a91d4.js.map