"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[36],{6036(e,t,i){i.r(t),i.d(t,{default:()=>k});var n=i(7359),a=i(3233),o=i(4079),s=i(7681),l=i(4525),r=i(5056),d=i(6294),c=i(6127),m=i(7010),g=i(7390),u=i(2053),p=i(5723);const h="atlantis:movies:apikey";function f(e){if(e)return e;try{return localStorage.getItem(h)}catch{return null}}const v=(new Date).getFullYear(),x=Array.from({length:30},(e,t)=>v-t),w=[{id:"cat:all",name:"Discover",icon:"layout-grid"},{id:"cat:movies",name:"Movies",icon:"file-text"},{id:"cat:tv",name:"TV Shows",icon:"layers"},{id:"cat:documentaries",name:"Documentaries",icon:"compass"},{id:"lib:favorites",name:"My Favorites",icon:"heart"},{id:"lib:seen",name:"Recently Seen",icon:"clock"},{id:"group:streaming",name:"Streaming Services",icon:"zap",defaultOpen:!1,children:g.Mw.map(e=>({id:`stream:${e.id}`,name:e.name}))},{id:"group:year",name:"By Year",icon:"calendar",defaultOpen:!1,children:x.map(e=>({id:`year:${e}`,name:String(e)}))},{id:"group:genre",name:"Genres",icon:"hash",defaultOpen:!1,children:[{id:"genre:28",name:"Action"},{id:"genre:12",name:"Adventure"},{id:"genre:16",name:"Animation"},{id:"genre:35",name:"Comedy"},{id:"genre:80",name:"Crime"},{id:"genre:18",name:"Drama"},{id:"genre:14",name:"Fantasy"},{id:"genre:27",name:"Horror"},{id:"genre:9648",name:"Mystery"},{id:"genre:10749",name:"Romance"},{id:"genre:878",name:"Sci-Fi"},{id:"genre:53",name:"Thriller"},{id:"genre:37",name:"Western"}]}],y=a.default.div`
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
`;function k({topBarRight:e,apiKey:t}){const[i,a]=(0,n.useState)(()=>f(t)),[v,x]=(0,n.useState)("cat:all"),[k,P]=(0,n.useState)(""),[R,V]=(0,n.useState)([]),[C,F]=(0,n.useState)(!1),D=(0,n.useRef)(),[W,I]=(0,n.useState)([]),[z,N]=(0,n.useState)(null),[A,_]=(0,n.useState)(0),K=(0,n.useCallback)(()=>_(e=>e+1),[]);(0,n.useEffect)(()=>{a(f(t))},[t]);const O=(0,n.useCallback)(async(e,t)=>{if("lib:favorites"===t){const e=(0,u.qx)();return void I([{title:"My Favorites",items:e,loading:!1}])}if("lib:seen"===t){const e=(0,u.GB)();return void I([{title:"Recently Seen (last 15)",items:e,loading:!1}])}if(t.startsWith("stream:")){const i=parseInt(t.slice(7),10),n=g.Mw.find(e=>e.id===i),a=n?.name??"Streaming";I([{title:`${a} — Movies`,items:[],loading:!0},{title:`${a} — TV Shows`,items:[],loading:!0}]);const[o,s]=await Promise.all([(0,g.px)(e,i,"movie"),(0,g.px)(e,i,"tv")]);return void I([{title:`${a} — Movies`,items:o,loading:!1},{title:`${a} — TV Shows`,items:s,loading:!1}])}if(t.startsWith("year:")){const i=parseInt(t.slice(5),10);I([{title:`Movies — ${i}`,items:[],loading:!0},{title:`TV Shows — ${i}`,items:[],loading:!0}]);const[n,a]=await Promise.all([(0,g.$m)(e,i,"movie"),(0,g.$m)(e,i,"tv")]);return void I([{title:`Movies — ${i}`,items:n,loading:!1},{title:`TV Shows — ${i}`,items:a,loading:!1}])}if(t.startsWith("genre:")){const i=parseInt(t.slice(6),10),n=g.N2[i]??"Genre";I([{title:`${n} — Movies`,items:[],loading:!0},{title:`${n} — TV Shows`,items:[],loading:!0}]);const[a,o]=await Promise.all([(0,g.lO)(e,i,"movie"),(0,g.lO)(e,i,"tv")]);return void I([{title:`${n} — Movies`,items:a,loading:!1},{title:`${n} — TV Shows`,items:o,loading:!1}])}if("cat:documentaries"===t){I([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,g.ag)(e);return void I([{title:"Documentaries",items:t,loading:!1}])}if("cat:movies"===t){I([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,g.Zy)(e),(0,g.Kk)(e,"movie")]);return void I([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("cat:tv"===t){I([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,g.eN)(e),(0,g.Kk)(e,"tv")]);return void I([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}I([{title:"Trending This Week",items:[],loading:!0},{title:"Popular Movies",items:[],loading:!0},{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0},{title:"Documentaries",items:[],loading:!0}]);const[i,n,a,o,s]=await Promise.all([(0,g._F)(e),(0,g.Zy)(e),(0,g.eN)(e),(0,g.Kk)(e,"movie"),(0,g.ag)(e)]);I([{title:"Trending This Week",items:i,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:o,loading:!1},{title:"Documentaries",items:s,loading:!1}])},[]);(0,n.useEffect)(()=>{i&&O(i,v)},[i,v,O,A]),(0,n.useEffect)(()=>{i&&(clearTimeout(D.current),k.trim()?(F(!0),D.current=setTimeout(async()=>{try{const e=await(0,g.$P)(i,k.trim());V(e)}catch{V([])}finally{F(!1)}},400)):V([]))},[i,k]);const B=(0,n.useCallback)(e=>{e.id.startsWith("group:")||(x(e.id),P(""))},[]),E=W[0]?.items?.find(e=>e.backdrop_path)??null,G=k.trim().length>0;if(!i)return(0,p.jsx)(r.H,{onSave:e=>{!function(e){try{localStorage.setItem(h,e)}catch{}}(e),a(e)}});const H=(0,p.jsxs)(S,{children:[(0,p.jsx)(s.A,{size:15,color:o.w4.colors.mainTextMuted}),(0,p.jsx)($,{placeholder:"Search movies, shows…",value:k,onChange:e=>P(e.target.value)}),k&&(0,p.jsx)(b,{onClick:()=>P(""),"aria-label":"Clear search",children:(0,p.jsx)(l.A,{size:14})})]}),U=(0,p.jsx)(o.CD,{entries:w,activeId:v,onSelect:B}),Y=("lib:favorites"===v||"lib:seen"===v)&&!W[0]?.loading&&0===W[0]?.items.length;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.PE,{title:"Movies & Series",sidebar:U,activeId:v,topBarRight:(0,p.jsxs)(p.Fragment,{children:[H,e]}),children:(0,p.jsx)(y,{children:G?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(T,{children:(0,p.jsx)(M,{children:C?"Searching…":R.length>0?`Results for "${k}"`:`No results for "${k}"`})}),C||0!==R.length?(0,p.jsx)(c.U,{title:"",items:R,loading:C,onSelect:N}):(0,p.jsxs)(j,{children:[(0,p.jsx)("span",{style:{fontSize:40},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,p.jsxs)(p.Fragment,{children:["cat:all"===v&&E&&(0,p.jsx)(d.l,{item:E,onPlay:N,onMore:N}),"cat:all"!==v&&(0,p.jsx)(T,{children:(0,p.jsx)(M,{children:function(e){if(e.startsWith("year:"))return e.slice(5);if(e.startsWith("genre:"))return g.N2[parseInt(e.slice(6),10)]??"Genre";if(e.startsWith("stream:")){const t=g.Mw.find(t=>t.id===parseInt(e.slice(7),10));return t?.name??"Streaming"}return{"cat:all":"Discover","cat:movies":"Movies","cat:tv":"TV Shows","cat:documentaries":"Documentaries","lib:favorites":"My Favorites","lib:seen":"Recently Seen"}[e]??""}(v)})}),Y?(0,p.jsxs)(j,{children:[(0,p.jsx)("span",{style:{fontSize:40},children:"lib:favorites"===v?"❤️":"👁️"}),"lib:favorites"===v?"No favorites yet — open any title and hit ❤️":"No seen titles yet — open any title and mark it as seen"]}):W.map(e=>(0,p.jsx)(c.U,{title:e.title,items:e.items,loading:e.loading,onSelect:N},e.title))]})})}),z&&(0,p.jsx)(m.j,{item:z,apiKey:i,onClose:()=>N(null),onLibraryChange:K})]})}}}]);
//# sourceMappingURL=36.a43f1aff8f97a8765396.js.map