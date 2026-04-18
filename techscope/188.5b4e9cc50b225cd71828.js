"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[188],{188(e,a,n){var o=n(7359),t=n(8997),i=n(3233),l=n(7207),r=n(6879),c=n(894),d=n(8283),s=n(6010),p=n(8887),u=n(5723);const h=new Set(["github","hackernews","packages","devcommunity"]),m={"live-pulse":"github","experiment-zone":"github","today-in-tech":"hackernews","ai-radar":"hackernews","community-feed":"hackernews","package-radar":"packages","npm-trends":"packages","tech-articles":"devcommunity","dev-pulse":"devcommunity"},v=l.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,g=i.default.div`
  padding: ${r.w4.spacing.sm} 0;
`,b=i.default.div`
  margin-bottom: 2px;
`,w=i.default.button`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  width: 100%;
  padding: 8px ${r.w4.spacing.md};
  padding-left: ${({indent:e})=>e?r.w4.spacing.xl:r.w4.spacing.md};
  background: ${({active:e,accentColor:a})=>e?`${a??r.w4.colors.accent}14`:"transparent"};
  border: none;
  border-left: 2px solid ${({active:e,accentColor:a})=>e?a??r.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?r.w4.colors.mainText:r.w4.colors.sidebarText};
  font-size: ${r.w4.typography.fontSizeSm};
  font-family: ${r.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  text-align: left;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${r.w4.colors.mainText};
  }
`,f=i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${v} 2.4s ease-in-out infinite;
`,x=i.default.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,k=i.default.div`
  font-size: 10px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.sidebarTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.md} 4px;
  margin-top: ${r.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  display: ${({hidden:e})=>e?"none":"block"};
`;function y({t:e,view:a,activePanel:n,onNavClick:o}){const{collapsed:t}=(0,r.cL)();return(0,u.jsxs)(g,{children:[(0,u.jsxs)(w,{active:"journal"===a,onClick:()=>o("journal"),title:t?e("nav.journal"):void 0,children:[(0,u.jsx)(f,{color:r.w4.colors.accent}),!t&&(0,u.jsx)(x,{children:e("nav.journal")})]}),j.map(i=>(0,u.jsxs)(b,{children:[(0,u.jsx)(k,{hidden:t,children:e(i.label)}),(0,u.jsxs)(w,{active:a===i.id&&!n,accentColor:i.color,onClick:()=>o(i.id),title:t?e(i.label):void 0,children:[(0,u.jsx)(f,{color:i.color}),!t&&(0,u.jsx)(x,{children:e(i.label)})]}),!t&&a===i.id&&i.children.map(a=>(0,u.jsx)(w,{active:n===a.id,indent:!0,accentColor:i.color,onClick:()=>o(a.id),children:(0,u.jsx)(x,{children:e(a.label)})},a.id))]},i.id))]})}const j=[{id:"github",label:"nav.github",color:"#3fb950",children:[{id:"live-pulse",label:"nav.livePulse"},{id:"experiment-zone",label:"nav.experimentZone"}]},{id:"hackernews",label:"nav.hackernews",color:"#ff6600",children:[{id:"today-in-tech",label:"nav.todayInTech"},{id:"ai-radar",label:"nav.aiRadar"},{id:"community-feed",label:"nav.communityFeed"}]},{id:"packages",label:"nav.packages",color:"#cb3837",children:[{id:"package-radar",label:"nav.packageRadar"},{id:"npm-trends",label:"nav.npmPulse"}]},{id:"devcommunity",label:"nav.devCommunity",color:"#7c3aed",children:[{id:"tech-articles",label:"nav.techArticles"},{id:"dev-pulse",label:"nav.devPulse"}]}];function $({topBarRight:e}){const[a]=(0,c.Ym)(),n=(0,o.useMemo)(()=>(0,c.Nx)(a,p.A),[a]),[t,i]=(0,o.useState)("journal"),[l,v]=(0,o.useState)(null),g=(0,o.useCallback)(e=>{if("journal"===e)return i("journal"),void v(null);if(h.has(e))return i(e),void v(null);const a=m[e];a&&(i(a),v(e),requestAnimationFrame(()=>{const a=document.getElementById(e);a?.scrollIntoView({behavior:"smooth",block:"start"})}))},[]),b=(0,u.jsx)(y,{t:n,view:t,activePanel:l,onNavClick:g});return(0,u.jsxs)(r.PE,{title:"TechScope",sidebar:b,activeId:l??t,topBarRight:e,children:["journal"===t&&(0,u.jsx)(d.A,{onNavigate:i,t:n}),"journal"!==t&&(0,u.jsx)(s.W,{category:t,t:n})]})}const C=document.getElementById("root");if(!C)throw new Error("Root element #root not found");(0,t.H)(C).render((0,u.jsx)($,{}))},8997(e,a,n){var o=n(8991);a.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.5b4e9cc50b225cd71828.js.map