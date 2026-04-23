"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["9300"],{44879(e,t,i){i.d(t,{DailyFeedWidget:()=>D});var n=i(65723),s=i(37991),o=i(36859),a=i.n(o),l=i(72799),r=i(23930),d=i(48294),c=i(28170),p=i(2938),h=i(98975);let y=[{titleKey:"dailyFeed.school.math",hash:"#/school"},{titleKey:"dailyFeed.school.story",hash:"#/school"},{titleKey:"dailyFeed.school.science",hash:"#/school"},{titleKey:"dailyFeed.school.reading",hash:"#/leitor"},{titleKey:"dailyFeed.school.word",hash:"#/school"}],m=[{titleKey:"dailyFeed.game.memory",hash:"#/memory"},{titleKey:"dailyFeed.game.spotit",hash:"#/spotit"},{titleKey:"dailyFeed.game.tictactoe",hash:"#/tictactoe"},{titleKey:"dailyFeed.game.soundhunter",hash:"#/soundhunter"},{titleKey:"dailyFeed.game.familyquiz",hash:"#/familyquiz"},{titleKey:"dailyFeed.game.adventure",hash:"#/adventure"},{titleKey:"dailyFeed.game.stop",hash:"#/stopgame"}];function f(){let e=new Date;return 1e4*e.getFullYear()+(e.getMonth()+1)*100+e.getDate()}function g(e,t){return e[(f()+t)%e.length]}let u=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,x=a().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 100%;
  animation: ${u} 0.3s ease both;
`,w=a().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
  gap: 6px;
`,b=a().span`
  color: ${r.w4.colors.accent};
  letter-spacing: 0.02em;
`,F=a().button`
  display: grid;
  grid-template-columns: 22px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 8px 8px;
  background: transparent;
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  text-align: left;
  font-family: ${r.w4.typography.fontFamily};
  color: inherit;
  transition: background ${r.w4.transitions.fast};
  animation: ${u} 0.3s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;

  &:hover { background: ${r.w4.colors.sidebarHover}; }
  &:hover .row-arrow { opacity: 1; transform: translateX(2px); }
`,k=a().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: ${({tint:e})=>e};
`,$=a().span`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,v=a().span`
  font-size: 12px;
  font-weight: 500;
  color: ${r.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,j=a().span`
  font-size: 10px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-top: 1px;
`,K=a().span`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  opacity: 0.5;
  transition: opacity ${r.w4.transitions.fast}, transform ${r.w4.transitions.fast};
`,M=a().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${r.w4.colors.mainTextMuted};
  opacity: 0.5;
`,_=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  line-height: 1.45;
`,z=a().span`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${r.w4.colors.danger};
`;function C(e){window.location.hash=e}function T(e){window.open(e,"_blank","noopener,noreferrer")}function D({locale:e}){let[t]=(0,d.useProfile)(),i=(0,s.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",h.A),[e]),{hits:o,loading:a,failed:l}=(0,d.useHnFrontPage)({hitsPerPage:4,cacheKey:"techscope-hn",refreshMs:3e5}),{events:u,failed:I,loading:P}=(0,d.useOnThisDay)({cacheKey:`onthisday-${new Date().toISOString().slice(0,10)}`}),{items:S,loading:A,failed:Y}=(0,d.useRssFeed)({url:"pt"===e?"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.rtp.pt%2Fnoticias%2Frss":"https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss",cacheKey:"pt"===e?"news-portugal":"news-world",refreshMs:3e5}),{items:q,loading:H,failed:N,skipped:O}=(0,d.useTmdbTrending)({apiKey:"9b6f2645abf1725625c843aa71e3efd5",cacheKey:"trending-movies",refreshMs:3e5}),R=[],B=o?.slice().sort((e,t)=>(t.points??0)-(e.points??0))[0];B&&R.push({key:"tech",interest:"tech",icon:"satellite",tint:"#a371f7",title:B.title,subtitle:i("dailyFeed.sub.tech"),onClick:()=>T(B.url??`https://news.ycombinator.com/item?id=${B.objectID}`)});let G=q?.find(e=>"movie"===e.media_type||"tv"===e.media_type);if(G){let e=G.title??G.name??"";R.push({key:"movie",interest:"movies",icon:"film",tint:"#e50914",title:e,subtitle:`${i("dailyFeed.sub.movie")} \xb7 ★ ${(G.vote_average??0).toFixed(1)}`,onClick:()=>(0,r.VJ)("movies",{id:G.id,type:G.media_type})})}if(u?.length){let e=u[f()%u.length],t=e.pages?.[0]?.content_urls?.desktop?.page;R.push({key:"history",interest:"learning",icon:"calendar",tint:"#d29922",title:e.text,subtitle:`${i("dailyFeed.sub.history")} \xb7 ${e.year}`,onClick:()=>t?T(t):void 0})}let J=S?.[0];J&&R.push({key:"news",interest:"news",icon:"globe",tint:"#cc0000",title:J.title,subtitle:i("pt"===e?"dailyFeed.sub.news.pt":"dailyFeed.sub.news.en"),onClick:()=>T(J.link)});let L=g(y,1);R.push({key:"school",interest:"learning",icon:"graduation",tint:"#f78166",title:i(L.titleKey),subtitle:i("dailyFeed.sub.school"),onClick:()=>C(L.hash)});let V=g(m,7);R.push({key:"game",interest:"games",icon:"gamepad",tint:"#f97583",title:i(V.titleKey),subtitle:i("dailyFeed.sub.game"),onClick:()=>C(V.hash)});let W=(0,d.hasInterests)(t)?R.filter(e=>!!t.interests.includes(e.interest)&&(0,d.detectInterests)(`${e.title} ${e.subtitle}`).every(e=>t.interests.includes(e))):R,X=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{day:"numeric",month:"long"});if(0===W.length){let e=[a?"pending":l?"failed":"ok",O?"skipped":H?"pending":N?"failed":"ok",P?"pending":I?"failed":"ok",A?"pending":Y?"failed":"ok"],t=e.some(e=>"pending"===e),s=e.some(e=>"ok"===e);return t||s?(0,n.jsx)(x,{children:(0,n.jsx)(M,{children:i("widget.loading")})}):(0,n.jsx)(x,{children:(0,n.jsxs)(_,{role:"alert",children:[(0,n.jsx)(z,{children:i("widget.error.label")}),(0,n.jsx)("div",{children:i("widget.error.body")})]})})}return(0,n.jsxs)(x,{children:[(0,n.jsxs)(w,{children:[i("dailyFeed.title"),(0,n.jsx)(b,{children:X})]}),W.map((e,t)=>(0,n.jsxs)(F,{delay:t,onClick:e.onClick,children:[(0,n.jsx)(k,{tint:e.tint,children:(0,n.jsx)(p.In,{name:e.icon,size:15,"aria-hidden":"true"})}),(0,n.jsxs)($,{children:[(0,n.jsx)(v,{children:e.title}),(0,n.jsx)(j,{children:e.subtitle})]}),(0,n.jsx)(K,{className:"row-arrow",children:"→"})]},e.key))]})}}}]);