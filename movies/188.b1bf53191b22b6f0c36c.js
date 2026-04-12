"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[188],{188(e,t,i){var n=i(7359),a=i(8997),o=i(3233),s=i(4079),l=i(7681),r=i(4525),d=i(5056),c=i(6294),m=i(6127),g=i(7010),u=i(7390),h=i(2053),p=i(5723);const f="atlantis:movies:apikey";function v(){try{return localStorage.getItem(f)}catch{return null}}const x=(new Date).getFullYear(),w=Array.from({length:30},(e,t)=>x-t),y=[{id:"cat:all",name:"Discover",icon:"layout-grid"},{id:"cat:movies",name:"Movies",icon:"file-text"},{id:"cat:tv",name:"TV Shows",icon:"layers"},{id:"cat:documentaries",name:"Documentaries",icon:"compass"},{id:"lib:favorites",name:"My Favorites",icon:"heart"},{id:"lib:seen",name:"Recently Seen",icon:"clock"},{id:"group:streaming",name:"Streaming Services",icon:"zap",defaultOpen:!1,children:u.Mw.map(e=>({id:`stream:${e.id}`,name:e.name}))},{id:"group:year",name:"By Year",icon:"calendar",defaultOpen:!1,children:w.map(e=>({id:`year:${e}`,name:String(e)}))},{id:"group:genre",name:"Genres",icon:"hash",defaultOpen:!1,children:[{id:"genre:28",name:"Action"},{id:"genre:12",name:"Adventure"},{id:"genre:16",name:"Animation"},{id:"genre:35",name:"Comedy"},{id:"genre:80",name:"Crime"},{id:"genre:18",name:"Drama"},{id:"genre:14",name:"Fantasy"},{id:"genre:27",name:"Horror"},{id:"genre:9648",name:"Mystery"},{id:"genre:10749",name:"Romance"},{id:"genre:878",name:"Sci-Fi"},{id:"genre:53",name:"Thriller"},{id:"genre:37",name:"Western"}]}],S=o.default.div`
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
`,b=o.default.input`
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.mainText};
  font-size: 14px;
  width: 100%;
  font-family: ${s.w4.typography.fontFamily};
  &::placeholder { color: ${s.w4.colors.mainTextMuted}; opacity: 0.7; }
`,T=o.default.button`
  background: none;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  line-height: 0;
  &:hover { color: ${s.w4.colors.mainText}; }
`,j=o.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${s.w4.spacing.lg} ${s.w4.spacing.xxl} 0;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.md};
`,M=o.default.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${s.w4.colors.mainText};
  margin: 0;
