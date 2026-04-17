"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[188],{188(e,t,i){var o=i(7359),r=i(8997),n=i(3233),a=i(7207),s=i(9178),l=i(7032),d=i(1511),c=i(5031),p=i(7901),g=i(2709),x=i(1783),u=i(7681),f=i(4525),m=i(7180),h=i(7308),b=i(5056),w=i(6127),v=i(6260),y=i(1385),k=i(7390),j=i(2053),$=i(5723);const T="atlantis:movies:apikey",S="9b6f2645abf1725625c843aa71e3efd5";function M(e){if(e)return e;if(S)return S;try{return localStorage.getItem(T)}catch{return null}}const z=[{id:"discover",label:"Discover",Icon:l.A},{id:"movies",label:"Movies",Icon:d.A},{id:"tv",label:"TV Shows",Icon:c.A},{id:"documentaries",label:"Documentaries",Icon:p.A},{id:"favorites",label:"My Favorites",Icon:g.A},{id:"seen",label:"Recently Seen",Icon:x.A}],C=a.keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,I=n.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: ${s.w4.colors.border} transparent;
`,R=n.default.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,_=n.default.div`
  position: ${({active:e})=>e?"relative":"absolute"};
  inset: 0;
  width: 100%;
  /* 16:9 matches TMDB backdrops exactly → no side cropping. Cap at 520px on large screens. */
  padding-top: min(56.25%, 520px);
  background: url(${({src:e})=>e}) center top / cover no-repeat;
  background-color: ${s.w4.colors.surface};
  opacity: ${({active:e})=>e?1:0};
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
`,N=n.default.div`
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
`,P=n.default.span`
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
`,F=n.default.h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,E=n.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,B=n.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,A=n.default.span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,D=n.default.p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,V=n.default.button`
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
`,K=n.default.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,G=n.default.button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width 0.25s ease, background 0.25s ease;
`,L=n.default.div`
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
`,H=n.default.button`
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
`,O=n.default.div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,W=n.default.button`
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
`,q=n.default.span`
  background: ${s.w4.colors.accent};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,U=n.default.div`
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
`,Y=n.default.input`
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${s.w4.typography.fontFamily};
  &::placeholder { color: ${s.w4.colors.mainTextMuted}; opacity: 0.7; }
`,Z=n.default.button`
  background: none;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${s.w4.colors.mainText}; }
