"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([["362"],{3935(e,t,i){i.r(t),i.d(t,{default:()=>eo});var r=i(5723),o=i(7991),n=i(6859),a=i.n(n),l=i(2799),s=i(4174),d=i(7032),c=i(1511),p=i(5031),g=i(7901),x=i(2709),m=i(1783),u=i(7681),h=i(4525),f=i(7180),b=i(7308),w=i(7613),v=i(6250),y=i(2819),k=i(1620),j=i(1801),$=i(4956);let S="atlantis:movies:apikey",T="9b6f2645abf1725625c843aa71e3efd5";function M(e){if(e)return e;if(T)return T;try{return localStorage.getItem(S)}catch{return null}}let z=[{id:"discover",label:"Discover",Icon:d.A},{id:"movies",label:"Movies",Icon:c.A},{id:"tv",label:"TV Shows",Icon:p.A},{id:"documentaries",label:"Documentaries",Icon:g.A},{id:"favorites",label:"My Favorites",Icon:x.A},{id:"seen",label:"Recently Seen",Icon:m.A}],C=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,I=a().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,_=a().div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,N=a().div`
  position: ${({active:e})=>e?"relative":"absolute"};
  inset: 0;
  width: 100%;
  /* 16:9 matches TMDB backdrops exactly → no side cropping. Cap at 520px on large screens. */
  padding-top: min(56.25%, 520px);
  background: url(${({src:e})=>e}) center top / cover no-repeat;
  background-color: ${s.w4.colors.surface};
  opacity: ${({active:e})=>+!!e};
  transition: opacity 0.7s ease;
  pointer-events: ${({active:e})=>e?"all":"none"};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 78%, ${s.w4.colors.mainBg} 100%),
      linear-gradient(to right,  rgba(0,0,0,0.55) 0%, transparent 55%);
  }

  @media (max-width: 640px) {
    padding-top: min(56.25%, 260px);
  }
`,R=a().div`
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
`,P=a().span`
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
`,E=a().h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,F=a().div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,A=a().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,B=a().span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,D=a().p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,V=a().button`
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
  transition: opacity 0.15s, transform 0.1s;
  width: fit-content;
  -webkit-tap-highlight-color: transparent;

  &:hover { opacity: 0.88; }
  &:active { transform: scale(0.96); }
`,K=a().div`
  display: flex;
  gap: 6px;
  align-items: center;
