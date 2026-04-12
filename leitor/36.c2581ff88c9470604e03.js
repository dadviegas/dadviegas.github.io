"use strict";(self.webpackChunk_atlantis_leitor=self.webpackChunk_atlantis_leitor||[]).push([[36],{6036(e,s,o){o.r(s),o.d(s,{default:()=>m});var t=o(7359),i=o(3233),n=o(4079),l=o(5586),a=o(8903),r=o(5220),d=o(4698),c=o(7661),h=o(5723);const f=i.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding: 0 ${n.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${n.w4.spacing.sm};
  z-index: 100;
`,p=i.default.a`
  display: flex;
  align-items: baseline;
  text-decoration: none;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${n.w4.colors.accent}; }
`,g=i.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  padding-left: ${n.w4.spacing.sm};
  &::before {
    content: '/';
    margin-right: ${n.w4.spacing.sm};
    color: ${n.w4.colors.border};
  }
`,u=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
`,x=i.default.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function m(e){const[s,o]=(0,t.useState)(()=>(0,d.K7)()),[i,n]=(0,t.useState)(()=>(0,c.d)());(0,t.useEffect)(()=>((0,c.dq)(),(0,c.Gq)(n)),[]);const[m,w]=(0,t.useState)({id:"home"}),y=(0,t.useCallback)(e=>{o(s=>{const o=(0,d.fm)(e(s));return(0,d.FB)(o),o})},[]),b=(0,t.useCallback)(e=>{y(s=>(0,d.dw)(s,e))},[y]),$=(0,t.useCallback)((e,s,o)=>{y(t=>(0,d.$s)(t,e,s,o)),w({id:"home"})},[y]),j=(0,h.jsxs)(f,{children:[(0,h.jsxs)(p,{href:"/",title:"Atlantis Home",children:["Atl",(0,h.jsx)("span",{children:"antis"})]}),(0,h.jsx)(g,{children:"LêBem"})]});return"lesson"===m.id?(0,h.jsxs)(u,{children:[j,(0,h.jsx)(x,{children:(0,h.jsx)(a.R,{lessonId:m.lessonId,progress:s,onBack:()=>w({id:"home"}),onComplete:$,onToggleFavorite:b})})]}):"favorites"===m.id?(0,h.jsxs)(u,{children:[j,(0,h.jsx)(x,{children:(0,h.jsx)(r.k,{progress:s,onBack:()=>w({id:"home"}),onToggleFavorite:b})})]}):(0,h.jsxs)(u,{children:[j,(0,h.jsx)(x,{children:(0,h.jsx)(l.u,{progress:s,speechDebug:i,onSelectLesson:e=>w({id:"lesson",lessonId:e}),onOpenFavorites:()=>w({id:"favorites"}),onSpeechTest:c.tl})})]})}}}]);
//# sourceMappingURL=36.c2581ff88c9470604e03.js.map