"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[36],{6036(e,t,i){i.r(t),i.d(t,{default:()=>P});var a=i(7359),n=i(3233),o=i(4079),s=i(7681),l=i(4525),r=i(5056),d=i(6294),c=i(6127),m=i(7010),g=i(7390),u=i(2053),p=i(5723);const h="atlantis:movies:apikey",f="9b6f2645abf1725625c843aa71e3efd5";function v(e){if(e)return e;if(f)return f;try{return localStorage.getItem(h)}catch{return null}}const x=(new Date).getFullYear(),w=Array.from({length:30},(e,t)=>x-t),y=[{id:"cat:all",name:"Discover",icon:"layout-grid"},{id:"cat:movies",name:"Movies",icon:"file-text"},{id:"cat:tv",name:"TV Shows",icon:"layers"},{id:"cat:documentaries",name:"Documentaries",icon:"compass"},{id:"lib:favorites",name:"My Favorites",icon:"heart"},{id:"lib:seen",name:"Recently Seen",icon:"clock"},{id:"group:streaming",name:"Streaming Services",icon:"zap",defaultOpen:!1,children:g.Mw.map(e=>({id:`stream:${e.id}`,name:e.name}))},{id:"group:year",name:"By Year",icon:"calendar",defaultOpen:!1,children:w.map(e=>({id:`year:${e}`,name:String(e)}))},{id:"group:genre",name:"Genres",icon:"hash",defaultOpen:!1,children:[{id:"genre:28",name:"Action"},{id:"genre:12",name:"Adventure"},{id:"genre:16",name:"Animation"},{id:"genre:35",name:"Comedy"},{id:"genre:80",name:"Crime"},{id:"genre:18",name:"Drama"},{id:"genre:14",name:"Fantasy"},{id:"genre:27",name:"Horror"},{id:"genre:9648",name:"Mystery"},{id:"genre:10749",name:"Romance"},{id:"genre:878",name:"Sci-Fi"},{id:"genre:53",name:"Thriller"},{id:"genre:37",name:"Western"}]}],S=n.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.xl};
  padding-bottom: ${o.w4.spacing.xxl};
  scrollbar-width: thin;
  scrollbar-color: ${o.w4.colors.border} transparent;
`,b=n.default.div`
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
`,$=n.default.input`
  background: none;
  border: none;
  outline: none;
  color: ${o.w4.colors.mainText};
  font-size: 14px;
  width: 100%;
  font-family: ${o.w4.typography.fontFamily};
  &::placeholder { color: ${o.w4.colors.mainTextMuted}; opacity: 0.7; }
