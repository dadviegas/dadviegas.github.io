"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[36],{6036(e,a,n){n.r(a),n.d(a,{default:()=>y});var i=n(7359),o=n(3233),l=n(7207),t=n(458),r=n(894),c=n(8283),s=n(6010),d=n(8887),p=n(5723);const u=new Set(["github","hackernews","packages","devcommunity"]),h={"live-pulse":"github","experiment-zone":"github","today-in-tech":"hackernews","ai-radar":"hackernews","community-feed":"hackernews","package-radar":"packages","npm-trends":"packages","tech-articles":"devcommunity","dev-pulse":"devcommunity"},m=l.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,g=o.default.div`
  padding: ${t.w4.spacing.sm} 0;
`,v=o.default.div`
  margin-bottom: 2px;
`,b=o.default.button`
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
`,f=o.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${m} 2.4s ease-in-out infinite;
`,x=o.default.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,w=o.default.div`
  font-size: 10px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.sidebarTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.md} 4px;
  margin-top: ${t.w4.spacing.sm};
`,k=[{id:"github",label:"nav.github",color:"#3fb950",children:[{id:"live-pulse",label:"nav.livePulse"},{id:"experiment-zone",label:"nav.experimentZone"}]},{id:"hackernews",label:"nav.hackernews",color:"#ff6600",children:[{id:"today-in-tech",label:"nav.todayInTech"},{id:"ai-radar",label:"nav.aiRadar"},{id:"community-feed",label:"nav.communityFeed"}]},{id:"packages",label:"nav.packages",color:"#cb3837",children:[{id:"package-radar",label:"nav.packageRadar"},{id:"npm-trends",label:"nav.npmPulse"}]},{id:"devcommunity",label:"nav.devCommunity",color:"#7c3aed",children:[{id:"tech-articles",label:"nav.techArticles"},{id:"dev-pulse",label:"nav.devPulse"}]}];function y({topBarRight:e}){const[a]=(0,r.Ym)(),n=(0,i.useMemo)(()=>(0,r.Nx)(a,d.A),[a]),[o,l]=(0,i.useState)("journal"),[m,y]=(0,i.useState)(null),j=(0,i.useCallback)(e=>{if("journal"===e)return l("journal"),void y(null);if(u.has(e))return l(e),void y(null);const a=h[e];a&&(l(a),y(e),requestAnimationFrame(()=>{const a=document.getElementById(e);a?.scrollIntoView({behavior:"smooth",block:"start"})}))},[]),$=(0,p.jsxs)(g,{children:[(0,p.jsxs)(b,{active:"journal"===o,onClick:()=>j("journal"),children:[(0,p.jsx)(f,{color:t.w4.colors.accent}),(0,p.jsx)(x,{children:n("nav.journal")})]}),k.map(e=>(0,p.jsxs)(v,{children:[(0,p.jsx)(w,{children:n(e.label)}),(0,p.jsxs)(b,{active:o===e.id&&!m,accentColor:e.color,onClick:()=>j(e.id),children:[(0,p.jsx)(f,{color:e.color}),(0,p.jsx)(x,{children:n(e.label)})]}),o===e.id&&e.children.map(a=>(0,p.jsx)(b,{active:m===a.id,indent:!0,accentColor:e.color,onClick:()=>j(a.id),children:(0,p.jsx)(x,{children:n(a.label)})},a.id))]},e.id))]});return(0,p.jsxs)(t.PE,{title:"TechScope",sidebar:$,activeId:m??o,topBarRight:e,children:["journal"===o&&(0,p.jsx)(c.A,{onNavigate:l,t:n}),"journal"!==o&&(0,p.jsx)(s.W,{category:o,t:n})]})}}}]);
//# sourceMappingURL=36.69c3f5ce80eeb5fa9de7.js.map