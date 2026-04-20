"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([["5512"],{58997(e,t,n){var a=n(62727);t.createRoot=a.createRoot,a.hydrateRoot},13611(e,t,n){var a=n(65723),i=n(58997),s=n(37991),r=n(36859),o=n.n(r),l=n(72799),c=n(60246),d=n(2938),p=n(28170),h=n(20948);let u={256:"short",512:"medium",1024:"long",2048:"xlong"},g="ask:active-conversation",x="ask:tone",m="ask:language",f="ask:max-tokens";function w(e,t){return(0,p.aw)(new Date(e).toISOString(),t)}let y=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=(0,l.keyframes)`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,k=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,v=o().div`
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} 0;
`;function $({expanded:e,onNew:t,newLabel:n}){let{collapsed:i}=(0,c.cL)();return i?(0,a.jsx)(v,{children:(0,a.jsx)(d.K0,{title:n,onClick:t,children:(0,a.jsx)(d.In,{name:"plus",size:14})})}):(0,a.jsx)(a.Fragment,{children:e})}let j=o().div`
  padding: ${c.w4.spacing.sm};
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
  flex-shrink: 0;
`,T=o().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.xs} 0;
`,C=o().div`
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.sm} 4px;
  margin-top: 4px;
`,I=o().div`
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
`,A=o().div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.mainText};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
`,S=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,R=o().div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast};
`,M=o().div`
  padding: ${c.w4.spacing.lg} ${c.w4.spacing.sm};
  font-size: 12px;
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
`,z=o().div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${c.w4.spacing.xl} ${c.w4.spacing.md} ${c.w4.spacing.lg};
  position: relative;
  z-index: 1;
`,O=o().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.xl};
`,L=o().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${c.w4.spacing.xxl} 0 ${c.w4.spacing.xl};
  gap: ${c.w4.spacing.lg};
  animation: ${y} 0.3s ${c.w4.transitions.easing} both;
`,N=o().h1`
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
`,F=o().p`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,P=o().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${c.w4.spacing.sm};
  width: 100%;
  max-width: 600px;

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,U=o().button`
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
`,K=o().div`
  color: ${c.w4.colors.accent};
  opacity: 0.85;
`,q=o().div`
  font-size: 13.5px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  line-height: 1.3;
`,Y=o().div`
  font-size: 12px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.45;
`,G=o().div`
  display: flex;
  flex-direction: column;
  align-items: ${({user:e})=>e?"flex-end":"flex-start"};
  gap: 4px;
  animation: ${y} 0.25s ${c.w4.transitions.easing} both;

  /* Reveal action row on hover/focus — no component selectors, plain class */
  &:hover .turn-actions,
  &:focus-within .turn-actions {
    opacity: 1;
  }
`,H=o().div`
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
`,Q=o().div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${c.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.accent};
  flex-shrink: 0;
`,_=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,V=o().div`
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
    animation: ${b} 1.2s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.15s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
  }
`,W=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,X=o().div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast};
`,Z=o().div`
  font-size: 12.5px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.danger};
`,ee=o().div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md} ${c.w4.spacing.md};
  position: relative;
  z-index: 1;