`,k=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  gap: ${s.w4.spacing.md};
  color: ${s.w4.colors.mainTextMuted};
  font-size: 15px;
`;function P({topBarRight:e}){const[t,i]=(0,n.useState)(v),[a,o]=(0,n.useState)("cat:all"),[x,w]=(0,n.useState)(""),[P,R]=(0,n.useState)([]),[V,C]=(0,n.useState)(!1),F=(0,n.useRef)(),[D,I]=(0,n.useState)([]),[W,z]=(0,n.useState)(null),[N,A]=(0,n.useState)(0),_=(0,n.useCallback)(()=>A(e=>e+1),[]),B=(0,n.useCallback)(async(e,t)=>{if("lib:favorites"===t){const e=(0,h.qx)();return void I([{title:"My Favorites",items:e,loading:!1}])}if("lib:seen"===t){const e=(0,h.GB)();return void I([{title:"Recently Seen (last 15)",items:e,loading:!1}])}if(t.startsWith("stream:")){const i=parseInt(t.slice(7),10),n=u.Mw.find(e=>e.id===i),a=n?.name??"Streaming";I([{title:`${a} — Movies`,items:[],loading:!0},{title:`${a} — TV Shows`,items:[],loading:!0}]);const[o,s]=await Promise.all([(0,u.px)(e,i,"movie"),(0,u.px)(e,i,"tv")]);return void I([{title:`${a} — Movies`,items:o,loading:!1},{title:`${a} — TV Shows`,items:s,loading:!1}])}if(t.startsWith("year:")){const i=parseInt(t.slice(5),10);I([{title:`Movies — ${i}`,items:[],loading:!0},{title:`TV Shows — ${i}`,items:[],loading:!0}]);const[n,a]=await Promise.all([(0,u.$m)(e,i,"movie"),(0,u.$m)(e,i,"tv")]);return void I([{title:`Movies — ${i}`,items:n,loading:!1},{title:`TV Shows — ${i}`,items:a,loading:!1}])}if(t.startsWith("genre:")){const i=parseInt(t.slice(6),10),n=u.N2[i]??"Genre";I([{title:`${n} — Movies`,items:[],loading:!0},{title:`${n} — TV Shows`,items:[],loading:!0}]);const[a,o]=await Promise.all([(0,u.lO)(e,i,"movie"),(0,u.lO)(e,i,"tv")]);return void I([{title:`${n} — Movies`,items:a,loading:!1},{title:`${n} — TV Shows`,items:o,loading:!1}])}if("cat:documentaries"===t){I([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,u.ag)(e);return void I([{title:"Documentaries",items:t,loading:!1}])}if("cat:movies"===t){I([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,u.Zy)(e),(0,u.Kk)(e,"movie")]);return void I([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("cat:tv"===t){I([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,u.eN)(e),(0,u.Kk)(e,"tv")]);return void I([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}I([{title:"Trending This Week",items:[],loading:!0},{title:"Popular Movies",items:[],loading:!0},{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0},{title:"Documentaries",items:[],loading:!0}]);const[i,n,a,o,s]=await Promise.all([(0,u._F)(e),(0,u.Zy)(e),(0,u.eN)(e),(0,u.Kk)(e,"movie"),(0,u.ag)(e)]);I([{title:"Trending This Week",items:i,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:o,loading:!1},{title:"Documentaries",items:s,loading:!1}])},[]);(0,n.useEffect)(()=>{t&&B(t,a)},[t,a,B,N]),(0,n.useEffect)(()=>{t&&(clearTimeout(F.current),x.trim()?(C(!0),F.current=setTimeout(async()=>{try{const e=await(0,u.$P)(t,x.trim());R(e)}catch{R([])}finally{C(!1)}},400)):R([]))},[t,x]);const E=(0,n.useCallback)(e=>{e.id.startsWith("group:")||(o(e.id),w(""))},[]),O=D[0]?.items?.find(e=>e.backdrop_path)??null,G=x.trim().length>0;if(!t)return(0,p.jsx)(d.H,{onSave:e=>{!function(e){try{localStorage.setItem(f,e)}catch{}}(e),i(e)}});const H=(0,p.jsxs)($,{children:[(0,p.jsx)(l.A,{size:15,color:s.w4.colors.mainTextMuted}),(0,p.jsx)(b,{placeholder:"Search movies, shows…",value:x,onChange:e=>w(e.target.value)}),x&&(0,p.jsx)(T,{onClick:()=>w(""),"aria-label":"Clear search",children:(0,p.jsx)(r.A,{size:14})})]}),K=(0,p.jsx)(s.CD,{entries:y,activeId:a,onSelect:E}),U=("lib:favorites"===a||"lib:seen"===a)&&!D[0]?.loading&&0===D[0]?.items.length;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.PE,{title:"Movies & Series",sidebar:K,activeId:a,topBarRight:(0,p.jsxs)(p.Fragment,{children:[H,e]}),children:(0,p.jsx)(S,{children:G?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{children:(0,p.jsx)(M,{children:V?"Searching…":P.length>0?`Results for "${x}"`:`No results for "${x}"`})}),V||0!==P.length?(0,p.jsx)(m.U,{title:"",items:P,loading:V,onSelect:z}):(0,p.jsxs)(k,{children:[(0,p.jsx)("span",{style:{fontSize:40},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,p.jsxs)(p.Fragment,{children:["cat:all"===a&&O&&(0,p.jsx)(c.l,{item:O,onPlay:z,onMore:z}),"cat:all"!==a&&(0,p.jsx)(j,{children:(0,p.jsx)(M,{children:function(e){if(e.startsWith("year:"))return e.slice(5);if(e.startsWith("genre:"))return u.N2[parseInt(e.slice(6),10)]??"Genre";if(e.startsWith("stream:")){const t=u.Mw.find(t=>t.id===parseInt(e.slice(7),10));return t?.name??"Streaming"}return{"cat:all":"Discover","cat:movies":"Movies","cat:tv":"TV Shows","cat:documentaries":"Documentaries","lib:favorites":"My Favorites","lib:seen":"Recently Seen"}[e]??""}(a)})}),U?(0,p.jsxs)(k,{children:[(0,p.jsx)("span",{style:{fontSize:40},children:"lib:favorites"===a?"❤️":"👁️"}),"lib:favorites"===a?"No favorites yet — open any title and hit ❤️":"No seen titles yet — open any title and mark it as seen"]}):D.map(e=>(0,p.jsx)(m.U,{title:e.title,items:e.items,loading:e.loading,onSelect:z},e.title))]})})}),W&&(0,p.jsx)(g.j,{item:W,apiKey:t,onClose:()=>z(null),onLibraryChange:_})]})}const R=document.getElementById("root");if(!R)throw new Error("Root element #root not found");(0,a.H)(R).render((0,p.jsx)(P,{}))},8997(e,t,i){var n=i(8991);t.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.b1bf53191b22b6f0c36c.js.map