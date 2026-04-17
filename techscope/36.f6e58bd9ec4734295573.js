"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[36],{6036(e,a,n){n.r(a),n.d(a,{default:()=>y});var i=n(7359),l=n(3233),o=n(7207),t=n(9178),c=n(894),r=n(8283),s=n(6010),d=n(8887),p=n(5723);const u=new Set(["github","hackernews","packages","devcommunity"]),h={"live-pulse":"github","experiment-zone":"github","today-in-tech":"hackernews","ai-radar":"hackernews","community-feed":"hackernews","package-radar":"packages","npm-trends":"packages","tech-articles":"devcommunity","dev-pulse":"devcommunity"},m=o.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,g=l.default.div`
  padding: ${t.w4.spacing.sm} 0;
`,v=l.default.div`
  margin-bottom: 2px;
`,b=l.default.button`
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
`,x=l.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${m} 2.4s ease-in-out infinite;
`,f=l.default.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,w=l.default.div`
  font-size: 10px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.sidebarTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.md} 4px;
  margin-top: ${t.w4.spacing.sm};
`,k=[{id:"github",label:"nav.github",color:"#3fb950",children:[{id:"live-pulse",label:"nav.livePulse"},{id:"experiment-zone",label:"nav.experimentZone"}]},{id:"hackernews",label:"nav.hackernews",color:"#ff6600",children:[{id:"today-in-tech",label:"nav.todayInTech"},{id:"ai-radar",label:"nav.aiRadar"},{id:"community-feed",label:"nav.communityFeed"}]},{id:"packages",label:"nav.packages",color:"#cb3837",children:[{id:"package-radar",label:"nav.packageRadar"},{id:"npm-trends",label:"nav.npmPulse"}]},{id:"devcommunity",label:"nav.devCommunity",color:"#7c3aed",children:[{id:"tech-articles",label:"nav.techArticles"},{id:"dev-pulse",label:"nav.devPulse"}]}];function y({topBarRight:e}){const[a,n]=(0,c.Ym)(),l=(0,i.useMemo)(()=>(0,c.Nx)(a,d.A),[a]),[o,m]=(0,i.useState)("journal"),[y,j]=(0,i.useState)(null),$=(0,i.useCallback)(e=>{if("journal"===e)return m("journal"),void j(null);if(u.has(e))return m(e),void j(null);const a=h[e];a&&(m(a),j(e),requestAnimationFrame(()=>{const a=document.getElementById(e);a?.scrollIntoView({behavior:"smooth",block:"start"})}))},[]),C=(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,p.jsx)(c.Fd,{locale:a,onChange:n}),e]}),S=(0,p.jsxs)(g,{children:[(0,p.jsxs)(b,{active:"journal"===o,onClick:()=>$("journal"),children:[(0,p.jsx)(x,{color:t.w4.colors.accent}),(0,p.jsx)(f,{children:l("nav.journal")})]}),k.map(e=>(0,p.jsxs)(v,{children:[(0,p.jsx)(w,{children:l(e.label)}),(0,p.jsxs)(b,{active:o===e.id&&!y,accentColor:e.color,onClick:()=>$(e.id),children:[(0,p.jsx)(x,{color:e.color}),(0,p.jsx)(f,{children:l(e.label)})]}),o===e.id&&e.children.map(a=>(0,p.jsx)(b,{active:y===a.id,indent:!0,accentColor:e.color,onClick:()=>$(a.id),children:(0,p.jsx)(f,{children:l(a.label)})},a.id))]},e.id))]});return(0,p.jsxs)(t.PE,{title:"TechScope",sidebar:S,activeId:y??o,topBarRight:C,children:["journal"===o&&(0,p.jsx)(r.A,{onNavigate:m,t:l}),"journal"!==o&&(0,p.jsx)(s.W,{category:o,t:l})]})}}}]);
//# sourceMappingURL=36.f6e58bd9ec4734295573.js.map