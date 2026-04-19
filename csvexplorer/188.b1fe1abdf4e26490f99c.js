"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([[188],{188(e,o,r){var s=r(7359),t=r(8997),n=r(3233),l=r(9200),i=r(8608),a=r(3317),d=r(3775),c=r(9161),p=r(1344),u=r(679),x=r(4525),h=r(5426),m=r(668),w=r(4490),f=r(9336),g=r(5723);const b=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${l.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${l.w4.colors.border} transparent;`,$=n.default.div`display:flex;flex:1;overflow:hidden;`,j=n.default.div`
  width:200px;flex-shrink:0;background:${l.w4.colors.sidebarBg};border-right:1px solid ${l.w4.colors.sidebarBorder};
  overflow-y:auto;${b}
`,v=n.default.div`padding:${l.w4.spacing.sm} ${l.w4.spacing.md};border-bottom:1px solid ${l.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${l.w4.colors.mainTextMuted};`,y=n.default.button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${l.w4.spacing.sm} ${l.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?l.w4.colors.accent:"transparent"};
  color:${e=>e.active?l.w4.colors.mainText:l.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${l.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all 0.12s;&:hover{background:${l.w4.colors.mainBg};color:${l.w4.colors.mainText};}
`,k=n.default.span`font-size:10px;color:${l.w4.colors.mainTextMuted};`,T=n.default.div`
  padding:${l.w4.spacing.md};border-top:1px solid ${l.w4.colors.sidebarBorder};
  background:${l.w4.colors.surface};
`,z=n.default.div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,C=n.default.span`color:${l.w4.colors.mainTextMuted};`,B=n.default.span`color:${l.w4.colors.mainText};font-family:${l.w4.typography.fontFamilyMono};`,M=n.default.div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,R=n.default.div`
  display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:${l.w4.spacing.sm} ${l.w4.spacing.lg};
  border-bottom:1px solid ${l.w4.colors.sidebarBorder};background:${l.w4.colors.sidebarBg};flex-shrink:0;
`,S=n.default.input`
  flex:1;background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${l.w4.colors.mainText};outline:none;
  &:focus{border-color:${l.w4.colors.accent};}
  &::placeholder{color:${l.w4.colors.mainTextMuted};}
`,F=n.default.div`
  font-size:11px;color:${l.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};
`,A=n.default.select`
  background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${l.w4.colors.mainText};outline:none;cursor:pointer;
`,E=n.default.button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.sm};
  color:${l.w4.colors.mainTextMuted};font-size:12px;font-family:${l.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,I=n.default.div`flex:1;overflow:auto;${b}`,L=n.default.table`width:100%;border-collapse:collapse;font-size:12px;`,_=n.default.th`
  position:sticky;top:0;background:${l.w4.colors.sidebarBg};border-bottom:2px solid ${l.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${l.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${l.w4.colors.mainText};}
`,P=n.default.span`margin-left:4px;opacity:0.6;`,q=n.default.td`
  padding:7px 12px;border-bottom:1px solid ${l.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?l.w4.colors.mainTextMuted:l.w4.colors.mainText};
  font-family:${e=>e.numeric?l.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,H=n.default.tr`&:hover td{background:rgba(56,139,253,0.04);}`,N=n.default.textarea`
  flex:1;background:${l.w4.colors.mainBg};border:none;outline:none;
  padding:${l.w4.spacing.xl};font-family:${l.w4.typography.fontFamilyMono};font-size:13px;
  color:${l.w4.colors.mainText};resize:none;line-height:1.6;${b}
  &::placeholder{color:${l.w4.colors.mainTextMuted};}
`,O=n.default.div`
  display:flex;align-items:center;padding:${l.w4.spacing.sm} ${l.w4.spacing.lg};
  border-top:1px solid ${l.w4.colors.sidebarBorder};background:${l.w4.colors.sidebarBg};
  font-size:11px;color:${l.w4.colors.mainTextMuted};flex-shrink:0;gap:${l.w4.spacing.md};
`,V=n.default.div`position:relative;`,D=n.default.button`display:flex;align-items:center;gap:4px;padding:0 ${l.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.sm};color:${l.w4.colors.mainTextMuted};font-size:12px;font-family:${l.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${l.w4.colors.accent};color:${l.w4.colors.mainText};}`,U=n.default.div`position:absolute;top:calc(100% + 4px);right:0;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,W=n.default.button`display:block;width:100%;text-align:left;padding:${l.w4.spacing.sm} ${l.w4.spacing.md};background:transparent;border:none;color:${l.w4.colors.mainText};font-size:13px;font-family:${l.w4.typography.fontFamily};cursor:pointer;&:hover{background:${l.w4.colors.mainBg};}`,G="toolkit:csvexplorer";function J({topBarRight:e}){const[o,r]=(0,s.useState)(""),[t,n]=(0,s.useState)("auto"),[b,J]=(0,s.useState)(""),[K,Q]=(0,s.useState)(null),[X,Y]=(0,s.useState)("asc"),[Z,ee]=(0,s.useState)(null),[oe,re]=(0,s.useState)(!1),se=(0,s.useRef)(null),te=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,l.PL)(G).then(e=>{e&&r(e),te.current=!0})},[]),(0,s.useEffect)(()=>{if(!te.current)return;const e=setTimeout(()=>(0,l.Is)(G,o),400);return()=>clearTimeout(e)},[o]),(0,s.useEffect)(()=>{const e=e=>{se.current&&!se.current.contains(e.target)&&re(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const ne="auto"===t?(0,w.Dt)(o):t,le=(0,s.useMemo)(()=>o.trim()?(0,w.CO)(o,"auto"===t?void 0:t):null,[o,t]),ie=(0,s.useMemo)(()=>{if(!le)return[];let e=le.rows;if(b.trim()){const o=b.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(o)))}if(null!==K){const o=le.stats[K]?.type;e=[...e].sort((e,r)=>{const s=e[K]??"",t=r[K]??"";let n=0;return n="number"===o?(parseFloat(s)||0)-(parseFloat(t)||0):s.localeCompare(t),"asc"===X?n:-n})}return e.slice(0,200)},[le,b,K,X]),ae=null!==Z?le?.stats[Z]??null:null,de=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,g.jsxs)(D,{onClick:()=>{r(""),J(""),Q(null),ee(null),(0,l.Is)(G,"")},children:[(0,g.jsx)(p.A,{size:13})," New"]}),(0,g.jsxs)(V,{ref:se,children:[(0,g.jsxs)(D,{onClick:()=>re(e=>!e),children:["Examples ",(0,g.jsx)(u.A,{size:12})]}),oe&&(0,g.jsx)(U,{children:f.k.map(e=>(0,g.jsx)(W,{onClick:()=>{r(e.csv),re(!1),J(""),Q(null)},children:e.label},e.label))})]}),e]});return(0,g.jsx)(l.PE,{title:"CSV Explorer",sidebar:(0,g.jsx)(i.tz,{activeAppId:"csvexplorer"}),topBarRight:de,children:(0,g.jsxs)($,{children:[le&&(0,g.jsxs)(j,{children:[(0,g.jsxs)(v,{children:["Columns (",le.headers.length,")"]}),le.stats.map((e,o)=>{return(0,g.jsxs)(y,{active:Z===o,onClick:()=>ee(Z===o?null:o),children:[(0,g.jsx)(k,{children:(r=e.type,"number"===r?(0,g.jsx)(a.A,{size:11}):"date"===r?(0,g.jsx)(d.A,{size:11}):(0,g.jsx)(c.A,{size:11}))}),e.name]},o);var r}),ae&&(0,g.jsxs)(T,{children:[(0,g.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:l.w4.colors.mainText},children:ae.name}),(0,g.jsxs)(z,{children:[(0,g.jsx)(C,{children:"Type"}),(0,g.jsx)(B,{children:ae.type})]}),(0,g.jsxs)(z,{children:[(0,g.jsx)(C,{children:"Count"}),(0,g.jsx)(B,{children:ae.count})]}),(0,g.jsxs)(z,{children:[(0,g.jsx)(C,{children:"Nulls"}),(0,g.jsx)(B,{children:ae.nullCount})]}),(0,g.jsxs)(z,{children:[(0,g.jsx)(C,{children:"Unique"}),(0,g.jsx)(B,{children:ae.uniqueCount})]}),"number"===ae.type&&void 0!==ae.min&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(z,{children:[(0,g.jsx)(C,{children:"Min"}),(0,g.jsx)(B,{children:ae.min})]}),(0,g.jsxs)(z,{children:[(0,g.jsx)(C,{children:"Max"}),(0,g.jsx)(B,{children:ae.max})]})]})]})]}),(0,g.jsx)(M,{children:le?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(R,{children:[(0,g.jsx)(S,{value:b,onChange:e=>J(e.target.value),placeholder:"Search all columns…"}),(0,g.jsxs)(A,{value:t,onChange:e=>n(e.target.value),children:[(0,g.jsxs)("option",{value:"auto",children:["Auto (",","===ne?"comma":"\t"===ne?"tab":"semicolon",")"]}),(0,g.jsx)("option",{value:",",children:"Comma"}),(0,g.jsx)("option",{value:"\t",children:"Tab"}),(0,g.jsx)("option",{value:";",children:"Semicolon"})]}),(0,g.jsxs)(F,{children:[ie.length,b?` / ${le.rows.length}`:""," rows"]}),(0,g.jsxs)(E,{onClick:()=>{r(""),J(""),Q(null),ee(null)},children:[(0,g.jsx)(x.A,{size:12})," Clear"]})]}),(0,g.jsx)(I,{children:(0,g.jsxs)(L,{children:[(0,g.jsx)("thead",{children:(0,g.jsx)("tr",{children:le.headers.map((e,o)=>{const r="number"===le.stats[o]?.type;return(0,g.jsxs)(_,{numeric:r,onClick:()=>(e=>{K===e?Y(e=>"asc"===e?"desc":"asc"):(Q(e),Y("asc"))})(o),children:[e,(0,g.jsx)(P,{children:K===o?"asc"===X?(0,g.jsx)(h.A,{size:11}):(0,g.jsx)(u.A,{size:11}):(0,g.jsx)(m.A,{size:10})})]},o)})})}),(0,g.jsx)("tbody",{children:ie.map((e,o)=>(0,g.jsx)(H,{children:le.headers.map((o,r)=>{const s=e[r]??"",t=""===s,n="number"===le.stats[r]?.type;return(0,g.jsx)(q,{numeric:n,null:t,children:t?"—":s},r)})},o))})]})}),(0,g.jsxs)(O,{children:[(0,g.jsxs)("span",{children:["Showing ",ie.length," of ",le.rows.length," rows"]}),(0,g.jsx)("span",{children:"·"}),(0,g.jsxs)("span",{children:[le.headers.length," columns"]}),le.rows.length>200&&(0,g.jsx)("span",{children:"· First 200 rows shown"})]})]}):(0,g.jsx)(N,{value:o,onChange:e=>r(e.target.value),placeholder:"Paste CSV data here…\n\nOr pick an example from the menu above.\n\nThe separator is detected automatically (comma, tab, or semicolon).",spellCheck:!1})})]})})}const K=document.getElementById("root");if(!K)throw new Error("Root element #root not found");(0,t.H)(K).render((0,g.jsx)(J,{}))},8997(e,o,r){var s=r(8991);o.H=s.createRoot,s.hydrateRoot}}]);