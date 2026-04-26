"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["717"],{36220(t,e,s){s.d(e,{AstroWidget:()=>U});var l=s(65723),i=s(37991),o=s(36859),n=s.n(o),r=s(94764),a=s(45030),c=s(86527),x=s(30522),p=s(68360),d=s(28170),h=s(98975),f=s(88350);let m=x.j.lisbon.lat,y=x.j.lisbon.lon;function u(t){if(!t)return"—";let e=new Date(t);return Number.isNaN(e.getTime())?"—":(0,p.e)(e)}function g({phase:t,size:e=78}){let s=e/2-2,i=e/2,o=e/2,n=t<.5,a=s*(1-(n?2*t:(1-t)*2));return(0,l.jsxs)("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:[(0,l.jsxs)("defs",{children:[(0,l.jsxs)("radialGradient",{id:"atl-moon-glow",cx:"50%",cy:"45%",r:"60%",children:[(0,l.jsx)("stop",{offset:"0%",stopColor:"#f2ecd8"}),(0,l.jsx)("stop",{offset:"100%",stopColor:"#c9c1a8"})]}),(0,l.jsxs)("mask",{id:"atl-moon-mask",children:[(0,l.jsx)("rect",{width:e,height:e,fill:"black"}),(0,l.jsx)("circle",{cx:i,cy:o,r:s,fill:"white"}),(0,l.jsx)("ellipse",{cx:i,cy:o,rx:a,ry:s,fill:"black"}),(0,l.jsx)("rect",{x:n?0:i,y:0,width:i,height:e,fill:"black"})]})]}),(0,l.jsx)("circle",{cx:i,cy:o,r:s,fill:"#1f2233",stroke:r.w4.colors.borderSubtle}),(0,l.jsx)("circle",{cx:i,cy:o,r:s,fill:"url(#atl-moon-glow)",mask:"url(#atl-moon-mask)",opacity:"0.95"}),(0,l.jsx)("circle",{cx:i-8,cy:o-6,r:"3",fill:"#b8b099",opacity:"0.25",mask:"url(#atl-moon-mask)"}),(0,l.jsx)("circle",{cx:i+6,cy:o+10,r:"4",fill:"#b8b099",opacity:"0.22",mask:"url(#atl-moon-mask)"}),(0,l.jsx)("circle",{cx:i-3,cy:o+14,r:"2",fill:"#b8b099",opacity:"0.25",mask:"url(#atl-moon-mask)"})]})}let w=n().span`
  font-size: 11px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,j=n().div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,b=n().div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 18px;
  align-items: center;
`,k=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,v=n().div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
`,M=n().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,$=n().div`
  font-family: ${r.w4.typography.fontFamilySerif};
  font-size: 18px;
  line-height: 1.15;
  color: ${r.w4.colors.mainText};
  margin-bottom: 10px;
`,T=n().div`
  position: relative;
  height: 44px;
`,F=n().div`
  display: flex;
  justify-content: space-between;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
`,C=n().span`
  color: ${r.w4.colors.mainTextFaint};
`,D=n().div`
  border-top: 1px solid ${r.w4.colors.borderSubtle};
  padding-top: 10px;
`,S=n().div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
`,z=n().div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextFaint};
`;function U({locale:t}){let e="pt"===t?"pt":"en",s=(0,i.useMemo)(()=>(0,d.Nx)(e,h.A),[e]),o=new Date().toISOString().slice(0,10),{sun:n}=(0,c.useSunArc)({lat:m,lon:y,date:o,cacheKey:`astro-sun-${o}`}),x=function(t=new Date){let e=Date.UTC(2e3,0,6,18,14)/1e3,s=(t.getTime()/1e3-e)/86400/29.530588853%1;return s<0?s+1:s}(new Date),p=Math.round((1-Math.cos(2*x*Math.PI))*50),A=x<.03||x>.97?"astro.phase.new":x<.22?"astro.phase.waxingCrescent":x<.28?"astro.phase.firstQuarter":x<.47?"astro.phase.waxingGibbous":x<.53?"astro.phase.full":x<.72?"astro.phase.waningGibbous":x<.78?"astro.phase.lastQuarter":"astro.phase.waningCrescent",N=function(t,e){if(!t||!e)return 0;let s=Date.now(),l=new Date(t).getTime(),i=new Date(e).getTime();return s<=l?0:s>=i?1:(s-l)/(i-l)}(n?.sunriseUtc??null,n?.sunsetUtc??null),W=46-42*Math.sin(N*Math.PI),_=n?Math.floor(n.dayLengthSec/3600):0,G=n?Math.floor(n.dayLengthSec%3600/60):0;return(0,l.jsx)(a.rl,{title:s("astro.title"),accessory:(0,l.jsx)(w,{children:s("astro.location")}),accentColor:f.A.accentColor,children:(0,l.jsxs)(j,{children:[(0,l.jsxs)(b,{children:[(0,l.jsxs)(k,{children:[(0,l.jsx)(g,{phase:x}),(0,l.jsx)(v,{children:s("astro.illuminated",{pct:p})})]}),(0,l.jsxs)(M,{children:[(0,l.jsx)($,{children:s(A)}),(0,l.jsx)(T,{children:(0,l.jsxs)("svg",{viewBox:"0 0 200 50",width:"100%",height:"44",style:{display:"block"},children:[(0,l.jsx)("path",{d:"M 4 46 Q 100 -20 196 46",fill:"none",stroke:r.w4.colors.borderSubtle,strokeWidth:"1",strokeDasharray:"2 3"}),(0,l.jsx)("circle",{cx:4+192*N,cy:W,r:3.5,fill:"#e89a5c"}),(0,l.jsx)("line",{x1:"4",y1:"46",x2:"4",y2:"50",stroke:r.w4.colors.mainTextFaint,strokeWidth:"1"}),(0,l.jsx)("line",{x1:"196",y1:"46",x2:"196",y2:"50",stroke:r.w4.colors.mainTextFaint,strokeWidth:"1"})]})}),(0,l.jsxs)(F,{children:[(0,l.jsxs)("span",{children:["↑ ",u(n?.sunriseUtc??null)]}),n&&(0,l.jsx)(C,{children:s("astro.dayLength",{h:_,m:G})}),(0,l.jsxs)("span",{children:["↓ ",u(n?.sunsetUtc??null)]})]})]})]}),(0,l.jsxs)(D,{children:[(0,l.jsx)(S,{children:s("astro.iss.title")}),(0,l.jsx)(z,{children:s("astro.iss.empty")})]})]})})}}}]);