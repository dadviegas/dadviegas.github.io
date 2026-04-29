"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["3509"],{60308(e,i,t){t.d(i,{MoviesWidget:()=>$});var o=t(65723),r=t(37991),a=t(36859),s=t.n(a),n=t(72799),l=t(6063),d=t(63236),p=t(32114),c=t(28170),m=t(98975),x=t(64443),f=t(75763);let h=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,y=s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
  animation: ${h} 0.25s ease both;
  animation-delay: ${({delay:e})=>Math.min(40*e,240)}ms;
  min-height: 44px;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
  &:hover .movie-title { color: ${l.w4.colors.accent}; }
`,u=s().img`
  width: 32px;
  height: 48px;
  border-radius: 3px;
  object-fit: cover;
  flex-shrink: 0;
  background: ${l.w4.colors.border};
`,v=s().div`
  width: 32px;
  height: 48px;
  border-radius: 3px;
  flex-shrink: 0;
  background: ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`,b=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,w=s().span`
  font-size: 13px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.12s;
`,j=s().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
`,_=s().span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 3px;
  letter-spacing: 0.04em;
  background: ${({type:e})=>"movie"===e?"#58a6ff14":"#e233ff14"};
  color: ${({type:e})=>"movie"===e?"#58a6ff":"#e233ff"};
  border: 1px solid ${({type:e})=>"movie"===e?"#58a6ff25":"#e233ff25"};
`,k=s().span`
  color: #d29922;
`;function $({locale:e}){let i=(0,r.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",m.A),[e]),[t]=(0,p.useProfile)(),a=(0,p.useApiKey)("tmdb"),{items:s,loading:n,failed:h}=(0,p.useTmdbTrending)({apiKey:a,cacheKey:"trending-movies"}),M=(0,r.useMemo)(()=>s?(0,p.filterMediaByAge)(s.filter(e=>"movie"===e.media_type||"tv"===e.media_type),t.ageMode).slice(0,5):[],[s,t.ageMode]),z=n&&!M.length,C=!n&&h&&!M.length,T=!n&&!h&&!M.length,A=!a;return(0,o.jsxs)(d.rl,{title:i("movies.trending.title"),accentColor:f.A.accentColor,errorLabel:i("widget.error.label"),error:C||A?i(A?"movies.apiKeyMissing":"widget.error.body"):void 0,children:[z&&(0,o.jsx)(x.YG,{mode:"loading",label:i("widget.loading")}),T&&!A&&(0,o.jsx)(x.YG,{mode:"empty",label:i("movies.empty")}),!z&&!C&&!T&&!A&&(0,o.jsx)(g,{children:M.map((e,i)=>{let t=e.title??e.name??"—",r=(e.release_date??e.first_air_date??"").slice(0,4),a=(e.vote_average??0).toFixed(1);return(0,o.jsxs)(y,{delay:i,onClick:()=>(0,l.VJ)("movies",{id:e.id,type:e.media_type}),children:[e.poster_path?(0,o.jsx)(u,{src:(0,p.tmdbPosterUrl)(e.poster_path,"w185"),alt:t,loading:"lazy"}):(0,o.jsx)(v,{children:"movie"===e.media_type?"\uD83C\uDFAC":"\uD83D\uDCFA"}),(0,o.jsxs)(b,{children:[(0,o.jsx)(w,{className:"movie-title",children:t}),(0,o.jsxs)(j,{children:[(0,o.jsx)(_,{type:e.media_type,children:"movie"===e.media_type?"MOVIE":"TV"}),r&&(0,o.jsx)("span",{children:r}),(0,o.jsxs)("span",{children:[(0,o.jsx)(k,{children:"★"})," ",a]})]})]})]},e.id)})})]})}}}]);