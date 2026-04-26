"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([["512"],{8997(e,t,n){var a=n(2727);t.createRoot=a.createRoot,a.hydrateRoot},3611(e,t,n){var a=n(5723),i=n(8997),s=n(7991),r=n(6859),o=n.n(r),l=n(2799),c=n(4764),d=n(5523),p=n(5030),h=n(8170),u=n(948);let g={256:"short",512:"medium",1024:"long",2048:"xlong"},x="ask:active-conversation",m="ask:tone",f="ask:language",w="ask:max-tokens",y="ask:model-id";function b(e,t){return(0,h.aw)(new Date(e).toISOString(),t)}let k=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,v=(0,l.keyframes)`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,$=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,j=o().div`
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} 0;
`;function S({expanded:e,onNew:t,newLabel:n}){let{collapsed:i}=(0,c.cL)();return i?(0,a.jsx)(j,{children:(0,a.jsx)(p.K0,{title:n,onClick:t,children:(0,a.jsx)(p.In,{name:"plus",size:14})})}):(0,a.jsx)(a.Fragment,{children:e})}let T=o().div`
  padding: ${c.w4.spacing.sm};
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
  flex-shrink: 0;
`,C=o().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.xs} 0;
`,I=o().div`
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.sm} 4px;
  margin-top: 4px;
`,R=o().div`
  position: relative;

  &:hover .conv-row-hover,
  &:focus-within .conv-row-hover {
    opacity: 1;
  }
`,E=o()("button",{shouldForwardProp:e=>"active"!==e})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 10px ${c.w4.spacing.sm};
  border: none;
  border-radius: ${c.w4.borderRadius.md};
  background: ${({active:e})=>e?c.w4.colors.accentMuted:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background ${c.w4.transitions.fast};
  min-height: 44px;

  &:hover {
    background: ${({active:e})=>e?c.w4.colors.accentMuted:c.w4.colors.sidebarHover};
  }
  &:focus-visible {
    ${c.w4.focusRing}
  }
`,M=o().div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.mainText};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
`,A=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,O=o().div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast};
`,z=o().div`
  padding: ${c.w4.spacing.lg} ${c.w4.spacing.sm};
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextFaint};
  text-align: center;
  line-height: 1.5;
`,D=o().div`
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
      ${c.w4.colors.accent}0d 0%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 0;
  }
`,L=o().div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${c.w4.spacing.xl} ${c.w4.spacing.md} ${c.w4.spacing.lg};
  position: relative;
  z-index: 1;
`,F=o().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.xl};
`,N=o().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${c.w4.spacing.xxl} 0 ${c.w4.spacing.xl};
  gap: ${c.w4.spacing.lg};
  animation: ${k} 0.3s ${c.w4.transitions.easing} both;
`,P=o().h1`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 400;
  line-height: 1.15;
  margin: 0;
  background: linear-gradient(
    120deg,
    ${c.w4.colors.accent} 0%,
    ${c.w4.colors.mainText} 55%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,U=o().p`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,G=o().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  width: 100%;
  max-width: 600px;

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,K=o().button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: ${c.w4.spacing.md};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 14px;
  text-align: left;
  cursor: pointer;
  min-height: 100px;
  transition:
    border-color ${c.w4.transitions.base},
    transform ${c.w4.transitions.base},
    box-shadow ${c.w4.transitions.base};

  &:hover {
    border-color: ${c.w4.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${c.w4.elevation.md};
  }
  &:focus-visible {
    ${c.w4.focusRing}
  }
`,q=o().div`
  color: ${c.w4.colors.accent};
  opacity: 0.85;
`,H=o().div`
  font-size: ${c.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  line-height: 1.3;
`,Q=o().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.45;
`,Y=o().div`
  display: flex;
  flex-direction: column;
  align-items: ${({user:e})=>e?"flex-end":"flex-start"};
  gap: 4px;
  animation: ${k} 0.25s ${c.w4.transitions.easing} both;

  /* Reveal action row on hover/focus — no component selectors, plain class */
  &:hover .turn-actions,
  &:focus-within .turn-actions {
    opacity: 1;
  }
`,_=o().div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 14px 14px 4px 14px;
  background: ${c.w4.colors.accentMuted};
  font-size: 14px;
  color: ${c.w4.colors.mainText};
  line-height: 1.55;
  word-break: break-word;
  transition: transform ${c.w4.transitions.fast};

  &:hover {
    transform: translateY(-1px);
  }
`,B=o().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  max-width: 100%;
`,J=o().div`
  display: flex;
  align-items: center;
  gap: 8px;
`,V=o().div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${c.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.accent};
  flex-shrink: 0;
`,W=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,X=o().div`
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 4px 0;

  span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${c.w4.colors.accent};
    animation: ${v} 1.2s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.15s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
  }
`,Z=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,ee=o().div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast};
`,et=o().div`
  font-size: ${c.w4.typography.fontSizeSm};
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.danger};
`,en=o().div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md} ${c.w4.spacing.md};
  position: relative;
  z-index: 1;
