"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[36],{36(e,o,i){i.r(o),i.d(o,{default:()=>E});var r=i(359),n=i(233),t=i(807),d=i(679),l=i(946),a=i(820),s=i(336),c=i(723);const p=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,x=n.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding: 0 ${t.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${t.w4.spacing.md};
`,f=n.default.button`
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
`,h=n.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,g=n.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,u=n.default.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,m=n.default.div`flex: 1;`,w=n.default.button`
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
`,b=n.default.div`position: relative;`,k=n.default.div`
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
`,$=n.default.button`
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
`,j=n.default.div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${t.w4.colors.border};
`,v=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${t.w4.colors.border};
  }
`,z=n.default.div`
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
`,T=n.default.textarea`
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
`,M=n.default.div`
  flex: 1;
  overflow: auto;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,C=n.default.table`
  width: 100%;
  border-collapse: collapse;
`,B=n.default.tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,F=n.default.td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${t.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${t.w4.colors.border};
  vertical-align: top;
`,L=n.default.td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":t.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,R=n.default.td`
  padding: 0 ${t.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${t.w4.colors.mainText};
  vertical-align: top;
`,S=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${t.w4.spacing.sm};
  color: ${t.w4.colors.mainTextMuted};
  font-size: 13px;
`;function E({topBarRight:e}){const[o,i]=(0,r.useState)(s.k[0].original),[n,t]=(0,r.useState)(s.k[0].modified),[E,P]=(0,r.useState)(!1),_=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=e=>{_.current&&!_.current.contains(e.target)&&P(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const A=(0,r.useMemo)(()=>(0,a.P)(o,n),[o,n]),D=(0,r.useMemo)(()=>(0,a.h)(A),[A]);return(0,c.jsxs)(p,{children:[(0,c.jsxs)(x,{children:[(0,c.jsxs)(f,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,c.jsx)("span",{children:"antis"})]}),(0,c.jsx)(h,{children:"/"}),(0,c.jsx)(g,{children:"Code Diff"}),(0,c.jsxs)(u,{kind:"add",children:["+",D.added]}),(0,c.jsxs)(u,{kind:"del",children:["−",D.removed]}),(0,c.jsxs)(u,{kind:"mod",children:["~",D.changed]}),(0,c.jsx)(m,{}),(0,c.jsxs)(b,{ref:_,children:[(0,c.jsxs)(w,{onClick:()=>P(e=>!e),children:["Examples ",(0,c.jsx)(d.A,{size:12})]}),E&&(0,c.jsx)(k,{children:s.k.map(e=>(0,c.jsx)($,{onClick:()=>{i(e.original),t(e.modified),P(!1)},children:e.label},e.label))})]}),e]}),(0,c.jsxs)(y,{children:[(0,c.jsxs)(j,{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)(z,{children:"Original"}),(0,c.jsx)(T,{value:o,onChange:e=>i(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,c.jsxs)(v,{children:[(0,c.jsx)(z,{children:"Modified"}),(0,c.jsx)(T,{value:n,onChange:e=>t(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,c.jsx)(M,{children:0===A.length?(0,c.jsxs)(S,{children:[(0,c.jsx)(l.A,{size:32,strokeWidth:1}),(0,c.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,c.jsx)(C,{children:(0,c.jsx)("tbody",{children:A.map((e,o)=>{return(0,c.jsxs)(B,{kind:e.type,children:[(0,c.jsx)(F,{children:e.oldNum??" "}),(0,c.jsx)(F,{children:e.newNum??" "}),(0,c.jsx)(L,{kind:e.type,children:(i=e.type,"insert"===i?"+":"delete"===i?"−":"replace"===i?"~":" ")}),(0,c.jsx)(R,{children:"replace"===e.type?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,c.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},o);var i})})})})]})]})}}}]);
//# sourceMappingURL=36.f7aa2c7bc1a76be3891d.js.map