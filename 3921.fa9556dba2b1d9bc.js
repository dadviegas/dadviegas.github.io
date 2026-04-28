"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["3921"],{29752(e,t,r){r.d(t,{OnThisDayWidget:()=>w});var o=r(65723),a=r(37991),n=r(36859),l=r.n(n),i=r(72799),s=r(6063),d=r(63236),c=r(26506),p=r(28170),x=r(98975),m=r(64443),g=r(34836);let h=(0,i.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=l().a`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 4px;
  text-decoration: none;
  animation: ${h} 0.25s ease both;
  animation-delay: ${({delay:e})=>Math.min(40*e,240)}ms;
  border-radius: ${s.w4.borderRadius.sm};
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,f=l().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${s.w4.colors.codeBg};
  color: ${s.w4.colors.mainTextMuted};
  border: 1px solid ${s.w4.colors.border};
  flex-shrink: 0;
  min-width: 38px;
  text-align: center;
`,u=l().span`
  flex: 1;
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  opacity: 0.85;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,y=l().span`
  color: ${s.w4.colors.accent};
  margin-left: 6px;
  letter-spacing: 0.02em;
`;function w({locale:e}){let t=(0,a.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",x.A),[e]),{events:r,failed:n}=(0,c.useOnThisDay)(),l=(0,a.useMemo)(()=>{let e,t,o;return r?(t=new Date((e=new Date).getFullYear(),0,0),o=Math.floor((e.getTime()-t.getTime())/864e5),[...r].sort((e,t)=>((0x9e3779b1*e.year^40503*o)>>>0)-((0x9e3779b1*t.year^40503*o)>>>0)).slice(0,4)):[]},[r]),i=new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{day:"numeric",month:"long"}),s=!r&&!n,h=!r&&n,k=!!r&&0===l.length;return(0,o.jsxs)(d.rl,{title:(0,o.jsxs)(o.Fragment,{children:[t("onThisDay.title"),(0,o.jsx)(y,{children:i})]}),accentColor:g.A.accentColor,errorLabel:t("widget.error.label"),error:h?t("widget.error.body"):void 0,children:[s&&(0,o.jsx)(m.YG,{mode:"loading",label:t("widget.loading")}),k&&(0,o.jsx)(m.YG,{mode:"empty",label:t("onThisDay.empty")}),!s&&!h&&!k&&l.map((e,t)=>{let r=e.pages?.[0]?.content_urls?.desktop?.page??void 0;return(0,o.jsxs)(b,{delay:t,href:r,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(f,{children:e.year}),(0,o.jsx)(u,{children:e.text})]},`${e.year}-${t}`)})]})}}}]);