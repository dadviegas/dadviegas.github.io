"use strict";(self.webpackChunk_atlantis_music=self.webpackChunk_atlantis_music||[]).push([["512"],{8997(e,t,s){var i=s(2727);t.createRoot=i.createRoot,i.hydrateRoot},3611(e,t,s){var i=s(5723),n=s(8997),a=s(7991),r=s(6859),l=s.n(r),o=s(2799),c=s(6063),d=s(3236),m=s(8170),h=s(948);let p="music:history",u="music:playlists";function x(){return Math.random().toString(36).slice(2,10)}function y(e){return`music://music.apple.com/search?term=${encodeURIComponent(e)}`}let f=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${c.w4.spacing.lg};
  overflow-y: auto;
  animation: ${f} 0.25s ease both;

  @media (max-width: ${c.w4.breakpoints.md}) {
    padding: ${c.w4.spacing.md};
  }
`,w=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.md};
`,j=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.lg};

  &:first-of-type { margin-top: 0; }
`,k=l().div`
  color: ${c.w4.colors.mainTextMuted};
  font-size: ${c.w4.typography.fontSizeSm};
  padding: ${c.w4.spacing.md} 0;
`,v=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 7px 0;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
  min-width: 0;

  &:last-child { border-bottom: none; }
  &:hover .row-actions { opacity: 1; }

  @media (hover: none) { .row-actions { opacity: 1; } }
`,b=l().div`
  flex: 1;
  min-width: 0;
`,$=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,C=l().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextFaint};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2px;
`,S=l().div`
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast};
  flex-shrink: 0;
  class: row-actions;
`,z=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  align-items: center;
  max-width: 560px;
`;function I({t:e,onSearch:t}){let[s,n]=(0,a.useState)(""),r=(0,a.useCallback)(e=>{e.preventDefault();let i=s.trim();i&&(t(i),window.open(y(i),"_blank","noreferrer"))},[s,t]);return(0,i.jsxs)(g,{children:[(0,i.jsx)(w,{children:(0,i.jsx)(d.YZ,{children:e("search.heading")})}),(0,i.jsxs)(z,{as:"form",onSubmit:r,children:[(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:(0,i.jsx)(d.pd,{value:s,onChange:e=>n(e.target.value),placeholder:e("search.placeholder"),before:(0,i.jsx)(d.In,{name:"search",size:15,color:c.w4.colors.mainTextMuted}),autoFocus:!0})}),(0,i.jsx)(d.$n,{variant:"accent",icon:(0,i.jsx)(d.In,{name:"arrow-up-right",size:13}),type:"submit",disabled:0===s.trim().length,children:e("search.button")})]})]})}function T({t:e,history:t,onRemoveSearch:s,onRemoveTrack:n,onClearAll:a,onRerunSearch:r}){let l=t.searches.length>0||t.tracks.length>0;return(0,i.jsxs)(g,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(d.YZ,{children:e("history.heading")}),l&&(0,i.jsx)(d.$n,{variant:"ghost",onClick:a,children:e("history.clear")})]}),!l&&(0,i.jsx)(k,{children:e("history.empty")}),t.searches.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{children:e("history.searches")}),t.searches.map(t=>(0,i.jsxs)(v,{children:[(0,i.jsx)(d.In,{name:"search",size:14,color:c.w4.colors.mainTextMuted}),(0,i.jsx)(b,{children:(0,i.jsx)($,{children:t.query})}),(0,i.jsxs)(S,{className:"row-actions",children:[(0,i.jsx)(d.K0,{title:e("history.openMusic"),onClick:()=>{r(t.query),window.open(y(t.query),"_blank","noreferrer")},children:(0,i.jsx)(d.In,{name:"arrow-up-right",size:13})}),(0,i.jsx)(d.K0,{title:e("history.remove"),tone:"danger",onClick:()=>s(t.id),children:(0,i.jsx)(d.In,{name:"close",size:12})})]})]},t.id))]}),t.tracks.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{style:{marginTop:t.searches.length>0?c.w4.spacing.lg:void 0},children:e("history.tracks")}),t.tracks.map(t=>(0,i.jsxs)(v,{children:[(0,i.jsx)(d.In,{name:"music",size:14,color:c.w4.colors.mainTextMuted}),(0,i.jsxs)(b,{children:[(0,i.jsx)($,{children:t.title}),t.artist&&(0,i.jsx)(C,{children:t.artist})]}),(0,i.jsxs)(S,{className:"row-actions",children:[(0,i.jsx)(d.K0,{title:e("history.openMusic"),onClick:()=>{let e=t.artist?`${t.title} ${t.artist}`:t.title;window.open(y(e),"_blank","noreferrer")},children:(0,i.jsx)(d.In,{name:"arrow-up-right",size:13})}),(0,i.jsx)(d.K0,{title:e("history.remove"),tone:"danger",onClick:()=>n(t.id),children:(0,i.jsx)(d.In,{name:"close",size:12})})]})]},t.id))]})]})}let M=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.lg};
`,F=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  align-items: center;
  max-width: 480px;
  margin-bottom: ${c.w4.spacing.md};
`;function R({t:e,playlist:t,onAddTrack:s,onRemoveTrack:n,onBack:r}){let[l,o]=(0,a.useState)(""),m=(0,a.useCallback)(e=>{let i;e.preventDefault();let n=l.trim();if(!n)return;let a=n.includes(" — ")?" — ":n.includes(" - ")?" - ":null,r=n;if(a){let e=n.split(a);r=e[0]?.trim()??n,i=e[1]?.trim()}s(t,r,i||void 0),o("")},[l,t,s]);return(0,i.jsxs)(g,{children:[(0,i.jsxs)(M,{children:[(0,i.jsx)(d.K0,{title:e("nav.playlists"),onClick:r,children:(0,i.jsx)(d.In,{name:"chevron-left",size:16})}),(0,i.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,i.jsx)(d.YZ,{children:t.name}),(0,i.jsx)("div",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextFaint,marginTop:2},children:e("playlists.tracksCount",{n:t.tracks.length})})]})]}),(0,i.jsxs)(F,{as:"form",onSubmit:m,children:[(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:(0,i.jsx)(d.pd,{value:l,onChange:e=>o(e.target.value),placeholder:e("playlists.trackPlaceholder"),before:(0,i.jsx)(d.In,{name:"music",size:15,color:c.w4.colors.mainTextMuted})})}),(0,i.jsx)(d.$n,{variant:"accent",icon:(0,i.jsx)(d.In,{name:"plus",size:13}),type:"submit",disabled:0===l.trim().length,children:e("playlists.add")})]}),0===t.tracks.length&&(0,i.jsx)(k,{children:e("playlists.emptyTracks")}),t.tracks.map(s=>(0,i.jsxs)(v,{children:[(0,i.jsx)(d.In,{name:"music",size:14,color:c.w4.colors.mainTextMuted}),(0,i.jsxs)(b,{children:[(0,i.jsx)($,{children:s.title}),s.artist&&(0,i.jsx)(C,{children:s.artist})]}),(0,i.jsxs)(S,{className:"row-actions",children:[(0,i.jsx)(d.K0,{title:e("playlists.openTrack"),onClick:()=>{let e=s.artist?`${s.title} ${s.artist}`:s.title;window.open(y(e),"_blank","noreferrer")},children:(0,i.jsx)(d.In,{name:"arrow-up-right",size:13})}),(0,i.jsx)(d.K0,{title:e("playlists.removeTrack"),tone:"danger",onClick:()=>n(t,s.id),children:(0,i.jsx)(d.In,{name:"close",size:12})})]})]},s.id))]})}let D=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.md};
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  margin-bottom: ${c.w4.spacing.sm};
  cursor: pointer;
  transition: border-color ${c.w4.transitions.fast}, transform ${c.w4.transitions.fast};

  &:hover {
    border-color: ${c.w4.colors.borderStrong};
    transform: translateY(-1px);
  }
  &:hover .row-actions { opacity: 1; }
  @media (hover: none) { .row-actions { opacity: 1; } }
