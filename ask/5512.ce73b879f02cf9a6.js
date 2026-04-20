"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([["5512"],{58997(e,t,n){var a=n(62727);t.createRoot=a.createRoot,a.hydrateRoot},13611(e,t,n){var a=n(65723),i=n(58997),s=n(37991),r=n(36859),o=n.n(r),l=n(72799),c=n(23930),d=n(48294),p=n(2938),h=n(28170),u=n(20948);let g={256:"short",512:"medium",1024:"long",2048:"xlong"},x="ask:active-conversation",m="ask:tone",f="ask:language",w="ask:max-tokens";function y(e,t){return(0,h.aw)(new Date(e).toISOString(),t)}let b=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,k=(0,l.keyframes)`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,v=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,$=o().div`
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} 0;
`;function j({expanded:e,onNew:t,newLabel:n}){let{collapsed:i}=(0,c.cL)();return i?(0,a.jsx)($,{children:(0,a.jsx)(p.K0,{title:n,onClick:t,children:(0,a.jsx)(p.In,{name:"plus",size:14})})}):(0,a.jsx)(a.Fragment,{children:e})}let T=o().div`
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
`,E=o().div`
  position: relative;

  &:hover .conv-row-hover,
  &:focus-within .conv-row-hover {
    opacity: 1;
  }
`,S=o()("button",{shouldForwardProp:e=>"active"!==e})`
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
`,R=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,M=o().div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast};
`,D=o().div`
  padding: ${c.w4.spacing.lg} ${c.w4.spacing.sm};
  font-size: 12px;
  color: ${c.w4.colors.mainTextFaint};
  text-align: center;
  line-height: 1.5;
`,z=o().div`
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
`,O=o().div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${c.w4.spacing.xl} ${c.w4.spacing.md} ${c.w4.spacing.lg};
  position: relative;
  z-index: 1;
`,L=o().div`
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
  animation: ${b} 0.3s ${c.w4.transitions.easing} both;
`,F=o().h1`
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
`,P=o().p`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,U=o().div`
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
`,G=o().div`
  font-size: 13.5px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  line-height: 1.3;
`,H=o().div`
  font-size: 12px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.45;
`,Y=o().div`
  display: flex;
  flex-direction: column;
  align-items: ${({user:e})=>e?"flex-end":"flex-start"};
  gap: 4px;
  animation: ${b} 0.25s ${c.w4.transitions.easing} both;

  /* Reveal action row on hover/focus — no component selectors, plain class */
  &:hover .turn-actions,
  &:focus-within .turn-actions {
    opacity: 1;
  }
`,B=o().div`
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
`,J=o().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  max-width: 100%;
`,Q=o().div`
  display: flex;
  align-items: center;
  gap: 8px;
`,_=o().div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${c.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.accent};
  flex-shrink: 0;
`,V=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,W=o().div`
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
    animation: ${k} 1.2s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.15s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
  }
`,X=o().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,Z=o().div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast};
`,ee=o().div`
  font-size: 12.5px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.danger};
