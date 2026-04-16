"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([[6036],{46036(e,a,t){t.r(a),t.d(a,{default:()=>te});var o=t(27359),i=t(53233),n=t(77207),r=t(9752),s=t(60894),l=t(30894),d=t(87891),c=t(81664),p=t(39360),h=t(31103),u=t(37877),m=t(6662),x=t(94831),g=t(10388),f=t(63594),y=t(80273),w=t(82742),b=t(90818),j=t(56574),k=t(71442),$=t(43065),z=t(51623),v=t(37566),C=t(35758),P=t(65723);const T=[{key:"math",hashPrefix:"math",label:{pt:"Matemática",en:"Maths"},description:{pt:"Números, contas e problemas",en:"Numbers, sums & problems"},emoji:"🔢",color:"#58a6ff",languages:{pt:{label:"PT",navigation:d},en:{label:"EN",navigation:c}},welcomeTitle:{pt:"Matemática",en:"Mathematics"},welcomeSub:{pt:"Exercícios e conteúdos do 1.º ao 4.º ano — escolhe um tema no menu.",en:"Exercises and content from Year 1 to 4 — pick a topic from the sidebar."}},{key:"portuguese",hashPrefix:"portugues",label:{pt:"Português",en:"Portuguese"},description:{pt:"Leitura, escrita e gramática",en:"Reading, writing & grammar"},emoji:"📖",color:"#3fb950",languages:{pt:{label:"PT",navigation:p},en:{label:"EN",navigation:h}},welcomeTitle:{pt:"Português",en:"Portuguese"},welcomeSub:{pt:"Leitura, escrita e gramática do 1.º ao 4.º ano — escolhe um tema no menu.",en:"Reading, writing, and grammar from Year 1 to 4 — pick a topic from the sidebar."}},{key:"science",hashPrefix:"estudodomeio",label:{pt:"Estudo do Meio",en:"Science"},description:{pt:"O mundo a nossa volta",en:"The world around us"},emoji:"🌍",color:"#d29922",languages:{pt:{label:"PT",navigation:u},en:{label:"EN",navigation:m}},welcomeTitle:{pt:"Estudo do Meio",en:"Environmental Studies"},welcomeSub:{pt:"O mundo natural e social do 1.º ao 4.º ano — escolhe um tema no menu.",en:"The natural and social world from Year 1 to 4 — pick a topic from the sidebar."}},{key:"english",hashPrefix:"english",label:{pt:"Inglês",en:"English"},description:{pt:"Vocabulário, gramática e conversação",en:"Vocabulary, grammar & conversation"},emoji:"🇬🇧",color:"#e05252",languages:{pt:{label:"PT",navigation:x},en:{label:"EN",navigation:g}},welcomeTitle:{pt:"Inglês",en:"English"},welcomeSub:{pt:"Vocabulário, gramática e conversação do 1.º ao 5.º ano — escolhe um tema no menu.",en:"Vocabulary, grammar and conversation from Year 1 to 5 — pick a topic from the sidebar."}}];function E(){const e=window.location.hash.toLowerCase();return e.startsWith("#/math")?"math":e.startsWith("#/portugues")?"portuguese":e.startsWith("#/estudodomeio")?"science":e.startsWith("#/english")||e.startsWith("#/ingles")?"english":e.startsWith("#/leitor")||e.startsWith("#/lebem")?"lebem":e.startsWith("#/tictactoe")||e.startsWith("#/galo")?"tictactoe":e.startsWith("#/soundhunter")?"soundhunter":e.startsWith("#/familyquiz")?"familyquiz":e.startsWith("#/adventure")?"adventure":e.startsWith("#/missions")?"missions":e.startsWith("#/pixelboard")?"pixelboard":e.startsWith("#/stopgame")?"stopgame":e.startsWith("#/spotit")?"spotit":e.startsWith("#/memory")?"memory":null}const S=n.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`,B=n.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,R=n.keyframes`
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
`,M=n.keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-4px) scale(1.08); }
`,W=i.default.div`
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
`,N=i.default.h1`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${s.w4.colors.mainText};
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${B} 0.5s ease both;
`,Y=i.default.p`
  font-size: ${s.w4.typography.fontSizeMd};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  animation: ${B} 0.5s ease 0.1s both;
`,F=i.default.div`
  display: grid;
  grid-template-columns: repeat(${({columns:e})=>e??3}, 1fr);
  gap: ${s.w4.spacing.lg};
  max-width: 880px;
  width: 100%;
  position: relative;
  z-index: 1;
  animation: ${B} 0.5s ease 0.2s both;

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 480px;
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
`,L=i.default.h2`
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${s.w4.colors.mainTextMuted};
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${B} 0.5s ease 0.25s both;
`,X=n.keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%      { opacity: 0.9; transform: scale(1.2); }
`,G=n.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,O=i.default.div`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: white;
  animation: ${X} ${({dur:e})=>e}s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,q=n.keyframes`
  0%   { transform: translateX(0); opacity: 0; }
  2%   { opacity: 1; }
  15%  { opacity: 0.6; }
  20%  { transform: translateX(300px); opacity: 0; }
  100% { transform: translateX(300px); opacity: 0; }
`,J=i.default.div`
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
  animation: ${q} ${({delay:e})=>e}s ease-out infinite;

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
`,A=i.default.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.w4.spacing.lg};
  animation: ${B} 0.5s ease 0.35s both;
