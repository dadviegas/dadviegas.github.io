"use strict";(self.webpackChunk_atlantis_ask=self.webpackChunk_atlantis_ask||[]).push([[188],{20188(e,t,n){var a=n(58997),i=n(27359),s=n(53233),o=n(77207),r=n(26879),l=n(30005),c=n(30894),d=n(38887),u=n(65723);const p="ask:active-conversation",f="ask:tone",x="ask:language",h="ask:max-tokens";function g(e,t){return(0,c.aw)(new Date(e).toISOString(),t)}function m(e){const t=(Date.now()-e)/864e5;return t<1?"today":t<2?"yesterday":t<7?"last7":"older"}const w=o.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=o.keyframes`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40%           { opacity: 1;    transform: scale(1); }
`,k=s.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
`,b=s.default.div`
  padding: ${r.w4.spacing.sm};
  border-bottom: 1px solid ${r.w4.colors.borderSubtle};
  flex-shrink: 0;
`,v=s.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${r.w4.spacing.xs} 0;
`,$=s.default.div`
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.sm} 4px;
  margin-top: 4px;
`,j=(0,s.default)("button",{shouldForwardProp:e=>"active"!==e})`
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
  position: relative;

  &:hover {
    background: ${({active:e})=>e?r.w4.colors.accentMuted:r.w4.colors.sidebarHover};
  }
  &:hover .conv-row-hover,
  &:focus-within .conv-row-hover {
    opacity: 1;
  }
  &:focus-visible {
    ${r.w4.focusRing}
  }
`,T=s.default.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({active:e})=>e?r.w4.colors.accent:r.w4.colors.mainText};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
`,z=s.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${r.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
`,I=s.default.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity ${r.w4.transitions.fast};
`,C=s.default.div`
  padding: ${r.w4.spacing.lg} ${r.w4.spacing.sm};
  font-size: 12px;
  color: ${r.w4.colors.mainTextFaint};
  text-align: center;
  line-height: 1.5;
`,S=s.default.div`
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
`,M=s.default.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${r.w4.spacing.xl} ${r.w4.spacing.md} ${r.w4.spacing.lg};
  position: relative;
  z-index: 1;
`,R=s.default.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xl};
`,E=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${r.w4.spacing.xxl} 0 ${r.w4.spacing.xl};
  gap: ${r.w4.spacing.lg};
  animation: ${w} 0.3s ${r.w4.transitions.easing} both;
`,F=s.default.h1`
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
`,N=s.default.p`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.03em;
  margin: 0;
`,A=s.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${r.w4.spacing.sm};
  width: 100%;
  max-width: 600px;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,L=s.default.button`
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
`,Y=s.default.div`
  color: ${r.w4.colors.accent};
  opacity: 0.85;
`,D=s.default.div`
  font-size: 13.5px;
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  line-height: 1.3;
`,K=s.default.div`
  font-size: 12px;
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.45;
`,P=s.default.div`
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
`,O=s.default.div`
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
`,B=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${r.w4.spacing.sm};
  max-width: 100%;
`,U=s.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,H=s.default.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${r.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${r.w4.colors.accent};
  flex-shrink: 0;
`,Q=s.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${r.w4.colors.mainTextMuted};
`,q=s.default.div`
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

    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.3s; }
  }
`,G=s.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${r.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  padding: 0 4px;
`,Z=s.default.div`
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${r.w4.transitions.fast};
`,_=s.default.div`
  font-size: 12.5px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.danger};
`,J=s.default.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.md} ${r.w4.spacing.md};
  position: relative;
  z-index: 1;
`,V=s.default.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,W=s.default.div`
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
`,X=s.default.textarea`
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
`,ee=s.default.button`
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
`,te=s.default.button`
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
`,ne=s.default.div`
  display: flex;
  gap: ${r.w4.spacing.md};
  align-items: center;
  justify-content: center;
