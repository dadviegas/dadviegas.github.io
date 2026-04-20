"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([["5512"],{58997(e,r,t){var o=t(62727);r.createRoot=o.createRoot,o.hydrateRoot},13611(e,r,t){var o=t(65723),n=t(58997),a=t(37991),i=t(36859),l=t.n(i),s=t(71344),c=t(76480),d=t(23930),u=t(8581),p=t(53804),m=t(2099),w=t(65320),g=t(7279),x=t(56666);function h(){let e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}let f=l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${d.w4.colors.accent};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.accent};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.base}, opacity ${d.w4.transitions.base};
  white-space: nowrap;
  &:hover { background: rgba(88, 166, 255, 0.1); }
`,b=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,k=l().div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,y=l().button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  font-size: 12px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${d.w4.transitions.base}, color ${d.w4.transitions.base};
  white-space: nowrap;
  background: ${({active:e})=>e?d.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};

  &:hover {
    color: ${d.w4.colors.mainText};
    background: ${({active:e})=>e?d.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`,v="toolkit:pad",j=document.getElementById("root");if(!j)throw Error("Root element #root not found");(0,n.createRoot)(j).render((0,o.jsx)(function({topBarRight:e}){let[r,t]=(0,a.useState)(h),[n,i]=(0,a.useState)(""),[l,j]=(0,a.useState)(""),[$,S]=(0,a.useState)(!1),[T,C]=(0,a.useState)(!1),[R,H]=(0,a.useState)(!1),[z,I]=(0,a.useState)(null),E=(0,a.useRef)(!1);(0,a.useEffect)(()=>{(0,d.PL)(v).then(e=>{if(e)try{let r=JSON.parse(e);r.md&&i(r.md),r.mermaid&&j(r.mermaid)}catch{}E.current=!0})},[]),(0,a.useEffect)(()=>{if(!E.current)return;let e=setTimeout(()=>(0,d.Is)(v,JSON.stringify({md:n,mermaid:l})),400);return()=>clearTimeout(e)},[n,l]);let M="markdown"===r?"mdpad":"mermaidpad",B="markdown"===r?n:l,L="markdown"===r?i:j,_=async e=>{H(!1),await (0,d.KL)(M,e,B),I(null)},A=async()=>{z&&(H(!1),await (0,d.mZ)(z.id,z.name,B))},J=e=>{e!==r&&(t(e),I(null))},N=(0,a.useRef)(null),O=(0,a.useRef)(null),P=(0,a.useRef)(null),F=(0,a.useCallback)(e=>{if("preview"===P.current)return;let r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);O.current&&(P.current="editor",O.current.scrollTop=t*(O.current.scrollHeight-O.current.clientHeight),setTimeout(()=>{P.current=null},50))},[]),U=(0,a.useCallback)(e=>{if("editor"===P.current)return;let r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);N.current&&(P.current="preview",N.current.scrollTop=t*(N.current.scrollHeight-N.current.clientHeight),setTimeout(()=>{P.current=null},50))},[]),W=()=>{!T&&$&&S(!1),C(e=>!e)},D=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:d.w4.spacing.sm},children:[(0,o.jsxs)(k,{children:[(0,o.jsx)(y,{active:"markdown"===r,onClick:()=>J("markdown"),children:"Markdown"}),(0,o.jsx)(y,{active:"mermaid"===r,onClick:()=>J("mermaid"),children:"Mermaid"})]}),(0,o.jsxs)(f,{onClick:()=>{i(""),j(""),I(null),(0,d.Is)(v,"")},children:[(0,o.jsx)(s.A,{size:14})," New"]}),(0,o.jsx)(d.UO,{appId:M,onLoad:(e,r,t)=>{L(e),I(r&&t?{id:r,name:t}:null)}}),(0,o.jsxs)(f,{onClick:()=>H(!0),children:[(0,o.jsx)(c.A,{size:14}),"Save"]}),"markdown"===r?(0,o.jsx)(g.H,{onSelect:i}):(0,o.jsx)(x.C,{onSelect:j}),e]});return(0,o.jsxs)(d.PE,{title:"Pad",sidebar:(0,o.jsx)(u.tz,{activeAppId:"pad"}),topBarRight:D,children:[R&&(0,o.jsx)(d.MJ,{onSave:_,onUpdate:A,existingDoc:z??void 0,onCancel:()=>H(!1)}),(0,o.jsxs)(b,{children:[(0,o.jsx)(p.M,{value:B,onChange:L,collapsed:$,onToggleCollapse:()=>{!$&&T&&C(!1),S(e=>!e)},scrollRef:"markdown"===r?N:void 0,onScroll:"markdown"===r?F:void 0}),"markdown"===r?(0,o.jsx)(m.r,{content:n,collapsed:T,onToggleCollapse:W,scrollRef:O,onScroll:U}):(0,o.jsx)(w.u,{code:l,collapsed:T,onToggleCollapse:W})]})]})},{}))}}]);