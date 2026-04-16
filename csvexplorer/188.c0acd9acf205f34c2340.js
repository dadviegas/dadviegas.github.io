"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([[188],{188(e,o,r){var s=r(7359),t=r(8997),n=r(3233),l=r(894),i=r(3317),a=r(3775),d=r(9161),c=r(1344),p=r(679),u=r(4525),x=r(5426),h=r(668),m=r(4490),w=r(9336),f=r(5723);const g=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${l.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${l.w4.colors.border} transparent;`,b=n.default.div`display:flex;flex:1;overflow:hidden;`,$=n.default.div`
  width:200px;flex-shrink:0;background:${l.w4.colors.sidebarBg};border-right:1px solid ${l.w4.colors.sidebarBorder};
  overflow-y:auto;${g}
`,j=n.default.div`padding:${l.w4.spacing.sm} ${l.w4.spacing.md};border-bottom:1px solid ${l.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${l.w4.colors.mainTextMuted};`,v=n.default.button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${l.w4.spacing.sm} ${l.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?l.w4.colors.accent:"transparent"};
  color:${e=>e.active?l.w4.colors.mainText:l.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${l.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all 0.12s;&:hover{background:${l.w4.colors.mainBg};color:${l.w4.colors.mainText};}
`,y=n.default.span`font-size:10px;color:${l.w4.colors.mainTextMuted};`,k=n.default.div`
  padding:${l.w4.spacing.md};border-top:1px solid ${l.w4.colors.sidebarBorder};
  background:${l.w4.colors.surface};
`,T=n.default.div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,z=n.default.span`color:${l.w4.colors.mainTextMuted};`,C=n.default.span`color:${l.w4.colors.mainText};font-family:${l.w4.typography.fontFamilyMono};`,B=n.default.div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,M=n.default.div`
  display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:${l.w4.spacing.sm} ${l.w4.spacing.lg};
  border-bottom:1px solid ${l.w4.colors.sidebarBorder};background:${l.w4.colors.sidebarBg};flex-shrink:0;
`,R=n.default.input`
  flex:1;background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${l.w4.colors.mainText};outline:none;
  &:focus{border-color:${l.w4.colors.accent};}
  &::placeholder{color:${l.w4.colors.mainTextMuted};}
`,S=n.default.div`
  font-size:11px;color:${l.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};
`,F=n.default.select`
  background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${l.w4.colors.mainText};outline:none;cursor:pointer;
`,A=n.default.button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.sm};
  color:${l.w4.colors.mainTextMuted};font-size:12px;font-family:${l.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,E=n.default.div`flex:1;overflow:auto;${g}`,I=n.default.table`width:100%;border-collapse:collapse;font-size:12px;`,L=n.default.th`
  position:sticky;top:0;background:${l.w4.colors.sidebarBg};border-bottom:2px solid ${l.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${l.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${l.w4.colors.mainText};}
`,_=n.default.span`margin-left:4px;opacity:0.6;`,P=n.default.td`
  padding:7px 12px;border-bottom:1px solid ${l.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?l.w4.colors.mainTextMuted:l.w4.colors.mainText};
  font-family:${e=>e.numeric?l.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,q=n.default.tr`&:hover td{background:rgba(56,139,253,0.04);}`,H=n.default.textarea`
  flex:1;background:${l.w4.colors.mainBg};border:none;outline:none;
  padding:${l.w4.spacing.xl};font-family:${l.w4.typography.fontFamilyMono};font-size:13px;
  color:${l.w4.colors.mainText};resize:none;line-height:1.6;${g}
  &::placeholder{color:${l.w4.colors.mainTextMuted};}
`,N=n.default.div`
  display:flex;align-items:center;padding:${l.w4.spacing.sm} ${l.w4.spacing.lg};
  border-top:1px solid ${l.w4.colors.sidebarBorder};background:${l.w4.colors.sidebarBg};
  font-size:11px;color:${l.w4.colors.mainTextMuted};flex-shrink:0;gap:${l.w4.spacing.md};
`,O=n.default.div`position:relative;`,V=n.default.button`display:flex;align-items:center;gap:4px;padding:0 ${l.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.sm};color:${l.w4.colors.mainTextMuted};font-size:12px;font-family:${l.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${l.w4.colors.accent};color:${l.w4.colors.mainText};}`,D=n.default.div`position:absolute;top:calc(100% + 4px);right:0;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,U=n.default.button`display:block;width:100%;text-align:left;padding:${l.w4.spacing.sm} ${l.w4.spacing.md};background:transparent;border:none;color:${l.w4.colors.mainText};font-size:13px;font-family:${l.w4.typography.fontFamily};cursor:pointer;&:hover{background:${l.w4.colors.mainBg};}`,W="toolkit:csvexplorer";function G({topBarRight:e}){const[o,r]=(0,s.useState)(""),[t,n]=(0,s.useState)("auto"),[g,G]=(0,s.useState)(""),[J,K]=(0,s.useState)(null),[Q,X]=(0,s.useState)("asc"),[Y,Z]=(0,s.useState)(null),[ee,oe]=(0,s.useState)(!1),re=(0,s.useRef)(null),se=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,l.PL)(W).then(e=>{e&&r(e),se.current=!0})},[]),(0,s.useEffect)(()=>{if(!se.current)return;const e=setTimeout(()=>(0,l.Is)(W,o),400);return()=>clearTimeout(e)},[o]),(0,s.useEffect)(()=>{const e=e=>{re.current&&!re.current.contains(e.target)&&oe(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const te="auto"===t?(0,m.Dt)(o):t,ne=(0,s.useMemo)(()=>o.trim()?(0,m.CO)(o,"auto"===t?void 0:t):null,[o,t]),le=(0,s.useMemo)(()=>{if(!ne)return[];let e=ne.rows;if(g.trim()){const o=g.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(o)))}if(null!==J){const o=ne.stats[J]?.type;e=[...e].sort((e,r)=>{const s=e[J]??"",t=r[J]??"";let n=0;return n="number"===o?(parseFloat(s)||0)-(parseFloat(t)||0):s.localeCompare(t),"asc"===Q?n:-n})}return e.slice(0,200)},[ne,g,J,Q]),ie=null!==Y?ne?.stats[Y]??null:null,ae=(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,f.jsxs)(V,{onClick:()=>{r(""),G(""),K(null),Z(null),(0,l.Is)(W,"")},children:[(0,f.jsx)(c.A,{size:13})," New"]}),(0,f.jsxs)(O,{ref:re,children:[(0,f.jsxs)(V,{onClick:()=>oe(e=>!e),children:["Examples ",(0,f.jsx)(p.A,{size:12})]}),ee&&(0,f.jsx)(D,{children:w.k.map(e=>(0,f.jsx)(U,{onClick:()=>{r(e.csv),oe(!1),G(""),K(null)},children:e.label},e.label))})]}),e]});return(0,f.jsx)(l.PE,{title:"CSV Explorer",sidebar:(0,f.jsx)(l.tz,{activeAppId:"csvexplorer"}),topBarRight:ae,children:(0,f.jsxs)(b,{children:[ne&&(0,f.jsxs)($,{children:[(0,f.jsxs)(j,{children:["Columns (",ne.headers.length,")"]}),ne.stats.map((e,o)=>{return(0,f.jsxs)(v,{active:Y===o,onClick:()=>Z(Y===o?null:o),children:[(0,f.jsx)(y,{children:(r=e.type,"number"===r?(0,f.jsx)(i.A,{size:11}):"date"===r?(0,f.jsx)(a.A,{size:11}):(0,f.jsx)(d.A,{size:11}))}),e.name]},o);var r}),ie&&(0,f.jsxs)(k,{children:[(0,f.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:l.w4.colors.mainText},children:ie.name}),(0,f.jsxs)(T,{children:[(0,f.jsx)(z,{children:"Type"}),(0,f.jsx)(C,{children:ie.type})]}),(0,f.jsxs)(T,{children:[(0,f.jsx)(z,{children:"Count"}),(0,f.jsx)(C,{children:ie.count})]}),(0,f.jsxs)(T,{children:[(0,f.jsx)(z,{children:"Nulls"}),(0,f.jsx)(C,{children:ie.nullCount})]}),(0,f.jsxs)(T,{children:[(0,f.jsx)(z,{children:"Unique"}),(0,f.jsx)(C,{children:ie.uniqueCount})]}),"number"===ie.type&&void 0!==ie.min&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(T,{children:[(0,f.jsx)(z,{children:"Min"}),(0,f.jsx)(C,{children:ie.min})]}),(0,f.jsxs)(T,{children:[(0,f.jsx)(z,{children:"Max"}),(0,f.jsx)(C,{children:ie.max})]})]})]})]}),(0,f.jsx)(B,{children:ne?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(M,{children:[(0,f.jsx)(R,{value:g,onChange:e=>G(e.target.value),placeholder:"Search all columns…"}),(0,f.jsxs)(F,{value:t,onChange:e=>n(e.target.value),children:[(0,f.jsxs)("option",{value:"auto",children:["Auto (",","===te?"comma":"\t"===te?"tab":"semicolon",")"]}),(0,f.jsx)("option",{value:",",children:"Comma"}),(0,f.jsx)("option",{value:"\t",children:"Tab"}),(0,f.jsx)("option",{value:";",children:"Semicolon"})]}),(0,f.jsxs)(S,{children:[le.length,g?` / ${ne.rows.length}`:""," rows"]}),(0,f.jsxs)(A,{onClick:()=>{r(""),G(""),K(null),Z(null)},children:[(0,f.jsx)(u.A,{size:12})," Clear"]})]}),(0,f.jsx)(E,{children:(0,f.jsxs)(I,{children:[(0,f.jsx)("thead",{children:(0,f.jsx)("tr",{children:ne.headers.map((e,o)=>{const r="number"===ne.stats[o]?.type;return(0,f.jsxs)(L,{numeric:r,onClick:()=>(e=>{J===e?X(e=>"asc"===e?"desc":"asc"):(K(e),X("asc"))})(o),children:[e,(0,f.jsx)(_,{children:J===o?"asc"===Q?(0,f.jsx)(x.A,{size:11}):(0,f.jsx)(p.A,{size:11}):(0,f.jsx)(h.A,{size:10})})]},o)})})}),(0,f.jsx)("tbody",{children:le.map((e,o)=>(0,f.jsx)(q,{children:ne.headers.map((o,r)=>{const s=e[r]??"",t=""===s,n="number"===ne.stats[r]?.type;return(0,f.jsx)(P,{numeric:n,null:t,children:t?"—":s},r)})},o))})]})}),(0,f.jsxs)(N,{children:[(0,f.jsxs)("span",{children:["Showing ",le.length," of ",ne.rows.length," rows"]}),(0,f.jsx)("span",{children:"·"}),(0,f.jsxs)("span",{children:[ne.headers.length," columns"]}),ne.rows.length>200&&(0,f.jsx)("span",{children:"· First 200 rows shown"})]})]}):(0,f.jsx)(H,{value:o,onChange:e=>r(e.target.value),placeholder:"Paste CSV data here…\n\nOr pick an example from the menu above.\n\nThe separator is detected automatically (comma, tab, or semicolon).",spellCheck:!1})})]})})}const J=document.getElementById("root");if(!J)throw new Error("Root element #root not found");(0,t.H)(J).render((0,f.jsx)(G,{}))},8997(e,o,r){var s=r(8991);o.H=s.createRoot,s.hydrateRoot}}]);
//# sourceMappingURL=188.c0acd9acf205f34c2340.js.map