`;function K({t:e,playlists:t,onCreate:s,onDelete:n,onRename:r,onOpen:l}){let[o,m]=(0,a.useState)(""),[h,p]=(0,a.useState)(!1),[u,x]=(0,a.useState)(null),[y,f]=(0,a.useState)(""),j=(0,a.useRef)(null),v=(0,a.useCallback)(e=>{e.preventDefault();let t=o.trim();t&&(s(t),m(""),p(!1))},[o,s]),z=(0,a.useCallback)((e,t)=>{t.preventDefault();let s=y.trim();s&&r(e,s),x(null)},[y,r]);return(0,a.useEffect)(()=>{h&&setTimeout(()=>j.current?.focus(),50)},[h]),(0,i.jsxs)(g,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(d.YZ,{children:e("playlists.heading")}),(0,i.jsx)(d.$n,{variant:"ghost",icon:(0,i.jsx)(d.In,{name:"plus",size:13}),onClick:()=>p(!0),children:e("playlists.new")})]}),h&&(0,i.jsxs)(D,{style:{cursor:"default"},as:"form",onSubmit:v,children:[(0,i.jsx)(d.In,{name:"music",size:16,color:c.w4.colors.mainTextMuted}),(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:(0,i.jsx)("input",{ref:j,style:{width:"100%",background:"transparent",border:"none",outline:"none",fontSize:c.w4.typography.fontSizeSm,color:c.w4.colors.mainText,fontFamily:c.w4.typography.fontFamily},placeholder:e("playlists.namePlaceholder"),value:o,onChange:e=>m(e.target.value)})}),(0,i.jsx)(d.$n,{variant:"accent",type:"submit",disabled:0===o.trim().length,children:e("playlists.create")}),(0,i.jsx)(d.$n,{variant:"ghost",type:"button",onClick:()=>{p(!1),m("")},children:e("playlists.cancel")})]}),0===t.length&&!h&&(0,i.jsx)(k,{children:e("playlists.empty")}),t.map(t=>u===t.id?(0,i.jsxs)(D,{style:{cursor:"default"},as:"form",onSubmit:e=>z(t.id,e),children:[(0,i.jsx)(d.In,{name:"music",size:16,color:c.w4.colors.mainTextMuted}),(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:(0,i.jsx)("input",{autoFocus:!0,style:{width:"100%",background:"transparent",border:"none",outline:"none",fontSize:c.w4.typography.fontSizeSm,color:c.w4.colors.mainText,fontFamily:c.w4.typography.fontFamily},value:y,onChange:e=>f(e.target.value)})}),(0,i.jsx)(d.$n,{variant:"accent",type:"submit",disabled:0===y.trim().length,children:e("playlists.save")}),(0,i.jsx)(d.$n,{variant:"ghost",type:"button",onClick:()=>x(null),children:e("playlists.cancel")})]},t.id):(0,i.jsxs)(D,{onClick:()=>l(t),children:[(0,i.jsx)(d.In,{name:"music",size:16,color:c.w4.colors.accent}),(0,i.jsxs)(b,{children:[(0,i.jsx)($,{children:t.name}),(0,i.jsx)(C,{children:e("playlists.tracksCount",{n:t.tracks.length})})]}),(0,i.jsxs)(S,{className:"row-actions",onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(d.K0,{title:e("playlists.edit"),onClick:e=>{e.stopPropagation(),x(t.id),f(t.name)},children:(0,i.jsx)(d.In,{name:"edit",size:13})}),(0,i.jsx)(d.K0,{title:e("playlists.delete"),tone:"danger",onClick:s=>{s.stopPropagation(),confirm(e("playlists.confirmDelete"))&&n(t.id)},children:(0,i.jsx)(d.In,{name:"trash",size:13})})]})]},t.id))]})}let N=document.getElementById("root");if(!N)throw Error("Root element #root not found");(0,n.createRoot)(N).render((0,i.jsx)(function({topBarRight:e}){let[t]=(0,m.Ym)(),s=(0,a.useMemo)(()=>(0,m.Nx)(t,h.A),[t]),[n,r]=(0,a.useState)("search"),[l,o]=(0,a.useState)(null),[y,f]=(0,a.useState)({searches:[],tracks:[]}),[g,w]=(0,a.useState)([]),[j,k]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(async()=>{let[e,t]=await Promise.all([(0,c.PL)(p),(0,c.PL)(u)]);try{e&&f(JSON.parse(e))}catch{}try{t&&w(JSON.parse(t))}catch{}k(!0)})()},[]);let v=(0,a.useCallback)(async e=>{f(e),await (0,c.Is)(p,JSON.stringify(e))},[]),b=(0,a.useCallback)(async e=>{w(e),await (0,c.Is)(u,JSON.stringify(e))},[]),$=(0,a.useCallback)(e=>{f(t=>{let s={id:x(),query:e,ts:Date.now()},i={...t,searches:[s,...t.searches.filter(t=>t.query!==e)].slice(0,30)};return v(i),i})},[v]),C=(0,a.useCallback)(e=>{f(t=>{let s={...t,searches:t.searches.filter(t=>t.id!==e)};return v(s),s})},[v]),S=(0,a.useCallback)(e=>{f(t=>{let s={...t,tracks:t.tracks.filter(t=>t.id!==e)};return v(s),s})},[v]),z=(0,a.useCallback)(()=>{v({searches:[],tracks:[]})},[v]),M=(0,a.useCallback)(e=>{b([{id:x(),name:e,tracks:[],createdAt:Date.now()},...g])},[g,b]),F=(0,a.useCallback)(e=>{l?.id===e&&o(null),b(g.filter(t=>t.id!==e))},[g,l,b]),D=(0,a.useCallback)((e,t)=>{b(g.map(s=>s.id===e?{...s,name:t}:s)),l?.id===e&&o(e=>e?{...e,name:t}:e)},[g,l,b]),N=(0,a.useCallback)((e,t,s)=>{let i={id:x(),title:t,artist:s,addedAt:Date.now()},n={...e,tracks:[...e.tracks,i]};b(g.map(t=>t.id===e.id?n:t)),o(n)},[g,b]),P=(0,a.useCallback)((e,t)=>{let s={...e,tracks:e.tracks.filter(e=>e.id!==t)};b(g.map(t=>t.id===e.id?s:t)),o(s)},[g,b]),Y=[{id:"search",name:s("nav.search"),icon:"search"},{id:"history",name:s("nav.history"),icon:"clock"},{id:"playlists",name:s("nav.playlists"),icon:"music"}],_=(0,a.useCallback)(e=>{r(e.id),o(null)},[]),A=j?l?l.name:Y.find(e=>e.id===n)?.name??"Music":"Music",E=(0,i.jsx)(d.CD,{entries:Y,activeId:n,onSelect:_}),O=null;if(j){if("search"===n)O=(0,i.jsx)(I,{t:s,onSearch:$});else if("history"===n)O=(0,i.jsx)(T,{t:s,history:y,onRemoveSearch:C,onRemoveTrack:S,onClearAll:z,onRerunSearch:$});else if("playlists"===n)if(l){let e=g.find(e=>e.id===l.id)??l;O=(0,i.jsx)(R,{t:s,playlist:e,onAddTrack:N,onRemoveTrack:P,onBack:()=>o(null)})}else O=(0,i.jsx)(K,{t:s,playlists:g,onCreate:M,onDelete:F,onRename:D,onOpen:o})}return(0,i.jsx)(d.PE,{title:A,sidebar:E,activeId:n,topBarRight:e,children:O})},{}))}}]);