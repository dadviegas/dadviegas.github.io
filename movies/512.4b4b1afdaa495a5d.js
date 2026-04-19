"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([["512"],{8997(e,t,i){var o=i(2727);t.createRoot=o.createRoot,o.hydrateRoot},3611(e,t,i){var o=i(5723),r=i(7991),n=i(8997),a=i(6859),s=i.n(a),l=i(2799),d=i(5726),c=i(7032),p=i(1511),g=i(5031),x=i(7901),m=i(2709),u=i(1783),f=i(7681),h=i(4525),w=i(7180),b=i(7308),v=i(7613),y=i(6250),k=i(2819),$=i(1620),j=i(1801),S=i(4956);let T="atlantis:movies:apikey",M="9b6f2645abf1725625c843aa71e3efd5";function z(e){if(e)return e;if(M)return M;try{return localStorage.getItem(T)}catch{return null}}let C=[{id:"discover",label:"Discover",Icon:c.A},{id:"movies",label:"Movies",Icon:p.A},{id:"tv",label:"TV Shows",Icon:g.A},{id:"documentaries",label:"Documentaries",Icon:x.A},{id:"favorites",label:"My Favorites",Icon:m.A},{id:"seen",label:"Recently Seen",Icon:u.A}],R=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,I=s().span`
  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,_=s().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,N=s().div`
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
`,P=s().div`
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
`,F=s().span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 4px;
  width: fit-content;
  background: ${({kind:e})=>"movie"===e?"rgba(227,179,65,0.9)":"rgba(88,166,255,0.9)"};
  color: #000;
`,B=s().h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,A=s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,D=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,V=s().span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,K=s().p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,L=s().button`
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
`,G=s().div`
  display: flex;
  gap: 6px;
  align-items: center;
