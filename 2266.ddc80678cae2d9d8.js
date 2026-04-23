"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["2266"],{98689(e,t,n){n.d(t,{LiveDataWidget:()=>O});var o=n(65723),i=n(37991),l=n(36859),a=n.n(l),r=n(72799),s=n(23930),c=n(2938),h=n(1310),p=n(28170),f=n(98975),d=n(57438);let u=[{key:"crypto",labelKey:"health.ch.crypto",color:"#f7931a",unit:"ms",floor:0,ceil:500,consumers:["Crypto"],host:"api.coingecko.com",probeUrl:"https://api.coingecko.com/api/v3/ping"},{key:"weather",labelKey:"health.ch.weather",color:"#58a6ff",unit:"ms",floor:0,ceil:500,consumers:["Weather"],host:"api.open-meteo.com",probeUrl:"https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.14&current=temperature_2m"},{key:"wiki",labelKey:"health.ch.wiki",color:"#3fb950",unit:"ms",floor:0,ceil:500,consumers:["OnThisDay","WikiTop"],host:"en.wikipedia.org",probeUrl:"https://en.wikipedia.org/api/rest_v1/page/summary/Lisbon"},{key:"hn",labelKey:"health.ch.hn",color:"#f97316",unit:"ms",floor:0,ceil:500,consumers:["TechScope","HN Hot"],host:"hn.algolia.com",probeUrl:"https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=1"},{key:"dom",labelKey:"health.ch.dom",color:"#f87171",unit:"",floor:0,ceil:5e3},{key:"fps",labelKey:"health.ch.fps",color:"#d29922",unit:"fps",floor:0,ceil:120}],m=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,x=(0,r.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,y=a().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
  animation: ${m} 0.3s ease both;
`,g=a().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,b=a().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  ${({tone:e})=>{let t="ok"===e?"#3fb950":"warn"===e?"#d29922":"#f85149";return`color: ${t}; background: ${t}1a; border: 1px solid ${t}33;`}}
`,w=a().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({tone:e})=>"ok"===e?"#3fb950":"warn"===e?"#d29922":"#f85149"};
  animation: ${x} 1.5s ease-in-out infinite;
`,k=a().div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`,$=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${m} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
`,j=a().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,v=a().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,M=a().span`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,F=a().span`
  font-size: 9px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainTextFaint};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,z=a().div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`,C=a().span`
  font-size: 14px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({color:e,warn:t})=>t?"#f85149":e};
  transition: color ${s.w4.transitions.base};
  font-variant-numeric: tabular-nums;
`,T=a().span`
  font-size: 10px;
  font-weight: 400;
  opacity: 0.6;
`,A=a().span`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({dir:e,latency:t})=>"flat"===e?s.w4.colors.mainTextFaint:(t?"up"===e:"down"===e)?"#f85149":"#3fb950"};
`,K=a().div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${s.w4.colors.border};
  overflow: hidden;
