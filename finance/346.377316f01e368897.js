"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["346"],{2065(e,t,r){r.d(t,{TrendingSearchesWidget:()=>y});var n=r(5723),o=r(7991),a=r(6859),i=r.n(a),l=r(2799),s=r(9874),c=r(8395),d=r(3152),p=r(8170),h=r(8975),x=r(2188),g=r(4200);let m=(0,l.keyframes)`
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
  animation: ${m} 0.25s ease both;
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
  background: ${g.A.accentColor}12;
  color: ${g.A.accentColor};
  border: 1px solid ${g.A.accentColor}25;
`,b=i().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${s.w4.colors.mainText};
  opacity: 0.85;
  font-size: 13px;
`;function y({locale:e}){let t=(0,o.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",h.A),[e]),{items:r,loading:a,failed:i}=(0,d.useRssFeed)({url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftrends.google.com%2Ftrending%2Frss%3Fgeo%3DUS",cacheKey:"internet-trends"}),l=r?.slice(0,12)??[],s=a&&!l.length,m=!a&&i&&!l.length,k=!a&&!i&&!l.length;return(0,n.jsxs)(c.rl,{title:t("trendingSearches.title"),accentColor:g.A.accentColor,errorLabel:t("widget.error.label"),error:m?t("widget.error.body"):void 0,children:[s&&(0,n.jsx)(x.YG,{mode:"loading",label:t("widget.loading")}),k&&(0,n.jsx)(x.YG,{mode:"empty",label:t("trendingSearches.empty")}),!s&&!m&&!k&&(0,n.jsx)(f,{children:l.map((e,t)=>(0,n.jsxs)(u,{delay:t,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(w,{children:t+1}),(0,n.jsx)(b,{className:"row-title",children:e.title})]},e.title))})]})}}}]);