`,L=a().button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width 0.25s ease, background 0.25s ease;
`,G=a().div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 16px;
  border-bottom: 1px solid ${s.w4.colors.border};
  background: ${s.w4.colors.mainBg};
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { display: none; }
`,O=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 13px 14px 12px;
  font-size: 13px;
  font-weight: ${({active:e})=>e?700:500};
  color: ${({active:e})=>e?s.w4.colors.mainText:s.w4.colors.mainTextMuted};
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s, border-color 0.15s;
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;

  &:hover { color: ${s.w4.colors.mainText}; }
`,U=a().div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,W=a().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${({hasFilters:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  background: ${({hasFilters:e})=>e?"rgba(88,166,255,0.12)":"none"};
  color: ${({hasFilters:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  transition: all 0.15s;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.accent}; }
`,q=a().span`
  background: ${s.w4.colors.accent};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,Y=a().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: 99px;
  padding: 5px 12px;
  transition: border-color 0.15s;
  width: 200px;

  @media (max-width: 640px) { width: 140px; }
  &:focus-within { border-color: ${s.w4.colors.accent}; }
`,Z=a().input`
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${s.w4.typography.fontFamily};
  &::placeholder { color: ${s.w4.colors.mainTextMuted}; opacity: 0.7; }
`,H=a().button`
  background: none;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${s.w4.colors.mainText}; }
`,J=a().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xl};
  padding-bottom: ${s.w4.spacing.xxl};
  animation: ${C} 0.25s ease;
`,Q=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${s.w4.spacing.lg} ${s.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.md};
`,X=a().h2`
  font-size: 22px;
  font-weight: 800;
  color: ${s.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,ee=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${s.w4.spacing.md};
  color: ${s.w4.colors.mainTextMuted};
  font-size: 15px;
`,et=a().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${s.w4.spacing.md} ${s.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,ei=a().span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${s.w4.colors.accent};
`,er={genres:[],providerIds:[],decades:[]};function eo({topBarRight:e,apiKey:t}){let[i]=(0,s.xc)();(0,j.zJ)(i.ageMode);let[n,a]=(0,o.useState)(()=>M(t)),[l,d]=(0,o.useState)("discover"),[c,p]=(0,o.useState)(er),[g,x]=(0,o.useState)(!1),[m,T]=(0,o.useState)([]),[C,en]=(0,o.useState)([]),[ea,el]=(0,o.useState)(0),[es,ed]=(0,o.useState)(null),ec=(0,o.useCallback)(e=>{e&&history.pushState({movieDetail:!0},""),ed(e)},[]);(0,o.useEffect)(()=>{let e=()=>{es&&ed(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[es]);let ep=(0,s.fy)(),eg=(0,o.useRef)(null),[ex,em]=(0,o.useState)(!1),eu=ep.id,eh=ep.type,ef=!!eu&&("movie"===eh||"tv"===eh),eb=ef&&!es&&!ex;(0,o.useEffect)(()=>{if(!n||!ef)return;let e=`${eh}:${eu}`;eg.current!==e&&(eg.current=e,em(!1),(async()=>{try{let e=await (0,j.Ug)(n,eh,Number(eu));ec({...e,genre_ids:e.genres?.map(e=>e.id)??[]})}catch{em(!0)}})())},[n,ef,eu,eh,ec]);let[ew,ev]=(0,o.useState)(0),[ey,ek]=(0,o.useState)(""),[ej,e$]=(0,o.useState)([]),[eS,eT]=(0,o.useState)(!1),eM=(0,o.useRef)(),ez=(0,o.useRef)(),eC=(0,o.useCallback)(()=>ev(e=>e+1),[]);(0,o.useEffect)(()=>{a(M(t))},[t]),(0,o.useEffect)(()=>{if(!(C.length<2))return ez.current=setInterval(()=>{el(e=>(e+1)%C.length)},7e3),()=>clearInterval(ez.current)},[C.length]),(0,o.useEffect)(()=>{if(n){if(clearTimeout(eM.current),!ey.trim())return void e$([]);eT(!0),eM.current=setTimeout(async()=>{try{let e=await (0,j.$P)(n,ey.trim());e$(e)}catch{e$([])}finally{eT(!1)}},380)}},[n,ey]);let eI=c.genres.length>0||c.providerIds.length>0||c.decades.length>0,e_=(0,o.useCallback)(async(e,t,i)=>{if("favorites"===t)return void T([{title:"My Favorites",items:(0,$.qx)(),loading:!1}]);if("seen"===t)return void T([{title:"Recently Seen",items:(0,$.GB)(),loading:!1}]);if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){let r="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",o="documentaries"===t?[...i.genres,99]:i.genres,n=o.length>0?o:[28,35,18,878,27,10749,53,16];T(n.map(e=>({title:j.N2[e]??"Other",items:[],loading:!0})));let a=await Promise.all(n.map(t=>(0,j.NE)(e,r,{...i,genres:[t]}))),l=n.map((e,t)=>({title:j.N2[e]??"Other",items:a[t]??[],loading:!1})).filter(e=>e.items.length>0);T(l.length>0?l:[{title:"No Results",items:[],loading:!1}]);return}if("documentaries"===t){T([{title:"Documentaries",items:[],loading:!0}]),T([{title:"Documentaries",items:await (0,j.ag)(e),loading:!1}]);return}if("movies"===t){T([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,j.Zy)(e),(0,j.Kk)(e,"movie")]);T([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}]);return}if("tv"===t){T([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,j.eN)(e),(0,j.Kk)(e,"tv")]);T([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}]);return}let r=function(e,t=2){let i={};for(let t of e)for(let e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,$.qx)(),...(0,$.GB)()],2);T([{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...r.map(e=>({title:`More ${j.N2[e]??"Great"} Content`,loading:!0,items:[]}))]);let[o,n,a,l,s,...d]=await Promise.all([(0,j._F)(e),(0,j.Zy)(e),(0,j.eN)(e),(0,j.Kk)(e,"movie"),(0,j.ag)(e),...r.map(t=>(0,j.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]);en(o.filter(e=>e.backdrop_path).slice(0,5)),el(0),T([{title:"Trending This Week",items:o,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:l,loading:!1},{title:"Documentaries",items:s,loading:!1},...r.map((e,t)=>({title:`More ${j.N2[e]??"Great"} Content`,items:d[t]??[],loading:!1}))])},[]);(0,o.useEffect)(()=>{!n||eb||("discover"!==l&&en([]),e_(n,l,c).catch(()=>{}))},[n,l,c,e_,ew,i.ageMode,eb]);let eN=(0,o.useCallback)(e=>{d(e),ek("")},[]),eR=(0,o.useCallback)(e=>{p(e)},[]),eP=ey.trim().length>0,eE=C[ea]??null,eF=("favorites"===l||"seen"===l)&&!m[0]?.loading&&m[0]?.items.length===0,eA=c.genres.length+c.providerIds.length+c.decades.length;if(!n)return(0,r.jsx)(w.H,{onSave:e=>{try{localStorage.setItem(S,e)}catch{}a(e)}});let eB=(0,r.jsxs)(Y,{children:[(0,r.jsx)(u.A,{size:14,color:s.w4.colors.mainTextMuted}),(0,r.jsx)(Z,{placeholder:"Search…",value:ey,onChange:e=>ek(e.target.value)}),ey&&(0,r.jsx)(H,{onClick:()=>ek(""),"aria-label":"Clear",children:(0,r.jsx)(h.A,{size:13})})]});if(eb)return(0,r.jsx)(s.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,r.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:s.w4.colors.mainTextMuted,fontFamily:s.w4.typography.fontFamily,fontSize:s.w4.typography.fontSizeSm},children:"Loading…"})});if(es){let t=(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,r.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${s.w4.colors.border}`,borderRadius:s.w4.borderRadius.md,color:s.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:s.w4.typography.fontSizeSm,fontFamily:s.w4.typography.fontFamily,fontWeight:500,transition:"color 0.15s, border-color 0.15s"},onMouseEnter:e=>{e.currentTarget.style.color=s.w4.colors.mainText,e.currentTarget.style.borderColor=s.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=s.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=s.w4.colors.border},children:[(0,r.jsx)(f.A,{size:14})," Back"]}),e]});return(0,r.jsx)(s.PE,{title:(0,j.rS)(es),sidebar:null,topBarRight:t,children:(0,r.jsx)(y.P,{item:es,apiKey:n,onBack:()=>history.back(),onLibraryChange:eC,onSelect:ec})})}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,r.jsxs)(r.Fragment,{children:[eB,e]}),children:(0,r.jsxs)(I,{children:[(0,r.jsxs)(G,{children:[z.map(({id:e,label:t,Icon:i})=>(0,r.jsxs)(O,{active:l===e,onClick:()=>eN(e),children:[(0,r.jsx)(i,{size:14}),t]},e)),(0,r.jsx)(U,{children:(0,r.jsxs)(W,{hasFilters:eA>0,onClick:()=>x(!0),children:[(0,r.jsx)(b.A,{size:13}),"Filter",eA>0&&(0,r.jsx)(q,{children:eA})]})})]}),eP?(0,r.jsxs)(J,{children:[(0,r.jsx)(Q,{children:(0,r.jsx)(X,{children:eS?"Searching…":ej.length>0?`Results for "${ey}"`:`No results for "${ey}"`})}),eS||0!==ej.length?(0,r.jsx)(v.U,{title:"",items:ej,loading:eS,onSelect:ec}):(0,r.jsxs)(ee,{children:[(0,r.jsx)("span",{style:{fontSize:44},children:"\uD83D\uDD0D"}),"Nothing found — try a different title"]})]}):(0,r.jsxs)(J,{children:["discover"===l&&eE&&!eI&&(0,r.jsx)(_,{children:C.map((e,t)=>{let i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,r.jsx)(N,{src:i,active:t===ea,children:(0,r.jsxs)(R,{children:[(0,r.jsx)(P,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,r.jsx)(E,{children:(0,j.rS)(e)}),(0,r.jsxs)(F,{children:[(0,r.jsxs)(A,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,r.jsx)(B,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,r.jsx)(D,{children:e.overview}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,r.jsx)(V,{onClick:()=>ec(e),children:"▶ More Info"}),(0,r.jsx)(K,{children:C.map((e,t)=>(0,r.jsx)(L,{active:t===ea,onClick:()=>{clearInterval(ez.current),el(t)}},t))})]})]})},e.id)})}),eI&&(0,r.jsxs)(et,{children:[(0,r.jsx)("span",{style:{fontSize:12,color:s.w4.colors.mainTextMuted},children:"Active filters:"}),c.genres.map(e=>(0,r.jsx)(ei,{children:j.N2[e]??e},e)),c.providerIds.map(e=>(0,r.jsx)(ei,{children:j.Mw.find(t=>t.id===e)?.name??e},e)),c.decades.map(e=>(0,r.jsx)(ei,{children:e},e)),(0,r.jsx)("button",{style:{background:"none",border:"none",color:s.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>p(er),children:"Clear all"})]}),"discover"!==l&&(0,r.jsx)(Q,{children:(0,r.jsx)(X,{children:z.find(e=>e.id===l)?.label??""})}),eF?(0,r.jsxs)(ee,{children:[(0,r.jsx)("span",{style:{fontSize:44},children:"favorites"===l?"❤️":"\uD83D\uDC41️"}),"favorites"===l?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):m.map(e=>(0,r.jsx)(v.U,{title:e.title,items:e.items,loading:e.loading,onSelect:ec},e.title))]},l)]})}),g&&(0,r.jsx)(k.K,{filters:c,onChange:eR,onClose:()=>x(!1)})]})}}}]);