`,O=s().button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width ${d.w4.transitions.base}, background ${d.w4.transitions.base};
`,U=s().div`
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
`,W=s().button`
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
`,q=s().div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,Y=s().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${({hasFilters:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  background: ${({hasFilters:e})=>e?"rgba(88,166,255,0.12)":"none"};
  color: ${({hasFilters:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  transition: ${d.w4.transitions.fast};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover { border-color: ${d.w4.colors.accent}; color: ${d.w4.colors.accent}; }
`,Z=s().span`
  background: ${d.w4.colors.accent};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,H=s().div`
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
`,J=s().input`
  background: none;
  border: none;
  outline: none;
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${d.w4.typography.fontFamily};
  &::placeholder { color: ${d.w4.colors.mainTextMuted}; opacity: 0.7; }
`,Q=s().button`
  background: none;
  border: none;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${d.w4.colors.mainText}; }
`,X=s().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.xl};
  padding-bottom: ${d.w4.spacing.xxl};
  animation: ${R} 0.25s ease;
`,ee=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${d.w4.spacing.lg} ${d.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${d.w4.spacing.md};
`,et=s().h2`
  font-size: 22px;
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,ei=s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${d.w4.spacing.md};
  color: ${d.w4.colors.mainTextMuted};
  font-size: 15px;
`,eo=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,er=s().span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${d.w4.colors.accent};
`,en={genres:[],providerIds:[],decades:[]},ea=document.getElementById("root");if(!ea)throw Error("Root element #root not found");(0,n.createRoot)(ea).render((0,o.jsx)(function({topBarRight:e,apiKey:t}){let[i]=(0,d.xc)();(0,j.zJ)(i.ageMode);let[n,a]=(0,r.useState)(()=>z(t)),[s,l]=(0,r.useState)("discover"),[c,p]=(0,r.useState)(en),[g,x]=(0,r.useState)(!1),[m,u]=(0,r.useState)([]),[M,R]=(0,r.useState)([]),[ea,es]=(0,r.useState)(0),[el,ed]=(0,r.useState)(null),ec=(0,r.useCallback)(e=>{e&&(history.pushState({movieDetail:!0},""),(0,d.VF)("movies",{hash:`#/movies?id=${e.id}&type=${e.media_type}`,label:(0,j.rS)(e),iconName:"film",color:"tv"===e.media_type?"#3b82f6":"#f59e0b"})),ed(e)},[]);(0,r.useEffect)(()=>{let e=()=>{el&&ed(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[el]);let ep=(0,d.fy)(),eg=(0,r.useRef)(null),[ex,em]=(0,r.useState)(!1),eu=ep.id,ef=ep.type,eh=!!eu&&("movie"===ef||"tv"===ef),ew=eh&&!el&&!ex;(0,r.useEffect)(()=>{if(!n||!eh)return;let e=`${ef}:${eu}`;eg.current!==e&&(eg.current=e,em(!1),(async()=>{try{let e=await (0,j.Ug)(n,ef,Number(eu));ec({...e,genre_ids:e.genres?.map(e=>e.id)??[]})}catch{em(!0)}})())},[n,eh,eu,ef,ec]);let eb=ep.tab,ev=(0,r.useRef)(null);(0,r.useEffect)(()=>{!eb||eh||ev.current===eb||["discover","movies","tv","documentaries","favorites","seen"].includes(eb)&&(ev.current=eb,l(eb))},[eb,eh]);let[ey,ek]=(0,r.useState)(0),[e$,ej]=(0,r.useState)(""),[eS,eT]=(0,r.useState)([]),[eM,ez]=(0,r.useState)(!1),eC=(0,r.useRef)(),eR=(0,r.useRef)(),eI=(0,r.useCallback)(()=>ek(e=>e+1),[]);(0,r.useEffect)(()=>{a(z(t))},[t]),(0,r.useEffect)(()=>{if(!(M.length<2))return eR.current=setInterval(()=>{es(e=>(e+1)%M.length)},7e3),()=>clearInterval(eR.current)},[M.length]),(0,r.useEffect)(()=>{if(n){if(clearTimeout(eC.current),!e$.trim())return void eT([]);ez(!0),eC.current=setTimeout(async()=>{try{let e=await (0,j.$P)(n,e$.trim());eT(e)}catch{eT([])}finally{ez(!1)}},380)}},[n,e$]);let e_=c.genres.length>0||c.providerIds.length>0||c.decades.length>0,eN=(0,r.useCallback)(async(e,t,i)=>{if("favorites"===t)return void u([{title:"My Favorites",items:(0,S.qx)(),loading:!1}]);if("seen"===t)return void u([{title:"Recently Seen",items:(0,S.GB)(),loading:!1}]);if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){let o="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",r="documentaries"===t?[...i.genres,99]:i.genres,n=r.length>0?r:[28,35,18,878,27,10749,53,16];u(n.map(e=>({title:j.N2[e]??"Other",items:[],loading:!0})));let a=await Promise.all(n.map(t=>(0,j.NE)(e,o,{...i,genres:[t]}))),s=n.map((e,t)=>({title:j.N2[e]??"Other",items:a[t]??[],loading:!1})).filter(e=>e.items.length>0);u(s.length>0?s:[{title:"No Results",items:[],loading:!1}]);return}if("documentaries"===t){u([{title:"Documentaries",items:[],loading:!0}]),u([{title:"Documentaries",items:await (0,j.ag)(e),loading:!1}]);return}if("movies"===t){u([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,j.Zy)(e),(0,j.Kk)(e,"movie")]);u([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}]);return}if("tv"===t){u([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,j.eN)(e),(0,j.Kk)(e,"tv")]);u([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}]);return}let o=function(e,t=2){let i={};for(let t of e)for(let e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,S.qx)(),...(0,S.GB)()],2);u([{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...o.map(e=>({title:`More ${j.N2[e]??"Great"} Content`,loading:!0,items:[]}))]);let[r,n,a,s,l,...d]=await Promise.all([(0,j._F)(e),(0,j.Zy)(e),(0,j.eN)(e),(0,j.Kk)(e,"movie"),(0,j.ag)(e),...o.map(t=>(0,j.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]);R(r.filter(e=>e.backdrop_path).slice(0,5)),es(0),u([{title:"Trending This Week",items:r,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:s,loading:!1},{title:"Documentaries",items:l,loading:!1},...o.map((e,t)=>({title:`More ${j.N2[e]??"Great"} Content`,items:d[t]??[],loading:!1}))])},[]);(0,r.useEffect)(()=>{!n||ew||("discover"!==s&&R([]),eN(n,s,c).catch(()=>{}))},[n,s,c,eN,ey,i.ageMode,ew]);let eE=(0,r.useCallback)(e=>{l(e),ej("")},[]),eP=(0,r.useCallback)(e=>{p(e)},[]),eF=e$.trim().length>0,eB=M[ea]??null,eA=("favorites"===s||"seen"===s)&&!m[0]?.loading&&m[0]?.items.length===0,eD=c.genres.length+c.providerIds.length+c.decades.length;if(!n)return(0,o.jsx)(v.H,{onSave:e=>{try{localStorage.setItem(T,e)}catch{}a(e)}});let eV=(0,o.jsxs)(H,{children:[(0,o.jsx)(f.A,{size:14,color:d.w4.colors.mainTextMuted}),(0,o.jsx)(J,{placeholder:"Search…",value:e$,onChange:e=>ej(e.target.value)}),e$&&(0,o.jsx)(Q,{onClick:()=>ej(""),"aria-label":"Clear",children:(0,o.jsx)(h.A,{size:13})})]});if(ew)return(0,o.jsx)(d.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,o.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:d.w4.colors.mainTextMuted,fontFamily:d.w4.typography.fontFamily,fontSize:d.w4.typography.fontSizeSm},children:"Loading…"})});if(el){let t=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,o.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${d.w4.colors.border}`,borderRadius:d.w4.borderRadius.md,color:d.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:d.w4.typography.fontSizeSm,fontFamily:d.w4.typography.fontFamily,fontWeight:500,transition:`color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}`},onMouseEnter:e=>{e.currentTarget.style.color=d.w4.colors.mainText,e.currentTarget.style.borderColor=d.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=d.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=d.w4.colors.border},children:[(0,o.jsx)(w.A,{size:14}),(0,o.jsx)(I,{children:" Back"})]}),e]});return(0,o.jsx)(d.PE,{title:(0,j.rS)(el),sidebar:null,topBarRight:t,children:(0,o.jsx)(k.P,{item:el,apiKey:n,onBack:()=>history.back(),onLibraryChange:eI,onSelect:ec})})}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,o.jsxs)(o.Fragment,{children:[eV,e]}),children:(0,o.jsxs)(_,{children:[(0,o.jsxs)(U,{children:[C.map(({id:e,label:t,Icon:i})=>(0,o.jsxs)(W,{active:s===e,onClick:()=>eE(e),children:[(0,o.jsx)(i,{size:14}),t]},e)),(0,o.jsx)(q,{children:(0,o.jsxs)(Y,{hasFilters:eD>0,onClick:()=>x(!0),children:[(0,o.jsx)(b.A,{size:13}),"Filter",eD>0&&(0,o.jsx)(Z,{children:eD})]})})]}),eF?(0,o.jsxs)(X,{children:[(0,o.jsx)(ee,{children:(0,o.jsx)(et,{children:eM?"Searching…":eS.length>0?`Results for "${e$}"`:`No results for "${e$}"`})}),eM||0!==eS.length?(0,o.jsx)(y.U,{title:"",items:eS,loading:eM,onSelect:ec}):(0,o.jsxs)(ei,{children:[(0,o.jsx)("span",{style:{fontSize:44},children:"\uD83D\uDD0D"}),"Nothing found — try a different title"]})]}):(0,o.jsxs)(X,{children:["discover"===s&&eB&&!e_&&(0,o.jsx)(N,{children:M.map((e,t)=>{let i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,o.jsx)(E,{src:i,active:t===ea,children:(0,o.jsxs)(P,{children:[(0,o.jsx)(F,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,o.jsx)(B,{children:(0,j.rS)(e)}),(0,o.jsxs)(A,{children:[(0,o.jsxs)(D,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,o.jsx)(V,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,o.jsx)(K,{children:e.overview}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,o.jsx)(L,{onClick:()=>ec(e),children:"▶ More Info"}),(0,o.jsx)(G,{children:M.map((e,t)=>(0,o.jsx)(O,{active:t===ea,onClick:()=>{clearInterval(eR.current),es(t)}},t))})]})]})},e.id)})}),e_&&(0,o.jsxs)(eo,{children:[(0,o.jsx)("span",{style:{fontSize:12,color:d.w4.colors.mainTextMuted},children:"Active filters:"}),c.genres.map(e=>(0,o.jsx)(er,{children:j.N2[e]??e},e)),c.providerIds.map(e=>(0,o.jsx)(er,{children:j.Mw.find(t=>t.id===e)?.name??e},e)),c.decades.map(e=>(0,o.jsx)(er,{children:e},e)),(0,o.jsx)("button",{style:{background:"none",border:"none",color:d.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>p(en),children:"Clear all"})]}),"discover"!==s&&(0,o.jsx)(ee,{children:(0,o.jsx)(et,{children:C.find(e=>e.id===s)?.label??""})}),eA?(0,o.jsxs)(ei,{children:[(0,o.jsx)("span",{style:{fontSize:44},children:"favorites"===s?"❤️":"\uD83D\uDC41️"}),"favorites"===s?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):m.map(e=>(0,o.jsx)(y.U,{title:e.title,items:e.items,loading:e.loading,onSelect:ec},e.title))]},s)]})}),g&&(0,o.jsx)($.K,{filters:c,onChange:eP,onClose:()=>x(!1)})]})},{}))}}]);