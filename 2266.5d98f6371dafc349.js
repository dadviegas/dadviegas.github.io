"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["2266"],{98689(e,t,o){o.d(t,{LiveDataWidget:()=>O});var n=o(65723),l=o(37991),a=o(36859),i=o.n(a),r=o(72799),s=o(6063),c=o(80884),h=o(14044),p=o(28170),f=o(98975),d=o(57438);let u=[{key:"crypto",labelKey:"health.ch.crypto",color:"#f7931a",unit:"ms",floor:0,ceil:500,consumers:["Crypto"],host:"api.coingecko.com",probeUrl:"https://api.coingecko.com/api/v3/ping"},{key:"weather",labelKey:"health.ch.weather",color:"#58a6ff",unit:"ms",floor:0,ceil:500,consumers:["Weather"],host:"api.open-meteo.com",probeUrl:"https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.14&current=temperature_2m"},{key:"wiki",labelKey:"health.ch.wiki",color:"#3fb950",unit:"ms",floor:0,ceil:500,consumers:["OnThisDay","WikiTop"],host:"en.wikipedia.org",probeUrl:"https://en.wikipedia.org/api/rest_v1/page/summary/Lisbon"},{key:"hn",labelKey:"health.ch.hn",color:"#f97316",unit:"ms",floor:0,ceil:500,consumers:["TechScope","HN Hot"],host:"hn.algolia.com",probeUrl:"https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=1"},{key:"dom",labelKey:"health.ch.dom",color:"#f87171",unit:"",floor:0,ceil:5e3},{key:"fps",labelKey:"health.ch.fps",color:"#d29922",unit:"fps",floor:0,ceil:120}],m=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,x=(0,r.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,y=i().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
  animation: ${m} 0.3s ease both;
`,g=i().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,w=i().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  ${({tone:e})=>{let t="ok"===e?s.w4.colors.success:"warn"===e?s.w4.colors.warning:s.w4.colors.danger;return`color: ${t}; background: ${t}1a; border: 1px solid ${t}33;`}}
`,b=i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({tone:e})=>"ok"===e?s.w4.colors.success:"warn"===e?s.w4.colors.warning:s.w4.colors.danger};
  animation: ${x} 1.5s ease-in-out infinite;