`,T=n.default.button`
  background: none;
  border: none;
  color: ${o.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  line-height: 0;
  &:hover { color: ${o.w4.colors.mainText}; }
`,M=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${o.w4.spacing.lg} ${o.w4.spacing.xxl} 0;
  flex-wrap: wrap;
  gap: ${o.w4.spacing.md};
`,j=n.default.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${o.w4.colors.mainText};
  margin: 0;
`,k=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  gap: ${o.w4.spacing.md};
  color: ${o.w4.colors.mainTextMuted};
  font-size: 15px;
`;function P({topBarRight:e,apiKey:t}){const[i,n]=(0,a.useState)(()=>v(t)),[f,x]=(0,a.useState)("cat:all"),[w,P]=(0,a.useState)(""),[R,V]=(0,a.useState)([]),[C,F]=(0,a.useState)(!1),D=(0,a.useRef)(),[W,I]=(0,a.useState)([]),[z,N]=(0,a.useState)(null),[A,_]=(0,a.useState)(0),K=(0,a.useCallback)(()=>_(e=>e+1),[]);(0,a.useEffect)(()=>{n(v(t))},[t]);const O=(0,a.useCallback)(async(e,t)=>{if("lib:favorites"===t){const e=(0,u.qx)();return void I([{title:"My Favorites",items:e,loading:!1}])}if("lib:seen"===t){const e=(0,u.GB)();return void I([{title:"Recently Seen (last 15)",items:e,loading:!1}])}if(t.startsWith("stream:")){const i=parseInt(t.slice(7),10),a=g.Mw.find(e=>e.id===i),n=a?.name??"Streaming";I([{title:`${n} — Movies`,items:[],loading:!0},{title:`${n} — TV Shows`,items:[],loading:!0}]);const[o,s]=await Promise.all([(0,g.px)(e,i,"movie"),(0,g.px)(e,i,"tv")]);return void I([{title:`${n} — Movies`,items:o,loading:!1},{title:`${n} — TV Shows`,items:s,loading:!1}])}if(t.startsWith("year:")){const i=parseInt(t.slice(5),10);I([{title:`Movies — ${i}`,items:[],loading:!0},{title:`TV Shows — ${i}`,items:[],loading:!0}]);const[a,n]=await Promise.all([(0,g.$m)(e,i,"movie"),(0,g.$m)(e,i,"tv")]);return void I([{title:`Movies — ${i}`,items:a,loading:!1},{title:`TV Shows — ${i}`,items:n,loading:!1}])}if(t.startsWith("genre:")){const i=parseInt(t.slice(6),10),a=g.N2[i]??"Genre";I([{title:`${a} — Movies`,items:[],loading:!0},{title:`${a} — TV Shows`,items:[],loading:!0}]);const[n,o]=await Promise.all([(0,g.lO)(e,i,"movie"),(0,g.lO)(e,i,"tv")]);return void I([{title:`${a} — Movies`,items:n,loading:!1},{title:`${a} — TV Shows`,items:o,loading:!1}])}if("cat:documentaries"===t){I([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,g.ag)(e);return void I([{title:"Documentaries",items:t,loading:!1}])}if("cat:movies"===t){I([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,g.Zy)(e),(0,g.Kk)(e,"movie")]);return void I([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("cat:tv"===t){I([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,g.eN)(e),(0,g.Kk)(e,"tv")]);return void I([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}I([{title:"Trending This Week",items:[],loading:!0},{title:"Popular Movies",items:[],loading:!0},{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0},{title:"Documentaries",items:[],loading:!0}]);const[i,a,n,o,s]=await Promise.all([(0,g._F)(e),(0,g.Zy)(e),(0,g.eN)(e),(0,g.Kk)(e,"movie"),(0,g.ag)(e)]);I([{title:"Trending This Week",items:i,loading:!1},{title:"Popular Movies",items:a,loading:!1},{title:"Popular TV Shows",items:n,loading:!1},{title:"Top Rated Movies",items:o,loading:!1},{title:"Documentaries",items:s,loading:!1}])},[]);(0,a.useEffect)(()=>{i&&O(i,f)},[i,f,O,A]),(0,a.useEffect)(()=>{i&&(clearTimeout(D.current),w.trim()?(F(!0),D.current=setTimeout(async()=>{try{const e=await(0,g.$P)(i,w.trim());V(e)}catch{V([])}finally{F(!1)}},400)):V([]))},[i,w]);const B=(0,a.useCallback)(e=>{e.id.startsWith("group:")||(x(e.id),P(""))},[]),E=W[0]?.items?.find(e=>e.backdrop_path)??null,G=w.trim().length>0;if(!i)return(0,p.jsx)(r.H,{onSave:e=>{!function(e){try{localStorage.setItem(h,e)}catch{}}(e),n(e)}});const H=(0,p.jsxs)(b,{children:[(0,p.jsx)(s.A,{size:15,color:o.w4.colors.mainTextMuted}),(0,p.jsx)($,{placeholder:"Search movies, shows…",value:w,onChange:e=>P(e.target.value)}),w&&(0,p.jsx)(T,{onClick:()=>P(""),"aria-label":"Clear search",children:(0,p.jsx)(l.A,{size:14})})]}),U=(0,p.jsx)(o.CD,{entries:y,activeId:f,onSelect:B}),Y=("lib:favorites"===f||"lib:seen"===f)&&!W[0]?.loading&&0===W[0]?.items.length;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.PE,{title:"Movies & Series",sidebar:U,activeId:f,topBarRight:(0,p.jsxs)(p.Fragment,{children:[H,e]}),children:(0,p.jsx)(S,{children:G?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(M,{children:(0,p.jsx)(j,{children:C?"Searching…":R.length>0?`Results for "${w}"`:`No results for "${w}"`})}),C||0!==R.length?(0,p.jsx)(c.U,{title:"",items:R,loading:C,onSelect:N}):(0,p.jsxs)(k,{children:[(0,p.jsx)("span",{style:{fontSize:40},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,p.jsxs)(p.Fragment,{children:["cat:all"===f&&E&&(0,p.jsx)(d.l,{item:E,onPlay:N,onMore:N}),"cat:all"!==f&&(0,p.jsx)(M,{children:(0,p.jsx)(j,{children:function(e){if(e.startsWith("year:"))return e.slice(5);if(e.startsWith("genre:"))return g.N2[parseInt(e.slice(6),10)]??"Genre";if(e.startsWith("stream:")){const t=g.Mw.find(t=>t.id===parseInt(e.slice(7),10));return t?.name??"Streaming"}return{"cat:all":"Discover","cat:movies":"Movies","cat:tv":"TV Shows","cat:documentaries":"Documentaries","lib:favorites":"My Favorites","lib:seen":"Recently Seen"}[e]??""}(f)})}),Y?(0,p.jsxs)(k,{children:[(0,p.jsx)("span",{style:{fontSize:40},children:"lib:favorites"===f?"❤️":"👁️"}),"lib:favorites"===f?"No favorites yet — open any title and hit ❤️":"No seen titles yet — open any title and mark it as seen"]}):W.map(e=>(0,p.jsx)(c.U,{title:e.title,items:e.items,loading:e.loading,onSelect:N},e.title))]})})}),z&&(0,p.jsx)(m.j,{item:z,apiKey:i,onClose:()=>N(null),onLibraryChange:K})]})}}}]);
//# sourceMappingURL=36.aeed70b82117d363cce5.js.map