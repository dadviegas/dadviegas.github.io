"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[188],{188(e,t,i){var n=i(7359),a=i(8997),o=i(3233),s=i(4079),l=i(7681),r=i(4525),d=i(5056),c=i(6294),m=i(6127),g=i(7010),u=i(7390),p=i(2053),h=i(5723);const f="atlantis:movies:apikey",v="9b6f2645abf1725625c843aa71e3efd5";function x(e){if(e)return e;if(v)return v;try{return localStorage.getItem(f)}catch{return null}}const w=(new Date).getFullYear(),y=Array.from({length:30},(e,t)=>w-t),S=[{id:"cat:all",name:"Discover",icon:"layout-grid"},{id:"cat:movies",name:"Movies",icon:"file-text"},{id:"cat:tv",name:"TV Shows",icon:"layers"},{id:"cat:documentaries",name:"Documentaries",icon:"compass"},{id:"lib:favorites",name:"My Favorites",icon:"heart"},{id:"lib:seen",name:"Recently Seen",icon:"clock"},{id:"group:streaming",name:"Streaming Services",icon:"zap",defaultOpen:!1,children:u.Mw.map(e=>({id:`stream:${e.id}`,name:e.name}))},{id:"group:year",name:"By Year",icon:"calendar",defaultOpen:!1,children:y.map(e=>({id:`year:${e}`,name:String(e)}))},{id:"group:genre",name:"Genres",icon:"hash",defaultOpen:!1,children:[{id:"genre:28",name:"Action"},{id:"genre:12",name:"Adventure"},{id:"genre:16",name:"Animation"},{id:"genre:35",name:"Comedy"},{id:"genre:80",name:"Crime"},{id:"genre:18",name:"Drama"},{id:"genre:14",name:"Fantasy"},{id:"genre:27",name:"Horror"},{id:"genre:9648",name:"Mystery"},{id:"genre:10749",name:"Romance"},{id:"genre:878",name:"Sci-Fi"},{id:"genre:53",name:"Thriller"},{id:"genre:37",name:"Western"}]}],b=o.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xl};
  padding-bottom: ${s.w4.spacing.xxl};
  scrollbar-width: thin;
  scrollbar-color: ${s.w4.colors.border} transparent;
`,$=o.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: 99px;
  padding: 6px 14px;
  transition: border-color 0.15s;
  width: 220px;

  @media (max-width: 640px) {
    width: 160px;
  }

  &:focus-within {
    border-color: ${s.w4.colors.accent};
  }
`,T=o.default.input`
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.mainText};
  font-size: 14px;
  width: 100%;
  font-family: ${s.w4.typography.fontFamily};
  &::placeholder { color: ${s.w4.colors.mainTextMuted}; opacity: 0.7; }
`,j=o.default.button`
  background: none;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  line-height: 0;
  &:hover { color: ${s.w4.colors.mainText}; }
`,M=o.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${s.w4.spacing.lg} ${s.w4.spacing.xxl} 0;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.md};
`,k=o.default.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${s.w4.colors.mainText};
  margin: 0;
`,P=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  gap: ${s.w4.spacing.md};
  color: ${s.w4.colors.mainTextMuted};
  font-size: 15px;
