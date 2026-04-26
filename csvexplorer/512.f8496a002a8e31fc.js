"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([["512"],{8997(e,o,r){var n=r(2727);o.createRoot=n.createRoot,n.hydrateRoot},3611(e,o,r){var n=r(5723),s=r(7991),t=r(8997),l=r(6859),i=r.n(l),a=r(4764),c=r(18),d=r(457),p=r(5151);let x=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${a.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${a.w4.colors.border} transparent;`,u=i().div`display:flex;flex:1;overflow:hidden;`,h=i().div`
  width:200px;flex-shrink:0;background:${a.w4.colors.sidebarBg};border-right:1px solid ${a.w4.colors.sidebarBorder};
  overflow-y:auto;${x}
`,m=i().div`padding:${a.w4.spacing.sm} ${a.w4.spacing.md};border-bottom:1px solid ${a.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${a.w4.colors.mainTextMuted};`,w=i().button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${a.w4.spacing.sm} ${a.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?a.w4.colors.accent:"transparent"};
  color:${e=>e.active?a.w4.colors.mainText:a.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${a.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all ${a.w4.transitions.fast};&:hover{background:${a.w4.colors.mainBg};color:${a.w4.colors.mainText};}
`,g=i().span`font-size:10px;color:${a.w4.colors.mainTextMuted};`,b=i().div`
  padding:${a.w4.spacing.md};border-top:1px solid ${a.w4.colors.sidebarBorder};
  background:${a.w4.colors.surface};
`,f=i().div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,$=i().span`color:${a.w4.colors.mainTextMuted};`,j=i().span`color:${a.w4.colors.mainText};font-family:${a.w4.typography.fontFamilyMono};`,v=i().div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,y=i().div`
  display:flex;align-items:center;gap:${a.w4.spacing.sm};padding:${a.w4.spacing.sm} ${a.w4.spacing.lg};
  border-bottom:1px solid ${a.w4.colors.sidebarBorder};background:${a.w4.colors.sidebarBg};flex-shrink:0;
`,k=i().input`
  flex:1;background:${a.w4.colors.mainBg};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${a.w4.colors.mainText};outline:none;
  &:focus{border-color:${a.w4.colors.accent};}
  &::placeholder{color:${a.w4.colors.mainTextMuted};}
`,T=i().div`
  font-size:11px;color:${a.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.sm};
`,z=i().select`
  background:${a.w4.colors.mainBg};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${a.w4.colors.mainText};outline:none;cursor:pointer;
`,C=i().button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.sm};
  color:${a.w4.colors.mainTextMuted};font-size:12px;font-family:${a.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,M=i().div`flex:1;overflow:auto;${x}`,B=i().table`width:100%;border-collapse:collapse;font-size:12px;`,I=i().th`
  position:sticky;top:0;background:${a.w4.colors.sidebarBg};border-bottom:2px solid ${a.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${a.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${a.w4.colors.mainText};}
`,R=i().span`margin-left:4px;opacity:0.6;`,S=i().td`
  padding:7px 12px;border-bottom:1px solid ${a.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?a.w4.colors.mainTextMuted:a.w4.colors.mainText};
  font-family:${e=>e.numeric?a.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,F=i().tr`&:hover td{background:rgba(56,139,253,0.04);}`,E=i().textarea`
  flex:1;background:${a.w4.colors.mainBg};border:none;outline:none;
  padding:${a.w4.spacing.xl};font-family:${a.w4.typography.fontFamilyMono};font-size:13px;
  color:${a.w4.colors.mainText};resize:none;line-height:1.6;${x}
  &::placeholder{color:${a.w4.colors.mainTextMuted};}
`,L=i().div`
  display:flex;align-items:center;padding:${a.w4.spacing.sm} ${a.w4.spacing.lg};
  border-top:1px solid ${a.w4.colors.sidebarBorder};background:${a.w4.colors.sidebarBg};
  font-size:11px;color:${a.w4.colors.mainTextMuted};flex-shrink:0;gap:${a.w4.spacing.md};
`,_=i().div`position:relative;`,P=i().button`display:flex;align-items:center;gap:4px;padding:0 ${a.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.sm};color:${a.w4.colors.mainTextMuted};font-size:12px;font-family:${a.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${a.w4.colors.accent};color:${a.w4.colors.mainText};}`,q=i().div`position:absolute;top:calc(100% + 4px);right:0;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,A=i().button`display:block;width:100%;text-align:left;padding:${a.w4.spacing.sm} ${a.w4.spacing.md};background:transparent;border:none;color:${a.w4.colors.mainText};font-size:13px;font-family:${a.w4.typography.fontFamily};cursor:pointer;&:hover{background:${a.w4.colors.mainBg};}`,N="toolkit:csvexplorer",O=document.getElementById("root");if(!O)throw Error("Root element #root not found");(0,t.createRoot)(O).render((0,n.jsx)(function({topBarRight:e}){let[o,r]=(0,s.useState)(""),[t,l]=(0,s.useState)("auto"),[i,x]=(0,s.useState)(""),[O,V]=(0,s.useState)(null),[D,U]=(0,s.useState)("asc"),[W,G]=(0,s.useState)(null),[H,J]=(0,s.useState)(!1),K=(0,s.useRef)(null),Q=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,a.PL)(N).then(e=>{e&&r(e),Q.current=!0})},[]),(0,s.useEffect)(()=>{if(!Q.current)return;let e=setTimeout(()=>(0,a.Is)(N,o),400);return()=>clearTimeout(e)},[o]),(0,s.useEffect)(()=>{let e=e=>{K.current&&!K.current.contains(e.target)&&J(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let X="auto"===t?(0,d.Dt)(o):t,Y=(0,s.useMemo)(()=>o.trim()?(0,d.CO)(o,"auto"===t?void 0:t):null,[o,t]),Z=(0,s.useMemo)(()=>{if(!Y)return[];let e=Y.rows;if(i.trim()){let o=i.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(o)))}if(null!==O){let o=Y.stats[O]?.type;e=[...e].sort((e,r)=>{let n=e[O]??"",s=r[O]??"",t=0;return t="number"===o?(parseFloat(n)||0)-(parseFloat(s)||0):n.localeCompare(s),"asc"===D?t:-t})}return e.slice(0,200)},[Y,i,O,D]),ee=null!==W?Y?.stats[W]??null:null,eo=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.w4.spacing.sm},children:[(0,n.jsxs)(P,{onClick:()=>{r(""),x(""),V(null),G(null),(0,a.Is)(N,"")},children:[(0,n.jsx)(c.In,{name:"file-plus",size:13})," New"]}),(0,n.jsxs)(_,{ref:K,children:[(0,n.jsxs)(P,{onClick:()=>J(e=>!e),children:["Examples ",(0,n.jsx)(c.In,{name:"chevron-down",size:12})]}),H&&(0,n.jsx)(q,{children:p.k.map(e=>(0,n.jsx)(A,{onClick:()=>{r(e.csv),J(!1),x(""),V(null)},children:e.label},e.label))})]}),e]});return(0,n.jsx)(a.PE,{title:"CSV Explorer",sidebar:(0,n.jsx)(c.tz,{activeAppId:"csvexplorer"}),topBarRight:eo,children:(0,n.jsxs)(u,{children:[Y&&(0,n.jsxs)(h,{children:[(0,n.jsxs)(m,{children:["Columns (",Y.headers.length,")"]}),Y.stats.map((e,o)=>{let r;return(0,n.jsxs)(w,{active:W===o,onClick:()=>G(W===o?null:o),children:[(0,n.jsx)(g,{children:"number"===(r=e.type)?(0,n.jsx)(c.In,{name:"hash",size:11}):"date"===r?(0,n.jsx)(c.In,{name:"calendar",size:11}):(0,n.jsx)(c.In,{name:"type",size:11})}),e.name]},o)}),ee&&(0,n.jsxs)(b,{children:[(0,n.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:a.w4.colors.mainText},children:ee.name}),(0,n.jsxs)(f,{children:[(0,n.jsx)($,{children:"Type"}),(0,n.jsx)(j,{children:ee.type})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)($,{children:"Count"}),(0,n.jsx)(j,{children:ee.count})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)($,{children:"Nulls"}),(0,n.jsx)(j,{children:ee.nullCount})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)($,{children:"Unique"}),(0,n.jsx)(j,{children:ee.uniqueCount})]}),"number"===ee.type&&void 0!==ee.min&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)($,{children:"Min"}),(0,n.jsx)(j,{children:ee.min})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)($,{children:"Max"}),(0,n.jsx)(j,{children:ee.max})]})]})]})]}),(0,n.jsx)(v,{children:Y?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(y,{children:[(0,n.jsx)(k,{value:i,onChange:e=>x(e.target.value),placeholder:"Search all columns…"}),(0,n.jsxs)(z,{value:t,onChange:e=>l(e.target.value),children:[(0,n.jsxs)("option",{value:"auto",children:["Auto (",","===X?"comma":"	"===X?"tab":"semicolon",")"]}),(0,n.jsx)("option",{value:",",children:"Comma"}),(0,n.jsx)("option",{value:" ",children:"Tab"}),(0,n.jsx)("option",{value:";",children:"Semicolon"})]}),(0,n.jsxs)(T,{children:[Z.length,i?` / ${Y.rows.length}`:""," rows"]}),(0,n.jsxs)(C,{onClick:()=>{r(""),x(""),V(null),G(null)},children:[(0,n.jsx)(c.In,{name:"close",size:12})," Clear"]})]}),(0,n.jsx)(M,{children:(0,n.jsxs)(B,{children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:Y.headers.map((e,o)=>{let r=Y.stats[o]?.type==="number";return(0,n.jsxs)(I,{numeric:r,onClick:()=>{O===o?U(e=>"asc"===e?"desc":"asc"):(V(o),U("asc"))},children:[e,(0,n.jsx)(R,{children:O===o?"asc"===D?(0,n.jsx)(c.In,{name:"chevron-up",size:11}):(0,n.jsx)(c.In,{name:"chevron-down",size:11}):(0,n.jsx)(c.In,{name:"chevrons-up-down",size:10})})]},o)})})}),(0,n.jsx)("tbody",{children:Z.map((e,o)=>(0,n.jsx)(F,{children:Y.headers.map((o,r)=>{let s=e[r]??"",t=""===s,l=Y.stats[r]?.type==="number";return(0,n.jsx)(S,{numeric:l,null:t,children:t?"—":s},r)})},o))})]})}),(0,n.jsxs)(L,{children:[(0,n.jsxs)("span",{children:["Showing ",Z.length," of ",Y.rows.length," rows"]}),(0,n.jsx)("span",{children:"\xb7"}),(0,n.jsxs)("span",{children:[Y.headers.length," columns"]}),Y.rows.length>200&&(0,n.jsx)("span",{children:"\xb7 First 200 rows shown"})]})]}):(0,n.jsx)(E,{value:o,onChange:e=>r(e.target.value),placeholder:`Paste CSV data here…

Or pick an example from the menu above.

The separator is detected automatically (comma, tab, or semicolon).`,spellCheck:!1})})]})})},{}))}}]);