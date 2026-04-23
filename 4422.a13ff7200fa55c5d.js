"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["4422"],{24853(e,o,t){t.d(o,{LearnLauncherWidget:()=>z});var i=t(65723),l=t(37991),n=t(36859),r=t.n(n),a=t(72799),s=t(23930),c=t(28170),d=t(98975);let p=(0,a.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=r().div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  animation: ${p} 0.3s ease both;
`,x=r().div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`,f=r().div`
  width: 54px;
  height: 54px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  flex-shrink: 0;
`,g=r().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,b=r().div`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${s.w4.colors.mainText};
  margin-bottom: 2px;
`,u=r().div`
  font-size: 11.5px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.3;
  margin-bottom: 8px;
`,m=r().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${s.w4.colors.accentMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
`,y=r().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,w=r().button`
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
  cursor: pointer;
  transition: border-color ${s.w4.transitions.fast}, background ${s.w4.transitions.fast};

  &:hover { border-color: ${s.w4.colors.borderStrong}; background: ${s.w4.colors.surfaceHover}; }
  &:focus-visible { outline: 2px solid ${s.w4.colors.accent}; outline-offset: -1px; }
`,$=r().div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`,k=r().div`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
`,v=r().button`
  display: inline-flex;
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: ${({color:e})=>e};

  &:hover { opacity: 0.8; }
  &:focus-visible { outline: 2px solid ${s.w4.colors.accent}; outline-offset: 2px; }
`,j=[{id:"school",glyph:"✎",label:"Escola",bg:"#c4844a",hash:"#/school"},{id:"leitor",glyph:"ℓ",label:"Leitor",bg:"#c44a4a",hash:"#/leitor"},{id:"games",glyph:"◉",label:"Jogos",bg:"#4a6fc4",hash:"#/games"},{id:"cosmos",glyph:"☿",label:"Cosmos",bg:"#4a4a4a",hash:"#/cosmos"},{id:"earth",glyph:"⨁",label:"Earth",bg:"#7aa86c",hash:"#/earth"},{id:"weather",glyph:"☀",label:"Tempo",bg:"#5e4cbb",hash:"#/weather"}];function z({locale:e}){let o="pt"===e?"pt":"en",t=(0,l.useMemo)(()=>(0,c.Nx)(o,d.A),[o]);return(0,i.jsxs)(h,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(f,{bg:"linear-gradient(135deg, #2f5c4f 0%, #3e805f 100%)",children:"⌘"}),(0,i.jsxs)(g,{children:[(0,i.jsx)(b,{children:t("learnLauncher.title")}),(0,i.jsx)(u,{children:t("learnLauncher.subtitle")}),(0,i.jsxs)(m,{children:[j.length," ",t("learnLauncher.count")]})]})]}),(0,i.jsx)(y,{children:j.map(e=>(0,i.jsxs)(w,{type:"button",onClick:()=>{window.location.hash=e.hash},"aria-label":e.label,children:[(0,i.jsx)($,{bg:e.bg,children:e.glyph}),(0,i.jsx)(k,{children:e.label})]},e.id))}),(0,i.jsx)(v,{color:s.w4.suites.learn,type:"button",onClick:()=>{window.location.hash="#/school"},children:t("learnLauncher.open")})]})}}}]);