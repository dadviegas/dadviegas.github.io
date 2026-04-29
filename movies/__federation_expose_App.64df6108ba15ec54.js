"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([["362"],{3935(e,t,i){i.r(t),i.d(t,{default:()=>J});var r=i(5723),o=i(7991),n=i(6859),a=i.n(n),s=i(2799),l=i(6063),d=i(6197),c=i(132),p=i(7613),g=i(6250),m=i(2819),x=i(1620),f=i(1801),u=i(4956);let h="atlantis:movies:apikey",w="9b6f2645abf1725625c843aa71e3efd5";function b(e){if(e)return e;if(w)return w;try{return localStorage.getItem(h)}catch{return null}}let v=[{id:"discover",label:"Discover",iconName:"grid"},{id:"movies",label:"Movies",iconName:"film"},{id:"tv",label:"TV Shows",iconName:"monitor"},{id:"documentaries",label:"Documentaries",iconName:"book-open"},{id:"favorites",label:"My Favorites",iconName:"heart"},{id:"seen",label:"Recently Seen",iconName:"clock"}],y=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,k=a().span`
  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,$=a().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,j=a().div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,S=a().div`
  position: ${({active:e})=>e?"relative":"absolute"};
  inset: 0;
  width: 100%;
  /* 16:9 matches TMDB backdrops exactly → no side cropping. Cap at 520px on large screens. */
  padding-top: min(56.25%, 520px);
  background: url(${({src:e})=>e}) center top / cover no-repeat;
  background-color: ${l.w4.colors.surface};
  opacity: ${({active:e})=>+!!e};
  transition: opacity 0.7s ease;
  pointer-events: ${({active:e})=>e?"all":"none"};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 78%, ${l.w4.colors.mainBg} 100%),
      linear-gradient(to right,  rgba(0,0,0,0.55) 0%, transparent 55%);
  }

  @media (max-width: 640px) {
    padding-top: min(56.25%, 260px);
  }
`,T=a().div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 0 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 560px;

  @media (min-width: 768px) {
    padding: 0 40px 36px;
  }
`,M=a().span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 4px;
  width: fit-content;
  background: ${({kind:e})=>"movie"===e?"rgba(227,179,65,0.9)":"rgba(88,166,255,0.9)"};
  color: #000;
`,z=a().h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,C=a().div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,N=a().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,I=a().span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,_=a().p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,R=a().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  border: none;
  background: #fff;
  color: #000;
  transition: opacity ${l.w4.transitions.fast}, transform ${l.w4.transitions.fast};
  width: fit-content;
  -webkit-tap-highlight-color: transparent;

  &:hover { opacity: 0.88; }
  &:active { transform: scale(0.96); }
`,P=a().div`
  display: flex;
  gap: 6px;
  align-items: center;
