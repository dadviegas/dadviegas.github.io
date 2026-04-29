"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["392"],{1507(e,r,t){t.d(r,{NewsPortugalWidget:()=>u});var o=t(5723),a=t(7991),n=t(6859),i=t.n(n),l=t(2799),s=t(6063),d=t(3236),c=t(8170),p=t(8975),w=t(8856),x=t(6246),h=t(9603);let m=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=i().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  text-decoration: none;
  animation: ${m} 0.25s ease both;
  animation-delay: ${({delay:e})=>Math.min(40*e,240)}ms;
  min-width: 0;
  padding: 5px 4px;
  margin: 0 -4px;
  border-radius: ${s.w4.borderRadius.sm};
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${s.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${s.w4.colors.accent}; }
`,g=i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  background: #2da44e18;
  color: #2da44e;
  border: 1px solid #2da44e30;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,b=i().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  line-height: 1.4;
`;function u({locale:e}){let r=(0,a.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",p.A),[e]),{items:t,failed:n}=(0,w.useRssFeed)({url:"https://www.rtp.pt/noticias/rss",cacheKey:"news-portugal"}),i=t?.slice(0,9)??[];return(0,o.jsx)(d.rl,{title:r("newsPt.title"),accentColor:h.A.accentColor,errorLabel:r("widget.error.label"),error:n?r("widget.error.body"):void 0,children:t||n?0===i.length?(0,o.jsx)(x.YG,{mode:"empty",label:r("noData")}):i.map((e,r)=>(0,o.jsxs)(f,{delay:r,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(g,{children:"RTP"}),(0,o.jsx)(b,{className:"row-title",children:e.title})]},e.link)):(0,o.jsx)(x.YG,{mode:"loading",label:r("widget.loading")})})}}}]);