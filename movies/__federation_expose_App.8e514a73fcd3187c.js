"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([["362"],{3935(e,t,i){i.r(t),i.d(t,{default:()=>en});var r=i(5723),o=i(7991),n=i(6859),a=i.n(n),s=i(2799),l=i(5726),d=i(7032),c=i(1511),p=i(5031),g=i(7901),x=i(2709),m=i(1783),u=i(7681),f=i(4525),h=i(7180),w=i(7308),b=i(7613),v=i(6250),y=i(2819),k=i(1620),$=i(1801),j=i(4956);let S="atlantis:movies:apikey",T="9b6f2645abf1725625c843aa71e3efd5";function M(e){if(e)return e;if(T)return T;try{return localStorage.getItem(S)}catch{return null}}let z=[{id:"discover",label:"Discover",Icon:d.A},{id:"movies",label:"Movies",Icon:c.A},{id:"tv",label:"TV Shows",Icon:p.A},{id:"documentaries",label:"Documentaries",Icon:g.A},{id:"favorites",label:"My Favorites",Icon:x.A},{id:"seen",label:"Recently Seen",Icon:m.A}],C=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,I=a().span`
  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,_=a().div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,N=a().div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,R=a().div`
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
`,P=a().div`
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
`,E=a().span`
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
`,F=a().h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,A=a().div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,B=a().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,D=a().span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,V=a().p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,K=a().button`
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
`,L=a().div`
  display: flex;
  gap: 6px;
  align-items: center;
`,G=a().button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width ${l.w4.transitions.base}, background ${l.w4.transitions.base};
`,O=a().div`
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
`,U=a().button`
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
`,W=a().div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,q=a().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${({hasFilters:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  background: ${({hasFilters:e})=>e?"rgba(88,166,255,0.12)":"none"};
  color: ${({hasFilters:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  transition: ${l.w4.transitions.fast};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,Y=a().span`
  background: ${l.w4.colors.accent};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,Z=a().div`
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
`,H=a().input`
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${l.w4.typography.fontFamily};
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; opacity: 0.7; }
`,J=a().button`
  background: none;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${l.w4.colors.mainText}; }
`,Q=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  padding-bottom: ${l.w4.spacing.xxl};
  animation: ${C} 0.25s ease;
