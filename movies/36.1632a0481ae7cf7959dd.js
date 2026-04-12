"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[36],{6036(e,t,i){i.r(t),i.d(t,{default:()=>k});var n=i(7359),a=i(3233),o=i(4079),s=i(7681),l=i(4525),r=i(5056),d=i(6294),c=i(6127),m=i(7010),g=i(7390),u=i(2053),p=i(5723);const h="atlantis:movies:apikey";function f(){try{return localStorage.getItem(h)}catch{return null}}const v=(new Date).getFullYear(),x=Array.from({length:30},(e,t)=>v-t),w=[{id:"cat:all",name:"Discover",icon:"layout-grid"},{id:"cat:movies",name:"Movies",icon:"file-text"},{id:"cat:tv",name:"TV Shows",icon:"layers"},{id:"cat:documentaries",name:"Documentaries",icon:"compass"},{id:"lib:favorites",name:"My Favorites",icon:"heart"},{id:"lib:seen",name:"Recently Seen",icon:"clock"},{id:"group:streaming",name:"Streaming Services",icon:"zap",defaultOpen:!1,children:g.Mw.map(e=>({id:`stream:${e.id}`,name:e.name}))},{id:"group:year",name:"By Year",icon:"calendar",defaultOpen:!1,children:x.map(e=>({id:`year:${e}`,name:String(e)}))},{id:"group:genre",name:"Genres",icon:"hash",defaultOpen:!1,children:[{id:"genre:28",name:"Action"},{id:"genre:12",name:"Adventure"},{id:"genre:16",name:"Animation"},{id:"genre:35",name:"Comedy"},{id:"genre:80",name:"Crime"},{id:"genre:18",name:"Drama"},{id:"genre:14",name:"Fantasy"},{id:"genre:27",name:"Horror"},{id:"genre:9648",name:"Mystery"},{id:"genre:10749",name:"Romance"},{id:"genre:878",name:"Sci-Fi"},{id:"genre:53",name:"Thriller"},{id:"genre:37",name:"Western"}]}],y=a.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.xl};
  padding-bottom: ${o.w4.spacing.xxl};
  scrollbar-width: thin;
  scrollbar-color: ${o.w4.colors.border} transparent;
`,S=a.default.div`
  display: flex;
  align-items: center;
  gap: ${o.w4.spacing.sm};
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: 99px;
  padding: 6px 14px;
  transition: border-color 0.15s;
  width: 220px;

  @media (max-width: 640px) {
    width: 160px;
  }

  &:focus-within {
    border-color: ${o.w4.colors.accent};
  }
`,$=a.default.input`
  background: none;
  border: none;
  outline: none;
  color: ${o.w4.colors.mainText};
  font-size: 14px;
  width: 100%;
  font-family: ${o.w4.typography.fontFamily};
  &::placeholder { color: ${o.w4.colors.mainTextMuted}; opacity: 0.7; }
