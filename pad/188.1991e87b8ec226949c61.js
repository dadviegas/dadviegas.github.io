"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[188],{20188(e,r,o){var t=o(58997),n=o(27359),a=o(53233),s=o(71344),i=o(76480),l=o(59200),c=o(49094),d=o(78967),u=o(22402),p=o(69835),m=o(47579),g=o(15933),w=o(65723);function f(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const x=a.default.button`
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
`,h=a.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,k=a.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,b=a.default.button`
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
`,v="toolkit:pad";function y({topBarRight:e}){const[r,o]=(0,n.useState)(f),[t,a]=(0,n.useState)(""),[y,j]=(0,n.useState)(""),[S,T]=(0,n.useState)(!1),[C,$]=(0,n.useState)(!1),[R,H]=(0,n.useState)(!1),[z,I]=(0,n.useState)(null),B=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,l.PL)(v).then(e=>{if(e)try{const r=JSON.parse(e);r.md&&a(r.md),r.mermaid&&j(r.mermaid)}catch{}B.current=!0})},[]),(0,n.useEffect)(()=>{if(!B.current)return;const e=setTimeout(()=>(0,l.Is)(v,JSON.stringify({md:t,mermaid:y})),400);return()=>clearTimeout(e)},[t,y]);const E="markdown"===r?"mdpad":"mermaidpad",M="markdown"===r?t:y,L="markdown"===r?a:j,_=e=>{e!==r&&(o(e),I(null))},A=(0,n.useRef)(null),J=(0,n.useRef)(null),N=(0,n.useRef)(null),O=(0,n.useCallback)(e=>{if("preview"===N.current)return;const r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);J.current&&(N.current="editor",J.current.scrollTop=o*(J.current.scrollHeight-J.current.clientHeight),setTimeout(()=>{N.current=null},50))},[]),P=(0,n.useCallback)(e=>{if("editor"===N.current)return;const r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);A.current&&(N.current="preview",A.current.scrollTop=o*(A.current.scrollHeight-A.current.clientHeight),setTimeout(()=>{N.current=null},50))},[]),F=()=>{!C&&S&&T(!1),$(e=>!e)},U=(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,w.jsxs)(k,{children:[(0,w.jsx)(b,{active:"markdown"===r,onClick:()=>_("markdown"),children:"Markdown"}),(0,w.jsx)(b,{active:"mermaid"===r,onClick:()=>_("mermaid"),children:"Mermaid"})]}),(0,w.jsxs)(x,{onClick:()=>{a(""),j(""),I(null),(0,l.Is)(v,"")},children:[(0,w.jsx)(s.A,{size:14})," New"]}),(0,w.jsx)(l.UO,{appId:E,onLoad:(e,r,o)=>{L(e),I(r&&o?{id:r,name:o}:null)}}),(0,w.jsxs)(x,{onClick:()=>H(!0),children:[(0,w.jsx)(i.A,{size:14}),"Save"]}),"markdown"===r?(0,w.jsx)(m.H,{onSelect:a}):(0,w.jsx)(g.C,{onSelect:j}),e]});return(0,w.jsxs)(l.PE,{title:"Pad",sidebar:(0,w.jsx)(c.tz,{activeAppId:"pad"}),topBarRight:U,children:[R&&(0,w.jsx)(l.MJ,{onSave:async e=>{H(!1),await(0,l.KL)(E,e,M),I(null)},onUpdate:async()=>{z&&(H(!1),await(0,l.mZ)(z.id,z.name,M))},existingDoc:z??void 0,onCancel:()=>H(!1)}),(0,w.jsxs)(h,{children:[(0,w.jsx)(d.M,{value:M,onChange:L,collapsed:S,onToggleCollapse:()=>{!S&&C&&$(!1),T(e=>!e)},scrollRef:"markdown"===r?A:void 0,onScroll:"markdown"===r?O:void 0}),"markdown"===r?(0,w.jsx)(u.r,{content:t,collapsed:C,onToggleCollapse:F,scrollRef:J,onScroll:P}):(0,w.jsx)(p.u,{code:y,collapsed:C,onToggleCollapse:F})]})]})}const j=document.getElementById("root");if(!j)throw new Error("Root element #root not found");(0,t.H)(j).render((0,w.jsx)(y,{}))},58997(e,r,o){var t=o(48991);r.H=t.createRoot,t.hydrateRoot}}]);