`,_=a().div`
  width: ${({pct:e})=>Math.min(100,e)}%;
  height: 100%;
  border-radius: 2px;
  background: ${({color:e})=>e};
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 6px ${({color:e})=>`${e}40`};
`,S=a().div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 16px;
`,U=a().div`
  flex: 1;
  height: ${({h:e})=>e}%;
  min-height: 1px;
  border-radius: 1px;
  background: ${({color:e,latest:t})=>t?e:`${e}40`};
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`,q=a().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.5;
`;function O({locale:e}){let t="pt"===e?"pt":"en",n=(0,i.useMemo)(()=>(0,p.Nx)(t,f.A),[t]),[l,a]=(0,i.useState)(()=>u.map(()=>Array(24).fill(0))),[r,m]=(0,i.useState)({}),[x,R]=(0,i.useState)(!1),D=(0,i.useRef)(null),E=(0,i.useRef)(new Set);(0,i.useEffect)(()=>{let e=function(){let e=0,t=performance.now(),n=60,o=0;function i(){e++;let l=performance.now(),a=l-t;a>=1e3&&(n=Math.round(1e3*e/a),e=0,t=l),o=requestAnimationFrame(i)}return{start(){o=requestAnimationFrame(i)},stop(){cancelAnimationFrame(o)},get fps(){return n}}}();return D.current=e,e.start(),()=>e.stop()},[]);let L=(0,i.useCallback)(async(e,t)=>{if(!E.current.has(e)){E.current.add(e);try{await (0,h.requestRaw)(t)}catch{}finally{E.current.delete(e)}}},[]),N=(0,i.useCallback)(()=>{let e=Date.now(),t=document.getElementsByTagName("*").length,n=D.current?.fps??0,o={};a(i=>i.map((i,l)=>{let a=u[l],r=i[i.length-1];if("ms"===a.unit&&a.host){let t=(0,h.getLastRequestOutcome)(a.host),n=t&&e-t.ts<6e4;if(!t||!n)return a.probeUrl&&L(a.host,a.probeUrl),o[a.key]=!!t&&!t.ok,[...i.slice(1),r];o[a.key]=!t.ok;let l=t.ok?Math.round(t.latencyMs):r;return[...i.slice(1),l]}return"dom"===a.key?[...i.slice(1),t]:"fps"===a.key?[...i.slice(1),n]:i})),m(o),R(!0)},[L]);if((0,i.useEffect)(()=>{N();let e=setInterval(N,5e3);return()=>clearInterval(e)},[N]),!x)return(0,o.jsx)(c.rl,{title:n("health.title"),accentColor:d.A.accentColor,children:(0,o.jsx)(q,{children:n("health.measuring")})});let W=s.w4.colors.mainTextFaint,B=Object.values(r).filter(Boolean).length,H=u.filter(e=>"ms"===e.unit&&!r[e.key]&&l[u.indexOf(e)][23]>300).length,I=B>0?"bad":H>0?"warn":"ok",P=B>0?n("health.status.offline",{n:B}):H>0?n("health.status.slow",{n:H}):n("health.status.ok");return(0,o.jsx)(c.rl,{title:(0,o.jsxs)(g,{children:[(0,o.jsx)(w,{tone:I}),n("health.title")]}),accessory:(0,o.jsx)(b,{tone:I,children:P}),accentColor:d.A.accentColor,children:(0,o.jsx)(y,{children:(0,o.jsx)(k,{children:u.map((e,t)=>{let i=l[t],a=i[i.length-1],s=i[i.length-2]??a,c="ms"===e.unit,h=c&&!!r[e.key],p=!h&&c&&a>300,f=h?100:(a-e.floor)/(e.ceil-e.floor)*100,d=h?W:p?"#f85149":e.color,u=h?W:e.color,m=h?n("health.offline"):"dom"===e.key&&a>=1e3?`${(a/1e3).toFixed(1)}k`:String(Math.round(a)),x=h?"":e.unit,y=a-s,g=!h&&Math.abs(y)>=(c?10:2)?y>0?"up":"down":"flat",b=e.consumers?.length?n("health.consumers",{list:e.consumers.join(" \xb7 ")}):"";return(0,o.jsxs)($,{delay:t,children:[(0,o.jsxs)(j,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(M,{children:n(e.labelKey)}),b&&(0,o.jsx)(F,{children:b})]}),(0,o.jsxs)(z,{children:[!h&&"flat"!==g&&(0,o.jsx)(A,{dir:g,latency:c,children:"up"===g?"▲":"down"===g?"▼":"\xb7"}),(0,o.jsxs)(C,{color:u,warn:p,children:[m,x&&(0,o.jsx)(T,{children:x})]})]})]}),(0,o.jsx)(K,{children:(0,o.jsx)(_,{pct:f,color:d})}),(0,o.jsx)(S,{children:i.map((t,n)=>{let l=Math.max(2,(t-e.floor)/(e.ceil-e.floor)*100);return(0,o.jsx)(U,{h:Math.min(100,l),color:h&&n===i.length-1?W:p&&n===i.length-1?"#f85149":e.color,latest:n===i.length-1},n)})})]},e.key)})})})})}}}]);