`,k=i().div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`,$=i().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${m} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
`,j=i().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,v=i().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,M=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,F=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainTextFaint};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,z=i().div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`,C=i().span`
  font-size: 14px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({color:e,warn:t})=>t?s.w4.colors.danger:e};
  transition: color ${s.w4.transitions.base};
  font-variant-numeric: tabular-nums;
`,T=i().span`
  font-size: 11px;
  font-weight: 400;
  opacity: 0.6;
`,S=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({dir:e,latency:t})=>"flat"===e?s.w4.colors.mainTextFaint:(t?"up"===e:"down"===e)?s.w4.colors.danger:s.w4.colors.success};
`,A=i().div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${s.w4.colors.border};
  overflow: hidden;
`,K=i().div`
  width: ${({pct:e})=>Math.min(100,e)}%;
  height: 100%;
  border-radius: 2px;
  background: ${({color:e})=>e};
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 6px ${({color:e})=>`${e}40`};
`,_=i().div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 16px;
`,U=i().div`
  flex: 1;
  height: ${({h:e})=>e}%;
  min-height: 1px;
  border-radius: 1px;
  background: ${({color:e,latest:t})=>t?e:`${e}40`};
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`,q=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.5;
`;function O({locale:e}){let t="pt"===e?"pt":"en",o=(0,l.useMemo)(()=>(0,p.Nx)(t,f.A),[t]),[a,i]=(0,l.useState)(()=>u.map(()=>Array(24).fill(0))),[r,m]=(0,l.useState)({}),[x,R]=(0,l.useState)(!1),D=(0,l.useRef)(null),E=(0,l.useRef)(new Set);(0,l.useEffect)(()=>{let e=function(){let e=0,t=performance.now(),o=60,n=0;function l(){e++;let a=performance.now(),i=a-t;i>=1e3&&(o=Math.round(1e3*e/i),e=0,t=a),n=requestAnimationFrame(l)}return{start(){n=requestAnimationFrame(l)},stop(){cancelAnimationFrame(n)},get fps(){return o}}}();return D.current=e,e.start(),()=>e.stop()},[]);let L=(0,l.useCallback)(async(e,t)=>{if(!E.current.has(e)){E.current.add(e);try{await (0,h.requestRaw)(t)}catch{}finally{E.current.delete(e)}}},[]),N=(0,l.useCallback)(()=>{let e=Date.now(),t=document.getElementsByTagName("*").length,o=D.current?.fps??0,n={};i(l=>l.map((l,a)=>{let i=u[a],r=l[l.length-1];if("ms"===i.unit&&i.host){let t=(0,h.getLastRequestOutcome)(i.host),o=t&&e-t.ts<6e4;if(!t||!o)return i.probeUrl&&L(i.host,i.probeUrl),n[i.key]=!!t&&!t.ok,[...l.slice(1),r];n[i.key]=!t.ok;let a=t.ok?Math.round(t.latencyMs):r;return[...l.slice(1),a]}return"dom"===i.key?[...l.slice(1),t]:"fps"===i.key?[...l.slice(1),o]:l})),m(n),R(!0)},[L]);if((0,l.useEffect)(()=>{N();let e=setInterval(N,5e3);return()=>clearInterval(e)},[N]),!x)return(0,n.jsx)(c.rl,{title:o("health.title"),accentColor:d.A.accentColor,children:(0,n.jsx)(q,{children:o("health.measuring")})});let W=s.w4.colors.mainTextFaint,B=Object.values(r).filter(Boolean).length,H=u.filter(e=>"ms"===e.unit&&!r[e.key]&&a[u.indexOf(e)][23]>300).length,I=B>0?"bad":H>0?"warn":"ok",P=B>0?o("health.status.offline",{n:B}):H>0?o("health.status.slow",{n:H}):o("health.status.ok");return(0,n.jsx)(c.rl,{title:(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{tone:I}),o("health.title")]}),accessory:(0,n.jsx)(w,{tone:I,children:P}),accentColor:d.A.accentColor,children:(0,n.jsx)(y,{children:(0,n.jsx)(k,{children:u.map((e,t)=>{let l=a[t],i=l[l.length-1],c=l[l.length-2]??i,h="ms"===e.unit,p=h&&!!r[e.key],f=!p&&h&&i>300,d=p?100:(i-e.floor)/(e.ceil-e.floor)*100,u=p?W:f?s.w4.colors.danger:e.color,m=p?W:e.color,x=p?o("health.offline"):"dom"===e.key&&i>=1e3?`${(i/1e3).toFixed(1)}k`:String(Math.round(i)),y=p?"":e.unit,g=i-c,w=!p&&Math.abs(g)>=(h?10:2)?g>0?"up":"down":"flat",b=e.consumers?.length?o("health.consumers",{list:e.consumers.join(" \xb7 ")}):"";return(0,n.jsxs)($,{delay:t,children:[(0,n.jsxs)(j,{children:[(0,n.jsxs)(v,{children:[(0,n.jsx)(M,{children:o(e.labelKey)}),b&&(0,n.jsx)(F,{children:b})]}),(0,n.jsxs)(z,{children:[!p&&"flat"!==w&&(0,n.jsx)(S,{dir:w,latency:h,children:"up"===w?"▲":"down"===w?"▼":"\xb7"}),(0,n.jsxs)(C,{color:m,warn:f,children:[x,y&&(0,n.jsx)(T,{children:y})]})]})]}),(0,n.jsx)(A,{children:(0,n.jsx)(K,{pct:d,color:u})}),(0,n.jsx)(_,{children:l.map((t,o)=>{let a=Math.max(2,(t-e.floor)/(e.ceil-e.floor)*100);return(0,n.jsx)(U,{h:Math.min(100,a),color:p&&o===l.length-1?W:f&&o===l.length-1?s.w4.colors.danger:e.color,latest:o===l.length-1},o)})})]},e.key)})})})})}}}]);