"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([["6362"],{73935(e,t,n){n.r(t),n.d(t,{default:()=>ef});var a=n(65723),i=n(37991),s=n(36859),r=n.n(s),o=n(72799),l=n(61798),c=n(2938),d=n(28170),p=n(20948);let h={256:"short",512:"medium",1024:"long",2048:"xlong"},u="ask:active-conversation",g="ask:tone",x="ask:language",m="ask:max-tokens";function f(e,t){return(0,d.aw)(new Date(e).toISOString(),t)}let w=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=(0,o.keyframes)`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,b=r().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,k=r().div`
  display: flex;
  justify-content: center;
  padding: ${l.w4.spacing.sm} 0;
`;function v({expanded:e,onNew:t,newLabel:n}){let{collapsed:i}=(0,l.cL)();return i?(0,a.jsx)(k,{children:(0,a.jsx)(c.K0,{title:n,onClick:t,children:(0,a.jsx)(c.In,{name:"plus",size:14})})}):(0,a.jsx)(a.Fragment,{children:e})}let $=r().div`
  padding: ${l.w4.spacing.sm};
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
  flex-shrink: 0;
`,j=r().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.xs} 0;
`,T=r().div`
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.sm} 4px;
  margin-top: 4px;
`,C=r().div`
  position: relative;

  &:hover .conv-row-hover,
  &:focus-within .conv-row-hover {
    opacity: 1;
  }
`,I=r()("button",{shouldForwardProp:e=>"active"!==e})`
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
`,A=r().div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
`,E=r().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,S=r().div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
`,R=r().div`
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.sm};
  font-size: 12px;
  color: ${l.w4.colors.mainTextFaint};
  text-align: center;
  line-height: 1.5;
`,M=r().div`
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
`,z=r().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
`,O=r().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${l.w4.spacing.xxl} 0 ${l.w4.spacing.xl};
  gap: ${l.w4.spacing.lg};
  animation: ${w} 0.3s ${l.w4.transitions.easing} both;
`,L=r().h1`
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
`,N=r().p`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,F=r().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  width: 100%;
  max-width: 600px;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,P=r().button`
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
`,U=r().div`
  color: ${l.w4.colors.accent};
  opacity: 0.85;
`,K=r().div`
  font-size: 13.5px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  line-height: 1.3;
`,q=r().div`
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.45;
`,Y=r().div`
  display: flex;
  flex-direction: column;
  align-items: ${({user:e})=>e?"flex-end":"flex-start"};
  gap: 4px;
  animation: ${w} 0.25s ${l.w4.transitions.easing} both;

  /* Reveal action row on hover/focus — no component selectors, plain class */
  &:hover .turn-actions,
  &:focus-within .turn-actions {
    opacity: 1;
  }
`,G=r().div`
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
`,H=r().div`
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
`,Q=r().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,_=r().div`
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
    animation: ${y} 1.2s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.15s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
  }
`,V=r().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,W=r().div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
`,X=r().div`
  font-size: 12.5px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.danger};
`,Z=r().div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md} ${l.w4.spacing.md};
  position: relative;
  z-index: 1;
`,ee=r().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,et=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1.5px solid ${({focused:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: 28px;
  padding: 8px 8px 8px 14px;
  box-shadow: ${({focused:e})=>e?l.w4.elevation.md:"none"};
  transition:
    border-color ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base};
`,en=r().textarea`
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
`,ea=r().button`
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
`,ei=r().button`
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
`,es=r().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,er=r().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
`,eo=r().div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,el=r().div`
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
`,ec=r().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,ed=r().div`
  font-size: 10.5px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,ep=r().div`
  & > div { width: 100%; display: flex; }
  & > div > button { width: 100%; justify-content: space-between; }
`,eh=r().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.xl};
  text-align: center;
