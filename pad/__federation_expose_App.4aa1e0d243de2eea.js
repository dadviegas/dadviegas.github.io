"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([["6362"],{73935(e,r,t){t.r(r),t.d(r,{default:()=>k});var n=t(65723),o=t(37991),a=t(36859),i=t.n(a),l=t(94764),s=t(42907),c=t(53804),d=t(2099),u=t(65320),p=t(7279),m=t(56666);function w(){let e=window.location.hash.toLowerCase();return e.startsWith("#/mermaidpad")||e.startsWith("#/mermaid")?"mermaid":"markdown"}let g=i().button`
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
  transition: background ${l.w4.transitions.base}, opacity ${l.w4.transitions.base};
  white-space: nowrap;
  &:hover { background: rgba(88, 166, 255, 0.1); }
`,x=i().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,f=i().div`
  display: flex;
  position: relative;
  height: 30px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
  gap: 2px;
  flex-shrink: 0;
`,h=i().button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, color ${l.w4.transitions.base};
  white-space: nowrap;
  background: ${({active:e})=>e?l.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};

  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${({active:e})=>e?l.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`,b="toolkit:pad";function k({topBarRight:e}){let[r,t]=(0,o.useState)(w),[a,i]=(0,o.useState)(""),[v,y]=(0,o.useState)(""),[$,j]=(0,o.useState)(!1),[S,T]=(0,o.useState)(!1),[C,R]=(0,o.useState)(!1),[H,z]=(0,o.useState)(null),I=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,l.PL)(b).then(e=>{if(e)try{let r=JSON.parse(e);r.md&&i(r.md),r.mermaid&&y(r.mermaid)}catch{}I.current=!0})},[]),(0,o.useEffect)(()=>{if(!I.current)return;let e=setTimeout(()=>(0,l.Is)(b,JSON.stringify({md:a,mermaid:v})),400);return()=>clearTimeout(e)},[a,v]);let M="markdown"===r?"mdpad":"mermaidpad",L="markdown"===r?a:v,_="markdown"===r?i:y,B=async e=>{R(!1),await (0,l.KL)(M,e,L),z(null)},E=async()=>{H&&(R(!1),await (0,l.mZ)(H.id,H.name,L))},J=e=>{e!==r&&(t(e),z(null))},N=(0,o.useRef)(null),O=(0,o.useRef)(null),P=(0,o.useRef)(null),F=(0,o.useCallback)(e=>{if("preview"===P.current)return;let r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);O.current&&(P.current="editor",O.current.scrollTop=t*(O.current.scrollHeight-O.current.clientHeight),setTimeout(()=>{P.current=null},50))},[]),U=(0,o.useCallback)(e=>{if("editor"===P.current)return;let r=e.currentTarget,t=r.scrollTop/(r.scrollHeight-r.clientHeight);N.current&&(P.current="preview",N.current.scrollTop=t*(N.current.scrollHeight-N.current.clientHeight),setTimeout(()=>{P.current=null},50))},[]),W=()=>{!S&&$&&j(!1),T(e=>!e)},A=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(h,{active:"markdown"===r,onClick:()=>J("markdown"),children:"Markdown"}),(0,n.jsx)(h,{active:"mermaid"===r,onClick:()=>J("mermaid"),children:"Mermaid"})]}),(0,n.jsxs)(g,{onClick:()=>{i(""),y(""),z(null),(0,l.Is)(b,"")},children:[(0,n.jsx)(s.In,{name:"file-plus",size:14})," New"]}),(0,n.jsx)(l.UO,{appId:M,onLoad:(e,r,t)=>{_(e),z(r&&t?{id:r,name:t}:null)}}),(0,n.jsxs)(g,{onClick:()=>R(!0),children:[(0,n.jsx)(s.In,{name:"save",size:14}),"Save"]}),"markdown"===r?(0,n.jsx)(p.H,{onSelect:i}):(0,n.jsx)(m.C,{onSelect:y}),e]});return(0,n.jsxs)(l.PE,{title:"Pad",sidebar:(0,n.jsx)(s.tz,{activeAppId:"pad"}),topBarRight:A,children:[C&&(0,n.jsx)(s.MJ,{onSave:B,onUpdate:E,existingDoc:H??void 0,onCancel:()=>R(!1)}),(0,n.jsxs)(x,{children:[(0,n.jsx)(c.M,{value:L,onChange:_,collapsed:$,onToggleCollapse:()=>{!$&&S&&T(!1),j(e=>!e)},scrollRef:"markdown"===r?N:void 0,onScroll:"markdown"===r?F:void 0}),"markdown"===r?(0,n.jsx)(d.r,{content:a,collapsed:S,onToggleCollapse:W,scrollRef:O,onScroll:U}):(0,n.jsx)(u.u,{code:v,collapsed:S,onToggleCollapse:W})]})]})}}}]);