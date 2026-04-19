"use strict";(self.webpackChunk_atlantis_games=self.webpackChunk_atlantis_games||[]).push([[188],{188(e,a,t){var o=t(8997),i=t(7359),n=t(3233),r=t(7207),s=t(9200),l=t(8813),d=t(894),c=t(3594),p=t(273),m=t(2742),h=t(818),u=t(6574),y=t(3065),x=t(1623),b=t(7566),g=t(5758),f=t(4425),w=t(782),j=t(2524),k=t(4204),z=t(2708),v=t(8022),P=t(5693),$=t(3054),B=t(9253),C=t(5723);function S(){const e=window.location.hash.toLowerCase();return e.startsWith("#/leitor")||e.startsWith("#/lebem")?"lebem":e.startsWith("#/tictactoe")||e.startsWith("#/galo")?"tictactoe":e.startsWith("#/soundhunter")?"soundhunter":e.startsWith("#/familyquiz")?"familyquiz":e.startsWith("#/adventure")?"adventure":e.startsWith("#/pixelboard")?"pixelboard":e.startsWith("#/stopgame")?"stopgame":e.startsWith("#/spotit")?"spotit":e.startsWith("#/memory")?"memory":e.startsWith("#/tapit")?"tapit":e.startsWith("#/jumpparty")?"jumpparty":e.startsWith("#/drawguess")?"drawguess":e.startsWith("#/animalarena")?"animalarena":e.startsWith("#/crazykitchen")?"crazykitchen":e.startsWith("#/miniparty")?"miniparty":e.startsWith("#/hideseek")?"hideseek":e.startsWith("#/buttonmayhem")?"buttonmayhem":e.startsWith("#/bombbrawl")?"bombbrawl":null}const E=[{id:"lebem",hash:"#/lebem",emoji:"🎮",color:"#f97583",maxPlayers:1,online:!1,label:{pt:"Ler a Brincar",en:"Read & Play"},description:{pt:"Aprende a ler com jogos divertidos",en:"Learn to read with fun games"},title:{pt:"LêBem",en:"LêBem"}},{id:"tictactoe",hash:"#/tictactoe",emoji:"❌⭕",color:"#8b5cf6",maxPlayers:2,online:!0,label:{pt:"Jogo do Galo",en:"Tic Tac Toe"},description:{pt:"Joga contra o robot ou um amigo!",en:"Play against the robot or a friend!"},title:{pt:"Jogo do Galo",en:"Tic Tac Toe"}},{id:"soundhunter",hash:"#/soundhunter",emoji:"🎤",color:"#f59e0b",maxPlayers:1,online:!1,label:{pt:"Caçador de Sons",en:"Sound Hunter"},description:{pt:"Grava sons pela casa e completa missões",en:"Record sounds around the house"},title:{pt:"Caçador de Sons",en:"Sound Hunter"}},{id:"familyquiz",hash:"#/familyquiz",emoji:"🧠",color:"#3b82f6",maxPlayers:8,online:!0,label:{pt:"Quiz da Família",en:"Family Quiz"},description:{pt:"Perguntas divertidas para toda a família",en:"Fun trivia for the whole family"},title:{pt:"Quiz da Família",en:"Family Quiz"}},{id:"adventure",hash:"#/adventure",emoji:"🏰",color:"#10b981",maxPlayers:1,online:!1,label:{pt:"Aventura de Texto",en:"Text Adventure"},description:{pt:"Escolhe o teu caminho na história",en:"Choose your own path in the story"},title:{pt:"Aventura de Texto",en:"Text Adventure"}},{id:"pixelboard",hash:"#/pixelboard",emoji:"🎨",color:"#ec4899",maxPlayers:1,online:!1,label:{pt:"Tabuleiro de Pixels",en:"Pixel Board"},description:{pt:"Cria desenhos pixel a pixel",en:"Create pixel art drawings"},title:{pt:"Tabuleiro de Pixels",en:"Pixel Board"}},{id:"stopgame",hash:"#/stopgame",emoji:"🛑",color:"#f59e0b",maxPlayers:8,online:!0,label:{pt:"Stop!",en:"Stop!"},description:{pt:"Escolhe categorias e diz STOP!",en:"Pick categories and say STOP!"},title:{pt:"Stop!",en:"Stop!"}},{id:"spotit",hash:"#/spotit",emoji:"🃏",color:"#8b5cf6",maxPlayers:8,online:!0,label:{pt:"Encontra o Par!",en:"Spot It!"},description:{pt:"Encontra o símbolo igual nas duas cartas",en:"Find the matching symbol on both cards"},title:{pt:"Encontra o Par!",en:"Spot It!"}},{id:"memory",hash:"#/memory",emoji:"🧠",color:"#06b6d4",maxPlayers:6,online:!0,label:{pt:"Jogo da Memória",en:"Memory Game"},description:{pt:"Vira as cartas e encontra os pares!",en:"Flip cards and find the pairs!"},title:{pt:"Jogo da Memória",en:"Memory Game"}},{id:"tapit",hash:"#/tapit",emoji:"🎯",color:"#f97583",maxPlayers:8,online:!0,label:{pt:"Toca no Certo!",en:"Tap It!"},description:{pt:"Encontra o símbolo certo o mais rápido!",en:"Find the right symbol fast!"},title:{pt:"Toca no Certo!",en:"Tap It!"}},{id:"jumpparty",hash:"#/jumpparty",emoji:"🐸",color:"#3fb950",maxPlayers:1,online:!1,label:{pt:"Salta!",en:"Jump!"},description:{pt:"Salta sobre os obstáculos!",en:"Jump over obstacles!"},title:{pt:"Salta!",en:"Jump!"}},{id:"drawguess",hash:"#/drawguess",emoji:"🎨",color:"#d2a8ff",maxPlayers:8,online:!0,label:{pt:"Desenha e Adivinha!",en:"Draw & Guess!"},description:{pt:"Um desenha, os outros adivinham!",en:"One draws, others guess!"},title:{pt:"Desenha e Adivinha!",en:"Draw & Guess!"}},{id:"animalarena",hash:"#/animalarena",emoji:"🥋",color:"#ef4444",maxPlayers:1,online:!1,label:{pt:"Sumo Zoo",en:"Sumo Zoo"},description:{pt:"Empurra os outros para fora!",en:"Bump others off!"},title:{pt:"Sumo Zoo",en:"Sumo Zoo"}},{id:"crazykitchen",hash:"#/crazykitchen",emoji:"👨‍🍳",color:"#f59e0b",maxPlayers:1,online:!1,label:{pt:"Cozinha Louca!",en:"Crazy Kitchen!"},description:{pt:"Prepara as encomendas a tempo!",en:"Fill orders before time runs out!"},title:{pt:"Cozinha Louca!",en:"Crazy Kitchen!"}},{id:"miniparty",hash:"#/miniparty",emoji:"🎉",color:"#58a6ff",maxPlayers:1,online:!1,label:{pt:"Mini Festa!",en:"Mini Party!"},description:{pt:"5 mini-jogos rápidos e loucos!",en:"5 quick crazy mini-games!"},title:{pt:"Mini Festa!",en:"Mini Party!"}},{id:"hideseek",hash:"#/hideseek",emoji:"🔍",color:"#10b981",maxPlayers:1,online:!1,label:{pt:"Esconde-Esconde!",en:"Hide & Seek!"},description:{pt:"Disfarça-te e vê se te encontram!",en:"Disguise & find the hidden one!"},title:{pt:"Esconde-Esconde!",en:"Hide & Seek!"}},{id:"buttonmayhem",hash:"#/buttonmayhem",emoji:"🎲",color:"#a855f7",maxPlayers:1,online:!1,label:{pt:"Botão Maluco!",en:"Button Mayhem!"},description:{pt:"Cada ronda uma regra diferente!",en:"Different rule every round!"},title:{pt:"Botão Maluco!",en:"Button Mayhem!"}},{id:"bombbrawl",hash:"#/bombbrawl",emoji:"💣",color:"#ff4444",maxPlayers:4,online:!0,label:{pt:"BombBrawl!",en:"BombBrawl!"},description:{pt:"Coloca bombas e sê o último de pé!",en:"Drop bombs & be the last one standing!"},title:{pt:"BombBrawl",en:"BombBrawl"}}],O=r.keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,T=r.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,M=r.keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%      { opacity: 0.9; transform: scale(1.2); }
`,W=r.keyframes`
  0%   { transform: translateX(0); opacity: 0; }
  2%   { opacity: 1; }
  15%  { opacity: 0.6; }
  20%  { transform: translateX(300px); opacity: 0; }
  100% { transform: translateX(300px); opacity: 0; }
`,G=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${s.w4.spacing.xl} ${s.w4.spacing.xl} ${s.w4.spacing.xxl};
  gap: ${s.w4.spacing.xl};
  overflow-y: auto;
  position: relative;
  background:
    radial-gradient(ellipse 60% 50% at 20% 30%, rgba(249, 117, 131, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 80% 70%, rgba(139, 92, 246, 0.04) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 50% 50%, rgba(121, 192, 255, 0.03) 0%, transparent 70%),
    #080b12;
`,L=n.default.h1`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${s.w4.colors.mainText};
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${O} 0.5s ease both;
  background: linear-gradient(90deg, #f97583, #d2a8ff, #79c0ff, #f97583);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${O} 0.5s ease both, ${T} 6s linear infinite;
`,J=n.default.p`
  font-size: ${s.w4.typography.fontSizeMd};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  animation: ${O} 0.5s ease 0.1s both;
`,A=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${s.w4.spacing.lg};
  max-width: 880px;
  width: 100%;
  position: relative;
  z-index: 1;
  animation: ${O} 0.5s ease 0.2s both;

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 480px;
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
`,F=n.default.div`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: white;
  animation: ${M} ${({dur:e})=>e}s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,R=n.default.div`
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
  animation: ${W} ${({delay:e})=>e}s ease-out infinite;

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
`,D=n.default.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 1;
  animation: ${O} 0.5s ease 0.15s both;
`,H=n.default.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1.5px solid ${({active:e,chipColor:a})=>e?a??s.w4.colors.accent:s.w4.colors.border};
  background: ${({active:e,chipColor:a})=>e?(a??s.w4.colors.accent)+"18":"transparent"};
  color: ${({active:e,chipColor:a})=>e?a??s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 36px;
  &:hover {
    border-color: ${({chipColor:e})=>e??s.w4.colors.accent};
    color: ${({chipColor:e})=>e??s.w4.colors.accent};
  }
`,q=n.default.button`
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
`,I=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,Q=[{x:3,y:5,size:1.5,delay:0,dur:3.2},{x:8,y:35,size:2,delay:1.8,dur:3.4},{x:12,y:70,size:1.5,delay:.6,dur:4.1},{x:18,y:15,size:2.5,delay:2.4,dur:3},{x:22,y:55,size:1.5,delay:.3,dur:4.5},{x:28,y:88,size:2,delay:1.1,dur:3.6},{x:33,y:25,size:1.5,delay:2.8,dur:4},{x:40,y:60,size:2,delay:.9,dur:3.3},{x:45,y:8,size:2.5,delay:1.5,dur:3.8},{x:50,y:45,size:1.5,delay:2.1,dur:4.3},{x:55,y:78,size:2,delay:.4,dur:3.1},{x:60,y:18,size:1.5,delay:1.7,dur:4.6},{x:65,y:50,size:2.5,delay:2.6,dur:3.5},{x:70,y:85,size:1.5,delay:.2,dur:3.9},{x:75,y:30,size:2,delay:1.3,dur:4.2},{x:80,y:65,size:1.5,delay:2.9,dur:3.7},{x:85,y:10,size:2,delay:.7,dur:3.4},{x:88,y:42,size:2.5,delay:1.9,dur:4.4},{x:92,y:75,size:1.5,delay:.5,dur:3.2},{x:96,y:22,size:2,delay:2.3,dur:3.8}];function X({topBarRight:e,isAuthenticated:a=!1}){const[t,o]=(0,i.useState)(S),[n,r]=(0,i.useState)("all"),[O]=(0,d.Ym)(),T="pt"===O?"pt":"en";if((0,i.useEffect)(()=>{document.activeElement?.blur()},[t]),(0,i.useEffect)(()=>{const e=()=>o(S());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),!t)return(0,C.jsx)(s.PE,{title:"pt"===T?"Jogos":"Games",sidebar:null,topBarRight:e,children:(0,C.jsxs)(G,{children:[Q.map((e,a)=>(0,C.jsx)(F,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,C.jsx)(R,{top:15,delay:12}),(0,C.jsx)(R,{top:55,delay:25}),(0,C.jsx)(L,{children:"pt"===T?"Vamos jogar!":"Let’s play!"}),(0,C.jsx)(J,{children:"pt"===T?"Escolhe um jogo para começar":"Pick a game to get started"}),(0,C.jsxs)(D,{children:[(0,C.jsxs)(H,{active:"all"===n,onClick:()=>r("all"),children:["🎮 ","pt"===T?"Todos":"All"]}),(0,C.jsx)(H,{active:"online"===n,chipColor:"#3fb950",onClick:()=>r("online"),children:"🌐 Online"}),(0,C.jsxs)(H,{active:"multiplayer"===n,chipColor:"#d2a8ff",onClick:()=>r("multiplayer"),children:["👥 3+ ","pt"===T?"Jogadores":"Players"]}),(0,C.jsxs)(H,{active:"solo"===n,chipColor:"#f59e0b",onClick:()=>r("solo"),children:["🎯 ","pt"===T?"Sozinho":"Solo"]})]}),(0,C.jsx)(A,{children:E.filter(e=>"online"===n?e.online:"multiplayer"===n?e.maxPlayers>=3:"solo"!==n||1===e.maxPlayers).map((e,t)=>{const i=1===e.maxPlayers?"pt"===T?"JOGO · SOLO":"GAME · SOLO":2===e.maxPlayers?"pt"===T?"JOGO · 2P":"GAME · 2P":"pt"===T?`JOGO · 2-${e.maxPlayers}P`:`GAME · 2-${e.maxPlayers}P`,n=e.maxPlayers>1?2===e.maxPlayers?"2":`2-${e.maxPlayers}`:void 0;return(0,C.jsx)(l.Xl,{label:e.label[T],description:e.description[T],emoji:e.emoji,hash:e.hash,category:i,accentColor:e.color,playerCount:n,online:a&&e.online,onlineLabel:"ONLINE",index:t,onClick:()=>{o(e.id),window.location.hash=e.hash}},e.id)})})]})});const M=(0,C.jsxs)(I,{children:[(0,C.jsxs)(q,{onClick:()=>{o(null),window.location.hash="#/games"},children:["← ","pt"===T?"Jogos":"Games"]}),e]}),W=E.find(e=>e.id===t),X=()=>{o(null),window.location.hash="#/games"};if("lebem"===t)return(0,C.jsx)(s.PE,{title:"LêBem",sidebar:null,topBarRight:M,children:(0,C.jsx)(c.f,{onBack:X})});const Y={tictactoe:(0,C.jsx)(p.t,{lang:T,onBack:X,canOnline:a}),soundhunter:(0,C.jsx)(m.m,{lang:T,onBack:X}),familyquiz:(0,C.jsx)(h.i,{lang:T,onBack:X,canOnline:a}),adventure:(0,C.jsx)(u.a,{lang:T,onBack:X}),pixelboard:(0,C.jsx)(y.H,{lang:T,onBack:X}),stopgame:(0,C.jsx)(x.z,{lang:T,onBack:X,canOnline:a}),spotit:(0,C.jsx)(b.O,{lang:T,onBack:X,canOnline:a}),memory:(0,C.jsx)(g.Y,{lang:T,onBack:X,canOnline:a}),tapit:(0,C.jsx)(f.n,{lang:T,onBack:X,canOnline:a}),jumpparty:(0,C.jsx)(w.v,{lang:T,onBack:X}),drawguess:(0,C.jsx)(j.c,{lang:T,onBack:X,canOnline:a}),animalarena:(0,C.jsx)(k.m,{lang:T,onBack:X}),crazykitchen:(0,C.jsx)(z.A,{lang:T,onBack:X}),miniparty:(0,C.jsx)(v.k,{lang:T,onBack:X}),hideseek:(0,C.jsx)(P.p,{lang:T,onBack:X}),buttonmayhem:(0,C.jsx)($.M,{lang:T,onBack:X}),bombbrawl:(0,C.jsx)(B.$,{lang:T,onBack:X,canOnline:a})};return(0,C.jsx)(s.PE,{title:W.title[T],sidebar:null,topBarRight:M,children:Y[t]})}const Y=document.getElementById("root");if(!Y)throw new Error("Root element #root not found");(0,o.H)(Y).render((0,C.jsx)(X,{}))},8997(e,a,t){var o=t(8991);a.H=o.createRoot,o.hydrateRoot}}]);