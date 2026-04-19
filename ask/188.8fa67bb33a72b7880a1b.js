"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([[188],{20188(e,t,n){var a=n(58997),i=n(27359),s=n(53233),r=n(77207),o=n(59200),l=n(78813),c=n(30894),d=n(38887),u=n(65723);const p={256:"short",512:"medium",1024:"long",2048:"xlong"},h="ask:active-conversation",f="ask:tone",g="ask:language",x="ask:max-tokens";function m(e,t){return(0,c.aw)(new Date(e).toISOString(),t)}function w(e){const t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}const y=r.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=r.keyframes`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,k=s.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,v=s.default.div`
  padding: ${o.w4.spacing.sm};
  border-bottom: 1px solid ${o.w4.colors.borderSubtle};
  flex-shrink: 0;
`,$=s.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${o.w4.spacing.xs} 0;
`,j=s.default.div`
  padding: ${o.w4.spacing.sm} ${o.w4.spacing.sm} 4px;
  margin-top: 4px;
`,T=s.default.div`
  position: relative;

  &:hover .conv-row-hover,
  &:focus-within .conv-row-hover {
    opacity: 1;
  }
`,C=(0,s.default)("button",{shouldForwardProp:e=>"active"!==e})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 10px ${o.w4.spacing.sm};
  border: none;
  border-radius: ${o.w4.borderRadius.md};
  background: ${({active:e})=>e?o.w4.colors.accentMuted:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background ${o.w4.transitions.fast};
  min-height: 44px;

  &:hover {
    background: ${({active:e})=>e?o.w4.colors.accentMuted:o.w4.colors.sidebarHover};
  }
  &:focus-visible {
    ${o.w4.focusRing}
  }
`,I=s.default.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?o.w4.colors.accent:o.w4.colors.mainText};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
`,E=s.default.div`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${o.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,A=s.default.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${o.w4.transitions.fast};
`,S=s.default.div`
  padding: ${o.w4.spacing.lg} ${o.w4.spacing.sm};
  font-size: 12px;
  color: ${o.w4.colors.mainTextFaint};
  text-align: center;
  line-height: 1.5;
`,R=s.default.div`
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
      ${o.w4.colors.accent}0d 0%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 0;
  }
`,M=s.default.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${o.w4.spacing.xl} ${o.w4.spacing.md} ${o.w4.spacing.lg};
  position: relative;
  z-index: 1;
`,D=s.default.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.xl};
`,z=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${o.w4.spacing.xxl} 0 ${o.w4.spacing.xl};
  gap: ${o.w4.spacing.lg};
  animation: ${y} 0.3s ${o.w4.transitions.easing} both;
`,O=s.default.h1`
  font-family: ${o.w4.typography.fontFamilySerif};
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 400;
  line-height: 1.15;
  margin: 0;
  background: linear-gradient(
    120deg,
    ${o.w4.colors.accent} 0%,
    ${o.w4.colors.mainText} 55%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,L=s.default.p`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${o.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,N=s.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${o.w4.spacing.sm};
  width: 100%;
  max-width: 600px;

  @media (max-width: ${o.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,F=s.default.button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: ${o.w4.spacing.md};
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: 14px;
  text-align: left;
  cursor: pointer;
  min-height: 100px;
  transition:
    border-color ${o.w4.transitions.base},
    transform ${o.w4.transitions.base},
    box-shadow ${o.w4.transitions.base};

  &:hover {
    border-color: ${o.w4.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${o.w4.elevation.md};
  }
  &:focus-visible {
    ${o.w4.focusRing}
  }
`,P=s.default.div`
  color: ${o.w4.colors.accent};
  opacity: 0.85;
`,U=s.default.div`
  font-size: 13.5px;
  font-weight: 600;
  color: ${o.w4.colors.mainText};
  line-height: 1.3;
`,K=s.default.div`
  font-size: 12px;
  color: ${o.w4.colors.mainTextMuted};
  line-height: 1.45;
`,q=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: ${({user:e})=>e?"flex-end":"flex-start"};
  gap: 4px;
  animation: ${y} 0.25s ${o.w4.transitions.easing} both;

  /* Reveal action row on hover/focus — no component selectors, plain class */
  &:hover .turn-actions,
  &:focus-within .turn-actions {
    opacity: 1;
  }
`,H=s.default.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 14px 14px 4px 14px;
  background: ${o.w4.colors.accentMuted};
  font-size: 14px;
  color: ${o.w4.colors.mainText};
  line-height: 1.55;
  word-break: break-word;
  transition: transform ${o.w4.transitions.fast};

  &:hover {
    transform: translateY(-1px);
  }
`,Y=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${o.w4.spacing.sm};
  max-width: 100%;
`,G=s.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,B=s.default.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${o.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${o.w4.colors.accent};
  flex-shrink: 0;
`,J=s.default.div`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${o.w4.colors.mainTextMuted};
`,Q=s.default.div`
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 4px 0;

  span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${o.w4.colors.accent};
    animation: ${b} 1.2s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.15s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
  }
`,_=s.default.div`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${o.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,V=s.default.div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${o.w4.transitions.fast};
`,W=s.default.div`
  font-size: 12.5px;
  font-family: ${o.w4.typography.fontFamilyMono};
  color: ${o.w4.colors.danger};
`,X=s.default.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${o.w4.spacing.sm} ${o.w4.spacing.md} ${o.w4.spacing.md};
  position: relative;
  z-index: 1;
`,Z=s.default.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ee=s.default.div`
  display: flex;
  align-items: center;
  gap: ${o.w4.spacing.sm};
  background: ${o.w4.colors.surface};
  border: 1.5px solid ${({focused:e})=>e?o.w4.colors.accent:o.w4.colors.border};
  border-radius: 28px;
  padding: 8px 8px 8px 14px;
  box-shadow: ${({focused:e})=>e?o.w4.elevation.md:"none"};
  transition:
    border-color ${o.w4.transitions.base},
    box-shadow ${o.w4.transitions.base};
`,te=s.default.textarea`
  flex: 1;
  resize: none;
  background: transparent;
  border: none;
  font-family: ${o.w4.typography.fontFamily};
  font-size: 14px;
  color: ${o.w4.colors.mainText};
  line-height: 1.5;
  outline: none;
  min-height: 24px;
  max-height: 192px;
  overflow-y: auto;
  padding: 4px 0;
  caret-color: ${o.w4.colors.accent};

  &::placeholder {
    color: ${o.w4.colors.mainTextFaint};
  }
`,ne=s.default.button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ready:e})=>e?"pointer":"default"};
  background: ${({ready:e})=>e?o.w4.colors.accent:o.w4.colors.border};
  color: ${({ready:e})=>e?"#fff":o.w4.colors.mainTextFaint};
  transition:
    background ${o.w4.transitions.fast},
    color ${o.w4.transitions.fast};

  &:focus-visible {
    ${o.w4.focusRing}
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ae=s.default.button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${o.w4.colors.danger};
  color: #fff;
  transition: opacity ${o.w4.transitions.fast};

  &:hover { opacity: 0.85; }
  &:focus-visible { ${o.w4.focusRing} }
`,ie=s.default.div`
  display: flex;
  gap: ${o.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,se=s.default.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${o.w4.colors.mainTextFaint};
`,re=s.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${o.w4.spacing.md} ${o.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,oe=s.default.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: ${o.w4.zIndex.dropdown};
  width: 280px;
  background: ${o.w4.colors.surfaceRaised};
  border: 1px solid ${o.w4.colors.borderStrong};
  border-radius: ${o.w4.borderRadius.lg};
  box-shadow: ${o.w4.elevation.md};
  padding: ${o.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.md};
`,le=s.default.div`
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.sm};
`,ce=s.default.div`
  font-size: 10.5px;
  font-family: ${o.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${o.w4.colors.mainTextMuted};
`,de=s.default.div`
  & > div { width: 100%; display: flex; }
  & > div > button { width: 100%; justify-content: space-between; }
`,ue=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${o.w4.spacing.md};
  padding: ${o.w4.spacing.xl};
  text-align: center;
`,pe=s.default.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${o.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${o.w4.colors.accent};
`,he=s.default.div`
  font-size: 17px;
  font-weight: 600;
  color: ${o.w4.colors.mainText};
`,fe=s.default.div`
  font-size: 13.5px;
  color: ${o.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,ge=["sparkle","code","book","message"];function xe({topBarRight:e}){const[t]=(0,c.Ym)(),n=(0,i.useMemo)(()=>(0,c.Nx)(t,d.A),[t]),[a,s]=(0,i.useState)(null),[r,y]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(0,o.hY)().then(e=>{s(e),y(!0)}).catch(()=>y(!0))},[]);const[b,xe]=(0,i.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[me,we]=(0,i.useState)(!1),ye=(0,i.useRef)(null);(0,i.useEffect)(()=>{Promise.all([(0,o.PL)(f),(0,o.PL)(g),(0,o.PL)(x)]).then(([e,t,n])=>{xe({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>{})},[]);const be=(0,i.useCallback)(async e=>{const t={...b,...e};xe(t),void 0!==e.tone&&await(0,o.Is)(f,e.tone),void 0!==e.language&&await(0,o.Is)(g,e.language),void 0!==e.maxTokens&&await(0,o.Is)(x,String(e.maxTokens))},[b]);(0,i.useEffect)(()=>{if(!me)return;const e=e=>{const t=e.target;t&&(ye.current?.contains(t)||t.closest?.('[role="menu"]')||we(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[me]);const[ke,ve]=(0,i.useState)([]),[$e,je]=(0,i.useState)(null),[Te,Ce]=(0,i.useState)([]),[Ie,Ee]=(0,i.useState)(""),Ae=(0,i.useRef)([]);(0,i.useEffect)(()=>{Ae.current=Te},[Te]);const Se=(0,i.useCallback)(async()=>{const e=await(0,o.Iu)("ask");return ve(e),e},[]),Re=(0,o.fy)(),Me=(0,i.useRef)(null);function De(e){try{const t=JSON.parse(e.content);Ce(t.turns??[])}catch{Ce([])}je(e.id),Ee(e.name),(0,o.Is)(h,e.id).catch(()=>{})}function ze(){Ce([]),je(null),Ee(""),(0,o.Is)(h,"").catch(()=>{})}(0,i.useEffect)(()=>{(async()=>{const e=await Se(),t=Re.session,n=await(0,o.PL)(h),a=t??n,i=a?e.find(e=>e.id===a):null;i&&(De(i),Me.current=t??null)})().catch(()=>{})},[]),(0,i.useEffect)(()=>{const e=Re.session;if(!e)return;if(Me.current===e)return;const t=ke.find(t=>t.id===e);t&&(Me.current=e,De(t))},[Re.session,ke]);const Oe=(0,i.useCallback)(async(e,t,a)=>{const i=JSON.stringify({turns:e}),s=a??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):n("ask.untitled"));if(!t){const e=await(0,o.KL)("ask",s,i);return je(e),await(0,o.Is)(h,e),e}return await(0,o.mZ)(t,s,i),t},[n]),Le=(0,i.useCallback)(async e=>{await(0,o.kd)(e),e===$e&&ze(),await Se()},[$e,Se]),[Ne,Fe]=(0,i.useState)(""),[Pe,Ue]=(0,i.useState)(!1),[Ke,qe]=(0,i.useState)(null),[He,Ye]=(0,i.useState)(!1),Ge=(0,i.useRef)(null),Be=(0,i.useRef)(null),Je=(0,i.useRef)(null);(0,i.useLayoutEffect)(()=>{const e=Be.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[Ne]),(0,i.useEffect)(()=>{Je.current?.scrollIntoView({behavior:"smooth"})},[Te,Pe]);const Qe=(0,i.useCallback)(async(e,i)=>{if(!a||Pe)return;let s,r;if(!0===i?.replay){const e=Ae.current.filter(e=>!("loading"in e));let t=-1;for(let n=e.length-1;n>=0;n--)if("user"===e[n].role){t=n;break}if(t<0)return;const n=e[t];if("user"!==n.role)return;s=n.content,r=e.slice(0,t+1)}else{if(!e.trim())return;s=e.trim(),Fe("");const t={role:"user",content:s,ts:Date.now()};r=[...Ae.current.filter(e=>!("loading"in e)),t]}qe(null);const l={role:"assistant",content:"",loading:!0,ts:Date.now()};Ce([...r,l]),Ue(!0);const c=r.filter(e=>!("loading"in e)).slice(0,-1).map(e=>({role:e.role,content:e.content})).slice(-6),d="auto"===b.language?t:b.language;Ge.current?.abort();const u=new AbortController;Ge.current=u;try{const e=await(0,o.Zf)(s,{key:a,system:(p=b.tone,h=d,f=b.language,["You are Atlantis, a personal-dashboard assistant.",`Be ${"friendly"===p?"warm and approachable":"playful"===p?"playful, light-hearted and fun":"direct and concise"}. Answer in ${"pt"===("auto"===f?h:f)?"Portuguese":"English"}.`,"Stay focused and reasonably concise. If you don't know, say so plainly.","","Your answers render as rich Markdown in the Atlantis UI. Pick the right block","for the job. The block types below are ALL that the renderer understands —","anything else (image links, HTML <svg>, external URLs for diagrams) is dropped","or shown broken. Examples show correct and incorrect use so the choice is","unambiguous.","","═══ 1. TEXT STRUCTURE ══════════════════════════════════════════════════","Headings (## / ###), bold / italic, bullet and numbered lists, paragraphs.","Use headings to split an answer that has multiple sections. Use numbered","lists for steps in order; bullet lists for enumerations; task lists","(`- [ ]` / `- [x]`) for checklists.","","LaTeX math: `$inline$` for inline formulas, `$$display$$` for standalone","equations. Use it for any mathematical notation — fractions, integrals,","sums, matrices. Example: `$E = mc^2$`, `$$\\int_0^1 x^2\\,dx = 1/3$$`.","","═══ 2. TABLES (GFM) ════════════════════════════════════════════════════","For comparing 2+ things across shared attributes. NOT for time-series data —","use a chart for that.","DO:","    | Feature   | Plan A | Plan B |","    |-----------|--------|--------|","    | Price     | $5/mo  | $12/mo |","    | Seats     | 3      | 10     |","","═══ 3. CODE BLOCKS ═════════════════════════════════════════════════════","Fenced with a real language tag for syntax highlighting. Supported tags","include `ts`, `tsx`, `js`, `py`, `bash`, `sh`, `json`, `yaml`,","`sql`, `css`, `html`, `md`. Skip the tag only for plain text samples.","DO:","    ```ts","    export function add(a: number, b: number) { return a + b; }","    ```","","═══ 4. CALLOUTS ════════════════════════════════════════════════════════","For asides, tips, warnings — never wrap them in a code fence, they're","blockquotes with a typed tag on the first line. Prefer the `>` prefix;","the renderer also tolerates a plain paragraph starting with `[!TAG]`.","Five tags available (use the one that actually matches severity):","    > [!NOTE] short aside / context","    > [!TIP] actionable hint or shortcut","    > [!IMPORTANT] critical fact the reader must not skip","    > [!WARNING] gotcha / caveat / common pitfall","    > [!CAUTION] destructive or risky action","DO:","    > [!TIP] Use `pnpm --filter` to run a script in a single package.","DON'T:","    ```tip","    Use pnpm --filter …","    ```","","═══ 5. MERMAID (```mermaid) ════════════════════════════════════════","KEEP DIAGRAMS SIMPLE AND SYNTACTICALLY VALID. Prefer 3–7 nodes; never","more than 10. Short one- or two-word labels. Only plain ASCII in node","ids (A, B, Browser, Auth — no accents, spaces, or punctuation in ids).",'Quote any label that contains spaces or special chars: `A["Sign in"]`.',"If you are not 100% sure the syntax is valid, use a bullet list instead.","","HARD RULE: a Mermaid block must contain NO digits, dates, years,","percentages, or units anywhere — not in node labels, not in edge","labels, not in comments. If any of those appear, the answer is a",'`chart` (§6) or a table, NEVER Mermaid. "Population over time",','"sales per quarter", "GDP per country" — all are `chart`.',"","Use Mermaid only for RELATIONSHIPS, FLOWS, HIERARCHIES, ARCHITECTURE,","and SEQUENCES where the content is words, not numbers. The renderer","runs Mermaid 11 in the browser and produces the SVG — you do not link","to images or emit HTML.","","First line declares the diagram type. Only these values are supported —","anything else falls back to raw text:","`graph`, `flowchart`, `sequenceDiagram`, `classDiagram`,","`stateDiagram`, `stateDiagram-v2`, `erDiagram`, `pie`, `gantt`,","`journey`, `mindmap`, `gitGraph`, `sankey-beta`, `quadrantChart`,","`requirementDiagram`, `timeline`, `xychart-beta`, `block-beta`,","`C4Context`, `C4Container`, `C4Component`, `C4Dynamic`, `C4Deployment`.","Use `[…]` (rectangle) for most nodes; reserve `{…}` (diamond) for actual decisions.","","DO — hierarchy:","    ```mermaid","    graph TD","      Animal --\x3e Mamífero","      Animal --\x3e Ave","      Mamífero --\x3e Cão","      Mamífero --\x3e Gato","    ```","","DO — flow with action labels on edges:","    ```mermaid","    graph LR","      User --\x3e|signs in| Auth","      Auth --\x3e|JWT| API","    ```","","DO — sequence:","    ```mermaid","    sequenceDiagram","      User->>API: GET /items","      API--\x3e>User: 200 OK","    ```","","Never link to external .png/.svg files, never emit <img> or <svg>, and",'never add a "the image needs a Mermaid renderer" callout — the renderer',"IS Mermaid and runs automatically.","","FINAL CHECK before emitting a ```mermaid fence: scan every line for a","digit. If you find one, delete the block and rewrite as `chart`.","","═══ 6. CHART (```chart) ═══════════════════════════════════════════════","For NUMERIC DATA. Only three chart types are supported — any other","value for `type` falls back to raw text:","  • `bar` — comparing categories","  • `line` — time series / ordered numeric axis","  • `pie` — parts of a whole (share / split)",'Any "value per year / month / category / quarter" lives here, never in Mermaid.',"","Format is a simple `key: value` DSL (NOT JSON, NOT YAML). Required keys:","`labels` and `data`. Optional: `type` (defaults `bar`), `title`,","`colors`. Arrays are comma-separated inside `[…]`.","","DO — bar:","    ```chart","    type: bar","    title: Revenue 2025 (€k)","    labels: [Q1, Q2, Q3, Q4]","    data: [12, 18, 9, 22]","    ```","","DO — line (time series):","    ```chart","    type: line","    title: População Mundial (bilhões)","    labels: [1900, 1920, 1940, 1960, 1980, 2000, 2020]","    data: [1.6, 1.9, 2.3, 3.0, 4.4, 6.1, 7.8]","    ```","","DO — pie:","    ```chart","    type: pie","    title: Revenue split","    labels: [EU, US, APAC, LATAM]","    data: [42, 35, 18, 5]","    ```","","DON'T — JSON syntax or missing labels/data:","    ```chart",'    { "type": "bar", "data": [1,2,3] }   %% parser expects key: value lines',"    ```","","═══ DECISION TREE ══════════════════════════════════════════════════════","Given a user request, pick ONE block type:","  • Numbers that change over a scalar axis (time, category, region) → `chart`.","  • Relationships, flows, dependencies, architecture, sequences → `mermaid`.","  • Comparing 2+ items across shared attributes → GFM table.","  • Ordered steps → numbered list. Unordered enumeration → bullet list.","  • Code / config / shell commands → fenced code with language tag.","  • Aside / warning / tip → callout blockquote.","","General rules:","  • Never emit an empty fenced block. If unsure, write prose.","  • Never reference an image file or external URL for a rendered diagram.","  • Keep captions around rendered blocks short — the block speaks for itself.","  • don't add \\n on the snippets, don't do breaking lines in the middle of sentences — the renderer handles all that."].join("\n")),locale:d,signal:u.signal,history:c,maxTokens:b.maxTokens});if(u.signal.aborted)return;const t={role:"assistant",content:e,ts:Date.now()},i=[...r,t];Ce(i);const l=await Oe(i,$e);l&&l!==$e&&(je(l),Ee(i.find(e=>"user"===e.role)?s.slice(0,50):n("ask.untitled"))),await Se()}catch(e){if(u.signal.aborted)return;const t=e instanceof Error?e.message:String(e);qe(t),Ce(r)}finally{u.signal.aborted||Ue(!1)}var p,h,f},[a,Pe,t,b,$e,Oe,Se,n]),_e=(0,i.useCallback)(()=>{Ge.current?.abort(),Ue(!1),Ce(e=>e.filter(e=>!("loading"in e)))},[]);(0,i.useEffect)(()=>{const e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),ze(),Be.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);const Ve=(0,i.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey)return e.preventDefault(),void Qe(Ne);"Escape"===e.key&&(Ne?Fe(""):e.currentTarget.blur())},[Ne,Qe]),We=(0,i.useMemo)(()=>{const e={today:[],yesterday:[],last7:[],older:[]};for(const t of ke)e[w(t.savedAt)].push(t);return e},[ke]),Xe={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},Ze=(0,u.jsxs)(k,{children:[(0,u.jsx)(v,{children:(0,u.jsx)(l.$n,{variant:"primary",onClick:ze,style:{width:"100%",justifyContent:"center"},children:n("ask.sidebar.new")})}),(0,u.jsx)($,{children:0===ke.length?(0,u.jsx)(S,{children:n("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{const t=We[e];return 0===t.length?null:(0,u.jsxs)("div",{children:[(0,u.jsx)(j,{children:(0,u.jsx)(l.YZ,{children:n(Xe[e])})}),t.map(e=>(0,u.jsxs)(T,{children:[(0,u.jsxs)(C,{active:e.id===$e,onClick:()=>De(e),children:[(0,u.jsx)(I,{active:e.id===$e,children:e.name||n("ask.untitled")}),(0,u.jsx)(E,{children:(0,c.aw)(new Date(e.savedAt).toISOString(),n)})]}),(0,u.jsx)(A,{className:"conv-row-hover",children:(0,u.jsx)(l.K0,{title:n("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),Le(e.id)},children:(0,u.jsx)(l.In,{name:"close",size:12})})})]},e.id))]},e)})})]});if(r&&!a)return(0,u.jsx)(o.PE,{title:n("ask.title"),sidebar:Ze,topBarRight:e,children:(0,u.jsxs)(ue,{children:[(0,u.jsx)(pe,{children:(0,u.jsx)(l.In,{name:"sparkle",size:24})}),(0,u.jsx)(he,{children:n("ask.noKey.title")}),(0,u.jsx)(fe,{children:n("ask.noKey.body")}),(0,u.jsx)(l.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:n("ask.noKey.cta")})]})});const et=(0,u.jsxs)("div",{style:{position:"relative"},ref:ye,children:[(0,u.jsx)(l.K0,{title:n("ask.settings.title"),active:me,onClick:()=>we(e=>!e),children:(0,u.jsx)(l.In,{name:"settings",size:16})}),me&&(0,u.jsxs)(oe,{children:[(0,u.jsxs)(le,{children:[(0,u.jsx)(ce,{children:n("ask.settings.tone")}),(0,u.jsx)(de,{children:(0,u.jsx)(l.ms,{align:"left",trigger:(0,u.jsx)(l.$n,{variant:"ghost",iconRight:(0,u.jsx)(l.In,{name:"chevron-down",size:12}),children:n(`ask.settings.tone.${b.tone}`)}),children:["friendly","direct","playful"].map(e=>(0,u.jsx)(l.tJ,{onClick:()=>{be({tone:e})},children:n(`ask.settings.tone.${e}`)},e))})})]}),(0,u.jsxs)(le,{children:[(0,u.jsx)(ce,{children:n("ask.settings.language")}),(0,u.jsx)(de,{children:(0,u.jsx)(l.ms,{align:"left",trigger:(0,u.jsx)(l.$n,{variant:"ghost",iconRight:(0,u.jsx)(l.In,{name:"chevron-down",size:12}),children:n(`ask.settings.language.${b.language}`)}),children:["auto","pt","en"].map(e=>(0,u.jsx)(l.tJ,{onClick:()=>{be({language:e})},children:n(`ask.settings.language.${e}`)},e))})})]}),(0,u.jsxs)(le,{children:[(0,u.jsx)(ce,{children:n("ask.settings.maxTokens")}),(0,u.jsx)(de,{children:(0,u.jsx)(l.ms,{align:"left",trigger:(0,u.jsx)(l.$n,{variant:"ghost",iconRight:(0,u.jsx)(l.In,{name:"chevron-down",size:12}),children:n(`ask.settings.maxTokens.${p[b.maxTokens]}`)}),children:[[256,"short"],[512,"medium"],[1024,"long"],[2048,"xlong"]].map(([e,t])=>(0,u.jsx)(l.tJ,{onClick:()=>{be({maxTokens:e})},children:n(`ask.settings.maxTokens.${t}`)},e))})})]})]})]}),tt=0===Te.length&&!Pe,nt=!!Ne.trim()&&!Pe&&!!a;return(0,u.jsx)(o.PE,{title:n("ask.title"),sidebar:Ze,topBarRight:e,children:(0,u.jsxs)(R,{children:[(0,u.jsx)(re,{children:et}),(0,u.jsx)(M,{children:tt?(0,u.jsx)(D,{children:(0,u.jsxs)(z,{children:[(0,u.jsx)(O,{children:n("ask.welcome.title")}),(0,u.jsx)(L,{children:n("ask.welcome.kicker")}),(0,u.jsx)(N,{children:["1","2","3","4"].map((e,t)=>(0,u.jsxs)(F,{onClick:()=>{const t=n(`ask.suggestion.${e}`);Fe(t),Be.current?.focus(),Qe(t)},children:[(0,u.jsx)(P,{children:(0,u.jsx)(l.In,{name:ge[t],size:18,"aria-hidden":!0})}),(0,u.jsx)(U,{children:n(`ask.suggestion.${e}.title`)}),(0,u.jsx)(K,{children:n(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,u.jsxs)(D,{children:[Te.map((e,t)=>{const a="user"===e.role,i="loading"in e&&e.loading;return(0,u.jsx)(q,{user:a,children:a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(H,{children:e.content}),(0,u.jsx)(_,{children:m(e.ts,n)}),(0,u.jsx)(V,{className:"turn-actions",children:(0,u.jsx)(l.K0,{title:n("ask.action.edit"),onClick:()=>{},children:(0,u.jsx)(l.In,{name:"edit",size:13})})})]}):(0,u.jsxs)(Y,{children:[(0,u.jsxs)(G,{children:[(0,u.jsx)(B,{"aria-hidden":!0,children:(0,u.jsx)(l.In,{name:"sparkle",size:14})}),(0,u.jsx)(J,{children:n("ask.atlantis")})]}),i?(0,u.jsxs)(Q,{"aria-label":n("ask.thinking"),children:[(0,u.jsx)("span",{}),(0,u.jsx)("span",{}),(0,u.jsx)("span",{})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.mQ,{children:e.content}),(0,u.jsx)(_,{children:m(e.ts,n)}),(0,u.jsxs)(V,{className:"turn-actions",children:[(0,u.jsx)(l.K0,{title:n("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,u.jsx)(l.In,{name:"copy",size:13})}),(0,u.jsx)(l.K0,{title:n("ask.action.regenerate"),onClick:()=>{Qe("",{replay:!0})},children:(0,u.jsx)(l.In,{name:"refresh",size:13})})]})]})]})},t)}),Ke&&(0,u.jsx)(q,{children:(0,u.jsxs)(Y,{children:[(0,u.jsxs)(G,{children:[(0,u.jsx)(B,{"aria-hidden":!0,children:(0,u.jsx)(l.In,{name:"sparkle",size:14})}),(0,u.jsx)(J,{children:n("ask.atlantis")})]}),(0,u.jsx)(W,{children:Ke}),(0,u.jsx)(l.$n,{variant:"ghost",onClick:()=>{Qe("",{replay:!0})},children:n("ask.retry")})]})}),(0,u.jsx)("div",{ref:Je})]})}),(0,u.jsx)(X,{children:(0,u.jsxs)(Z,{children:[(0,u.jsxs)(ee,{focused:He,children:[(0,u.jsx)(te,{ref:Be,rows:1,placeholder:n("ask.placeholder"),value:Ne,onChange:e=>Fe(e.target.value),onKeyDown:Ve,onFocus:()=>Ye(!0),onBlur:()=>Ye(!1),disabled:Pe,"aria-label":n("ask.placeholder")}),Pe?(0,u.jsx)(ae,{type:"button","aria-label":n("ask.stop"),title:n("ask.stop"),onClick:_e,children:(0,u.jsx)(l.In,{name:"square",size:14})}):(0,u.jsx)(ne,{type:"button",ready:nt,"aria-label":n("ask.send"),title:n("ask.send"),disabled:!nt,onClick:()=>{Qe(Ne)},children:(0,u.jsx)(l.In,{name:"send",size:15})})]}),(0,u.jsxs)(ie,{children:[(0,u.jsxs)(se,{children:[(0,u.jsx)(l.ue,{children:"↵"})," ",n("ask.hint.send")]}),(0,u.jsxs)(se,{children:[(0,u.jsx)(l.ue,{children:"⇧↵"})," ",n("ask.hint.newline")]}),(0,u.jsxs)(se,{children:[(0,u.jsx)(l.ue,{children:"⌘N"})," ",n("ask.hint.newConv")]})]})]})})]})})}const me=document.getElementById("root");if(!me)throw new Error("Root element #root not found");(0,a.H)(me).render((0,u.jsx)(xe,{}))},58997(e,t,n){var a=n(48991);t.H=a.createRoot,a.hydrateRoot}}]);