"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([[6036],{46036(e,r,t){t.r(r),t.d(r,{default:()=>b});var o=t(27359),n=t(53233),a=t(71344),s=t(76480),i=t(40458),l=t(78967),c=t(51036),d=t(69835),u=t(47579),p=t(15933),m=t(65723);function g(){const e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}const f=n.default.button`
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
`,w=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,x=n.default.div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,h=n.default.button`
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
`,k="toolkit:pad";function b({topBarRight:e}){const[r,t]=(0,o.useState)(g),[n,b]=(0,o.useState)(""),[v,y]=(0,o.useState)(""),[j,S]=(0,o.useState)(!1),[T,C]=(0,o.useState)(!1),[$,R]=(0,o.useState)(!1),[H,z]=(0,o.useState)(null),I=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,i.PL)(k).then(e=>{if(e)try{const r=JSON.parse(e);r.md&&b(r.md),r.mermaid&&y(r.mermaid)}catch{}I.current=!0})},[]),(0,o.useEffect)(()=>{if(!I.current)return;const e=setTimeout(()=>(0,i.Is)(k,JSON.stringify({md:n,mermaid:v})),400);return()=>clearTimeout(e)},[n,v]);const M="markdown"===r?"mdpad":"mermaidpad",B="markdown"===r?n:v,L="markdown"===r?b:y,_=e=>{e!==r&&(t(e),z(null))},A=(0,o.useRef)(null),E=(0,o.useRef)(null),J=(0,o.useRef)(null),N=(0,o.useCallback)(e=>{if("preview"===J.current)return;const r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);E.current&&(J.current="editor",E.current.scrollTop=t*(E.current.scrollHeight-E.current.clientHeight),setTimeout(()=>{J.current=null},50))},[]),O=(0,o.useCallback)(e=>{if("editor"===J.current)return;const r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);A.current&&(J.current="preview",A.current.scrollTop=t*(A.current.scrollHeight-A.current.clientHeight),setTimeout(()=>{J.current=null},50))},[]),P=()=>{!T&&j&&S(!1),C(e=>!e)},F=(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{active:"markdown"===r,onClick:()=>_("markdown"),children:"Markdown"}),(0,m.jsx)(h,{active:"mermaid"===r,onClick:()=>_("mermaid"),children:"Mermaid"})]}),(0,m.jsxs)(f,{onClick:()=>{b(""),y(""),z(null),(0,i.Is)(k,"")},children:[(0,m.jsx)(a.A,{size:14})," New"]}),(0,m.jsx)(i.UO,{appId:M,onLoad:(e,r,t)=>{L(e),z(r&&t?{id:r,name:t}:null)}}),(0,m.jsxs)(f,{onClick:()=>R(!0),children:[(0,m.jsx)(s.A,{size:14}),"Save"]}),"markdown"===r?(0,m.jsx)(u.H,{onSelect:b}):(0,m.jsx)(p.C,{onSelect:y}),e]});return(0,m.jsxs)(i.PE,{title:"Pad",sidebar:(0,m.jsx)(i.tz,{activeAppId:"pad"}),topBarRight:F,children:[$&&(0,m.jsx)(i.MJ,{onSave:async e=>{R(!1),await(0,i.KL)(M,e,B),z(null)},onUpdate:async()=>{H&&(R(!1),await(0,i.mZ)(H.id,H.name,B))},existingDoc:H??void 0,onCancel:()=>R(!1)}),(0,m.jsxs)(w,{children:[(0,m.jsx)(l.M,{value:B,onChange:L,collapsed:j,onToggleCollapse:()=>{!j&&T&&C(!1),S(e=>!e)},scrollRef:"markdown"===r?A:void 0,onScroll:"markdown"===r?N:void 0}),"markdown"===r?(0,m.jsx)(c.r,{content:n,collapsed:T,onToggleCollapse:P,scrollRef:E,onScroll:O}):(0,m.jsx)(d.u,{code:v,collapsed:T,onToggleCollapse:P})]})]})}}}]);
//# sourceMappingURL=6036.8dee86f0ddefc0470611.js.map