"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["333"],{28044(e,t,s){s.d(t,{PetWidget:()=>O});var i=s(65723),r=s(37991),n=s(36859),a=s.n(n),o=s(72799),l=s(6063),c=s(63236),x=s(6262),d=s(23971);let p={ecstatic:{en:"Purring loudly!",pt:"A ronronar alto!"},happy:{en:"Feeling great~",pt:"Est\xe1 \xf3timo~"},content:{en:"Chilling...",pt:"Relaxando..."},lonely:{en:"Misses you...",pt:"Tem saudades..."},dramatic:{en:"WHERE WERE YOU?!",pt:"ONDE ESTAVAS?!"}},f=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,y=(0,o.keyframes)`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.03); }
`,m=(0,o.keyframes)`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(8deg); }
`,h=(0,o.keyframes)`
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
`,u=(0,o.keyframes)`
  0%, 42%, 44%, 100% { ry: 7; }
  43% { ry: 1; }
`,j=(0,o.keyframes)`
  0%, 100% { ry: 1; }
`,g=(0,o.keyframes)`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-0.5px); }
  75% { transform: translateX(0.5px); }
`,k=(0,o.keyframes)`
  0% { opacity: 1; transform: translate(0, 0) scale(1); }
  100% { opacity: 0; transform: translate(var(--dx), -40px) scale(0.5); }
`,b=(0,o.keyframes)`
  0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
  30% { opacity: 1; transform: translate(4px, -8px) scale(0.8); }
  100% { opacity: 0; transform: translate(10px, -20px) scale(1); }
