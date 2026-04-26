"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([["512"],{8997(e,t,i){var o=i(2727);t.createRoot=o.createRoot,o.hydrateRoot},3611(e,t,i){var o=i(5723),r=i(7991),n=i(8997),a=i(6859),s=i.n(a),l=i(2799),d=i(4764),c=i(8527),p=i(18),g=i(7613),m=i(6250),x=i(2819),f=i(1620),u=i(1801),h=i(4956);let w="atlantis:movies:apikey",b="9b6f2645abf1725625c843aa71e3efd5";function v(e){if(e)return e;if(b)return b;try{return localStorage.getItem(w)}catch{return null}}let y=[{id:"discover",label:"Discover",iconName:"grid"},{id:"movies",label:"Movies",iconName:"film"},{id:"tv",label:"TV Shows",iconName:"monitor"},{id:"documentaries",label:"Documentaries",iconName:"book-open"},{id:"favorites",label:"My Favorites",iconName:"heart"},{id:"seen",label:"Recently Seen",iconName:"clock"}],k=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,$=s().span`
  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,j=s().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,S=s().div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,T=s().div`
  position: ${({active:e})=>e?"relative":"absolute"};
  inset: 0;
  width: 100%;
  /* 16:9 matches TMDB backdrops exactly → no side cropping. Cap at 520px on large screens. */
  padding-top: min(56.25%, 520px);
  background: url(${({src:e})=>e}) center top / cover no-repeat;
  background-color: ${d.w4.colors.surface};
  opacity: ${({active:e})=>+!!e};
  transition: opacity 0.7s ease;
  pointer-events: ${({active:e})=>e?"all":"none"};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 78%, ${d.w4.colors.mainBg} 100%),
      linear-gradient(to right,  rgba(0,0,0,0.55) 0%, transparent 55%);
  }

  @media (max-width: 640px) {
    padding-top: min(56.25%, 260px);
  }
`,M=s().div`
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
`,z=s().span`
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
`,C=s().h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,N=s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,R=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,I=s().span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,_=s().p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,P=s().button`
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
  transition: opacity ${d.w4.transitions.fast}, transform ${d.w4.transitions.fast};
  width: fit-content;
  -webkit-tap-highlight-color: transparent;

  &:hover { opacity: 0.88; }
  &:active { transform: scale(0.96); }
`,E=s().div`
  display: flex;
  gap: 6px;
  align-items: center;
`,F=s().button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width ${d.w4.transitions.base}, background ${d.w4.transitions.base};
`,B=s().div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 16px;
  border-bottom: 1px solid ${d.w4.colors.border};
  background: ${d.w4.colors.mainBg};
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { display: none; }
`,D=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 13px 14px 12px;
  font-size: 13px;
  font-weight: ${({active:e})=>e?700:500};
  color: ${({active:e})=>e?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  cursor: pointer;
  white-space: nowrap;
  transition: color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;

  &:hover { color: ${d.w4.colors.mainText}; }
`,V=s().div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,K=s().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${({hasFilters:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  background: ${({hasFilters:e})=>e?"rgba(88,166,255,0.12)":"none"};
  color: ${({hasFilters:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  transition: ${d.w4.transitions.fast};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover { border-color: ${d.w4.colors.accent}; color: ${d.w4.colors.accent}; }
`,L=s().span`
  background: ${d.w4.colors.accent};
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,G=s().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: 99px;
  padding: 5px 12px;
  transition: border-color ${d.w4.transitions.fast};
  width: 200px;

  @media (max-width: 640px) { width: 140px; }
  &:focus-within { border-color: ${d.w4.colors.accent}; }
`,O=s().input`
  background: none;
  border: none;
  outline: none;
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${d.w4.typography.fontFamily};
  &::placeholder { color: ${d.w4.colors.mainTextMuted}; opacity: 0.7; }
`,U=s().button`
  background: none;
  border: none;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${d.w4.colors.mainText}; }
`,W=s().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.xl};
  padding-bottom: ${d.w4.spacing.xxl};
  animation: ${k} 0.25s ease;
