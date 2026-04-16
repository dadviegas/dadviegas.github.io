"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[188],{20188(e,r,o){var t=o(58997),n=o(27359),a=o(53233),s=o(71344),i=o(76480),l=o(60894),c=o(78967),d=o(51036),u=o(69835),p=o(47579),m=o(15933),g=o(65723);function w(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const f=a.default.button`
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
`,x=a.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,h=a.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
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
`,b="toolkit:pad";function v({topBarRight:e}){const[r,o]=(0,n.useState)(w),[t,a]=(0,n.useState)(""),[v,y]=(0,n.useState)(""),[j,S]=(0,n.useState)(!1),[T,C]=(0,n.useState)(!1),[$,R]=(0,n.useState)(!1),[H,z]=(0,n.useState)(null),I=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,l.PL)(b).then(e=>{if(e)try{const r=JSON.parse(e);r.md&&a(r.md),r.mermaid&&y(r.mermaid)}catch{}I.current=!0})},[]),(0,n.useEffect)(()=>{if(!I.current)return;const e=setTimeout(()=>(0,l.Is)(b,JSON.stringify({md:t,mermaid:v})),400);return()=>clearTimeout(e)},[t,v]);const B="markdown"===r?"mdpad":"mermaidpad",E="markdown"===r?t:v,M="markdown"===r?a:y,L=e=>{e!==r&&(o(e),z(null))},_=(0,n.useRef)(null),A=(0,n.useRef)(null),J=(0,n.useRef)(null),N=(0,n.useCallback)(e=>{if("preview"===J.current)return;const r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);A.current&&(J.current="editor",A.current.scrollTop=o*(A.current.scrollHeight-A.current.clientHeight),setTimeout(()=>{J.current=null},50))},[]),O=(0,n.useCallback)(e=>{if("editor"===J.current)return;const r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);_.current&&(J.current="preview",_.current.scrollTop=o*(_.current.scrollHeight-_.current.clientHeight),setTimeout(()=>{J.current=null},50))},[]),P=()=>{!T&&j&&S(!1),C(e=>!e)},F=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,g.jsxs)(h,{children:[(0,g.jsx)(k,{active:"markdown"===r,onClick:()=>L("markdown"),children:"Markdown"}),(0,g.jsx)(k,{active:"mermaid"===r,onClick:()=>L("mermaid"),children:"Mermaid"})]}),(0,g.jsxs)(f,{onClick:()=>{a(""),y(""),z(null),(0,l.Is)(b,"")},children:[(0,g.jsx)(s.A,{size:14})," New"]}),(0,g.jsx)(l.UO,{appId:B,onLoad:(e,r,o)=>{M(e),z(r&&o?{id:r,name:o}:null)}}),(0,g.jsxs)(f,{onClick:()=>R(!0),children:[(0,g.jsx)(i.A,{size:14}),"Save"]}),"markdown"===r?(0,g.jsx)(p.H,{onSelect:a}):(0,g.jsx)(m.C,{onSelect:y}),e]});return(0,g.jsxs)(l.PE,{title:"Pad",sidebar:(0,g.jsx)(l.tz,{activeAppId:"pad"}),topBarRight:F,children:[$&&(0,g.jsx)(l.MJ,{onSave:async e=>{R(!1),await(0,l.KL)(B,e,E),z(null)},onUpdate:async()=>{H&&(R(!1),await(0,l.mZ)(H.id,H.name,E))},existingDoc:H??void 0,onCancel:()=>R(!1)}),(0,g.jsxs)(x,{children:[(0,g.jsx)(c.M,{value:E,onChange:M,collapsed:j,onToggleCollapse:()=>{!j&&T&&C(!1),S(e=>!e)},scrollRef:"markdown"===r?_:void 0,onScroll:"markdown"===r?N:void 0}),"markdown"===r?(0,g.jsx)(d.r,{content:t,collapsed:T,onToggleCollapse:P,scrollRef:A,onScroll:O}):(0,g.jsx)(u.u,{code:v,collapsed:T,onToggleCollapse:P})]})]})}const y=document.getElementById("root");if(!y)throw new Error("Root element #root not found");(0,t.H)(y).render((0,g.jsx)(v,{}))},58997(e,r,o){var t=o(48991);r.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.c8d49166cf59f7d51392.js.map