`,$=(0,o.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
`,w=(0,o.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
`,v=a().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  animation: ${f} 0.25s ease both;
  user-select: none;
`,M=a().span`
  color: ${l.w4.colors.mainText};
  font-weight: 700;
`,W=a().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border-radius: ${l.w4.borderRadius.md};
  transition: background ${l.w4.transitions.slow};

  &:hover {
    background: ${l.w4.colors.sidebarHover};
  }

  &:active svg {
    transform: scale(0.96);
  }

  svg {
    transition: transform ${l.w4.transitions.fast};
  }

  ${({mood:e})=>"ecstatic"===e&&(0,o.css)`
    svg .cat-body { animation: ${g} 0.15s ease infinite; }
  `}
`,z=a().div`
  position: absolute;
  font-size: 16px;
  pointer-events: none;
  --dx: ${({dx:e})=>e}px;
  animation: ${k} 0.8s ease-out forwards;
`,F=a().text`
  font-size: 14px;
  fill: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 700;
`,L=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`,C=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-style: italic;
`,Q=a().span`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,T=a().div`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background: ${l.w4.colors.border};
  overflow: hidden;
`,E=a().div`
  width: ${({pct:e})=>e}%;
  height: 100%;
  border-radius: 2px;
  transition: width 0.6s ease, background 0.3s;
  background: ${({mood:e})=>{switch(e){case"ecstatic":return"#3fb950";case"happy":return"#58a6ff";case"content":return"#d29922";case"lonely":return"#f97316";case"dramatic":return"#f85149"}}};
`,P=a().button`
  padding: 3px 10px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 12px;
  background: transparent;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  cursor: pointer;
  transition: ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }
`;function S({mood:e}){let t="lonely"===e||"dramatic"===e,s="ecstatic"===e||"happy"===e,r=(()=>{switch(e){case"ecstatic":return"M 92,104 Q 100,114 108,104";case"happy":return"M 94,104 Q 100,110 106,104";case"content":return"M 95,105 L 105,105";case"lonely":return"M 94,108 Q 100,103 106,108";case"dramatic":return"M 92,110 Q 100,102 108,110"}})(),n=s?"#4ade80":t?"#f97316":"#58a6ff";return(0,i.jsxs)("svg",{viewBox:"0 0 200 200",width:"140",height:"140",children:[(0,i.jsxs)("g",{style:{transformOrigin:"145px 155px",animation:`${t?h:m} ${t?"4s":"2s"} ease-in-out infinite`},children:[(0,i.jsx)("path",{d:"M 140,155 Q 160,130 170,110 Q 175,100 168,95",stroke:"#7c6f5b",strokeWidth:"6",fill:"none",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M 140,155 Q 160,130 170,110 Q 175,100 168,95",stroke:"#9a8c78",strokeWidth:"4",fill:"none",strokeLinecap:"round"})]}),(0,i.jsxs)("g",{className:"cat-body",style:{transformOrigin:"100px 155px",animation:`${y} 3s ease-in-out infinite`},children:[(0,i.jsx)("ellipse",{cx:"100",cy:"155",rx:"40",ry:"28",fill:"#9a8c78"}),(0,i.jsx)("ellipse",{cx:"100",cy:"160",rx:"25",ry:"18",fill:"#b5a894"})]}),(0,i.jsx)("ellipse",{cx:"72",cy:"175",rx:"12",ry:"7",fill:"#9a8c78"}),(0,i.jsx)("ellipse",{cx:"128",cy:"175",rx:"12",ry:"7",fill:"#9a8c78"}),(0,i.jsx)("ellipse",{cx:"72",cy:"177",rx:"5",ry:"3",fill:"#c4b5a0"}),(0,i.jsx)("ellipse",{cx:"128",cy:"177",rx:"5",ry:"3",fill:"#c4b5a0"}),(0,i.jsx)("circle",{cx:"100",cy:"95",r:"36",fill:"#9a8c78"}),(0,i.jsx)("ellipse",{cx:"75",cy:"100",rx:"10",ry:"6",fill:"#a89880"}),(0,i.jsx)("ellipse",{cx:"125",cy:"100",rx:"10",ry:"6",fill:"#a89880"}),(0,i.jsxs)("g",{style:{transformOrigin:"78px 68px",animation:t?`${$} 3s ease-in-out infinite`:void 0},children:[(0,i.jsx)("polygon",{points:"78,68 62,28 92,58",fill:"#9a8c78"}),(0,i.jsx)("polygon",{points:"79,65 67,38 88,58",fill:"#e8a0b0"})]}),(0,i.jsxs)("g",{style:{transformOrigin:"122px 68px",animation:t?`${w} 3s ease-in-out infinite`:void 0},children:[(0,i.jsx)("polygon",{points:"122,68 138,28 108,58",fill:"#9a8c78"}),(0,i.jsx)("polygon",{points:"121,65 133,38 112,58",fill:"#e8a0b0"})]}),(0,i.jsx)("path",{d:"M 92,70 L 95,80",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M 100,68 L 100,78",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M 108,70 L 105,80",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,i.jsx)("ellipse",{cx:"85",cy:"90",rx:"7",ry:t?1:7,fill:n,style:t?{animation:`${j} 1s ease infinite`}:{animation:`${u} 4s ease-in-out infinite`,animationDelay:"0.5s"}}),(0,i.jsx)("ellipse",{cx:"115",cy:"90",rx:"7",ry:t?1:7,fill:n,style:t?{animation:`${j} 1s ease infinite`}:{animation:`${u} 4s ease-in-out infinite`}}),!t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("circle",{cx:s?86:85,cy:s?89:90,r:s?4:3.5,fill:"#0d1117"}),(0,i.jsx)("circle",{cx:s?116:115,cy:s?89:90,r:s?4:3.5,fill:"#0d1117"}),(0,i.jsx)("circle",{cx:83,cy:87,r:1.5,fill:"white",opacity:.8}),(0,i.jsx)("circle",{cx:113,cy:87,r:1.5,fill:"white",opacity:.8})]}),(0,i.jsx)("polygon",{points:"100,97 96,101 104,101",fill:"#e8a0b0"}),(0,i.jsx)("path",{d:r,stroke:"#7c6f5b",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),(0,i.jsx)("line",{x1:"55",y1:"96",x2:"78",y2:"95",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"55",y1:"102",x2:"78",y2:"100",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"55",y1:"108",x2:"78",y2:"104",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"145",y1:"96",x2:"122",y2:"95",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"145",y1:"102",x2:"122",y2:"100",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"145",y1:"108",x2:"122",y2:"104",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("g",{style:{animation:`${b} 2s ease-in-out infinite`},children:(0,i.jsx)(F,{x:"130",y:"72",children:"z"})}),(0,i.jsx)("g",{style:{animation:`${b} 2s ease-in-out 0.6s infinite`},children:(0,i.jsx)(F,{x:"140",y:"60",fontSize:"11",children:"z"})}),(0,i.jsx)("g",{style:{animation:`${b} 2s ease-in-out 1.2s infinite`},children:(0,i.jsx)(F,{x:"148",y:"48",fontSize:"9",children:"z"})})]}),"ecstatic"===e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("text",{x:"45",y:"55",fontSize:"10",opacity:"0.7",children:"✨"}),(0,i.jsx)("text",{x:"148",y:"50",fontSize:"8",opacity:"0.5",children:"✨"})]})]})}function O({locale:e}){let{state:t,loaded:s,mood:n,pet:a,feed:o}=(0,x.usePet)(),[l,f]=(0,r.useState)([]),y=(0,r.useRef)(0),m=(0,r.useCallback)(()=>{let e=y.current++,t=(Math.random()-.5)*40;f(s=>[...s,{id:e,dx:t}]),setTimeout(()=>f(t=>t.filter(t=>t.id!==e)),800),a()},[a]),h=(0,r.useCallback)(()=>{o()},[o]),u=s?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(M,{children:t.name})}):(0,i.jsx)(i.Fragment,{children:"pt"===e?"Animal Virtual":"Digital Pet"}),j=s?(0,i.jsxs)(Q,{children:[(0,i.jsxs)("span",{children:["❤️ ",t.totalPets]}),(0,i.jsxs)("span",{children:["\uD83D\uDC1F ",t.totalFeeds]})]}):void 0,g=s?"pt"===e?p[n].pt:p[n].en:"";return(0,i.jsx)(c.rl,{title:u,accessory:j,accentColor:d.A.accentColor,children:s&&(0,i.jsxs)(v,{children:[(0,i.jsxs)(W,{mood:n,onClick:m,title:"pt"===e?"Faz festinhas!":"Pet me!",children:[(0,i.jsx)(S,{mood:n}),l.map(e=>(0,i.jsx)(z,{dx:e.dx,children:"❤️"},e.id))]}),(0,i.jsxs)(L,{children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,i.jsx)(C,{children:g}),(0,i.jsx)(T,{children:(0,i.jsx)(E,{pct:t.happiness,mood:n})})]}),(0,i.jsxs)(P,{onClick:e=>{e.stopPropagation(),h()},children:["\uD83D\uDC1F ","pt"===e?"Dar comida":"Feed"]})]})]})})}}}]);