"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([["6362"],{3935(e,r,o){o.r(r),o.d(r,{default:()=>J});var s=o(5723),n=o(7991),l=o(6859),t=o.n(l),i=o(246),a=o(1638),d=o(3317),c=o(3775),p=o(9161),x=o(1344),u=o(679),h=o(4525),m=o(5426),w=o(668),g=o(457),b=o(5151);let f=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${i.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${i.w4.colors.border} transparent;`,$=t().div`display:flex;flex:1;overflow:hidden;`,j=t().div`
  width:200px;flex-shrink:0;background:${i.w4.colors.sidebarBg};border-right:1px solid ${i.w4.colors.sidebarBorder};
  overflow-y:auto;${f}
`,v=t().div`padding:${i.w4.spacing.sm} ${i.w4.spacing.md};border-bottom:1px solid ${i.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${i.w4.colors.mainTextMuted};`,y=t().button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${i.w4.spacing.sm} ${i.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?i.w4.colors.accent:"transparent"};
  color:${e=>e.active?i.w4.colors.mainText:i.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${i.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all 0.12s;&:hover{background:${i.w4.colors.mainBg};color:${i.w4.colors.mainText};}
`,k=t().span`font-size:10px;color:${i.w4.colors.mainTextMuted};`,T=t().div`
  padding:${i.w4.spacing.md};border-top:1px solid ${i.w4.colors.sidebarBorder};
  background:${i.w4.colors.surface};
`,z=t().div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,C=t().span`color:${i.w4.colors.mainTextMuted};`,M=t().span`color:${i.w4.colors.mainText};font-family:${i.w4.typography.fontFamilyMono};`,B=t().div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,S=t().div`
  display:flex;align-items:center;gap:${i.w4.spacing.sm};padding:${i.w4.spacing.sm} ${i.w4.spacing.lg};
  border-bottom:1px solid ${i.w4.colors.sidebarBorder};background:${i.w4.colors.sidebarBg};flex-shrink:0;
`,F=t().input`
  flex:1;background:${i.w4.colors.mainBg};border:1px solid ${i.w4.colors.border};
  border-radius:${i.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${i.w4.colors.mainText};outline:none;
  &:focus{border-color:${i.w4.colors.accent};}
  &::placeholder{color:${i.w4.colors.mainTextMuted};}
`,A=t().div`
  font-size:11px;color:${i.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${i.w4.colors.surface};border:1px solid ${i.w4.colors.border};
  border-radius:${i.w4.borderRadius.sm};
`,R=t().select`
  background:${i.w4.colors.mainBg};border:1px solid ${i.w4.colors.border};
  border-radius:${i.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${i.w4.colors.mainText};outline:none;cursor:pointer;
`,E=t().button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.sm};
  color:${i.w4.colors.mainTextMuted};font-size:12px;font-family:${i.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,L=t().div`flex:1;overflow:auto;${f}`,I=t().table`width:100%;border-collapse:collapse;font-size:12px;`,_=t().th`
  position:sticky;top:0;background:${i.w4.colors.sidebarBg};border-bottom:2px solid ${i.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${i.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${i.w4.colors.mainText};}
`,P=t().span`margin-left:4px;opacity:0.6;`,q=t().td`
  padding:7px 12px;border-bottom:1px solid ${i.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?i.w4.colors.mainTextMuted:i.w4.colors.mainText};
  font-family:${e=>e.numeric?i.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,N=t().tr`&:hover td{background:rgba(56,139,253,0.04);}`,O=t().textarea`
  flex:1;background:${i.w4.colors.mainBg};border:none;outline:none;
  padding:${i.w4.spacing.xl};font-family:${i.w4.typography.fontFamilyMono};font-size:13px;
  color:${i.w4.colors.mainText};resize:none;line-height:1.6;${f}
  &::placeholder{color:${i.w4.colors.mainTextMuted};}
`,V=t().div`
  display:flex;align-items:center;padding:${i.w4.spacing.sm} ${i.w4.spacing.lg};
  border-top:1px solid ${i.w4.colors.sidebarBorder};background:${i.w4.colors.sidebarBg};
  font-size:11px;color:${i.w4.colors.mainTextMuted};flex-shrink:0;gap:${i.w4.spacing.md};
`,D=t().div`position:relative;`,U=t().button`display:flex;align-items:center;gap:4px;padding:0 ${i.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.sm};color:${i.w4.colors.mainTextMuted};font-size:12px;font-family:${i.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${i.w4.colors.accent};color:${i.w4.colors.mainText};}`,W=t().div`position:absolute;top:calc(100% + 4px);right:0;background:${i.w4.colors.surface};border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,G=t().button`display:block;width:100%;text-align:left;padding:${i.w4.spacing.sm} ${i.w4.spacing.md};background:transparent;border:none;color:${i.w4.colors.mainText};font-size:13px;font-family:${i.w4.typography.fontFamily};cursor:pointer;&:hover{background:${i.w4.colors.mainBg};}`,H="toolkit:csvexplorer";function J({topBarRight:e}){let[r,o]=(0,n.useState)(""),[l,t]=(0,n.useState)("auto"),[f,K]=(0,n.useState)(""),[Q,X]=(0,n.useState)(null),[Y,Z]=(0,n.useState)("asc"),[ee,er]=(0,n.useState)(null),[eo,es]=(0,n.useState)(!1),en=(0,n.useRef)(null),el=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,i.PL)(H).then(e=>{e&&o(e),el.current=!0})},[]),(0,n.useEffect)(()=>{if(!el.current)return;let e=setTimeout(()=>(0,i.Is)(H,r),400);return()=>clearTimeout(e)},[r]),(0,n.useEffect)(()=>{let e=e=>{en.current&&!en.current.contains(e.target)&&es(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let et="auto"===l?(0,g.Dt)(r):l,ei=(0,n.useMemo)(()=>r.trim()?(0,g.CO)(r,"auto"===l?void 0:l):null,[r,l]),ea=(0,n.useMemo)(()=>{if(!ei)return[];let e=ei.rows;if(f.trim()){let r=f.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(r)))}if(null!==Q){let r=ei.stats[Q]?.type;e=[...e].sort((e,o)=>{let s=e[Q]??"",n=o[Q]??"",l=0;return l="number"===r?(parseFloat(s)||0)-(parseFloat(n)||0):s.localeCompare(n),"asc"===Y?l:-l})}return e.slice(0,200)},[ei,f,Q,Y]),ed=null!==ee?ei?.stats[ee]??null:null,ec=(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,s.jsxs)(U,{onClick:()=>{o(""),K(""),X(null),er(null),(0,i.Is)(H,"")},children:[(0,s.jsx)(x.A,{size:13})," New"]}),(0,s.jsxs)(D,{ref:en,children:[(0,s.jsxs)(U,{onClick:()=>es(e=>!e),children:["Examples ",(0,s.jsx)(u.A,{size:12})]}),eo&&(0,s.jsx)(W,{children:b.k.map(e=>(0,s.jsx)(G,{onClick:()=>{o(e.csv),es(!1),K(""),X(null)},children:e.label},e.label))})]}),e]});return(0,s.jsx)(i.PE,{title:"CSV Explorer",sidebar:(0,s.jsx)(a.tz,{activeAppId:"csvexplorer"}),topBarRight:ec,children:(0,s.jsxs)($,{children:[ei&&(0,s.jsxs)(j,{children:[(0,s.jsxs)(v,{children:["Columns (",ei.headers.length,")"]}),ei.stats.map((e,r)=>{let o;return(0,s.jsxs)(y,{active:ee===r,onClick:()=>er(ee===r?null:r),children:[(0,s.jsx)(k,{children:"number"===(o=e.type)?(0,s.jsx)(d.A,{size:11}):"date"===o?(0,s.jsx)(c.A,{size:11}):(0,s.jsx)(p.A,{size:11})}),e.name]},r)}),ed&&(0,s.jsxs)(T,{children:[(0,s.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:i.w4.colors.mainText},children:ed.name}),(0,s.jsxs)(z,{children:[(0,s.jsx)(C,{children:"Type"}),(0,s.jsx)(M,{children:ed.type})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(C,{children:"Count"}),(0,s.jsx)(M,{children:ed.count})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(C,{children:"Nulls"}),(0,s.jsx)(M,{children:ed.nullCount})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(C,{children:"Unique"}),(0,s.jsx)(M,{children:ed.uniqueCount})]}),"number"===ed.type&&void 0!==ed.min&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(z,{children:[(0,s.jsx)(C,{children:"Min"}),(0,s.jsx)(M,{children:ed.min})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(C,{children:"Max"}),(0,s.jsx)(M,{children:ed.max})]})]})]})]}),(0,s.jsx)(B,{children:ei?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(S,{children:[(0,s.jsx)(F,{value:f,onChange:e=>K(e.target.value),placeholder:"Search all columns…"}),(0,s.jsxs)(R,{value:l,onChange:e=>t(e.target.value),children:[(0,s.jsxs)("option",{value:"auto",children:["Auto (",","===et?"comma":"	"===et?"tab":"semicolon",")"]}),(0,s.jsx)("option",{value:",",children:"Comma"}),(0,s.jsx)("option",{value:" ",children:"Tab"}),(0,s.jsx)("option",{value:";",children:"Semicolon"})]}),(0,s.jsxs)(A,{children:[ea.length,f?` / ${ei.rows.length}`:""," rows"]}),(0,s.jsxs)(E,{onClick:()=>{o(""),K(""),X(null),er(null)},children:[(0,s.jsx)(h.A,{size:12})," Clear"]})]}),(0,s.jsx)(L,{children:(0,s.jsxs)(I,{children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:ei.headers.map((e,r)=>{let o=ei.stats[r]?.type==="number";return(0,s.jsxs)(_,{numeric:o,onClick:()=>{Q===r?Z(e=>"asc"===e?"desc":"asc"):(X(r),Z("asc"))},children:[e,(0,s.jsx)(P,{children:Q===r?"asc"===Y?(0,s.jsx)(m.A,{size:11}):(0,s.jsx)(u.A,{size:11}):(0,s.jsx)(w.A,{size:10})})]},r)})})}),(0,s.jsx)("tbody",{children:ea.map((e,r)=>(0,s.jsx)(N,{children:ei.headers.map((r,o)=>{let n=e[o]??"",l=""===n,t=ei.stats[o]?.type==="number";return(0,s.jsx)(q,{numeric:t,null:l,children:l?"—":n},o)})},r))})]})}),(0,s.jsxs)(V,{children:[(0,s.jsxs)("span",{children:["Showing ",ea.length," of ",ei.rows.length," rows"]}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsxs)("span",{children:[ei.headers.length," columns"]}),ei.rows.length>200&&(0,s.jsx)("span",{children:"\xb7 First 200 rows shown"})]})]}):(0,s.jsx)(O,{value:r,onChange:e=>o(e.target.value),placeholder:`Paste CSV data here…

Or pick an example from the menu above.

The separator is detected automatically (comma, tab, or semicolon).`,spellCheck:!1})})]})})}}}]);