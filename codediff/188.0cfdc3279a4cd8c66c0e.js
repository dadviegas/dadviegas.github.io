"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[188],{188(e,o,i){var r=i(7359),n=i(8997),t=i(3233),d=i(5723),a=i(6480),l=i(679),s=i(2946),c=i(9820),p=i(9336),x=i(8104);const f=t.default.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,g=t.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${d.w4.colors.accent};border-radius:${d.w4.borderRadius.md};color:${d.w4.colors.accent};font-size:${d.w4.typography.fontSizeBase};font-family:${d.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,u=t.default.button`
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
`,h=t.default.div`position: relative;`,b=t.default.div`
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
`,m=t.default.button`
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
`,w=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,y=t.default.div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,k=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${d.w4.colors.border};
  }
`,$=t.default.div`
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
`,j=t.default.textarea`
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
`,v=t.default.div`
  flex: 1;
  overflow: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,z=t.default.table`
  width: 100%;
  border-collapse: collapse;
`,M=t.default.tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,R=t.default.td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${d.w4.colors.border};
  vertical-align: top;
`,C=t.default.td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":d.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,S=t.default.td`
  padding: 0 ${d.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${d.w4.colors.mainText};
  vertical-align: top;
`,T=t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${d.w4.spacing.sm};
  color: ${d.w4.colors.mainTextMuted};
  font-size: 13px;
`;function L({topBarRight:e}){const[o,i]=(0,r.useState)(p.k[0].original),[n,t]=(0,r.useState)(p.k[0].modified),[L,B]=(0,r.useState)(!1),[E,F]=(0,r.useState)(!1),[N,O]=(0,r.useState)(null),P=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=e=>{P.current&&!P.current.contains(e.target)&&B(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const J=(0,r.useMemo)(()=>(0,c.P)(o,n),[o,n]),_=(0,r.useMemo)(()=>(0,c.h)(J),[J]),A=(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,x.jsxs)(f,{kind:"add",children:["+",_.added]}),(0,x.jsxs)(f,{kind:"del",children:["−",_.removed]}),(0,x.jsxs)(f,{kind:"mod",children:["~",_.changed]}),(0,x.jsx)(d.UO,{appId:"codediff",onLoad:(e,o,r)=>{O(o&&r?{id:o,name:r}:null);try{const{original:o,modified:r}=JSON.parse(e);void 0!==o&&i(o),void 0!==r&&t(r)}catch{}}}),(0,x.jsxs)(g,{onClick:()=>F(!0),children:[(0,x.jsx)(a.A,{size:14}),"Save"]}),(0,x.jsxs)(h,{ref:P,children:[(0,x.jsxs)(u,{onClick:()=>B(e=>!e),children:["Examples ",(0,x.jsx)(l.A,{size:12})]}),L&&(0,x.jsx)(b,{children:p.k.map(e=>(0,x.jsx)(m,{onClick:()=>{i(e.original),t(e.modified),B(!1)},children:e.label},e.label))})]}),e]});return(0,x.jsxs)(d.PE,{title:"Code Diff",sidebar:null,topBarRight:A,children:[E&&(0,x.jsx)(d.MJ,{onSave:async e=>{F(!1),await(0,d.KL)("codediff",e,JSON.stringify({original:o,modified:n})),O(null)},onUpdate:async()=>{N&&(F(!1),await(0,d.mZ)(N.id,N.name,JSON.stringify({original:o,modified:n})))},existingDoc:N??void 0,onCancel:()=>F(!1)}),(0,x.jsxs)(w,{children:[(0,x.jsxs)(y,{children:[(0,x.jsxs)(k,{children:[(0,x.jsx)($,{children:"Original"}),(0,x.jsx)(j,{value:o,onChange:e=>i(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,x.jsxs)(k,{children:[(0,x.jsx)($,{children:"Modified"}),(0,x.jsx)(j,{value:n,onChange:e=>t(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,x.jsx)(v,{children:0===J.length?(0,x.jsxs)(T,{children:[(0,x.jsx)(s.A,{size:32,strokeWidth:1}),(0,x.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,x.jsx)(z,{children:(0,x.jsx)("tbody",{children:J.map((e,o)=>{return(0,x.jsxs)(M,{kind:e.type,children:[(0,x.jsx)(R,{children:e.oldNum??" "}),(0,x.jsx)(R,{children:e.newNum??" "}),(0,x.jsx)(C,{kind:e.type,children:(i=e.type,"insert"===i?"+":"delete"===i?"−":"replace"===i?"~":" ")}),(0,x.jsx)(S,{children:"replace"===e.type?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,x.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},o);var i})})})})]})]})}const B=document.getElementById("root");if(!B)throw new Error("Root element #root not found");(0,n.H)(B).render((0,x.jsx)(L,{}))},8997(e,o,i){var r=i(8991);o.H=r.createRoot,r.hydrateRoot}}]);
//# sourceMappingURL=188.0cfdc3279a4cd8c66c0e.js.map