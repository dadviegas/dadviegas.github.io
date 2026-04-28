"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["717"],{36220(t,e,s){s.d(e,{AstroWidget:()=>U});var i=s(65723),l=s(37991),o=s(36859),a=s.n(o),n=s(6063),r=s(63236),c=s(91832),x=s(30522),p=s(68360),h=s(28170),d=s(98975),f=s(88350);let m=x.j.lisbon.lat,y=x.j.lisbon.lon;function u(t){if(!t)return"—";let e=new Date(t);return Number.isNaN(e.getTime())?"—":(0,p.e)(e)}function g({phase:t,size:e=78}){let s=e/2-2,l=e/2,o=e/2,a=t<.5,r=s*(1-(a?2*t:(1-t)*2));return(0,i.jsxs)("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:[(0,i.jsxs)("defs",{children:[(0,i.jsxs)("radialGradient",{id:"atl-moon-glow",cx:"50%",cy:"45%",r:"60%",children:[(0,i.jsx)("stop",{offset:"0%",stopColor:"#f2ecd8"}),(0,i.jsx)("stop",{offset:"100%",stopColor:"#c9c1a8"})]}),(0,i.jsxs)("mask",{id:"atl-moon-mask",children:[(0,i.jsx)("rect",{width:e,height:e,fill:"black"}),(0,i.jsx)("circle",{cx:l,cy:o,r:s,fill:"white"}),(0,i.jsx)("ellipse",{cx:l,cy:o,rx:r,ry:s,fill:"black"}),(0,i.jsx)("rect",{x:a?0:l,y:0,width:l,height:e,fill:"black"})]})]}),(0,i.jsx)("circle",{cx:l,cy:o,r:s,fill:"#1f2233",stroke:n.w4.colors.borderSubtle}),(0,i.jsx)("circle",{cx:l,cy:o,r:s,fill:"url(#atl-moon-glow)",mask:"url(#atl-moon-mask)",opacity:"0.95"}),(0,i.jsx)("circle",{cx:l-8,cy:o-6,r:"3",fill:"#b8b099",opacity:"0.25",mask:"url(#atl-moon-mask)"}),(0,i.jsx)("circle",{cx:l+6,cy:o+10,r:"4",fill:"#b8b099",opacity:"0.22",mask:"url(#atl-moon-mask)"}),(0,i.jsx)("circle",{cx:l-3,cy:o+14,r:"2",fill:"#b8b099",opacity:"0.25",mask:"url(#atl-moon-mask)"})]})}let w=a().span`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,j=a().div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,b=a().div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 18px;
  align-items: center;
`,k=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,v=a().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
`,M=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,$=a().div`
  font-family: ${n.w4.typography.fontFamilySerif};
  font-size: 18px;
  line-height: 1.15;
  color: ${n.w4.colors.mainText};
  margin-bottom: 10px;
`,T=a().div`
  position: relative;
  height: 44px;
`,F=a().div`
  display: flex;
  justify-content: space-between;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: ${n.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
`,C=a().span`
  color: ${n.w4.colors.mainTextFaint};
`,D=a().div`
  border-top: 1px solid ${n.w4.colors.borderSubtle};
  padding-top: 10px;
`,S=a().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
`,z=a().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.mainTextFaint};
`;function U({locale:t}){let e="pt"===t?"pt":"en",s=(0,l.useMemo)(()=>(0,h.Nx)(e,d.A),[e]),o=new Date().toISOString().slice(0,10),{sun:a}=(0,c.useSunArc)({lat:m,lon:y,date:o,cacheKey:`astro-sun-${o}`}),x=function(t=new Date){let e=Date.UTC(2e3,0,6,18,14)/1e3,s=(t.getTime()/1e3-e)/86400/29.530588853%1;return s<0?s+1:s}(new Date),p=Math.round((1-Math.cos(2*x*Math.PI))*50),A=x<.03||x>.97?"astro.phase.new":x<.22?"astro.phase.waxingCrescent":x<.28?"astro.phase.firstQuarter":x<.47?"astro.phase.waxingGibbous":x<.53?"astro.phase.full":x<.72?"astro.phase.waningGibbous":x<.78?"astro.phase.lastQuarter":"astro.phase.waningCrescent",N=function(t,e){if(!t||!e)return 0;let s=Date.now(),i=new Date(t).getTime(),l=new Date(e).getTime();return s<=i?0:s>=l?1:(s-i)/(l-i)}(a?.sunriseUtc??null,a?.sunsetUtc??null),W=46-42*Math.sin(N*Math.PI),_=a?Math.floor(a.dayLengthSec/3600):0,G=a?Math.floor(a.dayLengthSec%3600/60):0;return(0,i.jsx)(r.rl,{title:s("astro.title"),accessory:(0,i.jsx)(w,{children:s("astro.location")}),accentColor:f.A.accentColor,children:(0,i.jsxs)(j,{children:[(0,i.jsxs)(b,{children:[(0,i.jsxs)(k,{children:[(0,i.jsx)(g,{phase:x}),(0,i.jsx)(v,{children:s("astro.illuminated",{pct:p})})]}),(0,i.jsxs)(M,{children:[(0,i.jsx)($,{children:s(A)}),(0,i.jsx)(T,{children:(0,i.jsxs)("svg",{viewBox:"0 0 200 50",width:"100%",height:"44",style:{display:"block"},children:[(0,i.jsx)("path",{d:"M 4 46 Q 100 -20 196 46",fill:"none",stroke:"#e89a5c",strokeWidth:"1.25",strokeDasharray:"2 3",opacity:"0.55"}),(0,i.jsx)("circle",{cx:4+192*N,cy:W,r:3.5,fill:"#e89a5c"}),(0,i.jsx)("line",{x1:"4",y1:"46",x2:"4",y2:"50",stroke:n.w4.colors.mainTextFaint,strokeWidth:"1"}),(0,i.jsx)("line",{x1:"196",y1:"46",x2:"196",y2:"50",stroke:n.w4.colors.mainTextFaint,strokeWidth:"1"})]})}),(0,i.jsxs)(F,{children:[(0,i.jsxs)("span",{children:["↑ ",u(a?.sunriseUtc??null)]}),a&&(0,i.jsx)(C,{children:s("astro.dayLength",{h:_,m:G})}),(0,i.jsxs)("span",{children:["↓ ",u(a?.sunsetUtc??null)]})]})]})]}),(0,i.jsxs)(D,{children:[(0,i.jsx)(S,{children:s("astro.iss.title")}),(0,i.jsx)(z,{children:s("astro.iss.empty")})]})]})})}}}]);