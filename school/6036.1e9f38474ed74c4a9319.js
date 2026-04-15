"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([[6036],{46036(e,a,t){t.r(a),t.d(a,{default:()=>q});var i=t(27359),o=t(53233),r=t(77207),n=t(32289),s=t(85723),l=t(30894),d=t(87891),c=t(81664),p=t(39360),u=t(31103),m=t(37877),x=t(6662),h=t(63594),g=t(65723);const y=[{key:"math",hashPrefix:"math",label:{pt:"Matemática",en:"Maths"},description:{pt:"Números, contas e problemas",en:"Numbers, sums & problems"},emoji:"🔢",color:"#58a6ff",languages:{pt:{label:"PT",navigation:d},en:{label:"EN",navigation:c}},welcomeTitle:{pt:"Matemática",en:"Mathematics"},welcomeSub:{pt:"Exercícios e conteúdos do 1.º ao 4.º ano — escolhe um tema no menu.",en:"Exercises and content from Year 1 to 4 — pick a topic from the sidebar."}},{key:"portuguese",hashPrefix:"portugues",label:{pt:"Português",en:"Portuguese"},description:{pt:"Leitura, escrita e gramática",en:"Reading, writing & grammar"},emoji:"📖",color:"#3fb950",languages:{pt:{label:"PT",navigation:p},en:{label:"EN",navigation:u}},welcomeTitle:{pt:"Português",en:"Portuguese"},welcomeSub:{pt:"Leitura, escrita e gramática do 1.º ao 4.º ano — escolhe um tema no menu.",en:"Reading, writing, and grammar from Year 1 to 4 — pick a topic from the sidebar."}},{key:"science",hashPrefix:"estudodomeio",label:{pt:"Estudo do Meio",en:"Science"},description:{pt:"O mundo a nossa volta",en:"The world around us"},emoji:"🌍",color:"#d29922",languages:{pt:{label:"PT",navigation:m},en:{label:"EN",navigation:x}},welcomeTitle:{pt:"Estudo do Meio",en:"Environmental Studies"},welcomeSub:{pt:"O mundo natural e social do 1.º ao 4.º ano — escolhe um tema no menu.",en:"The natural and social world from Year 1 to 4 — pick a topic from the sidebar."}}];function f(){const e=window.location.hash.toLowerCase();return e.startsWith("#/math")?"math":e.startsWith("#/portugues")?"portuguese":e.startsWith("#/estudodomeio")?"science":e.startsWith("#/leitor")||e.startsWith("#/lebem")?"lebem":null}const w=r.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`,b=r.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,$=o.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${s.w4.spacing.xl};
  gap: ${s.w4.spacing.xl};
  overflow: hidden auto;
  position: relative;
  background:
    radial-gradient(ellipse 60% 50% at 20% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 80% 70%, rgba(249, 117, 131, 0.04) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 50% 50%, rgba(121, 192, 255, 0.03) 0%, transparent 70%),
    #080b12;
`,z=o.default.h1`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${s.w4.colors.mainText};
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${b} 0.5s ease both;
`,k=o.default.p`
  font-size: ${s.w4.typography.fontSizeMd};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  animation: ${b} 0.5s ease 0.1s both;
`,v=o.default.div`
  display: grid;
  grid-template-columns: repeat(${({columns:e})=>e??3}, 1fr);
  gap: ${s.w4.spacing.lg};
  max-width: 880px;
  width: 100%;
  position: relative;
  z-index: 1;
  animation: ${b} 0.5s ease 0.2s both;

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 480px;
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
`,j=o.default.h2`
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${s.w4.colors.mainTextMuted};
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${b} 0.5s ease 0.25s both;
`,T=r.keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%      { opacity: 0.9; transform: scale(1.2); }
`,S=r.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,P=o.default.div`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: white;
  animation: ${T} ${({dur:e})=>e}s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,E=r.keyframes`
  0%   { transform: translateX(0); opacity: 0; }
  2%   { opacity: 1; }
  15%  { opacity: 0.6; }
  20%  { transform: translateX(300px); opacity: 0; }
  100% { transform: translateX(300px); opacity: 0; }
