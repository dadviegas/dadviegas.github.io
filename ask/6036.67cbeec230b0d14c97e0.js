"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([[6036],{46036(e,t,n){n.r(t),n.d(t,{default:()=>xe});var a=n(27359),i=n(53233),s=n(77207),o=n(26879),r=n(30005),l=n(30894),c=n(38887),d=n(65723);const u="ask:active-conversation",p="ask:tone",f="ask:language",x="ask:max-tokens";function h(e,t){return(0,l.aw)(new Date(e).toISOString(),t)}function g(e){const t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}const m=s.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=s.keyframes`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,y=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,k=i.default.div`
  padding: ${o.w4.spacing.sm};
  border-bottom: 1px solid ${o.w4.colors.borderSubtle};
  flex-shrink: 0;
`,b=i.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${o.w4.spacing.xs} 0;
`,v=i.default.div`
  padding: ${o.w4.spacing.sm} ${o.w4.spacing.sm} 4px;
  margin-top: 4px;
`,$=(0,i.default)("button",{shouldForwardProp:e=>"active"!==e})`
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
  position: relative;

  &:hover {
    background: ${({active:e})=>e?o.w4.colors.accentMuted:o.w4.colors.sidebarHover};
  }
  &:hover .conv-row-hover,
  &:focus-within .conv-row-hover {
    opacity: 1;
  }
  &:focus-visible {
    ${o.w4.focusRing}
  }
`,j=i.default.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?o.w4.colors.accent:o.w4.colors.mainText};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
`,T=i.default.div`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${o.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,z=i.default.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${o.w4.transitions.fast};
`,I=i.default.div`
  padding: ${o.w4.spacing.lg} ${o.w4.spacing.sm};
  font-size: 12px;
  color: ${o.w4.colors.mainTextFaint};
  text-align: center;
  line-height: 1.5;
`,C=i.default.div`
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
`,S=i.default.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${o.w4.spacing.xl} ${o.w4.spacing.md} ${o.w4.spacing.lg};
  position: relative;
  z-index: 1;
`,M=i.default.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.xl};
`,R=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${o.w4.spacing.xxl} 0 ${o.w4.spacing.xl};
  gap: ${o.w4.spacing.lg};
  animation: ${m} 0.3s ${o.w4.transitions.easing} both;
`,F=i.default.h1`
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
`,E=i.default.p`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${o.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,N=i.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${o.w4.spacing.sm};
  width: 100%;
  max-width: 600px;

  @media (max-width: ${o.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,A=i.default.button`
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
`,L=i.default.div`
  color: ${o.w4.colors.accent};
  opacity: 0.85;
`,Y=i.default.div`
  font-size: 13.5px;
  font-weight: 600;
  color: ${o.w4.colors.mainText};
  line-height: 1.3;
`,D=i.default.div`
  font-size: 12px;
  color: ${o.w4.colors.mainTextMuted};
  line-height: 1.45;
`,K=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: ${({user:e})=>e?"flex-end":"flex-start"};
  gap: 4px;
  animation: ${m} 0.25s ${o.w4.transitions.easing} both;

  /* Reveal action row on hover/focus — no component selectors, plain class */
  &:hover .turn-actions,
  &:focus-within .turn-actions {
    opacity: 1;
  }
`,P=i.default.div`
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
`,O=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${o.w4.spacing.sm};
  max-width: 100%;
`,B=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,U=i.default.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${o.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${o.w4.colors.accent};
  flex-shrink: 0;
`,Q=i.default.div`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${o.w4.colors.mainTextMuted};
`,q=i.default.div`
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
    animation: ${w} 1.2s ease-in-out infinite;

    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.3s; }
  }
`,G=i.default.div`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${o.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,H=i.default.div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${o.w4.transitions.fast};
`,Z=i.default.div`
  font-size: 12.5px;
  font-family: ${o.w4.typography.fontFamilyMono};
  color: ${o.w4.colors.danger};
`,_=i.default.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${o.w4.spacing.sm} ${o.w4.spacing.md} ${o.w4.spacing.md};
  position: relative;
  z-index: 1;
