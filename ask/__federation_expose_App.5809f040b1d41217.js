"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([["362"],{73935(e,t,n){n.r(t),n.d(t,{default:()=>eS});var a=n(65723),i=n(37991),s=n(36859),r=n.n(s),o=n(72799),l=n(89874),c=n(53854),d=n(28395),p=n(28170),h=n(20948);let u={256:"short",512:"medium",1024:"long",2048:"xlong"},g="ask:active-conversation",x="ask:tone",m="ask:language",f="ask:max-tokens",w="ask:model-id";function y(e,t){return(0,p.aw)(new Date(e).toISOString(),t)}let b=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,k=(0,o.keyframes)`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,v=r().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,$=r().div`
  display: flex;
  justify-content: center;
  padding: ${l.w4.spacing.sm} 0;
`;function j({expanded:e,onNew:t,newLabel:n}){let{collapsed:i}=(0,l.cL)();return i?(0,a.jsx)($,{children:(0,a.jsx)(d.K0,{title:n,onClick:t,children:(0,a.jsx)(d.In,{name:"plus",size:14})})}):(0,a.jsx)(a.Fragment,{children:e})}let S=r().div`
  padding: ${l.w4.spacing.sm};
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
  flex-shrink: 0;
`,T=r().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.xs} 0;
`,C=r().div`
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.sm} 4px;
  margin-top: 4px;
`,I=r().div`
  position: relative;

  &:hover .conv-row-hover,
  &:focus-within .conv-row-hover {
    opacity: 1;
  }
`,E=r()("button",{shouldForwardProp:e=>"active"!==e})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 10px ${l.w4.spacing.sm};
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background ${l.w4.transitions.fast};
  min-height: 44px;

  &:hover {
    background: ${({active:e})=>e?l.w4.colors.accentMuted:l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    ${l.w4.focusRing}
  }
`,R=r().div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
`,M=r().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,A=r().div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
`,O=r().div`
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.sm};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextFaint};
  text-align: center;
  line-height: 1.5;
`,z=r().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;

  /* Radial glow anchored to top-center — very subtle */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 280px;
    background: radial-gradient(
      ellipse at 50% 0%,
      ${l.w4.colors.accent}0d 0%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 0;
  }
`,D=r().div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.md} ${l.w4.spacing.lg};
  position: relative;
  z-index: 1;
`,L=r().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
`,F=r().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${l.w4.spacing.xxl} 0 ${l.w4.spacing.xl};
  gap: ${l.w4.spacing.lg};
  animation: ${b} 0.3s ${l.w4.transitions.easing} both;
