"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([["362"],{3935(e,t,i){i.r(t),i.d(t,{default:()=>ea});var r=i(5723),o=i(7991),n=i(6859),a=i.n(n),s=i(2799),l=i(3930),d=i(8294),c=i(7032),p=i(1511),g=i(5031),x=i(7901),m=i(2709),f=i(1783),u=i(7681),h=i(4525),w=i(7180),b=i(7308),v=i(7613),y=i(6250),$=i(2819),k=i(1620),j=i(1801),S=i(4956);let T="atlantis:movies:apikey",M="9b6f2645abf1725625c843aa71e3efd5";function z(e){if(e)return e;if(M)return M;try{return localStorage.getItem(T)}catch{return null}}let C=[{id:"discover",label:"Discover",Icon:c.A},{id:"movies",label:"Movies",Icon:p.A},{id:"tv",label:"TV Shows",Icon:g.A},{id:"documentaries",label:"Documentaries",Icon:x.A},{id:"favorites",label:"My Favorites",Icon:m.A},{id:"seen",label:"Recently Seen",Icon:f.A}],I=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,_=a().span`
  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,N=a().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,R=a().div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,P=a().div`
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
`,E=a().div`
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
`,F=a().span`
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
`,A=a().h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,B=a().div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,D=a().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,V=a().span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,K=a().p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,L=a().button`
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
`,G=a().div`
  display: flex;
  gap: 6px;
  align-items: center;
`,O=a().button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width ${l.w4.transitions.base}, background ${l.w4.transitions.base};
`,U=a().div`
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
`,W=a().button`
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
`,q=a().div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,Y=a().button`
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
`,Z=a().span`
  background: ${l.w4.colors.accent};
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,H=a().div`
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
`,J=a().input`
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${l.w4.typography.fontFamily};
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; opacity: 0.7; }
`,Q=a().button`
  background: none;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${l.w4.colors.mainText}; }
`,X=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  padding-bottom: ${l.w4.spacing.xxl};
  animation: ${I} 0.25s ease;
