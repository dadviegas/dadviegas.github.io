"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["2266"],{98689(e,t,o){o.d(t,{LiveDataWidget:()=>O});var n=o(65723),i=o(37991),a=o(36859),l=o.n(a),r=o(72799),s=o(23930),c=o(2938),h=o(1310),p=o(28170),f=o(98975),d=o(57438);let u=[{key:"crypto",labelKey:"health.ch.crypto",color:"#f7931a",unit:"ms",floor:0,ceil:500,consumers:["Crypto"],host:"api.coingecko.com",probeUrl:"https://api.coingecko.com/api/v3/ping"},{key:"weather",labelKey:"health.ch.weather",color:"#58a6ff",unit:"ms",floor:0,ceil:500,consumers:["Weather"],host:"api.open-meteo.com",probeUrl:"https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.14&current=temperature_2m"},{key:"wiki",labelKey:"health.ch.wiki",color:"#3fb950",unit:"ms",floor:0,ceil:500,consumers:["OnThisDay","WikiTop"],host:"en.wikipedia.org",probeUrl:"https://en.wikipedia.org/api/rest_v1/page/summary/Lisbon"},{key:"hn",labelKey:"health.ch.hn",color:"#f97316",unit:"ms",floor:0,ceil:500,consumers:["TechScope","HN Hot"],host:"hn.algolia.com",probeUrl:"https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=1"},{key:"dom",labelKey:"health.ch.dom",color:"#f87171",unit:"",floor:0,ceil:5e3},{key:"fps",labelKey:"health.ch.fps",color:"#d29922",unit:"fps",floor:0,ceil:120}],m=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,x=(0,r.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,y=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
  animation: ${m} 0.3s ease both;
`,g=l().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,b=l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  ${({tone:e})=>{let t="ok"===e?"#3fb950":"warn"===e?"#d29922":"#f85149";return`color: ${t}; background: ${t}1a; border: 1px solid ${t}33;`}}
`,w=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({tone:e})=>"ok"===e?"#3fb950":"warn"===e?"#d29922":"#f85149"};
  animation: ${x} 1.5s ease-in-out infinite;