`,N=r().h1`
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 400;
  line-height: 1.15;
  margin: 0;
  background: linear-gradient(
    120deg,
    ${l.w4.colors.accent} 0%,
    ${l.w4.colors.mainText} 55%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,P=r().p`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,U=r().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  width: 100%;
  max-width: 600px;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,G=r().button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: ${l.w4.spacing.md};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 14px;
  text-align: left;
  cursor: pointer;
  min-height: 100px;
  transition:
    border-color ${l.w4.transitions.base},
    transform ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base};

  &:hover {
    border-color: ${l.w4.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${l.w4.elevation.md};
  }
  &:focus-visible {
    ${l.w4.focusRing}
  }
`,K=r().div`
  color: ${l.w4.colors.accent};
  opacity: 0.85;
`,q=r().div`
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  line-height: 1.3;
`,H=r().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.45;
`,Q=r().div`
  display: flex;
  flex-direction: column;
  align-items: ${({user:e})=>e?"flex-end":"flex-start"};
  gap: 4px;
  animation: ${b} 0.25s ${l.w4.transitions.easing} both;

  /* Reveal action row on hover/focus — no component selectors, plain class */
  &:hover .turn-actions,
  &:focus-within .turn-actions {
    opacity: 1;
  }
`,Y=r().div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 14px 14px 4px 14px;
  background: ${l.w4.colors.accentMuted};
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.55;
  word-break: break-word;
  transition: transform ${l.w4.transitions.fast};

  &:hover {
    transform: translateY(-1px);
  }
`,_=r().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  max-width: 100%;
`,B=r().div`
  display: flex;
  align-items: center;
  gap: 8px;
`,J=r().div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l.w4.colors.accent};
  flex-shrink: 0;
`,V=r().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,W=r().div`
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 4px 0;

  span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${l.w4.colors.accent};
    animation: ${k} 1.2s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.15s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
  }
`,X=r().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,Z=r().div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
`,ee=r().div`
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.danger};
`,et=r().div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md} ${l.w4.spacing.md};
  position: relative;
  z-index: 1;
`,en=r().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ea=r().div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: ${l.w4.colors.surface};
  border: 1.5px solid ${({focused:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: 20px;
  padding: 4px 8px 8px;
  box-shadow: ${({focused:e})=>e?l.w4.elevation.md:"none"};
  transition:
    border-color ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base};
`,ei=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 6px 0;
`,es=r().textarea`
  flex: 1;
  resize: none;
  background: transparent;
  border: none;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.5;
  outline: none;
  min-height: 24px;
  max-height: 192px;
  overflow-y: auto;
  padding: 4px 0;
  caret-color: ${l.w4.colors.accent};

  &::placeholder {
    color: ${l.w4.colors.mainTextFaint};
  }
`,er=r().button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ready:e})=>e?"pointer":"default"};
  background: ${({ready:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  color: ${({ready:e})=>e?"#fff":l.w4.colors.mainTextFaint};
  transition:
    background ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:focus-visible {
    ${l.w4.focusRing}
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,eo=r().button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${l.w4.colors.danger};
  color: #fff;
  transition: opacity ${l.w4.transitions.fast};

  &:hover { opacity: 0.85; }
  &:focus-visible { ${l.w4.focusRing} }
`,el=r().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,ec=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.xs} 0 2px;
`,ed=r().div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
  border: 1px solid ${l.w4.colors.border};
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .remove-btn {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.55);
    opacity: 0;
    transition: opacity ${l.w4.transitions.fast};
    border: none;
    cursor: pointer;
    color: #fff;
  }

  &:hover .remove-btn { opacity: 1; }
`,ep=r().button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({disabled:e})=>e?l.w4.colors.mainTextFaint:l.w4.colors.mainTextMuted};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};

  &:hover:not(:disabled) {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,eh=r().div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 4px 0;
  gap: ${l.w4.spacing.xs};
`,eu=r().button`
  background: transparent;
  border: none;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.06em;
  color: ${l.w4.colors.mainTextFaint};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: ${l.w4.borderRadius.sm};
  transition: color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainTextMuted};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,eg=r().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
`,ex=r().div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,em=r().div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: ${l.w4.zIndex.dropdown};
  width: 280px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.borderStrong};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: ${l.w4.elevation.md};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,ef=r().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,ew=r().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,ey=r().div`
  & > div { width: 100%; display: flex; }
  & > div > button { width: 100%; justify-content: space-between; }
`,eb=r().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.xl};
  text-align: center;
`,ek=r().div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l.w4.colors.accent};
`,ev=r().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,e$=r().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,ej=["sparkle","code","book","message"];function eS({topBarRight:e}){let t,[n]=(0,p.Ym)(),s=(0,i.useMemo)(()=>(0,p.Nx)(n,h.A),[n]),[r,o]=(0,i.useState)(null),[b,k]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(0,c.resolveGroqKey)().then(e=>{o(e),k(!0)}).catch(()=>k(!0))},[]);let[$,eT]=(0,i.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[eC,eI]=(0,i.useState)(!1),eE=(0,i.useRef)(null),[eR,eM]=(0,i.useState)(c.GROQ_MODELS["0"]?.id??"llama-3.1-8b-instant");(0,i.useEffect)(()=>{(0,l.PL)(w).then(e=>{e&&c.GROQ_MODELS.some(t=>t.id===e)&&eM(e)}).catch(()=>void 0)},[]);let eA=(0,i.useCallback)(async e=>{eM(e),await (0,l.Is)(w,e)},[]),eO=c.GROQ_MODELS.find(e=>e.id===eR)??c.GROQ_MODELS["0"],ez=(t=c.GROQ_MODELS.find(e=>e.id===eR),t?.vision===!0),[eD,eL]=(0,i.useState)([]),eF=(0,i.useRef)(null),eN=(0,i.useCallback)(()=>{ez&&eF.current?.click()},[ez]),eP=(0,i.useCallback)(e=>{let t=Array.from(e.target.files??[]);0!==t.length&&(e.target.value="",Promise.all(t.map(e=>new Promise(t=>{let n=new FileReader;n.onload=n=>{t({dataUrl:n.target?.result,name:e.name})},n.readAsDataURL(e)}))).then(e=>{eL(t=>[...t,...e].slice(0,4))}))},[]),eU=(0,i.useCallback)(e=>{eL(t=>t.filter((t,n)=>n!==e))},[]);(0,i.useEffect)(()=>{Promise.all([(0,l.PL)(x),(0,l.PL)(m),(0,l.PL)(f)]).then(([e,t,n])=>{eT({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>void 0)},[]);let eG=(0,i.useCallback)(async e=>{eT({...$,...e}),void 0!==e.tone&&await (0,l.Is)(x,e.tone),void 0!==e.language&&await (0,l.Is)(m,e.language),void 0!==e.maxTokens&&await (0,l.Is)(f,String(e.maxTokens))},[$]);(0,i.useEffect)(()=>{if(!eC)return;let e=e=>{let t=e.target;!t||eE.current?.contains(t)||t.closest?.('[role="menu"]')||eI(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[eC]);let[eK,eq]=(0,i.useState)([]),[eH,eQ]=(0,i.useState)(null),[eY,e_]=(0,i.useState)([]),[eB,eJ]=(0,i.useState)(""),eV=(0,i.useRef)([]);(0,i.useEffect)(()=>{eV.current=eY},[eY]);let eW=(0,i.useCallback)(async()=>{let e=await (0,l.Iu)("ask");return eq(e),e},[]),eX=(0,l.fy)(),eZ=(0,i.useRef)(null);function e0(e){try{let t=JSON.parse(e.content);e_(t.turns??[])}catch{e_([])}eQ(e.id),eJ(e.name),(0,l.Is)(g,e.id).catch(()=>void 0)}function e4(){e_([]),eQ(null),eJ(""),(0,l.Is)(g,"").catch(()=>void 0)}(0,i.useEffect)(()=>{(async()=>{let e=await eW(),t=eX.session,n=await (0,l.PL)(g),a=t??n,i=a?e.find(e=>e.id===a):null;i&&(e0(i),eZ.current=t??null)})().catch(()=>void 0)},[]),(0,i.useEffect)(()=>{let e=eX.session;if(!e||eZ.current===e)return;let t=eK.find(t=>t.id===e);t&&(eZ.current=e,e0(t))},[eX.session,eK]);let e1=(0,i.useCallback)(async(e,t,n)=>{let a=JSON.stringify({turns:e}),i=n??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):s("ask.untitled"));if(t)await (0,l.mZ)(t,i,a);else{let e=await (0,l.KL)("ask",i,a);return eQ(e),await (0,l.Is)(g,e),e}return t},[s]),e2=(0,i.useCallback)(async e=>{await (0,l.kd)(e),e===eH&&e4(),await eW()},[eH,eW]),[e5,e3]=(0,i.useState)(""),[e6,e8]=(0,i.useState)(!1),[e7,e9]=(0,i.useState)(null),[te,tt]=(0,i.useState)(!1),tn=(0,i.useRef)(null),ta=(0,i.useRef)(null),ti=(0,i.useRef)(null);(0,i.useLayoutEffect)(()=>{let e=ta.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[e5]),(0,i.useEffect)(()=>{ti.current?.scrollIntoView({behavior:"smooth"})},[eY,e6]);let ts=(0,i.useCallback)(async(e,t)=>{let a,i,o;if(!r||e6)return;if(t?.replay===!0){let e=eV.current.filter(e=>!("loading"in e)),t=-1;for(let n=e.length-1;n>=0;n--)if("user"===e[n].role){t=n;break}if(t<0)return;let n=e[t];if("user"!==n.role)return;a=n.content,i=e.slice(0,t+1)}else{if(!e.trim())return;a=e.trim(),e3(""),o=ez&&eD.length>0?eD.map(e=>e.dataUrl):void 0,eL([]);let t={role:"user",content:a,ts:Date.now()};i=[...eV.current.filter(e=>!("loading"in e)),t]}e9(null);let l={role:"assistant",content:"",loading:!0,ts:Date.now()};e_([...i,l]),e8(!0);let d=i.filter(e=>!("loading"in e)).slice(0,-1).map(e=>({role:e.role,content:e.content})).slice(-6),p="auto"===$.language?n:$.language;tn.current?.abort();let h=new AbortController;tn.current=h;let u=Date.now();try{var g,x;let e=await (0,c.askGroqStream)(a,{key:r,system:(g=$.tone,x=$.language,`You are Atlantis, a personal-dashboard assistant.
Be ${"friendly"===g?"warm and approachable":"playful"===g?"playful, light-hearted and fun":"direct and concise"}. Answer in ${"pt"===("auto"===x?p:x)?"Portuguese":"English"}.
Stay focused and reasonably concise. If you don't know, say so plainly.

Your answers render as rich Markdown in the Atlantis UI. Pick the right block
for the job. The block types below are ALL that the renderer understands —
anything else (image links, HTML <svg>, external URLs for diagrams) is dropped
or shown broken. Examples show correct and incorrect use so the choice is
unambiguous.

═══ 1. TEXT STRUCTURE ══════════════════════════════════════════════════
Headings (## / ###), bold / italic, bullet and numbered lists, paragraphs.
Use headings to split an answer that has multiple sections. Use numbered
lists for steps in order; bullet lists for enumerations; task lists
(\`- [ ]\` / \`- [x]\`) for checklists.

LaTeX math: \`$inline$\` for inline formulas, \`$$display$$\` for standalone
equations. Use it for any mathematical notation — fractions, integrals,
sums, matrices. Example: \`$E = mc^2$\`, \`$$\\int_0^1 x^2\\,dx = 1/3$$\`.

═══ 2. TABLES (GFM) ════════════════════════════════════════════════════
For comparing 2+ things across shared attributes. NOT for time-series data —
use a chart for that.
DO:
    | Feature   | Plan A | Plan B |
    |-----------|--------|--------|
    | Price     | $5/mo  | $12/mo |
    | Seats     | 3      | 10     |

═══ 3. CODE BLOCKS ═════════════════════════════════════════════════════
Fenced with a real language tag for syntax highlighting. Supported tags
include \`ts\`, \`tsx\`, \`js\`, \`py\`, \`bash\`, \`sh\`, \`json\`, \`yaml\`,
\`sql\`, \`css\`, \`html\`, \`md\`. Skip the tag only for plain text samples.
DO:
    \`\`\`ts
    export function add(a: number, b: number) { return a + b; }
    \`\`\`

═══ 4. CALLOUTS ════════════════════════════════════════════════════════
For asides, tips, warnings — never wrap them in a code fence, they're
blockquotes with a typed tag on the first line. Prefer the \`>\` prefix;
the renderer also tolerates a plain paragraph starting with \`[!TAG]\`.
Five tags available (use the one that actually matches severity):
    > [!NOTE] short aside / context
    > [!TIP] actionable hint or shortcut
    > [!IMPORTANT] critical fact the reader must not skip
    > [!WARNING] gotcha / caveat / common pitfall
    > [!CAUTION] destructive or risky action
DO:
    > [!TIP] Use \`pnpm --filter\` to run a script in a single package.
DON'T:
    \`\`\`tip
    Use pnpm --filter …
    \`\`\`

═══ 5. MERMAID (\`\`\`mermaid) ════════════════════════════════════════
KEEP DIAGRAMS SIMPLE AND SYNTACTICALLY VALID. Prefer 3–7 nodes; never
more than 10. Short one- or two-word labels. Only plain ASCII in node
ids (A, B, Browser, Auth — no accents, spaces, or punctuation in ids).
Quote any label that contains spaces or special chars: \`A["Sign in"]\`.
If you are not 100% sure the syntax is valid, use a bullet list instead.

HARD RULE: a Mermaid block must contain NO digits, dates, years,
percentages, or units anywhere — not in node labels, not in edge
labels, not in comments. If any of those appear, the answer is a
\`chart\` (\xa76) or a table, NEVER Mermaid. "Population over time",
"sales per quarter", "GDP per country" — all are \`chart\`.

Use Mermaid only for RELATIONSHIPS, FLOWS, HIERARCHIES, ARCHITECTURE,
and SEQUENCES where the content is words, not numbers. The renderer
runs Mermaid 11 in the browser and produces the SVG — you do not link
to images or emit HTML.

First line declares the diagram type. Only these values are supported —
anything else falls back to raw text:
\`graph\`, \`flowchart\`, \`sequenceDiagram\`, \`classDiagram\`,
\`stateDiagram\`, \`stateDiagram-v2\`, \`erDiagram\`, \`pie\`, \`gantt\`,
\`journey\`, \`mindmap\`, \`gitGraph\`, \`sankey-beta\`, \`quadrantChart\`,
\`requirementDiagram\`, \`timeline\`, \`xychart-beta\`, \`block-beta\`,
\`C4Context\`, \`C4Container\`, \`C4Component\`, \`C4Dynamic\`, \`C4Deployment\`.
Use \`[…]\` (rectangle) for most nodes; reserve \`{…}\` (diamond) for actual decisions.

DO — hierarchy:
    \`\`\`mermaid
    graph TD
      Animal --> Mam\xedfero
      Animal --> Ave
      Mam\xedfero --> C\xe3o
      Mam\xedfero --> Gato
    \`\`\`

DO — flow with action labels on edges:
    \`\`\`mermaid
    graph LR
      User -->|signs in| Auth
      Auth -->|JWT| API
    \`\`\`

DO — sequence:
    \`\`\`mermaid
    sequenceDiagram
      User->>API: GET /items
      API-->>User: 200 OK
    \`\`\`

Never link to external .png/.svg files, never emit <img> or <svg>, and
never add a "the image needs a Mermaid renderer" callout — the renderer
IS Mermaid and runs automatically.

FINAL CHECK before emitting a \`\`\`mermaid fence: scan every line for a
digit. If you find one, delete the block and rewrite as \`chart\`.

═══ 6. CHART (\`\`\`chart) ═══════════════════════════════════════════════
For NUMERIC DATA. Only three chart types are supported — any other
value for \`type\` falls back to raw text:
  • \`bar\` — comparing categories
  • \`line\` — time series / ordered numeric axis
  • \`pie\` — parts of a whole (share / split)
Any "value per year / month / category / quarter" lives here, never in Mermaid.

Format is a simple \`key: value\` DSL (NOT JSON, NOT YAML). Required keys:
\`labels\` and \`data\`. Optional: \`type\` (defaults \`bar\`), \`title\`,
\`colors\`. Arrays are comma-separated inside \`[…]\`.

DO — bar:
    \`\`\`chart
    type: bar
    title: Revenue 2025 (€k)
    labels: [Q1, Q2, Q3, Q4]
    data: [12, 18, 9, 22]
    \`\`\`

DO — line (time series):
    \`\`\`chart
    type: line
    title: Popula\xe7\xe3o Mundial (bilh\xf5es)
    labels: [1900, 1920, 1940, 1960, 1980, 2000, 2020]
    data: [1.6, 1.9, 2.3, 3.0, 4.4, 6.1, 7.8]
    \`\`\`

DO — pie:
    \`\`\`chart
    type: pie
    title: Revenue split
    labels: [EU, US, APAC, LATAM]
    data: [42, 35, 18, 5]
    \`\`\`

DON'T — JSON syntax or missing labels/data:
    \`\`\`chart
    { "type": "bar", "data": [1,2,3] }   %% parser expects key: value lines
    \`\`\`

═══ DECISION TREE ══════════════════════════════════════════════════════
Given a user request, pick ONE block type:
  • Numbers that change over a scalar axis (time, category, region) → \`chart\`.
  • Relationships, flows, dependencies, architecture, sequences → \`mermaid\`.
  • Comparing 2+ items across shared attributes → GFM table.
  • Ordered steps → numbered list. Unordered enumeration → bullet list.
  • Code / config / shell commands → fenced code with language tag.
  • Aside / warning / tip → callout blockquote.

General rules:
  • Never emit an empty fenced block. If unsure, write prose.
  • Never reference an image file or external URL for a rendered diagram.
  • Keep captions around rendered blocks short — the block speaks for itself.
  • don't add \\n on the snippets, don't do breaking lines in the middle of sentences — the renderer handles all that.`),locale:p,signal:h.signal,history:d,maxTokens:$.maxTokens,model:eR,images:o,onChunk:e=>{h.signal.aborted||e_([...i,{role:"assistant",content:e,ts:u}])}});if(h.signal.aborted)return;let t=[...i,{role:"assistant",content:e,ts:u}];e_(t);let n=await e1(t,eH);n&&n!==eH&&(eQ(n),eJ(t.find(e=>"user"===e.role)?a.slice(0,50):s("ask.untitled"))),await eW()}catch(e){if(h.signal.aborted)return;e9(e instanceof Error?e.message:String(e)),e_(i)}finally{h.signal.aborted||e8(!1)}},[r,e6,n,$,eH,e1,eW,s,eR,ez,eD]),tr=(0,i.useCallback)(()=>{tn.current?.abort(),e8(!1),e_(e=>e.filter(e=>!("loading"in e)))},[]);(0,i.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),e4(),ta.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);let to=(0,i.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey){e.preventDefault(),ts(e5);return}"Escape"===e.key&&(e5?e3(""):e.currentTarget.blur())},[e5,ts]),tl=(0,i.useMemo)(()=>{let e={today:[],yesterday:[],last7:[],older:[]};for(let t of eK)e[function(e){let t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}(t.savedAt)].push(t);return e},[eK]),tc={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},td=(0,a.jsx)(j,{onNew:e4,newLabel:s("ask.sidebar.new"),expanded:(0,a.jsxs)(v,{children:[(0,a.jsx)(S,{children:(0,a.jsx)(d.$n,{variant:"primary",onClick:e4,style:{width:"100%",justifyContent:"center"},children:s("ask.sidebar.new")})}),(0,a.jsx)(T,{children:0===eK.length?(0,a.jsx)(O,{children:s("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{let t=tl[e];return 0===t.length?null:(0,a.jsxs)("div",{children:[(0,a.jsx)(C,{children:(0,a.jsx)(d.YZ,{children:s(tc[e])})}),t.map(e=>(0,a.jsxs)(I,{children:[(0,a.jsxs)(E,{active:e.id===eH,onClick:()=>e0(e),children:[(0,a.jsx)(R,{active:e.id===eH,children:e.name||s("ask.untitled")}),(0,a.jsx)(M,{children:(0,p.aw)(new Date(e.savedAt).toISOString(),s)})]}),(0,a.jsx)(A,{className:"conv-row-hover",children:(0,a.jsx)(d.K0,{title:s("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),e2(e.id)},children:(0,a.jsx)(d.In,{name:"close",size:12})})})]},e.id))]},e)})})]})});if(b&&!r)return(0,a.jsx)(l.PE,{title:s("ask.title"),sidebar:td,topBarRight:e,children:(0,a.jsxs)(eb,{children:[(0,a.jsx)(ek,{children:(0,a.jsx)(d.In,{name:"sparkle",size:24})}),(0,a.jsx)(ev,{children:s("ask.noKey.title")}),(0,a.jsx)(e$,{children:s("ask.noKey.body")}),(0,a.jsx)(d.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:s("ask.noKey.cta")})]})});let tp=(0,a.jsxs)("div",{style:{position:"relative"},ref:eE,children:[(0,a.jsx)(d.K0,{title:s("ask.settings.title"),active:eC,onClick:()=>eI(e=>!e),children:(0,a.jsx)(d.In,{name:"settings",size:16})}),eC&&(0,a.jsxs)(em,{children:[(0,a.jsxs)(ef,{children:[(0,a.jsx)(ew,{children:s("ask.settings.tone")}),(0,a.jsx)(ey,{children:(0,a.jsx)(d.ms,{align:"left",trigger:(0,a.jsx)(d.$n,{variant:"ghost",iconRight:(0,a.jsx)(d.In,{name:"chevron-down",size:12}),children:s(`ask.settings.tone.${$.tone}`)}),children:["friendly","direct","playful"].map(e=>(0,a.jsx)(d.tJ,{onClick:()=>void eG({tone:e}),children:s(`ask.settings.tone.${e}`)},e))})})]}),(0,a.jsxs)(ef,{children:[(0,a.jsx)(ew,{children:s("ask.settings.language")}),(0,a.jsx)(ey,{children:(0,a.jsx)(d.ms,{align:"left",trigger:(0,a.jsx)(d.$n,{variant:"ghost",iconRight:(0,a.jsx)(d.In,{name:"chevron-down",size:12}),children:s(`ask.settings.language.${$.language}`)}),children:["auto","pt","en"].map(e=>(0,a.jsx)(d.tJ,{onClick:()=>void eG({language:e}),children:s(`ask.settings.language.${e}`)},e))})})]}),(0,a.jsxs)(ef,{children:[(0,a.jsx)(ew,{children:s("ask.settings.maxTokens")}),(0,a.jsx)(ey,{children:(0,a.jsx)(d.ms,{align:"left",trigger:(0,a.jsx)(d.$n,{variant:"ghost",iconRight:(0,a.jsx)(d.In,{name:"chevron-down",size:12}),children:s(`ask.settings.maxTokens.${u[$.maxTokens]}`)}),children:[[256,"short"],[512,"medium"],[1024,"long"],[2048,"xlong"]].map(([e,t])=>(0,a.jsx)(d.tJ,{onClick:()=>void eG({maxTokens:e}),children:s(`ask.settings.maxTokens.${t}`)},e))})})]})]})]}),th=0===eY.length&&!e6,tu=!!e5.trim()&&!e6&&!!r;return(0,a.jsx)(l.PE,{title:s("ask.title"),sidebar:td,topBarRight:e,children:(0,a.jsxs)(z,{children:[(0,a.jsx)(ex,{children:tp}),(0,a.jsx)(D,{children:th?(0,a.jsx)(L,{children:(0,a.jsxs)(F,{children:[(0,a.jsx)(N,{children:s("ask.welcome.title")}),(0,a.jsx)(P,{children:s("ask.welcome.kicker")}),(0,a.jsx)(U,{children:["1","2","3","4"].map((e,t)=>(0,a.jsxs)(G,{onClick:()=>{let t=s(`ask.suggestion.${e}`);e3(t),ta.current?.focus(),ts(t)},children:[(0,a.jsx)(K,{children:(0,a.jsx)(d.In,{name:ej[t],size:18,"aria-hidden":!0})}),(0,a.jsx)(q,{children:s(`ask.suggestion.${e}.title`)}),(0,a.jsx)(H,{children:s(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,a.jsxs)(L,{children:[eY.map((e,t)=>{let n="user"===e.role,i="loading"in e&&e.loading;return(0,a.jsx)(Q,{user:n,children:n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Y,{children:e.content}),(0,a.jsx)(X,{children:y(e.ts,s)}),(0,a.jsx)(Z,{className:"turn-actions",children:(0,a.jsx)(d.K0,{title:s("ask.action.edit"),onClick:()=>{},children:(0,a.jsx)(d.In,{name:"edit",size:13})})})]}):(0,a.jsxs)(_,{children:[(0,a.jsxs)(B,{children:[(0,a.jsx)(J,{"aria-hidden":!0,children:(0,a.jsx)(d.In,{name:"sparkle",size:14})}),(0,a.jsx)(V,{children:s("ask.atlantis")})]}),i?(0,a.jsxs)(W,{"aria-label":s("ask.thinking"),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.mQ,{children:e.content}),(0,a.jsx)(X,{children:y(e.ts,s)}),(0,a.jsxs)(Z,{className:"turn-actions",children:[(0,a.jsx)(d.K0,{title:s("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,a.jsx)(d.In,{name:"copy",size:13})}),(0,a.jsx)(d.K0,{title:s("ask.action.regenerate"),onClick:()=>{ts("",{replay:!0})},children:(0,a.jsx)(d.In,{name:"refresh",size:13})})]})]})]})},t)}),e7&&(0,a.jsx)(Q,{children:(0,a.jsxs)(_,{children:[(0,a.jsxs)(B,{children:[(0,a.jsx)(J,{"aria-hidden":!0,children:(0,a.jsx)(d.In,{name:"sparkle",size:14})}),(0,a.jsx)(V,{children:s("ask.atlantis")})]}),(0,a.jsx)(ee,{children:e7}),(0,a.jsx)(d.$n,{variant:"ghost",onClick:()=>{ts("",{replay:!0})},children:s("ask.retry")})]})}),(0,a.jsx)("div",{ref:ti})]})}),(0,a.jsx)(et,{children:(0,a.jsxs)(en,{children:[(0,a.jsxs)(ea,{focused:te,children:[(0,a.jsx)(eh,{children:(0,a.jsx)(d.ms,{align:"right",trigger:(0,a.jsxs)(eu,{type:"button","aria-label":s("ask.model.label"),children:[eO?.label??eR,(0,a.jsx)(d.In,{name:"chevron-down",size:10})]}),children:c.GROQ_MODELS.map(e=>(0,a.jsx)(d.tJ,{onClick:()=>void eA(e.id),children:e.label},e.id))})}),eD.length>0&&(0,a.jsx)(ec,{children:eD.map((e,t)=>(0,a.jsxs)(ed,{children:[(0,a.jsx)("img",{src:e.dataUrl,alt:e.name}),(0,a.jsx)("button",{type:"button",className:"remove-btn","aria-label":s("ask.attach.remove"),title:s("ask.attach.remove"),onClick:()=>eU(t),children:(0,a.jsx)(d.In,{name:"close",size:16})})]},t))}),(0,a.jsx)("input",{ref:eF,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:eP}),(0,a.jsxs)(ei,{children:[(0,a.jsx)(es,{ref:ta,rows:1,placeholder:s("ask.placeholder"),value:e5,onChange:e=>e3(e.target.value),onKeyDown:to,onFocus:()=>tt(!0),onBlur:()=>tt(!1),disabled:e6,"aria-label":s("ask.placeholder")}),(0,a.jsx)(ep,{type:"button",disabled:!ez,"aria-label":ez?s("ask.attach"):s("ask.attach.noVision"),title:ez?s("ask.attach"):s("ask.attach.noVision"),onClick:eN,children:(0,a.jsx)(d.In,{name:"paperclip",size:15})}),e6?(0,a.jsx)(eo,{type:"button","aria-label":s("ask.stop"),title:s("ask.stop"),onClick:tr,children:(0,a.jsx)(d.In,{name:"square",size:14})}):(0,a.jsx)(er,{type:"button",ready:tu,"aria-label":s("ask.send"),title:s("ask.send"),disabled:!tu,onClick:()=>void ts(e5),children:(0,a.jsx)(d.In,{name:"send",size:15})})]})]}),(0,a.jsxs)(el,{children:[(0,a.jsxs)(eg,{children:[(0,a.jsx)(d.ue,{children:"↵"})," ",s("ask.hint.send")]}),(0,a.jsxs)(eg,{children:[(0,a.jsx)(d.ue,{children:"⇧↵"})," ",s("ask.hint.newline")]}),(0,a.jsxs)(eg,{children:[(0,a.jsx)(d.ue,{children:"⌘N"})," ",s("ask.hint.newConv")]})]})]})})]})})}}}]);