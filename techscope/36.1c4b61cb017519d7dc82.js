"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[36],{6036(e,a,n){n.r(a),n.d(a,{default:()=>j});var i=n(7359),o=n(3233),l=n(7207),t=n(6879),c=n(894),r=n(8283),d=n(6010),s=n(8887),p=n(5723);const u=new Set(["github","hackernews","packages","devcommunity"]),h={"live-pulse":"github","experiment-zone":"github","today-in-tech":"hackernews","ai-radar":"hackernews","community-feed":"hackernews","package-radar":"packages","npm-trends":"packages","tech-articles":"devcommunity","dev-pulse":"devcommunity"},v=l.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,m=o.default.div`
  padding: ${t.w4.spacing.sm} 0;
`,b=o.default.div`
  margin-bottom: 2px;
`,g=o.default.button`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  width: 100%;
  padding: 8px ${t.w4.spacing.md};
  padding-left: ${({indent:e})=>e?t.w4.spacing.xl:t.w4.spacing.md};
  background: ${({active:e,accentColor:a})=>e?`${a??t.w4.colors.accent}14`:"transparent"};
  border: none;
  border-left: 2px solid ${({active:e,accentColor:a})=>e?a??t.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?t.w4.colors.mainText:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeSm};
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  text-align: left;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`,w=o.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${v} 2.4s ease-in-out infinite;
`,f=o.default.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,x=o.default.div`
  font-size: 10px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.sidebarTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.md} 4px;
  margin-top: ${t.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  display: ${({hidden:e})=>e?"none":"block"};
`;function k({t:e,view:a,activePanel:n,onNavClick:i}){const{collapsed:o}=(0,t.cL)();return(0,p.jsxs)(m,{children:[(0,p.jsxs)(g,{active:"journal"===a,onClick:()=>i("journal"),title:o?e("nav.journal"):void 0,children:[(0,p.jsx)(w,{color:t.w4.colors.accent}),!o&&(0,p.jsx)(f,{children:e("nav.journal")})]}),y.map(l=>(0,p.jsxs)(b,{children:[(0,p.jsx)(x,{hidden:o,children:e(l.label)}),(0,p.jsxs)(g,{active:a===l.id&&!n,accentColor:l.color,onClick:()=>i(l.id),title:o?e(l.label):void 0,children:[(0,p.jsx)(w,{color:l.color}),!o&&(0,p.jsx)(f,{children:e(l.label)})]}),!o&&a===l.id&&l.children.map(a=>(0,p.jsx)(g,{active:n===a.id,indent:!0,accentColor:l.color,onClick:()=>i(a.id),children:(0,p.jsx)(f,{children:e(a.label)})},a.id))]},l.id))]})}const y=[{id:"github",label:"nav.github",color:"#3fb950",children:[{id:"live-pulse",label:"nav.livePulse"},{id:"experiment-zone",label:"nav.experimentZone"}]},{id:"hackernews",label:"nav.hackernews",color:"#ff6600",children:[{id:"today-in-tech",label:"nav.todayInTech"},{id:"ai-radar",label:"nav.aiRadar"},{id:"community-feed",label:"nav.communityFeed"}]},{id:"packages",label:"nav.packages",color:"#cb3837",children:[{id:"package-radar",label:"nav.packageRadar"},{id:"npm-trends",label:"nav.npmPulse"}]},{id:"devcommunity",label:"nav.devCommunity",color:"#7c3aed",children:[{id:"tech-articles",label:"nav.techArticles"},{id:"dev-pulse",label:"nav.devPulse"}]}];function j({topBarRight:e}){const[a]=(0,c.Ym)(),n=(0,i.useMemo)(()=>(0,c.Nx)(a,s.A),[a]),[o,l]=(0,i.useState)("journal"),[v,m]=(0,i.useState)(null),b=(0,i.useCallback)(e=>{if("journal"===e)return l("journal"),void m(null);if(u.has(e))return l(e),void m(null);const a=h[e];a&&(l(a),m(e),requestAnimationFrame(()=>{const a=document.getElementById(e);a?.scrollIntoView({behavior:"smooth",block:"start"})}))},[]),g=(0,p.jsx)(k,{t:n,view:o,activePanel:v,onNavClick:b});return(0,p.jsxs)(t.PE,{title:"TechScope",sidebar:g,activeId:v??o,topBarRight:e,children:["journal"===o&&(0,p.jsx)(r.A,{onNavigate:l,t:n}),"journal"!==o&&(0,p.jsx)(d.W,{category:o,t:n})]})}}}]);
//# sourceMappingURL=36.1c4b61cb017519d7dc82.js.map