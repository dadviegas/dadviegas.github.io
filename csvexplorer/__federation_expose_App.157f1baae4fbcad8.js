"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([["362"],{3935(e,r,o){o.r(r),o.d(r,{default:()=>N});var s=o(5723),n=o(7991),l=o(6859),t=o.n(l),i=o(4764),a=o(18),c=o(457),d=o(5151);let p=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${i.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${i.w4.colors.border} transparent;`,x=t().div`display:flex;flex:1;overflow:hidden;`,u=t().div`
  width:200px;flex-shrink:0;background:${i.w4.colors.sidebarBg};border-right:1px solid ${i.w4.colors.sidebarBorder};
  overflow-y:auto;${p}
`,h=t().div`padding:${i.w4.spacing.sm} ${i.w4.spacing.md};border-bottom:1px solid ${i.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${i.w4.colors.mainTextMuted};`,m=t().button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${i.w4.spacing.sm} ${i.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?i.w4.colors.accent:"transparent"};
  color:${e=>e.active?i.w4.colors.mainText:i.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${i.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all ${i.w4.transitions.fast};&:hover{background:${i.w4.colors.mainBg};color:${i.w4.colors.mainText};}
`,w=t().span`font-size:10px;color:${i.w4.colors.mainTextMuted};`,g=t().div`
  padding:${i.w4.spacing.md};border-top:1px solid ${i.w4.colors.sidebarBorder};
  background:${i.w4.colors.surface};
`,b=t().div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,f=t().span`color:${i.w4.colors.mainTextMuted};`,$=t().span`color:${i.w4.colors.mainText};font-family:${i.w4.typography.fontFamilyMono};`,j=t().div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,v=t().div`
  display:flex;align-items:center;gap:${i.w4.spacing.sm};padding:${i.w4.spacing.sm} ${i.w4.spacing.lg};
  border-bottom:1px solid ${i.w4.colors.sidebarBorder};background:${i.w4.colors.sidebarBg};flex-shrink:0;
`,y=t().input`
  flex:1;background:${i.w4.colors.mainBg};border:1px solid ${i.w4.colors.border};
  border-radius:${i.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${i.w4.colors.mainText};outline:none;
  &:focus{border-color:${i.w4.colors.accent};}
  &::placeholder{color:${i.w4.colors.mainTextMuted};}
`,k=t().div`
  font-size:11px;color:${i.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${i.w4.colors.surface};border:1px solid ${i.w4.colors.border};
  border-radius:${i.w4.borderRadius.sm};
`,T=t().select`
  background:${i.w4.colors.mainBg};border:1px solid ${i.w4.colors.border};
  border-radius:${i.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${i.w4.colors.mainText};outline:none;cursor:pointer;
`,z=t().button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.sm};
  color:${i.w4.colors.mainTextMuted};font-size:12px;font-family:${i.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,C=t().div`flex:1;overflow:auto;${p}`,M=t().table`width:100%;border-collapse:collapse;font-size:12px;`,B=t().th`
  position:sticky;top:0;background:${i.w4.colors.sidebarBg};border-bottom:2px solid ${i.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${i.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${i.w4.colors.mainText};}
`,I=t().span`margin-left:4px;opacity:0.6;`,S=t().td`
  padding:7px 12px;border-bottom:1px solid ${i.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?i.w4.colors.mainTextMuted:i.w4.colors.mainText};
  font-family:${e=>e.numeric?i.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,F=t().tr`&:hover td{background:rgba(56,139,253,0.04);}`,R=t().textarea`
  flex:1;background:${i.w4.colors.mainBg};border:none;outline:none;
  padding:${i.w4.spacing.xl};font-family:${i.w4.typography.fontFamilyMono};font-size:13px;
  color:${i.w4.colors.mainText};resize:none;line-height:1.6;${p}
  &::placeholder{color:${i.w4.colors.mainTextMuted};}
`,E=t().div`
  display:flex;align-items:center;padding:${i.w4.spacing.sm} ${i.w4.spacing.lg};
  border-top:1px solid ${i.w4.colors.sidebarBorder};background:${i.w4.colors.sidebarBg};
  font-size:11px;color:${i.w4.colors.mainTextMuted};flex-shrink:0;gap:${i.w4.spacing.md};
`,L=t().div`position:relative;`,_=t().button`display:flex;align-items:center;gap:4px;padding:0 ${i.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.sm};color:${i.w4.colors.mainTextMuted};font-size:12px;font-family:${i.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${i.w4.colors.accent};color:${i.w4.colors.mainText};}`,P=t().div`position:absolute;top:calc(100% + 4px);right:0;background:${i.w4.colors.surface};border:1px solid ${i.w4.colors.border};border-radius:${i.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,q=t().button`display:block;width:100%;text-align:left;padding:${i.w4.spacing.sm} ${i.w4.spacing.md};background:transparent;border:none;color:${i.w4.colors.mainText};font-size:13px;font-family:${i.w4.typography.fontFamily};cursor:pointer;&:hover{background:${i.w4.colors.mainBg};}`,A="toolkit:csvexplorer";function N({topBarRight:e}){let[r,o]=(0,n.useState)(""),[l,t]=(0,n.useState)("auto"),[p,O]=(0,n.useState)(""),[V,D]=(0,n.useState)(null),[U,W]=(0,n.useState)("asc"),[G,H]=(0,n.useState)(null),[J,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),X=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,i.PL)(A).then(e=>{e&&o(e),X.current=!0})},[]),(0,n.useEffect)(()=>{if(!X.current)return;let e=setTimeout(()=>(0,i.Is)(A,r),400);return()=>clearTimeout(e)},[r]),(0,n.useEffect)(()=>{let e=e=>{Q.current&&!Q.current.contains(e.target)&&K(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let Y="auto"===l?(0,c.Dt)(r):l,Z=(0,n.useMemo)(()=>r.trim()?(0,c.CO)(r,"auto"===l?void 0:l):null,[r,l]),ee=(0,n.useMemo)(()=>{if(!Z)return[];let e=Z.rows;if(p.trim()){let r=p.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(r)))}if(null!==V){let r=Z.stats[V]?.type;e=[...e].sort((e,o)=>{let s=e[V]??"",n=o[V]??"",l=0;return l="number"===r?(parseFloat(s)||0)-(parseFloat(n)||0):s.localeCompare(n),"asc"===U?l:-l})}return e.slice(0,200)},[Z,p,V,U]),er=null!==G?Z?.stats[G]??null:null,eo=(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,s.jsxs)(_,{onClick:()=>{o(""),O(""),D(null),H(null),(0,i.Is)(A,"")},children:[(0,s.jsx)(a.In,{name:"file-plus",size:13})," New"]}),(0,s.jsxs)(L,{ref:Q,children:[(0,s.jsxs)(_,{onClick:()=>K(e=>!e),children:["Examples ",(0,s.jsx)(a.In,{name:"chevron-down",size:12})]}),J&&(0,s.jsx)(P,{children:d.k.map(e=>(0,s.jsx)(q,{onClick:()=>{o(e.csv),K(!1),O(""),D(null)},children:e.label},e.label))})]}),e]});return(0,s.jsx)(i.PE,{title:"CSV Explorer",sidebar:(0,s.jsx)(a.tz,{activeAppId:"csvexplorer"}),topBarRight:eo,children:(0,s.jsxs)(x,{children:[Z&&(0,s.jsxs)(u,{children:[(0,s.jsxs)(h,{children:["Columns (",Z.headers.length,")"]}),Z.stats.map((e,r)=>{let o;return(0,s.jsxs)(m,{active:G===r,onClick:()=>H(G===r?null:r),children:[(0,s.jsx)(w,{children:"number"===(o=e.type)?(0,s.jsx)(a.In,{name:"hash",size:11}):"date"===o?(0,s.jsx)(a.In,{name:"calendar",size:11}):(0,s.jsx)(a.In,{name:"type",size:11})}),e.name]},r)}),er&&(0,s.jsxs)(g,{children:[(0,s.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:i.w4.colors.mainText},children:er.name}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"Type"}),(0,s.jsx)($,{children:er.type})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"Count"}),(0,s.jsx)($,{children:er.count})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"Nulls"}),(0,s.jsx)($,{children:er.nullCount})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"Unique"}),(0,s.jsx)($,{children:er.uniqueCount})]}),"number"===er.type&&void 0!==er.min&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"Min"}),(0,s.jsx)($,{children:er.min})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"Max"}),(0,s.jsx)($,{children:er.max})]})]})]})]}),(0,s.jsx)(j,{children:Z?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(v,{children:[(0,s.jsx)(y,{value:p,onChange:e=>O(e.target.value),placeholder:"Search all columns…"}),(0,s.jsxs)(T,{value:l,onChange:e=>t(e.target.value),children:[(0,s.jsxs)("option",{value:"auto",children:["Auto (",","===Y?"comma":"	"===Y?"tab":"semicolon",")"]}),(0,s.jsx)("option",{value:",",children:"Comma"}),(0,s.jsx)("option",{value:" ",children:"Tab"}),(0,s.jsx)("option",{value:";",children:"Semicolon"})]}),(0,s.jsxs)(k,{children:[ee.length,p?` / ${Z.rows.length}`:""," rows"]}),(0,s.jsxs)(z,{onClick:()=>{o(""),O(""),D(null),H(null)},children:[(0,s.jsx)(a.In,{name:"close",size:12})," Clear"]})]}),(0,s.jsx)(C,{children:(0,s.jsxs)(M,{children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:Z.headers.map((e,r)=>{let o=Z.stats[r]?.type==="number";return(0,s.jsxs)(B,{numeric:o,onClick:()=>{V===r?W(e=>"asc"===e?"desc":"asc"):(D(r),W("asc"))},children:[e,(0,s.jsx)(I,{children:V===r?"asc"===U?(0,s.jsx)(a.In,{name:"chevron-up",size:11}):(0,s.jsx)(a.In,{name:"chevron-down",size:11}):(0,s.jsx)(a.In,{name:"chevrons-up-down",size:10})})]},r)})})}),(0,s.jsx)("tbody",{children:ee.map((e,r)=>(0,s.jsx)(F,{children:Z.headers.map((r,o)=>{let n=e[o]??"",l=""===n,t=Z.stats[o]?.type==="number";return(0,s.jsx)(S,{numeric:t,null:l,children:l?"—":n},o)})},r))})]})}),(0,s.jsxs)(E,{children:[(0,s.jsxs)("span",{children:["Showing ",ee.length," of ",Z.rows.length," rows"]}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsxs)("span",{children:[Z.headers.length," columns"]}),Z.rows.length>200&&(0,s.jsx)("span",{children:"\xb7 First 200 rows shown"})]})]}):(0,s.jsx)(R,{value:r,onChange:e=>o(e.target.value),placeholder:`Paste CSV data here…

Or pick an example from the menu above.

The separator is detected automatically (comma, tab, or semicolon).`,spellCheck:!1})})]})})}}}]);