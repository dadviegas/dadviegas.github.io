"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([[188],{188(e,t,i){var o=i(7359),n=i(8997),r=i(3233),a=i(7207),s=i(5723),l=i(7032),d=i(1511),c=i(5031),p=i(7901),g=i(2709),x=i(1783),u=i(7681),f=i(4525),h=i(7308),m=i(5056),b=i(6127),w=i(6260),v=i(1385),y=i(7390),k=i(2053),j=i(8104);const $="atlantis:movies:apikey",S="9b6f2645abf1725625c843aa71e3efd5";function T(e){if(e)return e;if(S)return S;try{return localStorage.getItem($)}catch{return null}}const M=[{id:"discover",label:"Discover",Icon:l.A},{id:"movies",label:"Movies",Icon:d.A},{id:"tv",label:"TV Shows",Icon:c.A},{id:"documentaries",label:"Documentaries",Icon:p.A},{id:"favorites",label:"My Favorites",Icon:g.A},{id:"seen",label:"Recently Seen",Icon:x.A}],z=a.keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,C=r.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: ${s.w4.colors.border} transparent;
`,I=r.default.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
`,R=r.default.div`
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
`,_=r.default.div`
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
`,F=r.default.span`
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
`,N=r.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,A=r.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #e3b341;
`,B=r.default.span`
  font-size: 13px;
  color: rgba(255,255,255,0.55);
