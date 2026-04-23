"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["5069"],{48956(e,t,o){o.d(t,{ClockWidget:()=>k});var i=o(65723),n=o(37991),l=o(36859),a=o.n(l),r=o(72799),s=o(23930);let p=[{id:"lisbon",tz:"Europe/Lisbon",labelEn:"Lisbon",labelPt:"Lisboa",flag:"\uD83C\uDDF5\uD83C\uDDF9"},{id:"london",tz:"Europe/London",labelEn:"London",labelPt:"Londres",flag:"\uD83C\uDDEC\uD83C\uDDE7"},{id:"newyork",tz:"America/New_York",labelEn:"New York",labelPt:"Nova Iorque",flag:"\uD83C\uDDFA\uD83C\uDDF8"},{id:"tokyo",tz:"Asia/Tokyo",labelEn:"Tokyo",labelPt:"T\xf3quio",flag:"\uD83C\uDDEF\uD83C\uDDF5"}],d=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,c=a().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${d} 0.25s ease both;
`,f=a().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
`,m=a().div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,x=a().div`
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
`,y=a().div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,h=a().span`
  font-size: 16px;
  line-height: 1;
`,g=a().div`
  display: flex;
  flex-direction: column;
`,u=a().div`
  font-size: ${({primary:e})=>e?"14px":"12px"};
  font-weight: ${({primary:e})=>e?"600":"400"};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
`,b=a().div`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
`,w=a().div`
  font-size: ${({primary:e})=>e?"22px":"14px"};
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({primary:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
  letter-spacing: -0.02em;
  flex-shrink: 0;
`;function k({locale:e}){let[,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=setInterval(()=>t(e=>e+1),1e4);return()=>clearInterval(e)},[]),(0,i.jsxs)(c,{children:[(0,i.jsxs)(f,{children:["\uD83D\uDD50 ","pt"===e?"Rel\xf3gio mundial":"World clock"]}),(0,i.jsx)(m,{children:p.map((t,o)=>{var n,l;let a="pt"===e?t.labelPt:t.labelEn;return(0,i.jsxs)(x,{primary:0===o,children:[(0,i.jsxs)(y,{children:[(0,i.jsx)(h,{children:t.flag}),(0,i.jsxs)(g,{children:[(0,i.jsx)(u,{primary:0===o,children:a}),(0,i.jsx)(b,{children:(n=t.tz,new Date().toLocaleDateString("pt"===e?"pt-PT":"en-GB",{timeZone:n,weekday:"short",day:"numeric",month:"short"}))})]})]}),(0,i.jsx)(w,{primary:0===o,children:(l=t.tz,new Date().toLocaleTimeString("en-GB",{timeZone:l,hour:"2-digit",minute:"2-digit"}))})]},t.id)})})]})}}}]);