`,X=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
`,ee=a().h2`
  font-size: 22px;
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,et=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${l.w4.spacing.md};
  color: ${l.w4.colors.mainTextMuted};
  font-size: 15px;
`,ei=a().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,er=a().span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${l.w4.colors.accent};
`,eo={genres:[],providerIds:[],decades:[]};function en({topBarRight:e,apiKey:t}){let[i]=(0,l.xc)();(0,$.zJ)(i.ageMode);let[n,a]=(0,o.useState)(()=>M(t)),[s,d]=(0,o.useState)("discover"),[c,p]=(0,o.useState)(eo),[g,x]=(0,o.useState)(!1),[m,T]=(0,o.useState)([]),[C,ea]=(0,o.useState)([]),[es,el]=(0,o.useState)(0),[ed,ec]=(0,o.useState)(null),ep=(0,o.useCallback)(e=>{e&&(history.pushState({movieDetail:!0},""),(0,l.VF)("movies",{hash:`#/movies?id=${e.id}&type=${e.media_type}`,label:(0,$.rS)(e),iconName:"film",color:"tv"===e.media_type?"#3b82f6":"#f59e0b"})),ec(e)},[]);(0,o.useEffect)(()=>{let e=()=>{ed&&ec(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[ed]);let eg=(0,l.fy)(),ex=(0,o.useRef)(null),[em,eu]=(0,o.useState)(!1),ef=eg.id,eh=eg.type,ew=!!ef&&("movie"===eh||"tv"===eh),eb=ew&&!ed&&!em;(0,o.useEffect)(()=>{if(!n||!ew)return;let e=`${eh}:${ef}`;ex.current!==e&&(ex.current=e,eu(!1),(async()=>{try{let e=await (0,$.Ug)(n,eh,Number(ef));ep({...e,genre_ids:e.genres?.map(e=>e.id)??[]})}catch{eu(!0)}})())},[n,ew,ef,eh,ep]);let ev=eg.tab,ey=(0,o.useRef)(null);(0,o.useEffect)(()=>{!ev||ew||ey.current===ev||["discover","movies","tv","documentaries","favorites","seen"].includes(ev)&&(ey.current=ev,d(ev))},[ev,ew]);let[ek,e$]=(0,o.useState)(0),[ej,eS]=(0,o.useState)(""),[eT,eM]=(0,o.useState)([]),[ez,eC]=(0,o.useState)(!1),eI=(0,o.useRef)(),e_=(0,o.useRef)(),eN=(0,o.useCallback)(()=>e$(e=>e+1),[]);(0,o.useEffect)(()=>{a(M(t))},[t]),(0,o.useEffect)(()=>{if(!(C.length<2))return e_.current=setInterval(()=>{el(e=>(e+1)%C.length)},7e3),()=>clearInterval(e_.current)},[C.length]),(0,o.useEffect)(()=>{if(n){if(clearTimeout(eI.current),!ej.trim())return void eM([]);eC(!0),eI.current=setTimeout(async()=>{try{let e=await (0,$.$P)(n,ej.trim());eM(e)}catch{eM([])}finally{eC(!1)}},380)}},[n,ej]);let eR=c.genres.length>0||c.providerIds.length>0||c.decades.length>0,eP=(0,o.useCallback)(async(e,t,i)=>{if("favorites"===t)return void T([{title:"My Favorites",items:(0,j.qx)(),loading:!1}]);if("seen"===t)return void T([{title:"Recently Seen",items:(0,j.GB)(),loading:!1}]);if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){let r="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",o="documentaries"===t?[...i.genres,99]:i.genres,n=o.length>0?o:[28,35,18,878,27,10749,53,16];T(n.map(e=>({title:$.N2[e]??"Other",items:[],loading:!0})));let a=await Promise.all(n.map(t=>(0,$.NE)(e,r,{...i,genres:[t]}))),s=n.map((e,t)=>({title:$.N2[e]??"Other",items:a[t]??[],loading:!1})).filter(e=>e.items.length>0);T(s.length>0?s:[{title:"No Results",items:[],loading:!1}]);return}if("documentaries"===t){T([{title:"Documentaries",items:[],loading:!0}]),T([{title:"Documentaries",items:await (0,$.ag)(e),loading:!1}]);return}if("movies"===t){T([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,$.Zy)(e),(0,$.Kk)(e,"movie")]);T([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}]);return}if("tv"===t){T([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);let[t,i]=await Promise.all([(0,$.eN)(e),(0,$.Kk)(e,"tv")]);T([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}]);return}let r=function(e,t=2){let i={};for(let t of e)for(let e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,j.qx)(),...(0,j.GB)()],2);T([{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...r.map(e=>({title:`More ${$.N2[e]??"Great"} Content`,loading:!0,items:[]}))]);let[o,n,a,s,l,...d]=await Promise.all([(0,$._F)(e),(0,$.Zy)(e),(0,$.eN)(e),(0,$.Kk)(e,"movie"),(0,$.ag)(e),...r.map(t=>(0,$.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]);ea(o.filter(e=>e.backdrop_path).slice(0,5)),el(0),T([{title:"Trending This Week",items:o,loading:!1},{title:"Popular Movies",items:n,loading:!1},{title:"Popular TV Shows",items:a,loading:!1},{title:"Top Rated Movies",items:s,loading:!1},{title:"Documentaries",items:l,loading:!1},...r.map((e,t)=>({title:`More ${$.N2[e]??"Great"} Content`,items:d[t]??[],loading:!1}))])},[]);(0,o.useEffect)(()=>{!n||eb||("discover"!==s&&ea([]),eP(n,s,c).catch(()=>{}))},[n,s,c,eP,ek,i.ageMode,eb]);let eE=(0,o.useCallback)(e=>{d(e),eS("")},[]),eF=(0,o.useCallback)(e=>{p(e)},[]),eA=ej.trim().length>0,eB=C[es]??null,eD=("favorites"===s||"seen"===s)&&!m[0]?.loading&&m[0]?.items.length===0,eV=c.genres.length+c.providerIds.length+c.decades.length;if(!n)return(0,r.jsx)(b.H,{onSave:e=>{try{localStorage.setItem(S,e)}catch{}a(e)}});let eK=(0,r.jsxs)(Z,{children:[(0,r.jsx)(u.A,{size:14,color:l.w4.colors.mainTextMuted}),(0,r.jsx)(H,{placeholder:"Search…",value:ej,onChange:e=>eS(e.target.value)}),ej&&(0,r.jsx)(J,{onClick:()=>eS(""),"aria-label":"Clear",children:(0,r.jsx)(f.A,{size:13})})]});if(eb)return(0,r.jsx)(l.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,r.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:l.w4.colors.mainTextMuted,fontFamily:l.w4.typography.fontFamily,fontSize:l.w4.typography.fontSizeSm},children:"Loading…"})});if(ed){let t=(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,r.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,color:l.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:l.w4.typography.fontSizeSm,fontFamily:l.w4.typography.fontFamily,fontWeight:500,transition:`color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}`},onMouseEnter:e=>{e.currentTarget.style.color=l.w4.colors.mainText,e.currentTarget.style.borderColor=l.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=l.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=l.w4.colors.border},children:[(0,r.jsx)(h.A,{size:14}),(0,r.jsx)(I,{children:" Back"})]}),e]});return(0,r.jsx)(l.PE,{title:(0,$.rS)(ed),sidebar:null,topBarRight:t,children:(0,r.jsx)(y.P,{item:ed,apiKey:n,onBack:()=>history.back(),onLibraryChange:eN,onSelect:ep})})}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,r.jsxs)(r.Fragment,{children:[eK,e]}),children:(0,r.jsxs)(_,{children:[(0,r.jsxs)(O,{children:[z.map(({id:e,label:t,Icon:i})=>(0,r.jsxs)(U,{active:s===e,onClick:()=>eE(e),children:[(0,r.jsx)(i,{size:14}),t]},e)),(0,r.jsx)(W,{children:(0,r.jsxs)(q,{hasFilters:eV>0,onClick:()=>x(!0),children:[(0,r.jsx)(w.A,{size:13}),"Filter",eV>0&&(0,r.jsx)(Y,{children:eV})]})})]}),eA?(0,r.jsxs)(Q,{children:[(0,r.jsx)(X,{children:(0,r.jsx)(ee,{children:ez?"Searching…":eT.length>0?`Results for "${ej}"`:`No results for "${ej}"`})}),ez||0!==eT.length?(0,r.jsx)(v.U,{title:"",items:eT,loading:ez,onSelect:ep}):(0,r.jsxs)(et,{children:[(0,r.jsx)("span",{style:{fontSize:44},children:"\uD83D\uDD0D"}),"Nothing found — try a different title"]})]}):(0,r.jsxs)(Q,{children:["discover"===s&&eB&&!eR&&(0,r.jsx)(N,{children:C.map((e,t)=>{let i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,r.jsx)(R,{src:i,active:t===es,children:(0,r.jsxs)(P,{children:[(0,r.jsx)(E,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,r.jsx)(F,{children:(0,$.rS)(e)}),(0,r.jsxs)(A,{children:[(0,r.jsxs)(B,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,r.jsx)(D,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,r.jsx)(V,{children:e.overview}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,r.jsx)(K,{onClick:()=>ep(e),children:"▶ More Info"}),(0,r.jsx)(L,{children:C.map((e,t)=>(0,r.jsx)(G,{active:t===es,onClick:()=>{clearInterval(e_.current),el(t)}},t))})]})]})},e.id)})}),eR&&(0,r.jsxs)(ei,{children:[(0,r.jsx)("span",{style:{fontSize:12,color:l.w4.colors.mainTextMuted},children:"Active filters:"}),c.genres.map(e=>(0,r.jsx)(er,{children:$.N2[e]??e},e)),c.providerIds.map(e=>(0,r.jsx)(er,{children:$.Mw.find(t=>t.id===e)?.name??e},e)),c.decades.map(e=>(0,r.jsx)(er,{children:e},e)),(0,r.jsx)("button",{style:{background:"none",border:"none",color:l.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>p(eo),children:"Clear all"})]}),"discover"!==s&&(0,r.jsx)(X,{children:(0,r.jsx)(ee,{children:z.find(e=>e.id===s)?.label??""})}),eD?(0,r.jsxs)(et,{children:[(0,r.jsx)("span",{style:{fontSize:44},children:"favorites"===s?"❤️":"\uD83D\uDC41️"}),"favorites"===s?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):m.map(e=>(0,r.jsx)(v.U,{title:e.title,items:e.items,loading:e.loading,onSelect:ep},e.title))]},s)]})}),g&&(0,r.jsx)(k.K,{filters:c,onChange:eF,onClose:()=>x(!1)})]})}}}]);