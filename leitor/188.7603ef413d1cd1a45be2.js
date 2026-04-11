"use strict";(self.webpackChunk_atlantis_leitor=self.webpackChunk_atlantis_leitor||[]).push([[188],{188(e,o,t){var s=t(7359),n=t(8997),i=t(3233),r=t(906),l=t(5586),a=t(8903),d=t(5220),c=t(4698),h=t(7661),f=t(5723);const p=i.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${r.w4.colors.sidebarBg};
  border-bottom: 1px solid ${r.w4.colors.sidebarBorder};
  padding: 0 ${r.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${r.w4.spacing.sm};
  z-index: 100;
`,g=i.default.a`
  display: flex;
  align-items: baseline;
  text-decoration: none;
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${r.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${r.w4.colors.accent}; }
`,u=i.default.div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  padding-left: ${r.w4.spacing.sm};
  &::before {
    content: '/';
    margin-right: ${r.w4.spacing.sm};
    color: ${r.w4.colors.border};
  }
`,x=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
`,m=i.default.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function w(e){const[o,t]=(0,s.useState)(()=>(0,c.K7)()),[n,i]=(0,s.useState)(()=>(0,h.d)());(0,s.useEffect)(()=>((0,h.dq)(),(0,h.Gq)(i)),[]);const[r,w]=(0,s.useState)({id:"home"}),y=(0,s.useCallback)(e=>{t(o=>{const t=(0,c.fm)(e(o));return(0,c.FB)(t),t})},[]),b=(0,s.useCallback)(e=>{y(o=>(0,c.dw)(o,e))},[y]),$=(0,s.useCallback)((e,o,t)=>{y(s=>(0,c.$s)(s,e,o,t)),w({id:"home"})},[y]),j=(0,f.jsxs)(p,{children:[(0,f.jsxs)(g,{href:"/",title:"Atlantis Home",children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(u,{children:"LêBem"})]});return"lesson"===r.id?(0,f.jsxs)(x,{children:[j,(0,f.jsx)(m,{children:(0,f.jsx)(a.R,{lessonId:r.lessonId,progress:o,onBack:()=>w({id:"home"}),onComplete:$,onToggleFavorite:b})})]}):"favorites"===r.id?(0,f.jsxs)(x,{children:[j,(0,f.jsx)(m,{children:(0,f.jsx)(d.k,{progress:o,onBack:()=>w({id:"home"}),onToggleFavorite:b})})]}):(0,f.jsxs)(x,{children:[j,(0,f.jsx)(m,{children:(0,f.jsx)(l.u,{progress:o,speechDebug:n,onSelectLesson:e=>w({id:"lesson",lessonId:e}),onOpenFavorites:()=>w({id:"favorites"}),onSpeechTest:h.tl})})]})}const y=document.getElementById("root");if(!y)throw new Error("Root element #root not found");(0,n.H)(y).render((0,f.jsx)(w,{}))},8997(e,o,t){var s=t(8991);o.H=s.createRoot,s.hydrateRoot}}]);
//# sourceMappingURL=188.7603ef413d1cd1a45be2.js.map