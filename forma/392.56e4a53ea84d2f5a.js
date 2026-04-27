"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["392"],{71507(e,r,o){o.d(r,{NewsPortugalWidget:()=>u});var t=o(65723),a=o(37991),n=o(36859),i=o.n(n),l=o(72799),s=o(6063),d=o(63236),p=o(28170),c=o(98975),m=o(71730),w=o(96246),x=o(19603);let h=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=i().a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  text-decoration: none;
  animation: ${h} 0.25s ease both;
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
`;function u({locale:e}){let r=(0,a.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",c.A),[e]),{items:o,failed:n}=(0,m.useRssFeed)({url:"https://www.rtp.pt/noticias/rss",cacheKey:"news-portugal"}),i=o?.slice(0,9)??[];return(0,t.jsx)(d.rl,{title:"◉ PT News",accentColor:x.A.accentColor,errorLabel:r("widget.error.label"),error:n?r("widget.error.body"):void 0,children:o||n?0===i.length?(0,t.jsx)(w.YG,{mode:"empty",label:r("noData")}):i.map((e,r)=>(0,t.jsxs)(f,{delay:r,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(g,{children:"RTP"}),(0,t.jsx)(b,{className:"row-title",children:e.title})]},e.link)):(0,t.jsx)(w.YG,{mode:"loading",label:r("widget.loading")})})}}}]);