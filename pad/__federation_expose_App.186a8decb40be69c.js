"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([["6362"],{73935(e,r,t){t.r(r),t.d(r,{default:()=>v});var o=t(65723),n=t(37991),a=t(36859),l=t.n(a),i=t(71344),s=t(76480),c=t(15726),d=t(8581),u=t(53804),p=t(2099),m=t(65320),g=t(7279),w=t(56666);function x(){let e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}let f=l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${c.w4.colors.accent};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.accent};
  font-size: ${c.w4.typography.fontSizeBase};
  font-family: ${c.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, opacity 0.15s;
  white-space: nowrap;
  &:hover { background: rgba(88, 166, 255, 0.1); }
`,h=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,k=l().div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
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
  border-radius: ${c.w4.borderRadius.sm};
  font-size: 12px;
  font-weight: 600;
  font-family: ${c.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  background: ${({active:e})=>e?c.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?c.w4.colors.mainText:c.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};

  &:hover {
    color: ${c.w4.colors.mainText};
    background: ${({active:e})=>e?c.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`,y="toolkit:pad";function v({topBarRight:e}){let[r,t]=(0,n.useState)(x),[a,l]=(0,n.useState)(""),[j,S]=(0,n.useState)(""),[T,C]=(0,n.useState)(!1),[$,R]=(0,n.useState)(!1),[H,z]=(0,n.useState)(!1),[I,M]=(0,n.useState)(null),L=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,c.PL)(y).then(e=>{if(e)try{let r=JSON.parse(e);r.md&&l(r.md),r.mermaid&&S(r.mermaid)}catch{}L.current=!0})},[]),(0,n.useEffect)(()=>{if(!L.current)return;let e=setTimeout(()=>(0,c.Is)(y,JSON.stringify({md:a,mermaid:j})),400);return()=>clearTimeout(e)},[a,j]);let _="markdown"===r?"mdpad":"mermaidpad",A="markdown"===r?a:j,B="markdown"===r?l:S,E=async e=>{z(!1),await (0,c.KL)(_,e,A),M(null)},J=async()=>{I&&(z(!1),await (0,c.mZ)(I.id,I.name,A))},N=e=>{e!==r&&(t(e),M(null))},O=(0,n.useRef)(null),P=(0,n.useRef)(null),F=(0,n.useRef)(null),U=(0,n.useCallback)(e=>{if("preview"===F.current)return;let r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);P.current&&(F.current="editor",P.current.scrollTop=t*(P.current.scrollHeight-P.current.clientHeight),setTimeout(()=>{F.current=null},50))},[]),W=(0,n.useCallback)(e=>{if("editor"===F.current)return;let r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);O.current&&(F.current="preview",O.current.scrollTop=t*(O.current.scrollHeight-O.current.clientHeight),setTimeout(()=>{F.current=null},50))},[]),D=()=>{!$&&T&&C(!1),R(e=>!e)},K=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:c.w4.spacing.sm},children:[(0,o.jsxs)(k,{children:[(0,o.jsx)(b,{active:"markdown"===r,onClick:()=>N("markdown"),children:"Markdown"}),(0,o.jsx)(b,{active:"mermaid"===r,onClick:()=>N("mermaid"),children:"Mermaid"})]}),(0,o.jsxs)(f,{onClick:()=>{l(""),S(""),M(null),(0,c.Is)(y,"")},children:[(0,o.jsx)(i.A,{size:14})," New"]}),(0,o.jsx)(c.UO,{appId:_,onLoad:(e,r,t)=>{B(e),M(r&&t?{id:r,name:t}:null)}}),(0,o.jsxs)(f,{onClick:()=>z(!0),children:[(0,o.jsx)(s.A,{size:14}),"Save"]}),"markdown"===r?(0,o.jsx)(g.H,{onSelect:l}):(0,o.jsx)(w.C,{onSelect:S}),e]});return(0,o.jsxs)(c.PE,{title:"Pad",sidebar:(0,o.jsx)(d.tz,{activeAppId:"pad"}),topBarRight:K,children:[H&&(0,o.jsx)(c.MJ,{onSave:E,onUpdate:J,existingDoc:I??void 0,onCancel:()=>z(!1)}),(0,o.jsxs)(h,{children:[(0,o.jsx)(u.M,{value:A,onChange:B,collapsed:T,onToggleCollapse:()=>{!T&&$&&R(!1),C(e=>!e)},scrollRef:"markdown"===r?O:void 0,onScroll:"markdown"===r?U:void 0}),"markdown"===r?(0,o.jsx)(p.r,{content:a,collapsed:$,onToggleCollapse:D,scrollRef:P,onScroll:W}):(0,o.jsx)(m.u,{code:j,collapsed:$,onToggleCollapse:D})]})]})}}}]);