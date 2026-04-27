"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["7566"],{94925(e,r,o){o.d(r,{NewsWorldWidget:()=>u});var t=o(65723),n=o(37991),a=o(36859),l=o.n(a),s=o(72799),i=o(6063),d=o(63236),c=o(28170),p=o(98975),h=o(71730),m=o(64443),x=o(72026);let w=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=l().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${i.w4.colors.mainText};
  text-decoration: none;
  animation: ${w} 0.25s ease both;
  animation-delay: ${({delay:e})=>Math.min(40*e,240)}ms;
  min-width: 0;
  padding: 5px 4px;
  margin: 0 -4px;
  border-radius: ${i.w4.borderRadius.sm};
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${i.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${i.w4.colors.accent}; }
`,g=l().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  background: #cc000018;
  color: #cc0000;
  border: 1px solid #cc000030;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`,b=l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  line-height: 1.4;
`;function u({locale:e}){let r=(0,n.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",p.A),[e]),{items:o,failed:a}=(0,h.useRssFeed)({url:"http://rss.cnn.com/rss/edition.rss",cacheKey:"news-world"}),l=o?.slice(0,9)??[];return(0,t.jsx)(d.rl,{title:"◉ World News",accentColor:x.A.accentColor,errorLabel:r("widget.error.label"),error:a?r("widget.error.body"):void 0,children:o||a?0===l.length?(0,t.jsx)(m.YG,{mode:"empty",label:r("noData")}):l.map((e,r)=>(0,t.jsxs)(f,{delay:r,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(g,{children:"CNN"}),(0,t.jsx)(b,{className:"row-title",children:e.title})]},e.link)):(0,t.jsx)(m.YG,{mode:"loading",label:r("widget.loading")})})}}}]);