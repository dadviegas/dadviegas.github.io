"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["346"],{32065(e,t,r){r.d(t,{TrendingSearchesWidget:()=>y});var o=r(65723),n=r(37991),l=r(36859),a=r.n(l),i=r(72799),s=r(23930),c=r(2938),d=r(48294),p=r(28170),h=r(98975),x=r(73482),g=r(54200);let m=(0,i.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=a().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,u=a().a`
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
`,w=a().span`
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
`,b=a().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${s.w4.colors.mainText};
  opacity: 0.85;
  font-size: 13px;
`;function y({locale:e}){let t=(0,n.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",h.A),[e]),{items:r,loading:l,failed:a}=(0,d.useRssFeed)({url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftrends.google.com%2Ftrending%2Frss%3Fgeo%3DUS",cacheKey:"internet-trends"}),i=r?.slice(0,12)??[],s=l&&!i.length,m=!l&&a&&!i.length,k=!l&&!a&&!i.length;return(0,o.jsxs)(c.rl,{title:t("trendingSearches.title"),accentColor:g.A.accentColor,errorLabel:t("widget.error.label"),error:m?t("widget.error.body"):void 0,children:[s&&(0,o.jsx)(x.YG,{mode:"loading",label:t("widget.loading")}),k&&(0,o.jsx)(x.YG,{mode:"empty",label:t("trendingSearches.empty")}),!s&&!m&&!k&&(0,o.jsx)(f,{children:i.map((e,t)=>(0,o.jsxs)(u,{delay:t,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(w,{children:t+1}),(0,o.jsx)(b,{className:"row-title",children:e.title})]},e.title))})]})}}}]);