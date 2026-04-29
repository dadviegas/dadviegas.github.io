"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["5069"],{48956(e,t,o){o.d(t,{ClockWidget:()=>$});var n=o(65723),l=o(37991),i=o(36859),a=o.n(i),r=o(72799),s=o(6063),c=o(63236),p=o(28170),d=o(98975),f=o(55523);let m=[{id:"lisbon",tz:"Europe/Lisbon",labelEn:"Lisbon",labelPt:"Lisboa",flag:"\uD83C\uDDF5\uD83C\uDDF9"},{id:"london",tz:"Europe/London",labelEn:"London",labelPt:"Londres",flag:"\uD83C\uDDEC\uD83C\uDDE7"},{id:"newyork",tz:"America/New_York",labelEn:"New York",labelPt:"Nova Iorque",flag:"\uD83C\uDDFA\uD83C\uDDF8"},{id:"tokyo",tz:"Asia/Tokyo",labelEn:"Tokyo",labelPt:"T\xf3quio",flag:"\uD83C\uDDEF\uD83C\uDDF5"}],x=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,y=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${x} 0.25s ease both;
`,h=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 0;
  ${({primary:e})=>e&&`
    padding-bottom: 8px;
    border-bottom: 1px solid ${s.w4.colors.border};
    margin-bottom: 2px;
  `}
`,g=a().div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,u=a().span`
  font-size: 16px;
  line-height: 1;
`,b=a().div`
  display: flex;
  flex-direction: column;
`,w=a().div`
  font-size: 13px;
  font-weight: ${({primary:e})=>e?"600":"400"};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
`,k=a().div`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
`,v=a().div`
  font-size: ${({primary:e})=>e?"22px":"13px"};
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({primary:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
  letter-spacing: -0.02em;
  flex-shrink: 0;
`;function $({locale:e}){let t=(0,l.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",d.A),[e]),[,o]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=setInterval(()=>o(e=>e+1),1e4);return()=>clearInterval(e)},[]),(0,n.jsx)(c.rl,{title:t("clock.title"),accentColor:f.A.accentColor,children:(0,n.jsx)(y,{children:m.map((t,o)=>{var l,i;let a="pt"===e?t.labelPt:t.labelEn;return(0,n.jsxs)(h,{primary:0===o,children:[(0,n.jsxs)(g,{children:[(0,n.jsx)(u,{children:t.flag}),(0,n.jsxs)(b,{children:[(0,n.jsx)(w,{primary:0===o,children:a}),(0,n.jsx)(k,{children:(l=t.tz,new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{timeZone:l,weekday:"short",day:"numeric",month:"short"}))})]})]}),(0,n.jsx)(v,{primary:0===o,children:(i=t.tz,new Date().toLocaleTimeString("en-GB",{timeZone:i,hour:"2-digit",minute:"2-digit"}))})]},t.id)})})})}}}]);