`,b=a.default.button`
  background: none;
  border: none;
  color: ${o.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  line-height: 0;
  &:hover { color: ${o.w4.colors.mainText}; }
`,T=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${o.w4.spacing.lg} ${o.w4.spacing.xxl} 0;
  flex-wrap: wrap;
  gap: ${o.w4.spacing.md};
`,M=a.default.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${o.w4.colors.mainText};
  margin: 0;
`,j=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  gap: ${o.w4.spacing.md};
  color: ${o.w4.colors.mainTextMuted};
  font-size: 15px;
`;function k({topBarRight:e}){const[t,i]=(0,n.useState)(f),[a,v]=(0,n.useState)("cat:all"),[x,k]=(0,n.useState)(""),[P,R]=(0,n.useState)([]),[V,C]=(0,n.useState)(!1),F=(0,n.useRef)(),[D,W]=(0,n.useState)([]),[I,z]=(0,n.useState)(null),[N,A]=(0,n.useState)(0),_=(0,n.useCallback)(()=>A(e=>e+1),[]),O=(0,n.useCallback)(async(e,t)=>{if("lib:favorites"===t){const e=(0,u.qx)();return void W([{title:"My Favorites",items:e,loading:!1}])}if("lib:seen"===t){const e=(0,u.GB)();return void W([{title:"Recently Seen (last 15)",items:e,loading:!1}])}if(t.startsWith("stream:")){const i=parseInt(t.slice(7),10),n=g.Mw.find(e=>e.id===i),a=n?.name??"Streaming";W([{title:`${a} — Movies`,items:[],loading:!0},{title:`${a} — TV Shows`,items:[],loading:!0}]);const[o,s]=await Promise.all([(0,g.px)(e,i,"movie"),(0,g.px)(e,i,"tv")]);return void W([{title:`${a} — Movies`,items:o,loading:!1},{title:`${a} — TV Shows`,items:s,loading:!1}])}if(t.startsWith("year:")){const i=parseInt(t.slice(5),10);W([{title:`Movies — ${i}`,items:[],loading:!0},{title:`TV Shows — ${i}`,items:[],loading:!0}]);const[n,a]=await Promise.all([(0,g.$m)(e,i,"movie"),(0,g.$m)(e,i,"tv")]);return void W([{title:`Movies — ${i}`,items:n,loading:!1},{title:`TV Shows — ${i}`,items:a,loading:!1}])}if(t.startsWith("genre:")){const i=parseInt(t.slice(6),10),n=g.N2[i]??"Genre";W([{title:`${n} — Movies`,items:[],loading:!0},{title:`${n} — TV Shows`,items:[],loading:!0}]);const[a,o]=await Promise.all([(0,g.lO)(e,i,"movie"),(0,g.lO)(e,i,"tv")]);return void W([{title:`${n} — Movies`,items:a,loading:!1},{title:`${n} — TV Shows`,items:o,loading:!1}])}if("cat:documentaries"===t){W([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,g.ag)(e);return void W([{title:"Documentaries",items:t,loading:!1}])}if("cat:movies"===t){W([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,g.Zy)(e),(0,g.Kk)(e,"movie")]);return void W([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("cat:tv"===t){W([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,g.eN)(e),(0,g.Kk)(e,"tv")]);return void W([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}W([{title:"Trending This Week",items:[],loading:!0},{title:"Popular Movies",items:[],loading:!0},{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0},{title:"Documentaries",items:[],loading:!0}]);const[i,n,a,o,s]=await Promise.all([(0,g._F)(e),(0,g.Zy)(e),(0,g.eN)(e),(0,g.Kk)(e,"movie"),(0,g.ag)(e)]);W([{title:"Trending This Week",items:i,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:o,loading:!1},{title:"Documentaries",items:s,loading:!1}])},[]);(0,n.useEffect)(()=>{t&&O(t,a)},[t,a,O,N]),(0,n.useEffect)(()=>{t&&(clearTimeout(F.current),x.trim()?(C(!0),F.current=setTimeout(async()=>{try{const e=await(0,g.$P)(t,x.trim());R(e)}catch{R([])}finally{C(!1)}},400)):R([]))},[t,x]);const B=(0,n.useCallback)(e=>{e.id.startsWith("group:")||(v(e.id),k(""))},[]),G=D[0]?.items?.find(e=>e.backdrop_path)??null,K=x.trim().length>0;if(!t)return(0,p.jsx)(r.H,{onSave:e=>{!function(e){try{localStorage.setItem(h,e)}catch{}}(e),i(e)}});const E=(0,p.jsxs)(S,{children:[(0,p.jsx)(s.A,{size:15,color:o.w4.colors.mainTextMuted}),(0,p.jsx)($,{placeholder:"Search movies, shows…",value:x,onChange:e=>k(e.target.value)}),x&&(0,p.jsx)(b,{onClick:()=>k(""),"aria-label":"Clear search",children:(0,p.jsx)(l.A,{size:14})})]}),H=(0,p.jsx)(o.CD,{entries:w,activeId:a,onSelect:B}),U=("lib:favorites"===a||"lib:seen"===a)&&!D[0]?.loading&&0===D[0]?.items.length;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.PE,{title:"Movies & Series",sidebar:H,activeId:a,topBarRight:(0,p.jsxs)(p.Fragment,{children:[E,e]}),children:(0,p.jsx)(y,{children:K?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(T,{children:(0,p.jsx)(M,{children:V?"Searching…":P.length>0?`Results for "${x}"`:`No results for "${x}"`})}),V||0!==P.length?(0,p.jsx)(c.U,{title:"",items:P,loading:V,onSelect:z}):(0,p.jsxs)(j,{children:[(0,p.jsx)("span",{style:{fontSize:40},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,p.jsxs)(p.Fragment,{children:["cat:all"===a&&G&&(0,p.jsx)(d.l,{item:G,onPlay:z,onMore:z}),"cat:all"!==a&&(0,p.jsx)(T,{children:(0,p.jsx)(M,{children:function(e){if(e.startsWith("year:"))return e.slice(5);if(e.startsWith("genre:"))return g.N2[parseInt(e.slice(6),10)]??"Genre";if(e.startsWith("stream:")){const t=g.Mw.find(t=>t.id===parseInt(e.slice(7),10));return t?.name??"Streaming"}return{"cat:all":"Discover","cat:movies":"Movies","cat:tv":"TV Shows","cat:documentaries":"Documentaries","lib:favorites":"My Favorites","lib:seen":"Recently Seen"}[e]??""}(a)})}),U?(0,p.jsxs)(j,{children:[(0,p.jsx)("span",{style:{fontSize:40},children:"lib:favorites"===a?"❤️":"👁️"}),"lib:favorites"===a?"No favorites yet — open any title and hit ❤️":"No seen titles yet — open any title and mark it as seen"]}):D.map(e=>(0,p.jsx)(c.U,{title:e.title,items:e.items,loading:e.loading,onSelect:z},e.title))]})})}),I&&(0,p.jsx)(m.j,{item:I,apiKey:t,onClose:()=>z(null),onLibraryChange:_})]})}}}]);
//# sourceMappingURL=36.1632a0481ae7cf7959dd.js.map