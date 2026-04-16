"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>U});var s=r(7359),n=r(3233),l=r(5723),t=r(3775),a=r(679),i=r(5426),d=r(668),c=r(3317),p=r(9161),u=r(4525),x=r(4490),h=r(9336),m=r(8104);const w=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${l.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${l.w4.colors.border} transparent;`,f=n.default.div`display:flex;flex:1;overflow:hidden;`,g=n.default.div`
  width:200px;flex-shrink:0;background:${l.w4.colors.sidebarBg};border-right:1px solid ${l.w4.colors.sidebarBorder};
  overflow-y:auto;${w}
`,b=n.default.div`padding:${l.w4.spacing.sm} ${l.w4.spacing.md};border-bottom:1px solid ${l.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${l.w4.colors.mainTextMuted};`,$=n.default.button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${l.w4.spacing.sm} ${l.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?l.w4.colors.accent:"transparent"};
  color:${e=>e.active?l.w4.colors.mainText:l.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${l.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all 0.12s;&:hover{background:${l.w4.colors.mainBg};color:${l.w4.colors.mainText};}
`,j=n.default.span`font-size:10px;color:${l.w4.colors.mainTextMuted};`,v=n.default.div`
  padding:${l.w4.spacing.md};border-top:1px solid ${l.w4.colors.sidebarBorder};
  background:${l.w4.colors.surface};
`,y=n.default.div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,k=n.default.span`color:${l.w4.colors.mainTextMuted};`,T=n.default.span`color:${l.w4.colors.mainText};font-family:${l.w4.typography.fontFamilyMono};`,z=n.default.div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,C=n.default.div`
  display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:${l.w4.spacing.sm} ${l.w4.spacing.lg};
  border-bottom:1px solid ${l.w4.colors.sidebarBorder};background:${l.w4.colors.sidebarBg};flex-shrink:0;
`,M=n.default.input`
  flex:1;background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${l.w4.colors.mainText};outline:none;
  &:focus{border-color:${l.w4.colors.accent};}
  &::placeholder{color:${l.w4.colors.mainTextMuted};}
`,B=n.default.div`
  font-size:11px;color:${l.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};
`,S=n.default.select`
  background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${l.w4.colors.mainText};outline:none;cursor:pointer;
`,F=n.default.button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.sm};
  color:${l.w4.colors.mainTextMuted};font-size:12px;font-family:${l.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,A=n.default.div`flex:1;overflow:auto;${w}`,R=n.default.table`width:100%;border-collapse:collapse;font-size:12px;`,E=n.default.th`
  position:sticky;top:0;background:${l.w4.colors.sidebarBg};border-bottom:2px solid ${l.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${l.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${l.w4.colors.mainText};}
`,L=n.default.span`margin-left:4px;opacity:0.6;`,_=n.default.td`
  padding:7px 12px;border-bottom:1px solid ${l.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?l.w4.colors.mainTextMuted:l.w4.colors.mainText};
  font-family:${e=>e.numeric?l.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,q=n.default.tr`&:hover td{background:rgba(56,139,253,0.04);}`,O=n.default.textarea`
  flex:1;background:${l.w4.colors.mainBg};border:none;outline:none;
  padding:${l.w4.spacing.xl};font-family:${l.w4.typography.fontFamilyMono};font-size:13px;
  color:${l.w4.colors.mainText};resize:none;line-height:1.6;${w}
  &::placeholder{color:${l.w4.colors.mainTextMuted};}
`,P=n.default.div`
  display:flex;align-items:center;padding:${l.w4.spacing.sm} ${l.w4.spacing.lg};
  border-top:1px solid ${l.w4.colors.sidebarBorder};background:${l.w4.colors.sidebarBg};
  font-size:11px;color:${l.w4.colors.mainTextMuted};flex-shrink:0;gap:${l.w4.spacing.md};
`,V=n.default.div`position:relative;`,D=n.default.button`display:flex;align-items:center;gap:4px;padding:0 ${l.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.sm};color:${l.w4.colors.mainTextMuted};font-size:12px;font-family:${l.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${l.w4.colors.accent};color:${l.w4.colors.mainText};}`,I=n.default.div`position:absolute;top:calc(100% + 4px);right:0;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,N=n.default.button`display:block;width:100%;text-align:left;padding:${l.w4.spacing.sm} ${l.w4.spacing.md};background:transparent;border:none;color:${l.w4.colors.mainText};font-size:13px;font-family:${l.w4.typography.fontFamily};cursor:pointer;&:hover{background:${l.w4.colors.mainBg};}`;function U({topBarRight:e}){const[o,r]=(0,s.useState)(""),[n,w]=(0,s.useState)("auto"),[U,W]=(0,s.useState)(""),[G,H]=(0,s.useState)(null),[J,K]=(0,s.useState)("asc"),[Q,X]=(0,s.useState)(null),[Y,Z]=(0,s.useState)(!1),ee=(0,s.useRef)(null);(0,s.useEffect)(()=>{const e=e=>{ee.current&&!ee.current.contains(e.target)&&Z(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const oe="auto"===n?(0,x.Dt)(o):n,re=(0,s.useMemo)(()=>o.trim()?(0,x.CO)(o,"auto"===n?void 0:n):null,[o,n]),se=(0,s.useMemo)(()=>{if(!re)return[];let e=re.rows;if(U.trim()){const o=U.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(o)))}if(null!==G){const o=re.stats[G]?.type;e=[...e].sort((e,r)=>{const s=e[G]??"",n=r[G]??"";let l=0;return l="number"===o?(parseFloat(s)||0)-(parseFloat(n)||0):s.localeCompare(n),"asc"===J?l:-l})}return e.slice(0,200)},[re,U,G,J]),ne=null!==Q?re?.stats[Q]??null:null,le=(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,m.jsxs)(V,{ref:ee,children:[(0,m.jsxs)(D,{onClick:()=>Z(e=>!e),children:["Examples ",(0,m.jsx)(a.A,{size:12})]}),Y&&(0,m.jsx)(I,{children:h.k.map(e=>(0,m.jsx)(N,{onClick:()=>{r(e.csv),Z(!1),W(""),H(null)},children:e.label},e.label))})]}),e]});return(0,m.jsx)(l.PE,{title:"CSV Explorer",sidebar:null,topBarRight:le,children:(0,m.jsxs)(f,{children:[re&&(0,m.jsxs)(g,{children:[(0,m.jsxs)(b,{children:["Columns (",re.headers.length,")"]}),re.stats.map((e,o)=>{return(0,m.jsxs)($,{active:Q===o,onClick:()=>X(Q===o?null:o),children:[(0,m.jsx)(j,{children:(r=e.type,"number"===r?(0,m.jsx)(c.A,{size:11}):"date"===r?(0,m.jsx)(t.A,{size:11}):(0,m.jsx)(p.A,{size:11}))}),e.name]},o);var r}),ne&&(0,m.jsxs)(v,{children:[(0,m.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:l.w4.colors.mainText},children:ne.name}),(0,m.jsxs)(y,{children:[(0,m.jsx)(k,{children:"Type"}),(0,m.jsx)(T,{children:ne.type})]}),(0,m.jsxs)(y,{children:[(0,m.jsx)(k,{children:"Count"}),(0,m.jsx)(T,{children:ne.count})]}),(0,m.jsxs)(y,{children:[(0,m.jsx)(k,{children:"Nulls"}),(0,m.jsx)(T,{children:ne.nullCount})]}),(0,m.jsxs)(y,{children:[(0,m.jsx)(k,{children:"Unique"}),(0,m.jsx)(T,{children:ne.uniqueCount})]}),"number"===ne.type&&void 0!==ne.min&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(y,{children:[(0,m.jsx)(k,{children:"Min"}),(0,m.jsx)(T,{children:ne.min})]}),(0,m.jsxs)(y,{children:[(0,m.jsx)(k,{children:"Max"}),(0,m.jsx)(T,{children:ne.max})]})]})]})]}),(0,m.jsx)(z,{children:re?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(C,{children:[(0,m.jsx)(M,{value:U,onChange:e=>W(e.target.value),placeholder:"Search all columns…"}),(0,m.jsxs)(S,{value:n,onChange:e=>w(e.target.value),children:[(0,m.jsxs)("option",{value:"auto",children:["Auto (",","===oe?"comma":"\t"===oe?"tab":"semicolon",")"]}),(0,m.jsx)("option",{value:",",children:"Comma"}),(0,m.jsx)("option",{value:"\t",children:"Tab"}),(0,m.jsx)("option",{value:";",children:"Semicolon"})]}),(0,m.jsxs)(B,{children:[se.length,U?` / ${re.rows.length}`:""," rows"]}),(0,m.jsxs)(F,{onClick:()=>{r(""),W(""),H(null),X(null)},children:[(0,m.jsx)(u.A,{size:12})," Clear"]})]}),(0,m.jsx)(A,{children:(0,m.jsxs)(R,{children:[(0,m.jsx)("thead",{children:(0,m.jsx)("tr",{children:re.headers.map((e,o)=>{const r="number"===re.stats[o]?.type;return(0,m.jsxs)(E,{numeric:r,onClick:()=>(e=>{G===e?K(e=>"asc"===e?"desc":"asc"):(H(e),K("asc"))})(o),children:[e,(0,m.jsx)(L,{children:G===o?"asc"===J?(0,m.jsx)(i.A,{size:11}):(0,m.jsx)(a.A,{size:11}):(0,m.jsx)(d.A,{size:10})})]},o)})})}),(0,m.jsx)("tbody",{children:se.map((e,o)=>(0,m.jsx)(q,{children:re.headers.map((o,r)=>{const s=e[r]??"",n=""===s,l="number"===re.stats[r]?.type;return(0,m.jsx)(_,{numeric:l,null:n,children:n?"—":s},r)})},o))})]})}),(0,m.jsxs)(P,{children:[(0,m.jsxs)("span",{children:["Showing ",se.length," of ",re.rows.length," rows"]}),(0,m.jsx)("span",{children:"·"}),(0,m.jsxs)("span",{children:[re.headers.length," columns"]}),re.rows.length>200&&(0,m.jsx)("span",{children:"· First 200 rows shown"})]})]}):(0,m.jsx)(O,{value:o,onChange:e=>r(e.target.value),placeholder:"Paste CSV data here…\n\nOr pick an example from the menu above.\n\nThe separator is detected automatically (comma, tab, or semicolon).",spellCheck:!1})})]})})}}}]);
//# sourceMappingURL=36.082237972b227e1765b2.js.map