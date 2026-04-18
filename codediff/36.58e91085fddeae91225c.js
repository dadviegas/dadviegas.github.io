"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[36],{6036(e,i,o){o.r(i),o.d(i,{default:()=>N});var r=o(7359),n=o(3233),t=o(6879),d=o(679),a=o(1344),l=o(2946),s=o(6480),c=o(9820),p=o(9336),f=o(5723);const x=n.default.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,u=n.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${t.w4.colors.accent};border-radius:${t.w4.borderRadius.md};color:${t.w4.colors.accent};font-size:${t.w4.typography.fontSizeBase};font-family:${t.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,g=n.default.button`
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
`,h=n.default.div`position: relative;`,b=n.default.div`
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
`,m=n.default.button`
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
`,w=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,y=n.default.div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${t.w4.colors.border};
`,k=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${t.w4.colors.border};
  }
`,$=n.default.div`
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
`,j=n.default.textarea`
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
`,v=n.default.div`
  flex: 1;
  overflow: auto;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,z=n.default.table`
  width: 100%;
  border-collapse: collapse;
`,S=n.default.tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,C=n.default.td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${t.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${t.w4.colors.border};
  vertical-align: top;
`,M=n.default.td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":t.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,T=n.default.td`
  padding: 0 ${t.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${t.w4.colors.mainText};
  vertical-align: top;
`,L=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${t.w4.spacing.sm};
  color: ${t.w4.colors.mainTextMuted};
  font-size: 13px;
`,R="toolkit:codediff";function N({topBarRight:e}){const[i,o]=(0,r.useState)(""),[n,N]=(0,r.useState)(""),[E,O]=(0,r.useState)(!1),[B,F]=(0,r.useState)(!1),[J,P]=(0,r.useState)(null),A=(0,r.useRef)(null),I=(0,r.useRef)(!1);(0,r.useEffect)(()=>{(0,t.PL)(R).then(e=>{if(e)try{const i=JSON.parse(e);o(i.original??""),N(i.modified??"")}catch{}I.current=!0})},[]),(0,r.useEffect)(()=>{if(!I.current)return;const e=setTimeout(()=>(0,t.Is)(R,JSON.stringify({original:i,modified:n})),400);return()=>clearTimeout(e)},[i,n]),(0,r.useEffect)(()=>{const e=e=>{A.current&&!A.current.contains(e.target)&&O(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const _=(0,r.useMemo)(()=>(0,c.P)(i,n),[i,n]),D=(0,r.useMemo)(()=>(0,c.h)(_),[_]),U=(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,f.jsxs)(g,{onClick:()=>{o(""),N(""),P(null),(0,t.Is)(R,"")},children:[(0,f.jsx)(a.A,{size:13})," New"]}),(0,f.jsxs)(x,{kind:"add",children:["+",D.added]}),(0,f.jsxs)(x,{kind:"del",children:["−",D.removed]}),(0,f.jsxs)(x,{kind:"mod",children:["~",D.changed]}),(0,f.jsx)(t.UO,{appId:"codediff",onLoad:(e,i,r)=>{P(i&&r?{id:i,name:r}:null);try{const{original:i,modified:r}=JSON.parse(e);void 0!==i&&o(i),void 0!==r&&N(r)}catch{}}}),(0,f.jsxs)(u,{onClick:()=>F(!0),children:[(0,f.jsx)(s.A,{size:14}),"Save"]}),(0,f.jsxs)(h,{ref:A,children:[(0,f.jsxs)(g,{onClick:()=>O(e=>!e),children:["Examples ",(0,f.jsx)(d.A,{size:12})]}),E&&(0,f.jsx)(b,{children:p.k.map(e=>(0,f.jsx)(m,{onClick:()=>{o(e.original),N(e.modified),O(!1)},children:e.label},e.label))})]}),e]});return(0,f.jsxs)(t.PE,{title:"Code Diff",sidebar:(0,f.jsx)(t.tz,{activeAppId:"codediff"}),topBarRight:U,children:[B&&(0,f.jsx)(t.MJ,{onSave:async e=>{F(!1),await(0,t.KL)("codediff",e,JSON.stringify({original:i,modified:n})),P(null)},onUpdate:async()=>{J&&(F(!1),await(0,t.mZ)(J.id,J.name,JSON.stringify({original:i,modified:n})))},existingDoc:J??void 0,onCancel:()=>F(!1)}),(0,f.jsxs)(w,{children:[(0,f.jsxs)(y,{children:[(0,f.jsxs)(k,{children:[(0,f.jsx)($,{children:"Original"}),(0,f.jsx)(j,{value:i,onChange:e=>o(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,f.jsxs)(k,{children:[(0,f.jsx)($,{children:"Modified"}),(0,f.jsx)(j,{value:n,onChange:e=>N(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,f.jsx)(v,{children:0===_.length?(0,f.jsxs)(L,{children:[(0,f.jsx)(l.A,{size:32,strokeWidth:1}),(0,f.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,f.jsx)(z,{children:(0,f.jsx)("tbody",{children:_.map((e,i)=>{return(0,f.jsxs)(S,{kind:e.type,children:[(0,f.jsx)(C,{children:e.oldNum??" "}),(0,f.jsx)(C,{children:e.newNum??" "}),(0,f.jsx)(M,{kind:e.type,children:(o=e.type,"insert"===o?"+":"delete"===o?"−":"replace"===o?"~":" ")}),(0,f.jsx)(T,{children:"replace"===e.type?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,f.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},i);var o})})})})]})]})}}}]);
//# sourceMappingURL=36.58e91085fddeae91225c.js.map