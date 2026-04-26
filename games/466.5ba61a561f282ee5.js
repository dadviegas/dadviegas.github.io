"use strict";(self.webpackChunk_atlantis_games=self.webpackChunk_atlantis_games||[]).push([["466"],{3783(e,t,r){r.d(t,{m:()=>z});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(4e3),d=r(9484);let p=["\uD83C\uDF4C","\uD83D\uDCA8","\uD83E\uDDCA","⚡"],u=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,m=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,h=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,g=(0,s.keyframes)`0%{box-shadow:0 0 0 0 rgba(249,117,131,0.4)}70%{box-shadow:0 0 0 20px rgba(249,117,131,0)}100%{box-shadow:0 0 0 0 rgba(249,117,131,0)}`,f=i().div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${l.w4.spacing.lg};gap:${l.w4.spacing.lg};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(249,117,131,0.06) 0%,transparent 70%),#080b12;`,x=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${u} 0.3s ease;`,b=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;`,w=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,y=i().div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:#ef4444;animation:${h} 0.5s ease;`,v=i().span`font-size:72px;animation:${m} 1s ease-in-out infinite;`,$=i().div`
  position:relative;width:${320}px;height:${320}px;
  border-radius:50%;background:radial-gradient(circle,${l.w4.colors.surface} 60%,rgba(249,117,131,0.15) 100%);
  border:3px solid ${l.w4.colors.border};overflow:hidden;touch-action:none;
  animation:${g} 2s ease-in-out infinite;
`,k=i().div`
  position:absolute;inset:0;border-radius:50%;
  background:radial-gradient(circle,transparent 55%,rgba(249,117,131,0.08) 70%,rgba(249,117,131,0.2) 100%);
  pointer-events:none;
`,j=i().div`
  position:absolute;
  left:${({x:e})=>e-20}px;top:${({y:e})=>e-20}px;
  transition:opacity ${l.w4.transitions.slow};opacity:${({alive:e})=>e?1:.2};filter:${({alive:e})=>e?"none":"grayscale(1)"};
  pointer-events:none;
`,M=i().div`
  position:absolute;font-size:28px;line-height:1;
  left:${({x:e})=>e-14}px;top:${({y:e})=>e-14}px;
  pointer-events:none;animation:${m} 1s ease-in-out infinite;
`,S=i().div`font-size:18px;font-weight:700;color:${l.w4.colors.mainText};`;function z({lang:e}){let[t,r]=(0,a.useState)("menu"),[n,i]=(0,a.useState)(3),[s,l]=(0,a.useState)({x:160,y:160,vx:0,vy:0,charIdx:0,alive:!0,score:0}),[u,m]=(0,a.useState)([]),[h,g]=(0,a.useState)([]),[T,C]=(0,a.useState)({dx:0,dy:-1}),[R,_]=(0,a.useState)(0),B=(0,a.useRef)(s);B.current=s;let I=(0,a.useRef)(u);I.current=u;let A=(0,a.useRef)(T);A.current=T;let E=(0,a.useRef)(0),F=(0,a.useCallback)(()=>{let e=Math.floor(Math.random()*d.L.length),t=Array.from({length:3},(t,r)=>{let o=2*Math.PI*r/3;return{x:160+80*Math.cos(o),y:160+80*Math.sin(o),vx:0,vy:0,charIdx:(e+r+1)%d.L.length,alive:!0,score:0}});m(t),I.current=t,l({x:160,y:160,vx:0,vy:0,charIdx:e,alive:!0,score:0}),B.current={x:160,y:160,vx:0,vy:0,charIdx:e,alive:!0,score:0},g([]),_(0),i(3),r("countdown");let o=3,a=setInterval(()=>{i(--o),o<=0&&(clearInterval(a),r("playing"))},800)},[160]),P=(0,a.useCallback)(()=>{B.current.alive&&l(e=>({...e,vx:e.vx+12*A.current.dx,vy:e.vy+12*A.current.dy}))},[]);return((0,a.useEffect)(()=>{if("playing"!==t)return;let e=setInterval(()=>{l(e=>{if(!e.alive)return e;let t=e.x+e.vx,r=e.y+e.vy,o=.92*e.vx,a=.92*e.vy,n=t-160,i=r-160,s=Math.sqrt(n*n+i*i);if(s>140){let l=Math.atan2(i,n);t=160+140*Math.cos(l),r=160+140*Math.sin(l);let c=o*Math.cos(l)+a*Math.sin(l);if(o-=2*c*Math.cos(l)*.6,a-=2*c*Math.sin(l)*.6,s>150)return{...e,x:t,y:r,vx:0,vy:0,alive:!1}}return{...e,x:t,y:r,vx:o,vy:a}}),m(e=>e.map(e=>{if(!e.alive)return e;let t=e.x+e.vx,r=e.y+e.vy,o=.92*e.vx,a=.92*e.vy;if(.02>Math.random()){let t=160-e.x,r=160-e.y,n=Math.sqrt(t*t+r*r)||1;o+=t/n*12*.6,a+=r/n*12*.6}let n=t-160,i=r-160,s=Math.sqrt(n*n+i*i);if(s>140){let l=Math.atan2(i,n);t=160+140*Math.cos(l),r=160+140*Math.sin(l);let c=o*Math.cos(l)+a*Math.sin(l);if(o-=2*c*Math.cos(l)*.6,a-=2*c*Math.sin(l)*.6,s>150)return{...e,x:t,y:r,vx:0,vy:0,alive:!1}}let l=t-B.current.x,c=r-B.current.y;if(40>Math.sqrt(l*l+c*c)&&B.current.alive){let e=Math.atan2(c,l);o+=4*Math.cos(e),a+=4*Math.sin(e)}return{...e,x:t,y:r,vx:o,vy:a}}))},16);return()=>clearInterval(e)},[t,160,140]),(0,a.useEffect)(()=>{if("playing"!==t)return;let e=setInterval(()=>{if(!B.current.alive){clearInterval(e),setTimeout(()=>r("gameover"),500);return}_(e=>e+1)},1e3);return()=>clearInterval(e)},[t]),(0,a.useEffect)(()=>{if("playing"!==t)return;let e=setInterval(()=>{let e=++E.current,t=Math.random()*Math.PI*2,r=140*Math.random()*.8;g(o=>[...o,{x:160+Math.cos(t)*r,y:160+Math.sin(t)*r,emoji:p[Math.floor(Math.random()*p.length)],id:e}]),setTimeout(()=>g(t=>t.filter(t=>t.id!==e)),3e3)},5e3);return()=>clearInterval(e)},[t,160,140]),(0,a.useEffect)(()=>{if("playing"!==t)return;let e=e=>{"Space"===e.code&&(e.preventDefault(),P()),"ArrowUp"===e.key&&C({dx:0,dy:-1}),"ArrowDown"===e.key&&C({dx:0,dy:1}),"ArrowLeft"===e.key&&C({dx:-1,dy:0}),"ArrowRight"===e.key&&C({dx:1,dy:0})};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t,P]),"menu"===t)?(0,o.jsxs)(f,{children:[(0,o.jsx)(d.G,{paletteIndex:0,pose:"idle",size:72}),(0,o.jsx)(x,{children:"Sumo Zoo"}),(0,o.jsx)(b,{children:"pt"===e?"Empurra os outros para fora da arena!":"Bump others off the arena!"}),(0,o.jsx)(w,{accent:"#ef4444",onClick:F,children:"pt"===e?"Jogar!":"Play!"})]}):"countdown"===t?(0,o.jsx)(f,{children:(0,o.jsx)(y,{children:n>0?n:"\uD83D\uDC3E"},n)}):"gameover"===t?(0,o.jsxs)(f,{children:[(0,o.jsx)(v,{children:"\uD83D\uDCA5"}),(0,o.jsx)(x,{children:"pt"===e?"Eliminado!":"Eliminated!"}),(0,o.jsxs)(S,{children:["⏱️ ",R,"s"]}),(0,o.jsx)(w,{accent:"#ef4444",onClick:F,children:"pt"===e?"Outra Vez":"Again"})]}):(0,o.jsxs)(f,{children:[(0,o.jsxs)(S,{children:["⏱️ ",R,"s"]}),(0,o.jsxs)($,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(j,{x:s.x,y:s.y,alive:s.alive,children:(0,o.jsx)(d.G,{paletteIndex:s.charIdx,pose:s.alive?"idle":"dead",size:40})}),u.map((e,t)=>(0,o.jsx)(j,{x:e.x,y:e.y,alive:e.alive,children:(0,o.jsx)(d.G,{paletteIndex:e.charIdx,pose:e.alive?"idle":"dead",size:40})},t)),h.map(e=>(0,o.jsx)(M,{x:e.x,y:e.y,children:e.emoji},e.id))]}),(0,o.jsx)(c.UO,{onMove:e=>{(0!==e.dx||0!==e.dy)&&(Math.abs(e.dx)>=Math.abs(e.dy)?C({dx:e.dx,dy:0}):C({dx:0,dy:e.dy}))},actions:[{id:"dash",label:"\uD83D\uDCA8",color:"#dc2626",onPress:P}]})]})}},6114(e,t,r){r.d(t,{$:()=>ej});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(4e3),d=r(9484),p=r(5782);let u=[[-1,0],[1,0],[0,-1],[0,1]],m={up:[-1,0],down:[1,0],left:[0,-1],right:[0,1]},h=["fire","bomb","speed","ghost","shield"],g=[30,30,20,10,10],f=[{name:{pt:"Blaze",en:"Blaze"},palette:0,accent:"#ff4444",desc:{pt:"R\xe1pido e furioso",en:"Fast & furious"}},{name:{pt:"Pixel",en:"Pixel"},palette:1,accent:"#44bb44",desc:{pt:"Equilibrado",en:"Balanced"}},{name:{pt:"Sparky",en:"Sparky"},palette:2,accent:"#ff6644",desc:{pt:"Explosivo!",en:"Explosive!"}},{name:{pt:"Shadow",en:"Shadow"},palette:3,accent:"#cc44cc",desc:{pt:"Misterioso",en:"Mysterious"}},{name:{pt:"Bolt",en:"Bolt"},palette:4,accent:"#ffaa00",desc:{pt:"Veloz como um raio",en:"Lightning fast"}},{name:{pt:"Frost",en:"Frost"},palette:5,accent:"#00cccc",desc:{pt:"Frio e calculista",en:"Cool & calculated"}},{name:{pt:"Ruby",en:"Ruby"},palette:6,accent:"#8855cc",desc:{pt:"Brilhante",en:"Brilliant"}},{name:{pt:"Nova",en:"Nova"},palette:7,accent:"#ff4488",desc:{pt:"Estrela em ascens\xe3o",en:"Rising star"}},{name:{pt:"Bomber",en:"Bomber"},palette:8,accent:"#4488ff",desc:{pt:"O cl\xe1ssico!",en:"The classic!"}},{name:{pt:"Knight",en:"Knight"},palette:9,accent:"#ff2222",desc:{pt:"Cavaleiro negro",en:"Dark knight"}},{name:{pt:"Creeper",en:"Creeper"},palette:10,accent:"#55ee55",desc:{pt:"Sssssss...BOOM!",en:"Sssssss...BOOM!"}},{name:{pt:"Ender",en:"Ender"},palette:11,accent:"#9944ff",desc:{pt:"Do outro mundo",en:"From another world"}}],x={title:{pt:"BombBrawl",en:"BombBrawl"},subtitle:{pt:"Escolhe o teu bomber!",en:"Choose your bomber!"},start:{pt:"Come\xe7ar!",en:"Start!"},youWin:{pt:"Ganhaste! \uD83C\uDF89",en:"You Win! \uD83C\uDF89"},youLose:{pt:"Perdeste! \uD83D\uDCA5",en:"You Lose! \uD83D\uDCA5"},draw:{pt:"Empate!",en:"Draw!"},playAgain:{pt:"Jogar de novo",en:"Play Again"},back:{pt:"Voltar",en:"Back"},go:{pt:"VAI!",en:"GO!"},bombs:{pt:"Bombas",en:"Bombs"},range:{pt:"Alcance",en:"Range"},speed:{pt:"Velocidade",en:"Speed"},controls:{pt:"Setas/WASD + Espa\xe7o",en:"Arrows/WASD + Space"},controlsMobile:{pt:"D-pad + Bot\xe3o \uD83D\uDCA3",en:"D-pad + \uD83D\uDCA3 Button"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},waiting:{pt:"\xc0 espera…",en:"Waiting…"},startMatch:{pt:"Iniciar!",en:"Start Match!"}};function b(e,t){return x[e]?.["pt"===t?"pt":"en"]??e}let w=null,y=!1;function v(e,t,r="square",o=.12){try{let a=y?(w||(w=new AudioContext),w):null;if(!a)return;let n=a.createOscillator(),i=a.createGain();n.type=r,n.frequency.setValueAtTime(e,a.currentTime),i.gain.setValueAtTime(o,a.currentTime),i.gain.exponentialRampToValueAtTime(.001,a.currentTime+t),n.connect(i).connect(a.destination),n.start(),n.stop(a.currentTime+t)}catch{}}function $(){v(440,.12,"square",.08)}let k=[[0,0],[0,1],[1,0],[0,12],[0,11],[1,12],[10,0],[10,1],[9,0],[10,12],[10,11],[9,12]];function j(e,t,r,o){return!(t<0)&&!(t>=11)&&!(r<0)&&!(r>=13)&&1!==e[t][r]&&(2!==e[t][r]||!!o)}function M(e,t){let r=new Set;for(let o of e)if(!o.detonated)for(let[e,a]of(r.add(`${o.row},${o.col}`),u))for(let n=1;n<=o.range;n++){let i=o.row+e*n,s=o.col+a*n;if(i<0||i>=11||s<0||s>=13||1===t[i][s]||(r.add(`${i},${s}`),2===t[i][s]))break}return r}function S(e,t){return -1===e?"up":1===e?"down":-1===t?"left":1===t?"right":null}function z(e,t,r,o){let a=0;for(let[n,i]of u)for(let s=1;s<=r;s++){let r=e+n*s,l=t+i*s;if(r<0||r>=11||l<0||l>=13||1===o[r][l])break;if(2===o[r][l]){a++;break}}return a}function T(e,t,r,o){if(e.activeBombs>=e.maxBombs||r.bombs.some(t=>!t.detonated&&t.row===e.row&&t.col===e.col))return null;let a=[...r.bombs,{id:-1,row:e.row,col:e.col,owner:t,timer:2500,range:e.range,detonated:!1}],n=M(a,r.grid),i=new Set(a.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),s=new Set;s.add(`${e.row},${e.col}`);let l=[];for(let[t,a]of u){let c=e.row+t,d=e.col+a,p=`${c},${d}`;if(j(r.grid,c,d,o)&&!i.has(p)){let e=S(t,a);if(!n.has(p))return e;s.add(p),l.push({r:c,c:d,firstDir:e})}}for(;l.length>0;){let{r:e,c:t,firstDir:a}=l.shift();for(let[c,d]of u){let p=e+c,u=t+d,m=`${p},${u}`;if(!s.has(m)&&j(r.grid,p,u,o)&&!i.has(m)){if(!n.has(m))return a;s.add(m),l.push({r:p,c:u,firstDir:a})}}}return null}function C(e,t,r,o,a,n){let i=new Set;i.add(`${r},${o}`);let s=new Set(e.bombs.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),l=[];for(let[c,d]of u){let p=r+c,u=o+d,m=`${p},${u}`;if(j(e.grid,p,u,n)&&!s.has(m)&&!t.has(m)){let e=S(c,d);if(a(p,u))return e;i.add(m),l.push({r:p,c:u,firstDir:e})}}for(;l.length>0;){let{r,c:o,firstDir:c}=l.shift();for(let[d,p]of u){let u=r+d,m=o+p,h=`${u},${m}`;if(!i.has(h)&&j(e.grid,u,m,n)&&!s.has(h)&&!t.has(h)){if(a(u,m))return c;i.add(h),l.push({r:u,c:m,firstDir:c})}}}return null}let R=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,_=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}`,B=(0,s.keyframes)`0%,100%{transform:scale(1)}50%{transform:scale(1.12)}`,I=(0,s.keyframes)`0%{transform:scale(0.4);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}`,A=(0,s.keyframes)`0%{opacity:1;transform:scale(0.5)}30%{transform:scale(1.1)}100%{opacity:0;transform:scale(1)}`,E=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}`,F=(0,s.keyframes)`0%,100%{box-shadow:0 0 0 2px rgba(88,166,255,0.4)}50%{box-shadow:0 0 0 4px rgba(88,166,255,0.7)}`,P=(0,s.keyframes)`0%,100%{opacity:0.5}50%{opacity:0.8}`,L=(0,s.keyframes)`0%,100%{box-shadow:0 0 12px var(--accent)}50%{box-shadow:0 0 24px var(--accent)}`,O=(0,s.keyframes)`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`,H=(0,s.keyframes)`0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.4) rotate(15deg)}`,D=(0,s.keyframes)`0%,100%{transform:translateY(0)}30%{transform:translateY(-16px)}`,N=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Content top-aligned + scrollable — Safari's flex "justify-content: center" clips the top
     when content overflows, so we avoid it entirely. Auto margins on the inner content
     (via the first child's margin-top) keep it visually centered when there's room. */
  padding: ${l.w4.spacing.md};
  gap: ${l.w4.spacing.sm};
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  background: radial-gradient(ellipse 60% 50% at 30% 20%, rgba(249, 117, 131, 0.05) 0%, transparent 70%), #080b12;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  /* Centering without clipping: first/last children expand to push content to the middle
     when viewport is tall, and collapse when content needs every pixel. */
  & > :first-of-type { margin-top: auto; }
  & > :last-child { margin-bottom: auto; }

  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.sm};
    gap: 6px;
  }
`,V=i().h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin: 0;
  text-align: center;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ff4444, #ff8844, #ffcc44);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${R} 0.4s ease;
`,G=i().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  margin: 0;
  text-align: center;
  animation: ${R} 0.4s ease 0.1s both;
`,q=i().div`
  display: flex;
  gap: 4px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 20px;
  padding: 3px;
  animation: ${R} 0.4s ease 0.08s both;
`,Y=i().button`
  padding: 8px 20px;
  border-radius: 16px;
  border: none;
  background: ${({active:e,color:t})=>e?(t??l.w4.colors.accent)+"20":"transparent"};
  color: ${({active:e,color:t})=>e?t??l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  min-height: 36px;
  &:hover { color: ${({color:e})=>e??l.w4.colors.accent}; }
`,W=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.lg};
  padding: ${l.w4.spacing.lg};
  overflow-y: auto;
  min-height: 0;
`,J=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`,X=i().button`
  padding: 14px 40px;
  background: linear-gradient(135deg, ${({accent:e})=>e}, ${({accent:e})=>e}cc);
  border: none;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  min-height: 52px;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 24px ${({accent:e})=>e}50; }
  &:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
`,U=i().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${l.w4.spacing.sm};
  max-width: 560px;
  width: 100%;
  animation: ${R} 0.4s ease 0.15s both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    max-width: 320px;
  }
`,K=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.sm};
  background: ${({selected:e,accent:t})=>e?`${t}18`:l.w4.colors.surface};
  border: 2px solid ${({selected:e,accent:t})=>e?t:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  transition: all ${l.w4.transitions.base};
  --accent: ${({accent:e})=>e};
  position: relative;
  overflow: hidden;

  ${({selected:e})=>e&&(0,s.css)`animation: ${L} 2s ease-in-out infinite;`}

  &:hover {
    border-color: ${({accent:e})=>e};
    transform: translateY(-2px);
  }
`,Q=i().span`
  font-size: 13px;
  font-weight: 700;
  color: ${({accent:e})=>e};
`,Z=i().span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,ee=i().button`
  padding: 16px 48px;
  background: linear-gradient(135deg, ${({accent:e})=>e}, ${({accent:e})=>e}cc);
  border: none;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  min-height: 56px;
  letter-spacing: 0.02em;
  animation: ${R} 0.4s ease 0.25s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px ${({accent:e})=>e}50;
  }
  &:active { transform: translateY(-1px); }
`,et=i().div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 11, 18, 0.7);
  z-index: 20;
`,er=i().div`
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 900;
  color: ${({accent:e})=>e};
  text-shadow: 0 0 40px ${({accent:e})=>e}60;
  animation: ${_} 0.5s ease;
`,eo=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  animation: ${O} 0.3s ease;
  position: relative;
  width: 100%;
  max-width: 800px;
`,ea=i().div`
  position: relative;
  width: ${({w:e})=>e}px;
  height: ${({h:e})=>e}px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow:
    0 0 0 3px #1a2235,
    0 0 0 5px rgba(88, 166, 255, 0.15),
    0 8px 40px rgba(0, 0, 0, 0.6),
    inset 0 0 30px rgba(0, 0, 0, 0.3);
`,en=i().div`
  position: absolute;
  inset: 0;
  background:
    repeating-conic-gradient(#1a2a1a 0% 25%, #162216 0% 50%)
    0 0 / ${({cellSize:e})=>2*e}px ${({cellSize:e})=>2*e}px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 98%, rgba(255, 255, 255, 0.03) 100%)
      0 0 / 100% ${({cellSize:e})=>e}px,
      linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 98%, rgba(255, 255, 255, 0.03) 100%)
      0 0 / ${({cellSize:e})=>e}px 100%;
    pointer-events: none;
  }
`,ei=i().div`
  position: absolute;
  left: ${({c:e,size:t})=>e*t}px;
  top: ${({r:e,size:t})=>e*t}px;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
`,es=i()(ei)`
  background:
    linear-gradient(180deg, #3a4a5e 0%, #2a3648 40%, #1e2a3a 100%);
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.12),
    inset 0 -3px 0 rgba(0, 0, 0, 0.5),
    inset 2px 0 0 rgba(255, 255, 255, 0.05),
    inset -2px 0 0 rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    right: 1px;
    height: 45%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, transparent 100%);
    border-radius: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(100, 140, 180, 0.08);
    background:
      linear-gradient(0deg, transparent 48%, rgba(0, 0, 0, 0.15) 48%, rgba(0, 0, 0, 0.15) 52%, transparent 52%),
      linear-gradient(90deg, transparent 48%, rgba(0, 0, 0, 0.1) 48%, rgba(0, 0, 0, 0.1) 52%, transparent 52%);
  }
`,el=i()(ei)`
  background: linear-gradient(170deg, #7a5a38 0%, #5a3e20 50%, #4a3018 100%);
  box-shadow:
    inset 0 2px 0 rgba(255, 200, 100, 0.15),
    inset 0 -3px 0 rgba(0, 0, 0, 0.4),
    inset 2px 0 0 rgba(255, 200, 100, 0.08),
    inset -2px 0 0 rgba(0, 0, 0, 0.25);

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border: 1.5px solid rgba(180, 130, 70, 0.2);
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    background:
      linear-gradient(45deg, transparent 40%, rgba(255, 200, 100, 0.06) 50%, transparent 60%),
      linear-gradient(0deg, transparent 46%, rgba(0, 0, 0, 0.12) 46%, rgba(0, 0, 0, 0.12) 54%, transparent 54%),
      linear-gradient(90deg, transparent 46%, rgba(0, 0, 0, 0.08) 46%, rgba(0, 0, 0, 0.08) 54%, transparent 54%);
  }
`;i()(ei)`
  background: linear-gradient(170deg, #7a5a38 0%, #5a3e20 50%, #4a3018 100%);
  animation: ${H} 0.35s ease forwards;
  pointer-events: none;
`;let ec=i()(ei)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${I} 0.2s ease;
  z-index: 5;

  .bomb-inner {
    animation: ${B} 0.6s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(255, 60, 20, 0.6)) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
  }
`,ed=i()(ei)`
  z-index: 8;
  pointer-events: none;
  border-radius: 4px;
  animation: ${A} ${450}ms ease-out forwards;
  background: ${({center:e})=>e?"radial-gradient(circle, #ffffff 0%, #ffee44 15%, #ffaa00 35%, #ff4400 60%, rgba(255, 30, 0, 0.3) 80%, transparent 100%)":"radial-gradient(circle, #ffee66 0%, #ff8822 30%, #ff4400 55%, rgba(255, 30, 0, 0.2) 80%, transparent 100%)"};
  box-shadow: ${({center:e})=>e?"0 0 20px rgba(255, 150, 0, 0.6), 0 0 40px rgba(255, 80, 0, 0.3)":"0 0 12px rgba(255, 120, 0, 0.4), 0 0 24px rgba(255, 60, 0, 0.2)"};
`,ep=i()(ei)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${E} 1.5s ease-in-out infinite;
  z-index: 3;
  font-size: ${({size:e})=>Math.max(14,.5*e)}px;

  &::before {
    content: '';
    position: absolute;
    inset: 15%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  }
`,eu=i().span`
  filter:
    drop-shadow(0 0 6px ${({glowColor:e})=>e})
    drop-shadow(0 0 12px ${({glowColor:e})=>e}80);
`,em=i().div`
  position: absolute;
  left: ${({c:e,size:t})=>e*t}px;
  top: ${({r:e,size:t})=>e*t}px;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left ${l.w4.transitions.fast} linear, top ${l.w4.transitions.fast} linear;
  z-index: 10;
  opacity: ${({alive:e})=>e?1:.3};
  filter: ${({alive:e,ghostActive:t})=>e?t?"brightness(1.2) saturate(0.5)":"drop-shadow(0 2px 3px rgba(0,0,0,0.6))":"grayscale(1) brightness(0.5)"};
  ${({ghostActive:e})=>e&&(0,s.css)`animation: ${P} 1s ease-in-out infinite;`}
  ${({shieldActive:e})=>e&&(0,s.css)`animation: ${F} 1.5s ease-in-out infinite;`}
`,eh=i().div`
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 7px;
  font-weight: 800;
  color: ${({color:e})=>e};
  letter-spacing: 0.04em;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  white-space: nowrap;
`,eg=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,ef=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,ex=i().span`
  color: ${({color:e})=>e??l.w4.colors.mainText};
  font-weight: 800;
`,eb=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.lg};
  animation: ${R} 0.4s ease;
`,ew=i().h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  font-weight: 900;
  margin: 0;
  color: ${({win:e})=>e?"#3fb950":"#f97583"};
  text-align: center;
`,ey=i().div`
  animation: ${D} 1s ease-in-out infinite;
`,ev=i().div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  opacity: 0.7;
  animation: ${R} 0.4s ease 0.3s both;
`,e$={fire:"\uD83D\uDD25",bomb:"\uD83D\uDCA3",speed:"\uD83C\uDFC3",ghost:"\uD83D\uDC7B",shield:"\uD83D\uDEE1️"},ek={fire:"#ff6622",bomb:"#ff4444",speed:"#44ff44",ghost:"#aa88ff",shield:"#4488ff"};function ej({lang:e,canOnline:t=!1}){let[r,n]=(0,a.useState)("charselect"),[i,s]=(0,a.useState)("solo"),[l,x]=(0,a.useState)(0),[R,_]=(0,a.useState)(3),[,B]=(0,a.useState)(0),I=(0,a.useRef)(null),A=(0,a.useRef)(null),E=(0,a.useRef)(!1),F=(0,a.useRef)(null),P=(0,a.useRef)(null),[L,O]=(0,a.useState)(40),H=(0,a.useRef)([]);(0,a.useRef)(0);let D=(0,a.useRef)(new Map),ei=(0,a.useRef)(0),eM=(0,a.useRef)(new Map),eS=(0,a.useRef)(0),ez="online"===i,eT=(0,a.useRef)(r);eT.current=r;let eC=(0,a.useRef)({updatePlayerCount:()=>{}}),eR=(0,a.useCallback)(e=>{let t=eB.current;if("guest-joined"===e.type){let r=[...t.room?.players??[],{id:e.playerId,name:e.name,isHost:!1}];t.addPlayer({id:e.playerId,name:e.name,isHost:!1}),eC.current.updatePlayerCount(r.length),t.sendEvent({type:"host-ack",name:(0,p.zE)(),playerId:t.room?.playerId??"",players:r})}else if("host-ack"===e.type)t.setPlayers(e.players);else if("player-list"===e.type)t.setPlayers(e.players);else if("player-left"===e.type){e.playerId&&t.removePlayer(e.playerId);let r=eT.current;("countdown"===r||"playing"===r||"gameover"===r)&&(eO(),t.room?.role==="host"&&eC.current.updatePlayerCount(0),t.leaveRoom(),n("charselect"),s("solo"))}else if("game-state"===e.type){let t=e.payload;if("input"===t.action){let e=t.playerId;D.current.set(e,{dir:t.dir,bomb:t.bomb})}else if("start"===t.action){I.current=t.gameState,ei.current=t.yourIndex,eM.current=new Map(Object.entries(t.playerIdMap)),n("countdown"),_(3);let e=3,r=setInterval(()=>{--e<=0?(clearInterval(r),n("playing")):_(e)},700)}else if("tick"===t.action){let e=I.current;if(!e)return;let r=t.state;e.players=r.players,e.bombs=r.bombs,e.explosions=r.explosions,e.powerUps=r.powerUps,r.grid&&(e.grid=r.grid),e.running=r.running,e.winner=r.winner,e.elapsed=r.elapsed,B(e=>e+1)}}},[]),e_=(0,p.Ky)({gameId:"bombbrawl",playerName:(0,p.zE)(),onEvent:eR}),eB=(0,a.useRef)(e_);eB.current=e_;let eI=(0,p.zj)({gameId:"bombbrawl",enabled:"lobby"===r&&"online"===i});eC.current=eI;let eA=eI.rooms;(0,a.useEffect)(()=>{function e(){let e=window.innerWidth>=768?48:24,t=Math.min(window.innerWidth-e,780),r=window.innerWidth>=1024?80:180,o=window.innerHeight-r,a=Math.floor(t/13),n=Math.floor(o/11);O(Math.max(26,Math.min(window.innerWidth>=768?60:48,a,n)))}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let eE=f[l].accent,eF=(0,a.useCallback)(e=>{let t,r=function(){let e=[];for(let t=0;t<11;t++){e[t]=[];for(let r=0;r<13;r++)t%2==0&&r%2==0&&t>0&&t<10&&r>0&&r<12?e[t][r]=1:function(e,t){return k.some(([r,o])=>r===e&&o===t)}(t,r)?e[t][r]=0:e[t][r]=2*(.62>Math.random())}return e}(),o=[[0,0],[0,12],[10,0],[10,12]],a=["aggressive","cautious","chaotic"];if(e&&e.length>0){t=[];for(let r=0;r<4;r++){let n=r<e.length,i=n?e[r].paletteIdx:Math.floor(Math.random()*d.L.length);t.push({row:o[r][0],col:o[r][1],alive:!0,maxBombs:1,activeBombs:0,range:1,speed:220,ghost:0,shield:!1,paletteIdx:i,dir:null,isBot:!n,personality:n?"aggressive":a[(r-e.length)%3],moveCooldown:0,aiCooldown:200+200*Math.random(),walking:!1,flipX:!1})}}else{let e=new Set([f[l].palette]);t=o.map((t,r)=>{let o;if(0===r)o=f[l].palette;else{do o=Math.floor(Math.random()*d.L.length);while(e.has(o));e.add(o)}return{row:t[0],col:t[1],alive:!0,maxBombs:1,activeBombs:0,range:1,speed:220,ghost:0,shield:!1,paletteIdx:o,dir:null,isBot:0!==r,personality:0===r?"aggressive":a[(r-1)%3],moveCooldown:0,aiCooldown:200+200*Math.random(),walking:!1,flipX:!1}})}let n={grid:r,players:t,bombs:[],explosions:[],powerUps:[],running:!0,winner:-1,bombIdCounter:0,elapsed:0};return I.current=n,H.current=[],n},[l]),eP=(0,a.useCallback)(e=>{let t=I.current;if(!t)return;let r=t.players[e];!r.alive||r.activeBombs>=r.maxBombs||t.bombs.some(e=>e.row===r.row&&e.col===r.col)||(r.activeBombs++,v(120,.3,"sawtooth",.15),setTimeout(()=>v(80,.4,"sawtooth",.2),50),t.bombs.push({id:t.bombIdCounter++,row:r.row,col:r.col,owner:e,timer:2500,range:r.range,detonated:!1}))},[]),eL=(0,a.useCallback)(()=>{F.current&&clearInterval(F.current),eS.current=0,F.current=setInterval(()=>{let e=I.current;if(!e||!e.running)return;e.elapsed+=16;for(let t=0;t<e.players.length;t++){let r=e.players[t];if(r.alive){if(r.ghost>0&&(r.ghost=Math.max(0,r.ghost-16)),r.isBot){if(r.aiCooldown-=16,r.aiCooldown<=0){let o=function(e,t,r){let o=M(r.bombs,r.grid),a=o.has(`${e.row},${e.col}`),n=e.ghost>0,i=e.activeBombs<e.maxBombs,s=r.bombs.some(t=>!t.detonated&&t.row===e.row&&t.col===e.col),l=r.bombs.filter(e=>!e.detonated&&e.owner===t).length,c=i&&!s&&0===l;if(a){let t=new Set(r.bombs.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),a=new Set;a.add(`${e.row},${e.col}`);let i=[];for(let[s,l]of u){let c=e.row+s,d=e.col+l,p=`${c},${d}`;if(j(r.grid,c,d,n)&&!t.has(p)){let e=S(s,l);if(!o.has(p))return{move:e,placeBomb:!1};a.add(p),i.push({r:c,c:d,firstDir:e})}}for(;i.length>0;){let{r:e,c:s,firstDir:l}=i.shift();for(let[c,d]of u){let p=e+c,u=s+d,m=`${p},${u}`;if(!a.has(m)&&j(r.grid,p,u,n)&&!t.has(m)){if(!o.has(m))return{move:l,placeBomb:!1};a.add(m),i.push({r:p,c:u,firstDir:l})}}}for(let[t,o]of u){let a=e.row+t,i=e.col+o;if(j(r.grid,a,i,n))return{move:S(t,o),placeBomb:!1}}return{move:null,placeBomb:!1}}let d=r.bombs.find(r=>!r.detonated&&r.owner!==t&&Math.abs(r.row-e.row)+Math.abs(r.col-e.col)<=1);if(d){let t=C(r,o,e.row,e.col,(e,t)=>!o.has(`${e},${t}`)&&Math.abs(e-d.row)+Math.abs(t-d.col)>2,n);if(t)return{move:t,placeBomb:!1}}let p=C(r,o,e.row,e.col,(e,t)=>r.powerUps.some(r=>r.row===e&&r.col===t),n);if(p)return{move:p,placeBomb:!1};let m=function(e,t,r){let o=null;for(let a=0;a<r.players.length;a++){if(a===t||!r.players[a].alive)continue;let n=Math.abs(r.players[a].row-e.row)+Math.abs(r.players[a].col-e.col);(!o||n<o.dist)&&(o={idx:a,dist:n})}return o}(e,t,r);if("aggressive"===e.personality&&m){let a=r.players[m.idx];if(m.dist<=2&&c&&function(e,t,r,o,a){for(let[n,i]of u)for(let s=1;s<=r;s++){let r=e+n*s,l=t+i*s;if(r<0||r>=11||l<0||l>=13||1===o.grid[r][l]||2===o.grid[r][l])break;for(let e=0;e<o.players.length;e++)if(e!==a&&o.players[e].alive&&o.players[e].row===r&&o.players[e].col===l)return!0}return!1}(e.row,e.col,e.range,r,t)){let o=T(e,t,r,n);if(o)return{move:o,placeBomb:!0}}let i=C(r,o,e.row,e.col,(e,t)=>e===a.row&&t===a.col,n);if(i)return{move:i,placeBomb:!1}}if("cautious"===e.personality&&m&&m.dist<=3){let t=r.players[m.idx],a=C(r,o,e.row,e.col,(e,r)=>Math.abs(e-t.row)+Math.abs(r-t.col)>5,n);if(a)return{move:a,placeBomb:!1}}if("chaotic"===e.personality&&m){if(m.dist<=3&&c&&.25>Math.random()){let o=T(e,t,r,n);if(o)return{move:o,placeBomb:!0}}if(.5>Math.random()){let t=r.players[m.idx],a=C(r,o,e.row,e.col,(e,r)=>e===t.row&&r===t.col,n);if(a)return{move:a,placeBomb:!1}}}if(c){if(z(e.row,e.col,e.range,r.grid)>=1){let o=T(e,t,r,n);if(o)return{move:o,placeBomb:!0}}let a=C(r,o,e.row,e.col,(t,o)=>z(t,o,e.range,r.grid)>=1,n);if(a)return{move:a,placeBomb:!1}}if(m){let a=r.players[m.idx];if(m.dist<=2&&c){let o=T(e,t,r,n);if(o)return{move:o,placeBomb:!0}}let i=C(r,o,e.row,e.col,(e,t)=>Math.abs(e-a.row)+Math.abs(t-a.col)<=1,n);if(i)return{move:i,placeBomb:!1}}for(let[t,a]of[...u].sort(()=>Math.random()-.5)){let i=e.row+t,s=e.col+a;if(j(r.grid,i,s,n)&&!o.has(`${i},${s}`)&&!r.bombs.some(e=>!e.detonated&&e.row===i&&e.col===s))return{move:S(t,a),placeBomb:!1}}return{move:null,placeBomb:!1}}(r,t,e);r.dir=o.move,o.placeBomb&&(eP(t),r.moveCooldown=0),r.aiCooldown="aggressive"===r.personality?80+80*Math.random():"chaotic"===r.personality?100+120*Math.random():120+140*Math.random()}}else if(t===ei.current)r.dir=A.current,E.current&&(eP(t),E.current=!1);else if(ez){for(let[e,o]of eM.current.entries())if(o===t){let o=D.current.get(e);o&&(r.dir=o.dir,o.bomb&&(eP(t),o.bomb=!1));break}}if(r.moveCooldown-=16,r.moveCooldown<=0&&r.dir){let t=m[r.dir];if(t){let o=r.row+t[0],a=r.col+t[1],n=r.ghost>0;j(e.grid,o,a,n)&&!e.bombs.some(e=>e.row===o&&e.col===a)&&(r.row=o,r.col=a,r.moveCooldown=r.speed,r.walking=!0,r.flipX=t[1]<0)}}r.walking=r.moveCooldown>.5*r.speed}}for(let t of e.bombs)!t.detonated&&(t.timer-=16,t.timer<=0&&function(e,t){let r=[t],o=new Set;for(;r.length>0;){let t=r.shift();if(o.has(t))continue;o.add(t);let a=e.bombs.find(e=>e.id===t);if(!a||a.detonated)continue;a.detonated=!0,v(200,.15,"square",.1),v(100,.3,"sawtooth",.18);let n=e.players[a.owner];for(let[t,o]of(n&&(n.activeBombs=Math.max(0,n.activeBombs-1)),e.explosions.push({row:a.row,col:a.col,timer:450}),u))for(let n=1;n<=a.range;n++){let i=a.row+t*n,s=a.col+o*n;if(i<0||i>=11||s<0||s>=13||1===e.grid[i][s])break;if(e.explosions.push({row:i,col:s,timer:450}),2===e.grid[i][s]){e.grid[i][s]=0,e.gridDirty=!0,.35>Math.random()&&e.powerUps.push({row:i,col:s,type:function(){let e=Math.random()*g.reduce((e,t)=>e+t,0);for(let t=0;t<h.length;t++)if((e-=g[t])<=0)return h[t];return"fire"}()});break}let l=e.bombs.find(e=>!e.detonated&&e.row===i&&e.col===s);l&&r.push(l.id)}}e.bombs=e.bombs.filter(e=>!e.detonated)}(e,t.id));e.explosions=e.explosions.filter(e=>(e.timer-=16,e.timer>0));let t=new Set(e.explosions.map(e=>`${e.row},${e.col}`));for(let r of e.players)r.alive&&t.has(`${r.row},${r.col}`)&&(r.shield?r.shield=!1:(r.alive=!1,v(300,.1,"square",.12),setTimeout(()=>v(200,.15,"square",.1),100),setTimeout(()=>v(100,.3,"sawtooth",.15),200)));for(let t of e.players){if(!t.alive)continue;let r=e.powerUps.findIndex(e=>e.row===t.row&&e.col===t.col);if(-1!==r){let o=e.powerUps[r];switch(v(440,.08,"square",.1),setTimeout(()=>v(660,.08,"square",.1),80),setTimeout(()=>v(880,.12,"square",.1),160),o.type){case"fire":t.range=Math.min(6,t.range+1);break;case"bomb":t.maxBombs=Math.min(5,t.maxBombs+1);break;case"speed":t.speed=Math.max(100,t.speed-40);break;case"ghost":t.ghost=6e3;break;case"shield":t.shield=!0}e.powerUps.splice(r,1)}}let r=e.players.filter(e=>e.alive);if(r.length<=1&&(e.running=!1,e.winner=1===r.length?e.players.indexOf(r[0]):-1),ez&&e_.room?.role==="host"&&(eS.current++,eS.current%5==0||!e.running)){let t={players:e.players,bombs:e.bombs,explosions:e.explosions,powerUps:e.powerUps,running:e.running,winner:e.winner,elapsed:e.elapsed};(e.gridDirty||!e.running)&&(t.grid=e.grid,e.gridDirty=!1),e_.sendEvent({type:"game-state",payload:{action:"tick",state:t}})}B(e=>e+1)},16)},[eP,ez,e_]),eO=(0,a.useCallback)(()=>{F.current&&(clearInterval(F.current),F.current=null)},[]),eH=(0,a.useRef)({dir:null,bomb:!1});(0,a.useEffect)(()=>{if(!ez||eB.current.room?.role!=="guest"||"playing"!==r)return;let e=setInterval(()=>{let e=eB.current.room;if(!e)return;let t=A.current,r=E.current;(t!==eH.current.dir||r)&&(eH.current={dir:t,bomb:r},eB.current.sendEvent({type:"game-state",payload:{action:"input",playerId:e.playerId,dir:t,bomb:r}}),r&&(E.current=!1))},50);return()=>clearInterval(e)},[ez,r]),(0,a.useEffect)(()=>{if("playing"!==r)return;let e={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right",W:"up",S:"down",A:"left",D:"right"},t=new Set;function o(r){if(" "===r.key||"Enter"===r.key){r.preventDefault(),E.current=!0;return}let o=e[r.key];o&&(r.preventDefault(),t.add(r.key),A.current=o)}function a(r){t.delete(r.key),0===t.size?A.current=null:A.current=e[[...t].pop()]??null}return window.addEventListener("keydown",o),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",a)}},[r]);let eD=(0,a.useCallback)(()=>{y=!0,eF(),ei.current=0,n("countdown"),_(3),$();let e=3,t=setInterval(()=>{--e<=0?(clearInterval(t),n("playing"),eL(),v(880,.2,"square",.12)):(_(e),$())},700)},[eF,eL]),eN=(0,a.useCallback)(()=>{if(!e_.room||"host"!==e_.room.role)return;y=!0,eI.unpublishRoom();let e=e_.room.players,t=eF(e.map((e,t)=>({id:e.id,paletteIdx:f[t%f.length].palette})));ei.current=0;let r={};e.forEach((e,t)=>{r[e.id]=t}),eM.current=new Map(Object.entries(r)),e_.sendEvent({type:"game-state",payload:{action:"start",gameState:t,playerIdMap:r}}),e.forEach((e,o)=>{e.isHost||e_.sendEvent({type:"game-state",payload:{action:"start",gameState:t,yourIndex:o,playerIdMap:r}})}),n("countdown"),_(3);let o=3,a=setInterval(()=>{--o<=0?(clearInterval(a),n("playing"),eL()):_(o)},700)},[e_,eF,eL]);(0,a.useEffect)(()=>()=>{eO(),y=!1,w&&(w.close().catch(()=>{}),w=null),ez&&(eI.unpublishRoom(),e_.leaveRoom())},[eO]);let eV=I.current,{walls:eG,blocks:eq}=(0,a.useMemo)(()=>{if(!eV)return{walls:[],blocks:[]};let e=[],t=[];for(let r=0;r<11;r++)for(let o=0;o<13;o++)1===eV.grid[r][o]?e.push([r,o]):2===eV.grid[r][o]&&t.push([r,o]);return{walls:e,blocks:t}},[eV,eV?.elapsed]);if("charselect"===r)return(0,o.jsxs)(N,{children:[(0,o.jsx)(V,{children:"\uD83D\uDCA3 BombBrawl"}),(0,o.jsx)(G,{children:b("subtitle",e)}),t&&(0,o.jsxs)(q,{children:[(0,o.jsxs)(Y,{active:"solo"===i,color:"#f59e0b",onClick:()=>s("solo"),children:["\uD83C\uDFAF ",b("solo",e)]}),(0,o.jsxs)(Y,{active:"online"===i,color:"#3fb950",onClick:()=>s("online"),children:["\uD83C\uDF10 ",b("online",e)]})]}),(0,o.jsx)(U,{children:f.map((t,r)=>(0,o.jsxs)(K,{accent:t.accent,selected:l===r,onClick:()=>x(r),children:[(0,o.jsx)(d.G,{paletteIndex:t.palette,pose:"idle",size:1.2*L}),(0,o.jsx)(Q,{accent:t.accent,children:t.name["pt"===e?"pt":"en"]}),(0,o.jsx)(Z,{children:t.desc["pt"===e?"pt":"en"]})]},r))}),(0,o.jsx)(ee,{accent:eE,onClick:ez?()=>n("lobby"):eD,children:ez?b("online",e):b("start",e)}),(0,o.jsx)(ev,{children:"u">typeof window&&"ontouchstart"in window?b("controlsMobile",e):b("controls",e)})]});if("lobby"===r){let t=e_.room?.role==="host",r=e_.room?.players.length??0;return(0,o.jsxs)(N,{children:[(0,o.jsx)(V,{children:"\uD83D\uDCA3 BombBrawl"}),e_.room?.connected?(0,o.jsxs)(W,{children:[(0,o.jsxs)(G,{children:["\uD83D\uDC65 ",r,"/4 ","pt"===e?"jogadores":"players"]}),(0,o.jsx)(J,{children:e_.room.players.map((e,t)=>(0,o.jsxs)(K,{accent:f[t%f.length].accent,selected:!1,children:[(0,o.jsx)(d.G,{paletteIndex:f[t%f.length].palette,pose:"idle",size:52}),(0,o.jsx)(Q,{accent:f[t%f.length].accent,children:e.name}),e.isHost&&(0,o.jsx)(Z,{children:"\uD83D\uDC51 Host"})]},e.id))}),t&&r>=2&&(0,o.jsx)(X,{accent:"#3fb950",onClick:eN,children:b("startMatch",e)}),!t&&(0,o.jsx)(G,{children:b("waiting",e)})]}):(0,o.jsx)(p.XB,{lang:e,room:e_.room,error:e_.error,onCreateRoom:e=>{let{code:t,roomName:r}=e_.createRoom();eI.publishRoom({code:t,roomName:r,hostName:e,playerCount:1})},onJoinRoom:(e,t)=>e_.joinRoom(e),onLeaveRoom:()=>{eI.unpublishRoom(),e_.leaveRoom(),n("charselect")},availableRooms:eA})]})}if("playing"===r&&eV&&!eV.running){let t=ei.current,r=eV.winner===t,a=-1===eV.winner,i=eV.winner>=0?eV.players[eV.winner].paletteIdx:l;return(0,o.jsx)(N,{children:(0,o.jsxs)(eb,{children:[(0,o.jsx)(ey,{children:(0,o.jsx)(d.G,{paletteIndex:i,pose:a?"dead":"jump",size:120})}),(0,o.jsx)(ew,{win:r,children:a?b("draw",e):r?b("youWin",e):b("youLose",e)}),(0,o.jsx)(ee,{accent:r?"#3fb950":"#f97583",onClick:()=>{eO(),ez&&(eI.unpublishRoom(),e_.leaveRoom()),n("charselect")},children:b("playAgain",e)})]})})}if(!eV)return(0,o.jsx)(N,{});let eY=ei.current,eW=eV.players[eY]??eV.players[0];return(0,o.jsx)(N,{children:(0,o.jsxs)(eo,{ref:P,children:[(0,o.jsxs)(eg,{children:[(0,o.jsx)(d.G,{paletteIndex:eW.paletteIdx,pose:"idle",size:28}),(0,o.jsxs)(ef,{children:["\uD83D\uDCA3 ",(0,o.jsxs)(ex,{color:"#ff4444",children:[eW.maxBombs-eW.activeBombs,"/",eW.maxBombs]})]}),(0,o.jsxs)(ef,{children:["\uD83D\uDD25 ",(0,o.jsx)(ex,{color:"#ff8844",children:eW.range})]}),(0,o.jsxs)(ef,{children:["\uD83C\uDFC3 ",(0,o.jsxs)(ex,{color:"#44ff44",children:[Math.round((1-(eW.speed-100)/120)*100),"%"]})]}),eW.shield&&(0,o.jsx)(ef,{children:"\uD83D\uDEE1️"}),eW.ghost>0&&(0,o.jsxs)(ef,{children:["\uD83D\uDC7B ",(0,o.jsxs)(ex,{color:"#aa88ff",children:[Math.ceil(eW.ghost/1e3),"s"]})]})]}),(0,o.jsxs)(ea,{w:13*L,h:11*L,children:[(0,o.jsx)(en,{cellSize:L}),eG.map(([e,t])=>(0,o.jsx)(es,{r:e,c:t,size:L},`w${e},${t}`)),eq.map(([e,t])=>(0,o.jsx)(el,{r:e,c:t,size:L},`b${e},${t}`)),eV.powerUps.map((e,t)=>(0,o.jsx)(ep,{r:e.row,c:e.col,size:L,children:(0,o.jsx)(eu,{glowColor:ek[e.type],children:e$[e.type]})},`pu${e.row},${e.col}-${t}`)),eV.bombs.map(e=>(0,o.jsx)(ec,{r:e.row,c:e.col,size:L,children:(0,o.jsx)("span",{className:"bomb-inner",style:{fontSize:Math.max(16,.6*L)},children:"\uD83D\uDCA3"})},`bomb${e.id}`)),eV.explosions.map((e,t)=>(0,o.jsx)(ed,{r:e.row,c:e.col,size:L,center:e.timer>400},`exp${e.row},${e.col}-${t}`)),eV.players.map((e,t)=>(0,o.jsxs)(em,{r:e.row,c:e.col,size:L,alive:e.alive,ghostActive:e.ghost>0,shieldActive:e.shield,children:[e.isBot&&e.alive&&(0,o.jsx)(eh,{color:f[e.paletteIdx%f.length]?.accent??"#888",children:"aggressive"===e.personality?"\uD83D\uDE08":"cautious"===e.personality?"\uD83E\uDD13":"\uD83E\uDD2A"}),(0,o.jsx)(d.G,{paletteIndex:e.paletteIdx,pose:e.alive?e.walking?"walk":"idle":"dead",size:Math.round(.85*L),flipX:e.flipX})]},`p${t}`)),"countdown"===r&&(0,o.jsx)(et,{children:(0,o.jsx)(er,{accent:eE,children:0===R?b("go",e):R},R)})]}),"playing"===r&&(0,o.jsx)(c.UO,{onMove:e=>{let t=null;Math.abs(e.dx)>Math.abs(e.dy)?1===e.dx?t="right":-1===e.dx&&(t="left"):1===e.dy?t="down":-1===e.dy&&(t="up"),A.current=t},actions:[{id:"bomb",label:"\uD83D\uDCA3",color:"#dc2626",onPress:()=>{E.current=!0}}]})]})})}},9299(e,t,r){r.d(t,{M:()=>I});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063);let c=[{id:"tap-lots",emoji:"⚡",visual:"\uD83D\uDC46\uD83D\uDC46\uD83D\uDC46",instruction:{pt:"Toca muitas vezes!",en:"Tap many times!"},check:e=>e.taps>=10},{id:"dont-tap",emoji:"\uD83E\uDD2B",visual:"\uD83D\uDEAB\uD83D\uDC46",instruction:{pt:"N\xc3O toques!",en:"DON'T tap!"},check:e=>0===e.taps},{id:"tap-once",emoji:"☝️",visual:"1️⃣",instruction:{pt:"Toca s\xf3 UMA vez!",en:"Tap ONCE only!"},check:e=>1===e.taps},{id:"hold-it",emoji:"✊",visual:"⏳",instruction:{pt:"Mant\xe9m premido!",en:"Hold the button!"},check:e=>e.holdTime>=2e3},{id:"tap-3",emoji:"3️⃣",visual:"\uD83D\uDC46\uD83D\uDC46\uD83D\uDC46",instruction:{pt:"Toca exatamente 3 vezes!",en:"Tap exactly 3 times!"},check:e=>3===e.taps},{id:"tap-5",emoji:"5️⃣",visual:"✋",instruction:{pt:"Toca exatamente 5 vezes!",en:"Tap exactly 5 times!"},check:e=>5===e.taps},{id:"quick-tap",emoji:"\uD83D\uDCA8",visual:"⚡",instruction:{pt:"Toca super r\xe1pido!",en:"Tap super fast!"},check:e=>e.taps>=15},{id:"gentle",emoji:"\uD83E\uDD0F",visual:"\uD83D\uDE0C",instruction:{pt:"Toca devagar… 2 vezes",en:"Tap slowly… 2 times"},check:e=>2===e.taps}];function d(e){return e[Math.floor(Math.random()*e.length)]}let p=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,m=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,h=(0,s.keyframes)`0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(88,166,255,0.5)}50%{transform:scale(1.05);box-shadow:0 0 0 14px rgba(88,166,255,0)}`,g=(0,s.keyframes)`0%,100%{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}`,f=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,x=i().div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${l.w4.spacing.xl};gap:${l.w4.spacing.xl};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 40%,rgba(210,168,255,0.06) 0%,transparent 70%),#080b12;`,b=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${p} 0.3s ease;`,w=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:340px;`,y=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,v=i().span`font-size:72px;animation:${m} 1s ease-in-out infinite;`,$=i().div`
  display:flex;flex-direction:column;align-items:center;gap:${l.w4.spacing.lg};
  padding:${l.w4.spacing.xxl};background:${l.w4.colors.surface};border:3px solid ${l.w4.colors.accent};
  border-radius:24px;animation:${u} 0.4s ease;max-width:340px;width:100%;
`,k=i().span`font-size:80px;animation:${g} 1s ease-in-out infinite;`,j=i().span`font-size:36px;animation:${m} 1.2s ease-in-out infinite;`,M=i().p`font-size:${l.w4.typography.fontSizeLg};font-weight:700;color:${l.w4.colors.mainText};text-align:center;margin:0;`,S=i().button`
  width:clamp(180px,45vw,240px);height:clamp(180px,45vw,240px);border-radius:50%;
  background:${({pressing:e})=>e?"linear-gradient(145deg,#f97583,#ef4444)":"linear-gradient(145deg,#58a6ff,#3b82f6)"};
  border:6px solid rgba(255,255,255,0.2);font-size:clamp(3rem,8vw,5rem);color:#fff;
  cursor:pointer;transition:background ${l.w4.transitions.base};
  animation:${h} 1.5s ease-in-out infinite;
  box-shadow:0 12px 48px rgba(88,166,255,0.4);
  &:active{transform:scale(0.92);animation:none;}
`,z=i().div`
  width:100%;max-width:300px;height:10px;border-radius:5px;background:${l.w4.colors.surface};overflow:hidden;
  &::after{content:'';display:block;height:100%;width:${({pct:e})=>100*e}%;
  background:${({pct:e})=>e>.5?"#3fb950":e>.25?"#f59e0b":"#f97583"};transition:width ${l.w4.transitions.slow} linear;border-radius:5px;}
`,T=i().div`font-size:${l.w4.typography.fontSizeXl};font-weight:800;color:${l.w4.colors.accent};font-variant-numeric:tabular-nums;`,C=i().div`
  font-size:80px;animation:${u} 0.4s ease;
`,R=i().div`display:flex;gap:${l.w4.spacing.md};align-items:center;`,_=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};`,B=i().div`padding:8px 16px;background:rgba(249,158,11,0.12);border:1px solid rgba(249,158,11,0.3);border-radius:24px;font-size:16px;font-weight:700;color:#f59e0b;animation:${f} 0.3s ease;`;function I({lang:e}){let[t,r]=(0,a.useState)("menu"),[n,i]=(0,a.useState)(0),[s,p]=(0,a.useState)(0),[u,m]=(0,a.useState)(0),[h,g]=(0,a.useState)(null),[f,A]=(0,a.useState)({taps:0,held:!1,holdTime:0,movedDevice:!1}),[E,F]=(0,a.useState)(4),[P,L]=(0,a.useState)(null),[O,H]=(0,a.useState)(!1),[D,N]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-buttonmayhem-best")??"0")}catch{return 0}}),V=(0,a.useRef)(0),G=(0,a.useRef)(null),q=(0,a.useRef)(null),Y=(0,a.useRef)(f);Y.current=f;let W=(0,a.useRef)(h);W.current=h;let J=(0,a.useRef)([]),X=(0,a.useCallback)(()=>{let e=c.filter(e=>!J.current.includes(e.id)),t=e.length>0?d(e):d(c);J.current=[...J.current,t.id].slice(-5),g(t),W.current=t,A({taps:0,held:!1,holdTime:0,movedDevice:!1}),Y.current={taps:0,held:!1,holdTime:0,movedDevice:!1},r("rule-show"),setTimeout(()=>{F(4),r("playing")},3e3)},[]),U=(0,a.useCallback)(()=>{q.current&&clearInterval(q.current),G.current&&clearInterval(G.current);let e=W.current?.check(Y.current)??!1;if(L(e),e){let e=5*u;p(t=>t+10+e),m(e=>e+1)}else m(0);r("result")},[u]);(0,a.useEffect)(()=>{if("playing"===t)return q.current=setInterval(()=>{F(e=>e<=.3?(U(),0):e-.1)},100),()=>{q.current&&clearInterval(q.current)}},[t,U]);let K=(0,a.useCallback)(()=>{"playing"===t&&A(e=>({...e,taps:e.taps+1}))},[t]),Q=(0,a.useCallback)(()=>{"playing"===t&&(H(!0),V.current=Date.now(),G.current=setInterval(()=>{let e=Date.now()-V.current;A(t=>({...t,held:!0,holdTime:e}))},50))},[t]),Z=(0,a.useCallback)(()=>{H(!1),G.current&&(clearInterval(G.current),G.current=null)},[]),ee=(0,a.useCallback)(()=>{let e=n+1;if(i(e),e>=8){if(s>D){N(s);try{localStorage.setItem("atlantis-buttonmayhem-best",String(s))}catch{}}r("scores")}else X()},[n,s,D,X]),et=(0,a.useCallback)(()=>{i(0),p(0),m(0),J.current=[],X()},[X]);return"menu"===t?(0,o.jsxs)(x,{children:[(0,o.jsxs)(b,{children:["\uD83C\uDFB2 ","pt"===e?"Bot\xe3o Maluco!":"Button Mayhem!"]}),(0,o.jsx)(w,{children:"pt"===e?"Cada ronda tem uma regra diferente. Segue a instru\xe7\xe3o!":"Each round has a different rule. Follow the instruction!"}),D>0&&(0,o.jsxs)(w,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",D]}),(0,o.jsx)(y,{accent:"#d2a8ff",onClick:et,children:"pt"===e?"Jogar!":"Play!"})]}):"rule-show"===t&&h?(0,o.jsxs)(x,{children:[(0,o.jsxs)(_,{children:["pt"===e?"Ronda":"Round"," ",n+1,"/",8]}),(0,o.jsxs)($,{children:[(0,o.jsx)(k,{children:h.emoji}),(0,o.jsx)(j,{children:h.visual}),(0,o.jsx)(M,{children:h.instruction["pt"===e?"pt":"en"]})]})]}):"result"===t?(0,o.jsxs)(x,{children:[(0,o.jsx)(C,{success:!!P,children:P?"✅":"❌"}),(0,o.jsx)(b,{children:P?"pt"===e?"Boa!":"Nice!":"pt"===e?"Ups!":"Oops!"}),(0,o.jsxs)(R,{children:[(0,o.jsxs)(_,{color:"#3fb950",children:["⭐ ",s]}),u>1&&(0,o.jsxs)(B,{children:["\uD83D\uDD25 x",u]})]}),(0,o.jsx)(y,{accent:"#d2a8ff",onClick:ee,children:"➡️"})]}):"scores"===t?(0,o.jsxs)(x,{children:[(0,o.jsx)(v,{children:"\uD83C\uDFB2"}),(0,o.jsx)(b,{children:"pt"===e?"Resultados":"Results"}),(0,o.jsxs)(_,{color:"#3fb950",children:["⭐ ",s]}),s>=D&&s>0&&(0,o.jsxs)(w,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,o.jsx)(y,{accent:"#d2a8ff",onClick:()=>r("menu"),children:"Menu"})]}):(0,o.jsxs)(x,{children:[(0,o.jsxs)(R,{children:[(0,o.jsxs)(_,{children:["⭐ ",s]}),(0,o.jsxs)(T,{children:["\uD83D\uDC46 ",f.taps]}),u>1&&(0,o.jsxs)(B,{children:["\uD83D\uDD25 x",u]})]}),(0,o.jsx)(z,{pct:E/4}),(0,o.jsx)(S,{pressing:O,onClick:K,onMouseDown:Q,onMouseUp:Z,onTouchStart:e=>{e.preventDefault(),Q(),K()},onTouchEnd:Z,children:h?.emoji??"?"}),f.held&&(0,o.jsxs)(w,{style:{color:l.w4.colors.accent},children:["✊ ",(f.holdTime/1e3).toFixed(1),"s"]})]})}},2017(e,t,r){r.d(t,{A:()=>E});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063);let c=[{name:"burger",ingredients:["\uD83C\uDF5E","\uD83E\uDD69","\uD83E\uDDC0"],result:"\uD83C\uDF54"},{name:"pizza",ingredients:["\uD83C\uDF5E","\uD83E\uDDC0","\uD83C\uDF45"],result:"\uD83C\uDF55"},{name:"salad",ingredients:["\uD83E\uDD6C","\uD83C\uDF45","\uD83E\uDD51"],result:"\uD83E\uDD57"},{name:"cake",ingredients:["\uD83E\uDD5A","\uD83C\uDF6B","\uD83C\uDF53"],result:"\uD83C\uDF82"},{name:"sushi",ingredients:["\uD83C\uDF5A","\uD83E\uDD51","\uD83E\uDD52"],result:"\uD83C\uDF63"},{name:"sandwich",ingredients:["\uD83C\uDF5E","\uD83E\uDD6C","\uD83E\uDD69"],result:"\uD83E\uDD6A"}],d=["\uD83C\uDF5E","\uD83E\uDD69","\uD83E\uDDC0","\uD83C\uDF45","\uD83E\uDD6C","\uD83E\uDD51","\uD83E\uDD5A","\uD83C\uDF6B","\uD83C\uDF53","\uD83C\uDF5A","\uD83E\uDD52","\uD83C\uDF6F"],p=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,m=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}`,h=(0,s.keyframes)`0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}`,g=(0,s.keyframes)`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`,f=i().div`flex:1;display:flex;flex-direction:column;align-items:center;padding:${l.w4.spacing.md};gap:${l.w4.spacing.md};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(249,158,11,0.08) 0%,transparent 70%),#080b12;`,x=i().h1`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${p} 0.3s ease;`,b=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;`,w=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,y=i().div`display:flex;gap:12px;overflow-x:auto;width:100%;max-width:600px;padding:8px 4px;justify-content:center;flex-wrap:wrap;`,v=i().div`
  display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 16px;min-width:110px;
  background:${l.w4.colors.surface};border:2px solid ${({urgent:e})=>e?"#f97583":l.w4.colors.border};
  border-radius:${l.w4.borderRadius.lg};flex-shrink:0;
  animation: ${({urgent:e})=>e?h:g} ${({urgent:e})=>e?"0.5s ease infinite":"0.3s ease"};
`,$=i().span`font-size:40px;line-height:1.2;`,k=i().div`display:flex;gap:4px;font-size:22px;line-height:1.2;`,j=i().div`width:100%;height:6px;border-radius:3px;background:${l.w4.colors.border};overflow:hidden;
  &::after{content:'';display:block;height:100%;width:${({pct:e})=>100*e}%;background:${({pct:e})=>e>.5?"#3fb950":e>.25?"#f59e0b":"#f97583"};transition:width 1s linear;border-radius:3px;}`,M=i().div`
  display:flex;gap:8px;align-items:center;justify-content:center;padding:16px;min-height:80px;
  background:${l.w4.colors.surface};border:2px dashed ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};
  width:100%;max-width:400px;flex-wrap:wrap;
`,S=i().span`font-size:40px;animation:${u} 0.2s ease;`,z=i().span`font-size:14px;color:${l.w4.colors.mainTextMuted};`,T=i().div`display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:400px;width:100%;`,C=i().button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,44px);
  background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};
  cursor:pointer;transition:all ${l.w4.transitions.base};min-height:64px;
  &:hover{background:rgba(88,166,255,0.08);transform:scale(1.08);border-color:${l.w4.colors.accent};}
  &:active{transform:scale(0.92);}
`,R=i().div`display:flex;gap:8px;`,_=i().button`
  padding:10px 24px;border-radius:${l.w4.borderRadius.lg};border:2px solid ${({color:e})=>e};
  background:${({color:e})=>e}15;color:${({color:e})=>e};font-size:16px;font-weight:700;
  cursor:pointer;min-height:44px;font-family:${l.w4.typography.fontFamily};transition:all ${l.w4.transitions.base};
  &:hover{background:${({color:e})=>e}25;transform:translateY(-1px);}
`,B=i().div`display:flex;gap:${l.w4.spacing.lg};align-items:center;`,I=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};animation:${({urgent:e})=>e?h:"none"} ${({urgent:e})=>e?"0.5s ease infinite":"none"};`,A=i().span`font-size:72px;animation:${m} 1s ease-in-out infinite;`;function E({lang:e}){let[t,r]=(0,a.useState)("menu"),[n,i]=(0,a.useState)([]),[s,l]=(0,a.useState)([]),[p,u]=(0,a.useState)(0),[m,h]=(0,a.useState)(60),[g,F]=(0,a.useState)(0),[P,L]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-kitchen-best")??"0")}catch{return 0}}),O=(0,a.useRef)(0),H=(0,a.useRef)(0),D=(0,a.useCallback)(()=>{i([]),l([]),u(0),H.current=0,h(60),F(0),O.current=0,r("playing")},[]);(0,a.useEffect)(()=>{if("playing"!==t)return;let e=setInterval(()=>{h(t=>{if(t<=1){clearInterval(e);let t=H.current;if(t>P){L(t);try{localStorage.setItem("atlantis-kitchen-best",String(t))}catch{}}return r("gameover"),0}return t-1})},1e3);return()=>clearInterval(e)},[t,P]),(0,a.useEffect)(()=>{if("playing"!==t)return;let e=()=>{let e=++O.current,t=c[Math.floor(Math.random()*c.length)],r=15+Math.floor(10*Math.random());i(o=>[...o.slice(-4),{id:e,recipe:t,timeLeft:r,maxTime:r}])};e();let r=setInterval(e,8e3);return()=>clearInterval(r)},[t]),(0,a.useEffect)(()=>{if("playing"!==t)return;let e=setInterval(()=>{i(e=>e.map(e=>({...e,timeLeft:e.timeLeft-1})).filter(e=>e.timeLeft>0))},1e3);return()=>clearInterval(e)},[t]);let N=(0,a.useCallback)(e=>{"playing"===t&&l(t=>t.length>=6?t:[...t,e])},[t]),V=(0,a.useCallback)(()=>l([]),[]),G=(0,a.useCallback)(()=>{if(0===s.length)return;let e=n.findIndex(e=>{if(e.recipe.ingredients.length!==s.length)return!1;let t=[...e.recipe.ingredients].sort(),r=[...s].sort();return t.every((e,t)=>e===r[t])});if(e>=0){let t=n[e],r=Math.ceil(t.timeLeft/t.maxTime*50),o=10*g;H.current+=100+r+o,u(H.current),F(e=>e+1),i(t=>t.filter((t,r)=>r!==e))}else F(0);l([])},[s,n,g]);return"menu"===t?(0,o.jsxs)(f,{children:[(0,o.jsxs)(x,{children:["\uD83D\uDC68‍\uD83C\uDF73 ","pt"===e?"Cozinha Louca!":"Crazy Kitchen!"]}),(0,o.jsx)(b,{children:"pt"===e?"Prepara as encomendas o mais r\xe1pido poss\xedvel!":"Fill orders as fast as you can!"}),P>0&&(0,o.jsxs)(b,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",P]}),(0,o.jsx)(w,{accent:"#f59e0b",onClick:D,children:"pt"===e?"Jogar!":"Play!"})]}):"gameover"===t?(0,o.jsxs)(f,{children:[(0,o.jsx)(A,{children:"\uD83D\uDC68‍\uD83C\uDF73"}),(0,o.jsx)(x,{children:"pt"===e?"Tempo esgotado!":"Time's up!"}),(0,o.jsxs)(I,{color:"#3fb950",children:["⭐ ",p]}),p>=P&&p>0&&(0,o.jsxs)(b,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,o.jsx)(w,{accent:"#f59e0b",onClick:D,children:"pt"===e?"Outra Vez":"Again"})]}):(0,o.jsxs)(f,{children:[(0,o.jsxs)(B,{children:[(0,o.jsxs)(I,{color:"#3fb950",children:["⭐ ",p]}),(0,o.jsxs)(I,{color:m<=10?"#f97583":m<=20?"#f59e0b":"#3fb950",urgent:m<=10,children:["⏱️ ",m,"s"]}),g>1&&(0,o.jsxs)(I,{color:"#d2a8ff",children:["\uD83D\uDD25 x",g]})]}),(0,o.jsxs)(y,{children:[n.map(e=>(0,o.jsxs)(v,{urgent:e.timeLeft<=5,children:[(0,o.jsx)($,{children:e.recipe.result}),(0,o.jsx)(k,{children:e.recipe.ingredients.map((e,t)=>(0,o.jsx)("span",{children:e},t))}),(0,o.jsx)(j,{pct:e.timeLeft/e.maxTime})]},e.id)),0===n.length&&(0,o.jsx)(b,{style:{padding:12},children:"pt"===e?"Sem encomendas…":"No orders…"})]}),(0,o.jsx)(M,{children:s.length>0?s.map((e,t)=>(0,o.jsx)(S,{children:e},t)):(0,o.jsx)(z,{children:"pt"===e?"\uD83D\uDC46 Toca nos ingredientes":"\uD83D\uDC46 Tap ingredients"})}),(0,o.jsxs)(R,{children:[(0,o.jsx)(_,{color:"#f97583",onClick:V,children:"\uD83D\uDDD1️"}),(0,o.jsxs)(_,{color:"#3fb950",onClick:G,children:["✅ ","pt"===e?"Servir!":"Serve!"]})]}),(0,o.jsx)(T,{children:d.map(e=>(0,o.jsx)(C,{onClick:()=>N(e),children:e},e))})]})}},9791(e,t,r){r.d(t,{c:()=>F});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(5782);let d=[{emoji:"\uD83D\uDC36",label:"dog"},{emoji:"\uD83D\uDC31",label:"cat"},{emoji:"\uD83C\uDFE0",label:"house"},{emoji:"\uD83C\uDF33",label:"tree"},{emoji:"☀️",label:"sun"},{emoji:"\uD83D\uDE97",label:"car"},{emoji:"\uD83C\uDF55",label:"pizza"},{emoji:"⭐",label:"star"},{emoji:"\uD83D\uDC1F",label:"fish"},{emoji:"\uD83C\uDF3A",label:"flower"},{emoji:"\uD83D\uDE80",label:"rocket"},{emoji:"\uD83C\uDF4C",label:"banana"},{emoji:"\uD83C\uDF82",label:"cake"},{emoji:"\uD83D\uDC18",label:"elephant"},{emoji:"\uD83E\uDD8B",label:"butterfly"},{emoji:"⚽",label:"ball"},{emoji:"\uD83C\uDF19",label:"moon"},{emoji:"\uD83D\uDC38",label:"frog"},{emoji:"\uD83C\uDFB8",label:"guitar"},{emoji:"\uD83C\uDF4E",label:"apple"},{emoji:"\uD83D\uDC0D",label:"snake"},{emoji:"\uD83C\uDFD4️",label:"mountain"},{emoji:"\uD83C\uDF0A",label:"wave"},{emoji:"\uD83C\uDF66",label:"ice cream"},{emoji:"\uD83D\uDC14",label:"chicken"},{emoji:"\uD83C\uDF88",label:"balloon"},{emoji:"\uD83D\uDC22",label:"turtle"},{emoji:"\uD83C\uDF08",label:"rainbow"},{emoji:"\uD83E\uDD81",label:"lion"},{emoji:"\uD83C\uDF49",label:"watermelon"}],p=["#ffffff","#f97583","#58a6ff","#3fb950","#f59e0b","#d2a8ff","#ff6bcb","#000000"];function u(e){return e[Math.floor(Math.random()*e.length)]}function m(e){let t=[...e];for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}let h=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,g=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,f=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,x=i().div`flex:1;display:flex;flex-direction:column;align-items:center;padding:${l.w4.spacing.md};gap:${l.w4.spacing.md};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(210,168,255,0.06) 0%,transparent 70%),#080b12;`,b=i().h1`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${h} 0.3s ease;`,w=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;`,y=i().button`padding:14px 36px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:48px;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px ${({accent:e})=>e}40;}`,v=i().canvas`
  width:100%;max-width:500px;aspect-ratio:4/3;background:#1a1a2e;border:2px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.lg};cursor:crosshair;touch-action:none;
`,$=i().div`display:flex;gap:6px;flex-wrap:wrap;justify-content:center;`,k=i().button`width:36px;height:36px;border-radius:50%;background:${({c:e})=>e};border:3px solid ${({active:e})=>e?"#fff":"transparent"};cursor:pointer;transition:transform ${l.w4.transitions.base};&:hover{transform:scale(1.15);}`,j=i().button`padding:6px 14px;border-radius:${l.w4.borderRadius.md};border:1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};background:${({active:e})=>e?"rgba(88,166,255,0.12)":"transparent"};color:${l.w4.colors.mainText};font-size:13px;font-weight:600;cursor:pointer;min-height:36px;`,M=i().button`padding:6px 14px;border-radius:${l.w4.borderRadius.md};border:1px solid ${l.w4.colors.border};background:transparent;color:#f97583;font-size:13px;font-weight:600;cursor:pointer;min-height:36px;&:hover{border-color:#f97583;}`,S=i().div`display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:10px 20px;background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.accent};border-radius:${l.w4.borderRadius.lg};animation:${g} 0.3s ease;`,z=i().span`font-size:48px;`,T=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({urgent:e})=>e?"#f97583":l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({urgent:e})=>e?"#f97583":l.w4.colors.mainText};`,C=i().div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:400px;width:100%;`,R=i().button`
  display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 8px;
  background:${l.w4.colors.surface};border:2px solid ${({correct:e,wrong:t})=>e?"#3fb950":t?"#f97583":l.w4.colors.border};
  border-radius:${l.w4.borderRadius.lg};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:80px;font-size:36px;
  ${({correct:e})=>e?"background:rgba(63,185,80,0.15);":""}
  ${({wrong:e})=>e?"background:rgba(249,117,131,0.15);":""}
  &:hover:not(:disabled){border-color:${l.w4.colors.accent};transform:scale(1.05);}
`,_=i().span`font-size:80px;animation:${f} 0.8s ease-in-out infinite;`,B=i().div`display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;animation:${h} 0.3s ease;`,I=i().div`display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:10px 14px;background:${l.w4.colors.surface};border:1px solid ${({highlight:e})=>e?l.w4.colors.accent:l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};`,A=i().span`flex:1;font-weight:600;color:${({highlight:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};`,E=i().span`font-size:20px;font-weight:800;color:${({color:e})=>e??l.w4.colors.mainText};`;function F({lang:e,canOnline:t}){let[r,n]=(0,a.useState)("menu"),[i,s]=(0,a.useState)(null),[h,g]=(0,a.useState)([]),[f,P]=(0,a.useState)(0),[L,O]=(0,a.useState)(30),[H,D]=(0,a.useState)(0),[N,V]=(0,a.useState)({}),[G,q]=(0,a.useState)("#ffffff"),[Y,W]=(0,a.useState)(4),[J,X]=(0,a.useState)(null),[U,K]=(0,a.useState)(!1),[Q,Z]=(0,a.useState)([]),[ee]=(0,a.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),et=(0,a.useRef)(null),er=(0,a.useRef)(!1),eo=(0,a.useRef)(null),ea=(0,a.useRef)(null),en=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":es.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),es.current.sendEvent({type:"host-ack",name:ee,playerId:es.current.room?.playerId??"",players:es.current.room?.players??[]});break;case"host-ack":es.current.setConnected(e.name),e.players&&es.current.setPlayers([...e.players,{id:es.current.room?.playerId??"",name:ee,isHost:!1}]);break;case"player-list":es.current.setPlayers(e.players);break;case"game-state":{let t=e.payload;if("new-round"===t.action){let e=t.drawerId===es.current.room?.playerId;K(e),P(t.round),O(30),X(null),Z([]),ep(),e?(s(t.prompt),n("drawing")):(s(null),g(t.options),n("guessing"))}else if("stroke"===t.action){let e=t.stroke;Z(t=>[...t,e]),eu(e)}else"clear"===t.action?(Z([]),ep()):"reveal"===t.action?(s(t.prompt),n("reveal")):"scores"===t.action?V(t.scores):"game-over"===t.action&&(V(t.scores),n("scores"));break}case"player-left":e.playerId&&es.current.removePlayer(e.playerId)}},[ee]),ei=(0,c.Ky)({gameId:"drawguess",playerName:ee,onEvent:en}),es=(0,a.useRef)(ei);es.current=ei;let el=(0,c.zj)({gameId:"drawguess",enabled:"menu"===r||"lobby"===r}),ec=(0,a.useRef)(f);ec.current=f;let ed=(0,a.useRef)(N);ed.current=N;let ep=(0,a.useCallback)(()=>{let e=et.current?.getContext("2d");e&&(e.fillStyle="#1a1a2e",e.fillRect(0,0,e.canvas.width,e.canvas.height))},[]),eu=(0,a.useCallback)(e=>{let t=et.current?.getContext("2d");if(t&&!(e.points.length<2)){t.strokeStyle=e.color,t.lineWidth=e.width,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(e.points[0][0],e.points[0][1]);for(let r=1;r<e.points.length;r++)t.lineTo(e.points[r][0],e.points[r][1]);t.stroke()}},[]);(0,a.useEffect)(()=>{let e=et.current;e&&(e.width=e.offsetWidth,e.height=e.offsetHeight,ep(),Q.forEach(eu))});let em=(0,a.useCallback)(e=>{let t=et.current;if(!t)return null;let r=t.getBoundingClientRect(),o="touches"in e?e.touches[0]?.clientX??e.changedTouches[0]?.clientX:e.clientX,a="touches"in e?e.touches[0]?.clientY??e.changedTouches[0]?.clientY:e.clientY;return[(o-r.left)/r.width*t.width,(a-r.top)/r.height*t.height]},[]),eh=(0,a.useCallback)(e=>{if(!U)return;let t=em(e);t&&(er.current=!0,eo.current={points:[t],color:G,width:Y})},[U,G,Y,em]),eg=(0,a.useCallback)(e=>{if(!er.current||!eo.current)return;let t=em(e);if(!t)return;eo.current.points.push(t);let r=et.current?.getContext("2d");if(!r)return;let o=eo.current.points;r.strokeStyle=eo.current.color,r.lineWidth=eo.current.width,r.lineCap="round",r.beginPath(),r.moveTo(o[o.length-2][0],o[o.length-2][1]),r.lineTo(o[o.length-1][0],o[o.length-1][1]),r.stroke()},[em]),ef=(0,a.useCallback)(()=>{if(!er.current||!eo.current)return;er.current=!1;let e=eo.current;eo.current=null,Z(t=>[...t,e]),ei.sendEvent({type:"game-state",payload:{action:"stroke",stroke:e}})},[ei]),ex=(0,a.useCallback)(()=>{Z([]),ep(),ei.sendEvent({type:"game-state",payload:{action:"clear"}})},[ei,ep]);(0,a.useEffect)(()=>{if("drawing"===r||"guessing"===r)return ea.current&&clearInterval(ea.current),ea.current=setInterval(()=>{O(e=>e<=1?(ea.current&&clearInterval(ea.current),ei.room?.role==="host"&&ei.sendEvent({type:"game-state",payload:{action:"reveal",prompt:i}}),n("reveal"),0):e-1)},1e3),()=>{ea.current&&clearInterval(ea.current)}},[r,ei,i]);let eb=(0,a.useCallback)(()=>{let e=ec.current+1;if(e>5){ei.sendEvent({type:"game-state",payload:{action:"game-over",scores:ed.current}}),n("scores");return}let t=ei.room?.players??[],r=(e-1)%t.length,o=t[r].id,a=u(d),i=m(d.filter(e=>e.emoji!==a.emoji)).slice(0,5),l=m([a,...i]);P(e),ec.current=e,O(30),X(null),Z([]),ep();let c=o===ei.room?.playerId;K(c),c?(s(a),n("drawing")):(s(null),g(l),n("guessing")),ei.sendEvent({type:"game-state",payload:{action:"new-round",round:e,drawerId:o,prompt:a,options:l}})},[ei,ep]),ew=(0,a.useCallback)(e=>{if(J)return;let t=e===i?.emoji;if(X(e),t){let e=ei.room?.playerId??"",t={...ed.current,[e]:(ed.current[e]??0)+1};V(t),ed.current=t,D(e=>e+1),ei.sendEvent({type:"game-state",payload:{action:"scores",scores:t}})}},[J,i,ei]),ey=(0,a.useCallback)(()=>{P(0),ec.current=0,D(0),V({}),ed.current={};let e=u(d),t=m(d.filter(t=>t.emoji!==e.emoji)).slice(0,5);s(e),g(m([e,...t])),P(1),ec.current=1,O(30),X(null),K(!1),n("guessing")},[]);if("menu"===r)return(0,o.jsxs)(x,{children:[(0,o.jsxs)(b,{children:["\uD83C\uDFA8 ","pt"===e?"Desenha e Adivinha!":"Draw & Guess!"]}),(0,o.jsx)(w,{children:"pt"===e?"Um desenha, os outros adivinham!":"One draws, others guess!"}),t?(0,o.jsx)(y,{accent:"#d2a8ff",onClick:()=>n("lobby"),children:"\uD83C\uDF10 Online"}):(0,o.jsx)(y,{accent:"#d2a8ff",onClick:ey,children:"pt"===e?"Jogar Sozinho":"Play Solo"})]});if("lobby"===r)return(0,o.jsxs)(x,{children:[(0,o.jsxs)(b,{children:["\uD83C\uDFA8 ","pt"===e?"Desenha e Adivinha!":"Draw & Guess!"]}),ei.room?.connected?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(w,{children:[ei.room.players.length," ","pt"===e?"jogadores":"players"]}),(0,o.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:ei.room.players.map(e=>(0,o.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===ei.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===ei.room.role&&ei.room.players.length>=2&&(0,o.jsx)(y,{accent:"#d2a8ff",onClick:eb,children:"pt"===e?"Come\xe7ar!":"Start!"}),ei.room.players.length<2&&(0,o.jsx)(w,{children:"pt"===e?"M\xednimo 2 jogadores":"Minimum 2 players"})]}):(0,o.jsx)(c.XB,{lang:e,room:ei.room,error:ei.error,availableRooms:el.rooms,onCreateRoom:()=>{let{code:e,roomName:t}=ei.createRoom();el.publishRoom({code:e,roomName:t,hostName:ee,playerCount:1})},onJoinRoom:e=>ei.joinRoom(e),onLeaveRoom:()=>{el.unpublishRoom(),ei.leaveRoom(),n("menu")}})]});if("scores"===r){let t=(ei.room?.players??[{id:"me",name:ee,isHost:!1}]).map(e=>({id:e.id,name:e.name,pts:N[e.id]??0})).sort((e,t)=>t.pts-e.pts);return(0,o.jsxs)(x,{children:[(0,o.jsxs)(b,{children:["\uD83C\uDFC6 ","pt"===e?"Resultados":"Results"]}),(0,o.jsx)(B,{children:t.map((e,t)=>(0,o.jsxs)(I,{highlight:e.id===ei.room?.playerId,children:[(0,o.jsx)("span",{style:{fontSize:18,minWidth:28},children:0===t?"\uD83E\uDD47":1===t?"\uD83E\uDD48":2===t?"\uD83E\uDD49":`${t+1}.`}),(0,o.jsx)(A,{highlight:e.id===ei.room?.playerId,children:e.name}),(0,o.jsx)(E,{color:0===t?"#3fb950":void 0,children:e.pts})]},e.id))}),(0,o.jsx)(y,{accent:"#d2a8ff",onClick:()=>{ei.leaveRoom(),el.unpublishRoom(),n("menu")},children:"Menu"})]})}return"reveal"===r?(0,o.jsxs)(x,{children:[(0,o.jsx)(w,{children:"pt"===e?"A resposta era:":"The answer was:"}),i&&(0,o.jsx)(_,{children:i.emoji}),ei.room?.role==="host"&&(0,o.jsx)(y,{accent:"#d2a8ff",onClick:eb,children:ec.current>=5?"pt"===e?"Ver resultados":"See results":"➡️"})]}):(0,o.jsxs)(x,{children:[(0,o.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,o.jsxs)(T,{urgent:L<=5,children:["⏱️ ",L,"s"]}),U&&(0,o.jsx)(w,{children:"pt"===e?"Desenha isto:":"Draw this:"}),U&&i&&(0,o.jsx)(S,{children:(0,o.jsx)(z,{children:i.emoji})}),!U&&(0,o.jsx)(w,{children:"pt"===e?"O que \xe9 o desenho?":"What is the drawing?"})]}),(0,o.jsx)(v,{ref:et,onMouseDown:eh,onMouseMove:eg,onMouseUp:ef,onMouseLeave:ef,onTouchStart:eh,onTouchMove:eg,onTouchEnd:ef}),U&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)($,{children:p.map(e=>(0,o.jsx)(k,{c:e,active:G===e,onClick:()=>q(e)},e))}),(0,o.jsxs)($,{children:[[2,4,8,14].map(e=>(0,o.jsx)(j,{active:Y===e,onClick:()=>W(e),children:2===e?"\xb7":4===e?"•":8===e?"●":"⬤"},e)),(0,o.jsx)(M,{onClick:ex,children:"\uD83D\uDDD1️"})]})]}),!U&&(0,o.jsx)(C,{children:h.map(e=>(0,o.jsx)(R,{correct:J===e.emoji&&e.emoji===i?.emoji,wrong:J===e.emoji&&e.emoji!==i?.emoji,onClick:()=>ew(e.emoji),disabled:!!J,children:e.emoji},e.emoji))})]})}},1639(e,t,r){r.d(t,{i:()=>ep});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(5782);let d=[{id:"geography",icon:"\uD83C\uDF0D",color:"#3fb950",label:{en:"Geography",pt:"Geografia"},questions:[{q:{en:"What is the capital of France?",pt:"Qual \xe9 a capital da Fran\xe7a?"},options:[{en:"Berlin",pt:"Berlim"},{en:"Madrid",pt:"Madrid"},{en:"Paris",pt:"Paris"},{en:"Rome",pt:"Roma"}],correct:2},{q:{en:"How many continents are there on Earth?",pt:"Quantos continentes existem na Terra?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:2},{q:{en:"What is the largest ocean in the world?",pt:"Qual \xe9 o maior oceano do mundo?"},options:[{en:"Atlantic Ocean",pt:"Oceano Atl\xe2ntico"},{en:"Indian Ocean",pt:"Oceano \xcdndico"},{en:"Arctic Ocean",pt:"Oceano \xc1rtico"},{en:"Pacific Ocean",pt:"Oceano Pac\xedfico"}],correct:3},{q:{en:"Which is the longest river in the world?",pt:"Qual \xe9 o rio mais longo do mundo?"},options:[{en:"Amazon",pt:"Amazonas"},{en:"Nile",pt:"Nilo"},{en:"Mississippi",pt:"Mississ\xedpi"},{en:"Yangtze",pt:"Yangtz\xe9"}],correct:1},{q:{en:"What is the capital of Brazil?",pt:"Qual \xe9 a capital do Brasil?"},options:[{en:"S\xe3o Paulo",pt:"S\xe3o Paulo"},{en:"Rio de Janeiro",pt:"Rio de Janeiro"},{en:"Bras\xedlia",pt:"Bras\xedlia"},{en:"Salvador",pt:"Salvador"}],correct:2},{q:{en:"Which continent is the largest?",pt:"Qual \xe9 o maior continente?"},options:[{en:"Africa",pt:"\xc1frica"},{en:"North America",pt:"Am\xe9rica do Norte"},{en:"Asia",pt:"\xc1sia"},{en:"Europe",pt:"Europa"}],correct:2},{q:{en:"What is the capital of Portugal?",pt:"Qual \xe9 a capital de Portugal?"},options:[{en:"Porto",pt:"Porto"},{en:"Lisbon",pt:"Lisboa"},{en:"Faro",pt:"Faro"},{en:"Coimbra",pt:"Coimbra"}],correct:1},{q:{en:"The Amazon River flows through which continent?",pt:"O rio Amazonas atravessa qual continente?"},options:[{en:"Africa",pt:"\xc1frica"},{en:"North America",pt:"Am\xe9rica do Norte"},{en:"Asia",pt:"\xc1sia"},{en:"South America",pt:"Am\xe9rica do Sul"}],correct:3},{q:{en:"How many oceans are there on Earth?",pt:"Quantos oceanos existem na Terra?"},options:[{en:"3",pt:"3"},{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"}],correct:2},{q:{en:"Which country has the most people?",pt:"Qual pa\xeds tem mais pessoas?"},options:[{en:"USA",pt:"EUA"},{en:"India",pt:"\xcdndia"},{en:"China",pt:"China"},{en:"Russia",pt:"R\xfassia"}],correct:1}]},{id:"science",icon:"\uD83D\uDD2C",color:"#58a6ff",label:{en:"Science",pt:"Ci\xeancias"},questions:[{q:{en:"How many planets are in our Solar System?",pt:"Quantos planetas tem o nosso Sistema Solar?"},options:[{en:"7",pt:"7"},{en:"8",pt:"8"},{en:"9",pt:"9"},{en:"10",pt:"10"}],correct:1},{q:{en:"What are the three states of matter?",pt:"Quais s\xe3o os tr\xeas estados da mat\xe9ria?"},options:[{en:"Hot, cold, warm",pt:"Quente, frio, morno"},{en:"Solid, liquid, gas",pt:"S\xf3lido, l\xedquido, gasoso"},{en:"Hard, soft, medium",pt:"Duro, mole, m\xe9dio"},{en:"Fire, water, earth",pt:"Fogo, \xe1gua, terra"}],correct:1},{q:{en:"Which planet is closest to the Sun?",pt:"Qual planeta est\xe1 mais perto do Sol?"},options:[{en:"Venus",pt:"V\xe9nus"},{en:"Earth",pt:"Terra"},{en:"Mercury",pt:"Merc\xfario"},{en:"Mars",pt:"Marte"}],correct:2},{q:{en:"How many bones does an adult human body have?",pt:"Quantos ossos tem o corpo humano adulto?"},options:[{en:"106",pt:"106"},{en:"206",pt:"206"},{en:"306",pt:"306"},{en:"406",pt:"406"}],correct:1},{q:{en:"What do plants need to make their food?",pt:"O que as plantas precisam para fazer o seu alimento?"},options:[{en:"Darkness and water",pt:"Escurid\xe3o e \xe1gua"},{en:"Sunlight and carbon dioxide",pt:"Luz solar e di\xf3xido de carbono"},{en:"Rain and soil only",pt:"Chuva e terra apenas"},{en:"Oxygen and fire",pt:"Oxig\xeanio e fogo"}],correct:1},{q:{en:"What is the largest planet in our Solar System?",pt:"Qual \xe9 o maior planeta do Sistema Solar?"},options:[{en:"Saturn",pt:"Saturno"},{en:"Neptune",pt:"Neptuno"},{en:"Uranus",pt:"\xdarano"},{en:"Jupiter",pt:"J\xfapiter"}],correct:3},{q:{en:"What organ pumps blood around your body?",pt:"Que \xf3rg\xe3o bombeia o sangue pelo corpo?"},options:[{en:"Liver",pt:"F\xedgado"},{en:"Lungs",pt:"Pulm\xf5es"},{en:"Heart",pt:"Cora\xe7\xe3o"},{en:"Brain",pt:"C\xe9rebro"}],correct:2},{q:{en:"What happens to water when it freezes?",pt:"O que acontece \xe0 \xe1gua quando congela?"},options:[{en:"It becomes a gas",pt:"Torna-se um g\xe1s"},{en:"It becomes smaller",pt:"Fica mais pequena"},{en:"It becomes a solid",pt:"Torna-se um s\xf3lido"},{en:"It disappears",pt:"Desaparece"}],correct:2},{q:{en:"Which planet has rings around it?",pt:"Qual planeta tem an\xe9is \xe0 sua volta?"},options:[{en:"Mars",pt:"Marte"},{en:"Venus",pt:"V\xe9nus"},{en:"Mercury",pt:"Merc\xfario"},{en:"Saturn",pt:"Saturno"}],correct:3},{q:{en:"What is the center of the Solar System?",pt:"O que est\xe1 no centro do Sistema Solar?"},options:[{en:"The Moon",pt:"A Lua"},{en:"The Earth",pt:"A Terra"},{en:"The Sun",pt:"O Sol"},{en:"Jupiter",pt:"J\xfapiter"}],correct:2}]},{id:"animals",icon:"\uD83D\uDC3E",color:"#f0883e",label:{en:"Animals",pt:"Animais"},questions:[{q:{en:"What do pandas mostly eat?",pt:"O que os pandas comem principalmente?"},options:[{en:"Fish",pt:"Peixe"},{en:"Bamboo",pt:"Bambu"},{en:"Leaves",pt:"Folhas"},{en:"Berries",pt:"Bagas"}],correct:1},{q:{en:"Where do penguins live?",pt:"Onde vivem os pinguins?"},options:[{en:"Africa",pt:"\xc1frica"},{en:"North Pole",pt:"Polo Norte"},{en:"South Pole / Antarctica",pt:"Polo Sul / Ant\xe1rtida"},{en:"Amazon rainforest",pt:"Floresta amaz\xf3nica"}],correct:2},{q:{en:"What is a baby cat called?",pt:"Como se chama um beb\xe9 gato?"},options:[{en:"Puppy",pt:"Cachorro"},{en:"Cub",pt:"Filhote"},{en:"Kitten",pt:"Gatinho"},{en:"Calf",pt:"Bezerro"}],correct:2},{q:{en:"Which is the fastest land animal?",pt:"Qual \xe9 o animal terrestre mais r\xe1pido?"},options:[{en:"Lion",pt:"Le\xe3o"},{en:"Horse",pt:"Cavalo"},{en:"Cheetah",pt:"Guepardo"},{en:"Leopard",pt:"Leopardo"}],correct:2},{q:{en:"How many legs does a spider have?",pt:"Quantas patas tem uma aranha?"},options:[{en:"6",pt:"6"},{en:"8",pt:"8"},{en:"10",pt:"10"},{en:"12",pt:"12"}],correct:1},{q:{en:"What is a baby dog called?",pt:"Como se chama um beb\xe9 c\xe3o?"},options:[{en:"Kitten",pt:"Gatinho"},{en:"Foal",pt:"Potro"},{en:"Puppy",pt:"Cachorro"},{en:"Lamb",pt:"Cordeiro"}],correct:2},{q:{en:"Which animal is known as the king of the jungle?",pt:"Qual animal \xe9 conhecido como o rei da selva?"},options:[{en:"Tiger",pt:"Tigre"},{en:"Elephant",pt:"Elefante"},{en:"Lion",pt:"Le\xe3o"},{en:"Gorilla",pt:"Gorila"}],correct:2},{q:{en:"What do cows eat?",pt:"O que as vacas comem?"},options:[{en:"Fish",pt:"Peixe"},{en:"Grass and hay",pt:"Erva e feno"},{en:"Insects",pt:"Insetos"},{en:"Fruit",pt:"Fruta"}],correct:1},{q:{en:"Which is the largest animal on Earth?",pt:"Qual \xe9 o maior animal da Terra?"},options:[{en:"Elephant",pt:"Elefante"},{en:"Giraffe",pt:"Girafa"},{en:"Blue whale",pt:"Baleia azul"},{en:"Giant squid",pt:"Lula gigante"}],correct:2},{q:{en:"What sound does a duck make?",pt:"Que som faz um pato?"},options:[{en:"Moo",pt:"Mu"},{en:"Quack",pt:"Qu\xe1 qu\xe1"},{en:"Oink",pt:"Ronc ronc"},{en:"Baa",pt:"B\xe9"}],correct:1}]},{id:"culture",icon:"\uD83C\uDFA8",color:"#bc8cff",label:{en:"Culture",pt:"Cultura"},questions:[{q:{en:"How many strings does a guitar usually have?",pt:"Quantas cordas tem normalmente uma guitarra?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"8",pt:"8"}],correct:2},{q:{en:'Who wrote the fairy tale "Cinderella"?',pt:'Quem escreveu o conto "A Gata Borralheira"?'},options:[{en:"Hans Christian Andersen",pt:"Hans Christian Andersen"},{en:"Charles Perrault",pt:"Charles Perrault"},{en:"Brothers Grimm",pt:"Irm\xe3os Grimm"},{en:"Walt Disney",pt:"Walt Disney"}],correct:1},{q:{en:"What instrument has black and white keys?",pt:"Que instrumento tem teclas pretas e brancas?"},options:[{en:"Violin",pt:"Violino"},{en:"Trumpet",pt:"Trompete"},{en:"Piano",pt:"Piano"},{en:"Flute",pt:"Flauta"}],correct:2},{q:{en:"In which story does a boy travel to Neverland?",pt:"Em que hist\xf3ria um menino viaja para a Terra do Nunca?"},options:[{en:"Pinocchio",pt:"Pin\xf3quio"},{en:"Peter Pan",pt:"Peter Pan"},{en:"Alice in Wonderland",pt:"Alice no Pa\xeds das Maravilhas"},{en:"The Wizard of Oz",pt:"O Feiticeiro de Oz"}],correct:1},{q:{en:"Which instrument do you blow to play?",pt:"Que instrumento se sopra para tocar?"},options:[{en:"Drums",pt:"Bateria"},{en:"Guitar",pt:"Guitarra"},{en:"Flute",pt:"Flauta"},{en:"Harp",pt:"Harpa"}],correct:2},{q:{en:"What are the three primary colors?",pt:"Quais s\xe3o as tr\xeas cores prim\xe1rias?"},options:[{en:"Green, purple, orange",pt:"Verde, roxo, laranja"},{en:"Red, blue, yellow",pt:"Vermelho, azul, amarelo"},{en:"Black, white, grey",pt:"Preto, branco, cinzento"},{en:"Pink, brown, gold",pt:"Rosa, castanho, dourado"}],correct:1},{q:{en:"Who painted the Mona Lisa?",pt:"Quem pintou a Mona Lisa?"},options:[{en:"Michelangelo",pt:"Miguel \xc2ngelo"},{en:"Pablo Picasso",pt:"Pablo Picasso"},{en:"Leonardo da Vinci",pt:"Leonardo da Vinci"},{en:"Vincent van Gogh",pt:"Vincent van Gogh"}],correct:2},{q:{en:"In the story of the Three Little Pigs, what does the wolf do?",pt:"Na hist\xf3ria dos Tr\xeas Porquinhos, o que faz o lobo?"},options:[{en:"Sings songs",pt:"Canta can\xe7\xf5es"},{en:"Blows down houses",pt:"Derruba casas soprando"},{en:"Bakes cakes",pt:"Faz bolos"},{en:"Steals food",pt:"Rouba comida"}],correct:1},{q:{en:"Which instrument has strings you hit with sticks?",pt:"Que instrumento tem cordas que se tocam com baquetas?"},options:[{en:"Violin",pt:"Violino"},{en:"Piano",pt:"Piano"},{en:"Xylophone",pt:"Xilofone"},{en:"Banjo",pt:"Banjo"}],correct:2}]},{id:"history",icon:"\uD83C\uDFDB️",color:"#e3b341",label:{en:"History",pt:"Hist\xf3ria"},questions:[{q:{en:"Who invented the telephone?",pt:"Quem inventou o telefone?"},options:[{en:"Thomas Edison",pt:"Thomas Edison"},{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Benjamin Franklin",pt:"Benjamin Franklin"}],correct:1},{q:{en:"Who was the first person to walk on the Moon?",pt:"Quem foi a primeira pessoa a caminhar na Lua?"},options:[{en:"Buzz Aldrin",pt:"Buzz Aldrin"},{en:"Yuri Gagarin",pt:"Yuri Gagarin"},{en:"Neil Armstrong",pt:"Neil Armstrong"},{en:"John Glenn",pt:"John Glenn"}],correct:2},{q:{en:"What ancient civilization built the pyramids?",pt:"Que civiliza\xe7\xe3o antiga construiu as pir\xe2mides?"},options:[{en:"Romans",pt:"Romanos"},{en:"Greeks",pt:"Gregos"},{en:"Egyptians",pt:"Eg\xedpcios"},{en:"Vikings",pt:"Vikings"}],correct:2},{q:{en:"Who was Christopher Columbus?",pt:"Quem foi Crist\xf3v\xe3o Colombo?"},options:[{en:"A famous painter",pt:"Um famoso pintor"},{en:"An explorer who sailed to America",pt:"Um explorador que navegou at\xe9 \xe0 Am\xe9rica"},{en:"A Roman emperor",pt:"Um imperador romano"},{en:"A scientist",pt:"Um cientista"}],correct:1},{q:{en:"Who invented the light bulb?",pt:"Quem inventou a l\xe2mpada el\xe9trica?"},options:[{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Albert Einstein",pt:"Albert Einstein"},{en:"Thomas Edison",pt:"Thomas Edison"}],correct:3},{q:{en:"What did the ancient Romans build across their empire to travel?",pt:"O que os romanos constru\xedram pelo imp\xe9rio para viajar?"},options:[{en:"Canals",pt:"Canais"},{en:"Railways",pt:"Comboios"},{en:"Roads",pt:"Estradas"},{en:"Bridges only",pt:"Apenas pontes"}],correct:2},{q:{en:"What did Vasco da Gama discover?",pt:"O que descobriu Vasco da Gama?"},options:[{en:"A sea route to India",pt:"O caminho mar\xedtimo para a \xcdndia"},{en:"The Americas",pt:"As Am\xe9ricas"},{en:"Australia",pt:"A Austr\xe1lia"},{en:"The South Pole",pt:"O Polo Sul"}],correct:0},{q:{en:"Which ancient wonder is still standing today?",pt:"Qual maravilha antiga ainda existe hoje?"},options:[{en:"The Colossus of Rhodes",pt:"O Colosso de Rodes"},{en:"The Hanging Gardens",pt:"Os Jardins Suspensos"},{en:"The Great Pyramid of Giza",pt:"A Grande Pir\xe2mide de Giz\xe9"},{en:"The Lighthouse of Alexandria",pt:"O Farol de Alexandria"}],correct:2},{q:{en:"In what year did the first man land on the Moon?",pt:"Em que ano o primeiro homem pousou na Lua?"},options:[{en:"1959",pt:"1959"},{en:"1969",pt:"1969"},{en:"1979",pt:"1979"},{en:"1989",pt:"1989"}],correct:1}]},{id:"sports",icon:"⚽",color:"#f78166",label:{en:"Sports",pt:"Desporto"},questions:[{q:{en:"How many players are on a football (soccer) team on the field?",pt:"Quantos jogadores tem uma equipa de futebol em campo?"},options:[{en:"9",pt:"9"},{en:"10",pt:"10"},{en:"11",pt:"11"},{en:"12",pt:"12"}],correct:2},{q:{en:"How often are the Summer Olympics held?",pt:"De quantos em quantos anos se realizam os Jogos Ol\xedmpicos de Ver\xe3o?"},options:[{en:"Every 2 years",pt:"De 2 em 2 anos"},{en:"Every 3 years",pt:"De 3 em 3 anos"},{en:"Every 4 years",pt:"De 4 em 4 anos"},{en:"Every 5 years",pt:"De 5 em 5 anos"}],correct:2},{q:{en:"In basketball, how many points is a regular shot worth?",pt:"No basquetebol, quantos pontos vale um cesto normal?"},options:[{en:"1",pt:"1"},{en:"2",pt:"2"},{en:"3",pt:"3"},{en:"4",pt:"4"}],correct:1},{q:{en:"In which sport do you use a racket and a shuttlecock?",pt:"Em que desporto se usa uma raquete e um volante?"},options:[{en:"Tennis",pt:"T\xe9nis"},{en:"Squash",pt:"Squash"},{en:"Badminton",pt:"Badminton"},{en:"Table tennis",pt:"T\xe9nis de mesa"}],correct:2},{q:{en:"Who is famous for winning 23 Olympic gold medals in swimming?",pt:"Quem \xe9 famoso por ganhar 23 medalhas de ouro ol\xedmpicas em nata\xe7\xe3o?"},options:[{en:"Ian Thorpe",pt:"Ian Thorpe"},{en:"Ryan Lochte",pt:"Ryan Lochte"},{en:"Michael Phelps",pt:"Michael Phelps"},{en:"Mark Spitz",pt:"Mark Spitz"}],correct:2},{q:{en:"How many players are on each side in volleyball?",pt:"Quantos jogadores tem cada equipa no voleibol?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:1},{q:{en:"What sport uses a puck instead of a ball?",pt:"Que desporto usa um disco em vez de bola?"},options:[{en:"Lacrosse",pt:"Lacrosse"},{en:"Polo",pt:"Polo"},{en:"Ice hockey",pt:"H\xf3quei no gelo"},{en:"Baseball",pt:"Basebol"}],correct:2},{q:{en:"In tennis, what is it called when the score is tied at 40-40?",pt:"No t\xe9nis, como se chama quando o marcador est\xe1 40-40?"},options:[{en:"Tie",pt:"Empate"},{en:"Deuce",pt:"Deuce"},{en:"Love",pt:"Love"},{en:"Match point",pt:"Match point"}],correct:1},{q:{en:"How many rings are on the Olympic flag?",pt:"Quantos an\xe9is tem a bandeira ol\xedmpica?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"}],correct:1}]}],p=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=(0,s.keyframes)`
  0%   { transform: scale(0.7); opacity: 0; }
  60%  { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); }
`,m=(0,s.keyframes)`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.08); }
`,h=(0,s.keyframes)`
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
`,g=(0,s.keyframes)`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,f=(0,s.keyframes)`
  0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`,x=(0,s.keyframes)`
  from { width: 0; }
`,b=(0,s.keyframes)`
  from { width: 100%; }
  to   { width: 0%; }
`,w=(0,s.keyframes)`
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1); }
`,y=i().div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${l.w4.colors.mainBg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  padding: ${l.w4.spacing.lg};
  animation: ${p} 0.3s ease;

  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.md};
  }
`,v=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.md};
  margin-bottom: ${l.w4.spacing.xl};
`,$=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base};
  min-height: 44px;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    border-color: ${l.w4.colors.accent};
  }
`,k=i().h1`
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 700;
  margin: 0;
  flex: 1;

  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: ${l.w4.typography.fontSizeMd};
  }
`,j=i().div`display:flex;gap:2px;padding:2px;background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.md};margin-bottom:${l.w4.spacing.md};`,M=i().button`padding:8px 18px;border:none;border-radius:${l.w4.borderRadius.sm};font-size:14px;min-height:36px;font-weight:600;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:background ${l.w4.transitions.base},color ${l.w4.transitions.base};background:${({active:e})=>e?"rgba(59,130,246,0.18)":"transparent"};color:${({active:e})=>e?"#3b82f6":l.w4.colors.mainTextMuted};&:hover{color:#3b82f6;background:rgba(59,130,246,0.1);}`,S=i().button`padding:14px 32px;background:#3b82f6;border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:48px;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,0.4);}`,z=i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${l.w4.spacing.lg};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${l.w4.spacing.md};
  }
`,T=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 2px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  transition: transform ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, box-shadow ${l.w4.transitions.base};
  min-height: 44px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({catColor:e})=>e};
    opacity: 0;
    transition: opacity ${l.w4.transitions.base};
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({catColor:e})=>e};
    box-shadow: 0 8px 24px ${({catColor:e})=>`${e}30`};
  }

  &:hover::before {
    opacity: 0.15;
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg} ${l.w4.spacing.md};
  }
`,C=i().span`
  font-size: 2.5rem;
  line-height: 1;

  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: 2rem;
  }
`,R=i().span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
`,_=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${({catColor:e})=>e};
  font-weight: 600;
`,B=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
`,I=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.md};
`,A=i().div`
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  background: ${l.w4.colors.surface};
  border: 1px solid ${({catColor:e})=>e};
  border-radius: 99px;
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${({catColor:e})=>e};
`,E=i().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.surface};
  border-radius: 99px;
  overflow: hidden;
  border: 1px solid ${l.w4.colors.border};
`,F=i().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: ${({catColor:e})=>e};
  border-radius: 99px;
  transition: width 0.4s ease;
  animation: ${x} 0.5s ease;
`,P=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
`,L=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-top: 3px solid ${({catColor:e})=>e};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.xl};
  animation: ${p} 0.25s ease;
  overflow: hidden;

  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`,O=i().div`
  height: 4px;
  background: ${({urgent:e,catColor:t})=>e?"#f85149":t};
  border-radius: 2px;
  margin-bottom: ${l.w4.spacing.md};
  animation: ${b} ${({duration:e})=>e}s linear forwards;
  transform-origin: left;
`,H=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({urgent:e})=>e?"#f85149":l.w4.colors.mainTextMuted};
  transition: color ${l.w4.transitions.slow};
`,D=i().p`
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 ${l.w4.spacing.lg};
  color: ${l.w4.colors.mainText};

  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: ${l.w4.typography.fontSizeMd};
  }
`,N=i().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,V=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  background: ${({status:e})=>"correct"===e||"highlight"===e?"rgba(63, 185, 80, 0.15)":"wrong"===e?"rgba(248, 81, 73, 0.15)":l.w4.colors.mainBg};
  border: 2px solid
    ${({status:e,catColor:t})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":"idle"===e?l.w4.colors.border:t};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 500;
  cursor: ${({status:e})=>"idle"===e?"pointer":"default"};
  text-align: left;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, transform ${l.w4.transitions.base};
  min-height: 56px;
  animation: ${({status:e})=>"correct"===e?`${m} 0.4s ease`:"wrong"===e?`${h} 0.4s ease`:"none"};

  &:hover {
    background: ${({status:e,catColor:t})=>"idle"===e?`${t}18`:void 0};
    border-color: ${({status:e,catColor:t})=>"idle"===e?t:void 0};
    transform: ${({status:e})=>"idle"===e?"translateY(-1px)":"none"};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: ${l.w4.typography.fontSizeBase};
    min-height: 52px;
  }
`,G=i().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-weight: 700;
  font-size: ${l.w4.typography.fontSizeSm};
  flex-shrink: 0;
  background: ${({status:e,catColor:t})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":t};
  color: #fff;
`,q=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md};
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  background: ${({isCorrect:e})=>e?"rgba(63, 185, 80, 0.12)":"rgba(248, 81, 73, 0.12)"};
  border: 1px solid ${({isCorrect:e})=>e?"#3fb950":"#f85149"};
  color: ${({isCorrect:e})=>e?"#3fb950":"#f85149"};
  animation: ${u} 0.35s ease;
`,Y=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.xl};
  max-width: 560px;
  margin: 0 auto;
  width: 100%;
  animation: ${p} 0.35s ease;
`,W=i().div`
  width: 100%;
  background: ${l.w4.colors.surface};
  border: 2px solid ${({catColor:e})=>e};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.xl};
  text-align: center;
  position: relative;
  overflow: hidden;
`,J=i().h2`
  font-size: ${l.w4.typography.fontSizeXl};
  font-weight: 800;
  margin: 0 0 ${l.w4.spacing.sm};
`,X=i().p`
  font-size: 5rem;
  font-weight: 900;
  color: ${({catColor:e})=>e};
  margin: 0;
  line-height: 1;
  animation: ${w} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  text-shadow: 0 0 40px ${({catColor:e})=>`${e}50`};
`,U=i().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  margin: ${l.w4.spacing.xs} 0 ${l.w4.spacing.lg};
`,K=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  margin-bottom: ${l.w4.spacing.lg};
`,Q=i().span`
  font-size: 2.5rem;
  opacity: ${({lit:e})=>e?1:.25};
  filter: ${({lit:e})=>e?"drop-shadow(0 0 8px gold)":"none"};
  animation: ${({lit:e})=>e?`${f} 0.5s ease`:"none"};
  animation-delay: ${({delay:e})=>e}s;
  animation-fill-mode: both;
`,Z=i().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainText};
  margin: 0;
`,ee=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  width: 100%;

  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,et=i().button`
  flex: 1;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, transform ${l.w4.transitions.base};
  min-height: 48px;
  border: 2px solid
    ${({primary:e,catColor:t})=>e?t??l.w4.colors.accent:l.w4.colors.border};
  background: ${({primary:e,catColor:t})=>e?t??l.w4.colors.accent:"transparent"};
  color: ${({primary:e})=>e?"#fff":l.w4.colors.mainText};

  &:hover {
    transform: translateY(-2px);
    background: ${({primary:e,catColor:t})=>e?t??l.w4.colors.accentHover:l.w4.colors.sidebarHover};
  }
`,er=i().div`
  position: fixed;
  top: -20px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px;
  animation: ${g} ${({duration:e})=>e}s
    ${({delay:e})=>e}s ease-in forwards;
  pointer-events: none;
  z-index: 9999;
`,eo=["#f0883e","#58a6ff","#3fb950","#e3b341","#bc8cff","#f78166"];function ea({count:e=60}){let t=(0,a.useMemo)(()=>Array.from({length:e},(e,t)=>({id:t,left:100*Math.random(),delay:2*Math.random(),duration:2.5+2*Math.random(),color:eo[Math.floor(Math.random()*eo.length)]??"#58a6ff",size:6+Math.floor(8*Math.random())})),[e]);return(0,o.jsx)(o.Fragment,{children:t.map(e=>(0,o.jsx)(er,{left:e.left,delay:e.delay,duration:e.duration,color:e.color,size:e.size},e.id))})}let en="atlantis-familyquiz-scores";function ei(){try{let e=localStorage.getItem(en);return e?JSON.parse(e):{}}catch{return{}}}function es(e,t){let r=ei();if((r[e]??0)<t){r[e]=t;try{localStorage.setItem(en,JSON.stringify(r))}catch{}}}let el={title:{en:"Family Quiz",pt:"Quiz da Fam\xedlia"},chooseCategory:{en:"Choose a category",pt:"Escolhe uma categoria"},question:{en:"Question",pt:"Pergunta"},of:{en:"of",pt:"de"},score:{en:"Score",pt:"Pontos"},correct:{en:"✓ Correct!",pt:"✓ Correto!"},correctBonus:{en:"✓ Correct! +5 speed bonus!",pt:"✓ Correto! +5 b\xf3nus de velocidade!"},wrong:{en:"✗ Wrong",pt:"✗ Errado"},timeUp:{en:"⏰ Time's up!",pt:"⏰ Tempo esgotado!"},results:{en:"Results",pt:"Resultados"},retry:{en:"Play Again",pt:"Jogar de Novo"},categories:{en:"Categories",pt:"Categorias"},highScore:{en:"Best:",pt:"Melhor:"},msg3stars:{en:"\uD83C\uDF89 Amazing! You got everything right!",pt:"\uD83C\uDF89 Incr\xedvel! Acertaste tudo!"},msg2stars:{en:"\uD83D\uDC4F Well done! Keep it up!",pt:"\uD83D\uDC4F Muito bem! Continua assim!"},msg1star:{en:"\uD83D\uDCAA Good try! Study and try again!",pt:"\uD83D\uDCAA Boa tentativa! Estuda e tenta outra vez!"},back:{en:"← Back",pt:"← Voltar"}};function ec(e,t){let r=el[e];return"pt"===t?r.pt:r.en}let ed=["A","B","C","D"];function ep({lang:e,onBack:t,canOnline:r}){let[n,i]=(0,a.useState)("categories"),[s,p]=(0,a.useState)("solo"),[u,m]=(0,a.useState)(null),[h,g]=(0,a.useState)(0),[f,x]=(0,a.useState)(0),[b,w]=(0,a.useState)({}),[er,eo]=(0,a.useState)("idle"),[en,el]=(0,a.useState)(null),[eu,em]=(0,a.useState)(ei),[eh,eg]=(0,a.useState)(15),[ef,ex]=(0,a.useState)(0),[eb,ew]=(0,a.useState)(!1),[ey,ev]=(0,a.useState)(new Set),e$=(0,a.useRef)(Date.now()),ek=(0,a.useRef)(null),ej=(0,a.useRef)(null),eM=(0,a.useRef)(null),eS=(0,a.useRef)(!1),[ez]=(0,a.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),eT=(0,a.useRef)(b);eT.current=b;let eC=(0,a.useRef)(u);eC.current=u;let eR=(0,a.useRef)(h);eR.current=h;let e_=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":eI.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),eI.current.sendEvent({type:"host-ack",name:ez,playerId:eI.current.room?.playerId??"",players:eI.current.room?.players??[]});break;case"host-ack":eI.current.setConnected(e.name),e.players&&eI.current.setPlayers([...e.players,{id:eI.current.room?.playerId??"",name:ez,isHost:!1}]);break;case"player-list":eI.current.setPlayers(e.players);break;case"game-state":{let t=e.payload;if("start-question"===t.action){let e=t.categoryId,r=t.questionIndex,o=d.find(t=>t.id===e);o&&(m(o),eC.current=o,g(r),eR.current=r,eo("idle"),el(null),ew(!1),ev(new Set),i("playing"))}else if("player-answered"===t.action){let e=t.playerId,r=t.pts;if(eI.current.room?.role==="host"&&r>0){let t={...eT.current,[e]:(eT.current[e]??0)+r};w(t),eT.current=t}ev(t=>{let r=new Set([...t,e]);if(eI.current.room?.role==="host"){let e=eI.current.room?.players.length??1;r.size>=e&&setTimeout(()=>eE.current(),500)}return r})}else if("question-result"===t.action)w(t.scores);else if("show-answer"===t.action){let e=t.correct;null!==en?eo(en===e?"correct":"wrong"):(eo("wrong"),el(null)),w(t.scores)}else"game-over"===t.action&&(w(t.scores),i("results"));break}case"player-left":e.playerId&&eI.current.removePlayer(e.playerId)}},[ez,en]),eB=(0,c.Ky)({gameId:"familyquiz",playerName:ez,onEvent:e_}),eI=(0,a.useRef)(eB);eI.current=eB;let eA=(0,c.zj)({gameId:"familyquiz",enabled:"online"===s&&("categories"===n||"lobby"===n)}),eE=(0,a.useRef)(()=>{}),eF=(0,a.useCallback)(()=>{ek.current&&(clearInterval(ek.current),ek.current=null)},[]),eP=(0,a.useCallback)(()=>{ej.current&&(clearTimeout(ej.current),ej.current=null),eF()},[eF]);(0,a.useEffect)(()=>()=>eP(),[eP]);let eL=(0,a.useCallback)(()=>{eF(),eg(15),ex(e=>e+1),e$.current=Date.now(),ek.current=setInterval(()=>{eg(e=>e<=1?0:e-1)},1e3)},[eF]),eO=(0,a.useCallback)(e=>{eP(),m(e),g(0),x(0),eo("idle"),el(null),i("playing")},[eP]);(0,a.useEffect)(()=>{"playing"===n&&"idle"===er&&eL()},[n,h]),(0,a.useEffect)(()=>{0===eh&&"playing"===n&&"idle"===er&&u&&(eF(),eo("wrong"),el(null),ew(!1),ej.current=setTimeout(()=>{let e=h+1;e>=u.questions.length?(es(u.id,f),em(ei()),x(f),i("results")):(x(f),g(e),eo("idle"),el(null))},1500))},[eh,n,er,u,h,f,eF]);let eH=(0,a.useCallback)(()=>{if(!eC.current)return;let e=eC.current,t=eR.current+1;eI.current.sendEvent({type:"game-state",payload:{action:"show-answer",correct:e.questions[eR.current].correct,scores:eT.current}}),setTimeout(()=>{t>=e.questions.length?(eI.current.sendEvent({type:"game-state",payload:{action:"game-over",scores:eT.current}}),i("results")):(ev(new Set),g(t),eR.current=t,eo("idle"),el(null),ew(!1),eI.current.sendEvent({type:"game-state",payload:{action:"start-question",categoryId:e.id,questionIndex:t}}))},2e3)},[]);eE.current=eH;let eD=(0,a.useCallback)(e=>{if("idle"!==er||!u)return;let t=u.questions[h];if(!t)return;eF();let r=(Date.now()-e$.current)/1e3,o=e===t.correct,a=o&&r<5,n=5*!!a;if(el(e),"online"===s){let t=eI.current.room?.playerId??"",i=10*!!o+n;if(i>0){let e={...eT.current,[t]:(eT.current[t]??0)+i};w(e),eT.current=e,x(e=>e+i)}ew(a),eI.current.sendEvent({type:"game-state",payload:{action:"player-answered",playerId:t,optionIdx:e,pts:i,elapsed:r}}),eI.current.room?.role==="host"&&(ev(e=>{let r=new Set([...e,t]),o=eI.current.room?.players.length??1;return r.size>=o&&setTimeout(()=>eH(),500),r}),eI.current.sendEvent({type:"game-state",payload:{action:"question-result",scores:eT.current}}));return}ew(a),eo(o?"correct":"wrong");let l=f+10*!!o+n;ej.current=setTimeout(()=>{let e=h+1;e>=u.questions.length?(es(u.id,l),em(ei()),x(l),i("results")):(x(l),g(e),eo("idle"),el(null),ew(!1))},1500)},[er,u,h,f,eF,s,eH]);if("categories"===n)return(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{children:(0,o.jsxs)(k,{children:["\uD83E\uDDE0 ",ec("title",e)]})}),r&&(0,o.jsxs)(j,{children:[(0,o.jsxs)(M,{active:"solo"===s,onClick:()=>p("solo"),children:["\uD83C\uDFAF ","pt"===e?"Sozinho":"Solo"]}),(0,o.jsx)(M,{active:"online"===s,onClick:()=>p("online"),children:"\uD83C\uDF10 Online"})]}),(0,o.jsx)("p",{style:{color:l.w4.colors.mainTextMuted,marginBottom:l.w4.spacing.lg,fontSize:l.w4.typography.fontSizeMd},children:ec("chooseCategory",e)}),(0,o.jsx)(z,{children:d.map(t=>{let r=eu[t.id];return(0,o.jsxs)(T,{catColor:t.color,onClick:()=>{"online"===s?(m(t),eC.current=t,i("lobby")):eO(t)},children:[(0,o.jsx)(C,{children:t.icon}),(0,o.jsx)(R,{children:"pt"===e?t.label.pt:t.label.en}),void 0!==r&&"solo"===s&&(0,o.jsxs)(_,{catColor:t.color,children:[ec("highScore",e)," ",r,"/",10*t.questions.length]})]},t.id)})})]});if("lobby"===n)return(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{children:(0,o.jsxs)(k,{children:["\uD83E\uDDE0 ",ec("title",e)]})}),eB.room?.connected?(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[(0,o.jsx)("p",{style:{color:l.w4.colors.mainTextMuted,fontSize:l.w4.typography.fontSizeMd},children:"host"===eB.room.role?`${eB.room.players.length} ${"pt"===e?"jogadores":"players"}`:"pt"===e?"\xc0 espera do anfitri\xe3o…":"Waiting for host…"}),(0,o.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:eB.room.players.map(e=>(0,o.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===eB.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),u&&(0,o.jsxs)("p",{style:{color:l.w4.colors.mainTextMuted,fontSize:14},children:[u.icon," ","pt"===e?u.label.pt:u.label.en]}),"host"===eB.room.role&&u&&(0,o.jsx)(S,{onClick:()=>{g(0),eR.current=0,x(0),w({}),eT.current={},ev(new Set),eo("idle"),el(null),i("playing"),eB.sendEvent({type:"game-state",payload:{action:"start-question",categoryId:u.id,questionIndex:0}})},children:"pt"===e?"Come\xe7ar!":"Start!"})]}):(0,o.jsx)(c.XB,{lang:e,room:eB.room,error:eB.error,availableRooms:eA.rooms,onCreateRoom:()=>{let{code:e,roomName:t}=eB.createRoom();eA.publishRoom({code:e,roomName:t,hostName:ez,playerCount:1})},onJoinRoom:e=>eB.joinRoom(e),onLeaveRoom:()=>{eA.unpublishRoom(),eB.leaveRoom(),i("categories")}})]});if("playing"===n&&u){let t=u.questions[h];if(!t)return null;let r=u.questions.length,a=(h+1)/r*100;return(0,o.jsxs)(y,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)($,{onClick:()=>{eP(),i("categories")},children:ec("back",e)}),(0,o.jsxs)(k,{children:[u.icon," ","pt"===e?u.label.pt:u.label.en]})]}),(0,o.jsxs)(B,{children:[(0,o.jsxs)(I,{children:[(0,o.jsxs)(A,{catColor:u.color,children:[ec("score",e),": ",f]}),(0,o.jsx)(E,{children:(0,o.jsx)(F,{pct:a,catColor:u.color})}),(0,o.jsxs)(P,{children:[ec("question",e)," ",h+1," ",ec("of",e)," ",r]}),(0,o.jsxs)(H,{urgent:eh<=5,children:[eh,"s"]})]}),(0,o.jsxs)(L,{catColor:u.color,children:[(0,o.jsx)(O,{duration:15,catColor:u.color,urgent:eh<=5},ef),(0,o.jsx)(D,{children:"pt"===e?t.q.pt:t.q.en}),(0,o.jsx)(N,{children:t.options.map((r,a)=>{let n="idle";return"idle"!==er&&(a===t.correct?n=en===a?"correct":"highlight":a===en&&(n="wrong")),(0,o.jsxs)(V,{status:n,catColor:u.color,disabled:"idle"!==er,...{onTouchStart:e=>{eM.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!eM.current)return;let t=Math.abs(e.changedTouches[0].clientX-eM.current.x),r=Math.abs(e.changedTouches[0].clientY-eM.current.y);eM.current=null,t>8||r>8||(eS.current=!0,eD(a))},onClick:()=>{if(eS.current){eS.current=!1;return}eD(a)}},children:[(0,o.jsx)(G,{status:n,catColor:u.color,children:ed[a]}),"pt"===e?r.pt:r.en]},a)})})]},h),"idle"!==er&&(0,o.jsx)(q,{isCorrect:"correct"===er,children:"correct"===er?eb?ec("correctBonus",e):ec("correct",e):null===en?ec("timeUp",e):ec("wrong",e)})]})]})}if("results"===n&&u){let t=10*u.questions.length,r=Math.round(f/t*100),a=100===r?3:r>=60?2:1,n={3:ec("msg3stars",e),2:ec("msg2stars",e),1:ec("msg1star",e)};return(0,o.jsxs)(y,{children:[3===a&&(0,o.jsx)(ea,{}),(0,o.jsxs)(v,{children:[(0,o.jsx)($,{onClick:()=>i("categories"),children:ec("back",e)}),(0,o.jsxs)(k,{children:[u.icon," ",ec("results",e)]})]}),(0,o.jsxs)(Y,{children:[(0,o.jsxs)(W,{catColor:u.color,children:[(0,o.jsx)(J,{children:ec("results",e)}),(0,o.jsx)(X,{catColor:u.color,children:f}),(0,o.jsxs)(U,{children:[r,"% — ",f,"/",t]}),(0,o.jsx)(K,{children:[1,2,3].map(e=>(0,o.jsx)(Q,{lit:e<=a,delay:(e-1)*.15,children:"⭐"},e))}),(0,o.jsx)(Z,{children:n[a]})]}),"online"===s&&(eB.room?.players??[]).length>1&&(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6,width:"100%",maxWidth:300,marginTop:12},children:(eB.room?.players??[]).map(e=>({...e,pts:b[e.id]??0})).sort((e,t)=>t.pts-e.pts).map((e,t)=>(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:l.w4.colors.surface,border:`1px solid ${e.id===eB.room?.playerId?l.w4.colors.accent:l.w4.colors.border}`,borderRadius:12},children:[(0,o.jsx)("span",{style:{fontSize:16,minWidth:24},children:0===t?"\uD83E\uDD47":1===t?"\uD83E\uDD48":2===t?"\uD83E\uDD49":`${t+1}.`}),(0,o.jsx)("span",{style:{flex:1,fontWeight:600,color:e.id===eB.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:e.name}),(0,o.jsx)("span",{style:{fontSize:18,fontWeight:800,color:0===t?"#3fb950":l.w4.colors.mainText},children:e.pts})]},e.id))}),(0,o.jsx)(ee,{children:"online"===s?(0,o.jsx)(et,{onClick:()=>{eB.leaveRoom(),eA.unpublishRoom(),p("solo"),i("categories")},children:ec("categories",e)}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(et,{primary:!0,catColor:u.color,onClick:()=>eO(u),children:ec("retry",e)}),(0,o.jsx)(et,{onClick:()=>i("categories"),children:ec("categories",e)})]})})]})]})}return null}},4980(e,t,r){r.d(t,{p:()=>T});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063);let c=["\uD83C\uDF33","\uD83E\uDEA8","\uD83D\uDCE6","\uD83C\uDFE0","\uD83D\uDDD1️","\uD83E\uDE91","\uD83D\uDE97","\uD83C\uDF3A","\uD83E\uDEB4","\uD83E\uDDF1","\uD83C\uDFE2","\uD83C\uDFAA","⛺","\uD83D\uDDFF","\uD83D\uDED2"],d=["\uD83C\uDF33","\uD83E\uDEA8","\uD83D\uDCE6","\uD83E\uDE91","\uD83E\uDEB4","\uD83E\uDDF1"];function p(e){return e[Math.floor(Math.random()*e.length)]}let u=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,m=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,h=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,g=(0,s.keyframes)`0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}`,f=(0,s.keyframes)`0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}`,x=i().div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${l.w4.spacing.lg};gap:${l.w4.spacing.lg};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 40% 30%,rgba(63,185,80,0.06) 0%,transparent 70%),#080b12;`,b=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${u} 0.3s ease;`,w=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:340px;`,y=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,v=i().span`font-size:72px;animation:${h} 1s ease-in-out infinite;`,$=i().div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:300px;width:100%;`,k=i().button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,48px);
  background:${({selected:e})=>e?"rgba(63,185,80,0.15)":l.w4.colors.surface};
  border:3px solid ${({selected:e})=>e?"#3fb950":l.w4.colors.border};
  border-radius:${l.w4.borderRadius.lg};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:70px;
  &:hover{border-color:#3fb950;transform:scale(1.05);}
  &:active{transform:scale(0.95);}
`,j=i().div`
  display:grid;grid-template-columns:repeat(${6},1fr);gap:6px;
  max-width:420px;width:100%;animation:${u} 0.3s ease;
`,M=i().button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;
  font-size:clamp(24px,5vw,36px);background:${l.w4.colors.surface};
  border:2px solid ${({found:e,wrong:t})=>e?"#3fb950":t?"#f97583":l.w4.colors.border};
  border-radius:${l.w4.borderRadius.md};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:48px;
  background: ${({found:e,wrong:t})=>e?"rgba(63,185,80,0.15)":t?"rgba(249,117,131,0.1)":l.w4.colors.surface};
  animation: ${({found:e,wrong:t})=>e?m:t?g:"none"} ${({found:e})=>e?"0.3s ease":"0.4s ease"};
  opacity: ${({revealed:e,found:t})=>e&&!t?.4:1};
  cursor: ${({revealed:e})=>e?"default":"pointer"};
  &:hover:not(:disabled){transform:scale(1.08);border-color:${l.w4.colors.accent};}
  &:active:not(:disabled){transform:scale(0.95);}
`,S=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};`,z=i().div`font-size:48px;animation:${f} 0.5s ease-in-out;`;function T({lang:e}){let[t,r]=(0,a.useState)("menu"),[n,i]=(0,a.useState)(0),[s,l]=(0,a.useState)(0),[u,m]=(0,a.useState)(d[0]),[h,g]=(0,a.useState)([]),[f,C]=(0,a.useState)(20),[R,_]=(0,a.useState)(0),[B,I]=(0,a.useState)(!1),[A,E]=(0,a.useState)(null),[F,P]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-hideseek-best")??"0")}catch{return 0}}),L=(0,a.useRef)(null),O=(0,a.useCallback)(()=>{m(p(d)),r("hiding")},[]),H=(0,a.useCallback)(()=>{g(function(e){let t=Array.from({length:30},()=>({emoji:p(c),isHider:!1,revealed:!1})),r=Math.floor(Math.random()*t.length);t[r]={emoji:e,isHider:!0,revealed:!1};let o=2+Math.floor(3*Math.random());for(let r=0;r<o;r++){let r=Math.floor(Math.random()*t.length);t[r].isHider||(t[r].emoji=e)}return t}(u)),C(20),_(0),I(!1),E(null),r("seeking")},[u]);(0,a.useEffect)(()=>{if("seeking"===t)return L.current=setInterval(()=>{C(e=>e<=1?(L.current&&clearInterval(L.current),r("reveal"),0):e-1)},1e3),()=>{L.current&&clearInterval(L.current)}},[t]);let D=(0,a.useCallback)(e=>{if("seeking"===t&&!B&&!h[e].revealed)if(_(e=>e+1),h[e].isHider){I(!0),L.current&&clearInterval(L.current);let t=Math.max(0,5*f-10*R),o=100+t;l(e=>e+o),g(t=>t.map((t,r)=>r===e?{...t,revealed:!0}:t)),setTimeout(()=>{let e=n+1;if(i(e),e>=3){let e=s+100+t;if(e>F){P(e);try{localStorage.setItem("atlantis-hideseek-best",String(e))}catch{}}r("scores")}else O()},1500)}else E(e),g(t=>t.map((t,r)=>r===e?{...t,revealed:!0}:t)),setTimeout(()=>E(null),500)},[t,B,h,f,R,n,s,F,O]),N=(0,a.useCallback)(()=>{i(0),l(0),O()},[O]);if("menu"===t)return(0,o.jsxs)(x,{children:[(0,o.jsxs)(b,{children:["\uD83D\uDD0D ","pt"===e?"Esconde-Esconde!":"Hide & Seek!"]}),(0,o.jsx)(w,{children:"pt"===e?"Esconde-te como um objeto e v\xea se te encontram!":"Disguise yourself as an object and see if they find you!"}),F>0&&(0,o.jsxs)(w,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",F]}),(0,o.jsx)(y,{accent:"#3fb950",onClick:N,children:"pt"===e?"Jogar!":"Play!"})]});if("hiding"===t)return(0,o.jsxs)(x,{children:[(0,o.jsxs)(b,{children:["\uD83E\uDEE3 ","pt"===e?"Escolhe um disfarce!":"Pick a disguise!"]}),(0,o.jsx)(w,{children:"pt"===e?"Transforma-te num objeto!":"Turn into an object!"}),(0,o.jsx)($,{children:d.map(e=>(0,o.jsx)(k,{selected:u===e,onClick:()=>m(e),children:e},e))}),(0,o.jsxs)(y,{accent:"#3fb950",onClick:H,children:["pt"===e?"Esconder!":"Hide!"," ",u]})]});if("reveal"===t){let t=h.findIndex(e=>e.isHider);return(0,o.jsxs)(x,{children:[(0,o.jsx)(b,{children:"pt"===e?"Tempo esgotado!":"Time's up!"}),(0,o.jsx)(w,{children:"pt"===e?"Estava aqui:":"Was hiding here:"}),(0,o.jsxs)(z,{children:[h[t]?.emoji??"?"," → \uD83D\uDC38"]}),(0,o.jsx)(y,{accent:"#3fb950",onClick:()=>{let e=n+1;if(i(e),e>=3){if(s>F){P(s);try{localStorage.setItem("atlantis-hideseek-best",String(s))}catch{}}r("scores")}else O()},children:"➡️"})]})}if("scores"===t)return(0,o.jsxs)(x,{children:[(0,o.jsx)(v,{children:"\uD83C\uDFC6"}),(0,o.jsx)(b,{children:"pt"===e?"Resultados":"Results"}),(0,o.jsxs)(S,{color:"#3fb950",children:["⭐ ",s]}),s>=F&&s>0&&(0,o.jsxs)(w,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,o.jsx)(y,{accent:"#3fb950",onClick:()=>r("menu"),children:"Menu"})]});let V=f<=5?"#f97583":f<=10?"#f59e0b":"#3fb950";return(0,o.jsxs)(x,{children:[(0,o.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,o.jsxs)(S,{color:"#3fb950",children:["⭐ ",s]}),(0,o.jsxs)(S,{color:V,children:["⏱️ ",f,"s"]}),(0,o.jsxs)(S,{children:["pt"===e?"Tentativas":"Tries",": ",R]})]}),(0,o.jsx)(w,{children:"pt"===e?"\uD83D\uDD0D Encontra quem se escondeu!":"\uD83D\uDD0D Find the hidden one!"}),(0,o.jsx)(j,{children:h.map((e,t)=>(0,o.jsx)(M,{revealed:e.revealed&&!e.isHider,found:e.revealed&&e.isHider,wrong:A===t,onClick:()=>D(t),disabled:e.revealed,children:e.revealed&&e.isHider?"\uD83D\uDC38":e.emoji},t))})]})}},2036(e,t,r){r.d(t,{v:()=>C});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(4e3),d=r(9484);let p={_:null,R:"#ff4444",O:"#ff8800",Y:"#ffcc00",G:"#44cc44",B:"#4488ff",K:"#333333",W:"#cccccc"},u={fire:[["_","_","_","Y","Y","_","_","_"],["_","_","Y","O","O","Y","_","_"],["_","Y","O","R","R","O","Y","_"],["_","Y","R","R","R","R","Y","_"],["Y","O","R","R","R","R","O","Y"],["Y","O","R","R","R","R","O","Y"],["_","Y","O","R","R","O","Y","_"],["_","_","Y","O","O","Y","_","_"]],spike:[["_","_","_","W","W","_","_","_"],["_","_","_","W","W","_","_","_"],["_","_","W","K","K","W","_","_"],["_","_","W","K","K","W","_","_"],["_","W","K","K","K","K","W","_"],["_","W","K","K","K","K","W","_"],["W","K","K","K","K","K","K","W"],["W","K","K","K","K","K","K","W"]],cactus:[["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","G","_","G","G","_","G","_"],["_","G","G","G","G","G","G","_"],["_","G","G","G","G","G","G","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"]],bomb:[["_","_","_","Y","_","_","_","_"],["_","_","Y","O","_","_","_","_"],["_","_","_","K","K","_","_","_"],["_","_","K","K","K","K","_","_"],["_","K","K","K","K","K","K","_"],["_","K","K","W","K","K","K","_"],["_","K","K","K","K","K","K","_"],["_","_","K","K","K","K","_","_"]],rock:[["_","_","_","W","W","_","_","_"],["_","_","W","K","K","W","_","_"],["_","W","K","K","K","K","W","_"],["W","K","K","W","K","K","K","W"],["W","K","K","K","K","K","K","W"],["W","K","K","K","K","K","K","W"]]},m=["fire","spike","cactus","bomb","rock"];function h({type:e,size:t=32,style:r,className:n}){let i=u[e],s=i.length,l=i[0].length,c=(0,a.useMemo)(()=>{let e=[];for(let t=0;t<s;t++)for(let r=0;r<l;r++){let o=p[i[t][r]];o&&e.push({x:r,y:t,color:o})}return e},[i,s,l]);return(0,o.jsx)("svg",{width:t,height:s/l*t,viewBox:`0 0 ${l} ${s}`,style:{imageRendering:"pixelated",...r},className:n,children:c.map((e,t)=>(0,o.jsx)("rect",{x:e.x,y:e.y,width:1,height:1,fill:e.color},t))})}let g=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,f=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,x=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,b=i().div`
  flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:${l.w4.spacing.lg};gap:${l.w4.spacing.xl};overflow:hidden;min-height:0;
  background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(63,185,80,0.06) 0%,transparent 70%),
             radial-gradient(ellipse 50% 60% at 70% 80%,rgba(88,166,255,0.04) 0%,transparent 70%),#080b12;
`,w=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${g} 0.3s ease;`,y=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;`,v=i().div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:#3fb950;animation:${x} 0.5s ease;`,$=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}&:active{transform:translateY(-1px);}`,k=i().span`font-size:72px;animation:${f} 1s ease-in-out infinite;`,j=i().div`font-size:${l.w4.typography.fontSizeLg};font-weight:800;color:${l.w4.colors.mainText};`,M=i().div`
  position:relative;width:100%;max-width:600px;height:240px;
  background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};
  overflow:hidden;touch-action:manipulation;user-select:none;
`,S=i().div`
  position:absolute;top:${75}%;left:0;right:0;height:2px;
  background:rgba(63,185,80,0.4);
`,z=i().div`
  position:absolute;top:${75}%;left:0;right:0;bottom:0;
  background:linear-gradient(0deg,rgba(63,185,80,0.1),transparent);
`,T=i().div`
  position:absolute;
  left:${({left:e})=>e}%;top:${({top:e})=>e}%;
  transform:translate(-50%,-100%);
  transition:opacity ${l.w4.transitions.slow};
  ${({dead:e})=>e?"opacity:0.3;filter:grayscale(1);":""}
`;function C({lang:e}){let[t,r]=(0,a.useState)("menu"),[n,i]=(0,a.useState)(3),[s,l]=(0,a.useState)(0),[p,u]=(0,a.useState)(20),[g,f]=(0,a.useState)(75),[x,R]=(0,a.useState)(!1),[_,B]=(0,a.useState)([]),[I]=(0,a.useState)(()=>Math.floor(Math.random()*d.L.length)),[A,E]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-jumpparty-best")??"0")}catch{return 0}}),F=(0,a.useRef)(!1),P=(0,a.useRef)(20),L=(0,a.useRef)(75),O=(0,a.useRef)(0),H=(0,a.useRef)(!1),D=(0,a.useRef)(0),N=(0,a.useRef)(0),V=(0,a.useRef)([]),G=(0,a.useRef)(0),q=(0,a.useRef)(null),Y=(0,a.useCallback)(()=>{if(F.current||H.current)return;F.current=!0;let e=performance.now(),t=r=>{let o=Math.min((r-e)/600,1),a=75-35*Math.sin(Math.PI*o);L.current=a,f(a),o<1?requestAnimationFrame(t):(L.current=75,f(75),F.current=!1)};requestAnimationFrame(t)},[]);(0,a.useEffect)(()=>{if("playing"!==t)return;let e=()=>{if(H.current)return;0!==O.current&&(P.current=Math.max(5,Math.min(95,P.current+1.5*O.current)),u(P.current)),V.current=V.current.map(e=>({...e,x:e.x-.8})).filter(e=>!(e.x<-10)||(D.current+=1,l(D.current),!1));let t=P.current,o=L.current;for(let e of V.current){let a=8>Math.abs(e.x-t),n=o>=67;if(a&&n){H.current=!0,R(!0);let e=D.current;if(e>A){E(e);try{localStorage.setItem("atlantis-jumpparty-best",String(e))}catch{}}setTimeout(()=>r("gameover"),600);return}}B([...V.current]),G.current=requestAnimationFrame(e)};return G.current=requestAnimationFrame(e),()=>cancelAnimationFrame(G.current)},[t,A]),(0,a.useEffect)(()=>{if("playing"!==t)return;let e=()=>{if(H.current)return;let t=++N.current;V.current.push({id:t,type:m[Math.floor(Math.random()*m.length)],x:105}),q.current=setTimeout(e,1e3+1200*Math.random())};return q.current=setTimeout(e,800),()=>{q.current&&clearTimeout(q.current)}},[t]),(0,a.useEffect)(()=>{if("playing"!==t)return;let e=e=>{("Space"===e.code||"ArrowUp"===e.key)&&(e.preventDefault(),Y()),"ArrowLeft"===e.key&&(e.preventDefault(),O.current=-1),"ArrowRight"===e.key&&(e.preventDefault(),O.current=1)},r=e=>{"ArrowLeft"===e.key&&-1===O.current&&(O.current=0),"ArrowRight"===e.key&&1===O.current&&(O.current=0)};return window.addEventListener("keydown",e),window.addEventListener("keyup",r),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",r)}},[t,Y]);let W=(0,a.useCallback)(()=>{l(0),D.current=0,R(!1),H.current=!1,V.current=[],B([]),u(20),P.current=20,f(75),L.current=75,O.current=0,F.current=!1,i(3),r("countdown");let e=3,t=setInterval(()=>{i(--e),e<=0&&(clearInterval(t),r("playing"))},800)},[]);return"menu"===t?(0,o.jsxs)(b,{children:[(0,o.jsx)(d.G,{paletteIndex:I,pose:"idle",size:64}),(0,o.jsx)(w,{children:"pt"===e?"Salta!":"Jump!"}),(0,o.jsx)(y,{children:"pt"===e?"Salta sobre os obst\xe1culos! Um s\xf3 bot\xe3o!":"Jump over obstacles! One button!"}),A>0&&(0,o.jsxs)(y,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",A]}),(0,o.jsx)($,{accent:"#3fb950",onClick:W,children:"pt"===e?"Jogar!":"Play!"})]}):"countdown"===t?(0,o.jsx)(b,{children:(0,o.jsx)(v,{children:n>0?n:"\uD83C\uDFC3"},n)}):"gameover"===t?(0,o.jsxs)(b,{children:[(0,o.jsx)(k,{children:"\uD83D\uDCA5"}),(0,o.jsx)(w,{children:"pt"===e?"Fim!":"Game Over!"}),(0,o.jsxs)(j,{children:["⭐ ",s]}),s>=A&&s>0&&(0,o.jsxs)(y,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,o.jsx)($,{accent:"#3fb950",onClick:W,children:"pt"===e?"Outra Vez":"Again"})]}):(0,o.jsxs)(b,{children:[(0,o.jsxs)(j,{children:["⭐ ",s]}),(0,o.jsxs)(M,{children:[(0,o.jsx)(z,{}),(0,o.jsx)(S,{}),(0,o.jsx)(T,{left:p,top:g,dead:x,children:(0,o.jsx)(d.G,{paletteIndex:I,pose:x?"dead":F.current?"jump":0!==O.current?"walk":"idle",size:48,flipX:-1===O.current})}),_.map(e=>(0,o.jsx)(T,{left:e.x,top:75,children:(0,o.jsx)(h,{type:e.type,size:36})},e.id))]}),(0,o.jsx)(c.UO,{axes:"horizontal",onMove:e=>{O.current=e.dx},actions:[{id:"jump",label:"⬆",color:"#2ea043",onPress:Y}]})]})}},6987(e,t,r){r.d(t,{Y:()=>ex});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(5782);let d={title:{pt:"Jogo da Mem\xf3ria",en:"Memory Game"},subtitle:{pt:"Vira duas cartas e encontra os pares!",en:"Flip two cards and find the pairs!"},easy:{pt:"F\xe1cil",en:"Easy"},medium:{pt:"M\xe9dio",en:"Medium"},hard:{pt:"Dif\xedcil",en:"Hard"},easyDesc:{pt:"16 cartas \xb7 8 pares",en:"16 cards \xb7 8 pairs"},mediumDesc:{pt:"24 cartas \xb7 12 pares",en:"24 cards \xb7 12 pairs"},hardDesc:{pt:"40 cartas \xb7 20 pares",en:"40 cards \xb7 20 pairs"},moves:{pt:"Jogadas",en:"Moves"},pairs:{pt:"Pares",en:"Pairs"},time:{pt:"Tempo",en:"Time"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incr\xedvel!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"R\xe1pido!",en:"Fast!"},gameOver:{pt:"Parab\xe9ns!",en:"Well done!"},finalMoves:{pt:"jogadas",en:"moves"},finalTime:{pt:"Tempo total",en:"Total time"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestMoves:{pt:"Melhor",en:"Best"},flipTwo:{pt:"Vira duas cartas!",en:"Flip two cards!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},pickSize:{pt:"Quantas cartas?",en:"How many cards?"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espa\xe7o",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"C\xe3es, gatos, le\xf5es e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguet\xf5es e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},matched:{pt:"Par encontrado!",en:"Match found!"},tryAgain:{pt:"Tenta outra vez!",en:"Try again!"},allFound:{pt:"Encontraste todos!",en:"You found them all!"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Advers\xe1rio",en:"Opponent"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},theirTurn:{pt:"Vez do advers\xe1rio!",en:"Opponent's turn!"},youWin:{pt:"\uD83C\uDF89 Ganhaste!",en:"\uD83C\uDF89 You win!"},youLose:{pt:"\uD83D\uDE05 Perdeste!",en:"\uD83D\uDE05 You lost!"},tied:{pt:"\uD83E\uDD1D Empate!",en:"\uD83E\uDD1D Tied!"},opponentLeft:{pt:"O advers\xe1rio saiu.",en:"Opponent left."},rematch:{pt:"Revanche",en:"Rematch"},waiting:{pt:"\xc0 espera…",en:"Waiting…"}};function p(e,t){return d[e]["pt"===t?"pt":"en"]}let u=[{id:"animals",emoji:"\uD83E\uDD81",color:"#f59e0b",preview:["\uD83D\uDC36","\uD83D\uDC31","\uD83E\uDD81","\uD83D\uDC3C","\uD83E\uDD8B"],symbols:["\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC2D","\uD83D\uDC39","\uD83D\uDC30","\uD83E\uDD8A","\uD83D\uDC3B","\uD83D\uDC3C","\uD83D\uDC28","\uD83D\uDC2F","\uD83E\uDD81","\uD83D\uDC2E","\uD83D\uDC37","\uD83D\uDC38","\uD83D\uDC35","\uD83D\uDC14","\uD83E\uDD84","\uD83D\uDC1D","\uD83E\uDD8B","\uD83D\uDC1E","\uD83D\uDC22","\uD83D\uDC19","\uD83D\uDC2C","\uD83D\uDC33","\uD83D\uDC18","\uD83E\uDD92"]},{id:"food",emoji:"\uD83C\uDF55",color:"#ef4444",preview:["\uD83C\uDF55","\uD83C\uDF66","\uD83E\uDDC1","\uD83C\uDF53","\uD83C\uDF69"],symbols:["\uD83C\uDF4E","\uD83C\uDF4C","\uD83C\uDF53","\uD83C\uDF49","\uD83C\uDF55","\uD83E\uDDC1","\uD83C\uDF69","\uD83C\uDF6A","\uD83C\uDF2E","\uD83C\uDF66","\uD83C\uDF82","\uD83C\uDF6B","\uD83C\uDF6C","\uD83C\uDF6D","\uD83C\uDF7F","\uD83E\uDD50","\uD83C\uDF54","\uD83C\uDF2D","\uD83C\uDF5F","\uD83E\uDD6A","\uD83C\uDF5D","\uD83C\uDF63","\uD83C\uDF67","\uD83C\uDF70","\uD83E\uDD51","\uD83C\uDF47"]},{id:"space",emoji:"\uD83D\uDE80",color:"#8b5cf6",preview:["\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19"],symbols:["\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19","☀️","\uD83E\uDE90","\uD83C\uDF1F","\uD83D\uDCAB","✨","\uD83D\uDD2D","\uD83D\uDC7D","\uD83E\uDD16","\uD83D\uDC7E","\uD83D\uDEF0️","\uD83D\uDC8E","\uD83D\uDD2E","⚡","\uD83C\uDF08","☄️","\uD83C\uDFAF","\uD83C\uDFAE","\uD83C\uDFB2","\uD83E\uDDE9","\uD83C\uDFB8","\uD83D\uDD25"]},{id:"mix",emoji:"\uD83C\uDFAA",color:"#3fb950",preview:["\uD83D\uDC36","\uD83C\uDF55","\uD83D\uDE80","⭐","\uD83C\uDFB8"],symbols:["\uD83D\uDC36","\uD83D\uDC31","\uD83E\uDD81","\uD83D\uDC3C","\uD83E\uDD8B","\uD83D\uDC22","\uD83D\uDC19","\uD83D\uDC2C","\uD83C\uDF55","\uD83C\uDF66","\uD83E\uDDC1","\uD83C\uDF53","\uD83C\uDF69","\uD83C\uDF49","\uD83C\uDF82","\uD83C\uDF4C","\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19","☀️","\uD83C\uDF08","\uD83D\uDC8E","\uD83C\uDFB8","⚽"]}],m={easy:8,medium:12,hard:20};function h(e){let t=[...e];for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}function g(e){let t=Math.floor(e/60);return`${t}:${(e%60).toString().padStart(2,"0")}`}let f=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,x=(0,s.keyframes)`
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`,b=(0,s.keyframes)`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`,w=(0,s.keyframes)`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,y=(0,s.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,v=(0,s.keyframes)`
  0%   { transform: rotateY(0deg) scale(1); }
  30%  { transform: rotateY(0deg) scale(1.15); }
  60%  { transform: rotateY(0deg) scale(0.95); }
  100% { transform: rotateY(0deg) scale(1); }
`,$=(0,s.keyframes)`
  0%, 100% { transform: rotateY(0deg); }
  20%      { transform: rotateY(0deg) translateX(-4px); }
  40%      { transform: rotateY(0deg) translateX(4px); }
  60%      { transform: rotateY(0deg) translateX(-3px); }
  80%      { transform: rotateY(0deg) translateX(3px); }
`,k=(0,s.keyframes)`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(80px) rotate(720deg); opacity: 0; }
`,j=(0,s.keyframes)`
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
  50%      { transform: translateY(-6px) scale(1.1); opacity: 1; }
`,M=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.06) 0%, transparent 70%),
    #080b12;
`,S=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: ${l.w4.spacing.xl};
  animation: ${f} 0.4s ease;
`,z=i().h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`,T=i().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 380px;
  line-height: 1.5;
`,C=i().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.md};
  max-width: 480px;
  width: 100%;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    max-width: 240px;
  }
`,R=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px 22px;
  background: linear-gradient(168deg, ${({accent:e})=>e}12 0%, ${l.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}35;
  border-radius: 20px;
  cursor: pointer;
  transition: all ${l.w4.transitions.slow};
  font-family: ${l.w4.typography.fontFamily};
  position: relative;
  overflow: hidden;
  min-height: 48px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${({accent:e})=>e}, transparent);
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: ${({accent:e})=>e}70;
    box-shadow: 0 8px 28px ${({accent:e})=>e}20;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,_=i().span`
  font-size: 44px;
  animation: ${b} 2.5s ease-in-out infinite;
`,B=i().div`
  display: flex;
  gap: 4px;
  font-size: 20px;
  opacity: 0.7;
`,I=i().span`
  font-size: 16px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,A=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,E=i().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,F=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 32px;
  background: linear-gradient(168deg, ${({accent:e})=>e}15 0%, ${l.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}40;
  border-radius: 20px;
  cursor: pointer;
  transition: all ${l.w4.transitions.slow};
  font-family: ${l.w4.typography.fontFamily};
  min-width: 150px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({accent:e})=>e};
    border-radius: 20px 20px 0 0;
    opacity: 0.6;
  }

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: ${({accent:e})=>e}80;
    box-shadow: 0 8px 30px ${({accent:e})=>e}25;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,P=i().span`
  font-size: 40px;
  animation: ${b} 2s ease-in-out infinite;
`,L=i().span`
  font-size: 18px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,O=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,H=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px ${l.w4.spacing.md} ${l.w4.spacing.lg};
  gap: 12px;
  min-height: 0;
  width: 100%;
`,D=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  width: 100%;
  max-width: 700px;
  flex-wrap: wrap;
`,N=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({highlight:e})=>e?"#3fb950":l.w4.colors.border};
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${({highlight:e})=>e?"#3fb950":l.w4.colors.mainText};
`,V=i().div`
  font-size: 16px;
  font-weight: 700;
  min-height: 24px;
  text-align: center;
  color: ${({type:e})=>"match"===e?"#3fb950":"miss"===e?"#f97583":l.w4.colors.accent};
  animation: ${({type:e})=>"match"===e?x:"miss"===e?$:"none"} 0.4s ease;
`,G=i().div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 10px;
  max-width: 720px;
  width: 100%;
  padding: 0 4px;
  animation: ${f} 0.3s ease;

  @media (max-width: ${l.w4.breakpoints.md}) {
    gap: 8px;
  }
`,q=i().button`
  aspect-ratio: 1;
  perspective: 600px;
  border: none;
  background: none;
  padding: 0;
  cursor: ${({matched:e})=>e?"default":"pointer"};
  outline: none;

  ${({matched:e})=>e?`animation: ${v.toString()} 0.5s ease;`:""}
  ${({wrong:e})=>e?`animation: ${$.toString()} 0.4s ease;`:""}
`,Y=i().div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
  transform: ${({flipped:e})=>e?"rotateY(180deg)":"rotateY(0deg)"};
`,W=i().div`
  position: absolute;
  inset: 0;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`,J=i()(W)`
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.2) 0%,
    ${l.w4.colors.surface} 40%,
    ${l.w4.colors.surface} 60%,
    rgba(79, 192, 255, 0.15) 100%
  );
  border: 2px solid ${l.w4.colors.border};
  transition: border-color ${l.w4.transitions.base}, box-shadow ${l.w4.transitions.base};
  overflow: hidden;

  &::after {
    content: '?';
    font-size: 28px;
    font-weight: 800;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.3;
  }

  .card-outer:hover & {
    border-color: ${l.w4.colors.accent}60;
    box-shadow: 0 0 16px rgba(139, 92, 246, 0.15);
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    &::after { font-size: 20px; }
  }
`,X=i()(W)`
  transform: rotateY(180deg);
  background: ${({matched:e})=>e?`linear-gradient(135deg, rgba(63, 185, 80, 0.15) 0%, ${l.w4.colors.surface} 50%)`:l.w4.colors.surface};
  border: 2px solid ${({matched:e})=>e?"#3fb95060":l.w4.colors.accent+"50"};
  box-shadow: ${({matched:e})=>e?"0 0 16px rgba(63, 185, 80, 0.15)":"0 0 12px rgba(139, 92, 246, 0.1)"};
`,U=i().span`
  font-size: ${({size:e})=>"lg"===e?"48px":"md"===e?"40px":"32px"};
  line-height: 1;
  user-select: none;

  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: ${({size:e})=>"lg"===e?"36px":"md"===e?"30px":"24px"};
  }
`,K=i().span`
  position: absolute;
  font-size: 11px;
  pointer-events: none;
  animation: ${j} 1.5s ease-in-out infinite;
  animation-delay: ${({i:e})=>.3*e}s;
  ${({i:e})=>["top: 4px; right: 6px;","bottom: 4px; left: 6px;","top: 6px; left: 8px;","bottom: 6px; right: 8px;"][e%4]}
`,Q=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: ${l.w4.spacing.xl};
  animation: ${f} 0.5s ease;
  text-align: center;
`,Z=i().h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,ee=i().span`
  font-size: 72px;
  animation: ${b} 1s ease-in-out infinite;
`,et=i().div`
  display: flex;
  gap: ${l.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,er=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,eo=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,ea=i().span`
  font-size: 40px;
  font-weight: 800;
  color: ${({color:e})=>e??l.w4.colors.accent};
`,en=i().span`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  animation: ${w} 1s ease-in-out infinite;
`,ei=i().button`
  padding: 16px 40px;
  background: ${({accent:e})=>e};
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  min-height: 52px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px ${({accent:e})=>e}40;
  }

  &:active { transform: translateY(-1px); }
`,es=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 20px;
  font-size: 14px;
  color: ${l.w4.colors.mainTextMuted};
`,el=i().span`
  position: fixed;
  top: 20%;
  left: ${({left:e})=>e}%;
  font-size: 22px;
  color: ${({color:e})=>e};
  pointer-events: none;
  animation: ${k} 1.5s ease-out ${({delay:e})=>e}s forwards;
  opacity: 0;
  animation-fill-mode: forwards;
  z-index: 100;
`,ec=i().span`
  background: linear-gradient(90deg, #f97583, #d2a8ff, #79c0ff, #3fb950, #f97583);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${y} 3s linear infinite;
  font-size: 16px;
  font-weight: 700;
`,ed=i().div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
`,ep=i().button`
  padding: 8px 18px;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, color ${l.w4.transitions.base};
  background: ${({active:e})=>e?"rgba(139, 92, 246, 0.18)":"transparent"};
  color: ${({active:e})=>e?"#8b5cf6":l.w4.colors.mainTextMuted};
  &:hover { color: #8b5cf6; background: rgba(139, 92, 246, 0.1); }
`,eu=["\uD83C\uDF8A","⭐","\uD83C\uDF1F","\uD83D\uDCAB","✨","\uD83C\uDF89","\uD83C\uDFC6","\uD83E\uDD73"],em=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],eh=["great","amazing","perfect","super","wow","fast"],eg="atlantis-memory-best";function ef(e){try{return JSON.parse(localStorage.getItem(eg)??"{}")[e]??0}catch{return 0}}function ex({lang:e,canOnline:t}){let[r,n]=(0,a.useState)("theme"),[i,s]=(0,a.useState)("solo"),[d,f]=(0,a.useState)("animals"),[x,b]=(0,a.useState)("easy"),[w,y]=(0,a.useState)([]),[v,$]=(0,a.useState)([]),[k,j]=(0,a.useState)(new Set),[W,eb]=(0,a.useState)(0),[ew,ey]=(0,a.useState)(0),[ev,e$]=(0,a.useState)(0),[ek,ej]=(0,a.useState)({msg:"",type:"info"}),[eM,eS]=(0,a.useState)(!1),[ez,eT]=(0,a.useState)(!1),[eC,eR]=(0,a.useState)(!0),[e_,eB]=(0,a.useState)(""),[eI,eA]=(0,a.useState)(0),[eE,eF]=(0,a.useState)(0),[eP,eL]=(0,a.useState)({}),[eO,eH]=(0,a.useState)(!1),[eD,eN]=(0,a.useState)("none"),eV=(0,a.useRef)(!1),eG=(0,a.useRef)(null),[eq]=(0,a.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),eY=(0,a.useCallback)(t=>{switch(t.type){case"guest-joined":eJ.current.addPlayer({id:t.playerId,name:t.name,isHost:!1}),eJ.current.sendEvent({type:"host-ack",name:eq,playerId:eJ.current.room?.playerId??"",players:eJ.current.room?.players??[]});break;case"host-ack":eJ.current.setConnected(t.name),t.players&&eJ.current.setPlayers([...t.players,{id:eJ.current.room?.playerId??"",name:eq,isHost:!1}]);break;case"player-list":eJ.current.setPlayers(t.players);break;case"game-state":{let r=t.payload;if("start"===r.action){let t=r.cards;b(r.difficulty),y(t),$([]),j(new Set),eb(0),ey(0),eA(0),eF(0),e$(0);let o=r.firstTurnId??"";eB(o),eR(o===eJ.current.room?.playerId),eL({}),ej({msg:o===eJ.current.room?.playerId?p("yourTurn",e):p("theirTurn",e),type:"info"}),eS(!1),eT(!1),n("playing")}else if("flip"===r.action){let e=r.cardId;y(t=>t.map(t=>t.id===e?{...t,flipped:!0}:t)),$(t=>[...t,e])}else if("match"===r.action){let t=r.pairId,o=r.scorerId,a=r.nextTurnId,n=r.playerPairs;if(y(e=>e.map(e=>e.pairId===t?{...e,matched:!0}:e)),$([]),ey(e=>e+1),n){eL(n);let e=eJ.current.room?.playerId??"";eA(n[e]??0),eF(Object.entries(n).reduce((t,[r,o])=>r===e?t:t+o,0))}else eL(e=>({...e,[o]:(e[o]??0)+1})),o===eJ.current.room?.playerId?eA(e=>e+1):eF(e=>e+1);eB(a),eR(a===eJ.current.room?.playerId);let i=eh[Math.floor(Math.random()*eh.length)];ej({msg:`${p(i,e)} ${p("matched",e)}`,type:"match"}),eV.current=!1}else if("no-match"===r.action){let t=r.ids,o=r.nextTurnId;j(new Set(t)),ej({msg:p("tryAgain",e),type:"miss"}),setTimeout(()=>{y(e=>e.map(e=>t.includes(e.id)?{...e,flipped:!1}:e)),$([]),j(new Set),eB(o),eR(o===eJ.current.room?.playerId),eV.current=!1},800)}else if("game-end"===r.action){let e=r.playerPairs;if(e){eL(e);let t=eJ.current.room?.playerId??"";eA(e[t]??0),eF(Object.entries(e).reduce((e,[r,o])=>r===t?e:e+o,0))}else eA(r.myPairs??eI),eF(r.opponentPairs??eE);eT(!0),n("gameover")}break}case"game-over":n("gameover");break;case"rematch-request":eN("received");break;case"rematch-accepted":eN("none"),n("difficulty");break;case"player-left":eH(!0),n("gameover")}},[eq,e]),eW=(0,c.Ky)({gameId:"memory",playerName:eq,onEvent:eY}),eJ=(0,a.useRef)(eW);eJ.current=eW;let eX=(0,c.zj)({gameId:"memory",enabled:"online"===i}),eU=m[x],eK="easy"===x?4:"medium"===x?6:8,eQ="easy"===x?"lg":"medium"===x?"md":"sm",eZ=(0,a.useMemo)(()=>{let e=u.find(e=>e.id===d);return e?.symbols??u[0].symbols},[d]);(0,a.useEffect)(()=>{if("playing"!==r){eG.current&&clearInterval(eG.current);return}return eG.current=setInterval(()=>e$(e=>e+1),1e3),()=>{eG.current&&clearInterval(eG.current)}},[r]);let e0=(0,a.useCallback)(t=>{var r;let o,a;b(t);let s=(r=m[t],o=h(eZ).slice(0,r),a=[],o.forEach((e,t)=>{a.push({id:2*t,symbol:e,pairId:t,flipped:!1,matched:!1}),a.push({id:2*t+1,symbol:e,pairId:t,flipped:!1,matched:!1})}),h(a));if(y(s),$([]),j(new Set),eb(0),ey(0),eA(0),eF(0),eL({}),e$(0),eR(!0),ej({msg:"online"===i?p("yourTurn",e):p("flipTwo",e),type:"info"}),eS(!1),eT(!1),n("playing"),"online"===i&&eJ.current.room?.role==="host"){let e=eJ.current.room.playerId;eB(e),eJ.current.sendEvent({type:"game-state",payload:{action:"start",cards:s,difficulty:t,firstTurnId:e}})}},[eZ,e,i]),e1=(0,a.useCallback)(t=>{if(eV.current||t.matched||t.flipped||"online"===i&&!eC)return;let r=[...v,t.id];if($(r),y(e=>e.map(e=>e.id===t.id?{...e,flipped:!0}:e)),"online"===i&&eJ.current.sendEvent({type:"game-state",payload:{action:"flip",cardId:t.id}}),2===r.length){eV.current=!0,eb(e=>e+1);let[o,a]=r,s=w.find(e=>e.id===o);if(s.pairId===t.pairId){let t=ew+1;ey(t);let r=eh[Math.floor(Math.random()*eh.length)];if(ej({msg:`${p(r,e)} ${p("matched",e)}`,type:"match"}),"online"===i){let e=eJ.current.room?.playerId??"",t={...eP,[e]:(eP[e]??0)+1};eA(e=>e+1),eL(t),eJ.current.sendEvent({type:"game-state",payload:{action:"match",pairId:s.pairId,scorerId:e,nextTurnId:e,playerPairs:t}})}setTimeout(()=>{if(y(e=>e.map(e=>e.pairId===s.pairId?{...e,matched:!0}:e)),$([]),eV.current=!1,t===eU){if(ej({msg:p("allFound",e),type:"match"}),"solo"===i){let e=W+1,t=ef(x);if(!t||e<t){try{let t=JSON.parse(localStorage.getItem(eg)??"{}");(!t[x]||e<t[x])&&(t[x]=e,localStorage.setItem(eg,JSON.stringify(t)))}catch{}eS(!0)}}if("online"===i){let e=eJ.current.room?.playerId??"",t={...eP,[e]:(eP[e]??0)+1};eJ.current.sendEvent({type:"game-state",payload:{action:"game-end",playerPairs:t}})}eT(!0),setTimeout(()=>n("gameover"),1200)}},500)}else{if(ej({msg:p("tryAgain",e),type:"miss"}),j(new Set([o,a])),"online"===i){let e=eJ.current.room?.players??[],t=(e.findIndex(e=>e.id===eJ.current.room?.playerId)+1)%e.length,r=e[t]?.id??"";eR(!1),eB(r),eJ.current.sendEvent({type:"game-state",payload:{action:"no-match",ids:[o,a],nextTurnId:r}})}setTimeout(()=>{y(e=>e.map(e=>e.id===o||e.id===a?{...e,flipped:!1}:e)),$([]),j(new Set),eV.current=!1},800)}}},[v,w,ew,eU,W,x,e,i,eC,eI,eE]),e4=ef(x);if("theme"===r)return(0,o.jsx)(M,{children:(0,o.jsxs)(S,{children:[(0,o.jsxs)(z,{children:["\uD83C\uDCCF ",p("title",e)]}),(0,o.jsx)(T,{children:p("pickTheme",e)}),(0,o.jsx)(C,{children:u.map(t=>(0,o.jsxs)(R,{accent:t.color,onClick:()=>{f(t.id),n("difficulty")},children:[(0,o.jsx)(_,{children:t.emoji}),(0,o.jsx)(I,{children:p(t.id,e)}),(0,o.jsx)(B,{children:t.preview.map((e,t)=>(0,o.jsx)("span",{children:e},t))}),(0,o.jsx)(A,{children:p(`${t.id}Desc`,e)})]},t.id))})]})});if("difficulty"===r){let r=e=>{"online"===i?(b(e),n("lobby")):e0(e)};return(0,o.jsx)(M,{children:(0,o.jsxs)(S,{children:[(0,o.jsxs)(z,{children:["\uD83C\uDCCF ",p("title",e)]}),(0,o.jsx)(T,{children:p("pickSize",e)}),t&&(0,o.jsxs)(ed,{children:[(0,o.jsxs)(ep,{active:"solo"===i,onClick:()=>s("solo"),children:["\uD83C\uDFAF ",p("solo",e)]}),(0,o.jsxs)(ep,{active:"online"===i,onClick:()=>s("online"),children:["\uD83C\uDF10 ",p("online",e)]})]}),(0,o.jsxs)(E,{children:[(0,o.jsxs)(F,{accent:"#3fb950",onClick:()=>r("easy"),children:[(0,o.jsx)(P,{children:"\uD83C\uDF1F"}),(0,o.jsx)(L,{children:p("easy",e)}),(0,o.jsx)(O,{children:p("easyDesc",e)})]}),(0,o.jsxs)(F,{accent:"#f59e0b",onClick:()=>r("medium"),children:[(0,o.jsx)(P,{children:"\uD83D\uDD25"}),(0,o.jsx)(L,{children:p("medium",e)}),(0,o.jsx)(O,{children:p("mediumDesc",e)})]}),(0,o.jsxs)(F,{accent:"#f97583",onClick:()=>r("hard"),children:[(0,o.jsx)(P,{children:"\uD83D\uDCAA"}),(0,o.jsx)(L,{children:p("hard",e)}),(0,o.jsx)(O,{children:p("hardDesc",e)})]})]}),e4>0&&"solo"===i&&(0,o.jsxs)(es,{children:["\uD83C\uDFC6 ",p("bestMoves",e),": ",e4," ",p("finalMoves",e)]})]})})}if("lobby"===r)return(0,o.jsx)(M,{children:(0,o.jsxs)(S,{children:[(0,o.jsxs)(z,{children:["\uD83C\uDCCF ",p("title",e)]}),eW.room?.connected?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(T,{children:"host"===eW.room.role?"pt"===e?`${eW.room.players.length} jogadores. Clica para come\xe7ar.`:`${eW.room.players.length} players. Click to start.`:"pt"===e?`Ligado! ${eW.room.players.length} jogadores na sala.`:`Connected! ${eW.room.players.length} players in room.`}),(0,o.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:eW.room.players.map(e=>(0,o.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===eW.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===eW.room.role&&(0,o.jsx)(ei,{accent:"#8b5cf6",onClick:()=>e0(x),children:"pt"===e?"Come\xe7ar!":"Start!"})]}):(0,o.jsx)(c.XB,{lang:e,room:eW.room,error:eW.error,availableRooms:eX.rooms,onCreateRoom:()=>{let{code:e,roomName:t}=eW.createRoom();eX.publishRoom({code:e,roomName:t,hostName:eq,playerCount:1})},onJoinRoom:e=>eW.joinRoom(e),onLeaveRoom:()=>{eX.unpublishRoom(),eW.leaveRoom(),n("difficulty")}})]})});if("gameover"===r){let t="online"===i,r=eI>eE,a=eI===eE,c=eO?p("opponentLeft",e):a?p("tied",e):r?p("youWin",e):p("youLose",e),d=()=>{"received"===eD?(eN("none"),n("difficulty"),eJ.current.sendEvent({type:"rematch-accepted"})):(eN("sent"),eJ.current.sendEvent({type:"rematch-request"}))};return(0,o.jsxs)(M,{children:[ez&&eu.map((e,t)=>(0,o.jsx)(el,{left:5+12*t,delay:.1*t,color:em[t%em.length],children:e},t)),(0,o.jsxs)(Q,{children:[(0,o.jsx)(ee,{children:t?r?"\uD83C\uDF89":a?"\uD83E\uDD1D":"\uD83D\uDE05":"\uD83C\uDFC6"}),(0,o.jsx)(Z,{children:t?c:p("gameOver",e)}),!t&&(0,o.jsx)(ec,{children:p("allFound",e)}),(0,o.jsx)(et,{children:t&&(eW.room?.players??[]).length>2?(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6,width:"100%",maxWidth:280},children:(eW.room?.players??[]).map(e=>({...e,pts:eP[e.id]??0})).sort((e,t)=>t.pts-e.pts).map((t,r)=>(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,o.jsx)("span",{style:{fontSize:16,minWidth:24},children:0===r?"\uD83E\uDD47":1===r?"\uD83E\uDD48":2===r?"\uD83E\uDD49":`${r+1}.`}),(0,o.jsxs)("span",{style:{flex:1,fontWeight:600,color:t.id===eW.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[t.name,t.id===eW.room?.playerId?` (${p("you",e)})`:""]}),(0,o.jsxs)("span",{style:{fontSize:20,fontWeight:800,color:0===r?"#3fb950":l.w4.colors.mainText},children:[t.pts," ",p("pairs",e)]})]},t.id))}):t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(er,{children:[(0,o.jsx)(eo,{children:p("you",e)}),(0,o.jsx)(ea,{color:"#3fb950",children:eI})]}),(0,o.jsxs)(er,{children:[(0,o.jsx)(eo,{children:p("opponent",e)}),(0,o.jsx)(ea,{color:"#f97583",children:eE})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(er,{children:[(0,o.jsx)(eo,{children:p("moves",e)}),(0,o.jsx)(ea,{children:W})]}),(0,o.jsxs)(er,{children:[(0,o.jsx)(eo,{children:p("pairs",e)}),(0,o.jsx)(ea,{color:"#3fb950",children:eU})]}),(0,o.jsxs)(er,{children:[(0,o.jsx)(eo,{children:p("finalTime",e)}),(0,o.jsx)(ea,{color:"#f59e0b",children:g(ev)})]})]})}),!t&&eM&&(0,o.jsxs)(en,{children:["\uD83C\uDF89 ",p("newRecord",e)]}),!t&&e4>0&&!eM&&(0,o.jsxs)(es,{children:["\uD83C\uDFC6 ",p("bestMoves",e),": ",e4," ",p("finalMoves",e)]}),t&&!eO?"sent"===eD?(0,o.jsx)(ei,{accent:"#666",children:p("waiting",e)}):"received"===eD?(0,o.jsxs)(ei,{accent:"#3fb950",onClick:d,children:[p("rematch",e)," ✓"]}):(0,o.jsx)(ei,{accent:"#8b5cf6",onClick:d,children:p("rematch",e)}):(0,o.jsx)(ei,{accent:"#8b5cf6",onClick:()=>{t&&eJ.current.leaveRoom(),s("solo"),n("theme")},children:p("playAgain",e)})]})]})}return(0,o.jsx)(M,{children:(0,o.jsxs)(H,{children:[(0,o.jsx)(D,{children:"online"===i?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(N,{highlight:eC,children:["⭐ ",p("you",e),": ",eI]}),(0,o.jsxs)(N,{children:["\uD83D\uDC64 ",p("opponent",e),": ",eE]}),(0,o.jsxs)(N,{children:[p("pairs",e),": ",ew,"/",eU]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(N,{children:["\uD83C\uDFB4 ",p("moves",e),": ",W]}),(0,o.jsxs)(N,{highlight:ew===eU,children:["⭐ ",p("pairs",e),": ",ew,"/",eU]}),(0,o.jsxs)(N,{children:["⏱️ ",g(ev)]})]})}),(0,o.jsx)(V,{type:ek.type,children:"online"===i?eC?p("yourTurn",e):p("theirTurn",e):ek.msg},ek.msg),(0,o.jsx)(G,{cols:eK,children:w.map(e=>(0,o.jsx)(q,{className:"card-outer",matched:e.matched,wrong:k.has(e.id),onClick:()=>e1(e),"aria-label":e.flipped?e.symbol:"Hidden card",children:(0,o.jsxs)(Y,{flipped:e.flipped,children:[(0,o.jsx)(J,{}),(0,o.jsxs)(X,{matched:e.matched,children:[(0,o.jsx)(U,{size:eQ,children:e.symbol}),e.matched&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(K,{i:0,children:"✨"}),(0,o.jsx)(K,{i:1,children:"✨"})]})]})]})},e.id))})]})})}},3473(e,t,r){r.d(t,{k:()=>F});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063);let c=[{id:"dodge",emoji:"\uD83D\uDCA3",instruction:{pt:"Foge das bombas!",en:"Dodge the bombs!"}},{id:"tap-fast",emoji:"⚡",instruction:{pt:"Toca o mais r\xe1pido poss\xedvel!",en:"Tap as fast as you can!"}},{id:"color-match",emoji:"\uD83C\uDFA8",instruction:{pt:"Toca na cor certa!",en:"Tap the right color!"}},{id:"remember",emoji:"\uD83E\uDDE0",instruction:{pt:"Memoriza a sequ\xeancia!",en:"Remember the sequence!"}},{id:"catch",emoji:"\uD83E\uDEA3",instruction:{pt:"Apanha os que caem!",en:"Catch the falling ones!"}}];function d(e){return e[Math.floor(Math.random()*e.length)]}function p(e){let t=[...e];for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}let u=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,m=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,h=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,g=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`;(0,s.keyframes)`from{transform:translateY(-40px);opacity:0}to{transform:translateY(0);opacity:1}`;let f=(0,s.keyframes)`0%,100%{transform:rotate(0)}25%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}`,x=i().div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${l.w4.spacing.lg};gap:${l.w4.spacing.lg};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 30%,rgba(88,166,255,0.06) 0%,transparent 70%),#080b12;`,b=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${u} 0.3s ease;`,w=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:320px;`,y=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`;i().div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:${l.w4.colors.accent};animation:${g} 0.5s ease;`;let v=i().span`font-size:72px;animation:${h} 1s ease-in-out infinite;`,$=i().div`display:flex;flex-direction:column;align-items:center;gap:${l.w4.spacing.md};padding:${l.w4.spacing.xl};background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.accent};border-radius:${l.w4.borderRadius.lg};animation:${m} 0.3s ease;`,k=i().span`font-size:72px;animation:${f} 1s ease-in-out infinite;`,j=i().p`font-size:${l.w4.typography.fontSizeLg};font-weight:700;color:${l.w4.colors.mainText};text-align:center;margin:0;`,M=i().div`position:relative;width:100%;max-width:400px;height:300px;background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};overflow:hidden;touch-action:manipulation;`,S=i().button`
  position:absolute;left:${({x:e})=>e}%;top:${({y:e})=>e}%;width:${({size:e})=>e}px;height:${({size:e})=>e}px;
  transform:translate(-50%,-50%);border-radius:50%;border:none;cursor:pointer;
  font-size:${({size:e})=>.6*e}px;display:flex;align-items:center;justify-content:center;
  background:rgba(88,166,255,0.15);animation:${m} 0.2s ease;transition:transform ${l.w4.transitions.fast};
  &:active{transform:translate(-50%,-50%) scale(0.9);}
`,z=i().div`display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%;max-width:300px;`,T=i().button`
  aspect-ratio:1;border-radius:${l.w4.borderRadius.lg};background:${({bg:e})=>e};border:3px solid transparent;
  cursor:pointer;transition:all ${l.w4.transitions.base};min-height:70px;
  &:hover{border-color:rgba(255,255,255,0.3);transform:scale(1.05);}
  &:active{transform:scale(0.95);}
`,C=i().div`display:flex;gap:12px;justify-content:center;flex-wrap:wrap;`,R=i().div`
  width:60px;height:60px;border-radius:${l.w4.borderRadius.lg};display:flex;align-items:center;justify-content:center;
  font-size:28px;background:${({active:e})=>e?"rgba(88,166,255,0.2)":l.w4.colors.surface};
  border:2px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  animation: ${({revealed:e})=>e?m:"none"} 0.3s ease;
  cursor:pointer;transition:all ${l.w4.transitions.base};&:hover{border-color:${l.w4.colors.accent};}
`,_=i().div`
  position:absolute;left:${({x:e})=>e}%;top:${({y:e})=>e}%;font-size:32px;line-height:1;
  transform:translateX(-50%);pointer-events:none;
`,B=i().div`
  position:absolute;bottom:10px;left:${({x:e})=>e}%;transform:translateX(-50%);
  font-size:40px;transition:left ${l.w4.transitions.fast} linear;
`,I=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};`,A=i().div`padding:8px 20px;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.accent};border-radius:24px;font-size:16px;font-weight:700;color:${l.w4.colors.accent};`,E=["#f97583","#58a6ff","#3fb950","#f59e0b","#d2a8ff","#ff6bcb","#06b6d4","#ef4444","#a855f7"];function F({lang:e}){let[t,r]=(0,a.useState)("menu"),[n,i]=(0,a.useState)(0),[s,u]=(0,a.useState)(0),[m,h]=(0,a.useState)(null),[g,f]=(0,a.useState)(0),[P,L]=(0,a.useState)({}),[O,H]=(0,a.useState)(()=>{try{return Number(localStorage.getItem("atlantis-miniparty-best")??"0")}catch{return 0}}),D=(0,a.useRef)(null),N=(0,a.useRef)(null),V=(0,a.useCallback)(()=>{D.current&&(clearInterval(D.current),D.current=null),N.current&&(clearInterval(N.current),N.current=null)},[]),G=(0,a.useCallback)(()=>{V();let e=n+1;if(e>5){let e=s+g;if(e>O){H(e);try{localStorage.setItem("atlantis-miniparty-best",String(e))}catch{}}r("scores");return}i(e),f(0),h(c[(e-1)%c.length]),L({}),r("intro"),setTimeout(()=>r("playing"),2e3)},[n,s,g,O,V]),q=(0,a.useCallback)(()=>{V(),u(e=>e+g),r("result")},[g,V]),Y=(0,a.useCallback)(()=>{i(0),u(0),f(0),G()},[G]);(0,a.useEffect)(()=>{if("playing"===t)return L(e=>({...e,timeLeft:6})),D.current=setInterval(()=>{L(e=>{let t=(e.timeLeft??6)-1;return t<=0?(q(),e):{...e,timeLeft:t}})},1e3),()=>{D.current&&clearInterval(D.current)}},[t,q]);let W=(0,a.useCallback)(()=>{f(e=>e+1),L(e=>({...e,tapX:10+80*Math.random(),tapY:10+80*Math.random()}))},[]);(0,a.useEffect)(()=>{if("playing"!==t||m?.id!=="color-match")return;let e=d(E),r=p([...E]).slice(0,9);r.includes(e)||(r[Math.floor(9*Math.random())]=e),L(t=>({...t,targetColor:e,gridColors:r,colorCorrect:null}))},[t,m]);let J=(0,a.useCallback)(e=>{if(e===P.targetColor){f(e=>e+1);let e=d(E),t=p([...E]).slice(0,9);t.includes(e)||(t[Math.floor(9*Math.random())]=e),L(r=>({...r,targetColor:e,gridColors:t,colorCorrect:!0}))}else L(e=>({...e,colorCorrect:!1}));setTimeout(()=>L(e=>({...e,colorCorrect:null})),300)},[P.targetColor]);(0,a.useEffect)(()=>{if("playing"!==t||m?.id!=="remember")return;let e=["\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC38","\uD83E\uDD8A","\uD83D\uDC3C","\uD83D\uDC35","\uD83D\uDC30","\uD83D\uDC37"],r=Array.from({length:Math.min(3+n,6)},()=>d(e));L(e=>({...e,sequence:r,seqPhase:"show",seqIdx:0,userSeq:[]}));let o=0,a=setInterval(()=>{++o>=r.length?(clearInterval(a),setTimeout(()=>L(e=>({...e,seqPhase:"input",seqIdx:0})),800)):L(e=>({...e,seqIdx:o}))},700);return()=>clearInterval(a)},[t,m,n]);let X=(0,a.useCallback)(e=>{let t=P.sequence,r=[...P.userSeq??[],e];t[r.length-1]===e?r.length===t.length?(f(e=>e+t.length),q()):L(e=>({...e,userSeq:r})):q()},[P.sequence,P.userSeq,q]);(0,a.useEffect)(()=>{if("playing"!==t||m?.id!=="dodge")return;let e=[],r=0,o=0;L(e=>({...e,playerX:50,bombs:[]}));let a=()=>{let t=Date.now();for(let a of(t-o>600&&(o=t,e.push({id:++r,x:10+80*Math.random(),y:-5})),e))a.y+=1.5;e.length;for(let t=e.length-1;t>=0;t--)e[t].y>105&&(e.splice(t,1),f(e=>e+1));L(t=>({...t,bombs:e.map(e=>({...e}))})),n.current=requestAnimationFrame(a)},n={current:requestAnimationFrame(a)};return()=>cancelAnimationFrame(n.current)},[t,m]),(0,a.useEffect)(()=>{if("playing"!==t||m?.id!=="catch")return;let e=[],r=0,o=0;L(e=>({...e,bucketX:50,items:[]}));let a=()=>{let t=Date.now();for(let a of(t-o>500&&(o=t,e.push({id:++r,x:10+80*Math.random(),y:-5,emoji:d(["⭐","\uD83D\uDC8E","\uD83C\uDF4E","\uD83C\uDF6C","\uD83C\uDF81"])})),e))a.y+=1.2;for(let t=e.length-1;t>=0;t--)e[t].y>105&&e.splice(t,1);L(t=>({...t,items:e.map(e=>({...e}))})),n.current=requestAnimationFrame(a)},n={current:requestAnimationFrame(a)};return()=>cancelAnimationFrame(n.current)},[t,m]);let U=(0,a.useCallback)(e=>{L(t=>({...t,bucketX:Math.max(10,Math.min(90,(t.bucketX??50)+("left"===e?-15:15)))}))},[]);if("menu"===t)return(0,o.jsxs)(x,{children:[(0,o.jsxs)(b,{children:["\uD83C\uDF89 ","pt"===e?"Mini Festa!":"Mini Party!"]}),(0,o.jsx)(w,{children:"pt"===e?"5 mini-jogos r\xe1pidos! Consegues pontos m\xe1ximos?":"5 quick mini-games! Can you get max points?"}),O>0&&(0,o.jsxs)(w,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",O]}),(0,o.jsx)(y,{accent:"#58a6ff",onClick:Y,children:"pt"===e?"Jogar!":"Play!"})]});if("intro"===t&&m)return(0,o.jsxs)(x,{children:[(0,o.jsxs)(A,{children:["pt"===e?"Ronda":"Round"," ",n,"/",5]}),(0,o.jsxs)($,{children:[(0,o.jsx)(k,{children:m.emoji}),(0,o.jsx)(j,{children:m.instruction["pt"===e?"pt":"en"]})]})]});if("result"===t)return(0,o.jsxs)(x,{children:[(0,o.jsxs)(b,{children:[g>0?"\uD83C\uDF89":"\uD83D\uDE05"," +",g]}),(0,o.jsxs)(I,{color:"#3fb950",children:["⭐ ",s+g]}),(0,o.jsx)(y,{accent:"#58a6ff",onClick:G,children:n>=5?"pt"===e?"Ver resultados":"See results":"➡️"})]});if("scores"===t)return(0,o.jsxs)(x,{children:[(0,o.jsx)(v,{children:"\uD83C\uDFC6"}),(0,o.jsx)(b,{children:"pt"===e?"Resultados":"Results"}),(0,o.jsxs)(I,{color:"#3fb950",children:["⭐ ",s]}),s>=O&&s>0&&(0,o.jsxs)(w,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,o.jsx)(y,{accent:"#58a6ff",onClick:()=>{i(0),u(0),r("menu")},children:"Menu"})]});let K=P.timeLeft??6;return(0,o.jsxs)(x,{children:[(0,o.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,o.jsxs)(I,{children:["⭐ ",g]}),(0,o.jsxs)(I,{color:K<=2?"#f97583":void 0,children:["⏱️ ",K,"s"]})]}),m?.id==="tap-fast"&&(0,o.jsx)(M,{onClick:W,children:(0,o.jsx)(S,{x:P.tapX??50,y:P.tapY??50,size:70,onClick:e=>{e.stopPropagation(),W()},children:"⚡"})}),m?.id==="color-match"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{width:80,height:80,borderRadius:"50%",background:P.targetColor??"#fff",border:"4px solid rgba(255,255,255,0.3)"}}),(0,o.jsx)(z,{children:(P.gridColors??[]).map((e,t)=>(0,o.jsx)(T,{bg:e,onClick:()=>J(e)},t))})]}),m?.id==="remember"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{children:(P.sequence??[]).map((e,t)=>(0,o.jsx)(R,{active:"show"===P.seqPhase&&t<=(P.seqIdx??0),revealed:"show"===P.seqPhase&&t===(P.seqIdx??0),onClick:()=>"input"===P.seqPhase&&X(e),children:"show"===P.seqPhase&&t<=(P.seqIdx??0)?e:"?"},t))}),"input"===P.seqPhase&&(0,o.jsx)(w,{children:"pt"===e?"Agora repete!":"Now repeat!"})]}),m?.id==="dodge"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(M,{children:[(0,o.jsx)("div",{style:{position:"absolute",bottom:20,left:`${P.playerX??50}%`,transform:"translateX(-50%)",fontSize:36,transition:`left ${l.w4.transitions.base}`},children:"\uD83C\uDFC3"}),(P.bombs??[]).map(e=>(0,o.jsx)(_,{x:e.x,y:e.y,children:"\uD83D\uDCA3"},e.id))]}),(0,o.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,o.jsx)(y,{accent:"#58a6ff",onClick:()=>L(e=>({...e,playerX:Math.max(10,(e.playerX??50)-20)})),children:"⬅️"}),(0,o.jsx)(y,{accent:"#58a6ff",onClick:()=>L(e=>({...e,playerX:Math.min(90,(e.playerX??50)+20)})),children:"➡️"})]})]}),m?.id==="catch"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(M,{children:[(0,o.jsx)(B,{x:P.bucketX??50,children:"\uD83E\uDEA3"}),(P.items??[]).map(e=>(0,o.jsx)(_,{x:e.x,y:e.y,children:e.emoji},e.id))]}),(0,o.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,o.jsx)(y,{accent:"#58a6ff",onClick:()=>U("left"),children:"⬅️"}),(0,o.jsx)(y,{accent:"#58a6ff",onClick:()=>U("right"),children:"➡️"})]})]})]})}},7192(e,t,r){r.d(t,{H:()=>en});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063);let c="atlantis-pixelboard-gallery",d=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4ecdc4","#74c0fc","#748ffc","#da77f2","#f783ac","#ffffff","#868e96","#212529"],p=[8,12,16],u={title:{pt:"Tabuleiro de Pixels",en:"Pixel Board"},paint:{pt:"Pintar",en:"Paint"},eraser:{pt:"Apagar",en:"Eraser"},clearAll:{pt:"Limpar",en:"Clear"},save:{pt:"Guardar",en:"Save"},gallery:{pt:"Galeria",en:"Gallery"},back:{pt:"← Voltar",en:"← Back"},confirmClear:{pt:"Tens a certeza que queres apagar tudo?",en:"Are you sure you want to clear everything?"},yes:{pt:"Sim",en:"Yes"},no:{pt:"N\xe3o",en:"No"},drawingName:{pt:"Nome do desenho:",en:"Drawing name:"},myDrawing:{pt:"O meu desenho",en:"My drawing"},saved:{pt:"Guardado!",en:"Saved!"},emptyGallery:{pt:"Ainda sem desenhos guardados.",en:"No saved drawings yet."},load:{pt:"Carregar",en:"Load"},delete:{pt:"Apagar",en:"Delete"},close:{pt:"Fechar",en:"Close"},templates:{pt:"Modelos",en:"Templates"},heart:{pt:"Cora\xe7\xe3o",en:"Heart"},star:{pt:"Estrela",en:"Star"},smiley:{pt:"Sorriso",en:"Smiley"},gridSize:{pt:"Tamanho",en:"Size"},selectedColor:{pt:"Cor selecionada",en:"Selected color"},undo:{pt:"Desfazer",en:"Undo"},tapToPaint:{pt:"Toca para pintar!",en:"Tap to paint!"}};function m(e){return Array(e*e).fill("")}function h(e,t,r){let o=m(r),a=Math.floor((r-e.length)/2);return e.forEach((e,n)=>{e.forEach((e,i)=>{let s=n+a,l=i+a;s>=0&&s<r&&l>=0&&l<r&&0!==e&&(o[s*r+l]=t[e]??"")})}),o}function g(e){return h([[0,1,1,0,0,0,1,1,0],[1,1,1,1,0,1,1,1,1],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0]],{1:"#ff6b6b"},e)}function f(e){return h([[0,0,0,0,1,0,0,0,0],[0,0,0,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,0,1,0,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,1]],{1:"#ffd43b"},e)}function x(e){return h([[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,2,1,1,1,1,2,1,1],[1,1,2,1,1,1,1,2,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,3,1,1],[1,1,1,3,3,3,3,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0]],{1:"#ffd43b",2:"#212529",3:"#212529"},e)}function b(e){localStorage.setItem(c,JSON.stringify(e))}let w=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=(0,s.keyframes)`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.35); }
  100% { transform: scale(1); }
`,v=(0,s.keyframes)`
  0%   { opacity: 0; transform: scale(0.7) translateY(4px); }
  60%  { opacity: 1; transform: scale(1.1) translateY(-2px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
`,$=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.md} ${l.w4.spacing.lg};
  gap: ${l.w4.spacing.md};
  overflow-y: auto;
  min-height: 0;
  background: ${l.w4.colors.mainBg};
  position: relative;
`,k=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  animation: ${w} 0.3s ease;
`,j=i().h1`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,M=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: ${w} 0.3s ease 0.05s both;
  width: 100%;
  max-width: min(calc(100vw - 32px), 480px);
`,S=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  width: 100%;
`,z=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({danger:e})=>e?"rgba(249,117,131,0.3)":l.w4.colors.border};
  background: ${({danger:e})=>e?"rgba(249,117,131,0.08)":l.w4.colors.surface};
  color: ${({danger:e})=>e?"#f97583":l.w4.colors.mainTextMuted};
  font-size: 18px;
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, transform ${l.w4.transitions.fast};
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
    background: ${({danger:e})=>e?"rgba(249,117,131,0.14)":"rgba(255,255,255,0.06)"};
    border-color: ${({danger:e})=>e?"#f97583":l.w4.colors.mainTextMuted};
  }
  &:active { transform: translateY(0); }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }
`,T=i().div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  flex-shrink: 0;
`,C=i().button`
  padding: 8px 14px;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 13px;
  min-height: 36px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, color ${l.w4.transitions.base};
  background: ${({active:e})=>e?"rgba(88,166,255,0.18)":"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};

  &:hover {
    background: rgba(88,166,255,0.1);
    color: ${l.w4.colors.accent};
  }
`,R=i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: ${l.w4.borderRadius.md};
  min-height: 44px;
  border: 1px solid ${({active:e,danger:t})=>t?"rgba(249,117,131,0.3)":e?l.w4.colors.accent+"50":l.w4.colors.border};
  background: ${({active:e,danger:t})=>t?"rgba(249,117,131,0.08)":e?"rgba(88,166,255,0.12)":l.w4.colors.surface};
  color: ${({active:e,danger:t})=>t?"#f97583":e?l.w4.colors.accent:l.w4.colors.mainText};
  font-size: 13px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, transform ${l.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    background: ${({danger:e})=>e?"rgba(249,117,131,0.14)":"rgba(88,166,255,0.1)"};
    border-color: ${({danger:e})=>e?"#f97583":l.w4.colors.accent+"60"};
  }

  &:active {
    transform: translateY(0);
  }
`,_=i().div`
  position: relative;
  flex-shrink: 0;
  animation: ${w} 0.3s ease 0.1s both;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
  border-radius: ${l.w4.borderRadius.lg};
  padding: 6px;
  background: ${l.w4.colors.surface};
  box-shadow:
    0 0 0 1px ${l.w4.colors.border},
    0 0 0 1px rgba(88,166,255,0.08) inset,
    0 4px 24px rgba(0,0,0,0.4),
    0 0 16px rgba(88,166,255,0.04) inset;
`,B=i().div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 1px;
  background: ${l.w4.colors.border};
  border: 1px solid rgba(88,166,255,0.15);
  border-radius: ${l.w4.borderRadius.sm};
  overflow: hidden;
  width: min(calc(100vw - 56px), 468px);
  aspect-ratio: 1;
`,I=i().div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
  border-radius: ${l.w4.borderRadius.lg};
`,A=i().span`
  font-size: clamp(0.85rem, 3vw, 1.1rem);
  font-weight: 700;
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
  letter-spacing: 0.02em;
  text-align: center;
  padding: ${l.w4.spacing.sm};
`,E=i().div`
  background: ${({color:e})=>e||l.w4.colors.surface};
  cursor: crosshair;
  transition: background 0.08s;
  animation: ${({isNew:e})=>e?y:"none"} 0.18s ease;

  &:hover {
    filter: brightness(1.18);
    z-index: 1;
  }
`,F=i().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  animation: ${w} 0.3s ease 0.15s both;
  max-width: min(calc(100vw - 32px), 480px);
`,P=i().div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  cursor: pointer;
  border: 2px solid ${({selected:e})=>e?"#ffffff":"transparent"};
  box-shadow: ${({selected:e})=>e?"0 0 0 2px rgba(255,255,255,0.4), 0 0 0 4px rgba(88,166,255,0.5)":"0 1px 3px rgba(0,0,0,0.4)"};
  transform: ${({selected:e})=>e?"scale(1.2)":"scale(1)"};
  transition: transform ${l.w4.transitions.base}, box-shadow ${l.w4.transitions.base}, border-color ${l.w4.transitions.base};

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 0 2px rgba(255,255,255,0.3), 0 2px 6px rgba(0,0,0,0.4);
  }
`,L=i().div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: 2px solid ${({selected:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  box-shadow: ${({selected:e})=>e?"0 0 0 2px rgba(88,166,255,0.4)":"none"};
  transform: ${({selected:e})=>e?"scale(1.2)":"scale(1)"};
  transition: transform ${l.w4.transitions.base}, box-shadow ${l.w4.transitions.base}, border-color ${l.w4.transitions.base};

  &:hover {
    transform: scale(1.15);
    border-color: ${l.w4.colors.accent};
  }
`,O=i().div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(63,185,80,0.2);
  color: #3fb950;
  border: 1px solid rgba(63,185,80,0.4);
  border-radius: 20px;
  padding: 6px 18px;
  font-size: 14px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamily};
  animation: ${v} 0.3s ease forwards;
  pointer-events: none;
  z-index: 100;
`,H=i().div`
  position: absolute;
  inset: 0;
  background: rgba(13,17,23,0.75);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: ${l.w4.spacing.lg};
  animation: ${w} 0.2s ease;
`,D=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  max-width: 320px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  animation: ${w} 0.2s ease;
`,N=i().p`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,V=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,G=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${l.w4.spacing.lg};
  gap: ${l.w4.spacing.md};
  min-height: 0;
  overflow-y: auto;
`,q=i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: ${l.w4.spacing.md};
  width: 100%;
  max-width: 540px;
`,Y=i().div`
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
  animation: ${w} 0.2s ease;
  transition: border-color ${l.w4.transitions.base}, box-shadow ${l.w4.transitions.base};

  &:hover {
    border-color: ${l.w4.colors.accent}40;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
`,W=i().div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 0;
  aspect-ratio: 1;
  width: 100%;
`,J=i().div`
  background: ${({color:e})=>e||"#161b22"};
`,X=i().div`
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.25);
  border-top: 1px solid ${l.w4.colors.border};
`,U=i().div`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  padding: 4px 6px 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,K=i().div`
  display: flex;
  gap: 4px;
  padding: 4px 6px 6px;
`,Q=i().button`
  flex: 1;
  padding: 8px 10px;
  border-radius: ${l.w4.borderRadius.sm};
  border: 1px solid ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.3)":l.w4.colors.border};
  background: ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.1)":"rgba(88,166,255,0.08)"};
  color: ${({variant:e})=>"danger"===e?"#f97583":l.w4.colors.accent};
  font-size: 11px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base};

  &:hover {
    background: ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.2)":"rgba(88,166,255,0.16)"};
  }
`,Z=i().h2`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,ee=i().p`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
  text-align: center;
`,et=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
  max-width: min(calc(100vw - 32px), 480px);
  width: 100%;
`,er=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 12px 12px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.surface};
  color: ${l.w4.colors.mainText};
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, transform ${l.w4.transitions.fast};
  min-width: 80px;
  min-height: 44px;

  &:hover {
    transform: translateY(-1px);
    border-color: ${l.w4.colors.accent}60;
    background: rgba(88,166,255,0.06);
  }
  &:active { transform: translateY(0); }
`,eo=i().div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 0;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
`,ea=i().div`
  background: ${({color:e})=>e||l.w4.colors.mainBg};
`;function en({lang:e,onBack:t}){let r=(0,a.useCallback)(t=>u[t]?.[e]??u[t]?.en??t,[e]),[n,i]=(0,a.useState)(12),[s,h]=(0,a.useState)(()=>m(12)),[w,y]=(0,a.useState)([]),[v,ei]=(0,a.useState)(d[0]),[es,el]=(0,a.useState)("paint"),[ec,ed]=(0,a.useState)(null),[ep,eu]=(0,a.useState)(!1),[em,eh]=(0,a.useState)(()=>(function(){try{let e=localStorage.getItem(c);if(e)return JSON.parse(e)}catch{}return[]})()),[eg,ef]=(0,a.useState)("draw"),[ex,eb]=(0,a.useState)(!1),[ew,ey]=(0,a.useState)(!1),[ev,e$]=(0,a.useState)(!1),[ek,ej]=(0,a.useState)(""),[eM,eS]=(0,a.useState)(!1),ez=(0,a.useMemo)(()=>s.every(e=>""===e),[s]),eT=(0,a.useRef)(null),eC=(0,a.useRef)(null),eR=(0,a.useRef)(null),e_=(0,a.useCallback)(e=>{ed(e),eR.current&&clearTimeout(eR.current),eR.current=setTimeout(()=>ed(null),200)},[]),eB=(0,a.useCallback)(e=>{y(t=>[...t.slice(-19),e])},[]),eI=(0,a.useCallback)(e=>{h(t=>{let r="eraser"===es?"":v;if(t[e]===r)return t;eB(t);let o=[...t];return o[e]=r,o}),eS(!0),e_(e)},[es,v,e_,eB]),eA=(0,a.useCallback)(()=>{y(e=>0===e.length?e:(h(e[e.length-1]),e.slice(0,-1)))},[]),eE=(0,a.useCallback)(e=>{eu(!0),eI(e)},[eI]),eF=(0,a.useCallback)(e=>{ep&&eI(e)},[ep,eI]),eP=(0,a.useCallback)(()=>{eu(!1)},[]);(0,a.useEffect)(()=>{let e=()=>eu(!1);return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);let eL=(0,a.useCallback)((e,t)=>{if(!eC.current)return null;let r=eC.current.getBoundingClientRect(),o=e-r.left,a=t-r.top;if(o<0||a<0||o>r.width||a>r.height)return null;let i=Math.floor(o/r.width*n),s=Math.floor(a/r.height*n);return i<0||i>=n||s<0||s>=n?null:s*n+i},[n]),eO=(0,a.useCallback)(e=>{let t=e.touches[0],r=eL(t.clientX,t.clientY);eT.current={x:t.clientX,y:t.clientY,idx:r??-1}},[eL]),eH=(0,a.useCallback)(e=>{if(!eT.current)return;let t=e.changedTouches[0],r=Math.abs(t.clientX-eT.current.x),o=Math.abs(t.clientY-eT.current.y);if(r>8||o>8){if(r>2*o||o<=8){let e=eL(t.clientX,t.clientY);null!==e&&eI(e)}return}},[eL,eI]),eD=(0,a.useCallback)(e=>{if(!eT.current)return;let t=e.changedTouches[0],r=Math.abs(t.clientX-eT.current.x),o=Math.abs(t.clientY-eT.current.y),a=eT.current.idx;eT.current=null,r<=8&&o<=8&&a>=0&&eI(a)},[eI]),eN=(0,a.useCallback)(e=>{i(e),h(m(e)),y([]),eS(!1)},[]),eV=(0,a.useCallback)(e=>{el(e)},[]),eG=(0,a.useCallback)(()=>{eB(s),h(m(n)),eb(!1),eS(!1)},[n,s,eB]),eq=(0,a.useCallback)(()=>{ej(r("myDrawing")),ey(!0)},[r]),eY=(0,a.useCallback)(()=>{let e=ek.trim()||r("myDrawing"),t=[{id:Date.now().toString(),name:e,grid:[...s],size:n,savedAt:Date.now()},...em].slice(0,30);eh(t),b(t),ey(!1),e$(!0),setTimeout(()=>e$(!1),1800)},[ek,s,n,em,r]),eW=(0,a.useCallback)(e=>{i(e.size),h(e.grid),y([]),eS(!0),ef("draw")},[]),eJ=(0,a.useCallback)(e=>{let t=em.filter(t=>t.id!==e);eh(t),b(t)},[em]),eX=(0,a.useCallback)(e=>{eB(s),h(e(n)),eS(!0)},[n,s,eB]),eU=(0,a.useMemo)(()=>({heart:g(8),star:f(8),smiley:x(8)}),[]);return"gallery"===eg?(0,o.jsxs)($,{children:[(0,o.jsxs)(k,{children:[(0,o.jsxs)(R,{onClick:()=>ef("draw"),children:["← ",r("close")]}),(0,o.jsxs)(Z,{children:["\uD83D\uDDBC️ ",r("gallery")]})]}),(0,o.jsx)(G,{children:0===em.length?(0,o.jsx)(ee,{children:r("emptyGallery")}):(0,o.jsx)(q,{children:em.map(e=>(0,o.jsxs)(Y,{children:[(0,o.jsx)(W,{cols:e.size,children:e.grid.map((e,t)=>(0,o.jsx)(J,{color:e},t))}),(0,o.jsxs)(X,{children:[(0,o.jsx)(U,{children:e.name}),(0,o.jsxs)(K,{children:[(0,o.jsx)(Q,{variant:"primary",onClick:()=>eW(e),children:r("load")}),(0,o.jsx)(Q,{variant:"danger",onClick:()=>eJ(e.id),children:r("delete")})]})]})]},e.id))})})]}):(0,o.jsxs)($,{children:[ex&&(0,o.jsx)(H,{onClick:()=>eb(!1),children:(0,o.jsxs)(D,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(N,{children:r("confirmClear")}),(0,o.jsxs)(V,{children:[(0,o.jsx)(R,{onClick:()=>eb(!1),children:r("no")}),(0,o.jsx)(R,{danger:!0,onClick:eG,children:r("yes")})]})]})}),ew&&(0,o.jsx)(H,{onClick:()=>ey(!1),children:(0,o.jsxs)(D,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(N,{children:r("drawingName")}),(0,o.jsx)("input",{value:ek,onChange:e=>ej(e.target.value),onKeyDown:e=>{"Enter"===e.key&&eY(),"Escape"===e.key&&ey(!1)},autoFocus:!0,style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,color:l.w4.colors.mainText,padding:"8px 12px",fontSize:l.w4.typography.fontSizeBase,fontFamily:l.w4.typography.fontFamily,width:"100%",outline:"none"}}),(0,o.jsxs)(V,{children:[(0,o.jsx)(R,{onClick:()=>ey(!1),children:r("no")}),(0,o.jsxs)(R,{onClick:eY,children:[r("save")," \uD83D\uDCBE"]})]})]})}),(0,o.jsx)(k,{children:(0,o.jsxs)(j,{children:["\uD83C\uDFA8 ",r("title")]})}),(0,o.jsxs)(M,{children:[(0,o.jsxs)(S,{children:[(0,o.jsx)(z,{onClick:eA,disabled:0===w.length,"aria-label":r("undo"),title:r("undo"),children:"↩️"}),(0,o.jsxs)(R,{active:"paint"===es,onClick:()=>eV("paint"),children:["\uD83C\uDFA8 ",r("paint")]}),(0,o.jsxs)(R,{active:"eraser"===es,onClick:()=>eV("eraser"),children:["\uD83E\uDDF9 ",r("eraser")]}),(0,o.jsx)(T,{children:p.map(e=>(0,o.jsxs)(C,{active:n===e,onClick:()=>eN(e),children:[e,"\xd7",e]},e))})]}),(0,o.jsxs)(S,{children:[(0,o.jsx)(z,{danger:!0,onClick:()=>eb(!0),title:r("clearAll"),"aria-label":r("clearAll"),children:"\uD83D\uDDD1️"}),(0,o.jsx)(z,{onClick:eq,title:r("save"),"aria-label":r("save"),children:"\uD83D\uDCBE"}),(0,o.jsxs)(R,{onClick:()=>ef("gallery"),children:["\uD83D\uDDBC️ ",r("gallery")," ",em.length>0&&`(${em.length})`]})]})]}),(0,o.jsxs)(et,{children:[(0,o.jsxs)("span",{style:{fontSize:12,color:l.w4.colors.mainTextMuted,alignSelf:"center",flexShrink:0},children:[r("templates"),":"]}),(0,o.jsxs)(er,{onClick:()=>eX(g),children:[(0,o.jsx)(eo,{cols:8,children:eU.heart.map((e,t)=>(0,o.jsx)(ea,{color:e},t))}),r("heart")]}),(0,o.jsxs)(er,{onClick:()=>eX(f),children:[(0,o.jsx)(eo,{cols:8,children:eU.star.map((e,t)=>(0,o.jsx)(ea,{color:e},t))}),r("star")]}),(0,o.jsxs)(er,{onClick:()=>eX(x),children:[(0,o.jsx)(eo,{cols:8,children:eU.smiley.map((e,t)=>(0,o.jsx)(ea,{color:e},t))}),r("smiley")]})]}),(0,o.jsxs)(_,{ref:eC,onTouchStart:eO,onTouchMove:eH,onTouchEnd:eD,children:[(0,o.jsx)(B,{cols:n,role:"grid","aria-label":r("title"),children:s.map((e,t)=>(0,o.jsx)(E,{color:e,isNew:t===ec,role:"gridcell","aria-label":`cell ${t}`,onMouseDown:()=>eE(t),onMouseEnter:()=>eF(t),onMouseUp:eP},t))}),ez&&!eM&&(0,o.jsx)(I,{children:(0,o.jsx)(A,{children:r("tapToPaint")})})]}),(0,o.jsxs)(F,{role:"group","aria-label":r("selectedColor"),children:[d.map(e=>(0,o.jsx)(P,{color:e,selected:"paint"===es&&v===e,onClick:()=>{ei(e),el("paint")},role:"radio","aria-checked":"paint"===es&&v===e,"aria-label":e},e)),(0,o.jsx)(L,{selected:"eraser"===es,onClick:()=>el("eraser"),role:"radio","aria-checked":"eraser"===es,"aria-label":r("eraser"),children:"\uD83E\uDDF9"})]}),ev&&(0,o.jsxs)(O,{children:["✅ ",r("saved")]})]})}i().div`
  margin-top: auto;
  padding-top: ${l.w4.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,i().button`
  padding: 12px 24px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.border};
  background: transparent;
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, color ${l.w4.transitions.base};

  &:hover {
    background: rgba(255,255,255,0.04);
    border-color: ${l.w4.colors.mainTextMuted};
    color: ${l.w4.colors.mainText};
  }
`},3325(e,t,r){r.d(t,{m:()=>ea});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063);let c={title:{pt:"Ca\xe7ador de Sons",en:"Sound Hunter"},subtitle:{pt:"Encontra os sons ao teu redor!",en:"Find the sounds around you!"},progress:{pt:"Miss\xf5es completas",en:"Missions complete"},record:{pt:"Gravar",en:"Record"},stop:{pt:"Parar",en:"Stop"},play:{pt:"Ouvir",en:"Play"},complete:{pt:"Conclu\xeddo!",en:"Done!"},markDone:{pt:"Marcar como feito",en:"Mark as done"},back:{pt:"Voltar",en:"Back"},reset:{pt:"Recome\xe7ar",en:"Reset"},permDenied:{pt:"Microfone bloqueado. Verifica as permiss\xf5es do navegador.",en:"Microphone blocked. Check your browser permissions."},permError:{pt:"N\xe3o foi poss\xedvel aceder ao microfone.",en:"Could not access the microphone."},celebrate:{pt:"\uD83C\uDF89 Parab\xe9ns, Ca\xe7ador de Sons!",en:"\uD83C\uDF89 Congrats, Sound Hunter!"},celebrateSub:{pt:"Encontraste todos os sons! Que aventura incr\xedvel!",en:"You found every sound! What an amazing adventure!"},celebrateReset:{pt:"Jogar outra vez",en:"Play again"},recording:{pt:"A gravar…",en:"Recording…"},tapRecord:{pt:"Toca em Gravar",en:"Tap Record"}};function d(e,t){return c[e]["pt"===t?"pt":"en"]}let p=[{id:"dog",emoji:"\uD83D\uDC15",en:"Dog barking",pt:"C\xe3o a ladrar"},{id:"water",emoji:"\uD83D\uDEBF",en:"Water running",pt:"\xc1gua a correr"},{id:"clap",emoji:"\uD83D\uDC4F",en:"Clapping hands",pt:"Palmas"},{id:"door",emoji:"\uD83D\uDEAA",en:"Door closing",pt:"Porta a fechar"},{id:"cat",emoji:"\uD83D\uDC31",en:"Cat meowing",pt:"Gato a miar"},{id:"bell",emoji:"\uD83D\uDD14",en:"Bell ringing",pt:"Campainha a tocar"},{id:"alarm",emoji:"⏰",en:"Alarm clock",pt:"Despertador"},{id:"sing",emoji:"\uD83C\uDFB5",en:"Singing a song",pt:"Cantar uma m\xfasica"},{id:"wind",emoji:"\uD83D\uDCA8",en:"Wind blowing",pt:"Vento a soprar"},{id:"bird",emoji:"\uD83E\uDD9C",en:"Bird singing",pt:"P\xe1ssaro a cantar"},{id:"keys",emoji:"\uD83D\uDDDD️",en:"Jingling keys",pt:"Chaves a tilintar"},{id:"laugh",emoji:"\uD83D\uDE02",en:"Laughter",pt:"Gargalhada"}],u="atlantis-soundhunter-progress";function m(){return Object.fromEntries(p.map(e=>[e.id,{recording:!1,audioUrl:null,completed:!1,timerSecs:0}]))}let h=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=(0,s.keyframes)`
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.12); }
  100% { transform: scale(1); opacity: 1; }
`,f=(0,s.keyframes)`
  0%, 100% { height: 6px; }
  50%       { height: 22px; }
`,x=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0px rgba(46, 160, 67, 0); border-color: #2ea043; }
  40%  { box-shadow: 0 0 20px rgba(255, 215, 0, 0.35), 0 0 40px rgba(46, 160, 67, 0.25); border-color: #ffd700; }
  100% { box-shadow: 0 0 8px rgba(46, 160, 67, 0.2); border-color: #2ea043; }
`,b=(0,s.keyframes)`
  0%, 100% { filter: drop-shadow(0 0 0px rgba(255, 215, 0, 0)); }
  50%       { filter: drop-shadow(0 0 24px rgba(255, 215, 0, 0.7)) drop-shadow(0 0 48px rgba(255, 200, 0, 0.4)); }
`,w=(0,s.keyframes)`
  0%   { transform: scale(1); background: rgba(88, 166, 255, 0.15); }
  50%  { transform: scale(1.15); background: rgba(88, 166, 255, 0.4); }
  100% { transform: scale(1); background: rgba(88, 166, 255, 0.15); }
`,y=(0,s.keyframes)`
  0%   { transform: translateY(-40px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,v=(0,s.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,$=(0,s.keyframes)`
  0%   { transform: rotate(0deg) scale(0); }
  60%  { transform: rotate(200deg) scale(1.3); }
  100% { transform: rotate(360deg) scale(1); }
`,k=i().div`
  min-height: 100%;
  background:
    radial-gradient(ellipse at 20% 15%, rgba(20, 80, 100, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 55%),
    radial-gradient(ellipse at 50% 50%, rgba(14, 26, 46, 0.7) 0%, ${l.w4.colors.mainBg} 80%);
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${h} 0.3s ease;
`,j=i().header`
  text-align: center;
  margin-bottom: ${l.w4.spacing.xl};
`,M=i().h1`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  letter-spacing: -0.5px;
  margin-bottom: ${l.w4.spacing.xs};
`,S=i().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
`,z=i().div`
  width: 100%;
  max-width: 720px;
  margin-bottom: ${l.w4.spacing.xl};
`,T=i().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${l.w4.spacing.sm};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,C=i().span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.accent};
`,R=i().div`
  height: 12px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  overflow: visible;
  position: relative;
`,_=i().div`
  position: absolute;
  top: 50%;
  left: ${({position:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({reached:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border: 2px solid ${({reached:e})=>e?l.w4.colors.accentHover:l.w4.colors.surface};
  z-index: 1;
  transition: background 0.4s ease, border-color 0.4s ease;
  animation: ${({flashing:e})=>e?w:"none"} 0.5s ease 3;
`,B=i().div`
  height: 100%;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`,I=i().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  border-radius: 999px;
  background: linear-gradient(90deg, #58a6ff, #79c0ff, #a5d6ff);
  background-size: 200% auto;
  animation: ${v} 2s linear infinite;
  transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`,A=i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${l.w4.spacing.md};
  width: 100%;
  max-width: 900px;
  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,E=i().div`
  background: ${({completed:e})=>e?"#0e2a1a":l.w4.colors.surface};
  border: 2px solid ${({completed:e,recording:t})=>e?"#2ea043":t?"#f85149":l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  transition: border-color ${l.w4.transitions.base}, background ${l.w4.transitions.slow}, transform ${l.w4.transitions.base}, box-shadow ${l.w4.transitions.base};
  animation: ${({justCompleted:e,completed:t})=>e?`${g} 0.35s ease, ${x} 1.4s ease 0.1s`:t?"none":`${h} 0.35s ease`};
  cursor: default;
  position: relative;

  &:hover {
    transform: ${({completed:e})=>e?"none":"translateY(-2px)"};
    box-shadow: ${({completed:e,recording:t})=>e?"0 4px 16px rgba(46, 160, 67, 0.15)":t?"0 8px 24px rgba(248, 81, 73, 0.25)":"0 8px 24px rgba(88, 166, 255, 0.15)"};
  }

  &:hover .record-btn {
    background: ${l.w4.colors.accentHover};
    transform: translateY(-1px);
  }

  &:active .record-btn {
    transform: scale(0.97) translateY(0);
  }
`,F=i().div`
  font-size: 52px;
  line-height: 1;
  user-select: none;
`,P=i().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  text-align: center;
`,L=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,O=i().span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 24px;
  flex-shrink: 0;
`,H=i().span`
  display: inline-block;
  width: 4px;
  height: 6px;
  border-radius: 2px;
  background: #f85149;
  animation: ${f} 0.7s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
`;function D(){return(0,o.jsx)(O,{children:[0,.1,.2,.15,.05,.25,.1].map((e,t)=>(0,o.jsx)(H,{delay:e},t))})}let N=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: #f85149;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
`,V=i().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  min-height: 18px;
  text-align: center;
`,G=i().button`
  display: inline-flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  padding: 8px 16px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background ${l.w4.transitions.base}, transform ${l.w4.transitions.fast}, opacity ${l.w4.transitions.base};
  min-height: 44px;

  ${({variant:e="primary"})=>"primary"===e?`background: ${l.w4.colors.accent}; color: #0d1117;`:"danger"===e?"background: #f85149; color: #fff;":"success"===e?"background: #2ea043; color: #fff;":`background: ${l.w4.colors.surface}; color: ${l.w4.colors.mainText}; border-color: ${l.w4.colors.border};`}

  &:hover:not(:disabled) {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,q=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  color: #2ea043;
  font-weight: 700;
  font-size: ${l.w4.typography.fontSizeSm};
`,Y=i().span`
  display: inline-block;
  animation: ${$} 0.6s ease forwards;
`,W=i().div`
  background: #2d1a1a;
  border: 1px solid #f85149;
  border-radius: ${l.w4.borderRadius.md};
  color: #ff7b72;
  font-size: ${l.w4.typography.fontSizeSm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  text-align: center;
  width: 100%;
`,J=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,X=["#58a6ff","#f78166","#3fb950","#d2a8ff","#ffa657","#79c0ff"],U=i().div`
  position: fixed;
  top: -40px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>.4*e}px;
  background: ${({color:e})=>e};
  border-radius: 3px;
  animation: ${y} ${({delay:e})=>2+e}s ease-in ${({delay:e})=>(.15*e).toFixed(2)}s forwards;
  pointer-events: none;
  z-index: 999;
`,K=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  gap: ${l.w4.spacing.lg};
  text-align: center;
  animation: ${h} 0.4s ease;
`,Q=i().h2`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  color: ${l.w4.colors.mainText};
`,Z=i().p`
  font-size: ${l.w4.typography.fontSizeLg};
  color: ${l.w4.colors.mainTextMuted};
  max-width: 480px;
`,ee=i().div`
  font-size: clamp(3.5rem, 10vw, 6rem);
  line-height: 1;
  animation: ${b} 2s ease-in-out infinite;
  user-select: none;
`;function et(){let e=Array.from({length:50},(e,t)=>({key:t,left:100*Math.random(),delay:20*Math.random(),color:X[Math.floor(Math.random()*X.length)],size:8+Math.floor(10*Math.random())}));return(0,o.jsx)(o.Fragment,{children:e.map(e=>(0,o.jsx)(U,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.key))})}function er({mission:e,state:t,lang:r,justCompleted:a,onRecord:n,onStop:i,onPlay:s,onComplete:l,permError:c}){let p="pt"===r?e.pt:e.en;return(0,o.jsxs)(E,{completed:t.completed,recording:t.recording,justCompleted:a,children:[(0,o.jsx)(F,{children:e.emoji}),(0,o.jsx)(P,{children:p}),t.completed?(0,o.jsxs)(q,{children:[(0,o.jsx)(Y,{children:"⭐"})," ",d("complete",r)]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(L,{children:[t.recording?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsxs)(N,{children:[10-t.timerSecs,"s"]}),(0,o.jsxs)(G,{variant:"danger",onClick:i,children:["⏹ ",d("stop",r)]})]}):(0,o.jsxs)(G,{variant:"primary",className:"record-btn",onClick:n,children:["\uD83C\uDF99 ",d("record",r)]}),t.audioUrl&&!t.recording&&(0,o.jsxs)(G,{variant:"ghost",onClick:s,children:["▶ ",d("play",r)]})]}),(0,o.jsx)(V,{children:t.recording?d("recording",r):t.audioUrl?"":d("tapRecord",r)}),c&&(0,o.jsx)(W,{children:c}),t.audioUrl&&!t.recording&&(0,o.jsxs)(G,{variant:"success",onClick:l,children:["✅ ",d("markDone",r)]})]})]})}let eo=[25,50,75];function ea({lang:e,onBack:t}){let[r,n]=(0,a.useState)(()=>{let e=m();for(let t of function(){try{let e=localStorage.getItem(u);if(e)return new Set(JSON.parse(e))}catch{}return new Set}())e[t]&&(e[t]={...e[t],completed:!0});return e}),[i,s]=(0,a.useState)({}),[l,c]=(0,a.useState)(new Set),[h,g]=(0,a.useState)(null),f=(0,a.useRef)(0),x=(0,a.useRef)(null),b=(0,a.useRef)([]),w=(0,a.useRef)(null),y=(0,a.useRef)(null),v=Object.values(r).filter(e=>e.completed).length,$=v===p.length,E=Math.round(v/p.length*100);(0,a.useEffect)(()=>{let e=f.current;for(let t of eo)if(e<t&&E>=t){g(t),setTimeout(()=>g(null),1800);break}f.current=E},[E]),(0,a.useEffect)(()=>{var e=new Set(Object.entries(r).filter(([,e])=>e.completed).map(([e])=>e));try{localStorage.setItem(u,JSON.stringify([...e]))}catch{}},[r]);let F=(0,a.useCallback)((e,t)=>{n(r=>({...r,[e]:{...r[e],...t}}))},[]),P=(0,a.useCallback)(()=>{null!==w.current&&(clearInterval(w.current),w.current=null)},[]),O=(0,a.useCallback)(e=>{P(),x.current&&"inactive"!==x.current.state&&x.current.stop(),F(e,{recording:!1,timerSecs:0}),y.current=null},[P,F]),H=(0,a.useCallback)(async t=>{let r;y.current&&y.current!==t&&O(y.current),s(e=>({...e,[t]:""}));try{r=await navigator.mediaDevices.getUserMedia({audio:!0})}catch(o){let r=o instanceof DOMException&&"NotAllowedError"===o.name?d("permDenied",e):d("permError",e);s(e=>({...e,[t]:r}));return}b.current=[];let o=new MediaRecorder(r);x.current=o,y.current=t,o.ondataavailable=e=>{e.data.size>0&&b.current.push(e.data)},o.onstop=()=>{let e=new Blob(b.current,{type:"audio/webm"});F(t,{audioUrl:URL.createObjectURL(e)}),r.getTracks().forEach(e=>e.stop())},o.start(),F(t,{recording:!0,timerSecs:0});let a=0;w.current=setInterval(()=>{F(t,{timerSecs:a+=1}),a>=10&&O(t)},1e3)},[e,O,F]),D=(0,a.useCallback)(e=>{O(e)},[O]),N=(0,a.useCallback)(e=>{let t=r[e]?.audioUrl;t&&new Audio(t).play().catch(()=>{})},[r]),V=(0,a.useCallback)(e=>{F(e,{completed:!0}),c(t=>new Set([...t,e])),setTimeout(()=>{c(t=>{let r=new Set(t);return r.delete(e),r})},1600)},[F]),q=(0,a.useCallback)(()=>{Object.values(r).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)}),P(),x.current&&"inactive"!==x.current.state&&x.current.stop(),y.current=null,n(m()),s({}),c(new Set),g(null),f.current=0,localStorage.removeItem(u)},[r,P]);return((0,a.useEffect)(()=>()=>{P(),x.current&&"inactive"!==x.current.state&&x.current.stop(),Object.values(r).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)})},[]),$)?(0,o.jsxs)(k,{children:[(0,o.jsx)(et,{}),(0,o.jsxs)(K,{children:[(0,o.jsx)(ee,{children:"\uD83C\uDFC6"}),(0,o.jsx)(Q,{children:d("celebrate",e)}),(0,o.jsx)(Z,{children:d("celebrateSub",e)}),(0,o.jsx)(L,{children:(0,o.jsxs)(G,{variant:"primary",onClick:q,children:["\uD83D\uDD04 ",d("celebrateReset",e)]})})]})]}):(0,o.jsxs)(k,{children:[(0,o.jsxs)(j,{children:[(0,o.jsxs)(M,{children:["\uD83C\uDF99 ",d("title",e)]}),(0,o.jsx)(S,{children:d("subtitle",e)})]}),(0,o.jsxs)(z,{children:[(0,o.jsxs)(T,{children:[(0,o.jsx)("span",{children:d("progress",e)}),(0,o.jsxs)(C,{children:[v," / ",p.length]})]}),(0,o.jsxs)(R,{children:[(0,o.jsx)(B,{children:(0,o.jsx)(I,{pct:E})}),eo.map(e=>(0,o.jsx)(_,{position:e,reached:E>=e,flashing:h===e},e))]})]}),(0,o.jsx)(A,{children:p.map(t=>(0,o.jsx)(er,{mission:t,state:r[t.id],lang:e,justCompleted:l.has(t.id),onRecord:()=>H(t.id),onStop:()=>D(t.id),onPlay:()=>N(t.id),onComplete:()=>V(t.id),permError:i[t.id]??null},t.id))}),(0,o.jsx)(J,{children:(0,o.jsxs)(G,{variant:"ghost",onClick:q,children:["\uD83D\uDD04 ",d("reset",e)]})})]})}},9367(e,t,r){r.d(t,{O:()=>ex});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(5782);let d={title:{pt:"Encontra o Par!",en:"Spot It!"},subtitle:{pt:"Encontra o s\xedmbolo igual nas duas cartas",en:"Find the matching symbol on both cards"},easy:{pt:"F\xe1cil",en:"Easy"},medium:{pt:"M\xe9dio",en:"Medium"},hard:{pt:"Dif\xedcil",en:"Hard"},easyDesc:{pt:"4 s\xedmbolos por carta",en:"4 symbols per card"},mediumDesc:{pt:"6 s\xedmbolos por carta",en:"6 symbols per card"},hardDesc:{pt:"8 s\xedmbolos por carta",en:"8 symbols per card"},score:{pt:"Pontos",en:"Score"},round:{pt:"Ronda",en:"Round"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incr\xedvel!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"R\xe1pido!",en:"Fast!"},oops:{pt:"Ups!",en:"Oops!"},gameOver:{pt:"Fim de Jogo!",en:"Game Over!"},finalScore:{pt:"Pontua\xe7\xe3o final",en:"Final score"},rounds:{pt:"rondas",en:"rounds"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestScore:{pt:"Melhor",en:"Best"},tapMatch:{pt:"Toca no s\xedmbolo igual!",en:"Tap the matching symbol!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espa\xe7o",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"C\xe3es, gatos, le\xf5es e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguet\xf5es e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Advers\xe1rio",en:"Opponent"},youScored:{pt:"Tu pontuaste!",en:"You scored!"},theyScored:{pt:"O advers\xe1rio pontuou!",en:"Opponent scored!"},youWin:{pt:"\uD83C\uDF89 Ganhaste!",en:"\uD83C\uDF89 You win!"},youLose:{pt:"\uD83D\uDE05 Perdeste!",en:"\uD83D\uDE05 You lost!"},tied:{pt:"\uD83E\uDD1D Empate!",en:"\uD83E\uDD1D Tied!"},opponentLeft:{pt:"O advers\xe1rio saiu.",en:"Opponent left."},rematch:{pt:"Revanche",en:"Rematch"},waiting:{pt:"\xc0 espera…",en:"Waiting…"}};function p(e,t){return d[e]["pt"===t?"pt":"en"]}let u=[{id:"animals",emoji:"\uD83E\uDD81",color:"#f59e0b",preview:["\uD83D\uDC36","\uD83D\uDC31","\uD83E\uDD81","\uD83D\uDC3C","\uD83E\uDD8B"],symbols:["\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC2D","\uD83D\uDC39","\uD83D\uDC30","\uD83E\uDD8A","\uD83D\uDC3B","\uD83D\uDC3C","\uD83D\uDC28","\uD83D\uDC2F","\uD83E\uDD81","\uD83D\uDC2E","\uD83D\uDC37","\uD83D\uDC38","\uD83D\uDC35","\uD83D\uDC14","\uD83E\uDD84","\uD83D\uDC1D","\uD83D\uDC1B","\uD83E\uDD8B","\uD83D\uDC0C","\uD83D\uDC1E","\uD83D\uDC22","\uD83D\uDC19","\uD83E\uDD80","\uD83D\uDC20","\uD83D\uDC2C","\uD83E\uDD88","\uD83D\uDC33","\uD83D\uDC18","\uD83E\uDD92","\uD83E\uDD98","\uD83D\uDC3F️","\uD83E\uDD9C","\uD83E\uDDA9","\uD83D\uDC27","\uD83E\uDD94","\uD83D\uDC2B","\uD83E\uDD99","\uD83D\uDC0A","\uD83E\uDD95","\uD83D\uDC0B","\uD83E\uDD91","\uD83D\uDC04","\uD83D\uDC0F","\uD83E\uDD8C","\uD83D\uDC08","\uD83D\uDC15","\uD83E\uDD89","\uD83D\uDC13","\uD83E\uDDA2","\uD83D\uDC07","\uD83E\uDD8E","\uD83D\uDC05","\uD83D\uDC06","\uD83E\uDDA7","\uD83E\uDDA6","\uD83D\uDC11"]},{id:"food",emoji:"\uD83C\uDF55",color:"#ef4444",preview:["\uD83C\uDF55","\uD83C\uDF66","\uD83E\uDDC1","\uD83C\uDF53","\uD83C\uDF69"],symbols:["\uD83C\uDF4E","\uD83C\uDF4C","\uD83C\uDF53","\uD83C\uDF49","\uD83C\uDF55","\uD83E\uDDC1","\uD83C\uDF69","\uD83C\uDF6A","\uD83C\uDF2E","\uD83C\uDF66","\uD83C\uDF82","\uD83C\uDF6B","\uD83C\uDF6C","\uD83C\uDF6D","\uD83C\uDF7F","\uD83E\uDD50","\uD83E\uDD68","\uD83E\uDD6F","\uD83E\uDD5E","\uD83E\uDDC7","\uD83C\uDF54","\uD83C\uDF2D","\uD83C\uDF5F","\uD83E\uDD6A","\uD83C\uDF2F","\uD83E\uDD57","\uD83C\uDF5D","\uD83C\uDF5C","\uD83C\uDF63","\uD83C\uDF71","\uD83E\uDD5F","\uD83C\uDF61","\uD83C\uDF67","\uD83C\uDF68","\uD83E\uDD67","\uD83C\uDF70","\uD83E\uDDC0","\uD83E\uDD5A","\uD83E\uDD51","\uD83E\uDED0","\uD83C\uDF47","\uD83C\uDF4A","\uD83C\uDF4B","\uD83C\uDF51","\uD83C\uDF52","\uD83E\uDD5D","\uD83C\uDF4D","\uD83E\uDD65","\uD83E\uDD55","\uD83C\uDF3D","\uD83E\uDD52","\uD83C\uDF46","\uD83E\uDED1","\uD83E\uDDC5","\uD83E\uDD5C","\uD83C\uDF30","☕","\uD83E\uDDC3"]},{id:"space",emoji:"\uD83D\uDE80",color:"#8b5cf6",preview:["\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19"],symbols:["\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19","☀️","\uD83E\uDE90","\uD83C\uDF1F","\uD83D\uDCAB","✨","\uD83C\uDF20","\uD83D\uDD2D","\uD83D\uDC7D","\uD83E\uDD16","\uD83D\uDC7E","\uD83D\uDEF0️","\uD83C\uDF0C","\uD83D\uDC8E","\uD83D\uDD2E","⚡","\uD83C\uDF08","☄️","\uD83E\uDDF2","\uD83D\uDD2C","\uD83E\uDDEA","⏰","\uD83D\uDDDD️","\uD83E\uDDED","\uD83C\uDFAF","\uD83D\uDD14","\uD83C\uDFC6","\uD83C\uDFAA","\uD83C\uDFA0","\uD83C\uDFA1","\uD83C\uDFA2","\uD83C\uDFAE","\uD83D\uDD79️","\uD83C\uDFB2","♟️","\uD83E\uDDE9","\uD83C\uDFA8","\uD83D\uDD8C️","\uD83C\uDFB8","\uD83E\uDD41","\uD83C\uDFBA","\uD83C\uDFB9","\uD83C\uDFA4","\uD83C\uDFA7","\uD83D\uDCE1","\uD83D\uDCA1","\uD83D\uDD0B","\uD83E\uDDEC","\uD83C\uDF0B","\uD83D\uDDFB","❄️","\uD83D\uDD25","\uD83D\uDCA7","\uD83C\uDF2A️"]},{id:"mix",emoji:"\uD83C\uDFAA",color:"#3fb950",preview:["\uD83D\uDC36","\uD83C\uDF55","\uD83D\uDE80","⭐","\uD83C\uDFB8"],symbols:["\uD83D\uDC36","\uD83D\uDC31","\uD83E\uDD81","\uD83D\uDC3C","\uD83E\uDD8B","\uD83D\uDC22","\uD83D\uDC19","\uD83D\uDC2C","\uD83C\uDF55","\uD83C\uDF66","\uD83E\uDDC1","\uD83C\uDF53","\uD83C\uDF69","\uD83C\uDF49","\uD83C\uDF82","\uD83C\uDF4C","\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19","☀️","\uD83C\uDF08","\uD83D\uDC8E","\uD83C\uDF88","\uD83C\uDFB8","⚽","\uD83C\uDFAF","\uD83D\uDD14","\uD83C\uDF81","\uD83C\uDFAE","\uD83C\uDFB2","❤️","\uD83D\uDD25","\uD83D\uDCA7","\uD83C\uDF38","\uD83C\uDF3B","\uD83E\uDDF2","⚡","\uD83D\uDD2E","\uD83C\uDFA8","\uD83C\uDFA4","\uD83E\uDD41","\uD83E\uDDE9","\uD83C\uDFC6","\uD83C\uDFAA","\uD83C\uDFA1","\uD83C\uDFA2","\uD83E\uDD84","\uD83D\uDC18","\uD83D\uDC33","\uD83E\uDD8A","\uD83D\uDC38","\uD83D\uDC35","\uD83D\uDC1D","\uD83D\uDC1E","\uD83C\uDF4E","\uD83C\uDF2E"]}];function m(e){let t=[...e];for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}let h={easy:{order:3,totalRounds:10,timePerRound:15},medium:{order:5,totalRounds:12,timePerRound:12},hard:{order:7,totalRounds:15,timePerRound:10}},g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=(0,s.keyframes)`
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
`,x=(0,s.keyframes)`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`,b=(0,s.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  25%      { transform: rotate(-8deg); }
  75%      { transform: rotate(8deg); }
`,w=(0,s.keyframes)`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,y=(0,s.keyframes)`
  0%   { opacity: 1; transform: scale(0) rotate(0deg); }
  50%  { opacity: 1; transform: scale(1.2) rotate(180deg); }
  100% { opacity: 0; transform: scale(0) rotate(360deg); }
`,v=(0,s.keyframes)`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(80px) rotate(720deg); opacity: 0; }
`,$=(0,s.keyframes)`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-60px) scale(1.5); }
`,k=(0,s.keyframes)`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.08); }
`,j=(0,s.keyframes)`
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-8px); }
  40%      { transform: translateX(8px); }
  60%      { transform: translateX(-6px); }
  80%      { transform: translateX(6px); }
`,M=(0,s.keyframes)`
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.15), 0 4px 20px rgba(0,0,0,0.3); }
  50%      { box-shadow: 0 0 28px rgba(139, 92, 246, 0.25), 0 4px 24px rgba(0,0,0,0.4); }
`,S=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.06) 0%, transparent 70%),
    #080b12;
`,z=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: ${l.w4.spacing.xl};
  animation: ${g} 0.4s ease;
`,T=i().h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`,C=i().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 340px;
  line-height: 1.5;
`,R=i().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,_=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 32px;
  background: linear-gradient(168deg, ${({accent:e})=>e}15 0%, ${l.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}40;
  border-radius: 20px;
  cursor: pointer;
  transition: all ${l.w4.transitions.slow};
  font-family: ${l.w4.typography.fontFamily};
  min-width: 150px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({accent:e})=>e};
    border-radius: 20px 20px 0 0;
    opacity: 0.6;
  }

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: ${({accent:e})=>e}80;
    box-shadow: 0 8px 30px ${({accent:e})=>e}25;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,B=i().span`
  font-size: 40px;
  animation: ${x} 2s ease-in-out infinite;
`,I=i().span`
  font-size: 18px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,A=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,E=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px ${l.w4.spacing.md} ${l.w4.spacing.lg};
  gap: 16px;
  min-height: 0;
  width: 100%;
`,F=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
`,P=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({color:e})=>e??l.w4.colors.border};
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${({color:e})=>e??l.w4.colors.mainText};
  animation: ${({urgent:e})=>e?k:"none"} 0.5s ease-in-out infinite;
`,L=i().p`
  font-size: 14px;
  font-weight: 600;
  color: ${({wrong:e})=>e?"#f97583":l.w4.colors.accent};
  margin: 0;
  text-align: center;
  min-height: 22px;
  animation: ${({wrong:e})=>e?j:"none"} 0.4s ease;
`,O=i().div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 700px;
  min-height: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-direction: column;
    gap: 14px;
  }
`,H=i().div`
  position: relative;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 80%, rgba(79, 192, 255, 0.04) 0%, transparent 60%),
    ${l.w4.colors.surface};
  border: 2.5px solid ${({highlighted:e})=>e?"#8b5cf6":l.w4.colors.border};
  border-radius: 50%;
  padding: 28px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 340px;
  height: 340px;
  animation: ${f} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: border-color ${l.w4.transitions.slow}, box-shadow ${l.w4.transitions.slow};
  ${({highlighted:e})=>e?`animation: ${M.toString()} 2s ease-in-out infinite;`:"box-shadow: 0 4px 20px rgba(0,0,0,0.3);"}

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, transparent 40%, transparent 60%, rgba(79, 192, 255, 0.15) 100%);
    pointer-events: none;
    opacity: ${({highlighted:e})=>e?1:.4};
    transition: opacity ${l.w4.transitions.slow};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    width: 260px;
    height: 260px;
    padding: 20px;
    gap: 4px;
  }
`,D=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  font-size: ${({size:e})=>Math.round(.65*e)}px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  transform: rotate(${({rotDeg:e})=>e}deg);
  animation: ${f} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  position: relative;

  ${({correct:e})=>e?`
    border-color: #3fb950;
    background: rgba(63, 185, 80, 0.15);
    animation: ${w.toString()} 0.4s ease;
  `:""}

  ${({wrong:e})=>e?`
    border-color: #f97583;
    background: rgba(249, 117, 131, 0.15);
    animation: ${b.toString()} 0.4s ease;
  `:""}

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(${({rotDeg:e})=>e}deg) scale(1.15);
    border-color: ${l.w4.colors.accent}60;
  }

  &:active {
    transform: rotate(${({rotDeg:e})=>e}deg) scale(0.95);
  }
`,N=i().div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(8, 11, 18, 0.7);
  z-index: 100;
  animation: ${g} 0.2s ease;
  pointer-events: none;
`,V=i().span`
  font-size: 80px;
  animation: ${x} 0.6s ease;
`,G=i().span`
  font-size: 32px;
  font-weight: 800;
  color: ${({color:e})=>e};
  margin-top: 8px;
  animation: ${f} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards;
`,q=i().span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 800;
  color: #3fb950;
  pointer-events: none;
  animation: ${$} 0.8s ease-out forwards;
`,Y=i().span`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  font-size: 18px;
  color: ${({color:e})=>e};
  pointer-events: none;
  animation: ${v} 1.2s ease-out ${({delay:e})=>e}s forwards;
  opacity: 0;
  animation-fill-mode: forwards;
`,W=i().span`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  font-size: 14px;
  pointer-events: none;
  animation: ${y} 0.6s ease ${({delay:e})=>e}s both;
`,J=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: ${l.w4.spacing.xl};
  animation: ${g} 0.5s ease;
  text-align: center;
`,X=i().h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,U=i().span`
  font-size: 72px;
  animation: ${x} 1s ease-in-out infinite;
`,K=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Q=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,Z=i().span`
  font-size: 48px;
  font-weight: 800;
  color: ${l.w4.colors.accent};
`,ee=i().span`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  animation: ${w} 1s ease-in-out infinite;
`,et=i().button`
  padding: 16px 40px;
  background: ${({accent:e})=>e};
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  min-height: 52px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px ${({accent:e})=>e}40;
  }

  &:active { transform: translateY(-1px); }
`,er=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 20px;
  font-size: 14px;
  color: ${l.w4.colors.mainTextMuted};
`,eo=i().div`
  font-size: 24px;
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.3;
  flex-shrink: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: 18px;
  }
`,ea=i().span`
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
`,en=i().div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
`,ei=i().button`
  padding: 8px 18px;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, color ${l.w4.transitions.base};
  background: ${({active:e})=>e?"rgba(139, 92, 246, 0.18)":"transparent"};
  color: ${({active:e})=>e?"#8b5cf6":l.w4.colors.mainTextMuted};
  &:hover { color: #8b5cf6; background: rgba(139, 92, 246, 0.1); }
`,es=i().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.md};
  max-width: 480px;
  width: 100%;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    max-width: 240px;
  }
`,el=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px 22px;
  background: linear-gradient(168deg, ${({accent:e})=>e}12 0%, ${l.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}35;
  border-radius: 20px;
  cursor: pointer;
  transition: all ${l.w4.transitions.slow};
  font-family: ${l.w4.typography.fontFamily};
  position: relative;
  overflow: hidden;
  min-height: 48px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${({accent:e})=>e}, transparent);
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: ${({accent:e})=>e}70;
    box-shadow: 0 8px 28px ${({accent:e})=>e}20;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,ec=i().span`
  font-size: 44px;
  animation: ${x} 2.5s ease-in-out infinite;
`,ed=i().div`
  display: flex;
  gap: 4px;
  font-size: 20px;
  opacity: 0.7;
`,ep=i().span`
  font-size: 16px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,eu=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,em=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],eh=["great","amazing","perfect","super","wow","fast"],eg="atlantis-spotit-best";function ef(e){try{return JSON.parse(localStorage.getItem(eg)??"{}")[e]??0}catch{return 0}}function ex({lang:e,canOnline:t}){let[r,n]=(0,a.useState)("theme"),[i,s]=(0,a.useState)("solo"),[d,g]=(0,a.useState)("animals"),[f,x]=(0,a.useState)("easy"),[b,w]=(0,a.useState)(null),[y,v]=(0,a.useState)(-1),[$,k]=(0,a.useState)(0),[j,M]=(0,a.useState)(0),[eb,ew]=(0,a.useState)(0),[ey,ev]=(0,a.useState)({}),[e$,ek]=(0,a.useState)(0),[ej,eM]=(0,a.useState)(""),[eS,ez]=(0,a.useState)(null),[eT,eC]=(0,a.useState)(null),[eR,e_]=(0,a.useState)(!1),[eB,eI]=(0,a.useState)(!1),[eA,eE]=(0,a.useState)(new Map),[eF,eP]=(0,a.useState)(new Map),[eL,eO]=(0,a.useState)([[],[]]),[eH,eD]=(0,a.useState)(!1),[eN,eV]=(0,a.useState)("none"),eG=(0,a.useRef)(null),eq=(0,a.useRef)([]),eY=(0,a.useRef)(0),eW=(0,a.useRef)(!1),[eJ]=(0,a.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),eX=(0,a.useCallback)(t=>{switch(t.type){case"guest-joined":eK.current.addPlayer({id:t.playerId,name:t.name,isHost:!1}),eK.current.sendEvent({type:"host-ack",name:eJ,playerId:eK.current.room?.playerId??"",players:eK.current.room?.players??[]});break;case"host-ack":eK.current.setConnected(t.name),t.players&&eK.current.setPlayers([...t.players,{id:eK.current.room?.playerId??"",name:eJ,isHost:!1}]);break;case"player-list":eK.current.setPlayers(t.players);break;case"game-state":{let r=t.payload;if("guest-spot"===r.action){if(eW.current)return;eW.current=!0;let t=100+Math.ceil(2*r.timer),o=r.playerId;ew(e=>e+t),ev(e=>({...e,[o]:(e[o]??0)+t}));let a=`${r.cardIndex}-${r.symbolIndex}`;eC(a),e_(!1),eM(p("theyScored",e)),n("correct"),eK.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:o,winnerName:"",points:t,correctId:a}}),setTimeout(()=>{e0.current()},900)}else if("start-round"===r.action){let e=r.pair,t=r.round,o=r.matchSymbol,a=r.totalRounds,i=r.timePerRound;w(e),v(o),k(t),eY.current=t-1,ek(i),ez(null),eC(null),eM(""),e_(!1),eW.current=!1,n("playing"),eZ.current={totalRounds:a,timePerRound:i}}else if("round-result"===r.action){eW.current=!0;let t=r.winnerId,o=t===eK.current.room?.playerId,a=r.points;ev(e=>({...e,[t]:(e[t]??0)+a})),o?(M(e=>e+a),eM(p("youScored",e))):(ew(e=>e+a),eM(p("theyScored",e))),eC(r.correctId),e_(o),n("correct")}else"game-over-scores"===r.action&&(M(r.myScore??j),ew(r.opponentScore??eb),n("gameover"));break}case"game-over":n("gameover");break;case"rematch-request":eV("received");break;case"rematch-accepted":eV("none"),M(0),ew(0),n("menu");break;case"player-left":eD(!0),n("gameover")}},[eJ,e]),eU=(0,c.Ky)({gameId:"spotit",playerName:eJ,onEvent:eX}),eK=(0,a.useRef)(eU);eK.current=eU;let eQ=(0,c.zj)({gameId:"spotit",enabled:"online"===i}),eZ=(0,a.useRef)({totalRounds:10,timePerRound:15}),e0=(0,a.useRef)(()=>{}),e1=h[f],e4=(0,a.useMemo)(()=>u.find(e=>e.id===d)?.symbols??u[3].symbols,[d]),e2=(0,a.useCallback)(e=>{let t=new Map,r=new Map,o=[m(e[0].symbols),m(e[1].symbols)];e.forEach((e,a)=>{o[a].forEach((e,o)=>{let n=`${a}-${e}`;t.set(n,Math.floor(40*Math.random()-20)),r.set(n,.05*o)})}),eE(t),eP(r),eO(o)},[]),e5=(0,a.useCallback)(e=>{x(e);let t=h[e];eZ.current={totalRounds:t.totalRounds,timePerRound:t.timePerRound};let r=m(function(e){let t=[];t.push({symbols:Array.from({length:e+1},(e,t)=>t)});for(let r=0;r<e;r++){let o=[0];for(let t=0;t<e;t++)o.push(e+1+r*e+t);t.push({symbols:o})}for(let r=0;r<e;r++)for(let o=0;o<e;o++){let a=[r+1];for(let t=0;t<e;t++)a.push(e+1+t*e+(r*t+o)%e);t.push({symbols:a})}return t}(t.order));eq.current=r,eY.current=0,eW.current=!1,k(1),M(0),ew(0),ev({}),eM(""),ez(null),eC(null),eI(!1);let o=[r[0],r[1]];w(o);let a=o[0].symbols.find(e=>o[1].symbols.includes(e))??-1;v(a),ek(t.timePerRound),e2(o),n("playing"),"online"===i&&eK.current.room?.role==="host"&&eK.current.sendEvent({type:"game-state",payload:{action:"start-round",pair:o,round:1,matchSymbol:a,totalRounds:t.totalRounds,timePerRound:t.timePerRound}})},[e2,i]);(0,a.useEffect)(()=>{if("playing"!==r){eG.current&&clearInterval(eG.current);return}return eG.current=setInterval(()=>{ek(e=>e<=1?(eG.current&&clearInterval(eG.current),n("gameover"),0):e-1)},1e3),()=>{eG.current&&clearInterval(eG.current)}},[r]),(0,a.useEffect)(()=>{if("gameover"===r&&j>ef(f)){try{let e=JSON.parse(localStorage.getItem(eg)??"{}");e[f]=j,localStorage.setItem(eg,JSON.stringify(e))}catch{}eI(!0)}},[r,f,j]);let e3=(0,a.useCallback)(()=>{let e=eY.current+1;eY.current=e,eW.current=!1;let t=eq.current,r=h[f];if(e>=r.totalRounds||2*e+1>=t.length){n("gameover"),"online"===i&&eK.current.sendEvent({type:"game-over",winner:"draw"});return}let o=[t[2*e],t[2*e+1]];w(o);let a=o[0].symbols.find(e=>o[1].symbols.includes(e))??-1;v(a),k(e+1),ek(r.timePerRound),ez(null),eC(null),eM(""),e_(!1),e2(o),n("playing"),"online"===i&&eK.current.room?.role==="host"&&eK.current.sendEvent({type:"game-state",payload:{action:"start-round",pair:o,round:e+1,matchSymbol:a,totalRounds:r.totalRounds,timePerRound:r.timePerRound}})},[f,e2,i]);e0.current=e3;let e6=(0,a.useCallback)((t,o)=>{if("playing"===r){if("online"===i){if(t!==y){ez(`${o}-${t}`),eM(p("oops",e)),M(e=>Math.max(0,e-20)),setTimeout(()=>{ez(null),eM(p("tapMatch",e))},500);return}if(eW.current)return;if("host"===(eK.current.room?.role??"guest")){eW.current=!0;let r=100+Math.ceil(2*e$);M(e=>e+r),eC(`${o}-${t}`),e_(!0),eM(p(eh[Math.floor(Math.random()*eh.length)],e)),n("correct");let a=eK.current.room?.playerId??"";ev(e=>({...e,[a]:(e[a]??0)+r})),eK.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:a,winnerName:eK.current.room?.playerName??"",points:r,correctId:`${o}-${t}`}}),setTimeout(()=>{e3()},900)}else eK.current.sendEvent({type:"game-state",payload:{action:"guest-spot",symbolIndex:t,cardIndex:o,timer:e$,playerId:eK.current.room?.playerId}});return}if(t===y){let r=100+Math.ceil(2*e$);M(e=>e+r),eC(`${o}-${t}`),e_(!0),eM(p(eh[Math.floor(Math.random()*eh.length)],e)),n("correct"),setTimeout(()=>{e3()},900)}else ez(`${o}-${t}`),eM(p("oops",e)),M(e=>Math.max(0,e-20)),setTimeout(()=>{ez(null),eM(p("tapMatch",e))},500)}},[r,y,e$,e,e3,i]),e8=(0,a.useMemo)(()=>"easy"===f?80:"medium"===f?64:52,[f]),e9=ef(f);if("theme"===r)return(0,o.jsx)(S,{children:(0,o.jsxs)(z,{children:[(0,o.jsxs)(T,{children:["\uD83C\uDCCF ",p("title",e)]}),(0,o.jsx)(C,{children:p("pickTheme",e)}),(0,o.jsx)(es,{children:u.map(t=>(0,o.jsxs)(el,{accent:t.color,onClick:()=>{g(t.id),n("menu")},children:[(0,o.jsx)(ec,{children:t.emoji}),(0,o.jsx)(ep,{children:p(t.id,e)}),(0,o.jsx)(ed,{children:t.preview.map((e,t)=>(0,o.jsx)("span",{children:e},t))}),(0,o.jsx)(eu,{children:p(`${t.id}Desc`,e)})]},t.id))})]})});if("menu"===r){let r=e=>{"online"===i?(x(e),n("lobby")):e5(e)};return(0,o.jsx)(S,{children:(0,o.jsxs)(z,{children:[(0,o.jsxs)(T,{children:["\uD83C\uDCCF ",p("title",e)]}),(0,o.jsx)(C,{children:p("subtitle",e)}),t&&(0,o.jsxs)(en,{children:[(0,o.jsxs)(ei,{active:"solo"===i,onClick:()=>s("solo"),children:["\uD83C\uDFAF ",p("solo",e)]}),(0,o.jsxs)(ei,{active:"online"===i,onClick:()=>s("online"),children:["\uD83C\uDF10 ",p("online",e)]})]}),(0,o.jsxs)(R,{children:[(0,o.jsxs)(_,{accent:"#3fb950",onClick:()=>r("easy"),children:[(0,o.jsx)(B,{children:"\uD83C\uDF1F"}),(0,o.jsx)(I,{children:p("easy",e)}),(0,o.jsx)(A,{children:p("easyDesc",e)})]}),(0,o.jsxs)(_,{accent:"#f59e0b",onClick:()=>r("medium"),children:[(0,o.jsx)(B,{children:"\uD83D\uDD25"}),(0,o.jsx)(I,{children:p("medium",e)}),(0,o.jsx)(A,{children:p("mediumDesc",e)})]}),(0,o.jsxs)(_,{accent:"#f97583",onClick:()=>r("hard"),children:[(0,o.jsx)(B,{children:"\uD83D\uDCAA"}),(0,o.jsx)(I,{children:p("hard",e)}),(0,o.jsx)(A,{children:p("hardDesc",e)})]})]}),e9>0&&"solo"===i&&(0,o.jsxs)(er,{children:["\uD83C\uDFC6 ",p("bestScore",e),": ",e9]})]})})}if("lobby"===r)return(0,o.jsx)(S,{children:(0,o.jsxs)(z,{children:[(0,o.jsxs)(T,{children:["\uD83C\uDCCF ",p("title",e)]}),eU.room?.connected?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{children:"host"===eU.room.role?"pt"===e?`${eU.room.players.length} jogadores ligados. Escolhe a dificuldade para come\xe7ar.`:`${eU.room.players.length} players connected. Choose difficulty to start.`:"pt"===e?`Ligado! ${eU.room.players.length} jogadores na sala. \xc0 espera que o anfitri\xe3o comece…`:`Connected! ${eU.room.players.length} players in room. Waiting for host to start…`}),(0,o.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:eU.room.players.map(e=>(0,o.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===eU.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===eU.room.role&&(0,o.jsxs)(R,{children:[(0,o.jsxs)(_,{accent:"#3fb950",onClick:()=>e5("easy"),children:[(0,o.jsx)(B,{children:"\uD83C\uDF1F"}),(0,o.jsx)(I,{children:p("easy",e)})]}),(0,o.jsxs)(_,{accent:"#f59e0b",onClick:()=>e5("medium"),children:[(0,o.jsx)(B,{children:"\uD83D\uDD25"}),(0,o.jsx)(I,{children:p("medium",e)})]}),(0,o.jsxs)(_,{accent:"#f97583",onClick:()=>e5("hard"),children:[(0,o.jsx)(B,{children:"\uD83D\uDCAA"}),(0,o.jsx)(I,{children:p("hard",e)})]})]})]}):(0,o.jsx)(c.XB,{lang:e,room:eU.room,error:eU.error,availableRooms:eQ.rooms,onCreateRoom:()=>{let{code:e,roomName:t}=eU.createRoom();eQ.publishRoom({code:e,roomName:t,hostName:eJ,playerCount:1})},onJoinRoom:e=>eU.joinRoom(e),onLeaveRoom:()=>{eQ.unpublishRoom(),eU.leaveRoom(),n("menu")}})]})});if("gameover"===r){let t="online"===i,r=j>eb,a=j===eb,c=eH?p("opponentLeft",e):a?p("tied",e):r?p("youWin",e):p("youLose",e),d=()=>{"received"===eN?(eV("none"),M(0),ew(0),n("menu"),eK.current.sendEvent({type:"rematch-accepted"})):(eV("sent"),eK.current.sendEvent({type:"rematch-request"}))};return(0,o.jsx)(S,{children:(0,o.jsxs)(J,{children:[(0,o.jsx)(U,{children:t?r?"\uD83C\uDF89":a?"\uD83E\uDD1D":"\uD83D\uDE05":"\uD83C\uDFC6"}),(0,o.jsx)(X,{children:t?c:p("gameOver",e)}),(0,o.jsxs)(K,{children:[t&&(eU.room?.players??[]).length>2?(0,o.jsx)(o.Fragment,{children:(eU.room?.players??[]).map(e=>({...e,pts:ey[e.id]??0})).sort((e,t)=>t.pts-e.pts).map((t,r)=>(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[(0,o.jsx)("span",{style:{fontSize:16,fontWeight:700,color:0===r?"#3fb950":l.w4.colors.mainTextMuted,minWidth:20},children:0===r?"\uD83E\uDD47":1===r?"\uD83E\uDD48":2===r?"\uD83E\uDD49":`${r+1}.`}),(0,o.jsxs)("span",{style:{color:t.id===eU.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText,fontWeight:600,flex:1},children:[t.name,t.id===eU.room?.playerId?` (${p("you",e)})`:""]}),(0,o.jsx)("span",{style:{fontSize:20,fontWeight:800,color:0===r?"#3fb950":l.w4.colors.mainText},children:t.pts})]},t.id))}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Q,{children:t?p("you",e):p("finalScore",e)}),(0,o.jsx)(Z,{children:j}),t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Q,{style:{marginTop:8},children:p("opponent",e)}),(0,o.jsx)(Z,{style:{color:"#f97583"},children:eb})]})]}),(0,o.jsxs)(Q,{children:[$," ",p("rounds",e)]})]}),!t&&eB&&(0,o.jsxs)(ee,{children:["\uD83C\uDF89 ",p("newRecord",e)]}),!t&&e9>0&&!eB&&(0,o.jsxs)(er,{children:["\uD83C\uDFC6 ",p("bestScore",e),": ",e9]}),t&&!eH?"sent"===eN?(0,o.jsx)(et,{accent:"#666",children:p("waiting",e)}):"received"===eN?(0,o.jsxs)(et,{accent:"#3fb950",onClick:d,children:[p("rematch",e)," ✓"]}):(0,o.jsx)(et,{accent:"#8b5cf6",onClick:d,children:p("rematch",e)}):(0,o.jsx)(et,{accent:"#8b5cf6",onClick:()=>{t&&eK.current.leaveRoom(),s("solo"),n("theme")},children:p("playAgain",e)})]})})}let e7=e$<=3?"#f97583":e$<=6?"#f59e0b":l.w4.colors.accent;return(0,o.jsx)(S,{children:(0,o.jsxs)(E,{children:[(0,o.jsxs)(F,{children:[(0,o.jsxs)(P,{children:["⭐ ","online"===i?p("you",e):p("score",e),": ",j]}),"online"===i&&(0,o.jsxs)(P,{color:"#f97583",children:["\uD83D\uDC64 ",p("opponent",e),": ",eb]}),(0,o.jsxs)(P,{children:[p("round",e)," ",$,"/","online"===i?eZ.current.totalRounds:e1.totalRounds]}),(0,o.jsxs)(P,{color:e7,urgent:e$<=3,children:["⏱️ ",e$,"s"]})]}),(0,o.jsx)(L,{wrong:!!eS,children:ej||p("tapMatch",e)}),b&&(0,o.jsx)(O,{children:b.map((e,t)=>(0,o.jsxs)(o.Fragment,{children:[1===t&&(0,o.jsx)(eo,{children:"VS"}),(0,o.jsxs)(H,{highlighted:0===t,children:[(0,o.jsx)(ea,{children:0===t?"A":"B"}),eL[t].map(e=>{let r=`${t}-${e}`,a=eA.get(r)??0,n=eF.get(r)??0,i=eT===r,s=eS===r;return(0,o.jsxs)(D,{size:e8,rotDeg:a,correct:i,wrong:s,style:{animationDelay:`${n}s`},onClick:()=>e6(e,t),children:[e4[e%e4.length],i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(W,{x:10,y:10,delay:0,children:"✨"}),(0,o.jsx)(W,{x:80,y:20,delay:.1,children:"✨"}),(0,o.jsx)(W,{x:20,y:80,delay:.15,children:"✨"}),(0,o.jsx)(W,{x:75,y:75,delay:.2,children:"✨"})]})]},r)}),eR&&0===t&&(0,o.jsxs)(q,{children:["+",100+Math.ceil(2*e$)]})]},`card-${t}-${$}`)]}))}),"correct"===r&&(0,o.jsxs)(N,{children:[(0,o.jsx)(V,{children:"\uD83C\uDF89"}),(0,o.jsx)(G,{color:"#3fb950",children:ej}),em.map((e,t)=>(0,o.jsx)(Y,{left:10+15*t,delay:.08*t,color:e,children:["\uD83C\uDF8A","⭐","\uD83C\uDF1F","\uD83D\uDCAB","✨","\uD83C\uDF89"][t]},t))]})]})})}},2838(e,t,r){r.d(t,{z:()=>eb});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(5782);let d="ABCDEFGHIJLMNOPRSTUVZ",p="ABCDEFGHIJKLMNOPRSTUVWYZ",u=[0,60,90,120],m=[{id:"cities",icon:"\uD83C\uDFD9️",label:{pt:"Cidades",en:"Cities"}},{id:"countries",icon:"\uD83C\uDF0D",label:{pt:"Pa\xedses",en:"Countries"}},{id:"animals",icon:"\uD83D\uDC3E",label:{pt:"Animais",en:"Animals"}},{id:"fruits",icon:"\uD83C\uDF4E",label:{pt:"Frutas",en:"Fruits"}},{id:"movies",icon:"\uD83C\uDFAC",label:{pt:"Filmes",en:"Movies"}},{id:"tvshows",icon:"\uD83D\uDCFA",label:{pt:"S\xe9ries",en:"TV Shows"}},{id:"brands",icon:"\uD83C\uDFF7️",label:{pt:"Marcas",en:"Brands"}},{id:"sports",icon:"⚽",label:{pt:"Desportos",en:"Sports"}},{id:"musicians",icon:"\uD83C\uDFB5",label:{pt:"M\xfasicos",en:"Musicians"}},{id:"books",icon:"\uD83D\uDCDA",label:{pt:"Livros",en:"Books"}},{id:"names",icon:"\uD83E\uDDD1",label:{pt:"Nomes",en:"Names"}},{id:"foods",icon:"\uD83C\uDF7D️",label:{pt:"Comidas",en:"Foods"}},{id:"history",icon:"\uD83C\uDFDB️",label:{pt:"Hist\xf3ria",en:"History"}},{id:"jobs",icon:"\uD83D\uDCBC",label:{pt:"Profiss\xf5es",en:"Jobs"}},{id:"colors",icon:"\uD83C\uDFA8",label:{pt:"Cores",en:"Colors"}},{id:"flowers",icon:"\uD83C\uDF3A",label:{pt:"Flores",en:"Flowers"}}],h={cities:{A:{pt:["Aveiro","Almada","Amadora","Albufeira"],en:["Amsterdam","Athens","Atlanta","Auckland"]},B:{pt:["Braga","Beja","Bragan\xe7a","Barcelos"],en:["Berlin","Boston","Barcelona","Brussels"]},C:{pt:["Coimbra","Cascais","Covilh\xe3","Chaves"],en:["Chicago","Cairo","Cologne","Calgary"]},D:{pt:["Dourinho","Douro","\xc9vora (n\xe3o)"],en:["Dubai","Dublin","Denver","Damascus"]},E:{pt:["\xc9vora","Elvas","Espinho"],en:["Edinburgh","Essex","El Paso","Exeter"]},F:{pt:["Faro","Funchal","Figueira da Foz","Felgueiras"],en:["Florence","Frankfurt","Fukuoka","Fresno"]},G:{pt:["Guimar\xe3es","Guarda","Gondomar","Gr\xe2ndola"],en:["Geneva","Glasgow","Guangzhou","Guadalajara"]},H:{pt:["Horta","Hungria (n\xe3o)"],en:["Hamburg","Havana","Helsinki","Houston"]},I:{pt:["\xcdlhavo","Idanha-a-Nova"],en:["Istanbul","Indianapolis","Islamabad","Izmir"]},J:{pt:["Joane","Juromenha"],en:["Jakarta","Jerusalem","Johannesburg","Jacksonville"]},L:{pt:["Lisboa","Leiria","Loures","Lagos"],en:["London","Los Angeles","Lima","Lisbon"]},M:{pt:["Matosinhos","Montijo","Miranda do Douro","Moura"],en:["Madrid","Milan","Melbourne","Moscow"]},N:{pt:["Nazar\xe9","Nisa","Nordeste"],en:["New York","Naples","Nairobi","Nashville"]},O:{pt:["Odivelas","Ovar","\xd3bidos","Olh\xe3o"],en:["Oslo","Ottawa","Oxford","Orlando"]},P:{pt:["Porto","Portim\xe3o","Ponte de Lima","P\xf3voa de Varzim"],en:["Paris","Prague","Porto","Pretoria"]},R:{pt:["R\xe9gua","Rio Maior","Reguengos","Resende"],en:["Rome","Rio de Janeiro","Rotterdam","Rabat"]},S:{pt:["Set\xfabal","Sintra","Santar\xe9m","Sines"],en:["Sydney","Stockholm","Seoul","Seville"]},T:{pt:["Torres Vedras","Tomar","Tavira","Trofa"],en:["Tokyo","Toronto","Tehran","Tunis"]},V:{pt:["Viseu","Viana do Castelo","Vila Nova de Gaia","Valongo"],en:["Vienna","Vancouver","Venice","Vilnius"]}},countries:{A:{pt:["Alemanha","Angola","Argentina","Austr\xe1lia"],en:["Argentina","Australia","Austria","Angola"]},B:{pt:["Brasil","B\xe9lgica","Bulg\xe1ria","Bol\xedvia"],en:["Brazil","Belgium","Bulgaria","Bolivia"]},C:{pt:["China","Col\xf4mbia","Cuba","Chile"],en:["China","Colombia","Cuba","Chile"]},D:{pt:["Dinamarca","Djibuti"],en:["Denmark","Dominican Republic","Djibouti"]},E:{pt:["Espanha","Egipto","Eti\xf3pia","Equador"],en:["Egypt","Ethiopia","Ecuador","Estonia"]},F:{pt:["Fran\xe7a","Finl\xe2ndia","Filipinas","Fiji"],en:["France","Finland","Philippines","Fiji"]},G:{pt:["Gr\xe9cia","Guatemala","Gana","Guin\xe9"],en:["Greece","Guatemala","Ghana","Germany"]},H:{pt:["Hungria","Honduras","Haiti"],en:["Hungary","Honduras","Haiti","Holland"]},I:{pt:["It\xe1lia","\xcdndia","Irlanda","Isl\xe2ndia"],en:["Italy","India","Ireland","Iceland"]},J:{pt:["Jap\xe3o","Jord\xe2nia","Jamaica"],en:["Japan","Jordan","Jamaica"]},L:{pt:["L\xedbia","L\xedbano","Let\xf3nia","Lesoto"],en:["Libya","Lebanon","Latvia","Lesotho"]},M:{pt:["M\xe9xico","Marrocos","Mo\xe7ambique","Madagascar"],en:["Mexico","Morocco","Mozambique","Malaysia"]},N:{pt:["Noruega","Nepal","Nig\xe9ria","Nicar\xe1gua"],en:["Norway","Nepal","Nigeria","Nicaragua"]},O:{pt:["Om\xe3"],en:["Oman"]},P:{pt:["Portugal","Peru","Paquist\xe3o","Pol\xf3nia"],en:["Portugal","Peru","Pakistan","Poland"]},R:{pt:["Rom\xe9nia","R\xfassia","Ruanda"],en:["Romania","Russia","Rwanda"]},S:{pt:["Su\xe9cia","Su\xed\xe7a","S\xe9rvia","S\xedria"],en:["Sweden","Switzerland","Serbia","Spain"]},T:{pt:["Turquia","Tun\xedsia","Tanz\xe2nia","Tail\xe2ndia"],en:["Turkey","Tunisia","Tanzania","Thailand"]},V:{pt:["Venezuela","Vietname"],en:["Venezuela","Vietnam"]}},animals:{A:{pt:["Abelha","\xc1guia","Ant\xedlope","Aranha"],en:["Antelope","Alligator","Ape","Albatross"]},B:{pt:["Baleia","Borboleta","Burro","B\xfafalo"],en:["Bear","Buffalo","Butterfly","Baboon"]},C:{pt:["Cavalo","Coelho","Crocodilo","Camelo"],en:["Cat","Crocodile","Camel","Cobra"]},D:{pt:["Delfim","Drag\xe3o","Dromed\xe1rio"],en:["Dolphin","Dog","Donkey","Deer"]},E:{pt:["Elefante","Esquilo","Escorpi\xe3o"],en:["Elephant","Eagle","Eel","Elk"]},F:{pt:["Falc\xe3o","Flamingo","Formiga","Foca"],en:["Fox","Flamingo","Frog","Falcon"]},G:{pt:["Girafa","Gorila","Gato","Gavi\xe3o"],en:["Giraffe","Gorilla","Guppy","Gazelle"]},H:{pt:["Hipop\xf3tamo","Hiena"],en:["Hippo","Hyena","Hare","Hawk"]},I:{pt:["Iguana","\xcdbis"],en:["Iguana","Ibis","Impala"]},J:{pt:["Javali","Jaguar","Jerboa"],en:["Jaguar","Jellyfish","Jackal"]},L:{pt:["Le\xe3o","Lobo","Lagarto","Lince"],en:["Lion","Lizard","Leopard","Lynx"]},M:{pt:["Macaco","Morcego","Mocho","Morsa"],en:["Monkey","Moose","Mouse","Meerkat"]},N:{pt:["Narval","Nand\xfa"],en:["Narwhal","Newt","Nightingale"]},O:{pt:["Ouri\xe7o","Orangotango","Ovelha","Orca"],en:["Owl","Octopus","Otter","Orangutan"]},P:{pt:["Panda","Pinguim","Pato","Papagaio"],en:["Panda","Penguin","Parrot","Panther"]},R:{pt:["Rato","Rinoceronte","Raposa","Rouxinol"],en:["Rabbit","Rhinoceros","Raccoon","Robin"]},S:{pt:["Sapo","Serpente","Sardinha","Salamandra"],en:["Snake","Shark","Salmon","Squirrel"]},T:{pt:["Tigre","Tartaruga","Texugo","Tubar\xe3o"],en:["Tiger","Turtle","Toad","Toucan"]},V:{pt:["Vaca","Veado","Vespa"],en:["Vulture","Viper","Vole"]}},fruits:{A:{pt:["Abacate","Abacaxi","Amora","Ameixa"],en:["Apple","Avocado","Apricot","Acai"]},B:{pt:["Banana","Blueberry","Bergamota"],en:["Banana","Blueberry","Blackberry","Boysenberry"]},C:{pt:["Cereja","Coco","Carambola","Caqui"],en:["Cherry","Coconut","Clementine","Cranberry"]},D:{pt:["Damasco","Durian"],en:["Date","Dragonfruit","Durian"]},E:{pt:["Eirado","Escaramu\xe7a"],en:["Elderberry"]},F:{pt:["Figo","Framboesa","Feijoa"],en:["Fig","Feijoa"]},G:{pt:["Goiaba","Groselha","Granadilha"],en:["Grape","Guava","Grapefruit","Gooseberry"]},H:{pt:["Higo"],en:["Honeydew","Huckleberry"]},I:{pt:["Imb\xfa"],en:["Imbe"]},J:{pt:["Jaca","Jabuticaba"],en:["Jackfruit","Jujube"]},L:{pt:["Laranja","Lim\xe3o","Lima","Lichias"],en:["Lemon","Lime","Lychee","Lingonberry"]},M:{pt:["Ma\xe7\xe3","Manga","Mel\xe3o","Melancia"],en:["Mango","Melon","Mulberry","Mandarin"]},N:{pt:["Nectarina","N\xeaspera"],en:["Nectarine","Nance"]},O:{pt:["Oliveira"],en:["Orange","Olive"]},P:{pt:["P\xeara","P\xeassego","Papaia","Pitaia"],en:["Peach","Pear","Pineapple","Papaya"]},R:{pt:["Rom\xe3","Rambutan"],en:["Raspberry","Rambutan"]},S:{pt:["Saboticaba","Sapota"],en:["Strawberry","Star fruit","Soursop"]},T:{pt:["Tamarindo","Tomate","Tangerina"],en:["Tamarind","Tangerine","Tomato"]},V:{pt:["Uva (n\xe3o)"],en:["Vanilla bean"]}},names:{A:{pt:["Ana","Ant\xf3nio","Andr\xe9","Alice"],en:["Anna","Andrew","Alice","Adam"]},B:{pt:["Beatriz","Bruno","Bruna","Bernardo"],en:["Benjamin","Bella","Brian","Beatrice"]},C:{pt:["Carlos","Carolina","Catarina","Clara"],en:["Carlos","Catherine","Clara","Christopher"]},D:{pt:["David","Diana","Diogo","Daniel"],en:["David","Diana","Daniel","Daisy"]},E:{pt:["Eduardo","Eva","Elisa","Em\xedlia"],en:["Edward","Emma","Emily","Ethan"]},F:{pt:["Filipa","Francisco","Fernanda","F\xe1bio"],en:["Frank","Frances","Felix","Fiona"]},G:{pt:["Gon\xe7alo","Gabriela","Guida","Gil"],en:["George","Grace","Gabriel","Gabrielle"]},H:{pt:["Henrique","Helena","Hugo"],en:["Henry","Hannah","Harry","Helen"]},I:{pt:["In\xeas","Isabel","Igor"],en:["Isabelle","Ivan","Irene","Iris"]},J:{pt:["Jo\xe3o","Jorge","Joana","Juliana"],en:["James","Julia","John","Jessica"]},L:{pt:["Lu\xeds","Laura","Leonardo","Leonor"],en:["Lucas","Laura","Leonardo","Lily"]},M:{pt:["Maria","Miguel","Marta","Manuel"],en:["Matthew","Maria","Mia","Michael"]},N:{pt:["Nuno","Nat\xe1lia","Natacha"],en:["Noah","Natalie","Nicholas","Nina"]},O:{pt:["Olga","\xd3scar"],en:["Oliver","Olivia","Oscar"]},P:{pt:["Pedro","Paula","Paulo","Patr\xedcia"],en:["Peter","Patricia","Paul","Penelope"]},R:{pt:["Ricardo","Rita","Rodrigo","Rosa"],en:["Richard","Rachel","Robert","Rebecca"]},S:{pt:["Sara","Sofia","S\xe9rgio","Susana"],en:["Samuel","Sarah","Sophia","Simon"]},T:{pt:["Tiago","Teresa","Tom\xe1s","Tatiana"],en:["Thomas","Tessa","Timothy","Tina"]},V:{pt:["Vera","V\xedtor","Valentina"],en:["Victor","Valentina","Victoria"]}},foods:{A:{pt:["Arroz","Atum","Azeitonas","Alho"],en:["Apple pie","Avocado toast","Asparagus","Almond"]},B:{pt:["Bacalhau","Bifes","Batatas","Broa"],en:["Bacon","Bagel","Biscuit","Brownie"]},C:{pt:["Caldo verde","Chouri\xe7o","Cenoura","Cebola"],en:["Cake","Carrot","Cheese","Croissant"]},D:{pt:["Doce de leite","Dobrada"],en:["Doughnut","Dumpling","Dal"]},E:{pt:["Espetada","Enchidos","Esparguete"],en:["Egg","Enchilada","Eggplant"]},F:{pt:["Frango","Feij\xe3o","Farinha","Francesinha"],en:["Fish","Fries","Falafel","Fondue"]},G:{pt:["Gr\xe3o","Gelado","Ginja"],en:["Grilled chicken","Guacamole","Gelato","Granola"]},H:{pt:["Hamb\xfarguer","Hotdog"],en:["Hamburger","Hotdog","Hummus","Honey"]},I:{pt:["Iogurte"],en:["Ice cream","Iced tea"]},J:{pt:["Jantar","Jardineira"],en:["Jam","Jelly","Jalape\xf1o"]},L:{pt:["Lingui\xe7a","Lentilhas","Laranja"],en:["Lasagna","Lentil soup","Lemon tart"]},M:{pt:["Massa","Migas","Mel","Manteiga"],en:["Mango sorbet","Meatball","Mushroom","Moussaka"]},N:{pt:["Natas","Nozes"],en:["Noodles","Nachos","Nut butter"]},O:{pt:["Ovos","Omeleta"],en:["Omelette","Oyster","Oatmeal"]},P:{pt:["P\xe3o","Peixe","Pizza","Pudim"],en:["Pizza","Pancake","Pasta","Pudding"]},R:{pt:["Risotto","Rissol","Robalo"],en:["Rice","Risotto","Ramen","Roast beef"]},S:{pt:["Sopa","Sardinha","Salada"],en:["Salad","Sandwich","Sushi","Soup"]},T:{pt:["Tosta","Tremo\xe7os","Tarte"],en:["Tacos","Tofu","Tomato soup","Toast"]},V:{pt:["Vitela","Vinagrete"],en:["Vegetable stir fry","Vanilla pudding","Veal"]}},colors:{A:{pt:["Amarelo","Azul","Anil","\xc2mbar"],en:["Amber","Azure","Aquamarine"]},B:{pt:["Branco","Bord\xf4","Bege"],en:["Blue","Black","Brown","Beige"]},C:{pt:["Castanho","Carmim","Ciano","Coral"],en:["Crimson","Cyan","Coral","Cream"]},D:{pt:["Dourado"],en:["Dark blue","Denim"]},E:{pt:["Esmeralda","Escarlate"],en:["Emerald","Electric blue"]},F:{pt:["Fucsia","Ferrugem","Flamingo"],en:["Fuchsia","Flamingo pink","Forest green"]},G:{pt:["Grafite","Gelo"],en:["Gold","Green","Gray"]},H:{pt:["H\xfamido (n\xe3o)"],en:["Hot pink","Honey yellow"]},I:{pt:["\xcdndigo","Ivory"],en:["Indigo","Ivory"]},J:{pt:["Jade"],en:["Jade","Jasmine"]},L:{pt:["Laranja","Lavanda","Lil\xe1s","Lim\xe3o"],en:["Lavender","Lime green","Lilac"]},M:{pt:["Magenta","Marrom","Malva"],en:["Magenta","Maroon","Mauve","Mint"]},N:{pt:["Negro","Nata"],en:["Navy blue","Neon green"]},O:{pt:["Ocre","Oliveira"],en:["Orange","Olive","Ochre"]},P:{pt:["Preto","Prata","Rosa","P\xfarpura"],en:["Purple","Pink","Peach","Platinum"]},R:{pt:["Roxo","Rubi","Rosa"],en:["Red","Ruby","Rose"]},S:{pt:["Salm\xe3o","S\xe9pia"],en:["Salmon","Sapphire","Scarlet","Silver"]},T:{pt:["Turquesa","Terra"],en:["Turquoise","Teal","Tan"]},V:{pt:["Verde","Violeta","Vermelho"],en:["Violet","Viridian"]}},sports:{A:{pt:["Atletismo","Andebol","Aer\xf3bica","Aikido"],en:["Athletics","Archery","American football","Aerobics"]},B:{pt:["Basquetebol","Boxe","Badminton","Baseball"],en:["Basketball","Boxing","Badminton","Baseball"]},C:{pt:["Ciclismo","Corrida","Cricket","Canoagem"],en:["Cycling","Cricket","Climbing","Canoeing"]},D:{pt:["Dan\xe7a","Dart","Dodgeball"],en:["Diving","Darts","Dodgeball"]},E:{pt:["Equita\xe7\xe3o","Esgrima"],en:["Equestrian","Fencing (esgrima em EN \xe9 Fencing)"]},F:{pt:["Futebol","Futsal","F\xf3rmula 1","Fisiculturismo"],en:["Football","Futsal","Formula 1"]},G:{pt:["Gin\xe1stica","Golfe","Gateball"],en:["Golf","Gymnastics","Go-karting"]},H:{pt:["H\xf3quei","Halterofilia","H\xedpica"],en:["Hockey","Handball","Hurdles"]},I:{pt:["Ioga"],en:["Ice hockey","Ice skating"]},J:{pt:["Judo","Jet ski"],en:["Judo","Javelin","Jet skiing"]},L:{pt:["Luta livre","Lacrosse"],en:["Lacrosse","Long jump"]},M:{pt:["Maratona","Mergulho","MMA"],en:["Marathon","Mixed martial arts","Motocross"]},N:{pt:["Nata\xe7\xe3o","Netball"],en:["Swimming (Nata\xe7\xe3o em PT)","Netball"]},O:{pt:["Orienta\xe7\xe3o"],en:["Orienteering","Olympic weightlifting"]},P:{pt:["Padel","Polo","Patinagem","Pesca desportiva"],en:["Padel","Polo","Parkour","Pentathlon"]},R:{pt:["Rugby","Remo","Raquetebol"],en:["Rugby","Rowing","Racquetball"]},S:{pt:["Surf","Squash","Ski"],en:["Swimming","Surfing","Squash","Skiing"]},T:{pt:["T\xe9nis","Taekwondo","Tiro ao alvo"],en:["Tennis","Taekwondo","Triathlon"]},V:{pt:["Voleibol","Vela","Voo livre"],en:["Volleyball","Volleyball (beach)"]}},brands:{A:{pt:["Apple","Adidas","Amazon","Audi"],en:["Apple","Adidas","Amazon","Audi"]},B:{pt:["BMW","Bose","Burger King","Boss"],en:["BMW","Bose","Burger King","Boss"]},C:{pt:["Coca-Cola","Calvin Klein","Chanel","Canon"],en:["Coca-Cola","Calvin Klein","Chanel","Canon"]},D:{pt:["Disney","Dell","Dyson"],en:["Disney","Dell","Dyson","Dove"]},E:{pt:["Emirates","Epson"],en:["Emirates","Epson","Est\xe9e Lauder"]},F:{pt:["Ferrari","Ford","Facebook","Fender"],en:["Ferrari","Ford","Facebook","Fender"]},G:{pt:["Google","Gucci","Gillette"],en:["Google","Gucci","Gillette"]},H:{pt:["H&M","Honda","Heineken"],en:["H&M","Honda","Heineken","Hugo Boss"]},I:{pt:["IKEA","Intel"],en:["IKEA","Intel","Instagram"]},J:{pt:["Jeep","Jimmy Choo"],en:["Jeep","Jimmy Choo","Jordan"]},L:{pt:["Lego","Louis Vuitton","Levi's"],en:["Lego","Louis Vuitton","Levi's"]},M:{pt:["McDonald's","Microsoft","Mercedes","Mazda"],en:["McDonald's","Microsoft","Mercedes","Mazda"]},N:{pt:["Nike","Netflix","Nestl\xe9","Nintendo"],en:["Nike","Netflix","Nestl\xe9","Nintendo"]},O:{pt:["Omega","Oracle"],en:["Omega","Oracle","Old Spice"]},P:{pt:["Puma","Prada","PlayStation","Peugeot"],en:["Puma","Prada","PlayStation","Peugeot"]},R:{pt:["Ray-Ban","Rolex","Renault"],en:["Ray-Ban","Rolex","Renault","Red Bull"]},S:{pt:["Samsung","Sony","Spotify","Skype"],en:["Samsung","Sony","Spotify","Snapchat"]},T:{pt:["Toyota","Twitter","TikTok","Tesla"],en:["Toyota","Twitter","TikTok","Tesla"]},V:{pt:["Versace","Volkswagen","Visa"],en:["Versace","Volkswagen","Visa"]}},movies:{A:{pt:["Avatar","Aladdim","Amor Infinito"],en:["Avatar","Aladdin","Avengers"]},B:{pt:["Bambi","Batman"],en:["Bambi","Batman","Bohemian Rhapsody"]},C:{pt:["Cenicienta","Coco","Cars"],en:["Coco","Cars","Cinderella","Casino Royale"]},D:{pt:["Divertida Mente","Dumbo"],en:["Dune","Dunkirk"]},E:{pt:["Encanto","Elfen Lied"],en:["Encanto","Elf","Eternal Sunshine"]},F:{pt:["Frozen","Fantasia"],en:["Frozen","Finding Nemo"]},G:{pt:["Gladiador","Godzilla"],en:["Gladiator","Godzilla","Grease"]},H:{pt:["Homem-Aranha","Hercules"],en:["Harry Potter","Hercules","Home Alone"]},I:{pt:["Intoc\xe1veis","Inside Out"],en:["Inception","Inside Out","Interstellar"]},J:{pt:["Jurassic Park"],en:["Jaws","Jurassic Park","Joker"]},L:{pt:["A Bela e o Monstro","Luca"],en:["Lion King","Luca","La La Land"]},M:{pt:["Moana","Mulan","Monstros SA"],en:["Moana","Mulan","Monsters Inc"]},N:{pt:["Nemo","Noiva Cad\xe1ver"],en:["Nemo","Nightmare before Christmas"]},O:{pt:["O Rei Le\xe3o","O Espanta Tubar\xf5es"],en:["Onward","Oz"]},P:{pt:["Procurando Nemo","Pin\xf3quio"],en:["Pinocchio","Paddington"]},R:{pt:["Ratatouille","Robots"],en:["Ratatouille","Rocky"]},S:{pt:["Soul","Shrek","Star Wars"],en:["Soul","Shrek","Star Wars"]},T:{pt:["Toy Story","Tangled","Titanic"],en:["Toy Story","Titanic","Tangled"]},V:{pt:["Vida de Inseto","Valente"],en:["Venom","Vampirina"]}},tvshows:{A:{pt:["A Casa de Papel","At\xedpico"],en:["Avatar: The Last Airbender","Arcane"]},B:{pt:["Bluey","Bob Esponja"],en:["Bluey","Breaking Bad","Brooklyn Nine-Nine"]},C:{pt:["Cocomelon","Cidade dos Sonhos"],en:["Cocomelon","Caillou"]},D:{pt:["Detetive Conan","Digimon"],en:["Dora the Explorer","Digimon","Dexter"]},E:{pt:["Emily em Paris"],en:["Emily in Paris"]},F:{pt:["Friends","Flintstones"],en:["Friends","Family Guy"]},G:{pt:["Gravity Falls"],en:["Gravity Falls","Game of Thrones"]},H:{pt:["Heidi","Hora de Aventura"],en:["Hazbin Hotel","Hilda","How I Met Your Mother"]},I:{pt:["Inspector Gadget"],en:["Inside Job","iCarly"]},J:{pt:["Jorge o Curioso"],en:["Jimmy Neutron","Jeopardy"]},L:{pt:["La Casa de Papel","Lupin"],en:["Loki","Lucifer"]},M:{pt:["Miraculous","Mans\xe3o Foster"],en:["Miraculous","Monster High"]},N:{pt:["Naruto","Ninjago"],en:["Naruto","Never Have I Ever"]},O:{pt:["Os Simpsons","O Ursinho Pooh"],en:["The Office","Only Murders in the Building"]},P:{pt:["Peppa Pig","Patrulha Pata"],en:["Peppa Pig","Paw Patrol"]},R:{pt:["Rapunzel","Round 6"],en:["Rugrats","Recess"]},S:{pt:["Stranger Things","SpongeBob"],en:["Stranger Things","SpongeBob","Scrubs"]},T:{pt:["Turma da M\xf4nica","The Walking Dead"],en:["The Simpsons","Ted Lasso"]}},musicians:{A:{pt:["ABBA","Adele","Arctic Monkeys"],en:["ABBA","Adele","Arctic Monkeys"]},B:{pt:["Beatles","Beyonc\xe9","Bruno Mars"],en:["Beatles","Beyonc\xe9","Bruno Mars"]},C:{pt:["Coldplay","Cristiano Ara\xfajo"],en:["Coldplay","Chris Brown","Cardi B"]},D:{pt:["David Bowie","Drake"],en:["David Bowie","Drake"]},E:{pt:["Ed Sheeran","Elvis"],en:["Ed Sheeran","Elvis Presley","Eminem"]},F:{pt:["Foo Fighters","Fado (n\xe3o \xe9 m\xfasico)"],en:["Foo Fighters","Frank Sinatra","Freddie Mercury"]},G:{pt:["Guns N' Roses","Gloria Gaynor"],en:["Guns N' Roses","Green Day"]},H:{pt:["Harry Styles"],en:["Harry Styles","Halsey"]},I:{pt:["Iron Maiden"],en:["Iron Maiden","Imagine Dragons"]},J:{pt:["Joana Amendoeira","Justin Bieber"],en:["Justin Bieber","Jay-Z","John Legend"]},L:{pt:["Lady Gaga","Lorde"],en:["Lady Gaga","Lorde","Lewis Capaldi"]},M:{pt:["Michael Jackson","Madonna","Maroon 5"],en:["Michael Jackson","Madonna","Maroon 5"]},N:{pt:["Nirvana"],en:["Nirvana","Nicki Minaj"]},O:{pt:["One Direction"],en:["One Direction","Olivia Rodrigo"]},P:{pt:["Pink Floyd","Post Malone"],en:["Pink Floyd","Post Malone"]},R:{pt:["Rihanna","Red Hot Chili Peppers"],en:["Rihanna","Red Hot Chili Peppers"]},S:{pt:["Shakira","Selena Gomez","Sam Smith"],en:["Shakira","Selena Gomez","Sam Smith"]},T:{pt:["Taylor Swift","The Weeknd"],en:["Taylor Swift","The Weeknd"]},V:{pt:["Vivaldi"],en:["Vance Joy","Vampire Weekend"]}},books:{A:{pt:["Alice no Pa\xeds das Maravilhas","O Alquimista"],en:["Alice in Wonderland","Animal Farm"]},B:{pt:["Bambi (livro)","B\xedblia"],en:["Bambi","Billy Budd"]},C:{pt:["Cinderela","Charlie e a F\xe1brica de Chocolate"],en:["Charlie and the Chocolate Factory","Cinderella"]},D:{pt:["Dom Quixote","Di\xe1rio de um Banana"],en:["David Copperfield","Diary of a Wimpy Kid"]},E:{pt:["Eragon","O Estrangeiro"],en:["Eragon","Emma"]},F:{pt:["Fadas e Magia (n\xe3o real)"],en:["Frankenstein","Fantastic Mr Fox"]},G:{pt:["O Grande Gatsby","Gulliver"],en:["The Great Gatsby","Gulliver's Travels"]},H:{pt:["Harry Potter","Hamlet"],en:["Harry Potter","Hamlet","Hunger Games"]},I:{pt:["Il\xedada"],en:["Iliad","It (Stephen King)"]},J:{pt:["O Jogo do Imortais"],en:["Jane Eyre","Julius Caesar"]},L:{pt:["O Livro da Selva","O Le\xe3o a Feiticeira e o Guarda-Roupa"],en:["The Lion, the Witch and the Wardrobe","Little Women"]},M:{pt:["Moby Dick","Mafalda"],en:["Moby Dick","Matilda"]},N:{pt:["Narnia (s\xe9rie)"],en:["Narnia Chronicles"]},O:{pt:["Odisseia","Os Lus\xedadas"],en:["Odyssey","Oliver Twist"]},P:{pt:["Pequeno Pr\xedncipe","Peter Pan","Pin\xf3quio"],en:["The Little Prince","Peter Pan","Pinocchio"]},R:{pt:["Robinson Crusoe","Romeo e Julieta"],en:["Robinson Crusoe","Romeo and Juliet"]},S:{pt:["O Senhor dos An\xe9is","O Sol tamb\xe9m se Levanta"],en:["The Lord of the Rings","Sherlock Holmes"]},T:{pt:["Tom Sawyer","Tr\xeas Mosqueteiros"],en:["Tom Sawyer","The Three Musketeers"]},V:{pt:["Viagem ao Centro da Terra","Vinte Mil L\xe9guas"],en:["Voyage to the Center of the Earth","20,000 Leagues Under the Sea"]}},history:{A:{pt:["Alexandre o Grande","Afonso Henriques"],en:["Alexander the Great","American Revolution"]},B:{pt:["Batalha de Aljubarrota","Bartolomeu Dias"],en:["Battle of Waterloo","Black Death"]},C:{pt:["Crist\xf3v\xe3o Colombo","Cle\xf3patra"],en:["Christopher Columbus","Cleopatra","Crusades"]},D:{pt:["Dom Sebasti\xe3o","Descobrimentos"],en:["Da Vinci","Dark Ages"]},E:{pt:["Eg\xedpcios","Escravid\xe3o"],en:["Egyptian Empire","Enlightenment"]},F:{pt:["Fernando Magalh\xe3es","Feudalismo"],en:["French Revolution","Feudalism"]},G:{pt:["Gengis Khan","Gregos"],en:["Genghis Khan","Greeks"]},H:{pt:["Hitler","Hannibal"],en:["Hitler","Hannibal"]},I:{pt:["Imp\xe9rio Romano","Inquisi\xe7\xe3o"],en:["Industrial Revolution","Inquisition"]},J:{pt:["J\xfalio C\xe9sar"],en:["Julius Caesar"]},L:{pt:["Lu\xeds XIV","Lus\xedadas"],en:["Louis XIV","Lewis and Clark"]},M:{pt:["Marco Polo","Mundo Antigo"],en:["Marco Polo","Middle Ages"]},N:{pt:["Napole\xe3o"],en:["Napoleon","Norman Conquest"]},O:{pt:["Otomanos"],en:["Ottoman Empire"]},P:{pt:["Pombal","Portugueses (descobertas)"],en:["Pharaohs","Peloponnesian War"]},R:{pt:["Revolu\xe7\xe3o Francesa","Roma"],en:["Renaissance","Roman Empire"]},S:{pt:["Salazar","Segunda Guerra Mundial"],en:["Second World War","Spartans"]},T:{pt:["Tratado de Tordesilhas","Templ\xe1rios"],en:["Trojan War","Treaty of Versailles"]}},jobs:{A:{pt:["Advogado","Arquiteto","Astronauta","Agricultor"],en:["Architect","Astronaut","Actor","Accountant"]},B:{pt:["Bombeiro","Bi\xf3logo","Barbeiro"],en:["Baker","Biologist","Builder"]},C:{pt:["Cozinheiro","Carpinteiro","Cientista","Cantor"],en:["Chef","Carpenter","Chemist","Conductor"]},D:{pt:["Dentista","Designer","Detetive"],en:["Dentist","Designer","Doctor","Detective"]},E:{pt:["Enfermeiro","Engenheiro","Escritor"],en:["Engineer","Electrician","Economist"]},F:{pt:["Fot\xf3grafo","Fisioterapeuta","Farmac\xeautico"],en:["Farmer","Firefighter","Florist"]},G:{pt:["Ge\xf3logo","Gestor"],en:["Geologist","Gardener","General"]},H:{pt:["Historiador","Hacker (\xe9tico)"],en:["Historian","Hairdresser"]},I:{pt:["Inform\xe1tico","Ilustrador"],en:["Illustrator","Inspector"]},J:{pt:["Jornalista","Juiz"],en:["Journalist","Judge"]},L:{pt:["Limpador","Locutor"],en:["Lawyer","Librarian","Locksmith"]},M:{pt:["M\xe9dico","M\xfasico","Mec\xe2nico","Matem\xe1tico"],en:["Mechanic","Musician","Manager","Mathematician"]},N:{pt:["Nutricionista","Nadador-Salvador"],en:["Nurse","Nutritionist"]},O:{pt:["Oftalmologista","Operador"],en:["Optician","Officer"]},P:{pt:["Professor","Piloto","Pintor","Pol\xedcia"],en:["Pilot","Painter","Police officer","Plumber"]},R:{pt:["Rececionista","Redator"],en:["Receptionist","Reporter","Researcher"]},S:{pt:["Soldado","Secret\xe1rio","Soci\xf3logo"],en:["Scientist","Surgeon","Social worker"]},T:{pt:["T\xe9cnico","Tradutor","Terapeuta"],en:["Teacher","Translator","Technician"]},V:{pt:["Veterin\xe1rio","Vendedor"],en:["Veterinarian","Violinist"]}},flowers:{A:{pt:["Azal\xe9ia","A\xe7afr\xe3o","Ant\xfario"],en:["Azalea","Amaryllis","Aster"]},B:{pt:["Beg\xf3nia","Boca-de-Le\xe3o"],en:["Begonia","Bluebell","Buttercup"]},C:{pt:["Cravo","Cris\xe2ntemo","Camomila"],en:["Carnation","Chrysanthemum","Clover"]},D:{pt:["D\xe1lia","Dente-de-Le\xe3o"],en:["Daisy","Daffodil","Dahlia"]},E:{pt:["Espadana"],en:["Echinacea","Elderflower"]},F:{pt:["Freesia","F\xfacsia"],en:["Freesia","Fuchsia","Forget-me-not"]},G:{pt:["Gard\xe9nia","Ger\xe2nio","Girassol"],en:["Gardenia","Geranium","Gladiolus"]},H:{pt:["Hort\xeansia","Heliotropo"],en:["Hydrangea","Hibiscus","Hollyhock"]},I:{pt:["\xcdris"],en:["Iris","Impatiens"]},J:{pt:["Jasmim","Jacinto"],en:["Jasmine","Jonquil"]},L:{pt:["Lavanda","L\xedrio","Loto"],en:["Lavender","Lily","Lotus","Larkspur"]},M:{pt:["Magn\xf3lia","Margarida","Malmequeres"],en:["Magnolia","Marigold","Morning glory"]},N:{pt:["Narciso","Noivinha"],en:["Narcissus","Nasturtium"]},O:{pt:["Orqu\xeddea"],en:["Orchid","Oxeye daisy"]},P:{pt:["Pe\xf4nia","Pet\xfania","Papoila"],en:["Peony","Petunia","Poppy"]},R:{pt:["Rosa","Ran\xfanculo"],en:["Rose","Ranunculus"]},S:{pt:["Sempre-viva","Salva"],en:["Sunflower","Sweet pea","Sage"]},T:{pt:["Tulipa","Thistle"],en:["Tulip","Thistle"]},V:{pt:["Violeta","Verbena"],en:["Violet","Verbena"]}}},g="atlantis:stop:categories",f="atlantis:stop:timer",x={title:{pt:"STOP!",en:"STOP!"},chooseCategories:{pt:"Escolhe as categorias",en:"Choose categories"},selected:{pt:"selecionadas",en:"selected"},minCategories:{pt:"Seleciona pelo menos 3",en:"Select at least 3"},startGame:{pt:"Iniciar Jogo",en:"Start Game"},spinning:{pt:"A sortear a letra...",en:"Drawing a letter..."},got:{pt:"Saiu o",en:"Got"},thinkFast:{pt:"Pensa r\xe1pido!",en:"Think fast!"},timer:{pt:"Temporizador",en:"Timer"},noTimer:{pt:"Sem tempo",en:"No timer"},seconds:{pt:"s",en:"s"},stopBtn:{pt:"\uD83D\uDED1 STOP!",en:"\uD83D\uDED1 STOP!"},suggestions:{pt:"Sugest\xf5es",en:"Suggestions"},showHints:{pt:"\uD83D\uDCA1 Ver sugest\xf5es",en:"\uD83D\uDCA1 Show hints"},hideHints:{pt:"\uD83D\uDCA1 Ocultar sugest\xf5es",en:"\uD83D\uDCA1 Hide hints"},roundOver:{pt:"Ronda terminada!",en:"Round over!"},newLetter:{pt:"\uD83D\uDD00 Nova Letra",en:"\uD83D\uDD00 New Letter"},changeCategories:{pt:"⚙️ Mudar Categorias",en:"⚙️ Change Categories"},roundCount:{pt:"Ronda",en:"Round"},typeAnswer:{pt:"Escreve a resposta...",en:"Type your answer..."},timeUp:{pt:"Tempo esgotado!",en:"Time's up!"},noHints:{pt:"Sem sugest\xf5es para esta letra",en:"No hints for this letter"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Advers\xe1rio",en:"Opponent"},opponentStopped:{pt:"O advers\xe1rio parou!",en:"Opponent stopped!"},opponentLeft:{pt:"O advers\xe1rio saiu.",en:"Opponent left."},waitingAnswers:{pt:"\xc0 espera das respostas…",en:"Waiting for answers…"},rematch:{pt:"Nova ronda",en:"New round"}};function b(e,t){return x[e]["pt"===t?"pt":"en"]}(0,s.keyframes)`
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1) rotate(360deg); }
`;let w=(0,s.keyframes)`
  0%   { transform: scale(0.3); opacity: 0; }
  60%  { transform: scale(1.2); opacity: 1; }
  80%  { transform: scale(0.92); }
  100% { transform: scale(1); }
`,y=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,v=(0,s.keyframes)`
  from { opacity: 0; max-height: 0; transform: translateY(-4px); }
  to   { opacity: 1; max-height: 200px; transform: translateY(0); }
`,$=(0,s.keyframes)`
  0%, 100% { box-shadow: 0 0 0 0 rgba(88, 166, 255, 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(88, 166, 255, 0); }
`,k=(0,s.keyframes)`
  from { background-position: -200% center; }
  to   { background-position: 200% center; }
`,j=i().div`
  min-height: 100%;
  background: radial-gradient(ellipse at top, #0f1624 0%, ${l.w4.colors.mainBg} 70%);
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
`,M=i().h1`
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  background: linear-gradient(135deg, ${l.w4.colors.accent}, #a78bfa, #f472b6);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${k} 3s linear infinite;
  margin-bottom: ${l.w4.spacing.xs};
`,S=i().p`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeMd};
  margin-bottom: ${l.w4.spacing.xl};
  text-align: center;
`,z=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  margin-bottom: ${l.w4.spacing.md};
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,T=i().span`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
`,C=i().span`
  font-weight: 700;
  color: ${({ok:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
`,R=i().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${l.w4.spacing.sm};
  width: 100%;
  max-width: 720px;
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,_=i().button`
  position: relative;
  background: ${({selected:e})=>e?"rgba(88, 166, 255, 0.1)":l.w4.colors.surface};
  border: 2px solid ${({selected:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  min-height: 80px;
  color: ${({selected:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  &:hover {
    border-color: ${l.w4.colors.accent};
    background: rgba(88, 166, 255, 0.05);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`,B=i().span`
  font-size: 1.6rem;
  line-height: 1;
`,I=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
`,A=i().div`
  position: absolute;
  top: 6px;
  right: 8px;
  color: ${l.w4.colors.accent};
  font-size: 0.85rem;
  font-weight: 700;
`,E=i().button`
  margin-top: ${l.w4.spacing.xl};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.xl};
  background: ${({disabled:e})=>e?l.w4.colors.surface:`linear-gradient(135deg, ${l.w4.colors.accent}, #a78bfa)`};
  color: ${({disabled:e})=>e?l.w4.colors.mainTextMuted:"#fff"};
  border: none;
  border-radius: ${l.w4.borderRadius.lg};
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 700;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all ${l.w4.transitions.base};
  opacity: ${({disabled:e})=>e?.5:1};
  min-height: 52px;
  &:hover:not([disabled]) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(88, 166, 255, 0.3);
  }
`,F=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.xl};
  flex: 1;
  padding: ${l.w4.spacing.xxl} 0;
  animation: ${y} 0.3s ease;
`,P=i().div`
  width: clamp(160px, 30vw, 220px);
  height: clamp(160px, 30vw, 220px);
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.3), rgba(167, 139, 250, 0.1));
  border: 3px solid ${l.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${l.w4.colors.mainText};
  box-shadow: 0 0 40px rgba(88, 166, 255, 0.2);
  transition: all ${l.w4.transitions.fast};
  ${({landing:e})=>e&&(0,s.css)`
    transform: scale(1.05);
    box-shadow: 0 0 60px rgba(88, 166, 255, 0.5);
  `}
  ${({landed:e})=>e&&(0,s.css)`
    animation: ${w} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, ${$} 1.5s 0.5s ease infinite;
  `}
`,L=i().p`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeMd};
  text-align: center;
`,O=i().div`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
  color: ${l.w4.colors.accent};
  text-align: center;
  animation: ${w} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`,H=i().div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${y} 0.3s ease;
`,D=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  margin-bottom: ${l.w4.spacing.sm};
`,N=i().div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.2), rgba(167, 139, 250, 0.2));
  border: 2px solid ${l.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: ${l.w4.colors.mainText};
  flex-shrink: 0;
`,V=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,G=i().span`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
`,q=i().button`
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.1)":"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  min-height: 44px;
  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
  }
`,Y=i().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.surface};
  border-radius: 99px;
  overflow: hidden;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: ${({pct:e})=>100*e}%;
    background: ${({pct:e})=>e>.5?"#3fb950":e>.25?"#f0a202":"#f85149"};
    transition: width 1s linear, background 1s ease;
    border-radius: 99px;
  }
`,W=i().span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({pct:e})=>e>.5?"#3fb950":e>.25?"#f0a202":"#f85149"};
  min-width: 36px;
  text-align: right;
`,J=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  animation: ${y} 0.25s ease;
`,X=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,U=i().span`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeMd};
`,K=i().button`
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid rgba(240, 162, 2, 0.4);
  background: rgba(240, 162, 2, 0.08);
  color: #f0a202;
  font-size: ${l.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  white-space: nowrap;
  min-height: 44px;
  &:hover {
    background: rgba(240, 162, 2, 0.15);
    border-color: rgba(240, 162, 2, 0.6);
  }
`,Q=i().input`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeMd};
  font-family: ${l.w4.typography.fontFamily};
  width: 100%;
  min-height: 44px;
  transition: border-color ${l.w4.transitions.base};
  &:focus {
    outline: none;
    border-color: ${l.w4.colors.accent};
  }
  &::placeholder {
    color: ${l.w4.colors.mainTextMuted};
  }
`,Z=i().div`
  overflow: hidden;
  animation: ${v} 0.25s ease forwards;
  background: rgba(240, 162, 2, 0.06);
  border: 1px solid rgba(240, 162, 2, 0.2);
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,ee=i().p`
  font-size: ${l.w4.typography.fontSizeSm};
  color: #f0a202;
  font-weight: 600;
  margin-bottom: ${l.w4.spacing.xs};
`,et=i().ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
  margin: 0;
  padding: 0;
`,er=i().li`
  background: rgba(240, 162, 2, 0.12);
  border: 1px solid rgba(240, 162, 2, 0.25);
  border-radius: 99px;
  padding: 2px 10px;
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainText};
`,eo=i().p`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  font-style: italic;
`,ea=i().button`
  align-self: center;
  margin-top: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.xxl};
  background: linear-gradient(135deg, #f85149, #ff7a6e);
  color: #fff;
  border: none;
  border-radius: ${l.w4.borderRadius.lg};
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 900;
  cursor: pointer;
  letter-spacing: 0.1em;
  transition: all ${l.w4.transitions.base};
  min-height: 52px;
  box-shadow: 0 4px 20px rgba(248, 81, 73, 0.3);
  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 28px rgba(248, 81, 73, 0.5);
  }
  &:active {
    transform: translateY(0) scale(0.98);
  }
`,en=(0,s.keyframes)`
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(248, 81, 73, 0.5); }
  50%      { transform: scale(1.05); box-shadow: 0 0 0 14px rgba(248, 81, 73, 0); }
`,ei=i().button`
  margin-top: ${l.w4.spacing.lg};
  width: clamp(140px, 40vw, 180px);
  height: clamp(140px, 40vw, 180px);
  border-radius: 50%;
  background: linear-gradient(145deg, #ff4040, #e02020);
  border: 4px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  cursor: pointer;
  animation: ${en} 1.2s ease-in-out infinite;
  transition: transform ${l.w4.transitions.fast};
  box-shadow: 0 8px 32px rgba(248, 81, 73, 0.4), inset 0 -4px 12px rgba(0, 0, 0, 0.2);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:active {
    transform: scale(0.9);
    animation: none;
  }
`,es=i().div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${y} 0.3s ease;
`,el=i().div`
  text-align: center;
  margin-bottom: ${l.w4.spacing.md};
`,ec=i().h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 900;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.xs};
`,ed=i().p`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
`,ep=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
`,eu=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
  margin-bottom: ${l.w4.spacing.xs};
`,em=i().div`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${({children:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  font-style: ${({children:e})=>e?"normal":"italic"};
  padding-left: calc(1.6rem + ${l.w4.spacing.sm});
`,eh=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${l.w4.spacing.md};
`,eg=i().button`
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  border-radius: ${l.w4.borderRadius.lg};
  border: ${({variant:e})=>"secondary"===e?`1px solid ${l.w4.colors.border}`:"none"};
  background: ${({variant:e})=>"secondary"===e?l.w4.colors.surface:`linear-gradient(135deg, ${l.w4.colors.accent}, #a78bfa)`};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  min-height: 48px;
  &:hover {
    transform: translateY(-2px);
    ${({variant:e})=>"secondary"!==e&&"box-shadow: 0 8px 20px rgba(88,166,255,0.3);"}
    ${({variant:e})=>"secondary"===e&&`border-color: ${l.w4.colors.accent};`}
  }
`,ef=i().div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  margin-bottom: ${l.w4.spacing.md};
`,ex=i().button`
  padding: 8px 18px;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, color ${l.w4.transitions.base};
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.18)":"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  &:hover { color: ${l.w4.colors.accent}; background: rgba(88, 166, 255, 0.1); }
`;function eb({lang:e,canOnline:t}){let[r,n]=(0,a.useState)("solo"),[i,s]=(0,a.useState)("setup"),[x,w]=(0,a.useState)({}),[y,v]=(0,a.useState)({}),[$,k]=(0,a.useState)(!1),[en]=(0,a.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),ew=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":ev.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),ev.current.sendEvent({type:"host-ack",name:en,playerId:ev.current.room?.playerId??"",players:ev.current.room?.players??[]});break;case"host-ack":ev.current.setConnected(e.name),e.players&&ev.current.setPlayers([...e.players,{id:ev.current.room?.playerId??"",name:en,isHost:!1}]);break;case"player-list":ev.current.setPlayers(e.players);break;case"game-state":{let t=e.payload;if("next-round"===t.action)eB({}),eA({}),eN(!1),w({}),v({}),s("roulette"),eR("spinning");else if("start-round"===t.action)eS(t.letter),ej(t.categories),eF(t.timer),s("playing"),eB({}),eA({}),eN(!1),w({}),v({}),t.timer>0&&(eL(t.timer),eH(!0));else if("stop"===t.action)eq.current&&clearInterval(eq.current),eH(!1),ev.current.sendEvent({type:"game-state",payload:{action:"answers",answers:eJ.current,playerId:ev.current.room?.playerId,playerName:ev.current.room?.playerName}}),s("results"),eG(e=>e+1);else if("answers"===t.action){let e=t.playerId,r=t.playerName,o=t.answers;w(e=>({...e,...o})),v(t=>({...t,[e]:{name:r,answers:o}}))}break}case"player-left":k(!0)}},[en]),ey=(0,c.Ky)({gameId:"stopgame",playerName:en,onEvent:ew}),ev=(0,a.useRef)(ey);ev.current=ey;let e$=(0,c.zj)({gameId:"stopgame",enabled:"online"===r}),[ek,ej]=(0,a.useState)(()=>{try{let e=localStorage.getItem(g);if(e){let t=JSON.parse(e);return Array.isArray(t)?t:[]}}catch{}return["cities","animals","names","fruits","colors"]}),[eM,eS]=(0,a.useState)("A"),[ez,eT]=(0,a.useState)("A"),[eC,eR]=(0,a.useState)("spinning"),[e_,eB]=(0,a.useState)({}),[eI,eA]=(0,a.useState)({}),[eE,eF]=(0,a.useState)(()=>{try{let e=localStorage.getItem(f);if(e){let t=Number(e);return u.includes(t)?t:60}}catch{}return 60}),[eP,eL]=(0,a.useState)(0),[eO,eH]=(0,a.useState)(!1),[eD,eN]=(0,a.useState)(!1),[eV,eG]=(0,a.useState)(0),eq=(0,a.useRef)(null),eY=(0,a.useRef)(null),eW=(0,a.useRef)("pt"===e?d:p),eJ=(0,a.useRef)(e_);eJ.current=e_,(0,a.useEffect)(()=>{eW.current="pt"===e?d:p},[e]),(0,a.useEffect)(()=>{localStorage.setItem(g,JSON.stringify(ek))},[ek]),(0,a.useEffect)(()=>{localStorage.setItem(f,String(eE))},[eE]),(0,a.useEffect)(()=>()=>{eq.current&&clearInterval(eq.current),eY.current&&clearInterval(eY.current)},[]);let eX=(0,a.useCallback)(e=>{ej(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),eU=(0,a.useCallback)(t=>{try{let r=new SpeechSynthesisUtterance(t);r.lang="pt"===e?"pt-PT":"en-US",r.rate=.8,r.pitch=1.2,r.volume=1,window.speechSynthesis.cancel(),window.speechSynthesis.speak(r)}catch{}},[e]),eK=(0,a.useCallback)(()=>{s("roulette"),eR("spinning");let e=eW.current,t=Math.floor(Math.random()*e.length);eY.current&&clearInterval(eY.current),eY.current=setInterval(()=>{t=(t+1)%e.length,eT(e[t])},70),ev.current.room?.role==="host"&&ev.current.sendEvent({type:"game-state",payload:{action:"next-round"}})},[]),eQ=(0,a.useCallback)(()=>{let t;if("spinning"!==eC)return;eY.current&&clearInterval(eY.current);let o=(t="pt"===e?d:p)[Math.floor(Math.random()*t.length)];eS(o),eT(o),eR("landing"),eU(o),setTimeout(()=>{eR("landed"),setTimeout(()=>{s("playing"),eB({}),eA({}),w({}),eN(!1),eE>0&&(eL(eE),eH(!0)),"online"===r&&ev.current.room?.role==="host"&&ev.current.sendEvent({type:"game-state",payload:{action:"start-round",letter:o,categories:ek,timer:eE}})},1500)},400)},[e,eE,eC,eU,r,ek]);(0,a.useEffect)(()=>{if(eO&&0!==eE)return eq.current&&clearInterval(eq.current),eq.current=setInterval(()=>{eL(e=>e<=1?(eq.current&&clearInterval(eq.current),eH(!1),eN(!0),s("results"),0):e-1)},1e3),()=>{eq.current&&clearInterval(eq.current)}},[eO,eE]);let eZ=(0,a.useCallback)(()=>{if(eq.current&&clearInterval(eq.current),eH(!1),s("results"),eG(e=>e+1),"online"===r){ev.current.sendEvent({type:"game-state",payload:{action:"stop"}}),ev.current.sendEvent({type:"game-state",payload:{action:"answers",answers:eJ.current,playerId:ev.current.room?.playerId,playerName:ev.current.room?.playerName}});let e=ev.current.room?.playerId??"",t=ev.current.room?.playerName??"";v(r=>({...r,[e]:{name:t,answers:eJ.current}}))}},[r]),e0=(0,a.useCallback)(()=>{eB({}),eA({}),eN(!1),w({}),v({}),eK()},[eK]),e1=(0,a.useCallback)(()=>{s("setup"),eB({}),eA({}),eN(!1),eq.current&&clearInterval(eq.current),eH(!1)},[]),e4=(0,a.useCallback)(e=>{eA(t=>({...t,[e]:!t[e]}))},[]),e2=m.filter(e=>ek.includes(e.id)),e5=eE>0?eP/eE:1,e3=(0,a.useRef)(null),e6=(0,a.useRef)(!1);return(0,o.jsxs)(j,{children:[(0,o.jsx)(M,{children:b("title",e)}),"setup"===i&&(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsxs)(ef,{children:[(0,o.jsxs)(ex,{active:"solo"===r,onClick:()=>n("solo"),children:["\uD83C\uDFAF ",b("solo",e)]}),(0,o.jsxs)(ex,{active:"online"===r,onClick:()=>n("online"),children:["\uD83C\uDF10 ",b("online",e)]})]}),(0,o.jsx)(S,{children:b("chooseCategories",e)}),(0,o.jsx)(z,{children:(0,o.jsxs)(T,{children:[(0,o.jsx)(C,{ok:ek.length>=3,children:ek.length})," ",b("selected",e),ek.length<3&&(0,o.jsxs)("span",{style:{marginLeft:l.w4.spacing.sm,color:"#f0a202",fontSize:l.w4.typography.fontSizeSm},children:["— ",b("minCategories",e)]})]})}),(0,o.jsx)(R,{children:m.map(t=>{let r=ek.includes(t.id);return(0,o.jsxs)(_,{selected:r,onClick:()=>eX(t.id),type:"button","aria-pressed":r,children:[r&&(0,o.jsx)(A,{children:"✓"}),(0,o.jsx)(B,{children:t.icon}),(0,o.jsx)(I,{children:"pt"===e?t.label.pt:t.label.en})]},t.id)})}),(0,o.jsx)("div",{style:{marginTop:l.w4.spacing.lg,width:"100%",maxWidth:"720px"},children:(0,o.jsxs)(V,{children:[(0,o.jsxs)(G,{children:[b("timer",e),":"]}),u.map(t=>(0,o.jsx)(q,{active:eE===t,onClick:()=>eF(t),type:"button",children:0===t?b("noTimer",e):`${t}${b("seconds",e)}`},t))]})}),(0,o.jsx)(E,{disabled:ek.length<3,onClick:ek.length>=3?"online"===r?()=>s("lobby"):eK:void 0,type:"button",children:b("startGame",e)})]}),"lobby"===i&&(0,o.jsx)("div",{style:{marginTop:l.w4.spacing.lg,width:"100%",maxWidth:400,margin:"0 auto"},children:ey.room?.connected?(0,o.jsxs)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[(0,o.jsx)("p",{style:{color:l.w4.colors.mainTextMuted,fontSize:l.w4.typography.fontSizeMd},children:"host"===ey.room.role?"pt"===e?`${ey.room.players.length} jogadores na sala. Clica para come\xe7ar.`:`${ey.room.players.length} players in room. Click to start.`:"pt"===e?`Ligado! ${ey.room.players.length} jogadores na sala.`:`Connected! ${ey.room.players.length} players in room.`}),(0,o.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:ey.room.players.map(e=>(0,o.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===ey.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===ey.room.role&&(0,o.jsx)(E,{disabled:!1,onClick:eK,type:"button",children:b("startGame",e)})]}):(0,o.jsx)(c.XB,{lang:e,room:ey.room,error:ey.error,availableRooms:e$.rooms,onCreateRoom:()=>{let{code:e,roomName:t}=ey.createRoom();e$.publishRoom({code:e,roomName:t,hostName:en,playerCount:1})},onJoinRoom:e=>ey.joinRoom(e),onLeaveRoom:()=>{e$.unpublishRoom(),ey.leaveRoom(),s("setup")}})}),"roulette"===i&&(0,o.jsxs)(F,{children:[(0,o.jsx)(P,{landing:"landing"===eC,landed:"landed"===eC,children:ez}),"spinning"===eC&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(L,{children:b("spinning",e)}),"online"!==r||ey.room?.role==="host"?(0,o.jsx)(ei,{onTouchStart:e=>{e3.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!e3.current)return;let t=Math.abs(e.changedTouches[0].clientX-e3.current.x),r=Math.abs(e.changedTouches[0].clientY-e3.current.y);e3.current=null,t>8||r>8||(e6.current=!0,eQ())},onClick:()=>{if(e6.current){e6.current=!1;return}eQ()},children:"STOP!"}):(0,o.jsx)(L,{style:{opacity:.7},children:"pt"===e?"A aguardar o anfitri\xe3o…":"Waiting for host…"})]}),("landing"===eC||"landed"===eC)&&(0,o.jsxs)(O,{children:[b("got",e)," ",(0,o.jsxs)("strong",{children:["“",eM,"”"]}),"!",(0,o.jsx)("br",{}),(0,o.jsx)("span",{style:{fontSize:"1rem",fontWeight:400,color:l.w4.colors.mainTextMuted},children:b("thinkFast",e)})]})]}),"playing"===i&&(0,o.jsxs)(H,{children:[(0,o.jsxs)(D,{children:[(0,o.jsx)(N,{children:eM}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{fontSize:l.w4.typography.fontSizeLg,fontWeight:700,color:l.w4.colors.mainText},children:[b("got",e)," “",eM,"”"]}),eV>0&&(0,o.jsxs)("div",{style:{fontSize:l.w4.typography.fontSizeSm,color:l.w4.colors.mainTextMuted},children:[b("roundCount",e)," ",eV+1]})]})]}),eE>0&&(0,o.jsxs)(V,{children:[(0,o.jsx)(Y,{pct:e5}),(0,o.jsxs)(W,{pct:e5,children:[eP,b("seconds",e)]})]}),e2.map(t=>{let r=function(e,t,r){let o=h[e];if(!o)return[];let a=o[t];return a?"pt"===r?a.pt:a.en:[]}(t.id,eM,e),a=eI[t.id]??!1;return(0,o.jsxs)(J,{children:[(0,o.jsxs)(X,{children:[(0,o.jsxs)(U,{children:[(0,o.jsx)("span",{children:t.icon}),"pt"===e?t.label.pt:t.label.en]}),(0,o.jsx)(K,{onClick:()=>e4(t.id),type:"button",children:a?b("hideHints",e):b("showHints",e)})]}),(0,o.jsx)(Q,{value:e_[t.id]??"",onChange:e=>eB(r=>({...r,[t.id]:e.target.value})),placeholder:b("typeAnswer",e),spellCheck:!1,autoCapitalize:"off"}),a&&(0,o.jsxs)(Z,{children:[(0,o.jsx)(ee,{children:b("suggestions",e)}),r.length>0?(0,o.jsx)(et,{children:r.map((e,t)=>(0,o.jsx)(er,{children:e},t))}):(0,o.jsx)(eo,{children:b("noHints",e)})]})]},t.id)}),(0,o.jsx)(ea,{type:"button",onTouchStart:e=>{e3.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!e3.current)return;let t=Math.abs(e.changedTouches[0].clientX-e3.current.x),r=Math.abs(e.changedTouches[0].clientY-e3.current.y);e3.current=null,t>8||r>8||(e6.current=!0,eZ())},onClick:()=>{if(e6.current){e6.current=!1;return}eZ()},children:b("stopBtn",e)})]}),"results"===i&&(0,o.jsxs)(es,{children:[(0,o.jsxs)(el,{children:[(0,o.jsx)(ec,{children:eD?b("timeUp",e):b("roundOver",e)}),(0,o.jsxs)(ed,{children:[b("got",e)," “",eM,"”",eV>0&&` \xb7 ${b("roundCount",e)} ${eV+1}`]})]}),e2.map(t=>(0,o.jsxs)(ep,{children:[(0,o.jsxs)(eu,{children:[(0,o.jsx)("span",{children:t.icon}),"pt"===e?t.label.pt:t.label.en]}),"online"===r?(0,o.jsx)("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:Object.entries(y).sort(([e],[t])=>e===ey.room?.playerId?-1:+(t===ey.room?.playerId)).map(([r,{name:a,answers:n}])=>(0,o.jsxs)("div",{style:{flex:"1 1 100px",minWidth:80},children:[(0,o.jsxs)("div",{style:{fontSize:11,fontWeight:600,marginBottom:2,color:r===ey.room?.playerId?l.w4.colors.accent:l.w4.colors.mainTextMuted},children:[a,r===ey.room?.playerId?` (${b("you",e)})`:""]}),(0,o.jsx)(em,{children:n[t.id]||(0,o.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},r))}):(0,o.jsx)(em,{children:e_[t.id]||(0,o.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},t.id)),(0,o.jsxs)(eh,{children:[(0,o.jsx)(eg,{type:"button",onClick:e0,children:b("newLetter",e)}),(0,o.jsx)(eg,{type:"button",variant:"secondary",onClick:e1,children:b("changeCategories",e)})]})]})]})}},7710(e,t,r){r.d(t,{n:()=>P});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(5782);let d=["\uD83C\uDF4E","\uD83C\uDF4C","\uD83C\uDF47","\uD83C\uDF49","\uD83C\uDF4A","\uD83C\uDF53","\uD83E\uDED0","\uD83C\uDF52","\uD83E\uDD5D","\uD83C\uDF51","\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC38","\uD83E\uDD8A","\uD83D\uDC3C","\uD83D\uDC35","\uD83E\uDD81","\uD83D\uDC2E","\uD83D\uDC37","\uD83D\uDC14","⭐","❤️","\uD83D\uDC8E","\uD83D\uDD25","\uD83C\uDF08","⚡","\uD83C\uDFAF","\uD83C\uDFB8","\uD83D\uDE80","\uD83C\uDF19"];function p(e){let t=[...e];for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}function u(e){let t=d[Math.floor(Math.random()*d.length)],r=p(d.filter(e=>e!==t)).slice(0,e-1),o=p([t,...r]);return{target:t,grid:o,targetIndex:o.indexOf(t)}}let m=(0,s.keyframes)`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,h=(0,s.keyframes)`0% { transform: scale(0); } 60% { transform: scale(1.15); } 100% { transform: scale(1); }`,g=(0,s.keyframes)`0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); }`,f=(0,s.keyframes)`0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}`,x=(0,s.keyframes)`0%,100%{transform:scale(1)}50%{transform:scale(1.3)}`,b=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,w=i().div`
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: ${l.w4.spacing.lg}; gap: ${l.w4.spacing.lg}; overflow-y: auto; min-height: 0;
  background: radial-gradient(ellipse 60% 50% at 30% 20%, rgba(249,117,131,0.06) 0%, transparent 70%),
              radial-gradient(ellipse 50% 60% at 70% 80%, rgba(88,166,255,0.04) 0%, transparent 70%), #080b12;
`,y=i().h1`font-size: clamp(1.6rem,4vw,2.4rem); font-weight: 800; color: ${l.w4.colors.mainText}; margin: 0; text-align: center; animation: ${m} 0.3s ease;`,v=i().p`font-size: ${l.w4.typography.fontSizeMd}; color: ${l.w4.colors.mainTextMuted}; text-align: center; margin: 0;`,$=i().div`display:flex;gap:2px;padding:2px;background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.md};`,k=i().button`padding:8px 18px;border:none;border-radius:${l.w4.borderRadius.sm};font-size:14px;min-height:36px;font-weight:600;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:background ${l.w4.transitions.base},color ${l.w4.transitions.base};background:${({active:e})=>e?"rgba(249,117,131,0.18)":"transparent"};color:${({active:e})=>e?"#f97583":l.w4.colors.mainTextMuted};&:hover{color:#f97583;background:rgba(249,117,131,0.1);}`,j=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all ${l.w4.transitions.base};min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}&:active{transform:translateY(-1px);}`,M=i().div`font-size: clamp(4rem,12vw,8rem); font-weight: 900; color: ${l.w4.colors.accent}; animation: ${b} 0.5s ease;`,S=i().div`display:flex;align-items:center;gap:${l.w4.spacing.md};padding:12px 24px;border-radius:${l.w4.borderRadius.lg};background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.accent};animation:${h} 0.3s ease;`,z=i().span`font-size:48px;animation:${x} 1s ease-in-out infinite;`,T=i().span`font-size:24px;color:${l.w4.colors.accent};font-weight:800;`,C=i().div`display:grid;grid-template-columns:repeat(${({cols:e})=>e},1fr);gap:10px;max-width:500px;width:100%;animation:${m} 0.2s ease;`,R=i().button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(28px,6vw,42px);
  background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};
  cursor:pointer;transition:all ${l.w4.transitions.base};min-height:56px;
  border-color: ${({correct:e,wrong:t})=>e?"#3fb950":t?"#f97583":l.w4.colors.border};
  background: ${({correct:e,wrong:t})=>e?"rgba(63,185,80,0.15)":t?"rgba(249,117,131,0.15)":l.w4.colors.surface};
  animation: ${({correct:e,wrong:t})=>e?g:t?f:"none"} ${({correct:e})=>e?"0.5s ease":"0.4s ease"};
  &:hover:not(:disabled){background:rgba(88,166,255,0.08);transform:scale(1.05);}
  &:active:not(:disabled){transform:scale(0.95);}
`,_=i().div`display:flex;gap:${l.w4.spacing.lg};align-items:center;`,B=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};`;i().div`
  position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  font-size:80px;pointer-events:none;animation:${h} 0.3s ease;z-index:10;
  background:${({type:e})=>"correct"===e?"rgba(63,185,80,0.1)":"rgba(249,117,131,0.1)"};
  border-radius:${l.w4.borderRadius.lg};
`;let I=i().div`display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;animation:${m} 0.3s ease;`,A=i().div`display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:10px 14px;background:${l.w4.colors.surface};border:1px solid ${({highlight:e})=>e?l.w4.colors.accent:l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};`,E=i().span`flex:1;font-weight:600;color:${({highlight:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};`,F=i().span`font-size:20px;font-weight:800;color:${({color:e})=>e??l.w4.colors.mainText};`;function P({lang:e,canOnline:t}){let[r,n]=(0,a.useState)("menu"),[i,s]=(0,a.useState)("solo"),[d,p]=(0,a.useState)(0),[m,h]=(0,a.useState)(null),[g,f]=(0,a.useState)(0),[x,b]=(0,a.useState)({}),[L,O]=(0,a.useState)(3),[H,D]=(0,a.useState)(null),[N,V]=(0,a.useState)(!1),[G]=(0,a.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),q=(0,a.useRef)(!1),Y=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":J.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),J.current.sendEvent({type:"host-ack",name:G,playerId:J.current.room?.playerId??"",players:J.current.room?.players??[]});break;case"host-ack":J.current.setConnected(e.name),e.players&&J.current.setPlayers([...e.players,{id:J.current.room?.playerId??"",name:G,isHost:!1}]);break;case"player-list":J.current.setPlayers(e.players);break;case"game-state":{let t=e.payload;if("new-round"===t.action)h(t.roundData),p(t.round),D(null),V(!1),q.current=!1,n("playing");else if("round-result"===t.action)b(t.scores),t.winnerId===J.current.room?.playerId&&f(e=>e+1);else if("game-over"===t.action)b(t.scores),n("scores");else if("tap"===t.action&&J.current.room?.role==="host"&&!q.current){let e=t.index,r=t.playerId;if(U.current&&e===U.current.targetIndex){q.current=!0;let e={...Q.current,[r]:(Q.current[r]??0)+1};b(e),Q.current=e,J.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:r,scores:e}}),setTimeout(()=>Z(),1200)}}break}case"player-left":e.playerId&&J.current.removePlayer(e.playerId)}},[G]),W=(0,c.Ky)({gameId:"tapit",playerName:G,onEvent:Y}),J=(0,a.useRef)(W);J.current=W;let X=(0,c.zj)({gameId:"tapit",enabled:"online"===i}),U=(0,a.useRef)(m);U.current=m;let K=(0,a.useRef)(d);K.current=d;let Q=(0,a.useRef)(x);Q.current=x;let Z=(0,a.useCallback)(()=>{let e=K.current+1;if(e>10){J.current.sendEvent({type:"game-state",payload:{action:"game-over",scores:Q.current}}),n("scores");return}let t=u(12);U.current=t,h(t),p(e),D(null),V(!1),q.current=!1,n("playing"),J.current.sendEvent({type:"game-state",payload:{action:"new-round",roundData:t,round:e}})},[]),ee=(0,a.useCallback)(()=>{f(0),b({}),Q.current={},p(0),K.current=0,O(3),n("countdown");let e=3,t=setInterval(()=>{O(--e),e<=0&&(clearInterval(t),"online"===i&&W.room?.role==="host"?Z():"solo"===i&&(h(u(12)),p(1),K.current=1,q.current=!1,n("playing")))},800)},[i,W.room?.role,Z]),et=(0,a.useCallback)(e=>{if("playing"===r&&!q.current&&m){if("online"===i){if(W.room?.role==="host")if(e===m.targetIndex){q.current=!0,D(e),V(!0);let t=W.room.playerId,r={...Q.current,[t]:(Q.current[t]??0)+1};b(r),Q.current=r,f(e=>e+1),W.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:t,scores:r}}),setTimeout(()=>Z(),1200)}else D(e),V(!1),setTimeout(()=>D(null),400);else e===m.targetIndex?(q.current=!0,D(e),V(!0)):(D(e),V(!1),setTimeout(()=>D(null),400)),W.sendEvent({type:"game-state",payload:{action:"tap",index:e,playerId:W.room?.playerId}});return}e===m.targetIndex?(q.current=!0,D(e),V(!0),f(e=>e+1),setTimeout(()=>{let e=K.current+1;e>10?n("scores"):(h(u(12)),p(e),K.current=e,D(null),q.current=!1)},600)):(D(e),V(!1),setTimeout(()=>D(null),400))}},[r,m,i,W,Z]);if("menu"===r)return(0,o.jsxs)(w,{children:[(0,o.jsxs)(y,{children:["\uD83C\uDFAF ","pt"===e?"Toca no Certo!":"Tap the Right One!"]}),(0,o.jsx)(v,{children:"pt"===e?"Encontra o s\xedmbolo certo o mais r\xe1pido poss\xedvel!":"Find the right symbol as fast as you can!"}),t&&(0,o.jsxs)($,{children:[(0,o.jsxs)(k,{active:"solo"===i,onClick:()=>s("solo"),children:["\uD83C\uDFAF ","pt"===e?"Sozinho":"Solo"]}),(0,o.jsx)(k,{active:"online"===i,onClick:()=>s("online"),children:"\uD83C\uDF10 Online"})]}),"online"===i?(0,o.jsx)(j,{accent:"#f97583",onClick:()=>n("lobby"),children:"pt"===e?"Criar / Entrar Sala":"Create / Join Room"}):(0,o.jsx)(j,{accent:"#f97583",onClick:ee,children:"pt"===e?"Jogar!":"Play!"})]});if("lobby"===r)return(0,o.jsxs)(w,{children:[(0,o.jsxs)(y,{children:["\uD83C\uDFAF ","pt"===e?"Toca no Certo!":"Tap the Right One!"]}),W.room?.connected?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{children:"host"===W.room.role?`${W.room.players.length} ${"pt"===e?"jogadores":"players"}`:"pt"===e?"\xc0 espera do anfitri\xe3o…":"Waiting for host…"}),(0,o.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:W.room.players.map(e=>(0,o.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===W.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===W.room.role&&(0,o.jsx)(j,{accent:"#f97583",onClick:ee,children:"pt"===e?"Come\xe7ar!":"Start!"})]}):(0,o.jsx)(c.XB,{lang:e,room:W.room,error:W.error,availableRooms:X.rooms,onCreateRoom:()=>{let{code:e,roomName:t}=W.createRoom();X.publishRoom({code:e,roomName:t,hostName:G,playerCount:1})},onJoinRoom:e=>W.joinRoom(e),onLeaveRoom:()=>{X.unpublishRoom(),W.leaveRoom(),n("menu")}})]});if("countdown"===r)return(0,o.jsx)(w,{children:(0,o.jsx)(M,{children:L>0?L:"\uD83C\uDFAF"},L)});if("scores"===r){let t="online"===i,r=t?(W.room?.players??[]).map(e=>({id:e.id,name:e.name,pts:x[e.id]??0})).sort((e,t)=>t.pts-e.pts):[{id:"me",name:G,pts:g}];return(0,o.jsxs)(w,{children:[(0,o.jsxs)(y,{children:["\uD83C\uDFC6 ","pt"===e?"Resultados":"Results"]}),(0,o.jsx)(I,{children:r.map((e,t)=>(0,o.jsxs)(A,{highlight:e.id===W.room?.playerId,children:[(0,o.jsx)("span",{style:{fontSize:18,minWidth:28},children:0===t?"\uD83E\uDD47":1===t?"\uD83E\uDD48":2===t?"\uD83E\uDD49":`${t+1}.`}),(0,o.jsx)(E,{highlight:e.id===W.room?.playerId,children:e.name}),(0,o.jsxs)(F,{color:0===t?"#3fb950":void 0,children:[e.pts,"/",10]})]},e.id))}),(0,o.jsx)(j,{accent:"#f97583",onClick:()=>{t&&(W.leaveRoom(),X.unpublishRoom()),n("menu")},children:"pt"===e?"Jogar Outra Vez":"Play Again"})]})}if(!m)return(0,o.jsx)(w,{children:(0,o.jsx)(v,{children:"Loading..."})});let er=m.grid.length<=9?3:4;return(0,o.jsxs)(w,{children:[(0,o.jsxs)(_,{children:[(0,o.jsxs)(B,{children:["⭐ ",g]}),(0,o.jsxs)(B,{children:["pt"===e?"Ronda":"Round"," ",d,"/",10]})]}),(0,o.jsxs)(S,{children:[(0,o.jsx)(T,{children:"\uD83D\uDC49"}),(0,o.jsx)(z,{children:m.target}),(0,o.jsx)(T,{children:"\uD83D\uDC48"})]}),(0,o.jsx)("div",{style:{position:"relative"},children:(0,o.jsx)(C,{cols:er,children:m.grid.map((e,t)=>(0,o.jsx)(R,{correct:H===t&&N,wrong:H===t&&!N,onClick:()=>et(t),style:{animationDelay:`${.03*t}s`},children:e},`${d}-${t}`))})})]})}},8125(e,t,r){r.d(t,{a:()=>et});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063);let c="atlantis-textadventure-progress";function d(){try{let e=localStorage.getItem(c);return e?JSON.parse(e):{}}catch{return{}}}let p=[{id:"castle",emoji:"\uD83C\uDFF0",title:{pt:"O Castelo Misterioso",en:"The Mysterious Castle"},description:{pt:"Explora um castelo m\xe1gico cheio de segredos, magos e criaturas encantadas.",en:"Explore a magical castle full of secrets, wizards and enchanted creatures."},color:"#7c5cbf",totalEndings:3,scenes:[{id:"castle_start",emoji:"\uD83C\uDFF0",text:{pt:"Voc\xea chega \xe0 porta de um enorme castelo misterioso. As paredes s\xe3o de pedra cinzenta e h\xe1 hera crescendo por toda parte. Uma brisa fria sopra pela floresta ao redor. Voc\xea ouve um barulho estranho vindo de dentro.",en:"You arrive at the gate of an enormous mysterious castle. The walls are grey stone with ivy growing everywhere. A cool breeze blows through the surrounding forest. You hear a strange sound coming from inside."},choices:[{label:{pt:"Entrar pela porta principal",en:"Enter through the main door"},next:"castle_main_door"},{label:{pt:"Procurar uma janela aberta",en:"Look for an open window"},next:"castle_window"},{label:{pt:"Chamar por algu\xe9m",en:"Call out to someone"},next:"castle_call"}]},{id:"castle_main_door",emoji:"\uD83D\uDEAA",text:{pt:"A porta enorme range ao abrir. Dentro, voc\xea encontra um grande sal\xe3o com tape\xe7arias coloridas nas paredes. No centro, uma escada larga sobe para o andar de cima. Mas tamb\xe9m h\xe1 uma porta pequena \xe0 esquerda.",en:"The huge door creaks as it opens. Inside, you find a grand hall with colourful tapestries on the walls. In the centre, a wide staircase leads upstairs. But there is also a small door to the left."},choices:[{label:{pt:"Subir a escada",en:"Climb the staircase"},next:"castle_upstairs"},{label:{pt:"Abrir a porta pequena",en:"Open the small door"},next:"castle_kitchen"}]},{id:"castle_window",emoji:"\uD83E\uDE9F",text:{pt:"Voc\xea encontra uma janela entreaberta no andar t\xe9rreo. Ao espiar para dentro, v\xea uma biblioteca cheia de livros enormes e um gato preto dormindo sobre uma mesa. Voc\xea entra sem fazer barulho.",en:"You find a slightly open window on the ground floor. Peeking inside, you see a library full of enormous books and a black cat sleeping on a table. You climb in without making a sound."},choices:[{label:{pt:"Explorar a biblioteca",en:"Explore the library"},next:"castle_library"},{label:{pt:"Acordar o gato",en:"Wake the cat"},next:"castle_cat"}]},{id:"castle_call",emoji:"\uD83D\uDCE3",text:{pt:'Voc\xea grita "Ol\xe1! Tem algu\xe9m a\xed?" e sua voz ecoa pelo castelo. De repente, uma janela l\xe1 em cima se abre e uma velhinha de cabelos brancos aparece. Ela sorri e joga uma chave dourada para voc\xea!',en:'You shout "Hello! Is anyone there?" and your voice echoes through the castle. Suddenly, a window opens high above and a little old lady with white hair appears. She smiles and tosses a golden key down to you!'},choices:[{label:{pt:"Usar a chave dourada na porta",en:"Use the golden key on the door"},next:"castle_golden_room"},{label:{pt:"Perguntar \xe0 velhinha quem ela \xe9",en:"Ask the old lady who she is"},next:"castle_witch"}]},{id:"castle_upstairs",emoji:"\uD83C\uDF1F",text:{pt:'No topo da escada, voc\xea encontra um quarto cheio de brilho dourado. No centro h\xe1 um ba\xfa antigo com um cart\xe3o que diz: "Para o corajoso aventureiro — abra e descubra!" Seu cora\xe7\xe3o bate mais r\xe1pido.',en:'At the top of the staircase, you find a room filled with golden glow. In the centre is an old chest with a card that reads: "For the brave adventurer — open and discover!" Your heart beats faster.'},choices:[{label:{pt:"Abrir o ba\xfa",en:"Open the chest"},next:"castle_end_treasure"},{label:{pt:"Chamar os amigos antes de abrir",en:"Call friends before opening"},next:"castle_end_friends"}]},{id:"castle_kitchen",emoji:"\uD83C\uDF72",text:{pt:'A porta pequena leva a uma cozinha quentinha e cheirosa. Uma sopa deliciosa fervilha no fog\xe3o. H\xe1 um bilhete na mesa: "Ajude-se! — O Mago do Castelo". Voc\xea come um pouco e se sente muito mais corajoso!',en:'The small door leads to a warm, fragrant kitchen. A delicious soup bubbles on the stove. There is a note on the table: "Help yourself! — The Castle Wizard". You eat some and feel much braver!'},choices:[{label:{pt:"Ir procurar o mago",en:"Go look for the wizard"},next:"castle_wizard"},{label:{pt:"Explorar mais o castelo",en:"Explore more of the castle"},next:"castle_upstairs"}]},{id:"castle_library",emoji:"\uD83D\uDCDA",text:{pt:'Os livros na biblioteca s\xe3o enormes e t\xeam t\xedtulos como "Feiti\xe7os para Iniciantes" e "Drag\xf5es: Um Guia Completo". Um livro come\xe7a a brilhar quando voc\xea se aproxima. Ele se abre sozinho numa p\xe1gina especial!',en:'The books in the library are enormous with titles like "Spells for Beginners" and "Dragons: A Complete Guide". One book begins to glow as you approach. It opens by itself to a special page!'},choices:[{label:{pt:"Ler o livro brilhante",en:"Read the glowing book"},next:"castle_spell"},{label:{pt:"Pegar o livro sobre drag\xf5es",en:"Grab the dragon book"},next:"castle_dragon"}]},{id:"castle_cat",emoji:"\uD83D\uDC31",text:{pt:'O gato abre os olhos lentamente e fala: "Finalmente! Estava esperando por voc\xea." Voc\xea quase cai de susto! O gato explica que \xe9 o guardi\xe3o do castelo e que pode mostrar o tesouro secreto.',en:'The cat opens its eyes slowly and says: "Finally! I have been waiting for you." You nearly fall over in shock! The cat explains it is the castle guardian and can show you the secret treasure.'},choices:[{label:{pt:"Seguir o gato m\xe1gico",en:"Follow the magic cat"},next:"castle_end_treasure"},{label:{pt:"Perguntar como o gato fala",en:"Ask how the cat speaks"},next:"castle_wizard"}]},{id:"castle_golden_room",emoji:"✨",text:{pt:'A chave dourada abre uma porta secreta no jardim! Dentro h\xe1 um quarto redondo cheio de estrelas brilhando no tecto, mesmo durante o dia. Uma nota diz: "Este quarto pertence a quem \xe9 curioso e corajoso."',en:'The golden key opens a secret door in the garden! Inside is a round room full of stars shining on the ceiling, even during the day. A note reads: "This room belongs to whoever is curious and brave."'},choices:[{label:{pt:"Deitar e observar as estrelas",en:"Lie down and watch the stars"},next:"castle_end_stars"},{label:{pt:"Procurar mais segredos no quarto",en:"Search for more secrets in the room"},next:"castle_end_treasure"}]},{id:"castle_witch",emoji:"\uD83E\uDDD9‍♀️",text:{pt:'A velhinha desce pelo jardim e se apresenta: "Sou a Bruxinha Margarida! Cuido deste castelo h\xe1 200 anos." Ela sorri: "Mas estou t\xe3o sozinha... Queres ficar para um ch\xe1 e me contar hist\xf3rias do mundo l\xe1 fora?"',en:'The little old lady comes down through the garden and introduces herself: "I am Witch Marguerite! I have been looking after this castle for 200 years." She smiles: "But I am so lonely... Will you stay for tea and tell me stories from the outside world?"'},choices:[{label:{pt:"Ficar para o ch\xe1 e fazer amizade",en:"Stay for tea and make a friend"},next:"castle_end_friends"},{label:{pt:"Entrar e explorar o castelo dela",en:"Go in and explore her castle"},next:"castle_end_stars"}]},{id:"castle_spell",emoji:"\uD83E\uDE84",text:{pt:"O livro ensina um feiti\xe7o simples de luz. Voc\xea segue as instru\xe7\xf5es e de repente a palma da sua m\xe3o brilha! A magia funciona! O castelo inteiro se ilumina e voc\xea v\xea um mapa secreto desenhado no ch\xe3o.",en:"The book teaches a simple light spell. You follow the instructions and suddenly your palm glows! The magic works! The whole castle lights up and you see a secret map drawn on the floor."},choices:[{label:{pt:"Seguir o mapa at\xe9 o tesouro",en:"Follow the map to the treasure"},next:"castle_end_treasure"},{label:{pt:"Guardar o mapa para voltar depois",en:"Keep the map and come back later"},next:"castle_end_stars"}]},{id:"castle_dragon",emoji:"\uD83D\uDC09",text:{pt:"O livro se abre numa p\xe1gina com um drag\xe3o pequenino desenhado. De repente o drag\xe3o sai do livro! Mas \xe9 muito pequeno — cabe na sua m\xe3o. Ele ronrona como um gatinho e se torna seu amigo.",en:"The book opens to a page with a tiny dragon drawn on it. Suddenly the dragon leaps out of the book! But it is very tiny — small enough to fit in your hand. It purrs like a kitten and becomes your friend."},choices:[{label:{pt:"Levar o drag\xe3o em casa como animal de estima\xe7\xe3o",en:"Take the dragon home as a pet"},next:"castle_end_friends"},{label:{pt:"Pedir ao drag\xe3o para mostrar o castelo",en:"Ask the dragon to show you the castle"},next:"castle_end_treasure"}]},{id:"castle_wizard",emoji:"\uD83E\uDDD9",text:{pt:'Voc\xea encontra o Mago do Castelo na torre mais alta. \xc9 um senhor alegre com barba azul e chap\xe9u de estrelas. Ele fica muito feliz com sua visita: "N\xe3o recebia visitantes h\xe1 s\xe9culos! Vou te ensinar um feiti\xe7o de presente!"',en:"You find the Castle Wizard in the tallest tower. He is a jolly gentleman with a blue beard and a star-covered hat. He is thrilled by your visit: \"I haven't had visitors in centuries! I'll teach you a spell as a gift!\""},choices:[{label:{pt:"Aprender o feiti\xe7o e explorar o castelo",en:"Learn the spell and explore the castle"},next:"castle_end_stars"},{label:{pt:"Convidar o mago para jantar na sua casa",en:"Invite the wizard to dinner at your home"},next:"castle_end_friends"}]},{id:"castle_end_treasure",emoji:"\uD83D\uDC8E",text:{pt:"Voc\xea descobriu o Tesouro do Castelo Misterioso! Ba\xfas cheios de joias coloridas, livros de magia e brinquedos encantados que nunca existiram antes. O mago diz que tudo pertence a voc\xea porque voc\xea foi corajoso e curioso. Que aventura incr\xedvel!",en:"You discovered the Treasure of the Mysterious Castle! Chests full of colourful jewels, magic books and enchanted toys that have never existed before. The wizard says it all belongs to you because you were brave and curious. What an incredible adventure!"},isEnding:!0,endingType:"good"},{id:"castle_end_friends",emoji:"\uD83E\uDD1D",text:{pt:"Voc\xea fez os melhores amigos do mundo neste castelo! A Bruxinha Margarida, o Mago da Barba Azul, o gato falante e at\xe9 um drag\xe3ozinho. Eles te convidam para voltar sempre. \xc0s vezes os maiores tesouros s\xe3o as amizades que fazemos!",en:"You made the best friends in the world in this castle! Witch Marguerite, the Blue-Beard Wizard, the talking cat, and even a tiny dragon. They invite you to come back whenever you like. Sometimes the greatest treasures are the friendships we make!"},isEnding:!0,endingType:"good"},{id:"castle_end_stars",emoji:"\uD83C\uDF0C",text:{pt:"Voc\xea descobre o segredo mais bonito do castelo: um quarto com um telesc\xf3pio m\xe1gico que mostra n\xe3o s\xf3 as estrelas, mas tamb\xe9m as hist\xf3rias que acontecem nelas. Voc\xea fica t\xe3o encantado que decide voltar todos os dias para aprender mais sobre o universo.",en:"You discover the most beautiful secret of the castle: a room with a magical telescope that shows not just stars but also the stories happening in them. You are so enchanted that you decide to come back every day to learn more about the universe."},isEnding:!0,endingType:"neutral"}]},{id:"space",emoji:"\uD83D\uDE80",title:{pt:"Miss\xe3o Espacial",en:"Space Mission"},description:{pt:"S\xea o capit\xe3o de uma nave espacial e descobre planetas incr\xedveis e seres amig\xe1veis.",en:"Be the captain of a spaceship and discover incredible planets and friendly beings."},color:"#1e6fa8",totalEndings:4,scenes:[{id:"space_start",emoji:"\uD83D\uDE80",text:{pt:"Voc\xea \xe9 o capit\xe3o da nave espacial Estrela Dourada! A nave est\xe1 a orbitar um planeta desconhecido de cor roxa. Os sensores detectam vida l\xe1 em baixo, mas tamb\xe9m um sinal de socorro vindo de uma lua pr\xf3xima.",en:"You are the captain of the spaceship Golden Star! The ship is orbiting an unknown purple planet. Sensors detect life below, but also a distress signal coming from a nearby moon."},choices:[{label:{pt:"Descer ao planeta roxo",en:"Land on the purple planet"},next:"space_planet"},{label:{pt:"Ir at\xe9 \xe0 lua do sinal de socorro",en:"Head to the moon with the distress signal"},next:"space_moon"},{label:{pt:"Analisar melhor os dados primeiro",en:"Analyse the data more carefully first"},next:"space_analyse"}]},{id:"space_planet",emoji:"\uD83E\uDE90",text:{pt:"O planeta roxo \xe9 cheio de plantas gigantes que brilham de noite! Criaturas pequenas e amig\xe1veis chamadas Puffs correm ao seu encontro. Elas falam numa l\xedngua estranha mas parecem muito alegres por te ver.",en:"The purple planet is full of giant plants that glow at night! Small, friendly creatures called Puffs come running towards you. They speak a strange language but seem very happy to see you."},choices:[{label:{pt:"Tentar comunicar com os Puffs",en:"Try to communicate with the Puffs"},next:"space_puffs"},{label:{pt:"Explorar a floresta brilhante",en:"Explore the glowing forest"},next:"space_forest"}]},{id:"space_moon",emoji:"\uD83C\uDF15",text:{pt:"A lua tem uma superf\xedcie cinzenta e cheia de crateras. O sinal vem de uma c\xfapula de vidro escondida atr\xe1s de uma colina de pedra. Dentro, voc\xea v\xea um rob\xf4 pequenino que acena para voc\xea!",en:"The moon has a grey surface full of craters. The signal comes from a glass dome hidden behind a stone hill. Inside, you spot a tiny robot waving at you!"},choices:[{label:{pt:"Entrar na c\xfapula para ajudar o rob\xf4",en:"Enter the dome to help the robot"},next:"space_robot"},{label:{pt:"Pedir refor\xe7os antes de entrar",en:"Call for backup before entering"},next:"space_analyse"}]},{id:"space_analyse",emoji:"\uD83D\uDCBB",text:{pt:"Voc\xea estuda os dados com cuidado. Os computadores da nave revelam uma surpresa: o planeta roxo e a lua est\xe3o conectados! Um t\xfanel subterr\xe2neo liga os dois. Algu\xe9m — ou algo — mora nos dois lugares ao mesmo tempo!",en:"You study the data carefully. The ship's computers reveal a surprise: the purple planet and the moon are connected! An underground tunnel links the two. Someone — or something — lives in both places at once!"},choices:[{label:{pt:"Ir ao planeta para procurar a entrada do t\xfanel",en:"Go to the planet to look for the tunnel entrance"},next:"space_tunnel"},{label:{pt:"Mandar uma mensagem amig\xe1vel pelo r\xe1dio",en:"Send a friendly message by radio"},next:"space_radio"}]},{id:"space_puffs",emoji:"\uD83D\uDC7D",text:{pt:"Com gestos e sorrisos, voc\xea come\xe7a a aprender a l\xedngua dos Puffs! Eles se chamam Bloop, Fleep e Zoop. Eles explicam que s\xe3o os guardi\xf5es de uma semente especial que pode crescer em qualquer planeta do universo.",en:"With gestures and smiles, you begin to learn the Puffs' language! They are called Bloop, Fleep and Zoop. They explain they are guardians of a special seed that can grow on any planet in the universe."},choices:[{label:{pt:"Receber a semente como presente",en:"Accept the seed as a gift"},next:"space_end_seeds"},{label:{pt:"Ajud\xe1-los a plantar a semente num novo planeta",en:"Help them plant the seed on a new planet"},next:"space_end_friendship"}]},{id:"space_forest",emoji:"\uD83C\uDF3F",text:{pt:"A floresta brilhante \xe9 m\xe1gica! As plantas emitem sons musicais ao serem tocadas. Voc\xea descobre que toda a floresta \xe9 um instrumento musical gigante. De repente, uma melodia incr\xedvel come\xe7a a tocar quando voc\xea toca as plantas na ordem certa.",en:"The glowing forest is magical! The plants make musical sounds when touched. You discover the whole forest is one giant musical instrument. Suddenly, an incredible melody begins to play when you touch the plants in the right order."},choices:[{label:{pt:"Gravar a m\xfasica para levar para casa",en:"Record the music to take home"},next:"space_end_music"},{label:{pt:"Chamar os Puffs para dan\xe7ar",en:"Call the Puffs to come dance"},next:"space_end_friendship"}]},{id:"space_robot",emoji:"\uD83E\uDD16",text:{pt:"O rob\xf4 se chama R-7 e ficou preso na c\xfapula h\xe1 50 anos quando a sua nave avariou. Ele ficou a estudar as estrelas sozinho todo esse tempo. Est\xe1 t\xe3o feliz que come\xe7a a dan\xe7ar! Ele tem mapas de 1000 planetas desconhecidos!",en:"The robot is called R-7 and got stuck in the dome 50 years ago when its ship broke down. It has been studying the stars alone all that time. It is so happy that it starts dancing! It has maps of 1000 unknown planets!"},choices:[{label:{pt:"Levar o R-7 a bordo da sua nave",en:"Bring R-7 aboard your ship"},next:"space_end_friendship"},{label:{pt:"Usar os mapas para explorar novos planetas juntos",en:"Use the maps to explore new planets together"},next:"space_end_exploration"}]},{id:"space_tunnel",emoji:"\uD83D\uDD73️",text:{pt:"Voc\xea encontra a entrada do t\xfanel escondida debaixo de uma rocha enorme. \xc9 um tubo de vidro que brilha de azul por dentro. Ao entrar, voc\xea escorrega rapidamente at\xe9 um laborat\xf3rio subterr\xe2neo incr\xedvel!",en:"You find the tunnel entrance hidden under an enormous rock. It is a glass tube that glows blue inside. When you enter, you slide quickly down to an incredible underground laboratory!"},choices:[{label:{pt:"Explorar o laborat\xf3rio",en:"Explore the laboratory"},next:"space_end_exploration"},{label:{pt:"Usar o laborat\xf3rio para fazer contacto com outros planetas",en:"Use the lab to make contact with other planets"},next:"space_end_seeds"}]},{id:"space_radio",emoji:"\uD83D\uDCE1",text:{pt:'Voc\xea envia uma mensagem simp\xe1tica: "Ol\xe1, viemos em paz!" Uns segundos depois, recebe uma resposta com m\xfasica! \xc9 uma melodia linda de um ser chamado Cosmo que mora em ambos os mundos e est\xe1 muito curioso sobre a Terra.',en:'You send a friendly message: "Hello, we come in peace!" A few seconds later you receive a reply with music! It is a beautiful melody from a being called Cosmo who lives in both worlds and is very curious about Earth.'},choices:[{label:{pt:"Trocar m\xfasicas e hist\xf3rias com Cosmo",en:"Exchange music and stories with Cosmo"},next:"space_end_music"},{label:{pt:"Convidar Cosmo a visitar a Terra",en:"Invite Cosmo to visit Earth"},next:"space_end_friendship"}]},{id:"space_end_exploration",emoji:"\uD83D\uDDFA️",text:{pt:"Com os mapas incr\xedveis que encontrou, voc\xea se torna o maior explorador espacial de todos os tempos! A sua nave visita centenas de planetas novos e cada um tem maravilhas nunca vistas. Voc\xea escreve um livro que todas as crian\xe7as da gal\xe1xia l\xeaem!",en:"With the incredible maps you found, you become the greatest space explorer of all time! Your ship visits hundreds of new planets and each one has wonders never seen before. You write a book that every child in the galaxy reads!"},isEnding:!0,endingType:"good"},{id:"space_end_friendship",emoji:"\uD83C\uDF08",text:{pt:"Voc\xea faz os melhores amigos do universo: os Puffs Bloop, Fleep e Zoop, o rob\xf4 R-7 e o misterioso Cosmo! Eles visitam a Terra e ficam encantados com o planeta azul. Voc\xeas criam uma alian\xe7a gal\xe1ctica de amizade e aventuras!",en:"You make the best friends in the universe: the Puffs Bloop, Fleep and Zoop, the robot R-7, and the mysterious Cosmo! They visit Earth and are enchanted by the blue planet. Together you create a galactic alliance of friendship and adventures!"},isEnding:!0,endingType:"good"},{id:"space_end_music",emoji:"\uD83C\uDFB5",text:{pt:"Voc\xea traz para a Terra a m\xfasica mais bonita do universo. Quando ela toca, as pessoas ficam em paz e felizes. Cientistas descobrem que a melodia cont\xe9m a linguagem universal que todos os seres do cosmos entendem. Voc\xea mudou o mundo com m\xfasica!",en:"You bring to Earth the most beautiful music in the universe. When it plays, people feel peaceful and happy. Scientists discover the melody contains the universal language that all beings in the cosmos understand. You changed the world with music!"},isEnding:!0,endingType:"neutral"},{id:"space_end_seeds",emoji:"\uD83C\uDF31",text:{pt:"A semente especial dos Puffs cresce em todos os planetas! Em pouco tempo, cada mundo tem uma floresta brilhante e musical. Os Puffs te nomeiam Guardi\xe3o das Sementes do Universo. \xc9 uma responsabilidade enorme, mas voc\xea est\xe1 pronto!",en:"The Puffs' special seed grows on every planet! Soon, every world has a glowing, musical forest. The Puffs name you Guardian of the Universe's Seeds. It is an enormous responsibility, but you are ready!"},isEnding:!0,endingType:"neutral"}]},{id:"island",emoji:"\uD83C\uDF0A",title:{pt:"A Ilha do Tesouro",en:"Treasure Island"},description:{pt:"Segue um mapa antigo at\xe9 uma ilha misteriosa e descobre o que o tesouro realmente \xe9.",en:"Follow an old map to a mysterious island and discover what the treasure really is."},color:"#2d7a4f",totalEndings:3,scenes:[{id:"island_start",emoji:"\uD83D\uDDFA️",text:{pt:"Voc\xea encontrou um velho mapa numa garrafa \xe0 beira-mar! O mapa mostra uma ilha misteriosa com um X marcando onde est\xe1 escondido um tesouro. Voc\xea tem um barco pequeno e dois amigos prontos para a aventura!",en:"You found an old map in a bottle by the sea! The map shows a mysterious island with an X marking where a treasure is hidden. You have a small boat and two friends ready for adventure!"},choices:[{label:{pt:"Seguir o mapa directamente at\xe9 ao X",en:"Follow the map straight to the X"},next:"island_direct"},{label:{pt:"Explorar a ilha primeiro para conhec\xea-la",en:"Explore the island first to get to know it"},next:"island_explore"},{label:{pt:"Perguntar a um pescador local sobre a ilha",en:"Ask a local fisherman about the island"},next:"island_fisherman"}]},{id:"island_direct",emoji:"\uD83E\uDDED",text:{pt:"Voc\xea segue o mapa com cuidado pela floresta tropical. Os sons dos p\xe1ssaros coloridos enchem o ar. De repente, o caminho divide-se em dois: um desce para a praia, o outro sobe pela montanha.",en:"You follow the map carefully through the tropical forest. The sounds of colourful birds fill the air. Suddenly the path splits in two: one goes down to the beach, the other climbs up the mountain."},choices:[{label:{pt:"Ir pela praia",en:"Go along the beach"},next:"island_beach"},{label:{pt:"Subir a montanha",en:"Climb the mountain"},next:"island_mountain"}]},{id:"island_explore",emoji:"\uD83C\uDF34",text:{pt:'Explorando a ilha, voc\xea encontra uma aldeia escondida na floresta! Os moradores s\xe3o crian\xe7as e adultos que vivem ali h\xe1 gera\xe7\xf5es. A anci\xe3 da aldeia olha para o seu mapa e diz: "Conhe\xe7o este tesouro. \xc9 especial!"',en:'Exploring the island, you find a hidden village in the forest! The residents are children and adults who have lived there for generations. The village elder looks at your map and says: "I know this treasure. It is special!"'},choices:[{label:{pt:"Ouvir o que a anci\xe3 sabe sobre o tesouro",en:"Listen to what the elder knows about the treasure"},next:"island_elder"},{label:{pt:"Convidar a aldeia para ir contigo",en:"Invite the village to come with you"},next:"island_together"}]},{id:"island_fisherman",emoji:"\uD83C\uDFA3",text:{pt:'O pescador olha para o mapa e arregalha os olhos. "Ah! Esse \xe9 o Mapa do Capit\xe3o Estrela! Ele escondeu o tesouro aqui h\xe1 300 anos. Mas cuidado com a Lagoa dos Peixes Voadores — eles adoram brincar com viajantes!"',en:'The fisherman looks at the map and his eyes go wide. "Ah! That is Captain Star\'s Map! He hid the treasure here 300 years ago. But beware of the Flying Fish Lagoon — they love to play tricks on travellers!"'},choices:[{label:{pt:"Ir ver a lagoa dos peixes voadores",en:"Go see the flying fish lagoon"},next:"island_lagoon"},{label:{pt:"Pedir ao pescador para guiar voc\xea at\xe9 ao X",en:"Ask the fisherman to guide you to the X"},next:"island_direct"}]},{id:"island_beach",emoji:"\uD83D\uDC1A",text:{pt:'A praia \xe9 lind\xedssima com areia dourada e conchas coloridas. Uma tartaruga gigante dorme na areia. Quando voc\xea passa, ela acorda e fala: "Boa tarde! Procura o tesouro, n\xe3o \xe9? Eu sei onde fica!"',en:'The beach is beautiful with golden sand and colourful shells. A giant turtle is sleeping on the sand. When you walk past, it wakes up and says: "Good afternoon! You are looking for the treasure, aren\'t you? I know where it is!"'},choices:[{label:{pt:"Seguir a tartaruga",en:"Follow the turtle"},next:"island_turtle"},{label:{pt:"Agradecer mas continuar pelo mapa",en:"Thank the turtle but continue with the map"},next:"island_mountain"}]},{id:"island_mountain",emoji:"⛰️",text:{pt:"No topo da montanha, h\xe1 uma vista incr\xedvel de toda a ilha! E voc\xea v\xea claramente onde est\xe1 o X do mapa — uma gruta escondida atr\xe1s de uma cascata. Mas para chegar l\xe1, precisa de atravessar uma ponte de lianas sobre um rio.",en:"At the top of the mountain, there is an incredible view of the whole island! And you can clearly see where the X on the map is — a cave hidden behind a waterfall. But to get there, you need to cross a vine bridge over a river."},choices:[{label:{pt:"Atravessar a ponte de lianas",en:"Cross the vine bridge"},next:"island_cave"},{label:{pt:"Descer pela cascata com uma corda",en:"Climb down by the waterfall with a rope"},next:"island_waterfall"}]},{id:"island_elder",emoji:"\uD83D\uDC75",text:{pt:'A anci\xe3 conta que o tesouro do Capit\xe3o Estrela n\xe3o \xe9 ouro — \xe9 um cofre de sementes raras de plantas que curam qualquer doen\xe7a! "Foram roubadas do nosso povo h\xe1 300 anos. Se as trouver de volta, a nossa aldeia florescer\xe1 de novo!"',en:'The elder explains that Captain Star\'s treasure is not gold — it is a chest of rare seeds from plants that heal any illness! "They were stolen from our people 300 years ago. If you bring them back, our village will flourish again!"'},choices:[{label:{pt:"Prometer devolver o tesouro ao povo da ilha",en:"Promise to return the treasure to the island people"},next:"island_together"},{label:{pt:"Ir buscar o tesouro e partilh\xe1-lo",en:"Go get the treasure and share it"},next:"island_cave"}]},{id:"island_together",emoji:"\uD83D\uDC6B",text:{pt:"Toda a aldeia vai convosco! \xc9 uma festa animada a caminhar pela floresta. As crian\xe7as cantam, os adultos contam hist\xf3rias antigas. Juntos, encontram o caminho at\xe9 \xe0 gruta mais depressa e sem nenhum perigo.",en:"The whole village comes with you! It is a joyful procession through the forest. The children sing, the adults tell old stories. Together, you find the path to the cave faster and without any danger."},choices:[{label:{pt:"Abrir a gruta juntos",en:"Open the cave together"},next:"island_end_village"},{label:{pt:"Deixar a anci\xe3 entrar primeiro",en:"Let the elder enter first"},next:"island_end_village"}]},{id:"island_lagoon",emoji:"\uD83D\uDC1F",text:{pt:'A Lagoa dos Peixes Voadores \xe9 espectacular! Os peixes saltam para fora de \xe1gua e voam pelo ar. Um peixe dourado pousa no seu ombro e cochicha: "Sigo o X do teu mapa — sigo eu!" e voa em frente a guiar o caminho.',en:'The Flying Fish Lagoon is spectacular! The fish leap out of the water and fly through the air. A golden fish lands on your shoulder and whispers: "I follow your map\'s X — I follow! Follow me!" and flies ahead to guide the way.'},choices:[{label:{pt:"Seguir o peixe dourado",en:"Follow the golden fish"},next:"island_cave"},{label:{pt:"Nadar com os peixes voadores primeiro",en:"Swim with the flying fish first"},next:"island_waterfall"}]},{id:"island_turtle",emoji:"\uD83D\uDC22",text:{pt:'A tartaruga leva voc\xea por um caminho secreto pela floresta que nenhum mapa mostra. Em poucos minutos chegam a uma gruta escondida. "Eu guardo este segredo h\xe1 100 anos," diz ela orgulhosa.',en:'The turtle leads you along a secret path through the forest that no map shows. In just a few minutes you arrive at a hidden cave. "I have kept this secret for 100 years," she says proudly.'},choices:[{label:{pt:"Entrar na gruta",en:"Enter the cave"},next:"island_cave"},{label:{pt:"Agradecer e dar \xe0 tartaruga a sua melhor concha",en:"Thank the turtle and give her your best shell"},next:"island_end_friends"}]},{id:"island_cave",emoji:"\uD83C\uDF0A",text:{pt:"A gruta atr\xe1s da cascata \xe9 m\xe1gica! As paredes brilham com pedras coloridas. No centro, sobre um pedestal de coral, repousa o cofre do Capit\xe3o Estrela. Est\xe1 coberto de conchas e estrelas-do-mar adormecidas.",en:"The cave behind the waterfall is magical! The walls shimmer with colourful stones. In the centre, on a coral pedestal, rests Captain Star's chest. It is covered in shells and sleeping starfish."},choices:[{label:{pt:"Abrir o cofre",en:"Open the chest"},next:"island_end_treasure"},{label:{pt:"Ler a inscri\xe7\xe3o gravada no cofre primeiro",en:"Read the inscription carved on the chest first"},next:"island_end_village"}]},{id:"island_waterfall",emoji:"\uD83D\uDCA7",text:{pt:"A cascata forma uma piscina natural linda e fresca. Voc\xea nada at\xe9 ao fundo e descobre um t\xfanel subaqu\xe1tico que leva directamente para dentro da gruta do tesouro! \xc9 o atalho secreto que o Capit\xe3o Estrela usava.",en:"The waterfall forms a beautiful cool natural pool. You swim to the bottom and discover an underwater tunnel leading straight into the treasure cave! It is the secret shortcut that Captain Star used."},choices:[{label:{pt:"Atravessar o t\xfanel subaqu\xe1tico",en:"Swim through the underwater tunnel"},next:"island_end_treasure"},{label:{pt:"Voltar e partilhar a descoberta com a aldeia",en:"Go back and share the discovery with the village"},next:"island_end_village"}]},{id:"island_end_treasure",emoji:"\uD83D\uDCB0",text:{pt:"O cofre est\xe1 cheio de moedas douradas, joias brilhantes e mapas de ilhas secretas ao redor do mundo! Voc\xea decide partilhar o tesouro com a aldeia da ilha e com as fam\xedlias dos pescadores. Toda a gente fica feliz e voc\xea \xe9 declarado Her\xf3i da Ilha!",en:"The chest is full of gold coins, shining jewels and maps of secret islands around the world! You decide to share the treasure with the island village and the fishermen's families. Everyone is happy and you are declared Hero of the Island!"},isEnding:!0,endingType:"good"},{id:"island_end_village",emoji:"\uD83C\uDF3A",text:{pt:"O cofre continha as sementes m\xe1gicas que pertenciam ao povo da ilha! Ao plant\xe1-las, a floresta come\xe7a a florescer com cores que nunca tinham visto. A aldeia organiza uma festa enorme em sua honra e voc\xea \xe9 convidado a ficar para sempre!",en:"The chest contained the magic seeds that belonged to the island people! When planted, the forest begins to bloom with colours never seen before. The village throws a huge party in your honour and you are invited to stay forever!"},isEnding:!0,endingType:"good"},{id:"island_end_friends",emoji:"\uD83D\uDC20",text:{pt:"A tartaruga, os peixes voadores e o povo da ilha tornam-se os seus melhores amigos. Voc\xea volta a visitar a ilha todos os ver\xf5es e cada vez encontra novos segredos escondidos. A ilha \xe9 um lugar m\xe1gico que s\xf3 os cora\xe7\xf5es bons conseguem encontrar.",en:"The turtle, the flying fish and the island people become your best friends. You visit the island every summer and each time you find new hidden secrets. The island is a magical place that only kind hearts can find."},isEnding:!0,endingType:"neutral"}]}],u=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=(0,s.keyframes)`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-12px); }
`,h=(0,s.keyframes)`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,g=(0,s.keyframes)`
  0%   { opacity: 0; transform: scale(0.5); }
  70%  { opacity: 1; transform: scale(1.12); }
  100% { opacity: 1; transform: scale(1); }
`,f=(0,s.keyframes)`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,x=i().div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${({accentColor:e})=>e?`radial-gradient(ellipse at top left, ${e}18 0%, ${l.w4.colors.mainBg} 55%)`:l.w4.colors.mainBg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.4s ease;
`,b=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  border-bottom: 1px solid ${l.w4.colors.border};
  flex-shrink: 0;
`,w=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  min-height: 44px;
  cursor: pointer;
  transition: color ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, background ${l.w4.transitions.base};
  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.surface};
  }
`,y=i().h1`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,v=i().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
`,$=i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 900px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`,k=i().h2`
  font-size: ${l.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin-bottom: ${l.w4.spacing.sm};
`,j=i().p`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  margin-bottom: ${l.w4.spacing.xl};
`,M=i().button`
  background: linear-gradient(
    135deg,
    ${l.w4.colors.surface} 0%,
    ${({accentColor:e})=>e}12 100%
  );
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.lg};
  cursor: pointer;
  text-align: left;
  transition: transform ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, box-shadow ${l.w4.transitions.base}, background ${l.w4.transitions.base};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  animation: ${u} 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: ${({accentColor:e})=>e};
    box-shadow: 0 8px 32px ${({accentColor:e})=>e}40;
    background: linear-gradient(
      135deg,
      ${l.w4.colors.surface} 0%,
      ${({accentColor:e})=>e}20 100%
    );
  }
`,S=i().span`
  font-size: 48px;
  line-height: 1;
  display: block;
  margin-bottom: ${l.w4.spacing.sm};
`,z=i().h3`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,T=i().p`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  margin: 0;
  line-height: ${l.w4.typography.lineHeightBase};
`,C=i().div`
  display: inline-flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 11px;
  font-weight: 600;
  padding: 2px ${l.w4.spacing.sm};
  border-radius: 100px;
  margin-top: ${l.w4.spacing.xs};
  background: ${({hasProgress:e})=>e?"rgba(88, 166, 255, 0.15)":"rgba(139, 148, 158, 0.1)"};
  color: ${({hasProgress:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  border: 1px solid ${({hasProgress:e})=>e?"rgba(88, 166, 255, 0.3)":l.w4.colors.border};
`,R=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  animation: ${({exiting:e})=>e?m:u} 0.25s ease forwards;
`,_=i().div`
  font-size: 80px;
  line-height: 1;
  margin-bottom: ${l.w4.spacing.lg};
  animation: ${g} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  @media (max-width: 768px) {
    font-size: 60px;
  }
`,B=i().div`
  font-size: 18px;
  line-height: 1.75;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin-bottom: ${l.w4.spacing.xl};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.xl};
  min-height: 5em;
  position: relative;
  animation: ${u} 0.5s ease both;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: ${l.w4.spacing.md};
  }
`,I=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  width: 100%;
`,A=i().button`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 3px solid ${l.w4.colors.accent};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeMd};
  font-family: ${l.w4.typography.fontFamily};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  text-align: left;
  cursor: pointer;
  min-height: 56px;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, transform ${l.w4.transitions.base};
  line-height: ${l.w4.typography.lineHeightBase};
  opacity: 0;
  animation: ${u} 0.25s ease forwards;
  animation-delay: ${({index:e})=>100*e}ms;
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  &:hover {
    background: rgba(88, 166, 255, 0.08);
    border-color: ${l.w4.colors.accent};
    border-left-color: ${l.w4.colors.accentHover};
    transform: translateX(4px);
  }
  @media (max-width: 768px) {
    font-size: ${l.w4.typography.fontSizeBase};
  }
`,E=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.xl};
  width: 100%;
`,F=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,P=i().span`
  color: ${l.w4.colors.accent};
  font-weight: 600;
`,L=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`,O=i().div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({filled:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  transition: background ${l.w4.transitions.base};
`,H=i().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${l.w4.colors.accent};
  color: ${l.w4.colors.mainBg};
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
`,D=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  text-align: center;
  animation: ${u} 0.4s ease;
`,N=(0,s.keyframes)`
  0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
  60%  { opacity: 1; transform: scale(1.2) rotate(8deg); }
  80%  { transform: scale(0.95) rotate(-3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,V=i().div`
  font-size: 100px;
  line-height: 1;
  margin-bottom: ${l.w4.spacing.lg};
  animation: ${N} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
`,G=i().div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  border-radius: 100px;
  margin-bottom: ${l.w4.spacing.md};
  background: ${({endingType:e})=>"good"===e?"rgba(63, 185, 80, 0.15)":"rgba(88, 166, 255, 0.12)"};
  color: ${({endingType:e})=>"good"===e?"#3fb950":l.w4.colors.accent};
  border: 1px solid ${({endingType:e})=>"good"===e?"rgba(63, 185, 80, 0.3)":"rgba(88, 166, 255, 0.3)"};
`,q=i().h2`
  font-size: ${l.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.md};
`,Y=i().p`
  font-size: 16px;
  line-height: 1.75;
  color: ${l.w4.colors.mainText};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.xl};
  margin-bottom: ${l.w4.spacing.xl};
  min-height: 4em;
  animation: ${u} 0.5s ease both;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: ${l.w4.spacing.md};
  }
`,W=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  width: 100%;
`,J=i().button`
  background: ${l.w4.colors.accent};
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  color: #0d1117;
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamily};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.xl};
  cursor: pointer;
  min-height: 52px;
  transition: background ${l.w4.transitions.base}, transform ${l.w4.transitions.base};
  &:hover {
    background: ${l.w4.colors.accentHover};
    transform: translateY(-2px);
  }
`,X=i().button`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.xl};
  cursor: pointer;
  min-height: 44px;
  transition: border-color ${l.w4.transitions.base}, background ${l.w4.transitions.base};
  &:hover {
    border-color: ${l.w4.colors.accent};
    background: rgba(88, 166, 255, 0.06);
  }
`,U=i().div`
  background: linear-gradient(90deg, #3fb950, #58a6ff);
  background-size: 200% 100%;
  animation: ${f} 2s linear infinite;
  color: #0d1117;
  font-weight: 700;
  font-size: ${l.w4.typography.fontSizeSm};
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  border-radius: 100px;
  margin-bottom: ${l.w4.spacing.md};
`,K=i().div`
  position: fixed;
  top: -20px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px;
  animation: ${h} ${({delay:e})=>1.8+e}s ease-in ${({delay:e})=>e}s forwards;
  pointer-events: none;
  z-index: 9999;
`,Q=["#58a6ff","#3fb950","#f78166","#ffa657","#d2a8ff","#79c0ff"];function Z(){let e=Array.from({length:40},(e,t)=>({id:t,left:100*Math.random(),delay:1.2*Math.random(),color:Q[Math.floor(Math.random()*Q.length)]??"#58a6ff",size:6+Math.floor(10*Math.random())}));return(0,o.jsx)(o.Fragment,{children:e.map(e=>(0,o.jsx)(K,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.id))})}let ee=["A","B","C","D"];function et({lang:e,onBack:t}){let[r,n]=(0,a.useState)({phase:"select"}),[i,s]=(0,a.useState)(d),l=(0,a.useRef)(null),[u,m]=(0,a.useState)(!1),[h,g]=(0,a.useState)(0),f=(0,a.useRef)(null),[N,K]=(0,a.useState)(0),Q="pt"===e?"pt":"en",er=(0,a.useCallback)(e=>{m(!1),g(e=>e+1),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{m(!0)},600)},[]),eo=(0,a.useRef)(null),ea=(0,a.useRef)(!1),en=(0,a.useCallback)(e=>{eo.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),ei=(0,a.useCallback)(e=>t=>{if(!eo.current)return;let r=Math.abs(t.changedTouches[0].clientX-eo.current.x),o=Math.abs(t.changedTouches[0].clientY-eo.current.y);eo.current=null,r>8||o>8||(ea.current=!0,e())},[]),es=(0,a.useCallback)(e=>()=>{if(ea.current){ea.current=!1;return}e()},[]),el=(0,a.useCallback)((e,t)=>{let r=p.find(t=>t.id===e);return r?.scenes.find(e=>e.id===t)},[]),ec=(0,a.useCallback)((t,o)=>{let a=el(t,o);if(a)if(a.isEnding){let r=i[t]??[],l=!r.includes(o),d={...i,[t]:l?[...r,o]:r};if(l){s(d);try{localStorage.setItem(c,JSON.stringify(d))}catch{}}n({phase:"ending",storyId:t,sceneId:o,isNew:l}),er(a.text["pt"===e?"pt":"en"])}else K(e=>e+1),"scene"===r.phase?(n({...r,exiting:!0}),l.current=setTimeout(()=>{n({phase:"scene",storyId:t,sceneId:o,exiting:!1}),er(a.text["pt"===e?"pt":"en"])},220)):(n({phase:"scene",storyId:t,sceneId:o,exiting:!1}),er(a.text["pt"===e?"pt":"en"]))},[el,r,i,er,e]),ed=(0,a.useCallback)(t=>{let r=p.find(e=>e.id===t);r&&r.scenes[0]&&(K(0),n({phase:"scene",storyId:t,sceneId:r.scenes[0].id,exiting:!1}),er(r.scenes[0].text["pt"===e?"pt":"en"]))},[er,e]),ep=(0,a.useCallback)(()=>{l.current&&clearTimeout(l.current),f.current&&clearTimeout(f.current),n({phase:"select"}),K(0),m(!1)},[]);if((0,a.useEffect)(()=>()=>{l.current&&clearTimeout(l.current),f.current&&clearTimeout(f.current)},[]),"select"===r.phase)return(0,o.jsxs)(x,{children:[(0,o.jsx)(b,{children:(0,o.jsx)(y,{children:"pt"===Q?"Aventura de Texto":"Text Adventure"})}),(0,o.jsxs)(v,{children:[(0,o.jsx)(k,{children:"pt"===Q?"Escolhe a tua Aventura":"Choose Your Adventure"}),(0,o.jsx)(j,{children:"pt"===Q?"Selecciona uma hist\xf3ria e toma decis\xf5es que moldam o destino!":"Select a story and make choices that shape the outcome!"}),(0,o.jsx)($,{children:p.map(e=>{let t=(i[e.id]??[]).length,r=t>0,a="pt"===Q?`${t}/${e.totalEndings} finais descobertos`:`${t}/${e.totalEndings} endings found`,n=()=>ed(e.id);return(0,o.jsxs)(M,{accentColor:e.color,onTouchStart:en,onTouchEnd:ei(n),onClick:es(n),children:[(0,o.jsx)(S,{children:e.emoji}),(0,o.jsx)(z,{children:e.title[Q]}),(0,o.jsx)(T,{children:e.description[Q]}),(0,o.jsxs)(C,{hasProgress:r,children:[r?"⭐ ":"○ ",a]})]},e.id)})})]})]});if("scene"===r.phase){let{storyId:e,sceneId:t,exiting:a}=r,n=el(e,t),i=p.find(t=>t.id===e);if(!n||!i)return(0,o.jsx)(x,{children:(0,o.jsx)(v,{children:"pt"===Q?"Cena n\xe3o encontrada.":"Scene not found."})});let s=Math.min(N+1,8);return(0,o.jsxs)(x,{accentColor:i.color,children:[(0,o.jsxs)(b,{children:[(0,o.jsx)(w,{onTouchStart:en,onTouchEnd:ei(ep),onClick:es(ep),children:"pt"===Q?"← Hist\xf3rias":"← Stories"}),(0,o.jsx)(y,{children:i.title[Q]})]}),(0,o.jsx)(v,{children:(0,o.jsxs)(R,{exiting:a,children:[(0,o.jsxs)(E,{children:[(0,o.jsxs)(F,{children:[i.emoji," ",(0,o.jsx)(P,{children:i.title[Q]})]}),(0,o.jsx)(L,{children:Array.from({length:8},(e,t)=>(0,o.jsx)(O,{filled:t<s},t))})]}),(0,o.jsx)(_,{children:n.emoji},t),(0,o.jsx)(B,{children:n.text[Q]},h),u&&n.choices&&(0,o.jsx)(I,{children:n.choices.map((t,r)=>{let a=()=>ec(e,t.next);return(0,o.jsxs)(A,{index:r,onTouchStart:en,onTouchEnd:ei(a),onClick:es(a),children:[(0,o.jsx)(H,{children:ee[r]??String(r+1)}),t.label[Q]]},r)})})]})})]})}if("ending"===r.phase){let{storyId:e,sceneId:t,isNew:a}=r,n=el(e,t),s=p.find(t=>t.id===e);if(!n||!s)return(0,o.jsx)(x,{children:(0,o.jsx)(v,{children:"pt"===Q?"Fim n\xe3o encontrado.":"Ending not found."})});let l=n.endingType??"neutral",c="good"===l,d=(i[e]??[]).length,m="pt"===Q?`${d} de ${s.totalEndings} finais encontrados`:`${d} of ${s.totalEndings} endings found`,g=()=>ed(e),f=()=>ep();return(0,o.jsxs)(x,{accentColor:s.color,children:[c&&(0,o.jsx)(Z,{}),(0,o.jsxs)(b,{children:[(0,o.jsx)(w,{onTouchStart:en,onTouchEnd:ei(ep),onClick:es(ep),children:"pt"===Q?"← Hist\xf3rias":"← Stories"}),(0,o.jsx)(y,{children:s.title[Q]})]}),(0,o.jsx)(v,{children:(0,o.jsxs)(D,{children:[a&&(0,o.jsx)(U,{children:"pt"===Q?"\uD83C\uDF1F Novo final descoberto!":"\uD83C\uDF1F New ending discovered!"}),(0,o.jsx)(V,{children:n.emoji}),(0,o.jsx)(G,{endingType:l,children:c?"pt"===Q?"\uD83C\uDF89 Final Feliz!":"\uD83C\uDF89 Happy Ending!":"pt"===Q?"✨ Final Alternativo":"✨ Alternative Ending"}),(0,o.jsx)(q,{children:c?"pt"===Q?"Que aventura incr\xedvel!":"What an incredible adventure!":"pt"===Q?"Uma hist\xf3ria para recordar.":"A story to remember."}),(0,o.jsx)(Y,{children:n.text[Q]},h),u&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(C,{hasProgress:d>0,style:{marginBottom:24},children:[d>0?"⭐ ":"○ ",m]}),(0,o.jsxs)(W,{children:[(0,o.jsx)(J,{onTouchStart:en,onTouchEnd:ei(g),onClick:es(g),children:"pt"===Q?"Jogar novamente":"Play again"}),(0,o.jsx)(X,{onTouchStart:en,onTouchEnd:ei(f),onClick:es(f),children:"pt"===Q?"Escolher outra hist\xf3ria":"Choose another story"})]})]})]})})]})}return null}},7350(e,t,r){r.d(t,{t:()=>K});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(6063),c=r(5782);let d=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function p(e){for(let t of d){let[r,o,a]=t;if(e[r]&&e[r]===e[o]&&e[r]===e[a])return{winner:e[r],line:t}}return{winner:null,line:null}}function u(e){return e.reduce((e,t,r)=>null===t?[...e,r]:e,[])}let m={title:{pt:"Jogo do Galo",en:"Tic Tac Toe"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},thinking:{pt:"A pensar...",en:"Thinking..."},youWin:{pt:"\uD83C\uDF89 Ganhaste!",en:"\uD83C\uDF89 You win!"},youLose:{pt:"\uD83D\uDE05 Perdeste!",en:"\uD83D\uDE05 You lost!"},draw:{pt:"\uD83E\uDD1D Empate!",en:"\uD83E\uDD1D Draw!"},playAgain:{pt:"Jogar outra vez",en:"Play again"},back:{pt:"← Voltar",en:"← Back"},easy:{pt:"F\xe1cil",en:"Easy"},medium:{pt:"M\xe9dio",en:"Medium"},hard:{pt:"Dif\xedcil",en:"Hard"},wins:{pt:"Vit\xf3rias",en:"Wins"},losses:{pt:"Derrotas",en:"Losses"},draws:{pt:"Empates",en:"Draws"},you:{pt:"Tu",en:"You"},robot:{pt:"Robot",en:"Robot"},vsRobot:{pt:"vs Robot",en:"vs Robot"},vsFriend:{pt:"vs Amigo",en:"vs Friend"},player1:{pt:"Jogador 1",en:"Player 1"},player2:{pt:"Jogador 2",en:"Player 2"},player1Turn:{pt:"Vez do Jogador 1!",en:"Player 1's turn!"},player2Turn:{pt:"Vez do Jogador 2!",en:"Player 2's turn!"},player1Wins:{pt:"\uD83C\uDF89 Jogador 1 ganhou!",en:"\uD83C\uDF89 Player 1 wins!"},player2Wins:{pt:"\uD83C\uDF89 Jogador 2 ganhou!",en:"\uD83C\uDF89 Player 2 wins!"},p1:{pt:"J1",en:"P1"},p2:{pt:"J2",en:"P2"},vsOnline:{pt:"Online",en:"Online"},opponentTurn:{pt:"Vez do advers\xe1rio!",en:"Opponent's turn!"},youWinOnline:{pt:"\uD83C\uDF89 Ganhaste!",en:"\uD83C\uDF89 You win!"},opponentWins:{pt:"\uD83D\uDE05 O advers\xe1rio ganhou!",en:"\uD83D\uDE05 Opponent wins!"},opponentLeft:{pt:"O advers\xe1rio saiu.",en:"Opponent left."},rematchReq:{pt:"Revanche pedida…",en:"Rematch requested…"},rematch:{pt:"Revanche",en:"Rematch"},waitingRematch:{pt:"\xc0 espera da resposta…",en:"Waiting for response…"}},h="\uD83E\uDD16",g="\uD83C\uDF19",f="atlantis-tictactoe-score";function x(){try{let e=localStorage.getItem(f);if(e)return JSON.parse(e)}catch{}return{wins:0,losses:0,draws:0}}let b=(0,s.keyframes)`
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
`,w=(0,s.keyframes)`
  0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
  60%  { transform: scale(1.15) rotate(3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,y=(0,s.keyframes)`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.12); }
`,v=(0,s.keyframes)`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
`,$=(0,s.keyframes)`
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
`,k=(0,s.keyframes)`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.4); }
  70%  { transform: scale(0.9); }
  100% { transform: scale(1); }
`,j=(0,s.keyframes)`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%           { transform: scale(1);   opacity: 1; }
`,M=(0,s.keyframes)`
  0%   { transform: translateY(-10px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(40px) rotate(360deg); opacity: 0; }
`,S=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${l.w4.spacing.lg};
  gap: ${l.w4.spacing.lg};
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.04) 0%, transparent 70%),
    #080b12;
  min-height: 0;
`,z=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  animation: ${b} 0.3s ease;
`,T=i().h1`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${l.w4.colors.mainText};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,C=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,R=i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, color ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, transform ${l.w4.transitions.base};
  background: ${({active:e,color:t})=>e?t+"20":l.w4.colors.surface};
  color: ${({active:e,color:t})=>e?t:l.w4.colors.mainTextMuted};
  border: 1.5px solid ${({active:e,color:t})=>e?t+"60":l.w4.colors.border};
  box-shadow: ${({active:e,color:t})=>e?`0 0 12px ${t}20`:"none"};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}18;
    border-color: ${({color:e})=>e}50;
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,_=i().div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
`,B=i().button`
  padding: 8px 16px;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, color ${l.w4.transitions.base};
  background: ${({active:e,color:t})=>e?t+"22":"transparent"};
  color: ${({active:e,color:t})=>e?t:l.w4.colors.mainTextMuted};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}11;
  }
`,I=i().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 20px;
  animation: ${({variant:e})=>"win"===e?v:b} ${({variant:e})=>"win"===e?"0.6s ease-in-out infinite":"0.3s ease"};
  background: ${({variant:e})=>"win"===e?"rgba(63, 185, 80, 0.15)":"lose"===e?"rgba(249, 117, 131, 0.15)":"draw"===e?"rgba(210, 169, 34, 0.15)":"rgba(88, 166, 255, 0.1)"};
  color: ${({variant:e})=>"win"===e?"#3fb950":"lose"===e?"#f97583":"draw"===e?"#d2a922":l.w4.colors.accent};
`,A=i().div`
  position: relative;
`,E=i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background: ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06);
`,F=i().button`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({isWinning:e})=>e?"rgba(63, 185, 80, 0.12)":l.w4.colors.surface};
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  transition: background ${l.w4.transitions.base}, transform ${l.w4.transitions.base}, opacity ${l.w4.transitions.base};
  font-size: clamp(36px, 8vw, 52px);
  line-height: 1;
  position: relative;
  animation: ${({isWinning:e})=>e?y:"none"} 1s ease-in-out infinite;
  opacity: ${({isThinking:e})=>e?.55:1};

  &:hover:not(:disabled) {
    background: rgba(88, 166, 255, 0.08);
    transform: scale(1.04);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }
`,P=i().span`
  animation: ${({isNew:e})=>e?w:"none"} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`,L=i().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  animation: ${b} 0.3s ease 0.1s both;
`,O=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,H=i().span`
  font-size: ${l.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${({color:e})=>e};
  font-variant-numeric: tabular-nums;
  animation: ${({pop:e})=>e?k:"none"} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
`,D=i().span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${l.w4.colors.mainTextMuted};
`,N=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  animation: ${b} 0.3s ease 0.2s both;
`,V=i().button`
  padding: 12px 24px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, transform ${l.w4.transitions.base}, border-color ${l.w4.transitions.base};

  background: ${({variant:e})=>"primary"===e?"rgba(88, 166, 255, 0.15)":"transparent"};
  color: ${({variant:e})=>"primary"===e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  border: 1px solid ${({variant:e})=>"primary"===e?l.w4.colors.accent+"40":l.w4.colors.border};

  &:hover {
    background: ${({variant:e})=>"primary"===e?"rgba(88, 166, 255, 0.25)":"rgba(255,255,255,0.04)"};
    border-color: ${({variant:e})=>"primary"===e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,G=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.md};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  animation: ${b} 0.3s ease 0.15s both;
`,q=i().span`
  display: flex;
  align-items: center;
  gap: 4px;
`,Y=i().div`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  animation: ${M} 1.2s ease-out forwards;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,W=i().div`
  position: absolute;
  height: 6px;
  border-radius: 3px;
  background: ${({color:e})=>e};
  box-shadow: 0 0 12px ${({color:e})=>e}80;
  pointer-events: none;
  animation: ${$} 0.35s ease forwards;
  z-index: 10;
  transform-origin: left center;
  /* Geometry calculated inline via style prop */
`,J=i().div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 4px;
`,X=i().span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
  animation: ${j} 1.2s ease-in-out ${({delay:e})=>e}s infinite;
`,U=["#f97583","#58a6ff","#3fb950","#d2a922","#d2a8ff","#79c0ff"];function K({lang:e,onBack:t,canOnline:r}){let n,i,[s,d]=(0,a.useState)(Array(9).fill(null)),[b,w]=(0,a.useState)(null),[y,v]=(0,a.useState)(!0),[$,k]=(0,a.useState)("medium"),[j,M]=(0,a.useState)("bot"),[Q,Z]=(0,a.useState)(x),[ee,et]=(0,a.useState)(!1),[er,eo]=(0,a.useState)(null),[ea]=(0,a.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),[en,ei]=(0,a.useState)("none"),[es,el]=(0,a.useState)(!1),ec=(0,a.useRef)(s);ec.current=s;let ed=(0,a.useCallback)(e=>{switch(e.type){case"guest-joined":eu.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),eu.current.sendEvent({type:"host-ack",name:ea,playerId:eu.current.room?.playerId??"",players:eu.current.room?.players??[]});break;case"host-ack":eu.current.setConnected(e.name),e.players&&eu.current.setPlayers([...e.players,{id:eu.current.room?.playerId??"",name:ea,isHost:!1}]);break;case"game-state":{let t=e.payload;d(t.board),w(t.lastPlaced),v(eu.current.room?.role==="host"?t.isHostTurn:!t.isHostTurn);break}case"game-over":et(!0);break;case"rematch-request":ei("received");break;case"rematch-accepted":d(Array(9).fill(null)),w(null),v(eu.current.room?.role==="host"),et(!1),ei("none");break;case"player-left":el(!0),et(!0)}},[ea]),ep=(0,c.Ky)({gameId:"tictactoe",playerName:ea,onEvent:ed}),eu=(0,a.useRef)(ep);eu.current=ep;let em=(0,c.zj)({gameId:"tictactoe",enabled:"online"===j}),{winner:eh,line:eg}=p(s),ef=!eh&&0===u(s).length,ex=(0,a.useCallback)(()=>{d(Array(9).fill(null)),w(null),v("online"!==j||ep.room?.role==="host"),et(!1),ei("none"),el(!1)},[j,ep.room?.role]);(0,a.useEffect)(()=>{!ee&&(eh||ef)&&(et(!0),"bot"===j&&(eo("X"===eh?"wins":"O"===eh?"losses":"draws"),setTimeout(()=>eo(null),500),Z(e=>{let t={...e};return"X"===eh?t.wins++:"O"===eh?t.losses++:t.draws++,localStorage.setItem(f,JSON.stringify(t)),t})))},[eh,ef,ee,j]),(0,a.useEffect)(()=>{if("bot"!==j||y||ee||eh||ef)return;let e=setTimeout(()=>{let e=ec.current,t=function(e,t){let r=u(e);if(0===r.length)return -1;if("easy"===t){if(.7>Math.random())return r[Math.floor(Math.random()*r.length)]}else if("medium"===t&&.3>Math.random())return r[Math.floor(Math.random()*r.length)];let o=-1/0,a=r[0];for(let t of r){e[t]="O";let r=function e(t,r){let{winner:o}=p(t);if("O"===o)return 10;if("X"===o)return -10;let a=u(t);if(0===a.length)return 0;if(r){let r=-1/0;for(let o of a)t[o]="O",r=Math.max(r,e(t,!1)),t[o]=null;return r}{let r=1/0;for(let o of a)t[o]="X",r=Math.min(r,e(t,!0)),t[o]=null;return r}}(e,!1);e[t]=null,r>o&&(o=r,a=t)}return a}([...e],$);if(t>=0){let r=[...e];r[t]="O",d(r),w(t),v(!0)}},500);return()=>clearTimeout(e)},[y,ee,eh,ef,$,j]);let eb=e=>{k(e),ex()},ew=e=>{"online"===j&&ep.room&&ep.leaveRoom(),M(e),el(!1),ei("none"),ex()},ey=()=>{"received"===en?(d(Array(9).fill(null)),w(null),v(ep.room?.role==="host"),et(!1),ei("none"),ep.sendEvent({type:"rematch-accepted"})):(ei("sent"),ep.sendEvent({type:"rematch-request"}))},ev=t=>m[t]?.[e]??m[t]?.en??t;if("online"===j)if(es)n="lose",i=ev("opponentLeft");else if(eh){let e="X"===eh&&ep.room?.role==="host"||"O"===eh&&ep.room?.role==="guest";n=e?"win":"lose",i=ev(e?"youWinOnline":"opponentWins")}else ef?(n="draw",i=ev("draw")):(n="turn",i=ev(y?"yourTurn":"opponentTurn"));else"2p"===j?"X"===eh?(n="win",i=ev("player1Wins")):"O"===eh?(n="win",i=ev("player2Wins")):ef?(n="draw",i=ev("draw")):(n="turn",i=ev(y?"player1Turn":"player2Turn")):"X"===eh?(n="win",i=ev("youWin")):"O"===eh?(n="lose",i=ev("youLose")):ef?(n="draw",i=ev("draw")):(n="turn",i=ev(y?"yourTurn":"thinking"));let e$=new Set(eg??[]),ek="bot"===j?"X"===eh:!!eh,ej="bot"===j&&!y&&!ee,eM=(0,a.useMemo)(()=>ek?Array.from({length:12},(e,t)=>({left:10+80*Math.random(),delay:.5*Math.random(),color:U[t%U.length]})):[],[ek]),eS=(0,a.useMemo)(()=>{if(!eg)return null;let e=Math.min(120,Math.max(80,.2*window.innerWidth)),t=t=>{let r=Math.floor(t/3);return{x:8+t%3*(e+8)+e/2,y:8+r*(e+8)+e/2}},r=t(eg[0]),o=t(eg[2]),a=o.x-r.x,n=o.y-r.y,i=Math.sqrt(a*a+n*n),s=180/Math.PI*Math.atan2(n,a);return{left:`${r.x}px`,top:`${r.y-3}px`,width:`${i}px`,transform:`rotate(${s}deg)`}},[eg]),ez="bot"===j?"X"===eh?"#3fb950":"#f97583":"X"===eh?"#58a6ff":"#d2a8ff";return(0,o.jsxs)(S,{children:[(0,o.jsxs)(z,{children:[(0,o.jsxs)(T,{children:["❌ ⭕ ",ev("title")]}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(R,{active:"bot"===j,color:l.w4.colors.accent,onClick:()=>ew("bot"),children:["\uD83E\uDD16 ",ev("vsRobot")]}),(0,o.jsxs)(R,{active:"2p"===j,color:"#d2a8ff",onClick:()=>ew("2p"),children:["\uD83D\uDC6B ",ev("vsFriend")]}),r&&(0,o.jsxs)(R,{active:"online"===j,color:"#3fb950",onClick:()=>ew("online"),children:["\uD83C\uDF10 ",ev("vsOnline")]})]}),"bot"===j&&(0,o.jsxs)(_,{children:[(0,o.jsx)(B,{active:"easy"===$,color:"#3fb950",onClick:()=>eb("easy"),children:ev("easy")}),(0,o.jsx)(B,{active:"medium"===$,color:"#d2a922",onClick:()=>eb("medium"),children:ev("medium")}),(0,o.jsx)(B,{active:"hard"===$,color:"#f97583",onClick:()=>eb("hard"),children:ev("hard")})]})]}),"online"===j&&!ep.room?.connected&&(0,o.jsx)(c.XB,{lang:e,room:ep.room,error:ep.error,availableRooms:em.rooms,onCreateRoom:()=>{let{code:e,roomName:t}=ep.createRoom();em.publishRoom({code:e,roomName:t,hostName:ea,playerCount:1})},onJoinRoom:e=>{ep.joinRoom(e)},onLeaveRoom:()=>{em.unpublishRoom(),ep.leaveRoom(),el(!1)}}),("online"!==j||ep.room?.connected)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(G,{children:"online"===j?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(q,{children:[ep.room?.role==="host"?"⭐":g," = ",ev("you")," (",ep.room?.playerName,")"]}),(0,o.jsxs)(q,{children:[ep.room?.role==="host"?g:"⭐"," = ",ep.room?.opponentName??"?"]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(q,{children:["⭐"," = ",ev("2p"===j?"player1":"you")]}),(0,o.jsxs)(q,{children:["2p"===j?g:h," = ",ev("2p"===j?"player2":"robot")]})]})}),(0,o.jsxs)(I,{variant:n,children:[i,ej&&(0,o.jsxs)(J,{children:[(0,o.jsx)(X,{delay:0}),(0,o.jsx)(X,{delay:.2}),(0,o.jsx)(X,{delay:.4})]})]}),(0,o.jsxs)(A,{children:[eM.map((e,t)=>(0,o.jsx)(Y,{left:e.left,delay:e.delay,color:e.color},t)),eS&&(0,o.jsx)(W,{x1:0,y1:0,x2:0,y2:0,color:ez,style:eS}),(0,o.jsx)(E,{children:s.map((e,t)=>(0,o.jsx)(F,{isWinning:e$.has(t),isThinking:ej&&!e,disabled:!!e||ee||"bot"===j&&!y||"online"===j&&!y,onClick:()=>(e=>{if(s[e]||ee||"bot"===j&&!y)return;if("online"===j){if(!ep.room?.connected||!y)return;let t="host"===ep.room.role?"X":"O",r=[...s];r[e]=t;let o="host"!==ep.room.role;d(r),w(e),v(!1),ep.sendEvent({type:"game-state",payload:{board:r,isHostTurn:o,lastPlaced:e}});let a=p(r),n=u(r);if(a.winner||0===n.length){et(!0);let e="X"===a.winner?"host":"O"===a.winner?"guest":"draw";ep.sendEvent({type:"game-over",winner:e})}return}let t=[...s];t[e]=y?"X":"O",d(t),w(e),v(!y)})(t),"aria-label":`Cell ${Math.floor(t/3)+1},${t%3+1}${e?`: ${e}`:""}`,children:e&&(0,o.jsx)(P,{isNew:t===b,children:e?"online"===j?"X"===e?"⭐":g:"X"===e?"⭐":"2p"===j?g:h:null})},t))})]}),"bot"===j&&(0,o.jsxs)(L,{children:[(0,o.jsxs)(O,{color:"#3fb950",children:[(0,o.jsx)(H,{color:"#3fb950",pop:"wins"===er,children:Q.wins}),(0,o.jsx)(D,{children:ev("wins")})]}),(0,o.jsxs)(O,{color:"#d2a922",children:[(0,o.jsx)(H,{color:"#d2a922",pop:"draws"===er,children:Q.draws}),(0,o.jsx)(D,{children:ev("draws")})]}),(0,o.jsxs)(O,{color:"#f97583",children:[(0,o.jsx)(H,{color:"#f97583",pop:"losses"===er,children:Q.losses}),(0,o.jsx)(D,{children:ev("losses")})]})]}),ee&&"online"!==j&&(0,o.jsx)(N,{children:(0,o.jsx)(V,{variant:"primary",onClick:ex,children:ev("playAgain")})}),ee&&"online"===j&&!es&&(0,o.jsx)(N,{children:"sent"===en?(0,o.jsx)(V,{variant:"ghost",children:ev("waitingRematch")}):"received"===en?(0,o.jsxs)(V,{variant:"primary",onClick:ey,children:[ev("rematch")," ✓"]}):(0,o.jsx)(V,{variant:"primary",onClick:ey,children:ev("rematch")})}),ee&&"online"===j&&es&&(0,o.jsx)(N,{children:(0,o.jsx)(V,{variant:"primary",onClick:()=>{ep.leaveRoom(),ex()},children:ev("playAgain")})})]})]})}},1234(e,t,r){r.d(t,{f:()=>tb});var o=r(5723),a=r(7991),n=r(6859),i=r.n(n),s=r(2799),l=r(4e3),c=r(6063);let d=[{id:"vogais",title:"Vogais",subtitle:"A \xb7 E \xb7 I \xb7 O \xb7 U",icon:"\uD83D\uDD24",color:"#a855f7",cards:[{id:"a",letter:"A",emoji:"\uD83D\uDC1D",word:"Abelha",hint:"Avi\xe3o \xb7 Anel \xb7 Arco \xb7 \xc1rvore"},{id:"e",letter:"E",emoji:"\uD83D\uDC18",word:"Elefante",hint:"Estrela \xb7 Escada \xb7 Erva \xb7 Espada"},{id:"i",letter:"I",emoji:"\uD83C\uDFDD️",word:"Ilha",hint:"Iglu \xb7 Igreja \xb7 \xcdris \xb7 Inseto"},{id:"o",letter:"O",emoji:"\uD83D\uDC11",word:"Ovelha",hint:"Ovo \xb7 Olho \xb7 Ouri\xe7o \xb7 Ouro"},{id:"u",letter:"U",emoji:"\uD83C\uDF47",word:"Uva",hint:"Urso \xb7 Unhas \xb7 \xdanico \xb7 \xdatil"}]},{id:"silabas-b",title:"Letra B",subtitle:"BA \xb7 BE \xb7 BI \xb7 BO \xb7 BU",icon:"\uD83C\uDD71️",color:"#3b82f6",cards:[{id:"ba",letter:"BA",emoji:"⛵",word:"Barco",hint:"Bala \xb7 Bater \xb7 Baile \xb7 Banana"},{id:"be",letter:"BE",emoji:"\uD83D\uDC76",word:"Beb\xe9",hint:"Belo \xb7 Beber \xb7 Ber\xe7o \xb7 Beleza"},{id:"bi",letter:"BI",emoji:"\uD83D\uDEB2",word:"Bicicleta",hint:"Bicho \xb7 Bico \xb7 Bingo \xb7 Biscoito"},{id:"bo",letter:"BO",emoji:"⚽",word:"Bola",hint:"Boca \xb7 Bolo \xb7 Bosque \xb7 Borboleta"},{id:"bu",letter:"BU",emoji:"\uD83E\uDECF",word:"Burro",hint:"Buzina \xb7 Bufo \xb7 B\xfazio \xb7 Bucha"}]},{id:"silabas-c",title:"Letra C",subtitle:"CA \xb7 CE \xb7 CI \xb7 CO \xb7 CU",icon:"\uD83D\uDC31",color:"#f97316",cards:[{id:"ca",letter:"CA",emoji:"\uD83C\uDFE0",word:"Casa",hint:"Cama \xb7 C\xe3o \xb7 Carro \xb7 Caracol"},{id:"ce",letter:"CE",emoji:"\uD83E\uDD8C",word:"Cervo",hint:"Cedo \xb7 Cereja \xb7 Cesta \xb7 Cebola"},{id:"ci",letter:"CI",emoji:"\uD83E\uDDA2",word:"Cisne",hint:"Cidade \xb7 Cinto \xb7 Cinema \xb7 Cinco"},{id:"co",letter:"CO",emoji:"\uD83D\uDC30",word:"Coelho",hint:"Copo \xb7 Corda \xb7 Coroa \xb7 Comida"},{id:"cu",letter:"CU",emoji:"\uD83E\uDE79",word:"Curativo",hint:"Cubo \xb7 Cuidado \xb7 Curva \xb7 Cultura"}]},{id:"silabas-d",title:"Letra D",subtitle:"DA \xb7 DE \xb7 DI \xb7 DO \xb7 DU",icon:"\uD83E\uDDB7",color:"#06b6d4",cards:[{id:"da",letter:"DA",emoji:"\uD83D\uDC83",word:"Dan\xe7a",hint:"Data \xb7 Dado \xb7 Dama \xb7 Dama"},{id:"de",letter:"DE",emoji:"\uD83E\uDDB7",word:"Dente",hint:"Dedo \xb7 Descanso \xb7 Devagar \xb7 Dezembro"},{id:"di",letter:"DI",emoji:"\uD83D\uDCB0",word:"Dinheiro",hint:"Dia \xb7 Dinossauro \xb7 Direto \xb7 Disco"},{id:"do",letter:"DO",emoji:"\uD83E\uDD12",word:"Doente",hint:"Doce \xb7 Dormir \xb7 Dois \xb7 Domino"},{id:"du",letter:"DU",emoji:"\uD83D\uDEBF",word:"Duche",hint:"Duro \xb7 Duende \xb7 Duna \xb7 Duplo"}]},{id:"silabas-f",title:"Letra F",subtitle:"FA \xb7 FE \xb7 FI \xb7 FO \xb7 FU",icon:"\uD83C\uDF38",color:"#ec4899",cards:[{id:"fa",letter:"FA",emoji:"\uD83D\uDDE3️",word:"Falar",hint:"Faca \xb7 Fada \xb7 Fam\xedlia \xb7 Farinha"},{id:"fe",letter:"FE",emoji:"\uD83D\uDE0A",word:"Feliz",hint:"Feno \xb7 Ferro \xb7 Festa \xb7 Fevereiro"},{id:"fi",letter:"FI",emoji:"\uD83E\uDDF5",word:"Fio",hint:"Filho \xb7 Figo \xb7 Fila \xb7 Fim"},{id:"fo",letter:"FO",emoji:"\uD83D\uDCF8",word:"Foto",hint:"Fogo \xb7 Folha \xb7 Forno \xb7 Formiga"},{id:"fu",letter:"FU",emoji:"⽕",word:"Fumo",hint:"Futebol \xb7 Furo \xb7 Futuro \xb7 Fungo"}]},{id:"silabas-g",title:"Letra G",subtitle:"GA \xb7 GE \xb7 GI \xb7 GO \xb7 GU",icon:"\uD83D\uDC31",color:"#84cc16",cards:[{id:"ga",letter:"GA",emoji:"\uD83D\uDC31",word:"Gato",hint:"Galinha \xb7 Ganso \xb7 Garfo \xb7 Gavi\xe3o"},{id:"ge",letter:"GE",emoji:"\uD83E\uDDCA",word:"Gelo",hint:"Gente \xb7 Gelado \xb7 Gengibre \xb7 Gesto"},{id:"gi",letter:"GI",emoji:"\uD83C\uDF3B",word:"Girassol",hint:"Girafa \xb7 Gin\xe1sio \xb7 Gigante \xb7 Gira"},{id:"go",letter:"GO",emoji:"\uD83D\uDCA7",word:"Gota",hint:"Gordo \xb7 Gorila \xb7 Golfe \xb7 Governo"},{id:"gu",letter:"GU",emoji:"\uD83C\uDF02",word:"Guarda-chuva",hint:"Guitarra \xb7 Guloso \xb7 Guerra \xb7 Guia"}]},{id:"silabas-l",title:"Letra L",subtitle:"LA \xb7 LE \xb7 LI \xb7 LO \xb7 LU",icon:"\uD83C\uDF19",color:"#8b5cf6",cards:[{id:"la",letter:"LA",emoji:"\uD83C\uDFDE️",word:"Lago",hint:"Lata \xb7 Lavar \xb7 Laranja \xb7 Lagarto"},{id:"le",letter:"LE",emoji:"\uD83E\uDD81",word:"Le\xe3o",hint:"Leite \xb7 Ler \xb7 Lento \xb7 Len\xe7ol"},{id:"li",letter:"LI",emoji:"\uD83D\uDCDA",word:"Livro",hint:"Li\xe7\xe3o \xb7 Liga \xb7 Lim\xe3o \xb7 Lindo"},{id:"lo",letter:"LO",emoji:"\uD83D\uDC3A",word:"Lobo",hint:"Loja \xb7 Logo \xb7 Longe \xb7 Lou\xe7a"},{id:"lu",letter:"LU",emoji:"\uD83C\uDF19",word:"Lua",hint:"Luva \xb7 Luta \xb7 Lugar \xb7 Lume"}]},{id:"silabas-m",title:"Letra M",subtitle:"MA \xb7 ME \xb7 MI \xb7 MO \xb7 MU",icon:"\uD83C\uDF0A",color:"#10b981",cards:[{id:"ma",letter:"MA",emoji:"\uD83C\uDF4E",word:"Ma\xe7\xe3",hint:"Mala \xb7 Mapa \xb7 Mago \xb7 Macaco"},{id:"me",letter:"ME",emoji:"\uD83C\uDF6F",word:"Mel",hint:"Mesa \xb7 Medo \xb7 Meias \xb7 Melancia"},{id:"mi",letter:"MI",emoji:"\uD83D\uDC2D",word:"Rato",hint:"Mina \xb7 Mimo \xb7 Milho \xb7 Mi\xfado"},{id:"mo",letter:"MO",emoji:"\uD83C\uDFCD️",word:"Mota",hint:"Mola \xb7 Monte \xb7 Mochila \xb7 Morada"},{id:"mu",letter:"MU",emoji:"\uD83C\uDFB5",word:"M\xfasica",hint:"Muro \xb7 Muitos \xb7 Mudo \xb7 Mundial"}]},{id:"silabas-n",title:"Letra N",subtitle:"NA \xb7 NE \xb7 NI \xb7 NO \xb7 NU",icon:"\uD83C\uDF19",color:"#6366f1",cards:[{id:"na",letter:"NA",emoji:"\uD83C\uDFCA",word:"Nadar",hint:"Navio \xb7 Nariz \xb7 Natal \xb7 Natureza"},{id:"ne",letter:"NE",emoji:"❄️",word:"Neve",hint:"Neto \xb7 Negro \xb7 Negar \xb7 Necess\xe1rio"},{id:"ni",letter:"NI",emoji:"\uD83D\uDC26",word:"Ninho",hint:"Ninja \xb7 Nitido \xb7 N\xedvel \xb7 Ningu\xe9m"},{id:"no",letter:"NO",emoji:"\uD83C\uDF19",word:"Noite",hint:"Nota \xb7 Nome \xb7 Nobre \xb7 Noivo"},{id:"nu",letter:"NU",emoji:"☁️",word:"Nuvem",hint:"N\xfamero \xb7 Nulo \xb7 Nutri\xe7\xe3o \xb7 Nunca"}]},{id:"silabas-p",title:"Letra P",subtitle:"PA \xb7 PE \xb7 PI \xb7 PO \xb7 PU",icon:"\uD83E\uDD86",color:"#f59e0b",cards:[{id:"pa",letter:"PA",emoji:"\uD83E\uDD86",word:"Pato",hint:"P\xe3o \xb7 Papa \xb7 Palha \xb7 Papagaio"},{id:"pe",letter:"PE",emoji:"\uD83D\uDC1F",word:"Peixe",hint:"Pele \xb7 Pena \xb7 Pedra \xb7 Pensar"},{id:"pi",letter:"PI",emoji:"\uD83C\uDF80",word:"Pipa",hint:"Pico \xb7 Pingo \xb7 Pilha \xb7 Pintainho"},{id:"po",letter:"PO",emoji:"\uD83D\uDC34",word:"Potro",hint:"Povo \xb7 Pote \xb7 Pomba \xb7 Polvo"},{id:"pu",letter:"PU",emoji:"\uD83D\uDC3E",word:"Pulga",hint:"Pulo \xb7 Pura \xb7 Pudim \xb7 Pulseira"}]},{id:"silabas-r",title:"Letra R",subtitle:"RA \xb7 RE \xb7 RI \xb7 RO \xb7 RU",icon:"\uD83C\uDF39",color:"#ef4444",cards:[{id:"ra",letter:"RA",emoji:"\uD83D\uDC38",word:"Rana",hint:"Rato \xb7 Ramo \xb7 Rapaz \xb7 Rainha"},{id:"re",letter:"RE",emoji:"\uD83D\uDC51",word:"Rei",hint:"Rede \xb7 Rel\xf3gio \xb7 Rem\xe9dio \xb7 Regra"},{id:"ri",letter:"RI",emoji:"\uD83D\uDE02",word:"Rir",hint:"Rio \xb7 Rico \xb7 Risco \xb7 Ritmo"},{id:"ro",letter:"RO",emoji:"\uD83C\uDF39",word:"Rosa",hint:"Roda \xb7 Roupa \xb7 Rob\xf4 \xb7 Rochedo"},{id:"ru",letter:"RU",emoji:"\uD83D\uDEE3️",word:"Rua",hint:"Ru\xeddo \xb7 Rural \xb7 Rumo \xb7 Rugido"}]},{id:"silabas-s",title:"Letra S",subtitle:"SA \xb7 SE \xb7 SI \xb7 SO \xb7 SU",icon:"☀️",color:"#f43f5e",cards:[{id:"sa",letter:"SA",emoji:"\uD83D\uDC38",word:"Sapo",hint:"Saco \xb7 Sala \xb7 Salto \xb7 Sapato"},{id:"se",letter:"SE",emoji:"\uD83C\uDF3E",word:"Seco",hint:"Sede \xb7 Seta \xb7 Serra \xb7 Setembro"},{id:"si",letter:"SI",emoji:"\uD83D\uDD14",word:"Sino",hint:"Sinal \xb7 S\xedtio \xb7 Sinto \xb7 Sil\xeancio"},{id:"so",letter:"SO",emoji:"☀️",word:"Sol",hint:"Sopa \xb7 Sono \xb7 Soco \xb7 Sonho"},{id:"su",letter:"SU",emoji:"\uD83E\uDDC3",word:"Sumo",hint:"Sul \xb7 Suave \xb7 Susto \xb7 Subir"}]},{id:"silabas-t",title:"Letra T",subtitle:"TA \xb7 TE \xb7 TI \xb7 TO \xb7 TU",icon:"\uD83D\uDC2F",color:"#0ea5e9",cards:[{id:"ta",letter:"TA",emoji:"\uD83E\uDD41",word:"Tambor",hint:"Tapa \xb7 Tarde \xb7 Tarefa \xb7 Tartaruga"},{id:"te",letter:"TE",emoji:"\uD83E\uDDF8",word:"Teddy",hint:"Tela \xb7 Tempo \xb7 Telefone \xb7 Terra"},{id:"ti",letter:"TI",emoji:"\uD83D\uDC2F",word:"Tigre",hint:"Tio \xb7 Tipo \xb7 T\xedtulo \xb7 Tinha"},{id:"to",letter:"TO",emoji:"\uD83C\uDF45",word:"Tomate",hint:"Toca \xb7 Torta \xb7 Touro \xb7 Torneira"},{id:"tu",letter:"TU",emoji:"\uD83E\uDD88",word:"Tubar\xe3o",hint:"Tubo \xb7 Tudo \xb7 Tulipa \xb7 Turbina"}]},{id:"silabas-v",title:"Letra V",subtitle:"VA \xb7 VE \xb7 VI \xb7 VO \xb7 VU",icon:"\uD83E\uDD8B",color:"#d946ef",cards:[{id:"va",letter:"VA",emoji:"\uD83D\uDC04",word:"Vaca",hint:"Vale \xb7 Varanda \xb7 Vassoura \xb7 Vampiro"},{id:"ve",letter:"VE",emoji:"\uD83D\uDD6F️",word:"Vela",hint:"Vento \xb7 Verde \xb7 Verdade \xb7 Veludo"},{id:"vi",letter:"VI",emoji:"\uD83C\uDF77",word:"Vinho",hint:"Vida \xb7 Vila \xb7 Vis\xe3o \xb7 Viagem"},{id:"vo",letter:"VO",emoji:"✈️",word:"Voar",hint:"Voz \xb7 Volta \xb7 Volume \xb7 Volunt\xe1rio"},{id:"vu",letter:"VU",emoji:"\uD83C\uDF0B",word:"Vulc\xe3o",hint:"Vulner\xe1vel \xb7 Vulto \xb7 Vulgaria"}]},{id:"numeros",title:"N\xfameros",subtitle:"UM \xb7 DOIS \xb7 TR\xcaS...",icon:"\uD83D\uDD22",color:"#f97316",cards:[{id:"um",letter:"UM",emoji:"1️⃣",word:"Um",hint:"Uma \xb7 \xdanico \xb7 Unidade"},{id:"dois",letter:"DOIS",emoji:"2️⃣",word:"Dois",hint:"Duplo \xb7 Segundo \xb7 Par"},{id:"tres",letter:"TR\xcaS",emoji:"3️⃣",word:"Tr\xeas",hint:"Triplo \xb7 Terceiro \xb7 Trio"},{id:"quatro",letter:"QUATRO",emoji:"4️⃣",word:"Quatro",hint:"Qu\xe1druplo \xb7 Quarto \xb7 Quadrado"},{id:"cinco",letter:"CINCO",emoji:"5️⃣",word:"Cinco",hint:"Quinteto \xb7 Quinto \xb7 Pentagon"},{id:"seis",letter:"SEIS",emoji:"6️⃣",word:"Seis",hint:"Sexto \xb7 Sexteto \xb7 Hex\xe1gono"},{id:"sete",letter:"SETE",emoji:"7️⃣",word:"Sete",hint:"S\xe9timo \xb7 Semana \xb7 Arco-\xedris"},{id:"oito",letter:"OITO",emoji:"8️⃣",word:"Oito",hint:"Oitavo \xb7 Polvo \xb7 Ara\xf1a"},{id:"nove",letter:"NOVE",emoji:"9️⃣",word:"Nove",hint:"Nono \xb7 Novembro \xb7 Planeta"},{id:"dez",letter:"DEZ",emoji:"\uD83D\uDD1F",word:"Dez",hint:"D\xe9cimo \xb7 Dezembro \xb7 Dedos"}]},{id:"cores",title:"Cores",subtitle:"VERMELHO \xb7 AZUL \xb7 VERDE...",icon:"\uD83C\uDFA8",color:"#a855f7",cards:[{id:"vermelho",letter:"VERMELHO",emoji:"\uD83D\uDD34",word:"Vermelho",hint:"Rosa \xb7 Tomate \xb7 Ma\xe7\xe3 \xb7 Cora\xe7\xe3o"},{id:"azul",letter:"AZUL",emoji:"\uD83D\uDD35",word:"Azul",hint:"Mar \xb7 C\xe9u \xb7 Mirtilo \xb7 Baleia"},{id:"verde",letter:"VERDE",emoji:"\uD83D\uDFE2",word:"Verde",hint:"Erva \xb7 Folha \xb7 Sapo \xb7 Ma\xe7\xe3"},{id:"amarelo",letter:"AMARELO",emoji:"\uD83D\uDFE1",word:"Amarelo",hint:"Sol \xb7 Banana \xb7 Patinho \xb7 Girassol"},{id:"laranja",letter:"LARANJA",emoji:"\uD83D\uDFE0",word:"Laranja",hint:"Fruta \xb7 Cenoura \xb7 Tigre \xb7 Outono"},{id:"roxo",letter:"ROXO",emoji:"\uD83D\uDFE3",word:"Roxo",hint:"Uva \xb7 Lavanda \xb7 Beringela \xb7 Violeta"},{id:"rosa",letter:"ROSA",emoji:"\uD83C\uDF38",word:"Rosa",hint:"Flor \xb7 Porco \xb7 Flamingo \xb7 Bubble-gum"},{id:"branco",letter:"BRANCO",emoji:"⬜",word:"Branco",hint:"Neve \xb7 Leite \xb7 Nuvem \xb7 Algod\xe3o"},{id:"preto",letter:"PRETO",emoji:"⬛",word:"Preto",hint:"Noite \xb7 Gato \xb7 Pneu \xb7 Carv\xe3o"},{id:"castanho",letter:"CASTANHO",emoji:"\uD83D\uDFEB",word:"Castanho",hint:"Terra \xb7 Madeira \xb7 Chocolate \xb7 Urso"}]},{id:"animais",title:"Animais",subtitle:"Todos os animais",icon:"\uD83E\uDD81",color:"#22c55e",cards:[{id:"cao",letter:"C\xc3O",emoji:"\uD83D\uDC15",word:"C\xe3o",hint:"Canino \xb7 Cachorro \xb7 Companheiro"},{id:"gato2",letter:"GATO",emoji:"\uD83D\uDC08",word:"Gato",hint:"Felino \xb7 Miar \xb7 Bigodes"},{id:"cavalo",letter:"CAVALO",emoji:"\uD83D\uDC34",word:"Cavalo",hint:"Patas \xb7 Crina \xb7 Galope"},{id:"elefante",letter:"ELEFANTE",emoji:"\uD83D\uDC18",word:"Elefante",hint:"Tromba \xb7 Presa \xb7 Savana"},{id:"leao2",letter:"LE\xc3O",emoji:"\uD83E\uDD81",word:"Le\xe3o",hint:"Rei \xb7 Juba \xb7 \xc1frica"},{id:"girafa",letter:"GIRAFA",emoji:"\uD83E\uDD92",word:"Girafa",hint:"Pesco\xe7o \xb7 Alto \xb7 Savana"},{id:"pinguim",letter:"PINGUIM",emoji:"\uD83D\uDC27",word:"Pinguim",hint:"Gelo \xb7 Nadar \xb7 Ant\xe1rtida"},{id:"borboleta",letter:"BORBOLETA",emoji:"\uD83E\uDD8B",word:"Borboleta",hint:"Asas \xb7 Colorida \xb7 Flor"},{id:"coelho2",letter:"COELHO",emoji:"\uD83D\uDC30",word:"Coelho",hint:"Orelhas \xb7 Saltitar \xb7 Cenoura"},{id:"pato2",letter:"PATO",emoji:"\uD83E\uDD86",word:"Pato",hint:"Nadar \xb7 Grasnar \xb7 Lago"}]},{id:"corpo",title:"O Meu Corpo",subtitle:"Cabe\xe7a \xb7 M\xe3os \xb7 P\xe9s...",icon:"\uD83E\uDDD2",color:"#f59e0b",cards:[{id:"cabeca",letter:"CABE\xc7A",emoji:"\uD83E\uDDE0",word:"Cabe\xe7a",hint:"C\xe9rebro \xb7 Pensar \xb7 Cr\xe2nio"},{id:"olhos",letter:"OLHOS",emoji:"\uD83D\uDC40",word:"Olhos",hint:"Ver \xb7 Piscar \xb7 Cores"},{id:"nariz",letter:"NARIZ",emoji:"\uD83D\uDC43",word:"Nariz",hint:"Cheirar \xb7 Respirar \xb7 Espirrar"},{id:"boca",letter:"BOCA",emoji:"\uD83D\uDC44",word:"Boca",hint:"Falar \xb7 Comer \xb7 Sorrir"},{id:"orelhas",letter:"ORELHAS",emoji:"\uD83D\uDC42",word:"Orelhas",hint:"Ouvir \xb7 Sons \xb7 M\xfasica"},{id:"maos",letter:"M\xc3OS",emoji:"\uD83D\uDE4C",word:"M\xe3os",hint:"Tocar \xb7 Escrever \xb7 Bater"},{id:"pes",letter:"P\xc9S",emoji:"\uD83E\uDDB6",word:"P\xe9s",hint:"Andar \xb7 Correr \xb7 Saltar"},{id:"corac\xe3o",letter:"CORA\xc7\xc3O",emoji:"❤️",word:"Cora\xe7\xe3o",hint:"Amor \xb7 Batimento \xb7 Vida"}]},{id:"familia",title:"Fam\xedlia",subtitle:"M\xe3e \xb7 Pai \xb7 Irm\xe3o...",icon:"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66",color:"#e11d48",cards:[{id:"mae",letter:"M\xc3E",emoji:"\uD83D\uDC69",word:"M\xe3e",hint:"Amor \xb7 Cuidar \xb7 Abra\xe7o"},{id:"pai",letter:"PAI",emoji:"\uD83D\uDC68",word:"Pai",hint:"Forte \xb7 Prote\xe7\xe3o \xb7 Brincar"},{id:"irmao",letter:"IRM\xc3O",emoji:"\uD83D\uDC66",word:"Irm\xe3o",hint:"Brincar \xb7 Partilhar \xb7 Fam\xedlia"},{id:"irma",letter:"IRM\xc3",emoji:"\uD83D\uDC67",word:"Irm\xe3",hint:"Amigas \xb7 Brincar \xb7 Fam\xedlia"},{id:"avo",letter:"AV\xd4",emoji:"\uD83D\uDC74",word:"Av\xf4",hint:"S\xe1bio \xb7 Velho \xb7 Hist\xf3rias"},{id:"avo2",letter:"AV\xd3",emoji:"\uD83D\uDC75",word:"Av\xf3",hint:"Mimos \xb7 Cozinhar \xb7 Amor"},{id:"bebe",letter:"BEB\xc9",emoji:"\uD83D\uDC76",word:"Beb\xe9",hint:"Pequeno \xb7 Dormir \xb7 Chorar"},{id:"tio",letter:"TIO",emoji:"\uD83E\uDDD4",word:"Tio",hint:"Divertido \xb7 Familiar \xb7 Natal"}]},{id:"palavras",title:"Palavras",subtitle:"Ler palavras simples",icon:"\uD83D\uDCAC",color:"#14b8a6",cards:[{id:"bola",letter:"BOLA",emoji:"⚽",word:"Bola"},{id:"gato",letter:"GATO",emoji:"\uD83D\uDC31",word:"Gato"},{id:"casa",letter:"CASA",emoji:"\uD83C\uDFE0",word:"Casa"},{id:"pato",letter:"PATO",emoji:"\uD83E\uDD86",word:"Pato"},{id:"leao",letter:"LE\xc3O",emoji:"\uD83E\uDD81",word:"Le\xe3o"},{id:"mesa",letter:"MESA",emoji:"\uD83E\uDE91",word:"Mesa"},{id:"sapo",letter:"SAPO",emoji:"\uD83D\uDC38",word:"Sapo"},{id:"porta",letter:"PORTA",emoji:"\uD83D\uDEAA",word:"Porta"},{id:"livro",letter:"LIVRO",emoji:"\uD83D\uDCDA",word:"Livro"},{id:"cama",letter:"CAMA",emoji:"\uD83D\uDECF️",word:"Cama"},{id:"carro",letter:"CARRO",emoji:"\uD83D\uDE97",word:"Carro"},{id:"flor",letter:"FLOR",emoji:"\uD83C\uDF38",word:"Flor"},{id:"peixe",letter:"PEIXE",emoji:"\uD83D\uDC1F",word:"Peixe"},{id:"arco",letter:"ARCO",emoji:"\uD83C\uDF08",word:"Arco-\xedris"},{id:"borboleta2",letter:"BORBOLETA",emoji:"\uD83E\uDD8B",word:"Borboleta"}]},{id:"frases",title:"Frases",subtitle:"Ler frases simples",icon:"\uD83D\uDCD6",color:"#6366f1",cards:[{id:"f1",letter:"O gato \xe9 bonito.",emoji:"\uD83D\uDC31",word:"O gato \xe9 bonito."},{id:"f2",letter:"A bola \xe9 redonda.",emoji:"⚽",word:"A bola \xe9 redonda."},{id:"f3",letter:"O sapo \xe9 verde.",emoji:"\uD83D\uDC38",word:"O sapo \xe9 verde."},{id:"f4",letter:"A lua brilha \xe0 noite.",emoji:"\uD83C\uDF19",word:"A lua brilha \xe0 noite."},{id:"f5",letter:"O pato nada no lago.",emoji:"\uD83E\uDD86",word:"O pato nada no lago."},{id:"f6",letter:"O le\xe3o \xe9 o rei da selva.",emoji:"\uD83E\uDD81",word:"O le\xe3o \xe9 o rei da selva."},{id:"f7",letter:"A borboleta \xe9 colorida.",emoji:"\uD83E\uDD8B",word:"A borboleta \xe9 colorida."},{id:"f8",letter:"O coelho come cenouras.",emoji:"\uD83D\uDC30",word:"O coelho come cenouras."},{id:"f9",letter:"O sol brilha durante o dia.",emoji:"☀️",word:"O sol brilha durante o dia."},{id:"f10",letter:"Eu gosto de ler livros.",emoji:"\uD83D\uDCDA",word:"Eu gosto de ler livros."}]}],p=[{label:"\uD83D\uDD24 Primeiros Passos",ids:["vogais"]},{label:"\uD83D\uDD21 S\xedlabas",ids:["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"]},{label:"\uD83C\uDF0D O Mundo \xe0 Volta",ids:["animais","cores","numeros","corpo","familia"]},{label:"\uD83D\uDCD6 Ler e Escrever",ids:["palavras","frases"]}],u={"primeira-estrela":{emoji:"⭐",label:"Primeira Estrela!",desc:"Ganhaste a tua primeira estrela"},"primeira-licao":{emoji:"\uD83C\uDF93",label:"Primeira Li\xe7\xe3o!",desc:"Completaste a tua primeira li\xe7\xe3o"},"tres-estrelas":{emoji:"\uD83C\uDF1F",label:"Super Estrela!",desc:"Tiveste 3 estrelas numa li\xe7\xe3o"},coleccionador:{emoji:"\uD83D\uDC8E",label:"Coleccionador!",desc:"10 favoritos guardados"},"vogais-mestre":{emoji:"\uD83D\uDD24",label:"Mestre das Vogais!",desc:"Completaste as Vogais com 3 estrelas"},leitor:{emoji:"\uD83D\uDCD6",label:"Leitor!",desc:"Completaste todas as s\xedlabas"},explorador:{emoji:"\uD83C\uDF0D",label:"Explorador!",desc:"Completaste O Mundo \xe0 Volta"},"numeros-mestre":{emoji:"\uD83D\uDD22",label:"Mestre dos N\xfameros!",desc:"Completaste os N\xfameros com 3 estrelas"}},m=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=(0,s.keyframes)`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`,g=(0,s.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,f=(0,s.keyframes)`
  0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg);  opacity: 1; }
  100% { transform: scale(1)   rotate(0deg);  opacity: 1; }
`,x=i().div`
  min-height: 100%;
  background: #0a0e1a;
  padding-bottom: 48px;
  overflow-y: auto;
  font-family: 'Nunito', 'Segoe UI', system-ui, -apple-system, sans-serif;
`,b=i().div`
  background: linear-gradient(160deg, #1a0040 0%, #0d1f5e 45%, #062040 100%);
  padding: 28px 20px 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 90% at 15% 25%, #9333ea55 0%, transparent 65%),
      radial-gradient(ellipse 50% 70% at 85% 75%, #06b6d460 0%, transparent 65%),
      radial-gradient(ellipse 40% 50% at 50% 50%, #ec489940 0%, transparent 70%);
    pointer-events: none;
  }

  /* floating bubbles decoration */
  &::after {
    content: '⭐ 🌈 ✨ 🌟';
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 14px;
    opacity: 0.3;
    pointer-events: none;
    letter-spacing: 4px;
  }
`,w=i().div`position: relative; z-index: 1;`,y=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,v=i().h1`
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, #fde68a 0%, #fb7185 40%, #a78bfa 70%, #60a5fa 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${g} 2.5s linear infinite;
  text-shadow: none;
`,$=i().div`
  font-size: 16px;
  font-weight: 700;
  color: #c4b5fd;
  margin-top: 4px;
  letter-spacing: 0.01em;
`,k=i().div`
  font-size: 72px;
  line-height: 1;
  animation: ${h} 2.5s ease-in-out infinite;
  user-select: none;
  filter: drop-shadow(0 0 16px #a78bfa80);
`,j=i().div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,M=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({color:e})=>e}30;
  border: 2px solid ${({color:e})=>e}70;
  border-radius: 32px;
  padding: 8px 16px;
`,S=i().span`font-size: 20px;`,z=i().span`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,T=i().span`
  font-size: 13px;
  font-weight: 700;
  color: #c4b5fd;
  margin-left: 2px;
`,C=i().div`
  margin-top: 14px;
  background: #ffffff20;
  border-radius: 16px;
  height: 14px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px #00000030;
`,R=i().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, #f59e0b, #ec4899, #a78bfa, #60a5fa);
  background-size: 200% auto;
  border-radius: 16px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${g} 2s linear infinite;
`,_=i().div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #a78bfa;
`,B=i().div`padding: 20px 16px 0;`,I=i().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 20px;
  background: linear-gradient(135deg, #be185d35, #9333ea35);
  border: 2px solid #ec4899;
  border-radius: 24px;
  cursor: pointer;
  gap: 14px;
  margin-bottom: 20px;
  transition: transform ${c.w4.transitions.base}, box-shadow ${c.w4.transitions.base};
  animation: ${m} 0.3s ease both;
  box-shadow: 0 4px 16px #be185d25;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 30px #be185d45;
  }
  &:active { transform: scale(0.97); }
`,A=i().span`font-size: 36px;`,E=i().div`
  flex: 1;
  text-align: left;
`,F=i().div`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,P=i().div`font-size: 14px; font-weight: 600; color: #f9a8d4;`,L=i().div`color: #fb7185; font-size: 24px;`,O=(i().div`
  background: linear-gradient(135deg, #0f2a2a, #101827);
  border: 1.5px solid #34d39955;
  border-radius: 18px;
  padding: 14px 16px;
  margin-bottom: 20px;
  animation: ${m} 0.32s ease both;
`,i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`,i().div`
  font-size: 14px;
  font-weight: 800;
  color: #ecfeff;
`,i().div`
  font-size: 11px;
  color: #94a3b8;
  margin-top: 2px;
`,i().button`
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #34d399, #0ea5e9);
  color: #06202a;
  font-size: 11px;
  font-weight: 800;
  padding: 10px 12px;
  cursor: pointer;
`,i().div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`,i().div`
  background: #ffffff08;
  border: 1px solid #ffffff12;
  border-radius: 12px;
  padding: 10px 11px;
`,i().div`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 4px;
`,i().div`
  font-size: 13px;
  font-weight: 700;
  color: #e2e8f0;
  word-break: break-word;
`,i().div`
  margin-bottom: 24px;
  animation: ${m} 0.35s ease both;
  animation-delay: ${({index:e})=>60*e}ms;
`),H=i().div`
  font-size: 14px;
  font-weight: 900;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
  padding-left: 4px;
`,D=i().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`,N=i().button`
  display: flex;
  flex-direction: column;
  padding: 18px 16px 16px;
  background: ${({color:e,done:t})=>t?`linear-gradient(145deg, ${e}40, ${e}20)`:"linear-gradient(145deg, #1e2540, #131726)"};
  border: 2.5px solid ${({color:e,done:t})=>t?e+"90":e+"40"};
  border-radius: 28px;
  cursor: pointer;
  text-align: left;
  transition: transform ${c.w4.transitions.base}, box-shadow ${c.w4.transitions.base}, border-color ${c.w4.transitions.base};
  position: relative;
  overflow: hidden;
  box-shadow: ${({color:e})=>`0 4px 16px ${e}20`};

  &::before {
    content: '';
    position: absolute;
    top: -20px; right: -20px;
    width: 80px; height: 80px;
    border-radius: 50%;
    background: ${({color:e})=>e}25;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30px; left: -10px;
    width: 70px; height: 70px;
    border-radius: 50%;
    background: ${({color:e})=>e}15;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px) scale(1.03);
    border-color: ${({color:e})=>e};
    box-shadow: 0 14px 32px ${({color:e})=>e}40;
  }

  &:active { transform: scale(0.96); }
`,V=i().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`,G=i().div`font-size: 48px; line-height: 1; filter: drop-shadow(0 2px 6px #00000040);`,q=i().div`
  font-size: 11px;
  font-weight: 800;
  color: ${({color:e})=>e};
  background: ${({color:e})=>e}25;
  border: 1.5px solid ${({color:e})=>e}60;
  border-radius: 12px;
  padding: 3px 9px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Y=i().div`
  font-size: 16px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 3px;
  letter-spacing: -0.01em;
`,W=i().div`
  font-size: 11px;
  font-weight: 600;
  color: #7c8db5;
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,J=i().div`
  display: flex;
  gap: 4px;
  align-items: center;
`,X=i().span`
  font-size: 20px;
  opacity: ${({lit:e})=>e?1:.18};
  filter: ${({lit:e,color:t})=>e?`drop-shadow(0 0 6px ${t})`:"none"};
  animation: ${({lit:e})=>e?f:"none"} 0.5s ease both;
  animation-delay: ${({delay:e})=>e}ms;
`,U=i().div`
  margin-left: auto;
  font-size: 11px;
  font-weight: 700;
  color: #4b5980;
`,K=i().div`
  margin-top: 4px;
  animation: ${m} 0.4s ease both;
`,Q=i().div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Z=i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #1e2540, #131726);
  border: 2px solid #a78bfa50;
  border-radius: 20px;
  padding: 10px 14px;
  box-shadow: 0 4px 12px #a78bfa15;
`,ee=i().span`font-size: 26px;`,et=i().span`
  font-size: 14px;
  font-weight: 800;
  color: #e2d9ff;
`;function er({progress:e,speechDebug:t,onSelectLesson:r,onOpenFavorites:a,onSpeechTest:n}){let i=d.length,s=Object.values(e.lessons).filter(e=>e.completed).length,c=Math.round(s/i*100);return(0,o.jsxs)(x,{children:[(0,o.jsx)(b,{children:(0,o.jsxs)(w,{children:[(0,o.jsxs)(y,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(v,{children:"L\xeaBem"}),(0,o.jsx)($,{children:"Vamos aprender a ler! \uD83D\uDE80✨"})]}),(0,o.jsx)(k,{children:"\uD83E\uDD89"})]}),(0,o.jsxs)(j,{children:[(0,o.jsxs)(M,{color:"#f59e0b",children:[(0,o.jsx)(S,{children:"⭐"}),(0,o.jsx)(z,{children:e.totalStars}),(0,o.jsx)(T,{children:"estrelas"})]}),(0,o.jsxs)(M,{color:"#7c3aed",children:[(0,o.jsx)(S,{children:"\uD83C\uDFC6"}),(0,o.jsxs)(z,{children:["N\xedvel ",e.level]})]}),(0,o.jsxs)(M,{color:"#10b981",children:[(0,o.jsx)(S,{children:"\uD83D\uDD25"}),(0,o.jsx)(z,{children:e.streak}),(0,o.jsx)(T,{children:"dias"})]})]}),(0,o.jsx)(C,{children:(0,o.jsx)(R,{pct:c})}),(0,o.jsxs)(_,{children:[(0,o.jsxs)("span",{children:[s," de ",i," li\xe7\xf5es"]}),(0,o.jsxs)("span",{children:[c,"% completo"]})]})]})}),(0,o.jsxs)(B,{children:[!1,(0,o.jsxs)(I,{onClick:a,children:[(0,o.jsx)(A,{children:"❤️"}),(0,o.jsxs)(E,{children:[(0,o.jsx)(F,{children:"Os meus Favoritos"}),(0,o.jsxs)(P,{children:[e.favorites.length," cart\xf5es guardados"]})]}),(0,o.jsx)(L,{children:(0,o.jsx)(l.In,{name:"chevron-right",size:20})})]}),p.map((t,a)=>{let n=t.ids.map(e=>d.find(t=>t.id===e)).filter(Boolean);return(0,o.jsxs)(O,{index:a,children:[(0,o.jsx)(H,{children:t.label}),(0,o.jsx)(D,{children:n.map(t=>{let a=e.lessons[t.id],n=a?.stars??0,i=a?.completed??!1;return(0,o.jsxs)(N,{color:t.color,done:i,onClick:()=>r(t.id),children:[(0,o.jsxs)(V,{children:[(0,o.jsx)(G,{children:t.icon}),i&&(0,o.jsx)(q,{color:t.color,children:"✓ Feito"})]}),(0,o.jsx)(Y,{children:t.title}),(0,o.jsx)(W,{children:t.subtitle}),(0,o.jsxs)(J,{children:[[1,2,3].map(e=>(0,o.jsx)(X,{lit:n>=e,color:t.color,delay:80*e,children:"⭐"},e)),(0,o.jsxs)(U,{children:[t.cards.length," cart\xf5es"]})]})]},t.id)})})]},t.label)}),e.badges.length>0&&(0,o.jsxs)(K,{children:[(0,o.jsx)(H,{children:"\uD83C\uDFC5 Conquistas"}),(0,o.jsx)(Q,{children:e.badges.map(e=>{let t=u[e];return t?(0,o.jsxs)(Z,{title:t.desc,children:[(0,o.jsx)(ee,{children:t.emoji}),(0,o.jsx)(et,{children:t.label})]},e):null})})]})]})]})}let eo=null,ea=null,en=[],ei=!1,es=null,el="idle",ec=null,ed=new Set,ep=["Joana","Luciana","Eddy","Flo","Grandma","Grandpa","Reed","Rocko","Sandy","Shelley"];function eu(){return/Chrome/i.test(window.navigator.userAgent)&&!/Edg|OPR|CriOS/i.test(window.navigator.userAgent)}function em(){let e=ex();for(let t of ed)t(e)}function eh(){return 0===en.length&&(en=window.speechSynthesis.getVoices()),en}function eg(){if(en=window.speechSynthesis.getVoices(),ec&&en.length>0){let e=ec;ec=null,window.setTimeout(()=>eb(e),0)}return em(),en}function ef(){let e=eh();if(eu())return e.find(e=>e.default&&e.lang.toLowerCase().startsWith("pt"))??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??null;for(let t of ep){let r=e.find(e=>e.name.toLowerCase()===t.toLowerCase());if(r)return r}return e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??e.find(e=>e.default)??null}function ex(){if(!("speechSynthesis"in window))return{supported:!1,voicesCount:0,preferredVoiceName:null,preferredVoiceLang:null,availableVoiceNames:[],speaking:!1,pending:!1,paused:!1,lastEvent:el,lastError:es};let e=window.speechSynthesis,t=ef(),r=eh();return{supported:!0,voicesCount:r.length,preferredVoiceName:t?.name??null,preferredVoiceLang:t?.lang??null,availableVoiceNames:r.filter(e=>e.lang.toLowerCase().startsWith("pt")).slice(0,6).map(e=>`${e.name} (${e.lang})`),speaking:e.speaking,pending:e.pending,paused:e.paused,lastEvent:el,lastError:es}}function eb(e){let t=window.speechSynthesis,r=e.trim(),o=eh();if(!r)return;if(0===o.length){ec=r,el="waiting-for-voices",em(),window.setTimeout(()=>{ec===r&&(ec=null,eb(r))},400);return}null!==ea&&(window.clearTimeout(ea),ea=null),es=null,el="queued",(eo=new SpeechSynthesisUtterance(r)).lang=eu()?"pt-BR":"pt-PT",eo.rate=.8,eo.pitch=1.1;let a=ef();a&&!eu()?(eo.voice=a,eo.lang=a.lang):a&&(eo.lang=a.lang),eo.onstart=()=>{el="start",em()},eo.onend=()=>{eo=null,el="end",em()},eo.onerror=e=>{eo=null,el="error",es=e.error,em()},t.resume(),t.speak(eo),em()}function ew(e){if(!("speechSynthesis"in window))return;let t=window.speechSynthesis,r=e.trim();if(r){if(null!==ea&&(window.clearTimeout(ea),ea=null),t.speaking||t.pending){el="cancel",t.cancel(),ea=window.setTimeout(()=>eb(r),150),em();return}eb(r)}}function ey(){ew("Ola, teste de voz do LeBem. Esta e a voz do leitor.")}(0,s.keyframes)`from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); }`;let ev=(0,s.keyframes)`0%,100%{ transform: translateX(0); } 25%{ transform: translateX(-10px); } 75%{ transform: translateX(10px); }`,e$=(0,s.keyframes)`0%{ transform: scale(1); } 50%{ transform: scale(1.2); } 100%{ transform: scale(1); }`,ek=(0,s.keyframes)`from{ transform: translateY(0) scale(1); opacity: 1; } to{ transform: translateY(-120px) scale(0.3) rotate(360deg); opacity: 0; }`,ej=(0,s.keyframes)`0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-12px); }`,eM=i().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${c.w4.colors.mainBg};
  font-family: ${c.w4.typography.fontFamily};
  overflow: hidden;
`,eS=i().div`
  display: flex;
  align-items: center;
  padding: 16px 20px 0;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  flex-shrink: 0;
`,ez=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${c.w4.colors.mainText};
  flex-shrink: 0;
  transition: background ${c.w4.transitions.base};
  &:hover { background: ${c.w4.colors.sidebarHover}; }
`,eT=i().div`
  font-size: 16px;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  flex: 1;
`,eC=i().div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`,eR=i().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({active:e,done:t,color:r})=>e?r:t?r+"80":c.w4.colors.border};
  transition: background ${c.w4.transitions.base}, transform ${c.w4.transitions.base};
  transform: ${({active:e})=>e?"scale(1.4)":"scale(1)"};
`,e_=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  gap: 20px;
`,eB=i().div`
  font-size: 110px;
  line-height: 1;
  cursor: pointer;
  animation: ${ej} 2.5s ease-in-out infinite;
  filter: drop-shadow(0 8px 24px ${({color:e})=>e}50);
  user-select: none;
  &:hover { animation: ${e$} 0.3s ease; }
`,eI=i().div`
  font-size: 72px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,eA=i().div`
  font-size: 26px;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,eE=i().div`
  font-size: 14px;
  color: ${c.w4.colors.mainTextMuted};
  text-align: center;
`,eF=i().div`
  display: flex;
  gap: 12px;
`,eP=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: ${({color:e,active:t})=>t?e+"30":c.w4.colors.surface};
  border: 2px solid ${({color:e,active:t})=>t?e??"#fff":c.w4.colors.border};
  border-radius: 16px;
  cursor: pointer;
  color: ${({color:e,active:t})=>t?e??"#fff":c.w4.colors.mainText};
  transition: all ${c.w4.transitions.base};
  &:hover { transform: scale(1.1); }
  &:active { transform: scale(0.95); }
`,eL=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 24px;
  flex-shrink: 0;
`,eO=i().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: ${({color:e,disabled:t})=>t?c.w4.colors.surface:e+"20"};
  border: 2px solid ${({color:e,disabled:t})=>t?c.w4.colors.border:e+"60"};
  border-radius: 16px;
  color: ${({color:e,disabled:t})=>t?c.w4.colors.mainTextMuted:e};
  font-family: ${c.w4.typography.fontFamily};
  font-size: 14px;
  font-weight: 600;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all ${c.w4.transitions.base};
  opacity: ${({disabled:e})=>e?.4:1};
  &:hover:not(:disabled) { transform: translateX(${e=>e.disabled?"0":"3px"}); }
`,eH=i().button`
  flex: 1;
  padding: 16px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 16px;
  color: #fff;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity ${c.w4.transitions.base}, transform ${c.w4.transitions.base};
  &:hover { opacity: 0.9; transform: translateY(-2px); }
  &:active { transform: scale(0.97); }
`,eD=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
  gap: 16px;
  overflow: hidden;
`,eN=i().div`
  display: flex;
  gap: 6px;
  width: 100%;
`,eV=i().div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: ${({state:e,color:t})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":"current"===e?t:c.w4.colors.border};
  transition: background ${c.w4.transitions.slow};
`,eG=i().div`
  font-size: 18px;
  font-weight: 600;
  color: ${c.w4.colors.mainTextMuted};
  text-align: center;
`,eq=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${({isShaking:e})=>e?ev:"none"} 0.4s ease;
`,eY=i().div`font-size: 80px; line-height: 1;`,eW=i().div`
  font-size: 20px;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,eJ=i().div`
  font-size: 80px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,eX=i().div`
  display: grid;
  grid-template-columns: ${({count:e})=>e<=2?"1fr 1fr":"repeat(2, 1fr)"};
  gap: 10px;
  width: 100%;
`,eU=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 18px 12px;
  background: ${({state:e})=>"correct"===e?"#10b98120":"wrong"===e?"#ef444420":c.w4.colors.surface};
  border: 3px solid ${({state:e})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":c.w4.colors.border};
  border-radius: 18px;
  cursor: pointer;
  font-family: ${c.w4.typography.fontFamily};
  transition: transform ${c.w4.transitions.base}, border-color ${c.w4.transitions.base}, background ${c.w4.transitions.base};
  animation: ${({isShaking:e})=>e?ev:"none"} 0.4s ease;

  &:hover:not(:disabled) {
    transform: scale(1.04);
    border-color: ${c.w4.colors.accent};
  }
  &:active:not(:disabled) { transform: scale(0.97); }
  &:disabled { cursor: not-allowed; }
`,eK=i().div`font-size: 42px; line-height: 1;`,eQ=i().div`
  font-size: 30px;
  font-weight: 900;
  color: ${({color:e})=>e};
`,eZ=i().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  min-height: 28px;
`,e0=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 20px;
  position: relative;
  overflow: hidden;
`,e1=i().div`
  position: absolute;
  font-size: 28px;
  top: 60%;
  left: ${({x:e})=>e}%;
  animation: ${ek} 1.4s ease ${({delay:e})=>e}s forwards;
  pointer-events: none;
`,e4=i().div`
  font-size: 80px;
  animation: ${ej} 1s ease-in-out infinite;
`,e2=i().div`
  font-size: 32px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-align: center;
`,e5=i().div`
  font-size: 18px;
  color: ${c.w4.colors.mainTextMuted};
`,e3=i().div`
  display: flex;
  gap: 8px;
  font-size: 44px;
`,e6=i().button`
  padding: 16px 40px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 20px;
  color: #fff;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity ${c.w4.transitions.base}, transform ${c.w4.transitions.base};
  &:hover { opacity: 0.9; transform: translateY(-2px); }
`;function e8({lessonId:e,progress:t,onBack:r,onComplete:n,onToggleFavorite:i}){let s=d.find(t=>t.id===e),[c,p]=(0,a.useState)("learn"),[u,m]=(0,a.useState)(0),[h,g]=(0,a.useState)([]),[f,x]=(0,a.useState)(0),[b,w]=(0,a.useState)([]),[y,v]=(0,a.useState)(null),[$,k]=(0,a.useState)(0),[j,M]=(0,a.useState)(!1),[S,z]=(0,a.useState)(!1),[T,C]=(0,a.useState)(!1),R=(0,a.useCallback)(e=>{ew(e),C(!0),setTimeout(()=>C(!1),1200)},[]),_=(0,a.useCallback)(()=>{let e,t;g((e=[...s.cards].sort(()=>Math.random()-.5).slice(0,5),t="palavras"===s.id||"frases"===s.id,e.map(e=>{let r=s.cards.filter(t=>t.id!==e.id).sort(()=>Math.random()-.5).slice(0,3);if(t){let t=[{emoji:e.emoji},...r.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"word-to-emoji",cardId:e.id,promptWord:e.letter,label:"Qual \xe9 a imagem?",options:t,correctIndex:t.findIndex(t=>t.emoji===e.emoji)}}if(Math.random()>.5){let t=[{letter:e.letter},...r.map(e=>({letter:e.letter}))].sort(()=>Math.random()-.5);return{type:"emoji-to-letter",cardId:e.id,promptEmoji:e.emoji,promptWord:e.word,label:"vogais"===s.id?"Come\xe7a com que letra?":"Come\xe7a com que s\xedlaba?",options:t,correctIndex:t.findIndex(t=>t.letter===e.letter)}}let o=[{emoji:e.emoji},...r.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"letter-to-emoji",cardId:e.id,promptLetter:e.letter,label:"Qual \xe9 a imagem?",options:o,correctIndex:o.findIndex(t=>t.emoji===e.emoji)}}))),x(0),w([]),v(null),k(0),p("quiz")},[s]),B=(0,a.useCallback)(e=>{if(null!==y||!h[f])return;let t=e===h[f].correctIndex;v(e),t?(k(e=>e+1),w(e=>[...e,"correct"]),setTimeout(()=>ew(h[f]?.promptWord??h[f]?.promptLetter??""),200)):(M(!0),w(e=>[...e,"wrong"]),setTimeout(()=>M(!1),500)),setTimeout(()=>{f+1>=h.length?(p("result"),z(!0)):(x(e=>e+1),v(null))},900)},[y,h,f]),I=(0,a.useCallback)(()=>{n(e,$,h.length)},[e,$,h.length,n]);if(!s)return null;let A=s.cards[u],E=`${e}:${A?.id}`,F=t.favorites.includes(E),P=$>=h.length?3:$>=h.length-1?2:+($>=Math.ceil(h.length/2));if("learn"===c)return(0,o.jsxs)(eM,{children:[(0,o.jsxs)(eS,{children:[(0,o.jsx)(ez,{onClick:r,children:(0,o.jsx)(l.In,{name:"arrow-left",size:18})}),(0,o.jsx)(eT,{children:s.title}),(0,o.jsx)(eC,{children:s.cards.map((e,t)=>(0,o.jsx)(eR,{active:t===u,done:t<u,color:s.color},t))})]}),(0,o.jsxs)(e_,{children:[(0,o.jsx)(eB,{color:s.color,onClick:()=>R(A.word),children:A.emoji}),(0,o.jsx)(eI,{color:s.color,children:A.letter}),(0,o.jsx)(eA,{children:A.word}),A.hint&&(0,o.jsx)(eE,{children:A.hint}),(0,o.jsxs)(eF,{children:[(0,o.jsx)(eP,{type:"button",color:"#f59e0b",active:T,title:"Ouvir",onClick:()=>R(A.word),children:(0,o.jsx)(l.In,{name:"volume",size:22,color:"#f59e0b"})}),(0,o.jsx)(eP,{type:"button",color:"#ef4444",active:F,title:F?"Remover dos favoritos":"Adicionar aos favoritos",onClick:()=>i(E),children:(0,o.jsx)(l.In,{name:"heart",size:22,color:"#ef4444",fill:F?"#ef4444":"none"})})]})]}),(0,o.jsxs)(eL,{children:[(0,o.jsxs)(eO,{color:s.color,disabled:0===u,onClick:()=>{u>0&&m(e=>e-1)},children:[(0,o.jsx)(l.In,{name:"arrow-left",size:18})," Anterior"]}),u<s.cards.length-1?(0,o.jsxs)(eO,{color:s.color,onClick:()=>{m(e=>e+1),R(s.cards[u+1].word)},children:["Pr\xf3xima ",(0,o.jsx)(l.In,{name:"arrow-right",size:18})]}):(0,o.jsx)(eH,{color:s.color,onClick:_,children:"Fazer Quiz \uD83C\uDFAF"})]})]});if("quiz"===c){let e=h[f];return e?(0,o.jsxs)(eM,{children:[(0,o.jsxs)(eS,{children:[(0,o.jsx)(ez,{onClick:r,children:(0,o.jsx)(l.In,{name:"arrow-left",size:18})}),(0,o.jsxs)(eT,{children:["Quiz — ",s.title]})]}),(0,o.jsxs)(eD,{children:[(0,o.jsx)(eN,{children:h.map((e,t)=>(0,o.jsx)(eV,{color:s.color,state:t<b.length?b[t]:t===f?"current":"pending"},t))}),(0,o.jsx)(eG,{children:e.label}),(0,o.jsxs)(eq,{isShaking:j,color:s.color,children:[e.promptEmoji&&(0,o.jsx)(eY,{children:e.promptEmoji}),e.promptWord&&"word-to-emoji"!==e.type&&(0,o.jsx)(eW,{children:e.promptWord}),"word-to-emoji"===e.type&&(0,o.jsx)(eJ,{color:s.color,children:e.promptWord}),e.promptLetter&&(0,o.jsx)(eJ,{color:s.color,children:e.promptLetter})]}),(0,o.jsx)(eX,{count:e.options.length,children:e.options.map((t,r)=>{let a=null===y?"idle":r===e.correctIndex?"correct":r===y&&y!==e.correctIndex?"wrong":"idle";return(0,o.jsxs)(eU,{state:a,isShaking:"wrong"===a&&j,disabled:null!==y,onClick:()=>B(r),children:[t.emoji&&(0,o.jsx)(eK,{children:t.emoji}),t.letter&&(0,o.jsx)(eQ,{color:s.color,children:t.letter})]},r)})}),(0,o.jsxs)(eZ,{children:[null!==y&&y===e.correctIndex&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.In,{name:"check-circle",size:22,color:"#10b981"})," ",(0,o.jsx)("span",{style:{color:"#10b981"},children:"Muito bem! \uD83C\uDF89"})]}),null!==y&&y!==e.correctIndex&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.In,{name:"x-circle",size:22,color:"#ef4444"})," ",(0,o.jsxs)("span",{style:{color:"#ef4444"},children:["Era ",e.options[e.correctIndex]?.letter??e.options[e.correctIndex]?.emoji,"!"]})]})]})]})]}):null}let L=P>0?["⭐","✨","\uD83C\uDF1F","\uD83D\uDCAB","⭐","✨"].map((e,t)=>({emoji:e,x:10+15*t,delay:.15*t})):[];return(0,o.jsxs)(eM,{children:[(0,o.jsxs)(eS,{children:[(0,o.jsx)(ez,{onClick:r,children:(0,o.jsx)(l.In,{name:"arrow-left",size:18})}),(0,o.jsx)(eT,{children:"Resultado"})]}),(0,o.jsxs)(e0,{children:[S&&L.map((e,t)=>(0,o.jsx)(e1,{x:e.x,delay:e.delay,children:e.emoji},t)),(0,o.jsx)(e4,{children:3===P?"\uD83C\uDFC6":2===P?"\uD83C\uDF89":1===P?"\uD83D\uDC4D":"\uD83D\uDE05"}),(0,o.jsx)(e2,{color:s.color,children:3===P?"Perfeito!":2===P?"Muito bem!":1===P?"Bom esfor\xe7o!":"Continua a tentar!"}),(0,o.jsxs)(e5,{children:[$," de ",h.length," acertos"]}),(0,o.jsx)(e3,{children:[1,2,3].map(e=>(0,o.jsx)("span",{style:{opacity:P>=e?1:.2},children:"⭐"},e))}),(0,o.jsx)(e6,{color:s.color,onClick:I,children:"Continuar →"})]})]})}let e9=(0,s.keyframes)`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,e7=i().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${c.w4.colors.mainBg};
  font-family: ${c.w4.typography.fontFamily};
  overflow: hidden;
`,te=i().div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  border-bottom: 1px solid ${c.w4.colors.border};
  flex-shrink: 0;
`,tt=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${c.w4.colors.mainText};
  transition: background ${c.w4.transitions.base};
  &:hover { background: ${c.w4.colors.sidebarHover}; }
`,tr=i().div`
  font-size: 18px;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,to=i().div`
  margin-left: auto;
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,ta=i().div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 40px;
`,tn=i().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,ti=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px 14px;
  background: ${({color:e})=>e}12;
  border: 2px solid ${({color:e})=>e}30;
  border-radius: 20px;
  position: relative;
  animation: ${e9} 0.3s ease both;
  animation-delay: ${({index:e})=>40*e}ms;
`,ts=i().div`
  font-size: 52px;
  line-height: 1;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover { transform: scale(1.1); transition: transform ${c.w4.transitions.base}; }
`,tl=i().div`
  font-size: 22px;
  font-weight: 900;
  color: ${({color:e})=>e};
  letter-spacing: 0.02em;
`,tc=i().div`
  font-size: 14px;
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,td=i().div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`,tp=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 10px;
  cursor: pointer;
  color: ${c.w4.colors.mainTextMuted};
  transition: all ${c.w4.transitions.base};
  &:hover { color: ${c.w4.colors.mainText}; background: ${c.w4.colors.sidebarHover}; }
`,tu=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: ${c.w4.colors.mainTextMuted};
  font-size: 16px;
  text-align: center;
`;function tm({progress:e,onBack:t,onToggleFavorite:r}){let a=[];for(let t of e.favorites){let[e,r]=t.split(":"),o=d.find(t=>t.id===e),n=o?.cards.find(e=>e.id===r);o&&n&&a.push({cardKey:t,card:n,color:o.color})}return(0,o.jsxs)(e7,{children:[(0,o.jsxs)(te,{children:[(0,o.jsx)(tt,{onClick:t,children:(0,o.jsx)(l.In,{name:"arrow-left",size:18})}),(0,o.jsx)(tr,{children:"❤️ Favoritos"}),(0,o.jsxs)(to,{children:[a.length," guardados"]})]}),(0,o.jsx)(ta,{children:0===a.length?(0,o.jsxs)(tu,{children:[(0,o.jsx)("span",{style:{fontSize:64},children:"\uD83D\uDC94"}),(0,o.jsx)("span",{children:"Ainda n\xe3o tens favoritos."}),(0,o.jsx)("span",{style:{fontSize:14},children:"Toca no ❤️ nas li\xe7\xf5es para guardar."})]}):(0,o.jsx)(tn,{children:a.map(({cardKey:e,card:t,color:a},n)=>(0,o.jsxs)(ti,{color:a,index:n,children:[(0,o.jsx)(ts,{onClick:()=>ew(t.word),children:t.emoji}),(0,o.jsx)(tl,{color:a,children:t.letter}),(0,o.jsx)(tc,{children:t.word}),(0,o.jsxs)(td,{children:[(0,o.jsx)(tp,{type:"button",title:"Ouvir",onClick:()=>ew(t.word),children:(0,o.jsx)(l.In,{name:"volume",size:16})}),(0,o.jsx)(tp,{type:"button",title:"Remover dos favoritos",onClick:()=>r(e),style:{color:"#ef4444",borderColor:"#ef444440"},children:(0,o.jsx)(l.In,{name:"heart",size:16,color:"#ef4444"})})]})]},e))})})]})}let th="atlantis-leitor-progress",tg={totalStars:0,level:1,streak:0,lastPlayedDate:"",lessons:{},favorites:[],badges:[]};function tf(e,t){return e.badges.includes(t)?e:{...e,badges:[...e.badges,t]}}let tx=i().div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function tb({onBack:e}){let[t,r]=(0,a.useState)(()=>(function(){try{let e=localStorage.getItem(th);if(!e)return{...tg};return{...tg,...JSON.parse(e)}}catch{return{...tg}}})()),[n,i]=(0,a.useState)(()=>ex());(0,a.useEffect)(()=>("speechSynthesis"in window&&(eg(),ei||(window.speechSynthesis.addEventListener("voiceschanged",eg),ei=!0,em())),ed.add(i),i(ex()),()=>{ed.delete(i)}),[]);let[s,l]=(0,a.useState)({id:"home"}),c=(0,a.useCallback)(e=>{r(t=>{let r,o=((r=e(t)).totalStars>=1&&!r.badges.includes("primeira-estrela")&&(r=tf(r,"primeira-estrela")),Object.values(r.lessons).filter(e=>e.completed).length>=1&&!r.badges.includes("primeira-licao")&&(r=tf(r,"primeira-licao")),Object.values(r.lessons).some(e=>3===e.stars)&&!r.badges.includes("tres-estrelas")&&(r=tf(r,"tres-estrelas")),r.favorites.length>=10&&!r.badges.includes("coleccionador")&&(r=tf(r,"coleccionador")),r.lessons.vogais?.stars!==3||r.badges.includes("vogais-mestre")||(r=tf(r,"vogais-mestre")),["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"].every(e=>r.lessons[e]?.completed)&&!r.badges.includes("leitor")&&(r=tf(r,"leitor")),["animais","cores","numeros","corpo","familia"].every(e=>r.lessons[e]?.completed)&&!r.badges.includes("explorador")&&(r=tf(r,"explorador")),r.lessons.numeros?.stars!==3||r.badges.includes("numeros-mestre")||(r=tf(r,"numeros-mestre")),r);try{localStorage.setItem(th,JSON.stringify(o))}catch{}return o})},[]),d=(0,a.useCallback)(e=>{c(t=>{let r;return r=t.favorites.includes(e),{...t,favorites:r?t.favorites.filter(t=>t!==e):[...t.favorites,e]}})},[c]),p=(0,a.useCallback)((e,t,r)=>{c(o=>{let a,n,i,s,l,c;return a=o.lessons[e],s=Math.max(0,(i=(n=Math.max(a?.bestScore??0,t))>=r?3:n>=r-1?2:+(n>=Math.ceil(r/2)))-(a?.stars??0)),l=new Date().toISOString().split("T")[0],c=(()=>{if(!o.lastPlayedDate)return!1;let e=new Date(o.lastPlayedDate);return 1==(new Date(l).getTime()-e.getTime())/864e5})(),{...o,totalStars:o.totalStars+s,level:Math.floor((o.totalStars+s)/5)+1,streak:o.lastPlayedDate===l?o.streak:c?o.streak+1:1,lastPlayedDate:l,lessons:{...o.lessons,[e]:{stars:i,bestScore:n,completed:i>0}}}}),l({id:"home"})},[c]);return"lesson"===s.id?(0,o.jsx)(tx,{children:(0,o.jsx)(e8,{lessonId:s.lessonId,progress:t,onBack:()=>l({id:"home"}),onComplete:p,onToggleFavorite:d})}):"favorites"===s.id?(0,o.jsx)(tx,{children:(0,o.jsx)(tm,{progress:t,onBack:()=>l({id:"home"}),onToggleFavorite:d})}):(0,o.jsx)(tx,{children:(0,o.jsx)(er,{progress:t,speechDebug:n,onSelectLesson:e=>l({id:"lesson",lessonId:e}),onOpenFavorites:()=>l({id:"favorites"}),onSpeechTest:ey})})}},5782(e,t,r){r.d(t,{Ky:()=>f,zE:()=>j,zj:()=>x,XB:()=>ed});var o=r(7991),a=r(4041),n=r(2791);let i=null;function s(){return i||(i=(0,n.U)("https://eqvzakschpdemcgexjyy.supabase.co","sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL")),i}function l(e){return s().channel(`game-room-${e}`,{config:{broadcast:{self:!1}}})}function c(e){s().removeChannel(e)}let d="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",p=["turbo","mega","super","epic","cosmic","blazing","wild","hyper","magic","thunder","golden","silver","crystal","phantom","stellar","neon","atomic","mystic","shadow","lucky"],u={tictactoe:["grid","cross","circle","duel","board","square"],spotit:["eyes","flash","cards","match","reflex","hunt"],memory:["brain","flip","pairs","cards","mind","vault"],stopgame:["words","rush","sprint","blitz","clash","race"]},m=["arena","zone","battle","quest","clash","showdown"];function h(e){return e[Math.floor(Math.random()*e.length)]}function g(){return(0,a.z)()}function f({gameId:e,playerName:t,onEvent:r}){let[a,n]=(0,o.useState)(null),[i,s]=(0,o.useState)(null),x=(0,o.useRef)(null),b=(0,o.useRef)(r);b.current=r;let w=(0,o.useRef)(t);w.current=t;let y=(0,o.useRef)(g()),v=(0,o.useCallback)((t,r)=>{let o=l(`${e}-${t.toUpperCase()}`);return o.on("broadcast",{event:"mp"},({payload:e})=>{b.current(e)}),o.subscribe(e=>{"SUBSCRIBED"===e?(x.current=o,"guest"===r&&o.send({type:"broadcast",event:"mp",payload:{type:"guest-joined",name:w.current,playerId:y.current}})):"CHANNEL_ERROR"===e&&s("Connection failed. Check your internet and try again.")}),o},[e]),$=(0,o.useCallback)(()=>{var t;let r,o,a;y.current=g();let i=Array.from({length:6},()=>d[Math.floor(Math.random()*d.length)]).join(""),l=(t=w.current,r=h(p),o=h(u[e]??m),a=t.slice(0,8).trim(),`${a}'s ${r} ${o}`);v(i,"host");let c={id:y.current,name:w.current,isHost:!0};return n({code:i,roomName:l,role:"host",playerId:y.current,playerName:w.current,players:[c],opponentName:null,connected:!1}),s(null),{code:i,roomName:l}},[v,e]),k=(0,o.useCallback)(e=>{y.current=g();let t=e.toUpperCase().trim();v(t,"guest");let r={id:y.current,name:w.current,isHost:!1};n({code:t,roomName:"",role:"guest",playerId:y.current,playerName:w.current,players:[r],opponentName:null,connected:!1}),s(null)},[v]),j=(0,o.useCallback)(e=>{x.current?.send({type:"broadcast",event:"mp",payload:e})},[]),M=(0,o.useCallback)(()=>{x.current&&(x.current.send({type:"broadcast",event:"mp",payload:{type:"player-left",playerId:y.current,name:w.current}}),c(x.current),x.current=null),n(null),s(null)},[]),S=(0,o.useCallback)(e=>{n(t=>t?{...t,opponentName:e,connected:!0}:t)},[]),z=(0,o.useCallback)(e=>{n(t=>{if(!t||t.players.some(t=>t.id===e.id))return t;let r=[...t.players,e],o=r.find(e=>e.id!==t.playerId);return{...t,players:r,opponentName:o?.name??null,connected:!0}})},[]),T=(0,o.useCallback)(e=>{n(t=>{if(!t)return t;let r=t.players.filter(t=>t.id!==e),o=r.find(e=>e.id!==t.playerId);return{...t,players:r,opponentName:o?.name??null,connected:r.length>1}})},[]),C=(0,o.useCallback)(e=>{n(t=>{if(!t)return t;let r=e.find(e=>e.id!==t.playerId);return{...t,players:e,opponentName:r?.name??null,connected:e.length>1}})},[]);return(0,o.useEffect)(()=>()=>{x.current&&(x.current.send({type:"broadcast",event:"mp",payload:{type:"player-left",playerId:y.current,name:w.current}}),c(x.current),x.current=null)},[]),{room:a,createRoom:$,joinRoom:k,sendEvent:j,leaveRoom:M,setConnected:S,addPlayer:z,removePlayer:T,setPlayers:C,error:i}}function x({gameId:e,enabled:t}){let[r,a]=(0,o.useState)([]),n=(0,o.useRef)(null),i=(0,o.useRef)(null),s=(0,o.useRef)(null),d=(0,o.useRef)(new Map);(0,o.useEffect)(()=>{if(!t)return;let r=l(`lobby-${e}`);n.current=r,r.on("broadcast",{event:"room-heartbeat"},({payload:e})=>{let t=Date.now();t-e.createdAt>864e5||(e.lastSeen=t,d.current.set(e.code,e),a(Array.from(d.current.values())))}),r.on("broadcast",{event:"room-closed"},({payload:e})=>{let{code:t}=e;d.current.delete(t),a(Array.from(d.current.values()))}),r.subscribe();let o=setInterval(()=>{let e=Date.now(),t=!1;for(let[r,o]of d.current)(e-o.lastSeen>45e3||e-o.createdAt>864e5)&&(d.current.delete(r),t=!0);t&&a(Array.from(d.current.values()))},1e4);return setTimeout(()=>{r.send({type:"broadcast",event:"room-request",payload:{}})},500),()=>{clearInterval(o),n.current&&(c(n.current),n.current=null),d.current.clear()}},[e,t]),(0,o.useEffect)(()=>{if(!t||!n.current)return;let e=n.current;e.on("broadcast",{event:"room-request"},()=>{s.current&&e.send({type:"broadcast",event:"room-heartbeat",payload:{...s.current,lastSeen:Date.now()}})})},[t]);let p=(0,o.useCallback)(t=>{let r={...t,gameId:e,createdAt:Date.now(),lastSeen:Date.now()};s.current=r,n.current?.send({type:"broadcast",event:"room-heartbeat",payload:r}),i.current&&clearInterval(i.current),i.current=setInterval(()=>{s.current&&n.current&&(s.current.lastSeen=Date.now(),n.current.send({type:"broadcast",event:"room-heartbeat",payload:s.current}))},2e4)},[e]),u=(0,o.useCallback)(e=>{s.current&&(s.current.playerCount=e)},[]),m=(0,o.useCallback)(()=>{i.current&&(clearInterval(i.current),i.current=null),s.current&&n.current&&n.current.send({type:"broadcast",event:"room-closed",payload:{code:s.current.code}}),s.current=null},[]);return(0,o.useEffect)(()=>()=>{i.current&&clearInterval(i.current),s.current&&n.current&&n.current.send({type:"broadcast",event:"room-closed",payload:{code:s.current.code}}),s.current=null},[]),{rooms:r,publishRoom:p,updatePlayerCount:u,unpublishRoom:m}}var b=r(5723),w=r(6859),y=r.n(w),v=r(2799),$=r(6063);let k="atlantis-games-player-name";function j(){return sessionStorage.getItem(k)??""}let M={yourName:{pt:"O teu nome",en:"Your name"},createRoom:{pt:"Criar Sala",en:"Create Room"},joinRoom:{pt:"Entrar na Sala",en:"Join Room"},roomCode:{pt:"C\xf3digo da Sala",en:"Room Code"},waiting:{pt:"\xc0 espera de jogadores…",en:"Waiting for players…"},shareCode:{pt:"Partilha este c\xf3digo:",en:"Share this code:"},enterCode:{pt:"Introduz o c\xf3digo da sala",en:"Enter room code"},join:{pt:"Entrar",en:"Join"},leave:{pt:"Sair",en:"Leave"},copied:{pt:"Copiado!",en:"Copied!"},copy:{pt:"Copiar",en:"Copy"},namePlaceholder:{pt:"Ex: Jo\xe3o",en:"E.g. John"},or:{pt:"ou",en:"or"},connected:{pt:"Ligado!",en:"Connected!"},playOnline:{pt:"Jogar Online",en:"Play Online"},players:{pt:"Jogadores",en:"Players"},openRooms:{pt:"Salas abertas",en:"Open rooms"},noRooms:{pt:"Nenhuma sala aberta",en:"No open rooms"},joinDirect:{pt:"Entrar com c\xf3digo",en:"Join with code"},nameMissingTitle:{pt:"Falta o teu nome",en:"Your name is missing"},nameMissingBody:{pt:"Para entrares ou criares uma sala, escreve primeiro o teu nome no campo l\xe1 em cima. Assim os outros jogadores sabem quem \xe9s.",en:"To join or create a room, first enter your name in the field above. That’s how other players see who you are."},gotIt:{pt:"Entendido",en:"Got it"}};function S(e,t){return M[e]["pt"===t?"pt":"en"]}let z=(0,v.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,T=(0,v.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,C=(0,v.keyframes)`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,R=y().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${$.w4.spacing.lg};
  padding: ${$.w4.spacing.xl} ${$.w4.spacing.lg};
  animation: ${T} 0.25s ease;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`,_=y().h2`
  font-size: ${$.w4.typography.fontSizeLg};
  color: ${$.w4.colors.mainText};
  margin: 0;
  text-align: center;
`,B=(0,v.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,I=(0,v.keyframes)`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,A=y().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 5000;
  animation: ${B} 0.15s ease;
`,E=y().div`
  background: ${$.w4.colors.sidebarBg};
  border: 1px solid ${$.w4.colors.border};
  border-radius: ${$.w4.borderRadius.lg};
  padding: 24px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${I} 0.2s cubic-bezier(0.22, 1, 0.36, 1);
`,F=y().h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${$.w4.colors.mainText};
  font-family: ${$.w4.typography.fontFamily};
`,P=y().p`
  margin: 0;
  font-size: ${$.w4.typography.fontSizeBase};
  color: ${$.w4.colors.mainTextMuted};
  font-family: ${$.w4.typography.fontFamily};
  line-height: 1.5;
`,L=y().div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`,O=y().input`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${$.w4.borderRadius.lg};
  border: 1px solid ${$.w4.colors.border};
  background: ${$.w4.colors.surface};
  color: ${$.w4.colors.mainText};
  font-size: ${$.w4.typography.fontSizeBase};
  font-family: ${$.w4.typography.fontFamily};
  outline: none;
  min-height: 44px;
  &:focus { border-color: ${$.w4.colors.accent}; }
  &::placeholder { color: ${$.w4.colors.mainTextMuted}; }
`,H=y().input`
  width: 100%;
  padding: 14px 16px;
  border-radius: ${$.w4.borderRadius.lg};
  border: 1px solid ${$.w4.colors.border};
  background: ${$.w4.colors.surface};
  color: ${$.w4.colors.mainText};
  font-size: 20px;
  font-family: ${$.w4.typography.fontFamilyMono};
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  outline: none;
  min-height: 44px;
  &:focus { border-color: ${$.w4.colors.accent}; }
  &::placeholder { color: ${$.w4.colors.mainTextMuted}; letter-spacing: 0.1em; }
`,D=y().div`
  display: flex;
  gap: ${$.w4.spacing.sm};
  width: 100%;
`,N=y().button`
  flex: 1;
  padding: 12px 20px;
  border-radius: ${$.w4.borderRadius.lg};
  border: 1px solid ${({variant:e})=>"primary"===e?$.w4.colors.accent:$.w4.colors.border};
  background: ${({variant:e})=>"primary"===e?$.w4.colors.accent:$.w4.colors.surface};
  color: ${({variant:e})=>"primary"===e?"#fff":$.w4.colors.mainText};
  font-size: ${$.w4.typography.fontSizeBase};
  font-family: ${$.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  min-height: 44px;
  transition: background ${$.w4.transitions.base}, border-color ${$.w4.transitions.base};
  &:hover {
    background: ${({variant:e})=>"primary"===e?$.w4.colors.accentHover:$.w4.colors.sidebarHover};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,V=y().div`
  display: flex;
  align-items: center;
  gap: ${$.w4.spacing.md};
  width: 100%;
  color: ${$.w4.colors.mainTextMuted};
  font-size: ${$.w4.typography.fontSizeSm};
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${$.w4.colors.border};
  }
`,G=y().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${$.w4.spacing.md};
  width: 100%;
  padding: 20px;
  border-radius: ${$.w4.borderRadius.lg};
  border: 2px dashed ${$.w4.colors.accent};
  background: ${$.w4.colors.surface};
`,q=y().span`
  font-size: 32px;
  font-family: ${$.w4.typography.fontFamilyMono};
  font-weight: 700;
  color: ${$.w4.colors.accent};
  letter-spacing: 0.25em;
  user-select: all;
`,Y=y().button`
  padding: 8px 14px;
  border-radius: ${$.w4.borderRadius.md};
  border: 1px solid ${$.w4.colors.border};
  background: ${$.w4.colors.codeBg};
  color: ${$.w4.colors.mainTextMuted};
  font-size: ${$.w4.typography.fontSizeSm};
  cursor: pointer;
  min-height: 36px;
  transition: background ${$.w4.transitions.base};
  &:hover { background: ${$.w4.colors.sidebarHover}; }
`,W=y().p`
  color: ${$.w4.colors.mainTextMuted};
  font-size: ${$.w4.typography.fontSizeBase};
  animation: ${z} 1.8s ease infinite;
  text-align: center;
  margin: 0;
`,J=y().p`
  color: #f85149;
  font-size: ${$.w4.typography.fontSizeSm};
  text-align: center;
  margin: 0;
`,X=y().label`
  font-size: ${$.w4.typography.fontSizeSm};
  color: ${$.w4.colors.mainTextMuted};
  width: 100%;
`,U=y().div`
  display: flex;
  flex-direction: column;
  gap: ${$.w4.spacing.sm};
  width: 100%;
`,K=y().div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Q=y().div`
  font-size: ${$.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${$.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Z=y().div`
  display: flex;
  align-items: center;
  gap: ${$.w4.spacing.sm};
  padding: 8px 12px;
  background: ${$.w4.colors.surface};
  border: 1px solid ${$.w4.colors.border};
  border-radius: ${$.w4.borderRadius.md};
  font-size: ${$.w4.typography.fontSizeBase};
  color: ${$.w4.colors.mainText};
  animation: ${C} 0.2s ease;
`,ee=y().span`
  font-size: 11px;
  font-weight: 700;
  color: ${$.w4.colors.accent};
  background: rgba(88, 166, 255, 0.12);
  border-radius: 8px;
  padding: 1px 6px;
`,et=y().div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,er=y().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,eo=y().span`
  font-size: ${$.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${$.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,ea=y().button`
  display: flex;
  align-items: center;
  gap: ${$.w4.spacing.sm};
  width: 100%;
  padding: 12px 14px;
  background: ${$.w4.colors.surface};
  border: 1px solid ${$.w4.colors.border};
  border-radius: ${$.w4.borderRadius.lg};
  cursor: pointer;
  transition: border-color ${$.w4.transitions.base}, background ${$.w4.transitions.base}, transform ${$.w4.transitions.base}, opacity ${$.w4.transitions.base};
  font-family: ${$.w4.typography.fontFamily};
  text-align: left;
  min-height: 56px;
  &:hover:not(:disabled) {
    border-color: ${$.w4.colors.accent};
    background: rgba(88, 166, 255, 0.05);
    transform: translateY(-1px);
  }
  &:active:not(:disabled) { transform: translateY(0); }
  /* Previously there was no disabled style — the card looked fully clickable
   * while the handler silently returned, making join feel broken. */
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,en=y().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ei=y().span`
  font-size: ${$.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${$.w4.colors.mainText};
`,es=y().span`
  font-size: ${$.w4.typography.fontSizeSm};
  color: ${$.w4.colors.mainTextMuted};
`,el=y().span`
  font-size: ${$.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${$.w4.colors.accent};
  white-space: nowrap;
`,ec=y().p`
  font-size: ${$.w4.typography.fontSizeSm};
  color: ${$.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${$.w4.spacing.md} 0;
  margin: 0;
`;function ed({lang:e,room:t,error:r,onCreateRoom:a,onJoinRoom:n,onLeaveRoom:i,availableRooms:s=[]}){let[l,c]=(0,o.useState)("idle"),[d,p]=(0,o.useState)(()=>j()),[u,m]=(0,o.useState)(""),[h,g]=(0,o.useState)(!1),[f,x]=(0,o.useState)(!1),w=(0,o.useRef)(null),y=(0,o.useRef)(null);(0,o.useEffect)(()=>{d.trim()&&x(!1)},[d]);let v=()=>{x(!1),setTimeout(()=>y.current?.focus(),50)},M=()=>{let e=d.trim();return e?(sessionStorage.setItem(k,e),e):(x(!0),null)},z=()=>{let e=M();e&&(c("hosting"),a(e))},T=()=>{let e=u.trim().toUpperCase();e.length<4||n(e,d.trim())},C=()=>{c("idle"),m(""),i()};if(t?.connected)return null;if("hosting"===l&&t){let o=t.players??[];return(0,b.jsxs)(R,{children:[t.roomName&&(0,b.jsx)(_,{style:{fontSize:18,color:$.w4.colors.accent},children:t.roomName}),(0,b.jsxs)(_,{children:["\uD83C\uDF10 ",S("shareCode",e)]}),(0,b.jsxs)(G,{children:[(0,b.jsx)(q,{children:t.code}),(0,b.jsx)(Y,{onClick:()=>{t&&navigator.clipboard.writeText(t.code).then(()=>{g(!0),setTimeout(()=>g(!1),2e3)})},children:h?S("copied",e):S("copy",e)})]}),o.length>1&&(0,b.jsxs)(K,{children:[(0,b.jsxs)(Q,{children:[S("players",e)," (",o.length,")"]}),o.map(e=>(0,b.jsxs)(Z,{children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name,e.isHost&&(0,b.jsx)(ee,{children:"Host"})]},e.id))]}),o.length<=1&&(0,b.jsx)(W,{children:S("waiting",e)}),r&&(0,b.jsx)(J,{children:r}),(0,b.jsx)(N,{variant:"secondary",onClick:C,children:S("leave",e)})]})}return"joining"===l?(0,b.jsxs)(R,{children:[(0,b.jsxs)(_,{children:["\uD83D\uDD17 ",S("joinRoom",e)]}),(0,b.jsxs)(U,{children:[(0,b.jsx)(X,{children:S("enterCode",e)}),(0,b.jsx)(H,{ref:w,value:u,onChange:e=>m(e.target.value.toUpperCase().slice(0,6)),placeholder:"ABC123",maxLength:6,onKeyDown:e=>"Enter"===e.key&&T()})]}),r&&(0,b.jsx)(J,{children:r}),(0,b.jsxs)(D,{children:[(0,b.jsx)(N,{variant:"secondary",onClick:C,children:S("leave",e)}),(0,b.jsx)(N,{variant:"primary",onClick:T,disabled:u.trim().length<4,children:S("join",e)})]})]}):(0,b.jsxs)(R,{children:[(0,b.jsxs)(_,{children:["\uD83C\uDF10 ",S("playOnline",e)]}),(0,b.jsxs)(U,{children:[(0,b.jsx)(X,{children:S("yourName",e)}),(0,b.jsx)(O,{ref:y,value:d,onChange:e=>p(e.target.value.slice(0,20)),placeholder:S("namePlaceholder",e),onKeyDown:e=>"Enter"===e.key&&z()})]}),r&&(0,b.jsx)(J,{children:r}),s.length>0&&(0,b.jsxs)(et,{children:[(0,b.jsx)(er,{children:(0,b.jsxs)(eo,{children:[S("openRooms",e)," (",s.length,")"]})}),s.map(e=>(0,b.jsxs)(ea,{onClick:()=>{var t;let r;return t=e.code,document.activeElement?.blur(),void((r=M())&&n(t,r))},"aria-disabled":!d.trim(),children:[(0,b.jsxs)(en,{children:[(0,b.jsx)(ei,{children:e.roomName||e.code}),(0,b.jsxs)(es,{children:["\uD83D\uDC51 ",e.hostName]})]}),(0,b.jsxs)(el,{children:["\uD83D\uDC64 ",e.playerCount]})]},e.code))]}),0===s.length&&(0,b.jsx)(ec,{children:S("noRooms",e)}),(0,b.jsx)(D,{children:(0,b.jsx)(N,{variant:"primary",onClick:z,disabled:!d.trim(),children:S("createRoom",e)})}),(0,b.jsx)(V,{children:S("or",e)}),(0,b.jsx)(D,{children:(0,b.jsx)(N,{variant:"secondary",onClick:()=>{M()&&(c("joining"),setTimeout(()=>w.current?.focus(),100))},disabled:!d.trim(),children:S("joinDirect",e)})}),f&&(0,b.jsx)(A,{role:"dialog","aria-modal":"true",onClick:v,children:(0,b.jsxs)(E,{onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(F,{children:S("nameMissingTitle",e)}),(0,b.jsx)(P,{children:S("nameMissingBody",e)}),(0,b.jsx)(L,{children:(0,b.jsx)(N,{variant:"primary",onClick:v,children:S("gotIt",e)})})]})})]})}},9484(e,t,r){r.d(t,{G:()=>s,L:()=>n});var o=r(5723),a=r(7991);let n=[{skin:"#ffcc99",body:"#4488ff",bodyDark:"#3366cc",shoes:"#cc4444",eyes:"#222",mouth:"#cc5555",hat:"#ff4444",accent:"#ffdd44"},{skin:"#ffe0bd",body:"#44bb44",bodyDark:"#338833",shoes:"#8844cc",eyes:"#222",mouth:"#cc5555",hat:"#22aa22",accent:"#ffffff"},{skin:"#f5c6a0",body:"#ff6644",bodyDark:"#cc4422",shoes:"#4444cc",eyes:"#222",mouth:"#cc5555",hat:"#ffaa00",accent:"#44ddff"},{skin:"#deb887",body:"#cc44cc",bodyDark:"#993399",shoes:"#44cc44",eyes:"#222",mouth:"#cc5555",hat:"#ff66cc",accent:"#ffff44"},{skin:"#ffd5b5",body:"#ffaa00",bodyDark:"#cc8800",shoes:"#884422",eyes:"#222",mouth:"#cc5555",hat:"#4488ff",accent:"#ff4444"},{skin:"#ffe0c0",body:"#00cccc",bodyDark:"#009999",shoes:"#ff6644",eyes:"#222",mouth:"#cc5555",hat:"#ff44aa",accent:"#88ff88"},{skin:"#ffcc99",body:"#8855cc",bodyDark:"#663399",shoes:"#ffaa00",eyes:"#222",mouth:"#cc5555",hat:"#44ccff",accent:"#ff8844"},{skin:"#f0c8a0",body:"#ff4488",bodyDark:"#cc2266",shoes:"#222222",eyes:"#222",mouth:"#cc5555",hat:"#44ff88",accent:"#ffdd00"},{skin:"#ffcc99",body:"#ffffff",bodyDark:"#cccccc",shoes:"#3366cc",eyes:"#222",mouth:"#cc5555",hat:"#4488ff",accent:"#ff4444"},{skin:"#f5c6a0",body:"#222222",bodyDark:"#111111",shoes:"#444444",eyes:"#ff4444",mouth:"#cc5555",hat:"#333333",accent:"#ff2222"},{skin:"#ffe0bd",body:"#44dd44",bodyDark:"#22aa22",shoes:"#664422",eyes:"#222",mouth:"#cc5555",hat:"#55ee55",accent:"#88ff44"},{skin:"#c8a882",body:"#7744cc",bodyDark:"#552299",shoes:"#222222",eyes:"#ff44ff",mouth:"#cc88cc",hat:"#9944ff",accent:"#cc66ff"}],i={idle:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","S","B","B","B","B","B","B","B","B","S","_"],["_","S","B","B","B","A","A","B","B","B","S","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","_","D","D","_","_","D","D","_","_","_"],["_","_","_","D","D","_","_","D","D","_","_","_"],["_","_","X","X","X","_","_","X","X","X","_","_"],["_","_","X","X","X","_","_","X","X","X","_","_"]],jump:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["S","S","B","B","B","B","B","B","B","B","S","S"],["_","S","B","B","B","A","A","B","B","B","S","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","D","D","_","_","_","_","D","D","_","_"],["_","D","D","_","_","_","_","_","_","D","D","_"],["X","X","X","_","_","_","_","_","_","X","X","X"],["X","X","_","_","_","_","_","_","_","_","X","X"]],walk:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","_","B","B","B","B","B","B","B","B","S","_"],["_","_","B","B","B","A","A","B","B","B","S","_"],["_","S","B","B","B","B","B","B","B","B","_","_"],["_","S","B","B","B","B","B","B","B","B","_","_"],["_","_","_","D","D","_","_","_","D","D","_","_"],["_","_","_","_","D","D","_","D","D","_","_","_"],["_","_","_","_","X","X","X","X","_","_","_","_"],["_","_","_","_","X","X","X","X","_","_","_","_"]],dead:[["_","_","_","_","_","H","H","H","H","_","_","_"],["_","_","_","_","H","H","H","H","H","H","_","_"],["_","_","_","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","_","S","S","_","E","S","_","_"],["_","_","S","_","E","S","S","E","_","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","A","A","B","B","B","_","_"],["_","S","B","B","B","B","B","B","B","B","S","_"],["S","_","B","B","B","B","B","B","B","B","_","S"],["_","_","_","D","D","D","D","D","D","_","_","_"],["_","_","_","_","_","_","_","_","_","_","_","_"],["_","_","X","X","X","X","X","X","X","X","_","_"],["_","_","_","_","_","_","_","_","_","_","_","_"]]};function s({paletteIndex:e,pose:t="idle",size:r=48,flipX:l=!1,style:c,className:d}){let p=n[e%n.length],u=i[t],m=u.length,h=u[0].length,g=(0,a.useMemo)(()=>{let e=[];for(let t=0;t<m;t++)for(let r=0;r<h;r++){let o=function(e,t){switch(e){case"S":return t.skin;case"B":return t.body;case"D":return t.bodyDark;case"H":return t.hat;case"E":return t.eyes;case"M":return t.mouth;case"A":return t.accent;case"X":return t.shoes;default:return null}}(u[t][r],p);o&&e.push({x:r,y:t,color:o})}return e},[u,p,m,h]);return(0,o.jsx)("svg",{width:r,height:m/h*r,viewBox:`0 0 ${h} ${m}`,style:{imageRendering:"pixelated",transform:l?"scaleX(-1)":void 0,...c},className:d,children:g.map((e,t)=>(0,o.jsx)("rect",{x:e.x,y:e.y,width:1,height:1,fill:e.color},t))})}},8170(e,t,r){r.d(t,{Ym:()=>c});var o=r(7991),a=r(6063);let n="atlantis:locale",i="shell:locale";function s(e){return"en"===e||"pt"===e}function l(){try{let e=localStorage.getItem(n);if(s(e))return e}catch{}return"en"}function c(){let[e,t]=(0,o.useState)(l),r=(0,o.useCallback)(e=>{t(e);try{localStorage.setItem(n,e)}catch{}(0,a.Is)(i,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,o.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,o.useEffect)(()=>{(0,a.PL)(i).then(r=>{if(s(r)&&r!==e){try{localStorage.setItem(n,r)}catch{}t(r)}}).catch(()=>{})},[]),[e,r]}(0,a.PL)(i).then(e=>{if(s(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{}),r(5723);var d=r(6859),p=r.n(d);p().div`
  display: flex;
  gap: 4px;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 2px;
`,p().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${a.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?a.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":a.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":a.w4.colors.mainText};
  }
`},5816(e,t,r){r.d(t,{FlyoutPanel:()=>w});var o=r(5723),a=r(7991),n=r.n(a),i=r(6859),s=r.n(i),l=r(2799),c=r(6063),d=r(7993);let p={activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',minus:'<path d="M5 12h14"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',plus:'<path d="M12 5v14M5 12h14"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',triangle:'<path d="M3 20h18L12 4z"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>'},u=(0,l.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,m=s().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.accentMuted};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${c.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${u} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${c.w4.colors.accent};
    opacity: 0.4;
  }
`,h=s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${c.w4.colors.accent};
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
  font-family: ${c.w4.typography.fontFamily};
`,g=s().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?c.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?c.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.sidebarText};
  font-size: ${c.w4.typography.fontSizeBase};
  font-family: ${c.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${c.w4.colors.accentMuted};
    color: ${c.w4.colors.mainText};
  }
`,f=({size:e=14,strokeWidth:t=1.75})=>(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,o.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function x({iconKey:e}){let t=e?p[e]:void 0;return t?(0,o.jsx)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:t}}):(0,o.jsx)(f,{})}function b({entries:e,activeId:t,onSelect:r}){return(0,o.jsx)(o.Fragment,{children:e.map(e=>e.children?(0,o.jsx)(n().Fragment,{children:(0,o.jsx)(b,{entries:e.children,activeId:t,onSelect:r})},e.id):(0,o.jsxs)(g,{active:t===e.id,onClick:()=>r(e),children:[(0,o.jsx)(x,{iconKey:e.icon}),e.name]},e.id))})}function w({activeId:e}){let{flyout:t,scheduleFlyoutClose:r,cancelFlyoutClose:a}=(0,d.c)();if(!t)return null;let n=t.entry.icon?p[t.entry.icon]:void 0;return(0,o.jsxs)(m,{anchorY:t.anchorY,onMouseEnter:a,onMouseLeave:r,children:[(0,o.jsxs)(h,{children:[n?(0,o.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:n}}):(0,o.jsx)(f,{size:13,strokeWidth:2}),t.entry.name]}),(0,o.jsx)(b,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),r()}})]})}},7993(e,t,r){r.d(t,{I:()=>a,c:()=>n});var o=r(7991);let a=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,o.useContext)(a)},4e3(e,t,r){r.d(t,{Xl:()=>ee,UO:()=>R,PE:()=>eA,In:()=>v});var o=r(5723),a=r(7991),n=r.n(a),i=r(6859),s=r.n(i),l=r(6063);let c={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},d={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},u={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},m={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},h={sm:"28px",md:"30px"},g={sm:"0 10px",md:"0 12px"},f={sm:"12px",md:"12px"};s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>h[e]};
  padding: ${({size:e})=>g[e]};
  background: ${({variant:e})=>c[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>u[e]};
  font-size: ${({size:e})=>f[e]};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>d[e]};
    color: ${({variant:e})=>m[e]};
    border-color: ${({variant:e})=>"ghost"===e?l.w4.colors.accent:p[e]};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;let x={default:l.w4.colors.accent,danger:"#f85149"},b={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};s().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${l.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  /**
   * Expand the tap area to ≥44×44px on touch devices without changing the
   * visual size of the button. The pseudo-element extends 7px on each side
   * ((44 - 30) / 2 = 7). Pointer-events fall through to the button itself.
   * Only applied on coarse-pointer (touch) devices so desktop hover still
   * works on the visual 30px area.
   */
  @media (pointer: coarse) {
    &::before {
      content: '';
      position: absolute;
      inset: -7px;
    }
  }

  &:hover:not(:disabled) {
    color: ${({tone:e})=>x[e]};
    background: ${({tone:e})=>b[e]};
    border-color: ${({tone:e})=>x[e]};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,s().div`
  position: relative;
  display: inline-flex;
`,s().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: -2px;
  }
`,s().div`
  height: 1px;
  margin: 4px 0;
  background: ${l.w4.colors.sidebarBorder};
`,s().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,s().span`
  width: 1px;
  height: 20px;
  background: ${l.w4.colors.border};
  flex-shrink: 0;
`,s().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,s()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:t})=>e||t?l.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:t})=>e||t?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${l.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${l.w4.focusRing} }
`,r(2727);var w=r(2799);let y={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'};function v({name:e,size:t=18,strokeWidth:r=1.5,...a}){let n=y[e];return(0,o.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!a["aria-label"]||void 0,...a,dangerouslySetInnerHTML:{__html:n}})}Object.keys(y),s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${l.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${l.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,s().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,s().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  border: 1px solid ${l.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 700;
  color: ${l.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;let $=(0,w.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  &:hover {
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,s().span`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,s().div`
  position: fixed;
  min-width: 240px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${$} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${l.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,s().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,s().div`
  margin-bottom: 10px;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,s().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,s().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.md};
`,s().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
    background: ${({active:e})=>e?l.w4.colors.accentMuted:l.w4.colors.sidebarHover};
  }
`,s().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":l.w4.colors.mainText};
  }
`,r(8170),s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    gap: ${l.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  min-width: 180px;
  padding: 0 6px 0 12px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderStrong};
  border-radius: 999px;
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast}, box-shadow ${l.w4.transitions.fast};
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  .label {
    flex: 1;
    text-align: left;
    color: ${l.w4.colors.mainTextMuted};
    font-weight: 500;
    letter-spacing: -0.1px;
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    min-width: 0;
    padding: 0 12px;
    .label { display: none; }
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${l.w4.colors.sidebarHover};
    border: 1px solid ${l.w4.colors.borderSubtle};
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${l.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  }

  &:hover {
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.surfaceRaised};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
  &:hover .label { color: ${l.w4.colors.mainText}; }
  &:hover .kbd {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent}55;
    background: ${l.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,s().div`
  position: relative;
  display: inline-flex;
`,s().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${l.w4.colors.mainBg};
  color: #fff;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${l.w4.colors.accent};
  border: 1px solid ${l.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.accentHover};
    border-color: ${l.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`;let k=s().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,j=s().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,M=s().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${l.w4.transitions.fast};
`,S=s().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${l.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,z=s().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${l.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,T=s().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${l.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;function C(e,t){return Math.abs(e)<t?0:e>0?1:-1}function R({onMove:e,actions:t,axes:r="both",snap:n=!0,deadZone:i=.3,forceVisible:s=!1}){let c=(0,a.useRef)(null),d=(0,a.useRef)(null),p=(0,a.useRef)(null),u=(0,a.useRef)({dx:0,dy:0}),[m,h]=(0,a.useState)(null),[g,f]=(0,a.useState)({dx:0,dy:0}),x=(0,a.useCallback)((t,o)=>{if(!e)return;let a="horizontal"===r?0:o,s=n?{dx:C(t,i),dy:C(a,i)}:{dx:t,dy:a};(s.dx!==u.current.dx||s.dy!==u.current.dy)&&(u.current=s,e(s))},[e,r,n,i]),b=(0,a.useCallback)(()=>{d.current=null,p.current=null,h(null),f({dx:0,dy:0}),x(0,0)},[x]);(0,a.useEffect)(()=>{let e=c.current;if(e)return e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",r,{passive:!0}),e.addEventListener("touchend",o,{passive:!0}),e.addEventListener("touchcancel",o,{passive:!0}),()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchmove",r),e.removeEventListener("touchend",o),e.removeEventListener("touchcancel",o)};function t(e){if(null!==d.current)return;let t=e.changedTouches[0];d.current=t.identifier,p.current={x:t.clientX,y:t.clientY},h({x:t.clientX,y:t.clientY}),f({dx:0,dy:0})}function r(e){if(null!==d.current&&p.current)for(let t=0;t<e.changedTouches.length;t++){let r=e.changedTouches[t];if(r.identifier!==d.current)continue;let o=r.clientX-p.current.x,a=r.clientY-p.current.y,n=Math.hypot(o,a),i=Math.min(n,60),s=0===n?0:o/n*(i/60),l=0===n?0:a/n*(i/60);f({dx:s,dy:l}),x(s,l)}}function o(e){for(let t=0;t<e.changedTouches.length;t++)if(e.changedTouches[t].identifier===d.current)return void b()}},[x,b]);let w=(0,a.useCallback)(e=>{let t=()=>e.onRelease?.();return{onPointerDown:t=>{t.stopPropagation(),e.onPress?.()},onPointerUp:t,onPointerCancel:t,onPointerLeave:t}},[]);return(0,o.jsxs)(k,{forceVisible:s,"aria-hidden":!0,children:[(0,o.jsx)(j,{ref:c,children:m&&(0,o.jsx)(M,{left:m.x,top:m.y,active:!0,children:(0,o.jsx)(S,{dx:g.dx,dy:g.dy})})}),t&&t.length>0&&(0,o.jsx)(z,{children:t.map(e=>(0,o.jsx)(T,{type:"button",accent:e.color??l.w4.colors.accent,...w(e),children:e.label},e.id))})]})}let _=(0,w.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${_} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${l.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${l.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,s().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  color: ${l.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${l.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${l.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${l.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${l.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${l.w4.colors.mainText}; }
    & .b { color: ${l.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${l.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${l.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${l.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${l.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${l.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${l.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${l.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${l.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${l.w4.colors.mainText};
      font-family: ${l.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${l.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${l.w4.colors.mainText};
    }
  }
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${l.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${l.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,s().div`
  padding: 6px 14px 16px;
`,s().h3`
  margin: 0 0 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${l.w4.colors.mainText};

  .hash {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,s().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${l.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.4;
`,s().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${l.w4.transitions.fast}, color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
  }
`,s().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 3;
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?l.w4.colors.borderStrong:l.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?l.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?l.w4.colors.mainTextMuted:l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?l.w4.colors.mainTextFaint:l.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?l.w4.colors.mainText:l.w4.colors.accentHover};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let B={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},I={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent},A=s().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?l.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>B[e]};
  color: ${({tone:e})=>I[e]};
`,E=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function F({tone:e="neutral",dot:t,children:r,...a}){return(0,o.jsxs)(A,{tone:e,...a,children:[(t??"live"===e)&&(0,o.jsx)(E,{}),r]})}s().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,s().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${l.w4.transitions.fast};

  &:focus-within {
    border-color: ${l.w4.colors.accent};
  }
`,s().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${l.w4.colors.mainTextFaint};
  }
`,s().span`
  display: inline-flex;
  align-items: center;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,s().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  /* Clip any inner row that's wider than the column instead of letting it
   * push the panel past the grid track. PanelGrid uses minmax(0, 1fr) so
   * the column width is authoritative — we just need to honour it here. */
  min-width: 0;
  overflow: hidden;
  padding: 18px 20px 20px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  transition: border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,s().div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,s().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  line-height: 1.45;
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`,s().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${l.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${l.w4.colors.accent}`:"none"};
  transition: border-color ${l.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?l.w4.colors.accentHover:l.w4.colors.borderStrong};
  }
`,s().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,s().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,s().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,s().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${l.w4.colors.mainText};
  margin-bottom: 4px;
`,s().div`
  font-size: 11.5px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,s().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${l.w4.colors.accentMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,s().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,s().button`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${l.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    background: ${l.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }
`,s().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,s().div`
  font-size: 11px;
  color: ${l.w4.colors.mainText};
`,s().div`
  margin-top: 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`,s().div`
  position: relative;
  display: inline-block;
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?l.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?l.w4.colors.borderStrong:l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.borderStrong};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${l.w4.colors.accentMuted};
  color: ${l.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let P=(0,w.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;s().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${l.w4.elevation.lg};
  z-index: ${l.w4.zIndex.dropdown};
  animation: ${P} 0.18s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,s()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?l.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${l.w4.transitions.fast};

  &:hover { background: ${l.w4.colors.surfaceHover}; }
  &:focus-visible { ${l.w4.focusRing} }
`,s()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,s().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,s().span`
  font-size: 13.5px;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,s()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,s().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${l.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.surfaceHover};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,s().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,s().span`
  margin-left: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;let L={bombbrawl:!0,jumpparty:!0,animalarena:!0},O={familyquiz:!0,tictactoe:!0,soundhunter:!0,adventure:!0,pixelboard:!0,memory:!0,stopgame:!0,tapit:!0,bombbrawl:!0,jumpparty:!0,lebem:!0,drawguess:!0,spotit:!0},H=(0,w.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,D=s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${H} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${l.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${l.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,N=s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${l.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,V=s().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  z-index: 2;
`,G=s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${l.w4.colors.codeBg};

  /* ── bombbrawl — explosive red, heavy condensed logotype ──
   * padding-top reserves room for the player-count + online badges so
   * "BOMB" never sits under them (TopLeft / TopRight are absolutely
   * positioned at top:10px). */
  &.hero--bombbrawl {
    background: linear-gradient(135deg, #2a0a0f, #0f0a12);
    justify-content: flex-start;
    padding: 44px 20px 16px;
  }
  &.hero--bombbrawl .hero-mark {
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 48px;
    letter-spacing: -3px;
    line-height: 0.88;
    color: #ff4444;
    text-shadow: 0 0 40px rgba(255, 68, 68, 0.45), 0 0 80px rgba(255, 68, 68, 0.18);
    user-select: none;
  }
  &.hero--bombbrawl .hero-mark em {
    font-style: normal;
    color: #ffb347;
    display: block;
    font-size: 36px;
    letter-spacing: -2px;
    opacity: 0.9;
  }

  /* ── jumpparty — lime burst, bouncy stacked words ── */
  &.hero--jumpparty {
    background: linear-gradient(135deg, #0e2416, #0f1220);
    flex-direction: column;
    gap: 0;
    padding: 44px 16px 12px;
  }
  &.hero--jumpparty .hero-mark {
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 54px;
    letter-spacing: -3px;
    line-height: 0.9;
    color: #3fb950;
    text-shadow: 0 0 36px rgba(63, 185, 80, 0.4);
    user-select: none;
  }
  &.hero--jumpparty .hero-mark em {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 4px;
    color: rgba(63, 185, 80, 0.55);
    display: block;
    text-transform: uppercase;
  }

  /* ── animalarena — trophy gold, serif italic clash ── */
  &.hero--animalarena {
    background: linear-gradient(135deg, #1c1a0e, #0f0f12);
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 20px 18px;
  }
  &.hero--animalarena .hero-mark {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 0.92;
    background: linear-gradient(120deg, #f59e0b, #ef4444 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    user-select: none;
  }
  &.hero--animalarena .hero-mark em {
    font-style: normal;
    display: block;
    font-size: 14px;
    letter-spacing: 3px;
    -webkit-text-fill-color: rgba(245, 158, 11, 0.45);
    text-transform: uppercase;
    margin-top: 6px;
  }
`,q=s().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  z-index: 2;

  /* bombbrawl's "BOMB / BRAWL" logotype is left-aligned and reaches the
   * bottom of the hero zone — anchor the caption bottom-right instead so
   * it clears the typography. */
  .hero--bombbrawl & {
    left: auto;
    right: 14px;
    color: rgba(255, 179, 71, 0.55);
  }

  /* animalarena's "SUMO / ZOO" stack is also left-aligned and its "ZOO"
   * block reaches the bottom of the hero zone — same bottom-right
   * anchoring clears the overlap. */
  .hero--animalarena & {
    left: auto;
    right: 14px;
    color: rgba(245, 158, 11, 0.5);
  }
`,Y=s().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,W=s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,J=s().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,X=s().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,U=s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,K=s().div`
  padding: 6px 14px 16px;
`,Q=s().h3`
  margin: 0 0 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${l.w4.colors.mainText};

  .hash {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,Z=s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`;function ee({label:e,description:t,emoji:r,iconName:a,hash:n,category:i,accentColor:s,playerCount:l,online:c,onlineLabel:d,index:p=0,vizId:u,vizLabel:m,heroId:h,heroLabel:g,onClick:f}){var x;let b=h&&Object.prototype.hasOwnProperty.call(L,h)?h:null,w=!b&&(x=u)&&Object.prototype.hasOwnProperty.call(O,x)?x:null,y=w?`viz viz--${w}`:"viz";return(0,o.jsxs)(D,{role:"button",tabIndex:0,accentColor:s,index:p,onClick:f,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),f())},children:[b?(0,o.jsxs)(G,{className:`hero hero--${b}`,accentColor:s,children:[l&&(0,o.jsx)(J,{children:(0,o.jsxs)(F,{tone:"neutral",children:["\uD83D\uDC65 ",l]})}),c&&(0,o.jsx)(X,{children:(0,o.jsx)(F,{tone:"live",children:d??"ONLINE"})}),function(e){switch(e){case"bombbrawl":return(0,o.jsxs)("span",{className:"hero-mark","aria-hidden":"true",children:["BOMB",(0,o.jsx)("em",{children:"BRAWL"})]});case"jumpparty":return(0,o.jsxs)("span",{className:"hero-mark","aria-hidden":"true",children:["JUMP",(0,o.jsx)("em",{children:"party"})]});case"animalarena":return(0,o.jsxs)("span",{className:"hero-mark","aria-hidden":"true",children:["SUMO",(0,o.jsx)("em",{children:"ZOO"})]})}}(b),g&&(0,o.jsx)(q,{children:g})]}):(0,o.jsxs)(N,{className:y,accentColor:s,children:[l&&(0,o.jsx)(J,{children:(0,o.jsxs)(F,{tone:"neutral",children:["\uD83D\uDC65 ",l]})}),c&&(0,o.jsx)(X,{children:(0,o.jsx)(F,{tone:"live",children:d??"ONLINE"})}),a?(0,o.jsx)(W,{className:"gamecard-emoji",accentColor:s,"aria-hidden":"true",children:(0,o.jsx)(v,{name:a,size:40})}):r?(0,o.jsx)(Y,{className:"gamecard-emoji","aria-hidden":"true",children:r}):null,w&&m&&(0,o.jsx)(V,{children:m})]}),(0,o.jsxs)(U,{accentColor:s,children:[(0,o.jsx)("span",{className:"dot"}),(0,o.jsx)("span",{className:"cat",children:i})]}),(0,o.jsxs)(K,{children:[(0,o.jsxs)(Q,{children:[e," ",(0,o.jsx)("span",{className:"hash",children:n})]}),(0,o.jsx)(Z,{children:t})]})]})}r(5406),s().nav`padding: ${l.w4.spacing.sm} 0;`,s().div`
  border-bottom: 1px solid ${l.w4.colors.border}60;
  margin-bottom: 2px;
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${l.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${l.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${l.w4.colors.sidebarText}; }
`,s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,s().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,s().div`overflow: hidden;`,s().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,s().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${l.w4.spacing.md};
  background: ${({active:e})=>e?l.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?l.w4.colors.sidebarActive:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":l.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;let et="#7fb77e",er=(0,w.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;s().div`
  position: relative;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 28px ${l.w4.spacing.lg} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${er} 0.25s ease both;
  transition:
    border-color ${l.w4.transitions.base},
    transform ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${et};
  }

  /* Uppercase mono eyebrow tag — reads "◉ DIAGRAM" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${et};
    opacity: 0.75;
    pointer-events: none;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${l.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,s().div`
  height: 36px;
  width: min(60%, 240px);
  margin: 0 auto;
  border-radius: ${l.w4.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${l.w4.colors.border} 0%,
    ${l.w4.colors.borderStrong} 50%,
    ${l.w4.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${(0,w.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,s().pre`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.md};
  text-align: center;
`,s().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,s().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,s().pre`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.md};
`,s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,s().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,s().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
  }
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  text-align: center;
`;let eo=(0,w.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
`,s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${l.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,s().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${l.w4.colors.accent}40;
    box-shadow: 0 0 8px ${l.w4.colors.accent}15;
  }
`;let ea=s().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 14px ${l.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${eo} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;s()(ea)`
  border-bottom: 1px solid ${l.w4.colors.border}80;
`,s()(ea)``,s().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,s().span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.accent};
`,s().span`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
`;var en=r(1426);s().div`
  margin: ${l.w4.spacing.lg} 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.codeBorder};
  overflow: hidden;
`,s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${l.w4.colors.codeBorder};
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,s().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":l.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${l.w4.colors.sidebarText}; border-color: ${l.w4.colors.sidebarText}; }
`,en.A,en.A['pre[class*="language-"]'],l.w4.colors.codeBg,en.A['code[class*="language-"]'],s().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.sm};
`,s().div`
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,s().nav`
  width: 220px;
  min-width: 220px;
  padding: ${l.w4.spacing.xxl} 0 ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,s().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.md};
`,s().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,s().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  border-radius: 0 ${l.w4.borderRadius.sm} ${l.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${l.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,s().div`flex: 1; min-width: 0;`,s().article`
  padding: ${l.w4.spacing.xxl} 0;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  line-height: ${l.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${l.w4.spacing.xl} 0 ${l.w4.spacing.md};
    color: ${l.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${l.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${l.w4.typography.fontSizeXl}; border-bottom: 1px solid ${l.w4.colors.border}; padding-bottom: ${l.w4.spacing.sm}; }
  h2 { font-size: ${l.w4.typography.fontSizeLg}; border-bottom: 1px solid ${l.w4.colors.border}; padding-bottom: ${l.w4.spacing.xs}; }
  h3 { font-size: ${l.w4.typography.fontSizeMd}; }

  p { margin: ${l.w4.spacing.md} 0; }

  a { color: ${l.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${l.w4.colors.accentHover}; } }

  ul, ol { margin: ${l.w4.spacing.md} 0; padding-left: ${l.w4.spacing.xl}; }
  li { margin: ${l.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${l.w4.colors.border};
    margin: ${l.w4.spacing.lg} 0;
    padding: ${l.w4.spacing.sm} ${l.w4.spacing.lg};
    background: ${l.w4.colors.surface};
    color: ${l.w4.colors.mainTextMuted};
    border-radius: 0 ${l.w4.borderRadius.sm} ${l.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${l.w4.colors.codeBg};
    border: 1px solid ${l.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${l.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${l.w4.spacing.lg} 0; font-size: ${l.w4.typography.fontSizeBase}; }
  th, td { padding: ${l.w4.spacing.sm} ${l.w4.spacing.md}; border: 1px solid ${l.w4.colors.border}; text-align: left; }
  th { background: ${l.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${l.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${l.w4.colors.border}; margin: ${l.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${l.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${l.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${l.w4.spacing.lg} 0; }
`,s().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  padding: ${l.w4.spacing.xxl} 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.xxl};
`,s().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,s().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase}; color: ${l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily}; font-weight: 500;
`,s().div`
  color: ${l.w4.colors.mainTextMuted};
  padding: ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${l.w4.typography.fontFamily};
  background: ${l.w4.colors.mainBg};
`,s().div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,s().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${l.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${l.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,s().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,s().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${l.w4.colors.mainText} 0%,
    ${l.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,s().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,s().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,s().div`
  display: flex;
  gap: 4px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
`,s().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":l.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":l.w4.colors.mainText};
  }
`,s().div`
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${l.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-child { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${l.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${l.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${l.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${l.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${l.w4.colors.accent};
    background: ${l.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${l.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${l.w4.colors.codeBg};
    border: 1px solid ${l.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${l.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${l.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${l.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${l.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${l.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${l.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${l.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${l.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`;var ei=r(7993);s().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${l.w4.spacing.sm} 0;
`,s().div`
  font-size: 10px;
  font-weight: 600;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,s().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;let es=(0,w.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;s().div`
  display: grid;
  /* Desktop & iPad: exactly 2 equal columns. sm = 1 col, md/lg = 2 cols (full row). */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: auto;
  gap: ${l.w4.spacing.lg};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    gap: ${l.w4.spacing.md};
  }

  /* Mobile: stack everything in a single full-width column. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  grid-column: ${({fullWidth:e,colSpan:t})=>e?"1 / -1":`span ${t}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${es} 0.25s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,s().div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 0;
  height: 20px;
`,s().div`
  --panel-accent: ${({accent:e})=>e??l.w4.colors.accent};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({minH:e})=>e}px;
  height: 100%;
  padding: ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  transition:
    border-color ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base},
    transform ${l.w4.transitions.base};

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--panel-accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  /* Grip visual affordance left edge */
  &[data-grip='true']::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-left: 2px dotted ${l.w4.colors.borderSubtle};
    border-right: 2px dotted ${l.w4.colors.borderSubtle};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${l.w4.colors.shadow};
  }

  /* WidgetShell owns its chrome — zero ours to avoid double frame. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before,
  &:has(> [data-widget-shell])::after { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* Controls visible on hover (pointer devices); always slightly visible on touch. */
  &:hover .panel-controls { opacity: 1; }

  @media (hover: none) {
    .panel-controls {
      opacity: 0.4;
      transform: scale(0.87);
      transform-origin: top right;
    }
  }
`,s().div`
  position: absolute;
  top: -14px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 2;
`;let el=s().button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition:
    color ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.mainTextMuted};
    background: ${l.w4.colors.surfaceRaised};
  }
`;s()(el)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;let ec=(0,w.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${ec} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${l.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${l.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${l.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${l.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${l.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${l.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:t})=>t?"rgba(248,81,73,0.12)":e?l.w4.colors.accent:"none"};
  color: ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?"#fff":l.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:l.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${l.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`;let ed=(0,w.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ep=(0,w.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${l.w4.spacing.md};
  animation: ${ed} 0.15s ease both;
`,s().div`
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?l.w4.colors.danger+"55":l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${l.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${ep} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?l.w4.colors.danger:l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${l.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast},
    opacity ${l.w4.transitions.fast};

  background: ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:t})=>t||e?"#fff":l.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:l.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${l.w4.focusRing} }
`;let eu=(0,w.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,em=(0,w.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,eh=(0,w.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  animation: ${eu} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${em} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${l.w4.colors.border};
  animation: ${eh} 1.4s ease-in-out infinite;
`,s().span`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;let eg="260px",ef="56px",ex="48px",eb=s().header`
  display: flex;
  align-items: center;
  height: calc(${ex} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${ex} + env(safe-area-inset-top, 0px));
  }
`,ew=s().div`
  width: ${ef};
  min-width: ${ef};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,ey=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,ev=(0,w.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,e$=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${l.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${l.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,ek=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${ev} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${l.w4.colors.accent}, ${l.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,ej=s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  padding-left: ${l.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${l.w4.spacing.sm};
    color: ${l.w4.colors.border};
  }
`,eM=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${l.w4.spacing.md};
  padding: 0 ${l.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${l.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${l.w4.spacing.xs} ${l.w4.spacing.sm};
    gap: ${l.w4.spacing.xs};
    border-top: 1px solid ${l.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,eS=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,ez=s().div`
  display: flex;
  flex-direction: column;
  height: ${l.w4.sizes.fullHeight};
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  overflow: hidden;
`,eT=s().aside`
  width: ${({collapsed:e})=>e?ef:eg};
  min-width: ${({collapsed:e})=>e?ef:eg};
  background: ${l.w4.colors.sidebarBg};
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,eC=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,eR=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,e_=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function eB(){return(0,o.jsx)(e$,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:e_.map((e,t)=>(0,o.jsx)(ek,{index:t,accent:e.accent,children:e.char},t))})}let eI="atlantis:sidebar-collapsed";function eA({sidebar:e,children:t,topBarRight:i,title:s="Atlantis",activeId:l=null}){let[c,d]=(0,a.useState)(()=>{try{return"true"===localStorage.getItem(eI)}catch{return!1}}),[p,u]=(0,a.useState)(null),m=(0,a.useRef)(),h=()=>d(e=>{let t=!e;try{localStorage.setItem(eI,String(t))}catch{}return t}),g=n().useMemo(()=>n().lazy(()=>Promise.resolve().then(r.bind(r,5816)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,o.jsx)(ei.I.Provider,{value:{collapsed:c,toggle:h,flyout:p,openFlyout:(e,t,r)=>{clearTimeout(m.current),u({entry:e,anchorY:t,onSelect:r})},scheduleFlyoutClose:()=>{m.current=setTimeout(()=>u(null),160)},cancelFlyoutClose:()=>clearTimeout(m.current)},children:(0,o.jsxs)(ez,{children:[(0,o.jsxs)(eb,{children:[e&&(0,o.jsx)(ew,{children:(0,o.jsx)(ey,{onClick:h,title:c?"Expand sidebar":"Collapse sidebar",children:(0,o.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,o.jsx)("path",{d:"M9 3v18"})]})})}),(0,o.jsx)(eB,{}),s&&(0,o.jsx)(ej,{children:s}),i&&(0,o.jsx)(eM,{children:i})]}),(0,o.jsxs)(eS,{children:[null!=e&&(0,o.jsx)(eT,{collapsed:c,children:(0,o.jsx)(eC,{children:e})}),(0,o.jsx)(eR,{children:t})]}),p&&(0,o.jsx)(n().Suspense,{fallback:null,children:(0,o.jsx)(g,{activeId:l})})]})})}s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,s().div`
  overflow: hidden;
`,s().div`
  padding-left: ${l.w4.spacing.md};
`,s().div`
  display: flex;
  flex-direction: column;
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${l.w4.spacing.sm} ${l.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":l.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${l.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${l.w4.colors.sidebarText};
    background: ${l.w4.colors.sidebarHover};
  }
`,s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${l.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${l.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?l.w4.colors.sidebarActive:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }
`,r(5816),s().div`
  padding: ${l.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,s().section`
  scroll-margin-top: ${l.w4.spacing.lg};
`,s().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
`,s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.xl};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  padding-left: max(${l.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${l.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${l.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${l.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${l.w4.colors.accent}; }
`,s().span`
  color: ${l.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${l.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`}}]);