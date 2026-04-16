"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([[188],{20188(e,a,o){var t=o(58997),i=o(27359),n=o(53233),r=o(77207),s=o(9752),l=o(60894),d=o(30894),c=o(87891),p=o(81664),h=o(39360),u=o(31103),m=o(37877),x=o(6662),g=o(94831),f=o(10388),y=o(63594),w=o(80273),b=o(82742),j=o(90818),k=o(56574),$=o(71442),z=o(43065),v=o(51623),C=o(37566),P=o(35758),T=o(65723);const E=[{key:"math",hashPrefix:"math",label:{pt:"Matemática",en:"Maths"},description:{pt:"Números, contas e problemas",en:"Numbers, sums & problems"},emoji:"🔢",color:"#58a6ff",languages:{pt:{label:"PT",navigation:c},en:{label:"EN",navigation:p}},welcomeTitle:{pt:"Matemática",en:"Mathematics"},welcomeSub:{pt:"Exercícios e conteúdos do 1.º ao 4.º ano — escolhe um tema no menu.",en:"Exercises and content from Year 1 to 4 — pick a topic from the sidebar."}},{key:"portuguese",hashPrefix:"portugues",label:{pt:"Português",en:"Portuguese"},description:{pt:"Leitura, escrita e gramática",en:"Reading, writing & grammar"},emoji:"📖",color:"#3fb950",languages:{pt:{label:"PT",navigation:h},en:{label:"EN",navigation:u}},welcomeTitle:{pt:"Português",en:"Portuguese"},welcomeSub:{pt:"Leitura, escrita e gramática do 1.º ao 4.º ano — escolhe um tema no menu.",en:"Reading, writing, and grammar from Year 1 to 4 — pick a topic from the sidebar."}},{key:"science",hashPrefix:"estudodomeio",label:{pt:"Estudo do Meio",en:"Science"},description:{pt:"O mundo a nossa volta",en:"The world around us"},emoji:"🌍",color:"#d29922",languages:{pt:{label:"PT",navigation:m},en:{label:"EN",navigation:x}},welcomeTitle:{pt:"Estudo do Meio",en:"Environmental Studies"},welcomeSub:{pt:"O mundo natural e social do 1.º ao 4.º ano — escolhe um tema no menu.",en:"The natural and social world from Year 1 to 4 — pick a topic from the sidebar."}},{key:"english",hashPrefix:"english",label:{pt:"Inglês",en:"English"},description:{pt:"Vocabulário, gramática e conversação",en:"Vocabulary, grammar & conversation"},emoji:"🇬🇧",color:"#e05252",languages:{pt:{label:"PT",navigation:g},en:{label:"EN",navigation:f}},welcomeTitle:{pt:"Inglês",en:"English"},welcomeSub:{pt:"Vocabulário, gramática e conversação do 1.º ao 5.º ano — escolhe um tema no menu.",en:"Vocabulary, grammar and conversation from Year 1 to 5 — pick a topic from the sidebar."}}];function S(){const e=window.location.hash.toLowerCase();return e.startsWith("#/math")?"math":e.startsWith("#/portugues")?"portuguese":e.startsWith("#/estudodomeio")?"science":e.startsWith("#/english")||e.startsWith("#/ingles")?"english":e.startsWith("#/leitor")||e.startsWith("#/lebem")?"lebem":e.startsWith("#/tictactoe")||e.startsWith("#/galo")?"tictactoe":e.startsWith("#/soundhunter")?"soundhunter":e.startsWith("#/familyquiz")?"familyquiz":e.startsWith("#/adventure")?"adventure":e.startsWith("#/missions")?"missions":e.startsWith("#/pixelboard")?"pixelboard":e.startsWith("#/stopgame")?"stopgame":e.startsWith("#/spotit")?"spotit":e.startsWith("#/memory")?"memory":null}const B=r.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`,R=r.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,M=r.keyframes`
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
`,W=r.keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-4px) scale(1.08); }
`,N=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${l.w4.spacing.xl};
  gap: ${l.w4.spacing.xl};
  overflow: hidden auto;
  position: relative;
  background:
    radial-gradient(ellipse 60% 50% at 20% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 80% 70%, rgba(249, 117, 131, 0.04) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 50% 50%, rgba(121, 192, 255, 0.03) 0%, transparent 70%),
    #080b12;
