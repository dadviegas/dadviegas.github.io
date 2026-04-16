"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([[188],{188(e,a,n){var o=n(7359),t=n(8997),i=n(3233),l=n(7207),r=n(894),c=n(8513),s=n(8283),d=n(6010),p=n(8887),u=n(5723);const h=new Set(["github","hackernews","packages","devcommunity"]),m={"live-pulse":"github","experiment-zone":"github","today-in-tech":"hackernews","ai-radar":"hackernews","community-feed":"hackernews","package-radar":"packages","npm-trends":"packages","tech-articles":"devcommunity","dev-pulse":"devcommunity"},g=l.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,v=i.default.div`
  padding: ${r.w4.spacing.sm} 0;
`,b=i.default.div`
  margin-bottom: 2px;
`,x=i.default.button`
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
  animation: ${g} 2.4s ease-in-out infinite;
`,w=i.default.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,y=i.default.div`
  font-size: 10px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.sidebarTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.md} 4px;
  margin-top: ${r.w4.spacing.sm};
`,k=[{id:"github",label:"nav.github",color:"#3fb950",children:[{id:"live-pulse",label:"nav.livePulse"},{id:"experiment-zone",label:"nav.experimentZone"}]},{id:"hackernews",label:"nav.hackernews",color:"#ff6600",children:[{id:"today-in-tech",label:"nav.todayInTech"},{id:"ai-radar",label:"nav.aiRadar"},{id:"community-feed",label:"nav.communityFeed"}]},{id:"packages",label:"nav.packages",color:"#cb3837",children:[{id:"package-radar",label:"nav.packageRadar"},{id:"npm-trends",label:"nav.npmPulse"}]},{id:"devcommunity",label:"nav.devCommunity",color:"#7c3aed",children:[{id:"tech-articles",label:"nav.techArticles"},{id:"dev-pulse",label:"nav.devPulse"}]}];function j({topBarRight:e}){const[a,n]=(0,c.Ym)(),t=(0,o.useMemo)(()=>(0,c.Nx)(a,p.A),[a]),[i,l]=(0,o.useState)("journal"),[g,j]=(0,o.useState)(null),$=(0,o.useCallback)(e=>{if("journal"===e)return l("journal"),void j(null);if(h.has(e))return l(e),void j(null);const a=m[e];a&&(l(a),j(e),requestAnimationFrame(()=>{const a=document.getElementById(e);a?.scrollIntoView({behavior:"smooth",block:"start"})}))},[]),C=(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,u.jsx)(c.Fd,{locale:a,onChange:n}),e]}),R=(0,u.jsxs)(v,{children:[(0,u.jsxs)(x,{active:"journal"===i,onClick:()=>$("journal"),children:[(0,u.jsx)(f,{color:r.w4.colors.accent}),(0,u.jsx)(w,{children:t("nav.journal")})]}),k.map(e=>(0,u.jsxs)(b,{children:[(0,u.jsx)(y,{children:t(e.label)}),(0,u.jsxs)(x,{active:i===e.id&&!g,accentColor:e.color,onClick:()=>$(e.id),children:[(0,u.jsx)(f,{color:e.color}),(0,u.jsx)(w,{children:t(e.label)})]}),i===e.id&&e.children.map(a=>(0,u.jsx)(x,{active:g===a.id,indent:!0,accentColor:e.color,onClick:()=>$(a.id),children:(0,u.jsx)(w,{children:t(a.label)})},a.id))]},e.id))]});return(0,u.jsxs)(r.PE,{title:"TechScope",sidebar:R,activeId:g??i,topBarRight:C,children:["journal"===i&&(0,u.jsx)(s.A,{onNavigate:l,t}),"journal"!==i&&(0,u.jsx)(d.W,{category:i,t})]})}const $=document.getElementById("root");if(!$)throw new Error("Root element #root not found");(0,t.H)($).render((0,u.jsx)(j,{}))},8997(e,a,n){var o=n(8991);a.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.f7f5b946011efea15f5c.js.map