`,q=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${d.w4.spacing.lg} ${d.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.md};
`,Y=s().h2`
  font-size: 22px;
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,Z=s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${d.w4.spacing.md};
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeMd};
`,A=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,H=s().span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${d.w4.colors.accent};
`,J={genres:[],providerIds:[],decades:[]},Q=document.getElementById("root");if(!Q)throw Error("Root element #root not found");(0,n.createRoot)(Q).render((0,o.jsx)(function({topBarRight:e,apiKey:t}){let[i]=(0,c.useProfile)();(0,u.zJ)(i.ageMode);let[n,a]=(0,r.useState)(()=>v(t)),[s,l]=(0,r.useState)("discover"),[b,k]=(0,r.useState)(J),[Q,X]=(0,r.useState)(!1),[ee,et]=(0,r.useState)([]),[ei,eo]=(0,r.useState)([]),[er,en]=(0,r.useState)(0),[ea,es]=(0,r.useState)(null),el=(0,r.useCallback)(e=>{e&&(history.pushState({movieDetail:!0},""),c.recents.record("movies",{hash:`#/movies?id=${e.id}&type=${e.media_type}`,label:(0,u.rS)(e),iconName:"film",color:"tv"===e.media_type?"#3b82f6":"#f59e0b"})),es(e)},[]);(0,r.useEffect)(()=>{let e=()=>{ea&&es(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[ea]);let ed=(0,d.fy)(),ec=(0,r.useRef)(null),[ep,eg]=(0,r.useState)(!1),em=ed.id,ex=ed.type,ef=!!em&&("movie"===ex||"tv"===ex),eu=ef&&!ea&&!ep;(0,r.useEffect)(()=>{if(!n||!ef)return;let e=`${ex}:${em}`;ec.current!==e&&(ec.current=e,eg(!1),(async()=>{try{let e=await (0,u.Ug)(n,ex,Number(em));el({...e,genre_ids:e.genres?.map(e=>e.id)??[]})}catch{eg(!0)}})())},[n,ef,em,ex,el]);let eh=ed.tab,ew=(0,r.useRef)(null);(0,r.useEffect)(()=>{!eh||ef||ew.current===eh||["discover","movies","tv","documentaries","favorites","seen"].includes(eh)&&(ew.current=eh,l(eh))},[eh,ef]);let[eb,ev]=(0,r.useState)(0),[ey,ek]=(0,r.useState)(""),[e$,ej]=(0,r.useState)([]),[eS,eT]=(0,r.useState)(!1),eM=(0,r.useRef)(),ez=(0,r.useRef)(),eC=(0,r.useCallback)(()=>ev(e=>e+1),[]);(0,r.useEffect)(()=>{a(v(t))},[t]),(0,r.useEffect)(()=>{if(!(ei.length<2))return ez.current=setInterval(()=>{en(e=>(e+1)%ei.length)},7e3),()=>clearInterval(ez.current)},[ei.length]),(0,r.useEffect)(()=>{if(n){if(clearTimeout(eM.current),!ey.trim())return void ej([]);eT(!0),eM.current=setTimeout(async()=>{try{let e=await (0,u.$P)(n,ey.trim());ej(e)}catch{ej([])}finally{eT(!1)}},380)}},[n,ey]);let eN=b.genres.length>0||b.providerIds.length>0||b.decades.length>0,eR=(0,r.useCallback)(async(e,t,i)=>{if("favorites"===t)return void et([{title:"My Favorites",items:(0,h.qx)(),loading:!1}]);if("seen"===t)return void et([{title:"Recently Seen",items:(0,h.GB)(),loading:!1}]);if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){let o="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",r="documentaries"===t?[...i.genres,99]:i.genres,n=r.length>0?r:[28,35,18,878,27,10749,53,16];et(n.map(e=>({title:u.N2[e]??"Other",items:[],loading:!0})));let a=await Promise.all(n.map(t=>(0,u.NE)(e,o,{...i,genres:[t]}))),s=n.map((e,t)=>({title:u.N2[e]??"Other",items:a[t]??[],loading:!1})).filter(e=>e.items.length>0);et(s.length>0?s:[{title:"No Results",items:[],loading:!1}]);return}if("documentaries"===t){et([{title:"Documentaries",items:[],loading:!0}]),et([{title:"Documentaries",items:await (0,u.ag)(e),loading:!1}]);return}if("movies"===t){et([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,u.Zy)(e),(0,u.Kk)(e,"movie")]);et([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}]);return}if("tv"===t){et([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,u.eN)(e),(0,u.Kk)(e,"tv")]);et([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}]);return}let o=function(e,t=2){let i={};for(let t of e)for(let e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,h.qx)(),...(0,h.GB)()],2);et([{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...o.map(e=>({title:`More ${u.N2[e]??"Great"} Content`,loading:!0,items:[]}))]);let[r,n,a,s,l,...d]=await Promise.all([(0,u._F)(e),(0,u.Zy)(e),(0,u.eN)(e),(0,u.Kk)(e,"movie"),(0,u.ag)(e),...o.map(t=>(0,u.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]);eo(r.filter(e=>e.backdrop_path).slice(0,5)),en(0),et([{title:"Trending This Week",items:r,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:s,loading:!1},{title:"Documentaries",items:l,loading:!1},...o.map((e,t)=>({title:`More ${u.N2[e]??"Great"} Content`,items:d[t]??[],loading:!1}))])},[]);(0,r.useEffect)(()=>{!n||eu||("discover"!==s&&eo([]),eR(n,s,b).catch(()=>{}))},[n,s,b,eR,eb,i.ageMode,eu]);let eI=(0,r.useCallback)(e=>{l(e),ek("")},[]),e_=(0,r.useCallback)(e=>{k(e)},[]),eP=ey.trim().length>0,eE=ei[er]??null,eF=("favorites"===s||"seen"===s)&&!ee[0]?.loading&&ee[0]?.items.length===0,eB=b.genres.length+b.providerIds.length+b.decades.length;if(!n)return(0,o.jsx)(g.H,{onSave:e=>{try{localStorage.setItem(w,e)}catch{}a(e)}});let eD=(0,o.jsxs)(G,{children:[(0,o.jsx)(p.In,{name:"search",size:14,color:d.w4.colors.mainTextMuted}),(0,o.jsx)(O,{placeholder:"Search…",value:ey,onChange:e=>ek(e.target.value)}),ey&&(0,o.jsx)(U,{onClick:()=>ek(""),"aria-label":"Clear",children:(0,o.jsx)(p.In,{name:"close",size:13})})]});if(eu)return(0,o.jsx)(d.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,o.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:d.w4.colors.mainTextMuted,fontFamily:d.w4.typography.fontFamily,fontSize:d.w4.typography.fontSizeSm},children:"Loading…"})});if(ea){let t=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,o.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${d.w4.colors.border}`,borderRadius:d.w4.borderRadius.md,color:d.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:d.w4.typography.fontSizeSm,fontFamily:d.w4.typography.fontFamily,fontWeight:500,transition:`color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}`},onMouseEnter:e=>{e.currentTarget.style.color=d.w4.colors.mainText,e.currentTarget.style.borderColor=d.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=d.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=d.w4.colors.border},children:[(0,o.jsx)(p.In,{name:"arrow-left",size:14}),(0,o.jsx)($,{children:" Back"})]}),e]});return(0,o.jsx)(d.PE,{title:(0,u.rS)(ea),sidebar:null,topBarRight:t,children:(0,o.jsx)(x.P,{item:ea,apiKey:n,onBack:()=>history.back(),onLibraryChange:eC,onSelect:el})})}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,o.jsxs)(o.Fragment,{children:[eD,e]}),children:(0,o.jsxs)(j,{children:[(0,o.jsxs)(B,{children:[y.map(({id:e,label:t,iconName:i})=>(0,o.jsxs)(D,{active:s===e,onClick:()=>eI(e),children:[(0,o.jsx)(p.In,{name:i,size:14}),t]},e)),(0,o.jsx)(V,{children:(0,o.jsxs)(K,{hasFilters:eB>0,onClick:()=>X(!0),children:[(0,o.jsx)(p.In,{name:"filter",size:13}),"Filter",eB>0&&(0,o.jsx)(L,{children:eB})]})})]}),eP?(0,o.jsxs)(W,{children:[(0,o.jsx)(q,{children:(0,o.jsx)(Y,{children:eS?"Searching…":e$.length>0?`Results for "${ey}"`:`No results for "${ey}"`})}),eS||0!==e$.length?(0,o.jsx)(m.U,{title:"",items:e$,loading:eS,onSelect:el}):(0,o.jsxs)(Z,{children:[(0,o.jsx)("span",{style:{fontSize:44},children:"\uD83D\uDD0D"}),"Nothing found — try a different title"]})]}):(0,o.jsxs)(W,{children:["discover"===s&&eE&&!eN&&(0,o.jsx)(S,{children:ei.map((e,t)=>{let i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,o.jsx)(T,{src:i,active:t===er,children:(0,o.jsxs)(M,{children:[(0,o.jsx)(z,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,o.jsx)(C,{children:(0,u.rS)(e)}),(0,o.jsxs)(N,{children:[(0,o.jsxs)(R,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,o.jsx)(I,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,o.jsx)(_,{children:e.overview}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,o.jsx)(P,{onClick:()=>el(e),children:"▶ More Info"}),(0,o.jsx)(E,{children:ei.map((e,t)=>(0,o.jsx)(F,{active:t===er,onClick:()=>{clearInterval(ez.current),en(t)}},t))})]})]})},e.id)})}),eN&&(0,o.jsxs)(A,{children:[(0,o.jsx)("span",{style:{fontSize:12,color:d.w4.colors.mainTextMuted},children:"Active filters:"}),b.genres.map(e=>(0,o.jsx)(H,{children:u.N2[e]??e},e)),b.providerIds.map(e=>(0,o.jsx)(H,{children:u.Mw.find(t=>t.id===e)?.name??e},e)),b.decades.map(e=>(0,o.jsx)(H,{children:e},e)),(0,o.jsx)("button",{style:{background:"none",border:"none",color:d.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>k(J),children:"Clear all"})]}),"discover"!==s&&(0,o.jsx)(q,{children:(0,o.jsx)(Y,{children:y.find(e=>e.id===s)?.label??""})}),eF?(0,o.jsxs)(Z,{children:[(0,o.jsx)("span",{style:{fontSize:44},children:"favorites"===s?"❤️":"\uD83D\uDC41️"}),"favorites"===s?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):ee.map(e=>(0,o.jsx)(m.U,{title:e.title,items:e.items,loading:e.loading,onSelect:el},e.title))]},s)]})}),Q&&(0,o.jsx)(f.K,{filters:b,onChange:e_,onClose:()=>X(!1)})]})},{}))}}]);