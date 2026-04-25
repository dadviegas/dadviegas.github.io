"use strict";(self.webpackChunk_atlantis_youtube=self.webpackChunk_atlantis_youtube||[]).push([["362"],{3935(e,o,i){i.r(o),i.d(o,{default:()=>Y});var n=i(5723),t=i(7991),r=i(6859),a=i.n(r),s=i(2799),l=i(9874),d=i(6455),c=i(8395),u=i(8170),p=i(948);let x="",g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: ${l.w4.colors.mainBg};
`,f=a().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.lg};
  animation: ${g} 0.25s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: ${l.w4.spacing.md};
  }
`,h=a().button`
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  padding: 0;
  transition: border-color 140ms ease, transform 140ms ease, box-shadow 140ms ease;

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,b=a().div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({url:e})=>e?`url("${e}") center/cover no-repeat`:l.w4.colors.codeBg};
  position: relative;
  flex-shrink: 0;
`,w=a().span`
  position: absolute;
  bottom: 6px;
  right: 6px;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  background: ${({live:e})=>e?"#c00":"rgba(0,0,0,0.8)"};
  color: #fff;
  letter-spacing: 0.02em;
`,y=a().div`
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,$=a().div`
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,v=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.xl};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,k=a().div`
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,S=a().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  max-width: 320px;
  line-height: 1.5;
`,z=a().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  margin-top: ${l.w4.spacing.sm};
  background: ${l.w4.colors.accent};
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  color: #fff;
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background 140ms ease;

  &:hover { background: ${l.w4.colors.accentHover}; }
`,M=a().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg} 0;
`,T=a().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.lg};
`,F=a().div`
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: ${l.w4.borderRadius.lg};
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`,I=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${l.w4.borderRadius.md};
  color: #fff;
  font-size: ${l.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: background 140ms ease;

  &:hover { background: rgba(255, 255, 255, 0.15); }
`;function Y({topBarRight:e,apiKey:o}){let[i]=(0,u.Ym)(),r=(0,t.useMemo)(()=>(0,u.Nx)(i,p.A),[i]),a="pt"===i,[s]=(0,d.useProfile)();(0,d.setAgeMode)(s.ageMode);let[g,C]=(0,t.useState)(()=>o||x||null),[A,R]=(0,t.useState)("forYou"),[E,K]=(0,t.useState)(null);(0,t.useEffect)(()=>{g||(0,d.resolveYouTubeKey)().then(e=>C(e))},[g]);let{items:B,loading:L,failed:P,skipped:_}=(0,d.useSafeFeed)({apiKey:g,interests:s.interests,refreshMs:18e5}),q=(0,t.useRef)(E);q.current=E,(0,t.useEffect)(()=>{let e=e=>{"Escape"===e.key&&q.current&&K(null)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let H=[{id:"forYou",label:r("youtube.nav.forYou"),icon:"home"},{id:"channels",label:r("youtube.nav.channels"),icon:"users"},..."kid"!==s.ageMode?[{id:"search",label:r("youtube.nav.search"),icon:"search"}]:[]],N=(0,n.jsx)("nav",{style:{padding:"12px 0"},children:H.map(e=>(0,n.jsxs)("button",{onClick:()=>R(e.id),style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"9px 16px",background:A===e.id?l.w4.colors.sidebarActiveBg:"transparent",border:"none",borderLeft:`2px solid ${A===e.id?l.w4.colors.sidebarActive:"transparent"}`,color:A===e.id?l.w4.colors.sidebarActive:l.w4.colors.sidebarText,fontSize:l.w4.typography.fontSizeSm,fontWeight:A===e.id?600:400,cursor:"pointer",textAlign:"left",transition:"background 120ms ease, color 120ms ease"},children:[(0,n.jsx)(c.In,{name:e.icon,size:15}),e.label]},e.id))}),U="kid"===s.ageMode?r("youtube.age.kid"):"teen"===s.ageMode?r("youtube.age.teen"):r("youtube.age.adult"),W=(0,t.useMemo)(()=>{if(!E)return"";let e=new URLSearchParams({rel:"0",modestbranding:"1",autoplay:"1"});return!1===E.fullscreen&&e.set("fs","0"),`https://www.youtube-nocookie.com/embed/${E.id}?${e.toString()}`},[E]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.PE,{title:a?"YouTube Seguro":"YouTube Safe Feed",sidebar:N,topBarRight:e,children:(0,n.jsx)(m,{children:(g||_)&&!_&&g?"channels"===A?(0,n.jsxs)(j,{children:[(0,n.jsx)(c.In,{name:"users",size:36,color:l.w4.colors.mainTextMuted}),(0,n.jsx)(k,{children:r("youtube.channels.title")}),(0,n.jsx)(S,{children:r("youtube.channels.body")}),(0,n.jsx)("div",{style:{marginTop:8,fontSize:"11px",fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:U})]}):"search"===A?(0,n.jsxs)(j,{children:[(0,n.jsx)(c.In,{name:"search",size:36,color:l.w4.colors.mainTextMuted}),(0,n.jsx)(k,{children:a?"Pesquisa em breve":"Search coming soon"}),(0,n.jsx)(S,{children:a?"A pesquisa de canais e v\xeddeos estar\xe1 dispon\xedvel em breve.":"Channel and video search will be available soon."})]}):L?(0,n.jsxs)(j,{children:[(0,n.jsx)(c.In,{name:"clock",size:36,color:l.w4.colors.mainTextMuted}),(0,n.jsx)(S,{children:r("youtube.loading")})]}):P?(0,n.jsxs)(j,{children:[(0,n.jsx)(c.In,{name:"alert-triangle",size:36,color:l.w4.colors.mainTextMuted}),(0,n.jsx)(S,{children:r("youtube.error")})]}):B.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(M,{children:U}),(0,n.jsx)(f,{children:B.map(e=>(0,n.jsxs)(h,{onClick:()=>K(e),"aria-label":e.title,children:[(0,n.jsx)(b,{url:e.thumbnail,children:e.isLive?(0,n.jsx)(w,{live:!0,children:r("youtube.duration.live")}):e.durationSec>0?(0,n.jsx)(w,{children:function(e){if(e<=0)return"";let o=Math.floor(e/3600),i=Math.floor(e%3600/60),n=e%60;return o>0?`${o}:${String(i).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${i}:${String(n).padStart(2,"0")}`}(e.durationSec)}):null}),(0,n.jsxs)(y,{children:[(0,n.jsx)($,{children:e.title}),(0,n.jsx)(v,{children:e.channelTitle})]})]},e.id))})]}):(0,n.jsxs)(j,{children:[(0,n.jsx)(c.In,{name:"film",size:36,color:l.w4.colors.mainTextMuted}),(0,n.jsx)(S,{children:r("youtube.empty")})]}):(0,n.jsxs)(j,{children:[(0,n.jsx)(c.In,{name:"film",size:36,color:l.w4.colors.mainTextMuted}),(0,n.jsx)(k,{children:r("youtube.noKey.title")}),(0,n.jsx)(S,{children:r("youtube.noKey.body")}),(0,n.jsxs)(z,{onClick:()=>{window.location.hash="#/settings"},children:[(0,n.jsx)(c.In,{name:"settings",size:14}),r("youtube.noKey.cta")]})]})})}),E&&(0,n.jsxs)(T,{onClick:()=>K(null),children:[(0,n.jsx)(F,{onClick:e=>e.stopPropagation(),children:(0,n.jsx)("iframe",{src:W,title:E.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!1!==E.fullscreen})}),(0,n.jsxs)(I,{onClick:()=>K(null),children:[(0,n.jsx)(c.In,{name:"close",size:14}),r("youtube.player.close")]})]})]})}}}]);