`,E=a().button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width ${l.w4.transitions.base}, background ${l.w4.transitions.base};
`,F=a().div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 16px;
  border-bottom: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.mainBg};
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { display: none; }
`,B=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 13px 14px 12px;
  font-size: 13px;
  font-weight: ${({active:e})=>e?700:500};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  cursor: pointer;
  white-space: nowrap;
  transition: color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;

  &:hover { color: ${l.w4.colors.mainText}; }
`,D=a().div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,V=a().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${({hasFilters:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  background: ${({hasFilters:e})=>e?"rgba(88,166,255,0.12)":"none"};
  color: ${({hasFilters:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  transition: ${l.w4.transitions.fast};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,K=a().span`
  background: ${l.w4.colors.accent};
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,L=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 99px;
  padding: 5px 12px;
  transition: border-color ${l.w4.transitions.fast};
  width: 200px;

  @media (max-width: 640px) { width: 140px; }
  &:focus-within { border-color: ${l.w4.colors.accent}; }
`,G=a().input`
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${l.w4.typography.fontFamily};
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; opacity: 0.7; }
`,O=a().button`
  background: none;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${l.w4.colors.mainText}; }
`,U=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  padding-bottom: ${l.w4.spacing.xxl};
  animation: ${y} 0.25s ease;
`,W=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
`,q=a().h2`
  font-size: 22px;
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,Y=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${l.w4.spacing.md};
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeMd};
`,Z=a().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,A=a().span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${l.w4.colors.accent};
`,H={genres:[],providerIds:[],decades:[]};function J({topBarRight:e,apiKey:t}){let[i]=(0,d.useProfile)();(0,f.zJ)(i.ageMode);let[n,a]=(0,o.useState)(()=>b(t)),[s,w]=(0,o.useState)("discover"),[y,Q]=(0,o.useState)(H),[X,ee]=(0,o.useState)(!1),[et,ei]=(0,o.useState)([]),[er,eo]=(0,o.useState)([]),[en,ea]=(0,o.useState)(0),[es,el]=(0,o.useState)(null),ed=(0,o.useCallback)(e=>{e&&(history.pushState({movieDetail:!0},""),d.recents.record("movies",{hash:`#/movies?id=${e.id}&type=${e.media_type}`,label:(0,f.rS)(e),iconName:"film",color:"tv"===e.media_type?"#3b82f6":"#f59e0b"})),el(e)},[]);(0,o.useEffect)(()=>{let e=()=>{es&&el(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[es]);let ec=(0,l.fy)(),ep=(0,o.useRef)(null),[eg,em]=(0,o.useState)(!1),ex=ec.id,ef=ec.type,eu=!!ex&&("movie"===ef||"tv"===ef),eh=eu&&!es&&!eg;(0,o.useEffect)(()=>{if(!n||!eu)return;let e=`${ef}:${ex}`;ep.current!==e&&(ep.current=e,em(!1),(async()=>{try{let e=await (0,f.Ug)(n,ef,Number(ex));ed({...e,genre_ids:e.genres?.map(e=>e.id)??[]})}catch{em(!0)}})())},[n,eu,ex,ef,ed]);let ew=ec.tab,eb=(0,o.useRef)(null);(0,o.useEffect)(()=>{!ew||eu||eb.current===ew||["discover","movies","tv","documentaries","favorites","seen"].includes(ew)&&(eb.current=ew,w(ew))},[ew,eu]);let[ev,ey]=(0,o.useState)(0),[ek,e$]=(0,o.useState)(""),[ej,eS]=(0,o.useState)([]),[eT,eM]=(0,o.useState)(!1),ez=(0,o.useRef)(),eC=(0,o.useRef)(),eN=(0,o.useCallback)(()=>ey(e=>e+1),[]);(0,o.useEffect)(()=>{a(b(t))},[t]),(0,o.useEffect)(()=>{if(!(er.length<2))return eC.current=setInterval(()=>{ea(e=>(e+1)%er.length)},7e3),()=>clearInterval(eC.current)},[er.length]),(0,o.useEffect)(()=>{if(n){if(clearTimeout(ez.current),!ek.trim())return void eS([]);eM(!0),ez.current=setTimeout(async()=>{try{let e=await (0,f.$P)(n,ek.trim());eS(e)}catch{eS([])}finally{eM(!1)}},380)}},[n,ek]);let eI=y.genres.length>0||y.providerIds.length>0||y.decades.length>0,e_=(0,o.useCallback)(async(e,t,i)=>{if("favorites"===t)return void ei([{title:"My Favorites",items:(0,u.qx)(),loading:!1}]);if("seen"===t)return void ei([{title:"Recently Seen",items:(0,u.GB)(),loading:!1}]);if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){let r="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",o="documentaries"===t?[...i.genres,99]:i.genres,n=o.length>0?o:[28,35,18,878,27,10749,53,16];ei(n.map(e=>({title:f.N2[e]??"Other",items:[],loading:!0})));let a=await Promise.all(n.map(t=>(0,f.NE)(e,r,{...i,genres:[t]}))),s=n.map((e,t)=>({title:f.N2[e]??"Other",items:a[t]??[],loading:!1})).filter(e=>e.items.length>0);ei(s.length>0?s:[{title:"No Results",items:[],loading:!1}]);return}if("documentaries"===t){ei([{title:"Documentaries",items:[],loading:!0}]),ei([{title:"Documentaries",items:await (0,f.ag)(e),loading:!1}]);return}if("movies"===t){ei([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,f.Zy)(e),(0,f.Kk)(e,"movie")]);ei([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}]);return}if("tv"===t){ei([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,f.eN)(e),(0,f.Kk)(e,"tv")]);ei([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}]);return}let r=function(e,t=2){let i={};for(let t of e)for(let e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,u.qx)(),...(0,u.GB)()],2);ei([{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...r.map(e=>({title:`More ${f.N2[e]??"Great"} Content`,loading:!0,items:[]}))]);let[o,n,a,s,l,...d]=await Promise.all([(0,f._F)(e),(0,f.Zy)(e),(0,f.eN)(e),(0,f.Kk)(e,"movie"),(0,f.ag)(e),...r.map(t=>(0,f.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]);eo(o.filter(e=>e.backdrop_path).slice(0,5)),ea(0),ei([{title:"Trending This Week",items:o,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:s,loading:!1},{title:"Documentaries",items:l,loading:!1},...r.map((e,t)=>({title:`More ${f.N2[e]??"Great"} Content`,items:d[t]??[],loading:!1}))])},[]);(0,o.useEffect)(()=>{!n||eh||("discover"!==s&&eo([]),e_(n,s,y).catch(()=>{}))},[n,s,y,e_,ev,i.ageMode,eh]);let eR=(0,o.useCallback)(e=>{w(e),e$("")},[]),eP=(0,o.useCallback)(e=>{Q(e)},[]),eE=ek.trim().length>0,eF=er[en]??null,eB=("favorites"===s||"seen"===s)&&!et[0]?.loading&&et[0]?.items.length===0,eD=y.genres.length+y.providerIds.length+y.decades.length;if(!n)return(0,r.jsx)(p.H,{onSave:e=>{try{localStorage.setItem(h,e)}catch{}a(e)}});let eV=(0,r.jsxs)(L,{children:[(0,r.jsx)(c.In,{name:"search",size:14,color:l.w4.colors.mainTextMuted}),(0,r.jsx)(G,{placeholder:"Search…",value:ek,onChange:e=>e$(e.target.value)}),ek&&(0,r.jsx)(O,{onClick:()=>e$(""),"aria-label":"Clear",children:(0,r.jsx)(c.In,{name:"close",size:13})})]});if(eh)return(0,r.jsx)(c.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,r.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamily,fontSize:l.w4.typography.fontSizeSm},children:"Loading…"})});if(es){let t=(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,r.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,color:l.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:l.w4.typography.fontSizeSm,fontFamily:l.w4.typography.fontFamily,fontWeight:500,transition:`color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}`},onMouseEnter:e=>{e.currentTarget.style.color=l.w4.colors.mainText,e.currentTarget.style.borderColor=l.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=l.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=l.w4.colors.border},children:[(0,r.jsx)(c.In,{name:"arrow-left",size:14}),(0,r.jsx)(k,{children:" Back"})]}),e]});return(0,r.jsx)(c.PE,{title:(0,f.rS)(es),sidebar:null,topBarRight:t,children:(0,r.jsx)(m.P,{item:es,apiKey:n,onBack:()=>history.back(),onLibraryChange:eN,onSelect:ed})})}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,r.jsxs)(r.Fragment,{children:[eV,e]}),children:(0,r.jsxs)($,{children:[(0,r.jsxs)(F,{children:[v.map(({id:e,label:t,iconName:i})=>(0,r.jsxs)(B,{active:s===e,onClick:()=>eR(e),children:[(0,r.jsx)(c.In,{name:i,size:14}),t]},e)),(0,r.jsx)(D,{children:(0,r.jsxs)(V,{hasFilters:eD>0,onClick:()=>ee(!0),children:[(0,r.jsx)(c.In,{name:"filter",size:13}),"Filter",eD>0&&(0,r.jsx)(K,{children:eD})]})})]}),eE?(0,r.jsxs)(U,{children:[(0,r.jsx)(W,{children:(0,r.jsx)(q,{children:eT?"Searching…":ej.length>0?`Results for "${ek}"`:`No results for "${ek}"`})}),eT||0!==ej.length?(0,r.jsx)(g.U,{title:"",items:ej,loading:eT,onSelect:ed}):(0,r.jsxs)(Y,{children:[(0,r.jsx)("span",{style:{fontSize:44},children:"\uD83D\uDD0D"}),"Nothing found — try a different title"]})]}):(0,r.jsxs)(U,{children:["discover"===s&&eF&&!eI&&(0,r.jsx)(j,{children:er.map((e,t)=>{let i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,r.jsx)(S,{src:i,active:t===en,children:(0,r.jsxs)(T,{children:[(0,r.jsx)(M,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,r.jsx)(z,{children:(0,f.rS)(e)}),(0,r.jsxs)(C,{children:[(0,r.jsxs)(N,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,r.jsx)(I,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,r.jsx)(_,{children:e.overview}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,r.jsx)(R,{onClick:()=>ed(e),children:"▶ More Info"}),(0,r.jsx)(P,{children:er.map((e,t)=>(0,r.jsx)(E,{active:t===en,onClick:()=>{clearInterval(eC.current),ea(t)}},t))})]})]})},e.id)})}),eI&&(0,r.jsxs)(Z,{children:[(0,r.jsx)("span",{style:{fontSize:12,color:l.w4.colors.mainTextMuted},children:"Active filters:"}),y.genres.map(e=>(0,r.jsx)(A,{children:f.N2[e]??e},e)),y.providerIds.map(e=>(0,r.jsx)(A,{children:f.Mw.find(t=>t.id===e)?.name??e},e)),y.decades.map(e=>(0,r.jsx)(A,{children:e},e)),(0,r.jsx)("button",{style:{background:"none",border:"none",color:l.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>Q(H),children:"Clear all"})]}),"discover"!==s&&(0,r.jsx)(W,{children:(0,r.jsx)(q,{children:v.find(e=>e.id===s)?.label??""})}),eB?(0,r.jsxs)(Y,{children:[(0,r.jsx)("span",{style:{fontSize:44},children:"favorites"===s?"❤️":"\uD83D\uDC41️"}),"favorites"===s?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):et.map(e=>(0,r.jsx)(g.U,{title:e.title,items:e.items,loading:e.loading,onSelect:ed},e.title))]},s)]})}),X&&(0,r.jsx)(x.K,{filters:y,onChange:eP,onClose:()=>ee(!1)})]})}}}]);