`,et=o().div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md} ${c.w4.spacing.md};
  position: relative;
  z-index: 1;
`,en=o().div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ea=o().div`
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
`,ei=o().textarea`
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
`,es=o().button`
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
`,er=o().button`
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
`,eo=o().div`
  display: flex;
  gap: ${c.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,el=o().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
`,ec=o().div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${c.w4.spacing.md} ${c.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,ed=o().div`
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
`,ep=o().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,eh=o().div`
  font-size: 10.5px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,eu=o().div`
  & > div { width: 100%; display: flex; }
  & > div > button { width: 100%; justify-content: space-between; }
`,eg=o().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${c.w4.spacing.md};
  padding: ${c.w4.spacing.xl};
  text-align: center;
`,ex=o().div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${c.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.accent};
`,em=o().div`
  font-size: 17px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,ef=o().div`
  font-size: 13.5px;
  color: ${c.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,ew=["sparkle","code","book","message"],ey=document.getElementById("root");if(!ey)throw Error("Root element #root not found");(0,i.createRoot)(ey).render((0,a.jsx)(function({topBarRight:e}){let[t]=(0,h.Ym)(),n=(0,s.useMemo)(()=>(0,h.Nx)(t,u.A),[t]),[i,r]=(0,s.useState)(null),[o,l]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(0,d.resolveGroqKey)().then(e=>{r(e),l(!0)}).catch(()=>l(!0))},[]);let[b,k]=(0,s.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[$,ey]=(0,s.useState)(!1),eb=(0,s.useRef)(null);(0,s.useEffect)(()=>{Promise.all([(0,c.PL)(m),(0,c.PL)(f),(0,c.PL)(w)]).then(([e,t,n])=>{k({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>void 0)},[]);let ek=(0,s.useCallback)(async e=>{k({...b,...e}),void 0!==e.tone&&await (0,c.Is)(m,e.tone),void 0!==e.language&&await (0,c.Is)(f,e.language),void 0!==e.maxTokens&&await (0,c.Is)(w,String(e.maxTokens))},[b]);(0,s.useEffect)(()=>{if(!$)return;let e=e=>{let t=e.target;!t||eb.current?.contains(t)||t.closest?.('[role="menu"]')||ey(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[$]);let[ev,e$]=(0,s.useState)([]),[ej,eT]=(0,s.useState)(null),[eC,eI]=(0,s.useState)([]),[eE,eS]=(0,s.useState)(""),eA=(0,s.useRef)([]);(0,s.useEffect)(()=>{eA.current=eC},[eC]);let eR=(0,s.useCallback)(async()=>{let e=await (0,c.Iu)("ask");return e$(e),e},[]),eM=(0,c.fy)(),eD=(0,s.useRef)(null);function ez(e){try{let t=JSON.parse(e.content);eI(t.turns??[])}catch{eI([])}eT(e.id),eS(e.name),(0,c.Is)(x,e.id).catch(()=>void 0)}function eO(){eI([]),eT(null),eS(""),(0,c.Is)(x,"").catch(()=>void 0)}(0,s.useEffect)(()=>{(async()=>{let e=await eR(),t=eM.session,n=await (0,c.PL)(x),a=t??n,i=a?e.find(e=>e.id===a):null;i&&(ez(i),eD.current=t??null)})().catch(()=>void 0)},[]),(0,s.useEffect)(()=>{let e=eM.session;if(!e||eD.current===e)return;let t=ev.find(t=>t.id===e);t&&(eD.current=e,ez(t))},[eM.session,ev]);let eL=(0,s.useCallback)(async(e,t,a)=>{let i=JSON.stringify({turns:e}),s=a??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):n("ask.untitled"));if(t)await (0,c.mZ)(t,s,i);else{let e=await (0,c.KL)("ask",s,i);return eT(e),await (0,c.Is)(x,e),e}return t},[n]),eN=(0,s.useCallback)(async e=>{await (0,c.kd)(e),e===ej&&eO(),await eR()},[ej,eR]),[eF,eP]=(0,s.useState)(""),[eU,eK]=(0,s.useState)(!1),[eq,eG]=(0,s.useState)(null),[eH,eY]=(0,s.useState)(!1),eB=(0,s.useRef)(null),eJ=(0,s.useRef)(null),eQ=(0,s.useRef)(null);(0,s.useLayoutEffect)(()=>{let e=eJ.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[eF]),(0,s.useEffect)(()=>{eQ.current?.scrollIntoView({behavior:"smooth"})},[eC,eU]);let e_=(0,s.useCallback)(async(e,a)=>{let s,r;if(!i||eU)return;if(a?.replay===!0){let e=eA.current.filter(e=>!("loading"in e)),t=-1;for(let n=e.length-1;n>=0;n--)if("user"===e[n].role){t=n;break}if(t<0)return;let n=e[t];if("user"!==n.role)return;s=n.content,r=e.slice(0,t+1)}else{if(!e.trim())return;s=e.trim(),eP("");let t={role:"user",content:s,ts:Date.now()};r=[...eA.current.filter(e=>!("loading"in e)),t]}eG(null);let o={role:"assistant",content:"",loading:!0,ts:Date.now()};eI([...r,o]),eK(!0);let l=r.filter(e=>!("loading"in e)).slice(0,-1).map(e=>({role:e.role,content:e.content})).slice(-6),c="auto"===b.language?t:b.language;eB.current?.abort();let p=new AbortController;eB.current=p;let h=Date.now();try{var u,g;let e=await (0,d.askGroqStream)(s,{key:i,system:(u=b.tone,g=b.language,`You are Atlantis, a personal-dashboard assistant.
Be ${"friendly"===u?"warm and approachable":"playful"===u?"playful, light-hearted and fun":"direct and concise"}. Answer in ${"pt"===("auto"===g?c:g)?"Portuguese":"English"}.
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
  • don't add \\n on the snippets, don't do breaking lines in the middle of sentences — the renderer handles all that.`),locale:c,signal:p.signal,history:l,maxTokens:b.maxTokens,onChunk:e=>{p.signal.aborted||eI([...r,{role:"assistant",content:e,ts:h}])}});if(p.signal.aborted)return;let t=[...r,{role:"assistant",content:e,ts:h}];eI(t);let a=await eL(t,ej);a&&a!==ej&&(eT(a),eS(t.find(e=>"user"===e.role)?s.slice(0,50):n("ask.untitled"))),await eR()}catch(e){if(p.signal.aborted)return;eG(e instanceof Error?e.message:String(e)),eI(r)}finally{p.signal.aborted||eK(!1)}},[i,eU,t,b,ej,eL,eR,n]),eV=(0,s.useCallback)(()=>{eB.current?.abort(),eK(!1),eI(e=>e.filter(e=>!("loading"in e)))},[]);(0,s.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),eO(),eJ.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);let eW=(0,s.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey){e.preventDefault(),e_(eF);return}"Escape"===e.key&&(eF?eP(""):e.currentTarget.blur())},[eF,e_]),eX=(0,s.useMemo)(()=>{let e={today:[],yesterday:[],last7:[],older:[]};for(let t of ev)e[function(e){let t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}(t.savedAt)].push(t);return e},[ev]),eZ={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},e0=(0,a.jsx)(j,{onNew:eO,newLabel:n("ask.sidebar.new"),expanded:(0,a.jsxs)(v,{children:[(0,a.jsx)(T,{children:(0,a.jsx)(p.$n,{variant:"primary",onClick:eO,style:{width:"100%",justifyContent:"center"},children:n("ask.sidebar.new")})}),(0,a.jsx)(C,{children:0===ev.length?(0,a.jsx)(D,{children:n("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{let t=eX[e];return 0===t.length?null:(0,a.jsxs)("div",{children:[(0,a.jsx)(I,{children:(0,a.jsx)(p.YZ,{children:n(eZ[e])})}),t.map(e=>(0,a.jsxs)(E,{children:[(0,a.jsxs)(S,{active:e.id===ej,onClick:()=>ez(e),children:[(0,a.jsx)(A,{active:e.id===ej,children:e.name||n("ask.untitled")}),(0,a.jsx)(R,{children:(0,h.aw)(new Date(e.savedAt).toISOString(),n)})]}),(0,a.jsx)(M,{className:"conv-row-hover",children:(0,a.jsx)(p.K0,{title:n("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),eN(e.id)},children:(0,a.jsx)(p.In,{name:"close",size:12})})})]},e.id))]},e)})})]})});if(o&&!i)return(0,a.jsx)(c.PE,{title:n("ask.title"),sidebar:e0,topBarRight:e,children:(0,a.jsxs)(eg,{children:[(0,a.jsx)(ex,{children:(0,a.jsx)(p.In,{name:"sparkle",size:24})}),(0,a.jsx)(em,{children:n("ask.noKey.title")}),(0,a.jsx)(ef,{children:n("ask.noKey.body")}),(0,a.jsx)(p.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:n("ask.noKey.cta")})]})});let e4=(0,a.jsxs)("div",{style:{position:"relative"},ref:eb,children:[(0,a.jsx)(p.K0,{title:n("ask.settings.title"),active:$,onClick:()=>ey(e=>!e),children:(0,a.jsx)(p.In,{name:"settings",size:16})}),$&&(0,a.jsxs)(ed,{children:[(0,a.jsxs)(ep,{children:[(0,a.jsx)(eh,{children:n("ask.settings.tone")}),(0,a.jsx)(eu,{children:(0,a.jsx)(p.ms,{align:"left",trigger:(0,a.jsx)(p.$n,{variant:"ghost",iconRight:(0,a.jsx)(p.In,{name:"chevron-down",size:12}),children:n(`ask.settings.tone.${b.tone}`)}),children:["friendly","direct","playful"].map(e=>(0,a.jsx)(p.tJ,{onClick:()=>void ek({tone:e}),children:n(`ask.settings.tone.${e}`)},e))})})]}),(0,a.jsxs)(ep,{children:[(0,a.jsx)(eh,{children:n("ask.settings.language")}),(0,a.jsx)(eu,{children:(0,a.jsx)(p.ms,{align:"left",trigger:(0,a.jsx)(p.$n,{variant:"ghost",iconRight:(0,a.jsx)(p.In,{name:"chevron-down",size:12}),children:n(`ask.settings.language.${b.language}`)}),children:["auto","pt","en"].map(e=>(0,a.jsx)(p.tJ,{onClick:()=>void ek({language:e}),children:n(`ask.settings.language.${e}`)},e))})})]}),(0,a.jsxs)(ep,{children:[(0,a.jsx)(eh,{children:n("ask.settings.maxTokens")}),(0,a.jsx)(eu,{children:(0,a.jsx)(p.ms,{align:"left",trigger:(0,a.jsx)(p.$n,{variant:"ghost",iconRight:(0,a.jsx)(p.In,{name:"chevron-down",size:12}),children:n(`ask.settings.maxTokens.${g[b.maxTokens]}`)}),children:[[256,"short"],[512,"medium"],[1024,"long"],[2048,"xlong"]].map(([e,t])=>(0,a.jsx)(p.tJ,{onClick:()=>void ek({maxTokens:e}),children:n(`ask.settings.maxTokens.${t}`)},e))})})]})]})]}),e1=0===eC.length&&!eU,e2=!!eF.trim()&&!eU&&!!i;return(0,a.jsx)(c.PE,{title:n("ask.title"),sidebar:e0,topBarRight:e,children:(0,a.jsxs)(z,{children:[(0,a.jsx)(ec,{children:e4}),(0,a.jsx)(O,{children:e1?(0,a.jsx)(L,{children:(0,a.jsxs)(N,{children:[(0,a.jsx)(F,{children:n("ask.welcome.title")}),(0,a.jsx)(P,{children:n("ask.welcome.kicker")}),(0,a.jsx)(U,{children:["1","2","3","4"].map((e,t)=>(0,a.jsxs)(K,{onClick:()=>{let t=n(`ask.suggestion.${e}`);eP(t),eJ.current?.focus(),e_(t)},children:[(0,a.jsx)(q,{children:(0,a.jsx)(p.In,{name:ew[t],size:18,"aria-hidden":!0})}),(0,a.jsx)(G,{children:n(`ask.suggestion.${e}.title`)}),(0,a.jsx)(H,{children:n(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,a.jsxs)(L,{children:[eC.map((e,t)=>{let i="user"===e.role,s="loading"in e&&e.loading;return(0,a.jsx)(Y,{user:i,children:i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(B,{children:e.content}),(0,a.jsx)(X,{children:y(e.ts,n)}),(0,a.jsx)(Z,{className:"turn-actions",children:(0,a.jsx)(p.K0,{title:n("ask.action.edit"),onClick:()=>{},children:(0,a.jsx)(p.In,{name:"edit",size:13})})})]}):(0,a.jsxs)(J,{children:[(0,a.jsxs)(Q,{children:[(0,a.jsx)(_,{"aria-hidden":!0,children:(0,a.jsx)(p.In,{name:"sparkle",size:14})}),(0,a.jsx)(V,{children:n("ask.atlantis")})]}),s?(0,a.jsxs)(W,{"aria-label":n("ask.thinking"),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.mQ,{children:e.content}),(0,a.jsx)(X,{children:y(e.ts,n)}),(0,a.jsxs)(Z,{className:"turn-actions",children:[(0,a.jsx)(p.K0,{title:n("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,a.jsx)(p.In,{name:"copy",size:13})}),(0,a.jsx)(p.K0,{title:n("ask.action.regenerate"),onClick:()=>{e_("",{replay:!0})},children:(0,a.jsx)(p.In,{name:"refresh",size:13})})]})]})]})},t)}),eq&&(0,a.jsx)(Y,{children:(0,a.jsxs)(J,{children:[(0,a.jsxs)(Q,{children:[(0,a.jsx)(_,{"aria-hidden":!0,children:(0,a.jsx)(p.In,{name:"sparkle",size:14})}),(0,a.jsx)(V,{children:n("ask.atlantis")})]}),(0,a.jsx)(ee,{children:eq}),(0,a.jsx)(p.$n,{variant:"ghost",onClick:()=>{e_("",{replay:!0})},children:n("ask.retry")})]})}),(0,a.jsx)("div",{ref:eQ})]})}),(0,a.jsx)(et,{children:(0,a.jsxs)(en,{children:[(0,a.jsxs)(ea,{focused:eH,children:[(0,a.jsx)(ei,{ref:eJ,rows:1,placeholder:n("ask.placeholder"),value:eF,onChange:e=>eP(e.target.value),onKeyDown:eW,onFocus:()=>eY(!0),onBlur:()=>eY(!1),disabled:eU,"aria-label":n("ask.placeholder")}),eU?(0,a.jsx)(er,{type:"button","aria-label":n("ask.stop"),title:n("ask.stop"),onClick:eV,children:(0,a.jsx)(p.In,{name:"square",size:14})}):(0,a.jsx)(es,{type:"button",ready:e2,"aria-label":n("ask.send"),title:n("ask.send"),disabled:!e2,onClick:()=>void e_(eF),children:(0,a.jsx)(p.In,{name:"send",size:15})})]}),(0,a.jsxs)(eo,{children:[(0,a.jsxs)(el,{children:[(0,a.jsx)(p.ue,{children:"↵"})," ",n("ask.hint.send")]}),(0,a.jsxs)(el,{children:[(0,a.jsx)(p.ue,{children:"⇧↵"})," ",n("ask.hint.newline")]}),(0,a.jsxs)(el,{children:[(0,a.jsx)(p.ue,{children:"⌘N"})," ",n("ask.hint.newConv")]})]})]})})]})})},{}))}}]);