`,eu=r().div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l.w4.colors.accent};
`,eg=r().div`
  font-size: 17px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,ex=r().div`
  font-size: 13.5px;
  color: ${l.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,em=["sparkle","code","book","message"];function ef({topBarRight:e}){let[t]=(0,d.Ym)(),n=(0,i.useMemo)(()=>(0,d.Nx)(t,p.A),[t]),[s,r]=(0,i.useState)(null),[o,w]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(0,l.hY)().then(e=>{r(e),w(!0)}).catch(()=>w(!0))},[]);let[y,k]=(0,i.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[ew,ey]=(0,i.useState)(!1),eb=(0,i.useRef)(null);(0,i.useEffect)(()=>{Promise.all([(0,l.PL)(g),(0,l.PL)(x),(0,l.PL)(m)]).then(([e,t,n])=>{k({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>void 0)},[]);let ek=(0,i.useCallback)(async e=>{k({...y,...e}),void 0!==e.tone&&await (0,l.Is)(g,e.tone),void 0!==e.language&&await (0,l.Is)(x,e.language),void 0!==e.maxTokens&&await (0,l.Is)(m,String(e.maxTokens))},[y]);(0,i.useEffect)(()=>{if(!ew)return;let e=e=>{let t=e.target;!t||eb.current?.contains(t)||t.closest?.('[role="menu"]')||ey(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[ew]);let[ev,e$]=(0,i.useState)([]),[ej,eT]=(0,i.useState)(null),[eC,eI]=(0,i.useState)([]),[eA,eE]=(0,i.useState)(""),eS=(0,i.useRef)([]);(0,i.useEffect)(()=>{eS.current=eC},[eC]);let eR=(0,i.useCallback)(async()=>{let e=await (0,l.Iu)("ask");return e$(e),e},[]),eM=(0,l.fy)(),eD=(0,i.useRef)(null);function ez(e){try{let t=JSON.parse(e.content);eI(t.turns??[])}catch{eI([])}eT(e.id),eE(e.name),(0,l.Is)(u,e.id).catch(()=>void 0)}function eO(){eI([]),eT(null),eE(""),(0,l.Is)(u,"").catch(()=>void 0)}(0,i.useEffect)(()=>{(async()=>{let e=await eR(),t=eM.session,n=await (0,l.PL)(u),a=t??n,i=a?e.find(e=>e.id===a):null;i&&(ez(i),eD.current=t??null)})().catch(()=>void 0)},[]),(0,i.useEffect)(()=>{let e=eM.session;if(!e||eD.current===e)return;let t=ev.find(t=>t.id===e);t&&(eD.current=e,ez(t))},[eM.session,ev]);let eL=(0,i.useCallback)(async(e,t,a)=>{let i=JSON.stringify({turns:e}),s=a??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):n("ask.untitled"));if(t)await (0,l.mZ)(t,s,i);else{let e=await (0,l.KL)("ask",s,i);return eT(e),await (0,l.Is)(u,e),e}return t},[n]),eN=(0,i.useCallback)(async e=>{await (0,l.kd)(e),e===ej&&eO(),await eR()},[ej,eR]),[eF,eP]=(0,i.useState)(""),[eU,eK]=(0,i.useState)(!1),[eq,eY]=(0,i.useState)(null),[eG,eH]=(0,i.useState)(!1),eB=(0,i.useRef)(null),eJ=(0,i.useRef)(null),eQ=(0,i.useRef)(null);(0,i.useLayoutEffect)(()=>{let e=eJ.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[eF]),(0,i.useEffect)(()=>{eQ.current?.scrollIntoView({behavior:"smooth"})},[eC,eU]);let e_=(0,i.useCallback)(async(e,a)=>{let i,r;if(!s||eU)return;if(a?.replay===!0){let e=eS.current.filter(e=>!("loading"in e)),t=-1;for(let n=e.length-1;n>=0;n--)if("user"===e[n].role){t=n;break}if(t<0)return;let n=e[t];if("user"!==n.role)return;i=n.content,r=e.slice(0,t+1)}else{if(!e.trim())return;i=e.trim(),eP("");let t={role:"user",content:i,ts:Date.now()};r=[...eS.current.filter(e=>!("loading"in e)),t]}eY(null),eI([...r,{role:"assistant",content:"",loading:!0,ts:Date.now()}]),eK(!0);let o=r.filter(e=>!("loading"in e)).slice(0,-1).map(e=>({role:e.role,content:e.content})).slice(-6),c="auto"===y.language?t:y.language;eB.current?.abort();let d=new AbortController;eB.current=d;try{var p,h;let e=await (0,l.Zf)(i,{key:s,system:(p=y.tone,h=y.language,`You are Atlantis, a personal-dashboard assistant.
Be ${"friendly"===p?"warm and approachable":"playful"===p?"playful, light-hearted and fun":"direct and concise"}. Answer in ${"pt"===("auto"===h?c:h)?"Portuguese":"English"}.
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
  • don't add \\n on the snippets, don't do breaking lines in the middle of sentences — the renderer handles all that.`),locale:c,signal:d.signal,history:o,maxTokens:y.maxTokens});if(d.signal.aborted)return;let t={role:"assistant",content:e,ts:Date.now()},a=[...r,t];eI(a);let u=await eL(a,ej);u&&u!==ej&&(eT(u),eE(a.find(e=>"user"===e.role)?i.slice(0,50):n("ask.untitled"))),await eR()}catch(e){if(d.signal.aborted)return;eY(e instanceof Error?e.message:String(e)),eI(r)}finally{d.signal.aborted||eK(!1)}},[s,eU,t,y,ej,eL,eR,n]),eV=(0,i.useCallback)(()=>{eB.current?.abort(),eK(!1),eI(e=>e.filter(e=>!("loading"in e)))},[]);(0,i.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),eO(),eJ.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);let eW=(0,i.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey){e.preventDefault(),e_(eF);return}"Escape"===e.key&&(eF?eP(""):e.currentTarget.blur())},[eF,e_]),eX=(0,i.useMemo)(()=>{let e={today:[],yesterday:[],last7:[],older:[]};for(let t of ev)e[function(e){let t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}(t.savedAt)].push(t);return e},[ev]),eZ={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},e0=(0,a.jsx)(v,{onNew:eO,newLabel:n("ask.sidebar.new"),expanded:(0,a.jsxs)(b,{children:[(0,a.jsx)($,{children:(0,a.jsx)(c.$n,{variant:"primary",onClick:eO,style:{width:"100%",justifyContent:"center"},children:n("ask.sidebar.new")})}),(0,a.jsx)(j,{children:0===ev.length?(0,a.jsx)(R,{children:n("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{let t=eX[e];return 0===t.length?null:(0,a.jsxs)("div",{children:[(0,a.jsx)(T,{children:(0,a.jsx)(c.YZ,{children:n(eZ[e])})}),t.map(e=>(0,a.jsxs)(C,{children:[(0,a.jsxs)(I,{active:e.id===ej,onClick:()=>ez(e),children:[(0,a.jsx)(A,{active:e.id===ej,children:e.name||n("ask.untitled")}),(0,a.jsx)(E,{children:(0,d.aw)(new Date(e.savedAt).toISOString(),n)})]}),(0,a.jsx)(S,{className:"conv-row-hover",children:(0,a.jsx)(c.K0,{title:n("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),eN(e.id)},children:(0,a.jsx)(c.In,{name:"close",size:12})})})]},e.id))]},e)})})]})});if(o&&!s)return(0,a.jsx)(l.PE,{title:n("ask.title"),sidebar:e0,topBarRight:e,children:(0,a.jsxs)(eh,{children:[(0,a.jsx)(eu,{children:(0,a.jsx)(c.In,{name:"sparkle",size:24})}),(0,a.jsx)(eg,{children:n("ask.noKey.title")}),(0,a.jsx)(ex,{children:n("ask.noKey.body")}),(0,a.jsx)(c.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:n("ask.noKey.cta")})]})});let e4=(0,a.jsxs)("div",{style:{position:"relative"},ref:eb,children:[(0,a.jsx)(c.K0,{title:n("ask.settings.title"),active:ew,onClick:()=>ey(e=>!e),children:(0,a.jsx)(c.In,{name:"settings",size:16})}),ew&&(0,a.jsxs)(el,{children:[(0,a.jsxs)(ec,{children:[(0,a.jsx)(ed,{children:n("ask.settings.tone")}),(0,a.jsx)(ep,{children:(0,a.jsx)(c.ms,{align:"left",trigger:(0,a.jsx)(c.$n,{variant:"ghost",iconRight:(0,a.jsx)(c.In,{name:"chevron-down",size:12}),children:n(`ask.settings.tone.${y.tone}`)}),children:["friendly","direct","playful"].map(e=>(0,a.jsx)(c.tJ,{onClick:()=>void ek({tone:e}),children:n(`ask.settings.tone.${e}`)},e))})})]}),(0,a.jsxs)(ec,{children:[(0,a.jsx)(ed,{children:n("ask.settings.language")}),(0,a.jsx)(ep,{children:(0,a.jsx)(c.ms,{align:"left",trigger:(0,a.jsx)(c.$n,{variant:"ghost",iconRight:(0,a.jsx)(c.In,{name:"chevron-down",size:12}),children:n(`ask.settings.language.${y.language}`)}),children:["auto","pt","en"].map(e=>(0,a.jsx)(c.tJ,{onClick:()=>void ek({language:e}),children:n(`ask.settings.language.${e}`)},e))})})]}),(0,a.jsxs)(ec,{children:[(0,a.jsx)(ed,{children:n("ask.settings.maxTokens")}),(0,a.jsx)(ep,{children:(0,a.jsx)(c.ms,{align:"left",trigger:(0,a.jsx)(c.$n,{variant:"ghost",iconRight:(0,a.jsx)(c.In,{name:"chevron-down",size:12}),children:n(`ask.settings.maxTokens.${h[y.maxTokens]}`)}),children:[[256,"short"],[512,"medium"],[1024,"long"],[2048,"xlong"]].map(([e,t])=>(0,a.jsx)(c.tJ,{onClick:()=>void ek({maxTokens:e}),children:n(`ask.settings.maxTokens.${t}`)},e))})})]})]})]}),e1=0===eC.length&&!eU,e2=!!eF.trim()&&!eU&&!!s;return(0,a.jsx)(l.PE,{title:n("ask.title"),sidebar:e0,topBarRight:e,children:(0,a.jsxs)(M,{children:[(0,a.jsx)(eo,{children:e4}),(0,a.jsx)(D,{children:e1?(0,a.jsx)(z,{children:(0,a.jsxs)(O,{children:[(0,a.jsx)(L,{children:n("ask.welcome.title")}),(0,a.jsx)(N,{children:n("ask.welcome.kicker")}),(0,a.jsx)(F,{children:["1","2","3","4"].map((e,t)=>(0,a.jsxs)(P,{onClick:()=>{let t=n(`ask.suggestion.${e}`);eP(t),eJ.current?.focus(),e_(t)},children:[(0,a.jsx)(U,{children:(0,a.jsx)(c.In,{name:em[t],size:18,"aria-hidden":!0})}),(0,a.jsx)(K,{children:n(`ask.suggestion.${e}.title`)}),(0,a.jsx)(q,{children:n(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,a.jsxs)(z,{children:[eC.map((e,t)=>{let i="user"===e.role,s="loading"in e&&e.loading;return(0,a.jsx)(Y,{user:i,children:i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{children:e.content}),(0,a.jsx)(V,{children:f(e.ts,n)}),(0,a.jsx)(W,{className:"turn-actions",children:(0,a.jsx)(c.K0,{title:n("ask.action.edit"),onClick:()=>{},children:(0,a.jsx)(c.In,{name:"edit",size:13})})})]}):(0,a.jsxs)(H,{children:[(0,a.jsxs)(B,{children:[(0,a.jsx)(J,{"aria-hidden":!0,children:(0,a.jsx)(c.In,{name:"sparkle",size:14})}),(0,a.jsx)(Q,{children:n("ask.atlantis")})]}),s?(0,a.jsxs)(_,{"aria-label":n("ask.thinking"),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.mQ,{children:e.content}),(0,a.jsx)(V,{children:f(e.ts,n)}),(0,a.jsxs)(W,{className:"turn-actions",children:[(0,a.jsx)(c.K0,{title:n("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,a.jsx)(c.In,{name:"copy",size:13})}),(0,a.jsx)(c.K0,{title:n("ask.action.regenerate"),onClick:()=>{e_("",{replay:!0})},children:(0,a.jsx)(c.In,{name:"refresh",size:13})})]})]})]})},t)}),eq&&(0,a.jsx)(Y,{children:(0,a.jsxs)(H,{children:[(0,a.jsxs)(B,{children:[(0,a.jsx)(J,{"aria-hidden":!0,children:(0,a.jsx)(c.In,{name:"sparkle",size:14})}),(0,a.jsx)(Q,{children:n("ask.atlantis")})]}),(0,a.jsx)(X,{children:eq}),(0,a.jsx)(c.$n,{variant:"ghost",onClick:()=>{e_("",{replay:!0})},children:n("ask.retry")})]})}),(0,a.jsx)("div",{ref:eQ})]})}),(0,a.jsx)(Z,{children:(0,a.jsxs)(ee,{children:[(0,a.jsxs)(et,{focused:eG,children:[(0,a.jsx)(en,{ref:eJ,rows:1,placeholder:n("ask.placeholder"),value:eF,onChange:e=>eP(e.target.value),onKeyDown:eW,onFocus:()=>eH(!0),onBlur:()=>eH(!1),disabled:eU,"aria-label":n("ask.placeholder")}),eU?(0,a.jsx)(ei,{type:"button","aria-label":n("ask.stop"),title:n("ask.stop"),onClick:eV,children:(0,a.jsx)(c.In,{name:"square",size:14})}):(0,a.jsx)(ea,{type:"button",ready:e2,"aria-label":n("ask.send"),title:n("ask.send"),disabled:!e2,onClick:()=>void e_(eF),children:(0,a.jsx)(c.In,{name:"send",size:15})})]}),(0,a.jsxs)(es,{children:[(0,a.jsxs)(er,{children:[(0,a.jsx)(c.ue,{children:"↵"})," ",n("ask.hint.send")]}),(0,a.jsxs)(er,{children:[(0,a.jsx)(c.ue,{children:"⇧↵"})," ",n("ask.hint.newline")]}),(0,a.jsxs)(er,{children:[(0,a.jsx)(c.ue,{children:"⌘N"})," ",n("ask.hint.newConv")]})]})]})})]})})}}}]);