`,M=o.default.div`
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
  animation: ${E} ${({delay:e})=>e}s ease-out infinite;

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
`,R=o.default.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.w4.spacing.lg};
  animation: ${b} 0.5s ease 0.35s both;
`,C=[{x:4,y:10,size:1.5,delay:.2,dur:3.1},{x:12,y:80,size:2,delay:1.4,dur:4},{x:22,y:25,size:2.5,delay:.6,dur:3.5},{x:35,y:70,size:1.5,delay:2,dur:4.3},{x:48,y:15,size:2,delay:.9,dur:3.2},{x:58,y:85,size:1.5,delay:1.7,dur:3.9},{x:68,y:35,size:2,delay:2.5,dur:4.1},{x:78,y:60,size:2.5,delay:.3,dur:3.4},{x:88,y:20,size:1.5,delay:1.1,dur:3.7},{x:94,y:75,size:2,delay:2.3,dur:4.5}],Y=o.default.h2`
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
  position: relative;
  z-index: 1;
  background: linear-gradient(90deg, #f97583, #d2a8ff, #79c0ff, #f97583);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${S} 4s linear infinite;
`,L=[{x:3,y:5,size:1.5,delay:0,dur:3.2},{x:8,y:35,size:2,delay:1.8,dur:3.4},{x:12,y:70,size:1.5,delay:.6,dur:4.1},{x:18,y:15,size:2.5,delay:2.4,dur:3},{x:22,y:55,size:1.5,delay:.3,dur:4.5},{x:28,y:88,size:2,delay:1.1,dur:3.6},{x:33,y:25,size:1.5,delay:2.8,dur:4},{x:40,y:60,size:2,delay:.9,dur:3.3},{x:45,y:8,size:2.5,delay:1.5,dur:3.8},{x:50,y:45,size:1.5,delay:2.1,dur:4.3},{x:55,y:78,size:2,delay:.4,dur:3.1},{x:60,y:18,size:1.5,delay:1.7,dur:4.6},{x:65,y:50,size:2.5,delay:2.6,dur:3.5},{x:70,y:85,size:1.5,delay:.2,dur:3.9},{x:75,y:30,size:2,delay:1.3,dur:4.2},{x:80,y:65,size:1.5,delay:2.9,dur:3.7},{x:85,y:10,size:2,delay:.7,dur:3.4},{x:88,y:42,size:2.5,delay:1.9,dur:4.4},{x:92,y:75,size:1.5,delay:.5,dur:3.2},{x:96,y:22,size:2,delay:2.3,dur:3.8}],B=o.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: ${s.w4.spacing.xl} ${s.w4.spacing.lg};
  background: ${s.w4.colors.surface};
  border: 2px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  cursor: pointer;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  font-family: ${s.w4.typography.fontFamily};
  min-height: 180px;

  &:hover {
    border-color: ${({accentColor:e})=>e};
    transform: translateY(-4px);
    box-shadow: 0 8px 32px ${({accentColor:e})=>e}20;
  }

  &:active {
    transform: translateY(-2px);
  }
`,W=o.default.span`
  font-size: 48px;
  line-height: 1;
  animation: ${w} 3s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
`,N=o.default.span`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
`,O=o.default.span`
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.4;
`,_=(o.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  flex-shrink: 0;
`,o.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  font-size: 13px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  white-space: nowrap;
  background: ${({active:e})=>e?s.w4.colors.surface:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.mainText:s.w4.colors.mainTextMuted};
  box-shadow: ${({active:e})=>e?"0 1px 3px rgba(0,0,0,0.3)":"none"};
  &:hover {
    color: ${s.w4.colors.mainText};
    background: ${({active:e})=>e?s.w4.colors.surface:"rgba(255,255,255,0.04)"};
  }
`,o.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  background: none;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.mainText}; }
`),F=o.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,X={pt:"O que vamos aprender hoje?",en:"What shall we learn today?"},D={pt:"Escolhe uma disciplina para começar",en:"Pick a subject to get started"};function q({topBarRight:e}){const[a,t]=(0,i.useState)(f),[o]=(0,l.Ym)(),r="pt"===o?"pt":"en";if((0,i.useEffect)(()=>{const e=()=>t(f());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),!a)return(0,g.jsx)(s.PE,{title:"School",sidebar:null,topBarRight:e,children:(0,g.jsxs)($,{children:[L.map((e,a)=>(0,g.jsx)(P,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,g.jsx)(M,{top:15,delay:12}),(0,g.jsx)(M,{top:55,delay:25}),(0,g.jsx)(z,{children:X[r]}),(0,g.jsx)(k,{children:D[r]}),(0,g.jsx)(j,{children:"pt"===r?"Disciplinas":"Subjects"}),(0,g.jsx)(v,{columns:3,children:y.map((e,a)=>(0,g.jsxs)(B,{accentColor:e.color,onClick:()=>{t(e.key),window.location.hash=`#/${e.hashPrefix}`},children:[(0,g.jsx)(W,{delay:.4*a,children:e.emoji}),(0,g.jsx)(N,{children:e.label[r]}),(0,g.jsx)(O,{children:e.description[r]})]},e.key))}),(0,g.jsxs)(R,{children:[C.map((e,a)=>(0,g.jsx)(P,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,g.jsx)(Y,{children:"pt"===r?"Jogos":"Games"}),(0,g.jsx)(v,{columns:3,children:(0,g.jsxs)(B,{accentColor:"#f97583",onClick:()=>{t("lebem"),window.location.hash="#/lebem"},children:[(0,g.jsx)(W,{delay:1.2,children:"🎮"}),(0,g.jsx)(N,{children:"pt"===r?"Ler a Brincar":"Read & Play"}),(0,g.jsx)(O,{children:"pt"===r?"Aprende a ler com jogos divertidos":"Learn to read with fun games"})]})})]})]})});const d=(0,g.jsxs)(F,{children:[(0,g.jsxs)(_,{onClick:()=>{t(null),window.location.hash="#/school"},children:["← ","pt"===r?"Disciplinas":"Subjects"]}),e]});if("lebem"===a)return(0,g.jsx)(s.PE,{title:"LêBem",sidebar:null,topBarRight:d,children:(0,g.jsx)(h.f,{onBack:()=>{t(null),window.location.hash="#/school"}})});const c=y.find(e=>e.key===a);return(0,g.jsx)(n.WO,{hashPrefix:c.hashPrefix,defaultLang:"pt",locale:o,languages:c.languages,welcomeTitle:c.welcomeTitle,welcomeSub:c.welcomeSub,topBarRight:d},a)}}}]);
//# sourceMappingURL=6036.1e9f38474ed74c4a9319.js.map