`,ae=s.default.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${r.w4.colors.mainTextFaint};
`,ie=s.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.md} 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`,se=s.default.input`
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  padding: 2px 0;
  transition: border-color ${r.w4.transitions.fast};
  font-family: ${r.w4.typography.fontFamily};

  &:focus {
    border-bottom-color: ${r.w4.colors.accent};
  }
  &::placeholder {
    color: ${r.w4.colors.mainTextFaint};
  }
`,oe=s.default.div`
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
`,re=s.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};
`,le=s.default.div`
  font-size: 10.5px;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${r.w4.colors.mainTextMuted};
`,ce=s.default.select`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  font-size: 13px;
  padding: 7px 10px;
  outline: none;
  width: 100%;
  cursor: pointer;

  &:focus {
    border-color: ${r.w4.colors.accent};
  }
`,de=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${r.w4.spacing.md};
  padding: ${r.w4.spacing.xl};
  text-align: center;
`,ue=s.default.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${r.w4.colors.accentMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${r.w4.colors.accent};
`,pe=s.default.div`
  font-size: 17px;
  font-weight: 600;
  color: ${r.w4.colors.mainText};
`,fe=s.default.div`
  font-size: 13.5px;
  color: ${r.w4.colors.mainTextMuted};
  max-width: 340px;
  line-height: 1.55;
`,xe=["sparkle","code","book","message"];function he({topBarRight:e}){const[t]=(0,c.Ym)(),n=(0,i.useMemo)(()=>(0,c.Nx)(t,d.A),[t]),[a,s]=(0,i.useState)(null),[o,w]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(0,r.hY)().then(e=>{s(e),w(!0)}).catch(()=>w(!0))},[]);const[y,he]=(0,i.useState)({tone:"friendly",language:"auto",maxTokens:1024}),[ge,me]=(0,i.useState)(!1),we=(0,i.useRef)(null);(0,i.useEffect)(()=>{Promise.all([(0,r.PL)(f),(0,r.PL)(x),(0,r.PL)(h)]).then(([e,t,n])=>{he({tone:e??"friendly",language:t??"auto",maxTokens:n?parseInt(n,10):1024})}).catch(()=>{})},[]);const ye=(0,i.useCallback)(async e=>{const t={...y,...e};he(t),void 0!==e.tone&&await(0,r.Is)(f,e.tone),void 0!==e.language&&await(0,r.Is)(x,e.language),void 0!==e.maxTokens&&await(0,r.Is)(h,String(e.maxTokens))},[y]);(0,i.useEffect)(()=>{if(!ge)return;const e=e=>{we.current&&!we.current.contains(e.target)&&me(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[ge]);const[ke,be]=(0,i.useState)([]),[ve,$e]=(0,i.useState)(null),[je,Te]=(0,i.useState)([]),[ze,Ie]=(0,i.useState)(""),Ce=(0,i.useRef)([]);(0,i.useEffect)(()=>{Ce.current=je},[je]);const Se=(0,i.useCallback)(async()=>{const e=await(0,r.Iu)("ask");return be(e),e},[]);function Me(e){try{const t=JSON.parse(e.content);Te(t.turns??[])}catch{Te([])}$e(e.id),Ie(e.name),(0,r.Is)(p,e.id).catch(()=>{})}function Re(){Te([]),$e(null),Ie(""),(0,r.Is)(p,"").catch(()=>{})}(0,i.useEffect)(()=>{(async()=>{const e=await Se(),t=await(0,r.PL)(p),n=t?e.find(e=>e.id===t):null;n&&Me(n)})().catch(()=>{})},[]);const Ee=(0,i.useCallback)(async(e,t,a)=>{const i=JSON.stringify({turns:e}),s=a??(e.find(e=>"user"===e.role)?e.find(e=>"user"===e.role).content.slice(0,50):n("ask.untitled"));if(!t){const e=await(0,r.KL)("ask",s,i);return $e(e),await(0,r.Is)(p,e),e}return await(0,r.mZ)(t,s,i),t},[n]),Fe=(0,i.useCallback)(async e=>{await(0,r.kd)(e),e===ve&&Re(),await Se()},[ve,Se]),[Ne,Ae]=(0,i.useState)(""),[Le,Ye]=(0,i.useState)(!1),[De,Ke]=(0,i.useState)(null),[Pe,Oe]=(0,i.useState)(!1),Be=(0,i.useRef)(null),Ue=(0,i.useRef)(null),He=(0,i.useRef)(null);(0,i.useLayoutEffect)(()=>{const e=Ue.current;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,192)}px`)},[Ne]),(0,i.useEffect)(()=>{He.current?.scrollIntoView({behavior:"smooth"})},[je,Le]);const Qe=(0,i.useCallback)(async e=>{if(!a||!e.trim()||Le)return;const i=e.trim();Ae(""),Ke(null);const s={role:"user",content:i,ts:Date.now()},o={role:"assistant",content:"",loading:!0,ts:Date.now()},l=[...Ce.current,s,o];Te(l),Ye(!0);const c=Ce.current.filter(e=>!("loading"in e)).map(e=>({role:e.role,content:e.content})).slice(-6),d="auto"===y.language?t:y.language;Be.current?.abort();const u=new AbortController;Be.current=u;try{const e=await(0,r.Zf)(i,{key:a,system:(p=y.tone,f=d,x=y.language,["You are Atlantis, a personal-dashboard assistant.",`Be ${"friendly"===p?"warm and approachable":"playful"===p?"playful, light-hearted and fun":"direct and concise"}. Answer in ${"pt"===("auto"===x?f:x)?"Portuguese":"English"}.`,"Stay focused and reasonably concise. If you don't know, say so plainly.","","Your answers render as rich Markdown in the Atlantis UI. Use the full feature","set whenever it makes the answer clearer — don't default to plain prose when","you have structure or data to show:","","- Headings (## / ###), bold / italic, bullet and numbered lists.","- GFM tables and task lists (`- [ ]`, `- [x]`).","- Fenced code blocks with a language tag for syntax highlighting:","  ```ts / ```js / ```py / ```bash / ```json / ```sql etc.","- GitHub-style callouts for tips, warnings, and important notes. Use the","  blockquote form — do NOT put them inside a code fence:","    > [!NOTE] short aside","    > [!TIP] actionable hint","    > [!IMPORTANT] critical context","    > [!WARNING] gotcha or caveat","    > [!CAUTION] destructive / risky","- Diagrams, flowcharts, graphs, sequence/class/state/ER diagrams, pie charts,","  gantt charts, mindmaps. Use a ```mermaid fence — any valid Mermaid 11 syntax:","    ```mermaid","    graph LR; A[Sol] --\x3e|raio| B[Terra]","    ```","  The Atlantis renderer executes Mermaid in the browser and produces the SVG","  itself. You do NOT need an external image — NEVER emit `![alt](mermaid.png)`,","  `![graph](graph.png)`, or any other `![…](…)` image reference for a",'  diagram. The ```mermaid fence IS the diagram. Do not add an "Imagem:"',"  section or a caveat saying the image needs a Mermaid renderer — it renders","  automatically. A fenced ```mermaid block must contain ONLY valid Mermaid","  code (first line starts with `graph`, `flowchart`, `sequenceDiagram`,","  `pie`, `gantt`, `mindmap`, etc.) — never data tables, prose, or a file path.","- Quantitative data (bar / pie / line). Use a ```chart fence with the simple","  key: value DSL the Atlantis renderer expects:","    ```chart","    type: bar            # bar | pie | line","    title: Revenue 2025","    labels: [Q1, Q2, Q3, Q4]","    data: [12, 18, 9, 22]","    ```","  Prefer `chart` over a Mermaid pie when the user gives concrete numbers;","  prefer `mermaid` for relationships, flows, and conceptual diagrams.","","Rules of thumb:","- Use Mermaid ONLY for relationships, flows, hierarchies, and conceptual","  diagrams. Never use Mermaid to plot time-series or numeric trends — a","  long `graph TB` chain of numbered nodes is ALWAYS a `chart` block in",'  disguise. When the data is "value per year / month / category", pick',"  `chart`.","- If an instruction has multiple steps, use an ordered list or task list.","- Reach for tables when comparing 2+ things across shared attributes.","- Never emit an empty fenced block. If you're unsure, write prose instead."].join("\n")),locale:d,signal:u.signal,history:c,maxTokens:y.maxTokens});if(u.signal.aborted)return;const t={role:"assistant",content:e,ts:Date.now()},s=[...Ce.current.filter(e=>!("loading"in e)),t];Te(s);const o=await Ee(s,ve);o&&o!==ve&&($e(o),Ie(s.find(e=>"user"===e.role)?i.slice(0,50):n("ask.untitled"))),await Se()}catch(e){if(u.signal.aborted)return;const t=e instanceof Error?e.message:String(e);Ke(t),Te(e=>e.filter(e=>!("loading"in e)))}finally{u.signal.aborted||Ye(!1)}var p,f,x},[a,Le,t,y,ve,Ee,Se,n]),qe=(0,i.useCallback)(()=>{Be.current?.abort(),Ye(!1),Te(e=>e.filter(e=>!("loading"in e)))},[]);(0,i.useEffect)(()=>{const e=e=>{(e.metaKey||e.ctrlKey)&&"n"===e.key&&(e.preventDefault(),Re(),Ue.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);const Ge=(0,i.useCallback)(e=>{if("Enter"===e.key&&!e.shiftKey)return e.preventDefault(),void Qe(Ne);"Escape"===e.key&&(Ne?Ae(""):e.currentTarget.blur())},[Ne,Qe]),Ze=(0,i.useMemo)(()=>{const e={today:[],yesterday:[],last7:[],older:[]};for(const t of ke)e[m(t.savedAt)].push(t);return e},[ke]),_e={today:"ask.group.today",yesterday:"ask.group.yesterday",last7:"ask.group.last7",older:"ask.group.older"},Je=(0,u.jsxs)(k,{children:[(0,u.jsx)(b,{children:(0,u.jsx)(l.$n,{variant:"primary",onClick:Re,style:{width:"100%",justifyContent:"center"},children:n("ask.sidebar.new")})}),(0,u.jsx)(v,{children:0===ke.length?(0,u.jsx)(C,{children:n("ask.sidebar.empty")}):["today","yesterday","last7","older"].map(e=>{const t=Ze[e];return 0===t.length?null:(0,u.jsxs)("div",{children:[(0,u.jsx)($,{children:(0,u.jsx)(l.YZ,{children:n(_e[e])})}),t.map(e=>(0,u.jsxs)(j,{active:e.id===ve,onClick:()=>Me(e),children:[(0,u.jsx)(T,{active:e.id===ve,children:e.name||n("ask.untitled")}),(0,u.jsx)(z,{children:(0,c.aw)(new Date(e.savedAt).toISOString(),n)}),(0,u.jsx)(I,{className:"conv-row-hover",children:(0,u.jsx)(l.K0,{title:n("ask.sidebar.delete"),tone:"danger",onClick:t=>{t.stopPropagation(),Fe(e.id)},children:(0,u.jsx)(l.In,{name:"close",size:12})})})]},e.id))]},e)})})]});if(o&&!a)return(0,u.jsx)(r.PE,{title:n("ask.title"),sidebar:Je,topBarRight:e,children:(0,u.jsxs)(de,{children:[(0,u.jsx)(ue,{children:(0,u.jsx)(l.In,{name:"sparkle",size:24})}),(0,u.jsx)(pe,{children:n("ask.noKey.title")}),(0,u.jsx)(fe,{children:n("ask.noKey.body")}),(0,u.jsx)(l.$n,{variant:"primary",onClick:()=>{window.location.hash="#/settings"},children:n("ask.noKey.cta")})]})});const Ve=(0,u.jsxs)("div",{style:{position:"relative"},ref:we,children:[(0,u.jsx)(l.K0,{title:n("ask.settings.title"),active:ge,onClick:()=>me(e=>!e),children:(0,u.jsx)(l.In,{name:"settings",size:16})}),ge&&(0,u.jsxs)(oe,{children:[(0,u.jsxs)(re,{children:[(0,u.jsx)(le,{children:n("ask.settings.tone")}),(0,u.jsxs)(ce,{value:y.tone,onChange:e=>{ye({tone:e.target.value})},children:[(0,u.jsx)("option",{value:"friendly",children:n("ask.settings.tone.friendly")}),(0,u.jsx)("option",{value:"direct",children:n("ask.settings.tone.direct")}),(0,u.jsx)("option",{value:"playful",children:n("ask.settings.tone.playful")})]})]}),(0,u.jsxs)(re,{children:[(0,u.jsx)(le,{children:n("ask.settings.language")}),(0,u.jsxs)(ce,{value:y.language,onChange:e=>{ye({language:e.target.value})},children:[(0,u.jsx)("option",{value:"auto",children:n("ask.settings.language.auto")}),(0,u.jsx)("option",{value:"pt",children:n("ask.settings.language.pt")}),(0,u.jsx)("option",{value:"en",children:n("ask.settings.language.en")})]})]}),(0,u.jsxs)(re,{children:[(0,u.jsx)(le,{children:n("ask.settings.maxTokens")}),(0,u.jsxs)(ce,{value:y.maxTokens,onChange:e=>{ye({maxTokens:parseInt(e.target.value,10)})},children:[(0,u.jsx)("option",{value:256,children:n("ask.settings.maxTokens.short")}),(0,u.jsx)("option",{value:512,children:n("ask.settings.maxTokens.medium")}),(0,u.jsx)("option",{value:1024,children:n("ask.settings.maxTokens.long")}),(0,u.jsx)("option",{value:2048,children:n("ask.settings.maxTokens.xlong")})]})]})]})]}),We=0===je.length&&!Le,Xe=!!Ne.trim()&&!Le&&!!a;return(0,u.jsx)(r.PE,{title:n("ask.title"),sidebar:Je,topBarRight:e,children:(0,u.jsxs)(S,{children:[(0,u.jsxs)(ie,{children:[(0,u.jsx)(se,{value:ze,placeholder:n("ask.untitled"),onChange:e=>Ie(e.target.value),onBlur:async()=>{if(ve&&ze.trim()){const e=JSON.stringify({turns:Ce.current});await(0,r.mZ)(ve,ze.trim(),e),await Se()}}}),Ve]}),(0,u.jsx)(M,{children:We?(0,u.jsx)(R,{children:(0,u.jsxs)(E,{children:[(0,u.jsx)(F,{children:n("ask.welcome.title")}),(0,u.jsx)(N,{children:n("ask.welcome.kicker")}),(0,u.jsx)(A,{children:["1","2","3","4"].map((e,t)=>(0,u.jsxs)(L,{onClick:()=>{const t=n(`ask.suggestion.${e}`);Ae(t),Ue.current?.focus(),Qe(t)},children:[(0,u.jsx)(Y,{children:(0,u.jsx)(l.In,{name:xe[t],size:18,"aria-hidden":!0})}),(0,u.jsx)(D,{children:n(`ask.suggestion.${e}.title`)}),(0,u.jsx)(K,{children:n(`ask.suggestion.${e}.body`)})]},e))})]})}):(0,u.jsxs)(R,{children:[je.map((e,t)=>{const a="user"===e.role,i="loading"in e&&e.loading;return(0,u.jsx)(P,{user:a,children:a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(O,{children:e.content}),(0,u.jsx)(G,{children:g(e.ts,n)}),(0,u.jsx)(Z,{className:"turn-actions",children:(0,u.jsx)(l.K0,{title:n("ask.action.edit"),onClick:()=>{},children:(0,u.jsx)(l.In,{name:"edit",size:13})})})]}):(0,u.jsxs)(B,{children:[(0,u.jsxs)(U,{children:[(0,u.jsx)(H,{"aria-hidden":!0,children:(0,u.jsx)(l.In,{name:"sparkle",size:14})}),(0,u.jsx)(Q,{children:n("ask.atlantis")})]}),i?(0,u.jsxs)(q,{"aria-label":n("ask.thinking"),children:[(0,u.jsx)("span",{}),(0,u.jsx)("span",{}),(0,u.jsx)("span",{})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.mQ,{children:e.content}),(0,u.jsx)(G,{children:g(e.ts,n)}),(0,u.jsxs)(Z,{className:"turn-actions",children:[(0,u.jsx)(l.K0,{title:n("ask.action.copy"),onClick:()=>{"assistant"!==e.role||"loading"in e||navigator.clipboard.writeText(e.content)},children:(0,u.jsx)(l.In,{name:"copy",size:13})}),(0,u.jsx)(l.K0,{title:n("ask.action.regenerate"),onClick:()=>{const e=Ce.current.filter(e=>"user"===e.role).pop();e&&"user"===e.role&&Qe(e.content)},children:(0,u.jsx)(l.In,{name:"refresh",size:13})})]})]})]})},t)}),De&&(0,u.jsx)(P,{children:(0,u.jsxs)(B,{children:[(0,u.jsxs)(U,{children:[(0,u.jsx)(H,{"aria-hidden":!0,children:(0,u.jsx)(l.In,{name:"sparkle",size:14})}),(0,u.jsx)(Q,{children:n("ask.atlantis")})]}),(0,u.jsx)(_,{children:De}),(0,u.jsx)(l.$n,{variant:"ghost",onClick:()=>{const e=Ce.current.filter(e=>"user"===e.role).pop();e&&"user"===e.role&&Qe(e.content)},children:n("ask.retry")})]})}),(0,u.jsx)("div",{ref:He})]})}),(0,u.jsx)(J,{children:(0,u.jsxs)(V,{children:[(0,u.jsxs)(W,{focused:Pe,children:[(0,u.jsx)(X,{ref:Ue,rows:1,placeholder:n("ask.placeholder"),value:Ne,onChange:e=>Ae(e.target.value),onKeyDown:Ge,onFocus:()=>Oe(!0),onBlur:()=>Oe(!1),disabled:Le,"aria-label":n("ask.placeholder")}),Le?(0,u.jsx)(te,{type:"button","aria-label":n("ask.stop"),title:n("ask.stop"),onClick:qe,children:(0,u.jsx)(l.In,{name:"square",size:14})}):(0,u.jsx)(ee,{type:"button",ready:Xe,"aria-label":n("ask.send"),title:n("ask.send"),disabled:!Xe,onClick:()=>{Qe(Ne)},children:(0,u.jsx)(l.In,{name:"send",size:15})})]}),(0,u.jsxs)(ne,{children:[(0,u.jsxs)(ae,{children:[(0,u.jsx)(l.ue,{children:"↵"})," ",n("ask.hint.send")]}),(0,u.jsxs)(ae,{children:[(0,u.jsx)(l.ue,{children:"⇧↵"})," ",n("ask.hint.newline")]}),(0,u.jsxs)(ae,{children:[(0,u.jsx)(l.ue,{children:"⌘N"})," ",n("ask.hint.newConv")]})]})]})})]})})}const ge=document.getElementById("root");if(!ge)throw new Error("Root element #root not found");(0,a.H)(ge).render((0,u.jsx)(he,{}))},58997(e,t,n){var a=n(48991);t.H=a.createRoot,a.hydrateRoot}}]);
//# sourceMappingURL=188.c6e2f96f079d532ffccc.js.map