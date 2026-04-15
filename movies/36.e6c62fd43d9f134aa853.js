"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[36],{6036(e,t,i){i.r(t),i.d(t,{default:()=>ie});var o=i(7359),n=i(3233),a=i(7207),r=i(5723),s=i(7901),l=i(1783),d=i(1511),c=i(2709),p=i(7032),g=i(7681),x=i(7308),u=i(5031),f=i(4525),h=i(5056),m=i(6127),b=i(6260),w=i(1385),v=i(7390),y=i(2053),k=i(8104);const j="atlantis:movies:apikey",$="9b6f2645abf1725625c843aa71e3efd5";function S(e){if(e)return e;if($)return $;try{return localStorage.getItem(j)}catch{return null}}const T=[{id:"discover",label:"Discover",Icon:p.A},{id:"movies",label:"Movies",Icon:d.A},{id:"tv",label:"TV Shows",Icon:u.A},{id:"documentaries",label:"Documentaries",Icon:s.A},{id:"favorites",label:"My Favorites",Icon:c.A},{id:"seen",label:"Recently Seen",Icon:l.A}],M=a.keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,z=n.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: ${r.w4.colors.border} transparent;
`,C=n.default.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,I=n.default.div`
  position: ${({active:e})=>e?"relative":"absolute"};
  inset: 0;
  width: 100%;
  /* 16:9 matches TMDB backdrops exactly → no side cropping. Cap at 520px on large screens. */
  padding-top: min(56.25%, 520px);
  background: url(${({src:e})=>e}) center top / cover no-repeat;
  background-color: ${r.w4.colors.surface};
  opacity: ${({active:e})=>e?1:0};
  transition: opacity 0.7s ease;
  pointer-events: ${({active:e})=>e?"all":"none"};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 78%, ${r.w4.colors.mainBg} 100%),
      linear-gradient(to right,  rgba(0,0,0,0.55) 0%, transparent 55%);
  }

  @media (max-width: 640px) {
    padding-top: min(56.25%, 260px);
  }
`,_=n.default.div`
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
`,R=n.default.span`
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
`,P=n.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,N=n.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,A=n.default.span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,B=n.default.p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,D=n.default.button`
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
`,E=n.default.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,V=n.default.button`
  width: ${({active:e})=>e?20:7}px;
  height: 7px;
  border-radius: 99px;
  border: none;
  background: ${({active:e})=>e?"#fff":"rgba(255,255,255,0.35)"};
  cursor: pointer;
  padding: 0;
  transition: width 0.25s ease, background 0.25s ease;
`,K=n.default.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 16px;
  border-bottom: 1px solid ${r.w4.colors.border};
  background: ${r.w4.colors.mainBg};
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { display: none; }
`,G=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 13px 14px 12px;
  font-size: 13px;
  font-weight: ${({active:e})=>e?700:500};
  color: ${({active:e})=>e?r.w4.colors.mainText:r.w4.colors.mainTextMuted};
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?r.w4.colors.accent:"transparent"};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s, border-color 0.15s;
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;

  &:hover { color: ${r.w4.colors.mainText}; }
`,q=n.default.div`
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 8px;
`,U=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${({hasFilters:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  background: ${({hasFilters:e})=>e?"rgba(88,166,255,0.12)":"none"};
  color: ${({hasFilters:e})=>e?r.w4.colors.accent:r.w4.colors.mainTextMuted};
  transition: all 0.15s;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover { border-color: ${r.w4.colors.accent}; color: ${r.w4.colors.accent}; }
`,W=n.default.span`
  background: ${r.w4.colors.accent};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,Y=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 99px;
  padding: 5px 12px;
  transition: border-color 0.15s;
  width: 200px;

  @media (max-width: 640px) { width: 140px; }
  &:focus-within { border-color: ${r.w4.colors.accent}; }
`,Z=n.default.input`
  background: none;
  border: none;
  outline: none;
  color: ${r.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${r.w4.typography.fontFamily};
  &::placeholder { color: ${r.w4.colors.mainTextMuted}; opacity: 0.7; }
`,H=n.default.button`
  background: none;
  border: none;
  color: ${r.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${r.w4.colors.mainText}; }
`,L=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xl};
  padding-bottom: ${r.w4.spacing.xxl};
  animation: ${M} 0.25s ease;
