"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[188],{188(e,o,r){var i=r(7359),n=r(8997),t=r(3233),d=r(906),l=r(679),a=r(2946),s=r(9820),c=r(9336),p=r(5723);const x=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  overflow: hidden;
`,f=t.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${d.w4.colors.sidebarBg};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  padding: 0 ${d.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${d.w4.spacing.md};
`,h=t.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${d.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${d.w4.colors.accent}; }
`,g=t.default.span`
  color: ${d.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,u=t.default.div`
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,m=t.default.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,w=t.default.div`flex: 1;`,b=t.default.button`
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
`,y=t.default.div`position: relative;`,k=t.default.div`
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
`,$=t.default.button`
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
`,j=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,v=t.default.div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,z=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${d.w4.colors.border};
  }
`,T=t.default.div`
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
`,M=t.default.textarea`
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
`,B=t.default.div`
  flex: 1;
  overflow: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
`,C=t.default.table`
  width: 100%;
  border-collapse: collapse;
`,R=t.default.tr`
  background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.08)":"delete"===e.kind?"rgba(248,113,113,0.08)":"replace"===e.kind?"rgba(210,153,34,0.06)":"transparent"};

  &:hover {
    background: ${e=>"insert"===e.kind?"rgba(63,185,80,0.14)":"delete"===e.kind?"rgba(248,113,113,0.14)":"replace"===e.kind?"rgba(210,153,34,0.12)":"rgba(255,255,255,0.03)"};
  }
`,F=t.default.td`
  width: 48px;
  min-width: 48px;
  text-align: right;
  padding: 0 8px;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 11px;
  user-select: none;
  border-right: 1px solid ${d.w4.colors.border};
  vertical-align: top;
`,L=t.default.td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":d.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,E=t.default.td`
  padding: 0 ${d.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${d.w4.colors.mainText};
  vertical-align: top;
`,S=t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${d.w4.spacing.sm};
  color: ${d.w4.colors.mainTextMuted};
  font-size: 13px;
`;function P({topBarRight:e}){const[o,r]=(0,i.useState)(c.k[0].original),[n,t]=(0,i.useState)(c.k[0].modified),[d,P]=(0,i.useState)(!1),_=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=e=>{_.current&&!_.current.contains(e.target)&&P(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const A=(0,i.useMemo)(()=>(0,s.P)(o,n),[o,n]),H=(0,i.useMemo)(()=>(0,s.h)(A),[A]);return(0,p.jsxs)(x,{children:[(0,p.jsxs)(f,{children:[(0,p.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,p.jsx)("span",{children:"antis"})]}),(0,p.jsx)(g,{children:"/"}),(0,p.jsx)(u,{children:"Code Diff"}),(0,p.jsxs)(m,{kind:"add",children:["+",H.added]}),(0,p.jsxs)(m,{kind:"del",children:["−",H.removed]}),(0,p.jsxs)(m,{kind:"mod",children:["~",H.changed]}),(0,p.jsx)(w,{}),(0,p.jsxs)(y,{ref:_,children:[(0,p.jsxs)(b,{onClick:()=>P(e=>!e),children:["Examples ",(0,p.jsx)(l.A,{size:12})]}),d&&(0,p.jsx)(k,{children:c.k.map(e=>(0,p.jsx)($,{onClick:()=>{r(e.original),t(e.modified),P(!1)},children:e.label},e.label))})]}),e]}),(0,p.jsxs)(j,{children:[(0,p.jsxs)(v,{children:[(0,p.jsxs)(z,{children:[(0,p.jsx)(T,{children:"Original"}),(0,p.jsx)(M,{value:o,onChange:e=>r(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,p.jsxs)(z,{children:[(0,p.jsx)(T,{children:"Modified"}),(0,p.jsx)(M,{value:n,onChange:e=>t(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,p.jsx)(B,{children:0===A.length?(0,p.jsxs)(S,{children:[(0,p.jsx)(a.A,{size:32,strokeWidth:1}),(0,p.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,p.jsx)(C,{children:(0,p.jsx)("tbody",{children:A.map((e,o)=>{return(0,p.jsxs)(R,{kind:e.type,children:[(0,p.jsx)(F,{children:e.oldNum??" "}),(0,p.jsx)(F,{children:e.newNum??" "}),(0,p.jsx)(L,{kind:e.type,children:(r=e.type,"insert"===r?"+":"delete"===r?"−":"replace"===r?"~":" ")}),(0,p.jsx)(E,{children:"replace"===e.type?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,p.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},o);var r})})})})]})]})}const _=document.getElementById("root");if(!_)throw new Error("Root element #root not found");(0,n.H)(_).render((0,p.jsx)(P,{}))},8997(e,o,r){var i=r(8991);o.H=i.createRoot,i.hydrateRoot}}]);
//# sourceMappingURL=188.31aac020d50f374a43b6.js.map