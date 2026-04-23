"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6184"],{13147(t,e,o){o.d(e,{AnalogClockWidget:()=>w});var n=o(65723),r=o(37991),s=o(36859),i=o.n(s),a=o(72799),l=o(23930);function c(t){return t.toString().padStart(2,"0")}function f({hours:t,minutes:e,seconds:o}){let r=t=>t*Math.PI/180,s=o/60*360-90,i=e/60*360+o/60*6-90,a=t%12/12*360+e/60*30-90,c=70+44*Math.cos(r(s)),x=70+44*Math.sin(r(s)),h=70+46*Math.cos(r(i)),p=70+46*Math.sin(r(i)),m=70+32*Math.cos(r(a)),y=70+32*Math.sin(r(a));return(0,n.jsxs)("svg",{viewBox:"0 0 140 140",width:140,height:140,children:[(0,n.jsx)("circle",{cx:70,cy:70,r:60,fill:l.w4.colors.surface,stroke:l.w4.colors.border,strokeWidth:1.5}),Array.from({length:12},(t,e)=>{let o=e+1,s=o/12*360-90,i=70+48*Math.cos(r(s)),a=70+48*Math.sin(r(s));return(0,n.jsx)("text",{x:i,y:a+3,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:o},o)}),Array.from({length:60},(t,e)=>{let o=e/60*360-90,s=e%5==0,i=s?53:56;return(0,n.jsx)("line",{x1:70+i*Math.cos(r(o)),y1:70+i*Math.sin(r(o)),x2:70+59*Math.cos(r(o)),y2:70+59*Math.sin(r(o)),stroke:s?l.w4.colors.mainTextMuted:l.w4.colors.border,strokeWidth:s?1.5:.8},e)}),(0,n.jsx)("line",{x1:70,y1:70,x2:m,y2:y,stroke:l.w4.colors.mainText,strokeWidth:3,strokeLinecap:"round"}),(0,n.jsx)("line",{x1:70,y1:70,x2:h,y2:p,stroke:l.w4.colors.accent,strokeWidth:2,strokeLinecap:"round"}),(0,n.jsx)("line",{x1:70-8*Math.cos(r(s)),y1:70-8*Math.sin(r(s)),x2:c,y2:x,stroke:"#f87171",strokeWidth:1,strokeLinecap:"round"}),(0,n.jsx)("circle",{cx:70,cy:70,r:3,fill:l.w4.colors.accent}),(0,n.jsx)("circle",{cx:70,cy:70,r:1.5,fill:"#f87171"})]})}let x=(0,a.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,h=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  animation: ${x} 0.3s ease both;
`,p=i().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
  align-self: flex-start;
`,m=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,y=i().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 22px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: 0.04em;
`,d=i().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,u=i().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 2px;
`,g=i().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.6;
  letter-spacing: 0.04em;
`;function w({locale:t}){let[e,o]=(0,r.useState)(()=>new Date().getHours()),[s,i]=(0,r.useState)(()=>new Date().getMinutes()),[a,l]=(0,r.useState)(()=>new Date().getSeconds());(0,r.useEffect)(()=>{let t=setInterval(()=>{let t=new Date;o(t.getHours()),i(t.getMinutes()),l(t.getSeconds())},1e3);return()=>clearInterval(t)},[]);let x=e%12||12,M=new Date().toLocaleDateString("pt"===t?"pt-PT":"en-GB",{weekday:"long",day:"numeric",month:"long"}),$=Intl.DateTimeFormat().resolvedOptions().timeZone;return(0,n.jsxs)(h,{children:[(0,n.jsx)(p,{children:"pt"===t?"Relogio":"Clock"}),(0,n.jsxs)(m,{children:[(0,n.jsx)(f,{hours:e,minutes:s,seconds:a}),(0,n.jsxs)(y,{children:[c(e),":",c(s),(0,n.jsxs)("span",{style:{fontSize:"14px",opacity:.5},children:[":",c(a)]})]}),(0,n.jsx)(d,{children:function(t,e,o){if("pt"===o){let o=1===t?"1 hora":`${t} horas`;return 0===e?o:15===e?`${o} e um quarto`:30===e?`${o} e meia`:45===e?`um quarto para as ${12===t?1:t+1}`:`${o} e ${e} minutos`}let n=t<12?"AM":"PM",r=t%12||12;return 0===e?`${r} o'clock ${n}`:15===e?`quarter past ${r} ${n}`:30===e?`half past ${r} ${n}`:45===e?`quarter to ${r%12+1} ${n}`:`${r}:${c(e)} ${n}`}(x,s,t)}),(0,n.jsx)(u,{children:M}),(0,n.jsx)(g,{children:$})]})]})}}}]);