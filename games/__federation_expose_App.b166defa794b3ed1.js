"use strict";(self.webpackChunk_atlantis_games=self.webpackChunk_atlantis_games||[]).push([["6362"],{3935(e,a,t){t.r(a),t.d(a,{default:()=>Y});var i=t(5723),o=t(7991),n=t(6859),r=t.n(n),s=t(2799),l=t(4174),d=t(2938),p=t(8170),c=t(1234),m=t(7350),h=t(3325),u=t(1639),x=t(8125),y=t(7192),b=t(2838),g=t(9367),f=t(6987),w=t(7710),j=t(2036),k=t(9791),z=t(3783),v=t(2017),P=t(3473),$=t(4980),B=t(9299),S=t(6114);function C(){let e=window.location.hash.toLowerCase();return e.startsWith("#/leitor")||e.startsWith("#/lebem")?"lebem":e.startsWith("#/tictactoe")||e.startsWith("#/galo")?"tictactoe":e.startsWith("#/soundhunter")?"soundhunter":e.startsWith("#/familyquiz")?"familyquiz":e.startsWith("#/adventure")?"adventure":e.startsWith("#/pixelboard")?"pixelboard":e.startsWith("#/stopgame")?"stopgame":e.startsWith("#/spotit")?"spotit":e.startsWith("#/memory")?"memory":e.startsWith("#/tapit")?"tapit":e.startsWith("#/jumpparty")?"jumpparty":e.startsWith("#/drawguess")?"drawguess":e.startsWith("#/animalarena")?"animalarena":e.startsWith("#/crazykitchen")?"crazykitchen":e.startsWith("#/miniparty")?"miniparty":e.startsWith("#/hideseek")?"hideseek":e.startsWith("#/buttonmayhem")?"buttonmayhem":e.startsWith("#/bombbrawl")?"bombbrawl":null}let O=[{id:"lebem",hash:"#/lebem",emoji:"\uD83C\uDFAE",color:"#f97583",maxPlayers:1,online:!1,label:{pt:"Ler a Brincar",en:"Read & Play"},description:{pt:"Aprende a ler com jogos divertidos",en:"Learn to read with fun games"},title:{pt:"L\xeaBem",en:"L\xeaBem"}},{id:"tictactoe",hash:"#/tictactoe",emoji:"❌⭕",color:"#8b5cf6",maxPlayers:2,online:!0,label:{pt:"Jogo do Galo",en:"Tic Tac Toe"},description:{pt:"Joga contra o robot ou um amigo!",en:"Play against the robot or a friend!"},title:{pt:"Jogo do Galo",en:"Tic Tac Toe"}},{id:"soundhunter",hash:"#/soundhunter",emoji:"\uD83C\uDFA4",color:"#f59e0b",maxPlayers:1,online:!1,label:{pt:"Ca\xe7ador de Sons",en:"Sound Hunter"},description:{pt:"Grava sons pela casa e completa miss\xf5es",en:"Record sounds around the house"},title:{pt:"Ca\xe7ador de Sons",en:"Sound Hunter"}},{id:"familyquiz",hash:"#/familyquiz",emoji:"\uD83E\uDDE0",color:"#3b82f6",maxPlayers:8,online:!0,label:{pt:"Quiz da Fam\xedlia",en:"Family Quiz"},description:{pt:"Perguntas divertidas para toda a fam\xedlia",en:"Fun trivia for the whole family"},title:{pt:"Quiz da Fam\xedlia",en:"Family Quiz"}},{id:"adventure",hash:"#/adventure",emoji:"\uD83C\uDFF0",color:"#10b981",maxPlayers:1,online:!1,label:{pt:"Aventura de Texto",en:"Text Adventure"},description:{pt:"Escolhe o teu caminho na hist\xf3ria",en:"Choose your own path in the story"},title:{pt:"Aventura de Texto",en:"Text Adventure"}},{id:"pixelboard",hash:"#/pixelboard",emoji:"\uD83C\uDFA8",color:"#ec4899",maxPlayers:1,online:!1,label:{pt:"Tabuleiro de Pixels",en:"Pixel Board"},description:{pt:"Cria desenhos pixel a pixel",en:"Create pixel art drawings"},title:{pt:"Tabuleiro de Pixels",en:"Pixel Board"}},{id:"stopgame",hash:"#/stopgame",emoji:"\uD83D\uDED1",color:"#f59e0b",maxPlayers:8,online:!0,label:{pt:"Stop!",en:"Stop!"},description:{pt:"Escolhe categorias e diz STOP!",en:"Pick categories and say STOP!"},title:{pt:"Stop!",en:"Stop!"}},{id:"spotit",hash:"#/spotit",emoji:"\uD83C\uDCCF",color:"#8b5cf6",maxPlayers:8,online:!0,label:{pt:"Encontra o Par!",en:"Spot It!"},description:{pt:"Encontra o s\xedmbolo igual nas duas cartas",en:"Find the matching symbol on both cards"},title:{pt:"Encontra o Par!",en:"Spot It!"}},{id:"memory",hash:"#/memory",emoji:"\uD83E\uDDE0",color:"#06b6d4",maxPlayers:6,online:!0,label:{pt:"Jogo da Mem\xf3ria",en:"Memory Game"},description:{pt:"Vira as cartas e encontra os pares!",en:"Flip cards and find the pairs!"},title:{pt:"Jogo da Mem\xf3ria",en:"Memory Game"}},{id:"tapit",hash:"#/tapit",emoji:"\uD83C\uDFAF",color:"#f97583",maxPlayers:8,online:!0,label:{pt:"Toca no Certo!",en:"Tap It!"},description:{pt:"Encontra o s\xedmbolo certo o mais r\xe1pido!",en:"Find the right symbol fast!"},title:{pt:"Toca no Certo!",en:"Tap It!"}},{id:"jumpparty",hash:"#/jumpparty",emoji:"\uD83D\uDC38",color:"#3fb950",maxPlayers:1,online:!1,label:{pt:"Salta!",en:"Jump!"},description:{pt:"Salta sobre os obst\xe1culos!",en:"Jump over obstacles!"},title:{pt:"Salta!",en:"Jump!"}},{id:"drawguess",hash:"#/drawguess",emoji:"\uD83C\uDFA8",color:"#d2a8ff",maxPlayers:8,online:!0,label:{pt:"Desenha e Adivinha!",en:"Draw & Guess!"},description:{pt:"Um desenha, os outros adivinham!",en:"One draws, others guess!"},title:{pt:"Desenha e Adivinha!",en:"Draw & Guess!"}},{id:"animalarena",hash:"#/animalarena",emoji:"\uD83E\uDD4B",color:"#ef4444",maxPlayers:1,online:!1,label:{pt:"Sumo Zoo",en:"Sumo Zoo"},description:{pt:"Empurra os outros para fora!",en:"Bump others off!"},title:{pt:"Sumo Zoo",en:"Sumo Zoo"}},{id:"crazykitchen",hash:"#/crazykitchen",emoji:"\uD83D\uDC68‍\uD83C\uDF73",color:"#f59e0b",maxPlayers:1,online:!1,label:{pt:"Cozinha Louca!",en:"Crazy Kitchen!"},description:{pt:"Prepara as encomendas a tempo!",en:"Fill orders before time runs out!"},title:{pt:"Cozinha Louca!",en:"Crazy Kitchen!"}},{id:"miniparty",hash:"#/miniparty",emoji:"\uD83C\uDF89",color:"#58a6ff",maxPlayers:1,online:!1,label:{pt:"Mini Festa!",en:"Mini Party!"},description:{pt:"5 mini-jogos r\xe1pidos e loucos!",en:"5 quick crazy mini-games!"},title:{pt:"Mini Festa!",en:"Mini Party!"}},{id:"hideseek",hash:"#/hideseek",emoji:"\uD83D\uDD0D",color:"#10b981",maxPlayers:1,online:!1,label:{pt:"Esconde-Esconde!",en:"Hide & Seek!"},description:{pt:"Disfar\xe7a-te e v\xea se te encontram!",en:"Disguise & find the hidden one!"},title:{pt:"Esconde-Esconde!",en:"Hide & Seek!"}},{id:"buttonmayhem",hash:"#/buttonmayhem",emoji:"\uD83C\uDFB2",color:"#a855f7",maxPlayers:1,online:!1,label:{pt:"Bot\xe3o Maluco!",en:"Button Mayhem!"},description:{pt:"Cada ronda uma regra diferente!",en:"Different rule every round!"},title:{pt:"Bot\xe3o Maluco!",en:"Button Mayhem!"}},{id:"bombbrawl",hash:"#/bombbrawl",emoji:"\uD83D\uDCA3",color:"#ff4444",maxPlayers:4,online:!0,label:{pt:"BombBrawl!",en:"BombBrawl!"},description:{pt:"Coloca bombas e s\xea o \xfaltimo de p\xe9!",en:"Drop bombs & be the last one standing!"},title:{pt:"BombBrawl",en:"BombBrawl"}}],E={familyquiz:{pt:"Q & A \xb7 quiz",en:"Q & A \xb7 quiz"},tictactoe:{pt:"3\xd73 \xb7 X vs O",en:"3\xd73 \xb7 X vs O"},soundhunter:{pt:"\xe1udio \xb7 waveform",en:"audio \xb7 waveform"},adventure:{pt:"narrativa \xb7 escolhas",en:"narrative \xb7 choices"},pixelboard:{pt:"paleta \xb7 pixel art",en:"palette \xb7 pixel art"}},T=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,M=(0,s.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,W=(0,s.keyframes)`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%      { opacity: 0.9; transform: scale(1.2); }
`,L=(0,s.keyframes)`
  0%   { transform: translateX(0); opacity: 0; }
  2%   { opacity: 1; }
  15%  { opacity: 0.6; }
  20%  { transform: translateX(300px); opacity: 0; }
  100% { transform: translateX(300px); opacity: 0; }
`,G=r().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.xl} ${l.w4.spacing.xxl};
  gap: ${l.w4.spacing.xl};
  overflow-y: auto;
  position: relative;
  background:
    radial-gradient(ellipse 60% 50% at 20% 30%, rgba(249, 117, 131, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 80% 70%, rgba(139, 92, 246, 0.04) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 50% 50%, rgba(121, 192, 255, 0.03) 0%, transparent 70%),
    #080b12;
`,A=r().h1`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${T} 0.5s ease both;
  background: linear-gradient(90deg, #f97583, #d2a8ff, #79c0ff, #f97583);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${T} 0.5s ease both, ${M} 6s linear infinite;
`,J=r().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  animation: ${T} 0.5s ease 0.1s both;
`,F=r().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${l.w4.spacing.lg};
  max-width: 880px;
  width: 100%;
  position: relative;
  z-index: 1;
  animation: ${T} 0.5s ease 0.2s both;

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 480px;
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
`,q=r().div`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: white;
  animation: ${W} ${({dur:e})=>e}s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,D=r().div`
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
  animation: ${L} ${({delay:e})=>e}s ease-out infinite;

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
`,I=r().div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 1;
  animation: ${T} 0.5s ease 0.15s both;
`,Q=r().button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1.5px solid ${({active:e,chipColor:a})=>e?a??l.w4.colors.accent:l.w4.colors.border};
  background: ${({active:e,chipColor:a})=>e?(a??l.w4.colors.accent)+"18":"transparent"};
  color: ${({active:e,chipColor:a})=>e?a??l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 36px;
  &:hover {
    border-color: ${({chipColor:e})=>e??l.w4.colors.accent};
    color: ${({chipColor:e})=>e??l.w4.colors.accent};
  }
`,R=r().button`
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
`,X=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,H=[{x:3,y:5,size:1.5,delay:0,dur:3.2},{x:8,y:35,size:2,delay:1.8,dur:3.4},{x:12,y:70,size:1.5,delay:.6,dur:4.1},{x:18,y:15,size:2.5,delay:2.4,dur:3},{x:22,y:55,size:1.5,delay:.3,dur:4.5},{x:28,y:88,size:2,delay:1.1,dur:3.6},{x:33,y:25,size:1.5,delay:2.8,dur:4},{x:40,y:60,size:2,delay:.9,dur:3.3},{x:45,y:8,size:2.5,delay:1.5,dur:3.8},{x:50,y:45,size:1.5,delay:2.1,dur:4.3},{x:55,y:78,size:2,delay:.4,dur:3.1},{x:60,y:18,size:1.5,delay:1.7,dur:4.6},{x:65,y:50,size:2.5,delay:2.6,dur:3.5},{x:70,y:85,size:1.5,delay:.2,dur:3.9},{x:75,y:30,size:2,delay:1.3,dur:4.2},{x:80,y:65,size:1.5,delay:2.9,dur:3.7},{x:85,y:10,size:2,delay:.7,dur:3.4},{x:88,y:42,size:2.5,delay:1.9,dur:4.4},{x:92,y:75,size:1.5,delay:.5,dur:3.2},{x:96,y:22,size:2,delay:2.3,dur:3.8}];function Y({topBarRight:e,isAuthenticated:a=!1}){let[t,n]=(0,o.useState)(C),[r,s]=(0,o.useState)("all"),[T]=(0,p.Ym)(),M="pt"===T?"pt":"en";if((0,o.useEffect)(()=>{document.activeElement?.blur()},[t]),(0,o.useEffect)(()=>{let e=()=>n(C());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),!t)return(0,i.jsx)(l.PE,{title:"pt"===M?"Jogos":"Games",sidebar:null,topBarRight:e,children:(0,i.jsxs)(G,{children:[H.map((e,a)=>(0,i.jsx)(q,{x:e.x,y:e.y,size:e.size,delay:e.delay,dur:e.dur},a)),(0,i.jsx)(D,{top:15,delay:12}),(0,i.jsx)(D,{top:55,delay:25}),(0,i.jsx)(A,{children:"pt"===M?"Vamos jogar!":"Let’s play!"}),(0,i.jsx)(J,{children:"pt"===M?"Escolhe um jogo para come\xe7ar":"Pick a game to get started"}),(0,i.jsxs)(I,{children:[(0,i.jsxs)(Q,{active:"all"===r,onClick:()=>s("all"),children:["\uD83C\uDFAE ","pt"===M?"Todos":"All"]}),(0,i.jsx)(Q,{active:"online"===r,chipColor:"#3fb950",onClick:()=>s("online"),children:"\uD83C\uDF10 Online"}),(0,i.jsxs)(Q,{active:"multiplayer"===r,chipColor:"#d2a8ff",onClick:()=>s("multiplayer"),children:["\uD83D\uDC65 3+ ","pt"===M?"Jogadores":"Players"]}),(0,i.jsxs)(Q,{active:"solo"===r,chipColor:"#f59e0b",onClick:()=>s("solo"),children:["\uD83C\uDFAF ","pt"===M?"Sozinho":"Solo"]})]}),(0,i.jsx)(F,{children:O.filter(e=>"online"===r?e.online:"multiplayer"===r?e.maxPlayers>=3:"solo"!==r||1===e.maxPlayers).map((e,t)=>{let o=1===e.maxPlayers?"pt"===M?"JOGO \xb7 SOLO":"GAME \xb7 SOLO":2===e.maxPlayers?"pt"===M?"JOGO \xb7 2P":"GAME \xb7 2P":"pt"===M?`JOGO \xb7 2-${e.maxPlayers}P`:`GAME \xb7 2-${e.maxPlayers}P`,r=e.maxPlayers>1?2===e.maxPlayers?"2":`2-${e.maxPlayers}`:void 0,s=E[e.id]?.[M];return(0,i.jsx)(d.Xl,{label:e.label[M],description:e.description[M],emoji:e.emoji,hash:e.hash,category:o,accentColor:e.color,playerCount:r,online:a&&e.online,onlineLabel:"ONLINE",vizId:e.id,vizLabel:s,index:t,onClick:()=>{n(e.id),window.location.hash=e.hash}},e.id)})})]})});let W=(0,i.jsxs)(X,{children:[(0,i.jsxs)(R,{onClick:()=>{n(null),window.location.hash="#/games"},children:["← ","pt"===M?"Jogos":"Games"]}),e]}),L=O.find(e=>e.id===t),Z=()=>{n(null),window.location.hash="#/games"};if("lebem"===t)return(0,i.jsx)(l.PE,{title:"L\xeaBem",sidebar:null,topBarRight:W,children:(0,i.jsx)(c.f,{onBack:Z})});let _={tictactoe:(0,i.jsx)(m.t,{lang:M,onBack:Z,canOnline:a}),soundhunter:(0,i.jsx)(h.m,{lang:M,onBack:Z}),familyquiz:(0,i.jsx)(u.i,{lang:M,onBack:Z,canOnline:a}),adventure:(0,i.jsx)(x.a,{lang:M,onBack:Z}),pixelboard:(0,i.jsx)(y.H,{lang:M,onBack:Z}),stopgame:(0,i.jsx)(b.z,{lang:M,onBack:Z,canOnline:a}),spotit:(0,i.jsx)(g.O,{lang:M,onBack:Z,canOnline:a}),memory:(0,i.jsx)(f.Y,{lang:M,onBack:Z,canOnline:a}),tapit:(0,i.jsx)(w.n,{lang:M,onBack:Z,canOnline:a}),jumpparty:(0,i.jsx)(j.v,{lang:M,onBack:Z}),drawguess:(0,i.jsx)(k.c,{lang:M,onBack:Z,canOnline:a}),animalarena:(0,i.jsx)(z.m,{lang:M,onBack:Z}),crazykitchen:(0,i.jsx)(v.A,{lang:M,onBack:Z}),miniparty:(0,i.jsx)(P.k,{lang:M,onBack:Z}),hideseek:(0,i.jsx)($.p,{lang:M,onBack:Z}),buttonmayhem:(0,i.jsx)(B.M,{lang:M,onBack:Z}),bombbrawl:(0,i.jsx)(S.$,{lang:M,onBack:Z,canOnline:a})};return(0,i.jsx)(l.PE,{title:L.title[M],sidebar:null,topBarRight:W,children:_[t]})}}}]);