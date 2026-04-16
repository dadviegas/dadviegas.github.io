"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[36],{6036(e,i,o){o.r(i),o.d(i,{default:()=>L});var r=o(7359),n=o(3233),d=o(894),t=o(679),a=o(2946),l=o(6480),s=o(9820),c=o(9336),p=o(5723);const x=n.default.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,f=n.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${d.w4.colors.accent};border-radius:${d.w4.borderRadius.md};color:${d.w4.colors.accent};font-size:${d.w4.typography.fontSizeBase};font-family:${d.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,g=n.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${d.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.mainText};
  }
`,u=n.default.div`position: relative;`,h=n.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 220px;
  overflow: hidden;
`,b=n.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${d.w4.colors.mainBg}; }
`,m=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,w=n.default.div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,k=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${d.w4.colors.border};
  }
`,y=n.default.div`
  display: flex;
  align-items: center;
  padding: 6px ${d.w4.spacing.md};
  border-bottom: 1px solid ${d.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: ${d.w4.colors.sidebarBg};
  flex-shrink: 0;
`,$=n.default.textarea`
  flex: 1;
  background: ${d.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${d.w4.spacing.md};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${d.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;

  &::placeholder {
    color: ${d.w4.colors.mainTextMuted};
  }
`,j=n.default.div`
  flex: 1;
  overflow: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,v=n.default.table`
  width: 100%;
  border-collapse: collapse;
`,z=n.default.tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,M=n.default.td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${d.w4.colors.border};
  vertical-align: top;
`,C=n.default.td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":d.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,S=n.default.td`
  padding: 0 ${d.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${d.w4.colors.mainText};
  vertical-align: top;
`,T=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${d.w4.spacing.sm};
  color: ${d.w4.colors.mainTextMuted};
  font-size: 13px;
`;function L({topBarRight:e}){const[i,o]=(0,r.useState)(c.k[0].original),[n,L]=(0,r.useState)(c.k[0].modified),[R,B]=(0,r.useState)(!1),[F,E]=(0,r.useState)(!1),[N,O]=(0,r.useState)(null),P=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=e=>{P.current&&!P.current.contains(e.target)&&B(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const A=(0,r.useMemo)(()=>(0,s.P)(i,n),[i,n]),J=(0,r.useMemo)(()=>(0,s.h)(A),[A]),_=(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,p.jsxs)(x,{kind:"add",children:["+",J.added]}),(0,p.jsxs)(x,{kind:"del",children:["−",J.removed]}),(0,p.jsxs)(x,{kind:"mod",children:["~",J.changed]}),(0,p.jsx)(d.UO,{appId:"codediff",onLoad:(e,i,r)=>{O(i&&r?{id:i,name:r}:null);try{const{original:i,modified:r}=JSON.parse(e);void 0!==i&&o(i),void 0!==r&&L(r)}catch{}}}),(0,p.jsxs)(f,{onClick:()=>E(!0),children:[(0,p.jsx)(l.A,{size:14}),"Save"]}),(0,p.jsxs)(u,{ref:P,children:[(0,p.jsxs)(g,{onClick:()=>B(e=>!e),children:["Examples ",(0,p.jsx)(t.A,{size:12})]}),R&&(0,p.jsx)(h,{children:c.k.map(e=>(0,p.jsx)(b,{onClick:()=>{o(e.original),L(e.modified),B(!1)},children:e.label},e.label))})]}),e]});return(0,p.jsxs)(d.PE,{title:"Code Diff",sidebar:(0,p.jsx)(d.tz,{activeAppId:"codediff"}),topBarRight:_,children:[F&&(0,p.jsx)(d.MJ,{onSave:async e=>{E(!1),await(0,d.KL)("codediff",e,JSON.stringify({original:i,modified:n})),O(null)},onUpdate:async()=>{N&&(E(!1),await(0,d.mZ)(N.id,N.name,JSON.stringify({original:i,modified:n})))},existingDoc:N??void 0,onCancel:()=>E(!1)}),(0,p.jsxs)(m,{children:[(0,p.jsxs)(w,{children:[(0,p.jsxs)(k,{children:[(0,p.jsx)(y,{children:"Original"}),(0,p.jsx)($,{value:i,onChange:e=>o(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,p.jsxs)(k,{children:[(0,p.jsx)(y,{children:"Modified"}),(0,p.jsx)($,{value:n,onChange:e=>L(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,p.jsx)(j,{children:0===A.length?(0,p.jsxs)(T,{children:[(0,p.jsx)(a.A,{size:32,strokeWidth:1}),(0,p.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,p.jsx)(v,{children:(0,p.jsx)("tbody",{children:A.map((e,i)=>{return(0,p.jsxs)(z,{kind:e.type,children:[(0,p.jsx)(M,{children:e.oldNum??" "}),(0,p.jsx)(M,{children:e.newNum??" "}),(0,p.jsx)(C,{kind:e.type,children:(o=e.type,"insert"===o?"+":"delete"===o?"−":"replace"===o?"~":" ")}),(0,p.jsx)(S,{children:"replace"===e.type?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,p.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},i);var o})})})})]})]})}}}]);
//# sourceMappingURL=36.64f79196f11ab52fc324.js.map