`;function R({topBarRight:e,apiKey:t}){const[i,a]=(0,n.useState)(()=>x(t)),[o,v]=(0,n.useState)("cat:all"),[w,y]=(0,n.useState)(""),[R,V]=(0,n.useState)([]),[C,F]=(0,n.useState)(!1),D=(0,n.useRef)(),[I,W]=(0,n.useState)([]),[z,N]=(0,n.useState)(null),[A,E]=(0,n.useState)(0),_=(0,n.useCallback)(()=>E(e=>e+1),[]);(0,n.useEffect)(()=>{a(x(t))},[t]);const B=(0,n.useCallback)(async(e,t)=>{if("lib:favorites"===t){const e=(0,p.qx)();return void W([{title:"My Favorites",items:e,loading:!1}])}if("lib:seen"===t){const e=(0,p.GB)();return void W([{title:"Recently Seen (last 15)",items:e,loading:!1}])}if(t.startsWith("stream:")){const i=parseInt(t.slice(7),10),n=u.Mw.find(e=>e.id===i),a=n?.name??"Streaming";W([{title:`${a} — Movies`,items:[],loading:!0},{title:`${a} — TV Shows`,items:[],loading:!0}]);const[o,s]=await Promise.all([(0,u.px)(e,i,"movie"),(0,u.px)(e,i,"tv")]);return void W([{title:`${a} — Movies`,items:o,loading:!1},{title:`${a} — TV Shows`,items:s,loading:!1}])}if(t.startsWith("year:")){const i=parseInt(t.slice(5),10);W([{title:`Movies — ${i}`,items:[],loading:!0},{title:`TV Shows — ${i}`,items:[],loading:!0}]);const[n,a]=await Promise.all([(0,u.$m)(e,i,"movie"),(0,u.$m)(e,i,"tv")]);return void W([{title:`Movies — ${i}`,items:n,loading:!1},{title:`TV Shows — ${i}`,items:a,loading:!1}])}if(t.startsWith("genre:")){const i=parseInt(t.slice(6),10),n=u.N2[i]??"Genre";W([{title:`${n} — Movies`,items:[],loading:!0},{title:`${n} — TV Shows`,items:[],loading:!0}]);const[a,o]=await Promise.all([(0,u.lO)(e,i,"movie"),(0,u.lO)(e,i,"tv")]);return void W([{title:`${n} — Movies`,items:a,loading:!1},{title:`${n} — TV Shows`,items:o,loading:!1}])}if("cat:documentaries"===t){W([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,u.ag)(e);return void W([{title:"Documentaries",items:t,loading:!1}])}if("cat:movies"===t){W([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,u.Zy)(e),(0,u.Kk)(e,"movie")]);return void W([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("cat:tv"===t){W([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,u.eN)(e),(0,u.Kk)(e,"tv")]);return void W([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}W([{title:"Trending This Week",items:[],loading:!0},{title:"Popular Movies",items:[],loading:!0},{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0},{title:"Documentaries",items:[],loading:!0}]);const[i,n,a,o,s]=await Promise.all([(0,u._F)(e),(0,u.Zy)(e),(0,u.eN)(e),(0,u.Kk)(e,"movie"),(0,u.ag)(e)]);W([{title:"Trending This Week",items:i,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:o,loading:!1},{title:"Documentaries",items:s,loading:!1}])},[]);(0,n.useEffect)(()=>{i&&B(i,o)},[i,o,B,A]),(0,n.useEffect)(()=>{i&&(clearTimeout(D.current),w.trim()?(F(!0),D.current=setTimeout(async()=>{try{const e=await(0,u.$P)(i,w.trim());V(e)}catch{V([])}finally{F(!1)}},400)):V([]))},[i,w]);const K=(0,n.useCallback)(e=>{e.id.startsWith("group:")||(v(e.id),y(""))},[]),O=I[0]?.items?.find(e=>e.backdrop_path)??null,G=w.trim().length>0;if(!i)return(0,h.jsx)(d.H,{onSave:e=>{!function(e){try{localStorage.setItem(f,e)}catch{}}(e),a(e)}});const H=(0,h.jsxs)($,{children:[(0,h.jsx)(l.A,{size:15,color:s.w4.colors.mainTextMuted}),(0,h.jsx)(T,{placeholder:"Search movies, shows…",value:w,onChange:e=>y(e.target.value)}),w&&(0,h.jsx)(j,{onClick:()=>y(""),"aria-label":"Clear search",children:(0,h.jsx)(r.A,{size:14})})]}),U=(0,h.jsx)(s.CD,{entries:S,activeId:o,onSelect:K}),Y=("lib:favorites"===o||"lib:seen"===o)&&!I[0]?.loading&&0===I[0]?.items.length;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.PE,{title:"Movies & Series",sidebar:U,activeId:o,topBarRight:(0,h.jsxs)(h.Fragment,{children:[H,e]}),children:(0,h.jsx)(b,{children:G?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(M,{children:(0,h.jsx)(k,{children:C?"Searching…":R.length>0?`Results for "${w}"`:`No results for "${w}"`})}),C||0!==R.length?(0,h.jsx)(m.U,{title:"",items:R,loading:C,onSelect:N}):(0,h.jsxs)(P,{children:[(0,h.jsx)("span",{style:{fontSize:40},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,h.jsxs)(h.Fragment,{children:["cat:all"===o&&O&&(0,h.jsx)(c.l,{item:O,onPlay:N,onMore:N}),"cat:all"!==o&&(0,h.jsx)(M,{children:(0,h.jsx)(k,{children:function(e){if(e.startsWith("year:"))return e.slice(5);if(e.startsWith("genre:"))return u.N2[parseInt(e.slice(6),10)]??"Genre";if(e.startsWith("stream:")){const t=u.Mw.find(t=>t.id===parseInt(e.slice(7),10));return t?.name??"Streaming"}return{"cat:all":"Discover","cat:movies":"Movies","cat:tv":"TV Shows","cat:documentaries":"Documentaries","lib:favorites":"My Favorites","lib:seen":"Recently Seen"}[e]??""}(o)})}),Y?(0,h.jsxs)(P,{children:[(0,h.jsx)("span",{style:{fontSize:40},children:"lib:favorites"===o?"❤️":"👁️"}),"lib:favorites"===o?"No favorites yet — open any title and hit ❤️":"No seen titles yet — open any title and mark it as seen"]}):I.map(e=>(0,h.jsx)(m.U,{title:e.title,items:e.items,loading:e.loading,onSelect:N},e.title))]})})}),z&&(0,h.jsx)(g.j,{item:z,apiKey:i,onClose:()=>N(null),onLibraryChange:_})]})}const V=document.getElementById("root");if(!V)throw new Error("Root element #root not found");(0,a.H)(V).render((0,h.jsx)(R,{}))},8997(e,t,i){var n=i(8991);t.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.7947fca2a2b81bc3b68d.js.map