`,ea=o().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ei=o().div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: ${c.w4.colors.surface};
  border: 1.5px solid ${({focused:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  border-radius: 20px;
  padding: 4px 8px 8px;
  box-shadow: ${({focused:e})=>e?c.w4.elevation.md:"none"};
  transition:
    border-color ${c.w4.transitions.base},
    box-shadow ${c.w4.transitions.base};
`,es=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 6px 0;
`,er=o().textarea`
  flex: 1;
  resize: none;
  background: transparent;
  border: none;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 14px;
  color: ${c.w4.colors.mainText};
  line-height: 1.5;
  outline: none;
  min-height: 24px;
  max-height: 192px;
  overflow-y: auto;
  padding: 4px 0;
  caret-color: ${c.w4.colors.accent};

  &::placeholder {
    color: ${c.w4.colors.mainTextFaint};
  }
`,eo=o().button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ready:e})=>e?"pointer":"default"};
  background: ${({ready:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  color: ${({ready:e})=>e?"#fff":c.w4.colors.mainTextFaint};
  transition:
    background ${c.w4.transitions.fast},
    color ${c.w4.transitions.fast};

  &:focus-visible {
    ${c.w4.focusRing}
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,el=o().button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${c.w4.colors.danger};
  color: #fff;
  transition: opacity ${c.w4.transitions.fast};

  &:hover { opacity: 0.85; }
  &:focus-visible { ${c.w4.focusRing} }
`,ec=o().div`
  display: flex;
  gap: ${c.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,ed=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
  padding: ${c.w4.spacing.xs} 0 2px;
`,ep=o().div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: ${c.w4.borderRadius.md};
  overflow: hidden;
  border: 1px solid ${c.w4.colors.border};
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
    transition: opacity ${c.w4.transitions.fast};
    border: none;
    cursor: pointer;
    color: #fff;
  }

  &:hover .remove-btn { opacity: 1; }
`,eh=o().button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({disabled:e})=>e?c.w4.colors.mainTextFaint:c.w4.colors.mainTextMuted};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};

  &:hover:not(:disabled) {
    background: ${c.w4.colors.sidebarHover};
    color: ${c.w4.colors.mainText};
  }
  &:focus-visible { ${c.w4.focusRing} }
`,eu=o().div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 4px 0;
  gap: ${c.w4.spacing.xs};
`,eg=o().button`
  background: transparent;
  border: none;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.06em;
  color: ${c.w4.colors.mainTextFaint};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: ${c.w4.borderRadius.sm};
  transition: color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.mainTextMuted};
    background: ${c.w4.colors.sidebarHover};
  }
  &:focus-visible { ${c.w4.focusRing} }
`,ex=o().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
`,em=o().div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${c.w4.spacing.md} ${c.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,ef=o().div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: ${c.w4.zIndex.dropdown};
  width: 280px;
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.borderStrong};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow: ${c.w4.elevation.md};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,ew=o().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,ey=o().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,eb=o().div`
  & > div { width: 100%; display: flex; }
  & > div > button { width: 100%; justify-content: space-between; }
`,ek=o().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${c.w4.spacing.md};
  padding: ${c.w4.spacing.xl};
  text-align: center;
