"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[36],{6036(e,t,i){i.r(t),i.d(t,{default:()=>oe});var o=i(7359),r=i(3233),n=i(7207),a=i(6879),s=i(7180),l=i(7901),d=i(1783),c=i(1511),p=i(2709),g=i(7032),u=i(7681),x=i(7308),f=i(5031),m=i(4525),h=i(5056),b=i(6127),w=i(6260),v=i(1385),y=i(7390),k=i(2053),j=i(5723);const $="atlantis:movies:apikey",T="9b6f2645abf1725625c843aa71e3efd5";function S(e){if(e)return e;if(T)return T;try{return localStorage.getItem($)}catch{return null}}const M=[{id:"discover",label:"Discover",Icon:g.A},{id:"movies",label:"Movies",Icon:c.A},{id:"tv",label:"TV Shows",Icon:f.A},{id:"documentaries",label:"Documentaries",Icon:l.A},{id:"favorites",label:"My Favorites",Icon:p.A},{id:"seen",label:"Recently Seen",Icon:d.A}],z=n.keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,C=r.default.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,I=r.default.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,_=r.default.div`
  position: ${({active:e})=>e?"relative":"absolute"};
  inset: 0;
  width: 100%;
  /* 16:9 matches TMDB backdrops exactly → no side cropping. Cap at 520px on large screens. */
  padding-top: min(56.25%, 520px);
  background: url(${({src:e})=>e}) center top / cover no-repeat;
  background-color: ${a.w4.colors.surface};
  opacity: ${({active:e})=>e?1:0};
  transition: opacity 0.7s ease;
  pointer-events: ${({active:e})=>e?"all":"none"};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 78%, ${a.w4.colors.mainBg} 100%),
      linear-gradient(to right,  rgba(0,0,0,0.55) 0%, transparent 55%);
  }

  @media (max-width: 640px) {
    padding-top: min(56.25%, 260px);
  }
