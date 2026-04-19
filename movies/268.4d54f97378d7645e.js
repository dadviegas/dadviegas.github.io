"use strict";(self.webpackChunk_atlantis_movies=self.webpackChunk_atlantis_movies||[]).push([["268"],{7613(e,o,a){a.d(o,{H:()=>b});var t=a(5723),n=a(7991),r=a(6859),i=a.n(r),l=a(5726);let s=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${l.w4.colors.mainBg};
  padding: ${l.w4.spacing.xl};
`,c=i().div`
  width: 100%;
  max-width: 480px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,d=i().div`
  font-size: 48px;
  text-align: center;
`,m=i().h1`
  font-size: 24px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,p=i().p`
  font-size: 14px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.6;
  margin: 0;
`,g=i().a`
  color: ${l.w4.colors.accent};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,u=i().label`
  font-size: 13px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,f=i().input`
  width: 100%;
  padding: 12px ${l.w4.spacing.md};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${l.w4.colors.accent};
  }

  &::placeholder {
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.5;
  }
`,x=i().button`
  padding: 12px;
  background: ${l.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity ${l.w4.transitions.fast};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,h=i().p`
  font-size: 13px;
  color: #f85149;
  text-align: center;
  margin: 0;
`;function b({onSave:e}){let[o,a]=(0,n.useState)(""),[r,i]=(0,n.useState)(!1),[l,y]=(0,n.useState)(""),w=async()=>{let a=o.trim();if(a){i(!0),y("");try{if(!(await fetch(`https://api.themoviedb.org/3/configuration?api_key=${a}`)).ok)throw Error("Invalid key");e(a)}catch{y("Could not validate API key. Check it and try again.")}finally{i(!1)}}};return(0,t.jsx)(s,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{children:"\uD83C\uDFAC"}),(0,t.jsx)(m,{children:"Movies & Series"}),(0,t.jsxs)(p,{children:["This app uses the free"," ",(0,t.jsx)(g,{href:"https://www.themoviedb.org/settings/api",target:"_blank",rel:"noreferrer",children:"TMDB API"})," ","to browse movies, TV shows, and documentaries — including where to stream them.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Create a free account on TMDB and paste your ",(0,t.jsx)("strong",{children:"API Key (v3)"})," below."]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,t.jsx)(u,{htmlFor:"apikey",children:"TMDB API Key (v3)"}),(0,t.jsx)(f,{id:"apikey",type:"password",placeholder:"e.g. a1b2c3d4e5f6...",value:o,onChange:e=>a(e.target.value),onKeyDown:e=>"Enter"===e.key&&w(),autoFocus:!0})]}),l&&(0,t.jsx)(h,{children:l}),(0,t.jsx)(x,{onClick:w,disabled:!o.trim()||r,children:r?"Validating…":"Connect"})]})})}},6250(e,o,a){a.d(o,{U:()=>q});var t=a(5723),n=a(7991),r=a(6859),i=a.n(r),l=a(5726),s=a(302),c=a(9753),d=a(2727),m=a.n(d),p=a(2799),g=a(8641),u=a(5569),f=a(140),x=a(1801);let h=i().div`
  position: relative;
  width: 150px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.22s ease;
  -webkit-tap-highlight-color: transparent;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.06);
      box-shadow: 0 14px 44px rgba(0, 0, 0, 0.75);
      z-index: 2;
    }
    &:hover button[data-eye] {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`,b=i().img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
  background: ${l.w4.colors.surface};
`,y=i().div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(135deg, ${l.w4.colors.surface} 0%, ${l.w4.colors.surfaceRaised} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 28px;
`,w=i().span`
  font-size: 10px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  padding: 0 8px;
  line-height: 1.3;
`,z=i().div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  padding-top: 40px;
  background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,v=i().div`
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,$=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`,k=i().span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 10px;
  font-weight: 700;
  color: #e3b341;
`,A=i().span`
  font-size: 10px;
  color: rgba(255,255,255,0.55);
`,j=i().span`
  position: absolute;
  top: 7px;
  left: 7px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 4px;
  backdrop-filter: blur(8px);
  background: ${({kind:e})=>"movie"===e?"rgba(227,179,65,0.85)":"rgba(88,166,255,0.85)"};
  color: #000;
  z-index: 2;
`,S=i().button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.3);
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(8px);
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.2s, transform 0.2s cubic-bezier(0.34,1.56,0.64,1),
              background 0.15s, border-color 0.15s;
  z-index: 2;

  &:hover {
    background: rgba(88,166,255,0.5);
    border-color: rgba(88,166,255,0.7);
    color: #fff;
    transform: scale(1.1);
  }
  &:active { transform: scale(0.9); }
`,M=(0,p.keyframes)`
  from { opacity: 0; transform: scale(0.92) translateY(8px); }
  to   { opacity: 1; transform: scale(1)    translateY(0); }
`,T=i().div`
  position: fixed;
  top: ${({top:e})=>e}px;
  left: ${({left:e})=>e}px;
  width: 300px;
  background: ${l.w4.colors.surfaceRaised};
  border-radius: 14px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.08);
  overflow: hidden;
  z-index: 9999;
  animation: ${M} 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  @media (max-width: 480px) {
    width: 280px;
  }
`,_=i().div`
  width: 100%;
  padding-top: 56.25%;
  background: url(${({src:e})=>e}) center/cover no-repeat;
  background-color: ${l.w4.colors.surfaceRaised};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 65%;
    background: linear-gradient(to bottom, transparent, ${l.w4.colors.surfaceRaised});
  }
`,C=i().div`
  width: 100%;
  padding-top: 56.25%;
  background: linear-gradient(135deg, ${l.w4.colors.surface} 0%, ${l.w4.colors.surfaceRaised} 100%);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to bottom, transparent, ${l.w4.colors.surfaceRaised});
  }
`,B=i().div`
  padding: 10px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`,E=i().div`
  font-size: 14px;
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  line-height: 1.25;
  letter-spacing: -0.02em;
`,P=i().div`
  display: flex;
  align-items: center;
  gap: 8px;
`,F=i().span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 700;
  color: #e3b341;
`,R=i().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
`,D=i().span`
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 4px;
  background: ${({kind:e})=>"movie"===e?"rgba(227,179,65,0.15)":"rgba(88,166,255,0.15)"};
  color: ${({kind:e})=>"movie"===e?"#e3b341":"#58a6ff"};
`,I=i().p`
  font-size: 11px;
  line-height: 1.6;
  color: ${l.w4.colors.mainTextMuted};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,L=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 0;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${l.w4.colors.border};
  background: rgba(88,166,255,0.12);
  color: ${l.w4.colors.accent};
  transition: background ${l.w4.transitions.fast};
  width: 100%;

  &:hover { background: rgba(88,166,255,0.22); }
  &:active { transform: scale(0.97); }
`;function N({item:e,rect:o,onOpen:a,onMouseEnter:n,onMouseLeave:r,withBackdrop:i,onBackdropTap:l}){let s=function(e){let o=window.innerWidth,a=window.innerHeight;if(o<500){let t=Math.max(8,(o-300)/2);return{top:Math.max(8,Math.min(e.bottom+8,a-310-8)),left:t}}let t=e.right+10;t+300>o-8&&(t=e.left-300-10),t=Math.max(8,Math.min(t,o-300-8));let n=e.top+e.height/2-155;return{top:n=Math.max(8,Math.min(n,a-310-8)),left:t}}(o),c=(0,x.rS)(e),d=(0,x.Ox)(e),p=(0,x.U7)(e.backdrop_path,"w780");return m().createPortal((0,t.jsxs)(t.Fragment,{children:[i&&(0,t.jsx)("div",{style:{position:"fixed",inset:0,zIndex:9998},onClick:l}),(0,t.jsxs)(T,{top:s.top,left:s.left,onMouseEnter:n,onMouseLeave:r,onClick:a,style:{cursor:"pointer"},children:[p?(0,t.jsx)(_,{src:p}):(0,t.jsx)(C,{}),(0,t.jsxs)(B,{children:[(0,t.jsx)(E,{children:c}),(0,t.jsxs)(P,{children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(g.A,{size:11,fill:"currentColor"}),e.vote_average.toFixed(1)]}),d&&(0,t.jsx)(R,{children:d}),(0,t.jsx)(D,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV"})]}),e.overview&&(0,t.jsx)(I,{children:e.overview}),(0,t.jsxs)(L,{onClick:a,children:[(0,t.jsx)(u.A,{size:13}),"More Info"]})]})]})]}),document.body)}function H({item:e,onClick:o}){let a=(0,x.rS)(e),r=(0,x.Ox)(e),i=(0,x.HD)(e.poster_path),l=(0,n.useRef)(null),s=(0,n.useRef)(),c=(0,n.useRef)(),d=(0,n.useRef)(null),m=(0,n.useRef)(!1),[p,u]=(0,n.useState)(!1),[M,T]=(0,n.useState)(null),[_,C]=(0,n.useState)(!1);(0,n.useEffect)(()=>()=>{clearTimeout(s.current),clearTimeout(c.current)},[]);let B=(0,n.useCallback)((e,o)=>{T(e),u(!0),C(o)},[]),E=(0,n.useCallback)(()=>{u(!1),T(null),C(!1)},[]),P=(0,n.useCallback)(()=>{E(),o(e)},[e,o,E]),F=(0,n.useCallback)(()=>{clearTimeout(c.current)},[]),R=(0,n.useCallback)(()=>{clearTimeout(s.current),c.current=setTimeout(E,180)},[E]),D=(0,n.useCallback)(()=>{clearTimeout(c.current)},[]),I=(0,n.useCallback)(()=>{E()},[E]),L=(0,n.useCallback)(e=>{p||(d.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},[p]),K=(0,n.useCallback)(a=>{if(p||!d.current)return;let t=a.changedTouches[0],n=Math.abs(t.clientX-d.current.x),r=Math.abs(t.clientY-d.current.y);if(d.current=null,n>8||r>8)return;if(m.current=!0,window.innerWidth<768)return void o(e);let i=l.current?.getBoundingClientRect();i&&B(i,!0)},[p,e,o,B]),Y=(0,n.useCallback)(()=>{if(m.current){m.current=!1;return}p||_||P()},[p,_,P]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(h,{ref:l,onClick:Y,onMouseEnter:F,onMouseLeave:R,onTouchStart:L,onTouchEnd:K,title:a,role:"button",tabIndex:0,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&P()},children:[(0,t.jsx)(j,{kind:e.media_type,children:"movie"===e.media_type?"Film":"TV"}),(0,t.jsx)(S,{"data-eye":!0,onClick:e=>{e.stopPropagation();let o=l.current?.getBoundingClientRect();o&&B(o,!1)},title:"Preview",children:(0,t.jsx)(f.A,{size:14})}),i?(0,t.jsx)(b,{src:i,alt:a,loading:"lazy"}):(0,t.jsxs)(y,{children:["\uD83C\uDFAC",(0,t.jsx)(w,{children:a})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(v,{children:a}),(0,t.jsxs)($,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(g.A,{size:9,fill:"currentColor"}),e.vote_average.toFixed(1)]}),r&&(0,t.jsx)(A,{children:r})]})]})]}),p&&M&&(0,t.jsx)(N,{item:e,rect:M,onOpen:P,onMouseEnter:D,onMouseLeave:I,withBackdrop:_,onBackdropTap:E})]})}let K=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  padding: 0 ${l.w4.spacing.xxl};
  position: relative;
`,Y=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,U=i().h2`
  font-size: 18px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.01em;
`,V=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,G=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.surface};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,O=i().div`
  position: relative;
  overflow: hidden;
`,W=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 4px;
  /* Contain horizontal overscroll so trackpad + touch don't leak into the
   * page's vertical scroll on iPad / macOS. */
  overscroll-behavior-x: contain;
  /* Snap each card to the left edge as a soft anchor. "proximity" keeps
   * free-scroll feeling unrestricted while landing at a card boundary when
   * the user lifts off near one. */
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar { display: none; }

  /* Every direct child (MediaCard, SkeletonCard) gets snapped. Keeps the
   * snap logic local to the row — no per-child change needed. */
  & > * {
    scroll-snap-align: start;
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${l.w4.borderRadius.sm};
  }
`,J=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 14px;
  border: 1px dashed ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
`,Z=i().div`
  width: 160px;
  aspect-ratio: 2/3;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    ${l.w4.colors.surface} 25%,
    ${l.w4.colors.sidebarHover} 50%,
    ${l.w4.colors.surface} 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;function X(e){return Math.max(320,Math.round(.85*e.clientWidth))}function q({title:e,items:o,loading:a,onSelect:r}){let i=(0,n.useRef)(null),[l,d]=(0,n.useState)(!1),[m,p]=(0,n.useState)(!0),g=(0,n.useCallback)(()=>{let e=i.current;e&&(d(e.scrollLeft>0),p(e.scrollLeft+e.clientWidth<e.scrollWidth-4))},[]);(0,n.useEffect)(()=>{g();let e=()=>g();return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[o,g]);let u=()=>{let e=i.current;e&&e.scrollBy({left:-X(e),behavior:"smooth"})},f=()=>{let e=i.current;e&&e.scrollBy({left:X(e),behavior:"smooth"})};return(0,t.jsxs)(K,{children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(U,{children:e}),(0,t.jsxs)(V,{children:[(0,t.jsx)(G,{onClick:u,disabled:!l,"aria-label":"Scroll left",children:(0,t.jsx)(s.A,{size:16})}),(0,t.jsx)(G,{onClick:f,disabled:!m||0===o.length,"aria-label":"Scroll right",children:(0,t.jsx)(c.A,{size:16})})]})]}),(0,t.jsx)(O,{children:a?(0,t.jsx)(W,{children:Array.from({length:10}).map((e,o)=>(0,t.jsx)(Z,{},o))}):0===o.length?(0,t.jsx)(J,{children:"No results found"}):(0,t.jsx)(W,{ref:i,onScroll:g,onKeyDown:e=>{if("ArrowRight"===e.key)e.preventDefault(),f();else if("ArrowLeft"===e.key)e.preventDefault(),u();else if("Home"===e.key)e.preventDefault(),i.current?.scrollTo({left:0,behavior:"smooth"});else if("End"===e.key){e.preventDefault();let o=i.current;o&&o.scrollTo({left:o.scrollWidth,behavior:"smooth"})}},tabIndex:0,role:"region","aria-label":e,children:o.map(e=>(0,t.jsx)(H,{item:e,onClick:r},`${e.media_type}-${e.id}`))})})]})}},2819(e,o,a){a.d(o,{P:()=>e$});var t=a(5723),n=a(7991),r=a(6859),i=a.n(r),l=a(2799),s=a(5726),c=a(2743),d=a(8641),m=a(3775),p=a(1783),g=a(5031),u=a(6135),f=a(2310),x=a(2709),h=a(8440),b=a(140),y=a(4872),w=a(4525),z=a(1849),v=a(2126),$=a(1801),k=a(4956);let A=(0,l.keyframes)`
  from { transform: translateX(6%); opacity: 0; }
  to   { transform: translateX(0);  opacity: 1; }
`,j=(0,l.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,S=i().div`
  flex: 1;
  background: ${s.w4.colors.mainBg};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${j} 0.2s ease;
  scrollbar-width: thin;
  scrollbar-color: ${s.w4.colors.border} transparent;
`,M=i().div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${A} 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`,T=i().div`
  position: relative;
  width: 100%;
  /* 16:9 on small screens, capped at 440px on wide displays so the hero
     doesn't dominate the page. Stays full-bleed horizontally. */
  height: clamp(280px, 42vw, 440px);
  background: url(${({src:e})=>e}) center center / cover no-repeat;
  background-color: ${s.w4.colors.surface};
  flex-shrink: 0;
  overflow: hidden;

  /* Subtle ambient wash on top of the backdrop so it reads as part of the
     app, not as a raw poster — lets the image breathe. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      120% 80% at 30% 40%,
      transparent 0%,
      rgba(0, 0, 0, 0.35) 70%,
      rgba(0, 0, 0, 0.55) 100%
    );
    pointer-events: none;
  }

  /* Bottom fade to the app background so text stays legible and the hero
     bleeds smoothly into the content below. Softer than before to keep
     backdrop detail visible. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        to bottom,
        transparent 0%,
        transparent 45%,
        rgba(0, 0, 0, 0.55) 75%,
        ${s.w4.colors.mainBg} 100%
      ),
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.2) 45%,
        transparent 70%
      );
    pointer-events: none;
  }
`,_=i().div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 28px 28px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    padding: 0 48px 36px;
    max-width: 640px;
  }
`,C=(0,l.keyframes)`
  to { transform: rotate(360deg); }
`,B=i().div`
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(4px);
`,E=i().div`
  width: 36px;
  height: 36px;
  border: 3px solid ${s.w4.colors.border};
  border-top-color: ${s.w4.colors.accent};
  border-radius: 50%;
  animation: ${C} 0.7s linear infinite;
`,P=i().h1`
  font-size: clamp(24px, 5vw, 42px);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
`,F=i().p`
  font-size: 14px;
  color: rgba(255,255,255,0.65);
  font-style: italic;
  margin: 0;
`,R=i().div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`,D=i().span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  font-weight: 800;
  color: #e3b341;
`,I=i().span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: rgba(255,255,255,0.6);
`,L=i().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,N=i().span`
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.75);
  backdrop-filter: blur(4px);
`,H=i().div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,K=i().a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  border: none;
  background: #fff;
  color: #000;
  text-decoration: none;
  transition: opacity ${s.w4.transitions.fast}, transform ${s.w4.transitions.fast};
  letter-spacing: -0.01em;

  &:hover { opacity: 0.9; }
  &:active { transform: scale(0.97); }
`,Y=i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 11px 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({active:e,danger:o})=>o?"#f85149":e?s.w4.colors.accent:"rgba(255,255,255,0.25)"};
  background: ${({active:e,danger:o})=>o?"rgba(248,81,73,0.15)":e?"rgba(88,166,255,0.2)":"rgba(255,255,255,0.08)"};
  color: ${({active:e,danger:o})=>o?"#f85149":e?s.w4.colors.accent:"rgba(255,255,255,0.85)"};
  backdrop-filter: blur(4px);
  transition: background ${s.w4.transitions.fast}, transform ${s.w4.transitions.fast};

  &:hover { background: rgba(255,255,255,0.14); }
  &:active { transform: scale(0.97); }
`,U=i().div`
  flex: 1;
  padding: 32px 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  @media (min-width: 768px) {
    padding: 36px 48px 64px;
  }
`,V=i().p`
  font-size: 15px;
  line-height: 1.8;
  color: ${s.w4.colors.mainTextMuted};
  margin: 0;
`,G=i().div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,O=i().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${s.w4.colors.border};
`,W=i().div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(88,166,255,0.1);
  border: 1px solid rgba(88,166,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.w4.colors.accent};
  flex-shrink: 0;
`,J=i().h2`
  font-size: 16px;
  font-weight: 800;
  color: ${s.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,Z=i().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  border: 1.5px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.08);
  color: #fff;
  text-decoration: none;
  backdrop-filter: blur(4px);
  transition: background ${s.w4.transitions.fast}, transform ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast};
  letter-spacing: -0.01em;

  &:hover { background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.5); }
  &:active { transform: scale(0.97); }
`,X=i().div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,q=i().div`
  width: 100%;
  max-width: 900px;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8);
  animation: scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
`,Q=i().div`
  position: relative;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`,ee=i().button`
  position: absolute;
  top: -44px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast};
  &:hover { background: rgba(255, 255, 255, 0.2); }
`,eo=i().div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 4px;
  &::-webkit-scrollbar { display: none; }
`,ea=i().div`
  flex-shrink: 0;
  width: 110px;
  border-radius: 12px;
  overflow: hidden;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  transition: transform ${s.w4.transitions.fast}, box-shadow ${s.w4.transitions.fast};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.5);
  }
`,et=i().img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
`,en=i().div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(135deg, #1e2533 0%, #252d3d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`,er=i().div`
  padding: 8px 8px 10px;
`,ei=i().div`
  font-size: 11px;
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,el=i().div`
  font-size: 10px;
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 3px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,es=i().div`
  flex-shrink: 0;
  width: 120px;
  border-radius: 12px;
  overflow: hidden;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  cursor: pointer;
  transition: transform ${s.w4.transitions.fast}, box-shadow ${s.w4.transitions.fast};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.5);
  }
`,ec=i().img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
`,ed=i().div`
  width: 100%;
  aspect-ratio: 2/3;
  background: linear-gradient(135deg, #1e2533 0%, #252d3d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`,em=i().div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,ep=i().a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 12px;
  background: ${({bg:e})=>e};
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform ${s.w4.transitions.fast}, box-shadow ${s.w4.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  }
  &:active { transform: scale(0.97); }
`,eg=i().img`
  width: 32px;
  height: 32px;
  border-radius: 7px;
  object-fit: cover;
  flex-shrink: 0;
`,eu=i().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ef=i().span`
  font-size: 13px;
  font-weight: 700;
  color: #fff;
`,ex=i().span`
  font-size: 10px;
  color: rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  gap: 3px;
`,eh=i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  background: ${({bg:e})=>e};
  border: 1px solid rgba(255,255,255,0.06);
  opacity: 0.55;
`,eb=i().img`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  object-fit: cover;
`,ey=i().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${s.w4.colors.mainTextMuted};
  margin-bottom: 8px;
`,ew=i().p`
  font-size: 14px;
  color: ${s.w4.colors.mainTextMuted};
  margin: 0;
`,ez=i().div`
  font-size: 14px;
  color: ${s.w4.colors.mainTextMuted};
  padding: 12px 0;
`;function ev({provider:e,title:o,appleTVUrl:a}){let n=$.RY[e.provider_name]??s.w4.colors.surface,r=(0,$.$8)(e,o,a);return(0,t.jsxs)(ep,{bg:n,href:r,target:"_blank",rel:"noreferrer",children:[e.logo_path&&(0,t.jsx)(eg,{src:(0,$.vo)(e.logo_path),alt:e.provider_name}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:e.provider_name}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(c.A,{size:9}),(0,$.mS)(e.provider_id)?"Open in Apple TV":`Open in ${e.provider_name}`]})]})]})}function e$({item:e,apiKey:o,onBack:a,onLibraryChange:r,onSelect:i}){let[l,c]=(0,n.useState)(null),[A,j]=(0,n.useState)([]),[C,ep]=(0,n.useState)(null),[eg,eu]=(0,n.useState)([]),[ex,ek]=(0,n.useState)([]),[eA,ej]=(0,n.useState)(!0),[eS,eM]=(0,n.useState)(null),[eT,e_]=(0,n.useState)(!1),eC=(0,n.useRef)(null),[eB,eE]=(0,n.useState)(()=>(0,k.BA)(e)),[eP,eF]=(0,n.useState)(()=>(0,k.U4)(e)),eR=(0,$.rS)(e),eD=(0,$.Ox)(e);(0,n.useEffect)(()=>{let e=e=>{"Escape"===e.key&&(eT?e_(!1):a())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a,eT]),(0,n.useEffect)(()=>{eC.current?.scrollTo({top:0,behavior:"instant"})},[e.id]),(0,n.useEffect)(()=>{ej(!0),e_(!1),Promise.all([(0,$.Ug)(o,e.media_type,e.id),(0,$.fY)(o,e.media_type,e.id),(0,$.Mt)(o,e.media_type,e.id),(0,$.Pg)(o,e.media_type,e.id),(0,$.Dz)(o,e.media_type,e.id)]).then(([e,o,a,t,n])=>{c(e),j(o),ep(a),eu(t),ek(n),ej(!1)}).catch(()=>ej(!1)),(0,$.Su)(eR,e.media_type,eD).then(eM)},[e.id,e.media_type,o,eR,eD]);let eI=A.find(e=>"YouTube"===e.site&&("Trailer"===e.type||"Teaser"===e.type)&&e.official)??A.find(e=>"YouTube"===e.site&&"Trailer"===e.type)??A.find(e=>"YouTube"===e.site),eL=(0,n.useCallback)(()=>{(0,k.dw)(e),eE(e=>!e),r?.()},[e,r]),eN=(0,n.useCallback)(()=>{(0,k.w0)(e),eF(e=>!e),r?.()},[e,r]),eH=[...C?.flatrate??[]].filter((e,o,a)=>a.findIndex(o=>o.provider_id===e.provider_id)===o),eK=(C?.rent??[]).filter(e=>!eH.find(o=>o.provider_id===e.provider_id)),eY=eH[0],eU=eY?(0,$.$8)(eY,eR,eS):eS??`https://tv.apple.com/search?term=${encodeURIComponent(eR)}`,eV=(0,$.U7)(e.backdrop_path??l?.backdrop_path??null,"w1280");return(0,t.jsxs)(S,{ref:eC,children:[eA&&(0,t.jsx)(B,{children:(0,t.jsx)(E,{})}),(0,t.jsxs)(M,{children:[(0,t.jsx)(T,{src:eV,children:(0,t.jsxs)(_,{children:[(0,t.jsx)(P,{children:eR}),l?.tagline&&(0,t.jsxs)(F,{children:['"',l.tagline,'"']}),(0,t.jsxs)(R,{children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(d.A,{size:15,fill:"currentColor"}),e.vote_average.toFixed(1)]}),eD&&(0,t.jsxs)(I,{children:[(0,t.jsx)(m.A,{size:13}),eD]}),l?.runtime&&(0,t.jsxs)(I,{children:[(0,t.jsx)(p.A,{size:13}),Math.floor(l.runtime/60),"h ",l.runtime%60,"m"]}),l?.number_of_seasons&&(0,t.jsxs)(I,{children:[(0,t.jsx)(g.A,{size:13}),l.number_of_seasons," season",1!==l.number_of_seasons?"s":""]})]}),l?.genres&&l.genres.length>0&&(0,t.jsx)(L,{children:l.genres.map(e=>(0,t.jsx)(N,{children:e.name},e.id))}),(0,t.jsxs)(H,{children:[(0,t.jsxs)(K,{href:eU,target:"_blank",rel:"noreferrer",children:[(0,t.jsx)(u.A,{size:16,fill:"black"}),"Watch Now"]}),eI&&(0,t.jsxs)(Z,{onClick:()=>e_(!0),children:[(0,t.jsx)(f.A,{size:15}),"Trailer"]}),(0,t.jsxs)(Y,{active:eB,onClick:eL,children:[(0,t.jsx)(x.A,{size:14,fill:eB?"currentColor":"none"}),eB?"Favorited":"Favorite"]}),(0,t.jsxs)(Y,{active:eP,onClick:eN,children:[eP?(0,t.jsx)(h.A,{size:14}):(0,t.jsx)(b.A,{size:14}),eP?"Unseen":"Mark Seen"]}),(eB||eP)&&(0,t.jsx)(Y,{danger:!0,onClick:()=>{eB&&((0,k.dw)(e),eE(!1)),eP&&((0,k.w0)(e),eF(!1)),r?.()},children:(0,t.jsx)(y.A,{size:14})})]})]})}),(0,t.jsxs)(U,{children:[eA?(0,t.jsx)(ez,{children:"Loading…"}):(0,t.jsx)(V,{children:e.overview}),eI&&eT&&(0,t.jsx)(X,{onClick:e=>{e.target===e.currentTarget&&e_(!1)},children:(0,t.jsxs)(q,{children:[(0,t.jsxs)(ee,{onClick:()=>e_(!1),children:[(0,t.jsx)(w.A,{size:14})," Close"]}),(0,t.jsx)(Q,{children:(0,t.jsx)("iframe",{src:`https://www.youtube.com/embed/${eI.key}?autoplay=1&rel=0&modestbranding=1`,title:eI.name,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})]})}),(eA||eg.length>0)&&(0,t.jsxs)(G,{children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(z.A,{size:15})}),(0,t.jsx)(J,{children:"Cast"})]}),eA?(0,t.jsx)(ez,{children:"Loading cast…"}):(0,t.jsx)(eo,{children:eg.map(e=>(0,t.jsxs)(ea,{children:[e.profile_path?(0,t.jsx)(et,{src:(0,$.DW)(e.profile_path,"w185"),alt:e.name,loading:"lazy"}):(0,t.jsx)(en,{children:"\uD83D\uDC64"}),(0,t.jsxs)(er,{children:[(0,t.jsx)(ei,{children:e.name}),e.character&&(0,t.jsx)(el,{children:e.character})]})]},e.id))})]}),(0,t.jsxs)(G,{children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(v.A,{size:15})}),(0,t.jsx)(J,{children:"Where to Watch"})]}),eA?(0,t.jsx)(ez,{children:"Loading streaming info…"}):eH.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(em,{children:eH.map(e=>(0,t.jsx)(ev,{provider:e,title:eR,appleTVUrl:eS},e.provider_id))}),eK.length>0&&(0,t.jsxs)("div",{style:{marginTop:8},children:[(0,t.jsx)(ey,{children:"Also available to rent"}),(0,t.jsx)(em,{children:eK.map(e=>(0,t.jsxs)(eh,{bg:$.RY[e.provider_name]??s.w4.colors.surface,children:[e.logo_path&&(0,t.jsx)(eb,{src:(0,$.vo)(e.logo_path),alt:e.provider_name}),(0,t.jsx)(ef,{style:{color:"#fff"},children:e.provider_name})]},e.provider_id))})]})]}):(C?.rent??[]).length>0?(0,t.jsxs)("div",{children:[(0,t.jsx)(ew,{children:"Not on any streaming subscription right now."}),(0,t.jsx)(ey,{style:{marginTop:12},children:"Available to rent"}),(0,t.jsx)(em,{children:(C?.rent??[]).map(e=>(0,t.jsxs)(eh,{bg:$.RY[e.provider_name]??s.w4.colors.surface,children:[e.logo_path&&(0,t.jsx)(eb,{src:(0,$.vo)(e.logo_path),alt:e.provider_name}),(0,t.jsx)(ef,{style:{color:"#fff"},children:e.provider_name})]},e.provider_id))})]}):(0,t.jsx)(ew,{children:"No streaming info available for your region (US)."})]}),ex.length>0&&(0,t.jsxs)(G,{children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(d.A,{size:15})}),(0,t.jsx)(J,{children:"You Might Also Like"})]}),(0,t.jsx)(eo,{children:ex.map(e=>(0,t.jsxs)(es,{onClick:()=>i?.(e),children:[(0,$.HD)(e.poster_path)?(0,t.jsx)(ec,{src:(0,$.HD)(e.poster_path,"w185"),alt:(0,$.rS)(e),loading:"lazy"}):(0,t.jsx)(ed,{children:"\uD83C\uDFAC"}),(0,t.jsxs)(er,{children:[(0,t.jsx)(ei,{children:(0,$.rS)(e)}),(0,t.jsxs)(el,{children:[(0,t.jsx)(d.A,{size:9,fill:"#e3b341",color:"#e3b341",style:{verticalAlign:-1}})," ",e.vote_average.toFixed(1)," \xb7 ",(0,$.Ox)(e)]})]})]},e.id))})]})]})]})]})}},1620(e,o,a){a.d(o,{K:()=>I});var t=a(5723),n=a(7991),r=a.n(n),i=a(2727),l=a.n(i),s=a(6859),c=a.n(s),d=a(2799),m=a(5726),p=a(7408),g=a(4525),u=a(5609),f=a(1801);let x=(0,d.keyframes)`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`,h=(0,d.keyframes)`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`,b=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,y=c().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1100;
  animation: ${b} 0.2s ease;
`,w=c().div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 100vw);
  background: ${m.w4.colors.mainBg};
  border-left: 1px solid ${m.w4.colors.border};
  display: flex;
  flex-direction: column;
  font-family: ${m.w4.typography.fontFamily};
  z-index: 1101;
  animation: ${x} 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;

  @media (max-width: 540px) {
    top: auto;
    right: 0;
    left: 0;
    width: 100%;
    max-height: 88vh;
    border-left: none;
    border-top: 1px solid ${m.w4.colors.border};
    border-radius: 20px 20px 0 0;
    animation: ${h} 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  }
`,z=c().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 14px;
  border-bottom: 1px solid ${m.w4.colors.border};
  flex-shrink: 0;
`,v=c().h2`
  font-size: 17px;
  font-weight: 800;
  color: ${m.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,$=c().div`
  display: flex;
  align-items: center;
  gap: 8px;
`,k=c().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid ${m.w4.colors.border};
  background: none;
  color: ${m.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${m.w4.transitions.fast}, color ${m.w4.transitions.fast};

  &:hover { background: ${m.w4.colors.surface}; color: ${m.w4.colors.mainText}; }
`,A=c().button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${m.w4.colors.surface};
  color: ${m.w4.colors.mainText};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background ${m.w4.transitions.fast};

  &:hover { background: ${m.w4.colors.sidebarHover}; }
`,j=c().div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  scrollbar-width: thin;
  scrollbar-color: ${m.w4.colors.border} transparent;
`,S=c().div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,M=c().div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${m.w4.colors.mainTextMuted};
`,T=c().div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,_=c().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 13px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background ${m.w4.transitions.fast}, border-color ${m.w4.transitions.fast}, color ${m.w4.transitions.fast}, transform ${m.w4.transitions.fast};
  border: 1px solid ${({active:e,color:o})=>e?o??m.w4.colors.accent:m.w4.colors.border};
  background: ${({active:e,color:o})=>e?`${o??m.w4.colors.accent}22`:m.w4.colors.surface};
  color: ${({active:e,color:o})=>e?o??m.w4.colors.accent:m.w4.colors.mainTextMuted};

  &:hover { border-color: ${({color:e})=>e??m.w4.colors.accent}; }
  &:active { transform: scale(0.95); }
`,C=c()(_)`
  padding: 6px 12px 6px 8px;
`,B=c().div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  flex-shrink: 0;
`,E=c().div`
  padding: 16px 20px;
  border-top: 1px solid ${m.w4.colors.border};
  flex-shrink: 0;
`,P=c().button`
  width: 100%;
  padding: 13px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: ${({hasFilters:e})=>e?m.w4.colors.accent:m.w4.colors.surface};
  color: ${({hasFilters:e})=>e?"#fff":m.w4.colors.mainTextMuted};
  transition: background ${m.w4.transitions.base}, transform ${m.w4.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover { opacity: 0.9; }
  &:active { transform: scale(0.98); }
`,F={8:"#E50914",337:"#113CCF",9:"#00A8E0",350:"#555",1899:"#002BE7",15:"#3DBB3D",386:"#D0A42C",531:"#0064FF",283:"#F47521",11:"#5C3317"},R=[[28,"Action"],[12,"Adventure"],[16,"Animation"],[35,"Comedy"],[80,"Crime"],[18,"Drama"],[14,"Fantasy"],[27,"Horror"],[9648,"Mystery"],[10749,"Romance"],[878,"Sci-Fi"],[53,"Thriller"],[37,"Western"],[99,"Documentary"]];function D(e,o){return e.includes(o)?e.filter(e=>e!==o):[...e,o]}function I({filters:e,onChange:o,onClose:a}){let[i,s]=r().useState(()=>({genres:[...e.genres],providerIds:[...e.providerIds],decades:[...e.decades]})),c=i.genres.length+i.providerIds.length+i.decades.length,d=(0,n.useCallback)(()=>{s({genres:[],providerIds:[],decades:[]})},[]),m=(0,n.useCallback)(()=>{o(i),a()},[o,a,i]),x=(0,n.useCallback)(e=>{e.target===e.currentTarget&&a()},[a]);return l().createPortal((0,t.jsx)(y,{onClick:x,children:(0,t.jsxs)(w,{children:[(0,t.jsxs)(z,{children:[(0,t.jsxs)(v,{children:["Filter",c>0?` \xb7 ${c}`:""]}),(0,t.jsxs)($,{children:[c>0&&(0,t.jsxs)(k,{onClick:d,children:[(0,t.jsx)(p.A,{size:12}),"Reset"]}),(0,t.jsx)(A,{onClick:a,"aria-label":"Close filters",children:(0,t.jsx)(g.A,{size:16})})]})]}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(M,{children:"Genre"}),(0,t.jsx)(T,{children:R.map(([e,o])=>(0,t.jsxs)(_,{active:i.genres.includes(e),onClick:()=>s(o=>({...o,genres:D(o.genres,e)})),children:[i.genres.includes(e)&&(0,t.jsx)(u.A,{size:10}),o]},e))})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(M,{children:"Streaming Platform"}),(0,t.jsx)(T,{children:f.Mw.map(e=>{let o=F[e.id]??"#888",a=i.providerIds.includes(e.id);return(0,t.jsxs)(C,{active:a,color:o,onClick:()=>s(o=>({...o,providerIds:D(o.providerIds,e.id)})),children:[(0,t.jsx)(B,{bg:o}),e.name,a&&(0,t.jsx)(u.A,{size:10})]},e.id)})})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(M,{children:"Era / Decade"}),(0,t.jsx)(T,{children:f.c0.map(e=>(0,t.jsxs)(_,{active:i.decades.includes(e),onClick:()=>s(o=>({...o,decades:D(o.decades,e)})),children:[i.decades.includes(e)&&(0,t.jsx)(u.A,{size:10}),e]},e))})]})]}),(0,t.jsx)(E,{children:(0,t.jsx)(P,{hasFilters:c>0,onClick:m,children:c>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.A,{size:15})," Apply ",c," filter",1!==c?"s":""]}):"No filters active"})})]})}),document.body)}},1801(e,o,a){a.d(o,{$8:()=>w,$P:()=>B,DW:()=>s,Dz:()=>D,HD:()=>r,Kk:()=>_,Mt:()=>F,Mw:()=>u,N2:()=>g,NE:()=>A,Ox:()=>v,Pg:()=>R,RY:()=>f,Su:()=>x,U7:()=>i,Ug:()=>E,Zy:()=>M,_F:()=>S,ag:()=>C,c0:()=>k,eN:()=>T,fY:()=>P,mS:()=>b,rS:()=>z,vo:()=>l,zJ:()=>d});var t=a(5726);let n="https://image.tmdb.org/t/p",r=(e,o="w342")=>e?`${n}/${o}${e}`:"",i=(e,o="w1280")=>e?`${n}/${o}${e}`:"",l=(e,o="w92")=>e?`${n}/${o}${e}`:"",s=(e,o="w185")=>e?`${n}/${o}${e}`:"",c="adult";function d(e){c=e}function m(e){return(0,t.VN)(e,c)}async function p(e,o,a={}){let t=new URL(`https://api.themoviedb.org/3${o}`);for(let[o,n]of(t.searchParams.set("api_key",e),t.searchParams.set("language","en-US"),void 0===a.include_adult&&t.searchParams.set("include_adult",String("adult"===c)),Object.entries(a)))t.searchParams.set(o,n);let n=await fetch(t.toString());if(!n.ok)throw Error(`TMDB ${n.status}`);return n.json()}let g={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Sci-Fi",53:"Thriller",10752:"War",37:"Western",10759:"Action & Adventure",10762:"Kids",10765:"Sci-Fi & Fantasy",10768:"War & Politics",10766:"Soap",10767:"Talk",10763:"News",10764:"Reality"},u=[{id:8,name:"Netflix"},{id:337,name:"Disney+"},{id:9,name:"Amazon Prime"},{id:350,name:"Apple TV+"},{id:384,name:"HBO Max"},{id:1899,name:"Max"},{id:15,name:"Hulu"},{id:386,name:"Peacock"},{id:531,name:"Paramount+"},{id:283,name:"Crunchyroll"},{id:11,name:"MUBI"}],f={Netflix:"#E50914","Disney Plus":"#113CCF","Disney+":"#113CCF","Amazon Prime Video":"#00A8E0","Prime Video":"#00A8E0","Apple TV Plus":"#1C1C1E","Apple TV+":"#1C1C1E","HBO Max":"#552093",Max:"#002BE7",Hulu:"#3DBB3D",Peacock:"#D0A42C","Paramount Plus":"#0064FF","Paramount+":"#0064FF",Crunchyroll:"#F47521",Mubi:"#5C3317"};async function x(e,o,a){try{let t=await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(e)}&country=us&media=${"movie"===o?"movie":"tvShow"}&entity=${"movie"===o?"movie":"tvSeason"}&limit=5`);if(!t.ok)throw Error("iTunes API error");let n=(await t.json()).results??[];if(!n.length)throw Error("no results");let r=n[0];if(a){let e=parseInt(a,10),o=n.find(o=>String(o.releaseDate??"").startsWith(String(e)));o&&(r=o)}let i=r.trackViewUrl??r.collectionViewUrl??"";if(!i)throw Error("no url");return i}catch{return`https://tv.apple.com/search?term=${encodeURIComponent(e)}`}}let h=new Set([337,9,350,384,1899,386]);function b(e){return h.has(e)}let y={8:e=>`https://www.netflix.com/search?q=${encodeURIComponent(e)}`,15:e=>`https://www.hulu.com/search?q=${encodeURIComponent(e)}`,531:e=>`https://www.paramountplus.com/search/?q=${encodeURIComponent(e)}`,283:e=>`https://www.crunchyroll.com/search?q=${encodeURIComponent(e)}`,11:e=>`https://mubi.com/en/search?query=${encodeURIComponent(e)}`};function w(e,o,a){let t=y[e.provider_id];return t?t(o):(h.has(e.provider_id),a??`https://tv.apple.com/search?term=${encodeURIComponent(o)}`)}function z(e){return e.title??e.name??"Unknown"}function v(e){return(e.release_date??e.first_air_date??"").slice(0,4)}let $={"2020s":[2020,2029],"2010s":[2010,2019],"2000s":[2e3,2009],"1990s":[1990,1999],"1980s":[1980,1989],Classic:[1900,1979]},k=Object.keys($);async function A(e,o,a){let t={sort_by:"popularity.desc"};a.genres.length&&(t.with_genres=a.genres.join("|")),a.providerIds.length&&(t.with_watch_providers=a.providerIds.join("|"),t.watch_region="US");let{from:n,to:r}=function(e){if(!e.length)return{};let o=e.map(e=>$[e]).filter(Boolean);return{from:Math.min(...o.map(([e])=>e)),to:Math.max(...o.map(([,e])=>e))}}(a.decades);if(n&&(t["primary_release_date.gte"]=`${n}-01-01`,t["first_air_date.gte"]=`${n}-01-01`),r&&(t["primary_release_date.lte"]=`${r}-12-31`,t["first_air_date.lte"]=`${r}-12-31`),"all"===o){let[o,a]=await Promise.all([p(e,"/discover/movie",t),p(e,"/discover/tv",t)]);return m([...o.results.map(e=>({...e,media_type:"movie"})),...a.results.map(e=>({...e,media_type:"tv"}))].sort((e,o)=>(o.popularity??0)-(e.popularity??0)||o.vote_average-e.vote_average))}return m((await p(e,`/discover/${o}`,t)).results.map(e=>({...e,media_type:o})))}let j={with_genres:"10751",sort_by:"popularity.desc","vote_count.gte":"50"};async function S(e){if("kid"===c){let[o,a]=await Promise.all([p(e,"/discover/movie",j),p(e,"/discover/tv",j)]);return m([...o.results.map(e=>({...e,media_type:"movie"})),...a.results.map(e=>({...e,media_type:"tv"}))].sort((e,o)=>(o.popularity??0)-(e.popularity??0)))}return m((await p(e,"/trending/all/week")).results.filter(e=>"movie"===e.media_type||"tv"===e.media_type))}async function M(e){let o="kid"===c?"/discover/movie":"/movie/popular",a="kid"===c?j:{};return m((await p(e,o,a)).results.map(e=>({...e,media_type:"movie"})))}async function T(e){let o="kid"===c?"/discover/tv":"/tv/popular",a="kid"===c?j:{};return m((await p(e,o,a)).results.map(e=>({...e,media_type:"tv"})))}async function _(e,o){let a="kid"===c?`/discover/${o}`:`/${o}/top_rated`,t="kid"===c?{...j,sort_by:"vote_average.desc","vote_count.gte":"500"}:{};return m((await p(e,a,t)).results.map(e=>({...e,media_type:o})))}async function C(e){let[o,a]=await Promise.all([p(e,"/discover/movie",{with_genres:"99",sort_by:"popularity.desc"}),p(e,"/discover/tv",{with_genres:"99",sort_by:"popularity.desc"})]);return m([...o.results.map(e=>({...e,media_type:"movie"})),...a.results.map(e=>({...e,media_type:"tv"}))].sort((e,o)=>o.vote_average-e.vote_average))}async function B(e,o){return m((await p(e,"/search/multi",{query:o,include_adult:"false"})).results.filter(e=>"movie"===e.media_type||"tv"===e.media_type))}async function E(e,o,a){return{...await p(e,`/${o}/${a}`),media_type:o}}async function P(e,o,a){return(await p(e,`/${o}/${a}/videos`)).results??[]}async function F(e,o,a,t="US"){let n=await p(e,`/${o}/${a}/watch/providers`);return n.results?.[t]??{}}async function R(e,o,a){return((await p(e,`/${o}/${a}/credits`)).cast??[]).sort((e,o)=>e.order-o.order).slice(0,20)}async function D(e,o,a){return((await p(e,`/${o}/${a}/recommendations`)).results??[]).filter(e=>e.poster_path).map(e=>({...e,media_type:e.media_type??o})).slice(0,15)}},4956(e,o,a){a.d(o,{BA:()=>s,GB:()=>d,U4:()=>m,dw:()=>c,qx:()=>l,w0:()=>p});let t="atlantis:movies:favorites",n="atlantis:movies:seen";function r(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}function i(e,o){try{localStorage.setItem(e,JSON.stringify(o))}catch{}}function l(){return r(t)}function s(e){return l().some(o=>o.id===e.id&&o.media_type===e.media_type)}function c(e){let o=l(),a=o.some(o=>o.id===e.id&&o.media_type===e.media_type)?o.filter(o=>o.id!==e.id||o.media_type!==e.media_type):[e,...o];return i(t,a),a}function d(){return r(n)}function m(e){return d().some(o=>o.id===e.id&&o.media_type===e.media_type)}function p(e){let o,a,t;return m(e)?(i(n,o=d().filter(o=>o.id!==e.id||o.media_type!==e.media_type)),o):(a=d().filter(o=>o.id!==e.id||o.media_type!==e.media_type),i(n,t=[e,...a].slice(0,15)),t)}},7330(e,o,a){a.d(o,{FlyoutPanel:()=>eE});var t=a(5723),n=a(7991),r=a.n(n),i=a(6859),l=a.n(i),s=a(2799),c=a(255),d=a(1316),m=a(814),p=a(6896),g=a(7902),u=a(3013),f=a(2887),x=a(9510),h=a(9848),b=a(7901),y=a(3045),w=a(3775),z=a(1783),v=a(3539),$=a(9416),k=a(1837),A=a(7167),j=a(4494),S=a(2314),M=a(5751),T=a(9633),_=a(2946),C=a(822),B=a(6720),E=a(7400),P=a(8456),F=a(3317),R=a(2709),D=a(8006),I=a(9301),L=a(7561),N=a(3517),H=a(8207),K=a(7032),Y=a(6949),U=a(8218),V=a(6829),G=a(9591),O=a(5553),W=a(9923),J=a(2820),Z=a(4621),X=a(8479),q=a(2534),Q=a(6673),ee=a(7490),eo=a(9033),ea=a(9038),et=a(5775),en=a(1365),er=a(2937),ei=a(9821),el=a(5912),es=a(158),ec=a(8641),ed=a(8607),em=a(3249),ep=a(1821),eg=a(5889),eu=a(9655),ef=a(7170),ex=a(9161),eh=a(1849),eb=a(1604),ey=a(3142),ew=a(1187),ez=a(7747),ev=a(2932),e$=a(4525),ek=a(7230),eA=a(2164);let ej={activity:p.A,"a-large-small":g.A,apple:u.A,"arrow-right":f.A,"bar-chart-2":x.A,book:h.A,"book-open":b.A,briefcase:y.A,calendar:w.A,clock:z.A,"circle-dot":v.A,cloud:$.A,compass:k.A,cpu:A.A,droplets:j.A,feather:S.A,file:c.A,"file-text":M.A,folder:T.A,"git-branch":_.A,github:C.A,globe:B.A,grid:E.A,hand:P.A,hash:F.A,heart:R.A,key:D.A,hexagon:I.A,home:L.A,landmark:N.A,layers:H.A,"layout-grid":K.A,leaf:Y.A,lightbulb:U.A,list:V.A,map:G.A,"map-pin":O.A,"message-circle":W.A,"message-square":J.A,minus:Z.A,monitor:X.A,mountain:q.A,package:Q.A,palette:ee.A,"pen-tool":eo.A,"pie-chart":ea.A,plane:et.A,plus:en.A,ruler:er.A,shirt:ei.A,slash:el.A,square:es.A,star:ec.A,sun:ed.A,terminal:em.A,thermometer:ep.A,triangle:eg.A,trophy:eu.A,truck:ef.A,type:ex.A,users:eh.A,"volume-2":eb.A,watch:ey.A,waves:ew.A,wind:ez.A,wrench:ev.A,x:e$.A,zap:ek.A,bot:eA.A},eS=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,eM=l().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.accentMuted};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${eS} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${d.w4.colors.accent};
    opacity: 0.4;
  }
`,eT=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.accent};
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  font-family: ${d.w4.typography.fontFamily};
`,e_=l().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${d.w4.colors.accentMuted};
    color: ${d.w4.colors.mainText};
  }
`;function eC({iconKey:e}){let o=e?ej[e]??c.A:c.A;return(0,t.jsx)(o,{size:14,strokeWidth:1.75})}function eB({entries:e,activeId:o,onSelect:a}){return(0,t.jsx)(t.Fragment,{children:e.map(e=>e.children?(0,t.jsx)(r().Fragment,{children:(0,t.jsx)(eB,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,t.jsxs)(e_,{active:o===e.id,onClick:()=>a(e),children:[(0,t.jsx)(eC,{iconKey:e.icon}),e.name]},e.id))})}function eE({activeId:e}){let{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:n}=(0,m.c)();if(!o)return null;let r=o.entry.icon?ej[o.entry.icon]??c.A:c.A;return(0,t.jsxs)(eM,{anchorY:o.anchorY,onMouseEnter:n,onMouseLeave:a,children:[(0,t.jsxs)(eT,{children:[(0,t.jsx)(r,{size:13,strokeWidth:2}),o.entry.name]}),(0,t.jsx)(eB,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},814(e,o,a){a.d(o,{I:()=>n,c:()=>r});var t=a(7991);let n=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,t.useContext)(n)},5726(e,o,a){a.d(o,{w4:()=>t.w4,xc:()=>J,VF:()=>H,PE:()=>C,fy:()=>Y,VN:()=>X});var t=a(1316),n=a(5723),r=a(7991),i=a.n(r),l=a(6859),s=a.n(l);s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${t.w4.spacing.sm};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;var c=a(2799),d=a(3661),m=a(814);let p="260px",g="56px",u="48px",f=s().header`
  display: flex;
  align-items: center;
  height: calc(${u} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${t.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${u} + env(safe-area-inset-top, 0px));
  }
`,x=s().div`
  width: ${g};
  min-width: ${g};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,h=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,b=(0,c.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,y=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,w=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${b} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,z=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  padding-left: ${t.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${t.w4.spacing.sm};
    color: ${t.w4.colors.border};
  }
`,v=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.w4.spacing.md};
  padding: 0 ${t.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${t.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${t.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${t.w4.spacing.xs} ${t.w4.spacing.sm};
    gap: ${t.w4.spacing.xs};
    border-top: 1px solid ${t.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,$=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,k=s().div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,A=s().aside`
  width: ${({collapsed:e})=>e?g:p};
  min-width: ${({collapsed:e})=>e?g:p};
  background: ${t.w4.colors.sidebarBg};
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,j=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,S=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,M=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function T(){return(0,n.jsx)(y,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:M.map((e,o)=>(0,n.jsx)(w,{index:o,accent:e.accent,children:e.char},o))})}let _="atlantis:sidebar-collapsed";function C({sidebar:e,children:o,topBarRight:t,title:l="Atlantis",activeId:s=null}){let[c,p]=(0,r.useState)(()=>{try{return"true"===localStorage.getItem(_)}catch{return!1}}),[g,u]=(0,r.useState)(null),b=(0,r.useRef)(),y=()=>p(e=>{let o=!e;try{localStorage.setItem(_,String(o))}catch{}return o}),w=i().useMemo(()=>i().lazy(()=>Promise.resolve().then(a.bind(a,7330)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,n.jsx)(m.I.Provider,{value:{collapsed:c,toggle:y,flyout:g,openFlyout:(e,o,a)=>{clearTimeout(b.current),u({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{b.current=setTimeout(()=>u(null),160)},cancelFlyoutClose:()=>clearTimeout(b.current)},children:(0,n.jsxs)(k,{children:[(0,n.jsxs)(f,{children:[e&&(0,n.jsx)(x,{children:(0,n.jsx)(h,{onClick:y,title:c?"Expand sidebar":"Collapse sidebar",children:(0,n.jsx)(d.A,{size:17})})}),(0,n.jsx)(T,{}),l&&(0,n.jsx)(z,{children:l}),t&&(0,n.jsx)(v,{children:t})]}),(0,n.jsxs)($,{children:[null!=e&&(0,n.jsx)(A,{collapsed:c,children:(0,n.jsx)(j,{children:e})}),(0,n.jsx)(S,{children:o})]}),g&&(0,n.jsx)(i().Suspense,{fallback:null,children:(0,n.jsx)(w,{activeId:s})})]})})}s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,s().div`
  overflow: hidden;
`,s().div`
  padding-left: ${t.w4.spacing.md};
`,s().div`
  display: flex;
  flex-direction: column;
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w4.spacing.sm} ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":t.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${t.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w4.colors.sidebarText};
    background: ${t.w4.colors.sidebarHover};
  }
`,s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`;let B=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${B} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${t.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${t.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${t.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${t.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${t.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${t.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,a(7330),s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
    border-color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places),s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?t.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`;let E=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,P=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${t.w4.spacing.md};
  animation: ${E} 0.15s ease both;
`,s().div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?t.w4.colors.danger+"55":t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${t.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${P} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?t.w4.colors.danger:t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${t.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${t.w4.transitions.fast},
    border-color ${t.w4.transitions.fast},
    color ${t.w4.transitions.fast},
    opacity ${t.w4.transitions.fast};

  background: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:o})=>o||e?"#fff":t.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${t.w4.focusRing} }
`,s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    border-color: ${t.w4.colors.accent};
  }
`,s().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,s().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,s().div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
  }
`,s().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-top: 1px;
`,s().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${t.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`;let F="documents",R="settings";function D(){return new Promise((e,o)=>{let a=indexedDB.open("atlantis-tools",2);a.onupgradeneeded=e=>{let o=e.target.result;o.objectStoreNames.contains(F)||o.createObjectStore(F,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),o.objectStoreNames.contains(R)||o.createObjectStore(R,{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>o(a.error)})}let I={async saveDoc(e,o,a){let t=await D(),n={appId:e,name:o,content:a,savedAt:Date.now()};return new Promise((e,o)=>{let a=t.transaction(F,"readwrite").objectStore(F).add(n);a.onsuccess=()=>e(String(a.result)),a.onerror=()=>o(a.error)})},async updateDoc(e,o,a){let t=await D();return new Promise((n,r)=>{let i=t.transaction(F,"readwrite").objectStore(F),l=i.get(Number(e));l.onsuccess=()=>{let e=l.result;if(!e)return void r(Error("Doc not found"));let t=i.put({...e,name:o,content:a,savedAt:Date.now()});t.onsuccess=()=>n(),t.onerror=()=>r(t.error)},l.onerror=()=>r(l.error)})},async listDocs(e){let o=await D();return new Promise((a,t)=>{let n=o.transaction(F,"readonly").objectStore(F).index("appId").getAll(e);n.onsuccess=()=>a(n.result.map(e=>({...e,id:String(e.id)})).reverse()),n.onerror=()=>t(n.error)})},async deleteDoc(e){let o=await D();return new Promise((a,t)=>{let n=o.transaction(F,"readwrite").objectStore(F).delete(Number(e));n.onsuccess=()=>a(),n.onerror=()=>t(n.error)})},async putSetting(e,o){let a=await D();return new Promise((t,n)=>{let r=a.transaction(R,"readwrite").objectStore(R).put({key:e,value:o});r.onsuccess=()=>t(),r.onerror=()=>n(r.error)})},async getSetting(e){let o=await D();return new Promise((a,t)=>{let n=o.transaction(R,"readonly").objectStore(R).get(e);n.onsuccess=()=>a(n.result?n.result.value:null),n.onerror=()=>t(n.error)})}};function L(e){return`app-recents:${e}`}async function N(e){var o;let a=await (o=L(e),I.getSetting(o));if(!a)return[];try{let e=JSON.parse(a);return Array.isArray(e)?e:[]}catch{return[]}}async function H(e,o){var a,t;let n=(await N(e)).filter(e=>e.hash!==o.hash),r=[{...o,ts:Date.now()},...n].slice(0,10);await (a=L(e),t=JSON.stringify(r),I.putSetting(a,t));try{window.dispatchEvent(new CustomEvent("atlantis:app-recents-change",{detail:{appId:e,entries:r}}))}catch{}}function K(){let e="u">typeof window?window.location.hash:"",o=e.indexOf("?");if(-1===o)return{};let a={};for(let t of e.slice(o+1).split("&")){if(!t)continue;let e=t.indexOf("=");-1===e?a[decodeURIComponent(t)]="":a[decodeURIComponent(t.slice(0,e))]=decodeURIComponent(t.slice(e+1))}return a}function Y(){let[e,o]=(0,r.useState)(K);return(0,r.useEffect)(()=>{let e=()=>o(K());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),e}let U="shell:profile",V="atlantis:profile-change",G=["tech","movies","learning","games","news","space"],O={interests:[],ageMode:"adult"};function W(e){return e&&"object"==typeof e?{interests:Array.isArray(e.interests)?e.interests.filter(e=>G.includes(e)):[],ageMode:"kid"===e.ageMode||"teen"===e.ageMode||"adult"===e.ageMode?e.ageMode:"adult"}:O}function J(){let[e,o]=(0,r.useState)(O);return(0,r.useEffect)(()=>{let e=!1;I.getSetting(U).then(a=>{if(!e&&a)try{o(W(JSON.parse(a)))}catch{}});let a=e=>{let a=e.detail;a&&o(a)};return window.addEventListener(V,a),()=>{e=!0,window.removeEventListener(V,a)}},[]),[e,(0,r.useCallback)(async e=>{var a;let t=W(e);o(t),window.dispatchEvent(new CustomEvent(V,{detail:t})),await (a=JSON.stringify(t),I.putSetting(U,a))},[])]}let Z=new Set([27]);function X(e,o){if("adult"===o)return e;let a=e.filter(e=>!0!==e.adult);return"teen"===o?a.filter(e=>!(e.genre_ids??[]).some(e=>Z.has(e))):a.filter(e=>(e.genre_ids??[]).includes(10751))}s().div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,s().section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,s().div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding-left: max(${t.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${t.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,s().span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`;let q=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Q=(0,c.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ee=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${q} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${Q} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${t.w4.colors.border};
  animation: ${ee} 1.4s ease-in-out infinite;
`,s().span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},1316(e,o,a){a.d(o,{w4:()=>r});let t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},n="--at-",r={colors:function(){let e={};for(let o of Object.keys(t))e[o]=`var(${n}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${n}suiteLab)`,vida:`var(${n}suiteVida)`,learn:`var(${n}suiteLearn)`,games:`var(${n}suiteGames)`,ent:`var(${n}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}}}]);