`,Y=n.default.h1`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${R} 0.5s ease both;
`,F=n.default.p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  animation: ${R} 0.5s ease 0.1s both;
`,L=n.default.div`
  display: grid;
  grid-template-columns: repeat(${({columns:e})=>e??3}, 1fr);
  gap: ${l.w4.spacing.lg};
  max-width: 880px;
  width: 100%;
  position: relative;
  z-index: 1;
  animation: ${R} 0.5s ease 0.2s both;

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 480px;
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
`,X=n.default.h2`
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${l.w4.colors.mainTextMuted};
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${R} 0.5s ease 0.25s both;
`,G=r.keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%      { opacity: 0.9; transform: scale(1.2); }
`,O=r.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,q=n.default.div`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: white;
  animation: ${G} ${({dur:e})=>e}s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,J=r.keyframes`
  0%   { transform: translateX(0); opacity: 0; }
  2%   { opacity: 1; }
  15%  { opacity: 0.6; }
  20%  { transform: translateX(300px); opacity: 0; }
  100% { transform: translateX(300px); opacity: 0; }
`,A=n.default.div`
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
  animation: ${J} ${({delay:e})=>e}s ease-out infinite;

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
`,H=n.default.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.lg};
  animation: ${R} 0.5s ease 0.35s both;
`,I=[{x:4,y:10,size:1.5,delay:.2,dur:3.1},{x:12,y:80,size:2,delay:1.4,dur:4},{x:22,y:25,size:2.5,delay:.6,dur:3.5},{x:35,y:70,size:1.5,delay:2,dur:4.3},{x:48,y:15,size:2,delay:.9,dur:3.2},{x:58,y:85,size:1.5,delay:1.7,dur:3.9},{x:68,y:35,size:2,delay:2.5,dur:4.1},{x:78,y:60,size:2.5,delay:.3,dur:3.4},{x:88,y:20,size:1.5,delay:1.1,dur:3.7},{x:94,y:75,size:2,delay:2.3,dur:4.5}],V=n.default.h2`
  font-size: ${l.w4.typography.fontSizeSm};
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
  animation: ${O} 4s linear infinite;
`,Q=[{x:3,y:5,size:1.5,delay:0,dur:3.2},{x:8,y:35,size:2,delay:1.8,dur:3.4},{x:12,y:70,size:1.5,delay:.6,dur:4.1},{x:18,y:15,size:2.5,delay:2.4,dur:3},{x:22,y:55,size:1.5,delay:.3,dur:4.5},{x:28,y:88,size:2,delay:1.1,dur:3.6},{x:33,y:25,size:1.5,delay:2.8,dur:4},{x:40,y:60,size:2,delay:.9,dur:3.3},{x:45,y:8,size:2.5,delay:1.5,dur:3.8},{x:50,y:45,size:1.5,delay:2.1,dur:4.3},{x:55,y:78,size:2,delay:.4,dur:3.1},{x:60,y:18,size:1.5,delay:1.7,dur:4.6},{x:65,y:50,size:2.5,delay:2.6,dur:3.5},{x:70,y:85,size:1.5,delay:.2,dur:3.9},{x:75,y:30,size:2,delay:1.3,dur:4.2},{x:80,y:65,size:1.5,delay:2.9,dur:3.7},{x:85,y:10,size:2,delay:.7,dur:3.4},{x:88,y:42,size:2.5,delay:1.9,dur:4.4},{x:92,y:75,size:1.5,delay:.5,dur:3.2},{x:96,y:22,size:2,delay:2.3,dur:3.8}],_=n.default.button`
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
    animation: ${M} 0.8s ease-out;
  }
  &:hover .card-emoji {
    animation: ${W} 1.5s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`,D=n.default.span`
  font-size: 48px;
  line-height: 1;
  animation: ${B} 3s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.1));
  transition: filter 0.3s;
