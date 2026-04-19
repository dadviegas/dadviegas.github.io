"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([["5512"],{8997(e,o,r){var i=r(2727);o.createRoot=i.createRoot,i.hydrateRoot},3611(e,o,r){var i=r(5723),n=r(7991),t=r(8997),d=r(6859),a=r.n(d),l=r(5726),s=r(1638),c=r(1344),p=r(6480),x=r(679),g=r(2946),h=r(1315),f=r(5151);let u=a().span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,b=a().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${l.w4.colors.accent};border-radius:${l.w4.borderRadius.md};color:${l.w4.colors.accent};font-size:${l.w4.typography.fontSizeBase};font-family:${l.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,m=a().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.mainText};
  }
`,w=a().div`position: relative;`,y=a().div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 220px;
  overflow: hidden;
`,k=a().button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${l.w4.colors.mainBg}; }
`,$=a().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,j=a().div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,v=a().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${l.w4.colors.border};
  }
`,z=a().div`
  display: flex;
  align-items: center;
  padding: 6px ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: ${l.w4.colors.sidebarBg};
  flex-shrink: 0;
`,R=a().textarea`
  flex: 1;
  background: ${l.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;

  &::placeholder {
    color: ${l.w4.colors.mainTextMuted};
  }
`,S=a().div`
  flex: 1;
  overflow: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,C=a().table`
  width: 100%;
  border-collapse: collapse;
`,M=a().tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,T=a().td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${l.w4.colors.border};
  vertical-align: top;
`,L=a().td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":l.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,E=a().td`
  padding: 0 ${l.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${l.w4.colors.mainText};
  vertical-align: top;
`,N=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${l.w4.spacing.sm};
  color: ${l.w4.colors.mainTextMuted};
  font-size: 13px;
`,O="toolkit:codediff",B=document.getElementById("root");if(!B)throw Error("Root element #root not found");(0,t.createRoot)(B).render((0,i.jsx)(function({topBarRight:e}){let[o,r]=(0,n.useState)(""),[t,d]=(0,n.useState)(""),[a,B]=(0,n.useState)(!1),[F,I]=(0,n.useState)(!1),[J,P]=(0,n.useState)(null),A=(0,n.useRef)(null),_=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,l.PL)(O).then(e=>{if(e)try{let o=JSON.parse(e);r(o.original??""),d(o.modified??"")}catch{}_.current=!0})},[]),(0,n.useEffect)(()=>{if(!_.current)return;let e=setTimeout(()=>(0,l.Is)(O,JSON.stringify({original:o,modified:t})),400);return()=>clearTimeout(e)},[o,t]);let D=async e=>{I(!1),await (0,l.KL)("codediff",e,JSON.stringify({original:o,modified:t})),P(null)},U=async()=>{J&&(I(!1),await (0,l.mZ)(J.id,J.name,JSON.stringify({original:o,modified:t})))};(0,n.useEffect)(()=>{let e=e=>{A.current&&!A.current.contains(e.target)&&B(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let K=(0,n.useMemo)(()=>(0,h.P)(o,t),[o,t]),W=(0,n.useMemo)(()=>(0,h.h)(K),[K]),Z=(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,i.jsxs)(m,{onClick:()=>{r(""),d(""),P(null),(0,l.Is)(O,"")},children:[(0,i.jsx)(c.A,{size:13})," New"]}),(0,i.jsxs)(u,{kind:"add",children:["+",W.added]}),(0,i.jsxs)(u,{kind:"del",children:["−",W.removed]}),(0,i.jsxs)(u,{kind:"mod",children:["~",W.changed]}),(0,i.jsx)(l.UO,{appId:"codediff",onLoad:(e,o,i)=>{P(o&&i?{id:o,name:i}:null);try{let{original:o,modified:i}=JSON.parse(e);void 0!==o&&r(o),void 0!==i&&d(i)}catch{}}}),(0,i.jsxs)(b,{onClick:()=>I(!0),children:[(0,i.jsx)(p.A,{size:14}),"Save"]}),(0,i.jsxs)(w,{ref:A,children:[(0,i.jsxs)(m,{onClick:()=>B(e=>!e),children:["Examples ",(0,i.jsx)(x.A,{size:12})]}),a&&(0,i.jsx)(y,{children:f.k.map(e=>(0,i.jsx)(k,{onClick:()=>{r(e.original),d(e.modified),B(!1)},children:e.label},e.label))})]}),e]});return(0,i.jsxs)(l.PE,{title:"Code Diff",sidebar:(0,i.jsx)(s.tz,{activeAppId:"codediff"}),topBarRight:Z,children:[F&&(0,i.jsx)(l.MJ,{onSave:D,onUpdate:U,existingDoc:J??void 0,onCancel:()=>I(!1)}),(0,i.jsxs)($,{children:[(0,i.jsxs)(j,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(z,{children:"Original"}),(0,i.jsx)(R,{value:o,onChange:e=>r(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(z,{children:"Modified"}),(0,i.jsx)(R,{value:t,onChange:e=>d(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,i.jsx)(S,{children:0===K.length?(0,i.jsxs)(N,{children:[(0,i.jsx)(g.A,{size:32,strokeWidth:1}),(0,i.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,i.jsx)(C,{children:(0,i.jsx)("tbody",{children:K.map((e,o)=>{var r;return(0,i.jsxs)(M,{kind:e.type,children:[(0,i.jsx)(T,{children:e.oldNum??" "}),(0,i.jsx)(T,{children:e.newNum??" "}),(0,i.jsx)(L,{kind:e.type,children:"insert"===(r=e.type)?"+":"delete"===r?"−":"replace"===r?"~":" "}),(0,i.jsx)(E,{children:"replace"===e.type?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,i.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},o)})})})})]})]})},{}))}}]);