`,k=l().div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`,$=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${m} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
`,j=l().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,v=l().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,M=l().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,F=l().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainTextFaint};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,z=l().div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`,C=l().span`
  font-size: 14px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({color:e,warn:t})=>t?"#f85149":e};
  transition: color ${s.w4.transitions.base};
  font-variant-numeric: tabular-nums;
`,T=l().span`
  font-size: 11px;
  font-weight: 400;
  opacity: 0.6;
`,S=l().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({dir:e,latency:t})=>"flat"===e?s.w4.colors.mainTextFaint:(t?"up"===e:"down"===e)?"#f85149":"#3fb950"};
`,A=l().div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${s.w4.colors.border};
  overflow: hidden;
`,K=l().div`
  width: ${({pct:e})=>Math.min(100,e)}%;
  height: 100%;
  border-radius: 2px;
  background: ${({color:e})=>e};
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 6px ${({color:e})=>`${e}40`};
`,_=l().div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 16px;
`,U=l().div`
  flex: 1;
  height: ${({h:e})=>e}%;
  min-height: 1px;
  border-radius: 1px;
  background: ${({color:e,latest:t})=>t?e:`${e}40`};
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`,q=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.5;
`;function O({locale:e}){let t="pt"===e?"pt":"en",o=(0,i.useMemo)(()=>(0,p.Nx)(t,f.A),[t]),[a,l]=(0,i.useState)(()=>u.map(()=>Array(24).fill(0))),[r,m]=(0,i.useState)({}),[x,R]=(0,i.useState)(!1),D=(0,i.useRef)(null),E=(0,i.useRef)(new Set);(0,i.useEffect)(()=>{let e=function(){let e=0,t=performance.now(),o=60,n=0;function i(){e++;let a=performance.now(),l=a-t;l>=1e3&&(o=Math.round(1e3*e/l),e=0,t=a),n=requestAnimationFrame(i)}return{start(){n=requestAnimationFrame(i)},stop(){cancelAnimationFrame(n)},get fps(){return o}}}();return D.current=e,e.start(),()=>e.stop()},[]);let L=(0,i.useCallback)(async(e,t)=>{if(!E.current.has(e)){E.current.add(e);try{await (0,h.requestRaw)(t)}catch{}finally{E.current.delete(e)}}},[]),N=(0,i.useCallback)(()=>{let e=Date.now(),t=document.getElementsByTagName("*").length,o=D.current?.fps??0,n={};l(i=>i.map((i,a)=>{let l=u[a],r=i[i.length-1];if("ms"===l.unit&&l.host){let t=(0,h.getLastRequestOutcome)(l.host),o=t&&e-t.ts<6e4;if(!t||!o)return l.probeUrl&&L(l.host,l.probeUrl),n[l.key]=!!t&&!t.ok,[...i.slice(1),r];n[l.key]=!t.ok;let a=t.ok?Math.round(t.latencyMs):r;return[...i.slice(1),a]}return"dom"===l.key?[...i.slice(1),t]:"fps"===l.key?[...i.slice(1),o]:i})),m(n),R(!0)},[L]);if((0,i.useEffect)(()=>{N();let e=setInterval(N,5e3);return()=>clearInterval(e)},[N]),!x)return(0,n.jsx)(c.rl,{title:o("health.title"),accentColor:d.A.accentColor,children:(0,n.jsx)(q,{children:o("health.measuring")})});let W=s.w4.colors.mainTextFaint,B=Object.values(r).filter(Boolean).length,H=u.filter(e=>"ms"===e.unit&&!r[e.key]&&a[u.indexOf(e)][23]>300).length,I=B>0?"bad":H>0?"warn":"ok",P=B>0?o("health.status.offline",{n:B}):H>0?o("health.status.slow",{n:H}):o("health.status.ok");return(0,n.jsx)(c.rl,{title:(0,n.jsxs)(g,{children:[(0,n.jsx)(w,{tone:I}),o("health.title")]}),accessory:(0,n.jsx)(b,{tone:I,children:P}),accentColor:d.A.accentColor,children:(0,n.jsx)(y,{children:(0,n.jsx)(k,{children:u.map((e,t)=>{let i=a[t],l=i[i.length-1],s=i[i.length-2]??l,c="ms"===e.unit,h=c&&!!r[e.key],p=!h&&c&&l>300,f=h?100:(l-e.floor)/(e.ceil-e.floor)*100,d=h?W:p?"#f85149":e.color,u=h?W:e.color,m=h?o("health.offline"):"dom"===e.key&&l>=1e3?`${(l/1e3).toFixed(1)}k`:String(Math.round(l)),x=h?"":e.unit,y=l-s,g=!h&&Math.abs(y)>=(c?10:2)?y>0?"up":"down":"flat",b=e.consumers?.length?o("health.consumers",{list:e.consumers.join(" \xb7 ")}):"";return(0,n.jsxs)($,{delay:t,children:[(0,n.jsxs)(j,{children:[(0,n.jsxs)(v,{children:[(0,n.jsx)(M,{children:o(e.labelKey)}),b&&(0,n.jsx)(F,{children:b})]}),(0,n.jsxs)(z,{children:[!h&&"flat"!==g&&(0,n.jsx)(S,{dir:g,latency:c,children:"up"===g?"▲":"down"===g?"▼":"\xb7"}),(0,n.jsxs)(C,{color:u,warn:p,children:[m,x&&(0,n.jsx)(T,{children:x})]})]})]}),(0,n.jsx)(A,{children:(0,n.jsx)(K,{pct:f,color:d})}),(0,n.jsx)(_,{children:i.map((t,o)=>{let a=Math.max(2,(t-e.floor)/(e.ceil-e.floor)*100);return(0,n.jsx)(U,{h:Math.min(100,a),color:h&&o===i.length-1?W:p&&o===i.length-1?"#f85149":e.color,latest:o===i.length-1},o)})})]},e.key)})})})})}}}]);