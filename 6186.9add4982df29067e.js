"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6186"],{74993(e,r,o){o.d(r,{TechScopeLiveWidget:()=>v});var t=o(65723),n=o(37991),i=o(36859),a=o.n(i),s=o(72799),l=o(88641);let c=(0,o(85419).A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);var p=o(23930),d=o(2938),h=o(28170),f=o(98975),x=o(73482),m=o(23187),g=o(48294);let y=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=(0,s.keyframes)`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,w=a().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${p.w4.colors.success};
  animation: ${u} 2s ease-in-out infinite;
`,b=a().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-family: ${p.w4.typography.fontFamilyMono};
  color: ${p.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${y} 0.25s ease both;
  animation-delay: ${({delay:e})=>Math.min(40*e,240)}ms;
  min-width: 0;
  padding: 4px 4px;
  min-height: 44px;
  border-radius: ${p.w4.borderRadius.sm};
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${p.w4.colors.sidebarHover}; }
  &:hover span.row-title { color: ${p.w4.colors.accent}; }
`,k=a().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${p.w4.typography.fontFamilyMono};
  padding: 2px 6px;
  border-radius: 3px;
  background: ${({color:e})=>e}18;
  color: ${({color:e})=>e};
  border: 1px solid ${({color:e})=>e}30;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,$=a().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${p.w4.colors.mainText};
  opacity: 0.85;
  font-size: 13px;
`,j=a().span`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  color: ${({color:e})=>e??p.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${p.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
`;function v({locale:e}){let r=(0,n.useMemo)(()=>(0,h.Nx)("pt"===e?"pt":"en",f.A),[e]),o=(0,g.useTrendingRepos)({days:7,perPage:2,refreshMs:3e5}),i=(0,g.useHnFrontPage)({hitsPerPage:4,cacheKey:"techscope-hn",refreshMs:3e5}),a=o.repos??[],s=i.hits??[],p=o.failed&&i.failed,y=!a.length&&!s.length&&!p,u=0;return(0,t.jsxs)(d.rl,{title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{})," ",r("techscopeLive.title")]}),accessory:(0,t.jsx)(d.Ex,{tone:"live",children:"LIVE"}),accentColor:m.A.accentColor,errorLabel:r("widget.error.label"),error:p?r("widget.error.body"):void 0,children:[y&&(0,t.jsx)(x.YG,{mode:"loading",label:r("widget.loading")}),!y&&!p&&a.map(e=>{var r;return(0,t.jsxs)(b,{delay:u++,href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(k,{color:"#3fb950",children:"GH"}),(0,t.jsx)($,{className:"row-title",children:e.full_name}),(0,t.jsxs)(j,{color:"#d29922",children:[(0,t.jsx)(l.A,{size:10}),(r=e.stargazers_count)>=1e3?`${(r/1e3).toFixed(1)}k`:String(r)]})]},e.full_name)}),!y&&!p&&s.map(e=>{let r=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,t.jsxs)(b,{delay:u++,href:r,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(k,{color:"#ff6600",children:"HN"}),(0,t.jsx)($,{className:"row-title",children:e.title}),(0,t.jsxs)(j,{color:"#ff6600",children:[(0,t.jsx)(c,{size:10}),e.points??0]})]},e.objectID)})]})}}}]);