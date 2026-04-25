"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["392"],{1507(e,r,o){o.d(r,{NewsPortugalWidget:()=>u});var t=o(5723),a=o(7991),n=o(6859),i=o.n(n),l=o(2799),s=o(9874),d=o(8395),c=o(8170),p=o(8975),w=o(3152),x=o(2188),h=o(9603);let m=(0,l.keyframes)`
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
`;function u({locale:e}){let r=(0,a.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",p.A),[e]),{items:o,failed:n}=(0,w.useRssFeed)({url:"https://www.rtp.pt/noticias/rss",cacheKey:"news-portugal"}),i=o?.slice(0,9)??[];return(0,t.jsx)(d.rl,{title:"◉ PT News",accentColor:h.A.accentColor,errorLabel:r("widget.error.label"),error:n?r("widget.error.body"):void 0,children:o||n?0===i.length?(0,t.jsx)(x.YG,{mode:"empty",label:r("noData")}):i.map((e,r)=>(0,t.jsxs)(f,{delay:r,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(g,{children:"RTP"}),(0,t.jsx)(b,{className:"row-title",children:e.title})]},e.link)):(0,t.jsx)(x.YG,{mode:"loading",label:r("widget.loading")})})}}}]);