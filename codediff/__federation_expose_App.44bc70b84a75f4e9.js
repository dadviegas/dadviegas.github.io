"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([["6362"],{3935(e,i,r){r.r(i),r.d(i,{default:()=>O});var o=r(5723),n=r(7991),t=r(6859),d=r.n(t),a=r(246),l=r(1638),s=r(1344),c=r(6480),p=r(679),x=r(2946),g=r(1315),h=r(5151);let f=d().span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,u=d().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,b=d().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${a.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${a.w4.colors.accent};
    color: ${a.w4.colors.mainText};
  }
`,m=d().div`position: relative;`,w=d().div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 220px;
  overflow: hidden;
`,y=d().button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${a.w4.colors.mainText};
  font-size: 13px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${a.w4.colors.mainBg}; }
`,k=d().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,$=d().div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${a.w4.colors.border};
`,j=d().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${a.w4.colors.border};
  }
`,v=d().div`
  display: flex;
  align-items: center;
  padding: 6px ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${a.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
`,z=d().textarea`
  flex: 1;
  background: ${a.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${a.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;

  &::placeholder {
    color: ${a.w4.colors.mainTextMuted};
  }
`,S=d().div`
  flex: 1;
  overflow: auto;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,C=d().table`
  width: 100%;
  border-collapse: collapse;
`,M=d().tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,T=d().td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${a.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${a.w4.colors.border};
  vertical-align: top;
`,L=d().td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":a.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,R=d().td`
  padding: 0 ${a.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${a.w4.colors.mainText};
  vertical-align: top;
`,N=d().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${a.w4.spacing.sm};
  color: ${a.w4.colors.mainTextMuted};
  font-size: 13px;
`,E="toolkit:codediff";function O({topBarRight:e}){let[i,r]=(0,n.useState)(""),[t,d]=(0,n.useState)(""),[F,J]=(0,n.useState)(!1),[P,A]=(0,n.useState)(!1),[B,I]=(0,n.useState)(null),_=(0,n.useRef)(null),D=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,a.PL)(E).then(e=>{if(e)try{let i=JSON.parse(e);r(i.original??""),d(i.modified??"")}catch{}D.current=!0})},[]),(0,n.useEffect)(()=>{if(!D.current)return;let e=setTimeout(()=>(0,a.Is)(E,JSON.stringify({original:i,modified:t})),400);return()=>clearTimeout(e)},[i,t]);let U=async e=>{A(!1),await (0,a.KL)("codediff",e,JSON.stringify({original:i,modified:t})),I(null)},K=async()=>{B&&(A(!1),await (0,a.mZ)(B.id,B.name,JSON.stringify({original:i,modified:t})))};(0,n.useEffect)(()=>{let e=e=>{_.current&&!_.current.contains(e.target)&&J(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let W=(0,n.useMemo)(()=>(0,g.P)(i,t),[i,t]),Z=(0,n.useMemo)(()=>(0,g.h)(W),[W]),q=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,o.jsxs)(b,{onClick:()=>{r(""),d(""),I(null),(0,a.Is)(E,"")},children:[(0,o.jsx)(s.A,{size:13})," New"]}),(0,o.jsxs)(f,{kind:"add",children:["+",Z.added]}),(0,o.jsxs)(f,{kind:"del",children:["−",Z.removed]}),(0,o.jsxs)(f,{kind:"mod",children:["~",Z.changed]}),(0,o.jsx)(a.UO,{appId:"codediff",onLoad:(e,i,o)=>{I(i&&o?{id:i,name:o}:null);try{let{original:i,modified:o}=JSON.parse(e);void 0!==i&&r(i),void 0!==o&&d(o)}catch{}}}),(0,o.jsxs)(u,{onClick:()=>A(!0),children:[(0,o.jsx)(c.A,{size:14}),"Save"]}),(0,o.jsxs)(m,{ref:_,children:[(0,o.jsxs)(b,{onClick:()=>J(e=>!e),children:["Examples ",(0,o.jsx)(p.A,{size:12})]}),F&&(0,o.jsx)(w,{children:h.k.map(e=>(0,o.jsx)(y,{onClick:()=>{r(e.original),d(e.modified),J(!1)},children:e.label},e.label))})]}),e]});return(0,o.jsxs)(a.PE,{title:"Code Diff",sidebar:(0,o.jsx)(l.tz,{activeAppId:"codediff"}),topBarRight:q,children:[P&&(0,o.jsx)(a.MJ,{onSave:U,onUpdate:K,existingDoc:B??void 0,onCancel:()=>A(!1)}),(0,o.jsxs)(k,{children:[(0,o.jsxs)($,{children:[(0,o.jsxs)(j,{children:[(0,o.jsx)(v,{children:"Original"}),(0,o.jsx)(z,{value:i,onChange:e=>r(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,o.jsxs)(j,{children:[(0,o.jsx)(v,{children:"Modified"}),(0,o.jsx)(z,{value:t,onChange:e=>d(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,o.jsx)(S,{children:0===W.length?(0,o.jsxs)(N,{children:[(0,o.jsx)(x.A,{size:32,strokeWidth:1}),(0,o.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,o.jsx)(C,{children:(0,o.jsx)("tbody",{children:W.map((e,i)=>{var r;return(0,o.jsxs)(M,{kind:e.type,children:[(0,o.jsx)(T,{children:e.oldNum??" "}),(0,o.jsx)(T,{children:e.newNum??" "}),(0,o.jsx)(L,{kind:e.type,children:"insert"===(r=e.type)?"+":"delete"===r?"−":"replace"===r?"~":" "}),(0,o.jsx)(R,{children:"replace"===e.type?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,o.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},i)})})})})]})]})}}}]);