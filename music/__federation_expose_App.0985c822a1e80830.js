"use strict";(self.webpackChunk_atlantis_music=self.webpackChunk_atlantis_music||[]).push([["362"],{3935(e,t,s){s.r(t),s.d(t,{default:()=>N});var i=s(5723),n=s(7991),a=s(6859),l=s.n(a),r=s(2799),o=s(9874),c=s(8170),d=s(8395),m=s(948);let h="music:history",p="music:playlists";function u(){return Math.random().toString(36).slice(2,10)}function x(e){return`music://music.apple.com/search?term=${encodeURIComponent(e)}`}let y=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${o.w4.spacing.lg};
  overflow-y: auto;
  animation: ${y} 0.25s ease both;

  @media (max-width: ${o.w4.breakpoints.md}) {
    padding: ${o.w4.spacing.md};
  }
`,g=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${o.w4.spacing.md};
`,w=l().div`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${o.w4.colors.mainTextMuted};
  margin-bottom: ${o.w4.spacing.sm};
  margin-top: ${o.w4.spacing.lg};

  &:first-of-type { margin-top: 0; }
`,j=l().div`
  color: ${o.w4.colors.mainTextMuted};
  font-size: ${o.w4.typography.fontSizeSm};
  padding: ${o.w4.spacing.md} 0;
`,k=l().div`
  display: flex;
  align-items: center;
  gap: ${o.w4.spacing.sm};
  padding: 7px 0;
  border-bottom: 1px solid ${o.w4.colors.borderSubtle};
  min-width: 0;

  &:last-child { border-bottom: none; }
  &:hover .row-actions { opacity: 1; }

  @media (hover: none) { .row-actions { opacity: 1; } }
`,b=l().div`
  flex: 1;
  min-width: 0;
`,v=l().div`
  font-size: ${o.w4.typography.fontSizeSm};
  color: ${o.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$=l().div`
  font-size: 11px;
  font-family: ${o.w4.typography.fontFamilyMono};
  color: ${o.w4.colors.mainTextFaint};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2px;
`,C=l().div`
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${o.w4.transitions.fast};
  flex-shrink: 0;
  class: row-actions;
`,S=l().div`
  display: flex;
  gap: ${o.w4.spacing.sm};
  align-items: center;
  max-width: 560px;
`;function z({t:e,onSearch:t}){let[s,a]=(0,n.useState)(""),l=(0,n.useCallback)(e=>{e.preventDefault();let i=s.trim();i&&(t(i),window.open(x(i),"_blank","noreferrer"))},[s,t]);return(0,i.jsxs)(f,{children:[(0,i.jsx)(g,{children:(0,i.jsx)(d.YZ,{children:e("search.heading")})}),(0,i.jsxs)(S,{as:"form",onSubmit:l,children:[(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:(0,i.jsx)(d.pd,{value:s,onChange:e=>a(e.target.value),placeholder:e("search.placeholder"),before:(0,i.jsx)(d.In,{name:"search",size:15,color:o.w4.colors.mainTextMuted}),autoFocus:!0})}),(0,i.jsx)(d.$n,{variant:"accent",icon:(0,i.jsx)(d.In,{name:"arrow-up-right",size:13}),type:"submit",disabled:0===s.trim().length,children:e("search.button")})]})]})}function I({t:e,history:t,onRemoveSearch:s,onRemoveTrack:n,onClearAll:a,onRerunSearch:l}){let r=t.searches.length>0||t.tracks.length>0;return(0,i.jsxs)(f,{children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(d.YZ,{children:e("history.heading")}),r&&(0,i.jsx)(d.$n,{variant:"ghost",onClick:a,children:e("history.clear")})]}),!r&&(0,i.jsx)(j,{children:e("history.empty")}),t.searches.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{children:e("history.searches")}),t.searches.map(t=>(0,i.jsxs)(k,{children:[(0,i.jsx)(d.In,{name:"search",size:14,color:o.w4.colors.mainTextMuted}),(0,i.jsx)(b,{children:(0,i.jsx)(v,{children:t.query})}),(0,i.jsxs)(C,{className:"row-actions",children:[(0,i.jsx)(d.K0,{title:e("history.openMusic"),onClick:()=>{l(t.query),window.open(x(t.query),"_blank","noreferrer")},children:(0,i.jsx)(d.In,{name:"arrow-up-right",size:13})}),(0,i.jsx)(d.K0,{title:e("history.remove"),tone:"danger",onClick:()=>s(t.id),children:(0,i.jsx)(d.In,{name:"close",size:12})})]})]},t.id))]}),t.tracks.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{style:{marginTop:t.searches.length>0?o.w4.spacing.lg:void 0},children:e("history.tracks")}),t.tracks.map(t=>(0,i.jsxs)(k,{children:[(0,i.jsx)(d.In,{name:"music",size:14,color:o.w4.colors.mainTextMuted}),(0,i.jsxs)(b,{children:[(0,i.jsx)(v,{children:t.title}),t.artist&&(0,i.jsx)($,{children:t.artist})]}),(0,i.jsxs)(C,{className:"row-actions",children:[(0,i.jsx)(d.K0,{title:e("history.openMusic"),onClick:()=>{let e=t.artist?`${t.title} ${t.artist}`:t.title;window.open(x(e),"_blank","noreferrer")},children:(0,i.jsx)(d.In,{name:"arrow-up-right",size:13})}),(0,i.jsx)(d.K0,{title:e("history.remove"),tone:"danger",onClick:()=>n(t.id),children:(0,i.jsx)(d.In,{name:"close",size:12})})]})]},t.id))]})]})}let T=l().div`
  display: flex;
  align-items: center;
  gap: ${o.w4.spacing.md};
  margin-bottom: ${o.w4.spacing.lg};
`,M=l().div`
  display: flex;
  gap: ${o.w4.spacing.sm};
  align-items: center;
  max-width: 480px;
  margin-bottom: ${o.w4.spacing.md};
`;function F({t:e,playlist:t,onAddTrack:s,onRemoveTrack:a,onBack:l}){let[r,c]=(0,n.useState)(""),m=(0,n.useCallback)(e=>{let i;e.preventDefault();let n=r.trim();if(!n)return;let a=n.includes(" — ")?" — ":n.includes(" - ")?" - ":null,l=n;if(a){let e=n.split(a);l=e[0]?.trim()??n,i=e[1]?.trim()}s(t,l,i||void 0),c("")},[r,t,s]);return(0,i.jsxs)(f,{children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(d.K0,{title:e("nav.playlists"),onClick:l,children:(0,i.jsx)(d.In,{name:"chevron-left",size:16})}),(0,i.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,i.jsx)(d.YZ,{children:t.name}),(0,i.jsx)("div",{style:{fontSize:11,fontFamily:o.w4.typography.fontFamilyMono,color:o.w4.colors.mainTextFaint,marginTop:2},children:e("playlists.tracksCount",{n:t.tracks.length})})]})]}),(0,i.jsxs)(M,{as:"form",onSubmit:m,children:[(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:(0,i.jsx)(d.pd,{value:r,onChange:e=>c(e.target.value),placeholder:e("playlists.trackPlaceholder"),before:(0,i.jsx)(d.In,{name:"music",size:15,color:o.w4.colors.mainTextMuted})})}),(0,i.jsx)(d.$n,{variant:"accent",icon:(0,i.jsx)(d.In,{name:"plus",size:13}),type:"submit",disabled:0===r.trim().length,children:e("playlists.add")})]}),0===t.tracks.length&&(0,i.jsx)(j,{children:e("playlists.emptyTracks")}),t.tracks.map(s=>(0,i.jsxs)(k,{children:[(0,i.jsx)(d.In,{name:"music",size:14,color:o.w4.colors.mainTextMuted}),(0,i.jsxs)(b,{children:[(0,i.jsx)(v,{children:s.title}),s.artist&&(0,i.jsx)($,{children:s.artist})]}),(0,i.jsxs)(C,{className:"row-actions",children:[(0,i.jsx)(d.K0,{title:e("playlists.openTrack"),onClick:()=>{let e=s.artist?`${s.title} ${s.artist}`:s.title;window.open(x(e),"_blank","noreferrer")},children:(0,i.jsx)(d.In,{name:"arrow-up-right",size:13})}),(0,i.jsx)(d.K0,{title:e("playlists.removeTrack"),tone:"danger",onClick:()=>a(t,s.id),children:(0,i.jsx)(d.In,{name:"close",size:12})})]})]},s.id))]})}let D=l().div`
  display: flex;
  align-items: center;
  gap: ${o.w4.spacing.md};
  padding: ${o.w4.spacing.sm} ${o.w4.spacing.md};
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.md};
  margin-bottom: ${o.w4.spacing.sm};
  cursor: pointer;
  transition: border-color ${o.w4.transitions.fast}, transform ${o.w4.transitions.fast};

  &:hover {
    border-color: ${o.w4.colors.borderStrong};
    transform: translateY(-1px);
  }
  &:hover .row-actions { opacity: 1; }
  @media (hover: none) { .row-actions { opacity: 1; } }
`;function K({t:e,playlists:t,onCreate:s,onDelete:a,onRename:l,onOpen:r}){let[c,m]=(0,n.useState)(""),[h,p]=(0,n.useState)(!1),[u,x]=(0,n.useState)(null),[y,w]=(0,n.useState)(""),k=(0,n.useRef)(null),S=(0,n.useCallback)(e=>{e.preventDefault();let t=c.trim();t&&(s(t),m(""),p(!1))},[c,s]),z=(0,n.useCallback)((e,t)=>{t.preventDefault();let s=y.trim();s&&l(e,s),x(null)},[y,l]);return(0,n.useEffect)(()=>{h&&setTimeout(()=>k.current?.focus(),50)},[h]),(0,i.jsxs)(f,{children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(d.YZ,{children:e("playlists.heading")}),(0,i.jsx)(d.$n,{variant:"ghost",icon:(0,i.jsx)(d.In,{name:"plus",size:13}),onClick:()=>p(!0),children:e("playlists.new")})]}),h&&(0,i.jsxs)(D,{style:{cursor:"default"},as:"form",onSubmit:S,children:[(0,i.jsx)(d.In,{name:"music",size:16,color:o.w4.colors.mainTextMuted}),(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:(0,i.jsx)("input",{ref:k,style:{width:"100%",background:"transparent",border:"none",outline:"none",fontSize:o.w4.typography.fontSizeSm,color:o.w4.colors.mainText,fontFamily:o.w4.typography.fontFamily},placeholder:e("playlists.namePlaceholder"),value:c,onChange:e=>m(e.target.value)})}),(0,i.jsx)(d.$n,{variant:"accent",type:"submit",disabled:0===c.trim().length,children:e("playlists.create")}),(0,i.jsx)(d.$n,{variant:"ghost",type:"button",onClick:()=>{p(!1),m("")},children:e("playlists.cancel")})]}),0===t.length&&!h&&(0,i.jsx)(j,{children:e("playlists.empty")}),t.map(t=>u===t.id?(0,i.jsxs)(D,{style:{cursor:"default"},as:"form",onSubmit:e=>z(t.id,e),children:[(0,i.jsx)(d.In,{name:"music",size:16,color:o.w4.colors.mainTextMuted}),(0,i.jsx)("div",{style:{flex:1,minWidth:0},children:(0,i.jsx)("input",{autoFocus:!0,style:{width:"100%",background:"transparent",border:"none",outline:"none",fontSize:o.w4.typography.fontSizeSm,color:o.w4.colors.mainText,fontFamily:o.w4.typography.fontFamily},value:y,onChange:e=>w(e.target.value)})}),(0,i.jsx)(d.$n,{variant:"accent",type:"submit",disabled:0===y.trim().length,children:e("playlists.save")}),(0,i.jsx)(d.$n,{variant:"ghost",type:"button",onClick:()=>x(null),children:e("playlists.cancel")})]},t.id):(0,i.jsxs)(D,{onClick:()=>r(t),children:[(0,i.jsx)(d.In,{name:"music",size:16,color:o.w4.colors.accent}),(0,i.jsxs)(b,{children:[(0,i.jsx)(v,{children:t.name}),(0,i.jsx)($,{children:e("playlists.tracksCount",{n:t.tracks.length})})]}),(0,i.jsxs)(C,{className:"row-actions",onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(d.K0,{title:e("playlists.edit"),onClick:e=>{e.stopPropagation(),x(t.id),w(t.name)},children:(0,i.jsx)(d.In,{name:"edit",size:13})}),(0,i.jsx)(d.K0,{title:e("playlists.delete"),tone:"danger",onClick:s=>{s.stopPropagation(),confirm(e("playlists.confirmDelete"))&&a(t.id)},children:(0,i.jsx)(d.In,{name:"trash",size:13})})]})]},t.id))]})}function N({topBarRight:e}){let[t]=(0,c.Ym)(),s=(0,n.useMemo)(()=>(0,c.Nx)(t,m.A),[t]),[a,l]=(0,n.useState)("search"),[r,d]=(0,n.useState)(null),[x,y]=(0,n.useState)({searches:[],tracks:[]}),[f,g]=(0,n.useState)([]),[w,j]=(0,n.useState)(!1);(0,n.useEffect)(()=>{(async()=>{let[e,t]=await Promise.all([(0,o.PL)(h),(0,o.PL)(p)]);try{e&&y(JSON.parse(e))}catch{}try{t&&g(JSON.parse(t))}catch{}j(!0)})()},[]);let k=(0,n.useCallback)(async e=>{y(e),await (0,o.Is)(h,JSON.stringify(e))},[]),b=(0,n.useCallback)(async e=>{g(e),await (0,o.Is)(p,JSON.stringify(e))},[]),v=(0,n.useCallback)(e=>{y(t=>{let s={id:u(),query:e,ts:Date.now()},i={...t,searches:[s,...t.searches.filter(t=>t.query!==e)].slice(0,30)};return k(i),i})},[k]),$=(0,n.useCallback)(e=>{y(t=>{let s={...t,searches:t.searches.filter(t=>t.id!==e)};return k(s),s})},[k]),C=(0,n.useCallback)(e=>{y(t=>{let s={...t,tracks:t.tracks.filter(t=>t.id!==e)};return k(s),s})},[k]),S=(0,n.useCallback)(()=>{k({searches:[],tracks:[]})},[k]),T=(0,n.useCallback)(e=>{b([{id:u(),name:e,tracks:[],createdAt:Date.now()},...f])},[f,b]),M=(0,n.useCallback)(e=>{r?.id===e&&d(null),b(f.filter(t=>t.id!==e))},[f,r,b]),D=(0,n.useCallback)((e,t)=>{b(f.map(s=>s.id===e?{...s,name:t}:s)),r?.id===e&&d(e=>e?{...e,name:t}:e)},[f,r,b]),P=(0,n.useCallback)((e,t,s)=>{let i={id:u(),title:t,artist:s,addedAt:Date.now()},n={...e,tracks:[...e.tracks,i]};b(f.map(t=>t.id===e.id?n:t)),d(n)},[f,b]),R=(0,n.useCallback)((e,t)=>{let s={...e,tracks:e.tracks.filter(e=>e.id!==t)};b(f.map(t=>t.id===e.id?s:t)),d(s)},[f,b]),Y=[{id:"search",name:s("nav.search"),icon:"search"},{id:"history",name:s("nav.history"),icon:"clock"},{id:"playlists",name:s("nav.playlists"),icon:"music"}],_=(0,n.useCallback)(e=>{l(e.id),d(null)},[]),A=w?r?r.name:Y.find(e=>e.id===a)?.name??"Music":"Music",O=(0,i.jsx)(o.CD,{entries:Y,activeId:a,onSelect:_}),W=null;if(w){if("search"===a)W=(0,i.jsx)(z,{t:s,onSearch:v});else if("history"===a)W=(0,i.jsx)(I,{t:s,history:x,onRemoveSearch:$,onRemoveTrack:C,onClearAll:S,onRerunSearch:v});else if("playlists"===a)if(r){let e=f.find(e=>e.id===r.id)??r;W=(0,i.jsx)(F,{t:s,playlist:e,onAddTrack:P,onRemoveTrack:R,onBack:()=>d(null)})}else W=(0,i.jsx)(K,{t:s,playlists:f,onCreate:T,onDelete:M,onRename:D,onOpen:d})}return(0,i.jsx)(o.PE,{title:A,sidebar:O,activeId:a,topBarRight:e,children:W})}}}]);