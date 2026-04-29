"use strict";(self.webpackChunk_atlantis_youtube=self.webpackChunk_atlantis_youtube||[]).push([["512"],{8997(e,o,t){var n=t(2727);o.createRoot=n.createRoot,n.hydrateRoot},3611(e,o,t){var n=t(5723),i=t(8997),r=t(7991),a=t(6859),s=t.n(a),l=t(2799),d=t(6063),c=t(1275),u=t(3236),p=t(8170),x=t(948);let g="",m=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=s().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: ${d.w4.colors.mainBg};
`,h=s().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${d.w4.spacing.md};
  padding: ${d.w4.spacing.lg};
  animation: ${m} 0.25s ease both;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: ${d.w4.spacing.md};
  }
`,b=s().button`
  display: flex;
  flex-direction: column;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  padding: 0;
  transition: border-color 140ms ease, transform 140ms ease, box-shadow 140ms ease;

  &:hover {
    border-color: ${d.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  }

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,w=s().div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({url:e})=>e?`url("${e}") center/cover no-repeat`:d.w4.colors.codeBg};
  position: relative;
  flex-shrink: 0;
`,y=s().span`
  position: absolute;
  bottom: 6px;
  right: 6px;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  background: ${({live:e})=>e?"#c00":"rgba(0,0,0,0.8)"};
  color: #fff;
  letter-spacing: 0.02em;
`,v=s().div`
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,$=s().div`
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,j=s().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k=s().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${d.w4.spacing.sm};
  padding: ${d.w4.spacing.xl};
  color: ${d.w4.colors.mainTextMuted};
  text-align: center;
`,S=s().div`
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,z=s().div`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  max-width: 320px;
  line-height: 1.5;
`,M=s().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  margin-top: ${d.w4.spacing.sm};
  background: ${d.w4.colors.accent};
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  color: #fff;
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background 140ms ease;

  &:hover { background: ${d.w4.colors.accentHover}; }
`,T=s().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg} 0;
`,R=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${d.w4.spacing.md};
  padding: ${d.w4.spacing.lg};
`,I=s().div`
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: ${d.w4.borderRadius.lg};
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`,F=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${d.w4.borderRadius.md};
  color: #fff;
  font-size: ${d.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: background 140ms ease;

  &:hover { background: rgba(255, 255, 255, 0.15); }
`,Y=document.getElementById("root");if(!Y)throw Error("Root element #root not found");(0,i.createRoot)(Y).render((0,n.jsx)(function({topBarRight:e,apiKey:o}){let[t]=(0,p.Ym)(),i=(0,r.useMemo)(()=>(0,p.Nx)(t,x.A),[t]),a="pt"===t,[s]=(0,c.useProfile)();(0,r.useEffect)(()=>{(0,c.setAgeMode)(s.ageMode)},[s.ageMode]);let[l,m]=(0,r.useState)(()=>o||g||null),[Y,C]=(0,r.useState)("forYou"),[E,A]=(0,r.useState)(null);(0,r.useEffect)(()=>{l||(0,c.resolveYouTubeKey)().then(e=>m(e))},[l]);let{items:B,loading:K,failed:L,skipped:P}=(0,c.useSafeFeed)({apiKey:l,interests:s.interests,refreshMs:18e5}),_=(0,r.useRef)(E);_.current=E,(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&_.current&&A(null)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let q=[{id:"forYou",label:i("youtube.nav.forYou"),icon:"home"},{id:"channels",label:i("youtube.nav.channels"),icon:"users"},..."kid"!==s.ageMode?[{id:"search",label:i("youtube.nav.search"),icon:"search"}]:[]],H=(0,n.jsx)("nav",{style:{padding:"12px 0"},children:q.map(e=>(0,n.jsxs)("button",{onClick:()=>C(e.id),style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"9px 16px",background:Y===e.id?d.w4.colors.sidebarActiveBg:"transparent",border:"none",borderLeft:`2px solid ${Y===e.id?d.w4.colors.sidebarActive:"transparent"}`,color:Y===e.id?d.w4.colors.sidebarActive:d.w4.colors.sidebarText,fontSize:d.w4.typography.fontSizeSm,fontWeight:Y===e.id?600:400,cursor:"pointer",textAlign:"left",transition:"background 120ms ease, color 120ms ease"},children:[(0,n.jsx)(u.In,{name:e.icon,size:15}),e.label]},e.id))}),N="kid"===s.ageMode?i("youtube.age.kid"):"teen"===s.ageMode?i("youtube.age.teen"):i("youtube.age.adult"),U=(0,r.useMemo)(()=>{if(!E)return"";let e=new URLSearchParams({rel:"0",modestbranding:"1",autoplay:"1"});return!1===E.fullscreen&&e.set("fs","0"),`https://www.youtube-nocookie.com/embed/${E.id}?${e.toString()}`},[E]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.PE,{title:a?"YouTube Seguro":"YouTube Safe Feed",sidebar:H,topBarRight:e,children:(0,n.jsx)(f,{children:(l||P)&&!P&&l?"channels"===Y?(0,n.jsxs)(k,{children:[(0,n.jsx)(u.In,{name:"users",size:36,color:d.w4.colors.mainTextMuted}),(0,n.jsx)(S,{children:i("youtube.channels.title")}),(0,n.jsx)(z,{children:i("youtube.channels.body")}),(0,n.jsx)("div",{style:{marginTop:8,fontSize:"11px",fontFamily:d.w4.typography.fontFamilyMono,color:d.w4.colors.mainTextMuted},children:N})]}):"search"===Y?(0,n.jsxs)(k,{children:[(0,n.jsx)(u.In,{name:"search",size:36,color:d.w4.colors.mainTextMuted}),(0,n.jsx)(S,{children:a?"Pesquisa em breve":"Search coming soon"}),(0,n.jsx)(z,{children:a?"A pesquisa de canais e v\xeddeos estar\xe1 dispon\xedvel em breve.":"Channel and video search will be available soon."})]}):K?(0,n.jsxs)(k,{children:[(0,n.jsx)(u.In,{name:"clock",size:36,color:d.w4.colors.mainTextMuted}),(0,n.jsx)(z,{children:i("youtube.loading")})]}):L?(0,n.jsxs)(k,{children:[(0,n.jsx)(u.In,{name:"alert-triangle",size:36,color:d.w4.colors.mainTextMuted}),(0,n.jsx)(z,{children:i("youtube.error")})]}):B.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(T,{children:N}),(0,n.jsx)(h,{children:B.map(e=>(0,n.jsxs)(b,{onClick:()=>A(e),"aria-label":e.title,children:[(0,n.jsx)(w,{url:e.thumbnail,children:e.isLive?(0,n.jsx)(y,{live:!0,children:i("youtube.duration.live")}):e.durationSec>0?(0,n.jsx)(y,{children:function(e){if(e<=0)return"";let o=Math.floor(e/3600),t=Math.floor(e%3600/60),n=e%60;return o>0?`${o}:${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${t}:${String(n).padStart(2,"0")}`}(e.durationSec)}):null}),(0,n.jsxs)(v,{children:[(0,n.jsx)($,{children:e.title}),(0,n.jsx)(j,{children:e.channelTitle})]})]},e.id))})]}):(0,n.jsxs)(k,{children:[(0,n.jsx)(u.In,{name:"film",size:36,color:d.w4.colors.mainTextMuted}),(0,n.jsx)(z,{children:i("youtube.empty")})]}):(0,n.jsxs)(k,{children:[(0,n.jsx)(u.In,{name:"film",size:36,color:d.w4.colors.mainTextMuted}),(0,n.jsx)(S,{children:i("youtube.noKey.title")}),(0,n.jsx)(z,{children:i("youtube.noKey.body")}),(0,n.jsxs)(M,{onClick:()=>{window.location.hash="#/settings"},children:[(0,n.jsx)(u.In,{name:"settings",size:14}),i("youtube.noKey.cta")]})]})})}),E&&(0,n.jsxs)(R,{onClick:()=>A(null),children:[(0,n.jsx)(I,{onClick:e=>e.stopPropagation(),children:(0,n.jsx)("iframe",{src:U,title:E.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!1!==E.fullscreen})}),(0,n.jsxs)(F,{onClick:()=>A(null),children:[(0,n.jsx)(u.In,{name:"close",size:14}),i("youtube.player.close")]})]})]})},{}))}}]);