`,ev=o().div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${c.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.accent};
`,e$=o().div`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,ej=o().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,eS=["sparkle","code","book","message"],eT=document.getElementById("root");if(!eT)throw Error("Root element #root not found");(0,i.createRoot)(eT).render((0,a.jsx)(function({topBarRight:e}){let t,[n]=(0,h.Ym)(),i=(0,s.useMemo)(()=>(0,h.Nx)(n,u.A),[n]),[r,o]=(0,s.useState)(null),[l,k]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(0,d.resolveGroqKey)().then(e=>{o(e),k(!0)}).catch(()=>k(!0))},[]);let[v,j]=(0,s.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[eT,eC]=(0,s.useState)(!1),eI=(0,s.useRef)(null),[eR,eE]=(0,s.useState)(d.GROQ_MODELS["0"]?.id??"llama-3.1-8b-instant");(0,s.useEffect)(()=>{(0,c.PL)(y).then(e=>{e&&d.GROQ_MODELS.some(t=>t.id===e)&&eE(e)}).catch(()=>void 0)},[]);let eM=(0,s.useCallback)(async e=>{eE(e),await (0,c.Is)(y,e)},[]),eA=d.GROQ_MODELS.find(e=>e.id===eR)??d.GROQ_MODELS["0"],eO=(t=d.GROQ_MODELS.find(e=>e.id===eR),t?.vision===!0),[ez,eD]=(0,s.useState)([]),eL=(0,s.useRef)(null),eF=(0,s.useCallback)(()=>{eO&&eL.current?.click()},[eO]),eN=(0,s.useCallback)(e=>{let t=Array.from(e.target.files??[]);0!==t.length&&(e.target.value="",Promise.all(t.map(e=>new Promise(t=>{let n=new FileReader;n.onload=n=>{t({dataUrl:n.target?.result,name:e.name})},n.readAsDataURL(e)}))).then(e=>{eD(t=>[...t,...e].slice(0,4))}))},[]),eP=(0,s.useCallback)(e=>{eD(t=>t.filter((t,n)=>n!==e))},[]);(0,s.useEffect)(()=>{Promise.all([(0,c.PL)(m),(0,c.PL)(f),(0,c.PL)(w)]).then(([e,t,n])=>{j({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>void 0)},[]);let eU=(0,s.useCallback)(async e=>{j({...v,...e}),void 0!==e.tone&&await (0,c.Is)(m,e.tone),void 0!==e.language&&await (0,c.Is)(f,e.language),void 0!==e.maxTokens&&await (0,c.Is)(w,String(e.maxTokens))},[v]);(0,s.useEffect)(()=>{if(!eT)return;let e=e=>{let t=e.target;!t||eI.current?.contains(t)||t.closest?.('[role="menu"]')||eC(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[eT]);let[eG,eK]=(0,s.useState)([]),[eq,eH]=(0,s.useState)(null),[eQ,eY]=(0,s.useState)([]),[e_,eB]=(0,s.useState)(""),eJ=(0,s.useRef)([]);(0,s.useEffect)(()=>{eJ.current=eQ},[eQ]);let eV=(0,s.useCallback)(async()=>{let e=await (0,c.Iu)("ask");return eK(e),e},[]),eW=(0,c.fy)(),eX=(0,s.useRef)(null);function eZ(e){try{let t=JSON.parse(e.content);eY(t.turns??[])}catch{eY([])}eH(e.id),eB(e.name),(0,c.Is)(x,e.id).catch(()=>void 0)}function e0(){eY([]),eH(null),eB(""),(0,c.Is)(x,"").catch(()=>void 0)}(0,s.useEffect)(()=>{(async()=>{let e=await eV(),t=eW.session,n=await (0,c.PL)(x),a=t??n,i=a?e.find(e=>e.id===a):null;i&&(eZ(i),eX.current=t??null)})().catch(()=>void 0)},[]),(0,s.useEffect)(()=>{let e=eW.session;if(!e||eX.current===e)return;let t=eG.find(t=>t.id===e);t&&(eX.current=e,eZ(t))},[eW.session,eG]);let e4=(0,s.useCallback)(async(e,t,n)=>{let a=JSON.stringify({turns:e}),s=n??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):i("ask.untitled"));if(t)await (0,c.mZ)(t,s,a);else{let e=await (0,c.KL)("ask",s,a);return eH(e),await (0,c.Is)(x,e),e}return t},[i]),e1=(0,s.useCallback)(async e=>{await (0,c.kd)(e),e===eq&&e0(),await eV()},[eq,eV]),[e2,e5]=(0,s.useState)(""),[e3,e6]=(0,s.useState)(!1),[e8,e7]=(0,s.useState)(null),[e9,te]=(0,s.useState)(!1),tt=(0,s.useRef)(null),tn=(0,s.useRef)(null),ta=(0,s.useRef)(null);(0,s.useLayoutEffect)(()=>{let e=tn.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[e2]),(0,s.useEffect)(()=>{ta.current?.scrollIntoView({behavior:"smooth"})},[eQ,e3]);let ti=(0,s.useCallback)(async(e,t)=>{let a,s,o;if(!r||e3)return;if(t?.replay===!0){let e=eJ.current.filter(e=>!("loading"in e)),t=-1;for(let n=e.length-1;n>=0;n--)if("user"===e[n].role){t=n;break}if(t<0)return;let n=e[t];if("user"!==n.role)return;a=n.content,s=e.slice(0,t+1)}else{if(!e.trim())return;a=e.trim(),e5(""),o=eO&&ez.length>0?ez.map(e=>e.dataUrl):void 0,eD([]);let t={role:"user",content:a,ts:Date.now()};s=[...eJ.current.filter(e=>!("loading"in e)),t]}e7(null);let l={role:"assistant",content:"",loading:!0,ts:Date.now()};eY([...s,l]),e6(!0);let c=s.filter(e=>!("loading"in e)).slice(0,-1).map(e=>({role:e.role,content:e.content})).slice(-6),p="auto"===v.language?n:v.language;tt.current?.abort();let h=new AbortController;tt.current=h;let u=Date.now();try{var g,x;let e=await (0,d.askGroqStream)(a,{key:r,system:(g=v.tone,x=v.language,`You are Atlantis, a personal-dashboard assistant.
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
  • don't add \\n on the snippets, don't do breaking lines in the middle of sentences — the renderer handles all that.`),locale:p,signal:h.signal,history:c,maxTokens:v.maxTokens,model:eR,images:o,onChunk:e=>{h.signal.aborted||eY([...s,{role:"assistant",content:e,ts:u}])}});if(h.signal.aborted)return;let t=[...s,{role:"assistant",content:e,ts:u}];eY(t);let n=await e4(t,eq);n&&n!==eq&&(eH(n),eB(t.find(e=>"user"===e.role)?a.slice(0,50):i("ask.untitled"))),await eV()}catch(e){if(h.signal.aborted)return;e7(e instanceof Error?e.message:String(e)),eY(s)}finally{h.signal.aborted||e6(!1)}},[r,e3,n,v,eq,e4,eV,i,eR,eO,ez]),ts=(0,s.useCallback)(()=>{tt.current?.abort(),e6(!1),eY(e=>e.filter(e=>!("loading"in e)))},[]);(0,s.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),e0(),tn.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);let tr=(0,s.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey){e.preventDefault(),ti(e2);return}"Escape"===e.key&&(e2?e5(""):e.currentTarget.blur())},[e2,ti]),to=(0,s.useMemo)(()=>{let e={today:[],yesterday:[],last7:[],older:[]};for(let t of eG)e[function(e){let t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}(t.savedAt)].push(t);return e},[eG]),tl={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},tc=(0,a.jsx)(S,{onNew:e0,newLabel:i("ask.sidebar.new"),expanded:(0,a.jsxs)($,{children:[(0,a.jsx)(T,{children:(0,a.jsx)(p.$n,{variant:"primary",onClick:e0,style:{width:"100%",justifyContent:"center"},children:i("ask.sidebar.new")})}),(0,a.jsx)(C,{children:0===eG.length?(0,a.jsx)(z,{children:i("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{let t=to[e];return 0===t.length?null:(0,a.jsxs)("div",{children:[(0,a.jsx)(I,{children:(0,a.jsx)(p.YZ,{children:i(tl[e])})}),t.map(e=>(0,a.jsxs)(R,{children:[(0,a.jsxs)(E,{active:e.id===eq,onClick:()=>eZ(e),children:[(0,a.jsx)(M,{active:e.id===eq,children:e.name||i("ask.untitled")}),(0,a.jsx)(A,{children:(0,h.aw)(new Date(e.savedAt).toISOString(),i)})]}),(0,a.jsx)(O,{className:"conv-row-hover",children:(0,a.jsx)(p.K0,{title:i("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),e1(e.id)},children:(0,a.jsx)(p.In,{name:"close",size:12})})})]},e.id))]},e)})})]})});if(l&&!r)return(0,a.jsx)(c.PE,{title:i("ask.title"),sidebar:tc,topBarRight:e,children:(0,a.jsxs)(ek,{children:[(0,a.jsx)(ev,{children:(0,a.jsx)(p.In,{name:"sparkle",size:24})}),(0,a.jsx)(e$,{children:i("ask.noKey.title")}),(0,a.jsx)(ej,{children:i("ask.noKey.body")}),(0,a.jsx)(p.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:i("ask.noKey.cta")})]})});let td=(0,a.jsxs)("div",{style:{position:"relative"},ref:eI,children:[(0,a.jsx)(p.K0,{title:i("ask.settings.title"),active:eT,onClick:()=>eC(e=>!e),children:(0,a.jsx)(p.In,{name:"settings",size:16})}),eT&&(0,a.jsxs)(ef,{children:[(0,a.jsxs)(ew,{children:[(0,a.jsx)(ey,{children:i("ask.settings.tone")}),(0,a.jsx)(eb,{children:(0,a.jsx)(p.ms,{align:"left",trigger:(0,a.jsx)(p.$n,{variant:"ghost",iconRight:(0,a.jsx)(p.In,{name:"chevron-down",size:12}),children:i(`ask.settings.tone.${v.tone}`)}),children:["friendly","direct","playful"].map(e=>(0,a.jsx)(p.tJ,{onClick:()=>void eU({tone:e}),children:i(`ask.settings.tone.${e}`)},e))})})]}),(0,a.jsxs)(ew,{children:[(0,a.jsx)(ey,{children:i("ask.settings.language")}),(0,a.jsx)(eb,{children:(0,a.jsx)(p.ms,{align:"left",trigger:(0,a.jsx)(p.$n,{variant:"ghost",iconRight:(0,a.jsx)(p.In,{name:"chevron-down",size:12}),children:i(`ask.settings.language.${v.language}`)}),children:["auto","pt","en"].map(e=>(0,a.jsx)(p.tJ,{onClick:()=>void eU({language:e}),children:i(`ask.settings.language.${e}`)},e))})})]}),(0,a.jsxs)(ew,{children:[(0,a.jsx)(ey,{children:i("ask.settings.maxTokens")}),(0,a.jsx)(eb,{children:(0,a.jsx)(p.ms,{align:"left",trigger:(0,a.jsx)(p.$n,{variant:"ghost",iconRight:(0,a.jsx)(p.In,{name:"chevron-down",size:12}),children:i(`ask.settings.maxTokens.${g[v.maxTokens]}`)}),children:[[256,"short"],[512,"medium"],[1024,"long"],[2048,"xlong"]].map(([e,t])=>(0,a.jsx)(p.tJ,{onClick:()=>void eU({maxTokens:e}),children:i(`ask.settings.maxTokens.${t}`)},e))})})]})]})]}),tp=0===eQ.length&&!e3,th=!!e2.trim()&&!e3&&!!r;return(0,a.jsx)(c.PE,{title:i("ask.title"),sidebar:tc,topBarRight:e,children:(0,a.jsxs)(D,{children:[(0,a.jsx)(em,{children:td}),(0,a.jsx)(L,{children:tp?(0,a.jsx)(F,{children:(0,a.jsxs)(N,{children:[(0,a.jsx)(P,{children:i("ask.welcome.title")}),(0,a.jsx)(U,{children:i("ask.welcome.kicker")}),(0,a.jsx)(G,{children:["1","2","3","4"].map((e,t)=>(0,a.jsxs)(K,{onClick:()=>{let t=i(`ask.suggestion.${e}`);e5(t),tn.current?.focus(),ti(t)},children:[(0,a.jsx)(q,{children:(0,a.jsx)(p.In,{name:eS[t],size:18,"aria-hidden":!0})}),(0,a.jsx)(H,{children:i(`ask.suggestion.${e}.title`)}),(0,a.jsx)(Q,{children:i(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,a.jsxs)(F,{children:[eQ.map((e,t)=>{let n="user"===e.role,s="loading"in e&&e.loading;return(0,a.jsx)(Y,{user:n,children:n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_,{children:e.content}),(0,a.jsx)(Z,{children:b(e.ts,i)}),(0,a.jsx)(ee,{className:"turn-actions",children:(0,a.jsx)(p.K0,{title:i("ask.action.edit"),onClick:()=>{},children:(0,a.jsx)(p.In,{name:"edit",size:13})})})]}):(0,a.jsxs)(B,{children:[(0,a.jsxs)(J,{children:[(0,a.jsx)(V,{"aria-hidden":!0,children:(0,a.jsx)(p.In,{name:"sparkle",size:14})}),(0,a.jsx)(W,{children:i("ask.atlantis")})]}),s?(0,a.jsxs)(X,{"aria-label":i("ask.thinking"),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.mQ,{children:e.content}),(0,a.jsx)(Z,{children:b(e.ts,i)}),(0,a.jsxs)(ee,{className:"turn-actions",children:[(0,a.jsx)(p.K0,{title:i("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,a.jsx)(p.In,{name:"copy",size:13})}),(0,a.jsx)(p.K0,{title:i("ask.action.regenerate"),onClick:()=>{ti("",{replay:!0})},children:(0,a.jsx)(p.In,{name:"refresh",size:13})})]})]})]})},t)}),e8&&(0,a.jsx)(Y,{children:(0,a.jsxs)(B,{children:[(0,a.jsxs)(J,{children:[(0,a.jsx)(V,{"aria-hidden":!0,children:(0,a.jsx)(p.In,{name:"sparkle",size:14})}),(0,a.jsx)(W,{children:i("ask.atlantis")})]}),(0,a.jsx)(et,{children:e8}),(0,a.jsx)(p.$n,{variant:"ghost",onClick:()=>{ti("",{replay:!0})},children:i("ask.retry")})]})}),(0,a.jsx)("div",{ref:ta})]})}),(0,a.jsx)(en,{children:(0,a.jsxs)(ea,{children:[(0,a.jsxs)(ei,{focused:e9,children:[(0,a.jsx)(eu,{children:(0,a.jsx)(p.ms,{align:"right",trigger:(0,a.jsxs)(eg,{type:"button","aria-label":i("ask.model.label"),children:[eA?.label??eR,(0,a.jsx)(p.In,{name:"chevron-down",size:10})]}),children:d.GROQ_MODELS.map(e=>(0,a.jsx)(p.tJ,{onClick:()=>void eM(e.id),children:e.label},e.id))})}),ez.length>0&&(0,a.jsx)(ed,{children:ez.map((e,t)=>(0,a.jsxs)(ep,{children:[(0,a.jsx)("img",{src:e.dataUrl,alt:e.name}),(0,a.jsx)("button",{type:"button",className:"remove-btn","aria-label":i("ask.attach.remove"),title:i("ask.attach.remove"),onClick:()=>eP(t),children:(0,a.jsx)(p.In,{name:"close",size:16})})]},t))}),(0,a.jsx)("input",{ref:eL,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:eN}),(0,a.jsxs)(es,{children:[(0,a.jsx)(er,{ref:tn,rows:1,placeholder:i("ask.placeholder"),value:e2,onChange:e=>e5(e.target.value),onKeyDown:tr,onFocus:()=>te(!0),onBlur:()=>te(!1),disabled:e3,"aria-label":i("ask.placeholder")}),(0,a.jsx)(eh,{type:"button",disabled:!eO,"aria-label":eO?i("ask.attach"):i("ask.attach.noVision"),title:eO?i("ask.attach"):i("ask.attach.noVision"),onClick:eF,children:(0,a.jsx)(p.In,{name:"paperclip",size:15})}),e3?(0,a.jsx)(el,{type:"button","aria-label":i("ask.stop"),title:i("ask.stop"),onClick:ts,children:(0,a.jsx)(p.In,{name:"square",size:14})}):(0,a.jsx)(eo,{type:"button",ready:th,"aria-label":i("ask.send"),title:i("ask.send"),disabled:!th,onClick:()=>void ti(e2),children:(0,a.jsx)(p.In,{name:"send",size:15})})]})]}),(0,a.jsxs)(ec,{children:[(0,a.jsxs)(ex,{children:[(0,a.jsx)(p.ue,{children:"↵"})," ",i("ask.hint.send")]}),(0,a.jsxs)(ex,{children:[(0,a.jsx)(p.ue,{children:"⇧↵"})," ",i("ask.hint.newline")]}),(0,a.jsxs)(ex,{children:[(0,a.jsx)(p.ue,{children:"⌘N"})," ",i("ask.hint.newConv")]})]})]})})]})})},{}))}}]);