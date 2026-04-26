"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([["362"],{3935(e,i,n){n.r(i),n.d(i,{default:()=>L});var r=n(5723),o=n(7991),t=n(6859),d=n.n(t),a=n(6063),l=n(3501),s=n(1315),c=n(5151);let p=d().span`
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,x=d().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background ${a.w4.transitions.base};white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,g=d().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${a.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${a.w4.transitions.base};

  &:hover {
    border-color: ${a.w4.colors.accent};
    color: ${a.w4.colors.mainText};
  }
`,h=d().div`position: relative;`,f=d().div`
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
`,u=d().button`
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
`,b=d().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,m=d().div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${a.w4.colors.border};
`,w=d().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${a.w4.colors.border};
  }
`,y=d().div`
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
`,k=d().textarea`
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
`,$=d().div`
  flex: 1;
  overflow: auto;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,j=d().table`
  width: 100%;
  border-collapse: collapse;
`,v=d().tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,z=d().td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${a.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${a.w4.colors.border};
  vertical-align: top;
`,S=d().td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":a.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,C=d().td`
  padding: 0 ${a.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${a.w4.colors.mainText};
  vertical-align: top;
`,M=d().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${a.w4.spacing.sm};
  color: ${a.w4.colors.mainTextMuted};
  font-size: 13px;
`,T="toolkit:codediff";function L({topBarRight:e}){let[i,n]=(0,o.useState)(""),[t,d]=(0,o.useState)(""),[I,R]=(0,o.useState)(!1),[N,E]=(0,o.useState)(!1),[O,F]=(0,o.useState)(null),J=(0,o.useRef)(null),P=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,a.PL)(T).then(e=>{if(e)try{let i=JSON.parse(e);n(i.original??""),d(i.modified??"")}catch{}P.current=!0})},[]),(0,o.useEffect)(()=>{if(!P.current)return;let e=setTimeout(()=>(0,a.Is)(T,JSON.stringify({original:i,modified:t})),400);return()=>clearTimeout(e)},[i,t]);let B=async e=>{E(!1),await (0,a.KL)("codediff",e,JSON.stringify({original:i,modified:t})),F(null)},_=async()=>{O&&(E(!1),await (0,a.mZ)(O.id,O.name,JSON.stringify({original:i,modified:t})))};(0,o.useEffect)(()=>{let e=e=>{J.current&&!J.current.contains(e.target)&&R(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let D=(0,o.useMemo)(()=>(0,s.P)(i,t),[i,t]),U=(0,o.useMemo)(()=>(0,s.h)(D),[D]),A=(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,r.jsxs)(g,{onClick:()=>{n(""),d(""),F(null),(0,a.Is)(T,"")},children:[(0,r.jsx)(l.In,{name:"file-plus",size:13})," New"]}),(0,r.jsxs)(p,{kind:"add",children:["+",U.added]}),(0,r.jsxs)(p,{kind:"del",children:["−",U.removed]}),(0,r.jsxs)(p,{kind:"mod",children:["~",U.changed]}),(0,r.jsx)(a.UO,{appId:"codediff",onLoad:(e,i,r)=>{F(i&&r?{id:i,name:r}:null);try{let{original:i,modified:r}=JSON.parse(e);void 0!==i&&n(i),void 0!==r&&d(r)}catch{}}}),(0,r.jsxs)(x,{onClick:()=>E(!0),children:[(0,r.jsx)(l.In,{name:"save",size:14}),"Save"]}),(0,r.jsxs)(h,{ref:J,children:[(0,r.jsxs)(g,{onClick:()=>R(e=>!e),children:["Examples ",(0,r.jsx)(l.In,{name:"chevron-down",size:12})]}),I&&(0,r.jsx)(f,{children:c.k.map(e=>(0,r.jsx)(u,{onClick:()=>{n(e.original),d(e.modified),R(!1)},children:e.label},e.label))})]}),e]});return(0,r.jsxs)(l.PE,{title:"Code Diff",sidebar:(0,r.jsx)(l.tz,{activeAppId:"codediff"}),topBarRight:A,children:[N&&(0,r.jsx)(l.MJ,{onSave:B,onUpdate:_,existingDoc:O??void 0,onCancel:()=>E(!1)}),(0,r.jsxs)(b,{children:[(0,r.jsxs)(m,{children:[(0,r.jsxs)(w,{children:[(0,r.jsx)(y,{children:"Original"}),(0,r.jsx)(k,{value:i,onChange:e=>n(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)(y,{children:"Modified"}),(0,r.jsx)(k,{value:t,onChange:e=>d(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,r.jsx)($,{children:0===D.length?(0,r.jsxs)(M,{children:[(0,r.jsx)(l.In,{name:"git-branch",size:32,strokeWidth:1}),(0,r.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,r.jsx)(j,{children:(0,r.jsx)("tbody",{children:D.map((e,i)=>{var n;return(0,r.jsxs)(v,{kind:e.type,children:[(0,r.jsx)(z,{children:e.oldNum??" "}),(0,r.jsx)(z,{children:e.newNum??" "}),(0,r.jsx)(S,{kind:e.type,children:"insert"===(n=e.type)?"+":"delete"===n?"−":"replace"===n?"~":" "}),(0,r.jsx)(C,{children:"replace"===e.type?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,r.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},i)})})})})]})]})}}}]);