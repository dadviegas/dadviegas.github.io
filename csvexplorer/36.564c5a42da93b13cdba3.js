"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>G});var s=r(7359),t=r(3233),n=r(894),l=r(3775),i=r(679),a=r(5426),d=r(668),c=r(1344),p=r(3317),u=r(9161),x=r(4525),h=r(4490),m=r(9336),f=r(5723);const w=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${n.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${n.w4.colors.border} transparent;`,g=t.default.div`display:flex;flex:1;overflow:hidden;`,b=t.default.div`
  width:200px;flex-shrink:0;background:${n.w4.colors.sidebarBg};border-right:1px solid ${n.w4.colors.sidebarBorder};
  overflow-y:auto;${w}
`,$=t.default.div`padding:${n.w4.spacing.sm} ${n.w4.spacing.md};border-bottom:1px solid ${n.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${n.w4.colors.mainTextMuted};`,j=t.default.button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${n.w4.spacing.sm} ${n.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?n.w4.colors.accent:"transparent"};
  color:${e=>e.active?n.w4.colors.mainText:n.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${n.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all 0.12s;&:hover{background:${n.w4.colors.mainBg};color:${n.w4.colors.mainText};}
`,v=t.default.span`font-size:10px;color:${n.w4.colors.mainTextMuted};`,y=t.default.div`
  padding:${n.w4.spacing.md};border-top:1px solid ${n.w4.colors.sidebarBorder};
  background:${n.w4.colors.surface};
`,k=t.default.div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,T=t.default.span`color:${n.w4.colors.mainTextMuted};`,z=t.default.span`color:${n.w4.colors.mainText};font-family:${n.w4.typography.fontFamilyMono};`,C=t.default.div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,M=t.default.div`
  display:flex;align-items:center;gap:${n.w4.spacing.sm};padding:${n.w4.spacing.sm} ${n.w4.spacing.lg};
  border-bottom:1px solid ${n.w4.colors.sidebarBorder};background:${n.w4.colors.sidebarBg};flex-shrink:0;
`,B=t.default.input`
  flex:1;background:${n.w4.colors.mainBg};border:1px solid ${n.w4.colors.border};
  border-radius:${n.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${n.w4.colors.mainText};outline:none;
  &:focus{border-color:${n.w4.colors.accent};}
  &::placeholder{color:${n.w4.colors.mainTextMuted};}
`,S=t.default.div`
  font-size:11px;color:${n.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${n.w4.colors.surface};border:1px solid ${n.w4.colors.border};
  border-radius:${n.w4.borderRadius.sm};
`,F=t.default.select`
  background:${n.w4.colors.mainBg};border:1px solid ${n.w4.colors.border};
  border-radius:${n.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${n.w4.colors.mainText};outline:none;cursor:pointer;
`,A=t.default.button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${n.w4.colors.border};border-radius:${n.w4.borderRadius.sm};
  color:${n.w4.colors.mainTextMuted};font-size:12px;font-family:${n.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,R=t.default.div`flex:1;overflow:auto;${w}`,E=t.default.table`width:100%;border-collapse:collapse;font-size:12px;`,L=t.default.th`
  position:sticky;top:0;background:${n.w4.colors.sidebarBg};border-bottom:2px solid ${n.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${n.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${n.w4.colors.mainText};}
`,I=t.default.span`margin-left:4px;opacity:0.6;`,_=t.default.td`
  padding:7px 12px;border-bottom:1px solid ${n.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?n.w4.colors.mainTextMuted:n.w4.colors.mainText};
  font-family:${e=>e.numeric?n.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,P=t.default.tr`&:hover td{background:rgba(56,139,253,0.04);}`,q=t.default.textarea`
  flex:1;background:${n.w4.colors.mainBg};border:none;outline:none;
  padding:${n.w4.spacing.xl};font-family:${n.w4.typography.fontFamilyMono};font-size:13px;
  color:${n.w4.colors.mainText};resize:none;line-height:1.6;${w}
  &::placeholder{color:${n.w4.colors.mainTextMuted};}
`,N=t.default.div`
  display:flex;align-items:center;padding:${n.w4.spacing.sm} ${n.w4.spacing.lg};
  border-top:1px solid ${n.w4.colors.sidebarBorder};background:${n.w4.colors.sidebarBg};
  font-size:11px;color:${n.w4.colors.mainTextMuted};flex-shrink:0;gap:${n.w4.spacing.md};
`,O=t.default.div`position:relative;`,V=t.default.button`display:flex;align-items:center;gap:4px;padding:0 ${n.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${n.w4.colors.border};border-radius:${n.w4.borderRadius.sm};color:${n.w4.colors.mainTextMuted};font-size:12px;font-family:${n.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${n.w4.colors.accent};color:${n.w4.colors.mainText};}`,D=t.default.div`position:absolute;top:calc(100% + 4px);right:0;background:${n.w4.colors.surface};border:1px solid ${n.w4.colors.border};border-radius:${n.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,U=t.default.button`display:block;width:100%;text-align:left;padding:${n.w4.spacing.sm} ${n.w4.spacing.md};background:transparent;border:none;color:${n.w4.colors.mainText};font-size:13px;font-family:${n.w4.typography.fontFamily};cursor:pointer;&:hover{background:${n.w4.colors.mainBg};}`,W="toolkit:csvexplorer";function G({topBarRight:e}){const[o,r]=(0,s.useState)(""),[t,w]=(0,s.useState)("auto"),[G,H]=(0,s.useState)(""),[J,K]=(0,s.useState)(null),[Q,X]=(0,s.useState)("asc"),[Y,Z]=(0,s.useState)(null),[ee,oe]=(0,s.useState)(!1),re=(0,s.useRef)(null),se=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,n.PL)(W).then(e=>{e&&r(e),se.current=!0})},[]),(0,s.useEffect)(()=>{if(!se.current)return;const e=setTimeout(()=>(0,n.Is)(W,o),400);return()=>clearTimeout(e)},[o]),(0,s.useEffect)(()=>{const e=e=>{re.current&&!re.current.contains(e.target)&&oe(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const te="auto"===t?(0,h.Dt)(o):t,ne=(0,s.useMemo)(()=>o.trim()?(0,h.CO)(o,"auto"===t?void 0:t):null,[o,t]),le=(0,s.useMemo)(()=>{if(!ne)return[];let e=ne.rows;if(G.trim()){const o=G.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(o)))}if(null!==J){const o=ne.stats[J]?.type;e=[...e].sort((e,r)=>{const s=e[J]??"",t=r[J]??"";let n=0;return n="number"===o?(parseFloat(s)||0)-(parseFloat(t)||0):s.localeCompare(t),"asc"===Q?n:-n})}return e.slice(0,200)},[ne,G,J,Q]),ie=null!==Y?ne?.stats[Y]??null:null,ae=(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:n.w4.spacing.sm},children:[(0,f.jsxs)(V,{onClick:()=>{r(""),H(""),K(null),Z(null),(0,n.Is)(W,"")},children:[(0,f.jsx)(c.A,{size:13})," New"]}),(0,f.jsxs)(O,{ref:re,children:[(0,f.jsxs)(V,{onClick:()=>oe(e=>!e),children:["Examples ",(0,f.jsx)(i.A,{size:12})]}),ee&&(0,f.jsx)(D,{children:m.k.map(e=>(0,f.jsx)(U,{onClick:()=>{r(e.csv),oe(!1),H(""),K(null)},children:e.label},e.label))})]}),e]});return(0,f.jsx)(n.PE,{title:"CSV Explorer",sidebar:(0,f.jsx)(n.tz,{activeAppId:"csvexplorer"}),topBarRight:ae,children:(0,f.jsxs)(g,{children:[ne&&(0,f.jsxs)(b,{children:[(0,f.jsxs)($,{children:["Columns (",ne.headers.length,")"]}),ne.stats.map((e,o)=>{return(0,f.jsxs)(j,{active:Y===o,onClick:()=>Z(Y===o?null:o),children:[(0,f.jsx)(v,{children:(r=e.type,"number"===r?(0,f.jsx)(p.A,{size:11}):"date"===r?(0,f.jsx)(l.A,{size:11}):(0,f.jsx)(u.A,{size:11}))}),e.name]},o);var r}),ie&&(0,f.jsxs)(y,{children:[(0,f.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:n.w4.colors.mainText},children:ie.name}),(0,f.jsxs)(k,{children:[(0,f.jsx)(T,{children:"Type"}),(0,f.jsx)(z,{children:ie.type})]}),(0,f.jsxs)(k,{children:[(0,f.jsx)(T,{children:"Count"}),(0,f.jsx)(z,{children:ie.count})]}),(0,f.jsxs)(k,{children:[(0,f.jsx)(T,{children:"Nulls"}),(0,f.jsx)(z,{children:ie.nullCount})]}),(0,f.jsxs)(k,{children:[(0,f.jsx)(T,{children:"Unique"}),(0,f.jsx)(z,{children:ie.uniqueCount})]}),"number"===ie.type&&void 0!==ie.min&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(k,{children:[(0,f.jsx)(T,{children:"Min"}),(0,f.jsx)(z,{children:ie.min})]}),(0,f.jsxs)(k,{children:[(0,f.jsx)(T,{children:"Max"}),(0,f.jsx)(z,{children:ie.max})]})]})]})]}),(0,f.jsx)(C,{children:ne?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(M,{children:[(0,f.jsx)(B,{value:G,onChange:e=>H(e.target.value),placeholder:"Search all columns…"}),(0,f.jsxs)(F,{value:t,onChange:e=>w(e.target.value),children:[(0,f.jsxs)("option",{value:"auto",children:["Auto (",","===te?"comma":"\t"===te?"tab":"semicolon",")"]}),(0,f.jsx)("option",{value:",",children:"Comma"}),(0,f.jsx)("option",{value:"\t",children:"Tab"}),(0,f.jsx)("option",{value:";",children:"Semicolon"})]}),(0,f.jsxs)(S,{children:[le.length,G?` / ${ne.rows.length}`:""," rows"]}),(0,f.jsxs)(A,{onClick:()=>{r(""),H(""),K(null),Z(null)},children:[(0,f.jsx)(x.A,{size:12})," Clear"]})]}),(0,f.jsx)(R,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)("thead",{children:(0,f.jsx)("tr",{children:ne.headers.map((e,o)=>{const r="number"===ne.stats[o]?.type;return(0,f.jsxs)(L,{numeric:r,onClick:()=>(e=>{J===e?X(e=>"asc"===e?"desc":"asc"):(K(e),X("asc"))})(o),children:[e,(0,f.jsx)(I,{children:J===o?"asc"===Q?(0,f.jsx)(a.A,{size:11}):(0,f.jsx)(i.A,{size:11}):(0,f.jsx)(d.A,{size:10})})]},o)})})}),(0,f.jsx)("tbody",{children:le.map((e,o)=>(0,f.jsx)(P,{children:ne.headers.map((o,r)=>{const s=e[r]??"",t=""===s,n="number"===ne.stats[r]?.type;return(0,f.jsx)(_,{numeric:n,null:t,children:t?"—":s},r)})},o))})]})}),(0,f.jsxs)(N,{children:[(0,f.jsxs)("span",{children:["Showing ",le.length," of ",ne.rows.length," rows"]}),(0,f.jsx)("span",{children:"·"}),(0,f.jsxs)("span",{children:[ne.headers.length," columns"]}),ne.rows.length>200&&(0,f.jsx)("span",{children:"· First 200 rows shown"})]})]}):(0,f.jsx)(q,{value:o,onChange:e=>r(e.target.value),placeholder:"Paste CSV data here…\n\nOr pick an example from the menu above.\n\nThe separator is detected automatically (comma, tab, or semicolon).",spellCheck:!1})})]})})}}}]);
//# sourceMappingURL=36.564c5a42da93b13cdba3.js.map