`,J=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xl};
  padding-bottom: ${s.w4.spacing.xxl};
  animation: ${C} 0.25s ease;
`,Q=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${s.w4.spacing.lg} ${s.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.md};
`,X=n.default.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${s.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,ee=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${s.w4.spacing.md};
  color: ${s.w4.colors.mainTextMuted};
  font-size: 15px;
`,te=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${s.w4.spacing.md} ${s.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,ie=n.default.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${s.w4.colors.accent};
`,oe={genres:[],providerIds:[],decades:[]};function re({topBarRight:e,apiKey:t}){const[i,r]=(0,o.useState)(()=>M(t)),[n,a]=(0,o.useState)("discover"),[l,d]=(0,o.useState)(oe),[c,p]=(0,o.useState)(!1),[g,x]=(0,o.useState)([]),[S,C]=(0,o.useState)([]),[re,ne]=(0,o.useState)(0),[ae,se]=(0,o.useState)(null),le=(0,o.useCallback)(e=>{e&&history.pushState({movieDetail:!0},""),se(e)},[]);(0,o.useEffect)(()=>{const e=()=>{ae&&se(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[ae]);const[de,ce]=(0,o.useState)(0),[pe,ge]=(0,o.useState)(""),[xe,ue]=(0,o.useState)([]),[fe,me]=(0,o.useState)(!1),he=(0,o.useRef)(),be=(0,o.useRef)(),we=(0,o.useCallback)(()=>ce(e=>e+1),[]);(0,o.useEffect)(()=>{r(M(t))},[t]),(0,o.useEffect)(()=>{if(!(S.length<2))return be.current=setInterval(()=>{ne(e=>(e+1)%S.length)},7e3),()=>clearInterval(be.current)},[S.length]),(0,o.useEffect)(()=>{i&&(clearTimeout(he.current),pe.trim()?(me(!0),he.current=setTimeout(async()=>{try{const e=await(0,k.$P)(i,pe.trim());ue(e)}catch{ue([])}finally{me(!1)}},380)):ue([]))},[i,pe]);const ve=l.genres.length>0||l.providerIds.length>0||l.decades.length>0,ye=(0,o.useCallback)(async(e,t,i)=>{if("favorites"===t){const e=(0,j.qx)();return void x([{title:"My Favorites",items:e,loading:!1}])}if("seen"===t){const e=(0,j.GB)();return void x([{title:"Recently Seen",items:e,loading:!1}])}if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){const o="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",r="documentaries"===t?[...i.genres,99]:i.genres,n=r.length>0?r:[28,35,18,878,27,10749,53,16],a=n.map(e=>({title:k.N2[e]??"Other",items:[],loading:!0}));x(a);const s=await Promise.all(n.map(t=>(0,k.NE)(e,o,{...i,genres:[t]}))),l=n.map((e,t)=>({title:k.N2[e]??"Other",items:s[t]??[],loading:!1})).filter(e=>e.items.length>0);return void x(l.length>0?l:[{title:"No Results",items:[],loading:!1}])}if("documentaries"===t){x([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,k.ag)(e);return void x([{title:"Documentaries",items:t,loading:!1}])}if("movies"===t){x([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,k.Zy)(e),(0,k.Kk)(e,"movie")]);return void x([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("tv"===t){x([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,k.eN)(e),(0,k.Kk)(e,"tv")]);return void x([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}const o=function(e,t=2){const i={};for(const t of e)for(const e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,j.qx)(),...(0,j.GB)()],2),r=[{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...o.map(e=>({title:`More ${k.N2[e]??"Great"} Content`,loading:!0,items:[]}))];x(r);const[n,a,s,l,d,...c]=await Promise.all([(0,k._F)(e),(0,k.Zy)(e),(0,k.eN)(e),(0,k.Kk)(e,"movie"),(0,k.ag)(e),...o.map(t=>(0,k.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]),p=n.filter(e=>e.backdrop_path).slice(0,5);C(p),ne(0),x([{title:"Trending This Week",items:n,loading:!1},{title:"Popular Movies",items:a,loading:!1},{title:"Popular TV Shows",items:s,loading:!1},{title:"Top Rated Movies",items:l,loading:!1},{title:"Documentaries",items:d,loading:!1},...o.map((e,t)=>({title:`More ${k.N2[e]??"Great"} Content`,items:c[t]??[],loading:!1}))])},[]);(0,o.useEffect)(()=>{i&&("discover"!==n&&C([]),ye(i,n,l).catch(()=>{}))},[i,n,l,ye,de]);const ke=(0,o.useCallback)(e=>{a(e),ge("")},[]),je=(0,o.useCallback)(e=>{d(e)},[]),$e=pe.trim().length>0,Te=S[re]??null,Se=("favorites"===n||"seen"===n)&&!g[0]?.loading&&0===g[0]?.items.length,Me=l.genres.length+l.providerIds.length+l.decades.length;if(!i)return(0,$.jsx)(b.H,{onSave:e=>{!function(e){try{localStorage.setItem(T,e)}catch{}}(e),r(e)}});const ze=(0,$.jsxs)(U,{children:[(0,$.jsx)(u.A,{size:14,color:s.w4.colors.mainTextMuted}),(0,$.jsx)(Y,{placeholder:"Search…",value:pe,onChange:e=>ge(e.target.value)}),pe&&(0,$.jsx)(Z,{onClick:()=>ge(""),"aria-label":"Clear",children:(0,$.jsx)(f.A,{size:13})})]});if(ae){const t=(0,$.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,$.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${s.w4.colors.border}`,borderRadius:s.w4.borderRadius.md,color:s.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:s.w4.typography.fontSizeSm,fontFamily:s.w4.typography.fontFamily,fontWeight:500,transition:"color 0.15s, border-color 0.15s"},onMouseEnter:e=>{e.currentTarget.style.color=s.w4.colors.mainText,e.currentTarget.style.borderColor=s.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=s.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=s.w4.colors.border},children:[(0,$.jsx)(m.A,{size:14})," Back"]}),e]});return(0,$.jsx)(s.PE,{title:(0,k.rS)(ae),sidebar:null,topBarRight:t,children:(0,$.jsx)(v.P,{item:ae,apiKey:i,onBack:()=>history.back(),onLibraryChange:we,onSelect:le})})}return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(s.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,$.jsxs)($.Fragment,{children:[ze,e]}),children:(0,$.jsxs)(I,{children:[(0,$.jsxs)(L,{children:[z.map(({id:e,label:t,Icon:i})=>(0,$.jsxs)(H,{active:n===e,onClick:()=>ke(e),children:[(0,$.jsx)(i,{size:14}),t]},e)),(0,$.jsx)(O,{children:(0,$.jsxs)(W,{hasFilters:Me>0,onClick:()=>p(!0),children:[(0,$.jsx)(h.A,{size:13}),"Filter",Me>0&&(0,$.jsx)(q,{children:Me})]})})]}),$e?(0,$.jsxs)(J,{children:[(0,$.jsx)(Q,{children:(0,$.jsx)(X,{children:fe?"Searching…":xe.length>0?`Results for "${pe}"`:`No results for "${pe}"`})}),fe||0!==xe.length?(0,$.jsx)(w.U,{title:"",items:xe,loading:fe,onSelect:le}):(0,$.jsxs)(ee,{children:[(0,$.jsx)("span",{style:{fontSize:44},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,$.jsxs)(J,{children:["discover"===n&&Te&&!ve&&(0,$.jsx)(R,{children:S.map((e,t)=>{const i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,$.jsx)(_,{src:i,active:t===re,children:(0,$.jsxs)(N,{children:[(0,$.jsx)(P,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,$.jsx)(F,{children:(0,k.rS)(e)}),(0,$.jsxs)(E,{children:[(0,$.jsxs)(B,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,$.jsx)(A,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,$.jsx)(D,{children:e.overview}),(0,$.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,$.jsx)(V,{onClick:()=>le(e),children:"▶ More Info"}),(0,$.jsx)(K,{children:S.map((e,t)=>(0,$.jsx)(G,{active:t===re,onClick:()=>{clearInterval(be.current),ne(t)}},t))})]})]})},e.id)})}),ve&&(0,$.jsxs)(te,{children:[(0,$.jsx)("span",{style:{fontSize:12,color:s.w4.colors.mainTextMuted},children:"Active filters:"}),l.genres.map(e=>(0,$.jsx)(ie,{children:k.N2[e]??e},e)),l.providerIds.map(e=>(0,$.jsx)(ie,{children:k.Mw.find(t=>t.id===e)?.name??e},e)),l.decades.map(e=>(0,$.jsx)(ie,{children:e},e)),(0,$.jsx)("button",{style:{background:"none",border:"none",color:s.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>d(oe),children:"Clear all"})]}),"discover"!==n&&(0,$.jsx)(Q,{children:(0,$.jsx)(X,{children:z.find(e=>e.id===n)?.label??""})}),Se?(0,$.jsxs)(ee,{children:[(0,$.jsx)("span",{style:{fontSize:44},children:"favorites"===n?"❤️":"👁️"}),"favorites"===n?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):g.map(e=>(0,$.jsx)(w.U,{title:e.title,items:e.items,loading:e.loading,onSelect:le},e.title))]},n)]})}),c&&(0,$.jsx)(y.K,{filters:l,onChange:je,onClose:()=>p(!1)})]})}const ne=document.getElementById("root");if(!ne)throw new Error("Root element #root not found");(0,r.H)(ne).render((0,$.jsx)(re,{}))},8997(e,t,i){var o=i(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.b12897ebefb8d086c3ed.js.map