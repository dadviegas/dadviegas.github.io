"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["333"],{28044(e,t,s){s.d(t,{PetWidget:()=>O});var i=s(65723),n=s(37991),r=s(36859),a=s.n(r),o=s(72799),l=s(23930),c=s(48294);let x={ecstatic:{en:"Purring loudly!",pt:"A ronronar alto!"},happy:{en:"Feeling great~",pt:"Est\xe1 \xf3timo~"},content:{en:"Chilling...",pt:"Relaxando..."},lonely:{en:"Misses you...",pt:"Tem saudades..."},dramatic:{en:"WHERE WERE YOU?!",pt:"ONDE ESTAVAS?!"}},d=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,p=(0,o.keyframes)`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.03); }
`,f=(0,o.keyframes)`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(8deg); }
`,y=(0,o.keyframes)`
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
`,m=(0,o.keyframes)`
  0%, 42%, 44%, 100% { ry: 7; }
  43% { ry: 1; }
`,h=(0,o.keyframes)`
  0%, 100% { ry: 1; }
`,u=(0,o.keyframes)`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-0.5px); }
  75% { transform: translateX(0.5px); }
`,g=(0,o.keyframes)`
  0% { opacity: 1; transform: translate(0, 0) scale(1); }
  100% { opacity: 0; transform: translate(var(--dx), -40px) scale(0.5); }
`,j=(0,o.keyframes)`
  0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
  30% { opacity: 1; transform: translate(4px, -8px) scale(0.8); }
  100% { opacity: 0; transform: translate(10px, -20px) scale(1); }
`,k=(0,o.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
`,b=(0,o.keyframes)`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
`,w=a().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${d} 0.3s ease both;
  user-select: none;
`,$=a().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,v=a().span`
  color: ${l.w4.colors.mainText};
  font-weight: 700;
