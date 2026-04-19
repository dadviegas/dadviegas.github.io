"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[6036],{6036(e,i,o){o.r(i),o.d(i,{default:()=>E});var r=o(7359),n=o(3233),t=o(4901),d=o(3857),a=o(679),l=o(1344),s=o(2946),c=o(6480),p=o(9820),f=o(9336),x=o(5723);const u=n.default.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,g=n.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${t.w4.colors.accent};border-radius:${t.w4.borderRadius.md};color:${t.w4.colors.accent};font-size:${t.w4.typography.fontSizeBase};font-family:${t.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,h=n.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${t.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  color: ${t.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${t.w4.colors.accent};
    color: ${t.w4.colors.mainText};
  }
`,b=n.default.div`position: relative;`,m=n.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 220px;
  overflow: hidden;
`,w=n.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${t.w4.colors.mainText};
  font-size: 13px;
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${t.w4.colors.mainBg}; }
`,y=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,k=n.default.div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${t.w4.colors.border};
`,$=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${t.w4.colors.border};
  }
`,j=n.default.div`
  display: flex;
  align-items: center;
  padding: 6px ${t.w4.spacing.md};
  border-bottom: 1px solid ${t.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${t.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: ${t.w4.colors.sidebarBg};
  flex-shrink: 0;
`,v=n.default.textarea`
  flex: 1;
  background: ${t.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${t.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;

  &::placeholder {
    color: ${t.w4.colors.mainTextMuted};
  }
`,z=n.default.div`
  flex: 1;
  overflow: auto;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,S=n.default.table`
  width: 100%;
  border-collapse: collapse;
`,C=n.default.tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,M=n.default.td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${t.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${t.w4.colors.border};
  vertical-align: top;
`,T=n.default.td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":t.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,L=n.default.td`
  padding: 0 ${t.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${t.w4.colors.mainText};
  vertical-align: top;
`,R=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${t.w4.spacing.sm};
  color: ${t.w4.colors.mainTextMuted};
  font-size: 13px;
`,N="toolkit:codediff";function E({topBarRight:e}){const[i,o]=(0,r.useState)(""),[n,E]=(0,r.useState)(""),[O,B]=(0,r.useState)(!1),[F,J]=(0,r.useState)(!1),[P,A]=(0,r.useState)(null),I=(0,r.useRef)(null),_=(0,r.useRef)(!1);(0,r.useEffect)(()=>{(0,t.PL)(N).then(e=>{if(e)try{const i=JSON.parse(e);o(i.original??""),E(i.modified??"")}catch{}_.current=!0})},[]),(0,r.useEffect)(()=>{if(!_.current)return;const e=setTimeout(()=>(0,t.Is)(N,JSON.stringify({original:i,modified:n})),400);return()=>clearTimeout(e)},[i,n]),(0,r.useEffect)(()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&B(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const D=(0,r.useMemo)(()=>(0,p.P)(i,n),[i,n]),U=(0,r.useMemo)(()=>(0,p.h)(D),[D]),K=(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,x.jsxs)(h,{onClick:()=>{o(""),E(""),A(null),(0,t.Is)(N,"")},children:[(0,x.jsx)(l.A,{size:13})," New"]}),(0,x.jsxs)(u,{kind:"add",children:["+",U.added]}),(0,x.jsxs)(u,{kind:"del",children:["−",U.removed]}),(0,x.jsxs)(u,{kind:"mod",children:["~",U.changed]}),(0,x.jsx)(t.UO,{appId:"codediff",onLoad:(e,i,r)=>{A(i&&r?{id:i,name:r}:null);try{const{original:i,modified:r}=JSON.parse(e);void 0!==i&&o(i),void 0!==r&&E(r)}catch{}}}),(0,x.jsxs)(g,{onClick:()=>J(!0),children:[(0,x.jsx)(c.A,{size:14}),"Save"]}),(0,x.jsxs)(b,{ref:I,children:[(0,x.jsxs)(h,{onClick:()=>B(e=>!e),children:["Examples ",(0,x.jsx)(a.A,{size:12})]}),O&&(0,x.jsx)(m,{children:f.k.map(e=>(0,x.jsx)(w,{onClick:()=>{o(e.original),E(e.modified),B(!1)},children:e.label},e.label))})]}),e]});return(0,x.jsxs)(t.PE,{title:"Code Diff",sidebar:(0,x.jsx)(d.tz,{activeAppId:"codediff"}),topBarRight:K,children:[F&&(0,x.jsx)(t.MJ,{onSave:async e=>{J(!1),await(0,t.KL)("codediff",e,JSON.stringify({original:i,modified:n})),A(null)},onUpdate:async()=>{P&&(J(!1),await(0,t.mZ)(P.id,P.name,JSON.stringify({original:i,modified:n})))},existingDoc:P??void 0,onCancel:()=>J(!1)}),(0,x.jsxs)(y,{children:[(0,x.jsxs)(k,{children:[(0,x.jsxs)($,{children:[(0,x.jsx)(j,{children:"Original"}),(0,x.jsx)(v,{value:i,onChange:e=>o(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,x.jsxs)($,{children:[(0,x.jsx)(j,{children:"Modified"}),(0,x.jsx)(v,{value:n,onChange:e=>E(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,x.jsx)(z,{children:0===D.length?(0,x.jsxs)(R,{children:[(0,x.jsx)(s.A,{size:32,strokeWidth:1}),(0,x.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,x.jsx)(S,{children:(0,x.jsx)("tbody",{children:D.map((e,i)=>{return(0,x.jsxs)(C,{kind:e.type,children:[(0,x.jsx)(M,{children:e.oldNum??" "}),(0,x.jsx)(M,{children:e.newNum??" "}),(0,x.jsx)(T,{kind:e.type,children:(o=e.type,"insert"===o?"+":"delete"===o?"−":"replace"===o?"~":" ")}),(0,x.jsx)(L,{children:"replace"===e.type?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,x.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},i);var o})})})})]})]})}}}]);