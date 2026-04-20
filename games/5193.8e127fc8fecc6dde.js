"use strict";(self.webpackChunk_atlantis_games=self.webpackChunk_atlantis_games||[]).push([["5193"],{3783(e,o,a){a.d(o,{m:()=>M});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(2938),d=a(9484);let p=["\uD83C\uDF4C","\uD83D\uDCA8","\uD83E\uDDCA","⚡"],m=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,g=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,f=(0,s.keyframes)`0%{box-shadow:0 0 0 0 rgba(249,117,131,0.4)}70%{box-shadow:0 0 0 20px rgba(249,117,131,0)}100%{box-shadow:0 0 0 0 rgba(249,117,131,0)}`,h=i().div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${l.w4.spacing.lg};gap:${l.w4.spacing.lg};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(249,117,131,0.06) 0%,transparent 70%),#080b12;`,x=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${m} 0.3s ease;`,b=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;`,y=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=i().div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:#ef4444;animation:${g} 0.5s ease;`,v=i().span`font-size:72px;animation:${u} 1s ease-in-out infinite;`,$=i().div`
  position:relative;width:${320}px;height:${320}px;
  border-radius:50%;background:radial-gradient(circle,${l.w4.colors.surface} 60%,rgba(249,117,131,0.15) 100%);
  border:3px solid ${l.w4.colors.border};overflow:hidden;touch-action:none;
  animation:${f} 2s ease-in-out infinite;
`,k=i().div`
  position:absolute;inset:0;border-radius:50%;
  background:radial-gradient(circle,transparent 55%,rgba(249,117,131,0.08) 70%,rgba(249,117,131,0.2) 100%);
  pointer-events:none;
`,j=i().div`
  position:absolute;
  left:${({x:e})=>e-20}px;top:${({y:e})=>e-20}px;
  transition:opacity 0.3s;opacity:${({alive:e})=>e?1:.2};filter:${({alive:e})=>e?"none":"grayscale(1)"};
  pointer-events:none;
`,z=i().div`
  position:absolute;font-size:28px;line-height:1;
  left:${({x:e})=>e-14}px;top:${({y:e})=>e-14}px;
  pointer-events:none;animation:${u} 1s ease-in-out infinite;
`,S=i().div`font-size:18px;font-weight:700;color:${l.w4.colors.mainText};`;function M({lang:e}){let[o,a]=(0,r.useState)("menu"),[n,i]=(0,r.useState)(3),[s,l]=(0,r.useState)({x:160,y:160,vx:0,vy:0,charIdx:0,alive:!0,score:0}),[m,u]=(0,r.useState)([]),[g,f]=(0,r.useState)([]),[T,C]=(0,r.useState)({dx:0,dy:-1}),[A,R]=(0,r.useState)(0),B=(0,r.useRef)(s);B.current=s;let _=(0,r.useRef)(m);_.current=m;let E=(0,r.useRef)(T);E.current=T;let I=(0,r.useRef)(0),P=(0,r.useCallback)(()=>{let e=Math.floor(Math.random()*d.L.length),o=Array.from({length:3},(o,a)=>{let t=2*Math.PI*a/3;return{x:160+80*Math.cos(t),y:160+80*Math.sin(t),vx:0,vy:0,charIdx:(e+a+1)%d.L.length,alive:!0,score:0}});u(o),_.current=o,l({x:160,y:160,vx:0,vy:0,charIdx:e,alive:!0,score:0}),B.current={x:160,y:160,vx:0,vy:0,charIdx:e,alive:!0,score:0},f([]),R(0),i(3),a("countdown");let t=3,r=setInterval(()=>{i(--t),t<=0&&(clearInterval(r),a("playing"))},800)},[160]),F=(0,r.useCallback)(()=>{B.current.alive&&l(e=>({...e,vx:e.vx+12*E.current.dx,vy:e.vy+12*E.current.dy}))},[]);return((0,r.useEffect)(()=>{if("playing"!==o)return;let e=setInterval(()=>{l(e=>{if(!e.alive)return e;let o=e.x+e.vx,a=e.y+e.vy,t=.92*e.vx,r=.92*e.vy,n=o-160,i=a-160,s=Math.sqrt(n*n+i*i);if(s>140){let l=Math.atan2(i,n);o=160+140*Math.cos(l),a=160+140*Math.sin(l);let c=t*Math.cos(l)+r*Math.sin(l);if(t-=2*c*Math.cos(l)*.6,r-=2*c*Math.sin(l)*.6,s>150)return{...e,x:o,y:a,vx:0,vy:0,alive:!1}}return{...e,x:o,y:a,vx:t,vy:r}}),u(e=>e.map(e=>{if(!e.alive)return e;let o=e.x+e.vx,a=e.y+e.vy,t=.92*e.vx,r=.92*e.vy;if(.02>Math.random()){let o=160-e.x,a=160-e.y,n=Math.sqrt(o*o+a*a)||1;t+=o/n*12*.6,r+=a/n*12*.6}let n=o-160,i=a-160,s=Math.sqrt(n*n+i*i);if(s>140){let l=Math.atan2(i,n);o=160+140*Math.cos(l),a=160+140*Math.sin(l);let c=t*Math.cos(l)+r*Math.sin(l);if(t-=2*c*Math.cos(l)*.6,r-=2*c*Math.sin(l)*.6,s>150)return{...e,x:o,y:a,vx:0,vy:0,alive:!1}}let l=o-B.current.x,c=a-B.current.y;if(40>Math.sqrt(l*l+c*c)&&B.current.alive){let e=Math.atan2(c,l);t+=4*Math.cos(e),r+=4*Math.sin(e)}return{...e,x:o,y:a,vx:t,vy:r}}))},16);return()=>clearInterval(e)},[o,160,140]),(0,r.useEffect)(()=>{if("playing"!==o)return;let e=setInterval(()=>{if(!B.current.alive){clearInterval(e),setTimeout(()=>a("gameover"),500);return}R(e=>e+1)},1e3);return()=>clearInterval(e)},[o]),(0,r.useEffect)(()=>{if("playing"!==o)return;let e=setInterval(()=>{let e=++I.current,o=Math.random()*Math.PI*2,a=140*Math.random()*.8;f(t=>[...t,{x:160+Math.cos(o)*a,y:160+Math.sin(o)*a,emoji:p[Math.floor(Math.random()*p.length)],id:e}]),setTimeout(()=>f(o=>o.filter(o=>o.id!==e)),3e3)},5e3);return()=>clearInterval(e)},[o,160,140]),(0,r.useEffect)(()=>{if("playing"!==o)return;let e=e=>{"Space"===e.code&&(e.preventDefault(),F()),"ArrowUp"===e.key&&C({dx:0,dy:-1}),"ArrowDown"===e.key&&C({dx:0,dy:1}),"ArrowLeft"===e.key&&C({dx:-1,dy:0}),"ArrowRight"===e.key&&C({dx:1,dy:0})};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,F]),"menu"===o)?(0,t.jsxs)(h,{children:[(0,t.jsx)(d.G,{paletteIndex:0,pose:"idle",size:72}),(0,t.jsx)(x,{children:"Sumo Zoo"}),(0,t.jsx)(b,{children:"pt"===e?"Empurra os outros para fora da arena!":"Bump others off the arena!"}),(0,t.jsx)(y,{accent:"#ef4444",onClick:P,children:"pt"===e?"Jogar!":"Play!"})]}):"countdown"===o?(0,t.jsx)(h,{children:(0,t.jsx)(w,{children:n>0?n:"\uD83D\uDC3E"},n)}):"gameover"===o?(0,t.jsxs)(h,{children:[(0,t.jsx)(v,{children:"\uD83D\uDCA5"}),(0,t.jsx)(x,{children:"pt"===e?"Eliminado!":"Eliminated!"}),(0,t.jsxs)(S,{children:["⏱️ ",A,"s"]}),(0,t.jsx)(y,{accent:"#ef4444",onClick:P,children:"pt"===e?"Outra Vez":"Again"})]}):(0,t.jsxs)(h,{children:[(0,t.jsxs)(S,{children:["⏱️ ",A,"s"]}),(0,t.jsxs)($,{children:[(0,t.jsx)(k,{}),(0,t.jsx)(j,{x:s.x,y:s.y,alive:s.alive,children:(0,t.jsx)(d.G,{paletteIndex:s.charIdx,pose:s.alive?"idle":"dead",size:40})}),m.map((e,o)=>(0,t.jsx)(j,{x:e.x,y:e.y,alive:e.alive,children:(0,t.jsx)(d.G,{paletteIndex:e.charIdx,pose:e.alive?"idle":"dead",size:40})},o)),g.map(e=>(0,t.jsx)(z,{x:e.x,y:e.y,children:e.emoji},e.id))]}),(0,t.jsx)(c.UO,{onMove:e=>{(0!==e.dx||0!==e.dy)&&(Math.abs(e.dx)>=Math.abs(e.dy)?C({dx:e.dx,dy:0}):C({dx:0,dy:e.dy}))},actions:[{id:"dash",label:"\uD83D\uDCA8",color:"#dc2626",onPress:F}]})]})}},6114(e,o,a){a.d(o,{$:()=>ej});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(2938),d=a(9484),p=a(5782);let m=[[-1,0],[1,0],[0,-1],[0,1]],u={up:[-1,0],down:[1,0],left:[0,-1],right:[0,1]},g=["fire","bomb","speed","ghost","shield"],f=[30,30,20,10,10],h=[{name:{pt:"Blaze",en:"Blaze"},palette:0,accent:"#ff4444",desc:{pt:"R\xe1pido e furioso",en:"Fast & furious"}},{name:{pt:"Pixel",en:"Pixel"},palette:1,accent:"#44bb44",desc:{pt:"Equilibrado",en:"Balanced"}},{name:{pt:"Sparky",en:"Sparky"},palette:2,accent:"#ff6644",desc:{pt:"Explosivo!",en:"Explosive!"}},{name:{pt:"Shadow",en:"Shadow"},palette:3,accent:"#cc44cc",desc:{pt:"Misterioso",en:"Mysterious"}},{name:{pt:"Bolt",en:"Bolt"},palette:4,accent:"#ffaa00",desc:{pt:"Veloz como um raio",en:"Lightning fast"}},{name:{pt:"Frost",en:"Frost"},palette:5,accent:"#00cccc",desc:{pt:"Frio e calculista",en:"Cool & calculated"}},{name:{pt:"Ruby",en:"Ruby"},palette:6,accent:"#8855cc",desc:{pt:"Brilhante",en:"Brilliant"}},{name:{pt:"Nova",en:"Nova"},palette:7,accent:"#ff4488",desc:{pt:"Estrela em ascens\xe3o",en:"Rising star"}},{name:{pt:"Bomber",en:"Bomber"},palette:8,accent:"#4488ff",desc:{pt:"O cl\xe1ssico!",en:"The classic!"}},{name:{pt:"Knight",en:"Knight"},palette:9,accent:"#ff2222",desc:{pt:"Cavaleiro negro",en:"Dark knight"}},{name:{pt:"Creeper",en:"Creeper"},palette:10,accent:"#55ee55",desc:{pt:"Sssssss...BOOM!",en:"Sssssss...BOOM!"}},{name:{pt:"Ender",en:"Ender"},palette:11,accent:"#9944ff",desc:{pt:"Do outro mundo",en:"From another world"}}],x={title:{pt:"BombBrawl",en:"BombBrawl"},subtitle:{pt:"Escolhe o teu bomber!",en:"Choose your bomber!"},start:{pt:"Come\xe7ar!",en:"Start!"},youWin:{pt:"Ganhaste! \uD83C\uDF89",en:"You Win! \uD83C\uDF89"},youLose:{pt:"Perdeste! \uD83D\uDCA5",en:"You Lose! \uD83D\uDCA5"},draw:{pt:"Empate!",en:"Draw!"},playAgain:{pt:"Jogar de novo",en:"Play Again"},back:{pt:"Voltar",en:"Back"},go:{pt:"VAI!",en:"GO!"},bombs:{pt:"Bombas",en:"Bombs"},range:{pt:"Alcance",en:"Range"},speed:{pt:"Velocidade",en:"Speed"},controls:{pt:"Setas/WASD + Espa\xe7o",en:"Arrows/WASD + Space"},controlsMobile:{pt:"D-pad + Bot\xe3o \uD83D\uDCA3",en:"D-pad + \uD83D\uDCA3 Button"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},waiting:{pt:"\xc0 espera…",en:"Waiting…"},startMatch:{pt:"Iniciar!",en:"Start Match!"}};function b(e,o){return x[e]?.["pt"===o?"pt":"en"]??e}let y=null,w=!1;function v(e,o,a="square",t=.12){try{let r=w?(y||(y=new AudioContext),y):null;if(!r)return;let n=r.createOscillator(),i=r.createGain();n.type=a,n.frequency.setValueAtTime(e,r.currentTime),i.gain.setValueAtTime(t,r.currentTime),i.gain.exponentialRampToValueAtTime(.001,r.currentTime+o),n.connect(i).connect(r.destination),n.start(),n.stop(r.currentTime+o)}catch{}}function $(){v(440,.12,"square",.08)}let k=[[0,0],[0,1],[1,0],[0,12],[0,11],[1,12],[10,0],[10,1],[9,0],[10,12],[10,11],[9,12]];function j(e,o,a,t){return!(o<0)&&!(o>=11)&&!(a<0)&&!(a>=13)&&1!==e[o][a]&&(2!==e[o][a]||!!t)}function z(e,o){let a=new Set;for(let t of e)if(!t.detonated)for(let[e,r]of(a.add(`${t.row},${t.col}`),m))for(let n=1;n<=t.range;n++){let i=t.row+e*n,s=t.col+r*n;if(i<0||i>=11||s<0||s>=13||1===o[i][s]||(a.add(`${i},${s}`),2===o[i][s]))break}return a}function S(e,o){return -1===e?"up":1===e?"down":-1===o?"left":1===o?"right":null}function M(e,o,a,t){let r=0;for(let[n,i]of m)for(let s=1;s<=a;s++){let a=e+n*s,l=o+i*s;if(a<0||a>=11||l<0||l>=13||1===t[a][l])break;if(2===t[a][l]){r++;break}}return r}function T(e,o,a,t){if(e.activeBombs>=e.maxBombs||a.bombs.some(o=>!o.detonated&&o.row===e.row&&o.col===e.col))return null;let r=[...a.bombs,{id:-1,row:e.row,col:e.col,owner:o,timer:2500,range:e.range,detonated:!1}],n=z(r,a.grid),i=new Set(r.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),s=new Set;s.add(`${e.row},${e.col}`);let l=[];for(let[o,r]of m){let c=e.row+o,d=e.col+r,p=`${c},${d}`;if(j(a.grid,c,d,t)&&!i.has(p)){let e=S(o,r);if(!n.has(p))return e;s.add(p),l.push({r:c,c:d,firstDir:e})}}for(;l.length>0;){let{r:e,c:o,firstDir:r}=l.shift();for(let[c,d]of m){let p=e+c,m=o+d,u=`${p},${m}`;if(!s.has(u)&&j(a.grid,p,m,t)&&!i.has(u)){if(!n.has(u))return r;s.add(u),l.push({r:p,c:m,firstDir:r})}}}return null}function C(e,o,a,t,r,n){let i=new Set;i.add(`${a},${t}`);let s=new Set(e.bombs.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),l=[];for(let[c,d]of m){let p=a+c,m=t+d,u=`${p},${m}`;if(j(e.grid,p,m,n)&&!s.has(u)&&!o.has(u)){let e=S(c,d);if(r(p,m))return e;i.add(u),l.push({r:p,c:m,firstDir:e})}}for(;l.length>0;){let{r:a,c:t,firstDir:c}=l.shift();for(let[d,p]of m){let m=a+d,u=t+p,g=`${m},${u}`;if(!i.has(g)&&j(e.grid,m,u,n)&&!s.has(g)&&!o.has(g)){if(r(m,u))return c;i.add(g),l.push({r:m,c:u,firstDir:c})}}}return null}let A=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,R=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}`,B=(0,s.keyframes)`0%,100%{transform:scale(1)}50%{transform:scale(1.12)}`,_=(0,s.keyframes)`0%{transform:scale(0.4);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}`,E=(0,s.keyframes)`0%{opacity:1;transform:scale(0.5)}30%{transform:scale(1.1)}100%{opacity:0;transform:scale(1)}`,I=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}`,P=(0,s.keyframes)`0%,100%{box-shadow:0 0 0 2px rgba(88,166,255,0.4)}50%{box-shadow:0 0 0 4px rgba(88,166,255,0.7)}`,F=(0,s.keyframes)`0%,100%{opacity:0.5}50%{opacity:0.8}`,L=(0,s.keyframes)`0%,100%{box-shadow:0 0 12px var(--accent)}50%{box-shadow:0 0 24px var(--accent)}`,O=(0,s.keyframes)`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`,D=(0,s.keyframes)`0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.4) rotate(15deg)}`,H=(0,s.keyframes)`0%,100%{transform:translateY(0)}30%{transform:translateY(-16px)}`,N=i().div`
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
`,G=i().h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin: 0;
  text-align: center;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ff4444, #ff8844, #ffcc44);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${A} 0.4s ease;
`,Y=i().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  margin: 0;
  text-align: center;
  animation: ${A} 0.4s ease 0.1s both;
`,q=i().div`
  display: flex;
  gap: 4px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 20px;
  padding: 3px;
  animation: ${A} 0.4s ease 0.08s both;
`,V=i().button`
  padding: 8px 20px;
  border-radius: 16px;
  border: none;
  background: ${({active:e,color:o})=>e?(o??l.w4.colors.accent)+"20":"transparent"};
  color: ${({active:e,color:o})=>e?o??l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
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
  transition: all 0.2s;
  min-height: 52px;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 24px ${({accent:e})=>e}50; }
  &:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
`,U=i().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${l.w4.spacing.sm};
  max-width: 560px;
  width: 100%;
  animation: ${A} 0.4s ease 0.15s both;

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
  background: ${({selected:e,accent:o})=>e?`${o}18`:l.w4.colors.surface};
  border: 2px solid ${({selected:e,accent:o})=>e?o:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  transition: all 0.2s ease;
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
  font-size: 10px;
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
  transition: all 0.2s;
  min-height: 56px;
  letter-spacing: 0.02em;
  animation: ${A} 0.4s ease 0.25s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px ${({accent:e})=>e}50;
  }
  &:active { transform: translateY(-1px); }
`,eo=i().div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 11, 18, 0.7);
  z-index: 20;
`,ea=i().div`
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 900;
  color: ${({accent:e})=>e};
  text-shadow: 0 0 40px ${({accent:e})=>e}60;
  animation: ${R} 0.5s ease;
`,et=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  animation: ${O} 0.3s ease;
  position: relative;
  width: 100%;
  max-width: 800px;
`,er=i().div`
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
  left: ${({c:e,size:o})=>e*o}px;
  top: ${({r:e,size:o})=>e*o}px;
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
  animation: ${D} 0.35s ease forwards;
  pointer-events: none;
`;let ec=i()(ei)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${_} 0.2s ease;
  z-index: 5;

  .bomb-inner {
    animation: ${B} 0.6s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(255, 60, 20, 0.6)) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
  }
`,ed=i()(ei)`
  z-index: 8;
  pointer-events: none;
  border-radius: 4px;
  animation: ${E} ${450}ms ease-out forwards;
  background: ${({center:e})=>e?"radial-gradient(circle, #ffffff 0%, #ffee44 15%, #ffaa00 35%, #ff4400 60%, rgba(255, 30, 0, 0.3) 80%, transparent 100%)":"radial-gradient(circle, #ffee66 0%, #ff8822 30%, #ff4400 55%, rgba(255, 30, 0, 0.2) 80%, transparent 100%)"};
  box-shadow: ${({center:e})=>e?"0 0 20px rgba(255, 150, 0, 0.6), 0 0 40px rgba(255, 80, 0, 0.3)":"0 0 12px rgba(255, 120, 0, 0.4), 0 0 24px rgba(255, 60, 0, 0.2)"};
`,ep=i()(ei)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${I} 1.5s ease-in-out infinite;
  z-index: 3;
  font-size: ${({size:e})=>Math.max(14,.5*e)}px;

  &::before {
    content: '';
    position: absolute;
    inset: 15%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  }
`,em=i().span`
  filter:
    drop-shadow(0 0 6px ${({glowColor:e})=>e})
    drop-shadow(0 0 12px ${({glowColor:e})=>e}80);
`,eu=i().div`
  position: absolute;
  left: ${({c:e,size:o})=>e*o}px;
  top: ${({r:e,size:o})=>e*o}px;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.12s linear, top 0.12s linear;
  z-index: 10;
  opacity: ${({alive:e})=>e?1:.3};
  filter: ${({alive:e,ghostActive:o})=>e?o?"brightness(1.2) saturate(0.5)":"drop-shadow(0 2px 3px rgba(0,0,0,0.6))":"grayscale(1) brightness(0.5)"};
  ${({ghostActive:e})=>e&&(0,s.css)`animation: ${F} 1s ease-in-out infinite;`}
  ${({shieldActive:e})=>e&&(0,s.css)`animation: ${P} 1.5s ease-in-out infinite;`}
`,eg=i().div`
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
`,ef=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,eh=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
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
  animation: ${A} 0.4s ease;
`,ey=i().h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  font-weight: 900;
  margin: 0;
  color: ${({win:e})=>e?"#3fb950":"#f97583"};
  text-align: center;
`,ew=i().div`
  animation: ${H} 1s ease-in-out infinite;
`,ev=i().div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  opacity: 0.7;
  animation: ${A} 0.4s ease 0.3s both;
`,e$={fire:"\uD83D\uDD25",bomb:"\uD83D\uDCA3",speed:"\uD83C\uDFC3",ghost:"\uD83D\uDC7B",shield:"\uD83D\uDEE1️"},ek={fire:"#ff6622",bomb:"#ff4444",speed:"#44ff44",ghost:"#aa88ff",shield:"#4488ff"};function ej({lang:e,canOnline:o=!1}){let[a,n]=(0,r.useState)("charselect"),[i,s]=(0,r.useState)("solo"),[l,x]=(0,r.useState)(0),[A,R]=(0,r.useState)(3),[,B]=(0,r.useState)(0),_=(0,r.useRef)(null),E=(0,r.useRef)(null),I=(0,r.useRef)(!1),P=(0,r.useRef)(null),F=(0,r.useRef)(null),[L,O]=(0,r.useState)(40),D=(0,r.useRef)([]);(0,r.useRef)(0);let H=(0,r.useRef)(new Map),ei=(0,r.useRef)(0),ez=(0,r.useRef)(new Map),eS=(0,r.useRef)(0),eM="online"===i,eT=(0,r.useRef)(a);eT.current=a;let eC=(0,r.useRef)({updatePlayerCount:()=>{}}),eA=(0,r.useCallback)(e=>{let o=eB.current;if("guest-joined"===e.type){let a=[...o.room?.players??[],{id:e.playerId,name:e.name,isHost:!1}];o.addPlayer({id:e.playerId,name:e.name,isHost:!1}),eC.current.updatePlayerCount(a.length),o.sendEvent({type:"host-ack",name:(0,p.zE)(),playerId:o.room?.playerId??"",players:a})}else if("host-ack"===e.type)o.setPlayers(e.players);else if("player-list"===e.type)o.setPlayers(e.players);else if("player-left"===e.type){e.playerId&&o.removePlayer(e.playerId);let a=eT.current;("countdown"===a||"playing"===a||"gameover"===a)&&(eO(),o.room?.role==="host"&&eC.current.updatePlayerCount(0),o.leaveRoom(),n("charselect"),s("solo"))}else if("game-state"===e.type){let o=e.payload;if("input"===o.action){let e=o.playerId;H.current.set(e,{dir:o.dir,bomb:o.bomb})}else if("start"===o.action){_.current=o.gameState,ei.current=o.yourIndex,ez.current=new Map(Object.entries(o.playerIdMap)),n("countdown"),R(3);let e=3,a=setInterval(()=>{--e<=0?(clearInterval(a),n("playing")):R(e)},700)}else if("tick"===o.action){let e=_.current;if(!e)return;let a=o.state;e.players=a.players,e.bombs=a.bombs,e.explosions=a.explosions,e.powerUps=a.powerUps,a.grid&&(e.grid=a.grid),e.running=a.running,e.winner=a.winner,e.elapsed=a.elapsed,B(e=>e+1)}}},[]),eR=(0,p.Ky)({gameId:"bombbrawl",playerName:(0,p.zE)(),onEvent:eA}),eB=(0,r.useRef)(eR);eB.current=eR;let e_=(0,p.zj)({gameId:"bombbrawl",enabled:"lobby"===a&&"online"===i});eC.current=e_;let eE=e_.rooms;(0,r.useEffect)(()=>{function e(){let e=window.innerWidth>=768?48:24,o=Math.min(window.innerWidth-e,780),a=window.innerWidth>=1024?80:180,t=window.innerHeight-a,r=Math.floor(o/13),n=Math.floor(t/11);O(Math.max(26,Math.min(window.innerWidth>=768?60:48,r,n)))}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let eI=h[l].accent,eP=(0,r.useCallback)(e=>{let o,a=function(){let e=[];for(let o=0;o<11;o++){e[o]=[];for(let a=0;a<13;a++)o%2==0&&a%2==0&&o>0&&o<10&&a>0&&a<12?e[o][a]=1:function(e,o){return k.some(([a,t])=>a===e&&t===o)}(o,a)?e[o][a]=0:e[o][a]=2*(.62>Math.random())}return e}(),t=[[0,0],[0,12],[10,0],[10,12]],r=["aggressive","cautious","chaotic"];if(e&&e.length>0){o=[];for(let a=0;a<4;a++){let n=a<e.length,i=n?e[a].paletteIdx:Math.floor(Math.random()*d.L.length);o.push({row:t[a][0],col:t[a][1],alive:!0,maxBombs:1,activeBombs:0,range:1,speed:220,ghost:0,shield:!1,paletteIdx:i,dir:null,isBot:!n,personality:n?"aggressive":r[(a-e.length)%3],moveCooldown:0,aiCooldown:200+200*Math.random(),walking:!1,flipX:!1})}}else{let e=new Set([h[l].palette]);o=t.map((o,a)=>{let t;if(0===a)t=h[l].palette;else{do t=Math.floor(Math.random()*d.L.length);while(e.has(t));e.add(t)}return{row:o[0],col:o[1],alive:!0,maxBombs:1,activeBombs:0,range:1,speed:220,ghost:0,shield:!1,paletteIdx:t,dir:null,isBot:0!==a,personality:0===a?"aggressive":r[(a-1)%3],moveCooldown:0,aiCooldown:200+200*Math.random(),walking:!1,flipX:!1}})}let n={grid:a,players:o,bombs:[],explosions:[],powerUps:[],running:!0,winner:-1,bombIdCounter:0,elapsed:0};return _.current=n,D.current=[],n},[l]),eF=(0,r.useCallback)(e=>{let o=_.current;if(!o)return;let a=o.players[e];!a.alive||a.activeBombs>=a.maxBombs||o.bombs.some(e=>e.row===a.row&&e.col===a.col)||(a.activeBombs++,v(120,.3,"sawtooth",.15),setTimeout(()=>v(80,.4,"sawtooth",.2),50),o.bombs.push({id:o.bombIdCounter++,row:a.row,col:a.col,owner:e,timer:2500,range:a.range,detonated:!1}))},[]),eL=(0,r.useCallback)(()=>{P.current&&clearInterval(P.current),eS.current=0,P.current=setInterval(()=>{let e=_.current;if(!e||!e.running)return;e.elapsed+=16;for(let o=0;o<e.players.length;o++){let a=e.players[o];if(a.alive){if(a.ghost>0&&(a.ghost=Math.max(0,a.ghost-16)),a.isBot){if(a.aiCooldown-=16,a.aiCooldown<=0){let t=function(e,o,a){let t=z(a.bombs,a.grid),r=t.has(`${e.row},${e.col}`),n=e.ghost>0,i=e.activeBombs<e.maxBombs,s=a.bombs.some(o=>!o.detonated&&o.row===e.row&&o.col===e.col),l=a.bombs.filter(e=>!e.detonated&&e.owner===o).length,c=i&&!s&&0===l;if(r){let o=new Set(a.bombs.filter(e=>!e.detonated).map(e=>`${e.row},${e.col}`)),r=new Set;r.add(`${e.row},${e.col}`);let i=[];for(let[s,l]of m){let c=e.row+s,d=e.col+l,p=`${c},${d}`;if(j(a.grid,c,d,n)&&!o.has(p)){let e=S(s,l);if(!t.has(p))return{move:e,placeBomb:!1};r.add(p),i.push({r:c,c:d,firstDir:e})}}for(;i.length>0;){let{r:e,c:s,firstDir:l}=i.shift();for(let[c,d]of m){let p=e+c,m=s+d,u=`${p},${m}`;if(!r.has(u)&&j(a.grid,p,m,n)&&!o.has(u)){if(!t.has(u))return{move:l,placeBomb:!1};r.add(u),i.push({r:p,c:m,firstDir:l})}}}for(let[o,t]of m){let r=e.row+o,i=e.col+t;if(j(a.grid,r,i,n))return{move:S(o,t),placeBomb:!1}}return{move:null,placeBomb:!1}}let d=a.bombs.find(a=>!a.detonated&&a.owner!==o&&Math.abs(a.row-e.row)+Math.abs(a.col-e.col)<=1);if(d){let o=C(a,t,e.row,e.col,(e,o)=>!t.has(`${e},${o}`)&&Math.abs(e-d.row)+Math.abs(o-d.col)>2,n);if(o)return{move:o,placeBomb:!1}}let p=C(a,t,e.row,e.col,(e,o)=>a.powerUps.some(a=>a.row===e&&a.col===o),n);if(p)return{move:p,placeBomb:!1};let u=function(e,o,a){let t=null;for(let r=0;r<a.players.length;r++){if(r===o||!a.players[r].alive)continue;let n=Math.abs(a.players[r].row-e.row)+Math.abs(a.players[r].col-e.col);(!t||n<t.dist)&&(t={idx:r,dist:n})}return t}(e,o,a);if("aggressive"===e.personality&&u){let r=a.players[u.idx];if(u.dist<=2&&c&&function(e,o,a,t,r){for(let[n,i]of m)for(let s=1;s<=a;s++){let a=e+n*s,l=o+i*s;if(a<0||a>=11||l<0||l>=13||1===t.grid[a][l]||2===t.grid[a][l])break;for(let e=0;e<t.players.length;e++)if(e!==r&&t.players[e].alive&&t.players[e].row===a&&t.players[e].col===l)return!0}return!1}(e.row,e.col,e.range,a,o)){let t=T(e,o,a,n);if(t)return{move:t,placeBomb:!0}}let i=C(a,t,e.row,e.col,(e,o)=>e===r.row&&o===r.col,n);if(i)return{move:i,placeBomb:!1}}if("cautious"===e.personality&&u&&u.dist<=3){let o=a.players[u.idx],r=C(a,t,e.row,e.col,(e,a)=>Math.abs(e-o.row)+Math.abs(a-o.col)>5,n);if(r)return{move:r,placeBomb:!1}}if("chaotic"===e.personality&&u){if(u.dist<=3&&c&&.25>Math.random()){let t=T(e,o,a,n);if(t)return{move:t,placeBomb:!0}}if(.5>Math.random()){let o=a.players[u.idx],r=C(a,t,e.row,e.col,(e,a)=>e===o.row&&a===o.col,n);if(r)return{move:r,placeBomb:!1}}}if(c){if(M(e.row,e.col,e.range,a.grid)>=1){let t=T(e,o,a,n);if(t)return{move:t,placeBomb:!0}}let r=C(a,t,e.row,e.col,(o,t)=>M(o,t,e.range,a.grid)>=1,n);if(r)return{move:r,placeBomb:!1}}if(u){let r=a.players[u.idx];if(u.dist<=2&&c){let t=T(e,o,a,n);if(t)return{move:t,placeBomb:!0}}let i=C(a,t,e.row,e.col,(e,o)=>Math.abs(e-r.row)+Math.abs(o-r.col)<=1,n);if(i)return{move:i,placeBomb:!1}}for(let[o,r]of[...m].sort(()=>Math.random()-.5)){let i=e.row+o,s=e.col+r;if(j(a.grid,i,s,n)&&!t.has(`${i},${s}`)&&!a.bombs.some(e=>!e.detonated&&e.row===i&&e.col===s))return{move:S(o,r),placeBomb:!1}}return{move:null,placeBomb:!1}}(a,o,e);a.dir=t.move,t.placeBomb&&(eF(o),a.moveCooldown=0),a.aiCooldown="aggressive"===a.personality?80+80*Math.random():"chaotic"===a.personality?100+120*Math.random():120+140*Math.random()}}else if(o===ei.current)a.dir=E.current,I.current&&(eF(o),I.current=!1);else if(eM){for(let[e,t]of ez.current.entries())if(t===o){let t=H.current.get(e);t&&(a.dir=t.dir,t.bomb&&(eF(o),t.bomb=!1));break}}if(a.moveCooldown-=16,a.moveCooldown<=0&&a.dir){let o=u[a.dir];if(o){let t=a.row+o[0],r=a.col+o[1],n=a.ghost>0;j(e.grid,t,r,n)&&!e.bombs.some(e=>e.row===t&&e.col===r)&&(a.row=t,a.col=r,a.moveCooldown=a.speed,a.walking=!0,a.flipX=o[1]<0)}}a.walking=a.moveCooldown>.5*a.speed}}for(let o of e.bombs)!o.detonated&&(o.timer-=16,o.timer<=0&&function(e,o){let a=[o],t=new Set;for(;a.length>0;){let o=a.shift();if(t.has(o))continue;t.add(o);let r=e.bombs.find(e=>e.id===o);if(!r||r.detonated)continue;r.detonated=!0,v(200,.15,"square",.1),v(100,.3,"sawtooth",.18);let n=e.players[r.owner];for(let[o,t]of(n&&(n.activeBombs=Math.max(0,n.activeBombs-1)),e.explosions.push({row:r.row,col:r.col,timer:450}),m))for(let n=1;n<=r.range;n++){let i=r.row+o*n,s=r.col+t*n;if(i<0||i>=11||s<0||s>=13||1===e.grid[i][s])break;if(e.explosions.push({row:i,col:s,timer:450}),2===e.grid[i][s]){e.grid[i][s]=0,e.gridDirty=!0,.35>Math.random()&&e.powerUps.push({row:i,col:s,type:function(){let e=Math.random()*f.reduce((e,o)=>e+o,0);for(let o=0;o<g.length;o++)if((e-=f[o])<=0)return g[o];return"fire"}()});break}let l=e.bombs.find(e=>!e.detonated&&e.row===i&&e.col===s);l&&a.push(l.id)}}e.bombs=e.bombs.filter(e=>!e.detonated)}(e,o.id));e.explosions=e.explosions.filter(e=>(e.timer-=16,e.timer>0));let o=new Set(e.explosions.map(e=>`${e.row},${e.col}`));for(let a of e.players)a.alive&&o.has(`${a.row},${a.col}`)&&(a.shield?a.shield=!1:(a.alive=!1,v(300,.1,"square",.12),setTimeout(()=>v(200,.15,"square",.1),100),setTimeout(()=>v(100,.3,"sawtooth",.15),200)));for(let o of e.players){if(!o.alive)continue;let a=e.powerUps.findIndex(e=>e.row===o.row&&e.col===o.col);if(-1!==a){let t=e.powerUps[a];switch(v(440,.08,"square",.1),setTimeout(()=>v(660,.08,"square",.1),80),setTimeout(()=>v(880,.12,"square",.1),160),t.type){case"fire":o.range=Math.min(6,o.range+1);break;case"bomb":o.maxBombs=Math.min(5,o.maxBombs+1);break;case"speed":o.speed=Math.max(100,o.speed-40);break;case"ghost":o.ghost=6e3;break;case"shield":o.shield=!0}e.powerUps.splice(a,1)}}let a=e.players.filter(e=>e.alive);if(a.length<=1&&(e.running=!1,e.winner=1===a.length?e.players.indexOf(a[0]):-1),eM&&eR.room?.role==="host"&&(eS.current++,eS.current%5==0||!e.running)){let o={players:e.players,bombs:e.bombs,explosions:e.explosions,powerUps:e.powerUps,running:e.running,winner:e.winner,elapsed:e.elapsed};(e.gridDirty||!e.running)&&(o.grid=e.grid,e.gridDirty=!1),eR.sendEvent({type:"game-state",payload:{action:"tick",state:o}})}B(e=>e+1)},16)},[eF,eM,eR]),eO=(0,r.useCallback)(()=>{P.current&&(clearInterval(P.current),P.current=null)},[]),eD=(0,r.useRef)({dir:null,bomb:!1});(0,r.useEffect)(()=>{if(!eM||eB.current.room?.role!=="guest"||"playing"!==a)return;let e=setInterval(()=>{let e=eB.current.room;if(!e)return;let o=E.current,a=I.current;(o!==eD.current.dir||a)&&(eD.current={dir:o,bomb:a},eB.current.sendEvent({type:"game-state",payload:{action:"input",playerId:e.playerId,dir:o,bomb:a}}),a&&(I.current=!1))},50);return()=>clearInterval(e)},[eM,a]),(0,r.useEffect)(()=>{if("playing"!==a)return;let e={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right",W:"up",S:"down",A:"left",D:"right"},o=new Set;function t(a){if(" "===a.key||"Enter"===a.key){a.preventDefault(),I.current=!0;return}let t=e[a.key];t&&(a.preventDefault(),o.add(a.key),E.current=t)}function r(a){o.delete(a.key),0===o.size?E.current=null:E.current=e[[...o].pop()]??null}return window.addEventListener("keydown",t),window.addEventListener("keyup",r),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",r)}},[a]);let eH=(0,r.useCallback)(()=>{w=!0,eP(),ei.current=0,n("countdown"),R(3),$();let e=3,o=setInterval(()=>{--e<=0?(clearInterval(o),n("playing"),eL(),v(880,.2,"square",.12)):(R(e),$())},700)},[eP,eL]),eN=(0,r.useCallback)(()=>{if(!eR.room||"host"!==eR.room.role)return;w=!0,e_.unpublishRoom();let e=eR.room.players,o=eP(e.map((e,o)=>({id:e.id,paletteIdx:h[o%h.length].palette})));ei.current=0;let a={};e.forEach((e,o)=>{a[e.id]=o}),ez.current=new Map(Object.entries(a)),eR.sendEvent({type:"game-state",payload:{action:"start",gameState:o,playerIdMap:a}}),e.forEach((e,t)=>{e.isHost||eR.sendEvent({type:"game-state",payload:{action:"start",gameState:o,yourIndex:t,playerIdMap:a}})}),n("countdown"),R(3);let t=3,r=setInterval(()=>{--t<=0?(clearInterval(r),n("playing"),eL()):R(t)},700)},[eR,eP,eL]);(0,r.useEffect)(()=>()=>{eO(),w=!1,y&&(y.close().catch(()=>{}),y=null),eM&&(e_.unpublishRoom(),eR.leaveRoom())},[eO]);let eG=_.current,{walls:eY,blocks:eq}=(0,r.useMemo)(()=>{if(!eG)return{walls:[],blocks:[]};let e=[],o=[];for(let a=0;a<11;a++)for(let t=0;t<13;t++)1===eG.grid[a][t]?e.push([a,t]):2===eG.grid[a][t]&&o.push([a,t]);return{walls:e,blocks:o}},[eG,eG?.elapsed]);if("charselect"===a)return(0,t.jsxs)(N,{children:[(0,t.jsx)(G,{children:"\uD83D\uDCA3 BombBrawl"}),(0,t.jsx)(Y,{children:b("subtitle",e)}),o&&(0,t.jsxs)(q,{children:[(0,t.jsxs)(V,{active:"solo"===i,color:"#f59e0b",onClick:()=>s("solo"),children:["\uD83C\uDFAF ",b("solo",e)]}),(0,t.jsxs)(V,{active:"online"===i,color:"#3fb950",onClick:()=>s("online"),children:["\uD83C\uDF10 ",b("online",e)]})]}),(0,t.jsx)(U,{children:h.map((o,a)=>(0,t.jsxs)(K,{accent:o.accent,selected:l===a,onClick:()=>x(a),children:[(0,t.jsx)(d.G,{paletteIndex:o.palette,pose:"idle",size:1.2*L}),(0,t.jsx)(Q,{accent:o.accent,children:o.name["pt"===e?"pt":"en"]}),(0,t.jsx)(Z,{children:o.desc["pt"===e?"pt":"en"]})]},a))}),(0,t.jsx)(ee,{accent:eI,onClick:eM?()=>n("lobby"):eH,children:eM?b("online",e):b("start",e)}),(0,t.jsx)(ev,{children:"u">typeof window&&"ontouchstart"in window?b("controlsMobile",e):b("controls",e)})]});if("lobby"===a){let o=eR.room?.role==="host",a=eR.room?.players.length??0;return(0,t.jsxs)(N,{children:[(0,t.jsx)(G,{children:"\uD83D\uDCA3 BombBrawl"}),eR.room?.connected?(0,t.jsxs)(W,{children:[(0,t.jsxs)(Y,{children:["\uD83D\uDC65 ",a,"/4 ","pt"===e?"jogadores":"players"]}),(0,t.jsx)(J,{children:eR.room.players.map((e,o)=>(0,t.jsxs)(K,{accent:h[o%h.length].accent,selected:!1,children:[(0,t.jsx)(d.G,{paletteIndex:h[o%h.length].palette,pose:"idle",size:52}),(0,t.jsx)(Q,{accent:h[o%h.length].accent,children:e.name}),e.isHost&&(0,t.jsx)(Z,{children:"\uD83D\uDC51 Host"})]},e.id))}),o&&a>=2&&(0,t.jsx)(X,{accent:"#3fb950",onClick:eN,children:b("startMatch",e)}),!o&&(0,t.jsx)(Y,{children:b("waiting",e)})]}):(0,t.jsx)(p.XB,{lang:e,room:eR.room,error:eR.error,onCreateRoom:e=>{let{code:o,roomName:a}=eR.createRoom();e_.publishRoom({code:o,roomName:a,hostName:e,playerCount:1})},onJoinRoom:(e,o)=>eR.joinRoom(e),onLeaveRoom:()=>{e_.unpublishRoom(),eR.leaveRoom(),n("charselect")},availableRooms:eE})]})}if("playing"===a&&eG&&!eG.running){let o=ei.current,a=eG.winner===o,r=-1===eG.winner,i=eG.winner>=0?eG.players[eG.winner].paletteIdx:l;return(0,t.jsx)(N,{children:(0,t.jsxs)(eb,{children:[(0,t.jsx)(ew,{children:(0,t.jsx)(d.G,{paletteIndex:i,pose:r?"dead":"jump",size:120})}),(0,t.jsx)(ey,{win:a,children:r?b("draw",e):a?b("youWin",e):b("youLose",e)}),(0,t.jsx)(ee,{accent:a?"#3fb950":"#f97583",onClick:()=>{eO(),eM&&(e_.unpublishRoom(),eR.leaveRoom()),n("charselect")},children:b("playAgain",e)})]})})}if(!eG)return(0,t.jsx)(N,{});let eV=ei.current,eW=eG.players[eV]??eG.players[0];return(0,t.jsx)(N,{children:(0,t.jsxs)(et,{ref:F,children:[(0,t.jsxs)(ef,{children:[(0,t.jsx)(d.G,{paletteIndex:eW.paletteIdx,pose:"idle",size:28}),(0,t.jsxs)(eh,{children:["\uD83D\uDCA3 ",(0,t.jsxs)(ex,{color:"#ff4444",children:[eW.maxBombs-eW.activeBombs,"/",eW.maxBombs]})]}),(0,t.jsxs)(eh,{children:["\uD83D\uDD25 ",(0,t.jsx)(ex,{color:"#ff8844",children:eW.range})]}),(0,t.jsxs)(eh,{children:["\uD83C\uDFC3 ",(0,t.jsxs)(ex,{color:"#44ff44",children:[Math.round((1-(eW.speed-100)/120)*100),"%"]})]}),eW.shield&&(0,t.jsx)(eh,{children:"\uD83D\uDEE1️"}),eW.ghost>0&&(0,t.jsxs)(eh,{children:["\uD83D\uDC7B ",(0,t.jsxs)(ex,{color:"#aa88ff",children:[Math.ceil(eW.ghost/1e3),"s"]})]})]}),(0,t.jsxs)(er,{w:13*L,h:11*L,children:[(0,t.jsx)(en,{cellSize:L}),eY.map(([e,o])=>(0,t.jsx)(es,{r:e,c:o,size:L},`w${e},${o}`)),eq.map(([e,o])=>(0,t.jsx)(el,{r:e,c:o,size:L},`b${e},${o}`)),eG.powerUps.map((e,o)=>(0,t.jsx)(ep,{r:e.row,c:e.col,size:L,children:(0,t.jsx)(em,{glowColor:ek[e.type],children:e$[e.type]})},`pu${e.row},${e.col}-${o}`)),eG.bombs.map(e=>(0,t.jsx)(ec,{r:e.row,c:e.col,size:L,children:(0,t.jsx)("span",{className:"bomb-inner",style:{fontSize:Math.max(16,.6*L)},children:"\uD83D\uDCA3"})},`bomb${e.id}`)),eG.explosions.map((e,o)=>(0,t.jsx)(ed,{r:e.row,c:e.col,size:L,center:e.timer>400},`exp${e.row},${e.col}-${o}`)),eG.players.map((e,o)=>(0,t.jsxs)(eu,{r:e.row,c:e.col,size:L,alive:e.alive,ghostActive:e.ghost>0,shieldActive:e.shield,children:[e.isBot&&e.alive&&(0,t.jsx)(eg,{color:h[e.paletteIdx%h.length]?.accent??"#888",children:"aggressive"===e.personality?"\uD83D\uDE08":"cautious"===e.personality?"\uD83E\uDD13":"\uD83E\uDD2A"}),(0,t.jsx)(d.G,{paletteIndex:e.paletteIdx,pose:e.alive?e.walking?"walk":"idle":"dead",size:Math.round(.85*L),flipX:e.flipX})]},`p${o}`)),"countdown"===a&&(0,t.jsx)(eo,{children:(0,t.jsx)(ea,{accent:eI,children:0===A?b("go",e):A},A)})]}),"playing"===a&&(0,t.jsx)(c.UO,{onMove:e=>{let o=null;Math.abs(e.dx)>Math.abs(e.dy)?1===e.dx?o="right":-1===e.dx&&(o="left"):1===e.dy?o="down":-1===e.dy&&(o="up"),E.current=o},actions:[{id:"bomb",label:"\uD83D\uDCA3",color:"#dc2626",onPress:()=>{I.current=!0}}]})]})})}},9299(e,o,a){a.d(o,{M:()=>_});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246);let c=[{id:"tap-lots",emoji:"⚡",visual:"\uD83D\uDC46\uD83D\uDC46\uD83D\uDC46",instruction:{pt:"Toca muitas vezes!",en:"Tap many times!"},check:e=>e.taps>=10},{id:"dont-tap",emoji:"\uD83E\uDD2B",visual:"\uD83D\uDEAB\uD83D\uDC46",instruction:{pt:"N\xc3O toques!",en:"DON'T tap!"},check:e=>0===e.taps},{id:"tap-once",emoji:"☝️",visual:"1️⃣",instruction:{pt:"Toca s\xf3 UMA vez!",en:"Tap ONCE only!"},check:e=>1===e.taps},{id:"hold-it",emoji:"✊",visual:"⏳",instruction:{pt:"Mant\xe9m premido!",en:"Hold the button!"},check:e=>e.holdTime>=2e3},{id:"tap-3",emoji:"3️⃣",visual:"\uD83D\uDC46\uD83D\uDC46\uD83D\uDC46",instruction:{pt:"Toca exatamente 3 vezes!",en:"Tap exactly 3 times!"},check:e=>3===e.taps},{id:"tap-5",emoji:"5️⃣",visual:"✋",instruction:{pt:"Toca exatamente 5 vezes!",en:"Tap exactly 5 times!"},check:e=>5===e.taps},{id:"quick-tap",emoji:"\uD83D\uDCA8",visual:"⚡",instruction:{pt:"Toca super r\xe1pido!",en:"Tap super fast!"},check:e=>e.taps>=15},{id:"gentle",emoji:"\uD83E\uDD0F",visual:"\uD83D\uDE0C",instruction:{pt:"Toca devagar… 2 vezes",en:"Tap slowly… 2 times"},check:e=>2===e.taps}];function d(e){return e[Math.floor(Math.random()*e.length)]}let p=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,m=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,u=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,g=(0,s.keyframes)`0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(88,166,255,0.5)}50%{transform:scale(1.05);box-shadow:0 0 0 14px rgba(88,166,255,0)}`,f=(0,s.keyframes)`0%,100%{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}`,h=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,x=i().div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${l.w4.spacing.xl};gap:${l.w4.spacing.xl};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 40%,rgba(210,168,255,0.06) 0%,transparent 70%),#080b12;`,b=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${p} 0.3s ease;`,y=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:340px;`,w=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,v=i().span`font-size:72px;animation:${u} 1s ease-in-out infinite;`,$=i().div`
  display:flex;flex-direction:column;align-items:center;gap:${l.w4.spacing.lg};
  padding:${l.w4.spacing.xxl};background:${l.w4.colors.surface};border:3px solid ${l.w4.colors.accent};
  border-radius:24px;animation:${m} 0.4s ease;max-width:340px;width:100%;
`,k=i().span`font-size:80px;animation:${f} 1s ease-in-out infinite;`,j=i().span`font-size:36px;animation:${u} 1.2s ease-in-out infinite;`,z=i().p`font-size:${l.w4.typography.fontSizeLg};font-weight:700;color:${l.w4.colors.mainText};text-align:center;margin:0;`,S=i().button`
  width:clamp(180px,45vw,240px);height:clamp(180px,45vw,240px);border-radius:50%;
  background:${({pressing:e})=>e?"linear-gradient(145deg,#f97583,#ef4444)":"linear-gradient(145deg,#58a6ff,#3b82f6)"};
  border:6px solid rgba(255,255,255,0.2);font-size:clamp(3rem,8vw,5rem);color:#fff;
  cursor:pointer;transition:background 0.2s;
  animation:${g} 1.5s ease-in-out infinite;
  box-shadow:0 12px 48px rgba(88,166,255,0.4);
  &:active{transform:scale(0.92);animation:none;}
`,M=i().div`
  width:100%;max-width:300px;height:10px;border-radius:5px;background:${l.w4.colors.surface};overflow:hidden;
  &::after{content:'';display:block;height:100%;width:${({pct:e})=>100*e}%;
  background:${({pct:e})=>e>.5?"#3fb950":e>.25?"#f59e0b":"#f97583"};transition:width 0.3s linear;border-radius:5px;}
`,T=i().div`font-size:${l.w4.typography.fontSizeXl};font-weight:800;color:${l.w4.colors.accent};font-variant-numeric:tabular-nums;`,C=i().div`
  font-size:80px;animation:${m} 0.4s ease;
`,A=i().div`display:flex;gap:${l.w4.spacing.md};align-items:center;`,R=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};`,B=i().div`padding:8px 16px;background:rgba(249,158,11,0.12);border:1px solid rgba(249,158,11,0.3);border-radius:24px;font-size:16px;font-weight:700;color:#f59e0b;animation:${h} 0.3s ease;`;function _({lang:e}){let[o,a]=(0,r.useState)("menu"),[n,i]=(0,r.useState)(0),[s,p]=(0,r.useState)(0),[m,u]=(0,r.useState)(0),[g,f]=(0,r.useState)(null),[h,E]=(0,r.useState)({taps:0,held:!1,holdTime:0,movedDevice:!1}),[I,P]=(0,r.useState)(4),[F,L]=(0,r.useState)(null),[O,D]=(0,r.useState)(!1),[H,N]=(0,r.useState)(()=>{try{return Number(localStorage.getItem("atlantis-buttonmayhem-best")??"0")}catch{return 0}}),G=(0,r.useRef)(0),Y=(0,r.useRef)(null),q=(0,r.useRef)(null),V=(0,r.useRef)(h);V.current=h;let W=(0,r.useRef)(g);W.current=g;let J=(0,r.useRef)([]),X=(0,r.useCallback)(()=>{let e=c.filter(e=>!J.current.includes(e.id)),o=e.length>0?d(e):d(c);J.current=[...J.current,o.id].slice(-5),f(o),W.current=o,E({taps:0,held:!1,holdTime:0,movedDevice:!1}),V.current={taps:0,held:!1,holdTime:0,movedDevice:!1},a("rule-show"),setTimeout(()=>{P(4),a("playing")},3e3)},[]),U=(0,r.useCallback)(()=>{q.current&&clearInterval(q.current),Y.current&&clearInterval(Y.current);let e=W.current?.check(V.current)??!1;if(L(e),e){let e=5*m;p(o=>o+10+e),u(e=>e+1)}else u(0);a("result")},[m]);(0,r.useEffect)(()=>{if("playing"===o)return q.current=setInterval(()=>{P(e=>e<=.3?(U(),0):e-.1)},100),()=>{q.current&&clearInterval(q.current)}},[o,U]);let K=(0,r.useCallback)(()=>{"playing"===o&&E(e=>({...e,taps:e.taps+1}))},[o]),Q=(0,r.useCallback)(()=>{"playing"===o&&(D(!0),G.current=Date.now(),Y.current=setInterval(()=>{let e=Date.now()-G.current;E(o=>({...o,held:!0,holdTime:e}))},50))},[o]),Z=(0,r.useCallback)(()=>{D(!1),Y.current&&(clearInterval(Y.current),Y.current=null)},[]),ee=(0,r.useCallback)(()=>{let e=n+1;if(i(e),e>=8){if(s>H){N(s);try{localStorage.setItem("atlantis-buttonmayhem-best",String(s))}catch{}}a("scores")}else X()},[n,s,H,X]),eo=(0,r.useCallback)(()=>{i(0),p(0),u(0),J.current=[],X()},[X]);return"menu"===o?(0,t.jsxs)(x,{children:[(0,t.jsxs)(b,{children:["\uD83C\uDFB2 ","pt"===e?"Bot\xe3o Maluco!":"Button Mayhem!"]}),(0,t.jsx)(y,{children:"pt"===e?"Cada ronda tem uma regra diferente. Segue a instru\xe7\xe3o!":"Each round has a different rule. Follow the instruction!"}),H>0&&(0,t.jsxs)(y,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",H]}),(0,t.jsx)(w,{accent:"#d2a8ff",onClick:eo,children:"pt"===e?"Jogar!":"Play!"})]}):"rule-show"===o&&g?(0,t.jsxs)(x,{children:[(0,t.jsxs)(R,{children:["pt"===e?"Ronda":"Round"," ",n+1,"/",8]}),(0,t.jsxs)($,{children:[(0,t.jsx)(k,{children:g.emoji}),(0,t.jsx)(j,{children:g.visual}),(0,t.jsx)(z,{children:g.instruction["pt"===e?"pt":"en"]})]})]}):"result"===o?(0,t.jsxs)(x,{children:[(0,t.jsx)(C,{success:!!F,children:F?"✅":"❌"}),(0,t.jsx)(b,{children:F?"pt"===e?"Boa!":"Nice!":"pt"===e?"Ups!":"Oops!"}),(0,t.jsxs)(A,{children:[(0,t.jsxs)(R,{color:"#3fb950",children:["⭐ ",s]}),m>1&&(0,t.jsxs)(B,{children:["\uD83D\uDD25 x",m]})]}),(0,t.jsx)(w,{accent:"#d2a8ff",onClick:ee,children:"➡️"})]}):"scores"===o?(0,t.jsxs)(x,{children:[(0,t.jsx)(v,{children:"\uD83C\uDFB2"}),(0,t.jsx)(b,{children:"pt"===e?"Resultados":"Results"}),(0,t.jsxs)(R,{color:"#3fb950",children:["⭐ ",s]}),s>=H&&s>0&&(0,t.jsxs)(y,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,t.jsx)(w,{accent:"#d2a8ff",onClick:()=>a("menu"),children:"Menu"})]}):(0,t.jsxs)(x,{children:[(0,t.jsxs)(A,{children:[(0,t.jsxs)(R,{children:["⭐ ",s]}),(0,t.jsxs)(T,{children:["\uD83D\uDC46 ",h.taps]}),m>1&&(0,t.jsxs)(B,{children:["\uD83D\uDD25 x",m]})]}),(0,t.jsx)(M,{pct:I/4}),(0,t.jsx)(S,{pressing:O,onClick:K,onMouseDown:Q,onMouseUp:Z,onTouchStart:e=>{e.preventDefault(),Q(),K()},onTouchEnd:Z,children:g?.emoji??"?"}),h.held&&(0,t.jsxs)(y,{style:{color:l.w4.colors.accent},children:["✊ ",(h.holdTime/1e3).toFixed(1),"s"]})]})}},2017(e,o,a){a.d(o,{A:()=>I});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246);let c=[{name:"burger",ingredients:["\uD83C\uDF5E","\uD83E\uDD69","\uD83E\uDDC0"],result:"\uD83C\uDF54"},{name:"pizza",ingredients:["\uD83C\uDF5E","\uD83E\uDDC0","\uD83C\uDF45"],result:"\uD83C\uDF55"},{name:"salad",ingredients:["\uD83E\uDD6C","\uD83C\uDF45","\uD83E\uDD51"],result:"\uD83E\uDD57"},{name:"cake",ingredients:["\uD83E\uDD5A","\uD83C\uDF6B","\uD83C\uDF53"],result:"\uD83C\uDF82"},{name:"sushi",ingredients:["\uD83C\uDF5A","\uD83E\uDD51","\uD83E\uDD52"],result:"\uD83C\uDF63"},{name:"sandwich",ingredients:["\uD83C\uDF5E","\uD83E\uDD6C","\uD83E\uDD69"],result:"\uD83E\uDD6A"}],d=["\uD83C\uDF5E","\uD83E\uDD69","\uD83E\uDDC0","\uD83C\uDF45","\uD83E\uDD6C","\uD83E\uDD51","\uD83E\uDD5A","\uD83C\uDF6B","\uD83C\uDF53","\uD83C\uDF5A","\uD83E\uDD52","\uD83C\uDF6F"],p=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,m=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,u=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}`,g=(0,s.keyframes)`0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}`,f=(0,s.keyframes)`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`,h=i().div`flex:1;display:flex;flex-direction:column;align-items:center;padding:${l.w4.spacing.md};gap:${l.w4.spacing.md};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(249,158,11,0.08) 0%,transparent 70%),#080b12;`,x=i().h1`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${p} 0.3s ease;`,b=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;`,y=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,w=i().div`display:flex;gap:12px;overflow-x:auto;width:100%;max-width:600px;padding:8px 4px;justify-content:center;flex-wrap:wrap;`,v=i().div`
  display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 16px;min-width:110px;
  background:${l.w4.colors.surface};border:2px solid ${({urgent:e})=>e?"#f97583":l.w4.colors.border};
  border-radius:${l.w4.borderRadius.lg};flex-shrink:0;
  animation: ${({urgent:e})=>e?g:f} ${({urgent:e})=>e?"0.5s ease infinite":"0.3s ease"};
`,$=i().span`font-size:40px;line-height:1.2;`,k=i().div`display:flex;gap:4px;font-size:22px;line-height:1.2;`,j=i().div`width:100%;height:6px;border-radius:3px;background:${l.w4.colors.border};overflow:hidden;
  &::after{content:'';display:block;height:100%;width:${({pct:e})=>100*e}%;background:${({pct:e})=>e>.5?"#3fb950":e>.25?"#f59e0b":"#f97583"};transition:width 1s linear;border-radius:3px;}`,z=i().div`
  display:flex;gap:8px;align-items:center;justify-content:center;padding:16px;min-height:80px;
  background:${l.w4.colors.surface};border:2px dashed ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};
  width:100%;max-width:400px;flex-wrap:wrap;
`,S=i().span`font-size:40px;animation:${m} 0.2s ease;`,M=i().span`font-size:14px;color:${l.w4.colors.mainTextMuted};`,T=i().div`display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:400px;width:100%;`,C=i().button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,44px);
  background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};
  cursor:pointer;transition:all 0.15s;min-height:64px;
  &:hover{background:rgba(88,166,255,0.08);transform:scale(1.08);border-color:${l.w4.colors.accent};}
  &:active{transform:scale(0.92);}
`,A=i().div`display:flex;gap:8px;`,R=i().button`
  padding:10px 24px;border-radius:${l.w4.borderRadius.lg};border:2px solid ${({color:e})=>e};
  background:${({color:e})=>e}15;color:${({color:e})=>e};font-size:16px;font-weight:700;
  cursor:pointer;min-height:44px;font-family:${l.w4.typography.fontFamily};transition:all 0.15s;
  &:hover{background:${({color:e})=>e}25;transform:translateY(-1px);}
`,B=i().div`display:flex;gap:${l.w4.spacing.lg};align-items:center;`,_=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};animation:${({urgent:e})=>e?g:"none"} ${({urgent:e})=>e?"0.5s ease infinite":"none"};`,E=i().span`font-size:72px;animation:${u} 1s ease-in-out infinite;`;function I({lang:e}){let[o,a]=(0,r.useState)("menu"),[n,i]=(0,r.useState)([]),[s,l]=(0,r.useState)([]),[p,m]=(0,r.useState)(0),[u,g]=(0,r.useState)(60),[f,P]=(0,r.useState)(0),[F,L]=(0,r.useState)(()=>{try{return Number(localStorage.getItem("atlantis-kitchen-best")??"0")}catch{return 0}}),O=(0,r.useRef)(0),D=(0,r.useRef)(0),H=(0,r.useCallback)(()=>{i([]),l([]),m(0),D.current=0,g(60),P(0),O.current=0,a("playing")},[]);(0,r.useEffect)(()=>{if("playing"!==o)return;let e=setInterval(()=>{g(o=>{if(o<=1){clearInterval(e);let o=D.current;if(o>F){L(o);try{localStorage.setItem("atlantis-kitchen-best",String(o))}catch{}}return a("gameover"),0}return o-1})},1e3);return()=>clearInterval(e)},[o,F]),(0,r.useEffect)(()=>{if("playing"!==o)return;let e=()=>{let e=++O.current,o=c[Math.floor(Math.random()*c.length)],a=15+Math.floor(10*Math.random());i(t=>[...t.slice(-4),{id:e,recipe:o,timeLeft:a,maxTime:a}])};e();let a=setInterval(e,8e3);return()=>clearInterval(a)},[o]),(0,r.useEffect)(()=>{if("playing"!==o)return;let e=setInterval(()=>{i(e=>e.map(e=>({...e,timeLeft:e.timeLeft-1})).filter(e=>e.timeLeft>0))},1e3);return()=>clearInterval(e)},[o]);let N=(0,r.useCallback)(e=>{"playing"===o&&l(o=>o.length>=6?o:[...o,e])},[o]),G=(0,r.useCallback)(()=>l([]),[]),Y=(0,r.useCallback)(()=>{if(0===s.length)return;let e=n.findIndex(e=>{if(e.recipe.ingredients.length!==s.length)return!1;let o=[...e.recipe.ingredients].sort(),a=[...s].sort();return o.every((e,o)=>e===a[o])});if(e>=0){let o=n[e],a=Math.ceil(o.timeLeft/o.maxTime*50),t=10*f;D.current+=100+a+t,m(D.current),P(e=>e+1),i(o=>o.filter((o,a)=>a!==e))}else P(0);l([])},[s,n,f]);return"menu"===o?(0,t.jsxs)(h,{children:[(0,t.jsxs)(x,{children:["\uD83D\uDC68‍\uD83C\uDF73 ","pt"===e?"Cozinha Louca!":"Crazy Kitchen!"]}),(0,t.jsx)(b,{children:"pt"===e?"Prepara as encomendas o mais r\xe1pido poss\xedvel!":"Fill orders as fast as you can!"}),F>0&&(0,t.jsxs)(b,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",F]}),(0,t.jsx)(y,{accent:"#f59e0b",onClick:H,children:"pt"===e?"Jogar!":"Play!"})]}):"gameover"===o?(0,t.jsxs)(h,{children:[(0,t.jsx)(E,{children:"\uD83D\uDC68‍\uD83C\uDF73"}),(0,t.jsx)(x,{children:"pt"===e?"Tempo esgotado!":"Time's up!"}),(0,t.jsxs)(_,{color:"#3fb950",children:["⭐ ",p]}),p>=F&&p>0&&(0,t.jsxs)(b,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,t.jsx)(y,{accent:"#f59e0b",onClick:H,children:"pt"===e?"Outra Vez":"Again"})]}):(0,t.jsxs)(h,{children:[(0,t.jsxs)(B,{children:[(0,t.jsxs)(_,{color:"#3fb950",children:["⭐ ",p]}),(0,t.jsxs)(_,{color:u<=10?"#f97583":u<=20?"#f59e0b":"#3fb950",urgent:u<=10,children:["⏱️ ",u,"s"]}),f>1&&(0,t.jsxs)(_,{color:"#d2a8ff",children:["\uD83D\uDD25 x",f]})]}),(0,t.jsxs)(w,{children:[n.map(e=>(0,t.jsxs)(v,{urgent:e.timeLeft<=5,children:[(0,t.jsx)($,{children:e.recipe.result}),(0,t.jsx)(k,{children:e.recipe.ingredients.map((e,o)=>(0,t.jsx)("span",{children:e},o))}),(0,t.jsx)(j,{pct:e.timeLeft/e.maxTime})]},e.id)),0===n.length&&(0,t.jsx)(b,{style:{padding:12},children:"pt"===e?"Sem encomendas…":"No orders…"})]}),(0,t.jsx)(z,{children:s.length>0?s.map((e,o)=>(0,t.jsx)(S,{children:e},o)):(0,t.jsx)(M,{children:"pt"===e?"\uD83D\uDC46 Toca nos ingredientes":"\uD83D\uDC46 Tap ingredients"})}),(0,t.jsxs)(A,{children:[(0,t.jsx)(R,{color:"#f97583",onClick:G,children:"\uD83D\uDDD1️"}),(0,t.jsxs)(R,{color:"#3fb950",onClick:Y,children:["✅ ","pt"===e?"Servir!":"Serve!"]})]}),(0,t.jsx)(T,{children:d.map(e=>(0,t.jsx)(C,{onClick:()=>N(e),children:e},e))})]})}},9791(e,o,a){a.d(o,{c:()=>P});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(5782);let d=[{emoji:"\uD83D\uDC36",label:"dog"},{emoji:"\uD83D\uDC31",label:"cat"},{emoji:"\uD83C\uDFE0",label:"house"},{emoji:"\uD83C\uDF33",label:"tree"},{emoji:"☀️",label:"sun"},{emoji:"\uD83D\uDE97",label:"car"},{emoji:"\uD83C\uDF55",label:"pizza"},{emoji:"⭐",label:"star"},{emoji:"\uD83D\uDC1F",label:"fish"},{emoji:"\uD83C\uDF3A",label:"flower"},{emoji:"\uD83D\uDE80",label:"rocket"},{emoji:"\uD83C\uDF4C",label:"banana"},{emoji:"\uD83C\uDF82",label:"cake"},{emoji:"\uD83D\uDC18",label:"elephant"},{emoji:"\uD83E\uDD8B",label:"butterfly"},{emoji:"⚽",label:"ball"},{emoji:"\uD83C\uDF19",label:"moon"},{emoji:"\uD83D\uDC38",label:"frog"},{emoji:"\uD83C\uDFB8",label:"guitar"},{emoji:"\uD83C\uDF4E",label:"apple"},{emoji:"\uD83D\uDC0D",label:"snake"},{emoji:"\uD83C\uDFD4️",label:"mountain"},{emoji:"\uD83C\uDF0A",label:"wave"},{emoji:"\uD83C\uDF66",label:"ice cream"},{emoji:"\uD83D\uDC14",label:"chicken"},{emoji:"\uD83C\uDF88",label:"balloon"},{emoji:"\uD83D\uDC22",label:"turtle"},{emoji:"\uD83C\uDF08",label:"rainbow"},{emoji:"\uD83E\uDD81",label:"lion"},{emoji:"\uD83C\uDF49",label:"watermelon"}],p=["#ffffff","#f97583","#58a6ff","#3fb950","#f59e0b","#d2a8ff","#ff6bcb","#000000"];function m(e){return e[Math.floor(Math.random()*e.length)]}function u(e){let o=[...e];for(let e=o.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[o[e],o[a]]=[o[a],o[e]]}return o}let g=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,f=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,h=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,x=i().div`flex:1;display:flex;flex-direction:column;align-items:center;padding:${l.w4.spacing.md};gap:${l.w4.spacing.md};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(210,168,255,0.06) 0%,transparent 70%),#080b12;`,b=i().h1`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${g} 0.3s ease;`,y=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;`,w=i().button`padding:14px 36px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:48px;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px ${({accent:e})=>e}40;}`,v=i().canvas`
  width:100%;max-width:500px;aspect-ratio:4/3;background:#1a1a2e;border:2px solid ${l.w4.colors.border};
  border-radius:${l.w4.borderRadius.lg};cursor:crosshair;touch-action:none;
`,$=i().div`display:flex;gap:6px;flex-wrap:wrap;justify-content:center;`,k=i().button`width:36px;height:36px;border-radius:50%;background:${({c:e})=>e};border:3px solid ${({active:e})=>e?"#fff":"transparent"};cursor:pointer;transition:transform 0.15s;&:hover{transform:scale(1.15);}`,j=i().button`padding:6px 14px;border-radius:${l.w4.borderRadius.md};border:1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};background:${({active:e})=>e?"rgba(88,166,255,0.12)":"transparent"};color:${l.w4.colors.mainText};font-size:13px;font-weight:600;cursor:pointer;min-height:36px;`,z=i().button`padding:6px 14px;border-radius:${l.w4.borderRadius.md};border:1px solid ${l.w4.colors.border};background:transparent;color:#f97583;font-size:13px;font-weight:600;cursor:pointer;min-height:36px;&:hover{border-color:#f97583;}`,S=i().div`display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:10px 20px;background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.accent};border-radius:${l.w4.borderRadius.lg};animation:${f} 0.3s ease;`,M=i().span`font-size:48px;`,T=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({urgent:e})=>e?"#f97583":l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({urgent:e})=>e?"#f97583":l.w4.colors.mainText};`,C=i().div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:400px;width:100%;`,A=i().button`
  display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 8px;
  background:${l.w4.colors.surface};border:2px solid ${({correct:e,wrong:o})=>e?"#3fb950":o?"#f97583":l.w4.colors.border};
  border-radius:${l.w4.borderRadius.lg};cursor:pointer;transition:all 0.15s;min-height:80px;font-size:36px;
  ${({correct:e})=>e?"background:rgba(63,185,80,0.15);":""}
  ${({wrong:e})=>e?"background:rgba(249,117,131,0.15);":""}
  &:hover:not(:disabled){border-color:${l.w4.colors.accent};transform:scale(1.05);}
`,R=i().span`font-size:80px;animation:${h} 0.8s ease-in-out infinite;`,B=i().div`display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;animation:${g} 0.3s ease;`,_=i().div`display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:10px 14px;background:${l.w4.colors.surface};border:1px solid ${({highlight:e})=>e?l.w4.colors.accent:l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};`,E=i().span`flex:1;font-weight:600;color:${({highlight:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};`,I=i().span`font-size:20px;font-weight:800;color:${({color:e})=>e??l.w4.colors.mainText};`;function P({lang:e,canOnline:o}){let[a,n]=(0,r.useState)("menu"),[i,s]=(0,r.useState)(null),[g,f]=(0,r.useState)([]),[h,F]=(0,r.useState)(0),[L,O]=(0,r.useState)(30),[D,H]=(0,r.useState)(0),[N,G]=(0,r.useState)({}),[Y,q]=(0,r.useState)("#ffffff"),[V,W]=(0,r.useState)(4),[J,X]=(0,r.useState)(null),[U,K]=(0,r.useState)(!1),[Q,Z]=(0,r.useState)([]),[ee]=(0,r.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),eo=(0,r.useRef)(null),ea=(0,r.useRef)(!1),et=(0,r.useRef)(null),er=(0,r.useRef)(null),en=(0,r.useCallback)(e=>{switch(e.type){case"guest-joined":es.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),es.current.sendEvent({type:"host-ack",name:ee,playerId:es.current.room?.playerId??"",players:es.current.room?.players??[]});break;case"host-ack":es.current.setConnected(e.name),e.players&&es.current.setPlayers([...e.players,{id:es.current.room?.playerId??"",name:ee,isHost:!1}]);break;case"player-list":es.current.setPlayers(e.players);break;case"game-state":{let o=e.payload;if("new-round"===o.action){let e=o.drawerId===es.current.room?.playerId;K(e),F(o.round),O(30),X(null),Z([]),ep(),e?(s(o.prompt),n("drawing")):(s(null),f(o.options),n("guessing"))}else if("stroke"===o.action){let e=o.stroke;Z(o=>[...o,e]),em(e)}else"clear"===o.action?(Z([]),ep()):"reveal"===o.action?(s(o.prompt),n("reveal")):"scores"===o.action?G(o.scores):"game-over"===o.action&&(G(o.scores),n("scores"));break}case"player-left":e.playerId&&es.current.removePlayer(e.playerId)}},[ee]),ei=(0,c.Ky)({gameId:"drawguess",playerName:ee,onEvent:en}),es=(0,r.useRef)(ei);es.current=ei;let el=(0,c.zj)({gameId:"drawguess",enabled:"menu"===a||"lobby"===a}),ec=(0,r.useRef)(h);ec.current=h;let ed=(0,r.useRef)(N);ed.current=N;let ep=(0,r.useCallback)(()=>{let e=eo.current?.getContext("2d");e&&(e.fillStyle="#1a1a2e",e.fillRect(0,0,e.canvas.width,e.canvas.height))},[]),em=(0,r.useCallback)(e=>{let o=eo.current?.getContext("2d");if(o&&!(e.points.length<2)){o.strokeStyle=e.color,o.lineWidth=e.width,o.lineCap="round",o.lineJoin="round",o.beginPath(),o.moveTo(e.points[0][0],e.points[0][1]);for(let a=1;a<e.points.length;a++)o.lineTo(e.points[a][0],e.points[a][1]);o.stroke()}},[]);(0,r.useEffect)(()=>{let e=eo.current;e&&(e.width=e.offsetWidth,e.height=e.offsetHeight,ep(),Q.forEach(em))});let eu=(0,r.useCallback)(e=>{let o=eo.current;if(!o)return null;let a=o.getBoundingClientRect(),t="touches"in e?e.touches[0]?.clientX??e.changedTouches[0]?.clientX:e.clientX,r="touches"in e?e.touches[0]?.clientY??e.changedTouches[0]?.clientY:e.clientY;return[(t-a.left)/a.width*o.width,(r-a.top)/a.height*o.height]},[]),eg=(0,r.useCallback)(e=>{if(!U)return;let o=eu(e);o&&(ea.current=!0,et.current={points:[o],color:Y,width:V})},[U,Y,V,eu]),ef=(0,r.useCallback)(e=>{if(!ea.current||!et.current)return;let o=eu(e);if(!o)return;et.current.points.push(o);let a=eo.current?.getContext("2d");if(!a)return;let t=et.current.points;a.strokeStyle=et.current.color,a.lineWidth=et.current.width,a.lineCap="round",a.beginPath(),a.moveTo(t[t.length-2][0],t[t.length-2][1]),a.lineTo(t[t.length-1][0],t[t.length-1][1]),a.stroke()},[eu]),eh=(0,r.useCallback)(()=>{if(!ea.current||!et.current)return;ea.current=!1;let e=et.current;et.current=null,Z(o=>[...o,e]),ei.sendEvent({type:"game-state",payload:{action:"stroke",stroke:e}})},[ei]),ex=(0,r.useCallback)(()=>{Z([]),ep(),ei.sendEvent({type:"game-state",payload:{action:"clear"}})},[ei,ep]);(0,r.useEffect)(()=>{if("drawing"===a||"guessing"===a)return er.current&&clearInterval(er.current),er.current=setInterval(()=>{O(e=>e<=1?(er.current&&clearInterval(er.current),ei.room?.role==="host"&&ei.sendEvent({type:"game-state",payload:{action:"reveal",prompt:i}}),n("reveal"),0):e-1)},1e3),()=>{er.current&&clearInterval(er.current)}},[a,ei,i]);let eb=(0,r.useCallback)(()=>{let e=ec.current+1;if(e>5){ei.sendEvent({type:"game-state",payload:{action:"game-over",scores:ed.current}}),n("scores");return}let o=ei.room?.players??[],a=(e-1)%o.length,t=o[a].id,r=m(d),i=u(d.filter(e=>e.emoji!==r.emoji)).slice(0,5),l=u([r,...i]);F(e),ec.current=e,O(30),X(null),Z([]),ep();let c=t===ei.room?.playerId;K(c),c?(s(r),n("drawing")):(s(null),f(l),n("guessing")),ei.sendEvent({type:"game-state",payload:{action:"new-round",round:e,drawerId:t,prompt:r,options:l}})},[ei,ep]),ey=(0,r.useCallback)(e=>{if(J)return;let o=e===i?.emoji;if(X(e),o){let e=ei.room?.playerId??"",o={...ed.current,[e]:(ed.current[e]??0)+1};G(o),ed.current=o,H(e=>e+1),ei.sendEvent({type:"game-state",payload:{action:"scores",scores:o}})}},[J,i,ei]),ew=(0,r.useCallback)(()=>{F(0),ec.current=0,H(0),G({}),ed.current={};let e=m(d),o=u(d.filter(o=>o.emoji!==e.emoji)).slice(0,5);s(e),f(u([e,...o])),F(1),ec.current=1,O(30),X(null),K(!1),n("guessing")},[]);if("menu"===a)return(0,t.jsxs)(x,{children:[(0,t.jsxs)(b,{children:["\uD83C\uDFA8 ","pt"===e?"Desenha e Adivinha!":"Draw & Guess!"]}),(0,t.jsx)(y,{children:"pt"===e?"Um desenha, os outros adivinham!":"One draws, others guess!"}),o?(0,t.jsx)(w,{accent:"#d2a8ff",onClick:()=>n("lobby"),children:"\uD83C\uDF10 Online"}):(0,t.jsx)(w,{accent:"#d2a8ff",onClick:ew,children:"pt"===e?"Jogar Sozinho":"Play Solo"})]});if("lobby"===a)return(0,t.jsxs)(x,{children:[(0,t.jsxs)(b,{children:["\uD83C\uDFA8 ","pt"===e?"Desenha e Adivinha!":"Draw & Guess!"]}),ei.room?.connected?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(y,{children:[ei.room.players.length," ","pt"===e?"jogadores":"players"]}),(0,t.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:ei.room.players.map(e=>(0,t.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===ei.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===ei.room.role&&ei.room.players.length>=2&&(0,t.jsx)(w,{accent:"#d2a8ff",onClick:eb,children:"pt"===e?"Come\xe7ar!":"Start!"}),ei.room.players.length<2&&(0,t.jsx)(y,{children:"pt"===e?"M\xednimo 2 jogadores":"Minimum 2 players"})]}):(0,t.jsx)(c.XB,{lang:e,room:ei.room,error:ei.error,availableRooms:el.rooms,onCreateRoom:()=>{let{code:e,roomName:o}=ei.createRoom();el.publishRoom({code:e,roomName:o,hostName:ee,playerCount:1})},onJoinRoom:e=>ei.joinRoom(e),onLeaveRoom:()=>{el.unpublishRoom(),ei.leaveRoom(),n("menu")}})]});if("scores"===a){let o=(ei.room?.players??[{id:"me",name:ee,isHost:!1}]).map(e=>({id:e.id,name:e.name,pts:N[e.id]??0})).sort((e,o)=>o.pts-e.pts);return(0,t.jsxs)(x,{children:[(0,t.jsxs)(b,{children:["\uD83C\uDFC6 ","pt"===e?"Resultados":"Results"]}),(0,t.jsx)(B,{children:o.map((e,o)=>(0,t.jsxs)(_,{highlight:e.id===ei.room?.playerId,children:[(0,t.jsx)("span",{style:{fontSize:18,minWidth:28},children:0===o?"\uD83E\uDD47":1===o?"\uD83E\uDD48":2===o?"\uD83E\uDD49":`${o+1}.`}),(0,t.jsx)(E,{highlight:e.id===ei.room?.playerId,children:e.name}),(0,t.jsx)(I,{color:0===o?"#3fb950":void 0,children:e.pts})]},e.id))}),(0,t.jsx)(w,{accent:"#d2a8ff",onClick:()=>{ei.leaveRoom(),el.unpublishRoom(),n("menu")},children:"Menu"})]})}return"reveal"===a?(0,t.jsxs)(x,{children:[(0,t.jsx)(y,{children:"pt"===e?"A resposta era:":"The answer was:"}),i&&(0,t.jsx)(R,{children:i.emoji}),ei.room?.role==="host"&&(0,t.jsx)(w,{accent:"#d2a8ff",onClick:eb,children:ec.current>=5?"pt"===e?"Ver resultados":"See results":"➡️"})]}):(0,t.jsxs)(x,{children:[(0,t.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,t.jsxs)(T,{urgent:L<=5,children:["⏱️ ",L,"s"]}),U&&(0,t.jsx)(y,{children:"pt"===e?"Desenha isto:":"Draw this:"}),U&&i&&(0,t.jsx)(S,{children:(0,t.jsx)(M,{children:i.emoji})}),!U&&(0,t.jsx)(y,{children:"pt"===e?"O que \xe9 o desenho?":"What is the drawing?"})]}),(0,t.jsx)(v,{ref:eo,onMouseDown:eg,onMouseMove:ef,onMouseUp:eh,onMouseLeave:eh,onTouchStart:eg,onTouchMove:ef,onTouchEnd:eh}),U&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($,{children:p.map(e=>(0,t.jsx)(k,{c:e,active:Y===e,onClick:()=>q(e)},e))}),(0,t.jsxs)($,{children:[[2,4,8,14].map(e=>(0,t.jsx)(j,{active:V===e,onClick:()=>W(e),children:2===e?"\xb7":4===e?"•":8===e?"●":"⬤"},e)),(0,t.jsx)(z,{onClick:ex,children:"\uD83D\uDDD1️"})]})]}),!U&&(0,t.jsx)(C,{children:g.map(e=>(0,t.jsx)(A,{correct:J===e.emoji&&e.emoji===i?.emoji,wrong:J===e.emoji&&e.emoji!==i?.emoji,onClick:()=>ey(e.emoji),disabled:!!J,children:e.emoji},e.emoji))})]})}},1639(e,o,a){a.d(o,{i:()=>ep});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(5782);let d=[{id:"geography",icon:"\uD83C\uDF0D",color:"#3fb950",label:{en:"Geography",pt:"Geografia"},questions:[{q:{en:"What is the capital of France?",pt:"Qual \xe9 a capital da Fran\xe7a?"},options:[{en:"Berlin",pt:"Berlim"},{en:"Madrid",pt:"Madrid"},{en:"Paris",pt:"Paris"},{en:"Rome",pt:"Roma"}],correct:2},{q:{en:"How many continents are there on Earth?",pt:"Quantos continentes existem na Terra?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:2},{q:{en:"What is the largest ocean in the world?",pt:"Qual \xe9 o maior oceano do mundo?"},options:[{en:"Atlantic Ocean",pt:"Oceano Atl\xe2ntico"},{en:"Indian Ocean",pt:"Oceano \xcdndico"},{en:"Arctic Ocean",pt:"Oceano \xc1rtico"},{en:"Pacific Ocean",pt:"Oceano Pac\xedfico"}],correct:3},{q:{en:"Which is the longest river in the world?",pt:"Qual \xe9 o rio mais longo do mundo?"},options:[{en:"Amazon",pt:"Amazonas"},{en:"Nile",pt:"Nilo"},{en:"Mississippi",pt:"Mississ\xedpi"},{en:"Yangtze",pt:"Yangtz\xe9"}],correct:1},{q:{en:"What is the capital of Brazil?",pt:"Qual \xe9 a capital do Brasil?"},options:[{en:"S\xe3o Paulo",pt:"S\xe3o Paulo"},{en:"Rio de Janeiro",pt:"Rio de Janeiro"},{en:"Bras\xedlia",pt:"Bras\xedlia"},{en:"Salvador",pt:"Salvador"}],correct:2},{q:{en:"Which continent is the largest?",pt:"Qual \xe9 o maior continente?"},options:[{en:"Africa",pt:"\xc1frica"},{en:"North America",pt:"Am\xe9rica do Norte"},{en:"Asia",pt:"\xc1sia"},{en:"Europe",pt:"Europa"}],correct:2},{q:{en:"What is the capital of Portugal?",pt:"Qual \xe9 a capital de Portugal?"},options:[{en:"Porto",pt:"Porto"},{en:"Lisbon",pt:"Lisboa"},{en:"Faro",pt:"Faro"},{en:"Coimbra",pt:"Coimbra"}],correct:1},{q:{en:"The Amazon River flows through which continent?",pt:"O rio Amazonas atravessa qual continente?"},options:[{en:"Africa",pt:"\xc1frica"},{en:"North America",pt:"Am\xe9rica do Norte"},{en:"Asia",pt:"\xc1sia"},{en:"South America",pt:"Am\xe9rica do Sul"}],correct:3},{q:{en:"How many oceans are there on Earth?",pt:"Quantos oceanos existem na Terra?"},options:[{en:"3",pt:"3"},{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"}],correct:2},{q:{en:"Which country has the most people?",pt:"Qual pa\xeds tem mais pessoas?"},options:[{en:"USA",pt:"EUA"},{en:"India",pt:"\xcdndia"},{en:"China",pt:"China"},{en:"Russia",pt:"R\xfassia"}],correct:1}]},{id:"science",icon:"\uD83D\uDD2C",color:"#58a6ff",label:{en:"Science",pt:"Ci\xeancias"},questions:[{q:{en:"How many planets are in our Solar System?",pt:"Quantos planetas tem o nosso Sistema Solar?"},options:[{en:"7",pt:"7"},{en:"8",pt:"8"},{en:"9",pt:"9"},{en:"10",pt:"10"}],correct:1},{q:{en:"What are the three states of matter?",pt:"Quais s\xe3o os tr\xeas estados da mat\xe9ria?"},options:[{en:"Hot, cold, warm",pt:"Quente, frio, morno"},{en:"Solid, liquid, gas",pt:"S\xf3lido, l\xedquido, gasoso"},{en:"Hard, soft, medium",pt:"Duro, mole, m\xe9dio"},{en:"Fire, water, earth",pt:"Fogo, \xe1gua, terra"}],correct:1},{q:{en:"Which planet is closest to the Sun?",pt:"Qual planeta est\xe1 mais perto do Sol?"},options:[{en:"Venus",pt:"V\xe9nus"},{en:"Earth",pt:"Terra"},{en:"Mercury",pt:"Merc\xfario"},{en:"Mars",pt:"Marte"}],correct:2},{q:{en:"How many bones does an adult human body have?",pt:"Quantos ossos tem o corpo humano adulto?"},options:[{en:"106",pt:"106"},{en:"206",pt:"206"},{en:"306",pt:"306"},{en:"406",pt:"406"}],correct:1},{q:{en:"What do plants need to make their food?",pt:"O que as plantas precisam para fazer o seu alimento?"},options:[{en:"Darkness and water",pt:"Escurid\xe3o e \xe1gua"},{en:"Sunlight and carbon dioxide",pt:"Luz solar e di\xf3xido de carbono"},{en:"Rain and soil only",pt:"Chuva e terra apenas"},{en:"Oxygen and fire",pt:"Oxig\xeanio e fogo"}],correct:1},{q:{en:"What is the largest planet in our Solar System?",pt:"Qual \xe9 o maior planeta do Sistema Solar?"},options:[{en:"Saturn",pt:"Saturno"},{en:"Neptune",pt:"Neptuno"},{en:"Uranus",pt:"\xdarano"},{en:"Jupiter",pt:"J\xfapiter"}],correct:3},{q:{en:"What organ pumps blood around your body?",pt:"Que \xf3rg\xe3o bombeia o sangue pelo corpo?"},options:[{en:"Liver",pt:"F\xedgado"},{en:"Lungs",pt:"Pulm\xf5es"},{en:"Heart",pt:"Cora\xe7\xe3o"},{en:"Brain",pt:"C\xe9rebro"}],correct:2},{q:{en:"What happens to water when it freezes?",pt:"O que acontece \xe0 \xe1gua quando congela?"},options:[{en:"It becomes a gas",pt:"Torna-se um g\xe1s"},{en:"It becomes smaller",pt:"Fica mais pequena"},{en:"It becomes a solid",pt:"Torna-se um s\xf3lido"},{en:"It disappears",pt:"Desaparece"}],correct:2},{q:{en:"Which planet has rings around it?",pt:"Qual planeta tem an\xe9is \xe0 sua volta?"},options:[{en:"Mars",pt:"Marte"},{en:"Venus",pt:"V\xe9nus"},{en:"Mercury",pt:"Merc\xfario"},{en:"Saturn",pt:"Saturno"}],correct:3},{q:{en:"What is the center of the Solar System?",pt:"O que est\xe1 no centro do Sistema Solar?"},options:[{en:"The Moon",pt:"A Lua"},{en:"The Earth",pt:"A Terra"},{en:"The Sun",pt:"O Sol"},{en:"Jupiter",pt:"J\xfapiter"}],correct:2}]},{id:"animals",icon:"\uD83D\uDC3E",color:"#f0883e",label:{en:"Animals",pt:"Animais"},questions:[{q:{en:"What do pandas mostly eat?",pt:"O que os pandas comem principalmente?"},options:[{en:"Fish",pt:"Peixe"},{en:"Bamboo",pt:"Bambu"},{en:"Leaves",pt:"Folhas"},{en:"Berries",pt:"Bagas"}],correct:1},{q:{en:"Where do penguins live?",pt:"Onde vivem os pinguins?"},options:[{en:"Africa",pt:"\xc1frica"},{en:"North Pole",pt:"Polo Norte"},{en:"South Pole / Antarctica",pt:"Polo Sul / Ant\xe1rtida"},{en:"Amazon rainforest",pt:"Floresta amaz\xf3nica"}],correct:2},{q:{en:"What is a baby cat called?",pt:"Como se chama um beb\xe9 gato?"},options:[{en:"Puppy",pt:"Cachorro"},{en:"Cub",pt:"Filhote"},{en:"Kitten",pt:"Gatinho"},{en:"Calf",pt:"Bezerro"}],correct:2},{q:{en:"Which is the fastest land animal?",pt:"Qual \xe9 o animal terrestre mais r\xe1pido?"},options:[{en:"Lion",pt:"Le\xe3o"},{en:"Horse",pt:"Cavalo"},{en:"Cheetah",pt:"Guepardo"},{en:"Leopard",pt:"Leopardo"}],correct:2},{q:{en:"How many legs does a spider have?",pt:"Quantas patas tem uma aranha?"},options:[{en:"6",pt:"6"},{en:"8",pt:"8"},{en:"10",pt:"10"},{en:"12",pt:"12"}],correct:1},{q:{en:"What is a baby dog called?",pt:"Como se chama um beb\xe9 c\xe3o?"},options:[{en:"Kitten",pt:"Gatinho"},{en:"Foal",pt:"Potro"},{en:"Puppy",pt:"Cachorro"},{en:"Lamb",pt:"Cordeiro"}],correct:2},{q:{en:"Which animal is known as the king of the jungle?",pt:"Qual animal \xe9 conhecido como o rei da selva?"},options:[{en:"Tiger",pt:"Tigre"},{en:"Elephant",pt:"Elefante"},{en:"Lion",pt:"Le\xe3o"},{en:"Gorilla",pt:"Gorila"}],correct:2},{q:{en:"What do cows eat?",pt:"O que as vacas comem?"},options:[{en:"Fish",pt:"Peixe"},{en:"Grass and hay",pt:"Erva e feno"},{en:"Insects",pt:"Insetos"},{en:"Fruit",pt:"Fruta"}],correct:1},{q:{en:"Which is the largest animal on Earth?",pt:"Qual \xe9 o maior animal da Terra?"},options:[{en:"Elephant",pt:"Elefante"},{en:"Giraffe",pt:"Girafa"},{en:"Blue whale",pt:"Baleia azul"},{en:"Giant squid",pt:"Lula gigante"}],correct:2},{q:{en:"What sound does a duck make?",pt:"Que som faz um pato?"},options:[{en:"Moo",pt:"Mu"},{en:"Quack",pt:"Qu\xe1 qu\xe1"},{en:"Oink",pt:"Ronc ronc"},{en:"Baa",pt:"B\xe9"}],correct:1}]},{id:"culture",icon:"\uD83C\uDFA8",color:"#bc8cff",label:{en:"Culture",pt:"Cultura"},questions:[{q:{en:"How many strings does a guitar usually have?",pt:"Quantas cordas tem normalmente uma guitarra?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"8",pt:"8"}],correct:2},{q:{en:'Who wrote the fairy tale "Cinderella"?',pt:'Quem escreveu o conto "A Gata Borralheira"?'},options:[{en:"Hans Christian Andersen",pt:"Hans Christian Andersen"},{en:"Charles Perrault",pt:"Charles Perrault"},{en:"Brothers Grimm",pt:"Irm\xe3os Grimm"},{en:"Walt Disney",pt:"Walt Disney"}],correct:1},{q:{en:"What instrument has black and white keys?",pt:"Que instrumento tem teclas pretas e brancas?"},options:[{en:"Violin",pt:"Violino"},{en:"Trumpet",pt:"Trompete"},{en:"Piano",pt:"Piano"},{en:"Flute",pt:"Flauta"}],correct:2},{q:{en:"In which story does a boy travel to Neverland?",pt:"Em que hist\xf3ria um menino viaja para a Terra do Nunca?"},options:[{en:"Pinocchio",pt:"Pin\xf3quio"},{en:"Peter Pan",pt:"Peter Pan"},{en:"Alice in Wonderland",pt:"Alice no Pa\xeds das Maravilhas"},{en:"The Wizard of Oz",pt:"O Feiticeiro de Oz"}],correct:1},{q:{en:"Which instrument do you blow to play?",pt:"Que instrumento se sopra para tocar?"},options:[{en:"Drums",pt:"Bateria"},{en:"Guitar",pt:"Guitarra"},{en:"Flute",pt:"Flauta"},{en:"Harp",pt:"Harpa"}],correct:2},{q:{en:"What are the three primary colors?",pt:"Quais s\xe3o as tr\xeas cores prim\xe1rias?"},options:[{en:"Green, purple, orange",pt:"Verde, roxo, laranja"},{en:"Red, blue, yellow",pt:"Vermelho, azul, amarelo"},{en:"Black, white, grey",pt:"Preto, branco, cinzento"},{en:"Pink, brown, gold",pt:"Rosa, castanho, dourado"}],correct:1},{q:{en:"Who painted the Mona Lisa?",pt:"Quem pintou a Mona Lisa?"},options:[{en:"Michelangelo",pt:"Miguel \xc2ngelo"},{en:"Pablo Picasso",pt:"Pablo Picasso"},{en:"Leonardo da Vinci",pt:"Leonardo da Vinci"},{en:"Vincent van Gogh",pt:"Vincent van Gogh"}],correct:2},{q:{en:"In the story of the Three Little Pigs, what does the wolf do?",pt:"Na hist\xf3ria dos Tr\xeas Porquinhos, o que faz o lobo?"},options:[{en:"Sings songs",pt:"Canta can\xe7\xf5es"},{en:"Blows down houses",pt:"Derruba casas soprando"},{en:"Bakes cakes",pt:"Faz bolos"},{en:"Steals food",pt:"Rouba comida"}],correct:1},{q:{en:"Which instrument has strings you hit with sticks?",pt:"Que instrumento tem cordas que se tocam com baquetas?"},options:[{en:"Violin",pt:"Violino"},{en:"Piano",pt:"Piano"},{en:"Xylophone",pt:"Xilofone"},{en:"Banjo",pt:"Banjo"}],correct:2}]},{id:"history",icon:"\uD83C\uDFDB️",color:"#e3b341",label:{en:"History",pt:"Hist\xf3ria"},questions:[{q:{en:"Who invented the telephone?",pt:"Quem inventou o telefone?"},options:[{en:"Thomas Edison",pt:"Thomas Edison"},{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Benjamin Franklin",pt:"Benjamin Franklin"}],correct:1},{q:{en:"Who was the first person to walk on the Moon?",pt:"Quem foi a primeira pessoa a caminhar na Lua?"},options:[{en:"Buzz Aldrin",pt:"Buzz Aldrin"},{en:"Yuri Gagarin",pt:"Yuri Gagarin"},{en:"Neil Armstrong",pt:"Neil Armstrong"},{en:"John Glenn",pt:"John Glenn"}],correct:2},{q:{en:"What ancient civilization built the pyramids?",pt:"Que civiliza\xe7\xe3o antiga construiu as pir\xe2mides?"},options:[{en:"Romans",pt:"Romanos"},{en:"Greeks",pt:"Gregos"},{en:"Egyptians",pt:"Eg\xedpcios"},{en:"Vikings",pt:"Vikings"}],correct:2},{q:{en:"Who was Christopher Columbus?",pt:"Quem foi Crist\xf3v\xe3o Colombo?"},options:[{en:"A famous painter",pt:"Um famoso pintor"},{en:"An explorer who sailed to America",pt:"Um explorador que navegou at\xe9 \xe0 Am\xe9rica"},{en:"A Roman emperor",pt:"Um imperador romano"},{en:"A scientist",pt:"Um cientista"}],correct:1},{q:{en:"Who invented the light bulb?",pt:"Quem inventou a l\xe2mpada el\xe9trica?"},options:[{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Albert Einstein",pt:"Albert Einstein"},{en:"Thomas Edison",pt:"Thomas Edison"}],correct:3},{q:{en:"What did the ancient Romans build across their empire to travel?",pt:"O que os romanos constru\xedram pelo imp\xe9rio para viajar?"},options:[{en:"Canals",pt:"Canais"},{en:"Railways",pt:"Comboios"},{en:"Roads",pt:"Estradas"},{en:"Bridges only",pt:"Apenas pontes"}],correct:2},{q:{en:"What did Vasco da Gama discover?",pt:"O que descobriu Vasco da Gama?"},options:[{en:"A sea route to India",pt:"O caminho mar\xedtimo para a \xcdndia"},{en:"The Americas",pt:"As Am\xe9ricas"},{en:"Australia",pt:"A Austr\xe1lia"},{en:"The South Pole",pt:"O Polo Sul"}],correct:0},{q:{en:"Which ancient wonder is still standing today?",pt:"Qual maravilha antiga ainda existe hoje?"},options:[{en:"The Colossus of Rhodes",pt:"O Colosso de Rodes"},{en:"The Hanging Gardens",pt:"Os Jardins Suspensos"},{en:"The Great Pyramid of Giza",pt:"A Grande Pir\xe2mide de Giz\xe9"},{en:"The Lighthouse of Alexandria",pt:"O Farol de Alexandria"}],correct:2},{q:{en:"In what year did the first man land on the Moon?",pt:"Em que ano o primeiro homem pousou na Lua?"},options:[{en:"1959",pt:"1959"},{en:"1969",pt:"1969"},{en:"1979",pt:"1979"},{en:"1989",pt:"1989"}],correct:1}]},{id:"sports",icon:"⚽",color:"#f78166",label:{en:"Sports",pt:"Desporto"},questions:[{q:{en:"How many players are on a football (soccer) team on the field?",pt:"Quantos jogadores tem uma equipa de futebol em campo?"},options:[{en:"9",pt:"9"},{en:"10",pt:"10"},{en:"11",pt:"11"},{en:"12",pt:"12"}],correct:2},{q:{en:"How often are the Summer Olympics held?",pt:"De quantos em quantos anos se realizam os Jogos Ol\xedmpicos de Ver\xe3o?"},options:[{en:"Every 2 years",pt:"De 2 em 2 anos"},{en:"Every 3 years",pt:"De 3 em 3 anos"},{en:"Every 4 years",pt:"De 4 em 4 anos"},{en:"Every 5 years",pt:"De 5 em 5 anos"}],correct:2},{q:{en:"In basketball, how many points is a regular shot worth?",pt:"No basquetebol, quantos pontos vale um cesto normal?"},options:[{en:"1",pt:"1"},{en:"2",pt:"2"},{en:"3",pt:"3"},{en:"4",pt:"4"}],correct:1},{q:{en:"In which sport do you use a racket and a shuttlecock?",pt:"Em que desporto se usa uma raquete e um volante?"},options:[{en:"Tennis",pt:"T\xe9nis"},{en:"Squash",pt:"Squash"},{en:"Badminton",pt:"Badminton"},{en:"Table tennis",pt:"T\xe9nis de mesa"}],correct:2},{q:{en:"Who is famous for winning 23 Olympic gold medals in swimming?",pt:"Quem \xe9 famoso por ganhar 23 medalhas de ouro ol\xedmpicas em nata\xe7\xe3o?"},options:[{en:"Ian Thorpe",pt:"Ian Thorpe"},{en:"Ryan Lochte",pt:"Ryan Lochte"},{en:"Michael Phelps",pt:"Michael Phelps"},{en:"Mark Spitz",pt:"Mark Spitz"}],correct:2},{q:{en:"How many players are on each side in volleyball?",pt:"Quantos jogadores tem cada equipa no voleibol?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:1},{q:{en:"What sport uses a puck instead of a ball?",pt:"Que desporto usa um disco em vez de bola?"},options:[{en:"Lacrosse",pt:"Lacrosse"},{en:"Polo",pt:"Polo"},{en:"Ice hockey",pt:"H\xf3quei no gelo"},{en:"Baseball",pt:"Basebol"}],correct:2},{q:{en:"In tennis, what is it called when the score is tied at 40-40?",pt:"No t\xe9nis, como se chama quando o marcador est\xe1 40-40?"},options:[{en:"Tie",pt:"Empate"},{en:"Deuce",pt:"Deuce"},{en:"Love",pt:"Love"},{en:"Match point",pt:"Match point"}],correct:1},{q:{en:"How many rings are on the Olympic flag?",pt:"Quantos an\xe9is tem a bandeira ol\xedmpica?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"}],correct:1}]}],p=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=(0,s.keyframes)`
  0%   { transform: scale(0.7); opacity: 0; }
  60%  { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); }
`,u=(0,s.keyframes)`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.08); }
`,g=(0,s.keyframes)`
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
`,f=(0,s.keyframes)`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,h=(0,s.keyframes)`
  0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`,x=(0,s.keyframes)`
  from { width: 0; }
`,b=(0,s.keyframes)`
  from { width: 100%; }
  to   { width: 0%; }
`,y=(0,s.keyframes)`
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1); }
`,w=i().div`
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
  transition: background 0.2s ease, border-color 0.2s ease;
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
`,j=i().div`display:flex;gap:2px;padding:2px;background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.md};margin-bottom:${l.w4.spacing.md};`,z=i().button`padding:8px 18px;border:none;border-radius:${l.w4.borderRadius.sm};font-size:14px;min-height:36px;font-weight:600;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:background 0.2s,color 0.2s;background:${({active:e})=>e?"rgba(59,130,246,0.18)":"transparent"};color:${({active:e})=>e?"#3b82f6":l.w4.colors.mainTextMuted};&:hover{color:#3b82f6;background:rgba(59,130,246,0.1);}`,S=i().button`padding:14px 32px;background:#3b82f6;border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:48px;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,0.4);}`,M=i().div`
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
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  min-height: 44px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({catColor:e})=>e};
    opacity: 0;
    transition: opacity 0.2s ease;
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
`,A=i().span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
`,R=i().span`
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
`,_=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.md};
`,E=i().div`
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  background: ${l.w4.colors.surface};
  border: 1px solid ${({catColor:e})=>e};
  border-radius: 99px;
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${({catColor:e})=>e};
`,I=i().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.surface};
  border-radius: 99px;
  overflow: hidden;
  border: 1px solid ${l.w4.colors.border};
`,P=i().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: ${({catColor:e})=>e};
  border-radius: 99px;
  transition: width 0.4s ease;
  animation: ${x} 0.5s ease;
`,F=i().span`
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
  background: ${({urgent:e,catColor:o})=>e?"#f85149":o};
  border-radius: 2px;
  margin-bottom: ${l.w4.spacing.md};
  animation: ${b} ${({duration:e})=>e}s linear forwards;
  transform-origin: left;
`,D=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({urgent:e})=>e?"#f85149":l.w4.colors.mainTextMuted};
  transition: color 0.3s ease;
`,H=i().p`
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
`,G=i().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  background: ${({status:e})=>"correct"===e||"highlight"===e?"rgba(63, 185, 80, 0.15)":"wrong"===e?"rgba(248, 81, 73, 0.15)":l.w4.colors.mainBg};
  border: 2px solid
    ${({status:e,catColor:o})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":"idle"===e?l.w4.colors.border:o};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 500;
  cursor: ${({status:e})=>"idle"===e?"pointer":"default"};
  text-align: left;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  min-height: 56px;
  animation: ${({status:e})=>"correct"===e?`${u} 0.4s ease`:"wrong"===e?`${g} 0.4s ease`:"none"};

  &:hover {
    background: ${({status:e,catColor:o})=>"idle"===e?`${o}18`:void 0};
    border-color: ${({status:e,catColor:o})=>"idle"===e?o:void 0};
    transform: ${({status:e})=>"idle"===e?"translateY(-1px)":"none"};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: ${l.w4.typography.fontSizeBase};
    min-height: 52px;
  }
`,Y=i().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-weight: 700;
  font-size: ${l.w4.typography.fontSizeSm};
  flex-shrink: 0;
  background: ${({status:e,catColor:o})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":o};
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
  animation: ${m} 0.35s ease;
`,V=i().div`
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
  animation: ${y} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
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
  animation: ${({lit:e})=>e?`${h} 0.5s ease`:"none"};
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
`,eo=i().button`
  flex: 1;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  min-height: 48px;
  border: 2px solid
    ${({primary:e,catColor:o})=>e?o??l.w4.colors.accent:l.w4.colors.border};
  background: ${({primary:e,catColor:o})=>e?o??l.w4.colors.accent:"transparent"};
  color: ${({primary:e})=>e?"#fff":l.w4.colors.mainText};

  &:hover {
    transform: translateY(-2px);
    background: ${({primary:e,catColor:o})=>e?o??l.w4.colors.accentHover:l.w4.colors.sidebarHover};
  }
`,ea=i().div`
  position: fixed;
  top: -20px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px;
  animation: ${f} ${({duration:e})=>e}s
    ${({delay:e})=>e}s ease-in forwards;
  pointer-events: none;
  z-index: 9999;
`,et=["#f0883e","#58a6ff","#3fb950","#e3b341","#bc8cff","#f78166"];function er({count:e=60}){let o=(0,r.useMemo)(()=>Array.from({length:e},(e,o)=>({id:o,left:100*Math.random(),delay:2*Math.random(),duration:2.5+2*Math.random(),color:et[Math.floor(Math.random()*et.length)]??"#58a6ff",size:6+Math.floor(8*Math.random())})),[e]);return(0,t.jsx)(t.Fragment,{children:o.map(e=>(0,t.jsx)(ea,{left:e.left,delay:e.delay,duration:e.duration,color:e.color,size:e.size},e.id))})}let en="atlantis-familyquiz-scores";function ei(){try{let e=localStorage.getItem(en);return e?JSON.parse(e):{}}catch{return{}}}function es(e,o){let a=ei();if((a[e]??0)<o){a[e]=o;try{localStorage.setItem(en,JSON.stringify(a))}catch{}}}let el={title:{en:"Family Quiz",pt:"Quiz da Fam\xedlia"},chooseCategory:{en:"Choose a category",pt:"Escolhe uma categoria"},question:{en:"Question",pt:"Pergunta"},of:{en:"of",pt:"de"},score:{en:"Score",pt:"Pontos"},correct:{en:"✓ Correct!",pt:"✓ Correto!"},correctBonus:{en:"✓ Correct! +5 speed bonus!",pt:"✓ Correto! +5 b\xf3nus de velocidade!"},wrong:{en:"✗ Wrong",pt:"✗ Errado"},timeUp:{en:"⏰ Time's up!",pt:"⏰ Tempo esgotado!"},results:{en:"Results",pt:"Resultados"},retry:{en:"Play Again",pt:"Jogar de Novo"},categories:{en:"Categories",pt:"Categorias"},highScore:{en:"Best:",pt:"Melhor:"},msg3stars:{en:"\uD83C\uDF89 Amazing! You got everything right!",pt:"\uD83C\uDF89 Incr\xedvel! Acertaste tudo!"},msg2stars:{en:"\uD83D\uDC4F Well done! Keep it up!",pt:"\uD83D\uDC4F Muito bem! Continua assim!"},msg1star:{en:"\uD83D\uDCAA Good try! Study and try again!",pt:"\uD83D\uDCAA Boa tentativa! Estuda e tenta outra vez!"},back:{en:"← Back",pt:"← Voltar"}};function ec(e,o){let a=el[e];return"pt"===o?a.pt:a.en}let ed=["A","B","C","D"];function ep({lang:e,onBack:o,canOnline:a}){let[n,i]=(0,r.useState)("categories"),[s,p]=(0,r.useState)("solo"),[m,u]=(0,r.useState)(null),[g,f]=(0,r.useState)(0),[h,x]=(0,r.useState)(0),[b,y]=(0,r.useState)({}),[ea,et]=(0,r.useState)("idle"),[en,el]=(0,r.useState)(null),[em,eu]=(0,r.useState)(ei),[eg,ef]=(0,r.useState)(15),[eh,ex]=(0,r.useState)(0),[eb,ey]=(0,r.useState)(!1),[ew,ev]=(0,r.useState)(new Set),e$=(0,r.useRef)(Date.now()),ek=(0,r.useRef)(null),ej=(0,r.useRef)(null),ez=(0,r.useRef)(null),eS=(0,r.useRef)(!1),[eM]=(0,r.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),eT=(0,r.useRef)(b);eT.current=b;let eC=(0,r.useRef)(m);eC.current=m;let eA=(0,r.useRef)(g);eA.current=g;let eR=(0,r.useCallback)(e=>{switch(e.type){case"guest-joined":e_.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),e_.current.sendEvent({type:"host-ack",name:eM,playerId:e_.current.room?.playerId??"",players:e_.current.room?.players??[]});break;case"host-ack":e_.current.setConnected(e.name),e.players&&e_.current.setPlayers([...e.players,{id:e_.current.room?.playerId??"",name:eM,isHost:!1}]);break;case"player-list":e_.current.setPlayers(e.players);break;case"game-state":{let o=e.payload;if("start-question"===o.action){let e=o.categoryId,a=o.questionIndex,t=d.find(o=>o.id===e);t&&(u(t),eC.current=t,f(a),eA.current=a,et("idle"),el(null),ey(!1),ev(new Set),i("playing"))}else if("player-answered"===o.action){let e=o.playerId,a=o.pts;if(e_.current.room?.role==="host"&&a>0){let o={...eT.current,[e]:(eT.current[e]??0)+a};y(o),eT.current=o}ev(o=>{let a=new Set([...o,e]);if(e_.current.room?.role==="host"){let e=e_.current.room?.players.length??1;a.size>=e&&setTimeout(()=>eI.current(),500)}return a})}else if("question-result"===o.action)y(o.scores);else if("show-answer"===o.action){let e=o.correct;null!==en?et(en===e?"correct":"wrong"):(et("wrong"),el(null)),y(o.scores)}else"game-over"===o.action&&(y(o.scores),i("results"));break}case"player-left":e.playerId&&e_.current.removePlayer(e.playerId)}},[eM,en]),eB=(0,c.Ky)({gameId:"familyquiz",playerName:eM,onEvent:eR}),e_=(0,r.useRef)(eB);e_.current=eB;let eE=(0,c.zj)({gameId:"familyquiz",enabled:"online"===s&&("categories"===n||"lobby"===n)}),eI=(0,r.useRef)(()=>{}),eP=(0,r.useCallback)(()=>{ek.current&&(clearInterval(ek.current),ek.current=null)},[]),eF=(0,r.useCallback)(()=>{ej.current&&(clearTimeout(ej.current),ej.current=null),eP()},[eP]);(0,r.useEffect)(()=>()=>eF(),[eF]);let eL=(0,r.useCallback)(()=>{eP(),ef(15),ex(e=>e+1),e$.current=Date.now(),ek.current=setInterval(()=>{ef(e=>e<=1?0:e-1)},1e3)},[eP]),eO=(0,r.useCallback)(e=>{eF(),u(e),f(0),x(0),et("idle"),el(null),i("playing")},[eF]);(0,r.useEffect)(()=>{"playing"===n&&"idle"===ea&&eL()},[n,g]),(0,r.useEffect)(()=>{0===eg&&"playing"===n&&"idle"===ea&&m&&(eP(),et("wrong"),el(null),ey(!1),ej.current=setTimeout(()=>{let e=g+1;e>=m.questions.length?(es(m.id,h),eu(ei()),x(h),i("results")):(x(h),f(e),et("idle"),el(null))},1500))},[eg,n,ea,m,g,h,eP]);let eD=(0,r.useCallback)(()=>{if(!eC.current)return;let e=eC.current,o=eA.current+1;e_.current.sendEvent({type:"game-state",payload:{action:"show-answer",correct:e.questions[eA.current].correct,scores:eT.current}}),setTimeout(()=>{o>=e.questions.length?(e_.current.sendEvent({type:"game-state",payload:{action:"game-over",scores:eT.current}}),i("results")):(ev(new Set),f(o),eA.current=o,et("idle"),el(null),ey(!1),e_.current.sendEvent({type:"game-state",payload:{action:"start-question",categoryId:e.id,questionIndex:o}}))},2e3)},[]);eI.current=eD;let eH=(0,r.useCallback)(e=>{if("idle"!==ea||!m)return;let o=m.questions[g];if(!o)return;eP();let a=(Date.now()-e$.current)/1e3,t=e===o.correct,r=t&&a<5,n=5*!!r;if(el(e),"online"===s){let o=e_.current.room?.playerId??"",i=10*!!t+n;if(i>0){let e={...eT.current,[o]:(eT.current[o]??0)+i};y(e),eT.current=e,x(e=>e+i)}ey(r),e_.current.sendEvent({type:"game-state",payload:{action:"player-answered",playerId:o,optionIdx:e,pts:i,elapsed:a}}),e_.current.room?.role==="host"&&(ev(e=>{let a=new Set([...e,o]),t=e_.current.room?.players.length??1;return a.size>=t&&setTimeout(()=>eD(),500),a}),e_.current.sendEvent({type:"game-state",payload:{action:"question-result",scores:eT.current}}));return}ey(r),et(t?"correct":"wrong");let l=h+10*!!t+n;ej.current=setTimeout(()=>{let e=g+1;e>=m.questions.length?(es(m.id,l),eu(ei()),x(l),i("results")):(x(l),f(e),et("idle"),el(null),ey(!1))},1500)},[ea,m,g,h,eP,s,eD]);if("categories"===n)return(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{children:(0,t.jsxs)(k,{children:["\uD83E\uDDE0 ",ec("title",e)]})}),a&&(0,t.jsxs)(j,{children:[(0,t.jsxs)(z,{active:"solo"===s,onClick:()=>p("solo"),children:["\uD83C\uDFAF ","pt"===e?"Sozinho":"Solo"]}),(0,t.jsx)(z,{active:"online"===s,onClick:()=>p("online"),children:"\uD83C\uDF10 Online"})]}),(0,t.jsx)("p",{style:{color:l.w4.colors.mainTextMuted,marginBottom:l.w4.spacing.lg,fontSize:l.w4.typography.fontSizeMd},children:ec("chooseCategory",e)}),(0,t.jsx)(M,{children:d.map(o=>{let a=em[o.id];return(0,t.jsxs)(T,{catColor:o.color,onClick:()=>{"online"===s?(u(o),eC.current=o,i("lobby")):eO(o)},children:[(0,t.jsx)(C,{children:o.icon}),(0,t.jsx)(A,{children:"pt"===e?o.label.pt:o.label.en}),void 0!==a&&"solo"===s&&(0,t.jsxs)(R,{catColor:o.color,children:[ec("highScore",e)," ",a,"/",10*o.questions.length]})]},o.id)})})]});if("lobby"===n)return(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{children:(0,t.jsxs)(k,{children:["\uD83E\uDDE0 ",ec("title",e)]})}),eB.room?.connected?(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[(0,t.jsx)("p",{style:{color:l.w4.colors.mainTextMuted,fontSize:l.w4.typography.fontSizeMd},children:"host"===eB.room.role?`${eB.room.players.length} ${"pt"===e?"jogadores":"players"}`:"pt"===e?"\xc0 espera do anfitri\xe3o…":"Waiting for host…"}),(0,t.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:eB.room.players.map(e=>(0,t.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===eB.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),m&&(0,t.jsxs)("p",{style:{color:l.w4.colors.mainTextMuted,fontSize:14},children:[m.icon," ","pt"===e?m.label.pt:m.label.en]}),"host"===eB.room.role&&m&&(0,t.jsx)(S,{onClick:()=>{f(0),eA.current=0,x(0),y({}),eT.current={},ev(new Set),et("idle"),el(null),i("playing"),eB.sendEvent({type:"game-state",payload:{action:"start-question",categoryId:m.id,questionIndex:0}})},children:"pt"===e?"Come\xe7ar!":"Start!"})]}):(0,t.jsx)(c.XB,{lang:e,room:eB.room,error:eB.error,availableRooms:eE.rooms,onCreateRoom:()=>{let{code:e,roomName:o}=eB.createRoom();eE.publishRoom({code:e,roomName:o,hostName:eM,playerCount:1})},onJoinRoom:e=>eB.joinRoom(e),onLeaveRoom:()=>{eE.unpublishRoom(),eB.leaveRoom(),i("categories")}})]});if("playing"===n&&m){let o=m.questions[g];if(!o)return null;let a=m.questions.length,r=(g+1)/a*100;return(0,t.jsxs)(w,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)($,{onClick:()=>{eF(),i("categories")},children:ec("back",e)}),(0,t.jsxs)(k,{children:[m.icon," ","pt"===e?m.label.pt:m.label.en]})]}),(0,t.jsxs)(B,{children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(E,{catColor:m.color,children:[ec("score",e),": ",h]}),(0,t.jsx)(I,{children:(0,t.jsx)(P,{pct:r,catColor:m.color})}),(0,t.jsxs)(F,{children:[ec("question",e)," ",g+1," ",ec("of",e)," ",a]}),(0,t.jsxs)(D,{urgent:eg<=5,children:[eg,"s"]})]}),(0,t.jsxs)(L,{catColor:m.color,children:[(0,t.jsx)(O,{duration:15,catColor:m.color,urgent:eg<=5},eh),(0,t.jsx)(H,{children:"pt"===e?o.q.pt:o.q.en}),(0,t.jsx)(N,{children:o.options.map((a,r)=>{let n="idle";return"idle"!==ea&&(r===o.correct?n=en===r?"correct":"highlight":r===en&&(n="wrong")),(0,t.jsxs)(G,{status:n,catColor:m.color,disabled:"idle"!==ea,...{onTouchStart:e=>{ez.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!ez.current)return;let o=Math.abs(e.changedTouches[0].clientX-ez.current.x),a=Math.abs(e.changedTouches[0].clientY-ez.current.y);ez.current=null,o>8||a>8||(eS.current=!0,eH(r))},onClick:()=>{if(eS.current){eS.current=!1;return}eH(r)}},children:[(0,t.jsx)(Y,{status:n,catColor:m.color,children:ed[r]}),"pt"===e?a.pt:a.en]},r)})})]},g),"idle"!==ea&&(0,t.jsx)(q,{isCorrect:"correct"===ea,children:"correct"===ea?eb?ec("correctBonus",e):ec("correct",e):null===en?ec("timeUp",e):ec("wrong",e)})]})]})}if("results"===n&&m){let o=10*m.questions.length,a=Math.round(h/o*100),r=100===a?3:a>=60?2:1,n={3:ec("msg3stars",e),2:ec("msg2stars",e),1:ec("msg1star",e)};return(0,t.jsxs)(w,{children:[3===r&&(0,t.jsx)(er,{}),(0,t.jsxs)(v,{children:[(0,t.jsx)($,{onClick:()=>i("categories"),children:ec("back",e)}),(0,t.jsxs)(k,{children:[m.icon," ",ec("results",e)]})]}),(0,t.jsxs)(V,{children:[(0,t.jsxs)(W,{catColor:m.color,children:[(0,t.jsx)(J,{children:ec("results",e)}),(0,t.jsx)(X,{catColor:m.color,children:h}),(0,t.jsxs)(U,{children:[a,"% — ",h,"/",o]}),(0,t.jsx)(K,{children:[1,2,3].map(e=>(0,t.jsx)(Q,{lit:e<=r,delay:(e-1)*.15,children:"⭐"},e))}),(0,t.jsx)(Z,{children:n[r]})]}),"online"===s&&(eB.room?.players??[]).length>1&&(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6,width:"100%",maxWidth:300,marginTop:12},children:(eB.room?.players??[]).map(e=>({...e,pts:b[e.id]??0})).sort((e,o)=>o.pts-e.pts).map((e,o)=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:l.w4.colors.surface,border:`1px solid ${e.id===eB.room?.playerId?l.w4.colors.accent:l.w4.colors.border}`,borderRadius:12},children:[(0,t.jsx)("span",{style:{fontSize:16,minWidth:24},children:0===o?"\uD83E\uDD47":1===o?"\uD83E\uDD48":2===o?"\uD83E\uDD49":`${o+1}.`}),(0,t.jsx)("span",{style:{flex:1,fontWeight:600,color:e.id===eB.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:e.name}),(0,t.jsx)("span",{style:{fontSize:18,fontWeight:800,color:0===o?"#3fb950":l.w4.colors.mainText},children:e.pts})]},e.id))}),(0,t.jsx)(ee,{children:"online"===s?(0,t.jsx)(eo,{onClick:()=>{eB.leaveRoom(),eE.unpublishRoom(),p("solo"),i("categories")},children:ec("categories",e)}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eo,{primary:!0,catColor:m.color,onClick:()=>eO(m),children:ec("retry",e)}),(0,t.jsx)(eo,{onClick:()=>i("categories"),children:ec("categories",e)})]})})]})]})}return null}},4980(e,o,a){a.d(o,{p:()=>T});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246);let c=["\uD83C\uDF33","\uD83E\uDEA8","\uD83D\uDCE6","\uD83C\uDFE0","\uD83D\uDDD1️","\uD83E\uDE91","\uD83D\uDE97","\uD83C\uDF3A","\uD83E\uDEB4","\uD83E\uDDF1","\uD83C\uDFE2","\uD83C\uDFAA","⛺","\uD83D\uDDFF","\uD83D\uDED2"],d=["\uD83C\uDF33","\uD83E\uDEA8","\uD83D\uDCE6","\uD83E\uDE91","\uD83E\uDEB4","\uD83E\uDDF1"];function p(e){return e[Math.floor(Math.random()*e.length)]}let m=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,g=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,f=(0,s.keyframes)`0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}`,h=(0,s.keyframes)`0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}`,x=i().div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${l.w4.spacing.lg};gap:${l.w4.spacing.lg};overflow-y:auto;min-height:0;background:radial-gradient(ellipse 60% 50% at 40% 30%,rgba(63,185,80,0.06) 0%,transparent 70%),#080b12;`,b=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${m} 0.3s ease;`,y=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:340px;`,w=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`,v=i().span`font-size:72px;animation:${g} 1s ease-in-out infinite;`,$=i().div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:300px;width:100%;`,k=i().button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,48px);
  background:${({selected:e})=>e?"rgba(63,185,80,0.15)":l.w4.colors.surface};
  border:3px solid ${({selected:e})=>e?"#3fb950":l.w4.colors.border};
  border-radius:${l.w4.borderRadius.lg};cursor:pointer;transition:all 0.15s;min-height:70px;
  &:hover{border-color:#3fb950;transform:scale(1.05);}
  &:active{transform:scale(0.95);}
`,j=i().div`
  display:grid;grid-template-columns:repeat(${6},1fr);gap:6px;
  max-width:420px;width:100%;animation:${m} 0.3s ease;
`,z=i().button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;
  font-size:clamp(24px,5vw,36px);background:${l.w4.colors.surface};
  border:2px solid ${({found:e,wrong:o})=>e?"#3fb950":o?"#f97583":l.w4.colors.border};
  border-radius:${l.w4.borderRadius.md};cursor:pointer;transition:all 0.15s;min-height:48px;
  background: ${({found:e,wrong:o})=>e?"rgba(63,185,80,0.15)":o?"rgba(249,117,131,0.1)":l.w4.colors.surface};
  animation: ${({found:e,wrong:o})=>e?u:o?f:"none"} ${({found:e})=>e?"0.3s ease":"0.4s ease"};
  opacity: ${({revealed:e,found:o})=>e&&!o?.4:1};
  cursor: ${({revealed:e})=>e?"default":"pointer"};
  &:hover:not(:disabled){transform:scale(1.08);border-color:${l.w4.colors.accent};}
  &:active:not(:disabled){transform:scale(0.95);}
`,S=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};`,M=i().div`font-size:48px;animation:${h} 0.5s ease-in-out;`;function T({lang:e}){let[o,a]=(0,r.useState)("menu"),[n,i]=(0,r.useState)(0),[s,l]=(0,r.useState)(0),[m,u]=(0,r.useState)(d[0]),[g,f]=(0,r.useState)([]),[h,C]=(0,r.useState)(20),[A,R]=(0,r.useState)(0),[B,_]=(0,r.useState)(!1),[E,I]=(0,r.useState)(null),[P,F]=(0,r.useState)(()=>{try{return Number(localStorage.getItem("atlantis-hideseek-best")??"0")}catch{return 0}}),L=(0,r.useRef)(null),O=(0,r.useCallback)(()=>{u(p(d)),a("hiding")},[]),D=(0,r.useCallback)(()=>{f(function(e){let o=Array.from({length:30},()=>({emoji:p(c),isHider:!1,revealed:!1})),a=Math.floor(Math.random()*o.length);o[a]={emoji:e,isHider:!0,revealed:!1};let t=2+Math.floor(3*Math.random());for(let a=0;a<t;a++){let a=Math.floor(Math.random()*o.length);o[a].isHider||(o[a].emoji=e)}return o}(m)),C(20),R(0),_(!1),I(null),a("seeking")},[m]);(0,r.useEffect)(()=>{if("seeking"===o)return L.current=setInterval(()=>{C(e=>e<=1?(L.current&&clearInterval(L.current),a("reveal"),0):e-1)},1e3),()=>{L.current&&clearInterval(L.current)}},[o]);let H=(0,r.useCallback)(e=>{if("seeking"===o&&!B&&!g[e].revealed)if(R(e=>e+1),g[e].isHider){_(!0),L.current&&clearInterval(L.current);let o=Math.max(0,5*h-10*A),t=100+o;l(e=>e+t),f(o=>o.map((o,a)=>a===e?{...o,revealed:!0}:o)),setTimeout(()=>{let e=n+1;if(i(e),e>=3){let e=s+100+o;if(e>P){F(e);try{localStorage.setItem("atlantis-hideseek-best",String(e))}catch{}}a("scores")}else O()},1500)}else I(e),f(o=>o.map((o,a)=>a===e?{...o,revealed:!0}:o)),setTimeout(()=>I(null),500)},[o,B,g,h,A,n,s,P,O]),N=(0,r.useCallback)(()=>{i(0),l(0),O()},[O]);if("menu"===o)return(0,t.jsxs)(x,{children:[(0,t.jsxs)(b,{children:["\uD83D\uDD0D ","pt"===e?"Esconde-Esconde!":"Hide & Seek!"]}),(0,t.jsx)(y,{children:"pt"===e?"Esconde-te como um objeto e v\xea se te encontram!":"Disguise yourself as an object and see if they find you!"}),P>0&&(0,t.jsxs)(y,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",P]}),(0,t.jsx)(w,{accent:"#3fb950",onClick:N,children:"pt"===e?"Jogar!":"Play!"})]});if("hiding"===o)return(0,t.jsxs)(x,{children:[(0,t.jsxs)(b,{children:["\uD83E\uDEE3 ","pt"===e?"Escolhe um disfarce!":"Pick a disguise!"]}),(0,t.jsx)(y,{children:"pt"===e?"Transforma-te num objeto!":"Turn into an object!"}),(0,t.jsx)($,{children:d.map(e=>(0,t.jsx)(k,{selected:m===e,onClick:()=>u(e),children:e},e))}),(0,t.jsxs)(w,{accent:"#3fb950",onClick:D,children:["pt"===e?"Esconder!":"Hide!"," ",m]})]});if("reveal"===o){let o=g.findIndex(e=>e.isHider);return(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{children:"pt"===e?"Tempo esgotado!":"Time's up!"}),(0,t.jsx)(y,{children:"pt"===e?"Estava aqui:":"Was hiding here:"}),(0,t.jsxs)(M,{children:[g[o]?.emoji??"?"," → \uD83D\uDC38"]}),(0,t.jsx)(w,{accent:"#3fb950",onClick:()=>{let e=n+1;if(i(e),e>=3){if(s>P){F(s);try{localStorage.setItem("atlantis-hideseek-best",String(s))}catch{}}a("scores")}else O()},children:"➡️"})]})}if("scores"===o)return(0,t.jsxs)(x,{children:[(0,t.jsx)(v,{children:"\uD83C\uDFC6"}),(0,t.jsx)(b,{children:"pt"===e?"Resultados":"Results"}),(0,t.jsxs)(S,{color:"#3fb950",children:["⭐ ",s]}),s>=P&&s>0&&(0,t.jsxs)(y,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,t.jsx)(w,{accent:"#3fb950",onClick:()=>a("menu"),children:"Menu"})]});let G=h<=5?"#f97583":h<=10?"#f59e0b":"#3fb950";return(0,t.jsxs)(x,{children:[(0,t.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,t.jsxs)(S,{color:"#3fb950",children:["⭐ ",s]}),(0,t.jsxs)(S,{color:G,children:["⏱️ ",h,"s"]}),(0,t.jsxs)(S,{children:["pt"===e?"Tentativas":"Tries",": ",A]})]}),(0,t.jsx)(y,{children:"pt"===e?"\uD83D\uDD0D Encontra quem se escondeu!":"\uD83D\uDD0D Find the hidden one!"}),(0,t.jsx)(j,{children:g.map((e,o)=>(0,t.jsx)(z,{revealed:e.revealed&&!e.isHider,found:e.revealed&&e.isHider,wrong:E===o,onClick:()=>H(o),disabled:e.revealed,children:e.revealed&&e.isHider?"\uD83D\uDC38":e.emoji},o))})]})}},2036(e,o,a){a.d(o,{v:()=>C});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(2938),d=a(9484);let p={_:null,R:"#ff4444",O:"#ff8800",Y:"#ffcc00",G:"#44cc44",B:"#4488ff",K:"#333333",W:"#cccccc"},m={fire:[["_","_","_","Y","Y","_","_","_"],["_","_","Y","O","O","Y","_","_"],["_","Y","O","R","R","O","Y","_"],["_","Y","R","R","R","R","Y","_"],["Y","O","R","R","R","R","O","Y"],["Y","O","R","R","R","R","O","Y"],["_","Y","O","R","R","O","Y","_"],["_","_","Y","O","O","Y","_","_"]],spike:[["_","_","_","W","W","_","_","_"],["_","_","_","W","W","_","_","_"],["_","_","W","K","K","W","_","_"],["_","_","W","K","K","W","_","_"],["_","W","K","K","K","K","W","_"],["_","W","K","K","K","K","W","_"],["W","K","K","K","K","K","K","W"],["W","K","K","K","K","K","K","W"]],cactus:[["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","G","_","G","G","_","G","_"],["_","G","G","G","G","G","G","_"],["_","G","G","G","G","G","G","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"],["_","_","_","G","G","_","_","_"]],bomb:[["_","_","_","Y","_","_","_","_"],["_","_","Y","O","_","_","_","_"],["_","_","_","K","K","_","_","_"],["_","_","K","K","K","K","_","_"],["_","K","K","K","K","K","K","_"],["_","K","K","W","K","K","K","_"],["_","K","K","K","K","K","K","_"],["_","_","K","K","K","K","_","_"]],rock:[["_","_","_","W","W","_","_","_"],["_","_","W","K","K","W","_","_"],["_","W","K","K","K","K","W","_"],["W","K","K","W","K","K","K","W"],["W","K","K","K","K","K","K","W"],["W","K","K","K","K","K","K","W"]]},u=["fire","spike","cactus","bomb","rock"];function g({type:e,size:o=32,style:a,className:n}){let i=m[e],s=i.length,l=i[0].length,c=(0,r.useMemo)(()=>{let e=[];for(let o=0;o<s;o++)for(let a=0;a<l;a++){let t=p[i[o][a]];t&&e.push({x:a,y:o,color:t})}return e},[i,s,l]);return(0,t.jsx)("svg",{width:o,height:s/l*o,viewBox:`0 0 ${l} ${s}`,style:{imageRendering:"pixelated",...a},className:n,children:c.map((e,o)=>(0,t.jsx)("rect",{x:e.x,y:e.y,width:1,height:1,fill:e.color},o))})}let f=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,h=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,x=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,b=i().div`
  flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:${l.w4.spacing.lg};gap:${l.w4.spacing.xl};overflow:hidden;min-height:0;
  background:radial-gradient(ellipse 60% 50% at 30% 20%,rgba(63,185,80,0.06) 0%,transparent 70%),
             radial-gradient(ellipse 50% 60% at 70% 80%,rgba(88,166,255,0.04) 0%,transparent 70%),#080b12;
`,y=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${f} 0.3s ease;`,w=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;`,v=i().div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:#3fb950;animation:${x} 0.5s ease;`,$=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}&:active{transform:translateY(-1px);}`,k=i().span`font-size:72px;animation:${h} 1s ease-in-out infinite;`,j=i().div`font-size:${l.w4.typography.fontSizeLg};font-weight:800;color:${l.w4.colors.mainText};`,z=i().div`
  position:relative;width:100%;max-width:600px;height:240px;
  background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};
  overflow:hidden;touch-action:manipulation;user-select:none;
`,S=i().div`
  position:absolute;top:${75}%;left:0;right:0;height:2px;
  background:rgba(63,185,80,0.4);
`,M=i().div`
  position:absolute;top:${75}%;left:0;right:0;bottom:0;
  background:linear-gradient(0deg,rgba(63,185,80,0.1),transparent);
`,T=i().div`
  position:absolute;
  left:${({left:e})=>e}%;top:${({top:e})=>e}%;
  transform:translate(-50%,-100%);
  transition:opacity 0.3s;
  ${({dead:e})=>e?"opacity:0.3;filter:grayscale(1);":""}
`;function C({lang:e}){let[o,a]=(0,r.useState)("menu"),[n,i]=(0,r.useState)(3),[s,l]=(0,r.useState)(0),[p,m]=(0,r.useState)(20),[f,h]=(0,r.useState)(75),[x,A]=(0,r.useState)(!1),[R,B]=(0,r.useState)([]),[_]=(0,r.useState)(()=>Math.floor(Math.random()*d.L.length)),[E,I]=(0,r.useState)(()=>{try{return Number(localStorage.getItem("atlantis-jumpparty-best")??"0")}catch{return 0}}),P=(0,r.useRef)(!1),F=(0,r.useRef)(20),L=(0,r.useRef)(75),O=(0,r.useRef)(0),D=(0,r.useRef)(!1),H=(0,r.useRef)(0),N=(0,r.useRef)(0),G=(0,r.useRef)([]),Y=(0,r.useRef)(0),q=(0,r.useRef)(null),V=(0,r.useCallback)(()=>{if(P.current||D.current)return;P.current=!0;let e=performance.now(),o=a=>{let t=Math.min((a-e)/600,1),r=75-35*Math.sin(Math.PI*t);L.current=r,h(r),t<1?requestAnimationFrame(o):(L.current=75,h(75),P.current=!1)};requestAnimationFrame(o)},[]);(0,r.useEffect)(()=>{if("playing"!==o)return;let e=()=>{if(D.current)return;0!==O.current&&(F.current=Math.max(5,Math.min(95,F.current+1.5*O.current)),m(F.current)),G.current=G.current.map(e=>({...e,x:e.x-.8})).filter(e=>!(e.x<-10)||(H.current+=1,l(H.current),!1));let o=F.current,t=L.current;for(let e of G.current){let r=8>Math.abs(e.x-o),n=t>=67;if(r&&n){D.current=!0,A(!0);let e=H.current;if(e>E){I(e);try{localStorage.setItem("atlantis-jumpparty-best",String(e))}catch{}}setTimeout(()=>a("gameover"),600);return}}B([...G.current]),Y.current=requestAnimationFrame(e)};return Y.current=requestAnimationFrame(e),()=>cancelAnimationFrame(Y.current)},[o,E]),(0,r.useEffect)(()=>{if("playing"!==o)return;let e=()=>{if(D.current)return;let o=++N.current;G.current.push({id:o,type:u[Math.floor(Math.random()*u.length)],x:105}),q.current=setTimeout(e,1e3+1200*Math.random())};return q.current=setTimeout(e,800),()=>{q.current&&clearTimeout(q.current)}},[o]),(0,r.useEffect)(()=>{if("playing"!==o)return;let e=e=>{("Space"===e.code||"ArrowUp"===e.key)&&(e.preventDefault(),V()),"ArrowLeft"===e.key&&(e.preventDefault(),O.current=-1),"ArrowRight"===e.key&&(e.preventDefault(),O.current=1)},a=e=>{"ArrowLeft"===e.key&&-1===O.current&&(O.current=0),"ArrowRight"===e.key&&1===O.current&&(O.current=0)};return window.addEventListener("keydown",e),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",a)}},[o,V]);let W=(0,r.useCallback)(()=>{l(0),H.current=0,A(!1),D.current=!1,G.current=[],B([]),m(20),F.current=20,h(75),L.current=75,O.current=0,P.current=!1,i(3),a("countdown");let e=3,o=setInterval(()=>{i(--e),e<=0&&(clearInterval(o),a("playing"))},800)},[]);return"menu"===o?(0,t.jsxs)(b,{children:[(0,t.jsx)(d.G,{paletteIndex:_,pose:"idle",size:64}),(0,t.jsx)(y,{children:"pt"===e?"Salta!":"Jump!"}),(0,t.jsx)(w,{children:"pt"===e?"Salta sobre os obst\xe1culos! Um s\xf3 bot\xe3o!":"Jump over obstacles! One button!"}),E>0&&(0,t.jsxs)(w,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",E]}),(0,t.jsx)($,{accent:"#3fb950",onClick:W,children:"pt"===e?"Jogar!":"Play!"})]}):"countdown"===o?(0,t.jsx)(b,{children:(0,t.jsx)(v,{children:n>0?n:"\uD83C\uDFC3"},n)}):"gameover"===o?(0,t.jsxs)(b,{children:[(0,t.jsx)(k,{children:"\uD83D\uDCA5"}),(0,t.jsx)(y,{children:"pt"===e?"Fim!":"Game Over!"}),(0,t.jsxs)(j,{children:["⭐ ",s]}),s>=E&&s>0&&(0,t.jsxs)(w,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,t.jsx)($,{accent:"#3fb950",onClick:W,children:"pt"===e?"Outra Vez":"Again"})]}):(0,t.jsxs)(b,{children:[(0,t.jsxs)(j,{children:["⭐ ",s]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(M,{}),(0,t.jsx)(S,{}),(0,t.jsx)(T,{left:p,top:f,dead:x,children:(0,t.jsx)(d.G,{paletteIndex:_,pose:x?"dead":P.current?"jump":0!==O.current?"walk":"idle",size:48,flipX:-1===O.current})}),R.map(e=>(0,t.jsx)(T,{left:e.x,top:75,children:(0,t.jsx)(g,{type:e.type,size:36})},e.id))]}),(0,t.jsx)(c.UO,{axes:"horizontal",onMove:e=>{O.current=e.dx},actions:[{id:"jump",label:"⬆",color:"#2ea043",onPress:V}]})]})}},6987(e,o,a){a.d(o,{Y:()=>ex});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(5782);let d={title:{pt:"Jogo da Mem\xf3ria",en:"Memory Game"},subtitle:{pt:"Vira duas cartas e encontra os pares!",en:"Flip two cards and find the pairs!"},easy:{pt:"F\xe1cil",en:"Easy"},medium:{pt:"M\xe9dio",en:"Medium"},hard:{pt:"Dif\xedcil",en:"Hard"},easyDesc:{pt:"16 cartas \xb7 8 pares",en:"16 cards \xb7 8 pairs"},mediumDesc:{pt:"24 cartas \xb7 12 pares",en:"24 cards \xb7 12 pairs"},hardDesc:{pt:"40 cartas \xb7 20 pares",en:"40 cards \xb7 20 pairs"},moves:{pt:"Jogadas",en:"Moves"},pairs:{pt:"Pares",en:"Pairs"},time:{pt:"Tempo",en:"Time"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incr\xedvel!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"R\xe1pido!",en:"Fast!"},gameOver:{pt:"Parab\xe9ns!",en:"Well done!"},finalMoves:{pt:"jogadas",en:"moves"},finalTime:{pt:"Tempo total",en:"Total time"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestMoves:{pt:"Melhor",en:"Best"},flipTwo:{pt:"Vira duas cartas!",en:"Flip two cards!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},pickSize:{pt:"Quantas cartas?",en:"How many cards?"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espa\xe7o",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"C\xe3es, gatos, le\xf5es e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguet\xf5es e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},matched:{pt:"Par encontrado!",en:"Match found!"},tryAgain:{pt:"Tenta outra vez!",en:"Try again!"},allFound:{pt:"Encontraste todos!",en:"You found them all!"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Advers\xe1rio",en:"Opponent"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},theirTurn:{pt:"Vez do advers\xe1rio!",en:"Opponent's turn!"},youWin:{pt:"\uD83C\uDF89 Ganhaste!",en:"\uD83C\uDF89 You win!"},youLose:{pt:"\uD83D\uDE05 Perdeste!",en:"\uD83D\uDE05 You lost!"},tied:{pt:"\uD83E\uDD1D Empate!",en:"\uD83E\uDD1D Tied!"},opponentLeft:{pt:"O advers\xe1rio saiu.",en:"Opponent left."},rematch:{pt:"Revanche",en:"Rematch"},waiting:{pt:"\xc0 espera…",en:"Waiting…"}};function p(e,o){return d[e]["pt"===o?"pt":"en"]}let m=[{id:"animals",emoji:"\uD83E\uDD81",color:"#f59e0b",preview:["\uD83D\uDC36","\uD83D\uDC31","\uD83E\uDD81","\uD83D\uDC3C","\uD83E\uDD8B"],symbols:["\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC2D","\uD83D\uDC39","\uD83D\uDC30","\uD83E\uDD8A","\uD83D\uDC3B","\uD83D\uDC3C","\uD83D\uDC28","\uD83D\uDC2F","\uD83E\uDD81","\uD83D\uDC2E","\uD83D\uDC37","\uD83D\uDC38","\uD83D\uDC35","\uD83D\uDC14","\uD83E\uDD84","\uD83D\uDC1D","\uD83E\uDD8B","\uD83D\uDC1E","\uD83D\uDC22","\uD83D\uDC19","\uD83D\uDC2C","\uD83D\uDC33","\uD83D\uDC18","\uD83E\uDD92"]},{id:"food",emoji:"\uD83C\uDF55",color:"#ef4444",preview:["\uD83C\uDF55","\uD83C\uDF66","\uD83E\uDDC1","\uD83C\uDF53","\uD83C\uDF69"],symbols:["\uD83C\uDF4E","\uD83C\uDF4C","\uD83C\uDF53","\uD83C\uDF49","\uD83C\uDF55","\uD83E\uDDC1","\uD83C\uDF69","\uD83C\uDF6A","\uD83C\uDF2E","\uD83C\uDF66","\uD83C\uDF82","\uD83C\uDF6B","\uD83C\uDF6C","\uD83C\uDF6D","\uD83C\uDF7F","\uD83E\uDD50","\uD83C\uDF54","\uD83C\uDF2D","\uD83C\uDF5F","\uD83E\uDD6A","\uD83C\uDF5D","\uD83C\uDF63","\uD83C\uDF67","\uD83C\uDF70","\uD83E\uDD51","\uD83C\uDF47"]},{id:"space",emoji:"\uD83D\uDE80",color:"#8b5cf6",preview:["\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19"],symbols:["\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19","☀️","\uD83E\uDE90","\uD83C\uDF1F","\uD83D\uDCAB","✨","\uD83D\uDD2D","\uD83D\uDC7D","\uD83E\uDD16","\uD83D\uDC7E","\uD83D\uDEF0️","\uD83D\uDC8E","\uD83D\uDD2E","⚡","\uD83C\uDF08","☄️","\uD83C\uDFAF","\uD83C\uDFAE","\uD83C\uDFB2","\uD83E\uDDE9","\uD83C\uDFB8","\uD83D\uDD25"]},{id:"mix",emoji:"\uD83C\uDFAA",color:"#3fb950",preview:["\uD83D\uDC36","\uD83C\uDF55","\uD83D\uDE80","⭐","\uD83C\uDFB8"],symbols:["\uD83D\uDC36","\uD83D\uDC31","\uD83E\uDD81","\uD83D\uDC3C","\uD83E\uDD8B","\uD83D\uDC22","\uD83D\uDC19","\uD83D\uDC2C","\uD83C\uDF55","\uD83C\uDF66","\uD83E\uDDC1","\uD83C\uDF53","\uD83C\uDF69","\uD83C\uDF49","\uD83C\uDF82","\uD83C\uDF4C","\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19","☀️","\uD83C\uDF08","\uD83D\uDC8E","\uD83C\uDFB8","⚽"]}],u={easy:8,medium:12,hard:20};function g(e){let o=[...e];for(let e=o.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[o[e],o[a]]=[o[a],o[e]]}return o}function f(e){let o=Math.floor(e/60);return`${o}:${(e%60).toString().padStart(2,"0")}`}let h=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,x=(0,s.keyframes)`
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`,b=(0,s.keyframes)`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`,y=(0,s.keyframes)`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,w=(0,s.keyframes)`
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
`,z=i().div`
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
  animation: ${h} 0.4s ease;
`,M=i().h1`
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
`,A=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px 22px;
  background: linear-gradient(168deg, ${({accent:e})=>e}12 0%, ${l.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}35;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
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
`,R=i().span`
  font-size: 44px;
  animation: ${b} 2.5s ease-in-out infinite;
`,B=i().div`
  display: flex;
  gap: 4px;
  font-size: 20px;
  opacity: 0.7;
`,_=i().span`
  font-size: 17px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,E=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,I=i().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,P=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 32px;
  background: linear-gradient(168deg, ${({accent:e})=>e}15 0%, ${l.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}40;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
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
`,F=i().span`
  font-size: 40px;
  animation: ${b} 2s ease-in-out infinite;
`,L=i().span`
  font-size: 18px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,O=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,D=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px ${l.w4.spacing.md} ${l.w4.spacing.lg};
  gap: 12px;
  min-height: 0;
  width: 100%;
`,H=i().div`
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
  font-size: 15px;
  font-weight: 700;
  color: ${({highlight:e})=>e?"#3fb950":l.w4.colors.mainText};
`,G=i().div`
  font-size: 16px;
  font-weight: 700;
  min-height: 24px;
  text-align: center;
  color: ${({type:e})=>"match"===e?"#3fb950":"miss"===e?"#f97583":l.w4.colors.accent};
  animation: ${({type:e})=>"match"===e?x:"miss"===e?$:"none"} 0.4s ease;
`,Y=i().div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 10px;
  max-width: 720px;
  width: 100%;
  padding: 0 4px;
  animation: ${h} 0.3s ease;

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
`,V=i().div`
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
  transition: border-color 0.2s, box-shadow 0.2s;
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
  font-size: 12px;
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
  animation: ${h} 0.5s ease;
  text-align: center;
`,Z=i().h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,ee=i().span`
  font-size: 72px;
  animation: ${b} 1s ease-in-out infinite;
`,eo=i().div`
  display: flex;
  gap: ${l.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,ea=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,et=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,er=i().span`
  font-size: 40px;
  font-weight: 800;
  color: ${({color:e})=>e??l.w4.colors.accent};
`,en=i().span`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  animation: ${y} 1s ease-in-out infinite;
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
  transition: all 0.2s ease;
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
  animation: ${w} 3s linear infinite;
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
  transition: background 0.2s, color 0.2s;
  background: ${({active:e})=>e?"rgba(139, 92, 246, 0.18)":"transparent"};
  color: ${({active:e})=>e?"#8b5cf6":l.w4.colors.mainTextMuted};
  &:hover { color: #8b5cf6; background: rgba(139, 92, 246, 0.1); }
`,em=["\uD83C\uDF8A","⭐","\uD83C\uDF1F","\uD83D\uDCAB","✨","\uD83C\uDF89","\uD83C\uDFC6","\uD83E\uDD73"],eu=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],eg=["great","amazing","perfect","super","wow","fast"],ef="atlantis-memory-best";function eh(e){try{return JSON.parse(localStorage.getItem(ef)??"{}")[e]??0}catch{return 0}}function ex({lang:e,canOnline:o}){let[a,n]=(0,r.useState)("theme"),[i,s]=(0,r.useState)("solo"),[d,h]=(0,r.useState)("animals"),[x,b]=(0,r.useState)("easy"),[y,w]=(0,r.useState)([]),[v,$]=(0,r.useState)([]),[k,j]=(0,r.useState)(new Set),[W,eb]=(0,r.useState)(0),[ey,ew]=(0,r.useState)(0),[ev,e$]=(0,r.useState)(0),[ek,ej]=(0,r.useState)({msg:"",type:"info"}),[ez,eS]=(0,r.useState)(!1),[eM,eT]=(0,r.useState)(!1),[eC,eA]=(0,r.useState)(!0),[eR,eB]=(0,r.useState)(""),[e_,eE]=(0,r.useState)(0),[eI,eP]=(0,r.useState)(0),[eF,eL]=(0,r.useState)({}),[eO,eD]=(0,r.useState)(!1),[eH,eN]=(0,r.useState)("none"),eG=(0,r.useRef)(!1),eY=(0,r.useRef)(null),[eq]=(0,r.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),eV=(0,r.useCallback)(o=>{switch(o.type){case"guest-joined":eJ.current.addPlayer({id:o.playerId,name:o.name,isHost:!1}),eJ.current.sendEvent({type:"host-ack",name:eq,playerId:eJ.current.room?.playerId??"",players:eJ.current.room?.players??[]});break;case"host-ack":eJ.current.setConnected(o.name),o.players&&eJ.current.setPlayers([...o.players,{id:eJ.current.room?.playerId??"",name:eq,isHost:!1}]);break;case"player-list":eJ.current.setPlayers(o.players);break;case"game-state":{let a=o.payload;if("start"===a.action){let o=a.cards;b(a.difficulty),w(o),$([]),j(new Set),eb(0),ew(0),eE(0),eP(0),e$(0);let t=a.firstTurnId??"";eB(t),eA(t===eJ.current.room?.playerId),eL({}),ej({msg:t===eJ.current.room?.playerId?p("yourTurn",e):p("theirTurn",e),type:"info"}),eS(!1),eT(!1),n("playing")}else if("flip"===a.action){let e=a.cardId;w(o=>o.map(o=>o.id===e?{...o,flipped:!0}:o)),$(o=>[...o,e])}else if("match"===a.action){let o=a.pairId,t=a.scorerId,r=a.nextTurnId,n=a.playerPairs;if(w(e=>e.map(e=>e.pairId===o?{...e,matched:!0}:e)),$([]),ew(e=>e+1),n){eL(n);let e=eJ.current.room?.playerId??"";eE(n[e]??0),eP(Object.entries(n).reduce((o,[a,t])=>a===e?o:o+t,0))}else eL(e=>({...e,[t]:(e[t]??0)+1})),t===eJ.current.room?.playerId?eE(e=>e+1):eP(e=>e+1);eB(r),eA(r===eJ.current.room?.playerId);let i=eg[Math.floor(Math.random()*eg.length)];ej({msg:`${p(i,e)} ${p("matched",e)}`,type:"match"}),eG.current=!1}else if("no-match"===a.action){let o=a.ids,t=a.nextTurnId;j(new Set(o)),ej({msg:p("tryAgain",e),type:"miss"}),setTimeout(()=>{w(e=>e.map(e=>o.includes(e.id)?{...e,flipped:!1}:e)),$([]),j(new Set),eB(t),eA(t===eJ.current.room?.playerId),eG.current=!1},800)}else if("game-end"===a.action){let e=a.playerPairs;if(e){eL(e);let o=eJ.current.room?.playerId??"";eE(e[o]??0),eP(Object.entries(e).reduce((e,[a,t])=>a===o?e:e+t,0))}else eE(a.myPairs??e_),eP(a.opponentPairs??eI);eT(!0),n("gameover")}break}case"game-over":n("gameover");break;case"rematch-request":eN("received");break;case"rematch-accepted":eN("none"),n("difficulty");break;case"player-left":eD(!0),n("gameover")}},[eq,e]),eW=(0,c.Ky)({gameId:"memory",playerName:eq,onEvent:eV}),eJ=(0,r.useRef)(eW);eJ.current=eW;let eX=(0,c.zj)({gameId:"memory",enabled:"online"===i}),eU=u[x],eK="easy"===x?4:"medium"===x?6:8,eQ="easy"===x?"lg":"medium"===x?"md":"sm",eZ=(0,r.useMemo)(()=>{let e=m.find(e=>e.id===d);return e?.symbols??m[0].symbols},[d]);(0,r.useEffect)(()=>{if("playing"!==a){eY.current&&clearInterval(eY.current);return}return eY.current=setInterval(()=>e$(e=>e+1),1e3),()=>{eY.current&&clearInterval(eY.current)}},[a]);let e0=(0,r.useCallback)(o=>{var a;let t,r;b(o);let s=(a=u[o],t=g(eZ).slice(0,a),r=[],t.forEach((e,o)=>{r.push({id:2*o,symbol:e,pairId:o,flipped:!1,matched:!1}),r.push({id:2*o+1,symbol:e,pairId:o,flipped:!1,matched:!1})}),g(r));if(w(s),$([]),j(new Set),eb(0),ew(0),eE(0),eP(0),eL({}),e$(0),eA(!0),ej({msg:"online"===i?p("yourTurn",e):p("flipTwo",e),type:"info"}),eS(!1),eT(!1),n("playing"),"online"===i&&eJ.current.room?.role==="host"){let e=eJ.current.room.playerId;eB(e),eJ.current.sendEvent({type:"game-state",payload:{action:"start",cards:s,difficulty:o,firstTurnId:e}})}},[eZ,e,i]),e1=(0,r.useCallback)(o=>{if(eG.current||o.matched||o.flipped||"online"===i&&!eC)return;let a=[...v,o.id];if($(a),w(e=>e.map(e=>e.id===o.id?{...e,flipped:!0}:e)),"online"===i&&eJ.current.sendEvent({type:"game-state",payload:{action:"flip",cardId:o.id}}),2===a.length){eG.current=!0,eb(e=>e+1);let[t,r]=a,s=y.find(e=>e.id===t);if(s.pairId===o.pairId){let o=ey+1;ew(o);let a=eg[Math.floor(Math.random()*eg.length)];if(ej({msg:`${p(a,e)} ${p("matched",e)}`,type:"match"}),"online"===i){let e=eJ.current.room?.playerId??"",o={...eF,[e]:(eF[e]??0)+1};eE(e=>e+1),eL(o),eJ.current.sendEvent({type:"game-state",payload:{action:"match",pairId:s.pairId,scorerId:e,nextTurnId:e,playerPairs:o}})}setTimeout(()=>{if(w(e=>e.map(e=>e.pairId===s.pairId?{...e,matched:!0}:e)),$([]),eG.current=!1,o===eU){if(ej({msg:p("allFound",e),type:"match"}),"solo"===i){let e=W+1,o=eh(x);if(!o||e<o){try{let o=JSON.parse(localStorage.getItem(ef)??"{}");(!o[x]||e<o[x])&&(o[x]=e,localStorage.setItem(ef,JSON.stringify(o)))}catch{}eS(!0)}}if("online"===i){let e=eJ.current.room?.playerId??"",o={...eF,[e]:(eF[e]??0)+1};eJ.current.sendEvent({type:"game-state",payload:{action:"game-end",playerPairs:o}})}eT(!0),setTimeout(()=>n("gameover"),1200)}},500)}else{if(ej({msg:p("tryAgain",e),type:"miss"}),j(new Set([t,r])),"online"===i){let e=eJ.current.room?.players??[],o=(e.findIndex(e=>e.id===eJ.current.room?.playerId)+1)%e.length,a=e[o]?.id??"";eA(!1),eB(a),eJ.current.sendEvent({type:"game-state",payload:{action:"no-match",ids:[t,r],nextTurnId:a}})}setTimeout(()=>{w(e=>e.map(e=>e.id===t||e.id===r?{...e,flipped:!1}:e)),$([]),j(new Set),eG.current=!1},800)}}},[v,y,ey,eU,W,x,e,i,eC,e_,eI]),e4=eh(x);if("theme"===a)return(0,t.jsx)(z,{children:(0,t.jsxs)(S,{children:[(0,t.jsxs)(M,{children:["\uD83C\uDCCF ",p("title",e)]}),(0,t.jsx)(T,{children:p("pickTheme",e)}),(0,t.jsx)(C,{children:m.map(o=>(0,t.jsxs)(A,{accent:o.color,onClick:()=>{h(o.id),n("difficulty")},children:[(0,t.jsx)(R,{children:o.emoji}),(0,t.jsx)(_,{children:p(o.id,e)}),(0,t.jsx)(B,{children:o.preview.map((e,o)=>(0,t.jsx)("span",{children:e},o))}),(0,t.jsx)(E,{children:p(`${o.id}Desc`,e)})]},o.id))})]})});if("difficulty"===a){let a=e=>{"online"===i?(b(e),n("lobby")):e0(e)};return(0,t.jsx)(z,{children:(0,t.jsxs)(S,{children:[(0,t.jsxs)(M,{children:["\uD83C\uDCCF ",p("title",e)]}),(0,t.jsx)(T,{children:p("pickSize",e)}),o&&(0,t.jsxs)(ed,{children:[(0,t.jsxs)(ep,{active:"solo"===i,onClick:()=>s("solo"),children:["\uD83C\uDFAF ",p("solo",e)]}),(0,t.jsxs)(ep,{active:"online"===i,onClick:()=>s("online"),children:["\uD83C\uDF10 ",p("online",e)]})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(P,{accent:"#3fb950",onClick:()=>a("easy"),children:[(0,t.jsx)(F,{children:"\uD83C\uDF1F"}),(0,t.jsx)(L,{children:p("easy",e)}),(0,t.jsx)(O,{children:p("easyDesc",e)})]}),(0,t.jsxs)(P,{accent:"#f59e0b",onClick:()=>a("medium"),children:[(0,t.jsx)(F,{children:"\uD83D\uDD25"}),(0,t.jsx)(L,{children:p("medium",e)}),(0,t.jsx)(O,{children:p("mediumDesc",e)})]}),(0,t.jsxs)(P,{accent:"#f97583",onClick:()=>a("hard"),children:[(0,t.jsx)(F,{children:"\uD83D\uDCAA"}),(0,t.jsx)(L,{children:p("hard",e)}),(0,t.jsx)(O,{children:p("hardDesc",e)})]})]}),e4>0&&"solo"===i&&(0,t.jsxs)(es,{children:["\uD83C\uDFC6 ",p("bestMoves",e),": ",e4," ",p("finalMoves",e)]})]})})}if("lobby"===a)return(0,t.jsx)(z,{children:(0,t.jsxs)(S,{children:[(0,t.jsxs)(M,{children:["\uD83C\uDCCF ",p("title",e)]}),eW.room?.connected?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(T,{children:"host"===eW.room.role?"pt"===e?`${eW.room.players.length} jogadores. Clica para come\xe7ar.`:`${eW.room.players.length} players. Click to start.`:"pt"===e?`Ligado! ${eW.room.players.length} jogadores na sala.`:`Connected! ${eW.room.players.length} players in room.`}),(0,t.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:eW.room.players.map(e=>(0,t.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===eW.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===eW.room.role&&(0,t.jsx)(ei,{accent:"#8b5cf6",onClick:()=>e0(x),children:"pt"===e?"Come\xe7ar!":"Start!"})]}):(0,t.jsx)(c.XB,{lang:e,room:eW.room,error:eW.error,availableRooms:eX.rooms,onCreateRoom:()=>{let{code:e,roomName:o}=eW.createRoom();eX.publishRoom({code:e,roomName:o,hostName:eq,playerCount:1})},onJoinRoom:e=>eW.joinRoom(e),onLeaveRoom:()=>{eX.unpublishRoom(),eW.leaveRoom(),n("difficulty")}})]})});if("gameover"===a){let o="online"===i,a=e_>eI,r=e_===eI,c=eO?p("opponentLeft",e):r?p("tied",e):a?p("youWin",e):p("youLose",e),d=()=>{"received"===eH?(eN("none"),n("difficulty"),eJ.current.sendEvent({type:"rematch-accepted"})):(eN("sent"),eJ.current.sendEvent({type:"rematch-request"}))};return(0,t.jsxs)(z,{children:[eM&&em.map((e,o)=>(0,t.jsx)(el,{left:5+12*o,delay:.1*o,color:eu[o%eu.length],children:e},o)),(0,t.jsxs)(Q,{children:[(0,t.jsx)(ee,{children:o?a?"\uD83C\uDF89":r?"\uD83E\uDD1D":"\uD83D\uDE05":"\uD83C\uDFC6"}),(0,t.jsx)(Z,{children:o?c:p("gameOver",e)}),!o&&(0,t.jsx)(ec,{children:p("allFound",e)}),(0,t.jsx)(eo,{children:o&&(eW.room?.players??[]).length>2?(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6,width:"100%",maxWidth:280},children:(eW.room?.players??[]).map(e=>({...e,pts:eF[e.id]??0})).sort((e,o)=>o.pts-e.pts).map((o,a)=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("span",{style:{fontSize:16,minWidth:24},children:0===a?"\uD83E\uDD47":1===a?"\uD83E\uDD48":2===a?"\uD83E\uDD49":`${a+1}.`}),(0,t.jsxs)("span",{style:{flex:1,fontWeight:600,color:o.id===eW.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[o.name,o.id===eW.room?.playerId?` (${p("you",e)})`:""]}),(0,t.jsxs)("span",{style:{fontSize:20,fontWeight:800,color:0===a?"#3fb950":l.w4.colors.mainText},children:[o.pts," ",p("pairs",e)]})]},o.id))}):o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(et,{children:p("you",e)}),(0,t.jsx)(er,{color:"#3fb950",children:e_})]}),(0,t.jsxs)(ea,{children:[(0,t.jsx)(et,{children:p("opponent",e)}),(0,t.jsx)(er,{color:"#f97583",children:eI})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(et,{children:p("moves",e)}),(0,t.jsx)(er,{children:W})]}),(0,t.jsxs)(ea,{children:[(0,t.jsx)(et,{children:p("pairs",e)}),(0,t.jsx)(er,{color:"#3fb950",children:eU})]}),(0,t.jsxs)(ea,{children:[(0,t.jsx)(et,{children:p("finalTime",e)}),(0,t.jsx)(er,{color:"#f59e0b",children:f(ev)})]})]})}),!o&&ez&&(0,t.jsxs)(en,{children:["\uD83C\uDF89 ",p("newRecord",e)]}),!o&&e4>0&&!ez&&(0,t.jsxs)(es,{children:["\uD83C\uDFC6 ",p("bestMoves",e),": ",e4," ",p("finalMoves",e)]}),o&&!eO?"sent"===eH?(0,t.jsx)(ei,{accent:"#666",children:p("waiting",e)}):"received"===eH?(0,t.jsxs)(ei,{accent:"#3fb950",onClick:d,children:[p("rematch",e)," ✓"]}):(0,t.jsx)(ei,{accent:"#8b5cf6",onClick:d,children:p("rematch",e)}):(0,t.jsx)(ei,{accent:"#8b5cf6",onClick:()=>{o&&eJ.current.leaveRoom(),s("solo"),n("theme")},children:p("playAgain",e)})]})]})}return(0,t.jsx)(z,{children:(0,t.jsxs)(D,{children:[(0,t.jsx)(H,{children:"online"===i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(N,{highlight:eC,children:["⭐ ",p("you",e),": ",e_]}),(0,t.jsxs)(N,{children:["\uD83D\uDC64 ",p("opponent",e),": ",eI]}),(0,t.jsxs)(N,{children:[p("pairs",e),": ",ey,"/",eU]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(N,{children:["\uD83C\uDFB4 ",p("moves",e),": ",W]}),(0,t.jsxs)(N,{highlight:ey===eU,children:["⭐ ",p("pairs",e),": ",ey,"/",eU]}),(0,t.jsxs)(N,{children:["⏱️ ",f(ev)]})]})}),(0,t.jsx)(G,{type:ek.type,children:"online"===i?eC?p("yourTurn",e):p("theirTurn",e):ek.msg},ek.msg),(0,t.jsx)(Y,{cols:eK,children:y.map(e=>(0,t.jsx)(q,{className:"card-outer",matched:e.matched,wrong:k.has(e.id),onClick:()=>e1(e),"aria-label":e.flipped?e.symbol:"Hidden card",children:(0,t.jsxs)(V,{flipped:e.flipped,children:[(0,t.jsx)(J,{}),(0,t.jsxs)(X,{matched:e.matched,children:[(0,t.jsx)(U,{size:eQ,children:e.symbol}),e.matched&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(K,{i:0,children:"✨"}),(0,t.jsx)(K,{i:1,children:"✨"})]})]})]})},e.id))})]})})}},3473(e,o,a){a.d(o,{k:()=>P});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246);let c=[{id:"dodge",emoji:"\uD83D\uDCA3",instruction:{pt:"Foge das bombas!",en:"Dodge the bombs!"}},{id:"tap-fast",emoji:"⚡",instruction:{pt:"Toca o mais r\xe1pido poss\xedvel!",en:"Tap as fast as you can!"}},{id:"color-match",emoji:"\uD83C\uDFA8",instruction:{pt:"Toca na cor certa!",en:"Tap the right color!"}},{id:"remember",emoji:"\uD83E\uDDE0",instruction:{pt:"Memoriza a sequ\xeancia!",en:"Remember the sequence!"}},{id:"catch",emoji:"\uD83E\uDEA3",instruction:{pt:"Apanha os que caem!",en:"Catch the falling ones!"}}];function d(e){return e[Math.floor(Math.random()*e.length)]}function p(e){let o=[...e];for(let e=o.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[o[e],o[a]]=[o[a],o[e]]}return o}let m=(0,s.keyframes)`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`,u=(0,s.keyframes)`0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}`,g=(0,s.keyframes)`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`,f=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`;(0,s.keyframes)`from{transform:translateY(-40px);opacity:0}to{transform:translateY(0);opacity:1}`;let h=(0,s.keyframes)`0%,100%{transform:rotate(0)}25%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}`,x=i().div`flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:${l.w4.spacing.lg};gap:${l.w4.spacing.lg};overflow:hidden;min-height:0;background:radial-gradient(ellipse 60% 50% at 50% 30%,rgba(88,166,255,0.06) 0%,transparent 70%),#080b12;`,b=i().h1`font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:${l.w4.colors.mainText};margin:0;text-align:center;animation:${m} 0.3s ease;`,y=i().p`font-size:${l.w4.typography.fontSizeMd};color:${l.w4.colors.mainTextMuted};text-align:center;margin:0;max-width:320px;`,w=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}`;i().div`font-size:clamp(4rem,12vw,8rem);font-weight:900;color:${l.w4.colors.accent};animation:${f} 0.5s ease;`;let v=i().span`font-size:72px;animation:${g} 1s ease-in-out infinite;`,$=i().div`display:flex;flex-direction:column;align-items:center;gap:${l.w4.spacing.md};padding:${l.w4.spacing.xl};background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.accent};border-radius:${l.w4.borderRadius.lg};animation:${u} 0.3s ease;`,k=i().span`font-size:72px;animation:${h} 1s ease-in-out infinite;`,j=i().p`font-size:${l.w4.typography.fontSizeLg};font-weight:700;color:${l.w4.colors.mainText};text-align:center;margin:0;`,z=i().div`position:relative;width:100%;max-width:400px;height:300px;background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};overflow:hidden;touch-action:manipulation;`,S=i().button`
  position:absolute;left:${({x:e})=>e}%;top:${({y:e})=>e}%;width:${({size:e})=>e}px;height:${({size:e})=>e}px;
  transform:translate(-50%,-50%);border-radius:50%;border:none;cursor:pointer;
  font-size:${({size:e})=>.6*e}px;display:flex;align-items:center;justify-content:center;
  background:rgba(88,166,255,0.15);animation:${u} 0.2s ease;transition:transform 0.1s;
  &:active{transform:translate(-50%,-50%) scale(0.9);}
`,M=i().div`display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%;max-width:300px;`,T=i().button`
  aspect-ratio:1;border-radius:${l.w4.borderRadius.lg};background:${({bg:e})=>e};border:3px solid transparent;
  cursor:pointer;transition:all 0.15s;min-height:70px;
  &:hover{border-color:rgba(255,255,255,0.3);transform:scale(1.05);}
  &:active{transform:scale(0.95);}
`,C=i().div`display:flex;gap:12px;justify-content:center;flex-wrap:wrap;`,A=i().div`
  width:60px;height:60px;border-radius:${l.w4.borderRadius.lg};display:flex;align-items:center;justify-content:center;
  font-size:28px;background:${({active:e})=>e?"rgba(88,166,255,0.2)":l.w4.colors.surface};
  border:2px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  animation: ${({revealed:e})=>e?u:"none"} 0.3s ease;
  cursor:pointer;transition:all 0.15s;&:hover{border-color:${l.w4.colors.accent};}
`,R=i().div`
  position:absolute;left:${({x:e})=>e}%;top:${({y:e})=>e}%;font-size:32px;line-height:1;
  transform:translateX(-50%);pointer-events:none;
`,B=i().div`
  position:absolute;bottom:10px;left:${({x:e})=>e}%;transform:translateX(-50%);
  font-size:40px;transition:left 0.1s linear;
`,_=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};`,E=i().div`padding:8px 20px;background:${l.w4.colors.surface};border:1px solid ${l.w4.colors.accent};border-radius:24px;font-size:16px;font-weight:700;color:${l.w4.colors.accent};`,I=["#f97583","#58a6ff","#3fb950","#f59e0b","#d2a8ff","#ff6bcb","#06b6d4","#ef4444","#a855f7"];function P({lang:e}){let[o,a]=(0,r.useState)("menu"),[n,i]=(0,r.useState)(0),[s,l]=(0,r.useState)(0),[m,u]=(0,r.useState)(null),[g,f]=(0,r.useState)(0),[h,F]=(0,r.useState)({}),[L,O]=(0,r.useState)(()=>{try{return Number(localStorage.getItem("atlantis-miniparty-best")??"0")}catch{return 0}}),D=(0,r.useRef)(null),H=(0,r.useRef)(null),N=(0,r.useCallback)(()=>{D.current&&(clearInterval(D.current),D.current=null),H.current&&(clearInterval(H.current),H.current=null)},[]),G=(0,r.useCallback)(()=>{N();let e=n+1;if(e>5){let e=s+g;if(e>L){O(e);try{localStorage.setItem("atlantis-miniparty-best",String(e))}catch{}}a("scores");return}i(e),f(0),u(c[(e-1)%c.length]),F({}),a("intro"),setTimeout(()=>a("playing"),2e3)},[n,s,g,L,N]),Y=(0,r.useCallback)(()=>{N(),l(e=>e+g),a("result")},[g,N]),q=(0,r.useCallback)(()=>{i(0),l(0),f(0),G()},[G]);(0,r.useEffect)(()=>{if("playing"===o)return F(e=>({...e,timeLeft:6})),D.current=setInterval(()=>{F(e=>{let o=(e.timeLeft??6)-1;return o<=0?(Y(),e):{...e,timeLeft:o}})},1e3),()=>{D.current&&clearInterval(D.current)}},[o,Y]);let V=(0,r.useCallback)(()=>{f(e=>e+1),F(e=>({...e,tapX:10+80*Math.random(),tapY:10+80*Math.random()}))},[]);(0,r.useEffect)(()=>{if("playing"!==o||m?.id!=="color-match")return;let e=d(I),a=p([...I]).slice(0,9);a.includes(e)||(a[Math.floor(9*Math.random())]=e),F(o=>({...o,targetColor:e,gridColors:a,colorCorrect:null}))},[o,m]);let W=(0,r.useCallback)(e=>{if(e===h.targetColor){f(e=>e+1);let e=d(I),o=p([...I]).slice(0,9);o.includes(e)||(o[Math.floor(9*Math.random())]=e),F(a=>({...a,targetColor:e,gridColors:o,colorCorrect:!0}))}else F(e=>({...e,colorCorrect:!1}));setTimeout(()=>F(e=>({...e,colorCorrect:null})),300)},[h.targetColor]);(0,r.useEffect)(()=>{if("playing"!==o||m?.id!=="remember")return;let e=["\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC38","\uD83E\uDD8A","\uD83D\uDC3C","\uD83D\uDC35","\uD83D\uDC30","\uD83D\uDC37"],a=Array.from({length:Math.min(3+n,6)},()=>d(e));F(e=>({...e,sequence:a,seqPhase:"show",seqIdx:0,userSeq:[]}));let t=0,r=setInterval(()=>{++t>=a.length?(clearInterval(r),setTimeout(()=>F(e=>({...e,seqPhase:"input",seqIdx:0})),800)):F(e=>({...e,seqIdx:t}))},700);return()=>clearInterval(r)},[o,m,n]);let J=(0,r.useCallback)(e=>{let o=h.sequence,a=[...h.userSeq??[],e];o[a.length-1]===e?a.length===o.length?(f(e=>e+o.length),Y()):F(e=>({...e,userSeq:a})):Y()},[h.sequence,h.userSeq,Y]);(0,r.useEffect)(()=>{if("playing"!==o||m?.id!=="dodge")return;let e=[],a=0,t=0;F(e=>({...e,playerX:50,bombs:[]}));let r=()=>{let o=Date.now();for(let r of(o-t>600&&(t=o,e.push({id:++a,x:10+80*Math.random(),y:-5})),e))r.y+=1.5;e.length;for(let o=e.length-1;o>=0;o--)e[o].y>105&&(e.splice(o,1),f(e=>e+1));F(o=>({...o,bombs:e.map(e=>({...e}))})),n.current=requestAnimationFrame(r)},n={current:requestAnimationFrame(r)};return()=>cancelAnimationFrame(n.current)},[o,m]),(0,r.useEffect)(()=>{if("playing"!==o||m?.id!=="catch")return;let e=[],a=0,t=0;F(e=>({...e,bucketX:50,items:[]}));let r=()=>{let o=Date.now();for(let r of(o-t>500&&(t=o,e.push({id:++a,x:10+80*Math.random(),y:-5,emoji:d(["⭐","\uD83D\uDC8E","\uD83C\uDF4E","\uD83C\uDF6C","\uD83C\uDF81"])})),e))r.y+=1.2;for(let o=e.length-1;o>=0;o--)e[o].y>105&&e.splice(o,1);F(o=>({...o,items:e.map(e=>({...e}))})),n.current=requestAnimationFrame(r)},n={current:requestAnimationFrame(r)};return()=>cancelAnimationFrame(n.current)},[o,m]);let X=(0,r.useCallback)(e=>{F(o=>({...o,bucketX:Math.max(10,Math.min(90,(o.bucketX??50)+("left"===e?-15:15)))}))},[]);if("menu"===o)return(0,t.jsxs)(x,{children:[(0,t.jsxs)(b,{children:["\uD83C\uDF89 ","pt"===e?"Mini Festa!":"Mini Party!"]}),(0,t.jsx)(y,{children:"pt"===e?"5 mini-jogos r\xe1pidos! Consegues pontos m\xe1ximos?":"5 quick mini-games! Can you get max points?"}),L>0&&(0,t.jsxs)(y,{children:["\uD83C\uDFC6 ","pt"===e?"Melhor":"Best",": ",L]}),(0,t.jsx)(w,{accent:"#58a6ff",onClick:q,children:"pt"===e?"Jogar!":"Play!"})]});if("intro"===o&&m)return(0,t.jsxs)(x,{children:[(0,t.jsxs)(E,{children:["pt"===e?"Ronda":"Round"," ",n,"/",5]}),(0,t.jsxs)($,{children:[(0,t.jsx)(k,{children:m.emoji}),(0,t.jsx)(j,{children:m.instruction["pt"===e?"pt":"en"]})]})]});if("result"===o)return(0,t.jsxs)(x,{children:[(0,t.jsxs)(b,{children:[g>0?"\uD83C\uDF89":"\uD83D\uDE05"," +",g]}),(0,t.jsxs)(_,{color:"#3fb950",children:["⭐ ",s+g]}),(0,t.jsx)(w,{accent:"#58a6ff",onClick:G,children:n>=5?"pt"===e?"Ver resultados":"See results":"➡️"})]});if("scores"===o)return(0,t.jsxs)(x,{children:[(0,t.jsx)(v,{children:"\uD83C\uDFC6"}),(0,t.jsx)(b,{children:"pt"===e?"Resultados":"Results"}),(0,t.jsxs)(_,{color:"#3fb950",children:["⭐ ",s]}),s>=L&&s>0&&(0,t.jsxs)(y,{style:{color:"#f59e0b",fontWeight:700},children:["\uD83C\uDF89 ","pt"===e?"Novo recorde!":"New record!"]}),(0,t.jsx)(w,{accent:"#58a6ff",onClick:()=>{i(0),l(0),a("menu")},children:"Menu"})]});let U=h.timeLeft??6;return(0,t.jsxs)(x,{children:[(0,t.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,t.jsxs)(_,{children:["⭐ ",g]}),(0,t.jsxs)(_,{color:U<=2?"#f97583":void 0,children:["⏱️ ",U,"s"]})]}),m?.id==="tap-fast"&&(0,t.jsx)(z,{onClick:V,children:(0,t.jsx)(S,{x:h.tapX??50,y:h.tapY??50,size:70,onClick:e=>{e.stopPropagation(),V()},children:"⚡"})}),m?.id==="color-match"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{width:80,height:80,borderRadius:"50%",background:h.targetColor??"#fff",border:"4px solid rgba(255,255,255,0.3)"}}),(0,t.jsx)(M,{children:(h.gridColors??[]).map((e,o)=>(0,t.jsx)(T,{bg:e,onClick:()=>W(e)},o))})]}),m?.id==="remember"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{children:(h.sequence??[]).map((e,o)=>(0,t.jsx)(A,{active:"show"===h.seqPhase&&o<=(h.seqIdx??0),revealed:"show"===h.seqPhase&&o===(h.seqIdx??0),onClick:()=>"input"===h.seqPhase&&J(e),children:"show"===h.seqPhase&&o<=(h.seqIdx??0)?e:"?"},o))}),"input"===h.seqPhase&&(0,t.jsx)(y,{children:"pt"===e?"Agora repete!":"Now repeat!"})]}),m?.id==="dodge"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)("div",{style:{position:"absolute",bottom:20,left:`${h.playerX??50}%`,transform:"translateX(-50%)",fontSize:36,transition:"left 0.15s"},children:"\uD83C\uDFC3"}),(h.bombs??[]).map(e=>(0,t.jsx)(R,{x:e.x,y:e.y,children:"\uD83D\uDCA3"},e.id))]}),(0,t.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,t.jsx)(w,{accent:"#58a6ff",onClick:()=>F(e=>({...e,playerX:Math.max(10,(e.playerX??50)-20)})),children:"⬅️"}),(0,t.jsx)(w,{accent:"#58a6ff",onClick:()=>F(e=>({...e,playerX:Math.min(90,(e.playerX??50)+20)})),children:"➡️"})]})]}),m?.id==="catch"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{x:h.bucketX??50,children:"\uD83E\uDEA3"}),(h.items??[]).map(e=>(0,t.jsx)(R,{x:e.x,y:e.y,children:e.emoji},e.id))]}),(0,t.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,t.jsx)(w,{accent:"#58a6ff",onClick:()=>X("left"),children:"⬅️"}),(0,t.jsx)(w,{accent:"#58a6ff",onClick:()=>X("right"),children:"➡️"})]})]})]})}},7192(e,o,a){a.d(o,{H:()=>en});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246);let c="atlantis-pixelboard-gallery",d=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4ecdc4","#74c0fc","#748ffc","#da77f2","#f783ac","#ffffff","#868e96","#212529"],p=[8,12,16],m={title:{pt:"Tabuleiro de Pixels",en:"Pixel Board"},paint:{pt:"Pintar",en:"Paint"},eraser:{pt:"Apagar",en:"Eraser"},clearAll:{pt:"Limpar",en:"Clear"},save:{pt:"Guardar",en:"Save"},gallery:{pt:"Galeria",en:"Gallery"},back:{pt:"← Voltar",en:"← Back"},confirmClear:{pt:"Tens a certeza que queres apagar tudo?",en:"Are you sure you want to clear everything?"},yes:{pt:"Sim",en:"Yes"},no:{pt:"N\xe3o",en:"No"},drawingName:{pt:"Nome do desenho:",en:"Drawing name:"},myDrawing:{pt:"O meu desenho",en:"My drawing"},saved:{pt:"Guardado!",en:"Saved!"},emptyGallery:{pt:"Ainda sem desenhos guardados.",en:"No saved drawings yet."},load:{pt:"Carregar",en:"Load"},delete:{pt:"Apagar",en:"Delete"},close:{pt:"Fechar",en:"Close"},templates:{pt:"Modelos",en:"Templates"},heart:{pt:"Cora\xe7\xe3o",en:"Heart"},star:{pt:"Estrela",en:"Star"},smiley:{pt:"Sorriso",en:"Smiley"},gridSize:{pt:"Tamanho",en:"Size"},selectedColor:{pt:"Cor selecionada",en:"Selected color"},undo:{pt:"Desfazer",en:"Undo"},tapToPaint:{pt:"Toca para pintar!",en:"Tap to paint!"}};function u(e){return Array(e*e).fill("")}function g(e,o,a){let t=u(a),r=Math.floor((a-e.length)/2);return e.forEach((e,n)=>{e.forEach((e,i)=>{let s=n+r,l=i+r;s>=0&&s<a&&l>=0&&l<a&&0!==e&&(t[s*a+l]=o[e]??"")})}),t}function f(e){return g([[0,1,1,0,0,0,1,1,0],[1,1,1,1,0,1,1,1,1],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0]],{1:"#ff6b6b"},e)}function h(e){return g([[0,0,0,0,1,0,0,0,0],[0,0,0,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,0,1,0,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,1]],{1:"#ffd43b"},e)}function x(e){return g([[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,2,1,1,1,1,2,1,1],[1,1,2,1,1,1,1,2,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,3,1,1],[1,1,1,3,3,3,3,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0]],{1:"#ffd43b",2:"#212529",3:"#212529"},e)}function b(e){localStorage.setItem(c,JSON.stringify(e))}let y=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=(0,s.keyframes)`
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
  animation: ${y} 0.3s ease;
`,j=i().h1`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,z=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: ${y} 0.3s ease 0.05s both;
  width: 100%;
  max-width: min(calc(100vw - 32px), 480px);
`,S=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  width: 100%;
`,M=i().button`
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
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
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
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?"rgba(88,166,255,0.18)":"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};

  &:hover {
    background: rgba(88,166,255,0.1);
    color: ${l.w4.colors.accent};
  }
`,A=i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: ${l.w4.borderRadius.md};
  min-height: 44px;
  border: 1px solid ${({active:e,danger:o})=>o?"rgba(249,117,131,0.3)":e?l.w4.colors.accent+"50":l.w4.colors.border};
  background: ${({active:e,danger:o})=>o?"rgba(249,117,131,0.08)":e?"rgba(88,166,255,0.12)":l.w4.colors.surface};
  color: ${({active:e,danger:o})=>o?"#f97583":e?l.w4.colors.accent:l.w4.colors.mainText};
  font-size: 13px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    background: ${({danger:e})=>e?"rgba(249,117,131,0.14)":"rgba(88,166,255,0.1)"};
    border-color: ${({danger:e})=>e?"#f97583":l.w4.colors.accent+"60"};
  }

  &:active {
    transform: translateY(0);
  }
`,R=i().div`
  position: relative;
  flex-shrink: 0;
  animation: ${y} 0.3s ease 0.1s both;
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
`,_=i().div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
  border-radius: ${l.w4.borderRadius.lg};
`,E=i().span`
  font-size: clamp(0.85rem, 3vw, 1.1rem);
  font-weight: 700;
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
  letter-spacing: 0.02em;
  text-align: center;
  padding: ${l.w4.spacing.sm};
`,I=i().div`
  background: ${({color:e})=>e||l.w4.colors.surface};
  cursor: crosshair;
  transition: background 0.08s;
  animation: ${({isNew:e})=>e?w:"none"} 0.18s ease;

  &:hover {
    filter: brightness(1.18);
    z-index: 1;
  }
`,P=i().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  animation: ${y} 0.3s ease 0.15s both;
  max-width: min(calc(100vw - 32px), 480px);
`,F=i().div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  cursor: pointer;
  border: 2px solid ${({selected:e})=>e?"#ffffff":"transparent"};
  box-shadow: ${({selected:e})=>e?"0 0 0 2px rgba(255,255,255,0.4), 0 0 0 4px rgba(88,166,255,0.5)":"0 1px 3px rgba(0,0,0,0.4)"};
  transform: ${({selected:e})=>e?"scale(1.2)":"scale(1)"};
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;

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
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;

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
`,D=i().div`
  position: absolute;
  inset: 0;
  background: rgba(13,17,23,0.75);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: ${l.w4.spacing.lg};
  animation: ${y} 0.2s ease;
`,H=i().div`
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
  animation: ${y} 0.2s ease;
`,N=i().p`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,G=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,Y=i().div`
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
`,V=i().div`
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
  animation: ${y} 0.2s ease;
  transition: border-color 0.15s, box-shadow 0.15s;

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
  font-size: 12px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s;

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
`,eo=i().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
  max-width: min(calc(100vw - 32px), 480px);
  width: 100%;
`,ea=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 12px 12px;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.surface};
  color: ${l.w4.colors.mainText};
  font-size: 12px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
  min-width: 80px;
  min-height: 44px;

  &:hover {
    transform: translateY(-1px);
    border-color: ${l.w4.colors.accent}60;
    background: rgba(88,166,255,0.06);
  }
  &:active { transform: translateY(0); }
`,et=i().div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 0;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
`,er=i().div`
  background: ${({color:e})=>e||l.w4.colors.mainBg};
`;function en({lang:e,onBack:o}){let a=(0,r.useCallback)(o=>m[o]?.[e]??m[o]?.en??o,[e]),[n,i]=(0,r.useState)(12),[s,g]=(0,r.useState)(()=>u(12)),[y,w]=(0,r.useState)([]),[v,ei]=(0,r.useState)(d[0]),[es,el]=(0,r.useState)("paint"),[ec,ed]=(0,r.useState)(null),[ep,em]=(0,r.useState)(!1),[eu,eg]=(0,r.useState)(()=>(function(){try{let e=localStorage.getItem(c);if(e)return JSON.parse(e)}catch{}return[]})()),[ef,eh]=(0,r.useState)("draw"),[ex,eb]=(0,r.useState)(!1),[ey,ew]=(0,r.useState)(!1),[ev,e$]=(0,r.useState)(!1),[ek,ej]=(0,r.useState)(""),[ez,eS]=(0,r.useState)(!1),eM=(0,r.useMemo)(()=>s.every(e=>""===e),[s]),eT=(0,r.useRef)(null),eC=(0,r.useRef)(null),eA=(0,r.useRef)(null),eR=(0,r.useCallback)(e=>{ed(e),eA.current&&clearTimeout(eA.current),eA.current=setTimeout(()=>ed(null),200)},[]),eB=(0,r.useCallback)(e=>{w(o=>[...o.slice(-19),e])},[]),e_=(0,r.useCallback)(e=>{g(o=>{let a="eraser"===es?"":v;if(o[e]===a)return o;eB(o);let t=[...o];return t[e]=a,t}),eS(!0),eR(e)},[es,v,eR,eB]),eE=(0,r.useCallback)(()=>{w(e=>0===e.length?e:(g(e[e.length-1]),e.slice(0,-1)))},[]),eI=(0,r.useCallback)(e=>{em(!0),e_(e)},[e_]),eP=(0,r.useCallback)(e=>{ep&&e_(e)},[ep,e_]),eF=(0,r.useCallback)(()=>{em(!1)},[]);(0,r.useEffect)(()=>{let e=()=>em(!1);return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);let eL=(0,r.useCallback)((e,o)=>{if(!eC.current)return null;let a=eC.current.getBoundingClientRect(),t=e-a.left,r=o-a.top;if(t<0||r<0||t>a.width||r>a.height)return null;let i=Math.floor(t/a.width*n),s=Math.floor(r/a.height*n);return i<0||i>=n||s<0||s>=n?null:s*n+i},[n]),eO=(0,r.useCallback)(e=>{let o=e.touches[0],a=eL(o.clientX,o.clientY);eT.current={x:o.clientX,y:o.clientY,idx:a??-1}},[eL]),eD=(0,r.useCallback)(e=>{if(!eT.current)return;let o=e.changedTouches[0],a=Math.abs(o.clientX-eT.current.x),t=Math.abs(o.clientY-eT.current.y);if(a>8||t>8){if(a>2*t||t<=8){let e=eL(o.clientX,o.clientY);null!==e&&e_(e)}return}},[eL,e_]),eH=(0,r.useCallback)(e=>{if(!eT.current)return;let o=e.changedTouches[0],a=Math.abs(o.clientX-eT.current.x),t=Math.abs(o.clientY-eT.current.y),r=eT.current.idx;eT.current=null,a<=8&&t<=8&&r>=0&&e_(r)},[e_]),eN=(0,r.useCallback)(e=>{i(e),g(u(e)),w([]),eS(!1)},[]),eG=(0,r.useCallback)(e=>{el(e)},[]),eY=(0,r.useCallback)(()=>{eB(s),g(u(n)),eb(!1),eS(!1)},[n,s,eB]),eq=(0,r.useCallback)(()=>{ej(a("myDrawing")),ew(!0)},[a]),eV=(0,r.useCallback)(()=>{let e=ek.trim()||a("myDrawing"),o=[{id:Date.now().toString(),name:e,grid:[...s],size:n,savedAt:Date.now()},...eu].slice(0,30);eg(o),b(o),ew(!1),e$(!0),setTimeout(()=>e$(!1),1800)},[ek,s,n,eu,a]),eW=(0,r.useCallback)(e=>{i(e.size),g(e.grid),w([]),eS(!0),eh("draw")},[]),eJ=(0,r.useCallback)(e=>{let o=eu.filter(o=>o.id!==e);eg(o),b(o)},[eu]),eX=(0,r.useCallback)(e=>{eB(s),g(e(n)),eS(!0)},[n,s,eB]),eU=(0,r.useMemo)(()=>({heart:f(8),star:h(8),smiley:x(8)}),[]);return"gallery"===ef?(0,t.jsxs)($,{children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)(A,{onClick:()=>eh("draw"),children:["← ",a("close")]}),(0,t.jsxs)(Z,{children:["\uD83D\uDDBC️ ",a("gallery")]})]}),(0,t.jsx)(Y,{children:0===eu.length?(0,t.jsx)(ee,{children:a("emptyGallery")}):(0,t.jsx)(q,{children:eu.map(e=>(0,t.jsxs)(V,{children:[(0,t.jsx)(W,{cols:e.size,children:e.grid.map((e,o)=>(0,t.jsx)(J,{color:e},o))}),(0,t.jsxs)(X,{children:[(0,t.jsx)(U,{children:e.name}),(0,t.jsxs)(K,{children:[(0,t.jsx)(Q,{variant:"primary",onClick:()=>eW(e),children:a("load")}),(0,t.jsx)(Q,{variant:"danger",onClick:()=>eJ(e.id),children:a("delete")})]})]})]},e.id))})})]}):(0,t.jsxs)($,{children:[ex&&(0,t.jsx)(D,{onClick:()=>eb(!1),children:(0,t.jsxs)(H,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(N,{children:a("confirmClear")}),(0,t.jsxs)(G,{children:[(0,t.jsx)(A,{onClick:()=>eb(!1),children:a("no")}),(0,t.jsx)(A,{danger:!0,onClick:eY,children:a("yes")})]})]})}),ey&&(0,t.jsx)(D,{onClick:()=>ew(!1),children:(0,t.jsxs)(H,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(N,{children:a("drawingName")}),(0,t.jsx)("input",{value:ek,onChange:e=>ej(e.target.value),onKeyDown:e=>{"Enter"===e.key&&eV(),"Escape"===e.key&&ew(!1)},autoFocus:!0,style:{background:l.w4.colors.mainBg,border:`1px solid ${l.w4.colors.border}`,borderRadius:l.w4.borderRadius.md,color:l.w4.colors.mainText,padding:"8px 12px",fontSize:l.w4.typography.fontSizeBase,fontFamily:l.w4.typography.fontFamily,width:"100%",outline:"none"}}),(0,t.jsxs)(G,{children:[(0,t.jsx)(A,{onClick:()=>ew(!1),children:a("no")}),(0,t.jsxs)(A,{onClick:eV,children:[a("save")," \uD83D\uDCBE"]})]})]})}),(0,t.jsx)(k,{children:(0,t.jsxs)(j,{children:["\uD83C\uDFA8 ",a("title")]})}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(M,{onClick:eE,disabled:0===y.length,"aria-label":a("undo"),title:a("undo"),children:"↩️"}),(0,t.jsxs)(A,{active:"paint"===es,onClick:()=>eG("paint"),children:["\uD83C\uDFA8 ",a("paint")]}),(0,t.jsxs)(A,{active:"eraser"===es,onClick:()=>eG("eraser"),children:["\uD83E\uDDF9 ",a("eraser")]}),(0,t.jsx)(T,{children:p.map(e=>(0,t.jsxs)(C,{active:n===e,onClick:()=>eN(e),children:[e,"\xd7",e]},e))})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(M,{danger:!0,onClick:()=>eb(!0),title:a("clearAll"),"aria-label":a("clearAll"),children:"\uD83D\uDDD1️"}),(0,t.jsx)(M,{onClick:eq,title:a("save"),"aria-label":a("save"),children:"\uD83D\uDCBE"}),(0,t.jsxs)(A,{onClick:()=>eh("gallery"),children:["\uD83D\uDDBC️ ",a("gallery")," ",eu.length>0&&`(${eu.length})`]})]})]}),(0,t.jsxs)(eo,{children:[(0,t.jsxs)("span",{style:{fontSize:12,color:l.w4.colors.mainTextMuted,alignSelf:"center",flexShrink:0},children:[a("templates"),":"]}),(0,t.jsxs)(ea,{onClick:()=>eX(f),children:[(0,t.jsx)(et,{cols:8,children:eU.heart.map((e,o)=>(0,t.jsx)(er,{color:e},o))}),a("heart")]}),(0,t.jsxs)(ea,{onClick:()=>eX(h),children:[(0,t.jsx)(et,{cols:8,children:eU.star.map((e,o)=>(0,t.jsx)(er,{color:e},o))}),a("star")]}),(0,t.jsxs)(ea,{onClick:()=>eX(x),children:[(0,t.jsx)(et,{cols:8,children:eU.smiley.map((e,o)=>(0,t.jsx)(er,{color:e},o))}),a("smiley")]})]}),(0,t.jsxs)(R,{ref:eC,onTouchStart:eO,onTouchMove:eD,onTouchEnd:eH,children:[(0,t.jsx)(B,{cols:n,role:"grid","aria-label":a("title"),children:s.map((e,o)=>(0,t.jsx)(I,{color:e,isNew:o===ec,role:"gridcell","aria-label":`cell ${o}`,onMouseDown:()=>eI(o),onMouseEnter:()=>eP(o),onMouseUp:eF},o))}),eM&&!ez&&(0,t.jsx)(_,{children:(0,t.jsx)(E,{children:a("tapToPaint")})})]}),(0,t.jsxs)(P,{role:"group","aria-label":a("selectedColor"),children:[d.map(e=>(0,t.jsx)(F,{color:e,selected:"paint"===es&&v===e,onClick:()=>{ei(e),el("paint")},role:"radio","aria-checked":"paint"===es&&v===e,"aria-label":e},e)),(0,t.jsx)(L,{selected:"eraser"===es,onClick:()=>el("eraser"),role:"radio","aria-checked":"eraser"===es,"aria-label":a("eraser"),children:"\uD83E\uDDF9"})]}),ev&&(0,t.jsxs)(O,{children:["✅ ",a("saved")]})]})}i().div`
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
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    background: rgba(255,255,255,0.04);
    border-color: ${l.w4.colors.mainTextMuted};
    color: ${l.w4.colors.mainText};
  }
`},3325(e,o,a){a.d(o,{m:()=>er});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246);let c={title:{pt:"Ca\xe7ador de Sons",en:"Sound Hunter"},subtitle:{pt:"Encontra os sons ao teu redor!",en:"Find the sounds around you!"},progress:{pt:"Miss\xf5es completas",en:"Missions complete"},record:{pt:"Gravar",en:"Record"},stop:{pt:"Parar",en:"Stop"},play:{pt:"Ouvir",en:"Play"},complete:{pt:"Conclu\xeddo!",en:"Done!"},markDone:{pt:"Marcar como feito",en:"Mark as done"},back:{pt:"Voltar",en:"Back"},reset:{pt:"Recome\xe7ar",en:"Reset"},permDenied:{pt:"Microfone bloqueado. Verifica as permiss\xf5es do navegador.",en:"Microphone blocked. Check your browser permissions."},permError:{pt:"N\xe3o foi poss\xedvel aceder ao microfone.",en:"Could not access the microphone."},celebrate:{pt:"\uD83C\uDF89 Parab\xe9ns, Ca\xe7ador de Sons!",en:"\uD83C\uDF89 Congrats, Sound Hunter!"},celebrateSub:{pt:"Encontraste todos os sons! Que aventura incr\xedvel!",en:"You found every sound! What an amazing adventure!"},celebrateReset:{pt:"Jogar outra vez",en:"Play again"},recording:{pt:"A gravar…",en:"Recording…"},tapRecord:{pt:"Toca em Gravar",en:"Tap Record"}};function d(e,o){return c[e]["pt"===o?"pt":"en"]}let p=[{id:"dog",emoji:"\uD83D\uDC15",en:"Dog barking",pt:"C\xe3o a ladrar"},{id:"water",emoji:"\uD83D\uDEBF",en:"Water running",pt:"\xc1gua a correr"},{id:"clap",emoji:"\uD83D\uDC4F",en:"Clapping hands",pt:"Palmas"},{id:"door",emoji:"\uD83D\uDEAA",en:"Door closing",pt:"Porta a fechar"},{id:"cat",emoji:"\uD83D\uDC31",en:"Cat meowing",pt:"Gato a miar"},{id:"bell",emoji:"\uD83D\uDD14",en:"Bell ringing",pt:"Campainha a tocar"},{id:"alarm",emoji:"⏰",en:"Alarm clock",pt:"Despertador"},{id:"sing",emoji:"\uD83C\uDFB5",en:"Singing a song",pt:"Cantar uma m\xfasica"},{id:"wind",emoji:"\uD83D\uDCA8",en:"Wind blowing",pt:"Vento a soprar"},{id:"bird",emoji:"\uD83E\uDD9C",en:"Bird singing",pt:"P\xe1ssaro a cantar"},{id:"keys",emoji:"\uD83D\uDDDD️",en:"Jingling keys",pt:"Chaves a tilintar"},{id:"laugh",emoji:"\uD83D\uDE02",en:"Laughter",pt:"Gargalhada"}],m="atlantis-soundhunter-progress";function u(){return Object.fromEntries(p.map(e=>[e.id,{recording:!1,audioUrl:null,completed:!1,timerSecs:0}]))}let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=(0,s.keyframes)`
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.12); }
  100% { transform: scale(1); opacity: 1; }
`,h=(0,s.keyframes)`
  0%, 100% { height: 6px; }
  50%       { height: 22px; }
`,x=(0,s.keyframes)`
  0%   { box-shadow: 0 0 0px rgba(46, 160, 67, 0); border-color: #2ea043; }
  40%  { box-shadow: 0 0 20px rgba(255, 215, 0, 0.35), 0 0 40px rgba(46, 160, 67, 0.25); border-color: #ffd700; }
  100% { box-shadow: 0 0 8px rgba(46, 160, 67, 0.2); border-color: #2ea043; }
`,b=(0,s.keyframes)`
  0%, 100% { filter: drop-shadow(0 0 0px rgba(255, 215, 0, 0)); }
  50%       { filter: drop-shadow(0 0 24px rgba(255, 215, 0, 0.7)) drop-shadow(0 0 48px rgba(255, 200, 0, 0.4)); }
`,y=(0,s.keyframes)`
  0%   { transform: scale(1); background: rgba(88, 166, 255, 0.15); }
  50%  { transform: scale(1.15); background: rgba(88, 166, 255, 0.4); }
  100% { transform: scale(1); background: rgba(88, 166, 255, 0.15); }
`,w=(0,s.keyframes)`
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
  animation: ${g} 0.3s ease;
`,j=i().header`
  text-align: center;
  margin-bottom: ${l.w4.spacing.xl};
`,z=i().h1`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  letter-spacing: -0.5px;
  margin-bottom: ${l.w4.spacing.xs};
`,S=i().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
`,M=i().div`
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
`,A=i().div`
  height: 12px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  overflow: visible;
  position: relative;
`,R=i().div`
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
  animation: ${({flashing:e})=>e?y:"none"} 0.5s ease 3;
`,B=i().div`
  height: 100%;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`,_=i().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  border-radius: 999px;
  background: linear-gradient(90deg, #58a6ff, #79c0ff, #a5d6ff);
  background-size: 200% auto;
  animation: ${v} 2s linear infinite;
  transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`,E=i().div`
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
`,I=i().div`
  background: ${({completed:e})=>e?"#0e2a1a":l.w4.colors.surface};
  border: 2px solid ${({completed:e,recording:o})=>e?"#2ea043":o?"#f85149":l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  transition: border-color 0.2s ease, background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${({justCompleted:e,completed:o})=>e?`${f} 0.35s ease, ${x} 1.4s ease 0.1s`:o?"none":`${g} 0.35s ease`};
  cursor: default;
  position: relative;

  &:hover {
    transform: ${({completed:e})=>e?"none":"translateY(-2px)"};
    box-shadow: ${({completed:e,recording:o})=>e?"0 4px 16px rgba(46, 160, 67, 0.15)":o?"0 8px 24px rgba(248, 81, 73, 0.25)":"0 8px 24px rgba(88, 166, 255, 0.15)"};
  }

  &:hover .record-btn {
    background: ${l.w4.colors.accentHover};
    transform: translateY(-1px);
  }

  &:active .record-btn {
    transform: scale(0.97) translateY(0);
  }
`,P=i().div`
  font-size: 52px;
  line-height: 1;
  user-select: none;
`,F=i().div`
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
`,D=i().span`
  display: inline-block;
  width: 4px;
  height: 6px;
  border-radius: 2px;
  background: #f85149;
  animation: ${h} 0.7s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
`;function H(){return(0,t.jsx)(O,{children:[0,.1,.2,.15,.05,.25,.1].map((e,o)=>(0,t.jsx)(D,{delay:e},o))})}let N=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: #f85149;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
`,G=i().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  min-height: 18px;
  text-align: center;
`,Y=i().button`
  display: inline-flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  padding: 8px 16px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.15s ease, transform 0.1s ease, opacity 0.15s ease;
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
`,V=i().span`
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
  animation: ${w} ${({delay:e})=>2+e}s ease-in ${({delay:e})=>(.15*e).toFixed(2)}s forwards;
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
  animation: ${g} 0.4s ease;
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
`;function eo(){let e=Array.from({length:50},(e,o)=>({key:o,left:100*Math.random(),delay:20*Math.random(),color:X[Math.floor(Math.random()*X.length)],size:8+Math.floor(10*Math.random())}));return(0,t.jsx)(t.Fragment,{children:e.map(e=>(0,t.jsx)(U,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.key))})}function ea({mission:e,state:o,lang:a,justCompleted:r,onRecord:n,onStop:i,onPlay:s,onComplete:l,permError:c}){let p="pt"===a?e.pt:e.en;return(0,t.jsxs)(I,{completed:o.completed,recording:o.recording,justCompleted:r,children:[(0,t.jsx)(P,{children:e.emoji}),(0,t.jsx)(F,{children:p}),o.completed?(0,t.jsxs)(q,{children:[(0,t.jsx)(V,{children:"⭐"})," ",d("complete",a)]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(L,{children:[o.recording?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(H,{}),(0,t.jsxs)(N,{children:[10-o.timerSecs,"s"]}),(0,t.jsxs)(Y,{variant:"danger",onClick:i,children:["⏹ ",d("stop",a)]})]}):(0,t.jsxs)(Y,{variant:"primary",className:"record-btn",onClick:n,children:["\uD83C\uDF99 ",d("record",a)]}),o.audioUrl&&!o.recording&&(0,t.jsxs)(Y,{variant:"ghost",onClick:s,children:["▶ ",d("play",a)]})]}),(0,t.jsx)(G,{children:o.recording?d("recording",a):o.audioUrl?"":d("tapRecord",a)}),c&&(0,t.jsx)(W,{children:c}),o.audioUrl&&!o.recording&&(0,t.jsxs)(Y,{variant:"success",onClick:l,children:["✅ ",d("markDone",a)]})]})]})}let et=[25,50,75];function er({lang:e,onBack:o}){let[a,n]=(0,r.useState)(()=>{let e=u();for(let o of function(){try{let e=localStorage.getItem(m);if(e)return new Set(JSON.parse(e))}catch{}return new Set}())e[o]&&(e[o]={...e[o],completed:!0});return e}),[i,s]=(0,r.useState)({}),[l,c]=(0,r.useState)(new Set),[g,f]=(0,r.useState)(null),h=(0,r.useRef)(0),x=(0,r.useRef)(null),b=(0,r.useRef)([]),y=(0,r.useRef)(null),w=(0,r.useRef)(null),v=Object.values(a).filter(e=>e.completed).length,$=v===p.length,I=Math.round(v/p.length*100);(0,r.useEffect)(()=>{let e=h.current;for(let o of et)if(e<o&&I>=o){f(o),setTimeout(()=>f(null),1800);break}h.current=I},[I]),(0,r.useEffect)(()=>{var e=new Set(Object.entries(a).filter(([,e])=>e.completed).map(([e])=>e));try{localStorage.setItem(m,JSON.stringify([...e]))}catch{}},[a]);let P=(0,r.useCallback)((e,o)=>{n(a=>({...a,[e]:{...a[e],...o}}))},[]),F=(0,r.useCallback)(()=>{null!==y.current&&(clearInterval(y.current),y.current=null)},[]),O=(0,r.useCallback)(e=>{F(),x.current&&"inactive"!==x.current.state&&x.current.stop(),P(e,{recording:!1,timerSecs:0}),w.current=null},[F,P]),D=(0,r.useCallback)(async o=>{let a;w.current&&w.current!==o&&O(w.current),s(e=>({...e,[o]:""}));try{a=await navigator.mediaDevices.getUserMedia({audio:!0})}catch(t){let a=t instanceof DOMException&&"NotAllowedError"===t.name?d("permDenied",e):d("permError",e);s(e=>({...e,[o]:a}));return}b.current=[];let t=new MediaRecorder(a);x.current=t,w.current=o,t.ondataavailable=e=>{e.data.size>0&&b.current.push(e.data)},t.onstop=()=>{let e=new Blob(b.current,{type:"audio/webm"});P(o,{audioUrl:URL.createObjectURL(e)}),a.getTracks().forEach(e=>e.stop())},t.start(),P(o,{recording:!0,timerSecs:0});let r=0;y.current=setInterval(()=>{P(o,{timerSecs:r+=1}),r>=10&&O(o)},1e3)},[e,O,P]),H=(0,r.useCallback)(e=>{O(e)},[O]),N=(0,r.useCallback)(e=>{let o=a[e]?.audioUrl;o&&new Audio(o).play().catch(()=>{})},[a]),G=(0,r.useCallback)(e=>{P(e,{completed:!0}),c(o=>new Set([...o,e])),setTimeout(()=>{c(o=>{let a=new Set(o);return a.delete(e),a})},1600)},[P]),q=(0,r.useCallback)(()=>{Object.values(a).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)}),F(),x.current&&"inactive"!==x.current.state&&x.current.stop(),w.current=null,n(u()),s({}),c(new Set),f(null),h.current=0,localStorage.removeItem(m)},[a,F]);return((0,r.useEffect)(()=>()=>{F(),x.current&&"inactive"!==x.current.state&&x.current.stop(),Object.values(a).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)})},[]),$)?(0,t.jsxs)(k,{children:[(0,t.jsx)(eo,{}),(0,t.jsxs)(K,{children:[(0,t.jsx)(ee,{children:"\uD83C\uDFC6"}),(0,t.jsx)(Q,{children:d("celebrate",e)}),(0,t.jsx)(Z,{children:d("celebrateSub",e)}),(0,t.jsx)(L,{children:(0,t.jsxs)(Y,{variant:"primary",onClick:q,children:["\uD83D\uDD04 ",d("celebrateReset",e)]})})]})]}):(0,t.jsxs)(k,{children:[(0,t.jsxs)(j,{children:[(0,t.jsxs)(z,{children:["\uD83C\uDF99 ",d("title",e)]}),(0,t.jsx)(S,{children:d("subtitle",e)})]}),(0,t.jsxs)(M,{children:[(0,t.jsxs)(T,{children:[(0,t.jsx)("span",{children:d("progress",e)}),(0,t.jsxs)(C,{children:[v," / ",p.length]})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(B,{children:(0,t.jsx)(_,{pct:I})}),et.map(e=>(0,t.jsx)(R,{position:e,reached:I>=e,flashing:g===e},e))]})]}),(0,t.jsx)(E,{children:p.map(o=>(0,t.jsx)(ea,{mission:o,state:a[o.id],lang:e,justCompleted:l.has(o.id),onRecord:()=>D(o.id),onStop:()=>H(o.id),onPlay:()=>N(o.id),onComplete:()=>G(o.id),permError:i[o.id]??null},o.id))}),(0,t.jsx)(J,{children:(0,t.jsxs)(Y,{variant:"ghost",onClick:q,children:["\uD83D\uDD04 ",d("reset",e)]})})]})}},9367(e,o,a){a.d(o,{O:()=>ex});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(5782);let d={title:{pt:"Encontra o Par!",en:"Spot It!"},subtitle:{pt:"Encontra o s\xedmbolo igual nas duas cartas",en:"Find the matching symbol on both cards"},easy:{pt:"F\xe1cil",en:"Easy"},medium:{pt:"M\xe9dio",en:"Medium"},hard:{pt:"Dif\xedcil",en:"Hard"},easyDesc:{pt:"4 s\xedmbolos por carta",en:"4 symbols per card"},mediumDesc:{pt:"6 s\xedmbolos por carta",en:"6 symbols per card"},hardDesc:{pt:"8 s\xedmbolos por carta",en:"8 symbols per card"},score:{pt:"Pontos",en:"Score"},round:{pt:"Ronda",en:"Round"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incr\xedvel!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"R\xe1pido!",en:"Fast!"},oops:{pt:"Ups!",en:"Oops!"},gameOver:{pt:"Fim de Jogo!",en:"Game Over!"},finalScore:{pt:"Pontua\xe7\xe3o final",en:"Final score"},rounds:{pt:"rondas",en:"rounds"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestScore:{pt:"Melhor",en:"Best"},tapMatch:{pt:"Toca no s\xedmbolo igual!",en:"Tap the matching symbol!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espa\xe7o",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"C\xe3es, gatos, le\xf5es e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguet\xf5es e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Advers\xe1rio",en:"Opponent"},youScored:{pt:"Tu pontuaste!",en:"You scored!"},theyScored:{pt:"O advers\xe1rio pontuou!",en:"Opponent scored!"},youWin:{pt:"\uD83C\uDF89 Ganhaste!",en:"\uD83C\uDF89 You win!"},youLose:{pt:"\uD83D\uDE05 Perdeste!",en:"\uD83D\uDE05 You lost!"},tied:{pt:"\uD83E\uDD1D Empate!",en:"\uD83E\uDD1D Tied!"},opponentLeft:{pt:"O advers\xe1rio saiu.",en:"Opponent left."},rematch:{pt:"Revanche",en:"Rematch"},waiting:{pt:"\xc0 espera…",en:"Waiting…"}};function p(e,o){return d[e]["pt"===o?"pt":"en"]}let m=[{id:"animals",emoji:"\uD83E\uDD81",color:"#f59e0b",preview:["\uD83D\uDC36","\uD83D\uDC31","\uD83E\uDD81","\uD83D\uDC3C","\uD83E\uDD8B"],symbols:["\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC2D","\uD83D\uDC39","\uD83D\uDC30","\uD83E\uDD8A","\uD83D\uDC3B","\uD83D\uDC3C","\uD83D\uDC28","\uD83D\uDC2F","\uD83E\uDD81","\uD83D\uDC2E","\uD83D\uDC37","\uD83D\uDC38","\uD83D\uDC35","\uD83D\uDC14","\uD83E\uDD84","\uD83D\uDC1D","\uD83D\uDC1B","\uD83E\uDD8B","\uD83D\uDC0C","\uD83D\uDC1E","\uD83D\uDC22","\uD83D\uDC19","\uD83E\uDD80","\uD83D\uDC20","\uD83D\uDC2C","\uD83E\uDD88","\uD83D\uDC33","\uD83D\uDC18","\uD83E\uDD92","\uD83E\uDD98","\uD83D\uDC3F️","\uD83E\uDD9C","\uD83E\uDDA9","\uD83D\uDC27","\uD83E\uDD94","\uD83D\uDC2B","\uD83E\uDD99","\uD83D\uDC0A","\uD83E\uDD95","\uD83D\uDC0B","\uD83E\uDD91","\uD83D\uDC04","\uD83D\uDC0F","\uD83E\uDD8C","\uD83D\uDC08","\uD83D\uDC15","\uD83E\uDD89","\uD83D\uDC13","\uD83E\uDDA2","\uD83D\uDC07","\uD83E\uDD8E","\uD83D\uDC05","\uD83D\uDC06","\uD83E\uDDA7","\uD83E\uDDA6","\uD83D\uDC11"]},{id:"food",emoji:"\uD83C\uDF55",color:"#ef4444",preview:["\uD83C\uDF55","\uD83C\uDF66","\uD83E\uDDC1","\uD83C\uDF53","\uD83C\uDF69"],symbols:["\uD83C\uDF4E","\uD83C\uDF4C","\uD83C\uDF53","\uD83C\uDF49","\uD83C\uDF55","\uD83E\uDDC1","\uD83C\uDF69","\uD83C\uDF6A","\uD83C\uDF2E","\uD83C\uDF66","\uD83C\uDF82","\uD83C\uDF6B","\uD83C\uDF6C","\uD83C\uDF6D","\uD83C\uDF7F","\uD83E\uDD50","\uD83E\uDD68","\uD83E\uDD6F","\uD83E\uDD5E","\uD83E\uDDC7","\uD83C\uDF54","\uD83C\uDF2D","\uD83C\uDF5F","\uD83E\uDD6A","\uD83C\uDF2F","\uD83E\uDD57","\uD83C\uDF5D","\uD83C\uDF5C","\uD83C\uDF63","\uD83C\uDF71","\uD83E\uDD5F","\uD83C\uDF61","\uD83C\uDF67","\uD83C\uDF68","\uD83E\uDD67","\uD83C\uDF70","\uD83E\uDDC0","\uD83E\uDD5A","\uD83E\uDD51","\uD83E\uDED0","\uD83C\uDF47","\uD83C\uDF4A","\uD83C\uDF4B","\uD83C\uDF51","\uD83C\uDF52","\uD83E\uDD5D","\uD83C\uDF4D","\uD83E\uDD65","\uD83E\uDD55","\uD83C\uDF3D","\uD83E\uDD52","\uD83C\uDF46","\uD83E\uDED1","\uD83E\uDDC5","\uD83E\uDD5C","\uD83C\uDF30","☕","\uD83E\uDDC3"]},{id:"space",emoji:"\uD83D\uDE80",color:"#8b5cf6",preview:["\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19"],symbols:["\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19","☀️","\uD83E\uDE90","\uD83C\uDF1F","\uD83D\uDCAB","✨","\uD83C\uDF20","\uD83D\uDD2D","\uD83D\uDC7D","\uD83E\uDD16","\uD83D\uDC7E","\uD83D\uDEF0️","\uD83C\uDF0C","\uD83D\uDC8E","\uD83D\uDD2E","⚡","\uD83C\uDF08","☄️","\uD83E\uDDF2","\uD83D\uDD2C","\uD83E\uDDEA","⏰","\uD83D\uDDDD️","\uD83E\uDDED","\uD83C\uDFAF","\uD83D\uDD14","\uD83C\uDFC6","\uD83C\uDFAA","\uD83C\uDFA0","\uD83C\uDFA1","\uD83C\uDFA2","\uD83C\uDFAE","\uD83D\uDD79️","\uD83C\uDFB2","♟️","\uD83E\uDDE9","\uD83C\uDFA8","\uD83D\uDD8C️","\uD83C\uDFB8","\uD83E\uDD41","\uD83C\uDFBA","\uD83C\uDFB9","\uD83C\uDFA4","\uD83C\uDFA7","\uD83D\uDCE1","\uD83D\uDCA1","\uD83D\uDD0B","\uD83E\uDDEC","\uD83C\uDF0B","\uD83D\uDDFB","❄️","\uD83D\uDD25","\uD83D\uDCA7","\uD83C\uDF2A️"]},{id:"mix",emoji:"\uD83C\uDFAA",color:"#3fb950",preview:["\uD83D\uDC36","\uD83C\uDF55","\uD83D\uDE80","⭐","\uD83C\uDFB8"],symbols:["\uD83D\uDC36","\uD83D\uDC31","\uD83E\uDD81","\uD83D\uDC3C","\uD83E\uDD8B","\uD83D\uDC22","\uD83D\uDC19","\uD83D\uDC2C","\uD83C\uDF55","\uD83C\uDF66","\uD83E\uDDC1","\uD83C\uDF53","\uD83C\uDF69","\uD83C\uDF49","\uD83C\uDF82","\uD83C\uDF4C","\uD83D\uDE80","\uD83C\uDF0D","⭐","\uD83D\uDEF8","\uD83C\uDF19","☀️","\uD83C\uDF08","\uD83D\uDC8E","\uD83C\uDF88","\uD83C\uDFB8","⚽","\uD83C\uDFAF","\uD83D\uDD14","\uD83C\uDF81","\uD83C\uDFAE","\uD83C\uDFB2","❤️","\uD83D\uDD25","\uD83D\uDCA7","\uD83C\uDF38","\uD83C\uDF3B","\uD83E\uDDF2","⚡","\uD83D\uDD2E","\uD83C\uDFA8","\uD83C\uDFA4","\uD83E\uDD41","\uD83E\uDDE9","\uD83C\uDFC6","\uD83C\uDFAA","\uD83C\uDFA1","\uD83C\uDFA2","\uD83E\uDD84","\uD83D\uDC18","\uD83D\uDC33","\uD83E\uDD8A","\uD83D\uDC38","\uD83D\uDC35","\uD83D\uDC1D","\uD83D\uDC1E","\uD83C\uDF4E","\uD83C\uDF2E"]}];function u(e){let o=[...e];for(let e=o.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[o[e],o[a]]=[o[a],o[e]]}return o}let g={easy:{order:3,totalRounds:10,timePerRound:15},medium:{order:5,totalRounds:12,timePerRound:12},hard:{order:7,totalRounds:15,timePerRound:10}},f=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=(0,s.keyframes)`
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
`,y=(0,s.keyframes)`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,w=(0,s.keyframes)`
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
`,z=(0,s.keyframes)`
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
`,M=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: ${l.w4.spacing.xl};
  animation: ${f} 0.4s ease;
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
`,A=i().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,R=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 32px;
  background: linear-gradient(168deg, ${({accent:e})=>e}15 0%, ${l.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}40;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
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
`,_=i().span`
  font-size: 18px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,E=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,I=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px ${l.w4.spacing.md} ${l.w4.spacing.lg};
  gap: 16px;
  min-height: 0;
  width: 100%;
`,P=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
`,F=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({color:e})=>e??l.w4.colors.border};
  border-radius: 24px;
  font-size: 15px;
  font-weight: 700;
  color: ${({color:e})=>e??l.w4.colors.mainText};
  animation: ${({urgent:e})=>e?k:"none"} 0.5s ease-in-out infinite;
`,L=i().p`
  font-size: 15px;
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
`,D=i().div`
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
  animation: ${h} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: border-color 0.25s, box-shadow 0.25s;
  ${({highlighted:e})=>e?`animation: ${z.toString()} 2s ease-in-out infinite;`:"box-shadow: 0 4px 20px rgba(0,0,0,0.3);"}

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, transparent 40%, transparent 60%, rgba(79, 192, 255, 0.15) 100%);
    pointer-events: none;
    opacity: ${({highlighted:e})=>e?1:.4};
    transition: opacity 0.3s;
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    width: 260px;
    height: 260px;
    padding: 20px;
    gap: 4px;
  }
`,H=i().button`
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
  transition: all 0.15s ease;
  transform: rotate(${({rotDeg:e})=>e}deg);
  animation: ${h} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  position: relative;

  ${({correct:e})=>e?`
    border-color: #3fb950;
    background: rgba(63, 185, 80, 0.15);
    animation: ${y.toString()} 0.4s ease;
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
  animation: ${f} 0.2s ease;
  pointer-events: none;
`,G=i().span`
  font-size: 80px;
  animation: ${x} 0.6s ease;
`,Y=i().span`
  font-size: 32px;
  font-weight: 800;
  color: ${({color:e})=>e};
  margin-top: 8px;
  animation: ${h} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards;
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
`,V=i().span`
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
  animation: ${w} 0.6s ease ${({delay:e})=>e}s both;
`,J=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: ${l.w4.spacing.xl};
  animation: ${f} 0.5s ease;
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
  animation: ${y} 1s ease-in-out infinite;
`,eo=i().button`
  padding: 16px 40px;
  background: ${({accent:e})=>e};
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 52px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px ${({accent:e})=>e}40;
  }

  &:active { transform: translateY(-1px); }
`,ea=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 20px;
  font-size: 14px;
  color: ${l.w4.colors.mainTextMuted};
`,et=i().div`
  font-size: 24px;
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.3;
  flex-shrink: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    font-size: 18px;
  }
`,er=i().span`
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
  transition: background 0.2s, color 0.2s;
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
  transition: all 0.25s ease;
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
  font-size: 17px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,em=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,eu=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],eg=["great","amazing","perfect","super","wow","fast"],ef="atlantis-spotit-best";function eh(e){try{return JSON.parse(localStorage.getItem(ef)??"{}")[e]??0}catch{return 0}}function ex({lang:e,canOnline:o}){let[a,n]=(0,r.useState)("theme"),[i,s]=(0,r.useState)("solo"),[d,f]=(0,r.useState)("animals"),[h,x]=(0,r.useState)("easy"),[b,y]=(0,r.useState)(null),[w,v]=(0,r.useState)(-1),[$,k]=(0,r.useState)(0),[j,z]=(0,r.useState)(0),[eb,ey]=(0,r.useState)(0),[ew,ev]=(0,r.useState)({}),[e$,ek]=(0,r.useState)(0),[ej,ez]=(0,r.useState)(""),[eS,eM]=(0,r.useState)(null),[eT,eC]=(0,r.useState)(null),[eA,eR]=(0,r.useState)(!1),[eB,e_]=(0,r.useState)(!1),[eE,eI]=(0,r.useState)(new Map),[eP,eF]=(0,r.useState)(new Map),[eL,eO]=(0,r.useState)([[],[]]),[eD,eH]=(0,r.useState)(!1),[eN,eG]=(0,r.useState)("none"),eY=(0,r.useRef)(null),eq=(0,r.useRef)([]),eV=(0,r.useRef)(0),eW=(0,r.useRef)(!1),[eJ]=(0,r.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),eX=(0,r.useCallback)(o=>{switch(o.type){case"guest-joined":eK.current.addPlayer({id:o.playerId,name:o.name,isHost:!1}),eK.current.sendEvent({type:"host-ack",name:eJ,playerId:eK.current.room?.playerId??"",players:eK.current.room?.players??[]});break;case"host-ack":eK.current.setConnected(o.name),o.players&&eK.current.setPlayers([...o.players,{id:eK.current.room?.playerId??"",name:eJ,isHost:!1}]);break;case"player-list":eK.current.setPlayers(o.players);break;case"game-state":{let a=o.payload;if("guest-spot"===a.action){if(eW.current)return;eW.current=!0;let o=100+Math.ceil(2*a.timer),t=a.playerId;ey(e=>e+o),ev(e=>({...e,[t]:(e[t]??0)+o}));let r=`${a.cardIndex}-${a.symbolIndex}`;eC(r),eR(!1),ez(p("theyScored",e)),n("correct"),eK.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:t,winnerName:"",points:o,correctId:r}}),setTimeout(()=>{e0.current()},900)}else if("start-round"===a.action){let e=a.pair,o=a.round,t=a.matchSymbol,r=a.totalRounds,i=a.timePerRound;y(e),v(t),k(o),eV.current=o-1,ek(i),eM(null),eC(null),ez(""),eR(!1),eW.current=!1,n("playing"),eZ.current={totalRounds:r,timePerRound:i}}else if("round-result"===a.action){eW.current=!0;let o=a.winnerId,t=o===eK.current.room?.playerId,r=a.points;ev(e=>({...e,[o]:(e[o]??0)+r})),t?(z(e=>e+r),ez(p("youScored",e))):(ey(e=>e+r),ez(p("theyScored",e))),eC(a.correctId),eR(t),n("correct")}else"game-over-scores"===a.action&&(z(a.myScore??j),ey(a.opponentScore??eb),n("gameover"));break}case"game-over":n("gameover");break;case"rematch-request":eG("received");break;case"rematch-accepted":eG("none"),z(0),ey(0),n("menu");break;case"player-left":eH(!0),n("gameover")}},[eJ,e]),eU=(0,c.Ky)({gameId:"spotit",playerName:eJ,onEvent:eX}),eK=(0,r.useRef)(eU);eK.current=eU;let eQ=(0,c.zj)({gameId:"spotit",enabled:"online"===i}),eZ=(0,r.useRef)({totalRounds:10,timePerRound:15}),e0=(0,r.useRef)(()=>{}),e1=g[h],e4=(0,r.useMemo)(()=>m.find(e=>e.id===d)?.symbols??m[3].symbols,[d]),e2=(0,r.useCallback)(e=>{let o=new Map,a=new Map,t=[u(e[0].symbols),u(e[1].symbols)];e.forEach((e,r)=>{t[r].forEach((e,t)=>{let n=`${r}-${e}`;o.set(n,Math.floor(40*Math.random()-20)),a.set(n,.05*t)})}),eI(o),eF(a),eO(t)},[]),e5=(0,r.useCallback)(e=>{x(e);let o=g[e];eZ.current={totalRounds:o.totalRounds,timePerRound:o.timePerRound};let a=u(function(e){let o=[];o.push({symbols:Array.from({length:e+1},(e,o)=>o)});for(let a=0;a<e;a++){let t=[0];for(let o=0;o<e;o++)t.push(e+1+a*e+o);o.push({symbols:t})}for(let a=0;a<e;a++)for(let t=0;t<e;t++){let r=[a+1];for(let o=0;o<e;o++)r.push(e+1+o*e+(a*o+t)%e);o.push({symbols:r})}return o}(o.order));eq.current=a,eV.current=0,eW.current=!1,k(1),z(0),ey(0),ev({}),ez(""),eM(null),eC(null),e_(!1);let t=[a[0],a[1]];y(t);let r=t[0].symbols.find(e=>t[1].symbols.includes(e))??-1;v(r),ek(o.timePerRound),e2(t),n("playing"),"online"===i&&eK.current.room?.role==="host"&&eK.current.sendEvent({type:"game-state",payload:{action:"start-round",pair:t,round:1,matchSymbol:r,totalRounds:o.totalRounds,timePerRound:o.timePerRound}})},[e2,i]);(0,r.useEffect)(()=>{if("playing"!==a){eY.current&&clearInterval(eY.current);return}return eY.current=setInterval(()=>{ek(e=>e<=1?(eY.current&&clearInterval(eY.current),n("gameover"),0):e-1)},1e3),()=>{eY.current&&clearInterval(eY.current)}},[a]),(0,r.useEffect)(()=>{if("gameover"===a&&j>eh(h)){try{let e=JSON.parse(localStorage.getItem(ef)??"{}");e[h]=j,localStorage.setItem(ef,JSON.stringify(e))}catch{}e_(!0)}},[a,h,j]);let e3=(0,r.useCallback)(()=>{let e=eV.current+1;eV.current=e,eW.current=!1;let o=eq.current,a=g[h];if(e>=a.totalRounds||2*e+1>=o.length){n("gameover"),"online"===i&&eK.current.sendEvent({type:"game-over",winner:"draw"});return}let t=[o[2*e],o[2*e+1]];y(t);let r=t[0].symbols.find(e=>t[1].symbols.includes(e))??-1;v(r),k(e+1),ek(a.timePerRound),eM(null),eC(null),ez(""),eR(!1),e2(t),n("playing"),"online"===i&&eK.current.room?.role==="host"&&eK.current.sendEvent({type:"game-state",payload:{action:"start-round",pair:t,round:e+1,matchSymbol:r,totalRounds:a.totalRounds,timePerRound:a.timePerRound}})},[h,e2,i]);e0.current=e3;let e8=(0,r.useCallback)((o,t)=>{if("playing"===a){if("online"===i){if(o!==w){eM(`${t}-${o}`),ez(p("oops",e)),z(e=>Math.max(0,e-20)),setTimeout(()=>{eM(null),ez(p("tapMatch",e))},500);return}if(eW.current)return;if("host"===(eK.current.room?.role??"guest")){eW.current=!0;let a=100+Math.ceil(2*e$);z(e=>e+a),eC(`${t}-${o}`),eR(!0),ez(p(eg[Math.floor(Math.random()*eg.length)],e)),n("correct");let r=eK.current.room?.playerId??"";ev(e=>({...e,[r]:(e[r]??0)+a})),eK.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:r,winnerName:eK.current.room?.playerName??"",points:a,correctId:`${t}-${o}`}}),setTimeout(()=>{e3()},900)}else eK.current.sendEvent({type:"game-state",payload:{action:"guest-spot",symbolIndex:o,cardIndex:t,timer:e$,playerId:eK.current.room?.playerId}});return}if(o===w){let a=100+Math.ceil(2*e$);z(e=>e+a),eC(`${t}-${o}`),eR(!0),ez(p(eg[Math.floor(Math.random()*eg.length)],e)),n("correct"),setTimeout(()=>{e3()},900)}else eM(`${t}-${o}`),ez(p("oops",e)),z(e=>Math.max(0,e-20)),setTimeout(()=>{eM(null),ez(p("tapMatch",e))},500)}},[a,w,e$,e,e3,i]),e6=(0,r.useMemo)(()=>"easy"===h?80:"medium"===h?64:52,[h]),e9=eh(h);if("theme"===a)return(0,t.jsx)(S,{children:(0,t.jsxs)(M,{children:[(0,t.jsxs)(T,{children:["\uD83C\uDCCF ",p("title",e)]}),(0,t.jsx)(C,{children:p("pickTheme",e)}),(0,t.jsx)(es,{children:m.map(o=>(0,t.jsxs)(el,{accent:o.color,onClick:()=>{f(o.id),n("menu")},children:[(0,t.jsx)(ec,{children:o.emoji}),(0,t.jsx)(ep,{children:p(o.id,e)}),(0,t.jsx)(ed,{children:o.preview.map((e,o)=>(0,t.jsx)("span",{children:e},o))}),(0,t.jsx)(em,{children:p(`${o.id}Desc`,e)})]},o.id))})]})});if("menu"===a){let a=e=>{"online"===i?(x(e),n("lobby")):e5(e)};return(0,t.jsx)(S,{children:(0,t.jsxs)(M,{children:[(0,t.jsxs)(T,{children:["\uD83C\uDCCF ",p("title",e)]}),(0,t.jsx)(C,{children:p("subtitle",e)}),o&&(0,t.jsxs)(en,{children:[(0,t.jsxs)(ei,{active:"solo"===i,onClick:()=>s("solo"),children:["\uD83C\uDFAF ",p("solo",e)]}),(0,t.jsxs)(ei,{active:"online"===i,onClick:()=>s("online"),children:["\uD83C\uDF10 ",p("online",e)]})]}),(0,t.jsxs)(A,{children:[(0,t.jsxs)(R,{accent:"#3fb950",onClick:()=>a("easy"),children:[(0,t.jsx)(B,{children:"\uD83C\uDF1F"}),(0,t.jsx)(_,{children:p("easy",e)}),(0,t.jsx)(E,{children:p("easyDesc",e)})]}),(0,t.jsxs)(R,{accent:"#f59e0b",onClick:()=>a("medium"),children:[(0,t.jsx)(B,{children:"\uD83D\uDD25"}),(0,t.jsx)(_,{children:p("medium",e)}),(0,t.jsx)(E,{children:p("mediumDesc",e)})]}),(0,t.jsxs)(R,{accent:"#f97583",onClick:()=>a("hard"),children:[(0,t.jsx)(B,{children:"\uD83D\uDCAA"}),(0,t.jsx)(_,{children:p("hard",e)}),(0,t.jsx)(E,{children:p("hardDesc",e)})]})]}),e9>0&&"solo"===i&&(0,t.jsxs)(ea,{children:["\uD83C\uDFC6 ",p("bestScore",e),": ",e9]})]})})}if("lobby"===a)return(0,t.jsx)(S,{children:(0,t.jsxs)(M,{children:[(0,t.jsxs)(T,{children:["\uD83C\uDCCF ",p("title",e)]}),eU.room?.connected?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{children:"host"===eU.room.role?"pt"===e?`${eU.room.players.length} jogadores ligados. Escolhe a dificuldade para come\xe7ar.`:`${eU.room.players.length} players connected. Choose difficulty to start.`:"pt"===e?`Ligado! ${eU.room.players.length} jogadores na sala. \xc0 espera que o anfitri\xe3o comece…`:`Connected! ${eU.room.players.length} players in room. Waiting for host to start…`}),(0,t.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:eU.room.players.map(e=>(0,t.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===eU.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===eU.room.role&&(0,t.jsxs)(A,{children:[(0,t.jsxs)(R,{accent:"#3fb950",onClick:()=>e5("easy"),children:[(0,t.jsx)(B,{children:"\uD83C\uDF1F"}),(0,t.jsx)(_,{children:p("easy",e)})]}),(0,t.jsxs)(R,{accent:"#f59e0b",onClick:()=>e5("medium"),children:[(0,t.jsx)(B,{children:"\uD83D\uDD25"}),(0,t.jsx)(_,{children:p("medium",e)})]}),(0,t.jsxs)(R,{accent:"#f97583",onClick:()=>e5("hard"),children:[(0,t.jsx)(B,{children:"\uD83D\uDCAA"}),(0,t.jsx)(_,{children:p("hard",e)})]})]})]}):(0,t.jsx)(c.XB,{lang:e,room:eU.room,error:eU.error,availableRooms:eQ.rooms,onCreateRoom:()=>{let{code:e,roomName:o}=eU.createRoom();eQ.publishRoom({code:e,roomName:o,hostName:eJ,playerCount:1})},onJoinRoom:e=>eU.joinRoom(e),onLeaveRoom:()=>{eQ.unpublishRoom(),eU.leaveRoom(),n("menu")}})]})});if("gameover"===a){let o="online"===i,a=j>eb,r=j===eb,c=eD?p("opponentLeft",e):r?p("tied",e):a?p("youWin",e):p("youLose",e),d=()=>{"received"===eN?(eG("none"),z(0),ey(0),n("menu"),eK.current.sendEvent({type:"rematch-accepted"})):(eG("sent"),eK.current.sendEvent({type:"rematch-request"}))};return(0,t.jsx)(S,{children:(0,t.jsxs)(J,{children:[(0,t.jsx)(U,{children:o?a?"\uD83C\uDF89":r?"\uD83E\uDD1D":"\uD83D\uDE05":"\uD83C\uDFC6"}),(0,t.jsx)(X,{children:o?c:p("gameOver",e)}),(0,t.jsxs)(K,{children:[o&&(eU.room?.players??[]).length>2?(0,t.jsx)(t.Fragment,{children:(eU.room?.players??[]).map(e=>({...e,pts:ew[e.id]??0})).sort((e,o)=>o.pts-e.pts).map((o,a)=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[(0,t.jsx)("span",{style:{fontSize:16,fontWeight:700,color:0===a?"#3fb950":l.w4.colors.mainTextMuted,minWidth:20},children:0===a?"\uD83E\uDD47":1===a?"\uD83E\uDD48":2===a?"\uD83E\uDD49":`${a+1}.`}),(0,t.jsxs)("span",{style:{color:o.id===eU.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText,fontWeight:600,flex:1},children:[o.name,o.id===eU.room?.playerId?` (${p("you",e)})`:""]}),(0,t.jsx)("span",{style:{fontSize:20,fontWeight:800,color:0===a?"#3fb950":l.w4.colors.mainText},children:o.pts})]},o.id))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Q,{children:o?p("you",e):p("finalScore",e)}),(0,t.jsx)(Z,{children:j}),o&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Q,{style:{marginTop:8},children:p("opponent",e)}),(0,t.jsx)(Z,{style:{color:"#f97583"},children:eb})]})]}),(0,t.jsxs)(Q,{children:[$," ",p("rounds",e)]})]}),!o&&eB&&(0,t.jsxs)(ee,{children:["\uD83C\uDF89 ",p("newRecord",e)]}),!o&&e9>0&&!eB&&(0,t.jsxs)(ea,{children:["\uD83C\uDFC6 ",p("bestScore",e),": ",e9]}),o&&!eD?"sent"===eN?(0,t.jsx)(eo,{accent:"#666",children:p("waiting",e)}):"received"===eN?(0,t.jsxs)(eo,{accent:"#3fb950",onClick:d,children:[p("rematch",e)," ✓"]}):(0,t.jsx)(eo,{accent:"#8b5cf6",onClick:d,children:p("rematch",e)}):(0,t.jsx)(eo,{accent:"#8b5cf6",onClick:()=>{o&&eK.current.leaveRoom(),s("solo"),n("theme")},children:p("playAgain",e)})]})})}let e7=e$<=3?"#f97583":e$<=6?"#f59e0b":l.w4.colors.accent;return(0,t.jsx)(S,{children:(0,t.jsxs)(I,{children:[(0,t.jsxs)(P,{children:[(0,t.jsxs)(F,{children:["⭐ ","online"===i?p("you",e):p("score",e),": ",j]}),"online"===i&&(0,t.jsxs)(F,{color:"#f97583",children:["\uD83D\uDC64 ",p("opponent",e),": ",eb]}),(0,t.jsxs)(F,{children:[p("round",e)," ",$,"/","online"===i?eZ.current.totalRounds:e1.totalRounds]}),(0,t.jsxs)(F,{color:e7,urgent:e$<=3,children:["⏱️ ",e$,"s"]})]}),(0,t.jsx)(L,{wrong:!!eS,children:ej||p("tapMatch",e)}),b&&(0,t.jsx)(O,{children:b.map((e,o)=>(0,t.jsxs)(t.Fragment,{children:[1===o&&(0,t.jsx)(et,{children:"VS"}),(0,t.jsxs)(D,{highlighted:0===o,children:[(0,t.jsx)(er,{children:0===o?"A":"B"}),eL[o].map(e=>{let a=`${o}-${e}`,r=eE.get(a)??0,n=eP.get(a)??0,i=eT===a,s=eS===a;return(0,t.jsxs)(H,{size:e6,rotDeg:r,correct:i,wrong:s,style:{animationDelay:`${n}s`},onClick:()=>e8(e,o),children:[e4[e%e4.length],i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W,{x:10,y:10,delay:0,children:"✨"}),(0,t.jsx)(W,{x:80,y:20,delay:.1,children:"✨"}),(0,t.jsx)(W,{x:20,y:80,delay:.15,children:"✨"}),(0,t.jsx)(W,{x:75,y:75,delay:.2,children:"✨"})]})]},a)}),eA&&0===o&&(0,t.jsxs)(q,{children:["+",100+Math.ceil(2*e$)]})]},`card-${o}-${$}`)]}))}),"correct"===a&&(0,t.jsxs)(N,{children:[(0,t.jsx)(G,{children:"\uD83C\uDF89"}),(0,t.jsx)(Y,{color:"#3fb950",children:ej}),eu.map((e,o)=>(0,t.jsx)(V,{left:10+15*o,delay:.08*o,color:e,children:["\uD83C\uDF8A","⭐","\uD83C\uDF1F","\uD83D\uDCAB","✨","\uD83C\uDF89"][o]},o))]})]})})}},2838(e,o,a){a.d(o,{z:()=>eb});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(5782);let d="ABCDEFGHIJLMNOPRSTUVZ",p="ABCDEFGHIJKLMNOPRSTUVWYZ",m=[0,60,90,120],u=[{id:"cities",icon:"\uD83C\uDFD9️",label:{pt:"Cidades",en:"Cities"}},{id:"countries",icon:"\uD83C\uDF0D",label:{pt:"Pa\xedses",en:"Countries"}},{id:"animals",icon:"\uD83D\uDC3E",label:{pt:"Animais",en:"Animals"}},{id:"fruits",icon:"\uD83C\uDF4E",label:{pt:"Frutas",en:"Fruits"}},{id:"movies",icon:"\uD83C\uDFAC",label:{pt:"Filmes",en:"Movies"}},{id:"tvshows",icon:"\uD83D\uDCFA",label:{pt:"S\xe9ries",en:"TV Shows"}},{id:"brands",icon:"\uD83C\uDFF7️",label:{pt:"Marcas",en:"Brands"}},{id:"sports",icon:"⚽",label:{pt:"Desportos",en:"Sports"}},{id:"musicians",icon:"\uD83C\uDFB5",label:{pt:"M\xfasicos",en:"Musicians"}},{id:"books",icon:"\uD83D\uDCDA",label:{pt:"Livros",en:"Books"}},{id:"names",icon:"\uD83E\uDDD1",label:{pt:"Nomes",en:"Names"}},{id:"foods",icon:"\uD83C\uDF7D️",label:{pt:"Comidas",en:"Foods"}},{id:"history",icon:"\uD83C\uDFDB️",label:{pt:"Hist\xf3ria",en:"History"}},{id:"jobs",icon:"\uD83D\uDCBC",label:{pt:"Profiss\xf5es",en:"Jobs"}},{id:"colors",icon:"\uD83C\uDFA8",label:{pt:"Cores",en:"Colors"}},{id:"flowers",icon:"\uD83C\uDF3A",label:{pt:"Flores",en:"Flowers"}}],g={cities:{A:{pt:["Aveiro","Almada","Amadora","Albufeira"],en:["Amsterdam","Athens","Atlanta","Auckland"]},B:{pt:["Braga","Beja","Bragan\xe7a","Barcelos"],en:["Berlin","Boston","Barcelona","Brussels"]},C:{pt:["Coimbra","Cascais","Covilh\xe3","Chaves"],en:["Chicago","Cairo","Cologne","Calgary"]},D:{pt:["Dourinho","Douro","\xc9vora (n\xe3o)"],en:["Dubai","Dublin","Denver","Damascus"]},E:{pt:["\xc9vora","Elvas","Espinho"],en:["Edinburgh","Essex","El Paso","Exeter"]},F:{pt:["Faro","Funchal","Figueira da Foz","Felgueiras"],en:["Florence","Frankfurt","Fukuoka","Fresno"]},G:{pt:["Guimar\xe3es","Guarda","Gondomar","Gr\xe2ndola"],en:["Geneva","Glasgow","Guangzhou","Guadalajara"]},H:{pt:["Horta","Hungria (n\xe3o)"],en:["Hamburg","Havana","Helsinki","Houston"]},I:{pt:["\xcdlhavo","Idanha-a-Nova"],en:["Istanbul","Indianapolis","Islamabad","Izmir"]},J:{pt:["Joane","Juromenha"],en:["Jakarta","Jerusalem","Johannesburg","Jacksonville"]},L:{pt:["Lisboa","Leiria","Loures","Lagos"],en:["London","Los Angeles","Lima","Lisbon"]},M:{pt:["Matosinhos","Montijo","Miranda do Douro","Moura"],en:["Madrid","Milan","Melbourne","Moscow"]},N:{pt:["Nazar\xe9","Nisa","Nordeste"],en:["New York","Naples","Nairobi","Nashville"]},O:{pt:["Odivelas","Ovar","\xd3bidos","Olh\xe3o"],en:["Oslo","Ottawa","Oxford","Orlando"]},P:{pt:["Porto","Portim\xe3o","Ponte de Lima","P\xf3voa de Varzim"],en:["Paris","Prague","Porto","Pretoria"]},R:{pt:["R\xe9gua","Rio Maior","Reguengos","Resende"],en:["Rome","Rio de Janeiro","Rotterdam","Rabat"]},S:{pt:["Set\xfabal","Sintra","Santar\xe9m","Sines"],en:["Sydney","Stockholm","Seoul","Seville"]},T:{pt:["Torres Vedras","Tomar","Tavira","Trofa"],en:["Tokyo","Toronto","Tehran","Tunis"]},V:{pt:["Viseu","Viana do Castelo","Vila Nova de Gaia","Valongo"],en:["Vienna","Vancouver","Venice","Vilnius"]}},countries:{A:{pt:["Alemanha","Angola","Argentina","Austr\xe1lia"],en:["Argentina","Australia","Austria","Angola"]},B:{pt:["Brasil","B\xe9lgica","Bulg\xe1ria","Bol\xedvia"],en:["Brazil","Belgium","Bulgaria","Bolivia"]},C:{pt:["China","Col\xf4mbia","Cuba","Chile"],en:["China","Colombia","Cuba","Chile"]},D:{pt:["Dinamarca","Djibuti"],en:["Denmark","Dominican Republic","Djibouti"]},E:{pt:["Espanha","Egipto","Eti\xf3pia","Equador"],en:["Egypt","Ethiopia","Ecuador","Estonia"]},F:{pt:["Fran\xe7a","Finl\xe2ndia","Filipinas","Fiji"],en:["France","Finland","Philippines","Fiji"]},G:{pt:["Gr\xe9cia","Guatemala","Gana","Guin\xe9"],en:["Greece","Guatemala","Ghana","Germany"]},H:{pt:["Hungria","Honduras","Haiti"],en:["Hungary","Honduras","Haiti","Holland"]},I:{pt:["It\xe1lia","\xcdndia","Irlanda","Isl\xe2ndia"],en:["Italy","India","Ireland","Iceland"]},J:{pt:["Jap\xe3o","Jord\xe2nia","Jamaica"],en:["Japan","Jordan","Jamaica"]},L:{pt:["L\xedbia","L\xedbano","Let\xf3nia","Lesoto"],en:["Libya","Lebanon","Latvia","Lesotho"]},M:{pt:["M\xe9xico","Marrocos","Mo\xe7ambique","Madagascar"],en:["Mexico","Morocco","Mozambique","Malaysia"]},N:{pt:["Noruega","Nepal","Nig\xe9ria","Nicar\xe1gua"],en:["Norway","Nepal","Nigeria","Nicaragua"]},O:{pt:["Om\xe3"],en:["Oman"]},P:{pt:["Portugal","Peru","Paquist\xe3o","Pol\xf3nia"],en:["Portugal","Peru","Pakistan","Poland"]},R:{pt:["Rom\xe9nia","R\xfassia","Ruanda"],en:["Romania","Russia","Rwanda"]},S:{pt:["Su\xe9cia","Su\xed\xe7a","S\xe9rvia","S\xedria"],en:["Sweden","Switzerland","Serbia","Spain"]},T:{pt:["Turquia","Tun\xedsia","Tanz\xe2nia","Tail\xe2ndia"],en:["Turkey","Tunisia","Tanzania","Thailand"]},V:{pt:["Venezuela","Vietname"],en:["Venezuela","Vietnam"]}},animals:{A:{pt:["Abelha","\xc1guia","Ant\xedlope","Aranha"],en:["Antelope","Alligator","Ape","Albatross"]},B:{pt:["Baleia","Borboleta","Burro","B\xfafalo"],en:["Bear","Buffalo","Butterfly","Baboon"]},C:{pt:["Cavalo","Coelho","Crocodilo","Camelo"],en:["Cat","Crocodile","Camel","Cobra"]},D:{pt:["Delfim","Drag\xe3o","Dromed\xe1rio"],en:["Dolphin","Dog","Donkey","Deer"]},E:{pt:["Elefante","Esquilo","Escorpi\xe3o"],en:["Elephant","Eagle","Eel","Elk"]},F:{pt:["Falc\xe3o","Flamingo","Formiga","Foca"],en:["Fox","Flamingo","Frog","Falcon"]},G:{pt:["Girafa","Gorila","Gato","Gavi\xe3o"],en:["Giraffe","Gorilla","Guppy","Gazelle"]},H:{pt:["Hipop\xf3tamo","Hiena"],en:["Hippo","Hyena","Hare","Hawk"]},I:{pt:["Iguana","\xcdbis"],en:["Iguana","Ibis","Impala"]},J:{pt:["Javali","Jaguar","Jerboa"],en:["Jaguar","Jellyfish","Jackal"]},L:{pt:["Le\xe3o","Lobo","Lagarto","Lince"],en:["Lion","Lizard","Leopard","Lynx"]},M:{pt:["Macaco","Morcego","Mocho","Morsa"],en:["Monkey","Moose","Mouse","Meerkat"]},N:{pt:["Narval","Nand\xfa"],en:["Narwhal","Newt","Nightingale"]},O:{pt:["Ouri\xe7o","Orangotango","Ovelha","Orca"],en:["Owl","Octopus","Otter","Orangutan"]},P:{pt:["Panda","Pinguim","Pato","Papagaio"],en:["Panda","Penguin","Parrot","Panther"]},R:{pt:["Rato","Rinoceronte","Raposa","Rouxinol"],en:["Rabbit","Rhinoceros","Raccoon","Robin"]},S:{pt:["Sapo","Serpente","Sardinha","Salamandra"],en:["Snake","Shark","Salmon","Squirrel"]},T:{pt:["Tigre","Tartaruga","Texugo","Tubar\xe3o"],en:["Tiger","Turtle","Toad","Toucan"]},V:{pt:["Vaca","Veado","Vespa"],en:["Vulture","Viper","Vole"]}},fruits:{A:{pt:["Abacate","Abacaxi","Amora","Ameixa"],en:["Apple","Avocado","Apricot","Acai"]},B:{pt:["Banana","Blueberry","Bergamota"],en:["Banana","Blueberry","Blackberry","Boysenberry"]},C:{pt:["Cereja","Coco","Carambola","Caqui"],en:["Cherry","Coconut","Clementine","Cranberry"]},D:{pt:["Damasco","Durian"],en:["Date","Dragonfruit","Durian"]},E:{pt:["Eirado","Escaramu\xe7a"],en:["Elderberry"]},F:{pt:["Figo","Framboesa","Feijoa"],en:["Fig","Feijoa"]},G:{pt:["Goiaba","Groselha","Granadilha"],en:["Grape","Guava","Grapefruit","Gooseberry"]},H:{pt:["Higo"],en:["Honeydew","Huckleberry"]},I:{pt:["Imb\xfa"],en:["Imbe"]},J:{pt:["Jaca","Jabuticaba"],en:["Jackfruit","Jujube"]},L:{pt:["Laranja","Lim\xe3o","Lima","Lichias"],en:["Lemon","Lime","Lychee","Lingonberry"]},M:{pt:["Ma\xe7\xe3","Manga","Mel\xe3o","Melancia"],en:["Mango","Melon","Mulberry","Mandarin"]},N:{pt:["Nectarina","N\xeaspera"],en:["Nectarine","Nance"]},O:{pt:["Oliveira"],en:["Orange","Olive"]},P:{pt:["P\xeara","P\xeassego","Papaia","Pitaia"],en:["Peach","Pear","Pineapple","Papaya"]},R:{pt:["Rom\xe3","Rambutan"],en:["Raspberry","Rambutan"]},S:{pt:["Saboticaba","Sapota"],en:["Strawberry","Star fruit","Soursop"]},T:{pt:["Tamarindo","Tomate","Tangerina"],en:["Tamarind","Tangerine","Tomato"]},V:{pt:["Uva (n\xe3o)"],en:["Vanilla bean"]}},names:{A:{pt:["Ana","Ant\xf3nio","Andr\xe9","Alice"],en:["Anna","Andrew","Alice","Adam"]},B:{pt:["Beatriz","Bruno","Bruna","Bernardo"],en:["Benjamin","Bella","Brian","Beatrice"]},C:{pt:["Carlos","Carolina","Catarina","Clara"],en:["Carlos","Catherine","Clara","Christopher"]},D:{pt:["David","Diana","Diogo","Daniel"],en:["David","Diana","Daniel","Daisy"]},E:{pt:["Eduardo","Eva","Elisa","Em\xedlia"],en:["Edward","Emma","Emily","Ethan"]},F:{pt:["Filipa","Francisco","Fernanda","F\xe1bio"],en:["Frank","Frances","Felix","Fiona"]},G:{pt:["Gon\xe7alo","Gabriela","Guida","Gil"],en:["George","Grace","Gabriel","Gabrielle"]},H:{pt:["Henrique","Helena","Hugo"],en:["Henry","Hannah","Harry","Helen"]},I:{pt:["In\xeas","Isabel","Igor"],en:["Isabelle","Ivan","Irene","Iris"]},J:{pt:["Jo\xe3o","Jorge","Joana","Juliana"],en:["James","Julia","John","Jessica"]},L:{pt:["Lu\xeds","Laura","Leonardo","Leonor"],en:["Lucas","Laura","Leonardo","Lily"]},M:{pt:["Maria","Miguel","Marta","Manuel"],en:["Matthew","Maria","Mia","Michael"]},N:{pt:["Nuno","Nat\xe1lia","Natacha"],en:["Noah","Natalie","Nicholas","Nina"]},O:{pt:["Olga","\xd3scar"],en:["Oliver","Olivia","Oscar"]},P:{pt:["Pedro","Paula","Paulo","Patr\xedcia"],en:["Peter","Patricia","Paul","Penelope"]},R:{pt:["Ricardo","Rita","Rodrigo","Rosa"],en:["Richard","Rachel","Robert","Rebecca"]},S:{pt:["Sara","Sofia","S\xe9rgio","Susana"],en:["Samuel","Sarah","Sophia","Simon"]},T:{pt:["Tiago","Teresa","Tom\xe1s","Tatiana"],en:["Thomas","Tessa","Timothy","Tina"]},V:{pt:["Vera","V\xedtor","Valentina"],en:["Victor","Valentina","Victoria"]}},foods:{A:{pt:["Arroz","Atum","Azeitonas","Alho"],en:["Apple pie","Avocado toast","Asparagus","Almond"]},B:{pt:["Bacalhau","Bifes","Batatas","Broa"],en:["Bacon","Bagel","Biscuit","Brownie"]},C:{pt:["Caldo verde","Chouri\xe7o","Cenoura","Cebola"],en:["Cake","Carrot","Cheese","Croissant"]},D:{pt:["Doce de leite","Dobrada"],en:["Doughnut","Dumpling","Dal"]},E:{pt:["Espetada","Enchidos","Esparguete"],en:["Egg","Enchilada","Eggplant"]},F:{pt:["Frango","Feij\xe3o","Farinha","Francesinha"],en:["Fish","Fries","Falafel","Fondue"]},G:{pt:["Gr\xe3o","Gelado","Ginja"],en:["Grilled chicken","Guacamole","Gelato","Granola"]},H:{pt:["Hamb\xfarguer","Hotdog"],en:["Hamburger","Hotdog","Hummus","Honey"]},I:{pt:["Iogurte"],en:["Ice cream","Iced tea"]},J:{pt:["Jantar","Jardineira"],en:["Jam","Jelly","Jalape\xf1o"]},L:{pt:["Lingui\xe7a","Lentilhas","Laranja"],en:["Lasagna","Lentil soup","Lemon tart"]},M:{pt:["Massa","Migas","Mel","Manteiga"],en:["Mango sorbet","Meatball","Mushroom","Moussaka"]},N:{pt:["Natas","Nozes"],en:["Noodles","Nachos","Nut butter"]},O:{pt:["Ovos","Omeleta"],en:["Omelette","Oyster","Oatmeal"]},P:{pt:["P\xe3o","Peixe","Pizza","Pudim"],en:["Pizza","Pancake","Pasta","Pudding"]},R:{pt:["Risotto","Rissol","Robalo"],en:["Rice","Risotto","Ramen","Roast beef"]},S:{pt:["Sopa","Sardinha","Salada"],en:["Salad","Sandwich","Sushi","Soup"]},T:{pt:["Tosta","Tremo\xe7os","Tarte"],en:["Tacos","Tofu","Tomato soup","Toast"]},V:{pt:["Vitela","Vinagrete"],en:["Vegetable stir fry","Vanilla pudding","Veal"]}},colors:{A:{pt:["Amarelo","Azul","Anil","\xc2mbar"],en:["Amber","Azure","Aquamarine"]},B:{pt:["Branco","Bord\xf4","Bege"],en:["Blue","Black","Brown","Beige"]},C:{pt:["Castanho","Carmim","Ciano","Coral"],en:["Crimson","Cyan","Coral","Cream"]},D:{pt:["Dourado"],en:["Dark blue","Denim"]},E:{pt:["Esmeralda","Escarlate"],en:["Emerald","Electric blue"]},F:{pt:["Fucsia","Ferrugem","Flamingo"],en:["Fuchsia","Flamingo pink","Forest green"]},G:{pt:["Grafite","Gelo"],en:["Gold","Green","Gray"]},H:{pt:["H\xfamido (n\xe3o)"],en:["Hot pink","Honey yellow"]},I:{pt:["\xcdndigo","Ivory"],en:["Indigo","Ivory"]},J:{pt:["Jade"],en:["Jade","Jasmine"]},L:{pt:["Laranja","Lavanda","Lil\xe1s","Lim\xe3o"],en:["Lavender","Lime green","Lilac"]},M:{pt:["Magenta","Marrom","Malva"],en:["Magenta","Maroon","Mauve","Mint"]},N:{pt:["Negro","Nata"],en:["Navy blue","Neon green"]},O:{pt:["Ocre","Oliveira"],en:["Orange","Olive","Ochre"]},P:{pt:["Preto","Prata","Rosa","P\xfarpura"],en:["Purple","Pink","Peach","Platinum"]},R:{pt:["Roxo","Rubi","Rosa"],en:["Red","Ruby","Rose"]},S:{pt:["Salm\xe3o","S\xe9pia"],en:["Salmon","Sapphire","Scarlet","Silver"]},T:{pt:["Turquesa","Terra"],en:["Turquoise","Teal","Tan"]},V:{pt:["Verde","Violeta","Vermelho"],en:["Violet","Viridian"]}},sports:{A:{pt:["Atletismo","Andebol","Aer\xf3bica","Aikido"],en:["Athletics","Archery","American football","Aerobics"]},B:{pt:["Basquetebol","Boxe","Badminton","Baseball"],en:["Basketball","Boxing","Badminton","Baseball"]},C:{pt:["Ciclismo","Corrida","Cricket","Canoagem"],en:["Cycling","Cricket","Climbing","Canoeing"]},D:{pt:["Dan\xe7a","Dart","Dodgeball"],en:["Diving","Darts","Dodgeball"]},E:{pt:["Equita\xe7\xe3o","Esgrima"],en:["Equestrian","Fencing (esgrima em EN \xe9 Fencing)"]},F:{pt:["Futebol","Futsal","F\xf3rmula 1","Fisiculturismo"],en:["Football","Futsal","Formula 1"]},G:{pt:["Gin\xe1stica","Golfe","Gateball"],en:["Golf","Gymnastics","Go-karting"]},H:{pt:["H\xf3quei","Halterofilia","H\xedpica"],en:["Hockey","Handball","Hurdles"]},I:{pt:["Ioga"],en:["Ice hockey","Ice skating"]},J:{pt:["Judo","Jet ski"],en:["Judo","Javelin","Jet skiing"]},L:{pt:["Luta livre","Lacrosse"],en:["Lacrosse","Long jump"]},M:{pt:["Maratona","Mergulho","MMA"],en:["Marathon","Mixed martial arts","Motocross"]},N:{pt:["Nata\xe7\xe3o","Netball"],en:["Swimming (Nata\xe7\xe3o em PT)","Netball"]},O:{pt:["Orienta\xe7\xe3o"],en:["Orienteering","Olympic weightlifting"]},P:{pt:["Padel","Polo","Patinagem","Pesca desportiva"],en:["Padel","Polo","Parkour","Pentathlon"]},R:{pt:["Rugby","Remo","Raquetebol"],en:["Rugby","Rowing","Racquetball"]},S:{pt:["Surf","Squash","Ski"],en:["Swimming","Surfing","Squash","Skiing"]},T:{pt:["T\xe9nis","Taekwondo","Tiro ao alvo"],en:["Tennis","Taekwondo","Triathlon"]},V:{pt:["Voleibol","Vela","Voo livre"],en:["Volleyball","Volleyball (beach)"]}},brands:{A:{pt:["Apple","Adidas","Amazon","Audi"],en:["Apple","Adidas","Amazon","Audi"]},B:{pt:["BMW","Bose","Burger King","Boss"],en:["BMW","Bose","Burger King","Boss"]},C:{pt:["Coca-Cola","Calvin Klein","Chanel","Canon"],en:["Coca-Cola","Calvin Klein","Chanel","Canon"]},D:{pt:["Disney","Dell","Dyson"],en:["Disney","Dell","Dyson","Dove"]},E:{pt:["Emirates","Epson"],en:["Emirates","Epson","Est\xe9e Lauder"]},F:{pt:["Ferrari","Ford","Facebook","Fender"],en:["Ferrari","Ford","Facebook","Fender"]},G:{pt:["Google","Gucci","Gillette"],en:["Google","Gucci","Gillette"]},H:{pt:["H&M","Honda","Heineken"],en:["H&M","Honda","Heineken","Hugo Boss"]},I:{pt:["IKEA","Intel"],en:["IKEA","Intel","Instagram"]},J:{pt:["Jeep","Jimmy Choo"],en:["Jeep","Jimmy Choo","Jordan"]},L:{pt:["Lego","Louis Vuitton","Levi's"],en:["Lego","Louis Vuitton","Levi's"]},M:{pt:["McDonald's","Microsoft","Mercedes","Mazda"],en:["McDonald's","Microsoft","Mercedes","Mazda"]},N:{pt:["Nike","Netflix","Nestl\xe9","Nintendo"],en:["Nike","Netflix","Nestl\xe9","Nintendo"]},O:{pt:["Omega","Oracle"],en:["Omega","Oracle","Old Spice"]},P:{pt:["Puma","Prada","PlayStation","Peugeot"],en:["Puma","Prada","PlayStation","Peugeot"]},R:{pt:["Ray-Ban","Rolex","Renault"],en:["Ray-Ban","Rolex","Renault","Red Bull"]},S:{pt:["Samsung","Sony","Spotify","Skype"],en:["Samsung","Sony","Spotify","Snapchat"]},T:{pt:["Toyota","Twitter","TikTok","Tesla"],en:["Toyota","Twitter","TikTok","Tesla"]},V:{pt:["Versace","Volkswagen","Visa"],en:["Versace","Volkswagen","Visa"]}},movies:{A:{pt:["Avatar","Aladdim","Amor Infinito"],en:["Avatar","Aladdin","Avengers"]},B:{pt:["Bambi","Batman"],en:["Bambi","Batman","Bohemian Rhapsody"]},C:{pt:["Cenicienta","Coco","Cars"],en:["Coco","Cars","Cinderella","Casino Royale"]},D:{pt:["Divertida Mente","Dumbo"],en:["Dune","Dunkirk"]},E:{pt:["Encanto","Elfen Lied"],en:["Encanto","Elf","Eternal Sunshine"]},F:{pt:["Frozen","Fantasia"],en:["Frozen","Finding Nemo"]},G:{pt:["Gladiador","Godzilla"],en:["Gladiator","Godzilla","Grease"]},H:{pt:["Homem-Aranha","Hercules"],en:["Harry Potter","Hercules","Home Alone"]},I:{pt:["Intoc\xe1veis","Inside Out"],en:["Inception","Inside Out","Interstellar"]},J:{pt:["Jurassic Park"],en:["Jaws","Jurassic Park","Joker"]},L:{pt:["A Bela e o Monstro","Luca"],en:["Lion King","Luca","La La Land"]},M:{pt:["Moana","Mulan","Monstros SA"],en:["Moana","Mulan","Monsters Inc"]},N:{pt:["Nemo","Noiva Cad\xe1ver"],en:["Nemo","Nightmare before Christmas"]},O:{pt:["O Rei Le\xe3o","O Espanta Tubar\xf5es"],en:["Onward","Oz"]},P:{pt:["Procurando Nemo","Pin\xf3quio"],en:["Pinocchio","Paddington"]},R:{pt:["Ratatouille","Robots"],en:["Ratatouille","Rocky"]},S:{pt:["Soul","Shrek","Star Wars"],en:["Soul","Shrek","Star Wars"]},T:{pt:["Toy Story","Tangled","Titanic"],en:["Toy Story","Titanic","Tangled"]},V:{pt:["Vida de Inseto","Valente"],en:["Venom","Vampirina"]}},tvshows:{A:{pt:["A Casa de Papel","At\xedpico"],en:["Avatar: The Last Airbender","Arcane"]},B:{pt:["Bluey","Bob Esponja"],en:["Bluey","Breaking Bad","Brooklyn Nine-Nine"]},C:{pt:["Cocomelon","Cidade dos Sonhos"],en:["Cocomelon","Caillou"]},D:{pt:["Detetive Conan","Digimon"],en:["Dora the Explorer","Digimon","Dexter"]},E:{pt:["Emily em Paris"],en:["Emily in Paris"]},F:{pt:["Friends","Flintstones"],en:["Friends","Family Guy"]},G:{pt:["Gravity Falls"],en:["Gravity Falls","Game of Thrones"]},H:{pt:["Heidi","Hora de Aventura"],en:["Hazbin Hotel","Hilda","How I Met Your Mother"]},I:{pt:["Inspector Gadget"],en:["Inside Job","iCarly"]},J:{pt:["Jorge o Curioso"],en:["Jimmy Neutron","Jeopardy"]},L:{pt:["La Casa de Papel","Lupin"],en:["Loki","Lucifer"]},M:{pt:["Miraculous","Mans\xe3o Foster"],en:["Miraculous","Monster High"]},N:{pt:["Naruto","Ninjago"],en:["Naruto","Never Have I Ever"]},O:{pt:["Os Simpsons","O Ursinho Pooh"],en:["The Office","Only Murders in the Building"]},P:{pt:["Peppa Pig","Patrulha Pata"],en:["Peppa Pig","Paw Patrol"]},R:{pt:["Rapunzel","Round 6"],en:["Rugrats","Recess"]},S:{pt:["Stranger Things","SpongeBob"],en:["Stranger Things","SpongeBob","Scrubs"]},T:{pt:["Turma da M\xf4nica","The Walking Dead"],en:["The Simpsons","Ted Lasso"]}},musicians:{A:{pt:["ABBA","Adele","Arctic Monkeys"],en:["ABBA","Adele","Arctic Monkeys"]},B:{pt:["Beatles","Beyonc\xe9","Bruno Mars"],en:["Beatles","Beyonc\xe9","Bruno Mars"]},C:{pt:["Coldplay","Cristiano Ara\xfajo"],en:["Coldplay","Chris Brown","Cardi B"]},D:{pt:["David Bowie","Drake"],en:["David Bowie","Drake"]},E:{pt:["Ed Sheeran","Elvis"],en:["Ed Sheeran","Elvis Presley","Eminem"]},F:{pt:["Foo Fighters","Fado (n\xe3o \xe9 m\xfasico)"],en:["Foo Fighters","Frank Sinatra","Freddie Mercury"]},G:{pt:["Guns N' Roses","Gloria Gaynor"],en:["Guns N' Roses","Green Day"]},H:{pt:["Harry Styles"],en:["Harry Styles","Halsey"]},I:{pt:["Iron Maiden"],en:["Iron Maiden","Imagine Dragons"]},J:{pt:["Joana Amendoeira","Justin Bieber"],en:["Justin Bieber","Jay-Z","John Legend"]},L:{pt:["Lady Gaga","Lorde"],en:["Lady Gaga","Lorde","Lewis Capaldi"]},M:{pt:["Michael Jackson","Madonna","Maroon 5"],en:["Michael Jackson","Madonna","Maroon 5"]},N:{pt:["Nirvana"],en:["Nirvana","Nicki Minaj"]},O:{pt:["One Direction"],en:["One Direction","Olivia Rodrigo"]},P:{pt:["Pink Floyd","Post Malone"],en:["Pink Floyd","Post Malone"]},R:{pt:["Rihanna","Red Hot Chili Peppers"],en:["Rihanna","Red Hot Chili Peppers"]},S:{pt:["Shakira","Selena Gomez","Sam Smith"],en:["Shakira","Selena Gomez","Sam Smith"]},T:{pt:["Taylor Swift","The Weeknd"],en:["Taylor Swift","The Weeknd"]},V:{pt:["Vivaldi"],en:["Vance Joy","Vampire Weekend"]}},books:{A:{pt:["Alice no Pa\xeds das Maravilhas","O Alquimista"],en:["Alice in Wonderland","Animal Farm"]},B:{pt:["Bambi (livro)","B\xedblia"],en:["Bambi","Billy Budd"]},C:{pt:["Cinderela","Charlie e a F\xe1brica de Chocolate"],en:["Charlie and the Chocolate Factory","Cinderella"]},D:{pt:["Dom Quixote","Di\xe1rio de um Banana"],en:["David Copperfield","Diary of a Wimpy Kid"]},E:{pt:["Eragon","O Estrangeiro"],en:["Eragon","Emma"]},F:{pt:["Fadas e Magia (n\xe3o real)"],en:["Frankenstein","Fantastic Mr Fox"]},G:{pt:["O Grande Gatsby","Gulliver"],en:["The Great Gatsby","Gulliver's Travels"]},H:{pt:["Harry Potter","Hamlet"],en:["Harry Potter","Hamlet","Hunger Games"]},I:{pt:["Il\xedada"],en:["Iliad","It (Stephen King)"]},J:{pt:["O Jogo do Imortais"],en:["Jane Eyre","Julius Caesar"]},L:{pt:["O Livro da Selva","O Le\xe3o a Feiticeira e o Guarda-Roupa"],en:["The Lion, the Witch and the Wardrobe","Little Women"]},M:{pt:["Moby Dick","Mafalda"],en:["Moby Dick","Matilda"]},N:{pt:["Narnia (s\xe9rie)"],en:["Narnia Chronicles"]},O:{pt:["Odisseia","Os Lus\xedadas"],en:["Odyssey","Oliver Twist"]},P:{pt:["Pequeno Pr\xedncipe","Peter Pan","Pin\xf3quio"],en:["The Little Prince","Peter Pan","Pinocchio"]},R:{pt:["Robinson Crusoe","Romeo e Julieta"],en:["Robinson Crusoe","Romeo and Juliet"]},S:{pt:["O Senhor dos An\xe9is","O Sol tamb\xe9m se Levanta"],en:["The Lord of the Rings","Sherlock Holmes"]},T:{pt:["Tom Sawyer","Tr\xeas Mosqueteiros"],en:["Tom Sawyer","The Three Musketeers"]},V:{pt:["Viagem ao Centro da Terra","Vinte Mil L\xe9guas"],en:["Voyage to the Center of the Earth","20,000 Leagues Under the Sea"]}},history:{A:{pt:["Alexandre o Grande","Afonso Henriques"],en:["Alexander the Great","American Revolution"]},B:{pt:["Batalha de Aljubarrota","Bartolomeu Dias"],en:["Battle of Waterloo","Black Death"]},C:{pt:["Crist\xf3v\xe3o Colombo","Cle\xf3patra"],en:["Christopher Columbus","Cleopatra","Crusades"]},D:{pt:["Dom Sebasti\xe3o","Descobrimentos"],en:["Da Vinci","Dark Ages"]},E:{pt:["Eg\xedpcios","Escravid\xe3o"],en:["Egyptian Empire","Enlightenment"]},F:{pt:["Fernando Magalh\xe3es","Feudalismo"],en:["French Revolution","Feudalism"]},G:{pt:["Gengis Khan","Gregos"],en:["Genghis Khan","Greeks"]},H:{pt:["Hitler","Hannibal"],en:["Hitler","Hannibal"]},I:{pt:["Imp\xe9rio Romano","Inquisi\xe7\xe3o"],en:["Industrial Revolution","Inquisition"]},J:{pt:["J\xfalio C\xe9sar"],en:["Julius Caesar"]},L:{pt:["Lu\xeds XIV","Lus\xedadas"],en:["Louis XIV","Lewis and Clark"]},M:{pt:["Marco Polo","Mundo Antigo"],en:["Marco Polo","Middle Ages"]},N:{pt:["Napole\xe3o"],en:["Napoleon","Norman Conquest"]},O:{pt:["Otomanos"],en:["Ottoman Empire"]},P:{pt:["Pombal","Portugueses (descobertas)"],en:["Pharaohs","Peloponnesian War"]},R:{pt:["Revolu\xe7\xe3o Francesa","Roma"],en:["Renaissance","Roman Empire"]},S:{pt:["Salazar","Segunda Guerra Mundial"],en:["Second World War","Spartans"]},T:{pt:["Tratado de Tordesilhas","Templ\xe1rios"],en:["Trojan War","Treaty of Versailles"]}},jobs:{A:{pt:["Advogado","Arquiteto","Astronauta","Agricultor"],en:["Architect","Astronaut","Actor","Accountant"]},B:{pt:["Bombeiro","Bi\xf3logo","Barbeiro"],en:["Baker","Biologist","Builder"]},C:{pt:["Cozinheiro","Carpinteiro","Cientista","Cantor"],en:["Chef","Carpenter","Chemist","Conductor"]},D:{pt:["Dentista","Designer","Detetive"],en:["Dentist","Designer","Doctor","Detective"]},E:{pt:["Enfermeiro","Engenheiro","Escritor"],en:["Engineer","Electrician","Economist"]},F:{pt:["Fot\xf3grafo","Fisioterapeuta","Farmac\xeautico"],en:["Farmer","Firefighter","Florist"]},G:{pt:["Ge\xf3logo","Gestor"],en:["Geologist","Gardener","General"]},H:{pt:["Historiador","Hacker (\xe9tico)"],en:["Historian","Hairdresser"]},I:{pt:["Inform\xe1tico","Ilustrador"],en:["Illustrator","Inspector"]},J:{pt:["Jornalista","Juiz"],en:["Journalist","Judge"]},L:{pt:["Limpador","Locutor"],en:["Lawyer","Librarian","Locksmith"]},M:{pt:["M\xe9dico","M\xfasico","Mec\xe2nico","Matem\xe1tico"],en:["Mechanic","Musician","Manager","Mathematician"]},N:{pt:["Nutricionista","Nadador-Salvador"],en:["Nurse","Nutritionist"]},O:{pt:["Oftalmologista","Operador"],en:["Optician","Officer"]},P:{pt:["Professor","Piloto","Pintor","Pol\xedcia"],en:["Pilot","Painter","Police officer","Plumber"]},R:{pt:["Rececionista","Redator"],en:["Receptionist","Reporter","Researcher"]},S:{pt:["Soldado","Secret\xe1rio","Soci\xf3logo"],en:["Scientist","Surgeon","Social worker"]},T:{pt:["T\xe9cnico","Tradutor","Terapeuta"],en:["Teacher","Translator","Technician"]},V:{pt:["Veterin\xe1rio","Vendedor"],en:["Veterinarian","Violinist"]}},flowers:{A:{pt:["Azal\xe9ia","A\xe7afr\xe3o","Ant\xfario"],en:["Azalea","Amaryllis","Aster"]},B:{pt:["Beg\xf3nia","Boca-de-Le\xe3o"],en:["Begonia","Bluebell","Buttercup"]},C:{pt:["Cravo","Cris\xe2ntemo","Camomila"],en:["Carnation","Chrysanthemum","Clover"]},D:{pt:["D\xe1lia","Dente-de-Le\xe3o"],en:["Daisy","Daffodil","Dahlia"]},E:{pt:["Espadana"],en:["Echinacea","Elderflower"]},F:{pt:["Freesia","F\xfacsia"],en:["Freesia","Fuchsia","Forget-me-not"]},G:{pt:["Gard\xe9nia","Ger\xe2nio","Girassol"],en:["Gardenia","Geranium","Gladiolus"]},H:{pt:["Hort\xeansia","Heliotropo"],en:["Hydrangea","Hibiscus","Hollyhock"]},I:{pt:["\xcdris"],en:["Iris","Impatiens"]},J:{pt:["Jasmim","Jacinto"],en:["Jasmine","Jonquil"]},L:{pt:["Lavanda","L\xedrio","Loto"],en:["Lavender","Lily","Lotus","Larkspur"]},M:{pt:["Magn\xf3lia","Margarida","Malmequeres"],en:["Magnolia","Marigold","Morning glory"]},N:{pt:["Narciso","Noivinha"],en:["Narcissus","Nasturtium"]},O:{pt:["Orqu\xeddea"],en:["Orchid","Oxeye daisy"]},P:{pt:["Pe\xf4nia","Pet\xfania","Papoila"],en:["Peony","Petunia","Poppy"]},R:{pt:["Rosa","Ran\xfanculo"],en:["Rose","Ranunculus"]},S:{pt:["Sempre-viva","Salva"],en:["Sunflower","Sweet pea","Sage"]},T:{pt:["Tulipa","Thistle"],en:["Tulip","Thistle"]},V:{pt:["Violeta","Verbena"],en:["Violet","Verbena"]}}},f="atlantis:stop:categories",h="atlantis:stop:timer",x={title:{pt:"STOP!",en:"STOP!"},chooseCategories:{pt:"Escolhe as categorias",en:"Choose categories"},selected:{pt:"selecionadas",en:"selected"},minCategories:{pt:"Seleciona pelo menos 3",en:"Select at least 3"},startGame:{pt:"Iniciar Jogo",en:"Start Game"},spinning:{pt:"A sortear a letra...",en:"Drawing a letter..."},got:{pt:"Saiu o",en:"Got"},thinkFast:{pt:"Pensa r\xe1pido!",en:"Think fast!"},timer:{pt:"Temporizador",en:"Timer"},noTimer:{pt:"Sem tempo",en:"No timer"},seconds:{pt:"s",en:"s"},stopBtn:{pt:"\uD83D\uDED1 STOP!",en:"\uD83D\uDED1 STOP!"},suggestions:{pt:"Sugest\xf5es",en:"Suggestions"},showHints:{pt:"\uD83D\uDCA1 Ver sugest\xf5es",en:"\uD83D\uDCA1 Show hints"},hideHints:{pt:"\uD83D\uDCA1 Ocultar sugest\xf5es",en:"\uD83D\uDCA1 Hide hints"},roundOver:{pt:"Ronda terminada!",en:"Round over!"},newLetter:{pt:"\uD83D\uDD00 Nova Letra",en:"\uD83D\uDD00 New Letter"},changeCategories:{pt:"⚙️ Mudar Categorias",en:"⚙️ Change Categories"},roundCount:{pt:"Ronda",en:"Round"},typeAnswer:{pt:"Escreve a resposta...",en:"Type your answer..."},timeUp:{pt:"Tempo esgotado!",en:"Time's up!"},noHints:{pt:"Sem sugest\xf5es para esta letra",en:"No hints for this letter"},solo:{pt:"Sozinho",en:"Solo"},online:{pt:"Online",en:"Online"},you:{pt:"Tu",en:"You"},opponent:{pt:"Advers\xe1rio",en:"Opponent"},opponentStopped:{pt:"O advers\xe1rio parou!",en:"Opponent stopped!"},opponentLeft:{pt:"O advers\xe1rio saiu.",en:"Opponent left."},waitingAnswers:{pt:"\xc0 espera das respostas…",en:"Waiting for answers…"},rematch:{pt:"Nova ronda",en:"New round"}};function b(e,o){return x[e]["pt"===o?"pt":"en"]}(0,s.keyframes)`
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1) rotate(360deg); }
`;let y=(0,s.keyframes)`
  0%   { transform: scale(0.3); opacity: 0; }
  60%  { transform: scale(1.2); opacity: 1; }
  80%  { transform: scale(0.92); }
  100% { transform: scale(1); }
`,w=(0,s.keyframes)`
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
`,z=i().h1`
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
`,M=i().div`
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
`,A=i().div`
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
`,R=i().button`
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
  transition: all 0.2s ease;
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
`,_=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
`,E=i().div`
  position: absolute;
  top: 6px;
  right: 8px;
  color: ${l.w4.colors.accent};
  font-size: 0.85rem;
  font-weight: 700;
`,I=i().button`
  margin-top: ${l.w4.spacing.xl};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.xl};
  background: ${({disabled:e})=>e?l.w4.colors.surface:`linear-gradient(135deg, ${l.w4.colors.accent}, #a78bfa)`};
  color: ${({disabled:e})=>e?l.w4.colors.mainTextMuted:"#fff"};
  border: none;
  border-radius: ${l.w4.borderRadius.lg};
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 700;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${({disabled:e})=>e?.5:1};
  min-height: 52px;
  &:hover:not([disabled]) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(88, 166, 255, 0.3);
  }
`,P=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.xl};
  flex: 1;
  padding: ${l.w4.spacing.xxl} 0;
  animation: ${w} 0.3s ease;
`,F=i().div`
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
  transition: all 0.1s ease;
  ${({landing:e})=>e&&(0,s.css)`
    transform: scale(1.05);
    box-shadow: 0 0 60px rgba(88, 166, 255, 0.5);
  `}
  ${({landed:e})=>e&&(0,s.css)`
    animation: ${y} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, ${$} 1.5s 0.5s ease infinite;
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
  animation: ${y} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`,D=i().div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${w} 0.3s ease;
`,H=i().div`
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
`,G=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,Y=i().span`
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
  transition: all 0.15s ease;
  min-height: 44px;
  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
  }
`,V=i().div`
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
  animation: ${w} 0.25s ease;
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
  transition: all 0.15s ease;
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
  transition: border-color 0.15s ease;
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
`,eo=i().ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
  margin: 0;
  padding: 0;
`,ea=i().li`
  background: rgba(240, 162, 2, 0.12);
  border: 1px solid rgba(240, 162, 2, 0.25);
  border-radius: 99px;
  padding: 2px 10px;
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainText};
`,et=i().p`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  font-style: italic;
`,er=i().button`
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
  transition: all 0.2s ease;
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
  transition: transform 0.1s;
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
  animation: ${w} 0.3s ease;
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
`,em=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
  margin-bottom: ${l.w4.spacing.xs};
`,eu=i().div`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${({children:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  font-style: ${({children:e})=>e?"normal":"italic"};
  padding-left: calc(1.6rem + ${l.w4.spacing.sm});
`,eg=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${l.w4.spacing.md};
`,ef=i().button`
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  border-radius: ${l.w4.borderRadius.lg};
  border: ${({variant:e})=>"secondary"===e?`1px solid ${l.w4.colors.border}`:"none"};
  background: ${({variant:e})=>"secondary"===e?l.w4.colors.surface:`linear-gradient(135deg, ${l.w4.colors.accent}, #a78bfa)`};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;
  &:hover {
    transform: translateY(-2px);
    ${({variant:e})=>"secondary"!==e&&"box-shadow: 0 8px 20px rgba(88,166,255,0.3);"}
    ${({variant:e})=>"secondary"===e&&`border-color: ${l.w4.colors.accent};`}
  }
`,eh=i().div`
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
  transition: background 0.2s, color 0.2s;
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.18)":"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  &:hover { color: ${l.w4.colors.accent}; background: rgba(88, 166, 255, 0.1); }
`;function eb({lang:e,canOnline:o}){let[a,n]=(0,r.useState)("solo"),[i,s]=(0,r.useState)("setup"),[x,y]=(0,r.useState)({}),[w,v]=(0,r.useState)({}),[$,k]=(0,r.useState)(!1),[en]=(0,r.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),ey=(0,r.useCallback)(e=>{switch(e.type){case"guest-joined":ev.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),ev.current.sendEvent({type:"host-ack",name:en,playerId:ev.current.room?.playerId??"",players:ev.current.room?.players??[]});break;case"host-ack":ev.current.setConnected(e.name),e.players&&ev.current.setPlayers([...e.players,{id:ev.current.room?.playerId??"",name:en,isHost:!1}]);break;case"player-list":ev.current.setPlayers(e.players);break;case"game-state":{let o=e.payload;if("next-round"===o.action)eB({}),eE({}),eN(!1),y({}),v({}),s("roulette"),eA("spinning");else if("start-round"===o.action)eS(o.letter),ej(o.categories),eP(o.timer),s("playing"),eB({}),eE({}),eN(!1),y({}),v({}),o.timer>0&&(eL(o.timer),eD(!0));else if("stop"===o.action)eq.current&&clearInterval(eq.current),eD(!1),ev.current.sendEvent({type:"game-state",payload:{action:"answers",answers:eJ.current,playerId:ev.current.room?.playerId,playerName:ev.current.room?.playerName}}),s("results"),eY(e=>e+1);else if("answers"===o.action){let e=o.playerId,a=o.playerName,t=o.answers;y(e=>({...e,...t})),v(o=>({...o,[e]:{name:a,answers:t}}))}break}case"player-left":k(!0)}},[en]),ew=(0,c.Ky)({gameId:"stopgame",playerName:en,onEvent:ey}),ev=(0,r.useRef)(ew);ev.current=ew;let e$=(0,c.zj)({gameId:"stopgame",enabled:"online"===a}),[ek,ej]=(0,r.useState)(()=>{try{let e=localStorage.getItem(f);if(e){let o=JSON.parse(e);return Array.isArray(o)?o:[]}}catch{}return["cities","animals","names","fruits","colors"]}),[ez,eS]=(0,r.useState)("A"),[eM,eT]=(0,r.useState)("A"),[eC,eA]=(0,r.useState)("spinning"),[eR,eB]=(0,r.useState)({}),[e_,eE]=(0,r.useState)({}),[eI,eP]=(0,r.useState)(()=>{try{let e=localStorage.getItem(h);if(e){let o=Number(e);return m.includes(o)?o:60}}catch{}return 60}),[eF,eL]=(0,r.useState)(0),[eO,eD]=(0,r.useState)(!1),[eH,eN]=(0,r.useState)(!1),[eG,eY]=(0,r.useState)(0),eq=(0,r.useRef)(null),eV=(0,r.useRef)(null),eW=(0,r.useRef)("pt"===e?d:p),eJ=(0,r.useRef)(eR);eJ.current=eR,(0,r.useEffect)(()=>{eW.current="pt"===e?d:p},[e]),(0,r.useEffect)(()=>{localStorage.setItem(f,JSON.stringify(ek))},[ek]),(0,r.useEffect)(()=>{localStorage.setItem(h,String(eI))},[eI]),(0,r.useEffect)(()=>()=>{eq.current&&clearInterval(eq.current),eV.current&&clearInterval(eV.current)},[]);let eX=(0,r.useCallback)(e=>{ej(o=>o.includes(e)?o.filter(o=>o!==e):[...o,e])},[]),eU=(0,r.useCallback)(o=>{try{let a=new SpeechSynthesisUtterance(o);a.lang="pt"===e?"pt-PT":"en-US",a.rate=.8,a.pitch=1.2,a.volume=1,window.speechSynthesis.cancel(),window.speechSynthesis.speak(a)}catch{}},[e]),eK=(0,r.useCallback)(()=>{s("roulette"),eA("spinning");let e=eW.current,o=Math.floor(Math.random()*e.length);eV.current&&clearInterval(eV.current),eV.current=setInterval(()=>{o=(o+1)%e.length,eT(e[o])},70),ev.current.room?.role==="host"&&ev.current.sendEvent({type:"game-state",payload:{action:"next-round"}})},[]),eQ=(0,r.useCallback)(()=>{let o;if("spinning"!==eC)return;eV.current&&clearInterval(eV.current);let t=(o="pt"===e?d:p)[Math.floor(Math.random()*o.length)];eS(t),eT(t),eA("landing"),eU(t),setTimeout(()=>{eA("landed"),setTimeout(()=>{s("playing"),eB({}),eE({}),y({}),eN(!1),eI>0&&(eL(eI),eD(!0)),"online"===a&&ev.current.room?.role==="host"&&ev.current.sendEvent({type:"game-state",payload:{action:"start-round",letter:t,categories:ek,timer:eI}})},1500)},400)},[e,eI,eC,eU,a,ek]);(0,r.useEffect)(()=>{if(eO&&0!==eI)return eq.current&&clearInterval(eq.current),eq.current=setInterval(()=>{eL(e=>e<=1?(eq.current&&clearInterval(eq.current),eD(!1),eN(!0),s("results"),0):e-1)},1e3),()=>{eq.current&&clearInterval(eq.current)}},[eO,eI]);let eZ=(0,r.useCallback)(()=>{if(eq.current&&clearInterval(eq.current),eD(!1),s("results"),eY(e=>e+1),"online"===a){ev.current.sendEvent({type:"game-state",payload:{action:"stop"}}),ev.current.sendEvent({type:"game-state",payload:{action:"answers",answers:eJ.current,playerId:ev.current.room?.playerId,playerName:ev.current.room?.playerName}});let e=ev.current.room?.playerId??"",o=ev.current.room?.playerName??"";v(a=>({...a,[e]:{name:o,answers:eJ.current}}))}},[a]),e0=(0,r.useCallback)(()=>{eB({}),eE({}),eN(!1),y({}),v({}),eK()},[eK]),e1=(0,r.useCallback)(()=>{s("setup"),eB({}),eE({}),eN(!1),eq.current&&clearInterval(eq.current),eD(!1)},[]),e4=(0,r.useCallback)(e=>{eE(o=>({...o,[e]:!o[e]}))},[]),e2=u.filter(e=>ek.includes(e.id)),e5=eI>0?eF/eI:1,e3=(0,r.useRef)(null),e8=(0,r.useRef)(!1);return(0,t.jsxs)(j,{children:[(0,t.jsx)(z,{children:b("title",e)}),"setup"===i&&(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsxs)(eh,{children:[(0,t.jsxs)(ex,{active:"solo"===a,onClick:()=>n("solo"),children:["\uD83C\uDFAF ",b("solo",e)]}),(0,t.jsxs)(ex,{active:"online"===a,onClick:()=>n("online"),children:["\uD83C\uDF10 ",b("online",e)]})]}),(0,t.jsx)(S,{children:b("chooseCategories",e)}),(0,t.jsx)(M,{children:(0,t.jsxs)(T,{children:[(0,t.jsx)(C,{ok:ek.length>=3,children:ek.length})," ",b("selected",e),ek.length<3&&(0,t.jsxs)("span",{style:{marginLeft:l.w4.spacing.sm,color:"#f0a202",fontSize:l.w4.typography.fontSizeSm},children:["— ",b("minCategories",e)]})]})}),(0,t.jsx)(A,{children:u.map(o=>{let a=ek.includes(o.id);return(0,t.jsxs)(R,{selected:a,onClick:()=>eX(o.id),type:"button","aria-pressed":a,children:[a&&(0,t.jsx)(E,{children:"✓"}),(0,t.jsx)(B,{children:o.icon}),(0,t.jsx)(_,{children:"pt"===e?o.label.pt:o.label.en})]},o.id)})}),(0,t.jsx)("div",{style:{marginTop:l.w4.spacing.lg,width:"100%",maxWidth:"720px"},children:(0,t.jsxs)(G,{children:[(0,t.jsxs)(Y,{children:[b("timer",e),":"]}),m.map(o=>(0,t.jsx)(q,{active:eI===o,onClick:()=>eP(o),type:"button",children:0===o?b("noTimer",e):`${o}${b("seconds",e)}`},o))]})}),(0,t.jsx)(I,{disabled:ek.length<3,onClick:ek.length>=3?"online"===a?()=>s("lobby"):eK:void 0,type:"button",children:b("startGame",e)})]}),"lobby"===i&&(0,t.jsx)("div",{style:{marginTop:l.w4.spacing.lg,width:"100%",maxWidth:400,margin:"0 auto"},children:ew.room?.connected?(0,t.jsxs)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[(0,t.jsx)("p",{style:{color:l.w4.colors.mainTextMuted,fontSize:l.w4.typography.fontSizeMd},children:"host"===ew.room.role?"pt"===e?`${ew.room.players.length} jogadores na sala. Clica para come\xe7ar.`:`${ew.room.players.length} players in room. Click to start.`:"pt"===e?`Ligado! ${ew.room.players.length} jogadores na sala.`:`Connected! ${ew.room.players.length} players in room.`}),(0,t.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:ew.room.players.map(e=>(0,t.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===ew.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===ew.room.role&&(0,t.jsx)(I,{disabled:!1,onClick:eK,type:"button",children:b("startGame",e)})]}):(0,t.jsx)(c.XB,{lang:e,room:ew.room,error:ew.error,availableRooms:e$.rooms,onCreateRoom:()=>{let{code:e,roomName:o}=ew.createRoom();e$.publishRoom({code:e,roomName:o,hostName:en,playerCount:1})},onJoinRoom:e=>ew.joinRoom(e),onLeaveRoom:()=>{e$.unpublishRoom(),ew.leaveRoom(),s("setup")}})}),"roulette"===i&&(0,t.jsxs)(P,{children:[(0,t.jsx)(F,{landing:"landing"===eC,landed:"landed"===eC,children:eM}),"spinning"===eC&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L,{children:b("spinning",e)}),"online"!==a||ew.room?.role==="host"?(0,t.jsx)(ei,{onTouchStart:e=>{e3.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!e3.current)return;let o=Math.abs(e.changedTouches[0].clientX-e3.current.x),a=Math.abs(e.changedTouches[0].clientY-e3.current.y);e3.current=null,o>8||a>8||(e8.current=!0,eQ())},onClick:()=>{if(e8.current){e8.current=!1;return}eQ()},children:"STOP!"}):(0,t.jsx)(L,{style:{opacity:.7},children:"pt"===e?"A aguardar o anfitri\xe3o…":"Waiting for host…"})]}),("landing"===eC||"landed"===eC)&&(0,t.jsxs)(O,{children:[b("got",e)," ",(0,t.jsxs)("strong",{children:["“",ez,"”"]}),"!",(0,t.jsx)("br",{}),(0,t.jsx)("span",{style:{fontSize:"1rem",fontWeight:400,color:l.w4.colors.mainTextMuted},children:b("thinkFast",e)})]})]}),"playing"===i&&(0,t.jsxs)(D,{children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(N,{children:ez}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{fontSize:l.w4.typography.fontSizeLg,fontWeight:700,color:l.w4.colors.mainText},children:[b("got",e)," “",ez,"”"]}),eG>0&&(0,t.jsxs)("div",{style:{fontSize:l.w4.typography.fontSizeSm,color:l.w4.colors.mainTextMuted},children:[b("roundCount",e)," ",eG+1]})]})]}),eI>0&&(0,t.jsxs)(G,{children:[(0,t.jsx)(V,{pct:e5}),(0,t.jsxs)(W,{pct:e5,children:[eF,b("seconds",e)]})]}),e2.map(o=>{let a=function(e,o,a){let t=g[e];if(!t)return[];let r=t[o];return r?"pt"===a?r.pt:r.en:[]}(o.id,ez,e),r=e_[o.id]??!1;return(0,t.jsxs)(J,{children:[(0,t.jsxs)(X,{children:[(0,t.jsxs)(U,{children:[(0,t.jsx)("span",{children:o.icon}),"pt"===e?o.label.pt:o.label.en]}),(0,t.jsx)(K,{onClick:()=>e4(o.id),type:"button",children:r?b("hideHints",e):b("showHints",e)})]}),(0,t.jsx)(Q,{value:eR[o.id]??"",onChange:e=>eB(a=>({...a,[o.id]:e.target.value})),placeholder:b("typeAnswer",e),spellCheck:!1,autoCapitalize:"off"}),r&&(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:b("suggestions",e)}),a.length>0?(0,t.jsx)(eo,{children:a.map((e,o)=>(0,t.jsx)(ea,{children:e},o))}):(0,t.jsx)(et,{children:b("noHints",e)})]})]},o.id)}),(0,t.jsx)(er,{type:"button",onTouchStart:e=>{e3.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!e3.current)return;let o=Math.abs(e.changedTouches[0].clientX-e3.current.x),a=Math.abs(e.changedTouches[0].clientY-e3.current.y);e3.current=null,o>8||a>8||(e8.current=!0,eZ())},onClick:()=>{if(e8.current){e8.current=!1;return}eZ()},children:b("stopBtn",e)})]}),"results"===i&&(0,t.jsxs)(es,{children:[(0,t.jsxs)(el,{children:[(0,t.jsx)(ec,{children:eH?b("timeUp",e):b("roundOver",e)}),(0,t.jsxs)(ed,{children:[b("got",e)," “",ez,"”",eG>0&&` \xb7 ${b("roundCount",e)} ${eG+1}`]})]}),e2.map(o=>(0,t.jsxs)(ep,{children:[(0,t.jsxs)(em,{children:[(0,t.jsx)("span",{children:o.icon}),"pt"===e?o.label.pt:o.label.en]}),"online"===a?(0,t.jsx)("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:Object.entries(w).sort(([e],[o])=>e===ew.room?.playerId?-1:+(o===ew.room?.playerId)).map(([a,{name:r,answers:n}])=>(0,t.jsxs)("div",{style:{flex:"1 1 100px",minWidth:80},children:[(0,t.jsxs)("div",{style:{fontSize:11,fontWeight:600,marginBottom:2,color:a===ew.room?.playerId?l.w4.colors.accent:l.w4.colors.mainTextMuted},children:[r,a===ew.room?.playerId?` (${b("you",e)})`:""]}),(0,t.jsx)(eu,{children:n[o.id]||(0,t.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},a))}):(0,t.jsx)(eu,{children:eR[o.id]||(0,t.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},o.id)),(0,t.jsxs)(eg,{children:[(0,t.jsx)(ef,{type:"button",onClick:e0,children:b("newLetter",e)}),(0,t.jsx)(ef,{type:"button",variant:"secondary",onClick:e1,children:b("changeCategories",e)})]})]})]})}},7710(e,o,a){a.d(o,{n:()=>F});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(5782);let d=["\uD83C\uDF4E","\uD83C\uDF4C","\uD83C\uDF47","\uD83C\uDF49","\uD83C\uDF4A","\uD83C\uDF53","\uD83E\uDED0","\uD83C\uDF52","\uD83E\uDD5D","\uD83C\uDF51","\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC38","\uD83E\uDD8A","\uD83D\uDC3C","\uD83D\uDC35","\uD83E\uDD81","\uD83D\uDC2E","\uD83D\uDC37","\uD83D\uDC14","⭐","❤️","\uD83D\uDC8E","\uD83D\uDD25","\uD83C\uDF08","⚡","\uD83C\uDFAF","\uD83C\uDFB8","\uD83D\uDE80","\uD83C\uDF19"];function p(e){let o=[...e];for(let e=o.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[o[e],o[a]]=[o[a],o[e]]}return o}function m(e){let o=d[Math.floor(Math.random()*d.length)],a=p(d.filter(e=>e!==o)).slice(0,e-1),t=p([o,...a]);return{target:o,grid:t,targetIndex:t.indexOf(o)}}let u=(0,s.keyframes)`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,g=(0,s.keyframes)`0% { transform: scale(0); } 60% { transform: scale(1.15); } 100% { transform: scale(1); }`,f=(0,s.keyframes)`0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); }`,h=(0,s.keyframes)`0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}`,x=(0,s.keyframes)`0%,100%{transform:scale(1)}50%{transform:scale(1.3)}`,b=(0,s.keyframes)`0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}`,y=i().div`
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: ${l.w4.spacing.lg}; gap: ${l.w4.spacing.lg}; overflow-y: auto; min-height: 0;
  background: radial-gradient(ellipse 60% 50% at 30% 20%, rgba(249,117,131,0.06) 0%, transparent 70%),
              radial-gradient(ellipse 50% 60% at 70% 80%, rgba(88,166,255,0.04) 0%, transparent 70%), #080b12;
`,w=i().h1`font-size: clamp(1.6rem,4vw,2.4rem); font-weight: 800; color: ${l.w4.colors.mainText}; margin: 0; text-align: center; animation: ${u} 0.3s ease;`,v=i().p`font-size: ${l.w4.typography.fontSizeMd}; color: ${l.w4.colors.mainTextMuted}; text-align: center; margin: 0;`,$=i().div`display:flex;gap:2px;padding:2px;background:${l.w4.colors.mainBg};border:1px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.md};`,k=i().button`padding:8px 18px;border:none;border-radius:${l.w4.borderRadius.sm};font-size:14px;min-height:36px;font-weight:600;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:background 0.2s,color 0.2s;background:${({active:e})=>e?"rgba(249,117,131,0.18)":"transparent"};color:${({active:e})=>e?"#f97583":l.w4.colors.mainTextMuted};&:hover{color:#f97583;background:rgba(249,117,131,0.1);}`,j=i().button`padding:16px 40px;background:${({accent:e})=>e};border:none;border-radius:16px;font-size:18px;font-weight:700;color:#fff;font-family:${l.w4.typography.fontFamily};cursor:pointer;transition:all 0.2s;min-height:52px;&:hover{transform:translateY(-3px);box-shadow:0 6px 24px ${({accent:e})=>e}40;}&:active{transform:translateY(-1px);}`,z=i().div`font-size: clamp(4rem,12vw,8rem); font-weight: 900; color: ${l.w4.colors.accent}; animation: ${b} 0.5s ease;`,S=i().div`display:flex;align-items:center;gap:${l.w4.spacing.md};padding:12px 24px;border-radius:${l.w4.borderRadius.lg};background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.accent};animation:${g} 0.3s ease;`,M=i().span`font-size:48px;animation:${x} 1s ease-in-out infinite;`,T=i().span`font-size:24px;color:${l.w4.colors.accent};font-weight:800;`,C=i().div`display:grid;grid-template-columns:repeat(${({cols:e})=>e},1fr);gap:10px;max-width:500px;width:100%;animation:${u} 0.2s ease;`,A=i().button`
  aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(28px,6vw,42px);
  background:${l.w4.colors.surface};border:2px solid ${l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};
  cursor:pointer;transition:all 0.15s;min-height:56px;
  border-color: ${({correct:e,wrong:o})=>e?"#3fb950":o?"#f97583":l.w4.colors.border};
  background: ${({correct:e,wrong:o})=>e?"rgba(63,185,80,0.15)":o?"rgba(249,117,131,0.15)":l.w4.colors.surface};
  animation: ${({correct:e,wrong:o})=>e?f:o?h:"none"} ${({correct:e})=>e?"0.5s ease":"0.4s ease"};
  &:hover:not(:disabled){background:rgba(88,166,255,0.08);transform:scale(1.05);}
  &:active:not(:disabled){transform:scale(0.95);}
`,R=i().div`display:flex;gap:${l.w4.spacing.lg};align-items:center;`,B=i().div`padding:6px 14px;background:${l.w4.colors.surface};border:1px solid ${({color:e})=>e??l.w4.colors.border};border-radius:24px;font-size:15px;font-weight:700;color:${({color:e})=>e??l.w4.colors.mainText};`;i().div`
  position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  font-size:80px;pointer-events:none;animation:${g} 0.3s ease;z-index:10;
  background:${({type:e})=>"correct"===e?"rgba(63,185,80,0.1)":"rgba(249,117,131,0.1)"};
  border-radius:${l.w4.borderRadius.lg};
`;let _=i().div`display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;animation:${u} 0.3s ease;`,E=i().div`display:flex;align-items:center;gap:${l.w4.spacing.sm};padding:10px 14px;background:${l.w4.colors.surface};border:1px solid ${({highlight:e})=>e?l.w4.colors.accent:l.w4.colors.border};border-radius:${l.w4.borderRadius.lg};`,I=i().span`flex:1;font-weight:600;color:${({highlight:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};`,P=i().span`font-size:20px;font-weight:800;color:${({color:e})=>e??l.w4.colors.mainText};`;function F({lang:e,canOnline:o}){let[a,n]=(0,r.useState)("menu"),[i,s]=(0,r.useState)("solo"),[d,p]=(0,r.useState)(0),[u,g]=(0,r.useState)(null),[f,h]=(0,r.useState)(0),[x,b]=(0,r.useState)({}),[L,O]=(0,r.useState)(3),[D,H]=(0,r.useState)(null),[N,G]=(0,r.useState)(!1),[Y]=(0,r.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),q=(0,r.useRef)(!1),V=(0,r.useCallback)(e=>{switch(e.type){case"guest-joined":J.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),J.current.sendEvent({type:"host-ack",name:Y,playerId:J.current.room?.playerId??"",players:J.current.room?.players??[]});break;case"host-ack":J.current.setConnected(e.name),e.players&&J.current.setPlayers([...e.players,{id:J.current.room?.playerId??"",name:Y,isHost:!1}]);break;case"player-list":J.current.setPlayers(e.players);break;case"game-state":{let o=e.payload;if("new-round"===o.action)g(o.roundData),p(o.round),H(null),G(!1),q.current=!1,n("playing");else if("round-result"===o.action)b(o.scores),o.winnerId===J.current.room?.playerId&&h(e=>e+1);else if("game-over"===o.action)b(o.scores),n("scores");else if("tap"===o.action&&J.current.room?.role==="host"&&!q.current){let e=o.index,a=o.playerId;if(U.current&&e===U.current.targetIndex){q.current=!0;let e={...Q.current,[a]:(Q.current[a]??0)+1};b(e),Q.current=e,J.current.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:a,scores:e}}),setTimeout(()=>Z(),1200)}}break}case"player-left":e.playerId&&J.current.removePlayer(e.playerId)}},[Y]),W=(0,c.Ky)({gameId:"tapit",playerName:Y,onEvent:V}),J=(0,r.useRef)(W);J.current=W;let X=(0,c.zj)({gameId:"tapit",enabled:"online"===i}),U=(0,r.useRef)(u);U.current=u;let K=(0,r.useRef)(d);K.current=d;let Q=(0,r.useRef)(x);Q.current=x;let Z=(0,r.useCallback)(()=>{let e=K.current+1;if(e>10){J.current.sendEvent({type:"game-state",payload:{action:"game-over",scores:Q.current}}),n("scores");return}let o=m(12);U.current=o,g(o),p(e),H(null),G(!1),q.current=!1,n("playing"),J.current.sendEvent({type:"game-state",payload:{action:"new-round",roundData:o,round:e}})},[]),ee=(0,r.useCallback)(()=>{h(0),b({}),Q.current={},p(0),K.current=0,O(3),n("countdown");let e=3,o=setInterval(()=>{O(--e),e<=0&&(clearInterval(o),"online"===i&&W.room?.role==="host"?Z():"solo"===i&&(g(m(12)),p(1),K.current=1,q.current=!1,n("playing")))},800)},[i,W.room?.role,Z]),eo=(0,r.useCallback)(e=>{if("playing"===a&&!q.current&&u){if("online"===i){if(W.room?.role==="host")if(e===u.targetIndex){q.current=!0,H(e),G(!0);let o=W.room.playerId,a={...Q.current,[o]:(Q.current[o]??0)+1};b(a),Q.current=a,h(e=>e+1),W.sendEvent({type:"game-state",payload:{action:"round-result",winnerId:o,scores:a}}),setTimeout(()=>Z(),1200)}else H(e),G(!1),setTimeout(()=>H(null),400);else e===u.targetIndex?(q.current=!0,H(e),G(!0)):(H(e),G(!1),setTimeout(()=>H(null),400)),W.sendEvent({type:"game-state",payload:{action:"tap",index:e,playerId:W.room?.playerId}});return}e===u.targetIndex?(q.current=!0,H(e),G(!0),h(e=>e+1),setTimeout(()=>{let e=K.current+1;e>10?n("scores"):(g(m(12)),p(e),K.current=e,H(null),q.current=!1)},600)):(H(e),G(!1),setTimeout(()=>H(null),400))}},[a,u,i,W,Z]);if("menu"===a)return(0,t.jsxs)(y,{children:[(0,t.jsxs)(w,{children:["\uD83C\uDFAF ","pt"===e?"Toca no Certo!":"Tap the Right One!"]}),(0,t.jsx)(v,{children:"pt"===e?"Encontra o s\xedmbolo certo o mais r\xe1pido poss\xedvel!":"Find the right symbol as fast as you can!"}),o&&(0,t.jsxs)($,{children:[(0,t.jsxs)(k,{active:"solo"===i,onClick:()=>s("solo"),children:["\uD83C\uDFAF ","pt"===e?"Sozinho":"Solo"]}),(0,t.jsx)(k,{active:"online"===i,onClick:()=>s("online"),children:"\uD83C\uDF10 Online"})]}),"online"===i?(0,t.jsx)(j,{accent:"#f97583",onClick:()=>n("lobby"),children:"pt"===e?"Criar / Entrar Sala":"Create / Join Room"}):(0,t.jsx)(j,{accent:"#f97583",onClick:ee,children:"pt"===e?"Jogar!":"Play!"})]});if("lobby"===a)return(0,t.jsxs)(y,{children:[(0,t.jsxs)(w,{children:["\uD83C\uDFAF ","pt"===e?"Toca no Certo!":"Tap the Right One!"]}),W.room?.connected?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v,{children:"host"===W.room.role?`${W.room.players.length} ${"pt"===e?"jogadores":"players"}`:"pt"===e?"\xc0 espera do anfitri\xe3o…":"Waiting for host…"}),(0,t.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:W.room.players.map(e=>(0,t.jsxs)("span",{style:{padding:"4px 12px",borderRadius:12,fontSize:13,fontWeight:600,background:e.isHost?"rgba(88,166,255,0.12)":l.w4.colors.surface,border:`1px solid ${e.isHost?l.w4.colors.accent:l.w4.colors.border}`,color:e.id===W.room?.playerId?l.w4.colors.accent:l.w4.colors.mainText},children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name]},e.id))}),"host"===W.room.role&&(0,t.jsx)(j,{accent:"#f97583",onClick:ee,children:"pt"===e?"Come\xe7ar!":"Start!"})]}):(0,t.jsx)(c.XB,{lang:e,room:W.room,error:W.error,availableRooms:X.rooms,onCreateRoom:()=>{let{code:e,roomName:o}=W.createRoom();X.publishRoom({code:e,roomName:o,hostName:Y,playerCount:1})},onJoinRoom:e=>W.joinRoom(e),onLeaveRoom:()=>{X.unpublishRoom(),W.leaveRoom(),n("menu")}})]});if("countdown"===a)return(0,t.jsx)(y,{children:(0,t.jsx)(z,{children:L>0?L:"\uD83C\uDFAF"},L)});if("scores"===a){let o="online"===i,a=o?(W.room?.players??[]).map(e=>({id:e.id,name:e.name,pts:x[e.id]??0})).sort((e,o)=>o.pts-e.pts):[{id:"me",name:Y,pts:f}];return(0,t.jsxs)(y,{children:[(0,t.jsxs)(w,{children:["\uD83C\uDFC6 ","pt"===e?"Resultados":"Results"]}),(0,t.jsx)(_,{children:a.map((e,o)=>(0,t.jsxs)(E,{highlight:e.id===W.room?.playerId,children:[(0,t.jsx)("span",{style:{fontSize:18,minWidth:28},children:0===o?"\uD83E\uDD47":1===o?"\uD83E\uDD48":2===o?"\uD83E\uDD49":`${o+1}.`}),(0,t.jsx)(I,{highlight:e.id===W.room?.playerId,children:e.name}),(0,t.jsxs)(P,{color:0===o?"#3fb950":void 0,children:[e.pts,"/",10]})]},e.id))}),(0,t.jsx)(j,{accent:"#f97583",onClick:()=>{o&&(W.leaveRoom(),X.unpublishRoom()),n("menu")},children:"pt"===e?"Jogar Outra Vez":"Play Again"})]})}if(!u)return(0,t.jsx)(y,{children:(0,t.jsx)(v,{children:"Loading..."})});let ea=u.grid.length<=9?3:4;return(0,t.jsxs)(y,{children:[(0,t.jsxs)(R,{children:[(0,t.jsxs)(B,{children:["⭐ ",f]}),(0,t.jsxs)(B,{children:["pt"===e?"Ronda":"Round"," ",d,"/",10]})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(T,{children:"\uD83D\uDC49"}),(0,t.jsx)(M,{children:u.target}),(0,t.jsx)(T,{children:"\uD83D\uDC48"})]}),(0,t.jsx)("div",{style:{position:"relative"},children:(0,t.jsx)(C,{cols:ea,children:u.grid.map((e,o)=>(0,t.jsx)(A,{correct:D===o&&N,wrong:D===o&&!N,onClick:()=>eo(o),style:{animationDelay:`${.03*o}s`},children:e},`${d}-${o}`))})})]})}},8125(e,o,a){a.d(o,{a:()=>eo});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246);let c="atlantis-textadventure-progress";function d(){try{let e=localStorage.getItem(c);return e?JSON.parse(e):{}}catch{return{}}}let p=[{id:"castle",emoji:"\uD83C\uDFF0",title:{pt:"O Castelo Misterioso",en:"The Mysterious Castle"},description:{pt:"Explora um castelo m\xe1gico cheio de segredos, magos e criaturas encantadas.",en:"Explore a magical castle full of secrets, wizards and enchanted creatures."},color:"#7c5cbf",totalEndings:3,scenes:[{id:"castle_start",emoji:"\uD83C\uDFF0",text:{pt:"Voc\xea chega \xe0 porta de um enorme castelo misterioso. As paredes s\xe3o de pedra cinzenta e h\xe1 hera crescendo por toda parte. Uma brisa fria sopra pela floresta ao redor. Voc\xea ouve um barulho estranho vindo de dentro.",en:"You arrive at the gate of an enormous mysterious castle. The walls are grey stone with ivy growing everywhere. A cool breeze blows through the surrounding forest. You hear a strange sound coming from inside."},choices:[{label:{pt:"Entrar pela porta principal",en:"Enter through the main door"},next:"castle_main_door"},{label:{pt:"Procurar uma janela aberta",en:"Look for an open window"},next:"castle_window"},{label:{pt:"Chamar por algu\xe9m",en:"Call out to someone"},next:"castle_call"}]},{id:"castle_main_door",emoji:"\uD83D\uDEAA",text:{pt:"A porta enorme range ao abrir. Dentro, voc\xea encontra um grande sal\xe3o com tape\xe7arias coloridas nas paredes. No centro, uma escada larga sobe para o andar de cima. Mas tamb\xe9m h\xe1 uma porta pequena \xe0 esquerda.",en:"The huge door creaks as it opens. Inside, you find a grand hall with colourful tapestries on the walls. In the centre, a wide staircase leads upstairs. But there is also a small door to the left."},choices:[{label:{pt:"Subir a escada",en:"Climb the staircase"},next:"castle_upstairs"},{label:{pt:"Abrir a porta pequena",en:"Open the small door"},next:"castle_kitchen"}]},{id:"castle_window",emoji:"\uD83E\uDE9F",text:{pt:"Voc\xea encontra uma janela entreaberta no andar t\xe9rreo. Ao espiar para dentro, v\xea uma biblioteca cheia de livros enormes e um gato preto dormindo sobre uma mesa. Voc\xea entra sem fazer barulho.",en:"You find a slightly open window on the ground floor. Peeking inside, you see a library full of enormous books and a black cat sleeping on a table. You climb in without making a sound."},choices:[{label:{pt:"Explorar a biblioteca",en:"Explore the library"},next:"castle_library"},{label:{pt:"Acordar o gato",en:"Wake the cat"},next:"castle_cat"}]},{id:"castle_call",emoji:"\uD83D\uDCE3",text:{pt:'Voc\xea grita "Ol\xe1! Tem algu\xe9m a\xed?" e sua voz ecoa pelo castelo. De repente, uma janela l\xe1 em cima se abre e uma velhinha de cabelos brancos aparece. Ela sorri e joga uma chave dourada para voc\xea!',en:'You shout "Hello! Is anyone there?" and your voice echoes through the castle. Suddenly, a window opens high above and a little old lady with white hair appears. She smiles and tosses a golden key down to you!'},choices:[{label:{pt:"Usar a chave dourada na porta",en:"Use the golden key on the door"},next:"castle_golden_room"},{label:{pt:"Perguntar \xe0 velhinha quem ela \xe9",en:"Ask the old lady who she is"},next:"castle_witch"}]},{id:"castle_upstairs",emoji:"\uD83C\uDF1F",text:{pt:'No topo da escada, voc\xea encontra um quarto cheio de brilho dourado. No centro h\xe1 um ba\xfa antigo com um cart\xe3o que diz: "Para o corajoso aventureiro — abra e descubra!" Seu cora\xe7\xe3o bate mais r\xe1pido.',en:'At the top of the staircase, you find a room filled with golden glow. In the centre is an old chest with a card that reads: "For the brave adventurer — open and discover!" Your heart beats faster.'},choices:[{label:{pt:"Abrir o ba\xfa",en:"Open the chest"},next:"castle_end_treasure"},{label:{pt:"Chamar os amigos antes de abrir",en:"Call friends before opening"},next:"castle_end_friends"}]},{id:"castle_kitchen",emoji:"\uD83C\uDF72",text:{pt:'A porta pequena leva a uma cozinha quentinha e cheirosa. Uma sopa deliciosa fervilha no fog\xe3o. H\xe1 um bilhete na mesa: "Ajude-se! — O Mago do Castelo". Voc\xea come um pouco e se sente muito mais corajoso!',en:'The small door leads to a warm, fragrant kitchen. A delicious soup bubbles on the stove. There is a note on the table: "Help yourself! — The Castle Wizard". You eat some and feel much braver!'},choices:[{label:{pt:"Ir procurar o mago",en:"Go look for the wizard"},next:"castle_wizard"},{label:{pt:"Explorar mais o castelo",en:"Explore more of the castle"},next:"castle_upstairs"}]},{id:"castle_library",emoji:"\uD83D\uDCDA",text:{pt:'Os livros na biblioteca s\xe3o enormes e t\xeam t\xedtulos como "Feiti\xe7os para Iniciantes" e "Drag\xf5es: Um Guia Completo". Um livro come\xe7a a brilhar quando voc\xea se aproxima. Ele se abre sozinho numa p\xe1gina especial!',en:'The books in the library are enormous with titles like "Spells for Beginners" and "Dragons: A Complete Guide". One book begins to glow as you approach. It opens by itself to a special page!'},choices:[{label:{pt:"Ler o livro brilhante",en:"Read the glowing book"},next:"castle_spell"},{label:{pt:"Pegar o livro sobre drag\xf5es",en:"Grab the dragon book"},next:"castle_dragon"}]},{id:"castle_cat",emoji:"\uD83D\uDC31",text:{pt:'O gato abre os olhos lentamente e fala: "Finalmente! Estava esperando por voc\xea." Voc\xea quase cai de susto! O gato explica que \xe9 o guardi\xe3o do castelo e que pode mostrar o tesouro secreto.',en:'The cat opens its eyes slowly and says: "Finally! I have been waiting for you." You nearly fall over in shock! The cat explains it is the castle guardian and can show you the secret treasure.'},choices:[{label:{pt:"Seguir o gato m\xe1gico",en:"Follow the magic cat"},next:"castle_end_treasure"},{label:{pt:"Perguntar como o gato fala",en:"Ask how the cat speaks"},next:"castle_wizard"}]},{id:"castle_golden_room",emoji:"✨",text:{pt:'A chave dourada abre uma porta secreta no jardim! Dentro h\xe1 um quarto redondo cheio de estrelas brilhando no tecto, mesmo durante o dia. Uma nota diz: "Este quarto pertence a quem \xe9 curioso e corajoso."',en:'The golden key opens a secret door in the garden! Inside is a round room full of stars shining on the ceiling, even during the day. A note reads: "This room belongs to whoever is curious and brave."'},choices:[{label:{pt:"Deitar e observar as estrelas",en:"Lie down and watch the stars"},next:"castle_end_stars"},{label:{pt:"Procurar mais segredos no quarto",en:"Search for more secrets in the room"},next:"castle_end_treasure"}]},{id:"castle_witch",emoji:"\uD83E\uDDD9‍♀️",text:{pt:'A velhinha desce pelo jardim e se apresenta: "Sou a Bruxinha Margarida! Cuido deste castelo h\xe1 200 anos." Ela sorri: "Mas estou t\xe3o sozinha... Queres ficar para um ch\xe1 e me contar hist\xf3rias do mundo l\xe1 fora?"',en:'The little old lady comes down through the garden and introduces herself: "I am Witch Marguerite! I have been looking after this castle for 200 years." She smiles: "But I am so lonely... Will you stay for tea and tell me stories from the outside world?"'},choices:[{label:{pt:"Ficar para o ch\xe1 e fazer amizade",en:"Stay for tea and make a friend"},next:"castle_end_friends"},{label:{pt:"Entrar e explorar o castelo dela",en:"Go in and explore her castle"},next:"castle_end_stars"}]},{id:"castle_spell",emoji:"\uD83E\uDE84",text:{pt:"O livro ensina um feiti\xe7o simples de luz. Voc\xea segue as instru\xe7\xf5es e de repente a palma da sua m\xe3o brilha! A magia funciona! O castelo inteiro se ilumina e voc\xea v\xea um mapa secreto desenhado no ch\xe3o.",en:"The book teaches a simple light spell. You follow the instructions and suddenly your palm glows! The magic works! The whole castle lights up and you see a secret map drawn on the floor."},choices:[{label:{pt:"Seguir o mapa at\xe9 o tesouro",en:"Follow the map to the treasure"},next:"castle_end_treasure"},{label:{pt:"Guardar o mapa para voltar depois",en:"Keep the map and come back later"},next:"castle_end_stars"}]},{id:"castle_dragon",emoji:"\uD83D\uDC09",text:{pt:"O livro se abre numa p\xe1gina com um drag\xe3o pequenino desenhado. De repente o drag\xe3o sai do livro! Mas \xe9 muito pequeno — cabe na sua m\xe3o. Ele ronrona como um gatinho e se torna seu amigo.",en:"The book opens to a page with a tiny dragon drawn on it. Suddenly the dragon leaps out of the book! But it is very tiny — small enough to fit in your hand. It purrs like a kitten and becomes your friend."},choices:[{label:{pt:"Levar o drag\xe3o em casa como animal de estima\xe7\xe3o",en:"Take the dragon home as a pet"},next:"castle_end_friends"},{label:{pt:"Pedir ao drag\xe3o para mostrar o castelo",en:"Ask the dragon to show you the castle"},next:"castle_end_treasure"}]},{id:"castle_wizard",emoji:"\uD83E\uDDD9",text:{pt:'Voc\xea encontra o Mago do Castelo na torre mais alta. \xc9 um senhor alegre com barba azul e chap\xe9u de estrelas. Ele fica muito feliz com sua visita: "N\xe3o recebia visitantes h\xe1 s\xe9culos! Vou te ensinar um feiti\xe7o de presente!"',en:"You find the Castle Wizard in the tallest tower. He is a jolly gentleman with a blue beard and a star-covered hat. He is thrilled by your visit: \"I haven't had visitors in centuries! I'll teach you a spell as a gift!\""},choices:[{label:{pt:"Aprender o feiti\xe7o e explorar o castelo",en:"Learn the spell and explore the castle"},next:"castle_end_stars"},{label:{pt:"Convidar o mago para jantar na sua casa",en:"Invite the wizard to dinner at your home"},next:"castle_end_friends"}]},{id:"castle_end_treasure",emoji:"\uD83D\uDC8E",text:{pt:"Voc\xea descobriu o Tesouro do Castelo Misterioso! Ba\xfas cheios de joias coloridas, livros de magia e brinquedos encantados que nunca existiram antes. O mago diz que tudo pertence a voc\xea porque voc\xea foi corajoso e curioso. Que aventura incr\xedvel!",en:"You discovered the Treasure of the Mysterious Castle! Chests full of colourful jewels, magic books and enchanted toys that have never existed before. The wizard says it all belongs to you because you were brave and curious. What an incredible adventure!"},isEnding:!0,endingType:"good"},{id:"castle_end_friends",emoji:"\uD83E\uDD1D",text:{pt:"Voc\xea fez os melhores amigos do mundo neste castelo! A Bruxinha Margarida, o Mago da Barba Azul, o gato falante e at\xe9 um drag\xe3ozinho. Eles te convidam para voltar sempre. \xc0s vezes os maiores tesouros s\xe3o as amizades que fazemos!",en:"You made the best friends in the world in this castle! Witch Marguerite, the Blue-Beard Wizard, the talking cat, and even a tiny dragon. They invite you to come back whenever you like. Sometimes the greatest treasures are the friendships we make!"},isEnding:!0,endingType:"good"},{id:"castle_end_stars",emoji:"\uD83C\uDF0C",text:{pt:"Voc\xea descobre o segredo mais bonito do castelo: um quarto com um telesc\xf3pio m\xe1gico que mostra n\xe3o s\xf3 as estrelas, mas tamb\xe9m as hist\xf3rias que acontecem nelas. Voc\xea fica t\xe3o encantado que decide voltar todos os dias para aprender mais sobre o universo.",en:"You discover the most beautiful secret of the castle: a room with a magical telescope that shows not just stars but also the stories happening in them. You are so enchanted that you decide to come back every day to learn more about the universe."},isEnding:!0,endingType:"neutral"}]},{id:"space",emoji:"\uD83D\uDE80",title:{pt:"Miss\xe3o Espacial",en:"Space Mission"},description:{pt:"S\xea o capit\xe3o de uma nave espacial e descobre planetas incr\xedveis e seres amig\xe1veis.",en:"Be the captain of a spaceship and discover incredible planets and friendly beings."},color:"#1e6fa8",totalEndings:4,scenes:[{id:"space_start",emoji:"\uD83D\uDE80",text:{pt:"Voc\xea \xe9 o capit\xe3o da nave espacial Estrela Dourada! A nave est\xe1 a orbitar um planeta desconhecido de cor roxa. Os sensores detectam vida l\xe1 em baixo, mas tamb\xe9m um sinal de socorro vindo de uma lua pr\xf3xima.",en:"You are the captain of the spaceship Golden Star! The ship is orbiting an unknown purple planet. Sensors detect life below, but also a distress signal coming from a nearby moon."},choices:[{label:{pt:"Descer ao planeta roxo",en:"Land on the purple planet"},next:"space_planet"},{label:{pt:"Ir at\xe9 \xe0 lua do sinal de socorro",en:"Head to the moon with the distress signal"},next:"space_moon"},{label:{pt:"Analisar melhor os dados primeiro",en:"Analyse the data more carefully first"},next:"space_analyse"}]},{id:"space_planet",emoji:"\uD83E\uDE90",text:{pt:"O planeta roxo \xe9 cheio de plantas gigantes que brilham de noite! Criaturas pequenas e amig\xe1veis chamadas Puffs correm ao seu encontro. Elas falam numa l\xedngua estranha mas parecem muito alegres por te ver.",en:"The purple planet is full of giant plants that glow at night! Small, friendly creatures called Puffs come running towards you. They speak a strange language but seem very happy to see you."},choices:[{label:{pt:"Tentar comunicar com os Puffs",en:"Try to communicate with the Puffs"},next:"space_puffs"},{label:{pt:"Explorar a floresta brilhante",en:"Explore the glowing forest"},next:"space_forest"}]},{id:"space_moon",emoji:"\uD83C\uDF15",text:{pt:"A lua tem uma superf\xedcie cinzenta e cheia de crateras. O sinal vem de uma c\xfapula de vidro escondida atr\xe1s de uma colina de pedra. Dentro, voc\xea v\xea um rob\xf4 pequenino que acena para voc\xea!",en:"The moon has a grey surface full of craters. The signal comes from a glass dome hidden behind a stone hill. Inside, you spot a tiny robot waving at you!"},choices:[{label:{pt:"Entrar na c\xfapula para ajudar o rob\xf4",en:"Enter the dome to help the robot"},next:"space_robot"},{label:{pt:"Pedir refor\xe7os antes de entrar",en:"Call for backup before entering"},next:"space_analyse"}]},{id:"space_analyse",emoji:"\uD83D\uDCBB",text:{pt:"Voc\xea estuda os dados com cuidado. Os computadores da nave revelam uma surpresa: o planeta roxo e a lua est\xe3o conectados! Um t\xfanel subterr\xe2neo liga os dois. Algu\xe9m — ou algo — mora nos dois lugares ao mesmo tempo!",en:"You study the data carefully. The ship's computers reveal a surprise: the purple planet and the moon are connected! An underground tunnel links the two. Someone — or something — lives in both places at once!"},choices:[{label:{pt:"Ir ao planeta para procurar a entrada do t\xfanel",en:"Go to the planet to look for the tunnel entrance"},next:"space_tunnel"},{label:{pt:"Mandar uma mensagem amig\xe1vel pelo r\xe1dio",en:"Send a friendly message by radio"},next:"space_radio"}]},{id:"space_puffs",emoji:"\uD83D\uDC7D",text:{pt:"Com gestos e sorrisos, voc\xea come\xe7a a aprender a l\xedngua dos Puffs! Eles se chamam Bloop, Fleep e Zoop. Eles explicam que s\xe3o os guardi\xf5es de uma semente especial que pode crescer em qualquer planeta do universo.",en:"With gestures and smiles, you begin to learn the Puffs' language! They are called Bloop, Fleep and Zoop. They explain they are guardians of a special seed that can grow on any planet in the universe."},choices:[{label:{pt:"Receber a semente como presente",en:"Accept the seed as a gift"},next:"space_end_seeds"},{label:{pt:"Ajud\xe1-los a plantar a semente num novo planeta",en:"Help them plant the seed on a new planet"},next:"space_end_friendship"}]},{id:"space_forest",emoji:"\uD83C\uDF3F",text:{pt:"A floresta brilhante \xe9 m\xe1gica! As plantas emitem sons musicais ao serem tocadas. Voc\xea descobre que toda a floresta \xe9 um instrumento musical gigante. De repente, uma melodia incr\xedvel come\xe7a a tocar quando voc\xea toca as plantas na ordem certa.",en:"The glowing forest is magical! The plants make musical sounds when touched. You discover the whole forest is one giant musical instrument. Suddenly, an incredible melody begins to play when you touch the plants in the right order."},choices:[{label:{pt:"Gravar a m\xfasica para levar para casa",en:"Record the music to take home"},next:"space_end_music"},{label:{pt:"Chamar os Puffs para dan\xe7ar",en:"Call the Puffs to come dance"},next:"space_end_friendship"}]},{id:"space_robot",emoji:"\uD83E\uDD16",text:{pt:"O rob\xf4 se chama R-7 e ficou preso na c\xfapula h\xe1 50 anos quando a sua nave avariou. Ele ficou a estudar as estrelas sozinho todo esse tempo. Est\xe1 t\xe3o feliz que come\xe7a a dan\xe7ar! Ele tem mapas de 1000 planetas desconhecidos!",en:"The robot is called R-7 and got stuck in the dome 50 years ago when its ship broke down. It has been studying the stars alone all that time. It is so happy that it starts dancing! It has maps of 1000 unknown planets!"},choices:[{label:{pt:"Levar o R-7 a bordo da sua nave",en:"Bring R-7 aboard your ship"},next:"space_end_friendship"},{label:{pt:"Usar os mapas para explorar novos planetas juntos",en:"Use the maps to explore new planets together"},next:"space_end_exploration"}]},{id:"space_tunnel",emoji:"\uD83D\uDD73️",text:{pt:"Voc\xea encontra a entrada do t\xfanel escondida debaixo de uma rocha enorme. \xc9 um tubo de vidro que brilha de azul por dentro. Ao entrar, voc\xea escorrega rapidamente at\xe9 um laborat\xf3rio subterr\xe2neo incr\xedvel!",en:"You find the tunnel entrance hidden under an enormous rock. It is a glass tube that glows blue inside. When you enter, you slide quickly down to an incredible underground laboratory!"},choices:[{label:{pt:"Explorar o laborat\xf3rio",en:"Explore the laboratory"},next:"space_end_exploration"},{label:{pt:"Usar o laborat\xf3rio para fazer contacto com outros planetas",en:"Use the lab to make contact with other planets"},next:"space_end_seeds"}]},{id:"space_radio",emoji:"\uD83D\uDCE1",text:{pt:'Voc\xea envia uma mensagem simp\xe1tica: "Ol\xe1, viemos em paz!" Uns segundos depois, recebe uma resposta com m\xfasica! \xc9 uma melodia linda de um ser chamado Cosmo que mora em ambos os mundos e est\xe1 muito curioso sobre a Terra.',en:'You send a friendly message: "Hello, we come in peace!" A few seconds later you receive a reply with music! It is a beautiful melody from a being called Cosmo who lives in both worlds and is very curious about Earth.'},choices:[{label:{pt:"Trocar m\xfasicas e hist\xf3rias com Cosmo",en:"Exchange music and stories with Cosmo"},next:"space_end_music"},{label:{pt:"Convidar Cosmo a visitar a Terra",en:"Invite Cosmo to visit Earth"},next:"space_end_friendship"}]},{id:"space_end_exploration",emoji:"\uD83D\uDDFA️",text:{pt:"Com os mapas incr\xedveis que encontrou, voc\xea se torna o maior explorador espacial de todos os tempos! A sua nave visita centenas de planetas novos e cada um tem maravilhas nunca vistas. Voc\xea escreve um livro que todas as crian\xe7as da gal\xe1xia l\xeaem!",en:"With the incredible maps you found, you become the greatest space explorer of all time! Your ship visits hundreds of new planets and each one has wonders never seen before. You write a book that every child in the galaxy reads!"},isEnding:!0,endingType:"good"},{id:"space_end_friendship",emoji:"\uD83C\uDF08",text:{pt:"Voc\xea faz os melhores amigos do universo: os Puffs Bloop, Fleep e Zoop, o rob\xf4 R-7 e o misterioso Cosmo! Eles visitam a Terra e ficam encantados com o planeta azul. Voc\xeas criam uma alian\xe7a gal\xe1ctica de amizade e aventuras!",en:"You make the best friends in the universe: the Puffs Bloop, Fleep and Zoop, the robot R-7, and the mysterious Cosmo! They visit Earth and are enchanted by the blue planet. Together you create a galactic alliance of friendship and adventures!"},isEnding:!0,endingType:"good"},{id:"space_end_music",emoji:"\uD83C\uDFB5",text:{pt:"Voc\xea traz para a Terra a m\xfasica mais bonita do universo. Quando ela toca, as pessoas ficam em paz e felizes. Cientistas descobrem que a melodia cont\xe9m a linguagem universal que todos os seres do cosmos entendem. Voc\xea mudou o mundo com m\xfasica!",en:"You bring to Earth the most beautiful music in the universe. When it plays, people feel peaceful and happy. Scientists discover the melody contains the universal language that all beings in the cosmos understand. You changed the world with music!"},isEnding:!0,endingType:"neutral"},{id:"space_end_seeds",emoji:"\uD83C\uDF31",text:{pt:"A semente especial dos Puffs cresce em todos os planetas! Em pouco tempo, cada mundo tem uma floresta brilhante e musical. Os Puffs te nomeiam Guardi\xe3o das Sementes do Universo. \xc9 uma responsabilidade enorme, mas voc\xea est\xe1 pronto!",en:"The Puffs' special seed grows on every planet! Soon, every world has a glowing, musical forest. The Puffs name you Guardian of the Universe's Seeds. It is an enormous responsibility, but you are ready!"},isEnding:!0,endingType:"neutral"}]},{id:"island",emoji:"\uD83C\uDF0A",title:{pt:"A Ilha do Tesouro",en:"Treasure Island"},description:{pt:"Segue um mapa antigo at\xe9 uma ilha misteriosa e descobre o que o tesouro realmente \xe9.",en:"Follow an old map to a mysterious island and discover what the treasure really is."},color:"#2d7a4f",totalEndings:3,scenes:[{id:"island_start",emoji:"\uD83D\uDDFA️",text:{pt:"Voc\xea encontrou um velho mapa numa garrafa \xe0 beira-mar! O mapa mostra uma ilha misteriosa com um X marcando onde est\xe1 escondido um tesouro. Voc\xea tem um barco pequeno e dois amigos prontos para a aventura!",en:"You found an old map in a bottle by the sea! The map shows a mysterious island with an X marking where a treasure is hidden. You have a small boat and two friends ready for adventure!"},choices:[{label:{pt:"Seguir o mapa directamente at\xe9 ao X",en:"Follow the map straight to the X"},next:"island_direct"},{label:{pt:"Explorar a ilha primeiro para conhec\xea-la",en:"Explore the island first to get to know it"},next:"island_explore"},{label:{pt:"Perguntar a um pescador local sobre a ilha",en:"Ask a local fisherman about the island"},next:"island_fisherman"}]},{id:"island_direct",emoji:"\uD83E\uDDED",text:{pt:"Voc\xea segue o mapa com cuidado pela floresta tropical. Os sons dos p\xe1ssaros coloridos enchem o ar. De repente, o caminho divide-se em dois: um desce para a praia, o outro sobe pela montanha.",en:"You follow the map carefully through the tropical forest. The sounds of colourful birds fill the air. Suddenly the path splits in two: one goes down to the beach, the other climbs up the mountain."},choices:[{label:{pt:"Ir pela praia",en:"Go along the beach"},next:"island_beach"},{label:{pt:"Subir a montanha",en:"Climb the mountain"},next:"island_mountain"}]},{id:"island_explore",emoji:"\uD83C\uDF34",text:{pt:'Explorando a ilha, voc\xea encontra uma aldeia escondida na floresta! Os moradores s\xe3o crian\xe7as e adultos que vivem ali h\xe1 gera\xe7\xf5es. A anci\xe3 da aldeia olha para o seu mapa e diz: "Conhe\xe7o este tesouro. \xc9 especial!"',en:'Exploring the island, you find a hidden village in the forest! The residents are children and adults who have lived there for generations. The village elder looks at your map and says: "I know this treasure. It is special!"'},choices:[{label:{pt:"Ouvir o que a anci\xe3 sabe sobre o tesouro",en:"Listen to what the elder knows about the treasure"},next:"island_elder"},{label:{pt:"Convidar a aldeia para ir contigo",en:"Invite the village to come with you"},next:"island_together"}]},{id:"island_fisherman",emoji:"\uD83C\uDFA3",text:{pt:'O pescador olha para o mapa e arregalha os olhos. "Ah! Esse \xe9 o Mapa do Capit\xe3o Estrela! Ele escondeu o tesouro aqui h\xe1 300 anos. Mas cuidado com a Lagoa dos Peixes Voadores — eles adoram brincar com viajantes!"',en:'The fisherman looks at the map and his eyes go wide. "Ah! That is Captain Star\'s Map! He hid the treasure here 300 years ago. But beware of the Flying Fish Lagoon — they love to play tricks on travellers!"'},choices:[{label:{pt:"Ir ver a lagoa dos peixes voadores",en:"Go see the flying fish lagoon"},next:"island_lagoon"},{label:{pt:"Pedir ao pescador para guiar voc\xea at\xe9 ao X",en:"Ask the fisherman to guide you to the X"},next:"island_direct"}]},{id:"island_beach",emoji:"\uD83D\uDC1A",text:{pt:'A praia \xe9 lind\xedssima com areia dourada e conchas coloridas. Uma tartaruga gigante dorme na areia. Quando voc\xea passa, ela acorda e fala: "Boa tarde! Procura o tesouro, n\xe3o \xe9? Eu sei onde fica!"',en:'The beach is beautiful with golden sand and colourful shells. A giant turtle is sleeping on the sand. When you walk past, it wakes up and says: "Good afternoon! You are looking for the treasure, aren\'t you? I know where it is!"'},choices:[{label:{pt:"Seguir a tartaruga",en:"Follow the turtle"},next:"island_turtle"},{label:{pt:"Agradecer mas continuar pelo mapa",en:"Thank the turtle but continue with the map"},next:"island_mountain"}]},{id:"island_mountain",emoji:"⛰️",text:{pt:"No topo da montanha, h\xe1 uma vista incr\xedvel de toda a ilha! E voc\xea v\xea claramente onde est\xe1 o X do mapa — uma gruta escondida atr\xe1s de uma cascata. Mas para chegar l\xe1, precisa de atravessar uma ponte de lianas sobre um rio.",en:"At the top of the mountain, there is an incredible view of the whole island! And you can clearly see where the X on the map is — a cave hidden behind a waterfall. But to get there, you need to cross a vine bridge over a river."},choices:[{label:{pt:"Atravessar a ponte de lianas",en:"Cross the vine bridge"},next:"island_cave"},{label:{pt:"Descer pela cascata com uma corda",en:"Climb down by the waterfall with a rope"},next:"island_waterfall"}]},{id:"island_elder",emoji:"\uD83D\uDC75",text:{pt:'A anci\xe3 conta que o tesouro do Capit\xe3o Estrela n\xe3o \xe9 ouro — \xe9 um cofre de sementes raras de plantas que curam qualquer doen\xe7a! "Foram roubadas do nosso povo h\xe1 300 anos. Se as trouver de volta, a nossa aldeia florescer\xe1 de novo!"',en:'The elder explains that Captain Star\'s treasure is not gold — it is a chest of rare seeds from plants that heal any illness! "They were stolen from our people 300 years ago. If you bring them back, our village will flourish again!"'},choices:[{label:{pt:"Prometer devolver o tesouro ao povo da ilha",en:"Promise to return the treasure to the island people"},next:"island_together"},{label:{pt:"Ir buscar o tesouro e partilh\xe1-lo",en:"Go get the treasure and share it"},next:"island_cave"}]},{id:"island_together",emoji:"\uD83D\uDC6B",text:{pt:"Toda a aldeia vai convosco! \xc9 uma festa animada a caminhar pela floresta. As crian\xe7as cantam, os adultos contam hist\xf3rias antigas. Juntos, encontram o caminho at\xe9 \xe0 gruta mais depressa e sem nenhum perigo.",en:"The whole village comes with you! It is a joyful procession through the forest. The children sing, the adults tell old stories. Together, you find the path to the cave faster and without any danger."},choices:[{label:{pt:"Abrir a gruta juntos",en:"Open the cave together"},next:"island_end_village"},{label:{pt:"Deixar a anci\xe3 entrar primeiro",en:"Let the elder enter first"},next:"island_end_village"}]},{id:"island_lagoon",emoji:"\uD83D\uDC1F",text:{pt:'A Lagoa dos Peixes Voadores \xe9 espectacular! Os peixes saltam para fora de \xe1gua e voam pelo ar. Um peixe dourado pousa no seu ombro e cochicha: "Sigo o X do teu mapa — sigo eu!" e voa em frente a guiar o caminho.',en:'The Flying Fish Lagoon is spectacular! The fish leap out of the water and fly through the air. A golden fish lands on your shoulder and whispers: "I follow your map\'s X — I follow! Follow me!" and flies ahead to guide the way.'},choices:[{label:{pt:"Seguir o peixe dourado",en:"Follow the golden fish"},next:"island_cave"},{label:{pt:"Nadar com os peixes voadores primeiro",en:"Swim with the flying fish first"},next:"island_waterfall"}]},{id:"island_turtle",emoji:"\uD83D\uDC22",text:{pt:'A tartaruga leva voc\xea por um caminho secreto pela floresta que nenhum mapa mostra. Em poucos minutos chegam a uma gruta escondida. "Eu guardo este segredo h\xe1 100 anos," diz ela orgulhosa.',en:'The turtle leads you along a secret path through the forest that no map shows. In just a few minutes you arrive at a hidden cave. "I have kept this secret for 100 years," she says proudly.'},choices:[{label:{pt:"Entrar na gruta",en:"Enter the cave"},next:"island_cave"},{label:{pt:"Agradecer e dar \xe0 tartaruga a sua melhor concha",en:"Thank the turtle and give her your best shell"},next:"island_end_friends"}]},{id:"island_cave",emoji:"\uD83C\uDF0A",text:{pt:"A gruta atr\xe1s da cascata \xe9 m\xe1gica! As paredes brilham com pedras coloridas. No centro, sobre um pedestal de coral, repousa o cofre do Capit\xe3o Estrela. Est\xe1 coberto de conchas e estrelas-do-mar adormecidas.",en:"The cave behind the waterfall is magical! The walls shimmer with colourful stones. In the centre, on a coral pedestal, rests Captain Star's chest. It is covered in shells and sleeping starfish."},choices:[{label:{pt:"Abrir o cofre",en:"Open the chest"},next:"island_end_treasure"},{label:{pt:"Ler a inscri\xe7\xe3o gravada no cofre primeiro",en:"Read the inscription carved on the chest first"},next:"island_end_village"}]},{id:"island_waterfall",emoji:"\uD83D\uDCA7",text:{pt:"A cascata forma uma piscina natural linda e fresca. Voc\xea nada at\xe9 ao fundo e descobre um t\xfanel subaqu\xe1tico que leva directamente para dentro da gruta do tesouro! \xc9 o atalho secreto que o Capit\xe3o Estrela usava.",en:"The waterfall forms a beautiful cool natural pool. You swim to the bottom and discover an underwater tunnel leading straight into the treasure cave! It is the secret shortcut that Captain Star used."},choices:[{label:{pt:"Atravessar o t\xfanel subaqu\xe1tico",en:"Swim through the underwater tunnel"},next:"island_end_treasure"},{label:{pt:"Voltar e partilhar a descoberta com a aldeia",en:"Go back and share the discovery with the village"},next:"island_end_village"}]},{id:"island_end_treasure",emoji:"\uD83D\uDCB0",text:{pt:"O cofre est\xe1 cheio de moedas douradas, joias brilhantes e mapas de ilhas secretas ao redor do mundo! Voc\xea decide partilhar o tesouro com a aldeia da ilha e com as fam\xedlias dos pescadores. Toda a gente fica feliz e voc\xea \xe9 declarado Her\xf3i da Ilha!",en:"The chest is full of gold coins, shining jewels and maps of secret islands around the world! You decide to share the treasure with the island village and the fishermen's families. Everyone is happy and you are declared Hero of the Island!"},isEnding:!0,endingType:"good"},{id:"island_end_village",emoji:"\uD83C\uDF3A",text:{pt:"O cofre continha as sementes m\xe1gicas que pertenciam ao povo da ilha! Ao plant\xe1-las, a floresta come\xe7a a florescer com cores que nunca tinham visto. A aldeia organiza uma festa enorme em sua honra e voc\xea \xe9 convidado a ficar para sempre!",en:"The chest contained the magic seeds that belonged to the island people! When planted, the forest begins to bloom with colours never seen before. The village throws a huge party in your honour and you are invited to stay forever!"},isEnding:!0,endingType:"good"},{id:"island_end_friends",emoji:"\uD83D\uDC20",text:{pt:"A tartaruga, os peixes voadores e o povo da ilha tornam-se os seus melhores amigos. Voc\xea volta a visitar a ilha todos os ver\xf5es e cada vez encontra novos segredos escondidos. A ilha \xe9 um lugar m\xe1gico que s\xf3 os cora\xe7\xf5es bons conseguem encontrar.",en:"The turtle, the flying fish and the island people become your best friends. You visit the island every summer and each time you find new hidden secrets. The island is a magical place that only kind hearts can find."},isEnding:!0,endingType:"neutral"}]}],m=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=(0,s.keyframes)`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-12px); }
`,g=(0,s.keyframes)`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,f=(0,s.keyframes)`
  0%   { opacity: 0; transform: scale(0.5); }
  70%  { opacity: 1; transform: scale(1.12); }
  100% { opacity: 1; transform: scale(1); }
`,h=(0,s.keyframes)`
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
`,y=i().button`
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
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.surface};
  }
`,w=i().h1`
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
`,z=i().button`
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
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  animation: ${m} 0.3s ease;
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
`,M=i().h3`
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
  font-size: 12px;
  font-weight: 600;
  padding: 2px ${l.w4.spacing.sm};
  border-radius: 100px;
  margin-top: ${l.w4.spacing.xs};
  background: ${({hasProgress:e})=>e?"rgba(88, 166, 255, 0.15)":"rgba(139, 148, 158, 0.1)"};
  color: ${({hasProgress:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  border: 1px solid ${({hasProgress:e})=>e?"rgba(88, 166, 255, 0.3)":l.w4.colors.border};
`,A=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  animation: ${({exiting:e})=>e?u:m} 0.25s ease forwards;
`,R=i().div`
  font-size: 80px;
  line-height: 1;
  margin-bottom: ${l.w4.spacing.lg};
  animation: ${f} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
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
  animation: ${m} 0.5s ease both;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: ${l.w4.spacing.md};
  }
`,_=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  width: 100%;
`,E=i().button`
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
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
  line-height: ${l.w4.typography.lineHeightBase};
  opacity: 0;
  animation: ${m} 0.25s ease forwards;
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
`,I=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.xl};
  width: 100%;
`,P=i().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,F=i().span`
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
  transition: background 0.2s ease;
`,D=i().span`
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
`,H=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  text-align: center;
  animation: ${m} 0.4s ease;
`,N=(0,s.keyframes)`
  0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
  60%  { opacity: 1; transform: scale(1.2) rotate(8deg); }
  80%  { transform: scale(0.95) rotate(-3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,G=i().div`
  font-size: 100px;
  line-height: 1;
  margin-bottom: ${l.w4.spacing.lg};
  animation: ${N} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
`,Y=i().div`
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
`,V=i().p`
  font-size: 17px;
  line-height: 1.75;
  color: ${l.w4.colors.mainText};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.xl};
  margin-bottom: ${l.w4.spacing.xl};
  min-height: 4em;
  animation: ${m} 0.5s ease both;
  @media (max-width: 768px) {
    font-size: 15px;
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
  transition: background 0.2s ease, transform 0.15s ease;
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
  transition: border-color 0.2s ease, background 0.2s ease;
  &:hover {
    border-color: ${l.w4.colors.accent};
    background: rgba(88, 166, 255, 0.06);
  }
`,U=i().div`
  background: linear-gradient(90deg, #3fb950, #58a6ff);
  background-size: 200% 100%;
  animation: ${h} 2s linear infinite;
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
  animation: ${g} ${({delay:e})=>1.8+e}s ease-in ${({delay:e})=>e}s forwards;
  pointer-events: none;
  z-index: 9999;
`,Q=["#58a6ff","#3fb950","#f78166","#ffa657","#d2a8ff","#79c0ff"];function Z(){let e=Array.from({length:40},(e,o)=>({id:o,left:100*Math.random(),delay:1.2*Math.random(),color:Q[Math.floor(Math.random()*Q.length)]??"#58a6ff",size:6+Math.floor(10*Math.random())}));return(0,t.jsx)(t.Fragment,{children:e.map(e=>(0,t.jsx)(K,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.id))})}let ee=["A","B","C","D"];function eo({lang:e,onBack:o}){let[a,n]=(0,r.useState)({phase:"select"}),[i,s]=(0,r.useState)(d),l=(0,r.useRef)(null),[m,u]=(0,r.useState)(!1),[g,f]=(0,r.useState)(0),h=(0,r.useRef)(null),[N,K]=(0,r.useState)(0),Q="pt"===e?"pt":"en",ea=(0,r.useCallback)(e=>{u(!1),f(e=>e+1),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{u(!0)},600)},[]),et=(0,r.useRef)(null),er=(0,r.useRef)(!1),en=(0,r.useCallback)(e=>{et.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),ei=(0,r.useCallback)(e=>o=>{if(!et.current)return;let a=Math.abs(o.changedTouches[0].clientX-et.current.x),t=Math.abs(o.changedTouches[0].clientY-et.current.y);et.current=null,a>8||t>8||(er.current=!0,e())},[]),es=(0,r.useCallback)(e=>()=>{if(er.current){er.current=!1;return}e()},[]),el=(0,r.useCallback)((e,o)=>{let a=p.find(o=>o.id===e);return a?.scenes.find(e=>e.id===o)},[]),ec=(0,r.useCallback)((o,t)=>{let r=el(o,t);if(r)if(r.isEnding){let a=i[o]??[],l=!a.includes(t),d={...i,[o]:l?[...a,t]:a};if(l){s(d);try{localStorage.setItem(c,JSON.stringify(d))}catch{}}n({phase:"ending",storyId:o,sceneId:t,isNew:l}),ea(r.text["pt"===e?"pt":"en"])}else K(e=>e+1),"scene"===a.phase?(n({...a,exiting:!0}),l.current=setTimeout(()=>{n({phase:"scene",storyId:o,sceneId:t,exiting:!1}),ea(r.text["pt"===e?"pt":"en"])},220)):(n({phase:"scene",storyId:o,sceneId:t,exiting:!1}),ea(r.text["pt"===e?"pt":"en"]))},[el,a,i,ea,e]),ed=(0,r.useCallback)(o=>{let a=p.find(e=>e.id===o);a&&a.scenes[0]&&(K(0),n({phase:"scene",storyId:o,sceneId:a.scenes[0].id,exiting:!1}),ea(a.scenes[0].text["pt"===e?"pt":"en"]))},[ea,e]),ep=(0,r.useCallback)(()=>{l.current&&clearTimeout(l.current),h.current&&clearTimeout(h.current),n({phase:"select"}),K(0),u(!1)},[]);if((0,r.useEffect)(()=>()=>{l.current&&clearTimeout(l.current),h.current&&clearTimeout(h.current)},[]),"select"===a.phase)return(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(w,{children:"pt"===Q?"Aventura de Texto":"Text Adventure"})}),(0,t.jsxs)(v,{children:[(0,t.jsx)(k,{children:"pt"===Q?"Escolhe a tua Aventura":"Choose Your Adventure"}),(0,t.jsx)(j,{children:"pt"===Q?"Selecciona uma hist\xf3ria e toma decis\xf5es que moldam o destino!":"Select a story and make choices that shape the outcome!"}),(0,t.jsx)($,{children:p.map(e=>{let o=(i[e.id]??[]).length,a=o>0,r="pt"===Q?`${o}/${e.totalEndings} finais descobertos`:`${o}/${e.totalEndings} endings found`,n=()=>ed(e.id);return(0,t.jsxs)(z,{accentColor:e.color,onTouchStart:en,onTouchEnd:ei(n),onClick:es(n),children:[(0,t.jsx)(S,{children:e.emoji}),(0,t.jsx)(M,{children:e.title[Q]}),(0,t.jsx)(T,{children:e.description[Q]}),(0,t.jsxs)(C,{hasProgress:a,children:[a?"⭐ ":"○ ",r]})]},e.id)})})]})]});if("scene"===a.phase){let{storyId:e,sceneId:o,exiting:r}=a,n=el(e,o),i=p.find(o=>o.id===e);if(!n||!i)return(0,t.jsx)(x,{children:(0,t.jsx)(v,{children:"pt"===Q?"Cena n\xe3o encontrada.":"Scene not found."})});let s=Math.min(N+1,8);return(0,t.jsxs)(x,{accentColor:i.color,children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{onTouchStart:en,onTouchEnd:ei(ep),onClick:es(ep),children:"pt"===Q?"← Hist\xf3rias":"← Stories"}),(0,t.jsx)(w,{children:i.title[Q]})]}),(0,t.jsx)(v,{children:(0,t.jsxs)(A,{exiting:r,children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(P,{children:[i.emoji," ",(0,t.jsx)(F,{children:i.title[Q]})]}),(0,t.jsx)(L,{children:Array.from({length:8},(e,o)=>(0,t.jsx)(O,{filled:o<s},o))})]}),(0,t.jsx)(R,{children:n.emoji},o),(0,t.jsx)(B,{children:n.text[Q]},g),m&&n.choices&&(0,t.jsx)(_,{children:n.choices.map((o,a)=>{let r=()=>ec(e,o.next);return(0,t.jsxs)(E,{index:a,onTouchStart:en,onTouchEnd:ei(r),onClick:es(r),children:[(0,t.jsx)(D,{children:ee[a]??String(a+1)}),o.label[Q]]},a)})})]})})]})}if("ending"===a.phase){let{storyId:e,sceneId:o,isNew:r}=a,n=el(e,o),s=p.find(o=>o.id===e);if(!n||!s)return(0,t.jsx)(x,{children:(0,t.jsx)(v,{children:"pt"===Q?"Fim n\xe3o encontrado.":"Ending not found."})});let l=n.endingType??"neutral",c="good"===l,d=(i[e]??[]).length,u="pt"===Q?`${d} de ${s.totalEndings} finais encontrados`:`${d} of ${s.totalEndings} endings found`,f=()=>ed(e),h=()=>ep();return(0,t.jsxs)(x,{accentColor:s.color,children:[c&&(0,t.jsx)(Z,{}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{onTouchStart:en,onTouchEnd:ei(ep),onClick:es(ep),children:"pt"===Q?"← Hist\xf3rias":"← Stories"}),(0,t.jsx)(w,{children:s.title[Q]})]}),(0,t.jsx)(v,{children:(0,t.jsxs)(H,{children:[r&&(0,t.jsx)(U,{children:"pt"===Q?"\uD83C\uDF1F Novo final descoberto!":"\uD83C\uDF1F New ending discovered!"}),(0,t.jsx)(G,{children:n.emoji}),(0,t.jsx)(Y,{endingType:l,children:c?"pt"===Q?"\uD83C\uDF89 Final Feliz!":"\uD83C\uDF89 Happy Ending!":"pt"===Q?"✨ Final Alternativo":"✨ Alternative Ending"}),(0,t.jsx)(q,{children:c?"pt"===Q?"Que aventura incr\xedvel!":"What an incredible adventure!":"pt"===Q?"Uma hist\xf3ria para recordar.":"A story to remember."}),(0,t.jsx)(V,{children:n.text[Q]},g),m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(C,{hasProgress:d>0,style:{marginBottom:24},children:[d>0?"⭐ ":"○ ",u]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(J,{onTouchStart:en,onTouchEnd:ei(f),onClick:es(f),children:"pt"===Q?"Jogar novamente":"Play again"}),(0,t.jsx)(X,{onTouchStart:en,onTouchEnd:ei(h),onClick:es(h),children:"pt"===Q?"Escolher outra hist\xf3ria":"Choose another story"})]})]})]})})]})}return null}},7350(e,o,a){a.d(o,{t:()=>K});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(246),c=a(5782);let d=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function p(e){for(let o of d){let[a,t,r]=o;if(e[a]&&e[a]===e[t]&&e[a]===e[r])return{winner:e[a],line:o}}return{winner:null,line:null}}function m(e){return e.reduce((e,o,a)=>null===o?[...e,a]:e,[])}let u={title:{pt:"Jogo do Galo",en:"Tic Tac Toe"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},thinking:{pt:"A pensar...",en:"Thinking..."},youWin:{pt:"\uD83C\uDF89 Ganhaste!",en:"\uD83C\uDF89 You win!"},youLose:{pt:"\uD83D\uDE05 Perdeste!",en:"\uD83D\uDE05 You lost!"},draw:{pt:"\uD83E\uDD1D Empate!",en:"\uD83E\uDD1D Draw!"},playAgain:{pt:"Jogar outra vez",en:"Play again"},back:{pt:"← Voltar",en:"← Back"},easy:{pt:"F\xe1cil",en:"Easy"},medium:{pt:"M\xe9dio",en:"Medium"},hard:{pt:"Dif\xedcil",en:"Hard"},wins:{pt:"Vit\xf3rias",en:"Wins"},losses:{pt:"Derrotas",en:"Losses"},draws:{pt:"Empates",en:"Draws"},you:{pt:"Tu",en:"You"},robot:{pt:"Robot",en:"Robot"},vsRobot:{pt:"vs Robot",en:"vs Robot"},vsFriend:{pt:"vs Amigo",en:"vs Friend"},player1:{pt:"Jogador 1",en:"Player 1"},player2:{pt:"Jogador 2",en:"Player 2"},player1Turn:{pt:"Vez do Jogador 1!",en:"Player 1's turn!"},player2Turn:{pt:"Vez do Jogador 2!",en:"Player 2's turn!"},player1Wins:{pt:"\uD83C\uDF89 Jogador 1 ganhou!",en:"\uD83C\uDF89 Player 1 wins!"},player2Wins:{pt:"\uD83C\uDF89 Jogador 2 ganhou!",en:"\uD83C\uDF89 Player 2 wins!"},p1:{pt:"J1",en:"P1"},p2:{pt:"J2",en:"P2"},vsOnline:{pt:"Online",en:"Online"},opponentTurn:{pt:"Vez do advers\xe1rio!",en:"Opponent's turn!"},youWinOnline:{pt:"\uD83C\uDF89 Ganhaste!",en:"\uD83C\uDF89 You win!"},opponentWins:{pt:"\uD83D\uDE05 O advers\xe1rio ganhou!",en:"\uD83D\uDE05 Opponent wins!"},opponentLeft:{pt:"O advers\xe1rio saiu.",en:"Opponent left."},rematchReq:{pt:"Revanche pedida…",en:"Rematch requested…"},rematch:{pt:"Revanche",en:"Rematch"},waitingRematch:{pt:"\xc0 espera da resposta…",en:"Waiting for response…"}},g="\uD83E\uDD16",f="\uD83C\uDF19",h="atlantis-tictactoe-score";function x(){try{let e=localStorage.getItem(h);if(e)return JSON.parse(e)}catch{}return{wins:0,losses:0,draws:0}}let b=(0,s.keyframes)`
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
`,y=(0,s.keyframes)`
  0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
  60%  { transform: scale(1.15) rotate(3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,w=(0,s.keyframes)`
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
`,z=(0,s.keyframes)`
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
`,M=i().div`
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
`,A=i().button`
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
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  background: ${({active:e,color:o})=>e?o+"20":l.w4.colors.surface};
  color: ${({active:e,color:o})=>e?o:l.w4.colors.mainTextMuted};
  border: 1.5px solid ${({active:e,color:o})=>e?o+"60":l.w4.colors.border};
  box-shadow: ${({active:e,color:o})=>e?`0 0 12px ${o}20`:"none"};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}18;
    border-color: ${({color:e})=>e}50;
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,R=i().div`
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
  transition: background 0.2s, color 0.2s;
  background: ${({active:e,color:o})=>e?o+"22":"transparent"};
  color: ${({active:e,color:o})=>e?o:l.w4.colors.mainTextMuted};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}11;
  }
`,_=i().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 20px;
  animation: ${({variant:e})=>"win"===e?v:b} ${({variant:e})=>"win"===e?"0.6s ease-in-out infinite":"0.3s ease"};
  background: ${({variant:e})=>"win"===e?"rgba(63, 185, 80, 0.15)":"lose"===e?"rgba(249, 117, 131, 0.15)":"draw"===e?"rgba(210, 169, 34, 0.15)":"rgba(88, 166, 255, 0.1)"};
  color: ${({variant:e})=>"win"===e?"#3fb950":"lose"===e?"#f97583":"draw"===e?"#d2a922":l.w4.colors.accent};
`,E=i().div`
  position: relative;
`,I=i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background: ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06);
`,P=i().button`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({isWinning:e})=>e?"rgba(63, 185, 80, 0.12)":l.w4.colors.surface};
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  transition: background 0.15s, transform 0.15s, opacity 0.2s;
  font-size: clamp(36px, 8vw, 52px);
  line-height: 1;
  position: relative;
  animation: ${({isWinning:e})=>e?w:"none"} 1s ease-in-out infinite;
  opacity: ${({isThinking:e})=>e?.55:1};

  &:hover:not(:disabled) {
    background: rgba(88, 166, 255, 0.08);
    transform: scale(1.04);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }
`,F=i().span`
  animation: ${({isNew:e})=>e?y:"none"} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
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
`,D=i().span`
  font-size: ${l.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${({color:e})=>e};
  font-variant-numeric: tabular-nums;
  animation: ${({pop:e})=>e?k:"none"} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
`,H=i().span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${l.w4.colors.mainTextMuted};
`,N=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  animation: ${b} 0.3s ease 0.2s both;
`,G=i().button`
  padding: 12px 24px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, border-color 0.2s;

  background: ${({variant:e})=>"primary"===e?"rgba(88, 166, 255, 0.15)":"transparent"};
  color: ${({variant:e})=>"primary"===e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  border: 1px solid ${({variant:e})=>"primary"===e?l.w4.colors.accent+"40":l.w4.colors.border};

  &:hover {
    background: ${({variant:e})=>"primary"===e?"rgba(88, 166, 255, 0.25)":"rgba(255,255,255,0.04)"};
    border-color: ${({variant:e})=>"primary"===e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,Y=i().div`
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
`,V=i().div`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  animation: ${z} 1.2s ease-out forwards;
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
`,U=["#f97583","#58a6ff","#3fb950","#d2a922","#d2a8ff","#79c0ff"];function K({lang:e,onBack:o,canOnline:a}){let n,i,[s,d]=(0,r.useState)(Array(9).fill(null)),[b,y]=(0,r.useState)(null),[w,v]=(0,r.useState)(!0),[$,k]=(0,r.useState)("medium"),[j,z]=(0,r.useState)("bot"),[Q,Z]=(0,r.useState)(x),[ee,eo]=(0,r.useState)(!1),[ea,et]=(0,r.useState)(null),[er]=(0,r.useState)(()=>(0,c.zE)()||("pt"===e?"Jogador":"Player")),[en,ei]=(0,r.useState)("none"),[es,el]=(0,r.useState)(!1),ec=(0,r.useRef)(s);ec.current=s;let ed=(0,r.useCallback)(e=>{switch(e.type){case"guest-joined":em.current.addPlayer({id:e.playerId,name:e.name,isHost:!1}),em.current.sendEvent({type:"host-ack",name:er,playerId:em.current.room?.playerId??"",players:em.current.room?.players??[]});break;case"host-ack":em.current.setConnected(e.name),e.players&&em.current.setPlayers([...e.players,{id:em.current.room?.playerId??"",name:er,isHost:!1}]);break;case"game-state":{let o=e.payload;d(o.board),y(o.lastPlaced),v(em.current.room?.role==="host"?o.isHostTurn:!o.isHostTurn);break}case"game-over":eo(!0);break;case"rematch-request":ei("received");break;case"rematch-accepted":d(Array(9).fill(null)),y(null),v(em.current.room?.role==="host"),eo(!1),ei("none");break;case"player-left":el(!0),eo(!0)}},[er]),ep=(0,c.Ky)({gameId:"tictactoe",playerName:er,onEvent:ed}),em=(0,r.useRef)(ep);em.current=ep;let eu=(0,c.zj)({gameId:"tictactoe",enabled:"online"===j}),{winner:eg,line:ef}=p(s),eh=!eg&&0===m(s).length,ex=(0,r.useCallback)(()=>{d(Array(9).fill(null)),y(null),v("online"!==j||ep.room?.role==="host"),eo(!1),ei("none"),el(!1)},[j,ep.room?.role]);(0,r.useEffect)(()=>{!ee&&(eg||eh)&&(eo(!0),"bot"===j&&(et("X"===eg?"wins":"O"===eg?"losses":"draws"),setTimeout(()=>et(null),500),Z(e=>{let o={...e};return"X"===eg?o.wins++:"O"===eg?o.losses++:o.draws++,localStorage.setItem(h,JSON.stringify(o)),o})))},[eg,eh,ee,j]),(0,r.useEffect)(()=>{if("bot"!==j||w||ee||eg||eh)return;let e=setTimeout(()=>{let e=ec.current,o=function(e,o){let a=m(e);if(0===a.length)return -1;if("easy"===o){if(.7>Math.random())return a[Math.floor(Math.random()*a.length)]}else if("medium"===o&&.3>Math.random())return a[Math.floor(Math.random()*a.length)];let t=-1/0,r=a[0];for(let o of a){e[o]="O";let a=function e(o,a){let{winner:t}=p(o);if("O"===t)return 10;if("X"===t)return -10;let r=m(o);if(0===r.length)return 0;if(a){let a=-1/0;for(let t of r)o[t]="O",a=Math.max(a,e(o,!1)),o[t]=null;return a}{let a=1/0;for(let t of r)o[t]="X",a=Math.min(a,e(o,!0)),o[t]=null;return a}}(e,!1);e[o]=null,a>t&&(t=a,r=o)}return r}([...e],$);if(o>=0){let a=[...e];a[o]="O",d(a),y(o),v(!0)}},500);return()=>clearTimeout(e)},[w,ee,eg,eh,$,j]);let eb=e=>{k(e),ex()},ey=e=>{"online"===j&&ep.room&&ep.leaveRoom(),z(e),el(!1),ei("none"),ex()},ew=()=>{"received"===en?(d(Array(9).fill(null)),y(null),v(ep.room?.role==="host"),eo(!1),ei("none"),ep.sendEvent({type:"rematch-accepted"})):(ei("sent"),ep.sendEvent({type:"rematch-request"}))},ev=o=>u[o]?.[e]??u[o]?.en??o;if("online"===j)if(es)n="lose",i=ev("opponentLeft");else if(eg){let e="X"===eg&&ep.room?.role==="host"||"O"===eg&&ep.room?.role==="guest";n=e?"win":"lose",i=ev(e?"youWinOnline":"opponentWins")}else eh?(n="draw",i=ev("draw")):(n="turn",i=ev(w?"yourTurn":"opponentTurn"));else"2p"===j?"X"===eg?(n="win",i=ev("player1Wins")):"O"===eg?(n="win",i=ev("player2Wins")):eh?(n="draw",i=ev("draw")):(n="turn",i=ev(w?"player1Turn":"player2Turn")):"X"===eg?(n="win",i=ev("youWin")):"O"===eg?(n="lose",i=ev("youLose")):eh?(n="draw",i=ev("draw")):(n="turn",i=ev(w?"yourTurn":"thinking"));let e$=new Set(ef??[]),ek="bot"===j?"X"===eg:!!eg,ej="bot"===j&&!w&&!ee,ez=(0,r.useMemo)(()=>ek?Array.from({length:12},(e,o)=>({left:10+80*Math.random(),delay:.5*Math.random(),color:U[o%U.length]})):[],[ek]),eS=(0,r.useMemo)(()=>{if(!ef)return null;let e=Math.min(120,Math.max(80,.2*window.innerWidth)),o=o=>{let a=Math.floor(o/3);return{x:8+o%3*(e+8)+e/2,y:8+a*(e+8)+e/2}},a=o(ef[0]),t=o(ef[2]),r=t.x-a.x,n=t.y-a.y,i=Math.sqrt(r*r+n*n),s=180/Math.PI*Math.atan2(n,r);return{left:`${a.x}px`,top:`${a.y-3}px`,width:`${i}px`,transform:`rotate(${s}deg)`}},[ef]),eM="bot"===j?"X"===eg?"#3fb950":"#f97583":"X"===eg?"#58a6ff":"#d2a8ff";return(0,t.jsxs)(S,{children:[(0,t.jsxs)(M,{children:[(0,t.jsxs)(T,{children:["❌ ⭕ ",ev("title")]}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(A,{active:"bot"===j,color:l.w4.colors.accent,onClick:()=>ey("bot"),children:["\uD83E\uDD16 ",ev("vsRobot")]}),(0,t.jsxs)(A,{active:"2p"===j,color:"#d2a8ff",onClick:()=>ey("2p"),children:["\uD83D\uDC6B ",ev("vsFriend")]}),a&&(0,t.jsxs)(A,{active:"online"===j,color:"#3fb950",onClick:()=>ey("online"),children:["\uD83C\uDF10 ",ev("vsOnline")]})]}),"bot"===j&&(0,t.jsxs)(R,{children:[(0,t.jsx)(B,{active:"easy"===$,color:"#3fb950",onClick:()=>eb("easy"),children:ev("easy")}),(0,t.jsx)(B,{active:"medium"===$,color:"#d2a922",onClick:()=>eb("medium"),children:ev("medium")}),(0,t.jsx)(B,{active:"hard"===$,color:"#f97583",onClick:()=>eb("hard"),children:ev("hard")})]})]}),"online"===j&&!ep.room?.connected&&(0,t.jsx)(c.XB,{lang:e,room:ep.room,error:ep.error,availableRooms:eu.rooms,onCreateRoom:()=>{let{code:e,roomName:o}=ep.createRoom();eu.publishRoom({code:e,roomName:o,hostName:er,playerCount:1})},onJoinRoom:e=>{ep.joinRoom(e)},onLeaveRoom:()=>{eu.unpublishRoom(),ep.leaveRoom(),el(!1)}}),("online"!==j||ep.room?.connected)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{children:"online"===j?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(q,{children:[ep.room?.role==="host"?"⭐":f," = ",ev("you")," (",ep.room?.playerName,")"]}),(0,t.jsxs)(q,{children:[ep.room?.role==="host"?f:"⭐"," = ",ep.room?.opponentName??"?"]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(q,{children:["⭐"," = ",ev("2p"===j?"player1":"you")]}),(0,t.jsxs)(q,{children:["2p"===j?f:g," = ",ev("2p"===j?"player2":"robot")]})]})}),(0,t.jsxs)(_,{variant:n,children:[i,ej&&(0,t.jsxs)(J,{children:[(0,t.jsx)(X,{delay:0}),(0,t.jsx)(X,{delay:.2}),(0,t.jsx)(X,{delay:.4})]})]}),(0,t.jsxs)(E,{children:[ez.map((e,o)=>(0,t.jsx)(V,{left:e.left,delay:e.delay,color:e.color},o)),eS&&(0,t.jsx)(W,{x1:0,y1:0,x2:0,y2:0,color:eM,style:eS}),(0,t.jsx)(I,{children:s.map((e,o)=>(0,t.jsx)(P,{isWinning:e$.has(o),isThinking:ej&&!e,disabled:!!e||ee||"bot"===j&&!w||"online"===j&&!w,onClick:()=>(e=>{if(s[e]||ee||"bot"===j&&!w)return;if("online"===j){if(!ep.room?.connected||!w)return;let o="host"===ep.room.role?"X":"O",a=[...s];a[e]=o;let t="host"!==ep.room.role;d(a),y(e),v(!1),ep.sendEvent({type:"game-state",payload:{board:a,isHostTurn:t,lastPlaced:e}});let r=p(a),n=m(a);if(r.winner||0===n.length){eo(!0);let e="X"===r.winner?"host":"O"===r.winner?"guest":"draw";ep.sendEvent({type:"game-over",winner:e})}return}let o=[...s];o[e]=w?"X":"O",d(o),y(e),v(!w)})(o),"aria-label":`Cell ${Math.floor(o/3)+1},${o%3+1}${e?`: ${e}`:""}`,children:e&&(0,t.jsx)(F,{isNew:o===b,children:e?"online"===j?"X"===e?"⭐":f:"X"===e?"⭐":"2p"===j?f:g:null})},o))})]}),"bot"===j&&(0,t.jsxs)(L,{children:[(0,t.jsxs)(O,{color:"#3fb950",children:[(0,t.jsx)(D,{color:"#3fb950",pop:"wins"===ea,children:Q.wins}),(0,t.jsx)(H,{children:ev("wins")})]}),(0,t.jsxs)(O,{color:"#d2a922",children:[(0,t.jsx)(D,{color:"#d2a922",pop:"draws"===ea,children:Q.draws}),(0,t.jsx)(H,{children:ev("draws")})]}),(0,t.jsxs)(O,{color:"#f97583",children:[(0,t.jsx)(D,{color:"#f97583",pop:"losses"===ea,children:Q.losses}),(0,t.jsx)(H,{children:ev("losses")})]})]}),ee&&"online"!==j&&(0,t.jsx)(N,{children:(0,t.jsx)(G,{variant:"primary",onClick:ex,children:ev("playAgain")})}),ee&&"online"===j&&!es&&(0,t.jsx)(N,{children:"sent"===en?(0,t.jsx)(G,{variant:"ghost",children:ev("waitingRematch")}):"received"===en?(0,t.jsxs)(G,{variant:"primary",onClick:ew,children:[ev("rematch")," ✓"]}):(0,t.jsx)(G,{variant:"primary",onClick:ew,children:ev("rematch")})}),ee&&"online"===j&&es&&(0,t.jsx)(N,{children:(0,t.jsx)(G,{variant:"primary",onClick:()=>{ep.leaveRoom(),ex()},children:ev("playAgain")})})]})]})}},1234(e,o,a){a.d(o,{f:()=>oj});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(2799),l=a(9753);let c=[{id:"vogais",title:"Vogais",subtitle:"A \xb7 E \xb7 I \xb7 O \xb7 U",icon:"\uD83D\uDD24",color:"#a855f7",cards:[{id:"a",letter:"A",emoji:"\uD83D\uDC1D",word:"Abelha",hint:"Avi\xe3o \xb7 Anel \xb7 Arco \xb7 \xc1rvore"},{id:"e",letter:"E",emoji:"\uD83D\uDC18",word:"Elefante",hint:"Estrela \xb7 Escada \xb7 Erva \xb7 Espada"},{id:"i",letter:"I",emoji:"\uD83C\uDFDD️",word:"Ilha",hint:"Iglu \xb7 Igreja \xb7 \xcdris \xb7 Inseto"},{id:"o",letter:"O",emoji:"\uD83D\uDC11",word:"Ovelha",hint:"Ovo \xb7 Olho \xb7 Ouri\xe7o \xb7 Ouro"},{id:"u",letter:"U",emoji:"\uD83C\uDF47",word:"Uva",hint:"Urso \xb7 Unhas \xb7 \xdanico \xb7 \xdatil"}]},{id:"silabas-b",title:"Letra B",subtitle:"BA \xb7 BE \xb7 BI \xb7 BO \xb7 BU",icon:"\uD83C\uDD71️",color:"#3b82f6",cards:[{id:"ba",letter:"BA",emoji:"⛵",word:"Barco",hint:"Bala \xb7 Bater \xb7 Baile \xb7 Banana"},{id:"be",letter:"BE",emoji:"\uD83D\uDC76",word:"Beb\xe9",hint:"Belo \xb7 Beber \xb7 Ber\xe7o \xb7 Beleza"},{id:"bi",letter:"BI",emoji:"\uD83D\uDEB2",word:"Bicicleta",hint:"Bicho \xb7 Bico \xb7 Bingo \xb7 Biscoito"},{id:"bo",letter:"BO",emoji:"⚽",word:"Bola",hint:"Boca \xb7 Bolo \xb7 Bosque \xb7 Borboleta"},{id:"bu",letter:"BU",emoji:"\uD83E\uDECF",word:"Burro",hint:"Buzina \xb7 Bufo \xb7 B\xfazio \xb7 Bucha"}]},{id:"silabas-c",title:"Letra C",subtitle:"CA \xb7 CE \xb7 CI \xb7 CO \xb7 CU",icon:"\uD83D\uDC31",color:"#f97316",cards:[{id:"ca",letter:"CA",emoji:"\uD83C\uDFE0",word:"Casa",hint:"Cama \xb7 C\xe3o \xb7 Carro \xb7 Caracol"},{id:"ce",letter:"CE",emoji:"\uD83E\uDD8C",word:"Cervo",hint:"Cedo \xb7 Cereja \xb7 Cesta \xb7 Cebola"},{id:"ci",letter:"CI",emoji:"\uD83E\uDDA2",word:"Cisne",hint:"Cidade \xb7 Cinto \xb7 Cinema \xb7 Cinco"},{id:"co",letter:"CO",emoji:"\uD83D\uDC30",word:"Coelho",hint:"Copo \xb7 Corda \xb7 Coroa \xb7 Comida"},{id:"cu",letter:"CU",emoji:"\uD83E\uDE79",word:"Curativo",hint:"Cubo \xb7 Cuidado \xb7 Curva \xb7 Cultura"}]},{id:"silabas-d",title:"Letra D",subtitle:"DA \xb7 DE \xb7 DI \xb7 DO \xb7 DU",icon:"\uD83E\uDDB7",color:"#06b6d4",cards:[{id:"da",letter:"DA",emoji:"\uD83D\uDC83",word:"Dan\xe7a",hint:"Data \xb7 Dado \xb7 Dama \xb7 Dama"},{id:"de",letter:"DE",emoji:"\uD83E\uDDB7",word:"Dente",hint:"Dedo \xb7 Descanso \xb7 Devagar \xb7 Dezembro"},{id:"di",letter:"DI",emoji:"\uD83D\uDCB0",word:"Dinheiro",hint:"Dia \xb7 Dinossauro \xb7 Direto \xb7 Disco"},{id:"do",letter:"DO",emoji:"\uD83E\uDD12",word:"Doente",hint:"Doce \xb7 Dormir \xb7 Dois \xb7 Domino"},{id:"du",letter:"DU",emoji:"\uD83D\uDEBF",word:"Duche",hint:"Duro \xb7 Duende \xb7 Duna \xb7 Duplo"}]},{id:"silabas-f",title:"Letra F",subtitle:"FA \xb7 FE \xb7 FI \xb7 FO \xb7 FU",icon:"\uD83C\uDF38",color:"#ec4899",cards:[{id:"fa",letter:"FA",emoji:"\uD83D\uDDE3️",word:"Falar",hint:"Faca \xb7 Fada \xb7 Fam\xedlia \xb7 Farinha"},{id:"fe",letter:"FE",emoji:"\uD83D\uDE0A",word:"Feliz",hint:"Feno \xb7 Ferro \xb7 Festa \xb7 Fevereiro"},{id:"fi",letter:"FI",emoji:"\uD83E\uDDF5",word:"Fio",hint:"Filho \xb7 Figo \xb7 Fila \xb7 Fim"},{id:"fo",letter:"FO",emoji:"\uD83D\uDCF8",word:"Foto",hint:"Fogo \xb7 Folha \xb7 Forno \xb7 Formiga"},{id:"fu",letter:"FU",emoji:"⽕",word:"Fumo",hint:"Futebol \xb7 Furo \xb7 Futuro \xb7 Fungo"}]},{id:"silabas-g",title:"Letra G",subtitle:"GA \xb7 GE \xb7 GI \xb7 GO \xb7 GU",icon:"\uD83D\uDC31",color:"#84cc16",cards:[{id:"ga",letter:"GA",emoji:"\uD83D\uDC31",word:"Gato",hint:"Galinha \xb7 Ganso \xb7 Garfo \xb7 Gavi\xe3o"},{id:"ge",letter:"GE",emoji:"\uD83E\uDDCA",word:"Gelo",hint:"Gente \xb7 Gelado \xb7 Gengibre \xb7 Gesto"},{id:"gi",letter:"GI",emoji:"\uD83C\uDF3B",word:"Girassol",hint:"Girafa \xb7 Gin\xe1sio \xb7 Gigante \xb7 Gira"},{id:"go",letter:"GO",emoji:"\uD83D\uDCA7",word:"Gota",hint:"Gordo \xb7 Gorila \xb7 Golfe \xb7 Governo"},{id:"gu",letter:"GU",emoji:"\uD83C\uDF02",word:"Guarda-chuva",hint:"Guitarra \xb7 Guloso \xb7 Guerra \xb7 Guia"}]},{id:"silabas-l",title:"Letra L",subtitle:"LA \xb7 LE \xb7 LI \xb7 LO \xb7 LU",icon:"\uD83C\uDF19",color:"#8b5cf6",cards:[{id:"la",letter:"LA",emoji:"\uD83C\uDFDE️",word:"Lago",hint:"Lata \xb7 Lavar \xb7 Laranja \xb7 Lagarto"},{id:"le",letter:"LE",emoji:"\uD83E\uDD81",word:"Le\xe3o",hint:"Leite \xb7 Ler \xb7 Lento \xb7 Len\xe7ol"},{id:"li",letter:"LI",emoji:"\uD83D\uDCDA",word:"Livro",hint:"Li\xe7\xe3o \xb7 Liga \xb7 Lim\xe3o \xb7 Lindo"},{id:"lo",letter:"LO",emoji:"\uD83D\uDC3A",word:"Lobo",hint:"Loja \xb7 Logo \xb7 Longe \xb7 Lou\xe7a"},{id:"lu",letter:"LU",emoji:"\uD83C\uDF19",word:"Lua",hint:"Luva \xb7 Luta \xb7 Lugar \xb7 Lume"}]},{id:"silabas-m",title:"Letra M",subtitle:"MA \xb7 ME \xb7 MI \xb7 MO \xb7 MU",icon:"\uD83C\uDF0A",color:"#10b981",cards:[{id:"ma",letter:"MA",emoji:"\uD83C\uDF4E",word:"Ma\xe7\xe3",hint:"Mala \xb7 Mapa \xb7 Mago \xb7 Macaco"},{id:"me",letter:"ME",emoji:"\uD83C\uDF6F",word:"Mel",hint:"Mesa \xb7 Medo \xb7 Meias \xb7 Melancia"},{id:"mi",letter:"MI",emoji:"\uD83D\uDC2D",word:"Rato",hint:"Mina \xb7 Mimo \xb7 Milho \xb7 Mi\xfado"},{id:"mo",letter:"MO",emoji:"\uD83C\uDFCD️",word:"Mota",hint:"Mola \xb7 Monte \xb7 Mochila \xb7 Morada"},{id:"mu",letter:"MU",emoji:"\uD83C\uDFB5",word:"M\xfasica",hint:"Muro \xb7 Muitos \xb7 Mudo \xb7 Mundial"}]},{id:"silabas-n",title:"Letra N",subtitle:"NA \xb7 NE \xb7 NI \xb7 NO \xb7 NU",icon:"\uD83C\uDF19",color:"#6366f1",cards:[{id:"na",letter:"NA",emoji:"\uD83C\uDFCA",word:"Nadar",hint:"Navio \xb7 Nariz \xb7 Natal \xb7 Natureza"},{id:"ne",letter:"NE",emoji:"❄️",word:"Neve",hint:"Neto \xb7 Negro \xb7 Negar \xb7 Necess\xe1rio"},{id:"ni",letter:"NI",emoji:"\uD83D\uDC26",word:"Ninho",hint:"Ninja \xb7 Nitido \xb7 N\xedvel \xb7 Ningu\xe9m"},{id:"no",letter:"NO",emoji:"\uD83C\uDF19",word:"Noite",hint:"Nota \xb7 Nome \xb7 Nobre \xb7 Noivo"},{id:"nu",letter:"NU",emoji:"☁️",word:"Nuvem",hint:"N\xfamero \xb7 Nulo \xb7 Nutri\xe7\xe3o \xb7 Nunca"}]},{id:"silabas-p",title:"Letra P",subtitle:"PA \xb7 PE \xb7 PI \xb7 PO \xb7 PU",icon:"\uD83E\uDD86",color:"#f59e0b",cards:[{id:"pa",letter:"PA",emoji:"\uD83E\uDD86",word:"Pato",hint:"P\xe3o \xb7 Papa \xb7 Palha \xb7 Papagaio"},{id:"pe",letter:"PE",emoji:"\uD83D\uDC1F",word:"Peixe",hint:"Pele \xb7 Pena \xb7 Pedra \xb7 Pensar"},{id:"pi",letter:"PI",emoji:"\uD83C\uDF80",word:"Pipa",hint:"Pico \xb7 Pingo \xb7 Pilha \xb7 Pintainho"},{id:"po",letter:"PO",emoji:"\uD83D\uDC34",word:"Potro",hint:"Povo \xb7 Pote \xb7 Pomba \xb7 Polvo"},{id:"pu",letter:"PU",emoji:"\uD83D\uDC3E",word:"Pulga",hint:"Pulo \xb7 Pura \xb7 Pudim \xb7 Pulseira"}]},{id:"silabas-r",title:"Letra R",subtitle:"RA \xb7 RE \xb7 RI \xb7 RO \xb7 RU",icon:"\uD83C\uDF39",color:"#ef4444",cards:[{id:"ra",letter:"RA",emoji:"\uD83D\uDC38",word:"Rana",hint:"Rato \xb7 Ramo \xb7 Rapaz \xb7 Rainha"},{id:"re",letter:"RE",emoji:"\uD83D\uDC51",word:"Rei",hint:"Rede \xb7 Rel\xf3gio \xb7 Rem\xe9dio \xb7 Regra"},{id:"ri",letter:"RI",emoji:"\uD83D\uDE02",word:"Rir",hint:"Rio \xb7 Rico \xb7 Risco \xb7 Ritmo"},{id:"ro",letter:"RO",emoji:"\uD83C\uDF39",word:"Rosa",hint:"Roda \xb7 Roupa \xb7 Rob\xf4 \xb7 Rochedo"},{id:"ru",letter:"RU",emoji:"\uD83D\uDEE3️",word:"Rua",hint:"Ru\xeddo \xb7 Rural \xb7 Rumo \xb7 Rugido"}]},{id:"silabas-s",title:"Letra S",subtitle:"SA \xb7 SE \xb7 SI \xb7 SO \xb7 SU",icon:"☀️",color:"#f43f5e",cards:[{id:"sa",letter:"SA",emoji:"\uD83D\uDC38",word:"Sapo",hint:"Saco \xb7 Sala \xb7 Salto \xb7 Sapato"},{id:"se",letter:"SE",emoji:"\uD83C\uDF3E",word:"Seco",hint:"Sede \xb7 Seta \xb7 Serra \xb7 Setembro"},{id:"si",letter:"SI",emoji:"\uD83D\uDD14",word:"Sino",hint:"Sinal \xb7 S\xedtio \xb7 Sinto \xb7 Sil\xeancio"},{id:"so",letter:"SO",emoji:"☀️",word:"Sol",hint:"Sopa \xb7 Sono \xb7 Soco \xb7 Sonho"},{id:"su",letter:"SU",emoji:"\uD83E\uDDC3",word:"Sumo",hint:"Sul \xb7 Suave \xb7 Susto \xb7 Subir"}]},{id:"silabas-t",title:"Letra T",subtitle:"TA \xb7 TE \xb7 TI \xb7 TO \xb7 TU",icon:"\uD83D\uDC2F",color:"#0ea5e9",cards:[{id:"ta",letter:"TA",emoji:"\uD83E\uDD41",word:"Tambor",hint:"Tapa \xb7 Tarde \xb7 Tarefa \xb7 Tartaruga"},{id:"te",letter:"TE",emoji:"\uD83E\uDDF8",word:"Teddy",hint:"Tela \xb7 Tempo \xb7 Telefone \xb7 Terra"},{id:"ti",letter:"TI",emoji:"\uD83D\uDC2F",word:"Tigre",hint:"Tio \xb7 Tipo \xb7 T\xedtulo \xb7 Tinha"},{id:"to",letter:"TO",emoji:"\uD83C\uDF45",word:"Tomate",hint:"Toca \xb7 Torta \xb7 Touro \xb7 Torneira"},{id:"tu",letter:"TU",emoji:"\uD83E\uDD88",word:"Tubar\xe3o",hint:"Tubo \xb7 Tudo \xb7 Tulipa \xb7 Turbina"}]},{id:"silabas-v",title:"Letra V",subtitle:"VA \xb7 VE \xb7 VI \xb7 VO \xb7 VU",icon:"\uD83E\uDD8B",color:"#d946ef",cards:[{id:"va",letter:"VA",emoji:"\uD83D\uDC04",word:"Vaca",hint:"Vale \xb7 Varanda \xb7 Vassoura \xb7 Vampiro"},{id:"ve",letter:"VE",emoji:"\uD83D\uDD6F️",word:"Vela",hint:"Vento \xb7 Verde \xb7 Verdade \xb7 Veludo"},{id:"vi",letter:"VI",emoji:"\uD83C\uDF77",word:"Vinho",hint:"Vida \xb7 Vila \xb7 Vis\xe3o \xb7 Viagem"},{id:"vo",letter:"VO",emoji:"✈️",word:"Voar",hint:"Voz \xb7 Volta \xb7 Volume \xb7 Volunt\xe1rio"},{id:"vu",letter:"VU",emoji:"\uD83C\uDF0B",word:"Vulc\xe3o",hint:"Vulner\xe1vel \xb7 Vulto \xb7 Vulgaria"}]},{id:"numeros",title:"N\xfameros",subtitle:"UM \xb7 DOIS \xb7 TR\xcaS...",icon:"\uD83D\uDD22",color:"#f97316",cards:[{id:"um",letter:"UM",emoji:"1️⃣",word:"Um",hint:"Uma \xb7 \xdanico \xb7 Unidade"},{id:"dois",letter:"DOIS",emoji:"2️⃣",word:"Dois",hint:"Duplo \xb7 Segundo \xb7 Par"},{id:"tres",letter:"TR\xcaS",emoji:"3️⃣",word:"Tr\xeas",hint:"Triplo \xb7 Terceiro \xb7 Trio"},{id:"quatro",letter:"QUATRO",emoji:"4️⃣",word:"Quatro",hint:"Qu\xe1druplo \xb7 Quarto \xb7 Quadrado"},{id:"cinco",letter:"CINCO",emoji:"5️⃣",word:"Cinco",hint:"Quinteto \xb7 Quinto \xb7 Pentagon"},{id:"seis",letter:"SEIS",emoji:"6️⃣",word:"Seis",hint:"Sexto \xb7 Sexteto \xb7 Hex\xe1gono"},{id:"sete",letter:"SETE",emoji:"7️⃣",word:"Sete",hint:"S\xe9timo \xb7 Semana \xb7 Arco-\xedris"},{id:"oito",letter:"OITO",emoji:"8️⃣",word:"Oito",hint:"Oitavo \xb7 Polvo \xb7 Ara\xf1a"},{id:"nove",letter:"NOVE",emoji:"9️⃣",word:"Nove",hint:"Nono \xb7 Novembro \xb7 Planeta"},{id:"dez",letter:"DEZ",emoji:"\uD83D\uDD1F",word:"Dez",hint:"D\xe9cimo \xb7 Dezembro \xb7 Dedos"}]},{id:"cores",title:"Cores",subtitle:"VERMELHO \xb7 AZUL \xb7 VERDE...",icon:"\uD83C\uDFA8",color:"#a855f7",cards:[{id:"vermelho",letter:"VERMELHO",emoji:"\uD83D\uDD34",word:"Vermelho",hint:"Rosa \xb7 Tomate \xb7 Ma\xe7\xe3 \xb7 Cora\xe7\xe3o"},{id:"azul",letter:"AZUL",emoji:"\uD83D\uDD35",word:"Azul",hint:"Mar \xb7 C\xe9u \xb7 Mirtilo \xb7 Baleia"},{id:"verde",letter:"VERDE",emoji:"\uD83D\uDFE2",word:"Verde",hint:"Erva \xb7 Folha \xb7 Sapo \xb7 Ma\xe7\xe3"},{id:"amarelo",letter:"AMARELO",emoji:"\uD83D\uDFE1",word:"Amarelo",hint:"Sol \xb7 Banana \xb7 Patinho \xb7 Girassol"},{id:"laranja",letter:"LARANJA",emoji:"\uD83D\uDFE0",word:"Laranja",hint:"Fruta \xb7 Cenoura \xb7 Tigre \xb7 Outono"},{id:"roxo",letter:"ROXO",emoji:"\uD83D\uDFE3",word:"Roxo",hint:"Uva \xb7 Lavanda \xb7 Beringela \xb7 Violeta"},{id:"rosa",letter:"ROSA",emoji:"\uD83C\uDF38",word:"Rosa",hint:"Flor \xb7 Porco \xb7 Flamingo \xb7 Bubble-gum"},{id:"branco",letter:"BRANCO",emoji:"⬜",word:"Branco",hint:"Neve \xb7 Leite \xb7 Nuvem \xb7 Algod\xe3o"},{id:"preto",letter:"PRETO",emoji:"⬛",word:"Preto",hint:"Noite \xb7 Gato \xb7 Pneu \xb7 Carv\xe3o"},{id:"castanho",letter:"CASTANHO",emoji:"\uD83D\uDFEB",word:"Castanho",hint:"Terra \xb7 Madeira \xb7 Chocolate \xb7 Urso"}]},{id:"animais",title:"Animais",subtitle:"Todos os animais",icon:"\uD83E\uDD81",color:"#22c55e",cards:[{id:"cao",letter:"C\xc3O",emoji:"\uD83D\uDC15",word:"C\xe3o",hint:"Canino \xb7 Cachorro \xb7 Companheiro"},{id:"gato2",letter:"GATO",emoji:"\uD83D\uDC08",word:"Gato",hint:"Felino \xb7 Miar \xb7 Bigodes"},{id:"cavalo",letter:"CAVALO",emoji:"\uD83D\uDC34",word:"Cavalo",hint:"Patas \xb7 Crina \xb7 Galope"},{id:"elefante",letter:"ELEFANTE",emoji:"\uD83D\uDC18",word:"Elefante",hint:"Tromba \xb7 Presa \xb7 Savana"},{id:"leao2",letter:"LE\xc3O",emoji:"\uD83E\uDD81",word:"Le\xe3o",hint:"Rei \xb7 Juba \xb7 \xc1frica"},{id:"girafa",letter:"GIRAFA",emoji:"\uD83E\uDD92",word:"Girafa",hint:"Pesco\xe7o \xb7 Alto \xb7 Savana"},{id:"pinguim",letter:"PINGUIM",emoji:"\uD83D\uDC27",word:"Pinguim",hint:"Gelo \xb7 Nadar \xb7 Ant\xe1rtida"},{id:"borboleta",letter:"BORBOLETA",emoji:"\uD83E\uDD8B",word:"Borboleta",hint:"Asas \xb7 Colorida \xb7 Flor"},{id:"coelho2",letter:"COELHO",emoji:"\uD83D\uDC30",word:"Coelho",hint:"Orelhas \xb7 Saltitar \xb7 Cenoura"},{id:"pato2",letter:"PATO",emoji:"\uD83E\uDD86",word:"Pato",hint:"Nadar \xb7 Grasnar \xb7 Lago"}]},{id:"corpo",title:"O Meu Corpo",subtitle:"Cabe\xe7a \xb7 M\xe3os \xb7 P\xe9s...",icon:"\uD83E\uDDD2",color:"#f59e0b",cards:[{id:"cabeca",letter:"CABE\xc7A",emoji:"\uD83E\uDDE0",word:"Cabe\xe7a",hint:"C\xe9rebro \xb7 Pensar \xb7 Cr\xe2nio"},{id:"olhos",letter:"OLHOS",emoji:"\uD83D\uDC40",word:"Olhos",hint:"Ver \xb7 Piscar \xb7 Cores"},{id:"nariz",letter:"NARIZ",emoji:"\uD83D\uDC43",word:"Nariz",hint:"Cheirar \xb7 Respirar \xb7 Espirrar"},{id:"boca",letter:"BOCA",emoji:"\uD83D\uDC44",word:"Boca",hint:"Falar \xb7 Comer \xb7 Sorrir"},{id:"orelhas",letter:"ORELHAS",emoji:"\uD83D\uDC42",word:"Orelhas",hint:"Ouvir \xb7 Sons \xb7 M\xfasica"},{id:"maos",letter:"M\xc3OS",emoji:"\uD83D\uDE4C",word:"M\xe3os",hint:"Tocar \xb7 Escrever \xb7 Bater"},{id:"pes",letter:"P\xc9S",emoji:"\uD83E\uDDB6",word:"P\xe9s",hint:"Andar \xb7 Correr \xb7 Saltar"},{id:"corac\xe3o",letter:"CORA\xc7\xc3O",emoji:"❤️",word:"Cora\xe7\xe3o",hint:"Amor \xb7 Batimento \xb7 Vida"}]},{id:"familia",title:"Fam\xedlia",subtitle:"M\xe3e \xb7 Pai \xb7 Irm\xe3o...",icon:"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66",color:"#e11d48",cards:[{id:"mae",letter:"M\xc3E",emoji:"\uD83D\uDC69",word:"M\xe3e",hint:"Amor \xb7 Cuidar \xb7 Abra\xe7o"},{id:"pai",letter:"PAI",emoji:"\uD83D\uDC68",word:"Pai",hint:"Forte \xb7 Prote\xe7\xe3o \xb7 Brincar"},{id:"irmao",letter:"IRM\xc3O",emoji:"\uD83D\uDC66",word:"Irm\xe3o",hint:"Brincar \xb7 Partilhar \xb7 Fam\xedlia"},{id:"irma",letter:"IRM\xc3",emoji:"\uD83D\uDC67",word:"Irm\xe3",hint:"Amigas \xb7 Brincar \xb7 Fam\xedlia"},{id:"avo",letter:"AV\xd4",emoji:"\uD83D\uDC74",word:"Av\xf4",hint:"S\xe1bio \xb7 Velho \xb7 Hist\xf3rias"},{id:"avo2",letter:"AV\xd3",emoji:"\uD83D\uDC75",word:"Av\xf3",hint:"Mimos \xb7 Cozinhar \xb7 Amor"},{id:"bebe",letter:"BEB\xc9",emoji:"\uD83D\uDC76",word:"Beb\xe9",hint:"Pequeno \xb7 Dormir \xb7 Chorar"},{id:"tio",letter:"TIO",emoji:"\uD83E\uDDD4",word:"Tio",hint:"Divertido \xb7 Familiar \xb7 Natal"}]},{id:"palavras",title:"Palavras",subtitle:"Ler palavras simples",icon:"\uD83D\uDCAC",color:"#14b8a6",cards:[{id:"bola",letter:"BOLA",emoji:"⚽",word:"Bola"},{id:"gato",letter:"GATO",emoji:"\uD83D\uDC31",word:"Gato"},{id:"casa",letter:"CASA",emoji:"\uD83C\uDFE0",word:"Casa"},{id:"pato",letter:"PATO",emoji:"\uD83E\uDD86",word:"Pato"},{id:"leao",letter:"LE\xc3O",emoji:"\uD83E\uDD81",word:"Le\xe3o"},{id:"mesa",letter:"MESA",emoji:"\uD83E\uDE91",word:"Mesa"},{id:"sapo",letter:"SAPO",emoji:"\uD83D\uDC38",word:"Sapo"},{id:"porta",letter:"PORTA",emoji:"\uD83D\uDEAA",word:"Porta"},{id:"livro",letter:"LIVRO",emoji:"\uD83D\uDCDA",word:"Livro"},{id:"cama",letter:"CAMA",emoji:"\uD83D\uDECF️",word:"Cama"},{id:"carro",letter:"CARRO",emoji:"\uD83D\uDE97",word:"Carro"},{id:"flor",letter:"FLOR",emoji:"\uD83C\uDF38",word:"Flor"},{id:"peixe",letter:"PEIXE",emoji:"\uD83D\uDC1F",word:"Peixe"},{id:"arco",letter:"ARCO",emoji:"\uD83C\uDF08",word:"Arco-\xedris"},{id:"borboleta2",letter:"BORBOLETA",emoji:"\uD83E\uDD8B",word:"Borboleta"}]},{id:"frases",title:"Frases",subtitle:"Ler frases simples",icon:"\uD83D\uDCD6",color:"#6366f1",cards:[{id:"f1",letter:"O gato \xe9 bonito.",emoji:"\uD83D\uDC31",word:"O gato \xe9 bonito."},{id:"f2",letter:"A bola \xe9 redonda.",emoji:"⚽",word:"A bola \xe9 redonda."},{id:"f3",letter:"O sapo \xe9 verde.",emoji:"\uD83D\uDC38",word:"O sapo \xe9 verde."},{id:"f4",letter:"A lua brilha \xe0 noite.",emoji:"\uD83C\uDF19",word:"A lua brilha \xe0 noite."},{id:"f5",letter:"O pato nada no lago.",emoji:"\uD83E\uDD86",word:"O pato nada no lago."},{id:"f6",letter:"O le\xe3o \xe9 o rei da selva.",emoji:"\uD83E\uDD81",word:"O le\xe3o \xe9 o rei da selva."},{id:"f7",letter:"A borboleta \xe9 colorida.",emoji:"\uD83E\uDD8B",word:"A borboleta \xe9 colorida."},{id:"f8",letter:"O coelho come cenouras.",emoji:"\uD83D\uDC30",word:"O coelho come cenouras."},{id:"f9",letter:"O sol brilha durante o dia.",emoji:"☀️",word:"O sol brilha durante o dia."},{id:"f10",letter:"Eu gosto de ler livros.",emoji:"\uD83D\uDCDA",word:"Eu gosto de ler livros."}]}],d=[{label:"\uD83D\uDD24 Primeiros Passos",ids:["vogais"]},{label:"\uD83D\uDD21 S\xedlabas",ids:["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"]},{label:"\uD83C\uDF0D O Mundo \xe0 Volta",ids:["animais","cores","numeros","corpo","familia"]},{label:"\uD83D\uDCD6 Ler e Escrever",ids:["palavras","frases"]}],p={"primeira-estrela":{emoji:"⭐",label:"Primeira Estrela!",desc:"Ganhaste a tua primeira estrela"},"primeira-licao":{emoji:"\uD83C\uDF93",label:"Primeira Li\xe7\xe3o!",desc:"Completaste a tua primeira li\xe7\xe3o"},"tres-estrelas":{emoji:"\uD83C\uDF1F",label:"Super Estrela!",desc:"Tiveste 3 estrelas numa li\xe7\xe3o"},coleccionador:{emoji:"\uD83D\uDC8E",label:"Coleccionador!",desc:"10 favoritos guardados"},"vogais-mestre":{emoji:"\uD83D\uDD24",label:"Mestre das Vogais!",desc:"Completaste as Vogais com 3 estrelas"},leitor:{emoji:"\uD83D\uDCD6",label:"Leitor!",desc:"Completaste todas as s\xedlabas"},explorador:{emoji:"\uD83C\uDF0D",label:"Explorador!",desc:"Completaste O Mundo \xe0 Volta"},"numeros-mestre":{emoji:"\uD83D\uDD22",label:"Mestre dos N\xfameros!",desc:"Completaste os N\xfameros com 3 estrelas"}},m=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=(0,s.keyframes)`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`,g=(0,s.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,f=(0,s.keyframes)`
  0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg);  opacity: 1; }
  100% { transform: scale(1)   rotate(0deg);  opacity: 1; }
`,h=i().div`
  min-height: 100%;
  background: #0a0e1a;
  padding-bottom: 48px;
  overflow-y: auto;
  font-family: 'Nunito', 'Segoe UI', system-ui, -apple-system, sans-serif;
`,x=i().div`
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
`,b=i().div`position: relative; z-index: 1;`,y=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,w=i().h1`
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
`,v=i().div`
  font-size: 16px;
  font-weight: 700;
  color: #c4b5fd;
  margin-top: 4px;
  letter-spacing: 0.01em;
`,$=i().div`
  font-size: 72px;
  line-height: 1;
  animation: ${u} 2.5s ease-in-out infinite;
  user-select: none;
  filter: drop-shadow(0 0 16px #a78bfa80);
`,k=i().div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,j=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({color:e})=>e}30;
  border: 2px solid ${({color:e})=>e}70;
  border-radius: 32px;
  padding: 8px 16px;
`,z=i().span`font-size: 20px;`,S=i().span`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,M=i().span`
  font-size: 13px;
  font-weight: 700;
  color: #c4b5fd;
  margin-left: 2px;
`,T=i().div`
  margin-top: 14px;
  background: #ffffff20;
  border-radius: 16px;
  height: 14px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px #00000030;
`,C=i().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, #f59e0b, #ec4899, #a78bfa, #60a5fa);
  background-size: 200% auto;
  border-radius: 16px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${g} 2s linear infinite;
`,A=i().div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #a78bfa;
`,R=i().div`padding: 20px 16px 0;`,B=i().button`
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
  transition: transform 0.15s, box-shadow 0.15s;
  animation: ${m} 0.3s ease both;
  box-shadow: 0 4px 16px #be185d25;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 30px #be185d45;
  }
  &:active { transform: scale(0.97); }
`,_=i().span`font-size: 36px;`,E=i().div`
  flex: 1;
  text-align: left;
`,I=i().div`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,P=i().div`font-size: 14px; font-weight: 600; color: #f9a8d4;`,F=i().div`color: #fb7185; font-size: 24px;`,L=(i().div`
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
  font-size: 12px;
  color: #94a3b8;
  margin-top: 2px;
`,i().button`
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #34d399, #0ea5e9);
  color: #06202a;
  font-size: 12px;
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
  font-size: 10px;
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
`),O=i().div`
  font-size: 15px;
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
`,H=i().button`
  display: flex;
  flex-direction: column;
  padding: 18px 16px 16px;
  background: ${({color:e,done:o})=>o?`linear-gradient(145deg, ${e}40, ${e}20)`:"linear-gradient(145deg, #1e2540, #131726)"};
  border: 2.5px solid ${({color:e,done:o})=>o?e+"90":e+"40"};
  border-radius: 28px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
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
`,N=i().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`,G=i().div`font-size: 48px; line-height: 1; filter: drop-shadow(0 2px 6px #00000040);`,Y=i().div`
  font-size: 11px;
  font-weight: 800;
  color: ${({color:e})=>e};
  background: ${({color:e})=>e}25;
  border: 1.5px solid ${({color:e})=>e}60;
  border-radius: 12px;
  padding: 3px 9px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,q=i().div`
  font-size: 17px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 3px;
  letter-spacing: -0.01em;
`,V=i().div`
  font-size: 12px;
  font-weight: 600;
  color: #7c8db5;
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W=i().div`
  display: flex;
  gap: 4px;
  align-items: center;
`,J=i().span`
  font-size: 20px;
  opacity: ${({lit:e})=>e?1:.18};
  filter: ${({lit:e,color:o})=>e?`drop-shadow(0 0 6px ${o})`:"none"};
  animation: ${({lit:e})=>e?f:"none"} 0.5s ease both;
  animation-delay: ${({delay:e})=>e}ms;
`,X=i().div`
  margin-left: auto;
  font-size: 12px;
  font-weight: 700;
  color: #4b5980;
`,U=i().div`
  margin-top: 4px;
  animation: ${m} 0.4s ease both;
`,K=i().div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Q=i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #1e2540, #131726);
  border: 2px solid #a78bfa50;
  border-radius: 20px;
  padding: 10px 14px;
  box-shadow: 0 4px 12px #a78bfa15;
`,Z=i().span`font-size: 26px;`,ee=i().span`
  font-size: 14px;
  font-weight: 800;
  color: #e2d9ff;
`;function eo({progress:e,speechDebug:o,onSelectLesson:a,onOpenFavorites:r,onSpeechTest:n}){let i=c.length,s=Object.values(e.lessons).filter(e=>e.completed).length,m=Math.round(s/i*100);return(0,t.jsxs)(h,{children:[(0,t.jsx)(x,{children:(0,t.jsxs)(b,{children:[(0,t.jsxs)(y,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(w,{children:"L\xeaBem"}),(0,t.jsx)(v,{children:"Vamos aprender a ler! \uD83D\uDE80✨"})]}),(0,t.jsx)($,{children:"\uD83E\uDD89"})]}),(0,t.jsxs)(k,{children:[(0,t.jsxs)(j,{color:"#f59e0b",children:[(0,t.jsx)(z,{children:"⭐"}),(0,t.jsx)(S,{children:e.totalStars}),(0,t.jsx)(M,{children:"estrelas"})]}),(0,t.jsxs)(j,{color:"#7c3aed",children:[(0,t.jsx)(z,{children:"\uD83C\uDFC6"}),(0,t.jsxs)(S,{children:["N\xedvel ",e.level]})]}),(0,t.jsxs)(j,{color:"#10b981",children:[(0,t.jsx)(z,{children:"\uD83D\uDD25"}),(0,t.jsx)(S,{children:e.streak}),(0,t.jsx)(M,{children:"dias"})]})]}),(0,t.jsx)(T,{children:(0,t.jsx)(C,{pct:m})}),(0,t.jsxs)(A,{children:[(0,t.jsxs)("span",{children:[s," de ",i," li\xe7\xf5es"]}),(0,t.jsxs)("span",{children:[m,"% completo"]})]})]})}),(0,t.jsxs)(R,{children:[!1,(0,t.jsxs)(B,{onClick:r,children:[(0,t.jsx)(_,{children:"❤️"}),(0,t.jsxs)(E,{children:[(0,t.jsx)(I,{children:"Os meus Favoritos"}),(0,t.jsxs)(P,{children:[e.favorites.length," cart\xf5es guardados"]})]}),(0,t.jsx)(F,{children:(0,t.jsx)(l.A,{size:20})})]}),d.map((o,r)=>{let n=o.ids.map(e=>c.find(o=>o.id===e)).filter(Boolean);return(0,t.jsxs)(L,{index:r,children:[(0,t.jsx)(O,{children:o.label}),(0,t.jsx)(D,{children:n.map(o=>{let r=e.lessons[o.id],n=r?.stars??0,i=r?.completed??!1;return(0,t.jsxs)(H,{color:o.color,done:i,onClick:()=>a(o.id),children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(G,{children:o.icon}),i&&(0,t.jsx)(Y,{color:o.color,children:"✓ Feito"})]}),(0,t.jsx)(q,{children:o.title}),(0,t.jsx)(V,{children:o.subtitle}),(0,t.jsxs)(W,{children:[[1,2,3].map(e=>(0,t.jsx)(J,{lit:n>=e,color:o.color,delay:80*e,children:"⭐"},e)),(0,t.jsxs)(X,{children:[o.cards.length," cart\xf5es"]})]})]},o.id)})})]},o.label)}),e.badges.length>0&&(0,t.jsxs)(U,{children:[(0,t.jsx)(O,{children:"\uD83C\uDFC5 Conquistas"}),(0,t.jsx)(K,{children:e.badges.map(e=>{let o=p[e];return o?(0,t.jsxs)(Q,{title:o.desc,children:[(0,t.jsx)(Z,{children:o.emoji}),(0,t.jsx)(ee,{children:o.label})]},e):null})})]})]})]})}var ea=a(7180),et=a(1604),er=a(2709),en=a(2887),ei=a(947),es=a(6680),el=a(246);let ec=null,ed=null,ep=[],em=!1,eu=null,eg="idle",ef=null,eh=new Set,ex=["Joana","Luciana","Eddy","Flo","Grandma","Grandpa","Reed","Rocko","Sandy","Shelley"];function eb(){return/Chrome/i.test(window.navigator.userAgent)&&!/Edg|OPR|CriOS/i.test(window.navigator.userAgent)}function ey(){let e=ek();for(let o of eh)o(e)}function ew(){return 0===ep.length&&(ep=window.speechSynthesis.getVoices()),ep}function ev(){if(ep=window.speechSynthesis.getVoices(),ef&&ep.length>0){let e=ef;ef=null,window.setTimeout(()=>ej(e),0)}return ey(),ep}function e$(){let e=ew();if(eb())return e.find(e=>e.default&&e.lang.toLowerCase().startsWith("pt"))??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??null;for(let o of ex){let a=e.find(e=>e.name.toLowerCase()===o.toLowerCase());if(a)return a}return e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??e.find(e=>e.default)??null}function ek(){if(!("speechSynthesis"in window))return{supported:!1,voicesCount:0,preferredVoiceName:null,preferredVoiceLang:null,availableVoiceNames:[],speaking:!1,pending:!1,paused:!1,lastEvent:eg,lastError:eu};let e=window.speechSynthesis,o=e$(),a=ew();return{supported:!0,voicesCount:a.length,preferredVoiceName:o?.name??null,preferredVoiceLang:o?.lang??null,availableVoiceNames:a.filter(e=>e.lang.toLowerCase().startsWith("pt")).slice(0,6).map(e=>`${e.name} (${e.lang})`),speaking:e.speaking,pending:e.pending,paused:e.paused,lastEvent:eg,lastError:eu}}function ej(e){let o=window.speechSynthesis,a=e.trim(),t=ew();if(!a)return;if(0===t.length){ef=a,eg="waiting-for-voices",ey(),window.setTimeout(()=>{ef===a&&(ef=null,ej(a))},400);return}null!==ed&&(window.clearTimeout(ed),ed=null),eu=null,eg="queued",(ec=new SpeechSynthesisUtterance(a)).lang=eb()?"pt-BR":"pt-PT",ec.rate=.8,ec.pitch=1.1;let r=e$();r&&!eb()?(ec.voice=r,ec.lang=r.lang):r&&(ec.lang=r.lang),ec.onstart=()=>{eg="start",ey()},ec.onend=()=>{ec=null,eg="end",ey()},ec.onerror=e=>{ec=null,eg="error",eu=e.error,ey()},o.resume(),o.speak(ec),ey()}function ez(e){if(!("speechSynthesis"in window))return;let o=window.speechSynthesis,a=e.trim();if(a){if(null!==ed&&(window.clearTimeout(ed),ed=null),o.speaking||o.pending){eg="cancel",o.cancel(),ed=window.setTimeout(()=>ej(a),150),ey();return}ej(a)}}function eS(){ez("Ola, teste de voz do LeBem. Esta e a voz do leitor.")}(0,s.keyframes)`from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); }`;let eM=(0,s.keyframes)`0%,100%{ transform: translateX(0); } 25%{ transform: translateX(-10px); } 75%{ transform: translateX(10px); }`,eT=(0,s.keyframes)`0%{ transform: scale(1); } 50%{ transform: scale(1.2); } 100%{ transform: scale(1); }`,eC=(0,s.keyframes)`from{ transform: translateY(0) scale(1); opacity: 1; } to{ transform: translateY(-120px) scale(0.3) rotate(360deg); opacity: 0; }`,eA=(0,s.keyframes)`0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-12px); }`,eR=i().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${el.w4.colors.mainBg};
  font-family: ${el.w4.typography.fontFamily};
  overflow: hidden;
`,eB=i().div`
  display: flex;
  align-items: center;
  padding: 16px 20px 0;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  flex-shrink: 0;
`,e_=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${el.w4.colors.surface};
  border: 1px solid ${el.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${el.w4.colors.mainText};
  flex-shrink: 0;
  transition: background 0.15s;
  &:hover { background: ${el.w4.colors.sidebarHover}; }
`,eE=i().div`
  font-size: 17px;
  font-weight: 700;
  color: ${el.w4.colors.mainText};
  flex: 1;
`,eI=i().div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`,eP=i().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({active:e,done:o,color:a})=>e?a:o?a+"80":el.w4.colors.border};
  transition: background 0.2s, transform 0.2s;
  transform: ${({active:e})=>e?"scale(1.4)":"scale(1)"};
`,eF=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  gap: 20px;
`,eL=i().div`
  font-size: 110px;
  line-height: 1;
  cursor: pointer;
  animation: ${eA} 2.5s ease-in-out infinite;
  filter: drop-shadow(0 8px 24px ${({color:e})=>e}50);
  user-select: none;
  &:hover { animation: ${eT} 0.3s ease; }
`,eO=i().div`
  font-size: 72px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,eD=i().div`
  font-size: 26px;
  font-weight: 700;
  color: ${el.w4.colors.mainText};
`,eH=i().div`
  font-size: 14px;
  color: ${el.w4.colors.mainTextMuted};
  text-align: center;
`,eN=i().div`
  display: flex;
  gap: 12px;
`,eG=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: ${({color:e,active:o})=>o?e+"30":el.w4.colors.surface};
  border: 2px solid ${({color:e,active:o})=>o?e??"#fff":el.w4.colors.border};
  border-radius: 16px;
  cursor: pointer;
  color: ${({color:e,active:o})=>o?e??"#fff":el.w4.colors.mainText};
  transition: all 0.15s;
  &:hover { transform: scale(1.1); }
  &:active { transform: scale(0.95); }
`,eY=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 24px;
  flex-shrink: 0;
`,eq=i().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: ${({color:e,disabled:o})=>o?el.w4.colors.surface:e+"20"};
  border: 2px solid ${({color:e,disabled:o})=>o?el.w4.colors.border:e+"60"};
  border-radius: 16px;
  color: ${({color:e,disabled:o})=>o?el.w4.colors.mainTextMuted:e};
  font-family: ${el.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 600;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.15s;
  opacity: ${({disabled:e})=>e?.4:1};
  &:hover:not(:disabled) { transform: translateX(${e=>e.disabled?"0":"3px"}); }
`,eV=i().button`
  flex: 1;
  padding: 16px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 16px;
  color: #fff;
  font-family: ${el.w4.typography.fontFamily};
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  &:hover { opacity: 0.9; transform: translateY(-2px); }
  &:active { transform: scale(0.97); }
`,eW=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
  gap: 16px;
  overflow: hidden;
`,eJ=i().div`
  display: flex;
  gap: 6px;
  width: 100%;
`,eX=i().div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: ${({state:e,color:o})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":"current"===e?o:el.w4.colors.border};
  transition: background 0.3s;
`,eU=i().div`
  font-size: 18px;
  font-weight: 600;
  color: ${el.w4.colors.mainTextMuted};
  text-align: center;
`,eK=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${({isShaking:e})=>e?eM:"none"} 0.4s ease;
`,eQ=i().div`font-size: 80px; line-height: 1;`,eZ=i().div`
  font-size: 20px;
  font-weight: 700;
  color: ${el.w4.colors.mainText};
`,e0=i().div`
  font-size: 80px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,e1=i().div`
  display: grid;
  grid-template-columns: ${({count:e})=>e<=2?"1fr 1fr":"repeat(2, 1fr)"};
  gap: 10px;
  width: 100%;
`,e4=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 18px 12px;
  background: ${({state:e})=>"correct"===e?"#10b98120":"wrong"===e?"#ef444420":el.w4.colors.surface};
  border: 3px solid ${({state:e})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":el.w4.colors.border};
  border-radius: 18px;
  cursor: pointer;
  font-family: ${el.w4.typography.fontFamily};
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
  animation: ${({isShaking:e})=>e?eM:"none"} 0.4s ease;

  &:hover:not(:disabled) {
    transform: scale(1.04);
    border-color: ${el.w4.colors.accent};
  }
  &:active:not(:disabled) { transform: scale(0.97); }
  &:disabled { cursor: not-allowed; }
`,e2=i().div`font-size: 42px; line-height: 1;`,e5=i().div`
  font-size: 30px;
  font-weight: 900;
  color: ${({color:e})=>e};
`,e3=i().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
  min-height: 28px;
`,e8=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 20px;
  position: relative;
  overflow: hidden;
`,e6=i().div`
  position: absolute;
  font-size: 28px;
  top: 60%;
  left: ${({x:e})=>e}%;
  animation: ${eC} 1.4s ease ${({delay:e})=>e}s forwards;
  pointer-events: none;
`,e9=i().div`
  font-size: 80px;
  animation: ${eA} 1s ease-in-out infinite;
`,e7=i().div`
  font-size: 32px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-align: center;
`,oe=i().div`
  font-size: 18px;
  color: ${el.w4.colors.mainTextMuted};
`,oo=i().div`
  display: flex;
  gap: 8px;
  font-size: 44px;
`,oa=i().button`
  padding: 16px 40px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 20px;
  color: #fff;
  font-family: ${el.w4.typography.fontFamily};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  &:hover { opacity: 0.9; transform: translateY(-2px); }
`;function ot({lessonId:e,progress:o,onBack:a,onComplete:n,onToggleFavorite:i}){let s=c.find(o=>o.id===e),[l,d]=(0,r.useState)("learn"),[p,m]=(0,r.useState)(0),[u,g]=(0,r.useState)([]),[f,h]=(0,r.useState)(0),[x,b]=(0,r.useState)([]),[y,w]=(0,r.useState)(null),[v,$]=(0,r.useState)(0),[k,j]=(0,r.useState)(!1),[z,S]=(0,r.useState)(!1),[M,T]=(0,r.useState)(!1),C=(0,r.useCallback)(e=>{ez(e),T(!0),setTimeout(()=>T(!1),1200)},[]),A=(0,r.useCallback)(()=>{let e,o;g((e=[...s.cards].sort(()=>Math.random()-.5).slice(0,5),o="palavras"===s.id||"frases"===s.id,e.map(e=>{let a=s.cards.filter(o=>o.id!==e.id).sort(()=>Math.random()-.5).slice(0,3);if(o){let o=[{emoji:e.emoji},...a.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"word-to-emoji",cardId:e.id,promptWord:e.letter,label:"Qual \xe9 a imagem?",options:o,correctIndex:o.findIndex(o=>o.emoji===e.emoji)}}if(Math.random()>.5){let o=[{letter:e.letter},...a.map(e=>({letter:e.letter}))].sort(()=>Math.random()-.5);return{type:"emoji-to-letter",cardId:e.id,promptEmoji:e.emoji,promptWord:e.word,label:"vogais"===s.id?"Come\xe7a com que letra?":"Come\xe7a com que s\xedlaba?",options:o,correctIndex:o.findIndex(o=>o.letter===e.letter)}}let t=[{emoji:e.emoji},...a.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"letter-to-emoji",cardId:e.id,promptLetter:e.letter,label:"Qual \xe9 a imagem?",options:t,correctIndex:t.findIndex(o=>o.emoji===e.emoji)}}))),h(0),b([]),w(null),$(0),d("quiz")},[s]),R=(0,r.useCallback)(e=>{if(null!==y||!u[f])return;let o=e===u[f].correctIndex;w(e),o?($(e=>e+1),b(e=>[...e,"correct"]),setTimeout(()=>ez(u[f]?.promptWord??u[f]?.promptLetter??""),200)):(j(!0),b(e=>[...e,"wrong"]),setTimeout(()=>j(!1),500)),setTimeout(()=>{f+1>=u.length?(d("result"),S(!0)):(h(e=>e+1),w(null))},900)},[y,u,f]),B=(0,r.useCallback)(()=>{n(e,v,u.length)},[e,v,u.length,n]);if(!s)return null;let _=s.cards[p],E=`${e}:${_?.id}`,I=o.favorites.includes(E),P=v>=u.length?3:v>=u.length-1?2:+(v>=Math.ceil(u.length/2));if("learn"===l)return(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eB,{children:[(0,t.jsx)(e_,{onClick:a,children:(0,t.jsx)(ea.A,{size:18})}),(0,t.jsx)(eE,{children:s.title}),(0,t.jsx)(eI,{children:s.cards.map((e,o)=>(0,t.jsx)(eP,{active:o===p,done:o<p,color:s.color},o))})]}),(0,t.jsxs)(eF,{children:[(0,t.jsx)(eL,{color:s.color,onClick:()=>C(_.word),children:_.emoji}),(0,t.jsx)(eO,{color:s.color,children:_.letter}),(0,t.jsx)(eD,{children:_.word}),_.hint&&(0,t.jsx)(eH,{children:_.hint}),(0,t.jsxs)(eN,{children:[(0,t.jsx)(eG,{type:"button",color:"#f59e0b",active:M,title:"Ouvir",onClick:()=>C(_.word),children:(0,t.jsx)(et.A,{size:22,color:"#f59e0b"})}),(0,t.jsx)(eG,{type:"button",color:"#ef4444",active:I,title:I?"Remover dos favoritos":"Adicionar aos favoritos",onClick:()=>i(E),children:(0,t.jsx)(er.A,{size:22,fill:I?"#ef4444":"none",color:"#ef4444"})})]})]}),(0,t.jsxs)(eY,{children:[(0,t.jsxs)(eq,{color:s.color,disabled:0===p,onClick:()=>{p>0&&m(e=>e-1)},children:[(0,t.jsx)(ea.A,{size:18})," Anterior"]}),p<s.cards.length-1?(0,t.jsxs)(eq,{color:s.color,onClick:()=>{m(e=>e+1),C(s.cards[p+1].word)},children:["Pr\xf3xima ",(0,t.jsx)(en.A,{size:18})]}):(0,t.jsx)(eV,{color:s.color,onClick:A,children:"Fazer Quiz \uD83C\uDFAF"})]})]});if("quiz"===l){let e=u[f];return e?(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eB,{children:[(0,t.jsx)(e_,{onClick:a,children:(0,t.jsx)(ea.A,{size:18})}),(0,t.jsxs)(eE,{children:["Quiz — ",s.title]})]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eJ,{children:u.map((e,o)=>(0,t.jsx)(eX,{color:s.color,state:o<x.length?x[o]:o===f?"current":"pending"},o))}),(0,t.jsx)(eU,{children:e.label}),(0,t.jsxs)(eK,{isShaking:k,color:s.color,children:[e.promptEmoji&&(0,t.jsx)(eQ,{children:e.promptEmoji}),e.promptWord&&"word-to-emoji"!==e.type&&(0,t.jsx)(eZ,{children:e.promptWord}),"word-to-emoji"===e.type&&(0,t.jsx)(e0,{color:s.color,children:e.promptWord}),e.promptLetter&&(0,t.jsx)(e0,{color:s.color,children:e.promptLetter})]}),(0,t.jsx)(e1,{count:e.options.length,children:e.options.map((o,a)=>{let r=null===y?"idle":a===e.correctIndex?"correct":a===y&&y!==e.correctIndex?"wrong":"idle";return(0,t.jsxs)(e4,{state:r,isShaking:"wrong"===r&&k,disabled:null!==y,onClick:()=>R(a),children:[o.emoji&&(0,t.jsx)(e2,{children:o.emoji}),o.letter&&(0,t.jsx)(e5,{color:s.color,children:o.letter})]},a)})}),(0,t.jsxs)(e3,{children:[null!==y&&y===e.correctIndex&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ei.A,{size:22,color:"#10b981"})," ",(0,t.jsx)("span",{style:{color:"#10b981"},children:"Muito bem! \uD83C\uDF89"})]}),null!==y&&y!==e.correctIndex&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(es.A,{size:22,color:"#ef4444"})," ",(0,t.jsxs)("span",{style:{color:"#ef4444"},children:["Era ",e.options[e.correctIndex]?.letter??e.options[e.correctIndex]?.emoji,"!"]})]})]})]})]}):null}let F=P>0?["⭐","✨","\uD83C\uDF1F","\uD83D\uDCAB","⭐","✨"].map((e,o)=>({emoji:e,x:10+15*o,delay:.15*o})):[];return(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eB,{children:[(0,t.jsx)(e_,{onClick:a,children:(0,t.jsx)(ea.A,{size:18})}),(0,t.jsx)(eE,{children:"Resultado"})]}),(0,t.jsxs)(e8,{children:[z&&F.map((e,o)=>(0,t.jsx)(e6,{x:e.x,delay:e.delay,children:e.emoji},o)),(0,t.jsx)(e9,{children:3===P?"\uD83C\uDFC6":2===P?"\uD83C\uDF89":1===P?"\uD83D\uDC4D":"\uD83D\uDE05"}),(0,t.jsx)(e7,{color:s.color,children:3===P?"Perfeito!":2===P?"Muito bem!":1===P?"Bom esfor\xe7o!":"Continua a tentar!"}),(0,t.jsxs)(oe,{children:[v," de ",u.length," acertos"]}),(0,t.jsx)(oo,{children:[1,2,3].map(e=>(0,t.jsx)("span",{style:{opacity:P>=e?1:.2},children:"⭐"},e))}),(0,t.jsx)(oa,{color:s.color,onClick:B,children:"Continuar →"})]})]})}let or=(0,s.keyframes)`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,on=i().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${el.w4.colors.mainBg};
  font-family: ${el.w4.typography.fontFamily};
  overflow: hidden;
`,oi=i().div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  border-bottom: 1px solid ${el.w4.colors.border};
  flex-shrink: 0;
`,os=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${el.w4.colors.surface};
  border: 1px solid ${el.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${el.w4.colors.mainText};
  transition: background 0.15s;
  &:hover { background: ${el.w4.colors.sidebarHover}; }
`,ol=i().div`
  font-size: 18px;
  font-weight: 700;
  color: ${el.w4.colors.mainText};
`,oc=i().div`
  margin-left: auto;
  font-size: 13px;
  color: ${el.w4.colors.mainTextMuted};
`,od=i().div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 40px;
`,op=i().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,om=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px 14px;
  background: ${({color:e})=>e}12;
  border: 2px solid ${({color:e})=>e}30;
  border-radius: 20px;
  position: relative;
  animation: ${or} 0.3s ease both;
  animation-delay: ${({index:e})=>40*e}ms;
`,ou=i().div`
  font-size: 52px;
  line-height: 1;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover { transform: scale(1.1); transition: transform 0.15s; }
`,og=i().div`
  font-size: 22px;
  font-weight: 900;
  color: ${({color:e})=>e};
  letter-spacing: 0.02em;
`,of=i().div`
  font-size: 14px;
  color: ${el.w4.colors.mainTextMuted};
  margin-top: 2px;
`,oh=i().div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`,ox=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${el.w4.colors.surface};
  border: 1px solid ${el.w4.colors.border};
  border-radius: 10px;
  cursor: pointer;
  color: ${el.w4.colors.mainTextMuted};
  transition: all 0.15s;
  &:hover { color: ${el.w4.colors.mainText}; background: ${el.w4.colors.sidebarHover}; }
`,ob=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: ${el.w4.colors.mainTextMuted};
  font-size: 16px;
  text-align: center;
`;function oy({progress:e,onBack:o,onToggleFavorite:a}){let r=[];for(let o of e.favorites){let[e,a]=o.split(":"),t=c.find(o=>o.id===e),n=t?.cards.find(e=>e.id===a);t&&n&&r.push({cardKey:o,card:n,color:t.color})}return(0,t.jsxs)(on,{children:[(0,t.jsxs)(oi,{children:[(0,t.jsx)(os,{onClick:o,children:(0,t.jsx)(ea.A,{size:18})}),(0,t.jsx)(ol,{children:"❤️ Favoritos"}),(0,t.jsxs)(oc,{children:[r.length," guardados"]})]}),(0,t.jsx)(od,{children:0===r.length?(0,t.jsxs)(ob,{children:[(0,t.jsx)("span",{style:{fontSize:64},children:"\uD83D\uDC94"}),(0,t.jsx)("span",{children:"Ainda n\xe3o tens favoritos."}),(0,t.jsx)("span",{style:{fontSize:14},children:"Toca no ❤️ nas li\xe7\xf5es para guardar."})]}):(0,t.jsx)(op,{children:r.map(({cardKey:e,card:o,color:r},n)=>(0,t.jsxs)(om,{color:r,index:n,children:[(0,t.jsx)(ou,{onClick:()=>ez(o.word),children:o.emoji}),(0,t.jsx)(og,{color:r,children:o.letter}),(0,t.jsx)(of,{children:o.word}),(0,t.jsxs)(oh,{children:[(0,t.jsx)(ox,{type:"button",title:"Ouvir",onClick:()=>ez(o.word),children:(0,t.jsx)(et.A,{size:16})}),(0,t.jsx)(ox,{type:"button",title:"Remover dos favoritos",onClick:()=>a(e),style:{color:"#ef4444",borderColor:"#ef444440"},children:(0,t.jsx)(er.A,{size:16,fill:"#ef4444"})})]})]},e))})})]})}let ow="atlantis-leitor-progress",ov={totalStars:0,level:1,streak:0,lastPlayedDate:"",lessons:{},favorites:[],badges:[]};function o$(e,o){return e.badges.includes(o)?e:{...e,badges:[...e.badges,o]}}let ok=i().div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function oj({onBack:e}){let[o,a]=(0,r.useState)(()=>(function(){try{let e=localStorage.getItem(ow);if(!e)return{...ov};return{...ov,...JSON.parse(e)}}catch{return{...ov}}})()),[n,i]=(0,r.useState)(()=>ek());(0,r.useEffect)(()=>("speechSynthesis"in window&&(ev(),em||(window.speechSynthesis.addEventListener("voiceschanged",ev),em=!0,ey())),eh.add(i),i(ek()),()=>{eh.delete(i)}),[]);let[s,l]=(0,r.useState)({id:"home"}),c=(0,r.useCallback)(e=>{a(o=>{let a,t=((a=e(o)).totalStars>=1&&!a.badges.includes("primeira-estrela")&&(a=o$(a,"primeira-estrela")),Object.values(a.lessons).filter(e=>e.completed).length>=1&&!a.badges.includes("primeira-licao")&&(a=o$(a,"primeira-licao")),Object.values(a.lessons).some(e=>3===e.stars)&&!a.badges.includes("tres-estrelas")&&(a=o$(a,"tres-estrelas")),a.favorites.length>=10&&!a.badges.includes("coleccionador")&&(a=o$(a,"coleccionador")),a.lessons.vogais?.stars!==3||a.badges.includes("vogais-mestre")||(a=o$(a,"vogais-mestre")),["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"].every(e=>a.lessons[e]?.completed)&&!a.badges.includes("leitor")&&(a=o$(a,"leitor")),["animais","cores","numeros","corpo","familia"].every(e=>a.lessons[e]?.completed)&&!a.badges.includes("explorador")&&(a=o$(a,"explorador")),a.lessons.numeros?.stars!==3||a.badges.includes("numeros-mestre")||(a=o$(a,"numeros-mestre")),a);try{localStorage.setItem(ow,JSON.stringify(t))}catch{}return t})},[]),d=(0,r.useCallback)(e=>{c(o=>{let a;return a=o.favorites.includes(e),{...o,favorites:a?o.favorites.filter(o=>o!==e):[...o.favorites,e]}})},[c]),p=(0,r.useCallback)((e,o,a)=>{c(t=>{let r,n,i,s,l,c;return r=t.lessons[e],s=Math.max(0,(i=(n=Math.max(r?.bestScore??0,o))>=a?3:n>=a-1?2:+(n>=Math.ceil(a/2)))-(r?.stars??0)),l=new Date().toISOString().split("T")[0],c=(()=>{if(!t.lastPlayedDate)return!1;let e=new Date(t.lastPlayedDate);return 1==(new Date(l).getTime()-e.getTime())/864e5})(),{...t,totalStars:t.totalStars+s,level:Math.floor((t.totalStars+s)/5)+1,streak:t.lastPlayedDate===l?t.streak:c?t.streak+1:1,lastPlayedDate:l,lessons:{...t.lessons,[e]:{stars:i,bestScore:n,completed:i>0}}}}),l({id:"home"})},[c]);return"lesson"===s.id?(0,t.jsx)(ok,{children:(0,t.jsx)(ot,{lessonId:s.lessonId,progress:o,onBack:()=>l({id:"home"}),onComplete:p,onToggleFavorite:d})}):"favorites"===s.id?(0,t.jsx)(ok,{children:(0,t.jsx)(oy,{progress:o,onBack:()=>l({id:"home"}),onToggleFavorite:d})}):(0,t.jsx)(ok,{children:(0,t.jsx)(eo,{progress:o,speechDebug:n,onSelectLesson:e=>l({id:"lesson",lessonId:e}),onOpenFavorites:()=>l({id:"favorites"}),onSpeechTest:eS})})}},5782(e,o,a){a.d(o,{Ky:()=>f,zE:()=>k,zj:()=>h,XB:()=>ec});var t=a(7991),r=a(2791);let n=null;function i(){return n||(n=(0,r.U)("https://eqvzakschpdemcgexjyy.supabase.co","sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL")),n}function s(e){return i().channel(`game-room-${e}`,{config:{broadcast:{self:!1}}})}function l(e){i().removeChannel(e)}let c="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",d=["turbo","mega","super","epic","cosmic","blazing","wild","hyper","magic","thunder","golden","silver","crystal","phantom","stellar","neon","atomic","mystic","shadow","lucky"],p={tictactoe:["grid","cross","circle","duel","board","square"],spotit:["eyes","flash","cards","match","reflex","hunt"],memory:["brain","flip","pairs","cards","mind","vault"],stopgame:["words","rush","sprint","blitz","clash","race"]},m=["arena","zone","battle","quest","clash","showdown"];function u(e){return e[Math.floor(Math.random()*e.length)]}function g(){return Math.random().toString(36).slice(2,8)}function f({gameId:e,playerName:o,onEvent:a}){let[r,n]=(0,t.useState)(null),[i,h]=(0,t.useState)(null),x=(0,t.useRef)(null),b=(0,t.useRef)(a);b.current=a;let y=(0,t.useRef)(o);y.current=o;let w=(0,t.useRef)(g()),v=(0,t.useCallback)((o,a)=>{let t=s(`${e}-${o.toUpperCase()}`);return t.on("broadcast",{event:"mp"},({payload:e})=>{b.current(e)}),t.subscribe(e=>{"SUBSCRIBED"===e?(x.current=t,"guest"===a&&t.send({type:"broadcast",event:"mp",payload:{type:"guest-joined",name:y.current,playerId:w.current}})):"CHANNEL_ERROR"===e&&h("Connection failed. Check your internet and try again.")}),t},[e]),$=(0,t.useCallback)(()=>{var o;let a,t,r;w.current=g();let i=Array.from({length:6},()=>c[Math.floor(Math.random()*c.length)]).join(""),s=(o=y.current,a=u(d),t=u(p[e]??m),r=o.slice(0,8).trim(),`${r}'s ${a} ${t}`);v(i,"host");let l={id:w.current,name:y.current,isHost:!0};return n({code:i,roomName:s,role:"host",playerId:w.current,playerName:y.current,players:[l],opponentName:null,connected:!1}),h(null),{code:i,roomName:s}},[v,e]),k=(0,t.useCallback)(e=>{w.current=g();let o=e.toUpperCase().trim();v(o,"guest");let a={id:w.current,name:y.current,isHost:!1};n({code:o,roomName:"",role:"guest",playerId:w.current,playerName:y.current,players:[a],opponentName:null,connected:!1}),h(null)},[v]),j=(0,t.useCallback)(e=>{x.current?.send({type:"broadcast",event:"mp",payload:e})},[]),z=(0,t.useCallback)(()=>{x.current&&(x.current.send({type:"broadcast",event:"mp",payload:{type:"player-left",playerId:w.current,name:y.current}}),l(x.current),x.current=null),n(null),h(null)},[]),S=(0,t.useCallback)(e=>{n(o=>o?{...o,opponentName:e,connected:!0}:o)},[]),M=(0,t.useCallback)(e=>{n(o=>{if(!o||o.players.some(o=>o.id===e.id))return o;let a=[...o.players,e],t=a.find(e=>e.id!==o.playerId);return{...o,players:a,opponentName:t?.name??null,connected:!0}})},[]),T=(0,t.useCallback)(e=>{n(o=>{if(!o)return o;let a=o.players.filter(o=>o.id!==e),t=a.find(e=>e.id!==o.playerId);return{...o,players:a,opponentName:t?.name??null,connected:a.length>1}})},[]),C=(0,t.useCallback)(e=>{n(o=>{if(!o)return o;let a=e.find(e=>e.id!==o.playerId);return{...o,players:e,opponentName:a?.name??null,connected:e.length>1}})},[]);return(0,t.useEffect)(()=>()=>{x.current&&(x.current.send({type:"broadcast",event:"mp",payload:{type:"player-left",playerId:w.current,name:y.current}}),l(x.current),x.current=null)},[]),{room:r,createRoom:$,joinRoom:k,sendEvent:j,leaveRoom:z,setConnected:S,addPlayer:M,removePlayer:T,setPlayers:C,error:i}}function h({gameId:e,enabled:o}){let[a,r]=(0,t.useState)([]),n=(0,t.useRef)(null),i=(0,t.useRef)(null),c=(0,t.useRef)(null),d=(0,t.useRef)(new Map);(0,t.useEffect)(()=>{if(!o)return;let a=s(`lobby-${e}`);n.current=a,a.on("broadcast",{event:"room-heartbeat"},({payload:e})=>{let o=Date.now();o-e.createdAt>864e5||(e.lastSeen=o,d.current.set(e.code,e),r(Array.from(d.current.values())))}),a.on("broadcast",{event:"room-closed"},({payload:e})=>{let{code:o}=e;d.current.delete(o),r(Array.from(d.current.values()))}),a.subscribe();let t=setInterval(()=>{let e=Date.now(),o=!1;for(let[a,t]of d.current)(e-t.lastSeen>45e3||e-t.createdAt>864e5)&&(d.current.delete(a),o=!0);o&&r(Array.from(d.current.values()))},1e4);return setTimeout(()=>{a.send({type:"broadcast",event:"room-request",payload:{}})},500),()=>{clearInterval(t),n.current&&(l(n.current),n.current=null),d.current.clear()}},[e,o]),(0,t.useEffect)(()=>{if(!o||!n.current)return;let e=n.current;e.on("broadcast",{event:"room-request"},()=>{c.current&&e.send({type:"broadcast",event:"room-heartbeat",payload:{...c.current,lastSeen:Date.now()}})})},[o]);let p=(0,t.useCallback)(o=>{let a={...o,gameId:e,createdAt:Date.now(),lastSeen:Date.now()};c.current=a,n.current?.send({type:"broadcast",event:"room-heartbeat",payload:a}),i.current&&clearInterval(i.current),i.current=setInterval(()=>{c.current&&n.current&&(c.current.lastSeen=Date.now(),n.current.send({type:"broadcast",event:"room-heartbeat",payload:c.current}))},2e4)},[e]),m=(0,t.useCallback)(e=>{c.current&&(c.current.playerCount=e)},[]),u=(0,t.useCallback)(()=>{i.current&&(clearInterval(i.current),i.current=null),c.current&&n.current&&n.current.send({type:"broadcast",event:"room-closed",payload:{code:c.current.code}}),c.current=null},[]);return(0,t.useEffect)(()=>()=>{i.current&&clearInterval(i.current),c.current&&n.current&&n.current.send({type:"broadcast",event:"room-closed",payload:{code:c.current.code}}),c.current=null},[]),{rooms:a,publishRoom:p,updatePlayerCount:m,unpublishRoom:u}}var x=a(5723),b=a(6859),y=a.n(b),w=a(2799),v=a(246);let $="atlantis-games-player-name";function k(){return sessionStorage.getItem($)??""}let j={yourName:{pt:"O teu nome",en:"Your name"},createRoom:{pt:"Criar Sala",en:"Create Room"},joinRoom:{pt:"Entrar na Sala",en:"Join Room"},roomCode:{pt:"C\xf3digo da Sala",en:"Room Code"},waiting:{pt:"\xc0 espera de jogadores…",en:"Waiting for players…"},shareCode:{pt:"Partilha este c\xf3digo:",en:"Share this code:"},enterCode:{pt:"Introduz o c\xf3digo da sala",en:"Enter room code"},join:{pt:"Entrar",en:"Join"},leave:{pt:"Sair",en:"Leave"},copied:{pt:"Copiado!",en:"Copied!"},copy:{pt:"Copiar",en:"Copy"},namePlaceholder:{pt:"Ex: Jo\xe3o",en:"E.g. John"},or:{pt:"ou",en:"or"},connected:{pt:"Ligado!",en:"Connected!"},playOnline:{pt:"Jogar Online",en:"Play Online"},players:{pt:"Jogadores",en:"Players"},openRooms:{pt:"Salas abertas",en:"Open rooms"},noRooms:{pt:"Nenhuma sala aberta",en:"No open rooms"},joinDirect:{pt:"Entrar com c\xf3digo",en:"Join with code"},nameMissingTitle:{pt:"Falta o teu nome",en:"Your name is missing"},nameMissingBody:{pt:"Para entrares ou criares uma sala, escreve primeiro o teu nome no campo l\xe1 em cima. Assim os outros jogadores sabem quem \xe9s.",en:"To join or create a room, first enter your name in the field above. That’s how other players see who you are."},gotIt:{pt:"Entendido",en:"Got it"}};function z(e,o){return j[e]["pt"===o?"pt":"en"]}let S=(0,w.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,M=(0,w.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,T=(0,w.keyframes)`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,C=y().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${v.w4.spacing.lg};
  padding: ${v.w4.spacing.xl} ${v.w4.spacing.lg};
  animation: ${M} 0.25s ease;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`,A=y().h2`
  font-size: ${v.w4.typography.fontSizeLg};
  color: ${v.w4.colors.mainText};
  margin: 0;
  text-align: center;
`,R=(0,w.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,B=(0,w.keyframes)`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,_=y().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 5000;
  animation: ${R} 0.15s ease;
`,E=y().div`
  background: ${v.w4.colors.sidebarBg};
  border: 1px solid ${v.w4.colors.border};
  border-radius: ${v.w4.borderRadius.lg};
  padding: 24px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${B} 0.2s cubic-bezier(0.22, 1, 0.36, 1);
`,I=y().h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${v.w4.colors.mainText};
  font-family: ${v.w4.typography.fontFamily};
`,P=y().p`
  margin: 0;
  font-size: ${v.w4.typography.fontSizeBase};
  color: ${v.w4.colors.mainTextMuted};
  font-family: ${v.w4.typography.fontFamily};
  line-height: 1.5;
`,F=y().div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`,L=y().input`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${v.w4.borderRadius.lg};
  border: 1px solid ${v.w4.colors.border};
  background: ${v.w4.colors.surface};
  color: ${v.w4.colors.mainText};
  font-size: ${v.w4.typography.fontSizeBase};
  font-family: ${v.w4.typography.fontFamily};
  outline: none;
  min-height: 44px;
  &:focus { border-color: ${v.w4.colors.accent}; }
  &::placeholder { color: ${v.w4.colors.mainTextMuted}; }
`,O=y().input`
  width: 100%;
  padding: 14px 16px;
  border-radius: ${v.w4.borderRadius.lg};
  border: 1px solid ${v.w4.colors.border};
  background: ${v.w4.colors.surface};
  color: ${v.w4.colors.mainText};
  font-size: 20px;
  font-family: ${v.w4.typography.fontFamilyMono};
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  outline: none;
  min-height: 44px;
  &:focus { border-color: ${v.w4.colors.accent}; }
  &::placeholder { color: ${v.w4.colors.mainTextMuted}; letter-spacing: 0.1em; }
`,D=y().div`
  display: flex;
  gap: ${v.w4.spacing.sm};
  width: 100%;
`,H=y().button`
  flex: 1;
  padding: 12px 20px;
  border-radius: ${v.w4.borderRadius.lg};
  border: 1px solid ${({variant:e})=>"primary"===e?v.w4.colors.accent:v.w4.colors.border};
  background: ${({variant:e})=>"primary"===e?v.w4.colors.accent:v.w4.colors.surface};
  color: ${({variant:e})=>"primary"===e?"#fff":v.w4.colors.mainText};
  font-size: ${v.w4.typography.fontSizeBase};
  font-family: ${v.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  min-height: 44px;
  transition: background 0.2s ease, border-color 0.2s ease;
  &:hover {
    background: ${({variant:e})=>"primary"===e?v.w4.colors.accentHover:v.w4.colors.sidebarHover};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,N=y().div`
  display: flex;
  align-items: center;
  gap: ${v.w4.spacing.md};
  width: 100%;
  color: ${v.w4.colors.mainTextMuted};
  font-size: ${v.w4.typography.fontSizeSm};
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${v.w4.colors.border};
  }
`,G=y().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${v.w4.spacing.md};
  width: 100%;
  padding: 20px;
  border-radius: ${v.w4.borderRadius.lg};
  border: 2px dashed ${v.w4.colors.accent};
  background: ${v.w4.colors.surface};
`,Y=y().span`
  font-size: 32px;
  font-family: ${v.w4.typography.fontFamilyMono};
  font-weight: 700;
  color: ${v.w4.colors.accent};
  letter-spacing: 0.25em;
  user-select: all;
`,q=y().button`
  padding: 8px 14px;
  border-radius: ${v.w4.borderRadius.md};
  border: 1px solid ${v.w4.colors.border};
  background: ${v.w4.colors.codeBg};
  color: ${v.w4.colors.mainTextMuted};
  font-size: ${v.w4.typography.fontSizeSm};
  cursor: pointer;
  min-height: 36px;
  transition: background 0.2s ease;
  &:hover { background: ${v.w4.colors.sidebarHover}; }
`,V=y().p`
  color: ${v.w4.colors.mainTextMuted};
  font-size: ${v.w4.typography.fontSizeBase};
  animation: ${S} 1.8s ease infinite;
  text-align: center;
  margin: 0;
`,W=y().p`
  color: #f85149;
  font-size: ${v.w4.typography.fontSizeSm};
  text-align: center;
  margin: 0;
`,J=y().label`
  font-size: ${v.w4.typography.fontSizeSm};
  color: ${v.w4.colors.mainTextMuted};
  width: 100%;
`,X=y().div`
  display: flex;
  flex-direction: column;
  gap: ${v.w4.spacing.sm};
  width: 100%;
`,U=y().div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,K=y().div`
  font-size: ${v.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${v.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Q=y().div`
  display: flex;
  align-items: center;
  gap: ${v.w4.spacing.sm};
  padding: 8px 12px;
  background: ${v.w4.colors.surface};
  border: 1px solid ${v.w4.colors.border};
  border-radius: ${v.w4.borderRadius.md};
  font-size: ${v.w4.typography.fontSizeBase};
  color: ${v.w4.colors.mainText};
  animation: ${T} 0.2s ease;
`,Z=y().span`
  font-size: 10px;
  font-weight: 700;
  color: ${v.w4.colors.accent};
  background: rgba(88, 166, 255, 0.12);
  border-radius: 8px;
  padding: 1px 6px;
`,ee=y().div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eo=y().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,ea=y().span`
  font-size: ${v.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${v.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,et=y().button`
  display: flex;
  align-items: center;
  gap: ${v.w4.spacing.sm};
  width: 100%;
  padding: 12px 14px;
  background: ${v.w4.colors.surface};
  border: 1px solid ${v.w4.colors.border};
  border-radius: ${v.w4.borderRadius.lg};
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, transform 0.15s, opacity 0.15s;
  font-family: ${v.w4.typography.fontFamily};
  text-align: left;
  min-height: 56px;
  &:hover:not(:disabled) {
    border-color: ${v.w4.colors.accent};
    background: rgba(88, 166, 255, 0.05);
    transform: translateY(-1px);
  }
  &:active:not(:disabled) { transform: translateY(0); }
  /* Previously there was no disabled style — the card looked fully clickable
   * while the handler silently returned, making join feel broken. */
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,er=y().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,en=y().span`
  font-size: ${v.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${v.w4.colors.mainText};
`,ei=y().span`
  font-size: ${v.w4.typography.fontSizeSm};
  color: ${v.w4.colors.mainTextMuted};
`,es=y().span`
  font-size: ${v.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${v.w4.colors.accent};
  white-space: nowrap;
`,el=y().p`
  font-size: ${v.w4.typography.fontSizeSm};
  color: ${v.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${v.w4.spacing.md} 0;
  margin: 0;
`;function ec({lang:e,room:o,error:a,onCreateRoom:r,onJoinRoom:n,onLeaveRoom:i,availableRooms:s=[]}){let[l,c]=(0,t.useState)("idle"),[d,p]=(0,t.useState)(()=>k()),[m,u]=(0,t.useState)(""),[g,f]=(0,t.useState)(!1),[h,b]=(0,t.useState)(!1),y=(0,t.useRef)(null),w=(0,t.useRef)(null);(0,t.useEffect)(()=>{d.trim()&&b(!1)},[d]);let j=()=>{b(!1),setTimeout(()=>w.current?.focus(),50)},S=()=>{let e=d.trim();return e?(sessionStorage.setItem($,e),e):(b(!0),null)},M=()=>{let e=S();e&&(c("hosting"),r(e))},T=()=>{let e=m.trim().toUpperCase();e.length<4||n(e,d.trim())},R=()=>{c("idle"),u(""),i()};if(o?.connected)return null;if("hosting"===l&&o){let t=o.players??[];return(0,x.jsxs)(C,{children:[o.roomName&&(0,x.jsx)(A,{style:{fontSize:18,color:v.w4.colors.accent},children:o.roomName}),(0,x.jsxs)(A,{children:["\uD83C\uDF10 ",z("shareCode",e)]}),(0,x.jsxs)(G,{children:[(0,x.jsx)(Y,{children:o.code}),(0,x.jsx)(q,{onClick:()=>{o&&navigator.clipboard.writeText(o.code).then(()=>{f(!0),setTimeout(()=>f(!1),2e3)})},children:g?z("copied",e):z("copy",e)})]}),t.length>1&&(0,x.jsxs)(U,{children:[(0,x.jsxs)(K,{children:[z("players",e)," (",t.length,")"]}),t.map(e=>(0,x.jsxs)(Q,{children:[e.isHost?"\uD83D\uDC51":"\uD83D\uDC64"," ",e.name,e.isHost&&(0,x.jsx)(Z,{children:"Host"})]},e.id))]}),t.length<=1&&(0,x.jsx)(V,{children:z("waiting",e)}),a&&(0,x.jsx)(W,{children:a}),(0,x.jsx)(H,{variant:"secondary",onClick:R,children:z("leave",e)})]})}return"joining"===l?(0,x.jsxs)(C,{children:[(0,x.jsxs)(A,{children:["\uD83D\uDD17 ",z("joinRoom",e)]}),(0,x.jsxs)(X,{children:[(0,x.jsx)(J,{children:z("enterCode",e)}),(0,x.jsx)(O,{ref:y,value:m,onChange:e=>u(e.target.value.toUpperCase().slice(0,6)),placeholder:"ABC123",maxLength:6,onKeyDown:e=>"Enter"===e.key&&T()})]}),a&&(0,x.jsx)(W,{children:a}),(0,x.jsxs)(D,{children:[(0,x.jsx)(H,{variant:"secondary",onClick:R,children:z("leave",e)}),(0,x.jsx)(H,{variant:"primary",onClick:T,disabled:m.trim().length<4,children:z("join",e)})]})]}):(0,x.jsxs)(C,{children:[(0,x.jsxs)(A,{children:["\uD83C\uDF10 ",z("playOnline",e)]}),(0,x.jsxs)(X,{children:[(0,x.jsx)(J,{children:z("yourName",e)}),(0,x.jsx)(L,{ref:w,value:d,onChange:e=>p(e.target.value.slice(0,20)),placeholder:z("namePlaceholder",e),onKeyDown:e=>"Enter"===e.key&&M()})]}),a&&(0,x.jsx)(W,{children:a}),s.length>0&&(0,x.jsxs)(ee,{children:[(0,x.jsx)(eo,{children:(0,x.jsxs)(ea,{children:[z("openRooms",e)," (",s.length,")"]})}),s.map(e=>(0,x.jsxs)(et,{onClick:()=>{var o;let a;return o=e.code,document.activeElement?.blur(),void((a=S())&&n(o,a))},"aria-disabled":!d.trim(),children:[(0,x.jsxs)(er,{children:[(0,x.jsx)(en,{children:e.roomName||e.code}),(0,x.jsxs)(ei,{children:["\uD83D\uDC51 ",e.hostName]})]}),(0,x.jsxs)(es,{children:["\uD83D\uDC64 ",e.playerCount]})]},e.code))]}),0===s.length&&(0,x.jsx)(el,{children:z("noRooms",e)}),(0,x.jsx)(D,{children:(0,x.jsx)(H,{variant:"primary",onClick:M,disabled:!d.trim(),children:z("createRoom",e)})}),(0,x.jsx)(N,{children:z("or",e)}),(0,x.jsx)(D,{children:(0,x.jsx)(H,{variant:"secondary",onClick:()=>{S()&&(c("joining"),setTimeout(()=>y.current?.focus(),100))},disabled:!d.trim(),children:z("joinDirect",e)})}),h&&(0,x.jsx)(_,{role:"dialog","aria-modal":"true",onClick:j,children:(0,x.jsxs)(E,{onClick:e=>e.stopPropagation(),children:[(0,x.jsx)(I,{children:z("nameMissingTitle",e)}),(0,x.jsx)(P,{children:z("nameMissingBody",e)}),(0,x.jsx)(F,{children:(0,x.jsx)(H,{variant:"primary",onClick:j,children:z("gotIt",e)})})]})})]})}},9484(e,o,a){a.d(o,{G:()=>s,L:()=>n});var t=a(5723),r=a(7991);let n=[{skin:"#ffcc99",body:"#4488ff",bodyDark:"#3366cc",shoes:"#cc4444",eyes:"#222",mouth:"#cc5555",hat:"#ff4444",accent:"#ffdd44"},{skin:"#ffe0bd",body:"#44bb44",bodyDark:"#338833",shoes:"#8844cc",eyes:"#222",mouth:"#cc5555",hat:"#22aa22",accent:"#ffffff"},{skin:"#f5c6a0",body:"#ff6644",bodyDark:"#cc4422",shoes:"#4444cc",eyes:"#222",mouth:"#cc5555",hat:"#ffaa00",accent:"#44ddff"},{skin:"#deb887",body:"#cc44cc",bodyDark:"#993399",shoes:"#44cc44",eyes:"#222",mouth:"#cc5555",hat:"#ff66cc",accent:"#ffff44"},{skin:"#ffd5b5",body:"#ffaa00",bodyDark:"#cc8800",shoes:"#884422",eyes:"#222",mouth:"#cc5555",hat:"#4488ff",accent:"#ff4444"},{skin:"#ffe0c0",body:"#00cccc",bodyDark:"#009999",shoes:"#ff6644",eyes:"#222",mouth:"#cc5555",hat:"#ff44aa",accent:"#88ff88"},{skin:"#ffcc99",body:"#8855cc",bodyDark:"#663399",shoes:"#ffaa00",eyes:"#222",mouth:"#cc5555",hat:"#44ccff",accent:"#ff8844"},{skin:"#f0c8a0",body:"#ff4488",bodyDark:"#cc2266",shoes:"#222222",eyes:"#222",mouth:"#cc5555",hat:"#44ff88",accent:"#ffdd00"},{skin:"#ffcc99",body:"#ffffff",bodyDark:"#cccccc",shoes:"#3366cc",eyes:"#222",mouth:"#cc5555",hat:"#4488ff",accent:"#ff4444"},{skin:"#f5c6a0",body:"#222222",bodyDark:"#111111",shoes:"#444444",eyes:"#ff4444",mouth:"#cc5555",hat:"#333333",accent:"#ff2222"},{skin:"#ffe0bd",body:"#44dd44",bodyDark:"#22aa22",shoes:"#664422",eyes:"#222",mouth:"#cc5555",hat:"#55ee55",accent:"#88ff44"},{skin:"#c8a882",body:"#7744cc",bodyDark:"#552299",shoes:"#222222",eyes:"#ff44ff",mouth:"#cc88cc",hat:"#9944ff",accent:"#cc66ff"}],i={idle:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","S","B","B","B","B","B","B","B","B","S","_"],["_","S","B","B","B","A","A","B","B","B","S","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","_","D","D","_","_","D","D","_","_","_"],["_","_","_","D","D","_","_","D","D","_","_","_"],["_","_","X","X","X","_","_","X","X","X","_","_"],["_","_","X","X","X","_","_","X","X","X","_","_"]],jump:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["S","S","B","B","B","B","B","B","B","B","S","S"],["_","S","B","B","B","A","A","B","B","B","S","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","D","D","_","_","_","_","D","D","_","_"],["_","D","D","_","_","_","_","_","_","D","D","_"],["X","X","X","_","_","_","_","_","_","X","X","X"],["X","X","_","_","_","_","_","_","_","_","X","X"]],walk:[["_","_","_","_","H","H","H","H","_","_","_","_"],["_","_","_","H","H","H","H","H","H","_","_","_"],["_","_","H","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","E","S","S","S","S","E","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","_","B","B","B","B","B","B","B","B","S","_"],["_","_","B","B","B","A","A","B","B","B","S","_"],["_","S","B","B","B","B","B","B","B","B","_","_"],["_","S","B","B","B","B","B","B","B","B","_","_"],["_","_","_","D","D","_","_","_","D","D","_","_"],["_","_","_","_","D","D","_","D","D","_","_","_"],["_","_","_","_","X","X","X","X","_","_","_","_"],["_","_","_","_","X","X","X","X","_","_","_","_"]],dead:[["_","_","_","_","_","H","H","H","H","_","_","_"],["_","_","_","_","H","H","H","H","H","H","_","_"],["_","_","_","H","H","H","H","H","H","H","_","_"],["_","_","S","S","S","S","S","S","S","S","_","_"],["_","_","S","E","_","S","S","_","E","S","_","_"],["_","_","S","_","E","S","S","E","_","S","_","_"],["_","_","S","S","S","M","M","S","S","S","_","_"],["_","_","_","_","S","S","S","S","_","_","_","_"],["_","_","B","B","B","B","B","B","B","B","_","_"],["_","_","B","B","B","A","A","B","B","B","_","_"],["_","S","B","B","B","B","B","B","B","B","S","_"],["S","_","B","B","B","B","B","B","B","B","_","S"],["_","_","_","D","D","D","D","D","D","_","_","_"],["_","_","_","_","_","_","_","_","_","_","_","_"],["_","_","X","X","X","X","X","X","X","X","_","_"],["_","_","_","_","_","_","_","_","_","_","_","_"]]};function s({paletteIndex:e,pose:o="idle",size:a=48,flipX:l=!1,style:c,className:d}){let p=n[e%n.length],m=i[o],u=m.length,g=m[0].length,f=(0,r.useMemo)(()=>{let e=[];for(let o=0;o<u;o++)for(let a=0;a<g;a++){let t=function(e,o){switch(e){case"S":return o.skin;case"B":return o.body;case"D":return o.bodyDark;case"H":return o.hat;case"E":return o.eyes;case"M":return o.mouth;case"A":return o.accent;case"X":return o.shoes;default:return null}}(m[o][a],p);t&&e.push({x:a,y:o,color:t})}return e},[m,p,u,g]);return(0,t.jsx)("svg",{width:a,height:u/g*a,viewBox:`0 0 ${g} ${u}`,style:{imageRendering:"pixelated",transform:l?"scaleX(-1)":void 0,...c},className:d,children:f.map((e,o)=>(0,t.jsx)("rect",{x:e.x,y:e.y,width:1,height:1,fill:e.color},o))})}},8170(e,o,a){a.d(o,{Ym:()=>c});var t=a(7991),r=a(246);let n="atlantis:locale",i="shell:locale";function s(e){return"en"===e||"pt"===e}function l(){try{let e=localStorage.getItem(n);if(s(e))return e}catch{}return"en"}function c(){let[e,o]=(0,t.useState)(l),a=(0,t.useCallback)(e=>{o(e);try{localStorage.setItem(n,e)}catch{}(0,r.Is)(i,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,t.useEffect)(()=>{let e=e=>{o(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,t.useEffect)(()=>{(0,r.PL)(i).then(a=>{if(s(a)&&a!==e){try{localStorage.setItem(n,a)}catch{}o(a)}}).catch(()=>{})},[]),[e,a]}(0,r.PL)(i).then(e=>{if(s(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{}),a(5723);var d=a(6859),p=a.n(d);p().div`
  display: flex;
  gap: 4px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 2px;
`,p().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?r.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainText};
  }
`},7330(e,o,a){a.d(o,{FlyoutPanel:()=>e_});var t=a(5723),r=a(7991),n=a.n(r),i=a(6859),s=a.n(i),l=a(2799),c=a(255),d=a(1316),p=a(814),m=a(6896),u=a(7902),g=a(3013),f=a(2887),h=a(9510),x=a(9848),b=a(7901),y=a(3045),w=a(3775),v=a(1783),$=a(3539),k=a(9416),j=a(1837),z=a(7167),S=a(4494),M=a(2314),T=a(5751),C=a(9633),A=a(2946),R=a(822),B=a(6720),_=a(7400),E=a(8456),I=a(3317),P=a(2709),F=a(8006),L=a(9301),O=a(7561),D=a(3517),H=a(8207),N=a(7032),G=a(6949),Y=a(8218),q=a(6829),V=a(9591),W=a(5553),J=a(9923),X=a(2820),U=a(4621),K=a(8479),Q=a(2534),Z=a(6673),ee=a(7490),eo=a(9033),ea=a(9038),et=a(5775),er=a(1365),en=a(2937),ei=a(9821),es=a(5912),el=a(158),ec=a(8641),ed=a(8607),ep=a(3249),em=a(1821),eu=a(5889),eg=a(9655),ef=a(7170),eh=a(9161),ex=a(1849),eb=a(1604),ey=a(3142),ew=a(1187),ev=a(7747),e$=a(2932),ek=a(4525),ej=a(7230),ez=a(2164);let eS={activity:m.A,"a-large-small":u.A,apple:g.A,"arrow-right":f.A,"bar-chart-2":h.A,book:x.A,"book-open":b.A,briefcase:y.A,calendar:w.A,clock:v.A,"circle-dot":$.A,cloud:k.A,compass:j.A,cpu:z.A,droplets:S.A,feather:M.A,file:c.A,"file-text":T.A,folder:C.A,"git-branch":A.A,github:R.A,globe:B.A,grid:_.A,hand:E.A,hash:I.A,heart:P.A,key:F.A,hexagon:L.A,home:O.A,landmark:D.A,layers:H.A,"layout-grid":N.A,leaf:G.A,lightbulb:Y.A,list:q.A,map:V.A,"map-pin":W.A,"message-circle":J.A,"message-square":X.A,minus:U.A,monitor:K.A,mountain:Q.A,package:Z.A,palette:ee.A,"pen-tool":eo.A,"pie-chart":ea.A,plane:et.A,plus:er.A,ruler:en.A,shirt:ei.A,slash:es.A,square:el.A,star:ec.A,sun:ed.A,terminal:ep.A,thermometer:em.A,triangle:eu.A,trophy:eg.A,truck:ef.A,type:eh.A,users:ex.A,"volume-2":eb.A,watch:ey.A,waves:ew.A,wind:ev.A,wrench:e$.A,x:ek.A,zap:ej.A,bot:ez.A},eM=(0,l.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,eT=s().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.accentMuted};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${eM} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
    background: ${d.w4.colors.accent};
    opacity: 0.4;
  }
`,eC=s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.accent};
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  font-family: ${d.w4.typography.fontFamily};
`,eA=s().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${d.w4.colors.accentMuted};
    color: ${d.w4.colors.mainText};
  }
`;function eR({iconKey:e}){let o=e?eS[e]??c.A:c.A;return(0,t.jsx)(o,{size:14,strokeWidth:1.75})}function eB({entries:e,activeId:o,onSelect:a}){return(0,t.jsx)(t.Fragment,{children:e.map(e=>e.children?(0,t.jsx)(n().Fragment,{children:(0,t.jsx)(eB,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,t.jsxs)(eA,{active:o===e.id,onClick:()=>a(e),children:[(0,t.jsx)(eR,{iconKey:e.icon}),e.name]},e.id))})}function e_({activeId:e}){let{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:r}=(0,p.c)();if(!o)return null;let n=o.entry.icon?eS[o.entry.icon]??c.A:c.A;return(0,t.jsxs)(eT,{anchorY:o.anchorY,onMouseEnter:r,onMouseLeave:a,children:[(0,t.jsxs)(eC,{children:[(0,t.jsx)(n,{size:13,strokeWidth:2}),o.entry.name]}),(0,t.jsx)(eB,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},814(e,o,a){a.d(o,{I:()=>r,c:()=>n});var t=a(7991);let r=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,t.useContext)(r)},246(e,o,a){a.d(o,{w4:()=>t.w4,PE:()=>R,Is:()=>_.putSetting,PL:()=>_.getSetting});var t=a(1316),r=a(5723),n=a(7991),i=a.n(n),s=a(6859),l=a.n(s);l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${t.w4.spacing.sm};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,l().div`
  position: relative;
`;var c=a(2799),d=a(3661),p=a(814);let m="260px",u="56px",g="48px",f=l().header`
  display: flex;
  align-items: center;
  height: calc(${g} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${t.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${g} + env(safe-area-inset-top, 0px));
  }
`,h=l().div`
  width: ${u};
  min-width: ${u};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,x=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,b=(0,c.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,y=l().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,w=l().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${b} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,v=l().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  padding-left: ${t.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${t.w4.spacing.sm};
    color: ${t.w4.colors.border};
  }
`,$=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.w4.spacing.md};
  padding: 0 ${t.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${t.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${t.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${t.w4.spacing.xs} ${t.w4.spacing.sm};
    gap: ${t.w4.spacing.xs};
    border-top: 1px solid ${t.w4.colors.sidebarBorder};
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
`,k=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,j=l().div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,z=l().aside`
  width: ${({collapsed:e})=>e?u:m};
  min-width: ${({collapsed:e})=>e?u:m};
  background: ${t.w4.colors.sidebarBg};
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,S=l().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,M=l().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,T=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function C(){return(0,r.jsx)(y,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:T.map((e,o)=>(0,r.jsx)(w,{index:o,accent:e.accent,children:e.char},o))})}let A="atlantis:sidebar-collapsed";function R({sidebar:e,children:o,topBarRight:t,title:s="Atlantis",activeId:l=null}){let[c,m]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(A)}catch{return!1}}),[u,g]=(0,n.useState)(null),b=(0,n.useRef)(),y=()=>m(e=>{let o=!e;try{localStorage.setItem(A,String(o))}catch{}return o}),w=i().useMemo(()=>i().lazy(()=>Promise.resolve().then(a.bind(a,7330)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(p.I.Provider,{value:{collapsed:c,toggle:y,flyout:u,openFlyout:(e,o,a)=>{clearTimeout(b.current),g({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{b.current=setTimeout(()=>g(null),160)},cancelFlyoutClose:()=>clearTimeout(b.current)},children:(0,r.jsxs)(j,{children:[(0,r.jsxs)(f,{children:[e&&(0,r.jsx)(h,{children:(0,r.jsx)(x,{onClick:y,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(d.A,{size:17})})}),(0,r.jsx)(C,{}),s&&(0,r.jsx)(v,{children:s}),t&&(0,r.jsx)($,{children:t})]}),(0,r.jsxs)(k,{children:[null!=e&&(0,r.jsx)(z,{collapsed:c,children:(0,r.jsx)(S,{children:e})}),(0,r.jsx)(M,{children:o})]}),u&&(0,r.jsx)(i().Suspense,{fallback:null,children:(0,r.jsx)(w,{activeId:l})})]})})}l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,l().div`
  overflow: hidden;
`,l().div`
  padding-left: ${t.w4.spacing.md};
`,l().div`
  display: flex;
  flex-direction: column;
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w4.spacing.sm} ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":t.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${t.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w4.colors.sidebarText};
    background: ${t.w4.colors.sidebarHover};
  }
`,l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,l().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`;let B=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;l().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${B} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${t.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${t.w4.colors.surface};
  }
`,l().span`
  display: block;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${t.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${t.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${t.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${t.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,a(7330),l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
    border-color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);var _=a(1310);l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,l().div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,l().div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,l().input`
  width: 100%;
  padding: 8px 12px;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,l().button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?t.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,l().div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,l().div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`;let E=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,I=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${t.w4.spacing.md};
  animation: ${E} 0.15s ease both;
`,l().div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?t.w4.colors.danger+"55":t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${t.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${I} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,l().div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?t.w4.colors.danger:t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,l().div`
  font-size: ${t.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${t.w4.spacing.sm};
`,l().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${t.w4.transitions.fast},
    border-color ${t.w4.transitions.fast},
    color ${t.w4.transitions.fast},
    opacity ${t.w4.transitions.fast};

  background: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:o})=>o||e?"#fff":t.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${t.w4.focusRing} }
`,l().div`
  position: relative;
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    border-color: ${t.w4.colors.accent};
  }
`,l().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,l().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,l().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,l().div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
  }
`,l().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,l().div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l().div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-top: 1px;
`,l().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${t.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,l().div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,l().section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,l().div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,l().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding-left: max(${t.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${t.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
  z-index: 100;
`,l().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,l().span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,l().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,l().span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,l().div`
  flex: 1;
`;let P=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,F=(0,c.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,L=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${P} 0.4s ease 0.15s both;
`,l().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,l().div`
  position: absolute;
  inset: 0;
  animation: ${F} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,l().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${t.w4.colors.border};
  animation: ${L} 1.4s ease-in-out infinite;
`,l().span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},1316(e,o,a){a.d(o,{w4:()=>n});let t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},r="--at-",n={colors:function(){let e={};for(let o of Object.keys(t))e[o]=`var(${r}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${r}suiteLab)`,vida:`var(${r}suiteVida)`,learn:`var(${r}suiteLearn)`,games:`var(${r}suiteGames)`,ent:`var(${r}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}},2938(e,o,a){a.d(o,{UO:()=>A,Xl:()=>U});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),s=a(246);let l={ghost:"transparent",accent:"transparent",primary:s.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:s.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:s.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},d={ghost:s.w4.colors.border,accent:s.w4.colors.accent,primary:s.w4.colors.accent,success:"#238636",danger:"#da3633"},p={ghost:s.w4.colors.mainTextMuted,accent:s.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},m={ghost:s.w4.colors.mainText,accent:s.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},u={sm:"28px",md:"30px"},g={sm:"0 10px",md:"0 12px"},f={sm:"12px",md:"12px"};i().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>u[e]};
  padding: ${({size:e})=>g[e]};
  background: ${({variant:e})=>l[e]};
  border: 1px solid ${({variant:e})=>d[e]};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({variant:e})=>p[e]};
  font-size: ${({size:e})=>f[e]};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>m[e]};
    border-color: ${({variant:e})=>"ghost"===e?s.w4.colors.accent:d[e]};
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;let h={default:s.w4.colors.accent,danger:"#f85149"},x={default:s.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};i().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${s.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":s.w4.borderRadius.sm};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover:not(:disabled) {
    color: ${({tone:e})=>h[e]};
    background: ${({tone:e})=>x[e]};
    border-color: ${({tone:e})=>h[e]};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,i().div`
  position: relative;
  display: inline-flex;
`,i().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeSm};
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: -2px;
  }
`,i().div`
  height: 1px;
  margin: 4px 0;
  background: ${s.w4.colors.sidebarBorder};
`,i().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`,i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,i().span`
  width: 1px;
  height: 20px;
  background: ${s.w4.colors.border};
  flex-shrink: 0;
`,i().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,i()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:o})=>e||o?s.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:o})=>e||o?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${s.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${s.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${s.w4.focusRing} }
`,a(2727);var b=a(2799);let y=(0,b.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;i().div`
  position: relative;
`,i().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${s.w4.transitions.fast}, background ${s.w4.transitions.fast};
  &:hover {
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,i().img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,i().div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${s.w4.colors.accentMuted};
  border: 1px solid ${s.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily};
  flex-shrink: 0;
`,i().span`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,i().div`
  position: fixed;
  min-width: 240px;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${y} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${s.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,i().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${s.w4.colors.border};
`,i().img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`,i().div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${s.w4.colors.accentMuted};
  border: 1px solid ${s.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily};
  margin-bottom: 10px;
`,i().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
`,i().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 2px;
`,i().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
`,i().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,i().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.md};
`,i().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
    background: ${({active:e})=>e?s.w4.colors.accentMuted:s.w4.colors.sidebarHover};
  }
`,i().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":s.w4.colors.mainText};
  }
`,a(8170);let w={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>'};function v({name:e,size:o=18,strokeWidth:a=1.5,...r}){let n=w[e];return(0,t.jsx)("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!r["aria-label"]||void 0,...r,dangerouslySetInnerHTML:{__html:n}})}Object.keys(w),i().div`
  position: relative;
  display: inline-block;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?s.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?s.w4.colors.borderStrong:s.w4.colors.border};
  border-radius: 999px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast},
    border-color ${s.w4.transitions.fast},
    color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    border-color: ${s.w4.colors.borderStrong};
  }
  &:focus-visible { ${s.w4.focusRing} }
`,i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${s.w4.colors.accentMuted};
  color: ${s.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let $=(0,b.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;i().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${s.w4.elevation.lg};
  z-index: ${s.w4.zIndex.dropdown};
  animation: ${$} 0.18s ease both;

  @media (max-width: ${s.w4.breakpoints.md}) {
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
`,i()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?s.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${s.w4.transitions.fast};

  &:hover { background: ${s.w4.colors.surfaceHover}; }
  &:focus-visible { ${s.w4.focusRing} }
`,i()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,i().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,i().span`
  font-size: 13.5px;
  color: ${s.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,i()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${s.w4.typography.fontFamilyMono};
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
`,i().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${s.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${s.w4.transitions.fast},
    color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    background: ${s.w4.colors.surfaceHover};
  }
  &:focus-visible { ${s.w4.focusRing} }
`,i().span`
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
`,i().span`
  margin-left: auto;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`,i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.md}) {
    gap: ${s.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,i().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 999px;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 999px;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};
  white-space: nowrap;

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${s.w4.colors.sidebarHover};
    border: 1px solid ${s.w4.colors.borderSubtle};
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${s.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, background ${s.w4.transitions.fast};
  }

  &:hover {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }
  &:hover .kbd {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent}55;
    background: ${s.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,i().div`
  position: relative;
  display: inline-flex;
`,i().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${s.w4.colors.mainBg};
  color: #fff;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${s.w4.colors.accent};
  border: 1px solid ${s.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${s.w4.colors.accentHover};
    border-color: ${s.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`;let k=i().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,j=i().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,z=i().div`
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
  transition: opacity ${s.w4.transitions.fast};
`,S=i().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${s.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,M=i().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${s.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,T=i().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${s.w4.typography.fontFamily};
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
  transition: transform 0.08s ease, box-shadow ${s.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;function C(e,o){return Math.abs(e)<o?0:e>0?1:-1}function A({onMove:e,actions:o,axes:a="both",snap:n=!0,deadZone:i=.3,forceVisible:l=!1}){let c=(0,r.useRef)(null),d=(0,r.useRef)(null),p=(0,r.useRef)(null),m=(0,r.useRef)({dx:0,dy:0}),[u,g]=(0,r.useState)(null),[f,h]=(0,r.useState)({dx:0,dy:0}),x=(0,r.useCallback)((o,t)=>{if(!e)return;let r="horizontal"===a?0:t,s=n?{dx:C(o,i),dy:C(r,i)}:{dx:o,dy:r};(s.dx!==m.current.dx||s.dy!==m.current.dy)&&(m.current=s,e(s))},[e,a,n,i]),b=(0,r.useCallback)(()=>{d.current=null,p.current=null,g(null),h({dx:0,dy:0}),x(0,0)},[x]);(0,r.useEffect)(()=>{let e=c.current;if(e)return e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchmove",a,{passive:!0}),e.addEventListener("touchend",t,{passive:!0}),e.addEventListener("touchcancel",t,{passive:!0}),()=>{e.removeEventListener("touchstart",o),e.removeEventListener("touchmove",a),e.removeEventListener("touchend",t),e.removeEventListener("touchcancel",t)};function o(e){if(null!==d.current)return;let o=e.changedTouches[0];d.current=o.identifier,p.current={x:o.clientX,y:o.clientY},g({x:o.clientX,y:o.clientY}),h({dx:0,dy:0})}function a(e){if(null!==d.current&&p.current)for(let o=0;o<e.changedTouches.length;o++){let a=e.changedTouches[o];if(a.identifier!==d.current)continue;let t=a.clientX-p.current.x,r=a.clientY-p.current.y,n=Math.hypot(t,r),i=Math.min(n,60),s=0===n?0:t/n*(i/60),l=0===n?0:r/n*(i/60);h({dx:s,dy:l}),x(s,l)}}function t(e){for(let o=0;o<e.changedTouches.length;o++)if(e.changedTouches[o].identifier===d.current)return void b()}},[x,b]);let y=(0,r.useCallback)(e=>{let o=()=>e.onRelease?.();return{onPointerDown:o=>{o.stopPropagation(),e.onPress?.()},onPointerUp:o,onPointerCancel:o,onPointerLeave:o}},[]);return(0,t.jsxs)(k,{forceVisible:l,"aria-hidden":!0,children:[(0,t.jsx)(j,{ref:c,children:u&&(0,t.jsx)(z,{left:u.x,top:u.y,active:!0,children:(0,t.jsx)(S,{dx:f.dx,dy:f.dy})})}),o&&o.length>0&&(0,t.jsx)(M,{children:o.map(e=>(0,t.jsx)(T,{type:"button",accent:e.color??s.w4.colors.accent,...y(e),children:e.label},e.id))})]})}let R=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;i()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${s.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${R} 0.4s ease both;
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
      border-color: ${s.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${s.w4.colors.shadowStrong};
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
`,i().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${s.w4.colors.border};
  color: ${s.w4.colors.mainText};

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
    font-family: ${s.w4.typography.fontFamily};
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
    & > .h { height: 7px; background: ${s.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
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
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${s.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
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
      font-family: ${s.w4.typography.fontFamilyMono};
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
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${s.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${s.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${s.w4.colors.mainText}; }
    & .b { color: ${s.w4.colors.mainTextMuted}; opacity: 0.7; }
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
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${s.w4.colors.mainTextMuted}; opacity: 0.6; }
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
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${s.w4.colors.mainTextMuted};
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
      font-family: ${s.w4.typography.fontFamily};
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
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${s.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${s.w4.colors.mainTextMuted}; opacity: 0.75; }
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
      color: ${s.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${s.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${s.w4.typography.fontFamilyMono};
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
      color: ${s.w4.colors.mainText};
      font-family: ${s.w4.typography.fontFamilyMono};
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
      font-family: ${s.w4.typography.fontFamilyMono};
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
      font-family: ${s.w4.typography.fontFamilyMono};
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
      font-family: ${s.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${s.w4.colors.mainText};
    }
  }
`,i().div`
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
    font-family: ${s.w4.typography.fontFamilyMono};
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
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${s.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${s.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,i().div`
  padding: 6px 14px 16px;
`,i().h3`
  margin: 0 0 6px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${s.w4.colors.mainText};

  .hash {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${s.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,i().p`
  margin: 0;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,i().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${s.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.4;
`,i().button`
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
  color: ${({pinned:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${s.w4.transitions.fast}, color ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
  }
`,i().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${s.w4.transitions.fast};
  z-index: 3;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?s.w4.colors.borderStrong:s.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?s.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?s.w4.colors.mainTextMuted:s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${s.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?s.w4.colors.mainTextFaint:s.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?s.w4.colors.mainText:s.w4.colors.accentHover};
  }

  &:focus-visible {
    ${s.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,i().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let B={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:s.w4.colors.accentMuted},_={neutral:s.w4.colors.mainTextMuted,live:s.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:s.w4.colors.accent},E=i().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?s.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>B[e]};
  color: ${({tone:e})=>_[e]};
`,I=i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function P({tone:e="neutral",dot:o,children:a,...r}){return(0,t.jsxs)(E,{tone:e,...r,children:[(o??"live"===e)&&(0,t.jsx)(I,{}),a]})}i().kbd`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 3px;
  color: ${s.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,i().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,i().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${s.w4.transitions.fast};

  &:focus-within {
    border-color: ${s.w4.colors.accent};
  }
`,i().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  color: ${s.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${s.w4.colors.mainTextFaint};
  }
`,i().span`
  display: inline-flex;
  align-items: center;
  color: ${s.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,i().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px 20px 20px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.lg};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  transition: border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
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
`,i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,i().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,i().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  line-height: 1.45;
`,i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.danger};
`,i().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${s.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.lg};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${s.w4.colors.accent}`:"none"};
  transition: border-color ${s.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?s.w4.colors.accentHover:s.w4.colors.borderStrong};
  }
`,i().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,i().div`
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
`,i().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,i().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${s.w4.colors.mainText};
  margin-bottom: 4px;
`,i().div`
  font-size: 11.5px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,i().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${s.w4.colors.accentMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
`,i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,i().button`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${s.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
    background: ${s.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${s.w4.focusRing}
  }
`,i().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,i().div`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
`,i().div`
  margin-top: 14px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`;let F={familyquiz:!0,tictactoe:!0,soundhunter:!0,adventure:!0,pixelboard:!0,memory:!0,stopgame:!0,tapit:!0,bombbrawl:!0,jumpparty:!0,lebem:!0,drawguess:!0,spotit:!0},L=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,O=i()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${L} 0.4s ease both;
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
      border-color: ${s.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${s.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,D=i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${s.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${s.w4.colors.codeBg};

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
`,H=i().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  z-index: 2;
`,N=i().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,G=i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
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
`,Y=i().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,q=i().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,V=i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
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
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,W=i().div`
  padding: 6px 14px 16px;
`,J=i().h3`
  margin: 0 0 6px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${s.w4.colors.mainText};

  .hash {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${s.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,X=i().p`
  margin: 0;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`;function U({label:e,description:o,emoji:a,iconName:r,hash:n,category:i,accentColor:s,playerCount:l,online:c,onlineLabel:d,index:p=0,vizId:m,vizLabel:u,onClick:g}){let f=m&&Object.prototype.hasOwnProperty.call(F,m)?m:null,h=f?`viz viz--${f}`:"viz";return(0,t.jsxs)(O,{role:"button",tabIndex:0,accentColor:s,index:p,onClick:g,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),g())},children:[(0,t.jsxs)(D,{className:h,accentColor:s,children:[l&&(0,t.jsx)(Y,{children:(0,t.jsxs)(P,{tone:"neutral",children:["\uD83D\uDC65 ",l]})}),c&&(0,t.jsx)(q,{children:(0,t.jsx)(P,{tone:"live",children:d??"ONLINE"})}),r?(0,t.jsx)(G,{className:"gamecard-emoji",accentColor:s,"aria-hidden":"true",children:(0,t.jsx)(v,{name:r,size:40})}):a?(0,t.jsx)(N,{className:"gamecard-emoji","aria-hidden":"true",children:a}):null,f&&u&&(0,t.jsx)(H,{children:u})]}),(0,t.jsxs)(V,{accentColor:s,children:[(0,t.jsx)("span",{className:"dot"}),(0,t.jsx)("span",{className:"cat",children:i})]}),(0,t.jsxs)(W,{children:[(0,t.jsxs)(J,{children:[e," ",(0,t.jsx)("span",{className:"hash",children:n})]}),(0,t.jsx)(X,{children:o})]})]})}a(5406),i().nav`padding: ${s.w4.spacing.sm} 0;`,i().div`
  border-bottom: 1px solid ${s.w4.colors.border}60;
  margin-bottom: 2px;
`,i().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${s.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${s.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${s.w4.colors.sidebarText}; }
`,i().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,i().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,i().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,i().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,i().div`overflow: hidden;`,i().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,i().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${s.w4.spacing.md};
  background: ${({active:e})=>e?s.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?s.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?s.w4.colors.sidebarActive:s.w4.colors.sidebarText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,i().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":s.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`,i().div`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,i().pre`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.md};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,i().div`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,i().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  margin-bottom: ${s.w4.spacing.md};
  text-align: center;
`,i().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  margin-top: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
`,i().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,i().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,i().pre`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.md};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,i().div`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.w4.spacing.md};
`,i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,i().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,i().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,i().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${s.w4.colors.accent};
    color: ${s.w4.colors.accent};
  }
`,i().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
`,i().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  text-align: center;
`;let K=(0,b.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;i().div`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.md};
  margin: ${s.w4.spacing.lg} 0;
`,i().div`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${s.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,i().div`
  display: flex;
  flex-direction: column;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${s.w4.colors.accent}40;
    box-shadow: 0 0 8px ${s.w4.colors.accent}15;
  }
`;let Q=i().button`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: 14px ${s.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${s.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${K} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;i()(Q)`
  border-bottom: 1px solid ${s.w4.colors.border}80;
`,i()(Q)``,i().span`
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
`,i().span`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${s.w4.colors.accent};
`,i().span`
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainTextMuted};
`;var Z=a(1426);i().div`
  margin: ${s.w4.spacing.lg} 0;
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${s.w4.colors.codeBorder};
  overflow: hidden;
`,i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${s.w4.colors.codeBorder};
`,i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":s.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${s.w4.colors.sidebarText}; border-color: ${s.w4.colors.sidebarText}; }
`,Z.A,Z.A['pre[class*="language-"]'],s.w4.colors.codeBg,Z.A['code[class*="language-"]'],i().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${s.w4.borderRadius.md} ${s.w4.borderRadius.md} 0;
  padding: ${s.w4.spacing.md} ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${s.w4.typography.fontFamily};
  margin-bottom: ${s.w4.spacing.sm};
`,i().div`
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,i().nav`
  width: 220px;
  min-width: 220px;
  padding: ${s.w4.spacing.xxl} 0 ${s.w4.spacing.xxl} ${s.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,i().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  margin-bottom: ${s.w4.spacing.md};
`,i().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,i().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${s.w4.typography.fontSizeSm};
  font-family: ${s.w4.typography.fontFamily};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  border-radius: 0 ${s.w4.borderRadius.sm} ${s.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${s.w4.colors.mainText}; background: ${s.w4.colors.sidebarHover}; }
`,i().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${s.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,i().div`flex: 1; min-width: 0;`,i().article`
  padding: ${s.w4.spacing.xxl} 0;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  line-height: ${s.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${s.w4.spacing.xl} 0 ${s.w4.spacing.md};
    color: ${s.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${s.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${s.w4.typography.fontSizeXl}; border-bottom: 1px solid ${s.w4.colors.border}; padding-bottom: ${s.w4.spacing.sm}; }
  h2 { font-size: ${s.w4.typography.fontSizeLg}; border-bottom: 1px solid ${s.w4.colors.border}; padding-bottom: ${s.w4.spacing.xs}; }
  h3 { font-size: ${s.w4.typography.fontSizeMd}; }

  p { margin: ${s.w4.spacing.md} 0; }

  a { color: ${s.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${s.w4.colors.accentHover}; } }

  ul, ol { margin: ${s.w4.spacing.md} 0; padding-left: ${s.w4.spacing.xl}; }
  li { margin: ${s.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${s.w4.colors.border};
    margin: ${s.w4.spacing.lg} 0;
    padding: ${s.w4.spacing.sm} ${s.w4.spacing.lg};
    background: ${s.w4.colors.surface};
    color: ${s.w4.colors.mainTextMuted};
    border-radius: 0 ${s.w4.borderRadius.sm} ${s.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${s.w4.colors.codeBg};
    border: 1px solid ${s.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${s.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${s.w4.spacing.lg} 0; font-size: ${s.w4.typography.fontSizeBase}; }
  th, td { padding: ${s.w4.spacing.sm} ${s.w4.spacing.md}; border: 1px solid ${s.w4.colors.border}; text-align: left; }
  th { background: ${s.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${s.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${s.w4.colors.border}; margin: ${s.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${s.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${s.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${s.w4.spacing.lg} 0; }
`,i().div`
  display: flex;
  gap: ${s.w4.spacing.lg};
  padding: ${s.w4.spacing.xxl} 0;
  border-top: 1px solid ${s.w4.colors.border};
  margin-top: ${s.w4.spacing.xxl};
`,i().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${s.w4.spacing.md} ${s.w4.spacing.lg};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,i().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${s.w4.colors.sidebarTextMuted}; font-family: ${s.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,i().div`
  font-size: ${s.w4.typography.fontSizeBase}; color: ${s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily}; font-weight: 500;
`,i().div`
  color: ${s.w4.colors.mainTextMuted};
  padding: ${s.w4.spacing.xxl} ${s.w4.spacing.xl};
  font-family: ${s.w4.typography.fontFamily};
`;let ee=(0,b.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eo=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;i().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${ee} 0.15s ease;
`,i().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${s.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${eo} 0.2s ease;
`,i().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${s.w4.colors.border};
`,i().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
`,i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${s.w4.colors.sidebarHover};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${s.w4.colors.mainText}; background: ${s.w4.colors.border}; }
`,i().div`
  flex: 1;
  overflow-y: auto;
  padding: ${s.w4.spacing.sm} 0;
`,i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.sidebarTextMuted};
`,i().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,i().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?s.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,i().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${s.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${s.w4.colors.accent}20`:s.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,i().div`
  flex: 1;
  min-width: 0;
`,i().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,i().span`
  font-weight: 400;
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.sidebarTextMuted};
`,i().span`
  font-size: 11px;
  font-weight: 500;
  color: ${s.w4.colors.accent};
  background: ${s.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
`,i().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${s.w4.colors.accent}25;
    color: ${s.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,i().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?s.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,i().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${s.w4.colors.border};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
`,i().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${s.w4.colors.sidebarHover};
  border: 1px solid ${s.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.sidebarTextMuted};
`,i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  text-align: center;
`,i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${s.w4.typography.fontFamily};
  background: ${s.w4.colors.mainBg};
`,i().div`
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
`,i().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${s.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${s.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,i().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,i().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${s.w4.colors.mainText} 0%,
    ${s.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,i().p`
  font-size: ${s.w4.typography.fontSizeMd};
  color: ${s.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,i().span`
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${s.w4.colors.sidebarHover};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: ${s.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${s.w4.colors.accent}60;
    color: ${s.w4.colors.mainText};
    background: ${s.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${s.w4.colors.surface};
    border: 1px solid ${s.w4.colors.border};
    border-radius: 3px;
    color: ${s.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,i().div`
  display: flex;
  gap: 4px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 2px;
`,i().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":s.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":s.w4.colors.mainText};
  }
`,i().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${s.w4.spacing.md}`};
  border-bottom: 1px solid ${s.w4.colors.border}60;
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${s.w4.colors.accent}10`:s.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${s.w4.colors.accent}40`:"transparent"};
  border-radius: ${s.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,i().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.sidebarText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
`,i().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  border-radius: ${s.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${s.w4.colors.mainText}; }
`,i().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${s.w4.spacing.sm} 0;
`,i().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${s.w4.spacing.md};
  background: ${({active:e})=>e?s.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?s.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${s.w4.colors.sidebarText};
`,i().span`
  font-weight: 400;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,i().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  color: ${s.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${s.w4.colors.accent}30;
    color: ${s.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,i().div`
  padding: 12px ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,i().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,i().span`
  font-size: 11px;
  color: ${s.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,i().div`
  font-size: 14px;
  color: ${s.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${s.w4.colors.mainText};
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
    accent-color: ${s.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${s.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${s.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${s.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${s.w4.colors.accent};
    background: ${s.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${s.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${s.w4.colors.codeBg};
    border: 1px solid ${s.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${s.w4.colors.mainText};
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
    border-radius: ${s.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${s.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${s.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${s.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${s.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${s.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${s.w4.colors.border};
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
`,i().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${s.w4.spacing.sm} 0;
`,i().div`
  font-size: 10px;
  font-weight: 600;
  color: ${s.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${s.w4.spacing.xs} ${s.w4.spacing.md};
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
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${s.w4.borderRadius.md};
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,i().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,i().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`}}]);