`,E=r.default.p`
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
  border-bottom: 1px solid ${s.w4.colors.border};
  background: ${s.w4.colors.mainBg};
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { display: none; }
`,H=r.default.button`
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
`,q=r.default.div`
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
  border: 1px solid ${({hasFilters:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  background: ${({hasFilters:e})=>e?"rgba(88,166,255,0.12)":"none"};
  color: ${({hasFilters:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  transition: all 0.15s;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.accent}; }
`,W=r.default.span`
  background: ${s.w4.colors.accent};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border-radius: 99px;
  padding: 1px 6px;
  min-width: 18px;
  text-align: center;
`,Y=r.default.div`
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
`,Z=r.default.input`
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  width: 100%;
  font-family: ${s.w4.typography.fontFamily};
  &::placeholder { color: ${s.w4.colors.mainTextMuted}; opacity: 0.7; }
`,L=r.default.button`
  background: none;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover { color: ${s.w4.colors.mainText}; }
`,O=r.default.div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xl};
  padding-bottom: ${s.w4.spacing.xxl};
  animation: ${z} 0.25s ease;
`,J=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${s.w4.spacing.lg} ${s.w4.spacing.xl} 0;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.md};
`,Q=r.default.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${s.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,X=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  gap: ${s.w4.spacing.md};
  color: ${s.w4.colors.mainTextMuted};
  font-size: 15px;
`,ee=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${s.w4.spacing.md} ${s.w4.spacing.xl} 0;
  flex-wrap: wrap;
`,te=r.default.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(88,166,255,0.12);
  border: 1px solid rgba(88,166,255,0.25);
  color: ${s.w4.colors.accent};
`,ie={genres:[],providerIds:[],decades:[]};function oe({topBarRight:e,apiKey:t}){const[i,n]=(0,o.useState)(()=>T(t)),[r,a]=(0,o.useState)("discover"),[l,d]=(0,o.useState)(ie),[c,p]=(0,o.useState)(!1),[g,x]=(0,o.useState)([]),[S,z]=(0,o.useState)([]),[oe,ne]=(0,o.useState)(0),[re,ae]=(0,o.useState)(null),[se,le]=(0,o.useState)(0),[de,ce]=(0,o.useState)(""),[pe,ge]=(0,o.useState)([]),[xe,ue]=(0,o.useState)(!1),fe=(0,o.useRef)(),he=(0,o.useRef)(),me=(0,o.useCallback)(()=>le(e=>e+1),[]);(0,o.useEffect)(()=>{n(T(t))},[t]),(0,o.useEffect)(()=>{if(!(S.length<2))return he.current=setInterval(()=>{ne(e=>(e+1)%S.length)},7e3),()=>clearInterval(he.current)},[S.length]),(0,o.useEffect)(()=>{i&&(clearTimeout(fe.current),de.trim()?(ue(!0),fe.current=setTimeout(async()=>{try{const e=await(0,y.$P)(i,de.trim());ge(e)}catch{ge([])}finally{ue(!1)}},380)):ge([]))},[i,de]);const be=l.genres.length>0||l.providerIds.length>0||l.decades.length>0,we=(0,o.useCallback)(async(e,t,i)=>{if("favorites"===t){const e=(0,k.qx)();return void x([{title:"My Favorites",items:e,loading:!1}])}if("seen"===t){const e=(0,k.GB)();return void x([{title:"Recently Seen",items:e,loading:!1}])}if(i.genres.length>0||i.providerIds.length>0||i.decades.length>0){const o="movies"===t?"movie":"tv"===t?"tv":"documentaries"===t?"movie":"all",n="documentaries"===t?[...i.genres,99]:i.genres;x([{title:"Filtered Results",items:[],loading:!0}]);const r=await(0,y.NE)(e,o,{...i,genres:n});return void x([{title:"Filtered Results",items:r,loading:!1}])}if("documentaries"===t){x([{title:"Documentaries",items:[],loading:!0}]);const t=await(0,y.ag)(e);return void x([{title:"Documentaries",items:t,loading:!1}])}if("movies"===t){x([{title:"Popular Movies",items:[],loading:!0},{title:"Top Rated Movies",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,y.Zy)(e),(0,y.Kk)(e,"movie")]);return void x([{title:"Popular Movies",items:t,loading:!1},{title:"Top Rated Movies",items:i,loading:!1}])}if("tv"===t){x([{title:"Popular TV Shows",items:[],loading:!0},{title:"Top Rated TV Shows",items:[],loading:!0}]);const[t,i]=await Promise.all([(0,y.eN)(e),(0,y.Kk)(e,"tv")]);return void x([{title:"Popular TV Shows",items:t,loading:!1},{title:"Top Rated TV Shows",items:i,loading:!1}])}const o=function(e,t=2){const i={};for(const t of e)for(const e of t.genre_ids??[])i[e]=(i[e]??0)+1;return Object.entries(i).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,t).map(([e])=>Number(e))}([...(0,k.qx)(),...(0,k.GB)()],2),n=[{title:"Trending This Week",loading:!0,items:[]},{title:"Popular Movies",loading:!0,items:[]},{title:"Popular TV Shows",loading:!0,items:[]},{title:"Top Rated Movies",loading:!0,items:[]},{title:"Documentaries",loading:!0,items:[]},...o.map(e=>({title:`More ${y.N2[e]??"Great"} Content`,loading:!0,items:[]}))];x(n);const[r,a,s,l,d,...c]=await Promise.all([(0,y._F)(e),(0,y.Zy)(e),(0,y.eN)(e),(0,y.Kk)(e,"movie"),(0,y.ag)(e),...o.map(t=>(0,y.NE)(e,"all",{genres:[t],providerIds:[],decades:[]}))]),p=r.filter(e=>e.backdrop_path).slice(0,5);z(p),ne(0),x([{title:"Trending This Week",items:r,loading:!1},{title:"Popular Movies",items:a,loading:!1},{title:"Popular TV Shows",items:s,loading:!1},{title:"Top Rated Movies",items:l,loading:!1},{title:"Documentaries",items:d,loading:!1},...o.map((e,t)=>({title:`More ${y.N2[e]??"Great"} Content`,items:c[t]??[],loading:!1}))])},[]);(0,o.useEffect)(()=>{i&&("discover"!==r&&z([]),we(i,r,l).catch(()=>{}))},[i,r,l,we,se]);const ve=(0,o.useCallback)(e=>{a(e),ce("")},[]),ye=(0,o.useCallback)(e=>{d(e)},[]),ke=de.trim().length>0,je=S[oe]??null,$e=("favorites"===r||"seen"===r)&&!g[0]?.loading&&0===g[0]?.items.length,Se=l.genres.length+l.providerIds.length+l.decades.length;if(!i)return(0,j.jsx)(m.H,{onSave:e=>{!function(e){try{localStorage.setItem($,e)}catch{}}(e),n(e)}});const Te=(0,j.jsxs)(Y,{children:[(0,j.jsx)(u.A,{size:14,color:s.w4.colors.mainTextMuted}),(0,j.jsx)(Z,{placeholder:"Search…",value:de,onChange:e=>ce(e.target.value)}),de&&(0,j.jsx)(L,{onClick:()=>ce(""),"aria-label":"Clear",children:(0,j.jsx)(f.A,{size:13})})]});return re?(0,j.jsx)(s.PE,{title:"Movies & Series",sidebar:null,topBarRight:e,children:(0,j.jsx)(w.P,{item:re,apiKey:i,onBack:()=>ae(null),onLibraryChange:me})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.PE,{title:"Movies & Series",sidebar:null,topBarRight:(0,j.jsxs)(j.Fragment,{children:[Te,e]}),children:(0,j.jsxs)(C,{children:[(0,j.jsxs)(G,{children:[M.map(({id:e,label:t,Icon:i})=>(0,j.jsxs)(H,{active:r===e,onClick:()=>ve(e),children:[(0,j.jsx)(i,{size:14}),t]},e)),(0,j.jsx)(q,{children:(0,j.jsxs)(U,{hasFilters:Se>0,onClick:()=>p(!0),children:[(0,j.jsx)(h.A,{size:13}),"Filter",Se>0&&(0,j.jsx)(W,{children:Se})]})})]}),ke?(0,j.jsxs)(O,{children:[(0,j.jsx)(J,{children:(0,j.jsx)(Q,{children:xe?"Searching…":pe.length>0?`Results for "${de}"`:`No results for "${de}"`})}),xe||0!==pe.length?(0,j.jsx)(b.U,{title:"",items:pe,loading:xe,onSelect:ae}):(0,j.jsxs)(X,{children:[(0,j.jsx)("span",{style:{fontSize:44},children:"🔍"}),"Nothing found — try a different title"]})]}):(0,j.jsxs)(O,{children:["discover"===r&&je&&!be&&(0,j.jsx)(I,{children:S.map((e,t)=>{const i=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"";return(0,j.jsx)(R,{src:i,active:t===oe,children:(0,j.jsxs)(_,{children:[(0,j.jsx)(F,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV Show"}),(0,j.jsx)(P,{children:(0,y.rS)(e)}),(0,j.jsxs)(N,{children:[(0,j.jsxs)(A,{children:["★ ",e.vote_average.toFixed(1)]}),(e.release_date||e.first_air_date)&&(0,j.jsx)(B,{children:(e.release_date??e.first_air_date??"").slice(0,4)})]}),e.overview&&(0,j.jsx)(E,{children:e.overview}),(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,j.jsx)(D,{onClick:()=>ae(e),children:"▶ More Info"}),(0,j.jsx)(V,{children:S.map((e,t)=>(0,j.jsx)(K,{active:t===oe,onClick:()=>{clearInterval(he.current),ne(t)}},t))})]})]})},e.id)})}),be&&(0,j.jsxs)(ee,{children:[(0,j.jsx)("span",{style:{fontSize:12,color:s.w4.colors.mainTextMuted},children:"Active filters:"}),l.genres.map(e=>(0,j.jsx)(te,{children:y.N2[e]??e},e)),l.providerIds.map(e=>(0,j.jsx)(te,{children:y.Mw.find(t=>t.id===e)?.name??e},e)),l.decades.map(e=>(0,j.jsx)(te,{children:e},e)),(0,j.jsx)("button",{style:{background:"none",border:"none",color:s.w4.colors.mainTextMuted,fontSize:11,cursor:"pointer",textDecoration:"underline"},onClick:()=>d(ie),children:"Clear all"})]}),"discover"!==r&&(0,j.jsx)(J,{children:(0,j.jsx)(Q,{children:M.find(e=>e.id===r)?.label??""})}),$e?(0,j.jsxs)(X,{children:[(0,j.jsx)("span",{style:{fontSize:44},children:"favorites"===r?"❤️":"👁️"}),"favorites"===r?"No favorites yet — open any title and hit ❤️":"No seen titles yet — mark a title as seen to track it here"]}):g.map(e=>(0,j.jsx)(b.U,{title:e.title,items:e.items,loading:e.loading,onSelect:ae},e.title))]},r)]})}),c&&(0,j.jsx)(v.K,{filters:l,onChange:ye,onClose:()=>p(!1)})]})}const ne=document.getElementById("root");if(!ne)throw new Error("Root element #root not found");(0,n.H)(ne).render((0,j.jsx)(oe,{}))},8997(e,t,i){var o=i(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.d656b053ee5c7eea845a.js.map