`,K=n.default.span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,U=n.default.span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.4;
`,Z=(n.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  flex-shrink: 0;
`,n.default.button`
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
`,n.default.button`
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
`),ee=n.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,ae={pt:"O que vamos aprender hoje?",en:"What shall we learn today?"},oe={pt:"Escolhe uma disciplina para começar",en:"Pick a subject to get started"};function te({topBarRight:e}){const[a,o]=(0,i.useState)(S),[t]=(0,d.Ym)(),n="pt"===t?"pt":"en";if((0,i.useEffect)(()=>{const e=()=>o(S());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),!a)return(0,T.jsx)(l.PE,{title:"School",sidebar:null,topBarRight:e,children:(0,T.jsxs)(N,{children:[Q.map((e,a)=>(0,T.jsx)(q,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,T.jsx)(A,{top:15,delay:12}),(0,T.jsx)(A,{top:55,delay:25}),(0,T.jsx)(Y,{children:ae[n]}),(0,T.jsx)(F,{children:oe[n]}),(0,T.jsx)(X,{children:"pt"===n?"Disciplinas":"Subjects"}),(0,T.jsx)(L,{columns:4,children:E.map((e,a)=>(0,T.jsxs)(_,{accentColor:e.color,onClick:()=>{o(e.key),window.location.hash=`#/${e.hashPrefix}`},children:[(0,T.jsx)(D,{className:"card-emoji",delay:.4*a,children:e.emoji}),(0,T.jsx)(K,{children:e.label[n]}),(0,T.jsx)(U,{children:e.description[n]})]},e.key))}),(0,T.jsxs)(H,{children:[I.map((e,a)=>(0,T.jsx)(q,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,T.jsx)(V,{children:"pt"===n?"Jogos":"Games"}),(0,T.jsxs)(L,{columns:3,children:[(0,T.jsxs)(_,{accentColor:"#f97583",onClick:()=>{o("lebem"),window.location.hash="#/lebem"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:1.2,children:"🎮"}),(0,T.jsx)(K,{children:"pt"===n?"Ler a Brincar":"Read & Play"}),(0,T.jsx)(U,{children:"pt"===n?"Aprende a ler com jogos divertidos":"Learn to read with fun games"})]}),(0,T.jsxs)(_,{accentColor:"#8b5cf6",onClick:()=>{o("tictactoe"),window.location.hash="#/tictactoe"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:1.6,children:"❌⭕"}),(0,T.jsx)(K,{children:"pt"===n?"Jogo do Galo":"Tic Tac Toe"}),(0,T.jsx)(U,{children:"pt"===n?"Joga contra o robot ou um amigo!":"Play against the robot or a friend!"})]}),(0,T.jsxs)(_,{accentColor:"#f59e0b",onClick:()=>{o("soundhunter"),window.location.hash="#/soundhunter"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:2,children:"🎤"}),(0,T.jsx)(K,{children:"pt"===n?"Caçador de Sons":"Sound Hunter"}),(0,T.jsx)(U,{children:"pt"===n?"Grava sons pela casa e completa missões":"Record sounds around the house"})]}),(0,T.jsxs)(_,{accentColor:"#3b82f6",onClick:()=>{o("familyquiz"),window.location.hash="#/familyquiz"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:2.4,children:"🧠"}),(0,T.jsx)(K,{children:"pt"===n?"Quiz da Família":"Family Quiz"}),(0,T.jsx)(U,{children:"pt"===n?"Perguntas divertidas para toda a família":"Fun trivia for the whole family"})]}),(0,T.jsxs)(_,{accentColor:"#10b981",onClick:()=>{o("adventure"),window.location.hash="#/adventure"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:2.8,children:"🏰"}),(0,T.jsx)(K,{children:"pt"===n?"Aventura de Texto":"Text Adventure"}),(0,T.jsx)(U,{children:"pt"===n?"Escolhe o teu caminho na história":"Choose your own path in the story"})]}),(0,T.jsxs)(_,{accentColor:"#ef4444",onClick:()=>{o("missions"),window.location.hash="#/missions"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:3.2,children:"🎯"}),(0,T.jsx)(K,{children:"pt"===n?"Gestor de Missões":"Mission Manager"}),(0,T.jsx)(U,{children:"pt"===n?"Completa missões do dia e sobe de nível":"Complete daily missions and level up"})]}),(0,T.jsxs)(_,{accentColor:"#ec4899",onClick:()=>{o("pixelboard"),window.location.hash="#/pixelboard"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:3.6,children:"🎨"}),(0,T.jsx)(K,{children:"pt"===n?"Tabuleiro de Pixels":"Pixel Board"}),(0,T.jsx)(U,{children:"pt"===n?"Cria desenhos pixel a pixel":"Create pixel art drawings"})]}),(0,T.jsxs)(_,{accentColor:"#f59e0b",onClick:()=>{o("stopgame"),window.location.hash="#/stopgame"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:4,children:"🛑"}),(0,T.jsx)(K,{children:"Stop!"}),(0,T.jsx)(U,{children:"pt"===n?"Escolhe categorias e diz STOP!":"Pick categories and say STOP!"})]}),(0,T.jsxs)(_,{accentColor:"#8b5cf6",onClick:()=>{o("spotit"),window.location.hash="#/spotit"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:4.4,children:"🃏"}),(0,T.jsx)(K,{children:"pt"===n?"Encontra o Par!":"Spot It!"}),(0,T.jsx)(U,{children:"pt"===n?"Encontra o símbolo igual nas duas cartas":"Find the matching symbol on both cards"})]}),(0,T.jsxs)(_,{accentColor:"#06b6d4",onClick:()=>{o("memory"),window.location.hash="#/memory"},children:[(0,T.jsx)(D,{className:"card-emoji",delay:4.8,children:"🧠"}),(0,T.jsx)(K,{children:"pt"===n?"Jogo da Memória":"Memory Game"}),(0,T.jsx)(U,{children:"pt"===n?"Vira as cartas e encontra os pares!":"Flip cards and find the pairs!"})]})]})]})]})});const r=(0,T.jsxs)(ee,{children:[(0,T.jsxs)(Z,{onClick:()=>{o(null),window.location.hash="#/school"},children:["← ","pt"===n?"Disciplinas":"Subjects"]}),e]});if("lebem"===a)return(0,T.jsx)(l.PE,{title:"LêBem",sidebar:null,topBarRight:r,children:(0,T.jsx)(y.f,{onBack:()=>{o(null),window.location.hash="#/school"}})});if("tictactoe"===a)return(0,T.jsx)(l.PE,{title:"pt"===n?"Jogo do Galo":"Tic Tac Toe",sidebar:null,topBarRight:r,children:(0,T.jsx)(w.t,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});if("soundhunter"===a)return(0,T.jsx)(l.PE,{title:"pt"===n?"Caçador de Sons":"Sound Hunter",sidebar:null,topBarRight:r,children:(0,T.jsx)(b.m,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});if("familyquiz"===a)return(0,T.jsx)(l.PE,{title:"pt"===n?"Quiz da Família":"Family Quiz",sidebar:null,topBarRight:r,children:(0,T.jsx)(j.i,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});if("adventure"===a)return(0,T.jsx)(l.PE,{title:"pt"===n?"Aventura de Texto":"Text Adventure",sidebar:null,topBarRight:r,children:(0,T.jsx)(k.a,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});if("missions"===a)return(0,T.jsx)(l.PE,{title:"pt"===n?"Missões":"Missions",sidebar:null,topBarRight:r,children:(0,T.jsx)($.K,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});if("pixelboard"===a)return(0,T.jsx)(l.PE,{title:"pt"===n?"Tabuleiro de Pixels":"Pixel Board",sidebar:null,topBarRight:r,children:(0,T.jsx)(z.H,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});if("stopgame"===a)return(0,T.jsx)(l.PE,{title:"Stop!",sidebar:null,topBarRight:r,children:(0,T.jsx)(v.z,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});if("spotit"===a)return(0,T.jsx)(l.PE,{title:"pt"===n?"Encontra o Par!":"Spot It!",sidebar:null,topBarRight:r,children:(0,T.jsx)(C.O,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});if("memory"===a)return(0,T.jsx)(l.PE,{title:"pt"===n?"Jogo da Memória":"Memory Game",sidebar:null,topBarRight:r,children:(0,T.jsx)(P.Y,{lang:n,onBack:()=>{o(null),window.location.hash="#/school"}})});const c=E.find(e=>e.key===a);return(0,T.jsx)(s.WO,{hashPrefix:c.hashPrefix,defaultLang:"pt",locale:t,languages:c.languages,welcomeTitle:c.welcomeTitle,welcomeSub:c.welcomeSub,topBarRight:r},a)}const ie=document.getElementById("root");if(!ie)throw new Error("Root element #root not found");(0,t.H)(ie).render((0,T.jsx)(te,{}))},58997(e,a,o){var t=o(48991);a.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.9fe7e9cfcde174ce5f4f.js.map