"use strict";(self.webpackChunk_atlantis_codediff=self.webpackChunk_atlantis_codediff||[]).push([[188],{188(e,o,i){var n=i(7359),r=i(8997),t=i(3233),d=i(4079),a=i(6480),l=i(679),s=i(2946),c=i(9820),p=i(9336),f=i(5723);const x=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  overflow: hidden;
`,g=t.default.header`
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
`,u=t.default.span`
  color: ${d.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,m=t.default.div`
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,w=t.default.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
  background: ${e=>"add"===e.kind?"rgba(63,185,80,0.15)":"del"===e.kind?"rgba(248,113,113,0.15)":"rgba(210,153,34,0.15)"};
  color: ${e=>"add"===e.kind?"#3fb950":"del"===e.kind?"#f87171":"#d29922"};
`,b=t.default.div`flex: 1;`,y=t.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${d.w4.colors.accent};border-radius:${d.w4.borderRadius.md};color:${d.w4.colors.accent};font-size:${d.w4.typography.fontSizeBase};font-family:${d.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,$=t.default.button`
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
`,k=t.default.div`position: relative;`,j=t.default.div`
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
`,v=t.default.button`
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
`,z=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,S=t.default.div`
  display: flex;
  height: 38%;
  min-height: 180px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,T=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &:first-of-type {
    border-right: 1px solid ${d.w4.colors.border};
  }
`,C=t.default.div`
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
`,R=t.default.table`
  width: 100%;
  border-collapse: collapse;
`,L=t.default.tr`
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
`,E=t.default.td`
  width: 20px;
  min-width: 20px;
  text-align: center;
  padding: 0 2px;
  color: ${e=>"insert"===e.kind?"#3fb950":"delete"===e.kind?"#f87171":"replace"===e.kind?"#d29922":d.w4.colors.mainTextMuted};
  font-weight: 700;
  user-select: none;
  vertical-align: top;
`,N=t.default.td`
  padding: 0 ${d.w4.spacing.md} 0 4px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${d.w4.colors.mainText};
  vertical-align: top;
`,O=t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: ${d.w4.spacing.sm};
  color: ${d.w4.colors.mainTextMuted};
  font-size: 13px;
`;function A({topBarRight:e}){const[o,i]=(0,n.useState)(p.k[0].original),[r,t]=(0,n.useState)(p.k[0].modified),[A,J]=(0,n.useState)(!1),[P,_]=(0,n.useState)(!1),[D,H]=(0,n.useState)(null),I=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&J(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const U=(0,n.useMemo)(()=>(0,c.P)(o,r),[o,r]),K=(0,n.useMemo)(()=>(0,c.h)(U),[U]);return(0,f.jsxs)(x,{children:[(0,f.jsxs)(g,{children:[(0,f.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(u,{children:"/"}),(0,f.jsx)(m,{children:"Code Diff"}),(0,f.jsxs)(w,{kind:"add",children:["+",K.added]}),(0,f.jsxs)(w,{kind:"del",children:["−",K.removed]}),(0,f.jsxs)(w,{kind:"mod",children:["~",K.changed]}),(0,f.jsx)(b,{}),(0,f.jsx)(d.UO,{appId:"codediff",onLoad:(e,o,n)=>{H(o&&n?{id:o,name:n}:null);try{const{original:o,modified:n}=JSON.parse(e);void 0!==o&&i(o),void 0!==n&&t(n)}catch{}}}),(0,f.jsxs)(y,{onClick:()=>_(!0),children:[(0,f.jsx)(a.A,{size:14}),"Save"]}),(0,f.jsxs)(k,{ref:I,children:[(0,f.jsxs)($,{onClick:()=>J(e=>!e),children:["Examples ",(0,f.jsx)(l.A,{size:12})]}),A&&(0,f.jsx)(j,{children:p.k.map(e=>(0,f.jsx)(v,{onClick:()=>{i(e.original),t(e.modified),J(!1)},children:e.label},e.label))})]}),e]}),P&&(0,f.jsx)(d.MJ,{onSave:async e=>{_(!1),await(0,d.KL)("codediff",e,JSON.stringify({original:o,modified:r})),H(null)},onUpdate:async()=>{D&&(_(!1),await(0,d.mZ)(D.id,D.name,JSON.stringify({original:o,modified:r})))},existingDoc:D??void 0,onCancel:()=>_(!1)}),(0,f.jsxs)(z,{children:[(0,f.jsxs)(S,{children:[(0,f.jsxs)(T,{children:[(0,f.jsx)(C,{children:"Original"}),(0,f.jsx)(M,{value:o,onChange:e=>i(e.target.value),placeholder:"Paste original text here…",spellCheck:!1})]}),(0,f.jsxs)(T,{children:[(0,f.jsx)(C,{children:"Modified"}),(0,f.jsx)(M,{value:r,onChange:e=>t(e.target.value),placeholder:"Paste modified text here…",spellCheck:!1})]})]}),(0,f.jsx)(B,{children:0===U.length?(0,f.jsxs)(O,{children:[(0,f.jsx)(s.A,{size:32,strokeWidth:1}),(0,f.jsx)("span",{children:"Paste text in both panes to see the diff"})]}):(0,f.jsx)(R,{children:(0,f.jsx)("tbody",{children:U.map((e,o)=>{return(0,f.jsxs)(L,{kind:e.type,children:[(0,f.jsx)(F,{children:e.oldNum??" "}),(0,f.jsx)(F,{children:e.newNum??" "}),(0,f.jsx)(E,{kind:e.type,children:(i=e.type,"insert"===i?"+":"delete"===i?"−":"replace"===i?"~":" ")}),(0,f.jsx)(N,{children:"replace"===e.type?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{style:{background:"rgba(248,113,113,0.2)",borderRadius:2,textDecoration:"line-through",opacity:.7,marginRight:4},children:e.oldLine}),(0,f.jsx)("span",{style:{background:"rgba(63,185,80,0.2)",borderRadius:2},children:e.newLine})]}):"delete"===e.type?e.oldLine:e.newLine??e.oldLine})]},o);var i})})})})]})]})}const J=document.getElementById("root");if(!J)throw new Error("Root element #root not found");(0,r.H)(J).render((0,f.jsx)(A,{}))},8997(e,o,i){var n=i(8991);o.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.c37ebdeb7a4054c99da3.js.map