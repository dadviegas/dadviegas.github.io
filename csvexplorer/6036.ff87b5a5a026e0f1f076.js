"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([[6036],{6036(e,o,r){r.r(o),r.d(o,{default:()=>H});var s=r(7359),t=r(3233),n=r(9200),l=r(3857),i=r(3775),a=r(679),d=r(5426),c=r(668),p=r(1344),u=r(3317),x=r(9161),h=r(4525),m=r(4490),f=r(9336),w=r(5723);const g=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${n.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${n.w4.colors.border} transparent;`,b=t.default.div`display:flex;flex:1;overflow:hidden;`,$=t.default.div`
  width:200px;flex-shrink:0;background:${n.w4.colors.sidebarBg};border-right:1px solid ${n.w4.colors.sidebarBorder};
  overflow-y:auto;${g}
`,j=t.default.div`padding:${n.w4.spacing.sm} ${n.w4.spacing.md};border-bottom:1px solid ${n.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${n.w4.colors.mainTextMuted};`,v=t.default.button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${n.w4.spacing.sm} ${n.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?n.w4.colors.accent:"transparent"};
  color:${e=>e.active?n.w4.colors.mainText:n.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${n.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all 0.12s;&:hover{background:${n.w4.colors.mainBg};color:${n.w4.colors.mainText};}
`,y=t.default.span`font-size:10px;color:${n.w4.colors.mainTextMuted};`,k=t.default.div`
  padding:${n.w4.spacing.md};border-top:1px solid ${n.w4.colors.sidebarBorder};
  background:${n.w4.colors.surface};
`,T=t.default.div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,z=t.default.span`color:${n.w4.colors.mainTextMuted};`,C=t.default.span`color:${n.w4.colors.mainText};font-family:${n.w4.typography.fontFamilyMono};`,M=t.default.div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,B=t.default.div`
  display:flex;align-items:center;gap:${n.w4.spacing.sm};padding:${n.w4.spacing.sm} ${n.w4.spacing.lg};
  border-bottom:1px solid ${n.w4.colors.sidebarBorder};background:${n.w4.colors.sidebarBg};flex-shrink:0;
`,S=t.default.input`
  flex:1;background:${n.w4.colors.mainBg};border:1px solid ${n.w4.colors.border};
  border-radius:${n.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${n.w4.colors.mainText};outline:none;
  &:focus{border-color:${n.w4.colors.accent};}
  &::placeholder{color:${n.w4.colors.mainTextMuted};}
`,F=t.default.div`
  font-size:11px;color:${n.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${n.w4.colors.surface};border:1px solid ${n.w4.colors.border};
  border-radius:${n.w4.borderRadius.sm};
`,A=t.default.select`
  background:${n.w4.colors.mainBg};border:1px solid ${n.w4.colors.border};
  border-radius:${n.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${n.w4.colors.mainText};outline:none;cursor:pointer;
`,R=t.default.button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${n.w4.colors.border};border-radius:${n.w4.borderRadius.sm};
  color:${n.w4.colors.mainTextMuted};font-size:12px;font-family:${n.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,E=t.default.div`flex:1;overflow:auto;${g}`,L=t.default.table`width:100%;border-collapse:collapse;font-size:12px;`,I=t.default.th`
  position:sticky;top:0;background:${n.w4.colors.sidebarBg};border-bottom:2px solid ${n.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${n.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${n.w4.colors.mainText};}
`,_=t.default.span`margin-left:4px;opacity:0.6;`,P=t.default.td`
  padding:7px 12px;border-bottom:1px solid ${n.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?n.w4.colors.mainTextMuted:n.w4.colors.mainText};
  font-family:${e=>e.numeric?n.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,q=t.default.tr`&:hover td{background:rgba(56,139,253,0.04);}`,N=t.default.textarea`
  flex:1;background:${n.w4.colors.mainBg};border:none;outline:none;
  padding:${n.w4.spacing.xl};font-family:${n.w4.typography.fontFamilyMono};font-size:13px;
  color:${n.w4.colors.mainText};resize:none;line-height:1.6;${g}
  &::placeholder{color:${n.w4.colors.mainTextMuted};}
`,O=t.default.div`
  display:flex;align-items:center;padding:${n.w4.spacing.sm} ${n.w4.spacing.lg};
  border-top:1px solid ${n.w4.colors.sidebarBorder};background:${n.w4.colors.sidebarBg};
  font-size:11px;color:${n.w4.colors.mainTextMuted};flex-shrink:0;gap:${n.w4.spacing.md};
`,V=t.default.div`position:relative;`,D=t.default.button`display:flex;align-items:center;gap:4px;padding:0 ${n.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${n.w4.colors.border};border-radius:${n.w4.borderRadius.sm};color:${n.w4.colors.mainTextMuted};font-size:12px;font-family:${n.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${n.w4.colors.accent};color:${n.w4.colors.mainText};}`,U=t.default.div`position:absolute;top:calc(100% + 4px);right:0;background:${n.w4.colors.surface};border:1px solid ${n.w4.colors.border};border-radius:${n.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,W=t.default.button`display:block;width:100%;text-align:left;padding:${n.w4.spacing.sm} ${n.w4.spacing.md};background:transparent;border:none;color:${n.w4.colors.mainText};font-size:13px;font-family:${n.w4.typography.fontFamily};cursor:pointer;&:hover{background:${n.w4.colors.mainBg};}`,G="toolkit:csvexplorer";function H({topBarRight:e}){const[o,r]=(0,s.useState)(""),[t,g]=(0,s.useState)("auto"),[H,J]=(0,s.useState)(""),[K,Q]=(0,s.useState)(null),[X,Y]=(0,s.useState)("asc"),[Z,ee]=(0,s.useState)(null),[oe,re]=(0,s.useState)(!1),se=(0,s.useRef)(null),te=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,n.PL)(G).then(e=>{e&&r(e),te.current=!0})},[]),(0,s.useEffect)(()=>{if(!te.current)return;const e=setTimeout(()=>(0,n.Is)(G,o),400);return()=>clearTimeout(e)},[o]),(0,s.useEffect)(()=>{const e=e=>{se.current&&!se.current.contains(e.target)&&re(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const ne="auto"===t?(0,m.Dt)(o):t,le=(0,s.useMemo)(()=>o.trim()?(0,m.CO)(o,"auto"===t?void 0:t):null,[o,t]),ie=(0,s.useMemo)(()=>{if(!le)return[];let e=le.rows;if(H.trim()){const o=H.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(o)))}if(null!==K){const o=le.stats[K]?.type;e=[...e].sort((e,r)=>{const s=e[K]??"",t=r[K]??"";let n=0;return n="number"===o?(parseFloat(s)||0)-(parseFloat(t)||0):s.localeCompare(t),"asc"===X?n:-n})}return e.slice(0,200)},[le,H,K,X]),ae=null!==Z?le?.stats[Z]??null:null,de=(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:n.w4.spacing.sm},children:[(0,w.jsxs)(D,{onClick:()=>{r(""),J(""),Q(null),ee(null),(0,n.Is)(G,"")},children:[(0,w.jsx)(p.A,{size:13})," New"]}),(0,w.jsxs)(V,{ref:se,children:[(0,w.jsxs)(D,{onClick:()=>re(e=>!e),children:["Examples ",(0,w.jsx)(a.A,{size:12})]}),oe&&(0,w.jsx)(U,{children:f.k.map(e=>(0,w.jsx)(W,{onClick:()=>{r(e.csv),re(!1),J(""),Q(null)},children:e.label},e.label))})]}),e]});return(0,w.jsx)(n.PE,{title:"CSV Explorer",sidebar:(0,w.jsx)(l.tz,{activeAppId:"csvexplorer"}),topBarRight:de,children:(0,w.jsxs)(b,{children:[le&&(0,w.jsxs)($,{children:[(0,w.jsxs)(j,{children:["Columns (",le.headers.length,")"]}),le.stats.map((e,o)=>{return(0,w.jsxs)(v,{active:Z===o,onClick:()=>ee(Z===o?null:o),children:[(0,w.jsx)(y,{children:(r=e.type,"number"===r?(0,w.jsx)(u.A,{size:11}):"date"===r?(0,w.jsx)(i.A,{size:11}):(0,w.jsx)(x.A,{size:11}))}),e.name]},o);var r}),ae&&(0,w.jsxs)(k,{children:[(0,w.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:n.w4.colors.mainText},children:ae.name}),(0,w.jsxs)(T,{children:[(0,w.jsx)(z,{children:"Type"}),(0,w.jsx)(C,{children:ae.type})]}),(0,w.jsxs)(T,{children:[(0,w.jsx)(z,{children:"Count"}),(0,w.jsx)(C,{children:ae.count})]}),(0,w.jsxs)(T,{children:[(0,w.jsx)(z,{children:"Nulls"}),(0,w.jsx)(C,{children:ae.nullCount})]}),(0,w.jsxs)(T,{children:[(0,w.jsx)(z,{children:"Unique"}),(0,w.jsx)(C,{children:ae.uniqueCount})]}),"number"===ae.type&&void 0!==ae.min&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(T,{children:[(0,w.jsx)(z,{children:"Min"}),(0,w.jsx)(C,{children:ae.min})]}),(0,w.jsxs)(T,{children:[(0,w.jsx)(z,{children:"Max"}),(0,w.jsx)(C,{children:ae.max})]})]})]})]}),(0,w.jsx)(M,{children:le?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(B,{children:[(0,w.jsx)(S,{value:H,onChange:e=>J(e.target.value),placeholder:"Search all columns…"}),(0,w.jsxs)(A,{value:t,onChange:e=>g(e.target.value),children:[(0,w.jsxs)("option",{value:"auto",children:["Auto (",","===ne?"comma":"\t"===ne?"tab":"semicolon",")"]}),(0,w.jsx)("option",{value:",",children:"Comma"}),(0,w.jsx)("option",{value:"\t",children:"Tab"}),(0,w.jsx)("option",{value:";",children:"Semicolon"})]}),(0,w.jsxs)(F,{children:[ie.length,H?` / ${le.rows.length}`:""," rows"]}),(0,w.jsxs)(R,{onClick:()=>{r(""),J(""),Q(null),ee(null)},children:[(0,w.jsx)(h.A,{size:12})," Clear"]})]}),(0,w.jsx)(E,{children:(0,w.jsxs)(L,{children:[(0,w.jsx)("thead",{children:(0,w.jsx)("tr",{children:le.headers.map((e,o)=>{const r="number"===le.stats[o]?.type;return(0,w.jsxs)(I,{numeric:r,onClick:()=>(e=>{K===e?Y(e=>"asc"===e?"desc":"asc"):(Q(e),Y("asc"))})(o),children:[e,(0,w.jsx)(_,{children:K===o?"asc"===X?(0,w.jsx)(d.A,{size:11}):(0,w.jsx)(a.A,{size:11}):(0,w.jsx)(c.A,{size:10})})]},o)})})}),(0,w.jsx)("tbody",{children:ie.map((e,o)=>(0,w.jsx)(q,{children:le.headers.map((o,r)=>{const s=e[r]??"",t=""===s,n="number"===le.stats[r]?.type;return(0,w.jsx)(P,{numeric:n,null:t,children:t?"—":s},r)})},o))})]})}),(0,w.jsxs)(O,{children:[(0,w.jsxs)("span",{children:["Showing ",ie.length," of ",le.rows.length," rows"]}),(0,w.jsx)("span",{children:"·"}),(0,w.jsxs)("span",{children:[le.headers.length," columns"]}),le.rows.length>200&&(0,w.jsx)("span",{children:"· First 200 rows shown"})]})]}):(0,w.jsx)(N,{value:o,onChange:e=>r(e.target.value),placeholder:"Paste CSV data here…\n\nOr pick an example from the menu above.\n\nThe separator is detected automatically (comma, tab, or semicolon).",spellCheck:!1})})]})})}}}]);