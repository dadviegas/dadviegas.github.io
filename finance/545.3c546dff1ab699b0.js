"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["545"],{5464(e,t,r){r.d(t,{WikiMostReadWidget:()=>$});var i=r(5723),o=r(7991),a=r(6859),n=r.n(a),l=r(2799),s=r(9874),c=r(8395),d=r(3152),p=r(8170),x=r(8975),f=r(2188),m=r(9780);let h=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]),u=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=n().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,g=n().a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${s.w4.colors.mainTextMuted};
  text-decoration: none;
  animation: ${u} 0.25s ease both;
  animation-delay: ${({delay:e})=>Math.min(40*e,240)}ms;
  min-width: 0;
  padding: 3px 4px;
  border-radius: ${s.w4.borderRadius.sm};
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${s.w4.colors.sidebarHover}; }
  &:hover .row-title { color: ${s.w4.colors.accent}; }
`,y=n().span`
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
  background: ${m.A.accentColor}12;
  color: ${m.A.accentColor};
  border: 1px solid ${m.A.accentColor}25;
`,b=n().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  color: ${s.w4.colors.mainText};
  opacity: 0.85;
  font-size: 13px;
`,k=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.6;
  flex-shrink: 0;
`;function $({locale:e}){let t=(0,o.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",x.A),[e]),{articles:r,loading:a,failed:n}=(0,d.useWikiMostRead)(),l=(0,o.useMemo)(()=>(r??[]).filter(e=>!h.has(e.article)).slice(0,12),[r]),s=a&&!l.length,u=!a&&n&&!l.length,v=!a&&!n&&!l.length;return(0,i.jsxs)(c.rl,{title:t("wikiMostRead.title"),accentColor:m.A.accentColor,errorLabel:t("widget.error.label"),error:u?t("widget.error.body"):void 0,children:[s&&(0,i.jsx)(f.YG,{mode:"loading",label:t("widget.loading")}),v&&(0,i.jsx)(f.YG,{mode:"empty",label:t("wikiMostRead.empty")}),!s&&!u&&!v&&(0,i.jsx)(w,{children:l.map((e,t)=>{var r;return(0,i.jsxs)(g,{delay:t,href:`https://en.wikipedia.org/wiki/${e.article}`,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(y,{children:t+1}),(0,i.jsx)(b,{className:"row-title",children:e.article.replace(/_/g," ")}),(0,i.jsx)(k,{children:(r=e.views)>=1e6?`${(r/1e6).toFixed(1)}M`:r>=1e3?`${(r/1e3).toFixed(0)}k`:String(r)})]},e.article)})})]})}}}]);