`,O=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${r.w4.spacing.lg} ${r.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${r.w4.spacing.md};
`,J=n.default.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${r.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,Q=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${r.w4.spacing.md};
  color: ${r.w4.colors.mainTextMuted};
  font-size: 15px;
`,X=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,ee=n.default.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${r.w4.colors.accent};
`,te={genres:[],providerIds:[],decades:[]};function ie({topBarRight:e,apiKey:t}){const[i,n]=(0,o.useState)(()=>S(t)),[a,s]=(0,o.useState)("discover"),[l,d]=(0,o.useState)(te),[c,p]=(0,o.useState)(!1),[u,$]=(0,o.useState)([]),[M,ie]=(0,o.useState)([]),[oe,ne]=(0,o.useState)(0),[ae,re]=(0,o.useState)(null),[se,le]=(0,o.useState)(0),[de,ce]=(0,o.useState)(""),[pe,ge]=(0,o.useState)([]),[xe,ue]=(0,o.useState)(!1),fe=(0,o.useRef)(),he=(0,o.useRef)(),me=(0,o.useCallback)(()=>le(e=>e+1),[]);(0,o.useEffect)(()=>{n(S(t))},[t]),(0,o.useEffect)(()=>{if(!(M.length<2))return he.current=setInterval(()=>{ne(e=>(e+1)%M.length)},7e3),()=>clearInterval(he.current)},[M.length]),(0,o.useEffect)(()=>{i&&(clearTimeout(fe.current),de.trim()?(ue(!0),fe.current=setTimeout(async()=>{try{const e=await(0,v.$P)(i,de.trim());ge(e)}catch{ge([])}finally{ue(!1)}},380)):ge([]))},[i,de]);const be=l.genres.length>0||l.providerIds.length>0||l.decades.length>0,we=(0,o.useCallback)(async(e,t,i)=>{if("favorites"===t){const e=(0,y.qx)();return void $([{title:"My Favorites",items:e,loading:!1}])}if("seen"===t){const e=(0,y.GB)();return void $([{title:"Recently Seen",items:e,loading:!1}])}if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){const o="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",n="documentaries"===t?[...i.genres,99]:i.genres;$([{title:"Filtered Results",items:[],loading:!0}]);const a=await(0,v.NE)(e,o,{...i,genres:n});return void $([{title:"Filtered Results",items:a,loading:!1}])}if("documentaries"===t){$([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,v.ag)(e);return void $([{title:"Documentaries",items:t,loading:!1}])}if("movies"===t){$([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,v.Zy)(e),(0,v.Kk)(e,"movie")]);return void $([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("tv"===t){$([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,v.eN)(e),(0,v.Kk)(e,"tv")]);return void $([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}const o=function(e,t=2){const i={};for(const t of e)for(const e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,y.qx)(),...(0,y.GB)()],2),n=[{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...o.map(e=>({title:`More ${v.N2[e]??"Great"} Content`,loading:!0,items:[]}))];$(n);const[a,r,s,l,d,...c]=await Promise.all([(0,v._F)(e),(0,v.Zy)(e),(0,v.eN)(e),(0,v.Kk)(e,"movie"),(0,v.ag)(e),...o.map(t=>(0,v.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]),p=a.filter(e=>e.backdrop_path).slice(0,5);ie(p),ne(0),$([{title:"Trending This Week",items:a,loading:!1},{title:"Popular Movies",items:r,loading:!1},{title:"Popular TV Shows",items:s,loading:!1},{title:"Top Rated Movies",items:l,loading:!1},{title:"Documentaries",items:d,loading:!1},...o.map((e,t)=>({title:`More ${v.N2[e]??"Great"} Content`,items:c[t]??[],loading:!1}))])},[]);(0,o.useEffect)(()=>{i&&("discover"!==a&&ie([]),we(i,a,l).catch(()=>{}))},[i,a,l,we,se]);const ve=(0,o.useCallback)(e=>{s(e),ce("")},[]),ye=(0,o.useCallback)(e=>{d(e)},[]),ke=de.trim().length>0,je=M[oe]??null,$e=("favorites"===a||"seen"===a)&&!u[0]?.loading&&0===u[0]?.items.length,Se=l.genres.length+l.providerIds.length+l.decades.length;if(!i)return(0,k.jsx)(h.H,{onSave:e=>{!function(e){try{localStorage.setItem(j,e)}catch{}}(e),n(e)}});const Te=(0,k.jsxs)(Y,{children:[(0,k.jsx)(g.A,{size:14,color:r.w4.colors.mainTextMuted}),(0,k.jsx)(Z,{placeholder:"Search…",value:de,onChange:e=>ce(e.target.value)}),de&&(0,k.jsx)(H,{onClick:()=>ce(""),"aria-label":"Clear",children:(0,k.jsx)(f.A,{size:13})})]});return ae?(0,k.jsx)(r.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,k.jsx)(b.P,{item:ae,apiKey:i,onBack:()=>re(null),onLibraryChange:me})}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,k.jsxs)(k.Fragment,{children:[Te,e]}),children:(0,k.jsxs)(z,{children:[(0,k.jsxs)(K,{children:[T.map(({id:e,label:t,Icon:i})=>(0,k.jsxs)(G,{active:a===e,onClick:()=>ve(e),children:[(0,k.jsx)(i,{size:14}),t]},e)),(0,k.jsx)(q,{children:(0,k.jsxs)(U,{hasFilters:Se>0,onClick:()=>p(!0),children:[(0,k.jsx)(x.A,{size:13}),"Filter",Se>0&&(0,k.jsx)(W,{children:Se})]})})]}),ke?(0,k.jsxs)(L,{children:[(0,k.jsx)(O,{children:(0,k.jsx)(J,{children:xe?"Searching…":pe.length>0?`Results for "${de}"`:`No results for "${de}"`})}),xe||0!==pe.length?(0,k.jsx)(m.U,{title:"",items:pe,loading:xe,onSelect:re}):(0,k.jsxs)(Q,{children:[(0,k.jsx)("span",{style:{fontSize:44},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,k.jsxs)(L,{children:["discover"===a&&je&&!be&&(0,k.jsx)(C,{children:M.map((e,t)=>{const i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,k.jsx)(I,{src:i,active:t===oe,children:(0,k.jsxs)(_,{children:[(0,k.jsx)(R,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,k.jsx)(F,{children:(0,v.rS)(e)}),(0,k.jsxs)(P,{children:[(0,k.jsxs)(N,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,k.jsx)(A,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,k.jsx)(B,{children:e.overview}),(0,k.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,k.jsx)(D,{onClick:()=>re(e),children:"▶ More Info"}),(0,k.jsx)(E,{children:M.map((e,t)=>(0,k.jsx)(V,{active:t===oe,onClick:()=>{clearInterval(he.current),ne(t)}},t))})]})]})},e.id)})}),be&&(0,k.jsxs)(X,{children:[(0,k.jsx)("span",{style:{fontSize:12,color:r.w4.colors.mainTextMuted},children:"Active filters:"}),l.genres.map(e=>(0,k.jsx)(ee,{children:v.N2[e]??e},e)),l.providerIds.map(e=>(0,k.jsx)(ee,{children:v.Mw.find(t=>t.id===e)?.name??e},e)),l.decades.map(e=>(0,k.jsx)(ee,{children:e},e)),(0,k.jsx)("button",{style:{background:"none",border:"none",color:r.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>d(te),children:"Clear all"})]}),"discover"!==a&&(0,k.jsx)(O,{children:(0,k.jsx)(J,{children:T.find(e=>e.id===a)?.label??""})}),$e?(0,k.jsxs)(Q,{children:[(0,k.jsx)("span",{style:{fontSize:44},children:"favorites"===a?"❤️":"👁️"}),"favorites"===a?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):u.map(e=>(0,k.jsx)(m.U,{title:e.title,items:e.items,loading:e.loading,onSelect:re},e.title))]},a)]})}),c&&(0,k.jsx)(w.K,{filters:l,onChange:ye,onClose:()=>p(!1)})]})}}}]);
//# sourceMappingURL=36.e6c62fd43d9f134aa853.js.map