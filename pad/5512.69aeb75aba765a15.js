"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([["5512"],{58997(e,r,t){var o=t(62727);r.createRoot=o.createRoot,o.hydrateRoot},13611(e,r,t){var o=t(65723),n=t(58997),a=t(37991),i=t(36859),l=t.n(i),s=t(6063),c=t(42301),d=t(53804),u=t(2099),p=t(65320),m=t(7279),w=t(56666);function g(){let e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}let x=l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${s.w4.colors.accent};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.accent};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.base}, opacity ${s.w4.transitions.base};
  white-space: nowrap;
  &:hover { background: rgba(88, 166, 255, 0.1); }
`,f=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,h=l().div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,b=l().button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${s.w4.transitions.base}, color ${s.w4.transitions.base};
  white-space: nowrap;
  background: ${({active:e})=>e?s.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.mainText:s.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};

  &:hover {
    color: ${s.w4.colors.mainText};
    background: ${({active:e})=>e?s.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`,k="toolkit:pad",y=document.getElementById("root");if(!y)throw Error("Root element #root not found");(0,n.createRoot)(y).render((0,o.jsx)(function({topBarRight:e}){let[r,t]=(0,a.useState)(g),[n,i]=(0,a.useState)(""),[l,y]=(0,a.useState)(""),[v,j]=(0,a.useState)(!1),[$,S]=(0,a.useState)(!1),[T,C]=(0,a.useState)(!1),[R,H]=(0,a.useState)(null),I=(0,a.useRef)(!1);(0,a.useEffect)(()=>{(0,s.PL)(k).then(e=>{if(e)try{let r=JSON.parse(e);r.md&&i(r.md),r.mermaid&&y(r.mermaid)}catch{}I.current=!0})},[]),(0,a.useEffect)(()=>{if(!I.current)return;let e=setTimeout(()=>(0,s.Is)(k,JSON.stringify({md:n,mermaid:l})),400);return()=>clearTimeout(e)},[n,l]);let z="markdown"===r?"mdpad":"mermaidpad",E="markdown"===r?n:l,M="markdown"===r?i:y,B=async e=>{C(!1),await (0,s.KL)(z,e,E),H(null)},L=async()=>{R&&(C(!1),await (0,s.mZ)(R.id,R.name,E))},_=e=>{e!==r&&(t(e),H(null))},J=(0,a.useRef)(null),N=(0,a.useRef)(null),O=(0,a.useRef)(null),P=(0,a.useCallback)(e=>{if("preview"===O.current)return;let r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);N.current&&(O.current="editor",N.current.scrollTop=t*(N.current.scrollHeight-N.current.clientHeight),setTimeout(()=>{O.current=null},50))},[]),F=(0,a.useCallback)(e=>{if("editor"===O.current)return;let r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);J.current&&(O.current="preview",J.current.scrollTop=t*(J.current.scrollHeight-J.current.clientHeight),setTimeout(()=>{O.current=null},50))},[]),U=()=>{!$&&v&&j(!1),S(e=>!e)},W=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:s.w4.spacing.sm},children:[(0,o.jsxs)(h,{children:[(0,o.jsx)(b,{active:"markdown"===r,onClick:()=>_("markdown"),children:"Markdown"}),(0,o.jsx)(b,{active:"mermaid"===r,onClick:()=>_("mermaid"),children:"Mermaid"})]}),(0,o.jsxs)(x,{onClick:()=>{i(""),y(""),H(null),(0,s.Is)(k,"")},children:[(0,o.jsx)(c.In,{name:"file-plus",size:14})," New"]}),(0,o.jsx)(s.UO,{appId:z,onLoad:(e,r,t)=>{M(e),H(r&&t?{id:r,name:t}:null)}}),(0,o.jsxs)(x,{onClick:()=>C(!0),children:[(0,o.jsx)(c.In,{name:"save",size:14}),"Save"]}),"markdown"===r?(0,o.jsx)(m.H,{onSelect:i}):(0,o.jsx)(w.C,{onSelect:y}),e]});return(0,o.jsxs)(c.PE,{title:"Pad",sidebar:(0,o.jsx)(c.tz,{activeAppId:"pad"}),topBarRight:W,children:[T&&(0,o.jsx)(c.MJ,{onSave:B,onUpdate:L,existingDoc:R??void 0,onCancel:()=>C(!1)}),(0,o.jsxs)(f,{children:[(0,o.jsx)(d.M,{value:E,onChange:M,collapsed:v,onToggleCollapse:()=>{!v&&$&&S(!1),j(e=>!e)},scrollRef:"markdown"===r?J:void 0,onScroll:"markdown"===r?P:void 0}),"markdown"===r?(0,o.jsx)(u.r,{content:n,collapsed:$,onToggleCollapse:U,scrollRef:N,onScroll:F}):(0,o.jsx)(p.u,{code:l,collapsed:$,onToggleCollapse:U})]})]})},{}))}}]);