"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([[188],{20188(e,a,t){var o=t(58997),r=t(27359),i=t(53233),n=t(77207),s=t(9752),l=t(59200),d=t(30894),c=t(41223),p=t(78844),u=t(80940),m=t(75539),g=t(68585),h=t(8050),x=t(43547),f=t(81592),y=t(65723);const w=[{key:"math",hashPrefix:"math",label:{pt:"Matemática",en:"Maths"},description:{pt:"Números, contas e problemas",en:"Numbers, sums & problems"},emoji:"🔢",color:"#58a6ff",languages:{pt:{label:"PT",navigation:c},en:{label:"EN",navigation:p}},welcomeTitle:{pt:"Matemática",en:"Mathematics"},welcomeSub:{pt:"Exercícios e conteúdos do 1.º ao 4.º ano — escolhe um tema no menu.",en:"Exercises and content from Year 1 to 4 — pick a topic from the sidebar."}},{key:"portuguese",hashPrefix:"portugues",label:{pt:"Português",en:"Portuguese"},description:{pt:"Leitura, escrita e gramática",en:"Reading, writing & grammar"},emoji:"📖",color:"#3fb950",languages:{pt:{label:"PT",navigation:u},en:{label:"EN",navigation:m}},welcomeTitle:{pt:"Português",en:"Portuguese"},welcomeSub:{pt:"Leitura, escrita e gramática do 1.º ao 4.º ano — escolhe um tema no menu.",en:"Reading, writing, and grammar from Year 1 to 4 — pick a topic from the sidebar."}},{key:"science",hashPrefix:"estudodomeio",label:{pt:"Estudo do Meio",en:"Science"},description:{pt:"O mundo a nossa volta",en:"The world around us"},emoji:"🌍",color:"#d29922",languages:{pt:{label:"PT",navigation:g},en:{label:"EN",navigation:h}},welcomeTitle:{pt:"Estudo do Meio",en:"Environmental Studies"},welcomeSub:{pt:"O mundo natural e social do 1.º ao 4.º ano — escolhe um tema no menu.",en:"The natural and social world from Year 1 to 4 — pick a topic from the sidebar."}},{key:"english",hashPrefix:"english",label:{pt:"Inglês",en:"English"},description:{pt:"Vocabulário, gramática e conversação",en:"Vocabulary, grammar & conversation"},emoji:"🇬🇧",color:"#e05252",languages:{pt:{label:"PT",navigation:x},en:{label:"EN",navigation:f}},welcomeTitle:{pt:"Inglês",en:"English"},welcomeSub:{pt:"Vocabulário, gramática e conversação do 1.º ao 5.º ano — escolhe um tema no menu.",en:"Vocabulary, grammar and conversation from Year 1 to 5 — pick a topic from the sidebar."}}];function b(){const e=window.location.hash.toLowerCase();return e.startsWith("#/math")?"math":e.startsWith("#/portugues")?"portuguese":e.startsWith("#/estudodomeio")?"science":e.startsWith("#/ingles")?"english":null}const $=n.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`,v=n.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,k=n.keyframes`
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
`,z=n.keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-4px) scale(1.08); }
`,j=i.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.xl} ${l.w4.spacing.xxl};
  gap: ${l.w4.spacing.xl};
  overflow-y: auto;
  position: relative;
  background:
    radial-gradient(ellipse 60% 50% at 20% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 80% 70%, rgba(249, 117, 131, 0.04) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 50% 50%, rgba(121, 192, 255, 0.03) 0%, transparent 70%),
    #080b12;
