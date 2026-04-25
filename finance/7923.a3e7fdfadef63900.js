"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["7923"],{4942(e,r,o){o.d(r,{TechScopeLiveWidget:()=>j});var n=o(5723),t=o(7991),a=o(6859),i=o.n(a),s=o(2799),l=o(9874),c=o(8395),d=o(8170),p=o(8975),f=o(8908),h=o(5417),x=o(2695);let m=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=(0,s.keyframes)`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,u=i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${l.w4.colors.success};
  animation: ${g} 2s ease-in-out infinite;
`,y=i().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${m} 0.25s ease both;
  animation-delay: ${({delay:e})=>Math.min(40*e,240)}ms;
  min-width: 0;
  padding: 4px 4px;
  min-height: 44px;
  border-radius: ${l.w4.borderRadius.sm};
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
  &:hover span.row-title { color: ${l.w4.colors.accent}; }
`,w=i().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  padding: 2px 6px;
  border-radius: 3px;
  background: ${({color:e})=>e}18;
  color: ${({color:e})=>e};
  border: 1px solid ${({color:e})=>e}30;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,b=i().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${l.w4.colors.mainText};
  opacity: 0.85;
  font-size: 13px;
`,$=i().span`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  color: ${({color:e})=>e??l.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
`;function j({locale:e}){let r=(0,t.useMemo)(()=>(0,d.Nx)("pt"===e?"pt":"en",p.A),[e]),o=(0,x.useTrendingRepos)({days:7,perPage:2,refreshMs:3e5}),a=(0,x.useHnFrontPage)({hitsPerPage:4,cacheKey:"techscope-hn",refreshMs:3e5}),i=o.repos??[],s=a.hits??[],l=o.failed&&a.failed,m=!i.length&&!s.length&&!l,g=0;return(0,n.jsxs)(c.rl,{title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{})," ",r("techscopeLive.title")]}),accessory:(0,n.jsx)(c.Ex,{tone:"live",children:"LIVE"}),accentColor:h.A.accentColor,errorLabel:r("widget.error.label"),error:l?r("widget.error.body"):void 0,children:[m&&(0,n.jsx)(f.YG,{mode:"loading",label:r("widget.loading")}),!m&&!l&&i.map(e=>{var r;return(0,n.jsxs)(y,{delay:g++,href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(w,{color:"#3fb950",children:"GH"}),(0,n.jsx)(b,{className:"row-title",children:e.full_name}),(0,n.jsxs)($,{color:"#d29922",children:[(0,n.jsx)(c.In,{name:"star",size:10}),(r=e.stargazers_count)>=1e3?`${(r/1e3).toFixed(1)}k`:String(r)]})]},e.full_name)}),!m&&!l&&s.map(e=>{let r=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,n.jsxs)(y,{delay:g++,href:r,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(w,{color:"#ff6600",children:"HN"}),(0,n.jsx)(b,{className:"row-title",children:e.title}),(0,n.jsxs)($,{color:"#ff6600",children:[(0,n.jsx)(c.In,{name:"trending-up",size:10}),e.points??0]})]},e.objectID)})]})}}}]);