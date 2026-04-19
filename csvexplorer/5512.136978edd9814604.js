"use strict";(self.webpackChunk_atlantis_csvexplorer=self.webpackChunk_atlantis_csvexplorer||[]).push([["5512"],{8997(e,o,r){var s=r(2727);o.createRoot=s.createRoot,s.hydrateRoot},3611(e,o,r){var s=r(5723),n=r(7991),t=r(8997),l=r(6859),i=r.n(l),a=r(5726),d=r(1638),c=r(3317),p=r(3775),x=r(9161),u=r(1344),h=r(679),m=r(4525),w=r(5426),g=r(668),b=r(457),f=r(5151);let $=`&::-webkit-scrollbar{width:6px;height:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${a.w4.colors.border};border-radius:3px}scrollbar-width:thin;scrollbar-color:${a.w4.colors.border} transparent;`,j=i().div`display:flex;flex:1;overflow:hidden;`,v=i().div`
  width:200px;flex-shrink:0;background:${a.w4.colors.sidebarBg};border-right:1px solid ${a.w4.colors.sidebarBorder};
  overflow-y:auto;${$}
`,y=i().div`padding:${a.w4.spacing.sm} ${a.w4.spacing.md};border-bottom:1px solid ${a.w4.colors.sidebarBorder};font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${a.w4.colors.mainTextMuted};`,k=i().button`
  display:flex;align-items:center;gap:6px;width:100%;padding:${a.w4.spacing.sm} ${a.w4.spacing.md};
  background:${e=>e.active?"rgba(56,139,253,0.1)":"transparent"};border:none;
  border-left:2px solid ${e=>e.active?a.w4.colors.accent:"transparent"};
  color:${e=>e.active?a.w4.colors.mainText:a.w4.colors.sidebarTextMuted};
  font-size:12px;font-family:${a.w4.typography.fontFamily};cursor:pointer;text-align:left;
  transition:all 0.12s;&:hover{background:${a.w4.colors.mainBg};color:${a.w4.colors.mainText};}
`,T=i().span`font-size:10px;color:${a.w4.colors.mainTextMuted};`,z=i().div`
  padding:${a.w4.spacing.md};border-top:1px solid ${a.w4.colors.sidebarBorder};
  background:${a.w4.colors.surface};
`,C=i().div`display:flex;justify-content:space-between;font-size:11px;padding:2px 0;`,M=i().span`color:${a.w4.colors.mainTextMuted};`,B=i().span`color:${a.w4.colors.mainText};font-family:${a.w4.typography.fontFamilyMono};`,R=i().div`display:flex;flex-direction:column;flex:1;overflow:hidden;`,S=i().div`
  display:flex;align-items:center;gap:${a.w4.spacing.sm};padding:${a.w4.spacing.sm} ${a.w4.spacing.lg};
  border-bottom:1px solid ${a.w4.colors.sidebarBorder};background:${a.w4.colors.sidebarBg};flex-shrink:0;
`,F=i().input`
  flex:1;background:${a.w4.colors.mainBg};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.sm};padding:5px 10px;font-size:13px;
  color:${a.w4.colors.mainText};outline:none;
  &:focus{border-color:${a.w4.colors.accent};}
  &::placeholder{color:${a.w4.colors.mainTextMuted};}
`,A=i().div`
  font-size:11px;color:${a.w4.colors.mainTextMuted};white-space:nowrap;
  padding:4px 8px;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.sm};
`,E=i().select`
  background:${a.w4.colors.mainBg};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.sm};padding:5px 8px;font-size:12px;
  color:${a.w4.colors.mainText};outline:none;cursor:pointer;
`,I=i().button`
  display:flex;align-items:center;gap:4px;padding:5px 10px;background:transparent;
  border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.sm};
  color:${a.w4.colors.mainTextMuted};font-size:12px;font-family:${a.w4.typography.fontFamily};
  cursor:pointer;&:hover{border-color:#f87171;color:#f87171;}
`,L=i().div`flex:1;overflow:auto;${$}`,_=i().table`width:100%;border-collapse:collapse;font-size:12px;`,P=i().th`
  position:sticky;top:0;background:${a.w4.colors.sidebarBg};border-bottom:2px solid ${a.w4.colors.sidebarBorder};
  padding:8px 12px;text-align:${e=>e.numeric?"right":"left"};white-space:nowrap;
  font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  color:${a.w4.colors.mainTextMuted};cursor:pointer;user-select:none;
  &:hover{color:${a.w4.colors.mainText};}
`,q=i().span`margin-left:4px;opacity:0.6;`,N=i().td`
  padding:7px 12px;border-bottom:1px solid ${a.w4.colors.border};
  text-align:${e=>e.numeric?"right":"left"};color:${e=>e.null?a.w4.colors.mainTextMuted:a.w4.colors.mainText};
  font-family:${e=>e.numeric?a.w4.typography.fontFamilyMono:"inherit"};
  white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
`,O=i().tr`&:hover td{background:rgba(56,139,253,0.04);}`,V=i().textarea`
  flex:1;background:${a.w4.colors.mainBg};border:none;outline:none;
  padding:${a.w4.spacing.xl};font-family:${a.w4.typography.fontFamilyMono};font-size:13px;
  color:${a.w4.colors.mainText};resize:none;line-height:1.6;${$}
  &::placeholder{color:${a.w4.colors.mainTextMuted};}
`,D=i().div`
  display:flex;align-items:center;padding:${a.w4.spacing.sm} ${a.w4.spacing.lg};
  border-top:1px solid ${a.w4.colors.sidebarBorder};background:${a.w4.colors.sidebarBg};
  font-size:11px;color:${a.w4.colors.mainTextMuted};flex-shrink:0;gap:${a.w4.spacing.md};
`,U=i().div`position:relative;`,W=i().button`display:flex;align-items:center;gap:4px;padding:0 ${a.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.sm};color:${a.w4.colors.mainTextMuted};font-size:12px;font-family:${a.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${a.w4.colors.accent};color:${a.w4.colors.mainText};}`,G=i().div`position:absolute;top:calc(100% + 4px);right:0;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:160px;overflow:hidden;`,H=i().button`display:block;width:100%;text-align:left;padding:${a.w4.spacing.sm} ${a.w4.spacing.md};background:transparent;border:none;color:${a.w4.colors.mainText};font-size:13px;font-family:${a.w4.typography.fontFamily};cursor:pointer;&:hover{background:${a.w4.colors.mainBg};}`,J="toolkit:csvexplorer",K=document.getElementById("root");if(!K)throw Error("Root element #root not found");(0,t.createRoot)(K).render((0,s.jsx)(function({topBarRight:e}){let[o,r]=(0,n.useState)(""),[t,l]=(0,n.useState)("auto"),[i,$]=(0,n.useState)(""),[K,Q]=(0,n.useState)(null),[X,Y]=(0,n.useState)("asc"),[Z,ee]=(0,n.useState)(null),[eo,er]=(0,n.useState)(!1),es=(0,n.useRef)(null),en=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,a.PL)(J).then(e=>{e&&r(e),en.current=!0})},[]),(0,n.useEffect)(()=>{if(!en.current)return;let e=setTimeout(()=>(0,a.Is)(J,o),400);return()=>clearTimeout(e)},[o]),(0,n.useEffect)(()=>{let e=e=>{es.current&&!es.current.contains(e.target)&&er(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let et="auto"===t?(0,b.Dt)(o):t,el=(0,n.useMemo)(()=>o.trim()?(0,b.CO)(o,"auto"===t?void 0:t):null,[o,t]),ei=(0,n.useMemo)(()=>{if(!el)return[];let e=el.rows;if(i.trim()){let o=i.toLowerCase();e=e.filter(e=>e.some(e=>e.toLowerCase().includes(o)))}if(null!==K){let o=el.stats[K]?.type;e=[...e].sort((e,r)=>{let s=e[K]??"",n=r[K]??"",t=0;return t="number"===o?(parseFloat(s)||0)-(parseFloat(n)||0):s.localeCompare(n),"asc"===X?t:-t})}return e.slice(0,200)},[el,i,K,X]),ea=null!==Z?el?.stats[Z]??null:null,ed=(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.w4.spacing.sm},children:[(0,s.jsxs)(W,{onClick:()=>{r(""),$(""),Q(null),ee(null),(0,a.Is)(J,"")},children:[(0,s.jsx)(u.A,{size:13})," New"]}),(0,s.jsxs)(U,{ref:es,children:[(0,s.jsxs)(W,{onClick:()=>er(e=>!e),children:["Examples ",(0,s.jsx)(h.A,{size:12})]}),eo&&(0,s.jsx)(G,{children:f.k.map(e=>(0,s.jsx)(H,{onClick:()=>{r(e.csv),er(!1),$(""),Q(null)},children:e.label},e.label))})]}),e]});return(0,s.jsx)(a.PE,{title:"CSV Explorer",sidebar:(0,s.jsx)(d.tz,{activeAppId:"csvexplorer"}),topBarRight:ed,children:(0,s.jsxs)(j,{children:[el&&(0,s.jsxs)(v,{children:[(0,s.jsxs)(y,{children:["Columns (",el.headers.length,")"]}),el.stats.map((e,o)=>{let r;return(0,s.jsxs)(k,{active:Z===o,onClick:()=>ee(Z===o?null:o),children:[(0,s.jsx)(T,{children:"number"===(r=e.type)?(0,s.jsx)(c.A,{size:11}):"date"===r?(0,s.jsx)(p.A,{size:11}):(0,s.jsx)(x.A,{size:11})}),e.name]},o)}),ea&&(0,s.jsxs)(z,{children:[(0,s.jsx)("div",{style:{fontSize:11,fontWeight:700,marginBottom:6,color:a.w4.colors.mainText},children:ea.name}),(0,s.jsxs)(C,{children:[(0,s.jsx)(M,{children:"Type"}),(0,s.jsx)(B,{children:ea.type})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(M,{children:"Count"}),(0,s.jsx)(B,{children:ea.count})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(M,{children:"Nulls"}),(0,s.jsx)(B,{children:ea.nullCount})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(M,{children:"Unique"}),(0,s.jsx)(B,{children:ea.uniqueCount})]}),"number"===ea.type&&void 0!==ea.min&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(C,{children:[(0,s.jsx)(M,{children:"Min"}),(0,s.jsx)(B,{children:ea.min})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(M,{children:"Max"}),(0,s.jsx)(B,{children:ea.max})]})]})]})]}),(0,s.jsx)(R,{children:el?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(S,{children:[(0,s.jsx)(F,{value:i,onChange:e=>$(e.target.value),placeholder:"Search all columns…"}),(0,s.jsxs)(E,{value:t,onChange:e=>l(e.target.value),children:[(0,s.jsxs)("option",{value:"auto",children:["Auto (",","===et?"comma":"	"===et?"tab":"semicolon",")"]}),(0,s.jsx)("option",{value:",",children:"Comma"}),(0,s.jsx)("option",{value:" ",children:"Tab"}),(0,s.jsx)("option",{value:";",children:"Semicolon"})]}),(0,s.jsxs)(A,{children:[ei.length,i?` / ${el.rows.length}`:""," rows"]}),(0,s.jsxs)(I,{onClick:()=>{r(""),$(""),Q(null),ee(null)},children:[(0,s.jsx)(m.A,{size:12})," Clear"]})]}),(0,s.jsx)(L,{children:(0,s.jsxs)(_,{children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:el.headers.map((e,o)=>{let r=el.stats[o]?.type==="number";return(0,s.jsxs)(P,{numeric:r,onClick:()=>{K===o?Y(e=>"asc"===e?"desc":"asc"):(Q(o),Y("asc"))},children:[e,(0,s.jsx)(q,{children:K===o?"asc"===X?(0,s.jsx)(w.A,{size:11}):(0,s.jsx)(h.A,{size:11}):(0,s.jsx)(g.A,{size:10})})]},o)})})}),(0,s.jsx)("tbody",{children:ei.map((e,o)=>(0,s.jsx)(O,{children:el.headers.map((o,r)=>{let n=e[r]??"",t=""===n,l=el.stats[r]?.type==="number";return(0,s.jsx)(N,{numeric:l,null:t,children:t?"—":n},r)})},o))})]})}),(0,s.jsxs)(D,{children:[(0,s.jsxs)("span",{children:["Showing ",ei.length," of ",el.rows.length," rows"]}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsxs)("span",{children:[el.headers.length," columns"]}),el.rows.length>200&&(0,s.jsx)("span",{children:"\xb7 First 200 rows shown"})]})]}):(0,s.jsx)(V,{value:o,onChange:e=>r(e.target.value),placeholder:`Paste CSV data here…

Or pick an example from the menu above.

The separator is detected automatically (comma, tab, or semicolon).`,spellCheck:!1})})]})})},{}))}}]);