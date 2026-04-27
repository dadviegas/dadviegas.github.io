"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["9392"],{71507(e,r,o){o.d(r,{NewsPortugalWidget:()=>u});var t=o(65723),a=o(37991),l=o(36859),n=o.n(l),i=o(72799),s=o(6063),d=o(63236),p=o(28170),c=o(98975),h=o(39173),w=o(64443),x=o(19603);let m=(0,i.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=n().a`
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
`,f=n().span`
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
`,b=n().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  line-height: 1.4;
`;function u({locale:e}){let r=(0,a.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",c.A),[e]),{items:o,failed:l}=(0,h.useRssFeed)({url:"https://www.rtp.pt/noticias/rss",cacheKey:"news-portugal"}),n=o?.slice(0,9)??[];return(0,t.jsx)(d.rl,{title:"◉ PT News",accentColor:x.A.accentColor,errorLabel:r("widget.error.label"),error:l?r("widget.error.body"):void 0,children:o||l?0===n.length?(0,t.jsx)(w.YG,{mode:"empty",label:r("noData")}):n.map((e,r)=>(0,t.jsxs)(g,{delay:r,href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(f,{children:"RTP"}),(0,t.jsx)(b,{className:"row-title",children:e.title})]},e.link)):(0,t.jsx)(w.YG,{mode:"loading",label:r("widget.loading")})})}}}]);