"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([["512"],{8997(e,t,i){var o=i(2727);t.createRoot=o.createRoot,o.hydrateRoot},3611(e,t,i){var o=i(5723),r=i(7991),n=i(8997),a=i(6859),s=i.n(a),l=i(2799),d=i(3930),c=i(8294),p=i(7032),g=i(1511),x=i(5031),m=i(7901),f=i(2709),u=i(1783),h=i(7681),w=i(4525),b=i(7180),v=i(7308),y=i(7613),$=i(6250),k=i(2819),j=i(1620),S=i(1801),T=i(4956);let M="atlantis:movies:apikey",z="9b6f2645abf1725625c843aa71e3efd5";function C(e){if(e)return e;if(z)return z;try{return localStorage.getItem(M)}catch{return null}}let R=[{id:"discover",label:"Discover",Icon:p.A},{id:"movies",label:"Movies",Icon:g.A},{id:"tv",label:"TV Shows",Icon:x.A},{id:"documentaries",label:"Documentaries",Icon:m.A},{id:"favorites",label:"My Favorites",Icon:f.A},{id:"seen",label:"Recently Seen",Icon:u.A}],I=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,_=s().span`
  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,N=s().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,P=s().div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,E=s().div`
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
`,F=s().div`
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
`,B=s().span`
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
`,A=s().h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,D=s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,V=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,K=s().span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,L=s().p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,G=s().button`
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
`,O=s().div`
  display: flex;
  gap: 6px;
  align-items: center;
`,U=s().button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width ${d.w4.transitions.base}, background ${d.w4.transitions.base};
`,W=s().div`
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
`,q=s().button`
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
`,Y=s().div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,Z=s().button`
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
`,H=s().span`
  background: ${d.w4.colors.accent};
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,J=s().div`
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
`,Q=s().input`
  background: none;
  border: none;
  outline: none;
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${d.w4.typography.fontFamily};
  &::placeholder { color: ${d.w4.colors.mainTextMuted}; opacity: 0.7; }
`,X=s().button`
  background: none;
  border: none;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${d.w4.colors.mainText}; }
`,ee=s().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.xl};
  padding-bottom: ${d.w4.spacing.xxl};
  animation: ${I} 0.25s ease;