`,M=a().div`
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
    svg .cat-body { animation: ${u} 0.15s ease infinite; }
  `}
`,W=a().div`
  position: absolute;
  font-size: 16px;
  pointer-events: none;
  --dx: ${({dx:e})=>e}px;
  animation: ${g} 0.8s ease-out forwards;
`,z=a().text`
  font-size: 14px;
  fill: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 700;
`,F=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`,L=a().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-style: italic;
`,T=a().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,Q=a().div`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background: ${l.w4.colors.border};
  overflow: hidden;
`,C=a().div`
  width: ${({pct:e})=>e}%;
  height: 100%;
  border-radius: 2px;
  transition: width 0.6s ease, background 0.3s;
  background: ${({mood:e})=>{switch(e){case"ecstatic":return"#3fb950";case"happy":return"#58a6ff";case"content":return"#d29922";case"lonely":return"#f97316";case"dramatic":return"#f85149"}}};
`,E=a().button`
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
`;function S({mood:e}){let t="lonely"===e||"dramatic"===e,s="ecstatic"===e||"happy"===e,n=(()=>{switch(e){case"ecstatic":return"M 92,104 Q 100,114 108,104";case"happy":return"M 94,104 Q 100,110 106,104";case"content":return"M 95,105 L 105,105";case"lonely":return"M 94,108 Q 100,103 106,108";case"dramatic":return"M 92,110 Q 100,102 108,110"}})(),r=s?"#4ade80":t?"#f97316":"#58a6ff";return(0,i.jsxs)("svg",{viewBox:"0 0 200 200",width:"140",height:"140",children:[(0,i.jsxs)("g",{style:{transformOrigin:"145px 155px",animation:`${t?y:f} ${t?"4s":"2s"} ease-in-out infinite`},children:[(0,i.jsx)("path",{d:"M 140,155 Q 160,130 170,110 Q 175,100 168,95",stroke:"#7c6f5b",strokeWidth:"6",fill:"none",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M 140,155 Q 160,130 170,110 Q 175,100 168,95",stroke:"#9a8c78",strokeWidth:"4",fill:"none",strokeLinecap:"round"})]}),(0,i.jsxs)("g",{className:"cat-body",style:{transformOrigin:"100px 155px",animation:`${p} 3s ease-in-out infinite`},children:[(0,i.jsx)("ellipse",{cx:"100",cy:"155",rx:"40",ry:"28",fill:"#9a8c78"}),(0,i.jsx)("ellipse",{cx:"100",cy:"160",rx:"25",ry:"18",fill:"#b5a894"})]}),(0,i.jsx)("ellipse",{cx:"72",cy:"175",rx:"12",ry:"7",fill:"#9a8c78"}),(0,i.jsx)("ellipse",{cx:"128",cy:"175",rx:"12",ry:"7",fill:"#9a8c78"}),(0,i.jsx)("ellipse",{cx:"72",cy:"177",rx:"5",ry:"3",fill:"#c4b5a0"}),(0,i.jsx)("ellipse",{cx:"128",cy:"177",rx:"5",ry:"3",fill:"#c4b5a0"}),(0,i.jsx)("circle",{cx:"100",cy:"95",r:"36",fill:"#9a8c78"}),(0,i.jsx)("ellipse",{cx:"75",cy:"100",rx:"10",ry:"6",fill:"#a89880"}),(0,i.jsx)("ellipse",{cx:"125",cy:"100",rx:"10",ry:"6",fill:"#a89880"}),(0,i.jsxs)("g",{style:{transformOrigin:"78px 68px",animation:t?`${k} 3s ease-in-out infinite`:void 0},children:[(0,i.jsx)("polygon",{points:"78,68 62,28 92,58",fill:"#9a8c78"}),(0,i.jsx)("polygon",{points:"79,65 67,38 88,58",fill:"#e8a0b0"})]}),(0,i.jsxs)("g",{style:{transformOrigin:"122px 68px",animation:t?`${b} 3s ease-in-out infinite`:void 0},children:[(0,i.jsx)("polygon",{points:"122,68 138,28 108,58",fill:"#9a8c78"}),(0,i.jsx)("polygon",{points:"121,65 133,38 112,58",fill:"#e8a0b0"})]}),(0,i.jsx)("path",{d:"M 92,70 L 95,80",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M 100,68 L 100,78",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M 108,70 L 105,80",stroke:"#8a7d69",strokeWidth:"1.5",strokeLinecap:"round"}),(0,i.jsx)("ellipse",{cx:"85",cy:"90",rx:"7",ry:t?1:7,fill:r,style:t?{animation:`${h} 1s ease infinite`}:{animation:`${m} 4s ease-in-out infinite`,animationDelay:"0.5s"}}),(0,i.jsx)("ellipse",{cx:"115",cy:"90",rx:"7",ry:t?1:7,fill:r,style:t?{animation:`${h} 1s ease infinite`}:{animation:`${m} 4s ease-in-out infinite`}}),!t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("circle",{cx:s?86:85,cy:s?89:90,r:s?4:3.5,fill:"#0d1117"}),(0,i.jsx)("circle",{cx:s?116:115,cy:s?89:90,r:s?4:3.5,fill:"#0d1117"}),(0,i.jsx)("circle",{cx:83,cy:87,r:1.5,fill:"white",opacity:.8}),(0,i.jsx)("circle",{cx:113,cy:87,r:1.5,fill:"white",opacity:.8})]}),(0,i.jsx)("polygon",{points:"100,97 96,101 104,101",fill:"#e8a0b0"}),(0,i.jsx)("path",{d:n,stroke:"#7c6f5b",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),(0,i.jsx)("line",{x1:"55",y1:"96",x2:"78",y2:"95",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"55",y1:"102",x2:"78",y2:"100",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"55",y1:"108",x2:"78",y2:"104",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"145",y1:"96",x2:"122",y2:"95",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"145",y1:"102",x2:"122",y2:"100",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),(0,i.jsx)("line",{x1:"145",y1:"108",x2:"122",y2:"104",stroke:"#7c6f5b",strokeWidth:"1",opacity:"0.6"}),t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("g",{style:{animation:`${j} 2s ease-in-out infinite`},children:(0,i.jsx)(z,{x:"130",y:"72",children:"z"})}),(0,i.jsx)("g",{style:{animation:`${j} 2s ease-in-out 0.6s infinite`},children:(0,i.jsx)(z,{x:"140",y:"60",fontSize:"11",children:"z"})}),(0,i.jsx)("g",{style:{animation:`${j} 2s ease-in-out 1.2s infinite`},children:(0,i.jsx)(z,{x:"148",y:"48",fontSize:"9",children:"z"})})]}),"ecstatic"===e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("text",{x:"45",y:"55",fontSize:"10",opacity:"0.7",children:"✨"}),(0,i.jsx)("text",{x:"148",y:"50",fontSize:"8",opacity:"0.5",children:"✨"})]})]})}function O({locale:e}){let{state:t,loaded:s,mood:r,pet:a,feed:o}=(0,c.usePet)(),[l,d]=(0,n.useState)([]),p=(0,n.useRef)(0),f=(0,n.useCallback)(()=>{let e=p.current++,t=(Math.random()-.5)*40;d(s=>[...s,{id:e,dx:t}]),setTimeout(()=>d(t=>t.filter(t=>t.id!==e)),800),a()},[a]),y=(0,n.useCallback)(()=>{o()},[o]);if(!s)return null;let m="pt"===e?x[r].pt:x[r].en;return(0,i.jsxs)(w,{children:[(0,i.jsxs)($,{children:[(0,i.jsxs)("span",{children:["\uD83D\uDC31 ",(0,i.jsx)(v,{children:t.name})]}),(0,i.jsxs)(T,{children:[(0,i.jsxs)("span",{children:["❤️ ",t.totalPets]}),(0,i.jsxs)("span",{children:["\uD83D\uDC1F ",t.totalFeeds]})]})]}),(0,i.jsxs)(M,{mood:r,onClick:f,title:"pt"===e?"Faz festinhas!":"Pet me!",children:[(0,i.jsx)(S,{mood:r}),l.map(e=>(0,i.jsx)(W,{dx:e.dx,children:"❤️"},e.id))]}),(0,i.jsxs)(F,{children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,i.jsx)(L,{children:m}),(0,i.jsx)(Q,{children:(0,i.jsx)(C,{pct:t.happiness,mood:r})})]}),(0,i.jsxs)(E,{onClick:e=>{e.stopPropagation(),y()},children:["\uD83D\uDC1F ","pt"===e?"Dar comida":"Feed"]})]})]})}}}]);