`,J=i.default.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,V=i.default.div`
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
`,W=i.default.textarea`
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
`,X=i.default.button`
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
`,ee=i.default.button`
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
`,te=i.default.div`
  display: flex;
  gap: ${o.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,ne=i.default.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${o.w4.colors.mainTextFaint};
`,ae=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${o.w4.spacing.md} ${o.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,ie=i.default.input`
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: ${o.w4.colors.mainText};
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  padding: 2px 0;
  transition: border-color ${o.w4.transitions.fast};
  font-family: ${o.w4.typography.fontFamily};

  &:focus {
    border-bottom-color: ${o.w4.colors.accent};
  }
  &::placeholder {
    color: ${o.w4.colors.mainTextFaint};
  }
`,se=i.default.div`
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
`,oe=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.sm};
`,re=i.default.div`
  font-size: 10.5px;
  font-family: ${o.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${o.w4.colors.mainTextMuted};
`,le=i.default.select`
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.md};
  color: ${o.w4.colors.mainText};
  font-family: ${o.w4.typography.fontFamily};
  font-size: 13px;
  padding: 7px 10px;
  outline: none;
  width: 100%;
  cursor: pointer;

  &:focus {
    border-color: ${o.w4.colors.accent};
  }
`,ce=i.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${o.w4.spacing.md};
  padding: ${o.w4.spacing.xl};
  text-align: center;
`,de=i.default.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${o.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${o.w4.colors.accent};
`,ue=i.default.div`
  font-size: 17px;
  font-weight: 600;
  color: ${o.w4.colors.mainText};
`,pe=i.default.div`
  font-size: 13.5px;
  color: ${o.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,fe=["sparkle","code","book","message"];function xe({topBarRight:e}){const[t]=(0,l.Ym)(),n=(0,a.useMemo)(()=>(0,l.Nx)(t,c.A),[t]),[i,s]=(0,a.useState)(null),[m,w]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(0,o.hY)().then(e=>{s(e),w(!0)}).catch(()=>w(!0))},[]);const[xe,he]=(0,a.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[ge,me]=(0,a.useState)(!1),we=(0,a.useRef)(null);(0,a.useEffect)(()=>{Promise.all([(0,o.PL)(p),(0,o.PL)(f),(0,o.PL)(x)]).then(([e,t,n])=>{he({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>{})},[]);const ye=(0,a.useCallback)(async e=>{const t={...xe,...e};he(t),void 0!==e.tone&&await(0,o.Is)(p,e.tone),void 0!==e.language&&await(0,o.Is)(f,e.language),void 0!==e.maxTokens&&await(0,o.Is)(x,String(e.maxTokens))},[xe]);(0,a.useEffect)(()=>{if(!ge)return;const e=e=>{we.current&&!we.current.contains(e.target)&&me(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[ge]);const[ke,be]=(0,a.useState)([]),[ve,$e]=(0,a.useState)(null),[je,Te]=(0,a.useState)([]),[ze,Ie]=(0,a.useState)(""),Ce=(0,a.useRef)([]);(0,a.useEffect)(()=>{Ce.current=je},[je]);const Se=(0,a.useCallback)(async()=>{const e=await(0,o.Iu)("ask");return be(e),e},[]);function Me(e){try{const t=JSON.parse(e.content);Te(t.turns??[])}catch{Te([])}$e(e.id),Ie(e.name),(0,o.Is)(u,e.id).catch(()=>{})}function Re(){Te([]),$e(null),Ie(""),(0,o.Is)(u,"").catch(()=>{})}(0,a.useEffect)(()=>{(async()=>{const e=await Se(),t=await(0,o.PL)(u),n=t?e.find(e=>e.id===t):null;n&&Me(n)})().catch(()=>{})},[]);const Fe=(0,a.useCallback)(async(e,t,a)=>{const i=JSON.stringify({turns:e}),s=a??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):n("ask.untitled"));if(!t){const e=await(0,o.KL)("ask",s,i);return $e(e),await(0,o.Is)(u,e),e}return await(0,o.mZ)(t,s,i),t},[n]),Ee=(0,a.useCallback)(async e=>{await(0,o.kd)(e),e===ve&&Re(),await Se()},[ve,Se]),[Ne,Ae]=(0,a.useState)(""),[Le,Ye]=(0,a.useState)(!1),[De,Ke]=(0,a.useState)(null),[Pe,Oe]=(0,a.useState)(!1),Be=(0,a.useRef)(null),Ue=(0,a.useRef)(null),Qe=(0,a.useRef)(null);(0,a.useLayoutEffect)(()=>{const e=Ue.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[Ne]),(0,a.useEffect)(()=>{Qe.current?.scrollIntoView({behavior:"smooth"})},[je,Le]);const qe=(0,a.useCallback)(async e=>{if(!i||!e.trim()||Le)return;const a=e.trim();Ae(""),Ke(null);const s={role:"user",content:a,ts:Date.now()},r={role:"assistant",content:"",loading:!0,ts:Date.now()},l=[...Ce.current,s,r];Te(l),Ye(!0);const c=Ce.current.filter(e=>!("loading"in e)).map(e=>({role:e.role,content:e.content})).slice(-6),d="auto"===xe.language?t:xe.language;Be.current?.abort();const u=new AbortController;Be.current=u;try{const e=await(0,o.Zf)(a,{key:i,system:(p=xe.tone,f=d,x=xe.language,["You are Atlantis, a personal-dashboard assistant.",`Be ${"friendly"===p?"warm and approachable":"playful"===p?"playful, light-hearted and fun":"direct and concise"}. Answer in ${"pt"===("auto"===x?f:x)?"Portuguese":"English"}.`,"Stay focused and reasonably concise. If you don't know, say so plainly.","","Your answers render as rich Markdown in the Atlantis UI. Use the full feature","set whenever it makes the answer clearer — don't default to plain prose when","you have structure or data to show:","","- Headings (## / ###), bold / italic, bullet and numbered lists.","- GFM tables and task lists (`- [ ]`, `- [x]`).","- Fenced code blocks with a language tag for syntax highlighting:","  ```ts / ```js / ```py / ```bash / ```json / ```sql etc.","- GitHub-style callouts for tips, warnings, and important notes. Use the","  blockquote form — do NOT put them inside a code fence:","    > [!NOTE] short aside","    > [!TIP] actionable hint","    > [!IMPORTANT] critical context","    > [!WARNING] gotcha or caveat","    > [!CAUTION] destructive / risky","- Diagrams, flowcharts, graphs, sequence/class/state/ER diagrams, pie charts,","  gantt charts, mindmaps. Use a ```mermaid fence — any valid Mermaid 11 syntax:","    ```mermaid","    graph LR; A[Sol] --\x3e|raio| B[Terra]","    ```","  The Atlantis renderer executes Mermaid in the browser and produces the SVG","  itself. You do NOT need an external image — NEVER emit `![alt](mermaid.png)`,","  `![graph](graph.png)`, or any other `![…](…)` image reference for a",'  diagram. The ```mermaid fence IS the diagram. Do not add an "Imagem:"',"  section or a caveat saying the image needs a Mermaid renderer — it renders","  automatically. A fenced ```mermaid block must contain ONLY valid Mermaid","  code (first line starts with `graph`, `flowchart`, `sequenceDiagram`,","  `pie`, `gantt`, `mindmap`, etc.) — never data tables, prose, or a file path.","- Quantitative data (bar / pie / line). Use a ```chart fence with the simple","  key: value DSL the Atlantis renderer expects:","    ```chart","    type: bar            # bar | pie | line","    title: Revenue 2025","    labels: [Q1, Q2, Q3, Q4]","    data: [12, 18, 9, 22]","    ```","  Prefer `chart` over a Mermaid pie when the user gives concrete numbers;","  prefer `mermaid` for relationships, flows, and conceptual diagrams.","","Rules of thumb:","- Use Mermaid ONLY for relationships, flows, hierarchies, and conceptual","  diagrams. Never use Mermaid to plot time-series or numeric trends — a","  long `graph TB` chain of numbered nodes is ALWAYS a `chart` block in",'  disguise. When the data is "value per year / month / category", pick',"  `chart`.","- If an instruction has multiple steps, use an ordered list or task list.","- Reach for tables when comparing 2+ things across shared attributes.","- Never emit an empty fenced block. If you're unsure, write prose instead."].join("\n")),locale:d,signal:u.signal,history:c,maxTokens:xe.maxTokens});if(u.signal.aborted)return;const t={role:"assistant",content:e,ts:Date.now()},s=[...Ce.current.filter(e=>!("loading"in e)),t];Te(s);const r=await Fe(s,ve);r&&r!==ve&&($e(r),Ie(s.find(e=>"user"===e.role)?a.slice(0,50):n("ask.untitled"))),await Se()}catch(e){if(u.signal.aborted)return;const t=e instanceof Error?e.message:String(e);Ke(t),Te(e=>e.filter(e=>!("loading"in e)))}finally{u.signal.aborted||Ye(!1)}var p,f,x},[i,Le,t,xe,ve,Fe,Se,n]),Ge=(0,a.useCallback)(()=>{Be.current?.abort(),Ye(!1),Te(e=>e.filter(e=>!("loading"in e)))},[]);(0,a.useEffect)(()=>{const e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),Re(),Ue.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);const He=(0,a.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey)return e.preventDefault(),void qe(Ne);"Escape"===e.key&&(Ne?Ae(""):e.currentTarget.blur())},[Ne,qe]),Ze=(0,a.useMemo)(()=>{const e={today:[],yesterday:[],last7:[],older:[]};for(const t of ke)e[g(t.savedAt)].push(t);return e},[ke]),_e={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},Je=(0,d.jsxs)(y,{children:[(0,d.jsx)(k,{children:(0,d.jsx)(r.$n,{variant:"primary",onClick:Re,style:{width:"100%",justifyContent:"center"},children:n("ask.sidebar.new")})}),(0,d.jsx)(b,{children:0===ke.length?(0,d.jsx)(I,{children:n("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{const t=Ze[e];return 0===t.length?null:(0,d.jsxs)("div",{children:[(0,d.jsx)(v,{children:(0,d.jsx)(r.YZ,{children:n(_e[e])})}),t.map(e=>(0,d.jsxs)($,{active:e.id===ve,onClick:()=>Me(e),children:[(0,d.jsx)(j,{active:e.id===ve,children:e.name||n("ask.untitled")}),(0,d.jsx)(T,{children:(0,l.aw)(new Date(e.savedAt).toISOString(),n)}),(0,d.jsx)(z,{className:"conv-row-hover",children:(0,d.jsx)(r.K0,{title:n("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),Ee(e.id)},children:(0,d.jsx)(r.In,{name:"close",size:12})})})]},e.id))]},e)})})]});if(m&&!i)return(0,d.jsx)(o.PE,{title:n("ask.title"),sidebar:Je,topBarRight:e,children:(0,d.jsxs)(ce,{children:[(0,d.jsx)(de,{children:(0,d.jsx)(r.In,{name:"sparkle",size:24})}),(0,d.jsx)(ue,{children:n("ask.noKey.title")}),(0,d.jsx)(pe,{children:n("ask.noKey.body")}),(0,d.jsx)(r.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:n("ask.noKey.cta")})]})});const Ve=(0,d.jsxs)("div",{style:{position:"relative"},ref:we,children:[(0,d.jsx)(r.K0,{title:n("ask.settings.title"),active:ge,onClick:()=>me(e=>!e),children:(0,d.jsx)(r.In,{name:"settings",size:16})}),ge&&(0,d.jsxs)(se,{children:[(0,d.jsxs)(oe,{children:[(0,d.jsx)(re,{children:n("ask.settings.tone")}),(0,d.jsxs)(le,{value:xe.tone,onChange:e=>{ye({tone:e.target.value})},children:[(0,d.jsx)("option",{value:"friendly",children:n("ask.settings.tone.friendly")}),(0,d.jsx)("option",{value:"direct",children:n("ask.settings.tone.direct")}),(0,d.jsx)("option",{value:"playful",children:n("ask.settings.tone.playful")})]})]}),(0,d.jsxs)(oe,{children:[(0,d.jsx)(re,{children:n("ask.settings.language")}),(0,d.jsxs)(le,{value:xe.language,onChange:e=>{ye({language:e.target.value})},children:[(0,d.jsx)("option",{value:"auto",children:n("ask.settings.language.auto")}),(0,d.jsx)("option",{value:"pt",children:n("ask.settings.language.pt")}),(0,d.jsx)("option",{value:"en",children:n("ask.settings.language.en")})]})]}),(0,d.jsxs)(oe,{children:[(0,d.jsx)(re,{children:n("ask.settings.maxTokens")}),(0,d.jsxs)(le,{value:xe.maxTokens,onChange:e=>{ye({maxTokens:parseInt(e.target.value,10)})},children:[(0,d.jsx)("option",{value:256,children:n("ask.settings.maxTokens.short")}),(0,d.jsx)("option",{value:512,children:n("ask.settings.maxTokens.medium")}),(0,d.jsx)("option",{value:1024,children:n("ask.settings.maxTokens.long")}),(0,d.jsx)("option",{value:2048,children:n("ask.settings.maxTokens.xlong")})]})]})]})]}),We=0===je.length&&!Le,Xe=!!Ne.trim()&&!Le&&!!i;return(0,d.jsx)(o.PE,{title:n("ask.title"),sidebar:Je,topBarRight:e,children:(0,d.jsxs)(C,{children:[(0,d.jsxs)(ae,{children:[(0,d.jsx)(ie,{value:ze,placeholder:n("ask.untitled"),onChange:e=>Ie(e.target.value),onBlur:async()=>{if(ve&&ze.trim()){const e=JSON.stringify({turns:Ce.current});await(0,o.mZ)(ve,ze.trim(),e),await Se()}}}),Ve]}),(0,d.jsx)(S,{children:We?(0,d.jsx)(M,{children:(0,d.jsxs)(R,{children:[(0,d.jsx)(F,{children:n("ask.welcome.title")}),(0,d.jsx)(E,{children:n("ask.welcome.kicker")}),(0,d.jsx)(N,{children:["1","2","3","4"].map((e,t)=>(0,d.jsxs)(A,{onClick:()=>{const t=n(`ask.suggestion.${e}`);Ae(t),Ue.current?.focus(),qe(t)},children:[(0,d.jsx)(L,{children:(0,d.jsx)(r.In,{name:fe[t],size:18,"aria-hidden":!0})}),(0,d.jsx)(Y,{children:n(`ask.suggestion.${e}.title`)}),(0,d.jsx)(D,{children:n(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,d.jsxs)(M,{children:[je.map((e,t)=>{const a="user"===e.role,i="loading"in e&&e.loading;return(0,d.jsx)(K,{user:a,children:a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(P,{children:e.content}),(0,d.jsx)(G,{children:h(e.ts,n)}),(0,d.jsx)(H,{className:"turn-actions",children:(0,d.jsx)(r.K0,{title:n("ask.action.edit"),onClick:()=>{},children:(0,d.jsx)(r.In,{name:"edit",size:13})})})]}):(0,d.jsxs)(O,{children:[(0,d.jsxs)(B,{children:[(0,d.jsx)(U,{"aria-hidden":!0,children:(0,d.jsx)(r.In,{name:"sparkle",size:14})}),(0,d.jsx)(Q,{children:n("ask.atlantis")})]}),i?(0,d.jsxs)(q,{"aria-label":n("ask.thinking"),children:[(0,d.jsx)("span",{}),(0,d.jsx)("span",{}),(0,d.jsx)("span",{})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.mQ,{children:e.content}),(0,d.jsx)(G,{children:h(e.ts,n)}),(0,d.jsxs)(H,{className:"turn-actions",children:[(0,d.jsx)(r.K0,{title:n("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,d.jsx)(r.In,{name:"copy",size:13})}),(0,d.jsx)(r.K0,{title:n("ask.action.regenerate"),onClick:()=>{const e=Ce.current.filter(e=>"user"===e.role).pop();e&&"user"===e.role&&qe(e.content)},children:(0,d.jsx)(r.In,{name:"refresh",size:13})})]})]})]})},t)}),De&&(0,d.jsx)(K,{children:(0,d.jsxs)(O,{children:[(0,d.jsxs)(B,{children:[(0,d.jsx)(U,{"aria-hidden":!0,children:(0,d.jsx)(r.In,{name:"sparkle",size:14})}),(0,d.jsx)(Q,{children:n("ask.atlantis")})]}),(0,d.jsx)(Z,{children:De}),(0,d.jsx)(r.$n,{variant:"ghost",onClick:()=>{const e=Ce.current.filter(e=>"user"===e.role).pop();e&&"user"===e.role&&qe(e.content)},children:n("ask.retry")})]})}),(0,d.jsx)("div",{ref:Qe})]})}),(0,d.jsx)(_,{children:(0,d.jsxs)(J,{children:[(0,d.jsxs)(V,{focused:Pe,children:[(0,d.jsx)(W,{ref:Ue,rows:1,placeholder:n("ask.placeholder"),value:Ne,onChange:e=>Ae(e.target.value),onKeyDown:He,onFocus:()=>Oe(!0),onBlur:()=>Oe(!1),disabled:Le,"aria-label":n("ask.placeholder")}),Le?(0,d.jsx)(ee,{type:"button","aria-label":n("ask.stop"),title:n("ask.stop"),onClick:Ge,children:(0,d.jsx)(r.In,{name:"square",size:14})}):(0,d.jsx)(X,{type:"button",ready:Xe,"aria-label":n("ask.send"),title:n("ask.send"),disabled:!Xe,onClick:()=>{qe(Ne)},children:(0,d.jsx)(r.In,{name:"send",size:15})})]}),(0,d.jsxs)(te,{children:[(0,d.jsxs)(ne,{children:[(0,d.jsx)(r.ue,{children:"↵"})," ",n("ask.hint.send")]}),(0,d.jsxs)(ne,{children:[(0,d.jsx)(r.ue,{children:"⇧↵"})," ",n("ask.hint.newline")]}),(0,d.jsxs)(ne,{children:[(0,d.jsx)(r.ue,{children:"⌘N"})," ",n("ask.hint.newConv")]})]})]})})]})})}}}]);
//# sourceMappingURL=6036.67cbeec230b0d14c97e0.js.map