`,et=o().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,en=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  background: ${c.w4.colors.surface};
  border: 1.5px solid ${({focused:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  border-radius: 28px;
  padding: 8px 8px 8px 14px;
  box-shadow: ${({focused:e})=>e?c.w4.elevation.md:"none"};
  transition:
    border-color ${c.w4.transitions.base},
    box-shadow ${c.w4.transitions.base};
`,ea=o().textarea`
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
`,ei=o().button`
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
`,es=o().button`
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
`,er=o().div`
  display: flex;
  gap: ${c.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,eo=o().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
`,el=o().div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${c.w4.spacing.md} ${c.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,ec=o().div`
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
`,ed=o().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,ep=o().div`
  font-size: 10.5px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,eh=o().div`
  & > div { width: 100%; display: flex; }
  & > div > button { width: 100%; justify-content: space-between; }
`,eu=o().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${c.w4.spacing.md};
  padding: ${c.w4.spacing.xl};
  text-align: center;
`,eg=o().div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${c.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.accent};
`,ex=o().div`
  font-size: 17px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,em=o().div`
  font-size: 13.5px;
  color: ${c.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,ef=["sparkle","code","book","message"],ew=document.getElementById("root");if(!ew)throw Error("Root element #root not found");(0,i.createRoot)(ew).render((0,a.jsx)(function({topBarRight:e}){let[t]=(0,p.Ym)(),n=(0,s.useMemo)(()=>(0,p.Nx)(t,h.A),[t]),[i,r]=(0,s.useState)(null),[o,l]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(0,c.hY)().then(e=>{r(e),l(!0)}).catch(()=>l(!0))},[]);let[y,b]=(0,s.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[v,ew]=(0,s.useState)(!1),ey=(0,s.useRef)(null);(0,s.useEffect)(()=>{Promise.all([(0,c.PL)(x),(0,c.PL)(m),(0,c.PL)(f)]).then(([e,t,n])=>{b({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>void 0)},[]);let eb=(0,s.useCallback)(async e=>{b({...y,...e}),void 0!==e.tone&&await (0,c.Is)(x,e.tone),void 0!==e.language&&await (0,c.Is)(m,e.language),void 0!==e.maxTokens&&await (0,c.Is)(f,String(e.maxTokens))},[y]);(0,s.useEffect)(()=>{if(!v)return;let e=e=>{let t=e.target;!t||ey.current?.contains(t)||t.closest?.('[role="menu"]')||ew(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[v]);let[ek,ev]=(0,s.useState)([]),[e$,ej]=(0,s.useState)(null),[eT,eC]=(0,s.useState)([]),[eI,eE]=(0,s.useState)(""),eA=(0,s.useRef)([]);(0,s.useEffect)(()=>{eA.current=eT},[eT]);let eS=(0,s.useCallback)(async()=>{let e=await (0,c.Iu)("ask");return ev(e),e},[]),eR=(0,c.fy)(),eM=(0,s.useRef)(null);function eD(e){try{let t=JSON.parse(e.content);eC(t.turns??[])}catch{eC([])}ej(e.id),eE(e.name),(0,c.Is)(g,e.id).catch(()=>void 0)}function ez(){eC([]),ej(null),eE(""),(0,c.Is)(g,"").catch(()=>void 0)}(0,s.useEffect)(()=>{(async()=>{let e=await eS(),t=eR.session,n=await (0,c.PL)(g),a=t??n,i=a?e.find(e=>e.id===a):null;i&&(eD(i),eM.current=t??null)})().catch(()=>void 0)},[]),(0,s.useEffect)(()=>{let e=eR.session;if(!e||eM.current===e)return;let t=ek.find(t=>t.id===e);t&&(eM.current=e,eD(t))},[eR.session,ek]);let eO=(0,s.useCallback)(async(e,t,a)=>{let i=JSON.stringify({turns:e}),s=a??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):n("ask.untitled"));if(t)await (0,c.mZ)(t,s,i);else{let e=await (0,c.KL)("ask",s,i);return ej(e),await (0,c.Is)(g,e),e}return t},[n]),eL=(0,s.useCallback)(async e=>{await (0,c.kd)(e),e===e$&&ez(),await eS()},[e$,eS]),[eN,eF]=(0,s.useState)(""),[eP,eU]=(0,s.useState)(!1),[eK,eq]=(0,s.useState)(null),[eY,eG]=(0,s.useState)(!1),eH=(0,s.useRef)(null),eB=(0,s.useRef)(null),eJ=(0,s.useRef)(null);(0,s.useLayoutEffect)(()=>{let e=eB.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[eN]),(0,s.useEffect)(()=>{eJ.current?.scrollIntoView({behavior:"smooth"})},[eT,eP]);let eQ=(0,s.useCallback)(async(e,a)=>{let s,r;if(!i||eP)return;if(a?.replay===!0){let e=eA.current.filter(e=>!("loading"in e)),t=-1;for(let n=e.length-1;n>=0;n--)if("user"===e[n].role){t=n;break}if(t<0)return;let n=e[t];if("user"!==n.role)return;s=n.content,r=e.slice(0,t+1)}else{if(!e.trim())return;s=e.trim(),eF("");let t={role:"user",content:s,ts:Date.now()};r=[...eA.current.filter(e=>!("loading"in e)),t]}eq(null),eC([...r,{role:"assistant",content:"",loading:!0,ts:Date.now()}]),eU(!0);let o=r.filter(e=>!("loading"in e)).slice(0,-1).map(e=>({role:e.role,content:e.content})).slice(-6),l="auto"===y.language?t:y.language;eH.current?.abort();let d=new AbortController;eH.current=d;try{var p,h;let e=await (0,c.Zf)(s,{key:i,system:(p=y.tone,h=y.language,`You are Atlantis, a personal-dashboard assistant.
Be ${"friendly"===p?"warm and approachable":"playful"===p?"playful, light-hearted and fun":"direct and concise"}. Answer in ${"pt"===("auto"===h?l:h)?"Portuguese":"English"}.
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
  • don't add \\n on the snippets, don't do breaking lines in the middle of sentences — the renderer handles all that.`),locale:l,signal:d.signal,history:o,maxTokens:y.maxTokens});if(d.signal.aborted)return;let t={role:"assistant",content:e,ts:Date.now()},a=[...r,t];eC(a);let u=await eO(a,e$);u&&u!==e$&&(ej(u),eE(a.find(e=>"user"===e.role)?s.slice(0,50):n("ask.untitled"))),await eS()}catch(e){if(d.signal.aborted)return;eq(e instanceof Error?e.message:String(e)),eC(r)}finally{d.signal.aborted||eU(!1)}},[i,eP,t,y,e$,eO,eS,n]),e_=(0,s.useCallback)(()=>{eH.current?.abort(),eU(!1),eC(e=>e.filter(e=>!("loading"in e)))},[]);(0,s.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),ez(),eB.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);let eV=(0,s.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey){e.preventDefault(),eQ(eN);return}"Escape"===e.key&&(eN?eF(""):e.currentTarget.blur())},[eN,eQ]),eW=(0,s.useMemo)(()=>{let e={today:[],yesterday:[],last7:[],older:[]};for(let t of ek)e[function(e){let t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}(t.savedAt)].push(t);return e},[ek]),eX={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},eZ=(0,a.jsx)($,{onNew:ez,newLabel:n("ask.sidebar.new"),expanded:(0,a.jsxs)(k,{children:[(0,a.jsx)(j,{children:(0,a.jsx)(d.$n,{variant:"primary",onClick:ez,style:{width:"100%",justifyContent:"center"},children:n("ask.sidebar.new")})}),(0,a.jsx)(T,{children:0===ek.length?(0,a.jsx)(M,{children:n("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{let t=eW[e];return 0===t.length?null:(0,a.jsxs)("div",{children:[(0,a.jsx)(C,{children:(0,a.jsx)(d.YZ,{children:n(eX[e])})}),t.map(e=>(0,a.jsxs)(I,{children:[(0,a.jsxs)(E,{active:e.id===e$,onClick:()=>eD(e),children:[(0,a.jsx)(A,{active:e.id===e$,children:e.name||n("ask.untitled")}),(0,a.jsx)(S,{children:(0,p.aw)(new Date(e.savedAt).toISOString(),n)})]}),(0,a.jsx)(R,{className:"conv-row-hover",children:(0,a.jsx)(d.K0,{title:n("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),eL(e.id)},children:(0,a.jsx)(d.In,{name:"close",size:12})})})]},e.id))]},e)})})]})});if(o&&!i)return(0,a.jsx)(c.PE,{title:n("ask.title"),sidebar:eZ,topBarRight:e,children:(0,a.jsxs)(eu,{children:[(0,a.jsx)(eg,{children:(0,a.jsx)(d.In,{name:"sparkle",size:24})}),(0,a.jsx)(ex,{children:n("ask.noKey.title")}),(0,a.jsx)(em,{children:n("ask.noKey.body")}),(0,a.jsx)(d.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:n("ask.noKey.cta")})]})});let e0=(0,a.jsxs)("div",{style:{position:"relative"},ref:ey,children:[(0,a.jsx)(d.K0,{title:n("ask.settings.title"),active:v,onClick:()=>ew(e=>!e),children:(0,a.jsx)(d.In,{name:"settings",size:16})}),v&&(0,a.jsxs)(ec,{children:[(0,a.jsxs)(ed,{children:[(0,a.jsx)(ep,{children:n("ask.settings.tone")}),(0,a.jsx)(eh,{children:(0,a.jsx)(d.ms,{align:"left",trigger:(0,a.jsx)(d.$n,{variant:"ghost",iconRight:(0,a.jsx)(d.In,{name:"chevron-down",size:12}),children:n(`ask.settings.tone.${y.tone}`)}),children:["friendly","direct","playful"].map(e=>(0,a.jsx)(d.tJ,{onClick:()=>void eb({tone:e}),children:n(`ask.settings.tone.${e}`)},e))})})]}),(0,a.jsxs)(ed,{children:[(0,a.jsx)(ep,{children:n("ask.settings.language")}),(0,a.jsx)(eh,{children:(0,a.jsx)(d.ms,{align:"left",trigger:(0,a.jsx)(d.$n,{variant:"ghost",iconRight:(0,a.jsx)(d.In,{name:"chevron-down",size:12}),children:n(`ask.settings.language.${y.language}`)}),children:["auto","pt","en"].map(e=>(0,a.jsx)(d.tJ,{onClick:()=>void eb({language:e}),children:n(`ask.settings.language.${e}`)},e))})})]}),(0,a.jsxs)(ed,{children:[(0,a.jsx)(ep,{children:n("ask.settings.maxTokens")}),(0,a.jsx)(eh,{children:(0,a.jsx)(d.ms,{align:"left",trigger:(0,a.jsx)(d.$n,{variant:"ghost",iconRight:(0,a.jsx)(d.In,{name:"chevron-down",size:12}),children:n(`ask.settings.maxTokens.${u[y.maxTokens]}`)}),children:[[256,"short"],[512,"medium"],[1024,"long"],[2048,"xlong"]].map(([e,t])=>(0,a.jsx)(d.tJ,{onClick:()=>void eb({maxTokens:e}),children:n(`ask.settings.maxTokens.${t}`)},e))})})]})]})]}),e4=0===eT.length&&!eP,e1=!!eN.trim()&&!eP&&!!i;return(0,a.jsx)(c.PE,{title:n("ask.title"),sidebar:eZ,topBarRight:e,children:(0,a.jsxs)(D,{children:[(0,a.jsx)(el,{children:e0}),(0,a.jsx)(z,{children:e4?(0,a.jsx)(O,{children:(0,a.jsxs)(L,{children:[(0,a.jsx)(N,{children:n("ask.welcome.title")}),(0,a.jsx)(F,{children:n("ask.welcome.kicker")}),(0,a.jsx)(P,{children:["1","2","3","4"].map((e,t)=>(0,a.jsxs)(U,{onClick:()=>{let t=n(`ask.suggestion.${e}`);eF(t),eB.current?.focus(),eQ(t)},children:[(0,a.jsx)(K,{children:(0,a.jsx)(d.In,{name:ef[t],size:18,"aria-hidden":!0})}),(0,a.jsx)(q,{children:n(`ask.suggestion.${e}.title`)}),(0,a.jsx)(Y,{children:n(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,a.jsxs)(O,{children:[eT.map((e,t)=>{let i="user"===e.role,s="loading"in e&&e.loading;return(0,a.jsx)(G,{user:i,children:i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(H,{children:e.content}),(0,a.jsx)(W,{children:w(e.ts,n)}),(0,a.jsx)(X,{className:"turn-actions",children:(0,a.jsx)(d.K0,{title:n("ask.action.edit"),onClick:()=>{},children:(0,a.jsx)(d.In,{name:"edit",size:13})})})]}):(0,a.jsxs)(B,{children:[(0,a.jsxs)(J,{children:[(0,a.jsx)(Q,{"aria-hidden":!0,children:(0,a.jsx)(d.In,{name:"sparkle",size:14})}),(0,a.jsx)(_,{children:n("ask.atlantis")})]}),s?(0,a.jsxs)(V,{"aria-label":n("ask.thinking"),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.mQ,{children:e.content}),(0,a.jsx)(W,{children:w(e.ts,n)}),(0,a.jsxs)(X,{className:"turn-actions",children:[(0,a.jsx)(d.K0,{title:n("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,a.jsx)(d.In,{name:"copy",size:13})}),(0,a.jsx)(d.K0,{title:n("ask.action.regenerate"),onClick:()=>{eQ("",{replay:!0})},children:(0,a.jsx)(d.In,{name:"refresh",size:13})})]})]})]})},t)}),eK&&(0,a.jsx)(G,{children:(0,a.jsxs)(B,{children:[(0,a.jsxs)(J,{children:[(0,a.jsx)(Q,{"aria-hidden":!0,children:(0,a.jsx)(d.In,{name:"sparkle",size:14})}),(0,a.jsx)(_,{children:n("ask.atlantis")})]}),(0,a.jsx)(Z,{children:eK}),(0,a.jsx)(d.$n,{variant:"ghost",onClick:()=>{eQ("",{replay:!0})},children:n("ask.retry")})]})}),(0,a.jsx)("div",{ref:eJ})]})}),(0,a.jsx)(ee,{children:(0,a.jsxs)(et,{children:[(0,a.jsxs)(en,{focused:eY,children:[(0,a.jsx)(ea,{ref:eB,rows:1,placeholder:n("ask.placeholder"),value:eN,onChange:e=>eF(e.target.value),onKeyDown:eV,onFocus:()=>eG(!0),onBlur:()=>eG(!1),disabled:eP,"aria-label":n("ask.placeholder")}),eP?(0,a.jsx)(es,{type:"button","aria-label":n("ask.stop"),title:n("ask.stop"),onClick:e_,children:(0,a.jsx)(d.In,{name:"square",size:14})}):(0,a.jsx)(ei,{type:"button",ready:e1,"aria-label":n("ask.send"),title:n("ask.send"),disabled:!e1,onClick:()=>void eQ(eN),children:(0,a.jsx)(d.In,{name:"send",size:15})})]}),(0,a.jsxs)(er,{children:[(0,a.jsxs)(eo,{children:[(0,a.jsx)(d.ue,{children:"↵"})," ",n("ask.hint.send")]}),(0,a.jsxs)(eo,{children:[(0,a.jsx)(d.ue,{children:"⇧↵"})," ",n("ask.hint.newline")]}),(0,a.jsxs)(eo,{children:[(0,a.jsx)(d.ue,{children:"⌘N"})," ",n("ask.hint.newConv")]})]})]})})]})})},{}))}}]);