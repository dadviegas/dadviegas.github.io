"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["346"],{2065(e,r,t){t.d(r,{TrendingSearchesWidget:()=>y});var o=t(5723),n=t(7991),a=t(6859),i=t.n(a),l=t(2799),s=t(4764),c=t(5030),d=t(2385),p=t(8170),h=t(8975),m=t(2188),x=t(4200);let g=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=i().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,u=i().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${s.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${g} 0.25s ease both;
  animation-delay: ${({delay:e})=>Math.min(40*e,240)}ms;
  min-width: 0;
  padding: 3px 4px;
  border-radius: ${s.w4.borderRadius.sm};
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${s.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${s.w4.colors.accent}; }
`,w=i().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  flex-shrink: 0;
  letter-spacing: 0.05em;
  background: ${x.A.accentColor}12;
  color: ${x.A.accentColor};
  border: 1px solid ${x.A.accentColor}25;
`,b=i().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${s.w4.colors.mainText};
  opacity: 0.85;
  font-size: 13px;
`;function y({locale:e}){let r=(0,n.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",h.A),[e]),{items:t,loading:a,failed:i}=(0,d.useRssFeed)({url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftrends.google.com%2Ftrending%2Frss%3Fgeo%3DUS",cacheKey:"internet-trends"}),l=t?.slice(0,12)??[],s=a&&!l.length,g=!a&&i&&!l.length,k=!a&&!i&&!l.length;return(0,o.jsxs)(c.rl,{title:r("trendingSearches.title"),accentColor:x.A.accentColor,errorLabel:r("widget.error.label"),error:g?r("widget.error.body"):void 0,children:[s&&(0,o.jsx)(m.YG,{mode:"loading",label:r("widget.loading")}),k&&(0,o.jsx)(m.YG,{mode:"empty",label:r("trendingSearches.empty")}),!s&&!g&&!k&&(0,o.jsx)(f,{children:l.map((e,r)=>(0,o.jsxs)(u,{delay:r,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(w,{children:r+1}),(0,o.jsx)(b,{className:"row-title",children:e.title})]},e.title))})]})}}}]);