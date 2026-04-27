"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["9300"],{44879(e,t,i){i.d(t,{DailyFeedWidget:()=>z});var n=i(65723),s=i(37991),o=i(36859),a=i.n(o),l=i(72799),r=i(6063),d=i(16736),c=i(28170),h=i(63236),p=i(98975),y=i(73e3);let m=[{titleKey:"dailyFeed.school.math",hash:"#/school"},{titleKey:"dailyFeed.school.story",hash:"#/school"},{titleKey:"dailyFeed.school.science",hash:"#/school"},{titleKey:"dailyFeed.school.reading",hash:"#/leitor"},{titleKey:"dailyFeed.school.word",hash:"#/school"}],u=[{titleKey:"dailyFeed.game.memory",hash:"#/memory"},{titleKey:"dailyFeed.game.spotit",hash:"#/spotit"},{titleKey:"dailyFeed.game.tictactoe",hash:"#/tictactoe"},{titleKey:"dailyFeed.game.soundhunter",hash:"#/soundhunter"},{titleKey:"dailyFeed.game.familyquiz",hash:"#/familyquiz"},{titleKey:"dailyFeed.game.adventure",hash:"#/adventure"},{titleKey:"dailyFeed.game.stop",hash:"#/stopgame"}];function f(){let e=new Date;return 1e4*e.getFullYear()+(e.getMonth()+1)*100+e.getDate()}function g(e,t){return e[(f()+t)%e.length]}let w=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,x=a().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: ${w} 0.25s ease both;
`,b=a().span`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
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
  animation: ${w} 0.3s ease both;
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
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 500;
  color: ${r.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,K=a().span`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-top: 1px;
`,j=a().span`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  opacity: 0.5;
  transition: opacity ${r.w4.transitions.fast}, transform ${r.w4.transitions.fast};
`,C=a().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 11px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.mainTextMuted};
  opacity: 0.5;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function _(e){window.location.hash=e}function M(e){window.open(e,"_blank","noopener,noreferrer")}function z({locale:e}){let[t]=(0,d.useProfile)(),i=(0,s.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",p.A),[e]),{hits:o,loading:a,failed:l}=(0,d.useHnFrontPage)({hitsPerPage:4,cacheKey:"techscope-hn",refreshMs:3e5}),{events:w,failed:D,loading:T}=(0,d.useOnThisDay)({cacheKey:`onthisday-${new Date().toISOString().slice(0,10)}`}),{items:I,loading:P,failed:S}=(0,d.useRssFeed)({url:"pt"===e?"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.rtp.pt%2Fnoticias%2Frss":"https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss",cacheKey:"pt"===e?"news-portugal":"news-world",refreshMs:3e5}),{items:A,loading:Y,failed:q,skipped:H}=(0,d.useTmdbTrending)({apiKey:"9b6f2645abf1725625c843aa71e3efd5",cacheKey:"trending-movies",refreshMs:3e5}),L=[],N=o?.slice().sort((e,t)=>(t.points??0)-(e.points??0))[0];N&&L.push({key:"tech",interest:"tech",icon:"satellite",tint:"#a371f7",title:N.title,subtitle:i("dailyFeed.sub.tech"),onClick:()=>M(N.url??`https://news.ycombinator.com/item?id=${N.objectID}`)});let O=A?.find(e=>"movie"===e.media_type||"tv"===e.media_type);if(O){let e=O.title??O.name??"";L.push({key:"movie",interest:"movies",icon:"film",tint:"#e50914",title:e,subtitle:`${i("dailyFeed.sub.movie")} \xb7 ★ ${(O.vote_average??0).toFixed(1)}`,onClick:()=>(0,r.VJ)("movies",{id:O.id,type:O.media_type})})}if(w?.length){let e=w[f()%w.length],t=e.pages?.[0]?.content_urls?.desktop?.page;L.push({key:"history",interest:"learning",icon:"calendar",tint:"#d29922",title:e.text,subtitle:`${i("dailyFeed.sub.history")} \xb7 ${e.year}`,onClick:()=>t?M(t):void 0})}let R=I?.[0];R&&L.push({key:"news",interest:"news",icon:"globe",tint:"#cc0000",title:R.title,subtitle:i("pt"===e?"dailyFeed.sub.news.pt":"dailyFeed.sub.news.en"),onClick:()=>M(R.link)});let B=g(m,1);L.push({key:"school",interest:"learning",icon:"graduation",tint:"#f78166",title:i(B.titleKey),subtitle:i("dailyFeed.sub.school"),onClick:()=>_(B.hash)});let G=g(u,7);L.push({key:"game",interest:"games",icon:"gamepad",tint:"#f97583",title:i(G.titleKey),subtitle:i("dailyFeed.sub.game"),onClick:()=>_(G.hash)});let J=(0,d.hasInterests)(t)?L.filter(e=>!!t.interests.includes(e.interest)&&(0,d.detectInterests)(`${e.title} ${e.subtitle}`).every(e=>t.interests.includes(e))):L,V=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{day:"numeric",month:"long"}),W=[a?"pending":l?"failed":"ok",H?"skipped":Y?"pending":q?"failed":"ok",T?"pending":D?"failed":"ok",P?"pending":S?"failed":"ok"],X=0===J.length&&W.some(e=>"pending"===e),E=W.some(e=>"ok"===e),Q=0===J.length&&!X&&!E;return(0,n.jsx)(h.rl,{title:i("dailyFeed.title"),accessory:(0,n.jsx)(b,{children:V}),accentColor:y.A.accentColor,error:Q?i("widget.error.body"):void 0,errorLabel:Q?i("widget.error.label"):void 0,children:X?(0,n.jsx)(C,{children:i("widget.loading")}):(0,n.jsx)(x,{children:J.map((e,t)=>(0,n.jsxs)(F,{delay:t,onClick:e.onClick,children:[(0,n.jsx)(k,{tint:e.tint,children:(0,n.jsx)(h.In,{name:e.icon,size:15,"aria-hidden":"true"})}),(0,n.jsxs)($,{children:[(0,n.jsx)(v,{children:e.title}),(0,n.jsx)(K,{children:e.subtitle})]}),(0,n.jsx)(j,{className:"row-arrow",children:"→"})]},e.key))})})}}}]);