"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([[6036],{46036(e,t,n){n.r(t),n.d(t,{default:()=>me});var a=n(27359),i=n(53233),s=n(77207),r=n(59200),o=n(9763),l=n(30894),c=n(38887),d=n(65723);const u={256:"short",512:"medium",1024:"long",2048:"xlong"},p="ask:active-conversation",h="ask:tone",f="ask:language",g="ask:max-tokens";function x(e,t){return(0,l.aw)(new Date(e).toISOString(),t)}function m(e){const t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}const w=s.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=s.keyframes`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,b=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,k=i.default.div`
  display: flex;
  justify-content: center;
  padding: ${r.w4.spacing.sm} 0;
`;function v({expanded:e,onNew:t,newLabel:n}){const{collapsed:a}=(0,r.cL)();return a?(0,d.jsx)(k,{children:(0,d.jsx)(o.K0,{title:n,onClick:t,children:(0,d.jsx)(o.In,{name:"plus",size:14})})}):(0,d.jsx)(d.Fragment,{children:e})}const $=i.default.div`
  padding: ${r.w4.spacing.sm};
  border-bottom: 1px solid ${r.w4.colors.borderSubtle};
  flex-shrink: 0;
`,j=i.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${r.w4.spacing.xs} 0;
`,T=i.default.div`
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.sm} 4px;
  margin-top: 4px;
`,C=i.default.div`
  position: relative;

  &:hover .conv-row-hover,
  &:focus-within .conv-row-hover {
    opacity: 1;
  }
`,I=(0,i.default)("button",{shouldForwardProp:e=>"active"!==e})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 10px ${r.w4.spacing.sm};
  border: none;
  border-radius: ${r.w4.borderRadius.md};
  background: ${({active:e})=>e?r.w4.colors.accentMuted:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background ${r.w4.transitions.fast};
  min-height: 44px;

  &:hover {
    background: ${({active:e})=>e?r.w4.colors.accentMuted:r.w4.colors.sidebarHover};
  }
  &:focus-visible {
    ${r.w4.focusRing}
  }
`,A=i.default.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?r.w4.colors.accent:r.w4.colors.mainText};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
`,E=i.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${r.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,S=i.default.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${r.w4.transitions.fast};
`,R=i.default.div`
  padding: ${r.w4.spacing.lg} ${r.w4.spacing.sm};
  font-size: 12px;
  color: ${r.w4.colors.mainTextFaint};
  text-align: center;
  line-height: 1.5;
`,M=i.default.div`
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
      ${r.w4.colors.accent}0d 0%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 0;
  }
`,D=i.default.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${r.w4.spacing.xl} ${r.w4.spacing.md} ${r.w4.spacing.lg};
  position: relative;
  z-index: 1;
`,z=i.default.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xl};
`,O=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${r.w4.spacing.xxl} 0 ${r.w4.spacing.xl};
  gap: ${r.w4.spacing.lg};
  animation: ${w} 0.3s ${r.w4.transitions.easing} both;
`,L=i.default.h1`
  font-family: ${r.w4.typography.fontFamilySerif};
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 400;
  line-height: 1.15;
  margin: 0;
  background: linear-gradient(
    120deg,
    ${r.w4.colors.accent} 0%,
    ${r.w4.colors.mainText} 55%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,N=i.default.p`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,F=i.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${r.w4.spacing.sm};
  width: 100%;
  max-width: 600px;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,P=i.default.button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: ${r.w4.spacing.md};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 14px;
  text-align: left;
  cursor: pointer;
  min-height: 100px;
  transition:
    border-color ${r.w4.transitions.base},
    transform ${r.w4.transitions.base},
    box-shadow ${r.w4.transitions.base};

  &:hover {
    border-color: ${r.w4.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${r.w4.elevation.md};
  }
  &:focus-visible {
    ${r.w4.focusRing}
  }
`,U=i.default.div`
  color: ${r.w4.colors.accent};
  opacity: 0.85;
`,K=i.default.div`
  font-size: 13.5px;
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  line-height: 1.3;
`,q=i.default.div`
  font-size: 12px;
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.45;
`,Y=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: ${({user:e})=>e?"flex-end":"flex-start"};
  gap: 4px;
  animation: ${w} 0.25s ${r.w4.transitions.easing} both;

  /* Reveal action row on hover/focus — no component selectors, plain class */
  &:hover .turn-actions,
  &:focus-within .turn-actions {
    opacity: 1;
  }
`,G=i.default.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 14px 14px 4px 14px;
  background: ${r.w4.colors.accentMuted};
  font-size: 14px;
  color: ${r.w4.colors.mainText};
  line-height: 1.55;
  word-break: break-word;
  transition: transform ${r.w4.transitions.fast};

  &:hover {
    transform: translateY(-1px);
  }
`,H=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${r.w4.spacing.sm};
  max-width: 100%;
`,B=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,J=i.default.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${r.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${r.w4.colors.accent};
  flex-shrink: 0;
`,Q=i.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${r.w4.colors.mainTextMuted};
`,_=i.default.div`
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 4px 0;

  span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${r.w4.colors.accent};
    animation: ${y} 1.2s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.15s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
  }
`,V=i.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${r.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,W=i.default.div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${r.w4.transitions.fast};
`,X=i.default.div`
  font-size: 12.5px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.danger};
`,Z=i.default.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.md} ${r.w4.spacing.md};
  position: relative;
  z-index: 1;
`,ee=i.default.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,te=i.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  background: ${r.w4.colors.surface};
  border: 1.5px solid ${({focused:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  border-radius: 28px;
  padding: 8px 8px 8px 14px;
  box-shadow: ${({focused:e})=>e?r.w4.elevation.md:"none"};
  transition:
    border-color ${r.w4.transitions.base},
    box-shadow ${r.w4.transitions.base};
`,ne=i.default.textarea`
  flex: 1;
  resize: none;
  background: transparent;
  border: none;
  font-family: ${r.w4.typography.fontFamily};
  font-size: 14px;
  color: ${r.w4.colors.mainText};
  line-height: 1.5;
  outline: none;
  min-height: 24px;
  max-height: 192px;
  overflow-y: auto;
  padding: 4px 0;
  caret-color: ${r.w4.colors.accent};

  &::placeholder {
    color: ${r.w4.colors.mainTextFaint};
  }
`,ae=i.default.button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ready:e})=>e?"pointer":"default"};
  background: ${({ready:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  color: ${({ready:e})=>e?"#fff":r.w4.colors.mainTextFaint};
  transition:
    background ${r.w4.transitions.fast},
    color ${r.w4.transitions.fast};

  &:focus-visible {
    ${r.w4.focusRing}
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ie=i.default.button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${r.w4.colors.danger};
  color: #fff;
  transition: opacity ${r.w4.transitions.fast};

  &:hover { opacity: 0.85; }
  &:focus-visible { ${r.w4.focusRing} }
`,se=i.default.div`
  display: flex;
  gap: ${r.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,re=i.default.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${r.w4.colors.mainTextFaint};
`,oe=i.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,le=i.default.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: ${r.w4.zIndex.dropdown};
  width: 280px;
  background: ${r.w4.colors.surfaceRaised};
  border: 1px solid ${r.w4.colors.borderStrong};
  border-radius: ${r.w4.borderRadius.lg};
  box-shadow: ${r.w4.elevation.md};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.md};
`,ce=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};
`,de=i.default.div`
  font-size: 10.5px;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${r.w4.colors.mainTextMuted};
`,ue=i.default.div`
  & > div { width: 100%; display: flex; }
  & > div > button { width: 100%; justify-content: space-between; }
`,pe=i.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${r.w4.spacing.md};
  padding: ${r.w4.spacing.xl};
  text-align: center;
`,he=i.default.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${r.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${r.w4.colors.accent};
`,fe=i.default.div`
  font-size: 17px;
  font-weight: 600;
  color: ${r.w4.colors.mainText};
`,ge=i.default.div`
  font-size: 13.5px;
  color: ${r.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,xe=["sparkle","code","book","message"];function me({topBarRight:e}){const[t]=(0,l.Ym)(),n=(0,a.useMemo)(()=>(0,l.Nx)(t,c.A),[t]),[i,s]=(0,a.useState)(null),[w,y]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(0,r.hY)().then(e=>{s(e),y(!0)}).catch(()=>y(!0))},[]);const[k,me]=(0,a.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[we,ye]=(0,a.useState)(!1),be=(0,a.useRef)(null);(0,a.useEffect)(()=>{Promise.all([(0,r.PL)(h),(0,r.PL)(f),(0,r.PL)(g)]).then(([e,t,n])=>{me({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>{})},[]);const ke=(0,a.useCallback)(async e=>{const t={...k,...e};me(t),void 0!==e.tone&&await(0,r.Is)(h,e.tone),void 0!==e.language&&await(0,r.Is)(f,e.language),void 0!==e.maxTokens&&await(0,r.Is)(g,String(e.maxTokens))},[k]);(0,a.useEffect)(()=>{if(!we)return;const e=e=>{const t=e.target;t&&(be.current?.contains(t)||t.closest?.('[role="menu"]')||ye(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[we]);const[ve,$e]=(0,a.useState)([]),[je,Te]=(0,a.useState)(null),[Ce,Ie]=(0,a.useState)([]),[Ae,Ee]=(0,a.useState)(""),Se=(0,a.useRef)([]);(0,a.useEffect)(()=>{Se.current=Ce},[Ce]);const Re=(0,a.useCallback)(async()=>{const e=await(0,r.Iu)("ask");return $e(e),e},[]),Me=(0,r.fy)(),De=(0,a.useRef)(null);function ze(e){try{const t=JSON.parse(e.content);Ie(t.turns??[])}catch{Ie([])}Te(e.id),Ee(e.name),(0,r.Is)(p,e.id).catch(()=>{})}function Oe(){Ie([]),Te(null),Ee(""),(0,r.Is)(p,"").catch(()=>{})}(0,a.useEffect)(()=>{(async()=>{const e=await Re(),t=Me.session,n=await(0,r.PL)(p),a=t??n,i=a?e.find(e=>e.id===a):null;i&&(ze(i),De.current=t??null)})().catch(()=>{})},[]),(0,a.useEffect)(()=>{const e=Me.session;if(!e)return;if(De.current===e)return;const t=ve.find(t=>t.id===e);t&&(De.current=e,ze(t))},[Me.session,ve]);const Le=(0,a.useCallback)(async(e,t,a)=>{const i=JSON.stringify({turns:e}),s=a??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):n("ask.untitled"));if(!t){const e=await(0,r.KL)("ask",s,i);return Te(e),await(0,r.Is)(p,e),e}return await(0,r.mZ)(t,s,i),t},[n]),Ne=(0,a.useCallback)(async e=>{await(0,r.kd)(e),e===je&&Oe(),await Re()},[je,Re]),[Fe,Pe]=(0,a.useState)(""),[Ue,Ke]=(0,a.useState)(!1),[qe,Ye]=(0,a.useState)(null),[Ge,He]=(0,a.useState)(!1),Be=(0,a.useRef)(null),Je=(0,a.useRef)(null),Qe=(0,a.useRef)(null);(0,a.useLayoutEffect)(()=>{const e=Je.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[Fe]),(0,a.useEffect)(()=>{Qe.current?.scrollIntoView({behavior:"smooth"})},[Ce,Ue]);const _e=(0,a.useCallback)(async(e,a)=>{if(!i||Ue)return;let s,o;if(!0===a?.replay){const e=Se.current.filter(e=>!("loading"in e));let t=-1;for(let n=e.length-1;n>=0;n--)if("user"===e[n].role){t=n;break}if(t<0)return;const n=e[t];if("user"!==n.role)return;s=n.content,o=e.slice(0,t+1)}else{if(!e.trim())return;s=e.trim(),Pe("");const t={role:"user",content:s,ts:Date.now()};o=[...Se.current.filter(e=>!("loading"in e)),t]}Ye(null);const l={role:"assistant",content:"",loading:!0,ts:Date.now()};Ie([...o,l]),Ke(!0);const c=o.filter(e=>!("loading"in e)).slice(0,-1).map(e=>({role:e.role,content:e.content})).slice(-6),d="auto"===k.language?t:k.language;Be.current?.abort();const u=new AbortController;Be.current=u;try{const e=await(0,r.Zf)(s,{key:i,system:(p=k.tone,h=d,f=k.language,["You are Atlantis, a personal-dashboard assistant.",`Be ${"friendly"===p?"warm and approachable":"playful"===p?"playful, light-hearted and fun":"direct and concise"}. Answer in ${"pt"===("auto"===f?h:f)?"Portuguese":"English"}.`,"Stay focused and reasonably concise. If you don't know, say so plainly.","","Your answers render as rich Markdown in the Atlantis UI. Pick the right block","for the job. The block types below are ALL that the renderer understands —","anything else (image links, HTML <svg>, external URLs for diagrams) is dropped","or shown broken. Examples show correct and incorrect use so the choice is","unambiguous.","","═══ 1. TEXT STRUCTURE ══════════════════════════════════════════════════","Headings (## / ###), bold / italic, bullet and numbered lists, paragraphs.","Use headings to split an answer that has multiple sections. Use numbered","lists for steps in order; bullet lists for enumerations; task lists","(`- [ ]` / `- [x]`) for checklists.","","LaTeX math: `$inline$` for inline formulas, `$$display$$` for standalone","equations. Use it for any mathematical notation — fractions, integrals,","sums, matrices. Example: `$E = mc^2$`, `$$\\int_0^1 x^2\\,dx = 1/3$$`.","","═══ 2. TABLES (GFM) ════════════════════════════════════════════════════","For comparing 2+ things across shared attributes. NOT for time-series data —","use a chart for that.","DO:","    | Feature   | Plan A | Plan B |","    |-----------|--------|--------|","    | Price     | $5/mo  | $12/mo |","    | Seats     | 3      | 10     |","","═══ 3. CODE BLOCKS ═════════════════════════════════════════════════════","Fenced with a real language tag for syntax highlighting. Supported tags","include `ts`, `tsx`, `js`, `py`, `bash`, `sh`, `json`, `yaml`,","`sql`, `css`, `html`, `md`. Skip the tag only for plain text samples.","DO:","    ```ts","    export function add(a: number, b: number) { return a + b; }","    ```","","═══ 4. CALLOUTS ════════════════════════════════════════════════════════","For asides, tips, warnings — never wrap them in a code fence, they're","blockquotes with a typed tag on the first line. Prefer the `>` prefix;","the renderer also tolerates a plain paragraph starting with `[!TAG]`.","Five tags available (use the one that actually matches severity):","    > [!NOTE] short aside / context","    > [!TIP] actionable hint or shortcut","    > [!IMPORTANT] critical fact the reader must not skip","    > [!WARNING] gotcha / caveat / common pitfall","    > [!CAUTION] destructive or risky action","DO:","    > [!TIP] Use `pnpm --filter` to run a script in a single package.","DON'T:","    ```tip","    Use pnpm --filter …","    ```","","═══ 5. MERMAID (```mermaid) ════════════════════════════════════════","KEEP DIAGRAMS SIMPLE AND SYNTACTICALLY VALID. Prefer 3–7 nodes; never","more than 10. Short one- or two-word labels. Only plain ASCII in node","ids (A, B, Browser, Auth — no accents, spaces, or punctuation in ids).",'Quote any label that contains spaces or special chars: `A["Sign in"]`.',"If you are not 100% sure the syntax is valid, use a bullet list instead.","","HARD RULE: a Mermaid block must contain NO digits, dates, years,","percentages, or units anywhere — not in node labels, not in edge","labels, not in comments. If any of those appear, the answer is a",'`chart` (§6) or a table, NEVER Mermaid. "Population over time",','"sales per quarter", "GDP per country" — all are `chart`.',"","Use Mermaid only for RELATIONSHIPS, FLOWS, HIERARCHIES, ARCHITECTURE,","and SEQUENCES where the content is words, not numbers. The renderer","runs Mermaid 11 in the browser and produces the SVG — you do not link","to images or emit HTML.","","First line declares the diagram type. Only these values are supported —","anything else falls back to raw text:","`graph`, `flowchart`, `sequenceDiagram`, `classDiagram`,","`stateDiagram`, `stateDiagram-v2`, `erDiagram`, `pie`, `gantt`,","`journey`, `mindmap`, `gitGraph`, `sankey-beta`, `quadrantChart`,","`requirementDiagram`, `timeline`, `xychart-beta`, `block-beta`,","`C4Context`, `C4Container`, `C4Component`, `C4Dynamic`, `C4Deployment`.","Use `[…]` (rectangle) for most nodes; reserve `{…}` (diamond) for actual decisions.","","DO — hierarchy:","    ```mermaid","    graph TD","      Animal --\x3e Mamífero","      Animal --\x3e Ave","      Mamífero --\x3e Cão","      Mamífero --\x3e Gato","    ```","","DO — flow with action labels on edges:","    ```mermaid","    graph LR","      User --\x3e|signs in| Auth","      Auth --\x3e|JWT| API","    ```","","DO — sequence:","    ```mermaid","    sequenceDiagram","      User->>API: GET /items","      API--\x3e>User: 200 OK","    ```","","Never link to external .png/.svg files, never emit <img> or <svg>, and",'never add a "the image needs a Mermaid renderer" callout — the renderer',"IS Mermaid and runs automatically.","","FINAL CHECK before emitting a ```mermaid fence: scan every line for a","digit. If you find one, delete the block and rewrite as `chart`.","","═══ 6. CHART (```chart) ═══════════════════════════════════════════════","For NUMERIC DATA. Only three chart types are supported — any other","value for `type` falls back to raw text:","  • `bar` — comparing categories","  • `line` — time series / ordered numeric axis","  • `pie` — parts of a whole (share / split)",'Any "value per year / month / category / quarter" lives here, never in Mermaid.',"","Format is a simple `key: value` DSL (NOT JSON, NOT YAML). Required keys:","`labels` and `data`. Optional: `type` (defaults `bar`), `title`,","`colors`. Arrays are comma-separated inside `[…]`.","","DO — bar:","    ```chart","    type: bar","    title: Revenue 2025 (€k)","    labels: [Q1, Q2, Q3, Q4]","    data: [12, 18, 9, 22]","    ```","","DO — line (time series):","    ```chart","    type: line","    title: População Mundial (bilhões)","    labels: [1900, 1920, 1940, 1960, 1980, 2000, 2020]","    data: [1.6, 1.9, 2.3, 3.0, 4.4, 6.1, 7.8]","    ```","","DO — pie:","    ```chart","    type: pie","    title: Revenue split","    labels: [EU, US, APAC, LATAM]","    data: [42, 35, 18, 5]","    ```","","DON'T — JSON syntax or missing labels/data:","    ```chart",'    { "type": "bar", "data": [1,2,3] }   %% parser expects key: value lines',"    ```","","═══ DECISION TREE ══════════════════════════════════════════════════════","Given a user request, pick ONE block type:","  • Numbers that change over a scalar axis (time, category, region) → `chart`.","  • Relationships, flows, dependencies, architecture, sequences → `mermaid`.","  • Comparing 2+ items across shared attributes → GFM table.","  • Ordered steps → numbered list. Unordered enumeration → bullet list.","  • Code / config / shell commands → fenced code with language tag.","  • Aside / warning / tip → callout blockquote.","","General rules:","  • Never emit an empty fenced block. If unsure, write prose.","  • Never reference an image file or external URL for a rendered diagram.","  • Keep captions around rendered blocks short — the block speaks for itself.","  • don't add \\n on the snippets, don't do breaking lines in the middle of sentences — the renderer handles all that."].join("\n")),locale:d,signal:u.signal,history:c,maxTokens:k.maxTokens});if(u.signal.aborted)return;const t={role:"assistant",content:e,ts:Date.now()},a=[...o,t];Ie(a);const l=await Le(a,je);l&&l!==je&&(Te(l),Ee(a.find(e=>"user"===e.role)?s.slice(0,50):n("ask.untitled"))),await Re()}catch(e){if(u.signal.aborted)return;const t=e instanceof Error?e.message:String(e);Ye(t),Ie(o)}finally{u.signal.aborted||Ke(!1)}var p,h,f},[i,Ue,t,k,je,Le,Re,n]),Ve=(0,a.useCallback)(()=>{Be.current?.abort(),Ke(!1),Ie(e=>e.filter(e=>!("loading"in e)))},[]);(0,a.useEffect)(()=>{const e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),Oe(),Je.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);const We=(0,a.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey)return e.preventDefault(),void _e(Fe);"Escape"===e.key&&(Fe?Pe(""):e.currentTarget.blur())},[Fe,_e]),Xe=(0,a.useMemo)(()=>{const e={today:[],yesterday:[],last7:[],older:[]};for(const t of ve)e[m(t.savedAt)].push(t);return e},[ve]),Ze={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},et=(0,d.jsx)(v,{onNew:Oe,newLabel:n("ask.sidebar.new"),expanded:(0,d.jsxs)(b,{children:[(0,d.jsx)($,{children:(0,d.jsx)(o.$n,{variant:"primary",onClick:Oe,style:{width:"100%",justifyContent:"center"},children:n("ask.sidebar.new")})}),(0,d.jsx)(j,{children:0===ve.length?(0,d.jsx)(R,{children:n("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{const t=Xe[e];return 0===t.length?null:(0,d.jsxs)("div",{children:[(0,d.jsx)(T,{children:(0,d.jsx)(o.YZ,{children:n(Ze[e])})}),t.map(e=>(0,d.jsxs)(C,{children:[(0,d.jsxs)(I,{active:e.id===je,onClick:()=>ze(e),children:[(0,d.jsx)(A,{active:e.id===je,children:e.name||n("ask.untitled")}),(0,d.jsx)(E,{children:(0,l.aw)(new Date(e.savedAt).toISOString(),n)})]}),(0,d.jsx)(S,{className:"conv-row-hover",children:(0,d.jsx)(o.K0,{title:n("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),Ne(e.id)},children:(0,d.jsx)(o.In,{name:"close",size:12})})})]},e.id))]},e)})})]})});if(w&&!i)return(0,d.jsx)(r.PE,{title:n("ask.title"),sidebar:et,topBarRight:e,children:(0,d.jsxs)(pe,{children:[(0,d.jsx)(he,{children:(0,d.jsx)(o.In,{name:"sparkle",size:24})}),(0,d.jsx)(fe,{children:n("ask.noKey.title")}),(0,d.jsx)(ge,{children:n("ask.noKey.body")}),(0,d.jsx)(o.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:n("ask.noKey.cta")})]})});const tt=(0,d.jsxs)("div",{style:{position:"relative"},ref:be,children:[(0,d.jsx)(o.K0,{title:n("ask.settings.title"),active:we,onClick:()=>ye(e=>!e),children:(0,d.jsx)(o.In,{name:"settings",size:16})}),we&&(0,d.jsxs)(le,{children:[(0,d.jsxs)(ce,{children:[(0,d.jsx)(de,{children:n("ask.settings.tone")}),(0,d.jsx)(ue,{children:(0,d.jsx)(o.ms,{align:"left",trigger:(0,d.jsx)(o.$n,{variant:"ghost",iconRight:(0,d.jsx)(o.In,{name:"chevron-down",size:12}),children:n(`ask.settings.tone.${k.tone}`)}),children:["friendly","direct","playful"].map(e=>(0,d.jsx)(o.tJ,{onClick:()=>{ke({tone:e})},children:n(`ask.settings.tone.${e}`)},e))})})]}),(0,d.jsxs)(ce,{children:[(0,d.jsx)(de,{children:n("ask.settings.language")}),(0,d.jsx)(ue,{children:(0,d.jsx)(o.ms,{align:"left",trigger:(0,d.jsx)(o.$n,{variant:"ghost",iconRight:(0,d.jsx)(o.In,{name:"chevron-down",size:12}),children:n(`ask.settings.language.${k.language}`)}),children:["auto","pt","en"].map(e=>(0,d.jsx)(o.tJ,{onClick:()=>{ke({language:e})},children:n(`ask.settings.language.${e}`)},e))})})]}),(0,d.jsxs)(ce,{children:[(0,d.jsx)(de,{children:n("ask.settings.maxTokens")}),(0,d.jsx)(ue,{children:(0,d.jsx)(o.ms,{align:"left",trigger:(0,d.jsx)(o.$n,{variant:"ghost",iconRight:(0,d.jsx)(o.In,{name:"chevron-down",size:12}),children:n(`ask.settings.maxTokens.${u[k.maxTokens]}`)}),children:[[256,"short"],[512,"medium"],[1024,"long"],[2048,"xlong"]].map(([e,t])=>(0,d.jsx)(o.tJ,{onClick:()=>{ke({maxTokens:e})},children:n(`ask.settings.maxTokens.${t}`)},e))})})]})]})]}),nt=0===Ce.length&&!Ue,at=!!Fe.trim()&&!Ue&&!!i;return(0,d.jsx)(r.PE,{title:n("ask.title"),sidebar:et,topBarRight:e,children:(0,d.jsxs)(M,{children:[(0,d.jsx)(oe,{children:tt}),(0,d.jsx)(D,{children:nt?(0,d.jsx)(z,{children:(0,d.jsxs)(O,{children:[(0,d.jsx)(L,{children:n("ask.welcome.title")}),(0,d.jsx)(N,{children:n("ask.welcome.kicker")}),(0,d.jsx)(F,{children:["1","2","3","4"].map((e,t)=>(0,d.jsxs)(P,{onClick:()=>{const t=n(`ask.suggestion.${e}`);Pe(t),Je.current?.focus(),_e(t)},children:[(0,d.jsx)(U,{children:(0,d.jsx)(o.In,{name:xe[t],size:18,"aria-hidden":!0})}),(0,d.jsx)(K,{children:n(`ask.suggestion.${e}.title`)}),(0,d.jsx)(q,{children:n(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,d.jsxs)(z,{children:[Ce.map((e,t)=>{const a="user"===e.role,i="loading"in e&&e.loading;return(0,d.jsx)(Y,{user:a,children:a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(G,{children:e.content}),(0,d.jsx)(V,{children:x(e.ts,n)}),(0,d.jsx)(W,{className:"turn-actions",children:(0,d.jsx)(o.K0,{title:n("ask.action.edit"),onClick:()=>{},children:(0,d.jsx)(o.In,{name:"edit",size:13})})})]}):(0,d.jsxs)(H,{children:[(0,d.jsxs)(B,{children:[(0,d.jsx)(J,{"aria-hidden":!0,children:(0,d.jsx)(o.In,{name:"sparkle",size:14})}),(0,d.jsx)(Q,{children:n("ask.atlantis")})]}),i?(0,d.jsxs)(_,{"aria-label":n("ask.thinking"),children:[(0,d.jsx)("span",{}),(0,d.jsx)("span",{}),(0,d.jsx)("span",{})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.mQ,{children:e.content}),(0,d.jsx)(V,{children:x(e.ts,n)}),(0,d.jsxs)(W,{className:"turn-actions",children:[(0,d.jsx)(o.K0,{title:n("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,d.jsx)(o.In,{name:"copy",size:13})}),(0,d.jsx)(o.K0,{title:n("ask.action.regenerate"),onClick:()=>{_e("",{replay:!0})},children:(0,d.jsx)(o.In,{name:"refresh",size:13})})]})]})]})},t)}),qe&&(0,d.jsx)(Y,{children:(0,d.jsxs)(H,{children:[(0,d.jsxs)(B,{children:[(0,d.jsx)(J,{"aria-hidden":!0,children:(0,d.jsx)(o.In,{name:"sparkle",size:14})}),(0,d.jsx)(Q,{children:n("ask.atlantis")})]}),(0,d.jsx)(X,{children:qe}),(0,d.jsx)(o.$n,{variant:"ghost",onClick:()=>{_e("",{replay:!0})},children:n("ask.retry")})]})}),(0,d.jsx)("div",{ref:Qe})]})}),(0,d.jsx)(Z,{children:(0,d.jsxs)(ee,{children:[(0,d.jsxs)(te,{focused:Ge,children:[(0,d.jsx)(ne,{ref:Je,rows:1,placeholder:n("ask.placeholder"),value:Fe,onChange:e=>Pe(e.target.value),onKeyDown:We,onFocus:()=>He(!0),onBlur:()=>He(!1),disabled:Ue,"aria-label":n("ask.placeholder")}),Ue?(0,d.jsx)(ie,{type:"button","aria-label":n("ask.stop"),title:n("ask.stop"),onClick:Ve,children:(0,d.jsx)(o.In,{name:"square",size:14})}):(0,d.jsx)(ae,{type:"button",ready:at,"aria-label":n("ask.send"),title:n("ask.send"),disabled:!at,onClick:()=>{_e(Fe)},children:(0,d.jsx)(o.In,{name:"send",size:15})})]}),(0,d.jsxs)(se,{children:[(0,d.jsxs)(re,{children:[(0,d.jsx)(o.ue,{children:"↵"})," ",n("ask.hint.send")]}),(0,d.jsxs)(re,{children:[(0,d.jsx)(o.ue,{children:"⇧↵"})," ",n("ask.hint.newline")]}),(0,d.jsxs)(re,{children:[(0,d.jsx)(o.ue,{children:"⌘N"})," ",n("ask.hint.newConv")]})]})]})})]})})}}}]);