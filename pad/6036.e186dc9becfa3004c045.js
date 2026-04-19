"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[6036],{46036(e,r,t){t.r(r),t.d(r,{default:()=>v});var o=t(27359),n=t(53233),a=t(71344),s=t(76480),i=t(4901),l=t(49094),c=t(78967),d=t(22402),u=t(69835),p=t(47579),m=t(15933),g=t(65723);function f(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const w=n.default.button`
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
`,x=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,h=n.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,k=n.default.button`
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
`,b="toolkit:pad";function v({topBarRight:e}){const[r,t]=(0,o.useState)(f),[n,v]=(0,o.useState)(""),[y,j]=(0,o.useState)(""),[S,T]=(0,o.useState)(!1),[C,$]=(0,o.useState)(!1),[R,H]=(0,o.useState)(!1),[z,I]=(0,o.useState)(null),M=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,i.PL)(b).then(e=>{if(e)try{const r=JSON.parse(e);r.md&&v(r.md),r.mermaid&&j(r.mermaid)}catch{}M.current=!0})},[]),(0,o.useEffect)(()=>{if(!M.current)return;const e=setTimeout(()=>(0,i.Is)(b,JSON.stringify({md:n,mermaid:y})),400);return()=>clearTimeout(e)},[n,y]);const B="markdown"===r?"mdpad":"mermaidpad",L="markdown"===r?n:y,_="markdown"===r?v:j,A=e=>{e!==r&&(t(e),I(null))},E=(0,o.useRef)(null),J=(0,o.useRef)(null),N=(0,o.useRef)(null),O=(0,o.useCallback)(e=>{if("preview"===N.current)return;const r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);J.current&&(N.current="editor",J.current.scrollTop=t*(J.current.scrollHeight-J.current.clientHeight),setTimeout(()=>{N.current=null},50))},[]),P=(0,o.useCallback)(e=>{if("editor"===N.current)return;const r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);E.current&&(N.current="preview",E.current.scrollTop=t*(E.current.scrollHeight-E.current.clientHeight),setTimeout(()=>{N.current=null},50))},[]),F=()=>{!C&&S&&T(!1),$(e=>!e)},U=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,g.jsxs)(h,{children:[(0,g.jsx)(k,{active:"markdown"===r,onClick:()=>A("markdown"),children:"Markdown"}),(0,g.jsx)(k,{active:"mermaid"===r,onClick:()=>A("mermaid"),children:"Mermaid"})]}),(0,g.jsxs)(w,{onClick:()=>{v(""),j(""),I(null),(0,i.Is)(b,"")},children:[(0,g.jsx)(a.A,{size:14})," New"]}),(0,g.jsx)(i.UO,{appId:B,onLoad:(e,r,t)=>{_(e),I(r&&t?{id:r,name:t}:null)}}),(0,g.jsxs)(w,{onClick:()=>H(!0),children:[(0,g.jsx)(s.A,{size:14}),"Save"]}),"markdown"===r?(0,g.jsx)(p.H,{onSelect:v}):(0,g.jsx)(m.C,{onSelect:j}),e]});return(0,g.jsxs)(i.PE,{title:"Pad",sidebar:(0,g.jsx)(l.tz,{activeAppId:"pad"}),topBarRight:U,children:[R&&(0,g.jsx)(i.MJ,{onSave:async e=>{H(!1),await(0,i.KL)(B,e,L),I(null)},onUpdate:async()=>{z&&(H(!1),await(0,i.mZ)(z.id,z.name,L))},existingDoc:z??void 0,onCancel:()=>H(!1)}),(0,g.jsxs)(x,{children:[(0,g.jsx)(c.M,{value:L,onChange:_,collapsed:S,onToggleCollapse:()=>{!S&&C&&$(!1),T(e=>!e)},scrollRef:"markdown"===r?E:void 0,onScroll:"markdown"===r?O:void 0}),"markdown"===r?(0,g.jsx)(d.r,{content:n,collapsed:C,onToggleCollapse:F,scrollRef:J,onScroll:P}):(0,g.jsx)(u.u,{code:y,collapsed:C,onToggleCollapse:F})]})]})}}}]);