`,T=i.default.h1`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${v} 0.5s ease both;
`,E=i.default.p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  animation: ${v} 0.5s ease 0.1s both;
`,S=i.default.div`
  display: grid;
  grid-template-columns: repeat(${({columns:e})=>e??3}, 1fr);
  gap: ${l.w4.spacing.lg};
  max-width: 880px;
  width: 100%;
  position: relative;
  z-index: 1;
  animation: ${v} 0.5s ease 0.2s both;

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 480px;
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
`,P=i.default.h2`
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${l.w4.colors.mainTextMuted};
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${v} 0.5s ease 0.25s both;
`,C=n.keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%      { opacity: 0.9; transform: scale(1.2); }
`,R=i.default.div`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: white;
  animation: ${C} ${({dur:e})=>e}s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,M=n.keyframes`
  0%   { transform: translateX(0); opacity: 0; }
  2%   { opacity: 1; }
  15%  { opacity: 0.6; }
  20%  { transform: translateX(300px); opacity: 0; }
  100% { transform: translateX(300px); opacity: 0; }
`,Y=i.default.div`
  position: absolute;
  top: ${({top:e})=>e}%;
  left: 5%;
  width: 80px;
  height: 1px;
  transform: rotate(-25deg);
  transform-origin: left center;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 60%, white 100%);
  border-radius: 1px;
  opacity: 0;
  pointer-events: none;
  animation: ${M} ${({delay:e})=>e}s ease-out infinite;

  &::after {
    content: '';
    position: absolute;
    right: -1px;
    top: -1.5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 4px 1px rgba(200, 200, 255, 0.5);
  }
`,X=[{x:3,y:5,size:1.5,delay:0,dur:3.2},{x:8,y:35,size:2,delay:1.8,dur:3.4},{x:12,y:70,size:1.5,delay:.6,dur:4.1},{x:18,y:15,size:2.5,delay:2.4,dur:3},{x:22,y:55,size:1.5,delay:.3,dur:4.5},{x:28,y:88,size:2,delay:1.1,dur:3.6},{x:33,y:25,size:1.5,delay:2.8,dur:4},{x:40,y:60,size:2,delay:.9,dur:3.3},{x:45,y:8,size:2.5,delay:1.5,dur:3.8},{x:50,y:45,size:1.5,delay:2.1,dur:4.3},{x:55,y:78,size:2,delay:.4,dur:3.1},{x:60,y:18,size:1.5,delay:1.7,dur:4.6},{x:65,y:50,size:2.5,delay:2.6,dur:3.5},{x:70,y:85,size:1.5,delay:.2,dur:3.9},{x:75,y:30,size:2,delay:1.3,dur:4.2},{x:80,y:65,size:1.5,delay:2.9,dur:3.7},{x:85,y:10,size:2,delay:.7,dur:3.4},{x:88,y:42,size:2.5,delay:1.9,dur:4.4},{x:92,y:75,size:1.5,delay:.5,dur:3.2},{x:96,y:22,size:2,delay:2.3,dur:3.8}],N=i.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.lg};
  padding-top: 24px;
  background: linear-gradient(
    168deg,
    ${({accentColor:e})=>e}0a 0%,
    ${l.w4.colors.surface} 45%,
    ${l.w4.colors.surface} 100%
  );
  border: 1px solid ${({accentColor:e})=>e}30;
  border-radius: ${l.w4.borderRadius.lg};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
  font-family: ${l.w4.typography.fontFamily};
  min-height: 180px;

  /* top accent glow line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({accentColor:e})=>e}, transparent);
    opacity: 0.5;
    transition: opacity 0.3s;
  }

  /* shimmer sweep */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({accentColor:e})=>e}08,
      ${({accentColor:e})=>e}14,
      transparent
    );
    transform: translateX(-100%) skewX(-15deg);
    pointer-events: none;
  }

  &:hover {
    border-color: ${({accentColor:e})=>e}60;
    background: linear-gradient(
      168deg,
      ${({accentColor:e})=>e}14 0%,
      ${l.w4.colors.surfaceRaised} 45%,
      ${l.w4.colors.surfaceRaised} 100%
    );
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 0 24px ${({accentColor:e})=>e}15,
      0 8px 32px rgba(0, 0, 0, 0.3);
  }
  &:hover::before {
    opacity: 1;
    box-shadow: 0 0 10px ${({accentColor:e})=>e}40;
  }
  &:hover::after {
    animation: ${k} 0.8s ease-out;
  }
  &:hover .card-emoji {
    animation: ${z} 1.5s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`,L=i.default.span`
  font-size: 48px;
  line-height: 1;
  animation: ${$} 3s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.1));
  transition: filter 0.3s;
`,W=i.default.span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,B=i.default.span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.4;
`,O=(i.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  flex-shrink: 0;
`,i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 13px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  white-space: nowrap;
  background: ${({active:e})=>e?l.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};
  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${({active:e})=>e?l.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`,i.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  background: none;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.mainText}; }
`),V=i.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,_={pt:"O que vamos aprender hoje?",en:"What shall we learn today?"},F={pt:"Escolhe uma disciplina para começar",en:"Pick a subject to get started"};function I({topBarRight:e}){const[a,t]=(0,r.useState)(b),[o]=(0,d.Ym)(),i="pt"===o?"pt":"en";if((0,r.useEffect)(()=>{const e=()=>t(b());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),!a)return(0,y.jsx)(l.PE,{title:"School",sidebar:null,topBarRight:e,children:(0,y.jsxs)(j,{children:[X.map((e,a)=>(0,y.jsx)(R,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,y.jsx)(Y,{top:15,delay:12}),(0,y.jsx)(Y,{top:55,delay:25}),(0,y.jsx)(T,{children:_[i]}),(0,y.jsx)(E,{children:F[i]}),(0,y.jsx)(P,{children:"pt"===i?"Disciplinas":"Subjects"}),(0,y.jsx)(S,{columns:4,children:w.map((e,a)=>(0,y.jsxs)(N,{accentColor:e.color,onClick:()=>{t(e.key),window.location.hash=`#/${e.hashPrefix}`},children:[(0,y.jsx)(L,{className:"card-emoji",delay:.4*a,children:e.emoji}),(0,y.jsx)(W,{children:e.label[i]}),(0,y.jsx)(B,{children:e.description[i]})]},e.key))})]})});const n=(0,y.jsxs)(V,{children:[(0,y.jsxs)(O,{onClick:()=>{t(null),window.location.hash="#/school"},children:["← ","pt"===i?"Disciplinas":"Subjects"]}),e]}),c=w.find(e=>e.key===a);return(0,y.jsx)(s.WO,{hashPrefix:c.hashPrefix,defaultLang:"pt",locale:o,languages:c.languages,welcomeTitle:c.welcomeTitle,welcomeSub:c.welcomeSub,topBarRight:n},a)}const D=document.getElementById("root");if(!D)throw new Error("Root element #root not found");(0,o.H)(D).render((0,y.jsx)(I,{}))},58997(e,a,t){var o=t(48991);a.H=o.createRoot,o.hydrateRoot}}]);