`,V=[{x:4,y:10,size:1.5,delay:.2,dur:3.1},{x:12,y:80,size:2,delay:1.4,dur:4},{x:22,y:25,size:2.5,delay:.6,dur:3.5},{x:35,y:70,size:1.5,delay:2,dur:4.3},{x:48,y:15,size:2,delay:.9,dur:3.2},{x:58,y:85,size:1.5,delay:1.7,dur:3.9},{x:68,y:35,size:2,delay:2.5,dur:4.1},{x:78,y:60,size:2.5,delay:.3,dur:3.4},{x:88,y:20,size:1.5,delay:1.1,dur:3.7},{x:94,y:75,size:2,delay:2.3,dur:4.5}],I=i.default.h2`
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
  animation: ${G} 4s linear infinite;
`,Q=[{x:3,y:5,size:1.5,delay:0,dur:3.2},{x:8,y:35,size:2,delay:1.8,dur:3.4},{x:12,y:70,size:1.5,delay:.6,dur:4.1},{x:18,y:15,size:2.5,delay:2.4,dur:3},{x:22,y:55,size:1.5,delay:.3,dur:4.5},{x:28,y:88,size:2,delay:1.1,dur:3.6},{x:33,y:25,size:1.5,delay:2.8,dur:4},{x:40,y:60,size:2,delay:.9,dur:3.3},{x:45,y:8,size:2.5,delay:1.5,dur:3.8},{x:50,y:45,size:1.5,delay:2.1,dur:4.3},{x:55,y:78,size:2,delay:.4,dur:3.1},{x:60,y:18,size:1.5,delay:1.7,dur:4.6},{x:65,y:50,size:2.5,delay:2.6,dur:3.5},{x:70,y:85,size:1.5,delay:.2,dur:3.9},{x:75,y:30,size:2,delay:1.3,dur:4.2},{x:80,y:65,size:1.5,delay:2.9,dur:3.7},{x:85,y:10,size:2,delay:.7,dur:3.4},{x:88,y:42,size:2.5,delay:1.9,dur:4.4},{x:92,y:75,size:1.5,delay:.5,dur:3.2},{x:96,y:22,size:2,delay:2.3,dur:3.8}],_=i.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: ${s.w4.spacing.xl} ${s.w4.spacing.lg};
  padding-top: 24px;
  background: linear-gradient(
    168deg,
    ${({accentColor:e})=>e}0a 0%,
    ${s.w4.colors.surface} 45%,
    ${s.w4.colors.surface} 100%
  );
  border: 1px solid ${({accentColor:e})=>e}30;
  border-radius: ${s.w4.borderRadius.lg};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
  font-family: ${s.w4.typography.fontFamily};
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
      ${s.w4.colors.surfaceRaised} 45%,
      ${s.w4.colors.surfaceRaised} 100%
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
    animation: ${R} 0.8s ease-out;
  }
  &:hover .card-emoji {
    animation: ${M} 1.5s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`,H=i.default.span`
  font-size: 48px;
  line-height: 1;
  animation: ${S} 3s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.1));
  transition: filter 0.3s;
`,D=i.default.span`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
`,K=i.default.span`
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.4;
`,U=(i.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  flex-shrink: 0;
`,i.default.button`
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
`,i.default.button`
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
`),Z=i.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,ee={pt:"O que vamos aprender hoje?",en:"What shall we learn today?"},ae={pt:"Escolhe uma disciplina para começar",en:"Pick a subject to get started"};function te({topBarRight:e}){const[a,t]=(0,o.useState)(E),[i]=(0,l.Ym)(),n="pt"===i?"pt":"en";if((0,o.useEffect)(()=>{const e=()=>t(E());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),!a)return(0,P.jsx)(s.PE,{title:"School",sidebar:null,topBarRight:e,children:(0,P.jsxs)(W,{children:[Q.map((e,a)=>(0,P.jsx)(O,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,P.jsx)(J,{top:15,delay:12}),(0,P.jsx)(J,{top:55,delay:25}),(0,P.jsx)(N,{children:ee[n]}),(0,P.jsx)(Y,{children:ae[n]}),(0,P.jsx)(L,{children:"pt"===n?"Disciplinas":"Subjects"}),(0,P.jsx)(F,{columns:4,children:T.map((e,a)=>(0,P.jsxs)(_,{accentColor:e.color,onClick:()=>{t(e.key),window.location.hash=`#/${e.hashPrefix}`},children:[(0,P.jsx)(H,{className:"card-emoji",delay:.4*a,children:e.emoji}),(0,P.jsx)(D,{children:e.label[n]}),(0,P.jsx)(K,{children:e.description[n]})]},e.key))}),(0,P.jsxs)(A,{children:[V.map((e,a)=>(0,P.jsx)(O,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,P.jsx)(I,{children:"pt"===n?"Jogos":"Games"}),(0,P.jsxs)(F,{columns:3,children:[(0,P.jsxs)(_,{accentColor:"#f97583",onClick:()=>{t("lebem"),window.location.hash="#/lebem"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:1.2,children:"🎮"}),(0,P.jsx)(D,{children:"pt"===n?"Ler a Brincar":"Read & Play"}),(0,P.jsx)(K,{children:"pt"===n?"Aprende a ler com jogos divertidos":"Learn to read with fun games"})]}),(0,P.jsxs)(_,{accentColor:"#8b5cf6",onClick:()=>{t("tictactoe"),window.location.hash="#/tictactoe"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:1.6,children:"❌⭕"}),(0,P.jsx)(D,{children:"pt"===n?"Jogo do Galo":"Tic Tac Toe"}),(0,P.jsx)(K,{children:"pt"===n?"Joga contra o robot ou um amigo!":"Play against the robot or a friend!"})]}),(0,P.jsxs)(_,{accentColor:"#f59e0b",onClick:()=>{t("soundhunter"),window.location.hash="#/soundhunter"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:2,children:"🎤"}),(0,P.jsx)(D,{children:"pt"===n?"Caçador de Sons":"Sound Hunter"}),(0,P.jsx)(K,{children:"pt"===n?"Grava sons pela casa e completa missões":"Record sounds around the house"})]}),(0,P.jsxs)(_,{accentColor:"#3b82f6",onClick:()=>{t("familyquiz"),window.location.hash="#/familyquiz"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:2.4,children:"🧠"}),(0,P.jsx)(D,{children:"pt"===n?"Quiz da Família":"Family Quiz"}),(0,P.jsx)(K,{children:"pt"===n?"Perguntas divertidas para toda a família":"Fun trivia for the whole family"})]}),(0,P.jsxs)(_,{accentColor:"#10b981",onClick:()=>{t("adventure"),window.location.hash="#/adventure"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:2.8,children:"🏰"}),(0,P.jsx)(D,{children:"pt"===n?"Aventura de Texto":"Text Adventure"}),(0,P.jsx)(K,{children:"pt"===n?"Escolhe o teu caminho na história":"Choose your own path in the story"})]}),(0,P.jsxs)(_,{accentColor:"#ef4444",onClick:()=>{t("missions"),window.location.hash="#/missions"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:3.2,children:"🎯"}),(0,P.jsx)(D,{children:"pt"===n?"Gestor de Missões":"Mission Manager"}),(0,P.jsx)(K,{children:"pt"===n?"Completa missões do dia e sobe de nível":"Complete daily missions and level up"})]}),(0,P.jsxs)(_,{accentColor:"#ec4899",onClick:()=>{t("pixelboard"),window.location.hash="#/pixelboard"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:3.6,children:"🎨"}),(0,P.jsx)(D,{children:"pt"===n?"Tabuleiro de Pixels":"Pixel Board"}),(0,P.jsx)(K,{children:"pt"===n?"Cria desenhos pixel a pixel":"Create pixel art drawings"})]}),(0,P.jsxs)(_,{accentColor:"#f59e0b",onClick:()=>{t("stopgame"),window.location.hash="#/stopgame"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:4,children:"🛑"}),(0,P.jsx)(D,{children:"Stop!"}),(0,P.jsx)(K,{children:"pt"===n?"Escolhe categorias e diz STOP!":"Pick categories and say STOP!"})]}),(0,P.jsxs)(_,{accentColor:"#8b5cf6",onClick:()=>{t("spotit"),window.location.hash="#/spotit"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:4.4,children:"🃏"}),(0,P.jsx)(D,{children:"pt"===n?"Encontra o Par!":"Spot It!"}),(0,P.jsx)(K,{children:"pt"===n?"Encontra o símbolo igual nas duas cartas":"Find the matching symbol on both cards"})]}),(0,P.jsxs)(_,{accentColor:"#06b6d4",onClick:()=>{t("memory"),window.location.hash="#/memory"},children:[(0,P.jsx)(H,{className:"card-emoji",delay:4.8,children:"🧠"}),(0,P.jsx)(D,{children:"pt"===n?"Jogo da Memória":"Memory Game"}),(0,P.jsx)(K,{children:"pt"===n?"Vira as cartas e encontra os pares!":"Flip cards and find the pairs!"})]})]})]})]})});const d=(0,P.jsxs)(Z,{children:[(0,P.jsxs)(U,{onClick:()=>{t(null),window.location.hash="#/school"},children:["← ","pt"===n?"Disciplinas":"Subjects"]}),e]});if("lebem"===a)return(0,P.jsx)(s.PE,{title:"LêBem",sidebar:null,topBarRight:d,children:(0,P.jsx)(f.f,{onBack:()=>{t(null),window.location.hash="#/school"}})});if("tictactoe"===a)return(0,P.jsx)(s.PE,{title:"pt"===n?"Jogo do Galo":"Tic Tac Toe",sidebar:null,topBarRight:d,children:(0,P.jsx)(y.t,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});if("soundhunter"===a)return(0,P.jsx)(s.PE,{title:"pt"===n?"Caçador de Sons":"Sound Hunter",sidebar:null,topBarRight:d,children:(0,P.jsx)(w.m,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});if("familyquiz"===a)return(0,P.jsx)(s.PE,{title:"pt"===n?"Quiz da Família":"Family Quiz",sidebar:null,topBarRight:d,children:(0,P.jsx)(b.i,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});if("adventure"===a)return(0,P.jsx)(s.PE,{title:"pt"===n?"Aventura de Texto":"Text Adventure",sidebar:null,topBarRight:d,children:(0,P.jsx)(j.a,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});if("missions"===a)return(0,P.jsx)(s.PE,{title:"pt"===n?"Missões":"Missions",sidebar:null,topBarRight:d,children:(0,P.jsx)(k.K,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});if("pixelboard"===a)return(0,P.jsx)(s.PE,{title:"pt"===n?"Tabuleiro de Pixels":"Pixel Board",sidebar:null,topBarRight:d,children:(0,P.jsx)($.H,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});if("stopgame"===a)return(0,P.jsx)(s.PE,{title:"Stop!",sidebar:null,topBarRight:d,children:(0,P.jsx)(z.z,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});if("spotit"===a)return(0,P.jsx)(s.PE,{title:"pt"===n?"Encontra o Par!":"Spot It!",sidebar:null,topBarRight:d,children:(0,P.jsx)(v.O,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});if("memory"===a)return(0,P.jsx)(s.PE,{title:"pt"===n?"Jogo da Memória":"Memory Game",sidebar:null,topBarRight:d,children:(0,P.jsx)(C.Y,{lang:n,onBack:()=>{t(null),window.location.hash="#/school"}})});const c=T.find(e=>e.key===a);return(0,P.jsx)(r.WO,{hashPrefix:c.hashPrefix,defaultLang:"pt",locale:i,languages:c.languages,welcomeTitle:c.welcomeTitle,welcomeSub:c.welcomeSub,topBarRight:d},a)}}}]);
//# sourceMappingURL=6036.f48fa6fcda651dff96cd.js.map