"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[36],{6036(e,o,i){i.r(o),i.d(o,{default:()=>A});var n=i(7359),r=i(3233),t=i(5723),d=i(679),a=i(2946),l=i(6480),s=i(9820),c=i(9336),p=i(8104);const f=r.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,x=r.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding: 0 ${t.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${t.w4.spacing.md};
`,g=r.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,h=r.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,u=r.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,m=r.default.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,w=r.default.div`flex: 1;`,b=r.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${t.w4.colors.accent};border-radius:${t.w4.borderRadius.md};color:${t.w4.colors.accent};font-size:${t.w4.typography.fontSizeBase};font-family:${t.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,y=r.default.button`
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
`,$=r.default.div`position: relative;`,k=r.default.div`
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
`,j=r.default.button`
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
`,v=r.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,z=r.default.div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${t.w4.colors.border};
`,S=r.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${t.w4.colors.border};
  }
`,T=r.default.div`
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
`,C=r.default.textarea`
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
`,M=r.default.div`
  flex: 1;
  overflow: auto;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,B=r.default.table`
  width: 100%;
  border-collapse: collapse;
`,L=r.default.tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,F=r.default.td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${t.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${t.w4.colors.border};
  vertical-align: top;
`,R=r.default.td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":t.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,N=r.default.td`
  padding: 0 ${t.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${t.w4.colors.mainText};
  vertical-align: top;
`,O=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${t.w4.spacing.sm};
  color: ${t.w4.colors.mainTextMuted};
  font-size: 13px;
`;function A({topBarRight:e}){const[o,i]=(0,n.useState)(c.k[0].original),[r,A]=(0,n.useState)(c.k[0].modified),[E,J]=(0,n.useState)(!1),[P,_]=(0,n.useState)(!1),[D,U]=(0,n.useState)(null),H=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{H.current&&!H.current.contains(e.target)&&J(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const I=(0,n.useMemo)(()=>(0,s.P)(o,r),[o,r]),K=(0,n.useMemo)(()=>(0,s.h)(I),[I]);return(0,p.jsxs)(f,{children:[(0,p.jsxs)(x,{children:[(0,p.jsxs)(g,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,p.jsx)("span",{children:"antis"})]}),(0,p.jsx)(h,{children:"/"}),(0,p.jsx)(u,{children:"Code Diff"}),(0,p.jsxs)(m,{kind:"add",children:["+",K.added]}),(0,p.jsxs)(m,{kind:"del",children:["−",K.removed]}),(0,p.jsxs)(m,{kind:"mod",children:["~",K.changed]}),(0,p.jsx)(w,{}),(0,p.jsx)(t.UO,{appId:"codediff",onLoad:(e,o,n)=>{U(o&&n?{id:o,name:n}:null);try{const{original:o,modified:n}=JSON.parse(e);void 0!==o&&i(o),void 0!==n&&A(n)}catch{}}}),(0,p.jsxs)(b,{onClick:()=>_(!0),children:[(0,p.jsx)(l.A,{size:14}),"Save"]}),(0,p.jsxs)($,{ref:H,children:[(0,p.jsxs)(y,{onClick:()=>J(e=>!e),children:["Examples ",(0,p.jsx)(d.A,{size:12})]}),E&&(0,p.jsx)(k,{children:c.k.map(e=>(0,p.jsx)(j,{onClick:()=>{i(e.original),A(e.modified),J(!1)},children:e.label},e.label))})]}),e]}),P&&(0,p.jsx)(t.MJ,{onSave:async e=>{_(!1),await(0,t.KL)("codediff",e,JSON.stringify({original:o,modified:r})),U(null)},onUpdate:async()=>{D&&(_(!1),await(0,t.mZ)(D.id,D.name,JSON.stringify({original:o,modified:r})))},existingDoc:D??void 0,onCancel:()=>_(!1)}),(0,p.jsxs)(v,{children:[(0,p.jsxs)(z,{children:[(0,p.jsxs)(S,{children:[(0,p.jsx)(T,{children:"Original"}),(0,p.jsx)(C,{value:o,onChange:e=>i(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)(T,{children:"Modified"}),(0,p.jsx)(C,{value:r,onChange:e=>A(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,p.jsx)(M,{children:0===I.length?(0,p.jsxs)(O,{children:[(0,p.jsx)(a.A,{size:32,strokeWidth:1}),(0,p.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,p.jsx)(B,{children:(0,p.jsx)("tbody",{children:I.map((e,o)=>{return(0,p.jsxs)(L,{kind:e.type,children:[(0,p.jsx)(F,{children:e.oldNum??" "}),(0,p.jsx)(F,{children:e.newNum??" "}),(0,p.jsx)(R,{kind:e.type,children:(i=e.type,"insert"===i?"+":"delete"===i?"−":"replace"===i?"~":" ")}),(0,p.jsx)(N,{children:"replace"===e.type?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,p.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},o);var i})})})})]})]})}}}]);
//# sourceMappingURL=36.d4a31a5107a49fa21abe.js.map