`,ee=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
`,et=a().h2`
  font-size: 22px;
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,ei=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${l.w4.spacing.md};
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeMd};
`,er=a().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,eo=a().span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${l.w4.colors.accent};
`,en={genres:[],providerIds:[],decades:[]};function ea({topBarRight:e,apiKey:t}){let[i]=(0,d.useProfile)();(0,j.zJ)(i.ageMode);let[n,a]=(0,o.useState)(()=>z(t)),[s,c]=(0,o.useState)("discover"),[p,g]=(0,o.useState)(en),[x,m]=(0,o.useState)(!1),[f,M]=(0,o.useState)([]),[I,es]=(0,o.useState)([]),[el,ed]=(0,o.useState)(0),[ec,ep]=(0,o.useState)(null),eg=(0,o.useCallback)(e=>{e&&(history.pushState({movieDetail:!0},""),d.recents.record("movies",{hash:`#/movies?id=${e.id}&type=${e.media_type}`,label:(0,j.rS)(e),iconName:"film",color:"tv"===e.media_type?"#3b82f6":"#f59e0b"})),ep(e)},[]);(0,o.useEffect)(()=>{let e=()=>{ec&&ep(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[ec]);let ex=(0,l.fy)(),em=(0,o.useRef)(null),[ef,eu]=(0,o.useState)(!1),eh=ex.id,ew=ex.type,eb=!!eh&&("movie"===ew||"tv"===ew),ev=eb&&!ec&&!ef;(0,o.useEffect)(()=>{if(!n||!eb)return;let e=`${ew}:${eh}`;em.current!==e&&(em.current=e,eu(!1),(async()=>{try{let e=await (0,j.Ug)(n,ew,Number(eh));eg({...e,genre_ids:e.genres?.map(e=>e.id)??[]})}catch{eu(!0)}})())},[n,eb,eh,ew,eg]);let ey=ex.tab,e$=(0,o.useRef)(null);(0,o.useEffect)(()=>{!ey||eb||e$.current===ey||["discover","movies","tv","documentaries","favorites","seen"].includes(ey)&&(e$.current=ey,c(ey))},[ey,eb]);let[ek,ej]=(0,o.useState)(0),[eS,eT]=(0,o.useState)(""),[eM,ez]=(0,o.useState)([]),[eC,eI]=(0,o.useState)(!1),e_=(0,o.useRef)(),eN=(0,o.useRef)(),eR=(0,o.useCallback)(()=>ej(e=>e+1),[]);(0,o.useEffect)(()=>{a(z(t))},[t]),(0,o.useEffect)(()=>{if(!(I.length<2))return eN.current=setInterval(()=>{ed(e=>(e+1)%I.length)},7e3),()=>clearInterval(eN.current)},[I.length]),(0,o.useEffect)(()=>{if(n){if(clearTimeout(e_.current),!eS.trim())return void ez([]);eI(!0),e_.current=setTimeout(async()=>{try{let e=await (0,j.$P)(n,eS.trim());ez(e)}catch{ez([])}finally{eI(!1)}},380)}},[n,eS]);let eP=p.genres.length>0||p.providerIds.length>0||p.decades.length>0,eE=(0,o.useCallback)(async(e,t,i)=>{if("favorites"===t)return void M([{title:"My Favorites",items:(0,S.qx)(),loading:!1}]);if("seen"===t)return void M([{title:"Recently Seen",items:(0,S.GB)(),loading:!1}]);if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){let r="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",o="documentaries"===t?[...i.genres,99]:i.genres,n=o.length>0?o:[28,35,18,878,27,10749,53,16];M(n.map(e=>({title:j.N2[e]??"Other",items:[],loading:!0})));let a=await Promise.all(n.map(t=>(0,j.NE)(e,r,{...i,genres:[t]}))),s=n.map((e,t)=>({title:j.N2[e]??"Other",items:a[t]??[],loading:!1})).filter(e=>e.items.length>0);M(s.length>0?s:[{title:"No Results",items:[],loading:!1}]);return}if("documentaries"===t){M([{title:"Documentaries",items:[],loading:!0}]),M([{title:"Documentaries",items:await (0,j.ag)(e),loading:!1}]);return}if("movies"===t){M([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,j.Zy)(e),(0,j.Kk)(e,"movie")]);M([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}]);return}if("tv"===t){M([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,j.eN)(e),(0,j.Kk)(e,"tv")]);M([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}]);return}let r=function(e,t=2){let i={};for(let t of e)for(let e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,S.qx)(),...(0,S.GB)()],2);M([{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...r.map(e=>({title:`More ${j.N2[e]??"Great"} Content`,loading:!0,items:[]}))]);let[o,n,a,s,l,...d]=await Promise.all([(0,j._F)(e),(0,j.Zy)(e),(0,j.eN)(e),(0,j.Kk)(e,"movie"),(0,j.ag)(e),...r.map(t=>(0,j.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]);es(o.filter(e=>e.backdrop_path).slice(0,5)),ed(0),M([{title:"Trending This Week",items:o,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:s,loading:!1},{title:"Documentaries",items:l,loading:!1},...r.map((e,t)=>({title:`More ${j.N2[e]??"Great"} Content`,items:d[t]??[],loading:!1}))])},[]);(0,o.useEffect)(()=>{!n||ev||("discover"!==s&&es([]),eE(n,s,p).catch(()=>{}))},[n,s,p,eE,ek,i.ageMode,ev]);let eF=(0,o.useCallback)(e=>{c(e),eT("")},[]),eA=(0,o.useCallback)(e=>{g(e)},[]),eB=eS.trim().length>0,eD=I[el]??null,eV=("favorites"===s||"seen"===s)&&!f[0]?.loading&&f[0]?.items.length===0,eK=p.genres.length+p.providerIds.length+p.decades.length;if(!n)return(0,r.jsx)(v.H,{onSave:e=>{try{localStorage.setItem(T,e)}catch{}a(e)}});let eL=(0,r.jsxs)(H,{children:[(0,r.jsx)(u.A,{size:14,color:l.w4.colors.mainTextMuted}),(0,r.jsx)(J,{placeholder:"Search…",value:eS,onChange:e=>eT(e.target.value)}),eS&&(0,r.jsx)(Q,{onClick:()=>eT(""),"aria-label":"Clear",children:(0,r.jsx)(h.A,{size:13})})]});if(ev)return(0,r.jsx)(l.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,r.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamily,fontSize:l.w4.typography.fontSizeSm},children:"Loading…"})});if(ec){let t=(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,r.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,color:l.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:l.w4.typography.fontSizeSm,fontFamily:l.w4.typography.fontFamily,fontWeight:500,transition:`color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}`},onMouseEnter:e=>{e.currentTarget.style.color=l.w4.colors.mainText,e.currentTarget.style.borderColor=l.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=l.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=l.w4.colors.border},children:[(0,r.jsx)(w.A,{size:14}),(0,r.jsx)(_,{children:" Back"})]}),e]});return(0,r.jsx)(l.PE,{title:(0,j.rS)(ec),sidebar:null,topBarRight:t,children:(0,r.jsx)($.P,{item:ec,apiKey:n,onBack:()=>history.back(),onLibraryChange:eR,onSelect:eg})})}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,r.jsxs)(r.Fragment,{children:[eL,e]}),children:(0,r.jsxs)(N,{children:[(0,r.jsxs)(U,{children:[C.map(({id:e,label:t,Icon:i})=>(0,r.jsxs)(W,{active:s===e,onClick:()=>eF(e),children:[(0,r.jsx)(i,{size:14}),t]},e)),(0,r.jsx)(q,{children:(0,r.jsxs)(Y,{hasFilters:eK>0,onClick:()=>m(!0),children:[(0,r.jsx)(b.A,{size:13}),"Filter",eK>0&&(0,r.jsx)(Z,{children:eK})]})})]}),eB?(0,r.jsxs)(X,{children:[(0,r.jsx)(ee,{children:(0,r.jsx)(et,{children:eC?"Searching…":eM.length>0?`Results for "${eS}"`:`No results for "${eS}"`})}),eC||0!==eM.length?(0,r.jsx)(y.U,{title:"",items:eM,loading:eC,onSelect:eg}):(0,r.jsxs)(ei,{children:[(0,r.jsx)("span",{style:{fontSize:44},children:"\uD83D\uDD0D"}),"Nothing found — try a different title"]})]}):(0,r.jsxs)(X,{children:["discover"===s&&eD&&!eP&&(0,r.jsx)(R,{children:I.map((e,t)=>{let i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,r.jsx)(P,{src:i,active:t===el,children:(0,r.jsxs)(E,{children:[(0,r.jsx)(F,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,r.jsx)(A,{children:(0,j.rS)(e)}),(0,r.jsxs)(B,{children:[(0,r.jsxs)(D,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,r.jsx)(V,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,r.jsx)(K,{children:e.overview}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,r.jsx)(L,{onClick:()=>eg(e),children:"▶ More Info"}),(0,r.jsx)(G,{children:I.map((e,t)=>(0,r.jsx)(O,{active:t===el,onClick:()=>{clearInterval(eN.current),ed(t)}},t))})]})]})},e.id)})}),eP&&(0,r.jsxs)(er,{children:[(0,r.jsx)("span",{style:{fontSize:12,color:l.w4.colors.mainTextMuted},children:"Active filters:"}),p.genres.map(e=>(0,r.jsx)(eo,{children:j.N2[e]??e},e)),p.providerIds.map(e=>(0,r.jsx)(eo,{children:j.Mw.find(t=>t.id===e)?.name??e},e)),p.decades.map(e=>(0,r.jsx)(eo,{children:e},e)),(0,r.jsx)("button",{style:{background:"none",border:"none",color:l.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>g(en),children:"Clear all"})]}),"discover"!==s&&(0,r.jsx)(ee,{children:(0,r.jsx)(et,{children:C.find(e=>e.id===s)?.label??""})}),eV?(0,r.jsxs)(ei,{children:[(0,r.jsx)("span",{style:{fontSize:44},children:"favorites"===s?"❤️":"\uD83D\uDC41️"}),"favorites"===s?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):f.map(e=>(0,r.jsx)(y.U,{title:e.title,items:e.items,loading:e.loading,onSelect:eg},e.title))]},s)]})}),x&&(0,r.jsx)(k.K,{filters:p,onChange:eA,onClose:()=>m(!1)})]})}}}]);