`,et=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${d.w4.spacing.lg} ${d.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.md};
`,ei=s().h2`
  font-size: 22px;
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,eo=s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${d.w4.spacing.md};
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeMd};
`,er=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,en=s().span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${d.w4.colors.accent};
`,ea={genres:[],providerIds:[],decades:[]},es=document.getElementById("root");if(!es)throw Error("Root element #root not found");(0,n.createRoot)(es).render((0,o.jsx)(function({topBarRight:e,apiKey:t}){let[i]=(0,c.useProfile)();(0,S.zJ)(i.ageMode);let[n,a]=(0,r.useState)(()=>C(t)),[s,l]=(0,r.useState)("discover"),[p,g]=(0,r.useState)(ea),[x,m]=(0,r.useState)(!1),[f,u]=(0,r.useState)([]),[z,I]=(0,r.useState)([]),[es,el]=(0,r.useState)(0),[ed,ec]=(0,r.useState)(null),ep=(0,r.useCallback)(e=>{e&&(history.pushState({movieDetail:!0},""),c.recents.record("movies",{hash:`#/movies?id=${e.id}&type=${e.media_type}`,label:(0,S.rS)(e),iconName:"film",color:"tv"===e.media_type?"#3b82f6":"#f59e0b"})),ec(e)},[]);(0,r.useEffect)(()=>{let e=()=>{ed&&ec(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[ed]);let eg=(0,d.fy)(),ex=(0,r.useRef)(null),[em,ef]=(0,r.useState)(!1),eu=eg.id,eh=eg.type,ew=!!eu&&("movie"===eh||"tv"===eh),eb=ew&&!ed&&!em;(0,r.useEffect)(()=>{if(!n||!ew)return;let e=`${eh}:${eu}`;ex.current!==e&&(ex.current=e,ef(!1),(async()=>{try{let e=await (0,S.Ug)(n,eh,Number(eu));ep({...e,genre_ids:e.genres?.map(e=>e.id)??[]})}catch{ef(!0)}})())},[n,ew,eu,eh,ep]);let ev=eg.tab,ey=(0,r.useRef)(null);(0,r.useEffect)(()=>{!ev||ew||ey.current===ev||["discover","movies","tv","documentaries","favorites","seen"].includes(ev)&&(ey.current=ev,l(ev))},[ev,ew]);let[e$,ek]=(0,r.useState)(0),[ej,eS]=(0,r.useState)(""),[eT,eM]=(0,r.useState)([]),[ez,eC]=(0,r.useState)(!1),eR=(0,r.useRef)(),eI=(0,r.useRef)(),e_=(0,r.useCallback)(()=>ek(e=>e+1),[]);(0,r.useEffect)(()=>{a(C(t))},[t]),(0,r.useEffect)(()=>{if(!(z.length<2))return eI.current=setInterval(()=>{el(e=>(e+1)%z.length)},7e3),()=>clearInterval(eI.current)},[z.length]),(0,r.useEffect)(()=>{if(n){if(clearTimeout(eR.current),!ej.trim())return void eM([]);eC(!0),eR.current=setTimeout(async()=>{try{let e=await (0,S.$P)(n,ej.trim());eM(e)}catch{eM([])}finally{eC(!1)}},380)}},[n,ej]);let eN=p.genres.length>0||p.providerIds.length>0||p.decades.length>0,eP=(0,r.useCallback)(async(e,t,i)=>{if("favorites"===t)return void u([{title:"My Favorites",items:(0,T.qx)(),loading:!1}]);if("seen"===t)return void u([{title:"Recently Seen",items:(0,T.GB)(),loading:!1}]);if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){let o="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",r="documentaries"===t?[...i.genres,99]:i.genres,n=r.length>0?r:[28,35,18,878,27,10749,53,16];u(n.map(e=>({title:S.N2[e]??"Other",items:[],loading:!0})));let a=await Promise.all(n.map(t=>(0,S.NE)(e,o,{...i,genres:[t]}))),s=n.map((e,t)=>({title:S.N2[e]??"Other",items:a[t]??[],loading:!1})).filter(e=>e.items.length>0);u(s.length>0?s:[{title:"No Results",items:[],loading:!1}]);return}if("documentaries"===t){u([{title:"Documentaries",items:[],loading:!0}]),u([{title:"Documentaries",items:await (0,S.ag)(e),loading:!1}]);return}if("movies"===t){u([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,S.Zy)(e),(0,S.Kk)(e,"movie")]);u([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}]);return}if("tv"===t){u([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,S.eN)(e),(0,S.Kk)(e,"tv")]);u([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}]);return}let o=function(e,t=2){let i={};for(let t of e)for(let e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,T.qx)(),...(0,T.GB)()],2);u([{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...o.map(e=>({title:`More ${S.N2[e]??"Great"} Content`,loading:!0,items:[]}))]);let[r,n,a,s,l,...d]=await Promise.all([(0,S._F)(e),(0,S.Zy)(e),(0,S.eN)(e),(0,S.Kk)(e,"movie"),(0,S.ag)(e),...o.map(t=>(0,S.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]);I(r.filter(e=>e.backdrop_path).slice(0,5)),el(0),u([{title:"Trending This Week",items:r,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:s,loading:!1},{title:"Documentaries",items:l,loading:!1},...o.map((e,t)=>({title:`More ${S.N2[e]??"Great"} Content`,items:d[t]??[],loading:!1}))])},[]);(0,r.useEffect)(()=>{!n||eb||("discover"!==s&&I([]),eP(n,s,p).catch(()=>{}))},[n,s,p,eP,e$,i.ageMode,eb]);let eE=(0,r.useCallback)(e=>{l(e),eS("")},[]),eF=(0,r.useCallback)(e=>{g(e)},[]),eB=ej.trim().length>0,eA=z[es]??null,eD=("favorites"===s||"seen"===s)&&!f[0]?.loading&&f[0]?.items.length===0,eV=p.genres.length+p.providerIds.length+p.decades.length;if(!n)return(0,o.jsx)(y.H,{onSave:e=>{try{localStorage.setItem(M,e)}catch{}a(e)}});let eK=(0,o.jsxs)(J,{children:[(0,o.jsx)(h.A,{size:14,color:d.w4.colors.mainTextMuted}),(0,o.jsx)(Q,{placeholder:"Search…",value:ej,onChange:e=>eS(e.target.value)}),ej&&(0,o.jsx)(X,{onClick:()=>eS(""),"aria-label":"Clear",children:(0,o.jsx)(w.A,{size:13})})]});if(eb)return(0,o.jsx)(d.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,o.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:d.w4.colors.mainTextMuted,fontFamily:d.w4.typography.fontFamily,fontSize:d.w4.typography.fontSizeSm},children:"Loading…"})});if(ed){let t=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,o.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${d.w4.colors.border}`,borderRadius:d.w4.borderRadius.md,color:d.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:d.w4.typography.fontSizeSm,fontFamily:d.w4.typography.fontFamily,fontWeight:500,transition:`color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}`},onMouseEnter:e=>{e.currentTarget.style.color=d.w4.colors.mainText,e.currentTarget.style.borderColor=d.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=d.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=d.w4.colors.border},children:[(0,o.jsx)(b.A,{size:14}),(0,o.jsx)(_,{children:" Back"})]}),e]});return(0,o.jsx)(d.PE,{title:(0,S.rS)(ed),sidebar:null,topBarRight:t,children:(0,o.jsx)(k.P,{item:ed,apiKey:n,onBack:()=>history.back(),onLibraryChange:e_,onSelect:ep})})}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,o.jsxs)(o.Fragment,{children:[eK,e]}),children:(0,o.jsxs)(N,{children:[(0,o.jsxs)(W,{children:[R.map(({id:e,label:t,Icon:i})=>(0,o.jsxs)(q,{active:s===e,onClick:()=>eE(e),children:[(0,o.jsx)(i,{size:14}),t]},e)),(0,o.jsx)(Y,{children:(0,o.jsxs)(Z,{hasFilters:eV>0,onClick:()=>m(!0),children:[(0,o.jsx)(v.A,{size:13}),"Filter",eV>0&&(0,o.jsx)(H,{children:eV})]})})]}),eB?(0,o.jsxs)(ee,{children:[(0,o.jsx)(et,{children:(0,o.jsx)(ei,{children:ez?"Searching…":eT.length>0?`Results for "${ej}"`:`No results for "${ej}"`})}),ez||0!==eT.length?(0,o.jsx)($.U,{title:"",items:eT,loading:ez,onSelect:ep}):(0,o.jsxs)(eo,{children:[(0,o.jsx)("span",{style:{fontSize:44},children:"\uD83D\uDD0D"}),"Nothing found — try a different title"]})]}):(0,o.jsxs)(ee,{children:["discover"===s&&eA&&!eN&&(0,o.jsx)(P,{children:z.map((e,t)=>{let i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,o.jsx)(E,{src:i,active:t===es,children:(0,o.jsxs)(F,{children:[(0,o.jsx)(B,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,o.jsx)(A,{children:(0,S.rS)(e)}),(0,o.jsxs)(D,{children:[(0,o.jsxs)(V,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,o.jsx)(K,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,o.jsx)(L,{children:e.overview}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,o.jsx)(G,{onClick:()=>ep(e),children:"▶ More Info"}),(0,o.jsx)(O,{children:z.map((e,t)=>(0,o.jsx)(U,{active:t===es,onClick:()=>{clearInterval(eI.current),el(t)}},t))})]})]})},e.id)})}),eN&&(0,o.jsxs)(er,{children:[(0,o.jsx)("span",{style:{fontSize:12,color:d.w4.colors.mainTextMuted},children:"Active filters:"}),p.genres.map(e=>(0,o.jsx)(en,{children:S.N2[e]??e},e)),p.providerIds.map(e=>(0,o.jsx)(en,{children:S.Mw.find(t=>t.id===e)?.name??e},e)),p.decades.map(e=>(0,o.jsx)(en,{children:e},e)),(0,o.jsx)("button",{style:{background:"none",border:"none",color:d.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>g(ea),children:"Clear all"})]}),"discover"!==s&&(0,o.jsx)(et,{children:(0,o.jsx)(ei,{children:R.find(e=>e.id===s)?.label??""})}),eD?(0,o.jsxs)(eo,{children:[(0,o.jsx)("span",{style:{fontSize:44},children:"favorites"===s?"❤️":"\uD83D\uDC41️"}),"favorites"===s?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):f.map(e=>(0,o.jsx)($.U,{title:e.title,items:e.items,loading:e.loading,onSelect:ep},e.title))]},s)]})}),x&&(0,o.jsx)(j.K,{filters:p,onChange:eF,onClose:()=>m(!1)})]})},{}))}}]);