"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["9390"],{33565(e,o,r){r.d(o,{HackerNewsHotWidget:()=>k});var t=r(65723),n=r(37991),a=r(36859),i=r.n(a),l=r(72799),s=r(6063),c=r(63236),d=r(28170),p=r(98975),m=r(16736),h=r(64443),f=r(32013);let x="#f97316",w=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=i().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  text-decoration: none;
  animation: ${w} 0.25s ease both;
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
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  width: 20px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  flex-shrink: 0;
  background: ${x}12;
  color: ${x};
  border: 1px solid ${x}25;
`,b=i().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  line-height: 1.4;
`,y=i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
  flex-shrink: 0;
`;function k({locale:e}){let o=(0,n.useMemo)(()=>(0,d.Nx)("pt"===e?"pt":"en",p.A),[e]),{stories:r,loading:a,failed:i}=(0,m.useHnTopStories)({limit:12}),l=r??[];return(0,t.jsx)(c.rl,{title:"◎ Hacker News",accentColor:f.A.accentColor,errorLabel:o("widget.error.label"),error:i?o("widget.error.body"):void 0,children:a&&!l.length?(0,t.jsx)(h.YG,{mode:"loading",label:o("widget.loading")}):0===l.length?(0,t.jsx)(h.YG,{mode:"empty",label:o("noData")}):l.map((e,o)=>(0,t.jsxs)(u,{delay:o,href:e.url??`https://news.ycombinator.com/item?id=${e.id}`,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(g,{children:o+1}),(0,t.jsx)(b,{className:"row-title",children:e.title}),(0,t.jsxs)(y,{children:["▲",e.score]})]},e.id))})}}}]);