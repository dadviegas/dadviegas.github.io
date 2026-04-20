"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([["5512"],{58997(e,r,o){var t=o(62727);r.createRoot=t.createRoot,t.hydrateRoot},13611(e,r,o){var t=o(65723),n=o(58997),a=o(37991),l=o(36859),i=o.n(l),s=o(71344),c=o(76480),d=o(60246),u=o(8581),p=o(53804),m=o(2099),g=o(65320),w=o(7279),x=o(56666);function h(){let e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}let f=i().button`
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
  transition: background 0.15s, opacity 0.15s;
  white-space: nowrap;
  &:hover { background: rgba(88, 166, 255, 0.1); }
`,k=i().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,b=i().div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,y=i().button`
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
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  background: ${({active:e})=>e?d.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};

  &:hover {
    color: ${d.w4.colors.mainText};
    background: ${({active:e})=>e?d.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`,v="toolkit:pad",j=document.getElementById("root");if(!j)throw Error("Root element #root not found");(0,n.createRoot)(j).render((0,t.jsx)(function({topBarRight:e}){let[r,o]=(0,a.useState)(h),[n,l]=(0,a.useState)(""),[i,j]=(0,a.useState)(""),[S,T]=(0,a.useState)(!1),[C,R]=(0,a.useState)(!1),[$,H]=(0,a.useState)(!1),[z,I]=(0,a.useState)(null),E=(0,a.useRef)(!1);(0,a.useEffect)(()=>{(0,d.PL)(v).then(e=>{if(e)try{let r=JSON.parse(e);r.md&&l(r.md),r.mermaid&&j(r.mermaid)}catch{}E.current=!0})},[]),(0,a.useEffect)(()=>{if(!E.current)return;let e=setTimeout(()=>(0,d.Is)(v,JSON.stringify({md:n,mermaid:i})),400);return()=>clearTimeout(e)},[n,i]);let M="markdown"===r?"mdpad":"mermaidpad",B="markdown"===r?n:i,L="markdown"===r?l:j,_=async e=>{H(!1),await (0,d.KL)(M,e,B),I(null)},A=async()=>{z&&(H(!1),await (0,d.mZ)(z.id,z.name,B))},J=e=>{e!==r&&(o(e),I(null))},N=(0,a.useRef)(null),O=(0,a.useRef)(null),P=(0,a.useRef)(null),F=(0,a.useCallback)(e=>{if("preview"===P.current)return;let r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);O.current&&(P.current="editor",O.current.scrollTop=o*(O.current.scrollHeight-O.current.clientHeight),setTimeout(()=>{P.current=null},50))},[]),U=(0,a.useCallback)(e=>{if("editor"===P.current)return;let r=e.currentTarget,o=r.scrollTop/(r.scrollHeight-r.clientHeight);N.current&&(P.current="preview",N.current.scrollTop=o*(N.current.scrollHeight-N.current.clientHeight),setTimeout(()=>{P.current=null},50))},[]),W=()=>{!C&&S&&T(!1),R(e=>!e)},D=(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:d.w4.spacing.sm},children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{active:"markdown"===r,onClick:()=>J("markdown"),children:"Markdown"}),(0,t.jsx)(y,{active:"mermaid"===r,onClick:()=>J("mermaid"),children:"Mermaid"})]}),(0,t.jsxs)(f,{onClick:()=>{l(""),j(""),I(null),(0,d.Is)(v,"")},children:[(0,t.jsx)(s.A,{size:14})," New"]}),(0,t.jsx)(d.UO,{appId:M,onLoad:(e,r,o)=>{L(e),I(r&&o?{id:r,name:o}:null)}}),(0,t.jsxs)(f,{onClick:()=>H(!0),children:[(0,t.jsx)(c.A,{size:14}),"Save"]}),"markdown"===r?(0,t.jsx)(w.H,{onSelect:l}):(0,t.jsx)(x.C,{onSelect:j}),e]});return(0,t.jsxs)(d.PE,{title:"Pad",sidebar:(0,t.jsx)(u.tz,{activeAppId:"pad"}),topBarRight:D,children:[$&&(0,t.jsx)(d.MJ,{onSave:_,onUpdate:A,existingDoc:z??void 0,onCancel:()=>H(!1)}),(0,t.jsxs)(k,{children:[(0,t.jsx)(p.M,{value:B,onChange:L,collapsed:S,onToggleCollapse:()=>{!S&&C&&R(!1),T(e=>!e)},scrollRef:"markdown"===r?N:void 0,onScroll:"markdown"===r?F:void 0}),"markdown"===r?(0,t.jsx)(m.r,{content:n,collapsed:C,onToggleCollapse:W,scrollRef:O,onScroll:U}):(0,t.jsx)(g.u,{code:i,collapsed:C,onToggleCollapse:W})]})]})},{}))}}]);