`,N=r.default.div`
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
`,R=r.default.span`
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
`,P=r.default.h2`
  font-size: clamp(22px, 4.5vw, 40px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`,F=r.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,E=r.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,A=r.default.span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,B=r.default.p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,D=r.default.button`
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
`,V=r.default.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,K=r.default.button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width 0.25s ease, background 0.25s ease;
`,G=r.default.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 16px;
  border-bottom: 1px solid ${a.w4.colors.border};
  background: ${a.w4.colors.mainBg};
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { display: none; }
`,L=r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 13px 14px 12px;
  font-size: 13px;
  font-weight: ${({active:e})=>e?700:500};
  color: ${({active:e})=>e?a.w4.colors.mainText:a.w4.colors.mainTextMuted};
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?a.w4.colors.accent:"transparent"};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s, border-color 0.15s;
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;

  &:hover { color: ${a.w4.colors.mainText}; }
`,O=r.default.div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,U=r.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${({hasFilters:e})=>e?a.w4.colors.accent:a.w4.colors.border};
  background: ${({hasFilters:e})=>e?"rgba(88,166,255,0.12)":"none"};
  color: ${({hasFilters:e})=>e?a.w4.colors.accent:a.w4.colors.mainTextMuted};
  transition: all 0.15s;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`,W=r.default.span`
  background: ${a.w4.colors.accent};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,q=r.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: 99px;
  padding: 5px 12px;
  transition: border-color 0.15s;
  width: 200px;

  @media (max-width: 640px) { width: 140px; }
  &:focus-within { border-color: ${a.w4.colors.accent}; }
`,Y=r.default.input`
  background: none;
  border: none;
  outline: none;
  color: ${a.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${a.w4.typography.fontFamily};
  &::placeholder { color: ${a.w4.colors.mainTextMuted}; opacity: 0.7; }
`,Z=r.default.button`
  background: none;
  border: none;
  color: ${a.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${a.w4.colors.mainText}; }
`,H=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${a.w4.spacing.xl};
  padding-bottom: ${a.w4.spacing.xxl};
  animation: ${z} 0.25s ease;
`,J=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${a.w4.spacing.lg} ${a.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${a.w4.spacing.md};
`,Q=r.default.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${a.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,X=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${a.w4.spacing.md};
  color: ${a.w4.colors.mainTextMuted};
  font-size: 15px;
`,ee=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${a.w4.spacing.md} ${a.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,te=r.default.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${a.w4.colors.accent};
`,ie={genres:[],providerIds:[],decades:[]};function oe({topBarRight:e,apiKey:t}){const[i]=(0,a.xc)();(0,y.zJ)(i.ageMode);const[r,n]=(0,o.useState)(()=>S(t)),[l,d]=(0,o.useState)("discover"),[c,p]=(0,o.useState)(ie),[g,f]=(0,o.useState)(!1),[T,z]=(0,o.useState)([]),[oe,re]=(0,o.useState)([]),[ne,ae]=(0,o.useState)(0),[se,le]=(0,o.useState)(null),de=(0,o.useCallback)(e=>{e&&history.pushState({movieDetail:!0},""),le(e)},[]);(0,o.useEffect)(()=>{const e=()=>{se&&le(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[se]);const ce=(0,a.fy)(),pe=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(!r)return;const e=ce.id,t=ce.type;if(!e||"movie"!==t&&"tv"!==t)return;const i=`${t}:${e}`;pe.current!==i&&(pe.current=i,(async()=>{try{const i=await(0,y.Ug)(r,t,Number(e));de({...i,genre_ids:i.genres?.map(e=>e.id)??[]})}catch{}})())},[r,ce.id,ce.type,de]);const[ge,ue]=(0,o.useState)(0),[xe,fe]=(0,o.useState)(""),[me,he]=(0,o.useState)([]),[be,we]=(0,o.useState)(!1),ve=(0,o.useRef)(),ye=(0,o.useRef)(),ke=(0,o.useCallback)(()=>ue(e=>e+1),[]);(0,o.useEffect)(()=>{n(S(t))},[t]),(0,o.useEffect)(()=>{if(!(oe.length<2))return ye.current=setInterval(()=>{ae(e=>(e+1)%oe.length)},7e3),()=>clearInterval(ye.current)},[oe.length]),(0,o.useEffect)(()=>{r&&(clearTimeout(ve.current),xe.trim()?(we(!0),ve.current=setTimeout(async()=>{try{const e=await(0,y.$P)(r,xe.trim());he(e)}catch{he([])}finally{we(!1)}},380)):he([]))},[r,xe]);const je=c.genres.length>0||c.providerIds.length>0||c.decades.length>0,$e=(0,o.useCallback)(async(e,t,i)=>{if("favorites"===t){const e=(0,k.qx)();return void z([{title:"My Favorites",items:e,loading:!1}])}if("seen"===t){const e=(0,k.GB)();return void z([{title:"Recently Seen",items:e,loading:!1}])}if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){const o="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",r="documentaries"===t?[...i.genres,99]:i.genres,n=r.length>0?r:[28,35,18,878,27,10749,53,16],a=n.map(e=>({title:y.N2[e]??"Other",items:[],loading:!0}));z(a);const s=await Promise.all(n.map(t=>(0,y.NE)(e,o,{...i,genres:[t]}))),l=n.map((e,t)=>({title:y.N2[e]??"Other",items:s[t]??[],loading:!1})).filter(e=>e.items.length>0);return void z(l.length>0?l:[{title:"No Results",items:[],loading:!1}])}if("documentaries"===t){z([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,y.ag)(e);return void z([{title:"Documentaries",items:t,loading:!1}])}if("movies"===t){z([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,y.Zy)(e),(0,y.Kk)(e,"movie")]);return void z([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("tv"===t){z([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,y.eN)(e),(0,y.Kk)(e,"tv")]);return void z([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}const o=function(e,t=2){const i={};for(const t of e)for(const e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,k.qx)(),...(0,k.GB)()],2),r=[{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...o.map(e=>({title:`More ${y.N2[e]??"Great"} Content`,loading:!0,items:[]}))];z(r);const[n,a,s,l,d,...c]=await Promise.all([(0,y._F)(e),(0,y.Zy)(e),(0,y.eN)(e),(0,y.Kk)(e,"movie"),(0,y.ag)(e),...o.map(t=>(0,y.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]),p=n.filter(e=>e.backdrop_path).slice(0,5);re(p),ae(0),z([{title:"Trending This Week",items:n,loading:!1},{title:"Popular Movies",items:a,loading:!1},{title:"Popular TV Shows",items:s,loading:!1},{title:"Top Rated Movies",items:l,loading:!1},{title:"Documentaries",items:d,loading:!1},...o.map((e,t)=>({title:`More ${y.N2[e]??"Great"} Content`,items:c[t]??[],loading:!1}))])},[]);(0,o.useEffect)(()=>{r&&("discover"!==l&&re([]),$e(r,l,c).catch(()=>{}))},[r,l,c,$e,ge,i.ageMode]);const Te=(0,o.useCallback)(e=>{d(e),fe("")},[]),Se=(0,o.useCallback)(e=>{p(e)},[]),Me=xe.trim().length>0,ze=oe[ne]??null,Ce=("favorites"===l||"seen"===l)&&!T[0]?.loading&&0===T[0]?.items.length,Ie=c.genres.length+c.providerIds.length+c.decades.length;if(!r)return(0,j.jsx)(h.H,{onSave:e=>{!function(e){try{localStorage.setItem($,e)}catch{}}(e),n(e)}});const _e=(0,j.jsxs)(q,{children:[(0,j.jsx)(u.A,{size:14,color:a.w4.colors.mainTextMuted}),(0,j.jsx)(Y,{placeholder:"Search…",value:xe,onChange:e=>fe(e.target.value)}),xe&&(0,j.jsx)(Z,{onClick:()=>fe(""),"aria-label":"Clear",children:(0,j.jsx)(m.A,{size:13})})]});if(se){const t=(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,j.jsxs)("button",{onClick:()=>history.back(),title:"Back",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 14px",background:"none",border:`1px solid ${a.w4.colors.border}`,borderRadius:a.w4.borderRadius.md,color:a.w4.colors.sidebarTextMuted,cursor:"pointer",fontSize:a.w4.typography.fontSizeSm,fontFamily:a.w4.typography.fontFamily,fontWeight:500,transition:"color 0.15s, border-color 0.15s"},onMouseEnter:e=>{e.currentTarget.style.color=a.w4.colors.mainText,e.currentTarget.style.borderColor=a.w4.colors.mainText},onMouseLeave:e=>{e.currentTarget.style.color=a.w4.colors.sidebarTextMuted,e.currentTarget.style.borderColor=a.w4.colors.border},children:[(0,j.jsx)(s.A,{size:14})," Back"]}),e]});return(0,j.jsx)(a.PE,{title:(0,y.rS)(se),sidebar:null,topBarRight:t,children:(0,j.jsx)(w.P,{item:se,apiKey:r,onBack:()=>history.back(),onLibraryChange:ke,onSelect:de})})}return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,j.jsxs)(j.Fragment,{children:[_e,e]}),children:(0,j.jsxs)(C,{children:[(0,j.jsxs)(G,{children:[M.map(({id:e,label:t,Icon:i})=>(0,j.jsxs)(L,{active:l===e,onClick:()=>Te(e),children:[(0,j.jsx)(i,{size:14}),t]},e)),(0,j.jsx)(O,{children:(0,j.jsxs)(U,{hasFilters:Ie>0,onClick:()=>f(!0),children:[(0,j.jsx)(x.A,{size:13}),"Filter",Ie>0&&(0,j.jsx)(W,{children:Ie})]})})]}),Me?(0,j.jsxs)(H,{children:[(0,j.jsx)(J,{children:(0,j.jsx)(Q,{children:be?"Searching…":me.length>0?`Results for "${xe}"`:`No results for "${xe}"`})}),be||0!==me.length?(0,j.jsx)(b.U,{title:"",items:me,loading:be,onSelect:de}):(0,j.jsxs)(X,{children:[(0,j.jsx)("span",{style:{fontSize:44},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,j.jsxs)(H,{children:["discover"===l&&ze&&!je&&(0,j.jsx)(I,{children:oe.map((e,t)=>{const i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,j.jsx)(_,{src:i,active:t===ne,children:(0,j.jsxs)(N,{children:[(0,j.jsx)(R,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,j.jsx)(P,{children:(0,y.rS)(e)}),(0,j.jsxs)(F,{children:[(0,j.jsxs)(E,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,j.jsx)(A,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,j.jsx)(B,{children:e.overview}),(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,j.jsx)(D,{onClick:()=>de(e),children:"▶ More Info"}),(0,j.jsx)(V,{children:oe.map((e,t)=>(0,j.jsx)(K,{active:t===ne,onClick:()=>{clearInterval(ye.current),ae(t)}},t))})]})]})},e.id)})}),je&&(0,j.jsxs)(ee,{children:[(0,j.jsx)("span",{style:{fontSize:12,color:a.w4.colors.mainTextMuted},children:"Active filters:"}),c.genres.map(e=>(0,j.jsx)(te,{children:y.N2[e]??e},e)),c.providerIds.map(e=>(0,j.jsx)(te,{children:y.Mw.find(t=>t.id===e)?.name??e},e)),c.decades.map(e=>(0,j.jsx)(te,{children:e},e)),(0,j.jsx)("button",{style:{background:"none",border:"none",color:a.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>p(ie),children:"Clear all"})]}),"discover"!==l&&(0,j.jsx)(J,{children:(0,j.jsx)(Q,{children:M.find(e=>e.id===l)?.label??""})}),Ce?(0,j.jsxs)(X,{children:[(0,j.jsx)("span",{style:{fontSize:44},children:"favorites"===l?"❤️":"👁️"}),"favorites"===l?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):T.map(e=>(0,j.jsx)(b.U,{title:e.title,items:e.items,loading:e.loading,onSelect:de},e.title))]},l)]})}),g&&(0,j.jsx)(v.K,{filters:c,onChange:Se,onClose:()=>f(!1)})]})}}}]);
//# sourceMappingURL=36.bc91f4cb686b45d7e03e.js.map