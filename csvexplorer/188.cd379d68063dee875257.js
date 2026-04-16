"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([[188],{188(e,o,r){var s=r(7359),n=r(8997),t=r(3233),l=r(5723),a=r(3317),i=r(3775),d=r(9161),c=r(679),p=r(4525),u=r(5426),x=r(668),h=r(4490),m=r(9336),w=r(8104);const f=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${l.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${l.w4.colors.border} transparent;`,g=t.default.div`display:flex;flex:1;overflow:hidden;`,b=t.default.div`
  width:200px;flex-shrink:0;background:${l.w4.colors.sidebarBg};border-right:1px solid ${l.w4.colors.sidebarBorder};
  overflow-y:auto;${f}
`,$=t.default.div`padding:${l.w4.spacing.sm} ${l.w4.spacing.md};border-bottom:1px solid ${l.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${l.w4.colors.mainTextMuted};`,j=t.default.button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${l.w4.spacing.sm} ${l.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?l.w4.colors.accent:"transparent"};
  color:${e=>e.active?l.w4.colors.mainText:l.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${l.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all 0.12s;&:hover{background:${l.w4.colors.mainBg};color:${l.w4.colors.mainText};}
`,y=t.default.span`font-size:10px;color:${l.w4.colors.mainTextMuted};`,v=t.default.div`
  padding:${l.w4.spacing.md};border-top:1px solid ${l.w4.colors.sidebarBorder};
  background:${l.w4.colors.surface};
`,k=t.default.div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,T=t.default.span`color:${l.w4.colors.mainTextMuted};`,z=t.default.span`color:${l.w4.colors.mainText};font-family:${l.w4.typography.fontFamilyMono};`,C=t.default.div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,B=t.default.div`
  display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:${l.w4.spacing.sm} ${l.w4.spacing.lg};
  border-bottom:1px solid ${l.w4.colors.sidebarBorder};background:${l.w4.colors.sidebarBg};flex-shrink:0;
`,M=t.default.input`
  flex:1;background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${l.w4.colors.mainText};outline:none;
  &:focus{border-color:${l.w4.colors.accent};}
  &::placeholder{color:${l.w4.colors.mainTextMuted};}
`,S=t.default.div`
  font-size:11px;color:${l.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};
`,F=t.default.select`
  background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${l.w4.colors.mainText};outline:none;cursor:pointer;
`,R=t.default.button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.sm};
  color:${l.w4.colors.mainTextMuted};font-size:12px;font-family:${l.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,A=t.default.div`flex:1;overflow:auto;${f}`,E=t.default.table`width:100%;border-collapse:collapse;font-size:12px;`,L=t.default.th`
  position:sticky;top:0;background:${l.w4.colors.sidebarBg};border-bottom:2px solid ${l.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${l.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${l.w4.colors.mainText};}
`,_=t.default.span`margin-left:4px;opacity:0.6;`,q=t.default.td`
  padding:7px 12px;border-bottom:1px solid ${l.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?l.w4.colors.mainTextMuted:l.w4.colors.mainText};
  font-family:${e=>e.numeric?l.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,H=t.default.tr`&:hover td{background:rgba(56,139,253,0.04);}`,I=t.default.textarea`
  flex:1;background:${l.w4.colors.mainBg};border:none;outline:none;
  padding:${l.w4.spacing.xl};font-family:${l.w4.typography.fontFamilyMono};font-size:13px;
  color:${l.w4.colors.mainText};resize:none;line-height:1.6;${f}
  &::placeholder{color:${l.w4.colors.mainTextMuted};}
`,O=t.default.div`
  display:flex;align-items:center;padding:${l.w4.spacing.sm} ${l.w4.spacing.lg};
  border-top:1px solid ${l.w4.colors.sidebarBorder};background:${l.w4.colors.sidebarBg};
  font-size:11px;color:${l.w4.colors.mainTextMuted};flex-shrink:0;gap:${l.w4.spacing.md};
`,P=t.default.div`position:relative;`,V=t.default.button`display:flex;align-items:center;gap:4px;padding:0 ${l.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.sm};color:${l.w4.colors.mainTextMuted};font-size:12px;font-family:${l.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${l.w4.colors.accent};color:${l.w4.colors.mainText};}`,D=t.default.div`position:absolute;top:calc(100% + 4px);right:0;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,N=t.default.button`display:block;width:100%;text-align:left;padding:${l.w4.spacing.sm} ${l.w4.spacing.md};background:transparent;border:none;color:${l.w4.colors.mainText};font-size:13px;font-family:${l.w4.typography.fontFamily};cursor:pointer;&:hover{background:${l.w4.colors.mainBg};}`;function U({topBarRight:e}){const[o,r]=(0,s.useState)(""),[n,t]=(0,s.useState)("auto"),[f,U]=(0,s.useState)(""),[W,G]=(0,s.useState)(null),[J,K]=(0,s.useState)("asc"),[Q,X]=(0,s.useState)(null),[Y,Z]=(0,s.useState)(!1),ee=(0,s.useRef)(null);(0,s.useEffect)(()=>{const e=e=>{ee.current&&!ee.current.contains(e.target)&&Z(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const oe="auto"===n?(0,h.Dt)(o):n,re=(0,s.useMemo)(()=>o.trim()?(0,h.CO)(o,"auto"===n?void 0:n):null,[o,n]),se=(0,s.useMemo)(()=>{if(!re)return[];let e=re.rows;if(f.trim()){const o=f.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(o)))}if(null!==W){const o=re.stats[W]?.type;e=[...e].sort((e,r)=>{const s=e[W]??"",n=r[W]??"";let t=0;return t="number"===o?(parseFloat(s)||0)-(parseFloat(n)||0):s.localeCompare(n),"asc"===J?t:-t})}return e.slice(0,200)},[re,f,W,J]),ne=null!==Q?re?.stats[Q]??null:null,te=(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,w.jsxs)(P,{ref:ee,children:[(0,w.jsxs)(V,{onClick:()=>Z(e=>!e),children:["Examples ",(0,w.jsx)(c.A,{size:12})]}),Y&&(0,w.jsx)(D,{children:m.k.map(e=>(0,w.jsx)(N,{onClick:()=>{r(e.csv),Z(!1),U(""),G(null)},children:e.label},e.label))})]}),e]});return(0,w.jsx)(l.PE,{title:"CSV Explorer",sidebar:null,topBarRight:te,children:(0,w.jsxs)(g,{children:[re&&(0,w.jsxs)(b,{children:[(0,w.jsxs)($,{children:["Columns (",re.headers.length,")"]}),re.stats.map((e,o)=>{return(0,w.jsxs)(j,{active:Q===o,onClick:()=>X(Q===o?null:o),children:[(0,w.jsx)(y,{children:(r=e.type,"number"===r?(0,w.jsx)(a.A,{size:11}):"date"===r?(0,w.jsx)(i.A,{size:11}):(0,w.jsx)(d.A,{size:11}))}),e.name]},o);var r}),ne&&(0,w.jsxs)(v,{children:[(0,w.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:l.w4.colors.mainText},children:ne.name}),(0,w.jsxs)(k,{children:[(0,w.jsx)(T,{children:"Type"}),(0,w.jsx)(z,{children:ne.type})]}),(0,w.jsxs)(k,{children:[(0,w.jsx)(T,{children:"Count"}),(0,w.jsx)(z,{children:ne.count})]}),(0,w.jsxs)(k,{children:[(0,w.jsx)(T,{children:"Nulls"}),(0,w.jsx)(z,{children:ne.nullCount})]}),(0,w.jsxs)(k,{children:[(0,w.jsx)(T,{children:"Unique"}),(0,w.jsx)(z,{children:ne.uniqueCount})]}),"number"===ne.type&&void 0!==ne.min&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(k,{children:[(0,w.jsx)(T,{children:"Min"}),(0,w.jsx)(z,{children:ne.min})]}),(0,w.jsxs)(k,{children:[(0,w.jsx)(T,{children:"Max"}),(0,w.jsx)(z,{children:ne.max})]})]})]})]}),(0,w.jsx)(C,{children:re?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(B,{children:[(0,w.jsx)(M,{value:f,onChange:e=>U(e.target.value),placeholder:"Search all columns…"}),(0,w.jsxs)(F,{value:n,onChange:e=>t(e.target.value),children:[(0,w.jsxs)("option",{value:"auto",children:["Auto (",","===oe?"comma":"\t"===oe?"tab":"semicolon",")"]}),(0,w.jsx)("option",{value:",",children:"Comma"}),(0,w.jsx)("option",{value:"\t",children:"Tab"}),(0,w.jsx)("option",{value:";",children:"Semicolon"})]}),(0,w.jsxs)(S,{children:[se.length,f?` / ${re.rows.length}`:""," rows"]}),(0,w.jsxs)(R,{onClick:()=>{r(""),U(""),G(null),X(null)},children:[(0,w.jsx)(p.A,{size:12})," Clear"]})]}),(0,w.jsx)(A,{children:(0,w.jsxs)(E,{children:[(0,w.jsx)("thead",{children:(0,w.jsx)("tr",{children:re.headers.map((e,o)=>{const r="number"===re.stats[o]?.type;return(0,w.jsxs)(L,{numeric:r,onClick:()=>(e=>{W===e?K(e=>"asc"===e?"desc":"asc"):(G(e),K("asc"))})(o),children:[e,(0,w.jsx)(_,{children:W===o?"asc"===J?(0,w.jsx)(u.A,{size:11}):(0,w.jsx)(c.A,{size:11}):(0,w.jsx)(x.A,{size:10})})]},o)})})}),(0,w.jsx)("tbody",{children:se.map((e,o)=>(0,w.jsx)(H,{children:re.headers.map((o,r)=>{const s=e[r]??"",n=""===s,t="number"===re.stats[r]?.type;return(0,w.jsx)(q,{numeric:t,null:n,children:n?"—":s},r)})},o))})]})}),(0,w.jsxs)(O,{children:[(0,w.jsxs)("span",{children:["Showing ",se.length," of ",re.rows.length," rows"]}),(0,w.jsx)("span",{children:"·"}),(0,w.jsxs)("span",{children:[re.headers.length," columns"]}),re.rows.length>200&&(0,w.jsx)("span",{children:"· First 200 rows shown"})]})]}):(0,w.jsx)(I,{value:o,onChange:e=>r(e.target.value),placeholder:"Paste CSV data here…\n\nOr pick an example from the menu above.\n\nThe separator is detected automatically (comma, tab, or semicolon).",spellCheck:!1})})]})})}const W=document.getElementById("root");if(!W)throw new Error("Root element #root not found");(0,n.H)(W).render((0,w.jsx)(U,{}))},8997(e,o,r){var s=r(8991);o.H=s.createRoot,s.hydrateRoot}}]);
//# sourceMappingURL=188.cd379d68063dee875257.js.map